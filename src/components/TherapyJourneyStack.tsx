import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export type TherapyJourneyStep = {
  kicker: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

type Props = {
  section: {
    title: string;
    lead: string;
    steps: readonly TherapyJourneyStep[];
  };
};

const SPRING = { type: "spring" as const, stiffness: 200, damping: 34, mass: 0.78 };

/** Posição na pilha: 0 = frente, 1 = primeiro atrás (bordo visível), … */
function stackMotion(stackPos: number, reduced: boolean) {
  const t = reduced ? { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const } : SPRING;

  if (stackPos === 0) {
    return {
      transition: t,
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      rotateZ: 0,
      filter: "blur(0px)",
      zIndex: 50,
    };
  }

  const depth = Math.min(stackPos, 5);
  return {
    transition: t,
    y: -12 - depth * 11,
    x: depth * 5,
    scale: 1 - depth * 0.022,
    opacity: 1,
    rotateZ: depth * 0.4,
    filter: "blur(0px)",
    zIndex: 50 - depth,
  };
}

function useIsMobile(breakpointPx = 900) {
  const q = `(max-width: ${breakpointPx}px)`;
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(q).matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia(q);
    const fn = () => setIsMobile(mq.matches);
    fn();
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, [q]);

  return isMobile;
}

export function TherapyJourneyStack({ section }: Props) {
  const steps = section.steps;
  const n = steps.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile(900);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % n);
  }, [n]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + n) % n);
  }, [n]);

  useEffect(() => {
    if (isMobile) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, isMobile]);

  return (
    <section className="tj" id="como-funciona" aria-labelledby="tj-heading">
      <div className="tj__shell">
        <header className="tj__head">
          <h2 id="tj-heading" className="tj__title">
            {section.title}
          </h2>
          <p className="tj__lead">{section.lead}</p>
        </header>

        <div className="tj__stage" aria-roledescription="pilha de etapas">
          <p className="sr-only" aria-live="polite">
            Etapa {activeIndex + 1} de {n}: {steps[activeIndex]?.title}
          </p>

          {isMobile ? (
            <>
              <span className="tj__swipe-hint tj__swipe-hint--left" aria-hidden>
                ‹
              </span>
              <span className="tj__swipe-hint tj__swipe-hint--right" aria-hidden>
                ›
              </span>
            </>
          ) : null}

          <div className="tj__stack">
            {steps.map((step, i) => {
              const stackPos = (i - activeIndex + n) % n;
              const isFront = stackPos === 0;
              const motionProps = stackMotion(stackPos, !!prefersReducedMotion);

              return (
                <motion.article
                  key={step.title}
                  className="tj-card"
                  data-front={isFront}
                  initial={false}
                  animate={{
                    y: motionProps.y,
                    x: motionProps.x,
                    scale: motionProps.scale,
                    opacity: motionProps.opacity,
                    rotateZ: motionProps.rotateZ,
                    filter: motionProps.filter,
                    zIndex: motionProps.zIndex,
                  }}
                  transition={motionProps.transition}
                  drag={isMobile && isFront ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.28}
                  onDragEnd={(_, info) => {
                    if (!isMobile || !isFront) return;
                    const cur = activeIndexRef.current;
                    const dx = info.offset.x;
                    const vx = info.velocity.x;
                    if (dx < -48 || vx < -380) {
                      setActiveIndex((cur + 1) % n);
                    } else if (dx > 48 || vx > 380) {
                      setActiveIndex((cur - 1 + n) % n);
                    }
                  }}
                  style={{
                    pointerEvents: isFront ? "auto" : "none",
                    willChange: "transform",
                  }}
                  aria-hidden={!isFront}
                >
                  <div className="tj-card__media">
                    <img
                      src={step.image}
                      alt={isFront ? step.imageAlt : ""}
                      width={1400}
                      height={900}
                      loading={i <= 1 ? "eager" : "lazy"}
                      decoding="async"
                      draggable={false}
                    />
                  </div>
                  <div className="tj-card__body">
                    <div className="tj-card__kicker-row">
                      <p className="tj-card__kicker">{step.kicker}</p>
                      {isMobile && isFront ? (
                        <span className="tj-card__swipe-label">arraste para o lado</span>
                      ) : null}
                    </div>
                    <h3 className="tj-card__title">{step.title}</h3>
                    <p className="tj-card__text">{step.body}</p>
                  </div>
                  <span className="tj-card__step-num" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.article>
              );
            })}
          </div>

          {!isMobile ? (
            <div className="tj__nav tj__nav--desktop">
              <span className="tj__progress" aria-hidden>
                {activeIndex + 1} / {n}
              </span>
              <button type="button" className="tj__btn-next" onClick={goNext}>
                Próximo
                <span className="tj__btn-next-arrow" aria-hidden>
                  →
                </span>
              </button>
            </div>
          ) : null}

          <p className="tj__hint">
            {isMobile ? "Deslize para o próximo passo" : "Clique para o próximo Passo"}
          </p>
        </div>
      </div>
    </section>
  );
}
