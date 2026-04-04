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
    },
    {
      "@type": "Question",
      name: "Ab welcher Klasse beginnt Sachkunde?",
      acceptedAnswer: { "@type": "Answer", text: "Sachkunde beginnt meist mit der Einschulung in Klasse 1, wo die ersten Themen rund um die Umwelt und den Alltag behandelt werden." }
    },
    {
      "@type": "Question",
      name: "Welche Fähigkeiten werden im Sachunterricht gefördert?",
      acceptedAnswer: { "@type": "Answer", text: "Neben Sachwissen werden vor allem Beobachtungsfähigkeit, kritisches Denken und die Fähigkeit zur Recherche gefördert." }
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
        
        <h2>Was ist das Ziel des Sachunterrichts?</h2>
        <p>Im Sachunterricht geht es darum, die Welt um uns herum zu begreifen. Kinder sind von Natur aus neugierig – der Sachunterricht kanalisiert diese Neugier in strukturiertes Wissen. Dabei lernen sie nicht nur Fakten, sondern auch, wie sie die Welt beobachten, hinterfragen und neue Zusammenhänge entdecken können.</p>
        
        <h2>Die großen Themenbereiche</h2>
        <ul>
          <li><strong>Natur & Umwelt:</strong> Tiere im Wald, Pflanzen auf der Wiese, Wetterphänomene – die Natur ist ein riesiges Labor.</li>
          <li><strong>Verkehrserziehung:</strong> Ein lebenswichtiger Teil, in dem Kinder lernen, wie sie sich sicher im Straßenverkehr bewegen.</li>
          <li><strong>Technik & Geschichte:</strong> Frühe Technik, Erfindungen und wie wir früher lebten, helfen Kindern zu verstehen, woher unsere heutige Welt kommt.</li>
        </ul>
        
        <h2>Methoden für Eltern und Lehrer</h2>
        <p>Erfolgreicher Sachunterricht lebt vom Mitmachen. Besuche im Museum, kleine Experimente (z.B. eine Bohne keimen lassen) oder Beobachtungsspaziergänge machen das Wissen greifbar. Die Theorie ist nur die halbe Miete.</p>
        <p>Ergänzen Sie das praktische Lernen mit unserer Plattform <Link href="/astro-sachkunde" style={{color: "#00D4FF"}}>AstroSachkunde</Link>. Hier können Kinder ihre Neugier weiter erforschen und Wissen in interaktiven Formaten festigen. Für die Vorbereitung auf Tests bieten wir den <Link href="/sachkundetest" style={{color: "#00D4FF"}}>Sachkundetest</Link> an, der den Lernstoff spielerisch abfragt.</p>
        
        <h2>Warum die Verbindung zum Alltag wichtig ist</h2>
        <p>Wenn ein Kind lernt, warum sich die Blätter im Herbst verfärben, sollte es das nächste Mal im Wald direkt auf die Suche nach verschiedenen Baumarten gehen. Das Lernen außerhalb des Klassenzimmers ist ein mächtiges Werkzeug, um das Interesse wachzuhalten.</p>
        
        <div style={{ padding: "20px", background: "#12122A", borderRadius: "12px", borderLeft: "4px solid #00D4FF" }}>
            <strong>Tipp:</strong> Nutzen Sie den Alltag als Lernressource. Fragt das Kind nach Wetterphänomenen? Schaut zusammen Nachrichten oder wetterbezogene Seiten an!
        </div>
        
        <Link href="/blog/">← Zurück zum Blog</Link>
      </div>
    </main>
  );
}
