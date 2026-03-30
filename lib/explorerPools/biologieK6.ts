// lib/explorerPools/biologieK6.ts
import type { PoolTopicDef } from "./types";

// ─── i1: GLIEDERFÜSSER (ARTHROPODS) ──────────────────────────────────

export const BIO_K6_I1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Die Gliederfüßer",
    
    // T1: Gemeinsame Merkmale
    t1_title: "Gemeinsame Merkmale",
    t1_text: "Gliederfüßer haben ein hartes Außenskelett aus Chitin und gegliederte Beine. Zu ihnen gehören Insekten, Spinnen, Krebse und Tausendfüßler.",
    t1_h1: "Außenskelett aus Chitin", t1_h2: "Gegliederte Beine",
    t1_inst: "Was gehört dazu?",
    t1_q: "Woraus besteht das Außenskelett der Gliederfüßer?",
    t1_qa: "Aus Chitin", t1_qb: "Aus Kalk", t1_qc: "Aus Knochen", t1_qd: "Aus Horn",

    // T2: Körperbau der Insekten
    t2_title: "Körperbau der Insekten",
    t2_text: "Insektenkörper bestehen aus drei Teilen: Kopf, Brust und Hinterleib. Sie haben immer genau sechs Beine an der Brust.",
    t2_h1: "Drei Körperabschnitte", t2_h2: "Genau sechs Beine",
    t2_inst: "Bau das Insekt!",
    t2_q: "Wie viele Beine hat ein Insekt?",
    t2_qa: "Sechs (3 Paare)", t2_qb: "Acht (4 Paare)", t2_qc: "Zehn", t2_qd: "Viele",

    // T3: Spinnentiere
    t3_title: "Spinnentiere",
    t3_text: "Spinnen haben nur zwei Körperabschnitte (Kopfbrust und Hinterleib) und besitzen acht Beine. Sie haben keine Fühler.",
    t3_h1: "Zwei Körperabschnitte", t3_h2: "Acht Beine",
    t3_inst: "Spinne oder Insekt?",
    t3_q: "Was fehlt den Spinnen im Vergleich zu Insekten?",
    t3_qa: "Fühler und Flügel", t3_qb: "Beine", t3_qc: "Augen", t3_qd: "Hinterleib",

    // T4: Krebstiere
    t4_title: "Krebstiere",
    t4_text: "Die meisten Krebse leben im Wasser. Sie haben oft einen sehr harten Panzer, der zusätzlich Kalk enthalten kann.",
    t4_h1: "Harter Panzer", t4_h2: "Meist im Wasser",
    t4_inst: "Finde den Krebs!",
    t4_q: "Wie viele Beine haben die meisten Krebse (wie der Flusskrebs)?",
    t4_qa: "Zehn (5 Paare)", t4_qb: "Sechs", t4_qc: "Acht", t4_qd: "Hundert",

    // T5: Metamorphose
    t5_title: "Vollkommene Verwandlung",
    t5_text: "Viele Insekten entwickeln sich vom Ei über die Larve und die Puppe zum fertigen Insekt (Imago).",
    t5_h1: "Stadium der Puppe", t5_h2: "Vollkommene Metamorphose",
    t5_inst: "Ordne die Stadien!",
    t5_w1: "Ei", t5_w2: "Larve", t5_w3: "Puppe", t5_w4: "Imago",

    // T6: Facettenaugen
    t6_title: "Das Facettenauge",
    t6_text: "Insektenaugen bestehen aus vielen tausend Einzelaugen. Sie sehen die Welt wie ein Mosaik.",
    t6_h1: "Mosaikbild", t6_h2: "Einzelaugen",
    t6_inst: "Schau durch das Auge!",
    t6_q: "Wie nennt man die Augen der Insekten?",
    t6_qa: "Facettenaugen", t6_qb: "Linsenaugen", t6_qc: "Punktaugen", t6_qd: "Netzhautaugen",

    // T7: Chitinpanzer & Häutung
    t7_title: "Häutung",
    t7_text: "Da der Chitinpanzer nicht mitwächst, müssen sich Gliederfüßer regelmäßig häuten, um größer zu werden.",
    t7_h1: "Wachstumsschübe", t7_h2: "Alten Panzer ablegen",
    t7_inst: "Häute dich!",
    t7_q: "Warum müssen sich Gliederfüßer häuten?",
    t7_qa: "Weil der Panzer nicht mitwächst", t7_qb: "Um die Farbe zu ändern", t7_qc: "Um Flügel zu bekommen", t7_qd: "Um Eier zu legen",

    // T8: Die Honigbiene
    t8_title: "Die Honigbiene",
    t8_text: "Bienen sind staatenbildende Insekten. Ein Volk besteht aus einer Königin, Drohnen und vielen Arbeiterinnen.",
    t8_h1: "Insektenstaat", t8_h2: "Arbeitsteilung",
    t8_inst: "Wer ist wer?",

    // T9: Spinnennetz
    t9_title: "Das Spinnennetz",
    t9_text: "Viele Spinnen bauen Netze aus klebriger Seide, um Beute zu fangen. Die Seide wird in Spinndrüsen produziert.",
    t9_h1: "Klebrige Falle", t9_h2: "Spinndrüsen",
    t9_inst: "Baue das Netz!",

    // T10: Tausendfüßler
    t10_title: "Tausendfüßler",
    t10_text: "Tausendfüßler haben einen langgestreckten Körper mit vielen Segmenten und jeweils einem oder zwei Beinpaaren pro Segment.",
    t10_h1: "Viele Segmente", t10_h2: "Gliederung",
    t10_inst: "Zähle die Beine!",
  },
};

