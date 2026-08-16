"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MathLevelBar, useMathGameProgress } from '@/components/visual-lab/MathGameProgress';

export interface AngleLaserGameProps {
  grade: number;
  lang: 'de' | 'hu' | 'ro' | 'en';
  onDone?: (score: number) => void;
}

const DICT = {
  en: {
    title: 'Angle Laser',
    fire: 'FIRE',
    next: 'Next',
    target: 'Target Angle',
    score: 'Score',
    hit: 'Direct Hit!',
    miss: 'Miss!',
    gameOver: 'Game Over!',
    playAgain: 'Play Again',
    levelDone: 'Level complete!',
    roundOver: 'Round complete - keep practicing',
    nextLevel: 'Next level',
    tryAgain: 'Try again',
    round: 'Round',
  },
  de: {
    title: 'Winkellaser',
    fire: 'FEUER',
    next: 'Weiter',
    target: 'Zielwinkel',
    score: 'Punkte',
    hit: 'Volltreffer!',
    miss: 'Daneben!',
    gameOver: 'Spiel vorbei!',
    playAgain: 'Nochmal spielen',
    levelDone: 'Level geschafft!',
    roundOver: 'Runde beendet - weiter üben',
    nextLevel: 'Nächstes Level',
    tryAgain: 'Erneut versuchen',
    round: 'Runde',
  },
  hu: {
    title: 'Lézerszög',
    fire: 'LÖVÉS',
    next: 'Tovább',
    target: 'Célszög',
    score: 'Pont',
    hit: 'Találat!',
    miss: 'Mellé!',
    gameOver: 'Játék vége!',
    playAgain: 'Új játék',
    levelDone: 'Szint teljesítve!',
    roundOver: 'A kör véget ért - gyakorolj tovább',
    nextLevel: 'Következő szint',
    tryAgain: 'Újrapróbálom',
    round: 'Kör',
  },
  ro: {
    title: 'Laser Unghiular',
    fire: 'FOC',
    next: 'Următorul',
    target: 'Unghi Țintă',
    score: 'Scor',
    hit: 'Lovit!',
    miss: 'Ratat!',
    gameOver: 'Joc Terminat!',
    playAgain: 'Joacă din nou',
    levelDone: 'Nivel complet!',
    roundOver: 'Rundă încheiată - continuă antrenamentul',
    nextLevel: 'Nivelul următor',
    tryAgain: 'Încearcă din nou',
    round: 'Rundă',
  }
};

const getAngleOptions = (step: number): number[] => {
  const opts: number[] = [];
  for (let i = 0; i < 360; i += step) opts.push(i);
  return opts;
};

const PolarGrid = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
    <div className="w-full h-[1px] bg-cyan-800 absolute" />
    <div className="h-full w-[1px] bg-cyan-800 absolute" />
    <div className="w-[140px] h-[140px] rounded-full border border-cyan-800 absolute" />
    <div className="w-[280px] h-[280px] rounded-full border border-cyan-800 absolute" />
    <div className="w-full h-[1px] bg-cyan-800 absolute rotate-45" />
    <div className="w-full h-[1px] bg-cyan-800 absolute -rotate-45" />
  </div>
);

const CannonSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
    <circle cx="50" cy="50" r="25" fill="#0f172a" stroke="currentColor" strokeWidth="4" />
    <rect x="50" y="40" width="45" height="20" fill="#0f172a" stroke="currentColor" strokeWidth="4" rx="4" />
    <circle cx="50" cy="50" r="10" fill="currentColor" />
  </svg>
);

const AsteroidSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-stone-400 drop-shadow-[0_0_8px_rgba(168,162,158,0.8)]">
    <path d="M50 5 L80 20 L95 50 L75 90 L20 85 L5 50 L25 15 Z" fill="currentColor" />
    <circle cx="35" cy="40" r="8" fill="#444" opacity="0.5" />
    <circle cx="65" cy="60" r="5" fill="#444" opacity="0.5" />
    <circle cx="50" cy="75" r="10" fill="#444" opacity="0.5" />
  </svg>
);

