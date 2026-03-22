"use client";
// ReptileExplorer — Island i2: Reptiles & Birds (Reptilien & Vögel)
// 5 rounds with beautiful SVG illustrations, using shared ExplorerEngine

import ExplorerEngine from "./ExplorerEngine";
import type { ExplorerDef, MCQQuestion } from "./ExplorerEngine";

// ─────────────────────────────────────────────────────────────────────────────
// Labels (all 4 languages)
// ─────────────────────────────────────────────────────────────────────────────

const LABELS: ExplorerDef["labels"] = {
  en: {
    r1_title: "Reptile or Bird?",
    r1_text: "Identify which group the animal belongs to.",
    r2_title: "Bird Features",
    r2_text: "What feature is being described?",
    r3_title: "Cold or Warm Blooded?",
    r3_text: "Tap in the correct order: first Cold-blooded, then Warm-blooded animals.",
    r3_hint: "Tap: Snake 🐍 → Crocodile 🐊 → Eagle 🦅 → Penguin 🐧",
    r4_title: "Egg & Scales",
    r4_text: "Answer questions about how reptiles and birds reproduce.",
    r5_title: "Quick Review",
    r5_text: "Mixed questions from all rounds.",
    reptile: "Reptile 🦎", bird: "Bird 🐦",
    q_snake: "🐍 Has dry scaly skin, no legs, is cold-blooded. What type of animal?",
    q_eagle: "🦅 Has feathers, wings, a beak, is warm-blooded. What type of animal?",
    q_crocodile: "🐊 Has scales, four legs, lays eggs, is cold-blooded. What type of animal?",
    q_penguin: "🐧 Cannot fly, has feathers, flippers for swimming. What type of animal?",
    feathers: "Feathers 🪶", beak: "Beak 👃", wings: "Wings 🦅", hollow_bones: "Hollow bones 🦴",
    q_bird_fly: "✈️ Which feature makes birds light enough to fly?",
    q_bird_warm: "🌡️ Which feature covers a bird's body and keeps it warm?",
    q_bird_eat: "🍎 Which feature does a bird use to catch and eat food?",
    cold_blooded: "Cold-blooded 🥶", warm_blooded: "Warm-blooded 🔥",
    snake_lbl: "Snake 🐍", croc_lbl: "Crocodile 🐊", eagle_lbl: "Eagle 🦅", penguin_lbl: "Penguin 🐧",
    hard_shell: "Hard-shelled egg 🥚", leathery: "Leathery egg 🍳", live_birth: "Live birth 👶", no_egg: "No eggs 🚫",
    q_reptile_egg: "🦎 What type of egg do most reptiles lay?",
    q_bird_egg: "🐦 What type of egg do birds lay?",
    q_cold_body: "🌡️ Reptiles are cold-blooded. What does this mean?",
    body_temp_env: "Their body temperature matches the environment 🌡️",
    body_temp_fixed: "They always stay at 37°C 🌡️",
    body_temp_cold: "They can only live in cold places ❄️",
    body_temp_hot: "They can only live in hot places 🌴",
  },
  de: {
    r1_title: "Reptil oder Vogel?",
    r1_text: "Bestimme, welcher Gruppe das Tier angehört.",
    r2_title: "Vogelmerkmale",
    r2_text: "Welches Merkmal wird beschrieben?",
    r3_title: "Kalt- oder Warmblüter?",
    r3_text: "Tippe in der richtigen Reihenfolge: zuerst Kaltblüter, dann Warmblüter.",
    r3_hint: "Tippe: Schlange 🐍 → Krokodil 🐊 → Adler 🦅 → Pinguin 🐧",
    r4_title: "Eier & Schuppen",
    r4_text: "Beantworte Fragen zur Fortpflanzung von Reptilien und Vögeln.",
    r5_title: "Schnelle Wiederholung",
    r5_text: "Gemischte Fragen aus allen Runden.",
    reptile: "Reptil 🦎", bird: "Vogel 🐦",
    q_snake: "🐍 Hat trockene, schuppige Haut, keine Beine, ist kaltblütig. Was ist das?",
    q_eagle: "🦅 Hat Federn, Flügel, einen Schnabel, ist warmblütig. Was ist das?",
    q_crocodile: "🐊 Hat Schuppen, vier Beine, legt Eier, ist kaltblütig. Was ist das?",
    q_penguin: "🐧 Kann nicht fliegen, hat Federn, Flossen zum Schwimmen. Was ist das?",
    feathers: "Federn 🪶", beak: "Schnabel 👃", wings: "Flügel 🦅", hollow_bones: "Hohle Knochen 🦴",
    q_bird_fly: "✈️ Welches Merkmal macht Vögel leicht genug zum Fliegen?",
    q_bird_warm: "🌡️ Welches Merkmal bedeckt den Vogelkörper und hält ihn warm?",
    q_bird_eat: "🍎 Welches Merkmal benutzt ein Vogel zum Fressen?",
    cold_blooded: "Kaltblüter 🥶", warm_blooded: "Warmblüter 🔥",
    snake_lbl: "Schlange 🐍", croc_lbl: "Krokodil 🐊", eagle_lbl: "Adler 🦅", penguin_lbl: "Pinguin 🐧",
    hard_shell: "Hartschaliges Ei 🥚", leathery: "Lederhautiges Ei 🍳", live_birth: "Lebendgeburt 👶", no_egg: "Keine Eier 🚫",
    q_reptile_egg: "🦎 Welche Art Ei legen die meisten Reptilien?",
    q_bird_egg: "🐦 Welche Art Ei legen Vögel?",
    q_cold_body: "🌡️ Reptilien sind kaltblütig. Was bedeutet das?",
    body_temp_env: "Körpertemperatur passt sich der Umgebung an 🌡️",
    body_temp_fixed: "Sie haben immer 37°C 🌡️",
    body_temp_cold: "Sie leben nur an kalten Orten ❄️",
    body_temp_hot: "Sie leben nur an heißen Orten 🌴",
  },
  hu: {
    r1_title: "Hüllő vagy madár?",
    r1_text: "Határozd meg, melyik csoportba tartozik az állat.",
    r2_title: "Madár jellemzők",
    r2_text: "Milyen jellemzőről van szó?",
    r3_title: "Hideg- vagy melegvérű?",
    r3_text: "Koppints a helyes sorrendben: először hidegvérűek, majd melegvérűek.",
    r3_hint: "Koppints: Kígyó 🐍 → Krokodil 🐊 → Sas 🦅 → Pingvin 🐧",
    r4_title: "Tojások és pikkelyek",
    r4_text: "Válaszolj a hüllők és madarak szaporodásáról.",
    r5_title: "Gyors összefoglalás",
    r5_text: "Vegyes kérdések az összes körből.",
    reptile: "Hüllő 🦎", bird: "Madár 🐦",
    q_snake: "🐍 Száraz, pikkelyes bőre van, lábai nincsenek, hidegvérű. Mi ez?",
    q_eagle: "🦅 Tollas, szárnya és csőre van, melegvérű. Mi ez?",
    q_crocodile: "🐊 Pikkelyes, négy lába van, tojást rak, hidegvérű. Mi ez?",
    q_penguin: "🐧 Nem tud repülni, tolla van, uszonyokkal úszik. Mi ez?",
    feathers: "Toll 🪶", beak: "Csőr 👃", wings: "Szárny 🦅", hollow_bones: "Üreges csontok 🦴",
    q_bird_fly: "✈️ Melyik jellemző teszi a madarakat elég könnyűvé a repüléshez?",
    q_bird_warm: "🌡️ Melyik jellemző borítja a madár testét és tartja melegen?",
    q_bird_eat: "🍎 Melyik jellemzőt használja a madár az evéshez?",
    cold_blooded: "Hidegvérű 🥶", warm_blooded: "Melegvérű 🔥",
    snake_lbl: "Kígyó 🐍", croc_lbl: "Krokodil 🐊", eagle_lbl: "Sas 🦅", penguin_lbl: "Pingvin 🐧",
    hard_shell: "Keményhéjú tojás 🥚", leathery: "Bőrhéjú tojás 🍳", live_birth: "Elevenszülés 👶", no_egg: "Nem rak tojást 🚫",
    q_reptile_egg: "🦎 Milyen tojást raknak a legtöbb hüllők?",
    q_bird_egg: "🐦 Milyen tojást raknak a madarak?",
    q_cold_body: "🌡️ A hüllők hidegvérűek. Mit jelent ez?",
    body_temp_env: "Testhőmérsékletük igazodik a környezethez 🌡️",
    body_temp_fixed: "Mindig 37°C-uk van 🌡️",
    body_temp_cold: "Csak hideg helyeken élnek ❄️",
    body_temp_hot: "Csak meleg helyeken élnek 🌴",
  },
  ro: {
    r1_title: "Reptilă sau pasăre?",
    r1_text: "Identifică grupul din care face parte animalul.",
    r2_title: "Caracteristici ale păsărilor",
    r2_text: "Ce caracteristică este descrisă?",
    r3_title: "Cu sânge rece sau cald?",
    r3_text: "Atinge în ordinea corectă: întâi animale cu sânge rece, apoi cu sânge cald.",
    r3_hint: "Atinge: Șarpe 🐍 → Crocodil 🐊 → Vultur 🦅 → Pinguin 🐧",
    r4_title: "Ouă și solzi",
    r4_text: "Răspunde la întrebări despre reproducerea reptilelor și păsărilor.",
    r5_title: "Recapitulare rapidă",
    r5_text: "Întrebări mixte din toate rundele.",
    reptile: "Reptilă 🦎", bird: "Pasăre 🐦",
    q_snake: "🐍 Are pielea uscată și solzoasă, fără picioare, cu sânge rece. Ce este?",
    q_eagle: "🦅 Are pene, aripi, cioc, cu sânge cald. Ce este?",
    q_crocodile: "🐊 Are solzi, patru picioare, depune ouă, cu sânge rece. Ce este?",
    q_penguin: "🐧 Nu poate zbura, are pene, înotătoare pentru înot. Ce este?",
    feathers: "Pene 🪶", beak: "Cioc 👃", wings: "Aripi 🦅", hollow_bones: "Oase goale 🦴",
    q_bird_fly: "✈️ Ce caracteristică face păsările suficient de ușoare pentru zbor?",
    q_bird_warm: "🌡️ Ce caracteristică acoperă corpul păsării și îl menține cald?",
    q_bird_eat: "🍎 Ce caracteristică folosește o pasăre pentru a prinde și mânca hrană?",
    cold_blooded: "Cu sânge rece 🥶", warm_blooded: "Cu sânge cald 🔥",
    snake_lbl: "Șarpe 🐍", croc_lbl: "Crocodil 🐊", eagle_lbl: "Vultur 🦅", penguin_lbl: "Pinguin 🐧",
    hard_shell: "Ou cu coajă dură 🥚", leathery: "Ou cu coajă pieloasă 🍳", live_birth: "Naștere vie 👶", no_egg: "Fără ouă 🚫",
    q_reptile_egg: "🦎 Ce tip de ou depun majoritatea reptilelor?",
    q_bird_egg: "🐦 Ce tip de ou depun păsările?",
    q_cold_body: "🌡️ Reptilele sunt cu sânge rece. Ce înseamnă asta?",
    body_temp_env: "Temperatura corpului se adaptează mediului 🌡️",
    body_temp_fixed: "Au mereu 37°C 🌡️",
    body_temp_cold: "Trăiesc doar în locuri reci ❄️",
    body_temp_hot: "Trăiesc doar în locuri calde 🌴",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// SVG Illustrations
// ─────────────────────────────────────────────────────────────────────────────

function SVG_R1(lang: string = "en"): React.ReactNode {
  const lb: Record<string,{reptile:string;bird:string}> = {
    en:{reptile:"Reptile 🦎",bird:"Bird 🐦"},de:{reptile:"Reptil 🦎",bird:"Vogel 🐦"},
    hu:{reptile:"Hüllő 🦎",bird:"Madár 🐦"},ro:{reptile:"Reptilă 🦎",bird:"Pasăre 🐦"},
  };
  const l = lb[lang]||lb.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        {/* Gradients */}
        <linearGradient id="r1_sky_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2E9CDE" />
          <stop offset="100%" stopColor="#6DD5ED" />
        </linearGradient>
        <linearGradient id="r1_desert_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A574" />
          <stop offset="100%" stopColor="#B8956A" />
        </linearGradient>
        <linearGradient id="r1_desert_rock" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="100%" stopColor="#6B5344" />
        </linearGradient>
        <linearGradient id="r1_lizard_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7FBF3F" />
          <stop offset="50%" stopColor="#6BA82F" />
          <stop offset="100%" stopColor="#558B2F" />
        </linearGradient>
        <linearGradient id="r1_lizard_belly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4E89F" />
          <stop offset="100%" stopColor="#B3D97F" />
        </linearGradient>
        <linearGradient id="r1_bird_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF8C1A" />
          <stop offset="50%" stopColor="#FF6F00" />
          <stop offset="100%" stopColor="#D84315" />
        </linearGradient>
        <linearGradient id="r1_bird_head" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
      </defs>

      {/* Split background */}
      <rect x="0" y="0" width="120" height="160" fill="url(#r1_desert_bg)" />
      <rect x="120" y="0" width="120" height="160" fill="url(#r1_sky_bg)" />

      {/* Desert rock on left */}
      <ellipse cx="60" cy="110" rx="45" ry="28" fill="url(#r1_desert_rock)" />

      {/* LIZARD on left */}
      <g transform="translate(35, 95)">
        {/* Shadow */}
        <ellipse cx="20" cy="26" rx="35" ry="6" fill="rgba(0,0,0,0.15)" />

        {/* Body - organic bezier curve */}
        <path d="M 8,2 Q 18,-2 32,0 Q 45,2 50,8 Q 48,12 38,14 Q 25,16 12,14 Q 8,12 8,2" fill="url(#r1_lizard_body)" />

        {/* Belly highlight */}
        <path d="M 12,8 Q 20,7 35,8 Q 42,9 48,10" fill="url(#r1_lizard_belly)" opacity="0.6" />

        {/* Scale texture pattern */}
        <path d="M 12,4 Q 14,2 16,4" stroke="#558B2F" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M 20,3 Q 22,1 24,3" stroke="#558B2F" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M 28,2 Q 30,0 32,2" stroke="#558B2F" strokeWidth="0.8" fill="none" opacity="0.5" />
        <path d="M 36,3 Q 38,2 40,4" stroke="#558B2F" strokeWidth="0.8" fill="none" opacity="0.5" />

        {/* Head */}
        <circle cx="3" cy="5" r="5" fill="url(#r1_lizard_body)" />

        {/* Eye - full anatomy */}
        <circle cx="0" cy="2" r="2.5" fill="#f0f9ff" />
        <circle cx="0" cy="2" r="1.8" fill="#1e3a5f" />
        <circle cx="0" cy="2" r="1.2" fill="#0c1829" />
        <circle cx="0.2" cy="2" r="1" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="0.3" />
        <circle cx="1" cy="1" r="0.8" fill="white" opacity="0.85" />
        <circle cx="-0.6" cy="2.8" r="0.35" fill="white" opacity="0.4" />

        {/* Legs */}
        <path d="M 10,10 L 8,18" strokeWidth="2" stroke="#558B2F" strokeLinecap="round" fill="none" />
        <path d="M 18,12 L 16,20" strokeWidth="2" stroke="#558B2F" strokeLinecap="round" fill="none" />
        <path d="M 35,13 L 37,21" strokeWidth="2" stroke="#558B2F" strokeLinecap="round" fill="none" />
        <path d="M 43,11 L 45,19" strokeWidth="2" stroke="#558B2F" strokeLinecap="round" fill="none" />

        {/* Tail - curved */}
        <path d="M 52,6 Q 62,2 70,-4" stroke="#558B2F" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>

      {/* BIRD on right */}
      <g transform="translate(165, 85)">
        {/* Shadow */}
        <ellipse cx="0" cy="28" rx="20" ry="5" fill="rgba(0,0,0,0.12)" />

        {/* Body */}
        <ellipse cx="0" cy="0" rx="13" ry="11" fill="url(#r1_bird_body)" />

        {/* Wing feathers - detailed strokes */}
        <path d="M -12,-3 Q -18,-8 -22,-5 Q -20,-2 -12,-1" fill="#D84315" opacity="0.8" />
        <path d="M -18,-6 L -19,-9" stroke="#B71C1C" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M -14,-7 L -15,-10" stroke="#B71C1C" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M -10,-6 L -11,-9" stroke="#B71C1C" strokeWidth="0.8" strokeLinecap="round" />

        <path d="M 12,-3 Q 18,-8 22,-5 Q 20,-2 12,-1" fill="#D84315" opacity="0.8" />
        <path d="M 18,-6 L 19,-9" stroke="#B71C1C" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M 14,-7 L 15,-10" stroke="#B71C1C" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M 10,-6 L 11,-9" stroke="#B71C1C" strokeWidth="0.8" strokeLinecap="round" />

        {/* Head */}
        <circle cx="3" cy="-8" r="6" fill="url(#r1_bird_head)" />

        {/* Beak - tapered */}
        <path d="M 8,-8 L 15,-8 L 11,-6 Z" fill="#FFB300" stroke="#FFA500" strokeWidth="0.5" />

        {/* Eye - full anatomy */}
        <circle cx="6" cy="-10" r="2.2" fill="#f0f9ff" />
        <circle cx="6" cy="-10" r="1.6" fill="#1e3a5f" />
        <circle cx="6" cy="-10" r="1" fill="#0c1829" />
        <circle cx="6" cy="-10" r="1.5" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="0.3" />
        <circle cx="7" cy="-11" r="0.7" fill="white" opacity="0.85" />
        <circle cx="5" cy="-9" r="0.3" fill="white" opacity="0.4" />

        {/* Tail feathers */}
        <path d="M 0,10 L -8,18 M 4,10 L 0,18 M -4,10 L -4,18" stroke="#FF6F00" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>

      {/* Labels with dashed pointer lines */}
      <line x1="35" y1="50" x2="35" y2="75" stroke="rgba(0,0,0,0.3)" strokeWidth="1" strokeDasharray="3,2" />
      <text x="35" y="145" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#333">{l.reptile}</text>

      <line x1="165" y1="55" x2="165" y2="75" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="3,2" />
      <text x="165" y="145" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white">{l.bird}</text>
    </svg>
  );
}

function SVG_R2(lang: string = "en"): React.ReactNode {
  const lb: Record<string,{feathers:string;bones:string;eagle:string}> = {
    en:{feathers:"Feathers 🪶",bones:"Hollow bones 🦴",eagle:"Eagle 🦅"},
    de:{feathers:"Federn 🪶",bones:"Hohle Knochen 🦴",eagle:"Adler 🦅"},
    hu:{feathers:"Tollak 🪶",bones:"Üreges csontok 🦴",eagle:"Sas 🦅"},
    ro:{feathers:"Pene 🪶",bones:"Oase goale 🦴",eagle:"Vultur 🦅"},
  };
  const l = lb[lang]||lb.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        {/* Sky gradient */}
        <linearGradient id="r2_sky_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E88E5" />
          <stop offset="100%" stopColor="#81C3FF" />
        </linearGradient>

        {/* Eagle gradients */}
        <linearGradient id="r2_eagle_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="50%" stopColor="#7B3F00" />
          <stop offset="100%" stopColor="#5D2E0F" />
        </linearGradient>
        <linearGradient id="r2_eagle_belly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A574" />
          <stop offset="100%" stopColor="#B8956A" />
        </linearGradient>
        <linearGradient id="r2_eagle_wing" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#654321" />
          <stop offset="100%" stopColor="#4A3728" />
        </linearGradient>

        {/* Cloud */}
        <linearGradient id="r2_cloud" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(200,220,240,0.6)" />
        </linearGradient>
      </defs>

      {/* Sky background */}
      <rect width="240" height="160" fill="url(#r2_sky_bg)" />

      {/* Subtle clouds */}
      <ellipse cx="50" cy="30" rx="30" ry="12" fill="url(#r2_cloud)" opacity="0.4" />
      <ellipse cx="200" cy="40" rx="35" ry="15" fill="url(#r2_cloud)" opacity="0.3" />

      {/* EAGLE centered */}
      <g transform="translate(120, 75)">
        {/* Shadow on ground */}
        <ellipse cx="0" cy="32" rx="28" ry="6" fill="rgba(0,0,0,0.15)" />

        {/* Left wing - spread wide with feather detail */}
        <path d="M -14,-4 Q -24,-12 -32,-8 Q -28,-2 -14,2" fill="url(#r2_eagle_wing)" />
        {/* Left feather strokes */}
        <path d="M -24,-10 L -25,-14" stroke="#3F2517" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M -20,-11 L -21,-15" stroke="#3F2517" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M -16,-10 L -17,-14" stroke="#3F2517" strokeWidth="0.9" strokeLinecap="round" />

        {/* Right wing - spread wide with feather detail */}
        <path d="M 14,-4 Q 24,-12 32,-8 Q 28,-2 14,2" fill="url(#r2_eagle_wing)" />
        {/* Right feather strokes */}
        <path d="M 24,-10 L 25,-14" stroke="#3F2517" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M 20,-11 L 21,-15" stroke="#3F2517" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M 16,-10 L 17,-14" stroke="#3F2517" strokeWidth="0.9" strokeLinecap="round" />

        {/* Main body - organic shape */}
        <ellipse cx="0" cy="2" rx="14" ry="12" fill="url(#r2_eagle_body)" />

        {/* Belly highlight */}
        <path d="M -8,0 Q 0,1 8,0" fill="url(#r2_eagle_belly)" opacity="0.5" />

        {/* Head - prominent */}
        <circle cx="4" cy="-10" r="7" fill="#5D2E0F" />

        {/* Beak - curved tapered shape */}
        <path d="M 10,-10 Q 18,-10 20,-9 L 12,-7 Z" fill="#FFB300" stroke="#FFA500" strokeWidth="0.5" />

        {/* Cere (base of beak) */}
        <ellipse cx="9" cy="-9.5" rx="3" ry="2" fill="#FFB300" opacity="0.7" />

        {/* Eye - full anatomy with all details */}
        <circle cx="7" cy="-12" r="2.6" fill="#f0f9ff" />
        <circle cx="7" cy="-12" r="1.9" fill="#1e3a5f" />
        <circle cx="7" cy="-12" r="1.2" fill="#0c1829" />
        <circle cx="7" cy="-12" r="1.8" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="0.35" />
        <circle cx="8.2" cy="-13" r="0.85" fill="white" opacity="0.85" />
        <circle cx="6" cy="-11" r="0.4" fill="white" opacity="0.4" />

        {/* Talons - three claws */}
        <path d="M -4,14 L -4,22" strokeWidth="2" stroke="#FFB300" strokeLinecap="round" />
        <path d="M 0,15 L 0,23" strokeWidth="2" stroke="#FFB300" strokeLinecap="round" />
        <path d="M 4,14 L 4,22" strokeWidth="2" stroke="#FFB300" strokeLinecap="round" />

        {/* Tail feathers below body */}
        <path d="M -6,12 L -10,22" strokeWidth="2" stroke="#654321" strokeLinecap="round" />
        <path d="M 6,12 L 10,22" strokeWidth="2" stroke="#654321" strokeLinecap="round" />
      </g>

      {/* Labels with dashed pointer lines */}
      <line x1="85" y1="120" x2="105" y2="110" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3,2" />
      <text x="65" y="155" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white" opacity="0.8">{l.feathers}</text>

      <line x1="155" y1="120" x2="135" y2="110" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3,2" />
      <text x="175" y="155" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white" opacity="0.8">{l.bones}</text>

      <text x="120" y="145" textAnchor="middle" fontSize="7" fontWeight="bold" fill="white">{l.eagle}</text>
    </svg>
  );
}

