"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Lang = "de" | "hu" | "ro" | "en";

interface Problem {
  expr: string;
  ans: number;
}

function generateProblem(grade: number): Problem {
  if (grade <= 1) {
    // Add within 10
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    return { expr: `${a} + ${b}`, ans: a + b };
  }
  if (grade === 2) {
    // Add/Sub within 20
    if (Math.random() > 0.5) {
      const a = Math.floor(Math.random() * 10) + 1;
      const b = Math.floor(Math.random() * 10) + 1;
      return { expr: `${a} + ${b}`, ans: a + b };
    } else {
      const a = Math.floor(Math.random() * 10) + 10;
      const b = Math.floor(Math.random() * 10) + 1;
      return { expr: `${a} - ${b}`, ans: a - b };
    }
  }
  if (grade === 3) {
    // Multiplication 1-10
    const a = Math.floor(Math.random() * 9) + 2;
    const b = Math.floor(Math.random() * 9) + 2;
    return { expr: `${a} × ${b}`, ans: a * b };
  }
  if (grade === 4) {
    // Mult/Div
    if (Math.random() > 0.5) {
      const a = Math.floor(Math.random() * 9) + 3;
      const b = Math.floor(Math.random() * 9) + 3;
      return { expr: `${a} × ${b}`, ans: a * b };
    } else {
      const b = Math.floor(Math.random() * 8) + 2;
      const ans = Math.floor(Math.random() * 9) + 2;
      return { expr: `${b * ans} ÷ ${b}`, ans };
    }
  }
  // Grade 5+ (Harder)
  if (Math.random() > 0.6) {
    const a = Math.floor(Math.random() * 15) + 5;
    const b = Math.floor(Math.random() * 15) + 5;
    return { expr: `${a} × ${b}`, ans: a * b };
  } else {
    const a = Math.floor(Math.random() * 40) + 20;
    const b = Math.floor(Math.random() * 40) + 20;
    return { expr: `${a} + ${b}`, ans: a + b };
  }
}

interface Enemy {
  uid: number;
  prob: Problem;
  x: number;
  y: number;
  vy: number;
  rot: number;
  rotSpeed: number;
  color: string;
  state: "alive" | "dying" | "dead";
  stateAt: number;
}

interface Laser {
  uid: number;
  x: number;
  y: number;
  t: number; // spawn time
}

const T: Record<Lang, Record<string, string>> = {
  de: {
    title: "Astro Defender",
    subtitle: "Verteidige die Basis mit Mathe!",
    start: "Starten",
    score: "Punkte",
    lives: "Leben",
    roundDone: "Runde geschafft!",
    gameOver: "Game Over",
    restart: "Nochmal",
    tryAgain: "Erneut versuchen",
    fire: "FEUER",
    del: "LÖSCHEN",
  },
  hu: {
    title: "Astro Defender",
    subtitle: "Védd meg a bázist matekkal!",
    start: "Kezdés",
    score: "Pont",
    lives: "Élet",
    roundDone: "Győzelem!",
    gameOver: "Vége",
    restart: "Újra",
    tryAgain: "Próbáld újra",
    fire: "TŰZ",
    del: "TÖRLÉS",
  },
  ro: {
    title: "Astro Defender",
    subtitle: "Apără baza cu matematică!",
    start: "Start",
    score: "Scor",
    lives: "Vieți",
    roundDone: "Rundă completă!",
    gameOver: "Game Over",
    restart: "Din nou",
    tryAgain: "Încearcă din nou",
    fire: "FOC",
    del: "ȘTERGE",
  },
  en: {
    title: "Astro Defender",
    subtitle: "Defend the base with math!",
    start: "Start",
    score: "Score",
    lives: "Lives",
    roundDone: "Victory!",
    gameOver: "Game Over",
    restart: "Restart",
    tryAgain: "Try Again",
    fire: "FIRE",
    del: "DEL",
  },
};

const COLORS = ["#F43F5E", "#8B5CF6", "#3B82F6", "#10B981", "#F59E0B", "#EC4899", "#14B8A6"];

interface Props {
  grade: number;
  lang: Lang;
  onDone?: (score: number) => void;
}

