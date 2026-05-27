"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Crosshair, Zap, Brain, Mountain, Trophy, Layers, Star, User, BookOpen, Car, Search, Hash, Shuffle, Crown, Calculator, Swords, PenLine, Puzzle, Lightbulb, Merge, Grid3x3, Navigation, Medal, CircleDot, Rocket, Languages, Microscope, Leaf, GitBranch, Ghost, History as HistoryIcon, Timer, Radio, ScrollText, Castle, Cpu, GraduationCap, Map as MapIcon, type LucideIcon } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HamburgerMenu from "@/components/HamburgerMenu";
import IslandMap, { type Island, type IslandGame } from "@/components/IslandMap";
import { getCards } from "@/lib/cards";
import { getSpecialCardCount, markAsReferred, isReferred, claimReferralReward } from "@/lib/specialCards";
import { getStats } from "@/lib/milestones";
import { claimDailyReward, awardPendingDailyStars, type DailyRewardResult } from "@/lib/dailyReward";
import { getUser, onAuthChange } from "@/lib/auth";
import { syncToSupabase } from "@/lib/sync";
import { getUsername, hasUsername } from "@/lib/username";
import { useLang } from "@/components/LanguageProvider";
import HomeHero from "@/components/HomeHero";
import { getGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";

const AuthModal = dynamic(() => import("@/components/AuthModal"), { ssr: false });
const UsernameModal = dynamic(() => import("@/components/UsernameModal"), { ssr: false });

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
      "ADVENTURE": "KALAND",
      "BRAIN": "TANULÁS",
      "LOGIC": "LOGIKA",
      "SPORT": "SPORT",
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
      "ADVENTURE": "ABENTEUER",
      "BRAIN": "LERNEN",
      "LOGIC": "LOGIK",
      "SPORT": "SPORT",
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
      "ADVENTURE": "AVENTURĂ",
      "BRAIN": "ÎNVĂȚARE",
      "LOGIC": "LOGICĂ",
      "SPORT": "SPORT",
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

/* Planet positions in the 500x900 viewBox — optimized for mobile */
const ISLAND_POSITIONS: Record<string, { cx: number; cy: number; color: string; glow: string }> = {
  maps:       { cx: 250, cy: 230, color: "#4FC3F7", glow: "rgba(79,195,247,0.45)" },
  quizreflex: { cx: 155, cy: 350, color: "#00D4FF", glow: "rgba(0,212,255,0.4)" },
  adventure:  { cx: 365, cy: 420, color: "#00FF88", glow: "rgba(0,255,136,0.4)" },
  brain:      { cx: 145, cy: 550, color: "#4ECDC4", glow: "rgba(78,205,196,0.4)" },
  logic:      { cx: 355, cy: 630, color: "#B44DFF", glow: "rgba(180,77,255,0.4)" },
  sport:      { cx: 250, cy: 750, color: "#FF6B00", glow: "rgba(255,107,0,0.4)" },
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
      // Brain/learn island → direct navigation to SubjectPicker
      href: cat.id === "brain" ? "/learn" : undefined,
    };
  });
}

