"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { G1_ICONS, G1_WORD_LABELS } from "@/components/grade1-visual/G1Icons";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowLeft, Check, X as XIcon, RotateCcw, Home, ChevronRight, Download } from "lucide-react";
import Link from "next/link";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores, checkNewMilestones } from "@/lib/milestones";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import ModernPaperTest from "@/components/ModernPaperTest";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender } from "@/lib/gender";
import { getActiveSkin, getSkinDef } from "@/lib/skins";
import { getActiveFace, getFaceDef } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";
import {
  DEUTSCH_CURRICULUM,
  getDeutschQuestions,
  calculateDeutschMark,
  getSubtopicHint,
  type DeutschQuestion,
  type DeutschTheme,
  type DeutschCountry,
} from "@/lib/deutschCurriculum";
import { getRandomPassage, type Lesepassage, type LeseQuestion } from "@/lib/deutschLesetest";
import { generateForSubtopics } from "@/lib/deutschGenerators";
import { checkAnswer } from "@/lib/deutschValidation";
import { getUsername } from "@/lib/username";
import { InlineTeacherNote } from "@/components/TeacherNote";
import GenusSortierung from "@/components/deutsch-visual/GenusSortierung";
import SatzOrdnen from "@/components/deutsch-visual/SatzOrdnen";
import BildBeschriften from "@/components/deutsch-visual/BildBeschriften";
import FehlerFinden from "@/components/deutsch-visual/FehlerFinden";
import WortfamilienBaum from "@/components/deutsch-visual/WortfamilienBaum";
import GeschichteSortieren from "@/components/deutsch-visual/GeschichteSortieren";
import WortartenSortieren from "@/components/deutsch-visual/WortartenSortieren";
import ZeitformenZuordnen from "@/components/deutsch-visual/ZeitformenZuordnen";
import SatzgliedMarkieren from "@/components/deutsch-visual/SatzgliedMarkieren";
import KasusMarkieren from "@/components/deutsch-visual/KasusMarkieren";
import AdjektivEndungen from "@/components/deutsch-visual/AdjektivEndungen";
import LueckenText from "@/components/deutsch-visual/LueckenText";
import SatzgefugeDiagram from "@/components/deutsch-visual/SatzgefugeDiagram";
import EpochenZeitstrahl from "@/components/deutsch-visual/EpochenZeitstrahl";
import { genGenusSortierung, genSatzOrdnen, genBildBeschriften, genFehlerFinden, genWortfamilienBaum, genGeschichteSortieren, genWortartenSortieren, genZeitformenZuordnen, genSatzgliedMarkieren, genKasusMarkieren, genAdjektivEndungen, genLueckenText, genSatzgefuge, genEpochenZeitstrahl } from "@/lib/deutschVisualGenerators";
import { playCorrect, playIncorrect, playClick } from "@/lib/soundEffects";
import { generateDeutschTestPdf } from "@/lib/generateDeutschTestPdf";
import type { LanguageTestEngineConfig, VisualQuestionType } from "@/lib/languageTestTypes";

// ─── TTS HELPER ──────────────────────────────────────────────────────────────
function speakText(text: string, ttsLang = "de-DE", ttsRate = 0.88, ttsPitch = 1.1) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const doSpeak = () => {
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = ttsLang;
    utt.rate = ttsRate;
    utt.pitch = ttsPitch;
    // Explicit voice selection — Chrome desktop needs this
    const voices = window.speechSynthesis.getVoices();
    const langPrefix = ttsLang.split("-")[0];
    const deVoice = voices.find(v => v.lang.startsWith(langPrefix)) ?? voices[0];
    if (deVoice) utt.voice = deVoice;
    window.speechSynthesis.speak(utt);
  };

  // Chrome desktop bug: cancel() needs a small delay before speak()
  // Also wait for voices to load if not ready yet
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    setTimeout(doSpeak, 50);
  } else {
    window.speechSynthesis.addEventListener("voiceschanged", () => setTimeout(doSpeak, 50), { once: true });
  }
}

// ─── FLOATING BACKGROUND ─────────────────────────────────────────────────────

const DE_CHARS = ["A","B","C","Ä","Ö","Ü","ß","!","?",",",".",";","Z","W","R","S","T"];
const DE_COLORS = ["#FFD700","#FF4444","#00D4FF","#FFFFFF","#B44DFF"];

