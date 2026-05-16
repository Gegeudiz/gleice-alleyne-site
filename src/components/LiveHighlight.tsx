import { site } from "../content/site";

const y = site.youtube;

export function LiveHighlight() {
  return (
    <section className="live" id="live-youtube" aria-labelledby="live-heading">
      <div className="live__inner">
        <div className="live__visual">
          <span className="live__badge">{y.liveBadge}</span>
          <div className="live__photo-frame">
            <img
              src={y.liveImage}
              alt="Divulgação de live semanal no YouTube — Gleice Alleyne"
              className="live__photo"
              loading="lazy"
              decoding="async"
              width={900}
              height={1200}
            />
          </div>
        </div>
        <div className="live__content">
          <p className="live__eyebrow">{y.liveEyebrow}</p>
          <h2 id="live-heading" className="live__title">
            {y.liveTitle}
          </h2>
          <p className="live__meta">{y.liveDateLabel}</p>
          <div className="live__actions">
            <a className="btn btn--youtube" href={y.liveEventUrl} target="_blank" rel="noreferrer">
              <YouTubeIcon />
              Abrir Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function YouTubeIcon() {
  return (
    <svg className="btn__icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.4-1.9.5-3.8.5-5.8s0-3.9-.5-5.8ZM9.5 15.5v-7l6 3.5-6 3.5Z"
      />
    </svg>
  );
}
