import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sachkunde in der Grundschule: Themen, Tipps & Online-Übungen | PLIZIO Blog",
  description: "Sachkunde in der Grundschule: Erfahre alles über wichtige Themen, hilfreiche Lernmethoden und wie du dein Wissen mit interaktiven Online-Übungen verbesserst.",
  alternates: { canonical: "https://plizio.com/blog/sachkunde-grundschule/" },
  openGraph: {
    title: "Sachkunde in der Grundschule: Themen, Tipps & Online-Übungen | PLIZIO Blog",
    description: "Sachkunde in der Grundschule: Erfahre alles über wichtige Themen, hilfreiche Lernmethoden und wie du dein Wissen mit interaktiven Online-Übungen verbesserst.",
    url: "https://plizio.com/blog/sachkunde-grundschule/",
    images: [{ url: "/og/blog-sachkunde-grundschule.png", width: 1200, height: 630 }],
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
      name: "Was beinhaltet das Fach Sachkunde in der Grundschule?",
      acceptedAnswer: { "@type": "Answer", text: "Sachkunde deckt naturwissenschaftliche, technische, geographische, historische und soziale Themenbereiche ab." }
    },
    {
      "@type": "Question",
      name: "Wie kann man Sachkunde für Kinder interessanter machen?",
      acceptedAnswer: { "@type": "Answer", text: "Durch Alltagsbezug, Experimente und spielerische Übungen, die über das reine Auswendiglernen hinausgehen." }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://plizio.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://plizio.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Sachkunde in der Grundschule", item: "https://plizio.com/blog/sachkunde-grundschule/" }
  ]
};

export default function SachkundeGrundschulePage() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px 64px" }}>
        <h1>Sachkunde in der Grundschule: Themen, Tipps & Online-Übungen</h1>
        <p>Das Fach Sachkunde ist das "Fenster zur Welt" für Grundschüler. Hier erfahren Kinder erste Grundlagen aus Natur und Gesellschaft.</p>
        
        <h2>Themenschwerpunkte</h2>
        <ul>
          <li>Natur & Umwelt</li>
          <li>Verkehrserziehung</li>
          <li>Technik & Geschichte</li>
        </ul>
        
        <p>Stöbere in unseren Lernwelten bei <Link href="/astro-sachkunde" style={{color: "#00D4FF"}}>AstroSachkunde</Link> oder absolviere unseren <Link href="/sachkundetest" style={{color: "#00D4FF"}}>Sachkundetest</Link>.</p>
        
        <Link href="/blog/">← Zurück zum Blog</Link>
      </div>
    </main>
  );
}
