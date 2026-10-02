import { site } from "../content/site";
import { LineIcon } from "./LineIcon";

export function Hero() {
  const h = site.hero;

  return (
    <div className="hero hero--lp" aria-labelledby="hero-heading">
      <div className="hero-lp">
        <div className="hero-lp__copy">
          <p className="lp-kicker">{h.pill}</p>
          <h1 id="hero-heading" className="hero-lp__title">
            {h.titleLead} <span className="hero-lp__accent">{h.titleAccent}</span>
          </h1>
          <p className="hero-lp__subtitle">{h.subtitle}</p>

          <ul className="hero-lp__modes" aria-label="Formas de atendimento">
            {h.modalities.map((m) => (
              <li key={m.title} className="hero-lp__mode">
                <span className="hero-lp__mode-icon">
                  <LineIcon kind={m.icon} size={20} />
                </span>
                <span>
                  <strong>{m.title}</strong>
                  <small>{m.body}</small>
                </span>
              </li>
            ))}
          </ul>

          <div className="hero-lp__actions">
            <a className="btn btn--plum btn--lg" href={site.whatsapp.hrefAgendarConsulta} target="_blank" rel="noreferrer">
              {h.ctaPrimary}
              <LineIcon kind="arrow" size={18} />
            </a>
          </div>
        </div>

        <div className="hero-lp__visual">
          <div className="hero-lp__stage">
            <aside className="hero-lp__note" aria-hidden>
              <p>{h.note}</p>
            </aside>

            <div className="hero-health__phone-shell hero-lp__phone" aria-hidden>
              <div className="hero-health__phone-notch" />
              <div className="hero-health__phone-screen">
                <img
                  src={h.phoneImage}
                  alt=""
                  className="hero-health__phone-img"
                  width={720}
                  height={1280}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <div className="hero-health__callbar">
                <button type="button" tabIndex={-1} aria-hidden="true">
                  <MicIcon />
                </button>
                <button type="button" tabIndex={-1} aria-hidden="true">
                  <CamIcon />
                </button>
                <button type="button" className="hero-health__callbar-end" tabIndex={-1} aria-hidden="true">
                  <PhoneDownIcon />
                </button>
              </div>
            </div>

            <ul className="hero-lp__cards" aria-label="Vantagens do atendimento online">
              {h.floatCards.map((c, i) => (
                <li key={c.title} className="hero-lp__card" style={{ animationDelay: `${i * 0.12}s` }}>
                  <span className="hero-lp__card-icon">
                    <LineIcon kind={c.icon} size={20} />
                  </span>
                  <span>
                    <strong>{c.title}</strong>
                    <small>{c.body}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function MicIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V22h2v-2.08A7 7 0 0 0 19 11h-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CamIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.02V7.46l-4 3.02z" />
    </svg>
  );
}

function PhoneDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      style={{ transform: "rotate(135deg)" }}
    >
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.57c-2.83-1.44-5.15-3.75-6.59-6.59l1.57-1.57a.977.977 0 0 0 .24-1.01c-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    </svg>
  );
}
