import type { LocalizedString } from "../types";
import type { BattlePhase } from "./types";

export interface BattleReplayEntry {
  phase: number;
  description: LocalizedString;
  damage?: number;
  source: "player" | "enemy" | "system";
}

export interface BattleReplayLog {
  entries: BattleReplayEntry[];
}

export function generateReplayLog(phases: BattlePhase[]): BattleReplayLog {
  return {
    entries: phases.map((p, idx) => ({
      phase: idx + 1,
      description: p.description,
      damage: p.damage,
      source: p.source === "player" ? "player" : p.source === "enemy" ? "enemy" : "system",
    }))
  };
}