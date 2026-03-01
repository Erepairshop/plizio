/**
 * Scratchpad Modal for math questions
 * Simple, clean overlay that appears when user clicks "Piszkozat" button
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import DigitalScratchpad from './DigitalScratchpad';
import { createStepsFromExpression, needsStepByStepHelp } from '@/lib/calculationHelper';

interface ScratchpadModalProps {
  isOpen: boolean;
  onClose: () => void;
  questionText: string;
}

export default function ScratchpadModal({
  isOpen,
  onClose,
  questionText,
}: ScratchpadModalProps) {
  // Extract math expression from question (if any)
  const steps = useMemo(() => {
    const expressionMatch = questionText.match(/\d+(?:\s*[-+*/]\s*\d+)+/);
    if (!expressionMatch) {
      console.log('[ScratchpadModal] No math expression found in:', questionText);
      // Return empty steps for free scratchpad mode
      return [];
    }

    const expression = expressionMatch[0];
    console.log('[ScratchpadModal] Found expression:', expression);
    const needsHelp = needsStepByStepHelp(expression);
    console.log('[ScratchpadModal] Needs help:', needsHelp);

    if (!needsHelp) {
      // Return empty steps if expression doesn't need help (e.g., too simple)
      return [];
    }

    const calculatedSteps = createStepsFromExpression(expression);
    console.log('[ScratchpadModal] Created steps:', calculatedSteps.length);
    return calculatedSteps;
  }, [questionText]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <motion.button
                onClick={onClose}
                className="absolute -top-10 right-0 p-2 text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              {/* Content */}
              <div className="flex justify-center">
                {steps.length > 0 ? (
                  <DigitalScratchpad
                    steps={steps}
                    title="Szám kalkulátor"
                    showHints={true}
                    mobile={true}
                    onComplete={onClose}
                  />
                ) : (
                  // Free scratchpad - empty paper for notes
                  <motion.div
                    className="w-full max-w-sm bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sm:p-6">
                      <h2 className="text-lg sm:text-xl font-black flex items-center gap-2">
                        📝 Freier Entwurf
                      </h2>
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="bg-white rounded-xl p-8 min-h-96 border-2 border-dashed border-blue-300 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="text-5xl">✏️</div>
                          <p className="text-slate-600 font-semibold">Rajzolj és jegyzetelj szabadon!</p>
                          <p className="text-sm text-slate-500">Ez az oldal a saját gondolataidhoz</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
