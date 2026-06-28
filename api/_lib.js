import { readFile } from "node:fs/promises";
import { createHmac, timingSafeEqual } from "node:crypto";
import { join } from "node:path";

const repo = process.env.GITHUB_REPO;
const branch = process.env.GITHUB_BRANCH || "main";
const token = process.env.GITHUB_TOKEN;
const secret = process.env.SESSION_SECRET || "change-this-secret-before-live";
const adminUser = process.env.ADMIN_USER || "admin";
const adminPass = process.env.ADMIN_PASS || "admin123";

export function send(res, status, body, headers = {}) {
  Object.entries(headers).forEach(([key, value]) => res.setHeader(key, value));
  res.status(status).json(body);
}

export function safeEqual(a, b) {
  const left = Buffer.from(String(a || ""));
  const right = Buffer.from(String(b || ""));
  return left.length === right.length && timingSafeEqual(left, right);
}

export function credentialsMatch(username, password) {
  return safeEqual(username, adminUser) && safeEqual(password, adminPass);
}

function base64url(value) {
  return Buffer.from(value).toString("base64url");
}

function sign(payload) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function makeCookie() {
  const payload = base64url(JSON.stringify({ user: adminUser, exp: Date.now() + 24 * 60 * 60 * 1000 }));
  return `afc_session=${payload}.${sign(payload)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=86400; Secure`;
}

export function clearCookie() {
  return "afc_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0; Secure";
}

export function isAuthed(req) {
  const cookie = req.headers.cookie || "";
  const raw = cookie.split(";").map((part) => part.trim()).find((part) => part.startsWith("afc_session="))?.split("=")[1];
  if (!raw) return false;
  const [payload, digest] = raw.split(".");
  if (!payload || !digest || !safeEqual(sign(payload), digest)) return false;
  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return session.exp > Date.now();
  } catch {
    return false;
  }
}

export async function getJson(req) {
  if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body)) return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");
  const raw = await collect(req, 1024 * 1024);
  return raw.length ? JSON.parse(raw.toString("utf8")) : {};
}

export function requireAdmin(req, res) {
  if (isAuthed(req)) return true;
  send(res, 401, { error: "Login required" });
  return false;
}

async function githubRequest(path, options = {}) {
  if (!repo || !token) throw new Error("GitHub persistence is not configured");
  const response = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
    ...options,
    headers: {
      "Accept": "application/vnd.github+json",
      "Authorization": `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {})
    }
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "GitHub request failed");
  return data;
}

export async function readContent() {
  if (repo && token) {
    const file = await githubRequest(`data/content.json?ref=${branch}`);
    return JSON.parse(Buffer.from(file.content, "base64").toString("utf8"));
  }
  const local = await readFile(join(process.cwd(), "data", "content.json"), "utf8");
  return JSON.parse(local);
}

export async function saveContent(content) {
  if (!repo || !token) throw new Error("Set GITHUB_REPO and GITHUB_TOKEN in Vercel to save admin changes");
  const current = await githubRequest(`data/content.json?ref=${branch}`);
  return githubRequest("data/content.json", {
    method: "PUT",
    body: JSON.stringify({
      message: "Update AfriConnect GH website content",
      branch,
      sha: current.sha,
      content: Buffer.from(`${JSON.stringify(content, null, 2)}\n`).toString("base64")
    })
  });
}

export async function saveUpload(filename, data) {
  if (!repo || !token) throw new Error("Set GITHUB_REPO and GITHUB_TOKEN in Vercel to save image uploads");
  return githubRequest(`public/uploads/${filename}`, {
    method: "PUT",
    body: JSON.stringify({
      message: `Upload AfriConnect GH banner ${filename}`,
      branch,
      content: Buffer.from(data).toString("base64")
    })
  });
}

export function slug(value) {
  return String(value || "item")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60) || "item";
}

export function collect(req, max = 8 * 1024 * 1024) {
  return new Promise((resolveBody, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > max) {
        reject(new Error("Payload too large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolveBody(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

export function parseMultipart(buffer, contentType) {
  const boundary = contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/)?.[1] || contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/)?.[2];
  if (!boundary) return { fields: {}, files: {} };
  const delimiter = Buffer.from(`--${boundary}`);
  const fields = {};
  const files = {};
  let start = buffer.indexOf(delimiter) + delimiter.length + 2;
  while (start > delimiter.length) {
    const next = buffer.indexOf(delimiter, start);
    if (next < 0) break;
    const part = buffer.subarray(start, next - 2);
    const split = part.indexOf(Buffer.from("\r\n\r\n"));
    if (split > -1) {
      const header = part.subarray(0, split).toString("utf8");
      const value = part.subarray(split + 4);
      const name = header.match(/name="([^"]+)"/)?.[1];
      const filename = header.match(/filename="([^"]*)"/)?.[1];
      const mime = header.match(/Content-Type:\s*([^\r\n]+)/i)?.[1] || "application/octet-stream";
      if (name && filename) files[name] = { filename, mime, data: value };
      if (name && !filename) fields[name] = value.toString("utf8");
    }
    start = next + delimiter.length + 2;
  }
  return { fields, files };
}
