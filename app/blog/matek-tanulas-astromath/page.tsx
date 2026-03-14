import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matek Tanulás Játékosan – AstroMath Felfedező | Plizio Blog",
  description:
    "Az AstroMath egy ingyenes, böngészős matematika-kalandjáték 1–8. osztályosoknak. Szigetenként haladva, játékosan sajátíthatók el az iskolai tananyag matematikatémái.",
  alternates: { canonical: "https://plizio.com/blog/matek-tanulas-astromath/" },
  openGraph: {
    title: "Matek Tanulás Játékosan – AstroMath | Plizio Blog",
    description:
      "Játékos matek felfedező kaland 1–8. osztályosoknak. Szigetenként, az iskolai sorrendben haladva.",
    url: "https://plizio.com/blog/matek-tanulas-astromath/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mi az AstroMath?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Az AstroMath egy ingyenes, böngészőben futó matematika-kalandjáték 1–8. osztályosoknak. A játékos szigetenként halad előre, minden sziget az iskolai tananyag egy fejezetét fedi le. Minden szigeten 3 misszió van, amelyeket különböző játéktípusokban (kvíz, memória, sorbarendezés, párosítás) kell teljesíteni.",
      },
    },
    {
      "@type": "Question",
      name: "Milyen életkornak szól az AstroMath?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Az AstroMath 1. osztálytól (kb. 6-7 éves kortól) 8. osztályig elérhető. Minden évfolyamnak saját szigetvilága van, az adott tanév anyagához igazítva. Az 1. osztályos verzió az összeadás-kivonás alapjaitól indul, a 8. osztályos verzió haladó algebrával és függvényekkel zárul.",
      },
    },
    {
      "@type": "Question",
      name: "Hogyan különbözik az AstroMath a hagyományos matek teszttől?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A hagyományos matek teszt a gyorsaságot és a pontosságot méri – egymás után jönnek a kérdések, és a végén megkapod az eredményt. Az AstroMath ezzel szemben egy teljes kalandélményt nyújt: van térkép, szigetek, missziók, csillagjutalmak, és négy különböző játéktípus váltakozik. A cél nem a mérés, hanem a megértés és a haladás jutalmazása.",
      },
    },
    {
      "@type": "Question",
      name: "Az AstroMath követi az iskolai tananyagot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Igen, ez az AstroMath legnagyobb előnye. A szigetek sorrendje az iskolai tantervet követi – nem témák szerint csoportosítva, hanem időrendben, ahogy az iskolában is tanítják. Például az 1. osztályos szigetvilágban először a számolás és összehasonlítás (1-10), majd az összeadás, kivonás, végül a mértékegységek és adatok jelennek meg.",
      },
    },
    {
      "@type": "Question",
      name: "Kell regisztráció az AstroMath-hoz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nem, az AstroMath regisztráció nélkül elérhető. A haladás a böngészőben automatikusan mentődik, így bármikor folytathatod ott, ahol abbahagytad – ugyanazon az eszközön.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Főoldal", item: "https://plizio.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://plizio.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Matek Tanulás AstroMath", item: "https://plizio.com/blog/matek-tanulas-astromath/" },
  ],
};

