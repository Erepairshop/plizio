"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface ShortInputLayoutProps {
  questionId: string;
  text: string;
  points: number;
  value: string | number;
  onChange: (value: string) => void;
  correctAnswer?: string | number;
  isGrading?: boolean;
  disabled?: boolean;
}

export default function ShortInputLayout({
  questionId,
  text,
  points,
  value,
  onChange,
  correctAnswer,
  isGrading = false,
  disabled = false,
}: ShortInputLayoutProps) {
  const isCorrect = value === correctAnswer;

  return (
    <motion.div
      className="mb-6 p-4 border-l-4 border-gray-300 bg-gradient-to-r from-gray-50 to-white rounded-lg"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-black text-gray-700">{questionId})</span>
          <p className="text-sm text-gray-700 font-medium">{text}</p>
        </div>
        <span className="text-xs font-bold text-gray-500 whitespace-nowrap">
          ({points}P)
        </span>
      </div>

      {/* Input field */}
      <div className="ml-6">
        <input
          type="text"
          value={value || ""}
          onChange={(e) => !disabled && onChange(e.target.value)}
          disabled={disabled}
          placeholder="Írj választ..."
          className={`w-full max-w-xs px-4 py-2.5 border-2 rounded-lg text-sm font-medium transition-all ${
            isGrading
              ? isCorrect
                ? "bg-green-50 border-green-400 text-green-700"
                : "bg-red-50 border-red-400 text-red-600"
              : "bg-white border-gray-300 text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          }`}
        />

        {/* Grading feedback */}
        {isGrading && (
          <div className="mt-2 flex items-center gap-2">
            {isCorrect ? (
              <>
                <Check size={16} className="text-green-600" />
                <span className="text-xs text-green-600 font-bold">Helyes!</span>
              </>
            ) : (
              <>
                <X size={16} className="text-red-600" />
                <span className="text-xs text-red-600 font-bold">
                  Helytelen. Helyes válasz: <strong>{correctAnswer}</strong>
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
