"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, checkNewMilestones } from "@/lib/milestones";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import type { CardRarity } from "@/lib/cards";

// ─── Dynamic import — Phaser doesn't run on SSR ─────────────────────────────
const SquashGame = dynamic(() => import("./SquashGame"), { ssr: false });

type Screen = "menu" | "playing" | "reward" | "result";

const T = {
  en: {
    title: "Squash",
    subtitle: "Phaser Edition",
    play: "Play",
    missed: "Missed!",
    rally: "Rally",
    playAgain: "Play Again",
    back: "Back",
    tip: "Move with arrow keys, WASD or touch",
    hitFrontWall: "Hit the front wall and keep the rally going!",
  },
  hu: {
    title: "Squash",
    subtitle: "Phaser verzió",
    play: "Játék",
    missed: "Kihagytad!",
    rally: "Menet",
    playAgain: "Újra",
    back: "Vissza",
    tip: "Irányítsd nyilakkal, WASD-dal vagy érintéssel",
    hitFrontWall: "Üsd az első falnak és tartsd a menetet!",
  },
  de: {
    title: "Squash",
    subtitle: "Phaser Version",
    play: "Spielen",
    missed: "Verfehlt!",
    rally: "Ballwechsel",
    playAgain: "Nochmal",
    back: "Zurück",
    tip: "Steuern mit Pfeiltasten, WASD oder Touch",
    hitFrontWall: "Triff die Vorderwand und halte den Ballwechsel am Laufen!",
  },
  ro: {
    title: "Squash",
    subtitle: "Versiunea Phaser",
    play: "Joacă",
    missed: "Ratat!",
    rally: "Schimb",
    playAgain: "Din nou",
    back: "Înapoi",
    tip: "Mișcă cu săgeți, WASD sau atingere",
    hitFrontWall: "Lovește peretele din față și ține schimbul în desfășurare!",
  },
};

export default function SquashPage() {
  const { lang } = useLang();
  const t = (T[lang as keyof typeof T] || T.en) as typeof T.en;

  const [screen, setScreen]         = useState<Screen>("menu");
  const [finalScore, setFinalScore]  = useState(0);
  const [earnedCard, setEarnedCard]  = useState<CardRarity | null>(null);
  const [milestones, setMilestones]  = useState<string[]>([]);
  const [gameKey, setGameKey]        = useState(0);

  const handleGameEnd = useCallback((score: number) => {
    setFinalScore(score);
    incrementTotalGames();

    // score / 30 reference — never gold (false)
    const rarity = calculateRarity(Math.min(score, 30), 30, 0, false);
    saveCard({
      id: generateCardId(),
      game: "squash",
      rarity,
      score,
      total: 30,
      date: new Date().toISOString(),
    });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    setEarnedCard(rarity);

    const newMs = checkNewMilestones();
    if (newMs.length > 0) setMilestones(newMs.map(m => m.id));

    setScreen("reward");
  }, []);

  const handlePlayAgain = () => {
    setGameKey(k => k + 1);
    setEarnedCard(null);
    setScreen("playing");
  };

  return (
    <div className="min-h-screen bg-[#050f05] flex flex-col items-center justify-center relative overflow-hidden">

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
            <Link href="/" className="self-start flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors">
              ← {t.back}
            </Link>

            <div className="text-center">
              <div className="text-6xl mb-3">🎾</div>
              <h1 className="text-4xl font-black text-white tracking-tight">{t.title}</h1>
              <p className="text-[#00ff88] text-sm font-bold mt-1 uppercase tracking-widest">{t.subtitle}</p>
              <p className="text-white/50 text-xs mt-3 leading-relaxed">{t.hitFrontWall}</p>
            </div>

            <button
              onClick={() => setScreen("playing")}
              className="w-full py-4 rounded-2xl font-black text-xl text-white transition-all active:scale-95"
              style={{ background: "linear-gradient(135deg, #00ff88, #00d4ff)" }}
            >
              {t.play}
            </button>

            <p className="text-white/30 text-xs text-center">{t.tip}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── GAME ─────────────────────────────────────────────── */}
      {screen === "playing" && (
        <div className="fixed inset-0 flex flex-col">
          <div className="absolute top-3 left-3 z-10">
            <button
              onClick={() => setScreen("menu")}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors text-sm font-bold"
            >✕</button>
          </div>
          <SquashGame key={gameKey} onGameEnd={handleGameEnd} />
        </div>
      )}

      {/* ─── REWARD ───────────────────────────────────────────── */}
      {screen === "reward" && earnedCard && (
        <RewardReveal
          rarity={earnedCard}
          game="squash"
          score={finalScore}
          total={30}
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
              <div className="text-5xl mb-2">🎾</div>
              <h2 className="text-3xl font-black text-white">{t.missed}</h2>
              <p className="text-[#00ff88] text-2xl font-black mt-3">
                {finalScore}{" "}
                <span className="text-white/50 text-base font-normal">{t.rally}</span>
              </p>
            </div>

            <div className="flex gap-3 w-full">
              <button
                onClick={handlePlayAgain}
                className="flex-1 py-3 rounded-xl font-bold text-white transition-all active:scale-95"
                style={{ background: "linear-gradient(135deg, #00ff88, #00d4ff)" }}
              >
                {t.playAgain}
              </button>
              <Link
                href="/"
                className="flex-1 py-3 rounded-xl font-bold text-white/70 text-center border border-white/20 hover:border-white/40 transition-all"
              >
                {t.back}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {milestones.length > 0 && <MilestonePopup />}
    </div>
  );
}
