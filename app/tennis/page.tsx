"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores, checkNewMilestones } from "@/lib/milestones";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import type { CardRarity } from "@/lib/cards";
import type { Difficulty } from "./TennisPhaserGame";

// Dynamic import — Phaser ne fusson SSR-en
const TennisPhaserGame = dynamic(() => import("./TennisPhaserGame"), { ssr: false });

type Screen = "menu" | "playing" | "reward" | "result";

// ─── Translations ─────────────────────────────────────────────────────────────
const T = {
  en: {
    title: "Tennis",
    firstTo: "First to 5 points wins!",
    easy: "Easy", medium: "Medium", hard: "Hard",
    won: "You Won!", lost: "You Lost!",
    playAgain: "Play Again", back: "Back",
    vs: "vs AI", you: "YOU",
    selectDiff: "Select Difficulty",
    tip: "← → arrow keys or tap left side to move",
  },
  hu: {
    title: "Tenisz",
    firstTo: "Aki először ér 5 pontot, nyer!",
    easy: "Könnyű", medium: "Közepes", hard: "Nehéz",
    won: "Nyertél!", lost: "Vesztettél!",
    playAgain: "Újra", back: "Vissza",
    vs: "AI ellen", you: "TE",
    selectDiff: "Válassz nehézséget",
    tip: "← → nyilak vagy bal oldal érintése a mozgáshoz",
  },
  de: {
    title: "Tennis",
    firstTo: "Wer zuerst 5 Punkte hat, gewinnt!",
    easy: "Leicht", medium: "Mittel", hard: "Schwer",
    won: "Gewonnen!", lost: "Verloren!",
    playAgain: "Nochmal", back: "Zurück",
    vs: "Gegen KI", you: "DU",
    selectDiff: "Schwierigkeit wählen",
    tip: "← → Pfeiltasten oder linke Seite tippen",
  },
  ro: {
    title: "Tenis",
    firstTo: "Primul la 5 puncte câștigă!",
    easy: "Ușor", medium: "Mediu", hard: "Greu",
    won: "Ai câștigat!", lost: "Ai pierdut!",
    playAgain: "Din nou", back: "Înapoi",
    vs: "vs AI", you: "TU",
    selectDiff: "Alege dificultatea",
    tip: "← → taste sau atinge stânga",
  },
};

const DIFF_COLORS: Record<Difficulty, string> = {
  easy: "#00ff88",
  medium: "#ffd700",
  hard: "#ff2d78",
};

