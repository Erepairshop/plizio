const jsonLdWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Test Limba Română Online – Gratuit pentru Clasa I–VIII",
  description: "Test interactiv de limba română pentru clasa I–VIII. Toate temele din curriculum. Fără înregistrare, începe imediat.",
  url: "https://plizio.com/teste-romana/",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: "https://plizio.com/" },
      { "@type": "ListItem", position: 2, name: "Test Limba Română", item: "https://plizio.com/teste-romana/" },
    ],
  },
};

const GRADES = [
  { n: 1, age: "6–7", summary: "Alfabetul, silabe, sunete, citire și scriere" },
  { n: 2, age: "7–8", summary: "Ortografie, părți de vorbire, propoziția, text narativ" },
  { n: 3, age: "8–9", summary: "Substantiv, verb, adjectiv, propoziție dezvoltată" },
  { n: 4, age: "9–10", summary: "Analiză gramaticală, compunere, ortografie avansată" },
  { n: 5, age: "10–11", summary: "Morfologie, fonetică, lexic, sintaxă" },
  { n: 6, age: "11–12", summary: "Morfologie avansată, text literar, stilistică" },
  { n: 7, age: "12–13", summary: "Sintaxă avansată, figuri de stil, comentariu literar" },
  { n: 8, age: "13–14", summary: "Evaluare națională, sintaxă și morfologie completă" },
];

export default function TestLimbaRomanaHubPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0A0A1A", color: "white" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />

      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/40 mb-6">
          <a href="/" className="hover:text-white/70 transition-colors">Acasă</a>
          <span>›</span>
          <span className="text-white/70">Test Limba Română</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: "rgba(59,130,246,0.1)", color: "#3B82F6", border: "1px solid rgba(59,130,246,0.25)" }}
          >
            Clasa I–VIII · Gratuit · Fără cont
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Test Limba Română Online –{" "}
            <span style={{ color: "#00FF88" }}>Gratuit pentru Clasa I–VIII</span>
          </h1>
          <p className="text-white/65 text-base leading-relaxed mb-4">
            Plizio oferă teste interactive de limba română pentru toate clasele de la I la VIII. Exersează ortografia, gramatica, lectura și scriera pe care o vei întâlni la școală, direct în browser, fără a fi nevoie de înregistrare.
          </p>
          <p className="text-white/65 text-sm leading-relaxed">
            Testele sunt structurate după programele școlare oficiale și oferă feedback imediat. Antrenează-te zilnic și vei vedea cum se îmbunătățesc competențele tale în limba română!
          </p>
          <a
            href="/romaniantest"
            className="inline-flex items-center gap-2 mt-5 px-6 py-3 rounded-2xl font-black text-black text-sm"
            style={{ background: "linear-gradient(135deg, #3B82F6, #00FF88)" }}
          >
            ▶ Începe testul de Română
          </a>
        </div>

        {/* Grade Grid */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-2" style={{ color: "#3B82F6" }}>
            Alege clasa pentru test
          </h2>
          <p className="text-white/50 text-sm mb-5">
            Selectează clasa ta pentru teste cu exerciții adaptate la nivelul tău de învățare:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {GRADES.map((g) => (
              <a
                key={g.n}
                href={`/teste-romana/clasa-${g.n}/`}
                className="flex items-start gap-3 p-4 rounded-2xl group transition-all hover:scale-[1.01]"
                style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0"
                  style={{ background: "rgba(59,130,246,0.12)", color: "#3B82F6" }}
                >
                  {g.n}
                </div>
                <div>
                  <div className="font-black text-white text-sm group-hover:text-[#3B82F6] transition-colors">
                    Test Limba Română Clasa {g.n}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">Vârstă {g.age} · {g.summary}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* De ce sunt importante */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#B44DFF" }}>
            De ce sunt importante testele de limba română online
          </h2>
          <div className="space-y-4 text-white/65 text-sm leading-relaxed">
            <p>
              Exercitarea regulată a limbii române ajută elevii să consolideze cunoștințele și să se pregătească pentru teste și examene școlare. Prin antrenament constant, se dezvoltă capacitățile de scriere, lectură și înțelegere a textelor.
            </p>
            <p>
              Testele online oferă avantaje importante comparativ cu exercițiile tradiționale. Elevii primesc feedback imediat, pot retesta oricând și pot urmări progresul lor în timp. Totul se petrece într-un mediu interactiv și prietenos.
            </p>
            <p>
              Serviciul Plizio este 100% gratuit și nu necesită înregistrare. Orice elev poate începe imediat, de pe orice dispozitiv cu acces la internet. Nu are nevoie nici de descărcări, nici de instalații complicate.
            </p>
            <p>
              Testele sunt optimizate pentru telefoane, tablete și calculatoare. Poți exersa limba română oricând și oriunde – acasă, la școală sau în cale spre aceasta. Interfața intuitivă face ca procesul de învățare să fie plăcut și motivant.
            </p>
          </div>
        </section>

        {/* Teme Übersicht */}
        <section
          className="mb-10 p-5 rounded-2xl"
          style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <h2 className="text-2xl font-black mb-4" style={{ color: "#FFD700" }}>
            Ce teme se exersează?
          </h2>
          <div className="space-y-3 text-sm text-white/65 leading-relaxed">
            <p>
              <strong className="text-white">Clasele I–IV (Ciclul primar):</strong> Alfabetul și pronunția, silabisire, recunoașterea cuvintelor, construcția propozițiilor simple, ortografia de bază, semnele de punctuație, textele narative și descriptive, vocabular tematic.
            </p>
            <p>
              <strong className="text-white">Clasele V–VIII (Ciclul gimnazial):</strong> Morfologie (gen, număr, persoană, caz), analiză morfologică și sintactică, figuri de stil și expresivitate, analiza de text literar, compuneri și redactări, pregătire pentru Evaluarea Națională.
            </p>
          </div>
        </section>

        {/* Tipuri Übersicht */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#00FF88" }}>
            Sfaturi pentru exersare eficientă
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "📅", tip: "Exersează în fiecare zi, chiar și 10-15 minute zilnic sunt benefice pentru consolidarea cunoștințelor." },
              { icon: "🎯", tip: "Concentrează-te pe temele unde ai dificultăți. Retestează-te după ce studiezi o temă nouă." },
              { icon: "🔄", tip: "Repetă testele pe care le-ai făcut mai slab. Progresul vine cu practică constantă." },
              { icon: "📊", tip: "Monitorizează progresul tău. Fiecare test îți arată punctele forte și ariile de îmbunătățire." },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 rounded-xl"
                style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <p className="text-white/60 text-xs leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-10">
          <h2 className="text-xl font-black mb-4 text-white/80">Alege direct clasa</h2>
          <div className="flex flex-wrap gap-2">
            {GRADES.map((g) => (
              <a
                key={g.n}
                href={`/teste-romana/clasa-${g.n}/`}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-80"
                style={{ background: "rgba(59,130,246,0.1)", color: "#3B82F6", border: "1px solid rgba(59,130,246,0.25)" }}
              >
                Clasa {g.n}
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div
          className="text-center py-6 rounded-2xl"
          style={{ background: "rgba(0,255,136,0.04)", border: "1px solid rgba(0,255,136,0.12)" }}
        >
          <p className="text-white/60 text-sm mb-3">Gata? Pornește testul tău de limba română personalizat!</p>
          <a
            href="/romaniantest"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-black text-base"
            style={{ background: "linear-gradient(135deg, #3B82F6, #00FF88)" }}
          >
            🚀 Începe testul de Română
          </a>
          <p className="text-white/25 text-xs mt-3">Gratuit · Fără cont · Toate clasele · Disponibil imediat</p>
        </div>

      </div>
    </main>
  );
}
