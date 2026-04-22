"use client";

import { useEffect, useState } from "react";
import type { ConstellationBuilderRound } from "@/lib/visualLab/multilingualTypes";
import { getLanguage } from "@/lib/language";

const LABELS: Record<string, any> = {
  de: { check: "Lösung prüfen" },
  en: { check: "Check Solution" },
  hu: { check: "Ellenőrzés" },
  ro: { check: "Verifică soluția" },
};

interface Props {
  round: ConstellationBuilderRound;
  onDone?: (score: number, total: number) => void;
}

export default function MultilingualConstellationBuilderGame({ round, onDone }: Props) {
  const [lang, setLang] = useState("de");
  const [slots, setSlots] = useState<Record<string, string | null>>(() =>
    round.slots.reduce((acc, slot) => ({ ...acc, [slot.id]: null }), {})
  );
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);

  useEffect(() => {
    setLang(getLanguage());
  }, []);

  const t = LABELS[lang] || LABELS.en;

  const handlePartClick = (partId: string) => {
    if (Object.values(slots).includes(partId)) return;
    setSelectedPartId(partId === selectedPartId ? null : partId);
  };

  const handleSlotClick = (slotId: string) => {
    if (selectedPartId) {
      setSlots((prev) => ({ ...prev, [slotId]: selectedPartId }));
      setSelectedPartId(null);
    } else {
      setSlots((prev) => ({ ...prev, [slotId]: null }));
    }
  };

  const checkSolution = () => {
    const currentSolution = round.slots.map((slot) => slots[slot.id]);
    const isCorrect = JSON.stringify(currentSolution) === JSON.stringify(round.solution);
    onDone?.(isCorrect ? 100 : 0, 100);
  };

  const currentTitle = (round.title as any)[lang] || round.title["de"];
  const currentInstruction = (round.instruction as any)[lang] || round.instruction["de"];

  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-[32px] border p-6 text-white shadow-2xl"
      style={{ background: round.theme.bg, borderColor: "rgba(255,255,255,0.1)", minHeight: 620 }}
    >
      <div className="mb-4">
        <h2 className="text-2xl font-black">{currentTitle}</h2>
        <p className="text-sm text-white/70">{currentInstruction}</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-12 py-8">
        {/* Slots */}
        <div className="flex flex-wrap justify-center gap-6">
          {round.slots.map((slot) => {
            const partId = slots[slot.id];
            const part = round.parts.find((p) => p.id === partId);
            return (
              <button
                key={slot.id}
                onClick={() => handleSlotClick(slot.id)}
                className="group relative flex h-28 w-28 items-center justify-center rounded-3xl border-2 border-dashed border-white/20 bg-black/20 shadow-inner transition-all hover:border-white/40"
              >
                {part ? (
                  <div className="flex flex-col items-center animate-in zoom-in-50">
                    <span className="text-4xl">{part.emoji}</span>
                    <span className="mt-1 text-[10px] font-black uppercase opacity-60">
                      {(part.label as any)[lang] || part.label["de"]}
                    </span>
                  </div>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                    {(slot.label as any)[lang] || slot.label["de"]}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Parts */}
        <div className="flex flex-wrap justify-center gap-3">
          {round.parts.map((part) => {
            const isUsed = Object.values(slots).includes(part.id);
            const isSelected = selectedPartId === part.id;
            return (
              <button
                key={part.id}
                onClick={() => handlePartClick(part.id)}
                disabled={isUsed}
                className={`relative flex h-20 w-24 flex-col items-center justify-center rounded-2xl border-2 transition-all ${
                  isUsed
                    ? "border-transparent bg-white/5 opacity-20"
                    : isSelected
                    ? "scale-110 border-white bg-white/20 shadow-xl"
                    : "border-white/10 bg-white/10 hover:bg-white/15"
                }`}
              >
                <span className="text-3xl">{part.emoji}</span>
                <span className="mt-1 text-[10px] font-bold">
                  {(part.label as any)[lang] || part.label["de"]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center pt-6">
        <button
          onClick={checkSolution}
          disabled={Object.values(slots).some((s) => s === null)}
          className="rounded-full bg-white px-10 py-4 text-sm font-black uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95 disabled:opacity-30"
        >
          {t.check}
        </button>
      </div>
    </div>
  );
}
