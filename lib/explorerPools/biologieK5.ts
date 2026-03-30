// lib/explorerPools/biologieK5.ts
import type { PoolTopicDef } from "./types";

// ─── i1: FISCHE & AMPHIBIEN ──────────────────────────────────────────

export const BIO_I1_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Fische & Amphibien",
    t1_title: "Die Kiemenatmung",
    t1_text: "Fische entnehmen den Sauerstoff direkt aus dem Wasser mithilfe ihrer Kiemen.",
    t1_h1: "Sauerstoff aus dem Wasser", t1_h2: "Kiemen statt Lungen",
    t1_inst: "Wo atmet der Fisch?",
    t1_q: "Womit atmen Fische?",
    t1_qa: "Mit Kiemen", t1_qb: "Mit Lungen", t1_qc: "Durch die Haut", t1_qd: "Durch Mundatmung",
    t2_title: "Schuppen & Schleim",
    t2_text: "Die Haut der Fische ist mit Schuppen bedeckt und von einer Schleimschicht überzogen, um den Widerstand im Wasser zu verringern.",
    t2_h1: "Glitschige Schicht", t2_h2: "Schutz vor Parasiten",
    t2_inst: "Was schützt den Fisch?",
    t2_q: "Wozu dient die Schleimschicht?",
    t2_qa: "Gleitfähigkeit im Wasser", t2_qb: "Schutz vor Kälte", t2_qc: "Nahrungsaufnahme", t2_qd: "Tarnung",
    t3_title: "Die Flossen",
    t3_text: "Fische nutzen verschiedene Flossen zum Steuern, Bremsen und für den Antrieb.",
    t3_h1: "Antrieb im Wasser", t3_h2: "Rücken- und Schwanzflosse",
    t3_inst: "Bewege den Fisch!",
    t3_q: "Welche Flosse dient meist als Motor?",
    t3_qa: "Schwanzflosse", t3_qb: "Brustflosse", t3_qc: "Rückenflosse", t3_qd: "Bauchflosse",
    t4_title: "Die Amphibienhaut",
    t4_text: "Amphibien haben eine dünne, feuchte Haut, durch die sie auch atmen können (Hautatmung).",
    t4_h1: "Feucht und nackt", t4_h2: "Schutz vor Austrocknung",
    t4_inst: "Hautatmung!",
    t4_q: "Warum muss die Haut von Fröschen feucht sein?",
    t4_qa: "Für die Hautatmung", t4_qb: "Zum Schwimmen", t4_qc: "Gegen Feinde", t4_qd: "Zum Kühlen",
    t5_title: "Die Metamorphose",
    t5_text: "Vom Ei über die Kaulquappe zum fertigen Frosch – diese Verwandlung nennt man Metamorphose.",
    t5_h1: "Verwandlung im Wasser", t5_h2: "Vom Fisch zum Landtier",
    t5_inst: "Ordne die Stadien!",
    t5_w1: "Ei", t5_w2: "Kaulquappe", t5_w3: "Frosch mit Schwanz", t5_w4: "Jungfrosch",
    t6_title: "Wechselwarm",
    t6_text: "Fische und Amphibien passen ihre Körpertemperatur der Umgebung an. Sie sind wechselwarm.",
    t6_h1: "Keine eigene Heizung", t6_h2: "Abhängig von der Sonne",
    t6_inst: "Temperatur-Check!",
    t6_q: "Was bedeutet wechselwarm?",
    t6_qa: "Körpertemperatur passt sich an", t6_qb: "Immer 37 Grad", t6_qc: "Immer kalt", t6_qd: "Immer heiß",
    t7_title: "Die Winterstarre",
    t7_text: "Im Winter fallen Amphibien in eine Winterstarre. Ihr Herzschlag und Stoffwechsel verlangsamen sich extrem.",
    t7_h1: "Schlaf im Schlamm", t7_h2: "Energie sparen",
    t7_inst: "Winterzeit!",
    t7_q: "Wo überwintern viele Frösche?",
    t7_qa: "Im Schlamm am Boden", t7_qb: "Im Boden", t7_qc: "In Höhlen", t7_qd: "Gar nicht",
    t8_title: "Der Laich",
    t8_text: "Die Eier von Fischen und Amphibien nennt man Laich. Sie werden meist in großen Mengen im Wasser abgelegt.",
    t8_h1: "Glibberige Eier", t8_h2: "Viele Nachkommen",
    t8_inst: "Finde den Laich!",
    t8_q: "Wo wird der Laich abgelegt?",
    t8_qa: "Im Wasser", t8_qb: "An Land", t8_qc: "Im Nest", t8_qd: "Unter der Erde",
  },
};

