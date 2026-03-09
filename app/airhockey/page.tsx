"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Play } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores, checkNewMilestones } from "@/lib/milestones";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import type { CardRarity } from "@/lib/cards";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef } from "@/lib/accessories";
import { supabase } from "@/lib/supabase/client";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { submitScore, abandonMatch, submitMixRoundScore, pollMixRound } from "@/lib/multiplayer";
import { getUsername } from "@/lib/username";
import MultiplayerExitConfirm from "@/components/MultiplayerExitConfirm";
import MultiplayerAbandonNotice from "@/components/MultiplayerAbandonNotice";
import MultiplayerResult from "@/components/MultiplayerResult";

// ─── Translations ────────────────────────────────────────────
const T = {
  en: {
    title: "Air Hockey",
    easy: "Easy", medium: "Medium", hard: "Hard",
    you: "You", ai: "AI",
    won: "You Won!", lost: "You Lost!",
    playAgain: "Play Again", back: "Back",
    selectDifficulty: "Select Difficulty",
    firstTo: "First to 7 goals",
    waitingOpp: "Waiting for",
  },
  hu: {
    title: "Léghoki",
    easy: "Könnyű", medium: "Közepes", hard: "Nehéz",
    you: "Te", ai: "AI",
    won: "Győztél!", lost: "Vesztettél!",
    playAgain: "Újra", back: "Vissza",
    selectDifficulty: "Válassz nehézséget",
    firstTo: "Először 7 gólig",
    waitingOpp: "Várakozás",
  },
  de: {
    title: "Air Hockey",
    easy: "Leicht", medium: "Mittel", hard: "Schwer",
    you: "Du", ai: "KI",
    won: "Gewonnen!", lost: "Verloren!",
    playAgain: "Nochmal", back: "Zurück",
    selectDifficulty: "Schwierigkeit wählen",
    firstTo: "Erster bis 7 Tore",
    waitingOpp: "Warte auf",
  },
  ro: {
    title: "Air Hockey",
    easy: "Ușor", medium: "Mediu", hard: "Greu",
    you: "Tu", ai: "AI",
    won: "Ai câștigat!", lost: "Ai pierdut!",
    playAgain: "Din nou", back: "Înapoi",
    selectDifficulty: "Alege dificultatea",
    firstTo: "Primul la 7 goluri",
    waitingOpp: "Se așteaptă",
  },
};

// ─── Constants ───────────────────────────────────────────────
const WIN_SCORE = 7;
const PUCK_RADIUS = 12;
const PADDLE_RADIUS = 22;
const GOAL_WIDTH_RATIO = 0.35; // goal width as ratio of rink width
const SERVE_DELAY = 600;

const AI_CONFIG = {
  easy:   { speed: 0.03, predict: 0.02, react: 0.04 },
  medium: { speed: 0.05, predict: 0.04, react: 0.07 },
  hard:   { speed: 0.08, predict: 0.06, react: 0.12 },
};

// ─── Powerup ─────────────────────────────────────────────────
type PowerupType = "speed" | "double" | "bigpaddle" | "shield";
const POWERUP_DEFS: Record<PowerupType, { icon: string; label: string; color: string; duration: number }> = {
  speed:     { icon: "⚡", label: "FAST PUCK!",   color: "#FFD700", duration: 6000 },
  double:    { icon: "💥", label: "DOUBLE PUCK!", color: "#FF4444", duration: 8000 },
  bigpaddle: { icon: "🧲", label: "BIG PADDLE!",  color: "#44AAFF", duration: 7000 },
  shield:    { icon: "🛡", label: "GOAL SHIELD!", color: "#00FF88", duration: 6000 },
};
const PU_SPAWN_MIN = 10000;
const PU_SPAWN_MAX = 18000;

type Difficulty = "easy" | "medium" | "hard";
type Screen = "menu" | "playing" | "reward" | "result" | "multi-waiting" | "multi-result";

interface Puck {
  x: number; y: number; vx: number; vy: number; speed: number;
}
interface PowerupState {
  type: PowerupType; x: number; y: number; spawnTime: number;
  active: boolean; activatedBy: "player" | "ai" | null; duration: number; activatedAt: number;
}
interface GameState {
  playerX: number; playerY: number;
  aiX: number; aiY: number;
  pucks: Puck[];
  serving: boolean; serveTimer: number;
  gameOver: boolean; rallyCount: number;
  // powerups
  powerup: PowerupState | null;
  activePowerup: PowerupState | null;
  nextPowerupTime: number;
  playerPaddleScale: number; aiPaddleScale: number;
  playerShield: boolean; aiShield: boolean;
  puFlash: { text: string; color: string; time: number } | null;
  // goal flash
  goalFlash: { time: number; who: "player" | "ai" } | null;
}

// ─── Main ────────────────────────────────────────────────────
export default function AirHockeyWrapper() {
  return <Suspense><AirHockeyPage /></Suspense>;
}

