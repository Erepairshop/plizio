import React from "react";

export function WinterSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Central Hexagon */}
        <polygon points="100,50 108.66,55 108.66,65 100,70 91.34,65 91.34,55" fill="none" />
        {/* Main Branches */}
        <path d="M 100 50 L 100 20 M 93 32 L 100 20 L 107 32" />
        <path d="M 100 70 L 100 100 M 93 88 L 100 100 L 107 88" />
        <path d="M 108.66 55 L 134.64 40 M 121 38 L 134.64 40 L 129 52" />
        <path d="M 91.34 65 L 65.36 80 M 79 82 L 65.36 80 L 71 68" />
        <path d="M 108.66 65 L 134.64 80 M 129 68 L 134.64 80 L 121 82" />
        <path d="M 91.34 55 L 65.36 40 M 71 52 L 65.36 40 L 79 38" />
      </g>
    </svg>
  );
}

export function FruehlingSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Stem */}
      <path d="M 100 52 L 100 100" stroke="#000" strokeWidth="1.5" />
      {/* Leaves */}
      <path d="M 100 80 C 85 80 80 65 80 65 C 85 75 100 75 100 80 Z" fill="none" stroke="#000" strokeWidth="1.5" />
      <path d="M 100 70 C 115 70 120 55 120 55 C 115 65 100 65 100 70 Z" fill="none" stroke="#000" strokeWidth="1.5" />
      {/* Flower Bud */}
      <path d="M 90 30 C 90 55 110 55 110 30 L 105 40 L 100 25 L 95 40 Z" fill="none" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function SommerSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Sun Core */}
      <circle cx="100" cy="60" r="24" fill="none" stroke="#000" strokeWidth="1.5" />
      {/* 12 Rays */}
      <path 
        d="M 128 60 L 140 60 M 124.2 74 L 134.6 80 M 114 84.2 L 120 94.6 M 100 88 L 100 100 M 86 84.2 L 80 94.6 M 75.8 74 L 65.4 80 M 72 60 L 60 60 M 75.8 46 L 65.4 40 M 86 35.8 L 80 25.4 M 100 32 L 100 20 M 114 35.8 L 120 25.4 M 124.2 46 L 134.6 40" 
        stroke="#000" 
        strokeWidth="1.5" 
      />
    </svg>
  );
}

export function HerbstSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Main Leaf */}
        <path d="M 100 25 C 130 35 120 75 100 85 C 80 75 70 35 100 25 Z" fill="none" />
        <path d="M 100 85 L 100 95" />
        <path d="M 100 80 L 100 35 M 102 70 L 110 60 M 101 55 L 108 45 M 98 65 L 90 55 M 99 50 L 92 40" />
        
        {/* Small Leaf 1 */}
        <g transform="translate(-40, 20) scale(0.5) rotate(-30 100 60)">
          <path d="M 100 25 C 130 35 120 75 100 85 C 80 75 70 35 100 25 Z" fill="none" />
          <path d="M 100 85 L 100 95" />
        </g>
        
        {/* Small Leaf 2 */}
        <g transform="translate(45, -10) scale(0.4) rotate(45 100 60)">
          <path d="M 100 25 C 130 35 120 75 100 85 C 80 75 70 35 100 25 Z" fill="none" />
          <path d="M 100 85 L 100 95" />
        </g>
      </g>
    </svg>
  );
}

export function KatzeSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g fill="none" stroke="#000" strokeWidth="1.5">
        {/* Continuous body silhouette */}
        <path d="
          M 125 45 
          L 130 25 
          L 138 38 
          L 145 30 
          L 148 45 
          C 155 50 155 60 148 65 
          L 130 65 
          L 130 95 L 120 95 L 120 75 
          L 110 75 L 110 95 L 100 95 L 100 75 
          C 90 75 80 75 75 80 
          L 75 95 L 65 95 L 65 75 
          C 55 70 45 60 50 45 
          C 55 40 60 50 60 60 
          C 60 65 70 65 75 60 
          C 75 50 95 45 125 45 Z" 
        />
      </g>
    </svg>
  );
}

