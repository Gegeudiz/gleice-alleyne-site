import { useCallback, useEffect, useRef, useState } from "react";
import { produtoImagePath, type ProductItem } from "../content/site";

type Props = {
  items: readonly ProductItem[];
};

export function ProductNetflixRail({ items }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = useCallback((dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.75, 420) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!openId) return;
    const card = document.getElementById(`nf-card-${openId}`);
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [openId]);

  return (
    <div className="carousel carousel--dark nf-carousel">
      <button type="button" className="carousel__btn carousel__btn--prev" aria-label="Deslizar para a esquerda" onClick={() => scrollBy(-1)}>
        <Chevron dir="left" />
      </button>

      <div className="nf-rail carousel__track carousel__track--dark" ref={trackRef} role="list">
        {items.map((item) => {
          const open = openId === item.id;
          return (
            <article
              key={item.id}
              id={`nf-card-${item.id}`}
              className={`nf-card${open ? " nf-card--open" : ""}`}
              role="listitem"
            >
              <button
                type="button"
                className="nf-card__hit"
                aria-expanded={open}
                aria-controls={`nf-detail-${item.id}`}
                id={`nf-trigger-${item.id}`}
                onClick={() => toggle(item.id)}
              >
                <div className="nf-card__media">
                  <img
                    src={open ? produtoImagePath(item.id, "wide") : produtoImagePath(item.id, "vertical")}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width={open ? 1600 : 640}
                    height={open ? 900 : 853}
                  />
                </div>
                <span className="nf-card__label">{item.title}</span>
              </button>

              {open ? (
                <div
                  className="nf-card__detail"
                  id={`nf-detail-${item.id}`}
                  role="region"
                  aria-labelledby={`nf-title-${item.id}`}
                >
                  <h3 className="nf-card__title-open" id={`nf-title-${item.id}`}>
                    {item.title}
                  </h3>
                  <p className="nf-card__meta">{item.meta}</p>
                  <p className="nf-card__desc">{item.description}</p>
                  <a className="nf-card__cta btn btn--ice" href={item.href} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                    Ver
                  </a>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>

      <button type="button" className="carousel__btn carousel__btn--next" aria-label="Deslizar para a direita" onClick={() => scrollBy(1)}>
        <Chevron dir="right" />
      </button>
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {dir === "left" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}
