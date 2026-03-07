"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Crosshair, Zap, Brain, Mountain, Trophy, Flame, Layers, Star, User, ChevronDown, BookOpen, Car, Search, Hash, Shuffle, Crown, Calculator, Swords, PenLine, Puzzle, Home as HomeIcon, type LucideIcon } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import GameCard from "@/components/GameCard";
import IslandMap, { type Island, type IslandGame } from "@/components/IslandMap";
import Link from "next/link";
import { getCards } from "@/lib/cards";
import { WORLD_ZONES, getWorldProgress } from "@/lib/world";
import { getSpecialCardCount, markAsReferred, isReferred, claimReferralReward } from "@/lib/specialCards";
import { getStats } from "@/lib/milestones";
import { claimDailyReward, type DailyRewardResult } from "@/lib/dailyReward";
import { getUser, onAuthChange } from "@/lib/auth";
import { syncToSupabase } from "@/lib/sync";
import AuthModal from "@/components/AuthModal";
import UsernameModal from "@/components/UsernameModal";
import { getUsername, hasUsername } from "@/lib/username";
import { useLang } from "@/components/LanguageProvider";

interface GameDef {
  id: string;
  icon: LucideIcon;
  name: string;
  color: string;
  gradient: string;
}

interface GameDefBase {
  id: string;
  icon: LucideIcon;
  nameKey: string;
  color: string;
  gradient: string;
  langOnly?: string; // if set, only show for this language
}

interface CategoryDefBase {
  id: string;
  icon: LucideIcon;
  color: string;
  games: GameDefBase[];
}

interface CategoryDef {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
  games: GameDef[];
}

const TRANSLATIONS = {
  en: {
    categories: {
      "QUIZ & REFLEX": "QUIZ, REFLEX & WORD",
      "ADVENTURE": "ADVENTURE",
      "BRAIN": "BRAIN",
      "LOGIC": "LOGIC",
    },
    games: {
      quickpick: "Quick Pick",
      reflexrush: "Reflex Rush",
      memoryflash: "Memory Flash",
      spotdiff: "Spot Diff",
      numberrush: "Number Rush",
      wordscramble: "Word Scramble",
      milliomos: "Milliomos",
      kodex: "Kódex",
      skyclimb: "Sky Climb",
      citydrive: "City Drive",
      mathtest: "Math Test",
      deutschtest: "Deutsch Test",
      racetrack: "Racetrack",
      sequencerush: "Sequence Rush",
      wordhunt: "Word Hunt",
      numberpath: "Number Path",
      minisudoku: "Mini Sudoku",
      pliziolife: "Plizio Life",
    },
    ui: {
      comingSoon: "COMING SOON",
    },
  },
  hu: {
    categories: {
      "QUIZ & REFLEX": "KVÍZ, REFLEX & SZÓ",
      "ADVENTURE": "KALAND",
      "BRAIN": "AGYTRÖSZT",
      "LOGIC": "LOGIKA",
    },
    games: {
      quickpick: "Gyors Választás",
      reflexrush: "Reflex Roham",
      memoryflash: "Memória Flash",
      spotdiff: "Különbség Megtalálása",
      numberrush: "Számsietés",
      wordscramble: "Betűkeverő",
      milliomos: "Milliomos",
      kodex: "Kódex",
      skyclimb: "Égbolt Mászás",
      citydrive: "Város Vezetés",
      mathtest: "Matematika Teszt",
      deutschtest: "Német Teszt",
      racetrack: "Pályaverseny",
      sequencerush: "Szekvencia Roham",
      wordhunt: "Szóvadász",
      numberpath: "Számút",
      minisudoku: "Mini Sudoku",
      pliziolife: "Plizio Life",
    },
    ui: {
      comingSoon: "HAMAROSAN",
    },
  },
  de: {
    categories: {
      "QUIZ & REFLEX": "QUIZ, REFLEX & WORT",
      "ADVENTURE": "ABENTEUER",
      "BRAIN": "GEHIRN",
      "LOGIC": "LOGIK",
    },
    games: {
      quickpick: "Schnelle Wahl",
      reflexrush: "Reflex Rush",
      memoryflash: "Speicherblitz",
      spotdiff: "Unterschied Erkennen",
      numberrush: "Zahlenrausch",
      wordscramble: "Buchstabensalat",
      milliomos: "Milliomos",
      kodex: "Kódex",
      skyclimb: "Himmelsklettern",
      citydrive: "Stadtfahrt",
      mathtest: "Mathematiktest",
      deutschtest: "Deutsch Test",
      racetrack: "Rennstrecke",
      sequencerush: "Sequenz Rush",
      wordhunt: "Wortjagd",
      numberpath: "Zahlenpfad",
      minisudoku: "Mini Sudoku",
      pliziolife: "Plizio Life",
    },
    ui: {
      comingSoon: "BALD VERFÜGBAR",
    },
  },
  ro: {
    categories: {
      "QUIZ & REFLEX": "QUIZ, REFLEX & CUVÂNT",
      "ADVENTURE": "AVENTURĂ",
      "BRAIN": "CREIER",
      "LOGIC": "LOGICĂ",
    },
    games: {
      quickpick: "Alegere Rapidă",
      reflexrush: "Reflex Rush",
      memoryflash: "Fulger de Memorie",
      spotdiff: "Găsește Diferența",
      numberrush: "Goană Numerică",
      wordscramble: "Litere Amestecate",
      milliomos: "Milliomos",
      kodex: "Kódex",
      skyclimb: "Cățărare pe Cer",
      citydrive: "Conducere în Oraș",
      mathtest: "Test de Matematică",
      deutschtest: "Test de Germană",
      racetrack: "Circuit de curse",
      sequencerush: "Sequence Rush",
      wordhunt: "Vânătoare de Cuvinte",
      numberpath: "Calea Numerelor",
      minisudoku: "Mini Sudoku",
      pliziolife: "Plizio Life",
    },
    ui: {
      comingSoon: "CÂT CURÂND",
    },
  },
};

