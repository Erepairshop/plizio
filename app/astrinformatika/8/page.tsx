"use client";

import AstroKemiaGradeGame from "@/components/AstroKemiaGradeGame";
import K8Explorer from "@/app/astrinformatika/games/k8/K8Explorer";
import { useLang } from "@/components/LanguageProvider";
import {
  INFO_K8_ISLANDS,
  INFO_K8_CHECKPOINT_MAP,
  INFO_K8_TOPIC_LABELS,
  loadInfoK8Progress,
  saveInfoK8Progress,
  completeMissionInfoK8,
  completeTestInfoK8,
  isIslandUnlockedInfoK8,
  isCheckpointUnlockedInfoK8,
  isCheckpointDoneInfoK8,
  islandTotalStarsInfoK8,
  generateIslandQuestionsInfoK8,
  generateCheckpointQuestionsInfoK8,
} from "@/lib/astroInformatika8";

export default function AstroInformatikaGrade8Page() {
  const { lang } = useLang();
  const subtitle =
    lang === "hu" ? "Hálózatok és kiberbiztonság"
    : lang === "ro" ? "Rețele și securitate cibernetică"
    : lang === "en" ? "Networks & Cybersecurity"
    : "Netzwerke & Cybersicherheit";

  return (
    <AstroKemiaGradeGame
      grade={8}
      title="AstroInformatika"
      subtitle={subtitle}
      gameId="astrinformatika"
      routeBase="/astrinformatika"
      accentColor="#EF4444"
      islands={INFO_K8_ISLANDS}
      topicLabels={INFO_K8_TOPIC_LABELS}
      checkpointMap={INFO_K8_CHECKPOINT_MAP}
      loadProgress={loadInfoK8Progress}
      saveProgress={saveInfoK8Progress}
      completeMission={completeMissionInfoK8}
      completeTest={completeTestInfoK8}
      isIslandUnlocked={isIslandUnlockedInfoK8}
      isCheckpointUnlocked={isCheckpointUnlockedInfoK8}
      isCheckpointDone={isCheckpointDoneInfoK8}
      islandTotalStars={islandTotalStarsInfoK8}
      generateIslandQuestions={generateIslandQuestionsInfoK8}
      generateCheckpointQuestions={generateCheckpointQuestionsInfoK8}
      Explorer={K8Explorer}
      visualLabSubject="informatika"
    />
  );
}
