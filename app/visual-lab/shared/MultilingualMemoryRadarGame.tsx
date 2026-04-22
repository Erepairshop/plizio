"use client";

import { useEffect, useState } from "react";
import type { MemoryRadarRound } from "@/lib/visualLab/multilingualTypes";
import { getLanguage } from "@/lib/language";

const LABELS: Record<string, any> = {
  de: {
    start: "Mission starten",
    scanning: "Scannen...",
    submit: (count: number, limit: number) => `Auswahl bestätigen (${count}/${limit})`,
  },
  en: {
    start: "Start Mission",
    scanning: "Scanning...",
    submit: (count: number, limit: number) => `Submit Selection (${count}/${limit})`,
  },
  hu: {
    start: "Küldetés indítása",
    scanning: "Szkennelés...",
    submit: (count: number, limit: number) => `Kiválasztás beküldése (${count}/${limit})`,
  },
  ro: {
    start: "Începe misiunea",
    scanning: "Scanare...",
    submit: (count: number, limit: number) => `Trimite selecția (${count}/${limit})`,
  },
};

interface Props {
  round: MemoryRadarRound;
  onDone?: (score: number, total: number) => void;
}

export default function MultilingualMemoryRadarGame({ round, onDone }: Props) {
  const [lang, setLang] = useState("de");
  const [phase, setPhase] = useState<"intro" | "flash" | "pick">("intro");
  const [selection, setSelection] = useState<string[]>([]);
  const [shuffledItems, setShuffledItems] = useState<any[]>([]);

  useEffect(() => {
    setLang(getLanguage());
  }, []);

  const t = LABELS[lang] || LABELS.en;

  const startFlash = () => {
    setPhase("flash");
    setTimeout(() => {
      const all = [...round.targetItems, ...round.decoyItems].sort(() => Math.random() - 0.5);
      setShuffledItems(all);
      setPhase("pick");
    }, round.flashDurationMs);
  };

  const handlePick = (id: string) => {
    if (selection.includes(id)) {
      setSelection((s) => s.filter((item) => item !== id));
    } else if (selection.length < round.selectionLimit) {
      setSelection((s) => [...s, id]);
    }
  };

  const submit = () => {
    const correctCount = selection.filter((id) =>
      round.targetItems.some((target) => target.id === id)
    ).length;
    onDone?.(correctCount, round.targetItems.length);
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

      <div className="flex flex-1 flex-col items-center justify-center">
        {phase === "intro" && (
          <div className="text-center">
            <div className="mb-8 flex justify-center gap-4">
              {round.targetItems.map((item) => (
                <div key={item.id} className="flex flex-col items-center gap-1">
                  <span className="text-5xl">{item.emoji}</span>
                  <span className="text-xs opacity-60">{(item.label as any)[lang] || item.label["de"]}</span>
                </div>
              ))}
            </div>
            <button
              onClick={startFlash}
              className="rounded-full bg-white px-12 py-4 text-sm font-black uppercase tracking-widest text-black transition-all hover:scale-105"
            >
              {t.start}
            </button>
          </div>
        )}

        {phase === "flash" && (
          <div className="flex flex-col items-center">
            <div
              className="h-24 w-24 animate-ping rounded-full border-4 border-white/20"
              style={{ borderColor: round.theme.radar }}
            />
            <p className="mt-8 text-xl font-black uppercase tracking-widest animate-pulse">{t.scanning}</p>
          </div>
        )}

        {phase === "pick" && (
          <div className="w-full">
            <div className="mb-8 grid grid-cols-3 gap-4">
              {shuffledItems.map((item) => {
                const isSelected = selection.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => handlePick(item.id)}
                    className={`flex flex-col items-center justify-center rounded-2xl border-2 p-4 transition-all ${
                      isSelected ? "border-white bg-white/20 scale-105" : "border-white/5 bg-white/5"
                    }`}
                  >
                    <span className="text-4xl">{item.emoji}</span>
                  </button>
                );
              })}
            </div>
            <div className="flex justify-center">
              <button
                onClick={submit}
                disabled={selection.length === 0}
                className="rounded-full bg-white px-12 py-4 text-sm font-black uppercase tracking-widest text-black transition-all hover:scale-105 disabled:opacity-30"
              >
                {t.submit(selection.length, round.selectionLimit)}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
