import type { LocalizedString } from "../types";

export type ArchiveCategory = 
  | "battle" 
  | "fleet" 
  | "expedition" 
  | "trade" 
  | "research" 
  | "alert" 
  | "unlock" 
  | "system" 
  | "reward";

export type ArchiveSeverity = "info" | "success" | "warning" | "danger" | "critical";

/** 
 * Importance level for pruning:
 * 1: Low (routine, can be deleted early)
 * 3: Medium (standard reports)
 * 5: High (major milestones, never deleted automatically)
 */
export type ArchiveImportance = 1 | 2 | 3 | 4 | 5;

export interface ArchiveEvent {
  id: string;
  tick: number;
  category: ArchiveCategory;
  severity: ArchiveSeverity;
  importance: ArchiveImportance;
  title: LocalizedString;
  summary: LocalizedString;
  /** Optional structured data for the UI to render specialized views (e.g. loot list, casualty counts) */
  details?: {
    loot?: Record<string, number>;
    casualties?: {
      killed: Record<string, number>;
      wounded: Record<string, number>;
    };
    outcome?: string;
    targetId?: string;
    officerId?: string;
    researchId?: string;
  };
  isRead: boolean;
}

export interface ArchiveState {
  events: ArchiveEvent[];
  lastViewedTick: number;
  
  /** Legacy fields for backward compatibility and specialized logs */
  expiredMapNodes: import("../map/types").MapNode[];
  completedFleets: import("../map/types").FleetMovement[];
  completedExpeditions: import("../expeditions/types").ActiveExpedition[];
  completedTrades: import("../trade/types").ActiveTrade[];
  completedMissions: import("../espionage/types").EspionageMission[];
  battleHistory: import("../battle/types").BattleHistoryEntry[];
}
