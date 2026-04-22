"use client";

import { useEffect, useMemo, useState } from "react";
import type { SignalRunnerRound } from "@/lib/visualLab/types";
import { getLanguage } from "@/lib/language";

const LABELS: Record<string, any> = {
  de: {
    gameName: "Signal Runner",
    routeCompleted: "Route abgeschlossen",
    score: "Score",
    section: "Abschnitt",
  },
  en: {
    gameName: "Signal Runner",
    routeCompleted: "Route Completed",
    score: "Score",
    section: "Section",
  },
  hu: {
    gameName: "Signal Runner",
    routeCompleted: "Útvonal teljesítve",
    score: "Pontszám",
    section: "Szakasz",
  },
  ro: {
    gameName: "Signal Runner",
    routeCompleted: "Traseu finalizat",
    score: "Scor",
    section: "Secțiune",
  },
};

interface Props {
  round: SignalRunnerRound;
  onDone?: (score: number, total: number) => void;
}

export default function SignalRunnerGame({ round, onDone }: Props) {
  const [lang, setLang] = useState("de");
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lockedChoice, setLockedChoice] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setLang(getLanguage());
  }, []);

  const t = LABELS[lang] || LABELS.en;

  const scene = round.scenes[index];

  // Shuffle choices per scene so the correct one isn't always in the same position
  const shuffledChoices = useMemo(() => {
    if (!scene?.choices) return [];
    const arr = [...scene.choices];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [scene]);

  useEffect(() => {
    setIndex(0);
    setScore(0);
    setLockedChoice(null);
    setCompleted(false);
  }, [round]);

  useEffect(() => {
    if (completed || index < round.scenes.length) return;
    setCompleted(true);
    onDone?.(score, round.scenes.length);
  }, [completed, index, onDone, round.scenes.length, score]);

  if (!scene) {
    return (
      <div className="rounded-[28px] border border-white/10 bg-[#09111f] p-6 text-white shadow-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-white/45">{t.gameName}</p>
        <h2 className="mt-2 text-2xl font-black">{t.routeCompleted}</h2>
        <p className="mt-2 text-white/75">{t.score}: {score} / {round.scenes.length}</p>
      </div>
    );
  }

  const choiceState = (choiceId: string) => {
    if (!lockedChoice) return "idle";
    if (choiceId === scene.correctChoiceId) return "correct";
    if (choiceId === lockedChoice) return "wrong";
    return "idle";
  };

  return (
    <div className="rounded-[30px] border border-white/10 bg-[#07101d] p-4 text-white shadow-2xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">{t.gameName}</p>
          <h2 className="text-xl font-black">{round.title}</h2>
          <p className="mt-1 text-sm text-white/74">{round.instruction}</p>
        </div>
        <div className="rounded-2xl bg-white/6 px-3 py-2 text-right">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">{t.section}</p>
          <p className="text-lg font-bold">{index + 1}/{round.scenes.length}</p>
        </div>
      </div>

      <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/8">
        <div
          className="h-full rounded-full bg-cyan-400 transition-all"
          style={{ width: `${((index + (lockedChoice ? 1 : 0)) / round.scenes.length) * 100}%` }}
        />
      </div>

      <div
        className="rounded-[28px] border p-5"
        style={{
          background: `radial-gradient(circle at top, ${scene.visual.accent}33 0%, ${scene.visual.bg} 68%, #060b17 100%)`,
          borderColor: `${scene.visual.accent}66`,
        }}
      >
        <div className="mb-5 flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-white/10 text-4xl shadow-xl">
            {scene.visual.icon}
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">{scene.sceneType}</p>
            <h3 className="text-2xl font-black">{scene.title}</h3>
            <p className="mt-1 text-sm text-white/80">{scene.prompt}</p>
          </div>
        </div>

        <div className="grid gap-3">
          {shuffledChoices.map((choice) => {
            const state = choiceState(choice.id);
            return (
              <button
                key={choice.id}
                type="button"
                disabled={Boolean(lockedChoice) || completed}
                onClick={() => {
                  if (lockedChoice || completed) return;
                  setLockedChoice(choice.id);
                  if (choice.id === scene.correctChoiceId) setScore((value) => value + 1);
                  window.setTimeout(() => {
                    setLockedChoice(null);
                    setIndex((value) => value + 1);
                  }, 900);
                }}
                className="rounded-[22px] border px-4 py-4 text-left transition active:scale-[0.99]"
                style={{
                  background:
                    state === "correct"
                      ? "rgba(16,185,129,0.28)"
                      : state === "wrong"
                        ? "rgba(244,63,94,0.24)"
                        : "rgba(255,255,255,0.06)",
                  borderColor:
                    state === "correct"
                      ? "rgba(16,185,129,0.8)"
                      : state === "wrong"
                        ? "rgba(244,63,94,0.7)"
                        : "rgba(255,255,255,0.1)",
                }}
              >
                <p className="text-base font-semibold">{choice.label}</p>
              </button>
            );
          })}
        </div>

        {lockedChoice && (
          <div className="mt-4 rounded-2xl bg-white/8 px-4 py-3 text-sm text-white/85">
            {lockedChoice === scene.correctChoiceId ? scene.successFeedback : scene.failFeedback}
          </div>
        )}
      </div>
    </div>
  );
}
