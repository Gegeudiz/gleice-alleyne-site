import { useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../content/site";
import { navTo } from "../lib/navTo";
import { BrandLogo } from "./BrandLogo";
import { SiteNavLink } from "./SiteNavLink";
import { SocialLinks } from "./SocialLinks";

type HeaderProps = {
  /** `masthead` = topo do site; `page` = páginas internas */
  variant?: "masthead" | "page";
};

export function Header({ variant = "masthead" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const inMasthead = variant === "masthead";

  return (
    <header
      className={`header header--dark header--health${inMasthead ? " header--in-masthead" : " header--standalone"}`}
    >
      <div className="header__inner header__inner--health">
        <Link className="header__brand" to={inMasthead ? navTo("#topo") : "/"} onClick={() => setOpen(false)}>
          <BrandLogo className="header__mark header__mark--logo" />
          <strong>{site.brandShort}</strong>
        </Link>

        <nav
          id="menu-principal"
          className={`header__nav${open ? " header__nav--open" : ""}`}
          aria-label="Principal"
        >
          {site.navMain.map((item) => (
            <SiteNavLink key={item.href} href={item.href} label={item.label} onNavigate={() => setOpen(false)} />
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
