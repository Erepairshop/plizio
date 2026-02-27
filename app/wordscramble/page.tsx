"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, Trophy, CheckCircle, XCircle, Timer, X, Delete } from "lucide-react";
import Link from "next/link";
import ResultCard from "@/components/ResultCard";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, updateStats } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";
import words from "@/data/words.json";

type GameState = "ready" | "playing" | "correct" | "wrong" | "result" | "reward";

const TOTAL_ROUNDS = 8;
const TIME_PER_WORD = 15;

function shuffleWord(word: string): string {
  const arr = word.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const result = arr.join("");
  return result === word ? shuffleWord(word) : result;
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

export default function WordScramblePage() {
  const [gameState, setGameState] = useState<GameState>("ready");
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [scrambled, setScrambled] = useState("");
  const [guess, setGuess] = useState<string[]>([]);
  const [availableLetters, setAvailableLetters] = useState<{ letter: string; used: boolean }[]>([]);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_WORD);
  const [totalTime, setTotalTime] = useState(0);
  const [streak, setStreak] = useState(0);
  const [usedWords, setUsedWords] = useState<string[]>([]);
  const startTimeRef = useRef(0);

  useEffect(() => { setStreak(getStreak()); }, []);

  const startNewRound = useCallback((roundNum: number, used: string[]) => {
    const available = words.filter((w) => !used.includes(w));
    const word = available[Math.floor(Math.random() * available.length)];
    setCurrentWord(word);
    const s = shuffleWord(word);
    setScrambled(s);
    setAvailableLetters(s.split("").map((l) => ({ letter: l, used: false })));
    setGuess([]);
    setTimeLeft(TIME_PER_WORD);
    setUsedWords([...used, word]);
    setGameState("playing");
  }, []);

  const startGame = () => {
    setRound(0);
    setScore(0);
    setUsedWords([]);
    startTimeRef.current = Date.now();
    startNewRound(0, []);
  };

  // Timer
  useEffect(() => {
    if (gameState !== "playing") return;
    if (timeLeft <= 0) {
      setGameState("wrong");
      setTimeout(() => {
        if (round + 1 >= TOTAL_ROUNDS) endGame(score);
        else { setRound((r) => r + 1); startNewRound(round + 1, usedWords); }
      }, 1500);
      return;
    }
    const t = setTimeout(() => setTimeLeft((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [gameState, timeLeft]);

  const addLetter = (index: number) => {
    if (gameState !== "playing" || availableLetters[index].used) return;
    const newAvailable = [...availableLetters];
    newAvailable[index] = { ...newAvailable[index], used: true };
    setAvailableLetters(newAvailable);
    const newGuess = [...guess, availableLetters[index].letter];
    setGuess(newGuess);

    // Check if word complete
    if (newGuess.length === currentWord.length) {
      const guessWord = newGuess.join("");
      if (guessWord === currentWord) {
        setScore((s) => s + 1);
        setGameState("correct");
        setTimeout(() => {
          if (round + 1 >= TOTAL_ROUNDS) endGame(score + 1);
          else { setRound((r) => r + 1); startNewRound(round + 1, usedWords); }
        }, 1200);
      } else {
        setGameState("wrong");
        setTimeout(() => {
          if (round + 1 >= TOTAL_ROUNDS) endGame(score);
          else { setRound((r) => r + 1); startNewRound(round + 1, usedWords); }
        }, 1500);
      }
    }
  };

  const removeLast = () => {
    if (gameState !== "playing" || guess.length === 0) return;
    const lastLetter = guess[guess.length - 1];
    setGuess(guess.slice(0, -1));
    // Find last used letter matching and un-use it
    const newAvailable = [...availableLetters];
    for (let i = newAvailable.length - 1; i >= 0; i--) {
      if (newAvailable[i].used && newAvailable[i].letter === lastLetter) {
        newAvailable[i] = { ...newAvailable[i], used: false };
        break;
      }
    }
    setAvailableLetters(newAvailable);
  };

  const endGame = (finalScore: number) => {
    const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
    setTotalTime(elapsed);
    const newStreak = updateStreak();
    setStreak(newStreak);
    const rarity = calculateRarity(finalScore, TOTAL_ROUNDS, newStreak);
    saveCard({
      id: generateCardId(),
      game: "wordscramble",
      rarity,
      score: finalScore,
      total: TOTAL_ROUNDS,
      date: new Date().toISOString(),
    });
    incrementTotalGames();
    updateStats({ highestStreak: newStreak });
    setGameState("reward");
  };

  const timerColor = timeLeft <= 3 ? "text-neon-pink" : timeLeft <= 7 ? "text-gold" : "text-neon-green";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Ready screen */}
      {gameState === "ready" && (
        <motion.div className="flex flex-col items-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Shuffle size={48} className="text-emerald-400" style={{ filter: "drop-shadow(0 0 15px rgba(52,211,153,0.5))" }} />
          <h1 className="text-2xl font-black tracking-wider text-white">WORD SCRAMBLE</h1>
          <p className="text-white/40 text-sm text-center">Unscramble the letters to find the word!</p>
          <motion.button
            onClick={startGame}
            className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold px-8 py-3 rounded-2xl text-sm tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PLAY
          </motion.button>
        </motion.div>
      )}

      {/* HUD */}
      {(gameState === "playing" || gameState === "correct" || gameState === "wrong") && (
        <div className="fixed top-0 left-0 right-0 z-40 p-4">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <Link href="/">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 cursor-pointer hover:bg-black/60 transition-colors">
                <X size={16} className="text-white/60" />
              </div>
            </Link>
            <div className="flex gap-1.5">
              {Array.from({ length: TOTAL_ROUNDS }, (_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i < round ? "bg-neon-green" : i === round ? "bg-neon-blue" : "bg-white/15"}`} />
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-gold font-bold text-lg">
              <Trophy size={16} className="text-gold" />
              {score}
            </div>
          </div>
        </div>
      )}

      {/* Game area */}
      {(gameState === "playing" || gameState === "correct" || gameState === "wrong") && (
        <div className="flex flex-col items-center gap-8 w-full max-w-md">
          {/* Timer */}
          <motion.div className={`text-4xl font-black ${timerColor}`} key={timeLeft} animate={{ scale: timeLeft <= 5 ? [1, 1.1, 1] : 1 }}>
            <div className="flex items-center gap-2">
              <Timer size={24} />
              {timeLeft}
            </div>
          </motion.div>

          {/* Guess slots */}
          <div className="flex gap-2 justify-center flex-wrap">
            {currentWord.split("").map((_, i) => (
              <motion.div
                key={i}
                className={`w-11 h-12 rounded-xl border-2 flex items-center justify-center text-xl font-black ${
                  gameState === "correct"
                    ? "border-neon-green bg-neon-green/10 text-neon-green"
                    : gameState === "wrong"
                    ? "border-neon-pink bg-neon-pink/10 text-neon-pink"
                    : guess[i]
                    ? "border-white/30 bg-white/5 text-white"
                    : "border-white/10 bg-white/[0.02]"
                }`}
                initial={guess[i] ? { scale: 0.8 } : {}}
                animate={guess[i] ? { scale: 1 } : {}}
              >
                {guess[i] || ""}
              </motion.div>
            ))}
          </div>

          {/* Wrong answer reveal */}
          <AnimatePresence>
            {gameState === "wrong" && (
              <motion.div
                className="text-white/50 text-sm font-bold tracking-wider"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {currentWord}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Available letters */}
          <div className="flex gap-2 justify-center flex-wrap">
            {availableLetters.map((item, i) => (
              <motion.button
                key={i}
                onClick={() => addLetter(i)}
                className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center text-lg font-black transition-all ${
                  item.used
                    ? "border-white/5 bg-transparent text-transparent"
                    : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                }`}
                whileHover={!item.used ? { scale: 1.1 } : {}}
                whileTap={!item.used ? { scale: 0.9 } : {}}
                disabled={item.used || gameState !== "playing"}
              >
                {item.letter}
              </motion.button>
            ))}
          </div>

          {/* Delete button */}
          {gameState === "playing" && guess.length > 0 && (
            <motion.button
              onClick={removeLast}
              className="flex items-center gap-2 text-white/40 text-sm font-bold hover:text-white/60 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <Delete size={16} />
              DELETE
            </motion.button>
          )}

          {/* Feedback icons */}
          <AnimatePresence>
            {gameState === "correct" && (
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                <CheckCircle size={48} className="text-neon-green" style={{ filter: "drop-shadow(0 0 15px rgba(0,255,136,0.6))" }} />
              </motion.div>
            )}
            {gameState === "wrong" && (
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                <XCircle size={48} className="text-neon-pink" style={{ filter: "drop-shadow(0 0 15px rgba(255,45,120,0.6))" }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {gameState === "reward" && (
        <RewardReveal
          rarity={calculateRarity(score, TOTAL_ROUNDS, streak)}
          game="wordscramble"
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
            gameName="Word Scramble"
            gameIcon={<Shuffle size={24} className="text-emerald-400" />}
            onPlayAgain={() => { setRound(0); setScore(0); setGameState("ready"); }}
          />
          <MilestonePopup />
        </>
      )}
    </main>
  );
}
