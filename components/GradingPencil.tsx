'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GradingPencilProps {
  gradingIndex: number;
  total: number;
}

// Realistic 3D yellow pencil SVG (pointing right)
function PencilSVG() {
  return (
    <svg width="130" height="30" viewBox="0 0 130 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      {/* Eraser (pink rubber) */}
      <rect x="1" y="10" width="11" height="10" rx="2" fill="#fda4af" />
      <rect x="1" y="10" width="11" height="3.5" rx="2" fill="#fecdd3" opacity="0.7" />
      <rect x="1" y="17.5" width="11" height="2.5" rx="1" fill="#f43f5e" opacity="0.2" />

      {/* Ferrule (metal band) */}
      <rect x="12" y="8.5" width="9" height="13" fill="url(#pg-ferrule)" />
      {/* Ferrule highlight lines */}
      <line x1="14" y1="8.5" x2="14" y2="21.5" stroke="white" strokeWidth="0.8" opacity="0.5" />
      <line x1="16.5" y1="8.5" x2="16.5" y2="21.5" stroke="white" strokeWidth="0.4" opacity="0.25" />
      <line x1="19" y1="8.5" x2="19" y2="21.5" stroke="#334155" strokeWidth="0.6" opacity="0.3" />

      {/* Pencil body (yellow) */}
      <rect x="21" y="5" width="78" height="20" fill="url(#pg-body)" />
      {/* Top edge highlight */}
      <rect x="21" y="5" width="78" height="4" fill="white" opacity="0.12" />
      {/* Bottom edge shadow */}
      <rect x="21" y="21" width="78" height="4" fill="#92400e" opacity="0.15" />
      {/* Pencil body border */}
      <rect x="21" y="5" width="78" height="20" fill="none" stroke="#a16207" strokeWidth="0.4" opacity="0.6" />

      {/* Wood tip (cone) */}
      <polygon points="99,5 99,25 117,15" fill="url(#pg-wood)" />
      {/* Wood cone shading */}
      <polygon points="99,5 99,12 110,10" fill="#f5e6d0" opacity="0.5" />
      <polygon points="99,18 99,25 110,20" fill="#6b4226" opacity="0.3" />

      {/* Graphite tip */}
      <polygon points="114,15 121,13 125,15 121,17" fill="#1e293b" />
      {/* Graphite highlight */}
      <polygon points="116,14.5 120,13.5 121,14.8 120,15" fill="#475569" opacity="0.7" />
      {/* Tip point */}
      <circle cx="125" cy="15" r="1" fill="#0f172a" />
    </svg>
  );
}

export default function GradingPencil({ gradingIndex, total }: GradingPencilProps) {
  const [pencilTop, setPencilTop] = useState<number | null>(null);
  const [writing, setWriting] = useState(false);

  useEffect(() => {
    if (gradingIndex < 0 || gradingIndex >= total) return;

    const el = document.querySelector(`[data-question-id="q_${gradingIndex}"]`);
    if (!el) return;

    // Scroll into view first
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // After scroll settles, get position
    const timer = setTimeout(() => {
      const rect = el.getBoundingClientRect();
      // Point tip at the input area (lower half of question card)
      setPencilTop(rect.top + rect.height * 0.62 - 15);

      // Trigger writing wobble
      setWriting(false);
      requestAnimationFrame(() => {
        setTimeout(() => setWriting(true), 50);
      });
    }, 220);

    return () => clearTimeout(timer);
  }, [gradingIndex, total]);

  // Hide after all graded
  if (gradingIndex >= total || pencilTop === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="pencil"
        style={{
          position: 'fixed',
          right: 4,
          zIndex: 250,
          pointerEvents: 'none',
          transformOrigin: 'right center',
          transform: 'rotate(-22deg)',
        }}
        animate={{ top: pencilTop }}
        transition={{ type: 'spring', stiffness: 220, damping: 24 }}
      >
        {/* Writing wobble animation */}
        <motion.div
          animate={writing ? {
            x: [0, -3, 2, -4, 3, -2, 4, -3, 1, 0],
            y: [0, 1, -1, 2, -1, 1, -2, 1, 0, 0],
            rotate: [0, -1.5, 1, -2, 1.5, -1, 2, -1.5, 0.5, 0],
          } : {}}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        >
          <PencilSVG />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
