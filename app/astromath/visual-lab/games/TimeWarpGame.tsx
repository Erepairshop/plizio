import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TimeWarpGameProps {
  grade: number;
  lang: 'de' | 'hu' | 'ro' | 'en';
  onDone?: (score: number) => void;
}

const DICT = {
  de: {
    title: 'Zeitkrümmung',
    target: 'Zielzeit:',
    score: 'Punkte:',
    gameOver: 'Spiel vorbei!',
    finalScore: 'Endergebnis:',
    playAgain: 'Nochmal spielen',
  },
  hu: {
    title: 'Időhajlítás',
    target: 'Cél idő:',
    score: 'Pontszám:',
    gameOver: 'Játék vége!',
    finalScore: 'Végső pontszám:',
    playAgain: 'Újra',
  },
  ro: {
    title: 'Deformarea Timpului',
    target: 'Timp țintă:',
    score: 'Scor:',
    gameOver: 'Joc terminat!',
    finalScore: 'Scor final:',
    playAgain: 'Joacă din nou',
  },
  en: {
    title: 'Time Warp',
    target: 'Target Time:',
    score: 'Score:',
    gameOver: 'Game Over!',
    finalScore: 'Final Score:',
    playAgain: 'Play Again',
  },
};

const formatTime = (h: number, m: number) => {
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
};

interface ClockData {
  id: number;
  h: number;
  m: number;
  startY: number;
  duration: number;
}

