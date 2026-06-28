import { readContent, requireAdmin, saveContent, send } from "../../_lib.js";

export default async function handler(req, res) {
  if (req.method !== "DELETE") return send(res, 405, { error: "Method not allowed" });
  if (!requireAdmin(req, res)) return;
  const { collection, id } = req.query;
  if (!["announcements", "offers", "banners"].includes(collection)) return send(res, 404, { error: "Unknown item" });
  const content = await readContent();
  content[collection] = content[collection].filter((item) => item.id !== id);
  await saveContent(content);
  return send(res, 200, content);
}
