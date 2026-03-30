// lib/explorerPools/biologieK8.ts
import type { PoolTopicDef } from "./types";

// ─── i1: DNA & GENETIK ───────────────────────────────────────────────

export const BIO_K8_I1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "DNA & Genetik",
    
    t1_title: "Die DNA-Struktur",
    t1_text: "Die DNA ist eine Doppelhelix, deren Rückgrat aus Zucker und Phosphat besteht. Die Sprossen werden von den Basenpaaren Adenin-Thymin und Guanin-Cytosin gebildet.",
    t1_h1: "Doppelhelix", t1_h2: "A-T, G-C Paare",
    t1_inst: "Baue die Helix!",
    
    t2_title: "Mendelsche Regeln",
    t2_text: "Gregor Mendel entdeckte die grundlegenden Vererbungsgesetze, wie das Spaltungsgesetz und das Unabhängigkeitsgesetz.",
    t2_h1: "Dominant & Rezessiv", t2_h2: "Erbsen-Experimente",
    t2_inst: "Kreuze die Erbsen!",
    
    t3_title: "Genotyp vs. Phänotyp",
    t3_text: "Der Genotyp ist die Gesamtheit der Gene eines Organismus, während der Phänotyp das sichtbare Erscheinungsbild ist.",
    t3_h1: "Gene vs. Aussehen", t3_h2: "Erbanlage & Merkmal",
    t3_inst: "Was ist was?",

    t4_title: "Chromosomen",
    t4_text: "Chromosomen sind die Träger der Erbinformation und werden während der Zellteilung sichtbar.",
    t4_h1: "Verpackte DNA", t4_h2: "Transportform",
    t4_inst: "Paare die Begriffe!",
    t4_q: "Wie viele Chromosomen hat eine menschliche Körperzelle?",
    t4_qa: "46", t4_qb: "23", t4_qc: "92", t4_qd: "48",

    t5_title: "Replikation",
    t5_text: "Bei der DNA-Replikation wird die DNA identisch verdoppelt, eine Voraussetzung für die Zellteilung.",
    t5_h1: "Identische Kopie", t5_h2: "Semikonservativ",
    t5_inst: "Verdopple die DNA!",
    
    t6_title: "Vom Gen zum Protein",
    t6_text: "Die Information eines Gens wird abgelesen (Transkription) und in ein Protein übersetzt (Translation).",
    t6_h1: "Transkription", t6_h2: "Translation",
    t6_inst: "Baue das Protein!",

    t7_title: "Allele",
    t7_text: "Allele sind verschiedene Varianten eines Gens, die zu unterschiedlichen Merkmalsausprägungen führen.",
    t7_h1: "Genvarianten", t7_h2: "Homozygot & Heterozygot",
    t7_inst: "Sortiere die Allele!",
    
    t8_title: "Diploider Chromosomensatz",
    t8_text: "Menschliche Körperzellen besitzen einen doppelten (diploiden) Chromosomensatz – einen vom Vater, einen von der Mutter.",
    t8_h1: "Doppelter Satz", t8_h2: "Homologe Chromosomen",
    t8_inst: "Paare die Chromosomen!",
  },
};

