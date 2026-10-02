import { site } from "../content/site";
import { LineIcon } from "./LineIcon";

/** Sobre — título em cima, fotografia logo abaixo e texto a seguir (mobile-first). */
export function About() {
  return (
    <section className="about about--lp about--stack" id="sobre" aria-labelledby="about-heading">
      <div className="about__head">
        <p className="lp-kicker">{site.about.kicker}</p>
        <h2 id="about-heading" className="section-title section-title--left">
          {site.about.title}
        </h2>
      </div>

      <div className="about__grid about__grid--stack">
        <div className="about__media about__media--lp about__media--wide">
          <img
            src={site.about.image}
            alt={`${site.professionalName} com a família`}
            loading="lazy"
            width={1400}
            height={1050}
          />
        </div>
        <div className="about__body">
          {site.about.paragraphs.map((p, i) => (
            <p key={i} className="about__text">
              {p}
            </p>
          ))}
          <a className="btn btn--plum btn--lg" href={site.whatsapp.hrefAgendarConsulta} target="_blank" rel="noreferrer">
            Agendar minha consulta
            <LineIcon kind="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
