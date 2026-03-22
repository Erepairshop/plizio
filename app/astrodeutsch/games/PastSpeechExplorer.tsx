"use client";
import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import MemoryPairCards from "@/app/astrodeutsch/games/blocks/MemoryPairCards";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Präteritum & Direkte Rede",
    round1: "Präteritum-Formen",
    round2: "Memory: Präteritum",
    round3: "Direkte Rede",
    round4: "Wer hat das gesagt?",
    round5: "Präteritum-Quiz!",
    tapReveal: "Tippe um die Form zu sehen",
    next: "Weiter →",
    done: "Fertig! 🌟",
    regular: "Regelmäßig",
    irregular: "Unregelmäßig",
    openingQuote: "Öffnendes Anführungszeichen",
    closingQuote: "Schließendes Anführungszeichen",
    pickSpeaker: "Wer hat gesagt:",
    pickPreterite: "Wähle die Präteritumform",
    rules: "Regeln",
    comma: "Komma nach dem Satz",
    quoteRule: '\u201eRede\u201c',
    discovery: "💡 Präteritum ist die geschriebene Vergangenheit: ich GING, er SPIELTE. Es wird in Geschichten und formellen Schreiben verwendet. Perfekt ist für gesprochenes Deutsch!",
  },
  en: {
    title: "Preterite & Direct Speech",
    round1: "Preterite forms",
    round2: "Memory: Preterite",
    round3: "Direct speech",
    round4: "Who said that?",
    round5: "Preterite quiz!",
    tapReveal: "Tap to see the form",
    next: "Next →",
    done: "Done! 🌟",
    regular: "Regular",
    irregular: "Irregular",
    openingQuote: "Opening quote mark",
    closingQuote: "Closing quote mark",
    pickSpeaker: "Who said:",
    pickPreterite: "Choose the preterite form",
    rules: "Rules",
    comma: "Comma after the sentence",
    quoteRule: "\"Speech\"",
    discovery: "💡 Preterite is the written past tense: I WENT, he PLAYED. It's used in stories and formal writing. Perfect is for spoken German!",
  },
  hu: {
    title: "Präteritum & Egyenes idézet",
    round1: "Präteritum formák",
    round2: "Memória: Präteritum",
    round3: "Egyenes idézet",
    round4: "Ki mondta azt?",
    round5: "Präteritum kvíz!",
    tapReveal: "Koppints a forma megtekintéséhez",
    next: "Tovább →",
    done: "Kész! 🌟",
    regular: "Szabályos",
    irregular: "Rendhagyó",
    openingQuote: "Nyitó idézőjel",
    closingQuote: "Záró idézőjel",
    pickSpeaker: "Ki mondta:",
    pickPreterite: "Válaszd a Präteritum formát",
    rules: "Szabályok",
    comma: "Vessző a mondat után",
    quoteRule: '\u201eIdézet\u201c',
    discovery: "💡 A Präteritum az írott múlt: én MENTEM, ő JÁTSZOTT. Történetekben és formális írásban használják. A Perfekt a beszélt német!",
  },
  ro: {
    title: "Preterit & Vorbire directă",
    round1: "Formele de preterit",
    round2: "Memory: Preterit",
    round3: "Vorbire directă",
    round4: "Cine a spus asta?",
    round5: "Quiz preterit!",
    tapReveal: "Apasă pentru a vedea forma",
    next: "Mai departe →",
    done: "Gata! 🌟",
    regular: "Regular",
    irregular: "Neregulat",
    openingQuote: "Ghilimele de deschidere",
    closingQuote: "Ghilimele de închidere",
    pickSpeaker: "Cine a spus:",
    pickPreterite: "Alege forma de preterit",
    rules: "Reguli",
    comma: "Virgulă după propoziție",
    quoteRule: '\u201eVorbire\u201c',
    discovery: "💡 Preteritarul este timpul trecut scris: eu AM PLECAT, el A JUCAT. Se folosește în povestiri și scriere formală. Perfectul este pentru germana vorbită!",
  },
};

function ProgressBar({ current, total, color }: { current: number; total: number; color: string }) {
  return (
    <div className="w-full flex items-center gap-2 px-2">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="h-2 flex-1 rounded-full transition-all duration-500"
          style={{ background: i < current ? color : "rgba(255,255,255,0.15)" }} />
      ))}
    </div>
  );
}

const PRAT_FORMS = [
  { infinitiv: "spielen", form: "spielte", type: "regular" },
  { infinitiv: "lernen", form: "lernte", type: "regular" },
  { infinitiv: "gehen", form: "ging", type: "irregular" },
  { infinitiv: "sein", form: "war", type: "irregular" },
  { infinitiv: "haben", form: "hatte", type: "irregular" },
];

