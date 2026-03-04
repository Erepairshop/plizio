import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deutsch Test Online – Kostenlos für Klasse 1–8 | PLIZIO",
  description:
    "Kostenloser Online-Deutsch-Test für Klasse 1 bis 8. Übe Grammatik, Rechtschreibung, Satzglieder, Zeitformen und Leseverstehen – direkt im Browser, ohne Anmeldung.",
  keywords: [
    "Deutsch Test online", "Deutsch kostenlos üben", "Deutsch Test Klasse 1–8",
    "Grundschule Deutsch Test", "Online Deutsch üben", "Deutsch Klassenarbeit Vorbereitung",
    "Grammatik üben", "Rechtschreibung üben", "Leseverstehen üben online",
    "Rechentest Kinder", "Deutsch Übungen kostenlos", "Deutschunterricht Grundschule",
  ],
  alternates: {
    canonical: "https://plizio.com/deutsch-test/",
    languages: {
      "de": "https://plizio.com/deutsch-test/",
      "de-AT": "https://plizio.com/deutsch-test/",
      "de-CH": "https://plizio.com/deutsch-test/",
      "x-default": "https://plizio.com/deutsch-test/",
    },
  },
  openGraph: {
    title: "Deutsch Test Online – Kostenlos für Klasse 1–8 | PLIZIO",
    description: "Übe Deutsch für jede Klasse kostenlos online. Keine Anmeldung, sofort im Browser starten.",
    url: "https://plizio.com/deutsch-test/",
    images: [{ url: "/og/deutsch-test.png", width: 1200, height: 630 }],
  },
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Deutsch Test Online – Kostenlos für Klasse 1–8",
  description: "Kostenloser Online-Deutsch-Test für Klasse 1–8. Alle Themen des deutschen Lehrplans. Ohne Anmeldung sofort starten.",
  url: "https://plizio.com/deutsch-test/",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://plizio.com/" },
      { "@type": "ListItem", position: 2, name: "Deutsch Test", item: "https://plizio.com/deutsch-test/" },
    ],
  },
};

const GRADES = [
  { n: 1, age: "6–7", summary: "Buchstaben, Silben, Wörter, einfaches Lesen & Schreiben" },
  { n: 2, age: "7–8", summary: "Rechtschreibung, Großschreibung, Satzzeichen, Wortstamm" },
  { n: 3, age: "8–9", summary: "Wortarten, Satzglieder, Zeitformen, Rechtschreibregeln" },
  { n: 4, age: "9–10", summary: "Satzgefüge, Wortfelder, Aufsatz, komplexe Grammatik" },
  { n: 5, age: "10–11", summary: "Textanalyse, Aufsatzformen, Grammatik, Zeichensetzung" },
  { n: 6, age: "11–12", summary: "Stilmittel, Kurzgeschichte, Erörterung (Einstieg)" },
  { n: 7, age: "12–13", summary: "Lyrik & Epik Analyse, Erörterung, rhetorische Mittel" },
  { n: 8, age: "13–14", summary: "Erörterung, Literaturanalyse, komplexe Grammatik" },
];

