import type { LocalizedString } from "../types";

export type CodexEntryId = string;
export type CodexCategory = "rules" | "tips" | "mechanics" | "lore";

export type CodexUnlockCondition =
  | { type: "always" }
  | { type: "coreLevelReached"; level: number }
  | { type: "moduleUsed"; moduleId: string }
  | { type: "battleWon"; count: number }
  | { type: "phaseReached"; phase: string }
  | { type: "systemUsed"; system: string };

export interface CodexEntry {
  id: CodexEntryId;
  category: CodexCategory;
  title: LocalizedString;
  content: LocalizedString;
  unlockCondition: CodexUnlockCondition;
  icon: string;
}

export interface CodexState {
  unlockedEntries: CodexEntryId[];
  readEntries: CodexEntryId[];
  lastUnlockedAt: number | null; // Date.now() timestamp
}