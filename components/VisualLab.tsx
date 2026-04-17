"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Map, Globe2, Landmark, Star } from "lucide-react";
import VisualLabIcon from "./VisualLabIcon";
import { InteractiveMap } from "@/lib/visualLab/components/InteractiveMap";
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

export type VisualLabSubject = "sachkunde" | "geographie" | "geschichte" | "astromath" | "deutsch" | "informatika" | "physik";
export type Lang = "de" | "hu" | "ro" | "en";

export type VisualLabGameType = "map" | "puzzle" | "memory" | "spotter" | "timeline" | "campaign";

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
    deutschlandMap: "Deutschland Karte",
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
    deutschlandMap: "Németország térkép",
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
    deutschlandMap: "Harta Germaniei",
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
    deutschlandMap: "Germany Map",
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
    { id: "deutschland-map", type: "map", labelKey: "deutschlandMap", available: true },
    { id: "meteor-catch", type: "spotter", labelKey: "meteorCatch", available: true },
    { id: "orbit-sort", type: "puzzle", labelKey: "orbitSort", available: true },
    { id: "signal-runner", type: "puzzle", labelKey: "signalRunner", available: true },
    { id: "constellation-builder", type: "puzzle", labelKey: "constellationBuilder", available: true },
    { id: "memory-radar", type: "memory", labelKey: "memoryRadar", available: true },
    { id: "sequence-sort", type: "puzzle", labelKey: "sequenceSort", available: true },
    { id: "fact-swipe", type: "spotter", labelKey: "factSwipe", available: true },
  ],
  geographie: [
    { id: "deutschland-map", type: "map", labelKey: "deutschlandMap", available: true },
    { id: "meteor-catch", type: "spotter", labelKey: "meteorCatch", available: true },
    { id: "orbit-sort", type: "puzzle", labelKey: "orbitSort", available: true },
    { id: "signal-runner", type: "puzzle", labelKey: "signalRunner", available: true },
    { id: "constellation-builder", type: "puzzle", labelKey: "constellationBuilder", available: true },
    { id: "memory-radar", type: "memory", labelKey: "memoryRadar", available: true },
  ],
  geschichte: [
    { id: "deutschland-map", type: "map", labelKey: "deutschlandMap", available: true },
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
  informatika: [
    { id: "binary-bit-stream", type: "spotter", labelKey: "binaryBitStream", available: true },
    { id: "code-commander", type: "puzzle", labelKey: "codeCommander", available: true },
    { id: "hardware-hero", type: "puzzle", labelKey: "hardwareHero", available: true },
    { id: "packet-path", type: "puzzle", labelKey: "packetPath", available: true },
    { id: "virus-vault", type: "spotter", labelKey: "virusVault", available: true },
  ],
  physik: [
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const t = T[lang] ?? T.en;
  const games = SUBJECT_GAMES[subject] ?? [];
  const vlabPoiId = searchParams?.get("vlab");
  const isForcedOpen = Boolean(vlabPoiId);
  const isOpen = open || isForcedOpen;

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

  useEffect(() => {
    if (vlabPoiId) {
      setActiveGame("deutschland-map");
    }
  }, [vlabPoiId]);

  const handleClose = () => {
    if (isForcedOpen) {
      const params = new URLSearchParams(searchParams?.toString() ?? "");
      params.delete("vlab");
      const next = params.toString();
      router.replace(next ? `?${next}` : window.location.pathname, { scroll: false });
    }
    onClose();
  };

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
        >
          {/* Header */}
          <header className="flex items-center justify-between px-4 py-3 border-b border-cyan-500/20">
            <div className="flex items-center gap-3">
              <VisualLabIcon size={36} />
              <div>
                <h1 className="text-white/90 text-base font-semibold leading-tight">
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
          <div className="flex-1 overflow-y-auto px-4 py-6">
            {!activeGame ? (
              <GamePicker games={games} t={t} onPick={(id) => setActiveGame(id)} />
            ) : (
              <GameHost
                gameId={activeGame}
                subject={subject}
                grade={grade}
                lang={lang}
                t={t}
                initialPoiId={vlabPoiId}
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
  return (
    <Suspense fallback={null}>
      <VisualLabInner {...props} />
    </Suspense>
  );
}

/* ------------------------------------------------------------------ */
/* GamePicker — choose which visual game                               */
/* ------------------------------------------------------------------ */

function gameIcon(type: VisualLabGameType, available: boolean) {
  const cls = available ? "text-cyan-300" : "text-white/40";
  switch (type) {
    case "map":
      return <Globe2 size={22} className={cls} />;
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

      <div className="mt-8 text-center text-white/50 text-sm border border-white/10 rounded-lg p-4 bg-white/[0.02]">
        {t.soon}
      </div>
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
  initialPoiId,
  onBack,
}: {
  gameId: string;
  subject: VisualLabSubject;
  grade: number;
  lang: Lang;
  t: Record<string, string>;
  initialPoiId?: string | null;
  onBack: () => void;
}) {
  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="text-cyan-300 hover:text-cyan-200 text-sm mb-4"
      >
        ← {t.pickGame}
      </button>

      {subject === "astromath" ? (
        <AstromathGameSwitch gameId={gameId} grade={grade} lang={lang} tSoon={t.soon} />
      ) : subject === "deutsch" ? (
        <DeutschGameSwitch gameId={gameId} grade={grade} lang={lang} tSoon={t.soon} onDone={() => setTimeout(onBack, 2500)} />
      ) : subject === "informatika" ? (
        <InformatikaGameSwitch gameId={gameId} grade={grade} lang={lang} tSoon={t.soon} onDone={() => setTimeout(onBack, 2500)} />
      ) : subject === "geographie" ? (
        <GeographieGameSwitch gameId={gameId} grade={grade} lang={lang} initialPoiId={initialPoiId} tSoon={t.soon} />
      ) : subject === "physik" ? (
        <PhysikGameSwitch gameId={gameId} grade={grade} lang={lang} tSoon={t.soon} />
      ) : (
        <SachkundeGameSwitch gameId={gameId} grade={grade} lang={lang} initialPoiId={initialPoiId} tSoon={t.soon} />
      )}
    </div>
  );
}

function pickRound<T>(arr: T[] | undefined, fallback: T[] | undefined): T | undefined {
  const src = (arr && arr.length > 0) ? arr : (fallback && fallback.length > 0 ? fallback : undefined);
  if (!src || src.length === 0) return undefined;
  return src[Math.floor(Math.random() * src.length)];
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
  initialPoiId,
  tSoon,
}: {
  gameId: string;
  grade: number;
  lang: Lang;
  initialPoiId?: string | null;
  tSoon: string;
}) {
  if (gameId === "deutschland-map") {
    return <InteractiveMap lang={lang} subject="sachkunde" grade={grade} initialPoiId={initialPoiId} />;
  }
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

function GeographieGameSwitch({
  gameId, grade, lang, initialPoiId, tSoon,
}: {
  gameId: string; grade: number; lang: Lang; initialPoiId?: string | null; tSoon: string;
}) {
  if (gameId === "deutschland-map") {
    return <InteractiveMap lang={lang} subject="geographie" grade={grade} initialPoiId={initialPoiId} />;
  }
  const pool = GEOGRAPHY_POOLS[grade];
  if (!pool) return <FallbackBox title={gameId} info={tSoon} />;
  switch (gameId) {
    case "meteor-catch": {
      const round = pickRound(pool.meteorCatch, undefined);
      return round ? <MeteorCatchGame round={round} onDone={() => {}} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "orbit-sort": {
      const round = pickRound(pool.orbitSort, undefined);
      return round ? <OrbitSortGame round={round} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "signal-runner": {
      const round = pickRound(pool.signalRunner, undefined);
      return round ? <SignalRunnerGame round={round} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "constellation-builder": {
      const round = pickRound(pool.constellationBuilder, undefined);
      return round ? <ConstellationBuilderGame round={round} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "memory-radar": {
      const rounds = pool.memoryRadar.slice(0, 3);
      return rounds.length > 0 ? <MemoryRadarGame rounds={rounds} /> : <FallbackBox title={gameId} info={tSoon} />;
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
  const pool = PHYSIK_POOLS[grade];
  if (!pool) return <FallbackBox title={gameId} info={tSoon} />;
  switch (gameId) {
    case "meteor-catch": {
      const round = pickRound(pool.meteorCatch, undefined);
      return round ? <MeteorCatchGame round={round} onDone={() => {}} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "orbit-sort": {
      const round = pickRound(pool.orbitSort, undefined);
      return round ? <OrbitSortGame round={round} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "signal-runner": {
      const round = pickRound(pool.signalRunner, undefined);
      return round ? <SignalRunnerGame round={round} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "constellation-builder": {
      const round = pickRound(pool.constellationBuilder, undefined);
      return round ? <ConstellationBuilderGame round={round} /> : <FallbackBox title={gameId} info={tSoon} />;
    }
    case "memory-radar": {
      const rounds = pool.memoryRadar.slice(0, 3);
      return rounds.length > 0 ? <MemoryRadarGame rounds={rounds} /> : <FallbackBox title={gameId} info={tSoon} />;
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

/* ------------------------------------------------------------------ */
/* VisualLabFab — floating launch button (bottom-right)                */
/* ------------------------------------------------------------------ */

interface FabProps {
  onClick: () => void;
  label?: string;
}

export function VisualLabFab({ onClick, label = "Visual Lab" }: FabProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed top-3 right-3 z-[40]
        flex items-center gap-2 pl-2 pr-4 py-2
        rounded-full
        bg-gradient-to-r from-cyan-600/90 to-sky-700/90
        border border-cyan-400/50
        shadow-[0_0_20px_rgba(34,211,238,0.35)]
        hover:shadow-[0_0_28px_rgba(34,211,238,0.55)]
        backdrop-blur
      "
      aria-label={label}
    >
      <VisualLabIcon size={36} />
      <span className="text-white/95 text-sm font-medium">{label}</span>
    </motion.button>
  );
}
