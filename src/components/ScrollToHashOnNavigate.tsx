import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToHash } from "../lib/scrollToHash";

/** Após navegar para /#secao (ex.: vindo da página de técnicas), rola até a secção. */
export function ScrollToHashOnNavigate() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash || pathname !== "/") return;

    const id = requestAnimationFrame(() => {
      scrollToHash(hash, "smooth");
    });
    const retry = window.setTimeout(() => scrollToHash(hash, "smooth"), 120);

    return () => {
      cancelAnimationFrame(id);
      window.clearTimeout(retry);
    };
  }, [pathname, hash]);

  return null;
}
