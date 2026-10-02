/**
 * Gera as versões da logo a partir de `public/images/logo-gleice-alleyne-source.jpg`:
 *  - remove o fundo creme (fica transparente);
 *  - `public/images/logo-gleice-alleyne.png`  → logo completa (símbolo + nome + tagline);
 *  - `public/images/logo-ga.png`              → só o símbolo (header / rodapé), quadrado 512px;
 *  - `public/favicon.png` (64px) e `public/apple-touch-icon.png` (180px, fundo creme).
 *
 * Executar: `node scripts/crop-logo.mjs`
 */
import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const input = join(root, "public/images/logo-gleice-alleyne-source.jpg");
const fullOut = join(root, "public/images/logo-gleice-alleyne.png");
const markOut = join(root, "public/images/logo-ga.png");
const faviconOut = join(root, "public/favicon.png");
const appleOut = join(root, "public/apple-touch-icon.png");

const CREAM = { r: 250, g: 247, b: 242 };

const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;
const N = W * H;

// 1) alfa por pixel: quanto mais escuro ou mais saturado que o creme, mais opaco
const alpha = new Float32Array(N);
for (let p = 0; p < N; p++) {
  const i = p * 3;
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const mn = Math.min(r, g, b);
  const mx = Math.max(r, g, b);
  const dark = clamp((212 - mn) / 25);
  const chroma = clamp((mx - mn - 20) / 18);
  // corta o brilho/sombra suave à volta das formas (evita halo claro em fundos escuros)
  alpha[p] = Math.pow(clamp((Math.max(dark, chroma) - 0.18) / 0.82), 1.35);
}

// 2) fundo local estimado (convolução normalizada só com pixels de fundo) para "des-misturar" as bordas
const bg = estimateBackground(data, alpha, W, H, 48);

const rgba = Buffer.alloc(N * 4);
for (let p = 0; p < N; p++) {
  const i = p * 3, o = p * 4;
  const a = alpha[p];
  if (a <= 0) {
    rgba[o] = rgba[o + 1] = rgba[o + 2] = 0;
    rgba[o + 3] = 0;
    continue;
  }
  for (let c = 0; c < 3; c++) {
    const P = data[i + c];
    const B = bg[i + c];
    const C = a >= 0.999 ? P : (P - (1 - a) * B) / a;
    rgba[o + c] = Math.round(Math.max(0, Math.min(255, C)));
  }
  rgba[o + 3] = Math.round(a * 255);
}

const full = sharp(rgba, { raw: { width: W, height: H, channels: 4 } }).png();

// 3) caixa envolvente da logo completa
const box = bbox(alpha, W, H, 0, H, 0.08);
await full
  .clone()
  .extract(pad(box, 24, W, H))
  .png({ compressionLevel: 9 })
  .toFile(fullOut);

// 4) símbolo: o nome começa na primeira linha (abaixo de metade) em que há tinta perto da margem esquerda
let cutY = Math.round(H * 0.55);
for (let y = Math.round(H * 0.45); y < Math.round(H * 0.7); y++) {
  let minX = W;
  for (let x = 0; x < W; x++) {
    if (alpha[y * W + x] > 0.5) {
      minX = x;
      break;
    }
  }
  if (minX < W * 0.18) {
    cutY = y - 2;
    break;
  }
}
const markBox = squareBox(bbox(alpha, W, H, 0, cutY, 0.45), W, H, 0.08);
// apaga tudo abaixo do corte para o quadrado não apanhar o topo do nome
const markRgba = Buffer.from(rgba);
markRgba.fill(0, cutY * W * 4);
const mark = sharp(markRgba, { raw: { width: W, height: H, channels: 4 } }).png().extract(markBox);

await mark.clone().resize(512, 512).png({ compressionLevel: 9 }).toFile(markOut);
await mark.clone().resize(64, 64).png().toFile(faviconOut);
await mark
  .clone()
  .resize(150, 150)
  .extend({ top: 15, bottom: 15, left: 15, right: 15, background: { ...CREAM, alpha: 1 } })
  .flatten({ background: CREAM })
  .png()
  .toFile(appleOut);

