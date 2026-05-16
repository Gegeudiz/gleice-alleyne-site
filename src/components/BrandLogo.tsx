import { site } from "../content/site";

type BrandLogoProps = {
  className?: string;
};

/** Monograma GA — cabeçalho, rodapé e favicon (crop central em public/images/logo-ga.png). */
export function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <img
      className={`brand-logo${className ? ` ${className}` : ""}`}
      src={site.brandLogo}
      alt=""
      width={40}
      height={40}
      decoding="async"
      aria-hidden
    />
  );
}