function SVG_R3(lang: string = "en"): React.ReactNode {
  const lb: Record<string,{cold:string;warm:string}> = {
    en:{cold:"Cold 🥶",warm:"Warm 🔥"},de:{cold:"Kalt 🥶",warm:"Warm 🔥"},
    hu:{cold:"Hideg 🥶",warm:"Meleg 🔥"},ro:{cold:"Rece 🥶",warm:"Cald 🔥"},
  };
  const l = lb[lang]||lb.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        {/* Background gradients */}
        <linearGradient id="r3_cold_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3F51B5" />
          <stop offset="100%" stopColor="#5C6BC0" />
        </linearGradient>
        <linearGradient id="r3_warm_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF7043" />
          <stop offset="100%" stopColor="#FF5722" />
        </linearGradient>

        {/* Snake */}
        <linearGradient id="r3_snake_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7FBF3F" />
          <stop offset="100%" stopColor="#558B2F" />
        </linearGradient>

        {/* Crocodile */}
        <linearGradient id="r3_croc_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2E7D32" />
          <stop offset="100%" stopColor="#1B5E20" />
        </linearGradient>

        {/* Eagle */}
        <linearGradient id="r3_eagle_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>

        {/* Penguin */}
        <linearGradient id="r3_penguin_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>

      {/* Split backgrounds */}
      <rect x="0" y="0" width="120" height="160" fill="url(#r3_cold_bg)" />
      <rect x="120" y="0" width="120" height="160" fill="url(#r3_warm_bg)" />

      {/* LEFT COLUMN - COLD BLOODED ANIMALS */}

      {/* SNAKE - S-shaped curve */}
      <g transform="translate(25, 65)">
        {/* Shadow */}
        <ellipse cx="15" cy="22" rx="22" ry="5" fill="rgba(0,0,0,0.15)" />

        {/* Snake body - organic S curve */}
        <path d="M 0,0 Q 8,-8 12,-2 Q 15,4 10,10 Q 5,12 2,8" stroke="url(#r3_snake_body)" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* Scale texture pattern on snake */}
        <path d="M 2,-3 Q 3,-2 4,-3" stroke="#33691E" strokeWidth="0.6" fill="none" opacity="0.6" />
        <path d="M 6,-6 Q 7,-5 8,-6" stroke="#33691E" strokeWidth="0.6" fill="none" opacity="0.6" />
        <path d="M 10,-2 Q 11,-1 12,-2" stroke="#33691E" strokeWidth="0.6" fill="none" opacity="0.6" />
        <path d="M 12,4 Q 13,5 14,4" stroke="#33691E" strokeWidth="0.6" fill="none" opacity="0.6" />
        <path d="M 8,11 Q 9,12 10,11" stroke="#33691E" strokeWidth="0.6" fill="none" opacity="0.6" />

        {/* Head - small circle */}
        <circle cx="0" cy="0" r="3" fill="url(#r3_snake_body)" />

        {/* Forked tongue */}
        <path d="M 1,2 L -2,5 M 1,2 L 3,5" stroke="#FF6B6B" strokeWidth="0.8" strokeLinecap="round" />

        {/* Eye - full anatomy */}
        <circle cx="1.5" cy="-1.5" r="1.8" fill="#f0f9ff" />
        <circle cx="1.5" cy="-1.5" r="1.2" fill="#1e3a5f" />
        <circle cx="1.5" cy="-1.5" r="0.7" fill="#0c1829" />
        <circle cx="1.5" cy="-1.5" r="1.1" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="0.25" />
        <circle cx="2.3" cy="-2.3" r="0.6" fill="white" opacity="0.85" />
      </g>

      {/* CROCODILE */}
      <g transform="translate(50, 105)">
        {/* Shadow */}
        <ellipse cx="8" cy="15" rx="20" ry="4" fill="rgba(0,0,0,0.15)" />

        {/* Body - long ellipse */}
        <ellipse cx="0" cy="0" rx="20" ry="7" fill="url(#r3_croc_body)" />

        {/* Back ridges (armor) */}
        <path d="M -15,-4 L -13,-8 M -8,-4 L -8,-8 M -2,-4 L -2,-8 M 4,-4 L 4,-8 M 10,-4 L 10,-8" stroke="#1B5E20" strokeWidth="1.2" strokeLinecap="round" />

        {/* Snout - triangular */}
        <polygon points="20,0 27,-2 27,2" fill="#2E7D32" />

        {/* Four short legs */}
        <path d="M -12,6 L -14,12" strokeWidth="1.5" stroke="#1B5E20" strokeLinecap="round" />
        <path d="M -4,6 L -4,12" strokeWidth="1.5" stroke="#1B5E20" strokeLinecap="round" />
        <path d="M 4,6 L 4,12" strokeWidth="1.5" stroke="#1B5E20" strokeLinecap="round" />
        <path d="M 12,6 L 14,12" strokeWidth="1.5" stroke="#1B5E20" strokeLinecap="round" />

        {/* Eye - full anatomy */}
        <circle cx="10" cy="-3.5" r="2" fill="#f0f9ff" />
        <circle cx="10" cy="-3.5" r="1.4" fill="#1e3a5f" />
        <circle cx="10" cy="-3.5" r="0.85" fill="#0c1829" />
        <circle cx="10" cy="-3.5" r="1.3" fill="none" stroke="rgba(34,211,238,0.25)" strokeWidth="0.25" />
        <circle cx="10.7" cy="-4.2" r="0.5" fill="white" opacity="0.8" />
      </g>

      {/* RIGHT COLUMN - WARM BLOODED ANIMALS */}

      {/* EAGLE */}
      <g transform="translate(160, 70)">
        {/* Shadow */}
        <ellipse cx="0" cy="22" rx="18" ry="4" fill="rgba(0,0,0,0.12)" />

        {/* Body */}
        <ellipse cx="0" cy="0" rx="12" ry="10" fill="url(#r3_eagle_body)" />

        {/* Wings */}
        <path d="M -10,-3 Q -16,-7 -20,-4 Q -16,-1 -10,1" fill="#654321" />
        <path d="M 10,-3 Q 16,-7 20,-4 Q 16,-1 10,1" fill="#654321" />

        {/* Wing feathers */}
        <path d="M -16,-6 L -17,-9" stroke="#4A3728" strokeWidth="0.7" strokeLinecap="round" />
        <path d="M -12,-7 L -13,-10" stroke="#4A3728" strokeWidth="0.7" strokeLinecap="round" />

        {/* Head */}
        <circle cx="2" cy="-8" r="5" fill="#5D2E0F" />

        {/* Beak */}
        <path d="M 6,-8 L 11,-8 L 7,-6 Z" fill="#FFB300" />

        {/* Eye - full anatomy */}
        <circle cx="5" cy="-9.5" r="1.8" fill="#f0f9ff" />
        <circle cx="5" cy="-9.5" r="1.2" fill="#1e3a5f" />
        <circle cx="5" cy="-9.5" r="0.75" fill="#0c1829" />
        <circle cx="5" cy="-9.5" r="1.1" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="0.25" />
        <circle cx="5.7" cy="-10.2" r="0.5" fill="white" opacity="0.85" />
      </g>

      {/* PENGUIN */}
      <g transform="translate(170, 110)">
        {/* Shadow */}
        <ellipse cx="0" cy="18" rx="12" ry="4" fill="rgba(0,0,0,0.12)" />

        {/* Body - dark back */}
        <ellipse cx="0" cy="0" rx="8" ry="11" fill="url(#r3_penguin_body)" />

        {/* Belly - white */}
        <ellipse cx="0" cy="2" rx="5" ry="7" fill="#f0f9ff" />

        {/* Head - rounded */}
        <circle cx="0" cy="-9" r="5" fill="#000000" />

        {/* Beak - small orange */}
        <polygon points="-1,-7 1,-7 0,-5" fill="#FFB300" />

        {/* Flippers */}
        <path d="M -6,0 L -10,4" strokeWidth="2" stroke="#000000" strokeLinecap="round" />
        <path d="M 6,0 L 10,4" strokeWidth="2" stroke="#000000" strokeLinecap="round" />

        {/* Eye - full anatomy */}
        <circle cx="2" cy="-11" r="1.6" fill="#f0f9ff" />
        <circle cx="2" cy="-11" r="1" fill="#1e3a5f" />
        <circle cx="2" cy="-11" r="0.6" fill="#0c1829" />
        <circle cx="2" cy="-11" r="0.95" fill="none" stroke="rgba(34,211,238,0.25)" strokeWidth="0.2" />
        <circle cx="2.6" cy="-11.6" r="0.4" fill="white" opacity="0.8" />
      </g>

      {/* Labels */}
      <text x="60" y="155" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white">{l.cold}</text>
      <text x="180" y="155" textAnchor="middle" fontSize="6" fontWeight="bold" fill="white">{l.warm}</text>
    </svg>
  );
}

