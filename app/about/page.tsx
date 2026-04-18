"use client";

import { useLang } from "@/components/LanguageProvider";
import SimplePageLayout from "@/components/SimplePageLayout";

type Lang = "de" | "hu" | "ro" | "en";

const CONTENT: Record<Lang, { title: string; subtitle: string; body: string[] }> = {
  de: {
    title: "Über uns",
    subtitle: "Plizio — Lernen durch Spiel",
    body: [
      "Plizio ist eine mehrsprachige Lernplattform für Kinder von 6 bis 14 Jahren.",
      "Wir glauben, dass Lernen Spaß machen soll. Unsere Spiele und Tests decken alle Hauptfächer ab: Mathematik, Deutsch, Englisch, Ungarisch, Rumänisch, Sachkunde, Biologie, Chemie, Physik, Geographie, Geschichte und Informatik.",
      "Jedes Kind kann in seiner eigenen Sprache lernen — und jederzeit wechseln.",
      "Entwickelt von einer Familie, für Familien.",
    ],
  },
  hu: {
    title: "Rólunk",
    subtitle: "Plizio — Tanulás játékkal",
    body: [
      "A Plizio egy többnyelvű oktatási platform 6–14 éves gyerekek számára.",
      "Hiszünk abban, hogy a tanulás szórakoztató is lehet. Játékaink és teszteink minden fő tantárgyat lefednek: matematika, német, angol, magyar, román, környezetismeret, biológia, kémia, fizika, földrajz, történelem és informatika.",
      "Minden gyerek a saját anyanyelvén tanulhat — és bármikor válthat nyelvet.",
      "Egy család fejleszti, családoknak.",
    ],
  },
  ro: {
    title: "Despre noi",
    subtitle: "Plizio — Învățare prin joc",
    body: [
      "Plizio este o platformă educațională multilingvă pentru copii de la 6 la 14 ani.",
      "Credem că învățarea poate fi distractivă. Jocurile și testele noastre acoperă toate materiile principale: matematică, germană, engleză, maghiară, română, cunoașterea mediului, biologie, chimie, fizică, geografie, istorie și informatică.",
      "Fiecare copil poate învăța în limba sa — și să schimbe oricând.",
      "Dezvoltat de o familie, pentru familii.",
    ],
  },
  en: {
    title: "About",
    subtitle: "Plizio — Learning through play",
    body: [
      "Plizio is a multilingual learning platform for children ages 6 to 14.",
      "We believe learning can be fun. Our games and tests cover all core subjects: math, German, English, Hungarian, Romanian, general knowledge, biology, chemistry, physics, geography, history and informatics.",
      "Every child can learn in their own language — and switch anytime.",
      "Built by a family, for families.",
    ],
  },
};

export default function AboutPage() {
  const { lang } = useLang();
  const c = CONTENT[(lang as Lang) ?? "de"];
  return (
    <SimplePageLayout title={c.title} subtitle={c.subtitle}>
      {c.body.map((p, i) => (
        <p key={i} className="mb-4 text-base">{p}</p>
      ))}
    </SimplePageLayout>
  );
}
