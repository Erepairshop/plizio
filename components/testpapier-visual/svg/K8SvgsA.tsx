import React from "react";

// 1. Biologie: DNA Helix
export function DNAHelixSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 40 60 C 50 20, 70 20, 80 60 C 90 100, 110 100, 120 60 C 130 20, 150 20, 160 60" stroke="#3B82F6" strokeWidth="2.5" />
      <path d="M 40 60 C 50 100, 70 100, 80 60 C 90 20, 110 20, 120 60 C 130 100, 150 100, 160 60" stroke="#10B981" strokeWidth="2.5" />
      <line x1="50" y1="40" x2="50" y2="80" stroke="#1F2937" strokeWidth="2" />
      <line x1="60" y1="30" x2="60" y2="90" stroke="#1F2937" strokeWidth="2" />
      <line x1="70" y1="40" x2="70" y2="80" stroke="#1F2937" strokeWidth="2" />
      <line x1="90" y1="80" x2="90" y2="40" stroke="#1F2937" strokeWidth="2" />
      <line x1="100" y1="90" x2="100" y2="30" stroke="#1F2937" strokeWidth="2" />
      <line x1="110" y1="80" x2="110" y2="40" stroke="#1F2937" strokeWidth="2" />
      <line x1="130" y1="40" x2="130" y2="80" stroke="#1F2937" strokeWidth="2" />
      <line x1="140" y1="30" x2="140" y2="90" stroke="#1F2937" strokeWidth="2" />
      <line x1="150" y1="40" x2="150" y2="80" stroke="#1F2937" strokeWidth="2" />
    </svg>
  );
}

// 2. Biologie: Punnett Quadrat
export function PunnettQuadratSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Grid */}
      <rect x="80" y="40" width="80" height="60" fill="rgba(31,41,55,0.05)" stroke="#1F2937" strokeWidth="2" />
      <line x1="120" y1="40" x2="120" y2="100" stroke="#1F2937" strokeWidth="2" />
      <line x1="80" y1="70" x2="160" y2="70" stroke="#1F2937" strokeWidth="2" />
      
      {/* Top Headers */}
      <circle cx="100" cy="25" r="5" fill="#3B82F6" stroke="none" />
      <circle cx="140" cy="25" r="5" fill="none" stroke="#3B82F6" strokeWidth="2" />
      
      {/* Left Headers */}
      <circle cx="60" cy="55" r="5" fill="#EF4444" stroke="none" />
      <circle cx="60" cy="85" r="5" fill="none" stroke="#EF4444" strokeWidth="2" />
      
      {/* Cells */}
      <circle cx="95" cy="55" r="4" fill="#3B82F6" stroke="none" />
      <circle cx="105" cy="55" r="4" fill="#EF4444" stroke="none" />
      
      <circle cx="135" cy="55" r="4" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
      <circle cx="145" cy="55" r="4" fill="#EF4444" stroke="none" />
      
      <circle cx="95" cy="85" r="4" fill="#3B82F6" stroke="none" />
      <circle cx="105" cy="85" r="4" fill="none" stroke="#EF4444" strokeWidth="1.5" />
      
      <circle cx="135" cy="85" r="4" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
      <circle cx="145" cy="85" r="4" fill="none" stroke="#EF4444" strokeWidth="1.5" />
    </svg>
  );
}

// 3. Biologie: Evolution
export function EvolutionSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="10" y1="95" x2="190" y2="95" stroke="#1F2937" strokeWidth="2" strokeDasharray="4 4" />
      
      {/* Stage 1: Fish */}
      <ellipse cx="40" cy="85" rx="12" ry="6" fill="rgba(31,41,55,0.2)" stroke="#1F2937" strokeWidth="2" />
      <polygon points="28,85 20,80 20,90" fill="rgba(31,41,55,0.2)" stroke="#1F2937" strokeWidth="2" />
      
      {/* Stage 2: Amphibian */}
      <ellipse cx="90" cy="80" rx="16" ry="8" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" strokeWidth="2" />
      <path d="M 80 85 L 75 95 M 100 85 L 105 95" stroke="#3B82F6" strokeWidth="2" />
      <circle cx="105" cy="75" r="5" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" strokeWidth="2" />
      
      {/* Stage 3: Mammal */}
      <ellipse cx="150" cy="70" rx="20" ry="12" fill="rgba(16,185,129,0.2)" stroke="#10B981" strokeWidth="2" />
      <path d="M 135 80 L 135 95 M 145 80 L 145 95 M 155 80 L 155 95 M 165 80 L 165 95" stroke="#10B981" strokeWidth="2" />
      <circle cx="170" cy="60" r="8" fill="rgba(16,185,129,0.2)" stroke="#10B981" strokeWidth="2" />
    </svg>
  );
}

