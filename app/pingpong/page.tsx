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
  },
};

// ─── Game Constants ──────────────────────────────────────────
const WIN_SCORE = 11;
const PADDLE_HEIGHT = 12;
const BALL_RADIUS = 7;
const SERVE_DELAY = 800; // ms before ball launches after point

// AI difficulty settings
const AI_CONFIG = {
  easy: { speed: 0.025, reactionDelay: 0.15, errorRange: 0.15, predictError: 40 },
  medium: { speed: 0.045, reactionDelay: 0.08, errorRange: 0.08, predictError: 20 },
  hard: { speed: 0.07, reactionDelay: 0.03, errorRange: 0.03, predictError: 8 },
};

type Difficulty = "easy" | "medium" | "hard";
type Screen = "menu" | "playing" | "reward" | "result";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  color: string;
}

// ─── Main Component ──────────────────────────────────────────
export default function PingPongPageWrapper() {
  return <Suspense><PingPongPage /></Suspense>;
}

function PingPongPage() {
  const { lang } = useLang();
  const t = (T[lang] || T.en) as typeof T.en;
  const router = useRouter();

  // Screen state
  const [screen, setScreen] = useState<Screen>("menu");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [milestones, setMilestones] = useState<string[]>([]);
  const [avatarMood, setAvatarMood] = useState<"idle" | "happy" | "victory" | "disappointed">("idle");

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
    setScreen("playing");
  }, []);

  // ─── Handle Win ──────────────────────────────────────────
  const handleGameEnd = useCallback((won: boolean, myScore: number, oppScore: number) => {
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
  }, [updateStreak]);

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
    const paddleW = () => Math.max(40, Math.min(70, W() * 0.14)); // round paddle hit width

    // Game state
    const game: GameState = {
      playerX: 0.5, // 0..1 normalized
      aiX: 0.5,
      aiTargetX: 0.5,
      ballX: 0.5,
      ballY: 0.5,
      ballVX: 0,
      ballVY: 0,
      ballSpeed: 0,
      serving: true,
      serveTimer: 0,
      playerServes: true,
      rallyCount: 0,
      particles: [],
      gameOver: false,
      lastHitTime: 0,
    };
    gameRef.current = game;

    // Reset ball for serve
    const resetBall = (playerServes: boolean) => {
      game.ballX = 0.5;
      game.ballY = playerServes ? 0.85 : 0.15;
      game.ballVX = 0;
      game.ballVY = 0;
      game.ballSpeed = 0;
      game.serving = true;
      game.serveTimer = Date.now();
      game.playerServes = playerServes;
      game.rallyCount = 0;
    };

    const launchBall = () => {
      const baseSpeed = 0.008 + (difficulty === "hard" ? 0.002 : difficulty === "medium" ? 0.001 : 0);
      game.ballSpeed = baseSpeed;
      const angle = (Math.random() - 0.5) * 0.6;
      game.ballVX = Math.sin(angle) * game.ballSpeed;
      game.ballVY = game.playerServes ? -game.ballSpeed * Math.cos(angle) : game.ballSpeed * Math.cos(angle);
      game.serving = false;
    };

    // Spawn particles
    const spawnParticles = (x: number, y: number, color: string, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 2;
        game.particles.push({
          x: x * W(), y: y * H(),
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1, maxLife: 0.3 + Math.random() * 0.4,
          color,
        });
      }
    };

    // Score point
    const scorePoint = (playerScored: boolean) => {
      if (game.gameOver) return;
      spawnParticles(game.ballX, game.ballY, playerScored ? "#00FF88" : "#FF2D78", 15);

      if (playerScored) {
        playerScoreRef.current++;
        setPlayerScore(playerScoreRef.current);
      } else {
        aiScoreRef.current++;
        setAiScore(aiScoreRef.current);
      }

      const ps = playerScoreRef.current;
      const as_ = aiScoreRef.current;

      // Win check: first to 11, must lead by 2 if deuce (both >= 10)
      const deuceRule = ps >= 10 && as_ >= 10;
      if ((ps >= WIN_SCORE || as_ >= WIN_SCORE) && (!deuceRule || Math.abs(ps - as_) >= 2)) {
        game.gameOver = true;
        setTimeout(() => handleGameEnd(ps > as_, ps, as_), 600);
        return;
      }

      resetBall(!playerScored); // loser serves
    };

    // Player input
    let playerTargetX = 0.5;
    const handlePointer = (e: PointerEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0]?.clientX ?? 0 : (e as PointerEvent).clientX;
      playerTargetX = (clientX - rect.left) / rect.width;
      playerTargetX = Math.max(0, Math.min(1, playerTargetX));
    };
    canvas.addEventListener("pointermove", handlePointer);
    canvas.addEventListener("pointerdown", handlePointer);
    canvas.addEventListener("touchmove", handlePointer as EventListener, { passive: true });

    // Keyboard
    const keys = new Set<string>();
    const handleKeyDown = (e: KeyboardEvent) => { keys.add(e.key); };
    const handleKeyUp = (e: KeyboardEvent) => { keys.delete(e.key); };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Initial serve
    resetBall(true);

    // ─── Game loop ─────────────────────────────────────────
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - lastTime) / 16.67, 3); // cap delta
      lastTime = now;

      const w = W();
      const h = H();
      const pw = paddleW();
      const halfPw = pw / w / 2;
      const ballR = BALL_RADIUS / w;
      const ballRY = BALL_RADIUS / h;
      const paddleH = PADDLE_HEIGHT / h;
      const playerPaddleY = 0.9;
      const aiPaddleY = 0.1;

      // Keyboard input
      if (keys.has("ArrowLeft") || keys.has("a")) playerTargetX = Math.max(0, playerTargetX - 0.02 * dt);
      if (keys.has("ArrowRight") || keys.has("d")) playerTargetX = Math.min(1, playerTargetX + 0.02 * dt);

      // Smooth player paddle
      game.playerX += (playerTargetX - game.playerX) * Math.min(1, 0.25 * dt);

      // AI logic
      if (!game.serving || !game.playerServes) {
        const predictedX = game.ballVY < 0
          ? game.ballX + game.ballVX * ((game.ballY - aiPaddleY) / Math.max(0.001, -game.ballVY))
            + (Math.random() - 0.5) * ai.predictError / w
          : game.ballX;
        const targetX = Math.max(0, Math.min(1, predictedX + (Math.random() - 0.5) * ai.errorRange));
        game.aiTargetX += (targetX - game.aiTargetX) * ai.reactionDelay * dt;
        game.aiX += (game.aiTargetX - game.aiX) * ai.speed * dt;
      }

      // Serve delay
      if (game.serving && Date.now() - game.serveTimer > SERVE_DELAY && !game.gameOver) {
        launchBall();
      }

      // Ball physics
      if (!game.serving && !game.gameOver) {
        game.ballX += game.ballVX * dt;
        game.ballY += game.ballVY * dt;

        // Wall bounce (left/right)
        if (game.ballX - ballR < 0) { game.ballX = ballR; game.ballVX = Math.abs(game.ballVX); }
        if (game.ballX + ballR > 1) { game.ballX = 1 - ballR; game.ballVX = -Math.abs(game.ballVX); }

        // Player paddle collision (bottom)
        if (game.ballVY > 0 && game.ballY + ballRY >= playerPaddleY - paddleH / 2 && game.ballY + ballRY <= playerPaddleY + paddleH) {
          const padL = game.playerX - halfPw;
          const padR = game.playerX + halfPw;
          if (game.ballX >= padL - ballR && game.ballX <= padR + ballR) {
            const hitPos = (game.ballX - game.playerX) / halfPw; // -1 to 1
            const angle = hitPos * 0.7; // max ±0.7 radians
            const speedBoost = Math.min(game.ballSpeed * 1.05, 0.02);
            game.ballSpeed = speedBoost;
            game.ballVX = Math.sin(angle) * game.ballSpeed;
            game.ballVY = -Math.cos(angle) * game.ballSpeed;
            game.ballY = playerPaddleY - paddleH / 2 - ballRY;
            game.rallyCount++;
            spawnParticles(game.ballX, game.ballY, "#00D4FF", 5);
          }
        }

        // AI paddle collision (top)
        if (game.ballVY < 0 && game.ballY - ballRY <= aiPaddleY + paddleH / 2 && game.ballY - ballRY >= aiPaddleY - paddleH) {
          const padL = game.aiX - halfPw;
          const padR = game.aiX + halfPw;
          if (game.ballX >= padL - ballR && game.ballX <= padR + ballR) {
            const hitPos = (game.ballX - game.aiX) / halfPw;
            const angle = hitPos * 0.7;
            const speedBoost = Math.min(game.ballSpeed * 1.05, 0.02);
            game.ballSpeed = speedBoost;
            game.ballVX = Math.sin(angle) * game.ballSpeed;
            game.ballVY = Math.cos(angle) * game.ballSpeed;
            game.ballY = aiPaddleY + paddleH / 2 + ballRY;
            game.rallyCount++;
            spawnParticles(game.ballX, game.ballY, "#FF2D78", 5);
          }
        }

        // Score (ball goes past paddles)
        if (game.ballY < -0.05) scorePoint(true); // player scored
        if (game.ballY > 1.05) scorePoint(false); // AI scored
      }

      // ─── Render ────────────────────────────────────────
      ctx.clearRect(0, 0, w, h);

      // Background — warm beige
      ctx.fillStyle = "#D4B896";
      ctx.fillRect(0, 0, w, h);

      // Table dimensions
      const tableMarginX = w * 0.12;
      const tableMarginY = h * 0.12;
      const tL = tableMarginX;
      const tR = w - tableMarginX;
      const tT = tableMarginY;
      const tB = h - tableMarginY;
      const tW = tR - tL;
      const tH = tB - tT;

      // Table shadow
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(tL + 4, tT + 4, tW, tH);

      // Table surface — dark green
      ctx.fillStyle = "#1B7A2B";
      ctx.fillRect(tL, tT, tW, tH);

      // Table border — black
      ctx.strokeStyle = "#111";
      ctx.lineWidth = 3;
      ctx.strokeRect(tL, tT, tW, tH);

      // White center line (vertical)
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(w / 2, tT);
      ctx.lineTo(w / 2, tB);
      ctx.stroke();

      // Net — white horizontal line at center
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(tL - 6, h / 2);
      ctx.lineTo(tR + 6, h / 2);
      ctx.stroke();
      // Net posts
      ctx.fillStyle = "#555";
      ctx.fillRect(tL - 8, h / 2 - 4, 6, 8);
      ctx.fillRect(tR + 2, h / 2 - 4, 6, 8);

      // ─── Draw paddle (table tennis racket shape) ───
      const paddleRadius = Math.max(18, Math.min(28, w * 0.07));
      const handleLen = paddleRadius * 0.7;
      const handleW = paddleRadius * 0.3;

      const drawPaddle = (nx: number, ny: number, headColor: string, handleColor: string, isBottom: boolean) => {
        const px = tL + nx * tW;
        const py = tT + ny * tH;

        // Shadow
        ctx.fillStyle = "rgba(0,0,0,0.2)";
        ctx.beginPath();
        ctx.ellipse(px + 2, py + 2, paddleRadius, paddleRadius, 0, 0, Math.PI * 2);
        ctx.fill();

        // Handle
        ctx.fillStyle = handleColor;
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 1.5;
        const hDir = isBottom ? 1 : -1;
        const hx = px - handleW / 2;
        const hy = isBottom ? py + paddleRadius * 0.5 : py - paddleRadius * 0.5 - handleLen;
        ctx.beginPath();
        ctx.roundRect(hx, hy, handleW, handleLen, 3);
        ctx.fill();
        ctx.stroke();

        // Paddle head — circle
        ctx.fillStyle = headColor;
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(px, py, paddleRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Rubber texture line
        ctx.strokeStyle = "rgba(0,0,0,0.15)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px, py - paddleRadius * 0.7);
        ctx.lineTo(px, py + paddleRadius * 0.7);
        ctx.stroke();
      };

      // Map normalized game coords (0..1) to table coords (0..1 within table)
      const pNormX = (game.playerX - (tL / w)) / (tW / w);
      const aNormX = (game.aiX - (tL / w)) / (tW / w);

      drawPaddle(
        Math.max(0.05, Math.min(0.95, pNormX)), 0.88,
        "#D42020", "#8B1515", true
      );
      drawPaddle(
        Math.max(0.05, Math.min(0.95, aNormX)), 0.12,
        "#20A0D4", "#156080", false
      );

      // Ball
      if (!game.gameOver) {
        const bNormX = (game.ballX - (tL / w)) / (tW / w);
        const bNormY = (game.ballY - (tT / h)) / (tH / h);
        const bx = tL + bNormX * tW;
        const by = tT + bNormY * tH;

        // Ball shadow
        ctx.fillStyle = "rgba(0,0,0,0.2)";
        ctx.beginPath();
        ctx.ellipse(bx + 2, by + 2, BALL_RADIUS + 1, BALL_RADIUS, 0, 0, Math.PI * 2);
        ctx.fill();

        // Ball
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#888";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(bx, by, BALL_RADIUS, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Ball highlight
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.beginPath();
        ctx.arc(bx - 2, by - 2, BALL_RADIUS * 0.35, 0, Math.PI * 2);
        ctx.fill();
      }

      // Particles
      for (let i = game.particles.length - 1; i >= 0; i--) {
        const p = game.particles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= (1 / 60 / p.maxLife) * dt;
        if (p.life <= 0) { game.particles.splice(i, 1); continue; }
        ctx.globalAlpha = p.life * 0.7;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 + p.life * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // ─── Score badges on sides ───
      const badgeR = Math.max(18, Math.min(26, w * 0.06));
      const badgeY = h / 2;

      // Left badge — player (red)
      const leftBX = tL / 2;
      ctx.fillStyle = "#FFF";
      ctx.strokeStyle = "#ccc";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(leftBX, badgeY - badgeR * 1.3, badgeR, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#D42020";
      ctx.font = `bold ${Math.round(badgeR)}px system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(String(playerScoreRef.current), leftBX, badgeY - badgeR * 1.3);

      // Right badge — AI (blue)
      const rightBX = tR + (w - tR) / 2;
      ctx.fillStyle = "#FFF";
      ctx.strokeStyle = "#ccc";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(rightBX, badgeY + badgeR * 1.3, badgeR, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#20A0D4";
      ctx.font = `bold ${Math.round(badgeR)}px system-ui, sans-serif`;
      ctx.fillText(String(aiScoreRef.current), rightBX, badgeY + badgeR * 1.3);

      // Colon
      ctx.fillStyle = "#888";
      ctx.font = `bold ${Math.round(badgeR * 0.7)}px system-ui, sans-serif`;
      ctx.fillText(":", leftBX, badgeY);
      ctx.fillText(":", rightBX, badgeY);

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
  }, [screen, difficulty, handleGameEnd]);

  // ─── Render ──────────────────────────────────────────────
  const ps = playerScore;
  const as_ = aiScore;
  const isDeuce = ps >= 10 && as_ >= 10 && ps === as_;
  const isMatchPoint = !isDeuce && ((ps === WIN_SCORE - 1 && ps > as_) || (as_ === WIN_SCORE - 1 && as_ > ps) || (ps >= 10 && as_ >= 10 && Math.abs(ps - as_) === 1));
  const playerWon = screen === "result" ? ps > as_ : false;

  return (
    <div className="min-h-[100dvh] flex flex-col relative overflow-hidden" style={{ background: "#C4A67A" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 relative z-10">
        <Link href="/" className="w-8 h-8 flex items-center justify-center rounded-full bg-black/10 text-black/50 hover:bg-black/20 transition-colors">
          <ChevronLeft size={16} />
        </Link>
        <h1 className="text-black/70 font-bold text-sm">{t.title}</h1>
        <div className="w-8" />
      </div>

      <AnimatePresence>
        {/* ── MENU ─────────────────────────────────────── */}
        {screen === "menu" && (
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
              <h2 className="text-2xl font-black text-black/80">{t.title}</h2>
              <p className="text-black/40 text-xs mt-1">{t.firstTo}</p>
            </div>

            <p className="text-black/40 text-xs font-bold uppercase tracking-wider">{t.selectDifficulty}</p>

            <div className="flex flex-col gap-3 w-full max-w-xs">
              {(["easy", "medium", "hard"] as Difficulty[]).map((d) => {
                const colors = {
                  easy: { bg: "bg-green-600/15", border: "border-green-600/40", text: "text-green-800" },
                  medium: { bg: "bg-blue-600/15", border: "border-blue-600/40", text: "text-blue-800" },
                  hard: { bg: "bg-red-600/15", border: "border-red-600/40", text: "text-red-800" },
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
            className="flex-1 flex flex-col relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* HUD — removed, score is rendered on canvas */}

            {/* Canvas + overlay buttons */}
            <div className="flex-1 relative touch-none">
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ touchAction: "none" }}
              />
              {/* Exit button */}
              <button
                onClick={() => { setAvatarMood("idle"); setScreen("menu"); }}
                className="absolute top-2 right-2 z-10 px-3 py-1.5 rounded-lg bg-white/90 text-black/70 font-bold text-xs shadow-md hover:bg-white transition-colors"
              >
                {lang === "hu" ? "VÉGE" : lang === "de" ? "ENDE" : lang === "ro" ? "SFÂRȘIT" : "END"}
              </button>
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
              className={`text-3xl font-black ${ps > as_ ? "text-green-700" : "text-red-600"}`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {ps > as_ ? t.won : t.lost}
            </motion.div>

            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-black/40 text-xs">{t.you}</span>
                <span className="text-2xl font-black text-red-600">{ps}</span>
              </div>
              <span className="text-black/20 text-sm font-bold">—</span>
              <div className="flex flex-col items-center">
                <span className="text-black/40 text-xs">{t.ai}</span>
                <span className="text-2xl font-black text-blue-600">{as_}</span>
              </div>
            </div>

            {earnedCard && (
              <div className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                earnedCard === "legendary" ? "bg-yellow-500/20 text-yellow-700" :
                earnedCard === "gold" ? "bg-yellow-400/20 text-yellow-600" :
                earnedCard === "silver" ? "bg-gray-400/20 text-gray-600" :
                "bg-amber-700/20 text-amber-800"
              }`}>
                {earnedCard.toUpperCase()} card
              </div>
            )}

            <div className="flex flex-col gap-2 w-full max-w-xs mt-2">
              <motion.button
                onClick={() => startGame(difficulty)}
                className="py-3 rounded-xl bg-green-700/15 border border-green-700/40 text-green-800 font-bold text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.playAgain}
              </motion.button>
              <Link
                href="/"
                className="py-3 rounded-xl bg-black/5 border border-black/10 text-black/50 font-bold text-sm text-center"
              >
                {t.back}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Milestone popup */}
      {milestones.length > 0 && <MilestonePopup />}
    </div>
  );
}

// ─── Game State Type ─────────────────────────────────────────
interface GameState {
  playerX: number;
  aiX: number;
  aiTargetX: number;
  ballX: number;
  ballY: number;
  ballVX: number;
  ballVY: number;
  ballSpeed: number;
  serving: boolean;
  serveTimer: number;
  playerServes: boolean;
  rallyCount: number;
  particles: Particle[];
  gameOver: boolean;
  lastHitTime: number;
}