export const BIO_K8_I1_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "DNAHelixSvg" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left: "A", right: "T"}, {left: "G", right: "C"}, {left: "Zucker", right: "Rückgrat"}] },
    quiz: { generate: "dna_struktur" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🌱", color: "#27AE60" },
    interactive: { type: "drag-to-bucket", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", buckets: [{id: "dom", label: "Dominant"}, {id: "rez", label: "Rezessiv"}], items: [{text: "Großbuchstabe", bucketId: "dom"}, {text: "Kleinbuchstabe", bucketId: "rez"}, {text: "Setzt sich durch", bucketId: "dom"}, {text: "Wird verdeckt", bucketId: "rez"}] },
    quiz: { generate: "vererbung" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "👁️", color: "#3498DB" },
    interactive: { type: "match-pairs", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", pairs: [{left: "AA/Aa", right: "Genotyp"}, {left: "Blaue Augen", right: "Phänotyp"}] },
    quiz: { generate: "vererbung" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "biologie-diagram", name: "MitosisSvg" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left: "Chromosomen", right: "Verpackte DNA"}, {left: "46", right: "Mensch (diploid)"}, {left: "Mitose", right: "Sichtbar"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "biologie-diagram", name: "DNAHelixSvg" },
    interactive: { type: "tap-count", tapCount: { emoji: "👥", count: 2 }, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "dna_struktur" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "⚙️", color: "#F39C12" },
    interactive: { type: "physics-stacker", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", words: ["Gen (DNA)", "Transkription", "mRNA", "Translation", "Protein"], correctOrder: [0, 1, 2, 3, 4] },
    quiz: { generate: "dna_struktur" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🎲", color: "#95A5A6" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id: "homo", label: "Homozygot"}, {id: "hetero", label: "Heterozygot"}], items: [{text: "AA", bucketId: "homo"}, {text: "Aa", bucketId: "hetero"}, {text: "bb", bucketId: "homo"}] },
    quiz: { generate: "vererbung" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "👨‍👩‍👧‍👦", color: "#E74C3C" },
    interactive: { type: "tap-count", tapCount: { emoji: "🧬", count: 2 }, instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "vererbung" }
  },
];

// ─── i2: MUTATION & GENTECHNIK ──────────────────────────────────────

export const BIO_K8_I2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Mutation & Gentechnik",
    
    t1_title: "Mutationen",
    t1_text: "Mutationen sind zufällige, sprunghafte Veränderungen im Erbgut. Sie sind der Motor der Evolution.",
    t1_h1: "Zufällige Änderungen", t1_h2: "Motor der Evolution",
    t1_inst: "Verändere die DNA!",
    t1_q: "Mutationen sind der Motor der ___.",
    t1_qa: "Evolution", t1_qb: "Zellteilung", t1_qc: "Photosynthese",
    
    t2_title: "Arten von Mutationen",
    t2_text: "Man unterscheidet Genmutationen (ein Gen), Chromosomenmutationen (Struktur) und Genommutationen (Anzahl).",
    t2_h1: "Gen / Chromosom / Genom", t2_h2: "Verschiedene Ebenen",
    t2_inst: "Sortiere die Mutation!",
    
    t3_title: "Polymerase-Kettenreaktion (PCR)",
    t3_text: "Mit der PCR-Methode können kleinste Mengen von DNA in kurzer Zeit millionenfach vervielfältigt werden.",
    t3_h1: "DNA-Vervielfältigung", t3_h2: "Kopier-Maschine",
    t3_inst: "Starte die PCR!",

    t4_title: "Gelelektrophorese",
    t4_text: "Dieses Verfahren trennt DNA-Fragmente nach ihrer Größe auf und macht sie als Bandenmuster sichtbar.",
    t4_h1: "Nach Größe trennen", t4_h2: "Genetischer Fingerabdruck",
    t4_inst: "Lass die DNA laufen!",

    t5_title: "CRISPR/Cas9",
    t5_text: "CRISPR/Cas9 ist eine revolutionäre Genschere, mit der DNA gezielt geschnitten und verändert werden kann.",
    t5_h1: "Genschere", t5_h2: "Gezielte Bearbeitung",
    t5_inst: "Schneide das Gen!",
    t5_q: "Was ist CRISPR/Cas9?",
    t5_qa: "Eine Genschere", t5_qb: "Ein Virus", t5_qc: "Ein Protein", t5_qd: "Ein Chromosom",
    
    t6_title: "Transgene Organismen",
    t6_text: "Einem transgenen Organismus wurde artfremde DNA künstlich eingefügt, um bestimmte Eigenschaften zu erzielen.",
    t6_h1: "Artfremde DNA", t6_h2: "Grüne Gentechnik",
    t6_inst: "Füge das Gen ein!",
    
    t7_title: "Klonen",
    t7_text: "Beim Klonen wird ein genetisch identisches Lebewesen erzeugt. Dies wirft viele ethische Fragen auf.",
    t7_h1: "Identische Kopie", t7_h2: "Dolly das Schaf",
    t7_inst: "Klone das Schaf!",
    
    t8_title: "Genetische Beratung",
    t8_text: "Humangenetiker beraten Menschen über das Risiko von Erbkrankheiten in ihrer Familie.",
    t8_h1: "Risikoabwägung", t8_h2: "Erbkrankheiten",
    t8_inst: "Erstelle einen Stammbaum!",
  },
};

export const BIO_K8_I2_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🎲", color: "#95A5A6" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "Mutationen sind der Motor der ___.", choices: ["Evolution", "Zellteilung", "Photosynthese"], correctIndex: 0 },
    quiz: { generate: "mutation" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "📊", color: "#3498DB" },
    interactive: { type: "drag-to-bucket", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", buckets: [{id: "gen", label: "Gen"}, {id: "chrom", label: "Chromosom"}], items: [{text: "Punktmutation", bucketId: "gen"}, {text: "Trisomie 21", bucketId: "chrom"}, {text: "Deletion", bucketId: "chrom"}] },
    quiz: { generate: "mutation" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "📠", color: "#16A085" },
    interactive: { type: "tap-count", tapCount: { emoji: "🧬", count: 8 }, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "genetische_technik" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "📊", color: "#2980B9" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["trennt", "Größe", "Bandenmuster", "Fingerabdruck"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "genetische_technik" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "✂️", color: "#C0392B" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "CRISPR/Cas9 wird als biologische ___ bezeichnet.", choices: ["Genschere", "Nadel", "Pinzette", "Lupe"], correctIndex: 0 },
    quiz: { generate: "genetische_technik" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🌽", color: "#F1C40F" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "Transgene Organismen enthalten ___ DNA.", choices: ["artfremde", "identische", "keine", "kaputte"], correctIndex: 0 },
    quiz: { generate: "genetische_technik" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🐑", color: "#BDC3C7" },
    interactive: { type: "tap-count", tapCount: { emoji: "🐑", count: 2 }, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "genetische_technik" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "👨‍⚕️", color: "#3498DB" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Mukoviszidose", right: "Rezessiv"}, {left: "Chorea Huntington", right: "Dominant"}] },
    quiz: { generate: "genetic_counseling" }
  },
];

// ─── i3: HORMONE ────────────────────────────────────────────────────────

export const BIO_K8_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Hormone",
    
    t1_title: "Das Hormonsystem",
    t1_text: "Hormone sind chemische Botenstoffe, die von endokrinen Drüsen produziert und ins Blut abgegeben werden, um Körperfunktionen zu steuern.",
    t1_h1: "Chemische Boten", t1_h2: "Langsame Steuerung",
    t1_inst: "Finde die Drüsen!",
    
    t2_title: "Hypophyse: Die Meisterdrüse",
    t2_text: "Die Hypophyse im Gehirn steuert viele andere Hormondrüsen und reguliert Wachstum, Fortpflanzung und Wasserhaushalt.",
    t2_h1: "Steuerzentrale", t2_h2: "Im Gehirn",
    t2_inst: "Verbinde die Hormone!",
    
    t3_title: "Schilddrüse & Stoffwechsel",
    t3_text: "Die Schilddrüse produziert Hormone, die den Stoffwechsel, das Wachstum und die Energieproduktion im Körper regulieren.",
    t3_h1: "Stoffwechsel-Gaspedal", t3_h2: "Jod wird benötigt",
    t3_inst: "Reguliere den Stoffwechsel!",

    t4_title: "Insulin & Blutzucker",
    t4_text: "Das Hormon Insulin aus der Bauchspeicheldrüse senkt den Blutzuckerspiegel, indem es Zellen zur Aufnahme von Glukose anregt.",
    t4_h1: "Zuckersenkend", t4_h2: "Gegenspieler: Glukagon",
    t4_inst: "Sortiere die Moleküle!",

    t5_title: "Adrenalin: Flucht oder Kampf",
    t5_text: "In Stresssituationen schüttet die Nebenniere Adrenalin aus, das den Körper auf eine schnelle Reaktion vorbereitet.",
    t5_h1: "Stressreaktion", t5_h2: "Herz schlägt schneller",
    t5_inst: "Aktiviere die Reaktion!",
    
    t6_title: "Schlüssel-Schloss-Prinzip",
    t6_text: "Hormone wirken nur an spezifischen Zielzellen, die passende Rezeptoren besitzen – wie ein Schlüssel, der nur in ein bestimmtes Schloss passt.",
    t6_h1: "Spezifische Rezeptoren", t6_h2: "Zielgenaue Wirkung",
    t6_inst: "Finde das passende Schloss!",

    t7_title: "Negative Rückkopplung",
    t7_text: "Das Hormonsystem reguliert sich oft selbst. Ein hoher Hormonspiegel hemmt die eigene Produktion, um ein Gleichgewicht zu halten.",
    t7_h1: "Selbstregulation", t7_h2: "Thermostat-Prinzip",
    t7_inst: "Halte das Gleichgewicht!",
    
    t8_title: "Positive Rückkopplung",
    t8_text: "Seltener als die negative ist die positive Rückkopplung, bei der ein Prozess sich selbst verstärkt, z.B. bei der Geburt.",
    t8_h1: "Selbstverstärkend", t8_h2: "Geburtswehen",
    t8_inst: "Verstärke das Signal!",
  },
};

export const BIO_K8_I3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "⚗️", color: "#E74C3C" },
    interactive: { type: "highlight-text", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", tokens: ["Botenstoffe", "endokrine Drüsen", "Blut"], correctIndices: [0, 1, 2] },
    quiz: { generate: "endokrine_druesen" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "👑", color: "#F1C40F" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{left: "Hypophyse", right: "Meisterdrüse"}, {left: "Hypothalamus", right: "Übergeordnet"}, {left: "STH", right: "Wachstumshormon"}] },
    quiz: { generate: "endokrine_druesen" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🦋", color: "#3498DB" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔥", count: 3 }, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "endokrine_druesen" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🍬", color: "#1ABC9C" },
    interactive: { type: "drag-to-bucket", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", buckets: [{id: "zelle", label: "In die Zelle"}, {id: "blut", label: "Im Blut"}], items: [{text: "Glukose (mit Insulin)", bucketId: "zelle"}, {text: "Glukose (ohne Insulin)", bucketId: "blut"}] },
    quiz: { generate: "hormonstoffwechsel" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "⚡", color: "#E67E22" },
    interactive: { type: "tap-count", tapCount: { emoji: "❤️", count: 5 }, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "hormonstoffwechsel" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🔑", color: "#9B59B6" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left: "Insulin", right: "Muskelzelle"}, {left: "Adrenalin", right: "Herzzelle"}] },
    quiz: { generate: "hormonstoffwechsel" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🔄", color: "#2ECC71" },
    interactive: { type: "physics-stacker", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["Hoher Spiegel", "Hemmung", "Produktion sinkt", "Normaler Spiegel"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "feedback_mechanismen" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🔁", color: "#C0392B" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Positive Rückkopplung ___ einen Prozess.", choices: ["verstärkt", "stoppt", "verlangsamt"], correctIndex: 0 },
    quiz: { generate: "feedback_mechanismen" }
  },
];

// ─── i4: REPRODUKTION ───────────────────────────────────────────────────

export const BIO_K8_I4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Reproduktion",
    
    t1_title: "Meiose: Die Keimzellteilung",
    t1_text: "Durch Meiose entstehen Keimzellen (Gameten) mit einem einfachen (haploiden) Chromosomensatz. Dies ist die Grundlage der sexuellen Fortpflanzung.",
    t1_h1: "Halbierter Satz", t1_h2: "Gametenbildung",
    t1_inst: "Halbiere die Chromosomen!",
    
    t2_title: "Spermatogenese",
    t2_text: "Die Bildung von Spermien findet kontinuierlich in den Hoden des Mannes statt. Aus einer Zelle entstehen vier Spermien.",
    t2_h1: "Männliche Gameten", t2_h2: "4 aus 1",
    t2_inst: "Zähle die Spermien!",
    
    t3_title: "Oogenese",
    t3_text: "Die Bildung von Eizellen findet in den Eierstöcken der Frau statt. Aus einer Zelle entsteht nur eine große, nährstoffreiche Eizelle.",
    t3_h1: "Weibliche Gameten", t3_h2: "1 aus 1",
    t3_inst: "Finde die Eizelle!",

    t4_title: "Befruchtung",
    t4_text: "Bei der Befruchtung verschmelzen eine Spermienzelle und eine Eizelle. Die daraus entstehende Zygote hat wieder einen doppelten Chromosomensatz.",
    t4_h1: "Spermium trifft Ei", t4_h2: "Entstehung der Zygote",
    t4_inst: "Verschmelze die Zellen!",

    t5_title: "Polyspermie-Block",
    t5_text: "Sobald ein Spermium in die Eizelle eingedrungen ist, wird die Eihülle für andere Spermien undurchlässig.",
    t5_h1: "Nur einer gewinnt", t5_h2: "Schutzmechanismus",
    t5_inst: "Blockiere die Spermien!",
    
    t6_title: "Von der Zygote zum Embryo",
    t6_text: "Nach der Befruchtung beginnt sich die Zygote zu teilen und entwickelt sich über mehrere Stadien (Morula, Blastozyste) zum Embryo.",
    t6_h1: "Zellteilung", t6_h2: "Frühe Entwicklung",
    t6_inst: "Baue den Embryo!",

    t7_title: "Die drei Keimblätter",
    t7_text: "Während der Gastrulation bilden sich drei grundlegende Zellschichten (Ektoderm, Mesoderm, Endoderm), aus denen alle Organe entstehen.",
    t7_h1: "Ektoderm, Mesoderm, Endoderm", t7_h2: "Grundbauplan",
    t7_inst: "Sortiere die Keimblätter!",
    
    t8_title: "Plazenta und Versorgung",
    t8_text: "Die Plazenta versorgt den Embryo über die Nabelschnur mit Nährstoffen und Sauerstoff aus dem mütterlichen Blutkreislauf.",
    t8_h1: "Versorgungsorgan", t8_h2: "Mutter-Kind-Verbindung",
    t8_inst: "Verbinde die Nabelschnur!",
  },
};

export const BIO_K8_I4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "➗", color: "#9B59B6" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left: "Diploid (2n)", right: "Körperzelle"}, {left: "Haploid (n)", right: "Keimzelle"}, {left: "Meiose", right: "Halbiert Chromosomenzahl"}] },
    quiz: { generate: "gametogenese" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "♂️", color: "#3498DB" },
    interactive: { type: "tap-count", tapCount: { emoji: "🎯", count: 4 }, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "gametogenese" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "♀️", color: "#E91E63" },
    interactive: { type: "match-pairs", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", pairs: [{left: "Oogenese", right: "Eizellbildung"}, {left: "Eierstock", right: "Ort der Bildung"}, {left: "1 Eizelle", right: "Pro Meiose"}] },
    quiz: { generate: "gametogenese" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "💕", color: "#F39C12" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left: "Spermium", right: "Haploid (n)"}, {left: "Eizelle", right: "Haploid (n) + nährstoffreich"}, {left: "Zygote", right: "Diploid (2n)"}] },
    quiz: { generate: "befruchtung" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "⛔", color: "#C0392B" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["Ein Spermium", "dringt ein", "Hülle wird undurchlässig"], correctIndices: [0, 1, 2] },
    quiz: { generate: "befruchtung" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "👶", color: "#1ABC9C" },
    interactive: { type: "physics-stacker", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", words: ["Zygote", "Morula", "Blastozyste", "Embryo"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "embryonalentwicklung" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏗️", color: "#7F8C8D" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id: "ekto", label: "Ektoderm"}, {id: "meso", label: "Mesoderm"}, {id: "endo", label: "Endoderm"}], items: [{text: "Haut, Nerven", bucketId: "ekto"}, {text: "Muskeln, Knochen", bucketId: "meso"}, {text: "Darm, Lunge", bucketId: "endo"}] },
    quiz: { generate: "embryonalentwicklung" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🍼", color: "#E74C3C" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Die Plazenta versorgt den Embryo mit ___.", choices: ["Nährstoffen", "Abfall", "Licht"], correctIndex: 0 },
    quiz: { generate: "befruchtung" }
  },
];

