"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, LogOut, User, Star, Trophy, Flame, Mountain, Shield } from "lucide-react";
import Link from "next/link";
import { getUser, signOut } from "@/lib/auth";
import { getStats, MILESTONES, getClaimedMilestones } from "@/lib/milestones";
import { getSpecialCardCount } from "@/lib/specialCards";
import { getCards } from "@/lib/cards";
import { syncToSupabase } from "@/lib/sync";
import AuthModal from "@/components/AuthModal";

export default function ProfilePage() {
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [stats, setStatsState] = useState({ totalGames: 0, perfectScores: 0, highestStreak: 0, skyHighestLevel: 0 });
  const [specialCards, setSpecialCards] = useState(0);
  const [cardCount, setCardCount] = useState(0);
  const [claimedCount, setClaimedCount] = useState(0);

  useEffect(() => {
    const init = async () => {
      const u = await getUser();
      setUser(u ? { id: u.id, email: u.email } : null);
      setLoading(false);
    };
    init();
    setStatsState(getStats());
    setSpecialCards(getSpecialCardCount());
    setCardCount(getCards().length);
    setClaimedCount(getClaimedMilestones().length);
  }, []);

  const handleLogout = async () => {
    await signOut();
    setUser(null);
  };

  const handleSync = async () => {
    if (!user) return;
    try {
      await syncToSupabase(user.id);
    } catch {}
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
          <User size={40} className="text-[#E040FB]" />
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8 gap-6">
      {/* Header */}
      <div className="w-full max-w-md flex items-center justify-between">
        <Link href="/">
          <motion.div className="bg-card border border-white/10 p-2.5 rounded-xl cursor-pointer"
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ArrowLeft size={18} className="text-white/60" />
          </motion.div>
        </Link>
        <span className="text-white/40 text-xs font-bold tracking-widest">PROFIL</span>
        <div className="w-10" />
      </div>

      {!user ? (
        /* Not logged in */
        <motion.div className="flex flex-col items-center gap-6 mt-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <User size={36} className="text-white/20" />
          </div>
          <span className="text-white/30 text-sm">Nincs bejelentkezve</span>
          <motion.button
            onClick={() => setShowAuth(true)}
            className="bg-[#E040FB]/15 border border-[#E040FB]/40 text-[#E040FB] font-bold text-sm px-8 py-3 rounded-xl"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >
            Bejelentkezes / Regisztracio
          </motion.button>
        </motion.div>
      ) : (
        /* Logged in */
        <motion.div className="flex flex-col items-center gap-6 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-[#E040FB]/10 border border-[#E040FB]/30 flex items-center justify-center"
            style={{ boxShadow: "0 0 20px rgba(224,64,251,0.15)" }}>
            <User size={36} className="text-[#E040FB]" />
          </div>
          <span className="text-white/50 text-sm">{user.email}</span>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 w-full">
            <StatBox icon={<Trophy size={18} className="text-gold" />} label="Kartyak" value={cardCount.toString()} />
            <StatBox icon={<Star size={18} className="text-[#E040FB]" />} label="Kulonleges" value={specialCards.toString()} />
            <StatBox icon={<Flame size={18} className="text-neon-pink" />} label="Streak" value={stats.highestStreak.toString()} />
            <StatBox icon={<Mountain size={18} className="text-neon-green" />} label="Sky Max" value={`LVL ${stats.skyHighestLevel}`} />
          </div>

          {/* Progress */}
          <div className="bg-card border border-white/5 rounded-2xl p-4 w-full">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/40 text-xs font-bold tracking-wider">JATEKOK</span>
              <span className="text-white/60 text-sm font-bold">{stats.totalGames}</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/40 text-xs font-bold tracking-wider">PERFECT</span>
              <span className="text-white/60 text-sm font-bold">{stats.perfectScores}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/40 text-xs font-bold tracking-wider">MILESTONEOK</span>
              <span className="text-white/60 text-sm font-bold">{claimedCount}/{MILESTONES.length}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 w-full">
            <motion.button
              onClick={handleSync}
              className="flex-1 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            >
              <Shield size={16} /> Szinkron
            </motion.button>
            <motion.button
              onClick={handleLogout}
              className="flex-1 bg-neon-pink/10 border border-neon-pink/30 text-neon-pink font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            >
              <LogOut size={16} /> Kijelentkezes
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Auth modal */}
      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onSuccess={() => {
            setShowAuth(false);
            getUser().then((u) => setUser(u ? { id: u.id, email: u.email } : null));
          }}
        />
      )}
    </main>
  );
}

function StatBox({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-card border border-white/5 rounded-xl p-4 flex flex-col items-center gap-2">
      {icon}
      <span className="text-white/70 font-bold text-sm">{value}</span>
      <span className="text-white/25 text-[10px] font-bold tracking-wider">{label}</span>
    </div>
  );
}