function AirHockeyPage() {
  const { lang } = useLang();
  const t = (T[lang] || T.en) as typeof T.en;
  const router = useRouter();
  const searchParams = useSearchParams();

  const matchId = searchParams.get("match");
  const playerNum = searchParams.get("p");
  const opponentName = searchParams.get("vs") || "???";
  const mixround = searchParams.get("mixround");
  const isMultiplayer = !!matchId;
  const isMix = !!mixround;

  const [screen, setScreen] = useState<Screen>("menu");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [milestones, setMilestones] = useState<string[]>([]);
  const [avatarMood, setAvatarMood] = useState<"idle" | "happy" | "victory" | "disappointed">("idle");

  // Multiplayer
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);
  const [myFinalScore, setMyFinalScore] = useState<number | null>(null);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const broadcastChannelRef = useRef<RealtimeChannel | null>(null);
  const oppPaddleRef = useRef({ x: 0.5, y: 0.15 });
  const scoreSubmittedRef = useRef(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<GameState | null>(null);
  const animFrameRef = useRef<number>(0);
  const playerScoreRef = useRef(0);
  const aiScoreRef = useRef(0);

  // Avatar
  const [gender] = useState<AvatarGender>(() => getGender());
  const [activeSkin] = useState(() => getSkinDef(getActiveSkin()));
  const [activeFace] = useState(() => getFaceDef(getActiveFace()));
  const [activeTop] = useState(() => { const id = getActive("top"); return id ? getTopDef(id) : null; });
  const [activeBottom] = useState(() => { const id = getActive("bottom"); return id ? getBottomDef(id) : null; });
  const [activeShoe] = useState(() => { const id = getActive("shoe"); return id ? getShoeDef(id) : null; });
  const [activeCape] = useState(() => { const id = getActive("cape"); return id ? getCapeDef(id) : null; });
  const [activeGlasses] = useState(() => { const id = getActive("glasses"); return id ? getGlassesDef(id) : null; });
  const [activeGloves] = useState(() => { const id = getActive("gloves"); return id ? getGloveDef(id) : null; });
  const [activeHat] = useState(() => { const id = getActiveHat(); return id ? getHatDef(id) : null; });

  // Streak
  const getStreak = useCallback(() => {
    try {
      const raw = localStorage.getItem("airhockey_streak");
      if (!raw) return 0;
      const { count, lastDate } = JSON.parse(raw);
      const today = new Date().toISOString().slice(0, 10);
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (lastDate === today || lastDate === yesterday) return count || 0;
      return 0;
    } catch { return 0; }
  }, []);
  const updateStreak = useCallback(() => {
    const today = new Date().toISOString().slice(0, 10);
    try {
      const raw = localStorage.getItem("airhockey_streak");
      if (raw) {
        const { count, lastDate } = JSON.parse(raw);
        if (lastDate === today) return count;
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        const newCount = lastDate === yesterday ? count + 1 : 1;
        localStorage.setItem("airhockey_streak", JSON.stringify({ count: newCount, lastDate: today }));
        return newCount;
      }
    } catch {}
    localStorage.setItem("airhockey_streak", JSON.stringify({ count: 1, lastDate: today }));
    return 1;
  }, []);

  const startGame = useCallback((diff: Difficulty) => {
    setDifficulty(diff);
    setPlayerScore(0); setAiScore(0);
    playerScoreRef.current = 0; aiScoreRef.current = 0;
    setAvatarMood("idle"); setScoreSubmitted(false); scoreSubmittedRef.current = false;
    setScreen("playing");
  }, []);

  // Auto-start multiplayer
  const multiStarted = useRef(false);
  useEffect(() => {
    if (isMultiplayer && !multiStarted.current) {
      multiStarted.current = true;
      setTimeout(() => startGame("medium"), 100);
    }
  }, [isMultiplayer, startGame]);

  // Broadcast channel
  useEffect(() => {
    if (!isMultiplayer || !matchId) return;
    const channel = supabase.channel(`airhockey-${matchId}`, { config: { broadcast: { self: false } } });
    channel.on("broadcast", { event: "paddlePos" }, (payload) => {
      if (payload.payload.p !== playerNum) {
        // Flip Y: opponent's bottom (y≈0.75) → our top AI position (y≈0.25)
        oppPaddleRef.current = { x: payload.payload.x, y: 1 - payload.payload.y };
      }
    });

    // P2 receives authoritative puck state from P1
    let gameOverHandled = false;
    channel.on("broadcast", { event: "puckSync" }, (payload) => {
      if (playerNum !== "1" && gameRef.current) {
        const game = gameRef.current;
        const { pucks, ps1, ps2, serving, playerPaddleScale, aiPaddleScale, playerShield, aiShield } = payload.payload;
        if (pucks?.length > 0) {
          if (game.pucks.length !== pucks.length) {
            // Puck count changed — hard reset
            game.pucks = (pucks as {x:number,y:number,vx:number,vy:number,speed:number}[]).map(p => ({
              x: p.x, y: 1 - p.y, vx: p.vx, vy: -p.vy, speed: p.speed,
            }));
          } else {
            // Lerp position, snap velocity (dead-reckoning correction)
            for (let i = 0; i < pucks.length; i++) {
              const s = (pucks as {x:number,y:number,vx:number,vy:number,speed:number}[])[i];
              const b = game.pucks[i];
              b.x = b.x + (s.x - b.x) * 0.4;
              b.y = b.y + ((1 - s.y) - b.y) * 0.4;
              b.vx = s.vx; b.vy = -s.vy; b.speed = s.speed;
            }
          }
        }
        if (typeof serving === "boolean") game.serving = serving;
        // P2 shows ps2 as their score, ps1 as opponent
        if (ps1 !== undefined && ps2 !== undefined) {
          playerScoreRef.current = ps2; aiScoreRef.current = ps1;
          setPlayerScore(ps2); setAiScore(ps1);
        }
        // Swap scales/shields: P1's player = P2's AI and vice versa
        if (playerPaddleScale !== undefined) game.aiPaddleScale = playerPaddleScale;
        if (aiPaddleScale !== undefined) game.playerPaddleScale = aiPaddleScale;
        if (playerShield !== undefined) game.aiShield = playerShield;
        if (aiShield !== undefined) game.playerShield = aiShield;
      }
    });

    // P1 sends game-over signal → P2 submits score + shows result
    channel.on("broadcast", { event: "gameOver" }, (payload) => {
      if (playerNum !== "1" && !gameOverHandled) {
        gameOverHandled = true;
        const { p1score, p2score } = payload.payload as { p1score: number; p2score: number };
        if (gameRef.current) gameRef.current.gameOver = true;
        const won = p2score > p1score;
        if (matchId && !scoreSubmittedRef.current) {
          scoreSubmittedRef.current = true;
          if (isMix) submitMixRoundScore(matchId, p2score, false);
          else submitScore(matchId, p2score, false);
        }
        setMyFinalScore(p2score); setOppFinalScore(p1score);
        setScreen("multi-result");
        setAvatarMood(won ? "victory" : "disappointed");
      }
    });
    channel.subscribe();
    broadcastChannelRef.current = channel;
    return () => { channel.unsubscribe(); broadcastChannelRef.current = null; };
  }, [isMultiplayer, matchId, playerNum]);

  // Multiplayer polling
  useEffect(() => {
    if (screen !== "multi-waiting" || !isMultiplayer || !matchId) return;
    const isP1 = playerNum === "1";
    const checkMatch = async () => {
      if (isMix) {
        const result = await pollMixRound(matchId, parseInt(mixround || "1"), isP1, opponentName);
        if (result.action === "finished") { setMyFinalScore(result.myWins); setOppFinalScore(result.oppWins); setScreen("multi-result"); return true; }
        if (result.action === "next") { router.push(result.url); return true; }
        return false;
      } else {
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

  // Handle game end
  const handleGameEnd = useCallback((won: boolean, myScore: number, oppScore: number) => {
    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true); scoreSubmittedRef.current = true;
      if (isMix) submitMixRoundScore(matchId, myScore, playerNum === "1");
      else submitScore(matchId, myScore, playerNum === "1");
      if (won) {
        const streak = updateStreak();
        const rarity = calculateRarity(myScore, WIN_SCORE, streak, false);
        saveCard({ id: generateCardId(), game: "airhockey", rarity, score: myScore, total: WIN_SCORE, date: new Date().toISOString() });
        window.dispatchEvent(new Event("plizio-cards-changed"));
        setEarnedCard(rarity);
      }
      incrementTotalGames();
      if (oppScore === 0) incrementPerfectScores();
      const newMs = checkNewMilestones();
      if (newMs.length > 0) setMilestones(newMs.map(m => m.id));
      setMyFinalScore(myScore);
      setAvatarMood(won ? "victory" : "disappointed");
      setScreen("multi-waiting");
      return;
    }
    // Solo
    if (won) {
      const streak = updateStreak();
      const rarity = calculateRarity(myScore, WIN_SCORE, streak, false);
      saveCard({ id: generateCardId(), game: "airhockey", rarity, score: myScore, total: WIN_SCORE, date: new Date().toISOString() });
      window.dispatchEvent(new Event("plizio-cards-changed"));
      incrementTotalGames();
      if (oppScore === 0) incrementPerfectScores();
      const newMs = checkNewMilestones();
      if (newMs.length > 0) setMilestones(newMs.map(m => m.id));
      setEarnedCard(rarity);
      setAvatarMood("victory");
      setScreen("reward");
    } else {
      incrementTotalGames();
      setAvatarMood("disappointed");
      setScreen("result");
    }
  }, [updateStreak, isMultiplayer, matchId, scoreSubmitted, isMix, playerNum]);

  // ─── Canvas Game Loop ────────────────────────────────────
  useEffect(() => {
    if (screen !== "playing") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.width / (window.devicePixelRatio || 1);
    const H = () => canvas.height / (window.devicePixelRatio || 1);

    const ai = AI_CONFIG[difficulty];

    // Rink layout (centered, portrait)
    const rink = () => {
      const w = W(), h = H();
      const maxH = h * 0.88;
      const maxW = w * 0.90;
      let rW = maxW, rH = maxH;
      if (rW > rH * 0.55) rW = rH * 0.55;
      if (rH > rW / 0.55) rH = rW / 0.55;
      const rL = (w - rW) / 2, rT = (h - rH) / 2;
      return { rL, rT, rW, rH, rR: rL + rW, rB: rT + rH, w, h };
    };

    // Normalized coords: 0..1 within rink
    const game: GameState = {
      playerX: 0.5, playerY: 0.75,
      aiX: 0.5, aiY: 0.25,
      pucks: [{ x: 0.5, y: 0.5, vx: 0, vy: 0, speed: 0 }],
      serving: true, serveTimer: Date.now(),
      gameOver: false, rallyCount: 0,
      powerup: null, activePowerup: null,
      nextPowerupTime: Date.now() + PU_SPAWN_MIN + Math.random() * (PU_SPAWN_MAX - PU_SPAWN_MIN),
      playerPaddleScale: 1, aiPaddleScale: 1,
      playerShield: false, aiShield: false,
      puFlash: null, goalFlash: null,
    };
    gameRef.current = game;

    const pR = () => PUCK_RADIUS / rink().rW;   // normalized puck radius
    const pRY = () => PUCK_RADIUS / rink().rH;
    const padR = () => PADDLE_RADIUS / rink().rW;
    const padRY = () => PADDLE_RADIUS / rink().rH;
    const goalW = GOAL_WIDTH_RATIO;

    const resetPuck = () => {
      game.pucks = [{ x: 0.5, y: 0.5, vx: 0, vy: 0, speed: 0 }];
      game.serving = true;
      game.serveTimer = Date.now();
      game.rallyCount = 0;
    };

    const launchPuck = () => {
      const baseSpeed = 0.005 + (difficulty === "hard" ? 0.002 : difficulty === "medium" ? 0.001 : 0);
      const puck = game.pucks[0];
      puck.speed = baseSpeed;
      const angle = (Math.random() - 0.5) * 1.2;
      const dir = Math.random() > 0.5 ? 1 : -1;
      puck.vx = Math.sin(angle) * puck.speed;
      puck.vy = Math.cos(angle) * puck.speed * dir;
      game.serving = false;
    };

    // Goal check
    const goalLeft = (0.5 - goalW / 2);
    const goalRight = (0.5 + goalW / 2);

    const scoreGoal = (playerScored: boolean) => {
      if (game.gameOver) return;
      game.goalFlash = { time: Date.now(), who: playerScored ? "player" : "ai" };

      if (playerScored) { playerScoreRef.current++; setPlayerScore(playerScoreRef.current); }
      else { aiScoreRef.current++; setAiScore(aiScoreRef.current); }

      // Clear powerups
      game.powerup = null; game.activePowerup = null;
      game.playerPaddleScale = 1; game.aiPaddleScale = 1;
      game.playerShield = false; game.aiShield = false;

      const ps = playerScoreRef.current, as_ = aiScoreRef.current;
      if (ps >= WIN_SCORE || as_ >= WIN_SCORE) {
        game.gameOver = true;
        // In multiplayer, P1 signals game-over to P2 before calling handleGameEnd
        if (isMultiplayer && playerNum === "1" && broadcastChannelRef.current) {
          broadcastChannelRef.current.send({
            type: "broadcast", event: "gameOver",
            payload: { p1score: ps, p2score: as_ },
          });
        }
        setTimeout(() => handleGameEnd(ps > as_, ps, as_), 800);
        return;
      }
      resetPuck();
    };

    // Powerup spawn
    const spawnPowerup = () => {
      const types: PowerupType[] = ["speed", "double", "bigpaddle", "shield"];
      const type = types[Math.floor(Math.random() * types.length)];
      game.powerup = {
        type, x: 0.2 + Math.random() * 0.6, y: 0.35 + Math.random() * 0.3,
        spawnTime: Date.now(), active: false, activatedBy: null,
        duration: POWERUP_DEFS[type].duration, activatedAt: 0,
      };
    };

    const activatePowerup = (pu: PowerupState, hitBy: "player" | "ai") => {
      pu.active = true; pu.activatedBy = hitBy; pu.activatedAt = Date.now();
      game.activePowerup = pu; game.powerup = null;
      game.puFlash = { text: POWERUP_DEFS[pu.type].label, color: POWERUP_DEFS[pu.type].color, time: Date.now() };
      if (pu.type === "speed") {
        for (const p of game.pucks) {
          p.speed = Math.min(p.speed * 1.7, 0.025);
          const dir = Math.atan2(p.vy, p.vx);
          p.vx = Math.cos(dir) * p.speed; p.vy = Math.sin(dir) * p.speed;
        }
      } else if (pu.type === "double" && game.pucks.length === 1) {
        const b = game.pucks[0];
        game.pucks.push({ x: b.x, y: b.y, vx: -b.vx, vy: -b.vy, speed: b.speed });
      } else if (pu.type === "bigpaddle") {
        if (hitBy === "player") game.playerPaddleScale = 1.7;
        else game.aiPaddleScale = 1.7;
      } else if (pu.type === "shield") {
        if (hitBy === "player") game.playerShield = true;
        else game.aiShield = true;
      }
    };

    // Player input — free movement within bottom half
    let playerTarget = { x: 0.5, y: 0.75 };
    const handlePointer = (e: PointerEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0]?.clientX ?? 0 : (e as PointerEvent).clientX;
      const clientY = "touches" in e ? e.touches[0]?.clientY ?? 0 : (e as PointerEvent).clientY;
      const r = rink();
      const nx = ((clientX - rect.left) / rect.width * r.w - r.rL) / r.rW;
      const ny = ((clientY - rect.top) / rect.height * r.h - r.rT) / r.rH;
      const pr = padR();
      playerTarget.x = Math.max(pr, Math.min(1 - pr, nx));
      playerTarget.y = Math.max(0.52, Math.min(1 - padRY(), ny)); // only bottom half
    };
    canvas.addEventListener("pointermove", handlePointer);
    canvas.addEventListener("pointerdown", handlePointer);
    canvas.addEventListener("touchmove", handlePointer as EventListener, { passive: true });

    const keys = new Set<string>();
    const handleKeyDown = (e: KeyboardEvent) => { keys.add(e.key); };
    const handleKeyUp = (e: KeyboardEvent) => { keys.delete(e.key); };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    let broadcastTimer = 0;
    resetPuck();

    // ─── Game Loop ───────────────────────────────────────
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - lastTime) / 16.67, 3);
      lastTime = now;
      const r = rink();
      const pr = padR(), prY = padRY();
      const pkR = pR(), pkRY = pRY();

      // Keyboard
      if (keys.has("ArrowLeft") || keys.has("a")) playerTarget.x = Math.max(pr, playerTarget.x - 0.02 * dt);
      if (keys.has("ArrowRight") || keys.has("d")) playerTarget.x = Math.min(1 - pr, playerTarget.x + 0.02 * dt);
      if (keys.has("ArrowUp") || keys.has("w")) playerTarget.y = Math.max(0.52, playerTarget.y - 0.02 * dt);
      if (keys.has("ArrowDown") || keys.has("s")) playerTarget.y = Math.min(1 - prY, playerTarget.y + 0.02 * dt);

      // Smooth player paddle movement
      game.playerX += (playerTarget.x - game.playerX) * Math.min(1, 0.3 * dt);
      game.playerY += (playerTarget.y - game.playerY) * Math.min(1, 0.3 * dt);

      // AI movement
      if (isMultiplayer) {
        game.aiX += (oppPaddleRef.current.x - game.aiX) * Math.min(1, 0.3 * dt);
        game.aiY += (oppPaddleRef.current.y - game.aiY) * Math.min(1, 0.3 * dt);
      } else {
        const puck = game.pucks[0];
        const targetX = puck.vy < 0 ? puck.x + (Math.random() - 0.5) * ai.predict : 0.5;
        const targetY = puck.vy < 0 ? Math.max(0.08, puck.y - 0.15) : 0.2;
        game.aiX += (Math.max(pr, Math.min(1 - pr, targetX)) - game.aiX) * ai.react * dt;
        game.aiY += (Math.max(prY, Math.min(0.48, targetY)) - game.aiY) * ai.react * dt * 0.7;
        game.aiX = Math.max(pr, Math.min(1 - pr, game.aiX));
        game.aiY = Math.max(prY, Math.min(0.48, game.aiY));
      }

      // Broadcast — paddle pos + P1 puck sync (~33ms)
      if (isMultiplayer && broadcastChannelRef.current) {
        broadcastTimer += dt;
        if (broadcastTimer > 2) {
          broadcastTimer = 0;
          broadcastChannelRef.current.send({
            type: "broadcast", event: "paddlePos",
            payload: { p: playerNum, x: game.playerX, y: game.playerY },
          });
          if (playerNum === "1") {
            broadcastChannelRef.current.send({
              type: "broadcast", event: "puckSync",
              payload: {
                pucks: game.pucks.map(p => ({ x: p.x, y: p.y, vx: p.vx, vy: p.vy, speed: p.speed })),
                ps1: playerScoreRef.current,
                ps2: aiScoreRef.current,
                serving: game.serving,
                playerPaddleScale: game.playerPaddleScale,
                aiPaddleScale: game.aiPaddleScale,
                playerShield: game.playerShield,
                aiShield: game.aiShield,
              },
            });
          }
        }
      }

      // Serve — P1 authoritative in multiplayer
      if (game.serving && Date.now() - game.serveTimer > SERVE_DELAY && !game.gameOver && (!isMultiplayer || playerNum === "1")) {
        launchPuck();
      }

      // Powerup management — P1 authoritative in multiplayer
      if (!game.gameOver && !game.serving && (!isMultiplayer || playerNum === "1")) {
        if (!game.powerup && !game.activePowerup && Date.now() >= game.nextPowerupTime) {
          spawnPowerup();
          game.nextPowerupTime = Date.now() + PU_SPAWN_MIN + Math.random() * (PU_SPAWN_MAX - PU_SPAWN_MIN);
        }
        if (game.activePowerup && Date.now() - game.activePowerup.activatedAt > game.activePowerup.duration) {
          const ap = game.activePowerup;
          if (ap.type === "speed") {
            const baseSpeed = 0.005 + (difficulty === "hard" ? 0.002 : difficulty === "medium" ? 0.001 : 0);
            for (const p of game.pucks) { const dir = Math.atan2(p.vy, p.vx); p.speed = Math.max(baseSpeed, p.speed * 0.6); p.vx = Math.cos(dir) * p.speed; p.vy = Math.sin(dir) * p.speed; }
          } else if (ap.type === "double") { if (game.pucks.length > 1) game.pucks.splice(1); }
          else if (ap.type === "bigpaddle") { game.playerPaddleScale = 1; game.aiPaddleScale = 1; }
          else if (ap.type === "shield") { game.playerShield = false; game.aiShield = false; }
          game.activePowerup = null;
        }
      }

      // Puck physics — P1 is authoritative; P2 dead-reckons between syncs
      const playerPR = pr * game.playerPaddleScale;
      const playerPRY = prY * game.playerPaddleScale;
      const aiPR = pr * game.aiPaddleScale;
      const aiPRY = prY * game.aiPaddleScale;

      if (!game.serving && !game.gameOver && isMultiplayer && playerNum !== "1") {
        // P2: extrapolate puck movement only (no collision, no scoring)
        for (const puck of game.pucks) {
          puck.x += puck.vx * dt;
          puck.y += puck.vy * dt;
          puck.vx *= 0.9995; puck.vy *= 0.9995;
          if (puck.x < pkR) { puck.x = pkR; puck.vx = Math.abs(puck.vx); }
          if (puck.x > 1 - pkR) { puck.x = 1 - pkR; puck.vx = -Math.abs(puck.vx); }
          if (puck.y < pkRY) { puck.y = pkRY; puck.vy = Math.abs(puck.vy); }
          if (puck.y > 1 - pkRY) { puck.y = 1 - pkRY; puck.vy = -Math.abs(puck.vy); }
        }
      }
      if (!game.serving && !game.gameOver && (!isMultiplayer || playerNum === "1")) {
        const toRemove: number[] = [];
        for (let bi = 0; bi < game.pucks.length; bi++) {
          const puck = game.pucks[bi];
          puck.x += puck.vx * dt;
          puck.y += puck.vy * dt;

          // Friction
          puck.vx *= 0.9995;
          puck.vy *= 0.9995;

          // Wall bounces (left/right)
          if (puck.x < pkR) { puck.x = pkR; puck.vx = Math.abs(puck.vx); }
          if (puck.x > 1 - pkR) { puck.x = 1 - pkR; puck.vx = -Math.abs(puck.vx); }

          // Top/bottom walls — check for goals
          const inGoal = puck.x >= goalLeft && puck.x <= goalRight;

          // Top wall (AI goal)
          if (puck.y < pkRY) {
            if (inGoal) {
              if (game.aiShield) {
                puck.y = pkRY; puck.vy = Math.abs(puck.vy);
                game.aiShield = false; // shield consumed
              } else {
                if (bi === 0) scoreGoal(true); else toRemove.push(bi);
                continue;
              }
            } else {
              puck.y = pkRY; puck.vy = Math.abs(puck.vy);
            }
          }
          // Bottom wall (Player goal)
          if (puck.y > 1 - pkRY) {
            if (inGoal) {
              if (game.playerShield) {
                puck.y = 1 - pkRY; puck.vy = -Math.abs(puck.vy);
                game.playerShield = false;
              } else {
                if (bi === 0) scoreGoal(false); else toRemove.push(bi);
                continue;
              }
            } else {
              puck.y = 1 - pkRY; puck.vy = -Math.abs(puck.vy);
            }
          }

          // Paddle collision helper
          const paddleHit = (px: number, py: number, scaleR: number, scaleRY: number) => {
            const dx = (puck.x - px);
            const dy = (puck.y - py);
            const normDx = dx / (scaleR + pkR);
            const normDy = dy / (scaleRY + pkRY);
            const dist = Math.sqrt(normDx * normDx + normDy * normDy);
            if (dist < 1) {
              // Bounce direction based on hit position
              const angle = Math.atan2(dy, dx);
              const minSpeed = 0.004;
              puck.speed = Math.max(minSpeed, Math.min(puck.speed * 1.08, 0.018));
              puck.vx = Math.cos(angle) * puck.speed;
              puck.vy = Math.sin(angle) * puck.speed;
              // Push puck outside paddle
              puck.x = px + Math.cos(angle) * (scaleR + pkR) * 1.01;
              puck.y = py + Math.sin(angle) * (scaleRY + pkRY) * 1.01;
              game.rallyCount++;
              return true;
            }
            return false;
          };

          // Player paddle
          paddleHit(game.playerX, game.playerY, playerPR, playerPRY);
          // AI paddle
          paddleHit(game.aiX, game.aiY, aiPR, aiPRY);

          // Powerup collision
          if (game.powerup && !game.powerup.active) {
            const pdx = puck.x - game.powerup.x;
            const pdy = puck.y - game.powerup.y;
            if (Math.sqrt(pdx * pdx + pdy * pdy) < 0.04 + pkR) {
              activatePowerup(game.powerup, puck.y > 0.5 ? "player" : "ai");
            }
          }
        }
        for (let i = toRemove.length - 1; i >= 0; i--) game.pucks.splice(toRemove[i], 1);
      }

      // ═════════════════════════════════════════════
      //  R E N D E R
      // ═════════════════════════════════════════════
      const { rL, rT, rW, rH, rR, rB, w, h } = r;
      ctx.clearRect(0, 0, w, h);

      // Dark background
      ctx.fillStyle = "#0A0A1A";
      ctx.fillRect(0, 0, w, h);

      // Rink shadow
      ctx.fillStyle = "rgba(0,100,255,0.05)";
      ctx.beginPath();
      ctx.roundRect(rL - 4, rT - 4, rW + 8, rH + 8, 16);
      ctx.fill();

      // Rink surface — dark with subtle gradient
      const rinkGrad = ctx.createLinearGradient(rL, rT, rL, rB);
      rinkGrad.addColorStop(0, "#0D1525");
      rinkGrad.addColorStop(0.5, "#101830");
      rinkGrad.addColorStop(1, "#0D1525");
      ctx.fillStyle = rinkGrad;
      ctx.beginPath();
      ctx.roundRect(rL, rT, rW, rH, 12);
      ctx.fill();

      // Neon border
      ctx.strokeStyle = "#00D4FF40";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(rL, rT, rW, rH, 12);
      ctx.stroke();

      // Pixel helpers
      const toX = (nx: number) => rL + nx * rW;
      const toY = (ny: number) => rT + ny * rH;

      // Center line
      ctx.strokeStyle = "#00D4FF30";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(rL + 10, toY(0.5));
      ctx.lineTo(rR - 10, toY(0.5));
      ctx.stroke();
      ctx.setLineDash([]);

      // Center circle
      const ccR = rW * 0.12;
      ctx.strokeStyle = "#00D4FF25";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(toX(0.5), toY(0.5), ccR, 0, Math.PI * 2);
      ctx.stroke();

      // Center dot
      ctx.fillStyle = "#00D4FF30";
      ctx.beginPath();
      ctx.arc(toX(0.5), toY(0.5), 3, 0, Math.PI * 2);
      ctx.fill();

      // Goals — glowing rectangles at top and bottom
      const goalLPx = toX(goalLeft);
      const goalRPx = toX(goalRight);
      const goalDepth = 8;

      // Top goal (AI)
      const topGoalGrad = ctx.createLinearGradient(goalLPx, rT - goalDepth, goalLPx, rT + 4);
      topGoalGrad.addColorStop(0, game.aiShield ? "#00FF8860" : "#FF2D7860");
      topGoalGrad.addColorStop(1, "transparent");
      ctx.fillStyle = topGoalGrad;
      ctx.fillRect(goalLPx, rT - 2, goalRPx - goalLPx, goalDepth + 4);
      ctx.strokeStyle = game.aiShield ? "#00FF88" : "#FF2D78";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(goalLPx, rT + 4); ctx.lineTo(goalLPx, rT - 2);
      ctx.lineTo(goalRPx, rT - 2); ctx.lineTo(goalRPx, rT + 4);
      ctx.stroke();

      // Bottom goal (Player)
      const botGoalGrad = ctx.createLinearGradient(goalLPx, rB + goalDepth, goalLPx, rB - 4);
      botGoalGrad.addColorStop(0, game.playerShield ? "#00FF8860" : "#00D4FF60");
      botGoalGrad.addColorStop(1, "transparent");
      ctx.fillStyle = botGoalGrad;
      ctx.fillRect(goalLPx, rB - 4, goalRPx - goalLPx, goalDepth + 4);
      ctx.strokeStyle = game.playerShield ? "#00FF88" : "#00D4FF";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(goalLPx, rB - 4); ctx.lineTo(goalLPx, rB + 2);
      ctx.lineTo(goalRPx, rB + 2); ctx.lineTo(goalRPx, rB - 4);
      ctx.stroke();

      // Powerup icon
      if (game.powerup && !game.powerup.active) {
        const pu = game.powerup;
        const px = toX(pu.x), py = toY(pu.y);
        const puR = Math.max(14, rW * 0.04);
        const pulse = 1 + Math.sin(Date.now() * 0.005) * 0.15;
        const def = POWERUP_DEFS[pu.type];
        const glow = ctx.createRadialGradient(px, py, 0, px, py, puR * 2.5 * pulse);
        glow.addColorStop(0, def.color + "50");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath(); ctx.arc(px, py, puR * 2.5 * pulse, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = def.color + "BB";
        ctx.beginPath(); ctx.arc(px, py, puR * pulse, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = "#fff8";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.font = `${Math.round(puR * 1.1)}px system-ui`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(def.icon, px, py + 1);
      }

      // Draw paddle
      const drawPaddle = (nx: number, ny: number, color: string, glowColor: string, scale: number) => {
        const px = toX(nx), py = toY(ny);
        const rad = PADDLE_RADIUS * scale;

        // Outer glow
        const g = ctx.createRadialGradient(px, py, rad * 0.5, px, py, rad * 2);
        g.addColorStop(0, glowColor + "30");
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(px, py, rad * 2, 0, Math.PI * 2); ctx.fill();

        // Paddle body
        const bodyGrad = ctx.createRadialGradient(px - rad * 0.2, py - rad * 0.2, 0, px, py, rad);
        bodyGrad.addColorStop(0, color);
        bodyGrad.addColorStop(0.8, color);
        bodyGrad.addColorStop(1, glowColor + "80");
        ctx.fillStyle = bodyGrad;
        ctx.beginPath(); ctx.arc(px, py, rad, 0, Math.PI * 2); ctx.fill();

        // Neon ring
        ctx.strokeStyle = glowColor;
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(px, py, rad, 0, Math.PI * 2); ctx.stroke();

        // Inner circle
        ctx.strokeStyle = glowColor + "60";
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(px, py, rad * 0.4, 0, Math.PI * 2); ctx.stroke();

        // Highlight
        ctx.fillStyle = "rgba(255,255,255,0.15)";
        ctx.beginPath(); ctx.arc(px - rad * 0.2, py - rad * 0.2, rad * 0.35, 0, Math.PI * 2); ctx.fill();
      };

      // Player paddle (bottom, cyan)
      drawPaddle(game.playerX, game.playerY, "#0A2A40", "#00D4FF", game.playerPaddleScale);
      // AI paddle (top, pink)
      drawPaddle(game.aiX, game.aiY, "#400A2A", "#FF2D78", game.aiPaddleScale);

      // Pucks
      if (!game.gameOver) {
        for (const puck of game.pucks) {
          const bx = toX(puck.x), by = toY(puck.y);

          // Trail
          if (puck.speed > 0.003) {
            ctx.strokeStyle = "rgba(255,255,255,0.15)";
            ctx.lineWidth = PUCK_RADIUS * 1.5;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(bx - puck.vx * rW * 4, by - puck.vy * rH * 4);
            ctx.lineTo(bx, by);
            ctx.stroke();
            ctx.lineCap = "butt";
          }

          // Puck glow
          const pg = ctx.createRadialGradient(bx, by, 0, bx, by, PUCK_RADIUS * 2);
          pg.addColorStop(0, "rgba(255,255,255,0.12)");
          pg.addColorStop(1, "transparent");
          ctx.fillStyle = pg;
          ctx.beginPath(); ctx.arc(bx, by, PUCK_RADIUS * 2, 0, Math.PI * 2); ctx.fill();

          // Puck body
          const pGrad = ctx.createRadialGradient(bx - 2, by - 2, 0, bx, by, PUCK_RADIUS);
          pGrad.addColorStop(0, "#FFFFFF");
          pGrad.addColorStop(0.6, "#E0E0E0");
          pGrad.addColorStop(1, "#999");
          ctx.fillStyle = pGrad;
          ctx.beginPath(); ctx.arc(bx, by, PUCK_RADIUS, 0, Math.PI * 2); ctx.fill();

          // Puck ring
          ctx.strokeStyle = "#fff8";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Highlight
          ctx.fillStyle = "rgba(255,255,255,0.5)";
          ctx.beginPath(); ctx.arc(bx - 3, by - 3, PUCK_RADIUS * 0.3, 0, Math.PI * 2); ctx.fill();
        }
      }

      // Score display
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Player score (bottom right)
      ctx.font = `bold ${Math.round(Math.min(24, rW * 0.07))}px system-ui`;
      ctx.fillStyle = "#00D4FF";
      ctx.fillText(String(playerScoreRef.current), rR + (w - rR) / 2, toY(0.65));
      ctx.font = `${Math.round(Math.min(10, rW * 0.03))}px system-ui`;
      ctx.fillStyle = "#00D4FF60";
      ctx.fillText(t.you, rR + (w - rR) / 2, toY(0.65) + 18);

      // AI score (top left)
      ctx.font = `bold ${Math.round(Math.min(24, rW * 0.07))}px system-ui`;
      ctx.fillStyle = "#FF2D78";
      ctx.fillText(String(aiScoreRef.current), rL / 2, toY(0.35));
      ctx.font = `${Math.round(Math.min(10, rW * 0.03))}px system-ui`;
      ctx.fillStyle = "#FF2D7860";
      ctx.fillText(isMultiplayer ? opponentName : t.ai, rL / 2, toY(0.35) + 18);

      // Active powerup indicator
      if (game.activePowerup) {
        const pu = game.activePowerup;
        const def = POWERUP_DEFS[pu.type];
        const elapsed = Date.now() - pu.activatedAt;
        const remaining = Math.max(0, Math.ceil((pu.duration - elapsed) / 1000));
        const progress = Math.max(0, 1 - elapsed / pu.duration);
        const barW = 100, barH = 5;
        const barX = w / 2 - barW / 2, barY = rT - 28;
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.beginPath(); ctx.roundRect(barX - 24, barY - 10, barW + 48, 26, 10); ctx.fill();
        ctx.font = "12px system-ui"; ctx.fillStyle = def.color;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(`${def.icon} ${remaining}s`, w / 2, barY);
        ctx.fillStyle = "rgba(255,255,255,0.15)";
        ctx.beginPath(); ctx.roundRect(barX, barY + 7, barW, barH, 2); ctx.fill();
        ctx.fillStyle = def.color;
        ctx.beginPath(); ctx.roundRect(barX, barY + 7, barW * progress, barH, 2); ctx.fill();
      }

      // Flash text
      if (game.puFlash) {
        const age = Date.now() - game.puFlash.time;
        if (age < 1200) {
          const alpha = age < 200 ? age / 200 : Math.max(0, 1 - (age - 200) / 1000);
          ctx.save(); ctx.globalAlpha = alpha;
          ctx.font = `bold ${Math.round(Math.min(rW * 0.08, 26))}px system-ui`;
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          ctx.fillStyle = game.puFlash.color;
          ctx.shadowColor = game.puFlash.color; ctx.shadowBlur = 15;
          ctx.fillText(game.puFlash.text, w / 2, toY(0.5));
          ctx.shadowBlur = 0; ctx.restore();
        } else game.puFlash = null;
      }

      // Goal flash
      if (game.goalFlash) {
        const age = Date.now() - game.goalFlash.time;
        if (age < 600) {
          const alpha = Math.max(0, 1 - age / 600);
          const color = game.goalFlash.who === "player" ? "#00D4FF" : "#FF2D78";
          ctx.save(); ctx.globalAlpha = alpha * 0.3;
          ctx.fillStyle = color;
          ctx.fillRect(rL, rT, rW, rH);
          ctx.restore();

          ctx.save(); ctx.globalAlpha = alpha;
          ctx.font = `bold ${Math.round(Math.min(rW * 0.14, 40))}px system-ui`;
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          ctx.fillStyle = "#fff";
          ctx.shadowColor = color; ctx.shadowBlur = 20;
          ctx.fillText("GOAL!", w / 2, toY(0.5));
          ctx.shadowBlur = 0; ctx.restore();
        } else game.goalFlash = null;
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      canvas.removeEventListener("pointermove", handlePointer);
      canvas.removeEventListener("pointerdown", handlePointer);
      canvas.removeEventListener("touchmove", handlePointer as EventListener);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("resize", resize);
    };
  }, [screen, difficulty, handleGameEnd, isMultiplayer, playerNum]);

  // Render
  const ps = playerScore, as_ = aiScore;
  return (
    <div className="min-h-[100dvh] flex flex-col relative overflow-hidden bg-[#0A0A1A]">
      {screen !== "playing" && screen !== "multi-waiting" && screen !== "multi-result" && (
        <div className="flex items-center justify-between px-4 py-3 relative z-10">
          <Link href="/" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors">
            <ChevronLeft size={16} />
          </Link>
          <h1 className="text-white/80 font-bold text-sm">{t.title}</h1>
          <div className="w-8" />
        </div>
      )}

      <AnimatePresence>
        {/* Menu */}
        {screen === "menu" && !isMultiplayer && (
          <motion.div key="menu" className="flex-1 flex flex-col items-center justify-center gap-6 px-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <motion.div className="w-32 h-32 relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <AvatarCompanion mood={avatarMood} fixed={false} gender={gender} activeSkin={activeSkin}
                activeFace={activeFace} activeTop={activeTop} activeBottom={activeBottom}
                activeShoe={activeShoe} activeCape={activeCape} activeGlasses={activeGlasses}
                activeGloves={activeGloves} activeHat={activeHat} passThrough={true} />
            </motion.div>
            <div className="text-center">
              <h2 className="text-2xl font-black text-white">{t.title}</h2>
              <p className="text-white/40 text-xs mt-1">{t.firstTo}</p>
            </div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-wider">{t.selectDifficulty}</p>
            <div className="flex flex-col gap-3 w-full max-w-xs">
              {(["easy", "medium", "hard"] as Difficulty[]).map((d) => {
                const c = { easy: "text-neon-green border-neon-green/40 bg-neon-green/10",
                  medium: "text-neon-blue border-neon-blue/40 bg-neon-blue/10",
                  hard: "text-neon-pink border-neon-pink/40 bg-neon-pink/10" }[d];
                return (
                  <motion.button key={d} onClick={() => startGame(d)}
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-xl border font-bold text-sm ${c}`}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Play size={16} />{t[d]}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Playing */}
        {screen === "playing" && (
          <motion.div key="playing" className="fixed inset-0 z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 touch-none">
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ touchAction: "none" }} />
              <button onClick={() => { if (isMultiplayer) setShowExitConfirm(true); else { setAvatarMood("idle"); setScreen("menu"); } }}
                className="absolute top-2 right-2 z-10 px-3 py-1.5 rounded-lg bg-white/10 text-white/70 font-bold text-xs backdrop-blur-sm hover:bg-white/20 transition-colors">
                {lang === "hu" ? "VÉGE" : lang === "de" ? "ENDE" : lang === "ro" ? "SFÂRȘIT" : "END"}
              </button>
              {isMultiplayer && (
                <div className="absolute top-2 left-2 z-10 px-2 py-1 rounded-lg bg-neon-pink/20 text-neon-pink font-bold text-xs">
                  vs {opponentName}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Multi-waiting */}
        {screen === "multi-waiting" && (
          <motion.div key="mw" className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm gap-5 px-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div className="text-3xl font-black text-neon-blue">{playerScoreRef.current} – {aiScoreRef.current}</motion.div>
            {isMix && <span className="text-white/60 text-xs font-bold uppercase">Round {mixround} ✓</span>}
            <motion.div className="w-10 h-10 border-2 border-neon-blue border-t-transparent rounded-full"
              animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
            <span className="text-white/60 text-sm font-medium text-center">{t.waitingOpp} {opponentName}...</span>
          </motion.div>
        )}

        {/* Multi-result */}
        {screen === "multi-result" && oppFinalScore !== null && (
          <MultiplayerResult myScore={myFinalScore !== null ? myFinalScore : ps} oppScore={oppFinalScore}
            myName={getUsername() || "???"} oppName={opponentName}
            onContinue={() => router.push("/multiplayer")} />
        )}

        {/* Reward */}
        {screen === "reward" && earnedCard && (
          <motion.div key="reward" className="flex-1">
            <RewardReveal rarity={earnedCard} game="airhockey" score={ps} total={WIN_SCORE}
              onDone={() => setScreen("result")} />
          </motion.div>
        )}

        {/* Result */}
        {screen === "result" && (
          <motion.div key="result" className="flex-1 flex flex-col items-center justify-center gap-5 px-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <motion.div className="w-28 h-28 relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <AvatarCompanion mood={avatarMood} fixed={false} gender={gender} activeSkin={activeSkin}
                activeFace={activeFace} activeTop={activeTop} activeBottom={activeBottom}
                activeShoe={activeShoe} activeCape={activeCape} activeGlasses={activeGlasses}
                activeGloves={activeGloves} activeHat={activeHat} passThrough={true} />
            </motion.div>
            <motion.div className={`text-3xl font-black ${ps > as_ ? "text-neon-green" : "text-neon-pink"}`}
              initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              {ps > as_ ? t.won : t.lost}
            </motion.div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-white/40 text-xs">{t.you}</span>
                <span className="text-2xl font-black text-neon-blue">{ps}</span>
              </div>
              <span className="text-white/20 text-sm font-bold">—</span>
              <div className="flex flex-col items-center">
                <span className="text-white/40 text-xs">{t.ai}</span>
                <span className="text-2xl font-black text-neon-pink">{as_}</span>
              </div>
            </div>
            {earnedCard && (
              <div className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                earnedCard === "legendary" ? "bg-yellow-500/20 text-yellow-400" :
                earnedCard === "gold" ? "bg-yellow-400/20 text-yellow-300" :
                earnedCard === "silver" ? "bg-gray-400/20 text-gray-300" :
                "bg-amber-700/20 text-amber-400"
              }`}>{earnedCard.toUpperCase()} card</div>
            )}
            <div className="flex flex-col gap-2 w-full max-w-xs mt-2">
              <motion.button onClick={() => startGame(difficulty)}
                className="py-3 rounded-xl bg-neon-green/15 border border-neon-green/40 text-neon-green font-bold text-sm"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>{t.playAgain}</motion.button>
              <Link href="/" className="py-3 rounded-xl bg-white/5 border border-white/10 text-white/50 font-bold text-sm text-center">{t.back}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {milestones.length > 0 && <MilestonePopup />}
      {isMultiplayer && matchId && (
        <>
          <MultiplayerExitConfirm open={showExitConfirm} onStay={() => setShowExitConfirm(false)}
            onLeave={() => { abandonMatch(matchId); router.push("/multiplayer"); }} />
          {screen === "playing" && <MultiplayerAbandonNotice matchId={matchId} opponentName={opponentName} />}
        </>
      )}
    </div>
  );
}
