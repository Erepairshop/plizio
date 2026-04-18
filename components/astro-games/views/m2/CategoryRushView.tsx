"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type CategoryRushRound = {
  id: string;
  categories: { id: string; label: LocalizedText; edge: "top"|"bottom"|"left"|"right"; color?: string }[];
  items: { id: string; label: LocalizedText; correctCategoryId: string }[];
  durationMs: number;
};

export default function CategoryRushView({ rounds, color, lang, mode, onDone, onCorrect, onWrong }: AstroGameProps<CategoryRushRound>) {
   const [roundIdx, setRoundIdx] = useState(0);
   const [score, setScore] = useState(0);
   const [timeLeft, setTimeLeft] = useState(rounds[0]?.durationMs / 1000 || 30);
   const [itemIdx, setItemIdx] = useState(0);

   const currentRound = rounds[roundIdx];
   const currentItem = currentRound?.items[itemIdx];

   useEffect(() => {
     if (!currentRound) return;
     const timer = setInterval(() => {
       setTimeLeft(t => Math.max(0, t - 1));
     }, 1000);
     return () => clearInterval(timer);
   }, [currentRound, roundIdx]);
 
   useEffect(() => {
     if (timeLeft === 0 && currentRound) {
        handleNextRound();
     }
   }, [timeLeft, currentRound]);

   const handleNextRound = () => {
      if (roundIdx + 1 < rounds.length) {
         setRoundIdx(roundIdx + 1);
         setTimeLeft(rounds[roundIdx + 1].durationMs / 1000);
         setItemIdx(0);
      } else {
         onDone(score, rounds.reduce((acc, r) => acc + r.items.length * 6, 0));
      }
   };

   const handleCategoryClick = (categoryId: string) => {
      if (!currentItem) return;
      if (currentItem.correctCategoryId === categoryId) {
         setScore(s => s + 6);
         onCorrect?.();
      } else {
         setScore(s => Math.max(0, s - 3));
         onWrong?.();
      }
      
      if (itemIdx + 1 < currentRound.items.length) {
         setItemIdx(itemIdx + 1);
      } else {
         handleNextRound();
      }
   };

   if (!currentRound || !currentItem) return null;

   return (
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4 min-h-[400px] relative">
         <div className="absolute top-0 w-full flex justify-between font-bold text-white z-10">
            <span>Score: {score}</span>
            <span>Time: {timeLeft}s</span>
         </div>
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
               key={currentItem.id}
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               className="p-6 bg-white text-black font-black text-xl rounded-2xl shadow-xl z-20 pointer-events-auto"
            >
               {currentItem.label[lang] || currentItem.label.en}
            </motion.div>
         </div>
         <div className="grid grid-cols-2 gap-4 w-full h-full mt-10 z-10 pointer-events-none">
            {currentRound.categories.map(cat => (
               <motion.button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="p-4 rounded-xl border-2 font-bold min-h-[60px] pointer-events-auto flex items-center justify-center text-center bg-black/50 text-white"
                  style={{ borderColor: cat.color || color }}
                  whileTap={{ scale: 0.95 }}
               >
                  {cat.label[lang] || cat.label.en}
               </motion.button>
            ))}
         </div>
      </div>
   );
}