console.log(`Logo completa: ${fullOut}`);
console.log(`Símbolo (corte em y=${cutY}): ${markOut}`);
console.log("favicon.png e apple-touch-icon.png atualizados.");

// ————— helpers —————
function clamp(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function bbox(a, w, h, y0, y1, thr) {
  let minX = w, minY = h, maxX = -1, maxY = -1;
  for (let y = y0; y < y1; y++) {
    for (let x = 0; x < w; x++) {
      if (a[y * w + x] > thr) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

function pad(b, px, w, h) {
  const left = Math.max(0, b.left - px);
  const top = Math.max(0, b.top - px);
  const right = Math.min(w, b.left + b.width + px);
  const bottom = Math.min(h, b.top + b.height + px);
  return { left, top, width: right - left, height: bottom - top };
}

function squareBox(b, w, h, padRatio) {
  const size = Math.round(Math.max(b.width, b.height) * (1 + padRatio * 2));
  const cx = b.left + b.width / 2;
  const cy = b.top + b.height / 2;
  let left = Math.round(cx - size / 2);
  let top = Math.round(cy - size / 2);
  left = Math.max(0, Math.min(w - size, left));
  top = Math.max(0, Math.min(h - size, top));
  return { left, top, width: Math.min(size, w), height: Math.min(size, h) };
}

/** Média local (raio r) dos pixels considerados fundo, via tabelas de soma acumulada. */
function estimateBackground(src, a, w, h, r) {
  const stride = w + 1;
  const satR = new Float64Array(stride * (h + 1));
  const satG = new Float64Array(stride * (h + 1));
  const satB = new Float64Array(stride * (h + 1));
  const satM = new Float64Array(stride * (h + 1));
  for (let y = 1; y <= h; y++) {
    let rr = 0, gg = 0, bb = 0, mm = 0;
    for (let x = 1; x <= w; x++) {
      const p = (y - 1) * w + (x - 1);
      const m = a[p] <= 0 ? 1 : 0;
      rr += src[p * 3] * m;
      gg += src[p * 3 + 1] * m;
      bb += src[p * 3 + 2] * m;
      mm += m;
      const k = y * stride + x;
      satR[k] = satR[k - stride] + rr;
      satG[k] = satG[k - stride] + gg;
      satB[k] = satB[k - stride] + bb;
      satM[k] = satM[k - stride] + mm;
    }
  }
  const out = new Float32Array(w * h * 3);
  const area = (sat, x0, y0, x1, y1) =>
    sat[y1 * stride + x1] - sat[y0 * stride + x1] - sat[y1 * stride + x0] + sat[y0 * stride + x0];
  for (let y = 0; y < h; y++) {
    const y0 = Math.max(0, y - r), y1 = Math.min(h, y + r + 1);
    for (let x = 0; x < w; x++) {
      const x0 = Math.max(0, x - r), x1 = Math.min(w, x + r + 1);
      let m = area(satM, x0, y0, x1, y1);
      const o = (y * w + x) * 3;
      if (m < 1) {
        // sem fundo por perto: alarga a janela
        const R = r * 4;
        const X0 = Math.max(0, x - R), Y0 = Math.max(0, y - R), X1 = Math.min(w, x + R + 1), Y1 = Math.min(h, y + R + 1);
        m = area(satM, X0, Y0, X1, Y1) || 1;
        out[o] = area(satR, X0, Y0, X1, Y1) / m;
        out[o + 1] = area(satG, X0, Y0, X1, Y1) / m;
        out[o + 2] = area(satB, X0, Y0, X1, Y1) / m;
      } else {
        out[o] = area(satR, x0, y0, x1, y1) / m;
        out[o + 1] = area(satG, x0, y0, x1, y1) / m;
        out[o + 2] = area(satB, x0, y0, x1, y1) / m;
      }
    }
  }
  return out;
}