const AnalogClock = ({ hours, minutes, size = 100, onClick }: { hours: number; minutes: number; size?: number; onClick?: () => void }) => {
  const center = size / 2;
  const radius = size * 0.45;
  const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
  const minuteAngle = minutes * 6;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick?.();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${hours}:${minutes.toString().padStart(2, '0')}`}
      className="w-[88px] sm:w-[120px] h-auto cursor-pointer drop-shadow-[0_0_10px_rgba(79,209,197,0.6)] hover:drop-shadow-[0_0_20px_rgba(246,224,94,0.8)] transition-all"
    >
      <circle cx={center} cy={center} r={radius} fill="#111827" stroke="#06b6d4" strokeWidth="4" />
      
      {/* Ticks */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const isHour = i % 3 === 0;
        const tickLength = isHour ? 12 : 6;
        const x1 = center + (radius - tickLength) * Math.cos(angle);
        const y1 = center + (radius - tickLength) * Math.sin(angle);
        const x2 = center + radius * Math.cos(angle);
        const y2 = center + radius * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={isHour ? "#22d3ee" : "#0891b2"}
            strokeWidth={isHour ? "3" : "2"}
          />
        );
      })}

      {/* Minute Hand */}
      <line
        x1={center}
        y1={center}
        x2={center + (radius * 0.75) * Math.cos((minuteAngle - 90) * (Math.PI / 180))}
        y2={center + (radius * 0.75) * Math.sin((minuteAngle - 90) * (Math.PI / 180))}
        stroke="#94a3b8"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Hour Hand */}
      <line
        x1={center}
        y1={center}
        x2={center + (radius * 0.5) * Math.cos((hourAngle - 90) * (Math.PI / 180))}
        y2={center + (radius * 0.5) * Math.sin((hourAngle - 90) * (Math.PI / 180))}
        stroke="#fde047"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Center dot */}
      <circle cx={center} cy={center} r="4" fill="#ec4899" />
    </svg>
  );
};

export default function TimeWarpGame({ grade, lang, onDone }: TimeWarpGameProps) {
  const t = DICT[lang] || DICT.en;

  const [score, setScore] = useState(0);
  const [targetTime, setTargetTime] = useState<{ h: number; m: number }>({ h: 12, m: 0 });
  const [clocks, setClocks] = useState<ClockData[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const maxCorrect = Math.max(1, grade); // K1=1, K8=8

  const nextId = useRef(0);
  const stateRef = useRef({ targetTime, gameOver, gameWon });
  const stars = useMemo(() => Array.from({ length: 50 }, (_, i) => ({
    size: `${(i % 3) + 1}px`,
    top: `${(i * 47) % 100}%`,
    left: `${(i * 83) % 100}%`,
    opacity: 0.2 + (i % 5) * 0.15,
  })), []);

  useEffect(() => {
    stateRef.current = { targetTime, gameOver, gameWon };
  }, [targetTime, gameOver, gameWon]);

  const generateTime = useCallback(() => {
    // An analogue face cannot distinguish 1:00 from 13:00. Keeping the
    // generated hours in the 1-12 range prevents visually identical clocks
    // from being judged differently.
    const h = Math.floor(Math.random() * 12) + 1;
    let m = 0;
    if (grade <= 2) {
      m = 0;
    } else if (grade === 3) {
      m = Math.floor(Math.random() * 2) * 30; // 0 or 30
    } else if (grade === 4) {
      m = Math.floor(Math.random() * 12) * 5; // 0, 5, 10...
    } else {
      m = Math.floor(Math.random() * 60); // any minute
    }
    return { h, m };
  }, [grade]);

  const generateNewTarget = useCallback(() => {
    setTargetTime(generateTime());
  }, [generateTime]);

  const spawnClock = useCallback(() => {
    if (stateRef.current.gameOver || stateRef.current.gameWon) return;

    // 35% chance to spawn the correct target, otherwise random
    const isTarget = Math.random() < 0.35;
    const time = isTarget ? stateRef.current.targetTime : generateTime();

    if (!isTarget && time.h === stateRef.current.targetTime.h && time.m === stateRef.current.targetTime.m) {
      time.h = (time.h + 1) % 24; // prevent accidental matches
    }

    const clock: ClockData = {
      id: nextId.current++,
      h: time.h,
      m: time.m,
      startY: Math.random() * 50 + 10, // 10% to 60% — stays within game area
      duration: Math.random() * 8 + 12, // 12 to 20 seconds crossing time
    };

    setClocks(prev => prev.length >= 10 ? prev : [...prev, clock]);
  }, [generateTime]);

  useEffect(() => {
    if (gameOver || gameWon || !gameStarted) return;
    generateNewTarget();
  }, [gameOver, gameWon, gameStarted, generateNewTarget]);

  useEffect(() => {
    if (gameOver || gameWon || !gameStarted) return;
    
    // Initial spawn
    spawnClock();

    const intervalId = setInterval(() => {
      spawnClock();
    }, 2000); // spawn every 2 seconds

    return () => clearInterval(intervalId);
  }, [spawnClock, gameOver, gameWon, gameStarted]);

  const handleGameOver = useCallback(() => {
    setGameOver(true);
    setClocks([]); // Clear screen
  }, []);

  const handleClockClick = (clock: ClockData) => {
    if (gameOver) return;

    if (clock.h === targetTime.h && clock.m === targetTime.m) {
      // Correct!
      setScore(s => s + 10);
      setClocks(prev => prev.filter(c => c.id !== clock.id));
      setCorrectCount(c => {
        const next = c + 1;
        if (next >= maxCorrect) {
          setGameWon(true);
          setClocks([]);
        } else {
          generateNewTarget();
        }
        return next;
      });
    } else {
      // Wrong! Game over.
      handleGameOver();
    }
  };

  const handleClockEscape = (clock: ClockData) => {
    if (stateRef.current.gameOver || stateRef.current.gameWon) return;

    // If the escaped clock was the correct target, it's game over
    if (clock.h === stateRef.current.targetTime.h && clock.m === stateRef.current.targetTime.m) {
      handleGameOver();
    } else {
      // Otherwise just remove it from state
      setClocks(prev => prev.filter(c => c.id !== clock.id));
    }
  };

  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setGameWon(false);
    setCorrectCount(0);
    setClocks([]);
    setGameStarted(true);
    generateNewTarget();
  };

  return (
    <div className="relative w-full h-[calc(100dvh-2rem)] min-h-[420px] max-h-[600px] bg-gray-950 overflow-hidden font-mono rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)] border border-cyan-900/50 flex flex-col select-none">
      
      {/* Background Starfield Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Header UI */}
      <div className="relative z-10 flex justify-between items-center gap-2 p-3 sm:p-6 bg-gradient-to-b from-gray-900 to-transparent">
        <h1 className="text-sm sm:text-2xl font-black tracking-wide sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 uppercase drop-shadow-sm">
          {t.title}
        </h1>
        
        {gameStarted && !gameOver && (
          <div className="flex flex-col items-center">
            <span className="text-cyan-500 text-[10px] sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider mb-1">{t.target}</span>
            <div className="text-2xl sm:text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] bg-gray-800/80 px-3 sm:px-6 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border border-gray-700">
              {formatTime(targetTime.h, targetTime.m)}
            </div>
          </div>
        )}

        <div className="text-xs sm:text-xl font-bold text-emerald-400 bg-emerald-950/50 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-emerald-900/50 whitespace-nowrap">
          {t.score} {score}
        </div>
      </div>

      {/* Game Area */}
      <div className="relative flex-grow w-full">
        <AnimatePresence>
          {clocks.map(clock => (
            <motion.div
              key={clock.id}
              initial={{ x: -150 }}
              animate={{ x: '120vw' }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: clock.duration, ease: 'linear' }}
              onAnimationComplete={() => handleClockEscape(clock)}
              className="absolute left-0"
              style={{ top: `${clock.startY}%` }}
            >
              <div className="transform hover:scale-110 active:scale-95 transition-transform duration-150">
                <AnalogClock
                  hours={clock.h}
                  minutes={clock.m}
                  size={120}
                  onClick={() => handleClockClick(clock)}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Start / Game Over / Won Screens */}
      <AnimatePresence>
        {gameWon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-gray-950/85 backdrop-blur-sm"
          >
            <motion.h2 initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-4xl sm:text-6xl font-black text-emerald-400 mb-4 drop-shadow-[0_0_20px_rgba(52,211,153,0.6)]">
              ✓
            </motion.h2>
            <p className="px-4 text-center text-xl sm:text-3xl text-cyan-100 mb-6 sm:mb-10">{t.finalScore} <span className="text-white font-black">{score}</span></p>
            <button onClick={startGame} className="px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-black rounded-full text-base sm:text-xl uppercase tracking-wide sm:tracking-wider transition-all hover:scale-105 active:scale-95 mb-4">
              {t.playAgain}
            </button>
            {onDone && <button onClick={() => onDone(score)} className="text-gray-400 hover:text-white uppercase text-sm tracking-wider font-bold mt-2 transition-colors">{t.finalScore}</button>}
          </motion.div>
        )}

        {(!gameStarted || gameOver) && !gameWon && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-gray-950/80"
          >
            {gameOver ? (
              <>
                <motion.h2
                  initial={{ scale: 0.8, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  className="px-4 text-center text-3xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 mb-4 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                >
                  {t.gameOver}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="px-4 text-center text-xl sm:text-3xl text-cyan-100 mb-6 sm:mb-10"
                >
                  {t.finalScore} <span className="text-white font-black">{score}</span>
                </motion.p>
              </>
            ) : (
              <motion.h2
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="px-4 text-center text-3xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6 sm:mb-10 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              >
                {t.title}
              </motion.h2>
            )}

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(236,72,153,0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={startGame}
              className="px-7 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-lg sm:text-2xl font-bold rounded-2xl shadow-[0_0_15px_rgba(219,39,119,0.4)] transition-all"
            >
              {gameOver ? t.playAgain : (lang === 'de' ? 'Starten' : lang === 'hu' ? 'Indítás' : lang === 'ro' ? 'Start' : 'Start')}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
