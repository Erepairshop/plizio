"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MeteorCatchRound } from "@/lib/visualLab/multilingualTypes";
import { getLanguage } from "@/lib/language";

const MAX_CONCURRENT = 3;

type Meteor = {
  id: string;
  isCorrect: boolean;
  label: string;
  emoji?: string;
  left: number;
  duration: number;
  delay: number;
};

interface Props {
  round: MeteorCatchRound;
  onDone?: (score: number, total: number) => void;
}

const KEYFRAMES = `
  @keyframes meteor-fall {
    0% { transform: translateY(-50px) scale(0.5); opacity: 0; }
    5% { opacity: 1; transform: translateY(20px) scale(1); }
    95% { opacity: 1; }
    100% { transform: translateY(650px) scale(1); opacity: 0; }
  }
  @keyframes pop-out {
    0% { transform: scale(1); opacity: 1; }
    40% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(0); opacity: 0; }
  }
  @keyframes shake-error {
    0% { transform: translateX(0); opacity: 1; }
    20% { transform: translateX(-12px) rotate(-5deg); }
    40% { transform: translateX(12px) rotate(5deg); }
    60% { transform: translateX(-12px) rotate(-5deg); }
    80% { transform: translateX(12px) rotate(5deg); }
    100% { transform: translateX(0); opacity: 0; }
  }
`;

function generateMeteor(round: MeteorCatchRound, idCounter: number, lang: string, isInitial = false, index = 0): Meteor {
  const isCorrect = Math.random() > 0.4;
  const pool = isCorrect ? round.correctItems : round.wrongItems;
  const item = pool[Math.floor(Math.random() * pool.length)];

  const left = 10 + Math.random() * 65;
  const baseDuration = 18 - Math.min(round.speed || 5, 8);
  const duration = baseDuration + (Math.random() * 4 - 2);
  const delay = isInitial ? index * 2.0 + Math.random() * 0.5 : Math.random() * 1.5;

  return {
    id: `${item.id}-${idCounter}-${Date.now()}`,
    isCorrect,
    label: (item.label as any)[lang] || item.label["de"] || "???",
    emoji: item.emoji,
    left,
    duration: Math.max(6, duration),
    delay,
  };
}

function MeteorItem({
  meteor,
  onClick,
  onEnd,
}: {
  meteor: Meteor;
  onClick: (m: Meteor) => void;
  onEnd: (id: string) => void;
}) {
  const [status, setStatus] = useState<"falling" | "caught" | "error">("falling");

  const handleClick = () => {
    if (status !== "falling") return;
    setStatus(meteor.isCorrect ? "caught" : "error");
    onClick(meteor);
  };

  return (
    <div
      onAnimationEnd={(e) => {
        if (e.animationName === "meteor-fall") onEnd(meteor.id);
      }}
      className="absolute"
      style={{
        left: `${meteor.left}%`,
        top: "-80px",
        animation: `meteor-fall ${meteor.duration}s linear ${meteor.delay}s forwards`,
        animationPlayState: status === "falling" ? "running" : "paused",
        opacity: 0,
        zIndex: status === "falling" ? 10 : 20,
      }}
    >
      <button
        type="button"
        onClick={handleClick}
        onAnimationEnd={(e) => {
          if (e.animationName === "pop-out" || e.animationName === "shake-error") {
            onEnd(meteor.id);
          }
        }}
        className="group flex flex-col items-center justify-center gap-2 focus:outline-none"
        style={{
          animation:
            status === "caught"
              ? "pop-out 0.5s ease-out forwards"
              : status === "error"
              ? "shake-error 0.5s ease-out forwards"
              : "none",
        }}
      >
        <div
          className={`relative flex h-[72px] w-[72px] items-center justify-center rounded-3xl border border-white/20 shadow-2xl backdrop-blur-md transition-colors duration-300
          ${
            status === "falling"
              ? "bg-white/10 hover:bg-white/25"
              : status === "caught"
              ? "border-emerald-300 bg-emerald-500/90"
              : "border-rose-300 bg-rose-600/90"
          }
        `}
        >
          <span className="text-4xl drop-shadow-lg">{meteor.emoji || "☄️"}</span>
          <div
            className={`absolute -inset-3 -z-10 rounded-[2rem] blur-xl transition-all duration-300
             ${
               status === "falling"
                 ? "bg-blue-400/20 opacity-0 group-hover:opacity-50"
                 : status === "caught"
                 ? "bg-emerald-400 opacity-80"
                 : "bg-rose-500 opacity-80"
             }
          `}
          />
        </div>
        <div className="rounded-full bg-black/60 px-3 py-1 text-[13px] font-bold tracking-wide text-white/90 shadow-lg backdrop-blur-md">
          {meteor.label}
        </div>
      </button>
    </div>
  );
}

