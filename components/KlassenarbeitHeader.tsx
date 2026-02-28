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
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl">
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Main header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-black mb-2">Klassenarbeit</h1>
            <div className="space-y-1.5 text-sm text-gray-300">
              <p>
                <span className="font-bold text-gray-100">{studentName}</span>
              </p>
              <p>
                Klasse {grade} · {subject}
              </p>
              <p>{new Date().toLocaleDateString("de-DE", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
            </div>
          </div>

          {/* Timer */}
          <div className={`flex flex-col items-center ${isExpired ? "opacity-50" : ""}`}>
            <div
              className={`relative w-24 h-24 rounded-full flex items-center justify-center font-mono text-2xl font-black transition-all ${
                isExpired
                  ? "bg-red-900/50 border-4 border-red-500 text-red-300"
                  : isWarning
                    ? "bg-orange-900/50 border-4 border-orange-500 text-orange-300"
                    : "bg-slate-700/50 border-4 border-blue-500 text-blue-300"
              }`}
            >
              <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  opacity="0.2"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${(progress / 100) * 283} 283`}
                  animate={{
                    strokeDasharray: [`${(progress / 100) * 283} 283`],
                  }}
                  transition={{ duration: 0.5 }}
                />
              </svg>
              <span className="relative z-10">{formattedTime}</span>
            </div>

            {/* Warning message */}
            {isWarning && !isExpired && (
              <motion.div
                className="mt-3 text-orange-300 text-xs font-bold flex items-center gap-1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <AlertCircle size={12} />
                <span>5 perc van!</span>
              </motion.div>
            )}

            {isExpired && (
              <div className="mt-3 text-red-300 text-xs font-bold flex items-center gap-1">
                <AlertCircle size={12} />
                <span>Idő letelt!</span>
              </div>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Clock size={16} className="text-gray-400" />
            <span className="text-xs text-gray-400 font-semibold">
              Hátralévő idő
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className={`h-full transition-all ${
                isExpired
                  ? "bg-red-500"
                  : isWarning
                    ? "bg-orange-500"
                    : "bg-blue-500"
              }`}
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
