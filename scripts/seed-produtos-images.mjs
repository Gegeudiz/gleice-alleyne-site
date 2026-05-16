/**
 * Cria public/images/produtos/ e copia PNGs de exemplo (vertical + larga por produto).
 * Executar: node scripts/seed-produtos-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcDir = path.join(root, "public", "images");
const destDir = path.join(root, "public", "images", "produtos");

/** [ id, ficheiroVertical, ficheiroLarga ] — use a mesma origem para larga se ainda não tiveres foto 16:9. */
const pairs = [
  ["terapia-online", "gleice-hero.png", "gleice-standing.png"],
  ["terapia-presencial", "gleice-portrait.png", "gleice-hero.png"],
  ["curso-emc", "gleice-mentoria.png", "gleice-studio.png"],
  ["cromoterapia", "gleice-seated.png", "gleice-office.png"],
  ["livro-versoes", "gleice-about.png", "gleice-about.png"],
  ["youtube", "gleice-studio.png", "gleice-standing.png"],
];

fs.mkdirSync(destDir, { recursive: true });

for (const [id, vFile, wFile] of pairs) {
  const vSrc = path.join(srcDir, vFile);
  const wSrc = path.join(srcDir, wFile);
  const vDest = path.join(destDir, `${id}-vertical.png`);
  const wDest = path.join(destDir, `${id}-wide.png`);
  if (!fs.existsSync(vSrc)) {
    console.warn("Falta origem:", vSrc);
    continue;
  }
  fs.copyFileSync(vSrc, vDest);
  fs.copyFileSync(fs.existsSync(wSrc) ? wSrc : vSrc, wDest);
  console.log("OK", id);
}

const note = `Imagens dos produtos (Nossos produtos — estilo Netflix)
============================================================

Para cada produto há DOIS ficheiros (substitui mantendo o nome):

  {id}-vertical.png  → cartão fechado (retrato ~3:4)
  {id}-wide.png      → cartão expandido (panorâmico ~16:9)

IDs atuais (nomes dos ficheiros):
  terapia-online
  terapia-presencial
  curso-emc
  cromoterapia
  livro-versoes
  youtube

Sugestão de tamanhos (exportação):
  vertical: cerca de 800×1060 px (ou proporção 3:4)
  larga:    cerca de 1600×900 px (16:9) — compõe o rosto/conteúdo ao centro para o crop ficar natural.

Formatos: PNG ou JPG. Se usares JPG, altera a função produtoImagePath em src/content/site.ts.
`;

fs.writeFileSync(leia, note, "utf8");
console.log("Atualizado LEIA-ME.txt");
