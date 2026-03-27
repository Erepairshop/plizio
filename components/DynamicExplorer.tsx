"use client";
// DynamicExplorer.tsx
// Universal pool-based explorer component.
// Receives a PoolTopicDef[] pool, picks topics randomly (per mount),
// converts SvgConfig → JSX via TopicSvgRenderer, then passes to ExplorerEngine.

import { useMemo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import { getRandomTopics } from "@/lib/explorerUtils";
import TopicSvgRenderer from "./TopicSvgRenderer";

interface Props {
  /** Pool of topic definitions — typically 6-15 items */
  pool: PoolTopicDef[];
  /** Labels object (de/en/hu/ro) for this explorer */
  labels: Record<string, Record<string, string>>;
  /** Label key for the welcome screen title */
  title: string;
  /** Emoji icon shown on welcome screen */
  icon: string;
  /** How many topics to show per session (default 5) */
  count?: number;
  /** Optional difficulty mix — if omitted: fully random */
  mix?: { easy: number; medium: number; hard: number };
  /** Unique ID for progress tracking */
  explorerId: string;
  /** Accent color */
  color?: string;
  /** Language code */
  lang?: string;
  /** Grade (1-8) */
  grade?: number;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function DynamicExplorer({
  pool,
  labels,
  title,
  icon,
  count = 5,
  mix,
  explorerId,
  color = "#4ECDC4",
  lang = "de",
  grade = 1,
  onDone,
  onClose,
}: Props) {
  // useMemo with [] → randomised once per mount, different each visit
  const def = useMemo<ExplorerDef>(() => {
    const selected = getRandomTopics(pool, count, mix);
    const topics: TopicDef[] = selected.map(p => ({
      infoTitle:   p.infoTitle,
      infoText:    p.infoText,
      svg:         () => <TopicSvgRenderer config={p.svg} />,
      bulletKeys:  p.bulletKeys,
      hintKey:     p.hintKey,
      interactive: p.interactive,
      quiz:        p.quiz,
    }));
    return { labels, title, icon, topics, rounds: [] };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ExplorerEngine
      def={def}
      grade={grade}
      explorerId={explorerId}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
    />
  );
}
