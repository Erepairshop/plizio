/**
 * Modern paper-like test interface with grid background
 * Professional, mobile-friendly matektest UI
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface ModernPaperTestProps {
  children: React.ReactNode;
  title: string;
  gradeLabel: string;
  date: string;
  timeLeft?: number;
  solved?: number;
  total?: number;
  isGrading?: boolean;
  onExit: () => void;
  userName?: string;
}

export default function ModernPaperTest({
  children,
  title,
  gradeLabel,
  date,
  timeLeft,
  solved,
  total,
  isGrading,
  onExit,
  userName,
}: ModernPaperTestProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative">
      {/* Animated grid background */}
      <div className="fixed inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 bg-radial-gradient opacity-30 from-blue-100/20 via-transparent to-transparent" />
      </div>

      {/* Paper sheet container */}
      <div className="relative z-10">
        {/* Header - Sticky & Modern */}
        <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/70 border-b border-slate-200/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-start justify-between gap-4">
              {/* Left: Title & Grade */}
              <div className="flex-1 min-w-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-baseline gap-2"
                >
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    📐 {title}
                  </h1>
                  <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
                    {gradeLabel}
                  </span>
                </motion.div>
                <div className="text-xs sm:text-sm text-slate-600 font-mono mt-1">
                  {userName && (
                    <p className="font-bold text-slate-800 mb-1">
                      {userName}
                    </p>
                  )}
                  <p>
                    {new Date(date).toLocaleDateString('hu-HU', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>

              {/* Right: Timer & Progress */}
              <div className="flex flex-col items-end gap-2">
                {timeLeft !== undefined && (
                  <motion.div
                    className={`font-mono font-bold text-lg ${
                      timeLeft <= 300
                        ? 'text-red-600 animate-pulse'
                        : 'text-slate-700'
                    }`}
                    initial={{ scale: 1 }}
                    animate={{ scale: timeLeft <= 300 ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 1, repeat: timeLeft <= 300 ? Infinity : 0 }}
                  >
                    ⏱️ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                  </motion.div>
                )}
                {solved !== undefined && total !== undefined && (
                  <div className="text-xs sm:text-sm font-mono text-slate-600">
                    <span className="font-bold text-slate-900">{solved}</span>
                    <span className="text-slate-400">/{total}</span>
                  </div>
                )}
              </div>

              {/* Close button */}
              {!isGrading && (
                <motion.button
                  onClick={onExit}
                  className="p-2 rounded-lg hover:bg-slate-200/50 transition-colors text-slate-600 hover:text-slate-900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  title="Kilépés"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              )}
            </div>
          </div>
        </div>

        {/* Main content area - Paper sheet style */}
        <main className="pt-24 pb-4 sm:pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* White paper background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-slate-200 overflow-hidden"
            >
              {/* Paper inner padding with subtle grid */}
              <div
                className="relative p-6 sm:p-8 lg:p-10 min-h-screen"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                }}
              >
                {/* Content */}
                <div className="relative z-10 space-y-8">{children}</div>

                {/* Subtle watermark (optional) */}
                <div className="absolute bottom-4 right-4 text-xs font-mono text-slate-300 pointer-events-none">
                  PLIZIO
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
