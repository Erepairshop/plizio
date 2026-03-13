'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface AngleClassifyProps {
  degrees?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: string) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const ANGLE_TYPES = {
  hu: { acute: 'Hegyesszög', right: 'Derékszög', obtuse: 'Tompaszög', straight: 'Egyenesszög', reflex: 'Visszatérő szög' },
  de: { acute: 'Spitzer Winkel', right: 'Rechter Winkel', obtuse: 'Stumpfer Winkel', straight: 'Gestreckter Winkel', reflex: 'Überstumpfer Winkel' },
  en: { acute: 'Acute angle', right: 'Right angle', obtuse: 'Obtuse angle', straight: 'Straight angle', reflex: 'Reflex angle' },
  ro: { acute: 'Unghi ascuțit', right: 'Unghi drept', obtuse: 'Unghi obtuz', straight: 'Unghi drept întins', reflex: 'Unghi reflex' },
};

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Szögek felismerése', hint: 'Melyik szögtípus látható az ábrán?', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra', degreeHint: 'fok' },
  de: { title: 'Winkeltypen erkennen', hint: 'Um welchen Winkeltyp handelt es sich?', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal', degreeHint: '°' },
  en: { title: 'Classifying angles', hint: 'What type of angle is shown?', submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry', degreeHint: '°' },
  ro: { title: 'Clasificarea unghiurilor', hint: 'Ce tip de unghi este arătat?', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou', degreeHint: '°' },
};

function getAngleType(deg: number): 'acute' | 'right' | 'obtuse' | 'straight' | 'reflex' {
  if (deg === 90) return 'right';
  if (deg === 180) return 'straight';
  if (deg < 90) return 'acute';
  if (deg < 180) return 'obtuse';
  return 'reflex';
}

function angleSVG(deg: number): { x2: number; y2: number } {
  const rad = ((180 - deg) * Math.PI) / 180;
  const len = 90;
  return { x2: Math.round(Math.cos(rad) * len), y2: Math.round(-Math.sin(rad) * len) };
}

const AngleClassify: React.FC<AngleClassifyProps> = ({
  degrees: propDeg,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;
  const types = ANGLE_TYPES[language] ?? ANGLE_TYPES.en;

  const { degrees, angleType, correctAnswer, choices, labelToKey } = useMemo(() => {
    // Candidate angles by type
    const pools = {
      acute:    [20, 30, 45, 55, 65, 75],
      right:    [90],
      obtuse:   [100, 110, 120, 135, 145, 160],
      straight: [180],
      reflex:   [200, 220, 240, 270, 300, 330],
    };
    const typeKeys = ['acute', 'right', 'obtuse', 'straight'] as const; // no reflex for grade 5
    const deg = propDeg ?? (() => {
      const tk = typeKeys[Math.floor(Math.random() * typeKeys.length)];
      const pool = pools[tk];
      return pool[Math.floor(Math.random() * pool.length)];
    })();
    const at = getAngleType(deg);
    const correct = types[at];
    // Make 4 choices (the 4 basic types, shuffled)
    const ch = typeKeys.map(k => types[k]).sort(() => Math.random() - 0.5);
    // Reverse map: translated label → language-independent key (for embedded grading)
    const l2k = Object.fromEntries(typeKeys.map(k => [types[k], k]));
    return { degrees: deg, angleType: at, correctAnswer: correct, choices: ch, labelToKey: l2k };
  }, [propDeg, language]); // eslint-disable-line react-hooks/exhaustive-deps

  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onValueChangeRef = React.useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && selected !== null) {
      // Send language-independent key so embedded grading matches generator answer
      onValueChangeRef.current(labelToKey[selected] ?? selected);
    }
  }, [embedded, selected, labelToKey]);

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

  // SVG angle drawing
  const CX = 110, CY = 110, ARM = 90;
  const { x2, y2 } = angleSVG(degrees);
  const arcR = 30;
  const arcRad = ((180 - Math.min(degrees, 179)) * Math.PI) / 180;
  const arcX = Math.round(Math.cos(arcRad) * arcR) + CX;
  const arcY = Math.round(-Math.sin(arcRad) * arcR) + CY;

  const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fdf4ff 0%, #f3e8ff 50%, #ede9fe 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center">
              <span className="text-white font-black text-base">∠</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Angle SVG */}
      <div className="flex justify-center px-4 py-3">
        <div className="bg-white rounded-2xl shadow-sm border border-violet-100 p-3 inline-block">
          <svg viewBox="0 0 220 150" style={{ width: 200, height: 140 }}>
            {/* Horizontal arm */}
            <line x1={CX - ARM} y1={CY} x2={CX + ARM} y2={CY} stroke="#7c3aed" strokeWidth={3} strokeLinecap="round" />
            {/* Angle arm */}
            <line x1={CX} y1={CY} x2={CX + x2} y2={CY + y2} stroke="#7c3aed" strokeWidth={3} strokeLinecap="round" />
            {/* Arc */}
            {degrees !== 180 && degrees !== 360 && (
              <path
                d={`M ${CX + arcR} ${CY} A ${arcR} ${arcR} 0 0 1 ${arcX} ${arcY}`}
                fill="none" stroke="#7c3aed" strokeWidth={2} opacity={0.6}
              />
            )}
            {/* Right angle box */}
            {degrees === 90 && (
              <rect x={CX} y={CY - 18} width={18} height={18} fill="none" stroke="#7c3aed" strokeWidth={2} />
            )}
            {/* Degree label */}
            <text x={CX + 2} y={CY - 36} textAnchor="middle" fontSize={14} fontWeight={800} fill="#5b21b6">
              {degrees}°
            </text>
            {/* Vertex dot */}
            <circle cx={CX} cy={CY} r={5} fill="#7c3aed" />
          </svg>
        </div>
      </div>

      {/* Instruction */}
      <p className="text-xs font-semibold text-center text-slate-500 px-5 pb-2">{t.hint}</p>

      {/* Choices */}
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        {choices.map((val, i) => {
          const isSelected = selected === val;
          const isCorrectVal = val === correctAnswer;
          return (
            <motion.button
              key={val}
              disabled={submitted}
              onClick={() => handleSelect(val)}
              className={`py-3 px-2 rounded-xl font-bold text-sm transition-all border-2 ${
                submitted
                  ? isCorrectVal
                    ? 'bg-green-500 border-green-500 text-white'
                    : isSelected
                    ? 'bg-red-100 border-red-300 text-red-600 opacity-70'
                    : 'bg-white border-slate-200 text-slate-400 opacity-40'
                  : isSelected
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-violet-50'
              }`}
              style={isSelected && !submitted ? { backgroundColor: COLORS[i % COLORS.length], borderColor: COLORS[i % COLORS.length] } : {}}
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
              className="w-full py-3 rounded-xl bg-violet-600 text-white font-bold text-sm hover:bg-violet-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-600 text-white font-bold text-sm hover:bg-violet-700 active:scale-[0.98] transition-all"
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

export default AngleClassify;
