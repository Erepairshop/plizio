import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathe Test Vorbereitung: Der perfekte Lernplan für Klassenarbeiten | PLIZIO Blog",
  description:
    "Wie bereitest du dich optimal auf einen Mathe Test vor? Lernplan, Tipps gegen Prüfungsangst und kostenlose Online-Übungstools für Klasse 1–8.",
  alternates: { canonical: "https://plizio.com/blog/mathe-test-vorbereitung/" },
  openGraph: {
    title: "Mathe Test Vorbereitung: Der perfekte Lernplan für Klassenarbeiten | PLIZIO Blog",
    description:
      "Wie bereitest du dich optimal auf einen Mathe Test vor? Lernplan, Tipps gegen Prüfungsangst und kostenlose Online-Übungstools für Klasse 1–8.",
    url: "https://plizio.com/blog/mathe-test-vorbereitung/",
    images: [{ url: "/og/blog-mathe-vorbereitung.png", width: 1200, height: 630 }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wann sollte man mit der Vorbereitung auf einen Mathe-Test beginnen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Idealerweise beginnt die Vorbereitung eine Woche vor dem Test. In den ersten Tagen geht es um das Auffrischen des Stoffs und das Identifizieren von Wissenslücken. Ab Mitte der Woche sollte man gezielt diese Lücken schließen. Die letzten beiden Tage dienen der Wiederholung und Übung unter zeitlichen Bedingungen. Ein Tag vor dem Test sollte nur leicht wiederholt und ausreichend geschlafen werden – kein intensives Lernen mehr.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lernt man Mathe am effektivsten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mathe lernt man am effektivsten durch aktives Üben, nicht durch passives Lesen. Das bedeutet: Aufgaben lösen, Fehler analysieren und verstehen warum eine Lösung falsch war. Besonders wirksam sind Übungstests unter echten Bedingungen (Zeitdruck, keine Hilfe), das Erklären von Konzepten in eigenen Worten und das Üben mit gemischten Aufgabentypen statt nur eines Themas.",
      },
    },
    {
      "@type": "Question",
      name: "Was kann ich gegen Mathe-Prüfungsangst tun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prüfungsangst bei Mathe hat oft zwei Wurzeln: mangelnde Vorbereitung und negative Glaubenssätze. Gegen mangelnde Vorbereitung hilft strukturiertes Lernen mit echten Übungstests. Gegen negative Glaubenssätze helfen Entspannungsübungen (tiefes Atmen), das Erinnern an frühere Erfolge und die Perspektive, dass ein Test lernbar ist. Am Testtag: früh aufstehen, leichtes Frühstück, kurze Aufwärmaufgaben zur Aktivierung.",
      },
    },
    {
      "@type": "Question",
      name: "Wie gehe ich während des Mathe-Tests strategisch vor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Erst den gesamten Test überfliegen und einen Überblick verschaffen. Dann bei einfachen Aufgaben beginnen, um Punkte zu sichern und Selbstvertrauen aufzubauen. Schwierige Aufgaben markieren und später bearbeiten. Zeit im Blick behalten und für jede Aufgabe eine grobe Zeitschätzung machen. Am Ende: alle Antworten nochmals überprüfen – Flüchtigkeitsfehler kosten oft mehr Punkte als inhaltliche Fehler.",
      },
    },
    {
      "@type": "Question",
      name: "Wie viel Schlaf brauche ich vor einem Mathe-Test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ausreichend Schlaf ist eine der effektivsten Vorbereitungsmaßnahmen, die kaum Aufwand kostet. Im Schlaf konsolidiert das Gehirn die am Tag gelernten Inhalte und verankert sie im Langzeitgedächtnis. Kinder und Jugendliche benötigen 8–10 Stunden Schlaf pro Nacht. Die Nacht vor dem Test sollte man nicht bis spät lernen – besser früh schlafen gehen und ausgeruht in den Tag starten.",
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
      name: "Mathe Test Vorbereitung",
      item: "https://plizio.com/blog/mathe-test-vorbereitung/",
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
  h2: { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 12, color: "#FFD700" } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 700, marginTop: 24, marginBottom: 8, color: "#00D4FF" } as React.CSSProperties,
  p: { lineHeight: 1.75, marginBottom: 16, color: "#d0d0e8" } as React.CSSProperties,
  ul: { paddingLeft: 24, marginBottom: 16 } as React.CSSProperties,
  li: { lineHeight: 1.75, marginBottom: 6, color: "#d0d0e8" } as React.CSSProperties,
  dayCard: {
    background: "#12122A",
    borderRadius: 12,
    padding: "20px 24px",
    marginBottom: 16,
    display: "flex",
    gap: 16,
    alignItems: "flex-start",
  } as React.CSSProperties,
  dayBadge: {
    background: "#1a1a4a",
    border: "2px solid #FFD700",
    borderRadius: 8,
    padding: "6px 12px",
    fontWeight: 700,
    color: "#FFD700",
    fontSize: 13,
    whiteSpace: "nowrap" as const,
    flexShrink: 0,
    marginTop: 2,
  } as React.CSSProperties,
  dayContent: { flex: 1 } as React.CSSProperties,
  dayTitle: { fontWeight: 700, marginBottom: 4, color: "#e0e0ff", fontSize: 16 } as React.CSSProperties,
  dayText: { color: "#b0b0cc", lineHeight: 1.7, fontSize: 15 } as React.CSSProperties,
  highlightBox: {
    background: "#1a1a0a",
    border: "1px solid #FFD700",
    borderRadius: 10,
    padding: "16px 20px",
    marginBottom: 20,
    color: "#d8d8a0",
    lineHeight: 1.7,
  } as React.CSSProperties,
  warnBox: {
    background: "#1a0a0a",
    border: "1px solid #FF2D78",
    borderRadius: 10,
    padding: "16px 20px",
    marginBottom: 20,
    color: "#d8a0a8",
    lineHeight: 1.7,
  } as React.CSSProperties,
  infoBox: {
    background: "#0a1a1a",
    border: "1px solid #00D4FF",
    borderRadius: 10,
    padding: "16px 20px",
    marginBottom: 20,
    color: "#a0c8d8",
    lineHeight: 1.7,
  } as React.CSSProperties,
  ctaBox: {
    background: "linear-gradient(135deg, #1a1a0a, #12122A)",
    border: "2px solid #FFD700",
    borderRadius: 16,
    padding: "32px",
    textAlign: "center",
    marginTop: 48,
  } as React.CSSProperties,
  ctaTitle: { fontSize: 22, fontWeight: 700, marginBottom: 12 } as React.CSSProperties,
  ctaText: { color: "#b0b0cc", marginBottom: 24, lineHeight: 1.6 } as React.CSSProperties,
  ctaBtn: {
    display: "inline-block",
    background: "linear-gradient(90deg, #FFD700, #FF2D78)",
    color: "white",
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
  internalLink: { color: "#FFD700", textDecoration: "none", fontWeight: 600 } as React.CSSProperties,
  checkRow: { display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 } as React.CSSProperties,
  checkMark: { color: "#00FF88", fontWeight: 700, flexShrink: 0, marginTop: 2 } as React.CSSProperties,
};

