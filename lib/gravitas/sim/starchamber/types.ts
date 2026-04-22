import type { LocalizedString } from "../types";

export type StarChamberCategory = "mobility" | "support" | "access" | "cohesion" | "specials";

export interface StarChamberItem {
  id: string;
  category: StarChamberCategory;
  name: LocalizedString;
  description: LocalizedString;
  /** Meta-currency cost to permanently unlock the item */
  unlockStarCost: number;
  /** Resource cost to activate/use the item (if applicable) */
  activationResourceCost?: Partial<Record<keyof import("../types").StarholdResources, number>>;
  /** Cooldown in ticks after activation */
  cooldownTicks?: number;
  /** If true, the item is a passive permanent bonus once unlocked */
  isPassive?: boolean;
  /** Requirements to even see/unlock the item */
  requirements?: {
    coreLevel?: number;
    completedResearch?: string[];
    milestoneId?: string;
  };
}

export interface StarChamberState {
  unlockedItemIds: string[];
  itemCooldowns: Record<string, number>; // itemId -> tick when ready
  rotation: import("./rotation/types").StarChamberRotationState;
}