function LanguageBackground({ chars = DE_CHARS, colors = DE_COLORS }: { chars?: string[]; colors?: string[] }) {
  const items = useMemo(() => Array.from({ length: 28 }, (_, i) => ({
    char: chars[i % chars.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 16 + Math.random() * 48,
    duration: 8 + Math.random() * 16,
    delay: Math.random() * 8,
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: 0.04 + Math.random() * 0.10,
  })), [chars, colors]);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((it, i) => (
        <div
          key={i}
          className="absolute font-black select-none"
          style={{
            left: `${it.x}%`,
            top: `${it.y}%`,
            fontSize: it.size,
            color: it.color,
            opacity: it.opacity,
            animation: `floatDE ${it.duration}s ease-in-out ${it.delay}s infinite alternate`,
          }}
        >
          {it.char}
        </div>
      ))}
      <style>{`
        @keyframes floatDE {
          0%   { transform: translateY(0px) rotate(-5deg); }
          100% { transform: translateY(-30px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}

// ─── TYPEN ────────────────────────────────────────────────────────────────────

type Screen = "country" | "grade" | "topics" | "test" | "reward" | "result";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory";

interface TestQuestion {
  type: "mcq" | "typing" | "bild-wort" | "anlaut-bild" | "genus-sort" | "satz-ordnen" | "bild-beschriften" | "fehler-finden" | "wortfamilien-baum" | "geschichte-sortieren" | "wortarten-sortieren" | "zeitformen-zuordnen" | "satzglied-markieren" | "kasus-markieren" | "adjektiv-endungen" | "luecken-text" | "satzgefuge-diagram" | "epochen-zeitstrahl";
  question: string;
  options?: string[];
  correct?: number;
  answer?: string | string[];
  hint?: string;
  subtopic?: string;
  passageText?: string;
  passageTitle?: string;
  word?: string;           // genus-sort: the noun to classify
  shuffled?: string[];     // satz-ordnen: shuffled word array
  imageKey?: string;       // bild-beschriften: G1_ICONS key
  words?: string[];        // fehler-finden / satzglied: sentence as word array
  errorIndex?: number;     // fehler-finden: index of wrong word
  stamm?: string;          // wortfamilien: root word
  correctSet?: number[];   // wortfamilien: correct indices
  sentences?: string[];    // geschichte-sortieren: correct sentence order
  shuffledOrder?: number[];// geschichte-sortieren: display shuffle
  wordCategories?: ('N'|'V'|'A')[];  // wortarten-sortieren: correct category per word
  sentence?: string;       // zeitformen-zuordnen: the sentence
  correctZeitform?: 'pres'|'praet'|'perf'; // zeitformen-zuordnen
  correctLabels?: string[];// satzglied-markieren: S/P/O/'' per word
  highlight?: string;      // kasus-markieren: phrase to highlight
  correctKasus?: 'N'|'A'|'D'|'G'; // kasus-markieren
  stem?: string;           // adjektiv-endungen: adjective stem
  correctEnding?: string;  // adjektiv-endungen: e/er/es/en/em
  // luecken-text
  lueckenSentence?: string;  // sentence with "___" blank
  lueckenOptions?: string[]; // candidate forms
  lueckenCorrect?: number;   // index of correct option
  // satzgefuge-diagram
  hauptsatz?: string;
  nebensatz?: string;
  konjunktion?: string;
  satzgefugeOptions?: string[];
  satzgefugeCorrect?: number;
  // epochen-zeitstrahl
  epochenAuthor?: string;
  epochenHint?: string;
  epochenOptions?: string[];
  epochenCorrect?: number;
}

// ─── AVATAR LADEN ─────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useAvatarProps() {
  const [props, setProps] = useState<Record<string, any>>({});
  useEffect(() => {
    const gender = getGender();
    const activeSkin = getSkinDef(getActiveSkin());
    const activeFace = getFaceDef(getActiveFace());
    const topId = getActive("top");
    const bottomId = getActive("bottom");
    const shoeId = getActive("shoe");
    const capeId = getActive("cape");
    const glassesId = getActive("glasses");
    const glovesId = getActive("gloves");
    const hatId = getActiveHat();
    const trailId = getActiveTrail();
    setProps({
      gender,
      activeSkin,
      activeFace,
      activeTop: topId ? getTopDef(topId) : null,
      activeBottom: bottomId ? getBottomDef(bottomId) : null,
      activeShoe: shoeId ? getShoeDef(shoeId) : null,
      activeCape: capeId ? getCapeDef(capeId) : null,
      activeGlasses: glassesId ? getGlassesDef(glassesId) : null,
      activeGloves: glovesId ? getGloveDef(glovesId) : null,
      activeHat: hatId ? getHatDef(hatId) : null,
      activeTrail: trailId ? getTrailDef(trailId) : null,
    });
  }, []);
  return props;
}

// ─── HAUPTKOMPONENTE ──────────────────────────────────────────────────────────

function LanguageTestEngine({ config }: { config: LanguageTestEngineConfig }) {
  const avatarProps = useAvatarProps();
  const { labels } = config;
  const g1Icons = config.g1Icons ?? G1_ICONS;
  const g1WordLabels = config.g1WordLabels ?? G1_WORD_LABELS;
  // Check if country was already selected (persisted)
  const savedCountry = typeof window !== "undefined"
    ? localStorage.getItem(config.storageKey)
    : null;
  const [screen, setScreen] = useState<Screen>(savedCountry ? "grade" : "country");
  const [country, setCountry] = useState<string>(savedCountry ?? config.countries[0]?.code ?? "DE");
  const [grade, setGrade] = useState(1);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [includeLesetest, setIncludeLesetest] = useState(false);
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [answers, setAnswers] = useState<{ correct: boolean; given: string; expected: string }[]>([]);
  const [paperAnswers, setPaperAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [avatarMood, setAvatarMood] = useState<AvatarMood>("idle");
  const [earnedCard, setEarnedCard] = useState<string | null>(null);
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    setDateStr(new Date().toLocaleDateString(config.dateLocale, { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
  }, []);

  const themes = (config.curriculum[grade] ?? []) as DeutschTheme[];
  const totalQ = questions.length;
  const answeredCount = Object.keys(paperAnswers).length;

  // ─── CONFIG VISUAL TYPES (pluggable per-language visual components) ────────
  const configVisualMap = useMemo(() => {
    const map = new Map<string, VisualQuestionType>();
    for (const vt of config.visualTypes ?? []) map.set(vt.type, vt);
    return map;
  }, [config.visualTypes]);
  const configVisualSubtopicMap = useMemo(() => {
    const map = new Map<string, VisualQuestionType[]>();
    for (const vt of config.visualTypes ?? []) {
      for (const sid of vt.subtopicIds) {
        if (!map.has(sid)) map.set(sid, []);
        map.get(sid)!.push(vt);
      }
    }
    return map;
  }, [config.visualTypes]);

  // ─── FRAGEN AUFBAUEN ────────────────────────────────────────────────────────

  // Helper: generate visual TestQuestions for K2 visual subtopics
  function buildVisualForSubtopic(g: number, sid: string, count: number): TestQuestion[] {
    // Check config visual types first (for Romanian, English, etc.)
    const configVTs = configVisualSubtopicMap.get(sid);
    if (configVTs && configVTs.length > 0) {
      const qs: TestQuestion[] = [];
      for (const vt of configVTs) {
        const generated = vt.generate(Math.ceil(count / configVTs.length));
        for (const item of generated) {
          qs.push({ ...item, type: vt.type as TestQuestion["type"], subtopic: sid });
        }
      }
      return qs.slice(0, count);
    }
    if (g !== 2 && g !== 3 && g !== 4 && g !== 5 && g !== 8) return [];
    const fShuffle = <T,>(arr: T[]): T[] => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
    const qs: TestQuestion[] = [];
    if (sid === "artikel_k2" || sid === "nomen_k2") {
      genGenusSortierung(Math.ceil(count * 0.6)).forEach(item => qs.push({
        type: "genus-sort",
        question: "Artikel bestimmen:",
        word: item.word,
        answer: item.artikel,
        subtopic: sid,
      }));
      genBildBeschriften(Math.floor(count * 0.4)).forEach(item => qs.push({
        type: "bild-beschriften",
        question: "Bild beschriften:",
        imageKey: item.imageKey,
        options: item.options,
        correct: item.correct,
        subtopic: sid,
      }));
    } else if (sid === "wortstellung_k2") {
      genSatzOrdnen(count).forEach(s => qs.push({
        type: "satz-ordnen",
        question: "Satz ordnen:",
        shuffled: fShuffle([...s.words]),
        answer: s.words.join(" "),
        subtopic: sid,
      }));
    } else if (sid === "verben_k2" || sid === "konjugation_k2") {
      genFehlerFinden(count).forEach(item => qs.push({
        type: "fehler-finden",
        question: "Fehler finden:",
        words: item.words,
        errorIndex: item.errorIndex,
        hint: item.hint,
        answer: String(item.errorIndex),
        subtopic: sid,
      }));
    } else if (sid === "nomen_k2" || sid === "plural_k2") {
      genWortfamilienBaum(count).forEach(item => qs.push({
        type: "wortfamilien-baum",
        question: "Wortfamilie:",
        stamm: item.stamm,
        options: item.options,
        correctSet: item.correctIndices,
        answer: item.correctIndices.join(","),
        subtopic: sid,
      }));
    } else if (sid === "satzarten") {
      genGeschichteSortieren(count).forEach(item => qs.push({
        type: "geschichte-sortieren",
        question: "Geschichte ordnen:",
        sentences: item.sentences,
        shuffledOrder: item.shuffledOrder,
        answer: item.sentences.map((_, i) => i).join(","),
        subtopic: sid,
      }));
    }

    // ── K3 visual subtopics ───────────────────────────────────────────────────
    if (g === 3) {
      if (sid === "wortarten_k3" || sid === "plural" || sid === "verben_k3" || sid === "steigerung_k3" || sid === "wortfamilien_k3") {
        genWortartenSortieren(count).forEach(item => qs.push({
          type: "wortarten-sortieren",
          question: "Wortarten bestimmen:",
          words: item.words,
          wordCategories: item.categories,
          answer: item.categories.join(","),
          subtopic: sid,
        }));
      } else if (sid === "zeitformen_komplett_k3" || sid === "praeteritum_k3") {
        genZeitformenZuordnen(count).forEach(item => qs.push({
          type: "zeitformen-zuordnen",
          question: "Zeitform bestimmen:",
          sentence: item.sentence,
          correctZeitform: item.zeitform,
          answer: item.zeitform,
          subtopic: sid,
        }));
      } else if (sid === "satzglieder_k3" || sid === "satzbau_k3") {
        genSatzgliedMarkieren(count).forEach(item => qs.push({
          type: "satzglied-markieren",
          question: "Satzglieder markieren:",
          words: item.words,
          correctLabels: item.labels,
          answer: item.labels.join(","),
          subtopic: sid,
        }));
      } else if (sid === "direkte_rede_k3") {
        genFehlerFinden(count).forEach(item => qs.push({
          type: "fehler-finden",
          question: "Fehler finden:",
          words: item.words,
          errorIndex: item.errorIndex,
          hint: item.hint,
          answer: String(item.errorIndex),
          subtopic: sid,
        }));
      } else if (sid === "wortfamilien_k3" || sid === "rechtschreibung_k3" || sid === "ie_ih" || sid === "ss_sz" || sid === "doppelkonsonanten") {
        genWortfamilienBaum(count).forEach(item => qs.push({
          type: "wortfamilien-baum",
          question: "Wortfamilie:",
          stamm: item.stamm,
          options: item.options,
          correctSet: item.correctIndices,
          answer: item.correctIndices.join(","),
          subtopic: sid,
        }));
      }
    }

    // ── K4 visual subtopics ───────────────────────────────────────────────────
    if (g === 4) {
      if (sid === "nominativ" || sid === "akkusativ" || sid === "dativ" || sid === "genitiv" || sid === "kasus") {
        genKasusMarkieren(count).forEach(item => qs.push({
          type: "kasus-markieren",
          question: "Kasus bestimmen:",
          sentence: item.sentence,
          highlight: item.highlight,
          correctKasus: item.kasus,
          answer: item.kasus,
          subtopic: sid,
        }));
      } else if (sid === "adjektivendungen_k4") {
        genAdjektivEndungen(count).forEach(item => qs.push({
          type: "adjektiv-endungen",
          question: "Adjektiv-Endung:",
          sentence: item.phrase,
          stem: item.stem,
          correctEnding: item.ending,
          answer: item.ending,
          subtopic: sid,
        }));
      } else if (sid === "praeteritum" || sid === "perfekt" || sid === "zeitformen_k4") {
        genZeitformenZuordnen(count).forEach(item => qs.push({
          type: "zeitformen-zuordnen",
          question: "Zeitform bestimmen:",
          sentence: item.sentence,
          correctZeitform: item.zeitform,
          answer: item.zeitform,
          subtopic: sid,
        }));
      } else if (sid === "subjekt_praedikat_k4" || sid === "objekte_k4" || sid === "satzglieder_k4") {
        genSatzgliedMarkieren(count).forEach(item => qs.push({
          type: "satzglied-markieren",
          question: "Satzglieder markieren:",
          words: item.words,
          correctLabels: item.labels,
          answer: item.labels.join(","),
          subtopic: sid,
        }));
      } else if (sid === "wortarten_k4" || sid === "pronomen_k4") {
        genWortartenSortieren(count).forEach(item => qs.push({
          type: "wortarten-sortieren",
          question: "Wortarten bestimmen:",
          words: item.words,
          wordCategories: item.categories,
          answer: item.categories.join(","),
          subtopic: sid,
        }));
      } else if (sid === "das_dass" || sid === "komma_aufzaehlung" || sid === "aeu_eu" || sid === "rechtschreibung_k4" || sid === "weil_dass_k4" || sid === "adverbiale_k4" || sid === "aussage_frage_k4" || sid === "aufforderung_ausruf_k4" || sid === "trennbare_verben_k4" || sid === "futur_k4" || sid === "nebensatz_k4" || sid === "satzarten_k4") {
        genFehlerFinden(count).forEach(item => qs.push({
          type: "fehler-finden",
          question: "Fehler finden:",
          words: item.words,
          errorIndex: item.errorIndex,
          hint: item.hint,
          answer: String(item.errorIndex),
          subtopic: sid,
        }));
      }
    }

    // ── K5 visual subtopics ───────────────────────────────────────────────────
    if (g === 5) {
      if (sid === "adverbiale" || sid === "wortstellung") {
        genSatzgliedMarkieren(count).forEach(item => qs.push({
          type: "satzglied-markieren",
          question: "Satzglieder markieren:",
          words: item.words,
          correctLabels: item.labels,
          answer: item.labels.join(","),
          subtopic: sid,
        }));
      } else if (sid === "adjektivdeklination_k5") {
        const half = Math.ceil(count / 2);
        genAdjektivEndungen(half).forEach(item => qs.push({
          type: "adjektiv-endungen",
          question: "Adjektiv-Endung:",
          sentence: item.phrase,
          stem: item.stem,
          correctEnding: item.ending,
          answer: item.ending,
          subtopic: sid,
        }));
        genKasusMarkieren(count - half).forEach(item => qs.push({
          type: "kasus-markieren",
          question: "Kasus bestimmen:",
          sentence: item.sentence,
          highlight: item.highlight,
          correctKasus: item.kasus,
          answer: item.kasus,
          subtopic: sid,
        }));
      } else if (sid === "praepositionen_k5") {
        genKasusMarkieren(count).forEach(item => qs.push({
          type: "kasus-markieren",
          question: "Kasus bestimmen:",
          sentence: item.sentence,
          highlight: item.highlight,
          correctKasus: item.kasus,
          answer: item.kasus,
          subtopic: sid,
        }));
      } else if (sid === "partizip_1_k5" || sid === "partizip_2_k5" || sid === "plusquamperfekt_k5") {
        genZeitformenZuordnen(count).forEach(item => qs.push({
          type: "zeitformen-zuordnen",
          question: "Zeitform bestimmen:",
          sentence: item.sentence,
          correctZeitform: item.zeitform,
          answer: item.zeitform,
          subtopic: sid,
        }));
      } else if (sid === "pronomen" || sid === "relativpronomen" || sid === "adverbien_k5") {
        genWortartenSortieren(count).forEach(item => qs.push({
          type: "wortarten-sortieren",
          question: "Wortarten bestimmen:",
          words: item.words,
          wordCategories: item.categories,
          answer: item.categories.join(","),
          subtopic: sid,
        }));
      } else if (sid === "konjunktionen_k5") {
        genSatzOrdnen(count).forEach(s => qs.push({
          type: "satz-ordnen",
          question: "Satz ordnen:",
          shuffled: fShuffle([...s.words]),
          answer: s.words.join(" "),
          subtopic: sid,
        }));
      } else if (sid === "steigerung" || sid === "direkte_rede" || sid === "komma_nebensatz" || sid === "vorgangspassiv_k5" || sid === "passiv_praeteritum_k5" || sid === "ss_beta_k5" || sid === "grossklein_k5" || sid === "dehnung_schaerfung_k5") {
        genFehlerFinden(count).forEach(item => qs.push({
          type: "fehler-finden",
          question: "Fehler finden:",
          words: item.words,
          errorIndex: item.errorIndex,
          hint: item.hint,
          answer: String(item.errorIndex),
          subtopic: sid,
        }));
      } else if (sid === "synonyme_k5" || sid === "wortfelder_k5" || sid === "imperativ_k5" || sid === "reflexiv_k5") {
        genWortfamilienBaum(count).forEach(item => qs.push({
          type: "wortfamilien-baum",
          question: "Wortfamilie:",
          stamm: item.stamm,
          options: item.options,
          correctSet: item.correctIndices,
          answer: item.correctIndices.join(","),
          subtopic: sid,
        }));
      }
    }

    // ── K8 visual subtopics ───────────────────────────────────────────────────
    if (g === 8) {
      if (sid === "partizipial") {
        genLueckenText(count).forEach(item => qs.push({
          type: "luecken-text",
          question: "Ergänze die Lücke:",
          lueckenSentence: item.sentence,
          lueckenOptions: item.options,
          lueckenCorrect: item.correct,
          answer: String(item.correct),
          subtopic: sid,
        }));
      } else if (sid === "nebensatztypen") {
        genSatzgefuge(count).forEach(item => qs.push({
          type: "satzgefuge-diagram",
          question: "Bestimme den Nebensatztyp:",
          hauptsatz: item.hauptsatz,
          nebensatz: item.nebensatz,
          konjunktion: item.konjunktion,
          satzgefugeOptions: item.options,
          satzgefugeCorrect: item.options.indexOf(item.correctType),
          answer: String(item.options.indexOf(item.correctType)),
          subtopic: sid,
        }));
      } else if (sid === "epochen") {
        genEpochenZeitstrahl(count).forEach(item => qs.push({
          type: "epochen-zeitstrahl",
          question: "Welcher Epoche gehört das Werk an?",
          epochenAuthor: item.author,
          epochenHint: item.hint,
          epochenOptions: item.options,
          epochenCorrect: item.correct,
          answer: String(item.correct),
          subtopic: sid,
        }));
      }
    }

    return qs;
  }

  // ─── FRAGEN AUFBAUEN — min. 10 Gruppen à 3, round-robin ─────────────────────

  function buildTest(g: number, subtopicIds: string[], withLesetest: boolean) {
    const ids = subtopicIds.length > 0 ? subtopicIds : [];
    // Always at least 10 groups (30 questions); more if >10 topics selected
    const groupCount = ids.length > 0 ? Math.max(ids.length, 10) : 0;

    // Dedup key: includes content-specific data so questions with the same header
    // but different answers (MCQ options, visual data) are kept as distinct
    function dedupKey(q: TestQuestion): string {
      const a = q as any;
      const qText = (q.question ?? "").trim();
      // Questions with same text = same question regardless of type (MCQ vs typing)
      if (qText) return qText.slice(0, 80);
      // Visual questions without a question label: use visual content as key
      const visual = a.words?.join(",") ?? a.stamm ?? a.imageKey ?? a.shuffled?.join(",") ?? "";
      return q.type + "|" + String(visual).slice(0, 80);
    }

    // Build pools per unique topic (shuffled, deduplicated)
    const pools: Record<string, TestQuestion[]> = {};
    for (const sid of ids) {
      const combined = [
        ...config.getQuestions(g, [sid], 40, country),
        ...(config.generateForSubtopics ? config.generateForSubtopics([sid], 12) : []),
        ...buildVisualForSubtopic(g, sid, 30),
      ];
      for (let i = combined.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combined[i], combined[j]] = [combined[j], combined[i]];
      }
      const seen = new Set<string>();
      pools[sid] = combined.filter((q) => {
        const k = dedupKey(q);
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });
    }

    // Assign topics to groups round-robin, then pick 3 per group
    // Track pointer into each topic's pool
    const ptr: Record<string, number> = {};
    const allQs: TestQuestion[] = [];

    // ── Separate visual questions for dedicated visual groups at end ─────────────
    const VISUAL_TYPES = new Set([
      "genus-sort","satz-ordnen","bild-beschriften","fehler-finden",
      "wortfamilien-baum","geschichte-sortieren","wortarten-sortieren",
      "zeitformen-zuordnen","satzglied-markieren","kasus-markieren","adjektiv-endungen",
      ...(config.visualTypes ?? []).map(vt => vt.type),
    ]);
    const visualPools: Record<string, TestQuestion[]> = {};
    const regularPools: Record<string, TestQuestion[]> = {};
    for (const sid of ids) {
      visualPools[sid]  = pools[sid].filter(q => VISUAL_TYPES.has(q.type));
      regularPools[sid] = pools[sid].filter(q => !VISUAL_TYPES.has(q.type));
    }

    // Build regular groups round-robin (non-visual only)
    for (let g2 = 0; g2 < groupCount; g2++) {
      const sid = ids[g2 % ids.length];
      const pool = regularPools[sid] ?? [];
      const start = ptr[sid] ?? 0;
      for (let k = 0; k < 3; k++) {
        const idx = (start + k) % Math.max(pool.length, 1);
        if (pool[idx]) allQs.push({ ...pool[idx] });
      }
      ptr[sid] = (start + 3) % Math.max(pool.length, 1);
    }

    // Append visual groups at end: group ALL visual questions by type, then batch 3-by-3
    // This ensures each block of 3 sub-questions is homogeneous (same exercise type)
    // Max 10 visual groups (30 questions) for a full visual-only test
    const visualByType: Record<string, TestQuestion[]> = {};
    for (const sid of ids) {
      for (const q of (visualPools[sid] ?? [])) {
        if (!visualByType[q.type]) visualByType[q.type] = [];
        visualByType[q.type].push(q);
      }
    }
    let visualGroupsAdded = 0;
    for (const typeQs of Object.values(visualByType)) {
      if (visualGroupsAdded >= 10) break;
      // Shuffle, deduplicate by content
      const shuffled = [...typeQs].sort(() => Math.random() - 0.5);
      const seen2 = new Set<string>();
      const unique = shuffled.filter(q => {
        const k = dedupKey(q);
        if (seen2.has(k)) return false;
        seen2.add(k);
        return true;
      });
      // Split unique questions into groups of 3 (pad last group if needed)
      for (let i = 0; i < unique.length && visualGroupsAdded < 10; i += 3) {
        const group = unique.slice(i, i + 3);
        while (group.length < 3) group.push({ ...group[group.length - 1] });
        if (group.length >= 3) {
          allQs.push(...group);
          visualGroupsAdded++;
        }
      }
    }

    if (withLesetest) {
      const passage = config.getReadingPassage ? config.getReadingPassage(g) : null;
      if (passage) {
        const leseQs: TestQuestion[] = passage.questions.slice(0, 3).map((lq) => ({
          ...lq,
          passageText: passage.text,
          passageTitle: passage.title,
        }));
        allQs.push(...leseQs);
      }
    }

    return allQs;
  }

  // ─── TEST STARTEN ────────────────────────────────────────────────────────────

  function startTest() {
    if (selectedIds.length === 0 && !includeLesetest) return;
    const qs = buildTest(grade, selectedIds, includeLesetest);
    if (qs.length === 0) return;
    setQuestions(qs);
    setAnswers([]);
    setPaperAnswers({});
    setSubmitted(false);
    setAvatarMood("focused");
    setScreen("test");
  }

  // ─── ABGEBEN ─────────────────────────────────────────────────────────────────

  function handleAbgeben() {
    const allAnswers = questions.map((q, i) => {
      const given = paperAnswers[i] ?? "";
      let isCorrect = false;
      let expected = "";
      if (q.type === "mcq" || q.type === "bild-wort" || q.type === "anlaut-bild") {
        const givenIdx = parseInt(given);
        isCorrect = !isNaN(givenIdx) && givenIdx === q.correct;
        if (q.type === "bild-wort") {
          expected = g1WordLabels[q.options?.[q.correct ?? 0] ?? ""] ?? q.options?.[q.correct ?? 0] ?? "";
        } else {
          expected = q.options?.[q.correct ?? 0] ?? "";
        }
      } else if (q.type === "genus-sort" || q.type === "satz-ordnen") {
        const correctAns = Array.isArray(q.answer) ? q.answer[0] : q.answer ?? "";
        isCorrect = given === correctAns;
        expected = correctAns;
      } else if (q.type === "bild-beschriften") {
        isCorrect = given === (q.options?.[q.correct ?? 0] ?? "");
        expected = q.options?.[q.correct ?? 0] ?? "";
      } else if (q.type === "fehler-finden") {
        isCorrect = parseInt(given) === (q.errorIndex ?? -1);
        expected = String(q.errorIndex ?? 0);
      } else if (q.type === "wortfamilien-baum") {
        const givenSet = new Set(given.split(",").map(Number).filter((n) => !isNaN(n)));
        const correctSetArr = q.correctSet ?? [];
        isCorrect = correctSetArr.length === givenSet.size && correctSetArr.every((i) => givenSet.has(i));
        expected = correctSetArr.join(",");
      } else if (q.type === "geschichte-sortieren") {
        const correctOrder = (q.sentences ?? []).map((_, i) => i).join(",");
        isCorrect = given === correctOrder;
        expected = correctOrder;
      } else if (q.type === "wortarten-sortieren") {
        const correctCats = (q.wordCategories ?? []).join(",");
        isCorrect = given === correctCats;
        expected = correctCats;
      } else if (q.type === "zeitformen-zuordnen") {
        isCorrect = given === (q.correctZeitform ?? "");
        expected = q.correctZeitform ?? "";
      } else if (q.type === "satzglied-markieren") {
        isCorrect = given === (q.correctLabels ?? []).join(",");
        expected = (q.correctLabels ?? []).join(",");
      } else if (q.type === "kasus-markieren") {
        isCorrect = given === (q.correctKasus ?? "");
        expected = q.correctKasus ?? "";
      } else if (q.type === "adjektiv-endungen") {
        isCorrect = given === (q.correctEnding ?? "");
        expected = q.correctEnding ?? "";
      } else if (q.type === "luecken-text") {
        isCorrect = parseInt(given) === (q.lueckenCorrect ?? -1);
        expected = String(q.lueckenCorrect ?? 0);
      } else if (q.type === "satzgefuge-diagram") {
        isCorrect = parseInt(given) === (q.satzgefugeCorrect ?? -1);
        expected = String(q.satzgefugeCorrect ?? 0);
      } else if (q.type === "epochen-zeitstrahl") {
        isCorrect = parseInt(given) === (q.epochenCorrect ?? -1);
        expected = String(q.epochenCorrect ?? 0);
      } else if (configVisualMap.has(q.type)) {
        const vt = configVisualMap.get(q.type)!;
        const result = vt.gradeAnswer(q, given);
        isCorrect = result.correct;
        expected = result.expected;
      } else {
        isCorrect = (config.checkAnswer ?? checkAnswer)(given, q.answer ?? "", grade);
        expected = Array.isArray(q.answer) ? q.answer[0] : q.answer ?? "";
      }
      return { correct: isCorrect, given, expected };
    });

    const correctCount = allAnswers.filter((a) => a.correct).length;
    if (correctCount / questions.length >= 0.5) playCorrect(); else playIncorrect();

    setAnswers(allAnswers);
    setSubmitted(true);
    setAvatarMood(correctCount / questions.length >= 0.5 ? "victory" : "disappointed");

    setTimeout(() => finishTest(allAnswers), 2500);
  }

  // ─── TEST BEENDEN ────────────────────────────────────────────────────────────

  function finishTest(allAnswers: typeof answers) {
    const correct = allAnswers.filter((a) => a.correct).length;
    const total = allAnswers.length;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

    incrementTotalGames();
    if (pct === 100) incrementPerfectScores();
    checkNewMilestones();

    // No card if only reading test was selected (no regular subtopics)
    if (selectedIds.length === 0) {
      setScreen("reward");
      return;
    }

    const rarity = calculateRarity(correct, total, 0, 85);
    const card = {
      id: generateCardId(),
      game: config.gameId,
      theme: `${labels.gradeFull} ${grade}`,
      rarity,
      score: correct,
      total,
      date: new Date().toISOString().split("T")[0],
    };
    saveCard(card);
    window.dispatchEvent(new Event("plizio-cards-changed"));
    setEarnedCard(rarity);
    setScreen("reward");
  }

  // ─── NEUSTART ────────────────────────────────────────────────────────────────

  function restart() {
    setScreen("topics");
    setEarnedCard(null);
    setPaperAnswers({});
    setSubmitted(false);
    setAvatarMood("idle");
  }

  // ─── KLASSE WECHSELN ─────────────────────────────────────────────────────────

  function changeGrade(g: number) {
    setGrade(g);
    setSelectedIds([]);
    setIncludeLesetest(false);
    setScreen("topics");
  }

  // ─── SUBTOPIC TOGGLE ─────────────────────────────────────────────────────────

  function toggleSubtopic(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  const scoreCount = answers.filter((a) => a.correct).length;
  const scorePct = answers.length > 0 ? Math.round((scoreCount / answers.length) * 100) : 0;
  const mark = config.calculateMark(scorePct, country);

  // ─── DRUCK — leeres Arbeitsblatt ─────────────────────────────────────────────

  const VISUAL_TYPE_LABELS_PRINT: Record<string, string> = {
    "genus-sort": "Artikel bestimmen",
    "satz-ordnen": "Satz ordnen",
    "bild-beschriften": "Bild beschriften",
    "fehler-finden": "Fehler finden",
    "wortfamilien-baum": "Wortfamilie",
    "geschichte-sortieren": "Geschichte ordnen",
    "wortarten-sortieren": "Wortarten bestimmen",
    "zeitformen-zuordnen": "Zeitform bestimmen",
    "satzglied-markieren": "Satzglieder markieren",
    "kasus-markieren": "Kasus bestimmen",
    "adjektiv-endungen": "Adjektiv-Endung",
    "luecken-text": "Lückentext ergänzen",
    "satzgefuge-diagram": "Satzgefüge analysieren",
    "epochen-zeitstrahl": "Epoche zuordnen",
    ...Object.fromEntries((config.visualTypes ?? []).map(vt => [vt.type, vt.printLabel])),
  };

  const VISUAL_TYPES_PRINT = new Set(Object.keys(VISUAL_TYPE_LABELS_PRINT));

  const handlePrintBlank = () => {
    const renderQuestionPrint = (q: TestQuestion, qi: number): string => {
      const parts: string[] = [];
      const aufgabeNr = Math.floor(qi / 3) + 1;
      const blockStart = Math.floor(qi / 3) * 3;
      const blockQs = [questions[blockStart], questions[blockStart + 1], questions[blockStart + 2]].filter(Boolean);
      const isVisualBlock = blockQs.length === 3 && blockQs.every(qq => VISUAL_TYPES_PRINT.has(qq.type));
      const subLabel = isVisualBlock ? String.fromCharCode(97 + (qi % 3)) : null;

      // Section header every 3 questions
      if (qi % 3 === 0 && !q.passageText) {
        if (isVisualBlock) {
          parts.push(`<div class="section-header visual-section">${labels.task} ${aufgabeNr} — ${VISUAL_TYPE_LABELS_PRINT[q.type] ?? labels.interactiveTask}</div>`);
        } else {
          parts.push(`<div class="section-header">${labels.task} ${aufgabeNr}</div>`);
        }
      }

      // Passage block (show once per unique title)
      if (q.passageText && (qi === 0 || questions[qi - 1]?.passageTitle !== q.passageTitle)) {
        parts.push(`<div class="passage-block">${q.passageTitle ? `<div class="passage-title">📖 ${q.passageTitle}</div>` : ""}<div class="passage-text">${q.passageText}</div></div>`);
      }

      // Question number and text
      const qLabel = isVisualBlock ? `${subLabel})` : `${qi + 1}.`;
      parts.push(`<div class="question">`);
      parts.push(`<div class="question-header"><span class="q-num">${qLabel}</span><span class="q-text">${isVisualBlock ? "" : q.question}</span></div>`);

      // Type-specific answer area
      switch (q.type) {
        case "mcq":
        case "bild-wort":
        case "anlaut-bild": {
          const opts = q.options ?? [];
          parts.push(`<div class="options">`);
          opts.forEach((opt, oi) => {
            const label = String.fromCharCode(65 + oi);
            parts.push(`<div class="option-row">☐ ${label}) ${opt}</div>`);
          });
          parts.push(`</div>`);
          break;
        }
        case "typing": {
          parts.push(`<div class="answer-line"></div>`);
          break;
        }
        case "genus-sort": {
          parts.push(`<div class="q-word">${q.word ?? ""}</div>`);
          parts.push(`<div class="options-inline">☐ der &nbsp;&nbsp;&nbsp; ☐ die &nbsp;&nbsp;&nbsp; ☐ das</div>`);
          break;
        }
        case "satz-ordnen": {
          const chips = (q.shuffled ?? []).map(w => `<span class="word-chip">${w}</span>`).join(" ");
          parts.push(`<div class="word-chips">${chips}</div>`);
          parts.push(`<div class="answer-line"></div>`);
          break;
        }
        case "bild-beschriften": {
          const opts = q.options ?? [];
          parts.push(`<div class="q-word">${q.imageKey ?? ""}</div>`);
          parts.push(`<div class="options">`);
          opts.forEach((opt, oi) => {
            const label = String.fromCharCode(65 + oi);
            parts.push(`<div class="option-row">☐ ${label}) ${opt}</div>`);
          });
          parts.push(`</div>`);
          break;
        }
        case "fehler-finden": {
          const words = q.words ?? [];
          const numbered = words.map((w, wi) => `<span class="numbered-word">(${wi + 1}) ${w}</span>`).join(" ");
          parts.push(`<div class="q-sentence">${numbered}</div>`);
          parts.push(`<div class="answer-line-short"><span class="answer-label">${labels.wrongWordNr ?? "Falsches Wort Nr.:"}</span> <span class="blank-line">______</span></div>`);
          break;
        }
        case "wortfamilien-baum": {
          parts.push(`<div class="q-word">${labels.root ?? "Stamm:"} <strong>${q.stamm ?? ""}</strong></div>`);
          const opts = q.options ?? [];
          parts.push(`<div class="options">`);
          opts.forEach((opt) => {
            parts.push(`<div class="option-row">☐ ${opt}</div>`);
          });
          parts.push(`</div>`);
          break;
        }
        case "geschichte-sortieren": {
          const sents = q.sentences ?? [];
          const shuffled = q.shuffledOrder ?? sents.map((_, i) => i);
          parts.push(`<div class="sentences-list">`);
          shuffled.forEach((origIdx, displayIdx) => {
            const sent = sents[origIdx] ?? "";
            parts.push(`<div class="sentence-row"><span class="order-box">___</span> ${displayIdx + 1}. ${sent}</div>`);
          });
          parts.push(`</div>`);
          break;
        }
        case "wortarten-sortieren": {
          const words = q.words ?? [];
          const wordList = words.map(w => `<span class="word-chip">${w}</span>`).join(" ");
          parts.push(`<div class="word-chips">${wordList}</div>`);
          parts.push(`<div class="hint-text">N = Nomen, V = Verb, A = Adjektiv</div>`);
          parts.push(`<div class="answer-line"></div>`);
          break;
        }
        case "zeitformen-zuordnen": {
          parts.push(`<div class="q-sentence">${q.sentence ?? q.question}</div>`);
          parts.push(`<div class="options-inline">☐ Präsens &nbsp;&nbsp;&nbsp; ☐ Präteritum &nbsp;&nbsp;&nbsp; ☐ Perfekt</div>`);
          break;
        }
        case "satzglied-markieren": {
          const words = q.words ?? [];
          const wordList = words.map(w => `<span class="word-chip">${w}</span>`).join(" ");
          parts.push(`<div class="word-chips">${wordList}</div>`);
          parts.push(`<div class="hint-text">S = Subjekt, P = Prädikat, O = Objekt</div>`);
          parts.push(`<div class="answer-line"></div>`);
          break;
        }
        case "kasus-markieren": {
          const sentence = q.sentence ?? "";
          const highlight = q.highlight ?? "";
          const displaySent = highlight
            ? sentence.replace(highlight, `<u><strong>${highlight}</strong></u>`)
            : sentence;
          parts.push(`<div class="q-sentence">${displaySent}</div>`);
          parts.push(`<div class="options-inline">☐ Nominativ &nbsp;&nbsp;&nbsp; ☐ Akkusativ &nbsp;&nbsp;&nbsp; ☐ Dativ &nbsp;&nbsp;&nbsp; ☐ Genitiv</div>`);
          break;
        }
        case "adjektiv-endungen": {
          parts.push(`<div class="q-sentence">${q.sentence ?? q.question}</div>`);
          parts.push(`<div class="options-inline">☐ -e &nbsp;&nbsp;&nbsp; ☐ -er &nbsp;&nbsp;&nbsp; ☐ -es &nbsp;&nbsp;&nbsp; ☐ -en &nbsp;&nbsp;&nbsp; ☐ -em</div>`);
          break;
        }
        case "luecken-text": {
          const lSentence = (q.lueckenSentence ?? "").replace("___", '<span class="blank-line">______</span>');
          parts.push(`<div class="q-sentence">${lSentence}</div>`);
          const lOpts = q.lueckenOptions ?? [];
          parts.push(`<div class="options">`);
          lOpts.forEach((opt, oi) => {
            const label = String.fromCharCode(65 + oi);
            parts.push(`<div class="option-row">☐ ${label}) ${opt}</div>`);
          });
          parts.push(`</div>`);
          break;
        }
        case "satzgefuge-diagram": {
          parts.push(`<div class="q-sentence"><strong>HS:</strong> ${q.hauptsatz ?? ""}</div>`);
          parts.push(`<div class="q-sentence"><strong>NS:</strong> ${q.nebensatz ?? ""}</div>`);
          if (q.konjunktion) parts.push(`<div class="hint-text">Konjunktion: <em>${q.konjunktion}</em></div>`);
          const sgOpts = q.satzgefugeOptions ?? [];
          parts.push(`<div class="options">`);
          sgOpts.forEach((opt, oi) => {
            const label = String.fromCharCode(65 + oi);
            parts.push(`<div class="option-row">☐ ${label}) ${opt}</div>`);
          });
          parts.push(`</div>`);
          break;
        }
        case "epochen-zeitstrahl": {
          parts.push(`<div class="q-word"><strong>${q.epochenAuthor ?? ""}</strong></div>`);
          if (q.epochenHint) parts.push(`<div class="hint-text">Hinweis: ${q.epochenHint}</div>`);
          const eOpts = q.epochenOptions ?? [];
          parts.push(`<div class="options">`);
          eOpts.forEach((opt, oi) => {
            const label = String.fromCharCode(65 + oi);
            parts.push(`<div class="option-row">☐ ${label}) ${opt}</div>`);
          });
          parts.push(`</div>`);
          break;
        }
        default: {
          parts.push(`<div class="answer-line"></div>`);
          break;
        }
      }

      parts.push(`</div>`); // close .question
      return parts.join("\n");
    };

    const questionsHtml = questions.map((q, qi) => renderQuestionPrint(q, qi)).join("\n");

    const html = `<!DOCTYPE html>
