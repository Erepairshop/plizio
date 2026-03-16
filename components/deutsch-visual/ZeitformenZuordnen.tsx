'use client';

/**
 * ZeitformenZuordnen — tap the correct Zeitform for the displayed sentence
 * Compact paper-inline: sentence + 3 buttons (Präsens / Präteritum / Perfekt)
 */

interface Props {
  sentence: string;           // the sentence to classify
  correctZeitform: 'pres' | 'praet' | 'perf';
  userAnswer: string;         // '' | 'pres' | 'praet' | 'perf'
  submitted: boolean;
  onAnswer: (a: string) => void;
}

const LABELS: Record<string, string> = {
  pres:  'Präsens',
  praet: 'Präteritum',
  perf:  'Perfekt',
};
const COLORS: Record<string, { base: string; selected: string; correct: string; wrong: string }> = {
  pres:  { base: 'border-slate-300 text-slate-700 hover:bg-green-50 hover:border-green-300', selected: 'bg-green-500 border-green-500 text-white', correct: 'bg-green-100 border-green-400 text-green-700', wrong: 'bg-red-50 border-red-300 text-red-500 opacity-70' },
  praet: { base: 'border-slate-300 text-slate-700 hover:bg-purple-50 hover:border-purple-300', selected: 'bg-purple-500 border-purple-500 text-white', correct: 'bg-purple-100 border-purple-400 text-purple-700', wrong: 'bg-red-50 border-red-300 text-red-500 opacity-70' },
  perf:  { base: 'border-slate-300 text-slate-700 hover:bg-amber-50 hover:border-amber-300', selected: 'bg-amber-400 border-amber-400 text-white', correct: 'bg-amber-100 border-amber-400 text-amber-700', wrong: 'bg-red-50 border-red-300 text-red-500 opacity-70' },
};

export default function ZeitformenZuordnen({ sentence, correctZeitform, userAnswer, submitted, onAnswer }: Props) {
  const isCorrect = userAnswer === correctZeitform;

  return (
    <div>
      {/* Sentence line */}
      <div style={{ minHeight: 28, lineHeight: '28px' }} className="flex items-center gap-1 px-1 py-0.5">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="text-xs text-slate-700 font-semibold italic">{sentence}</span>
      </div>

      {/* Zeitform buttons */}
      <div style={{ minHeight: 28 }} className="flex items-center gap-1.5 flex-wrap px-1 py-0.5 border-b border-dashed border-slate-200">
        <span className="w-5 shrink-0" />
        {(['pres', 'praet', 'perf'] as const).map(zf => {
          const c = COLORS[zf];
          let cls = 'px-2 rounded border font-semibold text-xs transition-all select-none cursor-pointer ';
          if (submitted) {
            if (zf === correctZeitform) cls += c.correct;
            else if (zf === userAnswer) cls += c.wrong;
            else cls += 'bg-white border-slate-200 text-slate-400';
          } else {
            cls += userAnswer === zf ? c.selected : `bg-white ${c.base}`;
          }
          return (
            <button
              key={zf}
              style={{ height: 22, lineHeight: '22px' }}
              className={cls}
              onClick={() => !submitted && onAnswer(zf)}
              disabled={submitted}
            >
              {LABELS[zf]}
            </button>
          );
        })}
        {submitted && userAnswer && (
          <span className={`text-xs font-bold ml-1 shrink-0 ${isCorrect ? 'text-emerald-500' : 'text-red-500'}`}>
            {isCorrect ? '✓' : `✗ → ${LABELS[correctZeitform]}`}
          </span>
        )}
      </div>
    </div>
  );
}
