import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biológia gyakorlás online: Ingyenes interaktív feladatok | PLIZIO Blog",
  description: "Biológia gyakorlás online: Fedezd fel a természet világát interaktív feladatokkal. Ingyenes tesztek, játékos tanulás minden korosztálynak.",
  alternates: { canonical: "https://plizio.com/blog/biologia-gyakorlas-online/" },
  openGraph: {
    title: "Biológia gyakorlás online: Ingyenes interaktív feladatok | PLIZIO Blog",
    description: "Biológia gyakorlás online: Fedezd fel a természet világát interaktív feladatokkal. Ingyenes tesztek, játékos tanulás minden korosztálynak.",
    url: "https://plizio.com/blog/biologia-gyakorlas-online/",
    images: [{ url: "/og/blog-biologia-gyakorlas-online.png", width: 1200, height: 630 }],
    locale: "hu_HU",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Miért jó az online biológia gyakorlás?",
      acceptedAnswer: { "@type": "Answer", text: "Az interaktív feladatok vizuális élményt nyújtanak, így könnyebben megértheted az élővilág összefüggéseit." }
    },
    {
      "@type": "Question",
      name: "Milyen témákat gyakorolhatok?",
      acceptedAnswer: { "@type": "Answer", text: "Állattan, növénytan, ökológia és emberi test – minden, ami a tananyag része." }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Kezdőoldal", item: "https://plizio.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://plizio.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Biológia gyakorlás online", item: "https://plizio.com/blog/biologia-gyakorlas-online/" }
  ]
};

export default function BiologiaGyakorlasOnlinePage() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px 64px" }}>
        <h1>Biológia gyakorlás online: Ingyenes interaktív feladatok</h1>
        <p>A biológia nemcsak elmélet, hanem az élővilág csodája. Fedezd fel izgalmas kvízeinket és mélyítsd el a tudásod!</p>
        
        <h2>Amit a Plizio-n találsz</h2>
        <ul>
          <li>Élővilág osztályozása.</li>
          <li>Ökológiai folyamatok.</li>
          <li>Az emberi test működése.</li>
        </ul>
        
        <p>Kezdd a tanulást az <Link href="/astro-biologie" style={{color: "#00D4FF"}}>AstroBiológia</Link> bolygón, vagy mérd a tudásod a <Link href="/biologietest" style={{color: "#00D4FF"}}>biológia tesztünkkel</Link>.</p>
        
        <Link href="/blog/">← Vissza a blogra</Link>
      </div>
    </main>
  );
}
