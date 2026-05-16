import type { CSSProperties } from "react";
import { site } from "../content/site";

const gridAreas = ["c1", "c2", "c3"] as const;

export function Features() {
  const b = site.featuresBento;

  return (
    <section className="features features--bento" aria-labelledby="features-heading">
      <div className="section-head section-head--tight">
        <h2 id="features-heading" className="section-title">
          {b.title}
        </h2>
        <p className="section-lead">{b.lead}</p>
      </div>

      <div className="features-bento__grid">
        <article className="features-bento__photo">
          <img src={b.imageCard.src} alt={b.imageCard.alt} width={900} height={700} loading="lazy" decoding="async" />
        </article>

        {b.items.map((item, i) => (
          <article
            key={item.id}
            className="features-bento__card"
            style={{ gridArea: gridAreas[i] } as CSSProperties}
          >
            <span className="features-bento__icon" aria-hidden>
              <FeatureGlyph kind={item.icon} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}

        <article className="features-bento__cta">
          <h3>{b.ctaCard.title}</h3>
          <p>{b.ctaCard.body}</p>
          <a className="btn" href={b.ctaCard.href} target="_blank" rel="noreferrer">
            {b.ctaCard.buttonLabel}
          </a>
        </article>
      </div>
    </section>
  );
}

function FeatureGlyph({ kind }: { kind: "shield" | "lock" | "spark" }) {
  if (kind === "shield") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3l8 3v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === "lock") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="5" y="10" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l1.6 5.4L19 12l-5.4 3.6L12 21l-1.6-5.4L5 12l5.4-3.6L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
