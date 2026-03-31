"use client";
import React, { useState, useEffect } from "react";
import AstroMathExplorerHybrid from "@/components/AstroMathExplorerHybrid";
import { useLang } from "@/components/LanguageProvider";
import {
  G6_ISLANDS, G6_CHECKPOINT_MAP, loadG6Progress, saveG6Progress,
  isIslandUnlockedG6, isIslandDoneG6, isMissionDoneG6,
  isCheckpointUnlockedG6, isCheckpointDoneG6,
  completeMissionG6, completeTestG6, islandTotalStarsG6,
  generateIslandQuestionsG6, generateCheckpointQuestionsG6
} from "@/lib/astromath6";
import { G6_ISLAND_SVGS } from "../islands-g6";

// Games
import OrbitQuiz from "@/app/astromath/games/OrbitQuiz";
import BlackHole from "@/app/astromath/games/BlackHole";
import GravitySort from "@/app/astromath/games/GravitySort";
import StarMatch from "@/app/astromath/games/StarMatch";
import NumberDuel from "@/app/astromath/games/NumberDuel";
import SpeedRound from "@/app/astromath/games/SpeedRound";
import FractionVisual from "@/app/astromath/games/FractionVisual";
import EquationDrill from "@/app/astromath/games/EquationDrill";
import ConceptExplorer from "@/app/astromath/games/ConceptExplorer";
import WordProblemExplorer from "@/app/astromath/games/WordProblemExplorer";
import TrueFalseBlitz from "@/app/astromath/games/TrueFalseBlitz";
import VisualChallenge from "@/app/astromath/games/VisualChallenge";
import RocketLaunch from "@/app/astromath/games/RocketLaunch";
import NegativeNumbersExplorer6 from "@/app/astromath/games/NegativeNumberExplorer6";
import PercentExplorer6 from "@/app/astromath/games/PercentExplorer6";
import RatioExplorer6 from "@/app/astromath/games/RatioExplorer6";
import AlgebraExplorer6 from "@/app/astromath/games/AlgebraExplorer6";
import GeometryAreaExplorer6 from "@/app/astromath/games/AreaExplorer6";
import FractionProExplorer6 from "@/app/astromath/games/FractionProExplorer6";
import DataExplorer6 from "@/app/astromath/games/StatExplorer6";

// Visuals
import TrapezoidAreaCalc from "@/components/grade6-visual/TrapezoidAreaCalc";
import PieChartRead from "@/components/grade6-visual/PieChartRead";

import { Lang, MathIslandConfig, MathMissionConfig, MathProgress } from "@/lib/astroMathConfigShared";
import { MathQuestion } from "@/lib/mathCurriculum";