// 4. Geschichte: Zeitstrahl
export function ZeitstrahlSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="20" y1="70" x2="180" y2="70" stroke="#1F2937" strokeWidth="2.5" />
      <polygon points="180,65 190,70 180,75" fill="#1F2937" stroke="none" />
      
      <line x1="40" y1="70" x2="40" y2="50" stroke="#1F2937" strokeWidth="2" />
      <circle cx="40" cy="50" r="4" fill="#3B82F6" stroke="none" />
      
      <line x1="80" y1="70" x2="80" y2="40" stroke="#1F2937" strokeWidth="2" />
      <circle cx="80" cy="40" r="4" fill="#10B981" stroke="none" />
      
      <line x1="120" y1="70" x2="120" y2="60" stroke="#1F2937" strokeWidth="2" />
      <circle cx="120" cy="60" r="4" fill="#F59E0B" stroke="none" />
      
      <line x1="160" y1="70" x2="160" y2="30" stroke="#1F2937" strokeWidth="2" />
      <circle cx="160" cy="30" r="4" fill="#EF4444" stroke="none" />
    </svg>
  );
}

// 5. Geschichte: Burg
export function BurgSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 50 90 L 50 40 L 55 40 L 55 35 L 65 35 L 65 40 L 70 40 L 70 60 L 90 60 L 90 30 L 95 30 L 95 25 L 105 25 L 105 30 L 110 30 L 110 60 L 130 60 L 130 40 L 135 40 L 135 35 L 145 35 L 145 40 L 150 40 L 150 90 Z" fill="rgba(31,41,55,0.15)" stroke="#1F2937" strokeWidth="2" strokeLinejoin="miter" />
      <path d="M 90 90 L 90 75 A 10 10 0 0 1 110 75 L 110 90 Z" fill="rgba(31,41,55,0.3)" stroke="#1F2937" strokeWidth="2" />
      
      <line x1="100" y1="25" x2="100" y2="10" stroke="#1F2937" strokeWidth="2" />
      <polygon points="100,10 115,15 100,20" fill="rgba(239,68,68,0.3)" stroke="#EF4444" strokeWidth="1" />
      
      <line x1="70" y1="60" x2="70" y2="90" stroke="#1F2937" strokeWidth="2" />
      <line x1="130" y1="60" x2="130" y2="90" stroke="#1F2937" strokeWidth="2" />
      <line x1="90" y1="60" x2="90" y2="90" stroke="#1F2937" strokeWidth="2" />
      <line x1="110" y1="60" x2="110" y2="90" stroke="#1F2937" strokeWidth="2" />
      <line x1="30" y1="90" x2="170" y2="90" stroke="#1F2937" strokeWidth="2.5" />
    </svg>
  );
}

// 6. Geographie: Kompass
export function KompassSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="100" cy="60" r="40" fill="rgba(59,130,246,0.15)" stroke="#3B82F6" strokeWidth="2" />
      <circle cx="100" cy="60" r="32" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" />
      
      <polygon points="100,25 93,60 100,95 107,60" fill="none" stroke="#1F2937" strokeWidth="2" />
      <polygon points="100,25 93,60 107,60" fill="rgba(239,68,68,0.6)" stroke="#EF4444" strokeWidth="1" />
      <polygon points="100,95 93,60 107,60" fill="rgba(31,41,55,0.3)" stroke="#1F2937" strokeWidth="1" />
      
      <line x1="100" y1="12" x2="100" y2="20" stroke="#EF4444" strokeWidth="2.5" />
      <line x1="100" y1="100" x2="100" y2="108" stroke="#1F2937" strokeWidth="2.5" />
      <line x1="52" y1="60" x2="60" y2="60" stroke="#1F2937" strokeWidth="2.5" />
      <line x1="140" y1="60" x2="148" y2="60" stroke="#1F2937" strokeWidth="2.5" />
      <circle cx="100" cy="60" r="3" fill="#1F2937" stroke="none" />
    </svg>
  );
}

// 7. Geographie: Vulkan
export function VulkanSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 40 100 L 85 40 L 115 40 L 160 100 Z" fill="rgba(31,41,55,0.2)" stroke="#1F2937" strokeWidth="2" strokeLinejoin="miter" />
      
      <path d="M 95 35 C 80 20, 90 10, 100 15 C 115 5, 125 15, 115 25 C 125 35, 110 40, 105 35 Z" fill="rgba(31,41,55,0.3)" stroke="#1F2937" strokeWidth="2" />
      
      <ellipse cx="100" cy="40" rx="15" ry="4" fill="rgba(239,68,68,0.5)" stroke="#EF4444" strokeWidth="1.5" />
      
      <path d="M 90 42 Q 95 60 85 70 T 80 85" fill="none" stroke="#EF4444" strokeWidth="2.5" />
      <path d="M 108 42 Q 105 55 115 65" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
      
      <circle cx="100" cy="90" r="10" fill="rgba(239,68,68,0.4)" stroke="#EF4444" strokeWidth="2" />
      <line x1="100" y1="80" x2="100" y2="44" stroke="#EF4444" strokeWidth="4" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="#1F2937" strokeWidth="2.5" />
    </svg>
  );
}

