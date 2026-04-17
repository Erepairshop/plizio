import type { GeographieVisualLabGradePool } from "@/lib/visualLab/types";

const emptyGrade = (grade: 5 | 6 | 7 | 8): GeographieVisualLabGradePool => ({
  grade,
  meteorCatch: [],
  orbitSort: [],
  signalRunner: [],
  constellationBuilder: [],
  memoryRadar: [],
});

export const BIOLOGIE_POOLS: Record<number, GeographieVisualLabGradePool> = {
  5: emptyGrade(5),
  6: emptyGrade(6),
  7: emptyGrade(7),
  8: emptyGrade(8),
};
