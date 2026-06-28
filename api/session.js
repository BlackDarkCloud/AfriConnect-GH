import { isAuthed, send } from "./_lib.js";

export default function handler(req, res) {
  if (req.method !== "GET") return send(res, 405, { error: "Method not allowed" });
  return send(res, 200, { authenticated: isAuthed(req) });
}