<html lang="${config.ttsLang.split("-")[0]}">
<head>
  <meta charset="UTF-8">
  <title>${config.title} – ${labels.gradeFull} ${grade}</title>
  <style>
    @page { size: A4; margin: 1.5cm 1.8cm 1.5cm 2.2cm; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      font-size: 11pt;
      color: #1a1a2e;
      background: white;
      background-image:
        linear-gradient(rgba(100,149,237,0.18) 1px, transparent 1px),
        linear-gradient(90deg, rgba(100,149,237,0.18) 1px, transparent 1px);
      background-size: 0.5cm 0.5cm;
      min-height: 29.7cm;
    }
    .page-content { background: transparent; position: relative; }

    /* ── HEADER ── */
    .header {
      border-bottom: 3px solid #1a1a2e;
      padding-bottom: 10px;
      margin-bottom: 16px;
    }
    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 10px;
    }
    .header-left h1 {
      font-size: 17pt;
      font-weight: 900;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #1a1a2e;
      line-height: 1.1;
    }
    .header-left .grade-badge {
      display: inline-block;
      margin-top: 4px;
      font-size: 9pt;
      font-weight: 700;
      color: #4b5563;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      border: 1.5px solid #d1d5db;
      border-radius: 4px;
      padding: 1px 8px;
      background: rgba(255,255,255,0.7);
    }
    .score-box {
      border: 2px solid #1a1a2e;
      border-radius: 6px;
      min-width: 100px;
      padding: 6px 10px;
      text-align: center;
      background: rgba(255,255,255,0.8);
      flex-shrink: 0;
    }
    .score-box .score-label { font-size: 7pt; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.08em; }
    .score-box .score-value { font-size: 18pt; font-weight: 900; color: #1a1a2e; line-height: 1.1; }
    .score-box .score-total { font-size: 8pt; color: #9ca3af; }

    .fields { display: flex; gap: 16px; flex-wrap: wrap; }
    .field { flex: 1; min-width: 150px; }
    .field label { font-size: 7.5pt; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.06em; display: block; margin-bottom: 2px; }
    .field .line {
      border-bottom: 1.5px solid #374151;
      min-height: 22px;
      background: rgba(255,255,255,0.6);
    }

    /* ── SECTION HEADERS ── */
    .section-header {
      font-size: 9pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #6b7280;
      margin: 16px 0 6px 0;
      padding-bottom: 3px;
      border-bottom: 1px dashed #d1d5db;
    }
    .section-header.visual-section {
      color: #4f46e5;
      border-bottom-color: #c7d2fe;
    }

    /* ── PASSAGE ── */
    .passage-block {
      background: rgba(219,234,254,0.4);
      border-left: 4px solid #93c5fd;
      border-radius: 0 6px 6px 0;
      padding: 8px 12px;
      margin-bottom: 12px;
    }
    .passage-title { font-size: 8pt; font-weight: 700; color: #3b82f6; text-transform: uppercase; margin-bottom: 4px; }
    .passage-text { font-size: 10pt; line-height: 1.6; color: #374151; }

    /* ── QUESTIONS ── */
    .question {
      margin-bottom: 12px;
      background: rgba(255,255,255,0.55);
      border-radius: 5px;
      padding: 8px 10px 6px 10px;
      border-left: 3px solid rgba(100,149,237,0.4);
      page-break-inside: avoid;
    }
    .question-header {
      display: flex;
      align-items: flex-start;
      gap: 6px;
      margin-bottom: 4px;
    }
    .q-num { font-weight: 800; font-size: 11pt; min-width: 22px; color: #1a1a2e; }
    .q-text { flex: 1; font-size: 11pt; line-height: 1.4; color: #1a1a2e; }
    .q-word { font-size: 13pt; font-weight: 700; color: #1a1a2e; margin: 4px 0 6px 28px; }
    .q-sentence { font-size: 11pt; line-height: 1.5; color: #374151; margin: 4px 0 6px 28px; }

    /* ── ANSWER AREAS ── */
    .answer-line {
      margin-top: 6px;
      margin-left: 28px;
      border-bottom: 1px solid #d1d5db;
      min-height: 28px;
    }
    .answer-line-short {
      margin-top: 6px;
      margin-left: 28px;
      font-size: 10pt;
    }
    .blank-line { border-bottom: 1.5px solid #374151; padding: 0 20px; }
    .answer-label { font-weight: 700; color: #4b5563; }

    /* ── OPTIONS ── */
    .options { margin-left: 28px; margin-top: 4px; }
    .option-row { font-size: 11pt; line-height: 1.8; color: #374151; padding: 1px 0; }
    .options-inline { margin-left: 28px; margin-top: 6px; font-size: 11pt; color: #374151; }

    /* ── WORD CHIPS ── */
    .word-chips { margin-left: 28px; margin-top: 6px; margin-bottom: 6px; }
    .word-chip {
      display: inline-block;
      border: 1.5px solid #d1d5db;
      border-radius: 4px;
      padding: 1px 8px;
      margin: 2px 3px;
      font-size: 10pt;
      background: rgba(255,255,255,0.7);
    }

    /* ── NUMBERED WORDS ── */
    .numbered-word { margin-right: 8px; font-size: 11pt; }

    /* ── SENTENCES LIST ── */
    .sentences-list { margin-left: 28px; margin-top: 4px; }
    .sentence-row { display: flex; align-items: baseline; gap: 8px; margin: 4px 0; font-size: 11pt; line-height: 1.5; }
    .order-box {
      display: inline-block;
      border: 1.5px solid #9ca3af;
      border-radius: 3px;
      padding: 0 8px;
      min-width: 28px;
      text-align: center;
      font-size: 10pt;
      background: rgba(255,255,255,0.6);
      flex-shrink: 0;
    }

    /* ── HINT TEXT ── */
    .hint-text { margin-left: 28px; margin-top: 4px; margin-bottom: 4px; font-size: 9pt; color: #6b7280; font-style: italic; }

    /* ── WATERMARK ── */
    .watermark {
      position: fixed;
      bottom: 0.8cm;
      right: 1.2cm;
      font-size: 7pt;
      color: #d1d5db;
      font-family: monospace;
      letter-spacing: 0.15em;
      pointer-events: none;
    }

    @media print {
      body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    }
  </style>
</head>
<body>
<div class="page-content">
  <div class="header">
    <div class="header-top">
      <div class="header-left">
        <h1>${config.title}</h1>
        <span class="grade-badge">${labels.gradeFull} ${grade}</span>
      </div>
      <div class="score-box">
        <div class="score-label">${labels.points ?? "Punkte"}</div>
        <div class="score-value">&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="score-total">/ ${totalQ} ${labels.pointsShort ?? "Pkt."}</div>
      </div>
    </div>
    <div class="fields">
      <div class="field">
        <label>${labels.name ?? "Name"}</label>
        <div class="line"></div>
      </div>
      <div class="field" style="max-width:120px">
        <label>${labels.gradeFull}</label>
        <div class="line"></div>
      </div>
      <div class="field" style="max-width:130px">
        <label>${labels.date ?? "Datum"}</label>
        <div class="line" style="padding-top:4px; font-size:9pt; color:#374151;">${dateStr}</div>
      </div>
    </div>
  </div>

  ${questionsHtml}
</div>
<div class="watermark">PLIZIO</div>
</body>
</html>`;

    const win = window.open("", "_blank");
    if (win) {
      win.document.write(html);
      win.document.close();
      setTimeout(() => { win.print(); }, 500);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white relative overflow-hidden">
      {/* Avatar */}
      <div className="fixed bottom-5 right-5 w-32 h-32 sm:w-40 sm:h-40 z-50 pointer-events-none">
        <AvatarCompanion
          {...avatarProps}
          mood={avatarMood}
          jumpTrigger={{ reaction: null, timestamp: 0 }}
          fixed={false}
        />
      </div>

      <AnimatePresence mode="wait">

        {/* ── LAND WÄHLEN ───────────────────────────────────────────────────── */}
        {screen === "country" && (
          <motion.div
            key="country"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden"
          >
            <LanguageBackground chars={config.bgChars} colors={config.bgColors} />
            <Link href="/" className="absolute top-5 left-5 z-10">
              <motion.div
                className="p-2 rounded-xl bg-white/5 border border-white/10"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft size={20} className="text-white/60" />
              </motion.div>
            </Link>

            <motion.div
              className="relative z-10 flex flex-col items-center gap-3 mb-10"
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              <motion.div
                className="p-4 rounded-2xl"
                style={{ background: "rgba(0,212,255,0.1)", boxShadow: "0 0 30px rgba(0,212,255,0.2)" }}
              >
                <BookOpen
                  size={42}
                  className="text-[#00D4FF]"
                  style={{ filter: "drop-shadow(0 0 12px rgba(0,212,255,0.6))" }}
                />
              </motion.div>
              <h1
                className="text-4xl font-black tracking-wider text-white"
                style={{ textShadow: "0 0 20px rgba(0,212,255,0.4)" }}
              >
                {config.title}
              </h1>
              <p className="text-white/50 text-sm">{labels.selectCountry}</p>
            </motion.div>

            <motion.div
              className="relative z-10 flex flex-col gap-3 w-full max-w-xs"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              {config.countries.map((c, i) => (
                <motion.button
                  key={c.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setCountry(c.code);
                    localStorage.setItem(config.storageKey, c.code);
                    setScreen("grade");
                  }}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all text-left"
                  style={{
                    background: "rgba(0,212,255,0.05)",
                    borderColor: "rgba(0,212,255,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.12)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,212,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.05)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,212,255,0.2)";
                  }}
                >
                  <span className="text-3xl">{c.flag}</span>
                  <div>
                    <div className="font-black text-white text-base">{c.label}</div>
                    <div className="text-[11px] text-white/40">{c.sub}</div>
                  </div>
                  <ChevronRight size={18} className="ml-auto text-[#00D4FF]/50" />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* ── KLASSE WÄHLEN ─────────────────────────────────────────────────── */}
        {screen === "grade" && (
          <motion.div
            key="grade"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden"
          >
            <LanguageBackground chars={config.bgChars} colors={config.bgColors} />
            <motion.button
              onClick={() => setScreen("country")}
              className="absolute top-5 left-5 z-10 p-2 rounded-xl bg-white/5 border border-white/10"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft size={20} className="text-white/60" />
            </motion.button>

            <motion.div
              className="relative z-10 flex flex-col items-center gap-3 mb-8"
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              <motion.div
                className="p-4 rounded-2xl"
                style={{ background: "rgba(0,212,255,0.1)", boxShadow: "0 0 30px rgba(0,212,255,0.2)" }}
              >
                <BookOpen
                  size={42}
                  className="text-[#00D4FF]"
                  style={{ filter: "drop-shadow(0 0 12px rgba(0,212,255,0.6))" }}
                />
              </motion.div>
              <h1
                className="text-4xl font-black tracking-wider text-white"
                style={{ textShadow: "0 0 20px rgba(0,212,255,0.4)" }}
              >
                {config.title}
              </h1>
              <p className="text-white/50 text-sm">
                {config.countries.find(cc => cc.code === country)?.flag ?? ""} {labels.selectGrade}
              </p>
            </motion.div>

            <motion.div
              className="relative z-10 grid grid-cols-4 gap-3 w-full max-w-xs"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((g, i) => (
                <motion.button
                  key={g}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => changeGrade(g)}
                  className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-0.5
                             border transition-all"
                  style={{
                    background: "rgba(0,212,255,0.05)",
                    borderColor: "rgba(0,212,255,0.2)",
                    boxShadow: "0 0 0 0 rgba(0,212,255,0)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.15)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,212,255,0.7)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 16px rgba(0,212,255,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.05)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,212,255,0.2)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 0 0 rgba(0,212,255,0)";
                  }}
                >
                  <span className="text-xs text-white/40 font-semibold">{labels.gradePrefix}</span>
                  <span className="text-2xl font-black text-[#00D4FF]">{g}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* ── THEMEN WÄHLEN ─────────────────────────────────────────────────── */}
        {screen === "topics" && (
          <motion.div
            key="topics"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="relative min-h-screen flex flex-col p-4 pb-36 max-w-lg mx-auto overflow-hidden"
          >
            <LanguageBackground chars={config.bgChars} colors={config.bgColors} />

            {/* Header */}
            <div className="relative z-10 flex items-center gap-3 pt-4 mb-1">
              <motion.button
                onClick={() => setScreen("grade")}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft size={18} />
              </motion.button>
              <div
                className="p-1.5 rounded-lg"
                style={{ background: "rgba(0,212,255,0.1)" }}
              >
                <BookOpen size={18} className="text-[#00D4FF]" />
              </div>
              <span className="font-black text-[#00D4FF] tracking-wide text-sm">{config.title}</span>
              <div className="ml-auto flex items-center gap-2">
                {/* Small country picker */}
                <select
                  value={country}
                  onChange={(e) => {
                    const c = e.target.value;
                    setCountry(c);
                    localStorage.setItem(config.storageKey, c);
                  }}
                  className="text-xs font-bold rounded-full px-2 py-1 border outline-none cursor-pointer"
                  style={{
                    background: "rgba(0,212,255,0.08)",
                    borderColor: "rgba(0,212,255,0.25)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {config.countries.map(cc => (
                    <option key={cc.code} value={cc.code}>{cc.flag} {cc.code}</option>
                  ))}
                </select>
                <span className="text-white/60 text-xs font-bold bg-[#00D4FF]/10 border border-[#00D4FF]/20 px-3 py-1 rounded-full">
                  {labels.gradePrefix} {grade}
                </span>
              </div>
            </div>
            <p className="relative z-10 text-white/35 text-xs mb-4 ml-10">{labels.selectTopics}</p>

            {/* Themes + Subtopics */}
            <div className="relative z-10 flex flex-col gap-2.5">
              {themes.map((theme) => {
                const availSubs = theme.subtopics.filter((s) => s.questions.length > 0 || (s as any).hasGenerator);
                const allSel = availSubs.length > 0 && availSubs.every((s) => selectedIds.includes(s.id));
                const toggleAll = () => {
                  if (allSel) {
                    setSelectedIds((prev) => prev.filter((id) => !availSubs.some((s) => s.id === id)));
                  } else {
                    setSelectedIds((prev) => {
                      const next = [...prev];
                      availSubs.forEach((s) => { if (!next.includes(s.id)) next.push(s.id); });
                      return next;
                    });
                  }
                };
                return (
                  <div
                    key={theme.id}
                    className="rounded-2xl overflow-hidden border"
                    style={{
                      background: "rgba(18,18,42,0.85)",
                      borderColor: `${theme.color}22`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {/* Theme Header */}
                    <div
                      className="flex items-center gap-2.5 px-4 py-3"
                      style={{ borderLeft: `3px solid ${theme.color}` }}
                    >
                      <span className="text-xl">{theme.icon}</span>
                      <span className="font-bold text-sm flex-1" style={{ color: theme.color }}>{theme.name}</span>
                      {availSubs.length > 1 && (
                        <button
                          onClick={toggleAll}
                          className="text-[10px] px-2 py-0.5 rounded-full border transition-all font-semibold"
                          style={{
                            color: allSel ? theme.color : "rgba(255,255,255,0.4)",
                            borderColor: allSel ? `${theme.color}80` : "rgba(255,255,255,0.15)",
                            background: allSel ? `${theme.color}15` : "transparent",
                          }}
                        >
                          {allSel ? labels.allCheck : labels.all}
                        </button>
                      )}
                    </div>
                    {/* Subtopics */}
                    <div className="px-3 pb-3 pt-1 flex flex-col gap-1.5">
                      {theme.subtopics.map((sub) => {
                        const sel = selectedIds.includes(sub.id);
                        const empty = sub.questions.length === 0 && !(sub as any).hasGenerator;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => !empty && toggleSubtopic(sub.id)}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-sm transition-all
                              ${sel
                                ? "text-white"
                                : empty
                                  ? "text-white/20 cursor-not-allowed"
                                  : "text-white/60 hover:text-white"
                              }`}
                            style={{
                              background: sel ? `${theme.color}18` : empty ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)",
                              border: sel ? `1px solid ${theme.color}60` : "1px solid rgba(255,255,255,0.07)",
                            }}
                          >
                            <div
                              className="w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-all"
                              style={{
                                background: sel ? theme.color : "transparent",
                                borderColor: sel ? theme.color : "rgba(255,255,255,0.25)",
                              }}
                            >
                              {sel && <Check size={10} strokeWidth={3} className="text-black" />}
                            </div>
                            <span className="flex-1 flex items-center gap-1 flex-wrap">
                              <span>{sub.name}</span>
                              {(configVisualSubtopicMap.get(sub.id) ?? []).map(vt => {
                                // Extract trailing emoji from label (e.g. "Sentence Builder ✏️" → "✏️")
                                const emoji = vt.label.match(/[\p{Emoji}\p{Emoji_Presentation}\p{Extended_Pictographic}]\uFE0F?$/u)?.[0];
                                return emoji ? (
                                  <span key={vt.type} className="text-xs opacity-70" title={vt.label}>{emoji}</span>
                                ) : null;
                              })}
                            </span>
                            {empty
                              ? <span className="text-[10px] text-white/20">{labels.soon}</span>
                              : <span className="text-[10px]" style={{ color: `${theme.color}80` }}>15 {labels.questionsShort}</span>
                            }
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* Lesetest */}
              <motion.button
                onClick={() => setIncludeLesetest((v) => !v)}
                whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all border"
                style={{
                  background: includeLesetest ? "rgba(255,215,0,0.08)" : "rgba(18,18,42,0.85)",
                  borderColor: includeLesetest ? "rgba(255,215,0,0.4)" : "rgba(255,215,0,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-all"
                  style={{
                    background: includeLesetest ? "#FFD700" : "rgba(255,215,0,0.08)",
                    borderColor: includeLesetest ? "#FFD700" : "rgba(255,215,0,0.25)",
                  }}
                >
                  {includeLesetest
                    ? <Check size={14} strokeWidth={3} className="text-black" />
                    : <span className="text-base">📖</span>
                  }
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm" style={{ color: includeLesetest ? "#FFD700" : "rgba(255,215,0,0.7)" }}>
                    {labels.readingTest ?? "📖 Lesetest"}
                  </div>
                  <div className="text-[11px] text-white/35 mt-0.5">{labels.readingTestDesc ?? "Text lesen & Fragen beantworten · 3 Fr."}</div>
                </div>
              </motion.button>
            </div>

            {/* Start Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 z-20" style={{ background: "linear-gradient(to top, #0A0A1A 60%, transparent)" }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={startTest}
                disabled={selectedIds.length === 0 && !includeLesetest}
                className="w-full max-w-lg mx-auto block py-4 rounded-2xl font-black text-lg text-black
                           disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #0099CC)",
                  boxShadow: selectedIds.length > 0 || includeLesetest ? "0 0 24px rgba(0,212,255,0.45)" : "none",
                }}
              >
                {labels.startTest}
                {(selectedIds.length > 0 || includeLesetest) && (
                  <span className="font-normal text-sm ml-2 opacity-70">
                    ({selectedIds.length + (includeLesetest ? 1 : 0)} {labels.areas})
                  </span>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* ── TEST ──────────────────────────────────────────────────────────── */}
        {screen === "test" && questions.length > 0 && (
          <ModernPaperTest
            title={config.title}
            icon={config.icon}
            gradeLabel={`${labels.gradeFull} ${grade}`}
            date={dateStr}
            solved={answeredCount}
            total={totalQ}
            onExit={() => setScreen("topics")}
            exitLabel={labels.back}
            userName={getUsername() || undefined}
            onPrint={handlePrintBlank}
          >
            {/* All questions at once — lined paper style */}
            <div style={{ fontSize: 14, lineHeight: '28px' }}>
              {questions.map((q, qi) => {
                const userAnswerRaw = paperAnswers[qi];
                const ans = submitted ? answers[qi] : undefined;
                const isCorrect = ans?.correct ?? false;

                // Section header every 3 questions
                const showSection = qi % 3 === 0 && !q.passageText;
                const aufgabeNr = Math.floor(qi / 3) + 1;

                // Visual block detection: all 3 questions in this Aufgabe are visual
                const VISUAL_TYPES_SET = new Set([
                  "genus-sort","satz-ordnen","bild-beschriften","fehler-finden",
                  "wortfamilien-baum","geschichte-sortieren","wortarten-sortieren",
                  "zeitformen-zuordnen","satzglied-markieren","kasus-markieren","adjektiv-endungen",
                  "luecken-text","satzgefuge-diagram","epochen-zeitstrahl",
                  ...(config.visualTypes ?? []).map(vt => vt.type),
                ]);
                const VISUAL_TYPE_LABELS: Record<string, string> = {
                  "genus-sort": "Artikel bestimmen 🔵",
                  "satz-ordnen": "Satz ordnen ✏️",
                  "bild-beschriften": "Bild beschriften 🖼️",
                  "fehler-finden": "Fehler finden 🔍",
                  "wortfamilien-baum": "Wortfamilien 🌳",
                  "geschichte-sortieren": "Geschichte ordnen 📋",
                  "wortarten-sortieren": "Wortarten bestimmen 🏷️",
                  "zeitformen-zuordnen": "Zeitformen zuordnen ⏰",
                  "satzglied-markieren": "Satzglieder markieren 📐",
                  "kasus-markieren": "Kasus bestimmen 📌",
                  "adjektiv-endungen": "Adjektiv-Endungen ✍️",
                  "luecken-text": "Lückentext ergänzen ✏️",
                  "satzgefuge-diagram": "Satzgefüge analysieren 🔗",
                  "epochen-zeitstrahl": "Epoche zuordnen 📅",
                  ...Object.fromEntries((config.visualTypes ?? []).map(vt => [vt.type, vt.label])),
                };
                const blockStart = Math.floor(qi / 3) * 3;
                const blockQs = [questions[blockStart], questions[blockStart+1], questions[blockStart+2]].filter(Boolean);
                const isVisualBlock = blockQs.length === 3 && blockQs.every(qq => VISUAL_TYPES_SET.has(qq.type));
                const subLabel = isVisualBlock ? String.fromCharCode(97 + (qi % 3)) : null; // 'a','b','c'

                // Show passage once per unique passageTitle
                const showPassage = q.passageText &&
                  (qi === 0 || questions[qi - 1].passageTitle !== q.passageTitle);

                return (
                  <div key={qi}>
                    {/* Passage block */}
                    {showPassage && (
                      <div className="bg-blue-50/80 border-l-4 border-blue-300 rounded-r-lg px-3"
                        style={{ lineHeight: '28px', marginBottom: 28 }}>
                        {q.passageTitle && (
                          <p style={{ lineHeight: '28px' }} className="text-blue-500 text-xs font-bold uppercase">📖 {q.passageTitle}</p>
                        )}
                        <p style={{ lineHeight: '28px' }} className="text-slate-700 text-sm">{q.passageText}</p>
                      </div>
                    )}

                    {/* Aufgabe section header every 3 questions */}
                    {showSection && (
                      isVisualBlock ? (
                        <div style={{ lineHeight: '28px' }} className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] font-black uppercase tracking-widest bg-indigo-50 text-indigo-500 border border-indigo-200 rounded px-2 py-0.5 whitespace-nowrap">
                            {labels.task} {aufgabeNr}
                          </span>
                          <span className="text-xs font-bold text-indigo-600 whitespace-nowrap">
                            {VISUAL_TYPE_LABELS[q.type] ?? labels.interactiveTask}
                          </span>
                          <span className="flex-1 border-t border-indigo-100" />
                        </div>
                      ) : (
                        <div style={{ height: 28, lineHeight: '28px' }}
                          className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                            {labels.task} {aufgabeNr}
                          </span>
                          <span className="flex-1 border-t border-slate-100" />
                        </div>
                      )
                    )}

                    {/* Question row — sits on a line, NO fractional padding */}
                    <div style={{ lineHeight: '28px' }} className="flex items-start gap-2">
                      <span className={`font-mono text-xs w-5 text-right shrink-0 ${isVisualBlock ? 'text-indigo-400 font-bold' : 'text-slate-400'}`} style={{ lineHeight: '28px' }}>
                        {isVisualBlock ? `${subLabel})` : `${qi + 1}.`}
                      </span>
                      <p className="flex-1 text-slate-800 text-sm font-semibold" style={{ lineHeight: '28px' }}>
                        {q.type === "anlaut-bild" ? "" : q.question}
                      </p>
                      {/* TTS button */}
                      <button
                        type="button"
                        onClick={() => speakText(
                          q.type === "anlaut-bild"
                            ? (g1WordLabels[q.question] ?? q.question)
                            : q.type === "genus-sort"
                              ? (q.word ?? q.question)
                              : q.type === "satz-ordnen"
                                ? (Array.isArray(q.answer) ? q.answer[0] : q.answer ?? q.question)
                                : q.question,
                          config.ttsLang, config.ttsRate, config.ttsPitch
                        )}
                        className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-400 transition-colors text-xs"
                        style={{ marginTop: 1 }}
                        title={labels.readAloud}
                        tabIndex={-1}
                      >🔊</button>
                      {/* Correction mark after submit */}
                      {submitted && ans && (
                        <span className={`shrink-0 font-bold text-base leading-7 ${isCorrect ? 'text-emerald-500' : 'text-red-500'}`}>
                          {isCorrect ? '✓' : '✗'}
                        </span>
                      )}
                    </div>

                    {/* MCQ options — each row sits on one ruled line */}
                    {q.type === "mcq" && q.options && (
                      <div className="ml-7">
                        {q.options.map((opt, oi) => {
                          const isSelected = userAnswerRaw === String(oi);
                          let rowCls = "text-slate-600 hover:bg-blue-50/50 cursor-pointer";
                          let labelCls = "text-slate-300";
                          if (submitted && ans) {
                            if (oi === q.correct) {
                              rowCls = "text-emerald-700 bg-emerald-50/60 cursor-default";
                              labelCls = "text-emerald-500";
                            } else if (isSelected && !isCorrect) {
                              rowCls = "text-red-500 bg-red-50/60 cursor-default line-through";
                              labelCls = "text-red-400";
                            } else {
                              rowCls = "text-slate-300 cursor-default";
                              labelCls = "text-slate-200";
                            }
                          } else if (isSelected) {
                            rowCls = "text-blue-800 bg-blue-50/80 font-semibold cursor-pointer";
                            labelCls = "text-blue-500";
                          }
                          return (
                            <button
                              key={oi}
                              onClick={() => { if (!submitted) { playClick(); setPaperAnswers((prev) => ({ ...prev, [qi]: String(oi) })); } }}
                              disabled={submitted}
                              style={{ height: 28, lineHeight: '28px' }}
                              className={`w-full text-left flex items-center gap-1.5 px-1 text-sm transition-colors ${rowCls}`}
                            >
                              <span className={`font-mono text-xs w-5 text-right shrink-0 ${labelCls}`}>
                                {String.fromCharCode(65 + oi)})
                              </span>
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Bild-Wort: show word → 4 image tiles to click */}
                    {q.type === "bild-wort" && q.options && (
                      <>
                      <div className="ml-7 flex items-center" style={{ height: 28 }}>
                        <span className="text-xs text-slate-400 italic">{labels.clickCorrectImage ?? "🖼 Klicke auf das richtige Bild:"}</span>
                      </div>
                      <div className="ml-7 py-1" style={{ height: 84 }}>
                        <div className="flex gap-2 h-full">
                          {q.options.map((imgKey, oi) => {
                            const Icon = g1Icons[imgKey];
                            const isSelected = userAnswerRaw === String(oi);
                            const isRightAnswer = oi === q.correct;
                            let border = "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/30 cursor-pointer";
                            if (submitted) {
                              if (isRightAnswer) border = "border-emerald-400 bg-emerald-50 cursor-default";
                              else if (isSelected && !isCorrect) border = "border-red-400 bg-red-50 cursor-default opacity-60";
                              else border = "border-slate-100 bg-white cursor-default opacity-40";
                            } else if (isSelected) {
                              border = "border-blue-400 bg-blue-50 cursor-pointer ring-1 ring-blue-300";
                            }
                            return (
                              <button
                                key={oi}
                                onClick={() => { if (!submitted) { playClick(); setPaperAnswers((prev) => ({ ...prev, [qi]: String(oi) })); } }}
                                disabled={submitted}
                                className={`flex-1 rounded-lg border-2 flex flex-col items-center justify-center transition-all ${border}`}
                                style={{ height: 76 }}
                              >
                                {Icon ? (
                                  <div style={{ width: 44, height: 44 }}><Icon /></div>
                                ) : (
                                  <span className="text-xs text-slate-400">{imgKey}</span>
                                )}
                                <span className="text-[9px] font-semibold text-slate-400 mt-0.5">
                                  {g1WordLabels[imgKey] ?? imgKey}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      </>
                    )}

                    {/* Anlaut-Bild: show image → 4 letter buttons */}
                    {q.type === "anlaut-bild" && q.options && (() => {
                      const Icon = g1Icons[q.question];
                      return (
                        <>
                        <div className="ml-7 flex items-center" style={{ height: 28 }}>
                          <span className="text-xs text-slate-400 italic">{labels.whichLetterStarts ?? "🔤 Mit welchem Buchstaben beginnt das Wort?"}</span>
                        </div>
                        <div className="ml-7" style={{ height: 84 }}>
                          <div className="flex items-center gap-3 h-full">
                            {/* Image */}
                            <div className="shrink-0 rounded-xl border-2 border-slate-200 bg-white flex items-center justify-center" style={{ width: 72, height: 72 }}>
                              {Icon ? (
                                <div style={{ width: 52, height: 52 }}><Icon /></div>
                              ) : (
                                <span className="text-xs text-slate-400">{q.question}</span>
                              )}
                            </div>
                            {/* Letter choices */}
                            <div className="flex gap-2 flex-1">
                              {q.options.map((letter, oi) => {
                                const isSelected = userAnswerRaw === String(oi);
                                const isRightAnswer = oi === q.correct;
                                let cls = "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 cursor-pointer";
                                if (submitted) {
                                  if (isRightAnswer) cls = "border-emerald-400 bg-emerald-50 text-emerald-700 cursor-default font-bold";
                                  else if (isSelected && !isCorrect) cls = "border-red-400 bg-red-50 text-red-500 cursor-default line-through opacity-70";
                                  else cls = "border-slate-100 bg-white text-slate-300 cursor-default opacity-50";
                                } else if (isSelected) {
                                  cls = "border-blue-400 bg-blue-50 text-blue-700 font-bold cursor-pointer ring-1 ring-blue-300";
                                }
                                return (
                                  <button
                                    key={oi}
                                    onClick={() => { if (!submitted) { playClick(); setPaperAnswers((prev) => ({ ...prev, [qi]: String(oi) })); } }}
                                    disabled={submitted}
                                    className={`flex-1 rounded-xl border-2 text-xl font-black transition-all ${cls}`}
                                    style={{ height: 56 }}
                                  >
                                    {letter}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        </>
                      );
                    })()}

                    {/* Genus-Sortierung: tap der/die/das — compact paper-inline */}
                    {q.type === "genus-sort" && q.word && (
                      <div className="ml-7">
                        <GenusSortierung
                          word={q.word}
                          correct={q.answer as "der" | "die" | "das"}
                          userAnswer={userAnswerRaw ?? ""}
                          submitted={submitted}
                          onAnswer={(a) => { if (!submitted) { playClick(); setPaperAnswers(prev => ({ ...prev, [qi]: a })); } }}
                        />
                      </div>
                    )}

                    {/* Satz-Ordnen: tap word chips into order — compact paper-inline */}
                    {q.type === "satz-ordnen" && q.shuffled && (
                      <div className="ml-7">
                        <SatzOrdnen
                          shuffled={q.shuffled}
                          answer={Array.isArray(q.answer) ? q.answer[0] : q.answer ?? ""}
                          userAnswer={userAnswerRaw ?? ""}
                          submitted={submitted}
                          onAnswer={(a) => { if (!submitted) { setPaperAnswers(prev => ({ ...prev, [qi]: a })); } }}
                        />
                      </div>
                    )}

                    {/* Bild-Beschriften: image → pick correct Artikel+Nomen phrase */}
                    {q.type === "bild-beschriften" && q.imageKey && q.options && (
                      <div className="ml-7">
                        <BildBeschriften
                          imageKey={q.imageKey}
                          options={q.options}
                          correct={q.correct ?? 0}
                          userAnswer={userAnswerRaw ?? ""}
                          submitted={submitted}
                          onAnswer={(a) => { if (!submitted) { playClick(); setPaperAnswers(prev => ({ ...prev, [qi]: a })); } }}
                        />
                      </div>
                    )}

                    {/* Fehler-Finden: tap the wrong word in the sentence */}
                    {q.type === "fehler-finden" && q.words && (
                      <div className="ml-7">
                        <FehlerFinden
                          words={q.words}
                          errorIndex={q.errorIndex ?? 0}
                          hint={q.hint ?? ""}
                          userAnswer={userAnswerRaw ?? ""}
                          submitted={submitted}
                          onAnswer={(a) => { if (!submitted) { playClick(); setPaperAnswers(prev => ({ ...prev, [qi]: a })); } }}
                        />
                      </div>
                    )}

                    {/* Wortfamilien-Baum: tap all words from the same family */}
                    {q.type === "wortfamilien-baum" && q.stamm && q.options && q.correctSet && (
                      <div className="ml-7">
                        <WortfamilienBaum
                          stamm={q.stamm}
                          options={q.options}
                          correctSet={q.correctSet}
                          userAnswer={userAnswerRaw ?? ""}
                          submitted={submitted}
                          onAnswer={(a) => { if (!submitted) { setPaperAnswers(prev => ({ ...prev, [qi]: a })); } }}
                        />
                      </div>
                    )}

                    {/* Geschichte-Sortieren: tap sentence chips into story order */}
                    {q.type === "geschichte-sortieren" && q.sentences && q.shuffledOrder && (
                      <div className="ml-7">
                        <GeschichteSortieren
                          sentences={q.sentences}
                          shuffledOrder={q.shuffledOrder}
                          userAnswer={userAnswerRaw ?? ""}
                          submitted={submitted}
                          onAnswer={(a) => { if (!submitted) { setPaperAnswers(prev => ({ ...prev, [qi]: a })); } }}
                        />
                      </div>
                    )}

                    {/* Wortarten-Sortieren: tap to assign Nomen/Verb/Adjektiv */}
                    {q.type === "wortarten-sortieren" && q.words && q.wordCategories && (
                      <div className="ml-7">
                        <WortartenSortieren
                          words={q.words}
                          categories={q.wordCategories}
                          userAnswer={userAnswerRaw ?? ""}
                          submitted={submitted}
                          onAnswer={(a) => { if (!submitted) { setPaperAnswers(prev => ({ ...prev, [qi]: a })); } }}
                        />
                      </div>
                    )}

                    {/* Zeitformen-Zuordnen: tap Präsens/Präteritum/Perfekt */}
                    {q.type === "zeitformen-zuordnen" && q.sentence && q.correctZeitform && (
                      <div className="ml-7">
                        <ZeitformenZuordnen
                          sentence={q.sentence}
                          correctZeitform={q.correctZeitform}
                          userAnswer={userAnswerRaw ?? ""}
                          submitted={submitted}
                          onAnswer={(a) => { if (!submitted) { setPaperAnswers(prev => ({ ...prev, [qi]: a })); } }}
                        />
                      </div>
                    )}

                    {/* Satzglied-Markieren: tap S/P/O labels onto words */}
                    {q.type === "satzglied-markieren" && q.words && q.correctLabels && (
                      <div className="ml-7">
                        <SatzgliedMarkieren
                          words={q.words}
                          correctLabels={q.correctLabels}
                          userAnswer={userAnswerRaw ?? ""}
                          submitted={submitted}
                          onAnswer={(a) => { if (!submitted) { setPaperAnswers(prev => ({ ...prev, [qi]: a })); } }}
                        />
                      </div>
                    )}

                    {/* KasusMarkieren: K4 — identify case of highlighted phrase */}
                    {q.type === "kasus-markieren" && q.sentence && q.highlight && q.correctKasus && (
                      <div className="ml-7">
                        <KasusMarkieren
                          sentence={q.sentence}
                          highlight={q.highlight}
                          correctKasus={q.correctKasus}
                          userAnswer={userAnswerRaw ?? ""}
                          submitted={submitted}
                          onAnswer={(a) => { if (!submitted) { setPaperAnswers(prev => ({ ...prev, [qi]: a })); } }}
                        />
                      </div>
                    )}

                    {/* AdjektivEndungen: K4 — tap the correct adjective ending */}
                    {q.type === "adjektiv-endungen" && q.sentence && q.stem && q.correctEnding && (
                      <div className="ml-7">
                        <AdjektivEndungen
                          phrase={q.sentence}
                          stem={q.stem}
                          correctEnding={q.correctEnding}
                          userAnswer={userAnswerRaw ?? ""}
                          submitted={submitted}
                          onAnswer={(a) => { if (!submitted) { setPaperAnswers(prev => ({ ...prev, [qi]: a })); } }}
                        />
                      </div>
                    )}

                    {/* LueckenText: K8 Partizipialkonstruktionen — fill blank with correct form */}
                    {q.type === "luecken-text" && q.lueckenSentence && q.lueckenOptions && q.lueckenCorrect !== undefined && (
                      <div className="ml-7">
                        <LueckenText
                          sentence={q.lueckenSentence}
                          options={q.lueckenOptions}
                          correct={q.lueckenCorrect}
                          userAnswer={userAnswerRaw ?? ""}
                          submitted={submitted}
                          onAnswer={(a) => { if (!submitted) { playClick(); setPaperAnswers(prev => ({ ...prev, [qi]: a })); } }}
                        />
                      </div>
                    )}

                    {/* SatzgefugeDiagram: K8 Nebensatztypen — identify clause type */}
                    {q.type === "satzgefuge-diagram" && q.hauptsatz && q.nebensatz && q.satzgefugeOptions && q.satzgefugeCorrect !== undefined && (
                      <div className="ml-7">
                        <SatzgefugeDiagram
                          hauptsatz={q.hauptsatz}
                          nebensatz={q.nebensatz}
                          konjunktion={q.konjunktion ?? ""}
                          options={q.satzgefugeOptions}
                          correct={q.satzgefugeCorrect}
                          userAnswer={userAnswerRaw ?? ""}
                          submitted={submitted}
                          onAnswer={(a) => { if (!submitted) { playClick(); setPaperAnswers(prev => ({ ...prev, [qi]: a })); } }}
                        />
                      </div>
                    )}

                    {/* EpochenZeitstrahl: K8 Epochen & Gattungen — assign author to epoch */}
                    {q.type === "epochen-zeitstrahl" && q.epochenAuthor && q.epochenOptions && q.epochenCorrect !== undefined && (
                      <div className="ml-7">
                        <EpochenZeitstrahl
                          author={q.epochenAuthor}
                          hint={q.epochenHint}
                          options={q.epochenOptions}
                          correct={q.epochenCorrect}
                          userAnswer={userAnswerRaw ?? ""}
                          submitted={submitted}
                          onAnswer={(a) => { if (!submitted) { playClick(); setPaperAnswers(prev => ({ ...prev, [qi]: a })); } }}
                        />
                      </div>
                    )}

                    {/* Config visual types (pluggable per-language) */}
                    {configVisualMap.has(q.type) && (() => {
                      const vt = configVisualMap.get(q.type)!;
                      const Comp = vt.component;
                      const props = vt.mapProps(q, userAnswerRaw ?? "", submitted, (a: string) => {
                        if (!submitted) { playClick(); setPaperAnswers(prev => ({ ...prev, [qi]: a })); }
                      });
                      return <div className="ml-7"><Comp {...props} /></div>;
                    })()}

                    {/* Typing input — transparent, sits on a ruled line */}
                    {q.type === "typing" && (
                      <div style={{ height: 28, lineHeight: '28px' }}
                        className="ml-7 flex items-center gap-2 px-1">
                        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
                        {submitted && ans ? (
                          <span className={`text-sm font-medium ${isCorrect ? 'text-emerald-600' : 'text-red-500'}`}>
                            {userAnswerRaw || <span className="text-slate-300 italic text-xs">—</span>}
                            {!isCorrect && (
                              <span className="text-slate-400 text-xs ml-2 font-normal">
                                → {ans.expected}
                              </span>
                            )}
                          </span>
                        ) : (
                          <input
                            value={userAnswerRaw ?? ""}
                            onChange={(e) =>
                              setPaperAnswers((prev) => ({ ...prev, [qi]: e.target.value }))
                            }
                            placeholder={labels.answerPlaceholder}
                            className="flex-1 bg-transparent border-0 text-sm text-slate-800 outline-none placeholder:text-slate-300"
                            style={{ height: 28, lineHeight: '28px' }}
                          />
                        )}
                      </div>
                    )}

                    {/* Spacer — one empty ruled line between questions */}
                    <div style={{ height: 28 }} />
                  </div>
                );
              })}

              {/* Extra blank lines at end */}
              {[...Array(3)].map((_, i) => (
                <div key={`blank-${i}`} style={{ height: 28 }} />
              ))}
            </div>

            {/* Floating Abgeben button */}
            {!submitted && (
              <motion.div
                className="fixed left-1/2 -translate-x-1/2 bottom-8 z-40"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  onClick={handleAbgeben}
                  disabled={answeredCount < totalQ}
                  className={`px-10 py-3 rounded-lg font-black text-sm shadow-xl active:scale-95 transition-all ${answeredCount < totalQ ? "bg-slate-600 text-white/40 cursor-not-allowed" : "bg-slate-800 text-white hover:bg-slate-700"}`}
                  whileHover={answeredCount >= totalQ ? { scale: 1.04 } : {}}
                  whileTap={answeredCount >= totalQ ? { scale: 0.96 } : {}}
                >
                  {answeredCount < totalQ ? `${labels.submit.replace(" ✓", "")} (${answeredCount}/${totalQ})` : labels.submit}
                </motion.button>
              </motion.div>
            )}
          </ModernPaperTest>
        )}

        {/* ── BELOHNUNG ─────────────────────────────────────────────────────── */}
        {screen === "reward" && earnedCard && (
          <RewardReveal
            rarity={earnedCard as "bronze" | "silver" | "gold" | "legendary"}
            game={config.gameId}
            score={answers.filter((a) => a.correct).length}
            total={answers.length}
            onDone={() => setScreen("result")}
          />
        )}

        {/* ── ERGEBNIS ──────────────────────────────────────────────────────── */}
        {screen === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="min-h-screen flex flex-col items-center p-4 pb-10 max-w-lg mx-auto"
          >
            <MilestonePopup />

            <div className="w-full pt-6">
              {/* Title */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <BookOpen size={24} className="text-[#00D4FF]" />
                <span className="text-[#00D4FF] font-black tracking-wide">{config.title} — {labels.gradeFull} {grade}</span>
              </div>

              {/* Mark */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                className="flex flex-col items-center mb-6"
              >
                <div
                  className="w-28 h-28 rounded-full flex flex-col items-center justify-center border-4 mb-3"
                  style={{ borderColor: mark.color, boxShadow: `0 0 30px ${mark.color}40` }}
                >
                  <span className="text-4xl font-black" style={{ color: mark.color }}>{mark.note}</span>
                  <span className="text-[10px] text-white/40 uppercase">{labels.markLabel}</span>
                </div>
                <p className="text-xl font-bold" style={{ color: mark.color }}>{mark.label}</p>
                <p className="text-white/50 text-sm mt-1">
                  {scoreCount} / {answers.length} {labels.correct} ({scorePct}%)
                </p>
              </motion.div>

              {/* Answer Review */}
              <div className="bg-[#12122A] rounded-xl border border-white/10 overflow-hidden mb-6">
                <div className="px-4 py-2.5 border-b border-white/5 text-xs text-white/40 font-bold uppercase tracking-wide">
                  {labels.review}
                </div>
                <div className="divide-y divide-white/5">
                  {questions.map((q, i) => {
                    const ans = answers[i];
                    if (!ans) return null;
                    return (
                      <div key={i} className="flex items-start gap-3 px-4 py-3">
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0
                          ${ans.correct ? "bg-[#00FF88]/20 text-[#00FF88]" : "bg-[#FF2D78]/20 text-[#FF2D78]"}`}>
                          {ans.correct ? <Check size={11} /> : <XIcon size={11} />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white/70 text-xs leading-snug line-clamp-2">{q.question}</p>
                          {!ans.correct && (
                            <p className="text-[#00FF88] text-xs mt-0.5">
                              ✓ {ans.expected}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Teacher note */}
              <InlineTeacherNote
                playerName={getUsername() || ""}
                percentage={scorePct}
                countryCode={country}
              />

              {/* Buttons */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  onClick={restart}
                  className="flex-1 py-4 rounded-xl bg-[#00D4FF] text-black font-black flex items-center justify-center gap-2"
                >
                  <RotateCcw size={18} /> {labels.tryAgain}
                </motion.button>
                <Link
                  href="/"
                  className="flex-1 py-4 rounded-xl bg-white/10 text-white/70 font-bold
                             flex items-center justify-center gap-2 hover:bg-white/15 transition-all"
                >
                  <Home size={18} /> {labels.mainMenu}
                </Link>
              </div>

              {/* PDF Download */}
              <motion.button
                onClick={() => {
                  const now = new Date();
                  const dateStr = `${now.getDate().toString().padStart(2, "0")}.${(now.getMonth() + 1).toString().padStart(2, "0")}.${now.getFullYear()}`;
                  (config.generatePdf ?? generateDeutschTestPdf)({
                    gradeLevel: `${labels.gradeFull} ${grade}`,
                    date: dateStr,
                    questions: questions.map(q => ({ question: q.question, type: q.type })),
                    answers,
                    scoreCount,
                    totalCount: answers.length,
                    percentage: scorePct,
                    noteValue: mark.note,
                    noteLabel: mark.label,
                    noteColor: mark.color,
                    studentName: getUsername() || undefined,
                  });
                }}
                className="w-full py-3 rounded-xl border-2 border-[#00D4FF]/30 text-[#00D4FF] font-bold text-sm flex items-center justify-center gap-2 mt-3"
                style={{ background: "rgba(0,212,255,0.08)" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={18} />
                {labels.pdf}
              </motion.button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

// ─── GERMAN CONFIG ──────────────────────────────────────────────────────────

const DEUTSCH_CONFIG: LanguageTestEngineConfig = {
  gameId: "deutschtest",
  title: "DEUTSCH TEST",
  icon: "✏️",
  color: "#00D4FF",
  ttsLang: "de-DE",
  ttsRate: 0.88,
  ttsPitch: 1.1,
  dateLocale: "de-DE",
  storageKey: "deutschtest_country",
  bgChars: DE_CHARS,
  bgColors: DE_COLORS,
  countries: [
    { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
    { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
    { code: "CH", flag: "🇨🇭", label: "Schweiz", sub: "Note 6–1" },
  ],
  calculateMark: (pct, country) => calculateDeutschMark(pct, country as DeutschCountry),
  /* eslint-disable @typescript-eslint/no-explicit-any */
  curriculum: DEUTSCH_CURRICULUM as any,
  getQuestions: getDeutschQuestions as any,
  generateForSubtopics: generateForSubtopics as any,
  /* eslint-enable @typescript-eslint/no-explicit-any */
  checkAnswer: checkAnswer,
  getSubtopicHint: getSubtopicHint,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getReadingPassage: ((grade: number) => getRandomPassage(grade) ?? null) as any,
  generatePdf: generateDeutschTestPdf,
  g1Icons: G1_ICONS,
  g1WordLabels: G1_WORD_LABELS,
  labels: {
    selectCountry: "Wähle dein Land",
    selectGrade: "Wähle deine Klassenstufe",
    gradePrefix: "Kl.",
    gradeFull: "Klasse",
    selectTopics: "Themen für deinen Test auswählen",
    all: "Alle",
    allCheck: "Alle ✓",
    soon: "bald",
    questionsShort: "Fr.",
    startTest: "TEST STARTEN →",
    areas: "Bereiche",
    readingTest: "📖 Lesetest",
    readingTestDesc: "Text lesen & Fragen beantworten · 3 Fr.",
    task: "Aufgabe",
    interactiveTask: "Interaktive Aufgabe",
    readAloud: "Vorlesen",
    clickCorrectImage: "🖼 Klicke auf das richtige Bild:",
    whichLetterStarts: "🔤 Mit welchem Buchstaben beginnt das Wort?",
    answerPlaceholder: "Antwort...",
    submit: "Abgeben ✓",
    back: "Zurück",
    markLabel: "Note",
    correct: "richtig",
    review: "Auswertung",
    tryAgain: "Nochmal",
    mainMenu: "Hauptmenü",
    pdf: "PDF",
    points: "Punkte",
    pointsShort: "Pkt.",
    name: "Name",
    date: "Datum",
    wrongWordNr: "Falsches Wort Nr.:",
    root: "Stamm:",
  },
};

export { LanguageTestEngine };
export type { LanguageTestEngineConfig };

export default function DeutschTestPage() {
  return <LanguageTestEngine config={DEUTSCH_CONFIG} />;
}
