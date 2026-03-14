import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Matematică Online Gratuit – Clasa 1–8 | Plizio Blog",
  description:
    "Test matematică online gratuit pentru clasele 1–8. Adunare, scădere, înmulțire, împărțire – întrebări adaptate programei școlare, fără înregistrare.",
  alternates: { canonical: "https://plizio.com/blog/test-matematica-online/" },
  openGraph: {
    title: "Test Matematică Online Gratuit – Clasa 1–8 | Plizio Blog",
    description:
      "Test matematică online gratuit pentru clasele 1–8. Fără înregistrare, funcționează pe orice dispozitiv.",
    url: "https://plizio.com/blog/test-matematica-online/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "De ce vârstă este recomandat testul de matematică online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Testul de matematică Plizio este recomandat de la clasa 1 (aproximativ 6-7 ani) până la clasa 8 (13-14 ani). Este important să alegi nivelul corespunzător clasei pentru ca exercițiile să fie nici prea ușoare, nici prea dificile.",
      },
    },
    {
      "@type": "Question",
      name: "Este nevoie de înregistrare pentru testul de matematică?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nu, toate jocurile și testele Plizio sunt accesibile fără cont și fără înregistrare. Deschizi browserul și începi imediat. Rezultatele și cărțile câștigate se salvează local în browser.",
      },
    },
    {
      "@type": "Question",
      name: "Cât de mult ar trebui să exerseze un copil matematica zilnic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "15-20 de minute de practică zilnică regulată este mult mai eficient decât sesiuni lungi rare. Creierul are nevoie de repetiție și odihnă pentru ca informațiile să se consolideze pe termen lung. Testul de matematică Plizio este perfect pentru această practică zilnică scurtă și țintită.",
      },
    },
    {
      "@type": "Question",
      name: "Ce subiecte de matematică acoperă testul?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adunare, scădere, înmulțire, împărțire, probleme cu text, fracții, zecimale, rapoarte, geometrie și algebră de bază – adaptate pentru fiecare clasă conform programei școlare. Nivelul de dificultate se ajustează automat în funcție de clasa selectată.",
      },
    },
    {
      "@type": "Question",
      name: "Cum ajută testul online la pregătirea pentru lucrări?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Testul online simulează situația unei lucrări: presiune de timp, întrebări consecutive, evaluare imediată. Aceasta reduce anxietatea față de teste, deoarece copilul este deja familiarizat cu sentimentul. Calculul mental rapid – exact ceea ce este necesar în timpul lucrărilor – se dezvoltă prin practică repetată.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Acasă", item: "https://plizio.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://plizio.com/blog/" },
    { "@type": "ListItem", position: 3, name: "Test Matematică Online", item: "https://plizio.com/blog/test-matematica-online/" },
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

