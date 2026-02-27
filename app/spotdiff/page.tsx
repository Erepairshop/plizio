"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Trophy, Timer, CheckCircle, X } from "lucide-react";
import Link from "next/link";
import ResultCard from "@/components/ResultCard";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, updateStats } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";

type GameState = "ready" | "playing" | "found" | "result" | "reward";

const TOTAL_ROUNDS = 6;
const TIME_PER_ROUND = 20;
const GRID_SIZE = 5;

const EMOJI_SETS = [
  ["🍎", "🍊", "🍋", "🍇", "🍓", "🫐", "🍑", "🍒", "🥝", "🍌"],
  ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐸", "🦁"],
  ["⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🎱", "🏓", "🥏"],
  ["🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚒", "🛻"],
  ["🌸", "🌺", "🌻", "🌹", "🌷", "💐", "🌼", "🪻", "🌾", "🍀"],
  ["🎸", "🎹", "🥁", "🎺", "🎷", "🎻", "🪗", "🎤", "🎧", "🎵"],
  ["🏠", "🏢", "🏰", "🏛️", "⛪", "🕌", "🗼", "🏗️", "🏭", "🏟️"],
  ["✈️", "🚀", "🛸", "🚁", "⛵", "🚢", "🚂", "🚲", "🏍️", "🛵"],
];

interface RoundData {
  grid: string[];
  diffIndex: number;
  originalEmoji: string;
  changedEmoji: string;
}

