import React from "react";

export function BlumeSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Stem */}
        <path d="M 100 65 L 100 110" />
        {/* Leaves */}
        <path d="M 100 95 C 80 95 75 80 75 80 C 80 90 95 90 100 95 Z" fill="none" />
        <path d="M 100 85 C 120 85 125 70 125 70 C 120 80 105 80 100 85 Z" fill="none" />
      </g>
      {/* 5 Petals */}
      <g fill="none" stroke="#000" strokeWidth="1.5">
        <circle cx="100" cy="35" r="15" />
        <circle cx="118" cy="48" r="15" />
        <circle cx="111" cy="67" r="15" />
        <circle cx="89" cy="67" r="15" />
        <circle cx="82" cy="48" r="15" />
      </g>
      {/* Center Receptacle */}
      <circle cx="100" cy="53" r="12" fill="none" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function BaumSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Trunk */}
      <path d="M 95 80 L 95 110 L 105 110 L 105 80 Z" fill="none" stroke="#000" strokeWidth="1.5" />
      {/* Canopy */}
      <path d="M 100 15 C 130 15 145 35 140 60 C 145 75 125 85 100 85 C 75 85 55 75 60 60 C 55 35 70 15 100 15 Z" fill="none" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function BlattSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Leaf outline */}
        <path d="M 100 15 C 140 35 130 85 100 105 C 70 85 60 35 100 15 Z" fill="none" />
        {/* Stem and main vein */}
        <path d="M 100 15 L 100 115" />
        {/* Lateral veins */}
        <path d="M 100 80 L 115 65" />
        <path d="M 100 80 L 85 65" />
        <path d="M 100 60 L 120 45" />
        <path d="M 100 60 L 80 45" />
        <path d="M 100 40 L 115 25" />
        <path d="M 100 40 L 85 25" />
      </g>
    </svg>
  );
}

export function WurzelSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Ground line */}
      <path d="M 50 20 L 150 20" stroke="#000" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
      {/* Base of stem */}
      <path d="M 97 10 L 97 20 M 103 10 L 103 20" stroke="#000" strokeWidth="1.5" />
      
      <g stroke="#000" strokeWidth="1.5" fill="none">
        {/* Main taproot */}
        <path d="M 100 20 C 100 40 95 60 100 110" strokeWidth="1.5" />
        {/* Lateral roots */}
        <path d="M 100 35 C 115 40 120 50 125 65" />
        <path d="M 115 45 C 125 45 135 55 135 55" />
        <path d="M 98 50 C 80 55 75 70 70 80" />
        <path d="M 85 60 C 75 60 65 70 65 70" />
        <path d="M 98 70 C 110 75 115 90 120 100" />
        <path d="M 110 85 C 120 90 125 95 125 95" />
        <path d="M 96 90 C 85 95 80 105 75 110" />
      </g>
    </svg>
  );
}

export function SkelettSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5" fill="none">
        {/* Skull */}
        <circle cx="100" cy="20" r="10" />
        {/* Spine */}
        <path d="M 100 30 L 100 65" fill="none" />
        {/* Ribcage */}
        <path d="M 90 40 C 95 35 105 35 110 40" fill="none" />
        <path d="M 88 48 C 95 43 105 43 112 48" fill="none" />
        <path d="M 88 56 C 95 51 105 51 112 56" fill="none" />
        {/* Pelvis */}
        <path d="M 90 65 C 95 70 105 70 110 65 Z" />
        {/* Arms */}
        <path d="M 90 35 L 75 50 L 70 65" fill="none" />
        <path d="M 110 35 L 125 50 L 130 65" fill="none" />
        {/* Legs */}
        <path d="M 93 68 L 85 90 L 85 110" fill="none" />
        <path d="M 107 68 L 115 90 L 115 110" fill="none" />
      </g>
    </svg>
  );
}

