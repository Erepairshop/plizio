'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GradingPencilProps {
  gradingIndex: number;
  total: number;
}

// Realistic 3D yellow pencil SVG
function PencilSVG({ size = 1 }: { size?: number }) {
  const w = Math.round(130 * size);
  const h = Math.round(30 * size);
  return (
    <svg width={w} height={h} viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pg-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="25%" stopColor="#fde047" />
          <stop offset="65%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
        <linearGradient id="pg-ferrule" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="40%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="pg-wood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ede0c8" />
          <stop offset="50%" stopColor="#c8a76c" />
          <stop offset="100%" stopColor="#a0784a" />
        </linearGradient>
      </defs>
      <rect x="1" y="10" width="11" height="10" rx="2" fill="#fda4af" />
      <rect x="1" y="10" width="11" height="3.5" rx="2" fill="#fecdd3" opacity="0.7" />
      <rect x="12" y="8.5" width="9" height="13" fill="url(#pg-ferrule)" />
      <rect x="21" y="5" width="78" height="20" fill="url(#pg-body)" />
      <rect x="21" y="5" width="78" height="4" fill="white" opacity="0.12" />
      <rect x="21" y="5" width="78" height="20" fill="none" stroke="#a16207" strokeWidth="0.4" opacity="0.6" />
      <polygon points="99,5 99,25 117,15" fill="url(#pg-wood)" />
      <polygon points="114,15 121,13 125,15 121,17" fill="#1e293b" />
      <circle cx="125" cy="15" r="1" fill="#0f172a" />
    </svg>
  );
}

export default function GradingPencil({ gradingIndex, total }: GradingPencilProps) {
  useEffect(() => {
    if (gradingIndex < 0 || gradingIndex >= total) return;

    const questionEl = document.querySelector(`[data-question-id="q_${gradingIndex}"]`);
    if (questionEl) {
      questionEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [gradingIndex, total]);

  // This component now only handles scrolling.
  // The inline pencil is rendered directly in the question list (see page.tsx).
  return null;
}

// Inline pencil that renders INSIDE the question being graded
export function InlineGradingPencil({ label = 'Korrektur...' }: { label?: string }) {
  const [writing, setWriting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setWriting(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className="flex items-center gap-2 py-2"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <motion.div
        style={{
          transform: 'rotate(-15deg)',
          transformOrigin: 'right center',
        }}
        animate={writing ? {
          rotate: [-15, -18, -12, -20, -14, -17, -13, -15],
          x: [0, 3, -2, 5, -1, 4, -3, 0],
        } : {}}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <PencilSVG size={0.8} />
      </motion.div>
      <motion.span
        className="text-sm font-bold text-amber-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.6, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ✍️ {label}
      </motion.span>
    </motion.div>
  );
}
