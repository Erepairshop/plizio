import type { LocalizedString } from "../types";

export type TaskCategory = "collection" | "fleet" | "trade" | "expedition" | "repair" | "battle" | "discovery";

export interface DailyTask {
  id: string;
  category: TaskCategory;
  title: LocalizedString;
  description: LocalizedString;
  targetValue: number;
  reward: {
    stars?: number;
    resources?: Partial<Record<keyof import("../types").StarholdResources, number>>;
    antimatter?: number;
    chronoCore?: number;
  };
}

export interface ActiveTaskInstance extends DailyTask {
  dayIndex: number; // 0-6 (Monday-Sunday)
}

export interface DailyTaskState {
  weeklySet: ActiveTaskInstance[];
  progress: Record<string, number>; // taskId -> current value
  claimedTaskIds: string[];
  lastWeeklyRefreshTick: number;
}
