"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, Trophy, CheckCircle, XCircle, ArrowUp, Flame, Globe, Music, CircleDot } from "lucide-react";
import ResultCard from "@/components/ResultCard";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import generalData from "@/data/quickpick/general.json";
import kpopData from "@/data/quickpick/kpop.json";
import footballData from "@/data/quickpick/football.json";

const THEME_DATA: Record<string, Question[]> = {
  general: generalData as Question[],
  kpop: kpopData as Question[],
  football: footballData as Question[],
};

const THEMES = [
  { id: "general", icon: Globe, label: "GEN", color: "#00D4FF" },
  { id: "kpop", icon: Music, label: "K-POP", color: "#FF2D78" },
  { id: "football", icon: CircleDot, label: "GOAL", color: "#00FF88" },
];

interface Question {
  itemA: string;
  valueA: number;
  itemB: string;
  valueB: number;
  unit: string;
}

type GameState = "theme-select" | "countdown" | "playing" | "reveal" | "result" | "reward";

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

// Streak management
function getStreak(): number {
  if (typeof window === "undefined") return 0;
  const data = localStorage.getItem("plizio_streak");
  if (!data) return 0;
  const { count, lastDate } = JSON.parse(data);
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (lastDate === today) return count;
  if (lastDate === yesterday) return count;
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

const TOTAL_ROUNDS = 10;

export default function QuickPickPage() {
  const [gameState, setGameState] = useState<GameState>("theme-select");
  const [selectedTheme, setSelectedTheme] = useState("general");
  const [countdown, setCountdown] = useState(3);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [picked, setPicked] = useState<"A" | "B" | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [totalTime, setTotalTime] = useState(0);
  const [streak, setStreak] = useState(0);
  const startTimeRef = useRef<number>(0);
  const [animatedValueA, setAnimatedValueA] = useState(0);
  const [animatedValueB, setAnimatedValueB] = useState(0);

  useEffect(() => {
    setStreak(getStreak());
  }, []);

  const startGame = (themeId: string) => {
    setSelectedTheme(themeId);
    const data = THEME_DATA[themeId] || THEME_DATA.general;
    const shuffled = shuffleArray(data).slice(0, TOTAL_ROUNDS);
    setQuestions(shuffled);
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
        const newStreak = updateStreak();
        setStreak(newStreak);
        // Save card and show reward first
        const rarity = calculateRarity(score + (correct ? 1 : 0), TOTAL_ROUNDS, newStreak);
        saveCard({
          id: generateCardId(),
          game: "quickpick",
          theme: selectedTheme,
          rarity,
          score: score + (correct ? 1 : 0),
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

  const handlePlayAgain = () => {
    setRound(0);
    setScore(0);
    setPicked(null);
    setIsCorrect(null);
    setCountdown(3);
    setGameState("theme-select");
  };

  const currentQ = questions[round];

  if (!currentQ && gameState !== "result" && gameState !== "theme-select" && gameState !== "reward") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <Crosshair size={40} className="text-neon-pink" />
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Theme Select */}
      {gameState === "theme-select" && (
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Crosshair size={40} className="text-neon-pink" style={{ filter: "drop-shadow(0 0 15px rgba(255,45,120,0.5))" }} />

          <div className="flex gap-3">
            {THEMES.map((theme) => {
              const Icon = theme.icon;
              return (
                <motion.button
                  key={theme.id}
                  onClick={() => startGame(theme.id)}
                  className="bg-card border border-white/5 rounded-2xl p-5 flex flex-col items-center gap-2.5 w-24"
                  style={{ boxShadow: `0 0 0 0px ${theme.color}` }}
                  whileHover={{
                    scale: 1.08,
                    borderColor: `${theme.color}60`,
                    boxShadow: `0 0 20px ${theme.color}20`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={28} style={{ color: theme.color, filter: `drop-shadow(0 0 6px ${theme.color}40)` }} />
                  <span className="text-[10px] font-bold tracking-widest" style={{ color: theme.color }}>
                    {theme.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {streak > 0 && (
            <motion.div
              className="flex items-center gap-1.5 text-gold/50 text-sm font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Flame size={14} />
              {streak}
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Countdown */}
      <AnimatePresence>
        {gameState === "countdown" && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg gap-6"
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
                <Crosshair size={80} className="text-neon-pink" style={{ filter: "drop-shadow(0 0 20px rgba(255,45,120,0.6))" }} />
              )}
            </motion.div>

            {/* Streak display */}
            {streak > 0 && countdown === 3 && (
              <motion.div
                className="flex items-center gap-2 text-gold/60 text-sm font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Flame size={16} />
                {streak}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HUD */}
      {(gameState === "playing" || gameState === "reveal") && (
        <div className="fixed top-0 left-0 right-0 z-40 p-4">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {/* Progress dots */}
            <div className="flex gap-1.5">
              {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
                <motion.div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < round
                      ? "bg-neon-green"
                      : i === round
                      ? "bg-neon-blue"
                      : "bg-white/15"
                  }`}
                  animate={i === round ? { scale: [1, 1.4, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 1 }}
                />
              ))}
            </div>

            {/* Score */}
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
                : "border-white/5 hover:border-neon-blue/30"
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
            {/* Arrow indicator on hover */}
            {gameState === "playing" && (
              <ArrowUp size={16} className="text-white/20" />
            )}

            <span className="text-xl sm:text-2xl text-center leading-tight font-medium">
              {currentQ.itemA}
            </span>

            {/* Value reveal */}
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

          {/* VS divider */}
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
                : "border-white/5 hover:border-neon-blue/30"
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

      {/* Correct / Incorrect feedback */}
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

      {/* Reward Reveal - shows FIRST after game ends */}
      {gameState === "reward" && (
        <RewardReveal
          rarity={calculateRarity(score, TOTAL_ROUNDS, streak)}
          game="quickpick"
          score={score}
          total={TOTAL_ROUNDS}
          onDone={() => setGameState("result")}
        />
      )}

      {/* Result - shows AFTER reward */}
      {gameState === "result" && (
        <ResultCard
          score={score}
          total={TOTAL_ROUNDS}
          time={totalTime}
          gameName="Quick Pick"
          gameIcon={<Crosshair size={24} className="text-neon-pink" />}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </main>
  );
}

