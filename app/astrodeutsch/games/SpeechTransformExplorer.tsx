"use client";
// SpeechTransformExplorer — Island i1: Konjunktiv I / Indirekte Rede (K7)
// Teaches: Direct vs Indirect speech, Konjunktiv I forms, DragToBucket sort, fill-in form, MCQ

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import DragToBucket from "./blocks/DragToBucket";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Direct & Indirect Speech",
    round1Title: "Direct → Indirect Speech",
    round1Hint: "Tap each pair to see how the verb changes!",
    round1Discovery: "💡 Direct speech uses exact words in quotes: Er sagt: 'Ich bin müde.' Indirect speech uses Konjunktiv I: Er sagt, er SEI müde.",
    round2Title: "Konjunktiv I Forms",
    round2Hint: "Tap each row to reveal the Konjunktiv I form.",
    round3Title: "Sort the Sentences",
    round3Hint: "Tap a sentence, then tap the correct bucket.",
    round4Title: "Which form is correct?",
    round4Hint: "Choose the right Konjunktiv I form to complete the sentence.",
    round5Title: "Identify Indirect Speech",
    round5Hint: "Choose the correct indirect speech version.",
    next: "Next",
    finish: "Finished!",
    tapToReveal: "Tap to reveal",
    correct: "Correct!",
    direct: "Direkte Rede",
    indirect: "Indirekte Rede",
    conjI: "Konjunktiv I",
    note: "Note",
  },
  hu: {
    title: "Egyenes és függő beszéd",
    round1Title: "Egyenes → Függő beszéd",
    round1Hint: "Koppints minden párra, hogy lásd hogyan változik az ige!",
    round1Discovery: "💡 Az egyenes beszéd idézőjeleket használ: Er sagt: 'Ich bin müde.' A függő beszéd Konjunktív I-et használ: Er sagt, er SEI müde.",
    round2Title: "Konjunktív I alakok",
    round2Hint: "Koppints minden sorra a Konjunktív I alak felfedezéséhez.",
    round3Title: "Rendezd a mondatokat!",
    round3Hint: "Koppints egy mondatra, majd a megfelelő vödörre.",
    round4Title: "Melyik alak helyes?",
    round4Hint: "Válaszd ki a helyes Konjunktív I alakot.",
    round5Title: "Azonosítsd a függő beszédet!",
    round5Hint: "Válaszd ki a helyes függő beszéd változatot.",
    next: "Tovább",
    finish: "Kész!",
    tapToReveal: "Koppints",
    correct: "Helyes!",
    direct: "Egyenes beszéd",
    indirect: "Függő beszéd",
    conjI: "Konjunktív I",
    note: "Megjegyzés",
  },
  de: {
    title: "Direkte & Indirekte Rede",
    round1Title: "Direkte → Indirekte Rede",
    round1Hint: "Tippe auf jedes Paar, um die Verbänderung zu sehen!",
    round1Discovery: "💡 Direkte Rede verwendet Anführungszeichen: Er sagt: 'Ich bin müde.' Indirekte Rede verwendet Konjunktiv I: Er sagt, er SEI müde.",
    round2Title: "Konjunktiv I Formen",
    round2Hint: "Tippe auf jede Zeile, um die Konjunktiv-I-Form zu entdecken.",
    round3Title: "Sortiere die Sätze!",
    round3Hint: "Tippe auf einen Satz, dann auf den richtigen Eimer.",
    round4Title: "Welche Form ist richtig?",
    round4Hint: "Wähle die richtige Konjunktiv-I-Form.",
    round5Title: "Indirekte Rede erkennen",
    round5Hint: "Wähle die richtige Version der indirekten Rede.",
    next: "Weiter",
    finish: "Fertig!",
    tapToReveal: "Antippen",
    correct: "Richtig!",
    direct: "Direkte Rede",
    indirect: "Indirekte Rede",
    conjI: "Konjunktiv I",
    note: "Hinweis",
  },
  ro: {
    title: "Vorbire directă & indirectă",
    round1Title: "Directă → Indirectă",
    round1Hint: "Atinge fiecare pereche pentru a vedea cum se schimbă verbul!",
    round1Discovery: "💡 Vorbirea directă folosește ghilimele: Er sagt: 'Ich bin müde.' Vorbirea indirectă folosește Conjunctiv I: Er sagt, er SEI müde.",
    round2Title: "Formele Conjunctivului I",
    round2Hint: "Atinge fiecare rând pentru a descoperi forma Conjunctivului I.",
    round3Title: "Sortează propozițiile!",
    round3Hint: "Atinge o propoziție, apoi găleata potrivită.",
    round4Title: "Care formă este corectă?",
    round4Hint: "Alege forma corectă de Conjunctiv I.",
    round5Title: "Identifică vorbirea indirectă",
    round5Hint: "Alege varianta corectă de vorbire indirectă.",
    next: "Înainte",
    finish: "Gata!",
    tapToReveal: "Atinge",
    correct: "Corect!",
    direct: "Vorbire directă",
    indirect: "Vorbire indirectă",
    conjI: "Conjunctiv I",
    note: "Notă",
  },
};