// ─── i5: GESCHLECHTSBESTIMMUNG ──────────────────────────────────────────

export const BIO_K8_I5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Geschlecht & Verhütung",
    
    t1_title: "XX und XY",
    t1_text: "Beim Menschen bestimmen die Geschlechtschromosomen das Geschlecht. Frauen haben zwei X-Chromosomen (XX), Männer ein X- und ein Y-Chromosom (XY).",
    t1_h1: "Gonosomen", t1_h2: "23. Chromosomenpaar",
    t1_inst: "Sortiere die Chromosomen!",
    
    t2_title: "Der Vater bestimmt das Geschlecht",
    t2_text: "Da die Mutter immer ein X-Chromosom weitergibt, bestimmt das Spermium des Vaters (entweder mit X oder Y) das Geschlecht des Kindes.",
    t2_h1: "X oder Y vom Vater", t2_h2: "50/50 Chance",
    t2_inst: "Wer wird es?",
    
    t3_title: "X-chromosomale Vererbung",
    t3_text: "Merkmale, deren Gene auf dem X-Chromosom liegen, werden X-chromosomal vererbt. Das führt zu unterschiedlichen Ausprägungen bei Männern und Frauen.",
    t3_h1: "Gene auf dem X", t3_h2: "z.B. Rot-Grün-Sehschwäche",
    t3_inst: "Analysiere den Stammbaum!",

    t4_title: "Andere Systeme",
    t4_text: "Nicht bei allen Tieren bestimmt das XY-System das Geschlecht. Bei Vögeln gibt es das ZW-System, bei Bienen entscheidet die Ploidiestufe.",
    t4_h1: "Vögel: ZW", t4_h2: "Bienen: Haplodiploidie",
    t4_inst: "Welches System ist das?",

    t5_title: "Verhütung: Die Pille",
    t5_text: "Die Anti-Baby-Pille enthält Hormone, die den Eisprung (Ovulation) verhindern und somit eine Schwangerschaft unterbinden.",
    t5_h1: "Hormonelle Methode", t5_h2: "Verhindert Eisprung",
    t5_inst: "Stoppe den Eisprung!",
    
    t6_title: "Verhütung: Das Kondom",
    t6_text: "Das Kondom ist eine Barrieremethode. Es verhindert, dass Spermien in die Vagina gelangen und schützt zudem vor sexuell übertragbaren Krankheiten.",
    t6_h1: "Barrieremethode", t6_h2: "Schutz vor Krankheiten",
    t6_inst: "Bilde eine Barriere!",

    t7_title: "Der Pearl-Index",
    t7_text: "Der Pearl-Index gibt die Sicherheit einer Verhütungsmethode an. Je niedriger der Wert, desto sicherer ist die Methode.",
    t7_h1: "Maß für Sicherheit", t7_h2: "Niedriger ist besser",
    t7_inst: "Vergleiche die Methoden!",
    
    t8_title: "Verantwortung teilen",
    t8_text: "Verhütung ist die gemeinsame Verantwortung beider Partner. Offene Kommunikation ist der Schlüssel für eine sichere und respektvolle Sexualität.",
    t8_h1: "Gemeinsame Aufgabe", t8_h2: "Kommunikation ist wichtig",
    t8_inst: "Startet das Gespräch!",
  },
};

