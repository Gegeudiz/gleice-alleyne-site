import { site } from "../content/site";

export function Hero() {
  return (
    <div className="hero hero--health" aria-labelledby="hero-heading">
      <div className="hero-health">
        <div className="hero-health__copy">
          <p className="hero-health__tag">{site.hero.pill}</p>
          <h1 id="hero-heading" className="hero-health__title">
            {site.hero.title}
          </h1>
          <p className="hero-health__subtitle">{site.hero.subtitle}</p>
          <a className="btn btn--cta-hero" href={site.whatsapp.hrefAgendarConsulta} target="_blank" rel="noreferrer">
            {site.hero.ctaPrimary}
            <span className="btn--cta-hero__circle" aria-hidden>
              <span className="btn--cta-hero__arrow">→</span>
            </span>
          </a>
        </div>

        <div className="hero-health__visual">
          <div className="hero-health__phone-wrap">
            <div className="hero-health__phone-shell" aria-hidden>
              <div className="hero-health__phone-notch" />
              <div className="hero-health__phone-screen">
                <img
                  src={site.hero.phoneImage}
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
            <ul className="hero-health__tags">
              {site.hero.floatTags.map((t) => (
                <li key={t}>
                  <span className="hero-health__tag-mark" aria-hidden>
                    ✓
                  </span>
                  {t}
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8a2 2 0 0 1 2-2h9l4-2v14l-4-2H6a2 2 0 0 1-2-2V8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.5 3.5h11a2 2 0 0 1 2 2v6a8 8 0 0 1-8 8h0a8 8 0 0 1-8-8v-6a2 2 0 0 1 2-2Z"
        fill="currentColor"
      />
    </svg>
  );
}
