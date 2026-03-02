"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, RotateCcw, ChevronRight } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import type { Language } from "@/lib/language";
import { getRandomWord, getSpecialKeys, type KodexCategory } from "@/lib/kodex-words";
import { calculateRarity, saveCard, generateCardId, type CardRarity } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores } from "@/lib/milestones";
import { getGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getHatDef, getActiveHat, getTrailDef, getActiveTrail } from "@/lib/accessories";
import AvatarCompanion from "@/components/AvatarCompanion";

// ─── DIFFICULTY ───────────────────────────────────────────────────────────────
type Difficulty = "easy" | "medium" | "hard";

const DIFF_CFG = {
  easy:   { lives: 8,  showCatEmoji: true,  showCatName: true,  scoreBonus: 0, color: "#22C55E", bg: "from-green-500/20 to-emerald-500/10"  },
  medium: { lives: 6,  showCatEmoji: true,  showCatName: false, scoreBonus: 1, color: "#F59E0B", bg: "from-amber-500/20 to-yellow-500/10"   },
  hard:   { lives: 4,  showCatEmoji: false, showCatName: false, scoreBonus: 2, color: "#EF4444", bg: "from-red-500/20   to-rose-500/10"     },
} as const;

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
  hu: {
    title: "KÓDEX", cat: "Kategória",
    won: "Megfejtve!", lost: "Game Over", answer: "A szó:",
    again: "Újra", perfect: "Hibátlan!", card: "kártya",
    chooseLvl: "Válassz szintet",
    easy: "KÖNNYŰ", medium: "KÖZEPES", hard: "NEHÉZ",
    easyDesc:   "8 élet · kategória megmutatva",
    mediumDesc: "6 élet · csak emoji tipp",
    hardDesc:   "4 élet · semmi segítség",
    changeLvl: "Szintváltás",
  },
  de: {
    title: "KÓDEX", cat: "Kategorie",
    won: "Gelöst!", lost: "Game Over", answer: "Das Wort:",
    again: "Nochmal", perfect: "Perfekt!", card: "Karte",
    chooseLvl: "Schwierigkeitsgrad wählen",
    easy: "LEICHT", medium: "MITTEL", hard: "SCHWER",
    easyDesc:   "8 Leben · Kategorie angezeigt",
    mediumDesc: "6 Leben · nur Emoji-Tipp",
    hardDesc:   "4 Leben · kein Hinweis",
    changeLvl: "Stufe wechseln",
  },
  en: {
    title: "KÓDEX", cat: "Category",
    won: "Solved!", lost: "Game Over", answer: "The word:",
    again: "Again", perfect: "Perfect!", card: "card",
    chooseLvl: "Choose difficulty",
    easy: "EASY", medium: "MEDIUM", hard: "HARD",
    easyDesc:   "8 lives · category shown",
    mediumDesc: "6 lives · emoji hint only",
    hardDesc:   "4 lives · no hints at all",
    changeLvl: "Change level",
  },
  ro: {
    title: "KÓDEX", cat: "Categorie",
    won: "Rezolvat!", lost: "Game Over", answer: "Cuvântul:",
    again: "Din nou", perfect: "Perfect!", card: "carte",
    chooseLvl: "Alege dificultatea",
    easy: "UȘOR", medium: "MEDIU", hard: "GREU",
    easyDesc:   "8 vieți · categorie afișată",
    mediumDesc: "6 vieți · indiciu emoji",
    hardDesc:   "4 vieți · fără indicii",
    changeLvl: "Schimbă nivelul",
  },
};

const RARITY_COLORS: Record<CardRarity, string> = {
  legendary: "#B44DFF", gold: "#FFD700", silver: "#C0C0C0", bronze: "#CD7F32",
};
const RARITY_LABELS: Record<Language, Record<CardRarity, string>> = {
  hu: { legendary: "Legendás", gold: "Arany",    silver: "Ezüst",  bronze: "Bronz"  },
  de: { legendary: "Legendär", gold: "Gold",     silver: "Silber", bronze: "Bronze" },
  en: { legendary: "Legendary",gold: "Gold",     silver: "Silver", bronze: "Bronze" },
  ro: { legendary: "Legendar", gold: "Aur",      silver: "Argint", bronze: "Bronz"  },
};

