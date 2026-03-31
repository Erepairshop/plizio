"use client";
import React, { useState, useEffect } from "react";
import AstroMathExplorerHybrid from "@/components/AstroMathExplorerHybrid";
import { useLang } from "@/components/LanguageProvider";
import {
  G5_ISLANDS, loadG5Progress, saveG5Progress,
  isIslandUnlockedG5, isIslandDoneG5, isMissionDoneG5,
  isCheckpointUnlockedG5, isCheckpointDoneG5,
  completeMissionG5, completeTestG5, islandTotalStarsG5,
  generateIslandQuestionsG5, generateCheckpointQuestionsG5
} from "@/lib/astromath5";
import { G5_ISLAND_SVGS } from "../islands-g5";

// Games
import OrbitQuiz from "@/app/astromath/games/OrbitQuiz";
import BlackHole from "@/app/astromath/games/BlackHole";
import GravitySort from "@/app/astromath/games/GravitySort";
import StarMatch from "@/app/astromath/games/StarMatch";
import NumberDuel from "@/app/astromath/games/NumberDuel";
import SpeedRound from "@/app/astromath/games/SpeedRound";
import FractionVisual from "@/app/astromath/games/FractionVisual";
import EquationDrill from "@/app/astromath/games/EquationDrill";
import MulDivExplorer5 from "@/app/astromath/games/MulDivExplorer5";
import PlaceValueExplorer5 from "@/app/astromath/games/PlaceValueExplorer5";
import DecimalExplorer5 from "@/app/astromath/games/DecimalExplorer5";
import WordProblemExplorer5 from "@/app/astromath/games/WordProblemExplorer5";
import UnitExplorer5 from "@/app/astromath/games/UnitExplorer5";
import GeometryExplorer5 from "@/app/astromath/games/GeometryExplorer5";
import FractionExplorer5 from "@/app/astromath/games/FractionExplorer5";
import TrueFalseBlitz from "@/app/astromath/games/TrueFalseBlitz";
import ChainCalc from "@/app/astromath/games/ChainCalc";
import AddSubExplorer5 from "@/app/astromath/games/AddSubExplorer5";
import RocketLaunch from "@/app/astromath/games/RocketLaunch";

import { Lang, MathIslandConfig, MathMissionConfig, MathProgress } from "@/lib/astroMathConfigShared";
import { MathQuestion } from "@/lib/mathCurriculum";

export default function AstroMathG5Page() {
  const { lang } = useLang();
  const [progress, setProgress] = useState<MathProgress | null>(null);

  useEffect(() => {
    setProgress(loadG5Progress());
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
      case "concept-explorer": return <MulDivExplorer5 color={color} lang={activeLang} onDone={onDone} />;
      case "place-value-explorer": return <PlaceValueExplorer5 color={color} lang={activeLang} onDone={onDone} />;
      case "decimal-explorer": return <DecimalExplorer5 color={color} lang={activeLang} onDone={onDone} />;
      case "word-problem-explorer": return <WordProblemExplorer5 color={color} lang={activeLang} onDone={onDone} />;
      case "unit-explorer": return <UnitExplorer5 color={color} lang={activeLang} onDone={onDone} />;
      case "angle-explorer": return <GeometryExplorer5 color={color} lang={activeLang} onDone={onDone} />;
      case "true-false-blitz": return <TrueFalseBlitz topicKeys={island.topicKeys || []} color={color} lang={activeLang} onDone={onDone} />;
      case "chain-calc": return <ChainCalc topicKeys={island.topicKeys || []} color={color} lang={activeLang} onDone={onDone} />;
      case "addsub-explorer": return <AddSubExplorer5 color={color} lang={activeLang} onDone={onDone} />;
      case "fraction-explorer-5": return <FractionExplorer5 color={color} lang={activeLang} onDone={onDone} />;
      case "rocket-launch": return <RocketLaunch questions={questions} color="#FF9500" onDone={() => onDone(0,0)} />;
      default: return <div>Unknown Game Type: {gameType}</div>;
    }
  };

  const testTopicsG5: Record<string, Record<string, string>> = {
    en: { test1: "Large Numbers, Addition, Subtraction, Multiplication, Division", test2: "Fractions, Decimals, Geometry, Angles", test3: "Units, Measurement, Statistics, Word Problems" },
    hu: { test1: "Nagy számok, összeadás, kivonás, szorzás, osztás", test2: "Törtek, tizedes számok, geometria, szögek", test3: "Mértékegységek, mérés, statisztika, szöveges feladatok" },
    de: { test1: "Große Zahlen, Addition, Subtraktion, Multiplikation, Division", test2: "Brüche, Dezimalzahlen, Geometrie, Winkel", test3: "Einheiten, Messen, Statistik, Sachaufgaben" },
    ro: { test1: "Numere mari, adunare, scădere, înmulțire, împărțire", test2: "Fracții, numere zecimale, geometrie, unghiuri", test3: "Unități, măsurare, statistică, probleme" },
  };

  return (
    <AstroMathExplorerHybrid
      grade={5}
      gradeLabel={{ en: "Grade 5 · Space Adventure", hu: "5. osztály · Űrkaland", de: "Klasse 5 · Weltraumabenteuer", ro: "Clasa 5 · Aventură spațială" }}
      islands={G5_ISLANDS as any}
      progress={progress}
      islandSvgs={G5_ISLAND_SVGS}
      checkpointPos={{ test1: { x: 155, y: 295 }, test2: { x: 155, y: 50 }, test3: { x: 155, y: -165 } }}
      checkpointTopics={testTopicsG5 as any}
      onIslandUnlocked={isIslandUnlockedG5}
      onIslandDone={isIslandDoneG5}
      onMissionDone={isMissionDoneG5}
      onCheckpointUnlocked={isCheckpointUnlockedG5}
      onCheckpointDone={isCheckpointDoneG5}
      onCompleteMission={completeMissionG5}
      onCompleteTest={completeTestG5}
      onSaveProgress={saveG5Progress}
      getIslandStars={islandTotalStarsG5}
      getMissionStars={(p, i, m) => (p.missionStars || {})[`${i}_${m}`] || 0}
      generateQuestions={(island, lang) => generateIslandQuestionsG5(island as any, lang as Lang)}
      generateCheckpointQuestions={(testId, lang) => generateCheckpointQuestionsG5(testId, lang as Lang)}
      renderGame={renderGame}
    />
  );
}
