import type { FactionId } from "../faction/types";
import type { BattleTacticId } from "../battle/types";
import type { LocalizedString } from "../types";
import type { GalaxyMaterialId } from "../../world/mission";

export interface WeeklyWaveResult {
  wave: number;
  victory: boolean;
  unitsLost: Record<string, number>;
  unitsWounded: Record<string, number>;
  damageDealt: number;
  damageReceived: number;
  enemyGarrisonDestroyed: number;
  traitTriggered: string[];
  counterUsed: string[];
  tacticId?: BattleTacticId;
  lessonText?: LocalizedString;
}

export interface WeeklyRewardBreakdown {
  wavesCompleted: number;
  baseReward: number;
  multiplier: number;
  materials: Partial<Record<GalaxyMaterialId, number>>;
  reputationBonus: number;
  reputationPenalty: number;
  rareDrop?: { name: LocalizedString; chance: number };
}

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
  waveResults: WeeklyWaveResult[];
  /** World level a küldetés indításakor */
  worldLevel: number;
  
  // Eredmény adatok (kitöltve ha completed vagy failed)
  rewardBreakdown?: WeeklyRewardBreakdown;
  overallLesson?: LocalizedString;
}

export interface WeeklyMissionState {
  /** Aktív küldetés (null ha nincs) */
  activeMission: WeeklyMission | null;
  /** Utolsó küldetés (vagy befejezett) eredményének megtekinthető másolata */
  lastReport?: WeeklyMission | null;
  /** Mikor volt az utolsó küldetés (Date.now()) */
  lastMissionAt: number;
  /** Hány küldetést teljesített összesen */
  completedCount: number;
  /** Következő küldetés megjelenési ideje (Date.now()) — előre generált */
  nextMissionAt: number;
}