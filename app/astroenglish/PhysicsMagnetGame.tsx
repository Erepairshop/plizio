"use client";
import React, { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type MatchPair = {
  id: string;
  left: string;
  right: string;
};

interface MotionMatchGameProps {
  pairs: MatchPair[];
  onComplete: () => void;
  lang?: string;
}

// Többnyelvű UI szótár
const UI_LABELS = {
  en: {
    step1: "👈 Tap a word on the left first.",
    step2: "✨ Now find its matching pair on the right!",
  },
  hu: {
    step1: "👈 Válassz egy szót a bal oldalon!",
    step2: "✨ Most keresd meg a párját a jobb oldalon!",
  },
  de: {
    step1: "👈 Wähle zuerst ein Wort links.",
    step2: "✨ Finde nun das passende Paar rechts!",
  },
  ro: {
    step1: "👈 Alege un cuvânt din stânga mai întâi.",
    step2: "✨ Acum găsește perechea potrivită în dreapta!",
  },
};

export default function PhysicsMagnetGame({ 
  pairs, 
  onComplete, 
  lang = "en" 
}: MotionMatchGameProps) {
  
  // Állapotok
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set());
  const [wrongLeft, setWrongLeft] = useState<string | null>(null);
  const [wrongRight, setWrongRight] = useState<string | null>(null);
  
  const completedRef = useRef(false);
  const t = UI_LABELS[lang as keyof typeof UI_LABELS] || UI_LABELS.en;

  // Keverjük meg a jobb oldali oszlopot (csak egyszer rendereléskor)
  const [shuffledRights] = useState(() => [...pairs].sort(() => Math.random() - 0.5));

  const handleLeftTap = useCallback((id: string) => {
    if (matchedIds.has(id)) return;
    // Ha már ki volt választva, kikapcsoljuk. Ha nem, kiválasztjuk.
    setSelectedLeft(prev => prev === id ? null : id);
  }, [matchedIds]);

  const handleRightTap = useCallback((id: string) => {
    if (matchedIds.has(id) || !selectedLeft) return;

    if (selectedLeft === id) {
      // HELYES PÁROSÍTÁS!
      setMatchedIds(prev => {
        const next = new Set(prev);
        next.add(id);
        
        // Ellenőrizzük a győzelmet
        if (next.size === pairs.length && !completedRef.current) {
          completedRef.current = true;
          setTimeout(onComplete, 600);
        }
        return next;
      });
      setSelectedLeft(null);
    } else {
      // ROSSZ PÁROSÍTÁS! (Rázkódás animáció)
      setWrongLeft(selectedLeft);
      setWrongRight(id);
      setTimeout(() => {
        setWrongLeft(null);
        setWrongRight(null);
        setSelectedLeft(null); // Hibánál töröljük a kijelölést
      }, 500);
    }
  }, [selectedLeft, matchedIds, pairs.length, onComplete]);

  return (
    <div className="w-full flex flex-col items-center gap-4 select-none px-2 min-h-[300px]">
      <div className="w-full max-w-2xl flex justify-between gap-3 md:gap-6">
        
        {/* BAL OLDALI OSZLOP */}
        <div className="flex-1 flex flex-col gap-3">
          <AnimatePresence>
            {pairs.map((pair) => {
              if (matchedIds.has(pair.id)) return null; // Ha kitalálta, eltüntetjük
              
              const isSelected = selectedLeft === pair.id;
              const isWrong = wrongLeft === pair.id;

              return (
                <motion.button
                  key={`l-${pair.id}`}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: 1, x: isWrong ? [-5, 5, -5, 5, 0] : 0,
                    scale: isSelected ? 1.05 : 1
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: 50, transition: { duration: 0.3 } }}
                  transition={{ duration: isWrong ? 0.4 : 0.2 }}
                  onClick={() => handleLeftTap(pair.id)}
                  className="w-full py-3 px-3 md:px-4 rounded-xl font-bold text-xs md:text-sm lg:text-base border-2 transition-colors duration-200"
                  style={{
                    backgroundColor: isWrong ? "#ef4444" : isSelected ? "#0ea5e9" : "#1e293b",
                    borderColor: isWrong ? "#dc2626" : isSelected ? "#38bdf8" : "#334155",
                    color: "#f8fafc",
                    boxShadow: isSelected ? "0 0 15px rgba(14,165,233,0.5)" : "none",
                  }}
                >
                  {pair.left}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        {/* JOBB OLDALI OSZLOP */}
        <div className="flex-1 flex flex-col gap-3">
          <AnimatePresence>
            {shuffledRights.map((pair) => {
              if (matchedIds.has(pair.id)) return null;
              
              const isWrong = wrongRight === pair.id;
              const isValidTarget = selectedLeft !== null; // Csak akkor kattintható, ha balról már választott

              return (
                <motion.button
                  key={`r-${pair.id}`}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: 1, 
                    x: isWrong ? [-5, 5, -5, 5, 0] : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: -50, transition: { duration: 0.3 } }}
                  transition={{ duration: isWrong ? 0.4 : 0.2 }}
                  onClick={() => handleRightTap(pair.id)}
                  className="w-full py-3 px-3 md:px-4 rounded-xl font-bold text-xs md:text-sm lg:text-base border-2 transition-colors duration-200"
                  style={{
                    backgroundColor: isWrong ? "#ef4444" : "#312e81", 
                    borderColor: isWrong ? "#dc2626" : isValidTarget ? "#6366f1" : "#4338ca",
                    color: "#f8fafc",
                    cursor: isValidTarget ? "pointer" : "default",
                    opacity: isValidTarget ? 1 : 0.6 // Halványabb, ha még nem lehet rákattintani
                  }}
                >
                  {pair.right}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* SEGÍTŐ SZÖVEG ALUL */}
      <div className="h-8 mt-2 flex items-center justify-center">
        <p className="text-slate-400 font-bold text-xs sm:text-sm text-center">
          {selectedLeft ? t.step2 : t.step1}
        </p>
      </div>
    </div>
  );
}
