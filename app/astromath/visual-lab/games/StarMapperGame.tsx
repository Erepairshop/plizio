import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Language } from '@/components/i18n/LocalizedText';

export interface StarMapperGameProps {
  grade: number;
  lang: Language;
  onDone?: (score: number) => void;
}

const DICT = {
  en: {
    title: "Star Mapper",
    score: "Score",
    time: "Time",
    lockOn: "LOCK ON",
    gameOver: "Game Over",
    playAgain: "Play Again",
    correct: "Target Destroyed!",
    wrong: "Missed!",
    start: "Start Mission",
    currentPos: "Targeting",
    next: "Next Mission"
  },
  de: {
    title: "Sternen-Mapper",
    score: "Punkte",
    time: "Zeit",
    lockOn: "ZIELERFASSUNG",
    gameOver: "Spiel Beendet",
    playAgain: "Nochmal spielen",
    correct: "Ziel zerstört!",
    wrong: "Verfehlt!",
    start: "Mission starten",
    currentPos: "Zielerfassung",
    next: "Nächste Mission"
  },
  hu: {
    title: "Csillagtérképész",
    score: "Pont",
    time: "Idő",
    lockOn: "CÉLZÁS",
    gameOver: "Játék Vége",
    playAgain: "Újra",
    correct: "Találat!",
    wrong: "Mellé!",
    start: "Küldetés indítása",
    currentPos: "Célzás",
    next: "Tovább"
  },
  ro: {
    title: "Cartografic Stelar",
    score: "Scor",
    time: "Timp",
    lockOn: "FIXARE ȚINTĂ",
    gameOver: "Joc Terminat",
    playAgain: "Joacă din nou",
    correct: "Țintă distrusă!",
    wrong: "Ratare!",
    start: "Start Misiune",
    currentPos: "Țintire",
    next: "Următoarea Misiune"
  }
};

