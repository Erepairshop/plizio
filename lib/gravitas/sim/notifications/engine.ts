import type { StarholdState, LocalizedString } from "../types";
import type { NotificationEntry, NotificationType } from "./types";
import { randomInt } from "../rng";

const MAX_NOTIFICATIONS = 20;
const AUTO_DISMISS_MS = 5 * 60 * 1000; // 5 minutes

export function createInitialNotificationState() {
  return { queue: [], unreadCount: 0 };
}

export function pushNotification(
  state: StarholdState,
  type: NotificationType,
  title: LocalizedString,
  message: LocalizedString,
  icon: string = "Bell"
): StarholdState {
  let currentRngState = state.globalRngState;
  const { value: r1, nextState: s1 } = randomInt(currentRngState, 0, 9999);
  currentRngState = s1;

  const newNotif: NotificationEntry = {
    id: `notif_${Date.now()}_${r1}`,
    type,
    title,
    message,
    icon,
    timestamp: Date.now(),
    read: false,
  };

  const newQueue = [newNotif, ...state.notifications.queue].slice(0, MAX_NOTIFICATIONS);
  
  return {
    ...state,
    globalRngState: currentRngState,
    notifications: {
      ...state.notifications,
      queue: newQueue,
      unreadCount: newQueue.filter(n => !n.read).length,
    }
  };
}

export function dismissNotification(state: StarholdState, id: string): StarholdState {
  const newQueue = state.notifications.queue.filter(n => n.id !== id);
  return {
    ...state,
    notifications: {
      ...state.notifications,
      queue: newQueue,
      unreadCount: newQueue.filter(n => !n.read).length,
    }
  };
}

export function markAllNotificationsRead(state: StarholdState): StarholdState {
  const newQueue = state.notifications.queue.map(n => ({ ...n, read: true }));
  return {
    ...state,
    notifications: {
      ...state.notifications,
      queue: newQueue,
      unreadCount: 0,
    }
  };
}

export function tickNotifications(state: StarholdState): StarholdState {
  if (state.tick % 10 !== 0) return state;

  const now = Date.now();
  let mutated = false;
  
  const newQueue = state.notifications.queue.filter(n => {
    if (now - n.timestamp > AUTO_DISMISS_MS) {
      mutated = true;
      return false; // auto-dismiss
    }
    return true;
  });

  if (mutated) {
    return {
      ...state,
      notifications: {
        ...state.notifications,
        queue: newQueue,
        unreadCount: newQueue.filter(n => !n.read).length,
      }
    };
  }

  return state;
}