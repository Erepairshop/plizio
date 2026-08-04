"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Rocket,
  BookOpen,
  Languages,
  Search,
  Leaf,
  Microscope,
  Navigation,
  Castle,
  Cpu,
  Calculator,
  Sparkles,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/components/LanguageProvider";

type Lang = "de" | "hu" | "ro" | "en";
type Mode = "astro" | "test";

interface SubjectDef {
  id: string;
  icon: LucideIcon;
  color: string;
  grades: number[];
  langOnly?: Lang;
  astroRoute: string;
  testRoute: string;
  name: Record<Lang, string>;
}

const SUBJECTS: SubjectDef[] = [
  {
    id: "mathe",
    icon: Calculator,
    color: "#B44DFF",
    grades: [1, 2, 3, 4, 5, 6, 7, 8],
    astroRoute: "/astromath",
    testRoute: "/mathtest",
    name: { de: "Mathematik", hu: "Matematika", ro: "Matematică", en: "Math" },
  },
  {
    id: "deutsch",
    icon: BookOpen,
    color: "#00D4FF",
    grades: [1, 2, 3, 4, 5, 6, 7, 8],
    langOnly: "de",
    astroRoute: "/astrodeutsch",
    testRoute: "/deutschtest",
    name: { de: "Deutsch", hu: "Német", ro: "Germană", en: "German" },
  },
  {
    id: "english",
    icon: Languages,
    color: "#3B82F6",
    grades: [1, 2, 3, 4, 5, 6, 7, 8],
    langOnly: "en",
    astroRoute: "/astroenglish",
    testRoute: "/englishtest",
    name: { de: "Englisch", hu: "Angol", ro: "Engleză", en: "English" },
  },
  {
    id: "magyar",
    icon: Languages,
    color: "#FF2D78",
    grades: [1, 2, 3, 4, 5, 6, 7, 8],
    langOnly: "hu",
    astroRoute: "/astromagyar",
    testRoute: "/magyarteszt",
    name: { de: "Ungarisch", hu: "Magyar", ro: "Maghiară", en: "Hungarian" },
  },
  {
    id: "romana",
    icon: BookOpen,
    color: "#E879F9",
    grades: [1, 2, 3, 4, 5, 6, 7, 8],
    langOnly: "ro",
    astroRoute: "/astroromana",
    testRoute: "/romaniantest",
    name: { de: "Rumänisch", hu: "Román", ro: "Română", en: "Romanian" },
  },
  {
    id: "sachkunde",
    icon: Search,
    color: "#10B981",
    grades: [1, 2, 3, 4],
    langOnly: "de",
    astroRoute: "/astro-sachkunde",
    testRoute: "/sachkundetest",
    name: { de: "Sachkunde", hu: "Környezetismeret", ro: "Cunoașterea mediului", en: "General Knowledge" },
  },
  {
    id: "biologie",
    icon: Leaf,
    color: "#10B981",
    grades: [5, 6, 7, 8],
    astroRoute: "/astro-biologie",
    testRoute: "/biologietest",
    name: { de: "Biologie", hu: "Biológia", ro: "Biologie", en: "Biology" },
  },
  {
    id: "physik",
    icon: Rocket,
    color: "#38BDF8",
    grades: [5, 6, 7, 8],
    astroRoute: "/astro-physik",
    testRoute: "/physiktest",
    name: { de: "Physik", hu: "Fizika", ro: "Fizică", en: "Physics" },
  },
  {
    id: "kemia",
    icon: Microscope,
    color: "#F97316",
    grades: [5, 6, 7, 8],
    astroRoute: "/astrokemia",
    testRoute: "/kemiatest",
    name: { de: "Chemie", hu: "Kémia", ro: "Chimie", en: "Chemistry" },
  },
  {
    id: "geographie",
    icon: Navigation,
    color: "#06B6D4",
    grades: [5, 6, 7, 8],
    astroRoute: "/astro-geographie",
    testRoute: "/geographietest",
    name: { de: "Geographie", hu: "Földrajz", ro: "Geografie", en: "Geography" },
  },
  {
    id: "geschichte",
    icon: Castle,
    color: "#8B5CF6",
    grades: [5, 6, 7, 8],
    astroRoute: "/astro-geschichte",
    testRoute: "/geschichtetest",
    name: { de: "Geschichte", hu: "Történelem", ro: "Istorie", en: "History" },
  },
  {
    id: "informatika",
    icon: Cpu,
    color: "#3B82F6",
    grades: [1, 2, 3, 4, 5, 6, 7, 8],
    astroRoute: "/astrinformatika",
    testRoute: "/informatikatest",
    name: { de: "Informatik", hu: "Informatika", ro: "Informatică", en: "Informatics" },
  },
  {
    id: "ai",
    icon: Sparkles,
    color: "#EC4899",
    grades: [5, 6, 7, 8],
    astroRoute: "/astro-ai",
    testRoute: "/aitest",
    name: { de: "Künstliche Intelligenz", hu: "Mesterséges Intelligencia", ro: "Inteligență Artificială", en: "Artificial Intelligence" },
  },
];

