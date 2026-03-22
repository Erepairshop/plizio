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
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r1_sky_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1B6CA8" />
          <stop offset="40%" stopColor="#4DB8E8" />
          <stop offset="100%" stopColor="#A5D8F0" />
        </linearGradient>
        <linearGradient id="r1_desert_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8C49A" />
          <stop offset="60%" stopColor="#D4A574" />
          <stop offset="100%" stopColor="#B8956A" />
        </linearGradient>
        <linearGradient id="r1_desert_rock" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#A08060" />
          <stop offset="40%" stopColor="#8B7355" />
          <stop offset="100%" stopColor="#5A4030" />
        </linearGradient>
        <radialGradient id="r1_rock_hi" cx="35%" cy="30%">
          <stop offset="0%" stopColor="rgba(255,240,200,0.3)" />
          <stop offset="100%" stopColor="rgba(255,240,200,0)" />
        </radialGradient>
        <linearGradient id="r1_lizard_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8FD44F" />
          <stop offset="30%" stopColor="#7FBF3F" />
          <stop offset="70%" stopColor="#6BA82F" />
          <stop offset="100%" stopColor="#4A7A20" />
        </linearGradient>
        <linearGradient id="r1_lizard_belly" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8F5A0" />
          <stop offset="100%" stopColor="#C8E07F" />
        </linearGradient>
        <linearGradient id="r1_bird_body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9F43" />
          <stop offset="40%" stopColor="#FF6F00" />
          <stop offset="100%" stopColor="#D84315" />
        </linearGradient>
        <linearGradient id="r1_bird_breast" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFECD2" />
          <stop offset="100%" stopColor="#FFDAB3" />
        </linearGradient>
        <linearGradient id="r1_bird_head" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5D4037" />
          <stop offset="100%" stopColor="#3E2723" />
        </linearGradient>
        <radialGradient id="r1_sun_glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(255,235,150,0.6)" />
          <stop offset="60%" stopColor="rgba(255,235,150,0.15)" />
          <stop offset="100%" stopColor="rgba(255,235,150,0)" />
        </radialGradient>
        <linearGradient id="r1_sand_fg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C9A06A" />
          <stop offset="100%" stopColor="#A0804A" />
        </linearGradient>
        <linearGradient id="r1_branch" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6D4C2A" />
          <stop offset="100%" stopColor="#4A3520" />
        </linearGradient>
      </defs>

      {/* Split background */}
      <rect x="0" y="0" width="120" height="160" fill="url(#r1_desert_bg)" />
      <rect x="120" y="0" width="120" height="160" fill="url(#r1_sky_bg)" />

      {/* Divider line soft blend */}
      <rect x="118" y="0" width="4" height="160" fill="rgba(0,0,0,0.06)" />

      {/* Sun glow on desert side */}
      <circle cx="30" cy="20" r="35" fill="url(#r1_sun_glow)" />
      <circle cx="30" cy="20" r="12" fill="#FFE082" opacity="0.7" />
      <circle cx="30" cy="20" r="8" fill="#FFD54F" opacity="0.9" />

      {/* Desert: small distant dunes */}
      <ellipse cx="25" cy="108" rx="30" ry="8" fill="#C49A6A" opacity="0.5" />
      <ellipse cx="95" cy="115" rx="25" ry="6" fill="#BF9060" opacity="0.4" />

      {/* Desert rock on left */}
      <ellipse cx="60" cy="112" rx="48" ry="26" fill="url(#r1_desert_rock)" />
      <ellipse cx="60" cy="112" rx="48" ry="26" fill="url(#r1_rock_hi)" />
      {/* Rock cracks */}
      <path d="M 35 105 Q 40 108 38 115" stroke="rgba(0,0,0,0.12)" strokeWidth="0.6" fill="none" />
      <path d="M 70 100 Q 75 106 72 112" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />

      {/* Small cactus behind rock */}
      <rect x="95" y="90" width="4" height="22" rx="2" fill="#5A8B3A" />
      <rect x="91" y="95" width="4" height="10" rx="2" fill="#5A8B3A" transform="rotate(-30 93 100)" />
      <rect x="97" y="97" width="3" height="8" rx="1.5" fill="#5A8B3A" transform="rotate(25 98 101)" />

      {/* Sky side: distant cloud */}
      <ellipse cx="170" cy="22" rx="20" ry="7" fill="rgba(255,255,255,0.35)" />
      <ellipse cx="180" cy="20" rx="14" ry="6" fill="rgba(255,255,255,0.3)" />
      <ellipse cx="220" cy="35" rx="15" ry="5" fill="rgba(255,255,255,0.2)" />

      {/* Tree branch on right side for bird */}
      <path d="M 145 130 Q 155 125 165 128 Q 175 130 185 126 Q 200 120 215 122" stroke="url(#r1_branch)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M 145 130 Q 155 125 165 128 Q 175 130 185 126 Q 200 120 215 122" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Branch knots */}
      <circle cx="165" cy="128" r="1.5" fill="#5A4030" />
      <circle cx="195" cy="123" r="1" fill="#5A4030" />
      {/* Small leaves on branch */}
      <ellipse cx="200" cy="116" rx="4" ry="7" fill="#4A9A35" opacity="0.7" transform="rotate(-20 200 116)" />
      <ellipse cx="210" cy="118" rx="3" ry="6" fill="#5AAA45" opacity="0.6" transform="rotate(10 210 118)" />

      {/* Sand/grass foreground */}
      <path d="M 0 140 Q 20 135 60 138 Q 100 142 120 140 Q 160 135 200 138 Q 230 142 240 140 L 240 160 L 0 160 Z" fill="url(#r1_sand_fg)" opacity="0.4" />

      {/* LIZARD on left rock */}
      <g transform="translate(30, 92)">
        {/* Shadow */}
        <ellipse cx="25" cy="26" rx="38" ry="5" fill="rgba(0,0,0,0.18)" />

        {/* Tail - long curved */}
        <path d="M 52,6 Q 60,3 68,-2 Q 74,-6 78,-2" stroke="#4A7A20" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M 52,6 Q 60,3 68,-2 Q 74,-6 78,-2" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Hind legs */}
        <path d="M 38,13 L 42,20 L 44,18 M 42,20 L 40,22" stroke="#4A7A20" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 44,11 L 48,18 L 50,16 M 48,18 L 46,20" stroke="#4A7A20" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Body - organic bezier curve */}
        <path d="M 6,4 Q 14,-3 28,-2 Q 42,0 50,6 Q 52,10 44,14 Q 30,17 14,15 Q 6,13 6,4" fill="url(#r1_lizard_body)" />

        {/* Belly highlight */}
        <path d="M 10,9 Q 20,7 35,8 Q 44,10 50,11" stroke="url(#r1_lizard_belly)" strokeWidth="3" fill="none" opacity="0.5" strokeLinecap="round" />

        {/* Scale texture pattern - rows */}
        <g stroke="#4A7A20" strokeWidth="0.6" fill="none" opacity="0.45">
          <path d="M 12,3 Q 13,1.5 14,3" /><path d="M 17,2 Q 18,0.5 19,2" /><path d="M 22,1 Q 23,-0.5 24,1" />
          <path d="M 27,0 Q 28,-1.5 29,0" /><path d="M 32,0 Q 33,-1.5 34,0" /><path d="M 37,1 Q 38,-0.5 39,1" />
          <path d="M 42,3 Q 43,1.5 44,3" />
          <path d="M 14,7 Q 15,5.5 16,7" /><path d="M 20,6 Q 21,4.5 22,6" /><path d="M 26,5 Q 27,3.5 28,5" />
          <path d="M 32,5 Q 33,3.5 34,5" /><path d="M 38,6 Q 39,4.5 40,6" />
          <path d="M 16,11 Q 17,9.5 18,11" /><path d="M 24,10 Q 25,8.5 26,10" /><path d="M 32,10 Q 33,8.5 34,10" />
        </g>

        {/* Dorsal ridge */}
        <path d="M 12,0 Q 20,-4 28,-3 Q 38,-2 46,2" stroke="#558B2F" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="1.5,2" />

        {/* Front legs with toes */}
        <path d="M 12,12 L 8,19 L 6,17 M 8,19 L 10,21" stroke="#4A7A20" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 20,14 L 16,21 L 14,19 M 16,21 L 18,23" stroke="#4A7A20" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Head - wider triangular */}
        <path d="M 6,4 Q 2,0 -2,2 Q -5,5 -3,8 Q 0,10 6,8 Z" fill="url(#r1_lizard_body)" />
        {/* Head highlight */}
        <path d="M 2,2 Q -1,3 0,6" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Eye - detailed with vertical slit pupil */}
        <circle cx="-1" cy="3" r="2.8" fill="#D4E060" />
        <ellipse cx="-1" cy="3" rx="0.8" ry="2.2" fill="#1a1a0a" />
        <circle cx="-1" cy="3" r="2.5" fill="none" stroke="rgba(100,120,20,0.4)" strokeWidth="0.4" />
        <circle cx="0" cy="2" r="0.7" fill="white" opacity="0.85" />
        <circle cx="-1.5" cy="3.8" r="0.3" fill="white" opacity="0.35" />

        {/* Nostril */}
        <circle cx="-4" cy="4" r="0.6" fill="rgba(0,0,0,0.4)" />

        {/* Tongue flick */}
        <path d="M -5,5.5 L -9,4 M -5,5.5 L -9,7" stroke="#E84040" strokeWidth="0.7" strokeLinecap="round" fill="none" />
      </g>

      {/* ROBIN/BIRD perched on branch on right */}
      <g transform="translate(178, 100)">
        {/* Shadow on branch */}
        <ellipse cx="0" cy="25" rx="12" ry="3" fill="rgba(0,0,0,0.12)" />

        {/* Tail feathers - long and detailed */}
        <path d="M -4,12 Q -10,22 -14,28" stroke="#8B4513" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M -2,12 Q -6,22 -8,27" stroke="#A0522D" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 0,12 Q -2,22 -3,26" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Legs gripping branch */}
        <path d="M -3,14 L -4,22 M -4,22 L -7,24 M -4,22 L -1,24 M -4,22 L -4,25" stroke="#555" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M 3,14 L 4,22 M 4,22 L 1,24 M 4,22 L 7,24 M 4,22 L 4,25" stroke="#555" strokeWidth="1.2" strokeLinecap="round" fill="none" />

        {/* Body */}
        <ellipse cx="0" cy="2" rx="12" ry="13" fill="url(#r1_bird_body)" />

        {/* Breast patch */}
        <ellipse cx="2" cy="5" rx="7" ry="8" fill="url(#r1_bird_breast)" opacity="0.85" />

        {/* Wing - folded with feather detail */}
        <path d="M -8,0 Q -14,-2 -16,4 Q -14,10 -8,12 Q -4,10 -4,4 Z" fill="#B5651D" />
        <path d="M -12,2 L -14,6" stroke="#8B4513" strokeWidth="0.6" opacity="0.5" />
        <path d="M -10,0 L -12,4" stroke="#8B4513" strokeWidth="0.6" opacity="0.5" />
        <path d="M -8,2 L -10,6" stroke="#8B4513" strokeWidth="0.6" opacity="0.5" />
        {/* Wing edge highlight */}
        <path d="M -8,0 Q -14,-2 -16,4" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" fill="none" />

        {/* Head */}
        <circle cx="4" cy="-10" r="7" fill="url(#r1_bird_head)" />
        {/* Head highlight */}
        <circle cx="2" cy="-13" r="3" fill="rgba(255,255,255,0.06)" />

        {/* Beak - refined two-part */}
        <path d="M 10,-10 L 17,-10 L 14,-8.5 Z" fill="#FFB300" />
        <path d="M 10,-10 L 17,-10.5 L 14,-11 Z" fill="#E6A200" />
        <line x1="10" y1="-10" x2="17" y2="-10.2" stroke="rgba(0,0,0,0.15)" strokeWidth="0.3" />

        {/* Eye - detailed with catch light */}
        <circle cx="7" cy="-12" r="2.5" fill="#f0f9ff" />
        <circle cx="7" cy="-12" r="1.8" fill="#2C1810" />
        <circle cx="7" cy="-12" r="1.1" fill="#0a0a0a" />
        <circle cx="8" cy="-13" r="0.8" fill="white" opacity="0.9" />
        <circle cx="6.2" cy="-11.2" r="0.3" fill="white" opacity="0.4" />
        {/* Eye ring */}
        <circle cx="7" cy="-12" r="2.3" fill="none" stroke="rgba(100,80,60,0.3)" strokeWidth="0.4" />

        {/* Feather texture on body */}
        <g stroke="rgba(180,100,30,0.3)" strokeWidth="0.5" fill="none">
          <path d="M -2,-4 Q 0,-5 2,-4" /><path d="M 2,-2 Q 4,-3 6,-2" />
          <path d="M -4,0 Q -2,-1 0,0" /><path d="M 4,0 Q 6,-1 8,0" />
          <path d="M -2,4 Q 0,3 2,4" /><path d="M 4,6 Q 6,5 8,6" />
        </g>
      </g>

      {/* Small grass tufts */}
      <g stroke="#7AB55C" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5">
        <path d="M 130 148 Q 132 140 134 148" />
        <path d="M 220 144 Q 222 136 224 144" />
        <path d="M 5 150 Q 7 143 9 150" />
      </g>
    </svg>
  );
}

