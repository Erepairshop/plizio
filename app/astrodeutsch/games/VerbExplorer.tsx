"use client";
// VerbExplorer — Island i2: Verben (K2)
// Teaches: verb recognition, ich/du/er conjugation, Imperativ

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: "Verb Explorer",
    round1Title: "Find the Verb!",
    round1Hint: "Tap the action word (verb) in each sentence!",
    round1Teach: "A verb is an action word — something you DO! Like spielen (play), laufen (run), lesen (read), singen (sing). Verbs are the 'doing' words that show what's happening in a sentence!",
    round2Title: "Verb Conjugation",
    round2Hint: "See how verbs change — tap each form to hear it!",
    round2Teach: "Verbs change their ending depending on WHO does the action. 'Ich spiele' is different from 'du spielst' or 'er spielt'. The pronoun tells us which form to use!",
    round2Discovery: "💡 Verbs are action words! In German, the verb changes depending on who does the action: ich spiele, du spielst, er/sie spielt.",
    round3Title: "Fill in the Verb!",
    round3Hint: "Which form of the verb fits here?",
    round3Teach: "Look at the subject (who is doing the action) and choose the right verb form. If it says 'du', you need the du-form. If it says 'ich', you need the ich-form. Match them!",
    round4Title: "Commands!",
    round4Hint: "Tap to learn Imperativ — giving commands!",
    round4Teach: "When you give a command, the verb changes again! This is called the Imperativ. 'Lauf!' means run! 'Spiel!' means play! These are the order forms of verbs.",
    round5Title: "Verb Challenge",
    round5Hint: "Choose the correct verb form!",
    round5Teach: "Now you know all about verbs! Let's test what you've learned. Remember: verbs change depending on the subject, and commands have their own special form!",
    well: "Excellent!",
    next: "Next",
    finish: "Finished!",
    correct: "Correct!",
    tapToLearn: "Tap to see!",
    gotIt: "Got it!",
  },
  hu: {
    title: "Ige felfedező",
    round1Title: "Keresd az igét!",
    round1Hint: "Koppints a cselekvést kifejező szóra (igére) minden mondatban!",
    round1Teach: "Az ige egy cselekvésszó — valamit teszel! Mint a spielen (játszani), laufen (futni), lesen (olvasni), singen (énekelni). Az igék a 'tevés' szavak, amelyek azt mutatják, mi történik egy mondatban!",
    round2Title: "Igeragozás",
    round2Hint: "Nézd, hogyan változik az ige — koppints minden alakra, hogy halld!",
    round2Teach: "Az igék megváltoznak az utolsó szótagban attól függően, hogy KI végzi a cselekvést. 'Ich spiele' más, mint 'du spielst' vagy 'er spielt'. A névmás megmondja, melyik alakot kell használni!",
    round2Discovery: "💡 Az igék cselekvésszavak! A németben az ige változik attól függően, hogy ki végzi a cselekvést: ich spiele, du spielst, er/sie spielt.",
    round3Title: "Töltsd ki az igét!",
    round3Hint: "Az ige melyik alakja illik ide?",
    round3Teach: "Nézd meg a tárgyat (aki végzi a cselekvést) és válaszd ki a helyes igealakot. Ha 'du' van, akkor a du-alakot kell használni. Ha 'ich' van, akkor az ich-alakot. Párosítsd őket!",
    round4Title: "Parancsok!",
    round4Hint: "Koppints, hogy megtanuld a Felszólító módot — parancsok adása!",
    round4Teach: "Amikor parancsot adsz, az ige ismét megváltozik! Ezt Felszólító módnak hívjuk. 'Lauf!' azt jelenti, fuss! 'Spiel!' azt jelenti, játssz! Ezek az igék parancsforms-ai.",
    round5Title: "Ige kihívás",
    round5Hint: "Válaszd ki a helyes igealakot!",
    round5Teach: "Most már tudod az összes igét! Tesztelünk, mit tanultál. Emlékezz: az igék megváltoznak a tárgy alapján, és a parancsok saját speciális formájuk van!",
    well: "Kiváló!",
    next: "Tovább",
    finish: "Vége!",
    correct: "Helyes!",
    tapToLearn: "Koppints, hogy lásd!",
    gotIt: "Értem!",
  },
  de: {
    title: "Verben-Entdecker",
    round1Title: "Finde das Verb!",
    round1Hint: "Tippe auf das Tunwort (Verb) in jedem Satz!",
    round1Teach: "Ein Verb ist ein Tunwort — etwas, das du MACHST! Wie spielen (spielen), laufen (rennen), lesen (lesen), singen (singen). Verben sind die 'Mach'-Wörter, die zeigen, was in einem Satz passiert!",
    round2Title: "Verbkonjugation",
    round2Hint: "Sieh, wie Verben sich verändern — tippe auf jede Form um sie zu hören!",
    round2Teach: "Verben ändern ihre Endung je nachdem, WER die Handlung macht. 'Ich spiele' ist anders als 'du spielst' oder 'er spielt'. Das Pronomen sagt uns, welche Form wir benutzen sollen!",
    round2Discovery: "💡 Verben sind Tunwörter! Im Deutschen ändert sich das Verb je nachdem, wer die Handlung macht: ich spiele, du spielst, er/sie spielt.",
    round3Title: "Ergänze das Verb!",
    round3Hint: "Welche Form des Verbs passt hier?",
    round3Teach: "Schau dir das Subjekt an (wer macht die Handlung) und wähle die richtige Verbform. Wenn es 'du' sagt, brauchst du die du-Form. Wenn es 'ich' sagt, brauchst du die ich-Form. Passe sie an!",
    round4Title: "Befehle!",
    round4Hint: "Tippe, um den Imperativ zu lernen — Befehle geben!",
    round4Teach: "Wenn du einen Befehl gibst, ändert sich das Verb wieder! Das heißt Imperativ. 'Lauf!' bedeutet laufen! 'Spiel!' bedeutet spielen! Das sind die Befehlsformen von Verben.",
    round5Title: "Verb-Herausforderung",
    round5Hint: "Wähle die richtige Verbform!",
    round5Teach: "Jetzt kennst du alles über Verben! Lass uns testen, was du gelernt hast. Denk dran: Verben ändern sich je nachdem, wer es tut, und Befehle haben ihre eigene Spezialform!",
    well: "Ausgezeichnet!",
    next: "Weiter",
    finish: "Fertig!",
    correct: "Richtig!",
    tapToLearn: "Tippe um zu sehen!",
    gotIt: "Verstanden!",
  },
  ro: {
    title: "Exploratorul verbelor",
    round1Title: "Găsește verbul!",
    round1Hint: "Atinge cuvântul de acțiune (verbul) din fiecare propoziție!",
    round1Teach: "Un verb este un cuvânt de acțiune — ceva pe care îl FACI! Ca spielen (a juca), laufen (a fugi), lesen (a citi), singen (a cânta). Verbele sunt cuvintele 'de fapt' care arată ce se întâmplă într-o propoziție!",
    round2Title: "Conjugarea verbelor",
    round2Hint: "Vezi cum se schimbă verbele — atinge fiecare formă ca s-o auzi!",
    round2Teach: "Verbele își schimbă terminația în funcție de CINE face acțiunea. 'Ich spiele' este diferit de 'du spielst' sau 'er spielt'. Pronumele ne spune ce formă trebuie să folosim!",
    round2Discovery: "💡 Verbele sunt cuvinte de acțiune! În limba germană, verbul se schimbă în funcție de cine face acțiunea: ich spiele, du spielst, er/sie spielt.",
    round3Title: "Completează verbul!",
    round3Hint: "Ce formă a verbului se potrivește aici?",
    round3Teach: "Privește subiectul (cine face acțiunea) și alege forma corectă a verbului. Dacă spune 'du', trebuie forma du. Dacă spune 'ich', trebuie forma ich. Potrivește-le!",
    round4Title: "Comenzi!",
    round4Hint: "Atinge pentru a învăța Imperativul — a da comenzi!",
    round4Teach: "Când dai o comandă, verbul se schimbă din nou! Aceasta se numește Imperativ. 'Lauf!' înseamnă fugi! 'Spiel!' înseamnă joacă! Acestea sunt formele de comandă ale verbelor.",
    round5Title: "Provocare verbe",
    round5Hint: "Alege forma corectă a verbului!",
    round5Teach: "Acum știi totul despre verbe! Hai să testez ce ai învățat. Ține minte: verbele se schimbă în funcție de subiect, și comenzile au propria lor formă specială!",
    well: "Excelent!",
    next: "Înainte",
    finish: "Gata!",
    correct: "Corect!",
    tapToLearn: "Atinge pentru a vedea!",
    gotIt: "Am înțeles!",
  },
};

