import type { StarholdState } from "./types";

export const SAVE_KEY = "gravitas_state_v1";

export function saveGravitasState(state: StarholdState): void {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage errors
  }
}

export function loadGravitasState(): StarholdState | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StarholdState;
  } catch {
    return null;
  }
}

export function clearGravitasState(): void {
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch {
    // ignore
  }
}
