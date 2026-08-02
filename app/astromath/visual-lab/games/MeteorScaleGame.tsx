"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DragAndDropContainer, DragItem, DropZone } from '@/components/interactive/DragAndDropContainer';
import LocalizedText, { LocalizedTextObject, Language } from '@/components/i18n/LocalizedText';

const DICTIONARY = {
  en: { title: "Meteor Scale", score: "Score", gameOver: "Game Over", next: "Next", playAgain: "Play Again", tryAgain: "Try Again!" },
  de: { title: "Meteor-Waage", score: "Punkte", gameOver: "Spiel vorbei", next: "Weiter", playAgain: "Nochmal spielen", tryAgain: "Versuch's nochmal!" },
  hu: { title: "Meteor Mérleg", score: "Pontszám", gameOver: "Játék vége", next: "Tovább", playAgain: "Újra", tryAgain: "Próbáld újra!" },
  ro: { title: "Balanța Meteorilor", score: "Scor", gameOver: "Joc Terminat", next: "Următorul", playAgain: "Joacă din nou", tryAgain: "Încearcă din nou!" }
};

interface MeteorScaleGameProps {
  grade: number;
  lang: Language;
  onDone?: (score: number) => void;
}

interface Problem {
  leftDisplay: string;
  rightPrefix: string;
  rightSuffix: string;
  targetValue: number;
  meteorValues: number[];
}

