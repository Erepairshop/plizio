"use client";

import { useCallback, useEffect, useRef } from "react";

function normalizeSeed(seed: number | string) {
  if (typeof seed === "number") {
    return seed >>> 0;
  }

  let hash = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function createSeededRandom(seed: number | string) {
  let state = normalizeSeed(seed) || 1;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

export function shuffleDeterministic<T>(items: readonly T[], seed: number | string) {
  const random = createSeededRandom(seed);
  const next = [...items];

  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }

  return next;
}

export function seededNumber(seed: number | string, min = 0, max = 1) {
  const random = createSeededRandom(seed);
  return min + (max - min) * random();
}

export function useTimeoutRegistry() {
  const timeoutsRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    return () => {
      for (const timeoutId of timeoutsRef.current) {
        window.clearTimeout(timeoutId);
      }
      timeoutsRef.current.clear();
    };
  }, []);

  return useCallback((callback: () => void, delayMs: number) => {
    const timeoutId = window.setTimeout(() => {
      timeoutsRef.current.delete(timeoutId);
      callback();
    }, delayMs);

    timeoutsRef.current.add(timeoutId);
    return timeoutId;
  }, []);
}
