// lib/explorerPools/biologieK7.ts
import type { PoolTopicDef } from "./types";

// ─── i1: ZELLSTRUKTUR & MIKROSKOP ────────────────────────────────────

export const BIO_K7_I1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zellstruktur & Mikroskop",
    
    // T1: Die Zelle
    t1_title: "Die Grundeinheit des Lebens",
    t1_text: "Alle Lebewesen bestehen aus Zellen. Sie sind die kleinsten lebenden Einheiten, die alle Merkmale des Lebens aufweisen.",
    t1_h1: "Zelltheorie", t1_h2: "Bausteine des Lebens",
    t1_inst: "Finde die Zelle!",
    t1_q: "Was ist die kleinste lebende Einheit eines Organismus?",
    t1_qa: "Die Zelle", t1_qb: "Das Atom", t1_qc: "Das Organ", t1_qd: "Das Gewebe",

    // T2: Zellkern
    t2_title: "Der Zellkern (Nukleus)",
    t2_text: "Der Zellkern ist die Steuerzentrale der Zelle. Er enthält die Erbinformation in Form von DNA.",
    t2_h1: "Steuerzentrale", t2_h2: "DNA-Speicher",
    t2_inst: "Markiere den Kern!",
    t2_q: "Wo befindet sich die Erbinformation in einer eukaryotischen Zelle?",
    t2_qa: "Im Zellkern", t2_qb: "In der Vakuole", t2_qc: "In der Zellwand", t2_qd: "Im Golgi-Apparat",

    // T3: Mitochondrien
    t3_title: "Mitochondrien",
    t3_text: "Mitochondrien sind die Kraftwerke der Zelle. Hier wird durch Zellatmung Energie (ATP) gewonnen.",
    t3_h1: "Kraftwerke", t3_h2: "Energieproduktion",
    t3_inst: "Aktiviere das Kraftwerk!",
    t3_q: "Welche Organellen produzieren Energie für die Zelle?",
    t3_qa: "Mitochondrien", t3_qb: "Chloroplasten", t3_qc: "Ribosomen", t3_qd: "Lysosomen",

    // T4: Pflanzenzelle Merkmale
    t4_title: "Besonderheiten der Pflanzenzelle",
    t4_text: "Pflanzenzellen besitzen zusätzlich eine Zellwand, Chloroplasten für die Fotosynthese und eine große Vakuole.",
    t4_h1: "Zellwand & Chloroplasten", t4_h2: "Stabilität & Ernährung",
    t4_inst: "Was gehört zur Pflanze?",
    t4_q: "Welche Struktur gibt der Pflanzenzelle ihre feste Form?",
    t4_qa: "Die Zellwand", t4_qb: "Die Zellmembran", t4_qc: "Das Zytoplasma", t4_qd: "Der Zellkern",

    // T5: Chloroplasten
    t5_title: "Chloroplasten",
    t5_text: "Chloroplasten enthalten den grünen Farbstoff Chlorophyll. Hier findet die Fotosynthese statt.",
    t5_h1: "Fotosynthese", t5_h2: "Chlorophyll",
    t5_inst: "Sammle Licht!",
    t5_q: "Was wird in den Chloroplasten hergestellt?",
    t5_qa: "Traubenzucker (Glukose)", t5_qb: "Fett", t5_qc: "Eiweiß", t5_qd: "Salz",

    // T6: Das Mikroskop
    t6_title: "Arbeiten mit dem Mikroskop",
    t6_text: "Mit dem Mikroskop können wir winzige Strukturen sichtbar machen. Es besteht aus Okular, Objektiv und Lichtquelle.",
    t6_h1: "Vergrößerung", t6_h2: "Optische Linsen",
    t6_inst: "Stelle scharf!",
    t6_q: "Welches Teil des Mikroskops befindet sich direkt am Auge?",
    t6_qa: "Das Okular", t6_qb: "Das Objektiv", t6_qc: "Der Objekttisch", t6_qd: "Die Blende",

    // T7: Zellmembran
    t7_title: "Die Zellmembran",
    t7_text: "Die Zellmembran umschließt die Zelle und regelt den Stoffaustausch mit der Umgebung.",
    t7_h1: "Selektive Barriere", t7_h2: "Schutzschicht",
    t7_inst: "Lass Stoffe durch!",

    // T8: Ribosomen
    t8_title: "Ribosomen",
    t8_text: "Ribosomen sind winzige Körnchen, an denen die Eiweißsynthese (Proteinherstellung) stattfindet.",
    t8_h1: "Eiweißfabrik", t8_h2: "Proteinsynthese",
    t8_inst: "Baue Proteine!",
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
  }
];

