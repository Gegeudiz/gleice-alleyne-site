/** Links internos com hash funcionam a partir de qualquer rota. */
export function sitePath(href: string): string {
  if (href.startsWith("#")) return `/${href}`;
  if (href.startsWith("/")) return href;
  return href;
}
