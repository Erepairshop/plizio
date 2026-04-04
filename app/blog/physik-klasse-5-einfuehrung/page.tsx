import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Physik Klasse 5: Einstieg leicht gemacht | PLIZIO Blog",
  description: "Physik Klasse 5: Entdecke die Grundlagen der Physik. Tipps für den Einstieg, spannende Versuche und interaktive Online-Übungen für den Schulstart.",
  alternates: { canonical: "https://plizio.com/blog/physik-klasse-5-einfuehrung/" },
  openGraph: {
    title: "Physik Klasse 5: Einstieg leicht gemacht | PLIZIO Blog",
    description: "Physik Klasse 5: Entdecke die Grundlagen der Physik. Tipps für den Einstieg, spannende Versuche und interaktive Online-Übungen für den Schulstart.",
    url: "https://plizio.com/blog/physik-klasse-5-einfuehrung/",
    images: [{ url: "/og/blog-physik-klasse-5-einfuehrung.png", width: 1200, height: 630 }],
    locale: "de_DE",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ist Physik in der 5. Klasse schwer?",
      acceptedAnswer: { "@type": "Answer", text: "Physik ist faszinierend! Oft wirkt sie am Anfang durch neue Begriffe abstrakt. Mit praktischen Beispielen und interaktivem Training wird sie jedoch schnell verständlich." }
    },
    {
      "@type": "Question",
      name: "Wie bereitet man sich auf Physik vor?",
      acceptedAnswer: { "@type": "Answer", text: "Beobachte den Alltag (Warum fällt ein Apfel vom Baum?) und nutze digitale Lernspiele, um Konzepte zu festigen." }
    },
    {
      "@type": "Question",
      name: "Welche Materialien brauche ich für Physik Klasse 5?",
      acceptedAnswer: { "@type": "Answer", text: "In der Regel ein Heft für Protokolle, ein Lineal und viel Neugier! Die meisten Experimente in der Schule werden gestellt." }
    },
    {
      "@type": "Question",
      name: "Wie hilft Physik in anderen Fächern?",
      acceptedAnswer: { "@type": "Answer", text: "Physik fördert logisches Denken und mathematische Problemlösung – Fähigkeiten, die auch in Mathe und Technik extrem hilfreich sind." }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://plizio.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://plizio.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Physik Klasse 5 Einführung", item: "https://plizio.com/blog/physik-klasse-5-einfuehrung/" }
  ]
};

export default function PhysikKlasse5Page() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px 64px" }}>
        <h1>Physik Klasse 5: Einstieg leicht gemacht</h1>
        <p>Willkommen in der Welt der Naturgesetze. In der 5. Klasse geht es darum, die Phänomene des Alltags zu hinterfragen.</p>
        
        <h2>Warum Physik faszinierend ist</h2>
        <p>Physik ist nicht nur Formelrechnerei. Physik ist der Versuch zu verstehen, warum die Welt so funktioniert, wie sie es tut. Warum fällt der Ball nach unten? Wie kommt das Licht in die Lampe? In Klasse 5 geht es genau darum: Staunen und Verstehen.</p>
        
        <h2>Die Grundlagen im Lehrplan</h2>
        <ul>
          <li><strong>Optik:</strong> Licht und Schatten. Wie funktionieren Spiegel? Was passiert bei einer Finsternis?</li>
          <li><strong>Akustik:</strong> Schall und Schwingungen. Warum hören wir Töne verschieden hoch? Wie pflanzt sich Schall fort?</li>
          <li><strong>Mechanik:</strong> Kräfte und Bewegung. Kraftmessung und die Grundlagen von Gewicht und Masse.</li>
        </ul>
        
        <h2>Lernmethoden für den Physik-Start</h2>
        <p>Das wichtigste Werkzeug in der Physik ist die Beobachtung. Ermutigen Sie Ihr Kind, Fragen zu stellen. Wenn das Verständnis für ein Konzept fehlt, helfen oft visuelle Darstellungen oder kleine Experimente zu Hause.</p>
        <p>Ergänzend bietet unser <Link href="/astro-physik" style={{color: "#00D4FF"}}>AstroPhysik-Lernmodell</Link> eine interaktive Umgebung, in der physikalische Prinzipien ohne Angst vor Fehlern ausprobiert werden können. Nutzen Sie auch den <Link href="/physiktest" style={{color: "#00D4FF"}}>Physik-Test</Link>, um zu sehen, welche Konzepte bereits sitzen.</p>
        
        <h2>Die Rolle von interaktivem Training</h2>
        <p>Klassische Physikbücher können trocken wirken. Durch interaktive Übungen auf <Link href="/physik" style={{color: "#00D4FF"}}>Plizio</Link> können Kinder die Auswirkungen von Kräften oder Lichtbrechung spielerisch simulieren, was zu einem deutlich tieferen Verständnis führt.</p>
        
        <div style={{ padding: "20px", background: "#12122A", borderRadius: "12px", borderLeft: "4px solid #B44DFF" }}>
            <strong>Eltern-Tipp:</strong> Seien Sie neugierig mit Ihrem Kind! Wenn das Kind fragt, wie etwas funktioniert, suchen Sie gemeinsam nach der Antwort. Man muss kein Physiker sein, um das Interesse zu fördern.
        </div>
        
        <Link href="/blog/">← Zurück zum Blog</Link>
      </div>
    </main>
  );
}
