"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Trophy, X, Gem, Shield, Scissors, SkipForward } from "lucide-react";
import Link from "next/link";
import ResultCard from "@/components/ResultCard";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId, type CardRarity } from "@/lib/cards";
import { incrementTotalGames, updateStats } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";
import allQuestions from "@/data/milliomos/questions.json";

type GameState = "ready" | "playing" | "confirming" | "correct" | "wrong" | "gameover" | "reward" | "result";

interface Question {
  question: string;
  answers: string[];
  correct: number;
  difficulty: number;
}

const PRIZE_LADDER = [
  100, 200, 300, 500, 1000,
  2000, 4000, 8000, 16000, 32000,
  64000, 125000, 250000, 500000, 1000000,
];

const SAFE_LEVELS = [4, 9]; // 0-indexed: level 5 ($1,000) and level 10 ($32,000)

function formatPrize(amount: number): string {
  if (amount >= 1000000) return "$1M";
  if (amount >= 1000) return `$${(amount / 1000).toFixed(0)}K`;
  return `$${amount}`;
}

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

function pickQuestions(): Question[] {
  const byDifficulty: Record<number, Question[]> = {};
  for (const q of allQuestions as Question[]) {
    if (!byDifficulty[q.difficulty]) byDifficulty[q.difficulty] = [];
    byDifficulty[q.difficulty].push(q);
  }

  const picked: Question[] = [];
  // 3 questions per difficulty level (1-5), total 15
  for (let d = 1; d <= 5; d++) {
    const pool = shuffleArray(byDifficulty[d] || []);
    picked.push(...pool.slice(0, 3));
  }
  return picked;
}