export const BIO_K6_I1_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "ArthropodGroupsSvg", bg: "#FEF2F2" },
    interactive: { type: "drag-to-bucket", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", buckets: [{id: "glied", label: "Gliederfüßer"}, {id: "kein", label: "Kein Gliederfüßer"}], items: [{text: "Biene", bucketId: "glied"}, {text: "Regenwurm", bucketId: "kein"}, {text: "Spinne", bucketId: "glied"}, {text: "Schnecke", bucketId: "kein"}] },
    quiz: { generate: "arthropods" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "biologie-diagram", name: "InsectAnatomySvg", bg: "#F0FDF4" },
    interactive: { type: "highlight-text", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", tokens: ["Kopf", "Brust", "Hinterleib", "sechs", "Beine"], correctIndices: [0, 1, 2, 3, 4] },
    quiz: { generate: "insects" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "biologie-diagram", name: "SpiderAnatomySvg", bg: "#F8FAFC" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "Spinnen haben ___ Beine.", choices: ["acht", "sechs", "zehn", "vier"], correctIndex: 0 },
    quiz: { generate: "spiders" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🦞", color: "#EF4444" },
    interactive: { type: "drag-to-bucket", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", buckets: [{id: "krebs", label: "Krebs"}, {id: "insekt", label: "Insekt"}], items: [{text: "Hummer", bucketId: "krebs"}, {text: "Biene", bucketId: "insekt"}, {text: "Krabbe", bucketId: "krebs"}, {text: "Ameise", bucketId: "insekt"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🦋", color: "#A855F7" },
    interactive: { type: "physics-stacker", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", words: ["t5_w1", "t5_w2", "t5_w3", "t5_w4"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "insects" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "👁️", color: "#64748B" },
    interactive: { type: "highlight-text", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tokens: ["viele", "Einzelaugen", "Facettenauge", "Mosaik"], correctIndices: [0, 1, 2, 3] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "👕", color: "#92400E" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "Insekten müssen sich ___.", choices: ["häuten", "waschen", "schminken", "kämmen"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🐝", color: "#FACC15" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Königin", right: "Eierlegen"}, {left: "Drohnen", right: "Männchen"}, {left: "Arbeiterin", right: "Sammeln"}] },
    quiz: { generate: "insects" }
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🕸️", color: "#CBD5E1" },
    interactive: { type: "match-pairs", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", pairs: [{left: "Spinnenseide", right: "Klebrig"}, {left: "Netz", right: "Falle"}, {left: "Spindrüse", right: "Produktion"}] },
    quiz: { generate: "spiders" }
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🐛", color: "#16A34A" },
    interactive: { type: "match-pairs", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", pairs: [{left: "Segment", right: "Körperring"}, {left: "Beine", right: "viele"}, {left: "Schutz", right: "Giftklauen"}] },
    quiz: { generate: "arthropods" }
  }
];

// ─── i2: WEICHTIERE & WÜRMER (MOLLUSKS & WORMS) ───────────────────────

export const BIO_K6_I2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Weichtiere & Würmer",
    
    // T1: Die Weichtiere
    t1_title: "Merkmale der Weichtiere",
    t1_text: "Weichtiere haben einen weichen Körper, der oft durch eine harte Schale geschützt wird. Sie bestehen aus Kopf, Fuß und Eingeweidesack.",
    t1_h1: "Weicher Körper", t1_h2: "Mantel & Schale",
    t1_inst: "Was passt?",
    t1_q: "Welche Teile gehören zum Körperbau der Weichtiere?",
    t1_qa: "Kopf, Fuß, Eingeweidesack", t1_qb: "Kopf, Brust, Hinterleib", t1_qc: "Kopf, Hals, Beine", t1_qd: "Stamm, Blatt, Wurzel",

    // T2: Die Schnecke
    t2_title: "Die Weinbergschnecke",
    t2_text: "Schnecken bewegen sich auf einem muskulösen Kriechfuß fort. Die Weinbergschnecke hat ein schützendes Gehäuse aus Kalk.",
    t2_h1: "Kriechfuß", t2_h2: "Raspelzunge (Radula)",
    t2_inst: "Folge der Schleimspur!",
    t2_q: "Wie heißt das Organ, mit dem Schnecken ihre Nahrung abraspeln?",
    t2_qa: "Raspelzunge (Radula)", t2_qb: "Kiefer", t2_qc: "Mahlzahn", t2_qd: "Schnabel",

    // T3: Muscheln
    t3_title: "Die Muscheln",
    t3_text: "Muscheln leben im Wasser und haben eine Schale aus zwei Hälften. Sie ernähren sich, indem sie Wasser filtern.",
    t3_h1: "Zweiteilige Schale", t3_h2: "Filtrierer",
    t3_inst: "Öffne die Muschel!",
    t3_q: "Wie atmen Muscheln?",
    t3_qa: "Mit Kiemen", t3_qb: "Mit Lungen", t3_qc: "Durch die Haut", t3_qd: "Gar nicht",

    // T4: Kopffüßer (Tintenfische)
    t4_title: "Kopffüßer",
    t4_text: "Tintenfische sind die intelligentesten Weichtiere. Ihr Fuß ist zu Fangarmen (Tentakeln) umgebildet.",
    t4_h1: "Tentakel", t4_h2: "Tintenbeutel",
    t4_inst: "Fang den Fisch!",
    t4_q: "Zu welcher Gruppe gehören Kraken und Kalmare?",
    t4_qa: "Kopffüßer", t4_qb: "Schnecken", t4_qc: "Muscheln", t4_qd: "Würmer",

    // T5: Der Regenwurm
    t5_title: "Der Regenwurm",
    t5_text: "Der Regenwurm gehört zu den Ringelwürmern. Sein Körper besteht aus vielen ähnlichen Segmenten.",
    t5_h1: "Ringelwurm", t5_h2: "Hautatmung",
    t5_inst: "Grabe dich ein!",
    t5_q: "Wofür ist der Regenwurm nützlich?",
    t5_qa: "Bodenlockerung & Humus", t5_qb: "Insektenjagd", t5_qc: "Bestäubung", t5_qd: "Honigproduktion",

    // T6: Ringelwürmer Merkmale
    t6_title: "Segmentierung",
    t6_text: "Ringelwürmer haben einen geschlossenen Blutkreislauf und ein Strickleiternervensystem.",
    t6_h1: "Geschlossener Kreislauf", t6_h2: "Strickleiternervensystem",
    t6_inst: "Leite das Signal!",

    // T7: Egel & Parasiten
    t7_title: "Blutegel",
    t7_text: "Einige Ringelwürmer wie der Blutegel leben als Parasiten und saugen Blut bei anderen Tieren.",
    t7_h1: "Saugnäpfe", t7_h2: "Blutsauger",
    t7_inst: "Vorsicht, Egel!",

    // T8: Lebensräume
    t8_title: "Lebensräume",
    t8_text: "Weichtiere und Würmer findet man im Meer, im Süßwasser und an Land (in feuchter Umgebung).",
    t8_h1: "Feuchte Orte", t8_h2: "Weltweite Verbreitung",
    t8_inst: "Wo leben sie?",
  },
};

export const BIO_K6_I2_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "MolluskAnatomySvg", bg: "#F0F9FF" },
    interactive: { type: "drag-to-bucket", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", buckets: [{id: "weich", label: "Weichtier"}, {id: "kein", label: "Kein Weichtier"}], items: [{text: "Schnecke", bucketId: "weich"}, {text: "Regenwurm", bucketId: "kein"}, {text: "Tintenfisch", bucketId: "weich"}, {text: "Spinne", bucketId: "kein"}] },
    quiz: { generate: "mollusks" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🐌", color: "#A855F7" },
    interactive: { type: "highlight-text", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", tokens: ["Kriechfuß", "Radula", "Kalk", "Schleim"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "mollusks" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🦪", color: "#94A3B8" },
    interactive: { type: "match-pairs", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", pairs: [{left: "Schale", right: "Zweigeteilt"}, {left: "Atmung", right: "Kiemen"}, {left: "Ernährung", right: "Filtrieren"}] },
    quiz: { generate: "mollusks" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🦑", color: "#EC4899" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left: "Tentakel", right: "Fangen"}, {left: "Tinte", right: "Flucht"}, {left: "Auge", right: "Sehen"}] },
    quiz: { generate: "mollusks" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "biologie-diagram", name: "WormAnatomySvg", bg: "#FEF2F2" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "Der Regenwurm lockert den ___.", choices: ["Boden", "Himmel", "See", "Schrank"], correctIndex: 0 },
    quiz: { generate: "worm" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "⛓️", color: "#64748B" },
    interactive: { type: "highlight-text", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tokens: ["Blutkreislauf", "Nervensystem", "Segmente"], correctIndices: [0, 1, 2] },
    quiz: { generate: "worm" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🩸", color: "#EF4444" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Blutegel", right: "Sauger"}, {left: "Haut", right: "Atmung"}, {left: "Borsten", right: "Halt"}] },
    quiz: { generate: "worm" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🌊", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id: "meer", label: "Meer"}, {id: "land", label: "Land"}], items: [{text: "Krake", bucketId: "meer"}, {text: "Weinbergschnecke", bucketId: "land"}, {text: "Muschel", bucketId: "meer"}, {text: "Regenwurm", bucketId: "land"}] },
    quiz: { generate: "mollusks" }
  }
];

// ─── i3: WALDÖKOSYSTEM (FOREST) ──────────────────────────────────────

export const BIO_K6_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Das Waldökosystem",
    
    // T1: Stockwerke des Waldes
    t1_title: "Stockwerke des Waldes",
    t1_text: "Ein Wald ist wie ein Haus in Stockwerke gegliedert: Wurzelschicht, Moosschicht, Krautschicht, Strauchschicht und Baumschicht.",
    t1_h1: "Gliederung des Waldes", t1_h2: "Lichtverteilung",
    t1_inst: "Bau das Wald-Haus!",
    t1_q: "Welches ist das oberste Stockwerk des Waldes?",
    t1_qa: "Baumschicht", t1_qb: "Strauchschicht", t1_qc: "Krautschicht", t1_qd: "Moosschicht",

    // T2: Die Baumschicht
    t2_title: "Die Baumschicht",
    t2_text: "Die Kronen der hohen Bäume bilden das Dach des Waldes. Hier leben viele Vögel und Eichhörnchen.",
    t2_h1: "Das Walddach", t2_h2: "Licht und Wind",
    t2_inst: "Wer lebt oben?",
    t2_q: "Welche Tiere findet man vor allem in der Baumschicht?",
    t2_qa: "Vögel & Eichhörnchen", t2_qb: "Rehe & Füchse", t2_qc: "Regenwürmer", t2_qd: "Erdkröten",

    // T3: Die Krautschicht
    t3_title: "Die Krautschicht",
    t3_text: "In der Krautschicht wachsen Gräser, Farne und Blumen. Sie blühen oft im Frühling, bevor die Bäume Blätter tragen.",
    t3_h1: "Frühblüher", t3_h2: "Wenig Licht im Sommer",
    t3_inst: "Sammle Blumen!",
    t3_q: "Warum blühen viele Waldblumen schon im frühen Frühling?",
    t3_qa: "Weil dann noch Licht den Boden erreicht", t3_qb: "Weil es dann regnet", t3_qc: "Gegen Frost", t3_qd: "Zufall",

    // T4: Nahrungskette
    t4_title: "Die Nahrungskette",
    t4_text: "Im Wald fressen Tiere Pflanzen oder andere Tiere. Ein Beispiel: Pflanze -> Reh -> Wolf.",
    t4_h1: "Fressen und gefressen werden", t4_h2: "Energiefluss",
    t4_inst: "Ordne die Kette!",
    t4_w1: "Eichel", t4_w2: "Eichhörnchen", t4_w3: "Baummarder", t4_w4: "Uhu",

    // T5: Produzenten & Konsumenten
    t5_title: "Produzenten & Konsumenten",
    t5_text: "Pflanzen sind Produzenten (Erzeuger), Tiere sind Konsumenten (Verbraucher).",
    t5_h1: "Pflanzen machen Energie", t5_h2: "Tiere verbrauchen sie",
    t5_inst: "Wer ist wer?",
    t5_q: "Wie nennt man grüne Pflanzen in einem Ökosystem?",
    t5_qa: "Produzenten", t5_qb: "Konsumenten", t5_qc: "Destruenten", t5_qd: "Parasiten",

    // T6: Destruenten (Zersetzer)
    t6_title: "Die Zersetzer",
    t6_text: "Pilze und Bakterien zersetzen totes Material (Laub, Holz) und machen daraus wieder Nährstoffe für die Pflanzen.",
    t6_h1: "Müllabfuhr des Waldes", t6_h2: "Recycling",
    t6_inst: "Zersetze das Laub!",
    t6_q: "Was ist die Hauptaufgabe der Destruenten?",
    t6_qa: "Abbau von totem Material", t6_qb: "Jagen", t6_qc: "Sauerstoff machen", t6_qd: "Früchte tragen",

    // T7: Symbiose (Pilz & Baum)
    t7_title: "Symbiose",
    t7_text: "Viele Pilze leben in einer Symbiose mit Bäumen. Sie tauschen Wasser gegen Zucker aus.",
    t7_h1: "Geben und Nehmen", t7_h2: "Zusammenleben",
    t7_inst: "Tausche Stoffe!",

    // T8: Bedeutung des Waldes
    t8_title: "Nutzung & Schutz",
    t8_text: "Wälder liefern Holz, schützen vor Erosion, speichern Wasser und sind Erholungsgebiete für Menschen.",
    t8_h1: "Sauerstoffspender", t8_h2: "Wasserspeicher",
    t8_inst: "Schütze den Wald!",
  },
};

export const BIO_K6_I3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "ForestLayersSvg", bg: "#ECFDF5" },
    interactive: { type: "physics-stacker", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["Baumschicht", "Strauchschicht", "Krautschicht", "Moosschicht"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "forest_layers" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🐿️", color: "#92400E" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "Oben im Wald ist die ___.", choices: ["Baumschicht", "Wurzelschicht", "Keller", "Garage"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🌸", color: "#F472B6" },
    interactive: { type: "highlight-text", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", tokens: ["Krautschicht", "Frühling", "Licht", "Blumen"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "forest_layers" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "biologie-diagram", name: "FoodChainSvg", bg: "#F0FDF4" },
    interactive: { type: "physics-stacker", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "food_chain" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🌿", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", pairs: [{left: "Pflanze", right: "Produzent"}, {left: "Tier", right: "Konsument"}, {left: "Pilz", right: "Destruent"}] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🍄", color: "#EF4444" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left: "Pilz", right: "Zersetzer"}, {left: "Bakterien", right: "Abbauen"}, {left: "Laub", right: "Humus"}] },
    quiz: { generate: "decomposition" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#FACC15" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Pilz", right: "Wasser"}, {left: "Baum", right: "Zucker"}, {left: "Beziehung", right: "Vorteil"}] },
    quiz: { generate: "forest_layers" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🌳", color: "#166534" },
    interactive: { type: "highlight-text", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", tokens: ["Sauerstoff", "Holz", "Schutz", "Wasser"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "forest_layers" }
  }
];

// ─── i4: GEWÄSSER (WATER ECOSYSTEMS) ─────────────────────────────────

export const BIO_K6_I4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Gewässer",
    
    // T1: Süßwasser vs. Salzwasser
    t1_title: "Süß- und Salzwasser",
    t1_text: "Flüsse und Seen enthalten Süßwasser. Ozeane und Meere enthalten Salzwasser. Beide bieten unterschiedliche Lebensbedingungen.",
    t1_h1: "Salzgehalt", t1_h2: "Verschiedene Lebensräume",
    t1_inst: "Süß oder salzig?",
    t1_q: "Wie viel Prozent der Erdoberfläche sind etwa von Wasser bedeckt?",
    t1_qa: "Etwa 70%", t1_qb: "Genau 50%", t1_qc: "Nur 20%", t1_qd: "Fast 100%",

    // T2: See-Zonen
    t2_title: "Zonen eines Sees",
    t2_text: "Ein See hat verschiedene Zonen: Uferzone (Litoral) und Freiwasserzone (Pelagial). Im Uferbereich wachsen viele Pflanzen.",
    t2_h1: "Ufer und Freiwasser", t2_h2: "Pflanzengürtel",
    t2_inst: "Tauche ab!",
    t2_q: "Wie nennt man die lichtdurchflutete Uferzone eines Sees?",
    t2_qa: "Litoral", t2_qb: "Pelagial", t2_qc: "Tiefenzone", t2_qd: "Sprungschicht",

    // T3: Plankton
    t3_title: "Das Plankton",
    t3_text: "Plankton sind winzige Lebewesen, die im Wasser schweben. Es gibt pflanzliches (Phytoplankton) und tierisches Plankton (Zooplankton).",
    t3_h1: "Schwebende Winzlinge", t3_h2: "Basis der Nahrungskette",
    t3_inst: "Fange das Plankton!",
    t3_q: "Welches Plankton betreibt Fotosynthese?",
    t3_qa: "Phytoplankton", t3_qb: "Zooplankton", t3_qc: "Bakterien", t3_qd: "Fische",

    // T4: Angepasstheit ans Wasser
    t4_title: "Leben im Wasser",
    t4_text: "Wassertiere haben oft eine Stromlinienform und nutzen Flossen oder Schwimmhäute zur Fortbewegung.",
    t4_h1: "Stromlinienform", t4_h2: "Widerstand verringern",
    t4_inst: "Schwimm mit!",
    t4_q: "Was hilft Fischen, sich im Wasser leicht fortzubewegen?",
    t4_qa: "Stromlinienform", t4_qb: "Eckiger Körper", t4_qc: "Langes Fell", t4_qd: "Große Ohren",

    // T5: Nahrungskette im Meer
    t5_title: "Meeres-Nahrungskette",
    t5_text: "Algen werden von Kleinkrebsen gefressen, diese von kleinen Fischen und diese wiederum von Raubfischen.",
    t5_h1: "Wer frisst wen?", t5_h2: "Algen als Basis",
    t5_inst: "Bau die Kette!",

    // T6: Die Tiefsee
    t6_title: "Die Tiefsee",
    t6_text: "In der Tiefsee ist es dunkel, kalt und der Druck ist extrem hoch. Tiere dort haben oft Leuchtorgane.",
    t6_h1: "Dunkelheit & Druck", t6_h2: "Leuchtende Tiere",
    t6_inst: "Schalte das Licht an!",

    // T7: Korallenriffe
    t7_title: "Korallenriffe",
    t7_text: "Korallenriffe sind die artenreichsten Lebensräume im Meer. Sie entstehen durch winzige Korallenpolypen.",
    t7_h1: "Unterwasser-Dschungel", t7_h2: "Bedrohter Lebensraum",
    t7_inst: "Schau dir das Riff an!",

    // T8: Wasserschutz
    t8_title: "Wasserschutz",
    t8_text: "Gewässer sind durch Plastikmüll und Überdüngung bedroht. Wir müssen sie als Lebensraum schützen.",
    t8_h1: "Kein Müll ins Wasser", t8_h2: "Sauberes Trinkwasser",
    t8_inst: "Sammle den Müll!",
  },
};

export const BIO_K6_I4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🌊", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", buckets: [{id: "suess", label: "Süßwasser"}, {id: "salz", label: "Salzwasser"}], items: [{text: "See", bucketId: "suess"}, {text: "Ozean", bucketId: "salz"}, {text: "Fluss", bucketId: "suess"}, {text: "Meer", bucketId: "salz"}] },
    quiz: { generate: "saltwater" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "biologie-diagram", name: "LakeZonesSvg", bg: "#E0F2FE" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{left: "Litoral", right: "Uferzone"}, {left: "Pelagial", right: "Freiwasser"}, {left: "Pflanzen", right: "Ufer"}] },
    quiz: { generate: "freshwater" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🦠", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", pairs: [{left: "Phyto", right: "Pflanzlich"}, {left: "Zoo", right: "Tierisch"}, {left: "Licht", right: "Energie"}] },
    quiz: { generate: "water_organisms" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🐟", color: "#0EA5E9" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["Stromlinienform", "Flossen", "Widerstand", "Wasser"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "water_organisms" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🦈", color: "#64748B" },
    interactive: { type: "physics-stacker", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", words: ["Algen", "Krebse", "Hering", "Hai"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "saltwater" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🕯️", color: "#FACC15" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "In der Tiefsee ist es ___.", choices: ["dunkel", "hell", "warm", "bunt"], correctIndex: 0 },
    quiz: { generate: "saltwater" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🪸", color: "#FB7185" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Koralle", right: "Polyp"}, {left: "Riff", right: "Lebensraum"}, {left: "Bedrohung", right: "Erwärmung"}] },
    quiz: { generate: "saltwater" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🚮", color: "#EF4444" },
    interactive: { type: "highlight-text", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", tokens: ["Plastik", "Schutz", "Lebensraum", "Wasser"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "freshwater" }
  }
];

// ─── i5: HERZ & BLUT (HEART & BLOOD) ─────────────────────────────────

export const BIO_K6_I5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Herz & Blut",
    
    // T1: Bestandteile des Blutes
    t1_title: "Bestandteile des Blutes",
    t1_text: "Unser Blut besteht aus festen Bestandteilen (Zellen) und einer flüssigen Phase, dem Blutplasma.",
    t1_h1: "Zellen und Plasma", t1_h2: "Transportmittel",
    t1_inst: "Was ist im Blut?",
    t1_q: "Wie heißt der flüssige Teil des Blutes?",
    t1_qa: "Blutplasma", t1_qb: "Blutserum", t1_qc: "Wasser", t1_qd: "Lymphe",

    // T2: Rote Blutzellen
    t2_title: "Rote Blutzellen (Erythrozyten)",
    t2_text: "Sie transportieren den Sauerstoff von der Lunge zu den Zellen. Sie enthalten den roten Farbstoff Hämoglobin.",
    t2_h1: "Sauerstoff-Taxi", t2_h2: "Hämoglobin",
    t2_inst: "Belade das Taxi!",
    t2_q: "Was ist die Hauptaufgabe der roten Blutzellen?",
    t2_qa: "Sauerstofftransport", t2_qb: "Abwehr von Krankheiten", t2_qc: "Blutstillung", t2_qd: "Verdauung",

    // T3: Weiße Blutzellen
    t3_title: "Weiße Blutzellen (Leukozyten)",
    t3_text: "Sie sind die Gesundheitspolizei unseres Körpers und bekämpfen Krankheitserreger wie Bakterien und Viren.",
    t3_h1: "Gesundheitspolizei", t3_h2: "Abwehr",
    t3_inst: "Greif die Erreger an!",
    t3_q: "Welche Zellen schützen uns vor Krankheiten?",
    t3_qa: "Weiße Blutzellen", t3_qb: "Rote Blutzellen", t3_qc: "Blutplättchen", t3_qd: "Hormone",

    // T4: Blutplättchen
    t4_title: "Blutplättchen (Thrombozyten)",
    t4_text: "Wenn wir uns verletzen, sorgen sie dafür, dass das Blut gerinnt und die Wunde verschlossen wird.",
    t4_h1: "Wundverschluss", t4_h2: "Blutgerinnung",
    t4_inst: "Stoppe die Blutung!",
    t4_q: "Welche Bestandteile sind für die Blutgerinnung wichtig?",
    t4_qa: "Blutplättchen", t4_qb: "Rote Zellen", t4_qc: "Weiße Zellen", t4_qd: "Plasma",

    // T5: Das Herz
    t5_title: "Das Herz",
    t5_text: "Das Herz ist ein Hohlmuskel, der etwa so groß wie eine Faust ist. Er funktioniert wie eine Druck-Saug-Pumpe.",
    t5_h1: "Hohlmuskel", t5_h2: "Zwei Hälften",
    t5_inst: "Hör den Herzschlag!",
    t5_q: "Wie oft schlägt ein menschliches Herz etwa pro Minute in Ruhe?",
    t5_qa: "60 - 80 Mal", t5_qb: "20 - 30 Mal", t5_qc: "Über 150 Mal", t5_qd: "Genau 100 Mal",

    // T6: Aufbau des Herzens
    t6_title: "Herzkammern",
    t6_text: "Das Herz besteht aus einer linken und einer rechten Hälfte. Jede Hälfte hat einen Vorhof und eine Kammer.",
    t6_h1: "Vorhof & Kammer", t6_h2: "Herzscheidewand",
    t6_inst: "Bau das Herz!",

    // T7: Herzklappen
    t7_title: "Die Herzklappen",
    t7_text: "Herzklappen wirken wie Ventile. Sie sorgen dafür, dass das Blut nur in eine Richtung fließt.",
    t7_h1: "Ventilfunktion", t7_h2: "Einbahnstraße",
    t7_inst: "Öffne die Ventile!",

    // T8: Puls & Belastung
    t8_title: "Puls",
    t8_text: "Bei Anstrengung muss das Herz schneller schlagen, um die Muskeln mit mehr Sauerstoff zu versorgen.",
    t8_h1: "Herzschlagfrequenz", t8_h2: "Sport & Puls",
    t8_inst: "Miss den Puls!",
  },
};

export const BIO_K6_I5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "BloodCellsSvg", bg: "#FEF2F2" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left: "Rote Zellen", right: "Sauerstoff"}, {left: "Weiße Zellen", right: "Abwehr"}, {left: "Plasma", right: "Flüssigkeit"}] },
    quiz: { generate: "blood_components" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🔴", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "Rote Zellen transportieren ___.", choices: ["Sauerstoff", "Zucker", "Fett", "Müll"], correctIndex: 0 },
    quiz: { generate: "blood_components" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "⚪", color: "#F8FAFC" },
    interactive: { type: "highlight-text", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", tokens: ["Weiße", "Blutzellen", "Abwehr", "Polizei"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "blood_components" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🩹", color: "#FDBA74" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left: "Gerinnung", right: "Plättchen"}, {left: "Sauerstoff", right: "Rote"}, {left: "Abwehr", right: "Weiße"}] },
    quiz: { generate: "blood_components" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "biologie-diagram", name: "HeartSvg", bg: "#FEF2F2" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "Das Herz schlägt in Ruhe ___ mal pro Minute.", choices: ["60–80 Mal", "10–20 Mal", "200 Mal", "500 Mal"], correctIndex: 0 },
    quiz: { generate: "heart" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "biologie-diagram", name: "HeartInternalSvg", bg: "#FEF2F2" },
    interactive: { type: "physics-stacker", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", words: ["Vene", "Vorhof", "Kammer", "Arterie"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "heart" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🚪", color: "#94A3B8" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔴", count: 4 }, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "heart" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "💓", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Bei Sport wird der Puls ___.", choices: ["höher", "niedriger", "langsamer", "gar nicht"], correctIndex: 0 },
    quiz: { generate: "heart" }
  }
];

