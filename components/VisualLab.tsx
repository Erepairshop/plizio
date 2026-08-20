"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Puzzle,
  Landmark,
  Star,
  Rocket,
  Swords,
  Shield,
  ChartPie,
  Crosshair,
  Clock3,
  MapPinned,
  Scale,
  ChartNoAxesColumn,
  Gamepad2,
  BookOpenCheck,
  ScanText,
  SpellCheck2,
  Network,
  PenLine,
  SearchCheck,
  Compass,
  CloudSun,
  Leaf,
  Orbit,
  RadioTower,
  Sparkles,
  Brain,
  Keyboard,
  ShieldCheck,
  Languages,
  ListTree,
  Scissors,
  RefreshCw,
  Ghost,
  Image,
  Microscope,
  Boxes,
  Workflow,
  Trees,
  FlaskConical,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";
import VisualLabIcon from "./VisualLabIcon";
import { shuffleDeterministic, useTimeoutRegistry } from "./astro-games/utils";
import MeteorCatchGame from "@/app/astro-sachkunde/visual-lab/games/MeteorCatchGame";
import OrbitSortGame from "@/app/astro-sachkunde/visual-lab/games/OrbitSortGame";
import SignalRunnerGame from "@/app/astro-sachkunde/visual-lab/games/SignalRunnerGame";
import ConstellationBuilderGame from "@/app/astro-sachkunde/visual-lab/games/ConstellationBuilderGame";
import MemoryRadarGame from "@/app/astro-sachkunde/visual-lab/games/MemoryRadarGame";
import SequenceSortGame from "@/app/astro-sachkunde/visual-lab/games/SequenceSortGame";
import FactSwipeGame from "@/app/astro-sachkunde/visual-lab/games/FactSwipeGame";

// Astromath — single flagship game (for now)
const MathCampaignGame = dynamic(() => import("@/app/astromath/visual-lab/games/MathCampaignGame"));
const MathNinjaGame = dynamic(() => import("@/app/astromath/visual-lab/games/MathNinjaGame"));
const MathDefenderGame = dynamic(() => import("@/app/astromath/visual-lab/games/MathDefenderGame"));
const FractionReactorGame = dynamic(() => import("@/app/astromath/visual-lab/games/FractionReactorGame"));
const AngleLaserGame = dynamic(() => import("@/app/astromath/visual-lab/games/AngleLaserGame"));
const TimeWarpGame = dynamic(() => import("@/app/astromath/visual-lab/games/TimeWarpGame"));
const StarMapperGame = dynamic(() => import("@/app/astromath/visual-lab/games/StarMapperGame"));
const MeteorScaleGame = dynamic(() => import("@/app/astromath/visual-lab/games/MeteorScaleGame"));
const DataOrbitGame = dynamic(() => import("@/app/astromath/visual-lab/games/DataOrbitGame"));
const MathQuestGame = dynamic(() => import("@/app/astromath/visual-lab/games/MathQuestGame"), { ssr: false });
import GruselBuilderGame from "@/app/astromath/visual-lab/games/GruselBuilderGame";
import BildGeschichteGame from "@/app/astromath/visual-lab/games/BildGeschichteGame";

// Astrinformatika Visual Lab játékok

// Astrodeutsch Visual Lab játékok
const WortWaechterGame = dynamic(() => import("@/app/astro-deutsch/visual-lab/games/WortWaechterGame"));
const ArtikelAsteroidsGame = dynamic(() => import("@/app/astro-deutsch/visual-lab/games/ArtikelAsteroidsGame"));
const SatzbauSniperGame = dynamic(() => import("@/app/astro-deutsch/visual-lab/games/SatzbauSniperGame"));
const SilbenSlicerGame = dynamic(() => import("@/app/astro-deutsch/visual-lab/games/SilbenSlicerGame"));
const TippSturmGame = dynamic(() => import("@/app/astro-deutsch/visual-lab/games/TippSturmGame"));
const VerbenVortexGame = dynamic(() => import("@/app/astro-deutsch/visual-lab/games/VerbenVortexGame"));
const LanguageSkillGame = dynamic(() => import("@/app/astro-deutsch/visual-lab/games/LanguageSkillGame"));
const GeographyLab = dynamic(() => import("./visual-lab/GeographyLab"));
const BiologyLab = dynamic(() => import("./visual-lab/BiologyLab"));
const PhysicsLab = dynamic(() => import("./visual-lab/PhysicsLab"));
const ChemistryLab = dynamic(() => import("./visual-lab/ChemistryLab"));
const HistoryLab = dynamic(() => import("./visual-lab/HistoryLab"));
const InformaticsLab = dynamic(() => import("./visual-lab/InformaticsLab"));
import { ASTRO_LANGUAGE_POOLS } from "@/lib/visualLab/pools/astroLanguagePools";
import { ASTRO_ENGLISH_LANGUAGE_POOL } from "@/lib/visualLab/pools/astroEnglishLanguagePools";
import { ASTRO_MAGYAR_LANGUAGE_POOL } from "@/lib/visualLab/pools/astroMagyarLanguagePools";
import { ASTRO_ROMANA_LANGUAGE_POOL } from "@/lib/visualLab/pools/astroRomanaLanguagePools";
import { isLanguageGameAvailableForGrade } from "@/lib/visualLab/languageCurriculum";
import { prepareLegacyLanguageRounds } from "@/lib/visualLab/prepareLegacyLanguageRounds";
import { buildLanguageSkillRounds, LANGUAGE_SKILL_GAME_IDS, type LanguageSkillGameId, type LanguageSkillRound } from "@/lib/visualLab/languageSkillContent";
import LanguageRoundSession from "./visual-lab/LanguageRoundSession";
import type {
  ArtikelAsteroidsRound,
  SatzbauSniperRound,
  SilbenSlicerRound,
  TippSturmRound,
  VerbenVortexRound,
  WortWaechterRound,
  LanguagePools,
} from "@/lib/visualLab/languageTypes";

import { SACHKUNDE_VISUAL_LAB_K1 } from "@/lib/visualLab/pools/sachkundeK1";
import { SACHKUNDE_VISUAL_LAB_K2 } from "@/lib/visualLab/pools/sachkundeK2";
import { SACHKUNDE_VISUAL_LAB_K3 } from "@/lib/visualLab/pools/sachkundeK3";
import { SACHKUNDE_VISUAL_LAB_K4 } from "@/lib/visualLab/pools/sachkundeK4";

import type { SachkundeVisualLabGradePool } from "@/lib/visualLab/types";
import { GESCHICHTE_POOLS } from "@/lib/visualLab/pools/geschichtePool";
import { isMathGameAvailableForGrade } from "@/lib/visualLab/mathCurriculum";
import { isGeographyGameAvailableForGrade } from "@/lib/visualLab/geographyCurriculum";
import { isBiologyGameAvailableForGrade } from "@/lib/visualLab/biologyCurriculum";
import { isPhysicsGameAvailableForGrade } from "@/lib/visualLab/physicsCurriculum";
import { isChemistryGameAvailableForGrade } from "@/lib/visualLab/chemistryCurriculum";
import { isHistoryGameAvailableForGrade } from "@/lib/visualLab/historyCurriculum";
import { isInformaticsGameAvailableForGrade } from "@/lib/visualLab/informaticsCurriculum";

const ACTIVE_LANGUAGE_POOLS: LanguagePools = {
  de: ASTRO_LANGUAGE_POOLS.de,
  en: ASTRO_ENGLISH_LANGUAGE_POOL,
  hu: ASTRO_MAGYAR_LANGUAGE_POOL,
  ro: ASTRO_ROMANA_LANGUAGE_POOL,
};

const SACHKUNDE_POOLS: Record<number, SachkundeVisualLabGradePool> = {
  1: SACHKUNDE_VISUAL_LAB_K1,
  2: SACHKUNDE_VISUAL_LAB_K2,
  3: SACHKUNDE_VISUAL_LAB_K3,
  4: SACHKUNDE_VISUAL_LAB_K4,
};

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type VisualLabSubject = "sachkunde" | "geographie" | "geschichte" | "astromath" | "deutsch" | "informatika" | "physik" | "kemia" | "biologie" | "english" | "magyar" | "romana";
export type Lang = "de" | "hu" | "ro" | "en";

export type VisualLabGameType = "puzzle" | "memory" | "spotter" | "timeline" | "campaign";

export interface VisualLabGame {
  id: string;
  type: VisualLabGameType;
  labelKey: string;        // key into T (per-lang)
  available: boolean;
}
interface VisualLabProps {
  subject: VisualLabSubject;
  grade: number;
  lang: Lang;
  open: boolean;
  onClose: () => void;
  initialGameId?: string;
}

