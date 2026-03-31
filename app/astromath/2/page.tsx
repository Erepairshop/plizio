"use client";
import React, { useState, useEffect } from "react";
import AstroMathExplorerHybrid from "@/components/AstroMathExplorerHybrid";
import { useLang } from "@/components/LanguageProvider";
import {
  G2_ISLANDS, loadG2Progress, saveG2Progress,
  isIslandUnlockedG2, isIslandDoneG2, isMissionDoneG2,
  isCheckpointUnlockedG2, isCheckpointDoneG2,
  completeMissionG2, completeTestG2, islandTotalStarsG2,
  generateIslandQuestionsG2, generateCheckpointQuestionsG2
} from "@/lib/astromath2";
import { G2_ISLAND_SVGS } from "@/app/astromath/islands-g2";

// Games
import OrbitQuiz from "@/app/astromath/games/OrbitQuiz";
import BlackHole from "@/app/astromath/games/BlackHole";
import GravitySort from "@/app/astromath/games/GravitySort";
import StarMatch from "@/app/astromath/games/StarMatch";
import NumberDuel from "@/app/astromath/games/NumberDuel";
import RocketLaunch from "@/app/astromath/games/RocketLaunch";
import G2TeachingSlide from "@/app/astromath/games/G2TeachingSlide";
import PlaceValue100Explorer from "@/app/astromath/games/PlaceValue100Explorer";
import MentalMathExplorer from "@/app/astromath/games/MentalMathExplorer";
import ColumnAddSubExplorer from "@/app/astromath/games/ColumnAddSubExplorer";
import CarryBorrowExplorer from "@/app/astromath/games/CarryBorrowExplorer";
import MultiplicationExplorer from "@/app/astromath/games/MultiplicationExplorer";
import DivisionIntroExplorer from "@/app/astromath/games/DivisionIntroExplorer";
import G2MeasurementExplorer from "@/app/astromath/games/G2MeasurementExplorer";

import { Lang, MathIslandConfig, MathMissionConfig, MathProgress } from "@/lib/astroMathConfigShared";
import { MathQuestion } from "@/lib/mathCurriculum";

export default function AstroMathG2Page() {
  const { lang } = useLang();
  const [progress, setProgress] = useState<MathProgress | null>(null);

  useEffect(() => {
    setProgress(loadG2Progress());
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
      case "g2-teaching": return <G2TeachingSlide islandId={island.id} lang={activeLang} color={color} onDone={onDone} onExit={() => {}} />;
      case "place-value-100": return <PlaceValue100Explorer color={color} lang={activeLang} onDone={onDone} />;
      case "mental-math-explorer": return <MentalMathExplorer color={color} lang={activeLang} onDone={onDone} />;
      case "column-addsub": return <ColumnAddSubExplorer color={color} lang={activeLang} onDone={onDone} />;
      case "carry-borrow": return <CarryBorrowExplorer color={color} lang={activeLang} onDone={onDone} />;
      case "multiplication-explorer": return <MultiplicationExplorer color={color} lang={activeLang} onDone={onDone} />;
      case "division-intro": return <DivisionIntroExplorer color={color} lang={activeLang} onDone={onDone} />;
      case "g2-measurement": return <G2MeasurementExplorer color={color} lang={activeLang} onDone={onDone} />;
      case "rocket-launch": return <RocketLaunch questions={questions} color="#FF9500" onDone={() => onDone(0,0)} />;
      default: return <div>Unknown Game Type: {gameType}</div>;
    }
  };

  const testTopicsG2: Record<string, Record<string, string>> = {
    en: { test1: "Numbers to 100, Mental Arithmetic, Addition", test2: "Subtraction, Operations with Carrying", test3: "Times Tables, Division, Measurement" },
    hu: { test1: "Számok 100-ig, fejszámolás, összeadás", test2: "Kivonás, műveletek átvitellel", test3: "Szorzótábla, osztás, mérések" },
    de: { test1: "Zahlenraum 100, Kopfrechnen, Addition", test2: "Subtraktion, Rechnen mit Übertrag", test3: "Einmaleins, Division, Messen" },
    ro: { test1: "Numere 100, Calcul mental, Adunare", test2: "Scădere, Operații cu transport", test3: "Tabla înmulțirii, Împărțire, Măsurare" },
  };

  return (
    <AstroMathExplorerHybrid
      grade={2}
      gradeLabel={{ en: "Grade 2 · Space Adventure", hu: "2. osztály · Űrkaland", de: "Klasse 2 · Weltraumabenteuer", ro: "Clasa 2 · Aventură spațială" }}
      islands={G2_ISLANDS as any}
      progress={progress}
      islandSvgs={G2_ISLAND_SVGS}
      checkpointPos={{ test1: { x: 155, y: 295 }, test2: { x: 155, y: 50 }, test3: { x: 155, y: -165 } }}
      checkpointTopics={testTopicsG2 as any}
      onIslandUnlocked={isIslandUnlockedG2}
      onIslandDone={isIslandDoneG2}
      onMissionDone={isMissionDoneG2}
      onCheckpointUnlocked={isCheckpointUnlockedG2}
      onCheckpointDone={isCheckpointDoneG2}
      onCompleteMission={completeMissionG2}
      onCompleteTest={completeTestG2}
      onSaveProgress={saveG2Progress}
      getIslandStars={islandTotalStarsG2}
      getMissionStars={(p, i, m) => (p.missionStars || {})[`${i}_${m}`] || 0}
      generateQuestions={(island, lang) => generateIslandQuestionsG2(island as any, lang as Lang)}
      generateCheckpointQuestions={(testId, lang) => generateCheckpointQuestionsG2(testId, lang as Lang)}
      renderGame={renderGame}
    />
  );
}
