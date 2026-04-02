// lib/explorerPools/biologieK7.ts
import type { PoolTopicDef } from "./types";

// ─── i1: ZELLSTRUKTUR & MIKROSKOP ────────────────────────────────────

export const BIO_K7_I1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zellbiologie & Mikroskopie",
    t1_title: "Mikroskop-Bauteile",
    t1_text: "Ein Lichtmikroskop besteht aus optischen Teilen (Okular, Objektiv) und mechanischen Teilen (Objekttisch, Grobtrieb).",
    t1_h1: "Optische Linsen", t1_h2: "Mechanischer Aufbau",
    t1_inst: "Identifiziere die Bauteile!",
    t1_q: "Welches Teil des Mikroskops befindet sich direkt am Auge?",
    t1_qa: "Das Okular", t1_qb: "Das Objektiv", t1_qc: "Die Lichtquelle", t1_qd: "Der Objekttisch",

    t2_title: "Präparatherstellung",
    t2_text: "Für die Mikroskopie muss ein Objekt hauchdünn geschnitten, auf den Objektträger gelegt und mit Wasser und Deckglas bedeckt werden.",
    t2_h1: "Objektträger & Deckglas", t2_h2: "Dünnschliff",
    t2_inst: "Bereite das Präparat vor!",
    t2_q: "Was schützt das Objekt auf dem Objektträger?",
    t2_qa: "Das Deckgläschen", t2_qb: "Das Okular", t2_qc: "Die Blende", t2_qd: "Der Tubus",

    t3_title: "Die Tierzelle",
    t3_text: "Tierzellen besitzen eine flexible Zellmembran, aber keine feste Zellwand und keine Chloroplasten.",
    t3_h1: "Flexible Hülle", t3_h2: "Heterotrophe Zelle",
    t3_inst: "Untersuche die Tierzelle!",
    t3_q: "Was fehlt einer Tierzelle im Vergleich zur Pflanzenzelle?",
    t3_qa: "Zellwand", t3_qb: "Zellkern", t3_qc: "Mitochondrien", t3_qd: "Zytoplasma",

    t4_title: "Die Pflanzenzelle",
    t4_text: "Pflanzenzellen zeichnen sich durch eine starre Zellwand, Chloroplasten und eine große zentrale Vakuole aus.",
    t4_h1: "Stabilität & Photosynthese", t4_h2: "Autotrophe Zelle",
    t4_inst: "Finde die pflanzlichen Merkmale!",
    t4_q: "Welche Struktur sorgt für die Stabilität der Pflanzenzelle?",
    t4_qa: "Zellwand", t4_qb: "Zellmembran", t4_qc: "Ribosom", t4_qd: "Lysosom",

    t5_title: "Zellorganellen",
    t5_text: "Organellen sind spezialisierte Kompartimente der Zelle, die wie Organe im Körper spezifische Funktionen übernehmen.",
    t5_h1: "Zellwerkzeuge", t5_h2: "Kompartimentierung",
    t5_inst: "Ordne die Funktionen zu!",
    t5_q: "Wie nennt man die 'Organe' einer Zelle?",
    t5_qa: "Organellen", t5_qb: "Gewebe", t5_qc: "Moleküle", t5_qd: "Atoms",

    t6_title: "Der Zellkern",
    t6_text: "Der Zellkern (Nukleus) enthält die Erbinformation (DNA) und steuert alle lebenswichtigen Prozesse der Zelle.",
    t6_h1: "Steuerzentrale", t6_h2: "DNA-Speicher",
    t6_inst: "Schau in den Nukleus!",
    t6_q: "Wo befindet sich die Erbinformation?",
    t6_qa: "Im Zellkern", t6_qb: "In der Vakuole", t6_qc: "In der Zellwand", t6_qd: "Im Golgi-Apparat",

    t7_title: "Mitochondrien",
    t7_text: "Mitochondrien sind die Kraftwerke der Zelle. Hier wird durch Zellatmung Energie in Form von ATP erzeugt.",
    t7_h1: "Energieproduktion", t7_h2: "Zellatmung",
    t7_inst: "Aktiviere die Kraftwerke!",

    t8_title: "Chloroplasten",
    t8_text: "In den Chloroplasten wird mithilfe von Lichtenergie, Wasser und CO2 Traubenzucker hergestellt (Photosynthese).",
    t8_h1: "Photosynthese", t8_h2: "Chlorophyll",
    t8_inst: "Sammle Lichtenergie!",

    t9_title: "Zellwand vs. Membran",
    t9_text: "Die Zellmembran regelt den Stoffaustausch, während die Zellwand (nur bei Pflanzen) mechanischen Schutz bietet.",
    t9_h1: "Selektive Barriere", t9_h2: "Stützfunktion",
    t9_inst: "Vergleiche die Hüllen!",

    t10_title: "Die Vergrößerung",
    t10_text: "Die Gesamtvergrößerung eines Mikroskops ergibt sich aus dem Produkt der Okular- und Objektivvergrößerung.",
    t10_h1: "Okular x Objektiv", t10_h2: "Berechnung",
    t10_inst: "Berechne den Zoom!",
  },
  en: {
    explorer_title: "Cell Biology & Microscopy",
    t1_title: "Microscope Parts",
    t1_text: "A light microscope consists of optical parts (eyepiece, objective) and mechanical parts (stage, focus knobs).",
    t1_h1: "Optical lenses", t1_h2: "Mechanical structure",
    t1_inst: "Identify the parts!",
    t1_q: "Which part of the microscope is closest to the eye?",
    t1_qa: "Eyepiece", t1_qb: "Objective", t1_qc: "Light source", t1_qd: "Stage",

    t2_title: "Preparing a Slide",
    t2_text: "To view an object, it must be sliced very thin, placed on a slide, and covered with water and a cover slip.",
    t2_h1: "Slide & cover slip", t2_h2: "Thin section",
    t2_inst: "Prepare the specimen!",
    t2_q: "What protects the specimen on the slide?",
    t2_qa: "Cover slip", t2_qb: "Eyepiece", t2_qc: "Diaphragm", t2_qd: "Tube",

    t3_title: "The Animal Cell",
    t3_text: "Animal cells have a flexible cell membrane but lack a rigid cell wall and chloroplasts.",
    t3_h1: "Flexible boundary", t3_h2: "Heterotrophic cell",
    t3_inst: "Examine the animal cell!",
    t3_q: "What does an animal cell lack compared to a plant cell?",
    t3_qa: "Cell wall", t3_qb: "Nucleus", t3_qc: "Mitochondria", t3_qd: "Cytoplasm",

    t4_title: "The Plant Cell",
    t4_text: "Plant cells are characterized by a rigid cell wall, chloroplasts, and a large central vacuole.",
    t4_h1: "Stability & Photosynthesis", t4_h2: "Autotrophic cell",
    t4_inst: "Find the plant features!",
    t4_q: "Which structure provides stability to the plant cell?",
    t4_qa: "Cell wall", t4_qb: "Cell membrane", t4_qc: "Ribosome", t4_qd: "Lysosome",

    t5_title: "Cell Organelles",
    t5_text: "Organelles are specialized compartments within the cell that perform specific functions like organs in a body.",
    t5_h1: "Cellular tools", t5_h2: "Compartmentalization",
    t5_inst: "Match the functions!",
    t5_q: "What are the 'organs' of a cell called?",
    t5_qa: "Organelles", t5_qb: "Tissues", t5_qc: "Molecules", t5_qd: "Atoms",

    t6_title: "The Nucleus",
    t6_text: "The nucleus contains the genetic information (DNA) and controls all vital processes of the cell.",
    t6_h1: "Control center", t6_h2: "DNA storage",
    t6_inst: "Look into the nucleus!",
    t6_q: "Where is the genetic information located?",
    t6_qa: "In the nucleus", t6_qb: "In the vacuole", t6_qc: "In the cell wall", t6_qd: "In the Golgi apparatus",

    t7_title: "Mitochondria",
    t7_text: "Mitochondria are the powerhouses of the cell, where energy (ATP) is produced through cellular respiration.",
    t7_h1: "Energy production", t7_h2: "Cellular respiration",
    t7_inst: "Activate the powerhouses!",

    t8_title: "Chloroplasts",
    t8_text: "Chloroplasts produce glucose using light energy, water, and CO2 (photosynthesis).",
    t8_h1: "Photosynthesis", t8_h2: "Chlorophyll",
    t8_inst: "Capture light energy!",

    t9_title: "Cell Wall vs. Membrane",
    t9_text: "The cell membrane regulates substance exchange, while the cell wall (only in plants) provides mechanical protection.",
    t9_h1: "Selective barrier", t9_h2: "Structural support",
    t9_inst: "Compare the layers!",

    t10_title: "Magnification",
    t10_text: "The total magnification of a microscope is the product of the eyepiece and objective magnification.",
    t10_h1: "Eyepiece x Objective", t10_h2: "Calculation",
    t10_inst: "Calculate the zoom!",
  },
  hu: {
    explorer_title: "Sejtbiológia és mikroszkópia",
    t1_title: "A mikroszkóp részei",
    t1_text: "A fénymikroszkóp optikai (szemlencse, tárgylencse) és mechanikai részekből (tárgyasztal, csavarok) áll.",
    t1_h1: "Optikai lencsék", t1_h2: "Mechanikai felépítés",
    t1_inst: "Azonosítsd a részeket!",
    t1_q: "A mikroszkóp melyik része van közvetlenül a szemnél?",
    t1_qa: "Okulár (szemlencse)", t1_qb: "Objektív", t1_qc: "Fényforrás", t1_qd: "Tárgyasztal",

    t2_title: "Preparátum készítése",
    t2_text: "A vizsgálathoz az objektumot vékonyra kell vágni, tárgylemezre helyezni, majd vízzel és fedőlemezzel lefedni.",
    t2_h1: "Tárgylemez és fedőlemez", t2_h2: "Vékony metszet",
    t2_inst: "Készítsd el a preparátumot!",
    t2_q: "Mi védi a mintát a tárgylemezen?",
    t2_qa: "Fedőlemez", t2_qb: "Okulár", t2_qc: "Blende", t2_qd: "Tubus",

    t3_title: "Az állati sejt",
    t3_text: "Az állati sejteket rugalmas sejthártya határolja, de nincs merev sejtfaluk és zöld színtestük.",
    t3_h1: "Rugalmas burok", t3_h2: "Heterotróf sejt",
    t3_inst: "Vizsgáld meg az állati sejtet!",
    t3_q: "Mi hiányzik az állati sejtből a növényi sejthez képest?",
    t3_qa: "Sejtfal", t3_qb: "Sejtmag", t3_qc: "Mitokondrium", t3_qd: "Sejtplazma",

    t4_title: "A növényi sejt",
    t4_text: "A növényi sejteket merev sejtfal, zöld színtestek és nagy központi vakuólum jellemzi.",
    t4_h1: "Stabilitás és fotoszintézis", t4_h2: "Autotróf sejt",
    t4_inst: "Keresd meg a növényi jellegeket!",
    t4_q: "Melyik szerkezet biztosítja a növényi sejt szilárdságát?",
    t4_qa: "Sejtfal", t4_qb: "Sejthártya", t4_qc: "Riboszóma", t4_qd: "Lizoszóma",

    t5_title: "Sejtszervecskék",
    t5_text: "A sejtszervecskék a sejt különálló részei, amelyek specifikus feladatokat látnak el, mint a szervek a testben.",
    t5_h1: "Sejtszintű eszközök", t5_h2: "Kompartimentáció",
    t5_inst: "Párosítsd a funkciókat!",
    t5_q: "Hogy hívjuk a sejt 'szerveit'?",
    t5_qa: "Sejtszervecskék", t5_qb: "Szövetek", t5_qc: "Molekulák", t5_qd: "Atomok",

    t6_title: "A sejtmag",
    t6_text: "A sejtmag (nukleusz) tartalmazza az örökítőanyagot (DNS) és irányítja a sejt életfolyamatait.",
    t6_h1: "Irányítóközpont", t6_h2: "DNS-tároló",
    t6_inst: "Nézz bele a sejtmagba!",
    t6_q: "Hol található az örökítőanyag?",
    t6_qa: "A sejtmagban", t6_qb: "A vakuólumban", t6_qc: "A sejtfalban", t6_qd: "A Golgi-készülékben",

    t7_title: "Mitokondriumok",
    t7_text: "A mitokondriumok a sejt erőművei, ahol a sejtlégzés során ATP formájában energia termelődik.",
    t7_h1: "Energiatermelés", t7_h2: "Sejtlégzés",
    t7_inst: "Aktiváld az erőműveket!",

    t8_title: "Zöld színtestek",
    t8_text: "A zöld színtestekben (kloroplasztisz) fényenergia, víz és CO2 segítségével szőlőcukor képződik (fotoszintézis).",
    t8_h1: "Fotoszintézis", t8_h2: "Klorofill",
    t8_inst: "Gyűjts fényenergiát!",

    t9_title: "Sejtfal vs. sejthártya",
    t9_text: "A sejthártya szabályozza az anyagforgalmat, míg a sejtfal (csak növényeknél) mechanikai védelmet ad.",
    t9_h1: "Szelektív gát", t9_h2: "Vázfunkció",
    t9_inst: "Hasonlítsd össze a burkokat!",

    t10_title: "A nagyítás",
    t10_text: "A mikroszkóp teljes nagyítása az okulár és az objektív nagyításának szorzata.",
    t10_h1: "Okulár x Objektív", t10_h2: "Számítás",
    t10_inst: "Számítsd ki a nagyítást!",
  },
  ro: {
    explorer_title: "Biologie celulară și microscopie",
    t1_title: "Părțile microscopului",
    t1_text: "Un microscop optic constă din părți optice (ocular, obiectiv) și părți mecanice (masă, vize de reglaj).",
    t1_h1: "Lentile optice", t1_h2: "Structură mecanică",
    t1_inst: "Identifică componentele!",
    t1_q: "Care parte a microscopului se află cel mai aproape de ochi?",
    t1_qa: "Ocularul", t1_qb: "Obiectivul", t1_qc: "Sursa de lumină", t1_qd: "Măsuța",

    t2_title: "Prepararea lamei",
    t2_text: "Pentru a vizualiza un obiect, acesta trebuie tăiat foarte subțire, pus pe o lamă și acoperit cu apă și o lamelă.",
    t2_h1: "Lamă și lamelă", t2_h2: "Secțiune subțire",
    t2_inst: "Pregătește preparatul!",
    t2_q: "Ce protejează obiectul de pe lamă?",
    t2_qa: "Lamela", t2_qb: "Ocularul", t2_qc: "Diafragma", t2_qd: "Tubul",

    t3_title: "Celula animală",
    t3_text: "Celulele animale au o membrană celulară flexibilă, dar nu au perete celular rigid și nici cloroplaste.",
    t3_h1: "Înveliș flexibil", t3_h2: "Celulă heterotrofă",
    t3_inst: "Examinează celula animală!",
    t3_q: "Ce îi lipsește unei celule animale față de una vegetală?",
    t3_qa: "Peretele celular", t3_qb: "Nucleul", t3_qc: "Mitocondriile", t3_qd: "Citoplasma",

    t4_title: "Celula vegetală",
    t4_text: "Celulele vegetale se caracterizează prin perete celular rigid, cloroplaste și o vacuolă centrală mare.",
    t4_h1: "Stabilitate și fotosinteză", t4_h2: "Celulă autotrofă",
    t4_inst: "Găsește trăsăturile vegetale!",
    t4_q: "Care structură asigură stabilitatea celulei vegetale?",
    t4_qa: "Peretele celular", t4_qb: "Membrana celulară", t4_qc: "Ribozomul", t4_qd: "Lizozomul",

    t5_title: "Organite celulare",
    t5_text: "Organitele sunt compartimente specializate ale celulei care îndeplinesc funcții specifice, ca organele în corp.",
    t5_h1: "Instrumente celulare", t5_h2: "Compartimentare",
    t5_inst: "Potrivește funcțiile!",
    t5_q: "Cum se numesc 'organele' unei celule?",
    t5_qa: "Organite", t5_qb: "Țesuturi", t5_qc: "Molecule", t5_qd: "Atomi",

    t6_title: "Nucleul celular",
    t6_text: "Nucleul conține informația genetică (ADN) și coordonează toate procesele vitale ale celulei.",
    t6_h1: "Centru de control", t6_h2: "Stocare ADN",
    t6_inst: "Privește în nucleu!",
    t6_q: "Unde se află informația genetică?",
    t6_qa: "În nucleu", t6_qb: "În vacuolă", t6_qc: "În peretele celular", t6_qd: "În aparatul Golgi",

    t7_title: "Mitocondrii",
    t7_text: "Mitocondriile sunt centralele energetice ale celulei, unde se produce energie sub formă de ATP prin respirație celulară.",
    t7_h1: "Producție de energie", t7_h2: "Respirație celulară",
    t7_inst: "Activează centralele!",

    t8_title: "Cloroplaste",
    t8_text: "În cloroplaste se produce glucoză folosind energia luminoasă, apa și CO2 (fotosinteză).",
    t8_h1: "Fotosinteză", t8_h2: "Clorofilă",
    t8_inst: "Captează energia luminii!",

    t9_title: "Perete celular vs. Membrană",
    t9_text: "Membrana celulară reglează schimbul de substanțe, în timp ce peretele celular oferă protecție mecanică.",
    t9_h1: "Barieră selectivă", t9_h2: "Funcție de susținere",
    t9_inst: "Compară învelișurile!",

    t10_title: "Magnificația",
    t10_text: "Magnificația totală a unui microscop este produsul dintre grosismentul ocularului și cel al obiectivului.",
    t10_h1: "Ocular x Obiectiv", t10_h2: "Calcul",
    t10_inst: "Calculează zoom-ul!",
  },
};

