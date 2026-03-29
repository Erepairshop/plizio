'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TeacherNoteProps {
  visible: boolean;
  playerName: string;
  percentage: number;
  countryCode?: string;
}

// ─── Language helper ──────────────────────────────────────────────
type Lang = 'DE' | 'EN' | 'HU' | 'RO';
function getLang(cc?: string): Lang {
  if (cc === 'US' || cc === 'GB') return 'EN';
  if (cc === 'DE' || cc === 'AT' || cc === 'CH') return 'DE';
  if (cc === 'RO') return 'RO';
  return 'HU';
}

// ─── Messages per language ────────────────────────────────────────
const MESSAGES: Record<Lang, { excellent: ((n: string) => string)[]; good: ((n: string) => string)[]; improve: ((n: string) => string)[] }> = {
  DE: {
    excellent: [
      (n) => `Bravo, ${n}! ✨ Ausgezeichnet!`,
      (n) => `${n}, du bist ein Mathegenie! 🧠`,
      (n) => `Wunderbar, ${n}! Ich bin so stolz! 🌟`,
      (n) => `Fantastisch, ${n}! Weiter so! 🚀`,
      (n) => `Super gemacht, ${n}! Top-Leistung! 🏆`,
      (n) => `Klasse, ${n}! Du hast alles drauf! 💫`,
      (n) => `Sehr gut, ${n}! Eine echte Spitzenleistung! ⭐`,
    ],
    good: [
      (n) => `Gut gemacht, ${n}! Üb weiter! 📚`,
      (n) => `${n}, du bist auf dem richtigen Weg! 🌈`,
      (n) => `Nicht schlecht, ${n}! Du kannst noch mehr! 💪`,
      (n) => `Weiter so, ${n}! Du wirst immer besser! 📈`,
      (n) => `Prima, ${n}! Ich glaube an dich! 🌻`,
      (n) => `Ordentlich, ${n}! Ein bisschen mehr üben! 🎯`,
      (n) => `Brav gemacht, ${n}! Du schaffst es! 🌺`,
    ],
    improve: [
      (n) => `Üb weiter, ${n}! Du schaffst das! 💪`,
      (n) => `Nicht aufgeben, ${n}! Jeder lernt! 🌱`,
      (n) => `${n}, versuche es nochmal! Ich glaube an dich! 🌟`,
      (n) => `Kopf hoch, ${n}! Beim nächsten Mal klappt es! 🌈`,
      (n) => `${n}, üben macht den Meister! Weiter so! 📚`,
      (n) => `Kein Problem, ${n}! Wir üben zusammen! 🤝`,
      (n) => `${n}, du gibst nicht auf! Das ist toll! 🌻`,
    ],
  },
  EN: {
    excellent: [
      (n) => `Bravo, ${n}! ✨ Outstanding!`,
      (n) => `${n}, you're a math genius! 🧠`,
      (n) => `Wonderful, ${n}! I'm so proud! 🌟`,
      (n) => `Fantastic, ${n}! Keep it up! 🚀`,
      (n) => `Great work, ${n}! Top performance! 🏆`,
      (n) => `Excellent, ${n}! You've got it all! 💫`,
      (n) => `Very well done, ${n}! A true star! ⭐`,
    ],
    good: [
      (n) => `Good job, ${n}! Keep practicing! 📚`,
      (n) => `${n}, you're on the right track! 🌈`,
      (n) => `Not bad, ${n}! You can do even more! 💪`,
      (n) => `Keep going, ${n}! You're improving! 📈`,
      (n) => `Nice work, ${n}! I believe in you! 🌻`,
      (n) => `Solid effort, ${n}! A little more practice! 🎯`,
      (n) => `Well done, ${n}! You can do it! 🌺`,
    ],
    improve: [
      (n) => `Keep practicing, ${n}! You'll get there! 💪`,
      (n) => `Don't give up, ${n}! Everyone learns! 🌱`,
      (n) => `${n}, try again! I believe in you! 🌟`,
      (n) => `Chin up, ${n}! Next time will be better! 🌈`,
      (n) => `${n}, practice makes perfect! Keep going! 📚`,
      (n) => `No problem, ${n}! We'll practice together! 🤝`,
      (n) => `${n}, you didn't give up! That's great! 🌻`,
    ],
  },
  HU: {
    excellent: [
      (n) => `Brávó, ${n}! ✨ Remek munka!`,
      (n) => `${n}, te igazi matek zseni vagy! 🧠`,
      (n) => `Csodálatos, ${n}! Nagyon büszke vagyok rád! 🌟`,
      (n) => `Fantasztikus, ${n}! Csak így tovább! 🚀`,
      (n) => `Szuper, ${n}! Kiváló teljesítmény! 🏆`,
      (n) => `Nagyszerű, ${n}! Mindent tud! 💫`,
      (n) => `Nagyon jó, ${n}! Valódi sztárteljesítmény! ⭐`,
    ],
    good: [
      (n) => `Jó munka, ${n}! Gyakorolj tovább! 📚`,
      (n) => `${n}, jó úton jársz! 🌈`,
      (n) => `Nem rossz, ${n}! Még több is kitelik tőled! 💪`,
      (n) => `Csak így tovább, ${n}! Egyre jobb leszel! 📈`,
      (n) => `Szép, ${n}! Hiszek benned! 🌻`,
      (n) => `Rendesen, ${n}! Egy kicsit még gyakorolj! 🎯`,
      (n) => `Ügyesen, ${n}! Sikerülni fog! 🌺`,
    ],
    improve: [
      (n) => `Gyakorolj tovább, ${n}! Sikerülni fog! 💪`,
      (n) => `Ne add fel, ${n}! Mindenki tanul! 🌱`,
      (n) => `${n}, próbáld meg újra! Hiszek benned! 🌟`,
      (n) => `Tartsd a fejed, ${n}! Legközelebb menni fog! 🌈`,
      (n) => `${n}, a gyakorlat teszi a mestert! 📚`,
      (n) => `Semmi gond, ${n}! Együtt tanulunk! 🤝`,
      (n) => `${n}, nem adtad fel! Ez nagyszerű! 🌻`,
    ],
  },
  RO: {
    excellent: [
      (n) => `Bravo, ${n}! ✨ Excelent!`,
      (n) => `${n}, ești un geniu la matematică! 🧠`,
      (n) => `Minunat, ${n}! Sunt atât de mândru! 🌟`,
      (n) => `Fantastic, ${n}! Continuă tot așa! 🚀`,
      (n) => `Super, ${n}! Performanță de top! 🏆`,
      (n) => `Excelent, ${n}! Le știi pe toate! 💫`,
      (n) => `Foarte bine, ${n}! O adevărată stea! ⭐`,
    ],
    good: [
      (n) => `Bine, ${n}! Continuă să exersezi! 📚`,
      (n) => `${n}, ești pe drumul cel bun! 🌈`,
      (n) => `Nu e rău, ${n}! Poți și mai mult! 💪`,
      (n) => `Continuă, ${n}! Te îmbunătățești! 📈`,
      (n) => `Frumos, ${n}! Cred în tine! 🌻`,
      (n) => `Corect, ${n}! Mai puțin exercițiu! 🎯`,
      (n) => `Bun, ${n}! Poți reuși! 🌺`,
    ],
    improve: [
      (n) => `Exersează, ${n}! O să reușești! 💪`,
      (n) => `Nu renunța, ${n}! Toți învățăm! 🌱`,
      (n) => `${n}, mai încearcă! Cred în tine! 🌟`,
      (n) => `Ține capul sus, ${n}! Data viitoare va fi mai bine! 🌈`,
      (n) => `${n}, practica face perfectul! 📚`,
      (n) => `Nicio problemă, ${n}! Exersăm împreună! 🤝`,
      (n) => `${n}, nu ai renunțat! Asta e grozav! 🌻`,
    ],
  },
};

