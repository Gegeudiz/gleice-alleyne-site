import { useState } from "react";
import { site } from "../content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header header--dark header--in-masthead header--health">
      <div className="header__inner header__inner--health">
        <a className="header__brand" href="#topo" onClick={() => setOpen(false)}>
          <span className="header__mark header__mark--cross" aria-hidden>
            <CrossPlusIcon />
          </span>
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
            <div className="header__lang">Português (BR) · conteúdo de teste</div>
            <a
              className="btn btn--health-cta btn--block"
              href={site.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Acessar conta
            </a>
            <div className="header__social">
              {site.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                  <SocialGlyph kind={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="header__toolbar">
          <span className="header__lang-pill">BR ▾</span>
          <a className="btn--enter-desktop" href={site.whatsapp.href} target="_blank" rel="noreferrer">
            Entrar <span aria-hidden>→</span>
          </a>
        </div>

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

function CrossPlusIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function SocialGlyph({ kind }: { kind: "instagram" | "youtube" | "linkedin" }) {
  if (kind === "youtube") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M21.6 7.2c-.2-1-.9-1.8-1.9-2C17.8 4.8 12 4.8 12 4.8s-5.8 0-7.7.4c-1 .2-1.7 1-1.9 2C2 9 2 12 2 12s0 3 .3 4.8c.2 1 .9 1.8 1.9 2 1.9.4 7.7.4 7.7.4s5.8 0 7.7-.4c1-.2 1.7-1 1.9-2 .3-1.8.3-4.8.3-4.8s0-3-.3-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    );
  }
  if (kind === "linkedin") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M6.5 8.5h-3V21h3V8.5ZM5 6.9c1 0 1.8-.8 1.8-1.8S6 3.3 5 3.3 3.2 4.1 3.2 5.1 4 6.9 5 6.9ZM21 21h-3v-5.6c0-3.4-4-3.1-4 0V21h-3V8.5h3v1.8c1.4-2.6 7-2.8 7 2.5V21Z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
