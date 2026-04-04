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
      acceptedAnswer: { "@type": "Answer", text: "Állattan, növénytan, ökológia és emberi test – a teljes iskolai tananyagot lefedjük, minden évfolyamra (1-8. osztály)." }
    },
    {
      "@type": "Question",
      name: "Segít ez a dolgozatokra való felkészülésben?",
      acceptedAnswer: { "@type": "Answer", text: "Igen! A tesztjeink az iskolai tananyaghoz igazodnak, így kiválóan alkalmasak a témazárók előtti ismétlésre és a hiányosságok pótlására." }
    },
    {
      "@type": "Question",
      name: "Van külön anyag felső tagozatosoknak?",
      acceptedAnswer: { "@type": "Answer", text: "Igen, a feladataink úgy vannak összeállítva, hogy mind a kisiskolások, mind a felsősök megtalálják a nekik való, szintjüknek megfelelő kihívásokat." }
    },
    {
      "@type": "Question",
      name: "Hogyan mérhető a fejlődés?",
      acceptedAnswer: { "@type": "Answer", text: "A tesztek végén részletes statisztikát kapsz az elért eredményedről, így látod, melyik témakörben fejlődtél a legtöbbet." }
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

const styles = {
  p: { lineHeight: "1.8", color: "#d0d0e8", marginBottom: "16px" },
  h2: { color: "#00FF88", marginTop: "40px", marginBottom: "16px" },
  ul: { paddingLeft: "24px", marginBottom: "16px" },
  li: { marginBottom: "10px", color: "#d0d0e8" }
};

export default function BiologiaGyakorlasOnlinePage() {
  return (
    <main style={{ background: "#0A0A1A", color: "white", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 16px 64px" }}>
        <h1>Biológia gyakorlás online: Ingyenes interaktív feladatok</h1>
        <p style={styles.p}>A biológia nemcsak száraz elmélet, hanem az élővilág csodája, amely körbevesz minket minden nap. Fedezd fel izgalmas kvízeinket és mélyítsd el a tudásod a természet működéséről! Az online gyakorlás segítségével a bonyolult biológiai folyamatok is érthetővé és logikussá válnak.</p>
        
        <h2 style={styles.h2}>A biológia tanulás új, modern dimenziói</h2>
        <p style={styles.p}>A biológia egy csodálatos tudomány, ami közvetlenül rólunk és a környezetünkről szól. Azonban az iskolában gyakran nehézséget okozhat a hatalmas mennyiségű latin név, rendszertani kategória és fogalom memorizálása. Az online gyakorlás célja, hogy ezeket a fogalmakat ne csak bemagold, hanem megértsd a jelentésüket és a globális ökoszisztémában betöltött szerepüket.</p>
        
        <h2 style={styles.h2}>Milyen témaköröket fed le a Plizio?</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Rendszerezett élővilág:</strong> Az egysejtűektől a komplex emlősökig mindent megtalálsz, logikus felépítésben.</li>
          <li style={styles.li}><strong>Ökológiai folyamatok:</strong> Értsd meg, hogyan hatunk a természetre, és mit tehetünk a fenntarthatóságért.</li>
          <li style={styles.li}><strong>Az emberi test:</strong> Fedezd fel a szerveid működését, az egészséges életmód alapjait és a biológiai egyensúly fontosságát.</li>
          <li style={styles.li}><strong>Növénytan:</strong> A fotoszintézistől a virágok beporzásáig minden fontos iskolai témát érintünk.</li>
        </ul>
        
        <h2 style={styles.h2}>Hogyan hozd ki a legtöbbet az online tanulásból?</h2>
        <p style={styles.p}>Biológiát nem elég elolvasni, látni és tapasztalni kell! Használd az <Link href="/astro-biologie" style={{color: "#00D4FF"}}>AstroBiológia</Link> tanulórendszerünket, amely segít vizualizálni a komplex rendszereket és összefüggéseket. Ha pedig egy fontos dolgozatra vagy témazáróra készülsz, használd a <Link href="/biologietest" style={{color: "#00D4FF"}}>biológia tesztünket</Link> a célzott gyakorláshoz. A rendszer azonnali visszajelzést ad, így nem rögzülnek a rossz válaszok.</p>
        
        <h2 style={styles.h2}>Gyakorlati tippek a sikeres biológia tanuláshoz</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Készíts saját vázlatokat vagy színes ábrákat egy-egy folyamatról (pl. a vérkeringésről), ez segít a vizuális memóriádnak!</li>
          <li style={styles.li}>Tanulj társakkal, és próbáljátok meg elmagyarázni egymásnak a bonyolultabb folyamatokat – ha el tudod mondani, akkor már érted is!</li>
          <li style={styles.li}>Gyakorolj rendszeresen, heti több alkalommal a Plizio online kvízeivel, hogy a tudásod friss és naprakész maradjon.</li>
        </ul>
        
        <h2 style={styles.h2}>A biológia és a mindennapi élet kapcsolata</h2>
        <p style={styles.p}>Amikor legközelebb a természetben jársz, figyeld meg az állatok viselkedését vagy a növények leveleit. Amit nálunk tanulsz, azt a való világban is látni fogod. Ez az igazi tudás: amikor a képernyőn látott információk életre kelnek a szemed előtt. A biológia megtanít tisztelni az életet annak minden formájában.</p>
        
        <div style={{ padding: "24px", background: "#12122A", borderRadius: "16px", borderLeft: "4px solid #00FF88", marginTop: "40px" }}>
            <h3 style={{ marginTop: 0, color: "#00FF88" }}>Érdekesség a felfedezőknek</h3>
            <p style={{ margin: 0, color: "#d0d0e8" }}>A biológia sokkal több, mint tankönyvszöveg. Ha valamit nem értesz kristálytisztán, keress rá egy rövid animációra vagy videóra róla – a vizuális megerősítés csodákra képes, és nálunk is ezt a szemléletet követjük. A tanulás nálunk nem kényszer, hanem kaland.</p>
        </div>
        
        <div style={{ marginTop: "40px" }}>
          <Link href="/blog/" style={{ color: "#9999bb", textDecoration: "none" }}>← Vissza a blogra</Link>
        </div>
      </div>
    </main>
  );
}
