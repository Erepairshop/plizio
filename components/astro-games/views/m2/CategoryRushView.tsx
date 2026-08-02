"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";
import { shuffleDeterministic } from "../../utils";

export type CategoryRushRound = {
  id: string;
  taskDescription?: LocalizedText;
  categories: { id: string; label: LocalizedText; edge: "top"|"bottom"|"left"|"right"; color?: string }[];
  items: { id: string; label: LocalizedText; correctCategoryId: string }[];
  durationMs?: number;
};

export default function CategoryRushView({ rounds, color, lang, mode, onDone, onCorrect, onWrong }: AstroGameProps<CategoryRushRound>) {
   const [roundIdx, setRoundIdx] = useState(0);
   const [score, setScore] = useState(0);
   const [itemIdx, setItemIdx] = useState(0);

   const currentRound = rounds[roundIdx];

   const shuffledItems = useMemo(() => {
     if (!currentRound) return [];
     return shuffleDeterministic(currentRound.items, `${currentRound.id}-items`);
   }, [currentRound?.id]);

   const shuffledCategories = useMemo(() => {
     if (!currentRound) return [];
     return shuffleDeterministic(currentRound.categories, `${currentRound.id}-categories`);
   }, [currentRound?.id]);

   const currentItem = shuffledItems[itemIdx];

   const handleNextRound = (finalScore = score) => {
      if (roundIdx + 1 < rounds.length) {
         setRoundIdx(roundIdx + 1);
         setItemIdx(0);
      } else {
         onDone(finalScore, rounds.reduce((acc, r) => acc + r.items.length * 6, 0));
      }
   };

   const handleCategoryClick = (categoryId: string) => {
      if (!currentItem) return;
      const isCorrect = currentItem.correctCategoryId === categoryId;
      const nextScore = isCorrect ? score + 6 : Math.max(0, score - 3);

      if (isCorrect) {
         setScore(nextScore);
         onCorrect?.();
      } else {
         setScore(nextScore);
         onWrong?.();
      }

      if (itemIdx + 1 < currentRound.items.length) {
         setItemIdx(itemIdx + 1);
      } else {
         handleNextRound(nextScore);
      }
   };

   if (!currentRound || !currentItem) return null;

   const defaultTasks: Record<string, string> = {
    en: "Sort the items into the correct categories!",
    hu: "Válogasd az elemeket a megfelelő kategóriákba!",
    de: "Ordne die Elemente den richtigen Kategorien zu!",
    ro: "Sortează elementele în categoriile corecte!"
   };
   const taskText = currentRound.taskDescription
    ? (currentRound.taskDescription[lang as keyof LocalizedText] || currentRound.taskDescription.en)
    : (defaultTasks[lang] || defaultTasks.en);

   return (
      <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 gap-4">
         <div className="w-full flex flex-col gap-2">
            <div className="w-full bg-black/40 p-4 rounded-xl text-center border-2 border-white/10">
               <div className="text-xl font-black text-white mb-2">🎯 {taskText}</div>
               <div className="text-white/70 font-bold">
                  {itemIdx + 1} / {currentRound.items.length}
               </div>
            </div>
            <div className="flex justify-between font-bold text-white/50 text-sm px-2">
               <span>Score: {score}</span>
               <span>Round: {roundIdx + 1} / {rounds.length}</span>
            </div>
         </div>

         <motion.div
            key={currentItem.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="p-6 bg-white text-black font-black text-xl rounded-2xl shadow-xl my-4"
         >
            {currentItem.label[lang as keyof LocalizedText] || currentItem.label.en}
         </motion.div>

         <div className="grid grid-cols-2 gap-4 w-full">
            {shuffledCategories.map(cat => (
               <motion.button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="p-4 rounded-xl border-2 font-bold min-h-[60px] flex items-center justify-center text-center bg-black/50 text-white"
                  style={{ borderColor: cat.color || color }}
                  whileTap={{ scale: 0.95 }}
               >
                  {cat.label[lang as keyof LocalizedText] || cat.label.en}
               </motion.button>
            ))}
         </div>
      </div>
   );
}
