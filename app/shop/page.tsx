"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, Zap, Shield, Clock, Eye, Mountain, Crosshair, Brain, Check, Car, X, Gauge, Flame, Cog, Wind, Crown, Shuffle, Scissors, Venus, Mars } from "lucide-react";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender, setGender, getAvatarScale, setAvatarScale, type AvatarGender } from "@/lib/gender";
import { useLang } from "@/components/LanguageProvider";
import type { Language } from "@/lib/language";
import Link from "next/link";
import { getSpecialCardCount, spendSpecialCards } from "@/lib/specialCards";
import { getUser } from "@/lib/auth";
import { uploadToSupabase } from "@/lib/sync";
import { SKINS, getOwnedSkins, getActiveSkin, setActiveSkin, buySkin, type SkinDef } from "@/lib/skins";
import {
  HATS, TRAILS,
  getOwnedHats, getActiveHat, setActiveHat, buyHat, type HatDef,
  getOwnedTrails, getActiveTrail, setActiveTrail, buyTrail, type TrailDef,
} from "@/lib/accessories";
import { HAIR_STYLES, getOwnedHair, getActiveHair, setActiveHair, buyHairStyle, type HairDef } from "@/lib/hair";
import {
  TOPS, BOTTOMS, SHOES, CAPES, GLASSES, GLOVES,
  getOwned, getActive, setActive, buyItem,
  type TopDef, type BottomDef, type ShoeDef, type CapeDef, type GlassesDef, type GloveDef,
} from "@/lib/clothing";
import { FACES, getOwnedFaces, getActiveFace, setActiveFace, buyFace, type FaceDef } from "@/lib/faces";

// ─── CAR DEFINITIONS (shared with citydrive) ────────────
interface CarDef {
  id: string; name: string; price: number; color: string;
  maxSpeed: number; accel: number; handling: number;
  canDrift: boolean; canNitro: boolean;
  desc: string;
}

const CARS: CarDef[] = [
  { id: "starter", name: "Starter", price: 0, color: "#999999", maxSpeed: 19, accel: 15, handling: 2.5, canDrift: false, canNitro: false, desc: "Megbízható kezdő autó. Lassú de könnyen kezelhető." },
  { id: "sedan", name: "Sedan", price: 2, color: "#0066FF", maxSpeed: 25, accel: 18, handling: 2.8, canDrift: false, canNitro: false, desc: "Kiegyensúlyozott családi szedán. Jó gyorsulás és kezelhetőség." },
  { id: "muscle", name: "Muscle", price: 5, color: "#FF6600", maxSpeed: 32, accel: 22, handling: 2.5, canDrift: true, canNitro: false, desc: "Erős izomautó drift képességgel. Nehezebb a kormányzás." },
  { id: "racer", name: "Racer", price: 10, color: "#FF2222", maxSpeed: 38, accel: 26, handling: 3.2, canDrift: true, canNitro: false, desc: "Versenyautó. Kiváló sebesség és kezelhetőség drifttel." },
  { id: "supercar", name: "Supercar", price: 20, color: "#9933FF", maxSpeed: 45, accel: 30, handling: 3.5, canDrift: true, canNitro: true, desc: "A legjobb. Nitro boost, drift, maximális sebesség és gyorsulás." },
];

const OWNED_CARS_KEY = "citydrive_owned_cars";
const ACTIVE_CAR_KEY = "citydrive_active_car";
function getOwnedCarsLS(): string[] { try { return JSON.parse(localStorage.getItem(OWNED_CARS_KEY) || '["starter"]'); } catch { return ["starter"]; } }
function setOwnedCarsLS(ids: string[]) { try { localStorage.setItem(OWNED_CARS_KEY, JSON.stringify(ids)); } catch {} }
function getActiveCarLS(): string { try { return localStorage.getItem(ACTIVE_CAR_KEY) || "starter"; } catch { return "starter"; } }
function setActiveCarLS(id: string) { try { localStorage.setItem(ACTIVE_CAR_KEY, id); } catch {} }

// ─── POWER-UP DEFINITIONS ────────────────────────────
interface PowerUpDef {
  id: string;
  name: string;
  icon: typeof Zap;
  game: string;
  gameIcon: typeof Mountain;
  color: string;
  price: number;
}

const POWER_UPS: PowerUpDef[] = [
  { id: "sky_extralife", name: "Extra Life", icon: Shield, game: "Sky Climb", gameIcon: Mountain, color: "#00FF88", price: 1 },
  { id: "qp_hint", name: "Hint", icon: Eye, game: "Quick Pick", gameIcon: Crosshair, color: "#FF2D78", price: 1 },
  { id: "rg_extratime", name: "Extra Time", icon: Clock, game: "Reflex Grid", gameIcon: Zap, color: "#00D4FF", price: 1 },
  { id: "mf_longerview", name: "Longer View", icon: Eye, game: "Memory Flash", gameIcon: Brain, color: "#B44DFF", price: 1 },
  { id: "mm_extra5050", name: "Extra 50:50", icon: Scissors, game: "Milliomos", gameIcon: Crown, color: "#FFD700", price: 1 },
  { id: "mm_doubledip", name: "Double Dip", icon: Shield, game: "Milliomos", gameIcon: Crown, color: "#FFD700", price: 2 },
  { id: "ws_reveal", name: "Reveal Letter", icon: Eye, game: "Word Scramble", gameIcon: Shuffle, color: "#34D399", price: 1 },
  { id: "ws_extratime", name: "Extra Time", icon: Clock, game: "Word Scramble", gameIcon: Shuffle, color: "#34D399", price: 1 },
];

// ─── ABILITY DEFINITIONS ─────────────────────────────
interface AbilityDef {
  id: string;
  name: string;
  icon: string;
  color: string;
  price: number;
}

const ABILITIES: AbilityDef[] = [
  { id: "double_jump", name: "Double Jump", icon: "⬆️", color: "#00FF88", price: 3 },
  { id: "slow_mo", name: "Slow Motion", icon: "⏳", color: "#00D4FF", price: 3 },
  { id: "teleport", name: "Teleport", icon: "🌀", color: "#B44DFF", price: 5 },
  { id: "shield_plus", name: "Shield+", icon: "🛡️", color: "#FFD700", price: 3 },
];

type Tab = "cars" | "powerups" | "skins" | "abilities";

// ─── TRANSLATIONS ──────────────────────────────────
type ShopTranslations = {
  header: string;
  tabs: Record<Tab, string>;
  skinSubs: Record<"skin" | "face" | "hair" | "top" | "bottom" | "shoe" | "hat" | "cape" | "glasses" | "gloves" | "trail", string>;
  buttons: {
    select: string;
    free: string;
    unlockFree: string;
    active: string;
    tap: string;
    drift: string;
    nitro: string;
  };
  notifications: {
    notEnough: string;
    skinSelected: string;
    skinPurchased: string;
    faceSelected: string;
    facePurchased: string;
    hatRemoved: string;
    hatEquipped: string;
    hatPurchased: string;
    trailRemoved: string;
    trailEquipped: string;
    trailPurchased: string;
    equipped: string;
    unequipped: string;
    unlocked: string;
    purchased: string;
    powerUpAdded: string;
    abilityAdded: string;
  };
  carStats: {
    spd: string;
    acc: string;
    hdl: string;
  };
  carDescriptions: Record<string, string>;
  preview: {
    title: string;
    hint: string;
    girl: string;
    boy: string;
    size: string;
  };
};

