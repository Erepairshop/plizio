"use client";
import { memo } from "react";

// ─── LABELS ────────────────────────────────────────────────────────────────

const FORCE_LABELS = {
  de: { push: "Druck", pull: "Zug" },
  en: { push: "Push", pull: "Pull" },
  hu: { push: "Tolás", pull: "Húzás" },
  ro: { push: "Împingere", pull: "Tragere" },
};

const CIRCUIT_LABELS = {
  de: { battery: "Batterie", lamp: "Lampe", switch: "Schalter" },
  en: { battery: "Battery", lamp: "Lamp", switch: "Switch" },
  hu: { battery: "Elem", lamp: "Lámpa", switch: "Kapcsoló" },
  ro: { battery: "Baterie", lamp: "Lampă", switch: "Comutator" },
};

// ─── FORCE SVG ─────────────────────────────────────────────────────────────

export const ForceSvg = memo(({ lang = "hu" }: { lang?: string }) => {
  const l = (FORCE_LABELS as any)[lang] || FORCE_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#f0f9ff" rx="12" />
      
      {/* Object */}
      <rect x="100" y="50" width="40" height="40" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" rx="4" />
      
      {/* Force Arrows */}
      <path d="M 40 70 L 90 70" fill="none" stroke="#2563eb" strokeWidth="4" markerEnd="url(#arrowBlue)" />
      <path d="M 200 70 L 150 70" fill="none" stroke="#dc2626" strokeWidth="4" markerEnd="url(#arrowRed)" />
      
      <defs>
        <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
        </marker>
        <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" />
        </marker>
      </defs>

      <text x="65" y="60" fontSize="10" fontWeight="bold" fill="#2563eb" textAnchor="middle">{l.push}</text>
      <text x="175" y="60" fontSize="10" fontWeight="bold" fill="#dc2626" textAnchor="middle">{l.pull}</text>
      <text x="120" y="110" fontSize="8" fill="#64748b" textAnchor="middle">Mass (m)</text>
    </svg>
  );
});

// ─── CIRCUIT SVG ───────────────────────────────────────────────────────────

export const CircuitSvg = memo(({ lang = "hu" }: { lang?: string }) => {
  const l = (CIRCUIT_LABELS as any)[lang] || CIRCUIT_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#fffbeb" rx="12" />
      
      {/* Wires */}
      <path d="M 60 70 L 60 110 L 180 110 L 180 70" fill="none" stroke="#475569" strokeWidth="2" />
      <path d="M 60 40 L 60 20 L 110 20" fill="none" stroke="#475569" strokeWidth="2" />
      <path d="M 130 20 L 180 20 L 180 40" fill="none" stroke="#475569" strokeWidth="2" />
      
      {/* Battery */}
      <rect x="40" y="40" width="40" height="30" fill="#f59e0b" rx="2" />
      <rect x="50" y="35" width="20" height="5" fill="#1e293b" />
      
      {/* Switch */}
      <line x1="110" y1="20" x2="125" y2="10" stroke="#1e293b" strokeWidth="3" />
      
      {/* Lamp */}
      <circle cx="180" cy="55" r="15" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
      <path d="M 170 45 L 190 65 M 170 65 L 190 45" stroke="#d97706" strokeWidth="2" />
      
      {/* Labels */}
      <text x="60" y="85" fontSize="8" fill="#92400e" textAnchor="middle">{l.battery}</text>
      <text x="120" y="35" fontSize="8" fill="#92400e" textAnchor="middle">{l.switch}</text>
      <text x="180" y="85" fontSize="8" fill="#92400e" textAnchor="middle">{l.lamp}</text>
    </svg>
  );
});

// ─── OPTICS SVG ────────────────────────────────────────────────────────────

export const OpticsSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#f8fafc" rx="12" />
      
      {/* Lens */}
      <path d="M 120 20 Q 140 70 120 120 Q 100 70 120 20" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" opacity="0.6" />
      
      {/* Light Rays */}
      <path d="M 20 40 L 115 40 L 200 80" fill="none" stroke="#facc15" strokeWidth="2" />
      <path d="M 20 70 L 220 70" fill="none" stroke="#facc15" strokeWidth="2" />
      <path d="M 20 100 L 115 100 L 200 60" fill="none" stroke="#facc15" strokeWidth="2" />
      
      <circle cx="200" cy="70" r="4" fill="#ef4444" />
      <text x="200" y="85" fontSize="8" fill="#ef4444" textAnchor="middle">Focal Point</text>
    </svg>
  );
});

// ─── MAGNET SVG ────────────────────────────────────────────────────────────

export const MagnetSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#f5f3ff" rx="12" />
      
      {/* Magnet */}
      <path d="M 80 40 L 80 100 A 40 40 0 0 0 160 100 L 160 40" fill="none" stroke="#cbd5e1" strokeWidth="20" />
      <path d="M 80 40 L 80 70" stroke="#dc2626" strokeWidth="20" />
      <path d="M 160 40 L 160 70" stroke="#2563eb" strokeWidth="20" />
      
      {/* Field Lines */}
      <ellipse cx="120" cy="70" rx="70" ry="40" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
      <ellipse cx="120" cy="70" rx="90" ry="60" fill="none" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
      
      <text x="80" y="35" fontSize="12" fontWeight="bold" fill="#dc2626" textAnchor="middle">N</text>
      <text x="160" y="35" fontSize="12" fontWeight="bold" fill="#2563eb" textAnchor="middle">S</text>
    </svg>
  );
});

