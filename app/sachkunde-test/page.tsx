import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sachkunde Test Online – Kostenlos für Klasse 1–4 | PLIZIO",
  description:
    "Kostenloser Online-Sachkundetest für Klasse 1 bis 4. Übe Natur, Tiere, Körper, Technik und Gesellschaft – direkt im Browser, ohne Anmeldung.",
  keywords: [
    "Sachkunde Test online", "Sachkunde kostenlos üben", "Sachkunde Test Klasse 1–4",
    "Sachunterricht online Test", "Grundschule Sachkunde", "Online Sachkunde üben",
    "Natur Tiere Pflanzen üben", "Körper Sinne Übungen", "Sachkunde Klassenarbeit Vorbereitung",
    "Sachkundetest Kinder", "Sachkunde Übungen kostenlos", "Sachunterricht Grundschule",
  ],
  alternates: {
    canonical: "https://plizio.com/sachkunde-test/",
    languages: {
      "de": "https://plizio.com/sachkunde-test/",
      "de-AT": "https://plizio.com/sachkunde-test/",
      "de-CH": "https://plizio.com/sachkunde-test/",
      "x-default": "https://plizio.com/sachkunde-test/",
    },
  },
  openGraph: {
    title: "Sachkunde Test Online – Kostenlos für Klasse 1–4 | PLIZIO",
    description: "Übe Sachkunde für jede Klasse kostenlos online. Keine Anmeldung, sofort im Browser starten.",
    url: "https://plizio.com/sachkunde-test/",
    images: [{ url: "/og/sachkunde-test.png", width: 1200, height: 630 }],
  },
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sachkunde Test Online – Kostenlos für Klasse 1–4",
  description: "Kostenloser Online-Sachkundetest für Klasse 1–4. Alle Themen des deutschen Sachunterrichts. Ohne Anmeldung sofort starten.",
  url: "https://plizio.com/sachkunde-test/",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://plizio.com/" },
      { "@type": "ListItem", position: 2, name: "Sachkunde Test", item: "https://plizio.com/sachkunde-test/" },
    ],
  },
};

const GRADES = [
  { n: 1, age: "6–7", summary: "Körper, Sinne, Tiere, Jahreszeiten, Familie, Verkehr" },
  { n: 2, age: "7–8", summary: "Ernährung, Lebensräume, Pflanzen, Wasser, Berufe, Sicherheit" },
  { n: 3, age: "8–9", summary: "Körperaufbau, Tierklassen, Botanik, Wetter, Technik, Navigation" },
  { n: 4, age: "9–10", summary: "Organe, Ökosysteme, Energie, Geographie, Klima" },
];

