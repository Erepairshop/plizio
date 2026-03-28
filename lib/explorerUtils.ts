// lib/explorerUtils.ts
// Shared pooling utilities for data-driven explorer pools.

import type { PoolTopicDef } from "./explorerPools/types";

/** Return the generate-key for a topic's quiz, or null if manual. */
function quizGenKey(t: PoolTopicDef): string | null {
  return "generate" in t.quiz ? t.quiz.generate : null;
}

/**
 * Deduplicate generator keys in a selection.
 * For each topic whose generate-key already appears in an earlier slot,
 * try to swap it with an unused topic from the pool that has a different key.
 */
function deduplicateGenerators(selected: PoolTopicDef[], pool: PoolTopicDef[]): PoolTopicDef[] {
  const result = [...selected];
  const usedTitles = new Set(result.map(t => t.infoTitle));
  const usedGens = new Set<string>();

  for (let i = 0; i < result.length; i++) {
    const gen = quizGenKey(result[i]);
    if (gen && usedGens.has(gen)) {
      // Try to find a replacement from pool not already used and with a different gen key
      const replacement = pool
        .filter(t => !usedTitles.has(t.infoTitle) && quizGenKey(t) !== gen)
        .sort(() => Math.random() - 0.5)[0];
      if (replacement) {
        usedTitles.delete(result[i].infoTitle);
        result[i] = replacement;
        usedTitles.add(replacement.infoTitle);
      }
    }
    if (gen) usedGens.add(gen);
  }
  return result;
}

/**
 * Pick `count` random topics from a pool, ensuring no two selected topics
 * use the same quiz generator (reduces repeated question texts).
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
    const selected = [...pool].sort(() => Math.random() - 0.5).slice(0, count);
    return deduplicateGenerators(selected, pool);
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
  const shuffled = result.sort(() => Math.random() - 0.5);
  return deduplicateGenerators(shuffled, pool);
}

const SEEN_KEY_PREFIX = "plizio_seen_";
const SEEN_MAX = 10; // max 10 title stored = 2 sessions worth of history

/**
 * Like getRandomTopics, but avoids topics shown in the last ~2 sessions.
 * Uses localStorage to track recently-seen topic titles per explorer.
 * Falls back to the full pool if there aren't enough fresh topics.
 *
 * Call this from DynamicExplorer instead of getRandomTopics.
 * Selected titles are automatically saved to history.
 */
export function getRandomTopicsWithHistory(
  pool: PoolTopicDef[],
  count: number,
  explorerId: string,
  mix?: { easy: number; medium: number; hard: number }
): PoolTopicDef[] {
  let seen: string[] = [];
  try {
    seen = JSON.parse(localStorage.getItem(SEEN_KEY_PREFIX + explorerId) || "[]");
  } catch { seen = []; }

  // Prefer topics not seen recently; fall back to full pool if not enough fresh ones
  const fresh = pool.filter(t => !seen.includes(t.infoTitle));
  const sourcePool = fresh.length >= count ? fresh : pool;

  const selected = getRandomTopics(sourcePool, count, mix);

  // Persist the selected titles (newest first, capped at SEEN_MAX)
  try {
    const updated = [...selected.map(t => t.infoTitle), ...seen].slice(0, SEEN_MAX);
    localStorage.setItem(SEEN_KEY_PREFIX + explorerId, JSON.stringify(updated));
  } catch { /* ignore storage errors (e.g. SSR) */ }

  return selected;
}
