"use client";

import { useState, useEffect, useCallback, useRef, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Crosshair, Trophy, CheckCircle, XCircle, ArrowUp, Flame, Globe, Music, CircleDot, Sparkles, Gamepad2, MapPin, Share2, Film, X, Swords } from "lucide-react";
import Link from "next/link";
import ResultCard from "@/components/ResultCard";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores, updateStats } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";
import { useLang } from "@/components/LanguageProvider";
import type { Language } from "@/lib/language";
import { submitScore } from "@/lib/multiplayer";

// English versions (default/fallback)
import generalDataEn from "@/data/quickpick/general.json";
import musicDataEn from "@/data/quickpick/music.json";
import footballDataEn from "@/data/quickpick/football.json";
import animeDataEn from "@/data/quickpick/anime.json";
import gamingDataEn from "@/data/quickpick/gaming.json";
import geographyDataEn from "@/data/quickpick/geography.json";
import socialDataEn from "@/data/quickpick/social.json";
import moviesDataEn from "@/data/quickpick/movies.json";

// Hungarian versions
import generalDataHu from "@/data/quickpick/general-hu.json";
import musicDataHu from "@/data/quickpick/music-hu.json";
import footballDataHu from "@/data/quickpick/football-hu.json";
import animeDataHu from "@/data/quickpick/anime-hu.json";
import gamingDataHu from "@/data/quickpick/gaming-hu.json";
import geographyDataHu from "@/data/quickpick/geography-hu.json";
import socialDataHu from "@/data/quickpick/social-hu.json";
import moviesDataHu from "@/data/quickpick/movies-hu.json";

// Function to get theme data by language
const getThemeDataByLanguage = (lang: Language): Record<string, Question[]> => {
  const langMap: Record<Language, Record<string, Question[]>> = {
    en: {
      general: generalDataEn as Question[],
      music: musicDataEn as Question[],
      football: footballDataEn as Question[],
      anime: animeDataEn as Question[],
      gaming: gamingDataEn as Question[],
      geography: geographyDataEn as Question[],
      social: socialDataEn as Question[],
      movies: moviesDataEn as Question[],
    },
    hu: {
      general: generalDataHu as Question[],
      music: musicDataHu as Question[],
      football: footballDataHu as Question[],
      anime: animeDataHu as Question[],
      gaming: gamingDataHu as Question[],
      geography: geographyDataHu as Question[],
      social: socialDataHu as Question[],
      movies: moviesDataHu as Question[],
    },
    de: {
      general: generalDataEn as Question[],
      music: musicDataEn as Question[],
      football: footballDataEn as Question[],
      anime: animeDataEn as Question[],
      gaming: gamingDataEn as Question[],
      geography: geographyDataEn as Question[],
      social: socialDataEn as Question[],
      movies: moviesDataEn as Question[],
    },
    ro: {
      general: generalDataEn as Question[],
      music: musicDataEn as Question[],
      football: footballDataEn as Question[],
      anime: animeDataEn as Question[],
      gaming: gamingDataEn as Question[],
      geography: geographyDataEn as Question[],
      social: socialDataEn as Question[],
      movies: moviesDataEn as Question[],
    },
  };

  return langMap[lang] || langMap.en;
};