export const BIO_K8_I5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "⚧️", color: "#E67E22" },
    interactive: { type: "drag-to-bucket", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", buckets: [{id: "mann", label: "Mann"}, {id: "frau", label: "Frau"}], items: [{text: "XY", bucketId: "mann"}, {text: "XX", bucketId: "frau"}] },
    quiz: { generate: "geschlechtsbestimmung" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "👨‍👩‍👧‍👦", color: "#3498DB" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "Das Spermium des Vaters trägt entweder ein X oder ein ___.", choices: ["Y", "Z", "A"], correctIndex: 0 },
    quiz: { generate: "geschlechtsbestimmung" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "👀", color: "#C0392B" },
    interactive: { type: "highlight-text", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", tokens: ["Gene auf dem X-Chromosom", "unterschiedlich bei Männern & Frauen"], correctIndices: [0, 1] },
    quiz: { generate: "geschlechtsbestimmung" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🐦", color: "#1ABC9C" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left: "Mensch", right: "XY"}, {left: "Vogel", right: "ZW"}] },
    quiz: { generate: "geschlechtsbestimmung" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "💊", color: "#9B59B6" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "Die Pille verhindert den Eisprung durch ___.", choices: ["Hormone", "Barriere", "Temperatur"], correctIndex: 0 },
    quiz: { generate: "contraception" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#27AE60" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left: "Kondom", right: "Barrieremethode"}, {left: "Pille", right: "Hormonmethode"}, {left: "Kondom+Pille", right: "Doppelschutz"}] },
    quiz: { generate: "contraception" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "📉", color: "#F1C40F" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id: "sicher", label: "Sicherer"}, {id: "unsicher", label: "Unsicherer"}], items: [{text: "Index 0.1-0.9 (Pille)", bucketId: "sicher"}, {text: "Index 2-12 (Kondom)", bucketId: "unsicher"}] },
    quiz: { generate: "contraception" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#E74C3C" },
    interactive: { type: "highlight-text", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", tokens: ["gemeinsame Verantwortung", "Kommunikation"], correctIndices: [0, 1] },
    quiz: { generate: "contraception" }
  },
];

// ─── i6: BIOTECHNOLOGIE ─────────────────────────────────────────────────

export const BIO_K8_I6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Biotechnologie",
    
    t1_title: "Enzyme: Die Biokatalysatoren",
    t1_text: "Enzyme sind Proteine, die als Katalysatoren biochemische Reaktionen beschleunigen, ohne selbst verbraucht zu werden.",
    t1_h1: "Reaktions-Beschleuniger", t1_h2: "Schlüssel-Schloss-Prinzip",
    t1_inst: "Beschleunige die Reaktion!",
    
    t2_title: "Enzym-Wirkung",
    t2_text: "Enzyme sind substrat- und wirkungsspezifisch und arbeiten am besten unter optimalen Bedingungen (Temperatur, pH-Wert).",
    t2_h1: "Substratspezifisch", t2_h2: "Wirkungsspezifisch",
    t2_inst: "Finde das Optimum!",
    
    t3_title: "Enzyme im Alltag",
    t3_text: "Wir nutzen Enzyme in Waschmitteln, bei der Käseherstellung oder zum Backen. Sie machen viele industrielle Prozesse effizienter.",
    t3_h1: "Waschmittel-Helfer", t3_h2: "Käse & Brot",
    t3_inst: "Finde die Anwendung!",

    t4_title: "Anwendungen der Gentechnik",
    t4_text: "Gentechnik wird zur Herstellung von Medikamenten (z.B. Insulin), in der Landwirtschaft (GV-Pflanzen) und in der Forschung eingesetzt.",
    t4_h1: "Medizin", t4_h2: "Landwirtschaft",
    t4_inst: "Sortiere die Anwendungen!",

    t5_title: "Grüne Gentechnik",
    t5_text: "Die grüne Gentechnik verändert das Erbgut von Pflanzen, um sie resistenter gegen Schädlinge zu machen oder ihren Nährwert zu erhöhen.",
    t5_h1: "Pflanzen verbessern", t5_h2: "Kontrovers diskutiert",
    t5_inst: "Mach die Pflanze resistent!",
    
    t6_title: "Rote Gentechnik",
    t6_text: "Die rote Gentechnik befasst sich mit medizinischen Anwendungen, von der Diagnose von Erbkrankheiten bis zur Entwicklung von Gentherapien.",
    t6_h1: "Medizin & Pharmazie", t6_h2: "Insulin-Herstellung",
    t6_inst: "Produziere Insulin!",

    t7_title: "Bioethik: Chancen und Risiken",
    t7_text: "Die Bioethik diskutiert die moralischen und sozialen Fragen, die durch den Fortschritt in der Biotechnologie aufgeworfen werden.",
    t7_h1: "Was dürfen wir?", t7_h2: "Moralische Grenzen",
    t7_inst: "Wäge die Argumente ab!",
    
    t8_title: "Ethische Debatten",
    t8_text: "Themen wie Klonen, Stammzellforschung und Designer-Babys führen zu intensiven ethischen Debatten über die Grenzen der Wissenschaft.",
    t8_h1: "Klonen", t8_h2: "Stammzellen",
    t8_inst: "Positioniere dich!",
  },
};

