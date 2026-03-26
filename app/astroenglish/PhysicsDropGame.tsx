"use client";
import React, { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type BucketDef = {
  id: string;
  label: string;
  color?: string;
};

export type ItemDef = {
  id: string;
  text: string;
  bucketId: string;
};

interface MotionDropGameProps {
  buckets: BucketDef[];
  items: ItemDef[];
  onComplete: () => void;
  lang?: string;
}

// Alapértelmezett vödör színek, ha a JSON nem adna meg
const BUCKET_COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"];

// Többnyelvű UI szótár
const UI_LABELS = {
  en: {
    step1: "👆 Tap a word first!",
    step2: "🪣 Now tap the correct category!",
    done: "ALL SORTED! 🎉",
  },
  hu: {
    step1: "👆 Koppints egy szóra először!",
    step2: "🪣 Most válaszd ki a helyes kategóriát!",
    done: "MINDEN A HELYÉN! 🎉",
  },
  de: {
    step1: "👆 Tippe zuerst auf ein Wort!",
    step2: "🪣 Wähle nun die richtige Kategorie!",
    done: "ALLES SORTIERT! 🎉",
  },
  ro: {
    step1: "👆 Apasă un cuvânt mai întâi!",
    step2: "🪣 Acum alege categoria corectă!",
    done: "TOTUL E SORTAT! 🎉",
  },
};

export default function PhysicsDropGame({ 
  buckets, 
  items, 
  onComplete, 
  lang = "en" 
}: MotionDropGameProps) {

  // Állapotok
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [placedItems, setPlacedItems] = useState<Map<string, string>>(new Map()); // itemId -> bucketId
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);
  const completedRef = useRef(false);

  const t = UI_LABELS[lang as keyof typeof UI_LABELS] || UI_LABELS.en;
  const isComplete = placedItems.size === items.length;

  const handleItemTap = useCallback((itemId: string) => {
    if (placedItems.has(itemId) || isComplete) return;
    setSelectedId(prev => prev === itemId ? null : itemId);
  }, [placedItems, isComplete]);

  const handleBucketTap = useCallback((bucketId: string) => {
    if (!selectedId || isComplete) return;
    
    const item = items.find(i => i.id === selectedId);
    if (!item) return;

    if (item.bucketId === bucketId) {
      // HELYES VÖDÖR!
      setPlacedItems(prev => {
        const next = new Map(prev);
        next.set(item.id, bucketId);
        
        if (next.size === items.length && !completedRef.current) {
          completedRef.current = true;
          setTimeout(onComplete, 800); // Késleltetés a győzelmi képernyőig
        }
        return next;
      });
      setSelectedId(null);
    } else {
      // ROSSZ VÖDÖR! (Rázkódás)
      setWrongFlash(selectedId);
      setTimeout(() => {
        setWrongFlash(null);
        setSelectedId(null);
      }, 500);
    }
  }, [selectedId, items, isComplete, onComplete]);

  return (
    <div className="w-full flex flex-col items-center gap-4 select-none px-2 min-h-[350px]">
      
      {/* SZAVAK MEDENCÉJE (Ami még nincs a helyén) */}
      <div className="w-full max-w-2xl min-h-[120px] bg-slate-900/50 border-2 border-slate-700/50 rounded-2xl p-4 flex flex-wrap gap-2 justify-center items-start shadow-inner">
        <AnimatePresence>
          {items.map(item => {
            // Ha már be lett dobva, itt NEM jelenik meg (átkerül a vödörbe)
            if (placedItems.has(item.id)) return null;

            const isSelected = selectedId === item.id;
            const isWrong = wrongFlash === item.id;

            return (
              <motion.button
                key={`pool-${item.id}`}
                layoutId={`item-${item.id}`} // <--- EZ A VARÁZSLAT: Ettől repül át a vödörbe!
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: isSelected ? 1.05 : 1,
                  x: isWrong ? [-5, 5, -5, 5, 0] : 0,
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: isWrong ? 0.4 : 0.2 }}
                onClick={() => handleItemTap(item.id)}
                className="px-4 py-2 rounded-xl font-bold text-sm sm:text-base border-2 transition-colors duration-150 shadow-md"
                style={{
                  backgroundColor: isWrong ? "#ef4444" : isSelected ? "#0ea5e9" : "#334155",
                  borderColor: isWrong ? "#dc2626" : isSelected ? "#38bdf8" : "#475569",
                  color: "#f8fafc",
                  boxShadow: isSelected ? "0 0 15px rgba(14,165,233,0.5)" : "none",
                }}
              >
                {item.text}
              </motion.button>
            );
          })}
        </AnimatePresence>
        
        {/* Ha minden szó elfogyott */}
        {isComplete && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center w-full h-full text-emerald-400 font-bold text-xl"
          >
            {t.done}
          </motion.div>
        )}
      </div>

      {/* SEGÍTŐ SZÖVEG */}
      <p className="text-slate-400 font-bold text-xs sm:text-sm text-center h-5">
        {!isComplete && (selectedId ? t.step2 : t.step1)}
      </p>

      {/* VÖDRÖK / KATEGÓRIÁK */}
      <div 
        className="w-full max-w-2xl grid gap-3" 
        style={{ gridTemplateColumns: `repeat(${buckets.length}, minmax(0, 1fr))` }}
      >
        {buckets.map((bucket, idx) => {
          const color = bucket.color || BUCKET_COLORS[idx % BUCKET_COLORS.length];
          const isTarget = selectedId !== null;
          // Kikeressük azokat a szavakat, amik ebbe a vödörbe lettek dobva
          const itemsInBucket = items.filter(i => placedItems.get(i.id) === bucket.id);

          return (
            <motion.button
              key={bucket.id}
              onClick={() => handleBucketTap(bucket.id)}
              whileTap={isTarget ? { scale: 0.95 } : {}}
              className="flex flex-col items-center rounded-2xl border-2 p-3 min-h-[140px] transition-all duration-200 overflow-hidden relative"
              style={{
                borderColor: isTarget ? color : `${color}55`,
                backgroundColor: isTarget ? `${color}15` : `${color}0A`,
                boxShadow: isTarget ? `0 0 20px ${color}40` : "none",
                cursor: isTarget ? "pointer" : "default",
              }}
            >
              {/* Vödör címe */}
              <span 
                className="font-black text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-3 text-center z-10"
                style={{ color: `${color}` }}
              >
                {bucket.label}
              </span>

              {/* A bedobált szavak (Ide repülnek be) */}
              <div className="flex flex-col gap-1.5 w-full z-10 items-center">
                <AnimatePresence>
                  {itemsInBucket.map(item => (
                    <motion.div
                      key={`placed-${item.id}`}
                      layoutId={`item-${item.id}`} // <--- Kapcsolat a fenti pool-lal!
                      className="w-full px-2 py-1.5 rounded-lg font-bold text-[10px] sm:text-xs text-white border text-center truncate shadow-sm"
                      style={{
                        backgroundColor: `${color}99`, // Átlátszóbb a vödör színével
                        borderColor: color,
                      }}
                    >
                      {item.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Dekoratív háttér ikon/szín */}
              <div 
                className="absolute bottom-[-20%] right-[-20%] w-24 h-24 rounded-full opacity-10 pointer-events-none"
                style={{ backgroundColor: color }}
              />
            </motion.button>
          );
        })}
      </div>

    </div>
  );
}
