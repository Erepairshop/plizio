"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Map, Landmark, Star } from "lucide-react";
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
import MathCampaignGame from "@/app/astromath/visual-lab/games/MathCampaignGame";
import MathNinjaGame from "@/app/astromath/visual-lab/games/MathNinjaGame";
import MathDefenderGame from "@/app/astromath/visual-lab/games/MathDefenderGame";
import FractionReactorGame from "@/app/astromath/visual-lab/games/FractionReactorGame";
import AngleLaserGame from "@/app/astromath/visual-lab/games/AngleLaserGame";
import TimeWarpGame from "@/app/astromath/visual-lab/games/TimeWarpGame";
import StarMapperGame from "@/app/astromath/visual-lab/games/StarMapperGame";
import MeteorScaleGame from "@/app/astromath/visual-lab/games/MeteorScaleGame";
import GruselBuilderGame from "@/app/astromath/visual-lab/games/GruselBuilderGame";
import BildGeschichteGame from "@/app/astromath/visual-lab/games/BildGeschichteGame";

// Astro-Physik Visual Lab játékok
import FormulaBlitzGame from "@/app/astro-physik/visual-lab/games/FormulaBlitzGame";

// Astrinformatika Visual Lab játékok
import BinaryBitStreamGame from "@/app/astrinformatika/visual-lab/games/BinaryBitStreamGame";
import CodeCommanderGame from "@/app/astrinformatika/visual-lab/games/CodeCommanderGame";
import HardwareHeroGame from "@/app/astrinformatika/visual-lab/games/HardwareHeroGame";
import PacketPathGame from "@/app/astrinformatika/visual-lab/games/PacketPathGame";
import VirusVaultGame from "@/app/astrinformatika/visual-lab/games/VirusVaultGame";
import { INFORMATIKA_POOLS } from "@/lib/visualLab/pools/informatikaPool";

// Astrodeutsch Visual Lab játékok
import WortWaechterGame from "@/app/astro-deutsch/visual-lab/games/WortWaechterGame";
import ArtikelAsteroidsGame from "@/app/astro-deutsch/visual-lab/games/ArtikelAsteroidsGame";
import SatzbauSniperGame from "@/app/astro-deutsch/visual-lab/games/SatzbauSniperGame";
import SilbenSlicerGame from "@/app/astro-deutsch/visual-lab/games/SilbenSlicerGame";
import TippSturmGame from "@/app/astro-deutsch/visual-lab/games/TippSturmGame";
import { ASTRO_LANGUAGE_POOLS } from "@/lib/visualLab/pools/astroLanguagePools";

import { SACHKUNDE_VISUAL_LAB_K1 } from "@/lib/visualLab/pools/sachkundeK1";
import { SACHKUNDE_VISUAL_LAB_K2 } from "@/lib/visualLab/pools/sachkundeK2";
import { SACHKUNDE_VISUAL_LAB_K3 } from "@/lib/visualLab/pools/sachkundeK3";
import { SACHKUNDE_VISUAL_LAB_K4 } from "@/lib/visualLab/pools/sachkundeK4";

import type { SachkundeVisualLabGradePool } from "@/lib/visualLab/types";
import { GEOGRAPHY_POOLS } from "@/lib/visualLab/pools/geographyPool";
import { PHYSIK_POOLS } from "@/lib/visualLab/pools/physikPool";
import { KEMIA_POOLS } from "@/lib/visualLab/pools/kemiaPool";
import { BIOLOGIE_POOLS } from "@/lib/visualLab/pools/biologiePool";
import { GESCHICHTE_POOLS } from "@/lib/visualLab/pools/geschichtePool";
import type { GeographieVisualLabGradePool } from "@/lib/visualLab/types";

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
}

/* ------------------------------------------------------------------ */
/* L10n                                                                */
/* ------------------------------------------------------------------ */

