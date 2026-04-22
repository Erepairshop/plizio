import React from "react";

export function AugeSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#1F2937" strokeWidth="2">
        {/* Eyeball outline (almond shape) */}
        <path d="M 40 60 C 70 30 130 30 160 60 C 130 90 70 90 40 60 Z" fill="rgba(31,41,55,0.05)" />
        {/* Iris */}
        <circle cx="100" cy="60" r="20" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" />
        {/* Pupil */}
        <circle cx="100" cy="60" r="8" fill="#1F2937" />
        {/* Eyelid crease */}
        <path d="M 50 45 C 80 25 120 25 150 45" strokeOpacity="0.5" />
      </g>
    </svg>
  );
}

export function OhrSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#1F2937" strokeWidth="2.5">
        {/* Outer ear shape */}
        <path d="M 80 30 C 110 10 130 30 130 55 C 130 75 120 85 110 100 C 100 110 85 105 85 95 C 85 85 95 80 95 70" fill="rgba(245,158,11,0.15)" stroke="#F59E0B" />
        {/* Inner ear folds */}
        <path d="M 95 40 C 115 30 115 55 105 65" stroke="#F59E0B" />
        <path d="M 100 55 C 105 60 105 70 95 75" stroke="#F59E0B" />
        {/* Ear canal opening */}
        <path d="M 85 60 C 90 60 95 65 90 70" stroke="#1F2937" />
      </g>
    </svg>
  );
}

export function MuskelSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#EF4444" strokeWidth="2">
        {/* Arm Outline */}
        <path d="M 40 70 C 60 70 70 40 90 40 C 105 40 110 60 110 70 L 140 40 C 150 30 160 40 150 50 L 120 90 C 110 100 90 100 80 90 L 40 90 Z" fill="rgba(239,68,68,0.15)" stroke="#1F2937" strokeWidth="2" />
        {/* Bicep Muscle */}
        <path d="M 65 55 C 75 35 95 35 105 55" fill="rgba(239,68,68,0.25)" stroke="#EF4444" />
        {/* Muscle Fibers */}
        <path d="M 75 45 C 80 50 85 55 85 60" stroke="#EF4444" strokeOpacity="0.6" />
        <path d="M 85 45 C 90 50 95 55 95 60" stroke="#EF4444" strokeOpacity="0.6" />
      </g>
    </svg>
  );
}

export function MagenSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#F59E0B" strokeWidth="2">
        {/* Esophagus */}
        <path d="M 100 20 L 100 40" stroke="#1F2937" strokeWidth="2.5" />
        {/* Stomach Body */}
        <path d="M 100 40 C 70 40 60 70 70 90 C 80 110 120 110 130 90 C 140 70 120 50 110 50 C 105 50 100 45 100 40 Z" fill="rgba(245,158,11,0.2)" />
        {/* Duodenum */}
        <path d="M 130 90 C 140 80 150 80 150 90" stroke="#1F2937" strokeWidth="2.5" />
        {/* Internal folds (rugae) */}
        <path d="M 85 60 C 95 70 95 80 85 90" strokeOpacity="0.5" />
        <path d="M 100 65 C 110 75 110 85 100 95" strokeOpacity="0.5" />
      </g>
    </svg>
  );
}

export function PhotosynthesisSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Leaf */}
      <path d="M 100 20 C 140 40 130 90 100 110 C 70 90 60 40 100 20 Z" fill="rgba(16,185,129,0.2)" stroke="#10B981" strokeWidth="2" />
      <path d="M 100 20 L 100 110" stroke="#10B981" strokeWidth="2" />
      
      {/* Sun / Light */}
      <circle cx="40" cy="30" r="10" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" strokeWidth="2" />
      <path d="M 55 40 L 75 55 M 50 50 L 65 70" stroke="#F59E0B" strokeWidth="2" strokeDasharray="2 2" />
      
      {/* CO2 in */}
      <path d="M 160 40 L 130 55" stroke="#3B82F6" strokeWidth="2" />
      <path d="M 135 50 L 130 55 L 138 58" stroke="#3B82F6" strokeWidth="2" />
      <text x="165" y="45" fill="#3B82F6" fontSize="12" fontFamily="sans-serif" stroke="none">CO₂</text>
      
      {/* O2 out */}
      <path d="M 130 85 L 160 70" stroke="#EF4444" strokeWidth="2" />
      <path d="M 155 75 L 160 70 L 152 67" stroke="#EF4444" strokeWidth="2" />
      <text x="165" y="75" fill="#EF4444" fontSize="12" fontFamily="sans-serif" stroke="none">O₂</text>
      
      {/* H2O up */}
      <path d="M 100 115 L 100 95" stroke="#3B82F6" strokeWidth="2" />
      <path d="M 95 100 L 100 95 L 105 100" stroke="#3B82F6" strokeWidth="2" />
      <text x="110" y="115" fill="#3B82F6" fontSize="12" fontFamily="sans-serif" stroke="none">H₂O</text>
    </svg>
  );
}

