import type { Metadata } from "next";
import MatheTestKlasse from "@/components/MatheTestKlasse";

const GRADE_META: Record<number, { title: string; desc: string }> = {
  1: { title: "Mathe Test Klasse 1 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Mathe Test für Klasse 1 (6–7 Jahre): Zahlen bis 20, Addition, Subtraktion, Formen und Mengen. Sofort im Browser üben – ohne Anmeldung!" },
  2: { title: "Mathe Test Klasse 2 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Mathe Test für Klasse 2 (7–8 Jahre): Zahlen bis 100, Einmaleins (2,5,10), Geometrie und Längen. Jetzt online üben – kein Download!" },
  3: { title: "Mathe Test Klasse 3 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Mathe Test für Klasse 3 (8–9 Jahre): Vollständiges Einmaleins, schriftliche Rechenverfahren, Division und Maßeinheiten. Jetzt starten!" },
  4: { title: "Mathe Test Klasse 4 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Mathe Test für Klasse 4 (9–10 Jahre): Schriftliche Multiplikation, Division, Brüche und Flächenberechnung. Online üben ohne Anmeldung!" },
  5: { title: "Mathe Test Klasse 5 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Mathe Test für Klasse 5 (10–11 Jahre): Dezimalzahlen, negative Zahlen, Brüche und Koordinatensystem. Jetzt gratis im Browser üben!" },
  6: { title: "Mathe Test Klasse 6 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Mathe Test für Klasse 6 (11–12 Jahre): Bruchrechnung, Proportionen, Dreisatz und Prozentrechnung. Sofort online starten!" },
  7: { title: "Mathe Test Klasse 7 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Mathe Test für Klasse 7 (12–13 Jahre): Lineare Gleichungen, Prozentrechnung, Geometrie und Statistik. Kostenlos online üben!" },
  8: { title: "Mathe Test Klasse 8 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Mathe Test für Klasse 8 (13–14 Jahre): Gleichungssysteme, Pythagoras, Wahrscheinlichkeit und Funktionen. Jetzt gratis starten!" },
};

const grade = 2;
const meta = GRADE_META[grade];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.desc,
  keywords: [
    `Mathe Test Klasse 2`, `Mathe 2. Klasse`, `Mathe Klasse 2 kostenlos`,
    `Mathematik Klasse 2`, `Mathe Test 2 online`, `Mathe Übungen Klasse 2`,
    `Rechentest Klasse 2`, `Mathe Klassenarbeit 2. Klasse`,
  ],
  alternates: {
    canonical: `https://plizio.com/mathe-test/klasse-2/`,
    languages: {
      "de": `https://plizio.com/mathe-test/klasse-2/`,
      "de-AT": `https://plizio.com/mathe-test/klasse-2/`,
      "de-CH": `https://plizio.com/mathe-test/klasse-2/`,
      "x-default": `https://plizio.com/mathe-test/klasse-2/`,
    },
  },
  openGraph: {
    title: meta.title,
    description: meta.desc,
    url: `https://plizio.com/mathe-test/klasse-2/`,
    images: [{ url: "/og/mathe-klasse-2.png", width: 1200, height: 630 }],
  },
};

export default function KlassePage() {
  return <MatheTestKlasse grade={2} />;
}
