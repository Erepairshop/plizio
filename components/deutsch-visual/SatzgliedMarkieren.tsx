'use client';

/**
 * SatzgliedMarkieren — tap word chips to label them Subjekt / Prädikat / Objekt
 * Compact paper-inline: word chips cycle through S → P → O → (none)
 */

interface Props {
  words: string[];            // sentence split into words
  correctLabels: string[];    // 'S' | 'P' | 'O' | '' per word
  userAnswer: string;         // comma-separated labels, e.g. "S,P,O,,,"
  submitted: boolean;
  onAnswer: (a: string) => void;
}

const LABEL_FULL: Record<string, string> = { S: 'Subjekt', P: 'Prädikat', O: 'Objekt' };
const LABEL_COLORS: Record<string, string> = {
  S: 'bg-blue-500 border-blue-500 text-white',
  P: 'bg-red-500 border-red-500 text-white',
  O: 'bg-emerald-500 border-emerald-500 text-white',
};
const LABEL_CORRECT: Record<string, string> = {
  S: 'bg-blue-100 border-blue-400 text-blue-700',
  P: 'bg-red-100 border-red-400 text-red-700',
  O: 'bg-emerald-100 border-emerald-400 text-emerald-700',
};
const CYCLE = ['S', 'P', 'O', ''];

export default function SatzgliedMarkieren({ words, correctLabels, userAnswer, submitted, onAnswer }: Props) {
  const chosen = userAnswer ? userAnswer.split(',') : words.map(() => '');

  const toggle = (i: number) => {
    if (submitted) return;
    const cur = chosen[i];
    const next = CYCLE[(CYCLE.indexOf(cur) + 1) % CYCLE.length];
    const updated = [...chosen];
    updated[i] = next;
    onAnswer(updated.join(','));
  };

  const allCorrect = correctLabels.every((c, i) => chosen[i] === c);

  return (
    <div>
      {/* Instruction */}
      <div style={{ height: 28, lineHeight: '28px' }} className="flex items-center gap-1 px-1">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">↓</span>
        <span className="text-xs text-slate-400 italic">Tippe: S·P·O markieren</span>
        <span className="ml-auto flex gap-1 pr-1">
          {(['S','P','O'] as const).map(l => (
            <span key={l} className={`text-xs font-bold px-1.5 rounded ${LABEL_CORRECT[l]}`}>{l}</span>
          ))}
        </span>
      </div>

      {/* Word chips */}
      <div style={{ minHeight: 28 }} className="flex items-center gap-1 flex-wrap px-1 py-0.5 border-b border-dashed border-slate-200">
        <span className="w-5 shrink-0" />
        {words.map((w, i) => {
          const sel = chosen[i];
          const correct = correctLabels[i];
          let cls = 'px-2 rounded border font-semibold text-xs transition-all select-none ';
          if (submitted) {
            if (sel === correct) {
              cls += sel ? LABEL_CORRECT[sel] : 'bg-white border-slate-200 text-slate-500';
            } else if (correct) {
              // Missed or wrong assignment
              cls += `${LABEL_CORRECT[correct]} ring-2 ring-offset-1 ring-current`;
            } else {
              cls += sel ? 'bg-red-50 border-red-300 text-red-500 line-through opacity-60' : 'bg-white border-slate-200 text-slate-500';
            }
          } else {
            cls += sel
              ? `${LABEL_COLORS[sel]} cursor-pointer active:scale-95`
              : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer';
          }
          return (
            <button
              key={i}
              style={{ height: 22, lineHeight: '22px' }}
              className={cls}
              onClick={() => toggle(i)}
              disabled={submitted}
              title={sel ? LABEL_FULL[sel] : undefined}
            >
              {sel && <span className="text-xs opacity-80 mr-0.5">{sel}</span>}
              {w}
            </button>
          );
        })}
        {submitted && (
          <span className={`text-xs font-bold ml-1 shrink-0 ${allCorrect ? 'text-emerald-500' : 'text-red-500'}`}>
            {allCorrect ? '✓' : `✗ → ${correctLabels.map((l, i) => l ? `${words[i]}=${l}` : '').filter(Boolean).join(' ')}`}
          </span>
        )}
      </div>
    </div>
  );
}
