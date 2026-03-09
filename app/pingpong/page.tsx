"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Play, Trophy, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { getSpecialCardCount } from "@/lib/specialCards";
import { incrementTotalGames, incrementPerfectScores, updateStats, checkNewMilestones, getStats } from "@/lib/milestones";
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
    title: "Table Tennis",
    subtitle: "Beat the AI in ping pong!",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    score: "Score",
    you: "You",
    ai: "AI",
    won: "You Won!",
    lost: "You Lost!",
    playAgain: "Play Again",
    back: "Back",
    serving: "Serving...",
    matchPoint: "Match Point!",
    deuce: "Deuce!",
    selectDifficulty: "Select Difficulty",
    firstTo: "First to 11 points",
    waitingOpp: "Waiting for",
  },
  hu: {
    title: "Asztalitenisz",
    subtitle: "Győzd le az AI-t pingpongban!",
    easy: "Könnyű",
    medium: "Közepes",
    hard: "Nehéz",
    score: "Pont",
    you: "Te",
    ai: "AI",
    won: "Győztél!",
    lost: "Vesztettél!",
    playAgain: "Újra",
    back: "Vissza",
    serving: "Szervál...",
    matchPoint: "Meccslabda!",
    deuce: "Egyenlítés!",
    selectDifficulty: "Válassz nehézséget",
    firstTo: "Először 11 pontig",
    waitingOpp: "Várakozás",
  },
  de: {
    title: "Tischtennis",
    subtitle: "Besiege die KI im Ping Pong!",
    easy: "Leicht",
    medium: "Mittel",
    hard: "Schwer",
    score: "Punkte",
    you: "Du",
    ai: "KI",
    won: "Gewonnen!",
    lost: "Verloren!",
    playAgain: "Nochmal",
    back: "Zurück",
    serving: "Aufschlag...",
    matchPoint: "Matchball!",
    deuce: "Einstand!",
    selectDifficulty: "Schwierigkeit wählen",
    firstTo: "Erster bis 11 Punkte",
    waitingOpp: "Warte auf",
  },
  ro: {
    title: "Tenis de masă",
    subtitle: "Învinege AI-ul la ping pong!",
    easy: "Ușor",
    medium: "Mediu",
    hard: "Greu",
    score: "Scor",
    you: "Tu",
    ai: "AI",
    won: "Ai câștigat!",
    lost: "Ai pierdut!",
    playAgain: "Din nou",
    back: "Înapoi",
    serving: "Servește...",
    matchPoint: "Minge de meci!",
    deuce: "Egalitate!",
    selectDifficulty: "Alege dificultatea",
    firstTo: "Primul la 11 puncte",
    waitingOpp: "Se așteaptă",
  },
};

// ─── Game Constants ──────────────────────────────────────────
const WIN_SCORE = 11;
const BALL_RADIUS = 13;
const SERVE_DELAY = 800;
const GRAVITY = 0.0007;
const VZ_SERVE = 0.013;
const BOUNCE_DAMP = 0.62;
const PLAYER_Y_MIN = 0.55;
const PLAYER_Y_MAX = 0.95;
const AI_Y_MIN = 0.05;
const AI_Y_MAX = 0.45;
const PLAYER_Y_DEFAULT = 0.88;
const AI_Y_DEFAULT = 0.12;

// AI difficulty settings
const AI_CONFIG = {
  easy: { speed: 0.025, reactionDelay: 0.15, errorRange: 0.15, predictError: 40 },
  medium: { speed: 0.045, reactionDelay: 0.08, errorRange: 0.08, predictError: 20 },
  hard: { speed: 0.07, reactionDelay: 0.03, errorRange: 0.03, predictError: 8 },
};

// ─── Powerup System ──────────────────────────────────────────
type PowerupType = "speed" | "double" | "bigpaddle" | "curve";

interface Powerup {
  type: PowerupType;
  x: number; // 0..1 normalized
  y: number;
  spawnTime: number;
  active: boolean;
  activatedBy: "player" | "ai" | null;
  duration: number; // ms
  activatedAt: number;
}

const POWERUP_DEFS: Record<PowerupType, { icon: string; label: string; color: string; duration: number }> = {
  speed: { icon: "⚡", label: "SPEED BALL!", color: "#FFD700", duration: 6000 },
  double: { icon: "💥", label: "DOUBLE BALL!", color: "#FF4444", duration: 8000 },
  bigpaddle: { icon: "🧲", label: "BIG PADDLE!", color: "#44AAFF", duration: 7000 },
  curve: { icon: "🌀", label: "CURVE BALL!", color: "#AA44FF", duration: 6000 },
};

const POWERUP_SPAWN_MIN = 12000; // 12s
const POWERUP_SPAWN_MAX = 20000; // 20s

type Difficulty = "easy" | "medium" | "hard";
type Screen = "menu" | "playing" | "reward" | "result" | "multi-waiting" | "multi-result";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  color: string;
}

interface Ball {
  x: number; y: number;
  vx: number; vy: number;
  speed: number;
  curveForce: number; // for curve powerup
  z: number;          // height above table (0 = on table)
  vz: number;         // vertical velocity upward
  lastHitter: "player" | "ai" | null;
  lastBounceSide: "player" | "ai" | null; // which half last bounced (for double-bounce rule)
}

// ─── Main Component ──────────────────────────────────────────
export default function PingPongPageWrapper() {
  return <Suspense><PingPongPage /></Suspense>;
}

