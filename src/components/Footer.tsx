import { site } from "../content/site";

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer__inner">
        <div>
          <div className="footer__brand">
            <span className="header__mark header__mark--light" aria-hidden />
            <div>
              <strong>{site.professionalName}</strong>
              <p>Canal de informações e encaminhamento — sem atendimento clínico por mensagem neste site (texto teste).</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="footer__label">Contato (teste)</h3>
          <ul className="footer__links">
            <li>
              <a href={site.whatsapp.href} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={site.youtube.channelUrl} target="_blank" rel="noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="mailto:contato.teste@gleicealleyne.com.br">E-mail de teste</a>
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
