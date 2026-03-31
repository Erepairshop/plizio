"use client";
import React, { useState, useEffect } from "react";
import AstroMathExplorerHybrid from "@/components/AstroMathExplorerHybrid";
import { useLang } from "@/components/LanguageProvider";
import {
  G4_ISLANDS, loadG4Progress, saveG4Progress,
  isIslandUnlockedG4, isIslandDoneG4, isMissionDoneG4,
  isCheckpointUnlockedG4, isCheckpointDoneG4,
  completeMissionG4, completeTestG4, islandTotalStarsG4,
  generateIslandQuestionsG4, generateCheckpointQuestionsG4
} from "@/lib/astromath4";
import { G4_ISLAND_SVGS } from "@/app/astromath/islands-g4";

// Games
import OrbitQuiz from "@/app/astromath/games/OrbitQuiz";
import BlackHole from "@/app/astromath/games/BlackHole";
import GravitySort from "@/app/astromath/games/GravitySort";
import StarMatch from "@/app/astromath/games/StarMatch";
import NumberDuel from "@/app/astromath/games/NumberDuel";
import SpeedRound from "@/app/astromath/games/SpeedRound";
import FractionVisual from "@/app/astromath/games/FractionVisual";
import EquationDrill from "@/app/astromath/games/EquationDrill";
import MultiplicationExplorer4 from "@/app/astromath/games/MultiplicationExplorer4";
import PlaceValueExplorer4 from "@/app/astromath/games/PlaceValueExplorer4";
import DivisionExplorer4 from "@/app/astromath/games/DivisionExplorer4";
import AreaExplorer4 from "@/app/astromath/games/AreaExplorer4";
import WordProblemExplorer4 from "@/app/astromath/games/WordProblemExplorer4";
import UnitExplorer4 from "@/app/astromath/games/UnitExplorer4";
import AngleExplorer4 from "@/app/astromath/games/AngleExplorer4";
import FractionExplorer4 from "@/app/astromath/games/FractionExplorer4";
import TrueFalseBlitz from "@/app/astromath/games/TrueFalseBlitz";
import ChainCalc from "@/app/astromath/games/ChainCalc";
import MissingNumber from "@/app/astromath/games/MissingNumber";
import RocketLaunch from "@/app/astromath/games/RocketLaunch";

import { Lang, MathIslandConfig, MathMissionConfig, MathProgress } from "@/lib/astroMathConfigShared";
import { MathQuestion } from "@/lib/mathCurriculum";

export default function AstroMathG4Page() {
  const { lang } = useLang();
  const [progress, setProgress] = useState<MathProgress | null>(null);

  useEffect(() => {
    setProgress(loadG4Progress());
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
      case "gravity-sort": return <GravitySort sortRange={island.sortRange || [0, 100]} color={color} onDone={onDone} />;
      case "star-match": return <StarMatch questions={questions} color={color} onDone={onDone} />;
      case "number-duel": return <NumberDuel sortRange={island.sortRange || [0, 100]} color={color} onDone={onDone} />;
      case "speed-round": return <SpeedRound questions={questions} color={color} lang={activeLang} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "equation-drill": return <EquationDrill questions={questions} color={color} lang={activeLang} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "fraction-visual": return <FractionVisual color={color} lang={activeLang} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "concept-explorer": return <MultiplicationExplorer4 color={color} lang={activeLang} onDone={onDone} />;
      case "place-value-explorer": return <PlaceValueExplorer4 color={color} lang={activeLang} onDone={onDone} />;
      case "division-explorer": return <DivisionExplorer4 color={color} lang={activeLang} onDone={onDone} />;
      case "area-explorer": return <AreaExplorer4 color={color} lang={activeLang} onDone={onDone} />;
      case "word-problem-explorer": return <WordProblemExplorer4 color={color} lang={activeLang} onDone={onDone} />;
      case "unit-explorer": return <UnitExplorer4 color={color} lang={activeLang} onDone={onDone} />;
      case "angle-explorer": return <AngleExplorer4 color={color} lang={activeLang} onDone={onDone} />;
      case "fraction-explorer-4": return <FractionExplorer4 color={color} lang={activeLang} onDone={onDone} />;
      case "true-false-blitz": return <TrueFalseBlitz topicKeys={island.topicKeys || []} color={color} lang={activeLang} onDone={onDone} />;
      case "chain-calc": return <ChainCalc topicKeys={island.topicKeys || []} color={color} lang={activeLang} onDone={onDone} />;
      case "missing-number": return <MissingNumber topicKeys={island.topicKeys || []} color={color} lang={activeLang} onDone={onDone} />;
      case "rocket-launch": return <RocketLaunch questions={questions} color="#FF9500" onDone={() => onDone(0,0)} />;
      default: return <div>Unknown Game Type: {gameType}</div>;
    }
  };

  const testTopicsG4: Record<string, Record<string, string>> = {
    en: { test1: "Large Numbers, Multiplication, Division", test2: "Fractions, Geometry, Word Problems", test3: "Units, Angles, Symmetry" },
    hu: { test1: "Nagy számok, szorzás, osztás", test2: "Törtek, geometria, szöveges feladatok", test3: "Mértékegységek, szögek, szimmetria" },
    de: { test1: "Große Zahlen, Multiplikation, Division", test2: "Bruchrechnung, Geometrie, Sachaufgaben", test3: "Einheiten, Winkel, Symmetrie" },
    ro: { test1: "Numere mari, înmulțire, împărțire", test2: "Fracții, geometrie, probleme", test3: "Unități, unghiuri, simetrie" },
  };

  return (
    <AstroMathExplorerHybrid
      grade={4}
      gradeLabel={{ en: "Grade 4 · Space Adventure", hu: "4. osztály · Űrkaland", de: "Klasse 4 · Weltraumabenteuer", ro: "Clasa 4 · Aventură spațială" }}
      islands={G4_ISLANDS as any}
      progress={progress}
      islandSvgs={G4_ISLAND_SVGS}
      checkpointPos={{ test1: { x: 155, y: 295 }, test2: { x: 155, y: 50 }, test3: { x: 155, y: -165 } }}
      checkpointTopics={testTopicsG4 as any}
      onIslandUnlocked={isIslandUnlockedG4}
      onIslandDone={isIslandDoneG4}
      onMissionDone={isMissionDoneG4}
      onCheckpointUnlocked={isCheckpointUnlockedG4}
      onCheckpointDone={isCheckpointDoneG4}
      onCompleteMission={completeMissionG4}
      onCompleteTest={completeTestG4}
      onSaveProgress={saveG4Progress}
      getIslandStars={islandTotalStarsG4}
      getMissionStars={(p, i, m) => (p.missionStars || {})[`${i}_${m}`] || 0}
      generateQuestions={(island, lang) => generateIslandQuestionsG4(island as any, lang as Lang)}
      generateCheckpointQuestions={(testId, lang) => generateCheckpointQuestionsG4(testId, lang as Lang)}
      renderGame={renderGame}
    />
  );
}
