import type { StarholdState, LocalizedString } from "../types";
import type { DailyTaskState, ActiveTaskInstance, TaskCategory } from "./types";
import { TASK_POOL } from "./registry";
import { randomInt } from "../rng";
import { withAlert, addResourceDelta, clamp, pushJournal } from "../shared";
import { pushArchiveEvent } from "../archive/manager";

const TICKS_PER_DAY = 86400;
const TICKS_PER_WEEK = 604800;

/**
 * Refreshes the weekly task set if a new week has started.
 */
export function tickDailyTasks(state: StarholdState): StarholdState {
  const currentWeek = Math.floor(state.tick / TICKS_PER_WEEK);
  const lastWeek = Math.floor(state.dailyTasks.lastWeeklyRefreshTick / TICKS_PER_WEEK);

  if (currentWeek > lastWeek || state.dailyTasks.weeklySet.length === 0) {
    return refreshWeeklyTasks(state);
  }

  return state;
}

function refreshWeeklyTasks(state: StarholdState): StarholdState {
  let rng = state.globalRngState;
  const weeklySet: ActiveTaskInstance[] = [];
  
  // Shuffle the pool and pick 7 tasks
  const pool = [...TASK_POOL];
  for (let i = 0; i < 7; i++) {
    const { value: index, nextState: n1 } = randomInt(rng, 0, pool.length - 1);
    rng = n1;
    const base = pool.splice(index, 1)[0] || TASK_POOL[i % TASK_POOL.length];
    weeklySet.push({
      ...base,
      dayIndex: i,
    });
  }

  return {
    ...state,
    globalRngState: rng,
    dailyTasks: {
      weeklySet,
      progress: {},
      claimedTaskIds: [],
      lastWeeklyRefreshTick: state.tick,
    }
  };
}

/**
 * Increments progress for a specific task category.
 */
export function updateTaskProgress(state: StarholdState, category: TaskCategory, delta: number): StarholdState {
  const dayIndex = Math.floor(state.tick / TICKS_PER_DAY) % 7;
  const activeTask = state.dailyTasks.weeklySet.find(t => t.dayIndex === dayIndex && t.category === category);
  
  if (!activeTask) return state;

  const currentProgress = state.dailyTasks.progress[activeTask.id] || 0;
  if (currentProgress >= activeTask.targetValue) return state;

  const nextProgress = Math.min(activeTask.targetValue, currentProgress + delta);

  return {
    ...state,
    dailyTasks: {
      ...state.dailyTasks,
      progress: {
        ...state.dailyTasks.progress,
        [activeTask.id]: nextProgress,
      }
    }
  };
}

export function claimTaskReward(state: StarholdState, taskId: string): StarholdState {
  const task = state.dailyTasks.weeklySet.find(t => t.id === taskId);
  if (!task) return state;

  const progress = state.dailyTasks.progress[taskId] || 0;
  if (progress < task.targetValue) {
    return withAlert(state, { en: "Task not completed.", hu: "Feladat még nincs kész.", de: "Aufgabe noch nicht abgeschlossen.", ro: "Sarcină nefinalizată." });
  }

  if (state.dailyTasks.claimedTaskIds.includes(taskId)) {
    return withAlert(state, { en: "Reward already claimed.", hu: "Jutalom már felvéve.", de: "Belohnung bereits beansprucht.", ro: "Recompensă deja revendicată." });
  }

  let nextState = state;

  // Apply rewards
  if (task.reward.stars) {
    nextState.progression.stars += task.reward.stars;
  }
  if (task.reward.antimatter) {
    nextState.resources.antimatter = clamp(nextState.resources.antimatter + task.reward.antimatter, 0, state.derived?.maxAntimatter ?? 100);
  }
  if (task.reward.chronoCore) {
    nextState.resources.chronoCore = (nextState.resources.chronoCore || 0) + task.reward.chronoCore;
  }
  if (task.reward.resources) {
    nextState.resources = addResourceDelta(nextState.resources, task.reward.resources);
  }

  const journalText: LocalizedString = {
    en: `Daily Task: ${task.title.en} completed. Reward claimed.`,
    hu: `Napi feladat: ${task.title.hu} teljesítve. Jutalom felvéve.`,
    de: `Tägliche Aufgabe: ${task.title.de} abgeschlossen. Belohnung beansprucht.`,
    ro: `Sarcină zilnică: ${task.title.ro} finalizată. Recompensă revendicată.`
  };

  nextState = {
    ...nextState,
    journal: pushJournal(nextState, journalText),
    alert: journalText,
    dailyTasks: {
      ...nextState.dailyTasks,
      claimedTaskIds: [...nextState.dailyTasks.claimedTaskIds, taskId],
    }
  };

  return pushArchiveEvent(nextState, {
    category: "reward",
    severity: "success",
    importance: 3,
    title: task.title,
    summary: journalText,
    details: { targetId: taskId }
  });
}
