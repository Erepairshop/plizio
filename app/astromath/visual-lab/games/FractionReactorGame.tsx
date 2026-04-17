import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Language = 'en' | 'hu' | 'de' | 'ro';

interface Props {
  grade: number;
  lang: Language;
  onDone?: (score: number) => void;
}

type Fraction = { num: number; den: number };
type Cell = Fraction & { id: string; x: number; type: 'pie' | 'bar'; duration: number };

const dict = {
  en: {
    title: "Fraction Reactor",
    score: "Score",
    lives: "Integrity",
    target: "Target Matrix",
    gameOver: "System Failure",
    playAgain: "Restart Reactor",
    start: "Engage Reactor",
    exit: "Abort Mission",
  },
  hu: {
    title: "Tört Reaktor",
    score: "Pont",
    lives: "Integritás",
    target: "Cél Mátrix",
    gameOver: "Rendszerhiba",
    playAgain: "Újraindítás",
    start: "Reaktor Indítása",
    exit: "Küldetés Megszakítása",
  },
  de: {
    title: "Bruchreaktor",
    score: "Punkte",
    lives: "Integrität",
    target: "Zielmatrix",
    gameOver: "Systemfehler",
    playAgain: "Neustart",
    start: "Reaktor Starten",
    exit: "Mission Abbrechen",
  },
  ro: {
    title: "Reactorul de Fracții",
    score: "Scor",
    lives: "Integritate",
    target: "Matrice Țintă",
    gameOver: "Eroare de Sistem",
    playAgain: "Repornire",
    start: "Activare Reactor",
    exit: "Abandonare Misiune",
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

const generateCellFraction = (target: Fraction, grade: number, shouldMatch: boolean): Fraction => {
  if (shouldMatch) {
    const maxMultiplier = Math.floor(12 / target.den);
    const multiplier = maxMultiplier > 1 ? Math.floor(Math.random() * maxMultiplier) + 1 : 1;
    return { num: target.num * multiplier, den: target.den * multiplier };
  } else {
    let f = generateFraction(grade);
    let attempts = 0;
    while (f.num * target.den === target.num * f.den && attempts < 10) {
      f = generateFraction(grade);
      attempts++;
    }
    return f;
  }
};

const PieFraction = ({ num, den }: { num: number; den: number }) => {
  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const fillLength = (num / den) * circumference;
  
  const lines = Array.from({ length: den }).map((_, i) => {
    const angle = (i / den) * 360;
    return <line key={i} x1="50" y1="50" x2="50" y2="0" stroke="#0f172a" strokeWidth="2" transform={`rotate(${angle} 50 50)`} />
  });

  return (
    <svg width="60" height="60" viewBox="0 0 100 100" className="drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
      <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#1e293b" strokeWidth="48" />
      <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#38bdf8" strokeWidth="48" strokeDasharray={`${fillLength} ${circumference}`} transform="rotate(-90 50 50)" />
      {lines}
      <circle cx="50" cy="50" r="49" fill="transparent" stroke="#bae6fd" strokeWidth="2" />
    </svg>
  );
};

const BarFraction = ({ num, den }: { num: number; den: number }) => {
  const width = 60;
  const height = 80;
  const blockHeight = height / den;

  return (
    <svg width="60" height="80" viewBox="0 0 100 100" className="drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
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
  const [cells, setCells] = useState<Cell[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const T = dict[lang] || dict['en'];
  const maxCorrect = grade <= 5 ? 3 : 3 + (grade - 5); // K3-5=3, K6=4, K7=5, K8=6

  const startGame = () => {
    setScore(0);
    setLives(3);
    setCells([]);
    setCorrectCount(0);
    setTarget(generateFraction(grade));
    setStatus('playing');
  };

  useEffect(() => {
    if (status !== 'playing') return;
    const spawnRate = Math.max(800, 2000 - score * 30);
    const interval = setInterval(() => {
      setCells(prev => {
        if (prev.length > 6) return prev;
        
        const isMatch = Math.random() < 0.35;
        const newFraction = generateCellFraction(target, grade, isMatch);
        
        const duration = Math.max(3, 8 - grade * 0.5 - (score * 0.05));
        const newCell: Cell = {
          ...newFraction,
          id: Math.random().toString(36).substring(2, 11),
          x: Math.floor(Math.random() * 80) + 10,
          type: Math.random() > 0.5 ? 'pie' : 'bar',
          duration,
        };
        return [...prev, newCell];
      });
    }, spawnRate);
    return () => clearInterval(interval);
  }, [status, target, grade, score]);

  const handleMiss = (cell: Cell) => {
    setCells(prev => {
      const exists = prev.find(c => c.id === cell.id);
      if (!exists) return prev; 
      
      const next = prev.filter(c => c.id !== cell.id);
      const isMatch = cell.num * target.den === target.num * cell.den;
      if (isMatch) {
        setLives(l => {
          if (l <= 1) setStatus('gameover');
          return l - 1;
        });
      }
      return next;
    });
  };

  const handleTap = (cell: Cell) => {
    setCells(prev => prev.filter(c => c.id !== cell.id));
    const isMatch = cell.num * target.den === target.num * cell.den;
    if (isMatch) {
      setScore(s => s + 10);
      setTarget(generateFraction(grade));
      setCorrectCount(c => {
        const next = c + 1;
        if (next >= maxCorrect) {
          setStatus('won');
        }
        return next;
      });
    } else {
      setLives(l => {
        if (l <= 1) setStatus('gameover');
        return l - 1;
      });
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[600px] bg-slate-950 overflow-hidden border-2 border-slate-800 rounded-2xl shadow-2xl font-sans select-none">
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

      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10 bg-gradient-to-b from-slate-900/90 to-transparent">
        <div className="flex flex-col">
          <span className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">{T.score}</span>
          <span className="text-3xl font-black text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">{score}</span>
        </div>

        <div className="flex flex-col items-center bg-slate-900/80 px-8 py-2 rounded-xl border border-slate-700/50 shadow-lg backdrop-blur-sm">
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
              <div key={i} className={`w-6 h-6 rounded-full border-2 ${i < lives ? 'bg-rose-500 border-rose-400 shadow-[0_0_10px_rgba(244,63,94,0.8)]' : 'bg-slate-800 border-slate-700'}`} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {status === 'start' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center z-20">
            <h1 className="text-5xl md:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] text-center px-4">
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
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center z-20">
            <h2 className="text-5xl font-black mb-2 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.6)] uppercase tracking-widest text-center">
              ✓ {T.score}!
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
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center z-20">
            <h2 className="text-5xl font-black mb-2 text-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.6)] uppercase tracking-widest text-center">
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

      {status === 'playing' && cells.map(cell => (
        <motion.div
          key={cell.id}
          initial={{ y: -100 }}
          animate={{ y: 700 }}
          transition={{ duration: cell.duration, ease: 'linear' }}
          onAnimationComplete={() => handleMiss(cell)}
          onClick={() => handleTap(cell)}
          className="absolute top-0 cursor-pointer p-4 -m-4" 
          style={{ left: `${cell.x}%` }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {cell.type === 'pie' ? <PieFraction num={cell.num} den={cell.den} /> : <BarFraction num={cell.num} den={cell.den} />}
        </motion.div>
      ))}
    </div>
  );
}
