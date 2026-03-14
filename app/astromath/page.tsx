"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Home, ChevronRight, X } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import AvatarCompanion from "@/components/AvatarCompanion";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, checkNewMilestones } from "@/lib/milestones";
import { getGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";
import type { AvatarGender } from "@/lib/gender";
import type { CardRarity } from "@/lib/cards";

// ─── Types ────────────────────────────────────────────────────────────────────
type Screen = "map" | "learn" | "discover" | "reward" | "complete";
type SceneType = "count" | "add" | "sub" | "missing";
type ScenePhase = 0 | 1 | 2; // setup → animating → result

interface Scene {
  type: SceneType;
  a: number;
  b: number;
  emoji: string;
  hiddenSide?: "left" | "right"; // for missing
}

interface PlanetDef {
  id: string;
  icon: string;
  color: string;
  glow: string;
  bg: string;
  svgX: number;
  svgY: number;
  requires?: string;
}

interface AstroSave {
  completedPlanets: string[];
}

// ─── Planet definitions ───────────────────────────────────────────────────────
const PLANETS: PlanetDef[] = [
  { id: "numera",  icon: "🌍", color: "#4ECDC4", glow: "rgba(78,205,196,0.6)",  bg: "rgba(78,205,196,0.12)",  svgX: 160, svgY: 390 },
  { id: "addix",   icon: "🔵", color: "#00D4FF", glow: "rgba(0,212,255,0.6)",   bg: "rgba(0,212,255,0.12)",   svgX: 75,  svgY: 290, requires: "numera" },
  { id: "minius",  icon: "🔴", color: "#FF6B6B", glow: "rgba(255,107,107,0.6)", bg: "rgba(255,107,107,0.12)", svgX: 240, svgY: 210, requires: "addix" },
  { id: "voidex",  icon: "⭐", color: "#FFD700", glow: "rgba(255,215,0,0.6)",   bg: "rgba(255,215,0,0.12)",   svgX: 85,  svgY: 130, requires: "minius" },
  { id: "alpha",   icon: "🚀", color: "#B44DFF", glow: "rgba(180,77,255,0.6)",  bg: "rgba(180,77,255,0.12)",  svgX: 200, svgY: 50,  requires: "voidex" },
];

// ─── Scene data (pedagogical progression) ────────────────────────────────────
const PLANET_SCENES: Record<string, Scene[]> = {
  numera: [
    { type: "count", a: 3, b: 0, emoji: "⭐" },
    { type: "count", a: 5, b: 0, emoji: "🌙" },
    { type: "count", a: 4, b: 0, emoji: "🚀" },
    { type: "count", a: 7, b: 0, emoji: "🪐" },
    { type: "count", a: 6, b: 0, emoji: "✨" },
  ],
  addix: [
    { type: "add", a: 2, b: 3, emoji: "🚀" },
    { type: "add", a: 1, b: 4, emoji: "⭐" },
    { type: "add", a: 3, b: 3, emoji: "🌟" },
    { type: "add", a: 4, b: 2, emoji: "🪐" },
    { type: "add", a: 3, b: 5, emoji: "🌙" },
  ],
  minius: [
    { type: "sub", a: 5, b: 2, emoji: "🚀" },
    { type: "sub", a: 6, b: 3, emoji: "⭐" },
    { type: "sub", a: 7, b: 4, emoji: "🌟" },
    { type: "sub", a: 8, b: 5, emoji: "🪐" },
    { type: "sub", a: 9, b: 3, emoji: "🌙" },
  ],
  voidex: [
    { type: "missing", a: 3, b: 4, hiddenSide: "left",  emoji: "🌟" },
    { type: "missing", a: 5, b: 2, hiddenSide: "right", emoji: "⭐" },
    { type: "missing", a: 2, b: 5, hiddenSide: "left",  emoji: "🚀" },
    { type: "missing", a: 4, b: 3, hiddenSide: "right", emoji: "🪐" },
    { type: "missing", a: 1, b: 6, hiddenSide: "left",  emoji: "🌙" },
  ],
  alpha: [
    { type: "add",     a: 4, b: 3,                      emoji: "🚀" },
    { type: "sub",     a: 8, b: 3,                      emoji: "⭐" },
    { type: "add",     a: 2, b: 5,                      emoji: "🌟" },
    { type: "sub",     a: 7, b: 4,                      emoji: "🪐" },
    { type: "missing", a: 3, b: 4, hiddenSide: "left",  emoji: "🌙" },
  ],
};

const SAVE_KEY = "astromath_save_v1";

// ─── Translations ─────────────────────────────────────────────────────────────
const T = {
  en: {
    title: "AstroMath",
    subtitle: "Grade 1 · Space Journey",
    next: "Next",
    startMission: "Start Mission",
    backToMap: "Back to Map",
    nextPlanet: "Next Planet",
    completed: "Completed!",
    allDone: "All planets complete! 🏆",
    locked: "Locked",
    actionLabel: { count: "COUNT!", add: "FUSE!", sub: "REMOVE!", missing: "REVEAL!" },
    resultLabel: { count: "stars counted!", add: "together!", sub: "remaining!", missing: "found!" },
    planetNames: { numera: "Numera", addix: "Addix", minius: "Minius", voidex: "Voidex", alpha: "Alpha HQ" },
    planetSubs:  { numera: "Count & Compare", addix: "Addition to 10", minius: "Subtraction to 10", voidex: "Missing Numbers", alpha: "Final Mission" },
    learnSlides: {
      numera:  [{ icon: "🌟", title: "Count the Stars!", body: "On planet Numera, we discover how to count. Every star matters — let's count them all!" }],
      addix:   [{ icon: "🚀", title: "Fuse Rockets!", body: "On planet Addix, rockets fly together! Watch two groups merge into one big group!" }],
      minius:  [{ icon: "💥", title: "Black Hole!", body: "Planet Minius has a hungry black hole! It swallows rockets — watch how many remain!" }],
      voidex:  [{ icon: "❓", title: "Hidden Cargo!", body: "Some cargo is hidden on Voidex! Press REVEAL to discover the secret number!" }],
      alpha:   [{ icon: "🏆", title: "Final Mission!", body: "Planet Alpha mixes everything you learned! Addition, subtraction, missing numbers — ready?" }],
    },
  },
  hu: {
    title: "AstroMath",
    subtitle: "1. osztály · Ûrutazás",
    next: "Következő",
    startMission: "Misszió indítása",
    backToMap: "Vissza a térképre",
    nextPlanet: "Következő bolygó",
    completed: "Teljesítve!",
    allDone: "Minden bolygó kész! 🏆",
    locked: "Zárva",
    actionLabel: { count: "SZÁMOLJ!", add: "ÖSSZEOLVAD!", sub: "ELTŰNIK!", missing: "FELFED!" },
    resultLabel: { count: "csillag megszámolva!", add: "együtt!", sub: "maradt!", missing: "megtalálva!" },
    planetNames: { numera: "Numera", addix: "Addix", minius: "Minius", voidex: "Voidex", alpha: "Alpha Bázis" },
    planetSubs:  { numera: "Számolás", addix: "Összeadás 10-ig", minius: "Kivonás 10-ig", voidex: "Hiányzó számok", alpha: "Végső misszió" },
    learnSlides: {
      numera:  [{ icon: "🌟", title: "Számold a csillagokat!", body: "Numera bolygón megtanuljuk a számolást. Minden csillag számít — számoljuk meg együtt!" }],
      addix:   [{ icon: "🚀", title: "Olvadnak össze a rakéták!", body: "Addix bolygón a rakéták összerepülnek! Nézzük, hogyan olvad össze a két csoport eggyé!" }],
      minius:  [{ icon: "💥", title: "Fekete lyuk!", body: "Minius bolygón éhes fekete lyuk van! Elnyeli a rakétákat — nézzük hány marad!" }],
      voidex:  [{ icon: "❓", title: "Rejtett rakomány!", body: "Voidexen egy rakomány el van rejtve! Nyomd a FELFED gombot, hogy megtudd a titkos számot!" }],
      alpha:   [{ icon: "🏆", title: "Végső misszió!", body: "Alpha bolygó mindent összekever amit tanultál! Összeadás, kivonás, hiányzó számok — készen állsz?" }],
    },
  },
  de: {
    title: "AstroMath",
    subtitle: "Klasse 1 · Weltraumreise",
    next: "Weiter",
    startMission: "Mission starten",
    backToMap: "Zurück zur Karte",
    nextPlanet: "Nächster Planet",
    completed: "Geschafft!",
    allDone: "Alle Planeten geschafft! 🏆",
    locked: "Gesperrt",
    actionLabel: { count: "ZÄHLEN!", add: "ZUSAMMEN!", sub: "WEGNEHMEN!", missing: "AUFDECKEN!" },
    resultLabel: { count: "Sterne gezählt!", add: "zusammen!", sub: "übrig!", missing: "gefunden!" },
    planetNames: { numera: "Numera", addix: "Addix", minius: "Minius", voidex: "Voidex", alpha: "Alpha-Basis" },
    planetSubs:  { numera: "Zählen", addix: "Addition bis 10", minius: "Subtraktion bis 10", voidex: "Fehlende Zahlen", alpha: "Endmission" },
    learnSlides: {
      numera:  [{ icon: "🌟", title: "Zähle die Sterne!", body: "Auf Planet Numera lernen wir zählen. Jeder Stern zählt — lass uns alle zählen!" }],
      addix:   [{ icon: "🚀", title: "Raketen fusionieren!", body: "Auf Planet Addix fliegen Raketen zusammen! Sieh, wie zwei Gruppen zu einer werden!" }],
      minius:  [{ icon: "💥", title: "Schwarzes Loch!", body: "Planet Minius hat ein hungriges schwarzes Loch! Es verschluckt Raketen — wie viele bleiben übrig?" }],
      voidex:  [{ icon: "❓", title: "Versteckte Fracht!", body: "Auf Voidex ist Fracht versteckt! Drücke AUFDECKEN, um die geheime Zahl zu entdecken!" }],
      alpha:   [{ icon: "🏆", title: "Endmission!", body: "Planet Alpha mischt alles, was du gelernt hast! Addition, Subtraktion, fehlende Zahlen — bereit?" }],
    },
  },
  ro: {
    title: "AstroMath",
    subtitle: "Clasa 1 · Călătorie spațială",
    next: "Înainte",
    startMission: "Începe misiunea",
    backToMap: "Înapoi la hartă",
    nextPlanet: "Planeta următoare",
    completed: "Finalizat!",
    allDone: "Toate planetele finalizate! 🏆",
    locked: "Blocat",
    actionLabel: { count: "NUMĂRĂ!", add: "UNEȘTE!", sub: "ELIMINĂ!", missing: "DEZVĂLUIE!" },
    resultLabel: { count: "stele numărate!", add: "împreună!", sub: "rămase!", missing: "descoperite!" },
    planetNames: { numera: "Numera", addix: "Addix", minius: "Minius", voidex: "Voidex", alpha: "Baza Alpha" },
    planetSubs:  { numera: "Numărare", addix: "Adunare până la 10", minius: "Scădere până la 10", voidex: "Numere lipsă", alpha: "Misiunea finală" },
    learnSlides: {
      numera:  [{ icon: "🌟", title: "Numără stelele!", body: "Pe planeta Numera, descoperim numărarea. Fiecare stea contează — să le numărăm!" }],
      addix:   [{ icon: "🚀", title: "Fuzionează rachetele!", body: "Pe planeta Addix, rachetele zboară împreună! Privește cum două grupuri devin unul!" }],
      minius:  [{ icon: "💥", title: "Gaura neagră!", body: "Planeta Minius are o gaură neagră flămândă! Înghite rachete — câte rămân?" }],
      voidex:  [{ icon: "❓", title: "Marfă ascunsă!", body: "Pe Voidex, o parte din marfă e ascunsă! Apasă DEZVĂLUIE pentru a descoperi numărul secret!" }],
      alpha:   [{ icon: "🏆", title: "Misiunea finală!", body: "Planeta Alpha amestecă tot ce ai învățat! Adunare, scădere, numere lipsă — ești gata?" }],
    },
  },
} as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────
function loadSave(): AstroSave {
  try { const r = localStorage.getItem(SAVE_KEY); if (r) return JSON.parse(r); } catch {}
  return { completedPlanets: [] };
}
function writeSave(s: AstroSave) { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }

// ─── Starfield ────────────────────────────────────────────────────────────────
const STAR_DATA = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  x: ((i * 37 + 13) % 100),
  y: ((i * 53 + 7) % 100),
  size: (i % 3) * 0.8 + 0.6,
  dur: 2 + (i % 5) * 0.6,
  delay: (i % 7) * 0.5,
}));

