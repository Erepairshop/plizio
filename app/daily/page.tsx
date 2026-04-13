"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Trophy, CheckCircle, XCircle, ArrowUp, Flame, Lock, X } from "lucide-react";
import Link from "next/link";
import ResultCard from "@/components/ResultCard";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import generalData from "@/data/quickpick/general.json";
import kpopData from "@/data/quickpick/kpop.json";
import footballData from "@/data/quickpick/football.json";
import animeData from "@/data/quickpick/anime.json";

interface Question {
  itemA: string;
  valueA: number;
  itemB: string;
  valueB: number;
  unit: string;
}

type GameState = "intro" | "countdown" | "playing" | "reveal" | "result" | "reward" | "already-played";

function formatNumber(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

// Seeded random for deterministic daily questions
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function getDailyQuestions(): Question[] {
  const allQuestions = [
    ...(generalData as Question[]),
    ...(kpopData as Question[]),
    ...(footballData as Question[]),
    ...(animeData as Question[]),
  ];

  const dayIndex = Math.floor(Date.now() / 86400000);
  const rng = seededRandom(dayIndex);

  // Shuffle with seeded random
  const shuffled = [...allQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, 10);
}

function getDailyKey(): string {
  return `plizio_daily_${Math.floor(Date.now() / 86400000)}`;
}

function hasPlayedToday(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(getDailyKey()) !== null;
}

function getDailyResult(): { score: number; total: number } | null {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem(getDailyKey());
  return data ? JSON.parse(data) : null;
}

function saveDailyResult(score: number, total: number): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(getDailyKey(), JSON.stringify({ score, total }));
}

const TOTAL_ROUNDS = 10;

