import { Link } from "react-router-dom";
import { site } from "../content/site";

export function TechniquesTeaser() {
  const t = site.integrativeTechniques.teaser;
  const path = site.integrativeTechniques.path;

  return (
    <section className="tech-teaser" id={t.id} aria-labelledby="tech-teaser-heading">
      <div
        className="tech-teaser__bg"
        style={{ backgroundImage: `url(${t.backgroundImage})` }}
        aria-hidden
      />
      <div className="tech-teaser__overlay" aria-hidden />
      <div className="tech-teaser__inner">
        <h2 id="tech-teaser-heading" className="tech-teaser__title">
          {t.title}
        </h2>
        <Link to={path} className="btn btn--outline-light tech-teaser__btn">
          {t.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
