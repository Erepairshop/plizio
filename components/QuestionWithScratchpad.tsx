/**
 * Question component with integrated digital scratchpad
 * Combines question display with step-by-step calculation helper
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DigitalScratchpad, { CalculationStep } from './DigitalScratchpad';
import ScratchpadButton from './ScratchpadButton';
import {
  needsStepByStepHelp,
  createStepsFromExpression,
} from '@/lib/calculationHelper';

interface Question {
  number: number;
  question: string;
  isWordProblem?: boolean;
}

interface QuestionWithScratchpadProps {
  question: Question;
  children: React.ReactNode; // Options/answer area
  showScratchpad?: boolean;
  gradeLevel?: number;
  mobile?: boolean;
}

export default function QuestionWithScratchpad({
  question,
  children,
  showScratchpad = true,
  gradeLevel = 4,
  mobile = true,
}: QuestionWithScratchpadProps) {
  const [scratchpadOpen, setScratchpadOpen] = useState(false);

  // Detect if this question needs scratchpad help
  // Look for math expressions in the question
  const hasMathExpression = /\d+\s*[-+*/]\s*\d+/.test(question.question);
  const shouldShowScratchpad = showScratchpad && hasMathExpression;

  // Extract and prepare calculation steps
  const steps = useMemo(() => {
    if (!shouldShowScratchpad) return [];

    // Extract the first math expression from the question
    const expressionMatch = question.question.match(/\d+(?:\s*[-+*/]\s*\d+)+/);

    if (!expressionMatch) return [];

    const expression = expressionMatch[0];
    const needs = needsStepByStepHelp(expression);

    if (!needs) return [];

    return createStepsFromExpression(expression);
  }, [question.question, shouldShowScratchpad]);

  const hasScratchpadSteps = steps.length > 0;

  return (
    <div className="space-y-4">
      {/* Question header */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-black text-sm sm:text-base">
          {question.number}
        </div>
        <p
          className={`flex-1 text-sm sm:text-base font-medium leading-relaxed pt-1 ${
            question.isWordProblem
              ? 'text-slate-700 italic'
              : 'text-slate-900 font-semibold'
          }`}
        >
          {question.question}
        </p>
      </div>

      {/* Scratchpad button and content */}
      {hasScratchpadSteps && (
        <motion.div className="space-y-3 pl-11 sm:pl-14">
          <ScratchpadButton
            isOpen={scratchpadOpen}
            onToggle={() => setScratchpadOpen(!scratchpadOpen)}
            hasProblem={hasScratchpadSteps}
            mobile={mobile}
          />

          {/* Scratchpad content */}
          <AnimatePresence>
            {scratchpadOpen && hasScratchpadSteps && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4">
                  <DigitalScratchpad
                    steps={steps}
                    title="Számolás Segítő"
                    showHints={true}
                    mobile={mobile}
                    onComplete={(result) => {
                      // Optional: Log completion or trigger action
                      console.log('Scratchpad completed with result:', result);
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Options/Answer area */}
      <div className="pl-11 sm:pl-14">{children}</div>
    </div>
  );
}
