import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { site } from "../content/site";

type Chapter = (typeof site.offerOverview.chapters)[number];

const ease = [0.22, 1, 0.36, 1] as const;

function OfferReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function OfferStem({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <span className={`offer-stem ${className}`.trim()} aria-hidden />;
  }

  return (
    <motion.span
      className={`offer-stem ${className}`.trim()}
      aria-hidden
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45, ease }}
      style={{ transformOrigin: "top center" }}
    />
  );
}

function BranchLines({ count }: { count: number }) {
  const reduced = useReducedMotion();

  const paths =
    count === 2
      ? [
          "M 200 8 L 200 44 L 72 78",
          "M 200 44 L 328 78",
        ]
      : count <= 4
        ? [
            "M 200 8 L 200 38 L 48 72",
            "M 200 38 L 128 72",
            "M 200 38 L 272 72",
            "M 200 38 L 352 72",
          ].slice(0, count)
        : [
            "M 200 6 L 200 32 L 40 58",
            "M 200 32 L 112 58",
            "M 200 32 L 200 58",
            "M 200 32 L 288 58",
            "M 200 32 L 360 58",
          ];

  return (
    <svg className="offer-lines" viewBox="0 0 400 88" preserveAspectRatio="xMidYMid meet" aria-hidden>
      {paths.map((d, i) =>
        reduced ? (
          <path key={d} d={d} className="offer-lines__path offer-lines__path--on" />
        ) : (
          <motion.path
            key={d}
            d={d}
            className="offer-lines__path"
            initial={{ pathLength: 0, opacity: 0.35 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, delay: 0.08 + i * 0.06, ease }}
          />
        ),
      )}
    </svg>
  );
}

function FlowChapter({ chapter, isLast }: { chapter: Chapter; isLast: boolean }) {
  const branchCount = chapter.branches.length;
  const layoutClass =
    branchCount === 2
      ? "offer-branches--duo"
      : branchCount === 4
        ? "offer-branches--quad"
        : branchCount >= 5
          ? "offer-branches--many"
          : "offer-branches--grid";

  return (
    <article className="offer-block" aria-labelledby={`offer-chapter-${chapter.id}`}>
      <OfferReveal className="offer-step offer-step--hub">
        <h3 id={`offer-chapter-${chapter.id}`} className="offer-hub">
          {chapter.hub}
        </h3>
        {"hubTag" in chapter && chapter.hubTag ? (
          <p className="offer-hub__sub">{chapter.hubTag}</p>
        ) : null}
      </OfferReveal>

      <OfferReveal className="offer-step offer-step--branches" delay={0.1}>
        <div className={`offer-branches ${layoutClass}`}>
          <OfferStem className="offer-stem--down" />
          <BranchLines count={branchCount} />
          <ul className="offer-leaves" aria-label={`Opções de ${chapter.hub}`}>
            {chapter.branches.map((label) => (
              <li key={label} className="offer-leaf">
                {label}
              </li>
            ))}
          </ul>
        </div>
      </OfferReveal>

      <OfferReveal className="offer-step offer-step--detail" delay={0.06}>
        <div className="offer-detail-wrap">
          <OfferStem className="offer-stem--detail" />
          <div className="offer-detail">
            <ul className="offer-detail__list">
              {chapter.details.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </OfferReveal>

      {!isLast ? <div className="offer-block__gap" aria-hidden /> : null}
    </article>
  );
}

export function OfferOverview() {
  const o = site.offerOverview;
  const chapters = o.chapters;

  return (
    <section className="offer" id={o.id} aria-labelledby="offer-heading">
      <header className="offer__head">
        <h2 id="offer-heading" className="offer__title section-title">
          {o.title}
        </h2>
        <p className="offer__lead section-lead">{o.lead}</p>
      </header>

      <div className="offer__flow">
        <div className="offer__spine" aria-hidden />
        {chapters.map((chapter, i) => (
          <FlowChapter key={chapter.id} chapter={chapter} isLast={i === chapters.length - 1} />
        ))}
      </div>
    </section>
  );
}
