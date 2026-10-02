import { Header } from "./Header";
import { Hero } from "./Hero";
import type { CSSProperties } from "react";
import { site } from "../content/site";

/**
 * Topo: fotografia de ambiente (mesa com Bíblia, café e caderno · bandeira)
 * com um véu creme para legibilidade, menu e hero com o telemóvel (chamada de vídeo).
 * No telemóvel usa a versão vertical da foto, visível logo no início da página.
 */
export function Masthead() {
  const photoVars = {
    "--hero-bg": `url(${site.hero.backgroundImage})`,
    "--hero-bg-mobile": `url(${site.hero.backgroundImageMobile})`,
  } as CSSProperties;

  return (
    <section className="masthead masthead--light masthead--photo" id="topo" aria-label="Início">
      <div className="masthead__photo" style={photoVars} aria-hidden />
      <div className="masthead__veil" aria-hidden />
      <div className="masthead__front">
        <Header />
        <Hero />
      </div>
    </section>
  );
}
