"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Hash, Home, RotateCcw, Lock, Check, ChevronRight } from "lucide-react";
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
import { submitScore, abandonMatch, submitMixRoundScore, advanceMixRound } from "@/lib/multiplayer";
import { getUsername } from "@/lib/username";
import MultiplayerResult from "@/components/MultiplayerResult";

// ─── i18n ────────────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  en: {
    title: "NUMBER RUSH",
    subtitle: "10 levels · Tap in order · Beat the clock",
    home: "Home",
    progress: "Progress",
    levelsOf: "levels",
    levelLabel: "Level",
    boss: "🏆 BOSS — ",
    done: "✓ done",
    found: "FOUND",
    time: "TIME",
    next: "NEXT",
    levelDone: "✅ LEVEL DONE!",
    bossDone: "🏆 COMPLETE!",
    timeUp: "❌ TIME'S UP!",
    finalScore: "NUMBERS FOUND",
    retry: "Retry",
    nextLevel: "Next Level",
    expeditionMap: "Expedition Map",
    newExpedition: "🔄 New Expedition",
    hint: "Tap numbers in order  1 → 2 → 3...",
    legendaryDesc: "You earned the legendary Number Rush card!",
    rarity: { bronze: "BRONZE", silver: "SILVER", gold: "GOLD", legendary: "LEGENDARY" },
    card: "CARD",
    scoredPoints: "Numbers found",
    goalWas: "Goal was",
    almostThere: "— So close!",
    shieldActive: "🛡️ SHIELD ACTIVE",
    revealActive: "👁️ REVEAL ACTIVE",
    rushActive: "⚡ RUSH ACTIVE",
    features: { flash: "Flash", powerups: "Power-ups" },
  },
  hu: {
    title: "SZÁMROHAM",
    subtitle: "10 szint · Sorban érintsd a számokat · Győzd le az időt",
    home: "Főoldal",
    progress: "Haladás",
    levelsOf: "szint",
    levelLabel: "Szint",
    boss: "🏆 BOSS — ",
    done: "✓ kész",
    found: "MEGTALÁLT",
    time: "IDŐ",
    next: "KÖVETKEZŐ",
    levelDone: "✅ SZINT KÉSZ!",
    bossDone: "🏆 KÉSZ!",
    timeUp: "❌ IDEJE LEJÁRT!",
    finalScore: "MEGTALÁLT SZÁMOK",
    retry: "Újra",
    nextLevel: "Következő szint",
    expeditionMap: "Expedíció térkép",
    newExpedition: "🔄 Új expedíció",
    hint: "Sorban érintsd a számokat  1 → 2 → 3...",
    legendaryDesc: "Megszerezted a legendás Számroham kártyát!",
    rarity: { bronze: "BRONZ", silver: "EZÜST", gold: "ARANY", legendary: "LEGENDÁS" },
    card: "KÁRTYA",
    scoredPoints: "Megtalált szám",
    goalWas: "Cél volt",
    almostThere: "— Majdnem!",
    shieldActive: "🛡️ PAJZS AKTÍV",
    revealActive: "👁️ FELFEDÉS AKTÍV",
    rushActive: "⚡ ROHAM AKTÍV",
    features: { flash: "Villanás", powerups: "Power-up-ok" },
  },
  de: {
    title: "NUMBER RUSH",
    subtitle: "10 Level · Zahlen der Reihe nach · Gegen die Zeit",
    home: "Startseite",
    progress: "Fortschritt",
    levelsOf: "Level",
    levelLabel: "Level",
    boss: "🏆 BOSS — ",
    done: "✓ fertig",
    found: "GEFUNDEN",
    time: "ZEIT",
    next: "NÄCHSTE",
    levelDone: "✅ LEVEL GESCHAFFT!",
    bossDone: "🏆 FERTIG!",
    timeUp: "❌ ZEIT UM!",
    finalScore: "GEFUNDENE ZAHLEN",
    retry: "Nochmal",
    nextLevel: "Nächstes Level",
    expeditionMap: "Expedition",
    newExpedition: "🔄 Neue Expedition",
    hint: "Zahlen der Reihe nach tippen  1 → 2 → 3...",
    legendaryDesc: "Du hast die legendäre Number Rush Karte erhalten!",
    rarity: { bronze: "BRONZE", silver: "SILBER", gold: "GOLD", legendary: "LEGENDÄR" },
    card: "KARTE",
    scoredPoints: "Gefundene Zahlen",
    goalWas: "Ziel war",
    almostThere: "— Fast!",
    shieldActive: "🛡️ SCHILD AKTIV",
    revealActive: "👁️ AUFDECKEN AKTIV",
    rushActive: "⚡ RUSH AKTIV",
    features: { flash: "Blitz", powerups: "Power-ups" },
  },
  ro: {
    title: "NUMBER RUSH",
    subtitle: "10 niveluri · Apasă numerele în ordine · Bate ceasul",
    home: "Acasă",
    progress: "Progres",
    levelsOf: "niveluri",
    levelLabel: "Nivel",
    boss: "🏆 BOSS — ",
    done: "✓ gata",
    found: "GĂSITE",
    time: "TIMP",
    next: "URMĂTOR",
    levelDone: "✅ NIVEL TERMINAT!",
    bossDone: "🏆 TERMINAT!",
    timeUp: "❌ TIMP EXPIRAT!",
    finalScore: "NUMERE GĂSITE",
    retry: "Din nou",
    nextLevel: "Nivelul următor",
    expeditionMap: "Hartă",
    newExpedition: "🔄 Expedíție nouă",
    hint: "Apasă numerele în ordine  1 → 2 → 3...",
    legendaryDesc: "Ai câștigat cardul legendar Number Rush!",
    rarity: { bronze: "BRONZ", silver: "ARGINT", gold: "AUR", legendary: "LEGENDAR" },
    card: "CARD",
    scoredPoints: "Numere găsite",
    goalWas: "Obiectiv",
    almostThere: "— Aproape!",
    shieldActive: "🛡️ SCUT ACTIV",
    revealActive: "👁️ DEZVĂLUIRE ACTIVĂ",
    rushActive: "⚡ RUSH ACTIV",
    features: { flash: "Flash", powerups: "Power-up-uri" },
  },
};

