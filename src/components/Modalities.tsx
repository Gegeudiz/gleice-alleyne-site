import { Link } from "react-router-dom";
import { site } from "../content/site";

/** Online ou presencial — dois cartões com CTA direto para o WhatsApp. */
export function Modalities() {
  const m = site.modalities;

  return (
    <section className="modalities" id={m.id} aria-labelledby="modalities-heading">
      <div className="section-head">
        <h2 id="modalities-heading" className="section-title">
          {m.title}
        </h2>
        <p className="section-lead">{m.lead}</p>
      </div>

      <div className="modalities__grid">
        {m.items.map((item) => (
          <article key={item.id} className={`modality modality--${item.id}`}>
            <div className="modality__media">
              <img src={item.image} alt="" width={900} height={600} loading="lazy" decoding="async" />
              <span className="modality__kicker">{item.kicker}</span>
            </div>
            <div className="modality__body">
              <h3 className="modality__title">{item.title}</h3>
              <ul className="modality__list">
                {item.bullets.map((b) => (
                  <li key={b}>
                    <span className="modality__check" aria-hidden>
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <a className="btn btn--primary modality__btn" href={item.href} target="_blank" rel="noreferrer">
                {item.ctaLabel}
                <span className="btn__arrow" aria-hidden>
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="modalities__foot">
        <Link to={site.integrativeTechniques.path} className="modalities__link">
          {m.techniquesLink} →
        </Link>
      </p>
    </section>
  );
}
