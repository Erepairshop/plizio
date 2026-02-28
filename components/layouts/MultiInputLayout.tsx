"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { type SubQuestion } from "@/lib/mathCurriculum";

interface MultiInputLayoutProps {
  questionId: string;
  text: string;
  fields: SubQuestion["fields"];
  values: Record<string, string | number>;
  onChange: (fieldId: string, value: string) => void;
  correctAnswers?: Record<string, string | number>;
  isGrading?: boolean;
  disabled?: boolean;
}

export default function MultiInputLayout({
  questionId,
  text,
  fields = [],
  values,
  onChange,
  correctAnswers = {},
  isGrading = false,
  disabled = false,
}: MultiInputLayoutProps) {
  const totalPoints = fields?.reduce((sum, f) => sum + (f.points || 0), 0) || 0;

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
          ({totalPoints}P)
        </span>
      </div>

      {/* Input fields */}
      <div className="ml-6 space-y-3">
        {fields?.map((field) => {
          const fieldValue = values[field.id] || "";
          const correctAnswer = correctAnswers[field.id];
          const isCorrect = fieldValue === correctAnswer;

          return (
            <motion.div
              key={field.id}
              className="flex items-end gap-3"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex-1 max-w-xs">
                <label className="block text-xs font-bold text-gray-600 mb-1.5">
                  {field.label} ({field.points}P)
                </label>
                <input
                  type={field.type}
                  value={fieldValue}
                  onChange={(e) =>
                    !disabled && onChange(field.id, e.target.value)
                  }
                  disabled={disabled}
                  placeholder={field.placeholder || "..."}
                  className={`w-full px-3 py-2 border-2 rounded-lg text-sm font-medium transition-all ${
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
                <div className="flex-shrink-0 mb-1">
                  {isCorrect ? (
                    <Check size={18} className="text-green-600" />
                  ) : (
                    <X size={18} className="text-red-600" />
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Grading summary */}
      {isGrading && (
        <div className="mt-4 pt-3 border-t border-gray-200">
          <div className="ml-6 text-xs space-y-1">
            {fields?.map((field) => {
              const fieldValue = values[field.id];
              const correctAnswer = correctAnswers[field.id];
              const isCorrect = fieldValue === correctAnswer;

              return !isCorrect ? (
                <div key={field.id} className="text-red-600 font-semibold">
                  {field.label}: helyes válasz = <strong>{correctAnswer}</strong>
                </div>
              ) : null;
            })}
          </div>
        </div>
      )}
    </motion.div>
  );
}
