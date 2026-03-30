"use client";

import AstroKemiaGradeGame from "@/components/AstroKemiaGradeGame";
import K6Explorer from "@/app/astrokemia/games/k6/K6Explorer";
import {
  KEMIA_K6_CHECKPOINT_MAP,
  KEMIA_K6_ISLANDS,
  KEMIA_K6_TOPIC_LABELS,
  completeMissionKemiaK6,
  completeTestKemiaK6,
  generateCheckpointQuestionsKemiaK6,
  generateIslandQuestionsKemiaK6,
  islandTotalStarsKemiaK6,
  isCheckpointDoneKemiaK6,
  isCheckpointUnlockedKemiaK6,
  isIslandUnlockedKemiaK6,
  loadKemiaK6Progress,
  saveKemiaK6Progress,
} from "@/lib/astroKemia6";

export default function AstroKemiaGrade6Page() {
  return (
    <AstroKemiaGradeGame
      grade={6}
      title="AstroKemia"
      subtitle="Klasse 6 vertieft Atome, Verbindungen, Reaktionen, Säuren/Basen und Umweltchemie als kompletter Inselpfad."
      gameId="astrokemia"
      routeBase="/astrokemia"
      accentColor="#3B82F6"
      islands={KEMIA_K6_ISLANDS}
      topicLabels={KEMIA_K6_TOPIC_LABELS}
      checkpointMap={KEMIA_K6_CHECKPOINT_MAP}
      loadProgress={loadKemiaK6Progress}
      saveProgress={saveKemiaK6Progress}
      completeMission={completeMissionKemiaK6}
      completeTest={completeTestKemiaK6}
      isIslandUnlocked={isIslandUnlockedKemiaK6}
      isCheckpointUnlocked={isCheckpointUnlockedKemiaK6}
      isCheckpointDone={isCheckpointDoneKemiaK6}
      islandTotalStars={islandTotalStarsKemiaK6}
      generateIslandQuestions={generateIslandQuestionsKemiaK6}
      generateCheckpointQuestions={generateCheckpointQuestionsKemiaK6}
      Explorer={K6Explorer}
    />
  );
}
