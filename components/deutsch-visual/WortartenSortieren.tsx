'use client';

/**
 * WortartenSortieren — tap each word chip to assign Nomen / Verb / Adjektiv
 * Compact paper-inline style: chips cycle through categories on tap
 */

interface Props {
  words: string[];          // 6 words to classify
  categories: ('N' | 'V' | 'A')[]; // correct category per word
  userAnswer: string;       // comma-separated category chars, e.g. "N,V,A,N,A,V"
  submitted: boolean;
  onAnswer: (a: string) => void;
  labels?: { N: string; V: string; A: string };
}

const DEFAULT_CAT_LABELS: Record<string, string> = { N: 'Nomen', V: 'Verb', A: 'Adjektiv' };
const CAT_COLORS: Record<string, string> = {
  N: 'bg-blue-500 border-blue-500 text-white',
  V: 'bg-emerald-500 border-emerald-500 text-white',
  A: 'bg-orange-400 border-orange-400 text-white',
};
const CAT_CORRECT: Record<string, string> = {
  N: 'bg-blue-100 border-blue-400 text-blue-700',
  V: 'bg-emerald-100 border-emerald-400 text-emerald-700',
  A: 'bg-orange-100 border-orange-400 text-orange-700',
};
const CYCLE: Array<'N' | 'V' | 'A' | ''> = ['N', 'V', 'A', ''];

export default function WortartenSortieren({ words, categories, userAnswer, submitted, onAnswer, labels }: Props) {
  const CAT_LABELS = labels ? (labels as Record<string, string>) : DEFAULT_CAT_LABELS;
  const chosen = userAnswer ? userAnswer.split(',') : words.map(() => '');

  const toggle = (i: number) => {
    if (submitted) return;
    const cur = chosen[i] as 'N' | 'V' | 'A' | '';
    const next = CYCLE[(CYCLE.indexOf(cur) + 1) % CYCLE.length];
    const updated = [...chosen];
    updated[i] = next;
    onAnswer(updated.join(','));
  };

  const allCorrect = categories.every((c, i) => chosen[i] === c);

  return (
    <div>
      {/* Instruction */}
      <div style={{ height: 28, lineHeight: '28px' }} className="flex items-center gap-1 px-1">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">↓</span>
        <span className="text-xs text-slate-400 italic">{CAT_LABELS.N} · {CAT_LABELS.V} · {CAT_LABELS.A}</span>
        <span className="ml-auto flex gap-1 pr-1">
          {(['N','V','A'] as const).map(c => (
            <span key={c} className={`text-xs font-bold px-1 rounded ${CAT_CORRECT[c]}`}>{CAT_LABELS[c][0]}</span>
          ))}
        </span>
      </div>

      {/* Word chips */}
      <div style={{ minHeight: 28 }} className="flex items-center gap-1 flex-wrap px-1 py-0.5 border-b border-dashed border-slate-200">
        <span className="w-5 shrink-0" />
        {words.map((w, i) => {
          const sel = chosen[i] as 'N' | 'V' | 'A' | '';
          const correct = categories[i];
          let cls = 'px-2 rounded border font-semibold text-xs transition-all select-none cursor-pointer ';
          if (submitted) {
            const isRight = sel === correct;
            cls += isRight
              ? CAT_CORRECT[correct]
              : 'bg-red-50 border-red-300 text-red-600 line-through opacity-70';
          } else {
            cls += sel ? CAT_COLORS[sel] : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50';
          }
          return (
            <button
              key={i}
              style={{ height: 22, lineHeight: '22px' }}
              className={cls}
              onClick={() => toggle(i)}
              disabled={submitted}
            >
              {sel && !submitted && (
                <span className="opacity-70 mr-0.5 text-xs">{sel}</span>
              )}
              {w}
              {submitted && sel !== correct && (
                <span className="ml-1 opacity-80">{`→${correct}`}</span>
              )}
            </button>
          );
        })}
        {submitted && (
          <span className={`text-xs font-bold ml-1 shrink-0 ${allCorrect ? 'text-emerald-500' : 'text-red-500'}`}>
            {allCorrect ? '✓' : '✗'}
          </span>
        )}
      </div>
    </div>
  );
}