function SVG_R2(lang: string = "en"): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r2_sky_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0D47A1" />
          <stop offset="30%" stopColor="#1565C0" />
          <stop offset="70%" stopColor="#42A5F5" />
          <stop offset="100%" stopColor="#90CAF9" />
        </linearGradient>
        <linearGradient id="r2_eagle_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6D4C2A" />
          <stop offset="40%" stopColor="#5D3E1F" />
          <stop offset="100%" stopColor="#3E2510" />
        </linearGradient>
        <linearGradient id="r2_eagle_head" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5F5DC" />
          <stop offset="100%" stopColor="#E8D8B0" />
        </linearGradient>
        <linearGradient id="r2_wing_top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B6340" />
          <stop offset="50%" stopColor="#6D4C2A" />
          <stop offset="100%" stopColor="#4A3018" />
        </linearGradient>
        <linearGradient id="r2_wing_under" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A574" />
          <stop offset="100%" stopColor="#B08050" />
        </linearGradient>
        <radialGradient id="r2_sun_glow" cx="85%" cy="10%">
          <stop offset="0%" stopColor="rgba(255,235,150,0.4)" />
          <stop offset="60%" stopColor="rgba(255,235,150,0.08)" />
          <stop offset="100%" stopColor="rgba(255,235,150,0)" />
        </radialGradient>
        <linearGradient id="r2_mtn" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5C6BC0" />
          <stop offset="100%" stopColor="#3949AB" />
        </linearGradient>
      </defs>

      {/* Sky background */}
      <rect width="240" height="160" fill="url(#r2_sky_bg)" />

      {/* Sun glow */}
      <circle cx="210" cy="20" r="60" fill="url(#r2_sun_glow)" />

      {/* Distant mountains */}
      <path d="M 0 145 L 30 100 L 55 120 L 80 85 L 105 110 L 130 90 L 155 105 L 180 80 L 210 100 L 240 88 L 240 160 L 0 160 Z" fill="url(#r2_mtn)" opacity="0.25" />

      {/* Clouds - soft layered */}
      <g opacity="0.3">
        <ellipse cx="40" cy="35" rx="28" ry="8" fill="white" />
        <ellipse cx="55" cy="33" rx="18" ry="7" fill="white" />
        <ellipse cx="25" cy="37" rx="15" ry="5" fill="white" />
      </g>
      <g opacity="0.2">
        <ellipse cx="195" cy="50" rx="22" ry="7" fill="white" />
        <ellipse cx="210" cy="48" rx="15" ry="6" fill="white" />
      </g>

      {/* EAGLE - large, soaring with wings spread */}
      <g transform="translate(120, 72)">
        {/* Left wing - broad with individual flight feather shapes */}
        <path d="M -12,-2 Q -30,-15 -55,-20 Q -65,-22 -70,-18 Q -65,-12 -50,-8 Q -35,-4 -12,2 Z" fill="url(#r2_wing_top)" />
        {/* Wing underside visible strip */}
        <path d="M -12,2 Q -35,-2 -50,-6 Q -60,-8 -65,-10 Q -60,-5 -45,0 Q -30,4 -12,4 Z" fill="url(#r2_wing_under)" opacity="0.6" />
        {/* Primary feather tips */}
        <g stroke="#3E2510" strokeWidth="0.7" fill="none" opacity="0.6">
          <path d="M -55,-18 L -60,-22" /><path d="M -50,-17 L -55,-22" />
          <path d="M -45,-15 L -49,-20" /><path d="M -60,-18 L -66,-22" />
          <path d="M -65,-18 L -72,-20" />
        </g>
        {/* Wing feather barring */}
        <g stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" fill="none">
          <path d="M -20,-8 Q -30,-12 -40,-14" />
          <path d="M -18,-4 Q -28,-8 -38,-10" />
          <path d="M -16,0 Q -26,-4 -36,-6" />
        </g>

        {/* Right wing - mirror */}
        <path d="M 12,-2 Q 30,-15 55,-20 Q 65,-22 70,-18 Q 65,-12 50,-8 Q 35,-4 12,2 Z" fill="url(#r2_wing_top)" />
        <path d="M 12,2 Q 35,-2 50,-6 Q 60,-8 65,-10 Q 60,-5 45,0 Q 30,4 12,4 Z" fill="url(#r2_wing_under)" opacity="0.6" />
        <g stroke="#3E2510" strokeWidth="0.7" fill="none" opacity="0.6">
          <path d="M 55,-18 L 60,-22" /><path d="M 50,-17 L 55,-22" />
          <path d="M 45,-15 L 49,-20" /><path d="M 60,-18 L 66,-22" />
          <path d="M 65,-18 L 72,-20" />
        </g>
        <g stroke="rgba(0,0,0,0.12)" strokeWidth="0.5" fill="none">
          <path d="M 20,-8 Q 30,-12 40,-14" />
          <path d="M 18,-4 Q 28,-8 38,-10" />
          <path d="M 16,0 Q 26,-4 36,-6" />
        </g>

        {/* Body */}
        <ellipse cx="0" cy="2" rx="12" ry="10" fill="url(#r2_eagle_body)" />
        {/* Belly lighter stripe */}
        <ellipse cx="0" cy="4" rx="6" ry="5" fill="#B08050" opacity="0.4" />

        {/* Tail feathers - fanned */}
        <path d="M -6,12 Q -10,20 -14,28" stroke="#5D3E1F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M -2,12 Q -4,22 -6,30" stroke="#6D4C2A" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 2,12 Q 2,22 2,30" stroke="#5D3E1F" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 6,12 Q 8,22 10,28" stroke="#6D4C2A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* White tail band */}
        <path d="M -12,24 Q 0,26 10,24" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />

        {/* Head - white (bald eagle style) */}
        <circle cx="2" cy="-8" r="7" fill="url(#r2_eagle_head)" />
        {/* Head feather texture */}
        <g stroke="rgba(180,170,140,0.3)" strokeWidth="0.4" fill="none">
          <path d="M -2,-12 Q 0,-13 2,-12" /><path d="M 0,-11 Q 2,-12 4,-11" />
          <path d="M -3,-10 Q -1,-11 1,-10" />
        </g>

        {/* Brow ridge - fierce */}
        <path d="M 3,-11 Q 5,-12 7,-11.5" stroke="#8B7355" strokeWidth="0.8" fill="none" />

        {/* Eye - intense golden */}
        <circle cx="5" cy="-9" r="2.4" fill="#FFFDE0" />
        <circle cx="5" cy="-9" r="1.7" fill="#D4A017" />
        <circle cx="5" cy="-9" r="1" fill="#1a1a00" />
        <circle cx="6" cy="-10" r="0.7" fill="white" opacity="0.9" />
        <circle cx="4.3" cy="-8.3" r="0.3" fill="white" opacity="0.35" />

        {/* Beak - large hooked */}
        <path d="M 8,-8 Q 12,-7 16,-8 Q 18,-10 16,-11 L 8,-10 Z" fill="#FFB300" />
        <path d="M 8,-10 L 16,-11 Q 18,-10 16,-8 L 14,-9 Z" fill="#E6A200" />
        {/* Beak hook tip */}
        <path d="M 16,-8 Q 17,-7 16,-6" stroke="#D49B00" strokeWidth="0.8" fill="none" />
        {/* Cere */}
        <ellipse cx="8.5" cy="-9.5" rx="2.5" ry="1.5" fill="#FFD54F" opacity="0.6" />

        {/* Talons - powerful yellow claws */}
        <g stroke="#E6A200" strokeWidth="1.5" strokeLinecap="round" fill="none">
          <path d="M -3,12 L -5,16 L -7,14" />
          <path d="M 0,12 L 0,17 L -2,15" />
          <path d="M 3,12 L 5,16 L 7,14" />
        </g>
      </g>

      {/* Feather detail floating - indicates hollow bone lightness */}
      <g opacity="0.4">
        <path d="M 20 120 Q 22 115 20 110 Q 18 105 20 100" stroke="#8B6340" strokeWidth="1" fill="none" />
        <path d="M 20 100 Q 22 105 24 103 M 20 100 Q 18 105 16 103" stroke="#8B6340" strokeWidth="0.5" fill="none" />
        <path d="M 215 130 Q 217 125 215 120 Q 213 115 215 110" stroke="#8B6340" strokeWidth="1" fill="none" />
      </g>
    </svg>
  );
}

