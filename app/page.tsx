"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Crosshair, Zap, Brain, Mountain, Trophy, Layers, BookOpen, Car, Search, Hash, Shuffle, Crown, Calculator, Swords, PenLine, Puzzle, Lightbulb, Merge, Grid3x3, Navigation, Medal, CircleDot, Rocket, Languages, Microscope, Leaf, GitBranch, Ghost, History as HistoryIcon, Radio, ScrollText, Castle, Cpu, Sparkles, GraduationCap, Gamepad2, ChevronDown, Mail, Map as MapIcon, type LucideIcon } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HamburgerMenu from "@/components/HamburgerMenu";
import { getCards } from "@/lib/cards";
import { getSpecialCardCount, markAsReferred, isReferred, claimReferralReward } from "@/lib/specialCards";
import { getStats } from "@/lib/milestones";
import { claimDailyReward, awardPendingDailyStars, type DailyRewardResult } from "@/lib/dailyReward";
import { getUsername, hasUsername } from "@/lib/username";
import { useLang } from "@/components/LanguageProvider";
import ContinentIcon, { type Continent } from "@/components/ContinentIcon";

const AuthModal = dynamic(() => import("@/components/AuthModal"), { ssr: false });
const UsernameModal = dynamic(() => import("@/components/UsernameModal"), { ssr: false });
// NOTE: the homepage content (hero + module cards) MUST stay statically rendered.
// A dynamic(ssr:false) on an above-the-fold component bails the whole route to
// client-side rendering (BAILOUT_TO_CLIENT_SIDE_RENDERING) → empty static HTML → LCP 8s.

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
      "BRAIN": "LEARN",
      "LOGIC": "LOGIC",
      "MAPS": "MAPS",
    },
    games: {
      quickpick: "Quick Pick",
      reflexrush: "Reflex Rush",
      memoryflash: "Memory Flash",
      spotdiff: "Find the Difference",
      numberrush: "Number Sprint",
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
      geschichtetest: "History Test",
      biologietest: "Biology Test",
      "astro-biologie": "AstroBiology",
      "astro-physik": "AstroPhysics",
      "astro-geographie": "AstroGeography",
      astrokemia: "AstroChemistry",
      astrogeschichte: "AstroHistory",
      physiktest: "Physics Test",
      kemiatest: "Chemistry Test",
      astrinformatika: "AstroInformatics",
      informatikatest: "Informatics Test",
      "astro-ai": "AstroAI",
      aitest: "AI Test",
      geographietest: "Geography Test",
      deductiongrid: "Deduction Grid",
      deductiongrid2: "Galactic Deduction",
      timeecho: "Time Echo",
      shadowswitch: "Shadow Switch",
      signaldecoder: "Signal Decoder",
      astroromana: "AstroRomanian",
      racetrack: "Racetrack",
      sequencerush: "Sequence Rush",
      wordhunt: "Word Hunt",
      numberpath: "Number Path",
      pathbuilder: "Path Builder",
      topicsort: "Topic Sort",
      pipeflow: "Pipe Flow",
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
      "europe-map": "Europe",
      "northamerica-map": "North America",
      "southamerica-map": "South America",
      "africa-map": "Africa",
      "asia-map": "Asia",
      "oceania-map": "Oceania",
    },
    ui: {
      comingSoon: "COMING SOON",
    },
  },
  hu: {
    categories: {
      "QUIZ & REFLEX": "KVÍZ, REFLEX & SZÓ",
      "BRAIN": "TANULÁS",
      "LOGIC": "LOGIKA",
      "MAPS": "TÉRKÉPEK",
    },
    games: {
      quickpick: "Gyors Választás",
      reflexrush: "Reflex Roham",
      memoryflash: "Memória Flash",
      spotdiff: "Különbségkereső",
      numberrush: "Számsprint",
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
      geschichtetest: "Történelem teszt",
      biologietest: "Biológia Teszt",
      "astro-biologie": "AstroBiológia",
      "astro-physik": "AstroFizika",
      "astro-geographie": "AstroFöldrajz",
      astrokemia: "AstroKémia",
      astrogeschichte: "AstroTörténelem",
      physiktest: "Fizika Teszt",
      kemiatest: "Kémia Teszt",
      astrinformatika: "AstroInformatika",
      informatikatest: "Informatika Teszt",
      "astro-ai": "AstroAI",
      aitest: "AI Teszt",
      geographietest: "Földrajz Teszt",
      deductiongrid: "Dedukciós rács",
      deductiongrid2: "Galaktikus Dedukció",
      timeecho: "Idővisszhang",
      shadowswitch: "Árnyékváltó",
      signaldecoder: "Jeldekódoló",
      astroromana: "AstroRomán",
      racetrack: "Pályaverseny",
      sequencerush: "Szekvencia Roham",
      wordhunt: "Szóvadász",
      numberpath: "Számút",
      pathbuilder: "Útvonalépítő",
      topicsort: "Témarendező",
      pipeflow: "Csőáramlás",
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
      "europe-map": "Európa",
      "northamerica-map": "Észak-Amerika",
      "southamerica-map": "Dél-Amerika",
      "africa-map": "Afrika",
      "asia-map": "Ázsia",
      "oceania-map": "Óceánia",
    },
    ui: {
      comingSoon: "HAMAROSAN",
    },
  },
  de: {
    categories: {
      "QUIZ & REFLEX": "QUIZ, REFLEX & WORT",
      "BRAIN": "LERNEN",
      "LOGIC": "LOGIK",
      "MAPS": "KARTEN",
    },
    games: {
      quickpick: "Schnelle Wahl",
      reflexrush: "Reflex Rush",
      memoryflash: "Speicherblitz",
      spotdiff: "Finde den Unterschied",
      numberrush: "Zahlensprint",
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
      geschichtetest: "Geschichte-Test",
      biologietest: "Biologie-Test",
      "astro-biologie": "AstroBiologie",
      "astro-physik": "AstroPhysik",
      "astro-geographie": "AstroGeographie",
      astrokemia: "AstroChemie",
      astrogeschichte: "AstroGeschichte",
      physiktest: "Physik-Test",
      kemiatest: "Chemie-Test",
      astrinformatika: "AstroInformatik",
      informatikatest: "Informatik-Test",
      "astro-ai": "AstroKI",
      aitest: "KI-Test",
      geographietest: "Geographie-Test",
      deductiongrid: "Deduktionsraster",
      deductiongrid2: "Galaktische Deduktion",
      timeecho: "Zeitecho",
      shadowswitch: "Schattenschalter",
      signaldecoder: "Signal-Decoder",
      astroromana: "AstroRumänisch",
      racetrack: "Rennstrecke",
      sequencerush: "Sequenz Rush",
      wordhunt: "Wortjagd",
      numberpath: "Zahlenpfad",
      pathbuilder: "Pfadbauer",
      topicsort: "Themen-Sortierung",
      pipeflow: "Rohrfluss",
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
      "europe-map": "Europa",
      "northamerica-map": "Nordamerika",
      "southamerica-map": "Südamerika",
      "africa-map": "Afrika",
      "asia-map": "Asien",
      "oceania-map": "Ozeanien",
    },
    ui: {
      comingSoon: "BALD VERFÜGBAR",
    },
  },
  ro: {
    categories: {
      "QUIZ & REFLEX": "QUIZ, REFLEX & CUVÂNT",
      "BRAIN": "ÎNVĂȚARE",
      "LOGIC": "LOGICĂ",
      "MAPS": "HĂRȚI",
    },
    games: {
      quickpick: "Alegere Rapidă",
      reflexrush: "Reflex Rush",
      memoryflash: "Fulger de Memorie",
      spotdiff: "Găsește diferența",
      numberrush: "Sprint numeric",
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
      geschichtetest: "Test de istorie",
      biologietest: "Test de biologie",
      "astro-biologie": "AstroBiologie",
      "astro-physik": "AstroFizică",
      "astro-geographie": "AstroGeografie",
      astrokemia: "AstroChimie",
      astrogeschichte: "AstroIstorie",
      physiktest: "Test de Fizică",
      kemiatest: "Test de Chimie",
      astrinformatika: "AstroInformatică",
      informatikatest: "Test de Informatică",
      "astro-ai": "AstroAI",
      aitest: "Test AI",
      geographietest: "Test de Geografie",
      deductiongrid: "Grilă de deducție",
      deductiongrid2: "Deducție Galactică",
      timeecho: "Ecou Temporal",
      shadowswitch: "Schimb de Umbre",
      signaldecoder: "Decodor de Semnale",
      astroromana: "AstroRomână",
      racetrack: "Circuit de curse",
      sequencerush: "Sequence Rush",
      wordhunt: "Vânătoare de Cuvinte",
      numberpath: "Calea Numerelor",
      pathbuilder: "Constructor de Trasee",
      topicsort: "Sortare teme",
      pipeflow: "Fluxul Conductelor",
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
      "europe-map": "Europa",
      "northamerica-map": "America de Nord",
      "southamerica-map": "America de Sud",
      "africa-map": "Africa",
      "asia-map": "Asia",
      "oceania-map": "Oceania",
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
        id: "geographietest",
        icon: Navigation,
        nameKey: "geographietest",
        color: "#06B6D4",
        gradient: "bg-gradient-to-br from-cyan-500/20 to-teal-500/20",
      },
      {
        id: "astro-geographie",
        icon: Navigation,
        nameKey: "astro-geographie",
        color: "#0EA5E9",
        gradient: "bg-gradient-to-br from-sky-500/20 to-cyan-500/20",
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
      {
        id: "astro-geschichte",
        icon: Castle,
        nameKey: "astrogeschichte",
        color: "#8B5CF6",
        gradient: "bg-gradient-to-br from-purple-500/20 to-violet-500/20",
      },
      {
        id: "geschichtetest",
        icon: ScrollText,
        nameKey: "geschichtetest",
        color: "#F59E0B",
        gradient: "bg-gradient-to-br from-amber-500/20 to-yellow-500/20",
      },
      {
        id: "astrinformatika",
        icon: Cpu,
        nameKey: "astrinformatika",
        color: "#3B82F6",
        gradient: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
      },
      {
        id: "informatikatest",
        icon: Cpu,
        nameKey: "informatikatest",
        color: "#60A5FA",
        gradient: "bg-gradient-to-br from-blue-500/20 to-sky-500/20",
      },
      {
        id: "astro-ai",
        icon: Sparkles,
        nameKey: "astro-ai",
        color: "#EC4899",
        gradient: "bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20",
      },
      {
        id: "aitest",
        icon: Sparkles,
        nameKey: "aitest",
        color: "#F472B6",
        gradient: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
      },
    ],
  },
  {
    id: "logic",
    icon: Puzzle,
    color: "#00FF88",
    games: [
      {
        id: "signaldecoder",
        icon: Radio,
        nameKey: "signaldecoder",
        color: "#00FFCC",
        gradient: "bg-gradient-to-br from-teal-500/20 to-cyan-500/20",
      },
      {
        id: "numberpath",
        icon: Puzzle,
        nameKey: "numberpath",
        color: "#00FF88",
        gradient: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
      },
      {
        id: "pathbuilder",
        icon: Navigation,
        nameKey: "pathbuilder",
        color: "#2DD4BF",
        gradient: "bg-gradient-to-br from-teal-500/20 to-cyan-500/20",
      },
      {
        id: "topicsort",
        icon: Shuffle,
        nameKey: "topicsort",
        color: "#14B8A6",
        gradient: "bg-gradient-to-br from-cyan-500/20 to-teal-500/20",
      },
      {
        id: "pipeflow",
        icon: GitBranch,
        nameKey: "pipeflow",
        color: "#22C55E",
        gradient: "bg-gradient-to-br from-emerald-500/20 to-lime-500/20",
      },
      {
        id: "deductiongrid",
        icon: Grid3x3,
        nameKey: "deductiongrid",
        color: "#8B5CF6",
        gradient: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
      },
      {
        id: "deductiongrid2",
        icon: Rocket,
        nameKey: "deductiongrid2",
        color: "#6366F1",
        gradient: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
      },
      {
        id: "timeecho",
        icon: HistoryIcon,
        nameKey: "timeecho",
        color: "#00FFFF",
        gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      },
      {
        id: "shadowswitch",
        icon: Ghost,
        nameKey: "shadowswitch",
        color: "#F472B6",
        gradient: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
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
    id: "maps",
    icon: MapIcon,
    color: "#4FC3F7",
    games: [
      { id: "europe-map", icon: MapIcon, nameKey: "europe-map", color: "#60A5FA",
        gradient: "bg-gradient-to-br from-sky-500/20 to-blue-500/20" },
      { id: "northamerica-map", icon: MapIcon, nameKey: "northamerica-map", color: "#34D399",
        gradient: "bg-gradient-to-br from-emerald-500/20 to-green-500/20" },
      { id: "southamerica-map", icon: MapIcon, nameKey: "southamerica-map", color: "#FBBF24",
        gradient: "bg-gradient-to-br from-amber-500/20 to-yellow-500/20" },
      { id: "africa-map", icon: MapIcon, nameKey: "africa-map", color: "#F87171",
        gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/20" },
      { id: "asia-map", icon: MapIcon, nameKey: "asia-map", color: "#C084FC",
        gradient: "bg-gradient-to-br from-purple-500/20 to-violet-500/20" },
      { id: "oceania-map", icon: MapIcon, nameKey: "oceania-map", color: "#22D3EE",
        gradient: "bg-gradient-to-br from-cyan-500/20 to-teal-500/20" },
    ],
  },
];

/* The 3 homepage module cards (Karte / Lernen / Spiele) */
const HOME_T = {
  de: { karte: "Karte", karteSub: "6 Kontinente spielerisch erkunden", lernen: "Lernen", lernenSub: "Fächer, Astro-Spiele und Tests", spiele: "Spiele", spieleSub: "Quiz, Logik und Lernspiele", allSubjects: "Alle Fächer öffnen", postcard: "Postkarte gestalten", visualLab: "Visual Lab", visualLabSub: "Interaktive Lernspiele starten" },
  en: { karte: "Maps", karteSub: "Explore 6 continents through play", lernen: "Learn", lernenSub: "Subjects, astro games and tests", spiele: "Games", spieleSub: "Quiz, logic and learning games", allSubjects: "Open all subjects", postcard: "Create a postcard", visualLab: "Visual Lab", visualLabSub: "Start interactive learning games" },
  hu: { karte: "Térkép", karteSub: "6 kontinens játékos felfedezése", lernen: "Tanulás", lernenSub: "Tantárgyak, astro játékok és tesztek", spiele: "Játékok", spieleSub: "Kvíz, logika és tanulós játékok", allSubjects: "Összes tantárgy", postcard: "Képeslap készítése", visualLab: "Visual Lab", visualLabSub: "Interaktív tanulós játékok indítása" },
  ro: { karte: "Hartă", karteSub: "Explorează 6 continente prin joc", lernen: "Învățare", lernenSub: "Materii, jocuri astro și teste", spiele: "Jocuri", spieleSub: "Quiz, logică și jocuri educative", allSubjects: "Toate materiile", postcard: "Creează o carte poștală", visualLab: "Visual Lab", visualLabSub: "Pornește jocurile educative interactive" },
} as const;

function getCategoriesWithTranslations(lang: string): CategoryDef[] {
  // Type guard for translations
  const validLangs = ['en', 'hu', 'de', 'ro'] as const;
  const currentLang = validLangs.includes(lang as any) ? (lang as typeof validLangs[number]) : 'en';
  const t = TRANSLATIONS[lang as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

  const categoryLabels: Record<"quizreflex" | "brain" | "logic" | "maps", keyof typeof t.categories> = {
    quizreflex: "QUIZ & REFLEX",
    brain: "BRAIN",
    logic: "LOGIC",
    maps: "MAPS",
  };

  return CATEGORIES_BASE.map((cat) => {
    const catKey = cat.id as keyof typeof categoryLabels;
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

const CONTINENT_BY_GAME: Partial<Record<string, Continent>> = {
  "europe-map": "europe",
  "northamerica-map": "northamerica",
  "southamerica-map": "southamerica",
  "africa-map": "africa",
  "asia-map": "asia",
  "oceania-map": "oceania",
};

function GamePill({ id, href, icon: GIcon, name, color }: { id: string; href: string; icon: LucideIcon; name: string; color: string }) {
  const continent = CONTINENT_BY_GAME[id];
  return (
    <Link href={href} className="paper-game-pill">
      {continent ? <ContinentIcon continent={continent} size={24} title={name} /> : <GIcon size={17} className="shrink-0" style={{ color }} />}
      <span className="truncate text-sm font-semibold">{name}</span>
    </Link>
  );
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
  const [, setIsLoggedIn] = useState(false);
  const [dailyReward, setDailyReward] = useState<DailyRewardResult | null>(null);
  const [openCard, setOpenCard] = useState<"maps" | "learn" | "games" | null>("maps");

  // Pure compute from lang → stays in the statically exported HTML (SSR LCP)
  const categories = getCategoriesWithTranslations(lang);
  const catById: Record<string, CategoryDef> = Object.fromEntries(categories.map((c) => [c.id, c]));
  const ht = HOME_T[lang as keyof typeof HOME_T] || HOME_T.en;
  const gameHref = (id: string) =>
    id.endsWith("-map") ? `/${id}/${lang === "hu" ? "" : lang + "/"}` : `/${id}`;

  useEffect(() => {
    setStreak(getStreak());
    setCardCount(getCards().length);
    setSpecialCount(getSpecialCardCount());

    // Daily login reward — csak akkor mutatjuk a modalt, ha a user már játszott
    // legalább 1 játékot (első látogatáskor ne nyaggassuk popuppal).
    const reward = claimDailyReward();
    if (reward && !reward.alreadyClaimed && getStats().totalGames > 0) {
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

    // Supabase auth + cloud sync are NOT needed for first paint/interaction — defer to idle and
    // dynamic-import so @supabase/supabase-js stays out of the initial bundle (homepage TBT).
    let unsubscribe: (() => void) | null = null;
    let cancelled = false;
    const idleId: number = window.requestIdleCallback
      ? window.requestIdleCallback(() => { void initAuth(); }, { timeout: 2500 })
      : window.setTimeout(() => { void initAuth(); }, 1200);
    async function initAuth() {
      const [{ getUser, onAuthChange }, { syncToSupabase }] = await Promise.all([
        import("@/lib/auth"),
        import("@/lib/sync"),
      ]);
      if (cancelled) return;
      const syncUser = (id: string) => syncToSupabase(id).then(() => {
        setCardCount(getCards().length);
        setSpecialCount(getSpecialCardCount());
        window.dispatchEvent(new Event("plizio-cards-changed"));
      }).catch((err) => console.error("Sync error:", err));

      const user = await getUser();
      if (cancelled) return;
      setIsLoggedIn(!!user);
      if (user) {
        syncUser(user.id);
      } else {
        // Never auto-show auth modal again after dismissed or registered
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

      const { data: { subscription } } = onAuthChange((u) => {
        setIsLoggedIn(!!u);
        if (u) syncUser(u.id);
      });
      if (cancelled) { subscription.unsubscribe(); return; }
      unsubscribe = () => subscription.unsubscribe();
    }

    // Refresh card + star badge whenever cards change (earn / exchange)
    const refreshCounts = () => {
      setCardCount(getCards().length);
      setSpecialCount(getSpecialCardCount());
    };
    const onVisible = () => { if (document.visibilityState === "visible") refreshCounts(); };
    window.addEventListener("plizio-cards-changed", refreshCounts);
    document.addEventListener("visibilitychange", onVisible);

    // Award pending daily stars after the first game of the day
    const onGamePlayed = () => {
      const awarded = awardPendingDailyStars();
      if (awarded > 0) setSpecialCount(getSpecialCardCount());
    };
    window.addEventListener("plizio-game-played", onGamePlayed);

    return () => {
      cancelled = true;
      if (window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      if (unsubscribe) unsubscribe();
      window.removeEventListener("plizio-cards-changed", refreshCounts);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("plizio-game-played", onGamePlayed);
    };
  }, []);

  return (
    <>
      {/* Homepage — hero + 3 module cards (Karte / Lernen / Spiele), pure CSS, SSR-rendered */}
      <main className="plizio-paper relative min-h-screen w-full overflow-x-hidden">
      {/* Editorial map-grid atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-24 top-28 h-72 w-72 rounded-full border border-[#b4502a]/15" />
        <div className="absolute -right-12 top-40 h-72 w-72 rounded-full border border-[#b4502a]/10" />
        <div className="absolute -left-40 bottom-24 h-80 w-80 rotate-12 border border-[#211d18]/10" />
      </div>

      {/* Top bar — nav buttons right, language switcher left */}
      <div className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-3 py-2.5 pointer-events-none">
        {/* Language switcher + menu — left */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <div
            className="animate-enter-left opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <HamburgerMenu />
          </div>
          <div
            className="animate-enter-left opacity-0"
            style={{ animationDelay: "0.45s" }}
          >
            <LanguageSwitcher />
          </div>
        </div>

        {/* Nav buttons — right */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {([
            { href: "/learn", icon: GraduationCap, label: ht.lernen, delay: 0.42 },
            { href: `/postcard/?lang=${lang}`, icon: Mail, label: ht.postcard, delay: 0.48 },
            { href: "/collection", icon: Trophy, label: "Collection", delay: 0.54 },
          ] as const).map((btn) => {
            const Icon = btn.icon;
            return (
              <div
                key={btn.href}
                className="animate-enter-pop opacity-0"
                style={{ animationDelay: `${btn.delay}s` }}
              >
                <button
                  onClick={() => router.push(btn.href)}
                  className="paper-icon-button active:scale-90"
                  aria-label={btn.label}
                  title={btn.label}
                >
                  <Icon size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hero + module cards */}
      <div className="relative z-10 mx-auto w-full max-w-2xl px-4 pb-14 pt-20">
        <header className="text-center">
          <p className="paper-kicker mb-2">INTERACTIVE ATLAS · LEARNING LAB</p>
          <h1 className="paper-wordmark text-6xl font-bold tracking-[-.06em]">PLIZIO</h1>
          <p className="mt-2 text-[10px] font-bold tracking-[0.35em] text-[#6b6356]">PLAY · LEARN · THINK</p>
          <Link href={`/postcard/?lang=${lang}`} className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-[#b4502a]/35 bg-[#fffaf0]/80 px-4 py-2 text-sm font-extrabold text-[#8f3d1f] shadow-[3px_3px_0_rgba(180,80,42,.14)] transition hover:-translate-y-0.5 hover:bg-white">
            <Mail size={17} /> {ht.postcard}
          </Link>
          {username && <p className="mt-2 text-xs font-bold tracking-wider text-[#6b6356]">{username}</p>}
          {(streak > 0 || specialCount > 0 || cardCount > 0) && (
            <div className="mt-2 flex items-center justify-center gap-5 text-xs font-extrabold">
              {streak > 0 && <span className="opacity-90" style={{ color: "#FFD700" }}>🔥 {streak}</span>}
              {specialCount > 0 && <span className="opacity-90" style={{ color: "#E040FB" }}>⭐ {specialCount}</span>}
              {cardCount > 0 && <span className="text-[#6b6356]">🃏 {cardCount}</span>}
            </div>
          )}
        </header>

        <div className="mt-8 space-y-4">
          {([
            { id: "maps" as const, title: ht.karte, sub: ht.karteSub, icon: MapIcon, accent: "#4FC3F7", count: catById.maps?.games.length ?? 0 },
            { id: "learn" as const, title: ht.lernen, sub: ht.lernenSub, icon: GraduationCap, accent: "#00FF88", count: catById.brain?.games.length ?? 0 },
            { id: "games" as const, title: ht.spiele, sub: ht.spieleSub, icon: Gamepad2, accent: "#FF2D78", count: 1 + (["quizreflex", "logic"] as const).reduce((n, c) => n + (catById[c]?.games.length ?? 0), 0) },
          ]).map((mod) => {
            const ModIcon = mod.icon;
            const open = openCard === mod.id;
            return (
              <section
                key={mod.id}
                className="paper-module"
                data-open={open}
              >
                <button
                  onClick={() => setOpenCard(open ? null : mod.id)}
                  className="flex w-full items-center gap-4 p-5 text-left"
                  aria-expanded={open}
                >
                  <div className="paper-module-icon">
                    <ModIcon size={28} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="paper-module-title text-xl font-extrabold">{mod.title}</h2>
                    <p className="paper-module-copy truncate text-sm">{mod.sub}</p>
                  </div>
                  <span className="paper-count shrink-0 px-2.5 py-1 text-xs font-bold">{mod.count}</span>
                  <ChevronDown size={20} className={`shrink-0 text-[#b4502a] transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-5 pb-5 pt-0.5">
                      {mod.id === "maps" && (
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {(catById.maps?.games ?? []).map((g) => (
                            <GamePill key={g.id} id={g.id} href={gameHref(g.id)} icon={g.icon} name={g.name} color={g.color} />
                          ))}
                        </div>
                      )}
                      {mod.id === "learn" && (
                        <>
                          <Link href="/learn" className="paper-primary-link mb-3 flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold transition-colors">
                            <GraduationCap size={18} /> {ht.allSubjects}
                          </Link>
                          <div className="grid grid-cols-2 gap-2">
                            {(catById.brain?.games ?? []).map((g) => (
                              <GamePill key={g.id} id={g.id} href={gameHref(g.id)} icon={g.icon} name={g.name} color={g.color} />
                            ))}
                          </div>
                        </>
                      )}
                      {mod.id === "games" && (
                        <div className="space-y-4">
                          <Link href="/visual-lab" className="paper-primary-link flex items-center gap-3 px-4 py-3 transition-colors">
                            <Microscope size={21} className="shrink-0" />
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-extrabold">{ht.visualLab}</span>
                              <span className="block truncate text-xs font-medium opacity-70">{ht.visualLabSub}</span>
                            </span>
                            <Sparkles size={17} className="shrink-0" />
                          </Link>
                          {(["quizreflex", "logic"] as const).map((cid) => {
                            const cat = catById[cid];
                            if (!cat) return null;
                            const CIcon = cat.icon;
                            return (
                              <div key={cid}>
                                <div className="mb-2 flex items-center gap-1.5">
                                  <CIcon size={13} style={{ color: cat.color }} />
                                  <span className="text-[11px] font-bold tracking-widest text-[#6b6356]">{cat.label}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  {cat.games.map((g) => (
                                    <GamePill key={g.id} id={g.id} href={gameHref(g.id)} icon={g.icon} name={g.name} color={g.color} />
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
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
      {dailyReward && !dailyReward.alreadyClaimed && (() => {
        const t = {
          de: { back: "Willkommen zurück!", daily: "Tägliche Belohnung!", streak: "Tage-Serie", reward: "Tägliche Belohnung", bonus: "Tage Serien-Bonus!", total: "Gesamt", claim: "Spiele, um deine Belohnung zu erhalten!", play: "Los geht's!" },
          hu: { back: "Üdv újra!", daily: "Napi jutalom!", streak: "napos sorozat", reward: "Napi jutalom", bonus: " napos sorozat bónusz!", total: "Összesen", claim: "Játssz, hogy megkapd a jutalmadat!", play: "Játsszunk!" },
          ro: { back: "Bine ai revenit!", daily: "Recompensă zilnică!", streak: "zile la rând", reward: "Recompensă zilnică", bonus: " zile bonus!", total: "Total", claim: "Joacă pentru a primi recompensa!", play: "Hai să jucăm!" },
          en: { back: "Welcome back!", daily: "Daily Reward!", streak: "day streak", reward: "Daily reward", bonus: "d streak bonus!", total: "Total", claim: "Play a game to claim your reward!", play: "Let's Play!" },
        }[lang] || { back: "Welcome back!", daily: "Daily Reward!", streak: "day streak", reward: "Daily reward", bonus: "d streak bonus!", total: "Total", claim: "Play a game to claim your reward!", play: "Let's Play!" };
        return (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setDailyReward(null)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative bg-[#12122A] border border-white/10 rounded-2xl p-6 max-w-xs w-full text-center shadow-2xl animate-enter-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Streak flame */}
            <div className="text-5xl mb-2">
              {dailyReward.streakCount >= 30 ? "🏆" : dailyReward.streakCount >= 14 ? "💎" : dailyReward.streakCount >= 7 ? "🔥" : "⭐"}
            </div>
            <h2 className="text-white font-bold text-xl mb-1">
              {dailyReward.streakBroken ? t.back : t.daily}
            </h2>
            <p className="text-white/50 text-sm mb-4">
              {dailyReward.streakCount} {t.streak} 🔥
            </p>

            {/* Reward breakdown */}
            <div className="bg-white/5 rounded-xl p-3 mb-3 space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">{t.reward}</span>
                <span className="text-yellow-400 font-bold">+1 ⭐</span>
              </div>
              {dailyReward.streakBonus > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-orange-400">
                    {dailyReward.streakCount}{t.bonus}
                  </span>
                  <span className="text-orange-400 font-bold">+{dailyReward.streakBonus} ⭐</span>
                </div>
              )}
              <div className="border-t border-white/10 pt-1 flex justify-between text-sm font-bold">
                <span className="text-white">{t.total}</span>
                <span className="text-yellow-400">+{1 + dailyReward.streakBonus} ⭐</span>
              </div>
            </div>

            <p className="text-white/40 text-xs mb-3">{t.claim}</p>

            <button
              onClick={() => setDailyReward(null)}
              className="w-full py-2.5 bg-neon-blue/20 hover:bg-neon-blue/30 border border-neon-blue/40 text-neon-blue rounded-xl font-bold transition-colors"
            >
              {t.play}
            </button>
          </div>
        </div>
        );
      })()}
      </main>

    </>
  );
}
