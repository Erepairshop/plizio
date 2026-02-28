"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { type GroupedTask, type SubQuestion } from "@/lib/mathCurriculum";
import ShortInputLayout from "./layouts/ShortInputLayout";
import MultiInputLayout from "./layouts/MultiInputLayout";
import SchriftlichLayout from "./layouts/SchriftlichLayout";
import TableFillLayout from "./layouts/TableFillLayout";

interface RealisticKlassenarbeitDisplayProps {
  tasks: GroupedTask[];
  answers: Record<string, string | number>; // { "task_0_a": answer, "task_0_b": answer, ... }
  onAnswerChange: (taskIndex: number, subQuestionId: string, answer: string | number, fieldId?: string) => void;
  isGrading: boolean;
  gradeIndex?: number;
}

export default function RealisticKlassenarbeitDisplay({
  tasks,
  answers,
  onAnswerChange,
  isGrading,
  gradeIndex = -1,
}: RealisticKlassenarbeitDisplayProps) {
  const [expandedTask, setExpandedTask] = useState<number | null>(null);

  const renderSubQuestion = (
    taskIndex: number,
    subQuestion: SubQuestion,
    isGraded: boolean,
  ) => {
    const answerKey = `task_${taskIndex}_${subQuestion.id}`;
    const userAnswer = answers[answerKey];

    // Helper to build correct answers for multi-input
    const getMultiInputCorrectAnswers = () => {
      if (typeof subQuestion.correctAnswer !== "object") return {};
      return subQuestion.correctAnswer as Record<string, string | number>;
    };

    // Helper to get multi-input field values
    const getMultiInputValues = () => {
      const vals: Record<string, string | number> = {};
      subQuestion.fields?.forEach((field) => {
        const key = `task_${taskIndex}_${subQuestion.id}_${field.id}`;
        vals[field.id] = answers[key] || "";
      });
      return vals;
    };

    // Helper to get table values
    const getTableValues = () => {
      const vals: Record<string, string | number> = {};
      subQuestion.rows?.forEach((row, rowIdx) => {
        row.cells?.forEach((_, cellIdx) => {
          const key = `task_${taskIndex}_${subQuestion.id}_row_${rowIdx}_col_${cellIdx}`;
          vals[`row_${rowIdx}_col_${cellIdx}`] = answers[key] || "";
        });
      });
      return vals;
    };

    // Render based on type
    switch (subQuestion.type) {
      case "short_input":
        return (
          <motion.div
            key={subQuestion.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
          >
            <ShortInputLayout
              questionId={subQuestion.id}
              text={subQuestion.text}
              points={subQuestion.points}
              value={userAnswer || ""}
              onChange={(value) => onAnswerChange(taskIndex, subQuestion.id, value)}
              correctAnswer={typeof subQuestion.correctAnswer === "object" ? undefined : subQuestion.correctAnswer}
              isGrading={isGrading && isGraded}
              disabled={isGrading}
            />
          </motion.div>
        );

      case "multi_input":
        return (
          <MultiInputLayout
            key={subQuestion.id}
            questionId={subQuestion.id}
            text={subQuestion.text}
            fields={subQuestion.fields}
            values={getMultiInputValues()}
            onChange={(fieldId, value) =>
              onAnswerChange(taskIndex, subQuestion.id, value, fieldId)
            }
            correctAnswers={getMultiInputCorrectAnswers()}
            isGrading={isGrading && isGraded}
            disabled={isGrading}
          />
        );

      case "table_fill":
        return (
          <TableFillLayout
            key={subQuestion.id}
            questionId={subQuestion.id}
            text={subQuestion.text}
            rows={subQuestion.rows}
            values={getTableValues()}
            onChange={(key, value) =>
              onAnswerChange(taskIndex, subQuestion.id, value, key)
            }
            correctAnswers={
              typeof subQuestion.correctAnswer === "object"
                ? (subQuestion.correctAnswer as Record<string, string | number>)
                : {}
            }
            isGrading={isGrading && isGraded}
            disabled={isGrading}
          />
        );

      case "schriftlich_layout": {
        const correctNum = typeof subQuestion.correctAnswer === "number" ? subQuestion.correctAnswer : undefined;
        return (
          <SchriftlichLayout
            key={subQuestion.id}
            questionId={subQuestion.id}
            text={subQuestion.text}
            points={subQuestion.points}
            operation={(subQuestion.layout?.type as "+" | "-" | "*" | "/" | undefined) || "+"}
            numbers={[]} // TODO: Extract from text or add to SubQuestion
            value={userAnswer || ""}
            onChange={(value) => onAnswerChange(taskIndex, subQuestion.id, value)}
            correctAnswer={correctNum}
            isGrading={isGrading && isGraded}
            disabled={isGrading}
            workSpaceLines={subQuestion.workSpaceLines}
          />
        );
      }

      // Default: multiple-choice and free-text (original implementation)
      default:
        return (
          <motion.div
            key={subQuestion.id}
            className="mb-6 p-4 border-l-4 border-gray-300 bg-gray-50 rounded-lg"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Sub-question label and points */}
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-black text-gray-700">{subQuestion.id})</span>
                <p className="text-sm text-gray-700 font-medium">{subQuestion.text}</p>
              </div>
              <span className="text-xs font-bold text-gray-500">({subQuestion.points}P)</span>
            </div>

            {/* Input field based on type */}
            <div className="ml-6 mt-3">
              {subQuestion.type === "multiple-choice" && subQuestion.options ? (
                <div className="grid grid-cols-2 gap-2">
                  {subQuestion.options.map((option, idx) => {
                    const isSelected = userAnswer === option;
                    const optionIsCorrect = option === subQuestion.correctAnswer;

                    let bgColor = "bg-white border-gray-200 text-gray-700";
                    let hoverColor = "hover:bg-blue-50";

                    if (isGrading && isGraded) {
                      if (optionIsCorrect) {
                        bgColor = "bg-green-50 border-green-400 text-green-700";
                      } else if (isSelected && !optionIsCorrect) {
                        bgColor = "bg-red-50 border-red-400 text-red-600 line-through";
                      } else {
                        bgColor = "bg-white border-gray-200 text-gray-400";
                      }
                      hoverColor = "";
                    } else if (isSelected) {
                      bgColor = "bg-blue-50 border-blue-400 text-blue-700";
                      hoverColor = "";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => !isGrading && onAnswerChange(taskIndex, subQuestion.id, option)}
                        disabled={isGrading}
                        className={`px-3 py-2 rounded-lg border-2 text-sm font-bold transition-all ${bgColor} ${hoverColor}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              ) : (
                // Free text input
                <input
                  type={subQuestion.type === "calculation" ? "number" : "text"}
                  value={userAnswer || ""}
                  onChange={(e) => onAnswerChange(taskIndex, subQuestion.id, e.target.value)}
                  disabled={isGrading}
                  placeholder={`Válasz (${subQuestion.points}P)`}
                  className={`w-full px-3 py-2 border-2 rounded-lg text-sm font-medium transition-all ${
                    isGrading
                      ? userAnswer === subQuestion.correctAnswer
                        ? "bg-green-50 border-green-400 text-green-700"
                        : "bg-red-50 border-red-400 text-red-600"
                      : "bg-white border-gray-300 text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  }`}
                />
              )}
            </div>

            {/* Work space lines if specified */}
            {subQuestion.workSpaceLines && !isGrading && (
              <div className="mt-3 ml-6 space-y-1">
                {Array.from({ length: Math.min(subQuestion.workSpaceLines, 2) }).map((_, i) => (
                  <div key={i} className="h-6 border-b border-gray-300" />
                ))}
              </div>
            )}

            {/* Grading indicator */}
            {isGrading && isGraded && typeof subQuestion.correctAnswer !== "object" && (
              <div className="mt-3 text-xs font-bold">
                {userAnswer === subQuestion.correctAnswer ? (
                  <span className="text-green-600">✓ Helyes!</span>
                ) : (
                  <span className="text-red-600">✗ Helytelen! Helyes válasz: {subQuestion.correctAnswer}</span>
                )}
              </div>
            )}
          </motion.div>
        );
    }
  };

  return (
    <div className="space-y-2">
      {tasks.map((task, taskIndex) => {
        const isExpanded = expandedTask === taskIndex;
        const taskAnswered = Object.keys(answers).some(
          (key) => key.startsWith(`task_${taskIndex}_`),
        );

        return (
          <motion.div
            key={taskIndex}
            className="border border-gray-300 rounded-lg overflow-hidden bg-white"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Task Header - Kompaktabb */}
            <button
              onClick={() => setExpandedTask(isExpanded ? null : taskIndex)}
              className="w-full px-4 py-2.5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
              disabled={isGrading}
            >
              <div className="text-left flex-1">
                <h3 className="text-sm font-black text-gray-800">
                  Aufgabe {task.taskNumber}: {task.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  {task.totalPoints}P · {task.section}
                </p>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.15 }}
              >
                <ChevronDown size={20} className="text-gray-500" />
              </motion.div>
            </button>

            {/* Task Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 py-3 space-y-3 bg-white border-t border-gray-200"
                >
                  {/* Task description */}
                  {task.description && (
                    <p className="text-xs text-gray-700 font-medium">{task.description}</p>
                  )}

                  {/* Task image */}
                  {task.imageUrl && (
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={task.imageUrl}
                        alt={task.title}
                        className="w-full max-h-64 object-cover"
                      />
                    </div>
                  )}

                  {/* Sub-questions */}
                  <div className="space-y-3">
                    {task.subQuestions.map((subQuestion) => {
                      const answerKey = `task_${taskIndex}_${subQuestion.id}`;
                      const isGraded = isGrading && gradeIndex >= taskIndex;
                      return renderSubQuestion(taskIndex, subQuestion, isGraded);
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
