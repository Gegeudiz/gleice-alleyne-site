import { site } from "../content/site";

type IconKind = (typeof site.trustStrip)[number]["icon"];

/** Faixa de autoridade logo abaixo do topo: EUA · online · Orlando · autora. */
export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Por que confiar">
      <ul className="trust-strip__list">
        {site.trustStrip.map((item) => (
          <li key={item.title} className="trust-strip__item">
            <span className="trust-strip__icon" aria-hidden>
              <TrustIcon kind={item.icon} />
            </span>
            <div>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TrustIcon({ kind }: { kind: IconKind }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (kind) {
    case "globe":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" />
        </svg>
      );
    case "video":
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M16 10l5-3v10l-5-3" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 21s-6-5.3-6-11a6 6 0 0 1 12 0c0 5.7-6 11-6 11Z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "book":
      return (
        <svg {...common} aria-hidden>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5Z" />
          <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20" />
        </svg>
      );
  }
}
