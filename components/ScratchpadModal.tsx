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
  // Extract math expression from question
  const steps = useMemo(() => {
    const expressionMatch = questionText.match(/\d+(?:\s*[-+*/]\s*\d+)+/);
    if (!expressionMatch) {
      console.log('[ScratchpadModal] No math expression found in:', questionText);
      return [];
    }

    const expression = expressionMatch[0];
    console.log('[ScratchpadModal] Found expression:', expression);
    const needsHelp = needsStepByStepHelp(expression);
    console.log('[ScratchpadModal] Needs help:', needsHelp);

    if (!needsHelp) return [];

    const calculatedSteps = createStepsFromExpression(expression);
    console.log('[ScratchpadModal] Created steps:', calculatedSteps.length);
    return calculatedSteps;
  }, [questionText]);

  if (steps.length === 0) return null;

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
                <DigitalScratchpad
                  steps={steps}
                  title="Szám kalkulátor"
                  showHints={true}
                  mobile={true}
                  onComplete={onClose}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
