'use client';

import React, { useState } from 'react';
import type { Language } from '@/lib/language';

const T = {
  unit: { hu: "óra", de: "Std.", en: "hrs", ro: "ore" },
} as const;

interface Props {
  startHour: number;
  endHour: number;
  lang?: Language;
  embedded?: boolean;
  onValueChange?: (val: string) => void;
}

const TimelineDuration: React.FC<Props> = ({ 
  startHour, endHour, lang = 'hu', embedded = false, onValueChange 
}) => {
  const [userInput, setUserInput] = useState('');
  const duration = endHour - startHour;

  // Ultra-részletes óra ikon
  const HDClock = ({ hour, color, label }: { hour: number; color: string; label: string }) => {
    const rotH = (hour % 12) * 30;
    return (
      <g>
        {/* Külső díszítő gyűrű */}
        <circle r="32" fill={color} opacity="0.05" />
        <circle r="26" fill="#12122A" stroke={color} strokeWidth="2.5" />
        
        {/* Óra jelzések (12, 3, 6, 9) */}
        {[0, 90, 180, 270].map(deg => (
          <line key={deg} y1="-22" y2="-18" stroke="white" strokeWidth="1" opacity="0.4" transform={`rotate(${deg})`} />
        ))}
        
        {/* Mutatók árnyékkal */}
        <line y1="2" y2="-14" stroke="black" strokeWidth="4" opacity="0.3" strokeLinecap="round" transform={`rotate(${rotH})`} />
        <line y1="0" y2="-14" stroke={color} strokeWidth="3" strokeLinecap="round" transform={`rotate(${rotH})`} />
        <line y1="0" y2="-20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle r="2.5" fill="white" />

        {/* Feliratok az óra alatt */}
        <text y="45" fill="white" fontSize="14" fontWeight="900" textAnchor="middle">{hour}:00</text>
        <text y="60" fill={color} fontSize="9" fontWeight="bold" textAnchor="middle" opacity="0.8" className="uppercase tracking-tighter">{label}</text>
      </g>
    );
  };

  return (
    <div className={`flex flex-col items-center w-full ${embedded ? 'p-0' : 'p-4'}`}>
      <div className="relative w-full h-[180px] max-w-[500px]">
        <svg viewBox="0 0 500 180" className="w-full h-full">
          {/* Alap vonal háttérben */}
          <line x1="60" y1="130" x2="440" y2="130" stroke="white" strokeWidth="1" strokeDasharray="2 4" opacity="0.1" />
          
          {/* Az idővonal aktív szakasza */}
          <line x1="80" y1="130" x2="420" y2="130" stroke="#00D4FF" strokeWidth="4" strokeLinecap="round" className="drop-shadow-[0_0_8px_#00D4FF]" />

          {/* UGRÁSOK (Béka-ugrás módszer) - Ez segít a gyereknek számolni! */}
          {Array.from({ length: duration }).map((_, i) => {
            const stepWidth = 340 / duration;
            const startX = 80 + i * stepWidth;
            const endX = 80 + (i + 1) * stepWidth;
            return (
              <path 
                key={i}
                d={`M ${startX} 120 Q ${(startX + endX) / 2} 70 ${endX} 120`}
                fill="none"
                stroke="#FFD700"
                strokeWidth="2.5"
                strokeDasharray="5 3"
                opacity={0.6}
              />
            );
          })}

          {/* Óra egységek jelölése a vonalon */}
          {Array.from({ length: duration + 1 }).map((_, i) => {
            const x = 80 + i * (340 / duration);
            return (
              <g key={i} transform={`translate(${x}, 130)`}>
                <circle r="4" fill="#00D4FF" />
                <text y="20" fill="white" fontSize="10" opacity="0.4" textAnchor="middle" fontWeight="bold">
                  {startHour + i}h
                </text>
              </g>
            );
          })}

          {/* A két nagy óra */}
          <g transform="translate(80, 50)">
            <HDClock hour={startHour} color="#FF2D78" label="START" />
          </g>
          <g transform="translate(420, 50)">
            <HDClock hour={endHour} color="#00FF88" label="STOP" />
          </g>

          {/* Központi kérdőjel "vibráló" effekttel */}
          <g transform="translate(250, 40)">
             <circle r="22" fill="#FFD700" className="animate-pulse" />
             <text y="8" fill="#000" fontSize="24" fontWeight="900" textAnchor="middle">?</text>
          </g>
        </svg>
      </div>

      {/* Input Mező */}
      <div className="flex items-center gap-4 mt-6 bg-[#1a1a2e] p-4 rounded-3xl border border-white/10 shadow-2xl">
         <input
            type="text"
            inputMode="numeric"
            value={userInput}
            onChange={(e) => {
              const v = e.target.value.replace(/\D/g, '');
              setUserInput(v);
              onValueChange?.(v);
            }}
            className="w-24 text-center text-4xl font-black bg-transparent text-[#FFD700] caret-white outline-none"
            placeholder="?"
            autoFocus
          />
          <div className="h-10 w-[2px] bg-white/10" />
          <span className="text-white/60 font-bold text-lg uppercase tracking-widest">{T.unit[lang]}</span>
      </div>
    </div>
  );
};

export default TimelineDuration;