export default function MathDefenderGame({ grade, lang, onDone }: Props) {
  const t = T[lang] ?? T.en;

  const [phase, setPhase] = useState<"intro" | "playing" | "won" | "lost">("intro");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [lasers, setLasers] = useState<Laser[]>([]);
  const [input, setInput] = useState("");
  const [shake, setShake] = useState(0);

  const uidRef = useRef(1);
  const frameRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number>(0);

  // Difficulty scaling
  const spawnRate = grade <= 2 ? 3500 : grade <= 4 ? 2800 : 2000;
  const gravity = grade <= 2 ? 2.5 : grade <= 4 ? 3.5 : 4.5;
  const WIN_SCORE = Math.max(5, grade) * 10; // min 5 helyes, K6+=grade×1

  const start = useCallback(() => {
    setScore(0);
    setLives(3);
    setEnemies([]);
    setLasers([]);
    setInput("");
    setPhase("playing");
  }, []);

  // Spawner
  useEffect(() => {
    if (phase !== "playing") return;
    const interval = setInterval(() => {
      setEnemies((prev) => {
        // limit on screen
        if (prev.filter(e => e.state === "alive").length >= 5) return prev;
        const e: Enemy = {
          uid: uidRef.current++,
          prob: generateProblem(grade),
          x: 15 + Math.random() * 70,
          y: -10, // top of svg
          vy: gravity + Math.random() * 2,
          rot: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 20,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          state: "alive",
          stateAt: performance.now(),
        };
        return [...prev, e];
      });
    }, spawnRate);
    return () => clearInterval(interval);
  }, [phase, grade, spawnRate, gravity]);

  // Physics loop
  useEffect(() => {
    if (phase !== "playing") return;
    const step = (ts: number) => {
      const last = lastFrameRef.current || ts;
      const dt = Math.min(48, ts - last) / 1000;
      lastFrameRef.current = ts;

      setEnemies((prev) => {
        let hitBottom = false;
        const next = prev.map((e) => {
          if (e.state === "dying") {
            if (ts - e.stateAt > 600) return { ...e, state: "dead" as const };
            return e;
          }
          if (e.state === "dead") return e;

          const ny = e.y + e.vy * dt;
          const nr = e.rot + e.rotSpeed * dt;
          if (ny > 115) {
            hitBottom = true;
            return { ...e, state: "dying" as const, stateAt: ts };
          }
          return { ...e, y: ny, rot: nr };
        });

        if (hitBottom) {
          setLives((l) => {
            const nl = Math.max(0, l - 1);
            if (nl <= 0) setTimeout(() => setPhase("lost"), 100);
            return nl;
          });
          setShake(Date.now());
        }
        return next.filter(e => e.state !== "dead");
      });

      setLasers((prev) => prev.filter(l => ts - l.t < 200));

      frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      lastFrameRef.current = 0;
    };
  }, [phase]);

  // Win condition
  useEffect(() => {
    if (phase === "playing" && score >= WIN_SCORE) {
      setPhase("won");
      onDone?.(score);
    }
  }, [score, phase, onDone]);

  const handleInput = (val: string) => {
    if (phase !== "playing") return;
    if (input.length < 4) setInput(input + val);
  };

  const handleDel = () => {
    setInput(input.slice(0, -1));
  };

  const handleFire = () => {
    if (!input || phase !== "playing") return;
    const num = parseInt(input, 10);
    
    // Find the lowest enemy that matches the answer
    let target: Enemy | null = null;
    for (const e of enemies) {
      if (e.state === "alive" && e.prob.ans === num) {
        if (!target || e.y > target.y) {
          target = e;
        }
      }
    }

    if (target) {
      // Hit!
      const tid = target.uid;
      setEnemies((prev) => prev.map(e => e.uid === tid ? { ...e, state: "dying", stateAt: performance.now() } : e));
      setLasers((prev) => [...prev, { uid: uidRef.current++, x: target!.x, y: target!.y, t: performance.now() }]);
      setScore(s => s + 10);
      setInput("");
    } else {
      // Miss (wrong answer)
      setInput("");
      // optionally deduct points or just flash red
      setShake(Date.now());
    }
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (phase !== "playing") return;
      if (e.key >= "0" && e.key <= "9") handleInput(e.key);
      else if (e.key === "Backspace" || e.key === "Delete") handleDel();
      else if (e.key === "Enter") handleFire();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="relative w-full max-w-2xl mx-auto flex flex-col gap-4">
      {/* Viewport */}
      <motion.div
        className="relative rounded-[24px] border border-cyan-500/20 overflow-hidden shadow-2xl"
        style={{ aspectRatio: "4/3", background: "linear-gradient(180deg, #050b14 0%, #0b1c3a 100%)" }}
        animate={shake ? { x: [-4, 4, -4, 4, 0] } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Grid Background */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(34, 211, 238, .3) 25%, rgba(34, 211, 238, .3) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, .3) 75%, rgba(34, 211, 238, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(34, 211, 238, .3) 25%, rgba(34, 211, 238, .3) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, .3) 75%, rgba(34, 211, 238, .3) 76%, transparent 77%, transparent)",
            backgroundSize: "40px 40px",
            transform: "perspective(200px) rotateX(60deg)",
            transformOrigin: "bottom"
          }}
        />

        {/* HUD */}
        <div className="absolute top-3 left-4 right-4 flex justify-between text-white z-20 pointer-events-none">
          <div className="bg-black/40 backdrop-blur rounded-full px-3 py-1 flex gap-2 items-center border border-white/10">
            <span className="text-white/50 text-[10px] uppercase font-bold">{t.score}</span>
            <span className="text-cyan-300 font-black">{score}</span>
          </div>
          <div className="bg-black/40 backdrop-blur rounded-full px-3 py-1 flex gap-2 items-center border border-white/10">
            <span className="text-white/50 text-[10px] uppercase font-bold">{t.lives}</span>
            <span className="text-rose-400 text-lg leading-none tracking-widest">{"❤".repeat(lives)}</span>
          </div>
        </div>

        {/* Game SVG */}
        <svg viewBox="0 0 100 130" className="absolute inset-0 w-full h-full z-10 pointer-events-none">
          <defs>
            <radialGradient id="asteroid-grad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1e293b" />
            </radialGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Player Turret */}
          <g transform="translate(50, 125)">
            <polygon points="-8,5 0,-6 8,5" fill="#22d3ee" />
            <circle cx="0" cy="5" r="4" fill="#0ea5e9" />
            <polygon points="-12,8 12,8 0,0" fill="#0369a1" />
          </g>

          {/* Lasers */}
          {lasers.map((l) => (
            <line
              key={l.uid}
              x1="50" y1="120" x2={l.x} y2={l.y}
              stroke="#a855f7" strokeWidth="1.5"
              filter="url(#glow)"
              strokeDasharray="4 2"
              opacity={1 - (performance.now() - l.t) / 200}
            />
          ))}

          {/* Enemies */}
          {enemies.map((e) => {
            if (e.state === "dying") {
              const p = (performance.now() - e.stateAt) / 600;
              return (
                <g key={e.uid} transform={`translate(${e.x}, ${e.y})`}>
                  <circle r={6 + p * 15} fill={e.color} opacity={1 - p} filter="url(#glow)" />
                  <circle r={4 + p * 10} fill="#fff" opacity={1 - p} />
                </g>
              );
            }
            return (
              <g key={e.uid} transform={`translate(${e.x}, ${e.y}) rotate(${e.rot})`}>
                <circle r="8" fill="url(#asteroid-grad)" stroke={e.color} strokeWidth="0.8" />
                {/* Craters */}
                <circle cx="-3" cy="-2" r="2" fill="#0f172a" opacity="0.5" />
                <circle cx="3" cy="3" r="1.5" fill="#0f172a" opacity="0.5" />
                
                {/* Equation Text */}
                <text
                  x="0" y="0" textAnchor="middle" dominantBaseline="central"
                  fill="#f8fafc" fontSize="4.5" fontWeight="bold"
                  style={{ transform: `rotate(${-e.rot}deg)` }}
                >
                  {e.prob.expr}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Input preview overlay */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20 pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md border border-cyan-400/50 rounded-xl px-6 py-2 min-w-[120px] text-center shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            <span className="text-3xl font-black text-cyan-50 tracking-widest">{input || "_"}</span>
          </div>
        </div>

        {/* Overlays */}
        {phase === "intro" && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              {t.title}
            </h1>
            <p className="text-white/70 mb-8">{t.subtitle}</p>
            <button
              onClick={start}
              className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg transition-transform active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              {t.start}
            </button>
          </div>
        )}

        {(phase === "won" || phase === "lost") && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-6 text-center">
            <h1 className={`text-4xl font-black mb-4 ${phase === "won" ? "text-emerald-400" : "text-rose-500"}`}>
              {phase === "won" ? t.roundDone : t.gameOver}
            </h1>
            <div className="text-white/50 uppercase text-sm font-bold tracking-widest">{t.score}</div>
            <div className="text-5xl font-black text-white mb-8 tabular-nums">{score}</div>
            <button
              onClick={start}
              className="px-8 py-3 rounded-full bg-white hover:bg-gray-200 text-black font-bold text-lg transition-transform active:scale-95"
            >
              {phase === "won" ? t.start : t.tryAgain}
            </button>
          </div>
        )}
      </motion.div>

      {/* Control Pad */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 p-4 rounded-[24px] border border-white/5 bg-[#090e1a]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <button
            key={n}
            onClick={() => handleInput(n.toString())}
            className="h-14 sm:h-16 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/20 text-white font-bold text-2xl transition-colors border border-white/10"
          >
            {n}
          </button>
        ))}
        <button
          onClick={handleDel}
          className="h-14 sm:h-16 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 active:bg-rose-500/30 text-rose-400 font-bold text-lg sm:text-xl transition-colors border border-rose-500/20"
        >
          {t.del}
        </button>
        <button
          onClick={() => handleInput("0")}
          className="h-14 sm:h-16 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/20 text-white font-bold text-2xl transition-colors border border-white/10"
        >
          0
        </button>
        <button
          onClick={handleFire}
          className="h-14 sm:h-16 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 active:bg-cyan-500/40 text-cyan-300 font-black text-lg sm:text-xl transition-colors border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
        >
          {t.fire}
        </button>
      </div>
    </div>
  );
}
