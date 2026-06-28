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
  let image = "/assets/africonnect-flyer.png";
  if (files.image?.data?.length) {
    const ext = [".png", ".jpg", ".jpeg", ".webp"].includes(extname(files.image.filename).toLowerCase())
      ? extname(files.image.filename).toLowerCase()
      : ".png";
    const filename = `${slug(fields.titleEn)}-${Date.now()}${ext}`;
    await saveUpload(filename, files.image.data);
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
