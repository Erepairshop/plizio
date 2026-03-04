"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Crosshair, Zap, Brain, Mountain, Trophy, Flame, Layers, Star, User, ChevronDown, BookOpen, Car, Search, Hash, Shuffle, Crown, Calculator, Swords, PenLine, Puzzle, type LucideIcon } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import GameCard from "@/components/GameCard";
import { getCards } from "@/lib/cards";
import { getSpecialCardCount, markAsReferred, isReferred, claimReferralReward } from "@/lib/specialCards";
import { getStats } from "@/lib/milestones";
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
    ],
  },
];

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
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Initialize categories with translations
    const translatedCategories = getCategoriesWithTranslations(lang);
    setCategories(translatedCategories);

    // Initialize open/closed state — restore from localStorage if saved
    const savedRaw = typeof window !== "undefined" ? localStorage.getItem("plizio_cat_open") : null;
    const savedArr: boolean[] = savedRaw ? JSON.parse(savedRaw) : [];
    const initialOpenState: Record<string, boolean> = {};
    translatedCategories.forEach((cat, i) => {
      initialOpenState[cat.label] = savedArr[i] ?? false;
    });
    setOpenCategories(initialOpenState);
  }, [lang]);

  useEffect(() => {
    setStreak(getStreak());
    setCardCount(getCards().length);
    setSpecialCount(getSpecialCardCount());
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
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-10">
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

      {/* Categories */}
      <div className="flex flex-col items-center gap-6 w-full max-w-md px-2">
        {categories.map((cat, ci) => {
          const CatIcon = cat.icon;
          const isOpen = openCategories[cat.label] ?? true;
          const isEmpty = cat.games.length === 0;
          return (
            <motion.div
              key={cat.label}
              className="w-full flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + ci * 0.2 }}
            >
              {/* Category header - clickable to toggle */}
              <button
                onClick={() => setOpenCategories(prev => {
                  const newState = { ...prev, [cat.label]: !prev[cat.label] };
                  const arr = categories.map(c => newState[c.label] ?? false);
                  localStorage.setItem("plizio_cat_open", JSON.stringify(arr));
                  return newState;
                })}
                className="flex items-center gap-3 w-full group cursor-pointer"
              >
                <div className="h-px flex-1 opacity-20" style={{ background: `linear-gradient(to right, transparent, ${cat.color})` }} />
                <div className="flex items-center gap-2">
                  <CatIcon size={14} style={{ color: cat.color, filter: `drop-shadow(0 0 6px ${cat.color}60)` }} />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: `${cat.color}90` }}>
                    {cat.label}
                  </span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={12} style={{ color: `${cat.color}60` }} />
                  </motion.div>
                </div>
                <div className="h-px flex-1 opacity-20" style={{ background: `linear-gradient(to left, transparent, ${cat.color})` }} />
              </button>

              {/* Games in this category */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden w-full"
                  >
                    {isEmpty ? (
                      <div className="flex flex-col items-center gap-2 py-4">
                        <CatIcon size={24} style={{ color: `${cat.color}30` }} />
                        <span className="text-[10px] font-bold tracking-wider" style={{ color: `${cat.color}40` }}>
                          {TRANSLATIONS[lang as keyof typeof TRANSLATIONS]?.ui?.comingSoon || "COMING SOON"}
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        {cat.games.map((game, gi) => (
                          <GameCard
                            key={game.id}
                            icon={game.icon}
                            name={game.name}
                            color={game.color}
                            gradient={game.gradient}
                            href={`/${game.id}`}
                            delay={0.4 + ci * 0.2 + gi * 0.1}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

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
          transition={{ delay: 1, type: "spring" }}
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
    </main>
  );
}