const UI: Record<Lang, { pickGrade: string; astro: string; test: string; gradeLabel: string }> = {
  de: { pickGrade: "Welche Klasse?", astro: "Astro", test: "Test", gradeLabel: "Klasse" },
  hu: { pickGrade: "Melyik osztály?", astro: "Astro", test: "Teszt", gradeLabel: "osztály" },
  ro: { pickGrade: "Ce clasă?", astro: "Astro", test: "Test", gradeLabel: "clasa" },
  en: { pickGrade: "Which grade?", astro: "Astro", test: "Test", gradeLabel: "Grade" },
};

const STORAGE_KEY = "plizio:subject-picker:grade";
const SUPPORTED_LANGS: Lang[] = ["de", "hu", "ro", "en"];

export default function SubjectPicker() {
  const router = useRouter();
  const { lang } = useLang();
  const l: Lang = SUPPORTED_LANGS.includes(lang as Lang) ? (lang as Lang) : "de";
  const t = UI[l];

  const [grade, setGrade] = useState<number | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const n = saved ? parseInt(saved, 10) : NaN;
      setGrade(Number.isFinite(n) && n >= 1 && n <= 8 ? n : 5);
    } catch {
      setGrade(5);
    }
  }, []);

  const setAndStoreGrade = (g: number) => {
    setGrade(g);
    try { localStorage.setItem(STORAGE_KEY, String(g)); } catch {}
  };

  const go = (subject: SubjectDef, mode: Mode) => {
    if (
      grade == null ||
      !subject.grades.includes(grade) ||
      (subject.langOnly != null && subject.langOnly !== l)
    ) return;
    // Code Kids (K1-K4 Informatika) uses separate routes
    const isCodeKids = subject.id === "informatika" && grade <= 4;
    if (mode === "astro") {
      if (isCodeKids) {
        router.push(`/codekids/${grade}`);
      } else {
        router.push(`${subject.astroRoute}/${grade}`);
      }
    } else {
      if (isCodeKids) {
        router.push(`/codekidstest?grade=${grade}`);
      } else {
        router.push(`${subject.testRoute}?grade=${grade}`);
      }
    }
  };

  const visibleSubjects = grade == null
    ? []
    : SUBJECTS.filter(s =>
        s.grades.includes(grade) &&
        (!s.langOnly || s.langOnly === l)
      );

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6">
      <div className="mb-5">
        <p className="paper-kicker mb-3">{t.pickGrade}</p>
        <div className="grid grid-cols-8 gap-1.5 sm:gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((g) => {
            const active = g === grade;
            return (
              <button
                key={g}
                onClick={() => setAndStoreGrade(g)}
                className="subject-grade py-2 text-base font-black transition-all sm:py-3 sm:text-lg"
                data-active={active}
                aria-label={`${t.gradeLabel} ${g}`}
                aria-pressed={active}
              >
                {g}
              </button>
            );
          })}
        </div>
      </div>

      {visibleSubjects.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {visibleSubjects.map((s, i) => {
            const Icon = s.icon;
            const isCodeKids = s.id === "informatika" && grade != null && grade <= 4;
            const localName = isCodeKids ? "Code Kids" : (s.name[l] ?? s.name.de);
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="subject-card"
              >
                <div className="subject-card-head flex items-center gap-3 px-3 py-3">
                  <div
                    className="subject-card-icon h-10 w-10 flex-shrink-0 sm:h-11 sm:w-11"
                    style={{ background: `${s.color}22`, border: `1.5px solid ${s.color}55` }}
                  >
                    <Icon size={22} color={s.color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="truncate text-sm font-bold text-[#211d18] sm:text-base">{localName}</div>
                    <div className="text-[10px] font-medium text-[#6b6356] sm:text-xs">
                      {t.gradeLabel} {grade}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <button
                    onClick={() => go(s, "astro")}
                    className="subject-action flex items-center justify-center gap-1.5 py-2.5 text-sm font-bold active:scale-95 sm:py-3"
                  >
                    <Sparkles size={16} className="text-[#b4502a]" />
                    <span>{t.astro}</span>
                  </button>
                  <button
                    onClick={() => go(s, "test")}
                    className="subject-action flex items-center justify-center gap-1.5 py-2.5 text-sm font-bold active:scale-95 sm:py-3"
                  >
                    <ClipboardCheck size={16} className="text-[#8f3d1f]" />
                    <span>{t.test}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
