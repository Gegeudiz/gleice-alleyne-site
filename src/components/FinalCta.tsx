import { site } from "../content/site";
import { LeafDecor } from "./LeafDecor";
import { LineIcon } from "./LineIcon";
import { TrustIcons } from "./TrustIcons";

/** Banda final: foto da Gleice + chamada para agendar. */
export function FinalCta() {
  const f = site.finalCta;

  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <LeafDecor className="final-cta__leaf" />
      <div className="final-cta__media">
        <img src={f.image} alt={`${site.professionalName} — terapeuta integrativa`} width={576} height={1024} loading="lazy" decoding="async" />
      </div>
      <div className="final-cta__content">
        <p className="lp-kicker">{f.kicker}</p>
        <h2 id="final-cta-heading" className="final-cta__title">
          {f.title}
        </h2>
        <p className="final-cta__body">{f.body}</p>
        <div className="final-cta__actions">
          <a className="btn btn--plum btn--lg" href={f.href} target="_blank" rel="noreferrer">
            {f.buttonLabel}
            <LineIcon kind="arrow" size={18} />
          </a>
          <a className="btn btn--outline-plum btn--lg" href={f.secondaryHref} target="_blank" rel="noreferrer">
            <LineIcon kind="whatsapp" size={18} />
            {f.secondaryLabel}
          </a>
        </div>
        <TrustIcons className="final-cta__trust" />
      </div>
    </section>
  );
}