const NOTE_LABELS: Record<Lang, Record<number, string>> = {
  DE: { 1: 'Sehr gut', 2: 'Gut', 3: 'Befriedigend', 4: 'Ausreichend', 5: 'Mangelhaft', 6: 'Ungenügend' },
  EN: { 1: 'Excellent', 2: 'Good', 3: 'Satisfactory', 4: 'Adequate', 5: 'Poor', 6: 'Failing' },
  HU: { 1: 'Jeles', 2: 'Jó', 3: 'Közepes', 4: 'Elégséges', 5: 'Elégtelen', 6: 'Elégtelen' },
  RO: { 1: 'Excelent', 2: 'Bine', 3: 'Satisfăcător', 4: 'Suficient', 5: 'Insuficient', 6: 'Insuficient' },
};

const NOTE_WORD: Record<Lang, string> = { DE: 'Note', EN: 'Grade', HU: 'Jegy', RO: 'Nota' };
const TEACHER_LABEL: Record<Lang, string> = { DE: 'Lehrerin', EN: 'Teacher', HU: 'Tanár', RO: 'Profesor' };
const WRITING_LABEL: Record<Lang, string> = { DE: 'Lehrerin schreibt...', EN: 'Teacher is writing...', HU: 'A tanár ír...', RO: 'Profesorul scrie...' };
const STUDENT_FALLBACK: Record<Lang, string> = { DE: 'Schüler', EN: 'Student', HU: 'Tanuló', RO: 'Elev' };
const DATE_LOCALE: Record<Lang, string> = { DE: 'de-DE', EN: 'en-US', HU: 'hu-HU', RO: 'ro-RO' };
const DIAGNOSIS_LABEL: Record<Lang, string> = { DE: 'Diagnose', EN: 'Diagnosis', HU: 'Diagnózis', RO: 'Diagnostic' };
const NEXT_STEP_LABEL: Record<Lang, string> = { DE: 'Nächster Schritt', EN: 'Next step', HU: 'Következő lépés', RO: 'Pasul următor' };