function SVG_R3(lang: string = "en"): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r3_cold_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1A237E" />
          <stop offset="40%" stopColor="#283593" />
          <stop offset="100%" stopColor="#3F51B5" />
        </linearGradient>
        <linearGradient id="r3_warm_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#BF360C" />
          <stop offset="40%" stopColor="#E65100" />
          <stop offset="100%" stopColor="#FF7043" />
        </linearGradient>
        <linearGradient id="r3_therm_tube" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#BDBDBD" />
        </linearGradient>
        <linearGradient id="r3_merc_cold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#42A5F5" />
          <stop offset="100%" stopColor="#1E88E5" />
        </linearGradient>
        <linearGradient id="r3_merc_warm" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF5252" />
          <stop offset="100%" stopColor="#D32F2F" />
        </linearGradient>
        <linearGradient id="r3_snake_body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8BD44F" />
          <stop offset="40%" stopColor="#6BA82F" />
          <stop offset="100%" stopColor="#4A7A20" />
        </linearGradient>
        <linearGradient id="r3_snake_pat" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#558B2F" />
          <stop offset="50%" stopColor="#33691E" />
          <stop offset="100%" stopColor="#558B2F" />
        </linearGradient>
        <linearGradient id="r3_robin" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#795548" />
          <stop offset="100%" stopColor="#5D4037" />
        </linearGradient>
        <radialGradient id="r3_snow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(200,220,255,0.15)" />
          <stop offset="100%" stopColor="rgba(200,220,255,0)" />
        </radialGradient>
        <radialGradient id="r3_heat" cx="50%" cy="50%">
          <stop offset="0%" stopColor="rgba(255,150,50,0.2)" />
          <stop offset="100%" stopColor="rgba(255,150,50,0)" />
        </radialGradient>
      </defs>

      {/* Split backgrounds */}
      <rect x="0" y="0" width="120" height="160" fill="url(#r3_cold_bg)" />
      <rect x="120" y="0" width="120" height="160" fill="url(#r3_warm_bg)" />
      <rect x="118" y="0" width="4" height="160" fill="rgba(0,0,0,0.1)" />

      {/* Snowflake particles on cold side */}
      <g opacity="0.5" fill="white">
        <circle cx="15" cy="20" r="1.2" /><circle cx="45" cy="35" r="0.8" />
        <circle cx="80" cy="15" r="1" /><circle cx="30" cy="55" r="0.7" />
        <circle cx="95" cy="45" r="1.1" /><circle cx="55" cy="70" r="0.6" />
        <circle cx="10" cy="80" r="0.9" /><circle cx="70" cy="25" r="0.5" />
      </g>

      {/* Heat shimmer on warm side */}
      <circle cx="180" cy="30" r="30" fill="url(#r3_heat)" />

      {/* LEFT: SNAKE on cold rock */}
      <g transform="translate(15, 58)">
        {/* Rock */}
        <ellipse cx="40" cy="35" rx="35" ry="12" fill="#3949AB" opacity="0.4" />
        <ellipse cx="40" cy="35" rx="35" ry="12" fill="rgba(255,255,255,0.05)" />

        {/* Snake body - S curve with thickness variation */}
        <path d="M 5,8 Q 15,-5 25,0 Q 35,5 30,18 Q 25,28 15,25 Q 8,22 10,15" stroke="url(#r3_snake_body)" strokeWidth="5.5" fill="none" strokeLinecap="round" />
        {/* Diamond pattern on back */}
        <g fill="url(#r3_snake_pat)" opacity="0.5">
          <path d="M 8,5 L 10,3 L 12,5 L 10,7 Z" />
          <path d="M 16,-2 L 18,-4 L 20,-2 L 18,0 Z" />
          <path d="M 26,2 L 28,0 L 30,2 L 28,4 Z" />
          <path d="M 30,12 L 32,10 L 34,12 L 32,14 Z" />
          <path d="M 26,22 L 28,20 L 30,22 L 28,24 Z" />
        </g>
        {/* Belly stripe */}
        <path d="M 5,8 Q 15,-5 25,0 Q 35,5 30,18 Q 25,28 15,25" stroke="#C8E07F" strokeWidth="1.5" fill="none" opacity="0.3" />

        {/* Head */}
        <path d="M 5,8 Q 0,5 -2,8 Q -3,12 1,13 Q 4,12 5,8" fill="url(#r3_snake_body)" />
        {/* Eye - vertical slit */}
        <circle cx="0" cy="8" r="2" fill="#D4E060" />
        <ellipse cx="0" cy="8" rx="0.6" ry="1.6" fill="#1a1a0a" />
        <circle cx="0.5" cy="7.3" r="0.5" fill="white" opacity="0.8" />
        {/* Tongue */}
        <path d="M -2,11 L -5,13 M -2,11 L -4,14" stroke="#E84040" strokeWidth="0.7" strokeLinecap="round" fill="none" />
      </g>

      {/* LEFT: Thermometer showing LOW */}
      <g transform="translate(90, 20)">
        {/* Tube */}
        <rect x="-3" y="0" width="6" height="50" rx="3" fill="url(#r3_therm_tube)" />
        {/* Bulb */}
        <circle cx="0" cy="55" r="6" fill="url(#r3_therm_tube)" />
        {/* Mercury - LOW level (cold) */}
        <rect x="-1.5" y="30" width="3" height="20" rx="1.5" fill="url(#r3_merc_cold)" />
        <circle cx="0" cy="55" r="4" fill="url(#r3_merc_cold)" />
        {/* Scale marks */}
        <g stroke="rgba(0,0,0,0.2)" strokeWidth="0.5">
          <line x1="4" y1="8" x2="7" y2="8" /><line x1="4" y1="16" x2="7" y2="16" />
          <line x1="4" y1="24" x2="7" y2="24" /><line x1="4" y1="32" x2="7" y2="32" />
          <line x1="4" y1="40" x2="7" y2="40" />
        </g>
        {/* Snowflake near thermometer */}
        <g transform="translate(-15, 5)" stroke="#90CAF9" strokeWidth="0.8" opacity="0.6">
          <line x1="0" y1="-4" x2="0" y2="4" /><line x1="-3.5" y1="-2" x2="3.5" y2="2" /><line x1="-3.5" y1="2" x2="3.5" y2="-2" />
        </g>
      </g>

      {/* RIGHT: ROBIN on branch */}
      <g transform="translate(155, 55)">
        {/* Branch */}
        <path d="M -15,25 Q 0,22 15,25" stroke="#5D4037" strokeWidth="3" strokeLinecap="round" fill="none" />

        {/* Body */}
        <ellipse cx="0" cy="10" rx="10" ry="12" fill="url(#r3_robin)" />
        {/* Red breast */}
        <ellipse cx="2" cy="14" rx="6" ry="7" fill="#E53935" opacity="0.85" />
        {/* Wing */}
        <path d="M -6,6 Q -12,8 -14,14 Q -10,16 -6,14 Z" fill="#4E342E" />
        <path d="M -10,10 L -12,14" stroke="#3E2723" strokeWidth="0.5" opacity="0.4" />

        {/* Head */}
        <circle cx="3" cy="0" r="6" fill="url(#r3_robin)" />
        {/* Eye */}
        <circle cx="6" cy="-2" r="2" fill="#f0f9ff" />
        <circle cx="6" cy="-2" r="1.3" fill="#1a1a1a" />
        <circle cx="6.8" cy="-2.8" r="0.5" fill="white" opacity="0.85" />
        {/* Beak */}
        <path d="M 8,-1 L 13,-1 L 10,1 Z" fill="#FF8F00" />

        {/* Tail */}
        <path d="M -4,20 L -8,28" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M -2,20 L -4,27" stroke="#4E342E" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Heat waves around bird */}
        <g stroke="rgba(255,200,100,0.3)" strokeWidth="0.8" fill="none">
          <path d="M 14,5 Q 16,3 18,5" /><path d="M 16,0 Q 18,-2 20,0" />
          <path d="M -14,5 Q -16,3 -18,5" /><path d="M -16,0 Q -18,-2 -20,0" />
        </g>
      </g>

      {/* RIGHT: Thermometer showing HIGH */}
      <g transform="translate(220, 20)">
        <rect x="-3" y="0" width="6" height="50" rx="3" fill="url(#r3_therm_tube)" />
        <circle cx="0" cy="55" r="6" fill="url(#r3_therm_tube)" />
        {/* Mercury - HIGH level (warm) */}
        <rect x="-1.5" y="8" width="3" height="42" rx="1.5" fill="url(#r3_merc_warm)" />
        <circle cx="0" cy="55" r="4" fill="url(#r3_merc_warm)" />
        {/* Scale marks */}
        <g stroke="rgba(0,0,0,0.2)" strokeWidth="0.5">
          <line x1="4" y1="8" x2="7" y2="8" /><line x1="4" y1="16" x2="7" y2="16" />
          <line x1="4" y1="24" x2="7" y2="24" /><line x1="4" y1="32" x2="7" y2="32" />
          <line x1="4" y1="40" x2="7" y2="40" />
        </g>
        {/* Small sun near thermometer */}
        <circle cx="-12" cy="5" r="4" fill="#FFAB00" opacity="0.5" />
        <g stroke="#FFAB00" strokeWidth="0.6" opacity="0.4">
          <line x1="-12" y1="-1" x2="-12" y2="0" /><line x1="-12" y1="10" x2="-12" y2="11" />
          <line x1="-7" y1="5" x2="-6" y2="5" /><line x1="-18" y1="5" x2="-17" y2="5" />
        </g>
      </g>

      {/* Divider icon: VS */}
      <circle cx="120" cy="80" r="10" fill="rgba(0,0,0,0.3)" />
      <circle cx="120" cy="80" r="8" fill="rgba(255,255,255,0.1)" />

      {/* Ground on both sides */}
      <path d="M 0 145 Q 30 140 60 143 Q 90 146 120 145" fill="rgba(200,220,255,0.1)" />
      <path d="M 120 145 Q 150 140 180 143 Q 210 146 240 145 L 240 160 L 120 160 Z" fill="rgba(255,150,50,0.08)" />
    </svg>
  );
}