function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STAR_DATA.map((s) => (
        <motion.div key={s.id} className="absolute rounded-full bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.15, 0.9, 0.15] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// ─── Space Map ────────────────────────────────────────────────────────────────
const MAP_W = 320;
const MAP_H = 460;
const MAP_PATH = `M 160,390 C 100,360 60,320 75,290 C 90,260 210,240 240,210 C 270,180 130,155 85,130 C 50,110 160,80 200,50`;

function SpaceMap({ completedPlanets, onSelect, lang }: { completedPlanets: string[]; onSelect: (p: PlanetDef) => void; lang: string }) {
  const t = T[lang as keyof typeof T] ?? T.en;
  const isUnlocked = (p: PlanetDef) => !p.requires || completedPlanets.includes(p.requires);

  return (
    <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} width="100%" style={{ maxHeight: MAP_H }}>
      <ellipse cx={200} cy={80}  rx={90} ry={50} fill="rgba(180,77,255,0.07)" />
      <ellipse cx={80}  cy={220} rx={70} ry={45} fill="rgba(255,107,107,0.06)" />
      <ellipse cx={200} cy={340} rx={80} ry={40} fill="rgba(78,205,196,0.06)" />
      <path d={MAP_PATH} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={2} strokeDasharray="6 6" />
      {PLANETS.map((p) => {
        const done = completedPlanets.includes(p.id);
        const unlocked = isUnlocked(p);
        const name = (t.planetNames as Record<string, string>)[p.id];
        return (
          <g key={p.id} onClick={() => unlocked && onSelect(p)} style={{ cursor: unlocked ? "pointer" : "default" }}>
            {unlocked && <circle cx={p.svgX} cy={p.svgY} r={29} fill={p.glow} opacity={0.35} />}
            <circle cx={p.svgX} cy={p.svgY} r={22} fill={unlocked ? p.bg : "rgba(255,255,255,0.03)"} stroke={unlocked ? p.color : "rgba(255,255,255,0.12)"} strokeWidth={unlocked ? 2.5 : 1.5} opacity={unlocked ? 1 : 0.45} />
            <text x={p.svgX} y={p.svgY + 7} textAnchor="middle" fontSize={18}>{unlocked ? p.icon : "🔒"}</text>
            {done && (
              <>
                <circle cx={p.svgX + 17} cy={p.svgY - 17} r={9} fill="#00FF88" />
                <text x={p.svgX + 17} y={p.svgY - 13} textAnchor="middle" fontSize={11} fill="#000" fontWeight="bold">✓</text>
              </>
            )}
            <text x={p.svgX} y={p.svgY + 37} textAnchor="middle" fontSize={9.5} fontWeight="bold" fill={unlocked ? p.color : "rgba(255,255,255,0.25)"}>{name}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── Discovery Scene ──────────────────────────────────────────────────────────
function DiscoverScene({ scene, planet, lang, onNext }: {
  scene: Scene; planet: PlanetDef; lang: string; onNext: () => void;
}) {
  const t = T[lang as keyof typeof T] ?? T.en;
  const [phase, setPhase] = useState<ScenePhase>(0);
  const [countedIdx, setCountedIdx] = useState(-1); // for count type

  const handleAction = useCallback(() => {
    if (scene.type === "count") {
      // Animate counting: step through each object
      let i = 0;
      const tick = () => {
        setCountedIdx(i);
        i++;
        if (i < scene.a) setTimeout(tick, 320);
        else setTimeout(() => setPhase(2), 400);
      };
      setPhase(1);
      setTimeout(tick, 100);
    } else {
      setPhase(1);
      setTimeout(() => setPhase(2), 900);
    }
  }, [scene]);

  const result = scene.type === "add" ? scene.a + scene.b
    : scene.type === "sub" ? scene.a - scene.b
    : scene.type === "missing" ? (scene.hiddenSide === "left" ? scene.a : scene.b)
    : scene.a;

  const actionLabel = (t.actionLabel as Record<string, string>)[scene.type];
  const resultLabel = (t.resultLabel as Record<string, string>)[scene.type];

  // ── Equation display ───────────────────────────────────────────────────────
  const equationStr =
    scene.type === "add"     ? `${scene.a} + ${scene.b} = ${scene.a + scene.b}`
    : scene.type === "sub"   ? `${scene.a} − ${scene.b} = ${scene.a - scene.b}`
    : scene.type === "missing" && scene.hiddenSide === "left"  ? `${scene.a} + ${scene.b} = ${scene.a + scene.b}`
    : scene.type === "missing" && scene.hiddenSide === "right" ? `${scene.a} + ${scene.b} = ${scene.a + scene.b}`
    : `${scene.a}`;

  // ── Object rows ────────────────────────────────────────────────────────────
  function ObjRow({ count, dim, revealed, delay = 0 }: { count: number; dim?: boolean; revealed?: boolean; delay?: number }) {
    return (
      <div className="flex flex-wrap gap-1.5 justify-center">
        {Array.from({ length: count }).map((_, i) => (
          <motion.span key={i} className="text-3xl leading-none select-none"
            initial={revealed ? { scale: 0, opacity: 0 } : { scale: 1, opacity: dim ? 0.25 : 1 }}
            animate={revealed ? { scale: 1, opacity: 1 } : { scale: 1, opacity: dim ? 0.2 : 1 }}
            transition={revealed ? { delay: delay + i * 0.07, type: "spring", stiffness: 400 } : {}}
          >
            {dim && !revealed ? "❓" : scene.emoji}
          </motion.span>
        ))}
      </div>
    );
  }

  // ── Scene visuals ──────────────────────────────────────────────────────────
  function SceneVisual() {
    // COUNT
    if (scene.type === "count") {
      return (
        <div className="flex flex-wrap gap-2 justify-center">
          {Array.from({ length: scene.a }).map((_, i) => (
            <motion.div key={i} className="relative"
              animate={countedIdx >= i ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 0.25 }}>
              <span className="text-4xl leading-none select-none" style={{ opacity: phase === 0 ? 0.45 : 1, filter: countedIdx >= i ? "none" : (phase >= 1 ? "brightness(0.4)" : "none"), transition: "all 0.3s" }}>
                {scene.emoji}
              </span>
              {countedIdx >= i && phase >= 1 && (
                <motion.div className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white"
                  style={{ background: planet.color }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                  {i + 1}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      );
    }

    // ADD
    if (scene.type === "add") {
      if (phase < 2) {
        return (
          <div className="flex items-center gap-3 justify-center flex-wrap">
            <div className="flex flex-col items-center gap-1">
              <div className="flex flex-wrap gap-1.5 justify-center max-w-[120px]">
                {Array.from({ length: scene.a }).map((_, i) => (
                  <span key={i} className="text-3xl leading-none">{scene.emoji}</span>
                ))}
              </div>
              <span className="text-sm font-bold" style={{ color: planet.color }}>{scene.a}</span>
            </div>
            <span className="text-4xl font-black text-white/40">+</span>
            <div className="flex flex-col items-center gap-1">
              <motion.div className="flex flex-wrap gap-1.5 justify-center max-w-[120px]"
                animate={phase === 1 ? { x: -60, opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}>
                {Array.from({ length: scene.b }).map((_, i) => (
                  <span key={i} className="text-3xl leading-none">{scene.emoji}</span>
                ))}
              </motion.div>
              <span className="text-sm font-bold" style={{ color: planet.color }}>{scene.b}</span>
            </div>
          </div>
        );
      }
      // phase 2: all together
      return (
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-wrap gap-1.5 justify-center max-w-[220px]">
            {Array.from({ length: scene.a + scene.b }).map((_, i) => (
              <motion.span key={i} className="text-3xl leading-none"
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.05, type: "spring" }}>
                {scene.emoji}
              </motion.span>
            ))}
          </div>
          <motion.span className="text-lg font-bold" style={{ color: planet.color }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            {scene.a + scene.b}
          </motion.span>
        </div>
      );
    }

    // SUB
    if (scene.type === "sub") {
      return (
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-wrap gap-1.5 justify-center max-w-[220px]">
            {Array.from({ length: scene.a }).map((_, i) => {
              const isRemoved = i >= scene.a - scene.b;
              return (
                <motion.span key={i} className="text-3xl leading-none"
                  animate={phase >= 1 && isRemoved ? { opacity: 0, scale: 0, rotate: 90 } : { opacity: 1, scale: 1, rotate: 0 }}
                  transition={phase >= 1 ? { delay: (i - (scene.a - scene.b)) * 0.12, duration: 0.4 } : {}}>
                  {scene.emoji}
                </motion.span>
              );
            })}
          </div>
          {phase >= 1 && (
            <motion.span className="text-lg font-bold" style={{ color: planet.color }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              {scene.a - scene.b}
            </motion.span>
          )}
        </div>
      );
    }

    // MISSING
    if (scene.type === "missing") {
      const leftCount  = scene.a;
      const rightCount = scene.b;
      const leftHidden  = scene.hiddenSide === "left";
      const rightHidden = scene.hiddenSide === "right";

      return (
        <div className="flex items-center gap-3 justify-center flex-wrap">
          <div className="flex flex-col items-center gap-1">
            <ObjRow count={leftCount} dim={leftHidden && phase === 0} revealed={leftHidden && phase >= 2} delay={0} />
            <span className="text-sm font-bold" style={{ color: planet.color }}>{leftHidden && phase < 2 ? "?" : leftCount}</span>
          </div>
          <span className="text-4xl font-black text-white/40">+</span>
          <div className="flex flex-col items-center gap-1">
            <ObjRow count={rightCount} dim={rightHidden && phase === 0} revealed={rightHidden && phase >= 2} delay={0.1} />
            <span className="text-sm font-bold" style={{ color: planet.color }}>{rightHidden && phase < 2 ? "?" : rightCount}</span>
          </div>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
      {/* Visual */}
      <motion.div key={`${scene.emoji}-${phase}`}
        className="rounded-3xl p-6 w-full min-h-[160px] flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.04)", border: `1.5px solid ${planet.color}22` }}>
        <SceneVisual />
      </motion.div>

      {/* Equation reveal (phase 2) */}
      <AnimatePresence>
        {phase === 2 && (
          <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            className="text-center">
            <div className="text-4xl font-black" style={{ color: planet.color, textShadow: `0 0 20px ${planet.glow}` }}>
              {equationStr} ✨
            </div>
            <div className="text-sm text-white/50 mt-1 font-medium">{result} {resultLabel}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action button or Next button */}
      {phase === 0 ? (
        <motion.button onClick={handleAction}
          className="w-full py-5 rounded-2xl font-black text-xl text-white"
          style={{ background: `linear-gradient(135deg, ${planet.color}55, ${planet.color}99)`, border: `2.5px solid ${planet.color}`, boxShadow: `0 0 25px ${planet.glow}` }}
          whileTap={{ scale: 0.95 }} animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2, repeat: Infinity }}>
          {actionLabel}
        </motion.button>
      ) : phase === 1 ? (
        <div className="w-full py-5 rounded-2xl font-black text-xl text-white/30 text-center border border-white/10" style={{ background: "rgba(255,255,255,0.03)" }}>
          {actionLabel}
        </div>
      ) : (
        <motion.button onClick={onNext} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="w-full py-5 rounded-2xl font-black text-xl text-white flex items-center justify-center gap-2"
          style={{ background: `linear-gradient(135deg, ${planet.color}55, ${planet.color}99)`, border: `2.5px solid ${planet.color}` }}
          whileTap={{ scale: 0.97 }}>
          {T[lang as keyof typeof T]?.next ?? "Next"} <ChevronRight size={22} />
        </motion.button>
      )}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function AstroMathPage() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  // Avatar
  const [gender] = useState<AvatarGender>(getGender());
  const [activeSkin] = useState(getSkinDef(getActiveSkin()));
  const [activeFace] = useState(getFaceDef(getActiveFace()));
  const [activeTop]     = useState(() => { const id = getActive("top");     return id ? getTopDef(id)     : null; });
  const [activeBottom]  = useState(() => { const id = getActive("bottom");  return id ? getBottomDef(id)  : null; });
  const [activeShoe]    = useState(() => { const id = getActive("shoe");    return id ? getShoeDef(id)    : null; });
  const [activeCape]    = useState(() => { const id = getActive("cape");    return id ? getCapeDef(id)    : null; });
  const [activeGlasses] = useState(() => { const id = getActive("glasses"); return id ? getGlassesDef(id) : null; });
  const [activeGloves]  = useState(() => { const id = getActive("gloves");  return id ? getGloveDef(id)   : null; });
  const [activeHat]     = useState(() => { const id = getActiveHat();       return id ? getHatDef(id)     : null; });
  const [activeTrail]   = useState(() => { const id = getActiveTrail();     return id ? getTrailDef(id)   : null; });
  const avatarProps = { gender, activeSkin, activeFace, activeTop, activeBottom, activeShoe, activeCape, activeGlasses, activeGloves, activeHat, activeTrail };

  // Game state
  const [screen, setScreen] = useState<Screen>("map");
  const [save, setSave] = useState<AstroSave>({ completedPlanets: [] });
  const [activePlanet, setActivePlanet] = useState<PlanetDef | null>(null);
  const [slideIdx, setSlideIdx] = useState(0);
  const [sceneIdx, setSceneIdx] = useState(0);
  const [avatarMood, setAvatarMood] = useState<"idle" | "happy" | "victory" | "focused">("idle");
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);

  useEffect(() => { setSave(loadSave()); }, []);

  const startPlanet = useCallback((planet: PlanetDef) => {
    setActivePlanet(planet);
    setSlideIdx(0);
    setSceneIdx(0);
    setScreen("learn");
    setAvatarMood("focused");
  }, []);

  const goToDiscover = useCallback(() => {
    setSceneIdx(0);
    setScreen("discover");
    setAvatarMood("focused");
  }, []);

  const handleSceneNext = useCallback(() => {
    const planet = activePlanet!;
    const scenes = PLANET_SCENES[planet.id] ?? [];
    const nextIdx = sceneIdx + 1;
    if (nextIdx < scenes.length) {
      setSceneIdx(nextIdx);
      setAvatarMood("happy");
      setTimeout(() => setAvatarMood("focused"), 800);
    } else {
      // Planet complete!
      const rarity = calculateRarity(scenes.length, scenes.length, 0, false);
      saveCard({ id: generateCardId(), game: "astromath", rarity, score: scenes.length, total: scenes.length, date: new Date().toISOString() });
      window.dispatchEvent(new Event("plizio-cards-changed"));
      incrementTotalGames();
      checkNewMilestones();

      const newSave: AstroSave = {
        completedPlanets: save.completedPlanets.includes(planet.id) ? save.completedPlanets : [...save.completedPlanets, planet.id],
      };
      setSave(newSave);
      writeSave(newSave);

      setEarnedCard(rarity);
      setAvatarMood("victory");
      setScreen("reward");
    }
  }, [activePlanet, sceneIdx, save]);

  const goToComplete = useCallback(() => { setScreen("complete"); }, []);

  // ─── MAP ──────────────────────────────────────────────────────────────────
  if (screen === "map") {
    const done = save.completedPlanets.length;
    return (
      <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden">
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2">
          <button onClick={() => router.push("/")} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors">
            <Home size={16} />
          </button>
          <div className="text-center">
            <h1 className="text-xl font-black text-white tracking-wide">🚀 {t.title}</h1>
            <p className="text-[10px] text-white/45 font-medium uppercase tracking-widest">{t.subtitle}</p>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 text-xs font-bold">{done}/{PLANETS.length}</div>
        </div>
        <div className="relative z-10 px-4 mb-1">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, #4ECDC4, #B44DFF)` }}
              initial={{ width: 0 }} animate={{ width: `${(done / PLANETS.length) * 100}%` }} transition={{ duration: 0.8, ease: "easeOut" }} />
          </div>
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center px-4 pb-4">
          <div className="w-full max-w-[340px]">
            <SpaceMap completedPlanets={save.completedPlanets} onSelect={startPlanet} lang={lang} />
          </div>
          <div className="w-full max-w-[340px] flex flex-col gap-2 mt-1">
            {PLANETS.map((p) => {
              const done = save.completedPlanets.includes(p.id);
              const unlocked = !p.requires || save.completedPlanets.includes(p.requires);
              const name = (t.planetNames as Record<string, string>)[p.id];
              const sub  = (t.planetSubs  as Record<string, string>)[p.id];
              return (
                <motion.button key={p.id} onClick={() => unlocked && startPlanet(p)} disabled={!unlocked}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-left"
                  style={{ background: unlocked ? p.bg : "rgba(255,255,255,0.02)", border: `1.5px solid ${unlocked ? p.color : "rgba(255,255,255,0.08)"}`, opacity: unlocked ? 1 : 0.45 }}
                  whileTap={unlocked ? { scale: 0.97 } : {}}>
                  <span className="text-2xl">{unlocked ? p.icon : "🔒"}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-white/90 truncate">{name}</div>
                    <div className="text-[11px] text-white/45 truncate">{sub}</div>
                  </div>
                  {done && <span className="text-[#00FF88] text-sm font-bold">✓</span>}
                  {!done && unlocked && <ChevronRight size={16} className="text-white/35" />}
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="fixed bottom-4 right-4 z-50">
          <AvatarCompanion {...avatarProps} mood={avatarMood} jumpTrigger={undefined} fixed />
        </div>
      </div>
    );
  }

  // ─── LEARN ────────────────────────────────────────────────────────────────
  if (screen === "learn" && activePlanet) {
    const slides = ((t.learnSlides as unknown) as Record<string, { icon: string; title: string; body: string }[]>)[activePlanet.id] ?? [];
    const slide = slides[slideIdx];
    const isLast = slideIdx === slides.length - 1;

    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 50% 0%, ${activePlanet.bg} 0%, #060614 60%)` }}>
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-4">
          <button onClick={() => setScreen("map")} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors"><X size={16} /></button>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <div key={i} className="w-7 h-1.5 rounded-full transition-all" style={{ background: i <= slideIdx ? activePlanet.color : "rgba(255,255,255,0.15)" }} />
            ))}
          </div>
          <div className="w-9" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-6 gap-6">
          <AnimatePresence mode="wait">
            <motion.div key={slideIdx} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-5 text-center">
              <motion.div className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl"
                style={{ background: activePlanet.bg, border: `2px solid ${activePlanet.color}`, boxShadow: `0 0 30px ${activePlanet.glow}` }}
                animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>
                {slide?.icon}
              </motion.div>
              <h2 className="text-2xl font-black text-white leading-tight">{slide?.title}</h2>
              <div className="rounded-2xl px-6 py-4 max-w-xs" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-white/80 text-base leading-relaxed font-medium">{slide?.body}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-10 flex items-end justify-between px-6 pb-6 gap-4">
          <div className="w-20 h-20 flex-shrink-0">
            <AvatarCompanion {...avatarProps} mood="focused" jumpTrigger={undefined} fixed={false} />
          </div>
          <motion.button
            onClick={() => { if (isLast) goToDiscover(); else setSlideIdx((i) => i + 1); }}
            className="flex-1 py-4 rounded-2xl font-black text-lg text-white flex items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${activePlanet.color}44, ${activePlanet.color}77)`, border: `2px solid ${activePlanet.color}` }}
            whileTap={{ scale: 0.97 }}>
            {isLast ? t.startMission : t.next} <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    );
  }

  // ─── DISCOVER ─────────────────────────────────────────────────────────────
  if (screen === "discover" && activePlanet) {
    const scenes = PLANET_SCENES[activePlanet.id] ?? [];
    const scene = scenes[sceneIdx];
    const name = (t.planetNames as Record<string, string>)[activePlanet.id];

    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 50% 0%, ${activePlanet.bg} 0%, #060614 55%)` }}>
        <Starfield />

        {/* HUD */}
        <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3">
          <button onClick={() => setScreen("map")} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors">
            <X size={14} />
          </button>
          <div className="flex gap-1.5 flex-1">
            {scenes.map((_, i) => (
              <div key={i} className="flex-1 h-2 rounded-full transition-all"
                style={{ background: i < sceneIdx ? "#00FF88" : i === sceneIdx ? activePlanet.color : "rgba(255,255,255,0.12)" }} />
            ))}
          </div>
          <span className="text-white/50 text-xs font-bold">{name}</span>
        </div>

        {/* Scene */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 pb-5">
          <AnimatePresence mode="wait">
            <motion.div key={sceneIdx} className="w-full" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
              <DiscoverScene scene={scene} planet={activePlanet} lang={lang} onNext={handleSceneNext} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Avatar */}
        <div className="fixed bottom-4 right-4 z-50">
          <AvatarCompanion {...avatarProps} mood={avatarMood} jumpTrigger={undefined} fixed />
        </div>
      </div>
    );
  }

  // ─── REWARD ───────────────────────────────────────────────────────────────
  if (screen === "reward" && earnedCard) {
    return (
      <>
        <RewardReveal rarity={earnedCard} game="astromath" score={5} total={5} onDone={goToComplete} />
        <MilestonePopup />
      </>
    );
  }

  // ─── COMPLETE ─────────────────────────────────────────────────────────────
  if (screen === "complete" && activePlanet) {
    const allDone = PLANETS.every((p) => save.completedPlanets.includes(p.id));
    const nextIdx = PLANETS.findIndex((p) => p.id === activePlanet.id) + 1;
    const nextPlanet = nextIdx < PLANETS.length ? PLANETS[nextIdx] : null;
    const name = (t.planetNames as Record<string, string>)[activePlanet.id];

    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5 gap-6"
        style={{ background: `radial-gradient(ellipse at 50% 30%, ${activePlanet.bg} 0%, #060614 60%)` }}>
        <Starfield />
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
          className="relative z-10 flex flex-col items-center gap-5 text-center w-full max-w-sm">
          <motion.div className="w-28 h-28 rounded-full flex items-center justify-center text-6xl"
            style={{ background: activePlanet.bg, border: `3px solid ${activePlanet.color}`, boxShadow: `0 0 40px ${activePlanet.glow}` }}
            animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>
            {activePlanet.icon}
          </motion.div>
          <div>
            <h2 className="text-2xl font-black text-white">{name}</h2>
            <p className="text-white/50 text-sm mt-1">{t.completed}</p>
          </div>
          {allDone && <div className="text-[#FFD700] font-black text-lg">{t.allDone}</div>}
          <div className="flex flex-col gap-3 w-full">
            {nextPlanet && !allDone && (
              <motion.button onClick={() => startPlanet(nextPlanet)}
                className="w-full py-4 rounded-2xl font-black text-white text-base flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${nextPlanet.color}44, ${nextPlanet.color}88)`, border: `2px solid ${nextPlanet.color}` }}
                whileTap={{ scale: 0.97 }}>
                {t.nextPlanet} → {(t.planetNames as Record<string, string>)[nextPlanet.id]}
              </motion.button>
            )}
            <motion.button onClick={() => { setScreen("map"); setAvatarMood("idle"); }}
              className="w-full py-4 rounded-2xl font-bold text-white/70 text-base border border-white/15 bg-white/5"
              whileTap={{ scale: 0.97 }}>
              {t.backToMap}
            </motion.button>
          </div>
        </motion.div>
        <div className="fixed bottom-4 right-4 z-50">
          <AvatarCompanion {...avatarProps} mood="victory" jumpTrigger={undefined} fixed />
        </div>
        <MilestonePopup />
      </div>
    );
  }

  return null;
}
