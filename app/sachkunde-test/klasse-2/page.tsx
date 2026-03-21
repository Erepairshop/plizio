import type { Metadata } from "next";
import SachkundeTestKlasse from "@/components/SachkundeTestKlasse";

const GRADE_META: Record<number, { title: string; desc: string }> = {
  1: { title: "Sachkunde Test Klasse 1 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Sachkunde Test für Klasse 1 (6–7 Jahre): Körper, Sinne, Tiere, Jahreszeiten und Familie. Sofort im Browser üben – ohne Anmeldung!" },
  2: { title: "Sachkunde Test Klasse 2 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Sachkunde Test für Klasse 2 (7–8 Jahre): Ernährung, Lebensräume, Pflanzen, Wasser und Berufe. Jetzt online üben!" },
  3: { title: "Sachkunde Test Klasse 3 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Sachkunde Test für Klasse 3 (8–9 Jahre): Körperaufbau, Tierklassen, Botanik, Wetter und Technik. Jetzt starten!" },
  4: { title: "Sachkunde Test Klasse 4 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Sachkunde Test für Klasse 4 (9–10 Jahre): Organe, Ökosysteme, Energie, Geographie und Klima. Online üben ohne Anmeldung!" },
};

const grade = 2;
const meta = GRADE_META[grade];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.desc,
  keywords: [
    `Sachkunde Test Klasse 2`, `Sachkunde 2. Klasse`, `Sachkunde Klasse 2 kostenlos`,
    `Sachkundetest Klasse 2`, `Sachkunde Test 2 online`, `Sachkunde Übungen Klasse 2`,
    `Ernährung Klasse 2`, `Lebensräume Klasse 2`, `Sachkunde Klassenarbeit 2. Klasse`,
  ],
  alternates: {
    canonical: `https://plizio.com/sachkunde-test/klasse-2/`,
    languages: {
      "de": `https://plizio.com/sachkunde-test/klasse-2/`,
      "de-AT": `https://plizio.com/sachkunde-test/klasse-2/`,
      "de-CH": `https://plizio.com/sachkunde-test/klasse-2/`,
      "x-default": `https://plizio.com/sachkunde-test/klasse-2/`,
    },
  },
  openGraph: {
    title: meta.title,
    description: meta.desc,
    url: `https://plizio.com/sachkunde-test/klasse-2/`,
    images: [{ url: "/og/sachkunde-klasse-2.png", width: 1200, height: 630 }],
  },
};

export default function KlassePage() {
  return <SachkundeTestKlasse grade={2} />;
}
