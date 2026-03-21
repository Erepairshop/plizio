import Link from "next/link";

// ─── GRADE DATA ────────────────────────────────────────────────────────────────
const GRADE_DATA: Record<number, {
  age: string;
  topics: { icon: string; label: string }[];
  intro: string;
  deepDive: string[];
  faqs: { q: string; a: string }[];
}> = {
  1: {
    age: "6–7",
    topics: [
      { icon: "👤", label: "Körperteile & Sinne" },
      { icon: "🐕", label: "Haustiere" },
      { icon: "🦁", label: "Wilde Tiere" },
      { icon: "🌞", label: "Jahreszeiten & Wetter" },
      { icon: "👨‍👩‍👧", label: "Familie & Gemeinschaft" },
      { icon: "🚗", label: "Verkehr & Fortbewegung" },
    ],
    intro: "Mit unserem kostenlosen Sachkunde Test für Klasse 1 erkunden Erstklässler im Alter von 6–7 Jahren ihren Körper, Sinne, Tiere, Jahreszeiten und ihre Umwelt. Der Sachkunde Test Klasse 1 ist ideal zum spielerischen Entdecken der Welt – direkt im Browser, ohne Anmeldung.",
    deepDive: [
      "In der 1. Klasse steht das Erkunden des eigenen Körpers und der Sinne im Mittelpunkt: Kinder lernen Körperteile kennen, entdecken ihre fünf Sinne (Sehen, Hören, Riechen, Schmecken, Tasten) und verstehen, wie sie damit die Welt wahrnehmen. Unser Sachkunde Test Klasse 1 macht diese Selbstentdeckung spielerisch und interaktiv.",
      "Das Kennenlernen von Tieren ist ein faszinierendes Thema in Klasse 1: Kinder lernen Haustiere wie Hund, Katze und Kaninchen sowie wilde Tiere wie Löwe, Elefant und Eisbär unterscheiden. Sie erfahren, wo diese Tiere leben und wie sie sich fortbewegen. Mit dem Sachkunde Test Klasse 1 online werden diese Erkenntnisse spielerisch vertieft.",
      "Die Jahreszeiten und das Wetter prägen das Leben von Erstklässlern: Frühling, Sommer, Herbst und Winter bringen unterschiedliche Aktivitäten und Besonderheiten mit sich. Kinder beobachten Veränderungen in der Natur, lernen Wettererscheinungen kennen und verstehen einfache Zusammenhänge. Unser Test hilft dabei, diese Beobachtungen zu ordnen.",
      "Eltern und Lehrkräfte können den kostenlosen Sachkunde Test Klasse 1 jederzeit zum Üben oder zur Lernstandsüberprüfung einsetzen. Alle Aufgaben sind auf den Lehrplan der 1. Klasse abgestimmt, altersgerecht und spielerisch – ohne Download, ohne Account.",
    ],
    faqs: [
      { q: "Was lernt man in Sachkunde Klasse 1?", a: "In Klasse 1 lernen Kinder ihren Körper und ihre fünf Sinne kennen, unterscheiden Haustiere und wilde Tiere, entdecken die vier Jahreszeiten und Wetterphänomene sowie erste Begriffe von Familie und Gemeinschaft. Auch Themen wie Verkehr und sichere Fortbewegung werden eingeführt." },
      { q: "Ist der Sachkunde Test für Klasse 1 kostenlos?", a: "Ja, der Test ist vollständig kostenlos. Es ist keine Anmeldung erforderlich." },
      { q: "Wie lange dauert ein Sachkunde Test für Klasse 1?", a: "Ein Testdurchgang dauert je nach Aufgabenanzahl 5–10 Minuten. Kinder können den Test jederzeit pausieren und zu einem anderen Zeitpunkt fortsetzen oder von vorne beginnen." },
      { q: "Für welches Alter ist der Test geeignet?", a: "Der Test richtet sich an Erstklässler im Alter von 6–7 Jahren. Er eignet sich auch als Auffrischung für Zweitklässler, die grundlegende Sachkunde-Kenntnisse wiederholen möchten." },
      { q: "Welche Themen werden geprüft?", a: "Geprüft werden: Körperteile und Sinne, Haustiere und wilde Tiere, Jahreszeiten und Wetter, Familie und Gemeinschaft, Verkehr und einfache Sicherheitsregeln, sowie erste Umweltbeobachtungen." },
      { q: "Kann mein Kind den Test mehrmals machen?", a: "Ja, der Test kann beliebig oft wiederholt werden." },
    ],
  },
  2: {
    age: "7–8",
    topics: [
      { icon: "🍎", label: "Ernährung & Gesundheit" },
      { icon: "🦷", label: "Zahngesundheit" },
      { icon: "🏠", label: "Lebensräume & Habitate" },
      { icon: "🔗", label: "Nahrungsketten" },
      { icon: "🌱", label: "Pflanzenteile" },
      { icon: "💧", label: "Wasserkreislauf" },
    ],
    intro: "Mit unserem kostenlosen Sachkunde Test für Klasse 2 entdecken Schülerinnen und Schüler im Alter von 7–8 Jahren Ernährung, Zahngesundheit, verschiedene Lebensräume und erste Konzepte der Natur. Der Sachkunde Test Klasse 2 ist ideal zur Festigung der Naturkunde-Grundlagen – direkt im Browser, ohne Anmeldung.",
    deepDive: [
      "In der 2. Klasse wird das Verständnis für Ernährung und Gesundheit systematisch aufgebaut: Kinder lernen, welche Lebensmittel gesund sind, verstehen Nährstoffe und warum ein ausgewogenes Frühstück wichtig ist. Zahngesundheit ist ebenfalls zentral – Kinder erfahren, wie man Zähne richtig pflegt. Mit dem Sachkunde Test Klasse 2 werden diese Themen spielerisch gefestigt.",
      "Verschiedene Lebensräume und ihre Bewohner sind ein faszinierendes Thema in Klasse 2: Wald, Wiese, Gewässer und Garten bieten unterschiedliche Bedingungen für Tiere und Pflanzen. Kinder entdecken, welche Tiere wo leben und warum bestimmte Orte für bestimmte Lebewesen ideal sind. Unser Test führt durch diese unterschiedlichen Naturräume.",
      "Das Konzept der Nahrungskette wird in Klasse 2 eingeführt: Kinder verstehen einfache Zusammenhänge wie Pflanze → Tier → größeres Tier. Sie lernen, dass alles in der Natur miteinander verbunden ist. Der Wasserkreislauf – Verdunstung, Wolkenbildung, Regen – wird ebenfalls erklärt und macht die Natur greifbar.",
      "Eltern und Lehrkräfte können den kostenlosen Sachkunde Test Klasse 2 jederzeit zum Üben oder zur Vorbereitung auf Klassenarbeiten einsetzen. Alle Aufgaben sind auf den Lehrplan der 2. Klasse abgestimmt und können beliebig oft wiederholt werden – ohne Download, ohne Account.",
    ],
    faqs: [
      { q: "Was lernt man in Sachkunde Klasse 2?", a: "In Klasse 2 werden Ernährung und Zahngesundheit vertieft, verschiedene Lebensräume (Wald, Wiese, See, Garten) und ihre Bewohner erforscht, einfache Nahrungsketten verstanden, Pflanzenteile (Wurzel, Stängel, Blatt, Blüte) benannt und der Wasserkreislauf entdeckt." },
      { q: "Ist der Sachkunde Test für Klasse 2 kostenlos?", a: "Ja, vollständig kostenlos. Kein Account, kein Download." },
      { q: "Wie lange dauert ein Sachkunde Test für Klasse 2?", a: "Ein Testdurchgang dauert 5–10 Minuten. Der Test kann jederzeit wiederholt werden, um das Ergebnis zu verbessern und Wissenlücken gezielt zu schließen." },
      { q: "Für welches Alter ist der Test geeignet?", a: "Der Test richtet sich an Zweitklässler im Alter von 7–8 Jahren. Er eignet sich auch als Vorbereitung für Drittklässler, die Grundlagen der Naturkunde auffrischen möchten." },
      { q: "Welche Themen werden geprüft?", a: "Geprüft werden: Ernährung und Zahngesundheit, verschiedene Lebensräume und ihre Tiere, Nahrungsketten, Pflanzenteile, Wasserkreislauf, sowie erste Konzepte von Ökosystemen." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, der Test lässt sich beliebig oft wiederholen." },
    ],
  },
  3: {
    age: "8–9",
    topics: [
      { icon: "🫀", label: "Körperaufbau & Organe" },
      { icon: "🦁", label: "Tierklassen" },
      { icon: "🌿", label: "Photosynthese" },
      { icon: "🌡️", label: "Wetter & Instrumente" },
      { icon: "🔧", label: "Einfache Maschinen" },
      { icon: "🧭", label: "Kompass & Kartenlesen" },
    ],
    intro: "Mit unserem kostenlosen Sachkunde Test für Klasse 3 erforschen Schülerinnen und Schüler im Alter von 8–9 Jahren den menschlichen Körper, Tierklassen, Photosynthese und erste Konzepte von Physik und Geographie. Der Sachkunde Test Klasse 3 ist ideal zur Vorbereitung auf Klassenarbeiten – direkt im Browser, ohne Anmeldung.",
    deepDive: [
      "In der 3. Klasse wird der Aufbau des menschlichen Körpers systematisch erforscht: Schülerinnen und Schüler lernen wichtige Organe wie Herz, Lunge, Magen und Gehirn kennen, verstehen ihre Funktionen und wie sie zusammenarbeiten. Unser Sachkunde Test Klasse 3 prüft dieses Körperwissen gezielt und bereitet optimal auf Klassenarbeiten vor.",
      "Tierklassen sind ein zentrales Thema in Klasse 3: Kinder unterscheiden Säugetiere, Vögel, Reptilien, Amphibien und Fische nach ihren Merkmalen. Sie verstehen, warum diese Klassifizierung sinnvoll ist und können Tiere richtig einordnen. Mit dem Sachkunde Test Klasse 3 online werden diese biologischen Konzepte spielerisch gefestigt.",
      "Die Photosynthese wird in Klasse 3 als grundlegendes Konzept eingeführt: Kinder verstehen, dass Pflanzen Sonnenlicht in Energie umwandeln, Sauerstoff produzieren und Nahrung herstellen. Sie erkennen die Bedeutung von Pflanzen für alles Leben auf der Erde. Der Test hilft, diese faszinierenden Zusammenhänge zu verstehen.",
      "Eltern und Lehrkräfte können den kostenlosen Sachkunde Test Klasse 3 jederzeit zum Üben oder zur Vorbereitung auf Klassenarbeiten einsetzen. Alle Aufgaben sind auf den Lehrplan der 3. Klasse abgestimmt und können beliebig oft wiederholt werden – ohne Download, ohne Account.",
    ],
    faqs: [
      { q: "Was lernt man in Sachkunde Klasse 3?", a: "In Klasse 3 werden der menschliche Körper und wichtige Organe erforscht, Tierklassen (Säugetiere, Vögel, Reptilien, Amphibien, Fische) unterschieden, Photosynthese als Grundkonzept verstanden, Wetterinstrumente (Thermometer, Regenmesser) genutzt, einfache Maschinen (Hebel, Rolle) erklärt und Kompass sowie Kartenlesen eingeführt." },
      { q: "Ist der Test kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert der Test?", a: "Ein Testdurchgang dauert 5–10 Minuten. Schülerinnen und Schüler können den Test jederzeit wiederholen, um Wissenlücken gezielt zu schließen." },
      { q: "Für welches Alter geeignet?", a: "Der Test richtet sich an Drittklässler im Alter von 8–9 Jahren. Er eignet sich auch zur Vorbereitung für die 4. Klasse oder als Auffrischung nach den Sommerferien." },
      { q: "Welche Themen werden geprüft?", a: "Geprüft werden: Körperaufbau und Organe, Tierklassen und ihre Merkmale, Photosynthese und Pflanzen, Wetterphänomene und Messinstrumente, einfache Maschinen und Hebelgesetze, Kompass und Kartenlesen." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft wiederholbar." },
    ],
  },
  4: {
    age: "9–10",
    topics: [
      { icon: "🫀", label: "Organe & Körperfunktionen" },
      { icon: "🦌", label: "Säugetiere & Arten" },
      { icon: "🌍", label: "Ökosysteme" },
      { icon: "⚡", label: "Energie & Stromkreis" },
      { icon: "🗺️", label: "Bundesländer & Europa" },
      { icon: "❄️", label: "Klima & Umweltschutz" },
    ],
    intro: "Mit unserem kostenlosen Sachkunde Test für Klasse 4 vertiefen Schülerinnen und Schüler im Alter von 9–10 Jahren ihr Wissen über Organe, Säugetiere, Ökosysteme, Energie, Geographie und Umweltschutz. Der Sachkunde Test Klasse 4 ist ideal zur Vorbereitung auf den Schulübertritt – direkt im Browser, ohne Anmeldung.",
    deepDive: [
      "In der 4. Klasse werden Organe und Körperfunktionen vertieft: Schülerinnen und Schüler verstehen den Kreislauf von Herz und Blut, wie die Atmung funktioniert, welche Rolle Nerven spielen und wie Knochen und Muskeln zusammenarbeiten. Unser Sachkunde Test Klasse 4 prüft dieses erweiterte Körperwissen gezielt und bereitet auf den Schulübertritt vor.",
      "Säugetiere und ihre vielfältigen Arten sind ein spannendes Thema in Klasse 4: Kinder erforschen die Merkmale von Säugetieren, verstehen Anpassungen an verschiedene Lebensräume (Wüste, Polar, Wald) und lernen Bedrohungen und Schutzmaßnahmen kennen. Mit dem Sachkunde Test Klasse 4 online werden diese biologischen Konzepte systematisch gefestigt.",
      "Ökosysteme und ihre Komplexität werden in Klasse 4 erforscht: Schülerinnen und Schüler verstehen Nahrungsketten als Netze, das Konzept von Raubtier und Beute, Parasitismus und Symbiose. Sie erkennen, dass alle Lebewesen voneinander abhängen und dass Eingriffe des Menschen Folgen haben. Energie als Antrieb aller Prozesse wird verständlich.",
      "Eltern und Lehrkräfte können den kostenlosen Sachkunde Test Klasse 4 jederzeit zur Vorbereitung auf Klassenarbeiten oder den Schulübertritt einsetzen. Alle Aufgaben sind auf den Lehrplan der 4. Klasse abgestimmt und können beliebig oft wiederholt werden – ohne Download, ohne Account.",
    ],
    faqs: [
      { q: "Was lernt man in Sachkunde Klasse 4?", a: "In Klasse 4 werden Organsysteme (Kreislauf, Atmung, Nervensystem, Skelett und Muskeln) vertieft, Säugetiere und ihre Anpassungen erforscht, Ökosysteme und komplexe Nahrungsnetze verstanden, Energie und einfache Stromkreise erklärt, deutsche Bundesländer und Europa geographisch erkannt, sowie Klima und Umweltschutz problematisiert." },
      { q: "Ist der Test kostenlos?", a: "Ja, vollständig kostenlos und ohne Anmeldung." },
      { q: "Wie lange dauert der Test?", a: "Ein Testdurchgang dauert 5–10 Minuten. Der Test kann jederzeit wiederholt werden – ideal zur gezielten Vorbereitung auf Klassenarbeiten oder den Schulübertritt." },
      { q: "Für welches Alter geeignet?", a: "Der Test richtet sich an Viertklässler im Alter von 9–10 Jahren. Er eignet sich besonders gut zur Vorbereitung auf den Übertritt an weiterführende Schulen." },
      { q: "Welche Themen werden geprüft?", a: "Geprüft werden: Organe und Körperfunktionen, Säugetiere und ihre Anpassungen, Ökosysteme und Nahrungsnetze, Energie und Stromkreise, deutsche Bundesländer und europäische Geographie, Klimazonen und Umweltschutzmaßnahmen." },
      { q: "Kann ich den Test mehrmals machen?", a: "Ja, beliebig oft wiederholbar." },
    ],
  },
};

// ─── COMPONENT ─────────────────────────────────────────────────────────────────
export default function SachkundeTestKlasse({ grade }: { grade: number }) {
  const data = GRADE_DATA[grade];
  if (!data) return null;

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://plizio.com/" },
      { "@type": "ListItem", position: 2, name: "Sachkunde Test", item: "https://plizio.com/sachkunde-test/" },
      { "@type": "ListItem", position: 3, name: `Sachkunde Test Klasse ${grade}`, item: `https://plizio.com/sachkunde-test/klasse-${grade}/` },
    ],
  };

  return (
    <main className="min-h-screen" style={{ background: "#0A0A1A", color: "white" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/40 mb-6 flex-wrap">
          <a href="/" className="hover:text-white/70 transition-colors">Startseite</a>
          <span>›</span>
          <a href="/sachkunde-test/" className="hover:text-white/70 transition-colors">Sachkunde Test</a>
          <span>›</span>
          <span className="text-white/70">Klasse {grade}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: "rgba(76,175,80,0.1)", color: "#4CAF50", border: "1px solid rgba(76,175,80,0.25)" }}
          >
            Klasse {grade} · Alter {data.age} · Kostenlos · Kein Account
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Sachkunde Test Klasse {grade} –{" "}
            <span style={{ color: "#4CAF50" }}>Online Üben kostenlos</span>
          </h1>
          <p className="text-white/65 text-base leading-relaxed mb-5">{data.intro}</p>
          <a
            href="/sachkundetest"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-black text-sm"
            style={{ background: "linear-gradient(135deg, #4CAF50, #81C784)" }}
          >
            ▶ Sachkunde Test starten
          </a>
        </div>

        {/* Topics */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#4CAF50" }}>
            Themen in Sachkunde Klasse {grade}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {data.topics.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-2xl"
                style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <span className="text-white/80 text-xs font-semibold leading-tight">{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Dive */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#81C784" }}>
            Sachkunde Klasse {grade} – Im Detail
          </h2>
          <div className="space-y-4 text-white/65 text-sm leading-relaxed">
            {data.deepDive.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* CTA mid */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl mb-10"
          style={{ background: "rgba(76,175,80,0.05)", border: "1px solid rgba(76,175,80,0.15)" }}
        >
          <div className="flex-1">
            <p className="font-black text-white text-base mb-1">Bereit für den Test?</p>
            <p className="text-white/50 text-xs">Wähle deine Klasse direkt im Spiel – kostenlos, ohne Anmeldung.</p>
          </div>
          <a
            href="/sachkundetest"
            className="flex-shrink-0 px-6 py-3 rounded-2xl font-black text-black text-sm"
            style={{ background: "linear-gradient(135deg, #4CAF50, #81C784)" }}
          >
            ▶ Jetzt starten
          </a>
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-black mb-4" style={{ color: "#FFD700" }}>
            Häufige Fragen – Sachkunde Test Klasse {grade}
          </h2>
          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl"
                style={{ background: "#12122A", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p className="font-bold text-white text-sm mb-1">{faq.q}</p>
                <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other grades */}
        <section className="mb-10">
          <h2 className="text-xl font-black mb-4 text-white/80">Andere Klassenstufen</h2>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4].filter((g) => g !== grade).map((g) => (
              <a
                key={g}
                href={`/sachkunde-test/klasse-${g}/`}
                className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-80"
                style={{ background: "rgba(76,175,80,0.1)", color: "#4CAF50", border: "1px solid rgba(76,175,80,0.25)" }}
              >
                Klasse {g}
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div
          className="text-center py-6 rounded-2xl"
          style={{ background: "rgba(76,175,80,0.04)", border: "1px solid rgba(76,175,80,0.12)" }}
        >
          <p className="text-white/60 text-sm mb-3">Starte deinen Sachkunde Test für Klasse {grade} jetzt!</p>
          <a
            href="/sachkundetest"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-black text-base"
            style={{ background: "linear-gradient(135deg, #4CAF50, #81C784)" }}
          >
            🚀 Sachkunde Test starten
          </a>
          <p className="text-white/25 text-xs mt-3">Kostenlos · Kein Account · Klasse {grade} · Sofort verfügbar</p>
        </div>

      </div>
    </main>
  );
}
