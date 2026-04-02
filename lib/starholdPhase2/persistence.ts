import type { Phase2State } from "./types";
import { createInitialPhase2State } from "./createInitialState";

const SAVE_KEY = "starhold_phase2_v1";
const MAX_LOG = 30;

export function savePhase2State(state: Phase2State): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(
      SAVE_KEY,
      JSON.stringify({
        ...state,
        log: state.log.slice(0, MAX_LOG),
      }),
    );
  } catch {
    // ignore persistence failures for the scaffold
  }
}

export function loadPhase2State(): Phase2State | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Phase2State>;
    const base = createInitialPhase2State();
    return {
      ...base,
      ...parsed,
      resources: { ...base.resources, ...(parsed.resources ?? {}) },
      vitals: { ...base.vitals, ...(parsed.vitals ?? {}) },
      station: { ...base.station, ...(parsed.station ?? {}) },
      avatar: { ...base.avatar, ...(parsed.avatar ?? {}) },
      galaxy: {
        ...base.galaxy,
        ...(parsed.galaxy ?? {}),
        nodes: parsed.galaxy?.nodes ?? base.galaxy.nodes,
      },
      wave: { ...base.wave, ...(parsed.wave ?? {}) },
      log: parsed.log?.slice(0, MAX_LOG) ?? base.log,
    };
  } catch {
    return null;
  }
}