const PAIRS = [
  {
    direct: 'Er sagt: »Ich bin müde.«',
    indirect: 'Er sagt, er sei müde.',
    change: "bin → sei",
    emoji: "😴",
  },
  {
    direct: 'Sie sagt: »Ich habe Zeit.«',
    indirect: 'Sie sagt, sie habe Zeit.',
    change: "habe → habe (Konj. I!)",
    emoji: "⏰",
  },
  {
    direct: 'Er sagt: »Ich komme morgen.«',
    indirect: 'Er sagt, er komme morgen.',
    change: "komme → komme (Konj. I!)",
    emoji: "📅",
  },
  {
    direct: 'Sie sagt: »Ich kann das nicht.«',
    indirect: 'Sie sagt, sie könne das nicht.',
    change: "kann → könne",
    emoji: "❌",
  },
  {
    direct: 'Er sagt: »Ich gehe nach Hause.«',
    indirect: 'Er sagt, er gehe nach Hause.',
    change: "gehe → gehe (Konj. I!)",
    emoji: "🏠",
  },
];

const KONJ1_TABLE = [
  { pronoun: "ich", indikativ: "bin", konjunktiv: "sei", special: true },
  { pronoun: "er/sie/es", indikativ: "hat", konjunktiv: "habe", special: false },
  { pronoun: "er/sie/es", indikativ: "wird", konjunktiv: "werde", special: false },
  { pronoun: "er/sie/es", indikativ: "kommt", konjunktiv: "komme", special: false },
  { pronoun: "er/sie/es", indikativ: "lernt", konjunktiv: "lerne", special: false },
  { pronoun: "er/sie/es", indikativ: "geht", konjunktiv: "gehe", special: false },
];

const BUCKET_SENTENCES = [
  'Er sagt: »Ich bin hungrig.«',
  'Er sagt, er sei hungrig.',
  'Sie fragt: »Kommst du?«',
  'Sie sagt, er komme.',
  'Das Kind ruft: »Ich will spielen!«',
  'Er berichtet, er habe keine Zeit.',
];
const BUCKET_CORRECT: Record<string, string> = {
  'Er sagt: »Ich bin hungrig.«': "direct",
  'Er sagt, er sei hungrig.': "indirect",
  'Sie fragt: »Kommst du?«': "direct",
  'Sie sagt, er komme.': "indirect",
  'Das Kind ruft: »Ich will spielen!«': "direct",
  'Er berichtet, er habe keine Zeit.': "indirect",
};

const MCQ4 = [
  { sentence: 'Er sagt, er ___ Zeit.', options: ["hat", "habe", "hatte"], correct: "habe", label: "Konjunktiv I: habe" },
  { sentence: 'Sie sagt, sie ___ müde.', options: ["ist", "sei", "wäre"], correct: "sei", label: "Konjunktiv I: sei" },
  { sentence: 'Er berichtet, er ___ morgen kommen.', options: ["wird", "werde", "würde"], correct: "werde", label: "Konjunktiv I: werde" },
  { sentence: 'Sie erzählt, sie ___ das Buch gelesen.', options: ["hat", "habe", "hätte"], correct: "habe", label: "Konjunktiv I: habe" },
  { sentence: 'Er sagt, er ___ mitkommen.', options: ["kann", "könne", "könnte"], correct: "könne", label: "Konjunktiv I: könne" },
];

const MCQ5 = [
  {
    direct: 'Er sagt: »Ich lerne Deutsch.«',
    options: [
      'Er sagt, er lerne Deutsch.',
      'Er sagt, er lernt Deutsch.',
      'Er sagt, er lernte Deutsch.',
    ],
    correct: 'Er sagt, er lerne Deutsch.',
  },
  {
    direct: 'Sie sagt: »Ich bin glücklich.«',
    options: [
      'Sie sagt, sie ist glücklich.',
      'Sie sagt, sie sei glücklich.',
      'Sie sagt, sie wäre glücklich.',
    ],
    correct: 'Sie sagt, sie sei glücklich.',
  },
  {
    direct: 'Er erklärt: »Ich habe das Buch.«',
    options: [
      'Er erklärt, er hat das Buch.',
      'Er erklärt, er hätte das Buch.',
      'Er erklärt, er habe das Buch.',
    ],
    correct: 'Er erklärt, er habe das Buch.',
  },
];