/* ------------------------------------------------------------------ */
/* L10n                                                                */
/* ------------------------------------------------------------------ */

const T: Record<Lang, Record<string, string>> = {
  de: {
    title: "Visual Lab",
    subtitle: "Interaktive Lernspiele",
    pickGame: "Spiel wählen",
    formulaBlitz: "Formel Blitz ⚡",
    meteorCatch: "Sternenfang",
    orbitSort: "Orbit Sortieren",
    signalRunner: "Signalläufer",
    constellationBuilder: "Sternbilder",
    memoryRadar: "Memory Radar",
    shapeSorter: "Formen-Sortierer",
    patternMatch: "Muster-Meister",
    colorPattern: "Farben-Reihe",
    countingDots: "Punkte zählen",
    shapeBuilder: "Formen-Bauer",
    symmetrySpot: "Symmetrie-Suche",
    barChartBuilder: "Diagramm-Bauer",
    diceRoll: "Würfel-Glück",
    coinCounter: "Münzzähler",
    changeMaker: "Wechselgeld-Profi",
    lengthEstimator: "Längen-Schätzer",
    weightBalance: "Waage-Meister",
    sequenceSort: "Zeitlinie Sortieren",
    factSwipe: "Fakten-Check",
    comingSoon: "Bald verfügbar",
    close: "Schließen",
    soon: "Weitere visuelle Spiele kommen bald.",
    dataOrbit: "Daten-Mission",
    kartenKompass: "Karten-Kompass",
    landschaftDetektiv: "Landschafts-Detektiv",
    klimaLabor: "Klima-Labor",
    weltregionenAtlas: "Weltregionen-Atlas",
    menschRaumNetz: "Mensch-Raum-Netz",
    geoDatenCheck: "Geo-Daten-Check",
    zukunftsPlaner: "Zukunfts-Planer",
  },
  hu: {
    title: "Vizuális Labor",
    subtitle: "Interaktív tanulójátékok",
    pickGame: "Válassz játékot",
    formulaBlitz: "Képlet Blitz ⚡",
    meteorCatch: "Csillagfogó",
    orbitSort: "Pálya-rendező",
    signalRunner: "Jelzés-futó",
    constellationBuilder: "Csillagkép-építő",
    memoryRadar: "Memória radar",
    sequenceSort: "Idővonal rendező",
    factSwipe: "Tényellenőrző",
    comingSoon: "Hamarosan",
    close: "Bezárás",
    soon: "További vizuális játékok hamarosan.",
    dataOrbit: "Adatküldetés",
    kartenKompass: "Térképes iránytű",
    landschaftDetektiv: "Tájdetektív",
    klimaLabor: "Klímalabor",
    weltregionenAtlas: "Világrégió-atlasz",
    menschRaumNetz: "Ember és tér háló",
    geoDatenCheck: "Földrajzi adatvizsgáló",
    zukunftsPlaner: "Jövőtervező",
  },
  ro: {
    title: "Laborator Vizual",
    subtitle: "Jocuri educative interactive",
    pickGame: "Alege jocul",
    formulaBlitz: "Formula Blitz ⚡",
    meteorCatch: "Prinde meteorii",
    orbitSort: "Sortare orbitală",
    signalRunner: "Alergător de semnale",
    constellationBuilder: "Constructor constelații",
    memoryRadar: "Radar memorie",
    shapeSorter: "Sortare forme",
    patternMatch: "Maestru tipare",
    colorPattern: "Serie culori",
    countingDots: "Numără punctele",
    shapeBuilder: "Constructor forme",
    symmetrySpot: "Caută simetria",
    barChartBuilder: "Constructor grafice",
    diceRoll: "Aruncarea zarului",
    coinCounter: "Numărător monede",
    changeMaker: "Restul corect",
    lengthEstimator: "Estimator lungime",
    weightBalance: "Maestru balanță",
    sequenceSort: "Sortare Cronologică",
    factSwipe: "Verificare Fapte",
    comingSoon: "În curând",
    close: "Închide",
    soon: "Mai multe jocuri vizuale vin în curând.",
    dataOrbit: "Misiunea Datelor",
    kartenKompass: "Busola hărților",
    landschaftDetektiv: "Detectivul peisajelor",
    klimaLabor: "Laborator climatic",
    weltregionenAtlas: "Atlasul regiunilor lumii",
    menschRaumNetz: "Rețeaua om-spațiu",
    geoDatenCheck: "Verificarea datelor geo",
    zukunftsPlaner: "Planificatorul viitorului",
  },
  en: {
    title: "Visual Lab",
    subtitle: "Interactive learning games",
    pickGame: "Pick a game",
    formulaBlitz: "Formula Blitz ⚡",
    meteorCatch: "Meteor Catch",
    orbitSort: "Orbit Sort",
    signalRunner: "Signal Runner",
    constellationBuilder: "Constellation Builder",
    memoryRadar: "Memory Radar",
    sequenceSort: "Sequence Sort",
    factSwipe: "Fact Swipe",
    comingSoon: "Coming soon",
    close: "Close",
    soon: "More visual games coming soon.",
    dataOrbit: "Data Mission",
    kartenKompass: "Map Compass",
    landschaftDetektiv: "Landscape Detective",
    klimaLabor: "Climate Lab",
    weltregionenAtlas: "World Regions Atlas",
    menschRaumNetz: "Human-Space Network",
    geoDatenCheck: "Geo Data Check",
    zukunftsPlaner: "Future Planner",
  },
};

/* ------------------------------------------------------------------ */
/* Subject → available games                                           */
/* ------------------------------------------------------------------ */

