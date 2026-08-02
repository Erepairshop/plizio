"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";
import { useTimeoutRegistry } from "../../utils";

export type ShapeItem = {
  id: string;
  type: "square" | "circle" | "triangle" | "star" | "hexagon";
  colorHex: string;
  isTarget: boolean;
};

export type ShapeSpotterRound = {
  id: string;
  taskDescription: LocalizedText;
  shapes: ShapeItem[];
};

export default function ShapeSpotterView({
  rounds,
  color,
  lang,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<ShapeSpotterRound>) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [foundTargets, setFoundTargets] = useState<Set<string>>(new Set());
  const [errorIds, setErrorIds] = useState<Set<string>>(new Set());
  const scheduleTimeout = useTimeoutRegistry();

  const currentRound = rounds[roundIdx];

  if (!currentRound) return null;

  const totalTargets = currentRound.shapes.filter(s => s.isTarget).length;
  const targetProgress = foundTargets.size;

  const handleNextRound = (finalScore = score) => {
    if (roundIdx + 1 < rounds.length) {
      setRoundIdx(roundIdx + 1);
      setFoundTargets(new Set());
      setErrorIds(new Set());
    } else {
      const maxScore = rounds.reduce((acc, r) => acc + r.shapes.filter(s => s.isTarget).length * 10, 0);
      onDone(finalScore, maxScore);
    }
  };

  const handleShapeClick = (shape: ShapeItem) => {
    if (foundTargets.has(shape.id) || errorIds.has(shape.id)) return;

    if (shape.isTarget) {
      const newFound = new Set(foundTargets).add(shape.id);
      const nextScore = score + 10;
      setFoundTargets(newFound);
      setScore(nextScore);
      onCorrect?.();

      if (newFound.size === totalTargets) {
        scheduleTimeout(() => handleNextRound(nextScore), 800);
      }
    } else {
      setErrorIds(prev => new Set(prev).add(shape.id));
      setScore(s => Math.max(0, s - 2));
      onWrong?.();

      scheduleTimeout(() => {
        setErrorIds(prev => {
          const next = new Set(prev);
          next.delete(shape.id);
          return next;
        });
      }, 500);
    }
  };

  const renderShape = (shape: ShapeItem) => {
    const isFound = foundTargets.has(shape.id);
    const isError = errorIds.has(shape.id);

    const baseStyle = { backgroundColor: shape.colorHex };
    let shapeContent = null;

    if (shape.type === "square") {
      shapeContent = <div className="w-14 h-14 md:w-20 md:h-20 rounded-md shadow-md" style={baseStyle} />;
    } else if (shape.type === "circle") {
      shapeContent = <div className="w-14 h-14 md:w-20 md:h-20 rounded-full shadow-md" style={baseStyle} />;
    } else if (shape.type === "triangle") {
      shapeContent = (
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "28px solid transparent",
            borderRight: "28px solid transparent",
            borderBottom: `56px solid ${shape.colorHex}`,
          }}
          className="md:border-l-[40px] md:border-r-[40px] md:border-b-[80px] drop-shadow-md"
        />
      );
    } else if (shape.type === "star") {
      shapeContent = (
        <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-24 md:h-24 drop-shadow-md" fill={shape.colorHex}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    } else if (shape.type === "hexagon") {
      shapeContent = (
        <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-24 md:h-24 drop-shadow-md" fill={shape.colorHex}>
          <path d="M12 2L22 7v10l-10 5L2 17V7l10-5z" />
        </svg>
      );
    }

    return (
      <motion.button
        key={shape.id}
        onClick={() => handleShapeClick(shape)}
        disabled={isFound}
        className={`relative w-full aspect-square flex items-center justify-center rounded-xl shadow-sm focus:outline-none overflow-hidden`}
        style={{
          background: isFound ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.4)',
          borderWidth: '2px',
          borderColor: isFound ? color || '#4ade80' : isError ? '#ef4444' : 'rgba(255,255,255,0.1)',
          minWidth: "64px",
          minHeight: "64px",
        }}
        whileHover={!isFound ? { scale: 1.05 } : {}}
        whileTap={!isFound ? { scale: 0.95 } : {}}
        animate={
          isError
            ? { x: [-5, 5, -5, 5, 0], transition: { duration: 0.4 } }
            : isFound
            ? { scale: [1, 1.1, 1], opacity: 0.5, transition: { duration: 0.4 } }
            : { opacity: 1 }
        }
        aria-label={`${shape.colorHex} ${shape.type}`}
        tabIndex={0}
      >
        <div style={{ filter: isFound ? 'grayscale(100%)' : 'none', opacity: isFound ? 0.3 : 1 }}>
          {shapeContent}
        </div>
        {isFound && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl" style={{ color: color || '#4ade80' }}>✓</span>
          </div>
        )}
      </motion.button>
    );
  };

  const defaultTasks: Record<string, string> = {
    en: "Find all targets!",
    hu: "Találd meg a célpontokat!",
    de: "Finde alle Ziele!",
    ro: "Găsește toate țintele!"
  };
  const taskText = currentRound.taskDescription
    ? (currentRound.taskDescription[lang as keyof LocalizedText] || currentRound.taskDescription.en)
    : (defaultTasks[lang] || defaultTasks.en);

  const gridColsClass = currentRound.shapes.length > 12 ? "grid-cols-4 md:grid-cols-5" : "grid-cols-3 md:grid-cols-4";

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-4">
      {/* Header */}
      <div className="w-full bg-black/40 p-4 rounded-xl mb-4 text-center border-2 border-white/10">
        <div className="text-xl font-black text-white mb-2">🎯 {taskText}</div>
        <div className="text-white/70 font-bold mb-2">
          {targetProgress} / {totalTargets} targets found
        </div>
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color || "#4ade80" }}
            initial={{ width: 0 }}
            animate={{ width: `${(targetProgress / totalTargets) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="w-full flex justify-between mb-4 font-bold text-white/50 text-sm px-2">
        <span>Score: {score}</span>
        <span>Round: {roundIdx + 1} / {rounds.length}</span>
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRound.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className={`grid ${gridColsClass} gap-3 md:gap-4 w-full max-w-md`}
        >
          {currentRound.shapes.map(renderShape)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
