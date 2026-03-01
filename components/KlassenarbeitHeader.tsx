"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, AlertCircle } from "lucide-react";

interface KlassenarbeitHeaderProps {
  grade?: number;
  studentName?: string;
  subject?: string;
  startTime?: number; // Timestamp when test started
}

export default function KlassenarbeitHeader({
  grade = 3,
  studentName = "Student",
  subject = "Mathematik",
  startTime = Date.now(),
}: KlassenarbeitHeaderProps) {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const [isWarning, setIsWarning] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          setIsExpired(true);
          return 0;
        }
        setIsWarning(next <= 300); // Last 5 minutes
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = (timeLeft / 1800) * 100;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        {/* Main header */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h1 className="text-2xl font-black mb-1.5">Klassenarbeit</h1>
            <div className="space-y-0.5 text-xs text-gray-400">
              <p>
                <span className="font-bold text-gray-300">{studentName}</span>
              </p>
              <p>
                Klasse {grade} · {subject}
              </p>
              <p>{new Date().toLocaleDateString("de-DE", { weekday: "short", year: "numeric", month: "short", day: "numeric" })}</p>
            </div>
          </div>

          {/* Timer - Smaller */}
          <div className={`flex flex-col items-center ${isExpired ? "opacity-50" : ""}`}>
            <div
              className={`relative w-14 h-14 rounded-full flex items-center justify-center font-mono text-sm font-black transition-all ${
                isExpired
                  ? "bg-red-900/40 border-2 border-red-500 text-red-300"
                  : isWarning
                    ? "bg-orange-900/40 border-2 border-orange-500 text-orange-300"
                    : "bg-slate-700/40 border-2 border-blue-500 text-blue-300"
              }`}
            >
              <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.15"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray={`${(progress / 100) * 283} 283`}
                  animate={{
                    strokeDasharray: [`${(progress / 100) * 283} 283`],
                  }}
                  transition={{ duration: 0.5 }}
                />
              </svg>
              <span className="relative z-10">{formattedTime}</span>
            </div>

            {/* Warning message - Subtle */}
            {isWarning && !isExpired && (
              <motion.div
                className="mt-1.5 text-orange-400 text-xs font-bold"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚠ {Math.floor(timeLeft / 60)} perc
              </motion.div>
            )}

            {isExpired && (
              <div className="mt-1.5 text-red-400 text-xs font-bold">
                ✕ Vége
              </div>
            )}
          </div>
        </div>

        {/* Progress bar - Subtler */}
        <div className="w-full h-0.5 bg-slate-700/30 rounded-full overflow-hidden">
          <motion.div
            className={`h-full transition-all ${
              isExpired
                ? "bg-red-500/70"
                : isWarning
                  ? "bg-orange-500/70"
                  : "bg-blue-500/70"
            }`}
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
