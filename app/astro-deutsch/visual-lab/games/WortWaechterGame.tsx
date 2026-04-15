"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { WortWaechterRound, Language } from "@/lib/visualLab/languageTypes";

interface Props {
  grade: number;
  lang: Language;
  round: WortWaechterRound;
  onDone?: (score: number) => void;
}

const T = {
  de: { score: "Punkte", lives: "Leben", gameOver: "Game Over", success: "Klasse!", target: "Finde:" },
  hu: { score: "Pont", lives: "Élet", gameOver: "Vége", success: "Szuper!", target: "Keresd:" },
  ro: { score: "Scor", lives: "Vieți", gameOver: "Game Over", success: "Bravo!", target: "Găsește:" },
  en: { score: "Score", lives: "Lives", gameOver: "Game Over", success: "Great!", target: "Find:" }
};

interface Bubble {
  id: number;
  word: string;
  isCorrect: boolean;
  x: number;
  y: number;
  vx: number;
  vy: number;
  popped: boolean;
}

export default function WortWaechterGame({ grade, lang, round, onDone }: Props) {
  const t = T[lang] ?? T.de;
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [status, setStatus] = useState<"playing" | "won" | "lost">("playing");
  
  const uidRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  // Spawner
  useEffect(() => {
    if (status !== "playing") return;
    const interval = setInterval(() => {
      setBubbles((prev) => {
        if (prev.filter(b => !b.popped).length >= 6) return prev;
        
        const isCorrect = Math.random() > 0.6;
        const word = isCorrect 
          ? round.targetWord 
          : round.wrongWords[Math.floor(Math.random() * round.wrongWords.length)];
          
        const newBubble: Bubble = {
          id: uidRef.current++,
          word,
          isCorrect,
          x: 10 + Math.random() * 80,
          y: 110,
          vx: (Math.random() - 0.5) * 20,
          vy: -30 - Math.random() * 20,
          popped: false
        };
        return [...prev, newBubble];
      });
    }, 1500 - Math.min(grade * 100, 800));
    return () => clearInterval(interval);
  }, [status, round, grade]);

  // Physics
  useEffect(() => {
    if (status !== "playing") return;
    let lastTs = performance.now();
    
    const step = (ts: number) => {
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      
      setBubbles(prev => {
        let lifeLost = false;
        const next = prev.map(b => {
          if (b.popped) return b;
          const ny = b.y + b.vy * dt;
          const nx = b.x + b.vx * dt;
          
          if (ny < -10) {
            if (b.isCorrect) lifeLost = true;
            return { ...b, popped: true };
          }
          return { ...b, x: nx, y: ny };
        });
        
        if (lifeLost) {
          setLives(l => {
            const nl = l - 1;
            if (nl <= 0) setStatus("lost");
            return nl;
          });
        }
        return next;
      });
      
      frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [status]);

  useEffect(() => {
    if (score >= 100 && status === "playing") {
      setStatus("won");
      onDone?.(score);
    }
  }, [score, status, onDone]);

  useEffect(() => {
    if (status === "lost") {
      onDone?.(score);
    }
  }, [status, score, onDone]);

  const handlePop = (b: Bubble) => {
    if (status !== "playing" || b.popped) return;
    setBubbles(prev => prev.map(p => p.id === b.id ? { ...p, popped: true } : p));
    if (b.isCorrect) {
      setScore(s => s + 10);
    } else {
      setLives(l => {
        const nl = l - 1;
        if (nl <= 0) setStatus("lost");
        return nl;
      });
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-[24px] overflow-hidden shadow-2xl" style={{ background: round.theme.bg, aspectRatio: "4/3" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 50% 120%, ${round.theme.accent}40, transparent 60%)` }} />
      
      {/* HUD */}
      <div className="absolute top-4 left-4 right-4 flex justify-between text-white z-20">
        <div className="flex gap-4">
          <div className="bg-black/40 px-3 py-1 rounded-full border border-white/10">
            <span className="text-white/50 text-xs mr-2">{t.score}</span>
            <span className="font-bold text-cyan-300">{score}</span>
          </div>
        </div>
        <div className="bg-black/40 px-3 py-1 rounded-full border border-white/10">
           <span className="text-white/50 text-xs mr-2">{t.lives}</span>
           <span className="text-rose-400 tracking-widest">{"❤".repeat(Math.max(0, lives))}</span>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-6 py-2 rounded-full border border-white/20 z-20">
         <span className="text-white/70 mr-2">{t.target}</span>
         <span className="text-white font-bold text-xl">{round.targetWord}</span>
      </div>

      {/* SVG Canvas */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        <AnimatePresence>
          {bubbles.map(b => !b.popped && (
            <motion.g 
              key={b.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transform={`translate(${b.x} ${b.y})`}
              style={{ pointerEvents: "auto", cursor: "pointer" }}
              onClick={() => handlePop(b)}
            >
              <circle r="8" fill="#1e293b" stroke={round.theme.accent} strokeWidth="0.5" opacity="0.8" />
              <text textAnchor="middle" dominantBaseline="central" fill="white" fontSize="3" fontWeight="bold">
                {b.word}
              </text>
            </motion.g>
          ))}
        </AnimatePresence>
      </svg>

      {status !== "playing" && (
        <div className="absolute inset-0 z-50 bg-black/80 flex flex-col items-center justify-center">
          <h2 className={`text-4xl font-black mb-4 ${status === "won" ? "text-emerald-400" : "text-rose-500"}`}>
            {status === "won" ? t.success : t.gameOver}
          </h2>
          <p className="text-white text-xl">{t.score}: {score}</p>
        </div>
      )}
    </div>
  );
}
