"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, Zap, Shield, Clock, Eye, Mountain, Crosshair, Brain, Check, X } from "lucide-react";
import Link from "next/link";
import { getSpecialCardCount, spendSpecialCards } from "@/lib/specialCards";
import { SKINS, getOwnedSkins, getActiveSkin, setActiveSkin, buySkin, type SkinDef } from "@/lib/skins";
import {
  HATS, TRAILS,
  getOwnedHats, getActiveHat, setActiveHat, buyHat, type HatDef,
  getOwnedTrails, getActiveTrail, setActiveTrail, buyTrail, type TrailDef,
} from "@/lib/accessories";

// ─── POWER-UP DEFINITIONS ────────────────────────────
interface PowerUpDef {
  id: string;
  icon: typeof Zap;
  game: string;
  gameIcon: typeof Mountain;
  color: string;
  price: number;
}

const POWER_UPS: PowerUpDef[] = [
  { id: "sky_extralife", icon: Shield, game: "Sky Climb", gameIcon: Mountain, color: "#00FF88", price: 1 },
  { id: "qp_hint", icon: Eye, game: "Quick Pick", gameIcon: Crosshair, color: "#FF2D78", price: 1 },
  { id: "rg_extratime", icon: Clock, game: "Reflex Grid", gameIcon: Zap, color: "#00D4FF", price: 1 },
  { id: "mf_longerview", icon: Eye, game: "Memory Flash", gameIcon: Brain, color: "#B44DFF", price: 1 },
];

// ─── ABILITY DEFINITIONS ─────────────────────────────
interface AbilityDef {
  id: string;
  icon: string;
  color: string;
  price: number;
}

const ABILITIES: AbilityDef[] = [
  { id: "double_jump", icon: "⬆️", color: "#00FF88", price: 3 },
  { id: "slow_mo", icon: "⏳", color: "#00D4FF", price: 3 },
  { id: "teleport", icon: "🌀", color: "#B44DFF", price: 5 },
  { id: "shield_plus", icon: "🛡️", color: "#FFD700", price: 3 },
];

type Tab = "powerups" | "skins" | "hats" | "trails" | "abilities";

