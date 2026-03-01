"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { type SubQuestion } from "@/lib/mathCurriculum";

interface TableFillLayoutProps {
  questionId: string;
  text: string;
  rows?: SubQuestion["rows"];
  values: Record<string, string | number>; // key: "row_0_col_0", value: answer
  onChange: (key: string, value: string) => void;
  correctAnswers?: Record<string, string | number>;
  isGrading?: boolean;
  disabled?: boolean;
}

export default function TableFillLayout({
  questionId,
  text,
  rows = [],
  values,
  onChange,
  correctAnswers = {},
  isGrading = false,
  disabled = false,
}: TableFillLayoutProps) {
  const totalPoints =
    rows?.reduce(
      (sum, row) => sum + (row.cells?.reduce((s, c) => s + (c.points || 0), 0) || 0),
      0
    ) || 0;

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

      {/* Table */}
      <div className="ml-6 overflow-x-auto">
        <table className="border-collapse text-sm">
          <tbody>
            {rows?.map((row, rowIdx) => (
              <tr key={rowIdx}>
                <td className="px-3 py-2 font-bold text-gray-600 border border-gray-300 bg-gray-100 min-w-24">
                  {row.label}
                </td>
                {row.cells?.map((cell, cellIdx) => {
                  const key = `row_${rowIdx}_col_${cellIdx}`;
                  const value = values[key] || "";
                  const correct = correctAnswers[key];
                  const isCorrect = value === correct;

                  return (
                    <td
                      key={cellIdx}
                      className={`px-2 py-1 border border-gray-300 ${
                        isGrading
                          ? isCorrect
                            ? "bg-green-50"
                            : "bg-red-50"
                          : "bg-white"
                      }`}
                    >
                      <div className="flex flex-col gap-1">
                        <input
                          type="number"
                          value={value}
                          onChange={(e) =>
                            !disabled && onChange(key, e.target.value)
                          }
                          disabled={disabled}
                          placeholder="?"
                          className="w-12 px-1 py-1 border border-gray-300 rounded text-center text-xs font-medium focus:outline-none focus:border-blue-400"
                        />
                        {!isGrading && (
                          <span className="text-[10px] text-gray-500 text-center">
                            {cell.points}P
                          </span>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Grading feedback */}
      {isGrading && (
        <div className="mt-3 text-xs text-gray-600">
          <p className="font-bold mb-2">Richtige Antworten:</p>
          <div className="grid grid-cols-2 gap-2">
            {rows?.map((row, rowIdx) =>
              row.cells?.map((cell, cellIdx) => {
                const key = `row_${rowIdx}_col_${cellIdx}`;
                const correct = correctAnswers[key];
                return (
                  <div key={key} className="text-gray-700">
                    {row.label} - {cell.label || cellIdx}: <strong>{correct}</strong>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
