import type { To } from "react-router-dom";

/** Destino do React Router para links do menu e rodapé. */
export function navTo(href: string): To {
  if (href.startsWith("#")) {
    return { pathname: "/", hash: href.slice(1) };
  }
  return href;
}