const T: Record<Lang, Record<string, string>> = {
  de: {
    title: "Visual Lab",
    subtitle: "Visuelle Lernspiele & Karten",
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
  },
  hu: {
    title: "Vizuális Labor",
    subtitle: "Vizuális tanulójátékok és térképek",
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
  },
  ro: {
    title: "Laborator Vizual",
    subtitle: "Jocuri vizuale & hărți",
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
  },
  en: {
    title: "Visual Lab",
    subtitle: "Visual learning games & maps",
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
  },
};

/* ------------------------------------------------------------------ */
/* Subject → available maps                                            */
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
  ],
  geschichte: [
    { id: "meteor-catch", type: "spotter", labelKey: "meteorCatch", available: true },
    { id: "orbit-sort", type: "puzzle", labelKey: "orbitSort", available: true },
    { id: "signal-runner", type: "puzzle", labelKey: "signalRunner", available: true },
    { id: "constellation-builder", type: "puzzle", labelKey: "constellationBuilder", available: true },
    { id: "memory-radar", type: "memory", labelKey: "memoryRadar", available: true },
  ],
  astromath: [
    { id: "math-campaign", type: "campaign", labelKey: "mathCampaign", available: true },
    { id: "math-ninja", type: "spotter", labelKey: "mathNinja", available: true },
    { id: "math-defender", type: "spotter", labelKey: "mathDefender", available: true },
    { id: "fraction-reactor", type: "puzzle", labelKey: "fractionReactor", available: true },
    { id: "angle-laser", type: "spotter", labelKey: "angleLaser", available: true },
    { id: "time-warp", type: "memory", labelKey: "timeWarp", available: true },
    { id: "star-mapper", type: "puzzle", labelKey: "starMapper", available: true },
    { id: "meteor-scale", type: "puzzle", labelKey: "meteorScale", available: true },
  ],
  deutsch: [
    { id: "tipp-sturm", type: "spotter", labelKey: "tippSturm", available: true },
    { id: "wort-waechter", type: "spotter", labelKey: "wortWaechter", available: true },
    { id: "artikel-asteroids", type: "puzzle", labelKey: "artikelAsteroids", available: true },
    { id: "satzbau-sniper", type: "spotter", labelKey: "satzbauSniper", available: true },
    { id: "silben-slicer", type: "puzzle", labelKey: "silbenSlicer", available: true },
    { id: "grusel-builder", type: "puzzle", labelKey: "gruselBuilder", available: true },
    { id: "grusel-bild", type: "puzzle", labelKey: "gruselBild", available: true },
  ],
  english: [
    { id: "tipp-sturm", type: "spotter", labelKey: "tippSturm", available: true },
    { id: "wort-waechter", type: "spotter", labelKey: "wortWaechter", available: true },
    { id: "artikel-asteroids", type: "puzzle", labelKey: "artikelAsteroids", available: true },
    { id: "satzbau-sniper", type: "spotter", labelKey: "satzbauSniper", available: true },
    { id: "silben-slicer", type: "puzzle", labelKey: "silbenSlicer", available: true },
  ],
  magyar: [
    { id: "tipp-sturm", type: "spotter", labelKey: "tippSturm", available: true },
    { id: "wort-waechter", type: "spotter", labelKey: "wortWaechter", available: true },
    { id: "artikel-asteroids", type: "puzzle", labelKey: "artikelAsteroids", available: true },
    { id: "satzbau-sniper", type: "spotter", labelKey: "satzbauSniper", available: true },
    { id: "silben-slicer", type: "puzzle", labelKey: "silbenSlicer", available: true },
  ],
  romana: [
    { id: "tipp-sturm", type: "spotter", labelKey: "tippSturm", available: true },
    { id: "wort-waechter", type: "spotter", labelKey: "wortWaechter", available: true },
    { id: "artikel-asteroids", type: "puzzle", labelKey: "artikelAsteroids", available: true },
    { id: "satzbau-sniper", type: "spotter", labelKey: "satzbauSniper", available: true },
    { id: "silben-slicer", type: "puzzle", labelKey: "silbenSlicer", available: true },
  ],
  informatika: [
    { id: "binary-bit-stream", type: "spotter", labelKey: "binaryBitStream", available: true },
    { id: "code-commander", type: "puzzle", labelKey: "codeCommander", available: true },
    { id: "hardware-hero", type: "puzzle", labelKey: "hardwareHero", available: true },
    { id: "packet-path", type: "puzzle", labelKey: "packetPath", available: true },
    { id: "virus-vault", type: "spotter", labelKey: "virusVault", available: true },
  ],
  physik: [
    { id: "formula-blitz", type: "spotter", labelKey: "formulaBlitz", available: true },
    { id: "meteor-catch", type: "spotter", labelKey: "meteorCatch", available: true },
    { id: "orbit-sort", type: "puzzle", labelKey: "orbitSort", available: true },
    { id: "signal-runner", type: "puzzle", labelKey: "signalRunner", available: true },
    { id: "constellation-builder", type: "puzzle", labelKey: "constellationBuilder", available: true },
    { id: "memory-radar", type: "memory", labelKey: "memoryRadar", available: true },
  ],
  kemia: [
    { id: "meteor-catch", type: "spotter", labelKey: "meteorCatch", available: true },
    { id: "orbit-sort", type: "puzzle", labelKey: "orbitSort", available: true },
    { id: "signal-runner", type: "puzzle", labelKey: "signalRunner", available: true },
    { id: "constellation-builder", type: "puzzle", labelKey: "constellationBuilder", available: true },
    { id: "memory-radar", type: "memory", labelKey: "memoryRadar", available: true },
  ],
  biologie: [
    { id: "meteor-catch", type: "spotter", labelKey: "meteorCatch", available: true },
    { id: "orbit-sort", type: "puzzle", labelKey: "orbitSort", available: true },
    { id: "signal-runner", type: "puzzle", labelKey: "signalRunner", available: true },
    { id: "constellation-builder", type: "puzzle", labelKey: "constellationBuilder", available: true },
    { id: "memory-radar", type: "memory", labelKey: "memoryRadar", available: true },
  ],
};

