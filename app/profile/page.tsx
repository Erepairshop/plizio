"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, LogOut, Star, Trophy, Flame, Mountain, Shield, Check, AlertCircle, Venus, Mars } from "lucide-react";
import Link from "next/link";
import { getUser, signOut } from "@/lib/auth";
import { getStats, MILESTONES, getClaimedMilestones } from "@/lib/milestones";
import { getSpecialCardCount } from "@/lib/specialCards";
import { getCards } from "@/lib/cards";
import { syncToSupabase } from "@/lib/sync";
import AuthModal from "@/components/AuthModal";
import { getUsername } from "@/lib/username";
import { useLang } from "@/components/LanguageProvider";
import { getGender, setGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getHatDef, getActiveHat, getTrailDef, getActiveTrail } from "@/lib/accessories";
import AvatarCompanion from "@/components/AvatarCompanion";

const T = {
  en: {
    title: "PROFILE",
    notSignedIn: "Not signed in",
    signIn: "Sign In / Register",
    cards: "Cards",
    special: "Special",
    streak: "Streak",
    skyMax: "Sky Max",
    games: "GAMES",
    perfect: "PERFECT",
    milestones: "MILESTONES",
    sync: "Sync",
    syncing: "Syncing...",
    syncDone: "Synced!",
    syncError: "Error",
    signOut: "Sign Out",
    girl: "Girl",
    boy: "Boy",
  },
  hu: {
    title: "PROFIL",
    notSignedIn: "Nincs bejelentkezve",
    signIn: "Bejelentkezés / Regisztráció",
    cards: "Lapok",
    special: "Különleges",
    streak: "Sorozat",
    skyMax: "Ég Max",
    games: "JÁTÉKOK",
    perfect: "TÖKÉLETES",
    milestones: "MÉRFÖLDKÖVEK",
    sync: "Szinkron",
    syncing: "Szinkronizálás...",
    syncDone: "Kész!",
    syncError: "Hiba",
    signOut: "Kijelentkezés",
    girl: "Lány",
    boy: "Fiú",
  },
  de: {
    title: "PROFIL",
    notSignedIn: "Nicht angemeldet",
    signIn: "Anmelden / Registrieren",
    cards: "Karten",
    special: "Spezial",
    streak: "Serie",
    skyMax: "Himmel Max",
    games: "SPIELE",
    perfect: "PERFEKT",
    milestones: "MEILENSTEINE",
    sync: "Synchronisieren",
    syncing: "Synchronisierung...",
    syncDone: "Fertig!",
    syncError: "Fehler",
    signOut: "Abmelden",
    girl: "Mädchen",
    boy: "Junge",
  },
  ro: {
    title: "PROFIL",
    notSignedIn: "Neconectat",
    signIn: "Autentificare / Înregistrare",
    cards: "Cărți",
    special: "Special",
    streak: "Serie",
    skyMax: "Cer Max",
    games: "JOCURI",
    perfect: "PERFECT",
    milestones: "ETAPE",
    sync: "Sincronizare",
    syncing: "Sincronizare...",
    syncDone: "Gata!",
    syncError: "Eroare",
    signOut: "Deconectare",
    girl: "Fată",
    boy: "Băiat",
  },
} as const;

type SyncState = "idle" | "loading" | "done" | "error";

