'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TeacherNoteProps {
  visible: boolean;
  playerName: string;
  percentage: number;
}

// ─── 21 üzenet 3 szintben ─────────────────────────────────────────

const excellentMessages = [
  (n: string) => `Bravo, ${n}! ✨ Ausgezeichnet!`,
  (n: string) => `${n}, du bist ein Mathegenie! 🧠`,
  (n: string) => `Wunderbar, ${n}! Ich bin so stolz! 🌟`,
  (n: string) => `Fantastisch, ${n}! Weiter so! 🚀`,
  (n: string) => `Super gemacht, ${n}! Top-Leistung! 🏆`,
  (n: string) => `Klasse, ${n}! Du hast alles drauf! 💫`,
  (n: string) => `Sehr gut, ${n}! Eine echte Spitzenleistung! ⭐`,
];

const goodMessages = [
  (n: string) => `Gut gemacht, ${n}! Üb weiter! 📚`,
  (n: string) => `${n}, du bist auf dem richtigen Weg! 🌈`,
  (n: string) => `Nicht schlecht, ${n}! Du kannst noch mehr! 💪`,
  (n: string) => `Weiter so, ${n}! Du wirst immer besser! 📈`,
  (n: string) => `Prima, ${n}! Ich glaube an dich! 🌻`,
  (n: string) => `Ordentlich, ${n}! Ein bisschen mehr üben! 🎯`,
  (n: string) => `Brav gemacht, ${n}! Du schaffst es! 🌺`,
];

const improvementMessages = [
  (n: string) => `Üb weiter, ${n}! Du schaffst das! 💪`,
  (n: string) => `Nicht aufgeben, ${n}! Jeder lernt! 🌱`,
  (n: string) => `${n}, versuche es nochmal! Ich glaube an dich! 🌟`,
  (n: string) => `Kopf hoch, ${n}! Beim nächsten Mal klappt es! 🌈`,
  (n: string) => `${n}, üben macht den Meister! Weiter so! 📚`,
  (n: string) => `Kein Problem, ${n}! Wir üben zusammen! 🤝`,
  (n: string) => `${n}, du gibst nicht auf! Das ist toll! 🌻`,
];

const SmileGood = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="20" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
    <circle cx="17" cy="19" r="2.5" fill="#f59e0b" />
    <circle cx="31" cy="19" r="2.5" fill="#f59e0b" />
    <path d="M14 29 Q24 38 34 29" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M5 10 L6 7 L7 10 L10 11 L7 12 L6 15 L5 12 L2 11 Z" fill="#f59e0b" opacity="0.6" />
    <path d="M40 6 L41 4 L42 6 L44 7 L42 8 L41 10 L40 8 L38 7 Z" fill="#f59e0b" opacity="0.5" />
  </svg>
);

const SmileOk = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="20" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
    <circle cx="17" cy="19" r="2.5" fill="#3b82f6" />
    <circle cx="31" cy="19" r="2.5" fill="#3b82f6" />
    <line x1="14" y1="31" x2="34" y2="31" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const SmileSad = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="20" stroke="#94a3b8" strokeWidth="2.5" fill="none" />
    <circle cx="17" cy="18" r="2.5" fill="#94a3b8" />
    <circle cx="31" cy="18" r="2.5" fill="#94a3b8" />
    <path d="M14 33 Q24 26 34 33" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M23 40 C23 40 20 37.5 20 35.5 C20 33.8 21.5 33 23 34.5 C24.5 33 26 33.8 26 35.5 C26 37.5 23 40 23 40 Z" fill="#f87171" opacity="0.7" />
  </svg>
);

// Pencil SVG for writing animation
const PencilIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
      stroke="#92400e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#fef3c7"/>
    <path d="M15 5l4 4" stroke="#92400e" strokeWidth="1.5"/>
  </svg>
);

function getMessage(percentage: number, playerName: string): string {
  const seed = Math.floor(Date.now() / 10000) % 7;
  if (percentage >= 85) return excellentMessages[seed](playerName);
  if (percentage >= 55) return goodMessages[seed](playerName);
  return improvementMessages[seed](playerName);
}

