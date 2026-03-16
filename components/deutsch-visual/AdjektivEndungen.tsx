'use client';

/**
 * AdjektivEndungen — K4: tap the correct adjective ending
 * Shows "ein groß___ Hund" — user taps one of 5 ending chips: -e / -er / -es / -en / -em
 */

interface Props {
  phrase: string;     // e.g. "ein groß___ Hund"
  stem: string;       // e.g. "groß" (adjective stem, no ending)
  correctEnding: string; // "e" | "er" | "es" | "en" | "em"
  userAnswer: string; // '' | "e" | "er" | "es" | "en" | "em"
  submitted: boolean;
  onAnswer: (a: string) => void;
}

const ENDINGS = ['-e', '-er', '-es', '-en', '-em'] as const;
const END_COLORS: Record<string, { base: string; selected: string; correct: string; wrong: string }> = {
  '-e':  { base: 'hover:bg-blue-50 hover:border-blue-300',    selected: 'bg-blue-500 border-blue-500 text-white',    correct: 'bg-blue-100 border-blue-400 text-blue-700',    wrong: 'bg-red-50 border-red-300 text-red-500 opacity-70' },
  '-er': { base: 'hover:bg-emerald-50 hover:border-emerald-300', selected: 'bg-emerald-500 border-emerald-500 text-white', correct: 'bg-emerald-100 border-emerald-400 text-emerald-700', wrong: 'bg-red-50 border-red-300 text-red-500 opacity-70' },
  '-es': { base: 'hover:bg-amber-50 hover:border-amber-300',  selected: 'bg-amber-400 border-amber-400 text-white',  correct: 'bg-amber-100 border-amber-400 text-amber-700',  wrong: 'bg-red-50 border-red-300 text-red-500 opacity-70' },
  '-en': { base: 'hover:bg-purple-50 hover:border-purple-300',selected: 'bg-purple-500 border-purple-500 text-white',correct: 'bg-purple-100 border-purple-400 text-purple-700',wrong: 'bg-red-50 border-red-300 text-red-500 opacity-70' },
  '-em': { base: 'hover:bg-rose-50 hover:border-rose-300',    selected: 'bg-rose-500 border-rose-500 text-white',    correct: 'bg-rose-100 border-rose-400 text-rose-700',    wrong: 'bg-red-50 border-red-300 text-red-500 opacity-70' },
};

/** Replace ___ in phrase with a colored span showing answer or blank */
function renderPhrase(phrase: string, stem: string, answer: string, submitted: boolean, correct: string) {
  const blank = '___';
  const parts = phrase.split(blank);
  if (parts.length !== 2) return <span className="font-semibold italic text-slate-700 text-xs">{phrase}</span>;

  let endingDisplay: React.ReactNode;
  if (!answer) {
    endingDisplay = <span className="border-b-2 border-dashed border-slate-400 inline-block w-8 align-bottom" />;
  } else if (submitted) {
    const isRight = answer === correct;
    endingDisplay = (
      <span className={`font-bold not-italic px-0.5 rounded ${isRight ? 'text-emerald-600 bg-emerald-50' : 'text-red-500 line-through bg-red-50'}`}>
        -{answer}
      </span>
    );
  } else {
    endingDisplay = <span className="font-bold not-italic text-blue-600">-{answer}</span>;
  }

  return (
    <span className="font-semibold italic text-slate-700 text-xs">
      {parts[0]}<span className="font-bold text-amber-700">{stem}</span>{endingDisplay}{parts[1]}
    </span>
  );
}

export default function AdjektivEndungen({ phrase, stem, correctEnding, userAnswer, submitted, onAnswer }: Props) {
  const isCorrect = userAnswer === correctEnding;

  return (
    <div>
      {/* Phrase display */}
      <div style={{ minHeight: 28, lineHeight: '28px' }} className="flex items-center gap-1 px-1 py-0.5 flex-wrap">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        {renderPhrase(phrase, stem, userAnswer, submitted, correctEnding)}
        {submitted && userAnswer && !isCorrect && (
          <span className="text-xs font-bold text-emerald-600 ml-1">
            → -{correctEnding}
          </span>
        )}
      </div>

      {/* Ending chips */}
      <div style={{ minHeight: 28 }} className="flex items-center gap-1.5 flex-wrap px-1 py-0.5 border-b border-dashed border-slate-200">
        <span className="w-5 shrink-0" />
        {ENDINGS.map(e => {
          const val = e.slice(1); // strip leading '-'
          const c = END_COLORS[e];
          let cls = 'px-2 rounded border font-semibold text-xs transition-all select-none cursor-pointer border-slate-300 text-slate-700 ';
          if (submitted) {
            if (val === correctEnding)  cls += c.correct;
            else if (val === userAnswer) cls += c.wrong;
            else                         cls += 'bg-white border-slate-200 text-slate-400';
          } else {
            cls += userAnswer === val ? c.selected : `bg-white ${c.base}`;
          }
          return (
            <button
              key={e}
              style={{ height: 22, lineHeight: '22px' }}
              className={cls}
              onClick={() => !submitted && onAnswer(val)}
              disabled={submitted}
            >
              {e}
            </button>
          );
        })}
        {submitted && userAnswer && (
          <span className={`text-xs font-bold ml-1 shrink-0 ${isCorrect ? 'text-emerald-500' : 'text-red-500'}`}>
            {isCorrect ? '✓' : '✗'}
          </span>
        )}
      </div>
    </div>
  );
}
