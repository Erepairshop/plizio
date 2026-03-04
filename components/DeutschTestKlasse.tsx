import Link from "next/link";

// ─── GRADE DATA ────────────────────────────────────────────────────────────────
const GRADE_DATA: Record<number, {
  age: string;
  topics: { icon: string; label: string }[];
  intro: string;
  deepDive: string[];
  faqs: { q: string; a: string }[];
}> = {
  1: {
    age: "6–7",
    topics: [
      { icon: "🔤", label: "Buchstaben & Laute" },
      { icon: "📝", label: "Silben & Wörter" },
      { icon: "📖", label: "Einfaches Lesen" },
      { icon: "✏️", label: "Schreiben lernen" },
      { icon: "🗣️", label: "Sätze bilden" },
      { icon: "🔡", label: "Groß- und Kleinschreibung" },
    ],
    intro: "TODO: Intro-Text für Klasse 1",
    deepDive: [
      "TODO: Absatz 1 für Klasse 1",
      "TODO: Absatz 2 für Klasse 1",
      "TODO: Absatz 3 für Klasse 1",
      "TODO: Absatz 4 für Klasse 1",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 1?", a: "TODO: Antwort" },
      { q: "Ist der Deutsch Test für Klasse 1 kostenlos?", a: "Ja, der Test ist vollständig kostenlos. Es ist keine Anmeldung erforderlich." },
      { q: "Wie lange dauert ein Deutsch Test für Klasse 1?", a: "TODO: Antwort" },
      { q: "Für welches Alter ist der Test geeignet?", a: "TODO: Antwort" },
      { q: "Welche Themen werden geprüft?", a: "TODO: Antwort" },
      { q: "Kann mein Kind den Test mehrmals machen?", a: "Ja, der Test kann beliebig oft wiederholt werden." },
    ],
  },
  2: {
    age: "7–8",
    topics: [
      { icon: "🔤", label: "Rechtschreibung" },
      { icon: "🅰️", label: "Großschreibung" },
      { icon: "✅", label: "Satzzeichen" },
      { icon: "🌿", label: "Wortstamm" },
      { icon: "📖", label: "Leseverstehen" },
      { icon: "✏️", label: "Einfache Texte" },
    ],
    intro: "TODO: Intro-Text für Klasse 2",
    deepDive: [
      "TODO: Absatz 1 für Klasse 2",
      "TODO: Absatz 2 für Klasse 2",
      "TODO: Absatz 3 für Klasse 2",
      "TODO: Absatz 4 für Klasse 2",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 2?", a: "TODO: Antwort" },
      { q: "Ist der Deutsch Test für Klasse 2 kostenlos?", a: "Ja, vollständig kostenlos. Kein Account, kein Download." },
      { q: "Wie lange dauert ein Deutsch Test für Klasse 2?", a: "TODO: Antwort" },
      { q: "Für welches Alter ist der Test geeignet?", a: "TODO: Antwort" },
      { q: "Welche Themen werden geprüft?", a: "TODO: Antwort" },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, der Test lässt sich beliebig oft wiederholen." },
    ],
  },
  3: {
    age: "8–9",
    topics: [
      { icon: "🏷️", label: "Wortarten" },
      { icon: "🔗", label: "Satzglieder" },
      { icon: "⏳", label: "Zeitformen" },
      { icon: "📏", label: "Rechtschreibregeln" },
      { icon: "📖", label: "Leseverstehen" },
      { icon: "✍️", label: "Texte schreiben" },
    ],
    intro: "TODO: Intro-Text für Klasse 3",
    deepDive: [
      "TODO: Absatz 1 für Klasse 3",
      "TODO: Absatz 2 für Klasse 3",
      "TODO: Absatz 3 für Klasse 3",
      "TODO: Absatz 4 für Klasse 3",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 3?", a: "TODO: Antwort" },
      { q: "Ist der Test kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert der Test?", a: "TODO: Antwort" },
      { q: "Für welches Alter geeignet?", a: "TODO: Antwort" },
      { q: "Welche Themen werden geprüft?", a: "TODO: Antwort" },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft wiederholbar." },
    ],
  },
  4: {
    age: "9–10",
    topics: [
      { icon: "🔗", label: "Satzgefüge" },
      { icon: "📚", label: "Wortfelder & Synonyme" },
      { icon: "✍️", label: "Aufsatz & Textsorten" },
      { icon: "🏷️", label: "Erweiterte Grammatik" },
      { icon: "🔤", label: "Rechtschreibung" },
      { icon: "📖", label: "Leseverstehen" },
    ],
    intro: "TODO: Intro-Text für Klasse 4",
    deepDive: [
      "TODO: Absatz 1 für Klasse 4",
      "TODO: Absatz 2 für Klasse 4",
      "TODO: Absatz 3 für Klasse 4",
      "TODO: Absatz 4 für Klasse 4",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 4?", a: "TODO: Antwort" },
      { q: "Ist der Test kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert der Test?", a: "TODO: Antwort" },
      { q: "Für welches Alter geeignet?", a: "TODO: Antwort" },
      { q: "Welche Themen werden geprüft?", a: "TODO: Antwort" },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft wiederholbar." },
    ],
  },
  5: {
    age: "10–11",
    topics: [
      { icon: "📝", label: "Textanalyse" },
      { icon: "🔤", label: "Grammatik (Verben, Adj.)" },
      { icon: "✍️", label: "Aufsatzformen" },
      { icon: "📖", label: "Erzählen & Beschreiben" },
      { icon: "🔡", label: "Rechtschreibung" },
      { icon: "💬", label: "Zeichensetzung" },
    ],
    intro: "TODO: Intro-Text für Klasse 5",
    deepDive: [
      "TODO: Absatz 1 für Klasse 5",
      "TODO: Absatz 2 für Klasse 5",
      "TODO: Absatz 3 für Klasse 5",
      "TODO: Absatz 4 für Klasse 5",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 5?", a: "TODO: Antwort" },
      { q: "Ist der Test kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert der Test?", a: "TODO: Antwort" },
      { q: "Für welches Alter geeignet?", a: "TODO: Antwort" },
      { q: "Welche Themen werden geprüft?", a: "TODO: Antwort" },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft wiederholbar." },
    ],
  },
  6: {
    age: "11–12",
    topics: [
      { icon: "🎭", label: "Stilmittel & Metaphern" },
      { icon: "📖", label: "Kurzgeschichte" },
      { icon: "🔤", label: "Grammatik & Syntax" },
      { icon: "💬", label: "Zeichensetzung" },
      { icon: "✍️", label: "Erörterung (Einstieg)" },
      { icon: "📝", label: "Textinterpretation" },
    ],
    intro: "TODO: Intro-Text für Klasse 6",
    deepDive: [
      "TODO: Absatz 1 für Klasse 6",
      "TODO: Absatz 2 für Klasse 6",
      "TODO: Absatz 3 für Klasse 6",
      "TODO: Absatz 4 für Klasse 6",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 6?", a: "TODO: Antwort" },
      { q: "Ist der Test kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert der Test?", a: "TODO: Antwort" },
      { q: "Für welches Alter geeignet?", a: "TODO: Antwort" },
      { q: "Welche Themen werden geprüft?", a: "TODO: Antwort" },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft wiederholbar." },
    ],
  },
  7: {
    age: "12–13",
    topics: [
      { icon: "📜", label: "Lyrik & Epik Analyse" },
      { icon: "🔤", label: "Sprachgeschichte" },
      { icon: "✍️", label: "Erörterung" },
      { icon: "📖", label: "Textinterpretation" },
      { icon: "🏷️", label: "Komplexe Grammatik" },
      { icon: "💬", label: "Rhetorische Mittel" },
    ],
    intro: "TODO: Intro-Text für Klasse 7",
    deepDive: [
      "TODO: Absatz 1 für Klasse 7",
      "TODO: Absatz 2 für Klasse 7",
      "TODO: Absatz 3 für Klasse 7",
      "TODO: Absatz 4 für Klasse 7",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 7?", a: "TODO: Antwort" },
      { q: "Ist der Test kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert der Test?", a: "TODO: Antwort" },
      { q: "Für welches Alter geeignet?", a: "TODO: Antwort" },
      { q: "Welche Themen werden geprüft?", a: "TODO: Antwort" },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft wiederholbar." },
    ],
  },
  8: {
    age: "13–14",
    topics: [
      { icon: "📝", label: "Erörterung & Argumentation" },
      { icon: "📖", label: "Literaturanalyse" },
      { icon: "🔤", label: "Komplexe Grammatik" },
      { icon: "🎭", label: "Drama & Prosa" },
      { icon: "✍️", label: "Aufsatzformen (alle)" },
      { icon: "💬", label: "Stilanalyse" },
    ],
    intro: "TODO: Intro-Text für Klasse 8",
    deepDive: [
      "TODO: Absatz 1 für Klasse 8",
      "TODO: Absatz 2 für Klasse 8",
      "TODO: Absatz 3 für Klasse 8",
      "TODO: Absatz 4 für Klasse 8",
    ],
    faqs: [
      { q: "Was lernt man in Deutsch Klasse 8?", a: "TODO: Antwort" },
      { q: "Ist der Test kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert der Test?", a: "TODO: Antwort" },
      { q: "Für welches Alter geeignet?", a: "TODO: Antwort" },
      { q: "Welche Themen werden geprüft?", a: "TODO: Antwort" },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft wiederholbar." },
    ],
  },
};

