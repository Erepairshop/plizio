"use client";

import React from "react";
import { Flame, Star, Clock, Check } from "lucide-react";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import { STARHOLD_MILESTONES, type StarholdMilestone } from "@/lib/gravitas/sim/progression";
import { pickDailyTaskIds } from "./starhallShared";

interface Props {
  state: StarholdState;
  lang: string;
  onClaim: (milestoneId: string) => void;
}

function getResetCountdown(): string {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setUTCHours(24, 0, 0, 0);
  const diff = tomorrow.getTime() - now.getTime();
  const h = Math.floor(diff / (60 * 60 * 1000));
  const m = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
  return `${h}h ${m}m`;
}

export default function DailyTasksTab({ state, lang, onClaim }: Props) {
  const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;

  const incompleteIds = STARHOLD_MILESTONES.filter(
    (m) => !state.progression.completedMilestones.includes(m.id),
  ).map((m) => m.id);
  const dailyIds = pickDailyTaskIds(incompleteIds, 3);
  const dailyTasks: StarholdMilestone[] = dailyIds
    .map((id) => STARHOLD_MILESTONES.find((m) => m.id === id))
    .filter((m): m is StarholdMilestone => Boolean(m));

  return (
    <div className="flex flex-col gap-4 p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame size={14} className="text-rose-300" />
          <h3 className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-black">
            {localize({ en: "Rotating Field Orders", hu: "Forgó Parancsok", de: "Rotierende Befehle", ro: "Ordine Rotative" })}
          </h3>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono text-white/40">
          <Clock size={10} />
          {getResetCountdown()}
        </div>
      </div>

      <p className="text-[11px] text-white/50 leading-relaxed">
        {localize({
          en: "Three field orders cycle every 24 hours. Completing them advances the matching station milestone.",
          hu: "Három napi parancs 24 óránként frissül. Teljesítésük a megfelelő mérföldkövet is előmozdítja.",
          de: "Drei Befehle rotieren alle 24 Stunden. Ihr Abschluss treibt den zugehörigen Meilenstein voran.",
          ro: "Trei ordine se rotesc la fiecare 24 de ore. Finalizarea lor avansează reperul corespunzător.",
        })}
      </p>

      {dailyTasks.length === 0 ? (
        <div className="py-10 text-center text-white/30 text-xs italic border border-dashed border-white/10 rounded-xl">
          {localize({
            en: "All objectives complete. Stand by for the next rotation.",
            hu: "Minden feladat teljesítve. Várj a következő rotációra.",
            de: "Alle Aufgaben erledigt. Warte auf die nächste Rotation.",
            ro: "Toate obiectivele sunt îndeplinite. Așteaptă următoarea rotație.",
          })}
        </div>
      ) : (
        <div className="space-y-3">
          {dailyTasks.map((task, idx) => {
            const progress = task.getProgress?.(state) ?? 0;
            const claimable = state.progression.unclaimedMilestones?.includes(task.id) ?? false;
            const done = progress >= 100;
            return (
              <div
                key={task.id}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-1.5 py-0.5 rounded bg-rose-500/15 text-rose-300 text-[9px] font-black uppercase tracking-widest border border-rose-500/30">
                        {idx === 0 ? "α" : idx === 1 ? "β" : "γ"}
                      </span>
                      <div className="text-xs font-black text-white truncate">{localize(task.label)}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-black text-amber-300 shrink-0">
                    +{task.rewardStars}
                    <Star size={10} fill="currentColor" />
                  </div>
                </div>

                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full transition-all ${done ? "bg-emerald-400" : "bg-rose-400"}`}
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/40">
                    {Math.floor(progress)}%
                  </span>
                  {claimable ? (
                    <button
                      onClick={() => onClaim(task.id)}
                      className="px-2.5 py-1 rounded-md bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest hover:brightness-110 active:scale-95 transition"
                    >
                      <Check size={10} className="inline mr-1" />
                      {localize({ en: "Claim", hu: "Begyűjt", de: "Einfordern", ro: "Revendică" })}
                    </button>
                  ) : done ? (
                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald-300">
                      {localize({ en: "Complete", hu: "Teljesítve", de: "Erledigt", ro: "Terminat" })}
                    </span>
                  ) : (
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/30">
                      {localize({ en: "In progress", hu: "Folyamatban", de: "In Arbeit", ro: "În curs" })}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
