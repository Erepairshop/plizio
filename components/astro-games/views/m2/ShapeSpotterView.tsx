"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

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
  const [currentRoundIdx, setCurrentRoundIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedId, setClickedId] = useState<string | null>(null);

  const currentRound = rounds[currentRoundIdx];

  if (!currentRound) return null;

  const handleShapeClick = (shape: ShapeItem) => {
    if (clickedId !== null) return;
    setClickedId(shape.id);

    if (shape.isTarget) {
      if (onCorrect) onCorrect();
      setScore((s) => s + 1);
      setTimeout(() => {
        setClickedId(null);
        if (currentRoundIdx < rounds.length - 1) {
          setCurrentRoundIdx((prev) => prev + 1);
        } else {
          onDone(score + 1, rounds.length);
        }
      }, 800);
    } else {
      if (onWrong) onWrong();
      setTimeout(() => {
        setClickedId(null);
      }, 800);
    }
  };

  const progress = (currentRoundIdx / rounds.length) * 100;

  const renderShape = (shape: ShapeItem) => {
    const isClicked = clickedId === shape.id;
    const isWrongClick = isClicked && !shape.isTarget;
    const isCorrectClick = isClicked && shape.isTarget;

    const baseStyle = { backgroundColor: shape.colorHex };
    let shapeContent = null;

    if (shape.type === "square") {
      shapeContent = <div className="w-16 h-16 md:w-24 md:h-24 rounded-md shadow-md" style={baseStyle} />;
    } else if (shape.type === "circle") {
      shapeContent = <div className="w-16 h-16 md:w-24 md:h-24 rounded-full shadow-md" style={baseStyle} />;
    } else if (shape.type === "triangle") {
      shapeContent = (
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "32px solid transparent",
            borderRight: "32px solid transparent",
            borderBottom: `64px solid ${shape.colorHex}`,
          }}
          className="md:border-l-[48px] md:border-r-[48px] md:border-b-[96px] drop-shadow-md"
        />
      );
    } else if (shape.type === "star") {
      shapeContent = (
        <svg viewBox="0 0 24 24" className="w-20 h-20 md:w-28 md:h-28 drop-shadow-md" fill={shape.colorHex}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    } else if (shape.type === "hexagon") {
      shapeContent = (
        <svg viewBox="0 0 24 24" className="w-20 h-20 md:w-28 md:h-28 drop-shadow-md" fill={shape.colorHex}>
          <path d="M12 2L22 7v10l-10 5L2 17V7l10-5z" />
        </svg>
      );
    }

    return (
      <motion.button
        key={shape.id}
        onClick={() => handleShapeClick(shape)}
        className={`relative w-full h-full aspect-square flex items-center justify-center bg-gray-50 rounded-xl shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
          isWrongClick ? "ring-4 ring-red-400" : ""
        } ${isCorrectClick ? "ring-4 ring-green-400" : ""}`}
        style={{ minWidth: "64px", minHeight: "64px" }}
        whileHover={clickedId === null ? { scale: 1.05 } : {}}
        whileTap={clickedId === null ? { scale: 0.95 } : {}}
        animate={
          isWrongClick
            ? { x: [-5, 5, -5, 5, 0], transition: { duration: 0.4 } }
            : isCorrectClick
            ? { scale: [1, 1.2, 1], transition: { duration: 0.4 } }
            : {}
        }
        disabled={clickedId !== null}
        aria-label={`${shape.colorHex} ${shape.type}`}
        tabIndex={0}
      >
        {shapeContent}
      </motion.button>
    );
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-4 space-y-8">
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center text-sm font-semibold text-gray-600">
          <span>{`Round ${currentRoundIdx + 1} / ${rounds.length}`}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: `${(currentRoundIdx / rounds.length) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 min-h-[60px] flex items-center justify-center">
        {currentRound.taskDescription[lang]}
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentRound.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-3 gap-3 md:gap-6 w-full max-w-md aspect-square"
        >
          {currentRound.shapes.map(renderShape)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
