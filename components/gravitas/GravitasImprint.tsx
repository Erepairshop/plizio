"use client";

import { motion } from "framer-motion";
import { Cpu, Sparkles } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { GRAVITAS_TEXT } from "@/lib/gravitas/sim/content";
import type { StarholdAvatarProfile, StarholdState } from "@/lib/gravitas/sim/types";

interface Props {
  state: StarholdState;
  profile: StarholdAvatarProfile;
  onBeginHold: () => void;
  onStopHold: () => void;
}

const PROFILE_ACCENTS: Record<StarholdAvatarProfile["archetype"], string> = {
  calm: "#22d3ee",
  curious: "#8b5cf6",
  protective: "#10b981",
  bold: "#f59e0b",
};

export default function GravitasImprint({ state, profile, onBeginHold, onStopHold }: Props) {
  const { lang } = useLang();
  const t = GRAVITAS_TEXT.ui;
  const accent = PROFILE_ACCENTS[profile.archetype];
  const progress = Math.max(0, Math.min(100, state.avatarImprintProgress));
  const remainingSeconds = Math.max(0, Math.ceil(30 - progress * 0.3));
  const filledDegrees = progress * 3.6;

  const localize = (value: { en: string; hu: string; de: string; ro: string }) => value[lang as keyof typeof value] ?? value.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ type: "spring", damping: 24, stiffness: 260 }}
      onPointerDown={onBeginHold}
      onPointerUp={onStopHold}
      onPointerLeave={onStopHold}
      onPointerCancel={onStopHold}
      onContextMenu={(event) => event.preventDefault()}
      onMouseDown={onBeginHold}
      onMouseUp={onStopHold}
      onMouseLeave={onStopHold}
      onTouchStart={onBeginHold}
      onTouchEnd={onStopHold}
      onTouchCancel={onStopHold}
      className="fixed left-1/2 bottom-[176px] z-[180] w-[min(92vw,560px)] -translate-x-1/2 overflow-hidden rounded-[28px] border border-white/10 bg-[#110915]/96 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.34)] backdrop-blur-xl touch-none select-none cursor-pointer max-h-[calc(100vh-240px)] overflow-y-auto lg:bottom-[146px] lg:w-[min(72vw,620px)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-[10px] font-black uppercase tracking-[0.28em] text-fuchsia-300/80">
            {localize(t.imprintTitle)}
          </div>
          <div className="mt-1 text-lg font-black text-white">
            {localize(profile.title)}
          </div>
          <div className="mt-1 text-[11px] leading-relaxed text-white/55">
            {localize(t.imprintReady)}
          </div>
        </div>
        <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
          30s
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {profile.answers.map((answer, idx) => (
          <div
            key={`${answer.questionId}-${answer.optionId}-${idx}`}
            className="shrink-0 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-white/65"
          >
            {idx + 1}. {answer.label[lang as keyof typeof answer.label] ?? answer.label.en}
          </div>
        ))}
      </div>

      <div className="relative mt-5 grid place-items-center py-3">
        <motion.div
          animate={{
            boxShadow: [
              `0 0 30px ${accent}33`,
              `0 0 52px ${accent}55`,
              `0 0 30px ${accent}33`,
            ],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        <div className="relative flex h-[220px] w-[220px] items-center justify-center lg:h-[256px] lg:w-[256px]">
          <motion.div
            animate={{
              opacity: [0.35, 0.9, 0.45],
              scale: [1, 1.14, 1],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-9 rounded-full blur-2xl"
            style={{ background: accent }}
          />

          <div
            className="absolute inset-0 rounded-full border border-white/8"
            style={{
              background: `conic-gradient(${accent} ${filledDegrees}deg, rgba(255,255,255,0.08) ${filledDegrees}deg 360deg)`,
              padding: 8,
            }}
          >
            <div className="h-full w-full rounded-full bg-[#09050b]" />
          </div>

          <div className="absolute inset-3 rounded-full border border-white/10 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.08),rgba(0,0,0,0.75)_65%)] shadow-[inset_0_0_40px_rgba(0,0,0,0.45)]" />

          <div
            className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-center text-white shadow-[0_0_50px_rgba(255,255,255,0.08)] transition active:scale-[0.98] lg:h-36 lg:w-36"
            style={{
              boxShadow: `0 0 ${18 + progress * 0.5}px ${accent}55, inset 0 0 40px rgba(255,255,255,0.06)`,
            }}
          >
            <div className="flex flex-col items-center gap-2 px-4">
              <Cpu size={26} className="text-white/70" />
              <div className="text-[10px] font-black uppercase tracking-[0.28em] text-white/65">
                {localize(t.imprintHold)}
              </div>
              <div className="text-2xl font-black text-white">
                {progress.toFixed(0)}%
              </div>
            </div>
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute inset-8 rounded-full border border-dashed border-white/10"
          />

          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-12 rounded-full"
            style={{ border: `1px solid ${accent}` }}
          />
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between gap-3">
        <div className="text-[10px] font-black uppercase tracking-[0.22em] text-white/40">
          {localize(t.imprintCharge)}
        </div>
        <div className="text-[10px] font-black uppercase tracking-[0.22em] text-fuchsia-200">
          {remainingSeconds}s
        </div>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full transition-all duration-200"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${accent}, rgba(255,255,255,0.88))`,
            boxShadow: `0 0 18px ${accent}`,
          }}
        />
      </div>

      <div className="mt-3 flex items-start gap-2 rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2 text-[10px] leading-relaxed text-white/60 lg:text-[11px]">
        <Sparkles size={14} className="mt-0.5 shrink-0 text-fuchsia-300" />
        <span>{localize(t.imprintLocked)} {localize({ en: "Press and hold anywhere on this card.", hu: "Nyomd és tartsd lenyomva bárhol ezen a kártyán.", de: "Drücke und halte irgendwo auf dieser Karte.", ro: "Apasă și ține apăsat oriunde pe această cartelă." })}</span>
      </div>
    </motion.div>
  );
}
