'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';

interface AnalogClockProps {
  targetHour?: number; // 1-12
  targetMinute?: number; // 0, 15, 30, 45
  onAnswer: (isCorrect: boolean, hour: number, minute: number) => void;
  language?: 'hu' | 'de' | 'en' | 'ro';
}

const AnalogClock: React.FC<AnalogClockProps> = ({
  targetHour = undefined,
  targetMinute = undefined,
  onAnswer,
  language = 'en',
}) => {
  const [hour, setHour] = useState(() => targetHour || Math.floor(Math.random() * 12) + 1);
  const [minute, setMinute] = useState(() => targetMinute || [0, 15, 30, 45][Math.floor(Math.random() * 4)]);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [selectedMinute, setSelectedMinute] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const labels = {
    hu: {
      instruction: 'Hány óra van az órán?',
      selectHour: 'Óra:',
      selectMinute: 'Perc:',
      submit: 'Elküldés',
      tryAgain: 'Próbálj újra',
      correct: 'Helyes!',
      incorrect: 'Nem pontos. Próbálj újra!',
    },
    de: {
      instruction: 'Wie viel Uhr ist es?',
      selectHour: 'Stunde:',
      selectMinute: 'Minute:',
      submit: 'Absenden',
      tryAgain: 'Erneut versuchen',
      correct: 'Richtig!',
      incorrect: 'Nicht genau. Versuche nochmal!',
    },
    en: {
      instruction: 'What time is it?',
      selectHour: 'Hour:',
      selectMinute: 'Minute:',
      submit: 'Submit',
      tryAgain: 'Try again',
      correct: 'Correct!',
      incorrect: 'Not precise. Try again!',
    },
    ro: {
      instruction: 'Ce oră este?',
      selectHour: 'Ora:',
      selectMinute: 'Minut:',
      submit: 'Trimite',
      tryAgain: 'Încearcă din nou',
      correct: 'Corect!',
      incorrect: 'Nu e precis. Încearcă din nou!',
    },
  };

  const t = labels[language];

  const handleSubmit = () => {
    if (selectedHour === null || selectedMinute === null) return;

    const isCorrect = selectedHour === hour && selectedMinute === minute;
    setFeedback(isCorrect ? 'correct' : 'incorrect');

    setTimeout(() => {
      onAnswer(isCorrect, selectedHour, selectedMinute);
    }, 1500);
  };

  const handleReset = () => {
    setSelectedHour(null);
    setSelectedMinute(null);
    setFeedback(null);
  };

  return (
    <motion.div
      className="w-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cím */}
      <h3 className="text-lg font-bold text-purple-900 mb-6 text-center">{t.instruction}</h3>

      {/* Analóg óra SVG */}
      <div className="flex justify-center mb-8">
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          className="drop-shadow-lg"
        >
          {/* Óra körül */}
          <circle cx="110" cy="110" r="100" fill="#fef5e7" stroke="#34495e" strokeWidth="3" />

          {/* Óra számok */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
            const angle = (num - 3) * 30 * (Math.PI / 180);
            const x = 110 + 80 * Math.cos(angle);
            const y = 110 + 80 * Math.sin(angle);
            return (
              <text
                key={num}
                x={x}
                y={y}
                textAnchor="middle"
                dy="0.3em"
                fontSize="18"
                fontWeight="bold"
                fill="#2c3e50"
              >
                {num}
              </text>
            );
          })}

          {/* Óramutató */}
          {(() => {
            const hourAngle = ((hour % 12) + minute / 60) * 30 * (Math.PI / 180) - Math.PI / 2;
            const hourX = 110 + 45 * Math.cos(hourAngle);
            const hourY = 110 + 45 * Math.sin(hourAngle);
            return (
              <line
                x1="110"
                y1="110"
                x2={hourX}
                y2={hourY}
                stroke="#e74c3c"
                strokeWidth="6"
                strokeLinecap="round"
              />
            );
          })()}

          {/* Percmutató */}
          {(() => {
            const minuteAngle = (minute / 60) * 360 * (Math.PI / 180) - Math.PI / 2;
            const minuteX = 110 + 65 * Math.cos(minuteAngle);
            const minuteY = 110 + 65 * Math.sin(minuteAngle);
            return (
              <line
                x1="110"
                y1="110"
                x2={minuteX}
                y2={minuteY}
                stroke="#3498db"
                strokeWidth="4"
                strokeLinecap="round"
              />
            );
          })()}

          {/* Közép pont */}
          <circle cx="110" cy="110" r="8" fill="#2c3e50" />
        </svg>
      </div>

      {/* Választó UI */}
      <div className="space-y-4 mb-6">
        {/* Óra választó */}
        <div>
          <label className="block text-sm font-semibold text-purple-900 mb-2">{t.selectHour}</label>
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
              <button
                key={h}
                onClick={() => setSelectedHour(h)}
                className={`py-2 rounded-lg font-bold transition-all ${
                  selectedHour === h
                    ? 'bg-purple-600 text-white scale-110'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </div>

        {/* Perc választó */}
        <div>
          <label className="block text-sm font-semibold text-purple-900 mb-2">{t.selectMinute}</label>
          <div className="grid grid-cols-4 gap-2">
            {[0, 15, 30, 45].map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMinute(m)}
                className={`py-3 rounded-lg font-bold transition-all ${
                  selectedMinute === m
                    ? 'bg-pink-600 text-white scale-110'
                    : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                }`}
              >
                {m.toString().padStart(2, '0')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback */}
      {feedback && (
        <motion.div
          className={`p-4 rounded-lg text-center font-bold mb-4 ${
            feedback === 'correct'
              ? 'bg-green-100 text-green-700 border-2 border-green-400'
              : 'bg-red-100 text-red-700 border-2 border-red-400'
          }`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="flex items-center justify-center gap-2">
            {feedback === 'correct' ? (
              <>
                <Check size={20} />
                {t.correct}
              </>
            ) : (
              <>
                <X size={20} />
                {t.incorrect}
              </>
            )}
          </div>
        </motion.div>
      )}

      {/* Gombok */}
      <div className="flex gap-3 justify-center">
        <button
          onClick={handleSubmit}
          disabled={selectedHour === null || selectedMinute === null}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {t.submit}
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition-colors flex items-center gap-2"
        >
          <RotateCcw size={18} />
          {t.tryAgain}
        </button>
      </div>
    </motion.div>
  );
};

export default AnalogClock;
