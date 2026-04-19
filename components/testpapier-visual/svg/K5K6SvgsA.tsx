import React from "react";

export function BlumeSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#10B981" strokeWidth="2">
        {/* Stem */}
        <path d="M 100 65 L 100 110" />
        {/* Leaves */}
        <path d="M 100 95 C 80 95 75 80 75 80 C 80 90 95 90 100 95 Z" fill="rgba(16,185,129,0.2)" />
        <path d="M 100 85 C 120 85 125 70 125 70 C 120 80 105 80 100 85 Z" fill="rgba(16,185,129,0.2)" />
      </g>
      {/* 5 Petals */}
      <g fill="rgba(139,92,246,0.20)" stroke="#8B5CF6" strokeWidth="2">
        <circle cx="100" cy="35" r="15" />
        <circle cx="118" cy="48" r="15" />
        <circle cx="111" cy="67" r="15" />
        <circle cx="89" cy="67" r="15" />
        <circle cx="82" cy="48" r="15" />
      </g>
      {/* Center Receptacle */}
      <circle cx="100" cy="53" r="12" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" strokeWidth="2" />
    </svg>
  );
}

export function BaumSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Trunk */}
      <path d="M 95 80 L 95 110 L 105 110 L 105 80 Z" fill="rgba(31,41,55,0.15)" stroke="#1F2937" strokeWidth="2" />
      {/* Canopy */}
      <path d="M 100 15 C 130 15 145 35 140 60 C 145 75 125 85 100 85 C 75 85 55 75 60 60 C 55 35 70 15 100 15 Z" fill="rgba(16,185,129,0.18)" stroke="#10B981" strokeWidth="2" />
    </svg>
  );
}

export function BlattSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#10B981" strokeWidth="2">
        {/* Leaf outline */}
        <path d="M 100 15 C 140 35 130 85 100 105 C 70 85 60 35 100 15 Z" fill="rgba(16,185,129,0.2)" />
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

export function WurzelSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Ground line */}
      <path d="M 50 20 L 150 20" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
      {/* Base of stem */}
      <path d="M 97 10 L 97 20 M 103 10 L 103 20" stroke="#1F2937" strokeWidth="2" />
      
      <g stroke="#1F2937" strokeWidth="2" fill="none">
        {/* Main taproot */}
        <path d="M 100 20 C 100 40 95 60 100 110" strokeWidth="2.5" />
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

export function SkelettSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#1F2937" strokeWidth="2" fill="rgba(31,41,55,0.15)">
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

export function HerzSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#EF4444" strokeWidth="2" fill="rgba(239,68,68,0.2)">
        {/* Main Heart Silhouette */}
        <path d="M 95 30 C 75 30 70 60 85 90 C 95 105 105 105 110 90 C 125 50 115 35 105 35 C 105 35 105 25 95 30 Z" />
        {/* Vessels */}
        <path d="M 85 30 L 85 15 M 95 15 C 95 10 110 10 110 20 L 110 35" fill="none" stroke="#3B82F6" />
        {/* Internal division (Septum) */}
        <path d="M 100 40 C 95 60 100 80 95 95" fill="none" strokeOpacity="0.6" />
        {/* Flow arrows */}
        <path d="M 75 50 L 85 60 M 80 65 L 85 60 L 90 55" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M 115 65 L 105 55 M 100 60 L 105 55 L 110 50" fill="none" stroke="#EF4444" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function LungeSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Trachea and Bronchi */}
      <path d="M 100 15 L 100 40" stroke="#1F2937" strokeWidth="2.5" />
      <path d="M 100 40 L 85 55 M 100 40 L 115 55" stroke="#1F2937" strokeWidth="2" />
      <path d="M 85 55 L 75 65 M 85 55 L 85 70 M 115 55 L 125 65 M 115 55 L 115 70" stroke="#1F2937" strokeWidth="1.5" />
      {/* Left Lung */}
      <path d="M 92 40 C 70 35 55 60 60 95 C 65 110 85 110 90 95 C 95 80 92 50 92 40 Z" fill="rgba(239,68,68,0.15)" stroke="#EF4444" strokeWidth="2" />
      {/* Right Lung (slightly smaller for heart) */}
      <path d="M 108 40 C 130 35 145 60 140 95 C 135 110 115 110 110 95 C 105 80 108 50 108 40 Z" fill="rgba(239,68,68,0.15)" stroke="#EF4444" strokeWidth="2" />
    </svg>
  );
}

export function FischAnatomieSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#1F2937" strokeWidth="2">
        {/* Fish Body */}
        <path d="M 40 60 C 40 30 110 30 140 60 C 110 90 40 90 40 60 Z" fill="rgba(16,185,129,0.2)" stroke="#10B981" />
        {/* Tail Fin */}
        <path d="M 140 60 L 160 35 C 150 60 150 60 160 85 Z" fill="rgba(16,185,129,0.2)" stroke="#10B981" />
        {/* Dorsal Fin */}
        <path d="M 70 40 L 90 20 C 100 25 105 32 110 40" fill="rgba(16,185,129,0.2)" stroke="#10B981" />
        {/* Pectoral Fin */}
        <path d="M 75 65 L 90 80 C 85 85 80 85 75 75 Z" fill="rgba(16,185,129,0.2)" stroke="#10B981" />
        {/* Gills */}
        <path d="M 65 50 C 70 55 70 65 65 70" />
        <path d="M 60 52 C 64 57 64 63 60 68" />
        <path d="M 55 54 C 58 58 58 62 55 66" />
        {/* Eye */}
        <circle cx="50" cy="55" r="3" fill="#1F2937" />
        {/* Mouth */}
        <path d="M 40 60 L 45 62" />
      </g>
    </svg>
  );
}

export function VogelAnatomieSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#1F2937" strokeWidth="2">
        {/* Bird Body */}
        <path d="M 70 45 C 90 35 130 55 140 70 C 130 85 90 85 70 70 C 60 60 60 50 70 45 Z" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" />
        {/* Head */}
        <circle cx="65" cy="45" r="15" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" />
        {/* Beak */}
        <path d="M 52 42 L 35 48 L 52 52 Z" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" />
        {/* Eye */}
        <circle cx="60" cy="42" r="2" fill="#1F2937" />
        {/* Wing */}
        <path d="M 90 55 C 100 35 120 25 135 30 C 125 45 110 55 90 65" fill="rgba(59,130,246,0.3)" stroke="#3B82F6" />
        <path d="M 105 40 L 115 45 M 115 35 L 125 40 M 125 32 L 130 35" stroke="#3B82F6" strokeWidth="1.5" />
        {/* Tail */}
        <path d="M 138 65 L 165 60 C 160 70 155 75 135 75" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" />
        {/* Legs */}
        <path d="M 95 80 L 90 100 L 80 105 M 90 100 L 95 105 M 90 100 L 85 105" stroke="#F59E0B" />
        <path d="M 110 78 L 105 95 L 95 100 M 105 95 L 110 100 M 105 95 L 100 100" stroke="#F59E0B" />
      </g>
    </svg>
  );
}

export function InsektAnatomieSvg({ className = "w-full h-auto max-h-32" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <g stroke="#1F2937" strokeWidth="2">
        {/* Head */}
        <circle cx="60" cy="60" r="10" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" />
        {/* Thorax */}
        <ellipse cx="85" cy="60" rx="15" ry="12" fill="rgba(31,41,55,0.2)" stroke="#1F2937" />
        {/* Abdomen */}
        <ellipse cx="125" cy="60" rx="25" ry="15" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" />
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