"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VerbenVortexRound } from '@/lib/visualLab/languageTypes';

const DICTIONARY = {
  en: { score: 'Score', timeOut: 'Time Out!', correct: 'Correct!', wrong: 'Wrong!' },
  de: { score: 'Punkte', timeOut: 'Zeit abgelaufen!', correct: 'Richtig!', wrong: 'Falsch!' },
  hu: { score: 'Pont', timeOut: 'Lejárt az idő!', correct: 'Helyes!', wrong: 'Helytelen!' },
  ro: { score: 'Scor', timeOut: 'Timpul a expirat!', correct: 'Corect!', wrong: 'Greșit!' }
};

export interface VerbenVortexGameProps {
  grade: number;
  lang: 'de' | 'hu' | 'ro' | 'en';
  round: VerbenVortexRound;
  onDone?: (score: number) => void;
}

type RoundData = {
  pronoun?: string;
  options?: string[];
  correctAnswer?: string;
} & VerbenVortexRound;

export default function VerbenVortexGame({ grade, lang, round, onDone }: VerbenVortexGameProps) {
  const t = DICTIONARY[lang] || DICTIONARY['en'];
  
  const roundData = round as RoundData;
  const pronoun = roundData.pronoun || "ich";
  const options = roundData.options || ["bin", "bist", "ist", "sind"];
  const correctAnswer = roundData.correctAnswer || "bin";

  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost' | 'timeout'>('playing');
  const [timeLeft, setTimeLeft] = useState(15);
  const [selected, setSelected] = useState<string | null>(null);
  const [orbits, setOrbits] = useState<{ angle: number; radius: number; duration: number }[]>([]);

  useEffect(() => {
    const newOrbits = options.map((_, i) => {
      const baseAngle = (i * 360) / options.length;
      const radius = 120 + Math.random() * 30;
      const duration = 15 + Math.random() * 5;
      return { angle: baseAngle, radius, duration };
    });
    setOrbits(newOrbits);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.join(',')]);

  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameState('timeout');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState]);

  useEffect(() => {
    if (gameState === 'timeout') {
      const timer = setTimeout(() => onDone?.(0), 2000);
      return () => clearTimeout(timer);
    }
  }, [gameState, onDone]);

  const handleSelect = (option: string) => {
    if (gameState !== 'playing') return;
    setSelected(option);
    if (option === correctAnswer) {
      setGameState('won');
      setTimeout(() => onDone?.(100), 2000);
    } else {
      setGameState('lost');
      setTimeout(() => onDone?.(0), 2000);
    }
  };

  return (
    <div className="relative w-full h-full min-h-[400px] bg-slate-950 overflow-hidden flex items-center justify-center rounded-xl border border-cyan-900 shadow-[0_0_30px_rgba(0,255,255,0.15)] touch-none select-none">
      
      {/* Background Stars / Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950 via-slate-950 to-black" />
      
      {/* Vortex background effect */}
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-20 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-fuchsia-500 fill-current">
          <path d="M50 0 C77.6 0 100 22.4 100 50 C100 77.6 77.6 100 50 100 C22.4 100 0 77.6 0 50 C0 22.4 22.4 0 50 0 Z M50 10 C27.9 10 10 27.9 10 50 C10 72.1 27.9 90 50 90 C72.1 90 90 72.1 90 50 C90 27.9 72.1 10 50 10 Z" />
        </svg>
      </motion.div>

      {/* Timer Bar */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-48 md:w-64 h-2 bg-slate-800 rounded-full overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)]">
        <motion.div
          className="h-full bg-cyan-400"
          initial={{ width: '100%' }}
          animate={{ width: `${(timeLeft / 15) * 100}%` }}
          transition={{ duration: 1, ease: 'linear' }}
        />
      </div>

      {/* Center Vortex (Pronoun) */}
      <motion.div 
        className="absolute z-10 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full bg-slate-900/80 backdrop-blur-md border border-fuchsia-500 shadow-[0_0_40px_rgba(217,70,239,0.5)]"
        animate={{
          scale: gameState === 'timeout' || gameState === 'lost' ? [1, 1.3, 0] : 1,
        }}
        transition={{
          scale: { duration: 0.8, ease: "easeInOut" },
        }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 border-dashed animate-[spin_12s_linear_infinite]" />
        <span className="text-2xl md:text-4xl font-black text-white z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {pronoun}
        </span>
      </motion.div>

      {/* Orbiting Verbs */}
      <AnimatePresence>
        {orbits.length > 0 && options.map((option, i) => {
          const orbit = orbits[i];
          const isSelected = selected === option;
          const isCorrect = option === correctAnswer;
          
          return (
            <motion.div
              key={option}
              className="absolute z-20 flex items-center justify-center pointer-events-none"
              initial={{ rotate: orbit.angle }}
              animate={
                gameState === 'playing'
                  ? { rotate: orbit.angle + 360 }
                  : { rotate: orbit.angle }
              }
              transition={
                gameState === 'playing'
                  ? { duration: orbit.duration, repeat: Infinity, ease: "linear" }
                  : { duration: 0.5, type: "spring" }
              }
            >
              <motion.div
                initial={{ x: orbit.radius, scale: 0, opacity: 0 }}
                animate={
                  gameState === 'playing'
                    ? { x: orbit.radius, scale: 1, opacity: 1 }
                    : (gameState === 'won' && isCorrect) || (gameState === 'lost' && isSelected)
                    ? { x: 0, scale: 1.5, opacity: 1, zIndex: 30 }
                    : { x: 0, scale: 0, opacity: 0 }
                }
                transition={{ duration: 0.8, type: 'spring' }}
              >
                <motion.div
                  initial={{ rotate: -orbit.angle }}
                  animate={
                    gameState === 'playing'
                      ? { rotate: -(orbit.angle + 360) }
                      : { rotate: -orbit.angle }
                  }
                  transition={
                    gameState === 'playing'
                      ? { duration: orbit.duration, repeat: Infinity, ease: "linear" }
                      : { duration: 0.5, type: "spring" }
                  }
                >
                  <button
                    onPointerDown={() => handleSelect(option)}
                    disabled={gameState !== 'playing'}
                    className={`pointer-events-auto px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-lg md:text-xl backdrop-blur-md transition-all border-2 whitespace-nowrap outline-none
                      ${gameState !== 'playing' && isSelected && isCorrect ? 'bg-green-500/90 border-green-400 text-white shadow-[0_0_30px_rgba(34,197,94,0.8)]' : ''}
                      ${gameState !== 'playing' && isSelected && !isCorrect ? 'bg-red-500/90 border-red-400 text-white shadow-[0_0_30px_rgba(239,68,68,0.8)]' : ''}
                      ${gameState === 'playing' ? 'bg-slate-800/80 border-cyan-500/60 text-cyan-50 hover:bg-cyan-700 hover:border-cyan-300 hover:scale-110 shadow-[0_0_20px_rgba(34,211,238,0.4)] cursor-crosshair' : 'cursor-default'}
                      ${gameState !== 'playing' && !isSelected && !isCorrect ? 'bg-slate-800/80 border-cyan-500/60 text-cyan-50' : ''}
                    `}
                  >
                    {option}
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Result Message Overlay */}
      <AnimatePresence>
        {gameState !== 'playing' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute bottom-12 z-40 px-6 py-3 md:px-8 md:py-4 rounded-2xl bg-slate-900/95 border border-slate-700 backdrop-blur-xl shadow-2xl"
          >
            <h2 className={`text-xl md:text-3xl font-black uppercase tracking-widest ${gameState === 'won' ? 'text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]' : 'text-red-400 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]'}`}>
              {gameState === 'won' ? t.correct : gameState === 'timeout' ? t.timeOut : t.wrong}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Visual SVG Elements for 'Space/Neon' theme */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <circle cx="50%" cy="50%" r="150" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-500" strokeDasharray="4 8" />
        <circle cx="50%" cy="50%" r="200" fill="none" stroke="currentColor" strokeWidth="1" className="text-fuchsia-500" strokeDasharray="2 12" />
      </svg>
    </div>
  );
}
