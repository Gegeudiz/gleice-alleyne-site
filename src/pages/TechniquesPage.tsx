import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LineIcon } from "../components/LineIcon";
import { ScrollReveal } from "../components/ScrollReveal";
import { site, tecnicaImagePath } from "../content/site";
import { navTo } from "../lib/navTo";

export function TechniquesPage() {
  const p = site.integrativeTechniques.page;

  useEffect(() => {
    document.title = `${p.title} — ${site.professionalName}`;
    window.scrollTo(0, 0);
  }, [p.title]);

  return (
    <>
      <Header variant="page" />
      <main className="tech-page">
        <div className="page tech-page__wrap">
          <ScrollReveal>
            <header className="tech-page__head">
              <p className="tech-page__eyebrow">Gleice Alleyne</p>
              <h1 className="section-title">{p.title}</h1>
              <p className="section-lead tech-page__lead">{p.lead}</p>
              <p className="tech-page__intro">{p.intro}</p>
            </header>
          </ScrollReveal>

          <div className="tech-page__list">
            {p.items.map((item, i) => (
              <ScrollReveal key={item.id} delayMs={30 + i * 25}>
                <article className="tech-card" id={item.id}>
                  <div className="tech-card__media">
                    <img
                      src={tecnicaImagePath(item.id)}
                      alt={`${item.name} — formação e técnica integrativa`}
                      width={800}
                      height={450}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="tech-card__content">
                    <h2 className="tech-card__title">{item.name}</h2>
                    <p className="tech-card__tagline">{item.tagline}</p>
                    <p className="tech-card__body">{item.body}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delayMs={30}>
            <section className="tech-pricing" aria-labelledby="tech-pricing-heading">
              <p className="tech-page__eyebrow">{p.pricing.kicker}</p>
              <h2 id="tech-pricing-heading" className="tech-pricing__title">
                {p.pricing.title}
              </h2>
              <ul className="tech-pricing__list">
                {p.pricing.items.map((item) => (
                  <li key={item.id} className="tech-pricing__item">
                    <span className="tech-pricing__icon">
                      <LineIcon kind={item.icon} size={20} />
                    </span>
                    <div className="tech-pricing__text">
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </div>
                    <div className="tech-pricing__price">
                      <strong>{item.price}</strong>
                      <small>{item.unit}</small>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="tech-pricing__note">{p.pricing.installments}</p>
            </section>
          </ScrollReveal>

          <ScrollReveal delayMs={40}>
            <div className="tech-page__actions">
              <a className="btn btn--primary" href={p.cta.href} target="_blank" rel="noreferrer">
                {p.cta.label}
              </a>
              <Link to={navTo("#topo")} className="btn btn--secondary tech-page__back">
                ← {p.backLabel}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
