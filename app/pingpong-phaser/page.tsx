"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores, checkNewMilestones } from "@/lib/milestones";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import type { CardRarity } from "@/lib/cards";

// ─── Dynamic import — Phaser doesn't run on SSR ─────────────────────────────
const PhaserGame = dynamic(() => import("./PhaserGame"), { ssr: false });

type Difficulty = "easy" | "medium" | "hard";
type Screen = "menu" | "playing" | "reward" | "result";

const T = {
  en: {
    title: "Table Tennis",
    subtitle: "Phaser Edition",
    play: "Play",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    won: "You Won!",
    lost: "You Lost!",
    score: "Score",
    playAgain: "Play Again",
    back: "Back",
    firstTo: "First to 11 points",
    vs: "vs AI",
    tip: "Arrow keys / WASD or touch to move",
  },
  hu: {
    title: "Asztalitenisz",
    subtitle: "Phaser verzió",
    play: "Játék",
    easy: "Könnyű",
    medium: "Közepes",
    hard: "Nehéz",
    won: "Nyertél!",
    lost: "Vesztettél!",
    score: "Eredmény",
    playAgain: "Újra",
    back: "Vissza",
    firstTo: "Először 11 pont",
    vs: "AI ellen",
    tip: "Nyilak / WASD vagy érintés a mozgáshoz",
  },
  de: {
    title: "Tischtennis",
    subtitle: "Phaser Version",
    play: "Spielen",
    easy: "Leicht",
    medium: "Mittel",
    hard: "Schwer",
    won: "Du hast gewonnen!",
    lost: "Du hast verloren!",
    score: "Ergebnis",
    playAgain: "Nochmal",
    back: "Zurück",
    firstTo: "Zuerst 11 Punkte",
    vs: "Gegen KI",
    tip: "Pfeiltasten / WASD oder Touch",
  },
  ro: {
    title: "Tenis de masă",
    subtitle: "Versiunea Phaser",
    play: "Joacă",
    easy: "Ușor",
    medium: "Mediu",
    hard: "Greu",
    won: "Ai câștigat!",
    lost: "Ai pierdut!",
    score: "Scor",
    playAgain: "Din nou",
    back: "Înapoi",
    firstTo: "Primul la 11 puncte",
    vs: "vs AI",
    tip: "Săgeți / WASD sau atingere",
  },
};

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  easy: "#00ff88",
  medium: "#ffd700",
  hard: "#ff2d78",
};

