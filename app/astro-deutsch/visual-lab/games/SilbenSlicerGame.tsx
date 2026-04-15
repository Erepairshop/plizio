"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SilbenSlicerRound } from '@/lib/visualLab/languageTypes';

interface Props {
  grade: number;
  lang: 'de' | 'hu' | 'ro' | 'en';
  round: SilbenSlicerRound;
  onDone?: (score: number) => void;
}

const T = {
  de: {
    title: "Silben Slicer",
    instruction: "Zerschneide die Wörter in ihre Silben!",
    score: "Punkte",
    gameOver: "Spiel Beendet!",
    combo: "Kombo!",
    continue: "Weiter"
  },
  hu: {
    title: "Szótag Szeletelő",
    instruction: "Vágd szét a szavakat szótagokra!",
    score: "Pontszám",
    gameOver: "Játék Vége!",
    combo: "Kombó!",
    continue: "Tovább"
  },
  ro: {
    title: "Tăietor de Silabe",
    instruction: "Taie cuvintele în silabe!",
    score: "Scor",
    gameOver: "Joc Terminat!",
    combo: "Combo!",
    continue: "Continuă"
  },
  en: {
    title: "Syllable Slicer",
    instruction: "Slice the words into syllables!",
    score: "Score",
    gameOver: "Game Over!",
    combo: "Combo!",
    continue: "Continue"
  }
};

interface FlyingWord {
  id: string;
  text: string;
  splitIndex: number;
  startX: number;
  duration: number;
  sliced: boolean;
  failed: boolean;
}

