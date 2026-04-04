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
    },
    {
      "@type": "Question",
      name: "Warum ist das Verstehen von Geschichte wichtig?",
      acceptedAnswer: { "@type": "Answer", text: "Geschichte hilft uns zu verstehen, warum unsere Welt heute so ist, wie sie ist, und fördert kritisches Denken." }
    },
    {
      "@type": "Question",
      name: "Welche Epochen werden in der Schule meist behandelt?",
      acceptedAnswer: { "@type": "Answer", text: "Der Bogen spannt sich meist von der Antike über das Mittelalter bis zur Neuzeit, wobei Schwerpunkte je nach Bundesland variieren." }
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
        
        <h2>Warum Geschichte weit mehr als Daten ist</h2>
        <p>Viele Schüler empfinden Geschichte als eine Liste aus Jahreszahlen und Namen. Doch eigentlich ist es eine spannende Erzählung über Menschen, Konflikte, Fortschritt und die Entwicklung unserer Gesellschaft. Wenn Schüler den Sinn hinter den Ereignissen verstehen, beginnt das Fach zu leben.</p>
        
        <h2>Themenwelten in AstroGeschichte</h2>
        <ul>
          <li><strong>Frühe Hochkulturen:</strong> Mesopotamien, Ägypten und der Ursprung der Schrift.</li>
          <li><strong>Antike:</strong> Das Römische Reich und das griechische Leben.</li>
          <li><strong>Mittelalter:</strong> Feudalismus, Klöster und die Herausforderungen der Völkerwanderung.</li>
        </ul>
        
        <h2>Wie man Geschichte lebendig vermittelt</h2>
        <p>Statt nur Texte zu lesen, ist der interaktive Ansatz bei <Link href="/astro-geschichte" style={{color: "#00D4FF"}}>AstroGeschichte</Link> darauf ausgelegt, Schüler aktiv einzubinden. Ob es darum geht, Strategien in einem antiken Kontext nachzuvollziehen oder historische Zusammenhänge zu verknüpfen – interaktives Üben festigt das Wissen.</p>
        <p>Ergänzen Sie das Lernen mit unserem <Link href="/geschichtetest" style={{color: "#00D4FF"}}>Geschichte-Test</Link>, um die gelernten Zusammenhänge zu überprüfen. Wer die Ursache-Wirkungs-Prinzipien versteht, braucht nicht mehr auswendig zu lernen.</p>
        
        <h2>Online-Lernen als Ergänzung zum Unterricht</h2>
        <p>Digitale Plattformen ermöglichen es, Geschichte visuell und geografisch einzuordnen. Das hilft Schülern, sich ein räumliches und zeitliches Raster zu bauen, das im reinen Leseunterricht oft zu kurz kommt.</p>
        
        <div style={{ padding: "20px", background: "#12122A", borderRadius: "12px", borderLeft: "4px solid #B44DFF" }}>
            <strong>Tipp für den Erfolg:</strong> Schaut gemeinsam Filme über historische Ereignisse oder besucht Museen. Geschichte ist am besten erfahrbar, wenn man einen emotionalen oder bildhaften Bezug aufbauen kann.
        </div>
        
        <Link href="/blog/">← Zurück zum Blog</Link>
      </div>
    </main>
  );
}