function getNoteValue(percentage: number): number {
  if (percentage >= 90) return 1;
  if (percentage >= 80) return 2;
  if (percentage >= 65) return 3;
  if (percentage >= 50) return 4;
  if (percentage >= 30) return 5;
  return 6;
}

function getNoteLabel(note: number): string {
  const labels: Record<number, string> = { 1: 'Sehr gut', 2: 'Gut', 3: 'Befriedigend', 4: 'Ausreichend', 5: 'Mangelhaft', 6: 'Ungenügend' };
  return labels[note] || '';
}

function getNoteColor(note: number): string {
  const colors: Record<number, string> = { 1: '#16a34a', 2: '#2563eb', 3: '#d97706', 4: '#ea580c', 5: '#dc2626', 6: '#7c3aed' };
  return colors[note] || '#374151';
}

function RuledLines() {
  return (
    <svg className="absolute inset-0 w-full h-full" style={{ borderRadius: 12 }} preserveAspectRatio="none">
      {[0.28, 0.42, 0.56, 0.70, 0.84].map((y, i) => (
        <line
          key={i}
          x1="0" y1={`${y * 100}%`}
          x2="100%" y2={`${y * 100}%`}
          stroke="#93c5fd"
          strokeWidth="0.8"
          opacity="0.4"
        />
      ))}
    </svg>
  );
}

// ─── INLINE VERSION (renders on the test paper) ───────────────────────────────

export function InlineTeacherNote({ playerName, percentage }: { playerName: string; percentage: number }) {
  const message = getMessage(percentage, playerName || 'Schüler');
  const isExcellent = percentage >= 85;
  const isGood = percentage >= 55;
  const Smiley = isExcellent ? SmileGood : isGood ? SmileOk : SmileSad;
  const noteValue = getNoteValue(percentage);
  const noteLabel = getNoteLabel(noteValue);
  const noteColor = getNoteColor(noteValue);

  // Phase sequence: pencil (2s) → note appears with slow handwriting
  const [phase, setPhase] = useState<'writing' | 'done'>('writing');
  useEffect(() => {
    const t = setTimeout(() => setPhase('done'), 2200);
    return () => clearTimeout(t);
  }, []);

  const [firstPart, ...rest] = message.split('!');
  const secondPart = rest.join('!').trim();

  // Estimate writing duration: ~60 chars/s feels natural for handwriting
  const firstDuration = Math.max(1.2, (firstPart.length + 1) / 18);
  const secondDuration = secondPart ? Math.max(0.8, secondPart.length / 18) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 140, damping: 22 }}
      className="mt-8 mb-4"
    >
      {/* Pencil writing indicator */}
      <AnimatePresence>
        {phase === 'writing' && (
          <motion.div
            className="flex items-center gap-2 mb-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              animate={{ rotate: [-8, -14, -6, -16, -9, -13, -8], x: [0, 5, -3, 7, 1, -2, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-flex' }}
            >
              <PencilIcon />
            </motion.div>
            <motion.span
              className="text-xs font-bold text-amber-700"
              style={{ fontFamily: "'Caveat', cursive" }}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              Lehrerin schreibt...
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The note card */}
      <AnimatePresence>
        {phase === 'done' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 160, damping: 22 }}
            style={{
              position: 'relative',
              background: '#fffde7',
              borderRadius: 12,
              boxShadow: '2px 4px 18px rgba(0,0,0,0.13), 0 1px 4px rgba(0,0,0,0.06)',
              padding: '16px 20px 16px 28px',
              border: '1px solid #fde68a',
              overflow: 'hidden',
              transform: 'rotate(-0.5deg)',
            }}
          >
            <RuledLines />
            <div style={{ position: 'absolute', left: 18, top: 0, bottom: 0, width: 1.5, background: '#fca5a5', opacity: 0.6 }} />

            <div style={{ position: 'relative', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              {/* Smiley + Note badge */}
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 280 }}
                >
                  <Smiley />
                </motion.div>
                {/* Grade circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 300 }}
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: noteColor, color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Caveat', cursive", fontSize: 20, fontWeight: 800,
                    boxShadow: `0 0 12px ${noteColor}60`,
                  }}
                >
                  {noteValue}
                </motion.div>
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  style={{ fontFamily: "'Caveat', cursive", fontSize: 12, color: '#9ca3af', marginBottom: 3, letterSpacing: 1 }}
                >
                  Lehrerin:
                </motion.p>

                {/* Note label */}
                <motion.p
                  initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                  animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
                  style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: noteColor, fontWeight: 700, marginBottom: 2 }}
                >
                  Note: {noteValue} – {noteLabel}
                </motion.p>

                {/* Main message line 1 - slow handwriting */}
                <motion.p
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ delay: 0.7, duration: firstDuration, ease: 'linear' }}
                  style={{
                    fontFamily: "'Caveat', cursive", fontSize: 20, fontWeight: 700,
                    color: isExcellent ? '#92400e' : isGood ? '#1e40af' : '#374151',
                    lineHeight: 1.3,
                  }}
                >
                  {firstPart}!
                </motion.p>

                {secondPart && (
                  <motion.p
                    initial={{ clipPath: 'inset(0 100% 0 0)' }}
                    animate={{ clipPath: 'inset(0 0% 0 0)' }}
                    transition={{ delay: 0.7 + firstDuration + 0.3, duration: secondDuration, ease: 'linear' }}
                    style={{
                      fontFamily: "'Caveat', cursive", fontSize: 17,
                      color: isExcellent ? '#b45309' : isGood ? '#1d4ed8' : '#4b5563',
                      lineHeight: 1.3,
                    }}
                  >
                    {secondPart}
                  </motion.p>
                )}

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + firstDuration + secondDuration + 0.6 }}
                  style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: '#6b7280', marginTop: 5 }}
                >
                  {percentage}% — {new Date().toLocaleDateString('de-DE')}
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── POPUP VERSION (legacy, kept for compatibility) ───────────────────────────

