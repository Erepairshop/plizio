import React from "react";
import { motion } from "framer-motion";
import { WinterSvgNoBorder, FruehlingSvgNoBorder, SommerSvgNoBorder, HerbstSvgNoBorder } from "@/components/testpapier-visual/svg/K1K2SvgsB";

interface JahreszeitenBildProps {
  svgName: string;
  options: string[];
  correctIndex: number;
  userAnswer?: string;
  submitted: boolean;
  onAnswer: (ans: string) => void;
}

export default function JahreszeitenBild({
  svgName,
  options,
  correctIndex,
  userAnswer,
  submitted,
  onAnswer,
}: JahreszeitenBildProps) {
  const renderSvg = () => {
    const props = { className: "w-full max-w-[120px] h-auto max-h-20 mx-auto" };
    switch (svgName) {
      case "WinterSvg": return <WinterSvgNoBorder {...props} />;
      case "FruehlingSvg": return <FruehlingSvgNoBorder {...props} />;
      case "SommerSvg": return <SommerSvgNoBorder {...props} />;
      case "HerbstSvg": return <HerbstSvgNoBorder {...props} />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="bg-white/50 p-4 rounded-xl border border-white/20 shadow-sm w-full flex justify-center">
        {renderSvg()}
      </div>

      <div className="flex flex-wrap justify-center gap-2 w-full">
        {options.map((opt, i) => {
          const isSelected = userAnswer === opt;
          const isCorrect = i === correctIndex;
          
          let btnClass = "px-4 py-2 rounded-full font-medium text-sm transition-all border-2 ";
          if (!submitted) {
            btnClass += isSelected
              ? "bg-blue-500 text-white border-blue-500 shadow-md scale-105"
              : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50";
          } else {
            if (isCorrect) {
              btnClass += "bg-green-500 text-white border-green-500 shadow-md";
            } else if (isSelected && !isCorrect) {
              btnClass += "bg-red-500 text-white border-red-500 shadow-md";
            } else {
              btnClass += "bg-white text-slate-400 border-slate-200 opacity-50";
            }
          }

          return (
            <motion.button
              key={opt}
              whileHover={!submitted ? { scale: 1.05 } : {}}
              whileTap={!submitted ? { scale: 0.95 } : {}}
              onClick={() => !submitted && onAnswer(opt)}
              className={btnClass}
              disabled={submitted}
            >
              {opt}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