export const BIO_I1_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "FishAnatomySvg", bg: "#E0F2FE" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "Fische atmen mit ihren ___.", choices: ["Kiemen", "Lungen", "Nase", "Haut"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "biologie-diagram", name: "FishScalesSvg", bg: "#F1F5F9" },
    interactive: { type: "highlight-text", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", tokens: ["Schleim", "Schutz", "Widerstand"], correctIndices: [0, 1, 2] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "biologie-diagram", name: "FishAnatomySvg", bg: "#E0F2FE" },
    interactive: { type: "match-pairs", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", pairs: [{left: "Antrieb", right: "Schwanzflosse"}, {left: "Steuern", right: "Brustflosse"}, {left: "Stabilität", right: "Rückenflosse"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🐸", color: "#4CAF50" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Amphibien atmen durch Lungen und ihre ___.", choices: ["Haut", "Nase", "Ohren", "Beine"], correctIndex: 0 },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "biologie-diagram", name: "FrogLifeSvg", bg: "#ECFCCB" },
    interactive: { type: "physics-stacker", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", words: ["t5_w1", "t5_w2", "t5_w3", "t5_w4"], correctOrder: [0, 1, 2, 3] },
    quiz: { generate: "wirbeltiere_amphibian" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🌡️", color: "#3B82F6" },
    interactive: { type: "highlight-text", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tokens: ["Umgebung", "wechselwarm", "Temperatur"], correctIndices: [0, 1, 2] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "❄️", color: "#94A3B8" },
    interactive: { type: "gap-fill", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", sentence: "Im Winter halten sie eine ___.", choices: ["Winterstarre", "Winterruhe", "Winterschlaf", "Sommerpause"], correctIndex: 0 },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🫧", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Eier", right: "Laich"}, {left: "Entwicklung", right: "Wasser"}, {left: "Schutz", right: "Gallerte"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  }
];

// ─── i2: REPTILIEN & VÖGEL ────────────────────────────────────────────

export const BIO_I2_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Reptilien & Vögel",
    t1_title: "Der Schuppenpanzer",
    t1_text: "Reptilien haben eine trockene Haut mit Hornschuppen, die sie vor Austrocknung schützt.",
    t1_h1: "Trocken und fest", t1_h2: "Schutz an Land",
    t1_inst: "Reptilien-Haut!",
    t1_q: "Wie ist die Haut der Reptilien?",
    t1_qa: "Trocken und schuppig", t1_qb: "Feucht und nackt", t1_qc: "Rissig", t1_qd: "Schleimig",
    t2_title: "Vogelfedern",
    t2_text: "Federn halten Vögel warm und ermöglichen ihnen das Fliegen. Es gibt Daunen und Konturfedern.",
    t2_h1: "Leicht und stabil", t2_h2: "Wärmeisolierung",
    t2_inst: "Putz die Feder!",
    t2_q: "Welche Federn halten besonders warm?",
    t2_qa: "Daunen", t2_qb: "Schwungfedern", t2_qc: "Steuerfedern", t2_qd: "Deckfedern",
    t3_title: "Das Fliegen",
    t3_text: "Vögel haben hohle Knochen und kräftige Flugmuskeln, um in der Luft zu bleiben.",
    t3_h1: "Leichtbauweise", t3_h2: "Hohle Knochen",
    t3_inst: "Start frei!",
    t3_q: "Warum sind Vogelknochen hohl?",
    t3_qa: "Um Gewicht zu sparen", t3_qb: "Für mehr Stabilität", t3_qc: "Zum Atmen", t3_qd: "Gar nicht",
    t4_title: "Das Reptilienei",
    t4_text: "Reptilieneier haben eine lederartige Schale, die sie vor dem Austrocknen an Land bewahrt.",
    t4_h1: "Lederartige Schale", t4_h2: "Sonnenschutz",
    t4_inst: "Baue das Ei!",
    t4_q: "Wie ist die Schale eines Reptilieneies meistens?",
    t4_qa: "Lederartig und weich", t4_qb: "Hart wie Kalk", t4_qc: "Flüssig", t4_qd: "Gallerte",
    t5_title: "Schnabelformen",
    t5_text: "Vogelschnäbel sind an die Nahrung angepasst: Körnerfresser, Fleischfresser oder Insektenfresser.",
    t5_h1: "Werkzeug zum Fressen", t5_h2: "Anpassung",
    t5_inst: "Wer frisst was?",
    t5_q: "Einen krummen, scharfen Schnabel haben meist...",
    t5_qa: "Greifvögel", t5_qb: "Enten", t5_qc: "Spatzen", t5_qd: "Tauben",
    t6_title: "Beispiele Reptilien",
    t6_text: "Eidechsen, Schlangen, Schildkröten und Krokodile gehören zur Gruppe der Reptilien.",
    t6_h1: "Kriechende Tiere", t6_h2: "Panzer und Schuppen",
    t6_inst: "Finde das Reptil!",
    t7_title: "Beispiele Vögel",
    t7_text: "Amsel, Adler, Pinguin und Strauß sind Vögel, auch wenn nicht alle fliegen können.",
    t7_h1: "Vom Spatz bis zum Strauß", t7_h2: "Vielfalt",
    t7_inst: "Vogel-Check!",
    t8_title: "Gemeinsamkeiten",
    t8_text: "Sowohl Reptilien als auch Vögel legen Eier an Land und haben eine Wirbelsäule.",
    t8_h1: "Wirbeltiere", t8_h2: "Ei-Leger",
    t8_inst: "Was passt zu beiden?",
  },
};

export const BIO_I2_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "ReptileAnatomySvg", bg: "#FEF3C7" },
    interactive: { type: "gap-fill", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", sentence: "Reptilien haben eine ___ Haut mit Hornschuppen.", choices: ["trockene", "feuchte", "glatte", "schleimige"], correctIndex: 0 },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🪶", color: "#64748B" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{left: "Wärme", right: "Daunen"}, {left: "Fliegen", right: "Schwungfedern"}, {left: "Schutz", right: "Deckfedern"}] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "biologie-diagram", name: "BirdAnatomySvg", bg: "#F0F9FF" },
    interactive: { type: "highlight-text", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", tokens: ["hohle", "Knochen", "leicht", "Flugmuskeln"], correctIndices: [0, 1, 2, 3] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🥚", color: "#FDE68A" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Reptilieneier haben eine ___ Schale.", choices: ["lederartige", "harte", "gläserne", "keine"], correctIndex: 0 },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🦅", color: "#92400E" },
    interactive: { type: "drag-to-bucket", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", buckets: [{id: "koerner", label: "Körner"}, {id: "fleisch", label: "Fleisch"}], items: [{text: "Spatz", bucketId: "koerner"}, {text: "Adler", bucketId: "fleisch"}, {text: "Falke", bucketId: "fleisch"}, {text: "Taube", bucketId: "koerner"}] },
    quiz: { generate: "wirbeltiere_bird" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "biologie-diagram", name: "ReptileVsBirdSvg", bg: "#FEF3C7" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left: "Schlange", right: "keine Beine"}, {left: "Schildkröte", right: "Panzer"}, {left: "Krokodil", right: "Wasser"}] },
    quiz: { generate: "wirbeltiere_reptile" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🐧", color: "#334155" },
    interactive: { type: "highlight-text", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", tokens: ["Pinguin", "fliegt", "nicht", "schwimmt"], correctIndices: [0, 2, 3] },
    quiz: { generate: "wirbeltiere_bird" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🧬", color: "#EF4444" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Ei", right: "Vermehrung"}, {left: "Skelett", right: "Wirbelsäule"}, {left: "Atem", right: "Lunge"}] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" }
  }
];

// ─── i3: SÄUGETIERE ──────────────────────────────────────────────────

export const BIO_I3_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Säugetiere",
    t1_title: "Das Säugen",
    t1_text: "Säugetiere bringen lebende Junge zur Welt und ernähren sie mit Muttermilch. Daher kommt auch ihr Name.",
    t1_h1: "Muttermilch", t1_h2: "Lebendgebärend",
    t1_inst: "Was ist typisch?",
    t1_q: "Was ist ein Hauptmerkmal der Säugetiere?",
    t1_qa: "Säugen der Jungen mit Milch", t1_qb: "Legen von Eiern", t1_qc: "Haben Schuppen", t1_qd: "Atmen mit Kiemen",
    t2_title: "Das Fell",
    t2_text: "Fast alle Säugetiere haben ein Fell aus Haaren, das sie vor Kälte und Verletzungen schützt.",
    t2_h1: "Haarkleid", t2_h2: "Wärmeschutz",
    t2_inst: "Streichle das Fell!",
    t2_q: "Woraus besteht das Fell der Säugetiere?",
    t2_qa: "Aus Haaren", t2_qb: "Aus Federn", t2_qc: "Aus Schuppen", t2_qd: "Aus Horn",
    t3_title: "Gleichwarm",
    t3_text: "Säugetiere halten ihre Körpertemperatur immer konstant (ca. 37°C), egal wie kalt es draußen ist.",
    t3_h1: "Konstante Temperatur", t3_h2: "Eigene Körperheizung",
    t3_inst: "Check die Temperatur!",
    t3_q: "Was bedeutet gleichwarm?",
    t3_qa: "Körpertemperatur bleibt gleich", t3_qb: "Temperatur ändert sich", t3_qc: "Immer kalt", t3_qd: "Immer heiß",
    t4_title: "Das Gebiss",
    t4_text: "Säugetiere haben ein differenziertes Gebiss mit Schneide-, Eck- und Backenzähnen, angepasst an ihre Nahrung.",
    t4_h1: "Zähne zum Kauen", t4_h2: "Anpassung an Nahrung",
    t4_inst: "Wer hat welche Zähne?",
    t4_q: "Fleischfresser haben meist ausgeprägte...",
    t4_qa: "Eckzähne (Fangzähne)", t4_qb: "Backenzähne", t4_qc: "Schneidezähne", t4_qd: "Gar keine Zähne",
    t5_title: "Die Atmung",
    t5_text: "Alle Säugetiere, auch die im Wasser lebenden wie Wale, atmen mit Lungen.",
    t5_h1: "Lungenatmung", t5_h2: "Luft holen",
    t5_inst: "Atme tief ein!",
    t5_q: "Womit atmet ein Wal?",
    t5_qa: "Mit Lungen", t5_qb: "Mit Kiemen", t5_qc: "Durch die Haut", t5_qd: "Atmet gar nicht",
    t6_title: "Lebensräume",
    t6_text: "Säugetiere haben fast alle Lebensräume erobert: Land, Wasser (Wale) und sogar die Luft (Fledermäuse).",
    t6_h1: "Überall auf der Welt", t6_h2: "Vielfalt",
    t6_inst: "Wo leben sie?",
    t7_title: "Beispiele Säugetiere",
    t7_text: "Hund, Katze, Elefant, Wal und Fledermaus sind allesamt Säugetiere.",
    t7_h1: "Vielfalt der Arten", t7_h2: "Bekannte Tiere",
    t7_inst: "Finde das Säugetier!",
    t8_title: "Brutpflege",
    t8_text: "Säugetiere betreiben meist eine intensive Brutpflege und kümmern sich lange um ihren Nachwuchs.",
    t8_h1: "Fürsorge", t8_h2: "Lange Kindheit",
    t8_inst: "Hilf dem Baby!",
  },
};

