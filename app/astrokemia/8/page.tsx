"use client";

import AstroKemiaGradeGame from "@/components/AstroKemiaGradeGame";
import K8Explorer from "@/app/astrokemia/games/k8/K8Explorer";
import {
  KEMIA_K8_CHECKPOINT_MAP,
  KEMIA_K8_ISLANDS,
  KEMIA_K8_TOPIC_LABELS,
  completeMissionKemiaK8,
  completeTestKemiaK8,
  generateCheckpointQuestionsKemiaK8,
  generateIslandQuestionsKemiaK8,
  islandTotalStarsKemiaK8,
  isCheckpointDoneKemiaK8,
  isCheckpointUnlockedKemiaK8,
  isIslandUnlockedKemiaK8,
  loadKemiaK8Progress,
  saveKemiaK8Progress,
} from "@/lib/astroKemia8";

export default function AstroKemiaGrade8Page() {
  return (
    <AstroKemiaGradeGame
      grade={8}
      title="AstroKemia"
      subtitle="Klasse 8 bündelt organische Chemie, Energie, Technikbezug und moderne Anwendungen als kompletter AstroKemia-Endpfad."
      gameId="astrokemia"
      routeBase="/astrokemia"
      accentColor="#F97316"
      islands={KEMIA_K8_ISLANDS}
      topicLabels={KEMIA_K8_TOPIC_LABELS}
      checkpointMap={KEMIA_K8_CHECKPOINT_MAP}
      loadProgress={loadKemiaK8Progress}
      saveProgress={saveKemiaK8Progress}
      completeMission={completeMissionKemiaK8}
      completeTest={completeTestKemiaK8}
      isIslandUnlocked={isIslandUnlockedKemiaK8}
      isCheckpointUnlocked={isCheckpointUnlockedKemiaK8}
      isCheckpointDone={isCheckpointDoneKemiaK8}
      islandTotalStars={islandTotalStarsKemiaK8}
      generateIslandQuestions={generateIslandQuestionsKemiaK8}
      generateCheckpointQuestions={generateCheckpointQuestionsKemiaK8}
      Explorer={K8Explorer}
    />
  );
}
