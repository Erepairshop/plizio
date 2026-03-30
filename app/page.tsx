"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Crosshair, Zap, Brain, Mountain, Trophy, Layers, Star, User, BookOpen, Car, Search, Hash, Shuffle, Crown, Calculator, Swords, PenLine, Puzzle, Lightbulb, Merge, Grid3x3, Navigation, Home as HomeIcon, Medal, CircleDot, Rocket, Languages, Microscope, Leaf, type LucideIcon } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import IslandMap, { type Island, type IslandGame } from "@/components/IslandMap";
import { getCards } from "@/lib/cards";
import { getSpecialCardCount, markAsReferred, isReferred, claimReferralReward } from "@/lib/specialCards";
import { getStats } from "@/lib/milestones";
import { claimDailyReward, awardPendingDailyStars, type DailyRewardResult } from "@/lib/dailyReward";
import { getUser, onAuthChange } from "@/lib/auth";
import { syncToSupabase } from "@/lib/sync";
import AuthModal from "@/components/AuthModal";
import UsernameModal from "@/components/UsernameModal";
import { getUsername, hasUsername } from "@/lib/username";
import { useLang } from "@/components/LanguageProvider";
import { getGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";

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
      "BRAIN": "LEARN",
      "LOGIC": "LOGIC",
      "SPORT": "SPORT",
    },
    games: {
      quickpick: "Quick Pick",
      reflexrush: "Reflex Rush",
      memoryflash: "Memory Flash",
      spotdiff: "Spot Diff",
      numberrush: "Number Rush",
      wordscramble: "Word Scramble",
      milliomos: "Millionaire",
      kodex: "Codex",
      skyclimb: "Sky Climb",
      citydrive: "City Drive",
      astromath: "AstroMath",
      astrodeutsch: "AstroGerman",
      astroenglish: "AstroEnglish",
      astromagyar: "AstroHungarian",
      "astro-sachkunde": "AstroGeneral Knowledge",
      mathtest: "Math Test",
      deutschtest: "German Test",
      englishtest: "English Test",
      magyarteszt: "Hungarian Test",
      romaniantest: "Romanian Test",
      sachkundetest: "General Knowledge Test",
      biologietest: "Biology Test",
      "astro-biologie": "AstroBiology",
      "astro-physik": "AstroPhysics",
      astrokemia: "AstroChemistry",
      physiktest: "Physics Test",
      kemiatest: "Chemistry Test",
      astroromana: "AstroRomanian",
      racetrack: "Racetrack",
      sequencerush: "Sequence Rush",
      wordhunt: "Word Hunt",
      numberpath: "Number Path",
      minisudoku: "Mini Sudoku",
      lightout: "Lights Out",
      numbermerge: "Number Merge",
      nonogram: "Nonogram",
      mazerush: "Maze Rush",
      pliziolife: "Plizio Life",
      pingpong: "Table Tennis",
      airhockey: "Air Hockey",
      tennis: "Tennis",
      squash: "Squash",
    },
    ui: {
      comingSoon: "COMING SOON",
    },
  },
  hu: {
    categories: {
      "QUIZ & REFLEX": "KVÍZ, REFLEX & SZÓ",
      "ADVENTURE": "KALAND",
      "BRAIN": "TANULÁS",
      "LOGIC": "LOGIKA",
      "SPORT": "SPORT",
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
      astromath: "AstroMath",
      astrodeutsch: "AstroNémet",
      astroenglish: "AstroAngol",
      astromagyar: "AstroMagyar",
      "astro-sachkunde": "AstroKörnyezetismeret",
      mathtest: "Matematika Teszt",
      deutschtest: "Német Teszt",
      englishtest: "Angol Teszt",
      magyarteszt: "Magyar Teszt",
      romaniantest: "Román Teszt",
      sachkundetest: "Környezetismeret Teszt",
      biologietest: "Biológia Teszt",
      "astro-biologie": "AstroBiológia",
      "astro-physik": "AstroFizika",
      astrokemia: "AstroKémia",
      physiktest: "Fizika Teszt",
      kemiatest: "Kémia Teszt",
      astroromana: "AstroRomán",
      racetrack: "Pályaverseny",
      sequencerush: "Szekvencia Roham",
      wordhunt: "Szóvadász",
      numberpath: "Számút",
      minisudoku: "Mini Sudoku",
      lightout: "Lámpaoltás",
      numbermerge: "Számösszevonás",
      nonogram: "Nonogram",
      mazerush: "Labirintus Roham",
      pliziolife: "Plizio Élet",
      pingpong: "Asztalitenisz",
      airhockey: "Léghoki",
      tennis: "Tenisz",
      squash: "Squash",
    },
    ui: {
      comingSoon: "HAMAROSAN",
    },
  },
  de: {
    categories: {
      "QUIZ & REFLEX": "QUIZ, REFLEX & WORT",
      "ADVENTURE": "ABENTEUER",
      "BRAIN": "LERNEN",
      "LOGIC": "LOGIK",
      "SPORT": "SPORT",
    },
    games: {
      quickpick: "Schnelle Wahl",
      reflexrush: "Reflex Rush",
      memoryflash: "Speicherblitz",
      spotdiff: "Unterschied Erkennen",
      numberrush: "Zahlenrausch",
      wordscramble: "Buchstabensalat",
      milliomos: "Millionär",
      kodex: "Codex",
      skyclimb: "Himmelsklettern",
      citydrive: "Stadtfahrt",
      astromath: "AstroMath",
      astrodeutsch: "AstroDeutsch",
      astroenglish: "AstroEnglisch",
      astromagyar: "AstroUngarisch",
      "astro-sachkunde": "AstroSachkunde",
      mathtest: "Mathematiktest",
      deutschtest: "Deutsch-Test",
      englishtest: "Englisch-Test",
      magyarteszt: "Ungarisch-Test",
      romaniantest: "Rumänisch-Test",
      sachkundetest: "Sachkunde-Test",
      biologietest: "Biologie-Test",
      "astro-biologie": "AstroBiologie",
      "astro-physik": "AstroPhysik",
      astrokemia: "AstroChemie",
      physiktest: "Physik-Test",
      kemiatest: "Chemie-Test",
      astroromana: "AstroRumänisch",
      racetrack: "Rennstrecke",
      sequencerush: "Sequenz Rush",
      wordhunt: "Wortjagd",
      numberpath: "Zahlenpfad",
      minisudoku: "Mini Sudoku",
      lightout: "Licht Aus",
      numbermerge: "Zahlenfusion",
      nonogram: "Nonogramm",
      mazerush: "Labyrinth-Rausch",
      pliziolife: "Plizio-Leben",
      pingpong: "Tischtennis",
      airhockey: "Air Hockey",
      tennis: "Tennis",
      squash: "Squash",
    },
    ui: {
      comingSoon: "BALD VERFÜGBAR",
    },
  },
  ro: {
    categories: {
      "QUIZ & REFLEX": "QUIZ, REFLEX & CUVÂNT",
      "ADVENTURE": "AVENTURĂ",
      "BRAIN": "ÎNVĂȚARE",
      "LOGIC": "LOGICĂ",
      "SPORT": "SPORT",
    },
    games: {
      quickpick: "Alegere Rapidă",
      reflexrush: "Reflex Rush",
      memoryflash: "Fulger de Memorie",
      spotdiff: "Găsește Diferența",
      numberrush: "Goană Numerică",
      wordscramble: "Litere Amestecate",
      milliomos: "Milionar",
      kodex: "Codex",
      skyclimb: "Cățărare pe Cer",
      citydrive: "Conducere în Oraș",
      astromath: "AstroMath",
      astrodeutsch: "AstroGermană",
      astroenglish: "AstroEngleză",
      astromagyar: "AstroMaghiară",
      "astro-sachkunde": "AstroCunoaștere generală",
      mathtest: "Test de Matematică",
      deutschtest: "Test de Germană",
      englishtest: "Test de Engleză",
      magyarteszt: "Test de maghiară",
      romaniantest: "Test de Română",
      sachkundetest: "Test de cunoaștere generală",
      biologietest: "Test de biologie",
      "astro-biologie": "AstroBiologie",
      "astro-physik": "AstroFizică",
      astrokemia: "AstroChimie",
      physiktest: "Test de Fizică",
      kemiatest: "Test de Chimie",
      astroromana: "AstroRomână",
      racetrack: "Circuit de curse",
      sequencerush: "Sequence Rush",
      wordhunt: "Vânătoare de Cuvinte",
      numberpath: "Calea Numerelor",
      minisudoku: "Mini Sudoku",
      lightout: "Stinge Lumina",
      numbermerge: "Fuziune Numerică",
      nonogram: "Nonogramă",
      mazerush: "Fuga din Labirint",
      pliziolife: "Viața Plizio",
      pingpong: "Tenis de masă",
      airhockey: "Air Hockey",
      tennis: "Tenis",
      squash: "Squash",
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
      // {
      //   id: "pliziolife",
      //   icon: HomeIcon,
      //   nameKey: "pliziolife",
      //   color: "#FF2D78",
      //   gradient: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
      // },
    ],
  },
  {
    id: "brain",
    icon: BookOpen,
    color: "#4ECDC4",
    games: [
      // Paired layout: left = Astro game, right = Test counterpart (grid-cols-2)
      {
        id: "astromath",
        icon: Rocket,
        nameKey: "astromath",
        color: "#B44DFF",
        gradient: "bg-gradient-to-br from-purple-500/20 to-violet-500/20",
      },
      {
        id: "mathtest",
        icon: Calculator,
        nameKey: "mathtest",
        color: "#FFD700",
        gradient: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      },
      {
        id: "astrodeutsch",
        icon: BookOpen,
        nameKey: "astrodeutsch",
        color: "#00D4FF",
        gradient: "bg-gradient-to-br from-cyan-500/20 to-teal-500/20",
        langOnly: "de",
      },
      {
        id: "deutschtest",
        icon: PenLine,
        nameKey: "deutschtest",
        color: "#00D4FF",
        gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
        langOnly: "de",
      },
      {
        id: "astroenglish",
        icon: Languages,
        nameKey: "astroenglish",
        color: "#3B82F6",
        gradient: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
        langOnly: "en",
      },
      {
        id: "englishtest",
        icon: PenLine,
        nameKey: "englishtest",
        color: "#3B82F6",
        gradient: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
        langOnly: "en",
      },
      {
        id: "astromagyar",
        icon: Languages,
        nameKey: "astromagyar",
        color: "#FF2D78",
        gradient: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
        langOnly: "hu",
      },
      {
        id: "magyarteszt",
        icon: BookOpen,
        nameKey: "magyarteszt",
        color: "#FF2D78",
        gradient: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
        langOnly: "hu",
      },
      {
        id: "astro-sachkunde",
        icon: Search,
        nameKey: "astro-sachkunde",
        color: "#10B981",
        gradient: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
        langOnly: "de",
      },
      {
        id: "sachkundetest",
        icon: Search,
        nameKey: "sachkundetest",
        color: "#4CAF50",
        gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
        langOnly: "de",
      },
      {
        id: "astroromana",
        icon: BookOpen,
        nameKey: "astroromana",
        color: "#E879F9",
        gradient: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
        langOnly: "ro",
      },
      {
        id: "romaniantest",
        icon: PenLine,
        nameKey: "romaniantest",
        color: "#3B82F6",
        gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
        langOnly: "ro",
      },
      {
        id: "astro-biologie",
        icon: Leaf,
        nameKey: "astro-biologie",
        color: "#10B981",
        gradient: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
      },
      {
        id: "biologietest",
        icon: Microscope,
        nameKey: "biologietest",
        color: "#4CAF50",
        gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      },
      {
        id: "astro-physik",
        icon: Rocket,
        nameKey: "astro-physik",
        color: "#38BDF8",
        gradient: "bg-gradient-to-br from-sky-500/20 to-blue-500/20",
      },
      {
        id: "physiktest",
        icon: Microscope,
        nameKey: "physiktest",
        color: "#60A5FA",
        gradient: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
      },
      {
        id: "astrokemia",
        icon: Rocket,
        nameKey: "astrokemia",
        color: "#10B981",
        gradient: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      },
      {
        id: "kemiatest",
        icon: Microscope,
        nameKey: "kemiatest",
        color: "#34D399",
        gradient: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
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
      {
        id: "lightout",
        icon: Lightbulb,
        nameKey: "lightout",
        color: "#FFD700",
        gradient: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      },
      {
        id: "numbermerge",
        icon: Merge,
        nameKey: "numbermerge",
        color: "#FF2D78",
        gradient: "bg-gradient-to-br from-pink-500/20 to-red-500/20",
      },
      {
        id: "nonogram",
        icon: Grid3x3,
        nameKey: "nonogram",
        color: "#B44DFF",
        gradient: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20",
      },
      {
        id: "mazerush",
        icon: Navigation,
        nameKey: "mazerush",
        color: "#00D4FF",
        gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      },
    ],
  },
  {
    id: "sport",
    icon: Medal,
    color: "#FF6B00",
    games: [
      {
        id: "pingpong",
        icon: CircleDot,
        nameKey: "pingpong",
        color: "#00FF88",
        gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      },
      {
        id: "airhockey",
        icon: CircleDot,
        nameKey: "airhockey",
        color: "#00D4FF",
        gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      },
      {
        id: "tennis",
        icon: CircleDot,
        nameKey: "tennis",
        color: "#FFD700",
        gradient: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
      },
      {
        id: "squash",
        icon: Swords,
        nameKey: "squash",
        color: "#FF2D78",
        gradient: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
      },
    ],
  },
];

