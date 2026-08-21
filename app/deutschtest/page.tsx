"use client";

import { useState, useEffect, useRef, useMemo, Suspense } from "react";
import { G1_ICONS, G1_WORD_LABELS } from "@/components/grade1-visual/G1Icons";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowLeft, Check, X as XIcon, RotateCcw, Home, ChevronRight, Download } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { track } from "@/lib/analytics";
import { useLang } from "@/components/LanguageProvider";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores, checkNewMilestones } from "@/lib/milestones";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import ModernPaperTest from "@/components/ModernPaperTest";
import TopicSvgRenderer from "@/components/TopicSvgRenderer";
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
import { calculateEnglishGrade } from "@/lib/englishCurriculum";
import { getRandomPassage, type Lesepassage, type LeseQuestion } from "@/lib/deutschLesetest";
import { generateForSubtopics } from "@/lib/deutschGenerators";
import { checkAnswer } from "@/lib/deutschValidation";
import { getUsername } from "@/lib/username";
import { calculateRomanianGrade } from "@/lib/romanianCurriculum";
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
import { speak as centralSpeak } from "@/lib/astromath-tts";
import type { LanguageTestEngineConfig, TestGradeMark, VisualQuestionType } from "@/lib/languageTestTypes";

// ─── TTS HELPER ──────────────────────────────────────────────────────────────
// Delegates to central strict-voice helper — skips silently if no native voice
// (e.g. if mobile Android has no Hungarian/Romanian voice, better silent than wrong-accent English/Italian fallback)
function speakText(text: string, ttsLang = "de-DE", _ttsRate?: number, _ttsPitch?: number) {
  centralSpeak(text, ttsLang.split("-")[0].toLowerCase());
}

// ─── FLOATING BACKGROUND ─────────────────────────────────────────────────────

const DE_CHARS = ["A","B","C","Ä","Ö","Ü","ß","!","?",",",".",";","Z","W","R","S","T"];
const DE_COLORS = ["#FFD700","#FF4444","#00D4FF","#FFFFFF","#B44DFF"];

const DEFAULT_SUPPORTED_GRADES = [1, 2, 3, 4, 5, 6, 7, 8] as const;
const ENGLISH_COUNTRY_CODES = new Set(["US", "GB", "AU", "CA", "IE", "NZ"]);
const GERMAN_COUNTRY_CODES = new Set(["DE", "AT", "CH"]);
const COUNTRY_LOCALES: Record<string, string> = {
  DE: "de-DE",
  AT: "de-AT",
  CH: "de-CH",
  HU: "hu-HU",
  RO: "ro-RO",
  US: "en-US",
  GB: "en-GB",
  AU: "en-AU",
  CA: "en-CA",
  IE: "en-IE",
  NZ: "en-NZ",
};
const DEFAULT_LOCALE_BY_LANG: Record<string, string> = {
  de: "de-DE",
  en: "en-US",
  hu: "hu-HU",
  ro: "ro-RO",
};

