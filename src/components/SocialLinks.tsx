import { site } from "../content/site";

type SocialIcon = (typeof site.social)[number]["icon"];

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "social-links" }: SocialLinksProps) {
  return (
    <div className={className}>
      {site.social.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
          <SocialGlyph kind={s.icon} />
        </a>
      ))}
    </div>
  );
}

function SocialGlyph({ kind }: { kind: SocialIcon }) {
  if (kind === "youtube") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M21.6 7.2c-.2-1-.9-1.8-1.9-2C17.8 4.8 12 4.8 12 4.8s-5.8 0-7.7.4c-1 .2-1.7 1-1.9 2C2 9 2 12 2 12s0 3 .3 4.8c.2 1 .9 1.8 1.9 2 1.9.4 7.7.4 7.7.4s5.8 0 7.7-.4c1-.2 1.7-1 1.9-2 .3-1.8.3-4.8.3-4.8s0-3-.3-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    );
  }
  if (kind === "tiktok") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