const SUBJECT_GAMES: Record<VisualLabSubject, VisualLabGame[]> = {
  sachkunde: [
    { id: "meteor-catch", type: "spotter", labelKey: "meteorCatch", available: true },
    { id: "orbit-sort", type: "puzzle", labelKey: "orbitSort", available: true },
    { id: "signal-runner", type: "puzzle", labelKey: "signalRunner", available: true },
    { id: "constellation-builder", type: "puzzle", labelKey: "constellationBuilder", available: true },
    { id: "memory-radar", type: "memory", labelKey: "memoryRadar", available: true },
    { id: "sequence-sort", type: "puzzle", labelKey: "sequenceSort", available: true },
    { id: "fact-swipe", type: "spotter", labelKey: "factSwipe", available: true },
  ],
  geographie: [
    { id: "meteor-catch", type: "spotter", labelKey: "meteorCatch", available: true },
    { id: "orbit-sort", type: "puzzle", labelKey: "orbitSort", available: true },
    { id: "signal-runner", type: "puzzle", labelKey: "signalRunner", available: true },
    { id: "constellation-builder", type: "puzzle", labelKey: "constellationBuilder", available: true },
    { id: "memory-radar", type: "memory", labelKey: "memoryRadar", available: true },
    { id: "karten-kompass", type: "puzzle", labelKey: "kartenKompass", available: true },
    { id: "landschaft-detektiv", type: "spotter", labelKey: "landschaftDetektiv", available: true },
    { id: "klima-labor", type: "puzzle", labelKey: "klimaLabor", available: true },
    { id: "weltregionen-atlas", type: "puzzle", labelKey: "weltregionenAtlas", available: true },
    { id: "mensch-raum-netz", type: "puzzle", labelKey: "menschRaumNetz", available: true },
    { id: "geo-daten-check", type: "puzzle", labelKey: "geoDatenCheck", available: true },
    { id: "zukunfts-planer", type: "puzzle", labelKey: "zukunftsPlaner", available: true },
  ],
  geschichte: [
    { id: "meteor-catch", type: "spotter", labelKey: "meteorCatch", available: true },
    { id: "orbit-sort", type: "puzzle", labelKey: "orbitSort", available: true },
    { id: "signal-runner", type: "puzzle", labelKey: "signalRunner", available: true },
    { id: "constellation-builder", type: "puzzle", labelKey: "constellationBuilder", available: true },
    { id: "memory-radar", type: "memory", labelKey: "memoryRadar", available: true },
    { id: "chronik-scanner", type: "spotter", labelKey: "chronikScanner", available: true },
    { id: "epochen-sortierer", type: "puzzle", labelKey: "epochenSortierer", available: true },
    { id: "ursache-wirkung", type: "puzzle", labelKey: "ursacheWirkung", available: true },
    { id: "quellen-labor", type: "puzzle", labelKey: "quellenLabor", available: true },
    { id: "zeitstrahl-analyse", type: "timeline", labelKey: "zeitstrahlAnalyse", available: true },
    { id: "entscheidungs-rat", type: "puzzle", labelKey: "entscheidungsRat", available: true },
    { id: "geschichts-detektiv", type: "spotter", labelKey: "geschichtsDetektiv", available: true },
  ],
  astromath: [
    { id: "math-quest", type: "campaign", labelKey: "mathQuest", available: true },
    { id: "math-campaign", type: "campaign", labelKey: "mathCampaign", available: true },
    { id: "math-ninja", type: "spotter", labelKey: "mathNinja", available: true },
    { id: "math-defender", type: "spotter", labelKey: "mathDefender", available: true },
    { id: "fraction-reactor", type: "puzzle", labelKey: "fractionReactor", available: true },
    { id: "angle-laser", type: "spotter", labelKey: "angleLaser", available: true },
    { id: "time-warp", type: "memory", labelKey: "timeWarp", available: true },
    { id: "star-mapper", type: "puzzle", labelKey: "starMapper", available: true },
    { id: "meteor-scale", type: "puzzle", labelKey: "meteorScale", available: true },
    { id: "data-orbit", type: "puzzle", labelKey: "dataOrbit", available: true },
  ],
  deutsch: [
    { id: "tipp-sturm", type: "spotter", labelKey: "tippSturm", available: true },
    { id: "wort-waechter", type: "spotter", labelKey: "wortWaechter", available: true },
    { id: "artikel-asteroids", type: "puzzle", labelKey: "artikelAsteroids", available: true },
    { id: "satzbau-sniper", type: "spotter", labelKey: "satzbauSniper", available: true },
    { id: "silben-slicer", type: "puzzle", labelKey: "silbenSlicer", available: true },
    { id: "verben-vortex", type: "spotter", labelKey: "verbenVortex", available: true },
    { id: "lese-detektiv", type: "memory", labelKey: "leseDetektiv", available: true },
    { id: "grammatik-scanner", type: "spotter", labelKey: "grammatikScanner", available: true },
    { id: "text-retter", type: "puzzle", labelKey: "textRetter", available: true },
    { id: "wort-netz", type: "puzzle", labelKey: "wortNetz", available: true },
    { id: "schreibwerkstatt", type: "puzzle", labelKey: "schreibwerkstatt", available: true },
    { id: "literatur-lupe", type: "spotter", labelKey: "literaturLupe", available: true },
    { id: "grusel-builder", type: "puzzle", labelKey: "gruselBuilder", available: true },
    { id: "grusel-bild", type: "puzzle", labelKey: "gruselBild", available: true },
  ],
  english: [
    { id: "tipp-sturm", type: "spotter", labelKey: "tippSturm", available: true },
    { id: "wort-waechter", type: "spotter", labelKey: "wortWaechter", available: true },
    { id: "artikel-asteroids", type: "puzzle", labelKey: "artikelAsteroids", available: true },
    { id: "satzbau-sniper", type: "spotter", labelKey: "satzbauSniper", available: true },
    { id: "silben-slicer", type: "puzzle", labelKey: "silbenSlicer", available: true },
    { id: "verben-vortex", type: "spotter", labelKey: "verbenVortex", available: true },
    { id: "lese-detektiv", type: "memory", labelKey: "leseDetektiv", available: true },
    { id: "grammatik-scanner", type: "spotter", labelKey: "grammatikScanner", available: true },
    { id: "text-retter", type: "puzzle", labelKey: "textRetter", available: true },
    { id: "wort-netz", type: "puzzle", labelKey: "wortNetz", available: true },
    { id: "schreibwerkstatt", type: "puzzle", labelKey: "schreibwerkstatt", available: true },
    { id: "literatur-lupe", type: "spotter", labelKey: "literaturLupe", available: true },
  ],
  magyar: [
    { id: "tipp-sturm", type: "spotter", labelKey: "tippSturm", available: true },
    { id: "wort-waechter", type: "spotter", labelKey: "wortWaechter", available: true },
    { id: "artikel-asteroids", type: "puzzle", labelKey: "artikelAsteroids", available: true },
    { id: "satzbau-sniper", type: "spotter", labelKey: "satzbauSniper", available: true },
    { id: "silben-slicer", type: "puzzle", labelKey: "silbenSlicer", available: true },
    { id: "verben-vortex", type: "spotter", labelKey: "verbenVortex", available: true },
    { id: "lese-detektiv", type: "memory", labelKey: "leseDetektiv", available: true },
    { id: "grammatik-scanner", type: "spotter", labelKey: "grammatikScanner", available: true },
    { id: "text-retter", type: "puzzle", labelKey: "textRetter", available: true },
    { id: "wort-netz", type: "puzzle", labelKey: "wortNetz", available: true },
    { id: "schreibwerkstatt", type: "puzzle", labelKey: "schreibwerkstatt", available: true },
    { id: "literatur-lupe", type: "spotter", labelKey: "literaturLupe", available: true },
  ],
  romana: [
    { id: "tipp-sturm", type: "spotter", labelKey: "tippSturm", available: true },
    { id: "wort-waechter", type: "spotter", labelKey: "wortWaechter", available: true },
    { id: "artikel-asteroids", type: "puzzle", labelKey: "artikelAsteroids", available: true },
    { id: "satzbau-sniper", type: "spotter", labelKey: "satzbauSniper", available: true },
    { id: "silben-slicer", type: "puzzle", labelKey: "silbenSlicer", available: true },
    { id: "verben-vortex", type: "spotter", labelKey: "verbenVortex", available: true },
    { id: "lese-detektiv", type: "memory", labelKey: "leseDetektiv", available: true },
    { id: "grammatik-scanner", type: "spotter", labelKey: "grammatikScanner", available: true },
    { id: "text-retter", type: "puzzle", labelKey: "textRetter", available: true },
    { id: "wort-netz", type: "puzzle", labelKey: "wortNetz", available: true },
    { id: "schreibwerkstatt", type: "puzzle", labelKey: "schreibwerkstatt", available: true },
    { id: "literatur-lupe", type: "spotter", labelKey: "literaturLupe", available: true },
  ],
  informatika: [
    { id: "binary-bit-stream", type: "spotter", labelKey: "binaryBitStream", available: true },
    { id: "code-commander", type: "puzzle", labelKey: "codeCommander", available: true },
    { id: "hardware-hero", type: "puzzle", labelKey: "hardwareHero", available: true },
    { id: "packet-path", type: "puzzle", labelKey: "packetPath", available: true },
    { id: "virus-vault", type: "spotter", labelKey: "virusVault", available: true },
    { id: "daten-scanner", type: "spotter", labelKey: "datenScanner", available: true },
    { id: "system-sortierer", type: "puzzle", labelKey: "systemSortierer", available: true },
    { id: "algorithmus-labor", type: "puzzle", labelKey: "algorithmusLabor", available: true },
    { id: "netzwerk-router", type: "puzzle", labelKey: "netzwerkRouter", available: true },
    { id: "cyber-schutz", type: "spotter", labelKey: "cyberSchutz", available: true },
    { id: "debug-mission", type: "puzzle", labelKey: "debugMission", available: true },
    { id: "code-detektiv", type: "spotter", labelKey: "codeDetektiv", available: true },
  ],
  physik: [
    { id: "formula-blitz", type: "spotter", labelKey: "formulaBlitz", available: true },
    { id: "meteor-catch", type: "spotter", labelKey: "meteorCatch", available: true },
    { id: "orbit-sort", type: "puzzle", labelKey: "orbitSort", available: true },
    { id: "signal-runner", type: "puzzle", labelKey: "signalRunner", available: true },
    { id: "constellation-builder", type: "puzzle", labelKey: "constellationBuilder", available: true },
    { id: "memory-radar", type: "memory", labelKey: "memoryRadar", available: true },
    { id: "kraft-labor", type: "spotter", labelKey: "kraftLabor", available: true },
    { id: "schaltkreis-werkstatt", type: "puzzle", labelKey: "schaltkreisWerkstatt", available: true },
    { id: "optik-laser", type: "spotter", labelKey: "optikLaser", available: true },
    { id: "energie-manager", type: "puzzle", labelKey: "energieManager", available: true },
    { id: "messdaten-analyse", type: "puzzle", labelKey: "messdatenAnalyse", available: true },
    { id: "experiment-check", type: "spotter", labelKey: "experimentCheck", available: true },
    { id: "formel-detektiv", type: "puzzle", labelKey: "formelDetektiv", available: true },
  ],
  kemia: [
    { id: "meteor-catch", type: "spotter", labelKey: "meteorCatch", available: true },
    { id: "orbit-sort", type: "puzzle", labelKey: "orbitSort", available: true },
    { id: "signal-runner", type: "puzzle", labelKey: "signalRunner", available: true },
    { id: "constellation-builder", type: "puzzle", labelKey: "constellationBuilder", available: true },
    { id: "memory-radar", type: "memory", labelKey: "memoryRadar", available: true },
    { id: "stoff-scanner", type: "spotter", labelKey: "stoffScanner", available: true },
    { id: "element-sortierer", type: "puzzle", labelKey: "elementSortierer", available: true },
    { id: "reaktions-puzzle", type: "puzzle", labelKey: "reaktionsPuzzle", available: true },
    { id: "bindungs-labor", type: "puzzle", labelKey: "bindungsLabor", available: true },
    { id: "ph-analyse", type: "spotter", labelKey: "phAnalyse", available: true },
    { id: "sicherheits-check", type: "spotter", labelKey: "sicherheitsCheck", available: true },
    { id: "chemie-detektiv", type: "puzzle", labelKey: "chemieDetektiv", available: true },
  ],
  biologie: [
    { id: "meteor-catch", type: "spotter", labelKey: "meteorCatch", available: true },
    { id: "orbit-sort", type: "puzzle", labelKey: "orbitSort", available: true },
    { id: "signal-runner", type: "puzzle", labelKey: "signalRunner", available: true },
    { id: "constellation-builder", type: "puzzle", labelKey: "constellationBuilder", available: true },
    { id: "memory-radar", type: "memory", labelKey: "memoryRadar", available: true },
    { id: "mikro-scanner", type: "spotter", labelKey: "mikroScanner", available: true },
    { id: "bio-sortierstation", type: "puzzle", labelKey: "bioSortierstation", available: true },
    { id: "prozess-puzzle", type: "puzzle", labelKey: "prozessPuzzle", available: true },
    { id: "system-netz", type: "puzzle", labelKey: "systemNetz", available: true },
    { id: "lebensraum-detektiv", type: "spotter", labelKey: "lebensraumDetektiv", available: true },
    { id: "forschungs-check", type: "spotter", labelKey: "forschungsCheck", available: true },
    { id: "gesundheits-mission", type: "puzzle", labelKey: "gesundheitsMission", available: true },
  ],
};

