import React from "react";

export function SunSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Sun Core */}
      <circle cx="100" cy="60" r="24" fill="rgba(245,158,11,0.18)" stroke="#F59E0B" strokeWidth="2" />
      
      {/* 12 Rays */}
      <path 
        d="M 128 60 L 140 60 M 124.2 74 L 134.6 80 M 114 84.2 L 120 94.6 M 100 88 L 100 100 M 86 84.2 L 80 94.6 M 75.8 74 L 65.4 80 M 72 60 L 60 60 M 75.8 46 L 65.4 40 M 86 35.8 L 80 25.4 M 100 32 L 100 20 M 114 35.8 L 120 25.4 M 124.2 46 L 134.6 40" 
        stroke="#F59E0B" 
        strokeWidth="2" 
      />
      
      {/* Friendly Face (Optional subtle detail) */}
      <path d="M 93 55 L 93 55.1 M 107 55 L 107 55.1 M 94 62 Q 100 68 106 62" stroke="#1F2937" strokeWidth="2" />
    </svg>
  );
}

export function ThermometerSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Liquid Fill */}
      <path 
        d="M 95 76.92 L 95 55 L 105 55 L 105 76.92 A 14 14 0 1 1 95 76.92 Z" 
        fill="rgba(239,68,68,0.4)" 
        stroke="none" 
      />
      
      {/* Thermometer Outline (Tube + Bulb mathematically merged) */}
      <path 
        d="M 95 76.92 L 95 25 A 5 5 0 0 1 105 25 L 105 76.92 A 14 14 0 1 1 95 76.92 Z" 
        stroke="#1F2937" 
        strokeWidth="2" 
      />
      
      {/* Scale Tick Marks */}
      <path 
        d="M 108 30 L 112 30 M 108 40 L 112 40 M 108 50 L 112 50 M 108 60 L 112 60 M 108 70 L 112 70" 
        stroke="#1F2937" 
        strokeWidth="2" 
      />
    </svg>
  );
}

export function StromkreisSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Wires (Top + Right-Upper) and (Bottom + Right-Lower) */}
      <path d="M 30 55 L 30 25 L 170 25 L 170 50" stroke="#3B82F6" strokeWidth="2" />
      <path d="M 30 65 L 30 95 L 170 95 L 170 70" stroke="#3B82F6" strokeWidth="2" />
      
      {/* Battery (Long positive, short negative) */}
      <path d="M 15 55 L 45 55 M 22 65 L 38 65" stroke="#3B82F6" strokeWidth="2" />
      
      {/* Light Bulb (Circle with perfectly centered cross) */}
      <circle cx="170" cy="60" r="10" stroke="#3B82F6" strokeWidth="2" />
      <path d="M 163 53 L 177 67 M 163 67 L 177 53" stroke="#3B82F6" strokeWidth="2" />
    </svg>
  );
}
