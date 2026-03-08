"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Home, RotateCcw, Lock, Check, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import MilestonePopup from "@/components/MilestonePopup";
import RewardReveal from "@/components/RewardReveal";
import { saveCard, generateCardId, calculateRarity, type CardRarity } from "@/lib/cards";
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

// ─── i18n ─────────────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  en: {
    title: "SEQUENCE RUSH",
    subtitle: "10 levels · Watch · Remember · Repeat",
    home: "Home",
    progress: "Progress",
    levelsOf: "levels",
    levelLabel: "Level",
    boss: "🏆 BOSS — ",
    done: "✓ done",
    watchPhase: "WATCH THE SEQUENCE",
    repeatPhase: "REPEAT IT!",
    round: "Round",
    of: "of",
    errors: "Errors",
    levelDone: "✅ LEVEL DONE!",
    bossDone: "🏆 COMPLETE!",
    finalScore: "FINAL SCORE",
    pts: "pts",
    accuracy: "accuracy",
    legendaryDesc: "You earned the legendary Sequence Rush card!",
    newExpedition: "🔄 New Expedition",
    nextLevel: "Next Level",
    expeditionMap: "Expedition Map",
    failed: "❌ TOO MANY ERRORS!",
    scoredPoints: "Your score",
    goalWas: "Rounds completed",
    almostThere: "— So close!",
    retry: "Retry",
    rarity: { bronze: "BRONZE", silver: "SILVER", gold: "GOLD", legendary: "LEGENDARY" },
    card: "CARD",
    hint: "Watch carefully then tap in order",
    get: "Get",
    roundsRight: "rounds right",
    seqLen: "Sequence",
    steps: "steps",
    newMech: "New",
    mechGold: "+ Gold cells (bonus)",
    mechDecoy: "+ Decoy cells (avoid!)",
    mechSpeed: "Faster playback",
    mechDouble: "+ Double sequence",
  },
  hu: {
    title: "SZEKVENCIA ROHAM",
    subtitle: "10 szint · Nézd · Jegyezd meg · Ismételd",
    home: "Főoldal",
    progress: "Haladás",
    levelsOf: "szint",
    levelLabel: "Szint",
    boss: "🏆 BOSS — ",
    done: "✓ kész",
    watchPhase: "FIGYELD A SORRENDET",
    repeatPhase: "ISMÉTELD MEG!",
    round: "Kör",
    of: "/",
    errors: "Hibák",
    levelDone: "✅ SZINT KÉSZ!",
    bossDone: "🏆 KÉSZ!",
    finalScore: "VÉGEREDMÉNY",
    pts: "pont",
    accuracy: "pontosság",
    legendaryDesc: "Megszerezted a legendás Szekvencia Roham kártyát!",
    newExpedition: "🔄 Új expedíció",
    nextLevel: "Következő szint",
    expeditionMap: "Expedíció térkép",
    failed: "❌ TÚLSÁGOSAN SOK HIBA!",
    scoredPoints: "Elért pont",
    goalWas: "Teljesített körök",
    almostThere: "— Majdnem!",
    retry: "Újra",
    rarity: { bronze: "BRONZ", silver: "EZÜST", gold: "ARANY", legendary: "LEGENDÁS" },
    card: "KÁRTYA",
    hint: "Figyelj majd tapints sorban",
    get: "Érj el",
    roundsRight: "kört hibátlanul",
    seqLen: "Szekvencia",
    steps: "lépés",
    newMech: "Új",
    mechGold: "+ Arany sejtek (bónusz)",
    mechDecoy: "+ Csapda sejtek (kerüld!)",
    mechSpeed: "Gyorsabb lejátszás",
    mechDouble: "+ Dupla szekvencia",
  },
  de: {
    title: "SEQUENZ RUSH",
    subtitle: "10 Level · Beobachten · Merken · Wiederholen",
    home: "Startseite",
    progress: "Fortschritt",
    levelsOf: "Level",
    levelLabel: "Level",
    boss: "🏆 BOSS — ",
    done: "✓ fertig",
    watchPhase: "SEQUENZ BEOBACHTEN",
    repeatPhase: "WIEDERHOLEN!",
    round: "Runde",
    of: "von",
    errors: "Fehler",
    levelDone: "✅ LEVEL GESCHAFFT!",
    bossDone: "🏆 FERTIG!",
    finalScore: "ERGEBNIS",
    pts: "Pkt",
    accuracy: "Genauigkeit",
    legendaryDesc: "Du hast die legendäre Sequenz Rush Karte erhalten!",
    newExpedition: "🔄 Neue Expedition",
    nextLevel: "Nächstes Level",
    expeditionMap: "Expedition",
    failed: "❌ ZU VIELE FEHLER!",
    scoredPoints: "Dein Ergebnis",
    goalWas: "Abgeschlossene Runden",
    almostThere: "— Fast!",
    retry: "Nochmal",
    rarity: { bronze: "BRONZE", silver: "SILBER", gold: "GOLD", legendary: "LEGENDÄR" },
    card: "KARTE",
    hint: "Beobachte dann tippe in Reihenfolge",
    get: "Erreiche",
    roundsRight: "Runden richtig",
    seqLen: "Sequenz",
    steps: "Schritte",
    newMech: "Neu",
    mechGold: "+ Gold-Zellen (Bonus)",
    mechDecoy: "+ Falle-Zellen (meiden!)",
    mechSpeed: "Schnellere Wiedergabe",
    mechDouble: "+ Doppelte Sequenz",
  },
  ro: {
    title: "SEQUENCE RUSH",
    subtitle: "10 niveluri · Privește · Memorează · Repetă",
    home: "Acasă",
    progress: "Progres",
    levelsOf: "niveluri",
    levelLabel: "Nivel",
    boss: "🏆 BOSS — ",
    done: "✓ gata",
    watchPhase: "URMĂREȘTE SECVENȚA",
    repeatPhase: "REPETĂ-O!",
    round: "Rundă",
    of: "din",
    errors: "Erori",
    levelDone: "✅ NIVEL TERMINAT!",
    bossDone: "🏆 TERMINAT!",
    finalScore: "REZULTAT FINAL",
    pts: "pct",
    accuracy: "precizie",
    legendaryDesc: "Ai câștigat cardul legendar Sequence Rush!",
    newExpedition: "🔄 Expedíție nouă",
    nextLevel: "Nivelul următor",
    expeditionMap: "Hartă expedíție",
    failed: "❌ PREA MULTE ERORI!",
    scoredPoints: "Punctaj obținut",
    goalWas: "Runde completate",
    almostThere: "— Aproape!",
    retry: "Din nou",
    rarity: { bronze: "BRONZ", silver: "ARGINT", gold: "AUR", legendary: "LEGENDAR" },
    card: "CARD",
    hint: "Urmărește apoi apasă în ordine",
    get: "Atinge",
    roundsRight: "runde corecte",
    seqLen: "Secvență",
    steps: "pași",
    newMech: "Nou",
    mechGold: "+ Celule aurii (bonus)",
    mechDecoy: "+ Celule capcană (evită!)",
    mechSpeed: "Redare mai rapidă",
    mechDouble: "+ Secvență dublă",
  },
};