const CATEGORIES_BASE: CategoryDefBase[] = [
  {
    id: "quizreflex",
    icon: Zap,
    color: "#00D4FF",
    games: [
      {
        id: "quickpick",
        icon: Crosshair,
        nameKey: "quickpick",
        color: "#FF2D78",
        gradient: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
      },
      {
        id: "reflexrush",
        icon: Swords,
        nameKey: "reflexrush",
        color: "#FF6B00",
        gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      },
      {
        id: "memoryflash",
        icon: Brain,
        nameKey: "memoryflash",
        color: "#B44DFF",
        gradient: "bg-gradient-to-br from-purple-500/20 to-violet-500/20",
      },
      {
        id: "spotdiff",
        icon: Search,
        nameKey: "spotdiff",
        color: "#F59E0B",
        gradient: "bg-gradient-to-br from-amber-500/20 to-yellow-500/20",
      },
      {
        id: "numberrush",
        icon: Hash,
        nameKey: "numberrush",
        color: "#22D3EE",
        gradient: "bg-gradient-to-br from-cyan-500/20 to-sky-500/20",
      },
      {
        id: "wordscramble",
        icon: Shuffle,
        nameKey: "wordscramble",
        color: "#34D399",
        gradient: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      },
      {
        id: "sequencerush",
        icon: Layers,
        nameKey: "sequencerush",
        color: "#00D4FF",
        gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      },
      {
        id: "wordhunt",
        icon: Search,
        nameKey: "wordhunt",
        color: "#00FF88",
        gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      },
      {
        id: "milliomos",
        icon: Crown,
        nameKey: "milliomos",
        color: "#FFD700",
        gradient: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      },
      {
        id: "kodex",
        icon: BookOpen,
        nameKey: "kodex",
        color: "#818CF8",
        gradient: "bg-gradient-to-br from-indigo-500/20 to-violet-500/20",
      },
    ],
  },
  {
    id: "adventure",
    icon: Mountain,
    color: "#00FF88",
    games: [
      {
        id: "skyclimb",
        icon: Mountain,
        nameKey: "skyclimb",
        color: "#00FF88",
        gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      },
      {
        id: "citydrive",
        icon: Car,
        nameKey: "citydrive",
        color: "#FF6B00",
        gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      },
      {
        id: "racetrack",
        icon: Car,
        nameKey: "racetrack",
        color: "#FF2222",
        gradient: "bg-gradient-to-br from-red-500/20 to-rose-500/20",
      },
      {
        id: "pliziolife",
        icon: HomeIcon,
        nameKey: "pliziolife",
        color: "#FF2D78",
        gradient: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
      },
    ],
  },
  {
    id: "brain",
    icon: Brain,
    color: "#FFD700",
    games: [
      {
        id: "mathtest",
        icon: Calculator,
        nameKey: "mathtest",
        color: "#FFD700",
        gradient: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      },
      {
        id: "deutschtest",
        icon: PenLine,
        nameKey: "deutschtest",
        color: "#00D4FF",
        gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
        langOnly: "de",
      },
    ],
  },
  {
    id: "logic",
    icon: Puzzle,
    color: "#00FF88",
    games: [
      {
        id: "numberpath",
        icon: Puzzle,
        nameKey: "numberpath",
        color: "#00FF88",
        gradient: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
      },
      {
        id: "minisudoku",
        icon: Puzzle,
        nameKey: "minisudoku",
        color: "#00D4FF",
        gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      },
    ],
  },
];

