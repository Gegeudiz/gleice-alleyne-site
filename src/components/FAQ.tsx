import { useState } from "react";
import { site } from "../content/site";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq" aria-labelledby="faq-heading">
      <div className="faq__layout">
        <div>
          <h2 id="faq-heading" className="section-title section-title--left">
            Perguntas frequentes
          </h2>
          <p className="faq__intro">Respostas de exemplo — ajuste linguagem e detalhes com a profissional.</p>
        </div>
        <div className="faq__list">
          {site.faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`faq__item${isOpen ? " faq__item--open" : ""}`}>
                <button type="button" className="faq__question" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? <p className="faq__answer">{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