const TRANSLATIONS = {
  en: {
    themeLabels: {
      general: "GEN",
      music: "MUSIC",
      football: "GOAL",
      anime: "ANIME",
      gaming: "GAME",
      geography: "GEO",
      social: "SOCIAL",
      movies: "FILM",
    },
    tap: "TAP",
    vs: "VS",
    gameName: "Quick Pick",
  },
  hu: {
    themeLabels: {
      general: "ÁLTALÁNOS",
      music: "ZENE",
      football: "LABDA",
      anime: "ANIME",
      gaming: "JÁTÉK",
      geography: "FÖLD",
      social: "KÖZÖSSÉG",
      movies: "FILM",
    },
    tap: "ÉRINT",
    vs: "VS",
    gameName: "Gyors Választás",
  },
  de: {
    themeLabels: {
      general: "ALLG",
      music: "MUSIK",
      football: "BALL",
      anime: "ANIME",
      gaming: "SPIEL",
      geography: "GEO",
      social: "SOZIAL",
      movies: "FILM",
    },
    tap: "BERÜHR",
    vs: "VS",
    gameName: "Schnelle Wahl",
  },
  ro: {
    themeLabels: {
      general: "GENERAL",
      music: "MUZICĂ",
      football: "MINGE",
      anime: "ANIME",
      gaming: "JOC",
      geography: "GEOGRAFIE",
      social: "SOCIAL",
      movies: "FILM",
    },
    tap: "APASĂ",
    vs: "VS",
    gameName: "Alegere Rapidă",
  },
};

const THEMES = [
  { id: "general", icon: Globe, color: "#00D4FF" },
  { id: "music", icon: Music, color: "#FF2D78" },
  { id: "football", icon: CircleDot, color: "#00FF88" },
  { id: "anime", icon: Sparkles, color: "#FFD700" },
  { id: "gaming", icon: Gamepad2, color: "#8B5CF6" },
  { id: "geography", icon: MapPin, color: "#06B6D4" },
  { id: "social", icon: Share2, color: "#F97316" },
  { id: "movies", icon: Film, color: "#EF4444" },
];

interface Question {
  itemA: string;
  valueA: number;
  itemB: string;
  valueB: number;
  unit: string;
  emojiA?: string;
  emojiB?: string;
  unitIcon?: string;
}

// Theme background gradients
const THEME_GRADIENTS: Record<string, string> = {
  general: "from-blue-950/30 to-cyan-950/20",
  music: "from-pink-950/30 to-purple-950/20",
  football: "from-green-950/30 to-emerald-950/20",
  anime: "from-amber-950/30 to-yellow-950/20",
  gaming: "from-violet-950/30 to-purple-950/20",
  geography: "from-cyan-950/30 to-teal-950/20",
  social: "from-orange-950/30 to-amber-950/20",
  movies: "from-red-950/30 to-rose-950/20",
};

type GameState = "theme-select" | "countdown" | "playing" | "reveal" | "result" | "reward";