export default function DailyChallengePage() {
  const [gameState, setGameState] = useState<GameState>("intro");
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

  useEffect(() => {
    const qs = getDailyQuestions();
    setQuestions(qs);

    if (hasPlayedToday()) {
      setGameState("already-played");
    }
  }, []);

  const startGame = () => {
    if (hasPlayedToday()) {
      setGameState("already-played");
      return;
    }
    setGameState("countdown");
  };

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

    setGameState("reveal");
    setAnimatedValueA(0);
    setAnimatedValueB(0);
    animateValue(q.valueA, setAnimatedValueA);
    animateValue(q.valueB, setAnimatedValueB);

    setTimeout(() => {
      if (round + 1 >= TOTAL_ROUNDS) {
        const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
        setTotalTime(elapsed);
        const finalScore = score + (correct ? 1 : 0);
        saveDailyResult(finalScore, TOTAL_ROUNDS);
        const rarity = calculateRarity(finalScore, TOTAL_ROUNDS, 0);
        saveCard({
          id: generateCardId(),
          game: "daily",
          theme: "daily",
          rarity,
          score: finalScore,
          total: TOTAL_ROUNDS,
          date: new Date().toISOString(),
        });
        setGameState("reward");
      } else {
        setRound((r) => r + 1);
        setPicked(null);
        setIsCorrect(null);
        setGameState("playing");
      }
    }, 1800);
  };

  const currentQ = questions[round];

  // Already played today
  if (gameState === "already-played") {
    const result = getDailyResult();
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4 gap-6">
        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Lock size={48} className="text-white/20" />
          <div className="flex items-center gap-2">
            <Calendar size={20} className="text-gold" style={{ filter: "drop-shadow(0 0 8px rgba(255,215,0,0.4))" }} />
            <span className="text-gold font-bold text-lg">
              {result ? `${result.score}/${result.total}` : ""}
            </span>
          </div>
          <motion.div
            className="text-white/20 text-xs flex items-center gap-1.5"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Calendar size={12} />
            24h
          </motion.div>
        </motion.div>
      </main>
    );
  }

  // Intro screen
  if (gameState === "intro") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4 gap-8">
        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Calendar
              size={48}
              className="text-gold"
              style={{ filter: "drop-shadow(0 0 15px rgba(255,215,0,0.5))" }}
            />
          </motion.div>

          <span className="text-xs font-bold tracking-[0.2em] text-gold/60 uppercase">
            {new Date().toLocaleDateString("en", { month: "short", day: "numeric" })}
          </span>
        </motion.div>

        <motion.button
          onClick={startGame}
          className="bg-card border-2 border-gold/30 px-8 py-4 rounded-2xl flex items-center gap-3"
          style={{ boxShadow: "0 0 25px rgba(255,215,0,0.15)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05, borderColor: "rgba(255,215,0,0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <Flame size={24} className="text-gold" style={{ filter: "drop-shadow(0 0 8px rgba(255,215,0,0.4))" }} />
          <span className="text-gold font-bold tracking-wider text-sm">GO</span>
        </motion.button>
      </main>
    );
  }

  if (!currentQ && gameState !== "result" && gameState !== "reward") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <Calendar size={40} className="text-gold" />
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
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg gap-6"
            exit={{ opacity: 0 }}
          >
            <motion.div
              key={countdown}
              className="text-8xl font-black text-gold"
              style={{ textShadow: "0 0 30px rgba(255,215,0,0.6)" }}
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {countdown > 0 ? countdown : (
                <Calendar size={80} className="text-gold" style={{ filter: "drop-shadow(0 0 20px rgba(255,215,0,0.6))" }} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HUD */}
      {(gameState === "playing" || gameState === "reveal") && (
        <div className="fixed top-0 left-0 right-0 z-40 p-4">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {/* Close button */}
            <Link href="/">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 cursor-pointer hover:bg-black/60 transition-colors">
                <X size={16} className="text-white/60" />
              </div>
            </Link>

            <div className="flex gap-1.5">
              {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
                <motion.div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < round
                      ? "bg-neon-green"
                      : i === round
                      ? "bg-gold"
                      : "bg-white/15"
                  }`}
                  animate={i === round ? { scale: [1, 1.4, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 1 }}
                />
              ))}
            </div>

            <motion.div
              className="flex items-center gap-1.5 text-gold font-bold text-lg"
              key={score}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 0.2 }}
            >
              <Trophy size={16} className="text-gold" />
              {score}
            </motion.div>
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
                : "border-white/5 hover:border-gold/30"
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
            {gameState === "playing" && (
              <ArrowUp size={16} className="text-white/20" />
            )}
            <span className="text-xl sm:text-2xl text-center leading-tight font-medium">
              {currentQ.itemA}
            </span>
            <AnimatePresence>
              {gameState === "reveal" && (
                <motion.div
                  className="text-2xl font-black text-gold"
                  style={{ textShadow: "0 0 10px rgba(255,215,0,0.4)" }}
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
            <motion.div
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-xs font-black text-white/30">VS</span>
            </motion.div>
          </div>

          {/* Item B */}
          <motion.button
            className={`flex-1 bg-card rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-4 border-2 transition-colors ${
              gameState === "reveal" && picked === "B"
                ? isCorrect
                  ? "border-neon-green glow-green"
                  : "border-neon-pink glow-pink"
                : "border-white/5 hover:border-gold/30"
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
            {gameState === "playing" && (
              <ArrowUp size={16} className="text-white/20" />
            )}
            <span className="text-xl sm:text-2xl text-center leading-tight font-medium">
              {currentQ.itemB}
            </span>
            <AnimatePresence>
              {gameState === "reveal" && (
                <motion.div
                  className="text-2xl font-black text-gold"
                  style={{ textShadow: "0 0 10px rgba(255,215,0,0.4)" }}
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

      {/* Feedback */}
      <AnimatePresence>
        {gameState === "reveal" && isCorrect !== null && (
          <motion.div
            className="fixed bottom-10 left-0 right-0 flex justify-center z-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {isCorrect ? (
              <CheckCircle size={48} className="text-neon-green" style={{ filter: "drop-shadow(0 0 15px rgba(0,255,136,0.6))" }} />
            ) : (
              <XCircle size={48} className="text-neon-pink" style={{ filter: "drop-shadow(0 0 15px rgba(255,45,120,0.6))" }} />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reward */}
      {gameState === "reward" && (
        <RewardReveal
          rarity={calculateRarity(score, TOTAL_ROUNDS, 0)}
          game="daily"
          score={score}
          total={TOTAL_ROUNDS}
          onDone={() => setGameState("result")}
        />
      )}

      {/* Result */}
      {gameState === "result" && (
        <ResultCard
          score={score}
          total={TOTAL_ROUNDS}
          time={totalTime}
          gameName="Daily"
          gameIcon={<Calendar size={24} className="text-gold" />}
          onPlayAgain={() => {
            // Can't replay daily - go home
            window.location.href = "/";
          }}
        />
      )}
    </main>
  );
}
