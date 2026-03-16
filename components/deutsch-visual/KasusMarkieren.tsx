'use client';

/**
 * KasusMarkieren — K4: read a sentence, identify the case of the highlighted phrase
 * Compact paper-inline: sentence with highlighted phrase + 4 case buttons N/A/D/G
 */

interface Props {
  sentence: string;       // full sentence
  highlight: string;      // phrase to highlight (substring)
  correctKasus: 'N' | 'A' | 'D' | 'G';
  userAnswer: string;     // '' | 'N' | 'A' | 'D' | 'G'
  submitted: boolean;
  onAnswer: (a: string) => void;
}

const LABELS: Record<string, string> = {
  N: 'Nominativ',
  A: 'Akkusativ',
  D: 'Dativ',
  G: 'Genitiv',
};
const QUESTIONS: Record<string, string> = {
  N: 'Wer/Was?',
  A: 'Wen/Was?',
  D: 'Wem?',
  G: 'Wessen?',
};
const COLORS: Record<string, { base: string; selected: string; correct: string; wrong: string }> = {
  N: {
    base:     'border-slate-300 text-slate-700 hover:bg-blue-50 hover:border-blue-300',
    selected: 'bg-blue-500 border-blue-500 text-white',
    correct:  'bg-blue-100 border-blue-400 text-blue-700',
    wrong:    'bg-red-50 border-red-300 text-red-500 opacity-70',
  },
  A: {
    base:     'border-slate-300 text-slate-700 hover:bg-red-50 hover:border-red-300',
    selected: 'bg-red-500 border-red-500 text-white',
    correct:  'bg-red-100 border-red-400 text-red-700',
    wrong:    'bg-red-50 border-red-300 text-red-500 opacity-70',
  },
  D: {
    base:     'border-slate-300 text-slate-700 hover:bg-emerald-50 hover:border-emerald-300',
    selected: 'bg-emerald-500 border-emerald-500 text-white',
    correct:  'bg-emerald-100 border-emerald-400 text-emerald-700',
    wrong:    'bg-red-50 border-red-300 text-red-500 opacity-70',
  },
  G: {
    base:     'border-slate-300 text-slate-700 hover:bg-purple-50 hover:border-purple-300',
    selected: 'bg-purple-500 border-purple-500 text-white',
    correct:  'bg-purple-100 border-purple-400 text-purple-700',
    wrong:    'bg-red-50 border-red-300 text-red-500 opacity-70',
  },
};

export default function KasusMarkieren({ sentence, highlight, correctKasus, userAnswer, submitted, onAnswer }: Props) {
  const isCorrect = userAnswer === correctKasus;

  // Split sentence around the highlight for rendering
  const idx = sentence.indexOf(highlight);
  const before = idx >= 0 ? sentence.slice(0, idx) : sentence;
  const after  = idx >= 0 ? sentence.slice(idx + highlight.length) : '';

  return (
    <div>
      {/* Sentence with highlighted phrase */}
      <div style={{ minHeight: 28, lineHeight: '28px' }} className="flex items-center gap-1 px-1 py-0.5 flex-wrap">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="text-xs text-slate-700 font-semibold italic">
          {before}
          <span className="bg-amber-100 border border-amber-300 text-amber-800 rounded px-0.5 font-bold not-italic mx-0.5">
            {highlight}
          </span>
          {after}
        </span>
      </div>

      {/* Case buttons */}
      <div style={{ minHeight: 28 }} className="flex items-center gap-1.5 flex-wrap px-1 py-0.5 border-b border-dashed border-slate-200">
        <span className="w-5 shrink-0" />
        {(['N', 'A', 'D', 'G'] as const).map(k => {
          const c = COLORS[k];
          let cls = 'px-2 rounded border font-semibold text-xs transition-all select-none cursor-pointer ';
          if (submitted) {
            if (k === correctKasus)      cls += c.correct;
            else if (k === userAnswer)   cls += c.wrong;
            else                         cls += 'bg-white border-slate-200 text-slate-400';
          } else {
            cls += userAnswer === k ? c.selected : `bg-white ${c.base}`;
          }
          return (
            <button
              key={k}
              style={{ height: 22, lineHeight: '22px' }}
              className={cls}
              onClick={() => !submitted && onAnswer(k)}
              disabled={submitted}
              title={`${LABELS[k]} (${QUESTIONS[k]})`}
            >
              {k}
            </button>
          );
        })}
        {submitted && userAnswer && (
          <span className={`text-xs font-bold ml-1 shrink-0 ${isCorrect ? 'text-emerald-500' : 'text-red-500'}`}>
            {isCorrect ? '✓' : `✗ → ${LABELS[correctKasus]}`}
          </span>
        )}
      </div>
    </div>
  );
}
