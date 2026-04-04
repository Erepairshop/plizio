import type { LocalizedString } from "../types";

export type NotificationType = "research" | "raid" | "exposure" | "upgrade" | "weekly" | "dilemma" | "trade" | "general" | "repair" | "training" | "espionage" | "system";

export interface NotificationEntry {
  id: string;
  type: NotificationType;
  title: LocalizedString;
  message: LocalizedString;
  icon: string;
  timestamp: number; // Date.now() timestamp
  read: boolean;
}

export interface NotificationState {
  queue: NotificationEntry[];
  unreadCount: number;
}