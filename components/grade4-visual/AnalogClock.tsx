'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';
import { playSelect } from '@/lib/soundEffects';

interface Props {
  startHour: number;
  endHour: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (val: string) => void;
}

const T = {
  hu: { instruction: 'Hány óra telt el?', unit: 'óra' },
  de: { instruction: 'Zeitdauer?', unit: 'Std.' },
  en: { instruction: 'How many hours?', unit: 'hrs' },
  ro: { instruction: 'Cât timp?', unit: 'ore' },
};

const TimelineDurationHD: React.FC<Props> = ({ 
  startHour, endHour, language = 'hu', embedded = false, onValueChange 
}) => {
  const [val, setVal] = useState<string>('');
  const t = T[language] || T.en;
  const duration = endHour - startHour;

  // A 4. osztályos óra színei és stílusa (Violet/Slate)
  const HDClock = ({ hr, color, label }: { hr: number, color: string, label: string }) => {
    const rotH = (hr % 12) * 30;
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-24 h-24 rounded-full bg-white border-[6px] shadow-lg flex items-center justify-center" style={{ borderColor: color }}>
          {/* Óra jelzések mint a 4. osztályosnál */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="absolute w-0.5 h-2.5 bg-slate-300 origin-bottom" style={{ bottom: '50%', rotate: `${i * 30}deg` }} />
          ))}
          {/* Mutatók - ugyanaz a vastagság mint az AnalogClock-ban */}
          <motion.div 
            className="absolute w-1.5 h-8 bg-slate-800 rounded-full origin-bottom z-10"
            style={{ bottom: '50%' }}
            initial={{ rotate: 0 }}
            animate={{ rotate: rotH }}
            transition={{ type: "spring", stiffness: 60, damping: 12 }}
          />
          <div className="absolute w-0.5 h-10 bg-slate-400 rounded-full origin-bottom" style={{ bottom: '50%', rotate: '0deg' }} />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800 z-20 shadow-md" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-black text-slate-800 tracking-tight">{hr}:00</span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
        </div>
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full overflow-hidden ${embedded ? '' : 'rounded-2xl shadow-xl'}`}
      style={{ background: embedded ? 'transparent' : 'linear-gradient(135deg, #faf5ff 0%, #f5f3ff 50%, #ede9fe 100%)' }}
    >
      {/* Header - Ugyanaz a lila ikon és stílus mint a 4. osztályosnál */}
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-violet-500 flex items-center justify-center">
              <Clock size={18} className="text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.instruction}</h3>
          </div>
        </div>
      )}

      <div className={`flex flex-col items-center ${embedded ? 'p-2' : 'px-5 pb-8'}`}>
        <div className="relative w-full h-44 flex items-center justify-center">
          <svg viewBox="0 0 500 180" className="w-full h-full overflow-visible">
            {/* Idővonal sáv - Slate színekben */}
            <line x1="80" y1="130" x2="420" y2="130" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
            
            {/* Animált Ív - Arany/Sárga mint a munkafüzetekben */}
            <motion.path 
              d="M 80 110 Q 250 -10 420 110" 
              fill="none" 
              stroke="#fbbf24" 
              strokeWidth="5" 
              strokeDasharray="10 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Kérdőjel kör - Violet/Lila háttérrel az összhangért */}
            <g transform="translate(228, 15)">
              <circle cx="22" cy="22" r="24" fill="#8b5cf6" />
              <text x="22" y="32" fill="white" fontSize="26" fontWeight="900" textAnchor="middle">?</text>
            </g>

            {/* Órák foreignObject-el a precíz HTML/Tailwind elhelyezésért */}
            <foreignObject x="20" y="50" width="120" height="130">
              <HDClock hr={startHour} color="#dc2626" label="Start" />
            </foreignObject>
            <foreignObject x="360" y="50" width="120" height="130">
              <HDClock hr={endHour} color="#2563eb" label="Stop" />
            </foreignObject>
          </svg>
        </div>

        {/* Input Szekció - Pixelpontosan a 4. osztályos gombok stílusában */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{t.unit}</p>
          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              value={val}
              onChange={(e) => {
                const clean = e.target.value.replace(/\D/g, '');
                setVal(clean);
                onValueChange?.(clean);
                playSelect();
              }}
              className="w-28 h-20 text-center text-4xl font-black rounded-2xl bg-white border-2 border-slate-200 text-violet-700 shadow-sm focus:border-violet-500 focus:ring-4 focus:ring-violet-100 outline-none transition-all"
              placeholder="?"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineDurationHD;