// ─── SPACE SVG ─────────────────────────────────────────────────────────────

export const SpaceSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#0f172a" rx="12" />
      
      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <circle key={i} cx={Math.random() * 240} cy={Math.random() * 140} r="0.5" fill="white" opacity="0.5" />
      ))}
      
      {/* Earth */}
      <circle cx="100" cy="70" r="30" fill="#3b82f6" />
      <path d="M 80 55 Q 100 70 120 55 M 75 80 Q 100 60 125 80" fill="none" stroke="#22c55e" strokeWidth="5" strokeLinecap="round" />
      
      {/* Moon */}
      <circle cx="180" cy="40" r="8" fill="#94a3b8" />
      <circle cx="177" cy="37" r="2" fill="#64748b" />
      
      {/* Orbit */}
      <circle cx="100" cy="70" r="85" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="5 5" />
    </svg>
  );
});

// ─── WAVE SVG ──────────────────────────────────────────────────────────────

export const WaveSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#fdf2f8" rx="12" />
      
      {/* Axes */}
      <line x1="20" y1="70" x2="220" y2="70" stroke="#94a3b8" strokeWidth="1" />
      <line x1="30" y1="20" x2="30" y2="120" stroke="#94a3b8" strokeWidth="1" />
      
      {/* Sine Wave */}
      <path d="M 30 70 Q 55 20 80 70 T 130 70 T 180 70 T 230 70" fill="none" stroke="#db2777" strokeWidth="3" />
      
      {/* Annotations */}
      <path d="M 55 70 L 55 25" fill="none" stroke="#be185d" strokeWidth="1" strokeDasharray="2 2" />
      <text x="60" y="45" fontSize="8" fill="#be185d">Amplitude</text>
      
      <path d="M 55 20 L 105 20" fill="none" stroke="#be185d" strokeWidth="1" markerStart="url(#dot)" markerEnd="url(#dot)" />
      <text x="80" y="15" fontSize="8" fill="#be185d" textAnchor="middle">Wavelength (λ)</text>
      
      <defs>
        <marker id="dot" markerWidth="4" markerHeight="4" refX="2" refY="2">
          <circle cx="2" cy="2" r="2" fill="#be185d" />
        </marker>
      </defs>
    </svg>
  );
});

// ─── ENERGY SVG ────────────────────────────────────────────────────────────

export const EnergySvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#f0fdf4" rx="12" />
      
      {/* Sun */}
      <circle cx="40" cy="40" r="15" fill="#facc15" />
      {[...Array(8)].map((_, i) => (
        <line key={i} x1="40" y1="40" x2={40 + Math.cos(i * Math.PI/4) * 25} y2={40 + Math.sin(i * Math.PI/4) * 25} stroke="#facc15" strokeWidth="2" />
      ))}
      
      {/* Wind Turbine */}
      <g transform="translate(180, 100)">
        <rect x="-2" y="-60" width="4" height="60" fill="#64748b" />
        <g>
          {[0, 120, 240].map((angle) => (
            <path key={angle} d="M 0 0 L 0 -30 L 5 -25 Z" fill="#94a3b8" transform={`rotate(${angle})`} />
          ))}
        </g>
      </g>
      
      {/* Solar Panel */}
      <g transform="translate(80, 90) skewX(-20)">
        <rect width="50" height="30" fill="#1e40af" stroke="#3b82f6" strokeWidth="1" />
        <line x1="0" y1="10" x2="50" y2="10" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="0" y1="20" x2="50" y2="20" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="12" y1="0" x2="12" y2="30" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="25" y1="0" x2="25" y2="30" stroke="#3b82f6" strokeWidth="0.5" />
        <line x1="37" y1="0" x2="37" y2="30" stroke="#3b82f6" strokeWidth="0.5" />
      </g>
    </svg>
  );
});

// ─── MECHANICS SVG ─────────────────────────────────────────────────────────

export const MechanicsSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#f8fafc" rx="12" />
      
      {/* Lever */}
      <line x1="40" y1="100" x2="200" y2="100" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
      <path d="M 120 100 L 130 120 L 110 120 Z" fill="#94a3b8" />
      
      {/* Load */}
      <rect x="50" y="80" width="20" height="20" fill="#ef4444" rx="2" />
      <text x="60" y="93" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">L</text>
      
      {/* Effort Arrow */}
      <path d="M 190 60 L 190 90" fill="none" stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrowGreen)" />
      <defs>
        <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
        </marker>
      </defs>
      <text x="190" y="55" fontSize="10" fontWeight="bold" fill="#16a34a" textAnchor="middle">Force (F)</text>
    </svg>
  );
});