export const BIO_I3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "MammalAnatomySvg", bg: "#FEF2F2" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔴", count: 1 }, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "wirbeltiere_mammal" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🐕", color: "#92400E" },
    interactive: { type: "highlight-text", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", tokens: ["Fell", "Haaren", "Kälte", "Schutz"], correctIndices: [0, 1, 2, 3] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🌡️", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "Säugetiere sind ___.", choices: ["gleichwarm", "wechselwarm", "kaltblütig", "immer heiß"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🦷", color: "#94A3B8" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left: "Reißen", right: "Eckzähne"}, {left: "Mahlen", right: "Backenzähne"}, {left: "Nagen", right: "Schneidezähne"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🫁", color: "#F87171" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["Lungen", "Luft", "Wale", "Säugetiere"], correctIndices: [0, 1, 2, 3] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "biologie-diagram", name: "MammalGroupsSvg", bg: "#FEF2F2" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{id: "land", label: "Land"}, {id: "wasser", label: "Wasser"}, {id: "luft", label: "Luft"}], items: [{text: "Elefant", bucketId: "land"}, {text: "Wal", bucketId: "wasser"}, {text: "Fledermaus", bucketId: "luft"}, {text: "Hund", bucketId: "land"}] },
    quiz: { generate: "wirbeltiere_mammal" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🐘", color: "#475569" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Elefant", right: "Rüssel"}, {left: "Katze", right: "Schnurren"}, {left: "Wal", right: "Blasloch"}] },
    quiz: { generate: "wirbeltiere_mammal" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🤱", color: "#F472B6" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Sie pflegen ihre ___.", choices: ["Jungen", "Feinde", "Steine", "Pflanzen"], correctIndex: 0 },
    quiz: { generate: "wirbeltiere_mammal" }
  }
];

// ─── i4: PFLANZENORGANE ───────────────────────────────────────────────

export const BIO_I4_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Pflanzenorgane",
    t1_title: "Die Wurzel",
    t1_text: "Die Wurzel verankert die Pflanze im Boden und nimmt Wasser sowie gelöste Nährsalze auf.",
    t1_h1: "Halt im Boden", t1_h2: "Wasseraufnahme",
    t1_inst: "Grabe die Wurzel aus!",
    t1_q: "Was ist eine Aufgabe der Wurzel?",
    t1_qa: "Wasseraufnahme", t1_qb: "Fotosynthese", t1_qc: "Samenbildung", t1_qd: "Anlocken von Insekten",
    t2_title: "Der Stängel",
    t2_text: "Der Stängel (oder Stamm) stützt die Pflanze und leitet das Wasser von der Wurzel zu den Blättern.",
    t2_h1: "Die Wasserleitung", t2_h2: "Stabilität",
    t2_inst: "Bau den Stängel!",
    t2_q: "Was leitet der Stängel nach oben?",
    t2_qa: "Wasser und Nährstoffe", t2_qb: "Zucker", t2_qc: "Blütenstaub", t2_qd: "Erde",
    t3_title: "Das Blatt",
    t3_text: "In den grünen Blättern findet die Fotosynthese statt. Hier produziert die Pflanze ihre eigene Nahrung.",
    t3_h1: "Die Fabrik der Pflanze", t3_h2: "Grüne Farbe (Chlorophyll)",
    t3_inst: "Blatt-Check!",
    t3_q: "Wo findet die Fotosynthese statt?",
    t3_qa: "Im Blatt", t3_qb: "In der Wurzel", t3_qc: "Im Stängel", t3_qd: "Im Samen",
    t4_title: "Fotosynthese",
    t4_text: "Mithilfe von Sonnenlicht, Wasser und CO2 stellt die Pflanze Zucker (Energie) und Sauerstoff her.",
    t4_h1: "Sonnenenergie nutzen", t4_h2: "Sauerstoff-Produktion",
    t4_inst: "Was braucht das Blatt?",
    t4_q: "Welches Gas produziert die Pflanze bei der Fotosynthese?",
    t4_qa: "Sauerstoff", t4_qb: "Stickstoff", t4_qc: "Kohlendioxid", t4_qd: "Helium",
    t5_title: "Die Spaltöffnungen",
    t5_text: "An der Unterseite der Blätter befinden sich winzige Öffnungen für den Gasaustausch und die Verdunstung.",
    t5_h1: "Atmen der Pflanze", t5_h2: "Regulierung des Wassers",
    t5_inst: "Öffne die Poren!",
    t5_q: "Wo liegen die meisten Spaltöffnungen?",
    t5_qa: "Blattunterseite", t5_qb: "Blattoberseite", t5_qc: "Wurzelspitze", t5_qd: "Blüte",
    t6_title: "Leitbündel",
    t6_text: "Im Inneren der Pflanze verlaufen feine Röhren, die wie ein Kreislaufsystem Wasser und Zucker transportieren.",
    t6_h1: "Transportwege", t6_h2: "Adern der Pflanze",
    t6_inst: "Folge dem Wasser!",
    t7_title: "Kräuter & Bäume",
    t7_text: "Krautige Pflanzen haben weiche Stängel, während Bäume einen harten, verholzten Stamm bilden.",
    t7_h1: "Holz oder Saft", t7_h2: "Wachstumsformen",
    t7_inst: "Baum oder Kraut?",
    t8_title: "Anpassungen",
    t8_text: "Pflanzen passen ihre Organe an: Kakteen speichern Wasser im Stamm, Seerosen haben Blätter zum Schwimmen.",
    t8_h1: "Überleben überall", t8_h2: "Spezialformen",
    t8_inst: "Wo gehört es hin?",
  },
};

