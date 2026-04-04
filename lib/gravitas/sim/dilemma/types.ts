import type { LocalizedString } from "../types";
import type { FactionId } from "../faction/types";
import type { GalaxyMaterialId } from "../../world/mission";

export type DilemmaId = string; // "refugees", "trader_offer", stb.

export interface DilemmaOption {
  id: string; // "A", "B", "C", "D"
  label: LocalizedString;
  description: LocalizedString;
}

export interface DilemmaEvent {
  id: DilemmaId;
  name: LocalizedString;
  description: LocalizedString;
  /** Melyik frakció érintett (null ha általános) */
  factionId: FactionId | null;
  options: DilemmaOption[];
  /** Milyen ciklus fázisban jelenhet meg (null = bármikor) */
  requiredPhase: import("../galaxy/types").GalaxyCyclePhase | null;
  /** Feltétel: min module level, min reputáció, stb */
  conditions: DilemmaCondition;
  /** Hány naponta jelenhet meg max (rate limit) */
  cooldownDays: number;
  /** Ritka? (havonta max 1 ha true) */
  rare: boolean;
}

export interface DilemmaCondition {
  minPlayDays?: number;
  minModuleLevel?: Partial<Record<string, number>>;
  minReputation?: Partial<Record<FactionId, number>>;
  minResource?: Partial<Record<string, number>>;
  requirePreviousChoice?: { dilemmaId: DilemmaId; optionId: string };
  isGalaxyActive?: boolean;
}

export interface DilemmaChoice {
  dilemmaId: DilemmaId;
  optionId: string;
  timestamp: number; // Date.now()
  factionId: FactionId | null;
}

/** Azonnali hatás amit a választás után azonnal alkalmazunk */
export interface DilemmaImmediateEffect {
  reputationChanges?: Partial<Record<FactionId, number>>;
  resourceChanges?: Partial<Record<string, number>>; // supply, power, morale, activation, stb
  materialChanges?: Partial<Record<GalaxyMaterialId, number>>;
  garrisonChange?: number; // - szám = veszteség
  moduleOffline?: { moduleId: string; durationTicks: number };
  repairSlotPause?: number; // tick
}

/** Késleltetett hatás — X nap múlva aktiválódik */
export interface DilemmaDelayedEffect {
  id: string;
  triggerAt: number; // Date.now() + delay
  chance: number; // 0-1, alkalmazás esélye
  effect: DilemmaImmediateEffect;
  journalText: LocalizedString;
}

export interface DilemmaSystemState {
  /** Korábban hozott döntések */
  history: DilemmaChoice[];
  /** Aktív késleltetett hatások amik még nem triggerelődtek */
  pendingEffects: DilemmaDelayedEffect[];
  /** Utolsó dilemma megjelenés ideje (rate limit) */
  lastDilemmaAt: number;
  /** Utolsó ritka dilemma hónapja */
  lastRareMonth: number;
  /** Jelenleg aktív dilemma amit a játékos még nem döntött el */
  activeDilemma: { event: DilemmaEvent; appearedAt: number } | null;
}
