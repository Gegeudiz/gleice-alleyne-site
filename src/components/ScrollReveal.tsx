import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Atraso leve entre blocos (ms), para um “cascata” discreto */
  delayMs?: number;
};

function isInViewport(el: HTMLElement, ratio: number) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight;
  const trigger = vh * ratio;
  return rect.top < trigger && rect.bottom > 0;
}

export function ScrollReveal({ children, className = "", delayMs = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    if (isInViewport(el, 0.92)) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const style = {
    "--sr-delay": `${delayMs}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`scroll-reveal${visible ? " scroll-reveal--visible" : ""}${className ? ` ${className}` : ""}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
