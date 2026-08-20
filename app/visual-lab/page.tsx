"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Atom,
  BookOpen,
  Calculator,
  Castle,
  Cpu,
  FlaskConical,
  Languages,
  Leaf,
  Microscope,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import type { Lang, VisualLabSubject } from "@/components/VisualLab";

const VisualLab = dynamic(() => import("@/components/VisualLab"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-50 bg-[#020408]" />,
});

type SubjectDef = {
  id: VisualLabSubject;
  icon: LucideIcon;
  color: string;
  grades: number[];
  langOnly?: Lang;
  label: Record<Lang, string>;
};

const SUBJECTS: SubjectDef[] = [
  { id: "astromath", icon: Calculator, color: "#8B5CF6", grades: [1, 2, 3, 4, 5, 6, 7, 8], label: { de: "Mathematik", hu: "Matematika", ro: "Matematică", en: "Math" } },
  { id: "deutsch", icon: BookOpen, color: "#06B6D4", grades: [1, 2, 3, 4, 5, 6, 7, 8], langOnly: "de", label: { de: "Deutsch", hu: "Német", ro: "Germană", en: "German" } },
  { id: "english", icon: Languages, color: "#3B82F6", grades: [1, 2, 3, 4, 5, 6, 7, 8], langOnly: "en", label: { de: "Englisch", hu: "Angol", ro: "Engleză", en: "English" } },
  { id: "magyar", icon: Languages, color: "#EC4899", grades: [1, 2, 3, 4, 5, 6, 7, 8], langOnly: "hu", label: { de: "Ungarisch", hu: "Magyar", ro: "Maghiară", en: "Hungarian" } },
  { id: "romana", icon: BookOpen, color: "#D946EF", grades: [1, 2, 3, 4, 5, 6, 7, 8], langOnly: "ro", label: { de: "Rumänisch", hu: "Román", ro: "Română", en: "Romanian" } },
  { id: "sachkunde", icon: Sparkles, color: "#10B981", grades: [1, 2, 3, 4], langOnly: "de", label: { de: "Sachkunde", hu: "Környezetismeret", ro: "Cunoașterea mediului", en: "General knowledge" } },
  { id: "biologie", icon: Leaf, color: "#16A34A", grades: [5, 6, 7, 8], label: { de: "Biologie", hu: "Biológia", ro: "Biologie", en: "Biology" } },
  { id: "physik", icon: Atom, color: "#0EA5E9", grades: [5, 6, 7, 8], label: { de: "Physik", hu: "Fizika", ro: "Fizică", en: "Physics" } },
  { id: "kemia", icon: FlaskConical, color: "#F97316", grades: [5, 6, 7, 8], label: { de: "Chemie", hu: "Kémia", ro: "Chimie", en: "Chemistry" } },
  { id: "geographie", icon: Rocket, color: "#0891B2", grades: [5, 6, 7, 8], label: { de: "Geographie", hu: "Földrajz", ro: "Geografie", en: "Geography" } },
  { id: "geschichte", icon: Castle, color: "#A855F7", grades: [5, 6, 7, 8], label: { de: "Geschichte", hu: "Történelem", ro: "Istorie", en: "History" } },
  { id: "informatika", icon: Cpu, color: "#2563EB", grades: [5, 6, 7, 8], label: { de: "Informatik", hu: "Informatika", ro: "Informatică", en: "Informatics" } },
];

const COPY: Record<Lang, { title: string; subtitle: string; grade: string; choose: string; back: string; note: string; catalogue: string }> = {
  de: { title: "Visual Lab", subtitle: "Interaktive Lernspiele", grade: "Klasse wählen", choose: "Fach wählen", back: "Zurück", note: "Ohne Karten, direkt zum Lernspiel", catalogue: "Alle Lernspiele entdecken" },
  hu: { title: "Visual Lab", subtitle: "Interaktív tanulós játékok", grade: "Válassz osztályt", choose: "Válassz tantárgyat", back: "Vissza", note: "Térképek nélkül, közvetlenül a tanulós játékokhoz", catalogue: "Az összes tanulójáték" },
  ro: { title: "Visual Lab", subtitle: "Jocuri educative interactive", grade: "Alege clasa", choose: "Alege materia", back: "Înapoi", note: "Fără hărți, direct la jocurile educative", catalogue: "Descoperă toate jocurile" },
  en: { title: "Visual Lab", subtitle: "Interactive learning games", grade: "Choose grade", choose: "Choose subject", back: "Back", note: "No maps, straight to the learning games", catalogue: "Explore all learning games" },
};

const GRADE_KEY = "plizio:visual-lab:grade";

export default function VisualLabPage() {
  const router = useRouter();
  const { lang } = useLang();
  const l: Lang = ["de", "hu", "ro", "en"].includes(lang) ? (lang as Lang) : "de";
  const t = COPY[l];
  const [grade, setGrade] = useState(5);
  const [activeSubject, setActiveSubject] = useState<VisualLabSubject | null>(null);

  useEffect(() => {
    try {
      const saved = Number(localStorage.getItem(GRADE_KEY));
      if (Number.isInteger(saved) && saved >= 1 && saved <= 8) setGrade(saved);
    } catch {}
  }, []);

  const chooseGrade = (nextGrade: number) => {
    setGrade(nextGrade);
    try { localStorage.setItem(GRADE_KEY, String(nextGrade)); } catch {}
  };

  const visibleSubjects = useMemo(
    () => SUBJECTS.filter((subject) => subject.grades.includes(grade) && (!subject.langOnly || subject.langOnly === l)),
    [grade, l],
  );

  return (
    <main className="plizio-paper relative min-h-screen overflow-hidden pb-12">
      <header className="learn-paper-header relative z-10">
        <div className="mx-auto max-w-4xl px-4 py-5">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push("/")} className="paper-icon-button shrink-0" aria-label={t.back}>
              <ArrowLeft size={19} />
            </button>
            <div className="min-w-0 flex-1">
              <p className="paper-kicker">PLIZIO / LEARNING GAMES</p>
              <h1 className="text-3xl font-black leading-tight text-[#211d18]">{t.title}</h1>
              <p className="text-sm text-[#6b6356]">{t.subtitle}</p>
            </div>
            <Microscope className="text-[#b4502a]" size={30} aria-hidden />
          </div>
          <Link href={`/${l}/visual-lab/`} className="mt-4 inline-flex min-h-11 items-center rounded-xl border border-[#d5c8b6] bg-white/70 px-4 text-sm font-black text-[#7a3f28] hover:border-[#b4502a]">
            {t.catalogue}
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-4xl px-4 py-6">
        <p className="paper-kicker mb-3">{t.grade}</p>
        <div className="mb-7 grid grid-cols-8 gap-1.5 sm:gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <button
              key={item}
              onClick={() => chooseGrade(item)}
              className="subject-grade py-2 text-base font-black transition-all sm:py-3 sm:text-lg"
              data-active={item === grade}
              aria-pressed={item === grade}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mb-3 flex items-end justify-between gap-3">
          <p className="paper-kicker">{t.choose}</p>
          <p className="text-right text-[11px] font-semibold text-[#6b6356]">{t.note}</p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
          {visibleSubjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <button
                key={subject.id}
                onClick={() => setActiveSubject(subject.id)}
                className="subject-card flex items-center gap-3 px-3 py-3 text-left transition-transform active:scale-[.98]"
              >
                <span
                  className="subject-card-icon flex h-11 w-11 shrink-0 items-center justify-center"
                  style={{ background: `${subject.color}22`, border: `1.5px solid ${subject.color}55` }}
                >
                  <Icon size={22} color={subject.color} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-base font-bold text-[#211d18]">{subject.label[l]}</span>
                  <span className="block text-xs font-medium text-[#6b6356]">{grade}. {l === "de" ? "Klasse" : l === "en" ? "grade" : l === "ro" ? "clasa" : "osztály"}</span>
                </span>
                <Sparkles size={18} color={subject.color} aria-hidden />
              </button>
            );
          })}
        </div>
      </section>

      {activeSubject && (
        <VisualLab subject={activeSubject} grade={grade} lang={l} open onClose={() => setActiveSubject(null)} />
      )}
    </main>
  );
}