export default function TeacherNote({ visible, playerName, percentage }: TeacherNoteProps) {
  const message = getMessage(percentage, playerName || 'Schüler');
  const isExcellent = percentage >= 85;
  const isGood = percentage >= 55;
  const Smiley = isExcellent ? SmileGood : isGood ? SmileOk : SmileSad;
  const [firstPart, ...rest] = message.split('!');
  const secondPart = rest.join('!').trim();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 26 }}
          style={{
            position: 'fixed',
            bottom: 0, left: 0, right: 0,
            zIndex: 300,
            display: 'flex',
            justifyContent: 'center',
            padding: '0 16px 24px',
            pointerEvents: 'none',
          }}
        >
          <div style={{
            position: 'relative',
            background: '#fffde7',
            borderRadius: 12,
            boxShadow: '0 -4px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)',
            padding: '18px 24px 18px 28px',
            maxWidth: 420, width: '100%',
            border: '1px solid #fde68a',
            overflow: 'hidden',
          }}>
            <RuledLines />
            <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 1.5, background: '#fca5a5', opacity: 0.6 }} />
            <div style={{ position: 'relative', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <motion.div initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.6, type: 'spring', stiffness: 300 }} style={{ flexShrink: 0, marginTop: 2 }}>
                <Smiley />
              </motion.div>
              <div style={{ flex: 1 }}>
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                  style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: '#9ca3af', marginBottom: 4, letterSpacing: 1 }}>
                  Lehrerin:
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
                  style={{ fontFamily: "'Caveat', cursive", fontSize: 22, fontWeight: 700, color: isExcellent ? '#92400e' : isGood ? '#1e40af' : '#374151', lineHeight: 1.3, whiteSpace: 'nowrap' }}>
                  {firstPart}!
                </motion.p>
                {secondPart && (
                  <motion.p
                    initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                    animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                    transition={{ delay: 1.1, duration: 0.7, ease: 'easeOut' }}
                    style={{ fontFamily: "'Caveat', cursive", fontSize: 19, color: isExcellent ? '#b45309' : isGood ? '#1d4ed8' : '#4b5563', lineHeight: 1.3 }}>
                    {secondPart}
                  </motion.p>
                )}
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}
                  style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#6b7280', marginTop: 6 }}>
                  {percentage}% — {new Date().toLocaleDateString('hu-HU')}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
