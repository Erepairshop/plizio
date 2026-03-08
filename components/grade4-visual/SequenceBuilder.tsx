'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Link } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface SequenceBuilderProps {
  sequence?: number[];
  blanks?: number;
  rule?: string;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answers: number[]) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Folytasd a számsort!',
    hint: 'Találd ki a szabályt és töltsd ki a hiányzó számokat.',
    submit: 'Ellenőrzés',
    correct: 'Helyes! Szuper!',
    incorrect: 'Nem stimmel. Próbáld újra!',
    tryAgain: 'Újra',
    rule: 'Szabály:',
  },
  de: {
    title: 'Setze die Zahlenreihe fort!',
    hint: 'Finde die Regel und fülle die fehlenden Zahlen aus.',
    submit: 'Prüfen',
    correct: 'Richtig! Super!',
    incorrect: 'Stimmt nicht. Versuche nochmal!',
    tryAgain: 'Nochmal',
    rule: 'Regel:',
  },
  en: {
    title: 'Continue the sequence!',
    hint: 'Find the rule and fill in the missing numbers.',
    submit: 'Check',
    correct: 'Correct! Great!',
    incorrect: 'Not right. Try again!',
    tryAgain: 'Retry',
    rule: 'Rule:',
  },
  ro: {
    title: 'Continuă șirul!',
    hint: 'Găsește regula și completează numerele lipsă.',
    submit: 'Verificare',
    correct: 'Corect! Super!',
    incorrect: 'Nu e corect. Încearcă din nou!',
    tryAgain: 'Din nou',
    rule: 'Regulă:',
  },
};

const SequenceBuilder: React.FC<SequenceBuilderProps> = ({
  sequence: propSeq,
  blanks: propBlanks = 3,
  rule: propRule,
  language = 'de',
  onAnswer,
}) => {
  const t = LABELS[language] || LABELS.en;

  const { sequence, rule, blanks } = useMemo(() => {
    if (propSeq) return { sequence: propSeq, rule: propRule || '?', blanks: propBlanks };
    // Generate random arithmetic sequence
    const start = Math.floor(Math.random() * 20) + 2;
    const step = Math.floor(Math.random() * 8) + 2;
    const isMultiply = Math.random() > 0.7;
    const len = 8;
    const seq: number[] = [];

    if (isMultiply) {
      const base = Math.floor(Math.random() * 5) + 2;
      const mult = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < len; i++) seq.push(base * Math.pow(mult, i));
      return { sequence: seq.length > 6 ? seq.slice(0, 6) : seq, rule: `×${mult}`, blanks: propBlanks };
    }

    for (let i = 0; i < len; i++) seq.push(start + i * step);
    return { sequence: seq, rule: `+${step}`, blanks: propBlanks };
  }, [propSeq, propRule, propBlanks]);

  const visibleCount = sequence.length - blanks;
  const blankIndices = Array.from({ length: blanks }, (_, i) => visibleCount + i);

  const [inputs, setInputs] = useState<Record<number, string>>({});
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    playClick();
    const answers = blankIndices.map(i => parseInt(inputs[i] || '0'));
    const isCorrect = blankIndices.every((idx, i) => answers[i] === sequence[idx]);
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, answers), 1800);
  };

  const handleReset = () => {
    playClick();
    setInputs({});
    setFeedback(null);
    setSubmitted(false);
  };

  const canSubmit = blankIndices.some(i => inputs[i] !== undefined && inputs[i] !== '');

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 50%, #c7d2fe 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center">
            <Link size={18} className="text-white" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
        </div>
        <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
      </div>

      {/* Sequence display */}
      <div className="px-4 pb-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {sequence.map((num, i) => {
            const isBlank = blankIndices.includes(i);
            const showArrow = i > 0;

            return (
              <React.Fragment key={i}>
                {showArrow && (
                  <span className="text-indigo-400 font-bold text-lg">→</span>
                )}
                {isBlank ? (
                  <div className="relative">
                    <input
                      type="number"
                      value={inputs[i] ?? ''}
                      onChange={e => setInputs(prev => ({ ...prev, [i]: e.target.value }))}
                      disabled={submitted}
                      placeholder="?"
                      className={`w-16 h-14 text-center text-xl font-black border-2 rounded-xl focus:outline-none disabled:opacity-60 ${
                        submitted
                          ? (parseInt(inputs[i] || '0') === num
                            ? 'border-green-400 bg-green-50 text-green-700'
                            : 'border-red-400 bg-red-50 text-red-600')
                          : 'border-indigo-300 bg-white text-indigo-700 focus:border-indigo-500'
                      }`}
                    />
                    {submitted && parseInt(inputs[i] || '0') !== num && (
                      <div className="absolute -bottom-5 left-0 right-0 text-center text-xs font-bold text-green-600">
                        {num}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-16 h-14 flex items-center justify-center bg-indigo-100 border-2 border-indigo-200 rounded-xl">
                    <span className="text-xl font-black text-indigo-700">{num}</span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Rule hint */}
      {submitted && (
        <div className="flex justify-center pb-3">
          <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold">
            {t.rule} {rule}
          </span>
        </div>
      )}

      {/* Feedback + Buttons */}
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
            disabled={!canSubmit}
            className="w-full py-3 rounded-xl bg-indigo-500 text-white font-bold text-sm hover:bg-indigo-600 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            {t.submit}
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-500 text-white font-bold text-sm hover:bg-indigo-600 active:scale-[0.98] transition-all"
          >
            <RotateCcw size={16} />
            {t.tryAgain}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default SequenceBuilder;
