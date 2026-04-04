import type { StarholdState } from "../types";
import { tickWarroomProduction } from "./production";

// ── Per-tick production advancement ────────────────────────────

export function tickWarRoom(state: StarholdState): StarholdState {
  return tickWarroomProduction(state);
}