function generateRound(roundNum: number): RoundData {
  const emojiSet = EMOJI_SETS[roundNum % EMOJI_SETS.length];
  const totalCells = GRID_SIZE * GRID_SIZE;

  // Build grid
  const grid: string[] = [];
  for (let i = 0; i < totalCells; i++) {
    grid.push(emojiSet[Math.floor(Math.random() * emojiSet.length)]);
  }

  // Pick a random cell to change
  const diffIndex = Math.floor(Math.random() * totalCells);
  const originalEmoji = grid[diffIndex];

  // Pick a different emoji
  let changedEmoji = originalEmoji;
  while (changedEmoji === originalEmoji) {
    changedEmoji = emojiSet[Math.floor(Math.random() * emojiSet.length)];
  }

  return { grid, diffIndex, originalEmoji, changedEmoji };
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

export default function SpotDiffPage() {
  const [gameState, setGameState] = useState<GameState>("ready");
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [roundData, setRoundData] = useState<RoundData | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_ROUND);
  const [totalTime, setTotalTime] = useState(0);
  const [streak, setStreak] = useState(0);
  const [foundIndex, setFoundIndex] = useState<number | null>(null);
  const startTimeRef = useRef(0);

  useEffect(() => { setStreak(getStreak()); }, []);

  const startGame = () => {
    setRound(0);
    setScore(0);
    setFoundIndex(null);
    startTimeRef.current = Date.now();
    const data = generateRound(0);
    setRoundData(data);
    setTimeLeft(TIME_PER_ROUND);
    setGameState("playing");
  };

  const nextRound = useCallback((currentRound: number, currentScore: number) => {
    if (currentRound + 1 >= TOTAL_ROUNDS) {
      const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
      setTotalTime(elapsed);
      const newStreak = updateStreak();
      setStreak(newStreak);
      const rarity = calculateRarity(currentScore, TOTAL_ROUNDS, newStreak);
      saveCard({
        id: generateCardId(),
        game: "spotdiff",
        rarity,
        score: currentScore,
        total: TOTAL_ROUNDS,
        date: new Date().toISOString(),
      });
      incrementTotalGames();
      updateStats({ highestStreak: newStreak });
      setGameState("reward");
    } else {
      setRound(currentRound + 1);
      setFoundIndex(null);
      const data = generateRound(currentRound + 1);
      setRoundData(data);
      setTimeLeft(TIME_PER_ROUND);
      setGameState("playing");
    }
  }, []);

  // Timer
  useEffect(() => {
    if (gameState !== "playing") return;
    if (timeLeft <= 0) {
      nextRound(round, score);
      return;
    }
    const t = setTimeout(() => setTimeLeft((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [gameState, timeLeft, round, score, nextRound]);

  const handleTap = (index: number) => {
    if (gameState !== "playing" || !roundData) return;
    if (index === roundData.diffIndex) {
      setFoundIndex(index);
      setScore((s) => s + 1);
      setGameState("found");
      setTimeout(() => nextRound(round, score + 1), 1200);
    }
  };

  const timerColor = timeLeft <= 3 ? "text-neon-pink" : timeLeft <= 7 ? "text-gold" : "text-white/60";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Ready */}
      {gameState === "ready" && (
        <motion.div className="flex flex-col items-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Search size={48} className="text-amber-400" style={{ filter: "drop-shadow(0 0 15px rgba(251,191,36,0.5))" }} />
          <h1 className="text-2xl font-black tracking-wider text-white">SPOT THE DIFF</h1>
          <p className="text-white/40 text-sm text-center max-w-xs">Find the ONE emoji that&apos;s different in the right grid!</p>
          <motion.button
            onClick={startGame}
            className="bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold px-8 py-3 rounded-2xl text-sm tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PLAY
          </motion.button>
        </motion.div>
      )}

      {/* HUD */}
      {(gameState === "playing" || gameState === "found") && (
        <div className="fixed top-0 left-0 right-0 z-40 p-4">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <Link href="/">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 cursor-pointer hover:bg-black/60 transition-colors">
                <X size={16} className="text-white/60" />
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i < round ? "bg-neon-green" : i === round ? "bg-amber-400" : "bg-white/15"}`} />
                ))}
              </div>
              <span className={`text-sm font-bold ${timerColor}`}>{timeLeft}s</span>
            </div>
            <div className="flex items-center gap-1.5 text-gold font-bold text-lg">
              <Trophy size={16} className="text-gold" />
              {score}
            </div>
          </div>
        </div>
      )}

      {/* Grids */}
      {(gameState === "playing" || gameState === "found") && roundData && (
        <div className="flex flex-col items-center gap-4 mt-12">
          <div className="text-white/30 text-xs font-bold tracking-widest">ORIGINAL</div>
          {/* Original grid */}
          <div className="grid grid-cols-5 gap-1 bg-card/50 border border-white/5 rounded-2xl p-2">
            {roundData.grid.map((emoji, i) => (
              <div key={i} className="w-12 h-12 flex items-center justify-center text-xl">
                {emoji}
              </div>
            ))}
          </div>

          <div className="text-amber-400/60 text-xs font-bold tracking-widest">TAP THE DIFFERENCE ↓</div>

          {/* Modified grid */}
          <div className="grid grid-cols-5 gap-1 bg-card/50 border border-amber-500/20 rounded-2xl p-2">
            {roundData.grid.map((emoji, i) => {
              const isDiff = i === roundData.diffIndex;
              const displayEmoji = isDiff ? roundData.changedEmoji : emoji;
              const isFound = foundIndex === i;
              return (
                <motion.button
                  key={i}
                  onClick={() => handleTap(i)}
                  className={`w-12 h-12 flex items-center justify-center text-xl rounded-lg transition-all ${
                    isFound
                      ? "bg-neon-green/20 ring-2 ring-neon-green"
                      : "hover:bg-white/5"
                  }`}
                  animate={isFound ? { scale: [1, 1.2, 1] } : {}}
                  disabled={gameState !== "playing"}
                >
                  {displayEmoji}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {gameState === "found" && (
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                <CheckCircle size={40} className="text-neon-green" style={{ filter: "drop-shadow(0 0 15px rgba(0,255,136,0.6))" }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {gameState === "reward" && (
        <RewardReveal
          rarity={calculateRarity(score, TOTAL_ROUNDS, streak)}
          game="spotdiff"
          score={score}
          total={TOTAL_ROUNDS}
          onDone={() => setGameState("result")}
        />
      )}

      {gameState === "result" && (
        <>
          <ResultCard
            score={score}
            total={TOTAL_ROUNDS}
            time={totalTime}
            gameName="Spot the Diff"
            gameIcon={<Search size={24} className="text-amber-400" />}
            onPlayAgain={() => setGameState("ready")}
          />
          <MilestonePopup />
        </>
      )}
    </main>
  );
}
