import type { FactionId } from "../faction/types";

export interface WeeklyMission {
  id: string;
  /** Védendő frakció */
  defenderFactionId: FactionId;
  /** Támadó frakció (legrosszabb rep) */
  attackerFactionId: FactionId;
  /** Mikor jelent meg */
  appearedAt: number;
  /** Mikor indul a támadás (appearedAt + 1h) */
  battleStartsAt: number;
  /** Készülési fázis / aktív hullám / vége */
  phase: "preparation" | "wave1" | "break1" | "wave2" | "break2" | "wave3" | "completed" | "failed";
  /** Fázis változás időpontja */
  phaseStartedAt: number;
  /** Berakott egységek */
  deployedUnits: Record<string, number> | null;
  /** Hullám eredmények */
  waveResults: Array<{ wave: number; victory: boolean; unitsLost: Record<string, number> }>;
  /** World level a küldetés indításakor */
  worldLevel: number;
}

export interface WeeklyMissionState {
  /** Aktív küldetés (null ha nincs) */
  activeMission: WeeklyMission | null;
  /** Mikor volt az utolsó küldetés (Date.now()) */
  lastMissionAt: number;
  /** Hány küldetést teljesített összesen */
  completedCount: number;
  /** Következő küldetés megjelenési ideje (Date.now()) — előre generált */
  nextMissionAt: number;
}