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
      className={`header header--light header--health${inMasthead ? " header--in-masthead" : " header--standalone"}`}
    >
      <div className="header__inner header__inner--health">
        <Link className="header__brand" to={inMasthead ? navTo("#topo") : "/"} onClick={() => setOpen(false)}>
          <BrandLogo className="header__mark header__mark--logo" />
          <span className="header__brand-text">
            <strong>{site.brandShort}</strong>
            <small>{site.tagline}</small>
          </span>
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
            <a className="btn btn--plum header__nav-cta" href={site.headerCta.href} target="_blank" rel="noreferrer">
              {site.headerCta.label}
            </a>
            <SocialLinks className="header__social" />
          </div>
        </nav>

        <div className="header__actions header__actions--light">
          <a className="btn btn--plum btn--sm header__cta" href={site.headerCta.href} target="_blank" rel="noreferrer">
            <CalendarIcon />
            {site.headerCta.label}
          </a>
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
      </div>
      {open ? (
        <button type="button" className="header__scrim" aria-label="Fechar menu" onClick={() => setOpen(false)} />
      ) : null}
    </header>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </svg>
  );
}
