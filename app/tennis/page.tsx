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
    title: "Tennis", easy: "Easy", medium: "Medium", hard: "Hard",
    you: "You", ai: "AI", won: "You Won!", lost: "You Lost!",
    playAgain: "Play Again", back: "Back", selectDifficulty: "Select Difficulty",
    firstTo: "First to 7 points", perfect: "PERFECT!", smash: "SMASH!",
    waitingOpp: "Waiting for",
  },
  hu: {
    title: "Tenisz", easy: "Könnyű", medium: "Közepes", hard: "Nehéz",
    you: "Te", ai: "AI", won: "Győztél!", lost: "Vesztettél!",
    playAgain: "Újra", back: "Vissza", selectDifficulty: "Válassz nehézséget",
    firstTo: "Először 7 pontig", perfect: "TÖKÉLETES!", smash: "SMASH!",
    waitingOpp: "Várakozás",
  },
  de: {
    title: "Tennis", easy: "Leicht", medium: "Mittel", hard: "Schwer",
    you: "Du", ai: "KI", won: "Gewonnen!", lost: "Verloren!",
    playAgain: "Nochmal", back: "Zurück", selectDifficulty: "Schwierigkeit wählen",
    firstTo: "Erster bis 7 Punkte", perfect: "PERFEKT!", smash: "SMASH!",
    waitingOpp: "Warte auf",
  },
  ro: {
    title: "Tenis", easy: "Ușor", medium: "Mediu", hard: "Greu",
    you: "Tu", ai: "AI", won: "Ai câștigat!", lost: "Ai pierdut!",
    playAgain: "Din nou", back: "Înapoi", selectDifficulty: "Alege dificultatea",
    firstTo: "Primul la 7 puncte", perfect: "PERFECT!", smash: "SMASH!",
    waitingOpp: "Se așteaptă",
  },
};

// ─── Constants ───────────────────────────────────────────────
const WIN_SCORE = 7;
const GRAVITY = 0.0004;        // normalized gravity per frame
const BALL_RADIUS = 8;
const RACKET_W = 8;
const RACKET_H = 40;
const NET_HEIGHT_RATIO = 0.22; // net height relative to court height
const COURT_Y_RATIO = 0.75;   // ground level at 75% of canvas
const SERVE_DELAY = 800;

// Rally speed multipliers
const RALLY_THRESHOLDS = [
  { hits: 3, speedMul: 1.15 },
  { hits: 6, speedMul: 1.30 },
  { hits: 10, speedMul: 1.50 },
  { hits: 15, speedMul: 1.70 },
];

const AI_CONFIG = {
  easy:   { speed: 0.025, reactDist: 0.6, errorRange: 0.06, perfectChance: 0.05 },
  medium: { speed: 0.04,  reactDist: 0.8, errorRange: 0.03, perfectChance: 0.20 },
  hard:   { speed: 0.06,  reactDist: 1.0, errorRange: 0.01, perfectChance: 0.45 },
};

type Difficulty = "easy" | "medium" | "hard";
type Screen = "menu" | "playing" | "reward" | "result" | "multi-waiting" | "multi-result";

interface Ball {
  x: number; y: number;    // normalized 0..1
  vx: number; vy: number;  // velocity per frame
  bounced: boolean;         // has it bounced once?
  bounceCount: number;      // bounces so far
  lastHitBy: "player" | "ai" | null;
  active: boolean;
}

interface FlashEffect {
  text: string; color: string; x: number; y: number; time: number;
}

interface GameState {
  playerY: number;  // racket Y normalized (0=top, 1=bottom)
  aiY: number;
  ball: Ball;
  serving: boolean;
  serveTimer: number;
  serveSide: "player" | "ai";
  gameOver: boolean;
  rallyCount: number;
  flashes: FlashEffect[];
  pointFlash: { text: string; color: string; time: number } | null;
}

// ─── Main ────────────────────────────────────────────────────
export default function TennisPageWrapper() {
  return <Suspense><TennisPage /></Suspense>;
}