// ─── COMPONENT ─────────────────────────────────────────────────────────────────
export default function DeutschTestKlasse({ grade }: { grade: number }) {
  const data = GRADE_DATA[grade];
  if (!data) return null;

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://plizio.com/" },
      { "@type": "ListItem", position: 2, name: "Deutsch Test", item: "https://plizio.com/deutsch-test/" },
      { "@type": "ListItem", position: 3, name: `Deutsch Test Klasse ${grade}`, item: `https://plizio.com/deutsch-test/klasse-${grade}/` },
    ],
  };

  return (
    <main className="min-h-screen" style={{ background: "#0A0A1A", color: "white" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/40 mb-6 flex-wrap">
          <a href="/" className="hover:text-white/70 transition-colors">Startseite</a>
          <span>›</span>
          <a href="/deutsch-test/" className="hover:text-white/70 transition-colors">Deutsch Test</a>
          <span>›</span>
          <span className="text-white/70">Klasse {grade}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.25)" }}
          >
            Klasse {grade} · Alter {data.age} · Kostenlos · Kein Account
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Deutsch Test Klasse {grade} –{" "}
            <span style={{ color: "#00FF88" }}>Online Üben kostenlos</span>
          </h1>
          <p className="text-white/65 text-base leading-relaxed mb-5">{data.intro}</p>
          <a
            href="/deutschtest"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-black text-sm"
            style={{ background: "linear-gradient(135deg, #00D4FF, #00FF88)" }}
          >
            ▶ Deutsch Test starten
          </a>
        </div>

        {/* Topics */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#00D4FF" }}>
            Themen in Deutsch Klasse {grade}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {data.topics.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-2xl"
                style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <span className="text-white/80 text-xs font-semibold leading-tight">{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Dive */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#B44DFF" }}>
            Deutsch Klasse {grade} – Im Detail
          </h2>
          <div className="space-y-4 text-white/65 text-sm leading-relaxed">
            {data.deepDive.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* CTA mid */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl mb-10"
          style={{ background: "rgba(0,212,255,0.05)", border: "1px solid rgba(0,212,255,0.15)" }}
        >
          <div className="flex-1">
            <p className="font-black text-white text-base mb-1">Bereit für den Test?</p>
            <p className="text-white/50 text-xs">Wähle deine Klasse direkt im Spiel – kostenlos, ohne Anmeldung.</p>
          </div>
          <a
            href="/deutschtest"
            className="flex-shrink-0 px-6 py-3 rounded-2xl font-black text-black text-sm"
            style={{ background: "linear-gradient(135deg, #00D4FF, #00FF88)" }}
          >
            ▶ Jetzt starten
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#FFD700" }}>
            Häufige Fragen – Deutsch Test Klasse {grade}
          </h2>
          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl"
                style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p className="font-bold text-white text-sm mb-1">{faq.q}</p>
                <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other grades */}
        <section className="mb-10">
          <h2 className="text-xl font-black mb-4 text-white/80">Andere Klassenstufen</h2>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].filter((g) => g !== grade).map((g) => (
              <a
                key={g}
                href={`/deutsch-test/klasse-${g}/`}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-80"
                style={{ background: "rgba(0,212,255,0.1)", color: "#00D4FF", border: "1px solid rgba(0,212,255,0.25)" }}
              >
                Klasse {g}
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div
          className="text-center py-6 rounded-2xl"
          style={{ background: "rgba(0,255,136,0.04)", border: "1px solid rgba(0,255,136,0.12)" }}
        >
          <p className="text-white/60 text-sm mb-3">Starte deinen Deutsch Test für Klasse {grade} jetzt!</p>
          <a
            href="/deutschtest"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-black text-base"
            style={{ background: "linear-gradient(135deg, #00FF88, #00D4FF)" }}
          >
            🚀 Deutsch Test starten
          </a>
          <p className="text-white/25 text-xs mt-3">Kostenlos · Kein Account · Klasse {grade} · Sofort verfügbar</p>
        </div>

      </div>
    </main>
  );
}