export function HundSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Body */}
        <path d="
          M 125 40 
          C 135 40 140 45 140 50 
          L 150 50 
          C 155 50 155 58 150 58 
          L 140 58 
          C 135 65 130 68 125 68 
          L 125 95 L 115 95 L 115 75 
          L 105 75 L 105 95 L 95 95 L 95 75 
          C 80 75 70 75 65 80 
          L 65 95 L 55 95 L 55 75 
          L 45 75 L 45 95 L 35 95 L 35 65 
          L 25 50 C 20 40 30 35 35 45 L 45 55 
          C 55 45 80 45 105 45 
          L 115 40 
          C 120 38 123 38 125 40 Z" 
          fill="none"
        />
        {/* Floppy Ear */}
        <path d="M 125 45 C 135 55 125 70 115 65 C 110 60 115 45 125 45 Z" fill="none" />
      </g>
    </svg>
  );
}

export function VogelSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Body & Head & Beak */}
        <path d="
          M 120 45 
          C 130 45 135 50 140 50 
          L 155 55 
          L 140 60 
          C 135 75 110 85 90 80 
          L 60 90 
          L 70 70 
          C 65 60 75 45 95 45 
          C 105 45 115 45 120 45 Z" 
          fill="none" 
        />
        {/* Wing */}
        <path d="M 95 55 C 110 55 120 65 110 75 C 90 70 85 60 95 55 Z" fill="none" />
        {/* Legs */}
        <path d="M 100 82 L 95 95 L 90 95 M 95 95 L 100 95" />
        <path d="M 110 80 L 105 95 L 100 95 M 105 95 L 110 95" />
        {/* Eye */}
        <circle cx="125" cy="52" r="2" fill="none" stroke="#000" />
      </g>
    </svg>
  );
}

export function FischSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Main Body */}
        <path d="
          M 140 60 
          C 140 40 100 30 70 50 
          L 40 30 
          L 50 60 
          L 40 90 
          L 70 70 
          C 100 90 140 80 140 60 Z" 
          fill="none" 
        />
        {/* Fins */}
        <path d="M 90 36 C 100 25 110 25 110 38 Z" fill="none" />
        <path d="M 90 84 C 100 95 110 95 110 82 Z" fill="none" />
        <path d="M 100 60 C 110 55 120 65 105 70 C 100 65 95 65 100 60 Z" fill="none" />
        {/* Details */}
        <circle cx="125" cy="55" r="3" fill="none" stroke="#000" />
        <path d="M 115 65 C 115 70 120 75 125 75" fill="none" />
      </g>
    </svg>
  );
}

export function PferdSvgNoBorder({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#000" strokeWidth="1.5">
        {/* Body */}
        <path d="
          M 135 25 
          L 130 15 L 125 20 
          C 115 30 105 40 95 45 
          L 55 45 
          C 45 45 35 50 30 60 
          L 25 95 L 35 95 L 40 70 
          L 45 70 L 45 95 L 55 95 L 55 65 
          C 70 70 85 70 95 65 
          L 95 95 L 105 95 L 105 65 
          L 110 65 L 110 95 L 120 95 L 120 65 
          C 125 50 135 45 145 40 
          L 155 45 C 160 40 155 35 150 30 
          L 135 25 Z" 
          fill="none"
        />
        {/* Mane */}
        <path d="M 125 20 C 120 25 105 40 95 45 L 105 45 C 115 40 130 25 125 20 Z" fill="none" stroke="#000" />
        {/* Tail */}
        <path d="M 30 60 C 15 65 20 85 15 95 C 20 95 25 80 30 70 Z" fill="none" stroke="#000" />
      </g>
    </svg>
  );
}
