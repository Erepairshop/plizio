"use client";

import AstroKemiaGradeGame from "@/components/AstroKemiaGradeGame";
import K5Explorer from "@/app/astrokemia/games/k5/K5Explorer";
import {
  KEMIA_K5_CHECKPOINT_MAP,
  KEMIA_K5_ISLANDS,
  KEMIA_K5_TOPIC_LABELS,
  completeMissionKemiaK5,
  completeTestKemiaK5,
  generateCheckpointQuestionsKemiaK5,
  generateIslandQuestionsKemiaK5,
  islandTotalStarsKemiaK5,
  isCheckpointDoneKemiaK5,
  isCheckpointUnlockedKemiaK5,
  isIslandUnlockedKemiaK5,
  loadKemiaK5Progress,
  saveKemiaK5Progress,
} from "@/lib/astroKemia5";

export default function AstroKemiaGrade5Page() {
  return (
    <AstroKemiaGradeGame
      grade={5}
      title="AstroKemia"
      subtitle="Klasse 5 verbindet Stoffe, Teilchenmodell, Gemische, Wasser und erste chemische Veränderungen in einem spielbaren Inselpfad."
      gameId="astrokemia"
      routeBase="/astrokemia"
      accentColor="#10B981"
      islands={KEMIA_K5_ISLANDS}
      topicLabels={KEMIA_K5_TOPIC_LABELS}
      checkpointMap={KEMIA_K5_CHECKPOINT_MAP}
      loadProgress={loadKemiaK5Progress}
      saveProgress={saveKemiaK5Progress}
      completeMission={completeMissionKemiaK5}
      completeTest={completeTestKemiaK5}
      isIslandUnlocked={isIslandUnlockedKemiaK5}
      isCheckpointUnlocked={isCheckpointUnlockedKemiaK5}
      isCheckpointDone={isCheckpointDoneKemiaK5}
      islandTotalStars={islandTotalStarsKemiaK5}
      generateIslandQuestions={generateIslandQuestionsKemiaK5}
      generateCheckpointQuestions={generateCheckpointQuestionsKemiaK5}
      Explorer={K5Explorer}
    />
  );
}