const DIFF_EMOJI: Record<Difficulty, string> = {
  easy: "🎾",
  medium: "🎾🎾",
  hard: "🎾🎾🎾",
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TennisPage() {
  const { lang } = useLang();
  const t = (T[lang as keyof typeof T] || T.en) as typeof T.en;

  const [screen, setScreen] = useState<Screen>("menu");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [showMilestone, setShowMilestone] = useState(false);

  // Streak helpers
  const getStreak = useCallback(() => {
    try {
      const raw = localStorage.getItem("tennis_streak");
      if (!raw) return 0;
      const { count, lastDate } = JSON.parse(raw);
      const today = new Date().toISOString().slice(0, 10);
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (lastDate === today || lastDate === yesterday) return count || 0;
    } catch { /* ignore */ }
    return 0;
  }, []);

  const updateStreak = useCallback(() => {
    const today = new Date().toISOString().slice(0, 10);
    try {
      const raw = localStorage.getItem("tennis_streak");
      if (raw) {
        const { count, lastDate } = JSON.parse(raw);
        if (lastDate === today) return count;
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        const newCount = lastDate === yesterday ? count + 1 : 1;
        localStorage.setItem("tennis_streak", JSON.stringify({ count: newCount, lastDate: today }));
        return newCount;
      }
    } catch { /* ignore */ }
    localStorage.setItem("tennis_streak", JSON.stringify({ count: 1, lastDate: today }));
    return 1;
  }, []);

  // Game end handler (called by Phaser scene)
  const handleGameEnd = useCallback((won: boolean, myScore: number, oppScore: number) => {
    setPlayerScore(myScore);
    setAiScore(oppScore);

    const streak = won ? updateStreak() : getStreak();
    const rarity = calculateRarity(myScore, 5, won ? streak : 0, false);

    saveCard({
      id: generateCardId(),
      game: "tennis",
      rarity,
      score: myScore,
      total: 5,
      date: new Date().toISOString(),
    });
    window.dispatchEvent(new Event("plizio-cards-changed"));

    incrementTotalGames();
    if (won && oppScore === 0) incrementPerfectScores();

    const newMilestones = checkNewMilestones();
    if (newMilestones.length > 0) setShowMilestone(true);
    setEarnedCard(rarity);
    setScreen("reward");
  }, [getStreak, updateStreak]);

  const startGame = useCallback((diff: Difficulty) => {
    setDifficulty(diff);
    setPlayerScore(0);
    setAiScore(0);
    setScreen("playing");
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A1A] flex flex-col items-center justify-center p-4">
      <AnimatePresence mode="wait">

        {/* ── MENU ─────────────────────────────────────────────────────────── */}
        {screen === "menu" && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            className="flex flex-col items-center gap-6 w-full max-w-sm"
          >
            <Link
              href="/"
              className="self-start text-white/50 hover:text-white/80 transition-colors flex items-center gap-1 text-sm"
            >
              <ChevronLeft size={16} />
              {t.back}
            </Link>

            {/* Title */}
            <div className="text-center">
              <div className="text-6xl mb-2">🎾</div>
              <h1 className="text-4xl font-black text-white">{t.title}</h1>
              <p className="text-white/50 text-sm mt-1">{t.firstTo}</p>
            </div>

            {/* Difficulty selection */}
            <div className="w-full">
              <p className="text-center text-white/60 text-xs font-bold uppercase tracking-wider mb-3">
                {t.selectDiff}
              </p>
              <div className="flex flex-col gap-3">
                {(["easy", "medium", "hard"] as Difficulty[]).map((diff) => (
                  <motion.button
                    key={diff}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => startGame(diff)}
                    className="w-full py-4 rounded-xl font-bold text-lg text-[#0A0A1A] transition-all shadow-lg"
                    style={{ backgroundColor: DIFF_COLORS[diff] }}
                  >
                    {t[diff]}
                    <span className="ml-2 text-sm font-normal opacity-60">
                      {DIFF_EMOJI[diff]}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            <p className="text-white/25 text-xs text-center">{t.tip}</p>
          </motion.div>
        )}

        {/* ── PLAYING ──────────────────────────────────────────────────────── */}
        {screen === "playing" && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-3xl"
          >
            {/* Top bar */}
            <div className="flex justify-between items-center mb-2">
              <button
                onClick={() => setScreen("menu")}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-sm font-bold"
              >
                ✕
              </button>
              <span className="text-white/40 text-xs font-bold uppercase tracking-wider">
                {t.vs}
              </span>
              <div className="w-8" />
            </div>

            {/* Phaser canvas */}
            <div
              className="w-full rounded-xl overflow-hidden"
              style={{ aspectRatio: "720/420" }}
            >
              <TennisPhaserGame
                difficulty={difficulty}
                onGameEnd={handleGameEnd}
              />
            </div>
          </motion.div>
        )}

        {/* ── REWARD ───────────────────────────────────────────────────────── */}
        {screen === "reward" && earnedCard && (
          <RewardReveal
            key="reward"
            rarity={earnedCard}
            game="tennis"
            score={playerScore}
            total={5}
            onDone={() => setScreen("result")}
          />
        )}

        {/* ── RESULT ───────────────────────────────────────────────────────── */}
        {screen === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 w-full max-w-sm"
          >
            {/* Header */}
            <div className="text-center">
              <div className="text-5xl mb-2">
                {playerScore > aiScore ? "🏆" : "😅"}
              </div>
              <h2
                className="text-3xl font-black"
                style={{ color: playerScore > aiScore ? "#00ff88" : "#ff2d78" }}
              >
                {playerScore > aiScore ? t.won : t.lost}
              </h2>
            </div>

            {/* Score board */}
            <div className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl px-10 py-5">
              <div className="text-center">
                <p className="text-white/50 text-xs mb-1 font-bold">{t.you}</p>
                <p className="text-5xl font-black text-[#00d4ff]">{playerScore}</p>
              </div>
              <div className="text-white/25 text-2xl font-bold">•</div>
              <div className="text-center">
                <p className="text-white/50 text-xs mb-1 font-bold">AI</p>
                <p className="text-5xl font-black text-[#ff4455]">{aiScore}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => startGame(difficulty)}
                className="w-full py-3 rounded-xl font-bold text-lg bg-[#00ff88] text-[#0A0A1A]"
              >
                {t.playAgain}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setScreen("menu")}
                className="w-full py-3 rounded-xl font-bold text-white/70 bg-white/10"
              >
                {t.back}
              </motion.button>
            </div>

            {showMilestone && <MilestonePopup />}
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
