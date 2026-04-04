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
      acceptedAnswer: { "@type": "Answer", text: "Az interaktív feladatok vizuális élményt nyújtanak, így könnyebben megértheted az élővilág összefüggéseit, és szórakoztatóbbá teszik a tanulást." }
    },
    {
      "@type": "Question",
      name: "Milyen témákat gyakorolhatok?",
      acceptedAnswer: { "@type": "Answer", text: "Állattan, növénytan, ökológia és emberi test – a teljes iskolai tananyagot lefedjük, minden évfolyamra." }
    },
    {
      "@type": "Question",
      name: "Segít ez a dolgozatokra való felkészülésben?",
      acceptedAnswer: { "@type": "Answer", text: "Igen! A tesztjeink az iskolai tananyaghoz igazodnak, így kiválóan alkalmasak a témazárók előtti ismétlésre." }
    },
    {
      "@type": "Question",
      name: "Van külön anyag felső tagozatosoknak?",
      acceptedAnswer: { "@type": "Answer", text: "Igen, a feladataink úgy vannak összeállítva, hogy mind a kisiskolások, mind a felsősök megtalálják a nekik való kihívásokat." }
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
        
        <h2>A biológia tanulás új dimenziói</h2>
        <p>A biológia egy csodálatos tudomány, ami körülvesz minket. Azonban az iskolában gyakran nehézséget okozhat a hatalmas mennyiségű latin név és fogalom memorizálása. Az online gyakorlás célja, hogy ezeket a fogalmakat ne csak bemagold, hanem megértsd a jelentésüket és a környezetben betöltött szerepüket.</p>
        
        <h2>Amit a Plizio-n találsz</h2>
        <ul>
          <li><strong>Rendszerezett tudás:</strong> Az élővilág osztályozásától az ökológiai folyamatokig mindent megtalálsz.</li>
          <li><strong>Interaktív tesztek:</strong> Azonnal ellenőrizheted, mennyit tudsz, és hol van szükség ismétlésre.</li>
          <li><strong>Folyamatos fejlődés:</strong> Kövesd nyomon, hogyan válsz a természet szakértőjévé.</li>
        </ul>
        
        <h2>Hogyan hozd ki a legtöbbet a tanulásból?</h2>
        <p>Biológiát nem elég elolvasni, látni kell! Használd az <Link href="/astro-biologie" style={{color: "#00D4FF"}}>AstroBiológia</Link> tanulórendszerünket, amely segít vizualizálni a komplex rendszereket. Ha pedig egy dolgozatra készülsz, használd a <Link href="/biologietest" style={{color: "#00D4FF"}}>biológia tesztünket</Link> a célzott gyakorláshoz.</p>
        
        <h2>Tippek a sikeres biológia tanuláshoz</h2>
        <ul>
          <li>Készíts saját vázlatot vagy ábrát egy témáról!</li>
          <li>Tanulj társakkal, magyarázzátok el egymásnak a folyamatokat!</li>
          <li>Gyakorolj rendszeresen az online kvízeinkkel.</li>
        </ul>
        
        <div style={{ padding: "20px", background: "#12122A", borderRadius: "12px", borderLeft: "4px solid #00D4FF" }}>
            <strong>Érdekesség:</strong> A biológia sokkal több, mint tankönyvszöveg. Ha valamit nem értesz, keress rá egy rövid videóra róla – a vizuális megerősítés csodákra képes!
        </div>
        
        <Link href="/blog/">← Vissza a blogra</Link>
      </div>
    </main>
  );
}