const SHOP_TRANSLATIONS: Record<Language, ShopTranslations> = {
  en: {
    header: "SHOP",
    tabs: {
      cars: "Cars",
      skins: "Skins",
      powerups: "Boost",
      abilities: "Skills",
    },
    skinSubs: {
      skin: "Skin",
      face: "Face",
      hair: "Hair",
      top: "Top",
      bottom: "Pants",
      shoe: "Shoes",
      hat: "Hats",
      cape: "Cape",
      glasses: "Glasses",
      gloves: "Gloves",
      trail: "Trails",
    },
    buttons: {
      select: "Select",
      free: "Free",
      unlockFree: "Unlock Free",
      active: "ACTIVE",
      tap: "TAP",
      drift: "DRIFT",
      nitro: "NITRO",
    },
    notifications: {
      notEnough: "Not enough ⭐",
      skinSelected: "Skin selected!",
      skinPurchased: "Skin purchased!",
      faceSelected: "Face selected!",
      facePurchased: "Face purchased!",
      hatRemoved: "Hat removed",
      hatEquipped: "Hat equipped!",
      hatPurchased: "Hat purchased!",
      trailRemoved: "Trail removed",
      trailEquipped: "Trail equipped!",
      trailPurchased: "Trail purchased!",
      equipped: "Equipped!",
      unequipped: "Unequipped!",
      unlocked: "Unlocked!",
      purchased: "Purchased!",
      powerUpAdded: "+1 power-up!",
      abilityAdded: "+1 ability!",
    },
    carStats: {
      spd: "SPD",
      acc: "ACC",
      hdl: "HDL",
    },
    carDescriptions: {
      starter: "Reliable starter car. Slow but easy to handle.",
      sedan: "Balanced family sedan. Good acceleration and handling.",
      muscle: "Powerful muscle car with drift capability. Harder steering.",
      racer: "Racing car. Excellent speed and handling with drift.",
      supercar: "The best. Nitro boost, drift, maximum speed and acceleration.",
    },
    preview: {
      title: "AVATAR PREVIEW",
      hint: "Buy items and see them on your avatar instantly!",
      girl: "Girl",
      boy: "Boy",
      size: "Size",
    },
  },
  hu: {
    header: "BOLT",
    tabs: {
      cars: "Autók",
      skins: "Megjelenés",
      powerups: "Feltuning",
      abilities: "Képességek",
    },
    skinSubs: {
      skin: "Skin",
      face: "Fej",
      hair: "Haj",
      top: "Felső",
      bottom: "Alsó",
      shoe: "Cipő",
      hat: "Kalap",
      cape: "Köpeny",
      glasses: "Szemüveg",
      gloves: "Kesztyű",
      trail: "Nyomvonal",
    },
    buttons: {
      select: "Kiválaszt",
      free: "Ingyenes",
      unlockFree: "Feloldás",
      active: "AKTÍV",
      tap: "KOPPINTS",
      drift: "DRIFT",
      nitro: "NITRO",
    },
    notifications: {
      notEnough: "Nincs elég ⭐",
      skinSelected: "Skin kiválasztva!",
      skinPurchased: "Skin megvásárolva!",
      faceSelected: "Fej kiválasztva!",
      facePurchased: "Fej megvásárolva!",
      hatRemoved: "Kalap eltávolítva",
      hatEquipped: "Kalap felhelyezve!",
      hatPurchased: "Kalap megvásárolva!",
      trailRemoved: "Nyomvonal eltávolítva",
      trailEquipped: "Nyomvonal felhelyezve!",
      trailPurchased: "Nyomvonal megvásárolva!",
      equipped: "Felhelyezve!",
      unequipped: "Levéve!",
      unlocked: "Feloldva!",
      purchased: "Megvásárolva!",
      powerUpAdded: "+1 feltuning!",
      abilityAdded: "+1 képesség!",
    },
    carStats: {
      spd: "SEP",
      acc: "GYO",
      hdl: "KOR",
    },
    carDescriptions: {
      starter: "Megbízható kezdő autó. Lassú de könnyen kezelhető.",
      sedan: "Kiegyensúlyozott családi szedán. Jó gyorsulás és kezelhetőség.",
      muscle: "Erős izomautó drift képességgel. Nehezebb a kormányzás.",
      racer: "Versenyautó. Kiváló sebesség és kezelhetőség drifttel.",
      supercar: "A legjobb. Nitro boost, drift, maximális sebesség és gyorsulás.",
    },
    preview: {
      title: "AVATÁR ELŐNÉZET",
      hint: "Vásárolj tárgyakat, és azonnal látod az avatáron!",
      girl: "Lány",
      boy: "Fiú",
      size: "Méret",
    },
  },
  de: {
    header: "SHOP",
    tabs: {
      cars: "Autos",
      skins: "Skins",
      powerups: "Boost",
      abilities: "Fähigkeiten",
    },
    skinSubs: {
      skin: "Skin",
      face: "Gesicht",
      hair: "Haare",
      top: "Oberteil",
      bottom: "Unterhose",
      shoe: "Schuhe",
      hat: "Hüte",
      cape: "Umhang",
      glasses: "Brille",
      gloves: "Handschuhe",
      trail: "Spur",
    },
    buttons: {
      select: "Auswählen",
      free: "Kostenlos",
      unlockFree: "Freischalten",
      active: "AKTIV",
      tap: "TAP",
      drift: "DRIFT",
      nitro: "NITRO",
    },
    notifications: {
      notEnough: "Nicht genug ⭐",
      skinSelected: "Skin ausgewählt!",
      skinPurchased: "Skin gekauft!",
      faceSelected: "Gesicht ausgewählt!",
      facePurchased: "Gesicht gekauft!",
      hatRemoved: "Hut entfernt",
      hatEquipped: "Hut angelegt!",
      hatPurchased: "Hut gekauft!",
      trailRemoved: "Spur entfernt",
      trailEquipped: "Spur angelegt!",
      trailPurchased: "Spur gekauft!",
      equipped: "Angelegt!",
      unequipped: "Entfernt!",
      unlocked: "Freigeschaltet!",
      purchased: "Gekauft!",
      powerUpAdded: "+1 Boost!",
      abilityAdded: "+1 Fähigkeit!",
    },
    carStats: {
      spd: "GES",
      acc: "BES",
      hdl: "HAN",
    },
    carDescriptions: {
      starter: "Zuverlässiges Anfängerauto. Langsam aber leicht zu handhaben.",
      sedan: "Ausgewogene Familienkombi. Gute Beschleunigung und Handling.",
      muscle: "Starkes Muscle Car mit Driftfähigkeit. Schwierigere Lenkung.",
      racer: "Rennwagen. Ausgezeichnete Geschwindigkeit und Handling mit Drift.",
      supercar: "Das Beste. Nitro-Boost, Drift, maximale Geschwindigkeit und Beschleunigung.",
    },
    preview: {
      title: "AVATAR-VORSCHAU",
      hint: "Kaufe Gegenstände und sieh sie sofort auf deinem Avatar!",
      girl: "Mädchen",
      boy: "Junge",
      size: "Größe",
    },
  },
  ro: {
    header: "MAGAZIN",
    tabs: {
      cars: "Mașini",
      skins: "Aspecte",
      powerups: "Boost",
      abilities: "Abilități",
    },
    skinSubs: {
      skin: "Aspect",
      face: "Față",
      hair: "Păr",
      top: "Tricou",
      bottom: "Pantaloni",
      shoe: "Pantofi",
      hat: "Pălării",
      cape: "Pelerinã",
      glasses: "Ochelari",
      gloves: "Mănuși",
      trail: "Urmă",
    },
    buttons: {
      select: "Selecteaza",
      free: "Gratuit",
      unlockFree: "Deblochează",
      active: "ACTIV",
      tap: "APASÃ",
      drift: "DRIFT",
      nitro: "NITRO",
    },
    notifications: {
      notEnough: "Nu sunt suficiente ⭐",
      skinSelected: "Aspect selectat!",
      skinPurchased: "Aspect cumpărat!",
      faceSelected: "Față selectată!",
      facePurchased: "Față cumpărată!",
      hatRemoved: "Pălărie eliminată",
      hatEquipped: "Pălărie pusă!",
      hatPurchased: "Pălărie cumpărată!",
      trailRemoved: "Urmă eliminată",
      trailEquipped: "Urmă pusă!",
      trailPurchased: "Urmă cumpărată!",
      equipped: "Pus!",
      unequipped: "Scos!",
      unlocked: "Deblocat!",
      purchased: "Cumpărat!",
      powerUpAdded: "+1 boost!",
      abilityAdded: "+1 abilitate!",
    },
    carStats: {
      spd: "VIT",
      acc: "ACC",
      hdl: "MAN",
    },
    carDescriptions: {
      starter: "Mașină de pornire de încredere. Lentă dar ușor de controlat.",
      sedan: "Sedan familial echilibrat. Bună accelerație și manevrabilitate.",
      muscle: "Mașină cu motor puternic cu capacitate de drift. Direcție mai dificilă.",
      racer: "Mașina de curse. Viteză și manevrabilitate excelente cu drift.",
      supercar: "Cea mai bună. Nitro boost, drift, viteză maximă și accelerație.",
    },
    preview: {
      title: "PREVIZUALIZARE AVATAR",
      hint: "Cumpără obiecte și vezi-le imediat pe avatar!",
      girl: "Fată",
      boy: "Băiat",
      size: "Mărime",
    },
  },
};

// ─── CAR SVG ICON ─────────────────────────────────
function CarIcon({ color, size = 80 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 120 60" fill="none">
      {/* Body */}
      <rect x="10" y="25" width="100" height="22" rx="8" fill={color} />
      {/* Roof */}
      <path d="M35 25 L45 10 L85 10 L95 25" fill={color} opacity={0.85} />
      {/* Windows */}
      <path d="M48 12 L42 23 L65 23 L65 12Z" fill="#1a1a2e" opacity={0.7} />
      <path d="M68 12 L68 23 L90 23 L82 12Z" fill="#1a1a2e" opacity={0.7} />
      {/* Front light */}
      <rect x="103" y="29" width="6" height="5" rx="2" fill="#FFD700" opacity={0.9} />
      {/* Rear light */}
      <rect x="11" y="29" width="5" height="5" rx="2" fill="#FF2222" opacity={0.8} />
      {/* Wheels */}
      <circle cx="32" cy="48" r="8" fill="#1a1a2e" />
      <circle cx="32" cy="48" r="5" fill="#333" />
      <circle cx="32" cy="48" r="2" fill="#666" />
      <circle cx="88" cy="48" r="8" fill="#1a1a2e" />
      <circle cx="88" cy="48" r="5" fill="#333" />
      <circle cx="88" cy="48" r="2" fill="#666" />
      {/* Shine */}
      <rect x="45" y="10" width="38" height="2" rx="1" fill="white" opacity={0.25} />
    </svg>
  );
}

// ─── SKIN PREVIEW (mini figure) ─────────────────────
function SkinPreview({ skin, size = 48 }: { skin: SkinDef; size?: number }) {
  const s = size;
  const headR = s * 0.22;
  const bodyW = s * 0.28;
  const bodyH = s * 0.3;
  const cx = s / 2;
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
      {/* Glow */}
      <circle cx={cx} cy={s * 0.35} r={s * 0.4} fill={skin.emissive} opacity={0.08} />
      {/* Head */}
      <circle cx={cx} cy={s * 0.22} r={headR} fill={skin.headColor} />
      {/* Eyes */}
      <circle cx={cx - headR * 0.3} cy={s * 0.2} r={1.5} fill={skin.emissive} />
      <circle cx={cx + headR * 0.3} cy={s * 0.2} r={1.5} fill={skin.emissive} />
      {/* Body */}
      <rect x={cx - bodyW / 2} y={s * 0.35} width={bodyW} height={bodyH} rx={3} fill={skin.bodyColor} />
      {/* Arms */}
      <rect x={cx - bodyW / 2 - 4} y={s * 0.37} width={4} height={bodyH * 0.6} rx={2} fill={skin.limbColor} />
      <rect x={cx + bodyW / 2} y={s * 0.37} width={4} height={bodyH * 0.6} rx={2} fill={skin.limbColor} />
      {/* Legs */}
      <rect x={cx - bodyW * 0.3} y={s * 0.65} width={4} height={s * 0.2} rx={2} fill={skin.limbColor} />
      <rect x={cx + bodyW * 0.3 - 4} y={s * 0.65} width={4} height={s * 0.2} rx={2} fill={skin.limbColor} />
      {/* Shoes */}
      <rect x={cx - bodyW * 0.3 - 1} y={s * 0.84} width={6} height={3} rx={1.5} fill={skin.shoeColor} />
      <rect x={cx + bodyW * 0.3 - 5} y={s * 0.84} width={6} height={3} rx={1.5} fill={skin.shoeColor} />
    </svg>
  );
}