function PingPongPage() {
  const { lang } = useLang();
  const t = (T[lang] || T.en) as typeof T.en;
  const router = useRouter();
  const searchParams = useSearchParams();

  // Multiplayer params
  const matchId = searchParams.get("match");
  const playerNum = searchParams.get("p");
  const opponentName = searchParams.get("vs") || "???";
  const mixround = searchParams.get("mixround");
  const isMultiplayer = !!matchId;
  const isMix = !!mixround;

  // Screen state
  const [screen, setScreen] = useState<Screen>("menu");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [milestones, setMilestones] = useState<string[]>([]);
  const [avatarMood, setAvatarMood] = useState<"idle" | "happy" | "victory" | "disappointed">("idle");

  // Multiplayer state
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);
  const [myFinalScore, setMyFinalScore] = useState<number | null>(null);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const broadcastChannelRef = useRef<RealtimeChannel | null>(null);
  const oppPaddleXRef = useRef(0.5);
  const oppPaddleYRef = useRef(AI_Y_DEFAULT);
  const scoreSubmittedRef = useRef(false);

  // Canvas ref
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<GameState | null>(null);
  const animFrameRef = useRef<number>(0);
  const playerScoreRef = useRef(0);
  const aiScoreRef = useRef(0);

  // Avatar state
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

  // ─── Streak ──────────────────────────────────────────────
  const getStreak = useCallback(() => {
    try {
      const raw = localStorage.getItem("pingpong_streak");
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
      const raw = localStorage.getItem("pingpong_streak");
      if (raw) {
        const { count, lastDate } = JSON.parse(raw);
        if (lastDate === today) return count;
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        const newCount = lastDate === yesterday ? count + 1 : 1;
        localStorage.setItem("pingpong_streak", JSON.stringify({ count: newCount, lastDate: today }));
        return newCount;
      }
    } catch {}
    localStorage.setItem("pingpong_streak", JSON.stringify({ count: 1, lastDate: today }));
    return 1;
  }, []);

  // ─── Start Game ──────────────────────────────────────────
  const startGame = useCallback((diff: Difficulty) => {
    setDifficulty(diff);
    setPlayerScore(0);
    setAiScore(0);
    playerScoreRef.current = 0;
    aiScoreRef.current = 0;
    setAvatarMood("idle");
    setScoreSubmitted(false);
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

  // ─── Multiplayer broadcast channel ──────────────────────
  useEffect(() => {
    if (!isMultiplayer || !matchId) return;

    const channel = supabase.channel(`pingpong-${matchId}`, {
      config: { broadcast: { self: false } },
    });

    channel.on("broadcast", { event: "paddlePos" }, (payload) => {
      if (payload.payload.p !== playerNum) {
        oppPaddleXRef.current = payload.payload.x;
        // Flip Y: opponent's bottom (y≈0.88) → our top (y≈0.12)
        if (payload.payload.y !== undefined) {
          oppPaddleYRef.current = 1 - payload.payload.y;
        }
      }
    });

    // P2 receives authoritative ball state from P1
    let gameOverHandled = false;
    channel.on("broadcast", { event: "ballSync" }, (payload) => {
      if (playerNum !== "1" && gameRef.current) {
        const game = gameRef.current;
        const { balls, ps1, ps2, serving, ripples } = payload.payload;
        // Apply ball positions with y-flip for P2's mirrored perspective
        if (balls?.length > 0) {
          game.balls = (balls as {x:number,y:number,vx:number,vy:number,z:number,vz:number}[]).map(b => ({
            x: b.x, y: 1 - b.y, vx: b.vx, vy: -b.vy, z: b.z, vz: b.vz,
            speed: 0, curveForce: 0, lastHitter: null, lastBounceSide: null,
          }));
        }
        if (typeof serving === "boolean") game.serving = serving;
        // P2 displays ps2 as their score, ps1 as opponent
        if (ps1 !== undefined && ps2 !== undefined) {
          playerScoreRef.current = ps2;
          aiScoreRef.current = ps1;
          setPlayerScore(ps2);
          setAiScore(ps1);
        }
        // Ripples from P1 (y-flipped)
        if (ripples?.length > 0) {
          for (const r of (ripples as {x:number,y:number}[])) {
            game.bounceRipples.push({ x: r.x, y: 1 - r.y, age: 0 });
          }
        }
      }
    });

    // P2 receives game-over signal from P1 — skip waiting screen entirely
    channel.on("broadcast", { event: "gameOver" }, (payload) => {
      if (playerNum !== "1" && !gameOverHandled) {
        gameOverHandled = true;
        const { p1score, p2score } = payload.payload as {p1score:number, p2score:number};
        if (gameRef.current) gameRef.current.gameOver = true;
        if (matchId && !scoreSubmittedRef.current) {
          scoreSubmittedRef.current = true;
          submitScore(matchId, p2score, false);
        }
        setMyFinalScore(p2score);
        setOppFinalScore(p1score);
        setScreen("multi-result");
      }
    });

    channel.subscribe();
    broadcastChannelRef.current = channel;

    return () => {
      channel.unsubscribe();
      broadcastChannelRef.current = null;
    };
  }, [isMultiplayer, matchId, playerNum]);

  // ─── Multiplayer polling (multi-waiting) ────────────────
  useEffect(() => {
    if (screen !== "multi-waiting" || !isMultiplayer || !matchId) return;
    const isP1 = playerNum === "1";

    const checkMatch = async () => {
      if (isMix) {
        const result = await pollMixRound(matchId, parseInt(mixround || "1"), isP1, opponentName);
        if (result.action === "finished") {
          setMyFinalScore(result.myWins);
          setOppFinalScore(result.oppWins);
          setScreen("multi-result");
          return true;
        }
        if (result.action === "next") { router.push(result.url); return true; }
        return false;
      } else {
        const { data } = await supabase.from("multiplayer_matches").select("*").eq("id", matchId).single();
        if (!data) return false;
        const oppDone = isP1 ? data.player2_done : data.player1_done;
        const oppScore = isP1 ? data.player2_score : data.player1_score;
        if (oppDone && oppScore !== null) {
          setOppFinalScore(oppScore);
          setScreen("multi-result");
          return true;
        }
        return false;
      }
    };

    checkMatch();
    const interval = setInterval(async () => {
      if (await checkMatch()) clearInterval(interval);
    }, 2000);
    return () => clearInterval(interval);
  }, [screen, isMultiplayer, matchId, isMix, playerNum, router, opponentName, mixround]);

  // ─── Handle Win ──────────────────────────────────────────
  const handleGameEnd = useCallback((won: boolean, myScore: number, oppScore: number) => {
    // Multiplayer (P1 only — P2 receives gameOver broadcast)
    if (isMultiplayer && matchId && playerNum === "1" && !scoreSubmitted) {
      setScoreSubmitted(true);
      scoreSubmittedRef.current = true;
      // Submit P1's score to Supabase (fire-and-forget)
      submitScore(matchId, myScore, true);
      // Broadcast final scores to P2 so they can show result immediately
      broadcastChannelRef.current?.send({
        type: "broadcast",
        event: "gameOver",
        payload: { p1score: myScore, p2score: oppScore },
      });
      // Save card
      if (won) {
        const streak = updateStreak();
        const rarity = calculateRarity(myScore, WIN_SCORE, streak, false);
        saveCard({ id: generateCardId(), game: "pingpong", rarity, score: myScore, total: WIN_SCORE, date: new Date().toISOString() });
        window.dispatchEvent(new Event("plizio-cards-changed"));
        setEarnedCard(rarity);
      }
      incrementTotalGames();
      if (oppScore === 0) incrementPerfectScores();
      const newMs = checkNewMilestones();
      if (newMs.length > 0) setMilestones(newMs.map(m => m.id));
      setMyFinalScore(myScore);
      setOppFinalScore(oppScore);
      setAvatarMood(won ? "victory" : "disappointed");
      setScreen("multi-result"); // direct result, no waiting
      return;
    }

    // Solo mode
    if (won) {
      const streak = updateStreak();
      const rarity = calculateRarity(myScore, WIN_SCORE, streak, false);
      saveCard({
        id: generateCardId(),
        game: "pingpong",
        rarity,
        score: myScore,
        total: WIN_SCORE,
        date: new Date().toISOString(),
      });
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

    // Resize canvas
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

    // ─── Table layout ───
    const tbl = () => {
      const w = W(), h = H();
      const maxTH = h * 0.70;
      const maxTW = w * 0.74;
      let tW = maxTW;
      let tH = maxTH;
      if (tW > tH * 0.56) tW = tH * 0.56;
      if (tH > tW / 0.56) tH = tW / 0.56;
      const tL = (w - tW) / 2;
      const tT = (h - tH) / 2;
      const tR = tL + tW;
      const tB = tT + tH;
      return { tL, tR, tT, tB, tW, tH, w, h };
    };

    // Game state
    const game: GameState = {
      playerX: 0.5,
      playerY: PLAYER_Y_DEFAULT,
      aiX: 0.5,
      aiY: AI_Y_DEFAULT,
      aiTargetX: 0.5,
      aiTargetY: AI_Y_DEFAULT,
      balls: [{ x: 0.5, y: 0.5, vx: 0, vy: 0, speed: 0, curveForce: 0, z: 0, vz: 0, lastHitter: null, lastBounceSide: null }],
      serving: true,
      serveTimer: 0,
      playerServes: true,
      rallyCount: 0,
      particles: [],
      gameOver: false,
      lastHitTime: 0,
      bounceRipples: [],
      // Powerup state
      powerup: null,
      activePowerup: null,
      nextPowerupTime: Date.now() + POWERUP_SPAWN_MIN + Math.random() * (POWERUP_SPAWN_MAX - POWERUP_SPAWN_MIN),
      playerPaddleScale: 1,
      aiPaddleScale: 1,
      powerupFlash: null,
    };
    gameRef.current = game;

    const PADDLE_R = 0.045;

    // Reset ball for serve
    const resetBall = (playerServes: boolean) => {
      game.balls = [{ x: 0.5, y: playerServes ? 0.78 : 0.22, vx: 0, vy: 0, speed: 0, curveForce: 0, z: 0, vz: 0, lastHitter: null, lastBounceSide: null }];
      game.serving = true;
      game.serveTimer = Date.now();
      game.playerServes = playerServes;
      game.rallyCount = 0;
    };

    const launchBall = () => {
      const baseSpeed = 0.009 + (difficulty === "hard" ? 0.003 : difficulty === "medium" ? 0.0015 : 0);
      const ball = game.balls[0];
      ball.speed = baseSpeed;
      const angle = (Math.random() - 0.5) * 0.6;
      ball.vx = Math.sin(angle) * ball.speed;
      ball.vy = game.playerServes ? -ball.speed * Math.cos(angle) : ball.speed * Math.cos(angle);
      ball.vz = VZ_SERVE;
      ball.z = 0;
      game.serving = false;
    };

    // Score point
    const scorePoint = (playerScored: boolean) => {
      if (game.gameOver) return;

      if (playerScored) {
        playerScoreRef.current++;
        setPlayerScore(playerScoreRef.current);
      } else {
        aiScoreRef.current++;
        setAiScore(aiScoreRef.current);
      }

      // Broadcast score in multiplayer
      if (isMultiplayer && broadcastChannelRef.current) {
        broadcastChannelRef.current.send({
          type: "broadcast",
          event: "scored",
          payload: { p: playerNum, ps: playerScoreRef.current, as: aiScoreRef.current },
        });
      }

      // Clear powerup on score
      game.powerup = null;
      game.activePowerup = null;
      game.playerPaddleScale = 1;
      game.aiPaddleScale = 1;

      const ps = playerScoreRef.current;
      const as_ = aiScoreRef.current;

      const deuceRule = ps >= 10 && as_ >= 10;
      if ((ps >= WIN_SCORE || as_ >= WIN_SCORE) && (!deuceRule || Math.abs(ps - as_) >= 2)) {
        game.gameOver = true;
        setTimeout(() => handleGameEnd(ps > as_, ps, as_), 600);
        return;
      }

      resetBall(!playerScored);
    };

    // ─── Powerup spawning ────────────────────────────────
    const spawnPowerup = () => {
      const types: PowerupType[] = ["speed", "double", "bigpaddle", "curve"];
      const type = types[Math.floor(Math.random() * types.length)];
      game.powerup = {
        type,
        x: 0.2 + Math.random() * 0.6,
        y: 0.3 + Math.random() * 0.4,
        spawnTime: Date.now(),
        active: false,
        activatedBy: null,
        duration: POWERUP_DEFS[type].duration,
        activatedAt: 0,
      };
    };

    const activatePowerup = (pu: Powerup, hitBy: "player" | "ai") => {
      pu.active = true;
      pu.activatedBy = hitBy;
      pu.activatedAt = Date.now();
      game.activePowerup = pu;
      game.powerup = null;
      game.powerupFlash = { text: POWERUP_DEFS[pu.type].label, color: POWERUP_DEFS[pu.type].color, time: Date.now() };

      // Apply effects
      if (pu.type === "speed") {
        for (const ball of game.balls) {
          ball.speed = Math.min(ball.speed * 1.6, 0.022);
          const dir = Math.atan2(ball.vy, ball.vx);
          ball.vx = Math.cos(dir) * ball.speed;
          ball.vy = Math.sin(dir) * ball.speed;
        }
      } else if (pu.type === "double" && game.balls.length === 1) {
        const b = game.balls[0];
        game.balls.push({
          x: b.x,
          y: b.y,
          vx: -b.vx,
          vy: b.vy,
          speed: b.speed,
          curveForce: 0,
          z: b.z,
          vz: b.vz,
          lastHitter: b.lastHitter,
          lastBounceSide: null,
        });
      } else if (pu.type === "bigpaddle") {
        if (hitBy === "player") game.playerPaddleScale = 1.8;
        else game.aiPaddleScale = 1.8;
      } else if (pu.type === "curve") {
        for (const ball of game.balls) {
          ball.curveForce = (Math.random() > 0.5 ? 1 : -1) * 0.0003;
        }
      }
    };

    // Player input
    let playerTargetX = 0.5;
    let playerTargetY = PLAYER_Y_DEFAULT;
    const handlePointer = (e: PointerEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0]?.clientX ?? 0 : (e as PointerEvent).clientX;
      const clientY = "touches" in e ? e.touches[0]?.clientY ?? 0 : (e as PointerEvent).clientY;
      const { tL, tW, tT, tH } = tbl();
      const canvasX = (clientX - rect.left) / rect.width * W();
      const canvasY = (clientY - rect.top) / rect.height * H();
      playerTargetX = Math.max(PADDLE_R + 0.01, Math.min(1 - PADDLE_R - 0.01, (canvasX - tL) / tW));
      const rawY = (canvasY - tT) / tH;
      playerTargetY = Math.max(PLAYER_Y_MIN, Math.min(PLAYER_Y_MAX, rawY));
    };
    const handlePointerDown = (e: PointerEvent | TouchEvent) => {
      handlePointer(e);
      // Tap to serve — only for solo or P1 in multiplayer
      if (game.serving && game.playerServes && (!isMultiplayer || playerNum === "1")) launchBall();
    };
    canvas.addEventListener("pointermove", handlePointer);
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("touchstart", handlePointerDown as EventListener, { passive: true });
    canvas.addEventListener("touchmove", handlePointer as EventListener, { passive: true });

    // Keyboard
    const keys = new Set<string>();
    const handleKeyDown = (e: KeyboardEvent) => { keys.add(e.key); };
    const handleKeyUp = (e: KeyboardEvent) => { keys.delete(e.key); };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Multiplayer: broadcast paddle position + ball state
    let broadcastTimer = 0;
    let newRipplesSinceLast: {x:number,y:number}[] = [];

    // Initial serve
    resetBall(true);

    // ─── Game loop ─────────────────────────────────────────
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - lastTime) / 16.67, 3);
      lastTime = now;

      const { tL, tR, tT, tB, tW, tH, w, h } = tbl();
      // Pixel-space paddle radius (matches visual render) — used for both serve and collision
      const paddlePxR = Math.max(18, Math.min(30, tW * 0.07));

      // Keyboard
      if (keys.has("ArrowLeft") || keys.has("a")) playerTargetX = Math.max(PADDLE_R + 0.01, playerTargetX - 0.02 * dt);
      if (keys.has("ArrowRight") || keys.has("d")) playerTargetX = Math.min(1 - PADDLE_R - 0.01, playerTargetX + 0.02 * dt);
      if (keys.has("ArrowUp") || keys.has("w")) playerTargetY = Math.max(PLAYER_Y_MIN, playerTargetY - 0.015 * dt);
      if (keys.has("ArrowDown") || keys.has("s")) playerTargetY = Math.min(PLAYER_Y_MAX, playerTargetY + 0.015 * dt);
      // Space/Enter to serve
      if ((keys.has(" ") || keys.has("Enter")) && game.serving && game.playerServes) { launchBall(); keys.delete(" "); keys.delete("Enter"); }

      // Smooth player paddle
      game.playerX += (playerTargetX - game.playerX) * Math.min(1, 0.25 * dt);
      game.playerX = Math.max(PADDLE_R + 0.01, Math.min(1 - PADDLE_R - 0.01, game.playerX));
      game.playerY += (playerTargetY - game.playerY) * Math.min(1, 0.25 * dt);
      game.playerY = Math.max(PLAYER_Y_MIN, Math.min(PLAYER_Y_MAX, game.playerY));

      // AI logic (solo) or opponent paddle (multi)
      if (isMultiplayer) {
        // In multiplayer, AI side is controlled by opponent
        game.aiX += (oppPaddleXRef.current - game.aiX) * Math.min(1, 0.3 * dt);
        game.aiY += (oppPaddleYRef.current - game.aiY) * Math.min(1, 0.3 * dt);
        game.aiY = Math.max(AI_Y_MIN, Math.min(AI_Y_MAX, game.aiY));
      } else {
        if (!game.serving || !game.playerServes) {
          const predictedX = game.balls[0].vy < 0
            ? game.balls[0].x + game.balls[0].vx * ((game.balls[0].y - game.aiY) / Math.max(0.001, -game.balls[0].vy))
              + (Math.random() - 0.5) * ai.predictError / tW
            : game.balls[0].x;
          const targetX = Math.max(PADDLE_R + 0.01, Math.min(1 - PADDLE_R - 0.01, predictedX + (Math.random() - 0.5) * ai.errorRange));
          game.aiTargetX += (targetX - game.aiTargetX) * ai.reactionDelay * dt;
          game.aiX += (game.aiTargetX - game.aiX) * ai.speed * dt;
          game.aiX = Math.max(PADDLE_R + 0.01, Math.min(1 - PADDLE_R - 0.01, game.aiX));
          // Y movement: track ball Y when ball is in AI's half
          if (game.balls[0].vy < 0) {
            const targetY = Math.max(AI_Y_MIN, Math.min(AI_Y_MAX, game.balls[0].y + (Math.random() - 0.5) * ai.errorRange));
            game.aiTargetY += (targetY - game.aiTargetY) * ai.reactionDelay * dt;
          } else {
            game.aiTargetY += (AI_Y_DEFAULT - game.aiTargetY) * 0.02 * dt;
          }
          game.aiY += (game.aiTargetY - game.aiY) * ai.speed * dt;
          game.aiY = Math.max(AI_Y_MIN, Math.min(AI_Y_MAX, game.aiY));
        }
      }

      // Broadcast: paddle position (both players) + ball state (P1 only)
      if (isMultiplayer && broadcastChannelRef.current) {
        broadcastTimer += dt;
        if (broadcastTimer > 4) { // ~every 66ms
          broadcastTimer = 0;
          broadcastChannelRef.current.send({
            type: "broadcast",
            event: "paddlePos",
            payload: { p: playerNum, x: game.playerX, y: game.playerY },
          });
          // P1 is authoritative: broadcast ball state + scores to P2
          if (playerNum === "1") {
            broadcastChannelRef.current.send({
              type: "broadcast",
              event: "ballSync",
              payload: {
                balls: game.balls.map(b => ({ x: b.x, y: b.y, vx: b.vx, vy: b.vy, z: b.z, vz: b.vz })),
                ps1: playerScoreRef.current,
                ps2: aiScoreRef.current,
                serving: game.serving,
                ripples: newRipplesSinceLast,
              },
            });
            newRipplesSinceLast = [];
          }
        }
      }

      // Serve handling — P1 is authoritative; P2 just renders received ball state
      if (game.serving && !game.gameOver && (!isMultiplayer || playerNum === "1")) {
        const serveBall = game.balls[0];
        if (game.playerServes) {
          // Ball follows paddle so player sees exactly what they'll hit
          serveBall.x = game.playerX;
          serveBall.y = game.playerY - (paddlePxR * game.playerPaddleScale + BALL_RADIUS) / tH - 0.005;
          // Auto-serve fallback after 3 s (player normally taps to serve)
          if (Date.now() - game.serveTimer > 3000) launchBall();
        } else {
          // AI/opponent serve: auto-launch after short delay
          if (Date.now() - game.serveTimer > SERVE_DELAY) launchBall();
        }
      }

      // ─── Powerup management ────────────────────────────
      if (!game.gameOver && !game.serving) {
        // Spawn check
        if (!game.powerup && !game.activePowerup && Date.now() >= game.nextPowerupTime) {
          spawnPowerup();
          game.nextPowerupTime = Date.now() + POWERUP_SPAWN_MIN + Math.random() * (POWERUP_SPAWN_MAX - POWERUP_SPAWN_MIN);
        }

        // Active powerup expiry
        if (game.activePowerup && Date.now() - game.activePowerup.activatedAt > game.activePowerup.duration) {
          // Remove effects
          if (game.activePowerup.type === "speed") {
            const baseSpeed = 0.009 + (difficulty === "hard" ? 0.003 : difficulty === "medium" ? 0.0015 : 0);
            for (const ball of game.balls) {
              const dir = Math.atan2(ball.vy, ball.vx);
              ball.speed = Math.max(baseSpeed, ball.speed * 0.65);
              ball.vx = Math.cos(dir) * ball.speed;
              ball.vy = Math.sin(dir) * ball.speed;
            }
          } else if (game.activePowerup.type === "double") {
            // Remove extra balls
            if (game.balls.length > 1) game.balls.splice(1);
          } else if (game.activePowerup.type === "bigpaddle") {
            game.playerPaddleScale = 1;
            game.aiPaddleScale = 1;
          } else if (game.activePowerup.type === "curve") {
            for (const ball of game.balls) ball.curveForce = 0;
          }
          game.activePowerup = null;
        }
      }

      // Ball physics
      const ballR = BALL_RADIUS / tW;
      const ballRY = BALL_RADIUS / tH;

      // Ripple aging runs for all players (P2 receives ripples via ballSync)
      if (!game.gameOver) {
        for (const r of game.bounceRipples) r.age += dt;
        game.bounceRipples = game.bounceRipples.filter(r => r.age < 28);
      }

      // Ball physics — P1 is authoritative in multiplayer; P2 skips this entirely
      if (!game.serving && !game.gameOver && (!isMultiplayer || playerNum === "1")) {
        const ballsToRemove: number[] = [];

        for (let bi = 0; bi < game.balls.length; bi++) {
          const ball = game.balls[bi];
          ball.x += ball.vx * dt;
          ball.y += ball.vy * dt;

          // Z physics — ball height above table
          ball.vz -= GRAVITY * dt;
          ball.z += ball.vz * dt;
          if (ball.z <= 0 && ball.vz < 0) {
            ball.z = 0;
            ball.vz = Math.abs(ball.vz) * BOUNCE_DAMP;
            // Create ripple on table if ball is within table bounds
            if (ball.x >= 0 && ball.x <= 1 && ball.y >= 0 && ball.y <= 1) {
              game.bounceRipples.push({ x: ball.x, y: ball.y, age: 0 });
              if (isMultiplayer && playerNum === "1") newRipplesSinceLast.push({ x: ball.x, y: ball.y });
              // Double-bounce rule: ball bounced twice on same side → other side scores
              const bounceSide: "player" | "ai" = ball.y >= 0.5 ? "player" : "ai";
              if (ball.lastBounceSide === bounceSide) {
                // Second bounce on same side
                if (bi === 0) { scorePoint(bounceSide === "ai"); continue; }
                else { ballsToRemove.push(bi); continue; }
              }
              ball.lastBounceSide = bounceSide;
            }
          }

          // Curve effect
          if (ball.curveForce !== 0) {
            ball.vx += ball.curveForce * dt;
          }

          // Side exit — no wall bounce, ball can leave the table from the sides
          if (ball.x < -ballR || ball.x > 1 + ballR) {
            if (bi === 0) {
              // The player who last hit it loses the point (hit it wide)
              scorePoint(ball.lastHitter === "ai"); // if AI hit it out, player scores
            } else {
              ballsToRemove.push(bi);
            }
            continue;
          }

          // Player paddle collision — pixel-space distance, requires ball bounced in player half first
          {
            const dxPx = (ball.x - game.playerX) * tW;
            const dyPx = (ball.y - game.playerY) * tH;
            const distPx = Math.sqrt(dxPx * dxPx + dyPx * dyPx);
            const playerHitR = paddlePxR * game.playerPaddleScale;
            if (ball.vy > 0 && ball.lastBounceSide === "player" && distPx <= playerHitR + BALL_RADIUS) {
              const hitPos = dxPx / playerHitR;
              const angle = hitPos * 0.7;
              ball.speed = Math.min(ball.speed * 1.04, 0.022);
              ball.vx = Math.sin(angle) * ball.speed;
              ball.vy = -Math.cos(angle) * ball.speed;
              ball.y = game.playerY - (playerHitR + BALL_RADIUS) / tH;
              ball.vz = VZ_SERVE;
              ball.z = Math.max(ball.z, 0);
              ball.lastHitter = "player";
              ball.lastBounceSide = null;
              game.rallyCount++;
            }
          }

          // AI paddle collision — pixel-space distance, requires ball bounced in AI half first
          {
            const dxPx = (ball.x - game.aiX) * tW;
            const dyPx = (ball.y - game.aiY) * tH;
            const distPx = Math.sqrt(dxPx * dxPx + dyPx * dyPx);
            const aiHitR = paddlePxR * game.aiPaddleScale;
            if (ball.vy < 0 && ball.lastBounceSide === "ai" && distPx <= aiHitR + BALL_RADIUS) {
              const hitPos = dxPx / aiHitR;
              const angle = hitPos * 0.7;
              ball.speed = Math.min(ball.speed * 1.04, 0.022);
              ball.vx = Math.sin(angle) * ball.speed;
              ball.vy = Math.cos(angle) * ball.speed;
              ball.y = game.aiY + (aiHitR + BALL_RADIUS) / tH;
              ball.vz = VZ_SERVE;
              ball.z = Math.max(ball.z, 0);
              ball.lastHitter = "ai";
              ball.lastBounceSide = null;
              game.rallyCount++;
            }
          }

          // Powerup collision (ball hits powerup icon)
          if (game.powerup && !game.powerup.active) {
            const pdx = ball.x - game.powerup.x;
            const pdy = ball.y - game.powerup.y;
            const pdist = Math.sqrt(pdx * pdx + pdy * pdy);
            if (pdist < 0.04 + ballR) {
              const whoActivated = ball.y > 0.5 ? "player" : "ai";
              activatePowerup(game.powerup, whoActivated);
            }
          }

          // Score — ball exits past table ends
          if (ball.y < -0.15) {
            if (bi === 0) scorePoint(true);
            else ballsToRemove.push(bi);
          }
          if (ball.y > 1.15) {
            if (bi === 0) scorePoint(false);
            else ballsToRemove.push(bi);
          }
        }

        // Remove extra balls that went off screen
        for (let i = ballsToRemove.length - 1; i >= 0; i--) {
          game.balls.splice(ballsToRemove[i], 1);
        }
      }

      // ═══════════════════════════════════════════════════════
      //  R E N D E R
      // ═══════════════════════════════════════════════════════
      ctx.clearRect(0, 0, w, h);

      // ─── Background — warm wood texture ───
      const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
      bgGrad.addColorStop(0, "#C8A46E");
      bgGrad.addColorStop(0.5, "#D4B07A");
      bgGrad.addColorStop(1, "#BF9A62");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // Wood grain lines
      ctx.strokeStyle = "rgba(0,0,0,0.04)";
      ctx.lineWidth = 1;
      for (let i = 0; i < h; i += 12) {
        ctx.beginPath();
        ctx.moveTo(0, i + Math.sin(i * 0.05) * 3);
        ctx.lineTo(w, i + Math.sin(i * 0.05 + 2) * 3);
        ctx.stroke();
      }

      // ─── Table shadow ───
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.beginPath();
      ctx.roundRect(tL + 5, tT + 5, tW, tH, 6);
      ctx.fill();

      // ─── Table surface ───
      const tableGrad = ctx.createLinearGradient(tL, tT, tL, tB);
      tableGrad.addColorStop(0, "#1A7A28");
      tableGrad.addColorStop(0.5, "#1E8830");
      tableGrad.addColorStop(1, "#1A7A28");
      ctx.fillStyle = tableGrad;
      ctx.beginPath();
      ctx.roundRect(tL, tT, tW, tH, 6);
      ctx.fill();

      // Table border
      ctx.strokeStyle = "#0D3D12";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(tL, tT, tW, tH, 6);
      ctx.stroke();

      // White edge lines
      ctx.strokeStyle = "rgba(255,255,255,0.7)";
      ctx.lineWidth = 2;
      const inset = 6;
      ctx.strokeRect(tL + inset, tT + inset, tW - inset * 2, tH - inset * 2);

      // Center line
      ctx.strokeStyle = "rgba(255,255,255,0.6)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(tL + tW / 2, tT + inset);
      ctx.lineTo(tL + tW / 2, tB - inset);
      ctx.stroke();

      // Net
      const netY = tT + tH / 2;
      ctx.strokeStyle = "rgba(255,255,255,0.85)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(tL, netY);
      ctx.lineTo(tR, netY);
      ctx.stroke();

      // ─── Helper: norm to pixel ───
      const toX = (nx: number) => tL + nx * tW;
      const toY = (ny: number) => tT + ny * tH;

      // ─── Bounce ripples on table surface ───
      for (const ripple of game.bounceRipples) {
        const rx = toX(ripple.x);
        const ry = toY(ripple.y);
        const maxAge = 28;
        const progress = Math.min(1, ripple.age / maxAge);
        // Bright impact flash
        if (ripple.age < 7) {
          const flashAlpha = (1 - ripple.age / 7) * 0.80;
          const flashR = tW * 0.038 * (1 - ripple.age / 14);
          ctx.fillStyle = `rgba(255,255,180,${flashAlpha})`;
          ctx.beginPath();
          ctx.arc(rx, ry, flashR, 0, Math.PI * 2);
          ctx.fill();
          // Inner white dot
          ctx.fillStyle = `rgba(255,255,255,${flashAlpha * 0.7})`;
          ctx.beginPath();
          ctx.arc(rx, ry, flashR * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
        // Expanding flat ellipse ring (perspective on table)
        const ringAlpha = Math.max(0, (1 - progress) * 0.55);
        const ripR = tW * 0.14 * progress;
        ctx.strokeStyle = `rgba(255,255,200,${ringAlpha})`;
        ctx.lineWidth = Math.max(0.5, 3.5 * (1 - progress));
        ctx.beginPath();
        ctx.ellipse(rx, ry, ripR, ripR * 0.32, 0, 0, Math.PI * 2);
        ctx.stroke();
        // Second fading ring slightly behind
        if (progress > 0.2) {
          const ring2R = tW * 0.09 * progress;
          const ring2Alpha = Math.max(0, (1 - progress) * 0.25);
          ctx.strokeStyle = `rgba(255,255,255,${ring2Alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.ellipse(rx, ry, ring2R, ring2R * 0.32, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // ─── Draw Powerup Icon on table ───
      if (game.powerup && !game.powerup.active) {
        const pu = game.powerup;
        const px = toX(pu.x);
        const py = toY(pu.y);
        const puR = Math.max(14, tW * 0.04);
        const pulse = 1 + Math.sin(Date.now() * 0.005) * 0.15;
        const def = POWERUP_DEFS[pu.type];

        // Glow circle
        const glow = ctx.createRadialGradient(px, py, 0, px, py, puR * 2 * pulse);
        glow.addColorStop(0, def.color + "60");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, puR * 2 * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Icon bg circle
        ctx.fillStyle = def.color + "CC";
        ctx.beginPath();
        ctx.arc(px, py, puR * pulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Emoji
        ctx.font = `${Math.round(puR * 1.1)}px system-ui`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(def.icon, px, py + 1);
      }

      // Pixel radius for paddle
      const pxR = Math.max(18, Math.min(30, tW * 0.07));

      // ─── Draw paddle ───
      const drawPaddle = (nx: number, ny: number, headColor: string, headDark: string, handleColor: string, isBottom: boolean, scale: number) => {
        const px = toX(nx);
        const py = toY(ny);
        const r = pxR * scale;

        // Shadow
        ctx.fillStyle = "rgba(0,0,0,0.18)";
        ctx.beginPath();
        ctx.arc(px + 2, py + 2, r + 1, 0, Math.PI * 2);
        ctx.fill();

        // Handle
        const hLen = r * 0.9;
        const hW = r * 0.3;
        const hy = isBottom ? py + r * 0.5 : py - r * 0.5 - hLen;
        const handleGrad = ctx.createLinearGradient(px - hW, hy, px + hW, hy);
        handleGrad.addColorStop(0, handleColor);
        handleGrad.addColorStop(0.5, "#B09070");
        handleGrad.addColorStop(1, handleColor);
        ctx.fillStyle = handleGrad;
        ctx.beginPath();
        ctx.roundRect(px - hW, hy, hW * 2, hLen, 3);
        ctx.fill();
        ctx.strokeStyle = "rgba(0,0,0,0.2)";
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Head circle
        const headGrad = ctx.createRadialGradient(px - r * 0.25, py - r * 0.25, 0, px, py, r);
        headGrad.addColorStop(0, headColor);
        headGrad.addColorStop(0.7, headColor);
        headGrad.addColorStop(1, headDark);
        ctx.fillStyle = headGrad;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();

        // Big paddle glow
        if (scale > 1) {
          ctx.shadowColor = POWERUP_DEFS.bigpaddle.color;
          ctx.shadowBlur = 12;
        }

        ctx.strokeStyle = "#1a1a1a";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Center line texture
        ctx.strokeStyle = "rgba(0,0,0,0.08)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px, py - r * 0.5);
        ctx.lineTo(px, py + r * 0.5);
        ctx.stroke();

        // Shine
        ctx.fillStyle = "rgba(255,255,255,0.15)";
        ctx.beginPath();
        ctx.arc(px - r * 0.2, py - r * 0.2, r * 0.4, 0, Math.PI * 2);
        ctx.fill();
      };

      // Player paddle (bottom, red)
      drawPaddle(game.playerX, game.playerY, "#E02020", "#A01515", "#6B4530", true, game.playerPaddleScale);
      // AI/opponent paddle (top, blue)
      drawPaddle(game.aiX, game.aiY, "#2090D0", "#1568A0", "#6B4530", false, game.aiPaddleScale);

      // ─── Balls ───
      if (!game.gameOver) {
        for (const ball of game.balls) {
          const bx = toX(ball.x);
          const by = toY(ball.y);
          // Ball appears larger when higher (top-down: closer to camera)
          const zScale = 1 + ball.z * 1.3;
          const br = BALL_RADIUS * zScale;
          // Shadow offset grows with height
          const shadowOffX = ball.z * 22;
          const shadowOffY = ball.z * 12;
          const shadowAlpha = Math.max(0.05, 0.18 - ball.z * 0.14);

          // Ball shadow on table (offset + spread by height)
          ctx.fillStyle = `rgba(0,0,0,${shadowAlpha})`;
          ctx.beginPath();
          ctx.ellipse(
            bx + shadowOffX + 1.5,
            by + shadowOffY + 2,
            (BALL_RADIUS + 2) * (1 + ball.z * 0.6),
            (BALL_RADIUS * 0.65) * (1 + ball.z * 0.4),
            0, 0, Math.PI * 2
          );
          ctx.fill();

          // Ball body
          const ballGrad = ctx.createRadialGradient(bx - br * 0.2, by - br * 0.2, 0, bx, by, br);
          ballGrad.addColorStop(0, "#FFFFFF");
          ballGrad.addColorStop(0.75, "#F0F0F0");
          ballGrad.addColorStop(1, "#D0D0D0");
          ctx.fillStyle = ballGrad;
          ctx.beginPath();
          ctx.arc(bx, by, br, 0, Math.PI * 2);
          ctx.fill();

          // Outline
          ctx.strokeStyle = "#999";
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Shine
          ctx.fillStyle = "rgba(255,255,255,0.6)";
          ctx.beginPath();
          ctx.arc(bx - br * 0.25, by - br * 0.25, br * 0.28, 0, Math.PI * 2);
          ctx.fill();

          // Speed trail effect
          if (game.activePowerup?.type === "speed") {
            ctx.strokeStyle = "rgba(255,215,0,0.3)";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(bx - ball.vx * tW * 5, by - ball.vy * tH * 5);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }

      // ─── Score display ───
      const badgeR = Math.max(16, Math.min(24, tL * 0.45));
      const netCY = netY;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const drawBadge = (bx: number, by: number, score: number, color: string) => {
        ctx.fillStyle = "#FFF";
        ctx.shadowColor = "rgba(0,0,0,0.2)";
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.arc(bx, by, badgeR, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = "#ddd";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.font = `bold ${Math.round(badgeR * 0.85)}px system-ui, sans-serif`;
        ctx.fillText(String(score), bx, by + 1);
      };

      drawBadge(tL / 2, netCY + badgeR * 2, playerScoreRef.current, "#D42020");
      drawBadge(tR + (w - tR) / 2, netCY - badgeR * 2, aiScoreRef.current, "#2090D0");

      // ─── Active powerup indicator (top of screen) ───
      if (game.activePowerup) {
        const pu = game.activePowerup;
        const def = POWERUP_DEFS[pu.type];
        const elapsed = Date.now() - pu.activatedAt;
        const remaining = Math.max(0, Math.ceil((pu.duration - elapsed) / 1000));
        const barW = 120;
        const barH = 6;
        const barX = w / 2 - barW / 2;
        const barY = tT - 30;
        const progress = Math.max(0, 1 - elapsed / pu.duration);

        // Background
        ctx.fillStyle = "rgba(0,0,0,0.3)";
        ctx.beginPath();
        ctx.roundRect(barX - 30, barY - 12, barW + 60, 30, 12);
        ctx.fill();

        // Icon + label
        ctx.font = "13px system-ui";
        ctx.fillStyle = def.color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${def.icon} ${remaining}s`, w / 2, barY);

        // Progress bar
        ctx.fillStyle = "rgba(255,255,255,0.2)";
        ctx.beginPath();
        ctx.roundRect(barX, barY + 8, barW, barH, 3);
        ctx.fill();
        ctx.fillStyle = def.color;
        ctx.beginPath();
        ctx.roundRect(barX, barY + 8, barW * progress, barH, 3);
        ctx.fill();
      }

      // ─── Powerup activation flash text ───
      if (game.powerupFlash) {
        const flashAge = Date.now() - game.powerupFlash.time;
        if (flashAge < 1200) {
          const alpha = flashAge < 200 ? flashAge / 200 : Math.max(0, 1 - (flashAge - 200) / 1000);
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.font = `bold ${Math.round(Math.min(tW * 0.08, 28))}px system-ui`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = game.powerupFlash.color;
          ctx.shadowColor = game.powerupFlash.color;
          ctx.shadowBlur = 15;
          ctx.fillText(game.powerupFlash.text, w / 2, tT + tH / 2);
          ctx.shadowBlur = 0;
          ctx.restore();
        } else {
          game.powerupFlash = null;
        }
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      canvas.removeEventListener("pointermove", handlePointer);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("touchstart", handlePointerDown as EventListener);
      canvas.removeEventListener("touchmove", handlePointer as EventListener);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("resize", resize);
    };
  }, [screen, difficulty, handleGameEnd, isMultiplayer, playerNum]);

  // ─── Render ──────────────────────────────────────────────
  const ps = playerScore;
  const as_ = aiScore;
  const isDeuce = ps >= 10 && as_ >= 10 && ps === as_;
  const isMatchPoint = !isDeuce && ((ps === WIN_SCORE - 1 && ps > as_) || (as_ === WIN_SCORE - 1 && as_ > ps) || (ps >= 10 && as_ >= 10 && Math.abs(ps - as_) === 1));

  return (
    <div className="min-h-[100dvh] flex flex-col relative overflow-hidden bg-[#0A0A1A]">
      {/* Header — hidden during playing for max table space */}
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
        {/* ── MENU ─────────────────────────────────────── */}
        {screen === "menu" && !isMultiplayer && (
          <motion.div
            key="menu"
            className="flex-1 flex flex-col items-center justify-center gap-6 px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Avatar */}
            <motion.div className="w-32 h-32 relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <AvatarCompanion
                mood={avatarMood}
                fixed={false}
                gender={gender}
                activeSkin={activeSkin}
                activeFace={activeFace}
                activeTop={activeTop}
                activeBottom={activeBottom}
                activeShoe={activeShoe}
                activeCape={activeCape}
                activeGlasses={activeGlasses}
                activeGloves={activeGloves}
                activeHat={activeHat}
                passThrough={true}
              />
            </motion.div>

            <div className="text-center">
              <h2 className="text-2xl font-black text-white">{t.title}</h2>
              <p className="text-white/40 text-xs mt-1">{t.firstTo}</p>
            </div>

            <p className="text-white/40 text-xs font-bold uppercase tracking-wider">{t.selectDifficulty}</p>

            <div className="flex flex-col gap-3 w-full max-w-xs">
              {(["easy", "medium", "hard"] as Difficulty[]).map((d) => {
                const colors = {
                  easy: { bg: "bg-green-500/15", border: "border-green-500/40", text: "text-green-400" },
                  medium: { bg: "bg-neon-blue/15", border: "border-neon-blue/40", text: "text-neon-blue" },
                  hard: { bg: "bg-neon-pink/15", border: "border-neon-pink/40", text: "text-neon-pink" },
                };
                const c = colors[d];
                return (
                  <motion.button
                    key={d}
                    onClick={() => startGame(d)}
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-xl ${c.bg} border ${c.border} ${c.text} font-bold text-sm`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Play size={16} />
                    {t[d]}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ── PLAYING ──────────────────────────────────── */}
        {screen === "playing" && (
          <motion.div
            key="playing"
            className="fixed inset-0 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 touch-none">
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ touchAction: "none" }}
              />
              {/* Exit button */}
              <button
                onClick={() => {
                  if (isMultiplayer) setShowExitConfirm(true);
                  else { setAvatarMood("idle"); setScreen("menu"); }
                }}
                className="absolute top-2 right-2 z-10 px-3 py-1.5 rounded-lg bg-white/90 text-black/70 font-bold text-xs shadow-md hover:bg-white transition-colors"
              >
                {lang === "hu" ? "VÉGE" : lang === "de" ? "ENDE" : lang === "ro" ? "SFÂRȘIT" : "END"}
              </button>
              {/* Opponent name in multiplayer */}
              {isMultiplayer && (
                <div className="absolute top-2 left-2 z-10 px-2 py-1 rounded-lg bg-blue-500/20 text-blue-900 font-bold text-xs">
                  vs {opponentName}
                </div>
              )}
              {/* Status badges */}
              {isDeuce && (
                <motion.div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-yellow-400 text-black font-bold text-xs shadow"
                  animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
                  {t.deuce}
                </motion.div>
              )}
              {isMatchPoint && (
                <motion.div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-red-500 text-white font-bold text-xs shadow"
                  animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
                  {t.matchPoint}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* ── MULTI-WAITING ──────────────────────────── */}
        {screen === "multi-waiting" && (
          <motion.div
            key="multi-waiting"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm gap-5 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div className="text-3xl font-black text-green-400">
              {playerScoreRef.current} – {aiScoreRef.current}
            </motion.div>
            {isMix && <span className="text-white/60 text-xs font-bold uppercase">Round {mixround} ✓</span>}
            <motion.div
              className="w-10 h-10 border-2 border-green-400 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <span className="text-white/60 text-sm font-medium text-center">
              {t.waitingOpp} {opponentName}...
            </span>
          </motion.div>
        )}

        {/* ── MULTI-RESULT ───────────────────────────── */}
        {screen === "multi-result" && oppFinalScore !== null && (
          <MultiplayerResult
            myScore={myFinalScore !== null ? myFinalScore : ps}
            oppScore={oppFinalScore}
            myName={getUsername() || "???"}
            oppName={opponentName}
            onContinue={() => router.push("/multiplayer")}
          />
        )}

        {/* ── REWARD ───────────────────────────────────── */}
        {screen === "reward" && earnedCard && (
          <motion.div key="reward" className="flex-1">
            <RewardReveal
              rarity={earnedCard}
              game="pingpong"
              score={ps}
              total={WIN_SCORE}
              onDone={() => setScreen("result")}
            />
          </motion.div>
        )}

        {/* ── RESULT ───────────────────────────────────── */}
        {screen === "result" && (
          <motion.div
            key="result"
            className="flex-1 flex flex-col items-center justify-center gap-5 px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Avatar */}
            <motion.div className="w-28 h-28 relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <AvatarCompanion
                mood={avatarMood}
                fixed={false}
                gender={gender}
                activeSkin={activeSkin}
                activeFace={activeFace}
                activeTop={activeTop}
                activeBottom={activeBottom}
                activeShoe={activeShoe}
                activeCape={activeCape}
                activeGlasses={activeGlasses}
                activeGloves={activeGloves}
                activeHat={activeHat}
                passThrough={true}
              />
            </motion.div>

            <motion.div
              className={`text-3xl font-black ${ps > as_ ? "text-neon-green" : "text-neon-pink"}`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {ps > as_ ? t.won : t.lost}
            </motion.div>

            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-white/40 text-xs">{t.you}</span>
                <span className="text-2xl font-black text-neon-pink">{ps}</span>
              </div>
              <span className="text-white/20 text-sm font-bold">—</span>
              <div className="flex flex-col items-center">
                <span className="text-white/40 text-xs">{t.ai}</span>
                <span className="text-2xl font-black text-neon-blue">{as_}</span>
              </div>
            </div>

            {earnedCard && (
              <div className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                earnedCard === "legendary" ? "bg-yellow-500/20 text-yellow-400" :
                earnedCard === "gold" ? "bg-yellow-400/20 text-yellow-300" :
                earnedCard === "silver" ? "bg-gray-400/20 text-gray-300" :
                "bg-amber-700/20 text-amber-400"
              }`}>
                {earnedCard.toUpperCase()} card
              </div>
            )}

            <div className="flex flex-col gap-2 w-full max-w-xs mt-2">
              <motion.button
                onClick={() => startGame(difficulty)}
                className="py-3 rounded-xl bg-neon-green/15 border border-neon-green/40 text-neon-green font-bold text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.playAgain}
              </motion.button>
              <Link
                href="/"
                className="py-3 rounded-xl bg-white/5 border border-white/10 text-white/50 font-bold text-sm text-center"
              >
                {t.back}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Milestone popup */}
      {milestones.length > 0 && <MilestonePopup />}

      {/* Multiplayer overlays */}
      {isMultiplayer && matchId && (
        <>
          <MultiplayerExitConfirm
            open={showExitConfirm}
            onStay={() => setShowExitConfirm(false)}
            onLeave={() => { abandonMatch(matchId); router.push("/multiplayer"); }}
          />
          {screen === "playing" && <MultiplayerAbandonNotice matchId={matchId} opponentName={opponentName} />}
        </>
      )}
    </div>
  );
}

// ─── Game State Type ─────────────────────────────────────────
interface GameState {
  playerX: number;
  playerY: number;
  aiX: number;
  aiY: number;
  aiTargetX: number;
  aiTargetY: number;
  balls: Ball[];
  serving: boolean;
  serveTimer: number;
  playerServes: boolean;
  rallyCount: number;
  particles: Particle[];
  gameOver: boolean;
  lastHitTime: number;
  bounceRipples: Array<{ x: number; y: number; age: number }>;
  // Powerup
  powerup: Powerup | null;
  activePowerup: Powerup | null;
  nextPowerupTime: number;
  playerPaddleScale: number;
  aiPaddleScale: number;
  powerupFlash: { text: string; color: string; time: number } | null;
}