function SVG_R4(lang: string = "en"): React.ReactNode {
  const lb: Record<string,{leathery:string;hard:string;hatching:string}> = {
    en:{leathery:"Leathery 🍳",hard:"Hard shell 🥚",hatching:"Hatching 🐣"},
    de:{leathery:"Lederartig 🍳",hard:"Hartschale 🥚",hatching:"Schlüpfend 🐣"},
    hu:{leathery:"Bőrszerű 🍳",hard:"Kemény héj 🥚",hatching:"Kelés 🐣"},
    ro:{leathery:"Pieloasă 🍳",hard:"Coajă tare 🥚",hatching:"Ecloziune 🐣"},
  };
  const l = lb[lang]||lb.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        {/* Background */}
        <linearGradient id="r4_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A574" />
          <stop offset="100%" stopColor="#A0826D" />
        </linearGradient>

        {/* Reptile (leathery) egg */}
        <linearGradient id="r4_reptile_egg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A974" />
          <stop offset="50%" stopColor="#C9A86A" />
          <stop offset="100%" stopColor="#A8906D" />
        </linearGradient>

        {/* Reptile egg shine */}
        <linearGradient id="r4_reptile_shine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8C8A0" />
          <stop offset="100%" stopColor="rgba(232,200,160,0)" />
        </linearGradient>

        {/* Bird (hard shell) egg */}
        <linearGradient id="r4_bird_egg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="50%" stopColor="#EDD5B5" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>

        {/* Bird egg shine */}
        <linearGradient id="r4_bird_shine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>

        {/* Hatching egg */}
        <linearGradient id="r4_hatch_egg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D2B48C" />
          <stop offset="100%" stopColor="#C9A961" />
        </linearGradient>

        {/* Baby creature inside */}
        <linearGradient id="r4_baby_color" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7FBF3F" />
          <stop offset="100%" stopColor="#558B2F" />
        </linearGradient>
      </defs>

      {/* Background - sandy earth */}
      <rect width="240" height="160" fill="url(#r4_bg)" />

      {/* REPTILE EGG (left) - leathery */}
      <g transform="translate(55, 75)">
        {/* Shadow */}
        <ellipse cx="0" cy="20" rx="16" ry="4" fill="rgba(0,0,0,0.15)" />

        {/* Egg - leathery texture */}
        <ellipse cx="0" cy="0" rx="13" ry="19" fill="url(#r4_reptile_egg)" />

        {/* Leathery texture - wrinkles */}
        <path d="M -6,-10 Q -4,-12 -2,-10" stroke="rgba(0,0,0,0.2)" strokeWidth="0.6" fill="none" />
        <path d="M 0,-14 Q 2,-15 4,-14" stroke="rgba(0,0,0,0.2)" strokeWidth="0.6" fill="none" />
        <path d="M -8,0 Q -6,2 -4,0" stroke="rgba(0,0,0,0.2)" strokeWidth="0.6" fill="none" />
        <path d="M 4,2 Q 6,4 8,2" stroke="rgba(0,0,0,0.2)" strokeWidth="0.6" fill="none" />
        <path d="M -4,10 Q -2,12 0,10" stroke="rgba(0,0,0,0.2)" strokeWidth="0.6" fill="none" />

        {/* Shine - soft glow */}
        <ellipse cx="-5" cy="-8" rx="6" ry="8" fill="url(#r4_reptile_shine)" />

        {/* Embryo silhouette inside (subtle) */}
        <ellipse cx="0" cy="2" rx="6" ry="8" fill="rgba(0,0,0,0.1)" />

        {/* Label with dashed pointer */}
        <line x1="0" y1="25" x2="0" y2="35" stroke="rgba(0,0,0,0.3)" strokeWidth="1" strokeDasharray="2,2" />
        <text x="0" y="48" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#333">{l.leathery}</text>
      </g>

      {/* BIRD EGG (right) - hard shell */}
      <g transform="translate(185, 75)">
        {/* Shadow */}
        <ellipse cx="0" cy="20" rx="15" ry="4" fill="rgba(0,0,0,0.12)" />

        {/* Egg - smooth hard shell */}
        <ellipse cx="0" cy="0" rx="12" ry="18" fill="url(#r4_bird_egg)" stroke="#D2B48C" strokeWidth="0.5" />

        {/* Hard shell shine - bright and smooth */}
        <ellipse cx="-4" cy="-10" rx="5" ry="7" fill="url(#r4_bird_shine)" />

        {/* Subtle speckle pattern (bird egg texture) */}
        <circle cx="-3" cy="2" r="0.5" fill="rgba(128,100,80,0.4)" />
        <circle cx="4" cy="-5" r="0.4" fill="rgba(128,100,80,0.3)" />
        <circle cx="2" cy="8" r="0.5" fill="rgba(128,100,80,0.35)" />

        {/* Label with dashed pointer */}
        <line x1="0" y1="25" x2="0" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2,2" />
        <text x="0" y="48" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">{l.hard}</text>
      </g>

      {/* HATCHING EGG (center bottom) */}
      <g transform="translate(120, 128)">
        {/* Cracked eggshell */}
        <ellipse cx="0" cy="0" rx="11" ry="14" fill="url(#r4_hatch_egg)" stroke="#8B7355" strokeWidth="0.8" />

        {/* Large crack down center */}
        <path d="M 0,-14 Q -2,-8 0,0 Q 1,6 0,12" stroke="#8B7355" strokeWidth="1.5" fill="none" />

        {/* Pieces falling */}
        <path d="M -3,-12 L -6,-16" stroke="#8B7355" strokeWidth="0.8" fill="none" />
        <path d="M 3,-12 L 6,-16" stroke="#8B7355" strokeWidth="0.8" fill="none" />

        {/* Baby peeking out - small creature */}
        <circle cx="0" cy="-2" r="4" fill="url(#r4_baby_color)" />
        <circle cx="1.5" cy="-3" r="1.4" fill="#f0f9ff" />
        <circle cx="1.5" cy="-3" r="0.85" fill="#1e3a5f" />
        <circle cx="2.2" cy="-3.7" r="0.4" fill="white" opacity="0.8" />

        {/* Label below */}
        <text x="0" y="22" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#333">{l.hatching}</text>
      </g>
    </svg>
  );
}

