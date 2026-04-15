import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SatzbauSniperRound } from '@/lib/visualLab/languageTypes';

interface FloatingWord {
  id: number;
  text: string;
  waypoints: { x: string[]; y: string[] };
  duration: number;
  initialX: string;
  initialY: string;
}

const T = {
  de: {
    title: 'Satzbau Sniper',
    instruction: 'Tippe die Wörter in der richtigen Reihenfolge an!',
    score: 'Punkte',
    finish: 'Mission Erfüllt!',
    awaiting: '[ ZIELE AUSSTEHEND ]',
  },
  en: {
    title: 'Sentence Sniper',
    instruction: 'Tap the words in the correct grammatical order!',
    score: 'Score',
    finish: 'Mission Accomplished!',
    awaiting: '[ AWAITING TARGETS ]',
  },
  hu: {
    title: 'Mondat Mesterlövész',
    instruction: 'Koppints a szavakra a helyes sorrendben!',
    score: 'Pontszám',
    finish: 'Küldetés Teljesítve!',
    awaiting: '[ CÉLPONTOKRA VÁRVA ]',
  },
  ro: {
    title: 'Lunetist de Propoziții',
    instruction: 'Atinge cuvintele în ordinea corectă!',
    score: 'Scor',
    finish: 'Misiune Îndeplinită!',
    awaiting: '[ AȘTEPTARE ȚINTE ]',
  }
};

