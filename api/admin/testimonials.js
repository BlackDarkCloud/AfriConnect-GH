import { getJson, readContent, requireAdmin, saveContent, send, slug } from "../_lib.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return send(res, 405, { error: "Method not allowed" });
  if (!requireAdmin(req, res)) return;
  const body = await getJson(req);
  const content = await readContent();
  content.testimonials ||= [];
  content.testimonials.unshift({
    id: `${slug(body.name)}-${Date.now()}`,
    name: body.name || "Client",
    role: { en: body.roleEn || "", fr: body.roleFr || body.roleEn || "" },
    quote: { en: body.quoteEn || "", fr: body.quoteFr || body.quoteEn || "" },
    rating: Math.max(1, Math.min(5, Number(body.rating || 5)))
  });
  await saveContent(content);
  return send(res, 200, content);
}