/* Planet positions in the 500x900 viewBox — optimized for mobile */
const ISLAND_POSITIONS: Record<string, { cx: number; cy: number; color: string; glow: string }> = {
  quizreflex: { cx: 155, cy: 250, color: "#00D4FF", glow: "rgba(0,212,255,0.4)" },
  adventure:  { cx: 365, cy: 320, color: "#00FF88", glow: "rgba(0,255,136,0.4)" },
  brain:      { cx: 145, cy: 450, color: "#4ECDC4", glow: "rgba(78,205,196,0.4)" },
  logic:      { cx: 355, cy: 530, color: "#B44DFF", glow: "rgba(180,77,255,0.4)" },
  sport:      { cx: 250, cy: 650, color: "#FF6B00", glow: "rgba(255,107,0,0.4)" },
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

  const categoryKeys: Array<"quizreflex" | "adventure" | "brain" | "logic" | "sport"> = ["quizreflex", "adventure", "brain", "logic", "sport"];
  const categoryLabels: Record<"quizreflex" | "adventure" | "brain" | "logic" | "sport", keyof typeof t.categories> = {
    quizreflex: "QUIZ & REFLEX",
    adventure: "ADVENTURE",
    brain: "BRAIN",
    logic: "LOGIC",
    sport: "SPORT",
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

const GAME_TO_CATEGORY: Record<string, string> = {
  quickpick: "quizreflex", reflexrush: "quizreflex", memoryflash: "quizreflex",
  spotdiff: "quizreflex", numberrush: "quizreflex", wordscramble: "quizreflex",
  sequencerush: "quizreflex", wordhunt: "quizreflex", milliomos: "quizreflex",
  kodex: "quizreflex",
  skyclimb: "adventure", citydrive: "adventure", racetrack: "adventure", pliziolife: "adventure",
  astromath: "brain", astrodeutsch: "brain", astroenglish: "brain", astromagyar: "brain", astroromana: "brain", "astro-sachkunde": "brain", "astro-biologie": "brain", "astro-physik": "brain", astrokemia: "brain", mathtest: "brain", deutschtest: "brain", englishtest: "brain", magyarteszt: "brain", romaniantest: "brain", sachkundetest: "brain", biologietest: "brain", physiktest: "brain", kemiatest: "brain",
  numberpath: "logic", minisudoku: "logic", lightout: "logic", numbermerge: "logic", nonogram: "logic", mazerush: "logic",
  pingpong: "sport", airhockey: "sport", tennis: "sport",
};

function getLastPlayedCategory(): string | null {
  if (typeof window === "undefined") return null;
  const cards = getCards();
  if (cards.length === 0) return null;
  // Find the most recent card by date
  const sorted = [...cards].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const lastGame = sorted[0]?.game;
  return lastGame ? (GAME_TO_CATEGORY[lastGame] ?? null) : null;
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
  const [dailyReward, setDailyReward] = useState<DailyRewardResult | null>(null);
  const [lastCategory, setLastCategory] = useState<string | null>(null);

  // Avatar data for map marker
  const [gender] = useState<AvatarGender>(getGender());
  const [activeSkin] = useState(getSkinDef(getActiveSkin()));
  const [activeFace] = useState(getFaceDef(getActiveFace()));
  const [activeTop] = useState(() => { const id = getActive("top"); return id ? getTopDef(id) : null; });
  const [activeBottom] = useState(() => { const id = getActive("bottom"); return id ? getBottomDef(id) : null; });
  const [activeShoe] = useState(() => { const id = getActive("shoe"); return id ? getShoeDef(id) : null; });
  const [activeCape] = useState(() => { const id = getActive("cape"); return id ? getCapeDef(id) : null; });
  const [activeGlasses] = useState(() => { const id = getActive("glasses"); return id ? getGlassesDef(id) : null; });
  const [activeGloves] = useState(() => { const id = getActive("gloves"); return id ? getGloveDef(id) : null; });
  const [activeHat] = useState(() => { const id = getActiveHat(); return id ? getHatDef(id) : null; });
  const [activeTrail] = useState(() => { const id = getActiveTrail(); return id ? getTrailDef(id) : null; });

  useEffect(() => {
    setCategories(getCategoriesWithTranslations(lang));
  }, [lang]);

  useEffect(() => {
    setStreak(getStreak());
    setCardCount(getCards().length);
    setSpecialCount(getSpecialCardCount());
    setLastCategory(getLastPlayedCategory());

    // Daily login reward
    const reward = claimDailyReward();
    if (reward && !reward.alreadyClaimed) {
      setSpecialCount(getSpecialCardCount());
      setDailyReward(reward);
    }
    // Check username — csak akkor kérdezzük, ha már játszott legalább 1 játékot
    if (!hasUsername()) {
      const stats = getStats();
      if (stats.totalGames > 0) {
        setShowUsernameModal(true);
      }
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

    // Check auth — only show registration popup once (after 5 games, never again after dismiss)
    const checkAuth = async () => {
      const user = await getUser();
      setIsLoggedIn(!!user);
      if (user) syncToSupabase(user.id).then(() => {
        setCardCount(getCards().length);
        setSpecialCount(getSpecialCardCount());
        window.dispatchEvent(new Event("plizio-cards-changed"));
      }).catch((err) => console.error("Sync error:", err));
      // Never auto-show auth modal again after dismissed or registered
      if (!user) {
        const stats = getStats();
        const dismissed = localStorage.getItem("plizio_auth_dismissed");
        const registered = localStorage.getItem("plizio_registered");
        if (stats.totalGames >= 5 && !dismissed && !registered) {
          // Only show once per session (sessionStorage prevents repeat on same tab)
          const shownThisSession = sessionStorage.getItem("plizio_auth_shown");
          if (!shownThisSession) {
            sessionStorage.setItem("plizio_auth_shown", "1");
            setShowAuth(true);
          }
        }
      }
    };
    checkAuth();

    const { data: { subscription } } = onAuthChange((user) => {
      setIsLoggedIn(!!user);
      if (user) syncToSupabase(user.id).then(() => {
        setCardCount(getCards().length);
        setSpecialCount(getSpecialCardCount());
        window.dispatchEvent(new Event("plizio-cards-changed"));
      }).catch((err) => console.error("Sync error:", err));
    });

    // Refresh card + star badge whenever cards change (earn / exchange)
    const refreshCounts = () => {
      setCardCount(getCards().length);
      setSpecialCount(getSpecialCardCount());
    };
    const onVisible = () => { if (document.visibilityState === "visible") { refreshCounts(); setLastCategory(getLastPlayedCategory()); } };
    window.addEventListener("plizio-cards-changed", refreshCounts);
    document.addEventListener("visibilitychange", onVisible);

    // Award pending daily stars after the first game of the day
    const onGamePlayed = () => {
      const awarded = awardPendingDailyStars();
      if (awarded > 0) setSpecialCount(getSpecialCardCount());
    };
    window.addEventListener("plizio-game-played", onGamePlayed);

    return () => {
      subscription.unsubscribe();
      window.removeEventListener("plizio-cards-changed", refreshCounts);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("plizio-game-played", onGamePlayed);
    };
  }, []);

  return (
    <main className="fixed inset-0 overflow-hidden">
      {/* Fullscreen Island Map */}
      <IslandMap
        islands={categoriesToIslands(categories)}
        username={username}
        streak={streak}
        specialCount={specialCount}
        cardCount={cardCount}
        lastPlayedCategory={lastCategory}
        avatarProps={{
          gender,
          activeSkin,
          activeFace,
          activeTop,
          activeBottom,
          activeShoe,
          activeCape,
          activeGlasses,
          activeGloves,
          activeHat,
          activeTrail,
        }}
      />

      {/* Top bar — nav buttons right, language switcher left */}
      <div className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-3 py-2.5 pointer-events-none">
        {/* Language switcher — left */}
        <motion.div
          className="pointer-events-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <LanguageSwitcher />
        </motion.div>

        {/* Nav buttons — right */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {([
            { href: "/multiplayer", icon: Swords, color: "#FF2D78", border: "border-neon-pink/20", glow: "0 0 12px rgba(255,45,120,0.2)", delay: 0.45 },
            { href: "/profile", icon: User, color: isLoggedIn ? "#00FF88" : "rgba(255,255,255,0.4)", border: isLoggedIn ? "border-neon-green/20" : "border-white/10", glow: isLoggedIn ? "0 0 12px rgba(0,255,136,0.15)" : undefined, delay: 0.5 },
            // { href: "/room", icon: HomeIcon, color: "#00D4FF", border: "border-neon-blue/20", glow: "0 0 12px rgba(0,212,255,0.15)", delay: 0.6 },
            { href: "/shop", icon: Star, color: "#E040FB", border: "border-[#E040FB]/20", glow: "0 0 12px rgba(224,64,251,0.2)", delay: 0.7 },
            { href: "/collection", icon: Trophy, color: "#FFD700", border: "border-gold/20", glow: "0 0 12px rgba(255,215,0,0.2)", delay: 0.8 },
          ] as const).map((btn) => {
            const Icon = btn.icon;
            return (
              <motion.div
                key={btn.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: btn.delay, type: "spring" }}
              >
                <motion.button
                  onClick={() => router.push(btn.href)}
                  className={`bg-card/80 backdrop-blur-sm border ${btn.border} p-2.5 rounded-full`}
                  style={btn.glow ? { boxShadow: btn.glow } : undefined}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} style={{ color: btn.color, filter: `drop-shadow(0 0 4px ${btn.color}80)` }} />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
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
            // Refresh all state from localStorage after sync
            setCardCount(getCards().length);
            setSpecialCount(getSpecialCardCount());
            window.dispatchEvent(new Event("plizio-cards-changed"));
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
              <div className="bg-white/5 rounded-xl p-3 mb-3 space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Daily reward</span>
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

              <p className="text-white/40 text-xs mb-3">Play a game to claim your reward!</p>

              <button
                onClick={() => setDailyReward(null)}
                className="w-full py-2.5 bg-neon-blue/20 hover:bg-neon-blue/30 border border-neon-blue/40 text-neon-blue rounded-xl font-bold transition-colors"
              >
                Let&apos;s Play!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
