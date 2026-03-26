"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MotionStackGameProps {
  words: string[];
  correctOrder: number[]; // Pl. [0, 1, 2] -> index 0 a legalsó, utána 1, a teteje a 2.
  onComplete: () => void;
  lang?: string;
}

// UI szótár a felülethez
const UI_LABELS = {
  en: {
    zone: "CONSTRUCTION ZONE",
    hint: "Tap blocks to build from BOTTOM to TOP! 🏗️",
    complete: "TOWER COMPLETE! 🏆",
  },
  hu: {
    zone: "ÉPÍTÉSI TERÜLET",
    hint: "Koppints a blokkokra lentről felfelé haladva! 🏗️",
    complete: "TORONY KÉSZ! 🏆",
  },
  de: {
    zone: "BAUSTELLE",
    hint: "Tippe auf die Blöcke, um von UNTEN nach OBEN zu bauen! 🏗️",
    complete: "TURM FERTIG! 🏆",
  },
  ro: {
    zone: "ZONĂ DE CONSTRUCȚIE",
    hint: "Apasă blocurile pentru a construi de JOS în SUS! 🏗️",
    complete: "TURN FINALIZAT! 🏆",
  },
};

export default function PhysicsStackerGame({ 
  words, 
  correctOrder, 
  onComplete, 
  lang = "en" 
}: MotionStackGameProps) {
  
  // Állapotok
  const [stackedIndices, setStackedIndices] = useState<number[]>([]);
  const [wrongIndex, setWrongIndex] = useState<number | null>(null);
  const completedRef = useRef(false);

  // Keverjük meg a kezdő blokkokat (csak egyszer fut le)
  const [shuffledIndices] = useState(() => 
    Array.from({ length: words.length }, (_, i) => i).sort(() => Math.random() - 0.5)
  );

  const t = UI_LABELS[lang as keyof typeof UI_LABELS] || UI_LABELS.en;
  const isComplete = stackedIndices.length === correctOrder.length;

  const handleTap = (index: number) => {
    if (completedRef.current || stackedIndices.includes(index)) return;

    // Melyik a KÖVETKEZŐ elvárt elem a helyes sorrendben?
    const expectedNextIndex = correctOrder[stackedIndices.length];

    if (index === expectedNextIndex) {
      // HELYES ÉPÍTŐELEM!
      setStackedIndices((prev) => {
        const next = [...prev, index];
        
        // Ha minden a helyére került
        if (next.length === correctOrder.length && !completedRef.current) {
          completedRef.current = true;
          setTimeout(onComplete, 1200); // Késleltetés, hogy lássa a kész tornyot
        }
        return next;
      });
    } else {
      // ROSSZ ÉPÍTŐELEM! (Csak rázkódik, nem megy fel)
      setWrongIndex(index);
      setTimeout(() => setWrongIndex(null), 500);
    }
  };

  return (
    <div className="w-full flex flex-col items-center select-none px-2 gap-4">
      
      {/* ÉPÍTÉSI TERÜLET (Torony) */}
      <div className="w-full max-w-lg bg-slate-900 border-4 border-slate-700 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        
        {/* Fejléc */}
        <div className="bg-slate-800 border-b-2 border-slate-700 py-2 px-4 text-center">
          <p className="text-amber-400 font-black text-xs uppercase tracking-widest">
            {t.zone}
          </p>
        </div>

        {/* Torony megjelenítése (flex-col-reverse = lentről felfelé épül!) */}
        <div className="flex flex-col-reverse items-center justify-start min-h-[220px] w-full bg-slate-900/50 p-4 gap-2">
          <AnimatePresence>
            {stackedIndices.map((idx) => (
              <motion.div
                key={`stacked-${idx}`}
                layoutId={`block-${idx}`} // EZ A VARÁZSLAT: Ugyanaz a layoutId, így felrepül!
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-[90%] md:w-[80%] py-3 px-4 bg-amber-500 border-b-4 border-amber-700 rounded-lg shadow-md flex justify-center items-center z-10"
              >
                <span className="text-amber-950 font-bold text-sm md:text-base text-center">
                  {words[idx]}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Halvány segédvonalak, ha még üres a torony */}
          {stackedIndices.length === 0 && (
            <div className="w-[90%] md:w-[80%] h-[50px] border-2 border-dashed border-slate-700 rounded-lg flex items-center justify-center opacity-50">
              <span className="text-slate-500 font-bold text-xs uppercase">1. Base</span>
            </div>
          )}
        </div>
      </div>

      {/* JELZŐ SZÖVEG */}
      <p className={`font-bold text-sm animate-pulse ${isComplete ? "text-emerald-400" : "text-slate-400"}`}>
        {isComplete ? t.complete : t.hint}
      </p>

      {/* ÖSSZEKEVERT ALAPANYAGOK (Lent) */}
      <div className="w-full max-w-lg flex flex-wrap justify-center gap-3 p-2">
        <AnimatePresence>
          {shuffledIndices.map((idx) => {
            // Ha már beépítettük a toronyba, lentről eltűnik
            if (stackedIndices.includes(idx)) return null;

            const isWrong = wrongIndex === idx;

            return (
              <motion.button
                key={`pool-${idx}`}
                layoutId={`block-${idx}`} // Kapcsolat a fenti elemmel
                animate={isWrong ? { x: [-5, 5, -5, 5, 0] } : {}}
                transition={{ duration: isWrong ? 0.4 : 0.2 }}
                onClick={() => handleTap(idx)}
                className="py-3 px-5 rounded-lg font-bold text-sm md:text-base border-b-4 transition-all duration-200"
                style={{
                  backgroundColor: isWrong ? "#ef4444" : "#475569", // Piros, ha rossz, szürke ha még vár
                  borderColor: isWrong ? "#b91c1c" : "#334155",
                  color: "#f8fafc",
                }}
              >
                {words[idx]}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

    </div>
  );
}
