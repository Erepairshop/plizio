'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GradingPencilProps {
  gradingIndex: number;
  total: number;
  isCorrect: boolean;
}

export default function GradingPencil({ gradingIndex, total, isCorrect }: GradingPencilProps) {
  const [pos, setPos] = useState<{ top: number; right: number } | null>(null);
  const [visible, setVisible] = useState(false);
  const [markKey, setMarkKey] = useState(0);

  useEffect(() => {
    if (gradingIndex < 0 || gradingIndex >= total) {
      setVisible(false);
      return;
    }

    const el = document.querySelector(`[data-question-id="q_${gradingIndex}"]`);
    if (!el) return;

    // Scroll the current question into view
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Small delay to let scroll settle before reading position
    const timer = setTimeout(() => {
      const rect = el.getBoundingClientRect();
      setPos({
        top: rect.top + rect.height / 2 - 24,
        right: 16,
      });
      setVisible(true);
      setMarkKey(k => k + 1);
    }, 200);

    return () => clearTimeout(timer);
  }, [gradingIndex, total]);

  if (!visible || !pos) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: pos.top,
        right: pos.right,
        zIndex: 200,
        pointerEvents: 'none',
      }}
      animate={{ top: pos.top }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
    >
      {/* Pencil SVG */}
      <motion.div
        animate={{ rotate: [0, -8, 8, -4, 0] }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        style={{ display: 'flex', alignItems: 'center', gap: 6 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            fill="#f59e0b"
          />
        </svg>

        {/* Check / X mark */}
        <AnimatePresence mode="wait">
          <motion.span
            key={markKey}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.15 }}
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: isCorrect ? '#16a34a' : '#dc2626',
              lineHeight: 1,
            }}
          >
            {isCorrect ? '✓' : '✗'}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
