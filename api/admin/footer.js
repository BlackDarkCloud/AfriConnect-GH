import { getJson, readContent, requireAdmin, saveContent, send } from "../_lib.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return send(res, 405, { error: "Method not allowed" });
  if (!requireAdmin(req, res)) return;
  const body = await getJson(req);
  const content = await readContent();
  content.settings ||= {};
  content.settings.footer ||= {};
  content.settings.footer.tagline = {
    en: body.taglineEn || "",
    fr: body.taglineFr || body.taglineEn || ""
  };
  await saveContent(content);
  return send(res, 200, content);
}
