import { site } from "../content/site";
import { LineIcon } from "./LineIcon";

/** «Um caminho claro» — 4 passos em linha com ícones e setas. */
export function ProcessSteps() {
  const p = site.process;

  return (
    <section className="process" id={p.id} aria-labelledby="process-heading">
      <div className="lp-head lp-head--split lp-head--tight">
        <h2 id="process-heading" className="section-title section-title--left process__title">
          {p.title}
        </h2>
        <p className="lp-head__lead">{p.lead}</p>
      </div>

      <ol className="process__steps">
        {p.steps.map((step, i) => (
          <li key={step.title} className="process__step">
            <span className="process__icon">
              <LineIcon kind={step.icon} size={24} />
            </span>
            <div className="process__text">
              <span className="process__num" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