const ADVANCED_LABELS: Record<Lang, Record<string, string>> = {
  de: {
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
    binaryBitStream: "Bit-Strom 💾",
    codeCommander: "Code-Kommandeur 🤖",
    hardwareHero: "Hardware-Held 🖥️",
    packetPath: "Paket-Pfad 🌐",
    virusVault: "Virus-Tresor 🔐",
  },
  hu: {
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
    binaryBitStream: "Bit-Folyam 💾",
    codeCommander: "Kód-Parancsnok 🤖",
    hardwareHero: "Hardver-Hős 🖥️",
    packetPath: "Adatcsomag Útvonal 🌐",
    virusVault: "Vírus-Páncélszekrény 🔐",
  },
  ro: {
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
    binaryBitStream: "Flux Binar 💾",
    codeCommander: "Comandant Cod 🤖",
    hardwareHero: "Erou Hardware 🖥️",
    packetPath: "Rută Pachete 🌐",
    virusVault: "Seiful Virușilor 🔐",
  },
  en: {
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

function VisualLabInner({ subject, grade, lang, open, onClose }: VisualLabProps) {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const t = T[lang] ?? T.en;
  const games = SUBJECT_GAMES[subject] ?? [];
  const isOpen = open;

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
          <header className="flex items-center justify-between px-4 py-3 border-b border-cyan-500/20">
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
          <div className="flex-1 min-h-0 overflow-y-auto px-4 py-6">
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

function gameIcon(type: VisualLabGameType, available: boolean) {
  const cls = available ? "text-cyan-300" : "text-white/40";
  switch (type) {
    case "timeline":
      return <Landmark size={22} className={cls} />;
    case "campaign":
      return <Star size={22} className={cls} />;
    default:
      return <Map size={22} className={cls} />;
  }
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
              {gameIcon(g.type, g.available)}
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
        <DeutschGameSwitch gameId={gameId} grade={grade} lang={lang} tSoon={t.soon} onDone={() => scheduleTimeout(onBack, 2500)} />
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
    if (gameId === "math-campaign") {
      return <MathCampaignGame grade={grade} lang={lang} />;
    }
    if (gameId === "math-ninja") {
      return <MathNinjaGame grade={grade} lang={lang} />;
    }
  if (gameId === "math-defender") {
    return <MathDefenderGame grade={grade} lang={lang} />;
  }
  if (gameId === "fraction-reactor") {
    if (grade < 3) return <FallbackBox title="Bruchreaktor" info={lang === "hu" ? "Ez a játék 3. osztálytól elérhető." : lang === "ro" ? "Disponibil din clasa 3." : lang === "en" ? "Available from grade 3." : "Ab Klasse 3 verfügbar."} />;
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
  return <FallbackBox title={gameId} info={tSoon} />;
}

function DeutschGameSwitch({
  gameId,
  grade,
  lang,
  tSoon,
  onDone,
}: {
  gameId: string;
  grade: number;
  lang: Lang;
  tSoon: string;
  onDone?: (score: number) => void;
}) {
  // Pool betöltés: lang+grade → lang+1 → de+1 (pool-szintű fallback)
  const pool = ASTRO_LANGUAGE_POOLS[lang]?.[grade]
    ?? ASTRO_LANGUAGE_POOLS[lang]?.[1]
    ?? ASTRO_LANGUAGE_POOLS['de']?.[1];

  // Round-szintű fallback: ha az adott pool-ban üres az array, de+1-ből vesszük
  const dePool = ASTRO_LANGUAGE_POOLS['de']?.[1];

  if (gameId === "tipp-sturm") {
    const round = pickRound(pool?.tippSturm, dePool?.tippSturm);
    if (!round) return <FallbackBox title={gameId} info={tSoon} />;
    return <TippSturmGame grade={grade} lang={lang} round={round} onDone={onDone} />;
  }
  if (gameId === "wort-waechter") {
    const round = pickRound(pool?.wortWaechter, dePool?.wortWaechter);
    if (!round) return <FallbackBox title={gameId} info={tSoon} />;
    return <WortWaechterGame grade={grade} lang={lang} round={round} onDone={onDone} />;
  }
  if (gameId === "artikel-asteroids") {
    const round = pickRound(pool?.artikelAsteroids, dePool?.artikelAsteroids);
    if (!round) return <FallbackBox title={gameId} info={tSoon} />;
    return <ArtikelAsteroidsGame grade={grade} lang={lang} round={round} onDone={onDone} />;
  }
  if (gameId === "satzbau-sniper") {
    const round = pickRound(pool?.satzbauSniper, dePool?.satzbauSniper);
    if (!round) return <FallbackBox title={gameId} info={tSoon} />;
    return <SatzbauSniperGame grade={grade} lang={lang} round={round} onDone={onDone} />;
  }
  if (gameId === "silben-slicer") {
    const round = pickRound(pool?.silbenSlicer, dePool?.silbenSlicer);
    if (!round) return <FallbackBox title={gameId} info={tSoon} />;
    return <SilbenSlicerGame grade={grade} lang={lang} round={round} onDone={onDone} />;
  }
  if (gameId === "grusel-builder") {
    return <GruselBuilderGame grade={grade} lang={lang} />;
  }
  if (gameId === "grusel-bild") {
    return <BildGeschichteGame grade={grade} lang={lang} />;
  }
  return <FallbackBox title={gameId} info={tSoon} />;
}

function InformatikaGameSwitch({
  gameId,
  grade,
  lang,
  tSoon,
  onDone,
}: {
  gameId: string;
  grade: number;
  lang: Lang;
  tSoon: string;
  onDone?: (score: number) => void;
}) {
  const pool = INFORMATIKA_POOLS[lang]?.[grade]
    ?? INFORMATIKA_POOLS[lang]?.[5]
    ?? INFORMATIKA_POOLS["hu"]?.[5];
  if (!pool) return <FallbackBox title={gameId} info={tSoon} />;

  if (gameId === "binary-bit-stream") {
    const round = pickRound(pool.binaryAsteroids, undefined);
    return round ? <BinaryBitStreamGame grade={grade} lang={lang} round={round} onDone={onDone} /> : <FallbackBox title={gameId} info={tSoon} />;
  }
  if (gameId === "code-commander") {
    const round = pickRound(pool.algorithmSniper, undefined);
    return round ? <CodeCommanderGame grade={grade} lang={lang} round={round} onDone={onDone} /> : <FallbackBox title={gameId} info={tSoon} />;
  }
  if (gameId === "hardware-hero") {
    const round = pickRound(pool.hardwareSort, undefined);
    return round ? <HardwareHeroGame grade={grade} lang={lang} round={round} onDone={onDone} /> : <FallbackBox title={gameId} info={tSoon} />;
  }
  if (gameId === "packet-path") {
    const round = pickRound(pool.termGuardian, undefined);
    return round ? <PacketPathGame grade={grade} lang={lang} round={round} onDone={onDone} /> : <FallbackBox title={gameId} info={tSoon} />;
  }
  if (gameId === "virus-vault") {
    const round = pickRound(pool.securitySturm, undefined);
    return round ? <VirusVaultGame grade={grade} lang={lang} round={round} onDone={onDone} /> : <FallbackBox title={gameId} info={tSoon} />;
  }
  return <FallbackBox title={gameId} info={tSoon} />;
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
  const pool = GEOGRAPHY_POOLS;
  if (!pool) return <FallbackBox title={gameId} info={tSoon} />;
  switch (gameId) {
    case "meteor-catch": {
      const round = pickRound(pool.meteorCatch, undefined);
      return round ? <MeteorCatchGame round={localizeDeep(round, lang)} onDone={() => {}} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "orbit-sort": {
      const round = pickRound(pool.orbitSort, undefined);
      return round ? <OrbitSortGame round={localizeDeep(round, lang)} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "signal-runner": {
      const round = pickRound(pool.signalRunner, undefined);
      return round ? <SignalRunnerGame round={localizeDeep(round, lang)} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "constellation-builder": {
      const round = pickRound(pool.constellationBuilder, undefined);
      return round ? <ConstellationBuilderGame round={localizeDeep(round, lang)} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "memory-radar": {
      const rounds = pool.memoryRadar.slice(0, 3);
      return rounds.length > 0 ? <MemoryRadarGame rounds={localizeDeep(rounds, lang)} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    default:
      return <FallbackBox title={gameId} info={tSoon} />;
  }
}

function PhysikGameSwitch({
  gameId, grade, lang, tSoon,
}: {
  gameId: string; grade: number; lang: Lang; tSoon: string;
}) {
  if (gameId === "formula-blitz") {
    return <FormulaBlitzGame grade={grade} lang={lang} />;
  }
  const pool = PHYSIK_POOLS[grade];
  if (!pool) return <FallbackBox title={gameId} info={tSoon} />;
  switch (gameId) {
    case "meteor-catch": {
      const round = pickRound(pool.meteorCatch, undefined);
      return round ? <MeteorCatchGame round={localizeDeep(round, lang) as any} onDone={() => {}} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "orbit-sort": {
      const round = pickRound(pool.orbitSort, undefined);
      return round ? <OrbitSortGame round={localizeDeep(round, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "signal-runner": {
      const round = pickRound(pool.signalRunner, undefined);
      return round ? <SignalRunnerGame round={localizeDeep(round, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "constellation-builder": {
      const round = pickRound(pool.constellationBuilder, undefined);
      return round ? <ConstellationBuilderGame round={localizeDeep(round, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "memory-radar": {
      const rounds = pool.memoryRadar.slice(0, 3);
      return rounds.length > 0 ? <MemoryRadarGame rounds={localizeDeep(rounds, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    default:
      return <FallbackBox title={gameId} info={tSoon} />;
  }
}

function KemiaGameSwitch({
  gameId, grade, lang, tSoon,
}: {
  gameId: string; grade: number; lang: Lang; tSoon: string;
}) {
  const pool = KEMIA_POOLS[grade];
  if (!pool) return <FallbackBox title={gameId} info={tSoon} />;
  switch (gameId) {
    case "meteor-catch": {
      const round = pickRound(pool.meteorCatch, undefined);
      return round ? <MeteorCatchGame round={localizeDeep(round, lang) as any} onDone={() => {}} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "orbit-sort": {
      const round = pickRound(pool.orbitSort, undefined);
      return round ? <OrbitSortGame round={localizeDeep(round, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "signal-runner": {
      const round = pickRound(pool.signalRunner, undefined);
      return round ? <SignalRunnerGame round={localizeDeep(round, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "constellation-builder": {
      const round = pickRound(pool.constellationBuilder, undefined);
      return round ? <ConstellationBuilderGame round={localizeDeep(round, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "memory-radar": {
      const rounds = pool.memoryRadar.slice(0, 3);
      return rounds.length > 0 ? <MemoryRadarGame rounds={localizeDeep(rounds, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    default:
      return <FallbackBox title={gameId} info={tSoon} />;
  }
}

function BiologieGameSwitch({
  gameId, grade, lang, tSoon,
}: {
  gameId: string; grade: number; lang: Lang; tSoon: string;
}) {
  const pool = BIOLOGIE_POOLS[grade];
  if (!pool) return <FallbackBox title={gameId} info={tSoon} />;
  switch (gameId) {
    case "meteor-catch": {
      const round = pickRound(pool.meteorCatch, undefined);
      return round ? <MeteorCatchGame round={localizeDeep(round, lang) as any} onDone={() => {}} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "orbit-sort": {
      const round = pickRound(pool.orbitSort, undefined);
      return round ? <OrbitSortGame round={localizeDeep(round, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "signal-runner": {
      const round = pickRound(pool.signalRunner, undefined);
      return round ? <SignalRunnerGame round={localizeDeep(round, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "constellation-builder": {
      const round = pickRound(pool.constellationBuilder, undefined);
      return round ? <ConstellationBuilderGame round={localizeDeep(round, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "memory-radar": {
      const rounds = pool.memoryRadar.slice(0, 3);
      return rounds.length > 0 ? <MemoryRadarGame rounds={localizeDeep(rounds, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    default:
      return <FallbackBox title={gameId} info={tSoon} />;
  }
}

function GeschichteGameSwitch({
  gameId, grade, lang, tSoon,
}: {
  gameId: string; grade: number; lang: Lang; tSoon: string;
}) {
  const pool = GESCHICHTE_POOLS[grade];
  if (!pool) return <FallbackBox title={gameId} info={tSoon} />;
  switch (gameId) {
    case "meteor-catch": {
      const round = pickRound(pool.meteorCatch, undefined);
      return round ? <MeteorCatchGame round={localizeDeep(round, lang) as any} onDone={() => {}} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "orbit-sort": {
      const round = pickRound(pool.orbitSort, undefined);
      return round ? <OrbitSortGame round={localizeDeep(round, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "signal-runner": {
      const round = pickRound(pool.signalRunner, undefined);
      return round ? <SignalRunnerGame round={localizeDeep(round, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "constellation-builder": {
      const round = pickRound(pool.constellationBuilder, undefined);
      return round ? <ConstellationBuilderGame round={localizeDeep(round, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "memory-radar": {
      const rounds = pool.memoryRadar.slice(0, 3);
      return rounds.length > 0 ? <MemoryRadarGame rounds={localizeDeep(rounds, lang) as any} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    default:
      return <FallbackBox title={gameId} info={tSoon} />;
  }
}

function FallbackBox({ title, info }: { title: string; info: string }) {
  return (
    <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-8 text-center">
      <Map size={48} className="mx-auto text-cyan-300 mb-3 opacity-70" />
      <h2 className="text-white/90 text-xl font-semibold mb-1">{title}</h2>
      <p className="text-white/70 text-sm">{info}</p>
    </div>
  );
}