function SVG_R5(lang: string = "en"): React.ReactNode {
  const lb: Record<string,{reptiles:string;birds:string;scales:string;cold:string;eggs:string;feathers:string;warm:string}> = {
    en:{reptiles:"Reptiles",birds:"Birds",scales:"Scales ✓",cold:"Cold-blooded ✓",eggs:"Eggs ✓",feathers:"Feathers ✓",warm:"Warm-blooded ✓"},
    de:{reptiles:"Reptilien",birds:"Vögel",scales:"Schuppen ✓",cold:"Kaltblüter ✓",eggs:"Eier ✓",feathers:"Federn ✓",warm:"Warmblüter ✓"},
    hu:{reptiles:"Hüllők",birds:"Madarak",scales:"Pikkelyek ✓",cold:"Hidegvérű ✓",eggs:"Tojás ✓",feathers:"Tollak ✓",warm:"Melegvérű ✓"},
    ro:{reptiles:"Reptile",birds:"Păsări",scales:"Solzi ✓",cold:"Sânge rece ✓",eggs:"Ouă ✓",feathers:"Pene ✓",warm:"Sânge cald ✓"},
  };
  const l = lb[lang]||lb.en;
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        {/* Background */}
        <linearGradient id="r5_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2E5233" />
          <stop offset="100%" stopColor="#1B3D1B" />
        </linearGradient>

        {/* Left card - Reptile */}
        <linearGradient id="r5_card_left" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#558B2F" />
          <stop offset="100%" stopColor="#33691E" />
        </linearGradient>

        {/* Right card - Bird */}
        <linearGradient id="r5_card_right" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF7043" />
          <stop offset="100%" stopColor="#D84315" />
        </linearGradient>

        {/* Lizard */}
        <linearGradient id="r5_lizard" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7FBF3F" />
          <stop offset="100%" stopColor="#558B2F" />
        </linearGradient>

        {/* Eagle */}
        <linearGradient id="r5_eagle" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#r5_bg)" />

      {/* LEFT CARD - REPTILES */}
      <rect x="8" y="12" width="105" height="136" rx="10" fill="url(#r5_card_left)" opacity="0.95" stroke="white" strokeWidth="1.5" />

      {/* Card shine effect */}
      <rect x="8" y="12" width="105" height="20" rx="10" fill="white" opacity="0.1" />

      {/* Title */}
      <text x="60.5" y="32" textAnchor="middle" fontSize="13" fontWeight="900" fill="white">{l.reptiles}</text>

      {/* Lizard illustration */}
      <g transform="translate(35, 58)">
        {/* Body - small organic shape */}
        <path d="M 0,0 Q 10,-4 18,-2 Q 20,2 16,4 Q 8,5 0,2" fill="url(#r5_lizard)" />

        {/* Head */}
        <circle cx="-2" cy="1" r="3" fill="url(#r5_lizard)" />

        {/* Eye */}
        <circle cx="-3" cy="-1" r="1.4" fill="#f0f9ff" />
        <circle cx="-3" cy="-1" r="0.9" fill="#1e3a5f" />
        <circle cx="-2.5" cy="-1.5" r="0.35" fill="white" opacity="0.8" />

        {/* Tail */}
        <path d="M 18,-2 Q 26,-4 30,0" stroke="#558B2F" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Front legs */}
        <path d="M 4,3 L 3,7" strokeWidth="1.2" stroke="#558B2F" strokeLinecap="round" />
        <path d="M 10,4 L 10,7" strokeWidth="1.2" stroke="#558B2F" strokeLinecap="round" />
      </g>

      {/* Features list */}
      <g>
        <circle cx="18" cy="98" r="2.5" fill="#9CCC65" />
        <text x="26" y="102" fontSize="9" fontWeight="bold" fill="white">{l.scales}</text>
      </g>

      <g>
        <circle cx="18" cy="116" r="2.5" fill="#9CCC65" />
        <text x="26" y="120" fontSize="9" fontWeight="bold" fill="white">{l.cold}</text>
      </g>

      <g>
        <circle cx="18" cy="134" r="2.5" fill="#9CCC65" />
        <text x="26" y="138" fontSize="9" fontWeight="bold" fill="white">{l.eggs}</text>
      </g>

      {/* RIGHT CARD - BIRDS */}
      <rect x="127" y="12" width="105" height="136" rx="10" fill="url(#r5_card_right)" opacity="0.95" stroke="white" strokeWidth="1.5" />

      {/* Card shine effect */}
      <rect x="127" y="12" width="105" height="20" rx="10" fill="white" opacity="0.1" />

      {/* Title */}
      <text x="179.5" y="32" textAnchor="middle" fontSize="13" fontWeight="900" fill="white">{l.birds}</text>

      {/* Eagle illustration */}
      <g transform="translate(155, 52)">
        {/* Body */}
        <ellipse cx="0" cy="0" rx="10" ry="8" fill="url(#r5_eagle)" />

        {/* Wings - minimal */}
        <path d="M -8,-2 Q -14,-5 -16,-2 Q -12,0 -8,0" fill="#654321" />
        <path d="M 8,-2 Q 14,-5 16,-2 Q 12,0 8,0" fill="#654321" />

        {/* Head */}
        <circle cx="2" cy="-6" r="4" fill="#5D2E0F" />

        {/* Beak */}
        <polygon points="5,-6 9,-6 6,-4" fill="#FFB300" />

        {/* Eye */}
        <circle cx="4" cy="-7.5" r="1.4" fill="#f0f9ff" />
        <circle cx="4" cy="-7.5" r="0.9" fill="#1e3a5f" />
        <circle cx="4.5" cy="-8" r="0.35" fill="white" opacity="0.8" />

        {/* Tail */}
        <path d="M 0,8 L -3,12 M 0,8 L 0,12 M 0,8 L 3,12" stroke="#654321" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Features list */}
      <g>
        <circle cx="137" cy="98" r="2.5" fill="#FFD54F" />
        <text x="145" y="102" fontSize="9" fontWeight="bold" fill="white">{l.feathers}</text>
      </g>

      <g>
        <circle cx="137" cy="116" r="2.5" fill="#FFD54F" />
        <text x="145" y="120" fontSize="9" fontWeight="bold" fill="white">{l.warm}</text>
      </g>

      <g>
        <circle cx="137" cy="134" r="2.5" fill="#FFD54F" />
        <text x="145" y="138" fontSize="9" fontWeight="bold" fill="white">{l.eggs}</text>
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Questions
// ─────────────────────────────────────────────────────────────────────────────

