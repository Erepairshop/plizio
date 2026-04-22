import React from "react";

export function WolkenSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path 
        d="M 62 75 A 15 15 0 0 1 62 45 A 30 30 0 0 1 118 45 A 20 20 0 0 1 138 75 Z" 
        fill="none" 
        stroke="#000" 
        strokeWidth="1.5" 
      />
    </svg>
  );
}

export function RegenSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path 
        d="M 62 65 A 15 15 0 0 1 62 35 A 30 30 0 0 1 118 35 A 20 20 0 0 1 138 65 Z" 
        fill="none" 
        stroke="#000" 
        strokeWidth="1.5" 
      />
      <path d="M 70 75 L 65 90 M 90 75 L 85 90 M 110 75 L 105 90 M 130 75 L 125 90 M 80 85 L 75 100 M 100 85 L 95 100 M 120 85 L 115 100" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function SchneeSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path 
        d="M 62 65 A 15 15 0 0 1 62 35 A 30 30 0 0 1 118 35 A 20 20 0 0 1 138 65 Z" 
        fill="none" 
        stroke="#000" 
        strokeWidth="1.5" 
      />
      <path d="M 80 80 L 80 90 M 75 85 L 85 85 M 76.5 81.5 L 83.5 88.5 M 76.5 88.5 L 83.5 81.5" stroke="#000" strokeWidth="1.5" />
      <path d="M 100 90 L 100 100 M 95 95 L 105 95 M 96.5 91.5 L 103.5 98.5 M 96.5 98.5 L 103.5 91.5" stroke="#000" strokeWidth="1.5" />
      <path d="M 120 75 L 120 85 M 115 80 L 125 80 M 116.5 76.5 L 123.5 83.5 M 116.5 83.5 L 123.5 76.5" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function GewitterSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path 
        d="M 62 60 A 15 15 0 0 1 62 30 A 30 30 0 0 1 118 30 A 20 20 0 0 1 138 60 Z" 
        fill="none" 
        stroke="#000" 
        strokeWidth="1.5" 
      />
      <path 
        d="M 100 60 L 88 80 L 100 80 L 92 105 L 112 75 L 98 75 Z" 
        fill="none" 
        stroke="#000" 
        strokeWidth="1.5" 
      />
    </svg>
  );
}

export function WindSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 40 40 Q 70 20 100 40 T 150 40 A 8 8 0 1 0 150 24" stroke="#000" strokeWidth="1.5" />
      <path d="M 20 60 Q 60 80 100 60 T 170 60 A 10 10 0 1 1 170 80" stroke="#000" strokeWidth="1.5" />
      <path d="M 50 80 Q 80 60 110 80 T 140 80 A 6 6 0 1 0 140 68" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function SonnenblumeSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 100 55 L 100 110" stroke="#000" strokeWidth="1.5" />
      <path d="M 100 90 Q 80 80 75 95 Q 90 100 100 90 Z" fill="none" stroke="#000" strokeWidth="1.5" />
      <path d="M 100 80 Q 120 70 125 85 Q 110 90 100 80 Z" fill="none" stroke="#000" strokeWidth="1.5" />
      
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <path 
          key={angle} 
          d="M 100 33 C 108 25 105 15 100 15 C 95 15 92 25 100 33 Z" 
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5" 
          transform={`rotate(${angle} 100 45)`} 
        />
      ))}
      
      <circle cx="100" cy="45" r="12" fill="none" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function VerdunstungSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 50 100 C 50 110 150 110 150 100 C 150 90 50 90 50 100 Z" fill="none" stroke="#000" strokeWidth="1.5" />
      
      <path d="M 70 90 Q 60 70 75 60 T 70 35" stroke="#000" strokeWidth="1.5" />
      <path d="M 65 40 L 70 35 L 75 40" stroke="#000" strokeWidth="1.5" />
      
      <path d="M 100 90 Q 90 65 105 55 T 100 25" stroke="#000" strokeWidth="1.5" />
      <path d="M 95 30 L 100 25 L 105 30" stroke="#000" strokeWidth="1.5" />
      
      <path d="M 130 90 Q 120 70 135 60 T 130 35" stroke="#000" strokeWidth="1.5" />
      <path d="M 125 40 L 130 35 L 135 40" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function KondensationSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M 70 95 L 70 80 M 65 85 L 70 80 L 75 85" stroke="#000" strokeWidth="1.5" />
      <path d="M 100 100 L 100 80 M 95 85 L 100 80 L 105 85" stroke="#000" strokeWidth="1.5" />
      <path d="M 130 95 L 130 80 M 125 85 L 130 80 L 135 85" stroke="#000" strokeWidth="1.5" />
      
      <path 
        d="M 62 65 A 15 15 0 0 1 62 35 A 30 30 0 0 1 118 35 A 20 20 0 0 1 138 65 Z" 
        fill="none" 
        stroke="#000" 
        strokeWidth="1.5" 
      />
      
      <path d="M 80 45 Q 83 50 80 53 Q 77 50 80 45 Z" fill="none" stroke="#000" strokeWidth="1.5" />
      <path d="M 100 40 Q 103 45 100 48 Q 97 45 100 40 Z" fill="none" stroke="#000" strokeWidth="1.5" />
      <path d="M 120 48 Q 123 53 120 56 Q 117 53 120 48 Z" fill="none" stroke="#000" strokeWidth="1.5" />
      <path d="M 90 52 Q 93 57 90 60 Q 87 57 90 52 Z" fill="none" stroke="#000" strokeWidth="1.5" />
      <path d="M 110 50 Q 113 55 110 58 Q 107 55 110 50 Z" fill="none" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function NiederschlagSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path 
        d="M 62 50 A 15 15 0 0 1 62 20 A 30 30 0 0 1 118 20 A 20 20 0 0 1 138 50 Z" 
        fill="none" 
        stroke="#000" 
        strokeWidth="1.5" 
      />
      
      <path d="M 70 60 L 65 80 M 90 60 L 85 80 M 110 60 L 105 80 M 130 60 L 125 80" stroke="#000" strokeWidth="1.5" />
      <path d="M 80 75 L 75 95 M 100 75 L 95 95 M 120 75 L 115 95" stroke="#000" strokeWidth="1.5" />
      
      <path d="M 75 105 L 75 111 M 72 108 L 78 108" stroke="#000" strokeWidth="1.5" />
      <path d="M 95 102 L 95 108 M 92 105 L 98 105" stroke="#000" strokeWidth="1.5" />
      <path d="M 115 106 L 115 112 M 112 109 L 118 109" stroke="#000" strokeWidth="1.5" />
      <path d="M 135 95 L 135 101 M 132 98 L 138 98" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function FlussSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path 
        d="M 20 40 Q 60 60 100 40 T 180 40 L 180 80 Q 140 100 100 80 T 20 80 Z" 
        fill="none" 
        stroke="#000" 
        strokeWidth="1.5" 
      />
      
      <path d="M 40 55 Q 70 70 100 55 T 160 55" stroke="#000" strokeWidth="1.5" />
      <path d="M 30 65 Q 70 80 100 65 T 170 65" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}
