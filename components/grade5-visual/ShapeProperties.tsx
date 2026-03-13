'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface ShapePropertiesProps {
  shapeId?: string;
  askProperty?: 'sides' | 'angles' | 'name';
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: string) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Síkidomok tulajdonságai', hint: 'Válaszd ki a helyes választ!', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra', sides: 'Hány oldala van?', angles: 'Hány szöge van?', name: 'Mi a neve?' },
  de: { title: 'Eigenschaften von Figuren', hint: 'Wähle die richtige Antwort!', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal', sides: 'Wie viele Seiten hat die Figur?', angles: 'Wie viele Winkel hat die Figur?', name: 'Wie heißt die Figur?' },
  en: { title: 'Shape properties', hint: 'Choose the correct answer!', submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry', sides: 'How many sides does the shape have?', angles: 'How many angles does the shape have?', name: 'What is the name of the shape?' },
  ro: { title: 'Proprietăți ale figurilor', hint: 'Alege răspunsul corect!', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou', sides: 'Câte laturi are figura?', angles: 'Câte unghiuri are figura?', name: 'Cum se numește figura?' },
};

const SHAPE_NAMES: Record<string, Record<string, string>> = {
  triangle:   { hu: 'Háromszög',   de: 'Dreieck',    en: 'Triangle',   ro: 'Triunghi' },
  square:     { hu: 'Négyzet',      de: 'Quadrat',    en: 'Square',     ro: 'Pătrat' },
  rectangle:  { hu: 'Téglalap',     de: 'Rechteck',   en: 'Rectangle',  ro: 'Dreptunghi' },
  pentagon:   { hu: 'Ötszög',       de: 'Fünfeck',    en: 'Pentagon',   ro: 'Pentagon' },
  hexagon:    { hu: 'Hatszög',      de: 'Sechseck',   en: 'Hexagon',    ro: 'Hexagon' },
  rhombus:    { hu: 'Rombusz',      de: 'Raute',      en: 'Rhombus',    ro: 'Romb' },
};

const SHAPES: Record<string, { sides: number; svgPath: string; viewBox: string }> = {
  triangle:  { sides: 3, viewBox: '0 0 120 110', svgPath: 'M60,10 L110,100 L10,100 Z' },
  square:    { sides: 4, viewBox: '0 0 110 110', svgPath: 'M15,15 L95,15 L95,95 L15,95 Z' },
  rectangle: { sides: 4, viewBox: '0 0 150 100', svgPath: 'M10,20 L140,20 L140,80 L10,80 Z' },
  pentagon:  { sides: 5, viewBox: '0 0 120 115', svgPath: 'M60,8 L112,44 L92,104 L28,104 L8,44 Z' },
  hexagon:   { sides: 6, viewBox: '0 0 120 110', svgPath: 'M60,5 L107,30 L107,80 L60,105 L13,80 L13,30 Z' },
  rhombus:   { sides: 4, viewBox: '0 0 120 110', svgPath: 'M60,5 L115,55 L60,105 L5,55 Z' },
};

function makeNameChoices(correct: string, lang: string): string[] {
  const all = Object.keys(SHAPE_NAMES);
  const others = all.filter(k => k !== correct).sort(() => Math.random() - 0.5).slice(0, 3);
  return [...others, correct].sort(() => Math.random() - 0.5).map(k => SHAPE_NAMES[k][lang] ?? SHAPE_NAMES[k].en);
}

function makeNumberChoices(correct: number): number[] {
  const opts = new Set<number>([correct]);
  const candidates = [3, 4, 5, 6, 8].filter(n => n !== correct);
  for (const c of candidates.sort(() => Math.random() - 0.5)) {
    opts.add(c);
    if (opts.size >= 4) break;
  }
  return Array.from(opts).sort(() => Math.random() - 0.5);
}

const ShapeProperties: React.FC<ShapePropertiesProps> = ({
  shapeId: propShape,
  askProperty: propAsk,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { shapeId, askProperty, correctAnswer, choices, question } = useMemo(() => {
    const ids = Object.keys(SHAPES);
    const sid = propShape ?? ids[Math.floor(Math.random() * ids.length)];
    const props: Array<'sides' | 'angles' | 'name'> = ['sides', 'angles', 'name'];
    const ask = propAsk ?? props[Math.floor(Math.random() * props.length)];
    const shape = SHAPES[sid];

    let correct: string;
    let ch: string[];

    if (ask === 'name') {
      correct = SHAPE_NAMES[sid][language] ?? SHAPE_NAMES[sid].en;
      ch = makeNameChoices(sid, language);
    } else {
      // sides and angles are the same for polygons
      correct = String(shape.sides);
      ch = makeNumberChoices(shape.sides).map(String);
    }

    const q = ask === 'name' ? t.name : ask === 'sides' ? t.sides : t.angles;
    return { shapeId: sid, askProperty: ask, correctAnswer: correct, choices: ch, question: q };
  }, [propShape, propAsk, language]); // eslint-disable-line react-hooks/exhaustive-deps

  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onValueChangeRef = React.useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && selected !== null) {
      onValueChangeRef.current(String(selected));
    }
  }, [embedded, selected]);

  const handleSelect = (val: string) => {
    if (submitted) return;
    playClick();
    setSelected(val);
  };

  const handleSubmit = () => {
    if (selected === null || embedded) return;
    playClick();
    const isCorrect = selected === correctAnswer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, selected), 1800);
  };

  const handleReset = () => {
    playClick();
    setSelected(null);
    setFeedback(null);
    setSubmitted(false);
  };

  const shape = SHAPES[shapeId];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
              <span className="text-white font-black text-base">⬡</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Shape SVG */}
      <div className="flex justify-center px-4 py-4">
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-4 inline-block">
          <svg viewBox={shape.viewBox} style={{ width: 140, height: 120 }}>
            <path d={shape.svgPath} fill="#3b82f620" stroke="#2563eb" strokeWidth={3} strokeLinejoin="round" />
            {/* vertex dots */}
            {shape.svgPath.replace(/[MLZ]/g, ' ').trim().split(/\s+/).reduce<number[][]>((acc, _, i, arr) => {
              if (i % 2 === 0 && i + 1 < arr.length && arr[i] && arr[i + 1] && !isNaN(Number(arr[i]))) {
                acc.push([Number(arr[i]), Number(arr[i + 1])]);
              }
              return acc;
            }, []).map((pt, i) => (
              <circle key={i} cx={pt[0]} cy={pt[1]} r={5} fill="#2563eb" />
            ))}
          </svg>
        </div>
      </div>

      {/* Question */}
      <div className="px-5 pb-3 text-center">
        <p className="text-base font-bold text-slate-700">{question}</p>
      </div>

      {/* Choices */}
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        {choices.map((val, i) => {
          const isSelected = selected === val;
          const isCorrectVal = val === correctAnswer;
          const color = COLORS[i % COLORS.length];
          return (
            <motion.button
              key={val}
              disabled={submitted}
              onClick={() => handleSelect(val)}
              className={`py-3 rounded-xl font-extrabold text-base transition-all border-2 ${
                submitted
                  ? isCorrectVal
                    ? 'bg-green-500 border-green-500 text-white'
                    : isSelected
                    ? 'bg-red-100 border-red-300 text-red-600 opacity-70'
                    : 'bg-white border-slate-200 text-slate-400 opacity-40'
                  : isSelected
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-blue-50'
              }`}
              style={isSelected && !submitted ? { backgroundColor: color, borderColor: color } : {}}
              whileTap={submitted ? {} : { scale: 0.93 }}
            >
              {val}
            </motion.button>
          );
        })}
      </div>

      {!embedded && (
        <div className="px-5 pb-5">
          <AnimatePresence mode="wait">
            {feedback && (
              <motion.div
                key={feedback}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl font-bold text-base mb-3 ${
                  feedback === 'correct'
                    ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : 'bg-red-50 text-red-600 border-2 border-red-200'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {feedback === 'correct' ? <Check size={20} /> : <X size={20} />}
                {feedback === 'correct' ? t.correct : t.incorrect}
              </motion.div>
            )}
          </AnimatePresence>
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={selected === null}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 active:scale-[0.98] transition-all"
            >
              <RotateCcw size={16} />
              {t.tryAgain}
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ShapeProperties;
