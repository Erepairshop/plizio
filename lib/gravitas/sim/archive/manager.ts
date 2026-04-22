import type { StarholdState, LocalizedString } from "../types";
import type { ArchiveEvent, ArchiveCategory, ArchiveSeverity, ArchiveImportance } from "./types";
import { randomInt } from "../rng";

const MAX_ARCHIVE_EVENTS = 200;

/**
 * Pushes a new event to the central archive.
 * Handles deterministic ID generation and pruning of old/low-priority events.
 */
export function pushArchiveEvent(
  state: StarholdState,
  data: {
    category: ArchiveCategory;
    severity: ArchiveSeverity;
    importance: ArchiveImportance;
    title: LocalizedString;
    summary: LocalizedString;
    details?: ArchiveEvent["details"];
  }
): StarholdState {
  let rng = state.globalRngState;
  const { value: idSuffix, nextState: rng2 } = randomInt(rng, 1000, 9999);
  
  const newEvent: ArchiveEvent = {
    id: `evt_${state.tick}_${idSuffix}`,
    tick: state.tick,
    category: data.category,
    severity: data.severity,
    importance: data.importance,
    title: data.title,
    summary: data.summary,
    details: data.details,
    isRead: false,
  };

  let nextEvents = [newEvent, ...state.archive.events];

  // Pruning: if we exceed the limit, remove oldest low-importance events first
  if (nextEvents.length > MAX_ARCHIVE_EVENTS) {
    // Keep all importance 5 (milestones)
    // Sort by importance (asc) then tick (asc) to find candidates for removal
    const candidates = nextEvents
      .filter(e => e.importance < 5)
      .sort((a, b) => {
        if (a.importance !== b.importance) return a.importance - b.importance;
        return a.tick - b.tick;
      });

    const toRemoveCount = nextEvents.length - MAX_ARCHIVE_EVENTS;
    const toRemoveIds = new Set(candidates.slice(0, toRemoveCount).map(e => e.id));
    
    nextEvents = nextEvents.filter(e => !toRemoveIds.has(e.id));
  }

  return {
    ...state,
    globalRngState: rng2,
    archive: {
      ...state.archive,
      events: nextEvents,
    }
  };
}

/**
 * Marks all events as read up to the current tick.
 */
export function markArchiveAsRead(state: StarholdState): StarholdState {
  return {
    ...state,
    archive: {
      ...state.archive,
      events: state.archive.events.map(e => ({ ...e, isRead: true })),
      lastViewedTick: state.tick,
    }
  };
}
