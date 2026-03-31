"use client";
import React, { useState, useEffect } from "react";
import AstroMathExplorerHybrid from "@/components/AstroMathExplorerHybrid";
import { useLang } from "@/components/LanguageProvider";
import {
  G1_ISLANDS, loadG1Progress, saveG1Progress,
  isIslandUnlocked, isIslandDone, isMissionDone,
  isCheckpointUnlocked, isCheckpointDone,
  completeMission, completeTest, islandTotalStars,
  generateIslandQuestions, generateCheckpointQuestions
} from "@/lib/astromath";
import { G1_ISLAND_SVGS } from "../islands";

// Games
import OrbitQuiz from "@/app/astromath/games/OrbitQuiz";
import BlackHole from "@/app/astromath/games/BlackHole";
import GravitySort from "@/app/astromath/games/GravitySort";
import StarMatch from "@/app/astromath/games/StarMatch";
import NumberDuel from "@/app/astromath/games/NumberDuel";
import RocketLaunch from "@/app/astromath/games/RocketLaunch";
import TrueFalseBlitz from "@/app/astromath/games/TrueFalseBlitz";
import MissingNumber from "@/app/astromath/games/MissingNumber";
import G1TeachingSlide from "@/app/astromath/games/G1TeachingSlide";
import CountingExplorer from "@/app/astromath/games/CountingExplorer";
import AddSubExplorer from "@/app/astromath/games/AddSubExplorer";
import SubtractionExplorer from "@/app/astromath/games/SubtractionExplorer";
import DoubleHalfExplorer from "@/app/astromath/games/DoubleHalfExplorer";
import PlaceValue20Explorer from "@/app/astromath/games/PlaceValue20Explorer";
import WordProblemIntro from "@/app/astromath/games/WordProblemIntro";
import ShapesExplorer from "@/app/astromath/games/ShapesExplorer";
import ClockCoinsExplorer from "@/app/astromath/games/ClockCoinsExplorer";
import PatternExplorer from "@/app/astromath/games/PatternExplorer";

import { Lang, MathIslandConfig, MathMissionConfig, MathProgress } from "@/lib/astroMathConfigShared";
import { MathQuestion } from "@/lib/mathCurriculum";
import { T } from "@/app/astromath/games/translations";

export default function AstroMathG1Page() {
  const { lang } = useLang();
  const [progress, setProgress] = useState<MathProgress | null>(null);

  useEffect(() => {
    setProgress(loadG1Progress());
  }, []);

  if (!progress) return null;

  const renderGame = (
    gameType: string,
    island: MathIslandConfig,
    mission: MathMissionConfig | null,
    questions: MathQuestion[],
    activeLang: Lang,
    onDone: (s: number, t: number) => void,
    onCorrect: () => void,
    onWrong: () => void
  ) => {
    const color = island.color;
    switch (gameType) {
      case "orbit-quiz": return <OrbitQuiz questions={questions} color={color} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "black-hole": return <BlackHole questions={questions} color={color} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "gravity-sort": return <GravitySort sortRange={island.sortRange || [0, 20]} color={color} onDone={onDone} />;
      case "star-match": return <StarMatch questions={questions} color={color} onDone={onDone} />;
      case "number-duel": return <NumberDuel sortRange={island.sortRange || [0, 20]} color={color} onDone={onDone} />;
      case "true-false-blitz": return <TrueFalseBlitz topicKeys={island.topicKeys || []} color={color} lang={activeLang} onDone={onDone} />;
      case "missing-number": return <MissingNumber topicKeys={island.topicKeys || []} color={color} lang={activeLang} onDone={onDone} />;
      case "teaching-slide": return <G1TeachingSlide islandId={island.id} lang={activeLang} color={color} onDone={onDone} onExit={() => {}} />;
      case "counting-explorer": return <CountingExplorer color={color} lang={activeLang} onDone={onDone} />;
      case "addsub-explorer": return <AddSubExplorer color={color} lang={activeLang} onDone={onDone} />;
      case "subtraction-explorer": return <SubtractionExplorer color={color} lang={activeLang} onDone={onDone} />;
      case "double-half-explorer": return <DoubleHalfExplorer color={color} lang={activeLang} onDone={onDone} />;
      case "place-value-20": return <PlaceValue20Explorer color={color} lang={activeLang} onDone={onDone} />;
      case "word-problem-intro": return <WordProblemIntro color={color} lang={activeLang} onDone={onDone} />;
      case "shapes-explorer": return <ShapesExplorer color={color} lang={activeLang} onDone={onDone} />;
      case "clock-coins-explorer": return <ClockCoinsExplorer color={color} lang={activeLang} onDone={onDone} />;
      case "pattern-explorer": return <PatternExplorer color={color} lang={activeLang} onDone={onDone} />;
      case "rocket-launch": return <RocketLaunch questions={questions} color="#FF9500" onDone={() => onDone(0,0)} />;
      default: return <div>Unknown Game Type: {gameType}</div>;
    }
  };

  const t = T[lang as keyof typeof T] ?? T.en;

  return (
    <AstroMathExplorerHybrid
      grade={1}
      gradeLabel={{ en: "Grade 1 · Space Adventure", hu: "1. osztály · Űrkaland", de: "Klasse 1 · Weltraumabenteuer", ro: "Clasa 1 · Aventură spațială" }}
      islands={G1_ISLANDS as any}
      progress={progress}
      islandSvgs={G1_ISLAND_SVGS}
      checkpointPos={{ test1: { x: 155, y: 295 }, test2: { x: 155, y: 50 }, test3: { x: 155, y: -165 } }}
      checkpointTopics={t.testTopics as any}
      onIslandUnlocked={isIslandUnlocked}
      onIslandDone={isIslandDone}
      onMissionDone={isMissionDone}
      onCheckpointUnlocked={isCheckpointUnlocked}
      onCheckpointDone={isCheckpointDone}
      onCompleteMission={completeMission}
      onCompleteTest={completeTest}
      onSaveProgress={saveG1Progress}
      getIslandStars={islandTotalStars}
      getMissionStars={(p, i, m) => (p.missionStars || {})[`${i}_${m}`] || 0}
      generateQuestions={(island, lang) => generateIslandQuestions(island as any, lang as Lang)}
      generateCheckpointQuestions={(testId, lang) => generateCheckpointQuestions(testId, lang as Lang)}
      renderGame={renderGame}
    />
  );
}
