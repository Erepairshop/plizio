"use client";

import { useEffect, useState } from "react";
import type { LabMixerRound } from "@/lib/visualLab/multilingualTypes";
import { getLanguage } from "@/lib/language";

interface Props {
  round: LabMixerRound;
  onDone?: (score: number, total: number) => void;
}

export default function MultilingualLabMixerGame({ round, onDone }: Props) {
  const [lang, setLang] = useState("de");
  const [currentLiquidColor, setCurrentLiquidColor] = useState(round.baseLiquidColor);
  const [mixedIds, setMixedIds] = useState<string[]>([]);
  const [status, setStatus] = useState<"mixing" | "success" | "fail">("mixing");

  useEffect(() => {
    setLang(getLanguage());
  }, []);

  const handleIngredientClick = (id: string) => {
    if (status !== "mixing") return;

    const ing = round.ingredients.find((i) => i.id === id);
    if (!ing) return;

    const newMixed = [...mixedIds, id];
    setMixedIds(newMixed);

    if (ing.effectColor) {
      setCurrentLiquidColor(ing.effectColor);
    }

    // Check if the mixture is becoming invalid or complete
    const isCorrectSoFar = newMixed.every((mid, idx) => mid === round.solution[idx]);

    if (!isCorrectSoFar) {
      setStatus("fail");
      setTimeout(() => onDone?.(0, 100), 1500);
    } else if (newMixed.length === round.solution.length) {
      setStatus("success");
      setCurrentLiquidColor(round.targetColor);
      setTimeout(() => onDone?.(100, 100), 1500);
    }
  };

  const currentTitle = (round.title as any)[lang] || round.title["de"];
  const currentInstruction = (round.instruction as any)[lang] || round.instruction["de"];

  return (
    <div className="relative flex flex-col items-center overflow-hidden rounded-[32px] border bg-[#0f172a] p-8 text-white shadow-2xl" style={{ minHeight: 600 }}>
      <div className="w-full text-left mb-8">
        <h2 className="text-2xl font-black">{currentTitle}</h2>
        <p className="text-sm text-white/70">{currentInstruction}</p>
      </div>

      {/* Lab Beaker */}
      <div className="relative mb-12 flex h-64 w-48 items-end justify-center rounded-b-full border-4 border-t-0 border-white/20 bg-white/5 p-4 shadow-inner">
        <div 
          className="w-full rounded-b-full transition-all duration-1000 ease-in-out" 
          style={{ 
            height: status === "success" ? "90%" : `${20 + mixedIds.length * 20}%`, 
            background: currentLiquidColor,
            boxShadow: `0 0 40px ${currentLiquidColor}44`
          }} 
        />
        {status === "success" && (
          <div className="absolute inset-0 flex items-center justify-center animate-bounce">
            <span className="text-6xl">✨</span>
          </div>
        )}
        {status === "fail" && (
          <div className="absolute inset-0 flex items-center justify-center animate-ping">
            <span className="text-6xl">💥</span>
          </div>
        )}
      </div>

      {/* Ingredients */}
      <div className="grid grid-cols-3 gap-4">
        {round.ingredients.map((ing) => (
          <button
            key={ing.id}
            onClick={() => handleIngredientClick(ing.id)}
            disabled={status !== "mixing"}
            className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 active:scale-95 disabled:opacity-50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full text-3xl shadow-lg" style={{ background: ing.color || "rgba(255,255,255,0.1)" }}>
              {ing.emoji}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
              {(ing.label as any)[lang] || ing.label["de"]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
