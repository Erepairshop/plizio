"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2, XCircle } from "lucide-react";
import { getInfoK1Questions } from "@/lib/informatikaCurriculum1";
import { getInfoK2Questions } from "@/lib/informatikaCurriculum2";
import { getInfoK3Questions } from "@/lib/informatikaCurriculum3";
import { getInfoK4Questions } from "@/lib/informatikaCurriculum4";
import type { IslandDef, Lang } from "@/lib/astroInformatikaShared";

interface Props {
  island: IslandDef;
  grade: 1 | 2 | 3 | 4;
  onDone: (score: number, total: number) => void;
  color?: string;
  lang?: string;
}

export default function GenericInfoExplorer({ island, grade, onDone, color = "#3B82F6", lang = "hu" }: Props) {
  const l = (lang as Lang) || "hu";
  
  const questions = useMemo(() => {
    const topicKeys = island.topicKeys || [];
    if (grade === 1) return getInfoK1Questions(topicKeys, 10);
    if (grade === 2) return getInfoK2Questions(topicKeys, 10);
    if (grade === 3) return getInfoK3Questions(topicKeys, 10);
    if (grade === 4) return getInfoK4Questions(topicKeys, 10);
    return [];
  }, [island.topicKeys, grade]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showFeedback, setShowFeedback] = useState<"correct" | "wrong" | null>(null);

  useEffect(() => {
    if (questions.length === 0) {
      const timer = setTimeout(() => {
        onDone(0, 0);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [questions, onDone]);

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-white bg-[#060614] rounded-2xl border border-white/10 p-8 text-center">
        <div className="text-4xl mb-4">🚧</div>
        <h3 className="text-xl font-bold mb-2">
          {l === "hu" ? "Hamarosan..." : l === "de" ? "Demnächst..." : l === "ro" ? "În curând..." : "Coming Soon..."}
        </h3>
        <p className="text-gray-400">
          {l === "hu" ? "Ez a felfedező küldetés még készül." : "This explorer mission is still under construction."}
        </p>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    
    if (currentQuestion.type === "mcq") {
      if (idx === currentQuestion.correct) {
        setScore(s => s + 1);
        setShowFeedback("correct");
      } else {
        setShowFeedback("wrong");
      }
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowFeedback(null);
    } else {
      onDone(score + (showFeedback === "correct" ? 1 : 0), questions.length);
    }
  };

  // Typing questions fallback to auto-correct for now or simple display
  if (currentQuestion.type !== "mcq") {
     return (
        <div className="flex flex-col items-center justify-center h-64 text-white bg-[#060614] rounded-2xl border border-white/10 p-8 text-center">
          <p className="mb-4">{currentQuestion.question}</p>
          <button 
            onClick={() => {
                if (currentIndex + 1 < questions.length) setCurrentIndex(currentIndex + 1);
                else onDone(score + 1, questions.length);
            }}
            className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
          >
            OK
          </button>
        </div>
     )
  }

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto bg-[#060614] text-white rounded-3xl overflow-hidden shadow-2xl border border-white/5">
      {/* Header / Progress */}
      <div className="p-6 bg-white/5 border-b border-white/5">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-black uppercase tracking-widest text-gray-500">
            {l === "hu" ? "Felfedezés" : l === "de" ? "Erkundung" : l === "ro" ? "Explorare" : "Explorer"} • {grade}. {l === "hu" ? "Osztály" : "Grade"}
          </span>
          <span className="text-sm font-bold text-gray-400">{currentIndex + 1} / {questions.length}</span>
        </div>
        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full" 
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Content */}
      <div className="p-8 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-bold leading-tight">
              {currentQuestion.question}
            </h2>

            <div className="grid gap-3">
              {currentQuestion.options.map((opt, idx) => {
                const isCorrect = idx === currentQuestion.correct;
                const isSelected = idx === selectedOption;
                
                let btnClass = "relative flex items-center p-5 rounded-2xl border-2 transition-all duration-200 text-left ";
                if (!isAnswered) {
                  btnClass += "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 cursor-pointer";
                } else {
                  if (isCorrect) btnClass += "border-emerald-500 bg-emerald-500/20 text-emerald-100";
                  else if (isSelected) btnClass += "border-red-500 bg-red-500/20 text-red-100 opacity-80";
                  else btnClass += "border-white/5 bg-white/5 opacity-40";
                }

                return (
                  <motion.button
                    key={idx}
                    whileHover={!isAnswered ? { scale: 1.01 } : {}}
                    whileTap={!isAnswered ? { scale: 0.99 } : {}}
                    onClick={() => handleSelect(idx)}
                    className={btnClass}
                    disabled={isAnswered}
                  >
                    <span className="flex-1 font-medium">{opt}</span>
                    {isAnswered && isCorrect && <CheckCircle2 className="text-emerald-500 ml-3" size={24} />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="text-red-500 ml-3" size={24} />}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer / Action */}
      <div className="p-6 bg-white/5 border-t border-white/5 flex justify-end">
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className={`
            flex items-center gap-2 px-8 py-4 rounded-2xl font-black transition-all
            ${isAnswered 
              ? "bg-white text-black shadow-lg shadow-white/10 scale-100" 
              : "bg-white/5 text-white/20 scale-95 cursor-not-allowed"}
          `}
        >
          {currentIndex + 1 === questions.length 
            ? (l === "hu" ? "BEFEJEZÉS" : "FINISH") 
            : (l === "hu" ? "KÖVETKEZŐ" : "NEXT")}
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