export function BestaeubungSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Flower */}
      <g stroke="#8B5CF6" strokeWidth="2" fill="rgba(139,92,246,0.2)">
        <circle cx="70" cy="70" r="15" />
        <circle cx="90" cy="60" r="15" />
        <circle cx="100" cy="80" r="15" />
        <circle cx="80" cy="95" r="15" />
        <circle cx="60" cy="85" r="15" />
      </g>
      <circle cx="80" cy="75" r="10" fill="rgba(245,158,11,0.3)" stroke="#F59E0B" strokeWidth="2" />
      <path d="M 80 90 L 80 115" stroke="#10B981" strokeWidth="2" />
      
      {/* Bee */}
      <g stroke="#1F2937" strokeWidth="1.5">
        {/* Wings */}
        <ellipse cx="115" cy="35" rx="10" ry="5" fill="rgba(59,130,246,0.2)" transform="rotate(-30 115 35)" />
        <ellipse cx="125" cy="30" rx="10" ry="5" fill="rgba(59,130,246,0.2)" transform="rotate(-10 125 30)" />
        {/* Body */}
        <ellipse cx="120" cy="45" rx="12" ry="8" fill="rgba(245,158,11,0.4)" stroke="#F59E0B" />
        {/* Stripes */}
        <path d="M 112 40 L 112 50 M 120 37 L 120 53 M 128 40 L 128 50" stroke="#1F2937" />
        {/* Head */}
        <circle cx="105" cy="45" r="5" fill="#1F2937" />
        {/* Stinger */}
        <path d="M 132 45 L 138 45" />
      </g>
      
      {/* Pollen path */}
      <path d="M 110 55 C 100 60 95 65 90 70" stroke="#F59E0B" strokeWidth="2" strokeDasharray="2 2" />
      <circle cx="105" cy="58" r="2" fill="#F59E0B" stroke="none" />
      <circle cx="98" cy="63" r="2" fill="#F59E0B" stroke="none" />
      <circle cx="92" cy="68" r="2" fill="#F59E0B" stroke="none" />
    </svg>
  );
}

export function SpinnenAnatomieSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#1F2937" strokeWidth="2">
        {/* Cephalothorax */}
        <ellipse cx="100" cy="45" rx="12" ry="15" fill="rgba(31,41,55,0.2)" />
        {/* Abdomen */}
        <ellipse cx="100" cy="80" rx="18" ry="25" fill="rgba(31,41,55,0.3)" />
        
        {/* Legs Left */}
        <path d="M 90 40 L 60 20 L 40 30" />
        <path d="M 88 45 L 50 45 L 30 60" />
        <path d="M 88 50 L 50 70 L 35 90" />
        <path d="M 90 55 L 60 90 L 50 110" />
        
        {/* Legs Right */}
        <path d="M 110 40 L 140 20 L 160 30" />
        <path d="M 112 45 L 150 45 L 170 60" />
        <path d="M 112 50 L 150 70 L 165 90" />
        <path d="M 110 55 L 140 90 L 150 110" />
        
        {/* Eyes / Fangs */}
        <circle cx="96" cy="35" r="1.5" fill="#1F2937" />
        <circle cx="104" cy="35" r="1.5" fill="#1F2937" />
        <path d="M 95 30 L 95 25 M 105 30 L 105 25" />
      </g>
    </svg>
  );
}

export function MolluskSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#1F2937" strokeWidth="2">
        {/* Snail Body */}
        <path d="M 40 90 C 40 80 60 80 80 80 L 130 80 C 150 80 160 70 160 90 C 160 100 140 100 120 100 L 60 100 C 45 100 40 95 40 90 Z" fill="rgba(16,185,129,0.2)" stroke="#10B981" />
        
        {/* Tentacles */}
        <path d="M 145 80 L 155 60" stroke="#10B981" />
        <circle cx="155" cy="60" r="2" fill="#1F2937" stroke="none" />
        <path d="M 155 82 L 165 65" stroke="#10B981" />
        <circle cx="165" cy="65" r="2" fill="#1F2937" stroke="none" />
        
        {/* Shell */}
        <path d="M 60 85 C 50 50 80 20 110 30 C 130 35 140 60 130 85 Z" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" />
        {/* Shell Spiral */}
        <path d="M 110 30 C 90 30 70 50 80 70 C 90 85 115 80 120 65 C 125 50 105 45 100 55 C 95 65 105 70 110 65" stroke="#F59E0B" />
      </g>
    </svg>
  );
}
