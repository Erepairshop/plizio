"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface SchriftlichLayoutProps {
  questionId: string;
  text: string;
  points: number;
  operation: "+" | "-" | "*" | "/"; // Math operation
  numbers: number[]; // Numbers to calculate (e.g., [234, 156] for 234 + 156)
  value: string | number; // Student's answer
  onChange: (value: string) => void;
  correctAnswer?: number;
  isGrading?: boolean;
  disabled?: boolean;
  workSpaceLines?: number;
}

export default function SchriftlichLayout({
  questionId,
  text,
  points,
  operation,
  numbers,
  value,
  onChange,
  correctAnswer,
  isGrading = false,
  disabled = false,
  workSpaceLines = 4,
}: SchriftlichLayoutProps) {
  const isCorrect = Number(value) === correctAnswer;
  const operationSymbol = operation === "*" ? "×" : operation === "/" ? "÷" : operation;

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

      <div className="ml-6">
        {/* Column calculation visual */}
        <div className="mb-4 p-3 bg-white border border-gray-200 rounded-lg font-mono text-sm inline-block">
          <div className="text-center text-gray-600">
            {numbers.map((num, idx) => (
              <div key={idx} className="mb-0.5">
                {idx === 0 ? (
                  <div>
                    <span className="inline-block w-10 text-right">{num}</span>
                  </div>
                ) : (
                  <div>
                    <span className="inline-block mr-1">{operationSymbol}</span>
                    <span className="inline-block w-10 text-right">{num}</span>
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-gray-400 mt-1 pt-1">
              <span className="inline-block w-10 text-right">?</span>
            </div>
          </div>
        </div>

        {/* Work space */}
        <div className="mb-4">
          <p className="text-xs font-bold text-gray-600 mb-2">Munkahely:</p>
          <div className="space-y-0.5 bg-white p-2 border border-gray-300 rounded">
            {Array.from({ length: workSpaceLines }).map((_, idx) => (
              <div
                key={idx}
                className="h-5 border-b border-gray-200 border-dashed"
              />
            ))}
          </div>
        </div>

        {/* Answer input */}
        <div className="mb-3">
          <label className="block text-xs font-bold text-gray-600 mb-1.5">
            Végeredmény:
          </label>
          <input
            type="number"
            value={value || ""}
            onChange={(e) => !disabled && onChange(e.target.value)}
            disabled={disabled}
            placeholder="Írj számot..."
            className={`w-24 px-3 py-2 border-2 rounded-lg text-sm font-medium transition-all ${
              isGrading
                ? isCorrect
                  ? "bg-green-50 border-green-400 text-green-700"
                  : "bg-red-50 border-red-400 text-red-600"
                : "bg-white border-gray-300 text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            }`}
          />
        </div>

        {/* Grading feedback */}
        {isGrading && (
          <div className="mt-3 flex items-center gap-2">
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
