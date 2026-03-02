import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathe Test Online – Kostenlos Üben für Klasse 1–8 | PLIZIO",
  description:
    "Kostenloser Online-Mathe-Test für Klasse 1 bis 8. Übe Addition, Subtraktion, Einmaleins, Brüche, Gleichungen und mehr – direkt im Browser, ohne Anmeldung. Deutsch, Englisch, Ungarisch, Rumänisch.",
  keywords: [
    "Mathe Test online", "Mathe kostenlos üben", "Mathe Test Klasse 1–8",
    "Grundschule Mathe Test", "Online Mathe üben", "Mathe Klassenarbeit Vorbereitung",
    "Einmaleins üben", "Bruchrechnung üben", "Gleichungen üben online",
    "Rechentest Kinder", "Mathe Übungen kostenlos", "Mathematik Grundschule",
  ],
  alternates: {
    canonical: "https://plizio.com/mathe-test/",
    languages: {
      "de": "https://plizio.com/mathe-test/",
      "x-default": "https://plizio.com/mathe-test/",
    },
  },
  openGraph: {
    title: "Mathe Test Online – Kostenlos für Klasse 1–8 | PLIZIO",
    description: "Übe Mathe für jede Klasse kostenlos online. Keine Anmeldung, sofort im Browser starten.",
    url: "https://plizio.com/mathe-test/",
  },
};

const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Mathe Test Online – Kostenlos für Klasse 1–8",
  description: "Kostenloser Online-Mathe-Test für Klasse 1–8. Alle Themen des deutschen Lehrplans. Ohne Anmeldung sofort starten.",
  url: "https://plizio.com/mathe-test/",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://plizio.com/" },
      { "@type": "ListItem", position: 2, name: "Mathe Test", item: "https://plizio.com/mathe-test/" },
    ],
  },
};

const GRADES = [
  { n: 1, age: "6–7", summary: "Zahlen bis 20, Addition & Subtraktion, Formen" },
  { n: 2, age: "7–8", summary: "Zahlen bis 100, kleines Einmaleins, Geometrie" },
  { n: 3, age: "8–9", summary: "Einmaleins (1–10), schriftl. Rechnen, Division" },
  { n: 4, age: "9–10", summary: "Schriftl. Multiplikation, Brüche, Fläche & Umfang" },
  { n: 5, age: "10–11", summary: "Dezimalzahlen, negative Zahlen, Brüche, Koordinaten" },
  { n: 6, age: "11–12", summary: "Vollst. Bruchrechnung, Proportionen, Prozent" },
  { n: 7, age: "12–13", summary: "Lineare Gleichungen, Geometrie, Statistik" },
  { n: 8, age: "13–14", summary: "Gleichungssysteme, Pythagoras, Funktionen" },
];

