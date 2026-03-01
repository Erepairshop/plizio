'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

interface GradingPencilProps {
  gradingIndex: number;
  total: number;
}

// Realistic 3D yellow pencil SVG — tip on the RIGHT (x≈125, y=15)
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

      {/* Eraser */}
      <rect x="1" y="10" width="11" height="10" rx="2" fill="#fda4af" />
      <rect x="1" y="10" width="11" height="3.5" rx="2" fill="#fecdd3" opacity="0.7" />

      {/* Ferrule */}
      <rect x="12" y="8.5" width="9" height="13" fill="url(#pg-ferrule)" />
      <line x1="14" y1="8.5" x2="14" y2="21.5" stroke="white" strokeWidth="0.8" opacity="0.5" />
      <line x1="16.5" y1="8.5" x2="16.5" y2="21.5" stroke="white" strokeWidth="0.4" opacity="0.25" />

      {/* Body */}
      <rect x="21" y="5" width="78" height="20" fill="url(#pg-body)" />
      <rect x="21" y="5" width="78" height="4" fill="white" opacity="0.12" />
      <rect x="21" y="21" width="78" height="4" fill="#92400e" opacity="0.15" />
      <rect x="21" y="5" width="78" height="20" fill="none" stroke="#a16207" strokeWidth="0.4" opacity="0.6" />

      {/* Wood cone */}
      <polygon points="99,5 99,25 117,15" fill="url(#pg-wood)" />
      <polygon points="99,5 99,12 110,10" fill="#f5e6d0" opacity="0.5" />
      <polygon points="99,18 99,25 110,20" fill="#6b4226" opacity="0.3" />

      {/* Graphite tip */}
      <polygon points="114,15 121,13 125,15 121,17" fill="#1e293b" />
      <polygon points="116,14.5 120,13.5 121,14.8 120,15" fill="#475569" opacity="0.7" />
      <circle cx="125" cy="15" r="1" fill="#0f172a" />
    </svg>
  );
}

// Tip offset after 155deg rotation
const TIP_OFFSET_X = 11;
const TIP_OFFSET_Y = 41;

export default function GradingPencil({ gradingIndex, total }: GradingPencilProps) {
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);
  const [writing, setWriting] = useState(false);
  const portalRef = useRef<HTMLDivElement | null>(null);

  // Create a portal div appended directly to document.body
  useEffect(() => {
    const div = document.createElement('div');
    div.id = 'grading-pencil-portal';
    document.body.appendChild(div);
    portalRef.current = div;
    return () => {
      document.body.removeChild(div);
      portalRef.current = null;
    };
  }, []);

  const measureAndPosition = useCallback((el: Element) => {
    const inputEl = el.querySelector('input') ?? el;
    const rect = inputEl.getBoundingClientRect();

    const targetX = rect.left + 24;
    const targetY = rect.top + rect.height * 0.5;

    setPos({
      left: targetX - TIP_OFFSET_X,
      top: targetY - TIP_OFFSET_Y,
    });

    setWriting(false);
    setTimeout(() => setWriting(true), 120);
  }, []);

  useEffect(() => {
    if (gradingIndex < 0 || gradingIndex >= total) {
      setPos(null);
      return;
    }

    // Retry finding the element (DOM may not be ready yet)
    let attempts = 0;
    let timerId: ReturnType<typeof setTimeout>;

    const tryFind = () => {
      const questionEl = document.querySelector(`[data-question-id="q_${gradingIndex}"]`);
      if (!questionEl) {
        attempts++;
        if (attempts < 8) {
          timerId = setTimeout(tryFind, 150);
        }
        return;
      }

      // Scroll into view
      questionEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Wait for scroll to settle, then measure position
      timerId = setTimeout(() => measureAndPosition(questionEl), 500);
    };

    tryFind();

    return () => clearTimeout(timerId);
  }, [gradingIndex, total, measureAndPosition]);

  // Render directly into the portal div via DOM manipulation
  // This avoids needing react-dom types for createPortal
  if (pos === null || !portalRef.current) return null;

  // Move the portal div to show the pencil
  const portal = portalRef.current;
  portal.style.position = 'fixed';
  portal.style.left = '0';
  portal.style.top = '0';
  portal.style.width = '0';
  portal.style.height = '0';
  portal.style.overflow = 'visible';
  portal.style.zIndex = '99999';
  portal.style.pointerEvents = 'none';

  return (
    <motion.div
      key={`pencil-${gradingIndex}`}
      style={{
        position: 'fixed',
        zIndex: 99999,
        pointerEvents: 'none',
        left: pos.left,
        top: pos.top,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {/* Plain div for rotation — NOT a motion.div, so Framer doesn't interfere */}
      <div style={{
        transform: 'rotate(155deg)',
        transformOrigin: 'center center',
      }}>
        {/* Writing stroke wobble */}
        <motion.div
          animate={writing ? {
            x: [0, -5, 3, -7, 5, -4, 6, -3, 2, 0],
            y: [0, 2, -1, 3, -2, 2, -3, 1, -1, 0],
            rotate: [0, -1, 0.8, -1.5, 1, -0.8, 1.2, -0.5, 0.3, 0],
          } : { x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 0.95, ease: 'easeInOut' }}
        >
          <PencilSVG />
        </motion.div>
      </div>
    </motion.div>
  );
}