// ─── Types ────────────────────────────────────────────────────────────────────

type Screen = "expedition" | "watching" | "inputting" | "reward" | "levelComplete" | "levelFailed" | "multi-waiting" | "multi-result";
type CellState = "idle" | "flash" | "gold" | "decoy" | "correct" | "wrong";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory" | "surprised" | "confused" | "laughing";

interface SRLevelConfig {
  level: number;
  gridSize: number;
  seqLength: number;      // starting sequence length
  rounds: number;         // number of rounds to win
  maxErrors: number;      // errors allowed before fail
  flashSpeed: number;     // ms per cell during playback
  hasGold: boolean;       // gold cells in sequence (bonus point)
  hasDecoy: boolean;      // decoy cells light up but NOT in sequence
  doublePlay: boolean;    // sequence plays twice before input
}

interface SRSave {
  currentLevel: number;
  completedLevels: number[];
}

// ─── Level configs ────────────────────────────────────────────────────────────

const LEVELS: SRLevelConfig[] = [
  { level: 1,  gridSize: 3, seqLength: 3,  rounds: 3, maxErrors: 3, flashSpeed: 700, hasGold: false, hasDecoy: false, doublePlay: false },
  { level: 2,  gridSize: 3, seqLength: 4,  rounds: 4, maxErrors: 3, flashSpeed: 650, hasGold: false, hasDecoy: false, doublePlay: false },
  { level: 3,  gridSize: 3, seqLength: 5,  rounds: 4, maxErrors: 3, flashSpeed: 600, hasGold: true,  hasDecoy: false, doublePlay: false },
  { level: 4,  gridSize: 4, seqLength: 5,  rounds: 4, maxErrors: 2, flashSpeed: 600, hasGold: true,  hasDecoy: false, doublePlay: false },
  { level: 5,  gridSize: 4, seqLength: 6,  rounds: 5, maxErrors: 2, flashSpeed: 550, hasGold: true,  hasDecoy: false, doublePlay: false },
  { level: 6,  gridSize: 4, seqLength: 7,  rounds: 5, maxErrors: 2, flashSpeed: 500, hasGold: true,  hasDecoy: true,  doublePlay: false },
  { level: 7,  gridSize: 4, seqLength: 7,  rounds: 5, maxErrors: 2, flashSpeed: 450, hasGold: true,  hasDecoy: true,  doublePlay: false },
  { level: 8,  gridSize: 5, seqLength: 8,  rounds: 5, maxErrors: 2, flashSpeed: 420, hasGold: true,  hasDecoy: true,  doublePlay: false },
  { level: 9,  gridSize: 5, seqLength: 9,  rounds: 6, maxErrors: 1, flashSpeed: 400, hasGold: true,  hasDecoy: true,  doublePlay: false },
  { level: 10, gridSize: 5, seqLength: 10, rounds: 6, maxErrors: 1, flashSpeed: 380, hasGold: true,  hasDecoy: true,  doublePlay: true  },
];

