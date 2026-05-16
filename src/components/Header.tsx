import { useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { SocialLinks } from "./SocialLinks";
import { site } from "../content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header header--dark header--in-masthead header--health">
      <div className="header__inner header__inner--health">
        <a className="header__brand" href="#topo" onClick={() => setOpen(false)}>
          <BrandLogo className="header__mark header__mark--logo" />
          <strong>{site.brandShort}</strong>
        </a>

        <nav
          id="menu-principal"
          className={`header__nav${open ? " header__nav--open" : ""}`}
          aria-label="Principal"
        >
          <button type="button" className="header__nav-close" onClick={() => setOpen(false)} aria-label="Fechar menu">
            <span aria-hidden>✕</span>
            Fechar
          </button>
          {site.navMain.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <div className="header__nav-footer">
            <SocialLinks className="header__social" />
          </div>
        </nav>

        <button
          type="button"
          className={`header__burger${open ? " header__burger--open" : ""}`}
          aria-expanded={open}
          aria-controls="menu-principal"
          id="menu-button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span />
          <span />
        </button>
      </div>
      {open ? (
        <button type="button" className="header__scrim" aria-label="Fechar menu" onClick={() => setOpen(false)} />
      ) : null}
    </header>
  );
}