export default function AngleLaserGame({ grade, lang, onDone }: AngleLaserGameProps) {
  const t = DICT[lang] || DICT.en;
  const { progress, difficulty, mastery, selectLevel, recordAnswer, advanceToUnlockedLevel } = useMathGameProgress('angle-laser', grade);
  const MAX_ROUNDS = difficulty.rounds;
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  
  const [targetAngle, setTargetAngle] = useState(90);
  const [currentAngle, setCurrentAngle] = useState(0);
  
  const [phase, setPhase] = useState<'aiming' | 'firing' | 'result' | 'gameover'>('aiming');
  const fireTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fireLockedRef = useRef(false);

  useEffect(() => () => {
    if (fireTimerRef.current) clearTimeout(fireTimerRef.current);
  }, []);
  
  useEffect(() => {
    generateProblem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round, grade, difficulty.angleStep]);

  const generateProblem = () => {
    const opts = getAngleOptions(difficulty.angleStep);
    const randomAngle = opts[Math.floor(Math.random() * opts.length)];
    setTargetAngle(randomAngle);
    setCurrentAngle(0);
    setPhase('aiming');
    fireLockedRef.current = false;
  };

  const handleFire = () => {
    if (phase !== 'aiming' || fireLockedRef.current) return;
    fireLockedRef.current = true;
    setPhase('firing');
    if (fireTimerRef.current) clearTimeout(fireTimerRef.current);
    fireTimerRef.current = setTimeout(() => {
      setPhase('result');
      const hit = (currentAngle % 360) === (targetAngle % 360);
      recordAnswer(hit);
      if (hit) {
        setScore(s => s + 1);
      }
    }, 400);
  };

  const nextRound = () => {
    if (round >= MAX_ROUNDS) {
      advanceToUnlockedLevel();
      setPhase('gameover');
    } else {
      setRound(r => r + 1);
    }
  };

  useEffect(() => {
    if (phase === 'gameover' && onDone) {
      onDone(score);
    }
  }, [phase, score, onDone]);

  const resetGame = () => {
    if (fireTimerRef.current) clearTimeout(fireTimerRef.current);
    setScore(0);
    fireLockedRef.current = false;
    if (round === 1) {
      generateProblem();
    } else {
      setRound(1);
      setPhase('aiming');
    }
  };

  const changeLevel = (level: 1 | 2 | 3 | 4 | 5) => {
    if (fireTimerRef.current) clearTimeout(fireTimerRef.current);
    selectLevel(level);
    setRound(1);
    setScore(0);
    setPhase('aiming');
    fireLockedRef.current = false;
  };

  const asteroidX = 120 * Math.cos(targetAngle * Math.PI / 180);
  const asteroidY = -120 * Math.sin(targetAngle * Math.PI / 180);
  const isHit = (currentAngle % 360) === (targetAngle % 360);

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto bg-slate-950 p-3 sm:p-6 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans select-none">
      <div className="w-full">
        <MathLevelBar grade={grade} lang={lang} progress={progress} mastery={mastery} onSelect={changeLevel} />
      </div>
      
      {/* Header Info */}
      <div className="w-full flex justify-between items-center mb-4">
         <span className="text-slate-400 font-bold tracking-wide">{t.round} {round}/{MAX_ROUNDS}</span>
         <span className="text-cyan-400 font-bold tracking-wide text-lg">{t.score}: {score}</span>
      </div>

      {/* Title & Target */}
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase tracking-wider sm:tracking-widest drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
          {t.title}
        </h2>
        <div className="h-8 mt-2">
            <p className="text-xl text-amber-300 font-mono font-bold tracking-widest">
              {grade < 5 || phase !== 'aiming' ? `${t.target}: ${targetAngle}°` : `${t.target}: ???°`}
            </p>
        </div>
      </div>

      {/* Play Area */}
      <div className="relative w-full max-w-[320px] aspect-square bg-slate-900 rounded-full border-4 border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.8)] flex items-center justify-center">
        <PolarGrid />

        {/* Asteroid */}
        <AnimatePresence>
          {!(phase === 'result' && isHit) && (
            <motion.div 
              className="absolute left-1/2 top-1/2 w-10 h-10"
              style={{ marginLeft: asteroidX - 20, marginTop: asteroidY - 20 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
               <AsteroidSVG />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Explosion */}
        <AnimatePresence>
          {phase === 'result' && isHit && (
            <motion.div
              className="absolute left-1/2 top-1/2 w-24 h-24 pointer-events-none"
              style={{ marginLeft: asteroidX - 48, marginTop: asteroidY - 48 }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-full h-full bg-amber-400 rounded-full blur-xl" />
              <div className="absolute inset-4 bg-white rounded-full blur-md" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Laser */}
        {(phase === 'firing' || phase === 'result') && (
          <motion.div
            className="absolute left-1/2 top-1/2 h-2 rounded-full"
            style={{ 
              width: 120,
              marginTop: -4,
              rotate: -currentAngle,
              originX: 0,
              originY: 0.5,
              backgroundColor: '#ef4444',
              boxShadow: '0 0 10px #ef4444, 0 0 20px #ef4444'
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}

        {/* Cannon */}
        <motion.div 
          className="absolute left-1/2 top-1/2 w-16 h-16 z-10"
          style={{ marginLeft: -32, marginTop: -32 }}
          animate={{ rotate: -currentAngle }}
        >
           <CannonSVG />
        </motion.div>
      </div>

      {/* Controls */}
      <div className="w-full max-w-[320px] mt-4 sm:mt-8 min-h-[110px] sm:min-h-[120px] flex flex-col items-center justify-center gap-4">
        {phase === 'aiming' ? (
          <>
            <div className="flex items-center gap-3 w-full">
              <span className="text-xl font-mono w-14 text-right text-cyan-200">{currentAngle}°</span>
              <input 
                type="range" 
                min="0" 
                max="360" 
                step={difficulty.angleStep}
                value={currentAngle}
                onChange={(e) => setCurrentAngle(Number(e.target.value))}
                className="flex-1 cursor-pointer accent-cyan-500"
              />
            </div>
            <button 
              onClick={handleFire}
              className="mt-2 px-10 py-3 bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-full text-white font-black text-xl tracking-widest shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all"
            >
              {t.fire}
            </button>
          </>
        ) : phase === 'result' ? (
          <>
            <motion.p 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`text-2xl font-black uppercase tracking-widest ${isHit ? 'text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]' : 'text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]'}`}
            >
              {isHit ? t.hit : t.miss}
            </motion.p>
            <button 
              onClick={nextRound}
              className="px-8 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-full text-white font-bold transition-all"
            >
              {t.next}
            </button>
          </>
        ) : phase === 'gameover' ? (
          <>
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-3xl font-black text-amber-400 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"
            >
              {score >= MAX_ROUNDS ? t.levelDone : t.roundOver}
            </motion.p>
            <button 
              onClick={resetGame}
              className="px-8 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-bold transition-all"
            >
              {score >= MAX_ROUNDS ? (progress.selectedLevel < 5 ? t.nextLevel : t.playAgain) : t.tryAgain}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
