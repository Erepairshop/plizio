/**
 * Button to open/close digital scratchpad for calculation help
 * Mobile-friendly design with smooth animations
 */

'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pencil, X, ChevronUp } from 'lucide-react';

interface ScratchpadButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  hasProblem: boolean;
  mobile?: boolean;
}

export default function ScratchpadButton({
  isOpen,
  onToggle,
  hasProblem,
  mobile = true,
}: ScratchpadButtonProps) {
  if (!hasProblem) return null;

  return (
    <motion.button
      onClick={onToggle}
      className={`w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-xl sm:rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center sm:justify-start gap-2 ${
        mobile ? 'text-sm sm:text-base' : 'text-base'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <ChevronUp size={20} /> : <Pencil size={20} />}
      </motion.div>
      <span className="font-black tracking-wide">
        {isOpen ? 'Piszkozat eltakarása' : '📝 Piszkozat'}
      </span>
    </motion.button>
  );
}
