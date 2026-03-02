"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hash, Trophy, Timer, RotateCcw, X, Eye, EyeOff, Zap } from "lucide-react";
import Link from "next/link";
import ResultCard from "@/components/ResultCard";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, updateStats } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";

type GameState = "ready" | "memorize" | "playing" | "finished" | "reward" | "result";
type Difficulty = "easy" | "medium" | "hard" | "expert";

interface DifficultyConfig {
  label: string;
  cols: number;
  total: number;
  color: string;
  border: string;
  bg: string;
  memorizeTime: number; // seconds to show numbers before hiding in flash mode
}

const DIFFICULTIES: Record<Difficulty, DifficultyConfig> = {
  easy:   { label: "Easy",   cols: 3, total: 9,  color: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-emerald-500/20", memorizeTime: 4 },
  medium: { label: "Medium", cols: 4, total: 16, color: "text-cyan-400",    border: "border-cyan-500/40",    bg: "bg-cyan-500/20",    memorizeTime: 5 },
  hard:   { label: "Hard",   cols: 5, total: 25, color: "text-orange-400",  border: "border-orange-500/40",  bg: "bg-orange-500/20",  memorizeTime: 6 },
  expert: { label: "Expert", cols: 6, total: 36, color: "text-rose-400",    border: "border-rose-500/40",    bg: "bg-rose-500/20",    memorizeTime: 8 },
};

function shuffleArray<T>(arr: T[]): T[] {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

function getStreak(): number {
  if (typeof window === "undefined") return 0;
  const data = localStorage.getItem("plizio_streak");
  if (!data) return 0;
  const { count, lastDate } = JSON.parse(data);
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (lastDate === today || lastDate === yesterday) return count;
  return 0;
}

function updateStreak(): number {
  if (typeof window === "undefined") return 0;
  const data = localStorage.getItem("plizio_streak");
  const today = new Date().toDateString();
  if (data) {
    const { count, lastDate } = JSON.parse(data);
    if (lastDate === today) return count;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const newCount = lastDate === yesterday ? count + 1 : 1;
    localStorage.setItem("plizio_streak", JSON.stringify({ count: newCount, lastDate: today }));
    return newCount;
  }
  localStorage.setItem("plizio_streak", JSON.stringify({ count: 1, lastDate: today }));
  return 1;
}

// Score accounts for difficulty and flash mode
function getScoreFromTime(seconds: number, difficulty: Difficulty, flashMode: boolean): number {
  const multipliers: Record<Difficulty, number> = { easy: 1.6, medium: 1.3, hard: 1.0, expert: 0.75 };
  const flashBonus = flashMode ? 0.7 : 1.0; // flash = harder = lower time thresholds
  const adjusted = seconds * multipliers[difficulty] * flashBonus;
  if (adjusted <= 12) return 10;
  if (adjusted <= 20) return 9;
  if (adjusted <= 30) return 8;
  if (adjusted <= 42) return 7;
  if (adjusted <= 56) return 6;
  if (adjusted <= 72) return 5;
  if (adjusted <= 90) return 4;
  if (adjusted <= 115) return 3;
  return 2;
}

export default function NumberRushPage() {
  const [gameState, setGameState] = useState<GameState>("ready");
  const [difficulty, setDifficulty] = useState<Difficulty>("hard");
  const [flashMode, setFlashMode] = useState(false);
  const [grid, setGrid] = useState<number[]>([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const [wrongTap, setWrongTap] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestTimes, setBestTimes] = useState<Partial<Record<string, number>>>({});
  const [memorizeCountdown, setMemorizeCountdown] = useState(0);
  const [numbersVisible, setNumbersVisible] = useState(true);
  const startRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const memorizeRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const cfg = DIFFICULTIES[difficulty];
  const bestKey = `${difficulty}_${flashMode ? "flash" : "normal"}`;

  useEffect(() => {
    setStreak(getStreak());
    const stored = localStorage.getItem("plizio_numberrush_bests");
    if (stored) setBestTimes(JSON.parse(stored));
  }, []);

  const startGame = () => {
    const numbers = shuffleArray(Array.from({ length: cfg.total }, (_, i) => i + 1));
    setGrid(numbers);
    setNextNumber(1);
    setTapped(new Set());
    setWrongTap(null);
    setElapsed(0);
    setNumbersVisible(true);

    if (flashMode) {
      setMemorizeCountdown(cfg.memorizeTime);
      setGameState("memorize");

      let remaining = cfg.memorizeTime;
      memorizeRef.current = setInterval(() => {
        remaining -= 1;
        setMemorizeCountdown(remaining);
        if (remaining <= 0) {
          if (memorizeRef.current) clearInterval(memorizeRef.current);
          setNumbersVisible(false);
          setGameState("playing");
          startRef.current = Date.now();
          intervalRef.current = setInterval(() => {
            setElapsed(Math.round((Date.now() - startRef.current) / 100) / 10);
          }, 100);
        }
      }, 1000);
    } else {
      setGameState("playing");
      startRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        setElapsed(Math.round((Date.now() - startRef.current) / 100) / 10);
      }, 100);
    }
  };

  const handleTap = (num: number, index: number) => {
    if (gameState !== "playing") return;
    if (num === nextNumber) {
      const newTapped = new Set(tapped);
      newTapped.add(index);
      setTapped(newTapped);
      setWrongTap(null);
      if (num === cfg.total) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        const finalTime = Math.round((Date.now() - startRef.current) / 100) / 10;
        setElapsed(finalTime);
        const currentBest = bestTimes[bestKey];
        if (!currentBest || finalTime < currentBest) {
          const updated = { ...bestTimes, [bestKey]: finalTime };
          setBestTimes(updated);
          localStorage.setItem("plizio_numberrush_bests", JSON.stringify(updated));
        }
        const newStreak = updateStreak();
        setStreak(newStreak);
        const score = getScoreFromTime(finalTime, difficulty, flashMode);
        const rarity = calculateRarity(score, 10, newStreak);
        saveCard({
          id: generateCardId(),
          game: "numberrush",
          rarity,
          score,
          total: 10,
          date: new Date().toISOString(),
        });
        incrementTotalGames();
        updateStats({ highestStreak: newStreak });
        setGameState("reward");
      } else {
        setNextNumber(num + 1);
      }
    } else {
      setWrongTap(index);
      setTimeout(() => setWrongTap(null), 300);
    }
  };

  const score = getScoreFromTime(elapsed, difficulty, flashMode);

  // Grid max width based on cols
  const gridMaxW = cfg.cols === 3 ? "max-w-[220px]" : cfg.cols === 4 ? "max-w-[280px]" : cfg.cols === 5 ? "max-w-xs" : "max-w-sm";
  const fontSize = cfg.cols === 6 ? "text-base" : "text-lg";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative">

      {/* ── READY SCREEN ── */}
      {gameState === "ready" && (
        <motion.div
          className="flex flex-col items-center gap-6 w-full max-w-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Hash size={48} className="text-cyan-400" style={{ filter: "drop-shadow(0 0 15px rgba(34,211,238,0.5))" }} />
          <h1 className="text-2xl font-black tracking-wider text-white">NUMBER RUSH</h1>

          {/* Difficulty picker */}
          <div className="w-full">
            <p className="text-white/40 text-xs text-center mb-3 tracking-widest uppercase">Difficulty</p>
            <div className="grid grid-cols-4 gap-2">
              {(Object.entries(DIFFICULTIES) as [Difficulty, DifficultyConfig][]).map(([key, d]) => (
                <motion.button
                  key={key}
                  onClick={() => setDifficulty(key)}
                  className={`py-2 rounded-xl border text-xs font-bold transition-all ${
                    difficulty === key
                      ? `${d.bg} ${d.border} ${d.color}`
                      : "bg-white/5 border-white/10 text-white/40"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <div>{d.label}</div>
                  <div className="text-[10px] opacity-60 mt-0.5">{d.cols}×{d.cols}</div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Flash mode toggle */}
          <motion.button
            onClick={() => setFlashMode(f => !f)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl border transition-all ${
              flashMode
                ? "bg-yellow-500/20 border-yellow-500/50 text-yellow-300"
                : "bg-white/5 border-white/10 text-white/40"
            }`}
            whileTap={{ scale: 0.97 }}
          >
            <div className="flex items-center gap-2">
              {flashMode ? <EyeOff size={16} /> : <Eye size={16} />}
              <span className="font-bold text-sm">Flash Mode</span>
            </div>
            <div className="flex items-center gap-2">
              {flashMode && (
                <span className="text-xs opacity-70">Numbers hide after {cfg.memorizeTime}s</span>
              )}
              <div className={`w-10 h-5 rounded-full relative transition-all ${flashMode ? "bg-yellow-500" : "bg-white/10"}`}>
                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${flashMode ? "left-5" : "left-0.5"}`} />
              </div>
            </div>
          </motion.button>

          {/* Best time */}
          {bestTimes[bestKey] && (
            <div className="flex items-center gap-2 text-yellow-400/70 text-sm font-bold">
              <Trophy size={14} />
              <span>Best: {(bestTimes[bestKey] as number).toFixed(1)}s</span>
              <span className="text-white/20 font-normal">({cfg.label}{flashMode ? " · Flash" : ""})</span>
            </div>
          )}

          <motion.button
            onClick={startGame}
            className={`${cfg.bg} ${cfg.border} ${cfg.color} border font-bold px-10 py-3 rounded-2xl text-sm tracking-wider`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PLAY
          </motion.button>
        </motion.div>
      )}

      {/* ── MEMORIZE COUNTDOWN ── */}
      <AnimatePresence>
        {gameState === "memorize" && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-start pt-6 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 px-4 py-2 rounded-2xl text-sm font-bold"
              animate={{ scale: memorizeCountdown <= 2 ? [1, 1.08, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Eye size={14} />
              Memorize! Hiding in {memorizeCountdown}s
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HUD ── */}
      {(gameState === "playing" || gameState === "memorize") && (
        <div className="fixed top-0 left-0 right-0 z-40 p-4">
          <div className="flex items-center justify-between max-w-sm mx-auto">
            <Link href="/">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 cursor-pointer hover:bg-black/60 transition-colors">
                <X size={16} className="text-white/60" />
              </div>
            </Link>
            <div className="flex items-center gap-2 text-white/60 font-bold">
              <Timer size={16} />
              <span className="text-lg text-white tabular-nums">{elapsed.toFixed(1)}s</span>
            </div>
            <div className={`font-black text-lg ${cfg.color}`}>
              {gameState === "memorize"
                ? <span className="text-yellow-300 text-sm">👁 {memorizeCountdown}s</span>
                : nextNumber > cfg.total ? "DONE!" : `Next: ${nextNumber}`
              }
            </div>
          </div>
        </div>
      )}

      {/* ── GRID ── */}
      {(gameState === "playing" || gameState === "memorize") && (
        <div
          className={`grid gap-2 w-full ${gridMaxW} mt-8`}
          style={{ gridTemplateColumns: `repeat(${cfg.cols}, minmax(0, 1fr))` }}
        >
          {grid.map((num, i) => {
            const isTapped = tapped.has(i);
            const isWrong = wrongTap === i;
            const isNext = num === nextNumber;
            const isHidden = !numbersVisible && !isTapped;

            return (
              <motion.button
                key={i}
                onClick={() => handleTap(num, i)}
                className={`aspect-square rounded-xl border-2 flex items-center justify-center ${fontSize} font-black transition-all ${
                  isTapped
                    ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-400/30"
                    : isWrong
                    ? "border-rose-500 bg-rose-500/20 text-rose-400"
                    : isNext && !isHidden
                    ? `${cfg.border} ${cfg.bg} ${cfg.color}`
                    : isHidden
                    ? "border-white/8 bg-white/4 text-transparent"
                    : "border-white/10 bg-white/4 text-white/80 hover:border-white/20"
                }`}
                animate={isWrong ? { x: [-3, 3, -3, 3, 0] } : {}}
                transition={{ duration: 0.3 }}
                disabled={isTapped || gameState === "memorize"}
              >
                {isTapped ? (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-emerald-400/40"
                  >✓</motion.span>
                ) : isHidden ? (
                  <span className="w-2 h-2 rounded-full bg-white/10 block" />
                ) : (
                  num
                )}
              </motion.button>
            );
          })}
        </div>
      )}

      {/* Flash mode indicator during play */}
      {gameState === "playing" && flashMode && (
        <motion.div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-yellow-400/50 text-xs font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Zap size={12} />
          Flash Mode
        </motion.div>
      )}

      {gameState === "reward" && (
        <RewardReveal
          rarity={calculateRarity(score, 10, streak)}
          game="numberrush"
          score={score}
          total={10}
          onDone={() => setGameState("result")}
        />
      )}

      {gameState === "result" && (
        <>
          <ResultCard
            score={score}
            total={10}
            time={Math.round(elapsed)}
            gameName="Number Rush"
            gameIcon={<Hash size={24} className="text-cyan-400" />}
            onPlayAgain={() => setGameState("ready")}
          />
          <MilestonePopup />
        </>
      )}
    </main>
  );
}