function isVisualLabGameAvailable(subject: VisualLabSubject, gameId: string, grade: number): boolean {
  const game = SUBJECT_GAMES[subject]?.find((candidate) => candidate.id === gameId);
  if (!game?.available || !Number.isInteger(grade) || grade < 1 || grade > 8) return false;

  if (subject === "sachkunde") return grade <= 4;
  if (subject === "astromath") return isMathGameAvailableForGrade(gameId, grade);
  if (subject === "geographie") return isGeographyGameAvailableForGrade(gameId, grade);
  if (subject === "biologie") return isBiologyGameAvailableForGrade(gameId, grade);
  if (subject === "physik") return isPhysicsGameAvailableForGrade(gameId, grade);
  if (subject === "kemia") return isChemistryGameAvailableForGrade(gameId, grade);
  if (subject === "geschichte") return isHistoryGameAvailableForGrade(gameId, grade);
  if (subject === "informatika") return isInformaticsGameAvailableForGrade(gameId, grade);
  if (["deutsch", "english", "magyar", "romana"].includes(subject) && !gameId.startsWith("grusel-")) {
    return isLanguageGameAvailableForGrade(gameId, grade);
  }
  return true;
}
const ADVANCED_LABELS: Record<Lang, Record<string, string>> = {
  de: {
    mathQuest: "Zahlenwelten",
    mathNinja: "Math Ninja",
    mathCampaign: "Math Odyssey",
    mathDefender: "Astro Defender",
    fractionReactor: "Bruchreaktor",
    angleLaser: "Winkellaser",
    timeWarp: "Zeitsprung",
    starMapper: "Sternenkartograf",
    meteorScale: "Meteorskala",
    gruselBuilder: "Grusel-Baukasten 👻",
    gruselBild: "Bild-Geschichte 🖼️",
    tippSturm: "TippSturm ⚡",
    wortWaechter: "Wort-Wächter 🔤",
    artikelAsteroids: "Artikel-Asteroiden 🪐",
    satzbauSniper: "Satzbau-Sniper 🎯",
    silbenSlicer: "Silben-Slicer ✂️",
    verbenVortex: "Verben-Vortex",
    leseDetektiv: "Lese-Detektiv",
    grammatikScanner: "Grammatik-Scanner",
    textRetter: "Text-Retter",
    wortNetz: "Wort-Netz",
    schreibwerkstatt: "Schreibwerkstatt",
    literaturLupe: "Literatur-Lupe",
    mikroScanner: "Mikro-Scanner",
    bioSortierstation: "Bio-Sortierstation",
    prozessPuzzle: "Prozess-Puzzle",
    systemNetz: "System-Netz",
    lebensraumDetektiv: "Lebensraum-Detektiv",
    forschungsCheck: "Forschungs-Check",
    gesundheitsMission: "Gesundheits-Mission",
    kraftLabor: "Physik-Scanner",
    schaltkreisWerkstatt: "System-Werkstatt",
    optikLaser: "Ablauf-Laser",
    energieManager: "Zusammenhang-Netz",
    messdatenAnalyse: "Muster-Analyse",
    experimentCheck: "Experiment-Check",
    formelDetektiv: "Physik-Detektiv",
    stoffScanner: "Stoff-Scanner",
    elementSortierer: "Element-Sortierer",
    reaktionsPuzzle: "Reaktions-Puzzle",
    bindungsLabor: "Bindungs-Labor",
    phAnalyse: "pH-Analyse",
    sicherheitsCheck: "Sicherheits-Check",
    chemieDetektiv: "Chemie-Detektiv",chronikScanner: "Chronik-Scanner",
    epochenSortierer: "Epochen-Sortierer",
    ursacheWirkung: "Ursache und Wirkung",
    quellenLabor: "Quellen-Labor",
    zeitstrahlAnalyse: "Zeitstrahl-Analyse",
    entscheidungsRat: "Historischer Rat",
    geschichtsDetektiv: "Geschichtsdetektiv",
    datenScanner: "Daten-Scanner",
    systemSortierer: "System-Sortierer",
    algorithmusLabor: "Algorithmus-Labor",
    netzwerkRouter: "Netzwerk-Router",
    cyberSchutz: "Cyber-Schutz",
    debugMission: "Debug-Mission",
    codeDetektiv: "Code-Detektiv",
    binaryBitStream: "Bit-Strom 💾",
    codeCommander: "Code-Kommandeur 🤖",
    hardwareHero: "Hardware-Held 🖥️",
    packetPath: "Paket-Pfad 🌐",
    virusVault: "Virus-Tresor 🔐",
  },
  hu: {
    mathQuest: "Számvilágok",
    mathNinja: "Math Ninja",
    mathCampaign: "Math Odyssey",
    mathDefender: "Astro Defender",
    fractionReactor: "Tört Reaktor",
    angleLaser: "Szöglézer",
    timeWarp: "Időugrás",
    starMapper: "Csillagtérképész",
    meteorScale: "Meteormérleg",
    gruselBuilder: "Grusel-Baukasten 👻",
    gruselBild: "Kép-Történet 🖼️",
    tippSturm: "TippSturm ⚡",
    wortWaechter: "Szó-Őrző 🔤",
    artikelAsteroids: "Névelő-Aszteroidák 🪐",
    satzbauSniper: "Mondatépítő 🎯",
    silbenSlicer: "Szótag-Vágó ✂️",
    verbenVortex: "Igeörvény",
    leseDetektiv: "Olvasódetektív",
    grammatikScanner: "Nyelvtanszkenner",
    textRetter: "Szövegmenő",
    wortNetz: "Szóháló",
    schreibwerkstatt: "Íróműhely",
    literaturLupe: "Irodalmi nagyító",
    mikroScanner: "Mikroszkenner",
    bioSortierstation: "Biorendszerező",
    prozessPuzzle: "Folyamatkirakó",
    systemNetz: "Rendszerháló",
    lebensraumDetektiv: "Élőhelydetektív",
    forschungsCheck: "Kutatásellenőrző",
    gesundheitsMission: "Egészségküldetés",
    kraftLabor: "Fizikaszkenner",
    schaltkreisWerkstatt: "Rendszerműhely",
    optikLaser: "Folyamatlézer",
    energieManager: "Összefüggésháló",
    messdatenAnalyse: "Mintaelemző",
    experimentCheck: "Kísérletellenőrző",
    formelDetektiv: "Fizikadetektív",
    stoffScanner: "Anyagszkenner",
    elementSortierer: "Elemválogató",
    reaktionsPuzzle: "Reakciókirakó",
    bindungsLabor: "Kötéslabor",
    phAnalyse: "pH-elemző",
    sicherheitsCheck: "Biztonsági ellenőrzés",
    chemieDetektiv: "Kémiadetektív",chronikScanner: "Krónikaszkenner",
    epochenSortierer: "Korszakrendező",
    ursacheWirkung: "Ok és következmény",
    quellenLabor: "Forráslabor",
    zeitstrahlAnalyse: "Idővonal-elemzés",
    entscheidungsRat: "Történelmi tanács",
    geschichtsDetektiv: "Történelmi nyomozó",
    datenScanner: "Adatszkenner",
    systemSortierer: "Rendszerrendező",
    algorithmusLabor: "Algoritmuslabor",
    netzwerkRouter: "Hálózati útválasztó",
    cyberSchutz: "Kibervédelem",
    debugMission: "Hibakereső küldetés",
    codeDetektiv: "Kóddetektív",
    binaryBitStream: "Bit-Folyam 💾",
    codeCommander: "Kód-Parancsnok 🤖",
    hardwareHero: "Hardver-Hős 🖥️",
    packetPath: "Adatcsomag Útvonal 🌐",
    virusVault: "Vírus-Páncélszekrény 🔐",
  },
  ro: {
    mathQuest: "Lumile Numerelor",
    mathNinja: "Math Ninja",
    mathCampaign: "Math Odyssey",
    mathDefender: "Astro Defender",
    fractionReactor: "Reactor de Fracții",
    angleLaser: "Laser de Unghiuri",
    timeWarp: "Salt Temporal",
    starMapper: "Cartograf Stelar",
    meteorScale: "Balanță Meteorică",
    gruselBuilder: "Grusel-Baukasten 👻",
    gruselBild: "Poveste cu Imagini 🖼️",
    tippSturm: "TippSturm ⚡",
    wortWaechter: "Paznicul Cuvintelor 🔤",
    artikelAsteroids: "Asteroizi cu Articole 🪐",
    satzbauSniper: "Sniper de Propoziții 🎯",
    silbenSlicer: "Tăiător de Silabe ✂️",
    verbenVortex: "Vârtej de verbe",
    leseDetektiv: "Detectivul lecturii",
    grammatikScanner: "Scaner gramatical",
    textRetter: "Salvatorul textului",
    wortNetz: "Rețeaua cuvintelor",
    schreibwerkstatt: "Atelier de scriere",
    literaturLupe: "Lupa literară",
    mikroScanner: "Micro-scaner",
    bioSortierstation: "Stația de clasificare",
    prozessPuzzle: "Puzzle de procese",
    systemNetz: "Rețeaua sistemelor",
    lebensraumDetektiv: "Detectivul habitatelor",
    forschungsCheck: "Verificarea cercetării",
    gesundheitsMission: "Misiunea sănătății",
    kraftLabor: "Scaner de fizică",
    schaltkreisWerkstatt: "Atelier de sisteme",
    optikLaser: "Laser de procese",
    energieManager: "Rețeaua relațiilor",
    messdatenAnalyse: "Analiza modelelor",
    experimentCheck: "Verificarea experimentului",
    formelDetektiv: "Detectivul fizicii",
    stoffScanner: "Scaner de substanțe",
    elementSortierer: "Sortator de elemente",
    reaktionsPuzzle: "Puzzle de reacții",
    bindungsLabor: "Laborator de legături",
    phAnalyse: "Analiza pH",
    sicherheitsCheck: "Control de siguranță",
    chemieDetektiv: "Detectivul chimiei",chronikScanner: "Scaner de cronici",
    epochenSortierer: "Sortator de epoci",
    ursacheWirkung: "Cauză și efect",
    quellenLabor: "Laborator de surse",
    zeitstrahlAnalyse: "Analiza cronologiei",
    entscheidungsRat: "Consiliu istoric",
    geschichtsDetektiv: "Detectiv istoric",
    datenScanner: "Scaner de date",
    systemSortierer: "Sortator de sisteme",
    algorithmusLabor: "Laborator de algoritmi",
    netzwerkRouter: "Router de rețea",
    cyberSchutz: "Protecție cibernetică",
    debugMission: "Misiune de depanare",
    codeDetektiv: "Detectiv de cod",
    binaryBitStream: "Flux Binar 💾",
    codeCommander: "Comandant Cod 🤖",
    hardwareHero: "Erou Hardware 🖥️",
    packetPath: "Rută Pachete 🌐",
    virusVault: "Seiful Virușilor 🔐",
  },
  en: {
    mathQuest: "Number Worlds",
    mathNinja: "Math Ninja",
    mathCampaign: "Math Odyssey",
    mathDefender: "Astro Defender",
    fractionReactor: "Fraction Reactor",
    angleLaser: "Angle Laser",
    timeWarp: "Time Warp",
    starMapper: "Star Mapper",
    meteorScale: "Meteor Scale",
    gruselBuilder: "Grusel-Baukasten 👻",
    gruselBild: "Picture Story 🖼️",
    tippSturm: "TippSturm ⚡",
    wortWaechter: "Word Guardian 🔤",
    artikelAsteroids: "Article Asteroids 🪐",
    satzbauSniper: "Sentence Sniper 🎯",
    silbenSlicer: "Syllable Slicer ✂️",
    verbenVortex: "Verb Vortex",
    leseDetektiv: "Reading Detective",
    grammatikScanner: "Grammar Scanner",
    textRetter: "Text Rescuer",
    wortNetz: "Word Network",
    schreibwerkstatt: "Writing Workshop",
    literaturLupe: "Literature Lens",
    mikroScanner: "Micro Scanner",
    bioSortierstation: "Bio Sorting Station",
    prozessPuzzle: "Process Puzzle",
    systemNetz: "Systems Network",
    lebensraumDetektiv: "Habitat Detective",
    forschungsCheck: "Research Check",
    gesundheitsMission: "Health Mission",
    kraftLabor: "Physics Scanner",
    schaltkreisWerkstatt: "Systems Workshop",
    optikLaser: "Sequence Laser",
    energieManager: "Connection Network",
    messdatenAnalyse: "Pattern Analysis",
    experimentCheck: "Experiment Check",
    formelDetektiv: "Physics Detective",
    stoffScanner: "Matter Scanner",
    elementSortierer: "Element Sorter",
    reaktionsPuzzle: "Reaction Puzzle",
    bindungsLabor: "Bond Lab",
    phAnalyse: "pH Analysis",
    sicherheitsCheck: "Safety Check",
    chemieDetektiv: "Chemistry Detective",chronikScanner: "Chronicle Scanner",
    epochenSortierer: "Era Sorter",
    ursacheWirkung: "Cause and Effect",
    quellenLabor: "Source Lab",
    zeitstrahlAnalyse: "Timeline Analysis",
    entscheidungsRat: "History Council",
    geschichtsDetektiv: "History Detective",
    datenScanner: "Data Scanner",
    systemSortierer: "System Sorter",
    algorithmusLabor: "Algorithm Lab",
    netzwerkRouter: "Network Router",
    cyberSchutz: "Cyber Shield",
    debugMission: "Debug Mission",
    codeDetektiv: "Code Detective",
    binaryBitStream: "Bit Stream 💾",
    codeCommander: "Code Commander 🤖",
    hardwareHero: "Hardware Hero 🖥️",
    packetPath: "Packet Path 🌐",
    virusVault: "Virus Vault 🔐",
  },
};