function Round1({ color, lbl, onNext, showTeach = false }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach?: boolean }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [teach, setTeach] = useState(showTeach);
  const tap = (i: number) => setRevealed(prev => { const n = new Set(prev); n.add(i); return n; });
  const regColor = "#3b82f6";
  const irrColor = "#f59e0b";

  if (teach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round1}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">Präteritum ist die geschriebene Vergangenheit für Geschichten! Regelmäßige Verben bekommen -te (spielte), unregelmäßige Verben ändern den Stamm (ging, war). Das ist anders als Perfekt!</p>
        </div>
        <motion.button onClick={() => setTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt || "Ich verstehe! Weiter →"} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round1}</div>
      <div className="flex gap-2">
        <span className="text-xs font-bold px-2 py-1 rounded-lg"
          style={{ background: `${regColor}22`, color: regColor }}>{lbl.regular}: + -te</span>
        <span className="text-xs font-bold px-2 py-1 rounded-lg"
          style={{ background: `${irrColor}22`, color: irrColor }}>{lbl.irregular}</span>
      </div>
      <div className="w-full flex flex-col gap-2 px-1">
        {PRAT_FORMS.map((f, i) => {
          const fc = f.type === "regular" ? regColor : irrColor;
          return (
            <motion.button key={f.infinitiv}
              className="w-full flex items-center gap-3 p-3 rounded-2xl border-2 text-left"
              style={{
                borderColor: revealed.has(i) ? fc : "rgba(255,255,255,0.12)",
                background: revealed.has(i) ? `${fc}18` : "rgba(255,255,255,0.04)",
              }}
              whileTap={{ scale: 0.97 }} onClick={() => tap(i)}>
              <span className="px-2 py-0.5 rounded text-xs font-black shrink-0"
                style={{ background: fc, color: "#fff" }}>
                {f.type === "regular" ? lbl.regular.slice(0, 3) : lbl.irregular.slice(0, 3)}
              </span>
              <span className="text-white/80 font-bold flex-1">{f.infinitiv}</span>
              {revealed.has(i) ? (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="font-black text-sm" style={{ color: fc }}>→ {f.form}</motion.span>
              ) : (
                <span className="text-white/30 text-xs">{lbl.tapReveal}</span>
              )}
            </motion.button>
          );
        })}
      </div>
      {revealed.size === PRAT_FORMS.length && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
      )}
    </div>
  );
}

const MEMORY_PAIRS = [
  { a: "gehen", b: "ging" },
  { a: "sein", b: "war" },
  { a: "haben", b: "hatte" },
  { a: "kommen", b: "kam" },
  { a: "sehen", b: "sah" },
  { a: "laufen", b: "lief" },
];

function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round2}</div>
      <MemoryPairCards pairs={MEMORY_PAIRS} color={color} onDone={onNext} />
    </div>
  );
}

const SPEECH_EXAMPLES = [
  { speaker: "Anna", speech: "Ich bin müde.", full: `Anna sagte: „Ich bin müde."` },
  { speaker: "Tom", speech: "Das Essen schmeckt gut.", full: `Tom rief: „Das Essen schmeckt gut."` },
  { speaker: "Lena", speech: "Wir gehen spielen.", full: `Lena flüsterte: „Wir gehen spielen."` },
];

function Round3({ color, lbl, onNext, lang }: { color: string; lbl: Record<string, string>; onNext: () => void; lang: string }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const tap = (i: number) => setRevealed(prev => { const n = new Set(prev); n.add(i); return n; });
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round3}</div>
      {/* Rule card */}
      <div className="w-full px-1 py-2 rounded-2xl border text-center"
        style={{ borderColor: `${color}44`, background: `${color}11` }}>
        <div className="flex justify-center gap-4 text-xs font-bold text-white/70">
          <span>„ {lbl.openingQuote}</span>
          <span>{lbl.comma}</span>
          <span>" {lbl.closingQuote}</span>
        </div>
        <div className="mt-1 text-sm font-bold" style={{ color }}>{lbl.quoteRule}</div>
      </div>
      <div className="w-full flex flex-col gap-2 px-1">
        {SPEECH_EXAMPLES.map((e, i) => (
          <motion.button key={e.speaker}
            className="w-full p-3 rounded-2xl border-2 text-left"
            style={{
              borderColor: revealed.has(i) ? color : "rgba(255,255,255,0.12)",
              background: revealed.has(i) ? `${color}18` : "rgba(255,255,255,0.04)",
            }}
            whileTap={{ scale: 0.97 }} onClick={() => tap(i)}>
            <div className="text-xs text-white/50 font-semibold mb-0.5">{e.speaker}:</div>
            {revealed.has(i) ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex items-center justify-between gap-2">
                <span className="text-sm font-bold text-white/90">{e.full}</span>
                <SpeakButton text={e.full} lang={"de"} size={16} />
              </motion.div>
            ) : (
              <div className="text-sm text-white/60">„{e.speech}"</div>
            )}
          </motion.button>
        ))}
      </div>
      {revealed.size === SPEECH_EXAMPLES.length && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
      )}
    </div>
  );
}

