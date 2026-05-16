import { BrandLogo } from "./BrandLogo";
import { SocialLinks } from "./SocialLinks";
import { site } from "../content/site";

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer__inner">
        <div>
          <div className="footer__brand">
            <BrandLogo className="header__mark header__mark--logo header__mark--light" />
            <div>
              <strong>{site.professionalName}</strong>
              <p>Você está a um passo de ter um atendimento personalizado. Nossos produtos, livros e serviços foram projetados para levar você a um próximo nível de vida.</p>
              <SocialLinks className="footer__social" />
            </div>
          </div>
        </div>
        <div>
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
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footer__legal">{site.footerNote}</p>
    </footer>
  );
}
