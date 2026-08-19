import type {
  ConstellationBuilderRound,
  MemoryRadarRound,
  MeteorCatchRound,
  OrbitSortRound,
  SignalRunnerRound,
} from "./types";
import type { HistoryGameId, HistoryLevel } from "./historyCurriculum";

export type LegacyHistoryRound =
  | MeteorCatchRound
  | OrbitSortRound
  | SignalRunnerRound
  | ConstellationBuilderRound
  | MemoryRadarRound;

function rotate<T>(items: T[], offset: number): T[] {
  if (items.length === 0) return [];
  const normalized = ((offset % items.length) + items.length) % items.length;
  return [...items.slice(normalized), ...items.slice(0, normalized)];
}
export function prepareLegacyHistoryRounds<T extends LegacyHistoryRound>(
  gameId: HistoryGameId,
  rounds: T[],
  grade: number,
  level: HistoryLevel,
): T[] {
  const ordered = rotate(rounds, (Math.max(5, grade) - 5) * 2 + level - 1);

  return ordered.map((round, index) => {
    const id = `${round.id}-g${grade}-l${level}-${index}`;
    if (gameId === "meteor-catch") {
      const meteor = round as MeteorCatchRound;
      const targetCount = Math.min(meteor.correctItems.length, 3 + Math.floor((level - 1) / 2));
      return {
        ...meteor,
        id,
        goal: Math.max(2, targetCount),
        speed: Math.min(9, Math.max(3, meteor.speed + (level - 1) * 0.5 + (grade - 5) * 0.2)),
        correctItems: rotate(meteor.correctItems, index + level).slice(0, targetCount),
        wrongItems: rotate(meteor.wrongItems, grade + index).slice(0, Math.min(meteor.wrongItems.length, 2 + Math.floor(level / 2))),
      } as T;
    }

    if (gameId === "memory-radar") {
      const memory = round as MemoryRadarRound;
      return {
        ...memory,
        id,
        flashDurationMs: Math.max(1600, memory.flashDurationMs - (level - 1) * 220 - (grade - 5) * 80),
      } as T;
    }

    return { ...round, id } as T;
  });
}
