import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Német nyelvtan gyakorlás online: Interaktív feladatok 1-8. osztályig | PLIZIO Blog",
  description: "Német nyelvtan gyakorlás online ingyen: Interaktív feladatok, szórakoztató leckék 1-8. osztályosoknak. Kezdj el németül tanulni most!",
  alternates: { canonical: "https://plizio.com/blog/nemet-nyelvtan-gyakorlas/" },
  openGraph: {
    title: "Német nyelvtan gyakorlás online: Interaktív feladatok 1-8. osztályig | PLIZIO Blog",
    description: "Német nyelvtan gyakorlás online ingyen: Interaktív feladatok, szórakoztató leckék 1-8. osztályosoknak. Kezdj el németül tanulni most!",
    url: "https://plizio.com/blog/nemet-nyelvtan-gyakorlas/",
    images: [{ url: "/og/blog-nemet-nyelvtan-gyakorlas.png", width: 1200, height: 630 }],
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
      name: "Miért hatékony az online német nyelvtan gyakorlás?",
      acceptedAnswer: { "@type": "Answer", text: "Az interaktív feladatok azonnali visszajelzést adnak, így a gyerekek azonnal kijavíthatják a hibáikat, ami gyorsítja a tanulást." }
    },
    {
      "@type": "Question",
      name: "Milyen szinten érhető el a német nyelvtan?",
      acceptedAnswer: { "@type": "Answer", text: "Az 1-8. osztályos anyagot fedjük le, az alapvető szókincstől a komplex nyelvtani szerkezetekig." }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Kezdőoldal", item: "https://plizio.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://plizio.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Német nyelvtan gyakorlás", item: "https://plizio.com/blog/nemet-nyelvtan-gyakorlas/" }
  ]
};

export default function NemetNyelvtanGyakorlasPage() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px 64px" }}>
        <h1>Német nyelvtan gyakorlás online: Interaktív feladatok 1-8. osztályig</h1>
        <p>A német nyelvtan elsajátítása kihívást jelenthet, de interaktív feladatainkkal gyerekjáték lesz! Fedezd fel a nyelvtan izgalmas oldalát.</p>
        
        <h2>Miért válaszd a Plizio-t?</h2>
        <ul>
          <li>Szórakoztató, játékos feladatok.</li>
          <li>Tananyaghoz igazodó tartalom.</li>
          <li>Könnyen elérhető, bárhonnan.</li>
        </ul>
        
        <p>Próbáld ki az <Link href="/astrodeutsch" style={{color: "#00D4FF"}}>AstroDeutsch</Link> tanulórendszerünket vagy a <Link href="/deutschtest" style={{color: "#00D4FF"}}>német nyelvtani tesztünket</Link>.</p>
        
        <Link href="/blog/">← Vissza a blogra</Link>
      </div>
    </main>
  );
}
