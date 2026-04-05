/**
 * Deterministic Pseudo-Random Number Generator (Mulberry32).
 * Fast and compatible with state mutations.
 */

export function mulberry32(a: number): number {
  let t = a + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export function nextRandom(rngState: number): { value: number; nextState: number } {
  // Advanced the state using a simple LCG-like step before feeding to mulberry32
  // We just add a prime to ensure state cycles.
  const nextState = (rngState + 0x9e3779b9) >>> 0;
  const value = mulberry32(nextState);
  return { value, nextState };
}

export function randomInt(rngState: number, min: number, max: number): { value: number; nextState: number } {
  const { value: floatVal, nextState } = nextRandom(rngState);
  const value = Math.floor(floatVal * (max - min + 1)) + min;
  return { value, nextState };
}
