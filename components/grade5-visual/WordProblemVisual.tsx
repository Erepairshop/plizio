'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface WordProblemVisualProps {
  problemId?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Szöveges feladat', hint: 'Olvasd el figyelmesen és számítsd ki!', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra', yourAnswer: 'Válaszod:', showHint: '💡 Segítség', hideHint: '🙈 Elrejt' },
  de: { title: 'Textaufgabe', hint: 'Lies genau und rechne aus!', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal', yourAnswer: 'Deine Antwort:', showHint: '💡 Hinweis', hideHint: '🙈 Verbergen' },
  en: { title: 'Word problem', hint: 'Read carefully and calculate!', submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry', yourAnswer: 'Your answer:', showHint: '💡 Hint', hideHint: '🙈 Hide hint' },
  ro: { title: 'Problemă cu text', hint: 'Citește cu atenție și calculează!', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou', yourAnswer: 'Răspunsul tău:', showHint: '💡 Indiciu', hideHint: '🙈 Ascunde' },
};

type Problem = {
  text: string;
  answer: number;
  unit: string;
  illustration: string; // emoji
  hint?: string;
};

type ProblemSet = Record<string, Problem[]>;

// Problems are language-keyed, random params are filled in via closure
function makeProblemSets(): Record<string, ProblemSet> {
  const a = Math.floor(Math.random() * 5) + 3; // 3-7
  const b = Math.floor(Math.random() * 5) + 2; // 2-6
  const price = (Math.floor(Math.random() * 8) + 2) * 100; // 200-900
  const total = Math.floor(Math.random() * 5) + 4; // 4-8
  const speed = [40, 50, 60, 80, 100][Math.floor(Math.random() * 5)];
  const hours = Math.floor(Math.random() * 4) + 2; // 2-5
  const dist = speed * hours;
  const apples = (Math.floor(Math.random() * 6) + 3) * 10; // 30-80
  const eaten = Math.floor(Math.random() * 3) + 1;
  const kids = Math.floor(Math.random() * 4) + 2; // 2-5

  return {
    hu: {
      problems: [
        { text: `Egy boltban ${a} skatulya ceruza van, mindegyikben ${b} ceruza. Hány ceruza van összesen?`, answer: a * b, unit: 'db', illustration: '✏️', hint: `${a} × ${b}` },
        { text: `Annaék háza ${dist} km-re van az iskolától. A vonat ${speed} km/h sebességgel halad. Hány óra az utazás?`, answer: hours, unit: 'óra', illustration: '🚂', hint: `${dist} ÷ ${speed}` },
        { text: `A kertben ${apples} alma volt. Ebből ${eaten * kids} almát szedtek le és ${kids} gyerek között osztották el egyenlően. Hány almát kapott egy gyerek?`, answer: eaten, unit: 'db', illustration: '🍎', hint: `${eaten * kids} ÷ ${kids}` },
        { text: `Egy zsák liszt ${price} Ft. Ha ${total} zsákot veszünk, mennyit kell fizetni?`, answer: price * total, unit: 'Ft', illustration: '🛒', hint: `${price} × ${total}` },
        { text: `Egy téglalap kerülete ${2 * (a + b) * 10} cm. Ha az egyik oldala ${a * 10} cm, mekkora a másik?`, answer: b * 10, unit: 'cm', illustration: '📐', hint: `(${2 * (a + b) * 10} ÷ 2) − ${a * 10}` },
      ],
    },
    de: {
      problems: [
        { text: `Im Laden gibt es ${a} Schachteln Buntstifte, jede mit ${b} Stiften. Wie viele Stifte sind es insgesamt?`, answer: a * b, unit: 'Stk', illustration: '✏️', hint: `${a} × ${b}` },
        { text: `Das Haus von Anna ist ${dist} km von der Schule entfernt. Der Zug fährt ${speed} km/h. Wie lange dauert die Fahrt?`, answer: hours, unit: 'Stunden', illustration: '🚂', hint: `${dist} ÷ ${speed}` },
        { text: `Im Garten waren ${apples} Äpfel. Es wurden ${eaten * kids} gepflückt und unter ${kids} Kinder gleichmäßig verteilt. Wie viele Äpfel bekommt jedes Kind?`, answer: eaten, unit: 'Stk', illustration: '🍎', hint: `${eaten * kids} ÷ ${kids}` },
        { text: `Ein Sack Mehl kostet ${price} Ft. Wenn wir ${total} Säcke kaufen, wie viel müssen wir zahlen?`, answer: price * total, unit: 'Ft', illustration: '🛒', hint: `${price} × ${total}` },
        { text: `Der Umfang eines Rechtecks beträgt ${2 * (a + b) * 10} cm. Eine Seite ist ${a * 10} cm lang. Wie lang ist die andere Seite?`, answer: b * 10, unit: 'cm', illustration: '📐', hint: `(${2 * (a + b) * 10} ÷ 2) − ${a * 10}` },
      ],
    },
    en: {
      problems: [
        { text: `A shop has ${a} boxes of crayons, each containing ${b} crayons. How many crayons are there in total?`, answer: a * b, unit: 'pcs', illustration: '✏️', hint: `${a} × ${b}` },
        { text: `Anna's house is ${dist} km from school. The train travels at ${speed} km/h. How many hours is the journey?`, answer: hours, unit: 'hours', illustration: '🚂', hint: `${dist} ÷ ${speed}` },
        { text: `There were ${apples} apples in the garden. ${eaten * kids} were picked and shared equally among ${kids} children. How many apples did each child get?`, answer: eaten, unit: 'pcs', illustration: '🍎', hint: `${eaten * kids} ÷ ${kids}` },
        { text: `A bag of flour costs ${price} Ft. If we buy ${total} bags, how much do we pay?`, answer: price * total, unit: 'Ft', illustration: '🛒', hint: `${price} × ${total}` },
        { text: `The perimeter of a rectangle is ${2 * (a + b) * 10} cm. One side is ${a * 10} cm. How long is the other side?`, answer: b * 10, unit: 'cm', illustration: '📐', hint: `(${2 * (a + b) * 10} ÷ 2) − ${a * 10}` },
      ],
    },
    ro: {
      problems: [
        { text: `Într-un magazin sunt ${a} cutii de creioane, fiecare cu ${b} creioane. Câte creioane sunt în total?`, answer: a * b, unit: 'buc', illustration: '✏️', hint: `${a} × ${b}` },
        { text: `Casa Anei este la ${dist} km de școală. Trenul merge cu ${speed} km/h. Câte ore durează călătoria?`, answer: hours, unit: 'ore', illustration: '🚂', hint: `${dist} ÷ ${speed}` },
        { text: `În grădină erau ${apples} mere. S-au cules ${eaten * kids} și s-au împărțit egal între ${kids} copii. Câte mere a primit fiecare copil?`, answer: eaten, unit: 'buc', illustration: '🍎', hint: `${eaten * kids} ÷ ${kids}` },
        { text: `Un sac de făină costă ${price} Ft. Dacă cumpărăm ${total} saci, cât plătim?`, answer: price * total, unit: 'Ft', illustration: '🛒', hint: `${price} × ${total}` },
        { text: `Perimetrul unui dreptunghi este ${2 * (a + b) * 10} cm. O latură are ${a * 10} cm. Cât are cealaltă latură?`, answer: b * 10, unit: 'cm', illustration: '📐', hint: `(${2 * (a + b) * 10} ÷ 2) − ${a * 10}` },
      ],
    },
  };
}

const WordProblemVisual: React.FC<WordProblemVisualProps> = ({
  problemId: propId,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { problem, idx } = useMemo(() => {
    const sets = makeProblemSets();
    const langSet = sets[language] ?? sets.en;
    const problems: Problem[] = langSet.problems;
    const i = propId !== undefined ? propId % problems.length : Math.floor(Math.random() * problems.length);
    return { problem: problems[i], idx: i };
  }, [propId, language]);

  const [inputVal, setInputVal] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const onValueChangeRef = React.useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && inputVal.trim()) {
      onValueChangeRef.current(inputVal.trim());
    }
  }, [embedded, inputVal]);

  const handleSubmit = () => {
    if (embedded) return;
    playClick();
    const ans = parseInt(inputVal.trim());
    const isCorrect = ans === problem.answer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, ans || 0), 1800);
  };

  const handleReset = () => {
    playClick();
    setInputVal('');
    setFeedback(null);
    setSubmitted(false);
    setShowHint(false);
  };

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fde68a 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center">
              <span className="text-white font-black text-base">💡</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Problem card */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-2xl border-2 border-amber-200 p-4 shadow-sm">
          <div className="flex gap-3">
            <div className="text-4xl flex-shrink-0">{problem.illustration}</div>
            <p className="text-sm font-semibold text-slate-700 leading-relaxed">{problem.text}</p>
          </div>
        </div>
      </div>

      {/* Hint toggle */}
      {!submitted && problem.hint && (
        <div className="px-4 pb-2 flex justify-center">
          <button
            onClick={() => { playClick(); setShowHint(h => !h); }}
            className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200 hover:bg-amber-200 transition-all"
          >
            {showHint ? t.hideHint : t.showHint}
          </button>
        </div>
      )}
      {showHint && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-4 pb-2"
        >
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 text-sm font-bold text-amber-800 text-center">
            {problem.hint}
          </div>
        </motion.div>
      )}

      {/* Input */}
      <div className="px-5 pb-4 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-slate-600 font-bold text-sm">{t.yourAnswer}</span>
          <input
            type="number"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !submitted && inputVal.trim() && handleSubmit()}
            disabled={submitted}
            placeholder="?"
            className="w-28 text-center text-2xl font-black text-slate-800 border-2 border-amber-400 rounded-xl py-2 bg-white focus:border-amber-600 focus:outline-none disabled:opacity-60 appearance-none"
            style={{ MozAppearance: 'textfield' }}
          />
          <span className="text-slate-500 font-bold text-sm">{problem.unit}</span>
        </div>
        {submitted && feedback === 'incorrect' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-bold text-amber-700 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200"
          >
            ✓ {problem.answer} {problem.unit}
          </motion.div>
        )}
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
              disabled={!inputVal.trim()}
              className="w-full py-3 rounded-xl bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 active:scale-[0.98] transition-all"
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

export default WordProblemVisual;
