import React from "react";

interface SvgProps {
  className?: string;
}

/**
 * 1. SunSvg — K1-K2 Sachkunde (időjárás/évszak)
 * Vizuálisan: kör középen (Nap) + 8 sugár a körül.
 */
export function SunSvg({ className = "w-full h-auto max-h-32" }: SvgProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Nap korong */}
      <circle
        cx="100"
        cy="60"
        r="25"
        fill="rgba(245, 158, 11, 0.18)"
        stroke="#F59E0B"
        strokeWidth="2"
      />
      {/* Sugarak - 8 irányba */}
      <g stroke="#F59E0B" strokeWidth="2">
        <line x1="100" y1="30" x2="100" y2="22" /> {/* Fel */}
        <line x1="100" y1="90" x2="100" y2="98" /> {/* Le */}
        <line x1="70" y1="60" x2="62" y2="60" />  {/* Bal */}
        <line x1="130" y1="60" x2="138" y2="60" /> {/* Jobb */}
        
        <line x1="79" y1="39" x2="73" y2="33" />  {/* Bal-fent */}
        <line x1="121" y1="39" x2="127" y2="33" /> {/* Jobb-fent */}
        <line x1="79" y1="81" x2="73" y2="87" />  {/* Bal-lent */}
        <line x1="121" y1="81" x2="127" y2="87" /> {/* Jobb-lent */}
      </g>
    </svg>
  );
}

/**
 * 2. ThermometerSvg — K3-K4 Math (mértékegység)
 * Vizuálisan: függőleges hőmérő (bulb alul + tube fel).
 */
export function ThermometerSvg({ className = "w-full h-auto max-h-32" }: SvgProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Tube (cső) */}
      <rect
        x="55"
        y="20"
        width="10"
        height="75"
        rx="5"
        stroke="#EF4444"
        strokeWidth="2"
      />
      
      {/* Folyadék szint a tube-ban (alsó ~60%) */}
      <rect
        x="57"
        y="50"
        width="6"
        height="45"
        rx="3"
        fill="rgba(239, 68, 68, 0.4)"
      />

      {/* Bulb (tartály) */}
      <circle
        cx="60"
        cy="95"
        r="14"
        fill="rgba(239, 68, 68, 0.22)"
        stroke="#EF4444"
        strokeWidth="2"
      />

      {/* Skála (tick marks) */}
      <g stroke="#1F2937" strokeWidth="1.5">
        <line x1="65" y1="30" x2="72" y2="30" />
        <line x1="65" y1="42" x2="72" y2="42" />
        <line x1="65" y1="54" x2="72" y2="54" />
        <line x1="65" y1="66" x2="72" y2="66" />
        <line x1="65" y1="78" x2="72" y2="78" />
      </g>
    </svg>
  );
}

/**
 * 3. StromkreisSvg — K7 Physik (egyszerű áramkör)
 * Vizuálisan: négyszögletes áramkör, balra elem, jobbra lámpa.
 */
export function StromkreisSvg({ className = "w-full h-auto max-h-32" }: SvgProps) {
  return (
    <svg
      viewBox="0 0 200 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Vezeték (4 külön vonal, hogy legyen hely az elemeknek) */}
      <g stroke="#3B82F6" strokeWidth="2">
        <path d="M 40 50 L 40 30 L 160 30 L 160 50" /> {/* Felső rész */}
        <path d="M 40 70 L 40 90 L 160 90 L 160 70" /> {/* Alsó rész */}
      </g>

      {/* Elem (Battery) - Bal oldalon középen */}
      <g transform="translate(40, 60)">
        {/* Pasztell háttér az elemnek */}
        <rect x="-10" y="-15" width="20" height="30" fill="rgba(245, 158, 11, 0.1)" stroke="none" />
        <line x1="-5" y1="-8" x2="-5" y2="8" stroke="#1F2937" strokeWidth="2.5" /> {/* Rövid (-) */}
        <line x1="5" y1="-15" x2="5" y2="15" stroke="#1F2937" strokeWidth="2" />  {/* Hosszú (+) */}
      </g>

      {/* Lámpa (Bulb) - Jobb oldalon középen */}
      <g transform="translate(160, 60)">
        <circle
          cx="0"
          cy="0"
          r="12"
          fill="rgba(245, 158, 11, 0.18)"
          stroke="#1F2937"
          strokeWidth="2"
        />
        <line x1="-8" y1="-8" x2="8" y2="8" stroke="#1F2937" strokeWidth="2" />
        <line x1="8" y1="-8" x2="-8" y2="8" stroke="#1F2937" strokeWidth="2" />
      </g>
    </svg>
  );
}
