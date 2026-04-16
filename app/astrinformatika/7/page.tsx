"use client";

import AstroKemiaGradeGame from "@/components/AstroKemiaGradeGame";
import K7Explorer from "@/app/astrinformatika/games/k7/K7Explorer";
import { useLang } from "@/components/LanguageProvider";
import {
  INFO_K7_ISLANDS,
  INFO_K7_CHECKPOINT_MAP,
  INFO_K7_TOPIC_LABELS,
  loadInfoK7Progress,
  saveInfoK7Progress,
  completeMissionInfoK7,
  completeTestInfoK7,
  isIslandUnlockedInfoK7,
  isCheckpointUnlockedInfoK7,
  isCheckpointDoneInfoK7,
  islandTotalStarsInfoK7,
  generateIslandQuestionsInfoK7,
  generateCheckpointQuestionsInfoK7,
} from "@/lib/astroInformatika7";

export default function AstroInformatikaGrade7Page() {
  const { lang } = useLang();
  const subtitle =
    lang === "hu" ? "Programozás és adatbázisok"
    : lang === "ro" ? "Programare și baze de date"
    : lang === "en" ? "Programming & Databases"
    : "Programmierung & Datenbanken";

  return (
    <AstroKemiaGradeGame
      grade={7}
      title="AstroInformatika"
      subtitle={subtitle}
      gameId="astrinformatika"
      routeBase="/astrinformatika"
      accentColor="#F59E0B"
      islands={INFO_K7_ISLANDS}
      topicLabels={INFO_K7_TOPIC_LABELS}
      checkpointMap={INFO_K7_CHECKPOINT_MAP}
      loadProgress={loadInfoK7Progress}
      saveProgress={saveInfoK7Progress}
      completeMission={completeMissionInfoK7}
      completeTest={completeTestInfoK7}
      isIslandUnlocked={isIslandUnlockedInfoK7}
      isCheckpointUnlocked={isCheckpointUnlockedInfoK7}
      isCheckpointDone={isCheckpointDoneInfoK7}
      islandTotalStars={islandTotalStarsInfoK7}
      generateIslandQuestions={generateIslandQuestionsInfoK7}
      generateCheckpointQuestions={generateCheckpointQuestionsInfoK7}
      Explorer={K7Explorer}
      visualLabSubject="informatika"
    />
  );
}
