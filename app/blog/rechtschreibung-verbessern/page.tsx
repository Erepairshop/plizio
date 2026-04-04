import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rechtschreibung verbessern: 7 Tipps für Kinder | PLIZIO Blog",
  description: "Die Rechtschreibung verbessern: Wir zeigen dir 7 praktische Tipps, wie Kinder fehlerfreier schreiben und Spaß an Sprache finden. Jetzt online üben!",
  alternates: { canonical: "https://plizio.com/blog/rechtschreibung-verbessern/" },
  openGraph: {
    title: "Rechtschreibung verbessern: 7 Tipps für Kinder | PLIZIO Blog",
    description: "Die Rechtschreibung verbessern: Wir zeigen dir 7 praktische Tipps, wie Kinder fehlerfreier schreiben und Spaß an Sprache finden. Jetzt online üben!",
    url: "https://plizio.com/blog/rechtschreibung-verbessern/",
    images: [{ url: "/og/blog-rechtschreibung-verbessern.png", width: 1200, height: 630 }],
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
      name: "Warum haben Kinder Probleme mit der Rechtschreibung?",
      acceptedAnswer: { "@type": "Answer", text: "Die deutsche Sprache hat viele Ausnahmen und komplexe Regeln. Oft liegt es an fehlender visueller Speicherung oder an einer noch nicht entwickelten phonologischen Bewusstheit." }
    },
    {
      "@type": "Question",
      name: "Helfen Diktate wirklich dabei, besser zu schreiben?",
      acceptedAnswer: { "@type": "Answer", text: "Diktate sind eine gute Kontrolle, aber kein Lernmittel. Zum Verbessern der Rechtschreibung sind gezieltes Training der Wortbausteine und spielerisches Üben viel effektiver." }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://plizio.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://plizio.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Rechtschreibung verbessern", item: "https://plizio.com/blog/rechtschreibung-verbessern/" }
  ]
};

export default function RechtschreibungVerbessernPage() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px 64px" }}>
        <h1>Rechtschreibung verbessern: 7 Tipps für Kinder</h1>
        <p>Sicheres Schreiben ist eine Schlüsselqualifikation. Doch was tun, wenn Buchstaben und Regeln durcheinandergeraten? Hier sind 7 Tipps, um die Rechtschreibung zu verbessern.</p>
        
        <h2>7 Tipps für bessere Rechtschreibung</h2>
        <ol>
          <li><strong>Viel Lesen:</strong> Visuelles Lernen ist der Schlüssel. Lesen speichert Wortbilder im Gedächtnis.</li>
          <li><strong>Regelmäßiges Training:</strong> Kurze Übungen mit <Link href="/astrodeutsch" style={{color: "#00D4FF"}}>AstroDeutsch</Link> festigen die Struktur.</li>
          <li><strong>Wortbausteine lernen:</strong> Silben und Stämme erkennen hilft bei komplexen Wörtern.</li>
          <li><strong>Eigenes Wörterbuch:</strong> Ein persönliches Fehlerwörterbuch schafft Bewusstsein für Schwachstellen.</li>
          <li><strong>Spielerisches Üben:</strong> <Link href="/deutschtest" style={{color: "#00D4FF"}}>Deutsch-Tests</Link> machen Üben zum Spiel.</li>
          <li><strong>Laut Lesen:</strong> Geschriebenes laut vorlesen deckt Fehler beim Satzbau und der Wortbildung auf.</li>
          <li><strong>Fehlersuche als Detektivarbeit:</strong> Fehler nicht als Versagen sehen, sondern als Hinweis auf fehlendes Wissen.</li>
        </ol>
        
        <Link href="/blog/">← Zurück zum Blog</Link>
      </div>
    </main>
  );
}
