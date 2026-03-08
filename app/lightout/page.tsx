"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Lock, Check, ChevronRight, RotateCcw, X, HelpCircle } from "lucide-react";
import Link from "next/link";
import MilestonePopup from "@/components/MilestonePopup";
import RewardReveal from "@/components/RewardReveal";
import { saveCard, generateCardId, type CardRarity } from "@/lib/cards";
import { incrementTotalGames } from "@/lib/milestones";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender } from "@/lib/gender";
import type { AvatarGender } from "@/lib/gender";
import { getActiveSkin, getSkinDef } from "@/lib/skins";
import { getActiveFace, getFaceDef } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";
import { useLang } from "@/components/LanguageProvider";
import MultiplayerExitConfirm from "@/components/MultiplayerExitConfirm";
import MultiplayerAbandonNotice from "@/components/MultiplayerAbandonNotice";
import { submitScore, abandonMatch, submitMixRoundScore, pollMixRound } from "@/lib/multiplayer";
import { getUsername } from "@/lib/username";
import MultiplayerResult from "@/components/MultiplayerResult";

/* ------------------------------------------------------------------ */
/* i18n                                                                */
/* ------------------------------------------------------------------ */
const T = {
  en: {
    title: "LIGHT OUT",
    subtitle: "10 levels · Toggle lights · Turn them all off",
    home: "Home", progress: "Progress", levelLabel: "Level", levelsOf: "levels",
    boss: "🏆 BOSS — ", done: "✓ done",
    hint: "Tap a cell to toggle it + its neighbors. Turn all lights off!",
    levelDone: "✅ LEVEL DONE!", bossDone: "🏆 COMPLETE!", timeUp: "⏰ TIME'S UP!",
    retry: "Retry", nextLevel: "Next Level", expeditionMap: "Expedition Map",
    newExpedition: "🔄 New Expedition", time: "TIME", moves: "MOVES", par: "PAR",
    legendaryDesc: "You earned the legendary Light Out card!",
    rarity: { bronze: "BRONZE", silver: "SILVER", gold: "GOLD", legendary: "LEGENDARY" },
    card: "CARD", lightsLeft: "lights left",
    waiting: "Waiting for", multiResult: "Results",
    howToPlay: "How to play?",
    tutStep1: "Tap any lit cell...",
    tutStep2: "It toggles itself AND its neighbors!",
    tutStep3: "Turn ALL lights off to win!",
    tutGotIt: "Got it!",
  },
  hu: {
    title: "FÉNYOLTÓ",
    subtitle: "10 szint · Kapcsold át · Oltsd el az összeset",
    home: "Főoldal", progress: "Haladás", levelLabel: "Szint", levelsOf: "szint",
    boss: "🏆 BOSS — ", done: "✓ kész",
    hint: "Érintsd a cellát → átkapcsolja magát + szomszédait. Oltsd el mindet!",
    levelDone: "✅ SZINT KÉSZ!", bossDone: "🏆 KÉSZ!", timeUp: "⏰ LEJÁRT!",
    retry: "Újra", nextLevel: "Következő szint", expeditionMap: "Expedíció",
    newExpedition: "🔄 Új expedíció", time: "IDŐ", moves: "LÉPÉS", par: "PAR",
    legendaryDesc: "Megszerezted a legendás Fényoltó kártyát!",
    rarity: { bronze: "BRONZ", silver: "EZÜST", gold: "ARANY", legendary: "LEGENDÁS" },
    card: "KÁRTYA", lightsLeft: "fény maradt",
    waiting: "Várakozás:", multiResult: "Eredmény",
    howToPlay: "Hogyan játssz?",
    tutStep1: "Érintsd meg bármelyik világító cellát...",
    tutStep2: "Átkapcsolja magát ÉS a szomszédait!",
    tutStep3: "Oltsd el az ÖSSZES fényt a győzelemhez!",
    tutGotIt: "Értem!",
  },
  de: {
    title: "LICHT AUS",
    subtitle: "10 Level · Schalte um · Lösche alle Lichter",
    home: "Start", progress: "Fortschritt", levelLabel: "Level", levelsOf: "Level",
    boss: "🏆 BOSS — ", done: "✓ fertig",
    hint: "Tippe eine Zelle an → schaltet sich + Nachbarn um. Lösche alle!",
    levelDone: "✅ LEVEL GESCHAFFT!", bossDone: "🏆 FERTIG!", timeUp: "⏰ ZEIT UM!",
    retry: "Nochmal", nextLevel: "Nächstes Level", expeditionMap: "Expedition",
    newExpedition: "🔄 Neue Expedition", time: "ZEIT", moves: "ZÜGE", par: "PAR",
    legendaryDesc: "Du hast die legendäre Licht Aus Karte erhalten!",
    rarity: { bronze: "BRONZE", silver: "SILBER", gold: "GOLD", legendary: "LEGENDÄR" },
    card: "KARTE", lightsLeft: "Lichter übrig",
    waiting: "Warten auf", multiResult: "Ergebnis",
    howToPlay: "Wie spielt man?",
    tutStep1: "Tippe auf eine leuchtende Zelle...",
    tutStep2: "Sie schaltet sich UND ihre Nachbarn um!",
    tutStep3: "Schalte ALLE Lichter aus, um zu gewinnen!",
    tutGotIt: "Verstanden!",
  },
  ro: {
    title: "STINGE LUMINA",
    subtitle: "10 niveluri · Comută · Stinge toate luminile",
    home: "Acasă", progress: "Progres", levelLabel: "Nivel", levelsOf: "niveluri",
    boss: "🏆 BOSS — ", done: "✓ gata",
    hint: "Apasă o celulă → comută ea + vecinii. Stinge toate!",
    levelDone: "✅ NIVEL TERMINAT!", bossDone: "🏆 TERMINAT!", timeUp: "⏰ TIMP EXPIRAT!",
    retry: "Din nou", nextLevel: "Nivelul următor", expeditionMap: "Hartă",
    newExpedition: "🔄 Expedíție nouă", time: "TIMP", moves: "PAȘI", par: "PAR",
    legendaryDesc: "Ai câștigat cardul legendar Stinge Lumina!",
    rarity: { bronze: "BRONZ", silver: "ARGINT", gold: "AUR", legendary: "LEGENDAR" },
    card: "CARD", lightsLeft: "lumini rămase",
    waiting: "Așteptare:", multiResult: "Rezultat",
    howToPlay: "Cum se joacă?",
    tutStep1: "Apasă pe orice celulă aprinsă...",
    tutStep2: "Comută ea ȘI vecinii ei!",
    tutStep3: "Stinge TOATE luminile pentru a câștiga!",
    tutGotIt: "Am înțeles!",
  },
};