export const BIO_I4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "PlantAnatomySvg", bg: "#ECFDF5" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔴", count: 1 }, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "pflanzen_plant_parts" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🪵", color: "#78350F" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "Der ___ gibt der Pflanze Halt.", choices: ["Stängel", "Samen", "Duft", "Schatten"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🍃", color: "#10B981" },
    interactive: { type: "highlight-text", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", tokens: ["Blatt", "Fotosynthese", "Energie", "grün"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "pflanzen_plant_parts" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "biologie-diagram", name: "PhotosynthesisSvg", bg: "#F0FDF4" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left: "Licht", right: "Energie"}, {left: "Wasser", right: "Wurzel"}, {left: "CO2", right: "Luft"}] },
    quiz: { generate: "pflanzen_photosynthesis" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🔬", color: "#64748B" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔴", count: 2 }, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "💧", color: "#3B82F6" },
    interactive: { type: "highlight-text", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tokens: ["Wasser", "Leitbündel", "Zucker", "Transport"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "pflanzen_plant_parts" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🌳", color: "#166534" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id: "holz", label: "Holzig"}, {id: "kraut", label: "Krautig"}], items: [{text: "Eiche", bucketId: "holz"}, {text: "Gras", bucketId: "kraut"}, {text: "Löwenzahn", bucketId: "kraut"}, {text: "Apfelbaum", bucketId: "holz"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🌵", color: "#15803D" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Kaktus", right: "Wasserspeicher"}, {left: "Seerose", right: "Schwimmblatt"}, {left: "Erbsen", right: "Ranken"}] },
    quiz: { generate: "pflanzen_plant_parts" }
  }
];

// ─── i5: BLÜTE & FORTPFLANZUNG ────────────────────────────────────────

export const BIO_I5_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Blüte & Fortpflanzung",
    t1_title: "Der Blütenbau",
    t1_text: "Eine typische Blüte besteht aus Kelchblättern, Kronblättern, Staubblättern und dem Stempel.",
    t1_h1: "Schutz und Anlockung", t1_h2: "Fortpflanzungsorgane",
    t1_inst: "Bau die Blüte!",
    t1_q: "Welche Blütenteile sind oft bunt, um Insekten anzulocken?",
    t1_qa: "Kronblätter", t1_qb: "Kelchblätter", t1_qc: "Staubblätter", t1_qd: "Wurzeln",
    t2_title: "Staubblätter & Pollen",
    t2_text: "Die Staubblätter sind die männlichen Organe. Sie produzieren den gelben Blütenstaub (Pollen).",
    t2_h1: "Männlicher Teil", t2_h2: "Blütenstaub",
    t2_inst: "Sammle den Pollen!",
    t2_q: "Wo wird der Pollen gebildet?",
    t2_qa: "In den Staubbeuteln", t2_qb: "Auf der Narbe", t2_qc: "Im Fruchtknoten", t2_qd: "Am Stängel",
    t3_title: "Der Stempel",
    t3_text: "Der Stempel ist das weibliche Organ. Er besteht aus Narbe, Griffel und dem Fruchtknoten mit den Eizellen.",
    t3_h1: "Weiblicher Teil", t3_h2: "Ort der Befruchtung",
    t3_inst: "Finde die Eizelle!",
    t3_q: "Wie heißt der oberste, klebrige Teil des Stempels?",
    t3_qa: "Narbe", t3_qb: "Griffel", t3_qc: "Kelch", t3_qd: "Krone",
    t4_title: "Die Bestäubung",
    t4_text: "Wenn Pollen auf die Narbe gelangt, nennt man das Bestäubung. Das geschieht durch Wind oder Insekten.",
    t4_h1: "Transport des Pollens", t4_h2: "Wind oder Biene",
    t4_inst: "Hilf der Biene!",
    t4_q: "Was passiert bei der Bestäubung?",
    t4_qa: "Pollen gelangt auf die Narbe", t4_qb: "Ein Samen wächst", t4_qc: "Die Blume welkt", t4_qd: "Wasser verdunstet",
    t5_title: "Die Befruchtung",
    t5_text: "Nach der Bestäubung wächst ein Pollenschlauch zur Eizelle. Wenn sie verschmelzen, findet die Befruchtung statt.",
    t5_h1: "Verschmelzung", t5_h2: "Samenbildung beginnt",
    t5_inst: "Weg zur Eizelle!",
    t5_q: "Was entsteht nach der Befruchtung aus der Eizelle?",
    t5_qa: "Ein Samen", t5_qb: "Eine neue Blüte", t5_qc: "Ein Blatt", t5_qd: "Wurzeln",
    t6_title: "Frucht & Samen",
    t6_text: "Aus dem Fruchtknoten wird die Frucht, die den Samen schützt und bei der Verbreitung hilft.",
    t6_h1: "Schutz für den Nachwuchs", t6_h2: "Leckere Früchte",
    t6_inst: "Apfel oder Samen?",
    t7_title: "Samenverbreitung",
    t7_text: "Samen werden durch Wind (Löwenzahn), Tiere (Kletten) oder Wasser verbreitet, um neue Orte zu besiedeln.",
    t7_h1: "Reise der Pflanzen", t7_h2: "Flieger und Kletterer",
    t7_inst: "Wie reisen sie?",
    t8_title: "Die Keimung",
    t8_text: "Wenn ein Samen Wasser, Wärme und Sauerstoff bekommt, beginnt er zu wachsen – er keimt.",
    t8_h1: "Neues Leben erwacht", t8_h2: "Wurzel zuerst",
    t8_inst: "Lass es wachsen!",
  },
};

export const BIO_I5_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "FlowerPartsSvg", bg: "#FFF1F2" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔴", count: 4 }, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "pflanzen_flower_structure" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "✨", color: "#FACC15" },
    interactive: { type: "highlight-text", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", tokens: ["Pollen", "Staubblätter", "männlich", "Blütenstaub"], correctIndices: [0, 1, 2, 3] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🌸", color: "#F472B6" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "Der ___ ist das weibliche Organ.", choices: ["Stempel", "Kelch", "Pollen", "Stamm"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "biologie-diagram", name: "PollinationSvg", bg: "#FEFCE8" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left: "Wind", right: "Gräser"}, {left: "Biene", right: "Obstbäume"}, {left: "Pollen", right: "Narbe"}] },
    quiz: { generate: "pflanzen_flower_structure" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🧬", color: "#EF4444" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["Pollenschlauch", "Eizelle", "Befruchtung", "verschmelzen"], correctIndices: [0, 1, 2, 3] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🍎", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", sentence: "Aus dem Fruchtknoten wird die ___.", choices: ["Frucht", "Wurzel", "Blüte", "Erde"], correctIndex: 0 },
    quiz: { generate: "pflanzen_plant_reproduction" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🌬️", color: "#94A3B8" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id: "wind", label: "Wind"}, {id: "tier", label: "Tiere"}], items: [{text: "Löwenzahn", bucketId: "wind"}, {text: "Klette", bucketId: "tier"}, {text: "Ahorn", bucketId: "wind"}, {text: "Kirsche", bucketId: "tier"}] },
    quiz: { generate: "pflanzen_plant_reproduction" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🌱", color: "#22C55E" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Keimung", right: "Wachstum"}, {left: "Wasser", right: "Bedingung"}, {left: "Samen", right: "Ruheform"}] },
    quiz: { generate: "pflanzen_plant_reproduction" }
  }
];

// ─── i6: SKELETT & MUSKELN ───────────────────────────────────────────

export const BIO_I6_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Skelett & Muskeln",
    t1_title: "Das Skelett",
    t1_text: "Das Skelett stützt unseren Körper, schützt die Organe und ermöglicht zusammen mit den Muskeln die Bewegung.",
    t1_h1: "Stützgerüst", t1_h2: "Schutzfunktion",
    t1_inst: "Bau das Skelett!",
    t1_q: "Wie viele Knochen hat ein erwachsener Mensch etwa?",
    t1_qa: "Etwa 206", t1_qb: "Genau 100", t1_qc: "Über 500", t1_qd: "Nur 50",
    t2_title: "Die Wirbelsäule",
    t2_text: "Die Wirbelsäule ist die zentrale Achse unseres Körpers. Sie ist doppelt-S-förmig gebogen, um Stöße abzufangen.",
    t2_h1: "Zentrale Achse", t2_h2: "Stoßdämpfer",
    t2_inst: "Check die Haltung!",
    t2_q: "Welche Form hat die menschliche Wirbelsäule?",
    t2_qa: "Doppelt-S-Form", t2_qb: "Schnurgerade", t2_qc: "Kreisrund", t2_qd: "Z-Form",
    t3_title: "Die Gelenke",
    t3_text: "Gelenke sind die beweglichen Verbindungen zwischen den Knochen. Es gibt Kugel-, Scharnier- und Sattelgelenke.",
    t3_h1: "Bewegliche Verbindung", t3_h2: "Gelenktypen",
    t3_inst: "Bewege das Gelenk!",
    t3_q: "Welches Gelenk erlaubt Bewegungen in fast alle Richtungen?",
    t3_qa: "Kugelgelenk", t3_qb: "Scharniergelenk", t3_qc: "Sattelgelenk", t3_qd: "Drehgelenk",
    t4_title: "Muskelarbeit",
    t4_text: "Muskeln können sich nur zusammenziehen. Deshalb arbeiten sie meist paarweise als Gegenspieler (z.B. Bizeps und Trizeps).",
    t4_h1: "Zusammenziehen", t4_h2: "Gegenspieler-Prinzip",
    t4_inst: "Spann den Muskel an!",
    t4_q: "Wie arbeiten Beuger und Strecker zusammen?",
    t4_qa: "Als Gegenspieler", t4_qb: "Gleichzeitig", t4_qc: "Gar nicht", t4_qd: "Zufällig",
    t5_title: "Knochenaufbau",
    t5_text: "Knochen sind außen hart und innen oft hohl oder mit Knochenmark gefüllt, in dem Blutzellen gebildet werden.",
    t5_h1: "Leicht und stabil", t5_h2: "Knochenmark",
    t5_inst: "Schau hinein!",
    t5_q: "Wo werden neue Blutzellen gebildet?",
    t5_qa: "Im Knochenmark", t5_qb: "In der Knochenhaut", t5_qc: "Im Gelenk", t5_qd: "Im Muskel",
    t6_title: "Schutzfunktion",
    t6_text: "Bestimmte Knochen schützen empfindliche Organe: Der Schädel das Gehirn, der Brustkorb Herz und Lunge.",
    t6_h1: "Harte Schale", t6_h2: "Sicherheit",
    t6_inst: "Was schützt was?",
    t7_title: "Sehnen & Bänder",
    t7_text: "Sehnen verbinden Muskeln mit Knochen. Bänder verbinden Knochen mit Knochen und stabilisieren Gelenke.",
    t7_h1: "Verbindungsstücke", t7_h2: "Kraftübertragung",
    t7_inst: "Halte es fest!",
    t8_title: "Gesunde Haltung",
    t8_text: "Regelmäßige Bewegung und eine aufrechte Haltung stärken Knochen und Muskeln und verhindern Schmerzen.",
    t8_h1: "Rücken gerade", t8_h2: "Sport ist gesund",
    t8_inst: "Sitz gerade!",
  },
};