function assertSourceInvariant(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function getCountryLangPrefix(countryCode: string): string | null {
  if (ENGLISH_COUNTRY_CODES.has(countryCode)) return "en";
  if (countryCode === "RO") return "ro";
  if (countryCode === "HU") return "hu";
  if (GERMAN_COUNTRY_CODES.has(countryCode)) return "de";
  return null;
}

function calculateHungarianGrade(pct: number): TestGradeMark {
  if (pct >= 87) return { note: "1", label: "Jeles", color: "#FFD700", emoji: "🌟" };
  if (pct >= 73) return { note: "2", label: "Jó", color: "#00FF88", emoji: "😊" };
  if (pct >= 57) return { note: "3", label: "Közepes", color: "#00D4FF", emoji: "🙂" };
  if (pct >= 40) return { note: "4", label: "Elégséges", color: "#FF6B00", emoji: "😐" };
  return { note: "5", label: "Elégtelen", color: "#FF4444", emoji: "😟" };
}

export function resolveCountryLocale(countryCode: string, fallbackLangOrLocale = "de-DE"): string {
  if (COUNTRY_LOCALES[countryCode]) return COUNTRY_LOCALES[countryCode];
  const fallbackLang = fallbackLangOrLocale.includes("-")
    ? fallbackLangOrLocale.split("-")[0].toLowerCase()
    : fallbackLangOrLocale.toLowerCase();
  return DEFAULT_LOCALE_BY_LANG[fallbackLang] ?? fallbackLangOrLocale;
}

export function calculateCountryAwareMark(pct: number, countryCode: string): TestGradeMark {
  if (ENGLISH_COUNTRY_CODES.has(countryCode)) return calculateEnglishGrade(pct, countryCode);
  if (countryCode === "RO") return calculateRomanianGrade(pct, countryCode);
  if (countryCode === "HU") return calculateHungarianGrade(pct);
  const deutschMark = calculateDeutschMark(pct, (GERMAN_COUNTRY_CODES.has(countryCode) ? countryCode : "DE") as DeutschCountry);
  return {
    note: deutschMark.note,
    label: deutschMark.label,
    color: deutschMark.color,
    emoji: deutschMark.emoji,
  };
}

const PRINT_I18N = {
  de: {
    visualTypeLabels: {
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
      "luecken-text": "Lueckentext ergaenzen",
      "satzgefuge-diagram": "Satzgefuege analysieren",
      "epochen-zeitstrahl": "Epoche zuordnen",
    },
    wordTypesHint: "N = Nomen, V = Verb, A = Adjektiv",
    tenseOptions: ["Praesens", "Praeteritum", "Perfekt"],
    sentencePartsHint: "S = Subjekt, P = Praedikat, O = Objekt",
    cases: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
    mainClause: "HS",
    subClause: "NS",
    conjunction: "Konjunktion",
    hint: "Hinweis",
    waterCycleOrder: "Ordne die Phasen des Wasserkreislaufs:",
    orderPrompt: "In die richtige Reihenfolge bringen:",
    vertebrate: "Wirbeltier",
    invertebrate: "Wirbellos",
    mammal: "Saeugetier",
    bird: "Vogel",
    fish: "Fisch",
    reptile: "Reptil",
    amphibian: "Amphibie",
    diagram: "Diagramm",
  },
  en: {
    visualTypeLabels: {
      "genus-sort": "Determine article",
      "satz-ordnen": "Arrange sentence",
      "bild-beschriften": "Label picture",
      "fehler-finden": "Find the error",
      "wortfamilien-baum": "Word family",
      "geschichte-sortieren": "Arrange story",
      "wortarten-sortieren": "Sort word types",
      "zeitformen-zuordnen": "Identify tense",
      "satzglied-markieren": "Mark sentence parts",
      "kasus-markieren": "Identify case",
      "adjektiv-endungen": "Adjective ending",
      "luecken-text": "Complete cloze text",
      "satzgefuge-diagram": "Analyze clause structure",
      "epochen-zeitstrahl": "Match literary period",
    },
    wordTypesHint: "N = Noun, V = Verb, A = Adjective",
    tenseOptions: ["Present", "Preterite", "Perfect"],
    sentencePartsHint: "S = Subject, P = Predicate, O = Object",
    cases: ["Nominative", "Accusative", "Dative", "Genitive"],
    mainClause: "Main clause",
    subClause: "Subordinate clause",
    conjunction: "Conjunction",
    hint: "Hint",
    waterCycleOrder: "Put the water cycle stages in order:",
    orderPrompt: "Put in the correct order:",
    vertebrate: "Vertebrate",
    invertebrate: "Invertebrate",
    mammal: "Mammal",
    bird: "Bird",
    fish: "Fish",
    reptile: "Reptile",
    amphibian: "Amphibian",
    diagram: "Diagram",
  },
  hu: {
    visualTypeLabels: {
      "genus-sort": "Nevelo kivalasztasa",
      "satz-ordnen": "Mondat rendezese",
      "bild-beschriften": "Kep feliratozasa",
      "fehler-finden": "Hiba keresese",
      "wortfamilien-baum": "Szocsalad",
      "geschichte-sortieren": "Tortenet rendezese",
      "wortarten-sortieren": "Szofaj meghatarozasa",
      "zeitformen-zuordnen": "Igeido meghatarozasa",
      "satzglied-markieren": "Mondatreszek jelolese",
      "kasus-markieren": "Eset meghatarozasa",
      "adjektiv-endungen": "Melleknevi vegzodes",
      "luecken-text": "Hianyos szoveg kiegeszitese",
      "satzgefuge-diagram": "Mondatszerkezet elemzese",
      "epochen-zeitstrahl": "Korszak parositasa",
    },
    wordTypesHint: "N = Fonev, V = Ige, A = Melleknev",
    tenseOptions: ["Jelen", "Praeteritum", "Perfekt"],
    sentencePartsHint: "S = Alany, P = Allitmany, O = Targy",
    cases: ["Alanyeset", "Targyeset", "Reszes eset", "Birtokos eset"],
    mainClause: "Fo mondat",
    subClause: "Mellekmondat",
    conjunction: "Kotoszo",
    hint: "Tipp",
    waterCycleOrder: "Rendezd sorba a vizkorforgas fazisait:",
    orderPrompt: "Tedd helyes sorrendbe:",
    vertebrate: "Gerinces",
    invertebrate: "Gerinctelen",
    mammal: "Emlos",
    bird: "Madar",
    fish: "Hal",
    reptile: "Hullo",
    amphibian: "Keteltu",
    diagram: "Abra",
  },
  ro: {
    visualTypeLabels: {
      "genus-sort": "Alege articolul",
      "satz-ordnen": "Ordoneaza propozitia",
      "bild-beschriften": "Eticheteaza imaginea",
      "fehler-finden": "Gaseste greseala",
      "wortfamilien-baum": "Familie de cuvinte",
      "geschichte-sortieren": "Ordoneaza povestea",
      "wortarten-sortieren": "Sorteaza partile de vorbire",
      "zeitformen-zuordnen": "Identifica timpul",
      "satzglied-markieren": "Marcheaza partile propozitiei",
      "kasus-markieren": "Identifica cazul",
      "adjektiv-endungen": "Terminatie adjectivala",
      "luecken-text": "Completeaza textul lacunar",
      "satzgefuge-diagram": "Analizeaza fraza",
      "epochen-zeitstrahl": "Asociaza epoca",
    },
    wordTypesHint: "N = Substantiv, V = Verb, A = Adjectiv",
    tenseOptions: ["Prezent", "Preterit", "Perfect"],
    sentencePartsHint: "S = Subiect, P = Predicat, O = Obiect",
    cases: ["Nominativ", "Acuzativ", "Dativ", "Genitiv"],
    mainClause: "Propozitie principala",
    subClause: "Propozitie secundara",
    conjunction: "Conjunctie",
    hint: "Indiciu",
    waterCycleOrder: "Pune in ordine etapele circuitului apei:",
    orderPrompt: "Pune in ordinea corecta:",
    vertebrate: "Vertebrat",
    invertebrate: "Nevertebrat",
    mammal: "Mamifer",
    bird: "Pasare",
    fish: "Peste",
    reptile: "Reptila",
    amphibian: "Amfibian",
    diagram: "Diagrama",
  },
} satisfies Record<string, {
  visualTypeLabels: Record<string, string>;
  wordTypesHint: string;
  tenseOptions: string[];
  sentencePartsHint: string;
  cases: string[];
  mainClause: string;
  subClause: string;
  conjunction: string;
  hint: string;
  waterCycleOrder: string;
  orderPrompt: string;
  vertebrate: string;
  invertebrate: string;
  mammal: string;
  bird: string;
  fish: string;
  reptile: string;
  amphibian: string;
  diagram: string;
}>;

type PrintLangKey = keyof typeof PRINT_I18N;

function getPrintLangKey(lang: string): PrintLangKey {
  return lang in PRINT_I18N ? (lang as PrintLangKey) : "de";
}

function LanguageBackground({ chars = DE_CHARS, colors = DE_COLORS }: { chars?: string[]; colors?: string[] }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
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
  if (!mounted) return null;
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
  return (
    <Suspense fallback={null}>
      <LanguageTestEngineInner config={config} />
    </Suspense>
  );
}

function LanguageTestEngineInner({ config }: { config: LanguageTestEngineConfig }) {
  const avatarProps = useAvatarProps();
  const searchParams = useSearchParams();
  const { lang: globalLang } = useLang();
  const { labels: rawLabels } = config;
  const titleStr = typeof config.title === "string" ? config.title : (config.title[globalLang] ?? config.title.en ?? config.title.de ?? "TEST");
  // Umami: one event per test-page engagement (covers all test routes via the shared engine).
  useEffect(() => { track("test_open", { test: titleStr, lang: globalLang }); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, []);
  // labels useMemo moved below `country` state declaration (needs country).
  // Lang-alapu country lista (kozos minden test-route-ban)
  const COUNTRIES_BY_LANG: Record<string, { code: string; flag: string; label: string; sub: string }[]> = {
    de: [
      { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
      { code: "AT", flag: "🇦🇹", label: "Österreich", sub: "Note 1–5" },
      { code: "CH", flag: "🇨🇭", label: "Schweiz", sub: "Note 6–1" },
    ],
    en: [
      { code: "US", flag: "🇺🇸", label: "United States", sub: "A / B / C / D / F" },
      { code: "GB", flag: "🇬🇧", label: "United Kingdom", sub: "Grade 9–1 (GCSE)" },
      { code: "AU", flag: "🇦🇺", label: "Australia", sub: "A / B / C / D / E" },
      { code: "CA", flag: "🇨🇦", label: "Canada", sub: "A+ / A / B+ / B / C+ / C / D / F" },
      { code: "IE", flag: "🇮🇪", label: "Ireland", sub: "H1–H8 (Higher) / O1–O8" },
      { code: "NZ", flag: "🇳🇿", label: "New Zealand", sub: "NCEA: N / A / M / E" },
    ],
    hu: [{ code: "HU", flag: "🇭🇺", label: "Magyarország", sub: "1–5 osztályzat" }],
    ro: [{ code: "RO", flag: "🇷🇴", label: "România", sub: "Note 1–10" }],
  };
  const effectiveCountries = useMemo(
    () => (config.countries.length > 0 ? config.countries : (COUNTRIES_BY_LANG[globalLang] ?? [])),
    [config.countries, globalLang],
  );
  // Főoldali nyelvválasztó → country mapping
  const langToCountry: Record<string, string> = { de: "DE", hu: "HU", ro: "RO", en: "US" };
  const preferredCountryFromLang = langToCountry[globalLang];
  const countryFromLang = effectiveCountries.some((item) => item.code === preferredCountryFromLang)
    ? preferredCountryFromLang!
    : (effectiveCountries[0]?.code ?? "DE");
  const effectiveCountryCodesKey = effectiveCountries.map((item) => item.code).join("|");
  // Multi-country nyelveknel van country-picker, egyebkent nincs
  const hasCountryChoice = effectiveCountries.length > 1;
  const g1Icons = config.g1Icons ?? G1_ICONS;
  const g1WordLabels = config.g1WordLabels ?? G1_WORD_LABELS;
  // Country auto-derived from global lang — UI country-picker átugorva
  // Check for ?grade=N query param — if present, skip grade-select and go to topics
  const gradeParam = searchParams?.get("grade");
  const parsedGradeParam = gradeParam ? parseInt(gradeParam, 10) : NaN;
  const supportedGrades = config.grades?.length ? config.grades : [...DEFAULT_SUPPORTED_GRADES];
  const fallbackGrade = supportedGrades[0] ?? 1;
  const hasGradeParam = Number.isFinite(parsedGradeParam) && supportedGrades.includes(parsedGradeParam);
  if (process.env.NODE_ENV !== "production") {
    assertSourceInvariant(supportedGrades.length > 0, `[${config.gameId}] supportedGrades must not be empty.`);
    assertSourceInvariant(effectiveCountries.length > 0, `[${config.gameId}] effectiveCountries must not be empty for lang ${globalLang}.`);
    const resolvedCountryCodes = new Set(effectiveCountries.map((item) => item.code));
    assertSourceInvariant(
      resolvedCountryCodes.has(countryFromLang),
      `[${config.gameId}] countryFromLang ${countryFromLang} must exist in resolved countries for lang ${globalLang}.`,
    );
    if (globalLang === "en") {
      const missingEnglishCountryCodes = [...ENGLISH_COUNTRY_CODES].filter((code) => !resolvedCountryCodes.has(code));
      assertSourceInvariant(
        missingEnglishCountryCodes.length === 0,
        `[${config.gameId}] English country group is missing ${missingEnglishCountryCodes.join(", ")}.`,
      );
    }
  }
  // Initial screen: ha country-valasztos nyelv (DE/EN) → country elso; egyebkent ha van ?grade= → topics; fallback: grade
  const [screen, setScreen] = useState<Screen>(
    hasCountryChoice ? "country" : (hasGradeParam ? "topics" : "grade")
  );
  const [country, setCountry] = useState<string>(countryFromLang);
  if (process.env.NODE_ENV !== "production") {
    assertSourceInvariant(
      effectiveCountries.some((item) => item.code === country),
      `[${config.gameId}] selected country ${country} must exist in resolved countries for lang ${globalLang}.`,
    );
  }
  // Restore a saved choice only when it belongs to the countries available for
  // the current language. Do not overwrite that choice during lang hydration.
  useEffect(() => {
    const savedCountry = localStorage.getItem(config.storageKey);
    const restoredCountry = effectiveCountries.some((item) => item.code === savedCountry)
      ? savedCountry!
      : countryFromLang;
    setCountry(restoredCountry);
  }, [config.storageKey, countryFromLang, effectiveCountryCodesKey]);

  // Label language: derived from selected country so test paper labels match
  // the language of the questions (country=HU → Hungarian 'Feladat' etc.).
  const labels = useMemo(() => {
    const labelLang = getCountryLangPrefix(country) ?? globalLang;
    const out: Record<string, string> = {};
    for (const [k, v] of Object.entries(rawLabels)) {
      if (!v) out[k] = "";
      else if (typeof v === "string") out[k] = v;
      else out[k] = v[labelLang] ?? v[globalLang] ?? v.de ?? v.en ?? Object.values(v)[0] ?? "";
    }
    return out as Record<keyof typeof rawLabels, string>;
  }, [rawLabels, globalLang, country]);
  // Ha a lang betoltodik es multi-country (DE/EN), de meg nem country screenen vagyunk → country-ra
  // (LanguageProvider hu-default miatt initial useState nem mindig latja a valos lang-et)
  useEffect(() => {
    if (hasCountryChoice) {
      setScreen((prev) => (prev === "grade" || prev === "topics" ? "country" : prev));
    }
  }, [hasCountryChoice]);
  const [grade, setGrade] = useState(hasGradeParam ? parsedGradeParam : fallbackGrade);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [includeLesetest, setIncludeLesetest] = useState(false);
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [answers, setAnswers] = useState<{ correct: boolean; given: string; expected: string }[]>([]);
  const [paperAnswers, setPaperAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [avatarMood, setAvatarMood] = useState<AvatarMood>("idle");
  const [earnedCard, setEarnedCard] = useState<string | null>(null);
  const [dateStr, setDateStr] = useState("");
  const langPrefix = getCountryLangPrefix(country) ?? globalLang;
  const printLangKey = getPrintLangKey(langPrefix);
  const effectiveLocale = resolveCountryLocale(country, globalLang || config.dateLocale || config.ttsLang);
  const printStrings = PRINT_I18N[printLangKey];

  if (process.env.NODE_ENV !== "production") {
    assertSourceInvariant(Boolean(PRINT_I18N[printLangKey]), `[${config.gameId}] missing print translations for lang ${langPrefix}.`);
    assertSourceInvariant(Boolean(effectiveLocale), `[${config.gameId}] missing effective locale for country ${country}.`);
  }

  useEffect(() => {
    setDateStr(new Date().toLocaleDateString(effectiveLocale, { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
  }, [effectiveLocale]);

  // Country-aware curriculum: if config exposes getCurriculumForCountry,
  // call it so subtopic lists can vary by selected country (e.g. geschichte
  // US/GB/HU/RO-specific topics). Fallback to static curriculum[grade].
  const themes = ((config as any).getCurriculumForCountry
    ? (config as any).getCurriculumForCountry(grade, country)
    : (config.curriculum[grade] ?? [])
  ) as DeutschTheme[];
  const totalQ = questions.length;
  const answeredCount = Object.keys(paperAnswers).length;

  function resetTopicAndTestState(nextScreen?: Screen) {
    setSelectedIds([]);
    setIncludeLesetest(false);
    setQuestions([]);
    setAnswers([]);
    setPaperAnswers({});
    setSubmitted(false);
    setEarnedCard(null);
    setAvatarMood("idle");
    if (nextScreen) setScreen(nextScreen);
  }

  function selectCountry(nextCountry: string) {
    const nextScreen: Screen = hasGradeParam ? "topics" : "grade";
    setCountry(nextCountry);
    try {
      localStorage.setItem(config.storageKey, nextCountry);
    } catch {
      // Storage can be unavailable in private/restricted browser contexts.
    }
    resetTopicAndTestState(nextScreen);
  }

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
      // Visual content (ha van): a vizuális generátorok KONSTANS címkét tesznek a question-be
      // (pl. "Satz ordnen:"), ezért ha csak a qText-et néznénk, minden azonos típusú vizuális
      // feladat egyetlen kulcs alá esne és csak az első maradna. Ha van tartalmi adat, AZ döntsön.
      const visualRaw =
        a.words ?? a.shuffled ?? a.correctOrder ?? a.pairs ?? a.stamm ?? a.imageKey ?? a.word ?? a.sentence ?? a.target ?? null;
      if (visualRaw != null) {
        const v = Array.isArray(visualRaw) ? visualRaw.join(",") : String(visualRaw);
        return q.type + "|" + qText.slice(0, 30) + "|" + v.slice(0, 100);
      }
      // Nem-vizuális: a kérdés-szöveg a kulcs (MCQ/typing azonos szöveg = azonos kérdés)
      if (qText) return qText.slice(0, 80);
      return q.type + "|";
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
    const regularGroups: TestQuestion[][] = [];
    for (let g2 = 0; g2 < groupCount; g2++) {
      const sid = ids[g2 % ids.length];
      const pool = regularPools[sid] ?? [];
      const start = ptr[sid] ?? 0;
      const group: TestQuestion[] = [];
      for (let k = 0; k < 3; k++) {
        const idx = (start + k) % Math.max(pool.length, 1);
        if (pool[idx]) group.push({ ...pool[idx] });
      }
      ptr[sid] = (start + 3) % Math.max(pool.length, 1);
      if (group.length >= 3) regularGroups.push(group);
    }

    // Build visual groups (max 10): group ALL visual questions by type, then batch 3-by-3
    // Each block of 3 sub-questions is homogeneous (same exercise type)
    const visualByType: Record<string, TestQuestion[]> = {};
    for (const sid of ids) {
      for (const q of (visualPools[sid] ?? [])) {
        if (!visualByType[q.type]) visualByType[q.type] = [];
        visualByType[q.type].push(q);
      }
    }
    const visualGroups: TestQuestion[][] = [];
    for (const typeQs of Object.values(visualByType)) {
      if (visualGroups.length >= 10) break;
      const shuffled = [...typeQs].sort(() => Math.random() - 0.5);
      const seen2 = new Set<string>();
      const unique = shuffled.filter(q => {
        const k = dedupKey(q);
        if (seen2.has(k)) return false;
        seen2.add(k);
        return true;
      });
      // Csak TELJES, 3-as csoportokat hozunk létre — NEM paddolunk duplikátummal
      // (a régi `while (group.length<3) push(...utolsó)` ugyanazt a feladatot 2-3x ismételte).
      for (let i = 0; i + 3 <= unique.length && visualGroups.length < 10; i += 3) {
        visualGroups.push(unique.slice(i, i + 3));
      }
    }

    // Interleave: 1 text Aufgabe, 1 visual Aufgabe, 1 text, 1 visual, ...
    // If one list is longer, remainder appends at the end.
    const maxLen = Math.max(regularGroups.length, visualGroups.length);
    for (let i = 0; i < maxLen; i++) {
      if (i < regularGroups.length) allQs.push(...regularGroups[i]);
      if (i < visualGroups.length) allQs.push(...visualGroups[i]);
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
      setScreen("result");
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
    resetTopicAndTestState("topics");
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
    ...printStrings.visualTypeLabels,
    ...Object.fromEntries((config.visualTypes ?? []).map(vt => [vt.type, vt.printLabel])),
  };

  const VISUAL_TYPES_PRINT = new Set(Object.keys(VISUAL_TYPE_LABELS_PRINT));

  const handlePrintBlank = () => {
    const SVG_INLINE_K1K2: Record<string, string> = {
      "WinterSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><g stroke="#3B82F6" stroke-width="2"><polygon points="100,50 108.66,55 108.66,65 100,70 91.34,65 91.34,55" fill="rgba(59,130,246,0.2)" /><path d="M 100 50 L 100 20 M 93 32 L 100 20 L 107 32" /><path d="M 100 70 L 100 100 M 93 88 L 100 100 L 107 88" /><path d="M 108.66 55 L 134.64 40 M 121 38 L 134.64 40 L 129 52" /><path d="M 91.34 65 L 65.36 80 M 79 82 L 65.36 80 L 71 68" /><path d="M 108.66 65 L 134.64 80 M 129 68 L 134.64 80 L 121 82" /><path d="M 91.34 55 L 65.36 40 M 71 52 L 65.36 40 L 79 38" /></g></svg>`,
      "FruehlingSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 100 52 L 100 100" stroke="#10B981" stroke-width="2" /><path d="M 100 80 C 85 80 80 65 80 65 C 85 75 100 75 100 80 Z" fill="rgba(16,185,129,0.2)" stroke="#10B981" stroke-width="2" /><path d="M 100 70 C 115 70 120 55 120 55 C 115 65 100 65 100 70 Z" fill="rgba(16,185,129,0.2)" stroke="#10B981" stroke-width="2" /><path d="M 90 30 C 90 55 110 55 110 30 L 105 40 L 100 25 L 95 40 Z" fill="rgba(139,92,246,0.2)" stroke="#8B5CF6" stroke-width="2" /></svg>`,
      "SommerSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><circle cx="100" cy="60" r="24" fill="rgba(245,158,11,0.18)" stroke="#F59E0B" stroke-width="2" /><path d="M 128 60 L 140 60 M 124.2 74 L 134.6 80 M 114 84.2 L 120 94.6 M 100 88 L 100 100 M 86 84.2 L 80 94.6 M 75.8 74 L 65.4 80 M 72 60 L 60 60 M 75.8 46 L 65.4 40 M 86 35.8 L 80 25.4 M 100 32 L 100 20 M 114 35.8 L 120 25.4 M 124.2 46 L 134.6 40" stroke="#F59E0B" stroke-width="2" /></svg>`,
      "HerbstSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><g stroke="#F59E0B" stroke-width="2"><path d="M 100 25 C 130 35 120 75 100 85 C 80 75 70 35 100 25 Z" fill="rgba(245,158,11,0.2)" /><path d="M 100 85 L 100 95" /><path d="M 100 80 L 100 35 M 102 70 L 110 60 M 101 55 L 108 45 M 98 65 L 90 55 M 99 50 L 92 40" /><g transform="translate(-40, 20) scale(0.5) rotate(-30 100 60)"><path d="M 100 25 C 130 35 120 75 100 85 C 80 75 70 35 100 25 Z" fill="rgba(245,158,11,0.2)" /><path d="M 100 85 L 100 95" /></g><g transform="translate(45, -10) scale(0.4) rotate(45 100 60)"><path d="M 100 25 C 130 35 120 75 100 85 C 80 75 70 35 100 25 Z" fill="rgba(245,158,11,0.2)" /><path d="M 100 85 L 100 95" /></g></g></svg>`,
      "KatzeSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><g fill="rgba(139,92,246,0.2)" stroke="#8B5CF6" stroke-width="2"><path d="M 125 45 L 130 25 L 138 38 L 145 30 L 148 45 C 155 50 155 60 148 65 L 130 65 L 130 95 L 120 95 L 120 75 L 110 75 L 110 95 L 100 95 L 100 75 C 90 75 80 75 75 80 L 75 95 L 65 95 L 65 75 C 55 70 45 60 50 45 C 55 40 60 50 60 60 C 60 65 70 65 75 60 C 75 50 95 45 125 45 Z" /></g></svg>`,
      "HundSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><g stroke="#F59E0B" stroke-width="2"><path d="M 125 40 C 135 40 140 45 140 50 L 150 50 C 155 50 155 58 150 58 L 140 58 C 135 65 130 68 125 68 L 125 95 L 115 95 L 115 75 L 105 75 L 105 95 L 95 95 L 95 75 C 80 75 70 75 65 80 L 65 95 L 55 95 L 55 75 L 45 75 L 45 95 L 35 95 L 35 65 L 25 50 C 20 40 30 35 35 45 L 45 55 C 55 45 80 45 105 45 L 115 40 C 120 38 123 38 125 40 Z" fill="rgba(245,158,11,0.2)" /><path d="M 125 45 C 135 55 125 70 115 65 C 110 60 115 45 125 45 Z" fill="rgba(245,158,11,0.4)" /></g></svg>`,
      "VogelSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><g stroke="#3B82F6" stroke-width="2"><path d="M 120 45 C 130 45 135 50 140 50 L 155 55 L 140 60 C 135 75 110 85 90 80 L 60 90 L 70 70 C 65 60 75 45 95 45 C 105 45 115 45 120 45 Z" fill="rgba(59,130,246,0.2)" /><path d="M 95 55 C 110 55 120 65 110 75 C 90 70 85 60 95 55 Z" fill="rgba(59,130,246,0.4)" /><path d="M 100 82 L 95 95 L 90 95 M 95 95 L 100 95" /><path d="M 110 80 L 105 95 L 100 95 M 105 95 L 110 95" /><circle cx="125" cy="52" r="2" fill="#1F2937" stroke="none" /></g></svg>`,
      "FischSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><g stroke="#10B981" stroke-width="2"><path d="M 140 60 C 140 40 100 30 70 50 L 40 30 L 50 60 L 40 90 L 70 70 C 100 90 140 80 140 60 Z" fill="rgba(16,185,129,0.2)" /><path d="M 90 36 C 100 25 110 25 110 38 Z" fill="rgba(16,185,129,0.4)" /><path d="M 90 84 C 100 95 110 95 110 82 Z" fill="rgba(16,185,129,0.4)" /><path d="M 100 60 C 110 55 120 65 105 70 C 100 65 95 65 100 60 Z" fill="rgba(16,185,129,0.4)" /><circle cx="125" cy="55" r="3" fill="#1F2937" stroke="none" /><path d="M 115 65 C 115 70 120 75 125 75" fill="none" /></g></svg>`,
      "PferdSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><g stroke="#F59E0B" stroke-width="2"><path d="M 135 25 L 130 15 L 125 20 C 115 30 105 40 95 45 L 55 45 C 45 45 35 50 30 60 L 25 95 L 35 95 L 40 70 L 45 70 L 45 95 L 55 95 L 55 65 C 70 70 85 70 95 65 L 95 95 L 105 95 L 105 65 L 110 65 L 110 95 L 120 95 L 120 65 C 125 50 135 45 145 40 L 155 45 C 160 40 155 35 150 30 L 135 25 Z" fill="rgba(245,158,11,0.2)" /><path d="M 125 20 C 120 25 105 40 95 45 L 105 45 C 115 40 130 25 125 20 Z" fill="#F59E0B" stroke="none" /><path d="M 30 60 C 15 65 20 85 15 95 C 20 95 25 80 30 70 Z" fill="#F59E0B" stroke="none" /></g></svg>`
    };

    const SVG_INLINE_K3K4: Record<string, string> = {
      "WolkenSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 62 75 A 15 15 0 0 1 62 45 A 30 30 0 0 1 118 45 A 20 20 0 0 1 138 75 Z" fill="rgba(59,130,246,0.15)" stroke="#3B82F6" stroke-width="2" /></svg>`,
      "RegenSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 62 65 A 15 15 0 0 1 62 35 A 30 30 0 0 1 118 35 A 20 20 0 0 1 138 65 Z" fill="rgba(59,130,246,0.15)" stroke="#3B82F6" stroke-width="2" /><path d="M 70 75 L 65 90 M 90 75 L 85 90 M 110 75 L 105 90 M 130 75 L 125 90 M 80 85 L 75 100 M 100 85 L 95 100 M 120 85 L 115 100" stroke="#3B82F6" stroke-width="2" /></svg>`,
      "SchneeSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 62 65 A 15 15 0 0 1 62 35 A 30 30 0 0 1 118 35 A 20 20 0 0 1 138 65 Z" fill="rgba(156,163,175,0.15)" stroke="#9CA3AF" stroke-width="2" /><path d="M 80 80 L 80 90 M 75 85 L 85 85 M 76.5 81.5 L 83.5 88.5 M 76.5 88.5 L 83.5 81.5" stroke="#9CA3AF" stroke-width="2" /><path d="M 100 90 L 100 100 M 95 95 L 105 95 M 96.5 91.5 L 103.5 98.5 M 96.5 98.5 L 103.5 91.5" stroke="#9CA3AF" stroke-width="2" /><path d="M 120 75 L 120 85 M 115 80 L 125 80 M 116.5 76.5 L 123.5 83.5 M 116.5 83.5 L 123.5 76.5" stroke="#9CA3AF" stroke-width="2" /></svg>`,
      "GewitterSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 62 60 A 15 15 0 0 1 62 30 A 30 30 0 0 1 118 30 A 20 20 0 0 1 138 60 Z" fill="rgba(31,41,55,0.25)" stroke="#1F2937" stroke-width="2" /><path d="M 100 60 L 88 80 L 100 80 L 92 105 L 112 75 L 98 75 Z" fill="rgba(245,158,11,0.4)" stroke="#F59E0B" stroke-width="2" /></svg>`,
      "WindSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 40 40 Q 70 20 100 40 T 150 40 A 8 8 0 1 0 150 24" stroke="#9CA3AF" stroke-width="2" /><path d="M 20 60 Q 60 80 100 60 T 170 60 A 10 10 0 1 1 170 80" stroke="#9CA3AF" stroke-width="2" /><path d="M 50 80 Q 80 60 110 80 T 140 80 A 6 6 0 1 0 140 68" stroke="#9CA3AF" stroke-width="2" /></svg>`,
      "SonnenblumeSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 100 55 L 100 110" stroke="#10B981" stroke-width="2" /><path d="M 100 90 Q 80 80 75 95 Q 90 100 100 90 Z" fill="rgba(16,185,129,0.2)" stroke="#10B981" stroke-width="2" /><path d="M 100 80 Q 120 70 125 85 Q 110 90 100 80 Z" fill="rgba(16,185,129,0.2)" stroke="#10B981" stroke-width="2" /><path d="M 100 33 C 108 25 105 15 100 15 C 95 15 92 25 100 33 Z" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" stroke-width="2" transform="rotate(0 100 45)" /><path d="M 100 33 C 108 25 105 15 100 15 C 95 15 92 25 100 33 Z" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" stroke-width="2" transform="rotate(45 100 45)" /><path d="M 100 33 C 108 25 105 15 100 15 C 95 15 92 25 100 33 Z" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" stroke-width="2" transform="rotate(90 100 45)" /><path d="M 100 33 C 108 25 105 15 100 15 C 95 15 92 25 100 33 Z" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" stroke-width="2" transform="rotate(135 100 45)" /><path d="M 100 33 C 108 25 105 15 100 15 C 95 15 92 25 100 33 Z" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" stroke-width="2" transform="rotate(180 100 45)" /><path d="M 100 33 C 108 25 105 15 100 15 C 95 15 92 25 100 33 Z" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" stroke-width="2" transform="rotate(225 100 45)" /><path d="M 100 33 C 108 25 105 15 100 15 C 95 15 92 25 100 33 Z" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" stroke-width="2" transform="rotate(270 100 45)" /><path d="M 100 33 C 108 25 105 15 100 15 C 95 15 92 25 100 33 Z" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" stroke-width="2" transform="rotate(315 100 45)" /><circle cx="100" cy="45" r="12" fill="rgba(31,41,55,0.8)" stroke="#1F2937" stroke-width="2" /></svg>`,
      "VerdunstungSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 50 100 C 50 110 150 110 150 100 C 150 90 50 90 50 100 Z" fill="rgba(59,130,246,0.4)" stroke="#3B82F6" stroke-width="2" /><path d="M 70 90 Q 60 70 75 60 T 70 35" stroke="#3B82F6" stroke-width="2" /><path d="M 65 40 L 70 35 L 75 40" stroke="#3B82F6" stroke-width="2" /><path d="M 100 90 Q 90 65 105 55 T 100 25" stroke="#3B82F6" stroke-width="2" /><path d="M 95 30 L 100 25 L 105 30" stroke="#3B82F6" stroke-width="2" /><path d="M 130 90 Q 120 70 135 60 T 130 35" stroke="#3B82F6" stroke-width="2" /><path d="M 125 40 L 130 35 L 135 40" stroke="#3B82F6" stroke-width="2" /></svg>`,
      "KondensationSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 70 95 L 70 80 M 65 85 L 70 80 L 75 85" stroke="#9CA3AF" stroke-width="2" /><path d="M 100 100 L 100 80 M 95 85 L 100 80 L 105 85" stroke="#9CA3AF" stroke-width="2" /><path d="M 130 95 L 130 80 M 125 85 L 130 80 L 135 85" stroke="#9CA3AF" stroke-width="2" /><path d="M 62 65 A 15 15 0 0 1 62 35 A 30 30 0 0 1 118 35 A 20 20 0 0 1 138 65 Z" fill="rgba(59,130,246,0.15)" stroke="#3B82F6" stroke-width="2" /><path d="M 80 45 Q 83 50 80 53 Q 77 50 80 45 Z" fill="#3B82F6" stroke="none" /><path d="M 100 40 Q 103 45 100 48 Q 97 45 100 40 Z" fill="#3B82F6" stroke="none" /><path d="M 120 48 Q 123 53 120 56 Q 117 53 120 48 Z" fill="#3B82F6" stroke="none" /><path d="M 90 52 Q 93 57 90 60 Q 87 57 90 52 Z" fill="#3B82F6" stroke="none" /><path d="M 110 50 Q 113 55 110 58 Q 107 55 110 50 Z" fill="#3B82F6" stroke="none" /></svg>`,
      "NiederschlagSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 62 50 A 15 15 0 0 1 62 20 A 30 30 0 0 1 118 20 A 20 20 0 0 1 138 50 Z" fill="rgba(31,41,55,0.15)" stroke="#1F2937" stroke-width="2" /><path d="M 70 60 L 65 80 M 90 60 L 85 80 M 110 60 L 105 80 M 130 60 L 125 80" stroke="#3B82F6" stroke-width="2" /><path d="M 80 75 L 75 95 M 100 75 L 95 95 M 120 75 L 115 95" stroke="#3B82F6" stroke-width="2" /><path d="M 75 105 L 75 111 M 72 108 L 78 108" stroke="#9CA3AF" stroke-width="2" /><path d="M 95 102 L 95 108 M 92 105 L 98 105" stroke="#9CA3AF" stroke-width="2" /><path d="M 115 106 L 115 112 M 112 109 L 118 109" stroke="#9CA3AF" stroke-width="2" /><path d="M 135 95 L 135 101 M 132 98 L 138 98" stroke="#9CA3AF" stroke-width="2" /></svg>`,
      "FlussSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 20 40 Q 60 60 100 40 T 180 40 L 180 80 Q 140 100 100 80 T 20 80 Z" fill="rgba(59,130,246,0.4)" stroke="#3B82F6" stroke-width="2" /><path d="M 40 55 Q 70 70 100 55 T 160 55" stroke="#3B82F6" stroke-width="2" /><path d="M 30 65 Q 70 80 100 65 T 170 65" stroke="#3B82F6" stroke-width="2" /></svg>`
    };

    const SVG_INLINE: Record<string, string> = {
      "BlumeSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><g stroke="#10B981" stroke-width="2"><path d="M 100 65 L 100 110" /><path d="M 100 95 C 80 95 75 80 75 80 C 80 90 95 90 100 95 Z" fill="rgba(16,185,129,0.2)" /><path d="M 100 85 C 120 85 125 70 125 70 C 120 80 105 80 100 85 Z" fill="rgba(16,185,129,0.2)" /></g><g fill="rgba(139,92,246,0.20)" stroke="#8B5CF6" stroke-width="2"><circle cx="100" cy="35" r="15" /><circle cx="118" cy="48" r="15" /><circle cx="111" cy="67" r="15" /><circle cx="89" cy="67" r="15" /><circle cx="82" cy="48" r="15" /></g><circle cx="100" cy="53" r="12" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" stroke-width="2" /></svg>`,
      "BaumSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 95 80 L 95 110 L 105 110 L 105 80 Z" fill="rgba(31,41,55,0.15)" stroke="#1F2937" stroke-width="2" /><path d="M 100 15 C 130 15 145 35 140 60 C 145 75 125 85 100 85 C 75 85 55 75 60 60 C 55 35 70 15 100 15 Z" fill="rgba(16,185,129,0.18)" stroke="#10B981" stroke-width="2" /></svg>`,
      "BlattSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><g stroke="#10B981" stroke-width="2"><path d="M 100 15 C 140 35 130 85 100 105 C 70 85 60 35 100 15 Z" fill="rgba(16,185,129,0.2)" /><path d="M 100 15 L 100 115" /><path d="M 100 80 L 115 65" /><path d="M 100 80 L 85 65" /><path d="M 100 60 L 120 45" /><path d="M 100 60 L 80 45" /><path d="M 100 40 L 115 25" /><path d="M 100 40 L 85 25" /></g></svg>`,
      "WurzelSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 50 20 L 150 20" stroke="#10B981" stroke-width="2" stroke-dasharray="4 4" opacity="0.5" /><path d="M 97 10 L 97 20 M 103 10 L 103 20" stroke="#1F2937" stroke-width="2" /><g stroke="#1F2937" stroke-width="2" fill="none"><path d="M 100 20 C 100 40 95 60 100 110" stroke-width="2.5" /><path d="M 100 35 C 115 40 120 50 125 65" /><path d="M 115 45 C 125 45 135 55 135 55" /><path d="M 98 50 C 80 55 75 70 70 80" /><path d="M 85 60 C 75 60 65 70 65 70" /><path d="M 98 70 C 110 75 115 90 120 100" /><path d="M 110 85 C 120 90 125 95 125 95" /><path d="M 96 90 C 85 95 80 105 75 110" /></g></svg>`,
      "SkelettSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><g stroke="#1F2937" stroke-width="2" fill="rgba(31,41,55,0.15)"><circle cx="100" cy="20" r="10" /><path d="M 100 30 L 100 65" fill="none" /><path d="M 90 40 C 95 35 105 35 110 40" fill="none" /><path d="M 88 48 C 95 43 105 43 112 48" fill="none" /><path d="M 88 56 C 95 51 105 51 112 56" fill="none" /><path d="M 90 65 C 95 70 105 70 110 65 Z" /><path d="M 90 35 L 75 50 L 70 65" fill="none" /><path d="M 110 35 L 125 50 L 130 65" fill="none" /><path d="M 93 68 L 85 90 L 85 110" fill="none" /><path d="M 107 68 L 115 90 L 115 110" fill="none" /></g></svg>`,
      "HerzSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><g stroke="#EF4444" stroke-width="2" fill="rgba(239,68,68,0.2)"><path d="M 95 30 C 75 30 70 60 85 90 C 95 105 105 105 110 90 C 125 50 115 35 105 35 C 105 35 105 25 95 30 Z" /><path d="M 85 30 L 85 15 M 95 15 C 95 10 110 10 110 20 L 110 35" fill="none" stroke="#3B82F6" /><path d="M 100 40 C 95 60 100 80 95 95" fill="none" stroke-opacity="0.6" /><path d="M 75 50 L 85 60 M 80 65 L 85 60 L 90 55" fill="none" stroke="#3B82F6" stroke-width="1.5" /><path d="M 115 65 L 105 55 M 100 60 L 105 55 L 110 50" fill="none" stroke="#EF4444" stroke-width="1.5" /></g></svg>`,
      "LungeSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 100 15 L 100 40" stroke="#1F2937" stroke-width="2.5" /><path d="M 100 40 L 85 55 M 100 40 L 115 55" stroke="#1F2937" stroke-width="2" /><path d="M 85 55 L 75 65 M 85 55 L 85 70 M 115 55 L 125 65 M 115 55 L 115 70" stroke="#1F2937" stroke-width="1.5" /><path d="M 92 40 C 70 35 55 60 60 95 C 65 110 85 110 90 95 C 95 80 92 50 92 40 Z" fill="rgba(239,68,68,0.15)" stroke="#EF4444" stroke-width="2" /><path d="M 108 40 C 130 35 145 60 140 95 C 135 110 115 110 110 95 C 105 80 108 50 108 40 Z" fill="rgba(239,68,68,0.15)" stroke="#EF4444" stroke-width="2" /></svg>`,
      "FischAnatomieSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><g stroke="#1F2937" stroke-width="2"><path d="M 40 60 C 40 30 110 30 140 60 C 110 90 40 90 40 60 Z" fill="rgba(16,185,129,0.2)" stroke="#10B981" /><path d="M 140 60 L 160 35 C 150 60 150 60 160 85 Z" fill="rgba(16,185,129,0.2)" stroke="#10B981" /><path d="M 70 40 L 90 20 C 100 25 105 32 110 40" fill="rgba(16,185,129,0.2)" stroke="#10B981" /><path d="M 75 65 L 90 80 C 85 85 80 85 75 75 Z" fill="rgba(16,185,129,0.2)" stroke="#10B981" /><path d="M 65 50 C 70 55 70 65 65 70" /><path d="M 60 52 C 64 57 64 63 60 68" /><path d="M 55 54 C 58 58 58 62 55 66" /><circle cx="50" cy="55" r="3" fill="#1F2937" /><path d="M 40 60 L 45 62" /></g></svg>`,
      "VogelAnatomieSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><g stroke="#1F2937" stroke-width="2"><path d="M 70 45 C 90 35 130 55 140 70 C 130 85 90 85 70 70 C 60 60 60 50 70 45 Z" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" /><circle cx="65" cy="45" r="15" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" /><path d="M 52 42 L 35 48 L 52 52 Z" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" /><circle cx="60" cy="42" r="2" fill="#1F2937" /><path d="M 90 55 C 100 35 120 25 135 30 C 125 45 110 55 90 65" fill="rgba(59,130,246,0.3)" stroke="#3B82F6" /><path d="M 105 40 L 115 45 M 115 35 L 125 40 M 125 32 L 130 35" stroke="#3B82F6" stroke-width="1.5" /><path d="M 138 65 L 165 60 C 160 70 155 75 135 75" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" /><path d="M 95 80 L 90 100 L 80 105 M 90 100 L 95 105 M 90 100 L 85 105" stroke="#F59E0B" /><path d="M 110 78 L 105 95 L 95 100 M 105 95 L 110 100 M 105 95 L 100 100" stroke="#F59E0B" /></g></svg>`,
      "InsektAnatomieSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><g stroke="#1F2937" stroke-width="2"><circle cx="60" cy="60" r="10" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" /><ellipse cx="85" cy="60" rx="15" ry="12" fill="rgba(31,41,55,0.2)" stroke="#1F2937" /><ellipse cx="125" cy="60" rx="25" ry="15" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" /><path d="M 105 52 C 110 60 110 60 105 68" /><path d="M 115 47 C 120 60 120 60 115 73" /><path d="M 125 45 C 130 60 130 60 125 75" /><path d="M 135 47 C 140 60 140 60 135 73" /><path d="M 55 52 C 45 40 35 45 35 45" /><path d="M 55 68 C 45 80 35 75 35 75" /><path d="M 80 48 L 75 30 L 65 25" /><path d="M 85 48 L 85 25 L 80 20" /><path d="M 90 48 L 100 30 L 110 25" /><path d="M 80 72 L 75 90 L 65 95" /><path d="M 85 72 L 85 95 L 80 100" /><path d="M 90 72 L 100 90 L 110 95" /></g></svg>`,
      "AtomSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><circle cx="100" cy="60" r="8" fill="rgba(31,41,55,0.2)" stroke="#1F2937" stroke-width="2" /><ellipse cx="100" cy="60" rx="40" ry="15" transform="rotate(45 100 60)" stroke="#3B82F6" stroke-width="2" /><ellipse cx="100" cy="60" rx="40" ry="15" transform="rotate(-45 100 60)" stroke="#3B82F6" stroke-width="2" /><circle cx="72" cy="32" r="4" fill="#3B82F6" stroke="none" /><circle cx="128" cy="88" r="4" fill="#3B82F6" stroke="none" /><circle cx="72" cy="88" r="4" fill="#3B82F6" stroke="none" /><circle cx="128" cy="32" r="4" fill="#3B82F6" stroke="none" /></svg>`,
      "MolekulaH2OSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 100 50 L 75 80 M 100 50 L 125 80" stroke="#1F2937" stroke-width="2" /><circle cx="100" cy="50" r="18" fill="rgba(239,68,68,0.2)" stroke="#EF4444" stroke-width="2" /><circle cx="75" cy="80" r="12" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" stroke-width="2" /><circle cx="125" cy="80" r="12" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" stroke-width="2" /></svg>`,
      "LombikSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 82 70 L 118 70 L 130 100 A 10 10 0 0 1 120 110 L 80 110 A 10 10 0 0 1 70 100 Z" fill="rgba(16,185,129,0.4)" stroke="none" /><path d="M 90 20 L 110 20 M 95 20 L 95 45 L 70 100 A 10 10 0 0 0 80 110 L 120 110 A 10 10 0 0 0 130 100 L 105 45 L 105 20" stroke="#1F2937" stroke-width="2" /><path d="M 85 80 L 90 80 M 80 95 L 85 95" stroke="#1F2937" stroke-width="2" /></svg>`,
      "ReagenzglasSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 90 60 L 110 60 L 110 95 A 10 10 0 0 1 90 95 Z" fill="rgba(239,68,68,0.3)" stroke="none" /><path d="M 85 20 L 115 20 M 90 20 L 90 95 A 10 10 0 0 0 110 95 L 110 20" stroke="#1F2937" stroke-width="2" /><path d="M 90 40 L 95 40 M 90 55 L 95 55 M 90 70 L 95 70 M 90 85 L 95 85" stroke="#1F2937" stroke-width="2" /></svg>`,
      "KraftVektorSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><rect x="60" y="40" width="40" height="40" rx="4" fill="rgba(31,41,55,0.15)" stroke="#1F2937" stroke-width="2" /><path d="M 100 60 L 150 60 M 140 52 L 150 60 L 140 68" stroke="#EF4444" stroke-width="2" /><path d="M 125 40 L 125 50 M 125 40 L 132 40 M 125 45 L 130 45" stroke="#EF4444" stroke-width="2" /></svg>`,
      "LinseSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 100 20 Q 115 60 100 100 Q 85 60 100 20 Z" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" stroke-width="2" /><path d="M 30 40 L 95 40 L 150 60" stroke="#F59E0B" stroke-width="2" /><path d="M 30 60 L 100 60 L 150 60" stroke="#F59E0B" stroke-width="2" /><path d="M 30 80 L 95 80 L 150 60" stroke="#F59E0B" stroke-width="2" /><circle cx="150" cy="60" r="3" fill="#F59E0B" stroke="none" /></svg>`,
      "StromkreisV2Svg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 40 45 L 40 20 L 90 20" stroke="#3B82F6" stroke-width="2" /><path d="M 110 20 L 160 20 L 160 50" stroke="#3B82F6" stroke-width="2" /><path d="M 40 55 L 40 100 L 160 100 L 160 70" stroke="#3B82F6" stroke-width="2" /><path d="M 25 45 L 55 45 M 32 55 L 48 55" stroke="#3B82F6" stroke-width="2" /><path d="M 90 20 L 105 10" stroke="#3B82F6" stroke-width="2" /><circle cx="90" cy="20" r="2" fill="#3B82F6" stroke="none" /><circle cx="110" cy="20" r="2" fill="#3B82F6" stroke="none" /><path d="M 120 20 L 120 50" stroke="#3B82F6" stroke-width="2" /><path d="M 120 70 L 120 100" stroke="#3B82F6" stroke-width="2" /><circle cx="120" cy="60" r="10" fill="rgba(245,158,11,0.1)" stroke="#3B82F6" stroke-width="2" /><path d="M 113 53 L 127 67 M 113 67 L 127 53" stroke="#3B82F6" stroke-width="2" /><circle cx="160" cy="60" r="10" fill="rgba(245,158,11,0.1)" stroke="#3B82F6" stroke-width="2" /><path d="M 153 53 L 167 67 M 153 67 L 167 53" stroke="#3B82F6" stroke-width="2" /></svg>`,
      "ReaktionsSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><circle cx="40" cy="60" r="10" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" stroke-width="2" /><path d="M 60 60 L 70 60 M 65 55 L 65 65" stroke="#1F2937" stroke-width="2" /><circle cx="90" cy="60" r="10" fill="rgba(239,68,68,0.2)" stroke="#EF4444" stroke-width="2" /><path d="M 110 60 L 135 60 M 125 55 L 135 60 L 125 65" stroke="#1F2937" stroke-width="2" /><circle cx="160" cy="60" r="12" fill="rgba(139,92,246,0.2)" stroke="#8B5CF6" stroke-width="2" /><circle cx="150" cy="50" r="6" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" stroke-width="2" /><circle cx="170" cy="70" r="6" fill="rgba(239,68,68,0.2)" stroke="#EF4444" stroke-width="2" /></svg>`,
      "DNAHelixSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 40 60 C 50 20, 70 20, 80 60 C 90 100, 110 100, 120 60 C 130 20, 150 20, 160 60" stroke="#3B82F6" stroke-width="2.5" /><path d="M 40 60 C 50 100, 70 100, 80 60 C 90 20, 110 20, 120 60 C 130 100, 150 100, 160 60" stroke="#10B981" stroke-width="2.5" /><line x1="50" y1="40" x2="50" y2="80" stroke="#1F2937" stroke-width="2" /><line x1="60" y1="30" x2="60" y2="90" stroke="#1F2937" stroke-width="2" /><line x1="70" y1="40" x2="70" y2="80" stroke="#1F2937" stroke-width="2" /><line x1="90" y1="80" x2="90" y2="40" stroke="#1F2937" stroke-width="2" /><line x1="100" y1="90" x2="100" y2="30" stroke="#1F2937" stroke-width="2" /><line x1="110" y1="80" x2="110" y2="40" stroke="#1F2937" stroke-width="2" /><line x1="130" y1="40" x2="130" y2="80" stroke="#1F2937" stroke-width="2" /><line x1="140" y1="30" x2="140" y2="90" stroke="#1F2937" stroke-width="2" /><line x1="150" y1="40" x2="150" y2="80" stroke="#1F2937" stroke-width="2" /></svg>`,
      "PunnettQuadratSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><rect x="80" y="40" width="80" height="60" fill="rgba(31,41,55,0.05)" stroke="#1F2937" stroke-width="2" /><line x1="120" y1="40" x2="120" y2="100" stroke="#1F2937" stroke-width="2" /><line x1="80" y1="70" x2="160" y2="70" stroke="#1F2937" stroke-width="2" /><circle cx="100" cy="25" r="5" fill="#3B82F6" stroke="none" /><circle cx="140" cy="25" r="5" fill="none" stroke="#3B82F6" stroke-width="2" /><circle cx="60" cy="55" r="5" fill="#EF4444" stroke="none" /><circle cx="60" cy="85" r="5" fill="none" stroke="#EF4444" stroke-width="2" /><circle cx="95" cy="55" r="4" fill="#3B82F6" stroke="none" /><circle cx="105" cy="55" r="4" fill="#EF4444" stroke="none" /><circle cx="135" cy="55" r="4" fill="none" stroke="#3B82F6" stroke-width="1.5" /><circle cx="145" cy="55" r="4" fill="#EF4444" stroke="none" /><circle cx="95" cy="85" r="4" fill="#3B82F6" stroke="none" /><circle cx="105" cy="85" r="4" fill="none" stroke="#EF4444" stroke-width="1.5" /><circle cx="135" cy="85" r="4" fill="none" stroke="#3B82F6" stroke-width="1.5" /><circle cx="145" cy="85" r="4" fill="none" stroke="#EF4444" stroke-width="1.5" /></svg>`,
      "EvolutionSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><line x1="10" y1="95" x2="190" y2="95" stroke="#1F2937" stroke-width="2" stroke-dasharray="4 4" /><ellipse cx="40" cy="85" rx="12" ry="6" fill="rgba(31,41,55,0.2)" stroke="#1F2937" stroke-width="2" /><polygon points="28,85 20,80 20,90" fill="rgba(31,41,55,0.2)" stroke="#1F2937" stroke-width="2" /><ellipse cx="90" cy="80" rx="16" ry="8" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" stroke-width="2" /><path d="M 80 85 L 75 95 M 100 85 L 105 95" stroke="#3B82F6" stroke-width="2" /><circle cx="105" cy="75" r="5" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" stroke-width="2" /><ellipse cx="150" cy="70" rx="20" ry="12" fill="rgba(16,185,129,0.2)" stroke="#10B981" stroke-width="2" /><path d="M 135 80 L 135 95 M 145 80 L 145 95 M 155 80 L 155 95 M 165 80 L 165 95" stroke="#10B981" stroke-width="2" /><circle cx="170" cy="60" r="8" fill="rgba(16,185,129,0.2)" stroke="#10B981" stroke-width="2" /></svg>`,
      "KompassSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><circle cx="100" cy="60" r="40" fill="rgba(59,130,246,0.15)" stroke="#3B82F6" stroke-width="2" /><circle cx="100" cy="60" r="32" fill="none" stroke="#3B82F6" stroke-width="1.5" stroke-dasharray="4 4" /><polygon points="100,25 93,60 100,95 107,60" fill="none" stroke="#1F2937" stroke-width="2" /><polygon points="100,25 93,60 107,60" fill="rgba(239,68,68,0.6)" stroke="#EF4444" stroke-width="1" /><polygon points="100,95 93,60 107,60" fill="rgba(31,41,55,0.3)" stroke="#1F2937" stroke-width="1" /><line x1="100" y1="12" x2="100" y2="20" stroke="#EF4444" stroke-width="2.5" /><line x1="100" y1="100" x2="100" y2="108" stroke="#1F2937" stroke-width="2.5" /><line x1="52" y1="60" x2="60" y2="60" stroke="#1F2937" stroke-width="2.5" /><line x1="140" y1="60" x2="148" y2="60" stroke="#1F2937" stroke-width="2.5" /><circle cx="100" cy="60" r="3" fill="#1F2937" stroke="none" /></svg>`,
      "VulkanSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><path d="M 40 100 L 85 40 L 115 40 L 160 100 Z" fill="rgba(31,41,55,0.2)" stroke="#1F2937" stroke-width="2" stroke-linejoin="miter" /><path d="M 95 35 C 80 20, 90 10, 100 15 C 115 5, 125 15, 115 25 C 125 35, 110 40, 105 35 Z" fill="rgba(31,41,55,0.3)" stroke="#1F2937" stroke-width="2" /><ellipse cx="100" cy="40" rx="15" ry="4" fill="rgba(239,68,68,0.5)" stroke="#EF4444" stroke-width="1.5" /><path d="M 90 42 Q 95 60 85 70 T 80 85" fill="none" stroke="#EF4444" stroke-width="2.5" /><path d="M 108 42 Q 105 55 115 65" fill="none" stroke="#F59E0B" stroke-width="2.5" /><circle cx="100" cy="90" r="10" fill="rgba(239,68,68,0.4)" stroke="#EF4444" stroke-width="2" /><line x1="100" y1="80" x2="100" y2="44" stroke="#EF4444" stroke-width="4" /><line x1="20" y1="100" x2="180" y2="100" stroke="#1F2937" stroke-width="2.5" /></svg>`,
      "PlattentektonikSvg": `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" style="width:100%; height:auto; max-height:80px;"><rect x="20" y="60" width="160" height="40" fill="rgba(239,68,68,0.05)" stroke="none" /><path d="M 20 60 L 80 60 L 120 100 L 20 100 Z" fill="rgba(59,130,246,0.2)" stroke="#3B82F6" stroke-width="2" stroke-linejoin="miter" /><path d="M 80 45 L 180 45 L 180 100 L 120 100 L 80 60 Z" fill="rgba(16,185,129,0.2)" stroke="#10B981" stroke-width="2" stroke-linejoin="miter" /><line x1="40" y1="40" x2="60" y2="40" stroke="#1F2937" stroke-width="2" /><polygon points="60,35 68,40 60,45" fill="#1F2937" stroke="none" /><line x1="160" y1="30" x2="140" y2="30" stroke="#1F2937" stroke-width="2" /><polygon points="140,25 132,30 140,35" fill="#1F2937" stroke="none" /><circle cx="110" cy="85" r="4" fill="rgba(239,68,68,0.5)" stroke="none" /><circle cx="105" cy="75" r="3" fill="rgba(239,68,68,0.5)" stroke="none" /><path d="M 105 70 Q 100 55 95 45" stroke="#EF4444" stroke-width="2" fill="none" stroke-dasharray="2 2" /></svg>`
    };

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
      switch (q.type as string) {
        case "mcq":
        case "bild-wort":
        case "anlaut-bild": {
          const opts = q.options ?? (q as any).words ?? [];
          parts.push(`<div class="options">`);
          opts.forEach((opt: string, oi: number) => {
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
        case "ro-genus-sortierung":
        case "genus-sort": {
          parts.push(`<div class="q-word">${q.word ?? ""}</div>`);
          parts.push(`<div class="options-inline">☐ der &nbsp;&nbsp;&nbsp; ☐ die &nbsp;&nbsp;&nbsp; ☐ das</div>`);
          break;
        }
        case "en-sentence-order":
        case "ro-satz-ordnen":
        case "ro-satz-ordnen-avansat":
        case "hu-mondat-rendezés":
        case "hu-történet-rendezés":
        case "satz-ordnen": {
          const chips = (q.shuffled ?? (q as any).shuffled ?? []).map((w: string) => `<span class="word-chip">${w}</span>`).join(" ");
          parts.push(`<div class="word-chips">${chips}</div>`);
          parts.push(`<div class="answer-line"></div>`);
          break;
        }
        case "bild-beschriften": {
          const opts = q.options ?? (q as any).words ?? [];
          parts.push(`<div class="q-word">${q.imageKey ?? ""}</div>`);
          parts.push(`<div class="options">`);
          opts.forEach((opt: string, oi: number) => {
            const label = String.fromCharCode(65 + oi);
            parts.push(`<div class="option-row">☐ ${label}) ${opt}</div>`);
          });
          parts.push(`</div>`);
          break;
        }
        case "en-find-error":
        case "ro-fehler-finden":
        case "ro-cratima-finden":
        case "hu-hiba-keresés":
        case "fehler-finden": {
          const words = q.words ?? (q as any).words ?? [];
          const numbered = words.map((w: string, wi: number) => `<span class="numbered-word">(${wi + 1}) ${w}</span>`).join(" ");
          parts.push(`<div class="q-sentence">${numbered}</div>`);
          parts.push(`<div class="answer-line-short"><span class="answer-label">${labels.wrongWordNr ?? "Falsches Wort Nr.:"}</span> <span class="blank-line">______</span></div>`);
          break;
        }
        case "en-word-families":
        case "ro-wortfamilien-baum":
        case "hu-szócsalád-fa":
        case "wortfamilien-baum": {
          parts.push(`<div class="q-word">${labels.root ?? "Stamm:"} <strong>${q.stamm ?? (q as any).root ?? ""}</strong></div>`);
          const opts = q.options ?? (q as any).words ?? [];
          parts.push(`<div class="options">`);
          opts.forEach((opt: string) => {
            parts.push(`<div class="option-row">☐ ${opt}</div>`);
          });
          parts.push(`</div>`);
          break;
        }
        case "ro-geschichte-sortieren":
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
        case "ro-wortarten-sortieren":
        case "wortarten-sortieren": {
          const words = q.words ?? (q as any).words ?? [];
          const wordList = words.map((w: string) => `<span class="word-chip">${w}</span>`).join(" ");
          parts.push(`<div class="word-chips">${wordList}</div>`);
          parts.push(`<div class="hint-text">${printStrings.wordTypesHint}</div>`);
          parts.push(`<div class="answer-line"></div>`);
          break;
        }
        case "ro-zeitformen-zuordnen":
        case "zeitformen-zuordnen": {
          parts.push(`<div class="q-sentence">${q.sentence ?? q.question}</div>`);
          parts.push(`<div class="options-inline">☐ ${printStrings.tenseOptions[0]} &nbsp;&nbsp;&nbsp; ☐ ${printStrings.tenseOptions[1]} &nbsp;&nbsp;&nbsp; ☐ ${printStrings.tenseOptions[2]}</div>`);
          break;
        }
        case "satzglied-markieren": {
          const words = q.words ?? (q as any).words ?? [];
          const wordList = words.map((w: string) => `<span class="word-chip">${w}</span>`).join(" ");
          parts.push(`<div class="word-chips">${wordList}</div>`);
          parts.push(`<div class="hint-text">${printStrings.sentencePartsHint}</div>`);
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
          parts.push(`<div class="options-inline">☐ ${printStrings.cases[0]} &nbsp;&nbsp;&nbsp; ☐ ${printStrings.cases[1]} &nbsp;&nbsp;&nbsp; ☐ ${printStrings.cases[2]} &nbsp;&nbsp;&nbsp; ☐ ${printStrings.cases[3]}</div>`);
          break;
        }
        case "adjektiv-endungen": {
          parts.push(`<div class="q-sentence">${q.sentence ?? q.question}</div>`);
          parts.push(`<div class="options-inline">☐ -e &nbsp;&nbsp;&nbsp; ☐ -er &nbsp;&nbsp;&nbsp; ☐ -es &nbsp;&nbsp;&nbsp; ☐ -en &nbsp;&nbsp;&nbsp; ☐ -em</div>`);
          break;
        }
        case "ro-luecken-text":
        case "hu-hiányos-szöveg":
        case "luecken-text": {
          const lSentence = (q.lueckenSentence ?? (q as any).sentence ?? "").replace("___", '<span class="blank-line">______</span>');
          parts.push(`<div class="q-sentence">${lSentence}</div>`);
          const lOpts = q.lueckenOptions ?? (q as any).options ?? [];
          parts.push(`<div class="options">`);
          lOpts.forEach((opt: string, oi: number) => {
            const label = String.fromCharCode(65 + oi);
            parts.push(`<div class="option-row">☐ ${label}) ${opt}</div>`);
          });
          parts.push(`</div>`);
          break;
        }
        case "satzgefuge-diagram": {
          parts.push(`<div class="q-sentence"><strong>${printStrings.mainClause}:</strong> ${q.hauptsatz ?? ""}</div>`);
          parts.push(`<div class="q-sentence"><strong>${printStrings.subClause}:</strong> ${q.nebensatz ?? ""}</div>`);
          if (q.konjunktion) parts.push(`<div class="hint-text">${printStrings.conjunction}: <em>${q.konjunktion}</em></div>`);
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
          if (q.epochenHint) parts.push(`<div class="hint-text">${printStrings.hint}: ${q.epochenHint}</div>`);
          const eOpts = q.epochenOptions ?? [];
          parts.push(`<div class="options">`);
          eOpts.forEach((opt, oi) => {
            const label = String.fromCharCode(65 + oi);
            parts.push(`<div class="option-row">☐ ${label}) ${opt}</div>`);
          });
          parts.push(`</div>`);
          break;
        }

        case "jahreszeiten-bild":
        case "tier-erkennen": {
          const svgName = (q as any).svgName;
          const opts = q.options ?? [];
          parts.push(`<div class="visual-hint-box">`);
          if (svgName && SVG_INLINE_K1K2[svgName]) {
            parts.push(`<div style="text-align:center; margin-bottom:8px;">${SVG_INLINE_K1K2[svgName]}</div>`);
          }
          parts.push(`</div>`);
          if (opts.length > 0) {
            parts.push(`<div class="visual-options-row">`);
            opts.forEach((opt: string) => parts.push(`<span class="visual-option-chip">☐ ${opt}</span>`));
            parts.push(`</div>`);
          } else {
             parts.push(`<div class="answer-line"></div>`);
          }
          break;
        }

        case "wetter-erkennen": {
          const svgName = (q as any).svgName;
          const opts = q.options ?? [];
          parts.push(`<div class="visual-hint-box">`);
          if (svgName && SVG_INLINE_K3K4[svgName]) {
            parts.push(`<div style="text-align:center; margin-bottom:8px;">${SVG_INLINE_K3K4[svgName]}</div>`);
          }
          parts.push(`</div>`);
          if (opts.length > 0) {
            parts.push(`<div class="visual-options-row">`);
            opts.forEach((opt: string) => parts.push(`<span class="visual-option-chip">☐ ${opt}</span>`));
            parts.push(`</div>`);
          } else {
             parts.push(`<div class="answer-line"></div>`);
          }
          break;
        }

        case "wasserkreislauf-ordnen": {
          const stages = (q as any).stages ?? [];
          const stageSvgs = (q as any).stageSvgs ?? {};
          parts.push(`<div class="hint-text">${printStrings.waterCycleOrder}</div>`);
          parts.push(`<div style="display:flex; gap:10px; justify-content:center; margin:10px 0;">`);
          stages.forEach((s: string) => {
            const svgName = stageSvgs[s];
            parts.push(`<div style="text-align:center; width:80px;">`);
            if (svgName && SVG_INLINE_K3K4[svgName]) {
              parts.push(`<div style="height:60px; display:flex; align-items:center; justify-content:center;">${SVG_INLINE_K3K4[svgName]}</div>`);
            }
            parts.push(`<div style="font-size:9pt; margin-top:4px;">${s}</div>`);
            parts.push(`</div>`);
          });
          parts.push(`</div>`);
          parts.push(`<div class="visual-order-row">`);
          stages.forEach((_: string, i: number) => parts.push(`<span class="visual-order-item"><span class="visual-order-num">${i + 1}</span> _________</span>`));
          parts.push(`</div>`);
          break;
        }

        case "pflanzen-anatomie":
        case "dna-evolution-erkennen":
        case "geographie-icon":
        case "organ-diagram":
        case "zell-diagram":
        case "kraft-richtung":
        case "chemie-laborsymbol":
        case "chemie-reaktion-oder-nicht":
        case "chemie-trennmethode":
        case "chemie-teilchenbild":
        case "thermometer-ablesen":
        case "verkehrszeichen-quiz":
        case "hu-kép-felismerés": {
          const emoji = (q as any).partEmoji ?? (q as any).organEmoji ?? (q as any).organelleEmoji ?? (q as any).objectEmoji ?? (q as any).sceneEmoji ?? (q as any).symbol ?? (q as any).imageKey ?? (q as any).sign ?? "🖼️";
          const hint = (q as any).partHint ?? (q as any).organHint ?? (q as any).organelleHint ?? (q as any).prompt ?? (q as any).scenario ?? (q as any).label ?? "";
          const svgName = (q as any).svgName;
          const opts = q.options ?? [];
          parts.push(`<div class="visual-hint-box">`);
          if (svgName && SVG_INLINE[svgName]) {
            parts.push(`<div style="text-align:center; margin-bottom:8px;">${SVG_INLINE[svgName]}</div>`);
          } else {
            parts.push(`<div class="visual-emoji-box ${q.type.includes('organ') ? 'body' : q.type.includes('zell') ? 'cell' : q.type.includes('lebenszyklus') ? 'life' : q.type.includes('ernaehrung') ? 'nutrient' : ''}">${emoji}</div>`);
          }
          if (hint) parts.push(`<div class="visual-hint-text">${hint}</div>`);
          parts.push(`</div>`);
          if (opts.length > 0) {
            parts.push(`<div class="visual-options-row">`);
            opts.forEach((opt: string) => parts.push(`<span class="visual-option-chip">☐ ${opt}</span>`));
            parts.push(`</div>`);
          } else {
             parts.push(`<div class="answer-line"></div>`);
          }
          break;
        }

        case "tier-klassifizierung-bio":
        case "tier-klassifizierung": {
          const animal = (q as any).animal ?? "";
          parts.push(`<div class="q-word">${animal}</div>`);
          parts.push(`<div class="visual-options-row">`);
          if ((q as any).type === "tier-klassifizierung-bio") {
             parts.push(`<span class="visual-option-chip">☐ ${printStrings.vertebrate}</span>`);
             parts.push(`<span class="visual-option-chip">☐ ${printStrings.invertebrate}</span>`);
          } else {
             parts.push(`<span class="visual-option-chip">☐ ${printStrings.mammal}</span>`);
             parts.push(`<span class="visual-option-chip">☐ ${printStrings.bird}</span>`);
             parts.push(`<span class="visual-option-chip">☐ ${printStrings.fish}</span>`);
             parts.push(`<span class="visual-option-chip">☐ ${printStrings.reptile}</span>`);
             parts.push(`<span class="visual-option-chip">☐ ${printStrings.amphibian}</span>`);
          }
          parts.push(`</div>`);
          break;
        }

        case "organ-zuordnung":
        case "sinne-zuordnung":
        case "jahreszeit-zuordnung":
        case "muell-sortierung":
        case "ernaehrungs-sort": {
          const item = (q as any).organ ?? (q as any).sense ?? (q as any).description ?? (q as any).item ?? "";
          const opts = q.options ?? [];
          parts.push(`<div class="q-word">${item}</div>`);
          parts.push(`<div class="visual-options-row">`);
          opts.forEach((opt: string) => parts.push(`<span class="visual-option-chip">☐ ${opt}</span>`));
          parts.push(`</div>`);
          break;
        }

        case "lebenszyklus-timeline":
        case "nahrungskette-sort":
        case "energie-kette": {
          const title = (q as any).organism ?? (q as any).title ?? "";
          const items = (q as any).stages ?? (q as any).organisms ?? [];
          const emojis = (q as any).stageEmojis ?? {};
          if (title) parts.push(`<div class="q-word">${title}</div>`);
          parts.push(`<div class="hint-text">${printStrings.orderPrompt}</div>`);
          parts.push(`<div class="visual-order-row">`);
          items.forEach((s: string) => parts.push(`<span class="visual-order-item"><span class="visual-order-num">___</span>${emojis[s] ?? ""} ${s}</span>`));
          parts.push(`</div>`);
          break;
        }

        case "stromkreis-diagramm": {
          parts.push(`<div class="q-word">${(q as any).prompt ?? ""}</div>`);
          const diagrams = (q as any).diagrams ?? [];
          parts.push(`<div class="visual-options-row">`);
          diagrams.forEach((d: any, i: number) => parts.push(`<span class="visual-option-chip">☐ ${printStrings.diagram} ${i+1}</span>`));
          parts.push(`</div>`);
          break;
        }

        case "hu-szófaj-sorter": {
           parts.push(`<div class="q-word">${(q as any).word ?? ""}</div>`);
           parts.push(`<div class="visual-options-row">`);
           ((q as any).labels ?? []).forEach((l: string) => parts.push(`<span class="visual-option-chip">☐ ${l}</span>`));
           parts.push(`</div>`);
           break;
        }

        case "hu-mondatrész-jelölés": {
           const chips = ((q as any).words ?? []).map((w: string) => `<span class="word-chip">${w}</span>`).join(" ");
           parts.push(`<div class="word-chips">${chips}</div>`);
           parts.push(`<div class="visual-options-row">`);
           ((q as any).labels ?? []).forEach((l: string) => parts.push(`<span class="visual-option-chip">☐ ${l}</span>`));
           parts.push(`</div>`);
           break;
        }

        case "hu-toldalék-választó": {
           parts.push(`<div class="q-word">${(q as any).root ?? ""}</div>`);
           parts.push(`<div class="visual-options-row">`);
           ((q as any).endings ?? []).forEach((l: string) => parts.push(`<span class="visual-option-chip">☐ -${l}</span>`));
           parts.push(`</div>`);
           break;
        }

        case "hu-eset-jelölés": {
          const sentence = (q as any).sentence ?? "";
          const highlight = (q as any).highlight ?? "";
          const displaySent = highlight
            ? sentence.replace(highlight, `<u><strong>${highlight}</strong></u>`)
            : sentence;
          parts.push(`<div class="q-sentence">${displaySent}</div>`);
          parts.push(`<div class="visual-options-row">`);
          ((q as any).labels ?? []).forEach((l: string) => parts.push(`<span class="visual-option-chip">☐ ${l}</span>`));
          parts.push(`</div>`);
          break;
        }
        default: {
          const registeredPrintSvg = typeof (q as any).printSvg === "string" ? (q as any).printSvg : "";
          if (registeredPrintSvg) {
            const prompt = (q as any).prompt ?? q.question ?? "";
            const hint = (q as any).clue ?? (q as any).hint ?? "";
            const options = (q as any).options ?? [];
            const orderItems = (q as any).items ?? [];
            if (prompt) parts.push(`<div class="q-word">${prompt}</div>`);
            parts.push(`<div style="text-align:center; margin:6px 0 8px;">${registeredPrintSvg}</div>`);
            if (hint) parts.push(`<div class="hint-text">${hint}</div>`);
            if (options.length > 0) {
              parts.push(`<div class="visual-options-row">`);
              options.forEach((option: string) => parts.push(`<span class="visual-option-chip">&#9744; ${option}</span>`));
              parts.push(`</div>`);
            } else if (orderItems.length > 0) {
              parts.push(`<div class="visual-order-row">`);
              orderItems.forEach((item: string) => parts.push(`<span class="visual-order-item"><span class="visual-order-num">___</span>${item}</span>`));
              parts.push(`</div>`);
            } else {
              parts.push(`<div class="answer-line"></div>`);
            }
          } else {
            parts.push(`<div class="answer-line"></div>`);
          }
          break;
        }
      }

      parts.push(`</div>`); // close .question
      return parts.join("\n");
    };

    const questionsHtml = questions.map((q, qi) => renderQuestionPrint(q, qi)).join("\n");

    const html = `<!DOCTYPE html>
<html lang="${langPrefix}">
<head>
  <meta charset="UTF-8">
  <title>${titleStr} – ${labels.gradeFull} ${grade}</title>
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

    .visual-hint-box { display: flex; align-items: center; gap: 10px; margin: 4px 0 6px 28px; }
    .visual-emoji-box {
      width: 40px; height: 40px; border-radius: 8px;
      background: rgba(16,185,129,0.08);
      border: 2px solid rgba(16,185,129,0.22);
      display: flex; align-items: center; justify-content: center;
      font-size: 22px; flex-shrink: 0;
    }
    .visual-emoji-box.body { background: rgba(239,68,68,0.08); border-color: rgba(239,68,68,0.22); }
    .visual-emoji-box.cell { background: rgba(139,92,246,0.08); border-color: rgba(139,92,246,0.22); }
    .visual-emoji-box.life { background: rgba(245,158,11,0.08); border-color: rgba(245,158,11,0.22); }
    .visual-emoji-box.nutrient { background: rgba(219,39,119,0.08); border-color: rgba(219,39,119,0.22); }
    .visual-hint-text { font-size: 10pt; color: #64748b; font-style: italic; line-height: 1.4; flex: 1; }
    .visual-hint-label { font-size: 9pt; color: #475569; font-weight: 600; margin-bottom: 2px; }
    .visual-options-row { margin-left: 28px; margin-top: 4px; display: flex; flex-wrap: wrap; gap: 6px; }
    .visual-option-chip {
      display: inline-flex; align-items: center; gap: 4px;
      border: 1.5px solid #d1d5db; border-radius: 4px;
      padding: 2px 8px; font-size: 10pt; background: rgba(255,255,255,0.9);
    }
    .visual-order-row { display: flex; gap: 8px; flex-wrap: wrap; margin: 6px 0 6px 28px; }
    .visual-order-item {
      display: inline-flex; align-items: center; gap: 4px;
      border: 1.5px dashed #9ca3af; padding: 2px 8px; border-radius: 4px;
      background: rgba(255,255,255,0.7); font-size: 10pt;
    }
    .visual-order-num {
      border: 1.5px solid #9ca3af; border-radius: 3px;
      min-width: 20px; text-align: center; font-size: 9pt; padding: 0 4px; background: white;
    }

  </style>
</head>
<body>
<div class="page-content">
  <div class="header">
    <div class="header-top">
      <div class="header-left">
        <h1>${titleStr}</h1>
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
        {screen === "country" && hasCountryChoice && (
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
                {titleStr}
              </h1>
              <p className="text-white/50 text-sm">{labels.selectCountry}</p>
            </motion.div>

            <motion.div
              className="relative z-10 flex flex-col gap-3 w-full max-w-xs"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              {effectiveCountries.map((c, i) => (
                <motion.button
                  key={c.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => selectCountry(c.code)}
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
            {hasCountryChoice ? (
              <motion.button
                onClick={() => setScreen("country")}
                className="absolute top-5 left-5 z-10 p-2 rounded-xl bg-white/5 border border-white/10"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft size={20} className="text-white/60" />
              </motion.button>
            ) : (
              <Link href="/learn" className="absolute top-5 left-5 z-10">
                <motion.div
                  className="p-2 rounded-xl bg-white/5 border border-white/10"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowLeft size={20} className="text-white/60" />
                </motion.div>
              </Link>
            )}

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
                {titleStr}
              </h1>
              <p className="text-white/50 text-sm">
                {hasCountryChoice ? `${effectiveCountries.find(cc => cc.code === country)?.flag ?? ""} ` : ""}{labels.selectGrade}
              </p>
            </motion.div>

            <motion.div
              className="relative z-10 grid grid-cols-4 gap-3 w-full max-w-xs"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              {supportedGrades.map((g, i) => (
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
              <span className="font-black text-[#00D4FF] tracking-wide text-sm">{titleStr}</span>
              <div className="ml-auto flex items-center gap-2">
                {/* Country picker eltávolítva — főoldali nyelvválasztó vezeti */}
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
                      <span className="font-bold text-sm flex-1" style={{ color: theme.color }}>
                        {typeof theme.name === 'object' && theme.name !== null ? ((theme.name as any)[langPrefix] ?? (theme.name as any).en ?? (theme.name as any).de ?? (theme.name as any).hu ?? (theme.name as any).ro ?? "...") : theme.name as React.ReactNode}
                      </span>
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
                              <span>{typeof sub.name === 'object' && sub.name !== null ? ((sub.name as any)[langPrefix] ?? (sub.name as any).en ?? (sub.name as any).de ?? (sub.name as any).hu ?? (sub.name as any).ro ?? "...") : sub.name as React.ReactNode}</span>
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

              {/* Lesetest — auto-hide ha grade üres (nincs passage) */}
              {!config.hideLesetest && (!config.getReadingPassage || config.getReadingPassage(grade) !== null) && <motion.button
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
              </motion.button>}
            </div>

            {/* Start Button — compact floating FAB (bottom-center) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startTest}
              disabled={selectedIds.length === 0 && !includeLesetest}
              className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-5 py-3 rounded-full
                         font-black text-sm text-black shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              style={{
                background: "linear-gradient(135deg, #00D4FF, #0099CC)",
                boxShadow: selectedIds.length > 0 || includeLesetest ? "0 0 24px rgba(0,212,255,0.55)" : "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              <span>🚀</span>
              <span>{labels.startTest}</span>
              {(selectedIds.length > 0 || includeLesetest) && (
                <span className="font-bold text-xs bg-black/20 px-2 py-0.5 rounded-full">
                  {selectedIds.length + (includeLesetest ? 1 : 0)}
                </span>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* ── TEST ──────────────────────────────────────────────────────────── */}
        {screen === "test" && questions.length > 0 && (
          <ModernPaperTest
            title={titleStr}
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

                    {/* Optional Inline SVG Figure */}
                    {(q as any).svgRef && (
                      <div className="my-4 flex justify-center" style={{ maxHeight: 240 }}>
                        <TopicSvgRenderer config={(q as any).svgRef} lang={config.gameId === "astromagyar" ? "hu" : langPrefix} />
                      </div>
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
                        {Array.from(new Set(q.options)).map((opt, _indexInSet) => {
                          const oi = q.options!.indexOf(opt);
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
                              style={{ minHeight: 28, lineHeight: '28px' }}
                              className={`w-full text-left flex items-start gap-1.5 px-1 py-0 text-sm transition-colors ${rowCls}`}
                            >
                              <span className={`font-mono text-xs w-5 text-right shrink-0 ${labelCls}`} style={{ lineHeight: '28px' }}>
                                {String.fromCharCode(65 + oi)})
                              </span>
                              <span className="flex-1 break-words" style={{ lineHeight: '28px' }}>{opt}</span>
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
                      <div className="ml-7 py-1" style={{ minHeight: 84 }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 h-full">
                          {Array.from(new Set(q.options)).map((imgKey, _indexInSet) => {
                            const oi = q.options!.indexOf(imgKey);
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
                                className={`rounded-lg border-2 flex flex-col items-center justify-center transition-all ${border} aspect-square sm:aspect-auto`}
                                style={{ minHeight: 76 }}
                              >
                                {Icon ? (
                                  <div style={{ width: 44, height: 44 }} className="flex items-center justify-center">
                                    <Icon />
                                  </div>
                                ) : (
                                  <span className="text-xs text-slate-400">{imgKey}</span>
                                )}
                                <span className="text-[9px] font-semibold text-slate-400 mt-0.5 text-center">
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
                <span className="text-[#00D4FF] font-black tracking-wide">{titleStr} — {labels.gradeFull} {grade}</span>
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
  calculateMark: calculateCountryAwareMark,
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
    selectCountry: { de: "Wähle dein Land", hu: "Válassz országot", ro: "Alege țara", en: "Select your country" },
    selectGrade: { de: "Wähle deine Klassenstufe", hu: "Válassz osztályt", ro: "Alege clasa", en: "Select your grade" },
    gradePrefix: { de: "Kl.", hu: "O.", ro: "Cl.", en: "Gr." },
    gradeFull: { de: "Klasse", hu: "Osztály", ro: "Clasa", en: "Grade" },
    selectTopics: { de: "Themen für deinen Test auswählen", hu: "Válassz témákat a teszthez", ro: "Alege temele pentru test", en: "Select topics for your test" },
    all: { de: "Alle", hu: "Mind", ro: "Toate", en: "All" },
    allCheck: { de: "Alle ✓", hu: "Mind ✓", ro: "Toate ✓", en: "All ✓" },
    soon: { de: "bald", hu: "hamarosan", ro: "în curând", en: "soon" },
    questionsShort: { de: "Fr.", hu: "Kérd.", ro: "Într.", en: "Qs" },
    startTest: { de: "TEST STARTEN →", hu: "TESZT INDÍTÁSA →", ro: "ÎNCEPE TESTUL →", en: "START TEST →" },
    areas: { de: "Bereiche", hu: "témakör", ro: "domenii", en: "areas" },
    readingTest: { de: "📖 Lesetest", hu: "📖 Olvasás teszt", ro: "📖 Test de lectură", en: "📖 Reading test" },
    readingTestDesc: { de: "Text lesen & Fragen beantworten · 3 Fr.", hu: "Szöveg olvasása és kérdések · 3 Kérd.", ro: "Citește textul și răspunde · 3 Într.", en: "Read text & answer questions · 3 Qs" },
    task: { de: "Aufgabe", hu: "Feladat", ro: "Exercițiul", en: "Task" },
    interactiveTask: { de: "Interaktive Aufgabe", hu: "Interaktív feladat", ro: "Exercițiu interactiv", en: "Interactive task" },
    readAloud: { de: "Vorlesen", hu: "Felolvasás", ro: "Citește cu voce tare", en: "Read aloud" },
    clickCorrectImage: { de: "🖼 Klicke auf das richtige Bild:", hu: "🖼 Kattints a helyes képre:", ro: "🖼 Fă clic pe imaginea corectă:", en: "🖼 Click the correct image:" },
    whichLetterStarts: { de: "🔤 Mit welchem Buchstaben beginnt das Wort?", hu: "🔤 Milyen betűvel kezdődik a szó?", ro: "🔤 Cu ce literă începe cuvântul?", en: "🔤 What letter does the word start with?" },
    answerPlaceholder: { de: "Antwort...", hu: "Válasz...", ro: "Răspuns...", en: "Answer..." },
    submit: { de: "Abgeben ✓", hu: "Beküldés ✓", ro: "Trimite ✓", en: "Submit ✓" },
    back: { de: "Zurück", hu: "Vissza", ro: "Înapoi", en: "Back" },
    markLabel: { de: "Note", hu: "Jegy", ro: "Nota", en: "Grade" },
    correct: { de: "richtig", hu: "helyes", ro: "corect", en: "correct" },
    review: { de: "Auswertung", hu: "Értékelés", ro: "Evaluare", en: "Review" },
    tryAgain: { de: "Nochmal", hu: "Újra", ro: "Din nou", en: "Try again" },
    mainMenu: { de: "Hauptmenü", hu: "Főmenü", ro: "Meniu principal", en: "Main menu" },
    pdf: { de: "PDF", hu: "PDF", ro: "PDF", en: "PDF" },
    points: { de: "Punkte", hu: "Pontok", ro: "Puncte", en: "Points" },
    pointsShort: { de: "Pkt.", hu: "P.", ro: "Pct.", en: "Pts." },
    name: { de: "Name", hu: "Név", ro: "Nume", en: "Name" },
    date: { de: "Datum", hu: "Dátum", ro: "Data", en: "Date" },
    wrongWordNr: { de: "Falsches Wort Nr.:", hu: "Hibás szó száma:", ro: "Cuvântul greșit nr.:", en: "Wrong word no.:" },
    root: { de: "Stamm:", hu: "Tő:", ro: "Rădăcină:", en: "Root:" },
  },
};

export { LanguageTestEngine };
export type { LanguageTestEngineConfig };

export default function DeutschTestPage() {
  return <LanguageTestEngine config={DEUTSCH_CONFIG} />;
}
