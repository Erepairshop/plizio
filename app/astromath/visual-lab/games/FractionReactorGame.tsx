"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DragAndDropContainer, DragItem, DropZone } from '@/components/interactive/DragAndDropContainer';
import LocalizedText, { LocalizedTextObject, Language } from '@/components/i18n/LocalizedText';

interface Props {
  grade: number;
  lang: Language;
  onDone?: (score: number) => void;
}

type Fraction = { num: number; den: number };

const DICT = {
  en: {
    title: "Fraction Reactor",
    score: "Score",
    lives: "Integrity",
    target: "Target Matrix",
    gameOver: "System Failure",
    won: "Reactor Stabilized",
    playAgain: "Restart Reactor",
    start: "Engage Reactor",
    exit: "Abort Mission",
    tryAgain: "Incorrect Frequency!",
    correct: "Match Detected!",
    core: "Reactor Core"
  },
  hu: {
    title: "Tört Reaktor",
    score: "Pont",
    lives: "Integritás",
    target: "Cél Mátrix",
    gameOver: "Rendszerhiba",
    won: "Reaktor Stabilizálva",
    playAgain: "Újraindítás",
    start: "Reaktor Indítása",
    exit: "Küldetés Megszakítása",
    tryAgain: "Hibás Frekvencia!",
    correct: "Egyezés Észlelve!",
    core: "Reaktormag"
  },
  de: {
    title: "Bruchreaktor",
    score: "Punkte",
    lives: "Integrität",
    target: "Zielmatrix",
    gameOver: "Systemfehler",
    won: "Reaktor Stabilisiert",
    playAgain: "Neustart",
    start: "Reaktor Starten",
    exit: "Mission Abbrechen",
    tryAgain: "Falsche Frequenz!",
    correct: "Übereinstimmung!",
    core: "Reaktorkern"
  },
  ro: {
    title: "Reactorul de Fracții",
    score: "Scor",
    lives: "Integritate",
    target: "Matrice Țintă",
    gameOver: "Eroare de Sistem",
    won: "Reactor Stabilizat",
    playAgain: "Repornire",
    start: "Activare Reactor",
    exit: "Abandonare Misiune",
    tryAgain: "Frecvență Incorectă!",
    correct: "Potrivire Detectată!",
    core: "Miezul reactorului"
  }
};

const generateFraction = (grade: number): Fraction => {
  let maxDen = 4;
  if (grade >= 3) maxDen = 8;
  if (grade >= 5) maxDen = 12;
  
  const den = Math.floor(Math.random() * (maxDen - 1)) + 2; 
  const num = Math.floor(Math.random() * (den - 1)) + 1; 
  return { num, den };
};

const areEquivalent = (f1: Fraction, f2: Fraction) => f1.num * f2.den === f2.num * f1.den;

const PieFraction = ({ num, den, size = 60 }: { num: number; den: number; size?: number }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const fillLength = (num / den) * circumference;
  
  const lines = Array.from({ length: den }).map((_, i) => {
    const angle = (i / den) * 360;
    return <line key={i} x1="50" y1="50" x2="50" y2="0" stroke="#0f172a" strokeWidth="2" transform={`rotate(${angle} 50 50)`} />
  });

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
      <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#1e293b" strokeWidth="48" />
      <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#38bdf8" strokeWidth="48" strokeDasharray={`${fillLength} ${circumference}`} transform="rotate(-90 50 50)" />
      {lines}
      <circle cx="50" cy="50" r={49} fill="transparent" stroke="#bae6fd" strokeWidth="2" />
    </svg>
  );
};

const BarFraction = ({ num, den, size = 60 }: { num: number; den: number; size?: number }) => {
  const width = 60;
  const height = 80;
  const blockHeight = height / den;

  return (
    <svg width={size} height={size * 1.33} viewBox="0 0 100 100" className="drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
      <rect x="20" y="10" width={width} height={height} fill="#1e293b" stroke="#6ee7b7" strokeWidth="2" rx="4" />
      <rect x="20" y={10 + height - (num * blockHeight)} width={width} height={num * blockHeight} fill="#34d399" rx="2" />
      {Array.from({ length: den - 1 }).map((_, i) => (
        <line key={i} x1="20" y1={10 + (i + 1) * blockHeight} x2="80" y2={10 + (i + 1) * blockHeight} stroke="#0f172a" strokeWidth="2" />
      ))}
    </svg>
  );
};

