"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Home, ChevronRight, Check, X, RefreshCw, Lock } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import AvatarCompanion from "@/components/AvatarCompanion";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores, checkNewMilestones } from "@/lib/milestones";
import { getGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";
import type { AvatarGender } from "@/lib/gender";
import { generateTopicQuestions } from "@/lib/mathCurriculum";
import type { MathQuestion } from "@/lib/mathCurriculum";
import type { CardRarity } from "@/lib/cards";

// ─── Types ────────────────────────────────────────────────────────────────────
type Screen = "map" | "learn" | "quiz" | "reward" | "complete";

interface AstroSave {
  completedPlanets: string[];
  planetScores: Record<string, number>;
}

interface PlanetDef {
  id: string;
  nameKey: string;
  icon: string;
  color: string;
  glow: string;
  bg: string;
  topicKeys: string[];
  svgX: number;
  svgY: number;
  requires?: string; // id of planet that must be completed first
}

// ─── Planet definitions ───────────────────────────────────────────────────────
const PLANETS: PlanetDef[] = [
  {
    id: "numera", nameKey: "numera", icon: "🌍",
    color: "#4ECDC4", glow: "rgba(78,205,196,0.6)", bg: "rgba(78,205,196,0.15)",
    topicKeys: ["add10", "g1_compare"],
    svgX: 160, svgY: 390,
  },
  {
    id: "addix", nameKey: "addix", icon: "🔵",
    color: "#00D4FF", glow: "rgba(0,212,255,0.6)", bg: "rgba(0,212,255,0.15)",
    topicKeys: ["add10"],
    svgX: 75, svgY: 290, requires: "numera",
  },
  {
    id: "minius", nameKey: "minius", icon: "🔴",
    color: "#FF6B6B", glow: "rgba(255,107,107,0.6)", bg: "rgba(255,107,107,0.15)",
    topicKeys: ["sub10"],
    svgX: 240, svgY: 210, requires: "addix",
  },
  {
    id: "voidex", nameKey: "voidex", icon: "⭐",
    color: "#FFD700", glow: "rgba(255,215,0,0.6)", bg: "rgba(255,215,0,0.15)",
    topicKeys: ["g1_ergaenzen", "sub10"],
    svgX: 85, svgY: 130, requires: "minius",
  },
  {
    id: "alpha", nameKey: "alpha", icon: "🚀",
    color: "#B44DFF", glow: "rgba(180,77,255,0.6)", bg: "rgba(180,77,255,0.15)",
    topicKeys: ["add10", "sub10", "g1_compare", "g1_ergaenzen"],
    svgX: 200, svgY: 50, requires: "voidex",
  },
];

const SAVE_KEY = "astromath_save_v1";
const QUESTIONS_PER_PLANET = 5;

// ─── Translations ─────────────────────────────────────────────────────────────
const T = {
  en: {
    title: "AstroMath",
    subtitle: "Grade 1 · Space Journey",
    start: "Launch!",
    next: "Next",
    startQuiz: "Start Quiz",
    question: "Q",
    of: "/",
    correct: "Correct! ✓",
    wrong: "Wrong!",
    backToMap: "Back to Map",
    retry: "Try Again",
    nextPlanet: "Next Planet",
    completed: "Completed",
    locked: "Locked",
    allDone: "All planets complete! 🏆",
    planetNames: { numera: "Numera", addix: "Addix", minius: "Minius", voidex: "Voidex", alpha: "Alpha HQ" },
    planetSubs: { numera: "Count & Compare", addix: "Addition to 10", minius: "Subtraction to 10", voidex: "Missing Numbers", alpha: "Final Mission" },
    learnSlides: {
      numera: [
        { icon: "🌟", title: "Count the Stars", body: "Count how many you see. Tap each one: 1, 2, 3…" },
        { icon: "⚖️", title: "Which is more?", body: "3 < 5 means 5 is bigger. The open side faces the bigger number!" },
      ],
      addix: [
        { icon: "🚀", title: "Addition", body: "2 rockets + 3 rockets = 5 rockets total. We put them together!" },
        { icon: "➕", title: "Count on!", body: "For 3 + 4: start at 3, count four more: 4, 5, 6, 7 = 7 ✓" },
      ],
      minius: [
        { icon: "💥", title: "Subtraction", body: "5 stars — 2 fly away → only 3 remain. We take away!" },
        { icon: "➖", title: "Count back!", body: "For 7 − 3: start at 7, count back three: 6, 5, 4 = 4 ✓" },
      ],
      voidex: [
        { icon: "❓", title: "Missing Number", body: "4 + __ = 10 — what goes in the gap? Count up from 4 to 10: 5,6,7,8,9,10 → 6!" },
        { icon: "🔢", title: "Number Bonds", body: "6 + 4 = 10, so 10 − 6 = 4. Pairs that make 10 are best friends!" },
      ],
      alpha: [
        { icon: "🏆", title: "Final Mission!", body: "You have learned addition, subtraction, comparing and missing numbers!" },
        { icon: "🚀", title: "Ready?", body: "5 mixed questions await. Use everything you know. Blast off!" },
      ],
    },
  },
  hu: {
    title: "AstroMath",
    subtitle: "1. osztály · Ûrutazás",
    start: "Indulás!",
    next: "Következő",
    startQuiz: "Kvíz indítása",
    question: "K",
    of: "/",
    correct: "Helyes! ✓",
    wrong: "Helytelen!",
    backToMap: "Vissza a térképre",
    retry: "Újra",
    nextPlanet: "Következő bolygó",
    completed: "Teljesítve",
    locked: "Zárva",
    allDone: "Minden bolygó kész! 🏆",
    planetNames: { numera: "Numera", addix: "Addix", minius: "Minius", voidex: "Voidex", alpha: "Alpha Bázis" },
    planetSubs: { numera: "Számolás & összehasonlítás", addix: "Összeadás 10-ig", minius: "Kivonás 10-ig", voidex: "Hiányzó számok", alpha: "Végső misszió" },
    learnSlides: {
      numera: [
        { icon: "🌟", title: "Számold a csillagokat!", body: "Számold meg hányat látsz. Koppints mindegyikre: 1, 2, 3…" },
        { icon: "⚖️", title: "Melyik a több?", body: "3 < 5 azt jelenti, 5 a nagyobb. A nyílt oldal a nagyobb felé néz!" },
      ],
      addix: [
        { icon: "🚀", title: "Összeadás", body: "2 rakéta + 3 rakéta = 5 rakéta összesen. Összetesszük őket!" },
        { icon: "➕", title: "Számolj tovább!", body: "3 + 4-nél: kezdj 3-nál, számolj még négyet: 4, 5, 6, 7 = 7 ✓" },
      ],
      minius: [
        { icon: "💥", title: "Kivonás", body: "5 csillag — 2 elrepül → csak 3 marad. Elveszünk!" },
        { icon: "➖", title: "Számolj vissza!", body: "7 − 3-nál: kezdj 7-nél, számolj vissza hármat: 6, 5, 4 = 4 ✓" },
      ],
      voidex: [
        { icon: "❓", title: "Hiányzó szám", body: "4 + __ = 10 — mi kerül a résbe? Számolj 4-től 10-ig: 5,6,7,8,9,10 → 6!" },
        { icon: "🔢", title: "Számkötelékek", body: "6 + 4 = 10, tehát 10 − 6 = 4. A 10-es párokat ismerd meg!" },
      ],
      alpha: [
        { icon: "🏆", title: "Végső misszió!", body: "Megtanultad az összeadást, kivonást, összehasonlítást és hiányzó számokat!" },
        { icon: "🚀", title: "Készen állsz?", body: "5 vegyes kérdés vár. Használj mindent amit tudsz. Fel a csillagokba!" },
      ],
    },
  },
  de: {
    title: "AstroMath",
    subtitle: "Klasse 1 · Weltraumreise",
    start: "Starten!",
    next: "Weiter",
    startQuiz: "Quiz starten",
    question: "F",
    of: "/",
    correct: "Richtig! ✓",
    wrong: "Falsch!",
    backToMap: "Zurück zur Karte",
    retry: "Nochmal",
    nextPlanet: "Nächster Planet",
    completed: "Abgeschlossen",
    locked: "Gesperrt",
    allDone: "Alle Planeten geschafft! 🏆",
    planetNames: { numera: "Numera", addix: "Addix", minius: "Minius", voidex: "Voidex", alpha: "Alpha-Basis" },
    planetSubs: { numera: "Zählen & Vergleichen", addix: "Addition bis 10", minius: "Subtraktion bis 10", voidex: "Fehlende Zahlen", alpha: "Endmission" },
    learnSlides: {
      numera: [
        { icon: "🌟", title: "Zähle die Sterne!", body: "Zähle, wie viele du siehst. Tippe jeden an: 1, 2, 3…" },
        { icon: "⚖️", title: "Was ist mehr?", body: "3 < 5 bedeutet, 5 ist größer. Die offene Seite zeigt zur größeren Zahl!" },
      ],
      addix: [
        { icon: "🚀", title: "Addition", body: "2 Raketen + 3 Raketen = 5 Raketen gesamt. Wir fügen sie zusammen!" },
        { icon: "➕", title: "Weiterzählen!", body: "Bei 3 + 4: starte bei 3, zähle vier weiter: 4, 5, 6, 7 = 7 ✓" },
      ],
      minius: [
        { icon: "💥", title: "Subtraktion", body: "5 Sterne — 2 fliegen weg → nur 3 bleiben. Wir nehmen weg!" },
        { icon: "➖", title: "Zurückzählen!", body: "Bei 7 − 3: starte bei 7, zähle drei zurück: 6, 5, 4 = 4 ✓" },
      ],
      voidex: [
        { icon: "❓", title: "Fehlende Zahl", body: "4 + __ = 10 — was gehört in die Lücke? Zähle von 4 bis 10: 5,6,7,8,9,10 → 6!" },
        { icon: "🔢", title: "Zahlenbindungen", body: "6 + 4 = 10, also 10 − 6 = 4. Paare, die 10 ergeben, sind beste Freunde!" },
      ],
      alpha: [
        { icon: "🏆", title: "Endmission!", body: "Du hast Addition, Subtraktion, Vergleichen und fehlende Zahlen gelernt!" },
        { icon: "🚀", title: "Bereit?", body: "5 gemischte Fragen warten. Nutze alles was du weißt. Los geht's!" },
      ],
    },
  },
  ro: {
    title: "AstroMath",
    subtitle: "Clasa 1 · Călătorie spațială",
    start: "Lansare!",
    next: "Înainte",
    startQuiz: "Începe testul",
    question: "Î",
    of: "/",
    correct: "Corect! ✓",
    wrong: "Greșit!",
    backToMap: "Înapoi la hartă",
    retry: "Încearcă din nou",
    nextPlanet: "Planeta următoare",
    completed: "Finalizat",
    locked: "Blocat",
    allDone: "Toate planetele finalizate! 🏆",
    planetNames: { numera: "Numera", addix: "Addix", minius: "Minius", voidex: "Voidex", alpha: "Baza Alpha" },
    planetSubs: { numera: "Numărare & comparare", addix: "Adunare până la 10", minius: "Scădere până la 10", voidex: "Numere lipsă", alpha: "Misiunea finală" },
    learnSlides: {
      numera: [
        { icon: "🌟", title: "Numără stelele!", body: "Numără câte vezi. Atinge fiecare: 1, 2, 3…" },
        { icon: "⚖️", title: "Care e mai mult?", body: "3 < 5 înseamnă că 5 e mai mare. Partea deschisă arată spre numărul mai mare!" },
      ],
      addix: [
        { icon: "🚀", title: "Adunare", body: "2 rachete + 3 rachete = 5 rachete total. Le punem împreună!" },
        { icon: "➕", title: "Continuă numărarea!", body: "La 3 + 4: pornești de la 3, numeri patru mai departe: 4, 5, 6, 7 = 7 ✓" },
      ],
      minius: [
        { icon: "💥", title: "Scădere", body: "5 stele — 2 zboară → rămân doar 3. Luăm din ele!" },
        { icon: "➖", title: "Numără înapoi!", body: "La 7 − 3: pornești de la 7, numeri trei înapoi: 6, 5, 4 = 4 ✓" },
      ],
      voidex: [
        { icon: "❓", title: "Număr lipsă", body: "4 + __ = 10 — ce intră în spațiu? Numără de la 4 la 10: 5,6,7,8,9,10 → 6!" },
        { icon: "🔢", title: "Perechi de numere", body: "6 + 4 = 10, deci 10 − 6 = 4. Perechile care fac 10 sunt prieteni!" },
      ],
      alpha: [
        { icon: "🏆", title: "Misiunea finală!", body: "Ai învățat adunarea, scăderea, compararea și numerele lipsă!" },
        { icon: "🚀", title: "Ești gata?", body: "5 întrebări mixte te așteaptă. Folosește tot ce știi. Lansare!" },
      ],
    },
  },
} as const;

// ─── Helpers ──────────────────────────────────────────────────────────────────
function loadSave(): AstroSave {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { completedPlanets: [], planetScores: {} };
}

function writeSave(s: AstroSave) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(s));
}

