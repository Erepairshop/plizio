"use client";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { fireWrongAnswer } from "@/components/AITutorOverlay";
import MondatRendezés from "@/components/magyar-visual/MondatRendezés";
import SzófajSorter from "@/components/magyar-visual/SzófajSorter";
import HibaKeresés from "@/components/magyar-visual/HibaKeresés";
import ToldalékVálasztó from "@/components/magyar-visual/ToldalékVálasztó";
import SzócsaládFa from "@/components/magyar-visual/SzócsaládFa";
import MondatrészJelölés from "@/components/magyar-visual/MondatrészJelölés";
import TörténetRendezés from "@/components/magyar-visual/TörténetRendezés";
import KépFelismerés from "@/components/magyar-visual/KépFelismerés";
import HiányosSzöveg from "@/components/magyar-visual/HiányosSzöveg";
import {
  genMondatRendezés,
  genHibaKeresés,
  genSzófajSorter,
  genMondatrészJelölés,
  genHiányosSzöveg,
  genSzócsaládFa,
  genTörténetRendezés,
  genToldalékVálasztó,
  genKépFelismerés,
} from "@/lib/magyarVisualGenerators";
import type { IslandDef } from "@/lib/astromath";

interface LangExploreProps {
  island: IslandDef;
  grade: number;
  onDone: (score: number, total: number) => void;
}

// ─── Visual component and generator mapping by topic ──────────────────────────
interface TaskConfig {
  Component: React.ComponentType<any>;
  generator: () => any;
}

function getTaskConfig(topicKey: string): TaskConfig {
  const topic = topicKey.split("/")[0];
  const subtopic = topicKey.split("/")[1] || "";

  // "betuk/..." → SzófajSorter
  if (topic === "betuk") {
    return { Component: SzófajSorter, generator: () => genSzófajSorter(1)[0] };
  }

  // "szavak/fonevek" | "szavak/igek" | "szavak/melleknevek" → SzófajSorter
  if (topic === "szavak" && ["fonevek", "igek", "melleknevek"].includes(subtopic)) {
    return { Component: SzófajSorter, generator: () => genSzófajSorter(1)[0] };
  }

  // "szavak/toldalek" | "szavak/to_toldalek" → ToldalékVálasztó
  if (topic === "szavak" && ["toldalek", "to_toldalek"].includes(subtopic)) {
    return { Component: ToldalékVálasztó, generator: () => genToldalékVálasztó(1)[0] };
  }

  // "szavak/szocsaladok" → SzócsaládFa
  if (topic === "szavak" && subtopic === "szocsaladok") {
    return { Component: SzócsaládFa, generator: () => genSzócsaládFa(1)[0] };
  }

  // "mondatok/..." | "szavak/wortstellung" → MondatRendezés
  if (topic === "mondatok" || (topic === "szavak" && subtopic === "wortstellung")) {
    return { Component: MondatRendezés, generator: () => genMondatRendezés(1)[0] };
  }

  // "mondatok/mondatreszek" → MondatrészJelölés
  if (topic === "mondatok" && subtopic === "mondatreszek") {
    return { Component: MondatrészJelölés, generator: () => genMondatrészJelölés(1)[0] };
  }

  // "helyesiras/..." | "hibakereses" → HibaKeresés
  if (topic === "helyesiras" || topic === "hibakereses") {
    return { Component: HibaKeresés, generator: () => genHibaKeresés(1)[0] };
  }

  // "szokincs/..." → KépFelismerés
  if (topic === "szokincs") {
    return { Component: KépFelismerés, generator: () => genKépFelismerés(1)[0] };
  }

  // "szovegertés/..." → TörténetRendezés
  if (topic === "szovegertés") {
    return { Component: TörténetRendezés, generator: () => genTörténetRendezés(1)[0] };
  }

  // default → HiányosSzöveg
  return { Component: HiányosSzöveg, generator: () => genHiányosSzöveg(1)[0] };
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function LangExplore({ island, grade, onDone }: LangExploreProps) {
  const [taskIndex, setTaskIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [tasks, setTasks] = useState<any[]>([]);
  const [correct, setCorrect] = useState(0);

  // Generate all 8 tasks on mount
  React.useEffect(() => {
    const generatedTasks: any[] = [];
    const topicKey = island.topicKeys[0] || "szavak/fonevek"; // Default topic
    const { generator } = getTaskConfig(topicKey);

    for (let i = 0; i < 8; i++) {
      generatedTasks.push(generator());
    }
    setTasks(generatedTasks);
  }, [island]);

  if (tasks.length === 0) return <div className="flex items-center justify-center min-h-screen text-white">Betöltés...</div>;

  const currentTask = tasks[taskIndex];
  const topicKey = island.topicKeys[0] || "szavak/fonevek";
  const { Component } = getTaskConfig(topicKey);

  const handleCheck = useCallback(() => {
    const isAnswerCorrect = userAnswer !== null && userAnswer !== undefined && String(userAnswer).trim() !== "";
    setIsCorrect(isAnswerCorrect);
    setSubmitted(true);

    if (!isAnswerCorrect) {
      fireWrongAnswer({
        question: `Task ${taskIndex + 1}`,
        wrongAnswer: String(userAnswer ?? ""),
        correctAnswer: "(correct answer)",
        topic: island.name.hu ?? "Magyar feladat",
        lang: "hu",
      });
    }

    setTimeout(() => {
      const newCorrect = isAnswerCorrect ? correct + 1 : correct;
      if (isAnswerCorrect) {
        setCorrect(newCorrect);
      }

      if (taskIndex < 7) {
        setTaskIndex((prev) => prev + 1);
        setUserAnswer(null);
        setSubmitted(false);
        setIsCorrect(false);
      } else {
        onDone(newCorrect, 8);
      }
    }, 1200);
  }, [userAnswer, taskIndex, correct, onDone]);

  const isLastTask = taskIndex === 7;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A1A] via-[#12122A] to-[#0A0A1A] relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              width: (i % 4) * 0.6 + 0.3,
              height: (i % 4) * 0.6 + 0.3,
            }}
            animate={{ opacity: [0.08, 0.9, 0.08] }}
            transition={{
              duration: 1.8 + (i % 6) * 0.5,
              delay: (i % 9) * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 gap-8">
        {/* Header */}
        <motion.div className="text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-4xl mb-2">{island.icon}</div>
          <h2 className="text-2xl font-black text-white mb-1">{island.name.hu}</h2>
          <p className="text-white/60 text-sm font-medium">
            {taskIndex + 1}/8 feladat
          </p>
        </motion.div>

        {/* Visual component */}
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          key={taskIndex}
        >
          <Component
            task={currentTask}
            userAnswer={userAnswer}
            onUserAnswer={setUserAnswer}
            submitted={submitted}
            isCorrect={isCorrect}
          />
        </motion.div>

        {/* Button */}
        <motion.button
          onClick={handleCheck}
          disabled={submitted || userAnswer === null}
          className={`px-8 py-3 rounded-xl font-extrabold text-lg transition-all ${
            submitted
              ? "opacity-50 cursor-wait"
              : userAnswer === null
                ? "bg-white/20 text-white/40 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl"
          }`}
          whileHover={userAnswer !== null && !submitted ? { scale: 1.05 } : {}}
          whileTap={userAnswer !== null && !submitted ? { scale: 0.95 } : {}}
        >
          {isLastTask ? "Befejezés" : submitted ? "Betöltés..." : "Ellenőrzés ✓"}
        </motion.button>

        {/* Progress bar */}
        <div className="w-full max-w-sm h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${((taskIndex + 1) / 8) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
