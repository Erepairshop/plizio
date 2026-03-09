'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface ShapeRecognitionProps {
  lang?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS = {
  hu: {
    title: 'Mely forma ez?',
    hint: 'Kattints a helyes formára!',
    correct: 'Helyes! ✓',
    incorrect: 'Nem jó. Próbáld újra!',
  },
  de: {
    title: 'Welche Form ist das?',
    hint: 'Klick auf die richtige Form!',
    correct: 'Richtig! ✓',
    incorrect: 'Falsch. Versuche nochmal!',
  },
  en: {
    title: 'What shape is this?',
    hint: 'Click the correct shape!',
    correct: 'Correct! ✓',
    incorrect: 'Wrong. Try again!',
  },
  ro: {
    title: 'Ce formă este aceasta?',
    hint: 'Dă clic pe forma corectă!',
    correct: 'Corect! ✓',
    incorrect: 'Greșit. Încearcă din nou!',
  },
};

type ShapeType = 'circle' | 'square' | 'triangle' | 'rectangle';

interface Shape {
  type: ShapeType;
  label: Record<string, string>;
}

const SHAPES: Shape[] = [
  {
    type: 'circle',
    label: { hu: 'Kör', de: 'Kreis', en: 'Circle', ro: 'Cerc' },
  },
  {
    type: 'square',
    label: { hu: 'Négyzet', de: 'Quadrat', en: 'Square', ro: 'Pătrat' },
  },
  {
    type: 'triangle',
    label: { hu: 'Háromszög', de: 'Dreieck', en: 'Triangle', ro: 'Triunghi' },
  },
  {
    type: 'rectangle',
    label: { hu: 'Téglalap', de: 'Rechteck', en: 'Rectangle', ro: 'Dreptunghi' },
  },
];

const ShapeRecognition: React.FC<ShapeRecognitionProps> = ({
  lang = 'en',
  embedded = false,
  onValueChange,
  onAnswer,
}) => {
  const t = LABELS[lang];

  const { correctShape, shuffledShapes } = useMemo(() => {
    const correct = SHAPES[Math.floor(Math.random() * SHAPES.length)];
    const shuffled = [...SHAPES].sort(() => Math.random() - 0.5);
    return { correctShape: correct, shuffledShapes: shuffled };
  }, []);

  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const handleAnswer = (shapeType: ShapeType) => {
    setUserAnswer(shapeType);
    onValueChange?.(shapeType);

    const isCorrect = shapeType === correctShape.type;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onAnswer?.(isCorrect);
  };

  const renderShape = (shapeType: ShapeType, size: number = 120) => {
    const containerSize = size;
    const radius = size / 2;
    const halfSize = size / 2;

    switch (shapeType) {
      case 'circle':
        return (
          <div className={`flex items-center justify-center`}>
            <div
              className="bg-emerald-500 rounded-full shadow-lg"
              style={{ width: containerSize, height: containerSize }}
            />
          </div>
        );
      case 'square':
        return (
          <div className={`flex items-center justify-center`}>
            <div
              className="bg-blue-500 shadow-lg"
              style={{ width: containerSize, height: containerSize }}
            />
          </div>
        );
      case 'triangle':
        return (
          <div className={`flex items-center justify-center`}>
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: `${halfSize}px solid transparent`,
                borderRight: `${halfSize}px solid transparent`,
                borderBottom: `${size}px solid rgb(239, 68, 68)`,
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))',
              }}
            />
          </div>
        );
      case 'rectangle':
        return (
          <div className={`flex items-center justify-center`}>
            <div
              className="bg-amber-500 shadow-lg"
              style={{ width: size * 1.5, height: size }}
            />
          </div>
        );
    }
  };

  return (
    <motion.div
      className={`w-full flex flex-col items-center gap-6 ${embedded ? 'p-3' : 'p-8 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl shadow-lg'}`}
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

      {/* Large target shape */}
      <motion.div
        className={`flex items-center justify-center ${embedded ? '' : 'p-8 bg-white rounded-2xl shadow-inner'}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        {renderShape(correctShape.type, embedded ? 80 : 120)}
      </motion.div>

      {/* Shape choice buttons */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
        {shuffledShapes.map((shape, idx) => (
          <motion.button
            key={shape.type}
            onClick={() => handleAnswer(shape.type)}
            disabled={!!feedback}
            className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border-2 transition ${
              userAnswer === shape.type
                ? 'bg-emerald-500 text-white border-emerald-600 shadow-lg'
                : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50'
            } ${feedback ? 'opacity-60' : ''}`}
            whileTap={!feedback ? { scale: 0.95 } : {}}
            initial={{ scale: 0, rotateZ: -90 }}
            animate={{ scale: 1, rotateZ: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="h-12 flex items-center justify-center">
              {renderShape(shape.type, 40)}
            </div>
            <span className={`text-xs font-bold ${userAnswer === shape.type ? 'text-white' : 'text-slate-700'}`}>
              {shape.label[lang as keyof typeof shape.label]}
            </span>
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

export default ShapeRecognition;