const DIAGNOSIS: Record<
  Lang,
  {
    excellent: { summary: string; next: string };
    good: { summary: string; next: string };
    improve: { summary: string; next: string };
  }
> = {
  DE: {
    excellent: {
      summary: 'Sehr sicher gearbeitet. Die Grundlagen sitzen und du löst Aufgaben schon mit hoher Genauigkeit.',
      next: 'Wiederhole nur die wenigen Fehler und gehe danach zu schwierigeren Aufgaben oder einem neuen Thema weiter.',
    },
    good: {
      summary: 'Solide Leistung. Das Verständnis ist da, aber bei Genauigkeit und Routine gibt es noch kleine Lücken.',
      next: 'Wiederhole die fehlerhaften Aufgabentypen noch einmal langsam und achte besonders auf unsichere Stellen.',
    },
    improve: {
      summary: 'Die Grundlagen sind noch nicht stabil. Mehrere Fehler zeigen, dass wichtige Regeln oder Muster noch nicht sicher sitzen.',
      next: 'Gehe zuerst zurück zu einfacheren Übungen, kläre die Grundregel und mache danach einen kürzeren Test erneut.',
    },
  },
  EN: {
    excellent: {
      summary: 'Very secure work. The foundations are in place and you are solving tasks with strong accuracy.',
      next: 'Review the few mistakes you made, then move on to harder practice or a new topic.',
    },
    good: {
      summary: 'Solid performance. The understanding is there, but accuracy and consistency still need some practice.',
      next: 'Repeat the task types you missed more slowly and focus on the places where you hesitated.',
    },
    improve: {
      summary: 'The foundations are not stable yet. Several mistakes suggest that key rules or patterns still need reinforcement.',
      next: 'Go back to easier practice first, review the core rule, and then retake a shorter test.',
    },
  },
  HU: {
    excellent: {
      summary: 'Nagyon biztos munka. Az alapok rendben vannak, és nagy pontossággal oldod meg a feladatokat.',
      next: 'Nézd át a kevés hibát, aztán mehetsz nehezebb feladatokra vagy egy új témára.',
    },
    good: {
      summary: 'Stabil teljesítmény. A megértés látszik, de a pontosságon és a rutinen még lehet javítani.',
      next: 'Ismételd át lassabban az elrontott feladattípusokat, és figyelj külön azokra a részekre, ahol bizonytalan voltál.',
    },
    improve: {
      summary: 'Az alapok még nem elég stabilak. Több hiba arra utal, hogy néhány fontos szabály vagy minta még nem rögzült.',
      next: 'Menj vissza az egyszerűbb gyakorláshoz, tisztázd az alapszabályt, és utána írj újra egy rövidebb tesztet.',
    },
  },
  RO: {
    excellent: {
      summary: 'Ai lucrat foarte sigur. Bazele sunt bine fixate și rezolvi sarcinile cu multă precizie.',
      next: 'Recitește puținele greșeli, apoi treci la exerciții mai dificile sau la un subiect nou.',
    },
    good: {
      summary: 'Rezultat solid. Înțelegerea există, dar mai ai nevoie de puțină precizie și rutină.',
      next: 'Repetă mai lent tipurile de exerciții greșite și fii atent la locurile unde ai ezitat.',
    },
    improve: {
      summary: 'Bazele nu sunt încă stabile. Mai multe greșeli arată că unele reguli sau modele importante nu sunt încă fixate.',
      next: 'Revino mai întâi la exercițiile mai ușoare, clarifică regula de bază, apoi refă un test mai scurt.',
    },
  },
};