export default function ProfilePage() {
  const { lang } = useLang();
  const t = T[lang] ?? T.en;

  const [user, setUser] = useState<{ id: string; email?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [stats, setStatsState] = useState({ totalGames: 0, perfectScores: 0, highestStreak: 0, skyHighestLevel: 0 });
  const [specialCards, setSpecialCards] = useState(0);
  const [cardCount, setCardCount] = useState(0);
  const [claimedCount, setClaimedCount] = useState(0);
  const [syncState, setSyncState] = useState<SyncState>("idle");

  const [gender, setGenderState] = useState<AvatarGender>("girl");
  const [avatarMood, setAvatarMood] = useState<"idle" | "happy">("idle");
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

  const refreshStats = () => {
    setStatsState(getStats());
    setSpecialCards(getSpecialCardCount());
    setCardCount(getCards().length);
    setClaimedCount(getClaimedMilestones().length);
  };

  useEffect(() => {
    const init = async () => {
      const u = await getUser();
      setUser(u ? { id: u.id, email: u.email } : null);
      setLoading(false);
    };
    init();
    refreshStats();
    setGenderState(getGender());
    setActiveSkin(getSkinDef(getActiveSkin()));
    setActiveFace(getFaceDef(getActiveFace()));
    const topId = getActive("top");
    const bottomId = getActive("bottom");
    const shoeId = getActive("shoe");
    const capeId = getActive("cape");
    const glassesId = getActive("glasses");
    const glovesId = getActive("gloves");
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
    if (!user || syncState === "loading") return;
    setSyncState("loading");
    try {
      await syncToSupabase(user.id);
      refreshStats();
      setSyncState("done");
    } catch {
      setSyncState("error");
    }
    setTimeout(() => setSyncState("idle"), 2500);
  };

  const handleGenderSwitch = (g: AvatarGender) => {
    setGender(g);
    setGenderState(g);
    setAvatarMood("happy");
    setTimeout(() => setAvatarMood("idle"), 1500);
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

  const syncLabel = syncState === "loading" ? t.syncing : syncState === "done" ? t.syncDone : syncState === "error" ? t.syncError : t.sync;
  const syncIcon = syncState === "done" ? <Check size={16} /> : syncState === "error" ? <AlertCircle size={16} /> : <Shield size={16} />;
  const syncClassName = syncState === "done"
    ? "bg-neon-green/10 border border-neon-green/30 text-neon-green"
    : syncState === "error"
    ? "bg-neon-pink/10 border border-neon-pink/30 text-neon-pink"
    : "bg-neon-blue/10 border border-neon-blue/30 text-neon-blue";

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
        <span className="text-white/40 text-xs font-bold tracking-widest">{t.title}</span>
        <div className="w-10" />
      </div>

      {/* Avatar + name section */}
      <motion.div className="flex flex-col items-center gap-3 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

        {/* 3D Avatar */}
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

        {/* Gender toggle */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-1.5">
          <motion.button
            onClick={() => handleGenderSwitch("girl")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              gender === "girl"
                ? "bg-[#E040FB]/20 text-[#E040FB] border border-[#E040FB]/40"
                : "text-white/30"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <Venus size={14} /> {t.girl}
          </motion.button>
          <motion.button
            onClick={() => handleGenderSwitch("boy")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              gender === "boy"
                ? "bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/40"
                : "text-white/30"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <Mars size={14} /> {t.boy}
          </motion.button>
        </div>

        {/* Username + email */}
        {getUsername() && (
          <span className="text-white font-bold text-lg">{getUsername()}</span>
        )}
        {user ? (
          <span className="text-white/30 text-xs">{user.email}</span>
        ) : (
          <span className="text-white/30 text-sm">{t.notSignedIn}</span>
        )}

        {/* Sign in button (not logged in) */}
        {!user && (
          <motion.button
            onClick={() => setShowAuth(true)}
            className="bg-[#E040FB]/15 border border-[#E040FB]/40 text-[#E040FB] font-bold text-sm px-8 py-3 rounded-xl"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >
            {t.signIn}
          </motion.button>
        )}
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-md">
        <StatBox icon={<Trophy size={18} className="text-gold" />} label={t.cards} value={cardCount.toString()} />
        <StatBox icon={<Star size={18} className="text-[#E040FB]" />} label={t.special} value={specialCards.toString()} />
        <StatBox icon={<Flame size={18} className="text-neon-pink" />} label={t.streak} value={stats.highestStreak.toString()} />
        <StatBox icon={<Mountain size={18} className="text-neon-green" />} label={t.skyMax} value={`LVL ${stats.skyHighestLevel}`} />
      </div>

      {/* Progress */}
      <div className="bg-card border border-white/5 rounded-2xl p-4 w-full max-w-md">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white/40 text-xs font-bold tracking-wider">{t.games}</span>
          <span className="text-white/60 text-sm font-bold">{stats.totalGames}</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-white/40 text-xs font-bold tracking-wider">{t.perfect}</span>
          <span className="text-white/60 text-sm font-bold">{stats.perfectScores}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/40 text-xs font-bold tracking-wider">{t.milestones}</span>
          <span className="text-white/60 text-sm font-bold">{claimedCount}/{MILESTONES.length}</span>
        </div>
      </div>

      {/* Actions */}
      {user && (
        <div className="flex gap-3 w-full max-w-md">
          <motion.button
            onClick={handleSync}
            disabled={syncState === "loading"}
            className={`flex-1 font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-60 ${syncClassName}`}
            whileHover={{ scale: syncState === "loading" ? 1 : 1.03 }}
            whileTap={{ scale: syncState === "loading" ? 1 : 0.97 }}
          >
            <motion.div
              animate={syncState === "loading" ? { rotate: 360 } : { rotate: 0 }}
              transition={syncState === "loading" ? { repeat: Infinity, duration: 1, ease: "linear" } : {}}
            >
              {syncIcon}
            </motion.div>
            {syncLabel}
          </motion.button>
          <motion.button
            onClick={handleLogout}
            className="flex-1 bg-neon-pink/10 border border-neon-pink/30 text-neon-pink font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          >
            <LogOut size={16} /> {t.signOut}
          </motion.button>
        </div>
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
