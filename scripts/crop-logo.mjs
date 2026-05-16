import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const input = join(root, "public/images/logo-ga-source.png");
const logoOut = join(root, "public/images/logo-ga.png");
const faviconOut = join(root, "public/favicon.png");
const appleOut = join(root, "public/apple-touch-icon.png");

const meta = await sharp(input).metadata();
const size = Math.round(Math.min(meta.width, meta.height) * 0.52);
const left = Math.round((meta.width - size) / 2);
const top = Math.round((meta.height - size) / 2);

const cropped = sharp(input).extract({ left, top, width: size, height: size });

await cropped.clone().resize(512, 512).png().toFile(logoOut);
await cropped.clone().resize(32, 32).png().toFile(faviconOut);
await cropped.clone().resize(180, 180).png().toFile(appleOut);

console.log("Logo e favicons gerados em public/");
