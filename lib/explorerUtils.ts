// lib/explorerUtils.ts
// Shared pooling utilities for data-driven explorer pools.

import type { PoolTopicDef } from "./explorerPools/types";

/**
 * Pick `count` random topics from a pool.
 *
 * Simple mode (no mix): fully random shuffle, take first `count`.
 *
 * Difficulty mix mode: pick exactly n easy + n medium + n hard,
 * then shuffle the result so difficulty order is random.
 * Falls back gracefully if a difficulty bucket has fewer items than requested.
 *
 * Example:
 *   getRandomTopics(POOL, 5)
 *   getRandomTopics(POOL, 5, { easy: 2, medium: 2, hard: 1 })
 */
export function getRandomTopics(
  pool: PoolTopicDef[],
  count: number,
  mix?: { easy: number; medium: number; hard: number }
): PoolTopicDef[] {
  if (!mix) {
    return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
  }

  const pick = (diff: "easy" | "medium" | "hard", n: number): PoolTopicDef[] =>
    pool
      .filter(t => (t.difficulty ?? "medium") === diff)
      .sort(() => Math.random() - 0.5)
      .slice(0, n);

  const result = [
    ...pick("easy",   mix.easy),
    ...pick("medium", mix.medium),
    ...pick("hard",   mix.hard),
  ];

  // Shuffle so difficulty order doesn't predict the sequence
  return result.sort(() => Math.random() - 0.5);
}
