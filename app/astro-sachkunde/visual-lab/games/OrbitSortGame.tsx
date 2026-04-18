"use client";

import { useEffect, useMemo, useState } from "react";
import type { OrbitSortItem, OrbitSortRound } from "@/lib/visualLab/types";

interface Props {
  round: OrbitSortRound;
  onDone?: (score: number, total: number) => void;
}

export default function OrbitSortGame({ round, onDone }: Props) {
  const [selected, setSelected] = useState<OrbitSortItem | null>(null);
  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setSelected(null);
    setPlaced({});
    setScore(0);
    setAttempts(0);
    setCompleted(false);
  }, [round]);

  useEffect(() => {
    if (completed || Object.keys(placed).length !== round.items.length) return;
    setCompleted(true);
    onDone?.(score, round.items.length);
  }, [completed, onDone, placed, round.items.length, score]);

  // Shuffle items once per round so order isn't predictable
  const shuffledItems = useMemo(() => {
    const arr = [...round.items];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [round]);

  const remaining = useMemo(
    () => shuffledItems.filter((item) => !placed[item.id]),
    [placed, shuffledItems],
  );

  return (
    <div
      className="rounded-[28px] border p-4 text-white shadow-2xl"
      style={{
        background: `radial-gradient(circle at top, ${round.theme.accent}22 0%, ${round.theme.bg} 70%, #040816 100%)`,
        borderColor: "rgba(255,255,255,0.12)",
      }}
    >
      <div className="mb-4">
        <p className="text-xs uppercase tracking-[0.22em] text-white/55">Orbit Sort</p>
        <h2 className="text-xl font-black">{round.title}</h2>
        <p className="mt-1 text-sm text-white/78">{round.instruction}</p>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-3">
        {round.buckets.map((bucket) => (
          <button
            key={bucket.id}
            type="button"
            onClick={() => {
              if (!selected || completed) return;
              setAttempts((value) => value + 1);
              setPlaced((current) => ({ ...current, [selected.id]: bucket.id }));
              if (selected.bucketId === bucket.id) setScore((value) => value + 1);
              setSelected(null);
            }}
            className="min-h-28 rounded-[24px] border p-3 text-left shadow-lg transition active:scale-[0.98]"
            style={{
              background: `linear-gradient(180deg, ${bucket.color}44 0%, rgba(7,12,24,0.88) 100%)`,
              borderColor: `${bucket.color}aa`,
            }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">Zone</p>
            <p className="mt-1 text-lg font-bold">{bucket.label}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {round.items
                .filter((item) => placed[item.id] === bucket.id)
                .map((item) => (
                  <span
                    key={item.id}
                    className="rounded-full px-3 py-2 text-sm font-semibold"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                  >
                    {item.emoji ? `${item.emoji} ` : ""}{item.label}
                  </span>
                ))}
            </div>
          </button>
        ))}
      </div>

      <div
        className="rounded-[24px] border p-4"
        style={{
          background: `radial-gradient(circle, ${round.theme.orbit}22 0%, rgba(4,9,20,0.92) 70%)`,
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-white/85">Objekte</p>
          <p className="text-sm text-white/60">Richtig: {score} / {round.items.length}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {remaining.map((item) => (
            <button
              key={item.id}
              type="button"
              disabled={completed}
              onClick={() => {
                if (completed) return;
                setSelected(item);
              }}
              className="rounded-[20px] border px-4 py-3 text-left shadow-lg transition active:scale-95"
              style={{
                background: selected?.id === item.id ? `${round.theme.accent}55` : "rgba(255,255,255,0.08)",
                borderColor: selected?.id === item.id ? round.theme.accent : "rgba(255,255,255,0.1)",
                minWidth: 120,
              }}
            >
              <p className="text-2xl">{item.emoji ?? "◎"}</p>
              <p className="mt-2 text-sm font-semibold">{item.label}</p>
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/45">Versuche: {attempts}</p>
      </div>
    </div>
  );
}
