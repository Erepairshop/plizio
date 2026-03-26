"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ShootTarget = {
  id: string;
  text: string;
  isCorrect: boolean;
};

interface MotionShootGameProps {
  question: string;
  targets: ShootTarget[];
  onComplete: () => void;
}

export default function PhysicsSlingshotGame({ question, targets, onComplete }: MotionShootGameProps) {
  const [wrongTarget, setWrongTarget] = useState<string | null>(null);
  const [correctTarget, setCorrectTarget] = useState<string | null>(null);
  const completedRef = useRef(false);

  const handleShoot = (target: ShootTarget) => {
    if (completedRef.current || correctTarget) return;

    if (target.isCorrect) {
      // HELYES TALÁLAT!
      setCorrectTarget(target.id);
      completedRef.current = true;
      setTimeout(onComplete, 1200); // Várunk picit, hogy lássa a "robbanást"
    } else {
      // ROSSZ TALÁLAT! (Rázkódás)
      setWrongTarget(target.id);
      setTimeout(() => setWrongTarget(null), 500);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-between min-h-[300px] select-none px-2 gap-6 relative">
      
      {/* ŰR / ASZTEROIDA MEZŐ (Válaszok) */}
      <div className="w-full max-w-2xl flex flex-wrap justify-center gap-4 pt-4">
        <AnimatePresence>
          {targets.map((target) => {
            // Ha már van helyes válasz, és ez NEM az, akkor eltüntetjük (mintha megsemmisült volna)
            if (correctTarget && correctTarget !== target.id) return null;

            const isWrong = wrongTarget === target.id;
            const isCorrect = correctTarget === target.id;

            return (
              <motion.button
                key={target.id}
                layout
                // Alap lebegő animáció (y tengelyen picit mozog fel-le)
                animate={
                  isWrong 
                    ? { x: [-10, 10, -10, 10, 0], backgroundColor: "#ef4444", borderColor: "#b91c1c" } 
                    : isCorrect 
                      ? { scale: [1, 1.2, 1], backgroundColor: "#10b981", borderColor: "#047857", y: 0 }
                      : { y: [0, -5, 0], transition: { repeat: Infinity, duration: 2 + Math.random(), ease: "easeInOut" } }
                }
                exit={{ opacity: 0, scale: 0, transition: { duration: 0.3 } }}
                onClick={() => handleShoot(target)}
                className="relative px-5 py-4 rounded-3xl font-bold text-sm sm:text-base border-4 shadow-xl transition-shadow duration-300"
                style={{
                  backgroundColor: "#334155", // Aszteroida szürke
                  borderColor: "#475569",
                  color: "#f8fafc",
                  boxShadow: isCorrect ? "0 0 30px rgba(16, 185, 129, 0.8)" : "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* Kis kráter dizájn elemek */}
                {!isCorrect && !isWrong && (
                  <>
                    <div className="absolute top-2 left-3 w-2 h-2 rounded-full bg-slate-600 opacity-50" />
                    <div className="absolute bottom-2 right-4 w-3 h-3 rounded-full bg-slate-600 opacity-50" />
                  </>
                )}
                <span className="relative z-10">{target.text}</span>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {/* CÉLZÓKERESZT VAGY LÉZER (Vizuális extra helyes válasznál) */}
      <AnimatePresence>
        {correctTarget && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100px", opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-[100px] w-1 bg-emerald-400 rounded-full shadow-[0_0_15px_#34d399]"
            style={{ zIndex: 0 }}
          />
        )}
      </AnimatePresence>

      {/* VEZÉRLŐPULT (Kérdés) */}
      <div className="w-full max-w-lg bg-slate-900 border-t-4 border-slate-700 rounded-t-3xl p-5 shadow-[0_-10px_20px_rgba(0,0,0,0.3)] z-10 text-center">
        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">Target Scanner</p>
        <p className="text-white font-bold text-base sm:text-lg">
          {question}
        </p>
        <p className="text-sky-400 font-bold text-xs mt-3 animate-pulse">
          {correctTarget ? "TARGET DESTROYED! 💥" : "Tap an asteroid to shoot! 🎯"}
        </p>
      </div>

    </div>
  );
}