// ─── i6: BLUTKREISLAUF (CIRCULATION) ─────────────────────────────────

export const BIO_K6_I6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Der Blutkreislauf",
    
    // T1: Arterien & Venen
    t1_title: "Arterien & Venen",
    t1_text: "Arterien führen vom Herzen weg (meist sauerstoffreich). Venen führen zum Herzen hin (meist sauerstoffarm).",
    t1_h1: "Vom Herzen weg (A)", t1_h2: "Zum Herzen hin (V)",
    t1_inst: "Folge der Arterie!",
    t1_q: "Welche Gefäße führen das Blut zum Herzen zurück?",
    t1_qa: "Venen", t1_qb: "Arterien", t1_qc: "Kapillaren", t1_qd: "Nerven",

    // T2: Kapillaren
    t2_title: "Die Kapillaren",
    t2_text: "Kapillaren sind die kleinsten Blutgefäße. Hier findet der Austausch von Stoffen und Gasen mit den Zellen statt.",
    t2_h1: "Haargefäße", t2_h2: "Stoffaustausch",
    t2_inst: "Tausche Stoffe aus!",
    t2_q: "Wo findet der Gasaustausch im Gewebe statt?",
    t2_qa: "In den Kapillaren", t2_qb: "In der Aorta", t2_qc: "In den Venen", t2_qd: "Im Herzen",

    // T3: Großer & Kleiner Kreislauf
    t3_title: "Doppelter Kreislauf",
    t3_text: "Wir haben einen Lungenkreislauf (klein) und einen Körperkreislauf (groß).",
    t3_h1: "Herz-Lunge", t3_h2: "Herz-Körper",
    t3_inst: "Verbinde die Kreisläufe!",
    t3_q: "Was passiert im Lungenkreislauf?",
    t3_qa: "Blut wird mit Sauerstoff beladen", t3_qb: "Nahrung wird verteilt", t3_qc: "Blut wird gereinigt", t3_qd: "Nichts",

    // T4: Blutdruck
    t4_title: "Der Blutdruck",
    t4_text: "Blutdruck ist der Druck, den das fließende Blut auf die Gefäßwände ausübt. Er wird in zwei Werten gemessen (systolisch/diastolisch).",
    t4_h1: "Druck in den Gefäßen", t4_h2: "Messung am Arm",
    t4_inst: "Miss den Druck!",
    t4_q: "Wie nennt man den hohen Wert beim Blutdruckmessen?",
    t4_qa: "Systolischer Wert", t4_qb: "Diastolischer Wert", t4_qc: "Mittelwert", t4_qd: "Nullwert",

    // T5: Die Aorta
    t5_title: "Die Aorta",
    t5_text: "Die Aorta ist die größte Schlagader des Körpers. Sie entspringt in der linken Herzkammer.",
    t5_h1: "Hauptschlagader", t5_h2: "Linke Herzkammer",
    t5_inst: "Finde die Aorta!",

    // T6: Blutgruppen
    t6_title: "Die Blutgruppen",
    t6_text: "Es gibt verschiedene Blutgruppen (A, B, AB, 0) und den Rhesusfaktor (positiv/negativ).",
    t6_h1: "A, B, AB oder 0", t6_h2: "Wichtig bei Spenden",
    t6_inst: "Welche Gruppe ist das?",
    t6_q: "Welche Blutgruppe gilt als Universalspender?",
    t6_qa: "Blutgruppe 0", t6_qb: "Blutgruppe AB", t6_qc: "Blutgruppe A", t6_qd: "Blutgruppe B",

    // T7: Krankheiten (Infarkt)
    t7_title: "Verstopfte Gefäße",
    t7_text: "Wenn Blutgefäße verstopfen, kann es zu einem Herzinfarkt oder Schlaganfall kommen.",
    t7_h1: "Durchblutungsstörung", t7_h2: "Gesunde Ernährung",
    t7_inst: "Putz die Gefäße!",

    // T8: Blutkreislauf-Check
    t8_title: "Das System",
    t8_text: "Das Kreislaufsystem verbindet alle Organe und sorgt für die Verteilung von Wärme im Körper.",
    t8_h1: "Verteilersystem", t8_h2: "Wärmetransport",
    t8_inst: "Check den Fluss!",
  },
};