// ─── i2: ZELLTEILUNG & ZELLZYKLUS ────────────────────────────────────

export const BIO_K7_I2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Zellteilung & Zellzyklus",
    
    // T1: Mitose
    t1_title: "Die Mitose",
    t1_text: "Bei der Mitose entstehen aus einer Mutterzelle zwei genetisch identische Tochterzellen. Sie dient dem Wachstum und der Erneuerung.",
    t1_h1: "Identische Kopien", t1_h2: "Wachstum",
    t1_inst: "Starte die Teilung!",
    t1_q: "Was ist das Ergebnis der Mitose?",
    t1_qa: "2 identische Tochterzellen", t1_qb: "4 verschiedene Zellen", t1_qc: "1 große Zelle", t1_qd: "Zellsterben",

    // T2: Die Phasen (Mitose)
    t2_title: "Phasen der Mitose",
    t2_text: "Die Mitose verläuft in vier Hauptphasen: Prophase, Metaphase, Anaphase und Telophase.",
    t2_h1: "P-M-A-T", t2_h2: "Ablauf",
    t2_inst: "Ordne die Phasen!",
    t2_w1: "Prophase", t2_w2: "Metaphase", t2_w3: "Anaphase", t2_w4: "Telophase",

    // T3: Chromosomen
    t3_title: "Chromosomen",
    t3_text: "Chromosomen sind die Transportform der Erbinformation während der Zellteilung.",
    t3_h1: "X-Form", t3_h2: "Gepackte DNA",
    t3_inst: "Finde das Chromosom!",
    t3_q: "In welcher Form liegt die DNA während der Teilung vor?",
    t3_qa: "Als Chromosomen", t3_qb: "Als Tropfen", t3_qc: "Flüssig", t3_qd: "Gar nicht",

    // T4: Meiose
    t4_title: "Die Meiose",
    t4_text: "Die Meiose ist eine besondere Zellteilung zur Bildung von Keimzellen (Eizellen und Spermien) mit halbem Chromosomensatz.",
    t4_h1: "Keimzellenbildung", t4_h2: "Halber Chromosomensatz",
    t4_inst: "Bilde Keimzellen!",
    t4_q: "Wie viele Tochterzellen entstehen am Ende der Meiose?",
    t4_qa: "Vier", t4_qb: "Zwei", t4_qc: "Acht", t4_qd: "Eine",

    // T5: Zellzyklus
    t5_title: "Der Zellzyklus",
    t5_text: "Der Zellzyklus beschreibt das Leben einer Zelle von einer Teilung zur nächsten. Er besteht aus Interphase und Mitose.",
    t5_h1: "Interphase & Mitose", t5_h2: "Ständiger Kreislauf",
    t5_inst: "Drehe das Rad!",
    t5_q: "In welcher Phase wird die DNA verdoppelt?",
    t5_qa: "S-Phase (Interphase)", t5_qb: "Metaphase", t5_qc: "Anaphase", t5_qd: "G0-Phase",

    // T6: DNA-Replikation
    t6_title: "DNA-Verdopplung",
    t6_text: "Bevor sich eine Zelle teilen kann, muss sie ihre gesamte Erbinformation exakt kopieren.",
    t6_h1: "Kopieren", t6_h2: "Identische DNA",
    t6_inst: "Kopiere die DNA!",

    // T7: Zytokinese
    t7_title: "Zytokinese",
    t7_text: "Nach der Kernteilung wird das Zytoplasma aufgeteilt, sodass zwei eigenständige Zellen entstehen.",
    t7_h1: "Trennung", t7_h2: "Eigene Membran",
    t7_inst: "Trenne die Zellen!",

    // T8: Checkpoints
    t8_title: "Kontrolle",
    t8_text: "Kontrollpunkte (Checkpoints) sorgen dafür, dass sich nur gesunde Zellen ohne Fehler teilen.",
    t8_h1: "Fehlerkontrolle", t8_h2: "Gesundes Wachstum",
    t8_inst: "Check die Zelle!",
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
  }
];

// ─── i3: FOTOSYNTHESE ────────────────────────────────────────────────

