"use client";

import { useEffect, useMemo, useState } from "react";
import type { MemoryRadarRound, VisualLabItem } from "@/lib/visualLab/types";

interface Props {
  rounds: MemoryRadarRound[];
  onDone?: (score: number, total: number) => void;
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function RoundView({
  round,
  roundIndex,
  totalRounds,
  onRoundDone,
}: {
  round: MemoryRadarRound;
  roundIndex: number;
  totalRounds: number;
  onRoundDone: (score: number, total: number) => void;
}) {
  const grid = useMemo<VisualLabItem[]>(
    () => shuffle([...round.targetItems, ...round.decoyItems]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [round.id],
  );
  const [phase, setPhase] = useState<"flash" | "select" | "done">("flash");
  const [selected, setSelected] = useState<string[]>([]);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    setPhase("flash");
    setSelected([]);
    setTriggered(false);
  }, [round.id]);

  useEffect(() => {
    if (phase !== "flash") return;
    const t = window.setTimeout(() => setPhase("select"), round.flashDurationMs);
    return () => window.clearTimeout(t);
  }, [phase, round.flashDurationMs]);

  useEffect(() => {
    if (triggered || phase !== "select" || selected.length !== round.selectionLimit) return;
    setTriggered(true);
    setPhase("done");
  }, [triggered, phase, selected.length, round.selectionLimit]);

  const roundScore = selected.filter((id) => round.targetItems.some((item) => item.id === id)).length;
  const isLast = roundIndex === totalRounds - 1;

