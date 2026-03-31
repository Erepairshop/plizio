"use client";

import React, { useMemo } from "react";
import type { StarholdState, LocalizedString } from "@/lib/gravitas/sim/types";
import { getActivationStageInfo } from "@/lib/gravitas/sim/activation";
import { useLang } from "@/components/LanguageProvider";

interface Props {
  state: StarholdState;
  t: {
    transferTitle: string;
    transferReady: string;
    transferLocked: string;
    transferStageLabel: string;
    hold: string;
    awakeningMoment: string;
    awakeningBody: string;
    resonance: string;
  };
  onBeginTransfer: () => void;
  onStopTransfer: () => void;
}

export default function GravitasActivation({ state, t, onBeginTransfer, onStopTransfer }: Props) {
  const { lang } = useLang();
  const activationPercent = state.resources.activation;
  const resonance = state.resonance;
  const activationStageInfo = useMemo(
    () => getActivationStageInfo(activationPercent, state.avatarAwake),
    [activationPercent, state.avatarAwake]
  );
const transferStage = activationStageInfo.stage;

const localize = (ls: LocalizedString) => ls[lang as keyof LocalizedString] ?? ls.en;
  // We still want the ladder labels for the small boxes
  const ladder = [
    getActivationStageInfo(15, false).label,
    getActivationStageInfo(40, false).label,
    getActivationStageInfo(75, false).label,
    getActivationStageInfo(100, true).label,
  ];

  const resonanceColor = resonance > 85 ? "text-rose-400" : resonance > 60 ? "text-amber-400" : "text-cyan-400";
  const resonanceShadow = resonance > 85
    ? "0 0 30px rgba(244, 63, 94, 0.4)"
    : resonance > 60
      ? "0 0 20px rgba(251, 191, 36, 0.3)"
      : "0 0 15px rgba(34, 211, 238, 0.2)";

  return (
    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/6 p-4">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="text-xs uppercase tracking-[0.28em] text-cyan-200 font-black">{t.transferTitle}</div>
        {state.resonance > 0 && (
          <div className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded border border-current ${resonanceColor}`}>
            {t.resonance}: {Math.floor(resonance)}%
          </div>
        )}
      </div>

      <div className="flex items-center gap-6">
        <div className="relative h-28 w-28 shrink-0">
          <div className="absolute inset-0 rounded-full border border-cyan-300/20" />
          <div
            className="absolute inset-2 rounded-full border-2 border-pink-300/40 transition-all duration-300"
            style={{
              transform: `scale(${0.84 + activationPercent / 500 + resonance / 1000})`,
              opacity: 0.55 + activationPercent / 250,
              boxShadow: resonanceShadow,
            }}
          />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-300/30 via-fuchsia-400/25 to-pink-400/35 shadow-[0_0_40px_rgba(244,114,182,0.22)] overflow-hidden">
             {/* Dynamic pulse effect inside the sphere */}
             <div
               className="absolute inset-0 bg-white/20 animate-pulse"
               style={{ opacity: resonance / 200 }}
             />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-xl font-black text-white">
            {Math.floor(activationPercent)}%
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="h-4 rounded-full bg-white/10 overflow-hidden border border-white/5 p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-pink-400 transition-all duration-300"
              style={{ width: `${activationPercent}%` }}
            />
          </div>
          <div className="mt-4 space-y-1">
             <p className="text-sm font-black text-cyan-100/90 tracking-tight leading-tight">
               {localize(activationStageInfo.label)}
             </p>
             <p className="text-[11px] text-white/50 leading-snug">
               {state.phase === "activation" || state.avatarAwake ? t.transferReady : t.transferLocked}
             </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-[11px] uppercase tracking-[0.22em] text-white/40 font-black mb-3">{t.transferStageLabel}</div>
        <div className="grid grid-cols-2 gap-2">
          {ladder.map((ls, index) => {
            const stageIndex = index + 1;
            const active = transferStage >= stageIndex;
            const label = localize(ls);
            return (
              <div
                key={label}
                className={[
                  "rounded-xl border px-3 py-2 text-[11px] transition duration-500",
                  active
                    ? "border-pink-400/40 bg-pink-500/15 text-pink-50 font-black shadow-[0_0_15px_rgba(244,114,182,0.1)]"
                    : "border-white/5 bg-black/30 text-white/30",
                ].join(" ")}
              >
                <span className="opacity-50 mr-2">{stageIndex}.</span>
                {label}
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onMouseDown={onBeginTransfer}
        onMouseUp={onStopTransfer}
        onMouseLeave={onStopTransfer}
        onTouchStart={onBeginTransfer}
        onTouchEnd={onStopTransfer}
        disabled={state.phase !== "activation" || state.avatarAwake}
        className={[
          "mt-6 w-full rounded-2xl border px-4 py-5 text-sm font-black transition-all relative overflow-hidden group",
          state.phase === "activation" && !state.avatarAwake
            ? "border-pink-400/50 bg-pink-500/10 text-pink-50 shadow-[0_0_30px_rgba(244,114,182,0.2)] hover:bg-pink-500/20 active:scale-[0.98]"
            : "border-white/10 bg-white/5 text-white/20 cursor-not-allowed",
        ].join(" ")}
      >
        <div className="relative z-10">{t.hold}</div>
        {/* Fill effect based on resonance */}
        {state.phase === "activation" && !state.avatarAwake && (
          <div
            className="absolute bottom-0 left-0 right-0 bg-pink-400/20 transition-all duration-300"
            style={{ height: `${resonance}%` }}
          />
        )}
      </button>

      {state.avatarAwake && (
        <div className="mt-5 rounded-2xl border border-pink-400/30 bg-pink-500/10 px-5 py-5 animate-in fade-in slide-in-from-bottom-2 duration-1000">
          <div className="text-[11px] uppercase tracking-[0.22em] text-pink-200/90 font-black">{t.awakeningMoment}</div>
          <div className="mt-3 text-sm leading-relaxed text-pink-50/95 font-medium italic">
            “{t.awakeningBody}”
          </div>
        </div>
      )}
    </div>
  );
}