const LEVEL_BADGES = ["🔵","🔵","⭐","🔷","🔷","⚠️","⚠️","💎","💎","🏆"];

const SAVE_KEY = "sequencerush_expedition_v1";

function loadSave(): SRSave {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try { const raw = localStorage.getItem(SAVE_KEY); if (raw) return JSON.parse(raw); } catch { /* */ }
  return { currentLevel: 1, completedLevels: [] };
}
function writeSave(s: SRSave) { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }

const RARITY_COLORS: Record<CardRarity, string> = {
  bronze: "#CD7F32", silver: "#C0C0C0", gold: "#FFD700", legendary: "#B44DFF",
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SequenceRushPageWrapper() {
  return <Suspense><SequenceRushPage /></Suspense>;
}

function SequenceRushPage() {
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

  // ── Avatar ───────────────────────────────────────────────────────────────────
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

  // ── Save / navigation ─────────────────────────────────────────────────────────
  const [save, setSave]       = useState<SRSave>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen]   = useState<Screen>("expedition");
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

  // ── Game state ────────────────────────────────────────────────────────────────
  const [cellStates, setCellStates]   = useState<CellState[]>(Array(9).fill("idle"));
  const [sequence,   setSequence]     = useState<number[]>([]);
  const [goldCells,  setGoldCells]    = useState<Set<number>>(new Set());
  const [decoyCells, setDecoyCells]   = useState<Set<number>>(new Set());
  const [inputIdx,   setInputIdx]     = useState(0);
  const [errors,     setErrors]       = useState(0);
  const [score,      setScore]        = useState(0);
  const [roundsDone, setRoundsDone]   = useState(0);
  const [earnedCard, setEarnedCard]   = useState<CardRarity | null>(null);

  // ── Multiplayer state ──────────────────────────────────────────────────────
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);
  const [myFinalScore, setMyFinalScore] = useState<number | null>(null);
  const [mixFinished, setMixFinished] = useState(false);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  // refs to avoid stale closures
  const cfgRef       = useRef<SRLevelConfig>(LEVELS[0]);
  const sequenceRef  = useRef<number[]>([]);
  const goldRef      = useRef<Set<number>>(new Set());
  const inputIdxRef  = useRef(0);
  const errorsRef    = useRef(0);
  const scoreRef     = useRef(0);
  const roundsDoneRef = useRef(0);

  const stopAllTimers = useCallback(() => {
    // timers are managed locally in playSequence, nothing persistent to clear here
  }, []);

  // ── Play sequence animation ───────────────────────────────────────────────────
  const playSequence = useCallback((seq: number[], gold: Set<number>, decoys: Set<number>, speed: number, onDone: () => void) => {
    const total = seq.length;
    let i = 0;

    function flashNext() {
      if (i >= total) {
        // small pause, then done
        setTimeout(onDone, 400);
        return;
      }
      const idx = seq[i];
      const isGold = gold.has(idx);

      // Flash decoys randomly during playback for extra confusion
      const activeDecoys: number[] = [];
      if (decoys.size > 0) {
        decoys.forEach(d => { if (Math.random() < 0.5) activeDecoys.push(d); });
      }

      setCellStates(prev => {
        const n = [...prev];
        n[idx] = isGold ? "gold" : "flash";
        activeDecoys.forEach(d => { if (n[d] === "idle") n[d] = "decoy"; });
        return n;
      });

      setTimeout(() => {
        setCellStates(prev => {
          const n = [...prev];
          n[idx] = "idle";
          activeDecoys.forEach(d => { if (n[d] === "decoy") n[d] = "idle"; });
          return n;
        });
        i++;
        setTimeout(flashNext, speed * 0.3);
      }, speed * 0.6);
    }

    flashNext();
  }, []);

  // ── Start a round ─────────────────────────────────────────────────────────────
  const startRound = useCallback((cfg: SRLevelConfig, roundNum: number, currentScore: number, currentErrors: number) => {
    const total = cfg.gridSize * cfg.gridSize;
    // Build sequence: unique random cells (extend by 1 each round)
    const seqLen = Math.min(cfg.seqLength + (roundNum - 1), total - 1);
    const indices = Array.from({ length: total }, (_, i) => i);
    // Fisher-Yates shuffle
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const seq = indices.slice(0, seqLen);

    // Gold cells: 20% chance each cell in sequence
    const gold = new Set<number>();
    if (cfg.hasGold) seq.forEach(idx => { if (Math.random() < 0.2) gold.add(idx); });

    // Decoy cells: cells NOT in sequence
    const decoy = new Set<number>();
    if (cfg.hasDecoy) {
      const nonSeq = indices.slice(seqLen);
      const decoyCount = Math.min(2, nonSeq.length);
      for (let i = 0; i < decoyCount; i++) decoy.add(nonSeq[i]);
    }

    sequenceRef.current = seq;
    goldRef.current = gold;
    inputIdxRef.current = 0;
    errorsRef.current = currentErrors;
    scoreRef.current = currentScore;

    setSequence(seq);
    setGoldCells(gold);
    setDecoyCells(decoy);
    setInputIdx(0);
    setErrors(currentErrors);
    setScore(currentScore);
    setCellStates(Array(total).fill("idle"));
    setScreen("watching");
    triggerAvatar("focused", 99999);

    function beginPlay() {
      playSequence(seq, gold, decoy, cfg.flashSpeed, () => {
        setCellStates(Array(total).fill("idle"));
        setScreen("inputting");
        triggerAvatar("surprised", 99999, "surprised");
      });
    }

    // doublePlay: show twice
    if (cfg.doublePlay) {
      playSequence(seq, gold, decoy, cfg.flashSpeed, () => {
        setCellStates(Array(total).fill("idle"));
        setTimeout(beginPlay, 600);
      });
    } else {
      beginPlay();
    }
  }, [playSequence]);

  // ── Handle cell tap during input phase ───────────────────────────────────────
  const handleCellTap = useCallback((index: number) => {
    if (screen !== "inputting") return;
    const cfg = cfgRef.current;
    const seq = sequenceRef.current;
    const gold = goldRef.current;
    const expected = seq[inputIdxRef.current];

    if (index === expected) {
      // Correct!
      const pts = gold.has(index) ? 3 : 1;
      const ns = scoreRef.current + pts;
      scoreRef.current = ns;
      setScore(ns);

      setCellStates(prev => {
        const n = [...prev];
        n[index] = "correct";
        return n;
      });
      setTimeout(() => setCellStates(prev => { const n = [...prev]; n[index] = "idle"; return n; }), 300);

      const nextIdx = inputIdxRef.current + 1;
      inputIdxRef.current = nextIdx;
      setInputIdx(nextIdx);

      if (nextIdx >= seq.length) {
        // Round complete!
        const nd = roundsDoneRef.current + 1;
        roundsDoneRef.current = nd;
        setRoundsDone(nd);
        triggerAvatar("happy", 1000, "happy");

        if (nd >= cfg.rounds) {
          // Level complete!
          if (isMultiplayer && matchId && !scoreSubmitted) {
            // Multiplayer: submit score, skip expedition save
            setScoreSubmitted(true);
            const rarity: CardRarity = calculateRarity(ns, cfg.rounds * cfg.seqLength, 0, false);
            saveCard({ id: generateCardId(), game: "sequencerush", theme: `level${cfg.level}`, rarity, score: ns, total: cfg.rounds * cfg.seqLength, date: new Date().toISOString() });
            window.dispatchEvent(new Event("plizio-cards-changed"));
            incrementTotalGames();
            setEarnedCard(rarity);
            triggerAvatar("happy", 99999, "victory");

            if (isMix) {
              submitMixRoundScore(matchId, ns, playerNum === "1").then(() => {
                setScreen("multi-waiting");
              });
            } else {
              submitScore(matchId, ns, playerNum === "1").then(() => {
                setScreen("multi-waiting");
              });
            }
          } else {
            const rarity: CardRarity = cfg.level === 10 ? "legendary" : calculateRarity(ns, cfg.rounds * cfg.seqLength, 0, false);
            saveCard({ id: generateCardId(), game: "sequencerush", theme: `level${cfg.level}`, rarity, score: ns, total: cfg.rounds * cfg.seqLength, date: new Date().toISOString() });
            incrementTotalGames();
            setEarnedCard(rarity);
            setSave(prev => {
              const newCompleted = [...new Set([...prev.completedLevels, cfg.level])];
              const newCurrent = cfg.level === 10 ? 10 : Math.max(prev.currentLevel, cfg.level + 1);
              const s: SRSave = { currentLevel: newCurrent, completedLevels: newCompleted };
              writeSave(s); return s;
            });
            triggerAvatar("happy", 99999, cfg.level === 10 ? "victory" : "happy");
            setScreen("reward");
          }
        } else {
          // Next round
          setTimeout(() => startRound(cfg, nd + 1, ns, errorsRef.current), 700);
        }
      }
    } else {
      // Wrong!
      const ne = errorsRef.current + 1;
      errorsRef.current = ne;
      setErrors(ne);

      setCellStates(prev => {
        const n = [...prev];
        n[index] = "wrong";
        return n;
      });
      setTimeout(() => setCellStates(prev => { const n = [...prev]; n[index] = "idle"; return n; }), 400);

      triggerAvatar("disappointed", 800);

      if (ne > cfg.maxErrors) {
        // Level failed
        if (isMultiplayer && matchId && !scoreSubmitted) {
          setScoreSubmitted(true);
          triggerAvatar("confused", 2000, "confused");
          if (isMix) {
            submitMixRoundScore(matchId, scoreRef.current, playerNum === "1").then(() => {
              setScreen("multi-waiting");
            });
          } else {
            submitScore(matchId, scoreRef.current, playerNum === "1").then(() => {
              setScreen("multi-waiting");
            });
          }
        } else {
          incrementTotalGames();
          triggerAvatar("confused", 2000, "confused");
          setScreen("levelFailed");
        }
      }
    }
  }, [screen, startRound]);

  const startLevel = useCallback((levelNum: number) => {
    const cfg = LEVELS[levelNum - 1];
    cfgRef.current = cfg;
    scoreRef.current = 0;
    errorsRef.current = 0;
    roundsDoneRef.current = 0;
    setActiveLevel(levelNum);
    setScore(0);
    setErrors(0);
    setRoundsDone(0);
    setEarnedCard(null);
    startRound(cfg, 1, 0, 0);
  }, [startRound]);

  // ── Multiplayer: poll for opponent ──────────────────────────────────────────
  useEffect(() => {
    if (screen !== "multi-waiting" || !isMultiplayer || !matchId) return;
    const isP1 = playerNum === "1";

    const checkMatch = async () => {
      if (isMix) {
        const result = await pollMixRound(matchId, parseInt(mixround || "1"), isP1, opponentName);
        if (result.action === "finished") {
          setMyFinalScore(result.myWins);
          setOppFinalScore(result.oppWins);
          setMixFinished(true);
          setScreen("multi-result");
          return true;
        }
        if (result.action === "next") {
          router.push(result.url);
          return true;
        }
        return false;
      } else {
        const { supabase } = await import("@/lib/supabase/client");
        const { data } = await supabase.from("multiplayer_matches").select("*").eq("id", matchId).single();
        if (!data) return false;
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
  }, [screen, isMultiplayer, matchId, isMix, playerNum, router, opponentName, mixround]);

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

  // ─── Cell visual config ───────────────────────────────────────────────────────
  function getCellStyle(state: CellState): { bg: string; border: string; icon: string; shadow: string } {
    switch (state) {
      case "flash":   return { bg: "#001a0a", border: "#00FF88", icon: "●",  shadow: "0 0 20px #00FF8899" };
      case "gold":    return { bg: "#2a1a00", border: "#FFD700", icon: "⭐", shadow: "0 0 20px #FFD70099" };
      case "decoy":   return { bg: "#1a0020", border: "#B44DFF", icon: "◆",  shadow: "0 0 14px #B44DFF99" };
      case "correct": return { bg: "#001a0a", border: "#00FF88", icon: "✓",  shadow: "0 0 20px #00FF88cc" };
      case "wrong":   return { bg: "#1a0005", border: "#FF2D78", icon: "✕",  shadow: "0 0 20px #FF2D7899" };
      default:        return { bg: "#0f0f2a", border: "#2a2a4a", icon: "",   shadow: "none" };
    }
  }

  // ─── RENDER ───────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white select-none overflow-hidden">
      <AvatarCompanion {...avatarProps} fixed />
      <MilestonePopup />

      {/* ── EXPEDITION ─────────────────────────────────────────────────────────── */}
      {screen === "expedition" && !isMultiplayer && (
        <div className="flex flex-col min-h-screen pb-24">
          <div className="flex items-center justify-between p-4 pt-6">
            <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <Home size={20} /><span className="text-sm font-bold">{t.home}</span>
            </Link>
            <div className="flex items-center gap-2">
              <Brain size={20} className="text-[#00D4FF]" />
              <span className="text-lg font-black tracking-wider text-[#00D4FF]">{t.title}</span>
            </div>
            <div className="w-20" />
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
                style={{ background: "linear-gradient(to right, #00D4FF, #B44DFF)" }}
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
                    done ? "bg-[#001222] border-[#00D4FF30]"
                    : current && isBoss ? "bg-[#1a0028] border-[#B44DFF] shadow-[0_0_20px_#B44DFF33]"
                    : current ? "bg-[#001622] border-[#00D4FF] shadow-[0_0_20px_#00D4FF33]"
                    : "bg-[#0f0f22] border-white/10 opacity-60"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black flex-shrink-0 ${
                    done ? "bg-[#00D4FF20] text-[#00D4FF]"
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
                      <span>{t.seqLen}: {lc.seqLength} {t.steps}</span>
                      <span>{lc.rounds} rds</span>
                    </div>
                    <div className="flex gap-1 mt-1.5 flex-wrap">
                      {lc.hasGold   && <span className="text-[10px] bg-[#FFD70020] text-[#FFD700] px-1.5 py-0.5 rounded-full border border-[#FFD70030]">⭐ {t.newMech}</span>}
                      {lc.hasDecoy  && <span className="text-[10px] bg-[#B44DFF20] text-[#B44DFF] px-1.5 py-0.5 rounded-full border border-[#B44DFF30]">⚠️ {t.newMech}</span>}
                      {lc.doublePlay && <span className="text-[10px] bg-[#FF6B0020] text-[#FF6B00] px-1.5 py-0.5 rounded-full border border-[#FF6B0030]">×2 {t.newMech}</span>}
                    </div>
                  </div>

                  {!locked && (
                    <button
                      onClick={() => startLevel(lc.level)}
                      className={`flex-shrink-0 px-4 py-2 rounded-xl font-black text-sm transition-all active:scale-95 ${
                        isBoss ? "bg-[#B44DFF] text-white shadow-[0_0_12px_#B44DFF66]"
                        : current ? "bg-[#00D4FF] text-[#0A0A1A] shadow-[0_0_12px_#00D4FF66]"
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

      {/* ── WATCHING / INPUTTING ───────────────────────────────────────────────── */}
      {(screen === "watching" || screen === "inputting") && (
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-3">
            <div className="flex flex-col items-start">
              <button
                onClick={() => {
                  if (isMultiplayer) { setShowExitConfirm(true); }
                  else { stopAllTimers(); setScreen("expedition"); }
                }}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/50 hover:bg-white/20 hover:text-white transition-colors mb-1"
              ><X size={14} /></button>
              <span className="text-white/40 text-xs font-bold tracking-wider">{t.round.toUpperCase()}</span>
              <span className="text-2xl font-black text-[#00D4FF]">
                {roundsDone + 1}<span className="text-white/30 text-sm font-bold ml-1">/{cfg.rounds}</span>
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white/40 text-xs font-bold tracking-wider">{t.errors.toUpperCase()}</span>
              <motion.span
                key={errors}
                className={`text-2xl font-black ${errors >= cfg.maxErrors ? "text-[#FF2D78]" : "text-white"}`}
                animate={errors > 0 ? { scale: [1.3, 1] } : {}} transition={{ duration: 0.2 }}
              >
                {errors}/{cfg.maxErrors + 1}
              </motion.span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-white/40 text-xs font-bold tracking-wider">SCORE</span>
              <motion.span
                key={score} className="text-2xl font-black text-[#00FF88]"
                animate={{ scale: [1.1, 1] }} transition={{ duration: 0.15 }}
              >
                {score}
              </motion.span>
            </div>
          </div>

          {/* Phase indicator */}
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              className={`mx-4 mb-3 py-2 px-4 rounded-xl flex items-center justify-center gap-2 ${
                screen === "watching"
                  ? "bg-[#00D4FF15] border border-[#00D4FF40]"
                  : "bg-[#FF2D7815] border border-[#FF2D7840]"
              }`}
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            >
              <span className="text-lg">{screen === "watching" ? "👁" : "👆"}</span>
              <span className={`font-black text-sm ${screen === "watching" ? "text-[#00D4FF]" : "text-[#FF2D78]"}`}>
                {screen === "watching" ? t.watchPhase : t.repeatPhase}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Input progress */}
          {screen === "inputting" && (
            <div className="mx-4 mb-2">
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-[#00D4FF]"
                  animate={{ width: `${(inputIdx / sequence.length) * 100}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <div className="text-center text-white/30 text-xs mt-1">
                {inputIdx} {t.of} {sequence.length}
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="flex-1 flex items-center justify-center px-4">
            <div className="grid gap-2.5 w-full max-w-sm" style={{ gridTemplateColumns: `repeat(${cfg.gridSize}, 1fr)` }}>
              {cellStates.map((state, i) => {
                const cc = getCellStyle(state);
                const isActive = state !== "idle";
                const isInputPhase = screen === "inputting";
                return (
                  <motion.button
                    key={i}
                    onClick={() => isInputPhase && handleCellTap(i)}
                    className="aspect-square rounded-xl flex items-center justify-center text-xl font-bold"
                    style={{
                      background: cc.bg,
                      border: `2px solid ${cc.border}`,
                      boxShadow: isActive ? cc.shadow : "none",
                      cursor: isInputPhase ? "pointer" : "default",
                    }}
                    animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: isInputPhase ? 0.5 : 0.3 }}
                    whileTap={isInputPhase ? { scale: 0.85 } : {}}
                    transition={{ duration: 0.12 }}
                  >
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.span
                          key={`${i}-${state}`}
                          initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 500, damping: 25 }}
                          style={{ color: cc.border }}
                        >
                          {cc.icon}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="px-4 py-3 text-center text-white/30 text-xs pb-6">
            {t.levelLabel} {activeLevel}/10 · {t.hint}
          </div>
        </div>
      )}

      {/* ── LEVEL COMPLETE ─────────────────────────────────────────────────────── */}
      {screen === "reward" && earnedCard && (
        <RewardReveal rarity={earnedCard} game="sequencerush" score={score} total={cfg.rounds * cfg.seqLength}
          onDone={() => setScreen("levelComplete")} />
      )}

      {screen === "levelComplete" && earnedCard && (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 gap-6 text-center">
          <motion.div
            className="text-5xl font-black"
            style={{ color: activeLevel === 10 ? "#B44DFF" : "#00D4FF" }}
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {activeLevel === 10 ? t.bossDone : t.levelDone}
          </motion.div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-white/40 text-sm font-bold tracking-wider">{t.finalScore}</span>
            <span className="text-4xl font-black text-white">{score} <span className="text-white/40 text-xl">{t.pts}</span></span>
            <span className="text-white/40 text-sm">{roundsDone}/{cfg.rounds} {t.goalWas}</span>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            {activeLevel === 10 ? (
              <>
                <button
                  onClick={() => {
                    const ns: SRSave = { currentLevel: 1, completedLevels: [] };
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
                  className="py-4 px-8 rounded-2xl font-black text-lg bg-[#00D4FF] text-[#0A0A1A] shadow-[0_0_20px_#00D4FF66] active:scale-95 transition-all flex items-center justify-center gap-2"
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

      {/* ── LEVEL FAILED ───────────────────────────────────────────────────────── */}
      {screen === "levelFailed" && (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 gap-6 text-center">
          <motion.div
            className="text-5xl font-black text-[#FF2D78]"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {t.failed}
          </motion.div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-white/40 text-sm">{t.scoredPoints}</span>
            <span className="text-4xl font-black text-white">{score}</span>
            <span className="text-white/40 text-sm">
              {roundsDone} {t.goalWas}
              {roundsDone >= cfg.rounds - 1 && <span className="text-[#FFD700] ml-2 font-bold">{t.almostThere}</span>}
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
            {score} {t.pts}
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
          myScore={myFinalScore !== null ? myFinalScore : score}
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
          {(screen === "watching" || screen === "inputting") && (
            <MultiplayerAbandonNotice matchId={matchId} opponentName={opponentName} />
          )}
        </>
      )}
    </div>
  );
}