const WHO_SAID = [
  { quote: '\u201eIch habe Hunger!\u201c', options: ["Max", "Emma"], correct: 0 },
  { quote: '\u201eDas Buch ist toll.\u201c', options: ["Lisa", "Ben"], correct: 1 },
  { quote: '\u201eWir spielen Fu\u00dfball.\u201c', options: ["Tim", "Jana"], correct: 0 },
];

function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = WHO_SAID[qi];

  const handleSelect = (i: number) => { if (revealed) return; setSelected(i); setRevealed(true); };
  const handleNext = () => {
    if (qi + 1 >= WHO_SAID.length) onNext();
    else { setQi(qi + 1); setSelected(null); setRevealed(false); }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round4}</div>
      <div className="px-4 py-3 rounded-2xl border text-base font-bold text-white/90 text-center"
        style={{ borderColor: `${color}44`, background: `${color}18` }}>{q.quote}</div>
      <p className="text-xs text-white/60">{lbl.pickSpeaker} …</p>
      <div className="flex gap-3 justify-center">
        {q.options.map((opt, i) => {
          let bg = "rgba(255,255,255,0.08)", border = "rgba(255,255,255,0.2)";
          if (revealed) {
            if (i === q.correct) { bg = "#22c55e33"; border = "#22c55e"; }
            else if (selected === i) { bg = "#ef444433"; border = "#ef4444"; }
          } else if (selected === i) { bg = `${color}33`; border = color; }
          return (
            <motion.button key={opt}
              className="px-6 py-2.5 rounded-xl font-black text-base border-2 text-white"
              style={{ background: bg, borderColor: border }}
              whileTap={{ scale: 0.92 }} onClick={() => handleSelect(i)}>{opt}</motion.button>
          );
        })}
      </div>
      {revealed && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={handleNext}>{lbl.next}</motion.button>
      )}
    </div>
  );
}

const PRAT_QUIZ = [
  { verb: "gehen", options: ["gegangen", "geht", "ging"], correct: 2 },
  { verb: "spielen", options: ["spielte", "hat gespielt", "spielen"], correct: 0 },
  { verb: "kommen", options: ["kommt", "kam", "gekommen"], correct: 1 },
];

function Round5({ color, lbl, onDone }: { color: string; lbl: Record<string, string>; onDone: () => void }) {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = PRAT_QUIZ[qi];

  const handleSelect = (i: number) => { if (revealed) return; setSelected(i); setRevealed(true); };
  const handleNext = () => {
    if (qi + 1 >= PRAT_QUIZ.length) onDone();
    else { setQi(qi + 1); setSelected(null); setRevealed(false); }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round5}</div>
      <p className="text-sm font-bold text-white/80">{lbl.pickPreterite}</p>
      <div className="text-xl font-black" style={{ color }}>{q.verb}</div>
      <div className="flex flex-col gap-2 w-full px-4">
        {q.options.map((opt, i) => {
          let bg = "rgba(255,255,255,0.08)", border = "rgba(255,255,255,0.2)";
          if (revealed) {
            if (i === q.correct) { bg = "#22c55e33"; border = "#22c55e"; }
            else if (selected === i) { bg = "#ef444433"; border = "#ef4444"; }
          } else if (selected === i) { bg = `${color}33`; border = color; }
          return (
            <motion.button key={opt}
              className="py-3 rounded-xl font-bold text-base border-2 text-white"
              style={{ background: bg, borderColor: border }}
              whileTap={{ scale: 0.96 }} onClick={() => handleSelect(i)}>
              {opt}
              {revealed && i === q.correct && " ✓"}
              {revealed && selected === i && i !== q.correct && " ✗"}
            </motion.button>
          );
        })}
      </div>
      {revealed && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={handleNext}>
          {qi + 1 >= PRAT_QUIZ.length ? lbl.done : lbl.next}
        </motion.button>
      )}
    </div>
  );
}

const PastSpeechExplorer = memo(function PastSpeechExplorer({
  color, lang = "de", onDone,
}: { color: string; lang?: string; onDone: (score: number, total: number) => void }) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const [showTeach, setShowTeach] = useState(true);
  const TOTAL_ROUNDS = 5;
  const next = useCallback(() => { setRound(r => r + 1); setShowTeach(true); }, []);
  const finish = useCallback(() => onDone(TOTAL_ROUNDS, TOTAL_ROUNDS), [onDone]);
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-4 px-1">
      <ProgressBar current={round} total={TOTAL_ROUNDS} color={color} />
      <AnimatePresence mode="wait">
        <motion.div key={round} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}
          className="w-full flex flex-col items-center gap-4">
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} showTeach={showTeach} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} lang={lang} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});
export default PastSpeechExplorer;
