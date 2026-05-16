import { site } from "../content/site";

export function About() {
  return (
    <section className="about" id="sobre" aria-labelledby="about-heading">
      <div className="about__grid">
        <div className="about__media">
          <img
            src="/images/gleice-about.png"
            alt={`${site.professionalName} — momento acolhedor`}
            loading="lazy"
          />
        </div>
        <div>
          <h2 id="about-heading" className="section-title section-title--left">
            {site.about.title}
          </h2>
          {site.about.paragraphs.map((p, i) => (
            <p key={i} className="about__text">
              {p}
            </p>
          ))}
          <a className="btn btn--secondary" href={site.whatsapp.hrefAgendarConsulta} target="_blank" rel="noreferrer">
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
