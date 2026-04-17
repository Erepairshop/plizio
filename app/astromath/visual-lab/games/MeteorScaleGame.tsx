"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MeteorScaleGameProps {
  grade: number;
  lang: 'de' | 'hu' | 'ro' | 'en';
  onDone?: (score: number) => void;
}

const DICTIONARY = {
  en: { title: "Meteor Scale", score: "Score", gameOver: "Game Over", next: "Next" },
  de: { title: "Meteor-Waage", score: "Punkte", gameOver: "Spiel vorbei", next: "Weiter" },
  hu: { title: "Meteor Mérleg", score: "Pontszám", gameOver: "Játék vége", next: "Tovább" },
  ro: { title: "Balanța Meteorilor", score: "Scor", gameOver: "Joc Terminat", next: "Următorul" }
};

interface Problem {
  leftDisplay: string;
  rightPrefix: string;
  rightSuffix: string;
  targetValue: number;
  meteors: number[];
}

interface MeteorState {
  id: string;
  value: number;
  xPercent: number;
  delay: number;
  status: 'falling' | 'wrong' | 'caught';
}

function generateProblem(grade: number): Problem {
  let leftDisplay = "";
  let rightPrefix = "";
  let rightSuffix = "";
  let targetValue = 0;

  if (grade <= 2) {
    targetValue = Math.floor(Math.random() * 9) + 1; // 1 to 9
    const rightBase = Math.floor(Math.random() * (10 - targetValue));
    const leftValue = rightBase + targetValue;
    leftDisplay = leftValue.toString();
    rightPrefix = `${rightBase} + `;
  } else if (grade <= 4) {
    const isSub = Math.random() > 0.5;
    if (isSub) {
      const leftValue = Math.floor(Math.random() * 20) + 10;
      targetValue = Math.floor(Math.random() * 20) + 5;
      const a = leftValue + targetValue;
      leftDisplay = leftValue.toString();
      rightPrefix = `${a} - `;
    } else {
      targetValue = Math.floor(Math.random() * 20) + 10;
      const rightBase = Math.floor(Math.random() * 20) + 10;
      const leftValue = rightBase + targetValue;
      leftDisplay = leftValue.toString();
      rightPrefix = `${rightBase} + `;
    }
  } else {
    const isMult = Math.random() > 0.5;
    if (isMult) {
      const a = Math.floor(Math.random() * 8) + 2; // 2 to 9
      targetValue = Math.floor(Math.random() * 8) + 2;
      const leftValue = a * targetValue;
      leftDisplay = leftValue.toString();
      rightPrefix = `${a} × `;
    } else {
      const a = Math.floor(Math.random() * 5) + 2;
      const leftValue = Math.floor(Math.random() * 10) + 2;
      targetValue = a * leftValue;
      leftDisplay = leftValue.toString();
      rightSuffix = ` ÷ ${a}`;
    }
  }

  const meteors = [targetValue];
  const numOptions = 4;
  while (meteors.length < numOptions) {
    const wrong = targetValue + Math.floor(Math.random() * 10) - 5;
    if (wrong !== targetValue && wrong >= 0 && !meteors.includes(wrong)) {
      meteors.push(wrong);
    }
  }
  meteors.sort(() => Math.random() - 0.5);

  return { leftDisplay, rightPrefix, rightSuffix, targetValue, meteors };
}

