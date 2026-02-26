"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Trophy, CheckCircle, XCircle, Eye } from "lucide-react";
import ResultCard from "@/components/ResultCard";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import generalData from "@/data/memoryflash/general.json";

interface Answer {
  label: string;
  correct: boolean;
}

interface MemoryQuestion {
  scene: string[];
  showTime: number;
  question: string;
  answers: Answer[];
}

type GameState = "countdown" | "showing" | "asking" | "feedback" | "result" | "reward";

const TOTAL_ROUNDS = 5;

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function MemoryFlashPage() {
  const [gameState, setGameState] = useState<GameState>("countdown");
  const [countdown, setCountdown] = useState(3);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<MemoryQuestion[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [totalTime, setTotalTime] = useState(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const data = generalData as MemoryQuestion[];
    const shuffled = shuffleArray(data).slice(0, TOTAL_ROUNDS);
    setQuestions(shuffled);
  }, []);

  // Countdown
  useEffect(() => {
    if (gameState !== "countdown") return;
    if (countdown <= 0) {
      setGameState("showing");
      startTimeRef.current = Date.now();
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [gameState, countdown]);

  // Show scene then ask
  useEffect(() => {
    if (gameState !== "showing") return;
    if (!questions[round]) return;

    const timer = setTimeout(() => {
      setGameState("asking");
    }, questions[round].showTime);

    return () => clearTimeout(timer);
  }, [gameState, round, questions]);

  const handleAnswer = (answerIndex: number) => {
    if (gameState !== "asking" || selectedAnswer !== null) return;

    const q = questions[round];
    const correct = q.answers[answerIndex].correct;

    setSelectedAnswer(answerIndex);
    setIsCorrect(correct);
    if (correct) setScore((s) => s + (round + 1));
    setGameState("feedback");

    setTimeout(() => {
      if (round + 1 >= TOTAL_ROUNDS) {
        const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
        setTotalTime(elapsed);
        // Save card and show reward first
        const finalScore = score + (correct ? (round + 1) : 0);
        const ms = TOTAL_ROUNDS * (TOTAL_ROUNDS + 1) / 2;
        const rarity = calculateRarity(finalScore, ms, 0);
        saveCard({
          id: generateCardId(),
          game: "memoryflash",
          theme: "general",
          rarity,
          score: finalScore,
          total: ms,
          date: new Date().toISOString(),
        });
        setGameState("reward");
      } else {
        setRound((r) => r + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setGameState("showing");
      }
    }, 1200);
  };

  const handlePlayAgain = () => {
    const data = generalData as MemoryQuestion[];
    const shuffled = shuffleArray(data).slice(0, TOTAL_ROUNDS);
    setQuestions(shuffled);
    setRound(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCountdown(3);
    setGameState("countdown");
  };

  const maxScore = TOTAL_ROUNDS * (TOTAL_ROUNDS + 1) / 2;
  const currentQ = questions[round];

  if (!currentQ && gameState !== "result") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <Brain size={40} className="text-neon-purple" />
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
            <motion.div
              key={countdown}
              className="text-8xl font-black text-neon-purple"
              style={{ textShadow: "0 0 30px rgba(180,77,255,0.6)" }}
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {countdown > 0 ? countdown : (
                <Brain size={80} className="text-neon-purple" style={{ filter: "drop-shadow(0 0 20px rgba(180,77,255,0.6))" }} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HUD */}
      {gameState !== "countdown" && gameState !== "result" && (
        <div className="fixed top-0 left-0 right-0 z-40 p-4">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <div className="flex gap-2">
              {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
                <motion.div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i < round
                      ? "bg-neon-green"
                      : i === round
                      ? "bg-neon-purple"
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

      {/* Scene display */}
      {gameState === "showing" && currentQ && (
        <motion.div
          className="bg-card rounded-3xl p-8 sm:p-12 flex flex-col items-center gap-5 max-w-sm border border-white/5"
          style={{ boxShadow: "0 0 30px rgba(180,77,255,0.1)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
        >
          {/* Eye icon - memorize indicator */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Eye size={24} className="text-neon-purple" style={{ filter: "drop-shadow(0 0 8px rgba(180,77,255,0.5))" }} />
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {currentQ.scene.map((emoji, i) => (
              <motion.span
                key={i}
                className="text-4xl sm:text-5xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>

          {/* Timer bar */}
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-purple to-neon-pink rounded-full"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: currentQ.showTime / 1000, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}

      {/* Question */}
      {(gameState === "asking" || gameState === "feedback") && currentQ && (
        <motion.div
          className="flex flex-col items-center gap-6 max-w-sm w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <motion.div
            className="text-4xl bg-card rounded-2xl p-6 w-full text-center border border-white/5"
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {currentQ.question}
          </motion.div>

          <div className="grid grid-cols-2 gap-3 w-full">
            {currentQ.answers.map((answer, i) => (
              <motion.button
                key={i}
                className={`bg-card rounded-xl p-4 text-2xl border-2 transition-all ${
                  gameState === "feedback" && selectedAnswer === i
                    ? isCorrect
                      ? "border-neon-green"
                      : "border-neon-pink"
                    : gameState === "feedback" && answer.correct
                    ? "border-neon-green/40"
                    : "border-white/5 hover:border-neon-purple/30"
                }`}
                style={
                  gameState === "feedback" && selectedAnswer === i
                    ? {
                        boxShadow: isCorrect
                          ? "0 0 15px rgba(0,255,136,0.3)"
                          : "0 0 15px rgba(255,45,120,0.3)",
                      }
                    : undefined
                }
                onClick={() => handleAnswer(i)}
                whileHover={gameState === "asking" ? { scale: 1.05 } : {}}
                whileTap={gameState === "asking" ? { scale: 0.95 } : {}}
                animate={
                  gameState === "feedback" && selectedAnswer === i && !isCorrect
                    ? { x: [-3, 3, -3, 3, 0] }
                    : {}
                }
                disabled={gameState !== "asking"}
              >
                {answer.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Feedback */}
      <AnimatePresence>
        {gameState === "feedback" && isCorrect !== null && (
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

      {/* Reward - shows FIRST */}
      {gameState === "reward" && (
        <RewardReveal
          rarity={calculateRarity(score, maxScore, 0)}
          game="memoryflash"
          score={score}
          total={maxScore}
          onDone={() => setGameState("result")}
        />
      )}

      {/* Result - shows AFTER reward */}
      {gameState === "result" && (
        <ResultCard
          score={score}
          total={maxScore}
          time={totalTime}
          gameName="Memory Flash"
          gameIcon={<Brain size={24} className="text-neon-purple" />}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </main>
  );
}
