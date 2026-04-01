"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface GameSurfaceProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  padded?: boolean;
}

export function GameSurface({ children, className = "", innerClassName = "", padded = true }: GameSurfaceProps) {
  return (
    <main className={`min-h-screen bg-[#0A0A1A] text-white ${className}`}>
      <div className={`mx-auto w-full max-w-[980px] ${padded ? "px-4 py-5 sm:px-5 sm:py-6" : ""} ${innerClassName}`}>
        {children}
      </div>
    </main>
  );
}

export interface GameTopBarProps {
  homeLabel: string;
  title: string;
  accentTextClassName: string;
}

export function GameTopBar({ homeLabel, title, accentTextClassName }: GameTopBarProps) {
  return (
    <div className="flex items-center justify-between gap-3 mb-4">
      <Link href="/" className="inline-flex items-center gap-2 text-white/60 text-sm font-semibold">
        <Home size={16} /> {homeLabel}
      </Link>
      <div className={`text-xs uppercase tracking-[0.35em] font-black ${accentTextClassName}`}>{title}</div>
    </div>
  );
}

export interface GameCardProps {
  children: ReactNode;
  className?: string;
}

export function GameCard({ children, className = "" }: GameCardProps) {
  return (
    <div className={`rounded-[24px] sm:rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 shadow-2xl ${className}`}>
      {children}
    </div>
  );
}

export interface GameLevelCard {
  id: number;
  badge: string;
  title: string;
  unlocked: boolean;
  completed: boolean;
}

export interface GameLevelGridProps {
  levels: GameLevelCard[];
  onSelect: (levelId: number) => void;
  accentClassName: string;
  currentLabel: string;
  completedLabel: string;
  lockedLabel: string;
  levelLabel: string;
}

export function GameLevelGrid({
  levels,
  onSelect,
  accentClassName,
  currentLabel,
  completedLabel,
  lockedLabel,
  levelLabel,
}: GameLevelGridProps) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {levels.map((level) => (
        <button
          key={level.id}
          type="button"
          onClick={() => level.unlocked && onSelect(level.id)}
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
  );
}

export interface GameCompleteCardProps {
  children: ReactNode;
}

export function GameCompleteCard({ children }: GameCompleteCardProps) {
  return (
    <motion.div
      className="w-full max-w-[560px] rounded-[24px] sm:rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

export interface GameHeroProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  prompt: string;
  accentTextClassName: string;
}

export function GameHero({ icon: Icon, title, subtitle, prompt, accentTextClassName }: GameHeroProps) {
  return (
    <GameCard>
      <div className={`flex items-center gap-3 font-black text-sm uppercase tracking-[0.3em] ${accentTextClassName}`}>
        <Icon size={18} /> {title}
      </div>
      <h1 className="mt-4 text-2xl sm:text-4xl font-black">{subtitle}</h1>
      <p className="mt-3 text-white/65 max-w-2xl">{prompt}</p>
    </GameCard>
  );
}