export default function MeteorScaleGame({ grade, lang, onDone }: MeteorScaleGameProps) {
  const t = DICTIONARY[lang] || DICTIONARY.en;
  
  const [problem, setProblem] = useState<Problem | null>(null);
  const [meteors, setMeteors] = useState<MeteorState[]>([]);
  const [score, setScore] = useState(0);
  const [scaleStatus, setScaleStatus] = useState<'left-heavy' | 'balanced'>('left-heavy');
  const [caughtMeteor, setCaughtMeteor] = useState<number | null>(null);
  const [rounds, setRounds] = useState(0);
  const maxRounds = grade <= 5 ? 3 : 3 + (grade - 5);
  const fallDuration = grade <= 2 ? 12 : grade <= 4 ? 9 : grade <= 6 ? 7 : 6;

  const initNextRound = useCallback(() => {
    if (rounds >= maxRounds) {
      if (onDone) onDone(score);
      return;
    }
    const newProb = generateProblem(grade);
    setProblem(newProb);
    setScaleStatus('left-heavy');
    setCaughtMeteor(null);

    const positions = [20, 40, 60, 80].sort(() => Math.random() - 0.5);
    
    setMeteors(newProb.meteors.map((val, i) => ({
      id: Math.random().toString(),
      value: val,
      xPercent: positions[i],
      delay: Math.random() * 1.5,
      status: 'falling'
    })));
  }, [grade, rounds, score, onDone]); // maxRounds is constant

  useEffect(() => {
    initNextRound();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only on mount

  const handleMeteorClick = (id: string, value: number) => {
    if (scaleStatus === 'balanced' || rounds >= maxRounds) return;

    if (value === problem?.targetValue) {
      setMeteors(m => m.map(met => met.id === id ? { ...met, status: 'caught' } : met));
      setScaleStatus('balanced');
      setCaughtMeteor(value);
      setScore(s => s + 10);
      setRounds(r => r + 1);
      setTimeout(() => {
        initNextRound();
      }, 2000);
    } else {
      setMeteors(m => m.map(met => met.id === id ? { ...met, status: 'wrong' } : met));
    }
  };

  const scaleRotation = scaleStatus === 'balanced' ? 0 : -10;

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 font-sans">
      <div className="flex justify-between w-full mb-4 px-4">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
          {t.title}
        </h2>
        <div className="text-xl font-bold text-white bg-slate-800 px-4 py-1 rounded-full border border-slate-600">
          {t.score}: <span className="text-orange-400">{score}</span>
        </div>
      </div>

      <div className="relative w-full h-[500px] sm:h-[600px] bg-slate-950 overflow-hidden rounded-xl border-2 border-slate-800 select-none">
        {/* Starry background */}
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #67e8f9 1px, transparent 1px)', backgroundSize: '60px 60px', backgroundPosition: '20px 20px' }} />

        {rounds >= maxRounds && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-sm">
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-[0_0_10px_#f97316]">{t.gameOver}</h1>
            <p className="text-3xl text-orange-400 font-bold">{t.score}: {score}</p>
          </div>
        )}

        {/* Falling Meteors */}
        <AnimatePresence>
          {meteors.map(meteor => {
            if (meteor.status === 'caught') return null; // Remove from falling view
            return (
              <motion.div
                key={meteor.id}
                initial={{ y: -100, x: `${meteor.xPercent}%`, opacity: 0 }}
                animate={
                  meteor.status === 'wrong' 
                    ? { y: 800, scale: 0.5, opacity: 0, rotate: 180 } 
                    : { y: 800, opacity: 1, rotate: 90 }
                }
                transition={{ 
                  duration: meteor.status === 'wrong' ? 1 : fallDuration,
                  delay: meteor.status === 'wrong' ? 0 : meteor.delay, 
                  ease: "linear",
                  repeat: meteor.status === 'falling' ? Infinity : 0
                }}
                onMouseDown={() => handleMeteorClick(meteor.id, meteor.value)}
                onTouchStart={() => handleMeteorClick(meteor.id, meteor.value)}
                className="absolute cursor-pointer z-20 top-0"
                style={{ left: `${meteor.xPercent}%`, marginLeft: '-2rem' }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-[0_0_20px_#f97316] border-2 ${meteor.status === 'wrong' ? 'bg-red-900 border-red-500 shadow-red-500' : 'bg-orange-900 border-orange-400'}`}>
                   {meteor.value}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* The Scale */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none">
          <motion.div 
            animate={{ rotate: scaleRotation }} 
            className="w-72 sm:w-96 h-3 sm:h-4 bg-cyan-400 rounded-full relative shadow-[0_0_15px_#22d3ee]"
            transition={{ type: "spring", stiffness: 60, damping: 10 }}
          >
            {/* Left Pan */}
            <div className="absolute -left-12 sm:-left-16 top-1 sm:top-2 flex flex-col items-center" style={{ width: '100px' }}>
              <div className="w-1 h-20 sm:h-24 bg-cyan-400/80" />
              <div className="w-24 sm:w-32 h-16 sm:h-20 rounded-b-full border-b-[6px] border-cyan-400 flex items-center justify-center bg-cyan-950/80 shadow-[0_15px_30px_rgba(34,211,238,0.3)]">
                <span className="text-white text-2xl sm:text-3xl font-black">{problem?.leftDisplay}</span>
              </div>
            </div>

            {/* Right Pan */}
            <div className="absolute -right-12 sm:-right-16 top-1 sm:top-2 flex flex-col items-center" style={{ width: '100px' }}>
              <div className="w-1 h-20 sm:h-24 bg-cyan-400/80" />
              <div className="w-24 sm:w-32 h-16 sm:h-20 rounded-b-full border-b-[6px] border-cyan-400 flex items-center justify-center bg-cyan-950/80 shadow-[0_15px_30px_rgba(34,211,238,0.3)] whitespace-nowrap px-2">
                <span className="text-white text-xl sm:text-2xl font-black flex items-center">
                  {problem?.rightPrefix}
                  {caughtMeteor !== null ? (
                    <motion.span 
                      initial={{ scale: 3, opacity: 0 }} 
                      animate={{ scale: 1, opacity: 1 }} 
                      className="text-orange-400 mx-1"
                    >
                      {caughtMeteor}
                    </motion.span>
                  ) : (
                    <span className="text-cyan-600/50 mx-1">?</span>
                  )}
                  {problem?.rightSuffix}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Scale Base */}
          <div className="w-0 h-0 border-l-[20px] sm:border-l-[30px] border-l-transparent border-r-[20px] sm:border-r-[30px] border-r-transparent border-b-[50px] sm:border-b-[70px] border-b-cyan-600 drop-shadow-[0_0_20px_rgba(8,145,178,0.8)] -mt-1 z-10" />
          <div className="w-24 sm:w-32 h-4 sm:h-6 bg-cyan-700 rounded-full mt-[-10px] sm:mt-[-15px] z-0 shadow-[0_5px_15px_rgba(0,0,0,0.5)]" />
        </div>
      </div>
    </div>
  );
}
