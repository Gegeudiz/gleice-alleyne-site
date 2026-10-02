import { site } from "../content/site";

function FiveStars() {
  return (
    <div className="quote-card__stars" role="img" aria-label="Avaliação: 5 de 5 estrelas">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className="quote-card__star" width="16" height="16" viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  );
}

function initials(name: string): string {
  const parts = name.replace(/\./g, "").trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export function Testimonials() {
  const h = site.testimonialsHead;
  return (
    <section className="quotes" id={h.id} aria-labelledby="quotes-heading">
      <div className="lp-head">
        <p className="lp-kicker">{h.kicker}</p>
        <h2 id="quotes-heading" className="section-title section-title--left">
          {h.title}
        </h2>
      </div>
      <div className="quotes__grid">
        {site.testimonials.map((t) => (
          <figure key={t.author} className="quote-card quote-card--lp">
            <div className="quote-card__top">
              <span className="quote-card__avatar" aria-hidden>
                {initials(t.author)}
              </span>
              <FiveStars />
            </div>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              <strong>— {t.author}</strong>
              <span>{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