export const BIO_I6_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "SkeletonSvg", bg: "#F8FAFC" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔴", count: 1 }, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "koerper_skeleton" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🦴", color: "#94A3B8" },
    interactive: { type: "highlight-text", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", tokens: ["Wirbelsäule", "zentrale", "Achse", "S-förmig"], correctIndices: [0, 1, 2, 3] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "💪", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", pairs: [{left: "Schulter", right: "Kugelgelenk"}, {left: "Ellbogen", right: "Scharniergelenk"}, {left: "Daumen", right: "Sattelgelenk"}] },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "biologie-diagram", name: "MusclesSvg", bg: "#FEF2F2" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Muskeln arbeiten als ___.", choices: ["Gegenspieler", "Feinde", "Partner", "Einzelgänger"], correctIndex: 0 },
    quiz: { generate: "koerper_muscles" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🩸", color: "#EF4444" },
    interactive: { type: "highlight-text", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", tokens: ["Blutzellen", "Knochenmark", "hart", "innen"], correctIndices: [0, 1] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", pairs: [{left: "Schädel", right: "Gehirn"}, {left: "Brustkorb", right: "Lunge"}, {left: "Becken", right: "Organe"}] },
    quiz: { generate: "koerper_skeleton" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🔗", color: "#94A3B8" },
    interactive: { type: "drag-to-bucket", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", buckets: [{id: "sehne", label: "Sehne"}, {id: "band", label: "Band"}], items: [{text: "Muskel-Knochen", bucketId: "sehne"}, {text: "Knochen-Knochen", bucketId: "band"}] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb"], answer: "t7_qa" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🏃", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{left: "Bewegung", right: "Gesundheit"}, {left: "Haltung", right: "Rücken"}, {left: "Sport", right: "Stärkung"}] },
    quiz: { generate: "koerper_muscles" }
  }
];