// ─── Types ───────────────────────────────────────────────────────────────────

type Screen = "expedition" | "playing" | "reward" | "levelComplete" | "levelFailed" | "multi-waiting" | "multi-result";
type PowerupKind = "freeze" | "reveal" | "shield" | "rush";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory" | "surprised" | "confused" | "laughing";

type GridCell =
  | { type: "number"; value: number; tapped: boolean; hidden: boolean }
  | { type: "powerup"; kind: PowerupKind; used: boolean }
  | { type: "empty" };

interface NRLevelConfig {
  level: number;
  gridSize: number;
  count: number;
  flashDelay: number; // ms after start before numbers hide; 0 = never
  timeLimit: number;
  hasPowerups: boolean;
  powerupCount: number;
}

interface NRSave {
  currentLevel: number;
  completedLevels: number[];
}

interface FloatingMsg {
  id: number;
  text: string;
  color: string;
  x: number;
  y: number;
}

// ─── Level configs ────────────────────────────────────────────────────────────

const LEVELS: NRLevelConfig[] = [
  { level: 1,  gridSize: 3, count: 6,  flashDelay: 0,    timeLimit: 45, hasPowerups: false, powerupCount: 0 },
  { level: 2,  gridSize: 3, count: 9,  flashDelay: 0,    timeLimit: 50, hasPowerups: false, powerupCount: 0 },
  { level: 3,  gridSize: 4, count: 12, flashDelay: 0,    timeLimit: 50, hasPowerups: false, powerupCount: 0 },
  { level: 4,  gridSize: 4, count: 12, flashDelay: 8000, timeLimit: 45, hasPowerups: true,  powerupCount: 2 },
  { level: 5,  gridSize: 4, count: 14, flashDelay: 7500, timeLimit: 42, hasPowerups: true,  powerupCount: 2 },
  { level: 6,  gridSize: 5, count: 16, flashDelay: 7000, timeLimit: 45, hasPowerups: true,  powerupCount: 3 },
  { level: 7,  gridSize: 5, count: 18, flashDelay: 6500, timeLimit: 42, hasPowerups: true,  powerupCount: 3 },
  { level: 8,  gridSize: 5, count: 20, flashDelay: 6000, timeLimit: 40, hasPowerups: true,  powerupCount: 3 },
  { level: 9,  gridSize: 6, count: 24, flashDelay: 5800, timeLimit: 45, hasPowerups: true,  powerupCount: 4 },
  { level: 10, gridSize: 6, count: 28, flashDelay: 5500, timeLimit: 42, hasPowerups: true,  powerupCount: 4 },
];

const LEVEL_BADGES = ["🔢", "🔢", "🔢", "👁️", "👁️", "⚡", "⚡", "🔥", "🔥", "👑"];

const POWERUP_KINDS: PowerupKind[] = ["freeze", "reveal", "shield", "rush"];

const POWERUP_CONFIG: Record<PowerupKind, { icon: string; bg: string; border: string; color: string }> = {
  freeze: { icon: "⏱️", bg: "#001a2a", border: "#00D4FF", color: "#00D4FF" },
  reveal: { icon: "👁️", bg: "#002a1a", border: "#00FF88", color: "#00FF88" },
  shield: { icon: "🛡️", bg: "#1a1a00", border: "#FFD700", color: "#FFD700" },
  rush:   { icon: "⚡", bg: "#1a000a", border: "#FF2D78", color: "#FF2D78" },
};

const RARITY_COLORS: Record<CardRarity, string> = {
  bronze: "#CD7F32", silver: "#C0C0C0", gold: "#FFD700", legendary: "#B44DFF",
};

// ─── Save / Load ──────────────────────────────────────────────────────────────

const SAVE_KEY = "numberrush_expedition_v1";

function loadSave(): NRSave {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try { const raw = localStorage.getItem(SAVE_KEY); if (raw) return JSON.parse(raw); } catch { /* ignore */ }
  return { currentLevel: 1, completedLevels: [] };
}
function writeSave(s: NRSave) { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }

// ─── Grid builder ─────────────────────────────────────────────────────────────

function buildGrid(cfg: NRLevelConfig): GridCell[] {
  const total = cfg.gridSize ** 2;
  const cells: GridCell[] = [];
  for (let i = 1; i <= cfg.count; i++) {
    cells.push({ type: "number", value: i, tapped: false, hidden: false });
  }
  if (cfg.hasPowerups) {
    for (let i = 0; i < cfg.powerupCount; i++) {
      cells.push({ type: "powerup", kind: POWERUP_KINDS[i % POWERUP_KINDS.length], used: false });
    }
  }
  while (cells.length < total) cells.push({ type: "empty" });
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cells[i], cells[j]] = [cells[j], cells[i]];
  }
  return cells;
}