function ProgressBar({ current, total, color }: { current: number; total: number; color: string }) {
  return (
    <div className="flex gap-1.5 w-full">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex-1 h-2 rounded-full"
          style={{ background: i < current ? "#00FF88" : i === current ? color : "rgba(255,255,255,0.12)" }} />
      ))}
    </div>
  );
}

function NextBtn({ onClick, label, color }: { onClick: () => void; label: string; color: string }) {
  return (
    <motion.button onClick={onClick}
      className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
      style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
      whileTap={{ scale: 0.97 }}>
      {label} <ChevronRight size={16} />
    </motion.button>
  );
}

// ─── Round 1: Direct vs Indirect pairs ────────────────────────────────────────
function Round1({ color, lbl, onNext , showTeach, setShowTeach } : { color: string; lbl: Record<string, string>; onNext: () => void  showTeach: boolean; setShowTeach: (v: boolean) => void; } {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= PAIRS.length;

  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round1Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round1Teach}</p>
        </div>
        <motion.button onClick={() => setShowTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      {PAIRS.map((pair, i) => {
        const open = revealed.has(i);
        return (
          <motion.div key={i} className="w-full rounded-2xl overflow-hidden"
            style={{ border: `2px solid ${open ? color : "rgba(255,255,255,0.1)"}` }}>
            <div className="p-3" style={{ background: `${color}12` }}>
              <span className="text-xs font-black px-2 py-0.5 rounded-full mr-2"
                style={{ background: `${color}33`, color }}>
                {lbl.direct}
              </span>
              <span className="text-white/80 text-sm font-semibold">{pair.emoji} {pair.direct}</span>
            </div>
            <motion.button
              className="w-full p-3 text-left"
              style={{ background: open ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)" }}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              whileTap={!open ? { scale: 0.98 } : {}}>
              {open ? (
                <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}>
                  <div>
                    <span className="text-xs font-black px-2 py-0.5 rounded-full mr-2"
                      style={{ background: "#FF950033", color: "#FF9500" }}>
                      {lbl.indirect}
                    </span>
                    <span className="text-white/80 text-sm font-semibold">{pair.indirect}</span>
                  </div>
                  <p className="text-xs font-bold mt-1" style={{ color: `${color}cc` }}>
                    {lbl.note}: {pair.change}
                  </p>
                </motion.div>
              ) : (
                <span className="text-white/30 text-xs">{lbl.tapToReveal} → {lbl.indirect}</span>
              )}
            </motion.button>
          </motion.div>
        );
      })}
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 2: Konjunktiv I forms table ────────────────────────────────────────
function Round2({ color, lbl, onNext , showTeach, setShowTeach } : { color: string; lbl: Record<string, string>; onNext: () => void  showTeach: boolean; setShowTeach: (v: boolean) => void; } {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const allRevealed = revealed.size >= KONJ1_TABLE.length;

  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round2Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round2Teach}</p>
        </div>
        <motion.button onClick={() => setShowTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="w-full rounded-2xl overflow-hidden" style={{ border: `2px solid ${color}33` }}>
        <div className="grid grid-cols-3 px-3 py-2 bg-white/5">
          <span className="text-white/40 text-xs font-bold">Pronomen</span>
          <span className="text-white/40 text-xs font-bold text-center">Indikativ</span>
          <span className="text-xs font-bold text-center" style={{ color }}>{lbl.conjI}</span>
        </div>
        {KONJ1_TABLE.map((row, i) => {
          const open = revealed.has(i);
          return (
            <motion.button key={i}
              className="w-full grid grid-cols-3 items-center px-3 py-2.5"
              style={{ background: open ? `${color}0F` : "transparent", borderTop: "1px solid rgba(255,255,255,0.06)" }}
              onClick={() => setRevealed(prev => new Set([...prev, i]))}
              whileTap={!open ? { scale: 0.98 } : {}}>
              <span className="text-white/70 text-xs font-bold">{row.pronoun}</span>
              <span className="text-white/50 text-xs text-center">{row.indikativ}</span>
              <span className="font-black text-sm text-center"
                style={{ color: open ? (row.special ? "#FF9500" : color) : "rgba(255,255,255,0.15)" }}>
                {open ? row.konjunktiv : "?"}
                {open && row.special && " ⬅️"}
              </span>
            </motion.button>
          );
        })}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <NextBtn onClick={onNext} label={lbl.next} color={color} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Round 3: DragToBucket sort ────────────────────────────────────────────────
function Round3({ color, lbl, onNext , showTeach, setShowTeach } : { color: string; lbl: Record<string, string>; onNext: () => void  showTeach: boolean; setShowTeach: (v: boolean) => void; } {
  const [done, setDone] = useState(false);
  const buckets = [
    { key: "direct", label: lbl.direct, icon: "💬" },
    { key: "indirect", label: lbl.indirect, icon: "📰" },
  ];

  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round3Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round3Teach}</p>
        </div>
        <motion.button onClick={() => setShowTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <DragToBucket
        words={BUCKET_SENTENCES}
        buckets={buckets}
        correctMap={BUCKET_CORRECT}
        color={color}
        onDone={(_allCorrect) => { setDone(true); setTimeout(onNext, 1200); }}
      />
      {done && <NextBtn onClick={onNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 4: Choose Konjunktiv I form ────────────────────────────────────────
function Round4({ color, lbl, wrongCountRef, onNext , showTeach, setShowTeach } : { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onNext: () => void  showTeach: boolean; setShowTeach: (v: boolean) => void; } {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = MCQ4[idx];
  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt !== item.correct) {
      wrongCountRef.current++;
    }
    setTimeout(() => {
      if (idx + 1 >= MCQ4.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 1000);
  };

  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round4Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round4Teach}</p>
        </div>
        <motion.button onClick={() => setShowTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 justify-center">
        {MCQ4.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.sentence} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-2xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <div className="flex items-center justify-center gap-2">
            <p className="text-white font-bold text-lg">{item.sentence}</p>
            <SpeakButton text={item.sentence} lang="de" size={16} />
          </div>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xs font-bold mt-2"
              style={{ color: selected === item.correct ? "#00FF88" : "#FF6B6B" }}>
              {selected === item.correct ? `✅ ${item.label}` : `❌ → ${item.correct}`}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-2 w-full flex-wrap">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="flex-1 py-3 rounded-xl font-black text-base min-w-16"
            style={{
              background: selected === opt ? (opt === item.correct ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 5: Identify correct indirect speech ─────────────────────────────────
function Round5({ color, lbl, wrongCountRef, onDone , showTeach, setShowTeach } : { color: string; lbl: Record<string, string>; wrongCountRef: React.MutableRefObject<number>; onDone: () => void  showTeach: boolean; setShowTeach: (v: boolean) => void; } {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = MCQ5[idx];
  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt !== item.correct) {
      wrongCountRef.current++;
    }
    setTimeout(() => {
      if (idx + 1 >= MCQ5.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, 1000);
  };

  if (showTeach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round5Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round5Teach}</p>
        </div>
        <motion.button onClick={() => setShowTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-black text-white text-center">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1 justify-center">
        {MCQ5.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={item.direct} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          <div className="w-full rounded-2xl p-4 mb-3 flex items-center justify-between"
            style={{ background: `${color}12`, border: `2px solid ${color}33` }}>
            <div className="flex-1">
              <span className="text-xs font-black px-2 py-0.5 rounded-full mr-2"
                style={{ background: `${color}33`, color }}>{lbl.direct}</span>
              <span className="text-white/80 text-sm font-semibold">{item.direct}</span>
            </div>
            <SpeakButton text={item.direct} lang="de" size={16} />
          </div>
          <div className="flex flex-col gap-2 w-full">
            {item.options.map(opt => (
              <motion.button key={opt} onClick={() => handleSelect(opt)}
                className="w-full px-4 py-3 rounded-xl font-semibold text-sm text-left"
                style={{
                  background: selected === opt ? (opt === item.correct ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : "rgba(255,255,255,0.06)",
                  border: `2px solid ${selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "rgba(255,255,255,0.15)"}`,
                  color: selected === opt ? (opt === item.correct ? "#00FF88" : "#FF6B6B") : "rgba(255,255,255,0.85)",
                }}
                whileTap={!selected ? { scale: 0.97 } : {}}>
                {opt}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const SpeechTransformExplorer = memo(function SpeechTransformExplorer({
  color, lang = "de", onDone,
}: {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
}) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const [showTeach, setShowTeach] = useState(true);
  const TOTAL_ROUNDS = 5;
  const wrongCountRef = useRef(0);
  const next = useCallback(() => setRound(r => r + 1), []);
  const finish = useCallback(() => {
    const score = Math.max(1, TOTAL_ROUNDS - Math.min(wrongCountRef.current, TOTAL_ROUNDS - 1));
    onDone(score, TOTAL_ROUNDS);
  }, [onDone]);

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-4 px-1">
      <ProgressBar current={round} total={TOTAL_ROUNDS} color={color} />
      <AnimatePresence mode="wait">
        <motion.div key={round}
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="w-full flex flex-col items-center gap-4">
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 3 && <Round4 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} showTeach={showTeach} setShowTeach={setShowTeach} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default SpeechTransformExplorer;