export default function ShopPage() {
  const [balance, setBalance] = useState(0);
  const [ownedSkins, setOwnedSkins] = useState<string[]>(["default"]);
  const [activeSkin, setActiveSkinState] = useState("default");
  const [ownedHats, setOwnedHats] = useState<string[]>([]);
  const [activeHat, setActiveHatState] = useState<string | null>(null);
  const [ownedTrails, setOwnedTrails] = useState<string[]>([]);
  const [activeTrail, setActiveTrailState] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("skins");
  const [notification, setNotification] = useState<string | null>(null);
  const [boughtPowerUps, setBoughtPowerUps] = useState<Record<string, number>>({});

  useEffect(() => {
    setBalance(getSpecialCardCount());
    setOwnedSkins(getOwnedSkins());
    setActiveSkinState(getActiveSkin());
    setOwnedHats(getOwnedHats());
    setActiveHatState(getActiveHat());
    setOwnedTrails(getOwnedTrails());
    setActiveTrailState(getActiveTrail());
    const saved = localStorage.getItem("plizio_powerups");
    if (saved) setBoughtPowerUps(JSON.parse(saved));
  }, []);

  const showNotif = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 2000);
  };

  const handleBuyPowerUp = (pu: PowerUpDef) => {
    if (balance < pu.price) { showNotif("Not enough ⭐"); return; }
    spendSpecialCards(pu.price);
    const updated = { ...boughtPowerUps, [pu.id]: (boughtPowerUps[pu.id] || 0) + 1 };
    setBoughtPowerUps(updated);
    localStorage.setItem("plizio_powerups", JSON.stringify(updated));
    setBalance(getSpecialCardCount());
    showNotif("+1 power-up!");
  };

  const handleBuySkin = (skin: SkinDef) => {
    if (ownedSkins.includes(skin.id)) {
      setActiveSkin(skin.id);
      setActiveSkinState(skin.id);
      showNotif("Skin selected!");
      return;
    }
    if (balance < skin.price) { showNotif("Not enough ⭐"); return; }
    spendSpecialCards(skin.price);
    buySkin(skin.id);
    setOwnedSkins(getOwnedSkins());
    setActiveSkin(skin.id);
    setActiveSkinState(skin.id);
    setBalance(getSpecialCardCount());
    showNotif("Skin purchased!");
  };

  const handleBuyHat = (hat: HatDef) => {
    if (ownedHats.includes(hat.id)) {
      // Toggle: if already active, remove it
      if (activeHat === hat.id) {
        setActiveHat(null);
        setActiveHatState(null);
        showNotif("Hat removed");
      } else {
        setActiveHat(hat.id);
        setActiveHatState(hat.id);
        showNotif("Hat equipped!");
      }
      return;
    }
    if (balance < hat.price) { showNotif("Not enough ⭐"); return; }
    spendSpecialCards(hat.price);
    buyHat(hat.id);
    setOwnedHats(getOwnedHats());
    setActiveHat(hat.id);
    setActiveHatState(hat.id);
    setBalance(getSpecialCardCount());
    showNotif("Hat purchased!");
  };

  const handleBuyTrail = (trail: TrailDef) => {
    if (ownedTrails.includes(trail.id)) {
      if (activeTrail === trail.id) {
        setActiveTrail(null);
        setActiveTrailState(null);
        showNotif("Trail removed");
      } else {
        setActiveTrail(trail.id);
        setActiveTrailState(trail.id);
        showNotif("Trail equipped!");
      }
      return;
    }
    if (balance < trail.price) { showNotif("Not enough ⭐"); return; }
    spendSpecialCards(trail.price);
    buyTrail(trail.id);
    setOwnedTrails(getOwnedTrails());
    setActiveTrail(trail.id);
    setActiveTrailState(trail.id);
    setBalance(getSpecialCardCount());
    showNotif("Trail purchased!");
  };

  const handleBuyAbility = (ab: AbilityDef) => {
    if (balance < ab.price) { showNotif("Not enough ⭐"); return; }
    spendSpecialCards(ab.price);
    const key = `plizio_ability_${ab.id}`;
    const current = parseInt(localStorage.getItem(key) || "0");
    localStorage.setItem(key, (current + 1).toString());
    setBalance(getSpecialCardCount());
    showNotif("+1 ability!");
  };

  const TABS: { id: Tab; label: string }[] = [
    { id: "skins", label: "🎨" },
    { id: "hats", label: "🎩" },
    { id: "trails", label: "✨" },
    { id: "powerups", label: "⚡" },
    { id: "abilities", label: "🏔️" },
  ];

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

        {/* Balance */}
        <motion.div className="flex items-center gap-2 bg-card border border-[#E040FB]/20 px-4 py-2 rounded-xl"
          style={{ boxShadow: "0 0 15px rgba(224,64,251,0.15)" }}
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <Star size={16} className="text-[#E040FB]" style={{ filter: "drop-shadow(0 0 4px rgba(224,64,251,0.5))" }} />
          <span className="text-[#E040FB] font-bold text-sm">{balance}</span>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1.5 overflow-x-auto max-w-md w-full justify-center">
        {TABS.map((t) => (
          <motion.button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-xl font-bold text-sm border transition-all shrink-0 ${
              tab === t.id
                ? "bg-[#E040FB]/15 border-[#E040FB]/40 text-[#E040FB]"
                : "bg-card border-white/5 text-white/30"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {t.label}
          </motion.button>
        ))}
      </div>

      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none"
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          >
            <div className="bg-[#E040FB]/20 border border-[#E040FB]/40 backdrop-blur-md rounded-xl px-5 py-2.5">
              <span className="text-[#E040FB] font-bold text-sm">{notification}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Power-ups tab */}
      {tab === "powerups" && (
        <motion.div className="w-full max-w-md flex flex-col gap-3"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {POWER_UPS.map((pu) => {
            const Icon = pu.icon;
            const GameIcon = pu.gameIcon;
            const owned = boughtPowerUps[pu.id] || 0;
            return (
              <motion.button
                key={pu.id}
                onClick={() => handleBuyPowerUp(pu)}
                className="bg-card border border-white/5 rounded-2xl p-4 flex items-center gap-4 w-full text-left"
                whileHover={{ borderColor: `${pu.color}40` }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-2.5 rounded-xl" style={{ background: `${pu.color}15` }}>
                  <Icon size={22} style={{ color: pu.color, filter: `drop-shadow(0 0 6px ${pu.color}60)` }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <GameIcon size={12} style={{ color: pu.color }} />
                    <span className="text-white/40 text-xs font-bold">{pu.game}</span>
                  </div>
                </div>
                {owned > 0 && (
                  <span className="text-white/20 text-xs font-bold">x{owned}</span>
                )}
                <div className="flex items-center gap-1 bg-[#E040FB]/10 px-3 py-1.5 rounded-lg">
                  <Star size={12} className="text-[#E040FB]" />
                  <span className="text-[#E040FB] font-bold text-xs">{pu.price}</span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      )}

      {/* Skins tab */}
      {tab === "skins" && (
        <motion.div className="w-full max-w-md grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {SKINS.map((skin) => {
            const owned = ownedSkins.includes(skin.id);
            const active = activeSkin === skin.id;
            return (
              <motion.button
                key={skin.id}
                onClick={() => handleBuySkin(skin)}
                className={`bg-card border rounded-2xl p-4 flex flex-col items-center gap-3 ${
                  active ? "border-[#E040FB]/50" : owned ? "border-white/10" : "border-white/5"
                }`}
                style={active ? { boxShadow: "0 0 15px rgba(224,64,251,0.2)" } : undefined}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${skin.bodyColor}40, ${skin.headColor}20)`,
                    border: `2px solid ${skin.emissive}40`,
                    boxShadow: `0 0 10px ${skin.emissive}20`,
                  }}
                >
                  {skin.icon}
                </div>
                {active ? (
                  <div className="flex items-center gap-1">
                    <Check size={12} className="text-[#E040FB]" />
                    <span className="text-[#E040FB] text-xs font-bold">ACTIVE</span>
                  </div>
                ) : owned ? (
                  <span className="text-white/30 text-xs font-bold">SELECT</span>
                ) : (
                  <div className="flex items-center gap-1">
                    <Star size={10} className="text-[#E040FB]" />
                    <span className="text-[#E040FB] text-xs font-bold">{skin.price}</span>
                  </div>
                )}
              </motion.button>
            );
          })}
        </motion.div>
      )}

      {/* Hats tab */}
      {tab === "hats" && (
        <motion.div className="w-full max-w-md grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {HATS.map((hat) => {
            const owned = ownedHats.includes(hat.id);
            const active = activeHat === hat.id;
            return (
              <motion.button
                key={hat.id}
                onClick={() => handleBuyHat(hat)}
                className={`bg-card border rounded-2xl p-4 flex flex-col items-center gap-2 ${
                  active ? "border-[#E040FB]/50" : owned ? "border-white/10" : "border-white/5"
                }`}
                style={active ? { boxShadow: `0 0 15px ${hat.color}30` } : undefined}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    background: `${hat.color}15`,
                    boxShadow: active ? `0 0 12px ${hat.color}30` : undefined,
                  }}
                >
                  {hat.icon}
                </div>
                <span className="text-white/50 text-[10px] font-bold">{hat.name}</span>
                {active ? (
                  <div className="flex items-center gap-1">
                    <Check size={12} className="text-[#E040FB]" />
                    <span className="text-[#E040FB] text-xs font-bold">EQUIPPED</span>
                  </div>
                ) : owned ? (
                  <span className="text-white/30 text-xs font-bold">EQUIP</span>
                ) : (
                  <div className="flex items-center gap-1">
                    <Star size={10} className="text-[#E040FB]" />
                    <span className="text-[#E040FB] text-xs font-bold">{hat.price}</span>
                  </div>
                )}
              </motion.button>
            );
          })}
        </motion.div>
      )}

      {/* Trails tab */}
      {tab === "trails" && (
        <motion.div className="w-full max-w-md grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {TRAILS.map((trail) => {
            const owned = ownedTrails.includes(trail.id);
            const active = activeTrail === trail.id;
            return (
              <motion.button
                key={trail.id}
                onClick={() => handleBuyTrail(trail)}
                className={`bg-card border rounded-2xl p-4 flex flex-col items-center gap-2 ${
                  active ? "border-[#E040FB]/50" : owned ? "border-white/10" : "border-white/5"
                }`}
                style={active ? { boxShadow: `0 0 15px ${trail.color}30` } : undefined}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    background: `${trail.color}15`,
                    boxShadow: active ? `0 0 12px ${trail.color}30` : undefined,
                  }}
                >
                  {trail.icon}
                </div>
                <span className="text-white/50 text-[10px] font-bold">{trail.name}</span>
                {active ? (
                  <div className="flex items-center gap-1">
                    <Check size={12} className="text-[#E040FB]" />
                    <span className="text-[#E040FB] text-xs font-bold">EQUIPPED</span>
                  </div>
                ) : owned ? (
                  <span className="text-white/30 text-xs font-bold">EQUIP</span>
                ) : (
                  <div className="flex items-center gap-1">
                    <Star size={10} className="text-[#E040FB]" />
                    <span className="text-[#E040FB] text-xs font-bold">{trail.price}</span>
                  </div>
                )}
              </motion.button>
            );
          })}
        </motion.div>
      )}

      {/* Abilities tab */}
      {tab === "abilities" && (
        <motion.div className="w-full max-w-md flex flex-col gap-3"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-2 mb-2">
            <Mountain size={14} className="text-[#00FF88]" />
            <span className="text-white/30 text-xs font-bold tracking-wider">SKY CLIMB</span>
          </div>
          {ABILITIES.map((ab) => {
            const owned = parseInt(typeof window !== "undefined" ? localStorage.getItem(`plizio_ability_${ab.id}`) || "0" : "0");
            return (
              <motion.button
                key={ab.id}
                onClick={() => handleBuyAbility(ab)}
                className="bg-card border border-white/5 rounded-2xl p-4 flex items-center gap-4 w-full text-left"
                whileHover={{ borderColor: `${ab.color}40` }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${ab.color}15` }}>
                  {ab.icon}
                </div>
                <div className="flex-1" />
                {owned > 0 && (
                  <span className="text-white/20 text-xs font-bold">x{owned}</span>
                )}
                <div className="flex items-center gap-1 bg-[#E040FB]/10 px-3 py-1.5 rounded-lg">
                  <Star size={12} className="text-[#E040FB]" />
                  <span className="text-[#E040FB] font-bold text-xs">{ab.price}</span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      )}
    </main>
  );
}
