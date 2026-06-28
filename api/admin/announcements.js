import { getJson, readContent, requireAdmin, saveContent, send, slug } from "../_lib.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return send(res, 405, { error: "Method not allowed" });
  if (!requireAdmin(req, res)) return;
  const body = await getJson(req);
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