function calcRarity(timeLeft: number, timeLimit: number, level: number): CardRarity {
  if (level === 10) return "legendary";
  const r = timeLeft / timeLimit;
  if (level >= 5 && r > 0.55) return "gold";
  if (r > 0.25) return "silver";
  return "bronze";
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function NumberRushPageWrapper() {
  return <Suspense><NumberRushPage /></Suspense>;
}

function NumberRushPage() {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang as keyof typeof TRANSLATIONS] ?? TRANSLATIONS.en;
  const searchParams = useSearchParams();
  const router = useRouter();

  // ── Multiplayer params ───────────────────────────────────────────────────────
  const matchId = searchParams.get("match");
  const seed = searchParams.get("seed");
  const playerNum = searchParams.get("p");
  const opponentName = searchParams.get("vs") || "???";
  const urlLevel = searchParams.get("level");
  const mixround = searchParams.get("mixround");
  const isMultiplayer = !!matchId;
  const isMix = !!mixround;

  // ── Avatar ──────────────────────────────────────────────────────────────────
  const [avatarGender,  setAvatarGender]  = useState<AvatarGender>("girl");
  const [avatarSkin,    setAvatarSkin]    = useState(() => getSkinDef("default"));
  const [avatarFace,    setAvatarFace]    = useState(() => getFaceDef("default"));
  const [avatarTop,     setAvatarTop]     = useState<ReturnType<typeof getTopDef>     | null>(null);
  const [avatarBottom,  setAvatarBottom]  = useState<ReturnType<typeof getBottomDef>  | null>(null);
  const [avatarShoe,    setAvatarShoe]    = useState<ReturnType<typeof getShoeDef>    | null>(null);
  const [avatarCape,    setAvatarCape]    = useState<ReturnType<typeof getCapeDef>    | null>(null);
  const [avatarGlasses, setAvatarGlasses] = useState<ReturnType<typeof getGlassesDef> | null>(null);
  const [avatarGloves,  setAvatarGloves]  = useState<ReturnType<typeof getGloveDef>   | null>(null);
  const [avatarHat,     setAvatarHat]     = useState<ReturnType<typeof getHatDef>     | null>(null);
  const [avatarTrail,   setAvatarTrail]   = useState<ReturnType<typeof getTrailDef>   | null>(null);
  const [avatarMood,    setAvatarMood]    = useState<AvatarMood>("idle");
  const [avatarJump,    setAvatarJump]    = useState<{ reaction: "happy" | "surprised" | "victory" | "confused" | "laughing" | null; timestamp: number } | undefined>(undefined);
  const avatarTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setAvatarGender(getGender());
    setAvatarSkin(getSkinDef(getActiveSkin()));
    setAvatarFace(getFaceDef(getActiveFace()));
    const topId = getActive("top");      setAvatarTop(topId ? getTopDef(topId) : null);
    const botId = getActive("bottom");   setAvatarBottom(botId ? getBottomDef(botId) : null);
    const shoeId = getActive("shoe");    setAvatarShoe(shoeId ? getShoeDef(shoeId) : null);
    const capeId = getActive("cape");    setAvatarCape(capeId ? getCapeDef(capeId) : null);
    const glsId = getActive("glasses");  setAvatarGlasses(glsId ? getGlassesDef(glsId) : null);
    const glvId = getActive("gloves");   setAvatarGloves(glvId ? getGloveDef(glvId) : null);
    const hatId = getActiveHat();        setAvatarHat(hatId ? getHatDef(hatId) : null);
    const trailId = getActiveTrail();    setAvatarTrail(trailId ? getTrailDef(trailId) : null);
  }, []);

  function triggerAvatar(mood: AvatarMood, duration: number, jump?: "happy" | "surprised" | "victory" | "confused" | "laughing") {
    if (avatarTimerRef.current) clearTimeout(avatarTimerRef.current);
    setAvatarMood(mood);
    if (jump) setAvatarJump({ reaction: jump, timestamp: Date.now() });
    avatarTimerRef.current = setTimeout(() => setAvatarMood("focused"), duration);
  }

  // ── Save / Navigation ────────────────────────────────────────────────────────
  const [save, setSave]             = useState<NRSave>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen]         = useState<Screen>("expedition");
  const [activeLevel, setActiveLevel] = useState(1);

  useEffect(() => { setSave(loadSave()); }, []);

  // Auto-start multiplayer at specified level
  const multiStarted = useRef(false);
  useEffect(() => {
    if (isMultiplayer && urlLevel && !multiStarted.current) {
      multiStarted.current = true;
      const lv = Math.min(9, Math.max(1, parseInt(urlLevel) || 1));
      setTimeout(() => startLevel(lv), 100);
    }
  }, [isMultiplayer, urlLevel]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Game state ───────────────────────────────────────────────────────────────
  const [grid,         setGrid]         = useState<GridCell[]>([]);
  const [nextTarget,   setNextTarget]   = useState(1);
  const [timeLeft,     setTimeLeft]     = useState(0);
  const [found,        setFound]        = useState(0);
  const [wrongIdx,     setWrongIdx]     = useState<number | null>(null);
  const [shieldActive, setShieldActive] = useState(false);
  const [revealActive, setRevealActive] = useState(false);
  const [rushActive,   setRushActive]   = useState(false);
  const [floatingMsgs, setFloatingMsgs] = useState<FloatingMsg[]>([]);
  const [earnedCard,   setEarnedCard]   = useState<CardRarity | null>(null);

  // ── Multiplayer state ──────────────────────────────────────────────────────
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);
  const [myFinalScore, setMyFinalScore] = useState<number | null>(null);
  const [mixFinished, setMixFinished] = useState(false);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  const gridRef        = useRef<GridCell[]>([]);
  const nextTargetRef  = useRef(1);
  const foundRef       = useRef(0);
  const timeLeftRef    = useRef(0);
  const shieldRef      = useRef(false);
  const gameActiveRef  = useRef(false);
  const cfgRef         = useRef<NRLevelConfig>(LEVELS[0]);
  const timerRef       = useRef<ReturnType<typeof setInterval>  | null>(null);
  const flashTimerRef  = useRef<ReturnType<typeof setTimeout>   | null>(null);
  const revealTimerRef = useRef<ReturnType<typeof setTimeout>   | null>(null);
  const rushTimerRef   = useRef<ReturnType<typeof setTimeout>   | null>(null);
  const msgCounter     = useRef(0);

  function addFloat(text: string, color: string, x: number, y: number) {
    const id = msgCounter.current++;
    setFloatingMsgs(m => [...m, { id, text, color, x, y }]);
    setTimeout(() => setFloatingMsgs(m => m.filter(f => f.id !== id)), 1000);
  }

  const stopGame = useCallback(() => {
    gameActiveRef.current = false;
    if (timerRef.current)    { clearInterval(timerRef.current);    timerRef.current = null; }
    if (flashTimerRef.current)  { clearTimeout(flashTimerRef.current);  flashTimerRef.current = null; }
    if (revealTimerRef.current) { clearTimeout(revealTimerRef.current); revealTimerRef.current = null; }
    if (rushTimerRef.current)   { clearTimeout(rushTimerRef.current);   rushTimerRef.current = null; }
  }, []);

  const levelSuccess = useCallback((finalFound: number, finalTimeLeft: number) => {
    stopGame();
    const cfg = cfgRef.current;

    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      const rarity = calcRarity(finalTimeLeft, cfg.timeLimit, cfg.level);
      saveCard({ id: generateCardId(), game: "numberrush", theme: `level${cfg.level}`, rarity, score: finalFound, total: cfg.count, date: new Date().toISOString() });
      window.dispatchEvent(new Event("plizio-cards-changed"));
      incrementTotalGames();
      setEarnedCard(rarity);
      triggerAvatar("happy", 99999, "victory");

      if (isMix) {
        submitMixRoundScore(matchId, finalFound, playerNum === "1").then(() => {
          setScreen("multi-waiting");
        });
      } else {
        submitScore(matchId, finalFound, playerNum === "1").then(() => {
          setScreen("multi-waiting");
        });
      }
      return;
    }

    const rarity = calcRarity(finalTimeLeft, cfg.timeLimit, cfg.level);
    saveCard({ id: generateCardId(), game: "numberrush", theme: `level${cfg.level}`, rarity, score: finalFound, total: cfg.count, date: new Date().toISOString() });
    incrementTotalGames();
    setEarnedCard(rarity);
    setSave(prev => {
      const newCompleted = [...new Set([...prev.completedLevels, cfg.level])];
      const newCurrentLevel = cfg.level === 10 ? 10 : Math.max(prev.currentLevel, cfg.level + 1);
      const s: NRSave = { currentLevel: newCurrentLevel, completedLevels: newCompleted };
      writeSave(s); return s;
    });
    triggerAvatar("happy", 99999, cfg.level === 10 ? "victory" : "happy");
    setScreen("reward");
  }, [stopGame, isMultiplayer, matchId, isMix, playerNum, scoreSubmitted]); // eslint-disable-line react-hooks/exhaustive-deps

  const levelFailed = useCallback((finalFound: number) => {
    stopGame();
    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      triggerAvatar("confused", 2000, "confused");
      setFound(finalFound);
      if (isMix) {
        submitMixRoundScore(matchId, finalFound, playerNum === "1").then(() => {
          setScreen("multi-waiting");
        });
      } else {
        submitScore(matchId, finalFound, playerNum === "1").then(() => {
          setScreen("multi-waiting");
        });
      }
      return;
    }
    triggerAvatar("confused", 2000, "confused");
    setFound(finalFound);
    setScreen("levelFailed");
  }, [stopGame, isMultiplayer, matchId, isMix, playerNum, scoreSubmitted]); // eslint-disable-line react-hooks/exhaustive-deps

  const startLevel = useCallback((levelNum: number) => {
    const cfg = LEVELS[levelNum - 1];
    cfgRef.current = cfg;
    stopGame();
    const newGrid = buildGrid(cfg);
    gridRef.current = newGrid;
    nextTargetRef.current = 1;
    foundRef.current = 0;
    timeLeftRef.current = cfg.timeLimit;
    shieldRef.current = false;
    setActiveLevel(levelNum);
    setGrid(newGrid);
    setNextTarget(1);
    setFound(0);
    setTimeLeft(cfg.timeLimit);
    setWrongIdx(null);
    setShieldActive(false);
    setRevealActive(false);
    setRushActive(false);
    setFloatingMsgs([]);
    setEarnedCard(null);
    setScreen("playing");
    triggerAvatar("focused", 99999);
  }, [stopGame]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Timer + Flash ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (screen !== "playing") return;
    gameActiveRef.current = true;
    const cfg = cfgRef.current;

    if (cfg.flashDelay > 0) {
      flashTimerRef.current = setTimeout(() => {
        if (!gameActiveRef.current) return;
        setGrid(prev => {
          const next = prev.map(c => c.type === "number" && !c.tapped ? { ...c, hidden: true } : c);
          gridRef.current = next;
          return next;
        });
      }, cfg.flashDelay);
    }

    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        const next = t - 1;
        timeLeftRef.current = next;
        if (next <= 0) { levelFailed(foundRef.current); return 0; }
        return next;
      });
    }, 1000);

    return () => { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } };
  }, [screen, levelFailed]);

  // ── Cell tap handler ──────────────────────────────────────────────────────────
  const handleCellTap = useCallback((index: number, e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameActiveRef.current) return;
    const cell = gridRef.current[index];
    if (!cell || cell.type === "empty") return;

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;

    if (cell.type === "powerup" && !cell.used) {
      const { kind } = cell;
      const newGrid = [...gridRef.current];
      newGrid[index] = { ...cell, used: true };
      gridRef.current = newGrid;
      setGrid(newGrid);

      if (kind === "freeze") {
        const newTime = timeLeftRef.current + 5;
        timeLeftRef.current = newTime;
        setTimeLeft(newTime);
        addFloat("+5s", "#00D4FF", x, y);
      } else if (kind === "reveal") {
        setRevealActive(true);
        setGrid(prev => {
          const next = prev.map(c => c.type === "number" && !c.tapped ? { ...c, hidden: false } : c);
          gridRef.current = next;
          return next;
        });
        if (revealTimerRef.current) clearTimeout(revealTimerRef.current);
        revealTimerRef.current = setTimeout(() => {
          setRevealActive(false);
          if (cfgRef.current.flashDelay > 0) {
            setGrid(prev => {
              const next = prev.map(c => c.type === "number" && !c.tapped ? { ...c, hidden: true } : c);
              gridRef.current = next;
              return next;
            });
          }
        }, 2000);
        addFloat("👁️", "#00FF88", x, y);
      } else if (kind === "shield") {
        shieldRef.current = true;
        setShieldActive(true);
        addFloat("🛡️", "#FFD700", x, y);
      } else if (kind === "rush") {
        setRushActive(true);
        if (rushTimerRef.current) clearTimeout(rushTimerRef.current);
        rushTimerRef.current = setTimeout(() => setRushActive(false), 3000);
        addFloat("⚡", "#FF2D78", x, y);
      }
      triggerAvatar("surprised", 800, "surprised");
      return;
    }

    if (cell.type === "number" && !cell.tapped) {
      if (cell.value === nextTargetRef.current) {
        const newGrid = [...gridRef.current];
        newGrid[index] = { ...cell, tapped: true, hidden: false };
        gridRef.current = newGrid;
        setGrid(newGrid);
        const newFound = foundRef.current + 1;
        foundRef.current = newFound;
        setFound(newFound);
        nextTargetRef.current = cell.value + 1;
        setNextTarget(cell.value + 1);
        if (newFound === cfgRef.current.count) {
          levelSuccess(newFound, timeLeftRef.current);
        } else if (newFound % 5 === 0) {
          triggerAvatar("happy", 800, "happy");
        }
      } else {
        setWrongIdx(index);
        setTimeout(() => setWrongIdx(null), 400);
        if (shieldRef.current) {
          shieldRef.current = false;
          setShieldActive(false);
          addFloat("🛡️ blocked!", "#FFD700", x, y);
        } else {
          const newTime = Math.max(1, timeLeftRef.current - 3);
          timeLeftRef.current = newTime;
          setTimeLeft(newTime);
          addFloat("-3s", "#FF2D78", x, y);
          triggerAvatar("disappointed", 700);
        }
      }
    }
  }, [levelSuccess]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Multiplayer: poll for opponent ──────────────────────────────────────────
  useEffect(() => {
    if (screen !== "multi-waiting" || !isMultiplayer || !matchId) return;

    const checkMatch = async () => {
      const { supabase } = await import("@/lib/supabase/client");
      const { data } = await supabase.from("multiplayer_matches").select("*").eq("id", matchId).single();
      if (!data) return false;
      const isP1 = playerNum === "1";

      if (isMix) {
        const bothDone = data.mix_round_done_p1 && data.mix_round_done_p2;
        if (!bothDone) return false;
        const adv = await advanceMixRound(matchId);
        if (adv.finished) {
          const p1Scores = (data.mix_scores_p1 || []) as number[];
          const p2Scores = (data.mix_scores_p2 || []) as number[];
          const myScores = isP1 ? p1Scores : p2Scores;
          const oppScores = isP1 ? p2Scores : p1Scores;
          let myWins = 0, oppWins = 0;
          for (let i = 0; i < myScores.length; i++) {
            if (myScores[i] > (oppScores[i] ?? 0)) myWins++;
            else if (myScores[i] < (oppScores[i] ?? 0)) oppWins++;
          }
          setMyFinalScore(myWins);
          setOppFinalScore(oppWins);
          setMixFinished(true);
          setScreen("multi-result");
          return true;
        }
        const freshMatch = await supabase.from("multiplayer_matches").select("*").eq("id", matchId).single();
        const fm = freshMatch.data;
        if (fm && fm.mix_games) {
          const nextRound = fm.mix_round || adv.nextRound || 2;
          const nextGame = (fm.mix_games as string[])[nextRound - 1];
          let url = `/${nextGame}?match=${matchId}&seed=${fm.seed}&p=${isP1 ? "1" : "2"}&vs=${encodeURIComponent(opponentName)}&mixround=${nextRound}`;
          if (fm.difficulty && String(fm.difficulty).includes(",")) {
            const levels = String(fm.difficulty).split(",");
            const lv = levels[nextRound - 1];
            if (lv && Number(lv) > 0) url += `&level=${lv}`;
          }
          router.push(url);
        }
        return true;
      } else {
        const oppDone = isP1 ? data.player2_done : data.player1_done;
        const oppScoreVal = isP1 ? data.player2_score : data.player1_score;
        if (oppDone && oppScoreVal !== null) {
          setOppFinalScore(oppScoreVal);
          setScreen("multi-result");
          return true;
        }
        return false;
      }
    };
    checkMatch();
    const interval = setInterval(async () => {
      const done = await checkMatch();
      if (done) clearInterval(interval);
    }, 2000);
    return () => clearInterval(interval);
  }, [screen, isMultiplayer, matchId, isMix, playerNum, router, opponentName]);

  const cfg = LEVELS[activeLevel - 1];

  const avatarProps = {
    mood: avatarMood, gender: avatarGender,
    activeSkin: avatarSkin, activeFace: avatarFace,
    activeTop: avatarTop, activeBottom: avatarBottom,
    activeShoe: avatarShoe, activeCape: avatarCape,
    activeGlasses: avatarGlasses, activeGloves: avatarGloves,
    activeHat: avatarHat, activeTrail: avatarTrail,
    jumpTrigger: avatarJump,
  };

  // ─── RENDER ─────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white select-none overflow-hidden">
      {screen === "playing" && <AvatarCompanion {...avatarProps} fixed />}
      <MilestonePopup />

      {/* Floating messages */}
      <AnimatePresence>
        {floatingMsgs.map(msg => (
          <motion.div
            key={msg.id}
            className="pointer-events-none fixed z-50 font-black text-lg"
            style={{ left: msg.x, top: msg.y, color: msg.color, transform: "translate(-50%, 0)" }}
            initial={{ opacity: 1, y: 0 }} animate={{ opacity: 0, y: -60 }} exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {msg.text}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ── EXPEDITION ──────────────────────────────────────────────────────────── */}
      {screen === "expedition" && !isMultiplayer && (
        <div className="flex flex-col min-h-screen pb-24">
          <div className="flex items-center justify-between p-4 pt-6">
            <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <Home size={20} /><span className="text-sm font-bold">{t.home}</span>
            </Link>
            <div className="flex items-center gap-2">
              <Hash size={20} className="text-[#00D4FF]" />
              <span className="text-lg font-black tracking-wider text-[#00D4FF]">{t.title}</span>
            </div>
            <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
              <AvatarCompanion {...avatarProps} fixed={false} />
            </div>
          </div>

          <p className="text-center text-white/40 text-sm mb-6 px-4">{t.subtitle}</p>

          <div className="px-6 mb-8">
            <div className="flex justify-between text-xs text-white/40 mb-1">
              <span>{t.progress}</span>
              <span>{save.completedLevels.length}/10 {t.levelsOf}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(to right, #00D4FF, #00FF88)" }}
                initial={false}
                animate={{ width: `${(save.completedLevels.length / 10) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <div className="px-4 flex flex-col gap-3 max-w-sm mx-auto w-full">
            {LEVELS.map((lc, i) => {
              const done    = save.completedLevels.includes(lc.level);
              const current = lc.level === save.currentLevel;
              const locked  = lc.level > save.currentLevel;
              const isBoss  = lc.level === 10;
              return (
                <motion.div
                  key={lc.level}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                    done    ? "bg-[#001a22] border-[#00D4FF40]"
                    : current && isBoss ? "bg-[#1a0028] border-[#B44DFF] shadow-[0_0_20px_#B44DFF33]"
                    : current ? "bg-[#001a22] border-[#00D4FF] shadow-[0_0_20px_#00D4FF33]"
                    : "bg-[#0f0f22] border-white/10 opacity-60"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black flex-shrink-0 ${
                    done    ? "bg-[#00D4FF20] text-[#00D4FF]"
                    : current && isBoss ? "bg-[#B44DFF20] text-[#B44DFF]"
                    : current ? "bg-[#00D4FF20] text-[#00D4FF]"
                    : "bg-white/5 text-white/30"
                  }`}>
                    {done ? <Check size={22} /> : locked ? <Lock size={18} /> : LEVEL_BADGES[i]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-black text-sm ${isBoss ? "text-[#B44DFF]" : "text-white"}`}>
                        {isBoss ? t.boss : ""}{t.levelLabel} {lc.level}
                      </span>
                      {done && <span className="text-[#00D4FF] text-xs">{t.done}</span>}
                    </div>
                    <div className="text-white/40 text-xs mt-0.5 flex gap-3">
                      <span>{lc.gridSize}×{lc.gridSize}</span>
                      <span>{lc.count} nums</span>
                      <span>{lc.timeLimit}s</span>
                    </div>
                    <div className="flex gap-2 mt-1.5">
                      {lc.flashDelay > 0 && <span className="text-[#00FF88] text-xs">👁️ {t.features.flash}</span>}
                      {lc.hasPowerups   && <span className="text-[#FFD700] text-xs">⚡ {t.features.powerups}</span>}
                    </div>
                  </div>

                  {!locked && (
                    <button
                      onClick={() => startLevel(lc.level)}
                      className={`flex-shrink-0 px-4 py-2 rounded-xl font-black text-sm transition-all active:scale-95 ${
                        isBoss  ? "bg-[#B44DFF] text-white shadow-[0_0_12px_#B44DFF66]"
                        : current ? "bg-[#00D4FF] text-black shadow-[0_0_12px_#00D4FF66]"
                        : "bg-white/10 text-white/60"
                      }`}
                    >
                      {done ? "↩" : <ChevronRight size={18} />}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── PLAYING ─────────────────────────────────────────────────────────────── */}
      {screen === "playing" && (
        <div className="flex flex-col min-h-screen">
          {/* HUD */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <button
              onClick={() => {
                if (isMultiplayer) { setShowExitConfirm(true); }
                else { setAvatarMood("idle"); setScreen("expedition"); }
              }}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/50 hover:bg-white/20 hover:text-white transition-colors text-lg font-bold"
            >✕</button>
            <div className="flex flex-col items-start">
              <span className="text-white/40 text-xs font-bold tracking-wider">{t.found}</span>
              <motion.span
                key={found} className="text-2xl font-black text-[#00D4FF]"
                animate={{ scale: [1.2, 1] }} transition={{ duration: 0.15 }}
              >
                {found}<span className="text-white/30 text-sm font-bold ml-1">/{cfg.count}</span>
              </motion.span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-white/40 text-xs font-bold tracking-wider">{t.time}</span>
              <span className={`text-2xl font-black ${timeLeft <= 5 ? "text-[#FF2D78] animate-pulse" : "text-white"}`}>
                {timeLeft}s
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-white/40 text-xs font-bold tracking-wider">{t.next}</span>
              <motion.span
                key={nextTarget} className="text-2xl font-black text-[#FFD700]"
                animate={{ scale: [1.3, 1] }} transition={{ duration: 0.2 }}
              >
                {nextTarget}
              </motion.span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mx-4 mb-2">
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(to right, #00D4FF, #00FF88)" }}
                animate={{ width: `${Math.min(100, (found / cfg.count) * 100)}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>

          {/* Active powerup banners */}
          <div className="mx-4 mb-1 flex flex-col gap-1">
            <AnimatePresence>
              {shieldActive && (
                <motion.div
                  className="py-1 px-3 rounded-xl bg-[#FFD70020] border border-[#FFD70050] text-[#FFD700] text-xs font-bold text-center"
                  initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                >
                  {t.shieldActive}
                </motion.div>
              )}
              {revealActive && (
                <motion.div
                  className="py-1 px-3 rounded-xl bg-[#00FF8820] border border-[#00FF8850] text-[#00FF88] text-xs font-bold text-center"
                  initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                >
                  {t.revealActive}
                </motion.div>
              )}
              {rushActive && (
                <motion.div
                  className="py-1 px-3 rounded-xl bg-[#FF2D7820] border border-[#FF2D7850] text-[#FF2D78] text-xs font-bold text-center"
                  initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                >
                  {t.rushActive}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Grid */}
          <div className="flex-1 flex items-center justify-center px-4">
            <div
              className="grid gap-2 w-full max-w-sm"
              style={{ gridTemplateColumns: `repeat(${cfg.gridSize}, 1fr)` }}
            >
              {grid.map((cell, i) => {
                if (cell.type === "empty") {
                  return (
                    <div
                      key={i}
                      className="aspect-square rounded-xl"
                      style={{ background: "#0a0a1e", border: "2px solid #14143a" }}
                    />
                  );
                }

                if (cell.type === "powerup") {
                  if (cell.used) {
                    return (
                      <div
                        key={i}
                        className="aspect-square rounded-xl opacity-15"
                        style={{ background: "#0a0a1e", border: "2px solid #14143a" }}
                      />
                    );
                  }
                  const pc = POWERUP_CONFIG[cell.kind];
                  return (
                    <motion.button
                      key={i}
                      onClick={(e) => handleCellTap(i, e)}
                      className="aspect-square rounded-xl flex items-center justify-center text-xl"
                      style={{ background: pc.bg, border: `2px solid ${pc.border}`, boxShadow: `0 0 12px ${pc.border}55` }}
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                      whileTap={{ scale: 0.82 }}
                    >
                      {pc.icon}
                    </motion.button>
                  );
                }

                // Number cell
                const isTarget = cell.value === nextTarget && rushActive;
                const isHidden = cell.hidden && !revealActive;
                const isWrong  = wrongIdx === i;
                const fontSize = cfg.gridSize >= 6 ? "text-sm" : cfg.gridSize >= 5 ? "text-base" : "text-lg";

                return (
                  <motion.button
                    key={i}
                    onClick={(e) => handleCellTap(i, e)}
                    disabled={cell.tapped}
                    className={`aspect-square rounded-xl flex items-center justify-center font-black ${fontSize}`}
                    style={{
                      background: cell.tapped ? "#001a0a"
                        : isWrong  ? "#2a0010"
                        : isTarget ? "#001800"
                        : "#0e0e2a",
                      border: cell.tapped ? "2px solid #00FF8825"
                        : isWrong  ? "2px solid #FF2D78"
                        : isTarget ? "2px solid #00FF88"
                        : isHidden ? "2px solid #18183a"
                        : "2px solid #2a2a5a",
                      boxShadow: cell.tapped ? "none"
                        : isWrong  ? "0 0 14px #FF2D7866"
                        : isTarget ? "0 0 16px #00FF8899"
                        : "none",
                      color: cell.tapped ? "#00FF8838"
                        : isWrong  ? "#FF2D78"
                        : isTarget ? "#00FF88"
                        : isHidden ? "transparent"
                        : "#e0e0ff",
                    }}
                    animate={isWrong ? { x: [-4, 4, -4, 4, 0] } : {}}
                    transition={{ duration: 0.3 }}
                    whileTap={!cell.tapped ? { scale: 0.82 } : {}}
                  >
                    {cell.tapped ? (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-[#00FF8845]">✓</motion.span>
                    ) : isHidden ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 block" />
                    ) : (
                      cell.value
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="px-4 py-3 text-center text-white/25 text-xs pb-6">
            {t.levelLabel} {activeLevel}/10 · {t.hint}
          </div>
        </div>
      )}

      {/* ── REWARD ──────────────────────────────────────────────────────────────── */}
      {screen === "reward" && earnedCard && (
        <RewardReveal rarity={earnedCard} game="numberrush" score={found} total={cfg.count}
          onDone={() => setScreen("levelComplete")} />
      )}

      {/* ── LEVEL COMPLETE ───────────────────────────────────────────────────────── */}
      {screen === "levelComplete" && earnedCard && (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 gap-4 text-center">
          <motion.div
            className="w-60 h-60"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <AvatarCompanion {...avatarProps} fixed={false} />
          </motion.div>
          <motion.div
            className="text-4xl font-black"
            style={{ color: activeLevel === 10 ? "#B44DFF" : "#00D4FF" }}
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          >
            {activeLevel === 10 ? t.bossDone : t.levelDone}
          </motion.div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-white/40 text-sm font-bold tracking-wider">{t.finalScore}</span>
            <span className="text-4xl font-black text-white">{found}</span>
            <span className="text-white/40 text-sm">/ {cfg.count}</span>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            {activeLevel === 10 ? (
              <>
                <button
                  onClick={() => {
                    const ns: NRSave = { currentLevel: 1, completedLevels: [] };
                    setSave(ns); writeSave(ns); setAvatarMood("idle"); setScreen("expedition");
                  }}
                  className="py-4 px-8 rounded-2xl font-black text-lg bg-[#B44DFF] text-white shadow-[0_0_20px_#B44DFF66] active:scale-95 transition-all"
                >
                  {t.newExpedition}
                </button>
                <Link href="/" className="py-3 px-8 rounded-2xl font-bold text-white/60 border border-white/20 text-center active:scale-95 transition-all">
                  🏠 {t.home}
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => { setAvatarMood("idle"); setScreen("expedition"); }}
                  className="py-4 px-8 rounded-2xl font-black text-lg bg-[#00D4FF] text-black shadow-[0_0_20px_#00D4FF66] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {t.nextLevel} <ChevronRight size={20} />
                </button>
                <button
                  onClick={() => { setAvatarMood("idle"); setScreen("expedition"); }}
                  className="py-3 px-8 rounded-2xl font-bold text-white/60 border border-white/20 active:scale-95 transition-all"
                >
                  {t.expeditionMap}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── LEVEL FAILED ─────────────────────────────────────────────────────────── */}
      {screen === "levelFailed" && (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 gap-4 text-center">
          <motion.div
            className="w-52 h-52"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <AvatarCompanion {...avatarProps} fixed={false} />
          </motion.div>
          <motion.div
            className="text-4xl font-black text-[#FF2D78]"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          >
            {t.timeUp}
          </motion.div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-white/40 text-sm">{t.scoredPoints}</span>
            <span className="text-4xl font-black text-white">{found}</span>
            <span className="text-white/40 text-sm">
              {t.goalWas}: <span className="text-[#00D4FF] font-bold">{cfg.count}</span>
              {found >= cfg.count * 0.7 && <span className="text-[#FFD700] ml-2 font-bold">{t.almostThere}</span>}
            </span>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <button
              onClick={() => startLevel(activeLevel)}
              className="py-4 px-8 rounded-2xl font-black text-lg bg-[#FF2D78] text-white shadow-[0_0_20px_#FF2D7866] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} /> {t.retry}
            </button>
            <button
              onClick={() => { setScreen("expedition"); setAvatarMood("idle"); }}
              className="py-3 px-8 rounded-2xl font-bold text-white/60 border border-white/20 active:scale-95 transition-all"
            >
              {t.expeditionMap}
            </button>
            <Link href="/" className="py-3 px-8 rounded-2xl font-bold text-white/40 text-center active:scale-95 transition-all">
              🏠 {t.home}
            </Link>
          </div>
        </div>
      )}

      {/* ── MULTI WAITING ──────────────────────────────────────────────────────── */}
      {screen === "multi-waiting" && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm gap-5 px-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        >
          <motion.div
            className="text-3xl font-black text-[#00D4FF]"
            style={{ textShadow: "0 0 20px rgba(0,212,255,0.4)" }}
            initial={{ scale: 0.8 }} animate={{ scale: 1 }}
          >
            {found}/{cfg.count}
          </motion.div>
          {isMix && (
            <span className="text-white/30 text-xs font-bold uppercase">
              Round {mixround} ✓
            </span>
          )}
          <motion.div
            className="w-10 h-10 border-2 border-[#00D4FF] border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
          <span className="text-white/60 text-sm font-medium text-center">
            {lang === "hu" ? `Várakozás ${opponentName}-ra...` :
             lang === "de" ? `Warte auf ${opponentName}...` :
             lang === "ro" ? `Se așteaptă ${opponentName}...` :
             `Waiting for ${opponentName}...`}
          </span>
        </motion.div>
      )}

      {/* ── MULTI RESULT ───────────────────────────────────────────────────────── */}
      {screen === "multi-result" && oppFinalScore !== null && (
        <MultiplayerResult
          myScore={myFinalScore !== null ? myFinalScore : found}
          oppScore={oppFinalScore}
          myName={getUsername() || "???"}
          oppName={opponentName}
          onContinue={() => router.push("/multiplayer")}
        />
      )}

      {/* Multiplayer overlays */}
      {isMultiplayer && matchId && (
        <>
          <MultiplayerExitConfirm
            open={showExitConfirm}
            onStay={() => setShowExitConfirm(false)}
            onLeave={() => { abandonMatch(matchId); router.push("/multiplayer"); }}
          />
          {screen === "playing" && (
            <MultiplayerAbandonNotice matchId={matchId} opponentName={opponentName} />
          )}
        </>
      )}
    </div>
  );
}
