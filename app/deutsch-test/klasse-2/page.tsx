import type { Metadata } from "next";
import DeutschTestKlasse from "@/components/DeutschTestKlasse";

const GRADE_META: Record<number, { title: string; desc: string }> = {
  1: { title: "Deutsch Test Klasse 1 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Deutsch Test für Klasse 1 (6–7 Jahre): Buchstaben, Silben, Wörter, einfaches Lesen und Schreiben. Sofort im Browser üben – ohne Anmeldung!" },
  2: { title: "Deutsch Test Klasse 2 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Deutsch Test für Klasse 2 (7–8 Jahre): Rechtschreibung, Großschreibung, Satzzeichen und Wortstamm. Jetzt online üben – kein Download!" },
  3: { title: "Deutsch Test Klasse 3 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Deutsch Test für Klasse 3 (8–9 Jahre): Wortarten, Satzglieder, Zeitformen und Rechtschreibregeln. Jetzt starten!" },
  4: { title: "Deutsch Test Klasse 4 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Deutsch Test für Klasse 4 (9–10 Jahre): Satzgefüge, Wortfelder, Aufsatz und komplexe Grammatik. Online üben ohne Anmeldung!" },
  5: { title: "Deutsch Test Klasse 5 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Deutsch Test für Klasse 5 (10–11 Jahre): Textanalyse, Aufsatzformen, Grammatik und Zeichensetzung. Jetzt gratis im Browser üben!" },
  6: { title: "Deutsch Test Klasse 6 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Deutsch Test für Klasse 6 (11–12 Jahre): Stilmittel, Kurzgeschichte, Erörterung und Grammatik. Sofort online starten!" },
  7: { title: "Deutsch Test Klasse 7 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Deutsch Test für Klasse 7 (12–13 Jahre): Lyrik & Epik Analyse, Erörterung und rhetorische Mittel. Kostenlos online üben!" },
  8: { title: "Deutsch Test Klasse 8 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Deutsch Test für Klasse 8 (13–14 Jahre): Erörterung, Literaturanalyse und komplexe Grammatik. Jetzt gratis starten!" },
};

const grade = 2;
const meta = GRADE_META[grade];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.desc,
  keywords: [
    `Deutsch Test Klasse 2`, `Deutsch 2. Klasse`, `Deutsch Klasse 2 kostenlos`,
    `Deutschtest Klasse 2`, `Deutsch Test 2 online`, `Deutsch Übungen Klasse 2`,
    `Grammatik Klasse 2`, `Deutsch Klassenarbeit 2. Klasse`,
  ],
  alternates: {
    canonical: `https://plizio.com/deutsch-test/klasse-2/`,
    languages: {
      "de": `https://plizio.com/deutsch-test/klasse-2/`,
      "de-AT": `https://plizio.com/deutsch-test/klasse-2/`,
      "de-CH": `https://plizio.com/deutsch-test/klasse-2/`,
      "x-default": `https://plizio.com/deutsch-test/klasse-2/`,
    },
  },
  openGraph: {
    title: meta.title,
    description: meta.desc,
    url: `https://plizio.com/deutsch-test/klasse-2/`,
    images: [{ url: "/og/deutsch-klasse-2.png", width: 1200, height: 630 }],
  },
};

export default function KlassePage() {
  return <DeutschTestKlasse grade={2} />;
}