const WordEntity = ({ 
  word, 
  onSlice, 
  onRemove 
}: { 
  word: FlyingWord; 
  onSlice: (id: string, index: number) => void; 
  onRemove: () => void; 
}) => {
  useEffect(() => {
    if (word.sliced || word.failed) {
      const timer = setTimeout(() => {
        onRemove();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [word.sliced, word.failed, onRemove]);

  if (word.sliced) {
    return (
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ left: `${word.startX}%`, top: '40%', rotate: 0 }}
          animate={{ left: `${word.startX - 10}%`, top: '100%', rotate: -45, opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute text-5xl md:text-6xl font-black text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]"
          style={{ transform: 'translateX(-50%)' }}
        >
          {word.text.slice(0, word.splitIndex)}
        </motion.div>
        <motion.div
          initial={{ left: `${word.startX}%`, top: '40%', rotate: 0 }}
          animate={{ left: `${word.startX + 10}%`, top: '100%', rotate: 45, opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute text-5xl md:text-6xl font-black text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]"
          style={{ transform: 'translateX(-50%)' }}
        >
          {word.text.slice(word.splitIndex)}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ top: '100%', left: `${word.startX}%`, rotate: -15 }}
      animate={{ 
        top: word.failed ? '100%' : ['100%', '15%', '100%'], 
        left: `${word.startX}%`,
        rotate: word.failed ? 45 : [-15, 0, 15]
      }}
      transition={{ duration: word.failed ? 1 : word.duration, ease: "linear" }}
      onAnimationComplete={() => {
        if (!word.sliced && !word.failed) {
          onRemove();
        }
      }}
      className={`absolute text-5xl md:text-6xl font-black tracking-widest flex items-center
        ${word.failed ? 'text-red-500' : 'text-white'}`}
      style={{
         textShadow: word.failed ? '0 0 20px rgba(239,68,68,0.8)' : '0 0 15px rgba(6,182,212,0.8)',
         transform: 'translateX(-50%)' 
      }}
    >
      {word.text.split('').map((char, i) => (
        <React.Fragment key={`${word.id}-char-${i}`}>
          {i > 0 && !word.failed && (
            <div 
              data-gap-id={word.id} 
              data-gap-index={i} 
              className="w-12 h-20 -mx-6 bg-transparent z-10 cursor-crosshair pointer-events-auto"
            />
          )}
          <span className="select-none pointer-events-none">{char}</span>
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default function SilbenSlicerGame({ grade, lang, round, onDone }: Props) {
  const t = T[lang] || T.en;
  
  const [score, setScore] = useState(0);
  const [activeWords, setActiveWords] = useState<FlyingWord[]>([]);
  const [gameOver, setGameOver] = useState(false);
  
  const [slicePath, setSlicePath] = useState<{x: number, y: number}[]>([]);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const spawnedCount = useRef(0);
  const maxWords = 15;

  // Trail effect decay
  useEffect(() => {
    const interval = setInterval(() => {
      setSlicePath(prev => {
        if (prev.length > 0) return prev.slice(1);
        return prev;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Game loop
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      if (spawnedCount.current >= maxWords) {
        clearInterval(interval);
        return;
      }
      
      const sourceWords = (round as any)?.words || [
        { word: "Katze", splitIndex: 3 },
        { word: "Auto", splitIndex: 2 },
        { word: "Apfel", splitIndex: 2 },
        { word: "Banane", splitIndex: 2 },
        { word: "Schule", splitIndex: 4 },
      ];
      
      const splittableWords = sourceWords.filter((w: any) => w.splitIndex > 0 && w.splitIndex < w.word.length);
      const pool = splittableWords.length > 0 ? splittableWords : [{ word: "Katze", splitIndex: 3 }];
      
      const randomWord = pool[Math.floor(Math.random() * pool.length)];
      
      const newWord: FlyingWord = {
        id: Math.random().toString(36).substr(2, 9),
        text: randomWord.word,
        splitIndex: randomWord.splitIndex,
        startX: 20 + Math.random() * 60, // 20% to 80%
        duration: 3 + Math.random() * 2, // 3 to 5 seconds
        sliced: false,
        failed: false,
      };
      
      setActiveWords(prev => [...prev, newWord]);
      spawnedCount.current++;
    }, 1500);

    return () => clearInterval(interval);
  }, [gameOver, round]);

  // Check Game Over
  useEffect(() => {
    if (spawnedCount.current >= maxWords && activeWords.length === 0) {
      setGameOver(true);
    }
  }, [activeWords]);

  const removeWord = useCallback((id: string) => {
    setActiveWords(prev => prev.filter(w => w.id !== id));
  }, []);

  const handleSlice = useCallback((id: string, index: number) => {
    setActiveWords(prev => prev.map(w => {
      if (w.id === id && !w.sliced && !w.failed) {
        if (w.splitIndex === index) {
          setScore(s => s + 100);
          return { ...w, sliced: true };
        } else {
          setScore(s => Math.max(0, s - 50));
          return { ...w, failed: true };
        }
      }
      return w;
    }));
  }, []);

  // Pointer events
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    setSlicePath([{x: e.clientX, y: e.clientY}]);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    
    setSlicePath(prev => {
       const newPath = [...prev, {x: e.clientX, y: e.clientY}];
       if (newPath.length > 15) return newPath.slice(newPath.length - 15);
       return newPath;
    });

    const element = document.elementFromPoint(e.clientX, e.clientY);
    if (element && element.hasAttribute('data-gap-id')) {
      const id = element.getAttribute('data-gap-id')!;
      const index = parseInt(element.getAttribute('data-gap-index')!, 10);
      handleSlice(id, index);
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div 
      className="relative w-full h-full min-h-[600px] overflow-hidden bg-slate-900 touch-none select-none rounded-xl border border-slate-800"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerUp}
      ref={containerRef}
      style={{
        backgroundImage: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)'
      }}
    >
      {/* UI Overlay */}
      <div className="absolute top-4 left-6 z-20 pointer-events-none">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          {t.title}
        </h1>
        <p className="text-xl text-white mt-1 font-semibold">{t.score}: {score}</p>
      </div>

      <div className="absolute top-4 right-6 z-20 pointer-events-none text-slate-400 text-sm">
        {t.instruction}
      </div>

      {/* Words */}
      {activeWords.map(word => (
        <WordEntity 
          key={word.id} 
          word={word} 
          onSlice={handleSlice} 
          onRemove={() => removeWord(word.id)} 
        />
      ))}

      {/* Slice Line */}
      <svg className="absolute inset-0 pointer-events-none z-50 w-full h-full">
        <polyline 
          points={slicePath.map(p => {
             if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                return `${p.x - rect.left},${p.y - rect.top}`;
             }
             return `${p.x},${p.y}`;
          }).join(' ')} 
          fill="none" 
          stroke="#22d3ee" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          style={{ filter: 'drop-shadow(0 0 10px #22d3ee)' }}
        />
      </svg>

      {/* Game Over Screen */}
      <AnimatePresence>
        {gameOver && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm pointer-events-auto"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center max-w-sm w-full"
            >
              <h2 className="text-4xl font-bold text-white mb-2">{t.gameOver}</h2>
              <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
                {score} {t.score}
              </p>
              <button 
                onClick={() => onDone && onDone(score)}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xl font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                {t.continue}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
