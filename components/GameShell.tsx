"use client";

import Link from "next/link";
import { ChevronRight, Home, type LucideIcon } from "lucide-react";
import MilestonePopup from "@/components/MilestonePopup";
import {
  GameCompleteCard,
  GameHero,
  GameLevelCard,
  GameLevelGrid,
  GameSurface,
  GameTopBar,
} from "@/components/game-core/GameChrome";

interface ExpeditionProps {
  homeLabel: string;
  title: string;
  subtitle: string;
  prompt: string;
  accentClassName: string;
  accentTextClassName: string;
  icon: LucideIcon;
  levels: GameLevelCard[];
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
    <GameSurface>
      <GameTopBar homeLabel={homeLabel} title={title} accentTextClassName={accentTextClassName} />
      <GameHero icon={Icon} title={title} subtitle={subtitle} prompt={prompt} accentTextClassName={accentTextClassName} />
      <GameLevelGrid
        levels={levels}
        onSelect={onStartLevel}
        accentClassName={accentClassName}
        currentLabel={currentLabel}
        completedLabel={completedLabel}
        lockedLabel={lockedLabel}
        levelLabel={levelLabel}
      />
    </GameSurface>
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
    <GameSurface className="flex flex-col items-center justify-center">
      <GameCompleteCard>
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
      </GameCompleteCard>
    </GameSurface>
  );
}
