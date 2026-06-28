import { collect, parseMultipart, readContent, requireAdmin, saveContent, saveUpload, send, slug } from "../_lib.js";
import { extname } from "node:path";

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {
  if (req.method !== "POST") return send(res, 405, { error: "Method not allowed" });
  if (!requireAdmin(req, res)) return;
  const buffer = await collect(req);
  const { fields, files } = parseMultipart(buffer, req.headers["content-type"] || "");
  if (!files.image?.data?.length) return send(res, 400, { error: "Image is required" });
  const ext = [".png", ".jpg", ".jpeg", ".webp"].includes(extname(files.image.filename).toLowerCase())
    ? extname(files.image.filename).toLowerCase()
    : ".jpg";
  const filename = `${slug(fields.titleEn)}-${Date.now()}${ext}`;
  await saveUpload(filename, files.image.data);
  const content = await readContent();
  content.gallery ||= [];
  content.gallery.unshift({
    id: `${slug(fields.titleEn)}-${Date.now()}`,
    title: { en: fields.titleEn || "", fr: fields.titleFr || fields.titleEn || "" },
    caption: { en: fields.captionEn || "", fr: fields.captionFr || fields.captionEn || "" },
    image: `/uploads/${filename}`
  });
  await saveContent(content);
  return send(res, 200, content);
}