export default function SachkundeTestHubPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0A1A", color: "white" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />

      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/40 mb-6">
          <a href="/" className="hover:text-white/70 transition-colors">Startseite</a>
          <span>›</span>
          <span className="text-white/70">Sachkunde Test</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: "rgba(76,175,80,0.1)", color: "#4CAF50", border: "1px solid rgba(76,175,80,0.25)" }}
          >
            Klasse 1–4 · Kostenlos · Kein Account
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Sachkunde Test Online –{" "}
            <span style={{ color: "#4CAF50" }}>Kostenlos für Klasse 1–4</span>
          </h1>
          <p className="text-white/65 text-base leading-relaxed mb-4">
            Sachkunde ist das Fundament für das Verständnis der Welt! Unser kostenloser Online-Sachkundetest begleitet Schülerinnen und Schüler vom 1. bis 4. Schuljahr. Mit interaktiven Aufgaben zu Natur, Technik, Gesellschaft und Körper lernen Kinder spielerisch die Inhalte des Sachunterrichts und festigen ihr Wissen. Keine nervige Anmeldung – einfach direkt durchstarten!
          </p>
          <p className="text-white/65 text-sm leading-relaxed">
            Eltern und Lehrkräfte schätzen unsere Tests, weil sie Kindern zeigen, wo noch Übungsbedarf besteht, und dabei völlig kostenlos bleiben. Perfekt zur Vorbereitung auf Klassenarbeiten oder zum regelmäßigen Trainieren zwischen den Schulstunden.
          </p>
          <a
            href="/sachkundetest"
            className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-2xl font-black text-black text-sm"
            style={{ background: "linear-gradient(135deg, #4CAF50, #66BB6A)" }}
          >
            ▶ Sachkunde Test starten
          </a>
        </div>

        {/* Grade Grid */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-2" style={{ color: "#4CAF50" }}>
            Sachkunde Test nach Klasse wählen
          </h2>
          <p className="text-white/50 text-sm mb-5">
            Wähle deine Klassenstufe für einen gezielten Test mit klassenspezifischen Aufgaben:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GRADES.map((g) => (
              <a
                key={g.n}
                href={`/sachkunde-test/klasse-${g.n}/`}
                className="flex items-start gap-3 p-4 rounded-2xl group transition-all hover:scale-[1.01]"
                style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0"
                  style={{ background: "rgba(76,175,80,0.12)", color: "#4CAF50" }}
                >
                  {g.n}
                </div>
                <div>
                  <div className="font-black text-white text-sm group-hover:text-[#4CAF50] transition-colors">
                    Sachkunde Test Klasse {g.n}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">Alter {g.age} · {g.summary}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Warum Sachkunde Tests */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#B44DFF" }}>
            Warum Online Sachkunde Tests wichtig sind
          </h2>
          <div className="space-y-4 text-white/65 text-sm leading-relaxed">
            <p>
              Sachkunde schafft die Grundlagen für naturwissenschaftliches Denken und Handeln. Durch regelmäßiges Üben entwickeln Kinder ein tieferes Verständnis für ihre Umwelt – von Pflanzen und Tieren bis hin zu sozialen Zusammenhängen und Technik.
            </p>
            <p>
              Online-Tests bieten gegenüber klassischen Arbeitsblättern enorme Vorteile: Sofortiges Feedback, variierende Aufgaben bei jedem Test, und eine spielerische Aufmachung, die Kinder zum Lernen motiviert. Statt monotones Ausfüllen von Papierblättern gibt es bei PLIZIO interaktive Herausforderungen!
            </p>
            <p>
              Völlig kostenlos und ohne Registrierung – Schüler können direkt loslegen. Lehrkräfte nutzen unsere Tests gerne zur Differenzierung und Diagnose im Unterricht, Eltern zur Unterstützung zuhause.
            </p>
            <p>
              Optimiert für alle Geräte: Ob Tablet, Smartphone oder Computer – der Sachkunde-Test passt sich an. Die moderne Spielweise mit Punkten, Karten und Streaks macht Lernen zum Vergnügen und holt Kinder genau da ab, wo sie Spaß am digitalen Lernen haben.
            </p>
          </div>
        </section>

        {/* Themen Übersicht */}
        <section
          className="mb-10 p-5 rounded-2xl"
          style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <h2 className="text-2xl font-black mb-4" style={{ color: "#FFD700" }}>
            Welche Sachkunde-Themen werden geübt?
          </h2>
          <div className="space-y-3 text-sm text-white/65 leading-relaxed">
            <p>
              <strong className="text-white">Klasse 1:</strong> Mein Körper und meine Sinne · Tiere und Tierfamilien · Jahreszeiten und Wetter · Meine Familie und Zuhause · Verkehrsmittel und Sicherheit
            </p>
            <p>
              <strong className="text-white">Klasse 2:</strong> Gesunde Ernährung · Pflanzen und Gärten · Lebensräume von Tieren · Das Element Wasser · Verschiedene Berufe · Verkehrserziehung und Sicherheit
            </p>
            <p>
              <strong className="text-white">Klasse 3:</strong> Aufbau des Körpers und Organe · Tierklassen und Lebensräume · Pflanzen bestimmen und züchten · Wetter und Wetterphänomene · Einfache Maschinen und Technik · Orientierung mit Karten
            </p>
            <p>
              <strong className="text-white">Klasse 4:</strong> Organsysteme und Gesundheit · Ökosysteme und Naturschutz · Energie und Energiequellen · Geographie: Kontinente, Länder, Bundesländer · Klima und Klimawandel
            </p>
          </div>
        </section>

        {/* Tipps */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#00FF88" }}>
            Tipps für effektives Sachkunde-Üben
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "📅", tip: "Regelmäßig üben: 15 Minuten täglich sind besser als eine lange Lerneinheit pro Woche. Nutze kleine Pausen in der Schule!" },
              { icon: "🎯", tip: "Gezielt trainieren: Konzentriere dich auf deine Klassenstufe und wiederhole Themen, die dir schwerer fallen." },
              { icon: "🔄", tip: "Wiederholen, wiederholen, wiederholen: Sachkunde-Wissen verfestigt sich durch wiederholtes Üben. Starte mehrfach den gleichen Test!" },
              { icon: "📊", tip: "Fortschritt verfolgen: Sammle Karten und sehe wie du dich von Test zu Test verbesserst. Höhere Streaks = bessere Rarity!" },
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
                href={`/sachkunde-test/klasse-${g.n}/`}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-80"
                style={{ background: "rgba(76,175,80,0.1)", color: "#4CAF50", border: "1px solid rgba(76,175,80,0.25)" }}
              >
                Klasse {g.n}
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div
          className="text-center py-6 rounded-2xl"
          style={{ background: "rgba(76,175,80,0.04)", border: "1px solid rgba(76,175,80,0.12)" }}
        >
          <p className="text-white/60 text-sm mb-3">Bereit? Starte deinen persönlichen Sachkunde-Test!</p>
          <a
            href="/sachkundetest"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-black text-base"
            style={{ background: "linear-gradient(135deg, #4CAF50, #66BB6A)" }}
          >
            🚀 Sachkunde Test starten
          </a>
          <p className="text-white/25 text-xs mt-3">Kostenlos · Kein Account · Klasse 1–4 · Sofort verfügbar</p>
        </div>

      </div>
    </main>
  );
}