export default function SatzbauSniperGame({ grade, lang, round, onDone }: {
  grade: number;
  lang: 'de' | 'hu' | 'ro' | 'en';
  round: SatzbauSniperRound;
  onDone?: (score: number) => void;
}) {
  const correctSequence: string[] = useMemo(() => {
    // Attempt to extract words from round, fallback to a default sentence if unknown structure
    const fallback = ['Das', 'ist', 'ein', 'geheimer', 'Test'];
    return (round as any)?.words || (round as any)?.sentence?.split(' ') || fallback;
  }, [round]);
  
  const [scrambled, setScrambled] = useState<FloatingWord[]>([]);
  const [selected, setSelected] = useState<{ id: number; text: string }[]>([]);
  const [errorIndex, setErrorIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!correctSequence || correctSequence.length === 0) return;
    
    const words = [...correctSequence];
    // Fisher-Yates shuffle
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }

    const initWords = words.map((w, i) => {
      const wpX: string[] = [];
      const wpY: string[] = [];
      const steps = 6;
      for (let j = 0; j < steps; j++) {
        wpX.push(`${10 + Math.random() * 75}%`);
        wpY.push(`${10 + Math.random() * 65}%`);
      }
      // Return to start for smooth loop
      wpX.push(wpX[0]);
      wpY.push(wpY[0]);

      return { 
        id: i, 
        text: w, 
        waypoints: { x: wpX, y: wpY },
        duration: 25 + Math.random() * 20,
        initialX: wpX[0],
        initialY: wpY[0],
      };
    });
    setScrambled(initWords);
    setSelected([]);
    setErrorIndex(null);
  }, [correctSequence]);

  const handleWordTap = (word: FloatingWord) => {
    const nextExpectedIndex = selected.length;
    if (nextExpectedIndex >= correctSequence.length) return;

    if (word.text === correctSequence[nextExpectedIndex]) {
      // Correct Match
      setScore(s => s + 10);
      setSelected(prev => [...prev, { id: word.id, text: word.text }]);
      setScrambled(prev => prev.filter(w => w.id !== word.id));
      setErrorIndex(null);

      if (nextExpectedIndex + 1 === correctSequence.length) {
        setTimeout(() => {
          onDone?.(score + 10 + 50);
        }, 2000);
      }
    } else {
      // Wrong Match
      setScore(s => Math.max(0, s - 5));
      setErrorIndex(word.id);
      setTimeout(() => setErrorIndex(null), 800);
    }
  };

  const t = T[lang] || T.en;

  return (
    <div className="relative w-full h-full min-h-[600px] bg-slate-950 overflow-hidden flex flex-col font-sans text-white border border-fuchsia-500/30 rounded-2xl shadow-[0_0_40px_rgba(217,70,239,0.15)]">
       {/* Deep Space Background Grid & Glows */}
       <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/40 via-slate-950 to-slate-950" />
       <div className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'linear-gradient(to right, #4a044e 1px, transparent 1px), linear-gradient(to bottom, #4a044e 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
            
       {/* Header HUD */}
       <div className="relative z-10 flex justify-between items-center p-5 bg-slate-900/80 backdrop-blur-md border-b border-fuchsia-500/40 shadow-lg">
         <div className="flex items-center gap-3">
           <svg className="w-8 h-8 text-fuchsia-400 animate-spin" style={{ animationDuration: '4s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor">
             <circle cx="12" cy="12" r="10" strokeWidth="1.5" strokeDasharray="4 4" />
             <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
             <path d="M12 2L12 12" strokeWidth="1.5" strokeLinecap="round" />
           </svg>
           <h2 className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.6)] uppercase">
             {t.title}
           </h2>
         </div>
         <div className="flex flex-col items-end">
           <span className="text-xs text-cyan-300/80 uppercase tracking-widest mb-1.5 font-semibold">{t.instruction}</span>
           <div className="px-5 py-1.5 bg-slate-950 rounded-full border border-cyan-500/50 text-cyan-300 font-mono font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]">
             {t.score}: <span className="text-white">{score.toString().padStart(4, '0')}</span>
           </div>
         </div>
       </div>

       {/* Targeting Area (Floating Words) */}
       <div className="relative flex-1 overflow-hidden">
          <AnimatePresence>
            {scrambled.map((w, idx) => (
              <motion.button
                key={w.id}
                onClick={() => handleWordTap(w)}
                initial={{ 
                  scale: 0, 
                  opacity: 0,
                  left: w.initialX,
                  top: w.initialY,
                  x: '-50%',
                  y: '-50%'
                }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  left: w.waypoints.x,
                  top: w.waypoints.y,
                }}
                exit={{ scale: 1.5, opacity: 0, filter: 'blur(10px)', transition: { duration: 0.4 } }}
                transition={{ 
                  left: { repeat: Infinity, duration: w.duration, ease: "linear" },
                  top: { repeat: Infinity, duration: w.duration * 1.1, ease: "linear" },
                  scale: { duration: 0.5, type: 'spring', delay: idx * 0.1 },
                  opacity: { duration: 0.4, delay: idx * 0.1 }
                }}
                className={`absolute group flex items-center justify-center px-6 py-3 rounded font-bold text-xl cursor-crosshair backdrop-blur-sm transition-all duration-300 outline-none ${
                  errorIndex === w.id 
                    ? 'bg-rose-950/80 border-rose-500 text-rose-200 shadow-[0_0_30px_rgba(244,63,94,0.8)] z-20 scale-110' 
                    : 'bg-slate-900/70 border-cyan-500/50 text-cyan-50 hover:bg-cyan-950 hover:border-cyan-300 hover:text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] z-10'
                }`}
                style={{
                  borderWidth: '1px',
                  textShadow: '0 2px 5px rgba(0,0,0,0.8)'
                }}
              >
                {/* SVG Targeting Brackets */}
                <svg className={`absolute inset-0 w-full h-full pointer-events-none transition-all duration-500 opacity-40 ${errorIndex === w.id ? 'text-rose-500 scale-125 opacity-100' : 'text-cyan-400 group-hover:opacity-100 group-hover:scale-[1.15]'}`} viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path vectorEffect="non-scaling-stroke" d="M0,15 L0,0 L15,0" stroke="currentColor" fill="none" strokeWidth="2" />
                  <path vectorEffect="non-scaling-stroke" d="M85,0 L100,0 L100,15" stroke="currentColor" fill="none" strokeWidth="2" />
                  <path vectorEffect="non-scaling-stroke" d="M100,85 L100,100 L85,100" stroke="currentColor" fill="none" strokeWidth="2" />
                  <path vectorEffect="non-scaling-stroke" d="M15,100 L0,100 L0,85" stroke="currentColor" fill="none" strokeWidth="2" />
                  
                  {/* Crosshair accents on hover */}
                  <path vectorEffect="non-scaling-stroke" d="M50,-5 L50,5 M-5,50 L5,50 M50,105 L50,95 M105,50 L95,50" stroke="currentColor" fill="none" strokeWidth="1" className="opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
                </svg>

                {errorIndex === w.id && (
                  <motion.div 
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 border-2 border-rose-500 rounded pointer-events-none"
                  />
                )}
                
                <span className="relative z-10">{w.text}</span>
              </motion.button>
            ))}
          </AnimatePresence>
       </div>

       {/* Constructor Area (Formed Sentence) */}
       <div className="relative z-10 min-h-[180px] p-6 bg-slate-950/95 border-t-2 border-fuchsia-500/40 flex flex-col items-center justify-center gap-6 shadow-[0_-15px_40px_rgba(0,0,0,0.6)]">
         <div className="flex flex-wrap gap-4 justify-center min-w-[320px] min-h-[72px] p-5 bg-slate-900 rounded-xl border border-slate-800 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] w-full max-w-5xl">
           <AnimatePresence mode="popLayout">
             {selected.map((w, i) => (
               <motion.div
                 key={`sel-${w.id}-${i}`}
                 layout
                 initial={{ opacity: 0, scale: 0.5, y: -40, rotate: -10 }}
                 animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 className="px-6 py-3 bg-gradient-to-br from-cyan-600 to-blue-800 rounded-lg font-bold text-white shadow-[0_5px_20px_rgba(6,182,212,0.5)] border border-cyan-400/50 text-2xl tracking-wide"
               >
                 {w.text}
               </motion.div>
             ))}
           </AnimatePresence>
           
           {selected.length === 0 && (
             <div className="flex items-center justify-center w-full opacity-40">
               <span className="font-mono tracking-widest text-slate-400 uppercase text-sm animate-pulse">
                 {t.awaiting}
               </span>
             </div>
           )}
         </div>
         
         {/* Success Message */}
         <AnimatePresence>
           {selected.length === correctSequence.length && correctSequence.length > 0 && (
             <motion.div
               initial={{ opacity: 0, y: 20, scale: 0.8 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               className="flex items-center gap-4 text-fuchsia-400 font-black text-3xl tracking-widest uppercase drop-shadow-[0_0_15px_rgba(217,70,239,0.9)]"
             >
               <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                 <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                 <path d="M22 4L12 14.01l-3-3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
               {t.finish} <span className="text-cyan-400 ml-2 drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]">+50 {t.score}!</span>
             </motion.div>
           )}
         </AnimatePresence>
       </div>
    </div>
  );
}
