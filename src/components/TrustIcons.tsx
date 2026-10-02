import { site } from "../content/site";
import { LineIcon } from "./LineIcon";

type Props = {
  className?: string;
};

/** Linha «Online e Presencial · Atendimento em Português · Orlando/FL» com ícones. */
export function TrustIcons({ className = "" }: Props) {
  return (
    <ul className={`trust-icons${className ? ` ${className}` : ""}`} aria-label="Formas de atendimento">
      {site.hero.trustIcons.map((t) => (
        <li key={t.label}>
          <LineIcon kind={t.icon} size={18} />
          <span>{t.label}</span>
        </li>
      ))}
    </ul>
  );
}