const weekPlan = [
  {
    day: "Tag 7",
    label: "7 Tage vorher",
    title: "Überblick verschaffen",
    text: "Lies alle Themen des Tests durch, ohne zu lernen. Schreibe auf, was du bereits kannst und was noch unklar ist. Das gibt dir einen realistischen Überblick und reduziert Panik.",
  },
  {
    day: "Tag 6",
    label: "6 Tage vorher",
    title: "Theorie auffrischen",
    text: "Schau die Rechenverfahren nochmals an, die du als unklar markiert hast. Lies Schulbuch und Heft, aber vor allem: Schreibe die wichtigsten Regeln in eigenen Worten auf.",
  },
  {
    day: "Tag 5",
    label: "5 Tage vorher",
    title: "Erste Übungsaufgaben",
    text: "Bearbeite einfache Aufgaben zum neuen Stoff. Ziel: Verstehen, nicht Perfektion. Fehler sind jetzt noch hilfreich – sie zeigen dir genau, wo du weiterüben musst.",
  },
  {
    day: "Tag 4",
    label: "4 Tage vorher",
    title: "Schwierige Stellen gezielt üben",
    text: "Fokus auf die Themen, die noch unsicher sind. Ähnliche Aufgabentypen mehrfach durcharbeiten. Wenn möglich: Vergleiche mit einem Mitschüler oder erkläre deiner Familie, wie eine Aufgabe gelöst wird.",
  },
  {
    day: "Tag 3",
    label: "3 Tage vorher",
    title: "Gemischte Übungen",
    text: "Bearbeite jetzt eine Mischung aus allen Themen des Tests – so wie es in der Klassenarbeit sein wird. Kein Schummeln, kein Nachschlagen. Das simuliert den Ernstfall.",
  },
  {
    day: "Tag 2",
    label: "2 Tage vorher",
    title: "Probetest unter Zeitdruck",
    text: "Stelle dir einen Timer und bearbeite einen vollständigen Probetest in der voraussichtlichen Prüfungszeit. Danach: Fehler analysieren und nur diese nochmals üben.",
  },
  {
    day: "Tag 1",
    label: "Am Vortag",
    title: "Kurze Wiederholung + früh schlafen",
    text: "Nur 20–30 Minuten leichte Wiederholung der wichtigsten Formeln und Verfahren. Dann: aufhören, entspannen, früh schlafen gehen. Das Gehirn braucht Schlaf zum Speichern!",
  },
];