function getMessage(percentage: number, playerName: string, lang: Lang): string {
  const seed = Math.floor(Date.now() / 10000) % 7;
  const pool = MESSAGES[lang];
  if (percentage >= 85) return pool.excellent[seed](playerName);
  if (percentage >= 55) return pool.good[seed](playerName);
  return pool.improve[seed](playerName);
}

function getNoteValue(percentage: number): number {
  if (percentage >= 90) return 1;
  if (percentage >= 80) return 2;
  if (percentage >= 65) return 3;
  if (percentage >= 50) return 4;
  if (percentage >= 30) return 5;
  return 6;
}

function getNoteColor(note: number): string {
  const colors: Record<number, string> = { 1: '#16a34a', 2: '#2563eb', 3: '#d97706', 4: '#ea580c', 5: '#dc2626', 6: '#7c3aed' };
  return colors[note] || '#374151';
}

function getDiagnosis(percentage: number, lang: Lang) {
  if (percentage >= 85) return DIAGNOSIS[lang].excellent;
  if (percentage >= 55) return DIAGNOSIS[lang].good;
  return DIAGNOSIS[lang].improve;
}

const SmileGood = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="20" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
    <circle cx="17" cy="19" r="2.5" fill="#f59e0b" />
    <circle cx="31" cy="19" r="2.5" fill="#f59e0b" />
    <path d="M14 29 Q24 38 34 29" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M5 10 L6 7 L7 10 L10 11 L7 12 L6 15 L5 12 L2 11 Z" fill="#f59e0b" opacity="0.6" />
    <path d="M40 6 L41 4 L42 6 L44 7 L42 8 L41 10 L40 8 L38 7 Z" fill="#f59e0b" opacity="0.5" />
  </svg>
);

const SmileOk = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="20" stroke="#3b82f6" strokeWidth="2.5" fill="none" />
    <circle cx="17" cy="19" r="2.5" fill="#3b82f6" />
    <circle cx="31" cy="19" r="2.5" fill="#3b82f6" />
    <line x1="14" y1="31" x2="34" y2="31" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const SmileSad = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="20" stroke="#94a3b8" strokeWidth="2.5" fill="none" />
    <circle cx="17" cy="18" r="2.5" fill="#94a3b8" />
    <circle cx="31" cy="18" r="2.5" fill="#94a3b8" />
    <path d="M14 33 Q24 26 34 33" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M23 40 C23 40 20 37.5 20 35.5 C20 33.8 21.5 33 23 34.5 C24.5 33 26 33.8 26 35.5 C26 37.5 23 40 23 40 Z" fill="#f87171" opacity="0.7" />
  </svg>
);

const PencilIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
      stroke="#92400e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#fef3c7"/>
    <path d="M15 5l4 4" stroke="#92400e" strokeWidth="1.5"/>
  </svg>
);

function RuledLines() {
  return (
    <svg className="absolute inset-0 w-full h-full" style={{ borderRadius: 12 }} preserveAspectRatio="none">
      {[0.28, 0.42, 0.56, 0.70, 0.84].map((y, i) => (
        <line
          key={i}
          x1="0" y1={`${y * 100}%`}
          x2="100%" y2={`${y * 100}%`}
          stroke="#93c5fd"
          strokeWidth="0.8"
          opacity="0.4"
        />
      ))}
    </svg>
  );
}

