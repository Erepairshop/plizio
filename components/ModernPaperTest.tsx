/**
 * Modern paper-like test interface with ruled notebook background
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
  icon?: string;
  timeLeft?: number;
  solved?: number;
  total?: number;
  isGrading?: boolean;
  onExit: () => void;
  onPrint?: () => void;
  userName?: string;
  /** @deprecated pass pre-formatted date string, dateLocale is no longer used */
  dateLocale?: string;
  exitLabel?: string;
}

export default function ModernPaperTest({
  children,
  title,
  gradeLabel,
  date,
  icon = '📄',
  timeLeft,
  solved,
  total,
  isGrading,
  onExit,
  onPrint,
  userName,
  dateLocale,
  exitLabel = 'Kilépés',
}: ModernPaperTestProps) {
  // If dateLocale is provided, try to parse date as ISO and format it; otherwise show as-is
  let displayDate = date;
  if (dateLocale && date) {
    try {
      const d = new Date(date);
      if (!isNaN(d.getTime())) {
        displayDate = d.toLocaleDateString(dateLocale, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      }
    } catch (_) {
      // use date as-is
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 relative">
      {/* Paper sheet container */}
      <div className="relative z-10">
        {/* Header - Sticky & Modern */}
        <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/80 border-b border-slate-200/70 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Left: Title & Grade */}
              <div className="flex-1 min-w-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-baseline gap-2"
                >
                  <h1 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                    {icon} {title}
                  </h1>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {gradeLabel}
                  </span>
                </motion.div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  {userName && (
                    <span className="font-bold text-slate-600 mr-2">{userName}</span>
                  )}
                  {displayDate && <span>{displayDate}</span>}
                </div>
              </div>

              {/* Right: Timer & Progress */}
              <div className="flex items-center gap-3">
                {timeLeft !== undefined && (
                  <motion.div
                    className={`font-mono font-bold text-base ${
                      timeLeft <= 300
                        ? 'text-red-600 animate-pulse'
                        : 'text-slate-700'
                    }`}
                    initial={{ scale: 1 }}
                    animate={{ scale: timeLeft <= 300 ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 1, repeat: timeLeft <= 300 ? Infinity : 0 }}
                  >
                    ⏱ {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                  </motion.div>
                )}
                {solved !== undefined && total !== undefined && (
                  <div className="text-xs font-mono text-slate-500 bg-slate-100 rounded-full px-2.5 py-1">
                    <span className="font-bold text-slate-800">{solved}</span>
                    <span className="text-slate-400">/{total}</span>
                  </div>
                )}

                {/* Print button */}
                {onPrint && !isGrading && (
                  <motion.button
                    onClick={onPrint}
                    className="p-1.5 rounded-lg hover:bg-slate-200/70 transition-colors text-slate-400 hover:text-slate-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Drucken"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6v-8z" />
                    </svg>
                  </motion.button>
                )}

                {/* Close button */}
                {!isGrading && (
                  <motion.button
                    onClick={onExit}
                    className="p-1.5 rounded-lg hover:bg-slate-200/70 transition-colors text-slate-400 hover:text-slate-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title={exitLabel}
                  >
                    <svg
                      className="w-4 h-4"
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
        </div>

        {/* Main content area */}
        <main className="pt-20 pb-8">
          <div className="max-w-2xl mx-auto px-3 sm:px-6 py-6">
            {/* White ruled paper sheet */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl shadow-lg border border-slate-200 overflow-hidden"
              style={{
                background: '#fff',
                backgroundImage: `
                  linear-gradient(to right, transparent 44px, rgba(229, 115, 115, 0.35) 44px, rgba(229, 115, 115, 0.35) 45px, transparent 45px),
                  repeating-linear-gradient(
                    #fff,
                    #fff 27px,
                    rgba(147, 197, 232, 0.45) 27px,
                    rgba(147, 197, 232, 0.45) 28px
                  )
                `,
              }}
            >
              {/* Content with left margin offset */}
              <div className="relative pl-14 pr-5 pt-6 pb-8 sm:pr-8 sm:pt-8 min-h-screen">
                {children}
              </div>

              {/* Watermark */}
              <div className="absolute bottom-3 right-4 text-xs font-mono text-slate-200 pointer-events-none select-none">
                PLIZIO
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