export const BIO_K7_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Fotosynthese",
    
    // T1: Lichtreaktion
    t1_title: "Die Lichtreaktion",
    t1_text: "In der Lichtreaktion wird Sonnenenergie eingefangen und in chemische Energie (ATP und NADPH) umgewandelt. Dabei entsteht Sauerstoff.",
    t1_h1: "Energie aus Licht", t1_h2: "Abfallprodukt Sauerstoff",
    t1_inst: "Fange das Licht!",
    t1_q: "Welches Gas entsteht als Nebenprodukt bei der Fotosynthese?",
    t1_qa: "Sauerstoff", t1_qb: "Stickstoff", t1_qc: "Kohlendioxid", t1_qd: "Helium",

    // T2: Dunkelreaktion (Calvin-Zyklus)
    t2_title: "Der Calvin-Zyklus",
    t2_text: "In der Dunkelreaktion wird Kohlendioxid mithilfe der Energie aus der Lichtreaktion zu Traubenzucker (Glukose) aufgebaut.",
    t2_h1: "Zuckeraufbau", t2_h2: "CO2-Fixierung",
    t2_inst: "Baue den Zucker!",
    t2_q: "Was wird im Calvin-Zyklus hauptsächlich produziert?",
    t2_qa: "Traubenzucker (Glukose)", t2_qb: "Sauerstoff", t2_qc: "Wasser", t2_qd: "Licht",

    // T3: Chlorophyll
    t3_title: "Das Blattgrün",
    t3_text: "Chlorophyll ist das Pigment, das in den Thylakoidmembranen der Chloroplasten sitzt und Licht absorbiert.",
    t3_h1: "Blattpigment", t3_h2: "Lichtfalle",
    t3_inst: "Suche das Pigment!",
    t3_q: "In welchem Teil des Chloroplasten sitzt das Chlorophyll?",
    t3_qa: "Thylakoidmembran", t3_qb: "Zellkern", t3_qc: "Zellwand", t3_qd: "Vakuole",

    // T4: Die Gleichung
    t4_title: "Die Fotosynthese-Gleichung",
    t4_text: "Licht + Wasser + Kohlendioxid → Glukose + Sauerstoff.",
    t4_h1: "Stoffumwandlung", t4_h2: "Chemische Reaktion",
    t4_inst: "Stelle die Formel auf!",
    t4_w1: "CO2", t4_w2: "Wasser", t4_w3: "Licht", t4_w4: "Zucker",

    // T5: Energieumwandlung
    t5_title: "Energieumwandlung",
    t5_text: "Pflanzen wandeln Strahlungsenergie des Lichts in chemische Energie um.",
    t5_h1: "Licht zu Chemie", t5_h2: "Energiespeicher",
    t5_inst: "Wandle Energie um!",

    // T6: Stärkespeicherung
    t6_title: "Stärkespeicherung",
    t6_text: "Der produzierte Traubenzucker wird oft in Form von Stärke in den Blättern oder Wurzeln gespeichert.",
    t6_h1: "Vorrat", t6_h2: "Speichermolekül",
    t6_inst: "Fülle das Lager!",

    // T7: Bedeutung für die Welt
    t7_title: "Bedeutung",
    t7_text: "Fast alles Leben auf der Erde hängt direkt oder indirekt von der Fotosynthese ab.",
    t7_h1: "Basis des Lebens", t7_h2: "Sauerstoff für alle",
    t7_inst: "Danke der Pflanze!",

    // T8: Spaltöffnungen
    t8_title: "Die Spaltöffnungen (Stomata)",
    t8_text: "Über winzige Poren an der Blattunterseite nehmen Pflanzen CO2 auf und geben Sauerstoff und Wasserdampf ab.",
    t8_h1: "Gasaustausch", t8_h2: "Blattporen",
    t8_inst: "Öffne die Stomata!",
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
    t8_text: "ATP (Adenosintriphosphat) ist wie eine geladene Batterie, die Energie für alle Prozesse bereitstellt.",
    t8_h1: "Universelle Energie", t8_h2: "Batterie der Zelle",
    t8_inst: "Lade ATP auf!",
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

    // T8: Wasserkreislauf
    t8_title: "Wasserzyklus",
    t8_text: "Verdunstung, Wolkenbildung und Niederschlag halten das Wasser weltweit in Bewegung.",
    t8_h1: "Regen & Sonne", t8_h2: "Ständiger Fluss",
    t8_inst: "Lass es regnen!",
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
  }
];