function formatNumber(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

// Seeded PRNG (mulberry32)
function seededRandom(seed: string): () => number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return () => {
    h |= 0; h = h + 0x6D2B79F5 | 0;
    let t = Math.imul(h ^ h >>> 15, 1 | h);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function shuffleArray<T>(arr: T[], rng?: () => number): T[] {
  const shuffled = [...arr];
  const random = rng || Math.random;
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
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

export default function QuickPickPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-bg" />}>
      <QuickPickPage />
    </Suspense>
  );
}

function QuickPickPage() {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang] ?? TRANSLATIONS.en;
  const searchParams = useSearchParams();

  // Multiplayer params
  const matchId = searchParams.get("match");
  const seed = searchParams.get("seed");
  const playerNum = searchParams.get("p"); // "1" or "2"
  const isMultiplayer = !!(matchId && seed);

  // Get language-specific theme data
  const THEME_DATA = useMemo(() => getThemeDataByLanguage(lang), [lang]);

  const [gameState, setGameState] = useState<GameState>(isMultiplayer ? "playing" : "theme-select");
  const [selectedTheme, setSelectedTheme] = useState("general");
  const [countdown, setCountdown] = useState(3);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [picked, setPicked] = useState<"A" | "B" | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [totalTime, setTotalTime] = useState(0);
  const [streak, setStreak] = useState(0);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const startTimeRef = useRef<number>(0);
  const [animatedValueA, setAnimatedValueA] = useState(0);
  const [animatedValueB, setAnimatedValueB] = useState(0);

  useEffect(() => {
    setStreak(getStreak());
  }, []);

  // Auto-start multiplayer game with seeded questions
  useEffect(() => {
    if (!isMultiplayer || questions.length > 0) return;
    const rng = seededRandom(seed);
    const data = THEME_DATA.general;
    const shuffled = shuffleArray(data, rng).slice(0, TOTAL_ROUNDS).map((q) => {
      if (rng() < 0.5) {
        return { ...q, itemA: q.itemB, valueA: q.valueB, emojiA: q.emojiB, itemB: q.itemA, valueB: q.valueA, emojiB: q.emojiA };
      }
      return q;
    });
    setQuestions(shuffled);
    startTimeRef.current = Date.now();
  }, [isMultiplayer, seed, THEME_DATA, questions.length]);

  const startGame = (themeId: string) => {
    setSelectedTheme(themeId);
    const data = THEME_DATA[themeId] || THEME_DATA.general;
    const shuffled = shuffleArray(data).slice(0, TOTAL_ROUNDS).map((q) => {
      // Randomly swap A and B sides so the correct answer isn't always on the left
      if (Math.random() < 0.5) {
        return {
          ...q,
          itemA: q.itemB,
          valueA: q.valueB,
          emojiA: q.emojiB,
          itemB: q.itemA,
          valueB: q.valueA,
          emojiB: q.emojiA,
        };
      }
      return q;
    });
    setQuestions(shuffled);
    setGameState("playing");
    startTimeRef.current = Date.now();
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
        const finalScore = score + (correct ? 1 : 0);
        // Save card and show reward first
        const rarity = calculateRarity(finalScore, TOTAL_ROUNDS, newStreak, false);
        saveCard({
          id: generateCardId(),
          game: "quickpick",
          theme: selectedTheme,
          rarity,
          score: finalScore,
          total: TOTAL_ROUNDS,
          date: new Date().toISOString(),
        });
        incrementTotalGames();
        if (finalScore === TOTAL_ROUNDS) incrementPerfectScores();
        updateStats({ highestStreak: newStreak });
        // Submit score in multiplayer
        if (isMultiplayer && matchId && !scoreSubmitted) {
          setScoreSubmitted(true);
          submitScore(matchId, finalScore, playerNum === "1");
        }
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

  const themeGradient = THEME_GRADIENTS[selectedTheme] || THEME_GRADIENTS.general;

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center px-4 relative bg-gradient-to-b ${gameState !== "theme-select" ? themeGradient : ""}`}>
      {/* Theme Select */}
      {gameState === "theme-select" && (
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Crosshair size={40} className="text-neon-pink" style={{ filter: "drop-shadow(0 0 15px rgba(255,45,120,0.5))" }} />

          <div className="grid grid-cols-4 gap-2.5 w-full max-w-sm px-2">
            {THEMES.map((theme) => {
              const Icon = theme.icon;
              return (
                <motion.button
                  key={theme.id}
                  onClick={() => startGame(theme.id)}
                  className="bg-card border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-2"
                  style={{ boxShadow: `0 0 0 0px ${theme.color}` }}
                  whileHover={{
                    scale: 1.08,
                    borderColor: `${theme.color}60`,
                    boxShadow: `0 0 20px ${theme.color}20`,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} style={{ color: theme.color, filter: `drop-shadow(0 0 6px ${theme.color}40)` }} />
                  <span className="text-[9px] font-bold tracking-wider" style={{ color: theme.color }}>
                    {t.themeLabels[theme.id as keyof typeof t.themeLabels]}
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
            {/* Close button */}
            <Link href={isMultiplayer ? "/multiplayer" : "/"}>
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2 cursor-pointer hover:bg-black/60 transition-colors">
                <X size={16} className="text-white/60" />
              </div>
            </Link>

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

      {/* Unit indicator */}
      {(gameState === "playing" || gameState === "reveal") && currentQ && (
        <motion.div
          className="fixed top-16 left-0 right-0 z-30 flex justify-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-card/60 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-1.5 flex items-center gap-2">
            {currentQ.unitIcon && <span className="text-lg">{currentQ.unitIcon}</span>}
            <span className="text-white/40 text-xs font-bold tracking-wider uppercase">{currentQ.unit}</span>
          </div>
        </motion.div>
      )}

      {/* Game area */}
      {(gameState === "playing" || gameState === "reveal") && currentQ && (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-lg" style={{ perspective: "1000px" }}>
          {/* Item A */}
          <motion.button
            className={`flex-1 bg-card rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-3 border-2 transition-colors ${
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
                : gameState === "reveal"
                ? { rotateY: [0, 5, 0] }
                : {}
            }
            transition={{ duration: 0.4 }}
            disabled={gameState !== "playing"}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Emoji - large and prominent */}
            {currentQ.emojiA ? (
              <span className="text-5xl sm:text-6xl leading-none">{currentQ.emojiA}</span>
            ) : (
              <ArrowUp size={16} className="text-white/20" />
            )}

            {/* Name - smaller, secondary */}
            <span className="text-sm sm:text-base text-center leading-tight font-medium text-white/70">
              {currentQ.itemA}
            </span>

            {/* Tap indicator */}
            {gameState === "playing" && (
              <motion.div
                className="text-[10px] font-bold tracking-widest text-white/15 uppercase"
                animate={{ opacity: [0.15, 0.3, 0.15] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                {t.tap}
              </motion.div>
            )}

            {/* Value reveal with flip */}
            <AnimatePresence>
              {gameState === "reveal" && (
                <motion.div
                  className="text-3xl sm:text-4xl font-black text-gold"
                  style={{ textShadow: "0 0 15px rgba(255,215,0,0.5)" }}
                  initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{ duration: 0.4, type: "spring" }}
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
              <span className="text-xs font-black text-white/30">{t.vs}</span>
            </motion.div>
          </div>

          {/* Item B */}
          <motion.button
            className={`flex-1 bg-card rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-3 border-2 transition-colors ${
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
                : gameState === "reveal"
                ? { rotateY: [0, -5, 0] }
                : {}
            }
            transition={{ duration: 0.4 }}
            disabled={gameState !== "playing"}
            style={{ transformStyle: "preserve-3d" }}
          >
            {currentQ.emojiB ? (
              <span className="text-5xl sm:text-6xl leading-none">{currentQ.emojiB}</span>
            ) : (
              <ArrowUp size={16} className="text-white/20" />
            )}

            <span className="text-sm sm:text-base text-center leading-tight font-medium text-white/70">
              {currentQ.itemB}
            </span>

            {gameState === "playing" && (
              <motion.div
                className="text-[10px] font-bold tracking-widest text-white/15 uppercase"
                animate={{ opacity: [0.15, 0.3, 0.15] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                TAP
              </motion.div>
            )}

            <AnimatePresence>
              {gameState === "reveal" && (
                <motion.div
                  className="text-3xl sm:text-4xl font-black text-gold"
                  style={{ textShadow: "0 0 15px rgba(255,215,0,0.5)" }}
                  initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{ duration: 0.4, type: "spring" }}
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
          rarity={calculateRarity(score, TOTAL_ROUNDS, streak, false)}
          game="quickpick"
          score={score}
          total={TOTAL_ROUNDS}
          onDone={() => setGameState("result")}
        />
      )}

      {/* Result - shows AFTER reward */}
      {gameState === "result" && (
        <>
          <ResultCard
            score={score}
            total={TOTAL_ROUNDS}
            time={totalTime}
            gameName={isMultiplayer ? `${t.gameName} ⚔️` : t.gameName}
            gameIcon={<Crosshair size={24} className="text-neon-pink" />}
            onPlayAgain={isMultiplayer ? undefined : handlePlayAgain}
          />
          {isMultiplayer && (
            <Link href="/multiplayer">
              <motion.button
                className="mt-4 flex items-center gap-2 px-6 py-3 rounded-xl bg-neon-pink/15 border border-neon-pink/40 text-neon-pink font-bold text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Swords size={16} />
                Multiplayer
              </motion.button>
            </Link>
          )}
          <MilestonePopup />
        </>
      )}
    </main>
  );
}

