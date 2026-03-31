"use client";
import React, { useState, useEffect } from "react";
import AstroMathExplorerHybrid from "@/components/AstroMathExplorerHybrid";
import { useLang } from "@/components/LanguageProvider";
import {
  G7_ISLANDS, loadG7Progress, saveG7Progress,
  isIslandUnlockedG7, isIslandDoneG7, isMissionDoneG7,
  isCheckpointUnlockedG7, isCheckpointDoneG7,
  completeMissionG7, completeTestG7, islandTotalStarsG7,
  generateIslandQuestionsG7, generateCheckpointQuestionsG7,
  generatePowerSortRound
} from "@/lib/astromath7";
import { G7_ISLAND_SVGS } from "../islands-g7";

// Games
import OrbitQuiz from "@/app/astromath/games/OrbitQuiz";
import BlackHole from "@/app/astromath/games/BlackHole";
import GravitySort from "@/app/astromath/games/GravitySort";
import StarMatch from "@/app/astromath/games/StarMatch";
import NumberDuel from "@/app/astromath/games/NumberDuel";
import SpeedRound from "@/app/astromath/games/SpeedRound";
import FractionVisual from "@/app/astromath/games/FractionVisual";
import EquationDrill from "@/app/astromath/games/EquationDrill";
import PowerExplorer7 from "@/app/astromath/games/PowerExplorer7";
import AlgebraExplorer7 from "@/app/astromath/games/AlgebraExplorer7";
import EquationExplorer7 from "@/app/astromath/games/EquationExplorer7";
import InequalityExplorer7 from "@/app/astromath/games/InequalityExplorer7";
import TriangleExplorer7 from "@/app/astromath/games/TriangleExplorer7";
import PythagorasExplorer7 from "@/app/astromath/games/PythagorasExplorer7";
import CircleExplorer7 from "@/app/astromath/games/CircleExplorer7";
import StatExplorer7 from "@/app/astromath/games/StatExplorer7";
import TrueFalseBlitz from "@/app/astromath/games/TrueFalseBlitz";
import VisualChallenge from "@/app/astromath/games/VisualChallenge";
import RocketLaunch from "@/app/astromath/games/RocketLaunch";

// Visuals
import PythagoreanVisual from "@/components/grade7-visual/PythagoreanVisual";
import CylinderVolume from "@/components/grade7-visual/CylinderVolume";

import { Lang, MathIslandConfig, MathMissionConfig, MathProgress } from "@/lib/astroMathConfigShared";
import { MathQuestion } from "@/lib/mathCurriculum";

export default function AstroMathG7Page() {
  const { lang } = useLang();
  const [progress, setProgress] = useState<MathProgress | null>(null);

  useEffect(() => {
    setProgress(loadG7Progress());
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
      case "gravity-sort": return <GravitySort sortRange={island.sortRange || [0, 100]} color={color} onDone={onDone} generateRound={island.id === "i1" ? generatePowerSortRound : undefined} />;
      case "star-match": return <StarMatch questions={questions} color={color} onDone={onDone} />;
      case "number-duel": return <NumberDuel sortRange={island.sortRange || [0, 100]} color={color} onDone={onDone} />;
      case "speed-round": return <SpeedRound questions={questions} color={color} lang={activeLang} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "equation-drill": return <EquationDrill questions={questions} color={color} lang={activeLang} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "fraction-visual": return <FractionVisual color={color} lang={activeLang} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "algebra-explorer": return <AlgebraExplorer7 color={color} lang={activeLang} onDone={onDone} />;
      case "stat-explorer": return <StatExplorer7 color={color} lang={activeLang} onDone={onDone} />;
      case "true-false-blitz": return <TrueFalseBlitz topicKeys={island.topicKeys || []} color={color} lang={activeLang} onDone={onDone} />;
      case "power-explorer": return <PowerExplorer7 color={color} lang={activeLang} onDone={onDone} />;
      case "equation-explorer": return <EquationExplorer7 color={color} lang={activeLang} onDone={onDone} />;
      case "inequality-explorer": return <InequalityExplorer7 color={color} lang={activeLang} onDone={onDone} />;
      case "triangle-explorer": return <TriangleExplorer7 color={color} lang={activeLang} onDone={onDone} />;
      case "pythagoras-explorer": return <PythagorasExplorer7 color={color} lang={activeLang} onDone={onDone} />;
      case "circle-explorer": return <CircleExplorer7 color={color} lang={activeLang} onDone={onDone} />;
      case "visual-challenge":
        if (mission?.visualType === "pythagorean") return <VisualChallenge color={color} rounds={5} onDone={onDone} renderVisual={(l, onAns) => <PythagoreanVisual lang={l as any} onAnswer={onAns} />} />;
        if (mission?.visualType === "cylinder-volume") return <VisualChallenge color={color} rounds={5} onDone={onDone} renderVisual={(l, onAns) => <CylinderVolume lang={l as any} onAnswer={onAns} />} />;
        return null;
      case "rocket-launch": return <RocketLaunch questions={questions} color="#10B981" onDone={() => onDone(0,0)} />;
      default: return <div>Unknown Game Type: {gameType}</div>;
    }
  };

  const testTopicsG7: Record<string, Record<string, string>> = {
    en: { test1: "Powers, Algebra, Equations", test2: "Inequalities, Triangles, Pythagoras", test3: "Circles, Surface Area, Statistics" },
    hu: { test1: "Hatványok, algebra, egyenletek", test2: "Egyenlőtlenségek, háromszögek, Pitagorasz", test3: "Körök, felszín, statisztika" },
    de: { test1: "Potenzen, Algebra, Gleichungen", test2: "Ungleichungen, Dreiecke, Pythagoras", test3: "Kreise, Oberflächen, Statistik" },
    ro: { test1: "Puteri, algebră, ecuații", test2: "Inegalități, triunghiuri, Pitagora", test3: "Cercuri, suprafețe, statistică" },
  };

  return (
    <AstroMathExplorerHybrid
      grade={7}
      gradeLabel={{ en: "Grade 7 · Space Adventure", hu: "7. osztály · Űrkaland", de: "Klasse 7 · Weltraumabenteuer", ro: "Clasa 7 · Aventură spațială" }}
      islands={G7_ISLANDS as any}
      progress={progress}
      islandSvgs={G7_ISLAND_SVGS}
      checkpointPos={{ test1: { x: 155, y: 295 }, test2: { x: 155, y: 50 }, test3: { x: 155, y: -165 } }}
      checkpointTopics={testTopicsG7 as any}
      onIslandUnlocked={isIslandUnlockedG7}
      onIslandDone={isIslandDoneG7}
      onMissionDone={isMissionDoneG7}
      onCheckpointUnlocked={isCheckpointUnlockedG7}
      onCheckpointDone={isCheckpointDoneG7}
      onCompleteMission={completeMissionG7}
      onCompleteTest={completeTestG7}
      onSaveProgress={saveG7Progress}
      getIslandStars={islandTotalStarsG7}
      getMissionStars={(p, i, m) => (p.missionStars || {})[`${i}_${m}`] || 0}
      generateQuestions={(island, lang) => generateIslandQuestionsG7(island as any, lang as Lang)}
      generateCheckpointQuestions={(testId, lang) => generateCheckpointQuestionsG7(testId, lang as Lang)}
      renderGame={renderGame}
    />
  );
}
