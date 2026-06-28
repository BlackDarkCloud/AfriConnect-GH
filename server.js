import { createServer } from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { randomBytes, timingSafeEqual } from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const publicDir = resolve(__dirname, "public");
const uploadDir = resolve(publicDir, "uploads");
const dataFile = resolve(__dirname, "data", "content.json");
const port = Number(process.env.PORT || 3000);
const adminUser = process.env.ADMIN_USER || "admin";
const adminPass = process.env.ADMIN_PASS || "admin123";
const sessions = new Map();

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

await mkdir(uploadDir, { recursive: true });

function send(res, status, payload, headers = {}) {
  const body = typeof payload === "string" ? payload : JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": typeof payload === "string" ? "text/plain; charset=utf-8" : "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...headers
  });
  res.end(body);
}

function collect(req, max = 8 * 1024 * 1024) {
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

async function readJson(req) {
  const raw = await collect(req, 1024 * 1024);
  return raw.length ? JSON.parse(raw.toString("utf8")) : {};
}

async function readContent() {
  return JSON.parse(await readFile(dataFile, "utf8"));
}

async function saveContent(content) {
  await writeFile(dataFile, `${JSON.stringify(content, null, 2)}\n`, "utf8");
}

function getCookie(req, name) {
  const cookies = req.headers.cookie || "";
  return cookies.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${name}=`))?.split("=")[1];
}

function isAuthed(req) {
  const token = getCookie(req, "afc_session");
  return token && sessions.has(token);
}

function safeEqual(a, b) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

function slug(value) {
  return String(value || "item")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60) || "item";
}

function parseMultipart(buffer, contentType) {
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

async function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const requestPath = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const target = normalize(resolve(publicDir, `.${requestPath}`));
  if (!target.startsWith(publicDir)) return send(res, 403, "Forbidden");
  try {
    const info = await stat(target);
    if (!info.isFile()) return send(res, 404, "Not found");
    const ext = extname(target).toLowerCase();
    res.writeHead(200, {
      "Content-Type": types[ext] || "application/octet-stream",
      "Cache-Control": requestPath.startsWith("/uploads/") || requestPath.startsWith("/assets/")
        ? "public, max-age=604800"
        : "no-cache",
      "X-Content-Type-Options": "nosniff"
    });
    createReadStream(target).pipe(res);
  } catch {
    const fallback = join(publicDir, "index.html");
    res.writeHead(200, { "Content-Type": types[".html"], "Cache-Control": "no-cache" });
    createReadStream(fallback).pipe(res);
  }
}

async function handleApi(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET" && url.pathname === "/api/content") {
    return send(res, 200, await readContent());
  }

  if (req.method === "GET" && url.pathname === "/api/session") {
    return send(res, 200, { authenticated: Boolean(isAuthed(req)), user: isAuthed(req) ? adminUser : null });
  }

  if (req.method === "POST" && url.pathname === "/api/login") {
    const { username, password } = await readJson(req);
    if (safeEqual(username || "", adminUser) && safeEqual(password || "", adminPass)) {
      const token = randomBytes(32).toString("hex");
      sessions.set(token, { user: adminUser, createdAt: Date.now() });
      return send(res, 200, { ok: true }, {
        "Set-Cookie": `afc_session=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=86400`
      });
    }
    return send(res, 401, { error: "Invalid login" });
  }

  if (req.method === "POST" && url.pathname === "/api/logout") {
    const token = getCookie(req, "afc_session");
    if (token) sessions.delete(token);
    return send(res, 200, { ok: true }, {
      "Set-Cookie": "afc_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0"
    });
  }

  if (!isAuthed(req)) return send(res, 401, { error: "Login required" });

  if (req.method === "POST" && url.pathname === "/api/admin/announcements") {
    const body = await readJson(req);
    const content = await readContent();
    content.announcements.unshift({
      id: `${slug(body.titleEn)}-${Date.now()}`,
      title: { en: body.titleEn || "", fr: body.titleFr || body.titleEn || "" },
      body: { en: body.bodyEn || "", fr: body.bodyFr || body.bodyEn || "" },
      date: new Date().toISOString().slice(0, 10)
    });
    await saveContent(content);
    return send(res, 200, content);
  }

  if (req.method === "POST" && url.pathname === "/api/admin/offers") {
    const body = await readJson(req);
    const content = await readContent();
    content.offers.unshift({
      id: `${slug(body.titleEn)}-${Date.now()}`,
      title: { en: body.titleEn || "", fr: body.titleFr || body.titleEn || "" },
      body: { en: body.bodyEn || "", fr: body.bodyFr || body.bodyEn || "" },
      price: body.price || "",
      tag: { en: body.tagEn || "Offer", fr: body.tagFr || "Offre" }
    });
    await saveContent(content);
    return send(res, 200, content);
  }

  if (req.method === "POST" && url.pathname === "/api/admin/banners") {
    const buffer = await collect(req);
    const { fields, files } = parseMultipart(buffer, req.headers["content-type"] || "");
    let image = fields.existingImage || "/assets/africonnect-flyer.png";
    if (files.image?.data?.length) {
      const ext = [".png", ".jpg", ".jpeg", ".webp"].includes(extname(files.image.filename).toLowerCase())
        ? extname(files.image.filename).toLowerCase()
        : ".png";
      const filename = `${slug(fields.titleEn)}-${Date.now()}${ext}`;
      await writeFile(join(uploadDir, filename), files.image.data);
      image = `/uploads/${filename}`;
    }
    const content = await readContent();
    content.banners.unshift({
      id: `${slug(fields.titleEn)}-${Date.now()}`,
      title: { en: fields.titleEn || "", fr: fields.titleFr || fields.titleEn || "" },
      body: { en: fields.bodyEn || "", fr: fields.bodyFr || fields.bodyEn || "" },
      image
    });
    await saveContent(content);
    return send(res, 200, content);
  }

  if (req.method === "DELETE" && url.pathname.startsWith("/api/admin/")) {
    const [, , , collection, id] = url.pathname.split("/");
    if (!["announcements", "offers", "banners"].includes(collection)) return send(res, 404, { error: "Unknown item" });
    const content = await readContent();
    content[collection] = content[collection].filter((item) => item.id !== id);
    await saveContent(content);
    return send(res, 200, content);
  }

  return send(res, 404, { error: "Not found" });
}

createServer(async (req, res) => {
  try {
    if (req.url.startsWith("/api/")) return await handleApi(req, res);
    return await serveStatic(req, res);
  } catch (error) {
    return send(res, error.message === "Payload too large" ? 413 : 500, { error: error.message || "Server error" });
  }
}).listen(port, () => {
  console.log(`AfriConnect GH running at http://localhost:${port}`);
});