export const BIO_K6_I6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "CirculationSvg", bg: "#F8FAFC" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left: "Vom Herz", right: "Arterie"}, {left: "Zum Herz", right: "Vene"}, {left: "Austausch", right: "Kapillare"}] },
    quiz: { generate: "circulation" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🕸️", color: "#F87171" },
    interactive: { type: "highlight-text", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", tokens: ["Kapillaren", "kleinsten", "Gefäße", "Stoffaustausch"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "circulation" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🔄", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "Der kleine Kreislauf führt zur ___.", choices: ["Lunge", "Hand", "Nase", "Leber"], correctIndex: 0 },
    quiz: { generate: "circulation" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🩺", color: "#64748B" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Der Blutdruck wird am ___ gemessen.", choices: ["Arm", "Bein", "Kopf", "Rücken"], correctIndex: 0 },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "➰", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", sentence: "Die ___ ist die größte Schlagader des Körpers.", choices: ["Aorta", "Vene", "Kapillare", "Lymphe"], correctIndex: 0 },
    quiz: { generate: "circulation" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🩸", color: "#991B1B" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{id: "pos", label: "Rh+"}, {id: "neg", label: "Rh-"}], items: [{text: "A+", bucketId: "pos"}, {text: "B-", bucketId: "neg"}, {text: "0+", bucketId: "pos"}, {text: "AB-", bucketId: "neg"}] },
    quiz: { generate: "blood_types" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "⚠️", color: "#FACC15" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Infarkt", right: "Herz"}, {left: "Schlag", right: "Gehirn"}, {left: "Sport", right: "Schutz"}] },
    quiz: { generate: "circulation" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🌡️", color: "#F87171" },
    interactive: { type: "highlight-text", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", tokens: ["Wärme", "Verteilung", "Transport", "System"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "circulation" }
  }
];

// ─── i7: ATMUNG (RESPIRATION) ────────────────────────────────────────

export const BIO_K6_I7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Die Atmung",
    
    // T1: Der Weg der Luft
    t1_title: "Der Weg der Luft",
    t1_text: "Durch Nase oder Mund gelangt die Luft über den Kehlkopf und die Luftröhre in die Lunge.",
    t1_h1: "Nasenhöhle", t1_h2: "Luftröhre & Bronchien",
    t1_inst: "Folge dem Atem!",
    t1_q: "Was verhindert, dass Nahrung in die Luftröhre gelangt?",
    t1_qa: "Der Kehldeckel", t1_qb: "Die Zunge", t1_qc: "Die Zähne", t1_qd: "Der Gaumen",

    // T2: Die Lunge
    t2_title: "Aufbau der Lunge",
    t2_text: "Die Luftröhre verzweigt sich in zwei Bronchien, die sich immer feiner verästeln und in den Lungenbläschen enden.",
    t2_h1: "Bronchialbaum", t2_h2: "Lungenbläschen (Alveolen)",
    t2_inst: "Puste sie auf!",
    t2_q: "Wie nennt man die feinen Verästelungen in der Lunge?",
    t2_qa: "Bronchien", t2_qb: "Adern", t2_qc: "Nerven", t2_qd: "Muskeln",

    // T3: Gasaustausch
    t3_title: "Gasaustausch",
    t3_text: "In den Lungenbläschen tritt Sauerstoff ins Blut über, während Kohlendioxid aus dem Blut in die Lunge abgegeben wird.",
    t3_h1: "Sauerstoff rein", t3_h2: "CO2 raus",
    t3_inst: "Tausche die Gase!",
    t3_q: "Wo genau findet der Gasaustausch in der Lunge statt?",
    t3_qa: "In den Lungenbläschen", t3_qb: "In der Luftröhre", t3_qc: "Im Kehlkopf", t3_qd: "In der Nase",

    // T4: Zwerchfellatmung
    t4_title: "Ein- und Ausatmen",
    t4_text: "Beim Einatmen zieht sich das Zwerchfell zusammen und der Brustkorb hebt sich – die Lunge dehnt sich aus.",
    t4_h1: "Muskelarbeit", t4_h2: "Brust- & Bauchatmung",
    t4_inst: "Atme tief ein!",
    t4_q: "Welcher große Muskel ist hauptsächlich für die Atmung zuständig?",
    t4_qa: "Das Zwerchfell", t4_qb: "Der Bizeps", t4_qc: "Der Herzmuskel", t4_qd: "Der Bauchmuskel",

    // T5: Schutz der Atemwege
    t5_title: "Reinigung",
    t5_text: "Flimmerhärchen und Schleim in den Atemwegen fangen Staub und Erreger ab und befördern sie nach draußen.",
    t5_h1: "Flimmerhärchen", t5_h2: "Selbstreinigung",
    t5_inst: "Putz die Lunge!",
    t5_q: "Was transportiert Staub aus der Lunge nach oben?",
    t5_qa: "Flimmerhärchen", t5_qb: "Blutzellen", t5_qc: "Muskeln", t5_qd: "Nerven",

    // T6: Kehlkopf & Stimme
    t6_title: "Stimme",
    t6_text: "Im Kehlkopf liegen die Stimmbänder. Durch die ausströmende Luft werden sie in Schwingung versetzt – wir sprechen.",
    t6_h1: "Stimmbänder", t6_h2: "Schwingung",
    t6_inst: "Sing ein Lied!",

    // T7: Rauchen & Gesundheit
    t7_title: "Gefahr durch Rauchen",
    t7_text: "Rauchen schädigt die Lunge, zerstört Flimmerhärchen und kann zu schweren Krankheiten führen.",
    t7_h1: "Teer & Nikotin", t7_h2: "Lungenkrebs-Risiko",
    t7_inst: "Sag Nein!",

    // T8: Sport & Atmung
    t8_title: "Atemfrequenz",
    t8_text: "Bei körperlicher Arbeit atmen wir tiefer und öfter, um den erhöhten Sauerstoffbedarf zu decken.",
    t8_h1: "Hecheln", t8_h2: "Mehr Sauerstoff",
    t8_inst: "Lauf eine Runde!",
  },
};

export const BIO_K6_I7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "LungsSvg", bg: "#F0F9FF" },
    interactive: { type: "physics-stacker", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["Nase", "Rachen", "Kehlkopf", "Luftröhre"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "respiration" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🫁", color: "#F87171" },
    interactive: { type: "tap-count", tapCount: { emoji: "🫁", count: 2 }, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "lungs" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🔄", color: "#3B82F6" },
    interactive: { type: "highlight-text", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", tokens: ["Bläschen", "Sauerstoff", "Blut", "Kohlendioxid"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "gas_exchange" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🌬️", color: "#94A3B8" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Das ___ zieht sich zusammen.", choices: ["Zwerchfell", "Herz", "Bein", "Ohr"], correctIndex: 0 },
    quiz: { generate: "respiration" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🧹", color: "#64748B" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["Flimmerhärchen", "Schleim", "Staub", "reinigen"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "lungs" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🗣️", color: "#F472B6" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left: "Kehlkopf", right: "Stimme"}, {left: "Bänder", right: "Schwingung"}, {left: "Luft", right: "Antrieb"}] },
    quiz: { generate: "respiration" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🚭", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "Rauchen schädigt die ___.", choices: ["Lunge", "Nase", "Hand", "Frisur"], correctIndex: 0 },
    quiz: { generate: "lungs" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🏃", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Sport", right: "Schnell"}, {left: "Schlaf", right: "Langsam"}, {left: "Sauerstoff", right: "Bedarf"}] },
    quiz: { generate: "respiration" }
  }
];

// ─── i8: PUBERTÄT & FORTPFLANZUNG (PUBERTY) ──────────────────────────

export const BIO_K6_I8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Pubertät & Fortpflanzung",
    
    // T1: Die Pubertät
    t1_title: "Die Pubertät",
    t1_text: "In der Pubertät verändert sich der Körper vom Kind zum Erwachsenen. Gesteuert wird dies durch Hormone.",
    t1_h1: "Zeit der Veränderung", t1_h2: "Hormonschub",
    t1_inst: "Wann geht es los?",
    t1_q: "Was steuert die Veränderungen in der Pubertät?",
    t1_qa: "Hormone", t1_qb: "Nahrung", t1_qc: "Sport", t1_qd: "Schlaf",

    // T2: Männliche Organe
    t2_title: "Männliche Organe",
    t2_text: "Die Hoden produzieren Spermien und das Hormon Testosteron. Der Penis dient der Übertragung der Spermien.",
    t2_h1: "Spermienbildung", t2_h2: "Testosteron",
    t2_inst: "Wo reifen Spermien?",
    t2_q: "Welches Hormon ist für die männliche Entwicklung wichtig?",
    t2_qa: "Testosteron", t2_qb: "Östrogen", t2_qc: "Adrenalin", t2_qd: "Insulin",

    // T3: Weibliche Organe
    t3_title: "Weibliche Organe",
    t3_text: "In den Eierstöcken reifen Eizellen heran. Die Gebärmutter bietet Platz für die Entwicklung eines Babys.",
    t3_h1: "Eizellreifung", t3_h2: "Gebärmutter (Uterus)",
    t3_inst: "Finde die Eizelle!",
    t3_q: "Wo reifen die Eizellen bei der Frau heran?",
    t3_qa: "In den Eierstöcken", t3_qb: "In der Gebärmutter", t3_qc: "In der Scheide", t3_qd: "Im Bauch",

    // T4: Der Zyklus
    t4_title: "Der Menstruationszyklus",
    t4_text: "Etwa alle 28 Tage wird eine Eizelle freigesetzt (Eisprung). Wird sie nicht befruchtet, folgt die Menstruation.",
    t4_h1: "Monatlicher Zyklus", t4_h2: "Eisprung & Periode",
    t4_inst: "Zähle die Tage!",
    t4_q: "Wie lange dauert ein durchschnittlicher Zyklus?",
    t4_qa: "Etwa 28 Tage", t4_qb: "Genau 7 Tage", t4_qc: "365 Tage", t4_qd: "2 Tage",

    // T5: Befruchtung
    t5_title: "Die Befruchtung",
    t5_text: "Verschmelzen Eizelle und Spermium im Eileiter, entsteht eine befruchtete Eizelle (Zygote).",
    t5_h1: "Neues Leben", t5_h2: "Verschmelzung",
    t5_inst: "Weg zum Ziel!",
    t5_q: "Wo findet die Befruchtung meistens statt?",
    t5_qa: "Im Eileiter", t5_qb: "In der Gebärmutter", t5_qc: "Im Eierstock", t5_qd: "Draußen",

    // T6: Entwicklung
    t6_title: "Schwangerschaft",
    t6_text: "In der Gebärmutter wächst der Embryo über 9 Monate zum fertigen Baby heran.",
    t6_h1: "9 Monate", t6_h2: "Wachstum im Bauch",
    t6_inst: "Schau dir das Ultraschallbild an!",

    // T7: Hormone
    t7_title: "Botenstoffe",
    t7_text: "Hormone sind chemische Botenstoffe, die über das Blut verteilt werden und Reaktionen im Körper auslösen.",
    t7_h1: "Chemische Signale", t7_h2: "Drüsen",
    t7_inst: "Sende das Hormon!",

    // T8: Verantwortung
    t8_title: "Schutz & Hygiene",
    t8_text: "Körperpflege und ein verantwortungsvoller Umgang mit Sexualität sind wichtig für die Gesundheit.",
    t8_h1: "Hygiene", t8_h2: "Verantwortung",
    t8_inst: "Was ist wichtig?",
  },
};

export const BIO_K6_I8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "📈", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "Die Veränderungen in der Pubertät werden durch ___ gesteuert.", choices: ["Hormone", "Nahrung", "Sport", "Schlaf"], correctIndex: 0 },
    quiz: { generate: "hormones" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "biologie-diagram", name: "MaleReproSvg", bg: "#EFF6FF" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "Hoden produzieren ___.", choices: ["Spermien", "Eizellen", "Blut", "Speichel"], correctIndex: 0 },
    quiz: { generate: "male_repro" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "biologie-diagram", name: "FemaleReproSvg", bg: "#FDF2F8" },
    interactive: { type: "highlight-text", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", tokens: ["Eierstöcke", "Gebärmutter", "Eizellen", "heranreifen"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "female_repro" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🗓️", color: "#EC4899" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Der Menstruationszyklus dauert etwa ___ Tage.", choices: ["28 Tage", "7 Tage", "365 Tage", "90 Tage"], correctIndex: 0 },
    quiz: { generate: "female_repro" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "✨", color: "#FACC15" },
    interactive: { type: "match-pairs", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", pairs: [{left: "Spermium", right: "Eizelle"}, {left: "Verschmelzung", right: "Befruchtung"}, {left: "Eileiter", right: "Ort"}] },
    quiz: { generate: "female_repro" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "👶", color: "#F472B6" },
    interactive: { type: "highlight-text", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tokens: ["Schwangerschaft", "9 Monate", "Gebärmutter", "Wachstum"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "female_repro" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧪", color: "#8B5CF6" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Hormon", right: "Bote"}, {left: "Drüse", right: "Fabrik"}, {left: "Blut", right: "Transport"}] },
    quiz: { generate: "hormones" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🤝", color: "#10B981" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id: "wichtig", label: "Wichtig"}, {id: "egal", label: "Unwichtig"}], items: [{text: "Hygiene", bucketId: "wichtig"}, {text: "Respekt", bucketId: "wichtig"}, {text: "Ignoranz", bucketId: "egal"}, {text: "Pflege", bucketId: "wichtig"}] },
    quiz: { generate: "hormones" }
  }
];

// ─── i9: BIOLOGIE-WIEDERHOLUNG (REVIEW) ──────────────────────────────

export const BIO_K6_I9_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Biologie-Wiederholung",
    
    // T1: Gliederfüßer
    t1_title: "Gliederfüßer-Check",
    t1_text: "Insekten, Spinnen und Krebse gehören zu den Gliederfüßern. Sie haben ein Außenskelett aus Chitin.",
    t1_h1: "6 oder 8 Beine?", t1_h2: "Chitinpanzer",
    t1_inst: "Sortiere sie!",
    t1_q: "Wie viele Beine hat ein Insekt?",
    t1_qa: "6", t1_qb: "8", t1_qc: "10", t1_qd: "4",

    // T2: Weichtiere
    t2_title: "Weichtier-Review",
    t2_text: "Schnecken, Muscheln und Tintenfische sind Weichtiere. Viele haben eine schützende Kalkschale.",
    t2_h1: "Weicher Körper", t2_h2: "Fuß & Schale",
    t2_inst: "Finde das Weichtier!",
    t2_q: "Was gehört NICHT zu den Weichtieren?",
    t2_qa: "Regenwurm", t2_qb: "Schnecke", t2_qc: "Muschel", t2_qd: "Krake",

    // T3: Ökosystem Wald
    t3_title: "Wald-Check",
    t3_text: "Der Wald hat verschiedene Schichten. Produzenten (Pflanzen) stehen am Anfang der Nahrungskette.",
    t3_h1: "Baum bis Moos", t3_h2: "Nahrungskette",
    t3_inst: "Ordne die Schichten!",

    // T4: Gewässer
    t4_title: "Wasser-Review",
    t4_text: "Süßwasser und Salzwasser sind unterschiedliche Lebensräume mit angepassten Bewohnern.",
    t4_h1: "See und Meer", t4_h2: "Plankton",
    t4_inst: "Tauche ein!",

    // T5: Herz & Blut
    t5_title: "Herz & Blut Check",
    t5_text: "Rote Blutzellen transportieren Sauerstoff, weiße wehren Erreger ab, Plättchen schließen Wunden.",
    t5_h1: "Sauerstoff-Taxi", t5_h2: "Abwehrpolizei",
    t5_inst: "Was ist im Blut?",

    // T6: Atmung
    t6_title: "Atmungs-Review",
    t6_text: "In der Lunge findet der Gasaustausch statt: Sauerstoff rein, Kohlendioxid raus.",
    t6_h1: "Lungenbläschen", t6_h2: "Zwerchfell",
    t6_inst: "Atme!",

    // T7: Pubertät
    t7_title: "Hormon-Check",
    t7_text: "Hormone steuern die körperlichen Veränderungen in der Pubertät.",
    t7_h1: "Testosteron & Östrogen", t7_h2: "Veränderung",
    t7_inst: "Was steuert was?",

    // T8: Gesamt-Review
    t8_title: "Alles verstanden?",
    t8_text: "Biologie ist die Lehre vom Leben. Von den kleinsten Zellen bis zum ganzen Ökosystem.",
    t8_h1: "Wissen ist Macht", t8_h2: "Viel Erfolg!",
    t8_inst: "Großer Test!",
  },
};

export const BIO_K6_I9_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🐝", color: "#FACC15" },
    interactive: { type: "drag-to-bucket", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", buckets: [{id: "ins", label: "Insekt"}, {id: "spi", label: "Spinne"}], items: [{text: "Biene", bucketId: "ins"}, {text: "Kreuzspinne", bucketId: "spi"}, {text: "Käfer", bucketId: "ins"}, {text: "Wolfsspinne", bucketId: "spi"}] },
    quiz: { generate: "arthropods" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🐚", color: "#94A3B8" },
    interactive: { type: "highlight-text", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", tokens: ["Schnecke", "Muschel", "Tintenfisch", "Weichtiere"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "mollusks" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🌳", color: "#166534" },
    interactive: { type: "physics-stacker", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", words: ["Baumschicht", "Strauchschicht", "Krautschicht", "Moosschicht"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "food_chain" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🌊", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Ozeane enthalten ___.", choices: ["Salzwasser", "Süßwasser", "Cola", "Milch"], correctIndex: 0 },
    quiz: { generate: "saltwater" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🩸", color: "#EF4444" },
    interactive: { type: "match-pairs", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", pairs: [{left: "Rote", right: "Sauerstoff"}, {left: "Weiße", right: "Abwehr"}, {left: "Plättchen", right: "Gerinnung"}] },
    quiz: { generate: "blood_components" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🫁", color: "#F87171" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left: "Lunge", right: "Gasaustausch"}, {left: "Zwerchfell", right: "Atempumpe"}, {left: "CO2", right: "Ausatmen"}] },
    quiz: { generate: "respiration" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧪", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "Männliches Hormon: ___.", choices: ["Testosteron", "Östrogen", "Insulin", "Wasser"], correctIndex: 0 },
    quiz: { generate: "hormones" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🎓", color: "#64748B" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Zelle", right: "Leben"}, {left: "Wald", right: "System"}, {left: "Blut", right: "Fluss"}] },
    quiz: { generate: "insects" }
  }
];