export default function MatheTestVorbereitungPage() {
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
          <span style={{ color: "#e0e0ff" }}>Mathe Test Vorbereitung</span>
        </nav>

        {/* Header */}
        <h1 style={styles.h1}>Mathe Test Vorbereitung: Der perfekte Lernplan für Klassenarbeiten</h1>
        <p style={styles.meta}>Lesedauer: ca. 9 Minuten · Klasse 1–8 · Mit 7-Tage-Lernplan</p>

        <p style={styles.intro}>
          Eine Mathe-Klassenarbeit steht bevor – und du weißt nicht, wo du anfangen sollst? Oder
          du lernst viel, aber die Note verbessert sich trotzdem nicht? Das Problem liegt oft nicht
          am Fleiß, sondern an der Lernstrategie. In diesem Artikel zeigen wir dir den optimalen
          Lernplan für die Woche vor einem Mathe-Test – Tag für Tag, konkret und umsetzbar.
        </p>

        {/* Section 1: Aktiv vs passiv */}
        <h2 style={styles.h2}>Aktives vs. passives Lernen: Der wichtigste Unterschied</h2>
        <p style={styles.p}>
          Der häufigste Fehler bei der Mathe-Vorbereitung ist passives Lernen: Aufgaben nochmals
          anschauen, Lösungswege im Heft durchlesen, Formeln auswendig lernen. Das fühlt sich
          produktiv an – ist es aber nicht. Studien zeigen, dass passives Lernen kaum zur
          Gedächtniskonsolidierung beiträgt.
        </p>
        <p style={styles.p}>
          Aktives Lernen hingegen bedeutet: Aufgaben ohne Vorlage lösen, sich selbst abfragen,
          Fehler analysieren, Konzepte erklären. Der entscheidende Unterschied ist, ob das Gehirn
          eine Information abrufen oder nur wiedererkennen muss. Beim Mathe-Test musst du abrufen
          – also trainiere auch genau das.
        </p>
        <div style={styles.highlightBox}>
          <strong>Merke:</strong> Aufgaben lösen ist immer besser als Aufgaben anschauen.
          Auch wenn du dabei Fehler machst – gerade dann lernst du am meisten.
        </div>

        {/* Section 2: 7-Tage Plan */}
        <h2 style={styles.h2}>Der 7-Tage-Lernplan: Tag für Tag</h2>
        <p style={styles.p}>
          Dieser Plan funktioniert für alle Klassen und Themen. Passe die Zeitangaben an dein Alter an:
          Grundschüler üben 15–20 Minuten pro Einheit, ältere Schüler 30–45 Minuten.
        </p>

        {weekPlan.map((item) => (
          <div key={item.day} style={styles.dayCard}>
            <div style={styles.dayBadge}>{item.label}</div>
            <div style={styles.dayContent}>
              <p style={styles.dayTitle}>{item.title}</p>
              <p style={styles.dayText}>{item.text}</p>
            </div>
          </div>
        ))}

        {/* Section 3: Schlaf */}
        <h2 style={styles.h2}>Schlaf als Lernwerkzeug: Was die Forschung sagt</h2>
        <p style={styles.p}>
          Schlaf ist keine Zeitverschwendung – er ist ein aktiver Gedächtnisprozess. Im Tiefschlaf
          werden die tagsüber erworbenen Informationen vom Hippocampus in den präfrontalen Kortex
          übertragen und dort langfristig gespeichert. Das nennt sich Gedächtniskonsolidierung.
        </p>
        <p style={styles.p}>
          Was das für die Testvorbereitung bedeutet: Wer jeden Abend eine Lerneinheit macht und
          danach schläft, lernt effizienter als jemand, der kurz vor dem Test alles auf einmal
          paukt und dabei übermüdet ist. Der Klassiker „die Nacht vor dem Test durchlernen" ist
          neurowissenschaftlich kontraproduktiv.
        </p>
        <div style={styles.infoBox}>
          <strong>Empfehlung:</strong> Grundschüler: 9–10 Stunden Schlaf · Mittelschüler: 8–9 Stunden ·
          Gymnasiasten: 8 Stunden. Besonders wichtig: Die letzte Lerneinheit sollte spätestens
          2 Stunden vor dem Schlafen enden.
        </div>

        {/* Section 4: Probetest */}
        <h2 style={styles.h2}>Übungstests: So nutzt du sie richtig</h2>
        <p style={styles.p}>
          Ein Übungstest ist das wirksamste Lernwerkzeug, das es gibt – wenn er richtig eingesetzt
          wird. Die meisten Schüler nutzen ihn falsch: Sie schauen sich die Lösungen an, bevor sie
          selbst versucht haben, die Aufgaben zu lösen.
        </p>

        <h3 style={styles.h3}>So funktioniert der ideale Übungstest:</h3>
        <div style={{ marginBottom: 20 }}>
          {[
            "Nimm dir Stift und Papier und bearbeite alle Aufgaben ohne Hilfsmittel.",
            "Stelle einen Timer – plane dieselbe Zeit ein, die du in der Klassenarbeit hast.",
            "Erst wenn du fertig bist: Lösungen mit dem Heft oder Buch vergleichen.",
            "Markiere alle falschen Aufgaben und schreibe daneben: Warum war es falsch?",
            "Löse nur die falschen Aufgaben erneut – ohne Vorlage.",
          ].map((text, i) => (
            <div key={i} style={styles.checkRow}>
              <span style={styles.checkMark}>✓</span>
              <span style={{ color: "#d0d0e8", lineHeight: 1.7 }}>{text}</span>
            </div>
          ))}
        </div>
        <p style={styles.p}>
          Online-Tools wie PLIZIO können hierbei sehr hilfreich sein: Der Mathetest gibt sofortiges
          Feedback, zeigt die Lösungswege an und passt den Schwierigkeitsgrad an. So bekommst du
          in kurzer Zeit viele Übungsaufgaben mit direkter Rückmeldung.
        </p>

        {/* Section 5: Prüfungsangst */}
        <h2 style={styles.h2}>Prüfungsangst bewältigen: Konkrete Strategien</h2>
        <p style={styles.p}>
          Prüfungsangst ist weit verbreitet und hat einen echten Effekt auf die Leistung: Stress
          blockiert den präfrontalen Kortex – also genau den Gehirnteil, der für logisches Denken
          und Problemlösung zuständig ist. Das erklärt, warum Schüler in der Prüfung Dinge vergessen,
          die sie zu Hause problemlos konnten.
        </p>

        <h3 style={styles.h3}>Vor dem Test:</h3>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Tiefes Atmen:</strong> 4 Sekunden einatmen, 4 halten, 6 ausatmen. Das aktiviert
            das parasympathische Nervensystem und senkt die Cortisol-Ausschüttung messbar.
          </li>
          <li style={styles.li}>
            <strong>Positive Selbstgespräche:</strong> „Ich habe geübt. Ich bin vorbereitet. Ich
            kann das." Diese kurzen Sätze sind kein Hokuspokus, sondern wirksame kognitive Umrahmung.
          </li>
          <li style={styles.li}>
            <strong>Körperliche Aktivität:</strong> Ein kurzer Spaziergang oder 5 Minuten Sport vor
            dem Test erhöht die Dopamin- und Serotoninausschüttung und verbessert die Konzentration.
          </li>
        </ul>

        <h3 style={styles.h3}>Am Morgen des Tests:</h3>
        <p style={styles.p}>
          Frühstücke leicht und nährstoffreich – Haferflocken, Obst und Wasser sind besser als
          schweres Essen, das die Energie in die Verdauung lenkt. Kein intensives Lernen mehr in
          der Früh – höchstens 10 Minuten Aufwärmaufgaben, um den mathematischen Denkapparat zu
          aktivieren. Vermeide Gespräche mit Mitschülern über Prüfungsangst kurz vor dem Test –
          Stress ist ansteckend.
        </p>

        <div style={styles.warnBox}>
          <strong>Was du vermeiden solltest:</strong> Kein Koffein kurz vor dem Test (erhöht Nervosität),
          kein Vergleich mit Mitschülern wie gut sie vorbereitet sind, kein Lernen kurz vor
          Unterrichtsbeginn mit völlig neuen Inhalten.
        </div>

        {/* Section 6: Während des Tests */}
        <h2 style={styles.h2}>Zeitmanagement während des Tests</h2>
        <p style={styles.p}>
          Viele Punkte gehen nicht durch mangelndes Wissen verloren, sondern durch schlechtes
          Zeitmanagement. So gehst du strategisch vor:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Erster Überblick (2 Minuten):</strong> Blättere den gesamten Test durch.
            Wie viele Aufgaben gibt es? Wo sind die einfachen, wo die schwierigen?
          </li>
          <li style={styles.li}>
            <strong>Einfache Aufgaben zuerst:</strong> Beginne mit den Aufgaben, die du sicher
            kannst. Das sichert Punkte und baut Selbstvertrauen auf.
          </li>
          <li style={styles.li}>
            <strong>Schwierige Aufgaben markieren:</strong> Wenn du bei einer Aufgabe mehr als
            2 Minuten steckenbleibst, markiere sie und mache weiter. Komme am Ende darauf zurück.
          </li>
          <li style={styles.li}>
            <strong>Rechenweg zeigen:</strong> Auch eine teilweise richtige Lösung gibt Teilpunkte.
            Schreibe immer deinen Lösungsansatz auf, auch wenn du das Endergebnis nicht kennst.
          </li>
          <li style={styles.li}>
            <strong>Überprüfung am Ende:</strong> Mindestens 5 Minuten für das Überprüfen
            reservieren. Prüfe besonders: Vorzeichen, Überträge, ob die Frage vollständig beantwortet wurde.
          </li>
        </ul>

        {/* Section 7: PLIZIO */}
        <h2 style={styles.h2}>PLIZIO für die Testvorbereitung nutzen</h2>
        <p style={styles.p}>
          Der PLIZIO-Mathetest ist ein ideales Übungswerkzeug für die Vorbereitung auf Klassenarbeiten.
          Hier sind einige konkrete Verwendungsmöglichkeiten:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Tägliches Aufwärmen:</strong> 10 Minuten Mathetest am Nachmittag als feste Routine –
            hält das mathematische Denken aktiv und deckt Wissenslücken auf.
          </li>
          <li style={styles.li}>
            <strong>Gezieltes Thementraining:</strong> Wähle den Mathetest für deine spezifische
            Klassenstufe aus – die Aufgaben sind auf den Lehrplan abgestimmt.
          </li>
          <li style={styles.li}>
            <strong>Probetest-Simulation:</strong> Mache den Test ohne Hilfe durch, notiere deine
            Ergebnisse und überprüfe dann deine Fehler.
          </li>
        </ul>

        {/* CTA */}
        <div style={styles.ctaBox}>
          <p style={styles.ctaTitle}>Jetzt mit dem Üben beginnen</p>
          <p style={styles.ctaText}>
            Bereite dich optimal auf deinen nächsten Mathe-Test vor – mit dem PLIZIO-Mathetest.
            Kostenlos, ohne Anmeldung, direkt im Browser. Wähle deinen Schwierigkeitsgrad und
            leg los.
          </p>
          <a href="/mathtest/" style={styles.ctaBtn}>PLIZIO Mathetest starten</a>
        </div>

        {/* FAQ */}
        <div style={styles.faqSection}>
          <h2 style={{ ...styles.h2, color: "white" }}>Häufig gestellte Fragen zur Testvorbereitung</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={styles.faqItem}>
              <p style={styles.faqQ}>{item.name}</p>
              <p style={styles.faqA}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* Internal links */}
        <div style={styles.internalLinks}>
          <p style={{ fontWeight: 700, marginBottom: 12 }}>Klassenspezifische Übungen und verwandte Artikel:</p>
          <ul style={{ ...styles.ul, marginBottom: 0 }}>
            <li style={styles.li}>
              <a href="/mathe-test/klasse-3/" style={styles.internalLink}>Mathe-Test Klasse 3</a>
              {" – "}Einmaleins, Addition, Subtraktion, Division
            </li>
            <li style={styles.li}>
              <a href="/mathe-test/klasse-4/" style={styles.internalLink}>Mathe-Test Klasse 4</a>
              {" – "}Bruchrechnung, schriftliche Division, Geometrie
            </li>
            <li style={styles.li}>
              <a href="/blog/einmaleins-lernen/" style={styles.internalLink}>Einmaleins lernen: 8 Methoden</a>
              {" – "}Grundlage für alle Mathe-Tests in der Grundschule
            </li>
            <li style={styles.li}>
              <a href="/blog/bruchrechnung-tipps/" style={styles.internalLink}>Bruchrechnung leicht gemacht</a>
              {" – "}Für Tests in Klasse 4 und 5
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
