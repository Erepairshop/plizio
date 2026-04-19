"use client";

import { useLang } from "@/components/LanguageProvider";
import SimplePageLayout from "@/components/SimplePageLayout";
import { BookOpen, Users, FileText, Compass } from "lucide-react";
import type { Language } from "@/lib/language";

const CONTENT: Record<Language, {
  title: string;
  subtitle: string;
  sections: { icon: any; title: string; body: string[] }[];
}> = {
  hu: {
    title: "Tanároknak",
    subtitle: "A Plizio az osztályteremben",
    sections: [
      {
        icon: Users,
        title: "A tanári flow",
        body: [
          "A Plizio nagyszerű kiegészítője lehet a tanóráknak. Használhatja a platformot közös gyakorlásra interaktív táblán, vagy egyéni feladatként táblagépeken a diákok számára.",
          "A 'Test' mód kiválóan alkalmas gyors felmérőkre vagy ismétlésre a vizsgák előtt."
        ]
      },
      {
        icon: Compass,
        title: "Differenciálás a tanulásban",
        body: [
          "Minden diák a saját tempójában haladhat. Az 'Astro' (felfedező) mód lehetővé teszi, hogy a gyerekek játékosan gyakoroljanak, miközben a rendszer alkalmazkodik a tudásszintjükhöz.",
          "A nehezebb témákat a gyorsabban haladók önállóan is feldolgozhatják."
        ]
      },
      {
        icon: FileText,
        title: "Házi feladatok és anyagok",
        body: [
          "Bizonyos modulokból (pl. Matematika, Német) lehetőséget biztosítunk feladatlapok nyomtatására is, így offline házi feladatként is kiadható az anyag.",
          "A diákok visszajelzést kapnak az online megoldások után, így a tanárnak kevesebb időt kell a javításra fordítania."
        ]
      },
      {
        icon: BookOpen,
        title: "Saját ritmusú tanulás",
        body: [
          "A többnyelvű tartalom (magyar, német, román, angol) különösen hasznos kétnyelvű osztályokban vagy nyelvtanulás esetén. Egy adott témakört a diákok azon a nyelven sajátíthatnak el, ami számukra a leginkább megfelelő."
        ]
      }
    ]
  },
  de: {
    title: "Für Lehrer",
    subtitle: "Plizio im Klassenzimmer",
    sections: [
      {
        icon: Users,
        title: "Der Workflow im Unterricht",
        body: [
          "Plizio ist eine großartige Ergänzung für den Unterricht. Sie können die Plattform für gemeinsame Übungen am Smartboard oder als Einzelaufgaben auf Tablets für die Schüler nutzen.",
          "Der 'Test'-Modus eignet sich hervorragend für schnelle Überprüfungen oder Wiederholungen vor Prüfungen."
        ]
      },
      {
        icon: Compass,
        title: "Binnendifferenzierung",
        body: [
          "Jeder Schüler kann in seinem eigenen Tempo lernen. Der 'Astro' (Erkunder) Modus ermöglicht es den Kindern, spielerisch zu üben, während sich das System an ihr Wissensniveau anpasst.",
          "Schnellere Lerner können schwierigere Themen selbstständig bearbeiten."
        ]
      },
      {
        icon: FileText,
        title: "Hausaufgaben und Materialien",
        body: [
          "Für einige Module (z.B. Mathematik, Deutsch) bieten wir die Möglichkeit, Arbeitsblätter auszudrucken, sodass der Stoff auch als Offline-Hausaufgabe aufgegeben werden kann.",
          "Schüler erhalten nach Online-Lösungen sofortiges Feedback, wodurch Lehrer weniger Zeit für die Korrektur aufwenden müssen."
        ]
      },
      {
        icon: BookOpen,
        title: "Lernen im eigenen Rhythmus",
        body: [
          "Die mehrsprachigen Inhalte (Deutsch, Ungarisch, Rumänisch, Englisch) sind besonders in bilingualen Klassen oder beim Sprachenlernen nützlich. Schüler können ein Thema in der Sprache lernen, die für sie am besten geeignet ist."
        ]
      }
    ]
  },
  ro: {
    title: "Pentru Profesori",
    subtitle: "Plizio în sala de clasă",
    sections: [
      {
        icon: Users,
        title: "Fluxul de lucru la clasă",
        body: [
          "Plizio poate fi o completare excelentă a orelor. Puteți folosi platforma pentru exerciții comune pe tabla interactivă sau ca sarcini individuale pe tablete pentru elevi.",
          "Modul 'Test' este ideal pentru evaluări rapide sau recapitulări înainte de examene."
        ]
      },
      {
        icon: Compass,
        title: "Diferențierea învățării",
        body: [
          "Fiecare elev poate progresa în ritmul său. Modul 'Astro' (explorator) permite copiilor să exerseze prin joacă, în timp ce sistemul se adaptează nivelului lor de cunoștințe.",
          "Elevii care avansează mai repede pot parcurge teme mai dificile în mod independent."
        ]
      },
      {
        icon: FileText,
        title: "Teme și materiale",
        body: [
          "Pentru anumite module (ex. Matematică, Germană) oferim posibilitatea de a tipări fișe de lucru, astfel încât materia să poată fi dată și ca temă offline.",
          "Elevii primesc feedback imediat la rezolvările online, astfel încât profesorul petrece mai puțin timp corectând."
        ]
      },
      {
        icon: BookOpen,
        title: "Învățare în ritm propriu",
        body: [
          "Conținutul multilingv (română, germană, maghiară, engleză) este util în special în clasele bilingve sau la învățarea limbilor străine. Elevii pot însuși o anumită temă în limba care le este cea mai potrivită."
        ]
      }
    ]
  },
  en: {
    title: "For Teachers",
    subtitle: "Using Plizio in the classroom",
    sections: [
      {
        icon: Users,
        title: "Classroom Workflow",
        body: [
          "Plizio is a great addition to your lessons. You can use the platform for group exercises on an interactive whiteboard or as individual assignments on student tablets.",
          "The 'Test' mode is excellent for quick pop quizzes or review sessions before exams."
        ]
      },
      {
        icon: Compass,
        title: "Differentiated Learning",
        body: [
          "Every student can progress at their own pace. The 'Astro' (explorer) mode allows kids to practice through play, while the system adapts to their knowledge level.",
          "Fast learners can tackle more difficult topics independently."
        ]
      },
      {
        icon: FileText,
        title: "Homework and Materials",
        body: [
          "For certain modules (e.g., Math, German), we offer the option to print worksheets, so the material can also be assigned as offline homework.",
          "Students get instant feedback on online exercises, saving teachers valuable grading time."
        ]
      },
      {
        icon: BookOpen,
        title: "Self-Paced Learning",
        body: [
          "The multilingual content (English, German, Hungarian, Romanian) is especially useful in bilingual classes or for language learning. Students can master a topic in the language that suits them best."
        ]
      }
    ]
  }
};

export default function TeachersPage() {
  const { lang } = useLang();
  const c = CONTENT[lang ?? "hu"];

  return (
    <SimplePageLayout title={c.title} subtitle={c.subtitle}>
      <div className="space-y-10 mt-6">
        {c.sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div key={idx} className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Icon size={20} />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3 mt-0">{section.title}</h2>
                <div className="space-y-3">
                  {section.body.map((p, i) => (
                    <p key={i} className="text-white/80 leading-relaxed m-0">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SimplePageLayout>
  );
}