/* ------------------------------------------------------------------ */
/* Level configs                                                       */
/* ------------------------------------------------------------------ */
interface LOLevel {
  level: number;
  gridSize: number;
  toggleCount: number; // random toggles to create puzzle
  timeLimit: number;   // seconds, 0 = no limit
  parMoves: number;
}

const LEVELS: LOLevel[] = [
  { level: 1,  gridSize: 3, toggleCount: 3,  timeLimit: 0,  parMoves: 5 },
  { level: 2,  gridSize: 3, toggleCount: 4,  timeLimit: 60, parMoves: 7 },
  { level: 3,  gridSize: 3, toggleCount: 5,  timeLimit: 50, parMoves: 9 },
  { level: 4,  gridSize: 4, toggleCount: 4,  timeLimit: 65, parMoves: 8 },
  { level: 5,  gridSize: 4, toggleCount: 5,  timeLimit: 55, parMoves: 10 },
  { level: 6,  gridSize: 4, toggleCount: 6,  timeLimit: 50, parMoves: 12 },
  { level: 7,  gridSize: 5, toggleCount: 5,  timeLimit: 65, parMoves: 11 },
  { level: 8,  gridSize: 5, toggleCount: 6,  timeLimit: 55, parMoves: 13 },
  { level: 9,  gridSize: 5, toggleCount: 7,  timeLimit: 50, parMoves: 15 },
  { level: 10, gridSize: 5, toggleCount: 8,  timeLimit: 45, parMoves: 17 },
];

const LEVEL_BADGES = ["💡", "💡", "💡", "⚡", "⚡", "🔥", "🔥", "✨", "✨", "👑"];

/* ------------------------------------------------------------------ */
/* Seeded PRNG (for multiplayer determinism)                           */
/* ------------------------------------------------------------------ */
function seededRng(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  return () => { h ^= h << 13; h ^= h >> 17; h ^= h << 5; return (h >>> 0) / 4294967296; };
}

/* ------------------------------------------------------------------ */
/* Puzzle generation                                                   */
/* ------------------------------------------------------------------ */
function toggleCell(grid: boolean[], gridSize: number, index: number) {
  const row = Math.floor(index / gridSize);
  const col = index % gridSize;
  grid[index] = !grid[index];
  if (row > 0) grid[index - gridSize] = !grid[index - gridSize];
  if (row < gridSize - 1) grid[index + gridSize] = !grid[index + gridSize];
  if (col > 0) grid[index - 1] = !grid[index - 1];
  if (col < gridSize - 1) grid[index + 1] = !grid[index + 1];
}

