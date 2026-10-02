import { site } from "../content/site";
import { SiteNavLink } from "./SiteNavLink";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="footer footer--light" id="contato">
      <div className="footer__inner">
        <div>
          <div className="footer__brand footer__brand--logo">
            <img
              className="footer__logo"
              src={site.brandLogoFull}
              alt={`${site.professionalName} — ${site.tagline}`}
              width={1000}
              height={860}
              loading="lazy"
              decoding="async"
            />
            <div>
              <p>Terapia Integrativa online para o mundo e presencial em Orlando/FL – EUA. Cursos, livros e mentorias para você viver com clareza, equilíbrio e propósito.</p>
              <SocialLinks className="footer__social" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="footer__label">Contato</h3>
          <ul className="footer__links">
            <li>
              <a href={site.whatsapp.hrefAgendarConsulta} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={site.youtube.channelVideosUrl} target="_blank" rel="noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="mailto:gleicealleyne@gmail.com">E-mail</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer__label">Navegue</h3>
          <ul className="footer__links">
            {site.nav.map((n) => (
              <li key={n.href}>
                <SiteNavLink href={n.href} label={n.label} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footer__legal">{site.footerNote}</p>
    </footer>
  );
}
