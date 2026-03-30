"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home, type LucideIcon } from "lucide-react";
import MilestonePopup from "@/components/MilestonePopup";

interface ShellLevelCard {
  id: number;
  badge: string;
  title: string;
  unlocked: boolean;
  completed: boolean;
}

interface ExpeditionProps {
  homeLabel: string;
  title: string;
  subtitle: string;
  prompt: string;
  accentClassName: string;
  accentTextClassName: string;
  icon: LucideIcon;
  levels: ShellLevelCard[];
  currentLabel: string;
  completedLabel: string;
  lockedLabel: string;
  levelLabel: string;
  onStartLevel: (levelId: number) => void;
}

interface LevelCompleteProps {
  homeLabel: string;
  heading: string;
  title: string;
  expeditionMapLabel: string;
  nextLevelLabel: string;
  accentClassName: string;
  accentTextClassName: string;
  badge: string;
  showNext: boolean;
  onBackToMap: () => void;
  onNextLevel: () => void;
  milestoneKey: number;
}

export function GameShellExpedition({
  homeLabel,
  title,
  subtitle,
  prompt,
  accentClassName,
  accentTextClassName,
  icon: Icon,
  levels,
  currentLabel,
  completedLabel,
  lockedLabel,
  levelLabel,
  onStartLevel,
}: ExpeditionProps) {
  return (
    <main className="min-h-screen bg-[#0A0A1A] text-white px-4 py-5 sm:px-5 sm:py-6">
      <div className="mx-auto w-full max-w-[980px]">
        <div className="flex items-center justify-between gap-3 mb-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 text-sm font-semibold">
            <Home size={16} /> {homeLabel}
          </Link>
          <div className={`text-xs uppercase tracking-[0.35em] font-black ${accentTextClassName}`}>{title}</div>
        </div>

        <div className="rounded-[24px] sm:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 shadow-2xl">
          <div className={`flex items-center gap-3 font-black text-sm uppercase tracking-[0.3em] ${accentTextClassName}`}>
            <Icon size={18} /> {title}
          </div>
          <h1 className="mt-4 text-2xl sm:text-4xl font-black">{subtitle}</h1>
          <p className="mt-3 text-white/65 max-w-2xl">{prompt}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {levels.map((level) => (
              <button
                key={level.id}
                type="button"
                onClick={() => level.unlocked && onStartLevel(level.id)}
                className={[
                  "text-left rounded-2xl border p-4 transition-all",
                  level.unlocked
                    ? `bg-white/5 border-white/10 hover:bg-white/10 ${accentClassName}`
                    : "bg-white/5 border-white/5 opacity-45 cursor-not-allowed",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="text-2xl">{level.badge}</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-white/45 font-black">
                    {level.completed ? completedLabel : level.unlocked ? currentLabel : lockedLabel}
                  </div>
                </div>
                <div className="mt-3 text-lg font-black">{level.title}</div>
                <div className="mt-1 text-sm text-white/55">{levelLabel} {level.id}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export function GameShellLevelComplete({
  homeLabel,
  heading,
  title,
  expeditionMapLabel,
  nextLevelLabel,
  accentClassName,
  accentTextClassName,
  badge,
  showNext,
  onBackToMap,
  onNextLevel,
  milestoneKey,
}: LevelCompleteProps) {
  return (
    <main className="min-h-screen bg-[#0A0A1A] text-white flex flex-col items-center justify-center px-4 py-5 sm:px-5 sm:py-6">
      <motion.div
        className="w-full max-w-[560px] rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/65 text-sm font-semibold">
            <Home size={15} /> {homeLabel}
          </Link>
          <div className={`text-xs uppercase tracking-[0.35em] font-black ${accentTextClassName}`}>
            {heading}
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl sm:text-5xl mb-3">{badge}</div>
          <h2 className="text-2xl sm:text-3xl font-black">{heading}</h2>
          <p className="text-white/65 mt-2">{title}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={onBackToMap}
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/85 text-sm font-bold"
            >
              {expeditionMapLabel}
            </button>
            {showNext && (
              <button
                onClick={onNextLevel}
                className={`px-5 py-3 rounded-xl border text-sm font-bold flex items-center gap-1 ${accentClassName}`}
              >
                {nextLevelLabel} <ChevronRight size={14} />
              </button>
            )}
          </div>
        </div>
        <MilestonePopup key={milestoneKey} />
      </motion.div>
    </main>
  );
}