// ─── i7: KÖRPERSYSTEME ───────────────────────────────────────────────

export const BIO_I7_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Körpersysteme",
    t1_title: "Der Blutkreislauf",
    t1_text: "Das Herz pumpt Blut durch den ganzen Körper, um Zellen mit Sauerstoff und Nährstoffen zu versorgen.",
    t1_h1: "Pumpe des Lebens", t1_h2: "Transport von Stoffen",
    t1_inst: "Hör den Herzschlag!",
    t1_q: "Was ist die Hauptaufgabe des Herzens?",
    t1_qa: "Blut pumpen", t1_qb: "Luft holen", t1_qc: "Nahrung verdauen", t1_qd: "Denken",
    t2_title: "Die Atmung",
    t2_text: "In der Lunge gelangt Sauerstoff ins Blut und Kohlendioxid wird aus dem Blut entfernt.",
    t2_h1: "Gasaustausch", t2_h2: "Ein- und Ausatmen",
    t2_inst: "Fülle die Lunge!",
    t2_q: "Welches Gas atmen wir hauptsächlich aus?",
    t2_qa: "Kohlendioxid (CO2)", t2_qb: "Sauerstoff", t2_qc: "Stickstoff", t2_qd: "Helium",
    t3_title: "Die Verdauung",
    t3_text: "Nahrung wird im Magen und Darm zerkleinert, damit die Nährstoffe ins Blut aufgenommen werden können.",
    t3_h1: "Energie gewinnen", t3_h2: "Vom Mund zum After",
    t3_inst: "Verdaue den Apfel!",
    t3_q: "Wo beginnt die Verdauung beim Menschen?",
    t3_qa: "Im Mund", t3_qb: "Im Magen", t3_qc: "Im Darm", t3_qd: "In der Leber",
    t4_title: "Das Nervensystem",
    t4_text: "Nerven leiten Signale vom Gehirn zu den Muskeln und Informationen von den Sinnen zum Gehirn.",
    t4_h1: "Informationsleitung", t4_h2: "Gehirn & Rückenmark",
    t4_inst: "Sende Signale!",
    t4_q: "Was ist die Schaltzentrale des Körpers?",
    t4_qa: "Das Gehirn", t4_qb: "Das Herz", t4_qc: "Die Lunge", t4_qd: "Der Magen",
    t5_title: "Die Ausscheidung",
    t5_text: "Die Nieren reinigen das Blut von Abfallstoffen und regulieren den Wasserhaushalt des Körpers.",
    t5_h1: "Kläranlage des Körpers", t5_h2: "Harnbildung",
    t5_inst: "Reinige das Blut!",
    t5_q: "Welches Organ filtert das Blut?",
    t5_qa: "Die Niere", t5_qb: "Die Milz", t5_qc: "Die Galle", t5_qd: "Das Herz",
    t6_title: "Das Immunsystem",
    t6_text: "Das Immunsystem schützt uns vor Krankheitserreger wie Bakterien und Viren.",
    t6_h1: "Körperabwehr", t6_h2: "Weiße Blutzellen",
    t6_inst: "Abwehr bereit!",
    t7_title: "Zusammenspiel",
    t7_text: "Alle Systeme arbeiten eng zusammen: Die Lunge liefert Sauerstoff, den das Herz überall hinpumpt.",
    t7_h1: "Ein Team", t7_h2: "Netzwerk",
    t7_inst: "Verbinde die Systeme!",
    t8_title: "Hormone",
    t8_text: "Hormone sind Botenstoffe, die langfristige Vorgänge wie Wachstum oder Blutzuckerspiegel steuern.",
    t8_h1: "Langsame Signale", t8_h2: "Drüsen",
    t8_inst: "Boten senden!",
  },
};

