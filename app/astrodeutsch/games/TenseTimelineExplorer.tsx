"use client";
import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import TapToHighlight from "@/app/astrodeutsch/games/blocks/TapToHighlight";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

const LABELS: Record<string, Record<string, string>> = {
  de: {
    title: "Zeiten & Kasus",
    round1: "Die Zeitlinie",
    round2: "Perfekt bilden",
    round3: "Wann war das?",
    round4: "Akkusativ: Wen oder was?",
    round5: "Perfekt-Quiz!",
    tapReveal: "Tippe um den Satz zu sehen",
    next: "Weiter →",
    done: "Fertig! 🌟",
    past: "Vergangenheit",
    present: "Gegenwart",
    future: "Zukunft",
    tapZone: "Tippe die richtige Zeitzone",
    haben: "mit haben",
    sein: "mit sein",
    pickPerfekt: "Welches Perfekt ist richtig?",
    tapAkkusativ: "Tippe das Akkusativobjekt",
    checkLabel: "Prüfen ✓",
    gotIt: "Ich verstehe! Weiter →",
    discovery: "💡 Deutsch hat 6 Zeitformen! Präsens (jetzt), Präteritum (einfache Vergangenheit), Perfekt (gesprochene Vergangenheit), Plusquamperfekt (Vorvergangenheit), Futur I (Zukunft), Futur II (Vorzukunft).",
  },
  en: {
    title: "Tenses & Case",
    round1: "The timeline",
    round2: "Forming Perfekt",
    round3: "When was that?",
    round4: "Accusative: Whom or what?",
    round5: "Perfekt quiz!",
    tapReveal: "Tap to see the sentence",
    next: "Next →",
    done: "Done! 🌟",
    past: "Past",
    present: "Present",
    future: "Future",
    tapZone: "Tap the correct time zone",
    haben: "with haben",
    sein: "with sein",
    pickPerfekt: "Which Perfekt is correct?",
    tapAkkusativ: "Tap the accusative object",
    checkLabel: "Check ✓",
    gotIt: "I understand! Next →",
    discovery: "💡 German has 6 tenses! Präsens (now), Präteritum (simple past), Perfekt (spoken past), Plusquamperfekt (past perfect), Futur I (future), Futur II (future perfect).",
  },
  hu: {
    title: "Igeidők & eset",
    round1: "Az idővonal",
    round2: "Perfekt képzése",
    round3: "Mikor volt?",
    round4: "Akkuzatívusz: Kit vagy mit?",
    round5: "Perfekt kvíz!",
    tapReveal: "Koppints a mondat megtekintéséhez",
    next: "Tovább →",
    done: "Kész! 🌟",
    past: "Múlt",
    present: "Jelen",
    future: "Jövő",
    tapZone: "Koppints a helyes időzónára",
    haben: "haben-nel",
    sein: "sein-nel",
    pickPerfekt: "Melyik Perfekt helyes?",
    tapAkkusativ: "Koppints a tárgyra",
    checkLabel: "Ellenőrzés ✓",
    gotIt: "Megértettem! Tovább →",
    discovery: "💡 A németnek 6 igeideje van! Präsens (most), Präteritum (egyszerű múlt), Perfekt (beszélt múlt), Plusquamperfekt (előmúlt), Futur I (jövő), Futur II (jövő I előtt).",
  },
  ro: {
    title: "Timpuri & Caz",
    round1: "Linia timpului",
    round2: "Formarea Perfectului",
    round3: "Când a fost?",
    round4: "Acuzativ: Pe cine sau ce?",
    round5: "Quiz Perfekt!",
    tapReveal: "Apasă pentru a vedea propoziția",
    next: "Mai departe →",
    done: "Gata! 🌟",
    past: "Trecut",
    present: "Prezent",
    future: "Viitor",
    tapZone: "Apasă zona temporală corectă",
    haben: "cu haben",
    sein: "cu sein",
    pickPerfekt: "Care Perfekt este corect?",
    tapAkkusativ: "Apasă obiectul la acuzativ",
    checkLabel: "Verifică ✓",
    gotIt: "Am înțeles! Mai departe →",
    discovery: "💡 Germana are 6 timpuri! Präsens (acum), Präteritum (trecut simplu), Perfekt (trecut vorbit), Plusquamperfekt (trecut perfect), Futur I (viitor), Futur II (viitor perfect).",
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

const TIMELINE_ZONES = [
  {
    key: "past",
    example: "Ich habe gespielt.",
    emoji: "⬅️",
  },
  {
    key: "present",
    example: "Ich spiele.",
    emoji: "⏺",
  },
  {
    key: "future",
    example: "Ich werde spielen.",
    emoji: "➡️",
  },
];

function Round1({ color, lbl, onNext, showTeach = false }: { color: string; lbl: Record<string, string>; onNext: () => void; showTeach?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  const [teach, setTeach] = useState(showTeach);
  const zoneColors: Record<string, string> = {
    past: "#6366f1",
    present: color,
    future: "#f59e0b",
  };
  const zoneLabels: Record<string, string> = {
    past: lbl.past,
    present: lbl.present,
    future: lbl.future,
  };

  if (teach) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-xl font-black text-white">{lbl.round1}</p>
        <div className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4">
          <p className="text-sm text-white/80 leading-relaxed">Deutsch hat drei Zeitbereiche: Vergangenheit (Ich bin gegangen), Gegenwart (Ich gehe) und Zukunft (Ich werde gehen). Die Zeitlinie hilft dir zu verstehen, wann etwas passiert!</p>
        </div>
        <motion.button onClick={() => setTeach(false)}
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
          whileTap={{ scale: 0.97 }}>
          {lbl.gotIt} <ChevronRight size={16} />
        </motion.button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round1}</div>
      {/* Timeline SVG */}
      <div className="w-full px-2">
        <svg viewBox="0 0 300 60" className="w-full" style={{ maxHeight: 64 }}>
          <line x1="10" y1="30" x2="290" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          {[{ cx: 60, key: "past" }, { cx: 150, key: "present" }, { cx: 240, key: "future" }].map(z => (
            <g key={z.key} onClick={() => setActive(active === z.key ? null : z.key)} style={{ cursor: "pointer" }}>
              <circle cx={z.cx} cy={30} r={active === z.key ? 14 : 10}
                fill={zoneColors[z.key]} opacity={active === z.key ? 1 : 0.5}
                style={{ transition: "all 0.2s" }} />
              <text x={z.cx} y={52} textAnchor="middle" fontSize={8} fill="rgba(255,255,255,0.7)"
                fontWeight="bold">{zoneLabels[z.key]}</text>
            </g>
          ))}
          <polygon points="285,26 295,30 285,34" fill="rgba(255,255,255,0.3)" />
        </svg>
      </div>
      <div className="flex flex-col gap-2 w-full px-1">
        {TIMELINE_ZONES.map(z => {
          const zc = zoneColors[z.key];
          const zl = zoneLabels[z.key];
          const isActive = active === z.key;
          return (
            <motion.button key={z.key}
              className="w-full flex items-center gap-3 p-3 rounded-2xl border-2"
              style={{
                borderColor: isActive ? zc : "rgba(255,255,255,0.12)",
                background: isActive ? `${zc}18` : "rgba(255,255,255,0.04)",
              }}
              whileTap={{ scale: 0.97 }} onClick={() => setActive(active === z.key ? null : z.key)}>
              <span>{z.emoji}</span>
              <span className="font-bold text-sm" style={{ color: zc }}>{zl}</span>
              {isActive && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="text-sm text-white/80 italic ml-auto">{z.example}</motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
      <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
        style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
    </div>
  );
}

const PERFEKT_EXAMPLES = [
  { infinitiv: "spielen", perfekt: "hat gespielt", type: "haben" },
  { infinitiv: "gehen", perfekt: "ist gegangen", type: "sein" },
  { infinitiv: "lesen", perfekt: "hat gelesen", type: "haben" },
  { infinitiv: "kommen", perfekt: "ist gekommen", type: "sein" },
];

function Round2({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const tap = (i: number) => setRevealed(prev => { const n = new Set(prev); n.add(i); return n; });
  const habenColor = "#3b82f6";
  const seinColor = "#10b981";
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round2}</div>
      <div className="flex gap-2">
        <span className="text-xs font-bold px-2 py-1 rounded-lg"
          style={{ background: `${habenColor}22`, color: habenColor }}>{lbl.haben}</span>
        <span className="text-xs font-bold px-2 py-1 rounded-lg"
          style={{ background: `${seinColor}22`, color: seinColor }}>{lbl.sein}</span>
      </div>
      <div className="w-full flex flex-col gap-2 px-1">
        {PERFEKT_EXAMPLES.map((e, i) => {
          const tc = e.type === "haben" ? habenColor : seinColor;
          return (
            <motion.button key={e.infinitiv}
              className="w-full flex items-center gap-3 p-3 rounded-2xl border-2 text-left"
              style={{
                borderColor: revealed.has(i) ? tc : "rgba(255,255,255,0.12)",
                background: revealed.has(i) ? `${tc}18` : "rgba(255,255,255,0.04)",
              }}
              whileTap={{ scale: 0.97 }} onClick={() => tap(i)}>
              <span className="text-white/80 font-bold flex-1">{e.infinitiv}</span>
              {revealed.has(i) ? (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="font-black text-sm" style={{ color: tc }}>→ {e.perfekt}</motion.span>
              ) : (
                <span className="text-white/30 text-xs">{lbl.tapReveal}</span>
              )}
            </motion.button>
          );
        })}
      </div>
      {revealed.size === PERFEKT_EXAMPLES.length && (
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-8 py-3 rounded-2xl text-white font-extrabold text-base shadow-lg"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>{lbl.next}</motion.button>
      )}
    </div>
  );
}

const TIME_SORT = [
  { sentence: "Ich habe gestern gespielt.", correct: "past" },
  { sentence: "Sie spielt jetzt Klavier.", correct: "present" },
  { sentence: "Wir werden morgen fahren.", correct: "future" },
];

function Round3({
  color,
  lbl,
  wrongCountRef,
  onNext,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onNext: () => void;
}) {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = TIME_SORT[qi];
  const zoneColors: Record<string, string> = { past: "#6366f1", present: color, future: "#f59e0b" };
  const zoneLabels: Record<string, string> = { past: lbl.past, present: lbl.present, future: lbl.future };

  const handleSelect = (key: string) => {
    if (revealed) return;
    setSelected(key);
    setRevealed(true);
    if (key !== q.correct) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: key, correctAnswer: q.correct, topic: "Verb Tenses", lang: "de" });
    }
  };
  const handleNext = () => {
    if (qi + 1 >= TIME_SORT.length) onNext();
    else {
      setQi(qi + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round3}</div>
      <div className="px-4 py-2 rounded-2xl border text-sm font-semibold text-white/85 text-center"
        style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}>{q.sentence}</div>
      <p className="text-xs text-white/60">{lbl.tapZone}</p>
      <div className="flex gap-2 justify-center">
        {["past", "present", "future"].map(zone => {
          const zc = zoneColors[zone];
          let bg = "rgba(255,255,255,0.08)", border = "rgba(255,255,255,0.2)";
          if (revealed) {
            if (zone === q.correct) { bg = "#22c55e33"; border = "#22c55e"; }
            else if (selected === zone) { bg = "#ef444433"; border = "#ef4444"; }
          } else if (selected === zone) { bg = `${zc}33`; border = zc; }
          return (
            <motion.button key={zone}
              className="px-4 py-2 rounded-xl font-bold text-sm border-2 text-white"
              style={{ background: bg, borderColor: border }}
              whileTap={{ scale: 0.92 }} onClick={() => handleSelect(zone)}>{zoneLabels[zone]}</motion.button>
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

const AKK_SENTENCES = [
  { sentence: "Ich esse einen Apfel.", correctIndices: [2, 3] },
  { sentence: "Sie liest ein Buch.", correctIndices: [2, 3] },
  { sentence: "Er kauft eine Jacke.", correctIndices: [2, 3] },
  { sentence: "Wir sehen den Film.", correctIndices: [2, 3] },
];

function Round4({ color, lbl, onNext }: { color: string; lbl: Record<string, string>; onNext: () => void }) {
  const akkColor = "#f59e0b";
  const [si, setSi] = useState(0);
  const handleDone = (_c: boolean) => {
    if (si + 1 >= AKK_SENTENCES.length) onNext();
    else setSi(si + 1);
  };
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round4}</div>
      <TapToHighlight
        key={`akk-${si}`}
        sentence={AKK_SENTENCES[si].sentence}
        correctIndices={AKK_SENTENCES[si].correctIndices}
        color={akkColor}
        label={lbl.tapAkkusativ}
        checkLabel={lbl.checkLabel}
        onDone={handleDone}
      />
    </div>
  );
}

const PERFEKT_QUIZ = [
  {
    verb: "spielen",
    options: ["ist gespielt", "hat gespielt", "hat spielen"],
    correct: 1,
  },
  {
    verb: "fahren",
    options: ["hat gefahren", "ist gefahren", "ist fahren"],
    correct: 1,
  },
  {
    verb: "schreiben",
    options: ["hat geschrieben", "ist geschrieben", "hat geschreibt"],
    correct: 0,
  },
];

function Round5({
  color,
  lbl,
  wrongCountRef,
  onDone,
}: {
  color: string;
  lbl: Record<string, string>;
  wrongCountRef: React.MutableRefObject<number>;
  onDone: () => void;
}) {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const q = PERFEKT_QUIZ[qi];

  const handleSelect = (i: number) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i !== q.correct) {
      wrongCountRef.current++;
      fireWrongAnswer({ question: "", wrongAnswer: String(i), correctAnswer: String(q.correct), topic: "Verb Tenses", lang: "de" });
    }
  };
  const handleNext = () => {
    if (qi + 1 >= PERFEKT_QUIZ.length) onDone();
    else {
      setQi(qi + 1);
      setSelected(null);
      setRevealed(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="text-center px-4 py-2 rounded-xl text-sm font-semibold text-white/80"
        style={{ background: `${color}22` }}>{lbl.round5}</div>
      <p className="text-sm font-bold text-white/80">{lbl.pickPerfekt}</p>
      <div className="flex items-center justify-center gap-2">
        <div className="text-xl font-black" style={{ color }}>{q.verb}</div>
        <SpeakButton text={q.verb} lang="de" size={16} />
      </div>
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
          {qi + 1 >= PERFEKT_QUIZ.length ? lbl.done : lbl.next}
        </motion.button>
      )}
    </div>
  );
}

const TenseTimelineExplorer = memo(function TenseTimelineExplorer({
  color, lang = "de", onDone,
}: { color: string; lang?: string; onDone: (score: number, total: number) => void }) {
  const lbl = LABELS[lang] ?? LABELS.de;
  const [round, setRound] = useState(0);
  const [showTeach, setShowTeach] = useState(true);
  const TOTAL_ROUNDS = 5;
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
        <motion.div key={round} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.22 }}
          className="w-full flex flex-col items-center gap-4">
          {round === 0 && <Round1 color={color} lbl={lbl} onNext={next} showTeach={showTeach} />}
          {round === 1 && <Round2 color={color} lbl={lbl} onNext={next} />}
          {round === 2 && <Round3 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onNext={next} />}
          {round === 3 && <Round4 color={color} lbl={lbl} onNext={next} />}
          {round === 4 && <Round5 color={color} lbl={lbl} wrongCountRef={wrongCountRef} onDone={finish} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});
export default TenseTimelineExplorer;
