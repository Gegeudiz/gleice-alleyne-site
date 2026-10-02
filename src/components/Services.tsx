import { site } from "../content/site";
import { LeafDecor } from "./LeafDecor";
import { LineIcon } from "./LineIcon";
import { SmartLink } from "./SmartLink";

/**
 * «O que é a Terapia Integrativa Cristã?» — explicação + 3 pilares,
 * seguida de «Técnicas de Terapia Integrativa Aplicadas:» com 4 cartões.
 */
export function Services() {
  const s = site.services;

  return (
    <section className="services" id={s.id} aria-labelledby="services-heading">
      <LeafDecor className="services__leaf" flip />

      <div className="services__intro">
        <div className="services__intro-head">
          <p className="lp-kicker">{s.kicker}</p>
          <h2 id="services-heading" className="section-title section-title--left">
            {s.title}
          </h2>
          <ul className="services__pillars" aria-label="Pilares da abordagem">
            {s.pillars.map((p) => (
              <li key={p.label}>
                <span className="services__pillar-icon">
                  <LineIcon kind={p.icon} size={18} />
                </span>
                {p.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="services__text">
          {s.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <h3 className="services__subtitle">{s.cardsTitle}</h3>

      <div className="services__grid">
        {s.items.map((item) => (
          <article key={item.id} className="service-card">
            <span className="service-card__icon">
              <LineIcon kind={item.icon} size={24} />
            </span>
            <h3 className="service-card__title">{item.title}</h3>
            <p className="service-card__body">{item.body}</p>
            <SmartLink href={item.href} className="service-card__link">
              <span className="service-card__link-label">{item.linkLabel}</span>
              <span className="service-card__arrow" aria-hidden>
                <LineIcon kind="arrow" size={16} />
              </span>
            </SmartLink>
          </article>
        ))}
      </div>
    </section>
  );
}
