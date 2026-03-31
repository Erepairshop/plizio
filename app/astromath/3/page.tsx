"use client";
import React, { useState, useEffect } from "react";
import AstroMathExplorerHybrid from "@/components/AstroMathExplorerHybrid";
import { useLang } from "@/components/LanguageProvider";
import {
  G3_ISLANDS, loadG3Progress, saveG3Progress,
  isIslandUnlockedG3, isIslandDoneG3, isMissionDoneG3,
  isCheckpointUnlockedG3, isCheckpointDoneG3,
  completeMissionG3, completeTestG3, islandTotalStarsG3,
  generateIslandQuestionsG3, generateCheckpointQuestionsG3
} from "@/lib/astromath3";
import { G3_ISLAND_SVGS } from "@/app/astromath/islands-g3";

// Games
import OrbitQuiz from "@/app/astromath/games/OrbitQuiz";
import BlackHole from "@/app/astromath/games/BlackHole";
import GravitySort from "@/app/astromath/games/GravitySort";
import StarMatch from "@/app/astromath/games/StarMatch";
import NumberDuel from "@/app/astromath/games/NumberDuel";
import SpeedRound from "@/app/astromath/games/SpeedRound";
import EquationDrill from "@/app/astromath/games/EquationDrill";
import ConceptExplorer from "@/app/astromath/games/ConceptExplorer";
import PlaceValueExplorer3 from "@/app/astromath/games/PlaceValueExplorer3";
import AdditionExplorer3 from "@/app/astromath/games/AdditionExplorer3";
import SubtractionExplorer3 from "@/app/astromath/games/SubtractionExplorer3";
import MultiplicationExplorer3 from "@/app/astromath/games/MultiplicationExplorer3";
import DivisionExplorer3 from "@/app/astromath/games/DivisionExplorer3";
import UnitExplorer3 from "@/app/astromath/games/UnitExplorer3";
import AreaExplorer3 from "@/app/astromath/games/AreaExplorer3";
import WordProblemExplorer3 from "@/app/astromath/games/WordProblemExplorer3";
import TrueFalseBlitz from "@/app/astromath/games/TrueFalseBlitz";
import ChainCalc from "@/app/astromath/games/ChainCalc";
import RocketLaunch from "@/app/astromath/games/RocketLaunch";

import { Lang, MathIslandConfig, MathMissionConfig, MathProgress } from "@/lib/astroMathConfigShared";
import { MathQuestion } from "@/lib/mathCurriculum";

export default function AstroMathG3Page() {
  const { lang } = useLang();
  const [progress, setProgress] = useState<MathProgress | null>(null);

  useEffect(() => {
    setProgress(loadG3Progress());
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
      case "concept-explorer":
        if (island.id === "i2") return <AdditionExplorer3 color={color} lang={activeLang} onDone={onDone} />;
        if (island.id === "i3") return <SubtractionExplorer3 color={color} lang={activeLang} onDone={onDone} />;
        if (island.id === "i4") return <MultiplicationExplorer3 color={color} lang={activeLang} onDone={onDone} />;
        return <ConceptExplorer color={color} lang={activeLang} onDone={onDone} />;
      case "place-value-explorer": return <PlaceValueExplorer3 color={color} lang={activeLang} onDone={onDone} />;
      case "division-explorer": return <DivisionExplorer3 color={color} lang={activeLang} onDone={onDone} />;
      case "area-explorer": return <AreaExplorer3 color={color} lang={activeLang} onDone={onDone} />;
      case "word-problem-explorer": return <WordProblemExplorer3 color={color} lang={activeLang} onDone={onDone} />;
      case "unit-explorer": return <UnitExplorer3 color={color} lang={activeLang} onDone={onDone} />;
      case "true-false-blitz": return <TrueFalseBlitz topicKeys={island.topicKeys || []} color={color} lang={activeLang} onDone={onDone} />;
      case "chain-calc": return <ChainCalc topicKeys={island.topicKeys || []} color={color} lang={activeLang} onDone={onDone} />;
      case "rocket-launch": return <RocketLaunch questions={questions} color="#FF9500" onDone={() => onDone(0,0)} />;
      default: return <div>Unknown Game Type: {gameType}</div>;
    }
  };

  const testTopicsG3: Record<string, Record<string, string>> = {
    en: { test1: "Place value, addition, subtraction", test2: "Multiplication, division, units", test3: "Geometry, perimeter, word problems" },
    hu: { test1: "Helyiérték, összeadás, kivonás", test2: "Szorzás, osztás, mértékegységek", test3: "Geometria, kerület, szöveges feladatok" },
    de: { test1: "Stellenwert, Addition, Subtraktion", test2: "Multiplikation, Division, Einheiten", test3: "Geometrie, Umfang, Sachaufgaben" },
    ro: { test1: "Valoare pozițională, adunare, scădere", test2: "Înmulțire, împărțire, unități", test3: "Geometrie, perimetru, probleme" },
  };

  return (
    <AstroMathExplorerHybrid
      grade={3}
      gradeLabel={{ en: "Grade 3 · Space Adventure", hu: "3. osztály · Űrkaland", de: "Klasse 3 · Weltraumabenteuer", ro: "Clasa 3 · Aventură spațială" }}
      islands={G3_ISLANDS as any}
      progress={progress}
      islandSvgs={G3_ISLAND_SVGS}
      checkpointPos={{ test1: { x: 155, y: 295 }, test2: { x: 155, y: 50 }, test3: { x: 155, y: -165 } }}
      checkpointTopics={testTopicsG3 as any}
      onIslandUnlocked={isIslandUnlockedG3}
      onIslandDone={isIslandDoneG3}
      onMissionDone={isMissionDoneG3}
      onCheckpointUnlocked={isCheckpointUnlockedG3}
      onCheckpointDone={isCheckpointDoneG3}
      onCompleteMission={completeMissionG3}
      onCompleteTest={completeTestG3}
      onSaveProgress={saveG3Progress}
      getIslandStars={islandTotalStarsG3}
      getMissionStars={(p, i, m) => (p.missionStars || {})[`${i}_${m}`] || 0}
      generateQuestions={(island, lang) => generateIslandQuestionsG3(island as any, lang as Lang)}
      generateCheckpointQuestions={(testId, lang) => generateCheckpointQuestionsG3(testId, lang as Lang)}
      renderGame={renderGame}
    />
  );
}
