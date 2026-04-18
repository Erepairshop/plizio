"use client";

import { useLang } from "@/components/LanguageProvider";
import SimplePageLayout from "@/components/SimplePageLayout";

type Lang = "de" | "hu" | "ro" | "en";

const CONTENT: Record<Lang, { title: string; body: { h: string; p: string }[] }> = {
  de: {
    title: "Für Lehrer",
    body: [
      { h: "Curriculum-basiert", p: "Alle Aufgaben und Tests orientieren sich an deutschen, ungarischen, rumänischen und internationalen Lehrplänen für Klasse 1–8." },
      { h: "Klassenarbeit-Modus", p: "Der Test-Modus bietet realistische Klassenarbeiten mit Zeitlimit und klassischer Bewertung (Noten 1–6 oder 1–5)." },
      { h: "Differenzierung", p: "Schwierigkeitsgrade easy / medium / hard bei jedem Thema. Geeignet für Einzelförderung und Unterricht." },
      { h: "Noch kein Lehrer-Dashboard", p: "Wir arbeiten an einer Lehrer-Ansicht mit Fortschritts-Übersicht. Interesse? Schreib uns!" },
    ],
  },
  hu: {
    title: "Tanároknak",
    body: [
      { h: "Tantervalapú", p: "Minden feladat és teszt a német, magyar, román és nemzetközi tantervek szerint készült, 1-8. osztályra." },
      { h: "Dolgozat-mód", p: "A Teszt mód valós dolgozatokat szimulál időkorláttal és klasszikus értékeléssel (1-5 osztályzat)." },
      { h: "Differenciálás", p: "Könnyű / közepes / nehéz szinten minden témához. Egyéni felzárkóztatásra és osztályban egyaránt." },
      { h: "Tanári dashboard", p: "Még nincs, de dolgozunk rajta — haladás-áttekintéssel. Érdekel? Írj nekünk!" },
    ],
  },
  ro: {
    title: "Pentru profesori",
    body: [
      { h: "Bazat pe programa școlară", p: "Toate sarcinile și testele urmează programele germană, maghiară, română și internaționale pentru clasele 1-8." },
      { h: "Mod teză", p: "Modul Test oferă teze realiste cu limită de timp și notare clasică (note 1-5)." },
      { h: "Diferențiere", p: "Nivel ușor / mediu / greu pentru fiecare temă. Potrivit pentru sprijin individual și clasă." },
      { h: "Dashboard profesor", p: "Nu există încă, dar lucrăm la el — cu prezentare generală a progresului. Interesat? Scrie-ne!" },
    ],
  },
  en: {
    title: "For Teachers",
    body: [
      { h: "Curriculum-based", p: "All tasks and tests align with German, Hungarian, Romanian and international curricula for grades 1-8." },
      { h: "Exam mode", p: "Test mode offers realistic exams with time limits and classical grading (1-5 or 1-6)." },
      { h: "Differentiation", p: "Easy / medium / hard difficulty on every topic. Suitable for individual support and classroom use." },
      { h: "Teacher dashboard", p: "Not yet available, but we're working on it — with progress overview. Interested? Contact us!" },
    ],
  },
};

export default function TeachersPage() {
  const { lang } = useLang();
  const c = CONTENT[(lang as Lang) ?? "de"];
  return (
    <SimplePageLayout title={c.title}>
      {c.body.map((item, i) => (
        <div key={i} className="mb-6">
          <h2 className="text-xl font-bold text-white mb-2">{item.h}</h2>
          <p className="text-white/75">{item.p}</p>
        </div>
      ))}
    </SimplePageLayout>
  );
}