export const BIO_K7_I1_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "CellStructureSvg", bg: "#F8FAFC" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔬", count: 3 }, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "cell_structure" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "biologie-diagram", name: "CellStructureSvg", bg: "#F8FAFC" },
    interactive: { type: "highlight-text", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", tokens: ["Zellkern", "Steuerzentrale", "Erbinformation", "DNA"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "cell_organelles" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "biologie-diagram", name: "MitochondriaSvg", bg: "#FDF2F8" },
    interactive: { type: "tap-count", tapCount: { emoji: "⚡", count: 3 }, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "cell_organelles" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🌿", color: "#10B981" },
    interactive: { type: "drag-to-bucket", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", buckets: [{id: "pflanze", label: "Pflanze"}, {id: "tier", label: "Tier"}], items: [{text: "Zellwand", bucketId: "pflanze"}, {text: "Chloroplast", bucketId: "pflanze"}, {text: "Vakuole", bucketId: "pflanze"}, {text: "Zellmembran", bucketId: "tier"}] },
    quiz: { generate: "cell_structure" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "biologie-diagram", name: "ChloroplastSvg", bg: "#ECFDF5" },
    interactive: { type: "tap-count", tapCount: { emoji: "☀️", count: 2 }, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "cell_organelles" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🔬", color: "#64748B" },
    interactive: { type: "highlight-text", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tokens: ["Okular", "Objektiv", "Lichtquelle", "Vergrößerung"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "microscope" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "Die ___ regelt den Stoffaustausch.", choices: ["Zellmembran", "Zellwand", "Aorta", "Nase"], correctIndex: 0 },
    quiz: { generate: "cell_structure" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🧶", color: "#FACC15" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Ribosom", right: "Eiweiß"}, {left: "Kern", right: "DNA"}, {left: "Mito", right: "ATP"}] },
    quiz: { generate: "cell_organelles" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "📦", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "Die Vakuole speichert ___.", choices: ["Zellsaft", "Luft", "Sand", "Metall"], correctIndex: 0 },
    quiz: { generate: "cell_organelles" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "📜", color: "#64748B" },
    interactive: { type: "match-pairs", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", pairs: [{left: "Schleiden", right: "Pflanzen"}, {left: "Schwann", right: "Tiere"}, {left: "Zelle", right: "Einheit"}] },
    quiz: { generate: "cell_structure" }
  }
];

// ─── i2: ZELLTEILUNG & ZELLZYKLUS ────────────────────────────────────

export const BIO_K7_I2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Stoffwechsel (Metabolismus)",
    t1_title: "Enzym-Grundlagen",
    t1_text: "Enzyme sind Biokatalysatoren, die chemische Reaktionen im Körper beschleunigen, ohne dabei selbst verbraucht zu werden.",
    t1_h1: "Biokatalysator", t1_h2: "Schlüssel-Schloss-Prinzip",
    t1_inst: "Aktiviere das Enzym!",
    
    t2_title: "Verdauung im Überblick",
    t2_text: "Die Verdauung zerlegt Nahrung in ihre Grundbausteine: Kohlenhydrate zu Zucker, Proteine zu Aminosäuren und Fette zu Fettsäuren.",
    t2_h1: "Mechanisch & Chemisch", t2_h2: "Nährstoffspaltung",
    t2_inst: "Ordne den Ablauf!",
    t2_w1: "Mund", t2_w2: "Magen", t2_w3: "Dünndarm", t2_w4: "Dickdarm",

    t3_title: "Nährstoffaufnahme",
    t3_text: "Im Dünndarm werden die kleinsten Bausteine der Nahrung über die Darmzotten in das Blut aufgenommen (Resorption).",
    t3_h1: "Darmzotten", t3_h2: "Resorption",
    t3_inst: "Nimm Nährstoffe auf!",

    t4_title: "Zellatmung",
    t4_text: "Bei der Zellatmung wird Glukose mit Sauerstoff zu Energie (ATP), CO2 und Wasser abgebaut.",
    t4_h1: "Dissimilation", t4_h2: "Sauerstoffbedarf",
    t4_inst: "Erzeuge ATP!",

    t5_title: "ATP (Energie)",
    t5_text: "ATP (Adenosintriphosphat) ist der universelle Energieträger der Zelle, der Energie für alle Prozesse liefert.",
    t5_h1: "Energiewährung", t5_h2: "Phosphatgruppen",
    t5_inst: "Lade den Akku auf!",

    t6_title: "Anabolismus vs. Katabolismus",
    t6_text: "Anabolismus ist der Aufbau von Stoffen (Energieverbrauch), Katabolismus ist der Abbau (Energiegewinnung).",
    t6_h1: "Aufbau vs. Abbau", t6_h2: "Gesamtstoffwechsel",
    t6_inst: "Steuere den Stoffwechsel!",

    t7_title: "Temperatureinfluss",
    t7_text: "Die Geschwindigkeit von Enzymreaktionen steigt mit der Temperatur bis zu einem Optimum, danach werden Enzyme zerstört.",
    t7_h1: "RGT-Regel", t7_h2: "Denaturierung",
    t7_inst: "Finde das Optimum!",

    t8_title: "Rolle der Vitamine",
    t8_text: "Vitamine sind lebensnotwendige Stoffe, die der Körper oft nicht selbst herstellen kann und für Enzyme benötigt.",
    t8_h1: "Essenzielle Stoffe", t8_h2: "Co-Enzyme",
    t8_inst: "Sammle Vitamine!",

    t9_title: "Mineralstoffe",
    t9_text: "Mineralstoffe wie Kalzium oder Magnesium sind wichtig für den Knochenaufbau, Nerven und Muskeln.",
    t9_h1: "Anorganisch", t9_h2: "Elektrolyte",
    t9_inst: "Stärke den Körper!",

    t10_title: "Stoffwechselabfälle",
    t10_text: "Abfallprodukte wie Harnstoff oder CO2 müssen über Niere, Lunge und Haut ausgeschieden werden.",
    t10_h1: "Exkretion", t10_h2: "Entgiftung",
    t10_inst: "Scheide Abfälle aus!",
  },
  en: {
    explorer_title: "Metabolism",
    t1_title: "Enzyme Basics",
    t1_text: "Enzymes are biocatalysts that speed up chemical reactions in the body without being consumed themselves.",
    t1_h1: "Biocatalyst", t1_h2: "Lock-and-key principle",
    t1_inst: "Activate the enzyme!",

    t2_title: "Digestion Overview",
    t2_text: "Digestion breaks down food into basic components: carbs to sugar, proteins to amino acids, and fats to fatty acids.",
    t2_h1: "Mechanical & Chemical", t2_h2: "Nutrient breakdown",
    t2_inst: "Order the process!",
    t2_w1: "Mouth", t2_w2: "Stomach", t2_w3: "Small Intestine", t2_w4: "Large Intestine",

    t3_title: "Nutrient Absorption",
    t3_text: "In the small intestine, the smallest food components are absorbed into the blood via intestinal villi (resorption).",
    t3_h1: "Intestinal villi", t3_h2: "Resorption",
    t3_inst: "Absorb nutrients!",

    t4_title: "Cellular Respiration",
    t4_text: "Cellular respiration breaks down glucose with oxygen to produce energy (ATP), CO2, and water.",
    t4_h1: "Dissimilation", t4_h2: "Oxygen requirement",
    t4_inst: "Produce ATP!",

    t5_title: "ATP (Energy)",
    t5_text: "ATP (Adenosine Triphosphate) is the universal energy carrier of the cell, providing energy for all processes.",
    t5_h1: "Energy currency", t5_h2: "Phosphate groups",
    t5_inst: "Charge the battery!",

    t6_title: "Anabolism vs. Catabolism",
    t6_text: "Anabolism is the synthesis of substances (uses energy), catabolism is the breakdown (releases energy).",
    t6_h1: "Build-up vs. Breakdown", t6_h2: "Total metabolism",
    t6_inst: "Control the metabolism!",

    t7_title: "Temperature Impact",
    t7_text: "The speed of enzyme reactions increases with temperature up to an optimum, after which enzymes are destroyed.",
    t7_h1: "RGT rule", t7_h2: "Denaturation",
    t7_inst: "Find the optimum!",

    t8_title: "Role of Vitamins",
    t8_text: "Vitamins are vital substances the body often cannot produce itself, needed for enzyme function.",
    t8_h1: "Essential nutrients", t8_h2: "Co-enzymes",
    t8_inst: "Collect vitamins!",

    t9_title: "Role of Minerals",
    t9_text: "Minerals like calcium or magnesium are important for bone structure, nerves, and muscles.",
    t9_h1: "Inorganic", t9_h2: "Electrolytes",
    t9_inst: "Strengthen the body!",

    t10_title: "Metabolic Waste",
    t10_text: "Waste products like urea or CO2 must be excreted via the kidneys, lungs, and skin.",
    t10_h1: "Excretion", t10_h2: "Detoxification",
    t10_inst: "Eliminate waste!",
  },
  hu: {
    explorer_title: "Anyagcsere (Metabolizmus)",
    t1_title: "Enzimek alapjai",
    t1_text: "Az enzimek biokatalizátorok, amelyek felgyorsítják a kémiai reakciókat anélkül, hogy elhasználódnának.",
    t1_h1: "Biokatalizátor", t1_h2: "Kulcs-zár modell",
    t1_inst: "Aktiváld az enzimet!",

    t2_title: "Emésztés áttekintése",
    t2_text: "Az emésztés során a tápanyagok egységeikre bomlanak: szénhidrátok cukrokra, fehérjék aminosavakra, zsírok zsírsavakra.",
    t2_h1: "Mechanikai és kémiai", t2_h2: "Tápanyagbontás",
    t2_inst: "Rendezd a folyamatot!",
    t2_w1: "Szájüreg", t2_w2: "Gyomor", t2_w3: "Vékonybél", t2_w4: "Vastagbél",

    t3_title: "Tápanyagfelszívódás",
    t3_text: "A vékonybélben a tápanyagok legkisebb egységei a bélbolyhokon keresztül szívódnak fel a vérbe (reszorpció).",
    t3_h1: "Bélbolyhok", t3_h2: "Reszorpció",
    t3_inst: "Szívd fel a tápanyagot!",

    t4_title: "Sejtlégzés",
    t4_text: "A sejtlégzés során a szőlőcukor oxigén jelenlétében energiává (ATP), CO2-dá és vízzé bomlik le.",
    t4_h1: "Disszimiláció", t4_h2: "Oxigénigény",
    t4_inst: "Termelj ATP-t!",

    t5_title: "ATP (Energia)",
    t5_text: "Az ATP (adenozin-trifoszfát) a sejt univerzális energiaszállító molekulája, minden folyamathoz energiát ad.",
    t5_h1: "Energiavaluta", t5_h2: "Foszfátcsoportok",
    t5_inst: "Töltsd fel az akkut!",

    t6_title: "Anabolizmus vs. Katabolizmus",
    t6_text: "Az anabolizmus felépítő folyamat (energiaigényes), a katabolizmus lebontó folyamat (energiatermelő).",
    t6_h1: "Felépítés vs. lebontás", t6_h2: "Összesített anyagcsere",
    t6_inst: "Irányítsd az anyagcserét!",

    t7_title: "Hőmérséklet hatása",
    t7_text: "Az enzimes reakciók sebessége egy optimumig nő a hőmérséklettel, utána az enzimek tönkremennek.",
    t7_h1: "RGT-szabály", t7_h2: "Denaturáció",
    t7_inst: "Találd meg az optimumot!",

    t8_title: "Vitaminok szerepe",
    t8_text: "A vitaminok létfontosságú anyagok, amiket a szervezet nem tud előállítani, de az enzimeknek szükségük van rájuk.",
    t8_h1: "Esszenciális anyagok", t8_h2: "Koenzimek",
    t8_inst: "Gyűjtsd a vitaminokat!",

    t9_title: "Ásványi anyagok",
    t9_text: "Az ásványi anyagok, mint a kalcium vagy magnézium, fontosak a csontoknak, idegeknek és izmoknak.",
    t9_h1: "Szervetlen anyagok", t9_h2: "Elektrolitok",
    t9_inst: "Erősítsd a szervezetet!",

    t10_title: "Anyagcsere-hulladék",
    t10_text: "A hulladékanyagokat, mint a karbamid vagy a CO2, a vesén, tüdőn és bőrön keresztül kell kiüríteni.",
    t10_h1: "Kiválasztás", t10_h2: "Méregtelenítés",
    t10_inst: "Ürítsd ki a hulladékot!",
  },
  ro: {
    explorer_title: "Metabolism",
    t1_title: "Bazele enzimelor",
    t1_text: "Enzimele sunt biocatalizatori care accelerează reacțiile chimice din corp fără a fi consumate.",
    t1_h1: "Biocatalizator", t1_h2: "Modelul cheie-broască",
    t1_inst: "Activează enzima!",

    t2_title: "Revizuirea digestiei",
    t2_text: "Digestia descompune alimentele în componente de bază: carbohidrații în zaharuri, proteinele în aminoacizi și grăsimile în acizi grași.",
    t2_h1: "Mecanică și chimică", t2_h2: "Descompunerea nutrienților",
    t2_inst: "Ordonează procesul!",
    t2_w1: "Gura", t2_w2: "Stomac", t2_w3: "Intestin subțire", t2_w4: "Intestin gros",

    t3_title: "Absorbția nutrienților",
    t3_text: "În intestinul subțire, cele mai mici componente alimentare sunt absorbite în sânge prin vilozitățile intestinale (resorbție).",
    t3_h1: "Vilozități intestinale", t3_h2: "Resorbție",
    t3_inst: "Absoarbe nutrienții!",

    t4_title: "Respirația celulară",
    t4_text: "Respirația celulară descompune glucoza cu oxigen pentru a produce energie (ATP), CO2 și apă.",
    t4_h1: "Dezasimilație", t4_h2: "Necesar de oxigen",
    t4_inst: "Produce ATP!",

    t5_title: "ATP (Energie)",
    t5_text: "ATP (Adenozin Trifosfat) este transportorul universal de energie al celulei, oferind energie pentru toate procesele.",
    t5_h1: "Moneda energetică", t5_h2: "Grupări fosfat",
    t5_inst: "Încarcă bateria!",

    t6_title: "Anabolism vs. Catabolism",
    t6_text: "Anabolismul este sinteza substanțelor (consumă energie), catabolismul este descompunerea (eliberează energie).",
    t6_h1: "Sinteză vs. Descompunere", t6_h2: "Metabolism total",
    t6_inst: "Controlează metabolismul!",

    t7_title: "Impactul temperaturii",
    t7_text: "Viteza reacțiilor enzimatice crește cu temperatura până la un optim, după care enzimele sunt distruse.",
    t7_h1: "Regula RGT", t7_h2: "Denaturare",
    t7_inst: "Găsește optimul!",

    t8_title: "Rolul vitaminelor",
    t8_text: "Vitaminele sunt substanțe vitale pe care corpul nu le poate produce singur, necesare pentru funcționarea enzimelor.",
    t8_h1: "Nutrienți esențiali", t8_h2: "Coenzime",
    t8_inst: "Colectează vitamine!",

    t9_title: "Rolul mineralelor",
    t9_text: "Mineralele precum calciul sau magneziul sunt importante pentru structura osoasă, nervi și mușchi.",
    t9_h1: "Anorganic", t9_h2: "Electroliți",
    t9_inst: "Întărește corpul!",

    t10_title: "Deșeuri metabolice",
    t10_text: "Produsele reziduale precum ureea sau CO2 trebuie excretate prin rinichi, plămâni și piele.",
    t10_h1: "Excreție", t10_h2: "Detoxifiere",
    t10_inst: "Elimină deșeurile!",
  },
};

export const BIO_K7_I2_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "MitosisSvg", bg: "#F5F3FF" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔄", count: 2 }, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "cell_division" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "biologie-diagram", name: "MitosisSvg", bg: "#F5F3FF" },
    interactive: { type: "physics-stacker", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "cell_division" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "biologie-diagram", name: "DNAHelixSvg", bg: "#F8FAFC" },
    interactive: { type: "tap-count", tapCount: { emoji: "🧬", count: 4 }, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "cell_division" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🥚", color: "#F472B6" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["Meiose", "Keimzellen", "halber", "Chromosomensatz"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "cell_division" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "⭕", color: "#3B82F6" },
    interactive: { type: "tap-count", tapCount: { emoji: "⏳", count: 3 }, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "cell_cycle" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "biologie-diagram", name: "DNAHelixSvg", bg: "#F8FAFC" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "DNA wird in der ___ verdoppelt.", choices: ["S-Phase", "Nacht", "Pause", "Schule"], correctIndex: 0 },
    quiz: { generate: "cell_cycle" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "✂️", color: "#EF4444" },
    interactive: { type: "tap-count", tapCount: { emoji: "✂️", count: 3 }, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "cell_division" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🚦", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "G1", right: "Wachstum"}, {left: "S", right: "DNA"}, {left: "M", right: "Teilung"}] },
    quiz: { generate: "cell_cycle" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🎲", color: "#64748B" },
    interactive: { type: "tap-count", tapCount: { emoji: "🧬", count: 2 }, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "cell_division" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "⚠️", color: "#EF4444" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["unkontrolliert", "Tumore", "Teilung", "versagen"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "cell_cycle" }
  }
];

// ─── i3: FOTOSYNTHESE ────────────────────────────────────────────────

export const BIO_K7_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Photosynthese (Vertiefung)",
    t1_title: "Rolle des Chlorophylls",
    t1_text: "Chlorophyll ist das grüne Pigment, das Lichtenergie absorbiert und den Prozess der Photosynthese startet.",
    t1_h1: "Blattgrün", t1_h2: "Lichtabsorption",
    t1_inst: "Fange Photonen!",

    t2_title: "Lichtreaktion",
    t2_text: "In der Lichtreaktion wird Wasser gespalten (Photolyse), Sauerstoff freigesetzt und chemische Energie (ATP, NADPH) erzeugt.",
    t2_h1: "Thylakoidmembran", t2_h2: "Fotolyse des Wassers",
    t2_inst: "Starte die Lichtreaktion!",

    t3_title: "Dunkelreaktion (Calvin)",
    t3_text: "Im Calvin-Zyklus wird CO2 mithilfe der Energie aus der Lichtreaktion zu Glukose fixiert.",
    t3_h1: "Stroma", t3_h2: "CO2-Fixierung",
    t3_inst: "Baue Zuckermoleküle!",

    t4_title: "Glukoseproduktion",
    t4_text: "Das Hauptprodukt der Photosynthese ist Glukose (Traubenzucker), ein energiereicher organischer Stoff.",
    t4_h1: "C6H12O6", t4_h2: "Primärproduktion",
    t4_inst: "Synthetisiere Glukose!",
    t4_w1: "Wasser", t4_w2: "Licht", t4_w3: "CO2", t4_w4: "Zucker",

    t5_title: "Sauerstofffreisetzung",
    t5_text: "Sauerstoff entsteht als 'Abfallprodukt' bei der Spaltung von Wasser und wird an die Umwelt abgegeben.",
    t5_h1: "Nebenprodukt", t5_h2: "Überlebenswichtig",
    t5_inst: "Lass O2 frei!",

    t6_title: "CO2-Aufnahme",
    t6_text: "Pflanzen nehmen Kohlendioxid aus der Luft auf, das als Kohlenstoffquelle für den Zuckeraufbau dient.",
    t6_h1: "Kohlenstoffquelle", t6_h2: "Atmosphärisches Gas",
    t6_inst: "Nimm CO2 auf!",

    t7_title: "Spaltöffnungen (Stomata)",
    t7_text: "Die Stomata regulieren den Gasaustausch und die Wasserverdunstung (Transpiration) der Pflanze.",
    t7_h1: "Gasaustausch", t7_h2: "Schließzellen",
    t7_inst: "Öffne die Stomata!",

    t8_title: "Begrenzende Faktoren",
    t8_text: "Lichtintensität, Temperatur und CO2-Gehalt beeinflussen die Rate der Photosynthese.",
    t8_h1: "Minimumgesetz", t8_h2: "Optimierung",
    t8_inst: "Passe die Bedingungen an!",

    t9_title: "Wassertransport",
    t9_text: "Wasser wird von den Wurzeln durch das Xylem bis in die Blätter transportiert, getrieben durch Transpirationssog.",
    t9_h1: "Xylem", t9_h2: "Transpirationssog",
    t9_inst: "Pumpe Wasser hoch!",

    t10_title: "Energiespeicherung",
    t10_text: "Überschüssige Glukose wird in Form von Stärke als wasserunlöslicher Vorrat in Chloroplasten oder Wurzeln gespeichert.",
    t10_h1: "Stärke", t10_h2: "Vorratsspeicher",
    t10_inst: "Lagere Stärke ein!",
  },
  en: {
    explorer_title: "Photosynthesis (Advanced)",
    t1_title: "Role of Chlorophyll",
    t1_text: "Chlorophyll is the green pigment that absorbs light energy and initiates the process of photosynthesis.",
    t1_h1: "Leaf green", t1_h2: "Light absorption",
    t1_inst: "Catch photons!",

    t2_title: "Light Reaction",
    t2_text: "In the light reaction, water is split (photolysis), oxygen is released, and chemical energy (ATP, NADPH) is generated.",
    t2_h1: "Thylakoid membrane", t2_h2: "Photolysis of water",
    t2_inst: "Start the light reaction!",

    t3_title: "Dark Reaction (Calvin)",
    t3_text: "In the Calvin cycle, CO2 is fixed into glucose using the energy produced in the light reaction.",
    t3_h1: "Stroma", t3_h2: "CO2 fixation",
    t3_inst: "Build sugar molecules!",

    t4_title: "Glucose Production",
    t4_text: "The main product of photosynthesis is glucose, an energy-rich organic substance.",
    t4_h1: "C6H12O6", t4_h2: "Primary production",
    t4_inst: "Synthesize glucose!",
    t4_w1: "Water", t4_w2: "Light", t4_w3: "CO2", t4_w4: "Sugar",

    t5_title: "Oxygen Release",
    t5_text: "Oxygen is produced as a 'waste product' during the splitting of water and is released into the environment.",
    t5_h1: "By-product", t5_h2: "Vital for life",
    t5_inst: "Release O2!",

    t6_title: "CO2 Uptake",
    t6_text: "Plants take in carbon dioxide from the air, which serves as the carbon source for building sugar.",
    t6_h1: "Carbon source", t6_h2: "Atmospheric gas",
    t6_inst: "Take in CO2!",

    t7_title: "Stomata Control",
    t7_text: "Stomata regulate gas exchange and water evaporation (transpiration) of the plant.",
    t7_h1: "Gas exchange", t7_h2: "Guard cells",
    t7_inst: "Open the stomata!",

    t8_title: "Limiting Factors",
    t8_text: "Light intensity, temperature, and CO2 levels influence the rate of photosynthesis.",
    t8_h1: "Law of the minimum", t8_h2: "Optimization",
    t8_inst: "Adjust conditions!",

    t9_title: "Water Transport",
    t9_text: "Water is transported from roots to leaves through the xylem, driven by transpiration pull.",
    t9_h1: "Xylem", t9_h2: "Transpiration pull",
    t9_inst: "Pump water up!",

    t10_title: "Plant Energy Storage",
    t10_text: "Excess glucose is stored as starch, a water-insoluble reserve in chloroplasts or roots.",
    t10_h1: "Starch", t10_h2: "Reserve storage",
    t10_inst: "Store starch!",
  },
  hu: {
    explorer_title: "Fotoszintézis (Emelt)",
    t1_title: "Klorofill szerepe",
    t1_text: "A klorofill a zöld színtestek pigmentje, amely elnyeli a fényenergiát és elindítja a fotoszintézist.",
    t1_h1: "Zöld színanyag", t1_h2: "Fényelnyelés",
    t1_inst: "Fogj fel fotonokat!",

    t2_title: "Fényszakasz",
    t2_text: "A fényszakaszban a víz felbomlik (fotolízis), oxigén szabadul fel és kémiai energia (ATP, NADPH) termelődik.",
    t2_h1: "Tilakoid membrán", t2_h2: "Víz fotolízise",
    t2_inst: "Indítsd el a fényszakaszt!",

    t3_title: "Sötétszakasz (Calvin)",
    t3_text: "A Calvin-ciklusban a CO2 szerves anyaggá (szőlőcukorrá) kötődik meg a fényszakasz energiája segítségével.",
    t3_h1: "Sztróma", t3_h2: "CO2 megkötés",
    t3_inst: "Építs cukormolekulákat!",

    t4_title: "Cukortermelés",
    t4_text: "A fotoszintézis fő terméke a szőlőcukor (glükóz), amely egy energiadús szerves vegyület.",
    t4_h1: "C6H12O6", t4_h2: "Elsődleges termelés",
    t4_inst: "Szintetizálj glükózt!",
    t4_w1: "Víz", t4_w2: "Fény", t4_w3: "CO2", t4_w4: "Cukor",

    t5_title: "Oxigénfelszabadulás",
    t5_text: "Az oxigén a víz bontása során keletkező melléktermék, amely a környezetbe távozik.",
    t5_h1: "Melléktermék", t5_h2: "Létfontosságú",
    t5_inst: "Engedj szabadon O2-t!",

    t6_title: "CO2 felvétel",
    t6_text: "A növények a levegőből veszik fel a szén-dioxidot, amely a cukor felépítéséhez szükséges szénforrás.",
    t6_h1: "Szénforrás", t6_h2: "Légköri gáz",
    t6_inst: "Vegyél fel CO2-t!",

    t7_title: "Gázcserenyílások",
    t7_text: "A gázcserenyílások (sztómák) szabályozzák a gázcserét és a növény párologtatását (transzspiráció).",
    t7_h1: "Gázcsere", t7_h2: "Zárósejtek",
    t7_inst: "Nyisd ki a sztómákat!",

    t8_title: "Korlátozó tényezők",
    t8_text: "A fényerősség, a hőmérséklet és a CO2-szint befolyásolják a fotoszintézis sebességét.",
    t8_h1: "Minimumtörvény", t8_h2: "Optimalizálás",
    t8_inst: "Állítsd be a feltételeket!",

    t9_title: "Vízszállítás",
    t9_text: "A vizet a gyökerektől a levelekig a facsövek (xilém) szállítják a párologtatási szívóerő hatására.",
    t9_h1: "Facsövek", t9_h2: "Párologtatási szívóerő",
    t9_inst: "Pumpáld fel a vizet!",

    t10_title: "Energia tárolása",
    t10_text: "A fölösleges cukor keményítő formájában tárolódik a zöld színtestekben vagy a gyökerekben.",
    t10_h1: "Keményítő", t10_h2: "Tartalék tápanyag",
    t10_inst: "Raktározz keményítőt!",
  },
  ro: {
    explorer_title: "Fotosinteză (Avansat)",
    t1_title: "Rolul clorofilei",
    t1_text: "Clorofila este pigmentul verde care absoarbe energia luminoasă și inițiază procesul de fotosinteză.",
    t1_h1: "Verdele frunzei", t1_h2: "Absorbția luminii",
    t1_inst: "Captează fotoni!",

    t2_title: "Reacția la lumină",
    t2_text: "În faza de lumină, apa este descompusă (fotoliză), se eliberează oxigen și se generează energie chimică (ATP, NADPH).",
    t2_h1: "Membrana tilacoidă", t2_h2: "Fotoliza apei",
    t2_inst: "Începe faza de lumină!",

    t3_title: "Reacția la întuneric",
    t3_text: "În ciclul Calvin, CO2 este fixat în glucoză folosind energia produsă în faza de lumină.",
    t3_h1: "Stroma", t3_h2: "Fixarea CO2",
    t3_inst: "Construiește molecule de zahăr!",

    t4_title: "Producția de glucoză",
    t4_text: "Produsul principal al fotosintezei este glucoza, o substanță organică bogată în energie.",
    t4_h1: "C6H12O6", t4_h2: "Producție primară",
    t4_inst: "Sintetizează glucoza!",
    t4_w1: "Apă", t4_w2: "Lumină", t4_w3: "CO2", t4_w4: "Zahăr",

    t5_title: "Eliberarea de oxigen",
    t5_text: "Oxigenul este produs ca un 'produs rezidual' în timpul descompunerii apei și este eliberat în mediu.",
    t5_h1: "Produs secundar", t5_h2: "Vital pentru viață",
    t5_inst: "Eliberează O2!",

    t6_title: "Absorbția de CO2",
    t6_text: "Plantele absorb dioxidul de carbon din aer, care servește ca sursă de carbon pentru construirea zahărului.",
    t6_h1: "Sursă de carbon", t6_h2: "Gaz atmosferic",
    t6_inst: "Absoarbe CO2!",

    t7_title: "Controlul stomatelor",
    t7_text: "Stomatele reglează schimbul de gaze și evaporarea apei (transpirația) plantei.",
    t7_h1: "Schimb de gaze", t7_h2: "Celule stomatice",
    t7_inst: "Deschide stomatele!",

    t8_title: "Factori limitanți",
    t8_text: "Intensitatea luminii, temperatura și nivelul de CO2 influențează rata fotosintezei.",
    t8_h1: "Legea minimului", t8_h2: "Optimizare",
    t8_inst: "Ajustează condițiile!",

    t9_title: "Transportul apei",
    t9_text: "Apa este transportată de la rădăcini la frunze prin xilem, fiind condusă de forța de sucțiune a transpirației.",
    t9_h1: "Xilem", t9_h2: "Sucțiune de transpirație",
    t9_inst: "Pompează apa sus!",

    t10_title: "Stocarea energiei",
    t10_text: "Excesul de glucoză este stocat sub formă de amidon, o rezervă insolubilă în apă, în cloroplaste sau rădăcini.",
    t10_h1: "Amidon", t10_h2: "Rezervă de hrană",
    t10_inst: "Depozitează amidon!",
  },
};

export const BIO_K7_I3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "ChloroplastSvg", bg: "#ECFDF5" },
    interactive: { type: "tap-count", tapCount: { emoji: "☀️", count: 3 }, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "photosynthesis_detail" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🍭", color: "#FACC15" },
    interactive: { type: "highlight-text", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", tokens: ["Calvin-Zyklus", "Kohlendioxid", "Glukose", "Dunkelreaktion"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "photosynthesis_detail" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🍃", color: "#10B981" },
    interactive: { type: "tap-count", tapCount: { emoji: "🟢", count: 3 }, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "photosynthesis_detail" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "⚗️", color: "#64748B" },
    interactive: { type: "physics-stacker", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "photosynthesis_detail" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "⚡", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "Licht wird zu ___ Energie.", choices: ["chemischer", "lauter", "kalter", "blauer"], correctIndex: 0 },
    quiz: { generate: "energy_transfer" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🥔", color: "#92400E" },
    interactive: { type: "tap-count", tapCount: { emoji: "📦", count: 2 }, instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "photosynthesis_detail" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🌎", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Pflanze", right: "Erzeuger"}, {left: "Tier", right: "Nutzer"}, {left: "Mensch", right: "Abhängig"}] },
    quiz: { generate: "photosynthesis_detail" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "👄", color: "#F472B6" },
    interactive: { type: "tap-count", tapCount: { emoji: "💨", count: 4 }, instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "photosynthesis_detail" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🌈", color: "#FACC15" },
    interactive: { type: "match-pairs", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", pairs: [{left: "Rot", right: "Nutzen"}, {left: "Blau", right: "Nutzen"}, {left: "Grün", right: "Reflexion"}] },
    quiz: { generate: "photosynthesis_detail" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "📈", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", sentence: "Mehr ___ beschleunigt die Fotosynthese.", choices: ["Licht", "Sand", "Wind", "Lärm"], correctIndex: 0 },
    quiz: { generate: "photosynthesis_detail" }
  }
];

// ─── i4: ZELLATMUNG ──────────────────────────────────────────────────

export const BIO_K7_I4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zellatmung",
    
    // T1: Zellatmung
    t1_title: "Energie gewinnen",
    t1_text: "Bei der Zellatmung wird Glukose mit Sauerstoff zu CO2 und Wasser abgebaut, um Energie (ATP) zu gewinnen.",
    t1_h1: "ATP-Gewinnung", t1_h2: "Abbauprozess",
    t1_inst: "Veratme den Zucker!",
    t1_q: "In welcher Organelle findet die Zellatmung hauptsächlich statt?",
    t1_qa: "Mitochondrium", t1_qb: "Chloroplast", t1_qc: "Zellkern", t1_qd: "Vakuole",

    // T2: Aerob vs. Anaerob
    t2_title: "Aerob und Anaerob",
    t2_text: "Aerob bedeutet 'mit Sauerstoff', anaerob bedeutet 'ohne Sauerstoff'. Ohne Sauerstoff entsteht Gärung.",
    t2_h1: "Sauerstoffbedarf", t2_h2: "Gärung",
    t2_inst: "Wähle den Weg!",
    t2_q: "Was bedeutet der Begriff 'aerob'?",
    t2_qa: "Mit Sauerstoff", t2_qb: "Ohne Sauerstoff", t2_qc: "Unter Wasser", t2_qd: "Im Dunkeln",

    // T3: Glykolyse
    t3_title: "Die Glykolyse",
    t3_text: "Der erste Schritt des Abbaus findet im Zytoplasma statt und braucht keinen Sauerstoff.",
    t3_h1: "Zellplasma", t3_h2: "Zuckerspaltung",
    t3_inst: "Spalte die Glukose!",
    t3_q: "Wo findet die Glykolyse statt?",
    t3_qa: "Im Zytoplasma", t3_qb: "Im Mitochondrium", t3_qc: "Im Ribosom", t3_qd: "In der Membran",

    // T4: Zitronensäurezyklus
    t4_title: "Zitronensäurezyklus",
    t4_text: "Dieser Kreislauf findet in der Matrix der Mitochondrien statt und liefert wichtige Energie-Zwischenspeicher.",
    t4_h1: "Mitochondrien-Matrix", t4_h2: "Krebs-Zyklus",
    t4_inst: "Folge dem Kreis!",

    // T5: Atmungskette
    t5_title: "Die Atmungskette",
    t5_text: "An der inneren Mitochondrienmembran wird der meiste Anteil an ATP produziert.",
    t5_h1: "ATP-Fabrik", t5_h2: "Innere Membran",
    t5_inst: "Pumpe Protonen!",

    // T6: Milchsäuregärung
    t6_title: "Muskelkater",
    t6_text: "Wenn Muskeln zu wenig Sauerstoff bekommen, schalten sie auf Milchsäuregärung um – das brennt!",
    t6_h1: "Laktatbildung", t6_h2: "Energie-Notprogramm",
    t6_inst: "Trainiere hart!",

    // T7: Wasser als Produkt
    t7_title: "Stoffwechselwasser",
    t7_text: "Bei der Zellatmung entsteht neben CO2 auch Wasser, das der Körper nutzen kann.",
    t7_h1: "Endprodukt Wasser", t7_h2: "Chemische Reaktion",
    t7_inst: "Sammle das Wasser!",

    // T8: ATP
    t8_title: "Die Energiewährung",
    t8_text: "ATP (Adenosintriphosphat) ist wie eine geladene Batterie, die Energie für alle processes bereitstellt.",
    t8_h1: "Universelle Energie", t8_h2: "Batterie der Zelle",
    t8_inst: "Lade ATP auf!",

    // T9: Hefegärung
    t9_title: "Hefegärung",
    t9_text: "Hefezellen gewinnen Energie ohne Sauerstoff, indem sie Zucker in Alkohol und CO2 umwandeln. Das nutzt man beim Backen.",
    t9_h1: "Ohne Sauerstoff", t9_h2: "Alkoholische Gärung",
    t9_inst: "Lass den Teig gehen!",

    // T10: Energiebilanz
    t10_title: "Energiebilanz",
    t10_text: "Die aerobe Atmung ist viel effizienter als die Gärung. Sie liefert pro Zuckermolekül etwa 32 ATP-Moleküle.",
    t10_h1: "Hohe Effizienz", t10_h2: "Viel ATP",
    t10_inst: "Maximiere die Energie!",
  },
};

export const BIO_K7_I4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "MitochondriaSvg", bg: "#FDF2F8" },
    interactive: { type: "tap-count", tapCount: { emoji: "⚡", count: 3 }, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "cellular_respiration" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🌬️", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", buckets: [{id: "aerob", label: "Aerob"}, {id: "anaerob", label: "Anaerob"}], items: [{text: "Zellatmung", bucketId: "aerob"}, {text: "Milchsäure", bucketId: "anaerob"}, {text: "Hefegärung", bucketId: "anaerob"}, {text: "Viel ATP", bucketId: "aerob"}] },
    quiz: { generate: "cellular_respiration" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🧩", color: "#64748B" },
    interactive: { type: "tap-count", tapCount: { emoji: "✂️", count: 3 }, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "cellular_respiration" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🔄", color: "#F59E0B" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["Zitronensäurezyklus", "Matrix", "Energie", "Kreislauf"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "cellular_respiration" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "biologie-diagram", name: "MitochondriaSvg", bg: "#FDF2F8" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔋", count: 5 }, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "cellular_respiration" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🏃", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "Bei Sauerstoffmangel entsteht ___.", choices: ["Milchsäure", "Cola", "Luft", "Wachs"], correctIndex: 0 },
    quiz: { generate: "cellular_respiration" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "💧", color: "#3B82F6" },
    interactive: { type: "tap-count", tapCount: { emoji: "💧", count: 3 }, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "cellular_respiration" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🔋", color: "#FACC15" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "ATP", right: "Energie"}, {left: "ADP", right: "Leer"}, {left: "P", right: "Phosphat"}] },
    quiz: { generate: "energy_transfer" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🍞", color: "#92400E" },
    interactive: { type: "tap-count", tapCount: { emoji: "🫧", count: 4 }, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "cellular_respiration" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "📊", color: "#64748B" },
    interactive: { type: "gap-fill", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", sentence: "Aerobe Atmung bringt ___ ATP.", choices: ["32", "2", "0", "100"], correctIndex: 0 },
    quiz: { generate: "cellular_respiration" }
  }
];

// ─── i5: ÖKOLOGIE ────────────────────────────────────────────────────

export const BIO_K7_I5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Ökologie",
    
    // T1: Population
    t1_title: "Die Population",
    t1_text: "Eine Population ist eine Gruppe von Individuen derselben Art, die im gleichen Gebiet leben.",
    t1_h1: "Artgleiche Gruppe", t1_h2: "Gemeinsamer Raum",
    t1_inst: "Zähle die Gruppe!",
    t1_q: "Was versteht man unter einer Population?",
    t1_qa: "Individuen derselben Art im Gebiet", t1_qb: "Alle Tiere im Wald", t1_qc: "Ein einzelnes Tier", t1_qd: "Pflanzen und Steine",

    // T2: Tragfähigkeit (K)
    t2_title: "Die Tragfähigkeit",
    t2_text: "Ein Ökosystem kann nur eine begrenzte Anzahl an Individuen versorgen (Ressourcenlimit).",
    t2_h1: "Obergrenze", t2_h2: "Ressourcenmangel",
    t2_inst: "Fülle den Raum!",
    t2_q: "Was begrenzt das Wachstum einer Population?",
    t2_qa: "Begrenzte Ressourcen", t2_qb: "Unendlich viel Platz", t2_qc: "Nur Raubtiere", t2_qd: "Zufall",

    // T3: Ökologische Nische
    t3_title: "Die ökologische Nische",
    t3_text: "Die Nische ist nicht nur ein Ort, sondern der 'Beruf' oder die Rolle einer Art im System.",
    t3_h1: "Funktionale Rolle", t3_h2: "Kein Ort, sondern Job",
    t3_inst: "Finde den Job!",
    t3_q: "Zwei Arten können dauerhaft nur koexistieren, wenn...",
    t3_qa: "sie verschiedene Nischen haben", t3_qb: "sie genau gleich sind", t3_qc: "sie sich bekämpfen", t3_qd: "eine Art stirbt",

    // T4: Konkurrenz
    t4_title: "Wettbewerb",
    t4_text: "Individuen kämpfen um Licht, Nahrung oder Partner – sowohl innerhalb einer Art als auch zwischen Arten.",
    t4_h1: "Ressourcenkampf", t4_h2: "Survival of the fittest",
    t4_inst: "Sichere dir Futter!",

    // T5: Räuber-Beute-Beziehung
    t5_title: "Räuber und Beute",
    t5_text: "Die Populationsgrößen von Räuber und Beute beeinflussen sich gegenseitig (Lotka-Volterra-Regeln).",
    t5_h1: "Gegenseitige Abhängigkeit", t5_h2: "Zyklische Schwankungen",
    t5_inst: "Fang die Beute!",

    // T6: Abiotische Faktoren
    t6_title: "Unbelebte Umwelt",
    t6_text: "Temperatur, Licht, Wasser und Bodenbeschaffenheit bestimmen, wo ein Organismus leben kann.",
    t6_h1: "Temperatur & Licht", t6_h2: "Nicht-lebende Einflüsse",
    t6_inst: "Stelle das Klima ein!",

    // T7: Biotische Faktoren
    t7_title: "Belebte Umwelt",
    t7_text: "Konkurrenten, Feinde, Parasiten und Partner sind biotische Einflüsse auf ein Lebewesen.",
    t7_h1: "Lebende Einflüsse", t7_h2: "Interaktionen",
    t7_inst: "Wer beeinflusst wen?",

    // T8: Ökosystem-Gleichgewicht
    t8_title: "Gleichgewicht",
    t8_text: "Ein stabiles Ökosystem kann Störungen ausgleichen und seine Vielfalt bewahren.",
    t8_h1: "Stabilität", t8_h2: "Selbstregulation",
    t8_inst: "Halte die Balance!",

    // T9: Sukzession
    t9_title: "Sukzession",
    t9_text: "Nach einer Störung (z.B. Brand) besiedeln neue Arten das Gebiet in einer bestimmten Abfolge.",
    t9_h1: "Abfolge", t9_h2: "Pionierpflanzen",
    t9_inst: "Besiedle das Land!",

    // T10: Biodiversität
    t10_title: "Biodiversität",
    t10_text: "Ein Ökosystem ist umso stabiler, je mehr verschiedene Arten (Vielfalt) darin vorkommen.",
    t10_h1: "Artenvielfalt", t10_h2: "Reichtum der Natur",
    t10_inst: "Schütze die Vielfalt!",
  },
};

export const BIO_K7_I5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "👥", color: "#2980B9" },
    interactive: { type: "tap-count", tapCount: { emoji: "🦌", count: 4 }, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "population" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🛑", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "Die ___ begrenzt die Anzahl.", choices: ["Tragfähigkeit", "Autobahn", "Schule", "Wolke"], correctIndex: 0 },
    quiz: { generate: "population" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "💼", color: "#F59E0B" },
    interactive: { type: "highlight-text", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", tokens: ["Nische", "Rolle", "Ökosystem", "Beruf"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "ecological_niche" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "⚔️", color: "#64748B" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left: "Licht", right: "Pflanzen"}, {left: "Nahrung", right: "Tiere"}, {left: "Partner", right: "Fortpflanzung"}] },
    quiz: { generate: "competition" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🦊", color: "#FB923C" },
    interactive: { type: "tap-count", tapCount: { emoji: "🐰", count: 3 }, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "population" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🌡️", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{id: "abio", label: "Abiotisch"}, {id: "bio", label: "Biotisch"}], items: [{text: "Temperatur", bucketId: "abio"}, {text: "Licht", bucketId: "abio"}, {text: "Raubtier", bucketId: "bio"}, {text: "Pilz", bucketId: "bio"}] },
    quiz: { generate: "population" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🐜", color: "#10B981" },
    interactive: { type: "tap-count", tapCount: { emoji: "🤝", count: 3 }, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "population" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#64748B" },
    interactive: { type: "tap-count", tapCount: { emoji: "⚖️", count: 3 }, instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "population" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🌱", color: "#10B981" },
    interactive: { type: "physics-stacker", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", words: ["Pionier", "Gras", "Strauch", "Baum"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "population" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🦋", color: "#F472B6" },
    interactive: { type: "tap-count", tapCount: { emoji: "🦋", count: 5 }, instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "population" }
  }
];

// ─── i6: SZIMBIÓZIS & KÖRFORGÁSOK ─────────────────────────────────────

export const BIO_K7_I6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Symbiose & Kreisläufe",
    
    // T1: Symbiose
    t1_title: "Was ist Symbiose?",
    t1_text: "Symbiose beschreibt das enge Zusammenleben verschiedener Arten zum gegenseitigen Nutzen (Mutualismus).",
    t1_h1: "Gemeinsamer Vorteil", t1_h2: "Zusammenleben",
    t1_inst: "Suche Partner!",
    t1_q: "Wie nennt man eine Symbiose, bei der beide Partner profitieren?",
    t1_qa: "Mutualismus", t1_qb: "Parasitismus", t1_qc: "Kommensalismus", t1_qd: "Konkurrenz",

    // T2: Parasitismus
    t2_title: "Der Parasit",
    t2_text: "Ein Parasit lebt auf Kosten eines Wirts. Er schädigt ihn, tötet ihn aber meist nicht sofort.",
    t2_h1: "Einseitiger Nutzen", t2_h2: "Schädigung des Wirts",
    t2_inst: "Entferne den Parasiten!",
    t2_q: "Was ist ein Beispiel für Parasitismus?",
    t2_qa: "Zecke auf einem Hund", t2_qb: "Biene auf einer Blume", t2_qc: "Clownfisch in Anemone", t2_qd: "Vogel im Nest",

    // T3: Stickstoffkreislauf
    t3_title: "Stickstoffkreislauf",
    t3_text: "Stickstoff ist wichtig für Proteine. Bakterien im Boden wandeln Luftstickstoff für Pflanzen nutzbar um.",
    t3_h1: "Bakterienhilfe", t3_h2: "Nährstoff für Pflanzen",
    t3_inst: "Fixiere Stickstoff!",
    t3_q: "Wer kann Luftstickstoff direkt binden?",
    t3_qa: "Bestimmte Bakterien", t3_qb: "Alle Tiere", t3_qc: "Steine", t3_qd: "Wolken",

    // T4: Kohlenstoffkreislauf
    t4_title: "Kohlenstoffkreislauf",
    t4_text: "Kohlenstoff wandert zwischen Atmosphäre (CO2), Pflanzen (Fotosynthese) und Tieren (Atmung).",
    t4_h1: "CO2-Kreislauf", t4_h2: "Fotosynthese & Atmung",
    t4_inst: "Lass das CO2 wandern!",

    // T5: Destruenten
    t5_title: "Die Müllabfuhr",
    t5_text: "Pilze und Bakterien zersetzen organisches Material und machen Nährstoffe wieder verfügbar.",
    t5_h1: "Zersetzung", t5_h2: "Recycling",
    t5_inst: "Zersetze das Laub!",

    // T6: Kommensalismus
    t6_title: "Nutznießer",
    t6_text: "Beim Kommensalismus profitiert einer, während es für den anderen egal ist (neutral).",
    t6_h1: "Neutraler Partner", t6_h2: "Einfacher Vorteil",
    t6_inst: "Folge dem Großen!",

    // T7: Mykorrhiza
    t7_title: "Pilz & Baum",
    t7_text: "Pilze an Baumwurzeln helfen bei der Wasseraufnahme und erhalten dafür Zucker vom Baum.",
    t7_h1: "Wurzelsymbiose", t7_h2: "Tauschhandel",
    t7_inst: "Tausche Wasser!",

    // T8: Wasserzyklus
    t8_title: "Wasserzyklus",
    t8_text: "Verdunstung, Wolkenbildung und Niederschlag halten das Wasser weltweit in Bewegung.",
    t8_h1: "Regen & Sonne", t8_h2: "Ständiger Fluss",
    t8_inst: "Lass es regnen!",

    // T9: Die Flechten
    t9_title: "Die Flechten",
    t9_text: "Flechten sind eine Symbiose aus Pilz und Alge. Der Pilz gibt Halt, die Alge macht Nahrung.",
    t9_h1: "Zweiergemeinschaft", t9_h2: "Überlebenskünstler",
    t9_inst: "Baue die Flechte!",

    // T10: CO2 & Klima
    t10_title: "CO2 & Klima",
    t10_text: "Durch das Verbrennen fossiler Stoffe gelangt zu viel CO2 in den Kreislauf, was zur Erderwärmung führt.",
    t10_h1: "Treibhauseffekt", t10_h2: "Klimaschutz",
    t10_inst: "Reduziere den Ausstoß!",
  },
};

export const BIO_K7_I6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left: "Biene", right: "Blume"}, {left: "Pilz", right: "Wurzel"}, {left: "Clownfisch", right: "Anemone"}] },
    quiz: { generate: "symbiosis" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🦟", color: "#EF4444" },
    interactive: { type: "tap-count", tapCount: { emoji: "🦟", count: 3 }, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "symbiosis" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🧪", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "___ fixieren Stickstoff.", choices: ["Bakterien", "Vögel", "Autos", "Fische"], correctIndex: 0 },
    quiz: { generate: "biogeochemical_cycles" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "☁️", color: "#64748B" },
    interactive: { type: "tap-count", tapCount: { emoji: "🌱", count: 2 }, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "biogeochemical_cycles" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🍄", color: "#92400E" },
    interactive: { type: "tap-count", tapCount: { emoji: "🍂", count: 3 }, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "biogeochemical_cycles" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🦈", color: "#0EA5E9" },
    interactive: { type: "highlight-text", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tokens: ["Kommensalismus", "Nutznießer", "Neutral", "Vorteil"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "symbiosis" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🌳", color: "#166534" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Pilz", right: "Wasser"}, {left: "Baum", right: "Zucker"}, {left: "Ort", right: "Wurzel"}] },
    quiz: { generate: "symbiosis" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🌧️", color: "#3B82F6" },
    interactive: { type: "tap-count", tapCount: { emoji: "💧", count: 4 }, instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "biogeochemical_cycles" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🪨", color: "#64748B" },
    interactive: { type: "match-pairs", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", pairs: [{left: "Alge", right: "Zucker"}, {left: "Pilz", right: "Halt"}, {left: "Zusammen", right: "Flechte"}] },
    quiz: { generate: "symbiosis" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🌡️", color: "#EF4444" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["Verbrennen", "CO2", "Klima", "Erwärmung"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "biogeochemical_cycles" }
  }
];

// ─── i7: IMMUNSYSTEM ─────────────────────────────────────────────────

export const BIO_K7_I7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Immunsystem",
    
    // T1: Die Abwehr
    t1_title: "Körperabwehr",
    t1_text: "Das Immunsystem schützt uns vor Bakterien, Viren und anderen Krankheitserregern.",
    t1_h1: "Schutzschild", t1_h2: "Abwehr von Feinden",
    t1_inst: "Stoppe die Viren!",
    t1_q: "Was ist die Hauptaufgabe des Immunsystems?",
    t1_qa: "Abwehr von Krankheiten", t1_qb: "Verdauung", t1_qc: "Blutpumpen", t1_qd: "Denken",

    // T2: Lymphozyten
    t2_title: "Lymphozyten",
    t2_text: "B-Zellen und T-Zellen sind spezialisierte weiße Blutzellen, die gezielt Erreger erkennen und bekämpfen.",
    t2_h1: "Spezialkräfte", t2_h2: "Weiße Blutzellen",
    t2_inst: "Aktiviere die Zellen!",
    t2_q: "Welche Zellen produzieren Antikörper?",
    t2_qa: "B-Zellen", t2_qb: "T-Zellen", t2_qc: "Rote Blutzellen", t2_qd: "Nervenzellen",

    // T3: Antikörper
    t3_title: "Antikörper",
    t3_text: "Antikörper sind Proteine, die wie Schlüssel zu den Schlössern (Antigenen) der Erreger passen und diese markieren.",
    t3_h1: "Passgenauer Schutz", t3_h2: "Markierung von Feinden",
    t3_inst: "Finde das passende Schloss!",
    t3_q: "Woran binden Antikörper?",
    t3_qa: "An Antigene", t3_qb: "An Vitamine", t3_qc: "An Knochen", t3_qd: "An Haare",

    // T4: Fresszellen (Makrophagen)
    t4_title: "Makrophagen",
    t4_text: "Makrophagen sind große Fresszellen, die markierte Erreger einfach umschließen und verdauen.",
    t4_h1: "Fresszellen", t4_h2: "Aufräumkommando",
    t4_inst: "Friss den Keim!",

    // T5: Immungedächtnis
    t5_title: "Gedächtniszellen",
    t5_text: "Nach einer Infektion bleiben Gedächtniszellen zurück, die bei erneutem Kontakt sofort reagieren können.",
    t5_h1: "Lerneffekt", t5_h2: "Schnelle Reaktion",
    t5_inst: "Erinnere dich!",

    // T6: Impfung
    t6_title: "Die Impfung",
    t6_text: "Eine Impfung trainiert das Immunsystem mit abgeschwächten Erregern, ohne die Krankheit auszulösen.",
    t6_h1: "Training", t6_h2: "Vorsorge",
    t6_inst: "Gib die Impfung!",

    // T7: Entzündung
    t7_title: "Entzündungsreaktion",
    t7_text: "Rötung, Schwellung und Wärme zeigen, dass das Immunsystem an einer Stelle aktiv arbeitet.",
    t7_h1: "Abwehrsignal", t7_h2: "Heilungsprozess",
    t7_inst: "Kühle die Stelle!",

    // T8: Allergie
    t8_title: "Allergie",
    t8_text: "Bei einer Allergie reagiert das Immunsystem overtrieben stark auf eigentlich harmlose Stoffe (Pollen, Staub).",
    t8_h1: "Fehlalarm", t8_h2: "Overreaktion",
    t8_inst: "Stoppe den Fehlalarm!",

    // T9: Aktive Immunisierung
    t9_title: "Aktive Impfung",
    t9_text: "Der Körper bildet nach einer Impfung selbst Antikörper und Gedächtniszellen. Das hält lange an.",
    t9_h1: "Selbstschutz", t9_h2: "Langanhaltend",
    t9_inst: "Bilde Antikörper!",

    // T10: Autoimmunkrankheit
    t10_title: "Autoimmunität",
    t10_text: "Manchmal greift das Immunsystem fälschlicherweise eigene Körperzellen an, als wären sie Feinde.",
    t10_h1: "Eigenangriff", t10_h2: "Fehlsteuerung",
    t10_inst: "Erkenne den Fehler!",
  },
};

export const BIO_K7_I7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#8E44AD" },
    interactive: { type: "tap-count", tapCount: { emoji: "🦠", count: 4 }, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "immune_response" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "⚪", color: "#F8FAFC" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{left: "B-Zelle", right: "Antikörper"}, {left: "T-Zelle", right: "Killer"}, {left: "Fresszelle", right: "Verdauung"}] },
    quiz: { generate: "immune_cells" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🔑", color: "#FACC15" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "Antikörper passen zu ___.", choices: ["Antigenen", "Schuhen", "Fenstern", "Broten"], correctIndex: 0 },
    quiz: { generate: "immune_response" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "😋", color: "#EF4444" },
    interactive: { type: "tap-count", tapCount: { emoji: "🍽️", count: 2 }, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "immune_cells" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#EC4899" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["Immungedächtnis", "Gedächtniszellen", "schneller", "reagieren"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "immune_response" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "💉", color: "#3B82F6" },
    interactive: { type: "tap-count", tapCount: { emoji: "💉", count: 3 }, instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "vaccination" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🔥", color: "#EF4444" },
    interactive: { type: "tap-count", tapCount: { emoji: "🧊", count: 3 }, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "immune_response" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🤧", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Allergie ist eine ___.", choices: ["Overreaktion", "Pause", "Freude", "Farbe"], correctIndex: 0 },
    quiz: { generate: "immune_response" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#10B981" },
    interactive: { type: "tap-count", tapCount: { emoji: "🛡️", count: 3 }, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "vaccination" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "❌", color: "#EF4444" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["Autoimmunität", "eigene", "Zellen", "angreifen"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "immune_response" }
  }
];

// ─── i8: NERVENSYSTEM ────────────────────────────────────────────────

export const BIO_K7_I8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Nervensystem",
    
    // T1: Das Neuron
    t1_title: "Die Nervenzelle (Neuron)",
    t1_text: "Das Neuron ist der Baustein des Nervensystems. Es leitet elektrische Signale über weite Strecken weiter.",
    t1_h1: "Informationsleitung", t1_h2: "Zellkörper & Ausläufer",
    t1_inst: "Baue das Neuron!",
    t1_q: "Wie nennt man die Fortsätze, die Signale zum Zellkörper leiten?",
    t1_qa: "Dendriten", t1_qb: "Axone", t1_qc: "Synapsen", t1_qd: "Muskeln",

    // T2: Das Axon
    t2_title: "Das Axon",
    t2_text: "Das Axon ist ein langer Fortsatz, der Signale vom Zellkörper wegleitet. Oft ist es mit Myelin isoliert.",
    t2_h1: "Datenkabel", t2_h2: "Isolierschicht Myelin",
    t2_inst: "Isoliere das Axon!",
    t2_q: "Was beschleunigt die Signalweiterleitung am Axon?",
    t2_qa: "Myelinscheide", t2_qb: "Wasser", t2_qc: "Luft", t2_qd: "Zucker",

    // T3: Die Synapse
    t3_title: "Die Synapse",
    t3_text: "An der Synapse wird das elektrische Signal mithilfe von chemischen Botenstoffen (Neurotransmittern) übertragen.",
    t3_h1: "Umschaltstelle", t3_h2: "Chemische Übertragung",
    t3_inst: "Sende Neurotransmitter!",
    t3_q: "Wie werden Informationen im synaptischen Spalt übertragen?",
    t3_qa: "Chemisch", t3_qb: "Elektrisch", t3_qc: "Mechanisch", t3_qd: "Optisch",

    // T4: Reflexe
    t4_title: "Der Reflex",
    t4_text: "Ein Reflex ist eine unbewusste, sehr schnelle Reaktion auf einen Reiz, die über das Rückenmark gesteuert wird.",
    t4_h1: "Schutzreaktion", t4_h2: "Rückenmark-Steuerung",
    t4_inst: "Reagiere schnell!",
    t4_q: "Was ist ein Beispiel für einen Reflex?",
    t4_qa: "Kniesehnenreflex", t4_qb: "Hausaufgaben machen", t4_qc: "Buch lesen", t4_qd: "Fahrrad fahren",

    // T5: Das Gehirn
    t5_title: "Zentralnervensystem",
    t5_text: "Das Gehirn ist die komplexeste Struktur. Es verarbeitet alle Sinneseindrücke und plant unsere Handlungen.",
    t5_h1: "Zentrale", t5_h2: "Verarbeitung",
    t5_inst: "Aktiviere die Hirnareale!",

    // T6: Neurotransmitter
    t6_title: "Botenstoffe",
    t6_text: "Stoffe wie Dopamin oder Serotonin beeinflussen unsere Gefühle, Bewegungen und unser Denken.",
    t6_h1: "Glückshormone", t6_h2: "Signalstoffe",
    t6_inst: "Schütte Dopamin aus!",

    // T7: Sinneszellen
    t7_title: "Vom Reiz zum Signal",
    t7_text: "Sinneszellen wandeln Reize aus der Umwelt (Licht, Schall) in elektrische Nervenimpulse um.",
    t7_h1: "Reizaufnahme", t7_h2: "Umwandlung",
    t7_inst: "Nimm den Reiz auf!",

    // T8: Das Gedächtnis
    t8_title: "Lernen & Speichern",
    t8_text: "Durch das Verstärken von Synapsenverbindungen entstehen Erinnerungen und wir lernen dazu.",
    t8_h1: "Vernetzung", t8_h2: "Wiederholung",
    t8_inst: "Verknüpfe die Neuronen!",

    // T9: Das Rückenmark
    t9_title: "Die Datenautobahn",
    t9_text: "Das Rückenmark leitet Informationen zwischen Gehirn und Körper hin und her. Es ist die Zentrale der Reflexe.",
    t9_h1: "Informationskanal", t9_h2: "Wirbelsäule",
    t9_inst: "Schütze das Mark!",

    // T10: Sucht & Gehirn
    t10_title: "Drogen & Synapsen",
    t10_text: "Drogen stören die natürliche Signalübertragung an den Synapsen und können das Belohnungssystem dauerhaft schädigen.",
    t10_h1: "Fehlsteuerung", t10_h2: "Suchtgefahr",
    t10_inst: "Bleib clean!",
  },
};

export const BIO_K7_I8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🧶", color: "#C0392B" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left: "Dendrit", right: "Input"}, {left: "Axon", right: "Output"}, {left: "Soma", right: "Zentrum"}] },
    quiz: { generate: "neuron" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🔌", color: "#64748B" },
    interactive: { type: "tap-count", tapCount: { emoji: "📦", count: 3 }, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "neuron" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🌉", color: "#8B5CF6" },
    interactive: { type: "tap-count", tapCount: { emoji: "🧪", count: 5 }, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "synapse" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "⚡", color: "#FACC15" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["Reflex", "schnell", "unbewusst", "Rückenmark"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "reflex" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#EF4444" },
    interactive: { type: "tap-count", tapCount: { emoji: "💡", count: 4 }, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "brain" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "✨", color: "#EC4899" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "Dopamin ist ein ___.", choices: ["Neurotransmitter", "Muskel", "Knochen", "Stein"], correctIndex: 0 },
    quiz: { generate: "synapse" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "👁️", color: "#3B82F6" },
    interactive: { type: "tap-count", tapCount: { emoji: "📡", count: 4 }, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "neuron" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🕸️", color: "#C0392B" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Lernen", right: "Synapsen"}, {left: "Reiz", right: "Signal"}, {left: "Zentrum", right: "Gehirn"}] },
    quiz: { generate: "behavior_learning" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🦴", color: "#64748B" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "Das Rückenmark liegt in der ___.", choices: ["Wirbelsäule", "Hand", "Nase", "Lunge"], correctIndex: 0 },
    quiz: { generate: "reflex" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🚫", color: "#EF4444" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["Drogen", "Synapsen", "schädigen", "Sucht"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "synapse" }
  }
];

// ─── i9: EVOLUTION GRUNDLAGEN ────────────────────────────────────────

export const BIO_K7_I9_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Evolution Grundlagen",
    
    // T1: Natürliche Selektion
    t1_title: "Natürliche Selektion",
    t1_text: "Individuen, die besser an ihre Umwelt angepasst sind, überleben eher und geben ihre Gene weiter.",
    t1_h1: "Selektionsvorteil", t1_h2: "Fortpflanzungserfolg",
    t1_inst: "Wer überlebt?",
    t1_q: "Wer hat die Theorie der natürlichen Selektion formuliert?",
    t1_qa: "Charles Darwin", t1_qb: "Albert Einstein", t1_qc: "Gregor Mendel", t1_qd: "Isaac Newton",

    // T2: Anpassung
    t2_title: "Anpassung (Adaptation)",
    t2_text: "Durch Mutation und Selektion entstehen Merkmale, die das Überleben in einer bestimmten Umwelt verbessern.",
    t2_h1: "Strukturelle Merkmale", t2_h2: "Verhaltensweisen",
    t2_inst: "Finde die Anpassung!",
    t2_q: "Was ist ein Beispiel für eine strukturelle Anpassung?",
    t2_qa: "Die Form eines Vogelschnabels", t2_qb: "Singen eines Liedes", t2_qc: "Lesen eines Buches", t2_qd: "Weglaufen vor Regen",

    // T3: Mutation
    t3_title: "Mutation",
    t3_text: "Mutationen sind zufällige Veränderungen im Erbgut, die neue Merkmale in eine Population einbringen können.",
    t3_h1: "Zufällige Änderung", t3_h2: "Genetische Vielfalt",
    t3_inst: "Erzeuge eine Mutation!",
    t3_q: "Sind Mutationen immer schädlich?",
    t3_qa: "Nein, sie können auch nützlich sein", t3_qb: "Ja, immer", t3_qc: "Mutationen gibt es nicht", t3_qd: "Nur bei Pflanzen",

    // T4: Isolation
    t4_title: "Isolation",
    t4_text: "Wenn Teilpopulationen getrennt werden (z.B. durch ein Meer), können sich neue Arten entwickeln.",
    t4_h1: "Räumliche Trennung", t4_h2: "Artbildung",
    t4_inst: "Trenne die Gruppen!",

    // T5: Fossilien
    t5_title: "Fossilien",
    t5_text: "Fossilien sind Zeugen der Vergangenheit und zeigen uns, wie sich Lebewesen über Millionen Jahre verändert haben.",
    t5_h1: "Versteinerungen", t5_h2: "Evolutionsbelege",
    t5_inst: "Grabe das Fossil aus!",
    t5_q: "Was beweisen Fossilien?",
    t5_qa: "Die Veränderung der Arten über Zeit", t5_qb: "Dass früher alles gleich war", t5_qc: "Dass die Erde jung ist", t5_qd: "Nichts",

    // T6: Variabilität
    t6_title: "Variabilität",
    t6_text: "Die Individuen einer Population unterscheiden sich in ihren Merkmalen (Größe, Farbe, Schnelligkeit).",
    t6_h1: "Vielfalt", t6_h2: "Unterschiede",
    t6_inst: "Finde die Unterschiede!",

    // T7: Homologie
    t7_title: "Homologie",
    t7_text: "Strukturen mit gleichem Grundbauplan (z.B. Arm des Menschen, Flügel der Fledermaus) deuten auf gemeinsame Vorfahren hin.",
    t7_h1: "Gemeinsamer Ursprung", t7_h2: "Gleicher Bauplan",
    t7_inst: "Vergleiche die Skelette!",

    // T8: Selektionsfaktoren
    t8_title: "Selektionsfaktoren",
    t8_text: "Faktoren wie Fressfeinde, Klima oder Konkurrenz bestimmen, wer im 'Kampf ums Dasein' gewinnt.",
    t8_h1: "Umwelteinfluss", t8_h2: "Auslese",
    t8_inst: "Wähle den Faktor!",

    // T9: Der Artbegriff
    t9_title: "Was ist eine Art?",
    t9_text: "Lebewesen gehören zur gleichen Art, wenn sie miteinander fruchtbare Nachkommen zeugen können.",
    t9_h1: "Fortpflanzungsschranke", t9_h2: "Fruchtbare Nachkommen",
    t9_inst: "Gehören sie zusammen?",

    // T10: Stammbäume
    t10_title: "Stammbäume",
    t10_text: "Stammbäume zeigen die verwandtschaftlichen Beziehungen zwischen verschiedenen Arten über die Zeit.",
    t10_h1: "Verwandtschaft", t10_h2: "Evolutionäre Wege",
    t10_inst: "Finde den Vorfahren!",
  },
};

export const BIO_K7_I9_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🐢", color: "#D35400" },
    interactive: { type: "tap-count", tapCount: { emoji: "🧬", count: 4 }, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "natural_selection" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🦅", color: "#92400E" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{left: "Flügel", right: "Fliegen"}, {left: "Kiemen", right: "Schwimmen"}, {left: "Fell", right: "Wärme"}] },
    quiz: { generate: "adaptation" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🎲", color: "#64748B" },
    interactive: { type: "tap-count", tapCount: { emoji: "🧬", count: 2 }, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "natural_selection" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🏝️", color: "#0EA5E9" },
    interactive: { type: "tap-count", tapCount: { emoji: "🌊", count: 3 }, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "natural_selection" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🦴", color: "#94A3B8" },
    interactive: { type: "tap-count", tapCount: { emoji: "🦴", count: 3 }, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "fossils" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🌈", color: "#FACC15" },
    interactive: { type: "highlight-text", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tokens: ["Variabilität", "Unterschiede", "Vielfalt", "Merkmale"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "natural_selection" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🖐️", color: "#FDBA74" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Arm", right: "Flügel"}, {left: "Bein", right: "Flosse"}, {left: "Bau", right: "Gleich"}] },
    quiz: { generate: "natural_selection" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "❄️", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Das ___ ist ein Selektionsfaktor.", choices: ["Klima", "Buch", "Lied", "Haus"], correctIndex: 0 },
    quiz: { generate: "natural_selection" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "👫", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "Eine Art zeugt ___ Nachkommen.", choices: ["fruchtbare", "keine", "steinerne", "blaue"], correctIndex: 0 },
    quiz: { generate: "natural_selection" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🌳", color: "#92400E" },
    interactive: { type: "match-pairs", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", pairs: [{left: "Wurzel", right: "Vorfahre"}, {left: "Zweig", right: "Art"}, {left: "Baum", right: "System"}] },
    quiz: { generate: "natural_selection" }
  }
];