export default function MultilingualMeteorCatchGame({ round, onDone }: Props) {
  const totalNeeded = round.goal;
  const [lang, setLang] = useState("de");
  const [caught, setCaught] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const idRef = useRef(0);
  const processedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    setLang(getLanguage());
  }, []);

  // Initial spawn
  useEffect(() => {
    if (!lang) return;
    processedRef.current = new Set();
    idRef.current = MAX_CONCURRENT;
    setMeteors(Array.from({ length: MAX_CONCURRENT }, (_, i) => generateMeteor(round, i, lang, true, i)));
  }, [round, lang]);

  const handleEnd = useCallback(
    (id: string) => {
      if (processedRef.current.has(id)) return;
      processedRef.current.add(id);

      setMeteors((prev) => {
        const filtered = prev.filter((m) => m.id !== id);
        if (filtered.length < MAX_CONCURRENT) {
          idRef.current += 1;
          return [...filtered, generateMeteor(round, idRef.current, lang, false, 0)];
        }
        return filtered;
      });
    },
    [round, lang]
  );

  const handleMeteorClick = useCallback((meteor: Meteor) => {
    if (meteor.isCorrect) setCaught((c) => c + 1);
    else setMistakes((m) => m + 1);
  }, []);

  useEffect(() => {
    if (caught >= totalNeeded) {
      const timer = setTimeout(() => {
        onDone?.(Math.max(totalNeeded - mistakes, 0), totalNeeded);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [caught, mistakes, onDone, totalNeeded]);

  const progress = Math.min((caught / totalNeeded) * 100, 100);
  const currentTitle = (round.title as any)[lang] || round.title["de"];
  const currentPrompt = (round.prompt as any)[lang] || round.prompt["de"];

  return (
    <div
      className="relative overflow-hidden rounded-[32px] border p-5 text-white shadow-2xl"
      style={{
        background: `radial-gradient(circle at 50% 0%, ${round.theme.glow}40 0%, ${round.theme.sky} 60%, #07111f 100%)`,
        borderColor: "rgba(255,255,255,0.1)",
        minHeight: 580,
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white/50">
            Multilingual Meteor Catch
          </p>
          <h2 className="text-xl font-black sm:text-2xl">{currentTitle}</h2>
          <p className="mt-1 text-sm font-medium text-white/80">{currentPrompt}</p>
        </div>
        
        <div
          className="flex min-w-[80px] flex-col items-center justify-center rounded-2xl px-4 py-2"
          style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(12px)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Miss</p>
          <p className="text-xl font-black text-rose-300">{mistakes}</p>
        </div>
      </div>

      <div className="relative z-10 mt-5 h-3 overflow-hidden rounded-full bg-black/40 shadow-inner">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%`, background: round.theme.accent }}
        />
      </div>

      <div className="relative mt-6 h-[420px] overflow-hidden rounded-[24px] border border-white/10 bg-black/20 shadow-inner">
        <div className="absolute inset-x-6 bottom-5 z-0 rounded-2xl border border-white/5 bg-black/40 px-5 py-3 text-center text-sm font-semibold text-white/70 backdrop-blur-md">
          {caught >= totalNeeded ? "Level Complete!" : "Catch the correct objects!"}
        </div>

        {meteors.map((meteor) => (
          <MeteorItem
            key={meteor.id}
            meteor={meteor}
            onClick={handleMeteorClick}
            onEnd={handleEnd}
          />
        ))}
      </div>
    </div>
  );
}
