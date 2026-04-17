"use client";

import { useEffect, useMemo, useState } from "react";
import type { MemoryRadarRound, VisualLabItem } from "@/lib/visualLab/types";

interface Props {
  round: MemoryRadarRound;
  onDone?: (score: number, total: number) => void;
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

export default function MemoryRadarGame({ round, onDone }: Props) {
  const grid = useMemo<VisualLabItem[]>(
    () => shuffle([...round.targetItems, ...round.decoyItems]),
    [round.decoyItems, round.targetItems],
  );
  const [phase, setPhase] = useState<"flash" | "select" | "done">("flash");
  const [selected, setSelected] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setPhase("flash");
    setSelected([]);
    setCompleted(false);
  }, [round]);

  useEffect(() => {
    if (phase !== "flash") return;
    const timer = window.setTimeout(() => setPhase("select"), round.flashDurationMs);
    return () => window.clearTimeout(timer);
  }, [phase, round.flashDurationMs]);

  useEffect(() => {
    if (completed || phase !== "select" || selected.length !== round.selectionLimit) return;
    setCompleted(true);
    setPhase("done");
    const score = selected.filter((id) => round.targetItems.some((item) => item.id === id)).length;
    onDone?.(score, round.targetItems.length);
  }, [completed, onDone, phase, round.selectionLimit, round.targetItems, selected]);

  const score =
    phase === "done"
      ? selected.filter((id) => round.targetItems.some((item) => item.id === id)).length
      : 0;

  if (phase === "done") {
    return (
      <div
        className="rounded-[30px] border p-6 text-white shadow-2xl flex flex-col items-center gap-5"
        style={{
          background: `radial-gradient(circle at top, ${round.theme.radar}22 0%, ${round.theme.bg} 70%, #040816 100%)`,
          borderColor: "rgba(255,255,255,0.12)",
        }}
      >
        <p className="text-xs uppercase tracking-[0.22em] text-white/45">Memory Radar</p>
        <div className="text-5xl font-black" style={{ color: round.theme.accent }}>
          {score}/{round.targetItems.length}
        </div>
        <p className="text-white/70 text-sm text-center">
          {score === round.targetItems.length ? "🎯 Perfekt!" : score > 0 ? "👍 Gut gemacht!" : "❌ Versuch es nochmal!"}
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
          onClick={() => { setPhase("flash"); setSelected([]); setCompleted(false); onDone?.(score, round.targetItems.length); }}
          className="mt-2 px-8 py-3 rounded-2xl font-bold text-white text-base active:scale-95 transition"
          style={{ background: round.theme.accent }}
        >
          Weiter →
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
      <div className="mb-4">
        <p className="text-xs uppercase tracking-[0.22em] text-white/45">Memory Radar</p>
        <h2 className="text-xl font-black">{round.title}</h2>
        <p className="mt-1 text-sm text-white/75">{round.instruction}</p>
      </div>

      <div className="mb-4 rounded-[24px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
        {phase === "flash" && "Merke dir die leuchtenden Ziele."}
        {phase === "select" && `Wähle genau ${round.selectionLimit} Elemente aus.`}
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
        {grid.map((item) => {
          const isTarget = round.targetItems.some((entry) => entry.id === item.id);
          const isSelected = selected.includes(item.id);
          const showGlow = phase === "flash" && isTarget;
          return (
            <button
              key={item.id}
              type="button"
              disabled={phase !== "select" || (selected.length >= round.selectionLimit && !isSelected)}
              onClick={() =>
                setSelected((current) =>
                  current.includes(item.id)
                    ? current.filter((entry) => entry !== item.id)
                    : [...current, item.id],
                )
              }
              className="aspect-square rounded-[24px] border p-3 transition active:scale-95"
              style={{
                background: showGlow
                  ? `${round.theme.accent}55`
                  : isSelected
                    ? "rgba(34,197,94,0.25)"
                    : "rgba(255,255,255,0.06)",
                borderColor: showGlow
                  ? round.theme.accent
                  : isSelected
                    ? "rgba(34,197,94,0.7)"
                    : "rgba(255,255,255,0.1)",
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