export function HerzSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5" fill="none">
        {/* Main Heart Silhouette */}
        <path d="M 95 30 C 75 30 70 60 85 90 C 95 105 105 105 110 90 C 125 50 115 35 105 35 C 105 35 105 25 95 30 Z" />
        {/* Vessels */}
        <path d="M 85 30 L 85 15 M 95 15 C 95 10 110 10 110 20 L 110 35" fill="none" stroke="#000" />
        {/* Internal division (Septum) */}
        <path d="M 100 40 C 95 60 100 80 95 95" fill="none" strokeOpacity="0.6" />
        {/* Flow arrows */}
        <path d="M 75 50 L 85 60 M 80 65 L 85 60 L 90 55" fill="none" stroke="#000" strokeWidth="1.5" />
        <path d="M 115 65 L 105 55 M 100 60 L 105 55 L 110 50" fill="none" stroke="#000" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function LungeSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Trachea and Bronchi */}
      <path d="M 100 15 L 100 40" stroke="#000" strokeWidth="1.5" />
      <path d="M 100 40 L 85 55 M 100 40 L 115 55" stroke="#000" strokeWidth="1.5" />
      <path d="M 85 55 L 75 65 M 85 55 L 85 70 M 115 55 L 125 65 M 115 55 L 115 70" stroke="#000" strokeWidth="1.5" />
      {/* Left Lung */}
      <path d="M 92 40 C 70 35 55 60 60 95 C 65 110 85 110 90 95 C 95 80 92 50 92 40 Z" fill="none" stroke="#000" strokeWidth="1.5" />
      {/* Right Lung (slightly smaller for heart) */}
      <path d="M 108 40 C 130 35 145 60 140 95 C 135 110 115 110 110 95 C 105 80 108 50 108 40 Z" fill="none" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function FischAnatomieSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Fish Body */}
        <path d="M 40 60 C 40 30 110 30 140 60 C 110 90 40 90 40 60 Z" fill="none" stroke="#000" />
        {/* Tail Fin */}
        <path d="M 140 60 L 160 35 C 150 60 150 60 160 85 Z" fill="none" stroke="#000" />
        {/* Dorsal Fin */}
        <path d="M 70 40 L 90 20 C 100 25 105 32 110 40" fill="none" stroke="#000" />
        {/* Pectoral Fin */}
        <path d="M 75 65 L 90 80 C 85 85 80 85 75 75 Z" fill="none" stroke="#000" />
        {/* Gills */}
        <path d="M 65 50 C 70 55 70 65 65 70" />
        <path d="M 60 52 C 64 57 64 63 60 68" />
        <path d="M 55 54 C 58 58 58 62 55 66" />
        {/* Eye */}
        <circle cx="50" cy="55" r="3" fill="none" stroke="#000" />
        {/* Mouth */}
        <path d="M 40 60 L 45 62" />
      </g>
    </svg>
  );
}

export function VogelAnatomieSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Bird Body */}
        <path d="M 70 45 C 90 35 130 55 140 70 C 130 85 90 85 70 70 C 60 60 60 50 70 45 Z" fill="none" stroke="#000" />
        {/* Head */}
        <circle cx="65" cy="45" r="15" fill="none" stroke="#000" />
        {/* Beak */}
        <path d="M 52 42 L 35 48 L 52 52 Z" fill="none" stroke="#000" />
        {/* Eye */}
        <circle cx="60" cy="42" r="2" fill="none" stroke="#000" />
        {/* Wing */}
        <path d="M 90 55 C 100 35 120 25 135 30 C 125 45 110 55 90 65" fill="none" stroke="#000" />
        <path d="M 105 40 L 115 45 M 115 35 L 125 40 M 125 32 L 130 35" stroke="#000" strokeWidth="1.5" />
        {/* Tail */}
        <path d="M 138 65 L 165 60 C 160 70 155 75 135 75" fill="none" stroke="#000" />
        {/* Legs */}
        <path d="M 95 80 L 90 100 L 80 105 M 90 100 L 95 105 M 90 100 L 85 105" stroke="#000" />
        <path d="M 110 78 L 105 95 L 95 100 M 105 95 L 110 100 M 105 95 L 100 100" stroke="#000" />
      </g>
    </svg>
  );
}

