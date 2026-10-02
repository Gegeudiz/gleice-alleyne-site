import type { ReactNode } from "react";
import { SiteNavLink } from "./SiteNavLink";

type Props = {
  href: string;
  className?: string;
  children?: ReactNode;
  /** Texto do link quando interno (âncora ou rota) */
  label?: string;
  onNavigate?: () => void;
};

/**
 * Link que decide sozinho: externo (http…) abre em nova aba;
 * interno (#ancora ou /rota) usa a navegação do site com scroll suave.
 */
export function SmartLink({ href, className, children, label = "", onNavigate }: Props) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer" onClick={onNavigate}>
        {label}
        {children}
      </a>
    );
  }
  return (
    <SiteNavLink href={href} label={label} className={className} onNavigate={onNavigate}>
      {children}
    </SiteNavLink>
  );
}
