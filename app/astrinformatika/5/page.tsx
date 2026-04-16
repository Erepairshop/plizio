"use client";

import AstroKemiaGradeGame from "@/components/AstroKemiaGradeGame";
import K5Explorer from "@/app/astrinformatika/games/k5/K5Explorer";
import { useLang } from "@/components/LanguageProvider";
import {
  INFO_K5_ISLANDS,
  INFO_K5_CHECKPOINT_MAP,
  INFO_K5_TOPIC_LABELS,
  loadInfoK5Progress,
  saveInfoK5Progress,
  completeMissionInfoK5,
  completeTestInfoK5,
  isIslandUnlockedInfoK5,
  isCheckpointUnlockedInfoK5,
  isCheckpointDoneInfoK5,
  islandTotalStarsInfoK5,
  generateIslandQuestionsInfoK5,
  generateCheckpointQuestionsInfoK5,
} from "@/lib/astroInformatika5";

export default function AstroInformatikaGrade5Page() {
  const { lang } = useLang();
  const subtitle =
    lang === "hu" ? "Számítógép és internet alapjai"
    : lang === "ro" ? "Bazele calculatoarelor și internetului"
    : lang === "en" ? "Computer & Internet Basics"
    : "Computer & Internet Grundlagen";

  return (
    <AstroKemiaGradeGame
      grade={5}
      title="AstroInformatika"
      subtitle={subtitle}
      gameId="astrinformatika"
      routeBase="/astrinformatika"
      accentColor="#3B82F6"
      islands={INFO_K5_ISLANDS}
      topicLabels={INFO_K5_TOPIC_LABELS}
      checkpointMap={INFO_K5_CHECKPOINT_MAP}
      loadProgress={loadInfoK5Progress}
      saveProgress={saveInfoK5Progress}
      completeMission={completeMissionInfoK5}
      completeTest={completeTestInfoK5}
      isIslandUnlocked={isIslandUnlockedInfoK5}
      isCheckpointUnlocked={isCheckpointUnlockedInfoK5}
      isCheckpointDone={isCheckpointDoneInfoK5}
      islandTotalStars={islandTotalStarsInfoK5}
      generateIslandQuestions={generateIslandQuestionsInfoK5}
      generateCheckpointQuestions={generateCheckpointQuestionsInfoK5}
      Explorer={K5Explorer}
      visualLabSubject="informatika"
    />
  );
}