// ─── INLINE VERSION (renders on the test paper) ───────────────────────────────

export function InlineTeacherNote({ playerName, percentage, countryCode }: { playerName: string; percentage: number; countryCode?: string }) {
  const lang = getLang(countryCode);
  const name = playerName || STUDENT_FALLBACK[lang];
  const message = getMessage(percentage, name, lang);
  const diagnosis = getDiagnosis(percentage, lang);
  const isExcellent = percentage >= 85;
  const isGood = percentage >= 55;
  const Smiley = isExcellent ? SmileGood : isGood ? SmileOk : SmileSad;
  const noteValue = getNoteValue(percentage);
  const noteLabel = NOTE_LABELS[lang][noteValue];
  const noteColor = getNoteColor(noteValue);

  const [phase, setPhase] = useState<'writing' | 'done'>('writing');
  useEffect(() => {
    const t = setTimeout(() => setPhase('done'), 2200);
    return () => clearTimeout(t);
  }, []);

  const [firstPart, ...rest] = message.split('!');
  const secondPart = rest.join('!').trim();
  const firstDuration = Math.max(1.2, (firstPart.length + 1) / 18);
  const secondDuration = secondPart ? Math.max(0.8, secondPart.length / 18) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 140, damping: 22 }}
      className="mt-8 mb-4"
    >
      {/* Pencil writing indicator */}
      <AnimatePresence>
        {phase === 'writing' && (
          <motion.div
            className="flex items-center gap-2 mb-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              animate={{ rotate: [-8, -14, -6, -16, -9, -13, -8], x: [0, 5, -3, 7, 1, -2, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-flex' }}
            >
              <PencilIcon />
            </motion.div>
            <motion.span
              className="text-xs font-bold text-amber-700"
              style={{ fontFamily: "'Caveat', cursive" }}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              {WRITING_LABEL[lang]}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The note card */}
      <AnimatePresence>
        {phase === 'done' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 160, damping: 22 }}
            style={{
              position: 'relative',
              background: '#fffde7',
              borderRadius: 12,
              boxShadow: '2px 4px 18px rgba(0,0,0,0.13), 0 1px 4px rgba(0,0,0,0.06)',
              padding: '16px 20px 16px 28px',
              border: '1px solid #fde68a',
              overflow: 'hidden',
              transform: 'rotate(-0.5deg)',
            }}
          >
            <RuledLines />
            <div style={{ position: 'absolute', left: 18, top: 0, bottom: 0, width: 1.5, background: '#fca5a5', opacity: 0.6 }} />

            <div style={{ position: 'relative', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              {/* Smiley + Note badge */}
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 280 }}
                >
                  <Smiley />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 300 }}
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: noteColor, color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Caveat', cursive", fontSize: 20, fontWeight: 800,
                    boxShadow: `0 0 12px ${noteColor}60`,
                  }}
                >
                  {noteValue}
                </motion.div>
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  style={{ fontFamily: "'Caveat', cursive", fontSize: 12, color: '#9ca3af', marginBottom: 3, letterSpacing: 1 }}
                >
                  {TEACHER_LABEL[lang]}:
                </motion.p>

                <motion.p
                  initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                  animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
                  style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: noteColor, fontWeight: 700, marginBottom: 2 }}
                >
                  {NOTE_WORD[lang]}: {noteValue} – {noteLabel}
                </motion.p>

                <motion.p
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ delay: 0.7, duration: firstDuration, ease: 'linear' }}
                  style={{
                    fontFamily: "'Caveat', cursive", fontSize: 20, fontWeight: 700,
                    color: isExcellent ? '#92400e' : isGood ? '#1e40af' : '#374151',
                    lineHeight: 1.3,
                  }}
                >
                  {firstPart}!
                </motion.p>

                {secondPart && (
                  <motion.p
                    initial={{ clipPath: 'inset(0 100% 0 0)' }}
                    animate={{ clipPath: 'inset(0 0% 0 0)' }}
                    transition={{ delay: 0.7 + firstDuration + 0.3, duration: secondDuration, ease: 'linear' }}
                    style={{
                      fontFamily: "'Caveat', cursive", fontSize: 17,
                      color: isExcellent ? '#b45309' : isGood ? '#1d4ed8' : '#4b5563',
                      lineHeight: 1.3,
                    }}
                  >
                    {secondPart}
                  </motion.p>
                )}

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + firstDuration + secondDuration + 0.6 }}
                  style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: '#6b7280', marginTop: 5 }}
                >
                  {percentage}% — {new Date().toLocaleDateString(DATE_LOCALE[lang])}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + firstDuration + secondDuration + 0.85, duration: 0.35 }}
                  style={{ marginTop: 10, paddingTop: 8, borderTop: '1px dashed rgba(148, 163, 184, 0.45)' }}
                >
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: '#475569', marginBottom: 2 }}>
                    <strong>{DIAGNOSIS_LABEL[lang]}:</strong> {diagnosis.summary}
                  </p>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: '#475569' }}>
                    <strong>{NEXT_STEP_LABEL[lang]}:</strong> {diagnosis.next}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── POPUP VERSION (legacy, kept for compatibility) ───────────────────────────

