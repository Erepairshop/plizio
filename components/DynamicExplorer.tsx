"use client";
// DynamicExplorer.tsx
// Universal pool-based explorer component.
// Receives a PoolTopicDef[] pool, picks topics randomly (per mount),
// converts SvgConfig → JSX via TopicSvgRenderer, then passes to ExplorerEngine.
//
// QUIZ MODES:
//   Manual:    quiz: { question: "t1_q", choices: [...], answer: "t1_qa" }
//   Generator: quiz: { generate: "artikel_k2" }  ← auto from deutschGenerators.ts

import { useMemo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import type { PoolTopicDef } from "@/lib/explorerPools/types";
import { getRandomTopicsWithHistory } from "@/lib/explorerUtils";
import { GENERATORS as DEUTSCH_GENERATORS } from "@/lib/deutschGenerators";
import { K5_Generators } from "@/lib/biologieGenerators";
import { K6_Generators } from "@/lib/biologieGenerators6";
import TopicSvgRenderer from "./TopicSvgRenderer";

const BIO_GENERATORS: Record<string, () => any> = {};
// Flatten K5_Generators for easy access: "category_subtopic"
Object.entries(K5_Generators).forEach(([cat, subs]) => {
  Object.entries(subs).forEach(([sub, gen]) => {
    BIO_GENERATORS[`${cat}_${sub}`] = gen;
  });
});
// Register K6_Generators directly (flat structure, not nested like K5)
// Keys are used directly: "arthropods", "insects", "blood_components", etc.
Object.entries(K6_Generators).forEach(([key, gen]) => {
  BIO_GENERATORS[key] = gen as () => any;
});

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

/**
 * Resolves a quiz definition:
 * - Manual mode: returns as-is (label keys)
 * - Generator mode: calls the generator, returns actual text directly
 *   (ExplorerEngine's L() falls back to the key itself when not found in labels,
 *    so passing actual text works transparently)
 */
function resolveQuiz(p: PoolTopicDef): { question: string; choices: string[]; answer: string } {
  const q = p.quiz;
  if ("generate" in q) {
    const gen = DEUTSCH_GENERATORS[q.generate] || BIO_GENERATORS[q.generate];
    if (gen) {
      const result = gen();
      // Handle array result
      const qObj = Array.isArray(result) ? result[Math.floor(Math.random() * result.length)] : result;
      if (qObj && qObj.type === "mcq") {
        return {
          question: qObj.question,
          choices:  qObj.options,
          answer:   qObj.options[qObj.correct],
        };
      }
    }
    // fallback if generator key unknown
    return { question: `? (${q.generate})`, choices: ["?", "?", "?", "?"], answer: "?" };
  }
  return q;
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
    const selected = getRandomTopicsWithHistory(pool, count, explorerId, mix);

    // Deduplicate by resolved question TEXT (generator variety is limited,
    // same generator can produce identical question strings in one session).
    const usedTitles = new Set(selected.map(p => p.infoTitle));
    const usedQuestions = new Set<string>();
    const deduped = selected.map(p => {
      const quiz = resolveQuiz(p);
      if (usedQuestions.has(quiz.question)) {
        // Try to find a replacement from pool with a unique question text
        const replacement = pool
          .filter(t => !usedTitles.has(t.infoTitle))
          .map(t => ({ t, quiz: resolveQuiz(t) }))
          .find(({ quiz: rq }) => !usedQuestions.has(rq.question));
        if (replacement) {
          usedTitles.delete(p.infoTitle);
          usedTitles.add(replacement.t.infoTitle);
          usedQuestions.add(replacement.quiz.question);
          return { p: replacement.t, quiz: replacement.quiz };
        }
      }
      usedQuestions.add(quiz.question);
      return { p, quiz };
    });

    const topics: TopicDef[] = deduped.map(({ p, quiz }) => ({
      infoTitle:   p.infoTitle,
      infoText:    p.infoText,
      svg:         () => <TopicSvgRenderer config={p.svg} lang={lang} />,
      bulletKeys:  p.bulletKeys,
      hintKey:     p.hintKey,
      interactive: p.interactive,
      quiz,
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
