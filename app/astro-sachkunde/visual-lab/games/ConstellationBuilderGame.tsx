"use client";

import { useEffect, useMemo, useState } from "react";
import type { ConstellationBuilderRound, ConstellationPart } from "@/lib/visualLab/types";

interface Props {
  round: ConstellationBuilderRound;
  onDone?: (score: number, total: number) => void;
}

export default function ConstellationBuilderGame({ round, onDone }: Props) {
  const [selected, setSelected] = useState<ConstellationPart | null>(null);
  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setSelected(null);
    setPlaced({});
    setScore(0);
    setCompleted(false);
  }, [round]);

  const remaining = useMemo(
    () => round.parts.filter((part) => !Object.values(placed).includes(part.id)),
    [placed, round.parts],
  );

  useEffect(() => {
    if (completed || Object.keys(placed).length !== round.slots.length) return;
    setCompleted(true);
    onDone?.(score, round.slots.length);
  }, [completed, onDone, placed, round.slots.length, score]);

  return (
    <div
      className="rounded-[30px] border p-4 text-white shadow-2xl"
      style={{
        background: `radial-gradient(circle at top, ${round.theme.accent}22 0%, ${round.theme.bg} 72%, #040816 100%)`,
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <div className="mb-4">
        <p className="text-xs uppercase tracking-[0.22em] text-white/45">Constellation Builder</p>
        <h2 className="text-xl font-black">{round.title}</h2>
        <p className="mt-1 text-sm text-white/75">{round.instruction}</p>
        <p className="mt-2 text-sm text-cyan-200">{round.hint}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
        <div
          className="rounded-[28px] border p-4"
          style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="grid gap-3">
            {round.slots.map((slot, index) => {
              const placedPartId = placed[slot.id];
              const placedPart = round.parts.find((part) => part.id === placedPartId);
              const isCorrect = placedPart ? round.solution[index] === placedPart.id : false;
              return (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => {
                    if (!selected || completed || placed[slot.id]) return;
                    setPlaced((current) => ({ ...current, [slot.id]: selected.id }));
                    if (round.solution[index] === selected.id) setScore((value) => value + 1);
                    setSelected(null);
                  }}
                  className="flex min-h-20 items-center justify-between rounded-[22px] border px-4 py-3 text-left transition active:scale-[0.99]"
                  style={{
                    background: isCorrect ? "rgba(16,185,129,0.18)" : round.theme.card,
                    borderColor: isCorrect ? "rgba(16,185,129,0.7)" : "rgba(255,255,255,0.12)",
                  }}
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">Slot {index + 1}</p>
                    <p className="text-sm font-semibold text-white/80">{slot.label}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl">{placedPart?.emoji ?? "✦"}</p>
                    <p className="text-sm font-bold">{placedPart?.label ?? "Leer"}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="rounded-[28px] border p-4"
          style={{ background: "rgba(7,11,22,0.9)", borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="mb-3 text-sm font-semibold text-white/82">Bauteile</p>
          <div className="flex flex-wrap gap-3">
            {remaining.map((part) => (
              <button
                key={part.id}
                type="button"
                disabled={completed}
                onClick={() => {
                  if (completed) return;
                  setSelected(part);
                }}
                className="min-w-[110px] rounded-[20px] border px-4 py-3 text-left shadow-lg transition active:scale-95"
                style={{
                  background: selected?.id === part.id ? `${round.theme.accent}44` : "rgba(255,255,255,0.05)",
                  borderColor: selected?.id === part.id ? round.theme.accent : "rgba(255,255,255,0.1)",
                }}
              >
                <p className="text-2xl">{part.emoji ?? "◈"}</p>
                <p className="mt-2 text-sm font-semibold">{part.label}</p>
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-white/6 px-4 py-3 text-sm text-white/70">
            Fertig gesetzt: {Object.keys(placed).length} / {round.slots.length}
          </div>
        </div>
      </div>
    </div>
  );
}
