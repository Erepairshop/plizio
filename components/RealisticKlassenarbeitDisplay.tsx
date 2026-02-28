"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { type GroupedTask, type SubQuestion } from "@/lib/mathCurriculum";

interface RealisticKlassenarbeitDisplayProps {
  tasks: GroupedTask[];
  answers: Record<string, string | number>; // { "task_0_a": answer, "task_0_b": answer, ... }
  onAnswerChange: (taskIndex: number, subQuestionId: string, answer: string | number) => void;
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
    const isCorrect = userAnswer === subQuestion.correctAnswer;

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
                  ? isCorrect
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
        {isGrading && isGraded && (
          <div className="mt-3 text-xs font-bold">
            {isCorrect ? (
              <span className="text-green-600">✓ Helyes!</span>
            ) : (
              <span className="text-red-600">✗ Helytelen! Helyes válasz: {subQuestion.correctAnswer}</span>
            )}
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="space-y-4">
      {tasks.map((task, taskIndex) => {
        const isExpanded = expandedTask === taskIndex;
        const taskAnswered = Object.keys(answers).some(
          (key) => key.startsWith(`task_${taskIndex}_`),
        );

        return (
          <motion.div
            key={taskIndex}
            className="border-2 border-gray-300 rounded-xl overflow-hidden bg-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Task Header */}
            <button
              onClick={() => setExpandedTask(isExpanded ? null : taskIndex)}
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-colors"
              disabled={isGrading}
            >
              <div className="text-left flex-1">
                <h3 className="text-lg font-black text-gray-800">
                  Aufgabe {task.taskNumber}: {task.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Punkte: {task.totalPoints} | Sektion: {task.section}
                </p>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={24} className="text-gray-600" />
              </motion.div>
            </button>

            {/* Task Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 py-6 space-y-4 bg-white"
                >
                  {/* Task description */}
                  {task.description && (
                    <p className="text-sm text-gray-700 font-medium mb-4">{task.description}</p>
                  )}

                  {/* Task image */}
                  {task.imageUrl && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src={task.imageUrl}
                        alt={task.title}
                        className="w-full max-h-96 object-cover"
                      />
                    </div>
                  )}

                  {/* Sub-questions */}
                  <div className="space-y-4">
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