function generatePuzzle(cfg: LOLevel, rng: () => number): boolean[] {
  const total = cfg.gridSize * cfg.gridSize;
  const grid = new Array(total).fill(false);
  const used = new Set<number>();
  while (used.size < cfg.toggleCount) {
    const cell = Math.floor(rng() * total);
    if (!used.has(cell)) {
      used.add(cell);
      toggleCell(grid, cfg.gridSize, cell);
    }
  }
  // Ensure at least 1 light is on
  if (grid.every(c => !c)) {
    const cell = Math.floor(rng() * total);
    toggleCell(grid, cfg.gridSize, cell);
  }
  return grid;
}

function countLightsOn(grid: boolean[]): number {
  return grid.filter(Boolean).length;
}

/* ------------------------------------------------------------------ */
/* Card rarity                                                         */
/* ------------------------------------------------------------------ */
function calcRarity(moves: number, par: number, level: number): CardRarity {
  if (level === 10) return "legendary";
  const ratio = moves / par;
  if (ratio <= 1) return "silver";
  if (ratio <= 1.5) return "silver";
  return "bronze";
}

const RARITY_COLORS: Record<CardRarity, string> = {
  bronze: "#CD7F32", silver: "#C0C0C0", gold: "#FFD700", legendary: "#B44DFF",
};

/* ------------------------------------------------------------------ */
/* Save / Load                                                         */
/* ------------------------------------------------------------------ */
const SAVE_KEY = "lightout_expedition_v1";
interface LOSave { currentLevel: number; completedLevels: number[]; }

function loadSave(): LOSave {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try { const r = localStorage.getItem(SAVE_KEY); if (r) return JSON.parse(r); } catch { /* ignore */ }
  return { currentLevel: 1, completedLevels: [] };
}
function writeSave(s: LOSave) { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }

type Screen = "expedition" | "playing" | "reward" | "levelComplete" | "levelFailed" | "multi-waiting" | "multi-result";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory" | "surprised" | "confused" | "laughing";

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */
export default function LightOutPageWrapper() {
  return <Suspense><LightOutPage /></Suspense>;
}

/* ------------------------------------------------------------------ */
/* Tutorial overlay — animated demo with hand cursor                    */
/* ------------------------------------------------------------------ */
type TLang = typeof T.en;