export default function MatheTestHubPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0A1A", color: "white" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/40 mb-6">
          <a href="/" className="hover:text-white/70 transition-colors">Startseite</a>
          <span>›</span>
          <span className="text-white/70">Mathe Test</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.25)" }}>
            Klasse 1–8 · Kostenlos · Kein Account
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Mathe Test Online –{" "}
            <span style={{ color: "#00FF88" }}>Kostenlos für Klasse 1–8</span>
          </h1>
          <p className="text-white/65 text-base leading-relaxed mb-4">
            Willkommen beim kostenlosen Online-Mathe-Test von PLIZIO! Hier können Schülerinnen und Schüler der Klassen 1 bis 8 ihr Mathematikwissen gezielt üben und testen – ohne Anmeldung, ohne Download, direkt im Browser. Unsere Tests orientieren sich am deutschen Grundschul- und Sekundarschullehrplan und decken alle wichtigen Themen ab: von einfacher Addition in Klasse 1 bis hin zu Gleichungssystemen und dem Satz des Pythagoras in Klasse 8.
          </p>
          <p className="text-white/65 text-sm leading-relaxed">
            Eltern können mit unseren Tests schnell einschätzen, wie gut ihr Kind den aktuellen Schulstoff beherrscht. Lehrer können die Tests als ergänzendes Übungsmaterial empfehlen. Und Schüler können sich spielerisch und ohne Druck auf Klassenarbeiten vorbereiten – jederzeit und so oft sie möchten.
          </p>
          <a
            href="/mathtest"
            className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-2xl font-black text-black text-sm"
            style={{ background: "linear-gradient(135deg, #00FF88, #00D4FF)" }}
          >
            ▶ Mathe Test starten
          </a>
        </div>

        {/* Grade Grid */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-2" style={{ color: "#00D4FF" }}>
            Mathe Test nach Klasse wählen
          </h2>
          <p className="text-white/50 text-sm mb-5">Wähle deine Klassenstufe für einen gezielten Test mit klassenspezifischen Aufgaben:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GRADES.map((g) => (
              <a
                key={g.n}
                href={`/mathe-test/klasse-${g.n}/`}
                className="flex items-start gap-3 p-4 rounded-2xl group transition-all hover:scale-[1.01]"
                style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0"
                  style={{ background: "rgba(0,255,136,0.12)", color: "#00FF88" }}
                >
                  {g.n}
                </div>
                <div>
                  <div className="font-black text-white text-sm group-hover:text-[#00FF88] transition-colors">
                    Mathe Test Klasse {g.n}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">Alter {g.age} · {g.summary}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Warum Mathe Tests */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#B44DFF" }}>
            Warum Online Mathe Tests wichtig sind
          </h2>
          <div className="space-y-4 text-white/65 text-sm leading-relaxed">
            <p>
              Regelmäßiges Üben ist der Schlüssel zum Erfolg in Mathematik. Studien zeigen, dass Kinder, die täglich auch nur 10–15 Minuten mathematische Aufgaben üben, signifikant besser abschneiden als Kinder, die nur kurz vor Klassenarbeiten lernen. Online-Tests bieten dabei entscheidende Vorteile gegenüber traditionellen Arbeitsblättern: Sie sind immer verfügbar, liefern sofortiges Feedback und variieren die Aufgaben automatisch, sodass keine Langeweile entsteht.
            </p>
            <p>
              Ein weiterer wichtiger Vorteil von Online-Tests ist die Möglichkeit zur Selbsteinschätzung. Kinder können ohne Druck und ohne Konsequenzen testen, was sie bereits können und wo noch Lücken bestehen. Diese Art des formativen Assessments fördert die Metakognition – also das Nachdenken über das eigene Lernen – und macht Schülerinnen und Schüler zu aktiven Gestaltern ihres Lernprozesses.
            </p>
            <p>
              Unser Mathe-Test-Angebot bei PLIZIO ist vollständig kostenlos und ohne Registrierung nutzbar. Wir glauben, dass gute Bildungsressourcen für alle zugänglich sein sollten. Deshalb verzichten wir auf Abonnements und versteckte Kosten. Lade einfach die Seite, wähle deine Klasse und fange an zu üben.
            </p>
            <p>
              Die Tests sind für alle Geräte optimiert: Smartphone, Tablet und Computer. So kann auch auf dem Schulweg, beim Warten oder in kurzen Freistunden geübt werden. Die spielerische Aufmachung motiviert besonders jüngere Schülerinnen und Schüler und macht Mathematik zu einer Herausforderung, der man sich gerne stellt.
            </p>
          </div>
        </section>

        {/* Themen Übersicht */}
        <section className="mb-10 p-5 rounded-2xl" style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}>
          <h2 className="text-2xl font-black mb-4" style={{ color: "#FFD700" }}>
            Welche Mathe-Themen werden geübt?
          </h2>
          <div className="space-y-3 text-sm text-white/65 leading-relaxed">
            <p>
              <strong className="text-white">Grundschule (Klasse 1–4):</strong> In der Grundschule bilden die vier Grundrechenarten Addition, Subtraktion, Multiplikation und Division das Fundament. Kinder lernen das Einmaleins, schriftliche Rechenverfahren, einfache Brüche, Geometrie (Formen, Umfang, Fläche) und den Umgang mit Maßeinheiten. Unser Test deckt alle Themen des deutschen Grundschullehrplans ab.
            </p>
            <p>
              <strong className="text-white">Weiterführende Schule (Klasse 5–8):</strong> In der Sekundarstufe wird die Mathematik abstrakter und komplexer. Dezimalzahlen, rationale Zahlen, vollständige Bruchrechnung, Proportionen und Prozentrechnung in Klasse 5 und 6. Lineare Gleichungen, Funktionen, Geometrie (Winkel, Kreise, Dreiecke) und Statistik in Klasse 7 und 8. Der Höhepunkt ist der Satz des Pythagoras und erste Gleichungssysteme in Klasse 8.
            </p>
          </div>
        </section>

        {/* Tipps */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#00FF88" }}>
            Tipps für effektives Mathe-Üben
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "📅", tip: "Täglich üben statt kurz vor der Arbeit: 10 Min. täglich bringt mehr als 2 Std. einmal pro Woche." },
              { icon: "🎯", tip: "Schwache Themen zuerst: Übe gezielt die Bereiche, in denen du unsicher bist." },
              { icon: "🔄", tip: "Wiederhole bis zur Sicherheit: Starte den Test mehrfach, bis du konstant gute Ergebnisse erzielst." },
              { icon: "📊", tip: "Fehler analysieren: Nach jedem Fehler überlegen, warum die richtige Antwort stimmt." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-3 rounded-xl" style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.05)" }}>
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
                href={`/mathe-test/klasse-${g.n}/`}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-80"
                style={{ background: "rgba(180,77,255,0.12)", color: "#B44DFF", border: "1px solid rgba(180,77,255,0.25)" }}
              >
                Klasse {g.n}
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center py-6 rounded-2xl" style={{ background: "rgba(0,255,136,0.04)", border: "1px solid rgba(0,255,136,0.12)" }}>
          <p className="text-white/60 text-sm mb-3">Bereit? Starte deinen persönlichen Mathe-Test!</p>
          <a
            href="/mathtest"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-black text-base"
            style={{ background: "linear-gradient(135deg, #00FF88, #00D4FF)" }}
          >
            🚀 Mathe Test starten
          </a>
          <p className="text-white/25 text-xs mt-3">Kostenlos · Kein Account · Alle Klassen · Sofort verfügbar</p>
        </div>
      </div>
    </main>
  );
}
