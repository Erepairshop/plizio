"use client";

import AstroKemiaGradeGame from "@/components/AstroKemiaGradeGame";
import K7Explorer from "@/app/astrokemia/games/k7/K7Explorer";
import { useLang } from "@/components/LanguageProvider";
import {
  KEMIA_K7_CHECKPOINT_MAP,
  KEMIA_K7_ISLANDS,
  KEMIA_K7_TOPIC_LABELS,
  completeMissionKemiaK7,
  completeTestKemiaK7,
  generateCheckpointQuestionsKemiaK7,
  generateIslandQuestionsKemiaK7,
  islandTotalStarsKemiaK7,
  isCheckpointDoneKemiaK7,
  isCheckpointUnlockedKemiaK7,
  isIslandUnlockedKemiaK7,
  loadKemiaK7Progress,
  saveKemiaK7Progress,
} from "@/lib/astroKemia7";

export default function AstroKemiaGrade7Page() {
  const { lang } = useLang();
  const subtitle =
    lang === "hu"
      ? "Reakciók és kötések"
      : lang === "ro"
      ? "Reacții și legături"
      : lang === "en"
      ? "Reactions & Bonds"
      : "Reaktionen & Bindungen";

  return (
    <AstroKemiaGradeGame
      grade={7}
      title="AstroKemia"
      subtitle={subtitle}
      gameId="astrokemia"
      routeBase="/astrokemia"
      accentColor="#8B5CF6"
      islands={KEMIA_K7_ISLANDS}
      topicLabels={KEMIA_K7_TOPIC_LABELS}
      checkpointMap={KEMIA_K7_CHECKPOINT_MAP}
      loadProgress={loadKemiaK7Progress}
      saveProgress={saveKemiaK7Progress}
      completeMission={completeMissionKemiaK7}
      completeTest={completeTestKemiaK7}
      isIslandUnlocked={isIslandUnlockedKemiaK7}
      isCheckpointUnlocked={isCheckpointUnlockedKemiaK7}
      isCheckpointDone={isCheckpointDoneKemiaK7}
      islandTotalStars={islandTotalStarsKemiaK7}
      generateIslandQuestions={generateIslandQuestionsKemiaK7}
      generateCheckpointQuestions={generateCheckpointQuestionsKemiaK7}
      Explorer={K7Explorer}
    />
  );
}