export default function DeutschTestHubPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0A1A", color: "white" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />

      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/40 mb-6">
          <a href="/" className="hover:text-white/70 transition-colors">Startseite</a>
          <span>›</span>
          <span className="text-white/70">Deutsch Test</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.25)" }}
          >
            Klasse 1–8 · Kostenlos · Kein Account
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Deutsch Test Online –{" "}
            <span style={{ color: "#00FF88" }}>Kostenlos für Klasse 1–8</span>
          </h1>
          <p className="text-white/65 text-base leading-relaxed mb-4">
            TODO: Haupt-Intro-Text für die Hub-Seite. Hier wird der Deutsch Test für Klasse 1–8 beschrieben.
          </p>
          <p className="text-white/65 text-sm leading-relaxed">
            TODO: Zweiter Absatz – für Eltern und Lehrer.
          </p>
          <a
            href="/deutschtest"
            className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-2xl font-black text-black text-sm"
            style={{ background: "linear-gradient(135deg, #00D4FF, #00FF88)" }}
          >
            ▶ Deutsch Test starten
          </a>
        </div>

        {/* Grade Grid */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-2" style={{ color: "#00D4FF" }}>
            Deutsch Test nach Klasse wählen
          </h2>
          <p className="text-white/50 text-sm mb-5">
            Wähle deine Klassenstufe für einen gezielten Test mit klassenspezifischen Aufgaben:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GRADES.map((g) => (
              <a
                key={g.n}
                href={`/deutsch-test/klasse-${g.n}/`}
                className="flex items-start gap-3 p-4 rounded-2xl group transition-all hover:scale-[1.01]"
                style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0"
                  style={{ background: "rgba(0,212,255,0.12)", color: "#00D4FF" }}
                >
                  {g.n}
                </div>
                <div>
                  <div className="font-black text-white text-sm group-hover:text-[#00D4FF] transition-colors">
                    Deutsch Test Klasse {g.n}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">Alter {g.age} · {g.summary}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Warum Deutsch Tests */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#B44DFF" }}>
            Warum Online Deutsch Tests wichtig sind
          </h2>
          <div className="space-y-4 text-white/65 text-sm leading-relaxed">
            <p>TODO: Absatz 1 – Warum regelmäßiges Üben wichtig ist.</p>
            <p>TODO: Absatz 2 – Vorteile von Online-Tests gegenüber Arbeitsblättern.</p>
            <p>TODO: Absatz 3 – Kostenlos, ohne Registrierung, für alle zugänglich.</p>
            <p>TODO: Absatz 4 – Für alle Geräte optimiert, spielerische Aufmachung.</p>
          </div>
        </section>

        {/* Themen Übersicht */}
        <section
          className="mb-10 p-5 rounded-2xl"
          style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <h2 className="text-2xl font-black mb-4" style={{ color: "#FFD700" }}>
            Welche Deutsch-Themen werden geübt?
          </h2>
          <div className="space-y-3 text-sm text-white/65 leading-relaxed">
            <p>
              <strong className="text-white">Grundschule (Klasse 1–4):</strong>{" "}
              TODO: Themenübersicht Grundschule.
            </p>
            <p>
              <strong className="text-white">Weiterführende Schule (Klasse 5–8):</strong>{" "}
              TODO: Themenübersicht Sekundarstufe.
            </p>
          </div>
        </section>

        {/* Tipps */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#00FF88" }}>
            Tipps für effektives Deutsch-Üben
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "📅", tip: "TODO: Tipp 1" },
              { icon: "🎯", tip: "TODO: Tipp 2" },
              { icon: "🔄", tip: "TODO: Tipp 3" },
              { icon: "📊", tip: "TODO: Tipp 4" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 rounded-xl"
                style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <p className="text-white/60 text-xs leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-10">
          <h2 className="text-xl font-black mb-4 text-white/80">Direkt zur Klasse springen</h2>
          <div className="flex flex-wrap gap-2">
            {GRADES.map((g) => (
              <a
                key={g.n}
                href={`/deutsch-test/klasse-${g.n}/`}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-80"
                style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.25)" }}
              >
                Klasse {g.n}
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div
          className="text-center py-6 rounded-2xl"
          style={{ background: "rgba(0,255,136,0.04)", border: "1px solid rgba(0,255,136,0.12)" }}
        >
          <p className="text-white/60 text-sm mb-3">Bereit? Starte deinen persönlichen Deutsch-Test!</p>
          <a
            href="/deutschtest"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-black text-base"
            style={{ background: "linear-gradient(135deg, #00D4FF, #00FF88)" }}
          >
            🚀 Deutsch Test starten
          </a>
          <p className="text-white/25 text-xs mt-3">Kostenlos · Kein Account · Alle Klassen · Sofort verfügbar</p>
        </div>

      </div>
    </main>
  );
}
