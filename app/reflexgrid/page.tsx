"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Trophy, Timer, AlertTriangle, X } from "lucide-react";
import Link from "next/link";
import ResultCard from "@/components/ResultCard";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";

type CellState = "idle" | "green" | "red" | "gold";
type GameState = "countdown" | "playing" | "result" | "reward";

const GRID_SIZE = 4;
const GAME_DURATION = 60;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;

export default function ReflexGridPage() {
  const [gameState, setGameState] = useState<GameState>("playing");
  const [countdown, setCountdown] = useState(0);
  const [grid, setGrid] = useState<CellState[]>(Array(TOTAL_CELLS).fill("idle"));
  const [score, setScore] = useState(0);
  const [cardSaved, setCardSaved] = useState(false);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [tappedCells, setTappedCells] = useState<Set<number>>(new Set());
  const [rippleCell, setRippleCell] = useState<number | null>(null);
  const [shakeCell, setShakeCell] = useState<number | null>(null);
  const [combo, setCombo] = useState(0);
  const [comboDisplay, setComboDisplay] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const spawnRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const comboTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Countdown
  useEffect(() => {
    if (gameState !== "countdown") return;
    if (countdown <= 0) {
      setGameState("playing");
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [gameState, countdown]);

  // Game timer
  useEffect(() => {
    if (gameState !== "playing") return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setGameState("reward");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [gameState]);

  // Save card when entering reward state
  useEffect(() => {
    if (gameState === "reward" && !cardSaved) {
      const total = score + 10;
      const rarity = calculateRarity(score, total, 0);
      saveCard({
        id: generateCardId(),
        game: "reflexgrid",
        theme: "general",
        rarity,
        score,
        total,
        date: new Date().toISOString(),
      });
      incrementTotalGames();
      setCardSaved(true);
    }
  }, [gameState, score, cardSaved]);

  // Difficulty
  const getDifficulty = useCallback(() => {
    const elapsed = GAME_DURATION - timeLeft;
    if (elapsed < 20) return { spawnRate: 800, greenChance: 0.85, maxActive: 3 };
    if (elapsed < 40) return { spawnRate: 550, greenChance: 0.7, maxActive: 5 };
    return { spawnRate: 350, greenChance: 0.55, maxActive: 7 };
  }, [timeLeft]);

  // Spawn cells
  useEffect(() => {
    if (gameState !== "playing") return;

    const spawn = () => {
      const diff = getDifficulty();

      setGrid((prev) => {
        const newGrid = [...prev];
        const activeCells = newGrid.filter((c) => c !== "idle").length;

        if (activeCells < diff.maxActive) {
          const idleCells = newGrid
            .map((state, i) => ({ state, i }))
            .filter((c) => c.state === "idle")
            .map((c) => c.i);

          if (idleCells.length > 0) {
            const cellIndex = idleCells[Math.floor(Math.random() * idleCells.length)];
            const roll = Math.random();
            if (roll < 0.05) {
              newGrid[cellIndex] = "gold"; // 5% chance gold cell (+5 points)
            } else {
              newGrid[cellIndex] = roll < (0.05 + diff.greenChance * 0.95) ? "green" : "red";
            }

            setTimeout(() => {
              setGrid((g) => {
                const updated = [...g];
                if (updated[cellIndex] !== "idle") {
                  updated[cellIndex] = "idle";
                }
                return updated;
              });
              setTappedCells((prev) => {
                const next = new Set(prev);
                next.delete(cellIndex);
                return next;
              });
            }, getDifficulty().spawnRate * 2.5);
          }
        }

        return newGrid;
      });

      spawnRef.current = setTimeout(spawn, getDifficulty().spawnRate);
    };

    spawnRef.current = setTimeout(spawn, 500);

    return () => {
      if (spawnRef.current) clearTimeout(spawnRef.current);
    };
  }, [gameState, getDifficulty]);

  const handleCellTap = (index: number) => {
    if (gameState !== "playing") return;
    if (tappedCells.has(index)) return;

    const cellState = grid[index];
    if (cellState === "idle") return;

    setTappedCells((prev) => new Set(prev).add(index));

    if (cellState === "green" || cellState === "gold") {
      const points = cellState === "gold" ? 5 : 1;
      const comboBonus = combo >= 5 ? 2 : combo >= 3 ? 1 : 0;
      setScore((s) => s + points + comboBonus);
      setCombo((c) => c + 1);
      setComboDisplay((c) => c + 1);
      // Reset combo timer
      if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
      comboTimerRef.current = setTimeout(() => {
        setCombo(0);
        setComboDisplay(0);
      }, 2000);
      setRippleCell(index);
      setTimeout(() => setRippleCell(null), 400);
    } else if (cellState === "red") {
      setScore((s) => Math.max(0, s - 3));
      setCombo(0);
      setComboDisplay(0);
      setShakeCell(index);
      setTimeout(() => setShakeCell(null), 400);
    }

    setGrid((prev) => {
      const newGrid = [...prev];
      newGrid[index] = "idle";
      return newGrid;
    });
  };

  const handlePlayAgain = () => {
    setGrid(Array(TOTAL_CELLS).fill("idle"));
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setTappedCells(new Set());
    setCardSaved(false);
    setCombo(0);
    setComboDisplay(0);
    setGameState("playing");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Countdown */}
      <AnimatePresence>
        {gameState === "countdown" && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg"
            exit={{ opacity: 0 }}
          >
            <motion.div
              key={countdown}
              className="text-8xl font-black text-neon-blue"
              style={{ textShadow: "0 0 30px rgba(0,212,255,0.6)" }}
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {countdown > 0 ? countdown : (
                <Zap size={80} className="text-neon-blue" style={{ filter: "drop-shadow(0 0 20px rgba(0,212,255,0.6))" }} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HUD */}
      {gameState === "playing" && (
        <div className="fixed top-0 left-0 right-0 z-40 p-4">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {/* Close button */}
            <Link href="/">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 cursor-pointer hover:bg-black/60 transition-colors">
                <X size={16} className="text-white/60" />
              </div>
            </Link>

            {/* Timer */}
            <motion.div
              className={`flex items-center gap-1.5 text-xl font-black font-mono ${
                timeLeft <= 10 ? "text-neon-pink animate-pulse-fast" : "text-neon-blue"
              }`}
            >
              {timeLeft <= 10 ? (
                <AlertTriangle size={18} style={{ filter: "drop-shadow(0 0 8px rgba(255,45,120,0.6))" }} />
              ) : (
                <Timer size={18} />
              )}
              {timeLeft}s
            </motion.div>

            {/* Combo */}
            {comboDisplay >= 3 && (
              <motion.div
                className="flex items-center gap-1 text-neon-pink font-black text-sm"
                key={comboDisplay}
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                x{comboDisplay}
              </motion.div>
            )}

            {/* Score */}
            <motion.div
              className="flex items-center gap-1.5 text-gold font-bold text-xl"
              key={score}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 0.2 }}
            >
              <Trophy size={18} className="text-gold" />
              {score}
            </motion.div>
          </div>

          {/* Difficulty indicator */}
          <div className="flex justify-center mt-2">
            <div className="flex gap-1">
              {[1, 2, 3].map((level) => {
                const elapsed = GAME_DURATION - timeLeft;
                const active = elapsed < 20 ? 1 : elapsed < 40 ? 2 : 3;
                return (
                  <div
                    key={level}
                    className={`w-8 h-1 rounded-full transition-colors ${
                      level <= active ? "bg-neon-pink" : "bg-white/10"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      {gameState === "playing" && (
        <div className="grid grid-cols-4 gap-3 w-full max-w-xs sm:max-w-sm">
          {grid.map((cellState, i) => (
            <motion.button
              key={i}
              className={`aspect-square rounded-xl border transition-all flex items-center justify-center ${
                cellState === "green"
                  ? "bg-neon-green/15 border-neon-green/60"
                  : cellState === "gold"
                  ? "bg-gold/15 border-gold/60"
                  : cellState === "red"
                  ? "bg-neon-pink/15 border-neon-pink/60"
                  : "bg-card border-white/5"
              }`}
              style={
                cellState === "green"
                  ? { boxShadow: "0 0 15px rgba(0,255,136,0.3), inset 0 0 15px rgba(0,255,136,0.1)" }
                  : cellState === "gold"
                  ? { boxShadow: "0 0 20px rgba(255,215,0,0.4), inset 0 0 20px rgba(255,215,0,0.15)" }
                  : cellState === "red"
                  ? { boxShadow: "0 0 15px rgba(255,45,120,0.3), inset 0 0 15px rgba(255,45,120,0.1)" }
                  : undefined
              }
              onClick={() => handleCellTap(i)}
              animate={
                shakeCell === i
                  ? { x: [-3, 3, -3, 3, 0] }
                  : rippleCell === i
                  ? { scale: [1, 1.15, 1] }
                  : cellState !== "idle"
                  ? { opacity: [0.6, 1, 0.6] }
                  : {}
              }
              transition={
                cellState !== "idle"
                  ? { repeat: Infinity, duration: 0.5 }
                  : { duration: 0.2 }
              }
              whileTap={{ scale: 0.9 }}
            >
              {cellState === "gold" && (
                <span className="text-gold text-lg font-black" style={{ textShadow: "0 0 8px rgba(255,215,0,0.6)" }}>+5</span>
              )}
            </motion.button>
          ))}
        </div>
      )}

      {/* Reward - shows FIRST */}
      {gameState === "reward" && (
        <RewardReveal
          rarity={calculateRarity(score, score + 10, 0)}
          game="reflexgrid"
          score={score}
          total={score + 10}
          onDone={() => setGameState("result")}
        />
      )}

      {/* Result - shows AFTER reward */}
      {gameState === "result" && (
        <>
          <ResultCard
            score={score}
            total={score + 10}
            time={GAME_DURATION}
            gameName="Reflex Grid"
            gameIcon={<Zap size={24} className="text-neon-blue" />}
            onPlayAgain={handlePlayAgain}
          />
          <MilestonePopup />
        </>
      )}
    </main>
  );
}