// ─── R1: Identify reptile vs bird (1 question)
const R1_QUESTIONS: MCQQuestion[] = [
  { question: "q_snake", choices: ["reptile", "bird"], answer: "reptile" },
];

// ─── R2: Bird features (1 question)
const R2_QUESTIONS: MCQQuestion[] = [
  { question: "q_bird_fly", choices: ["hollow_bones", "feathers", "beak", "wings"], answer: "hollow_bones" },
];

// ─── R3: Cold vs warm blooded (1 question)
const R3_QUESTIONS: MCQQuestion[] = [
  { question: "q_cold_body", choices: ["body_temp_env", "body_temp_fixed", "body_temp_cold", "body_temp_hot"], answer: "body_temp_env" },
];

// ─── R4: Eggs & reproduction (1 question)
const R4_QUESTIONS: MCQQuestion[] = [
  { question: "q_reptile_egg", choices: ["leathery", "hard_shell", "live_birth", "no_egg"], answer: "leathery" },
];

// ─── R5: Review questions from all rounds (2-3 questions)
const R5_QUESTIONS: MCQQuestion[] = [
  { question: "q_eagle", choices: ["reptile", "bird"], answer: "bird" },
  { question: "q_bird_warm", choices: ["feathers", "wings", "beak", "hollow_bones"], answer: "feathers" },
  { question: "q_bird_egg", choices: ["hard_shell", "leathery", "live_birth", "no_egg"], answer: "hard_shell" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Explorer Definition
// ─────────────────────────────────────────────────────────────────────────────

const REPTILE_EXPLORER: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "r1_title",
      infoText: "r1_text",
      svg: SVG_R1,
      questions: R1_QUESTIONS,
    },
    {
      type: "mcq",
      infoTitle: "r2_title",
      infoText: "r2_text",
      svg: SVG_R2,
      questions: R2_QUESTIONS,
    },
    {
      type: "mcq",
      infoTitle: "r3_title",
      infoText: "r3_text",
      svg: SVG_R3,
      questions: R3_QUESTIONS,
    },
    {
      type: "mcq",
      infoTitle: "r4_title",
      infoText: "r4_text",
      svg: SVG_R4,
      questions: R4_QUESTIONS,
    },
    {
      type: "mcq",
      infoTitle: "r5_title",
      infoText: "r5_text",
      svg: SVG_R5,
      questions: R5_QUESTIONS,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
}

export default function ReptileExplorer({ color = "#00D4FF", lang = "en", onDone }: Props) {
  return <ExplorerEngine def={REPTILE_EXPLORER} color={color} lang={lang} onDone={onDone} />;
}
