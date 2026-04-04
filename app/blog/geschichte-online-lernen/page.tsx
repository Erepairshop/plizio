import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Geschichte online lernen: Interaktive Übungen für Klasse 5-8 | PLIZIO Blog",
  description: "Geschichte online lernen: Spannende Einblicke in die Antike, das Mittelalter und moderne Epochen. Interaktive Übungen für Klasse 5-8.",
  alternates: { canonical: "https://plizio.com/blog/geschichte-online-lernen/" },
  openGraph: {
    title: "Geschichte online lernen: Interaktive Übungen für Klasse 5-8 | PLIZIO Blog",
    description: "Geschichte online lernen: Spannende Einblicke in die Antike, das Mittelalter und moderne Epochen. Interaktive Übungen für Klasse 5-8.",
    url: "https://plizio.com/blog/geschichte-online-lernen/",
    images: [{ url: "/og/blog-geschichte-online-lernen.png", width: 1200, height: 630 }],
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
      name: "Ist Geschichte trocken?",
      acceptedAnswer: { "@type": "Answer", text: "Keineswegs! Geschichte ist die Summe all unserer Geschichten. Mit modernen Methoden wird sie lebendig." }
    },
    {
      "@type": "Question",
      name: "Wie kann ich Geschichte besser lernen?",
      acceptedAnswer: { "@type": "Answer", text: "Indem man Zusammenhänge versteht, nicht nur Daten. Unsere interaktiven Tools helfen dabei, Epochen visuell zu erfassen." }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://plizio.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://plizio.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Geschichte online lernen", item: "https://plizio.com/blog/geschichte-online-lernen/" }
  ]
};

export default function GeschichteOnlineLernenPage() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px 64px" }}>
        <h1>Geschichte online lernen: Interaktive Übungen für Klasse 5-8</h1>
        <p>Geschichte ist der Schlüssel zur Gegenwart. Entdecke vergangene Epochen mit unseren spannenden Lerninhalten.</p>
        
        <h2>Was dich erwartet</h2>
        <ul>
          <li>Frühe Hochkulturen</li>
          <li>Römisches Reich</li>
          <li>Völkerwanderung</li>
        </ul>
        
        <p>Tauche ein in die Geschichte mit <Link href="/astro-geschichte" style={{color: "#00D4FF"}}>AstroGeschichte</Link> oder nutze unseren <Link href="/geschichtetest" style={{color: "#00D4FF"}}>Geschichte-Test</Link>.</p>
        
        <Link href="/blog/">← Zurück zum Blog</Link>
      </div>
    </main>
  );
}
