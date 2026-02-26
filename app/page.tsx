"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Crosshair, Zap, Brain, Mountain, Trophy, Flame, Calendar, Layers, Star, User, type LucideIcon } from "lucide-react";
import Logo from "@/components/Logo";
import GameCard from "@/components/GameCard";
import { getCards } from "@/lib/cards";
import { getSpecialCardCount, markAsReferred, isReferred, claimReferralReward } from "@/lib/specialCards";
import { getStats } from "@/lib/milestones";
import { getUser, onAuthChange } from "@/lib/auth";
import { syncToSupabase } from "@/lib/sync";
import AuthModal from "@/components/AuthModal";

interface GameDef {
  id: string;
  icon: LucideIcon;
  name: string;
  color: string;
  gradient: string;
}

interface CategoryDef {
  label: string;
  icon: LucideIcon;
  color: string;
  games: GameDef[];
}

const CATEGORIES: CategoryDef[] = [
  {
    label: "QUIZ & REFLEX",
    icon: Zap,
    color: "#00D4FF",
    games: [
      {
        id: "quickpick",
        icon: Crosshair,
        name: "Quick Pick",
        color: "#FF2D78",
        gradient: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
      },
      {
        id: "reflexgrid",
        icon: Zap,
        name: "Reflex Grid",
        color: "#00D4FF",
        gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      },
      {
        id: "memoryflash",
        icon: Brain,
        name: "Memory Flash",
        color: "#B44DFF",
        gradient: "bg-gradient-to-br from-purple-500/20 to-violet-500/20",
      },
    ],
  },
  {
    label: "ADVENTURE",
    icon: Mountain,
    color: "#00FF88",
    games: [
      {
        id: "skyclimb",
        icon: Mountain,
        name: "Sky Climb",
        color: "#00FF88",
        gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      },
    ],
  },
];

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

function hasPlayedDailyToday(): boolean {
  if (typeof window === "undefined") return false;
  const key = `plizio_daily_${Math.floor(Date.now() / 86400000)}`;
  return localStorage.getItem(key) !== null;
}

export default function Home() {
  const router = useRouter();
  const [streak, setStreak] = useState(0);
  const [cardCount, setCardCount] = useState(0);
  const [specialCount, setSpecialCount] = useState(0);
  const [dailyPlayed, setDailyPlayed] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setStreak(getStreak());
    setCardCount(getCards().length);
    setSpecialCount(getSpecialCardCount());
    setDailyPlayed(hasPlayedDailyToday());

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
      if (user) {
        // Background sync
        syncToSupabase(user.id).catch(() => {});
      } else {
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

    return () => subscription.unsubscribe();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-10">
      {/* Logo */}
      <Logo />

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

      {/* Daily Challenge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          onClick={() => router.push("/daily")}
          className={`bg-card border-2 rounded-2xl px-6 py-3.5 flex items-center gap-3 ${
            dailyPlayed ? "border-white/5 opacity-40" : "border-gold/30"
          }`}
          style={!dailyPlayed ? { boxShadow: "0 0 20px rgba(255,215,0,0.12)" } : undefined}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Calendar
            size={22}
            className={dailyPlayed ? "text-white/30" : "text-gold"}
            style={!dailyPlayed ? { filter: "drop-shadow(0 0 6px rgba(255,215,0,0.4))" } : undefined}
          />
          <span className={`text-xs font-bold tracking-widest ${dailyPlayed ? "text-white/30" : "text-gold/80"}`}>
            DAILY
          </span>
          {!dailyPlayed && (
            <motion.div
              className="w-2 h-2 rounded-full bg-gold"
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          )}
        </motion.button>
      </motion.div>

      {/* Categories */}
      <div className="flex flex-col items-center gap-8 w-full max-w-md px-2">
        {CATEGORIES.map((cat, ci) => {
          const CatIcon = cat.icon;
          return (
            <motion.div
              key={cat.label}
              className="w-full flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + ci * 0.2 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 w-full">
                <div className="h-px flex-1 opacity-20" style={{ background: `linear-gradient(to right, transparent, ${cat.color})` }} />
                <div className="flex items-center gap-2">
                  <CatIcon size={14} style={{ color: cat.color, filter: `drop-shadow(0 0 6px ${cat.color}60)` }} />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: `${cat.color}90` }}>
                    {cat.label}
                  </span>
                </div>
                <div className="h-px flex-1 opacity-20" style={{ background: `linear-gradient(to left, transparent, ${cat.color})` }} />
              </div>

              {/* Games in this category */}
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
