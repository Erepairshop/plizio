import type { Metadata } from "next";
import SachkundeTestKlasse from "@/components/SachkundeTestKlasse";

const GRADE_META: Record<number, { title: string; desc: string }> = {
  1: { title: "Sachkunde Test Klasse 1 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Sachkunde Test für Klasse 1 (6–7 Jahre): Körper, Sinne, Tiere, Jahreszeiten und Familie. Sofort im Browser üben – ohne Anmeldung!" },
  2: { title: "Sachkunde Test Klasse 2 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Sachkunde Test für Klasse 2 (7–8 Jahre): Ernährung, Lebensräume, Pflanzen, Wasser und Berufe. Jetzt online üben!" },
  3: { title: "Sachkunde Test Klasse 3 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Sachkunde Test für Klasse 3 (8–9 Jahre): Körperaufbau, Tierklassen, Botanik, Wetter und Technik. Jetzt starten!" },
  4: { title: "Sachkunde Test Klasse 4 Online – Kostenlos Üben | PLIZIO", desc: "Kostenloser Sachkunde Test für Klasse 4 (9–10 Jahre): Organe, Ökosysteme, Energie, Geographie und Klima. Online üben ohne Anmeldung!" },
};

const grade = 3;
const meta = GRADE_META[grade];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.desc,
  keywords: [
    `Sachkunde Test Klasse 3`, `Sachkunde 3. Klasse`, `Sachkunde Klasse 3 kostenlos`,
    `Sachkundetest Klasse 3`, `Sachkunde Test 3 online`, `Sachkunde Übungen Klasse 3`,
    `Körperaufbau Klasse 3`, `Tierklassen Klasse 3`, `Sachkunde Klassenarbeit 3. Klasse`,
  ],
  alternates: {
    canonical: `https://plizio.com/sachkunde-test/klasse-3/`,
    languages: {
      "de": `https://plizio.com/sachkunde-test/klasse-3/`,
      "de-AT": `https://plizio.com/sachkunde-test/klasse-3/`,
      "de-CH": `https://plizio.com/sachkunde-test/klasse-3/`,
      "x-default": `https://plizio.com/sachkunde-test/klasse-3/`,
    },
  },
  openGraph: {
    title: meta.title,
    description: meta.desc,
    url: `https://plizio.com/sachkunde-test/klasse-3/`,
    images: [{ url: "/og/sachkunde-klasse-3.png", width: 1200, height: 630 }],
  },
};

export default function KlassePage() {
  return <SachkundeTestKlasse grade={3} />;
}
