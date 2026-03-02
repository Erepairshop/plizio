import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathe Klasse 3 – 10 Tipps für Eltern und Kinder | PLIZIO Blog",
  description:
    "Mathe in Klasse 3 meistern: 10 bewährte Tipps für Eltern, die ihrem Kind beim Lernen helfen möchten. Einmaleins, schriftliche Verfahren, Division und mehr.",
  alternates: { canonical: "https://plizio.com/blog/mathe-tipps-klasse-3/" },
  openGraph: {
    title: "Mathe Klasse 3 – 10 Tipps für Eltern und Kinder | PLIZIO Blog",
    description:
      "Mathe in Klasse 3 meistern: 10 bewährte Tipps für Eltern, die ihrem Kind beim Lernen helfen möchten. Einmaleins, schriftliche Verfahren, Division und mehr.",
    url: "https://plizio.com/blog/mathe-tipps-klasse-3/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was lernen Kinder in Mathe in der 3. Klasse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der 3. Klasse wird der Zahlenraum auf 1.000 erweitert. Die Kinder festigen das kleine Einmaleins (1×1 bis 10×10), lernen die schriftliche Addition und Subtraktion, werden in die Division eingeführt und üben das Lösen von Sachaufgaben. Außerdem kommen erste Themen aus Geometrie (Flächen, Umfang) und Maßeinheiten (Meter, Kilogramm, Liter) dazu.",
      },
    },
    {
      "@type": "Question",
      name: "Wie viel Zeit sollte ein Kind der 3. Klasse täglich mit Mathe verbringen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Experten empfehlen 20 bis 30 Minuten Hausaufgaben und Übungen pro Tag für Kinder der 3. Klasse. Davon sollten etwa 10 Minuten auf das Einmaleins-Training entfallen. Wichtiger als die Dauer ist die Regelmäßigkeit: Tägliche kurze Einheiten sind deutlich wirksamer als seltene, lange Lernsessions.",
      },
    },
    {
      "@type": "Question",
      name: "Mein Kind hat Angst vor Mathe – was kann ich tun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mathe-Angst entsteht oft durch negative Erlebnisse oder zu hohen Druck. Als Elternteil kannst du helfen, indem du eine stressfreie Lernumgebung schaffst, Fehler als Teil des Lernprozesses akzeptierst und Erfolge feierst. Spielerische Übungsformate (Apps, Spiele) senken die Hemmschwelle. Sprich außerdem mit der Lehrerin oder dem Lehrer, wenn die Angst anhält.",
      },
    },
    {
      "@type": "Question",
      name: "Wie erkläre ich meinem Kind die Division am besten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Division lässt sich am besten als Aufteilen erkl\u00e4ren: Wir haben 24 Gummib\u00e4rchen und wollen sie auf 4 Kinder verteilen \u2013 wie viele bekommt jedes Kind? Dieser Alltagsbezug macht den abstrakten Begriff konkret. Sp\u00e4ter kann man auch Division als umgekehrte Multiplikation einf\u00fchren: Wenn 6 \u00d7 4 = 24, dann ist 24 \u00f7 4 = 6.",
      },
    },
    {
      "@type": "Question",
      name: "Sollte ich meinem Kind in Mathe voraus sein oder nur den Schulstoff üben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In der Regel empfiehlt es sich, den aktuellen Schulstoff zu festigen, bevor man vorausgreift. Kinder, die im Unterricht den Anschluss verloren haben, profitieren mehr von gezielter Wiederholung als von Vorauslehren. Wenn das Kind jedoch gut mitkommt und Interesse zeigt, kann leichtes Vorarbeiten die Motivation steigern. Absprache mit der Lehrerin ist empfehlenswert.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://plizio.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://plizio.com/blog/" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Mathe Klasse 3 – 10 Tipps",
      item: "https://plizio.com/blog/mathe-tipps-klasse-3/",
    },
  ],
};

