"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResultCard from "@/components/ResultCard";

type CellState = "idle" | "green" | "red";
type GameState = "countdown" | "playing" | "result";

const GRID_SIZE = 4;
const GAME_DURATION = 60;
const TOTAL_CELLS = GRID_SIZE * GRID_SIZE;

export default function ReflexGridPage() {
  const [gameState, setGameState] = useState<GameState>("countdown");
  const [countdown, setCountdown] = useState(3);
  const [grid, setGrid] = useState<CellState[]>(Array(TOTAL_CELLS).fill("idle"));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [tappedCells, setTappedCells] = useState<Set<number>>(new Set());
  const [rippleCell, setRippleCell] = useState<number | null>(null);
  const [shakeCell, setShakeCell] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const spawnRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
          setGameState("result");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [gameState]);

  // Difficulty based on time elapsed
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
          // Find idle cells
          const idleCells = newGrid
            .map((state, i) => ({ state, i }))
            .filter((c) => c.state === "idle")
            .map((c) => c.i);

          if (idleCells.length > 0) {
            const cellIndex = idleCells[Math.floor(Math.random() * idleCells.length)];
            newGrid[cellIndex] = Math.random() < diff.greenChance ? "green" : "red";

            // Auto-disappear after a delay
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

    if (cellState === "green") {
      setScore((s) => s + 1);
      setRippleCell(index);
      setTimeout(() => setRippleCell(null), 400);
    } else if (cellState === "red") {
      setScore((s) => Math.max(0, s - 3));
      setShakeCell(index);
      setTimeout(() => setShakeCell(null), 400);
    }

    // Remove cell after tap
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
    setCountdown(3);
    setGameState("countdown");
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
            <motion.span
              key={countdown}
              className="text-8xl font-black text-neon-blue text-glow-blue"
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {countdown > 0 ? countdown : "⚡"}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HUD */}
      {gameState === "playing" && (
        <div className="fixed top-0 left-0 right-0 z-40 p-4">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {/* Timer */}
            <motion.div
              className={`text-2xl font-black font-mono ${
                timeLeft <= 10
                  ? "text-neon-pink animate-pulse-fast"
                  : "text-neon-blue"
              }`}
            >
              ⏱ {timeLeft}
            </motion.div>

            {/* Score */}
            <motion.div
              className="text-2xl font-black text-gold"
              key={score}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.2 }}
            >
              {score} 🏆
            </motion.div>
          </div>
        </div>
      )}

      {/* Grid */}
      {gameState === "playing" && (
        <div className="grid grid-cols-4 gap-3 w-full max-w-xs sm:max-w-sm">
          {grid.map((cellState, i) => (
            <motion.button
              key={i}
              className={`aspect-square rounded-xl border-2 transition-all ${
                cellState === "green"
                  ? "bg-neon-green/20 border-neon-green glow-green"
                  : cellState === "red"
                  ? "bg-neon-pink/20 border-neon-pink glow-pink"
                  : "bg-card border-white/5"
              }`}
              onClick={() => handleCellTap(i)}
              animate={
                shakeCell === i
                  ? { x: [-3, 3, -3, 3, 0] }
                  : rippleCell === i
                  ? { scale: [1, 1.15, 1] }
                  : cellState !== "idle"
                  ? { opacity: [0.7, 1, 0.7] }
                  : {}
              }
              transition={
                cellState !== "idle"
                  ? { repeat: Infinity, duration: 0.6 }
                  : { duration: 0.2 }
              }
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}

      {/* Result */}
      {gameState === "result" && (
        <ResultCard
          score={score}
          total={score + 10}
          time={GAME_DURATION}
          gameName="Reflex Grid"
          gameIcon="⚡"
          onPlayAgain={handlePlayAgain}
        />
      )}
    </main>
  );
}
