"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type DragSortRound = {
  id: string;
  bins: { id: string; label: LocalizedText; icon?: string; color?: string }[];
  items: { id: string; label: LocalizedText; img?: string; correctBinId: string }[];
  requireFullCorrect: true;
};

export default function DragSortView({ rounds, color, lang, mode, onDone, onCorrect, onWrong }: AstroGameProps<DragSortRound>) {
   const [roundIdx, setRoundIdx] = useState(0);
   const [score, setScore] = useState(0);
   const [itemIdx, setItemIdx] = useState(0);
   const [failed, setFailed] = useState(false);

   const currentRound = rounds[roundIdx];
   const currentItem = currentRound?.items[itemIdx];

   const handleNextRound = () => {
      let finalScore = score;
      if (!failed) {
         finalScore += 25;
         setScore(finalScore);
      }
      if (roundIdx + 1 < rounds.length) {
         setRoundIdx(roundIdx + 1);
         setItemIdx(0);
         setFailed(false);
      } else {
         onDone(finalScore, rounds.length * 25);
      }
   };

   const handleBinClick = (binId: string) => {
      if (!currentItem) return;
      if (currentItem.correctBinId === binId) {
         onCorrect?.();
         if (itemIdx + 1 < currentRound.items.length) {
            setItemIdx(itemIdx + 1);
         } else {
            handleNextRound();
         }
      } else {
         setFailed(true);
         onWrong?.();
         // round reset because requireFullCorrect
         setItemIdx(0);
      }
   };

   if (!currentRound || !currentItem) return null;

   return (
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4">
         <div className="text-white/50 text-sm mb-4">
            {itemIdx + 1} / {currentRound.items.length} (Round {roundIdx + 1}/{rounds.length})
         </div>
         <motion.div 
            key={currentItem.id}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="p-8 bg-white text-black font-black text-2xl rounded-3xl shadow-xl mb-10 text-center"
         >
            {currentItem.img && <img src={currentItem.img} alt="" className="w-16 h-16 mx-auto mb-2" />}
            {currentItem.label[lang] || currentItem.label.en}
         </motion.div>
         <div className="flex flex-wrap justify-center gap-4 w-full">
            {currentRound.bins.map(bin => (
               <motion.button
                  key={bin.id}
                  onClick={() => handleBinClick(bin.id)}
                  className="p-4 rounded-xl border-2 font-bold flex-1 min-w-[120px] bg-black/40 min-h-[80px] text-white"
                  style={{ borderColor: bin.color || color }}
                  whileTap={{ scale: 0.95 }}
               >
                  {bin.icon && <div className="text-2xl mb-1">{bin.icon}</div>}
                  {bin.label[lang] || bin.label.en}
               </motion.button>
            ))}
         </div>
      </div>
   );
}
