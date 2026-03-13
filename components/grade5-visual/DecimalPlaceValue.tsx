'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick, playSelect } from '@/lib/soundEffects';

interface DecimalPlaceValueProps {
  number?: number;
  decimalPlaces?: 1 | 2;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Helyiértékek!', hint: 'Írd be minden helyiérték számjegyét.', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra', ones: 'Egyes', tenths: 'Tized', hundredths: 'Század', separator: ',' },
  de: { title: 'Stellenwerte!', hint: 'Trage die Ziffer jedes Stellenwerts ein.', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal', ones: 'Einer', tenths: 'Zehntel', hundredths: 'Hundertstel', separator: ',' },
  en: { title: 'Place values!', hint: 'Enter the digit for each place value.', submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry', ones: 'Ones', tenths: 'Tenths', hundredths: 'Hundredths', separator: '.' },
  ro: { title: 'Valori poziționale!', hint: 'Completează cifra fiecărei poziții.', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou', ones: 'Unități', tenths: 'Zecimi', hundredths: 'Sutimi', separator: ',' },
};

const DecimalPlaceValue: React.FC<DecimalPlaceValueProps> = ({
  number: propNumber,
  decimalPlaces: propDec,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { targetNumber, decPlaces, digits } = useMemo(() => {
    const dec = propDec ?? (Math.random() > 0.4 ? 2 : 1);
    let num: number;
    if (propNumber !== undefined) {
      num = propNumber;
    } else if (dec === 2) {
      // e.g. 3.47, 12.06, 0.83
      const intPart = Math.floor(Math.random() * 15);
      const fracPart = Math.floor(Math.random() * 99) + 1;
      num = intPart + fracPart / 100;
    } else {
      // e.g. 4.7, 0.3, 12.8
      const intPart = Math.floor(Math.random() * 15);
      const fracPart = Math.floor(Math.random() * 9) + 1;
      num = intPart + fracPart / 10;
    }
    // Extract digits
    const numStr = num.toFixed(dec);
    const [intStr, fracStr] = numStr.split('.');
    const digs: Record<string, number> = {
      ones: parseInt(intStr) % 10,
      ...(parseInt(intStr) >= 10 ? { tens: Math.floor(parseInt(intStr) / 10) % 10 } : {}),
      tenths: parseInt(fracStr[0] ?? '0'),
      ...(dec === 2 ? { hundredths: parseInt(fracStr[1] ?? '0') } : {}),
    };
    return { targetNumber: num, decPlaces: dec, digits: digs };
  }, [propNumber, propDec]);

  // Build columns
  const cols: { key: string; label: string; color: string }[] = [];
  if (digits.tens !== undefined) cols.push({ key: 'tens', label: language === 'hu' ? 'Tízes' : language === 'ro' ? 'Zeci' : language === 'en' ? 'Tens' : 'Zehner', color: '#0ea5e9' });
  cols.push({ key: 'ones', label: t.ones, color: '#0284c7' });
  cols.push({ key: 'sep', label: t.separator, color: '#94a3b8' }); // separator column
  cols.push({ key: 'tenths', label: t.tenths, color: '#0d9488' });
  if (decPlaces === 2) cols.push({ key: 'hundredths', label: t.hundredths, color: '#059669' });

  const inputCols = cols.filter(c => c.key !== 'sep');

  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (!embedded || !onValueChangeRef.current) return;
    const allFilled = inputCols.every(c => inputs[c.key] !== undefined && inputs[c.key] !== '');
    if (allFilled) {
      onValueChangeRef.current(inputCols.map(c => inputs[c.key] ?? '0').join(''));
    }
  }, [embedded, inputs, inputCols]);

  const handleInput = (key: string, val: string) => {
    if (submitted) return;
    playSelect();
    setInputs(prev => ({ ...prev, [key]: val }));
  };

  const handleSubmit = () => {
    if (embedded) return;
    playClick();
    const allCorrect = inputCols.every(c => parseInt(inputs[c.key] ?? '0') === digits[c.key]);
    setFeedback(allCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (allCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(allCorrect, targetNumber), 1800);
  };

  const handleReset = () => {
    playClick();
    setInputs({});
    setFeedback(null);
    setSubmitted(false);
  };

  const canSubmit = inputCols.some(c => inputs[c.key] !== undefined && inputs[c.key] !== '');

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 50%, #99f6e4 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">0,1</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Instruction */}
      <p className="text-xs font-semibold text-center text-slate-500 px-5 pt-3 pb-1">{t.hint}</p>

      {/* Number display */}
      <div className="flex justify-center pb-4 pt-2">
        <div className="bg-white border-2 border-teal-400 rounded-2xl px-8 py-3 shadow-sm">
          <span className="text-4xl font-black text-teal-700 tracking-wider">
            {targetNumber.toFixed(decPlaces).replace('.', t.separator)}
          </span>
        </div>
      </div>

      {/* Place value table */}
      <div className={embedded ? 'px-2 pb-2' : 'px-4 pb-4'}>
        <div className="bg-white rounded-xl border-2 border-teal-200 overflow-hidden">
          {/* Header */}
          <div className="flex">
            {cols.map((c, i) =>
              c.key === 'sep' ? (
                <div key="sep" className="px-2 flex items-center justify-center bg-slate-100 border-r border-teal-100">
                  <span className="text-2xl font-black text-slate-400">{t.separator}</span>
                </div>
              ) : (
                <div
                  key={c.key}
                  className="flex-1 text-center py-2 font-extrabold text-xs border-r last:border-r-0"
                  style={{ backgroundColor: c.color, color: 'white', borderColor: 'rgba(255,255,255,0.25)' }}
                >
                  {c.label}
                </div>
              )
            )}
          </div>
          {/* Input row */}
          <div className="flex border-t border-teal-100">
            {cols.map((c) =>
              c.key === 'sep' ? (
                <div key="sep" className="px-2 flex items-center justify-center bg-slate-50 border-r border-teal-100">
                  <span className="text-2xl font-black text-slate-300">{t.separator}</span>
                </div>
              ) : (
                <div key={c.key} className="flex-1 flex items-center justify-center py-3 border-r last:border-r-0 border-teal-100">
                  <input
                    type="number"
                    min={0}
                    max={9}
                    value={inputs[c.key] ?? ''}
                    onChange={e => handleInput(c.key, e.target.value)}
                    disabled={submitted}
                    className="w-12 h-12 text-center text-2xl font-black border-2 border-teal-300 rounded-xl bg-teal-50 focus:border-teal-600 focus:outline-none disabled:opacity-60 appearance-none"
                    style={{ MozAppearance: 'textfield', color: c.color }}
                  />
                </div>
              )
            )}
          </div>
          {/* Answer reveal row */}
          {submitted && (
            <div className="flex border-t border-teal-200">
              {cols.map((c) =>
                c.key === 'sep' ? (
                  <div key="sep" className="px-2 flex items-center justify-center bg-slate-50 border-r border-teal-100">
                    <span className="text-sm text-slate-300">{t.separator}</span>
                  </div>
                ) : (
                  <div key={c.key} className={`flex-1 flex items-center justify-center py-1 border-r last:border-r-0 border-teal-100 ${
                    parseInt(inputs[c.key] ?? '0') === digits[c.key] ? 'bg-green-50' : 'bg-red-50'
                  }`}>
                    <span className={`text-sm font-bold ${
                      parseInt(inputs[c.key] ?? '0') === digits[c.key] ? 'text-green-600' : 'text-red-500'
                    }`}>
                      {parseInt(inputs[c.key] ?? '0') === digits[c.key] ? '✓' : digits[c.key]}
                    </span>
                  </div>
                )
              )}
            </div>
          )}
        </div>
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
              disabled={!canSubmit}
              className="w-full py-3 rounded-xl bg-teal-600 text-white font-bold text-sm hover:bg-teal-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-600 text-white font-bold text-sm hover:bg-teal-700 active:scale-[0.98] transition-all"
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

export default DecimalPlaceValue;