export default function TestMatematicaOnlinePage() {
  return (
    <main style={s.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={s.wrap}>
        <nav style={s.bc} aria-label="Breadcrumb">
          <a href="/" style={s.bcLink}>Acasă</a>
          <span style={s.sep}>›</span>
          <a href="/blog/" style={s.bcLink}>Blog</a>
          <span style={s.sep}>›</span>
          <span style={{ color: "#e0e0ff" }}>Test Matematică Online</span>
        </nav>

        <h1 style={s.h1}>Test Matematică Online Gratuit – Clasa 1–8, Fără Înregistrare</h1>
        <p style={s.meta}>Timp de citire: ~6 minute · Clasa 1–8 · Funcționează în browser, fără cont</p>

        <p style={s.intro}>
          Un test de matematică online gratuit este unul dintre cele mai eficiente instrumente pentru
          exersarea zilnică a matematicii. Nu ai nevoie de caiet, nu ai nevoie de creion – deschizi
          browserul, alegi clasa și întrebările vin imediat. Acest articol explică de ce această
          metodă funcționează, cum să o integrezi în rutina zilnică și ce să cauți într-un test
          de matematică online de calitate.
        </p>

        <h2 style={s.h2}>De ce funcționează testul de matematică online?</h2>
        <p style={s.p}>
          Față de temele tradiționale și caietele de exerciții, testele de matematică online oferă
          trei avantaje greu de realizat pe hârtie:
        </p>
        <ul style={s.ul}>
          <li style={s.li}>
            <strong>Feedback imediat:</strong> copilul vede pe loc dacă răspunsul este corect, fără
            să aștepte până a doua zi corectarea profesorului. Această buclă rapidă de feedback
            accelerează semnificativ învățarea.
          </li>
          <li style={s.li}>
            <strong>Repetiție mai atrăgătoare:</strong> tabla înmulțirii e plictisitor de recitat
            singur, dar dacă câștigi puncte și cărți colecționabile, aceeași practică devine
            mult mai lungă și mai plăcută.
          </li>
          <li style={s.li}>
            <strong>Fără anxietate față de teste:</strong> a te familiariza cu situația unui test
            acasă, fără presiune, reduce stresul din fața lucrării reale de la școală.
          </li>
        </ul>

        <h2 style={s.h2}>Testul de Matematică Plizio – pe clase</h2>
        <p style={s.p}>
          Testul de matematică Plizio oferă seturi de întrebări de la clasa 1 până la clasa 8.
          Fiecare nivel conține exerciții adaptate materiei predate – copilul nu primește întrebări
          aleatorii, ci exact ce se studiază la școală în acel an.
        </p>

        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Clasa</th>
              <th style={s.th}>Teme principale</th>
              <th style={s.th}>Domeniu numeric</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Clasa 1", "Adunare, scădere, comparare", "1–20"],
              ["Clasa 2", "Adunare, scădere, introducere înmulțire", "1–100"],
              ["Clasa 3", "Înmulțire, împărțire, probleme cu text", "1–1000"],
              ["Clasa 4", "Operații scrise, fracții elementare", "1–10 000"],
              ["Clasa 5", "Fracții, zecimale, rapoarte", "numere întregi și fracții"],
              ["Clasa 6", "Numere negative, procente, proporții", "numere reale"],
              ["Clasa 7", "Algebră, ecuații, Pitagora", "algebră"],
              ["Clasa 8", "Funcții, probabilitate, combinatorică", "avansat"],
            ].map(([c, t, d]) => (
              <tr key={c}>
                <td style={s.td}><strong>{c}</strong></td>
                <td style={s.td}>{t}</td>
                <td style={s.td}>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={s.h2}>Cum este structurat un test?</h2>
        <p style={s.p}>
          Fiecare test conține 10 întrebări. Tipurile de întrebări sunt variate: calcul mental,
          probleme cu text, geometrie și logică se alternează. Un cronometru rulează în fundal –
          cine răspunde corect și rapid câștigă mai multe puncte, ceea ce duce la obținerea unor
          cărți colecționabile de raritate mai mare la final.
        </p>
        <p style={s.p}>
          Sistemul de colectare a cărților nu este întâmplător: gamificarea este una dintre cele
          mai eficiente metode prin care copiii revin în mod repetat la exersare. După o carte de
          bronz, toată lumea încearcă să obțină argintul, apoi aurul – practicând mult matematică
          fără să simtă că „învață".
        </p>

        <h2 style={s.h2}>Rutina zilnică: cum integrezi testul de matematică?</h2>
        <p style={s.p}>
          Cercetările arată clar: practica zilnică scurtă și regulată este mai eficientă decât
          sesiunile lungi rare. O structură bună:
        </p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Dimineața înainte de școală (5 min):</strong> un test rapid din materia zilei – încălzire pentru creier</li>
          <li style={s.li}><strong>Înainte de teme (10 min):</strong> un test complet din tema săptămânii curente</li>
          <li style={s.li}><strong>Cu o zi înainte de lucrare (15-20 min):</strong> 2-3 teste consecutive – repetare țintită</li>
        </ul>
        <div style={s.tip}>
          <strong>Sfat pentru părinți:</strong> Primele câteva sesiuni faceți-le împreună. Vei
          vedea unde se blochează copilul – o informație mai valoroasă decât orice notă din caiet.
          Întreabă despre „de ce", nu doar dacă răspunsul a fost corect.
        </div>

        <h2 style={s.h2}>Calculul mental – competența de bază</h2>
        <p style={s.p}>
          O parte semnificativă a întrebărilor din testul de matematică sunt de tip calcul mental.
          Nu este întâmplător: calculul mental automat este abilitatea fundamentală pe care se
          construiesc toate celelalte competențe matematice. Cel care știe 3×7 fără să gândească
          eliberează capacitate mentală pentru rezolvarea problemelor complexe.
        </p>
        <p style={s.p}>
          Presiunea de timp din testul online este integrată deliberat: nu pentru a stresa copilul,
          ci pentru a dezvolta automatizarea. Cu cât exersezi mai des același tip de exercițiu sub
          presiunea timpului, cu atât mai rapidă devine reactualizarea – exact ce este necesar
          în lucrările cu ritm alert.
        </p>

        <h2 style={s.h2}>AstroMath: matematică prin joc, progresând insulă cu insulă</h2>
        <p style={s.p}>
          Dacă în locul testării simple copilul preferă o aventură completă, <a href="/astromath/1/" style={s.relLink}>AstroMath</a> este
          un joc de explorare progresivă unde, avansând insulă cu insulă, în ordinea programei școlare,
          se pot însuși conceptele matematice. Fiecare insulă conține 3 misiuni cu recompense de stele
          la final. Testul și AstroMath se completează reciproc: testul măsoară viteza și precizia,
          AstroMath recompensează înțelegerea și progresul.
        </p>

        <div style={s.cta}>
          <p style={s.ctaT}>Încearcă Testul de Matematică acum!</p>
          <p style={s.ctaTx}>
            Gratuit, fără înregistrare, funcționează pe orice smartphone sau computer.
            Alege clasa ta și începe!
          </p>
          <a href="/mathtest/" style={s.ctaBtn}>Pornește Testul de Matematică →</a>
        </div>

        <div style={s.faq}>
          <h2 style={{ ...s.h2, color: "white" }}>Întrebări Frecvente</h2>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={s.faqItem}>
              <p style={s.faqQ}>{item.name}</p>
              <p style={s.faqA}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div style={s.related}>
          <p style={{ fontWeight: 700, marginBottom: 12 }}>Jocuri și articole conexe:</p>
          <ul style={{ ...s.ul, marginBottom: 0 }}>
            <li style={s.li}><a href="/mathtest/" style={s.relLink}>Plizio Test Matematică</a> – Calcul mental și exerciții clasa 1–8</li>
            <li style={s.li}><a href="/astromath/1/" style={s.relLink}>AstroMath – Clasa 1</a> – Aventură de explorare matematică</li>
            <li style={s.li}><a href="/quickpick/" style={s.relLink}>Quick Pick</a> – Recunoaștere rapidă a numerelor</li>
            <li style={s.li}><a href="/numberrush/" style={s.relLink}>Number Rush</a> – Numere în ordine sub presiunea timpului</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