// Merge advanced labels into T
for (const lg of ["de", "hu", "ro", "en"] as Lang[]) {
  Object.assign(T[lg], ADVANCED_LABELS[lg]);
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

function VisualLabInner({ subject, grade, lang, open, onClose, initialGameId }: VisualLabProps) {
  const [activeGame, setActiveGame] = useState<string | null>(() =>
    initialGameId && isVisualLabGameAvailable(subject, initialGameId, grade) ? initialGameId : null,
  );
  const t = T[lang] ?? T.en;
  const games = (SUBJECT_GAMES[subject] ?? []).filter((game) =>
    isVisualLabGameAvailable(subject, game.id, grade),
  );
  const isOpen = open;

  useEffect(() => {
    setActiveGame(initialGameId && isVisualLabGameAvailable(subject, initialGameId, grade) ? initialGameId : null);
  }, [grade, initialGameId, subject]);

  useEffect(() => {
    if (activeGame && !isVisualLabGameAvailable(subject, activeGame, grade)) setActiveGame(null);
  }, [activeGame, grade, subject]);
  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  function handleClose() {
    onClose();
  }

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="vlab-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-[#020408]/95 backdrop-blur-md flex flex-col"
          style={{ overscrollBehavior: "contain", touchAction: "pan-y" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="visual-lab-title"
        >
          {/* Header */}
          <header className="flex items-center justify-between px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 border-b border-cyan-500/20">
            <div className="flex items-center gap-3">
              <VisualLabIcon size={36} />
              <div>
                <h1 id="visual-lab-title" className="text-white/90 text-base font-semibold leading-tight">
                  {t.title}
                </h1>
                <p className="text-white/60 text-xs">{t.subtitle}</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/5 transition"
              aria-label={t.close}
            >
              <X size={22} />
            </button>
          </header>

          {/* Body */}
          <div className="flex-1 min-h-0 overflow-y-auto px-3 sm:px-4 pt-4 sm:pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            {!activeGame ? (
              <GamePicker games={games} t={t} onPick={(id) => setActiveGame(id)} />
            ) : (
              <GameHost
                gameId={activeGame}
                subject={subject}
                grade={grade}
                lang={lang}
                t={t}
                onBack={() => setActiveGame(null)}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function VisualLab(props: VisualLabProps) {
  return <VisualLabInner {...props} />;
}

/* ------------------------------------------------------------------ */
/* GamePicker — choose which visual game                               */
/* ------------------------------------------------------------------ */

const GAME_ICONS: Record<string, { icon: LucideIcon; tone: string }> = {
  "meteor-catch": { icon: Crosshair, tone: "border-orange-300/30 bg-orange-400/10 text-orange-200" },
  "orbit-sort": { icon: Orbit, tone: "border-indigo-300/30 bg-indigo-400/10 text-indigo-200" },
  "signal-runner": { icon: RadioTower, tone: "border-cyan-300/30 bg-cyan-400/10 text-cyan-200" },
  "constellation-builder": { icon: Sparkles, tone: "border-violet-300/30 bg-violet-400/10 text-violet-200" },
  "memory-radar": { icon: Brain, tone: "border-pink-300/30 bg-pink-400/10 text-pink-200" },
  "tipp-sturm": { icon: Keyboard, tone: "border-cyan-300/30 bg-cyan-400/10 text-cyan-200" },
  "wort-waechter": { icon: ShieldCheck, tone: "border-emerald-300/30 bg-emerald-400/10 text-emerald-200" },
  "artikel-asteroids": { icon: Languages, tone: "border-amber-300/30 bg-amber-400/10 text-amber-200" },
  "satzbau-sniper": { icon: ListTree, tone: "border-sky-300/30 bg-sky-400/10 text-sky-200" },
  "silben-slicer": { icon: Scissors, tone: "border-rose-300/30 bg-rose-400/10 text-rose-200" },
  "verben-vortex": { icon: RefreshCw, tone: "border-violet-300/30 bg-violet-400/10 text-violet-200" },
  "grusel-builder": { icon: Ghost, tone: "border-fuchsia-300/30 bg-fuchsia-400/10 text-fuchsia-200" },
  "grusel-bild": { icon: Image, tone: "border-purple-300/30 bg-purple-400/10 text-purple-200" },
  "math-quest": { icon: Gamepad2, tone: "border-teal-300/30 bg-teal-400/10 text-teal-300" },
  "math-campaign": { icon: Rocket, tone: "border-amber-300/30 bg-amber-400/10 text-amber-300" },
  "math-ninja": { icon: Swords, tone: "border-rose-300/30 bg-rose-400/10 text-rose-300" },
  "math-defender": { icon: Shield, tone: "border-violet-300/30 bg-violet-400/10 text-violet-300" },
  "fraction-reactor": { icon: ChartPie, tone: "border-emerald-300/30 bg-emerald-400/10 text-emerald-300" },
  "angle-laser": { icon: Crosshair, tone: "border-orange-300/30 bg-orange-400/10 text-orange-300" },
  "time-warp": { icon: Clock3, tone: "border-pink-300/30 bg-pink-400/10 text-pink-300" },
  "star-mapper": { icon: MapPinned, tone: "border-sky-300/30 bg-sky-400/10 text-sky-300" },
  "meteor-scale": { icon: Scale, tone: "border-yellow-300/30 bg-yellow-400/10 text-yellow-300" },
  "data-orbit": { icon: ChartNoAxesColumn, tone: "border-cyan-300/30 bg-cyan-400/10 text-cyan-300" },
  "lese-detektiv": { icon: BookOpenCheck, tone: "border-amber-300/30 bg-amber-400/10 text-amber-200" },
  "grammatik-scanner": { icon: ScanText, tone: "border-sky-300/30 bg-sky-400/10 text-sky-200" },
  "text-retter": { icon: SpellCheck2, tone: "border-emerald-300/30 bg-emerald-400/10 text-emerald-200" },
  "wort-netz": { icon: Network, tone: "border-violet-300/30 bg-violet-400/10 text-violet-200" },
  "schreibwerkstatt": { icon: PenLine, tone: "border-rose-300/30 bg-rose-400/10 text-rose-200" },
  "literatur-lupe": { icon: SearchCheck, tone: "border-fuchsia-300/30 bg-fuchsia-400/10 text-fuchsia-200" },
  "karten-kompass": { icon: Compass, tone: "border-cyan-300/30 bg-cyan-400/10 text-cyan-200" },
  "landschaft-detektiv": { icon: Landmark, tone: "border-amber-300/30 bg-amber-400/10 text-amber-200" },
  "klima-labor": { icon: CloudSun, tone: "border-sky-300/30 bg-sky-400/10 text-sky-200" },
  "weltregionen-atlas": { icon: MapPinned, tone: "border-indigo-300/30 bg-indigo-400/10 text-indigo-200" },
  "mensch-raum-netz": { icon: Network, tone: "border-violet-300/30 bg-violet-400/10 text-violet-200" },
  "geo-daten-check": { icon: ChartNoAxesColumn, tone: "border-blue-300/30 bg-blue-400/10 text-blue-200" },
  "zukunfts-planer": { icon: Leaf, tone: "border-emerald-300/30 bg-emerald-400/10 text-emerald-200" },
  "mikro-scanner": { icon: Microscope, tone: "border-cyan-300/30 bg-cyan-400/10 text-cyan-200" },
  "bio-sortierstation": { icon: Boxes, tone: "border-violet-300/30 bg-violet-400/10 text-violet-200" },
  "prozess-puzzle": { icon: Workflow, tone: "border-amber-300/30 bg-amber-400/10 text-amber-200" },
  "system-netz": { icon: Network, tone: "border-emerald-300/30 bg-emerald-400/10 text-emerald-200" },
  "lebensraum-detektiv": { icon: Trees, tone: "border-lime-300/30 bg-lime-400/10 text-lime-200" },
  "forschungs-check": { icon: FlaskConical, tone: "border-sky-300/30 bg-sky-400/10 text-sky-200" },
  "gesundheits-mission": { icon: HeartPulse, tone: "border-rose-300/30 bg-rose-400/10 text-rose-200" },
  "kraft-labor": { icon: Scale, tone: "border-orange-300/30 bg-orange-400/10 text-orange-200" },
  "schaltkreis-werkstatt": { icon: Network, tone: "border-yellow-300/30 bg-yellow-400/10 text-yellow-200" },
  "optik-laser": { icon: Crosshair, tone: "border-fuchsia-300/30 bg-fuchsia-400/10 text-fuchsia-200" },
  "energie-manager": { icon: Sparkles, tone: "border-emerald-300/30 bg-emerald-400/10 text-emerald-200" },
  "messdaten-analyse": { icon: ChartNoAxesColumn, tone: "border-sky-300/30 bg-sky-400/10 text-sky-200" },
  "experiment-check": { icon: FlaskConical, tone: "border-cyan-300/30 bg-cyan-400/10 text-cyan-200" },
  "formel-detektiv": { icon: Puzzle, tone: "border-violet-300/30 bg-violet-400/10 text-violet-200" },
  "stoff-scanner": { icon: SearchCheck, tone: "border-orange-300/30 bg-orange-400/10 text-orange-200" },
  "element-sortierer": { icon: Boxes, tone: "border-amber-300/30 bg-amber-400/10 text-amber-200" },
  "reaktions-puzzle": { icon: Workflow, tone: "border-fuchsia-300/30 bg-fuchsia-400/10 text-fuchsia-200" },
  "bindungs-labor": { icon: Network, tone: "border-emerald-300/30 bg-emerald-400/10 text-emerald-200" },
  "ph-analyse": { icon: ChartNoAxesColumn, tone: "border-sky-300/30 bg-sky-400/10 text-sky-200" },
  "sicherheits-check": { icon: ShieldCheck, tone: "border-cyan-300/30 bg-cyan-400/10 text-cyan-200" },
  "chemie-detektiv": { icon: FlaskConical, tone: "border-violet-300/30 bg-violet-400/10 text-violet-200" },
  "chronik-scanner": { icon: SearchCheck, tone: "border-amber-300/30 bg-amber-400/10 text-amber-200" },
  "epochen-sortierer": { icon: ListTree, tone: "border-orange-300/30 bg-orange-400/10 text-orange-200" },
  "ursache-wirkung": { icon: Workflow, tone: "border-rose-300/30 bg-rose-400/10 text-rose-200" },
  "quellen-labor": { icon: BookOpenCheck, tone: "border-sky-300/30 bg-sky-400/10 text-sky-200" },
  "zeitstrahl-analyse": { icon: Clock3, tone: "border-violet-300/30 bg-violet-400/10 text-violet-200" },
  "entscheidungs-rat": { icon: Landmark, tone: "border-cyan-300/30 bg-cyan-400/10 text-cyan-200" },
  "geschichts-detektiv": { icon: SearchCheck, tone: "border-emerald-300/30 bg-emerald-400/10 text-emerald-200" },
  "binary-bit-stream": { icon: RadioTower, tone: "border-cyan-300/30 bg-cyan-400/10 text-cyan-200" },
  "code-commander": { icon: ListTree, tone: "border-emerald-300/30 bg-emerald-400/10 text-emerald-200" },
  "hardware-hero": { icon: Boxes, tone: "border-indigo-300/30 bg-indigo-400/10 text-indigo-200" },
  "packet-path": { icon: Network, tone: "border-violet-300/30 bg-violet-400/10 text-violet-200" },
  "virus-vault": { icon: ShieldCheck, tone: "border-rose-300/30 bg-rose-400/10 text-rose-200" },
  "daten-scanner": { icon: ChartNoAxesColumn, tone: "border-cyan-300/30 bg-cyan-400/10 text-cyan-200" },
  "system-sortierer": { icon: Boxes, tone: "border-indigo-300/30 bg-indigo-400/10 text-indigo-200" },
  "algorithmus-labor": { icon: Workflow, tone: "border-emerald-300/30 bg-emerald-400/10 text-emerald-200" },
  "netzwerk-router": { icon: Network, tone: "border-violet-300/30 bg-violet-400/10 text-violet-200" },
  "cyber-schutz": { icon: ShieldCheck, tone: "border-sky-300/30 bg-sky-400/10 text-sky-200" },
  "debug-mission": { icon: SearchCheck, tone: "border-rose-300/30 bg-rose-400/10 text-rose-200" },
  "code-detektiv": { icon: ScanText, tone: "border-amber-300/30 bg-amber-400/10 text-amber-200" },
};

function gameIcon(game: VisualLabGame) {
  const fallbackIcon = game.type === "timeline" ? Landmark : game.type === "campaign" ? Star : Puzzle;
  const config = GAME_ICONS[game.id];
  const Icon = config?.icon ?? fallbackIcon;
  const tone = game.available ? config?.tone ?? "border-cyan-300/25 bg-cyan-400/10 text-cyan-300" : "border-white/10 bg-white/5 text-white/40";
  return <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${tone}`}><Icon size={23} aria-hidden="true" /></span>;
}

function GamePicker({
  games,
  t,
  onPick,
}: {
  games: VisualLabGame[];
  t: Record<string, string>;
  onPick: (id: string) => void;
}) {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-white/80 text-sm uppercase tracking-wider mb-4">
        {t.pickGame}
      </h2>
      {games.length === 0 ? (
        <div className="rounded-xl border border-amber-300/30 bg-amber-950/30 p-5 text-center text-white" role="alert">
          <p className="text-sm font-bold">{t.soon}</p>
        </div>
      ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {games.map((g) => (
          <button
            key={g.id}
            onClick={() => g.available && onPick(g.id)}
            disabled={!g.available}
            className={`
              relative rounded-xl border p-4 text-left transition
              ${g.available
                ? "border-cyan-400/40 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-400/60 cursor-pointer"
                : "border-white/10 bg-white/[0.02] opacity-60 cursor-not-allowed"}
            `}
          >
            <div className="flex items-center gap-3">
              {gameIcon(g)}
              <div className="flex-1">
                <div className="text-white/90 font-medium">{t[g.labelKey] ?? g.id}</div>
                {!g.available && (
                  <div className="text-white/50 text-xs mt-0.5">{t.comingSoon}</div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
      )}

      {games.length > 0 && <div className="mt-8 text-center text-white/50 text-sm border border-white/10 rounded-lg p-4 bg-white/[0.02]">
        {t.soon}
      </div>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* GameHost — placeholder until games are wired in                     */
/* ------------------------------------------------------------------ */

function GameHost({
  gameId,
  subject,
  grade,
  lang,
  t,
  onBack,
}: {
  gameId: string;
  subject: VisualLabSubject;
  grade: number;
  lang: Lang;
  t: Record<string, string>;
  onBack: () => void;
}) {
  const scheduleTimeout = useTimeoutRegistry();
  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="text-cyan-300 hover:text-cyan-200 text-sm mb-4 shrink-0"
      >
        ← {t.pickGame}
      </button>

      {subject === "astromath" ? (
        <AstromathGameSwitch gameId={gameId} grade={grade} lang={lang} tSoon={t.soon} />
      ) : ["deutsch", "english", "magyar", "romana"].includes(subject) ? (
        <DeutschGameSwitch gameId={gameId} grade={grade} lang={lang} tSoon={t.soon} />
      ) : subject === "informatika" ? (
        <InformatikaGameSwitch gameId={gameId} grade={grade} lang={lang} tSoon={t.soon} onDone={() => scheduleTimeout(onBack, 2500)} />
      ) : subject === "geographie" ? (
        <GeographieGameSwitch gameId={gameId} grade={grade} lang={lang} tSoon={t.soon} />
      ) : subject === "physik" ? (
        <PhysikGameSwitch gameId={gameId} grade={grade} lang={lang} tSoon={t.soon} />
      ) : subject === "kemia" ? (
        <KemiaGameSwitch gameId={gameId} grade={grade} lang={lang} tSoon={t.soon} />
      ) : subject === "biologie" ? (
        <BiologieGameSwitch gameId={gameId} grade={grade} lang={lang} tSoon={t.soon} />
      ) : subject === "geschichte" ? (
        <GeschichteGameSwitch gameId={gameId} grade={grade} lang={lang} tSoon={t.soon} />
      ) : (
        <SachkundeGameSwitch gameId={gameId} grade={grade} lang={lang} tSoon={t.soon} />
      )}
    </div>
  );
}

function pickRound<T>(arr: T[] | undefined, fallback: T[] | undefined, seed = "visual-lab"): T | undefined {
  const src = (arr && arr.length > 0) ? arr : (fallback && fallback.length > 0 ? fallback : undefined);
  if (!src || src.length === 0) return undefined;
  const identitySeed = src
    .map((item, index) => {
      if (item && typeof item === "object") {
        const candidate = item as { id?: string; slug?: string; key?: string; name?: string };
        return candidate.id ?? candidate.slug ?? candidate.key ?? candidate.name ?? `${index}`;
      }
      return `${item ?? index}`;
    })
    .join("|");
  return shuffleDeterministic(src, `${seed}:${identitySeed}`)[0];
}

function AstromathGameSwitch({
  gameId,
  grade,
  lang,
  tSoon,
  }: {
    gameId: string;
    grade: number;
    lang: Lang;
    tSoon: string;
  }) {
    if (!isMathGameAvailableForGrade(gameId, grade)) {
      return <FallbackBox title={gameId} info={tSoon} />;
    }
    if (gameId === "math-campaign") {
      return <MathCampaignGame grade={grade} lang={lang} />;
    }
    if (gameId === "math-quest") {
      return <MathQuestGame grade={grade} lang={lang} />;
    }
    if (gameId === "math-ninja") {
      return <MathNinjaGame grade={grade} lang={lang} />;
    }
  if (gameId === "math-defender") {
    return <MathDefenderGame grade={grade} lang={lang} />;
  }
  if (gameId === "fraction-reactor") {
    return <FractionReactorGame grade={grade} lang={lang} />;
  }
  if (gameId === "angle-laser") {
    return <AngleLaserGame grade={grade} lang={lang} />;
  }
  if (gameId === "time-warp") {
    return <TimeWarpGame grade={grade} lang={lang} />;
  }
  if (gameId === "star-mapper") {
    return <StarMapperGame grade={grade} lang={lang} />;
  }
  if (gameId === "meteor-scale") {
    return <MeteorScaleGame grade={grade} lang={lang} />;
  }
  if (gameId === "data-orbit") {
    return <DataOrbitGame grade={grade} lang={lang} />;
  }
  return <FallbackBox title={gameId} info={tSoon} />;
}

function DeutschGameSwitch({
  gameId,
  grade,
  lang,
  tSoon,
}: {
  gameId: string;
  grade: number;
  lang: Lang;
  tSoon: string;
}) {
  // Pool betöltés: lang+grade → lang+1 → de+1 (pool-szintű fallback)
  const fallbackPool = ACTIVE_LANGUAGE_POOLS[lang]?.[1];
  const pool = ACTIVE_LANGUAGE_POOLS[lang]?.[grade] ?? fallbackPool;

  // Round-szintű fallback csak ugyanazon a nyelven belül történhet.

  if (gameId === "tipp-sturm") {
    const rounds = pool?.tippSturm?.length ? pool.tippSturm : fallbackPool?.tippSturm;
    if (!rounds?.length) return <FallbackBox title={gameId} info={tSoon} />;
    return <LanguageRoundSession gameId="tipp-sturm" grade={grade} lang={lang} rounds={(level) => prepareLegacyLanguageRounds("tipp-sturm", rounds, level)}
      renderRound={(round, done, key) => <TippSturmGame key={key} grade={grade} lang={lang} round={round as TippSturmRound} onDone={done} />} />;
  }
  if (gameId === "wort-waechter") {
    const rounds = pool?.wortWaechter?.length ? pool.wortWaechter : fallbackPool?.wortWaechter;
    if (!rounds?.length) return <FallbackBox title={gameId} info={tSoon} />;
    return <LanguageRoundSession gameId="wort-waechter" grade={grade} lang={lang} rounds={(level) => prepareLegacyLanguageRounds("wort-waechter", rounds, level)}
      renderRound={(round, done, key) => <WortWaechterGame key={key} grade={grade} lang={lang} round={round as WortWaechterRound} onDone={done} />} />;
  }
  if (gameId === "artikel-asteroids") {
    const rounds = pool?.artikelAsteroids?.length ? pool.artikelAsteroids : fallbackPool?.artikelAsteroids;
    if (!rounds?.length) return <FallbackBox title={gameId} info={tSoon} />;
    return <LanguageRoundSession gameId="artikel-asteroids" grade={grade} lang={lang} rounds={(level) => prepareLegacyLanguageRounds("artikel-asteroids", rounds, level)}
      renderRound={(round, done, key) => <ArtikelAsteroidsGame key={key} grade={grade} lang={lang} round={round as ArtikelAsteroidsRound} onDone={(score) => done(score, (round as ArtikelAsteroidsRound).words.length * 10)} />} />;
  }
  if (gameId === "satzbau-sniper") {
    const rounds = pool?.satzbauSniper?.length ? pool.satzbauSniper : fallbackPool?.satzbauSniper;
    if (!rounds?.length) return <FallbackBox title={gameId} info={tSoon} />;
    return <LanguageRoundSession gameId="satzbau-sniper" grade={grade} lang={lang} rounds={(level) => prepareLegacyLanguageRounds("satzbau-sniper", rounds, level)}
      renderRound={(round, done, key) => <SatzbauSniperGame key={key} grade={grade} lang={lang} round={round as SatzbauSniperRound} onDone={done} />} />;
  }
  if (gameId === "silben-slicer") {
    const rounds = pool?.silbenSlicer?.length ? pool.silbenSlicer : fallbackPool?.silbenSlicer;
    if (!rounds?.length) return <FallbackBox title={gameId} info={tSoon} />;
    return <LanguageRoundSession gameId="silben-slicer" grade={grade} lang={lang} rounds={(level) => prepareLegacyLanguageRounds("silben-slicer", rounds, level)}
      renderRound={(round, done, key) => <SilbenSlicerGame key={key} grade={grade} lang={lang} round={round as SilbenSlicerRound} onDone={(score) => done(score, (round as SilbenSlicerRound).words.length * 10)} />} />;
  }
  if (gameId === "verben-vortex") {
    const rounds = pool?.verbenVortex?.length ? pool.verbenVortex : fallbackPool?.verbenVortex;
    if (!rounds?.length) return <FallbackBox title={gameId} info={tSoon} />;
    return <LanguageRoundSession gameId="verben-vortex" grade={grade} lang={lang} rounds={(level) => prepareLegacyLanguageRounds("verben-vortex", rounds, level)}
      renderRound={(round, done, key) => <VerbenVortexGame key={key} grade={grade} lang={lang} round={round as VerbenVortexRound} onDone={done} />} />;
  }
  if (LANGUAGE_SKILL_GAME_IDS.includes(gameId as LanguageSkillGameId)) {
    const skillGameId = gameId as LanguageSkillGameId;
    return <LanguageRoundSession<LanguageSkillRound> gameId={skillGameId} grade={grade} lang={lang}
      rounds={(level, count) => buildLanguageSkillRounds(skillGameId, lang, grade, level, count)}
      renderRound={(round, done, key) => <LanguageSkillGame key={key} grade={grade} lang={lang} round={round} onDone={done} />} />;
  }
  if (gameId === "grusel-builder") {
    return <GruselBuilderGame grade={grade} lang={lang} />;
  }
  if (gameId === "grusel-bild") {
    return <BildGeschichteGame grade={grade} lang={lang} />;
  }
  return <FallbackBox title={gameId} info={tSoon} />;
}

function InformatikaGameSwitch({ gameId, grade, lang, tSoon }: {
  gameId: string; grade: number; lang: Lang; tSoon: string; onDone?: (score: number) => void;
}) {
  return <InformaticsLab gameId={gameId} grade={grade} lang={lang} fallback={tSoon} />;
}
function SachkundeGameSwitch({
  gameId,
  grade,
  lang,
  tSoon,
}: {
  gameId: string;
  grade: number;
  lang: Lang;
  tSoon: string;
}) {
  const pool = SACHKUNDE_POOLS[grade];
  if (!pool) {
    return <FallbackBox title={gameId} info={tSoon} />;
  }
  switch (gameId) {
    case "meteor-catch": {
      const round = pool.meteorCatch[0];
      return round ? <MeteorCatchGame round={round} onDone={() => {}} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "orbit-sort": {
      const round = pool.orbitSort[0];
      return round ? <OrbitSortGame round={round} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "signal-runner": {
      const round = pool.signalRunner[0];
      return round ? <SignalRunnerGame round={round} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "constellation-builder": {
      const round = pool.constellationBuilder[0];
      return round ? <ConstellationBuilderGame round={round} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "memory-radar": {
      const rounds = pool.memoryRadar.slice(0, 3);
      return rounds.length > 0 ? <MemoryRadarGame rounds={rounds} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "sequence-sort": {
      const round = pool.sequenceSort?.[0];
      return round ? <SequenceSortGame round={round} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "fact-swipe": {
      const round = pool.factSwipe?.[0];
      return round ? <FactSwipeGame round={round} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    default:
      return <FallbackBox title={gameId} info={tSoon} />;
  }
}

// Helper: LocalizedText {de,en,hu,ro} → user's lang string (recursive deep-clone)
function localizeDeep(obj: any, lang: string): any {
  if (obj && typeof obj === 'object' && 'de' in obj && 'en' in obj && 'hu' in obj && 'ro' in obj && typeof obj.de === 'string') {
    return (obj as any)[lang] || obj.de || '';
  }
  if (Array.isArray(obj)) return obj.map(x => localizeDeep(x, lang));
  if (obj && typeof obj === 'object') {
    const out: any = {};
    for (const k of Object.keys(obj)) out[k] = localizeDeep(obj[k], lang);
    return out;
  }
  return obj;
}

function GeographieGameSwitch({
  gameId, grade, lang, tSoon,
}: {
  gameId: string; grade: number; lang: Lang; tSoon: string;
}) {
  return <GeographyLab gameId={gameId} grade={grade} lang={lang} fallback={tSoon} />;
}

function PhysikGameSwitch({
  gameId, grade, lang, tSoon,
}: {
  gameId: string; grade: number; lang: Lang; tSoon: string;
}) {
  return <PhysicsLab gameId={gameId} grade={grade} lang={lang} fallback={tSoon} />;
}

function KemiaGameSwitch({
  gameId, grade, lang, tSoon,
}: {
  gameId: string; grade: number; lang: Lang; tSoon: string;
}) {
  return <ChemistryLab gameId={gameId} grade={grade} lang={lang} fallback={tSoon} />;
}

function BiologieGameSwitch({
  gameId, grade, lang, tSoon,
}: {
  gameId: string; grade: number; lang: Lang; tSoon: string;
}) {
  return <BiologyLab gameId={gameId} grade={grade} lang={lang} fallback={tSoon} />;
}

function GeschichteGameSwitch({
  gameId, grade, lang, tSoon,
}: {
  gameId: string; grade: number; lang: Lang; tSoon: string;
}) {
  return <HistoryLab gameId={gameId} grade={grade} lang={lang} fallback={tSoon} />;
}
function FallbackBox({ title, info }: { title: string; info: string }) {
  return (
    <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-8 text-center">
      <Puzzle size={48} className="mx-auto text-cyan-300 mb-3 opacity-70" />
      <h2 className="text-white/90 text-xl font-semibold mb-1">{title}</h2>
      <p className="text-white/70 text-sm">{info}</p>
    </div>
  );
}