const s = {
  main: { background: "#0A0A1A", color: "white", minHeight: "100vh" } as React.CSSProperties,
  wrap: { maxWidth: 720, margin: "0 auto", padding: "32px 16px 64px" } as React.CSSProperties,
  bc: { fontSize: 14, color: "#9999bb", marginBottom: 24 } as React.CSSProperties,
  bcLink: { color: "#9999bb", textDecoration: "none" } as React.CSSProperties,
  sep: { margin: "0 8px" } as React.CSSProperties,
  h1: { fontSize: "clamp(26px, 5vw, 38px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 } as React.CSSProperties,
  meta: { color: "#9999bb", fontSize: 14, marginBottom: 32 } as React.CSSProperties,
  intro: { fontSize: 18, lineHeight: 1.7, marginBottom: 32, color: "#e0e0f0" } as React.CSSProperties,
  h2: { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 12, color: "#B44DFF" } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 700, marginTop: 28, marginBottom: 8, color: "#00D4FF" } as React.CSSProperties,
  p: { lineHeight: 1.75, marginBottom: 16, color: "#d0d0e8" } as React.CSSProperties,
  ul: { paddingLeft: 24, marginBottom: 16 } as React.CSSProperties,
  li: { lineHeight: 1.75, marginBottom: 6, color: "#d0d0e8" } as React.CSSProperties,
  tip: { background: "#1a0d2a", border: "1px solid #B44DFF", borderRadius: 10, padding: "16px 20px", marginBottom: 20, color: "#d0a8f0", lineHeight: 1.7 } as React.CSSProperties,
  islandCard: { background: "#12122A", borderRadius: 14, padding: "20px 24px", marginBottom: 16, borderLeft: "4px solid #B44DFF" } as React.CSSProperties,
  islandTitle: { fontSize: 17, fontWeight: 700, marginBottom: 4, color: "#e0e0ff" } as React.CSSProperties,
  islandMeta: { fontSize: 13, color: "#9999bb", marginBottom: 8 } as React.CSSProperties,
  islandText: { lineHeight: 1.7, color: "#b0b0cc", fontSize: 15 } as React.CSSProperties,
  cta: { background: "linear-gradient(135deg, #1a0d2a, #12122A)", border: "2px solid #B44DFF", borderRadius: 16, padding: "32px", textAlign: "center", marginTop: 48 } as React.CSSProperties,
  ctaT: { fontSize: 22, fontWeight: 700, marginBottom: 12 } as React.CSSProperties,
  ctaTx: { color: "#b0b0cc", marginBottom: 24, lineHeight: 1.6 } as React.CSSProperties,
  ctaBtn: { display: "inline-block", background: "linear-gradient(90deg, #B44DFF, #00D4FF)", color: "#0A0A1A", fontWeight: 700, fontSize: 17, padding: "14px 32px", borderRadius: 10, textDecoration: "none" } as React.CSSProperties,
  faq: { marginTop: 48 } as React.CSSProperties,
  faqItem: { borderBottom: "1px solid #1a1a3a", paddingBottom: 20, marginBottom: 20 } as React.CSSProperties,
  faqQ: { fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#e0e0ff" } as React.CSSProperties,
  faqA: { color: "#b0b0cc", lineHeight: 1.7 } as React.CSSProperties,
  related: { marginTop: 40, padding: "20px 24px", background: "#12122A", borderRadius: 12 } as React.CSSProperties,
  relLink: { color: "#B44DFF", textDecoration: "none", fontWeight: 600 } as React.CSSProperties,
};

export default function MatekTanulasAstromathPage() {
  return (
    <main style={s.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={s.wrap}>
        <nav style={s.bc} aria-label="Breadcrumb">
          <a href="/" style={s.bcLink}>Főoldal</a>
          <span style={s.sep}>›</span>
          <a href="/blog/" style={s.bcLink}>Blog</a>
          <span style={s.sep}>›</span>
          <span style={{ color: "#e0e0ff" }}>Matek Tanulás AstroMath</span>
        </nav>

        <h1 style={s.h1}>Matek Tanulás Játékosan – Az AstroMath Felfedező Kaland</h1>
        <p style={s.meta}>Olvasási idő: ~6 perc · 1–8. osztály · Ingyenes, regisztráció nélkül</p>

        <p style={s.intro}>
          Mi lenne, ha a matektanulás egy valódi kalandnak érezne? Nem unalmas ismétlésnek,
          nem kötelező házi feladatnak – hanem egy olyan felfedező útnak, ahol minden teljesített
          misszió közelebb visz a következő szigethez? Pontosan ezt nyújtja az AstroMath:
          egy ingyenes matematika-kalandjáték 1–8. osztályosoknak, amely az iskolai tananyag
          sorrendjét követve vezeti végig a gyerekeket az alapoktól a haladó témákig.
        </p>

        <h2 style={s.h2}>Mi az AstroMath?</h2>
        <p style={s.p}>
          Az AstroMath egy böngészőben futó, animált matematika-felfedező játék. A játékos egy
          csillagászati térképen navigál, ahol minden sziget az iskolai matek egy fejezetét
          képviseli. Minden szigeten 3 misszió van – ezeket különböző játéktípusokban kell
          teljesíteni: kvíz, memóriajáték, számok sorbarendezése és párosítós feladatok váltakoznak.
        </p>
        <p style={s.p}>
          A rendszer kulcsa: <strong>nem lehet ugrani</strong>. Az összeadás a kivonás előtt jön,
          a szorzás az osztás előtt, a törtek az arányok előtt. Pontosan úgy, ahogy az iskolában
          is tanítják. Ez nem véletlenszerű feladatgenerátor – hanem egy gondosan megtervezett
          tanulási útvonal, ahol minden lépés az előzőre épül.
        </p>

        <h2 style={s.h2}>Az 1. osztályos szigetvilág – példa</h2>
        <p style={s.p}>
          Az 1. osztályos AstroMath 9 szigetből áll, amelyek pontosan az általános iskola első
          évének tananyagát követik:
        </p>

        {[
          { num: "1.", name: "Számolás-sziget", topic: "Számolás, összehasonlítás (1–10)", desc: "Az első számok megismerése, elrendezés, kisebb-nagyobb összehasonlítás." },
          { num: "2.", name: "Összeadás-sziget", topic: "Összeadás (1–10)", desc: "Számok összeadása, felcserélhetőség, számok felbontása." },
          { num: "3.", name: "Kivonás-sziget", topic: "Kivonás (1–10)", desc: "Kivonás megismerése, kiegészítés a 10-esig." },
          { num: "4.", name: "Dupla és fele sziget", topic: "Kétszeres és fele (1–18)", desc: "Számok megduplázása és felezése." },
          { num: "5.", name: "Számok 20-ig sziget", topic: "Számolás, sorozatok (11–20)", desc: "Kétjegyű számok, helyiérték, számsorozatok." },
          { num: "6.", name: "Szöveges feladatok szigete", topic: "Szöveges feladatok (1–20)", desc: "Valódi történetekbe ágyazott összeadás és kivonás." },
          { num: "7.", name: "Alakzatok szigete", topic: "Geometria, minták", desc: "Síkidomok felismerése, mintázatok folytatása." },
          { num: "8.", name: "Mérések szigete", topic: "Óra, pénz, súly", desc: "Analóg óra olvasása, érmék, mértékegységek." },
          { num: "9.", name: "Adatok és sorozatok", topic: "Adatok, sorozatok (1–20)", desc: "Adatok értelmezése, sorozatok felismerése." },
        ].map((island) => (
          <div key={island.num} style={s.islandCard}>
            <p style={s.islandTitle}>{island.num} {island.name}</p>
            <p style={s.islandMeta}>{island.topic}</p>
            <p style={s.islandText}>{island.desc}</p>
          </div>
        ))}

        <h2 style={s.h2}>A csillagrendszer – hogyan motiválja a haladást?</h2>
        <p style={s.p}>
          Minden misszió 1–3 csillagot adhat az elért eredmény alapján. A csillagok a sziget
          összesítőjén is megjelennek – így a gyerek mindig látja, hol tart és hova érdemes
          visszatérni egy jobb eredményért. Ez a rendszer a belső motivációt erősíti:
          nem a szülő mondja, hogy "csináld meg újra" – a saját, nem tökéletes 2 csillag
          motivál az újrapróbálásra.
        </p>
        <div style={s.tip}>
          <strong>Tanári és szülői tapasztalat:</strong> A csillagrendszer különösen jól működik
          olyan gyerekeknél, akik tesztkörülmények között szorongnak. Az AstroMath-ban nincs
          "bukás" – mindig lehet újrapróbálni, a legjobb eredmény marad meg. Ez a biztonságos
          környezet pontosan az, amire sok gyereknek szüksége van a matematikával való megbékéléshez.
        </div>

        <h2 style={s.h2}>4 játéktípus – változatosság a monotónia ellen</h2>
        <p style={s.p}>
          Az AstroMath egyik legnagyobb erénye, hogy ugyanazt az anyagot négy különböző módban
          gyakoroltatja. Ez nem csak az unalmat csökkenti – a kutatások szerint az ismeret több
          formában való megközelítése mélyebb megértést eredményez:
        </p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Orbit Kvíz:</strong> 10 kérdés, 4 válaszlehetőség – klasszikus kvízformátum időmérővel</li>
          <li style={s.li}><strong>Csillagpárosítás:</strong> kérdések és válaszok párosítása érintéssel, 5 fordulóban</li>
          <li style={s.li}><strong>Gravitáció-rendező:</strong> számok sorrendbe rakása a képernyőn csúsztatással</li>
          <li style={s.li}><strong>Fekete lyuk kvíz:</strong> sötét stílusú, feszültebb légkörű kvíz változat</li>
        </ul>

        <h2 style={s.h2}>AstroMath vs. Matek Teszt – melyiket mikor?</h2>
        <p style={s.p}>
          A két eszköz jól kiegészíti egymást, nem versenyez egymással:
        </p>
        <ul style={s.ul}>
          <li style={s.li}><strong>AstroMath</strong> – ha a gyerek egy új témát tanul, vagy ha elveszítette a motivációját a matekhoz. A kalandos forma visszahozza a kedvet.</li>
          <li style={s.li}><strong><a href="/mathtest/" style={s.relLink}>Matek Teszt</a></strong> – ha az anyag már ismert és gyorsaságot, pontosságot kell fejleszteni. Dolgozat előtt ideális.</li>
          <li style={s.li}><strong>Mindkettő</strong> – heti rutinban: AstroMath 2-3×/héten az új anyaghoz, Matek Teszt naponta 5-10 percre a fejszámolásra.</li>
        </ul>

        <div style={s.cta}>
          <p style={s.ctaT}>Indulj el az AstroMath kalandon!</p>
          <p style={s.ctaTx}>
            Ingyenes, regisztráció nélkül, bármely okostelefonon vagy számítógépen fut.
            Az 1. osztályos szigetvilág azonnal elérhető.
          </p>
          <a href="/astromath/1/" style={s.ctaBtn}>AstroMath – 1. osztály →</a>
        </div>

        <div style={s.faq}>
          <h2 style={{ ...s.h2, color: "white" }}>Gyakran Ismételt Kérdések</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={s.faqItem}>
              <p style={s.faqQ}>{item.name}</p>
              <p style={s.faqA}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div style={s.related}>
          <p style={{ fontWeight: 700, marginBottom: 12 }}>Kapcsolódó játékok és cikkek:</p>
          <ul style={{ ...s.ul, marginBottom: 0 }}>
            <li style={s.li}><a href="/astromath/1/" style={s.relLink}>AstroMath – 1. osztály</a> – Játékos matek felfedező kaland</li>
            <li style={s.li}><a href="/mathtest/" style={s.relLink}>Plizio Matek Teszt</a> – Fejszámolás és tesztelés 1–8. osztályig</li>
            <li style={s.li}><a href="/blog/matek-teszt-online/" style={s.relLink}>Online Matek Teszt</a> – Miért hatékony a napi tesztelés?</li>
            <li style={s.li}><a href="/quickpick/" style={s.relLink}>Quick Pick</a> – Gyors számfelismerés fejlesztése</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