export function InsektAnatomieSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Head */}
        <circle cx="60" cy="60" r="10" fill="none" stroke="#000" />
        {/* Thorax */}
        <ellipse cx="85" cy="60" rx="15" ry="12" fill="none" stroke="#000" />
        {/* Abdomen */}
        <ellipse cx="125" cy="60" rx="25" ry="15" fill="none" stroke="#000" />
        {/* Stripes */}
        <path d="M 105 52 C 110 60 110 60 105 68" />
        <path d="M 115 47 C 120 60 120 60 115 73" />
        <path d="M 125 45 C 130 60 130 60 125 75" />
        <path d="M 135 47 C 140 60 140 60 135 73" />
        {/* Antennae */}
        <path d="M 55 52 C 45 40 35 45 35 45" />
        <path d="M 55 68 C 45 80 35 75 35 75" />
        {/* Legs (6) */}
        <path d="M 80 48 L 75 30 L 65 25" />
        <path d="M 85 48 L 85 25 L 80 20" />
        <path d="M 90 48 L 100 30 L 110 25" />
        <path d="M 80 72 L 75 90 L 65 95" />
        <path d="M 85 72 L 85 95 L 80 100" />
        <path d="M 90 72 L 100 90 L 110 95" />
      </g>
    </svg>
  );
}

export function AugeSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Eyeball outline (almond shape) */}
        <path d="M 40 60 C 70 30 130 30 160 60 C 130 90 70 90 40 60 Z" fill="none" />
        {/* Iris */}
        <circle cx="100" cy="60" r="20" fill="none" stroke="#000" />
        {/* Pupil */}
        <circle cx="100" cy="60" r="8" fill="none" stroke="#000" />
        {/* Eyelid crease */}
        <path d="M 50 45 C 80 25 120 25 150 45" strokeOpacity="0.5" />
      </g>
    </svg>
  );
}

export function OhrSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Outer ear shape */}
        <path d="M 80 30 C 110 10 130 30 130 55 C 130 75 120 85 110 100 C 100 110 85 105 85 95 C 85 85 95 80 95 70" fill="none" stroke="#000" />
        {/* Inner ear folds */}
        <path d="M 95 40 C 115 30 115 55 105 65" stroke="#000" />
        <path d="M 100 55 C 105 60 105 70 95 75" stroke="#000" />
        {/* Ear canal opening */}
        <path d="M 85 60 C 90 60 95 65 90 70" stroke="#000" />
      </g>
    </svg>
  );
}

export function MuskelSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Arm Outline */}
        <path d="M 40 70 C 60 70 70 40 90 40 C 105 40 110 60 110 70 L 140 40 C 150 30 160 40 150 50 L 120 90 C 110 100 90 100 80 90 L 40 90 Z" fill="none" stroke="#000" strokeWidth="1.5" />
        {/* Bicep Muscle */}
        <path d="M 65 55 C 75 35 95 35 105 55" fill="none" stroke="#000" />
        {/* Muscle Fibers */}
        <path d="M 75 45 C 80 50 85 55 85 60" stroke="#000" strokeOpacity="0.6" />
        <path d="M 85 45 C 90 50 95 55 95 60" stroke="#000" strokeOpacity="0.6" />
      </g>
    </svg>
  );
}

export function MagenSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Esophagus */}
        <path d="M 100 20 L 100 40" stroke="#000" strokeWidth="1.5" />
        {/* Stomach Body */}
        <path d="M 100 40 C 70 40 60 70 70 90 C 80 110 120 110 130 90 C 140 70 120 50 110 50 C 105 50 100 45 100 40 Z" fill="none" />
        {/* Duodenum */}
        <path d="M 130 90 C 140 80 150 80 150 90" stroke="#000" strokeWidth="1.5" />
        {/* Internal folds (rugae) */}
        <path d="M 85 60 C 95 70 95 80 85 90" strokeOpacity="0.5" />
        <path d="M 100 65 C 110 75 110 85 100 95" strokeOpacity="0.5" />
      </g>
    </svg>
  );
}