// Round 1: find the verb in sentences
const SENTENCES: { words: string[]; verbIdx: number }[] = [
  { words: ["Der", "Hund", "läuft", "schnell."], verbIdx: 2 },
  { words: ["Anna", "spielt", "im", "Garten."], verbIdx: 1 },
  { words: ["Das", "Kind", "liest", "ein", "Buch."], verbIdx: 2 },
  { words: ["Wir", "singen", "ein", "Lied."], verbIdx: 1 },
  { words: ["Die", "Katze", "schläft", "auf", "dem", "Sofa."], verbIdx: 2 },
];

// Round 2: conjugation table
const CONJUGATION_VERBS: {
  infinitiv: string; emoji: string;
  forms: { pronoun: string; form: string }[];
}[] = [
  {
    infinitiv: "spielen", emoji: "⚽",
    forms: [
      { pronoun: "ich", form: "spiele" },
      { pronoun: "du", form: "spielst" },
      { pronoun: "er/sie", form: "spielt" },
      { pronoun: "wir", form: "spielen" },
    ],
  },
  {
    infinitiv: "laufen", emoji: "🏃",
    forms: [
      { pronoun: "ich", form: "laufe" },
      { pronoun: "du", form: "läufst" },
      { pronoun: "er/sie", form: "läuft" },
      { pronoun: "wir", form: "laufen" },
    ],
  },
];
const PRONOUN_COLORS: Record<string, string> = {
  ich: "#3B82F6", du: "#EC4899", "er/sie": "#10B981", wir: "#F59E0B",
};