export const BIO_I7_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "HeartSvg", bg: "#FEF2F2" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔴", count: 1 }, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "koerper_body_systems" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "biologie-diagram", name: "LungsSvg", bg: "#F0F9FF" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "In der Lunge tauschen wir ___.", choices: ["Gase", "Wasser", "Blut", "Nahrung"], correctIndex: 0 },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "biologie-diagram", name: "DigestiveSvg", bg: "#FEF3C7" },
    interactive: { type: "highlight-text", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", tokens: ["Mund", "Magen", "Darm", "Nährstoffe"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "koerper_body_systems" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🧠", color: "#F472B6" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left: "Gehirn", right: "Denken"}, {left: "Nerven", right: "Leitung"}, {left: "Rückenmark", right: "Reflexe"}] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🥤", color: "#FACC15" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔴", count: 2 }, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🛡️", color: "#10B981" },
    interactive: { type: "highlight-text", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tokens: ["Abwehr", "Bakterien", "Viren", "Krankheit"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "koerper_body_systems" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🧩", color: "#8B5CF6" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Herz", right: "Lunge"}, {left: "Magen", right: "Blut"}, {left: "Nerven", right: "Muskel"}] },
    quiz: { generate: "koerper_body_systems" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🧪", color: "#EC4899" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Hormone steuern das ___.", choices: ["Wachstum", "Wetter", "Fahrrad", "Licht"], correctIndex: 0 },
    quiz: { generate: "koerper_body_systems" }
  }
];

// ─── i8: SINNESORGANE ────────────────────────────────────────────────

export const BIO_I8_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Sinnesorgane",
    t1_title: "Das Auge",
    t1_text: "Das Auge ist unser Sehorgan. Die Linse bündelt das Licht und auf der Netzhaut entsteht ein Bild.",
    t1_h1: "Fenster zur Welt", t1_h2: "Lichtempfindlich",
    t1_inst: "Schau genau hin!",
    t1_q: "Welcher Teil des Auges ist für die Farbe verantwortlich?",
    t1_qa: "Die Iris", t1_qb: "Die Linse", t1_qc: "Die Netzhaut", t1_qd: "Die Hornhaut",
    t2_title: "Das Ohr",
    t2_text: "Das Ohr ermöglicht uns das Hören und beherbergt zudem unser Gleichgewichtsorgan.",
    t2_h1: "Schallwellen fangen", t2_h2: "Gleichgewicht halten",
    t2_inst: "Hörst du das?",
    t2_q: "Wo liegen die Hörzellen beim Menschen?",
    t2_qa: "In der Schnecke (Innenohr)", t2_qb: "In der Ohrmuschel", t2_qc: "Auf dem Trommelfell", t2_qd: "Im Gehirn",
    t3_title: "Die Nase",
    t3_text: "Mit der Nase nehmen wir Gerüche wahr. Sie filtert, wärmt und befeuchtet zudem die Atemluft.",
    t3_h1: "Riechen & Atmen", t3_h2: "Schutz der Lunge",
    t3_inst: "Was riecht hier?",
    t3_q: "Wie viele verschiedene Düfte kann der Mensch etwa unterscheiden?",
    t3_qa: "Mehrere Tausend", t3_qb: "Nur 10", t3_qc: "Genau 100", t3_qd: "Gar keine",
    t4_title: "Die Zunge",
    t4_text: "Die Zunge erkennt die Geschmacksrichtungen süß, sauer, salzig, bitter und umami.",
    t4_h1: "Geschmackstest", t4_h2: "Muskelorgan",
    t4_inst: "Süß oder salzig?",
    t4_q: "Wie viele Grundgeschmacksrichtungen gibt es?",
    t4_qa: "5", t4_qb: "4", t4_qc: "3", t4_qd: "10",
    t5_title: "Der Tastsinn",
    t5_text: "Die Haut ist unser größtes Sinnesorgan. Sie reagiert auf Berührung, Druck, Temperatur und Schmerz.",
    t5_h1: "Spüren & Fühlen", t5_h2: "Schutzhülle",
    t5_inst: "Fühl mal!",
    t5_q: "Was ist das größte Sinnesorgan des Menschen?",
    t5_qa: "Die Haut", t5_qb: "Das Auge", t5_qc: "Die Zunge", t5_qd: "Das Ohr",
    t6_title: "Sinnesschutz",
    t6_text: "Unsere Sinne sind empfindlich. Lärm schadet dem Gehör, helles Licht den Augen.",
    t6_h1: "Vorsicht!", t6_h2: "Pflege der Organe",
    t6_inst: "Schütze dich!",
    t7_title: "Signalweg",
    t7_text: "Reize aus der Umwelt werden von den Sinnesorganen aufgenommen und über Nerven zum Gehirn geleitet.",
    t7_h1: "Informationsfluss", t7_h2: "Verarbeitung",
    t7_inst: "Sende den Reiz!",
    t8_title: "Wahrnehmung",
    t8_text: "Erst das Gehirn macht aus den Signalen der Augen ein Bild oder aus den Wellen im Ohr ein Geräusch.",
    t8_h1: "Interpretation", t8_h2: "Das Gehirn lernt",
    t8_inst: "Was siehst du?",
  },
};

