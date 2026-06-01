import { Link, useLocation } from "react-router-dom";
import { navTo } from "../lib/navTo";
import { scrollToHash } from "../lib/scrollToHash";

type Props = {
  href: string;
  label: string;
  onNavigate?: () => void;
};

export function SiteNavLink({ href, label, onNavigate }: Props) {
  const location = useLocation();
  const isHash = href.startsWith("#");
  const onHome = location.pathname === "/" || location.pathname === "";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();
    if (!isHash || !onHome) return;

    e.preventDefault();
    const hash = href;
    window.history.pushState(null, "", `/${hash}`);
    scrollToHash(hash);
  };

  return (
    <Link to={navTo(href)} onClick={handleClick}>
      {label}
    </Link>
  );
}