  if (phase === "done") {
    return (
      <div
        className="rounded-[30px] border p-6 text-white shadow-2xl flex flex-col items-center gap-4"
        style={{
          background: `radial-gradient(circle at top, ${round.theme.radar}22 0%, ${round.theme.bg} 70%, #040816 100%)`,
          borderColor: "rgba(255,255,255,0.12)",
        }}
      >
        <div className="flex items-center gap-3 w-full">
          <p className="text-xs uppercase tracking-[0.22em] text-white/45 flex-1">Memory Radar</p>
          <p className="text-xs text-white/40">{roundIndex + 1}/{totalRounds}</p>
        </div>
        <div className="text-5xl font-black" style={{ color: round.theme.accent }}>
          {roundScore}/{round.targetItems.length}
        </div>
        <p className="text-white/70 text-sm text-center">
          {roundScore === round.targetItems.length ? "🎯 Perfekt!" : roundScore > 0 ? "👍 Gut gemacht!" : "❌ Versuch es nochmal!"}
        </p>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 w-full">
          {grid.map((item) => {
            const isTarget = round.targetItems.some((e) => e.id === item.id);
            const wasSelected = selected.includes(item.id);
            const isCorrect = isTarget && wasSelected;
            const isMissed = isTarget && !wasSelected;
            const isFalseAlarm = !isTarget && wasSelected;
            return (
              <div
                key={item.id}
                className="aspect-square rounded-[20px] border p-2 flex flex-col items-center justify-center text-center"
                style={{
                  background: isCorrect ? "rgba(34,197,94,0.2)" : isMissed ? "rgba(234,179,8,0.15)" : isFalseAlarm ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.04)",
                  borderColor: isCorrect ? "rgba(34,197,94,0.6)" : isMissed ? "rgba(234,179,8,0.5)" : isFalseAlarm ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)",
                }}
              >
                <p className="text-2xl">{item.emoji ?? "◉"}</p>
                <p className="text-xs font-semibold mt-1 text-white/80">{item.label}</p>
                <p className="text-xs mt-0.5">{isCorrect ? "✓" : isMissed ? "○" : isFalseAlarm ? "✗" : ""}</p>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => onRoundDone(roundScore, round.targetItems.length)}
          className="mt-1 px-8 py-3 rounded-2xl font-bold text-white text-base active:scale-95 transition"
          style={{ background: round.theme.accent }}
        >
          {isLast ? "Fertig 🏁" : "Weiter →"}
        </button>
      </div>
    );
  }

  return (
    <div
      className="rounded-[30px] border p-4 text-white shadow-2xl"
      style={{
        background: `radial-gradient(circle at top, ${round.theme.radar}22 0%, ${round.theme.bg} 70%, #040816 100%)`,
        borderColor: "rgba(255,255,255,0.12)",
      }}
    >
      <div className="mb-3 flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/45">Memory Radar</p>
          <h2 className="text-xl font-black">{round.title}</h2>
          <p className="mt-1 text-sm text-white/75">{round.instruction}</p>
        </div>
        <span className="text-xs text-white/40 mt-1">{roundIndex + 1}/{totalRounds}</span>
      </div>

      <div className="mb-4 rounded-[24px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
        {phase === "flash" && "Merke dir die leuchtenden Ziele! ⚡"}
        {phase === "select" && `Wähle genau ${round.selectionLimit} Elemente aus.`}
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {grid.map((item) => {
          const isTarget = round.targetItems.some((e) => e.id === item.id);
          const isSelected = selected.includes(item.id);
          const showGlow = phase === "flash" && isTarget;
          return (
            <button
              key={item.id}
              type="button"
              disabled={phase !== "select" || (selected.length >= round.selectionLimit && !isSelected)}
              onClick={() =>
                setSelected((cur) =>
                  cur.includes(item.id) ? cur.filter((e) => e !== item.id) : [...cur, item.id],
                )
              }
              className="aspect-square rounded-[24px] border p-3 transition active:scale-95"
              style={{
                background: showGlow ? `${round.theme.accent}55` : isSelected ? "rgba(34,197,94,0.25)" : "rgba(255,255,255,0.06)",
                borderColor: showGlow ? round.theme.accent : isSelected ? "rgba(34,197,94,0.7)" : "rgba(255,255,255,0.1)",
                boxShadow: showGlow ? `0 0 24px ${round.theme.accent}` : "none",
              }}
            >
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="text-3xl">{item.emoji ?? "◉"}</p>
                <p className="mt-2 text-sm font-semibold">{phase === "flash" ? item.label : "?"}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function MemoryRadarGame({ rounds, onDone }: Props) {
  const [roundIndex, setRoundIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [totalPossible, setTotalPossible] = useState(0);
  const [finished, setFinished] = useState(false);

  const activeRounds = rounds.slice(0, 3);

  const handleRoundDone = (score: number, total: number) => {
    const newScore = totalScore + score;
    const newTotal = totalPossible + total;
    setTotalScore(newScore);
    setTotalPossible(newTotal);
    if (roundIndex + 1 >= activeRounds.length) {
      setFinished(true);
      onDone?.(newScore, newTotal);
    } else {
      setRoundIndex((i) => i + 1);
    }
  };

  if (finished) {
    const pct = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;
    return (
      <div className="rounded-[30px] border border-white/10 p-8 text-white shadow-2xl flex flex-col items-center gap-5 bg-[#080e1f]">
        <p className="text-xs uppercase tracking-[0.22em] text-white/40">Memory Radar</p>
        <div className="text-6xl">🏁</div>
        <div className="text-4xl font-black text-emerald-400">{totalScore}/{totalPossible}</div>
        <div className="text-lg text-white/60">{pct}%</div>
        <p className="text-white/70 text-center">
          {pct === 100 ? "🎯 Perfekt — alle Runden gemeistert!" : pct >= 66 ? "👍 Sehr gut!" : pct >= 33 ? "💪 Weiter üben!" : "❌ Nochmal versuchen!"}
        </p>
        <button
          onClick={() => { setRoundIndex(0); setTotalScore(0); setTotalPossible(0); setFinished(false); }}
          className="px-8 py-3 rounded-2xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition"
        >
          Nochmal spielen 🔄
        </button>
      </div>
    );
  }

  const round = activeRounds[roundIndex];
  if (!round) return null;

  return (
    <RoundView
      key={round.id}
      round={round}
      roundIndex={roundIndex}
      totalRounds={activeRounds.length}
      onRoundDone={handleRoundDone}
    />
  );
}
