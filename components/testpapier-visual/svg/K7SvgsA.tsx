import React from "react";

export function AtomSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Nucleus */}
      <circle cx="100" cy="60" r="8" fill="rgba(31,41,55,0.2)" stroke="#1F2937" strokeWidth="2" />
      {/* Shell 1 */}
      <ellipse cx="100" cy="60" rx="40" ry="15" transform="rotate(45 100 60)" stroke="#3B82F6" strokeWidth="2" />
      {/* Shell 2 */}
      <ellipse cx="100" cy="60" rx="40" ry="15" transform="rotate(-45 100 60)" stroke="#3B82F6" strokeWidth="2" />
      {/* Electrons */}
      <circle cx="72" cy="32" r="4" fill="#3B82F6" stroke="none" />
      <circle cx="128" cy="88" r="4" fill="#3B82F6" stroke="none" />
      <circle cx="72" cy="88" r="4" fill="#3B82F6" stroke="none" />
      <circle cx="128" cy="32" r="4" fill="#3B82F6" stroke="none" />
    </svg>
  );
}

export function MolekulaH2OSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Bonds */}
      <path d="M 100 50 L 75 80 M 100 50 L 125 80" stroke="#1F2937" strokeWidth="2" />
      {/* O Atom */}
      <circle cx="100" cy="50" r="18" fill="rgba(239,68,68,0.2)" stroke="#EF4444" strokeWidth="2" />
      {/* H Atoms */}
      <circle cx="75" cy="80" r="12" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" strokeWidth="2" />
      <circle cx="125" cy="80" r="12" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" strokeWidth="2" />
    </svg>
  );
}

export function LombikSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Liquid */}
      <path d="M 82 70 L 118 70 L 130 100 A 10 10 0 0 1 120 110 L 80 110 A 10 10 0 0 1 70 100 Z" fill="rgba(16,185,129,0.4)" stroke="none" />
      {/* Flask Outline */}
      <path d="M 90 20 L 110 20 M 95 20 L 95 45 L 70 100 A 10 10 0 0 0 80 110 L 120 110 A 10 10 0 0 0 130 100 L 105 45 L 105 20" stroke="#1F2937" strokeWidth="2" />
      {/* Scale */}
      <path d="M 85 80 L 90 80 M 80 95 L 85 95" stroke="#1F2937" strokeWidth="2" />
    </svg>
  );
}

export function ReagenzglasSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Liquid */}
      <path d="M 90 60 L 110 60 L 110 95 A 10 10 0 0 1 90 95 Z" fill="rgba(239,68,68,0.3)" stroke="none" />
      {/* Tube Outline */}
      <path d="M 85 20 L 115 20 M 90 20 L 90 95 A 10 10 0 0 0 110 95 L 110 20" stroke="#1F2937" strokeWidth="2" />
      {/* Scale */}
      <path d="M 90 40 L 95 40 M 90 55 L 95 55 M 90 70 L 95 70 M 90 85 L 95 85" stroke="#1F2937" strokeWidth="2" />
    </svg>
  );
}

export function ReaktionsSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Reactant 1 */}
      <circle cx="40" cy="60" r="10" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" strokeWidth="2" />
      {/* Plus */}
      <path d="M 60 60 L 70 60 M 65 55 L 65 65" stroke="#1F2937" strokeWidth="2" />
      {/* Reactant 2 */}
      <circle cx="90" cy="60" r="10" fill="rgba(239,68,68,0.2)" stroke="#EF4444" strokeWidth="2" />
      {/* Arrow */}
      <path d="M 110 60 L 135 60 M 125 55 L 135 60 L 125 65" stroke="#1F2937" strokeWidth="2" />
      {/* Product */}
      <circle cx="160" cy="60" r="12" fill="rgba(139,92,246,0.2)" stroke="#8B5CF6" strokeWidth="2" />
      <circle cx="150" cy="50" r="6" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" strokeWidth="2" />
      <circle cx="170" cy="70" r="6" fill="rgba(239,68,68,0.2)" stroke="#EF4444" strokeWidth="2" />
    </svg>
  );
}

type KraftRichtung = "up" | "down" | "left" | "right";

const KRAFT_PFADE: Record<KraftRichtung, string> = {
  right: "M 100 60 L 155 60 M 144 50 L 155 60 L 144 70",
  left: "M 60 60 L 5 60 M 16 50 L 5 60 L 16 70",
  up: "M 80 40 L 80 5 M 70 16 L 80 5 L 90 16",
  down: "M 80 80 L 80 115 M 70 104 L 80 115 L 90 104",
};

