import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matematică prin Joc – Aventura AstroMath | Plizio Blog",
  description:
    "AstroMath este un joc gratuit de aventură matematică pentru clasele 1–8. Progresezi insulă cu insulă, urmând programa școlară, fără înregistrare.",
  alternates: { canonical: "https://plizio.com/blog/matematica-astromath/" },
  openGraph: {
    title: "Matematică prin Joc – Aventura AstroMath | Plizio Blog",
    description:
      "Joc de aventură matematică gratuit pentru clasele 1–8. Progresezi insulă cu insulă, în ordinea programei școlare.",
    url: "https://plizio.com/blog/matematica-astromath/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ce este AstroMath?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AstroMath este un joc de aventură matematică gratuit, care rulează în browser, destinat claselor 1–8. Jucătorul navighează pe o hartă astronomică, unde fiecare insulă reprezintă un capitol din programa școlară de matematică. Fiecare insulă conține 3 misiuni în diferite tipuri de jocuri: quiz, memorie, ordonare și potrivire.",
      },
    },
    {
      "@type": "Question",
      name: "Ce vârstă este potrivită pentru AstroMath?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AstroMath este disponibil de la clasa 1 (aproximativ 6-7 ani) până la clasa 8 (13-14 ani). Fiecare an școlar are propria sa lume de insule, adaptată materiei din acel an. Versiunea pentru clasa 1 începe cu noțiunile de bază ale adunării și scăderii, versiunea pentru clasa 8 se încheie cu algebră avansată și funcții.",
      },
    },
    {
      "@type": "Question",
      name: "Cum diferă AstroMath de un test de matematică obișnuit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un test de matematică tradițional măsoară viteza și precizia – întrebările vin una după alta, la final primești rezultatul. AstroMath oferă o experiență de aventură completă: hartă, insule, misiuni, recompense cu stele și patru tipuri diferite de jocuri alternând. Scopul nu este evaluarea, ci recompensarea înțelegerii și a progresului.",
      },
    },
    {
      "@type": "Question",
      name: "AstroMath urmează programa școlară?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, acesta este cel mai mare avantaj al AstroMath. Ordinea insulelor urmează curricula școlară – nu grupate pe teme, ci în ordine cronologică, exact cum se predă la școală. De exemplu, în lumea clasei 1, mai întâi vine numărarea și compararea (1-10), apoi adunarea, scăderea, iar la final unitățile de măsură și datele.",
      },
    },
    {
      "@type": "Question",
      name: "Este nevoie de cont pentru AstroMath?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nu, AstroMath este accesibil fără înregistrare. Progresul se salvează automat în browser, astfel poți continua oricând de unde ai rămas – pe același dispozitiv.",
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
    { "@type": "ListItem", position: 3, name: "Matematică AstroMath", item: "https://plizio.com/blog/matematica-astromath/" },
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

export default function MatematicaAstromathPage() {
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
          <span style={{ color: "#e0e0ff" }}>Matematică AstroMath</span>
        </nav>

        <h1 style={s.h1}>Matematică prin Joc – Aventura AstroMath pentru Clasele 1–8</h1>
        <p style={s.meta}>Timp de citire: ~6 minute · Clasa 1–8 · Gratuit, fără înregistrare</p>

        <p style={s.intro}>
          Cum ar fi dacă învățatul matematicii ar semăna cu o aventură adevărată? Nu repetiție plictisitoare,
          nu teme obligatorii – ci o călătorie de explorare în care fiecare misiune îndeplinită te aduce
          mai aproape de următoarea insulă. Exact asta oferă AstroMath: un joc gratuit de aventură
          matematică pentru clasele 1–8, care urmează programa școlară, ghidând copiii de la noțiuni
          de bază până la teme avansate.
        </p>

        <h2 style={s.h2}>Ce este AstroMath?</h2>
        <p style={s.p}>
          AstroMath este un joc de explorare matematică animat, care rulează în browser. Jucătorul
          navighează pe o hartă astronomică, unde fiecare insulă reprezintă un capitol din matematica
          școlară. Fiecare insulă conține 3 misiuni – acestea trebuie finalizate în diferite tipuri
          de jocuri: quiz, joc de memorie, ordonarea numerelor și exerciții de potrivire alternează.
        </p>
        <p style={s.p}>
          Cheia sistemului: <strong>nu se poate sări</strong>. Adunarea vine înaintea scăderii,
          înmulțirea înaintea împărțirii, fracțiile înaintea rapoartelor. Exact cum se predă la
          școală. Nu este un generator aleatoriu de exerciții – ci un traseu de învățare atent
          planificat, unde fiecare pas se construiește pe cel anterior.
        </p>

        <h2 style={s.h2}>Lumea insulelor – Clasa 1 (exemplu)</h2>
        <p style={s.p}>
          AstroMath pentru clasa 1 conține 9 insule care urmează exact materia primului an de școală:
        </p>

        {[
          { num: "1.", name: "Insula Numărării", topic: "Numărare, comparare (1–10)", desc: "Primele numere, ordonare, comparații mai mic – mai mare." },
          { num: "2.", name: "Insula Adunării", topic: "Adunare (1–10)", desc: "Adunarea numerelor, comutativitate, descompunerea numerelor." },
          { num: "3.", name: "Insula Scăderii", topic: "Scădere (1–10)", desc: "Introducerea scăderii, completare până la 10." },
          { num: "4.", name: "Dublu și Jumătate", topic: "Dublul și jumătatea (1–18)", desc: "Dublarea și înjumătățirea numerelor." },
          { num: "5.", name: "Numere până la 20", topic: "Numărare, șiruri (11–20)", desc: "Numere de două cifre, valoarea pozițională, șiruri de numere." },
          { num: "6.", name: "Insula Problemelor", topic: "Probleme cu text (1–20)", desc: "Adunare și scădere integrate în povești reale." },
          { num: "7.", name: "Insula Formelor", topic: "Geometrie, modele", desc: "Recunoașterea figurilor geometrice, continuarea modelelor." },
          { num: "8.", name: "Insula Măsurătorilor", topic: "Ceas, bani, greutăți", desc: "Citirea ceasului analogic, monede, unități de măsură." },
          { num: "9.", name: "Date și Șiruri", topic: "Date, șiruri (1–20)", desc: "Interpretarea datelor, recunoașterea șirurilor." },
        ].map((island) => (
          <div key={island.num} style={s.islandCard}>
            <p style={s.islandTitle}>{island.num} {island.name}</p>
            <p style={s.islandMeta}>{island.topic}</p>
            <p style={s.islandText}>{island.desc}</p>
          </div>
        ))}

        <h2 style={s.h2}>Sistemul de stele – motivație continuă</h2>
        <p style={s.p}>
          Fiecare misiune poate aduce 1–3 stele în funcție de rezultatul obținut. Stelele apar și
          în rezumatul insulei – astfel copilul vede mereu unde se află și unde merită să revină
          pentru un rezultat mai bun. Acest sistem consolidează motivația intrinsecă: nu părintele
          spune „fă-o din nou" – propriile 2 stele imperfecte motivează reîncercarea.
        </p>
        <div style={s.tip}>
          <strong>Experiența părinților și profesorilor:</strong> Sistemul de stele funcționează
          în special la copiii care suferă de anxietate la teste. În AstroMath nu există
          „corigență" – se poate reîncerca oricând, cel mai bun rezultat rămâne. Acest mediu
          sigur este exact ceea ce mulți copii au nevoie pentru a se împrieteni cu matematica.
        </div>

        <h2 style={s.h2}>4 tipuri de jocuri – varietate împotriva monotoniei</h2>
        <p style={s.p}>
          Unul dintre cele mai mari avantaje ale AstroMath este că exersează aceeași materie
          în patru moduri diferite. Aceasta nu doar reduce plictiseala – cercetările arată că
          abordarea cunoștințelor din mai multe unghiuri duce la o înțelegere mai profundă:
        </p>
        <ul style={s.ul}>
          <li style={s.li}><strong>Quiz Orbit:</strong> 10 întrebări, 4 variante de răspuns – format clasic de quiz cu cronometru</li>
          <li style={s.li}><strong>Potrivire Stele:</strong> asocierea întrebărilor cu răspunsurile prin atingere, în 5 runde</li>
          <li style={s.li}><strong>Sortatorul Gravitațional:</strong> ordonarea numerelor prin glisare pe ecran</li>
          <li style={s.li}><strong>Quiz Gaura Neagră:</strong> varianta quiz cu atmosferă întunecată, mai tensionantă</li>
        </ul>

        <h2 style={s.h2}>AstroMath vs. Testul de Matematică – când folosești care?</h2>
        <p style={s.p}>
          Cele două instrumente se completează reciproc, nu concurează:
        </p>
        <ul style={s.ul}>
          <li style={s.li}><strong>AstroMath</strong> – când copilul învață o temă nouă sau și-a pierdut motivația pentru matematică. Forma de aventură readuce entuziasmul.</li>
          <li style={s.li}><strong><a href="/mathtest/" style={s.relLink}>Testul de Matematică</a></strong> – când materia este deja cunoscută și trebuie dezvoltate viteza și precizia. Ideal înainte de lucrări.</li>
          <li style={s.li}><strong>Ambele</strong> – în rutina săptămânală: AstroMath de 2-3 ori pe săptămână pentru materia nouă, Testul de Matematică zilnic 5-10 minute pentru calculul mental.</li>
        </ul>

        <div style={s.cta}>
          <p style={s.ctaT}>Pornește aventura AstroMath!</p>
          <p style={s.ctaTx}>
            Gratuit, fără înregistrare, funcționează pe orice smartphone sau computer.
            Lumea insulelor pentru clasa 1 este disponibilă imediat.
          </p>
          <a href="/astromath/1/" style={s.ctaBtn}>AstroMath – Clasa 1 →</a>
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
            <li style={s.li}><a href="/astromath/1/" style={s.relLink}>AstroMath – Clasa 1</a> – Aventură de explorare matematică</li>
            <li style={s.li}><a href="/mathtest/" style={s.relLink}>Plizio Test Matematică</a> – Calcul mental și exerciții clasa 1–8</li>
            <li style={s.li}><a href="/blog/test-matematica-online/" style={s.relLink}>Test Matematică Online</a> – De ce funcționează testarea zilnică?</li>
            <li style={s.li}><a href="/quickpick/" style={s.relLink}>Quick Pick</a> – Recunoaștere rapidă a numerelor</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
