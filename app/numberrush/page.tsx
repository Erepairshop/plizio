"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hash, Trophy, Timer, RotateCcw, X } from "lucide-react";
import Link from "next/link";
import ResultCard from "@/components/ResultCard";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, updateStats } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";

type GameState = "ready" | "playing" | "finished" | "reward" | "result";

const GRID_SIZE = 5;
const TOTAL = GRID_SIZE * GRID_SIZE;

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

function getScoreFromTime(seconds: number): number {
  if (seconds <= 15) return 10;
  if (seconds <= 25) return 9;
  if (seconds <= 35) return 8;
  if (seconds <= 45) return 7;
  if (seconds <= 55) return 6;
  if (seconds <= 70) return 5;
  if (seconds <= 90) return 4;
  if (seconds <= 120) return 3;
  return 2;
}

export default function NumberRushPage() {
  const [gameState, setGameState] = useState<GameState>("ready");
  const [grid, setGrid] = useState<number[]>([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const [wrongTap, setWrongTap] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const startRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setStreak(getStreak());
    const bt = localStorage.getItem("plizio_numberrush_best");
    if (bt) setBestTime(parseFloat(bt));
  }, []);

  const startGame = () => {
    const numbers = shuffleArray(Array.from({ length: TOTAL }, (_, i) => i + 1));
    setGrid(numbers);
    setNextNumber(1);
    setTapped(new Set());
    setWrongTap(null);
    setElapsed(0);
    startRef.current = Date.now();
    setGameState("playing");
    intervalRef.current = setInterval(() => {
      setElapsed(Math.round((Date.now() - startRef.current) / 100) / 10);
    }, 100);
  };

  const handleTap = (num: number, index: number) => {
    if (gameState !== "playing") return;
    if (num === nextNumber) {
      const newTapped = new Set(tapped);
      newTapped.add(index);
      setTapped(newTapped);
      setWrongTap(null);
      if (num === TOTAL) {
        // Game complete
        if (intervalRef.current) clearInterval(intervalRef.current);
        const finalTime = Math.round((Date.now() - startRef.current) / 100) / 10;
        setElapsed(finalTime);
        // Save best
        if (!bestTime || finalTime < bestTime) {
          setBestTime(finalTime);
          localStorage.setItem("plizio_numberrush_best", finalTime.toString());
        }
        const newStreak = updateStreak();
        setStreak(newStreak);
        const score = getScoreFromTime(finalTime);
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

  const score = getScoreFromTime(elapsed);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Ready */}
      {gameState === "ready" && (
        <motion.div className="flex flex-col items-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Hash size={48} className="text-cyan-400" style={{ filter: "drop-shadow(0 0 15px rgba(34,211,238,0.5))" }} />
          <h1 className="text-2xl font-black tracking-wider text-white">NUMBER RUSH</h1>
          <p className="text-white/40 text-sm text-center">Tap numbers 1 to 25 as fast as you can!</p>
          {bestTime && (
            <div className="text-gold/60 text-sm font-bold">Best: {bestTime.toFixed(1)}s</div>
          )}
          <motion.button
            onClick={startGame}
            className="bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold px-8 py-3 rounded-2xl text-sm tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PLAY
          </motion.button>
        </motion.div>
      )}

      {/* HUD */}
      {gameState === "playing" && (
        <div className="fixed top-0 left-0 right-0 z-40 p-4">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <Link href="/">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 cursor-pointer hover:bg-black/60 transition-colors">
                <X size={16} className="text-white/60" />
              </div>
            </Link>
            <div className="flex items-center gap-2 text-white/60 font-bold">
              <Timer size={16} />
              <span className="text-lg text-white tabular-nums">{elapsed.toFixed(1)}s</span>
            </div>
            <div className="text-neon-blue font-black text-lg">
              {nextNumber > TOTAL ? "DONE!" : `Next: ${nextNumber}`}
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      {gameState === "playing" && (
        <div className="grid grid-cols-5 gap-2 w-full max-w-xs mt-8">
          {grid.map((num, i) => {
            const isTapped = tapped.has(i);
            const isWrong = wrongTap === i;
            const isNext = num === nextNumber;
            return (
              <motion.button
                key={i}
                onClick={() => handleTap(num, i)}
                className={`aspect-square rounded-xl border-2 flex items-center justify-center text-lg font-black transition-all ${
                  isTapped
                    ? "border-neon-green/20 bg-neon-green/5 text-neon-green/20"
                    : isWrong
                    ? "border-neon-pink bg-neon-pink/20 text-neon-pink"
                    : isNext
                    ? "border-neon-blue/50 bg-neon-blue/10 text-neon-blue"
                    : "border-white/10 bg-card text-white/80 hover:border-white/20"
                }`}
                animate={isWrong ? { x: [-3, 3, -3, 3, 0] } : {}}
                transition={{ duration: 0.3 }}
                disabled={isTapped}
              >
                {isTapped ? "✓" : num}
              </motion.button>
            );
          })}
        </div>
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
