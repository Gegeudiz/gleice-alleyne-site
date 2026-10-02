type Props = {
  title: string;
  body: string;
  buttonLabel: string;
  href: string;
};

/** Chamada compacta ao fim de uma secção — leva ao WhatsApp. */
export function SectionCta({ title, body, buttonLabel, href }: Props) {
  return (
    <aside className="section-cta" aria-label={title}>
      <div className="section-cta__text">
        <h3 className="section-cta__title">{title}</h3>
        <p className="section-cta__body">{body}</p>
      </div>
      <a className="btn btn--primary section-cta__btn" href={href} target="_blank" rel="noreferrer">
        {buttonLabel}
        <span className="btn__arrow" aria-hidden>
          →
        </span>
      </a>
    </aside>
  );
}