export function PhotosynthesisSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Leaf */}
      <path d="M 100 20 C 140 40 130 90 100 110 C 70 90 60 40 100 20 Z" fill="none" stroke="#000" strokeWidth="1.5" />
      <path d="M 100 20 L 100 110" stroke="#000" strokeWidth="1.5" />
      
      {/* Sun / Light */}
      <circle cx="40" cy="30" r="10" fill="none" stroke="#000" strokeWidth="1.5" />
      <path d="M 55 40 L 75 55 M 50 50 L 65 70" stroke="#000" strokeWidth="1.5" strokeDasharray="2 2" />
      
      {/* CO2 in */}
      <path d="M 160 40 L 130 55" stroke="#000" strokeWidth="1.5" />
      <path d="M 135 50 L 130 55 L 138 58" stroke="#000" strokeWidth="1.5" />
      <text x="165" y="45" fill="#000" fontSize="12" fontFamily="sans-serif" stroke="none">CO₂</text>
      
      {/* O2 out */}
      <path d="M 130 85 L 160 70" stroke="#000" strokeWidth="1.5" />
      <path d="M 155 75 L 160 70 L 152 67" stroke="#000" strokeWidth="1.5" />
      <text x="165" y="75" fill="#000" fontSize="12" fontFamily="sans-serif" stroke="none">O₂</text>
      
      {/* H2O up */}
      <path d="M 100 115 L 100 95" stroke="#000" strokeWidth="1.5" />
      <path d="M 95 100 L 100 95 L 105 100" stroke="#000" strokeWidth="1.5" />
      <text x="110" y="115" fill="#000" fontSize="12" fontFamily="sans-serif" stroke="none">H₂O</text>
    </svg>
  );
}

export function BestaeubungSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Flower */}
      <g stroke="#000" strokeWidth="1.5" fill="none">
        <circle cx="70" cy="70" r="15" />
        <circle cx="90" cy="60" r="15" />
        <circle cx="100" cy="80" r="15" />
        <circle cx="80" cy="95" r="15" />
        <circle cx="60" cy="85" r="15" />
      </g>
      <circle cx="80" cy="75" r="10" fill="none" stroke="#000" strokeWidth="1.5" />
      <path d="M 80 90 L 80 115" stroke="#000" strokeWidth="1.5" />
      
      {/* Bee */}
      <g stroke="#000" strokeWidth="1.5">
        {/* Wings */}
        <ellipse cx="115" cy="35" rx="10" ry="5" fill="none" transform="rotate(-30 115 35)" />
        <ellipse cx="125" cy="30" rx="10" ry="5" fill="none" transform="rotate(-10 125 30)" />
        {/* Body */}
        <ellipse cx="120" cy="45" rx="12" ry="8" fill="none" stroke="#000" />
        {/* Stripes */}
        <path d="M 112 40 L 112 50 M 120 37 L 120 53 M 128 40 L 128 50" stroke="#000" />
        {/* Head */}
        <circle cx="105" cy="45" r="5" fill="none" stroke="#000" />
        {/* Stinger */}
        <path d="M 132 45 L 138 45" />
      </g>
      
      {/* Pollen path */}
      <path d="M 110 55 C 100 60 95 65 90 70" stroke="#000" strokeWidth="1.5" strokeDasharray="2 2" />
      <circle cx="105" cy="58" r="2" fill="none" stroke="#000" />
      <circle cx="98" cy="63" r="2" fill="none" stroke="#000" />
      <circle cx="92" cy="68" r="2" fill="none" stroke="#000" />
    </svg>
  );
}

export function SpinnenAnatomieSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Cephalothorax */}
        <ellipse cx="100" cy="45" rx="12" ry="15" fill="none" />
        {/* Abdomen */}
        <ellipse cx="100" cy="80" rx="18" ry="25" fill="none" />
        
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
        <circle cx="96" cy="35" r="1.5" fill="none" stroke="#000" />
        <circle cx="104" cy="35" r="1.5" fill="none" stroke="#000" />
        <path d="M 95 30 L 95 25 M 105 30 L 105 25" />
      </g>
    </svg>
  );
}

export function MolluskSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Snail Body */}
        <path d="M 40 90 C 40 80 60 80 80 80 L 130 80 C 150 80 160 70 160 90 C 160 100 140 100 120 100 L 60 100 C 45 100 40 95 40 90 Z" fill="none" stroke="#000" />
        
        {/* Tentacles */}
        <path d="M 145 80 L 155 60" stroke="#000" />
        <circle cx="155" cy="60" r="2" fill="none" stroke="#000" />
        <path d="M 155 82 L 165 65" stroke="#000" />
        <circle cx="165" cy="65" r="2" fill="none" stroke="#000" />
        
        {/* Shell */}
        <path d="M 60 85 C 50 50 80 20 110 30 C 130 35 140 60 130 85 Z" fill="none" stroke="#000" />
        {/* Shell Spiral */}
        <path d="M 110 30 C 90 30 70 50 80 70 C 90 85 115 80 120 65 C 125 50 105 45 100 55 C 95 65 105 70 110 65" stroke="#000" />
      </g>
    </svg>
  );
}
