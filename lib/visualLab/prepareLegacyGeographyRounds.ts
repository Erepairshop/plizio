import type {
  ConstellationBuilderRound,
  MemoryRadarRound,
  MeteorCatchRound,
  OrbitSortRound,
  SignalRunnerRound,
} from "./multilingualTypes";
import type { GeographyGameId, GeographyLevel } from "./geographyCurriculum";

export type LegacyGeographyRound =
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

export function prepareLegacyGeographyRounds<T extends LegacyGeographyRound>(
  gameId: GeographyGameId,
  rounds: T[],
  grade: number,
  level: GeographyLevel,
): T[] {
  const ordered = rotate(rounds, (Math.max(5, grade) - 5) * 2 + level - 1);

  return ordered.map((round, index) => {
    const id = `${round.id}-g${grade}-l${level}-${index}`;
    if (gameId === "meteor-catch") {
      const meteor = round as MeteorCatchRound;
      const targetCount = Math.min(meteor.correctItems.length, 3 + Math.floor((level - 1) / 2));
      const correctItems = rotate(meteor.correctItems, index + level).slice(0, targetCount);
      const wrongItems = rotate(meteor.wrongItems, grade + index).slice(0, Math.min(meteor.wrongItems.length, 2 + Math.floor(level / 3)));
      return {
        ...meteor,
        id,
        goal: Math.max(2, correctItems.length),
        speed: Math.min(9, Math.max(3, meteor.speed + (level - 1) * 0.55 + (grade - 5) * 0.2)),
        correctItems,
        wrongItems,
      } as T;
    }

    if (gameId === "memory-radar") {
      const memory = round as MemoryRadarRound;
      return {
        ...memory,
        id,
        flashDurationMs: Math.max(1500, memory.flashDurationMs - (level - 1) * 250 - (grade - 5) * 100),
      } as T;
    }

    return { ...round, id } as T;
  });
}
