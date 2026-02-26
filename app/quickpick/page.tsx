"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResultCard from "@/components/ResultCard";
import generalData from "@/data/quickpick/general.json";

interface Question {
  itemA: string;
  valueA: number;
  itemB: string;
  valueB: number;
  unit: string;
}

type GameState = "countdown" | "playing" | "reveal" | "result";

function formatNumber(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const TOTAL_ROUNDS = 10;

export default function QuickPickPage() {
  const [gameState, setGameState] = useState<GameState>("countdown");
  const [countdown, setCountdown] = useState(3);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [picked, setPicked] = useState<"A" | "B" | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [totalTime, setTotalTime] = useState(0);
  const startTimeRef = useRef<number>(0);
  const [animatedValueA, setAnimatedValueA] = useState(0);
  const [animatedValueB, setAnimatedValueB] = useState(0);

  // Load questions
  useEffect(() => {
    const data = generalData as Question[];
    const shuffled = shuffleArray(data).slice(0, TOTAL_ROUNDS);
    setQuestions(shuffled);
  }, []);

  // Countdown
  useEffect(() => {
    if (gameState !== "countdown") return;
    if (countdown <= 0) {
      setGameState("playing");
      startTimeRef.current = Date.now();
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [gameState, countdown]);

  // Animate value counter
  const animateValue = useCallback(
    (target: number, setter: (v: number) => void) => {
      const duration = 800;
      const steps = 30;
      const increment = target / steps;
      let current = 0;
      let step = 0;
      const interval = setInterval(() => {
        step++;
        current = Math.min(current + increment, target);
        setter(Math.round(current));
        if (step >= steps) {
          setter(target);
          clearInterval(interval);
        }
      }, duration / steps);
    },
    []
  );

  const handlePick = (choice: "A" | "B") => {
    if (gameState !== "playing" || picked !== null) return;

    const q = questions[round];
    const correct =
      choice === "A" ? q.valueA >= q.valueB : q.valueB >= q.valueA;

    setPicked(choice);
    setIsCorrect(correct);
    if (correct) setScore((s) => s + 1);

    // Animate reveal
    setGameState("reveal");
    setAnimatedValueA(0);
    setAnimatedValueB(0);
    animateValue(q.valueA, setAnimatedValueA);
    animateValue(q.valueB, setAnimatedValueB);

    // Next round after delay
    setTimeout(() => {
      if (round + 1 >= TOTAL_ROUNDS) {
        const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
        setTotalTime(elapsed);
        setGameState("result");
      } else {
        setRound((r) => r + 1);
        setPicked(null);
        setIsCorrect(null);
        setGameState("playing");
      }
    }, 1800);
  };

  const handlePlayAgain = () => {
    const data = generalData as Question[];
    const shuffled = shuffleArray(data).slice(0, TOTAL_ROUNDS);
    setQuestions(shuffled);
    setRound(0);
    setScore(0);
    setPicked(null);
    setIsCorrect(null);
    setCountdown(3);
    setGameState("countdown");
  };

  const currentQ = questions[round];

  if (!currentQ && gameState !== "result") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          className="text-4xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          🎯
        </motion.div>
      </div>
    );
  }

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
              {countdown > 0 ? countdown : "🎯"}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress bar */}
      {(gameState === "playing" || gameState === "reveal") && (
        <div className="fixed top-0 left-0 right-0 z-40 p-4">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <div className="flex gap-1.5">
              {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
                <motion.div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i < round
                      ? "bg-neon-green"
                      : i === round
                      ? "bg-neon-blue"
                      : "bg-white/20"
                  }`}
                  animate={
                    i === round ? { scale: [1, 1.3, 1] } : {}
                  }
                  transition={{ repeat: Infinity, duration: 1 }}
                />
              ))}
            </div>
            <div className="text-gold font-bold text-lg">
              {score} 🏆
            </div>
          </div>
        </div>
      )}

      {/* Game area */}
      {(gameState === "playing" || gameState === "reveal") && currentQ && (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-lg">
          {/* Item A */}
          <motion.button
            className={`flex-1 bg-card rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-4 border-2 transition-colors ${
              gameState === "reveal" && picked === "A"
                ? isCorrect
                  ? "border-neon-green glow-green"
                  : "border-neon-pink glow-pink"
                : "border-transparent hover:border-neon-blue/30"
            }`}
            onClick={() => handlePick("A")}
            whileHover={gameState === "playing" ? { scale: 1.03 } : {}}
            whileTap={gameState === "playing" ? { scale: 0.97 } : {}}
            animate={
              gameState === "reveal" && picked === "A" && !isCorrect
                ? { x: [-5, 5, -5, 5, 0] }
                : {}
            }
            transition={{ duration: 0.3 }}
            disabled={gameState !== "playing"}
          >
            <span className="text-2xl sm:text-3xl text-center leading-tight">
              {currentQ.itemA}
            </span>
            <span className="text-lg opacity-60">{currentQ.unit}</span>

            {/* Value reveal */}
            <AnimatePresence>
              {gameState === "reveal" && (
                <motion.div
                  className="text-2xl font-black text-gold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formatNumber(animatedValueA)}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* VS */}
          <div className="flex items-center justify-center">
            <motion.span
              className="text-2xl font-black text-white/30"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              VS
            </motion.span>
          </div>

          {/* Item B */}
          <motion.button
            className={`flex-1 bg-card rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-4 border-2 transition-colors ${
              gameState === "reveal" && picked === "B"
                ? isCorrect
                  ? "border-neon-green glow-green"
                  : "border-neon-pink glow-pink"
                : "border-transparent hover:border-neon-blue/30"
            }`}
            onClick={() => handlePick("B")}
            whileHover={gameState === "playing" ? { scale: 1.03 } : {}}
            whileTap={gameState === "playing" ? { scale: 0.97 } : {}}
            animate={
              gameState === "reveal" && picked === "B" && !isCorrect
                ? { x: [-5, 5, -5, 5, 0] }
                : {}
            }
            transition={{ duration: 0.3 }}
            disabled={gameState !== "playing"}
          >
            <span className="text-2xl sm:text-3xl text-center leading-tight">
              {currentQ.itemB}
            </span>
            <span className="text-lg opacity-60">{currentQ.unit}</span>

            {/* Value reveal */}
            <AnimatePresence>
              {gameState === "reveal" && (
                <motion.div
                  className="text-2xl font-black text-gold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {formatNumber(animatedValueB)}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}

      {/* Correct / Incorrect flash */}
      <AnimatePresence>
        {gameState === "reveal" && isCorrect !== null && (
          <motion.div
            className="fixed bottom-10 left-0 right-0 flex justify-center z-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-5xl">
              {isCorrect ? "✅" : "❌"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Result */}
      {gameState === "result" && (
        <ResultCard
          score={score}
          total={TOTAL_ROUNDS}
          time={totalTime}
          gameName="Quick Pick"
          gameIcon="🎯"
          onPlayAgain={handlePlayAgain}
        />
      )}
    </main>
  );
}