export default function TeacherNote({ visible, playerName, percentage, countryCode }: TeacherNoteProps) {
  const lang = getLang(countryCode);
  const name = playerName || STUDENT_FALLBACK[lang];
  const message = getMessage(percentage, name, lang);
  const diagnosis = getDiagnosis(percentage, lang);
  const isExcellent = percentage >= 85;
  const isGood = percentage >= 55;
  const Smiley = isExcellent ? SmileGood : isGood ? SmileOk : SmileSad;
  const [firstPart, ...rest] = message.split('!');
  const secondPart = rest.join('!').trim();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 26 }}
          style={{
            position: 'fixed',
            bottom: 0, left: 0, right: 0,
            zIndex: 300,
            display: 'flex',
            justifyContent: 'center',
            padding: '0 16px 24px',
            pointerEvents: 'none',
          }}
        >
          <div style={{
            position: 'relative',
            background: '#fffde7',
            borderRadius: 12,
            boxShadow: '0 -4px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)',
            padding: '18px 24px 18px 28px',
            maxWidth: 420, width: '100%',
            border: '1px solid #fde68a',
            overflow: 'hidden',
          }}>
            <RuledLines />
            <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 1.5, background: '#fca5a5', opacity: 0.6 }} />
            <div style={{ position: 'relative', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <motion.div initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.6, type: 'spring', stiffness: 300 }} style={{ flexShrink: 0, marginTop: 2 }}>
                <Smiley />
              </motion.div>
              <div style={{ flex: 1 }}>
                <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                  style={{ fontFamily: "'Caveat', cursive", fontSize: 13, color: '#9ca3af', marginBottom: 4, letterSpacing: 1 }}>
                  {TEACHER_LABEL[lang]}:
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
                  style={{ fontFamily: "'Caveat', cursive", fontSize: 22, fontWeight: 700, color: isExcellent ? '#92400e' : isGood ? '#1e40af' : '#374151', lineHeight: 1.3, whiteSpace: 'nowrap' }}>
                  {firstPart}!
                </motion.p>
                {secondPart && (
                  <motion.p
                    initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                    animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                    transition={{ delay: 1.1, duration: 0.7, ease: 'easeOut' }}
                    style={{ fontFamily: "'Caveat', cursive", fontSize: 19, color: isExcellent ? '#b45309' : isGood ? '#1d4ed8' : '#4b5563', lineHeight: 1.3 }}>
                    {secondPart}
                  </motion.p>
                )}
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}
                  style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: '#6b7280', marginTop: 6 }}>
                  {percentage}% — {new Date().toLocaleDateString(DATE_LOCALE[lang])}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9, duration: 0.35 }}
                  style={{ marginTop: 10, paddingTop: 8, borderTop: '1px dashed rgba(148, 163, 184, 0.45)' }}
                >
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: '#475569', marginBottom: 2 }}>
                    <strong>{DIAGNOSIS_LABEL[lang]}:</strong> {diagnosis.summary}
                  </p>
                  <p style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: '#475569' }}>
                    <strong>{NEXT_STEP_LABEL[lang]}:</strong> {diagnosis.next}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
