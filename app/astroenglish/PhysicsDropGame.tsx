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

interface PhysicsDropGameProps {
  buckets: BucketDef[];
  items: ItemDef[];
  onComplete: () => void;
}

const BUCKET_COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

export default function PhysicsDropGame({ buckets, items, onComplete }: PhysicsDropGameProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [placed, setPlaced] = useState<Map<string, string>>(new Map());
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);
  const [correctFlash, setCorrectFlash] = useState<string | null>(null);
  const completedRef = useRef(false);

  const unplaced = items.filter(i => !placed.has(i.id));

  const handleItemTap = useCallback((itemId: string) => {
    if (placed.has(itemId)) return;
    setSelectedId(prev => prev === itemId ? null : itemId);
  }, [placed]);

  const handleBucketTap = useCallback((bucketId: string) => {
    if (!selectedId) return;
    const item = items.find(i => i.id === selectedId);
    if (!item) return;

    if (item.bucketId === bucketId) {
      setCorrectFlash(selectedId);
      setTimeout(() => setCorrectFlash(null), 400);
      setPlaced(prev => {
        const next = new Map(prev);
        next.set(item.id, bucketId);
        if (next.size === items.length && !completedRef.current) {
          completedRef.current = true;
          setTimeout(onComplete, 600);
        }
        return next;
      });
      setSelectedId(null);
    } else {
      setWrongFlash(selectedId);
      setTimeout(() => setWrongFlash(null), 600);
    }
  }, [selectedId, items, onComplete]);

  const getBucketItems = (bucketId: string) =>
    items.filter(i => placed.get(i.id) === bucketId);

  return (
    <div className="w-full flex flex-col items-center gap-3 select-none px-1">
      {/* Word chips */}
      <div className="w-full max-w-lg min-h-[80px] bg-slate-800/60 rounded-2xl p-3 border border-slate-700/50">
        <div className="flex flex-wrap gap-2 justify-center">
          <AnimatePresence mode="popLayout">
            {unplaced.map(item => {
              const isSelected = selectedId === item.id;
              const isWrong = wrongFlash === item.id;
              const isCorrect = correctFlash === item.id;
              return (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: isWrong ? [1, 1.1, 0.95, 1] : 1,
                    x: isWrong ? [0, -6, 6, -4, 4, 0] : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                  transition={{ duration: isWrong ? 0.5 : 0.3 }}
                  onClick={() => handleItemTap(item.id)}
                  className="px-3.5 py-2 rounded-xl font-bold text-sm border-2 transition-colors duration-150"
                  style={{
                    backgroundColor: isCorrect ? "#10b981" : isWrong ? "#ef4444" : isSelected ? "#0ea5e9" : "#334155",
                    borderColor: isCorrect ? "#059669" : isWrong ? "#dc2626" : isSelected ? "#0284c7" : "#475569",
                    color: "#fff",
                    boxShadow: isSelected ? "0 0 12px rgba(14,165,233,0.4)" : "none",
                  }}
                >
                  {item.text}
                </motion.button>
              );
            })}
          </AnimatePresence>
          {unplaced.length === 0 && (
            <span className="text-green-400 font-bold text-sm py-2">✓</span>
          )}
        </div>
      </div>

      {/* Bucket zones */}
      <div className="w-full max-w-lg grid gap-2" style={{ gridTemplateColumns: `repeat(${buckets.length}, 1fr)` }}>
        {buckets.map((bucket, idx) => {
          const color = bucket.color || BUCKET_COLORS[idx % BUCKET_COLORS.length];
          const bucketItems = getBucketItems(bucket.id);
          const isTarget = selectedId !== null;
          return (
            <motion.button
              key={bucket.id}
              onClick={() => handleBucketTap(bucket.id)}
              whileTap={isTarget ? { scale: 0.97 } : {}}
              className="flex flex-col items-center rounded-2xl border-2 p-2 min-h-[100px] transition-all duration-200"
              style={{
                borderColor: isTarget ? color : `${color}44`,
                backgroundColor: isTarget ? `${color}15` : `${color}08`,
                boxShadow: isTarget ? `0 0 16px ${color}30` : "none",
                cursor: isTarget ? "pointer" : "default",
              }}
            >
              <span
                className="font-black text-[10px] sm:text-xs uppercase tracking-wider mb-2 text-center leading-tight"
                style={{ color: `${color}cc` }}
              >
                {bucket.label}
              </span>
              <div className="flex flex-wrap gap-1.5 justify-center w-full">
                <AnimatePresence>
                  {bucketItems.map(item => (
                    <motion.span
                      key={item.id}
                      initial={{ opacity: 0, y: -10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="px-2.5 py-1.5 rounded-lg font-bold text-xs text-white border"
                      style={{
                        backgroundColor: `${color}88`,
                        borderColor: color,
                      }}
                    >
                      {item.text}
                    </motion.span>
                  ))}
                </AnimatePresence>
              </div>
            </motion.button>
          );
        })}
      </div>

      <p className="text-slate-500 font-bold text-xs text-center">
        {selectedId
          ? "👆 Now tap the correct category!"
          : "👇 Tap a word, then tap its category"}
      </p>
    </div>
  );
}
