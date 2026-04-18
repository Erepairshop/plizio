"use client";

import AstroKemiaGradeGame from "@/components/AstroKemiaGradeGame";
import { useState } from "react";
import VisualLab, { VisualLabFab } from "@/components/VisualLab";
import K6Explorer from "@/app/astrinformatika/games/k6/K6Explorer";
import { useLang } from "@/components/LanguageProvider";
import {
  INFO_K6_ISLANDS,
  INFO_K6_CHECKPOINT_MAP,
  INFO_K6_TOPIC_LABELS,
  loadInfoK6Progress,
  saveInfoK6Progress,
  completeMissionInfoK6,
  completeTestInfoK6,
  isIslandUnlockedInfoK6,
  isCheckpointUnlockedInfoK6,
  isCheckpointDoneInfoK6,
  islandTotalStarsInfoK6,
  generateIslandQuestionsInfoK6,
  generateCheckpointQuestionsInfoK6,
} from "@/lib/astroInformatika6";

export default function AstroInformatikaGrade6Page() {
  const [visualLabOpen, setVisualLabOpen] = useState(false);
  const { lang } = useLang();
  const subtitle =
    lang === "hu" ? "Hálózatok és prezentáció"
    : lang === "ro" ? "Rețele și prezentare"
    : lang === "en" ? "Networks & Presentations"
    : "Netzwerke & Präsentationen";

  return (
    <>
      <AstroKemiaGradeGame
      grade={6}
      title="AstroInformatika"
      subtitle={subtitle}
      gameId="astrinformatika"
      routeBase="/astrinformatika"
      accentColor="#8B5CF6"
      islands={INFO_K6_ISLANDS}
      topicLabels={INFO_K6_TOPIC_LABELS}
      checkpointMap={INFO_K6_CHECKPOINT_MAP}
      loadProgress={loadInfoK6Progress}
      saveProgress={saveInfoK6Progress}
      completeMission={completeMissionInfoK6}
      completeTest={completeTestInfoK6}
      isIslandUnlocked={isIslandUnlockedInfoK6}
      isCheckpointUnlocked={isCheckpointUnlockedInfoK6}
      isCheckpointDone={isCheckpointDoneInfoK6}
      islandTotalStars={islandTotalStarsInfoK6}
      generateIslandQuestions={generateIslandQuestionsInfoK6}
      generateCheckpointQuestions={generateCheckpointQuestionsInfoK6}
      Explorer={K6Explorer}
      visualLabSubject="informatika"
    />
      <VisualLabFab onClick={() => setVisualLabOpen(true)} />
      <VisualLab subject="informatika" grade={6} lang={lang} open={visualLabOpen} onClose={() => setVisualLabOpen(false)} />
    </>
  );
}