// ─── HAT PREVIEW (SVG) ─────────────────────────────
function HatPreview({ type, color, emissive, size = 48 }: { type: string; color: string; emissive: string; size?: number }) {
  const s = size;
  const cx = s / 2;
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
      {/* Glow */}
      <circle cx={cx} cy={cx} r={s * 0.4} fill={emissive} opacity={0.1} />
      {type === "crown" && (<>
        <rect x={cx - 12} y={s * 0.45} width={24} height={10} rx={2} fill={color} />
        {[-8, 0, 8].map((dx, i) => <polygon key={i} points={`${cx + dx - 3},${s * 0.45} ${cx + dx},${s * 0.25} ${cx + dx + 3},${s * 0.45}`} fill={color} />)}
        {[-8, 0, 8].map((dx, i) => <circle key={`g${i}`} cx={cx + dx} cy={s * 0.27} r={2} fill={emissive} opacity={0.8} />)}
      </>)}
      {type === "cap" && (<>
        <ellipse cx={cx} cy={s * 0.5} rx={14} ry={8} fill={color} />
        <rect x={cx - 2} y={s * 0.3} width={16} height={5} rx={2} fill={color} opacity={0.7} />
        <ellipse cx={cx} cy={s * 0.38} rx={12} ry={10} fill={color} />
      </>)}
      {type === "halo" && (<>
        <ellipse cx={cx} cy={s * 0.4} rx={14} ry={5} fill="none" stroke={color} strokeWidth={3} />
        <ellipse cx={cx} cy={s * 0.4} rx={14} ry={5} fill="none" stroke={emissive} strokeWidth={1.5} opacity={0.6} />
      </>)}
      {type === "horns" && (<>
        <path d={`M${cx - 8},${s * 0.55} Q${cx - 12},${s * 0.2} ${cx - 4},${s * 0.25}`} fill={color} />
        <path d={`M${cx + 8},${s * 0.55} Q${cx + 12},${s * 0.2} ${cx + 4},${s * 0.25}`} fill={color} />
      </>)}
      {type === "tophat" && (<>
        <rect x={cx - 10} y={s * 0.3} width={20} height={20} rx={2} fill={color} />
        <rect x={cx - 14} y={s * 0.52} width={28} height={4} rx={2} fill={color} />
        <rect x={cx - 9} y={s * 0.34} width={18} height={2} rx={1} fill={emissive} opacity={0.3} />
      </>)}
      {type === "helmet" && (<>
        <ellipse cx={cx} cy={s * 0.45} rx={15} ry={12} fill={color} />
        <rect x={cx - 13} y={s * 0.5} width={26} height={3} rx={1.5} fill={emissive} opacity={0.4} />
      </>)}
      {type === "antenna" && (<>
        <rect x={cx - 1} y={s * 0.3} width={2} height={16} fill="#888" />
        <circle cx={cx} cy={s * 0.28} r={4} fill={color} />
        <circle cx={cx} cy={s * 0.28} r={2} fill={emissive} opacity={0.8} />
      </>)}
      {type === "wizard" && (<>
        <polygon points={`${cx},${s * 0.15} ${cx - 14},${s * 0.6} ${cx + 14},${s * 0.6}`} fill={color} />
        <rect x={cx - 16} y={s * 0.56} width={32} height={4} rx={2} fill={color} />
        <circle cx={cx + 4} cy={s * 0.38} r={2.5} fill={emissive} opacity={0.7} />
        <circle cx={cx - 3} cy={s * 0.48} r={1.5} fill={emissive} opacity={0.5} />
      </>)}
      {type === "beanie" && (<>
        <ellipse cx={cx} cy={s * 0.5} rx={14} ry={12} fill={color} />
        <rect x={cx - 15} y={s * 0.57} width={30} height={5} rx={2.5} fill={color} opacity={0.6} />
        <circle cx={cx} cy={s * 0.34} r={4} fill={emissive} opacity={0.6} />
      </>)}
      {type === "bucket" && (<>
        <ellipse cx={cx} cy={s * 0.6} rx={18} ry={4} fill={color} opacity={0.8} />
        <path d={`M${cx - 12},${s * 0.6} L${cx - 8},${s * 0.35} L${cx + 8},${s * 0.35} L${cx + 12},${s * 0.6}`} fill={color} />
        <rect x={cx - 9} y={s * 0.32} width={18} height={5} rx={2.5} fill={color} opacity={0.85} />
      </>)}
      {type === "party" && (<>
        <polygon points={`${cx},${s * 0.2} ${cx - 12},${s * 0.62} ${cx + 12},${s * 0.62}`} fill={color} />
        <ellipse cx={cx} cy={s * 0.62} rx={12} ry={3} fill={color} opacity={0.7} />
        {[{x:cx-5,y:s*0.35},{x:cx+4,y:s*0.43},{x:cx-2,y:s*0.52}].map((p,i) => (
          <circle key={i} cx={p.x} cy={p.y} r={2} fill={emissive} opacity={0.8} />
        ))}
      </>)}
      {type === "fedora" && (<>
        <ellipse cx={cx} cy={s * 0.62} rx={18} ry={4} fill={color} />
        <path d={`M${cx - 10},${s * 0.62} L${cx - 8},${s * 0.38} Q${cx},${s * 0.3} ${cx + 8},${s * 0.38} L${cx + 10},${s * 0.62}`} fill={color} />
        <rect x={cx - 9} y={s * 0.45} width={18} height={3} rx={1.5} fill={emissive} opacity={0.35} />
      </>)}
      {type === "viking" && (<>
        <ellipse cx={cx} cy={s * 0.48} rx={14} ry={11} fill={color} />
        <path d={`M${cx - 14},${s * 0.52} Q${cx - 20},${s * 0.55} ${cx - 18},${s * 0.7} Q${cx - 14},${s * 0.62} ${cx - 10},${s * 0.58}`} fill="#F5F0E8" />
        <path d={`M${cx + 14},${s * 0.52} Q${cx + 20},${s * 0.55} ${cx + 18},${s * 0.7} Q${cx + 14},${s * 0.62} ${cx + 10},${s * 0.58}`} fill="#F5F0E8" />
        <rect x={cx - 4} y={s * 0.38} width={8} height={12} rx={1} fill={color} opacity={0.8} />
      </>)}
      {type === "ninja" && (<>
        <ellipse cx={cx} cy={s * 0.46} rx={14} ry={11} fill={color} />
        <rect x={cx - 14} y={s * 0.5} width={28} height={5} rx={1} fill={color} opacity={0.6} />
        <circle cx={cx + 10} cy={s * 0.48} r={3} fill={emissive} opacity={0.5} />
      </>)}
      {type === "snapback" && (<>
        <ellipse cx={cx} cy={s * 0.5} rx={14} ry={8} fill={color} />
        <rect x={cx - 14} y={s * 0.56} width={28} height={3} rx={1.5} fill={color} opacity={0.6} />
        <rect x={cx - 2} y={s * 0.3} width={18} height={4} rx={2} fill={color} opacity={0.75} />
        <ellipse cx={cx} cy={s * 0.38} rx={12} ry={10} fill={color} />
        <rect x={cx - 7} y={s * 0.42} width={14} height={2} rx={1} fill={emissive} opacity={0.4} />
      </>)}
      {type === "bandana" && (<>
        <ellipse cx={cx} cy={s * 0.46} rx={14} ry={7} fill={color} />
        <circle cx={cx + 12} cy={s * 0.44} r={4} fill={color} opacity={0.85} />
        <ellipse cx={cx + 12} cy={s * 0.44} rx={5} ry={3} fill={emissive} opacity={0.3} />
        <rect x={cx - 13} y={s * 0.45} width={26} height={3} rx={1.5} fill={emissive} opacity={0.2} />
      </>)}
    </svg>
  );
}

