type Props = {
  className?: string;
  flip?: boolean;
};

/** Folha decorativa suave (dourado translúcido) para cantos de secções. */
export function LeafDecor({ className = "", flip = false }: Props) {
  return (
    <svg
      className={`leaf-decor${className ? ` ${className}` : ""}`}
      viewBox="0 0 320 420"
      fill="none"
      aria-hidden
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <defs>
        <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c9a24a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#7a1f3d" stopOpacity="0.28" />
        </linearGradient>
      </defs>
      <path
        d="M300 20C170 60 70 170 60 400 180 360 300 230 300 20Z"
        fill="url(#leafGrad)"
        opacity="0.55"
      />
      <path d="M300 20C230 140 150 260 60 400" stroke="#c9a24a" strokeOpacity="0.5" strokeWidth="2" />
      <path
        d="M230 110c-20 60-60 120-110 190"
        stroke="#c9a24a"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />
      <path
        d="M80 80C40 150 20 260 30 380 90 330 130 200 80 80Z"
        fill="#c9a24a"
        fillOpacity="0.14"
      />
    </svg>
  );
}