function SVG_R4(lang: string = "en"): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r4_bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3E2723" />
          <stop offset="40%" stopColor="#5D4037" />
          <stop offset="100%" stopColor="#6D4C41" />
        </linearGradient>
        <linearGradient id="r4_sand" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D7CCC8" />
          <stop offset="100%" stopColor="#BCAAA4" />
        </linearGradient>
        <linearGradient id="r4_reptile_egg" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#E0C8A0" />
          <stop offset="30%" stopColor="#D4B888" />
          <stop offset="60%" stopColor="#C9A86A" />
          <stop offset="100%" stopColor="#A89060" />
        </linearGradient>
        <radialGradient id="r4_reptile_hi" cx="30%" cy="25%">
          <stop offset="0%" stopColor="rgba(255,240,210,0.5)" />
          <stop offset="100%" stopColor="rgba(255,240,210,0)" />
        </radialGradient>
        <linearGradient id="r4_bird_egg" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E1" />
          <stop offset="30%" stopColor="#F5EED0" />
          <stop offset="60%" stopColor="#EDD5B5" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>
        <radialGradient id="r4_bird_hi" cx="30%" cy="20%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <linearGradient id="r4_hatch_egg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8D8B8" />
          <stop offset="100%" stopColor="#C9A961" />
        </linearGradient>
        <linearGradient id="r4_baby_body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A5D64F" />
          <stop offset="100%" stopColor="#6BAA30" />
        </linearGradient>
        <linearGradient id="r4_nest" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8D6E4A" />
          <stop offset="100%" stopColor="#6B5030" />
        </linearGradient>
        <radialGradient id="r4_spot_light" cx="50%" cy="30%">
          <stop offset="0%" stopColor="rgba(255,235,180,0.15)" />
          <stop offset="100%" stopColor="rgba(255,235,180,0)" />
        </radialGradient>
      </defs>

      {/* Background - earthy dark */}
      <rect width="240" height="160" fill="url(#r4_bg)" />

      {/* Subtle ground texture */}
      <path d="M 0 130 Q 60 125 120 128 Q 180 132 240 128 L 240 160 L 0 160 Z" fill="url(#r4_sand)" opacity="0.15" />

      {/* Spot lights */}
      <circle cx="60" cy="60" r="50" fill="url(#r4_spot_light)" />
      <circle cx="185" cy="55" r="50" fill="url(#r4_spot_light)" />

      {/* LEFT: REPTILE EGG - leathery, in sand nest */}
      <g transform="translate(60, 70)">
        {/* Sand nest */}
        <ellipse cx="0" cy="28" rx="30" ry="8" fill="#A0826D" opacity="0.4" />
        <ellipse cx="0" cy="26" rx="25" ry="6" fill="#B8956A" opacity="0.3" />

        {/* Shadow */}
        <ellipse cx="0" cy="24" rx="18" ry="5" fill="rgba(0,0,0,0.2)" />

        {/* Egg - leathery, slightly irregular shape */}
        <path d="M 0,-22 Q 14,-20 16,-4 Q 17,8 14,16 Q 8,24 0,24 Q -8,24 -14,16 Q -17,8 -16,-4 Q -14,-20 0,-22 Z" fill="url(#r4_reptile_egg)" />
        {/* Highlight */}
        <ellipse cx="-5" cy="-10" rx="7" ry="10" fill="url(#r4_reptile_hi)" />

        {/* Leathery wrinkle texture */}
        <g stroke="rgba(120,90,50,0.25)" strokeWidth="0.7" fill="none">
          <path d="M -7,-14 Q -5,-16 -3,-14" /><path d="M 2,-18 Q 4,-19 6,-17" />
          <path d="M -9,-2 Q -7,-4 -5,-2" /><path d="M 5,0 Q 7,2 9,0" />
          <path d="M -6,8 Q -4,10 -2,8" /><path d="M 3,12 Q 5,14 7,12" />
          <path d="M -4,18 Q -2,20 0,18" />
        </g>

        {/* Subtle dimples showing flexibility */}
        <circle cx="-3" cy="4" r="1.5" fill="rgba(0,0,0,0.06)" />
        <circle cx="5" cy="-6" r="1.2" fill="rgba(0,0,0,0.05)" />

        {/* Embryo silhouette inside (faint) */}
        <ellipse cx="1" cy="4" rx="7" ry="10" fill="rgba(0,0,0,0.08)" />

        {/* Small scale pattern faintly visible */}
        <g fill="rgba(100,80,40,0.08)">
          <circle cx="2" cy="0" r="2" /><circle cx="-3" cy="5" r="2" /><circle cx="4" cy="8" r="2" />
        </g>
      </g>

      {/* RIGHT: BIRD EGG - smooth hard shell, in nest */}
      <g transform="translate(185, 65)">
        {/* Woven nest */}
        <g transform="translate(0, 26)">
          <ellipse cx="0" cy="0" rx="28" ry="10" fill="url(#r4_nest)" opacity="0.5" />
          {/* Nest twigs */}
          <g stroke="#8D6E4A" strokeWidth="1" opacity="0.4" fill="none">
            <path d="M -22,2 Q -10,-3 5,-2 Q 15,0 24,3" />
            <path d="M -18,5 Q -5,0 10,1 Q 20,3 26,6" />
            <path d="M -20,-2 Q -8,-5 8,-4 Q 18,-2 22,0" />
          </g>
        </g>

        {/* Shadow */}
        <ellipse cx="0" cy="25" rx="16" ry="4" fill="rgba(0,0,0,0.18)" />

        {/* Egg - smooth ovoid with pointed top */}
        <path d="M 0,-22 Q 13,-18 15,-4 Q 16,8 12,17 Q 6,24 0,25 Q -6,24 -12,17 Q -16,8 -15,-4 Q -13,-18 0,-22 Z" fill="url(#r4_bird_egg)" stroke="rgba(180,160,130,0.3)" strokeWidth="0.5" />
        {/* Bright smooth highlight */}
        <ellipse cx="-4" cy="-12" rx="5" ry="8" fill="url(#r4_bird_hi)" />
        {/* Secondary highlight */}
        <ellipse cx="3" cy="-4" rx="2" ry="4" fill="rgba(255,255,255,0.15)" />

        {/* Speckle pattern */}
        <g fill="rgba(128,100,70,0.3)">
          <circle cx="-3" cy="2" r="0.7" /><circle cx="4" cy="-5" r="0.5" /><circle cx="2" cy="8" r="0.6" />
          <circle cx="-5" cy="10" r="0.4" /><circle cx="6" cy="3" r="0.5" /><circle cx="-1" cy="14" r="0.6" />
          <circle cx="3" cy="16" r="0.4" /><circle cx="-6" cy="-8" r="0.3" /><circle cx="7" cy="10" r="0.35" />
        </g>
      </g>

      {/* CENTER BOTTOM: HATCHING EGG */}
      <g transform="translate(120, 122)">
        {/* Shadow */}
        <ellipse cx="0" cy="22" rx="18" ry="4" fill="rgba(0,0,0,0.15)" />

        {/* Lower shell half */}
        <path d="M -12,0 Q -14,10 -10,18 Q -4,24 0,24 Q 4,24 10,18 Q 14,10 12,0 Z" fill="url(#r4_hatch_egg)" stroke="#A89060" strokeWidth="0.6" />

        {/* Upper shell - cracked open pieces */}
        <path d="M -10,-2 Q -12,-10 -8,-16 Q -4,-18 -2,-14 L -6,-4 Z" fill="url(#r4_hatch_egg)" stroke="#A89060" strokeWidth="0.5" />
        <path d="M 10,-2 Q 12,-10 8,-16 Q 4,-18 2,-14 L 6,-4 Z" fill="url(#r4_hatch_egg)" stroke="#A89060" strokeWidth="0.5" />
        {/* Shell fragment flying */}
        <path d="M -14,-12 L -16,-16 L -12,-15 Z" fill="url(#r4_hatch_egg)" opacity="0.6" />
        <path d="M 13,-14 L 16,-17 L 14,-12 Z" fill="url(#r4_hatch_egg)" opacity="0.6" />

        {/* Crack lines */}
        <path d="M -6,-4 Q -3,0 -4,4" stroke="#8B7355" strokeWidth="0.8" fill="none" />
        <path d="M 6,-4 Q 3,0 4,4" stroke="#8B7355" strokeWidth="0.8" fill="none" />

        {/* Baby reptile peeking out */}
        <circle cx="0" cy="-4" r="5" fill="url(#r4_baby_body)" />
        {/* Baby head highlight */}
        <circle cx="-1" cy="-6" r="2" fill="rgba(255,255,255,0.1)" />
        {/* Eye - big and cute */}
        <circle cx="2" cy="-5" r="2.2" fill="#D4E060" />
        <ellipse cx="2" cy="-5" rx="0.7" ry="1.8" fill="#1a1a0a" />
        <circle cx="2.8" cy="-6" r="0.6" fill="white" opacity="0.9" />
        {/* Second eye */}
        <circle cx="-2" cy="-5" r="1.8" fill="#D4E060" />
        <ellipse cx="-2" cy="-5" rx="0.5" ry="1.4" fill="#1a1a0a" />
        <circle cx="-1.4" cy="-6" r="0.5" fill="white" opacity="0.8" />
        {/* Tiny nostril */}
        <circle cx="0" cy="-2.5" r="0.4" fill="rgba(0,0,0,0.3)" />
        {/* Tiny claw gripping shell */}
        <path d="M -5,0 L -7,-1 M -5,0 L -6,2" stroke="#6BAA30" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      </g>

      {/* Decorative feather fragment on right side */}
      <g transform="translate(225, 140)" opacity="0.3">
        <path d="M 0,0 Q 2,-8 0,-16" stroke="#8B6340" strokeWidth="1" fill="none" />
        <path d="M 0,-16 Q 3,-12 4,-14 M 0,-16 Q -3,-12 -4,-14" stroke="#8B6340" strokeWidth="0.5" fill="none" />
      </g>

      {/* Decorative scale pattern on left */}
      <g transform="translate(8, 140)" opacity="0.2">
        <path d="M 0,0 Q 2,-2 4,0 Q 6,-2 8,0" stroke="#A89060" strokeWidth="0.8" fill="none" />
        <path d="M 2,3 Q 4,1 6,3 Q 8,1 10,3" stroke="#A89060" strokeWidth="0.8" fill="none" />
      </g>
    </svg>
  );
}

