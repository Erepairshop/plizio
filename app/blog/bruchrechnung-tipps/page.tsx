import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bruchrechnung leicht gemacht – Tipps für Klasse 4 & 5 | PLIZIO Blog",
  description:
    "Brüche verstehen und rechnen leicht erklärt. Schritt-für-Schritt Tipps für Schüler der Klasse 4 und 5 mit Alltagsbeispielen und Übungsaufgaben.",
  alternates: { canonical: "https://plizio.com/blog/bruchrechnung-tipps/" },
  openGraph: {
    title: "Bruchrechnung leicht gemacht – Tipps für Klasse 4 & 5 | PLIZIO Blog",
    description:
      "Brüche verstehen und rechnen leicht erklärt. Schritt-für-Schritt Tipps für Schüler der Klasse 4 und 5 mit Alltagsbeispielen und Übungsaufgaben.",
    url: "https://plizio.com/blog/bruchrechnung-tipps/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was ist ein Bruch in der Mathematik?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein Bruch beschreibt einen Teil eines Ganzen. Er besteht aus zwei Zahlen, die durch einen Bruchstrich getrennt sind: der Zähler (oben) gibt an, wie viele Teile genommen werden, und der Nenner (unten) gibt an, in wie viele gleiche Teile das Ganze aufgeteilt wurde. Zum Beispiel bedeutet 3/4, dass ein Ganzes in 4 gleiche Teile aufgeteilt wurde und davon 3 Teile genommen werden.",
      },
    },
    {
      "@type": "Question",
      name: "Wie addiert man Brüche mit unterschiedlichem Nenner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Um Brüche mit unterschiedlichem Nenner zu addieren, muss zuerst ein gemeinsamer Nenner gefunden werden – der sogenannte Hauptnenner (kgV). Beispiel: 1/3 + 1/4. Der kleinste gemeinsame Nenner von 3 und 4 ist 12. Daher: 1/3 = 4/12 und 1/4 = 3/12. Jetzt können die Zähler addiert werden: 4/12 + 3/12 = 7/12. Wichtig: Nur die Zähler addieren, der Nenner bleibt gleich!",
      },
    },
    {
      "@type": "Question",
      name: "Was bedeutet einen Bruch kürzen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Einen Bruch kürzen bedeutet, Zähler und Nenner durch die gleiche Zahl zu dividieren, um den Bruch in seiner einfachsten Form darzustellen. Beispiel: 6/8 kann durch 2 gekürzt werden: 6÷2=3, 8÷2=4, also 6/8 = 3/4. Der Wert des Bruchs bleibt gleich, er sieht nur einfacher aus. Am weitesten kürzen kann man, wenn man durch den größten gemeinsamen Teiler (ggT) von Zähler und Nenner dividiert.",
      },
    },
    {
      "@type": "Question",
      name: "Wo begegnen uns Brüche im Alltag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brüche begegnen uns überall: In Rezepten (3/4 Tasse Mehl), beim Einkaufen (halber Preis = 1/2), bei der Uhrzeit (Viertel nach drei = 1/4 Stunde nach drei), beim Sport (eine halbe Stunde Training), bei Noten (Note 2,5 = zwischen 2 und 3), bei Rabatten (20% Rabatt = 1/5 günstiger) und bei Maßen (1/2 Meter, 3/4 Liter). Wer Brüche versteht, kann den Alltag viel besser mathematisch interpretieren.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen einem echten und unechten Bruch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bei einem echten Bruch ist der Zähler kleiner als der Nenner, der Wert liegt also zwischen 0 und 1 (z.B. 3/4 oder 2/5). Bei einem unechten Bruch ist der Zähler größer als oder gleich dem Nenner, der Wert ist also mindestens 1 (z.B. 5/3 oder 7/4). Unechte Brüche können in gemischte Zahlen umgewandelt werden: 5/3 = 1 und 2/3 (lies: ein und zwei Drittel).",
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
      name: "Bruchrechnung leicht gemacht",
      item: "https://plizio.com/blog/bruchrechnung-tipps/",
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
  h2: { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 12, color: "#FF2D78" } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 700, marginTop: 24, marginBottom: 8, color: "#FFD700" } as React.CSSProperties,
  p: { lineHeight: 1.75, marginBottom: 16, color: "#d0d0e8" } as React.CSSProperties,
  ul: { paddingLeft: 24, marginBottom: 16 } as React.CSSProperties,
  li: { lineHeight: 1.75, marginBottom: 6, color: "#d0d0e8" } as React.CSSProperties,
  mathBox: {
    background: "#12122A",
    border: "1px solid #2a1a3a",
    borderLeft: "4px solid #FFD700",
    borderRadius: 10,
    padding: "16px 20px",
    marginBottom: 20,
    fontFamily: "monospace",
    fontSize: 16,
  } as React.CSSProperties,
  exampleBox: {
    background: "#1a1a2a",
    borderRadius: 10,
    padding: "20px 24px",
    marginBottom: 20,
    border: "1px solid #2a2a4a",
  } as React.CSSProperties,
  exampleTitle: { fontWeight: 700, color: "#FF2D78", marginBottom: 10, fontSize: 15 } as React.CSSProperties,
  highlightBox: {
    background: "#1a0d1a",
    border: "1px solid #FF2D78",
    borderRadius: 10,
    padding: "16px 20px",
    marginBottom: 20,
    color: "#e0b0cc",
    lineHeight: 1.7,
  } as React.CSSProperties,
  ctaBox: {
    background: "linear-gradient(135deg, #1a0a1a, #12122A)",
    border: "2px solid #FF2D78",
    borderRadius: 16,
    padding: "32px",
    textAlign: "center",
    marginTop: 48,
  } as React.CSSProperties,
  ctaTitle: { fontSize: 22, fontWeight: 700, marginBottom: 12 } as React.CSSProperties,
  ctaText: { color: "#b0b0cc", marginBottom: 24, lineHeight: 1.6 } as React.CSSProperties,
  ctaButtons: { display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" as const } as React.CSSProperties,
  ctaBtn: {
    display: "inline-block",
    background: "linear-gradient(90deg, #FF2D78, #B44DFF)",
    color: "white",
    fontWeight: 700,
    fontSize: 16,
    padding: "12px 24px",
    borderRadius: 10,
    textDecoration: "none",
  } as React.CSSProperties,
  ctaBtnSecondary: {
    display: "inline-block",
    background: "transparent",
    border: "2px solid #FF2D78",
    color: "#FF2D78",
    fontWeight: 700,
    fontSize: 16,
    padding: "12px 24px",
    borderRadius: 10,
    textDecoration: "none",
  } as React.CSSProperties,
  faqSection: { marginTop: 48 } as React.CSSProperties,
  faqItem: { borderBottom: "1px solid #1a1a3a", paddingBottom: 20, marginBottom: 20 } as React.CSSProperties,
  faqQ: { fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#e0e0ff" } as React.CSSProperties,
  faqA: { color: "#b0b0cc", lineHeight: 1.7 } as React.CSSProperties,
  internalLinks: { marginTop: 40, padding: "20px 24px", background: "#12122A", borderRadius: 12 } as React.CSSProperties,
  internalLink: { color: "#FF2D78", textDecoration: "none", fontWeight: 600 } as React.CSSProperties,
};

export default function BruchrechnungTippsPage() {
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
          <span style={{ color: "#e0e0ff" }}>Bruchrechnung leicht gemacht</span>
        </nav>

        {/* Header */}
        <h1 style={styles.h1}>Bruchrechnung leicht gemacht – Tipps für Klasse 4 &amp; 5</h1>
        <p style={styles.meta}>Lesedauer: ca. 8 Minuten · Klasse 4 &amp; 5 · Mit Beispielaufgaben</p>

        <p style={styles.intro}>
          „Die Pizza-Mathematik" – so nennen viele Kinder die Bruchrechnung, wenn sie sie zum ersten
          Mal verstehen. Und tatsächlich: Brüche sind viel greifbarer, als sie auf dem ersten Blick
          wirken. In diesem Artikel erklären wir, was ein Bruch ist, wie man Brüche visualisiert,
          kürzt, erweitert und addiert – mit echten Rechenbeispielen und Alltagsbezügen.
        </p>

        {/* Section 1: Was ist ein Bruch */}
        <h2 style={styles.h2}>Was ist ein Bruch? Zähler und Nenner verstehen</h2>
        <p style={styles.p}>
          Stell dir vor, du hast eine Pizza und schneidest sie in 4 gleich große Stücke. Du isst
          3 davon. Wie viel hast du gegessen? Drei von vier Stücken – als Bruch geschrieben: 3/4.
          Das ist alles. Ein Bruch beschreibt, wie viele Teile (Zähler = oben) von einer bestimmten
          Anzahl gleich großer Teile (Nenner = unten) genommen werden.
        </p>
        <div style={styles.mathBox}>
          <div style={{ color: "#FFD700", marginBottom: 4 }}>Aufbau eines Bruchs:</div>
          <div>  3  ← Zähler (wie viele Teile nehme ich?)</div>
          <div>  ─  ← Bruchstrich (bedeutet „von" oder „geteilt durch")</div>
          <div>  4  ← Nenner (in wie viele gleiche Teile ist das Ganze aufgeteilt?)</div>
        </div>
        <p style={styles.p}>
          Merke: Der Nenner gibt die Teilungsanzahl an, der Zähler die genommene Menge. Beide Zahlen
          müssen natürliche Zahlen sein, und der Nenner darf niemals 0 sein (durch 0 kann man nicht teilen).
        </p>

        {/* Section 2: Visualisieren */}
        <h2 style={styles.h2}>Brüche visualisieren: Kreisdiagramme und Rechtecke</h2>
        <p style={styles.p}>
          Das Geheimnis für das Verständnis von Brüchen liegt in der Visualisierung. Bevor man
          rechnet, sollte man Brüche zeichnen können. Es gibt zwei besonders hilfreiche Darstellungsformen:
        </p>

        <h3 style={styles.h3}>Kreisdiagramm (Tortendarstellung)</h3>
        <p style={styles.p}>
          Zeichne einen Kreis und teile ihn in gleich große Sektoren. Bei 1/4 teilst du den Kreis
          in 4 Teile und schraffierst einen. Bei 3/4 schraffierst du drei der vier Teile. Diese
          Methode ist besonders intuitiv für Alltagsbrüche wie 1/2, 1/4 und 3/4.
        </p>

        <h3 style={styles.h3}>Rechteckdarstellung</h3>
        <p style={styles.p}>
          Zeichne ein Rechteck und teile es horizontal oder vertikal in gleiche Streifen. Bei 2/5
          teilst du das Rechteck in 5 Streifen und fäll 2 davon aus. Der Vorteil der Rechteckdarstellung:
          Sie erleichtert später das Vergleichen und Addieren von Brüchen mit unterschiedlichem Nenner.
        </p>

        <div style={styles.highlightBox}>
          <strong>Praxis-Tipp:</strong> Lass dein Kind Brüche auf kariertem Papier zeichnen. Nimm
          ein 4×5 Rechteck (20 Kästchen) – es lässt sich leicht in Halbe, Viertel, Fünftel und
          Zehntel aufteilen. So werden Brüche buchstäblich sichtbar und begreifbar.
        </div>

        {/* Section 3: Kürzen */}
        <h2 style={styles.h2}>Brüche kürzen und erweitern</h2>
        <p style={styles.p}>
          Einen Bruch zu kürzen bedeutet, ihn in eine einfachere, gleichwertige Form zu bringen.
          Dazu dividiert man Zähler und Nenner durch dieselbe Zahl. Einen Bruch zu erweitern bedeutet
          das Gegenteil: Zähler und Nenner werden mit derselben Zahl multipliziert.
        </p>

        <div style={styles.exampleBox}>
          <p style={styles.exampleTitle}>Beispiel: Kürzen</p>
          <p style={{ ...styles.p, marginBottom: 4, fontFamily: "monospace" }}>
            6/8 ÷ 2/2 = 3/4   (durch 2 kürzen)
          </p>
          <p style={{ ...styles.p, marginBottom: 4, fontFamily: "monospace" }}>
            12/18 ÷ 6/6 = 2/3  (durch 6 kürzen – ggT von 12 und 18 ist 6)
          </p>
          <p style={{ ...styles.p, marginBottom: 0, color: "#9999bb", fontSize: 14 }}>
            Tipp: Teile Zähler und Nenner so lange durch gemeinsame Teiler, bis kein gemeinsamer Teiler mehr außer 1 übrig bleibt.
          </p>
        </div>

        <div style={styles.exampleBox}>
          <p style={styles.exampleTitle}>Beispiel: Erweitern</p>
          <p style={{ ...styles.p, marginBottom: 4, fontFamily: "monospace" }}>
            1/3 × 4/4 = 4/12   (mit 4 erweitern)
          </p>
          <p style={{ ...styles.p, marginBottom: 0, fontFamily: "monospace" }}>
            1/4 × 3/3 = 3/12   (mit 3 erweitern)
          </p>
        </div>

        <p style={styles.p}>
          Warum ist Erweitern nützlich? Weil man Brüche nur addieren oder subtrahieren kann, wenn
          sie den gleichen Nenner haben. Durch Erweitern kann man jeden Bruch auf einen beliebigen
          Nenner bringen.
        </p>

        {/* Section 4: Addition gleicher Nenner */}
        <h2 style={styles.h2}>Addition und Subtraktion mit gleichem Nenner</h2>
        <p style={styles.p}>
          Wenn zwei Brüche denselben Nenner haben, ist die Addition denkbar einfach: Man addiert
          nur die Zähler und lässt den Nenner unverändert.
        </p>

        <div style={styles.mathBox}>
          <div style={{ color: "#FFD700", marginBottom: 8 }}>Grundregel (gleicher Nenner):</div>
          <div>  a/n + b/n = (a+b)/n</div>
          <div>  a/n − b/n = (a−b)/n</div>
          <div style={{ color: "#9999bb", marginTop: 8, fontSize: 14 }}>  (n ≠ 0)</div>
        </div>

        <div style={styles.exampleBox}>
          <p style={styles.exampleTitle}>Rechenbeispiele (gleicher Nenner):</p>
          <p style={{ ...styles.p, marginBottom: 4, fontFamily: "monospace" }}>3/8 + 2/8 = 5/8</p>
          <p style={{ ...styles.p, marginBottom: 4, fontFamily: "monospace" }}>3/4 + 1/4 = 4/4 = 1   ← ergibt eine ganze Zahl!</p>
          <p style={{ ...styles.p, marginBottom: 0, fontFamily: "monospace" }}>7/10 − 3/10 = 4/10 = 2/5  ← kürzen nicht vergessen!</p>
        </div>

        {/* Section 5: Hauptnenner */}
        <h2 style={styles.h2}>Hauptnenner (kgV) finden: Brüche mit unterschiedlichem Nenner</h2>
        <p style={styles.p}>
          Schwieriger wird es, wenn die Nenner verschieden sind. Dann muss zuerst der kleinste
          gemeinsame Nenner (Hauptnenner) gefunden werden – das ist das kleinste gemeinsame Vielfache
          (kgV) der beiden Nenner.
        </p>

        <div style={styles.exampleBox}>
          <p style={styles.exampleTitle}>Schritt-für-Schritt: 1/3 + 1/4</p>
          <p style={{ ...styles.p, marginBottom: 6, fontFamily: "monospace" }}>
            Schritt 1: Vielfache von 3: 3, 6, 9, 12, 15...
          </p>
          <p style={{ ...styles.p, marginBottom: 6, fontFamily: "monospace" }}>
            Schritt 2: Vielfache von 4: 4, 8, 12, 16...
          </p>
          <p style={{ ...styles.p, marginBottom: 6, fontFamily: "monospace" }}>
            Schritt 3: kgV(3, 4) = 12 → Hauptnenner = 12
          </p>
          <p style={{ ...styles.p, marginBottom: 6, fontFamily: "monospace" }}>
            Schritt 4: 1/3 = 4/12  (mit 4 erweitern)
          </p>
          <p style={{ ...styles.p, marginBottom: 6, fontFamily: "monospace" }}>
            Schritt 5: 1/4 = 3/12  (mit 3 erweitern)
          </p>
          <p style={{ ...styles.p, marginBottom: 0, fontFamily: "monospace", color: "#FFD700" }}>
            Ergebnis: 4/12 + 3/12 = 7/12
          </p>
        </div>

        <div style={styles.exampleBox}>
          <p style={styles.exampleTitle}>Weiteres Beispiel: 2/5 + 1/3</p>
          <p style={{ ...styles.p, marginBottom: 4, fontFamily: "monospace" }}>kgV(5, 3) = 15</p>
          <p style={{ ...styles.p, marginBottom: 4, fontFamily: "monospace" }}>2/5 = 6/15 · · · 1/3 = 5/15</p>
          <p style={{ ...styles.p, marginBottom: 0, fontFamily: "monospace", color: "#FFD700" }}>6/15 + 5/15 = 11/15</p>
        </div>

        {/* Section 6: Häufige Fehler */}
        <h2 style={styles.h2}>Häufige Fehler und wie man sie vermeidet</h2>
        <p style={styles.p}>
          Bruchrechnung ist ein Bereich, in dem sehr typische Fehler immer wieder auftreten. Wer
          diese kennt, kann sie gezielt vermeiden:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>Zähler und Nenner separat addieren:</strong> Ein sehr häufiger Fehler: 1/2 + 1/3 = 2/5.
            Das ist falsch! Brüche können nicht wie Bruchteile eines Bruchs addiert werden. Korrekt:
            1/2 + 1/3 = 3/6 + 2/6 = 5/6.
          </li>
          <li style={styles.li}>
            <strong>Vergessen zu kürzen:</strong> Das Ergebnis 4/12 ist mathematisch korrekt, aber
            nicht in der einfachsten Form. 4/12 = 1/3 nach dem Kürzen durch 4.
          </li>
          <li style={styles.li}>
            <strong>Nur den Zähler erweitern:</strong> Wenn man 1/3 mit 4 erweitert, muss man sowohl
            den Zähler als auch den Nenner mit 4 multiplizieren: 1×4/3×4 = 4/12, nicht 4/3.
          </li>
          <li style={styles.li}>
            <strong>Hauptnenner falsch bestimmen:</strong> Für 1/4 + 1/6 ist der Hauptnenner nicht 24
            (4 × 6), sondern 12 (kgV). Auch wenn 24 rechnerisch stimmt, führt es zu größeren Zahlen
            und macht das Kürzen aufwändiger.
          </li>
        </ul>

        {/* Section 7: Alltagsbeispiele */}
        <h2 style={styles.h2}>Brüche im Alltag: Rezepte, Uhrzeiten, Maße</h2>
        <p style={styles.p}>
          Brüche begegnen uns im Alltag ständig – oft ohne dass wir es merken. Das Verständnis
          wird tiefer, wenn man Rechenwege mit echten Situationen verbindet:
        </p>

        <div style={styles.exampleBox}>
          <p style={styles.exampleTitle}>Kochen und Backen</p>
          <p style={styles.p}>
            Ein Kuchenrezept für 4 Personen benötigt 3/4 Tasse Mehl. Für 8 Personen verdoppelst du
            das Rezept: 3/4 × 2 = 6/4 = 3/2 = 1 und 1/2 Tassen. Oder: Das Rezept braucht 1/3 Tasse
            Zucker und 1/4 Tasse Butter. Wie viel Tassen Zutaten sind das zusammen?
            1/3 + 1/4 = 4/12 + 3/12 = 7/12 Tassen.
          </p>
        </div>

        <div style={styles.exampleBox}>
          <p style={styles.exampleTitle}>Uhrzeiten</p>
          <p style={styles.p}>
            „Viertel nach drei" bedeutet 15 Minuten nach drei – also 1/4 einer Stunde. „Halb vier"
            bedeutet 30 Minuten – also 1/2 Stunde. „Dreiviertel fünf" bedeutet 45 Minuten nach vier –
            also 3/4 einer Stunde. Brüche der Uhr kennen alle Kinder bereits, bevor sie in der Schule
            Brüche lernen!
          </p>
        </div>

        <div style={styles.exampleBox}>
          <p style={styles.exampleTitle}>Maße und Mengen</p>
          <p style={styles.p}>
            Eine Flasche Wasser fasst 3/4 Liter. Du trinkst davon 1/4 Liter. Wie viel ist noch
            übrig? 3/4 − 1/4 = 2/4 = 1/2 Liter. Oder: Dein Schulweg beträgt 3/4 km. Du hast
            1/3 des Weges zurückgelegt – wie weit bist du gegangen? 3/4 × 1/3 = 3/12 = 1/4 km.
          </p>
        </div>

        {/* CTA */}
        <div style={styles.ctaBox}>
          <p style={styles.ctaTitle}>Bruchrechnung online üben</p>
          <p style={styles.ctaText}>
            Teste dein Wissen über Brüche mit den PLIZIO-Mathe-Tests für Klasse 4 und Klasse 5.
            Interaktive Übungsaufgaben mit sofortigem Feedback – kostenlos und ohne Anmeldung.
          </p>
          <div style={styles.ctaButtons}>
            <a href="/mathe-test/klasse-4/" style={styles.ctaBtn}>Mathe-Test Klasse 4</a>
            <a href="/mathe-test/klasse-5/" style={styles.ctaBtnSecondary}>Mathe-Test Klasse 5</a>
          </div>
        </div>

        {/* FAQ */}
        <div style={styles.faqSection}>
          <h2 style={{ ...styles.h2, color: "white" }}>Häufig gestellte Fragen zur Bruchrechnung</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={styles.faqItem}>
              <p style={styles.faqQ}>{item.name}</p>
              <p style={styles.faqA}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* Internal links */}
        <div style={styles.internalLinks}>
          <p style={{ fontWeight: 700, marginBottom: 12 }}>Weiterführende Übungen und Artikel:</p>
          <ul style={{ ...styles.ul, marginBottom: 0 }}>
            <li style={styles.li}>
              <a href="/mathe-test/klasse-4/" style={styles.internalLink}>Mathe-Test Klasse 4</a>
              {" – "}Bruchrechnung und weitere Klasse-4-Themen üben
            </li>
            <li style={styles.li}>
              <a href="/mathe-test/klasse-5/" style={styles.internalLink}>Mathe-Test Klasse 5</a>
              {" – "}Erweiterte Bruchrechnung und Dezimalzahlen
            </li>
            <li style={styles.li}>
              <a href="/blog/mathe-test-vorbereitung/" style={styles.internalLink}>Mathe-Test Vorbereitung</a>
              {" – "}So lernst du optimal für Klassenarbeiten
            </li>
            <li style={styles.li}>
              <a href="/blog/einmaleins-lernen/" style={styles.internalLink}>Einmaleins lernen</a>
              {" – "}Die Grundlage für das Kürzen und Erweitern von Brüchen
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