// This helper function can be kept as is.
function generateProblem(grade: number): Problem {
  let leftDisplay = "";
  let rightPrefix = "";
  let rightSuffix = "";
  let targetValue = 0;

  if (grade <= 2) {
    targetValue = Math.floor(Math.random() * 9) + 1;
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
      const a = Math.floor(Math.random() * 8) + 2;
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

  const meteorValues = [targetValue];
  const numOptions = 4;
  while (meteorValues.length < numOptions) {
    const wrong = targetValue + Math.floor(Math.random() * 10) - 5;
    if (wrong !== targetValue && wrong >= 0 && !meteorValues.includes(wrong)) {
      meteorValues.push(wrong);
    }
  }
  meteorValues.sort(() => Math.random() - 0.5);

  return { leftDisplay, rightPrefix, rightSuffix, targetValue, meteorValues };
}


export default function MeteorScaleGame({ grade, lang, onDone }: MeteorScaleGameProps) {
  const t = DICTIONARY[lang] || DICTIONARY.en;

  const [problem, setProblem] = useState<Problem | null>(null);
  const [score, setScore] = useState(0);
  const [scaleStatus, setScaleStatus] = useState<'left-heavy' | 'balanced' | 'incorrect'>('left-heavy');
  const [caughtMeteorValue, setCaughtMeteorValue] = useState<number | null>(null);
  const [rounds, setRounds] = useState(0);
  const [gamePhase, setGamePhase] = useState<'playing' | 'gameOver'>('playing');
  const [feedback, setFeedback] = useState<string | null>(null);

  const maxRounds = grade <= 5 ? 3 : 3 + (grade - 5);

  const startRound = useCallback(() => {
    if (rounds >= maxRounds) {
      setGamePhase('gameOver');
      return;
    }
    const newProb = generateProblem(grade);
    setProblem(newProb);
    setScaleStatus('left-heavy');
    setCaughtMeteorValue(null);
    setFeedback(null);
  }, [grade, rounds, maxRounds]);

  const restart = useCallback(() => {
    setScore(0);
    setRounds(0);
    setProblem(null);
    setGamePhase('playing');
    setTimeout(() => startRound(), 0);
  }, [startRound]);

  useEffect(() => {
    startRound();
  }, [startRound]);

  const handleDrop = (item: DragItem<{ value: number }>, zone: DropZone) => {
    if (scaleStatus === 'balanced' || !problem) return;

    if (item.data?.value === problem.targetValue) {
      setScore(s => s + 10);
      setScaleStatus('balanced');
      setCaughtMeteorValue(item.data.value);
      setRounds(r => r + 1);
      setTimeout(() => startRound(), 2500);
    } else {
      setScaleStatus('incorrect');
      setFeedback(t.tryAgain);
      // Revert back to left-heavy after a brief moment
      setTimeout(() => {
        setScaleStatus('left-heavy');
        setFeedback(null);
      }, 1500);
    }
  };

  const scaleRotation = scaleStatus === 'balanced' ? 0 : scaleStatus === 'incorrect' ? 10 : -10;
  
  const meteorItems: DragItem<{ value: number }>[] = problem ? problem.meteorValues.map(v => ({
    id: `meteor-${v}-${rounds}`, // Make ID unique per round
    label: `${v}`,
    data: { value: v }
  })) : [];

  const dropZones: DropZone[] = [{
      id: 'scale-pan-right',
      label: 'Right Scale Pan'
  }];


  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-2 sm:p-4 bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 font-sans">
      <div className="flex justify-between items-center gap-2 w-full mb-3 sm:mb-4 px-2 sm:px-4">
        <h2 className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
          {t.title}
        </h2>
        <div className="text-sm sm:text-xl font-bold text-white bg-slate-800 px-3 sm:px-4 py-1 rounded-full border border-slate-600 whitespace-nowrap">
          {t.score}: <span className="text-orange-400">{score}</span>
        </div>
      </div>

       <div className="relative w-full h-[calc(100dvh-7rem)] min-h-[430px] max-h-[600px] bg-slate-950 overflow-hidden rounded-xl border-2 border-slate-800 select-none">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #67e8f9 1px, transparent 1px)', backgroundSize: '60px 60px', backgroundPosition: '20px 20px' }} />

        {gamePhase === 'gameOver' && (
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/85 backdrop-blur-sm"
          >
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3 text-center drop-shadow-[0_0_10px_#f97316]">{t.gameOver}</h1>
            <p className="text-3xl text-orange-400 font-bold mb-8">{t.score}: {score}</p>
            <button
              onClick={restart}
              className="px-10 py-4 bg-gradient-to-r from-orange-600 to-yellow-500 hover:from-orange-500 hover:to-yellow-400 text-white font-black rounded-full text-xl uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(249,115,22,0.5)] mb-3"
            >
              {t.playAgain}
            </button>
            {onDone && <button onClick={() => onDone(score)} className="text-slate-400 hover:text-white uppercase text-sm tracking-wider font-bold transition-colors">{t.next}</button>}
          </motion.div>
        )}
        
        <DragAndDropContainer
            items={caughtMeteorValue ? [] : meteorItems}
            zones={dropZones}
            onDrop={handleDrop}
            className="w-full h-full"
            renderItem={(item) => (
                <motion.div 
                    initial={{ opacity: 0, y: -100, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1, transition: { delay: Math.random() * 1 } }}
                    exit={{ opacity: 0, scale: 0, transition: { duration: 0.3 } }}
                    className="cursor-grab active:cursor-grabbing w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-[0_0_20px_#f97316] border-2 bg-orange-900 border-orange-400"
                    whileDrag={{ zIndex: 50, scale: 1.2, boxShadow: '0 0 30px #f97316' }}
                >
                    {item.label}
                </motion.div>
            )}
            renderZone={(zone, droppedItems, isHovering) => {
                const panColor = scaleStatus === 'balanced' ? 'border-green-400' : scaleStatus === 'incorrect' ? 'border-red-500' : 'border-cyan-400';
                const panShadow = scaleStatus === 'balanced' ? 'shadow-[0_15px_30px_rgba(74,222,128,0.4)]' : scaleStatus === 'incorrect' ? 'shadow-[0_15px_30px_rgba(239,68,68,0.4)]' : 'shadow-[0_15px_30px_rgba(34,211,238,0.3)]';

                return (
                    <div className={`w-24 sm:w-32 h-16 sm:h-20 rounded-b-full border-b-[6px] flex items-center justify-center bg-cyan-950/80 transition-all duration-300 ${panColor} ${panShadow} ${isHovering && 'bg-cyan-900 scale-105'}`}>
                         <span className="text-white text-xl sm:text-2xl font-black flex items-center">
                            {problem?.rightPrefix}
                            {caughtMeteorValue !== null ? (
                                <motion.span 
                                    initial={{ scale: 3, opacity: 0 }} 
                                    animate={{ scale: 1, opacity: 1 }} 
                                    className="text-green-400 mx-1"
                                >
                                    {caughtMeteorValue}
                                </motion.span>
                            ) : (
                                <span className="text-cyan-600/50 mx-1">?</span>
                            )}
                            {problem?.rightSuffix}
                        </span>
                        <AnimatePresence>
                        {feedback && (
                            <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -20, opacity: 0}} className="absolute -bottom-10 text-red-500 font-bold text-lg">
                                {feedback}
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                );
            }}
        />

        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center z-0 pointer-events-none">
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
            
            {/* Right Pan - The actual DropZone is rendered by DragAndDropContainer, this is just a placeholder in the structure */}
             <div className="absolute -right-12 sm:-right-16 top-1 sm:top-2 flex flex-col items-center" style={{ width: '100px' }}>
                <div className="w-1 h-20 sm:h-24 bg-cyan-400/80" />
                {/* The visual pan is rendered via renderZone */}
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