// ─── TRAIL PREVIEW (SVG) ────────────────────────────
function TrailPreview({ type, color, emissive, size = 48 }: { type: string; color: string; emissive: string; size?: number }) {
  const s = size;
  const cx = s / 2;
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
      {/* Glow */}
      <circle cx={cx} cy={cx} r={s * 0.38} fill={emissive} opacity={0.08} />
      {type === "fire" && (<>
        <ellipse cx={cx} cy={s * 0.6} rx={6} ry={10} fill={color} opacity={0.9} />
        <ellipse cx={cx - 5} cy={s * 0.55} rx={4} ry={7} fill={emissive} opacity={0.7} />
        <ellipse cx={cx + 5} cy={s * 0.55} rx={4} ry={7} fill={emissive} opacity={0.7} />
        <ellipse cx={cx} cy={s * 0.5} rx={3} ry={5} fill="#FFD700" opacity={0.8} />
      </>)}
      {type === "ice" && (<>
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return <line key={i} x1={cx} y1={cx} x2={cx + Math.cos(rad) * 14} y2={cx + Math.sin(rad) * 14} stroke={color} strokeWidth={2} opacity={0.7} />;
        })}
        <circle cx={cx} cy={cx} r={4} fill={emissive} opacity={0.6} />
        {[30, 90, 150, 210, 270, 330].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return <circle key={i} cx={cx + Math.cos(rad) * 10} cy={cx + Math.sin(rad) * 10} r={1.5} fill={color} opacity={0.5} />;
        })}
      </>)}
      {type === "rainbow" && (<>
        {["#FF0000", "#FF8800", "#FFFF00", "#00FF00", "#0088FF", "#8800FF"].map((c, i) => (
          <rect key={i} x={cx - 12} y={s * 0.28 + i * 3} width={24} height={3} rx={1.5} fill={c} opacity={0.7} />
        ))}
      </>)}
      {type === "stars" && (<>
        {[{ x: cx, y: s * 0.3, r: 4 }, { x: cx - 8, y: s * 0.5, r: 3 }, { x: cx + 8, y: s * 0.5, r: 3 }, { x: cx - 4, y: s * 0.7, r: 2 }, { x: cx + 4, y: s * 0.7, r: 2 }].map((st, i) => (
          <polygon key={i} points={starPoints(st.x, st.y, st.r)} fill={color} opacity={0.8 - i * 0.1} />
        ))}
      </>)}
      {type === "smoke" && (<>
        {[{ x: cx - 6, y: s * 0.4, r: 6 }, { x: cx + 4, y: s * 0.35, r: 7 }, { x: cx, y: s * 0.5, r: 8 }, { x: cx - 3, y: s * 0.6, r: 5 }].map((c, i) => (
          <circle key={i} cx={c.x} cy={c.y} r={c.r} fill={color} opacity={0.3 - i * 0.05} />
        ))}
      </>)}
      {type === "electric" && (<>
        <polyline points={`${cx - 6},${s * 0.2} ${cx + 2},${s * 0.4} ${cx - 4},${s * 0.45} ${cx + 6},${s * 0.7}`} fill="none" stroke={color} strokeWidth={2.5} strokeLinejoin="round" />
        <polyline points={`${cx + 4},${s * 0.25} ${cx - 2},${s * 0.5} ${cx + 3},${s * 0.55} ${cx - 5},${s * 0.75}`} fill="none" stroke={emissive} strokeWidth={1.5} strokeLinejoin="round" opacity={0.6} />
        <circle cx={cx + 6} cy={s * 0.7} r={2} fill={emissive} opacity={0.8} />
      </>)}
      {type === "magic" && (<>
        {[{x:cx,y:s*0.28,r:3},{x:cx-9,y:s*0.45,r:2},{x:cx+9,y:s*0.42,r:2.5},{x:cx-5,y:s*0.63,r:1.5},{x:cx+6,y:s*0.68,r:1.5}].map((p,i) => (
          <circle key={i} cx={p.x} cy={p.y} r={p.r} fill={i%2===0?color:emissive} opacity={0.85-i*0.1} />
        ))}
        <path d={`M${cx},${s*0.28} Q${cx-9},${s*0.45} ${cx-5},${s*0.63}`} fill="none" stroke={color} strokeWidth={1} opacity={0.4} strokeDasharray="2 2" />
      </>)}
      {type === "poison" && (<>
        <ellipse cx={cx} cy={s*0.5} rx={8} ry={11} fill={color} opacity={0.25} />
        {[{x:cx-4,y:s*0.35},{x:cx+5,y:s*0.48},{x:cx-2,y:s*0.62},{x:cx+3,y:s*0.72}].map((p,i) => (
          <circle key={i} cx={p.x} cy={p.y} r={3-i*0.4} fill={emissive} opacity={0.7} />
        ))}
      </>)}
      {type === "gold" && (<>
        {[{x:cx,y:s*0.3,r:4},{x:cx-7,y:s*0.48,r:3},{x:cx+7,y:s*0.48,r:3},{x:cx-3,y:s*0.65,r:2.5},{x:cx+3,y:s*0.7,r:2}].map((p,i) => (
          <polygon key={i} points={starPoints(p.x,p.y,p.r)} fill={color} opacity={0.9-i*0.1} />
        ))}
        <circle cx={cx} cy={cx} r={s*0.3} fill="none" stroke={emissive} strokeWidth={1} opacity={0.25} />
      </>)}
      {type === "dark" && (<>
        <ellipse cx={cx} cy={s*0.5} rx={10} ry={14} fill={color} opacity={0.4} />
        {[{x:cx-5,y:s*0.32},{x:cx+6,y:s*0.44},{x:cx-3,y:s*0.58},{x:cx+4,y:s*0.7}].map((p,i) => (
          <circle key={i} cx={p.x} cy={p.y} r={3-i*0.3} fill={emissive} opacity={0.6} />
        ))}
      </>)}
      {type === "nature" && (<>
        {[{x:cx-3,y:s*0.32},{x:cx+5,y:s*0.44},{x:cx-6,y:s*0.55},{x:cx+2,y:s*0.66}].map((p,i) => (
          <ellipse key={i} cx={p.x} cy={p.y} rx={5-i*0.5} ry={3-i*0.3} fill={color} opacity={0.75} transform={`rotate(${30+i*20} ${p.x} ${p.y})`} />
        ))}
        <line x1={cx} y1={s*0.3} x2={cx} y2={s*0.72} stroke={emissive} strokeWidth={1.5} opacity={0.4} strokeDasharray="2 3" />
      </>)}
      {type === "love" && (<>
        {[{x:cx,y:s*0.32},{x:cx-8,y:s*0.5},{x:cx+7,y:s*0.55},{x:cx-2,y:s*0.68}].map((p,i) => {
          const r = 4-i*0.7;
          return <path key={i} d={`M${p.x},${p.y+r} Q${p.x-r},${p.y} ${p.x},${p.y-r} Q${p.x+r},${p.y} ${p.x},${p.y+r}`} fill={color} opacity={0.75} />;
        })}
      </>)}
      {type === "ghost" && (<>
        <ellipse cx={cx} cy={s*0.45} rx={10} ry={12} fill={color} opacity={0.35} />
        {[{x:cx-6,y:s*0.38},{x:cx+5,y:s*0.42},{x:cx-1,y:s*0.6}].map((p,i) => (
          <circle key={i} cx={p.x} cy={p.y} r={3.5-i*0.5} fill={emissive} opacity={0.55} />
        ))}
      </>)}
      {type === "lava" && (<>
        <ellipse cx={cx} cy={s*0.65} rx={12} ry={5} fill={color} opacity={0.5} />
        {[{x:cx-3,y:s*0.58},{x:cx+5,y:s*0.48},{x:cx-2,y:s*0.38}].map((p,i) => (
          <ellipse key={i} cx={p.x} cy={p.y} rx={4-i} ry={6-i*1.5} fill={i===0?color:emissive} opacity={0.7} />
        ))}
      </>)}
      {type === "neon" && (<>
        {["#FF00AA","#FF00FF","#AA00FF"].map((c,i) => (
          <ellipse key={i} cx={cx} cy={s*0.5} rx={7+i*3} ry={10+i*2} fill="none" stroke={c} strokeWidth={1.5} opacity={0.5-i*0.1} />
        ))}
        <circle cx={cx} cy={s*0.5} r={4} fill={emissive} opacity={0.9} />
      </>)}
      {type === "shadow" && (<>
        <ellipse cx={cx} cy={s*0.5} rx={12} ry={15} fill={color} opacity={0.5} />
        {[s*0.32,s*0.48,s*0.62].map((y,i) => (
          <rect key={i} x={cx-8+i*2} y={y} width={16-i*2} height={2} rx={1} fill={emissive} opacity={0.5-i*0.1} />
        ))}
      </>)}
    </svg>
  );
}

// Star polygon points helper
function starPoints(cx: number, cy: number, r: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const angle = (i * Math.PI) / 5 - Math.PI / 2;
    const rad = i % 2 === 0 ? r : r * 0.4;
    pts.push(`${cx + Math.cos(angle) * rad},${cy + Math.sin(angle) * rad}`);
  }
  return pts.join(" ");
}

