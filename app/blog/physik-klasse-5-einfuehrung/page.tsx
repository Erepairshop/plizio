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
        
        <h2>Themen in Physik</h2>
        <ul>
          <li>Optik: Licht und Schatten</li>
          <li>Akustik: Schall und Schwingungen</li>
          <li>Mechanik: Kräfte und Bewegung</li>
        </ul>
        
        <p>Starte dein Abenteuer mit <Link href="/astro-physik" style={{color: "#00D4FF"}}>AstroPhysik</Link> und mache den <Link href="/physiktest" style={{color: "#00D4FF"}}>Physik-Test</Link>.</p>
        
        <Link href="/blog/">← Zurück zum Blog</Link>
      </div>
    </main>
  );
}