// Round 3: fill-in-the-blank conjugation
const FILL_INS: { sentence: string; blank: string; options: string[]; answer: string }[] = [
  { sentence: "Ich ___ Fußball.", blank: "spielen", options: ["spiele", "spielst", "spielt"], answer: "spiele" },
  { sentence: "Du ___ sehr schnell.", blank: "laufen", options: ["laufe", "läufst", "läuft"], answer: "läufst" },
  { sentence: "Er ___ ein Buch.", blank: "lesen", options: ["lese", "liest", "lesen"], answer: "liest" },
  { sentence: "Wir ___ ein Lied.", blank: "singen", options: ["singe", "singst", "singen"], answer: "singen" },
];

// Round 4: Imperativ
const IMPERATIV: { infinitiv: string; imperative: string; example: string; emoji: string }[] = [
  { infinitiv: "laufen", imperative: "Lauf!", example: "Lauf schnell!", emoji: "🏃" },
  { infinitiv: "lesen", imperative: "Lies!", example: "Lies das Buch!", emoji: "📚" },
  { infinitiv: "kommen", imperative: "Komm!", example: "Komm her!", emoji: "👋" },
  { infinitiv: "spielen", imperative: "Spiel!", example: "Spiel mit mir!", emoji: "⚽" },
];

// Round 5: verb form quiz
const VERB_QUIZ: { sentence: string; options: string[]; answer: string }[] = [
  { sentence: "Sie ___ gerne.", options: ["tanzt", "tanzen", "tanzst"], answer: "tanzt" },
  { sentence: "Ich ___ Hunger.", options: ["hab", "habe", "hat"], answer: "habe" },
  { sentence: "Du ___ gut.", options: ["malt", "malst", "male"], answer: "malst" },
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

// ─── Round 1: Find the verb ───────────────────────────────────────────────────
function Round1({ color, lbl, onNext, showTeach, onTeachDone }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; onTeachDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const sentence = SENTENCES[idx];

  const handleTap = (wordIdx: number) => {
    if (selected !== null) return;
    setSelected(wordIdx);
    setTimeout(() => {
      if (idx + 1 >= SENTENCES.length) setDone(true);
      else { setIdx(i => i + 1); setSelected(null); }
    }, 700);
  };

  if (showTeach) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round1Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round1Teach}</p>
        </div>
        <motion.button onClick={onTeachDone}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </motion.div>
    );
  }

  if (done) return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="text-5xl">🎯</div>
      <p className="text-white font-black text-xl">{lbl.well}</p>
      <NextBtn onClick={onNext} label={lbl.next} color={color} />
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round1Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round1Hint}</p>
      <div className="flex gap-1 mb-1">
        {SENTENCES.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-wrap gap-2 justify-center items-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          {sentence.words.map((word, wi) => {
            const isVerb = wi === sentence.verbIdx;
            const isSel = selected === wi;
            return (
              <motion.button key={wi} onClick={() => handleTap(wi)}
                className="px-3 py-2 rounded-xl font-black text-base"
                style={{
                  background: isSel ? (isVerb ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.15)") : "rgba(255,255,255,0.07)",
                  border: `2px solid ${isSel ? (isVerb ? "#00FF88" : "#FF2D78") : "rgba(255,255,255,0.15)"}`,
                  color: isSel ? (isVerb ? "#00FF88" : "#FF2D78") : "white",
                }}
                whileTap={selected === null ? { scale: 0.93 } : {}}>
                {word}
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Round 2: Conjugation table ───────────────────────────────────────────────
function Round2({ color, lbl, onNext, showTeach, onTeachDone }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; onTeachDone: () => void }) {
  const [verbIdx, setVerbIdx] = useState(0);
  const [tapped, setTapped] = useState<Set<number>>(new Set());
  const [done, setDone] = useState(false);
  const verb = CONJUGATION_VERBS[verbIdx];
  const allTapped = tapped.size === verb.forms.length;

  const handleNext = () => {
    if (verbIdx + 1 >= CONJUGATION_VERBS.length) setDone(true);
    else { setVerbIdx(v => v + 1); setTapped(new Set()); }
  };

  if (showTeach) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round2Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round2Teach}</p>
        </div>
        <motion.button onClick={onTeachDone}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </motion.div>
    );
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-2xl px-4 py-3 text-center"
          style={{ background: "rgba(180,77,255,0.1)", border: "2px solid rgba(180,77,255,0.3)" }}>
          <p className="text-[#B44DFF] font-black text-sm">{lbl.round2Discovery}</p>
        </motion.div>
        <NextBtn onClick={onNext} label={lbl.next} color={color} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round2Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round2Hint}</p>
      <div className="flex gap-1 mb-1">
        {CONJUGATION_VERBS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < verbIdx ? "#00FF88" : i === verbIdx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <span className="text-4xl">{verb.emoji}</span>
        <div>
          <p className="text-white/50 text-xs font-bold">Infinitiv</p>
          <p className="text-2xl font-black text-white">{verb.infinitiv}</p>
        </div>
        <SpeakButton text={verb.infinitiv} lang="de" size={18} />
      </div>
      <div className="grid grid-cols-2 gap-2 w-full">
        {verb.forms.map((f, i) => {
          const isTapped = tapped.has(i);
          const col = PRONOUN_COLORS[f.pronoun] ?? color;
          return (
            <motion.button key={i}
              onClick={() => {
                if (!isTapped) setTapped(prev => new Set([...prev, i]));
              }}
              className="rounded-2xl p-3 flex flex-col items-center gap-1"
              style={{
                background: isTapped ? `${col}22` : "rgba(255,255,255,0.05)",
                border: `2px solid ${isTapped ? col : "rgba(255,255,255,0.12)"}`,
              }}
              whileTap={!isTapped ? { scale: 0.95 } : {}}>
              <span className="text-xs font-bold" style={{ color: col }}>{f.pronoun}</span>
              <span className="text-xl font-black" style={{ color: isTapped ? col : "rgba(255,255,255,0.3)" }}>
                {isTapped ? f.form : "?"}
              </span>
              {isTapped && <SpeakButton text={`${f.pronoun} ${f.form}`} lang="de" size={12} />}
            </motion.button>
          );
        })}
      </div>
      {allTapped && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 3: Fill-in conjugation ────────────────────────────────────────────
function Round3({
  color,
  lbl,
  onNext,
  wrongCountRef,
  showTeach,
  onTeachDone,
}: {
  color: string;
  lbl: Record<string, string>;
  onNext: () => void;
  wrongCountRef: React.MutableRefObject<number>;
  showTeach: boolean;
  onTeachDone: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = FILL_INS[idx];

  const handleSelect = (opt: string) => {
    if (selected) return;
    const isCorrect = opt === item.answer;
    if (!isCorrect) {
      wrongCountRef.current++;
    }
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= FILL_INS.length) onNext();
      else { setIdx(i => i + 1); setSelected(null); }
    }, isCorrect ? 800 : 1000);
  };

  if (showTeach) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round3Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round3Teach}</p>
        </div>
        <motion.button onClick={onTeachDone}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round3Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round3Hint}</p>
      <div className="flex gap-1 mb-1">
        {FILL_INS.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-xl font-black text-white">
            {item.sentence.replace("___", selected ? `[${selected}]` : "___")}
          </p>
          {selected && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="mt-1 text-sm font-bold"
              style={{ color: selected === item.answer ? "#00FF88" : "#FF2D78" }}>
              {selected === item.answer ? "✅ " + lbl.correct : "→ " + item.answer}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="w-full py-3.5 rounded-2xl font-black text-lg"
            style={{
              background: selected === opt
                ? (opt === item.answer ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.15)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt
                ? (opt === item.answer ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.answer ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.97 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Round 4: Imperativ ───────────────────────────────────────────────────────
function Round4({ color, lbl, onNext, showTeach, onTeachDone }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach: boolean; onTeachDone: () => void }) {
  const [idx, setIdx] = useState(0);
  const [tapped, setTapped] = useState(false);
  const item = IMPERATIV[idx];

  const handleNext = () => {
    if (idx + 1 >= IMPERATIV.length) onNext();
    else { setIdx(i => i + 1); setTapped(false); }
  };

  if (showTeach) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round4Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round4Teach}</p>
        </div>
        <motion.button onClick={onTeachDone}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round4Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round4Hint}</p>
      <div className="flex gap-1 mb-1">
        {IMPERATIV.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-5 flex flex-col items-center gap-3"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <span className="text-5xl">{item.emoji}</span>
          <div className="flex items-center gap-2">
            <p className="text-white/60 text-sm font-bold">Infinitiv: <span className="text-white">{item.infinitiv}</span></p>
          </div>
          <motion.div
            className="text-center"
            animate={{ scale: tapped ? [1, 1.1, 1] : 1 }}>
            <p className="text-3xl font-black" style={{ color: tapped ? color : "rgba(255,255,255,0.2)" }}>
              {tapped ? item.imperative : "?"}
            </p>
            {tapped && (
              <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 justify-center mt-1">
                <p className="text-white/60 text-sm">{item.example}</p>
                <SpeakButton text={item.example} lang="de" size={14} />
              </motion.div>
            )}
          </motion.div>
          {!tapped && (
            <motion.button onClick={() => setTapped(true)}
              className="mt-2 px-6 py-2.5 rounded-xl font-black text-sm"
              style={{ background: `${color}22`, border: `2px solid ${color}55`, color }}
              whileTap={{ scale: 0.95 }}>
              {lbl.tapToLearn}
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
      {tapped && <NextBtn onClick={handleNext} label={lbl.next} color={color} />}
    </div>
  );
}

// ─── Round 5: Verb quiz ───────────────────────────────────────────────────────
function Round5({
  color,
  lbl,
  onDone,
  wrongCountRef,
  showTeach,
  onTeachDone,
}: {
  color: string;
  lbl: Record<string, string>;
  onDone: () => void;
  wrongCountRef: React.MutableRefObject<number>;
  showTeach: boolean;
  onTeachDone: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = VERB_QUIZ[idx];

  const handleSelect = (opt: string) => {
    if (selected) return;
    const isCorrect = opt === item.answer;
    if (!isCorrect) {
      wrongCountRef.current++;
    }
    setSelected(opt);
    setTimeout(() => {
      if (idx + 1 >= VERB_QUIZ.length) onDone();
      else { setIdx(i => i + 1); setSelected(null); }
    }, isCorrect ? 800 : 1000);
  };

  if (showTeach) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round5Title}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">{lbl.round5Teach}</p>
        </div>
        <motion.button onClick={onTeachDone}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <p className="text-2xl font-black text-white">{lbl.round5Title}</p>
      <p className="text-white/60 text-xs font-bold text-center">{lbl.round5Hint}</p>
      <div className="flex gap-1 mb-1">
        {VERB_QUIZ.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="w-full rounded-3xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
          <p className="text-xl font-black text-white">{item.sentence}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-2 w-full">
        {item.options.map(opt => (
          <motion.button key={opt} onClick={() => handleSelect(opt)}
            className="w-full py-3.5 rounded-2xl font-black text-lg"
            style={{
              background: selected === opt
                ? (opt === item.answer ? "rgba(0,255,136,0.2)" : "rgba(255,45,120,0.15)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt
                ? (opt === item.answer ? "#00FF88" : "#FF2D78")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === opt ? (opt === item.answer ? "#00FF88" : "#FF2D78") : "white",
            }}
            whileTap={!selected ? { scale: 0.97 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const VerbExplorer = memo(function VerbExplorer({
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

  // Error tracking
  const wrongCountRef = useRef(0);

  const next = useCallback(() => { setRound(r => r + 1); setShowTeach(true); }, []);
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
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
          {round === 2 && <Round3 color={color} lbl={lbl} onNext={next} wrongCountRef={wrongCountRef} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
          {round === 4 && <Round5 color={color} lbl={lbl} onDone={finish} wrongCountRef={wrongCountRef} showTeach={showTeach} onTeachDone={() => setShowTeach(false)} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default VerbExplorer;
