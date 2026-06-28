import { credentialsMatch, getJson, makeCookie, send } from "./_lib.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return send(res, 405, { error: "Method not allowed" });
  const { username, password } = await getJson(req);
  if (!credentialsMatch(username, password)) return send(res, 401, { error: "Invalid login" });
  return send(res, 200, { ok: true }, { "Set-Cookie": makeCookie() });
}
