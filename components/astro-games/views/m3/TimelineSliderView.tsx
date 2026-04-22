"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type TimelineSliderRound = {
  id: string;
  taskDescription?: LocalizedText;
  axes: {
    x: { label: LocalizedText; rangeMin: number; rangeMax: number };
    y?: { label: LocalizedText; values: (string | number)[] };
  };
  events: {
    id: string;
    title: LocalizedText;
    img?: string;
    correctX: number;
    correctY?: string | number;
    yearTolerancePct?: number;
  }[];
};

export default function TimelineSliderView({ rounds, color, lang, mode, onDone, onCorrect, onWrong }: AstroGameProps<TimelineSliderRound>) {
   const [roundIdx, setRoundIdx] = useState(0);
   const [score, setScore] = useState(0);
   const [answers, setAnswers] = useState<Record<string, {x: number, y?: string|number}>>({});
   const [showErrors, setShowErrors] = useState(false);

   const currentRound = rounds[roundIdx];

   const checkAnswers = () => {
      let allCorrect = true;
      currentRound.events.forEach(ev => {
         const ans = answers[ev.id];
         if (!ans) { allCorrect = false; return; }
         
         const range = currentRound.axes.x.rangeMax - currentRound.axes.x.rangeMin;
         const tol = (ev.yearTolerancePct || 5) / 100 * range;
         if (Math.abs(ans.x - ev.correctX) > tol) allCorrect = false;
         
         if (currentRound.axes.y && ans.y !== ev.correctY) allCorrect = false;
      });

      if (allCorrect) {
         setScore(s => s + 40);
         onCorrect?.();
         if (roundIdx + 1 < rounds.length) {
            setRoundIdx(roundIdx + 1);
            setAnswers({});
            setShowErrors(false);
         } else {
            onDone(score + 40, rounds.length * 40);
         }
      } else {
         setShowErrors(true);
         onWrong?.();
      }
   };

   if (!currentRound) return null;

   const defaultTasks: Record<string, string> = {
    en: "Place the events on the timeline!",
    hu: "Helyezd el az eseményeket az idővonalon!",
    de: "Platziere die Ereignisse auf der Zeitachse!",
    ro: "Plasează evenimentele pe axa timpului!"
   };
   const taskText = currentRound.taskDescription 
    ? (currentRound.taskDescription[lang as keyof LocalizedText] || currentRound.taskDescription.en)
    : (defaultTasks[lang] || defaultTasks.en);

   const remainingEvents = currentRound.events.filter(e => !answers[e.id]);
   const activeEvent = remainingEvents[0];
   const currentEventIdx = currentRound.events.length - remainingEvents.length + (activeEvent ? 1 : 0);

   const min = currentRound.axes.x.rangeMin;
   const max = currentRound.axes.x.rangeMax;
   const numSegments = 5;
   const ticks = [];
   for (let i = 0; i <= numSegments; i++) {
     ticks.push(Math.round(min + (max - min) * (i / numSegments)));
   }

   return (
      <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 min-h-[500px]">
         <div className="w-full bg-black/40 p-4 rounded-xl mb-4 text-center border-2 border-white/10">
            <div className="text-xl font-black text-white mb-2">🎯 {taskText}</div>
            <div className="text-white/70 font-bold">
               {Math.min(currentEventIdx, currentRound.events.length)} / {currentRound.events.length}
            </div>
         </div>
         <div className="w-full flex justify-between font-bold text-white/50 text-sm px-2 mb-4">
            <span>Score: {score}</span>
            <span>Round: {roundIdx + 1} / {rounds.length}</span>
         </div>

         {activeEvent ? (
            <div className="w-full text-center mb-6">
               <p className="text-white/70 mb-2 font-bold">Select position for:</p>
               <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="p-4 bg-white text-black font-black text-xl rounded-xl"
               >
                  {activeEvent.title[lang as keyof LocalizedText] || activeEvent.title.en}
               </motion.div>
            </div>
         ) : (
            <div className="w-full text-center mb-6 h-20 flex items-center justify-center">
               <button onClick={checkAnswers} className="px-8 py-3 bg-green-500 text-white font-black rounded-xl" style={{ backgroundColor: color }}>
                  Check Answers
               </button>
            </div>
         )}

         <div className="w-full mt-8 flex flex-col gap-8 relative px-4">
            <div className="text-center text-white/50 mb-2">
               {currentRound.axes.x.label[lang as keyof LocalizedText] || currentRound.axes.x.label.en}
            </div>
            
            <div className="relative w-full h-8 bg-white/10 rounded-full mt-4">
               {/* Ticks */}
               <div className="absolute top-full left-0 w-full h-4 mt-2 pointer-events-none">
                  {ticks.map((tick, i) => {
                     const pct = ((tick - min) / (max - min)) * 100;
                     return (
                        <div key={i} className="absolute flex flex-col items-center" style={{ left: `${pct}%`, transform: 'translateX(-50%)' }}>
                           <div className="w-0.5 h-2 bg-white/30 mb-1"></div>
                           <div className="text-xs text-white/50">{tick}</div>
                        </div>
                     );
                  })}
               </div>

               {activeEvent && (
                  <input type="range" 
                     min={currentRound.axes.x.rangeMin} 
                     max={currentRound.axes.x.rangeMax} 
                     defaultValue={(currentRound.axes.x.rangeMin + currentRound.axes.x.rangeMax)/2}
                     className="w-full absolute inset-0 opacity-50 z-20 cursor-pointer"
                     onMouseUp={(e) => {
                        const val = parseInt((e.target as HTMLInputElement).value);
                        setAnswers(prev => ({...prev, [activeEvent.id]: {x: val}}));
                     }}
                     onTouchEnd={(e) => {
                        const val = parseInt((e.target as HTMLInputElement).value);
                        setAnswers(prev => ({...prev, [activeEvent.id]: {x: val}}));
                     }}
                  />
               )}
               {Object.entries(answers).map(([id, ans]) => {
                  const pct = ((ans.x - currentRound.axes.x.rangeMin) / (currentRound.axes.x.rangeMax - currentRound.axes.x.rangeMin)) * 100;
                  const ev = currentRound.events.find(e => e.id === id)!;
                  const isWrong = showErrors && (Math.abs(ans.x - ev.correctX) > ((ev.yearTolerancePct||5)/100*(currentRound.axes.x.rangeMax-currentRound.axes.x.rangeMin)));
                  return (
                     <div key={id} className="absolute w-4 h-8 bg-white rounded-full -ml-2 z-10 flex flex-col items-center group" style={{ left: `${pct}%`, background: isWrong ? 'red' : 'white' }}>
                        <div className="absolute top-10 opacity-0 group-hover:opacity-100 bg-black p-2 rounded text-xs whitespace-nowrap z-30">
                           {ev.title[lang as keyof LocalizedText] || ev.title.en} ({ans.x})
                        </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   );
}