function TutorialOverlay({ t, onClose }: { t: TLang; onClose: () => void }) {
  const [step, setStep] = useState(0);
  // 3x3 demo grid
  const [demoGrid, setDemoGrid] = useState([
    false, true,  false,
    true,  true,  true,
    false, true,  false,
  ]);
  const [cursorPos, setCursorPos] = useState<{ row: number; col: number } | null>(null);
  const [tapping, setTapping] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Animated sequence: cursor moves to center → taps → shows result
  useEffect(() => {
    if (step !== 0) return;
    // Reset grid to plus pattern
    setDemoGrid([false, true, false, true, true, true, false, true, false]);
    setCursorPos(null);
    setTapping(false);

    // Step 1: cursor appears and moves to center (1,1)
    const t1 = setTimeout(() => setCursorPos({ row: 1, col: 1 }), 600);
    // Step 2: tap animation
    const t2 = setTimeout(() => setTapping(true), 1400);
    // Step 3: toggle the grid (center cell toggles self + neighbors)
    const t3 = setTimeout(() => {
      setTapping(false);
      // Toggle center (1,1) and its neighbors
      setDemoGrid([false, false, false, false, false, false, false, false, false]);
      setStep(1);
    }, 1800);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [step]);

  // After step 1, show "all off" for a moment, then move to step 2
  useEffect(() => {
    if (step !== 1) return;
    const t1 = setTimeout(() => setStep(2), 1500);
    return () => clearTimeout(t1);
  }, [step]);

  // Step 2: show a new pattern and demonstrate another tap
  useEffect(() => {
    if (step !== 2) return;
    // Set a new demo pattern
    setDemoGrid([true, false, true, false, true, false, true, false, true]);
    setCursorPos(null);
    setTapping(false);

    const t1 = setTimeout(() => setCursorPos({ row: 0, col: 0 }), 600);
    const t2 = setTimeout(() => setTapping(true), 1400);
    const t3 = setTimeout(() => {
      setTapping(false);
      // Toggle (0,0) → affects (0,0),(0,1),(1,0)
      setDemoGrid([false, true, true, true, true, false, true, false, true]);
      setStep(3);
    }, 1800);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [step]);

  // Step 3: hold result, then loop back
  useEffect(() => {
    if (step !== 3) return;
    const t1 = setTimeout(() => {
      setCursorPos(null);
      setStep(4);
    }, 2000);
    return () => clearTimeout(t1);
  }, [step]);

  const stepText = step <= 1 ? t.tutStep1 : step <= 3 ? t.tutStep2 : t.tutStep3;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm px-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        className="bg-[#12122A] border border-white/10 rounded-2xl p-6 max-w-xs w-full flex flex-col items-center gap-5"
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
      >
        <h3 className="text-lg font-black text-[#00FF88]">{t.howToPlay}</h3>

        {/* Demo grid */}
        <div className="relative">
          <div className="grid grid-cols-3 gap-2" style={{ width: "156px" }}>
            {demoGrid.map((isOn, i) => (
              <motion.div
                key={i}
                className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center ${
                  isOn ? "bg-[#00FF88]/20 border-[#00FF88]/50" : "bg-white/[0.03] border-white/10"
                }`}
                style={isOn ? { boxShadow: "0 0 16px rgba(0,255,136,0.3)" } : {}}
                animate={{ scale: isOn ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 0.3 }}
              >
                {isOn && <Lightbulb size={20} className="text-[#00FF88]" style={{ filter: "drop-shadow(0 0 4px rgba(0,255,136,0.5))" }} />}
              </motion.div>
            ))}
          </div>

          {/* Animated hand cursor */}
          <AnimatePresence>
            {cursorPos && (
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  left: cursorPos.col * 56 + 24,
                  top: cursorPos.row * 56 + 28,
                }}
                initial={{ opacity: 0, x: 40, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: tapping ? 0.85 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
                  <path d="M10 8C10 6.34 11.34 5 13 5s3 1.34 3 3v7h1.5c.83 0 1.5.67 1.5 1.5V22c0 4.42-3.58 8-8 8h-1c-3.87 0-7-3.13-7-7v-4.5c0-.83.67-1.5 1.5-1.5S6 7.67 6 8.5V15h1V8c0-1.66 1.34-3 3-3z" fill="white" fillOpacity="0.9" stroke="rgba(0,255,136,0.6)" strokeWidth="1.5"/>
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Step text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={stepText}
            className="text-white/80 text-sm text-center font-medium h-10 flex items-center"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {stepText}
          </motion.p>
        </AnimatePresence>

        {/* Replay / Got it */}
        <div className="flex gap-3">
          <motion.button
            onClick={() => setStep(0)}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm font-bold"
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw size={14} />
          </motion.button>
          <motion.button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] text-sm font-bold"
            whileTap={{ scale: 0.95 }}
          >
            {t.tutGotIt}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function LightOutPage() {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const searchParams = useSearchParams();
  const router = useRouter();

  // ── Multiplayer params ──
  const matchId = searchParams.get("match");
  const seed = searchParams.get("seed");
  const playerNum = searchParams.get("p");
  const opponentName = searchParams.get("vs") || "???";
  const urlLevel = searchParams.get("level");
  const mixround = searchParams.get("mixround");
  const isMultiplayer = !!matchId;
  const isMix = !!mixround;

  // ── Avatar ──
  const [avatarGender, setAvatarGender] = useState<AvatarGender>("girl");
  const [avatarSkin, setAvatarSkin] = useState(() => getSkinDef("default"));
  const [avatarFace, setAvatarFace] = useState(() => getFaceDef("default"));
  const [avatarTop, setAvatarTop] = useState<ReturnType<typeof getTopDef> | null>(null);
  const [avatarBottom, setAvatarBottom] = useState<ReturnType<typeof getBottomDef> | null>(null);
  const [avatarShoe, setAvatarShoe] = useState<ReturnType<typeof getShoeDef> | null>(null);
  const [avatarCape, setAvatarCape] = useState<ReturnType<typeof getCapeDef> | null>(null);
  const [avatarGlasses, setAvatarGlasses] = useState<ReturnType<typeof getGlassesDef> | null>(null);
  const [avatarGloves, setAvatarGloves] = useState<ReturnType<typeof getGloveDef> | null>(null);
  const [avatarHat, setAvatarHat] = useState<ReturnType<typeof getHatDef> | null>(null);
  const [avatarTrail, setAvatarTrail] = useState<ReturnType<typeof getTrailDef> | null>(null);
  const [avatarMood, setAvatarMood] = useState<AvatarMood>("idle");
  const [avatarJump, setAvatarJump] = useState<{ reaction: "happy" | "surprised" | "victory" | "confused" | "laughing" | null; timestamp: number } | undefined>(undefined);
  const avatarTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setAvatarGender(getGender());
    setAvatarSkin(getSkinDef(getActiveSkin()));
    setAvatarFace(getFaceDef(getActiveFace()));
    const topId = getActive("top"); setAvatarTop(topId ? getTopDef(topId) : null);
    const botId = getActive("bottom"); setAvatarBottom(botId ? getBottomDef(botId) : null);
    const shoeId = getActive("shoe"); setAvatarShoe(shoeId ? getShoeDef(shoeId) : null);
    const capeId = getActive("cape"); setAvatarCape(capeId ? getCapeDef(capeId) : null);
    const glsId = getActive("glasses"); setAvatarGlasses(glsId ? getGlassesDef(glsId) : null);
    const glvId = getActive("gloves"); setAvatarGloves(glvId ? getGloveDef(glvId) : null);
    const hatId = getActiveHat(); setAvatarHat(hatId ? getHatDef(hatId) : null);
    const trailId = getActiveTrail(); setAvatarTrail(trailId ? getTrailDef(trailId) : null);
  }, []);

  const avatarProps = {
    gender: avatarGender, activeSkin: avatarSkin, activeFace: avatarFace,
    activeTop: avatarTop, activeBottom: avatarBottom, activeShoe: avatarShoe,
    activeCape: avatarCape, activeGlasses: avatarGlasses, activeGloves: avatarGloves,
    activeHat: avatarHat, activeTrail: avatarTrail,
  };

  function triggerAvatar(mood: AvatarMood, duration: number, jump?: "happy" | "surprised" | "victory" | "confused" | "laughing") {
    if (avatarTimerRef.current) clearTimeout(avatarTimerRef.current);
    setAvatarMood(mood);
    if (jump) setAvatarJump({ reaction: jump, timestamp: Date.now() });
    avatarTimerRef.current = setTimeout(() => setAvatarMood("focused"), duration);
  }

  // ── Navigation ──
  const [save, setSave] = useState<LOSave>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen] = useState<Screen>("expedition");
  const [activeLevel, setActiveLevel] = useState(1);
  const [milestoneKey, setMilestoneKey] = useState(0);

  useEffect(() => { setSave(loadSave()); }, []);

  // Auto-start multiplayer
  const multiStarted = useRef(false);
  useEffect(() => {
    if (isMultiplayer && urlLevel && !multiStarted.current) {
      multiStarted.current = true;
      const lv = Math.min(9, Math.max(1, parseInt(urlLevel) || 1));
      setTimeout(() => startLevel(lv), 100);
    }
  }, [isMultiplayer, urlLevel]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Game state ──
  const [grid, setGrid] = useState<boolean[]>([]);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [lastToggled, setLastToggled] = useState<number | null>(null);

  // ── Multiplayer state ──
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);
  const [myFinalScore, setMyFinalScore] = useState<number | null>(null);
  const [mixFinished, setMixFinished] = useState(false);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  // Refs
  const gridRef = useRef<boolean[]>([]);
  const saveRef = useRef(save);
  const cfgRef = useRef<LOLevel>(LEVELS[0]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeLeftRef = useRef(0);
  const movesRef = useRef(0);
  const gameActiveRef = useRef(false);
  saveRef.current = save;

  function stopTimer() {
    gameActiveRef.current = false;
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }

  function handleWin(finalMoves: number) {
    stopTimer();
    const cfg = cfgRef.current;
    const rarity = calcRarity(finalMoves, cfg.parMoves, cfg.level);
    saveCard({ id: generateCardId(), game: "lightout", rarity, score: Math.max(1, cfg.parMoves * 2 - finalMoves), total: cfg.parMoves * 2, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    setEarnedCard(rarity);
    incrementTotalGames();

    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      triggerAvatar("happy", 99999, "victory");
      // Lower score = better in Light Out (fewer moves), but multiplayer expects higher = better
      // So send inverted score: parMoves*2 - moves (higher = better)
      const finalScore = Math.max(0, cfg.parMoves * 2 - finalMoves);
      if (isMix) {
        submitMixRoundScore(matchId, finalScore, playerNum === "1").then(() => setScreen("multi-waiting"));
      } else {
        submitScore(matchId, finalScore, playerNum === "1").then(() => setScreen("multi-waiting"));
      }
      return;
    }

    triggerAvatar(cfg.level === 10 ? "victory" : "happy", 3000, cfg.level === 10 ? "victory" : "happy");
    const currentSave = saveRef.current;
    const newSave: LOSave = {
      currentLevel: Math.min(10, Math.max(currentSave.currentLevel, cfg.level + 1)),
      completedLevels: [...new Set([...currentSave.completedLevels, cfg.level])],
    };
    setSave(newSave);
    writeSave(newSave);
    setScreen("reward");
  }

  function handleTimeout() {
    stopTimer();
    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      triggerAvatar("confused", 2000, "confused");
      const finalScore = 0;
      if (isMix) {
        submitMixRoundScore(matchId, finalScore, playerNum === "1").then(() => setScreen("multi-waiting"));
      } else {
        submitScore(matchId, finalScore, playerNum === "1").then(() => setScreen("multi-waiting"));
      }
      return;
    }
    triggerAvatar("disappointed", 3000);
    setScreen("levelFailed");
  }

  function startLevel(levelNum: number) {
    const cfg = LEVELS[levelNum - 1];
    cfgRef.current = cfg;
    setActiveLevel(levelNum);

    const rng = seed ? seededRng(`${seed}-${levelNum}`) : seededRng(`${Date.now()}-${Math.random()}`);
    const puzzle = generatePuzzle(cfg, rng);
    gridRef.current = [...puzzle];
    setGrid([...puzzle]);
    movesRef.current = 0;
    setMoves(0);
    setEarnedCard(null);
    setLastToggled(null);
    setScoreSubmitted(false);
    timeLeftRef.current = cfg.timeLimit;
    setTimeLeft(cfg.timeLimit);
    stopTimer();
    gameActiveRef.current = true;
    if (cfg.timeLimit > 0) {
      timerRef.current = setInterval(() => {
        timeLeftRef.current--;
        setTimeLeft(timeLeftRef.current);
        if (timeLeftRef.current <= 0) handleTimeout();
      }, 1000);
    }
    triggerAvatar("focused", 5000);
    setScreen("playing");
  }

  function handleCellClick(index: number) {
    if (!gameActiveRef.current) return;
    const cfg = cfgRef.current;
    const newGrid = [...gridRef.current];
    toggleCell(newGrid, cfg.gridSize, index);
    gridRef.current = newGrid;
    setGrid([...newGrid]);
    movesRef.current++;
    setMoves(movesRef.current);
    setLastToggled(index);

    // Check win
    if (newGrid.every(c => !c)) {
      handleWin(movesRef.current);
    }
  }

  // ── Multiplayer polling ──
  useEffect(() => {
    if (screen !== "multi-waiting" || !isMultiplayer || !matchId) return;
    const isP1 = playerNum === "1";
    const checkMatch = async () => {
      if (isMix) {
        const result = await pollMixRound(matchId, parseInt(mixround || "1"), isP1, opponentName);
        if (result.action === "finished") { setMyFinalScore(result.myWins); setOppFinalScore(result.oppWins); setMixFinished(true); setScreen("multi-result"); return true; }
        if (result.action === "next") { router.push(result.url); return true; }
        return false;
      } else {
        const { supabase } = await import("@/lib/supabase/client");
        const { data } = await supabase.from("multiplayer_matches").select("*").eq("id", matchId).single();
        if (!data) return false;
        const oppDone = isP1 ? data.player2_done : data.player1_done;
        const oppScore = isP1 ? data.player2_score : data.player1_score;
        if (oppDone && oppScore !== null) { setOppFinalScore(oppScore); setScreen("multi-result"); return true; }
        return false;
      }
    };
    checkMatch();
    const interval = setInterval(async () => { if (await checkMatch()) clearInterval(interval); }, 2000);
    return () => clearInterval(interval);
  }, [screen, isMultiplayer, matchId, isMix, playerNum, router, opponentName, mixround]);

  // ── Helpers ──
  const cfg = LEVELS[activeLevel - 1];
  const lightsOn = countLightsOn(grid);

  // ── Render ──
  return (
    <main className="fixed inset-0 bg-[#0A0A1A] text-white overflow-hidden flex flex-col">
      {/* ── EXPEDITION ── */}
      {screen === "expedition" && !isMultiplayer && (
        <motion.div className="flex-1 flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <Link href="/">
              <motion.div className="text-white/70 text-sm font-medium" whileTap={{ scale: 0.95 }}>{t.home}</motion.div>
            </Link>
            <div className="text-white/60 text-xs">{save.completedLevels.length}/10 {t.levelsOf}</div>
          </div>

          {/* Title */}
          <div className="text-center px-4 pb-4">
            <h1 className="text-2xl font-black tracking-wider" style={{ color: "#00FF88", filter: "drop-shadow(0 0 8px rgba(0,255,136,0.3))" }}>{t.title}</h1>
            <p className="text-white/60 text-xs mt-1">{t.subtitle}</p>
          </div>

          {/* How to play button */}
          <div className="flex justify-center mb-3">
            <motion.button
              onClick={() => setShowTutorial(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:bg-white/10 transition-colors"
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            >
              <HelpCircle size={13} /> {t.howToPlay}
            </motion.button>
          </div>

          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <motion.div className="w-20 h-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <AvatarCompanion fixed={false} mood={avatarMood} jumpTrigger={avatarJump} {...avatarProps} />
            </motion.div>
          </div>

          {/* Level grid */}
          <div className="flex-1 overflow-y-auto px-4 pb-8">
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              {LEVELS.map((lvl, i) => {
                const completed = save.completedLevels.includes(lvl.level);
                const locked = lvl.level > save.currentLevel;
                const isBoss = lvl.level === 10;
                return (
                  <motion.button
                    key={lvl.level}
                    disabled={locked}
                    onClick={() => startLevel(lvl.level)}
                    className={`relative rounded-xl p-4 border text-left transition-all ${
                      locked ? "border-white/5 bg-white/[0.02] opacity-40" :
                      completed ? "border-[#00FF88]/20 bg-[#00FF88]/5" :
                      "border-white/10 bg-white/5 hover:bg-white/10"
                    } ${isBoss ? "col-span-2" : ""}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: locked ? 0.4 : 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    whileTap={locked ? {} : { scale: 0.97 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{locked ? <Lock size={18} className="text-white/20" /> : completed ? <Check size={18} className="text-[#00FF88]" /> : LEVEL_BADGES[i]}</span>
                      <div>
                        <div className="font-bold text-sm">
                          {isBoss && <span className="text-yellow-400">{t.boss}</span>}
                          {t.levelLabel} {lvl.level}
                        </div>
                        <div className="text-white/60 text-[10px]">
                          {lvl.gridSize}×{lvl.gridSize} · {lvl.timeLimit > 0 ? `${lvl.timeLimit}s` : "∞"} · {t.par} {lvl.parMoves}
                        </div>
                      </div>
                      {completed && <span className="ml-auto text-[#00FF88]/50 text-xs font-bold">{t.done}</span>}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* New expedition button */}
            {save.completedLevels.length === 10 && (
              <motion.button
                className="mt-4 mx-auto block text-sm text-[#00FF88]/60 hover:text-[#00FF88] transition-colors"
                onClick={() => { const fresh = { currentLevel: 1, completedLevels: [] as number[] }; setSave(fresh); writeSave(fresh); }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              >{t.newExpedition}</motion.button>
            )}
          </div>
        </motion.div>
      )}

      {/* ── PLAYING ── */}
      {screen === "playing" && (
        <motion.div className="flex-1 flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* HUD */}
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => { if (isMultiplayer) setShowExitConfirm(true); else { setAvatarMood("idle"); stopTimer(); setScreen("expedition"); } }}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
            ><X size={14} /></button>
            <div className="flex items-center gap-4 text-xs font-bold">
              <div className="text-white/80">{t.levelLabel} {activeLevel}</div>
              <div><span className="text-[#00FF88]">{moves}</span><span className="text-white/60">/{cfg.parMoves} {t.moves}</span></div>
              {cfg.timeLimit > 0 && (
                <div className={timeLeft <= 10 ? "text-red-400 animate-pulse" : "text-white/80"}>
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
                </div>
              )}
            </div>
            <div className="text-white/70 text-xs font-bold">{lightsOn} 💡</div>
          </div>

          {/* Grid */}
          <div className="flex-1 flex items-center justify-center p-4">
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: `repeat(${cfg.gridSize}, 1fr)`,
                width: `min(${cfg.gridSize * 68}px, 90vw)`,
                maxWidth: "360px",
              }}
            >
              {grid.map((isOn, i) => (
                <motion.button
                  key={i}
                  onClick={() => handleCellClick(i)}
                  className={`aspect-square rounded-xl border-2 transition-colors relative ${
                    isOn
                      ? "bg-[#00FF88]/20 border-[#00FF88]/50"
                      : "bg-white/[0.03] border-white/10"
                  }`}
                  style={isOn ? { boxShadow: "0 0 20px rgba(0,255,136,0.3), inset 0 0 12px rgba(0,255,136,0.15)" } : {}}
                  whileTap={{ scale: 0.88 }}
                  animate={{
                    scale: lastToggled === i ? [1, 0.9, 1] : 1,
                  }}
                  transition={{ duration: 0.15 }}
                >
                  {isOn && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Lightbulb size={cfg.gridSize <= 3 ? 28 : cfg.gridSize <= 4 ? 22 : 18} className="text-[#00FF88]" style={{ filter: "drop-shadow(0 0 6px rgba(0,255,136,0.5))" }} />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Hint */}
          <div className="text-center text-white/50 text-[10px] px-4 pb-3">{t.hint}</div>

          {/* Reset button */}
          <div className="flex justify-center pb-4">
            <motion.button
              onClick={() => startLevel(activeLevel)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-xs font-bold hover:bg-white/10 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw size={12} /> {t.retry}
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* ── REWARD REVEAL ── */}
      {screen === "reward" && earnedCard && (
        <RewardReveal
          rarity={earnedCard}
          game="lightout"
          score={Math.max(1, cfg.parMoves * 2 - moves)}
          total={cfg.parMoves * 2}
          onDone={() => {
            setScreen("levelComplete");
            setMilestoneKey(k => k + 1);
          }}
        />
      )}

      {/* ── LEVEL COMPLETE ── */}
      {screen === "levelComplete" && (
        <motion.div className="flex-1 flex flex-col items-center justify-center gap-5 px-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="w-24 h-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <AvatarCompanion fixed={false} mood={avatarMood} jumpTrigger={avatarJump} {...avatarProps} />
          </motion.div>
          <div className="text-center">
            <h2 className="text-xl font-black" style={{ color: "#00FF88" }}>
              {activeLevel === 10 ? t.bossDone : t.levelDone}
            </h2>
            <p className="text-white/70 text-sm mt-1">{moves} {t.moves} ({t.par}: {cfg.parMoves})</p>
          </div>
          <div className="flex gap-3">
            <motion.button
              onClick={() => { setAvatarMood("idle"); setScreen("expedition"); }}
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-bold"
              whileTap={{ scale: 0.95 }}
            >{t.expeditionMap}</motion.button>
            {activeLevel < 10 && (
              <motion.button
                onClick={() => startLevel(activeLevel + 1)}
                className="px-5 py-2.5 rounded-xl bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] text-sm font-bold flex items-center gap-1"
                whileTap={{ scale: 0.95 }}
              >{t.nextLevel} <ChevronRight size={14} /></motion.button>
            )}
          </div>
          <MilestonePopup key={milestoneKey} />
        </motion.div>
      )}

      {/* ── LEVEL FAILED ── */}
      {screen === "levelFailed" && (
        <motion.div className="flex-1 flex flex-col items-center justify-center gap-5 px-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="w-20 h-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <AvatarCompanion fixed={false} mood="disappointed" {...avatarProps} />
          </motion.div>
          <h2 className="text-xl font-black text-red-400">{t.timeUp}</h2>
          <p className="text-white/60 text-sm">{lightsOn} {t.lightsLeft}</p>
          <div className="flex gap-3">
            <motion.button
              onClick={() => { setAvatarMood("idle"); setScreen("expedition"); }}
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-bold"
              whileTap={{ scale: 0.95 }}
            >{t.expeditionMap}</motion.button>
            <motion.button
              onClick={() => startLevel(activeLevel)}
              className="px-5 py-2.5 rounded-xl bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] text-sm font-bold flex items-center gap-1"
              whileTap={{ scale: 0.95 }}
            ><RotateCcw size={14} /> {t.retry}</motion.button>
          </div>
        </motion.div>
      )}

      {/* ── MULTI WAITING ── */}
      {screen === "multi-waiting" && (
        <motion.div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm gap-5 px-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="text-3xl font-black text-[#00FF88]">{moves} {t.moves}</motion.div>
          {isMix && <span className="text-white/60 text-xs font-bold uppercase">Round {mixround} ✓</span>}
          <motion.div className="w-10 h-10 border-2 border-[#00FF88] border-t-transparent rounded-full"
            animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
          <span className="text-white/60 text-sm font-medium text-center">{t.waiting} {opponentName}...</span>
        </motion.div>
      )}

      {/* ── MULTI RESULT ── */}
      {screen === "multi-result" && oppFinalScore !== null && (
        <MultiplayerResult
          myScore={myFinalScore !== null ? myFinalScore : Math.max(0, cfg.parMoves * 2 - moves)}
          oppScore={oppFinalScore}
          myName={getUsername() || "???"}
          oppName={opponentName}
          onContinue={() => router.push("/multiplayer")}
        />
      )}

      {/* ── MULTI OVERLAYS ── */}
      {isMultiplayer && matchId && (
        <>
          <MultiplayerExitConfirm open={showExitConfirm}
            onStay={() => setShowExitConfirm(false)}
            onLeave={() => { abandonMatch(matchId); router.push("/multiplayer"); }} />
          {screen === "playing" && <MultiplayerAbandonNotice matchId={matchId} opponentName={opponentName} />}
        </>
      )}

      {/* Fixed avatar (solo, non-expedition screens) */}
      {!isMultiplayer && screen === "playing" && (
        <AvatarCompanion fixed mood={avatarMood} jumpTrigger={avatarJump} {...avatarProps} />
      )}

      {/* ── TUTORIAL OVERLAY ── */}
      <AnimatePresence>
        {showTutorial && <TutorialOverlay t={t} onClose={() => setShowTutorial(false)} />}
      </AnimatePresence>
    </main>
  );
}