function SVG_R5(lang: string = "en"): React.ReactNode {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-h-40">
      <defs>
        <linearGradient id="r5_bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a2a1a" />
          <stop offset="50%" stopColor="#1B3D1B" />
          <stop offset="100%" stopColor="#2a1a1a" />
        </linearGradient>
        <linearGradient id="r5_card_left" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#558B2F" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <linearGradient id="r5_card_right" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E65100" />
          <stop offset="100%" stopColor="#BF360C" />
        </linearGradient>
        <linearGradient id="r5_lizard" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8FD44F" />
          <stop offset="50%" stopColor="#6BA82F" />
          <stop offset="100%" stopColor="#4A7A20" />
        </linearGradient>
        <linearGradient id="r5_eagle" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B6340" />
          <stop offset="100%" stopColor="#5D3E1F" />
        </linearGradient>
        <linearGradient id="r5_eagle_head" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5F0DC" />
          <stop offset="100%" stopColor="#E0D8C0" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="240" height="160" fill="url(#r5_bg)" />

      {/* Subtle pattern overlay */}
      <g opacity="0.03" fill="white">
        <circle cx="30" cy="30" r="40" /><circle cx="210" cy="130" r="35" />
      </g>

      {/* LEFT CARD - REPTILES */}
      <rect x="8" y="8" width="108" height="144" rx="12" fill="url(#r5_card_left)" opacity="0.9" />
      <rect x="8" y="8" width="108" height="144" rx="12" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      {/* Card top shine */}
      <rect x="8" y="8" width="108" height="25" rx="12" fill="rgba(255,255,255,0.08)" />

      {/* Detailed lizard */}
      <g transform="translate(30, 55)">
        <ellipse cx="22" cy="18" rx="28" ry="4" fill="rgba(0,0,0,0.1)" />
        {/* Tail */}
        <path d="M 45,2 Q 55,-2 62,-6 Q 66,-8 68,-5" stroke="#4A7A20" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Body */}
        <path d="M 6,2 Q 16,-4 30,-2 Q 42,0 48,6 Q 46,12 36,14 Q 22,16 10,13 Q 6,10 6,2" fill="url(#r5_lizard)" />
        {/* Belly */}
        <path d="M 10,8 Q 22,6 36,8 Q 44,10 48,11" stroke="#C8E07F" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round" />
        {/* Scales */}
        <g stroke="#4A7A20" strokeWidth="0.5" fill="none" opacity="0.4">
          <path d="M 12,2 Q 13,0.5 14,2" /><path d="M 18,0 Q 19,-1.5 20,0" />
          <path d="M 24,-1 Q 25,-2.5 26,-1" /><path d="M 30,0 Q 31,-1.5 32,0" />
          <path d="M 36,1 Q 37,-0.5 38,1" /><path d="M 42,3 Q 43,1.5 44,3" />
        </g>
        {/* Legs */}
        <path d="M 10,11 L 6,17 M 6,17 L 4,16 M 6,17 L 8,19" stroke="#4A7A20" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M 18,13 L 14,19 M 14,19 L 12,18 M 14,19 L 16,21" stroke="#4A7A20" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M 34,13 L 38,19" stroke="#4A7A20" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M 42,11 L 46,17" stroke="#4A7A20" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Head */}
        <path d="M 6,2 Q 1,-1 -2,2 Q -4,5 -2,8 Q 1,10 6,8 Z" fill="url(#r5_lizard)" />
        {/* Eye */}
        <circle cx="-1" cy="3" r="2.2" fill="#D4E060" />
        <ellipse cx="-1" cy="3" rx="0.6" ry="1.7" fill="#1a1a0a" />
        <circle cx="0" cy="2.2" r="0.6" fill="white" opacity="0.8" />
        {/* Tongue */}
        <path d="M -4,5 L -7,4 M -4,5 L -7,7" stroke="#E84040" strokeWidth="0.6" strokeLinecap="round" fill="none" />
      </g>

      {/* Reptile feature icons */}
      <g transform="translate(18, 96)">
        {/* Scale icon */}
        <g transform="translate(0, 0)">
          <circle cx="5" cy="5" r="5" fill="rgba(255,255,255,0.12)" />
          <path d="M 3,3 Q 5,1 7,3 Q 9,1 11,3" stroke="#C8E07F" strokeWidth="0.8" fill="none" />
          <path d="M 2,6 Q 4,4 6,6 Q 8,4 10,6" stroke="#C8E07F" strokeWidth="0.8" fill="none" />
        </g>
        {/* Thermometer icon (cold) */}
        <g transform="translate(0, 18)">
          <circle cx="5" cy="5" r="5" fill="rgba(255,255,255,0.12)" />
          <rect x="4" y="1" width="2" height="6" rx="1" fill="#64B5F6" />
          <circle cx="5" cy="7.5" r="1.5" fill="#64B5F6" />
        </g>
        {/* Egg icon */}
        <g transform="translate(0, 36)">
          <circle cx="5" cy="5" r="5" fill="rgba(255,255,255,0.12)" />
          <ellipse cx="5" cy="5" rx="2.5" ry="3.5" fill="#D4B888" />
          <ellipse cx="4" cy="3.5" rx="1" ry="1.5" fill="rgba(255,255,255,0.2)" />
        </g>
      </g>

      {/* RIGHT CARD - BIRDS */}
      <rect x="124" y="8" width="108" height="144" rx="12" fill="url(#r5_card_right)" opacity="0.9" />
      <rect x="124" y="8" width="108" height="144" rx="12" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <rect x="124" y="8" width="108" height="25" rx="12" fill="rgba(255,255,255,0.08)" />

      {/* Detailed eagle */}
      <g transform="translate(155, 48)">
        <ellipse cx="5" cy="28" rx="18" ry="3" fill="rgba(0,0,0,0.1)" />
        {/* Tail feathers */}
        <path d="M -4,14 L -8,22" stroke="#5D3E1F" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M 0,14 L -2,23" stroke="#6D4C2A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M 4,14 L 4,22" stroke="#5D3E1F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        {/* Body */}
        <ellipse cx="0" cy="2" rx="12" ry="11" fill="url(#r5_eagle)" />
        {/* Breast lighter */}
        <ellipse cx="1" cy="5" rx="6" ry="6" fill="#B08050" opacity="0.4" />
        {/* Wings */}
        <path d="M -10,-2 Q -18,-6 -22,-3 Q -18,0 -10,2" fill="#4A3018" />
        <path d="M 10,-2 Q 18,-6 22,-3 Q 18,0 10,2" fill="#4A3018" />
        {/* Feather strokes on wings */}
        <g stroke="#3E2510" strokeWidth="0.6" opacity="0.5">
          <path d="M -16,-5 L -17,-8" /><path d="M -12,-5 L -13,-8" />
          <path d="M 16,-5 L 17,-8" /><path d="M 12,-5 L 13,-8" />
        </g>
        {/* Head - white */}
        <circle cx="3" cy="-8" r="6" fill="url(#r5_eagle_head)" />
        {/* Beak */}
        <path d="M 8,-8 Q 12,-7 14,-8 Q 15,-10 13,-10 L 8,-9 Z" fill="#FFB300" />
        <path d="M 8,-9 L 13,-10 Q 15,-10 14,-8 L 12,-9 Z" fill="#E6A200" />
        {/* Eye */}
        <circle cx="6" cy="-9.5" r="2" fill="#FFFDE0" />
        <circle cx="6" cy="-9.5" r="1.3" fill="#D4A017" />
        <circle cx="6" cy="-9.5" r="0.7" fill="#1a1a00" />
        <circle cx="6.8" cy="-10.2" r="0.5" fill="white" opacity="0.9" />
        {/* Talons */}
        <g stroke="#E6A200" strokeWidth="1" strokeLinecap="round" fill="none">
          <path d="M -2,13 L -3,17" /><path d="M 2,13 L 2,17" /><path d="M 5,13 L 6,17" />
        </g>
      </g>

      {/* Bird feature icons */}
      <g transform="translate(134, 96)">
        {/* Feather icon */}
        <g transform="translate(0, 0)">
          <circle cx="5" cy="5" r="5" fill="rgba(255,255,255,0.12)" />
          <path d="M 5,1 Q 7,3 5,8 Q 3,3 5,1 Z" fill="#FFAB40" opacity="0.8" />
          <line x1="5" y1="1" x2="5" y2="8" stroke="rgba(0,0,0,0.2)" strokeWidth="0.3" />
        </g>
        {/* Thermometer icon (warm) */}
        <g transform="translate(0, 18)">
          <circle cx="5" cy="5" r="5" fill="rgba(255,255,255,0.12)" />
          <rect x="4" y="1" width="2" height="6" rx="1" fill="#FF5252" />
          <circle cx="5" cy="7.5" r="1.5" fill="#FF5252" />
        </g>
        {/* Hard egg icon */}
        <g transform="translate(0, 36)">
          <circle cx="5" cy="5" r="5" fill="rgba(255,255,255,0.12)" />
          <ellipse cx="5" cy="5" rx="2.5" ry="3.5" fill="#FFF8E1" stroke="rgba(180,160,130,0.4)" strokeWidth="0.4" />
          <ellipse cx="4" cy="3.5" rx="1" ry="1.5" fill="rgba(255,255,255,0.4)" />
        </g>
      </g>

      {/* Center: shared trait - eggs (connected) */}
      <g transform="translate(116, 75)">
        <circle cx="4" cy="0" r="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
        <ellipse cx="4" cy="0" rx="1.5" ry="2.2" fill="rgba(255,255,255,0.15)" />
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
