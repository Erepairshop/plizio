"use client";
import React, { useState, useEffect } from "react";
import AstroMathExplorerHybrid from "@/components/AstroMathExplorerHybrid";
import { useLang } from "@/components/LanguageProvider";
import {
  G8_ISLANDS, loadG8Progress, saveG8Progress,
  isIslandUnlockedG8, isIslandDoneG8, isMissionDoneG8,
  isCheckpointUnlockedG8, isCheckpointDoneG8,
  completeMissionG8, completeTestG8, islandTotalStarsG8,
  generateIslandQuestionsG8, generateCheckpointQuestionsG8,
  generateSqrtSortRound
} from "@/lib/astromath8";
import { G8_ISLAND_SVGS } from "../islands-g8";

// Games
import OrbitQuiz from "@/app/astromath/games/OrbitQuiz";
import BlackHole from "@/app/astromath/games/BlackHole";
import GravitySort from "@/app/astromath/games/GravitySort";
import StarMatch from "@/app/astromath/games/StarMatch";
import NumberDuel from "@/app/astromath/games/NumberDuel";
import SpeedRound from "@/app/astromath/games/SpeedRound";
import FractionVisual from "@/app/astromath/games/FractionVisual";
import EquationDrill from "@/app/astromath/games/EquationDrill";
import SqrtExplorer8 from "@/app/astromath/games/SqrtExplorer8";
import QuadraticExplorer8 from "@/app/astromath/games/QuadraticExplorer8";
import EquationExplorer8 from "@/app/astromath/games/EquationExplorer8";
import SystemExplorer8 from "@/app/astromath/games/SystemExplorer8";
import FunctionExplorer8 from "@/app/astromath/games/FunctionExplorer8";
import ProbabilityExplorer8 from "@/app/astromath/games/ProbabilityExplorer8";
import StatExplorer8 from "@/app/astromath/games/StatExplorer8";
import TransformExplorer8 from "@/app/astromath/games/TransformExplorer8";
import TrueFalseBlitz from "@/app/astromath/games/TrueFalseBlitz";
import VisualChallenge from "@/app/astromath/games/VisualChallenge";
import RocketLaunch from "@/app/astromath/games/RocketLaunch";

// Visuals
import CylinderSurface from "@/components/grade8-visual/CylinderSurface";
import TransformationGrid from "@/components/grade8-visual/TransformationGrid";

import { Lang, MathIslandConfig, MathMissionConfig, MathProgress } from "@/lib/astroMathConfigShared";
import { MathQuestion } from "@/lib/mathCurriculum";

export default function AstroMathG8Page() {
  const { lang } = useLang();
  const [progress, setProgress] = useState<MathProgress | null>(null);

  useEffect(() => {
    setProgress(loadG8Progress());
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
      case "gravity-sort": return <GravitySort sortRange={island.sortRange || [0, 100]} color={color} onDone={onDone} generateRound={island.id === "i1" ? generateSqrtSortRound : undefined} />;
      case "star-match": return <StarMatch questions={questions} color={color} onDone={onDone} />;
      case "number-duel": return <NumberDuel sortRange={island.sortRange || [0, 100]} color={color} onDone={onDone} />;
      case "speed-round": return <SpeedRound questions={questions} color={color} lang={activeLang} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "equation-drill": return <EquationDrill questions={questions} color={color} lang={activeLang} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "fraction-visual": return <FractionVisual color={color} lang={activeLang} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "stat-explorer": return <StatExplorer8 color={color} lang={activeLang} onDone={onDone} />;
      case "true-false-blitz": return <TrueFalseBlitz topicKeys={island.topicKeys || []} color={color} lang={activeLang} onDone={onDone} />;
      case "equation-explorer": return <EquationExplorer8 color={color} lang={activeLang} onDone={onDone} />;
      case "sqrt-explorer": return <SqrtExplorer8 color={color} lang={activeLang} onDone={onDone} />;
      case "quadratic-explorer": return <QuadraticExplorer8 color={color} lang={activeLang} onDone={onDone} />;
      case "system-explorer": return <SystemExplorer8 color={color} lang={activeLang} onDone={onDone} />;
      case "function-explorer": return <FunctionExplorer8 color={color} lang={activeLang} onDone={onDone} />;
      case "probability-explorer": return <ProbabilityExplorer8 color={color} lang={activeLang} onDone={onDone} />;
      case "transform-explorer": return <TransformExplorer8 color={color} lang={activeLang} onDone={onDone} />;
      case "visual-challenge":
        if (mission?.visualType === "cylinder-surface") return <VisualChallenge color={color} rounds={5} onDone={onDone} renderVisual={(l, onAns) => <CylinderSurface lang={l as any} onAnswer={onAns} />} />;
        if (mission?.visualType === "transformation") return <VisualChallenge color={color} rounds={5} onDone={onDone} renderVisual={(l, onAns) => <TransformationGrid lang={l as any} onAnswer={onAns} />} />;
        return null;
      case "rocket-launch": return <RocketLaunch questions={questions} color="#E879F9" onDone={() => onDone(0,0)} />;
      default: return <div>Unknown Game Type: {gameType}</div>;
    }
  };

  const testTopicsG8: Record<string, Record<string, string>> = {
    en: { test1: "Square roots, Quadratics, Equations", test2: "Systems of equations, Functions, Probability", test3: "Statistics, Transformations, Geometry" },
    hu: { test1: "Négyzetgyökök, másodfokú egyenletek, egyenletek", test2: "Egyenletrendszerek, függvények, valószínűség", test3: "Statisztika, transzformációk, geometria" },
    de: { test1: "Quadratwurzeln, quadratische Gleichungen, Gleichungen", test2: "Gleichungssysteme, Funktionen, Wahrscheinlichkeit", test3: "Statistik, Transformationen, Geometrie" },
    ro: { test1: "Rădăcini pătrate, ecuații pătratice, ecuații", test2: "Sisteme de ecuații, funcții, probabilitate", test3: "Statistică, transformări, geometrie" },
  };

  return (
    <AstroMathExplorerHybrid
      grade={8}
      gradeLabel={{ en: "Grade 8 · Space Adventure", hu: "8. osztály · Űrkaland", de: "Klasse 8 · Weltraumabenteuer", ro: "Clasa 8 · Aventură spațială" }}
      islands={G8_ISLANDS as any}
      progress={progress}
      islandSvgs={G8_ISLAND_SVGS}
      checkpointPos={{ test1: { x: 155, y: 295 }, test2: { x: 155, y: 50 }, test3: { x: 155, y: -165 } }}
      checkpointTopics={testTopicsG8 as any}
      onIslandUnlocked={isIslandUnlockedG8}
      onIslandDone={isIslandDoneG8}
      onMissionDone={isMissionDoneG8}
      onCheckpointUnlocked={isCheckpointUnlockedG8}
      onCheckpointDone={isCheckpointDoneG8}
      onCompleteMission={completeMissionG8}
      onCompleteTest={completeTestG8}
      onSaveProgress={saveG8Progress}
      getIslandStars={islandTotalStarsG8}
      getMissionStars={(p, i, m) => (p.missionStars || {})[`${i}_${m}`] || 0}
      generateQuestions={(island, lang) => generateIslandQuestionsG8(island as any, lang as Lang)}
      generateCheckpointQuestions={(testId, lang) => generateCheckpointQuestionsG8(testId, lang as Lang)}
      renderGame={renderGame}
    />
  );
}