export const BIO_I8_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "biologie-diagram", name: "EyeSvg", bg: "#F0F9FF" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔴", count: 1 }, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "sinnesorgane_eye" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "biologie-diagram", name: "EarSvg", bg: "#F8FAFC" },
    interactive: { type: "gap-fill", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", sentence: "Im Ohr sitzt auch der ___.", choices: ["Gleichgewichtssinn", "Geruchssinn", "Sehsinn", "Geschmack"], correctIndex: 0 },
    quiz: { generate: "sinnesorgane_ear" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "👃", color: "#94A3B8" },
    interactive: { type: "highlight-text", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", tokens: ["Nase", "Gerüche", "filtriert", "wärmt"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "sinnesorgane_nose" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "👅", color: "#F87171" },
    interactive: { type: "match-pairs", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", pairs: [{left: "Zucker", right: "süß"}, {left: "Zitrone", right: "sauer"}, {left: "Salz", right: "salzig"}] },
    quiz: { generate: "sinnesorgane_tongue" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "✋", color: "#FDBA74" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔴", count: 2 }, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "sinnesorgane_skin_sense" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "🎧", color: "#3B82F6" },
    interactive: { type: "highlight-text", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tokens: ["Lärm", "schadet", "Gehör", "Schutz"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "sinnesorgane_ear" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "⚡", color: "#FACC15" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Reiz", right: "Umwelt"}, {left: "Nerv", right: "Leitung"}, {left: "Gehirn", right: "Zentrale"}] },
    quiz: { generate: "sinnesorgane_ear" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "💭", color: "#A78BFA" },
    interactive: { type: "gap-fill", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", sentence: "Das ___ deutet die Signale.", choices: ["Gehirn", "Herz", "Bein", "Auge"], correctIndex: 0 },
    quiz: { generate: "sinnesorgane_eye" }
  }
];

// ─── i9: ERNÄHRUNG ───────────────────────────────────────────────────

export const BIO_I9_LABELS: Record<string, Record<string, string>> = {
  de: {
    explorer_title: "Ernährung",
    t1_title: "Die Nährstoffe",
    t1_text: "Unser Körper braucht Kohlenhydrate, Fette, Eiweiße, Vitamine und Mineralstoffe, um gesund zu bleiben.",
    t1_h1: "Baustoffe & Brennstoffe", t1_h2: "Vielfalt auf dem Teller",
    t1_inst: "Was ist drin?",
    t1_q: "Welcher Nährstoff liefert dem Körper am schnellsten Energie?",
    t1_qa: "Kohlenhydrate", t1_qb: "Eiweiße", t1_qc: "Vitamine", t1_qd: "Wasser",
    t2_title: "Die Pyramide",
    t2_text: "Die Ernährungspyramide zeigt, wie viel wir von welchen Lebensmitteln essen sollten: Viel Wasser und Gemüse, wenig Süßes.",
    t2_h1: "Gesunde Mischung", t2_h2: "Basis & Spitze",
    t2_inst: "Bau die Pyramide!",
    t2_q: "Was bildet die Basis einer gesunden Ernährung?",
    t2_qa: "Getränke (Wasser) & Gemüse", t2_qb: "Süßigkeiten", t2_qc: "Fleisch", t2_qd: "Öle",
    t3_title: "Der Weg der Nahrung",
    t3_text: "Vom Mund über die Speiseröhre in den Magen, dann in den Dünndarm und Dickdarm – das ist die Verdauungsreise.",
    t3_h1: "Lange Reise", t3_h2: "Zerkleinerung",
    t3_inst: "Folge dem Bissen!",
    t3_q: "Wo werden die meisten Nährstoffe ins Blut aufgenommen?",
    t3_qa: "Im Dünndarm", t3_qb: "Im Magen", t3_qc: "In der Speiseröhre", t3_qd: "Im Dickdarm",
    t4_title: "Vitamine",
    t4_text: "Vitamine und Mineralstoffe schützen uns vor Krankheiten und halten unsere Knochen und Zähne stark.",
    t4_h1: "Schutzstoffe", t4_h2: "Obst & Gemüse",
    t4_inst: "Sammle Vitamine!",
    t4_q: "Welches Vitamin ist besonders wichtig für die Abwehrkräfte?",
    t4_qa: "Vitamin C", t4_qb: "Vitamin K", t4_qc: "Vitamin E", t4_qd: "Vitamin B12",
    t5_title: "Energiebedarf",
    t5_text: "Je mehr wir uns bewegen, desto mehr Energie braucht unser Körper. Diese Energie messen wir oft in Kilokalorien.",
    t5_h1: "Treibstoff", t5_h2: "Verbrennung",
    t5_inst: "Wie viel brauchst du?",
    t5_q: "Wann braucht der Körper mehr Energie?",
    t5_qa: "Beim Sport", t5_qb: "Beim Schlafen", t5_qc: "Beim Fernsehen", t5_qd: "Gar nicht",
    t6_title: "Ohne Wasser geht nichts",
    t6_text: "Unser Körper besteht zu etwa 60-70% aus Wasser. Wir müssen täglich genug trinken, um fit zu bleiben.",
    t6_h1: "Durstlöscher", t6_h2: "Lebenselement",
    t6_inst: "Trink was!",
    t7_title: "Zähne putzen",
    t7_text: "Die Verdauung beginnt im Mund durch das Kauen. Gute Zähne sind wichtig für die Gesundheit.",
    t7_h1: "Vorbereitung", t7_h2: "Zahnpflege",
    t7_inst: "Putze die Zähne!",
    t8_title: "Gutes Essen",
    t8_text: "Eine gesunde Mahlzeit ist bunt und abwechslungsreich. Sie gibt uns Kraft für den ganzen Tag.",
    t8_h1: "Power-Frühstück", t8_h2: "Fit bleiben",
    t8_inst: "Decke den Tisch!",
  },
};

export const BIO_I9_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🍞", color: "#B45309" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{left: "Brot", right: "Kohlenhydrat"}, {left: "Fleisch", right: "Eiweiß"}, {left: "Butter", right: "Fett"}] },
    quiz: { generate: "ernaehrung_nutrients" }
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "biologie-diagram", name: "NutritionPyramidSvg", bg: "#F8FAFC" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔴", count: 1 }, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "ernaehrung_healthy_diet" }
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "biologie-diagram", name: "DigestiveSvg", bg: "#FEF3C7" },
    interactive: { type: "highlight-text", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", tokens: ["Mund", "Magen", "Dünndarm", "Dickdarm"], correctIndices: [0, 1, 2, 3] },
    quiz: { generate: "ernaehrung_digestive_system" }
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🍊", color: "#F97316" },
    interactive: { type: "gap-fill", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", sentence: "Früchte enthalten viele ___.", choices: ["Vitamine", "Steine", "Haare", "Schall"], correctIndex: 0 },
    quiz: { generate: "ernaehrung_nutrients" }
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "⚡", color: "#FACC15" },
    interactive: { type: "tap-count", tapCount: { emoji: "🔴", count: 2 }, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "ernaehrung_nutrients" }
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "simple-icon", icon: "💧", color: "#3B82F6" },
    interactive: { type: "highlight-text", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", tokens: ["Wasser", "trinken", "Durst", "Körper"], correctIndices: [0, 1, 3] },
    quiz: { generate: "ernaehrung_healthy_diet" }
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🦷", color: "#94A3B8" },
    interactive: { type: "match-pairs", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", pairs: [{left: "Kauen", right: "Mund"}, {left: "Putzen", right: "Schutz"}, {left: "Zucker", right: "Gefahr"}] },
    quiz: { generate: "ernaehrung_digestive_organs" }
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🥗", color: "#10B981" },
    interactive: { type: "drag-to-bucket", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", buckets: [{id: "gesund", label: "Gesund"}, {id: "ungesund", label: "Ungesund"}], items: [{text: "Salat", bucketId: "gesund"}, {text: "Apfel", bucketId: "gesund"}, {text: "Cola", bucketId: "ungesund"}, {text: "Chips", bucketId: "ungesund"}] },
    quiz: { generate: "ernaehrung_healthy_diet" }
  }
];
