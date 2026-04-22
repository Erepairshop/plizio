"use client";

import { useEffect, useState } from "react";
import type { OrbitSortRound } from "@/lib/visualLab/multilingualTypes";
import { getLanguage } from "@/lib/language";

const LABELS: Record<string, any> = {
  de: { bucket: "Bereich" },
  en: { bucket: "Bucket" },
  hu: { bucket: "Gyűjtő" },
  ro: { bucket: "Grup" },
};

interface Props {
  round: OrbitSortRound;
  onDone?: (score: number, total: number) => void;
}

export default function MultilingualOrbitSortGame({ round, onDone }: Props) {
  const [lang, setLang] = useState("de");
  const [items, setItems] = useState(() =>
    round.items.map((it) => ({ ...it, status: "idle" as "idle" | "correct" | "wrong" }))
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    setLang(getLanguage());
  }, []);

  const t = LABELS[lang] || LABELS.en;

  const handleItemClick = (id: string) => {
    const item = items.find((it) => it.id === id);
    if (item?.status !== "idle") return;
    setSelectedId(id);
  };

  const handleBucketClick = (bucketId: string) => {
    if (!selectedId) return;

    const item = items.find((it) => it.id === selectedId);
    if (!item) return;

    const isCorrect = item.bucketId === bucketId;

    setItems((prev) =>
      prev.map((it) => {
        if (it.id === selectedId) {
          return { ...it, status: isCorrect ? "correct" : "wrong" };
        }
        return it;
      })
    );
    setSelectedId(null);

    const remaining = items.filter((it) => it.status === "idle").length - 1;
    if (remaining === 0) {
      const correctCount = items.filter((it) => it.status === "correct").length + (isCorrect ? 1 : 0);
      setTimeout(() => onDone?.(correctCount, items.length), 1000);
    }
  };

  const currentTitle = (round.title as any)[lang] || round.title["de"];
  const currentInstruction = (round.instruction as any)[lang] || round.instruction["de"];

  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-[32px] border p-6 text-white shadow-2xl"
      style={{ background: round.theme.bg, borderColor: "rgba(255,255,255,0.1)", minHeight: 600 }}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-black">{currentTitle}</h2>
        <p className="text-sm text-white/70">{currentInstruction}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 py-8">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            disabled={item.status !== "idle"}
            className={`flex h-20 w-20 flex-col items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
              selectedId === item.id ? "scale-110 border-white shadow-lg" : "border-white/10"
            } ${
              item.status === "correct"
                ? "border-emerald-500 bg-emerald-500/20 opacity-50"
                : item.status === "wrong"
                ? "border-rose-500 bg-rose-500/20 opacity-50"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            <span className="text-3xl">{item.emoji}</span>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-tighter opacity-80">
              {(item.label as any)[lang] || item.label["de"]}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-auto grid grid-cols-2 gap-4">
        {round.buckets.map((bucket) => (
          <button
            key={bucket.id}
            onClick={() => handleBucketClick(bucket.id)}
            className="group relative flex h-24 items-center justify-center overflow-hidden rounded-3xl border border-white/10 transition-transform active:scale-95"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <div
              className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30"
              style={{ background: bucket.color }}
            />
            <div className="relative text-center">
              <span className="text-xs font-black uppercase tracking-widest text-white/40">{t.bucket}</span>
              <p className="text-lg font-bold">{(bucket.label as any)[lang] || bucket.label["de"]}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