const styles = {
  main: { background: "#0A0A1A", color: "white", minHeight: "100vh" } as React.CSSProperties,
  container: { maxWidth: 720, margin: "0 auto", padding: "32px 16px 64px" } as React.CSSProperties,
  breadcrumb: { fontSize: 14, color: "#9999bb", marginBottom: 24 } as React.CSSProperties,
  breadcrumbLink: { color: "#9999bb", textDecoration: "none" } as React.CSSProperties,
  breadcrumbSep: { margin: "0 8px" } as React.CSSProperties,
  h1: { fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 } as React.CSSProperties,
  meta: { color: "#9999bb", fontSize: 14, marginBottom: 32 } as React.CSSProperties,
  intro: { fontSize: 18, lineHeight: 1.7, marginBottom: 32, color: "#e0e0f0" } as React.CSSProperties,
  h2: { fontSize: 22, fontWeight: 700, marginTop: 36, marginBottom: 10, color: "#00FF88" } as React.CSSProperties,
  p: { lineHeight: 1.75, marginBottom: 16, color: "#d0d0e8" } as React.CSSProperties,
  ul: { paddingLeft: 24, marginBottom: 16 } as React.CSSProperties,
  li: { lineHeight: 1.75, marginBottom: 6, color: "#d0d0e8" } as React.CSSProperties,
  tipCard: {
    background: "#12122A",
    borderRadius: 12,
    padding: "20px 24px",
    marginBottom: 20,
    border: "1px solid #1a3a2a",
    borderLeft: "4px solid #00FF88",
  } as React.CSSProperties,
  tipNumber: {
    fontSize: 13,
    fontWeight: 700,
    color: "#00FF88",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    marginBottom: 6,
  } as React.CSSProperties,
  tipTitle: { fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#e0e0ff" } as React.CSSProperties,
  tipText: { lineHeight: 1.75, color: "#b0b0cc" } as React.CSSProperties,
  highlightBox: {
    background: "#0d1a1f",
    border: "1px solid #00D4FF",
    borderRadius: 10,
    padding: "16px 20px",
    marginBottom: 16,
    color: "#b0d8e8",
  } as React.CSSProperties,
  ctaBox: {
    background: "linear-gradient(135deg, #0a1a0a, #12122A)",
    border: "2px solid #00FF88",
    borderRadius: 16,
    padding: "32px",
    textAlign: "center",
    marginTop: 48,
  } as React.CSSProperties,
  ctaTitle: { fontSize: 22, fontWeight: 700, marginBottom: 12 } as React.CSSProperties,
  ctaText: { color: "#b0b0cc", marginBottom: 24, lineHeight: 1.6 } as React.CSSProperties,
  ctaBtn: {
    display: "inline-block",
    background: "linear-gradient(90deg, #00FF88, #00D4FF)",
    color: "#0A0A1A",
    fontWeight: 700,
    fontSize: 17,
    padding: "14px 32px",
    borderRadius: 10,
    textDecoration: "none",
  } as React.CSSProperties,
  faqSection: { marginTop: 48 } as React.CSSProperties,
  faqItem: { borderBottom: "1px solid #1a1a3a", paddingBottom: 20, marginBottom: 20 } as React.CSSProperties,
  faqQ: { fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#e0e0ff" } as React.CSSProperties,
  faqA: { color: "#b0b0cc", lineHeight: 1.7 } as React.CSSProperties,
  internalLinks: { marginTop: 40, padding: "20px 24px", background: "#12122A", borderRadius: 12 } as React.CSSProperties,
  internalLink: { color: "#00FF88", textDecoration: "none", fontWeight: 600 } as React.CSSProperties,
};

export default function MatheTippsKlasse3Page() {
  return (
    <main style={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div style={styles.container}>
        {/* Breadcrumb */}
        <nav style={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/" style={styles.breadcrumbLink}>Startseite</a>
          <span style={styles.breadcrumbSep}>›</span>
          <a href="/blog/" style={styles.breadcrumbLink}>Blog</a>
          <span style={styles.breadcrumbSep}>›</span>
          <span style={{ color: "#e0e0ff" }}>Mathe Klasse 3</span>
        </nav>

        {/* Header */}
        <h1 style={styles.h1}>Mathe Klasse 3 – 10 Tipps für Eltern und Kinder</h1>
        <p style={styles.meta}>Lesedauer: ca. 8 Minuten · Klasse 3 · Eltern-Ratgeber</p>

        <p style={styles.intro}>
          Die 3. Klasse ist ein entscheidendes Jahr in der mathematischen Entwicklung von Kindern.
          Der Zahlenraum wächst auf 1.000, das kleine Einmaleins muss sitzen, und mit der schriftlichen
          Rechnung und der Division kommen ganz neue Konzepte dazu. Viele Eltern fragen sich, wie sie
          ihr Kind am besten unterstützen können, ohne selbst zur Lehrerin oder zum Lehrer zu werden.
          Diese 10 Tipps geben konkrete, praktisch erprobte Antworten.
        </p>

        {/* Tip 1 */}
        <div style={styles.tipCard}>
          <p style={styles.tipNumber}>Tipp 1</p>
          <p style={styles.tipTitle}>Eine feste Lernroutine einführen</p>
          <p style={styles.tipText}>
            Das Wichtigste zuerst: Regelmäßigkeit ist alles. Legt gemeinsam eine feste Zeit für
            Hausaufgaben und Üben fest – zum Beispiel täglich um 16 Uhr nach einer kurzen Pause.
            Das Gehirn gewöhnt sich an Routinen und ist zu bestimmten Zeiten besonders aufnahmefähig.
            Vermeide Diskussionen über „ob" geübt wird – die Frage ist nur noch „was" geübt wird.
            Eine Routine senkt den Widerstand deutlich.
          </p>
        </div>

        {/* Tip 2 */}
        <div style={styles.tipCard}>
          <p style={styles.tipNumber}>Tipp 2</p>
          <p style={styles.tipTitle}>Visuelle Hilfsmittel nutzen</p>
          <p style={styles.tipText}>
            Hänge eine bunte Einmaleins-Tabelle ans Kinderzimmerfenster oder über den Schreibtisch.
            Verwende Zahlenstrahl-Poster für den Zahlenraum bis 1.000. Visuelle Hilfsmittel im
            Sichtfeld des Kindes ermöglichen beiläufiges Lernen – das Kind nimmt Informationen auf,
            ohne aktiv lernen zu müssen. Gerade für Kinder, die visuell lernen, ist das sehr wirksam.
          </p>
        </div>

        {/* Tip 3 */}
        <div style={styles.tipCard}>
          <p style={styles.tipNumber}>Tipp 3</p>
          <p style={styles.tipTitle}>Einmaleins mit Strategie angehen</p>
          <p style={styles.tipText}>
            Nicht alle Reihen sind gleich schwer. Beginne mit der 2er, 5er und 10er Reihe – diese
            folgen offensichtlichen Mustern und bauen Selbstvertrauen auf. Dann folgen 3er und 4er.
            Die schwierigsten Reihen (6er, 7er, 8er) kommen zuletzt, aber erhalten durch tägliche
            Wiederholung die meiste Übungszeit. Erkläre deinem Kind das Kommutativgesetz: Wenn es
            4 × 7 = 28 weiß, weiß es auch automatisch 7 × 4 = 28.
          </p>
        </div>

        {/* Tip 4 */}
        <div style={styles.tipCard}>
          <p style={styles.tipNumber}>Tipp 4</p>
          <p style={styles.tipTitle}>Schriftliche Addition und Subtraktion systematisch üben</p>
          <p style={styles.tipText}>
            In Klasse 3 lernen Kinder die schriftliche Addition und Subtraktion dreistelliger Zahlen
            mit Übertrag. Der häufigste Fehler: das Vergessen des Übertrags oder das falsche
            Ausrichten der Stellen. Übe zunächst ohne Übertrag, um das Verfahren zu verstehen.
            Nutze kariertes Papier und erkläre, dass Einer, Zehner und Hunderter immer in der
            gleichen Spalte stehen müssen. Erst wenn das sitzt, führe Aufgaben mit Übertrag ein.
          </p>
        </div>

        {/* Tip 5 */}
        <div style={styles.tipCard}>
          <p style={styles.tipNumber}>Tipp 5</p>
          <p style={styles.tipTitle}>Division als Aufteilen verstehen</p>
          <p style={styles.tipText}>
            Division ist für viele Kinder das erste wirklich abstrakte mathematische Konzept.
            Mache es konkret: Teile 20 Gummibärchen auf 4 Teller auf. Teile 15 Buntstifte in
            3 gleiche Gruppen. Erst wenn das Prinzip des Aufteilens verstanden ist, führe die
            schriftliche Notation ein (20 ÷ 4 = 5). Verbinde Division immer mit dem Einmaleins:
            „Wenn du weißt, dass 5 × 4 = 20 ist, dann weißt du auch, dass 20 ÷ 4 = 5."
          </p>
        </div>

        {/* Tip 6 */}
        <div style={styles.tipCard}>
          <p style={styles.tipNumber}>Tipp 6</p>
          <p style={styles.tipTitle}>Sachaufgaben strukturiert lösen</p>
          <p style={styles.tipText}>
            Viele Kinder können rechnen, aber tun sich schwer damit, eine Textaufgabe in eine
            Rechnung zu übersetzen. Lerne gemeinsam eine einfache Vorgehensweise: (1) Was wird
            gesucht? Unterstreichen. (2) Welche Zahlen sind gegeben? Markieren. (3) Welche
            Rechenart passt? Überlegen. (4) Rechnen und Ergebnis prüfen: Ist die Antwort
            realistisch? Diese strukturierte Herangehensweise kann Kinder sehr beruhigen.
          </p>
        </div>

        {/* Tip 7 */}
        <div style={styles.tipCard}>
          <p style={styles.tipNumber}>Tipp 7</p>
          <p style={styles.tipTitle}>Greifbare Materialien verwenden</p>
          <p style={styles.tipText}>
            Lineal, Zentimeterwürfel, Münzen und Alltagsgegenstände sind wertvolle Lernhilfen.
            Lass dein Kind mit einem Lineal Längen messen, mit Münzen Beträge zusammenzählen und
            mit Würfeln Mengen darstellen. Das Haptische verankert mathematische Konzepte im
            Gedächtnis. Besonders effektiv: Kinder, die Zahlen physisch legen und anordnen können,
            verstehen den Stellenwert (Einer, Zehner, Hunderter) deutlich schneller.
          </p>
        </div>

        {/* Tip 8 */}
        <div style={styles.tipCard}>
          <p style={styles.tipNumber}>Tipp 8</p>
          <p style={styles.tipTitle}>Mathe-Angst aktiv verhindern</p>
          <p style={styles.tipText}>
            Mathe-Angst ist ein ernstes Problem, das bis ins Erwachsenenalter anhält. Druck,
            Vergleiche mit anderen Kindern und negative Kommentare über Fehler können diese Angst
            auslösen. Stattdessen: Fehler normalisieren („Fehler zeigen uns, was wir noch lernen
            dürfen"), realistische Erwartungen setzen und den Fortschritt loben, nicht nur das
            Ergebnis. Ein Kind, das sagt „Ich bin schlecht in Mathe", braucht zuerst emotionale
            Unterstützung, keine weitere Übungsaufgabe.
          </p>
        </div>

        {/* Tip 9 */}
        <div style={styles.tipCard}>
          <p style={styles.tipNumber}>Tipp 9</p>
          <p style={styles.tipTitle}>Kleine Erfolge sichtbar feiern</p>
          <p style={styles.tipText}>
            Motivation entsteht durch Erfolgserlebnisse. Führe eine „Erfolgsleiter" ein: Ein
            Plakat, auf dem das Kind jeden Tag einen Schritt nach oben klettert, wenn es geübt hat.
            Oder ein Sticker-System: 10 Sticker ergibt einen kleinen Preis (ein Buch, ein Ausflug).
            Das Wichtige: Die Belohnung sollte für das Üben gegeben werden, nicht nur für gute
            Noten. So lernst du dem Kind, den Prozess zu schätzen – und nicht nur das Ergebnis.
          </p>
        </div>

        {/* Tip 10 */}
        <div style={styles.tipCard}>
          <p style={styles.tipNumber}>Tipp 10</p>
          <p style={styles.tipTitle}>Online-Tools sinnvoll einsetzen</p>
          <p style={styles.tipText}>
            Digitale Übungstools sind kein Ersatz für das Denken, aber ein wertvolles Ergänzungstool.
            Ein gutes Mathe-Übungsprogramm gibt sofortiges Feedback, passt die Schwierigkeit an und
            macht das Üben spielerischer. Wichtig: Das Kind sollte nicht stundenlang vor dem Bildschirm
            sitzen, sondern gezielte 10- bis 15-minütige Einheiten absolvieren. Danach wieder Stift
            und Papier – denn Aufgaben schreiben festigt motorisch.
          </p>
        </div>

        {/* Bonus section */}
        <h2 style={styles.h2}>Bonus: Typische Stolpersteine in Klasse 3</h2>
        <p style={styles.p}>
          Neben den allgemeinen Tipps lohnt es sich, die häufigsten Fehlerquellen zu kennen:
        </p>
        <div style={styles.highlightBox}>
          <ul style={{ ...styles.ul, marginBottom: 0 }}>
            <li style={{ ...styles.li, color: "#b0d8e8" }}>
              <strong>Übertrag vergessen</strong> bei schriftlicher Addition – immer die Merkhilfe
              „kleines 1" über der nächsten Stelle notieren
            </li>
            <li style={{ ...styles.li, color: "#b0d8e8" }}>
              <strong>Einmaleins-Fehler bei 6×7, 7×8, 8×9</strong> – diese drei Aufgaben extra üben
            </li>
            <li style={{ ...styles.li, color: "#b0d8e8" }}>
              <strong>Rest bei Division übersehen</strong> – frühzeitig klären, dass 13 ÷ 4 = 3 Rest 1 ist
            </li>
            <li style={{ ...styles.li, color: "#b0d8e8" }}>
              <strong>Sachaufgaben nicht vollständig lesen</strong> – Unterstreichen als Pflicht einführen
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div style={styles.ctaBox}>
          <p style={styles.ctaTitle}>Klasse-3-Stoff jetzt online üben</p>
          <p style={styles.ctaText}>
            Der PLIZIO-Mathe-Test Klasse 3 bietet angepasste Übungsaufgaben direkt aus dem Lehrplan –
            Einmaleins, Addition, Subtraktion und erste Sachaufgaben. Kostenlos, ohne Anmeldung,
            direkt im Browser.
          </p>
          <a href="/mathe-test/klasse-3/" style={styles.ctaBtn}>Mathe-Test Klasse 3 starten</a>
        </div>

        {/* FAQ */}
        <div style={styles.faqSection}>
          <h2 style={{ ...styles.h2, color: "white" }}>Häufig gestellte Fragen</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={styles.faqItem}>
              <p style={styles.faqQ}>{item.name}</p>
              <p style={styles.faqA}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* Internal links */}
        <div style={styles.internalLinks}>
          <p style={{ fontWeight: 700, marginBottom: 12 }}>Weiterführende Links:</p>
          <ul style={{ ...styles.ul, marginBottom: 0 }}>
            <li style={styles.li}>
              <a href="/mathtest/" style={styles.internalLink}>PLIZIO Mathetest</a>
              {" – "}Gemischte Aufgaben für alle Klassen
            </li>
            <li style={styles.li}>
              <a href="/blog/einmaleins-lernen/" style={styles.internalLink}>Einmaleins lernen: 8 Methoden</a>
              {" – "}Detaillierter Leitfaden zum Einmaleins
            </li>
            <li style={styles.li}>
              <a href="/mathe-test/klasse-3/" style={styles.internalLink}>Mathe-Test Klasse 3</a>
              {" – "}Kostenlose Online-Übungen
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