export default function AstroMathG6Page() {
  const { lang } = useLang();
  const [progress, setProgress] = useState<MathProgress | null>(null);

  useEffect(() => {
    setProgress(loadG6Progress());
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
      case "orbit-quiz":
        return <OrbitQuiz questions={questions} color={color} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "black-hole":
        return <BlackHole questions={questions} color={color} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "gravity-sort":
        return <GravitySort sortRange={island.sortRange || [0, 100]} color={color} onDone={onDone} />;
      case "star-match":
        return <StarMatch questions={questions} color={color} onDone={onDone} />;
      case "number-duel":
        return <NumberDuel sortRange={island.sortRange || [0, 100]} color={color} onDone={onDone} />;
      case "speed-round":
        return <SpeedRound questions={questions} color={color} lang={activeLang} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "equation-drill":
        return <EquationDrill questions={questions} color={color} lang={activeLang} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "fraction-visual":
        return <FractionVisual color={color} lang={activeLang} onDone={onDone} onCorrect={onCorrect} onWrong={onWrong} />;
      case "fraction-pro-explorer":
        return <FractionProExplorer6 color={color} lang={activeLang} onDone={onDone} />;
      case "concept-explorer":
        return <ConceptExplorer color={color} lang={activeLang} grade={6} onDone={onDone} />;
      case "word-problem-explorer":
        return <WordProblemExplorer color={color} lang={activeLang} grade={6} onDone={onDone} />;
      case "area-explorer":
        return <GeometryAreaExplorer6 color={color} lang={activeLang} onDone={onDone} />;
      case "true-false-blitz":
        return <TrueFalseBlitz topicKeys={island.topicKeys || []} color={color} lang={activeLang} onDone={onDone} />;
      case "negative-number-line":
        return <NegativeNumbersExplorer6 color={color} lang={activeLang} onDone={onDone} />;
      case "percent-bar":
        return <PercentExplorer6 color={color} lang={activeLang} onDone={onDone} />;
      case "ratio-explorer":
        return <RatioExplorer6 color={color} lang={activeLang} onDone={onDone} />;
      case "algebra-explorer":
        return <AlgebraExplorer6 color={color} lang={activeLang} onDone={onDone} />;
      case "stat-explorer":
        return <DataExplorer6 color={color} lang={activeLang} onDone={onDone} />;
      case "rocket-launch":
        return <RocketLaunch questions={questions} color="#FF9500" onDone={() => onDone(0, 0)} />;
      case "visual-challenge":
        if (mission?.visualType === "trapezoid-area") {
          return <VisualChallenge color={color} rounds={5} onDone={onDone} renderVisual={(l, onAns) => <TrapezoidAreaCalc language={l as any} onAnswer={onAns} />} />;
        }
        if (mission?.visualType === "pie-chart") {
          return <VisualChallenge color={color} rounds={5} onDone={onDone} renderVisual={(l, onAns) => <PieChartRead language={l as any} onAnswer={onAns} />} />;
        }
        return null;
      default:
        return <div>Unknown Game Type: {gameType}</div>;
    }
  };

  const testTopicsG6: Record<string, Record<string, string>> = {
    en: { test1: "Negative Numbers, Fractions, Ratios & Proportions", test2: "Percentages, Speed, Algebra", test3: "Areas, Volumes, Statistics" },
    hu: { test1: "Negatív számok, törtek, arányok", test2: "Százalékszámítás, sebesség, algebra", test3: "Területek, térfogatok, statisztika" },
    de: { test1: "Negative Zahlen, Bruchrechnung, Verhältnisse", test2: "Prozentrechnung, Geschwindigkeit, Algebra", test3: "Flächen, Körper, Statistik" },
    ro: { test1: "Numere negative, fracții, proporții", test2: "Procente, viteză, algebră", test3: "Arii, volume, statistică" },
  };

  return (
    <AstroMathExplorerHybrid
      grade={6}
      gradeLabel={{
        en: "Grade 6 · Space Adventure",
        hu: "6. osztály · Űrkaland",
        de: "Klasse 6 · Weltraumabenteuer",
        ro: "Clasa 6 · Aventură spațială",
      }}
      islands={G6_ISLANDS as any}
      progress={progress}
      islandSvgs={G6_ISLAND_SVGS}
      checkpointPos={{
        test1: { x: 155, y: 295 },
        test2: { x: 155, y: 50 },
        test3: { x: 155, y: -165 },
      }}
      checkpointTopics={testTopicsG6 as any}
      onIslandUnlocked={isIslandUnlockedG6}
      onIslandDone={isIslandDoneG6}
      onMissionDone={isMissionDoneG6}
      onCheckpointUnlocked={isCheckpointUnlockedG6}
      onCheckpointDone={isCheckpointDoneG6}
      onCompleteMission={completeMissionG6}
      onCompleteTest={completeTestG6}
      onSaveProgress={saveG6Progress}
      getIslandStars={islandTotalStarsG6}
      getMissionStars={(p, i, m) => (p.missionStars || {})[`${i}_${m}`] || 0}
      generateQuestions={(island, lang) => generateIslandQuestionsG6(island as any, lang as Lang)}
      generateCheckpointQuestions={(testId, lang) => generateCheckpointQuestionsG6(testId, lang as Lang)}
      renderGame={renderGame}
    />
  );
}