export default function FractionReactorGame({ grade, lang, onDone }: Props) {
  const [status, setStatus] = useState<'start' | 'playing' | 'gameover' | 'won'>('start');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [target, setTarget] = useState<Fraction>({ num: 1, den: 2 });
  const [options, setOptions] = useState<{ fraction: Fraction; type: 'pie' | 'bar'; id: string }[]>([]);
  const [round, setRound] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrectDrop, setIsCorrectDrop] = useState<boolean | null>(null);

  const T = DICT[lang] || DICT['en'];
  const maxRounds = grade <= 5 ? 5 : 5 + (grade - 5);

  const generateOptions = useCallback((targetFraction: Fraction) => {
    const newOptions: { fraction: Fraction; type: 'pie' | 'bar'; id: string }[] = [];
    
    // Correct one (or equivalent)
    const multiplier = Math.floor(Math.random() * (Math.floor(12 / targetFraction.den) || 1)) + 1;
    newOptions.push({
      fraction: { num: targetFraction.num * multiplier, den: targetFraction.den * multiplier },
      type: Math.random() > 0.5 ? 'pie' : 'bar',
      id: Math.random().toString(36).substr(2, 9)
    });

    // Incorrect ones
    while (newOptions.length < 4) {
      const f = generateFraction(grade);
      if (!areEquivalent(f, targetFraction) && !newOptions.some(o => areEquivalent(o.fraction, f))) {
        newOptions.push({
          fraction: f,
          type: Math.random() > 0.5 ? 'pie' : 'bar',
          id: Math.random().toString(36).substr(2, 9)
        });
      }
    }

    return newOptions.sort(() => Math.random() - 0.5);
  }, [grade]);

  const startRound = useCallback((currentRound: number) => {
    if (currentRound >= maxRounds) {
      setStatus('won');
      return;
    }
    const newTarget = generateFraction(grade);
    setTarget(newTarget);
    setOptions(generateOptions(newTarget));
    setFeedback(null);
    setIsCorrectDrop(null);
  }, [grade, maxRounds, generateOptions]);

  const startGame = () => {
    setScore(0);
    setLives(3);
    setRound(0);
    setStatus('playing');
    startRound(0);
  };

  const handleDrop = (item: DragItem<Fraction>, zone: DropZone) => {
    if (isCorrectDrop !== null) return;

    if (areEquivalent(item.data!, target)) {
      setScore(s => s + 10);
      setIsCorrectDrop(true);
      setFeedback(T.correct);
      setTimeout(() => {
        const nextRound = round + 1;
        setRound(nextRound);
        startRound(nextRound);
      }, 1500);
    } else {
      setIsCorrectDrop(false);
      setFeedback(T.tryAgain);
      setLives(l => {
        const next = l - 1;
        if (next <= 0) {
          setTimeout(() => setStatus('gameover'), 1000);
        }
        return next;
      });
      setTimeout(() => {
        setIsCorrectDrop(null);
        setFeedback(null);
      }, 1500);
    }
  };

  const dragItems: DragItem<Fraction>[] = options.map(opt => ({
    id: opt.id,
    label: `${opt.fraction.num}/${opt.fraction.den}`,
    data: opt.fraction
  }));

  const dropZones: DropZone[] = [{
    id: 'reactor-core',
    label: T.core
  }];

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[calc(100dvh-2rem)] min-h-[520px] max-h-[650px] bg-slate-950 overflow-hidden border-2 border-slate-800 rounded-2xl shadow-2xl font-sans select-none">
      {/* Background stars */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="absolute bg-white rounded-full" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            opacity: Math.random() * 0.5 + 0.1
          }} />
        ))}
      </div>

      {/* Header UI */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10 bg-gradient-to-b from-slate-900/90 to-transparent">
        <div className="flex flex-col">
          <span className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">{T.score}</span>
          <span className="text-3xl font-black text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">{score}</span>
        </div>

        <div className="flex flex-col items-center bg-slate-900/80 px-3 sm:px-8 py-2 rounded-xl border border-slate-700/50 shadow-lg backdrop-blur-sm">
          <span className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-2">{T.target}</span>
          <div className="flex flex-col items-center leading-none text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            <span>{target.num}</span>
            <span className="w-10 border-b-4 border-slate-500 my-1 rounded-full"></span>
            <span>{target.den}</span>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">{T.lives}</span>
          <div className="flex gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={`w-6 h-6 rounded-full border-2 transition-colors duration-300 ${i < lives ? 'bg-rose-500 border-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.8)]' : 'bg-slate-800 border-slate-700'}`} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {status === 'start' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] text-center px-4">
              {T.title}
            </h1>
            <button onClick={startGame} className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-black rounded-full text-xl uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] active:scale-95 mb-4">
              {T.start}
            </button>
            {onDone && (
              <button onClick={() => onDone(score)} className="text-slate-400 hover:text-white uppercase text-sm tracking-wider font-bold mt-4 transition-colors">
                {T.exit}
              </button>
            )}
          </motion.div>
        )}

        {status === 'won' && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center z-50">
            <h2 className="text-3xl sm:text-5xl font-black mb-2 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.6)] uppercase tracking-widest text-center">
              {T.won}
            </h2>
            <p className="text-2xl text-slate-300 font-bold mb-10">{T.score}: <span className="text-cyan-400">{score}</span></p>
            <button onClick={startGame} className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-black rounded-full text-xl uppercase tracking-wider transition-all hover:scale-105 active:scale-95 mb-4">
              {T.playAgain}
            </button>
            {onDone && (
              <button onClick={() => onDone(score)} className="text-slate-400 hover:text-white uppercase text-sm tracking-wider font-bold mt-4 transition-colors">
                {T.exit}
              </button>
            )}
          </motion.div>
        )}

        {status === 'gameover' && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center z-50">
            <h2 className="text-3xl sm:text-5xl font-black mb-2 text-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.6)] uppercase tracking-widest text-center">
              {T.gameOver}
            </h2>
            <p className="text-2xl text-slate-300 font-bold mb-10">{T.score}: <span className="text-cyan-400">{score}</span></p>

            <button onClick={startGame} className="px-10 py-4 bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-500 hover:to-orange-500 text-white font-black rounded-full text-xl uppercase tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(244,63,94,0.6)] active:scale-95 mb-4">
              {T.playAgain}
            </button>
            {onDone && (
              <button onClick={() => onDone(score)} className="text-slate-400 hover:text-white uppercase text-sm tracking-wider font-bold mt-4 transition-colors">
                {T.exit}
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {status === 'playing' && (
        <div className="w-full h-full pt-28 sm:pt-32 flex flex-col items-center justify-between pb-6 sm:pb-12 px-2 sm:px-4">
          <DragAndDropContainer
            items={isCorrectDrop ? [] : dragItems}
            zones={dropZones}
            onDrop={handleDrop}
            className="w-full flex-1 flex flex-col items-center justify-between"
            renderItem={(item) => {
              const opt = options.find(o => o.id === item.id);
              if (!opt) return null;
              return (
                <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-700/50 backdrop-blur-sm cursor-grab active:cursor-grabbing hover:border-cyan-500/50 transition-colors group">
                  {opt.type === 'pie' ? (
                    <PieFraction num={opt.fraction.num} den={opt.fraction.den} size={80} />
                  ) : (
                    <BarFraction num={opt.fraction.num} den={opt.fraction.den} size={80} />
                  )}
                  <div className="mt-2 text-center text-cyan-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {opt.fraction.num}/{opt.fraction.den}
                  </div>
                </div>
              );
            }}
            renderZone={(zone, droppedItems, isHovering) => {
              const ringColor = isCorrectDrop === true ? 'border-emerald-500' : isCorrectDrop === false ? 'border-rose-500' : isHovering ? 'border-cyan-400' : 'border-slate-700';
              const glowColor = isCorrectDrop === true ? 'shadow-[0_0_30px_rgba(16,185,129,0.5)]' : isCorrectDrop === false ? 'shadow-[0_0_30px_rgba(244,63,94,0.5)]' : isHovering ? 'shadow-[0_0_20px_rgba(34,211,238,0.3)]' : '';

              return (
                <div className="relative flex flex-col items-center">
                  <div className={`w-36 h-36 sm:w-48 sm:h-48 rounded-full border-4 flex items-center justify-center bg-slate-900/80 transition-all duration-300 ${ringColor} ${glowColor} relative overflow-hidden`}>
                    {/* Inner core animation */}
                    <motion.div 
                      animate={{ 
                        scale: isHovering ? 1.2 : 1,
                        rotate: 360,
                        opacity: isCorrectDrop === false ? 0.2 : 1
                      }}
                      transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" } }}
                      className={`absolute inset-4 rounded-full border-2 border-dashed ${isCorrectDrop === true ? 'border-emerald-500' : 'border-cyan-500/30'}`}
                    />
                    
                    <div className="z-10 flex flex-col items-center">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center animate-pulse">
                        <div className={`w-6 h-6 rounded-full ${isCorrectDrop === true ? 'bg-emerald-500' : isCorrectDrop === false ? 'bg-rose-500' : 'bg-cyan-500'}`} />
                      </div>
                    </div>

                    {/* Feedback Text */}
                    <AnimatePresence>
                      {feedback && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          exit={{ opacity: 0, y: -20 }}
                          className={`absolute -top-12 font-black text-xl whitespace-nowrap ${isCorrectDrop === true ? 'text-emerald-400' : 'text-rose-400'}`}
                        >
                          {feedback}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Round Progress */}
                  <div className="mt-6 flex gap-2">
                    {Array.from({ length: maxRounds }).map((_, i) => (
                      <div key={i} className={`h-2 w-8 rounded-full transition-colors duration-500 ${i < round ? 'bg-emerald-500' : i === round ? 'bg-cyan-500 animate-pulse' : 'bg-slate-800'}`} />
                    ))}
                  </div>
                </div>
              );
            }}
          />
        </div>
      )}
    </div>
  );
}