const ANSWER_LABELS = ["A", "B", "C", "D"];
const ANSWER_COLORS = [
  { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", glow: "rgba(249,115,22,0.3)" },
  { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", glow: "rgba(6,182,212,0.3)" },
  { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", glow: "rgba(16,185,129,0.3)" },
  { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", glow: "rgba(168,85,247,0.3)" },
];

export default function MilliomosPage() {
  const [gameState, setGameState] = useState<GameState>("ready");
  const [level, setLevel] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [eliminated, setEliminated] = useState<Set<number>>(new Set());
  const [streak, setStreak] = useState(0);
  const [showLadder, setShowLadder] = useState(false);
  const [bestLevel, setBestLevel] = useState(0);

  const startTimeRef = useRef<number>(0);
  const [earnedRarity, setEarnedRarity] = useState<CardRarity>("bronze");

  // Lifelines
  const [hasFiftyFifty, setHasFiftyFifty] = useState(true);
  const [hasSecondFiftyFifty, setHasSecondFiftyFifty] = useState(false);
  const [hasSkip, setHasSkip] = useState(true);
  const [hasShield, setHasShield] = useState(true);
  const [shieldActive, setShieldActive] = useState(false);
  const [hasDoubleDip, setHasDoubleDip] = useState(false);
  const [doubleDipActive, setDoubleDipActive] = useState(false);
  const [shopNotification, setShopNotification] = useState<string | null>(null);

  useEffect(() => {
    setStreak(getStreak());
    const bl = localStorage.getItem("plizio_milliomos_best");
    if (bl) setBestLevel(parseInt(bl));
  }, []);

  const startGame = () => {
    const q = pickQuestions();
    setQuestions(q);
    setLevel(0);
    setSelectedAnswer(null);
    setEliminated(new Set());
    setHasFiftyFifty(true);
    setHasSkip(true);
    setHasShield(true);
    setShieldActive(false);
    setShowLadder(false);
    setDoubleDipActive(false);

    // Load shop power-ups
    let gotExtra5050 = false;
    let gotDoubleDip = false;
    try {
      const saved = localStorage.getItem("plizio_powerups");
      if (saved) {
        const pups = JSON.parse(saved) as Record<string, number>;
        if (pups["mm_extra5050"] && pups["mm_extra5050"] > 0) {
          gotExtra5050 = true;
          pups["mm_extra5050"] -= 1;
          if (pups["mm_extra5050"] <= 0) delete pups["mm_extra5050"];
        }
        if (pups["mm_doubledip"] && pups["mm_doubledip"] > 0) {
          gotDoubleDip = true;
          pups["mm_doubledip"] -= 1;
          if (pups["mm_doubledip"] <= 0) delete pups["mm_doubledip"];
        }
        localStorage.setItem("plizio_powerups", JSON.stringify(pups));
      }
    } catch {}
    setHasSecondFiftyFifty(gotExtra5050);
    setHasDoubleDip(gotDoubleDip);

    const msgs: string[] = [];
    if (gotExtra5050) msgs.push("Extra 50:50");
    if (gotDoubleDip) msgs.push("Double Dip");
    if (msgs.length > 0) {
      setShopNotification(msgs.join(" + ") + " activated!");
      setTimeout(() => setShopNotification(null), 2500);
    }

    startTimeRef.current = Date.now();
    setGameState("playing");
  };

  const handleSelect = (index: number) => {
    if (gameState !== "playing" || eliminated.has(index)) return;
    setSelectedAnswer(index);
    setGameState("confirming");
  };

  const confirmAnswer = () => {
    if (selectedAnswer === null) return;
    const q = questions[level];
    if (selectedAnswer === q.correct) {
      setGameState("correct");
      setTimeout(() => {
        if (level + 1 >= 15) {
          finishGame(15);
        } else {
          setLevel((l) => l + 1);
          setSelectedAnswer(null);
          setEliminated(new Set());
          setShieldActive(false);
          setGameState("playing");
        }
      }, 1500);
    } else {
      if (shieldActive) {
        // Shield saves you - eliminate the wrong answer and continue
        setShieldActive(false);
        const newElim = new Set(eliminated);
        newElim.add(selectedAnswer);
        setEliminated(newElim);
        setSelectedAnswer(null);
        setGameState("playing");
      } else if (doubleDipActive) {
        // Double Dip saves you - eliminate wrong answer, get another try
        setDoubleDipActive(false);
        const newElim = new Set(eliminated);
        newElim.add(selectedAnswer);
        setEliminated(newElim);
        setSelectedAnswer(null);
        setGameState("playing");
      } else {
        setGameState("wrong");
        setTimeout(() => {
          // Fall back to last safe level
          const safeLevel = SAFE_LEVELS.filter((s) => s < level).pop();
          const finalLevel = safeLevel !== undefined ? safeLevel + 1 : 0;
          finishGame(finalLevel);
        }, 2000);
      }
    }
  };

  const cancelAnswer = () => {
    setSelectedAnswer(null);
    setGameState("playing");
  };

  const finishGame = useCallback((finalLevel: number) => {
    // Save best
    if (finalLevel > bestLevel) {
      setBestLevel(finalLevel);
      localStorage.setItem("plizio_milliomos_best", finalLevel.toString());
    }
    const newStreak = updateStreak();
    setStreak(newStreak);
    incrementTotalGames();
    updateStats({ highestStreak: newStreak });

    // Only give a card if at least 3 correct answers
    if (finalLevel >= 3) {
      const score = finalLevel;
      // Időbónusz: 90s várható idő, 5 pont/mp, max 100
      const mmElapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
      const mmBonus = Math.min(100, Math.max(0, (90 - mmElapsed) * 5));
      const mmMaxScore = 15 * 100 + 100;
      const mmCombined = score * 100 + mmBonus;
      const rarity: CardRarity = score === 15 && newStreak >= 3
        ? "legendary"
        : calculateRarity(mmCombined, mmMaxScore, newStreak, 85);
      setEarnedRarity(rarity);
      saveCard({
        id: generateCardId(),
        game: "milliomos",
        rarity,
        score,
        total: 15,
        date: new Date().toISOString(),
      });
      setGameState("reward");
    } else {
      setGameState("result");
    }
  }, [bestLevel]);

  // Lifeline: 50:50
  const useFiftyFifty = () => {
    if (!hasFiftyFifty || gameState !== "playing") return;
    setHasFiftyFifty(false);
    const q = questions[level];
    const wrongAnswers = [0, 1, 2, 3].filter((i) => i !== q.correct && !eliminated.has(i));
    const toEliminate = shuffleArray(wrongAnswers).slice(0, 2);
    const newElim = new Set(eliminated);
    toEliminate.forEach((i) => newElim.add(i));
    setEliminated(newElim);
  };

  // Lifeline: Skip
  const useSkip = () => {
    if (!hasSkip || gameState !== "playing") return;
    setHasSkip(false);
    // Move to next level without answering (counts as correct)
    setGameState("correct");
    setTimeout(() => {
      if (level + 1 >= 15) {
        finishGame(15);
      } else {
        setLevel((l) => l + 1);
        setSelectedAnswer(null);
        setEliminated(new Set());
        setShieldActive(false);
        setGameState("playing");
      }
    }, 800);
  };

  // Lifeline: Shield
  const useShield = () => {
    if (!hasShield || gameState !== "playing") return;
    setHasShield(false);
    setShieldActive(true);
  };

  // Lifeline: Second 50:50 (from shop)
  const useSecondFiftyFifty = () => {
    if (!hasSecondFiftyFifty || gameState !== "playing") return;
    setHasSecondFiftyFifty(false);
    const q = questions[level];
    const wrongAnswers = [0, 1, 2, 3].filter((i) => i !== q.correct && !eliminated.has(i));
    const toEliminate = shuffleArray(wrongAnswers).slice(0, 2);
    const newElim = new Set(eliminated);
    toEliminate.forEach((i) => newElim.add(i));
    setEliminated(newElim);
  };

  // Lifeline: Double Dip (from shop) - activate for current question
  const useDoubleDip = () => {
    if (!hasDoubleDip || gameState !== "playing") return;
    setHasDoubleDip(false);
    setDoubleDipActive(true);
  };

  const currentQ = questions[level];
  const currentPrize = level > 0 ? PRIZE_LADDER[level - 1] : 0;
  const nextPrize = PRIZE_LADDER[level] || 0;

  const getScoreForResult = () => {
    if (gameState === "reward" || gameState === "result") {
      // Use the saved card score
      const bl = localStorage.getItem("plizio_milliomos_best");
      return bl ? parseInt(bl) : level;
    }
    return level;
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative bg-gradient-to-b from-indigo-950/40 to-bg">
      {/* Ready */}
      {gameState === "ready" && (
        <motion.div className="flex flex-col items-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Crown size={56} className="text-gold" style={{ filter: "drop-shadow(0 0 20px rgba(255,215,0,0.5))" }} />
          </motion.div>
          <h1 className="text-2xl font-black tracking-wider text-white">MILLIOMOS</h1>
          <p className="text-white/40 text-sm text-center max-w-xs">Answer 15 questions to win $1,000,000! Use lifelines wisely.</p>
          {bestLevel > 0 && (
            <div className="text-gold/60 text-sm font-bold">Best: Level {bestLevel} ({formatPrize(PRIZE_LADDER[bestLevel - 1] || 0)})</div>
          )}
          <motion.button
            onClick={startGame}
            className="bg-gold/20 border border-gold/40 text-gold font-bold px-8 py-3 rounded-2xl text-sm tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PLAY
          </motion.button>
        </motion.div>
      )}

      {/* HUD */}
      {(gameState === "playing" || gameState === "confirming" || gameState === "correct" || gameState === "wrong") && (
        <div className="fixed top-0 left-0 right-0 z-40 p-4">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <Link href="/">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 cursor-pointer hover:bg-black/60 transition-colors">
                <X size={16} className="text-white/60" />
              </div>
            </Link>
            <motion.button
              onClick={() => setShowLadder(!showLadder)}
              className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-xl px-3 py-2"
              whileTap={{ scale: 0.95 }}
            >
              <Gem size={14} className="text-gold" />
              <span className="text-gold font-bold text-sm">{formatPrize(nextPrize)}</span>
              <span className="text-white/30 text-xs">Lv.{level + 1}/15</span>
            </motion.button>
            <div className="flex items-center gap-1.5 text-gold font-bold text-lg">
              <Trophy size={16} className="text-gold" />
              {level}
            </div>
          </div>
        </div>
      )}

      {/* Prize Ladder Overlay */}
      <AnimatePresence>
        {showLadder && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLadder(false)}
          >
            <motion.div
              className="bg-card rounded-2xl border border-white/10 p-4 w-full max-w-xs"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1">
                {PRIZE_LADDER.map((prize, i) => {
                  const idx = 14 - i; // Reverse order (top = $1M)
                  const isCurrent = idx === level;
                  const isPassed = idx < level;
                  const isSafe = SAFE_LEVELS.includes(idx);
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
                        isCurrent
                          ? "bg-gold/20 border border-gold/40 text-gold"
                          : isPassed
                          ? "bg-neon-green/10 text-neon-green/60"
                          : isSafe
                          ? "text-gold/40"
                          : "text-white/20"
                      }`}
                    >
                      <span>{idx + 1}</span>
                      <span>{formatPrize(PRIZE_LADDER[idx])}</span>
                      {isSafe && <Shield size={10} className="text-gold/40" />}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shield / Double Dip active indicator */}
      {(shieldActive || doubleDipActive) && (gameState === "playing" || gameState === "confirming") && (
        <motion.div
          className="fixed top-16 left-0 right-0 z-30 flex justify-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {shieldActive && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-3 py-1 flex items-center gap-1.5">
              <Shield size={12} className="text-emerald-400" />
              <span className="text-emerald-400 text-xs font-bold">SHIELD</span>
            </div>
          )}
          {doubleDipActive && (
            <div className="bg-[#E040FB]/10 border border-[#E040FB]/30 rounded-xl px-3 py-1 flex items-center gap-1.5">
              <Gem size={12} className="text-[#E040FB]" />
              <span className="text-[#E040FB] text-xs font-bold">DOUBLE DIP</span>
            </div>
          )}
        </motion.div>
      )}

      {/* Shop notification */}
      <AnimatePresence>
        {shopNotification && (
          <motion.div
            className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none"
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          >
            <div className="bg-[#E040FB]/15 border border-[#E040FB]/30 backdrop-blur-xl rounded-xl px-5 py-2.5">
              <span className="text-[#E040FB] font-bold text-sm">{shopNotification}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game area */}
      {(gameState === "playing" || gameState === "confirming" || gameState === "correct" || gameState === "wrong") && currentQ && (
        <div className="flex flex-col items-center gap-6 w-full max-w-md mt-16">
          {/* Question */}
          <motion.div
            className="bg-card/80 border border-white/10 rounded-2xl p-5 w-full text-center"
            key={level}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-white font-bold text-base leading-relaxed">{currentQ.question}</p>
          </motion.div>

          {/* Answers */}
          <div className="grid grid-cols-1 gap-3 w-full">
            {currentQ.answers.map((answer, i) => {
              const isEliminated = eliminated.has(i);
              const isSelected = selectedAnswer === i;
              const isCorrectAnswer = i === currentQ.correct;
              const colors = ANSWER_COLORS[i];

              let style = `${colors.bg} ${colors.border} ${colors.text}`;
              if (isEliminated) style = "bg-white/[0.02] border-white/5 text-white/10";
              else if (gameState === "correct" && isCorrectAnswer) style = "bg-neon-green/20 border-neon-green/50 text-neon-green";
              else if (gameState === "wrong" && isSelected) style = "bg-neon-pink/20 border-neon-pink/50 text-neon-pink";
              else if (gameState === "wrong" && isCorrectAnswer) style = "bg-neon-green/20 border-neon-green/50 text-neon-green";
              else if (isSelected) style = "bg-gold/20 border-gold/50 text-gold";

              return (
                <motion.button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`border-2 rounded-xl px-4 py-3 flex items-center gap-3 text-left transition-all ${style}`}
                  whileHover={gameState === "playing" && !isEliminated ? { scale: 1.02 } : {}}
                  whileTap={gameState === "playing" && !isEliminated ? { scale: 0.98 } : {}}
                  disabled={gameState !== "playing" || isEliminated}
                  animate={
                    gameState === "wrong" && isSelected
                      ? { x: [-4, 4, -4, 4, 0] }
                      : gameState === "correct" && isCorrectAnswer
                      ? { scale: [1, 1.03, 1] }
                      : {}
                  }
                >
                  <span className="font-black text-xs opacity-50">{ANSWER_LABELS[i]}</span>
                  <span className="font-bold text-sm">{answer}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Confirm / Cancel */}
          <AnimatePresence>
            {gameState === "confirming" && (
              <motion.div
                className="flex gap-3 w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <motion.button
                  onClick={cancelAnswer}
                  className="flex-1 bg-white/5 border border-white/10 text-white/50 font-bold py-3 rounded-xl text-sm"
                  whileTap={{ scale: 0.95 }}
                >
                  CHANGE
                </motion.button>
                <motion.button
                  onClick={confirmAnswer}
                  className="flex-1 bg-gold/20 border border-gold/40 text-gold font-bold py-3 rounded-xl text-sm tracking-wider"
                  whileTap={{ scale: 0.95 }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  FINAL ANSWER
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Lifelines */}
          {(gameState === "playing") && (
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={useFiftyFifty}
                disabled={!hasFiftyFifty}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-bold ${
                  hasFiftyFifty
                    ? "bg-orange-500/10 border-orange-500/30 text-orange-400"
                    : "bg-white/[0.02] border-white/5 text-white/15"
                }`}
                whileHover={hasFiftyFifty ? { scale: 1.05 } : {}}
                whileTap={hasFiftyFifty ? { scale: 0.95 } : {}}
              >
                <Scissors size={14} />
                50:50
              </motion.button>

              <motion.button
                onClick={useSkip}
                disabled={!hasSkip}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-bold ${
                  hasSkip
                    ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                    : "bg-white/[0.02] border-white/5 text-white/15"
                }`}
                whileHover={hasSkip ? { scale: 1.05 } : {}}
                whileTap={hasSkip ? { scale: 0.95 } : {}}
              >
                <SkipForward size={14} />
                SKIP
              </motion.button>

              <motion.button
                onClick={useShield}
                disabled={!hasShield}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-bold ${
                  hasShield
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    : shieldActive
                    ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                    : "bg-white/[0.02] border-white/5 text-white/15"
                }`}
                whileHover={hasShield ? { scale: 1.05 } : {}}
                whileTap={hasShield ? { scale: 0.95 } : {}}
              >
                <Shield size={14} />
                SHIELD
              </motion.button>

              {/* Shop power-ups */}
              {hasSecondFiftyFifty && (
                <motion.button
                  onClick={useSecondFiftyFifty}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-bold bg-gold/10 border-gold/30 text-gold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Scissors size={14} />
                  50:50
                  <span className="text-[8px] bg-[#E040FB]/20 text-[#E040FB] px-1 rounded">SHOP</span>
                </motion.button>
              )}
              {hasDoubleDip && (
                <motion.button
                  onClick={useDoubleDip}
                  disabled={doubleDipActive}
                  className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-bold ${
                    doubleDipActive
                      ? "bg-[#E040FB]/20 border-[#E040FB]/40 text-[#E040FB]"
                      : "bg-[#E040FB]/10 border-[#E040FB]/30 text-[#E040FB]"
                  }`}
                  whileHover={!doubleDipActive ? { scale: 1.05 } : {}}
                  whileTap={!doubleDipActive ? { scale: 0.95 } : {}}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Gem size={14} />
                  2x DIP
                  {doubleDipActive && <span className="text-[8px] bg-[#E040FB]/30 px-1 rounded">ON</span>}
                </motion.button>
              )}
            </motion.div>
          )}

          {/* Safe level indicator */}
          {SAFE_LEVELS.includes(level) && gameState === "playing" && (
            <motion.div
              className="text-gold/40 text-xs font-bold flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Shield size={10} />
              SAFE LEVEL
            </motion.div>
          )}
        </div>
      )}

      {/* Game Over overlay */}
      {gameState === "wrong" && (
        <motion.div
          className="fixed bottom-8 left-0 right-0 z-30 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-neon-pink/10 border border-neon-pink/30 rounded-xl px-4 py-2 text-neon-pink text-sm font-bold">
            Wrong! You take home {formatPrize(currentPrize > 0 ? PRIZE_LADDER[SAFE_LEVELS.filter((s) => s < level).pop() ?? -1] || 0 : 0)}
          </div>
        </motion.div>
      )}

      {gameState === "reward" && (
        <RewardReveal
          rarity={earnedRarity}
          game="milliomos"
          score={level}
          total={15}
          onDone={() => setGameState("result")}
        />
      )}

      {gameState === "result" && (
        <>
          <ResultCard
            score={level}
            total={15}
            gameName="Milliomos"
            gameIcon={<Crown size={24} className="text-gold" />}
            onPlayAgain={() => setGameState("ready")}
          />
          <MilestonePopup />
        </>
      )}
    </main>
  );
}
