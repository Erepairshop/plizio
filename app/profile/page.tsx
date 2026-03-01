"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, LogOut, Star, Trophy, Flame, Mountain, Shield, Venus, Mars } from "lucide-react";
import Link from "next/link";
import { getUser, signOut } from "@/lib/auth";
import { getStats, MILESTONES, getClaimedMilestones } from "@/lib/milestones";
import { getSpecialCardCount } from "@/lib/specialCards";
import { getCards } from "@/lib/cards";
import { syncToSupabase } from "@/lib/sync";
import AuthModal from "@/components/AuthModal";
import { getUsername } from "@/lib/username";
import { getGender, setGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getHatDef, getActiveHat, getTrailDef, getActiveTrail } from "@/lib/accessories";
import AvatarCompanion from "@/components/AvatarCompanion";

export default function ProfilePage() {
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [stats, setStatsState] = useState({ totalGames: 0, perfectScores: 0, highestStreak: 0, skyHighestLevel: 0 });
  const [specialCards, setSpecialCards] = useState(0);
  const [cardCount, setCardCount] = useState(0);
  const [claimedCount, setClaimedCount] = useState(0);
  const [gender, setGenderState] = useState<AvatarGender>('girl');
  const [avatarMood, setAvatarMood] = useState<'idle' | 'happy'>('idle');

  // Avatar customization
  const [activeSkin, setActiveSkin] = useState<ReturnType<typeof getSkinDef> | null>(null);
  const [activeFace, setActiveFace] = useState<ReturnType<typeof getFaceDef> | null>(null);
  const [activeTop, setActiveTop] = useState<ReturnType<typeof getTopDef> | null>(null);
  const [activeBottom, setActiveBottom] = useState<ReturnType<typeof getBottomDef> | null>(null);
  const [activeShoe, setActiveShoe] = useState<ReturnType<typeof getShoeDef> | null>(null);
  const [activeCape, setActiveCape] = useState<ReturnType<typeof getCapeDef> | null>(null);
  const [activeGlasses, setActiveGlasses] = useState<ReturnType<typeof getGlassesDef> | null>(null);
  const [activeGloves, setActiveGloves] = useState<ReturnType<typeof getGloveDef> | null>(null);
  const [activeHat, setActiveHat] = useState<ReturnType<typeof getHatDef> | null>(null);
  const [activeTrail, setActiveTrail] = useState<ReturnType<typeof getTrailDef> | null>(null);

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
    setGenderState(getGender());

    // Load avatar customization
    setActiveSkin(getSkinDef(getActiveSkin()));
    setActiveFace(getFaceDef(getActiveFace()));
    const topId = getActive('top');
    const bottomId = getActive('bottom');
    const shoeId = getActive('shoe');
    const capeId = getActive('cape');
    const glassesId = getActive('glasses');
    const glovesId = getActive('gloves');
    const hatId = getActiveHat();
    const trailId = getActiveTrail();
    setActiveTop(topId ? getTopDef(topId) : null);
    setActiveBottom(bottomId ? getBottomDef(bottomId) : null);
    setActiveShoe(shoeId ? getShoeDef(shoeId) : null);
    setActiveCape(capeId ? getCapeDef(capeId) : null);
    setActiveGlasses(glassesId ? getGlassesDef(glassesId) : null);
    setActiveGloves(glovesId ? getGloveDef(glovesId) : null);
    setActiveHat(hatId ? getHatDef(hatId) : null);
    setActiveTrail(trailId ? getTrailDef(trailId) : null);
  }, []);

  const handleLogout = async () => {
    await signOut();
    setUser(null);
  };

  const handleSync = async () => {
    if (!user) return;
    try { await syncToSupabase(user.id); } catch {}
  };

  const handleGenderSwitch = (g: AvatarGender) => {
    setGender(g);
    setGenderState(g);
    setAvatarMood('happy');
    setTimeout(() => setAvatarMood('idle'), 1500);
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
          <div className="w-10 h-10 rounded-full border-4 border-[#E040FB] border-t-transparent" />
        </motion.div>
      </main>
    );
  }

  const username = getUsername();

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8 gap-5">
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

      {/* Avatar + name section */}
      <motion.div className="flex flex-col items-center gap-3 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

        {/* 3D Avatar display */}
        <div className="relative w-52 h-52 sm:w-60 sm:h-60">
          <AvatarCompanion
            mood={avatarMood}
            fixed={false}
            gender={gender}
            activeSkin={activeSkin}
            activeFace={activeFace}
            activeTop={activeTop}
            activeBottom={activeBottom}
            activeShoe={activeShoe}
            activeCape={activeCape}
            activeGlasses={activeGlasses}
            activeGloves={activeGloves}
            activeHat={activeHat}
            activeTrail={activeTrail}
          />
        </div>

        {/* Gender switch */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-1.5">
          <motion.button
            onClick={() => handleGenderSwitch('girl')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              gender === 'girl'
                ? 'bg-[#E040FB]/20 text-[#E040FB] border border-[#E040FB]/40'
                : 'text-white/30'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <Venus size={14} /> Lány
          </motion.button>
          <motion.button
            onClick={() => handleGenderSwitch('boy')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              gender === 'boy'
                ? 'bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/40'
                : 'text-white/30'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <Mars size={14} /> Fiú
          </motion.button>
        </div>

        {/* Username */}
        {username && (
          <span className="text-white font-bold text-lg">{username}</span>
        )}
        {user && (
          <span className="text-white/30 text-xs">{user.email}</span>
        )}
        {!user && (
          <span className="text-white/30 text-sm">Nincs bejelentkezve</span>
        )}
      </motion.div>

      {/* Stats */}
      <motion.div className="grid grid-cols-2 gap-3 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <StatBox icon={<Trophy size={18} className="text-yellow-400" />} label="Kártyák" value={cardCount.toString()} />
        <StatBox icon={<Star size={18} className="text-[#E040FB]" />} label="Különleges" value={specialCards.toString()} />
        <StatBox icon={<Flame size={18} className="text-orange-400" />} label="Streak" value={stats.highestStreak.toString()} />
        <StatBox icon={<Mountain size={18} className="text-green-400" />} label="Sky Max" value={`LVL ${stats.skyHighestLevel}`} />
      </motion.div>

      {/* Progress */}
      <motion.div className="bg-card border border-white/5 rounded-2xl p-4 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-white/40 text-xs font-bold tracking-wider">JÁTÉKOK</span>
          <span className="text-white/60 text-sm font-bold">{stats.totalGames}</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-white/40 text-xs font-bold tracking-wider">TÖKÉLETES</span>
          <span className="text-white/60 text-sm font-bold">{stats.perfectScores}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/40 text-xs font-bold tracking-wider">MÉRFÖLDKÖVEK</span>
          <span className="text-white/60 text-sm font-bold">{claimedCount}/{MILESTONES.length}</span>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div className="flex gap-3 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        {user ? (
          <>
            <motion.button
              onClick={handleSync}
              className="flex-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            >
              <Shield size={16} /> Szinkron
            </motion.button>
            <motion.button
              onClick={handleLogout}
              className="flex-1 bg-pink-500/10 border border-pink-500/30 text-pink-400 font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            >
              <LogOut size={16} /> Kijelentkezés
            </motion.button>
          </>
        ) : (
          <motion.button
            onClick={() => setShowAuth(true)}
            className="flex-1 bg-[#E040FB]/15 border border-[#E040FB]/40 text-[#E040FB] font-bold text-sm py-3 rounded-xl"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >
            Bejelentkezés / Regisztráció
          </motion.button>
        )}
      </motion.div>

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
