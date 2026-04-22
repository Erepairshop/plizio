"use client";

interface Props {
  size?: number;
  glow?: boolean;
}

export default function VisualLabIcon({ size = 64, glow = true }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <defs>
        {glow && (
          <filter id="vlab-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
        <radialGradient id="vlab-globe" cx="38%" cy="35%">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="55%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#0C4A6E" />
        </radialGradient>
        <linearGradient id="vlab-ring" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
          <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g filter={glow ? "url(#vlab-glow)" : undefined}>
        {/* Soft halo */}
        <circle cx="40" cy="42" r="28" fill="rgba(34,211,238,0.08)" />

        {/* Orbit ring (tilted) */}
        <ellipse
          cx="40"
          cy="42"
          rx="32"
          ry="9"
          fill="none"
          stroke="url(#vlab-ring)"
          strokeWidth="1.4"
          transform="rotate(-22 40 42)"
        />

        {/* Globe */}
        <circle cx="40" cy="42" r="20" fill="url(#vlab-globe)" />

        {/* Continents (stylized) */}
        <path
          d="M28 38 Q33 32 40 35 Q45 30 50 36 Q53 42 48 47 Q42 49 38 45 Q32 47 28 42 Z"
          fill="rgba(34,197,94,0.55)"
        />
        <path
          d="M30 50 Q34 52 39 51 Q42 54 46 52"
          fill="none"
          stroke="rgba(34,197,94,0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Latitude line */}
        <path
          d="M21 42 Q40 50 59 42"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="0.8"
        />
        {/* Longitude line */}
        <ellipse
          cx="40"
          cy="42"
          rx="6"
          ry="20"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.8"
        />

        {/* Highlight */}
        <ellipse cx="33" cy="34" rx="6" ry="3" fill="rgba(255,255,255,0.25)" />

        {/* Map pin */}
        <g transform="translate(50 24)">
          <path
            d="M0 0 C-4 0 -6 3 -6 6 C-6 10 0 16 0 16 C0 16 6 10 6 6 C6 3 4 0 0 0 Z"
            fill="#F59E0B"
            stroke="#FBBF24"
            strokeWidth="0.8"
          />
          <circle cx="0" cy="6" r="2" fill="#0F172A" />
        </g>
      </g>
    </svg>
  );
}