export default function StarMapperGame({ grade, lang, onDone }: StarMapperGameProps) {
  const t = DICT[lang] || DICT.en;

  const config = useMemo(() => {
    if (grade <= 2) return { minX: 0, maxX: 4, minY: 0, maxY: 4 };
    if (grade <= 4) return { minX: 0, maxX: 8, minY: 0, maxY: 8 };
    return { minX: -5, maxX: 5, minY: -5, maxY: 5 };
  }, [grade]);

  const [gameState, setGameState] = useState<'start' | 'playing' | 'end'>('start');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [correctCount, setCorrectCount] = useState(0);
  const maxCorrect = grade <= 5 ? 3 : 3 + (grade - 5);
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // SVG Mapping logic
  const svgSize = 500;
  const padding = 50;
  const gridWidth = svgSize - padding * 2;
  const gridHeight = svgSize - padding * 2;

  const mapX = (x: number) => padding + ((x - config.minX) / (config.maxX - config.minX)) * gridWidth;
  const mapY = (y: number) => (svgSize - padding) - ((y - config.minY) / (config.maxY - config.minY)) * gridHeight;

  const unmapX = (svgX: number) => {
    const rawX = ((svgX - padding) / gridWidth) * (config.maxX - config.minX) + config.minX;
    return Math.max(config.minX, Math.min(config.maxX, Math.round(rawX)));
  };

  const unmapY = (svgY: number) => {
    const rawY = ((svgSize - padding - svgY) / gridHeight) * (config.maxY - config.minY) + config.minY;
    return Math.max(config.minY, Math.min(config.maxY, Math.round(rawY)));
  };

  // Generate target
  const generateTarget = () => {
    let newX, newY;
    do {
      newX = Math.floor(Math.random() * (config.maxX - config.minX + 1)) + config.minX;
      newY = Math.floor(Math.random() * (config.maxY - config.minY + 1)) + config.minY;
    } while (newX === target.x && newY === target.y);
    
    setTarget({ x: newX, y: newY });
    // Reset cursor to a starting position away from target or center
    setCurrentPos({ x: config.minX, y: config.minY });
    setFeedback(null);
  };

  // Timer
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('end');
      if (onDone) onDone(score);
    }
  }, [timeLeft, gameState, score, onDone]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(60);
    setCorrectCount(0);
    setGameState('playing');
    generateTarget();
  };

  const handleSubmit = () => {
    if (gameState !== 'playing' || feedback) return;

    if (currentPos.x === target.x && currentPos.y === target.y) {
      setScore(s => s + 10);
      setFeedback('correct');
      setCorrectCount(c => {
        const next = c + 1;
        if (next >= maxCorrect) {
          setTimeout(() => {
            setGameState('end');
            if (onDone) onDone(score + 10);
          }, 1200);
        } else {
          setTimeout(() => generateTarget(), 1000);
        }
        return next;
      });
    } else {
      setFeedback('wrong');
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  const xTicks = [];
  for (let i = config.minX; i <= config.maxX; i++) xTicks.push(i);
  const yTicks = [];
  for (let i = config.minY; i <= config.maxY; i++) yTicks.push(i);

  const xAxisY = config.minY <= 0 && config.maxY >= 0 ? 0 : config.minY;
  const yAxisX = config.minX <= 0 && config.maxX >= 0 ? 0 : config.minX;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto min-h-[600px] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl relative border border-slate-700 text-slate-100 font-sans p-6 select-none">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="z-10 w-full flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-cyan-400 tracking-wider flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
          {t.title}
        </h2>
        {gameState === 'playing' && (
          <div className="flex gap-6 text-lg font-mono">
            <div className="flex flex-col items-end">
              <span className="text-slate-400 text-xs uppercase">{t.time}</span>
              <span className={`font-bold ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-slate-200'}`}>0:{timeLeft.toString().padStart(2, '0')}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-slate-400 text-xs uppercase">{t.score}</span>
              <span className="font-bold text-cyan-400">{score}</span>
            </div>
          </div>
        )}
      </div>

      {gameState === 'start' && (
        <div className="flex-1 flex flex-col items-center justify-center z-10">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
            <svg className="w-32 h-32 mx-auto text-cyan-400 mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <button 
              onClick={startGame}
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold text-xl shadow-[0_0_20px_rgba(8,145,178,0.5)] transition-all transform hover:scale-105"
            >
              {t.start}
            </button>
          </motion.div>
        </div>
      )}

      {gameState === 'playing' && (
        <div className="flex-1 w-full flex flex-col items-center z-10 gap-6">
          <div 
            ref={containerRef}
            className="relative w-full aspect-square max-w-[420px] bg-slate-800/50 rounded-xl border border-slate-600 shadow-inner overflow-hidden touch-none"
          >
            <svg viewBox={`0 0 ${svgSize} ${svgSize}`} className="w-full h-full">
              {/* Grid Lines */}
              {xTicks.map(x => (
                <line key={`gx-${x}`} x1={mapX(x)} y1={mapY(config.minY)} x2={mapX(x)} y2={mapY(config.maxY)} stroke="rgba(148, 163, 184, 0.2)" strokeWidth={1} />
              ))}
              {yTicks.map(y => (
                <line key={`gy-${y}`} x1={mapX(config.minX)} y1={mapY(y)} x2={mapX(config.maxX)} y2={mapY(y)} stroke="rgba(148, 163, 184, 0.2)" strokeWidth={1} />
              ))}
              
              {/* Axes */}
              <line x1={mapX(yAxisX)} y1={mapY(config.minY)} x2={mapX(yAxisX)} y2={mapY(config.maxY)} stroke="rgba(34, 211, 238, 0.5)" strokeWidth={2} />
              <line x1={mapX(config.minX)} y1={mapY(xAxisY)} x2={mapX(config.maxX)} y2={mapY(xAxisY)} stroke="rgba(34, 211, 238, 0.5)" strokeWidth={2} />

              {/* Labels */}
              {xTicks.map(x => (
                <text key={`tx-${x}`} x={mapX(x)} y={mapY(xAxisY) + 20} fill="#94a3b8" fontSize="14" textAnchor="middle" fontWeight={x === 0 ? "bold" : "normal"}>{x}</text>
              ))}
              {yTicks.filter(y => y !== 0 || yAxisX !== 0).map(y => (
                <text key={`ty-${y}`} x={mapX(yAxisX) - 10} y={mapY(y) + 5} fill="#94a3b8" fontSize="14" textAnchor="end" fontWeight={y === 0 ? "bold" : "normal"}>{y}</text>
              ))}

              {/* Target */}
              <AnimatePresence>
                <g key={`target-${target.x}-${target.y}`} transform={`translate(${mapX(target.x)}, ${mapY(target.y)})`}>
                  <motion.g
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 2, opacity: 0 }}
                    transition={{ type: 'spring', bounce: 0.5, duration: 0.6 }}
                  >
                    <circle cx={0} cy={0} r={16} fill="rgba(251,191,36,0.15)" />
                    <circle cx={0} cy={0} r={10} fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3 2" />
                    <polygon points="0,-10 3,-3 10,-3 4,2 7,9 0,5 -7,9 -4,2 -10,-3 -3,-3" fill="#fbbf24" style={{ filter: 'drop-shadow(0 0 6px #fbbf24)' }} />
                  </motion.g>
                </g>

                {feedback === 'correct' && (
                  <g key="explosion" transform={`translate(${mapX(target.x)}, ${mapY(target.y)})`}>
                    <motion.g
                      initial={{ scale: 0.5, opacity: 1 }}
                      animate={{ scale: 3, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <circle cx={0} cy={0} r={15} fill="#34d399" style={{ filter: 'drop-shadow(0 0 10px #34d399)' }} />
                    </motion.g>
                  </g>
                )}
              </AnimatePresence>

              {/* The Crosshair Selector - Inside SVG, but absolute positioned for Drag */}
              <motion.g
                drag
                dragConstraints={containerRef}
                dragElastic={0}
                dragMomentum={false}
                onDrag={(e, info) => {
                  if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect();
                    const x = info.point.x - rect.left;
                    const y = info.point.y - rect.top;
                    // Scale local container px to SVG coordinates (420px container vs 500px SVG)
                    const svgX = (x / rect.width) * svgSize;
                    const svgY = (y / rect.height) * svgSize;
                    const gridX = unmapX(svgX);
                    const gridY = unmapY(svgY);
                    if (gridX !== currentPos.x || gridY !== currentPos.y) {
                      setCurrentPos({ x: gridX, y: gridY });
                    }
                  }
                }}
                onDragEnd={() => {
                   // Ensure it snaps visually to the integer position
                }}
                animate={{
                  x: mapX(currentPos.x),
                  y: mapY(currentPos.y)
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                style={{ cursor: 'grab' }}
                whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
              >
                {/* Visual of the Crosshair */}
                <circle r="20" fill="rgba(34, 211, 238, 0.1)" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="1" />
                <line x1="-15" y1="0" x2="15" y2="0" stroke="#22d3ee" strokeWidth="2" />
                <line x1="0" y1="-15" x2="0" y2="15" stroke="#22d3ee" strokeWidth="2" />
                <rect x="-2" y="-2" width="4" height="4" fill="#22d3ee" />
                
                {/* Current Coordinates Label above crosshair */}
                <g transform="translate(0, -30)">
                  <rect x="-25" y="-12" width="50" height="20" rx="4" fill="rgba(15, 23, 42, 0.8)" />
                  <text textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold" dy="2">
                    {currentPos.x}, {currentPos.y}
                  </text>
                </g>
              </motion.g>
            </svg>
          </div>

          <div className="w-full max-w-[400px] flex flex-col gap-4">
            <div className="flex justify-between items-center bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">
              <div className="flex flex-col">
                <span className="text-slate-400 text-xs uppercase font-bold">{t.currentPos}</span>
                <span className="text-2xl font-mono text-cyan-400">X: {currentPos.x} Y: {currentPos.y}</span>
              </div>
              <button 
                onClick={handleSubmit}
                disabled={!!feedback}
                className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 disabled:text-slate-500 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-cyan-500/20 active:scale-95 h-[52px]"
              >
                {t.lockOn}
              </button>
            </div>

            {/* Feedback Text Overlay */}
            <div className="h-8 flex items-center justify-center">
              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`text-xl font-bold tracking-widest ${feedback === 'correct' ? 'text-emerald-400' : 'text-red-400'}`}
                  >
                    {feedback === 'correct' ? t.correct : t.wrong}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}

      {gameState === 'end' && (
        <div className="flex-1 flex flex-col items-center justify-center z-10">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center bg-slate-800 p-10 rounded-2xl border border-slate-700 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <h2 className="text-3xl font-bold text-slate-200 mb-2">{t.gameOver}</h2>
            <div className="text-5xl font-mono text-cyan-400 mb-8 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              {score} {t.score}
            </div>
            <div className="flex flex-col gap-3">
              <button 
                onClick={startGame}
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(8,145,178,0.3)] transition-all"
              >
                {t.playAgain}
              </button>
              {onDone && (
                <button 
                  onClick={() => onDone(score)}
                  className="text-slate-400 hover:text-white uppercase text-sm font-bold tracking-widest mt-2 transition-colors"
                >
                  {t.next}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}