function getCategoriesWithTranslations(lang: string): CategoryDef[] {
  // Type guard for translations
  const validLangs = ['en', 'hu', 'de', 'ro'] as const;
  const currentLang = validLangs.includes(lang as any) ? (lang as typeof validLangs[number]) : 'en';
  const t = TRANSLATIONS[lang as keyof typeof TRANSLATIONS] || TRANSLATIONS.en;

  const categoryLabels: Record<"quizreflex" | "adventure" | "brain" | "logic" | "sport" | "maps", keyof typeof t.categories> = {
    quizreflex: "QUIZ & REFLEX",
    adventure: "ADVENTURE",
    brain: "BRAIN",
    logic: "LOGIC",
    sport: "SPORT",
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

const GAME_TO_CATEGORY: Record<string, string> = {
  quickpick: "quizreflex", reflexrush: "quizreflex", memoryflash: "quizreflex",
  spotdiff: "quizreflex", numberrush: "quizreflex", wordscramble: "quizreflex",
  sequencerush: "quizreflex", wordhunt: "quizreflex", milliomos: "quizreflex",
  kodex: "quizreflex",
  skyclimb: "adventure", citydrive: "adventure", racetrack: "adventure", pliziolife: "adventure",
  astromath: "brain", astrodeutsch: "brain", astroenglish: "brain", astromagyar: "brain", astroromana: "brain", "astro-sachkunde": "brain", "astro-biologie": "brain", "astro-physik": "brain", "astro-geographie": "brain", astrokemia: "brain", "astro-geschichte": "brain", mathtest: "brain", deutschtest: "brain", englishtest: "brain", magyarteszt: "brain", romaniantest: "brain", sachkundetest: "brain", geschichtetest: "brain", biologietest: "brain", physiktest: "brain", geographietest: "brain", kemiatest: "brain",
  numberpath: "logic", pathbuilder: "logic", pipeflow: "logic", deductiongrid: "logic", deductiongrid2: "logic", timeecho: "logic", shadowswitch: "logic", minisudoku: "logic", lightout: "logic", numbermerge: "logic", nonogram: "logic", mazerush: "logic",
  signaldecoder: "logic",
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
  const [gender, setGenderState] = useState<AvatarGender>("girl");
  const [activeSkin, setActiveSkinState] = useState(() => getSkinDef("default"));
  const [activeFace, setActiveFaceState] = useState(() => getFaceDef("default"));
  const [activeTop, setActiveTop] = useState<ReturnType<typeof getTopDef> | null>(null);
  const [activeBottom, setActiveBottom] = useState<ReturnType<typeof getBottomDef> | null>(null);
  const [activeShoe, setActiveShoe] = useState<ReturnType<typeof getShoeDef> | null>(null);
  const [activeCape, setActiveCape] = useState<ReturnType<typeof getCapeDef> | null>(null);
  const [activeGlasses, setActiveGlasses] = useState<ReturnType<typeof getGlassesDef> | null>(null);
  const [activeGloves, setActiveGloves] = useState<ReturnType<typeof getGloveDef> | null>(null);
  const [activeHat, setActiveHatState] = useState<ReturnType<typeof getHatDef> | null>(null);
  const [activeTrail, setActiveTrailState] = useState<ReturnType<typeof getTrailDef> | null>(null);

  useEffect(() => {
    setCategories(getCategoriesWithTranslations(lang));
  }, [lang]);

  useEffect(() => {
    setGenderState(getGender());
    setActiveSkinState(getSkinDef(getActiveSkin()));
    setActiveFaceState(getFaceDef(getActiveFace()));

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
    setActiveHatState(hatId ? getHatDef(hatId) : null);
    setActiveTrailState(trailId ? getTrailDef(trailId) : null);
  }, []);

  useEffect(() => {
    setStreak(getStreak());
    setCardCount(getCards().length);
    setSpecialCount(getSpecialCardCount());
    setLastCategory(getLastPlayedCategory());

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
    <>
      {/* Game island — first-screen visual (Plizio logo, avatar, menu) */}
      <main className="relative w-full h-screen overflow-hidden bg-[#060614]">
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
            { href: "/learn", icon: MapIcon, color: "#22D3EE", border: "border-cyan-400/20", glow: "0 0 12px rgba(34,211,238,0.2)", delay: 0.42 },
            { href: "/multiplayer", icon: Swords, color: "#FF2D78", border: "border-neon-pink/20", glow: "0 0 12px rgba(255,45,120,0.2)", delay: 0.45 },
            { href: "/profile", icon: User, color: isLoggedIn ? "#00FF88" : "rgba(255,255,255,0.4)", border: isLoggedIn ? "border-neon-green/20" : "border-white/10", glow: isLoggedIn ? "0 0 12px rgba(0,255,136,0.15)" : undefined, delay: 0.5 },
            // { href: "/room", icon: HomeIcon, color: "#00D4FF", border: "border-neon-blue/20", glow: "0 0 12px rgba(0,212,255,0.15)", delay: 0.6 },
            { href: "/shop", icon: Star, color: "#E040FB", border: "border-[#E040FB]/20", glow: "0 0 12px rgba(224,64,251,0.2)", delay: 0.7 },
            { href: "/collection", icon: Trophy, color: "#FFD700", border: "border-gold/20", glow: "0 0 12px rgba(255,215,0,0.2)", delay: 0.8 },
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
                  className={`bg-card/80 backdrop-blur-sm border ${btn.border} p-2.5 rounded-full transition-transform duration-200 hover:scale-110 active:scale-90`}
                  style={btn.glow ? { boxShadow: btn.glow } : undefined}
                >
                  <Icon size={18} style={{ color: btn.color, filter: `drop-shadow(0 0 4px ${btn.color}80)` }} />
                </button>
              </div>
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

      {/* SEO content below — visible when user scrolls down. Google reads the full HTML regardless. */}
      <HomeHero />
    </>
  );
}
