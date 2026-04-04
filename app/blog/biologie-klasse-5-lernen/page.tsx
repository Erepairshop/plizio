import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biologie Klasse 5: Was lernt man und wie übt man richtig? | PLIZIO Blog",
  description: "Biologie Klasse 5: Alle wichtigen Themen im Überblick sowie Tipps, wie du Biologie online lernen und dein Wissen mit Tests vertiefen kannst.",
  alternates: { canonical: "https://plizio.com/blog/biologie-klasse-5-lernen/" },
  openGraph: {
    title: "Biologie Klasse 5: Was lernt man und wie übt man richtig? | PLIZIO Blog",
    description: "Biologie Klasse 5: Alle wichtigen Themen im Überblick sowie Tipps, wie du Biologie online lernen und dein Wissen mit Tests vertiefen kannst.",
    url: "https://plizio.com/blog/biologie-klasse-5-lernen/",
    images: [{ url: "/og/blog-biologie-klasse-5-lernen.png", width: 1200, height: 630 }],
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
      name: "Was sind die wichtigsten Themen in Biologie Klasse 5?",
      acceptedAnswer: { "@type": "Answer", text: "In Klasse 5 liegt der Fokus meist auf den Grundlagen: Pflanzen (Blütenpflanzen), Wirbeltiere (Säugetiere, Vögel, Fische) und erste ökologische Zusammenhänge." }
    },
    {
      "@type": "Question",
      name: "Wie kann ich mich am besten auf Bio-Arbeiten vorbereiten?",
      acceptedAnswer: { "@type": "Answer", text: "Viel zeichnen und beschriften (z.B. Pflanzenteile) sowie interaktive Tests nutzen, um Definitionen sicher abzurufen." }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://plizio.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://plizio.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Biologie Klasse 5 lernen", item: "https://plizio.com/blog/biologie-klasse-5-lernen/" }
  ]
};

export default function BiologieKlasse5Page() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px 64px" }}>
        <h1>Biologie Klasse 5: Was lernt man und wie übt man richtig?</h1>
        <p>Der Einstieg in die Biologie in Klasse 5 öffnet ein spannendes Fenster zur Natur. Mit einem neuen Verständnis für lebende Organismen beginnt eine lehrreiche Reise.</p>
        
        <h2>Themenübersicht</h2>
        <ul>
          <li>Blütenpflanzen: Aufbau und Vermehrung</li>
          <li>Wirbeltiere: Merkmale und Lebensräume</li>
          <li>Ökologie: Zusammenhänge in der Natur</li>
        </ul>
        
        <p>Vertiefe dein Wissen mit <Link href="/astro-biologie/5" style={{color: "#00D4FF"}}>AstroBiologie Klasse 5</Link> und teste dich mit unserem <Link href="/biologietest" style={{color: "#00D4FF"}}>Biologie-Test</Link>.</p>
        
        <Link href="/blog/">← Zurück zum Blog</Link>
      </div>
    </main>
  );
}