function langToCC(lang: string): string {
  if (lang === "hu") return "HU";
  if (lang === "de") return "DE";
  if (lang === "ro") return "RO";
  return "US";
}

function buildQuestions(planet: PlanetDef, cc: string): MathQuestion[] {
  const allKeys = planet.topicKeys;
  const out: MathQuestion[] = [];
  // distribute questions evenly across topicKeys
  const perKey = Math.ceil(QUESTIONS_PER_PLANET / allKeys.length);
  for (const key of allKeys) {
    const qs = generateTopicQuestions(1, key, cc, perKey);
    out.push(...qs);
  }
  // shuffle & slice to exactly QUESTIONS_PER_PLANET
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out.slice(0, QUESTIONS_PER_PLANET);
}

// ─── Animated starfield ───────────────────────────────────────────────────────
function Starfield() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 4,
    dur: 2 + Math.random() * 3,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// ─── Space Map SVG ────────────────────────────────────────────────────────────
const MAP_W = 320;
const MAP_H = 460;

// Curved SVG path connecting planets bottom → top
const MAP_PATH = `M 160,390 C 100,360 60,320 75,290 C 90,260 210,240 240,210 C 270,180 130,155 85,130 C 50,110 160,80 200,50`;

function SpaceMap({
  completedPlanets,
  onSelect,
  lang,
}: {
  completedPlanets: string[];
  onSelect: (p: PlanetDef) => void;
  lang: string;
}) {
  const t = T[lang as keyof typeof T] ?? T.en;

  function isUnlocked(p: PlanetDef): boolean {
    if (!p.requires) return true;
    return completedPlanets.includes(p.requires);
  }

  return (
    <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} width="100%" style={{ maxHeight: MAP_H }}>
      {/* Nebula blobs */}
      <ellipse cx={200} cy={80} rx={90} ry={50} fill="rgba(180,77,255,0.08)" />
      <ellipse cx={80} cy={220} rx={70} ry={45} fill="rgba(255,107,107,0.07)" />
      <ellipse cx={200} cy={340} rx={80} ry={40} fill="rgba(78,205,196,0.07)" />

      {/* Path (dashed) */}
      <path d={MAP_PATH} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth={2} strokeDasharray="6 6" />

      {/* Planets */}
      {PLANETS.map((p) => {
        const done = completedPlanets.includes(p.id);
        const unlocked = isUnlocked(p);
        const name = (t.planetNames as Record<string, string>)[p.id] ?? p.id;

        return (
          <g key={p.id} onClick={() => unlocked && onSelect(p)} style={{ cursor: unlocked ? "pointer" : "default" }}>
            {/* Glow ring */}
            {unlocked && (
              <circle cx={p.svgX} cy={p.svgY} r={28} fill={p.glow} opacity={0.4} />
            )}
            {/* Planet circle */}
            <circle
              cx={p.svgX} cy={p.svgY} r={22}
              fill={unlocked ? p.bg : "rgba(255,255,255,0.04)"}
              stroke={unlocked ? p.color : "rgba(255,255,255,0.15)"}
              strokeWidth={unlocked ? 2.5 : 1.5}
              opacity={unlocked ? 1 : 0.5}
            />
            {/* Icon or lock */}
            <text x={p.svgX} y={p.svgY + 6} textAnchor="middle" fontSize={18}>
              {unlocked ? p.icon : "🔒"}
            </text>
            {/* Done check */}
            {done && (
              <>
                <circle cx={p.svgX + 17} cy={p.svgY - 17} r={9} fill="#00FF88" />
                <text x={p.svgX + 17} y={p.svgY - 13} textAnchor="middle" fontSize={11} fill="#000" fontWeight="bold">✓</text>
              </>
            )}
            {/* Planet name */}
            <text
              x={p.svgX} y={p.svgY + 36}
              textAnchor="middle" fontSize={10} fontWeight="bold"
              fill={unlocked ? p.color : "rgba(255,255,255,0.3)"}
            >
              {name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AstroMathPage() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  // Avatar
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
  const avatarProps = { gender, activeSkin, activeFace, activeTop, activeBottom, activeShoe, activeCape, activeGlasses, activeGloves, activeHat, activeTrail };

  // Game state
  const [screen, setScreen] = useState<Screen>("map");
  const [save, setSave] = useState<AstroSave>({ completedPlanets: [], planetScores: {} });
  const [activePlanet, setActivePlanet] = useState<PlanetDef | null>(null);
  const [slideIdx, setSlideIdx] = useState(0);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [qIdx, setQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [chosen, setChosen] = useState<number | string | null>(null);
  const [avatarMood, setAvatarMood] = useState<"idle" | "happy" | "victory" | "disappointed" | "focused">("idle");
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => { setSave(loadSave()); }, []);

  const startPlanet = useCallback((planet: PlanetDef) => {
    const cc = langToCC(lang);
    const qs = buildQuestions(planet, cc);
    setActivePlanet(planet);
    setQuestions(qs);
    setQIdx(0);
    setScore(0);
    setStreak(0);
    setChosen(null);
    setSlideIdx(0);
    setScreen("learn");
    setAvatarMood("focused");
  }, [lang]);

  const goToQuiz = useCallback(() => {
    setScreen("quiz");
    setAvatarMood("focused");
  }, []);

  const handleAnswer = useCallback((opt: number | string) => {
    if (chosen !== null) return;
    setChosen(opt);
    const q = questions[qIdx];
    const correct = String(opt) === String(q.correctAnswer);
    if (correct) {
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
      setAvatarMood("happy");
    } else {
      setStreak(0);
      setAvatarMood("disappointed");
    }
  }, [chosen, questions, qIdx]);

  const handleNext = useCallback(() => {
    if (qIdx + 1 < questions.length) {
      setQIdx((i) => i + 1);
      setChosen(null);
      setAvatarMood("focused");
      setAnimKey((k) => k + 1);
    } else {
      // Quiz finished
      const planet = activePlanet!;
      const rarity = calculateRarity(score, QUESTIONS_PER_PLANET, streak, false);

      saveCard({ id: generateCardId(), game: "astromath", rarity, score, total: QUESTIONS_PER_PLANET, date: new Date().toISOString() });
      window.dispatchEvent(new Event("plizio-cards-changed"));
      incrementTotalGames();
      if (score === QUESTIONS_PER_PLANET) incrementPerfectScores();

      checkNewMilestones();

      // Update save
      const newSave: AstroSave = {
        completedPlanets: save.completedPlanets.includes(planet.id)
          ? save.completedPlanets
          : [...save.completedPlanets, planet.id],
        planetScores: { ...save.planetScores, [planet.id]: Math.max(save.planetScores[planet.id] ?? 0, score) },
      };
      setSave(newSave);
      writeSave(newSave);

      setEarnedCard(rarity);
      setAvatarMood("victory");
      setScreen("reward");
    }
  }, [qIdx, questions, score, streak, chosen, activePlanet, save]);

  const goToComplete = useCallback(() => {
    setScreen("complete");
  }, []);

  // ─── MAP screen ────────────────────────────────────────────────────────────
  if (screen === "map") {
    const done = save.completedPlanets.length;
    const total = PLANETS.length;
    return (
      <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden">
        <Starfield />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2">
          <button onClick={() => router.push("/")} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors">
            <Home size={16} />
          </button>
          <div className="text-center">
            <h1 className="text-xl font-black text-white tracking-wide">🚀 {t.title}</h1>
            <p className="text-[10px] text-white/50 font-medium uppercase tracking-widest">{t.subtitle}</p>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 text-xs font-bold">
            {done}/{total}
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative z-10 px-4 mb-1">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-[#4ECDC4] to-[#B44DFF] rounded-full"
              initial={{ width: 0 }} animate={{ width: `${(done / total) * 100}%` }} transition={{ duration: 0.8, ease: "easeOut" }} />
          </div>
        </div>

        {/* Space map */}
        <div className="relative z-10 flex-1 flex flex-col items-center px-4 pb-4">
          <div className="w-full max-w-[340px]">
            <SpaceMap completedPlanets={save.completedPlanets} onSelect={startPlanet} lang={lang} />
          </div>

          {/* Planet list (tap targets on mobile) */}
          <div className="w-full max-w-[340px] flex flex-col gap-2 mt-1">
            {PLANETS.map((p) => {
              const done = save.completedPlanets.includes(p.id);
              const unlocked = !p.requires || save.completedPlanets.includes(p.requires);
              const name = (t.planetNames as Record<string, string>)[p.id];
              const sub = (t.planetSubs as Record<string, string>)[p.id];
              const best = save.planetScores[p.id];
              return (
                <motion.button
                  key={p.id}
                  onClick={() => unlocked && startPlanet(p)}
                  disabled={!unlocked}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all"
                  style={{ background: unlocked ? p.bg : "rgba(255,255,255,0.03)", border: `1.5px solid ${unlocked ? p.color : "rgba(255,255,255,0.1)"}`, opacity: unlocked ? 1 : 0.5 }}
                  whileTap={unlocked ? { scale: 0.97 } : {}}
                >
                  <span className="text-2xl">{unlocked ? p.icon : "🔒"}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-white/90 truncate">{name}</div>
                    <div className="text-[11px] text-white/50 truncate">{sub}</div>
                  </div>
                  {done && best !== undefined && (
                    <div className="text-xs font-bold" style={{ color: p.color }}>{best}/{QUESTIONS_PER_PLANET} ⭐</div>
                  )}
                  {done && <span className="text-[#00FF88] text-sm font-bold">✓</span>}
                  {!done && unlocked && <ChevronRight size={16} className="text-white/40" />}
                  {!unlocked && <Lock size={14} className="text-white/30" />}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Avatar */}
        <div className="fixed bottom-4 right-4 z-50">
          <AvatarCompanion {...avatarProps} mood={avatarMood} jumpTrigger={undefined} fixed />
        </div>
      </div>
    );
  }

  // ─── LEARN screen ──────────────────────────────────────────────────────────
  if (screen === "learn" && activePlanet) {
    const slides = ((t.learnSlides as unknown) as Record<string, { icon: string; title: string; body: string }[]>)[activePlanet.id] ?? [];
    const slide = slides[slideIdx];
    const isLast = slideIdx === slides.length - 1;

    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 50% 0%, ${activePlanet.bg} 0%, #060614 60%)` }}>
        <Starfield />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-4">
          <button onClick={() => setScreen("map")} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors">
            <X size={16} />
          </button>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <div key={i} className="w-6 h-1.5 rounded-full transition-all" style={{ background: i <= slideIdx ? activePlanet.color : "rgba(255,255,255,0.15)" }} />
            ))}
          </div>
          <div className="w-9" />
        </div>

        {/* Slide content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-8 gap-6">
          <AnimatePresence mode="wait">
            <motion.div key={slideIdx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}
              className="flex flex-col items-center gap-5 text-center">
              {/* Big icon */}
              <motion.div
                className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl"
                style={{ background: activePlanet.bg, border: `2px solid ${activePlanet.color}`, boxShadow: `0 0 30px ${activePlanet.glow}` }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                {slide?.icon}
              </motion.div>

              <h2 className="text-2xl font-black text-white leading-tight">{slide?.title}</h2>

              <div className="rounded-2xl px-6 py-4 text-center max-w-xs" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-white/80 text-base leading-relaxed font-medium">{slide?.body}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Avatar small */}
        <div className="relative z-10 flex items-end justify-between px-6 pb-6 gap-4">
          <div className="w-20 h-20 flex-shrink-0">
            <AvatarCompanion {...avatarProps} mood="focused" jumpTrigger={undefined} fixed={false} />
          </div>

          <motion.button
            onClick={() => {
              if (isLast) goToQuiz();
              else setSlideIdx((i) => i + 1);
            }}
            className="flex-1 py-4 rounded-2xl font-black text-lg text-white flex items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${activePlanet.color}33, ${activePlanet.color}66)`, border: `2px solid ${activePlanet.color}`, boxShadow: `0 0 20px ${activePlanet.glow}` }}
            whileTap={{ scale: 0.97 }}
          >
            {isLast ? t.startQuiz : t.next}
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    );
  }

  // ─── QUIZ screen ───────────────────────────────────────────────────────────
  if (screen === "quiz" && activePlanet && questions.length > 0) {
    const q = questions[qIdx];
    const isAnswered = chosen !== null;
    const isCorrect = isAnswered && String(chosen) === String(q.correctAnswer);

    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 50% 0%, ${activePlanet.bg} 0%, #060614 55%)` }}>
        <Starfield />

        {/* HUD */}
        <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3">
          <button onClick={() => setScreen("map")} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors">
            <X size={14} />
          </button>
          {/* Progress dots */}
          <div className="flex gap-1.5 flex-1">
            {questions.map((_, i) => (
              <div key={i} className="flex-1 h-2 rounded-full transition-all"
                style={{ background: i < qIdx ? "#00FF88" : i === qIdx ? activePlanet.color : "rgba(255,255,255,0.12)" }} />
            ))}
          </div>
          <div className="text-white/70 text-sm font-bold">{score}/{QUESTIONS_PER_PLANET}</div>
        </div>

        {/* Question card */}
        <div className="relative z-10 flex-1 flex flex-col items-center px-4 pb-4 gap-4">
          <AnimatePresence mode="wait">
            <motion.div key={animKey} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.25 }}
              className="w-full max-w-sm">
              {/* Question */}
              <div className="rounded-3xl p-6 text-center mb-4 mt-2" style={{ background: "rgba(255,255,255,0.05)", border: `1.5px solid ${activePlanet.color}33` }}>
                <p className="text-sm text-white/50 font-bold uppercase tracking-widest mb-3">
                  {t.question} {qIdx + 1} {t.of} {QUESTIONS_PER_PLANET}
                </p>
                <p className="text-3xl font-black text-white leading-snug">{q.question}</p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 gap-3">
                {q.options.map((opt, i) => {
                  const isThis = chosen !== null && String(opt) === String(chosen);
                  const isRight = String(opt) === String(q.correctAnswer);
                  let bg = "rgba(255,255,255,0.05)";
                  let border = "rgba(255,255,255,0.15)";
                  let textColor = "rgba(255,255,255,0.85)";
                  if (isAnswered) {
                    if (isRight) { bg = "rgba(0,255,136,0.15)"; border = "#00FF88"; textColor = "#00FF88"; }
                    else if (isThis) { bg = "rgba(255,50,50,0.15)"; border = "#FF6B6B"; textColor = "#FF6B6B"; }
                  }
                  return (
                    <motion.button
                      key={i}
                      onClick={() => handleAnswer(opt)}
                      disabled={isAnswered}
                      className="py-5 rounded-2xl font-black text-xl transition-all"
                      style={{ background: bg, border: `2px solid ${border}`, color: textColor }}
                      whileTap={!isAnswered ? { scale: 0.95 } : {}}
                    >
                      {String(opt)}
                    </motion.button>
                  );
                })}
              </div>

              {/* Feedback + Next */}
              <AnimatePresence>
                {isAnswered && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                    className="mt-4 flex flex-col items-center gap-3">
                    <div className={`text-lg font-black ${isCorrect ? "text-[#00FF88]" : "text-[#FF6B6B]"}`}>
                      {isCorrect ? t.correct : t.wrong}
                    </div>
                    <motion.button
                      onClick={handleNext}
                      className="w-full py-4 rounded-2xl font-black text-white text-lg flex items-center justify-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${activePlanet.color}44, ${activePlanet.color}88)`, border: `2px solid ${activePlanet.color}` }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {qIdx + 1 < questions.length ? t.next : (t.planetNames as Record<string, string>)[activePlanet.id]}
                      <ChevronRight size={20} />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
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

  // ─── REWARD screen ─────────────────────────────────────────────────────────
  if (screen === "reward" && earnedCard) {
    return (
      <>
        <RewardReveal rarity={earnedCard} game="astromath" score={score} total={QUESTIONS_PER_PLANET} onDone={goToComplete} />
        {true && (
          <MilestonePopup />
        )}
      </>
    );
  }

  // ─── COMPLETE screen ───────────────────────────────────────────────────────
  if (screen === "complete" && activePlanet) {
    const pct = Math.round((score / QUESTIONS_PER_PLANET) * 100);
    const allDone = PLANETS.every((p) => save.completedPlanets.includes(p.id));
    const nextIdx = PLANETS.findIndex((p) => p.id === activePlanet.id) + 1;
    const nextPlanet = nextIdx < PLANETS.length ? PLANETS[nextIdx] : null;

    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5 gap-6" style={{ background: `radial-gradient(ellipse at 50% 30%, ${activePlanet.bg} 0%, #060614 60%)` }}>
        <Starfield />

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
          className="relative z-10 flex flex-col items-center gap-5 text-center w-full max-w-sm">

          {/* Planet icon big */}
          <motion.div
            className="w-28 h-28 rounded-full flex items-center justify-center text-6xl"
            style={{ background: activePlanet.bg, border: `3px solid ${activePlanet.color}`, boxShadow: `0 0 40px ${activePlanet.glow}` }}
            animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 2.5, repeat: Infinity }}
          >
            {activePlanet.icon}
          </motion.div>

          <div>
            <h2 className="text-2xl font-black text-white">{(t.planetNames as Record<string, string>)[activePlanet.id]}</h2>
            <p className="text-white/50 text-sm mt-1">{t.completed}</p>
          </div>

          {/* Score */}
          <div className="rounded-2xl px-8 py-5 w-full" style={{ background: "rgba(255,255,255,0.05)", border: `1.5px solid ${activePlanet.color}33` }}>
            <div className="text-5xl font-black" style={{ color: activePlanet.color }}>{score}/{QUESTIONS_PER_PLANET}</div>
            <div className="text-white/60 text-sm mt-1 font-medium">{pct}%</div>
          </div>

          {allDone && (
            <div className="text-[#FFD700] font-black text-lg animate-pulse">{t.allDone}</div>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full">
            {nextPlanet && !allDone && (
              <motion.button
                onClick={() => startPlanet(nextPlanet)}
                className="w-full py-4 rounded-2xl font-black text-white text-base flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${nextPlanet.color}44, ${nextPlanet.color}88)`, border: `2px solid ${nextPlanet.color}` }}
                whileTap={{ scale: 0.97 }}
              >
                {t.nextPlanet} → {(t.planetNames as Record<string, string>)[nextPlanet.id]}
              </motion.button>
            )}
            <motion.button
              onClick={() => { setScreen("map"); setAvatarMood("idle"); }}
              className="w-full py-4 rounded-2xl font-bold text-white/70 text-base border border-white/15 bg-white/5"
              whileTap={{ scale: 0.97 }}
            >
              {t.backToMap}
            </motion.button>
            {score < QUESTIONS_PER_PLANET && (
              <motion.button
                onClick={() => startPlanet(activePlanet)}
                className="w-full py-3 rounded-xl font-bold text-white/50 text-sm flex items-center justify-center gap-1.5 border border-white/10 bg-white/3"
                whileTap={{ scale: 0.97 }}
              >
                <RefreshCw size={14} /> {t.retry}
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Avatar */}
        <div className="fixed bottom-4 right-4 z-50">
          <AvatarCompanion {...avatarProps} mood="victory" jumpTrigger={undefined} fixed />
        </div>

        {true && (
          <MilestonePopup />
        )}
      </div>
    );
  }

  return null;
}