export default function ShopPage() {
  const { lang } = useLang();
  const t = SHOP_TRANSLATIONS[lang];

  const [balance, setBalance] = useState(0);
  const [ownedSkins, setOwnedSkins] = useState<string[]>(["default"]);
  const [activeSkin, setActiveSkinState] = useState("default");
  const [ownedHats, setOwnedHats] = useState<string[]>([]);
  const [activeHat, setActiveHatState] = useState<string | null>(null);
  const [ownedTrails, setOwnedTrails] = useState<string[]>([]);
  const [activeTrail, setActiveTrailState] = useState<string | null>(null);
  const [ownedCars, setOwnedCars] = useState<string[]>(["starter"]);
  const [activeCar, setActiveCar] = useState("starter");
  const [tab, setTab] = useState<Tab>("skins");
  const [notification, setNotification] = useState<string | null>(null);
  const [boughtPowerUps, setBoughtPowerUps] = useState<Record<string, number>>({});
  const [selectedCar, setSelectedCar] = useState<CarDef | null>(null);
  const [selectedSkin, setSelectedSkin] = useState<SkinDef | null>(null);
  // Clothing & Face state
  type SkinSub = "skin" | "face" | "hair" | "top" | "bottom" | "shoe" | "cape" | "glasses" | "gloves" | "hat" | "trail";
  const [skinSub, setSkinSub] = useState<SkinSub>("skin");
  const [ownedFaces, setOwnedFaces] = useState<string[]>(["default"]);
  const [activeFaceId, setActiveFaceId] = useState("default");
  const [ownedHairIds, setOwnedHairIds] = useState<string[]>(["hair_chestnut"]);
  const [activeHairId, setActiveHairId] = useState<string>("hair_chestnut");
  const [clothingOwned, setClothingOwned] = useState<Record<string, string[]>>({});
  const [clothingActive, setClothingActive] = useState<Record<string, string | null>>({});

  const [shopGender, setShopGender] = useState<AvatarGender>('girl');
  const [avatarMood, setAvatarMood] = useState<'idle' | 'happy'>('idle');
  const [avatarScaleVal, setAvatarScaleVal] = useState(1.0);

  // Computed avatar props for preview
  const previewHairDef = HAIR_STYLES.find(h => h.id === activeHairId) || null;
  const previewSkinDef = SKINS.find(s => s.id === activeSkin) || SKINS[0];
  const previewFaceDef = FACES.find(f => f.id === activeFaceId);
  const previewTopDef = clothingActive.top ? TOPS.find(t => t.id === clothingActive.top) || null : null;
  const previewBottomDef = clothingActive.bottom ? BOTTOMS.find(b => b.id === clothingActive.bottom) || null : null;
  const previewShoeDef = clothingActive.shoe ? SHOES.find(s => s.id === clothingActive.shoe) || null : null;
  const previewCapeDef = clothingActive.cape ? CAPES.find(c => c.id === clothingActive.cape) || null : null;
  const previewGlassesDef = clothingActive.glasses ? GLASSES.find(g => g.id === clothingActive.glasses) || null : null;
  const previewGlovesDef = clothingActive.gloves ? GLOVES.find(g => g.id === clothingActive.gloves) || null : null;
  const previewHatDef = activeHat ? HATS.find(h => h.id === activeHat) || null : null;
  const previewTrailDef = activeTrail ? TRAILS.find(t => t.id === activeTrail) || null : null;

  const syncAfterPurchase = () => {
    getUser().then(user => { if (user) uploadToSupabase(user.id).catch(() => {}); });
  };

  const refreshClothing = () => {
    const slots = ["top", "bottom", "shoe", "cape", "glasses", "gloves"] as const;
    const owned: Record<string, string[]> = {};
    const active: Record<string, string | null> = {};
    slots.forEach(s => { owned[s] = getOwned(s); active[s] = getActive(s); });
    setClothingOwned(owned);
    setClothingActive(active);
  };

  useEffect(() => {
    setBalance(getSpecialCardCount());
    setOwnedSkins(getOwnedSkins());
    setActiveSkinState(getActiveSkin());
    setOwnedHats(getOwnedHats());
    setActiveHatState(getActiveHat());
    setOwnedTrails(getOwnedTrails());
    setActiveTrailState(getActiveTrail());
    setOwnedCars(getOwnedCarsLS());
    setActiveCar(getActiveCarLS());
    setOwnedFaces(getOwnedFaces());
    setActiveFaceId(getActiveFace());
    setOwnedHairIds(getOwnedHair());
    setActiveHairId(getActiveHair());
    refreshClothing();
    setShopGender(getGender());
    setAvatarScaleVal(getAvatarScale());
    const saved = localStorage.getItem("plizio_powerups");
    if (saved) setBoughtPowerUps(JSON.parse(saved));
  }, []);

  const showNotif = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 2000);
  };

  // ─── Car handlers ─────────────────
  const handleCarAction = (car: CarDef) => {
    if (ownedCars.includes(car.id)) {
      setActiveCarLS(car.id);
      setActiveCar(car.id);
      showNotif(`${car.name} selected!`);
      setSelectedCar(null);
      return;
    }
    if (car.price === 0) {
      const newOwned = [...ownedCars, car.id];
      setOwnedCarsLS(newOwned);
      setOwnedCars(newOwned);
      setActiveCarLS(car.id);
      setActiveCar(car.id);
      showNotif(`${car.name} unlocked!`);
      setSelectedCar(null);
      return;
    }
    if (balance < car.price) { showNotif(t.notifications.notEnough); return; }
    spendSpecialCards(car.price);
    const newOwned = [...ownedCars, car.id];
    setOwnedCarsLS(newOwned);
    setOwnedCars(newOwned);
    setActiveCarLS(car.id);
    setActiveCar(car.id);
    setBalance(getSpecialCardCount());
    syncAfterPurchase();
    showNotif(`${car.name} purchased!`);
    setSelectedCar(null);
  };

  const handleBuyPowerUp = (pu: PowerUpDef) => {
    if (balance < pu.price) { showNotif(t.notifications.notEnough); return; }
    spendSpecialCards(pu.price);
    const updated = { ...boughtPowerUps, [pu.id]: (boughtPowerUps[pu.id] || 0) + 1 };
    setBoughtPowerUps(updated);
    localStorage.setItem("plizio_powerups", JSON.stringify(updated));
    setBalance(getSpecialCardCount());
    syncAfterPurchase();
    showNotif(t.notifications.powerUpAdded);
  };

  const triggerAvatarReaction = () => {
    setAvatarMood('happy');
    setTimeout(() => setAvatarMood('idle'), 1200);
  };

  const handleBuySkin = (skin: SkinDef) => {
    if (ownedSkins.includes(skin.id)) {
      setActiveSkin(skin.id);
      setActiveSkinState(skin.id);
      showNotif(t.notifications.skinSelected);
      setSelectedSkin(null);
      triggerAvatarReaction();
      return;
    }
    if (balance < skin.price) { showNotif(t.notifications.notEnough); return; }
    spendSpecialCards(skin.price);
    buySkin(skin.id);
    setOwnedSkins(getOwnedSkins());
    setActiveSkin(skin.id);
    setActiveSkinState(skin.id);
    setBalance(getSpecialCardCount());
    syncAfterPurchase();
    showNotif(t.notifications.skinPurchased);
    setSelectedSkin(null);
    triggerAvatarReaction();
  };

  const handleBuyHat = (hat: HatDef) => {
    if (ownedHats.includes(hat.id)) {
      if (activeHat === hat.id) {
        setActiveHat(null);
        setActiveHatState(null);
        showNotif(t.notifications.hatRemoved);
      } else {
        setActiveHat(hat.id);
        setActiveHatState(hat.id);
        showNotif(t.notifications.hatEquipped);
        triggerAvatarReaction();
      }
      return;
    }
    if (balance < hat.price) { showNotif(t.notifications.notEnough); return; }
    spendSpecialCards(hat.price);
    buyHat(hat.id);
    setOwnedHats(getOwnedHats());
    setActiveHat(hat.id);
    setActiveHatState(hat.id);
    setBalance(getSpecialCardCount());
    syncAfterPurchase();
    showNotif(t.notifications.hatPurchased);
    triggerAvatarReaction();
  };

  const handleBuyTrail = (trail: TrailDef) => {
    if (ownedTrails.includes(trail.id)) {
      if (activeTrail === trail.id) {
        setActiveTrail(null);
        setActiveTrailState(null);
        showNotif(t.notifications.trailRemoved);
      } else {
        setActiveTrail(trail.id);
        setActiveTrailState(trail.id);
        showNotif(t.notifications.trailEquipped);
        triggerAvatarReaction();
      }
      return;
    }
    if (balance < trail.price) { showNotif(t.notifications.notEnough); return; }
    spendSpecialCards(trail.price);
    buyTrail(trail.id);
    setOwnedTrails(getOwnedTrails());
    setActiveTrail(trail.id);
    setActiveTrailState(trail.id);
    setBalance(getSpecialCardCount());
    syncAfterPurchase();
    showNotif(t.notifications.trailPurchased);
    triggerAvatarReaction();
  };

  const handleBuyAbility = (ab: AbilityDef) => {
    if (balance < ab.price) { showNotif(t.notifications.notEnough); return; }
    spendSpecialCards(ab.price);
    const key = `plizio_ability_${ab.id}`;
    const current = parseInt(localStorage.getItem(key) || "0");
    localStorage.setItem(key, (current + 1).toString());
    setBalance(getSpecialCardCount());
    syncAfterPurchase();
    showNotif(t.notifications.abilityAdded);
  };

  // ─── Face handler ─────────────────
  const handleFaceAction = (face: FaceDef) => {
    if (ownedFaces.includes(face.id)) {
      setActiveFace(face.id);
      setActiveFaceId(face.id);
      showNotif(t.notifications.faceSelected);
      triggerAvatarReaction();
      return;
    }
    if (balance < face.price) { showNotif(t.notifications.notEnough); return; }
    spendSpecialCards(face.price);
    buyFace(face.id);
    setOwnedFaces(getOwnedFaces());
    setActiveFace(face.id);
    setActiveFaceId(face.id);
    setBalance(getSpecialCardCount());
    syncAfterPurchase();
    showNotif(t.notifications.facePurchased);
    triggerAvatarReaction();
  };

  // ─── Hair handler ─────────────────
  const handleHairAction = (hair: HairDef) => {
    if (ownedHairIds.includes(hair.id)) {
      setActiveHair(hair.id);
      setActiveHairId(hair.id);
      showNotif(lang === "hu" ? "Frizura aktiválva!" : lang === "de" ? "Frisur aktiviert!" : lang === "ro" ? "Coafură activată!" : "Hairstyle equipped!");
      triggerAvatarReaction();
      return;
    }
    if (balance < hair.price) { showNotif(t.notifications.notEnough); return; }
    spendSpecialCards(hair.price);
    buyHairStyle(hair.id);
    setOwnedHairIds(getOwnedHair());
    setActiveHair(hair.id);
    setActiveHairId(hair.id);
    setBalance(getSpecialCardCount());
    syncAfterPurchase();
    showNotif(lang === "hu" ? "Frizura megvásárolva!" : lang === "de" ? "Frisur gekauft!" : lang === "ro" ? "Coafură cumpărată!" : "Hairstyle purchased!");
    triggerAvatarReaction();
  };

  // ─── Gender toggle ─────────────────
  const handleGenderToggle = (g: AvatarGender) => {
    setGender(g);
    setShopGender(g);
    setAvatarMood('happy');
    setTimeout(() => setAvatarMood('idle'), 1200);
  };

  // ─── Clothing handler (generic) ─────────────────
  type ClothingSlot = "top" | "bottom" | "shoe" | "cape" | "glasses" | "gloves";
  const handleClothingAction = (slot: ClothingSlot, itemId: string, price: number) => {
    const owned = clothingOwned[slot] || [];
    if (owned.includes(itemId)) {
      // Toggle: if already active, unequip
      if (clothingActive[slot] === itemId) {
        setActive(slot, null);
        refreshClothing();
        showNotif(t.notifications.unequipped);
      } else {
        setActive(slot, itemId);
        refreshClothing();
        showNotif(t.notifications.equipped);
        triggerAvatarReaction();
      }
      return;
    }
    if (price === 0) {
      buyItem(slot, itemId);
      setActive(slot, itemId);
      refreshClothing();
      showNotif(t.notifications.unlocked);
      triggerAvatarReaction();
      return;
    }
    if (balance < price) { showNotif(t.notifications.notEnough); return; }
    spendSpecialCards(price);
    buyItem(slot, itemId);
    setActive(slot, itemId);
    refreshClothing();
    setBalance(getSpecialCardCount());
    syncAfterPurchase();
    showNotif(t.notifications.purchased);
    triggerAvatarReaction();
  };

  const SKIN_SUBS: { id: SkinSub; label: string; icon: string }[] = [
    { id: "skin", label: t.skinSubs.skin, icon: "🎨" },
    { id: "face", label: t.skinSubs.face, icon: "😊" },
    { id: "hair", label: t.skinSubs.hair, icon: "💇" },
    { id: "top", label: t.skinSubs.top, icon: "👕" },
    { id: "bottom", label: t.skinSubs.bottom, icon: "👖" },
    { id: "shoe", label: t.skinSubs.shoe, icon: "👟" },
    { id: "hat", label: t.skinSubs.hat, icon: "🎩" },
    { id: "cape", label: t.skinSubs.cape, icon: "🦸" },
    { id: "glasses", label: t.skinSubs.glasses, icon: "🕶️" },
    { id: "gloves", label: t.skinSubs.gloves, icon: "🧤" },
    { id: "trail", label: t.skinSubs.trail, icon: "✨" },
  ];

  const TABS: { id: Tab; label: string; icon: string }[] = [
    { id: "skins", label: t.tabs.skins, icon: "🎨" },
    { id: "cars", label: t.tabs.cars, icon: "🏎️" },
    { id: "powerups", label: t.tabs.powerups, icon: "⚡" },
    { id: "abilities", label: t.tabs.abilities, icon: "🏔️" },
  ];

  const statBar = (val: number, max: number, color: string, label: string, icon: React.ReactNode) => (
    <div className="flex items-center gap-2">
      <div className="text-white/40">{icon}</div>
      <span className="text-[10px] text-white/40 w-8 font-bold">{label}</span>
      <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div className="h-full rounded-full" style={{ backgroundColor: color }}
          initial={{ width: 0 }} animate={{ width: `${(val / max) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }} />
      </div>
      <span className="text-[10px] text-white/30 w-6 text-right">{Math.round(val * 3.6)}</span>
    </div>
  );

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-6 gap-4">
      {/* Header */}
      <div className="w-full max-w-md flex items-center justify-between">
        <Link href="/">
          <motion.div className="bg-white/5 border border-white/8 p-2.5 rounded-xl cursor-pointer backdrop-blur-sm"
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <ArrowLeft size={18} className="text-white/60" />
          </motion.div>
        </Link>

        <h1 className="text-white font-black text-lg tracking-wide">{t.header}</h1>

        {/* Balance */}
        <motion.div className="flex items-center gap-2 bg-gradient-to-r from-[#E040FB]/10 to-[#E040FB]/5 border border-[#E040FB]/20 px-4 py-2 rounded-xl backdrop-blur-sm"
          style={{ boxShadow: "0 0 20px rgba(224,64,251,0.1)" }}
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <Star size={14} className="text-[#E040FB]" fill="#E040FB" />
          <span className="text-[#E040FB] font-black text-sm">{balance}</span>
        </motion.div>
      </div>

      {/* Tabs - scrollable with text */}
      <div className="flex gap-1 overflow-x-auto max-w-md w-full pb-1 scrollbar-hide">
        {TABS.map((t) => (
          <motion.button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-3 py-2 rounded-xl font-bold text-xs border transition-all shrink-0 flex items-center gap-1.5 ${
              tab === t.id
                ? "bg-[#E040FB]/12 border-[#E040FB]/30 text-[#E040FB]"
                : "bg-white/3 border-white/5 text-white/25 hover:text-white/40"
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t.icon}</span>
            <span>{t.label}</span>
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
            <div className="bg-[#E040FB]/15 border border-[#E040FB]/30 backdrop-blur-xl rounded-xl px-5 py-2.5">
              <span className="text-[#E040FB] font-bold text-sm">{notification}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════ CARS TAB ═══════ */}
      {tab === "cars" && (
        <motion.div className="w-full max-w-md flex flex-col gap-2.5"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {CARS.map((car, idx) => {
            const owned = ownedCars.includes(car.id);
            const isActive = activeCar === car.id;
            return (
              <motion.button
                key={car.id}
                onClick={() => setSelectedCar(car)}
                className={`relative bg-gradient-to-r from-white/[0.04] to-transparent border rounded-2xl p-3.5 flex items-center gap-3.5 w-full text-left transition-all overflow-hidden ${
                  isActive ? "border-[#E040FB]/40" : owned ? "border-white/10" : "border-white/5"
                }`}
                style={isActive ? { boxShadow: `0 0 25px ${car.color}15, 0 0 10px rgba(224,64,251,0.1)` } : undefined}
                whileHover={{ scale: 1.01, borderColor: `${car.color}40` }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                {/* Car preview */}
                <div className="w-16 h-10 flex items-center justify-center flex-shrink-0 rounded-xl"
                  style={{ background: `linear-gradient(135deg, ${car.color}15, transparent)` }}>
                  <CarIcon color={car.color} size={64} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-sm">{car.name}</span>
                    {isActive && (
                      <span className="text-[8px] bg-[#E040FB]/20 text-[#E040FB] px-1.5 py-0.5 rounded-full font-black">{t.buttons.active}</span>
                    )}
                  </div>
                  {/* Mini stat bars */}
                  <div className="flex gap-1 mt-1.5">
                    {[
                      { val: car.maxSpeed / 45, color: "#00FF88" },
                      { val: car.accel / 30, color: "#00D4FF" },
                      { val: car.handling / 3.5, color: "#FFD700" },
                    ].map((s, i) => (
                      <div key={i} className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${s.val * 100}%`, backgroundColor: s.color }} />
                      </div>
                    ))}
                  </div>
                  {/* Tags */}
                  <div className="flex gap-1 mt-1.5">
                    {car.canDrift && <span className="text-[7px] bg-orange-500/15 text-orange-400/80 px-1.5 py-0.5 rounded font-black">{t.buttons.drift}</span>}
                    {car.canNitro && <span className="text-[7px] bg-purple-500/15 text-purple-400/80 px-1.5 py-0.5 rounded font-black">{t.buttons.nitro}</span>}
                    <span className="text-[7px] text-white/15 font-bold">~{Math.round(car.maxSpeed * 3.6)} km/h</span>
                  </div>
                </div>

                {/* Price / Status */}
                <div className="flex-shrink-0">
                  {isActive ? (
                    <div className="w-8 h-8 rounded-full bg-[#E040FB]/15 flex items-center justify-center">
                      <Check size={14} className="text-[#E040FB]" />
                    </div>
                  ) : owned ? (
                    <span className="text-white/20 text-[10px] font-bold">{t.buttons.tap}</span>
                  ) : car.price === 0 ? (
                    <span className="text-green-400/70 text-[10px] font-bold">FREE</span>
                  ) : (
                    <div className="flex items-center gap-1 bg-[#E040FB]/8 px-2.5 py-1.5 rounded-lg border border-[#E040FB]/15">
                      <Star size={10} className="text-[#E040FB]" fill="#E040FB" />
                      <span className="text-[#E040FB] font-black text-xs">{car.price}</span>
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      )}

      {/* ═══════ CAR DETAIL MODAL ═══════ */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedCar(null)} />
            {/* Modal */}
            <motion.div className="relative w-full max-w-sm mx-4 mb-4 sm:mb-0 bg-[#0d1117] border border-white/10 rounded-3xl overflow-hidden"
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}>

              {/* Close */}
              <button onClick={() => setSelectedCar(null)} className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                <X size={14} className="text-white/40" />
              </button>

              {/* Car visual */}
              <div className="relative h-36 flex items-center justify-center overflow-hidden"
                style={{ background: `radial-gradient(ellipse at 50% 80%, ${selectedCar.color}20, transparent 70%)` }}>
                <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 60%, #0d1117)` }} />
                <CarIcon color={selectedCar.color} size={180} />
              </div>

              {/* Content */}
              <div className="px-5 pb-5 -mt-2">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-white font-black text-xl">{selectedCar.name}</h2>
                  <div className="flex gap-1">
                    {selectedCar.canDrift && <span className="text-[8px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full font-black">{t.buttons.drift}</span>}
                    {selectedCar.canNitro && <span className="text-[8px] bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-full font-black">{t.buttons.nitro}</span>}
                  </div>
                </div>
                <p className="text-white/30 text-xs leading-relaxed mb-4">{t.carDescriptions[selectedCar.id] || selectedCar.desc}</p>

                {/* Stats */}
                <div className="flex flex-col gap-2.5 mb-5">
                  {statBar(selectedCar.maxSpeed, 45, "#00FF88", t.carStats.spd, <Gauge size={12} />)}
                  {statBar(selectedCar.accel, 30, "#00D4FF", t.carStats.acc, <Flame size={12} />)}
                  {statBar(selectedCar.handling, 3.5, "#FFD700", t.carStats.hdl, <Cog size={12} />)}
                </div>

                {/* Action button */}
                {(() => {
                  const owned = ownedCars.includes(selectedCar.id);
                  const isActive = activeCar === selectedCar.id;
                  if (isActive) return (
                    <div className="w-full py-3 rounded-xl bg-[#E040FB]/10 border border-[#E040FB]/20 text-center">
                      <span className="text-[#E040FB] font-bold text-sm flex items-center justify-center gap-2">
                        <Check size={16} /> Active
                      </span>
                    </div>
                  );
                  return (
                    <motion.button onClick={() => handleCarAction(selectedCar)}
                      className="w-full py-3 rounded-xl font-bold text-sm transition-all"
                      style={{
                        background: owned ? `${selectedCar.color}20` : `linear-gradient(135deg, ${selectedCar.color}40, ${selectedCar.color}20)`,
                        border: `1px solid ${owned ? selectedCar.color + "30" : selectedCar.color + "50"}`,
                        color: owned ? selectedCar.color : "#fff",
                      }}
                      whileTap={{ scale: 0.97 }}>
                      {owned ? t.buttons.select : selectedCar.price === 0 ? t.buttons.unlockFree : (
                        <span className="flex items-center justify-center gap-1.5">
                          Buy for <Star size={12} className="text-[#E040FB]" fill="#E040FB" /> {selectedCar.price}
                        </span>
                      )}
                    </motion.button>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════ SKINS TAB (with sub-categories) ═══════ */}
      {tab === "skins" && (<>
        {/* ── Live 3D Avatar Preview ── */}
        <div className="w-full max-w-md bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden">
          <div className="flex items-center">
            {/* Avatar canvas — with orbit controls for 360° view */}
            <div className="w-40 h-40 flex-shrink-0">
              <AvatarCompanion
                mood={avatarMood}
                fixed={false}
                gender={shopGender}
                activeSkin={previewSkinDef}
                activeFace={previewFaceDef}
                activeTop={previewTopDef}
                activeBottom={previewBottomDef}
                activeShoe={previewShoeDef}
                activeCape={previewCapeDef}
                activeGlasses={previewGlassesDef}
                activeGloves={previewGlovesDef}
                activeHat={previewHatDef}
                activeTrail={previewTrailDef}
                activeHair={previewHairDef}
                orbitControls
              />
            </div>
            {/* Info + gender switch */}
            <div className="flex-1 px-3 py-3 flex flex-col gap-2">
              <span className="text-white/60 text-xs font-bold">{t.preview.title}</span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => handleGenderToggle('girl')}
                  className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${shopGender === 'girl' ? 'bg-[#E040FB]/15 border-[#E040FB]/40 text-[#E040FB]' : 'border-white/10 text-white/30'}`}
                >
                  <Venus size={11} /> {t.preview.girl}
                </button>
                <button
                  onClick={() => handleGenderToggle('boy')}
                  className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-xs font-bold border transition-all ${shopGender === 'boy' ? 'bg-[#00D4FF]/15 border-[#00D4FF]/40 text-[#00D4FF]' : 'border-white/10 text-white/30'}`}
                >
                  <Mars size={11} /> {t.preview.boy}
                </button>
              </div>
              <div className="text-[10px] text-white/20 leading-tight">
                {t.preview.hint}
              </div>
              {/* Avatar size slider */}
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[9px] text-white/30 font-bold shrink-0">{t.preview.size}</span>
                <input
                  type="range"
                  min={60}
                  max={140}
                  value={Math.round(avatarScaleVal * 100)}
                  onChange={(e) => {
                    const v = parseInt(e.target.value) / 100;
                    setAvatarScaleVal(v);
                    setAvatarScale(v);
                  }}
                  className="flex-1 h-1 accent-[#E040FB] cursor-pointer"
                />
                <span className="text-[9px] text-white/30 font-mono w-7 text-right">{Math.round(avatarScaleVal * 100)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-tabs */}
        <div className="flex gap-1 overflow-x-auto max-w-md w-full pb-1 scrollbar-hide">
          {SKIN_SUBS.map(s => (
            <button key={s.id} onClick={() => setSkinSub(s.id)}
              className={`px-2.5 py-1.5 rounded-lg text-[10px] font-bold border shrink-0 transition-all flex items-center gap-1 ${
                skinSub === s.id ? "bg-[#E040FB]/10 border-[#E040FB]/25 text-[#E040FB]" : "bg-white/3 border-white/5 text-white/20"
              }`}>
              <span>{s.icon}</span><span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* ── Skin sub ── */}
        {skinSub === "skin" && (
          <motion.div className="w-full max-w-md grid grid-cols-3 gap-2.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {SKINS.map((skin, idx) => {
              const owned = ownedSkins.includes(skin.id);
              const active = activeSkin === skin.id;
              return (
                <motion.button key={skin.id} onClick={() => setSelectedSkin(skin)}
                  className={`bg-gradient-to-b from-white/[0.04] to-transparent border rounded-2xl p-3 flex flex-col items-center gap-2 ${active ? "border-[#E040FB]/40" : owned ? "border-white/10" : "border-white/5"}`}
                  style={active ? { boxShadow: `0 0 20px ${skin.emissive}20` } : undefined}
                  whileTap={{ scale: 0.96 }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.02 }}>
                  <SkinPreview skin={skin} size={52} />
                  <span className="text-white/50 text-[9px] font-bold capitalize">{skin.id === "default" ? (lang === "en" ? "Classic" : lang === "hu" ? "Alap" : lang === "de" ? "Klassisch" : "Clasic") : skin.id}</span>
                  {active ? <span className="text-[#E040FB] text-[8px] font-black flex items-center gap-0.5"><Check size={10} />{t.buttons.active}</span>
                    : owned ? <span className="text-white/20 text-[8px] font-bold">{t.buttons.tap}</span>
                    : <span className="text-[#E040FB] text-[9px] font-black flex items-center gap-0.5"><Star size={8} fill="#E040FB" />{skin.price}</span>}
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* ── Face sub ── */}
        {skinSub === "face" && (
          <motion.div className="w-full max-w-md grid grid-cols-3 gap-2.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {FACES.map((face, idx) => {
              const owned = ownedFaces.includes(face.id);
              const active = activeFaceId === face.id;
              return (
                <motion.button key={face.id} onClick={() => handleFaceAction(face)}
                  className={`bg-gradient-to-b from-white/[0.04] to-transparent border rounded-2xl p-3 flex flex-col items-center gap-2 ${active ? "border-[#E040FB]/40" : owned ? "border-white/10" : "border-white/5"}`}
                  style={active ? { boxShadow: "0 0 15px rgba(224,64,251,0.15)" } : undefined}
                  whileTap={{ scale: 0.96 }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.02 }}>
                  <div className="text-3xl">{face.icon}</div>
                  <span className="text-white/50 text-[9px] font-bold">{face.name}</span>
                  {active ? <span className="text-[#E040FB] text-[8px] font-black flex items-center gap-0.5"><Check size={10} />{t.buttons.active}</span>
                    : owned ? <span className="text-white/20 text-[8px] font-bold">{t.buttons.tap}</span>
                    : <span className="text-[#E040FB] text-[9px] font-black flex items-center gap-0.5"><Star size={8} fill="#E040FB" />{face.price}</span>}
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* ── Hair sub ── */}
        {skinSub === "hair" && (
          <motion.div className="w-full max-w-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="grid grid-cols-4 gap-2">
              {HAIR_STYLES.map((hair, idx) => {
                const owned = ownedHairIds.includes(hair.id);
                const active = activeHairId === hair.id;
                const isRainbow = hair.id === "hair_rainbow";
                return (
                  <motion.button key={hair.id} onClick={() => handleHairAction(hair)}
                    className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl border transition-all ${active ? "border-[#E040FB]/50 bg-[#E040FB]/10" : owned ? "border-white/15 bg-white/3" : "border-white/5 bg-transparent"}`}
                    whileTap={{ scale: 0.93 }} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.015 }}>
                    {/* Color swatch */}
                    <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 flex items-center justify-center shrink-0"
                      style={{
                        background: isRainbow
                          ? "conic-gradient(#FF0000, #FF8800, #FFFF00, #00FF00, #0088FF, #8800FF, #FF0000)"
                          : hair.color,
                        borderColor: active ? "#E040FB" : owned ? hair.color + "60" : "rgba(255,255,255,0.1)",
                        boxShadow: active ? `0 0 10px ${hair.color}50` : undefined,
                      }}>
                      {hair.highlight && !isRainbow && (
                        <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-full opacity-40"
                          style={{ background: `linear-gradient(180deg, ${hair.highlight}, transparent)` }} />
                      )}
                      {active && <div className="absolute inset-0 flex items-center justify-center"><Check size={14} className="text-white drop-shadow-md" /></div>}
                    </div>
                    <span className="text-[8px] font-bold text-white/50 leading-tight text-center">{hair.name.split(" ").slice(-1)[0]}</span>
                    {!owned && hair.price > 0 && (
                      <span className="text-[7px] font-black text-[#E040FB] flex items-center gap-0.5">
                        <Star size={6} fill="#E040FB" />{hair.price}
                      </span>
                    )}
                    {owned && !active && <span className="text-[7px] text-white/20 font-bold">EQUIP</span>}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ── Top sub ── */}
        {skinSub === "top" && (
          <motion.div className="w-full max-w-md grid grid-cols-2 gap-2.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {TOPS.map((item, idx) => {
              const owned = (clothingOwned["top"] || []).includes(item.id);
              const active = clothingActive["top"] === item.id;
              return (
                <motion.button key={item.id} onClick={() => handleClothingAction("top", item.id, item.price)}
                  className={`bg-gradient-to-r from-white/[0.04] to-transparent border rounded-2xl p-3 flex items-center gap-3 ${active ? "border-[#E040FB]/40" : owned ? "border-white/10" : "border-white/5"}`}
                  whileTap={{ scale: 0.97 }} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.02 }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${item.color}20`, border: `2px solid ${item.color}40` }}>
                    <div className="w-6 h-5 rounded-sm" style={{ backgroundColor: item.color }} />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <span className="text-white/70 text-xs font-bold block">{item.name}</span>
                    <span className="text-white/20 text-[9px] capitalize">{item.type}</span>
                  </div>
                  {active ? <Check size={14} className="text-[#E040FB]" />
                    : owned ? <span className="text-white/15 text-[9px] font-bold">EQUIP</span>
                    : item.price === 0 ? <span className="text-green-400/60 text-[9px] font-bold">FREE</span>
                    : <span className="text-[#E040FB] text-[10px] font-black flex items-center gap-0.5"><Star size={8} fill="#E040FB" />{item.price}</span>}
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* ── Bottom sub ── */}
        {skinSub === "bottom" && (
          <motion.div className="w-full max-w-md grid grid-cols-2 gap-2.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {BOTTOMS.map((item, idx) => {
              const owned = (clothingOwned["bottom"] || []).includes(item.id);
              const active = clothingActive["bottom"] === item.id;
              return (
                <motion.button key={item.id} onClick={() => handleClothingAction("bottom", item.id, item.price)}
                  className={`bg-gradient-to-r from-white/[0.04] to-transparent border rounded-2xl p-3 flex items-center gap-3 ${active ? "border-[#E040FB]/40" : owned ? "border-white/10" : "border-white/5"}`}
                  whileTap={{ scale: 0.97 }} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.02 }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${item.color}20`, border: `2px solid ${item.color}40` }}>
                    <div className="w-6 h-5 rounded-sm" style={{ backgroundColor: item.color }} />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <span className="text-white/70 text-xs font-bold block">{item.name}</span>
                    <span className="text-white/20 text-[9px] capitalize">{item.type}</span>
                  </div>
                  {active ? <Check size={14} className="text-[#E040FB]" />
                    : owned ? <span className="text-white/15 text-[9px] font-bold">EQUIP</span>
                    : item.price === 0 ? <span className="text-green-400/60 text-[9px] font-bold">FREE</span>
                    : <span className="text-[#E040FB] text-[10px] font-black flex items-center gap-0.5"><Star size={8} fill="#E040FB" />{item.price}</span>}
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* ── Shoe sub ── */}
        {skinSub === "shoe" && (
          <motion.div className="w-full max-w-md grid grid-cols-2 gap-2.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {SHOES.map((item, idx) => {
              const owned = (clothingOwned["shoe"] || []).includes(item.id);
              const active = clothingActive["shoe"] === item.id;
              return (
                <motion.button key={item.id} onClick={() => handleClothingAction("shoe", item.id, item.price)}
                  className={`bg-gradient-to-r from-white/[0.04] to-transparent border rounded-2xl p-3 flex items-center gap-3 ${active ? "border-[#E040FB]/40" : owned ? "border-white/10" : "border-white/5"}`}
                  whileTap={{ scale: 0.97 }} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.02 }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${item.color}15` }}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <span className="text-white/70 text-xs font-bold block">{item.name}</span>
                    <span className="text-white/20 text-[9px] capitalize">{item.type}</span>
                  </div>
                  {active ? <Check size={14} className="text-[#E040FB]" />
                    : owned ? <span className="text-white/15 text-[9px] font-bold">EQUIP</span>
                    : item.price === 0 ? <span className="text-green-400/60 text-[9px] font-bold">FREE</span>
                    : <span className="text-[#E040FB] text-[10px] font-black flex items-center gap-0.5"><Star size={8} fill="#E040FB" />{item.price}</span>}
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* ── Cape sub ── */}
        {skinSub === "cape" && (
          <motion.div className="w-full max-w-md grid grid-cols-2 gap-2.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {CAPES.map((item, idx) => {
              const owned = (clothingOwned["cape"] || []).includes(item.id);
              const active = clothingActive["cape"] === item.id;
              return (
                <motion.button key={item.id} onClick={() => handleClothingAction("cape", item.id, item.price)}
                  className={`bg-gradient-to-b from-white/[0.04] to-transparent border rounded-2xl p-3 flex flex-col items-center gap-2 ${active ? "border-[#E040FB]/40" : owned ? "border-white/10" : "border-white/5"}`}
                  style={active ? { boxShadow: `0 0 12px ${item.emissive}25` } : undefined}
                  whileTap={{ scale: 0.96 }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.03 }}>
                  <div className="text-2xl">{item.icon}</div>
                  <span className="text-white/50 text-[9px] font-bold">{item.name}</span>
                  <div className="w-8 h-12 rounded-md" style={{ background: `linear-gradient(180deg, ${item.color}, ${item.color}80)`, boxShadow: `0 0 8px ${item.emissive}30` }} />
                  {active ? <span className="text-[#E040FB] text-[8px] font-black flex items-center gap-0.5"><Check size={10} />EQUIPPED</span>
                    : owned ? <span className="text-white/20 text-[8px] font-bold">EQUIP</span>
                    : <span className="text-[#E040FB] text-[9px] font-black flex items-center gap-0.5"><Star size={8} fill="#E040FB" />{item.price}</span>}
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* ── Glasses sub ── */}
        {skinSub === "glasses" && (
          <motion.div className="w-full max-w-md grid grid-cols-2 gap-2.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {GLASSES.map((item, idx) => {
              const owned = (clothingOwned["glasses"] || []).includes(item.id);
              const active = clothingActive["glasses"] === item.id;
              return (
                <motion.button key={item.id} onClick={() => handleClothingAction("glasses", item.id, item.price)}
                  className={`bg-gradient-to-r from-white/[0.04] to-transparent border rounded-2xl p-3 flex items-center gap-3 ${active ? "border-[#E040FB]/40" : owned ? "border-white/10" : "border-white/5"}`}
                  whileTap={{ scale: 0.97 }} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.02 }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${item.color}15` }}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <span className="text-white/70 text-xs font-bold block">{item.name}</span>
                    <span className="text-white/20 text-[9px] capitalize">{item.type}</span>
                  </div>
                  {active ? <Check size={14} className="text-[#E040FB]" />
                    : owned ? <span className="text-white/15 text-[9px] font-bold">EQUIP</span>
                    : <span className="text-[#E040FB] text-[10px] font-black flex items-center gap-0.5"><Star size={8} fill="#E040FB" />{item.price}</span>}
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* ── Gloves sub ── */}
        {skinSub === "gloves" && (
          <motion.div className="w-full max-w-md grid grid-cols-2 gap-2.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {GLOVES.map((item, idx) => {
              const owned = (clothingOwned["gloves"] || []).includes(item.id);
              const active = clothingActive["gloves"] === item.id;
              return (
                <motion.button key={item.id} onClick={() => handleClothingAction("gloves", item.id, item.price)}
                  className={`bg-gradient-to-r from-white/[0.04] to-transparent border rounded-2xl p-3 flex items-center gap-3 ${active ? "border-[#E040FB]/40" : owned ? "border-white/10" : "border-white/5"}`}
                  whileTap={{ scale: 0.97 }} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.02 }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: `${item.color}15` }}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <span className="text-white/70 text-xs font-bold block">{item.name}</span>
                  </div>
                  {active ? <Check size={14} className="text-[#E040FB]" />
                    : owned ? <span className="text-white/15 text-[9px] font-bold">EQUIP</span>
                    : <span className="text-[#E040FB] text-[10px] font-black flex items-center gap-0.5"><Star size={8} fill="#E040FB" />{item.price}</span>}
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* ── Hat sub ── */}
        {skinSub === "hat" && (
          <motion.div className="w-full max-w-md grid grid-cols-2 gap-2.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {HATS.map((hat, idx) => {
              const owned = ownedHats.includes(hat.id);
              const active = activeHat === hat.id;
              return (
                <motion.button key={hat.id} onClick={() => handleBuyHat(hat)}
                  className={`bg-gradient-to-b from-white/[0.04] to-transparent border rounded-2xl p-3 flex flex-col items-center gap-2 ${active ? "border-[#E040FB]/40" : owned ? "border-white/10" : "border-white/5"}`}
                  style={active ? { boxShadow: `0 0 15px ${hat.color}25` } : undefined}
                  whileTap={{ scale: 0.96 }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.03 }}>
                  {/* SVG Hat Preview */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: `radial-gradient(circle, ${hat.color}20, transparent)` }}>
                    <HatPreview type={hat.type} color={hat.color} emissive={hat.emissive} size={48} />
                  </div>
                  <span className="text-white/50 text-[9px] font-bold">{hat.name}</span>
                  {active ? <span className="text-[#E040FB] text-[8px] font-black flex items-center gap-0.5"><Check size={10} />EQUIPPED</span>
                    : owned ? <span className="text-white/20 text-[8px] font-bold">EQUIP</span>
                    : <span className="text-[#E040FB] text-[9px] font-black flex items-center gap-0.5"><Star size={8} fill="#E040FB" />{hat.price}</span>}
                </motion.button>
              );
            })}
          </motion.div>
        )}

        {/* ── Trail sub ── */}
        {skinSub === "trail" && (
          <motion.div className="w-full max-w-md grid grid-cols-2 gap-2.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {TRAILS.map((trail, idx) => {
              const owned = ownedTrails.includes(trail.id);
              const active = activeTrail === trail.id;
              return (
                <motion.button key={trail.id} onClick={() => handleBuyTrail(trail)}
                  className={`bg-gradient-to-b from-white/[0.04] to-transparent border rounded-2xl p-3 flex flex-col items-center gap-2 ${active ? "border-[#E040FB]/40" : owned ? "border-white/10" : "border-white/5"}`}
                  style={active ? { boxShadow: `0 0 15px ${trail.color}25` } : undefined}
                  whileTap={{ scale: 0.96 }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.03 }}>
                  {/* SVG Trail Preview */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: `radial-gradient(circle, ${trail.color}20, transparent)` }}>
                    <TrailPreview type={trail.type} color={trail.color} emissive={trail.emissive} size={48} />
                  </div>
                  <span className="text-white/50 text-[9px] font-bold">{trail.name}</span>
                  {active ? <span className="text-[#E040FB] text-[8px] font-black flex items-center gap-0.5"><Check size={10} />EQUIPPED</span>
                    : owned ? <span className="text-white/20 text-[8px] font-bold">EQUIP</span>
                    : <span className="text-[#E040FB] text-[9px] font-black flex items-center gap-0.5"><Star size={8} fill="#E040FB" />{trail.price}</span>}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </>)}

      {/* ═══════ SKIN DETAIL MODAL ═══════ */}
      <AnimatePresence>
        {selectedSkin && (
          <motion.div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedSkin(null)} />
            <motion.div className="relative w-full max-w-xs mx-4 mb-4 sm:mb-0 bg-[#0d1117] border border-white/10 rounded-3xl overflow-hidden"
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}>
              <button onClick={() => setSelectedSkin(null)} className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                <X size={14} className="text-white/40" />
              </button>
              <div className="relative h-40 flex items-center justify-center"
                style={{ background: `radial-gradient(circle at 50% 60%, ${selectedSkin.emissive}15, transparent 70%)` }}>
                <SkinPreview skin={selectedSkin} size={120} />
              </div>
              <div className="px-5 pb-5 -mt-2 text-center">
                <div className="text-3xl mb-1">{selectedSkin.icon}</div>
                <h2 className="text-white font-black text-lg capitalize">{selectedSkin.id === "default" ? "Classic" : selectedSkin.id}</h2>
                <div className="flex items-center justify-center gap-2 mt-3 mb-4">
                  {[selectedSkin.bodyColor, selectedSkin.headColor, selectedSkin.limbColor, selectedSkin.emissive].map((c, i) => (
                    <div key={i} className="w-6 h-6 rounded-full border border-white/10" style={{ backgroundColor: c, boxShadow: i === 3 ? `0 0 8px ${c}60` : undefined }} />
                  ))}
                </div>
                {selectedSkin.particle && (
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <Wind size={10} className="text-white/30" />
                    <span className="text-white/30 text-[10px]">Particle effects</span>
                  </div>
                )}
                {(() => {
                  const owned = ownedSkins.includes(selectedSkin.id);
                  const active = activeSkin === selectedSkin.id;
                  if (active) return (
                    <div className="w-full py-3 rounded-xl bg-[#E040FB]/10 border border-[#E040FB]/20 text-center">
                      <span className="text-[#E040FB] font-bold text-sm flex items-center justify-center gap-2"><Check size={16} /> Active</span>
                    </div>
                  );
                  return (
                    <motion.button onClick={() => handleBuySkin(selectedSkin)}
                      className="w-full py-3 rounded-xl font-bold text-sm border transition-all"
                      style={{ background: owned ? `${selectedSkin.emissive}15` : `linear-gradient(135deg, ${selectedSkin.emissive}30, ${selectedSkin.emissive}10)`, borderColor: `${selectedSkin.emissive}30`, color: owned ? selectedSkin.emissive : "#fff" }}
                      whileTap={{ scale: 0.97 }}>
                      {owned ? t.buttons.select : selectedSkin.price === 0 ? t.buttons.free : (
                        <span className="flex items-center justify-center gap-1.5">Buy for <Star size={12} className="text-[#E040FB]" fill="#E040FB" /> {selectedSkin.price}</span>
                      )}
                    </motion.button>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════ POWER-UPS TAB ═══════ */}
      {tab === "powerups" && (
        <motion.div className="w-full max-w-md flex flex-col gap-2.5"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          {POWER_UPS.map((pu, idx) => {
            const Icon = pu.icon;
            const GameIcon = pu.gameIcon;
            const owned = boughtPowerUps[pu.id] || 0;
            return (
              <motion.button
                key={pu.id}
                onClick={() => handleBuyPowerUp(pu)}
                className="bg-gradient-to-r from-white/[0.04] to-transparent border border-white/5 rounded-2xl p-3.5 flex items-center gap-3.5 w-full text-left"
                whileHover={{ borderColor: `${pu.color}30` }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="p-2.5 rounded-xl" style={{ background: `${pu.color}10`, border: `1px solid ${pu.color}20` }}>
                  <Icon size={20} style={{ color: pu.color, filter: `drop-shadow(0 0 4px ${pu.color}40)` }} />
                </div>
                <div className="flex-1">
                  <span className="text-white/80 text-xs font-bold">{pu.name}</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <GameIcon size={10} style={{ color: pu.color, opacity: 0.5 }} />
                    <span className="text-white/25 text-[10px] font-bold">{pu.game}</span>
                  </div>
                </div>
                {owned > 0 && (
                  <span className="text-white/15 text-xs font-bold bg-white/5 px-2 py-1 rounded-lg">x{owned}</span>
                )}
                <div className="flex items-center gap-1 bg-[#E040FB]/8 px-2.5 py-1.5 rounded-lg border border-[#E040FB]/15">
                  <Star size={10} className="text-[#E040FB]" fill="#E040FB" />
                  <span className="text-[#E040FB] font-black text-xs">{pu.price}</span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      )}


      {/* ═══════ ABILITIES TAB ═══════ */}
      {tab === "abilities" && (
        <motion.div className="w-full max-w-md flex flex-col gap-2.5"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-2 mb-1">
            <Mountain size={12} className="text-[#00FF88]/50" />
            <span className="text-white/20 text-[10px] font-bold tracking-widest">SKY CLIMB ABILITIES</span>
          </div>
          {ABILITIES.map((ab, idx) => {
            const owned = parseInt(typeof window !== "undefined" ? localStorage.getItem(`plizio_ability_${ab.id}`) || "0" : "0");
            return (
              <motion.button
                key={ab.id}
                onClick={() => handleBuyAbility(ab)}
                className="bg-gradient-to-r from-white/[0.04] to-transparent border border-white/5 rounded-2xl p-3.5 flex items-center gap-3.5 w-full text-left"
                whileHover={{ borderColor: `${ab.color}30` }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${ab.color}10`, border: `1px solid ${ab.color}15` }}>
                  {ab.icon}
                </div>
                <div className="flex-1">
                  <span className="text-white/80 text-xs font-bold">{ab.name}</span>
                </div>
                {owned > 0 && (
                  <span className="text-white/15 text-xs font-bold bg-white/5 px-2 py-1 rounded-lg">x{owned}</span>
                )}
                <div className="flex items-center gap-1 bg-[#E040FB]/8 px-2.5 py-1.5 rounded-lg border border-[#E040FB]/15">
                  <Star size={10} className="text-[#E040FB]" fill="#E040FB" />
                  <span className="text-[#E040FB] font-black text-xs">{ab.price}</span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      )}
    </main>
  );
}