export function KraftVektorSvg({
  className = "w-full h-auto max-h-32",
  direction = "right",
}: {
  className?: string;
  direction?: KraftRichtung;
}) {
  return (
    <svg
      viewBox="0 0 160 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label={`Kraftvektor: ${direction}`}
    >
      {/* Body */}
      <rect x="60" y="40" width="40" height="40" rx="4" fill="none" stroke="#000" strokeWidth="1.5" />
      {/* Vector Arrow */}
      <path d={KRAFT_PFADE[direction]} stroke="#7C3AED" strokeWidth="2.5" />
      <text x="112" y="38" fill="#7C3AED" stroke="none" fontSize="13" fontWeight="700">F</text>
    </svg>
  );
}

export function LinseSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Lens */}
      <path d="M 100 20 Q 115 60 100 100 Q 85 60 100 20 Z" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" strokeWidth="2" />
      {/* Rays */}
      <path d="M 30 40 L 95 40 L 150 60" stroke="#F59E0B" strokeWidth="2" />
      <path d="M 30 60 L 100 60 L 150 60" stroke="#F59E0B" strokeWidth="2" />
      <path d="M 30 80 L 95 80 L 150 60" stroke="#F59E0B" strokeWidth="2" />
      {/* Focal point */}
      <circle cx="150" cy="60" r="3" fill="#F59E0B" stroke="none" />
    </svg>
  );
}

export function PrismaSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Prism */}
      <path d="M 100 30 L 130 90 L 70 90 Z" fill="rgba(31,41,55,0.1)" stroke="#1F2937" strokeWidth="2" />
      {/* Incoming Ray */}
      <path d="M 30 70 L 85 60" stroke="#1F2937" strokeWidth="2" />
      {/* Outgoing Rays (Spectrum) */}
      <path d="M 115 60 L 160 45" stroke="#EF4444" strokeWidth="2" />
      <path d="M 115 60 L 160 55" stroke="#F59E0B" strokeWidth="2" />
      <path d="M 115 60 L 160 65" stroke="#10B981" strokeWidth="2" />
      <path d="M 115 60 L 160 75" stroke="#3B82F6" strokeWidth="2" />
    </svg>
  );
}

export function FedernSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Wall */}
      <path d="M 40 30 L 40 90 M 40 40 L 30 50 M 40 55 L 30 65 M 40 70 L 30 80" stroke="#1F2937" strokeWidth="2" />
      {/* Spring */}
      <path d="M 40 60 L 50 60 L 55 45 L 65 75 L 75 45 L 85 75 L 95 45 L 105 75 L 115 45 L 125 75 L 130 60 L 140 60" stroke="#1F2937" strokeWidth="2" />
      {/* Weight */}
      <rect x="140" y="45" width="30" height="30" rx="2" fill="rgba(31,41,55,0.2)" stroke="#1F2937" strokeWidth="2" />
    </svg>
  );
}

export function StromkreisV2Svg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Main Circuit Wires */}
      <path d="M 40 45 L 40 20 L 90 20" stroke="#3B82F6" strokeWidth="2" />
      <path d="M 110 20 L 160 20 L 160 50" stroke="#3B82F6" strokeWidth="2" />
      <path d="M 40 55 L 40 100 L 160 100 L 160 70" stroke="#3B82F6" strokeWidth="2" />
      {/* Battery */}
      <path d="M 25 45 L 55 45 M 32 55 L 48 55" stroke="#3B82F6" strokeWidth="2" />
      {/* Switch (Open) */}
      <path d="M 90 20 L 105 10" stroke="#3B82F6" strokeWidth="2" />
      <circle cx="90" cy="20" r="2" fill="#3B82F6" stroke="none" />
      <circle cx="110" cy="20" r="2" fill="#3B82F6" stroke="none" />
      {/* Parallel Branch 1 (Lamp 1) */}
      <path d="M 120 20 L 120 50" stroke="#3B82F6" strokeWidth="2" />
      <path d="M 120 70 L 120 100" stroke="#3B82F6" strokeWidth="2" />
      <circle cx="120" cy="60" r="10" fill="rgba(245,158,11,0.1)" stroke="#3B82F6" strokeWidth="2" />
      <path d="M 113 53 L 127 67 M 113 67 L 127 53" stroke="#3B82F6" strokeWidth="2" />
      {/* Parallel Branch 2 (Lamp 2) */}
      <circle cx="160" cy="60" r="10" fill="rgba(245,158,11,0.1)" stroke="#3B82F6" strokeWidth="2" />
      <path d="M 153 53 L 167 67 M 153 67 L 167 53" stroke="#3B82F6" strokeWidth="2" />
    </svg>
  );
}
