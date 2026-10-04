import type { ReactNode } from "react";
import { site } from "../content/site";
import { LeafDecor } from "./LeafDecor";
import { LineIcon, type LineIconKind } from "./LineIcon";
import { SmartLink } from "./SmartLink";

/**
 * «O que é a Terapia Integrativa Cristã?» — explicação + 3 pilares,
 * seguida de «Técnicas de Terapia Integrativa Aplicadas»: três cartões com preço,
 * nota de ajuda na escolha e dois cartões (EMC e Livros) que levam à vitrine.
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

      <div className="plans-head" id="planos">
        <h3 className="plans-head__title">{s.cardsTitle}</h3>
        <p className="plans-head__lead">{s.cardsLead}</p>
      </div>

      <div className="plans">
        {s.plans.map((p) => (
          <PlanCard
            key={p.id}
            icon={p.icon}
            badge={p.badge}
            title={p.title}
            subtitle={p.subtitle}
            description={p.description}
            features={p.features}
            ctaLabel={p.ctaLabel}
            href={p.href}
            secondary={
              "secondaryHref" in p && p.secondaryHref ? (
                <SmartLink href={p.secondaryHref} className="plan__secondary">
                  {p.secondaryLabel}
                </SmartLink>
              ) : null
            }
          >
            <div className="plan__price">
              <span className="plan__amount">{p.price}</span>
              <span className="plan__unit">{p.priceUnit}</span>
            </div>
            <p className="plan__installments">
              <CardIcon />
              {s.installments}
            </p>
          </PlanCard>
        ))}
      </div>

      <aside className="plans-note" aria-label={s.helpNote.title}>
        <span className="plans-note__icon">
          <LineIcon kind="chat" size={22} />
        </span>
        <strong className="plans-note__title">{s.helpNote.title}</strong>
        <p className="plans-note__body">{s.helpNote.body}</p>
        <a className="btn btn--outline-plum plans-note__cta" href={s.helpNote.href} target="_blank" rel="noreferrer">
          <LineIcon kind="whatsapp" size={18} />
          {s.helpNote.ctaLabel}
        </a>
      </aside>

      <div className="plans plans--two">
        {s.extras.map((e) => (
          <PlanCard
            key={e.id}
            icon={e.icon}
            badge={null}
            title={e.title}
            subtitle={e.subtitle}
            description={e.description}
            features={e.features}
            ctaLabel={e.ctaLabel}
            href={e.href}
          />
        ))}
      </div>
    </section>
  );
}

type PlanCardProps = {
  icon: LineIconKind;
  badge: string | null;
  title: string;
  subtitle: string;
  description: string;
  features: readonly string[];
  ctaLabel: string;
  href: string;
  /** Bloco de preço (opcional) — fica entre a descrição e a lista */
  children?: ReactNode;
  secondary?: ReactNode;
};

function PlanCard({ icon, badge, title, subtitle, description, features, ctaLabel, href, children, secondary }: PlanCardProps) {
  return (
    <article className={`plan${badge ? " plan--featured" : ""}`}>
      {badge ? <span className="plan__badge">{badge}</span> : null}

      <header className="plan__head">
        <span className="plan__icon">
          <LineIcon kind={icon} size={22} />
        </span>
        <div>
          <h4 className="plan__title">{title}</h4>
          <p className="plan__subtitle">{subtitle}</p>
        </div>
      </header>

      <p className="plan__desc">{description}</p>

      {children}

      <ul className="plan__features">
        {features.map((f) => (
          <li key={f}>
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="plan__actions">
        <SmartLink href={href} className="btn btn--gold btn--lg plan__cta">
          {ctaLabel}
          <LineIcon kind="arrow" size={18} />
        </SmartLink>
        {secondary}
      </div>
    </article>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12.5l4.2 4.2L19 7.5" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19M7 15h4" />
    </svg>
  );
}