function updateStreak(): number {
  const today = new Date().toDateString();
  const data = localStorage.getItem("plizio_streak");
  if (data) {
    const { count, lastDate } = JSON.parse(data);
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (lastDate === today) return count;
    const newCount = lastDate === yesterday ? count + 1 : 1;
    localStorage.setItem("plizio_streak", JSON.stringify({ count: newCount, lastDate: today }));
    return newCount;
  }
  localStorage.setItem("plizio_streak", JSON.stringify({ count: 1, lastDate: today }));
  return 1;
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function KodexPage() {
  const router = useRouter();
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] || T.en;

  // Screen & difficulty
  const [screen, setScreen] = useState<"levelSelect" | "playing">("levelSelect");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");

  // Game state
  const [word, setWord] = useState("");
  const [category, setCategory] = useState<KodexCategory | null>(null);
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [wrongCount, setWrongCount] = useState(0);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  // jumpTrigger only for CORRECT guesses — wrong guesses use sinking visual only
  const [jumpTrigger, setJumpTrigger] = useState<
    { reaction: "happy" | "victory" | null; timestamp: number } | undefined
  >(undefined);

  // Avatar state
  const [gender, setGenderState] = useState<AvatarGender>("girl");
  const [activeSkin, setActiveSkinState] = useState(() => getSkinDef("default"));
  const [activeFace, setActiveFaceState] = useState(() => getFaceDef("default"));
  const [activeTop, setActiveTopState] = useState<ReturnType<typeof getTopDef>>(null);
  const [activeBottom, setActiveBottomState] = useState<ReturnType<typeof getBottomDef>>(null);
  const [activeShoe, setActiveShoeState] = useState<ReturnType<typeof getShoeDef>>(null);
  const [activeCape, setActiveCapeState] = useState<ReturnType<typeof getCapeDef>>(null);
  const [activeGlasses, setActiveGlassesState] = useState<ReturnType<typeof getGlassesDef>>(null);
  const [activeGloves, setActiveGlovesState] = useState<ReturnType<typeof getGloveDef>>(null);
  const [activeHat, setActiveHatState] = useState<ReturnType<typeof getHatDef>>(null);
  const [activeTrail, setActiveTrailState] = useState<ReturnType<typeof getTrailDef>>(null);

  useEffect(() => {
    setGenderState(getGender());
    setActiveSkinState(getSkinDef(getActiveSkin()));
    setActiveFaceState(getFaceDef(getActiveFace()));
    const top = getActive("top"); if (top) setActiveTopState(getTopDef(top));
    const bottom = getActive("bottom"); if (bottom) setActiveBottomState(getBottomDef(bottom));
    const shoe = getActive("shoe"); if (shoe) setActiveShoeState(getShoeDef(shoe));
    const cape = getActive("cape"); if (cape) setActiveCapeState(getCapeDef(cape));
    const glasses = getActive("glasses"); if (glasses) setActiveGlassesState(getGlassesDef(glasses));
    const glove = getActive("gloves"); if (glove) setActiveGlovesState(getGloveDef(glove));
    const hat = getActiveHat(); if (hat) setActiveHatState(getHatDef(hat));
    const trail = getActiveTrail(); if (trail) setActiveTrailState(getTrailDef(trail));
  }, []);

  // Start a new round — accepts explicit difficulty to avoid stale closure
  const startNewGame = useCallback((diff?: Difficulty) => {
    const d = diff ?? difficulty;
    const { word: w, category: c } = getRandomWord(lang, d);
    setWord(w);
    setCategory(c);
    setGuessed(new Set());
    setWrongCount(0);
    setGameState("playing");
    setEarnedCard(null);
    setJumpTrigger(undefined);
  }, [lang, difficulty]);

  const pickDifficulty = (d: Difficulty) => {
    setDifficulty(d);
    startNewGame(d);
    setScreen("playing");
  };

  const MAX_WRONG = DIFF_CFG[difficulty].lives;

  // Avatar mood
  const avatarMood = (() => {
    if (gameState === "won")  return "victory"     as const;
    if (gameState === "lost") return "disappointed" as const;
    if (wrongCount === 0)     return "focused"      as const;
    if (wrongCount <= 2)      return "surprised"    as const;
    if (wrongCount <= 4)      return "confused"     as const;
    return "disappointed" as const;
  })();

  // Letter guess handler
  const handleGuess = (letter: string) => {
    const upper = letter.toUpperCase();
    if (gameState !== "playing" || guessed.has(upper)) return;

    const newGuessed = new Set(guessed);
    newGuessed.add(upper);
    setGuessed(newGuessed);

    if (word.includes(upper)) {
      const allRevealed = [...word].every(l => l === " " || newGuessed.has(l));
      if (allRevealed) {
        const streak = updateStreak();
        const cfg = DIFF_CFG[difficulty];
        const score = Math.min(MAX_WRONG, MAX_WRONG - wrongCount + cfg.scoreBonus);
        const rarity = calculateRarity(score, MAX_WRONG, streak);
        saveCard({ id: generateCardId(), game: "kodex", rarity, score, total: MAX_WRONG, date: new Date().toISOString() });
        incrementTotalGames();
        if (wrongCount === 0) incrementPerfectScores();
        setEarnedCard(rarity);
        setGameState("won");
        setJumpTrigger({ reaction: "victory", timestamp: Date.now() });
      } else {
        setJumpTrigger({ reaction: "happy", timestamp: Date.now() });
      }
    } else {
      const newWrong = wrongCount + 1;
      setWrongCount(newWrong);
      // ⚠️  NO jumpTrigger here — wrong guess = only sinking animation
      if (newWrong >= MAX_WRONG) {
        incrementTotalGames();
        setGameState("lost");
      }
    }
  };

  const specialKeys = getSpecialKeys(lang);
  const cfg = DIFF_CFG[difficulty];

  const keyBg = (key: string) => {
    const upper = key.toUpperCase();
    if (!guessed.has(upper)) return "bg-white/10 hover:bg-white/20 active:scale-90 text-white";
    if (word.includes(upper)) return "bg-green-500/20 border border-green-500/40 text-green-400";
    return "bg-white/4 border border-white/8 text-white/20";
  };

  const avatarProps = {
    mood: avatarMood, fixed: false, gender, activeSkin, activeFace,
    activeTop, activeBottom, activeShoe, activeCape,
    activeGlasses, activeGloves, activeHat, activeTrail, jumpTrigger,
  };

  // ─── LEVEL SELECT ──────────────────────────────────────────────────────────
  if (screen === "levelSelect") {
    const levels: { key: Difficulty; emoji: string; name: string; desc: string }[] = [
      { key: "easy",   emoji: "🟢", name: t.easy,   desc: t.easyDesc   },
      { key: "medium", emoji: "🟡", name: t.medium, desc: t.mediumDesc },
      { key: "hard",   emoji: "🔴", name: t.hard,   desc: t.hardDesc   },
    ];
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-5 max-w-md mx-auto">
        <motion.button
          onClick={() => router.push("/")}
          className="absolute top-4 left-4 p-2 rounded-xl bg-white/5 border border-white/10"
          whileTap={{ scale: 0.9 }}
        >
          <ArrowLeft size={18} className="text-white/40" />
        </motion.button>

        <motion.div
          className="flex flex-col items-center gap-7 w-full"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="text-center">
            <p className="text-white font-black tracking-[0.25em] text-xl mb-1">KÓDEX</p>
            <p className="text-white/40 text-sm">{t.chooseLvl}</p>
          </div>

          <div className="flex flex-col gap-3 w-full">
            {levels.map(({ key, emoji, name, desc }, i) => (
              <motion.button
                key={key}
                onClick={() => pickDifficulty(key)}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/10 bg-gradient-to-r ${DIFF_CFG[key].bg} text-left`}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-3xl">{emoji}</span>
                <div className="flex-1">
                  <p className="text-white font-black tracking-wider text-base">{name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{desc}</p>
                </div>
                <ChevronRight size={18} style={{ color: DIFF_CFG[key].color }} />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </main>
    );
  }

  // ─── GAME SCREEN ───────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen flex flex-col px-3 pt-4 pb-3 max-w-md mx-auto select-none">

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <motion.button
          onClick={() => setScreen("levelSelect")}
          className="p-2 rounded-xl bg-white/5 border border-white/10"
          whileTap={{ scale: 0.9 }}
        >
          <ArrowLeft size={18} className="text-white/40" />
        </motion.button>

        <div className="flex flex-col items-center gap-0.5">
          <span className="text-white font-black tracking-[0.2em] text-sm">{t.title}</span>
          <span className="text-[10px] font-bold tracking-wider" style={{ color: cfg.color }}>
            {t[difficulty]}
          </span>
        </div>

        {/* Lives */}
        <div className="flex gap-0.5">
          {Array.from({ length: MAX_WRONG }).map((_, i) => (
            <motion.span
              key={i}
              className="text-sm leading-none"
              animate={{
                opacity: i < MAX_WRONG - wrongCount ? 1 : 0.12,
                scale: i === MAX_WRONG - wrongCount - 1 && wrongCount > 0 ? [1, 1.35, 1] : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              ❤️
            </motion.span>
          ))}
        </div>
      </div>

      {/* Avatar + Category */}
      <div className="flex items-center gap-4 mb-3">

        {/* Avatar container — water sinking effect */}
        <div className="relative w-28 h-28 shrink-0 overflow-hidden rounded-2xl">

          {/* Avatar sinks downward (no jumpTrigger on wrong = no fighting) */}
          <motion.div
            className="absolute inset-0"
            animate={{
              y: gameState === "lost"
                ? 62                                     // fully submerged
                : (wrongCount / MAX_WRONG) * 40,         // gradual sink
            }}
            transition={{
              duration: gameState === "lost" ? 0.35 : 0.65,
              ease: "easeOut",
            }}
          >
            <AvatarCompanion {...avatarProps} />
          </motion.div>

          {/* Rising water */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            animate={{
              height: gameState === "lost" ? "100%" : `${(wrongCount / MAX_WRONG) * 90}%`,
            }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            style={{ zIndex: 5 }}
          >
            {/* Wave crest at water surface */}
            <motion.div
              className="absolute -top-2.5 left-0 right-0 h-5 pointer-events-none"
              animate={{ scaleX: [1, 1.05, 0.97, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "radial-gradient(ellipse 90% 100% at 50% 100%, rgba(96,210,255,0.55) 0%, transparent 100%)",
                borderRadius: "50%",
              }}
            />
            {/* Water body */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, rgba(56,185,255,0.20) 0%, rgba(14,70,200,0.50) 100%)" }}
            />
            {/* Rising bubbles */}
            {wrongCount > 0 &&
              [{ s: 5, l: "14%", d: 0 }, { s: 7, l: "42%", d: 0.6 }, { s: 4, l: "70%", d: 1.2 }].map(
                ({ s, l, d }, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{ width: s, height: s, left: l, bottom: "12%", background: "rgba(160,235,255,0.35)", border: "1px solid rgba(200,245,255,0.4)", zIndex: 6 }}
                    animate={{ y: [0, -36], opacity: [0.8, 0] }}
                    transition={{ duration: 2, delay: d, repeat: Infinity, repeatDelay: 1.8, ease: "easeOut" }}
                  />
                )
              )}
          </motion.div>
        </div>

        {/* Category hint — level-dependent visibility */}
        <div className="flex flex-col gap-1">
          {cfg.showCatEmoji && category ? (
            <>
              <span className="text-4xl">{category.emoji}</span>
              {cfg.showCatName && (
                <>
                  <span className="text-white/30 text-[10px] font-bold tracking-widest uppercase">{t.cat}</span>
                  <span className="text-white/70 text-sm font-bold">{category.label[lang] ?? category.label.en}</span>
                </>
              )}
              {!cfg.showCatName && (
                <span className="text-white/25 text-[10px] font-bold tracking-widest uppercase">{t.cat}?</span>
              )}
            </>
          ) : (
            <>
              <span className="text-3xl opacity-25">❓</span>
              <span className="text-white/20 text-[10px] font-bold tracking-widest">???</span>
            </>
          )}
        </div>
      </div>

      {/* Word display */}
      <div className="flex flex-wrap justify-center gap-2 mb-5 min-h-14 px-2">
        {[...word].map((letter, i) =>
          letter === " " ? (
            <div key={i} className="w-3" />
          ) : (
            <div key={i} className="flex flex-col items-center gap-1">
              <AnimatePresence mode="wait">
                {guessed.has(letter) ? (
                  <motion.span
                    key="letter"
                    className="text-white font-black text-xl w-8 text-center"
                    initial={{ scale: 0, y: -8 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {letter}
                  </motion.span>
                ) : (
                  <span key="blank" className="w-8 text-center text-white/0 text-xl font-black">_</span>
                )}
              </AnimatePresence>
              <div
                className="w-8 h-[2px] rounded-full"
                style={{
                  background: guessed.has(letter) ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.45)",
                  boxShadow: guessed.has(letter) ? "0 0 6px rgba(255,255,255,0.3)" : "none",
                }}
              />
            </div>
          )
        )}
      </div>

      {/* Keyboard */}
      <div className="flex flex-col items-center gap-1.5 mt-auto">
        {KEYBOARD_ROWS.map((row, ri) => (
          <div key={ri} className="flex gap-1.5">
            {row.map((key) => (
              <button
                key={key}
                onClick={() => handleGuess(key)}
                disabled={guessed.has(key) || gameState !== "playing"}
                className={`w-[30px] h-10 rounded-lg text-xs font-black transition-all ${keyBg(key)}`}
              >
                {key}
              </button>
            ))}
          </div>
        ))}
        {specialKeys.length > 0 && (
          <div className="flex gap-1.5 flex-wrap justify-center mt-0.5 max-w-xs">
            {specialKeys.map((key) => (
              <button
                key={key}
                onClick={() => handleGuess(key)}
                disabled={guessed.has(key.toUpperCase()) || gameState !== "playing"}
                className={`w-9 h-9 rounded-lg text-xs font-black transition-all ${keyBg(key)}`}
              >
                {key}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Win / Lose overlay */}
      <AnimatePresence>
        {gameState !== "playing" && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center px-6 z-50"
            style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="flex flex-col items-center gap-5 w-full max-w-xs"
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
            >
              <motion.div
                className="text-6xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.15 }}
              >
                {gameState === "won" ? "🏆" : "🌊"}
              </motion.div>

              <div className="text-center">
                <motion.p
                  className="text-2xl font-black mb-1"
                  style={{ color: gameState === "won" ? "#00FF88" : "#FF4444" }}
                  initial={{ scale: 0.5 }} animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  {gameState === "won" ? t.won : t.lost}
                </motion.p>
                {wrongCount === 0 && gameState === "won" && (
                  <p className="text-yellow-400 text-sm font-bold">⭐ {t.perfect}</p>
                )}
                {gameState === "lost" && (
                  <p className="text-white/50 text-sm">
                    {t.answer} <span className="text-white font-bold">{word}</span>
                  </p>
                )}
              </div>

              {earnedCard && (
                <motion.div
                  className="px-6 py-3 rounded-2xl border text-center"
                  style={{
                    background: `${RARITY_COLORS[earnedCard]}15`,
                    borderColor: `${RARITY_COLORS[earnedCard]}35`,
                    boxShadow: `0 0 20px ${RARITY_COLORS[earnedCard]}20`,
                  }}
                  initial={{ scale: 0, rotate: -5 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.35 }}
                >
                  <p className="text-sm font-black tracking-widest uppercase" style={{ color: RARITY_COLORS[earnedCard] }}>
                    {RARITY_LABELS[lang as Language]?.[earnedCard] ?? earnedCard}
                  </p>
                  <p className="text-white/35 text-[11px] mt-0.5">+1 {t.card}</p>
                </motion.div>
              )}

              <div className="flex gap-3 mt-1">
                <motion.button
                  onClick={() => setScreen("levelSelect")}
                  className="px-4 py-2.5 rounded-xl border border-white/10 text-white/40 text-xs font-bold"
                  whileTap={{ scale: 0.95 }}
                >
                  {t.changeLvl}
                </motion.button>
                <motion.button
                  onClick={() => startNewGame()}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-black"
                  style={{ background: "linear-gradient(135deg, #00FF88, #00D4FF)" }}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                >
                  <RotateCcw size={15} />
                  {t.again}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