/* Island positions in the 800x600 viewBox */
const ISLAND_POSITIONS: Record<string, { cx: number; cy: number; color: string; glow: string }> = {
  quizreflex: { cx: 200, cy: 140, color: "#00D4FF", glow: "rgba(0,212,255,0.4)" },
  adventure:  { cx: 580, cy: 180, color: "#00FF88", glow: "rgba(0,255,136,0.4)" },
  brain:      { cx: 260, cy: 380, color: "#FFD700", glow: "rgba(255,215,0,0.4)" },
  logic:      { cx: 560, cy: 440, color: "#B44DFF", glow: "rgba(180,77,255,0.4)" },
};

function categoriesToIslands(categories: CategoryDef[]): Island[] {
  return categories.map((cat) => {
    const pos = ISLAND_POSITIONS[cat.id] ?? { cx: 400, cy: 300, color: "#fff", glow: "rgba(255,255,255,0.3)" };
    return {
      id: cat.id,
      label: cat.label,
      color: pos.color,
      glow: pos.glow,
      cx: pos.cx,
      cy: pos.cy,
      games: cat.games.map((g) => ({
        id: g.id,
        icon: g.icon,
        name: g.name,
        color: g.color,
      })) as IslandGame[],
    };
  });
}

function getCategoriesWithTranslations(lang: string): CategoryDef[] {
  // Type guard for translations
  const validLangs = ['en', 'hu', 'de', 'ro'] as const;
  const currentLang = validLangs.includes(lang as any) ? (lang as typeof validLangs[number]) : 'en';
  const t = TRANSLATIONS[lang as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

  const categoryKeys: Array<"quizreflex" | "adventure" | "brain" | "logic"> = ["quizreflex", "adventure", "brain", "logic"];
  const categoryLabels: Record<"quizreflex" | "adventure" | "brain" | "logic", keyof typeof t.categories> = {
    quizreflex: "QUIZ & REFLEX",
    adventure: "ADVENTURE",
    brain: "BRAIN",
    logic: "LOGIC",
  };

  return CATEGORIES_BASE.map((cat, idx) => {
    const catKey = categoryKeys[idx];
    const labelKey = categoryLabels[catKey];

    return {
      ...cat,
      label: t.categories[labelKey],
      games: cat.games
        .filter(game => !game.langOnly || game.langOnly === currentLang)
        .map(game => ({
          id: game.id,
          icon: game.icon,
          nameKey: game.nameKey,
          name: t.games[game.nameKey as keyof typeof t.games] || "Unknown",
          color: game.color,
          gradient: game.gradient,
        })) as any,
    } as CategoryDef;
  });
}

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

function WorldButton() {
  const [completedZones, setCompletedZones] = useState<string[]>([]);
  useEffect(() => {
    setCompletedZones(getWorldProgress().completedZones);
  }, []);

  return (
    <motion.div
      className="w-full max-w-md px-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
    >
      <Link href="/world/">
        <div className="w-full flex items-center gap-4 rounded-2xl px-4 py-3 border border-neon-blue/20 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 hover:border-neon-blue/40 transition-all active:scale-[0.98]">
          <span className="text-2xl">🗺️</span>
          <div className="flex-1">
            <p className="text-white font-bold text-sm leading-tight">Plizio World</p>
            <p className="text-white/40 text-xs">{completedZones.length} / {WORLD_ZONES.length} zóna teljesítve</p>
          </div>
          <div className="flex items-center gap-1">
            {WORLD_ZONES.map((z, i) => (
              <div
                key={z.id}
                className="w-2 h-2 rounded-full"
                style={{
                  background: completedZones.includes(z.id) ? z.color : "rgba(255,255,255,0.12)",
                }}
              />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  const router = useRouter();
  const { lang } = useLang();
  const [streak, setStreak] = useState(0);
  const [cardCount, setCardCount] = useState(0);
  const [specialCount, setSpecialCount] = useState(0);
  const [showAuth, setShowAuth] = useState(false);
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const [username, setUsernameState] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categories, setCategories] = useState<CategoryDef[]>([]);
  const [dailyReward, setDailyReward] = useState<DailyRewardResult | null>(null);

  useEffect(() => {
    setCategories(getCategoriesWithTranslations(lang));
  }, [lang]);

  useEffect(() => {
    setStreak(getStreak());
    setCardCount(getCards().length);
    setSpecialCount(getSpecialCardCount());

    // Daily login reward
    const reward = claimDailyReward();
    if (reward && !reward.alreadyClaimed) {
      setSpecialCount(getSpecialCardCount());
      setDailyReward(reward);
    }
    // Check username
    if (!hasUsername()) {
      setShowUsernameModal(true);
    } else {
      setUsernameState(getUsername());
    }

    // Handle referral link ?ref=1
    const params = new URLSearchParams(window.location.search);
    if (params.get("ref") && !isReferred()) {
      markAsReferred();
      claimReferralReward();
      setSpecialCount(getSpecialCardCount());
    }

    // Check auth and show registration popup after 5 games
    const checkAuth = async () => {
      const user = await getUser();
      setIsLoggedIn(!!user);
      if (!user) {
        const stats = getStats();
        const dismissed = localStorage.getItem("plizio_auth_dismissed");
        if (stats.totalGames >= 5 && !dismissed) {
          setShowAuth(true);
        }
      }
    };
    checkAuth();

    const { data: { subscription } } = onAuthChange((user) => {
      setIsLoggedIn(!!user);
      if (user) syncToSupabase(user.id).catch(() => {});
    });

    // Refresh card + star badge whenever cards change (earn / exchange)
    const refreshCounts = () => {
      setCardCount(getCards().length);
      setSpecialCount(getSpecialCardCount());
    };
    const onVisible = () => { if (document.visibilityState === "visible") refreshCounts(); };
    window.addEventListener("plizio-cards-changed", refreshCounts);
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      subscription.unsubscribe();
      window.removeEventListener("plizio-cards-changed", refreshCounts);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 pt-8 pb-8 gap-6">
      {/* Logo */}
      <Logo />

      {/* Language switcher */}
      <LanguageSwitcher />

      {/* Username greeting */}
      {username && (
        <motion.div
          className="text-white/30 text-sm font-bold tracking-wider"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {username}
        </motion.div>
      )}

      {/* Stats bar */}
      {(streak > 0 || cardCount > 0 || specialCount > 0) && (
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {streak > 0 && (
            <div className="flex items-center gap-1.5">
              <Flame size={16} className="text-gold" style={{ filter: "drop-shadow(0 0 4px rgba(255,215,0,0.4))" }} />
              <span className="text-gold/70 font-bold text-sm">{streak}</span>
            </div>
          )}
          {specialCount > 0 && (
            <div className="flex items-center gap-1.5">
              <Star size={14} className="text-[#E040FB]" style={{ filter: "drop-shadow(0 0 4px rgba(224,64,251,0.4))" }} />
              <span className="text-[#E040FB]/70 font-bold text-sm">{specialCount}</span>
            </div>
          )}
          {cardCount > 0 && (
            <div className="flex items-center gap-1.5">
              <Layers size={14} className="text-white/30" />
              <span className="text-white/30 font-bold text-sm">{cardCount}</span>
            </div>
          )}
        </motion.div>
      )}

      {/* Plizio World button */}
      <WorldButton />

      {/* Island Map */}
      <motion.div
        className="w-full px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <IslandMap islands={categoriesToIslands(categories)} />
      </motion.div>

      {/* Bottom buttons: Profile + Shop + Collection */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        >
          <motion.button
            onClick={() => router.push("/profile")}
            className={`bg-card border p-3.5 rounded-full ${isLoggedIn ? "border-neon-green/20" : "border-white/10"}`}
            style={isLoggedIn ? { boxShadow: "0 0 20px rgba(0,255,136,0.15)" } : undefined}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <User size={24} className={isLoggedIn ? "text-neon-green" : "text-white/40"} />
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, type: "spring" }}
        >
          <motion.button
            onClick={() => router.push("/room")}
            className="bg-card border border-neon-blue/20 p-3.5 rounded-full"
            style={{ boxShadow: "0 0 20px rgba(0,212,255,0.15)" }}
            whileHover={{ scale: 1.15, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <HomeIcon size={24} className="text-neon-blue" style={{ filter: "drop-shadow(0 0 6px rgba(0,212,255,0.5))" }} />
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          <motion.button
            onClick={() => router.push("/shop")}
            className="bg-card border border-[#E040FB]/20 p-3.5 rounded-full"
            style={{ boxShadow: "0 0 20px rgba(224,64,251,0.2)" }}
            whileHover={{ scale: 1.15, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Star size={24} className="text-[#E040FB]" style={{ filter: "drop-shadow(0 0 6px rgba(224,64,251,0.5))" }} />
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, type: "spring" }}
        >
          <motion.button
            onClick={() => router.push("/collection")}
            className="bg-card border border-gold/20 p-3.5 rounded-full"
            style={{ boxShadow: "0 0 20px rgba(255,215,0,0.2)" }}
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Trophy size={24} className="text-gold" style={{ filter: "drop-shadow(0 0 6px rgba(255,215,0,0.5))" }} />
          </motion.button>
        </motion.div>
      </div>

      {/* Username Modal */}
      {showUsernameModal && (
        <UsernameModal
          onDone={(name) => {
            setShowUsernameModal(false);
            setUsernameState(name);
          }}
        />
      )}

      {/* Auth Modal */}
      {showAuth && (
        <AuthModal
          onClose={() => {
            setShowAuth(false);
            localStorage.setItem("plizio_auth_dismissed", "1");
          }}
          onSuccess={() => {
            setShowAuth(false);
            setIsLoggedIn(true);
            setSpecialCount(getSpecialCardCount());
          }}
        />
      )}

      {/* Daily reward popup */}
      <AnimatePresence>
        {dailyReward && !dailyReward.alreadyClaimed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setDailyReward(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              className="relative bg-[#12122A] border border-white/10 rounded-2xl p-6 max-w-xs w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Streak flame */}
              <div className="text-5xl mb-2">
                {dailyReward.streakCount >= 30 ? "🏆" : dailyReward.streakCount >= 14 ? "💎" : dailyReward.streakCount >= 7 ? "🔥" : "⭐"}
              </div>
              <h2 className="text-white font-bold text-xl mb-1">
                {dailyReward.streakBroken ? "Welcome back!" : "Daily Reward!"}
              </h2>
              <p className="text-white/50 text-sm mb-4">
                {dailyReward.streakCount} day streak 🔥
              </p>

              {/* Reward breakdown */}
              <div className="bg-white/5 rounded-xl p-3 mb-4 space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Daily login</span>
                  <span className="text-yellow-400 font-bold">+1 ⭐</span>
                </div>
                {dailyReward.streakBonus > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-orange-400">
                      {dailyReward.streakCount}d streak bonus!
                    </span>
                    <span className="text-orange-400 font-bold">+{dailyReward.streakBonus} ⭐</span>
                  </div>
                )}
                <div className="border-t border-white/10 pt-1 flex justify-between text-sm font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-yellow-400">+{1 + dailyReward.streakBonus} ⭐</span>
                </div>
              </div>

              <button
                onClick={() => setDailyReward(null)}
                className="w-full py-2.5 bg-neon-blue/20 hover:bg-neon-blue/30 border border-neon-blue/40 text-neon-blue rounded-xl font-bold transition-colors"
              >
                Collect!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
