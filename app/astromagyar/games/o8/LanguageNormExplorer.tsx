"use client";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title1: "Köznyelvesség és nyelvhelyesség",
    text1: "Köznyelvesség: a beszélők által akceptált, általános nyelvhasználat. Nyelvhelyesség: a szabályok szerinti írás és beszéd. Eszményi: köznyelvesen, helyesen.",
    hint1: "A köznyelvesség nem mindig egyenlő a helyességgel.",
    q1: "Mi a különbség köznyelvesség és nyelvhelyesség között?",
    a1: "Köznyelvesség: általános, helyesség: szabályok szerinti", b1: "Nincsen különbség", c1: "Helyesség idősebb koncepció", d1: "Köznyelvesség szabály",

    title2: "Stílushibák a mindennapi beszédben",
    text2: "Stílushibák: nem helyes szóhasználat, nyelvtani sajtószemélyek, logikai ellentmondások. Például: 'ebbe az esetbe', 'nagy jelentőségben van', nem 'nagy jelentőséggel bír'.",
    hint2: "A stílushibák a szakyelvek szövetkezésétől gyakriak.",
    q2: "Mi az a stílushiba?",
    a2: "Nem helyes szóhasználat vagy nyelvtani hiba", b2: "Szó hiánya", c2: "Túl sok szó", d2: "Csupán a helyesírás",

    title3: "Szókincs fejlesztés és nyelvgazdagság",
    text3: "A szókincs fejlesztése: szavak tanulása, megértése, helyes használata. Nyelvgazdagság: a szavak sok variációját ismerjük, kiválasztjuk a legmegfelelőbbet.",
    hint3: "A nyelvgazdagság az olvasásból és tanulásból fejlődik.",
    q3: "Hogyan fejleszthető a szókincs?",
    a3: "Szavak tanulása és helyes használata", b3: "Szavak másolása", c3: "Szótárban olvasás", d3: "Szavak figyelmen kívül hagyása",

    title4: "Szövegtípusok és regiszter",
    text4: "Regiszter: a szövegtípusnak megfelelő nyelvhasználat. Formális (levél, szakcikk): komoly, szakszerű. Informális (csevegés, email barátnak): játékos, laza.",
    hint4: "A regiszter alkalmazkodása fontos a kommunikációhoz.",
    q4: "Mit értünk regiszter alatt?",
    a4: "A szövegtípusnak megfelelő nyelvhasználat", b4: "Szöveg hosszúsága", c4: "Csupán betűk száma", d4: "Szerzői választás",

    title5: "Nyelvhelyesség és társadalmi elvárások",
    text5: "Nyelvhelyesség: társadalmi érték, amely a kultúra jelét mutatja. Nyelvhelyesen beszélni az oktatott személyeket jelöli meg. Folyamatos fejlődés szükséges.",
    hint5: "A nyelvhelyesség a kultúra és oktatás tükre.",
    q5: "Miért fontos a nyelvhelyesség?",
    a5: "Társadalmi érték és kultúra jele", b5: "Csak az iskolában kell", c5: "Csupán az írásban", d5: "Helytelen fogalmazás",
  },
  de: {
    title1: "Umgangssprache und Sprachnorm",
    text1: "Umgangssprache: von Sprechern akzeptierte, allgemeine Sprachverwendung. Sprachnorm: Schreiben und Sprechen nach Regeln. Ideal: Umgangssprache korrekt.",
    hint1: "Umgangssprache ist nicht immer korrekt.",
    q1: "Was ist der Unterschied zwischen Umgangssprache und Norm?",
    a1: "Umgangssprache: allgemein, Norm: regelkonform", b1: "Kein Unterschied", c1: "Norm ist älter", d1: "Umgangssprache ist Regel",

    title2: "Stilfehler in der alltäglichen Rede",
    text2: "Stilfehler: nicht korrekte Wortverwendung, grammatikalische Fehler, logische Widersprüche. Beispiele: unpassende Präpositionen, Zeitformen.",
    hint2: "Stilfehler entstehen oft aus Unachtsamkeit.",
    q2: "Was ist ein Stilfehler?",
    a2: "Nicht korrekte Wortverwendung oder Fehler", b2: "Wortmangel", c2: "Zu viele Wörter", d2: "Nur Rechtschreibung",

    title3: "Wortschatzentwicklung und Sprachreichtum",
    text3: "Wortschatzentwicklung: Wörter lernen, verstehen, korrekt verwenden. Sprachreichtum: viele Variationen kennen und das passendste wählen.",
    hint3: "Sprachreichtum entsteht durch Lesen und Lernen.",
    q3: "Wie kann Wortschatz entwickelt werden?",
    a3: "Wörter lernen und korrekt verwenden", b3: "Wörter kopieren", c3: "Im Wörterbuch lesen", d3: "Wörter ignorieren",

    title4: "Texttypen und Register",
    text4: "Register: Sprachverwendung dem Texttyp entsprechend. Formell (Brief, Fachartikel): ernst, fachlich. Informell (Gespräch, Mail): spielerisch, locker.",
    hint4: "Registeranpassung ist wichtig für Kommunikation.",
    q4: "Was bedeutet Register?",
    a4: "Sprachverwendung dem Texttyp entsprechend", b4: "Textlänge", c4: "Nur Buchstabenanzahl", d4: "Autorische Wahl",

    title5: "Sprachnorm und gesellschaftliche Erwartungen",
    text5: "Sprachnorm: gesellschaftlicher Wert, Zeichen der Kultur. Korrekt sprechen zeigt Bildung an. Ständige Entwicklung nötig.",
    hint5: "Sprachnorm ist Spiegel von Kultur und Bildung.",
    q5: "Warum ist Sprachnorm wichtig?",
    a5: "Gesellschaftlicher Wert und Kultursignal", b5: "Nur in der Schule", c5: "Nur beim Schreiben", d5: "Falsche Formulierung",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "mcq",
      infoTitle: "title1",
      infoText: "text1",
      hintKey: "hint1",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#B44DFF">📖</text>
        </svg>
      ),
      questions: [{ question: "q1", choices: ["a1", "b1", "c1", "d1"], answer: "a1" }],
    },
    {
      type: "mcq",
      infoTitle: "title2",
      infoText: "text2",
      hintKey: "hint2",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00D4FF">⚠️</text>
        </svg>
      ),
      questions: [{ question: "q2", choices: ["a2", "b2", "c2", "d2"], answer: "a2" }],
    },
    {
      type: "mcq",
      infoTitle: "title3",
      infoText: "text3",
      hintKey: "hint3",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#00FF88">💡</text>
        </svg>
      ),
      questions: [{ question: "q3", choices: ["a3", "b3", "c3", "d3"], answer: "a3" }],
    },
    {
      type: "mcq",
      infoTitle: "title4",
      infoText: "text4",
      hintKey: "hint4",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#FF9500">🎤</text>
        </svg>
      ),
      questions: [{ question: "q4", choices: ["a4", "b4", "c4", "d4"], answer: "a4" }],
    },
    {
      type: "mcq",
      infoTitle: "title5",
      infoText: "text5",
      hintKey: "hint5",
      svg: () => (
        <svg viewBox="0 0 240 160" className="w-full h-full">
          <rect x="0" y="0" width="240" height="160" rx="16" fill="#1a1a3e" />
          <text x="120" y="90" textAnchor="middle" fontSize="50" fill="#E879F9">✨</text>
        </svg>
      ),
      questions: [{ question: "q5", choices: ["a5", "b5", "c5", "d5"], answer: "a5" }],
    },
  ],
};

interface Props {
  color: string;
  lang?: string;
  onDone: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function LanguageNormExplorer({ color, lang, onDone, onClose }: Props) {
  return <ExplorerEngine def={DEF} color={color} lang={lang} onDone={onDone} onClose={onClose} />;
}
