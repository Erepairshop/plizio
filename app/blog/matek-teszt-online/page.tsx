import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Matek Teszt Ingyen – 1–8. osztály | Plizio Blog",
  description:
    "Ingyenes online matek teszt általános iskolásoknak, 1–8. osztályig. Összeadás, kivonás, szorzás, osztás – kérdések a tananyag szerint, regisztráció nélkül.",
  alternates: { canonical: "https://plizio.com/blog/matek-teszt-online/" },
  openGraph: {
    title: "Online Matek Teszt Ingyen – 1–8. osztály | Plizio Blog",
    description:
      "Ingyenes online matek teszt általános iskolásoknak, 1–8. osztályig. Regisztráció nélkül, bármely eszközön.",
    url: "https://plizio.com/blog/matek-teszt-online/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hány éves kortól ajánlott az online matek teszt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Plizio matek teszt 1. osztálytól (kb. 6-7 éves kortól) 8. osztályig (13-14 éves kor) minden korosztálynak ajánlott. Az osztálynak megfelelő szintet érdemes választani, hogy sem túl könnyű, sem túl nehéz ne legyen.",
      },
    },
    {
      "@type": "Question",
      name: "Kell-e regisztráció a matek teszthez?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nem, a Plizio minden játéka és tesztje regisztráció nélkül elérhető. Csak megnyitod a böngészőben és azonnal elkezdhetsz játszani. Az elért eredmények és kártyák a böngészőben tárolódnak.",
      },
    },
    {
      "@type": "Question",
      name: "Mennyit kell naponta matekot gyakorolni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Napi 15-20 perc rendszeres gyakorlás sokkal hatékonyabb, mint egy-egy hosszú tömbösített tanulás. Az agynak szüksége van az ismétlésre és a pihenőre, hogy az ismeretek hosszú távon megmaradjanak. A Plizio matek teszt erre a napi rövid, célzott gyakorlásra tökéletes.",
      },
    },
    {
      "@type": "Question",
      name: "Hogyan segít az online matek teszt a dolgozatokra való felkészülésben?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Az online matek teszt szimulál egy dolgozat-helyzetet: időnyomás, egymást követő kérdések, azonnali értékelés. Ez csökkenti a tesztszorongást, mert a gyerek már ismeri az érzést. A fejadás (Kopfrechnen) típusú kérdések pontosan azt az automatikus felidézést fejlesztik, ami dolgozat közben nélkülözhetetlen.",
      },
    },
    {
      "@type": "Question",
      name: "Milyen matektémákat fed le a teszt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Összeadás, kivonás, szorzás, osztás, szöveges feladatok, törtek, tizedestörtek, arányok, geometria, alapszintű algebra – osztályonként az aktuális tananyagnak megfelelően. A nehézségi szint automatikusan igazodik a kiválasztott évfolyamhoz.",
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
    { "@type": "ListItem", position: 3, name: "Online Matek Teszt", item: "https://plizio.com/blog/matek-teszt-online/" },
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
  h2: { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 12, color: "#00FF88" } as React.CSSProperties,
  h3: { fontSize: 19, fontWeight: 700, marginTop: 28, marginBottom: 8, color: "#00D4FF" } as React.CSSProperties,
  p: { lineHeight: 1.75, marginBottom: 16, color: "#d0d0e8" } as React.CSSProperties,
  ul: { paddingLeft: 24, marginBottom: 16 } as React.CSSProperties,
  li: { lineHeight: 1.75, marginBottom: 6, color: "#d0d0e8" } as React.CSSProperties,
  tip: { background: "#0d1a0d", border: "1px solid #00FF88", borderRadius: 10, padding: "16px 20px", marginBottom: 20, color: "#a0d8a0", lineHeight: 1.7 } as React.CSSProperties,
  cta: { background: "linear-gradient(135deg, #0a1a0a, #12122A)", border: "2px solid #00FF88", borderRadius: 16, padding: "32px", textAlign: "center", marginTop: 48 } as React.CSSProperties,
  ctaT: { fontSize: 22, fontWeight: 700, marginBottom: 12 } as React.CSSProperties,
  ctaTx: { color: "#b0b0cc", marginBottom: 24, lineHeight: 1.6 } as React.CSSProperties,
  ctaBtn: { display: "inline-block", background: "linear-gradient(90deg, #00FF88, #00D4FF)", color: "#0A0A1A", fontWeight: 700, fontSize: 17, padding: "14px 32px", borderRadius: 10, textDecoration: "none" } as React.CSSProperties,
  faq: { marginTop: 48 } as React.CSSProperties,
  faqItem: { borderBottom: "1px solid #1a1a3a", paddingBottom: 20, marginBottom: 20 } as React.CSSProperties,
  faqQ: { fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#e0e0ff" } as React.CSSProperties,
  faqA: { color: "#b0b0cc", lineHeight: 1.7 } as React.CSSProperties,
  related: { marginTop: 40, padding: "20px 24px", background: "#12122A", borderRadius: 12 } as React.CSSProperties,
  relLink: { color: "#00FF88", textDecoration: "none", fontWeight: 600 } as React.CSSProperties,
  table: { width: "100%", borderCollapse: "collapse" as const, marginBottom: 24, fontSize: 15 } as React.CSSProperties,
  th: { background: "#12122A", padding: "10px 14px", textAlign: "left" as const, color: "#00FF88", fontWeight: 700, borderBottom: "2px solid #1a1a4a" } as React.CSSProperties,
  td: { padding: "9px 14px", borderBottom: "1px solid #1a1a3a", color: "#d0d0e8" } as React.CSSProperties,
};

export default function MatekTesztOnlinePage() {
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
          <span style={{ color: "#e0e0ff" }}>Online Matek Teszt</span>
        </nav>

        <h1 style={s.h1}>Online Matek Teszt Ingyen – 1–8. osztály, Regisztráció Nélkül</h1>
        <p style={s.meta}>Olvasási idő: ~6 perc · 1–8. osztály · Böngészőben fut, fiók nélkül</p>

        <p style={s.intro}>
          Az online matek teszt az egyik legjobb módszer arra, hogy a gyerekek rendszeresen, de szórakoztatóan
          gyakorolják a matematikát. Nem kell munkafüzet, nem kell ceruzát hegyezni – egyszerűen megnyitod
          a böngészőt, kiválasztasz egy osztályszintet, és máris jönnek a kérdések. Ez a cikk megmutatja,
          miért hatékony ez a módszer, hogyan érdemes beilleszteni a napi rutinba, és mit kell keresni
          egy jó online matek tesztben.
        </p>

        <h2 style={s.h2}>Miért hatékony az online matek teszt?</h2>
        <p style={s.p}>
          A hagyományos házi feladat és a munkafüzet mellett az online matek tesztek három dolgot
          nyújtanak, amit papír alapon nehéz megvalósítani:
        </p>
        <ul style={s.ul}>
          <li style={s.li}>
            <strong>Azonnali visszajelzés:</strong> a gyerek azonnal látja, hogy helyes volt-e a válasza,
            nem kell másnap megvárni a tanár javítását. Ez a gyors visszajelzési hurok sokkal gyorsabb
            tanulást tesz lehetővé.
          </li>
          <li style={s.li}>
            <strong>Ismétlés érdekesebben:</strong> a szorzótáblát unalmas egymagában mondogatni,
            de ha pontokat gyűjtesz és kártyákat szerezhetsz, ugyanaz a gyakorlás sokkal tovább tart.
          </li>
          <li style={s.li}>
            <strong>Nincs dolgozatszorongás:</strong> a teszt-szituáció otthon, nyomás nélkül megismerve
            csökkenti a szorongást az igazi dolgozat előtt.
          </li>
        </ul>

        <h2 style={s.h2}>A Plizio Matek Teszt – osztályonként</h2>
        <p style={s.p}>
          A Plizio matek teszt 1. osztálytól 8. osztályig kínál kérdéssort. Minden szint az adott
          tananyaghoz igazított feladatokat tartalmaz – nem véletlenszerű kérdéseket kap a gyerek,
          hanem pontosan azt, amit az iskolában is tanul.
        </p>

        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Osztály</th>
              <th style={s.th}>Fő témák</th>
              <th style={s.th}>Számkör</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1. osztály", "Összeadás, kivonás, összehasonlítás", "1–20"],
              ["2. osztály", "Összeadás, kivonás, szorzás bevezetése", "1–100"],
              ["3. osztály", "Szorzás, osztás, szöveges feladatok", "1–1000"],
              ["4. osztály", "Írásbeli műveletek, törtek alapjai", "1–10 000"],
              ["5. osztály", "Törtek, tizedestörtek, arányok", "egész és tört számok"],
              ["6. osztály", "Negatív számok, százalék, arányos számítás", "valós számok"],
              ["7. osztály", "Algebra, egyenletek, Pitagorasz", "algebra"],
              ["8. osztály", "Függvények, valószínűség, kombinatorika", "haladó"],
            ].map(([o, t, sz]) => (
              <tr key={o}>
                <td style={s.td}><strong>{o}</strong></td>
                <td style={s.td}>{t}</td>
                <td style={s.td}>{sz}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={s.h2}>Hogyan épül fel egy matek teszt?</h2>
        <p style={s.p}>
          Minden teszt 10 kérdésből áll. A kérdések vegyes típusúak: fejszámolás, szöveges feladatok,
          geometria és logikai feladatok váltakoznak. Az időmérő a háttérben fut – aki gyorsan és
          helyesen válaszol, több pontot szerez, ami jobb ritkaságú kártyát eredményez a végén.
        </p>
        <p style={s.p}>
          A kártyagyűjtési rendszer nem véletlen: a gamifikáció az egyik legjobb módszer arra, hogy
          a gyerekek újra és újra visszatérjenek a gyakorláshoz. Egy bronz kártya szerzése után
          mindenki megpróbálja elérni az ezüstöt, majd az aranyat – közben sokat gyakorol, anélkül
          hogy "tanulásnak" érezné.
        </p>

        <h2 style={s.h2}>Napi rutin: hogyan illeszd be a matek tesztet?</h2>
        <p style={s.p}>
          A kutatások egyértelműen mutatják: a rövid, napi rendszerességű gyakorlás hatékonyabb, mint
          a tömbösített tanulás. Egy jó struktúra:
        </p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Reggel iskola előtt (5 perc):</strong> egy gyors teszt a mai anyagból – bemelegítés az agynak</li>
          <li style={s.li}><strong>Házi feladat előtt (10 perc):</strong> az adott heti témából egy teljes teszt, hogy a fogalmak frissek maradjanak</li>
          <li style={s.li}><strong>Dolgozat előtti napon (15-20 perc):</strong> 2-3 teszt gyors egymásután – célzott ismétlés</li>
        </ul>
        <div style={s.tip}>
          <strong>Szülői tipp:</strong> Az első néhány alkalommal csináljátok együtt. Látni fogod,
          hol akad el a gyerek – ez értékesebb információ, mint bármely munkafüzeti jegy.
          Kérdezz rá a "miért"-re, ne csak arra, hogy helyes volt-e.
        </div>

        <h2 style={s.h2}>Fejszámolás – a legfontosabb alapkészség</h2>
        <p style={s.p}>
          A matek teszt kérdéseinek egy jelentős része fejszámolás (Kopfrechnen) típusú. Ez nem véletlen:
          az automatikus fejszámolás az az alapkészség, amelyre az összes többi matematika épül.
          Aki 3×7-et gondolkodás nélkül tudja, annak szabadul fel mentális kapacitása a bonyolultabb
          feladatok megoldásához.
        </p>
        <p style={s.p}>
          Az online teszt időnyomása tudatosan van beleépítve: nem az a cél, hogy stresszelje a gyereket,
          hanem hogy az automatizálást fejlessze. Minél többször csinálod ugyanazt a típusú feladatot
          időnyomás alatt, annál gyorsabb lesz a felidézés – pontosan úgy, ahogy az ütemesen haladó
          dolgozatban szükséges.
        </p>

        <h2 style={s.h2}>AstroMath: játékos matek, szigetenként haladva</h2>
        <p style={s.p}>
          Ha a száraz tesztelés helyett inkább egy teljes kalandot keres a gyerek, az <a href="/astromath/1/" style={s.relLink}>AstroMath</a> egy
          progresszív felfedező játék, ahol szigetenként haladva, az iskolai sorrendben sajátíthatók
          el a matematikai fogalmak. Minden sziget 3 missziót tartalmaz, a végén csillagjutalmakkal.
          A teszt és az AstroMath jól kiegészítik egymást: a teszt a gyorsaságot és pontosságot méri,
          az AstroMath a megértést és a haladást jutalmazza.
        </p>

        <div style={s.cta}>
          <p style={s.ctaT}>Próbáld ki a Matek Tesztet most!</p>
          <p style={s.ctaTx}>
            Ingyenes, regisztráció nélkül, bármely okostelefonon vagy számítógépen fut.
            Válaszd ki az osztályodat és kezdd el!
          </p>
          <a href="/mathtest/" style={s.ctaBtn}>Matek Teszt indítása →</a>
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
            <li style={s.li}><a href="/mathtest/" style={s.relLink}>Plizio Matek Teszt</a> – 1–8. osztályos fejszámolás és feladatok</li>
            <li style={s.li}><a href="/astromath/1/" style={s.relLink}>AstroMath – 1. osztály</a> – Játékos matek felfedező kaland</li>
            <li style={s.li}><a href="/quickpick/" style={s.relLink}>Quick Pick</a> – Gyors számfelismerés és fejszámolás</li>
            <li style={s.li}><a href="/numberrush/" style={s.relLink}>Number Rush</a> – Számok sorrendbe rakása időnyomás alatt</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
