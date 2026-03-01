/**
 * Digital Scratchpad for step-by-step calculation help
 * Interactive calculation assistant for complex math problems
 * Mobile-friendly, paper-like design
 */

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ChevronDown, Lightbulb, RotateCcw } from 'lucide-react';

export interface CalculationStep {
  operation: string;        // e.g., "1000 - 234"
  operand1: number;
  operator: '+' | '-' | '*' | '/';
  operand2: number;
  result: number;
  explanation?: string;     // e.g., "1000 - 200 = 800, 800 - 34 = 766"
}

interface DigitalScratchpadProps {
  steps: CalculationStep[];
  title?: string;
  showHints?: boolean;
  onComplete?: (result: number) => void;
  mobile?: boolean;
}

export default function DigitalScratchpad({
  steps,
  title = 'Digitális Piszkozat',
  showHints = true,
  onComplete,
  mobile = true,
}: DigitalScratchpadProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(steps.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHintFor, setShowHintFor] = useState<number | null>(null);

  const currentStep = steps[currentStepIndex];
  const isCorrect = userAnswers[currentStepIndex] === currentStep.result;

  // Auto-check if answer is correct
  useEffect(() => {
    if (userAnswers[currentStepIndex] !== null && isCorrect && currentStepIndex < steps.length - 1) {
      setTimeout(() => setCurrentStepIndex(currentStepIndex + 1), 600);
    }
  }, [userAnswers[currentStepIndex], currentStepIndex, isCorrect, steps.length]);

  // Check if all steps completed
  useEffect(() => {
    const allCompleted = userAnswers.every((ans, idx) => ans === steps[idx].result);
    if (allCompleted && userAnswers.some(ans => ans !== null)) {
      setIsCompleted(true);
      if (onComplete) {
        onComplete(steps[steps.length - 1].result);
      }
    }
  }, [userAnswers, steps, onComplete]);

  const handleInputChange = (value: string) => {
    const num = value === '' ? null : parseInt(value);
    const newAnswers = [...userAnswers];
    newAnswers[currentStepIndex] = num;
    setUserAnswers(newAnswers);
  };

  const handleHint = () => {
    if (showHintFor === currentStepIndex) {
      setShowHintFor(null);
    } else {
      setShowHintFor(currentStepIndex);
    }
  };

  const handleReset = () => {
    setUserAnswers(Array(steps.length).fill(null));
    setCurrentStepIndex(0);
    setIsCompleted(false);
    setShowHintFor(null);
  };

  const progressPercent = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${
        mobile ? 'mx-auto w-full max-w-sm' : 'w-full max-w-2xl'
      } bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg sm:text-xl font-black flex items-center gap-2">
            🧮 {title}
          </h2>
          {isCompleted && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="text-2xl"
            >
              ✅
            </motion.div>
          )}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-xs sm:text-sm text-white/80 mt-2 font-mono">
          Lépés: {currentStepIndex + 1} / {steps.length}
        </p>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-6">
        <AnimatePresence mode="wait">
          {!isCompleted ? (
            <motion.div
              key={`step-${currentStepIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              {/* Operation display */}
              <div className="bg-white rounded-xl p-4 sm:p-6 border-2 border-blue-200 shadow-sm">
                <p className="text-xs sm:text-sm text-slate-600 font-semibold uppercase tracking-wide mb-3">
                  📐 Számítás:
                </p>

                {/* Visual calculation */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-lg sm:text-2xl font-black text-slate-800">
                    <span className="inline-block w-16 sm:w-20 text-right">
                      {currentStep.operand1}
                    </span>
                    <span className="text-blue-600 text-xl sm:text-3xl">
                      {currentStep.operator === '+' ? '➕' : '➖'}
                    </span>
                    <span className="inline-block w-16 sm:w-20">
                      {currentStep.operand2}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-lg sm:text-2xl font-black text-indigo-700">
                    <span className="w-16 sm:w-20"></span>
                    <span className="text-2xl">━━━━</span>
                    <span className="w-16 sm:w-20"></span>
                  </div>
                </div>
              </div>

              {/* Input field */}
              <div className="bg-white rounded-xl p-4 sm:p-6 border-2 border-indigo-300 shadow-sm">
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-3">
                  Az eredmény:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={userAnswers[currentStepIndex] ?? ''}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder="Írj számot..."
                    className={`flex-1 px-4 py-3 text-lg sm:text-xl font-bold rounded-lg border-2 transition-all focus:outline-none ${
                      userAnswers[currentStepIndex] === null
                        ? 'border-slate-300 focus:border-blue-500 bg-white'
                        : isCorrect
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-red-500 bg-red-50 text-red-700'
                    }`}
                    autoFocus
                  />
                  <AnimatePresence>
                    {userAnswers[currentStepIndex] !== null && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className={`text-3xl ${isCorrect ? 'text-green-500' : 'text-red-500'}`}
                      >
                        {isCorrect ? '✓' : '✗'}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Hints */}
              {showHints && (
                <motion.button
                  onClick={handleHint}
                  className="w-full px-4 py-3 sm:py-4 bg-yellow-100 hover:bg-yellow-200 border-2 border-yellow-400 rounded-lg font-bold text-sm sm:text-base text-yellow-900 transition-colors flex items-center justify-between"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    <Lightbulb size={18} />
                    {showHintFor === currentStepIndex ? 'Hint elrejtése' : 'Kér egy tippet'}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      showHintFor === currentStepIndex ? 'rotate-180' : ''
                    }`}
                  />
                </motion.button>
              )}

              {/* Hint content */}
              <AnimatePresence>
                {showHintFor === currentStepIndex && currentStep.explanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 sm:p-5"
                  >
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>💡 Segítség:</strong> {currentStep.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex gap-2 pt-4">
                <motion.button
                  onClick={handleReset}
                  className="flex-1 px-4 py-3 sm:py-4 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-sm sm:text-base text-slate-800 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <RotateCcw size={18} />
                  <span className="hidden sm:inline">Újra kezdés</span>
                  <span className="sm:hidden">Újra</span>
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-4"
            >
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6 }}
                className="text-6xl"
              >
                🎉
              </motion.div>
              <h3 className="text-2xl font-black text-indigo-700">Remek!</h3>
              <p className="text-sm sm:text-base text-slate-700">
                Az eredmény: <strong className="text-2xl text-indigo-700">{steps[steps.length - 1].result}</strong>
              </p>
              <motion.button
                onClick={handleReset}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors mx-auto block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Másik feladat
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Step indicators */}
      <div className="px-4 sm:px-6 pb-4 bg-slate-50/50 border-t border-blue-200">
        <div className="flex gap-1.5 flex-wrap">
          {steps.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => !isCompleted && setCurrentStepIndex(idx)}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-bold text-xs sm:text-sm transition-all ${
                idx === currentStepIndex
                  ? 'bg-blue-600 text-white shadow-lg'
                  : userAnswers[idx] === steps[idx].result
                  ? 'bg-green-500 text-white'
                  : 'bg-slate-300 text-slate-700 hover:bg-slate-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {idx + 1}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