export default function PingPongPhaserPage() {
  const { lang } = useLang();
  const t = (T[lang as keyof typeof T] || T.en) as typeof T.en;

  const [screen, setScreen] = useState<Screen>("menu");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [_milestones, setMilestones] = useState<string[]>([]);

  const handleGameEnd = useCallback((won: boolean, myScore: number, oppScore: number) => {
    setPlayerScore(myScore);
    setAiScore(oppScore);

    if (won) {
      const streak = (() => {
        try {
          const raw = localStorage.getItem("pingpong_phaser_streak");
          if (!raw) return 0;
          const { count, lastDate } = JSON.parse(raw);
          const today = new Date().toISOString().slice(0, 10);
          const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
          if (lastDate === today || lastDate === yesterday) return count || 0;
          return 0;
        } catch { return 0; }
      })();

      // Update streak
      const today = new Date().toISOString().slice(0, 10);
      try {
        const raw = localStorage.getItem("pingpong_phaser_streak");
        if (raw) {
          const { count, lastDate } = JSON.parse(raw);
          const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
          const newCount = lastDate === today ? count : (lastDate === yesterday ? count + 1 : 1);
          localStorage.setItem("pingpong_phaser_streak", JSON.stringify({ count: newCount, lastDate: today }));
        } else {
          localStorage.setItem("pingpong_phaser_streak", JSON.stringify({ count: 1, lastDate: today }));
        }
      } catch {}

      const rarity = calculateRarity(myScore, 11, streak, false);
      saveCard({ id: generateCardId(), game: "pingpong-phaser", rarity, score: myScore, total: 11, date: new Date().toISOString() });
      window.dispatchEvent(new Event("plizio-cards-changed"));
      setEarnedCard(rarity);

      incrementTotalGames();
      if (oppScore === 0) incrementPerfectScores();
      const newMs = checkNewMilestones();
      if (newMs.length > 0) setMilestones(newMs.map(m => m.id));

      setScreen("reward");
    } else {
      incrementTotalGames();
      setScreen("result");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a1a] flex flex-col items-center justify-center relative overflow-hidden">

      {/* ─── MENU ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {screen === "menu" && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center gap-6 px-6 w-full max-w-sm"
          >
            {/* Back */}
            <Link href="/pingpong" className="self-start flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors">
              ← {t.back}
            </Link>

            {/* Title */}
            <div className="text-center">
              <h1 className="text-4xl font-black text-white tracking-tight">{t.title}</h1>
              <p className="text-[#00d4ff] text-sm font-bold mt-1 uppercase tracking-widest">{t.subtitle}</p>
              <p className="text-white/50 text-xs mt-2">{t.firstTo} · {t.vs}</p>
            </div>

            {/* Difficulty */}
            <div className="w-full flex gap-2">
              {(["easy", "medium", "hard"] as Difficulty[]).map(d => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className="flex-1 py-2 rounded-xl font-bold text-sm transition-all"
                  style={{
                    background: difficulty === d ? DIFFICULTY_COLORS[d] + "33" : "rgba(255,255,255,0.05)",
                    border: `2px solid ${difficulty === d ? DIFFICULTY_COLORS[d] : "rgba(255,255,255,0.1)"}`,
                    color: difficulty === d ? DIFFICULTY_COLORS[d] : "rgba(255,255,255,0.5)",
                  }}
                >
                  {t[d]}
                </button>
              ))}
            </div>

            {/* Play button */}
            <button
              onClick={() => setScreen("playing")}
              className="w-full py-4 rounded-2xl font-black text-xl text-white transition-all active:scale-95"
              style={{ background: "linear-gradient(135deg, #00d4ff, #b44dff)" }}
            >
              {t.play}
            </button>

            {/* Tip */}
            <p className="text-white/30 text-xs text-center">{t.tip}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── GAME ─────────────────────────────────────────────── */}
      {screen === "playing" && (
        <div className="fixed inset-0 flex flex-col">
          {/* Exit button */}
          <div className="absolute top-3 left-3 z-10">
            <button
              onClick={() => setScreen("menu")}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors text-sm font-bold"
            >✕</button>
          </div>
          <PhaserGame
            key={`${difficulty}-${Date.now()}`}
            difficulty={difficulty}
            onGameEnd={handleGameEnd}
          />
        </div>
      )}

      {/* ─── REWARD ───────────────────────────────────────────── */}
      {screen === "reward" && earnedCard && (
        <RewardReveal
          rarity={earnedCard}
          game="pingpong-phaser"
          score={playerScore}
          total={11}
          onDone={() => setScreen("result")}
        />
      )}

      {/* ─── RESULT ───────────────────────────────────────────── */}
      <AnimatePresence>
        {screen === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-6 px-6 w-full max-w-sm"
          >
            <div className="text-center">
              <div className="text-5xl mb-2">{playerScore > aiScore ? "🏆" : "😢"}</div>
              <h2 className="text-3xl font-black text-white">
                {playerScore > aiScore ? t.won : t.lost}
              </h2>
              <p className="text-white/60 text-lg mt-2 font-mono">
                {playerScore} : {aiScore}
              </p>
            </div>

            <div className="flex gap-3 w-full">
              <button
                onClick={() => setScreen("playing")}
                className="flex-1 py-3 rounded-xl font-bold text-white transition-all active:scale-95"
                style={{ background: "linear-gradient(135deg, #00d4ff, #b44dff)" }}
              >
                {t.playAgain}
              </button>
              <Link href="/pingpong"
                className="flex-1 py-3 rounded-xl font-bold text-white/70 text-center border border-white/20 hover:border-white/40 transition-all"
              >
                {t.back}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── MILESTONE POPUP ──────────────────────────────────── */}
      {_milestones.length > 0 && (
        <MilestonePopup />
      )}
    </div>
  );
}
