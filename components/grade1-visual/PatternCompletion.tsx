'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface PatternCompletionProps {
  lang?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS = {
  hu: {
    title: 'Mely elem jön következő?',
    hint: 'Nézd meg a mintát és válaszolj!',
    correct: 'Helyes! ✓',
    incorrect: 'Nem jó. Próbáld újra!',
  },
  de: {
    title: 'Welcher ist das nächste Element?',
    hint: 'Schau auf das Muster und antworte!',
    correct: 'Richtig! ✓',
    incorrect: 'Falsch. Versuche nochmal!',
  },
  en: {
    title: 'What comes next?',
    hint: 'Look at the pattern and answer!',
    correct: 'Correct! ✓',
    incorrect: 'Wrong. Try again!',
  },
  ro: {
    title: 'Ce vine în continuare?',
    hint: 'Uită-te la model și răspunde!',
    correct: 'Corect! ✓',
    incorrect: 'Greșit. Încearcă din nou!',
  },
};

type PatternType = 'color-repeat' | 'color-alternate' | 'shape-repeat' | 'shape-alternate';
type Element = { color: string; shape: 'circle' | 'square'; emoji: string };

const COLORS = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣'];
const SHAPES = ['●', '■', '▲', '♦'];

const generatePattern = (): { type: PatternType; pattern: string[]; answer: string; choices: string[] } => {
  const types: PatternType[] = ['color-repeat', 'color-alternate', 'shape-repeat', 'shape-alternate'];
  const type = types[Math.floor(Math.random() * types.length)];

  let pattern: string[] = [];
  let answer: string;
  let choices: string[];

  switch (type) {
    case 'color-repeat': {
      const col1 = COLORS[Math.floor(Math.random() * COLORS.length)];
      const col2 = COLORS.filter(c => c !== col1)[Math.floor(Math.random() * (COLORS.length - 1))];
      pattern = [col1, col1, col2, col2];
      answer = col1;
      choices = [col1, col2, COLORS.filter(c => c !== col1 && c !== col2)[0]];
      break;
    }
    case 'color-alternate': {
      const colors = COLORS.slice(0, 3);
      pattern = [colors[0], colors[1], colors[0], colors[1]];
      answer = colors[0];
      choices = [colors[0], colors[1], colors[2]];
      break;
    }
    case 'shape-repeat': {
      const sh1 = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const sh2 = SHAPES.filter(s => s !== sh1)[Math.floor(Math.random() * (SHAPES.length - 1))];
      pattern = [sh1, sh1, sh2, sh2];
      answer = sh1;
      choices = [sh1, sh2, SHAPES.filter(s => s !== sh1 && s !== sh2)[0]];
      break;
    }
    case 'shape-alternate': {
      const shapes = SHAPES.slice(0, 3);
      pattern = [shapes[0], shapes[1], shapes[0], shapes[1]];
      answer = shapes[0];
      choices = [shapes[0], shapes[1], shapes[2]];
      break;
    }
  }

  return { type, pattern, answer, choices: choices.sort(() => Math.random() - 0.5) };
};

const PatternCompletion: React.FC<PatternCompletionProps> = ({
  lang = 'en',
  embedded = false,
  onValueChange,
  onAnswer,
}) => {
  const t = LABELS[lang];

  const { pattern, answer, choices } = useMemo(() => generatePattern(), []);

  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const handleAnswer = (choice: string) => {
    setUserAnswer(choice);
    onValueChange?.(choice);

    const isCorrect = choice === answer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onAnswer?.(isCorrect);
  };

  return (
    <motion.div
      className={`w-full flex flex-col items-center gap-6 ${embedded ? 'p-3' : 'p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-lg'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      {!embedded && (
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-1">{t.title}</h3>
          <p className="text-sm text-slate-500">{t.hint}</p>
        </div>
      )}

      {/* Pattern display */}
      <motion.div
        className={`flex items-center justify-center gap-2 p-4 bg-white rounded-xl shadow-lg ${embedded ? 'w-full' : ''}`}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        {/* Pattern elements */}
        {pattern.map((elem, idx) => (
          <motion.div
            key={idx}
            className={`flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-200 to-rose-200 border-2 border-rose-300 ${
              embedded ? 'w-12 h-12 text-lg' : 'w-16 h-16 text-3xl'
            }`}
            initial={{ scale: 0, rotateZ: -90 }}
            animate={{ scale: 1, rotateZ: 0 }}
            transition={{ delay: idx * 0.15 }}
          >
            {elem}
          </motion.div>
        ))}

        {/* Question mark */}
        <motion.div
          className={`flex items-center justify-center rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 border-3 border-dashed border-slate-400 ${
            embedded ? 'w-12 h-12 text-lg' : 'w-16 h-16 text-3xl'
          } font-bold text-slate-700`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: pattern.length * 0.15 + 0.2 }}
        >
          ?
        </motion.div>
      </motion.div>

      {/* Choice buttons */}
      <div className={`grid ${embedded ? 'grid-cols-3 gap-2 w-full' : 'grid-cols-3 gap-3 max-w-xs'}`}>
        {choices.map((choice, idx) => (
          <motion.button
            key={idx}
            onClick={() => handleAnswer(choice)}
            disabled={!!feedback}
            className={`flex items-center justify-center rounded-lg border-2 transition ${
              userAnswer === choice
                ? 'bg-rose-500 text-white border-rose-600 shadow-lg'
                : 'bg-white text-slate-700 border-slate-200 hover:border-rose-400 hover:bg-rose-50'
            } ${feedback ? 'opacity-60' : ''} ${embedded ? 'h-14' : 'h-20'}`}
            whileTap={!feedback ? { scale: 0.9 } : {}}
            initial={{ scale: 0, rotateZ: 45 }}
            animate={{ scale: 1, rotateZ: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <span className={embedded ? 'text-lg' : 'text-2xl'}>{choice}</span>
          </motion.button>
        ))}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm ${
              feedback === 'correct'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            {feedback === 'correct' ? <Check size={18} /> : <X size={18} />}
            {feedback === 'correct' ? t.correct : t.incorrect}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PatternCompletion;