function TennisPage() {
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
  const oppPaddleRef = useRef(0.5);

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
      const raw = localStorage.getItem("tennis_streak");
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
      const raw = localStorage.getItem("tennis_streak");
      if (raw) {
        const { count, lastDate } = JSON.parse(raw);
        if (lastDate === today) return count;
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        const newCount = lastDate === yesterday ? count + 1 : 1;
        localStorage.setItem("tennis_streak", JSON.stringify({ count: newCount, lastDate: today }));
        return newCount;
      }
    } catch {}
    localStorage.setItem("tennis_streak", JSON.stringify({ count: 1, lastDate: today }));
    return 1;
  }, []);

  const startGame = useCallback((diff: Difficulty) => {
    setDifficulty(diff);
    setPlayerScore(0); setAiScore(0);
    playerScoreRef.current = 0; aiScoreRef.current = 0;
    setAvatarMood("idle"); setScoreSubmitted(false);
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
    const channel = supabase.channel(`tennis-${matchId}`, { config: { broadcast: { self: false } } });
    channel.on("broadcast", { event: "paddlePos" }, (payload) => {
      if (payload.payload.p !== playerNum) oppPaddleRef.current = payload.payload.y;
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
      setScoreSubmitted(true);
      if (isMix) submitMixRoundScore(matchId, myScore, playerNum === "1");
      else submitScore(matchId, myScore, playerNum === "1");
      if (won) {
        const streak = updateStreak();
        const rarity = calculateRarity(myScore, WIN_SCORE, streak, false);
        saveCard({ id: generateCardId(), game: "tennis", rarity, score: myScore, total: WIN_SCORE, date: new Date().toISOString() });
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
    if (won) {
      const streak = updateStreak();
      const rarity = calculateRarity(myScore, WIN_SCORE, streak, false);
      saveCard({ id: generateCardId(), game: "tennis", rarity, score: myScore, total: WIN_SCORE, date: new Date().toISOString() });
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

    // Court layout
    const court = () => {
      const w = W(), h = H();
      const groundY = h * COURT_Y_RATIO;
      const courtL = w * 0.05;
      const courtR = w * 0.95;
      const courtW = courtR - courtL;
      const netX = w * 0.5;
      const netTop = groundY - h * NET_HEIGHT_RATIO;
      const playerX = courtL + courtW * 0.08;
      const aiX = courtR - courtW * 0.08;
      return { w, h, groundY, courtL, courtR, courtW, netX, netTop, playerX, aiX };
    };

    // Make a fresh ball for serving
    const makeBall = (serveSide: "player" | "ai"): Ball => {
      const c = court();
      const isPlayer = serveSide === "player";
      return {
        x: isPlayer ? c.playerX / c.w : c.aiX / c.w,
        y: (c.groundY - 60) / c.h,
        vx: 0, vy: 0,
        bounced: false, bounceCount: 0,
        lastHitBy: null, active: false,
      };
    };

    const serveBall = (ball: Ball, serveSide: "player" | "ai") => {
      const baseVx = 0.005 + (difficulty === "hard" ? 0.001 : 0);
      const dir = serveSide === "player" ? 1 : -1;
      ball.vx = baseVx * dir;
      ball.vy = -0.008 - Math.random() * 0.003; // upward arc
      ball.active = true;
      ball.lastHitBy = serveSide;
    };

    const rallySpeedMul = (hits: number) => {
      let mul = 1;
      for (const t of RALLY_THRESHOLDS) { if (hits >= t.hits) mul = t.speedMul; }
      return mul;
    };

    const game: GameState = {
      playerY: 0.5,
      aiY: 0.5,
      ball: makeBall("player"),
      serving: true,
      serveTimer: Date.now(),
      serveSide: "player",
      gameOver: false,
      rallyCount: 0,
      flashes: [],
      pointFlash: null,
    };
    gameRef.current = game;

    const scorePoint = (scoredBy: "player" | "ai") => {
      if (game.gameOver) return;
      game.pointFlash = {
        text: scoredBy === "player" ? "👆" : "👇",
        color: scoredBy === "player" ? "#00FF88" : "#FF2D78",
        time: Date.now(),
      };

      if (scoredBy === "player") { playerScoreRef.current++; setPlayerScore(playerScoreRef.current); }
      else { aiScoreRef.current++; setAiScore(aiScoreRef.current); }

      const ps = playerScoreRef.current, as_ = aiScoreRef.current;
      if (ps >= WIN_SCORE || as_ >= WIN_SCORE) {
        game.gameOver = true;
        setTimeout(() => handleGameEnd(ps > as_, ps, as_), 800);
        return;
      }

      // Next serve goes to whoever lost the point
      game.serveSide = scoredBy === "player" ? "ai" : "player";
      game.ball = makeBall(game.serveSide);
      game.serving = true;
      game.serveTimer = Date.now();
      game.rallyCount = 0;
    };

    // Player input
    let playerTarget = 0.5;
    const handlePointer = (e: PointerEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientY = "touches" in e ? e.touches[0]?.clientY ?? 0 : (e as PointerEvent).clientY;
      const c = court();
      const ny = (clientY - rect.top) / rect.height * c.h;
      const rH = RACKET_H;
      const minY = (c.groundY - c.h * NET_HEIGHT_RATIO * 1.8) / c.h;
      const maxY = (c.groundY - rH / 2) / c.h;
      playerTarget = Math.max(minY, Math.min(maxY, ny / c.h));
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
    let lastTime = performance.now();

    // ─── Game Loop ────────────────────────────────────
    const loop = (now: number) => {
      const rawDt = (now - lastTime) / 16.67;
      const dt = Math.min(rawDt, 3);
      lastTime = now;
      const c = court();

      // Keyboard
      if (keys.has("ArrowUp") || keys.has("w")) playerTarget = Math.max(0.1, playerTarget - 0.02 * dt);
      if (keys.has("ArrowDown") || keys.has("s")) playerTarget = Math.min((c.groundY - RACKET_H / 2) / c.h, playerTarget + 0.02 * dt);

      // Smooth player racket
      game.playerY += (playerTarget - game.playerY) * Math.min(1, 0.25 * dt);

      // AI racket movement
      if (isMultiplayer) {
        game.aiY += (oppPaddleRef.current - game.aiY) * Math.min(1, 0.25 * dt);
      } else {
        const ball = game.ball;
        if (ball.active && ball.vx > 0 && ball.x > (1 - ai.reactDist)) {
          // Predict where ball will be at AI's x
          const predictY = ball.y + ball.vy * ((c.aiX / c.w - ball.x) / Math.abs(ball.vx));
          const targetY = predictY + (Math.random() - 0.5) * ai.errorRange;
          const minAiY = (c.groundY - c.h * NET_HEIGHT_RATIO * 1.8) / c.h;
          const maxAiY = (c.groundY - RACKET_H / 2) / c.h;
          game.aiY += (Math.max(minAiY, Math.min(maxAiY, targetY)) - game.aiY) * ai.speed * dt;
        } else {
          // Return to center
          const centerY = (c.groundY - 50) / c.h;
          game.aiY += (centerY - game.aiY) * 0.02 * dt;
        }
      }

      // Broadcast paddle pos
      if (isMultiplayer && broadcastChannelRef.current) {
        broadcastTimer += dt;
        if (broadcastTimer > 4) {
          broadcastTimer = 0;
          broadcastChannelRef.current.send({
            type: "broadcast", event: "paddlePos",
            payload: { p: playerNum, y: game.playerY },
          });
        }
      }

      // Serve
      if (game.serving && Date.now() - game.serveTimer > SERVE_DELAY && !game.gameOver) {
        serveBall(game.ball, game.serveSide);
        game.serving = false;
      }

      // Ball physics
      const ball = game.ball;
      if (ball.active && !game.gameOver) {
        const rMul = rallySpeedMul(game.rallyCount);
        ball.x += ball.vx * rMul * dt;
        ball.vy += GRAVITY * dt; // gravity
        ball.y += ball.vy * rMul * dt;

        const groundNorm = c.groundY / c.h;
        const ballR = BALL_RADIUS / c.h;

        // Ground bounce
        if (ball.y + ballR >= groundNorm) {
          ball.y = groundNorm - ballR;
          ball.bounceCount++;
          if (ball.bounceCount >= 2) {
            // Double bounce — point for the OTHER side
            scorePoint(ball.lastHitBy === "player" ? "ai" : "player");
            animFrameRef.current = requestAnimationFrame(loop);
            return;
          }
          ball.vy = -Math.abs(ball.vy) * 0.75; // bounce with energy loss
          ball.bounced = true;
        }

        // Ceiling
        if (ball.y - ballR < 0.02) {
          ball.y = 0.02 + ballR;
          ball.vy = Math.abs(ball.vy) * 0.5;
        }

        // Net collision
        const netNormX = c.netX / c.w;
        const netNormTop = c.netTop / c.h;
        const ballRx = BALL_RADIUS / c.w;
        if (Math.abs(ball.x - netNormX) < ballRx + 0.005 && ball.y + ballR > netNormTop) {
          // Hit the net — point for other side
          if (ball.vx > 0) ball.x = netNormX - ballRx - 0.006;
          else ball.x = netNormX + ballRx + 0.006;
          ball.vx = -ball.vx * 0.3;
          ball.vy *= 0.5;
          // If ball barely moving, score
          if (Math.abs(ball.vx) < 0.001) {
            scorePoint(ball.lastHitBy === "player" ? "ai" : "player");
            animFrameRef.current = requestAnimationFrame(loop);
            return;
          }
        }

        // Out of bounds (left/right)
        if (ball.x < -0.05 || ball.x > 1.05) {
          scorePoint(ball.x < 0 ? "ai" : "player");
          animFrameRef.current = requestAnimationFrame(loop);
          return;
        }

        // Racket collision — Player (left side)
        const pRacketX = c.playerX / c.w;
        const pRacketTop = game.playerY - (RACKET_H / 2) / c.h;
        const pRacketBot = game.playerY + (RACKET_H / 2) / c.h;
        const racketWNorm = RACKET_W / c.w;

        if (ball.vx < 0 && ball.lastHitBy !== "player" &&
            ball.x - ballRx <= pRacketX + racketWNorm &&
            ball.x + ballRx >= pRacketX - racketWNorm &&
            ball.y >= pRacketTop && ball.y <= pRacketBot) {
          // Hit position on racket: -1 (top) to 1 (bottom)
          const hitPos = (ball.y - game.playerY) / ((RACKET_H / 2) / c.h);
          // Perfect hit = center of racket
          const isPerfect = Math.abs(hitPos) < 0.25;
          const baseSpeed = 0.006 + (difficulty === "hard" ? 0.001 : 0);
          const speedBoost = isPerfect ? 1.5 : 1.0;
          const angle = -0.4 + hitPos * 0.5; // top of racket = higher arc, bottom = flatter
          ball.vx = baseSpeed * speedBoost;
          ball.vy = angle * baseSpeed * 2 - 0.005; // always some upward component
          ball.lastHitBy = "player";
          ball.bounced = false;
          ball.bounceCount = 0;
          ball.x = pRacketX + racketWNorm + ballRx + 0.002;
          game.rallyCount++;

          if (isPerfect) {
            game.flashes.push({ text: t.perfect, color: "#FFD700", x: pRacketX, y: game.playerY, time: Date.now() });
          }
          if (isPerfect && game.rallyCount >= 3) {
            game.flashes.push({ text: t.smash, color: "#FF2D78", x: 0.5, y: 0.3, time: Date.now() });
          }
        }

        // Racket collision — AI (right side)
        const aRacketX = c.aiX / c.w;
        const aRacketTop = game.aiY - (RACKET_H / 2) / c.h;
        const aRacketBot = game.aiY + (RACKET_H / 2) / c.h;

        if (ball.vx > 0 && ball.lastHitBy !== "ai" &&
            ball.x + ballRx >= aRacketX - racketWNorm &&
            ball.x - ballRx <= aRacketX + racketWNorm &&
            ball.y >= aRacketTop && ball.y <= aRacketBot) {
          const hitPos = (ball.y - game.aiY) / ((RACKET_H / 2) / c.h);
          const isPerfect = !isMultiplayer && Math.random() < ai.perfectChance;
          const baseSpeed = 0.006 + (difficulty === "hard" ? 0.001 : 0);
          const speedBoost = isPerfect ? 1.4 : 1.0;
          const angle = -0.4 + hitPos * 0.5;
          ball.vx = -(baseSpeed * speedBoost);
          ball.vy = angle * baseSpeed * 2 - 0.005;
          ball.lastHitBy = "ai";
          ball.bounced = false;
          ball.bounceCount = 0;
          ball.x = aRacketX - racketWNorm - ballRx - 0.002;
          game.rallyCount++;

          if (isPerfect) {
            game.flashes.push({ text: "SMASH!", color: "#FF2D78", x: aRacketX, y: game.aiY, time: Date.now() });
          }
        }
      }

      // ═════════════════════════════════════════
      //  R E N D E R
      // ═════════════════════════════════════════
      const { w, h, groundY, courtL, courtR, courtW, netX, netTop, playerX, aiX } = c;
      ctx.clearRect(0, 0, w, h);

      // Sky gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, groundY);
      skyGrad.addColorStop(0, "#0A0A2E");
      skyGrad.addColorStop(0.6, "#0D1535");
      skyGrad.addColorStop(1, "#101840");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, groundY);

      // Court surface
      const courtGrad = ctx.createLinearGradient(0, groundY, 0, h);
      courtGrad.addColorStop(0, "#1A5C2A");
      courtGrad.addColorStop(0.3, "#14501F");
      courtGrad.addColorStop(1, "#0E3A16");
      ctx.fillStyle = courtGrad;
      ctx.fillRect(0, groundY, w, h - groundY);

      // Court line (baseline)
      ctx.strokeStyle = "#ffffff30";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(courtL, groundY);
      ctx.lineTo(courtR, groundY);
      ctx.stroke();

      // Service lines
      ctx.strokeStyle = "#ffffff18";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      const serviceLeft = courtL + courtW * 0.25;
      const serviceRight = courtR - courtW * 0.25;
      ctx.beginPath();
      ctx.moveTo(serviceLeft, groundY); ctx.lineTo(serviceLeft, groundY + 40);
      ctx.moveTo(serviceRight, groundY); ctx.lineTo(serviceRight, groundY + 40);
      // Center service line
      ctx.moveTo(netX, groundY); ctx.lineTo(netX, groundY + 40);
      ctx.stroke();
      ctx.setLineDash([]);

      // Net
      const netBottom = groundY;
      ctx.strokeStyle = "#ffffff50";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(netX, netTop);
      ctx.lineTo(netX, netBottom);
      ctx.stroke();

      // Net mesh
      ctx.strokeStyle = "#ffffff15";
      ctx.lineWidth = 0.5;
      const netH = netBottom - netTop;
      for (let i = 0; i < 6; i++) {
        const ny = netTop + (netH / 6) * i;
        ctx.beginPath();
        ctx.moveTo(netX - 3, ny);
        ctx.lineTo(netX + 3, ny);
        ctx.stroke();
      }

      // Net post glow
      ctx.fillStyle = "#FFD70060";
      ctx.beginPath();
      ctx.arc(netX, netTop, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#FFD700";
      ctx.beginPath();
      ctx.arc(netX, netTop, 2, 0, Math.PI * 2);
      ctx.fill();

      // Draw racket
      const drawRacket = (rx: number, ry: number, color: string, glowColor: string) => {
        const rTop = ry * h - RACKET_H / 2;
        const rBot = ry * h + RACKET_H / 2;

        // Glow
        const g = ctx.createRadialGradient(rx, ry * h, 5, rx, ry * h, RACKET_H);
        g.addColorStop(0, glowColor + "25");
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(rx, ry * h, RACKET_H, 0, Math.PI * 2);
        ctx.fill();

        // Handle
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(rx - 2, rBot, 4, 14);

        // Racket head (oval)
        ctx.save();
        ctx.translate(rx, ry * h);
        ctx.scale(1, 1.3);
        ctx.beginPath();
        ctx.arc(0, 0, RACKET_W * 1.8, 0, Math.PI * 2);
        ctx.restore();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = glowColor;
        ctx.lineWidth = 2;
        ctx.save();
        ctx.translate(rx, ry * h);
        ctx.scale(1, 1.3);
        ctx.beginPath();
        ctx.arc(0, 0, RACKET_W * 1.8, 0, Math.PI * 2);
        ctx.restore();
        ctx.stroke();

        // Strings (horizontal)
        ctx.strokeStyle = glowColor + "40";
        ctx.lineWidth = 0.5;
        for (let i = -2; i <= 2; i++) {
          const sy = ry * h + i * 5;
          ctx.beginPath();
          ctx.moveTo(rx - RACKET_W * 1.2, sy);
          ctx.lineTo(rx + RACKET_W * 1.2, sy);
          ctx.stroke();
        }
        // Strings (vertical)
        for (let i = -1; i <= 1; i++) {
          const sx = rx + i * 5;
          ctx.beginPath();
          ctx.moveTo(sx, ry * h - RACKET_H * 0.35);
          ctx.lineTo(sx, ry * h + RACKET_H * 0.35);
          ctx.stroke();
        }
      };

      // Player racket (left, cyan)
      drawRacket(playerX, game.playerY, "#0A2A40", "#00D4FF");
      // AI racket (right, pink)
      drawRacket(aiX, game.aiY, "#400A2A", "#FF2D78");

      // Ball
      if (!game.gameOver && ball.active) {
        const bx = ball.x * w, by = ball.y * h;

        // Shadow on ground
        ctx.fillStyle = "rgba(0,0,0,0.25)";
        ctx.beginPath();
        ctx.ellipse(bx, groundY + 2, BALL_RADIUS * 0.8, 3, 0, 0, Math.PI * 2);
        ctx.fill();

        // Trail
        const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
        if (speed > 0.004) {
          ctx.strokeStyle = "#CDFF0040";
          ctx.lineWidth = BALL_RADIUS * 1.5;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(bx - ball.vx * w * 3 * rallySpeedMul(game.rallyCount),
                     by - ball.vy * h * 3 * rallySpeedMul(game.rallyCount));
          ctx.lineTo(bx, by);
          ctx.stroke();
          ctx.lineCap = "butt";
        }

        // Ball glow
        const bg = ctx.createRadialGradient(bx, by, 0, bx, by, BALL_RADIUS * 2.5);
        bg.addColorStop(0, "#CDFF0020");
        bg.addColorStop(1, "transparent");
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.arc(bx, by, BALL_RADIUS * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Ball body — tennis ball yellow-green
        const ballGrad = ctx.createRadialGradient(bx - 2, by - 2, 0, bx, by, BALL_RADIUS);
        ballGrad.addColorStop(0, "#DDFF44");
        ballGrad.addColorStop(0.7, "#CDFF00");
        ballGrad.addColorStop(1, "#88AA00");
        ctx.fillStyle = ballGrad;
        ctx.beginPath();
        ctx.arc(bx, by, BALL_RADIUS, 0, Math.PI * 2);
        ctx.fill();

        // Tennis ball seam
        ctx.strokeStyle = "#ffffff40";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bx, by, BALL_RADIUS * 0.7, -0.8, 0.8);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(bx, by, BALL_RADIUS * 0.7, Math.PI - 0.8, Math.PI + 0.8);
        ctx.stroke();

        // Highlight
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.beginPath();
        ctx.arc(bx - 2, by - 3, BALL_RADIUS * 0.25, 0, Math.PI * 2);
        ctx.fill();
      }

      // Serving ball (stationary, above racket)
      if (game.serving && !game.gameOver) {
        const bx = ball.x * w, by = ball.y * h;
        const ballGrad = ctx.createRadialGradient(bx - 2, by - 2, 0, bx, by, BALL_RADIUS);
        ballGrad.addColorStop(0, "#DDFF44");
        ballGrad.addColorStop(0.7, "#CDFF00");
        ballGrad.addColorStop(1, "#88AA00");
        ctx.fillStyle = ballGrad;
        ctx.globalAlpha = 0.5 + Math.sin(Date.now() * 0.006) * 0.3;
        ctx.beginPath();
        ctx.arc(bx, by, BALL_RADIUS, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Rally counter
      if (game.rallyCount >= 3 && !game.gameOver) {
        const rMul = rallySpeedMul(game.rallyCount);
        const rallyColor = rMul >= 1.5 ? "#FF2D78" : rMul >= 1.3 ? "#FFD700" : "#00D4FF";
        ctx.font = `bold ${Math.round(Math.min(14, w * 0.03))}px system-ui`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = rallyColor;
        ctx.fillText(`RALLY ×${game.rallyCount}`, w / 2, netTop - 20);
        // Speed bar
        const barW = 60, barH = 3;
        const barX = w / 2 - barW / 2, barY = netTop - 10;
        ctx.fillStyle = "rgba(255,255,255,0.1)";
        ctx.fillRect(barX, barY, barW, barH);
        ctx.fillStyle = rallyColor;
        ctx.fillRect(barX, barY, barW * Math.min(1, (rMul - 1) / 0.7), barH);
      }

      // Scores
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      // Player (left)
      ctx.font = `bold ${Math.round(Math.min(28, w * 0.06))}px system-ui`;
      ctx.fillStyle = "#00D4FF";
      ctx.fillText(String(playerScoreRef.current), w * 0.15, h * 0.08);
      ctx.font = `${Math.round(Math.min(11, w * 0.025))}px system-ui`;
      ctx.fillStyle = "#00D4FF60";
      ctx.fillText(t.you, w * 0.15, h * 0.08 + 20);
      // AI (right)
      ctx.font = `bold ${Math.round(Math.min(28, w * 0.06))}px system-ui`;
      ctx.fillStyle = "#FF2D78";
      ctx.fillText(String(aiScoreRef.current), w * 0.85, h * 0.08);
      ctx.font = `${Math.round(Math.min(11, w * 0.025))}px system-ui`;
      ctx.fillStyle = "#FF2D7860";
      ctx.fillText(isMultiplayer ? opponentName : t.ai, w * 0.85, h * 0.08 + 20);

      // Flash effects
      game.flashes = game.flashes.filter(f => {
        const age = Date.now() - f.time;
        if (age > 1000) return false;
        const alpha = Math.max(0, 1 - age / 1000);
        const yOff = -(age / 1000) * 30;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.font = `bold ${Math.round(Math.min(w * 0.05, 18))}px system-ui`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillStyle = f.color;
        ctx.shadowColor = f.color; ctx.shadowBlur = 12;
        ctx.fillText(f.text, f.x * w, f.y * h + yOff);
        ctx.shadowBlur = 0;
        ctx.restore();
        return true;
      });

      // Point flash
      if (game.pointFlash) {
        const age = Date.now() - game.pointFlash.time;
        if (age < 700) {
          const alpha = age < 100 ? age / 100 : Math.max(0, 1 - (age - 100) / 600);
          ctx.save(); ctx.globalAlpha = alpha * 0.2;
          ctx.fillStyle = game.pointFlash.color;
          ctx.fillRect(0, 0, w, h);
          ctx.restore();
        } else game.pointFlash = null;
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
  }, [screen, difficulty, handleGameEnd, isMultiplayer, playerNum, t]);

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
                const colors = {
                  easy: "text-neon-green border-neon-green/40 bg-neon-green/10",
                  medium: "text-[#FFD700] border-[#FFD700]/40 bg-[#FFD700]/10",
                  hard: "text-neon-pink border-neon-pink/40 bg-neon-pink/10",
                }[d];
                return (
                  <motion.button key={d} onClick={() => startGame(d)}
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-xl border font-bold text-sm ${colors}`}
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
            <motion.div className="text-3xl font-black text-[#FFD700]">{playerScoreRef.current} – {aiScoreRef.current}</motion.div>
            {isMix && <span className="text-white/60 text-xs font-bold uppercase">Round {mixround} ✓</span>}
            <motion.div className="w-10 h-10 border-2 border-[#FFD700] border-t-transparent rounded-full"
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
            <RewardReveal rarity={earnedCard} game="tennis" score={ps} total={WIN_SCORE}
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
                <span className="text-2xl font-black text-[#00D4FF]">{ps}</span>
              </div>
              <span className="text-white/20 text-sm font-bold">—</span>
              <div className="flex flex-col items-center">
                <span className="text-white/40 text-xs">{t.ai}</span>
                <span className="text-2xl font-black text-[#FF2D78]">{as_}</span>
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