export const BIO_K8_I6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "⚙️", color: "#16A085" },
    interactive: { type: "tap-count", tapCount: { emoji: "⚡", count: 5 }, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "enzyme" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🌡️", color: "#E67E22" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{left: "Pepsin (Magen)", right: "sauer (pH 2)"}, {left: "Amylase (Mund)", right: "neutral (pH 7)"}] },
    quiz: { generate: "enzyme" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🧺", color: "#3498DB" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id: "bio", label: "Biotechnik"}, {id: "alltag", label: "Keine"}], items: [{text: "Käse", bucketId: "bio"}, {text: "Waschmittel", bucketId: "bio"}, {text: "Wasser", bucketId: "alltag"}] },
    quiz: { generate: "enzyme" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🧪", color: "#1ABC9C" },
    interactive: { type: "drag-to-bucket", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", buckets: [{id: "rot", label: "Medizin"}, {id: "grün", label: "Landwirtschaft"}], items: [{text: "Insulin", bucketId: "rot"}, {text: "Herbizidresistenter Mais", bucketId: "grün"}] },
    quiz: { generate: "biotech_anwendungen" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🌿", color: "#2ECC71" },
    interactive: { type: "match-pairs", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", pairs: [{left: "Grüne Gentechnik", right: "Pflanzenzüchtung"}, {left: "Herbizidresistenz", right: "Schädlingsschutz"}, {left: "Goldener Reis", right: "Mehr Vitamin A"}] },
    quiz: { generate: "biotech_anwendungen" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "❤️", color: "#C0392B" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "Menschliches Insulin kann von ___ hergestellt werden.", choices: ["Bakterien", "Pflanzen", "Viren"], correctIndex: 0 },
    quiz: { generate: "biotech_anwendungen" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#95A5A6" },
    interactive: { type: "highlight-text", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", tokens: ["moralische", "soziale Fragen", "Fortschritt"], correctIndices: [0, 1, 2] },
    quiz: { generate: "bioethik" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🤔", color: "#F39C12" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Klonen", right: "Identität?"}, {left: "Stammzellen", right: "Embryo-Status?"}] },
    quiz: { generate: "bioethik" }
  },
];

// ─── i7: SYSTEMISCHE BIOLOGIE ───────────────────────────────────────────

export const BIO_K8_I7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Systemische Biologie",
    
    t1_title: "Integration der Systeme",
    t1_text: "Nerven- und Hormonsystem arbeiten zusammen, um die Funktionen des Körpers zu koordinieren und auf Veränderungen zu reagieren.",
    t1_h1: "Nervensystem (schnell)", t1_h2: "Hormonsystem (langsam)",
    t1_inst: "Verbinde die Systeme!",
    
    t2_title: "Homöostase: Das Gleichgewicht",
    t2_text: "Homöostase ist die Fähigkeit des Körpers, ein stabiles inneres Milieu aufrechtzuerhalten, z.B. bei Körpertemperatur und Blutzucker.",
    t2_h1: "Stabiles Milieu", t2_h2: "Regelkreise",
    t2_inst: "Halte die Balance!",
    
    t3_title: "Temperaturregulation",
    t3_text: "Der Körper hält seine Temperatur von ca. 37°C durch Schwitzen (kühlt) oder Zittern (erzeugt Wärme) konstant.",
    t3_h1: "Schwitzen vs. Zittern", t3_h2: "Gesteuert vom Hypothalamus",
    t3_inst: "Reguliere die Temperatur!",

    t4_title: "Blutzuckerregulation",
    t4_text: "Die Hormone Insulin und Glukagon aus der Bauchspeicheldrüse halten den Blutzuckerspiegel in engen Grenzen.",
    t4_h1: "Insulin senkt", t4_h2: "Glukagon hebt",
    t4_inst: "Reguliere den Blutzucker!",

    t5_title: "Stoffwechsel: Anabol & Katabol",
    t5_text: "Der Stoffwechsel (Metabolismus) umfasst alle biochemischen Prozesse. Man unterscheidet aufbauende (anabole) und abbauende (katabole) Reaktionen.",
    t5_h1: "Anabolismus = Aufbau", t5_h2: "Katabolismus = Abbau",
    t5_inst: "Sortiere die Prozesse!",
    
    t6_title: "Zellatmung",
    t6_text: "Bei der Zellatmung wird Glukose mit Hilfe von Sauerstoff abgebaut, um die universelle Energiewährung ATP zu gewinnen.",
    t6_h1: "Energie aus Glukose", t6_h2: "ATP-Produktion",
    t6_inst: "Gewinne Energie!",

    t7_title: "Grundumsatz",
    t7_text: "Der Grundumsatz ist die Energiemenge, die der Körper in Ruhe zur Aufrechterhaltung seiner Lebensfunktionen benötigt.",
    t7_h1: "Energie in Ruhe", t7_h2: "Abhängig von Alter, Geschlecht",
    t7_inst: "Berechne den Umsatz!",
    
    t8_title: "Störungen der Homöostase",
    t8_text: "Krankheiten wie Diabetes mellitus sind oft das Ergebnis einer gestörten Homöostase, z.B. durch Insulinmangel.",
    t8_h1: "Gleichgewicht gestört", t8_h2: "Beispiel: Diabetes",
    t8_inst: "Finde die Störung!",
  },
};

export const BIO_K8_I7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🌐", color: "#3498DB" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left: "Nervensystem", right: "Schnell"}, {left: "Hormonsystem", right: "Langsam"}] },
    quiz: { generate: "integration" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#2ECC71" },
    interactive: { type: "highlight-text", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", tokens: ["stabiles", "inneres Milieu", "aufrechterhalten"], correctIndices: [0, 1, 2] },
    quiz: { generate: "homeostasis" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🌡️", color: "#E74C3C" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id: "kalt", label: "Zu kalt"}, {id: "warm", label: "Zu warm"}], items: [{text: "Zittern", bucketId: "kalt"}, {text: "Schwitzen", bucketId: "warm"}] },
    quiz: { generate: "homeostasis" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🍬", color: "#1ABC9C" },
    interactive: { type: "physics-stacker", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["Essen", "Blutzucker steigt", "Insulin", "Blutzucker sinkt"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "homeostasis" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🔥", color: "#F39C12" },
    interactive: { type: "drag-to-bucket", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", buckets: [{id: "ana", label: "Anabol"}, {id: "kata", label: "Katabol"}], items: [{text: "Proteinbiosynthese", bucketId: "ana"}, {text: "Zellatmung", bucketId: "kata"}] },
    quiz: { generate: "stoffwechseltypologie" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "⚡", color: "#F1C40F" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "Zellatmung produziert die Energiewährung ___.", choices: ["ATP", "ADP", "DNA"], correctIndex: 0 },
    quiz: { generate: "stoffwechseltypologie" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧘", color: "#9B59B6" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "Der Grundumsatz ist die Energie, die der Körper ___ benötigt.", choices: ["in Ruhe", "beim Sport", "beim Schlafen"], correctIndex: 0 },
    quiz: { generate: "integration" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "💔", color: "#C0392B" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Diabetes", right: "Gestörte Blutzuckerregulation"}, {left: "Fieber", right: "Gestörte Temperaturregulation"}] },
    quiz: { generate: "integration" }
  },
];

// ─── i8: POPULATIONSGENETIK ─────────────────────────────────────────────

export const BIO_K8_I8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Populationsgenetik",
    
    t1_title: "Population und Genpool",
    t1_text: "Eine Population ist eine Gruppe von Individuen derselben Art, die sich untereinander fortpflanzen. Ihr gemeinsamer Genbestand ist der Genpool.",
    t1_h1: "Fortpflanzungsgemeinschaft", t1_h2: "Gesamtheit aller Allele",
    t1_inst: "Definiere den Genpool!",
    
    t2_title: "Hardy-Weinberg-Gleichgewicht",
    t2_text: "In einer idealen Population ohne Evolutionsfaktoren bleiben die Allelfrequenzen von Generation zu Generation konstant.",
    t2_h1: "Keine Evolution", t2_h2: "Ideale Population",
    t2_inst: "Prüfe das Gleichgewicht!",
    
    t3_title: "Evolutionsfaktoren",
    t3_text: "Mutation, Rekombination, Selektion, Gendrift und Isolation sind die fünf Hauptfaktoren, die die Allelfrequenzen in einer Population verändern.",
    t3_h1: "Triebkräfte der Evolution", t3_h2: "Verändern den Genpool",
    t3_inst: "Sortiere die Faktoren!",

    t4_title: "Gendrift",
    t4_text: "Gendrift ist die zufällige Veränderung von Allelfrequenzen, die besonders in kleinen Populationen eine große Rolle spielt.",
    t4_h1: "Zufallseffekt", t4_h2: "Flaschenhals & Gründereffekt",
    t4_inst: "Simuliere den Gendrift!",

    t5_title: "Artbildung (Speziation)",
    t5_text: "Artbildung ist der Prozess, durch den neue biologische Arten entstehen, meist durch die Aufspaltung einer Ursprungsart.",
    t5_h1: "Entstehung neuer Arten", t5_h2: "Evolutionärer Prozess",
    t5_inst: "Verfolge die Artbildung!",
    
    t6_title: "Allopatrische Artbildung",
    t6_text: "Neue Arten entstehen durch geografische Isolation. Die getrennten Populationen entwickeln sich unabhängig voneinander weiter.",
    t6_h1: "Geografische Trennung", t6_h2: "z.B. durch einen Fluss",
    t6_inst: "Trenne die Population!",

    t7_title: "Sympatrische Artbildung",
    t7_text: "Neue Arten entstehen innerhalb desselben Lebensraums, z.B. durch ökologische Spezialisierung oder chromosomale Veränderungen.",
    t7_h1: "Ohne geografische Trennung", t7_h2: "Im selben Lebensraum",
    t7_inst: "Finde die Nische!",
    
    t8_title: "Isolationsmechanismen",
    t8_text: "Reproduktive Isolation verhindert die Fortpflanzung zwischen verschiedenen Arten und hält ihre Genpools getrennt.",
    t8_h1: "Keine Fortpflanzung", t8_h2: "Vor und nach der Paarung",
    t8_inst: "Errichte eine Barriere!",
  },
};

export const BIO_K8_I8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "📊", color: "#D35400" },
    interactive: { type: "highlight-text", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", tokens: ["Gruppe", "selbe Art", "Genbestand", "Genpool"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "populationsgenetik" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "⚖️", color: "#95A5A6" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "Ohne Evolution bleiben Allelfrequenzen ___.", choices: ["konstant", "zufällig", "kleiner"], correctIndex: 0 },
    quiz: { generate: "populationsgenetik" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "⚙️", color: "#34495E" },
    interactive: { type: "drag-to-bucket", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", buckets: [{id: "faktor", label: "Evolutionsfaktor"}, {id: "kein", label: "Kein Faktor"}], items: [{text: "Selektion", bucketId: "faktor"}, {text: "Gendrift", bucketId: "faktor"}, {text: "Alter", bucketId: "kein"}] },
    quiz: { generate: "populationsgenetik" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🎲", color: "#F1C40F" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left: "Flaschenhals", right: "Dezimierung"}, {left: "Gründereffekt", right: "Abwanderung"}] },
    quiz: { generate: "populationsgenetik" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🌳", color: "#27AE60" },
    interactive: { type: "physics-stacker", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", words: ["Ursprungsart", "Isolation", "Eigene Entwicklung", "Neue Art"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "artbildung" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🏞️", color: "#2980B9" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left: "Allopatrisch", right: "Geografische Trennung"}, {left: "Fluss / Gebirge", right: "Isolationsbarriere"}, {left: "Getrennte Populationen", right: "Unabhängige Evolution"}] },
    quiz: { generate: "artbildung" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🏠", color: "#16A085" },
    interactive: { type: "highlight-text", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", tokens: ["innerhalb desselben Lebensraums"], correctIndices: [0] },
    quiz: { generate: "artbildung" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "⛔", color: "#C0392B" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Reproduktive Isolation verhindert ___.", choices: ["Fortpflanzung", "Nahrungssuche", "Wachstum"], correctIndex: 0 },
    quiz: { generate: "artbildung" }
  },
];

// ─── i9: PHYLOGENIE & NATURSCHUTZ ──────────────────────────────────────

export const BIO_K8_I9_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Phylogenie & Naturschutz",
    
    t1_title: "Phylogenie & Stammbäume",
    t1_text: "Die Phylogenie erforscht die evolutionäre Geschichte und die Verwandtschaftsbeziehungen von Lebewesen, oft dargestellt in Stammbäumen.",
    t1_h1: "Lehre von der Abstammung", t1_h2: "Evolutionäre Verwandtschaft",
    t1_inst: "Lies den Stammbaum!",
    
    t2_title: "Homologie vs. Analogie",
    t2_text: "Homologe Merkmale haben einen gemeinsamen Ursprung, analoge Merkmale eine ähnliche Funktion, aber unterschiedliche Ursprünge.",
    t2_h1: "Homologie: Ursprungsgleich", t2_h2: "Analogie: Funktionsgleich",
    t2_inst: "Sortiere die Merkmale!",
    
    t3_title: "Beweise für die Evolution",
    t3_text: "Fossilien, vergleichende Anatomie (Homologien), Embryologie und molekularbiologische Daten (DNA) belegen die Evolution.",
    t3_h1: "Fossilien", t3_h2: "DNA-Vergleich",
    t3_inst: "Finde die Beweise!",

    t4_title: "Brückentiere",
    t4_text: "Brückentiere oder Mosaikformen sind Fossilien, die Merkmale von zwei verschiedenen Tiergruppen in sich vereinen, wie der Archaeopteryx.",
    t4_h1: "Mosaikformen", t4_h2: "z.B. Archaeopteryx",
    t4_inst: "Finde das Brückentier!",

    t5_title: "Biodiversität",
    t5_text: "Biodiversität oder biologische Vielfalt umfasst die Vielfalt der Arten, die genetische Vielfalt innerhalb der Arten und die Vielfalt der Ökosysteme.",
    t5_h1: "Artenvielfalt", t5_h2: "Genetische Vielfalt",
    t5_inst: "Erkenne die Vielfalt!",
    
    t6_title: "Gefährdung der Biodiversität",
    t6_text: "Die Hauptursachen für den Verlust der Biodiversität sind Lebensraumzerstörung, Umweltverschmutzung, Klimawandel und Übernutzung.",
    t6_h1: "Lebensraumverlust", t6_h2: "Klimawandel",
    t6_inst: "Benenne die Gefahren!",

    t7_title: "Rote Liste",
    t7_text: "Die Rote Liste der IUCN (International Union for Conservation of Nature) stuft den Gefährdungsgrad von Arten weltweit ein.",
    t7_h1: "Gefährdungskategorien", t7_h2: "Von harmlos bis ausgestorben",
    t7_inst: "Stufe die Arten ein!",
    
    t8_title: "Maßnahmen zum Naturschutz",
    t8_text: "Schutzgebiete, Artenschutzprogramme und nachhaltige Nutzung von Ressourcen sind wichtige Maßnahmen zum Erhalt der Biodiversität.",
    t8_h1: "Schutzgebiete", t8_h2: "Nachhaltigkeit",
    t8_inst: "Was können wir tun?",
  },
};

export const BIO_K8_I9_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🌳", color: "#27AE60" },
    interactive: { type: "highlight-text", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", tokens: ["evolutionäre Geschichte", "Verwandtschaftsbeziehungen"], correctIndices: [0, 1] },
    quiz: { generate: "phylogenie" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "↔️", color: "#3498DB" },
    interactive: { type: "drag-to-bucket", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", buckets: [{id: "homo", label: "Homolog"}, {id: "ana", label: "Analog"}], items: [{text: "Arm (Mensch) & Flügel (Fledermaus)", bucketId: "homo"}, {text: "Flügel (Vogel) & Flügel (Insekt)", bucketId: "ana"}] },
    quiz: { generate: "phylogenie" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "💡", color: "#F1C40F" },
    interactive: { type: "match-pairs", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", pairs: [{left: "Fossil", right: "Versteinerter Abdruck"}, {left: "DNA", right: "Genetischer Code"}] },
    quiz: { generate: "phylogenie" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🦕", color: "#E67E22" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Archaeopteryx vereint Merkmale von Reptilien und ___.", choices: ["Vögeln", "Fischen", "Säugetieren"], correctIndex: 0 },
    quiz: { generate: "phylogenie" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🌍", color: "#1ABC9C" },
    interactive: { type: "tap-count", tapCount: { emoji: "🦋", count: 3 }, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "conservation_biology" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🏭", color: "#7F8C8D" },
    interactive: { type: "highlight-text", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tokens: ["Lebensraumzerstörung", "Klimawandel", "Übernutzung"], correctIndices: [0, 1, 2] },
    quiz: { generate: "conservation_biology" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "❤️", color: "#C0392B" },
    interactive: { type: "physics-stacker", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["Vom Aussterben bedroht", "Gefährdet", "Gering gefährdet", "Nicht gefährdet"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "conservation_biology" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#2ECC71" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Schutzgebiet", right: "Nationalpark"}, {left: "Nachhaltigkeit", right: "Ressourcen schonen"}] },
    quiz: { generate: "conservation_biology" }
  },
];