// 8. Geographie: Plattentektonik
export function PlattentektonikSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Magma / Mantle Background */}
      <rect x="20" y="60" width="160" height="40" fill="rgba(239,68,68,0.05)" stroke="none" />
      
      {/* Oceanic Plate (Left, going under) */}
      <path d="M 20 60 L 80 60 L 120 100 L 20 100 Z" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="miter" />
      
      {/* Continental Plate (Right, staying up) */}
      <path d="M 80 45 L 180 45 L 180 100 L 120 100 L 80 60 Z" fill="rgba(16,185,129,0.2)" stroke="#10B981" strokeWidth="2" strokeLinejoin="miter" />
      
      {/* Arrows */}
      <line x1="40" y1="40" x2="60" y2="40" stroke="#1F2937" strokeWidth="2" />
      <polygon points="60,35 68,40 60,45" fill="#1F2937" stroke="none" />
      
      <line x1="160" y1="30" x2="140" y2="30" stroke="#1F2937" strokeWidth="2" />
      <polygon points="140,25 132,30 140,35" fill="#1F2937" stroke="none" />
      
      {/* Magma rising */}
      <circle cx="110" cy="85" r="4" fill="rgba(239,68,68,0.5)" stroke="none" />
      <circle cx="105" cy="75" r="3" fill="rgba(239,68,68,0.5)" stroke="none" />
      <path d="M 105 70 Q 100 55 95 45" stroke="#EF4444" strokeWidth="2" fill="none" strokeDasharray="2 2" />
    </svg>
  );
}

// 9. Mathematik: Koordinatensystem
export function KoordinatensystemSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="40" y1="20" x2="40" y2="100" stroke="rgba(31,41,55,0.1)" strokeWidth="1" />
      <line x1="60" y1="20" x2="60" y2="100" stroke="rgba(31,41,55,0.1)" strokeWidth="1" />
      <line x1="80" y1="20" x2="80" y2="100" stroke="rgba(31,41,55,0.1)" strokeWidth="1" />
      <line x1="120" y1="20" x2="120" y2="100" stroke="rgba(31,41,55,0.1)" strokeWidth="1" />
      <line x1="140" y1="20" x2="140" y2="100" stroke="rgba(31,41,55,0.1)" strokeWidth="1" />
      <line x1="160" y1="20" x2="160" y2="100" stroke="rgba(31,41,55,0.1)" strokeWidth="1" />
      
      <line x1="20" y1="40" x2="180" y2="40" stroke="rgba(31,41,55,0.1)" strokeWidth="1" />
      <line x1="20" y1="80" x2="180" y2="80" stroke="rgba(31,41,55,0.1)" strokeWidth="1" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(31,41,55,0.1)" strokeWidth="1" />
      
      <line x1="20" y1="60" x2="180" y2="60" stroke="#1F2937" strokeWidth="2" />
      <polygon points="180,55 188,60 180,65" fill="#1F2937" stroke="none" />
      
      <line x1="100" y1="100" x2="100" y2="20" stroke="#1F2937" strokeWidth="2" />
      <polygon points="95,20 100,12 105,20" fill="#1F2937" stroke="none" />
      
      <circle cx="100" cy="60" r="3" fill="#1F2937" stroke="none" />
    </svg>
  );
}

// 10. Mathematik: Funktion (Parabola)
export function FunktionSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="40" y1="80" x2="160" y2="80" stroke="#1F2937" strokeWidth="2" />
      <polygon points="160,75 168,80 160,85" fill="#1F2937" stroke="none" />
      
      <line x1="100" y1="100" x2="100" y2="20" stroke="#1F2937" strokeWidth="2" />
      <polygon points="95,20 100,12 105,20" fill="#1F2937" stroke="none" />
      
      <path d="M 60 20 Q 100 140 140 20" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
      
      <circle cx="100" cy="80" r="4" fill="#3B82F6" stroke="none" />
      <circle cx="80" cy="65" r="4" fill="#3B82F6" stroke="none" />
      <circle cx="120" cy="65" r="4" fill="#3B82F6" stroke="none" />
    </svg>
  );
}
