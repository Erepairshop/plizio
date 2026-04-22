"use client";

import { useEffect, useState } from "react";
import type { SignalRunnerRound } from "@/lib/visualLab/multilingualTypes";
import { getLanguage } from "@/lib/language";

interface Props {
  round: SignalRunnerRound;
  onDone?: (score: number, total: number) => void;
}

export default function MultilingualSignalRunnerGame({ round, onDone }: Props) {
  const [lang, setLang] = useState("de");
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ text: string; type: "success" | "fail" } | null>(null);

  useEffect(() => {
    setLang(getLanguage());
  }, []);

  const scene = round.scenes[currentSceneIndex];

  const handleChoice = (choiceId: string) => {
    if (feedback) return;

    const isCorrect = choiceId === scene.correctChoiceId;
    if (isCorrect) setScore((s) => s + 1);

    setFeedback({
      text: isCorrect
        ? (scene.successFeedback as any)[lang] || scene.successFeedback["de"]
        : (scene.failFeedback as any)[lang] || scene.failFeedback["de"],
      type: isCorrect ? "success" : "fail",
    });

    setTimeout(() => {
      if (currentSceneIndex < round.scenes.length - 1) {
        setCurrentSceneIndex((i) => i + 1);
        setFeedback(null);
      } else {
        onDone?.(score + (isCorrect ? 1 : 0), round.scenes.length);
      }
    }, 2000);
  };

  const currentTitle = (round.title as any)[lang] || round.title["de"];
  const currentInstruction = (round.instruction as any)[lang] || round.instruction["de"];

  if (!scene) return null;

  return (
    <div
      className="relative flex flex-col overflow-hidden rounded-[32px] border p-6 text-white shadow-2xl transition-all duration-500"
      style={{ background: scene.visual.bg, borderColor: "rgba(255,255,255,0.1)", minHeight: 600 }}
    >
      <div className="mb-4">
        <h2 className="text-2xl font-black">{currentTitle}</h2>
        <p className="text-sm text-white/70">{currentInstruction}</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white/10 text-6xl shadow-inner backdrop-blur-md">
          {scene.visual.icon}
        </div>
        
        <h3 className="mb-8 text-center text-xl font-bold leading-relaxed px-4">
          {(scene.prompt as any)[lang] || scene.prompt["de"]}
        </h3>

        <div className="grid w-full gap-3">
          {scene.choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => handleChoice(choice.id)}
              disabled={!!feedback}
              className={`relative overflow-hidden rounded-2xl border p-4 text-left transition-all hover:translate-x-1 active:scale-[0.98] ${
                feedback
                  ? choice.id === scene.correctChoiceId
                    ? "border-emerald-400 bg-emerald-500/20"
                    : "border-white/5 opacity-50"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              {(choice.label as any)[lang] || choice.label["de"]}
            </button>
          ))}
        </div>
      </div>

      {feedback && (
        <div className={`mt-6 rounded-2xl border p-4 text-center font-bold animate-in fade-in slide-in-from-bottom-2 ${
          feedback.type === "success" ? "border-emerald-400 bg-emerald-500/20 text-emerald-200" : "border-rose-400 bg-rose-500/20 text-rose-200"
        }`}>
          {feedback.text}
        </div>
      )}
    </div>
  );
}
