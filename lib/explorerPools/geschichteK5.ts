import type { PoolTopicDef, SvgConfig } from "./types";
import type { TopicInteractive } from "@/app/astro-biologie/games/ExplorerEngine";

type Lang = "de";
type L1 = Record<Lang, string>;

/**
 * Helper to create a single-language label object.
 */
const L = (de: string): L1 => ({ de });

interface TopicSpec {
  id: string;
  title: L1;
  hint1: L1;
  hint2: L1;
  svg: any; // Allow L1 wrappers in spec
  interactive: any; // Allow L1 wrappers in spec
  quiz: {
    question: L1;
    choices: L1[];
    answer: L1;
  };
}

interface IslandSpec {
  id: string;
  title: L1;
  topics: TopicSpec[];
}

function buildIsland(island: IslandSpec) {
  const labels: Record<Lang, Record<string, string>> = {
    de: { explorer_title: island.title.de },
  };

  const pool: PoolTopicDef[] = island.topics.map((topic) => {
    const prefix = `${island.id}_${topic.id}`;
    
    // Title
    labels.de[`${prefix}_title`] = topic.title.de;
    // Hints
    labels.de[`${prefix}_h1`] = topic.hint1.de;
    labels.de[`${prefix}_h2`] = topic.hint2.de;
    // Quiz
    labels.de[`${prefix}_q`] = topic.quiz.question.de;
    topic.quiz.choices.forEach((c, i) => {
      labels.de[`${prefix}_c${i}`] = c.de;
    });
    labels.de[`${prefix}_a`] = topic.quiz.answer.de;

    // Fix SVG: Extract .de from any L1 objects
    // IMPORTANT: In SVG, DO NOT use L() wrapper, pass raw strings
    const svg = JSON.parse(JSON.stringify(topic.svg), (key, value) => {
      if (value && typeof value === "object" && "de" in value) {
        return value.de;
      }
      return value;
    });

    // Fix Interactive: Extract .de and map to keys
    let rawInteractive = JSON.parse(JSON.stringify(topic.interactive));
    
    // Recursive label extractor
    const processInteractive = (obj: any, path: string): any => {
      if (!obj || typeof obj !== "object") return obj;
      
      if ("de" in obj) {
        const key = `${prefix}_int_${path.replace(/\./g, "_")}`;
        labels.de[key] = obj.de;
        return key;
      }

      if (Array.isArray(obj)) {
        return obj.map((item, i) => processInteractive(item, `${path}_${i}`));
      }

      const newObj: any = {};
      for (const [k, v] of Object.entries(obj)) {
        newObj[k] = processInteractive(v, `${path}_${k}`);
      }
      return newObj;
    };

    let interactive = processInteractive(rawInteractive, "root");

    // Correct gap-fill structure: text -> sentence, gaps -> choices
    if (interactive.type === "gap-fill") {
      interactive.sentence = interactive.text;
      delete interactive.text;
      if (interactive.gaps && interactive.gaps[0]) {
        interactive.choices = interactive.gaps[0].options;
        interactive.correctIndex = interactive.gaps[0].correct;
        delete interactive.gaps;
      }
    }

    return {
      infoTitle: `${prefix}_title`,
      infoText: `${prefix}_h1`,
      hintKey: `${prefix}_h2`,
      svg: svg as SvgConfig,
      interactive: interactive as TopicInteractive,
      quiz: {
        question: `${prefix}_q`,
        choices: topic.quiz.choices.map((_, i) => `${prefix}_c${i}`),
        answer: `${prefix}_a`,
      },
    };
  });

  return { labels, pool };
}

// ─── ISLAND 1: FRÜHE HOCHKULTUREN ──────────────────────────────────────────
const I1: IslandSpec = {
  id: "i1",
  title: L("Frühe Hochkulturen"),
  topics: [
    {
      id: "mesopotamien",
      title: L("Mesopotamien"),
      hint1: L("Das Land zwischen Euphrat und Tigris."),
      hint2: L("Heute liegt dort der Irak."),
      svg: { type: "text-bubbles", items: [{ text: "Euphrat", color: "#fff", bg: "#0284c7" }, { text: "Tigris", color: "#fff", bg: "#0ea5e9" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Meso"), right: L("Zwischen") }, { left: L("Potamos"), right: L("Fluss") }] },
      quiz: { 
        question: L("Was bedeutet der Name Mesopotamien?"), 
        choices: [L("Zweistromland"), L("Bergland"), L("Inselreich"), L("Wüste")], 
        answer: L("Zweistromland") 
      }
    },
    {
      id: "sumerer",
      title: L("Die Sumerer"),
      hint1: L("Eines der ältesten Kulturvölker."),
      hint2: L("Sie erfanden die erste Schrift."),
      svg: { type: "icon-grid", items: [{ emoji: "✍️", label: "Schrift" }, { emoji: "🌾", label: "Bauern" }] },
      interactive: { type: "gap-fill", text: L("Die Sumerer lebten in __."), gaps: [{ index: 0, options: ["Mesopotamien", "Ägypten"], correct: 0 }] },
      quiz: { 
        question: L("Welches Volk erfand die Keilschrift?"), 
        choices: [L("Sumerer"), L("Römer"), L("Griechen"), L("Germanen")], 
        answer: L("Sumerer") 
      }
    },
    {
      id: "keilschrift",
      title: L("Keilschrift"),
      hint1: L("Schriftzeichen in Keilform."),
      hint2: L("Gedrückt in feuchten Ton."),
      svg: { type: "letter-circles", letters: ["K", "E", "I", "L", "S"], color: "#1e40af" },
      interactive: { type: "word-order", words: [L("Griff"), L("drückt"), L("in"), L("Ton")], instruction: L("Wie schrieb man?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Auf welchem Material schrieben die Sumerer?"), 
        choices: [L("Tontafeln"), L("Papier"), L("Holz"), L("Leder")], 
        answer: L("Tontafeln") 
      }
    },
    {
      id: "bewaesserung",
      title: L("Bewässerung"),
      hint1: L("Kanäle brachten Wasser auf die Felder."),
      hint2: L("So gab es reiche Ernten."),
      svg: { type: "two-groups", left: { items: ["Kanal", "Wasser"], bg: "#dbeafe", border: "#2563eb" }, right: { items: ["Feld", "Ernte"], bg: "#dcfce7", border: "#16a34a" } },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "b", label: L("Landbau") }], items: [{ text: L("Kanal"), bucketId: "b" }, { text: L("Damm"), bucketId: "b" }], instruction: L("Zuweisen!") },
      quiz: { 
        question: L("Warum bauten Mesopotamier Kanäle?"), 
        choices: [L("Zur Bewässerung"), L("Zum Schwimmen"), L("Als Mauern"), L("Für Schiffe allein")], 
        answer: L("Zur Bewässerung") 
      }
    },
    {
      id: "rad",
      title: L("Das Rad"),
      hint1: L("Eine der wichtigsten Erfindungen."),
      hint2: L("Zuerst für Töpferscheiben genutzt."),
      svg: { type: "icon-grid", items: [{ emoji: "⭕", label: "Rad" }, { emoji: "🛒", label: "Wagen" }] },
      interactive: { type: "tap-count", tapCount: { emoji: "⭕", count: 4 }, instruction: L("Wie viele Räder hat ein Wagen?") },
      quiz: { 
        question: L("Wofür war das Rad besonders nützlich?"), 
        choices: [L("Transport von Waren"), L("Zum Essen"), L("Als Hausbau"), L("Nur zum Spielen")], 
        answer: L("Transport von Waren") 
      }
    },
    {
      id: "hammurabi",
      title: L("König Hammurabi"),
      hint1: L("Berühmt für seine Gesetze."),
      hint2: L("Eingemeißelt in Stein."),
      svg: { type: "word-display", word: "GESETZ", color: "#475569" },
      interactive: { type: "gap-fill", text: L("Hammurabi war König von __."), gaps: [{ index: 0, options: ["Babylon", "Rom"], correct: 0 }] },
      quiz: { 
        question: L("Was ließ Hammurabi aufschreiben?"), 
        choices: [L("Gesetzbuch"), L("Kochbuch"), L("Märchen"), L("Lieder")], 
        answer: L("Gesetzbuch") 
      }
    },
    {
      id: "zikkurat",
      title: L("Zikkurat"),
      hint1: L("Ein riesiger Stufentempel."),
      hint2: L("Sitz der Götter."),
      svg: { type: "text-bubbles", items: [{ text: "Tempel", color: "#fff", bg: "#f59e0b" }, { text: "Stufen", color: "#fff", bg: "#78350f" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Zikkurat"), right: L("Tempel") }, { left: L("Priester"), right: L("Ritual") }] },
      quiz: { 
        question: L("Was ist eine Zikkurat?"), 
        choices: [L("Ein Stufentempel"), L("Ein Marktplatz"), L("Ein Schiff"), L("Ein Grab")], 
        answer: L("Ein Stufentempel") 
      }
    },
    {
      id: "priesterkoenige",
      title: L("Priesterkönige"),
      hint1: L("Herrscher waren auch religiöse Führer."),
      hint2: L("Sie regierten im Namen der Götter."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "König" }, { emoji: "🙏", label: "Priester" }] },
      interactive: { type: "word-order", words: [L("Gott"), L("und"), L("Herrscher")], instruction: L("Zwei Rollen!"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wer regierte oft in frühen Hochkulturen?"), 
        choices: [L("Priesterkönige"), L("Präsidenten"), L("Bauernräte"), L("Händler")], 
        answer: L("Priesterkönige") 
      }
    },
    {
      id: "ur",
      title: L("Die Stadt Ur"),
      hint1: L("Eine der ersten großen Städte."),
      hint2: L("Hier lebten Tausende Menschen."),
      svg: { type: "sentence-display", words: ["Erste", "große", "Stadt"], color: "#16a34a" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Ur"), right: L("Sumerer") }, { left: L("Stadt"), right: L("Mauer") }] },
      quiz: { 
        question: L("In welcher Region lag die Stadt Ur?"), 
        choices: [L("Mesopotamien"), L("Ägypten"), L("Indien"), L("China")], 
        answer: L("Mesopotamien") 
      }
    },
    {
      id: "schreiber",
      title: L("Der Schreiber"),
      hint1: L("Ein sehr wichtiger Beruf."),
      hint2: L("Nur wenige konnten schreiben."),
      svg: { type: "icon-grid", items: [{ emoji: "🖋️", label: "Feder" }, { emoji: "📜", label: "Liste" }] },
      interactive: { type: "gap-fill", text: L("Schreiber arbeiteten im __."), gaps: [{ index: 0, options: ["Tempel", "Wald"], correct: 0 }] },
      quiz: { 
        question: L("Wofür brauchte man Schreiber?"), 
        choices: [L("Für Vorräte und Steuern"), L("Zum Jagen"), L("Für Sport"), L("Gar nicht")], 
        answer: L("Für Vorräte und Steuern") 
      }
    },
    {
      id: "zeitmessung",
      title: L("Zeitmessung"),
      hint1: L("Einteilung in 60 Minuten."),
      hint2: L("Von den Sumerern erfunden."),
      svg: { type: "text-bubbles", items: [{ text: "60", color: "#fff", bg: "#ef4444" }, { text: "Zeit", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "tap-count", tapCount: { emoji: "⏰", count: 12 }, instruction: L("Zähle die Stunden!") },
      quiz: { 
        question: L("Auf welcher Zahl basierte das sumerische Zeitsystem?"), 
        choices: [L("60"), L("10"), L("100"), L("7")],
        answer: L("60") 
      }
    },
    {
      id: "induskultur",
      title: L("Indus-Kultur"),
      hint1: L("Hochkultur am Indus-Fluss."),
      hint2: L("Bekannt für geplante Städte."),
      svg: { type: "two-groups", left: { items: ["Indus", "Fluss"], bg: "#dbeafe", border: "#2563eb" }, right: { items: ["Bad", "Hygiene"], bg: "#f1f5f9", border: "#475569" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Indus"), right: L("Pakistan") }, { left: L("Stadt"), right: L("Planung") }] },
      quiz: { 
        question: L("Was war besonders an Indus-Städten?"), 
        choices: [L("Sie waren genau geplant"), L("Sie hatten keine Häuser"), L("Sie lagen auf Bergen"), L("Sie waren rund")], 
        answer: L("Sie waren genau geplant") 
      }
    },
    {
      id: "gelberfluss",
      title: L("Gelber Fluss"),
      hint1: L("Hochkultur im alten China."),
      hint2: L("Huang He brachte fruchtbaren Löss."),
      svg: { type: "word-display", word: "HUANG HE", color: "#854d0e" },
      interactive: { type: "word-order", words: [L("Gelber"), L("Fluss"), L("China")], instruction: L("Ordnen!"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wo entstand die chinesische Hochkultur?"), 
        choices: [L("Huang He"), L("Nil"), L("Donau"), L("Amazonas")], 
        answer: L("Huang He") 
      }
    },
    {
      id: "teilung_arbeit",
      title: L("Arbeitsteilung"),
      hint1: L("Menschen spezialisieren sich."),
      hint2: L("Es gab Bauern, Schmiede, Händler."),
      svg: { type: "two-groups", left: { items: ["Bauer", "Schmied"], bg: "#dcfce7", border: "#16a34a" }, right: { items: ["Händler", "Schreiber"], bg: "#dbeafe", border: "#2563eb" } },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "b", label: L("Berufe") }], items: [{ text: L("Weber"), bucketId: "b" }, { text: L("Töpfer"), bucketId: "b" }], instruction: L("Zuweisen!") },
      quiz: { 
        question: L("Was bedeutet Arbeitsteilung?"), 
        choices: [L("Jeder macht eine spezielle Aufgabe"), L("Niemand arbeitet"), L("Alle machen das Gleiche"), L("Arbeit wird verboten")], 
        answer: L("Jeder macht eine spezielle Aufgabe") 
      }
    },
    {
      id: "halbmond",
      title: L("Fruchtbarer Halbmond"),
      hint1: L("Gebiet im Nahen Osten."),
      hint2: L("Hier begannen Landwirtschaft und Städte."),
      svg: { type: "icon-grid", items: [{ emoji: "🌙", label: "Form" }, { emoji: "🌱", label: "Früchte" }] },
      interactive: { type: "gap-fill", text: L("Das Gebiet ist sehr __."), gaps: [{ index: 0, options: ["fruchtbar", "eisig"], correct: 0 }] },
      quiz: { 
        question: L("Wo liegt der Fruchtbare Halbmond?"), 
        choices: [L("Naher Osten"), L("Europa"), L("Amerika"), L("Australien")], 
        answer: L("Naher Osten") 
      }
    }
  ]
};

// ─── ISLAND 2: DAS ALTE ÄGYPTEN ─────────────────────────────────────────────
const I2: IslandSpec = {
  id: "i2",
  title: L("Das alte Ägypten"),
  topics: [
    {
      id: "pharao",
      title: L("Der Pharao"),
      hint1: L("Der Pharao war der König von Ägypten."),
      hint2: L("Er wurde wie ein Gott verehrt."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "Macht" }, { emoji: "☀️", label: "Gott" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Pharao"), right: L("König") }, { left: L("Untertanen"), right: L("Volk") }] },
      quiz: { 
        question: L("Wer war der oberste Herrscher in Ägypten?"), 
        choices: [L("Pharao"), L("Kaiser"), L("Präsident"), L("Ritter")], 
        answer: L("Pharao") 
      }
    },
    {
      id: "pyramiden",
      title: L("Pyramiden"),
      hint1: L("Pyramiden waren Grabmäler für Pharaonen."),
      hint2: L("Die größte ist die Cheops-Pyramide."),
      svg: { type: "text-bubbles", items: [{ text: "Stein", color: "#000", bg: "#fbbf24" }, { text: "Grab", color: "#000", bg: "#f59e0b" }] },
      interactive: { type: "tap-count", tapCount: { emoji: "🔺", count: 3 }, instruction: L("Zähle die Seiten!") },
      quiz: { 
        question: L("Wozu dienten die Pyramiden?"), 
        choices: [L("Als Gräber"), L("Als Getreidespeicher"), L("Als Wohnhäuser"), L("Als Festungen")], 
        answer: L("Als Gräber") 
      }
    },
    {
      id: "nil",
      title: L("Der Nil"),
      hint1: L("Der Nil ist die Lebensader Ägyptens."),
      hint2: L("Die jährliche Überschwemmung brachte fruchtbaren Schlamm."),
      svg: { type: "two-groups", left: { items: ["Wasser", "Flut"], bg: "#dbeafe", border: "#2563eb" }, right: { items: ["Ernte", "Schlamm"], bg: "#dcfce7", border: "#16a34a" } },
      interactive: { type: "word-order", words: [L("Nilflut"), L("Schlamm"), L("Ernte")], instruction: L("Bringe den Kreislauf in Ordnung!"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Warum war der Nil so wichtig?"), 
        choices: [L("Wegen des fruchtbaren Schlamms"), L("Wegen des Salzwassers"), L("Wegen der Fische allein"), L("Wegen des Eises")], 
        answer: L("Wegen des fruchtbaren Schlamms") 
      }
    },
    {
      id: "mumifizierung",
      title: L("Mumifizierung"),
      hint1: L("Körper wurden haltbar gemacht."),
      hint2: L("Man benutzte Salz und Leinenbinden."),
      svg: { type: "icon-grid", items: [{ emoji: "🩹", label: "Binden" }, { emoji: "🧂", label: "Natron" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Einbalsamieren"), right: L("Haltbar machen") }, { left: L("Mumie"), right: L("Körper") }] },
      quiz: { 
        question: L("Warum wurden Tote mumifiziert?"), 
        choices: [L("Für das Leben nach dem Tod"), L("Zum Spaß"), L("Wegen Gesetzen"), L("Gegen Kälte")], 
        answer: L("Für das Leben nach dem Tod") 
      }
    },
    {
      id: "hieroglyphen",
      title: L("Hieroglyphen"),
      hint1: L("Die heilige Schrift der Ägypter."),
      hint2: L("Es sind Bildzeichen."),
      svg: { type: "letter-circles", letters: ["H", "I", "E", "R", "O"], color: "#f59e0b" },
      interactive: { type: "word-order", words: [L("Bild"), L("Schrift"), L("Zeichen")], instruction: L("Was sind Hieroglyphen?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wie nennt man die ägyptische Bilderschrift?"), 
        choices: [L("Hieroglyphen"), L("Keilschrift"), L("Alphabet"), L("Latein")], 
        answer: L("Hieroglyphen") 
      }
    },
    {
      id: "totenkult",
      title: L("Totenkult"),
      hint1: L("Ägypter glaubten an ein Weiterleben nach dem Tod."),
      hint2: L("Sie gaben Grabbeigaben mit."),
      svg: { type: "two-groups", left: { items: ["Gold", "Essen"], bg: "#fef3c7", border: "#d97706" }, right: { items: ["Werkzeug"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "j", label: L("Jenseits") }], items: [{ text: L("Schätze"), bucketId: "j" }, { text: L("Speisen"), bucketId: "j" }], instruction: L("Zuweisen!") },
      quiz: { 
        question: L("Was legte man den Toten ins Grab?"), 
        choices: [L("Grabbeigaben"), L("Nichts"), L("Nur Steine"), L("Geldbeutel")], 
        answer: L("Grabbeigaben") 
      }
    },
    {
      id: "ra",
      title: L("Gott Ra"),
      hint1: L("Ra war der Sonnengott."),
      hint2: L("Er war der wichtigste Gott."),
      svg: { type: "text-bubbles", items: [{ text: "Sonne", color: "#fff", bg: "#ea580c" }, { text: "Licht", color: "#fff", bg: "#facc15" }] },
      interactive: { type: "gap-fill", text: L("Der Gott __ wird oft mit einem Falkenkopf dargestellt."), gaps: [{ index: 0, options: ["Ra", "Osiris"], correct: 0 }] },
      quiz: { 
        question: L("Für was war der Gott Ra zuständig?"), 
        choices: [L("Sonne"), L("Unterwelt"), L("Wasser"), L("Krieg")], 
        answer: L("Sonne") 
      }
    },
    {
      id: "osiris",
      title: L("Gott Osiris"),
      hint1: L("Der Herrscher der Unterwelt."),
      hint2: L("Er richtet über die Toten."),
      svg: { type: "two-groups", left: { items: ["Osiris", "Unterwelt"], bg: "#ede9fe", border: "#7c3aed" }, right: { items: ["Ra", "Himmel"], bg: "#dbeafe", border: "#2563eb" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Osiris"), right: L("Richter") }, { left: L("Tote"), right: L("Gericht") }] },
      quiz: { 
        question: L("Wo herrschte der Gott Osiris?"), 
        choices: [L("In der Unterwelt"), L("Im Himmel"), L("Im Nil"), L("In der Wüste")], 
        answer: L("In der Unterwelt") 
      }
    },
    {
      id: "isis",
      title: L("Göttin Isis"),
      hint1: L("Die Göttin der Magie und Mütter."),
      hint2: L("Ehefrau von Osiris."),
      svg: { type: "icon-grid", items: [{ emoji: "🪄", label: "Magie" }, { emoji: "👩", label: "Mutter" }] },
      interactive: { type: "word-order", words: [L("Schutz"), L("Göttin"), L("Isis")], instruction: L("Wer war Isis?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Für was steht die Göttin Isis?"), 
        choices: [L("Schutz und Magie"), L("Krieg"), L("Handel"), L("Wetter")], 
        answer: L("Schutz und Magie") 
      }
    },
    {
      id: "papyrus",
      title: L("Papyrus"),
      hint1: L("Das Schreibmaterial der Ägypter."),
      hint2: L("Es wurde aus einer Schilfpflanze gemacht."),
      svg: { type: "word-display", word: "PAPYRUS", color: "#166534" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Papyrus"), right: L("Papier") }, { left: L("Schilf"), right: L("Pflanze") }] },
      quiz: { 
        question: L("Woraus machten Ägypter Schreibmaterial?"), 
        choices: [L("Papyrus-Schilf"), L("Holz"), L("Leder"), L("Stein")], 
        answer: L("Papyrus-Schilf") 
      }
    },
    {
      id: "sphinx",
      title: L("Die Sphinx"),
      hint1: L("Ein Wesen mit Löwenkörper und Menschenkopf."),
      hint2: L("Sie bewacht die Pyramiden."),
      svg: { type: "sentence-display", words: ["Löwe", "und", "Mensch"], color: "#854d0e" },
      interactive: { type: "tap-count", tapCount: { emoji: "🐾", count: 2 }, instruction: L("Wie viele Teile?") },
      quiz: { 
        question: L("Welche Gestalt hat die Sphinx?"), 
        choices: [L("Löwe mit Menschenkopf"), L("Vogel mit Fischschwanz"), L("Hund mit Flügeln"), L("Nur Mensch")], 
        answer: L("Löwe mit Menschenkopf") 
      }
    },
    {
      id: "tut",
      title: L("Tutanchamun"),
      hint1: L("Berühmt durch sein fast unberührtes Grab."),
      hint2: L("Er starb sehr jung."),
      svg: { type: "text-bubbles", items: [{ text: "Gold", color: "#fff", bg: "#fbbf24" }, { text: "Grab", color: "#fff", bg: "#78350f" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Tutanchamun"), right: L("Kindkönig") }, { left: L("Howard Carter"), right: L("Entdecker") }] },
      quiz: { 
        question: L("Warum ist Tutanchamun so bekannt?"), 
        choices: [L("Wegen seines Goldgrabes"), L("Er war der stärkste Krieger"), L("Er baute die größte Pyramide"), L("Er erfand die Schrift")], 
        answer: L("Wegen seines Goldgrabes") 
      }
    },
    {
      id: "kleopatra",
      title: L("Kleopatra"),
      hint1: L("Die letzte Königin von Ägypten."),
      hint2: L("Sie war sehr klug."),
      svg: { type: "icon-grid", items: [{ emoji: "👸", label: "Königin" }, { emoji: "🐍", label: "Ende" }] },
      interactive: { type: "word-order", words: [L("Letzte"), L("Pharaonin"), L("Ägyptens")], instruction: L("Wer war Kleopatra?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wer war die letzte Herrscherin Ägyptens?"), 
        choices: [L("Kleopatra"), L("Nefertiti"), L("Isis"), L("Hatschepsut")], 
        answer: L("Kleopatra") 
      }
    },
    {
      id: "oasen",
      title: L("Oasen"),
      hint1: L("Grüne Orte in der Wüste."),
      hint2: L("Dort gibt es Wasser."),
      svg: { type: "text-bubbles", items: [{ text: "Wasser", color: "#fff", bg: "#0284c7" }, { text: "Palmen", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "o", label: L("Oase") }], items: [{ text: L("Quelle"), bucketId: "o" }, { text: L("Datteln"), bucketId: "o" }], instruction: L("Zuweisen!") },
      quiz: { 
        question: L("Was findet man in einer Oase?"), 
        choices: [L("Wasser und Pflanzen"), L("Nur Sand"), L("Eis"), L("Salzwasser")], 
        answer: L("Wasser und Pflanzen") 
      }
    },
    {
      id: "ordnung",
      title: L("Gesellschaft"),
      hint1: L("Die Ägypter hatten eine feste Ordnung."),
      hint2: L("Ganz oben war der Pharao."),
      svg: { type: "two-groups", left: { items: ["Pharao", "Beamte"], bg: "#dbeafe", border: "#2563eb" }, right: { items: ["Bauern", "Sklaven"], bg: "#fee2e2", border: "#dc2626" } },
      interactive: { type: "gap-fill", text: L("Die meisten Menschen waren __."), gaps: [{ index: 0, options: ["Bauern", "Schreiber"], correct: 0 }] },
      quiz: { 
        question: L("Wer bildete die Basis der Gesellschaft?"), 
        choices: [L("Bauern"), L("Pharaonen"), L("Priester"), L("Beamte")], 
        answer: L("Bauern") 
      }
    }
  ]
};

// ─── ISLAND 3: DAS ANTIKE GRIECHENLAND ──────────────────────────────────────
const I3: IslandSpec = {
  id: "i3",
  title: L("Das antike Griechenland"),
  topics: [
    {
      id: "polis",
      title: L("Die Polis"),
      hint1: L("Ein griechischer Stadtstaat."),
      hint2: L("Jede Stadt war wie ein eigenes Land."),
      svg: { type: "icon-grid", items: [{ emoji: "🏛️", label: "Stadt" }, { emoji: "🗺️", label: "Staat" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Polis"), right: L("Stadtstaat") }, { left: L("Agora"), right: L("Marktplatz") }] },
      quiz: { 
        question: L("Was bedeutet Polis?"), 
        choices: [L("Stadtstaat"), L("Polizei"), L("Insel"), L("Tempel")], 
        answer: L("Stadtstaat") 
      }
    },
    {
      id: "athen",
      title: L("Athen"),
      hint1: L("Das Zentrum von Bildung und Kunst."),
      hint2: L("Berühmt für die Akropolis."),
      svg: { type: "text-bubbles", items: [{ text: "Wissen", color: "#fff", bg: "#3b82f6" }, { text: "Demokratie", color: "#fff", bg: "#10b981" }] },
      interactive: { type: "word-order", words: [L("Athen"), L("ist"), L("Kultur")], instruction: L("Satz bilden!"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wofür war Athen besonders bekannt?"), 
        choices: [L("Demokratie und Kunst"), L("Nur Krieg"), L("Wüste"), L("Schneehäuser")], 
        answer: L("Demokratie und Kunst") 
      }
    },
    {
      id: "sparta",
      title: L("Sparta"),
      hint1: L("Ein Staat mit starken Kriegern."),
      hint2: L("Die Erziehung war sehr streng."),
      svg: { type: "two-groups", left: { items: ["Kampf", "Disziplin"], bg: "#fca5a5", border: "#b91c1c" }, right: { items: ["Musik"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Sparta"), right: L("Militär") }, { left: L("Erziehung"), right: L("Härte") }] },
      quiz: { 
        question: L("Was war in Sparta am wichtigsten?"), 
        choices: [L("Militärische Stärke"), L("Malerei"), L("Handel"), L("Seefahrt")], 
        answer: L("Militärische Stärke") 
      }
    },
    {
      id: "demokratie",
      title: L("Demokratie"),
      hint1: L("Herrschaft des Volkes."),
      hint2: L("Bürger durften mitbestimmen."),
      svg: { type: "two-groups", left: { items: ["Volk", "Wahl"], bg: "#dcfce7", border: "#16a34a" }, right: { items: ["König", "Befehl"], bg: "#fee2e2", border: "#dc2626" } },
      interactive: { type: "gap-fill", text: L("In Athen durften __ Männer wählen."), gaps: [{ index: 0, options: ["freie", "alle"], correct: 0 }] },
      quiz: { 
        question: L("Was bedeutet Demokratie?"), 
        choices: [L("Volksherrschaft"), L("Königsherrschaft"), L("Gesetz"), L("Reichtum")], 
        answer: L("Volksherrschaft") 
      }
    },
    {
      id: "olympia",
      title: L("Olympische Spiele"),
      hint1: L("Wettkämpfe zu Ehren von Zeus."),
      hint2: L("Alle Kriege mussten ruhen."),
      svg: { type: "icon-grid", items: [{ emoji: "🏃", label: "Lauf" }, { emoji: "🥇", label: "Sieg" }] },
      interactive: { type: "tap-count", tapCount: { emoji: "⭕", count: 5 }, instruction: L("Zähle die Ringe!") },
      quiz: { 
        question: L("Wem zu Ehren fanden die Spiele statt?"), 
        choices: [L("Zeus"), L("Hera"), L("Athene"), L("Poseidon")], 
        answer: L("Zeus") 
      }
    },
    {
      id: "sokrates",
      title: L("Sokrates"),
      hint1: L("Ein berühmter Philosoph."),
      hint2: L("Er stellte viele Fragen."),
      svg: { type: "word-display", word: "PHILOSOPHIE", color: "#6366f1" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Sokrates"), right: L("Fragen") }, { left: L("Wissen"), right: L("Denken") }] },
      quiz: { 
        question: L("Was war Sokrates von Beruf?"), 
        choices: [L("Philosoph"), L("Soldat"), L("Bauer"), L("Schreiber")], 
        answer: L("Philosoph") 
      }
    },
    {
      id: "platon",
      title: L("Platon"),
      hint1: L("Schüler von Sokrates."),
      hint2: L("Er gründete die Akademie."),
      svg: { type: "text-bubbles", items: [{ text: "Ideen", color: "#fff", bg: "#8b5cf6" }, { text: "Schule", color: "#fff", bg: "#4f46e5" }] },
      interactive: { type: "gap-fill", text: L("Platon war ein __."), gaps: [{ index: 0, options: ["Denker", "König"], correct: 0 }] },
      quiz: { 
        question: L("Was gründete Platon in Athen?"), 
        choices: [L("Eine Akademie"), L("Ein Heer"), L("Einen Hafen"), L("Einen Markt")], 
        answer: L("Eine Akademie") 
      }
    },
    {
      id: "aristoteles",
      title: L("Aristoteles"),
      hint1: L("Ein Forscher und Philosoph."),
      hint2: L("Lehrer von Alexander dem Großen."),
      svg: { type: "two-groups", left: { items: ["Logik", "Wissen"], bg: "#f1f5f9", border: "#475569" }, right: { items: ["Schule"], bg: "#f1f5f9", border: "#475569" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Aristoteles"), right: L("Lehrer") }, { left: L("Alexander"), right: L("Schüler") }] },
      quiz: { 
        question: L("Wen unterrichtete Aristoteles?"), 
        choices: [L("Alexander den Großen"), L("Caesar"), L("Sokrates"), L("Napoleon")], 
        answer: L("Alexander den Großen") 
      }
    },
    {
      id: "theater",
      title: L("Theater"),
      hint1: L("Die Griechen liebten Dramen."),
      hint2: L("Männer spielten alle Rollen."),
      svg: { type: "icon-grid", items: [{ emoji: "🎭", label: "Maske" }, { emoji: "🏛️", label: "Bühne" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "t", label: L("Theater") }], items: [{ text: L("Tragödie"), bucketId: "t" }, { text: L("Komödie"), bucketId: "t" }], instruction: L("Zuweisen!") },
      quiz: { 
        question: L("Was trugen griechische Schauspieler oft?"), 
        choices: [L("Masken"), L("Brillen"), L("Hüte"), L("Nichts")], 
        answer: L("Masken") 
      }
    },
    {
      id: "zeus",
      title: L("Gott Zeus"),
      hint1: L("Der Göttervater."),
      hint2: L("Sein Zeichen ist der Blitz."),
      svg: { type: "text-bubbles", items: [{ text: "Blitz", color: "#fff", bg: "#fde047" }, { text: "Olymp", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Zeus"), right: L("Blitz") }, { left: L("Olymp"), right: L("Berg") }] },
      quiz: { 
        question: L("Wo wohnten die griechischen Götter?"), 
        choices: [L("Auf dem Olymp"), L("Im Meer"), L("In der Wüste"), L("In den Pyramiden")], 
        answer: L("Auf dem Olymp") 
      }
    },
    {
      id: "athene",
      title: L("Göttin Athene"),
      hint1: L("Göttin der Weisheit."),
      hint2: L("Schutzherrin von Athen."),
      svg: { type: "icon-grid", items: [{ emoji: "🦉", label: "Eule" }, { emoji: "🛡️", label: "Schutz" }] },
      interactive: { type: "word-order", words: [L("Weisheit"), L("und"), L("Kampf")], instruction: L("Wofür steht Athene?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Welches Tier ist das Symbol für Athene?"), 
        choices: [L("Eule"), L("Löwe"), L("Adler"), L("Schlange")], 
        answer: L("Eule") 
      }
    },
    {
      id: "perserkriege",
      title: L("Perserkriege"),
      hint1: L("Griechen kämpften gegen das Perserreich."),
      hint2: L("Sie verteidigten ihre Freiheit."),
      svg: { type: "two-groups", left: { items: ["Perser", "Heer"], bg: "#fee2e2", border: "#dc2626" }, right: { items: ["Griechen", "Polis"], bg: "#dbeafe", border: "#2563eb" } },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "g", label: L("Griechen") }, { id: "p", label: L("Perser") }], items: [{ text: L("Athen"), bucketId: "g" }, { text: L("Xerxes"), bucketId: "p" }], instruction: L("Zuweisen!") },
      quiz: { 
        question: L("Gegen wen kämpften die Griechen?"), 
        choices: [L("Perser"), L("Römer"), L("Ägypter"), L("Germanen")], 
        answer: L("Perser") 
      }
    },
    {
      id: "marathon",
      title: L("Marathon"),
      hint1: L("Ein berühmter Sieg der Athener."),
      hint2: L("Ein Läufer brachte die Nachricht."),
      svg: { type: "sentence-display", words: ["Sieg", "über", "die", "Perser"], color: "#16a34a" },
      interactive: { type: "gap-fill", text: L("Der Lauf von Marathon ist __ km lang."), gaps: [{ index: 0, options: ["42", "10", "100"], correct: 0 }] },
      quiz: { 
        question: L("Was geschah bei Marathon?"), 
        choices: [L("Eine Schlacht"), L("Ein Fest"), L("Ein Hausbau"), L("Eine Reise")], 
        answer: L("Eine Schlacht") 
      }
    },
    {
      id: "agora",
      title: L("Die Agora"),
      hint1: L("Der Marktplatz von Athen."),
      hint2: L("Hier wurde Politik gemacht."),
      svg: { type: "icon-grid", items: [{ emoji: "🍎", label: "Markt" }, { emoji: "🗣️", label: "Rede" }] },
      interactive: { type: "word-order", words: [L("Treffpunkt"), L("der"), L("Bürger")], instruction: L("Was war die Agora?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Was war die Agora?"), 
        choices: [L("Marktplatz"), L("Tempel"), L("Hafen"), L("Schlachtfeld")], 
        answer: L("Marktplatz") 
      }
    },
    {
      id: "hellenismus",
      title: L("Hellenismus"),
      hint1: L("Die Zeit nach Alexander dem Großen."),
      hint2: L("Griechische Kultur verbreitete sich."),
      svg: { type: "text-bubbles", items: [{ text: "Kultur", color: "#fff", bg: "#06b6d4" }, { text: "Welt", color: "#fff", bg: "#0891b2" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Hellenismus"), right: L("Kulturmix") }, { left: L("Alexander"), right: L("Eroberer") }] },
      quiz: { 
        question: L("Was verbreitete sich im Hellenismus?"), 
        choices: [L("Griechische Kultur"), L("Wüstensand"), L("Römisches Recht"), L("Englisch")], 
        answer: L("Griechische Kultur") 
      }
    }
  ]
};

// ─── ISLAND 4: RÖMISCHE REPUBLIK ────────────────────────────────────────────
const I4: IslandSpec = {
  id: "i4",
  title: L("Römische Republik"),
  topics: [
    {
      id: "mythos",
      title: L("Gründungsmythos"),
      hint1: L("Romulus und Remus gründeten Rom."),
      hint2: L("Sie wurden von einer Wölfin gesäugt."),
      svg: { type: "icon-grid", items: [{ emoji: "🐺", label: "Wölfin" }, { emoji: "👶", label: "Zwillinge" }] },
      interactive: { type: "word-order", words: [L("753"), L("Rom"), L("schlüpft"), L("aus"), L("dem"), L("Ei")], instruction: L("Merkspruch!"), correctOrder: [0, 1, 2, 3, 4, 5] },
      quiz: { 
        question: L("Wer waren die sagenhaften Gründer Roms?"), 
        choices: [L("Romulus und Remus"), L("Caesar und Augustus"), L("Zeus und Poseidon"), L("Adam und Eva")], 
        answer: L("Romulus und Remus") 
      }
    },
    {
      id: "senat",
      title: L("Der Senat"),
      hint1: L("Die Versammlung der Ältesten."),
      hint2: L("Er beriet die Konsuln."),
      svg: { type: "text-bubbles", items: [{ text: "Rat", color: "#fff", bg: "#ef4444" }, { text: "Macht", color: "#fff", bg: "#b91c1c" }] },
      interactive: { type: "gap-fill", text: L("Im Senat saßen die __."), gaps: [{ index: 0, options: ["Adligen", "Bauern"], correct: 0 }] },
      quiz: { 
        question: L("Wer hatte in der Republik viel Macht?"), 
        choices: [L("Der Senat"), L("Der Sklave"), L("Der Feind"), L("Niemand")], 
        answer: L("Der Senat") 
      }
    },
    {
      id: "konsuln",
      title: L("Konsuln"),
      hint1: L("Die zwei obersten Beamten."),
      hint2: L("Sie regierten für ein Jahr."),
      svg: { type: "two-groups", left: { items: ["Konsul 1", "Macht"], bg: "#fee2e2", border: "#ef4444" }, right: { items: ["Konsul 2", "Macht"], bg: "#fee2e2", border: "#ef4444" } },
      interactive: { type: "tap-count", tapCount: { emoji: "👔", count: 2 }, instruction: L("Wie viele Konsuln?") },
      quiz: { 
        question: L("Wie lange durfte ein Konsul regieren?"), 
        choices: [L("Ein Jahr"), L("Ewig"), L("Zehn Jahre"), L("Einen Monat")], 
        answer: L("Ein Jahr") 
      }
    },
    {
      id: "staende",
      title: L("Patrizier & Plebejer"),
      hint1: L("Zwei Gruppen in Rom."),
      hint2: L("Patrizier waren adlig, Plebejer das Volk."),
      svg: { type: "two-groups", left: { items: ["Patrizier", "Reich"], bg: "#ede9fe", border: "#4f46e5" }, right: { items: ["Plebejer", "Volk"], bg: "#f1f5f9", border: "#475569" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Patrizier"), right: L("Adel") }, { left: L("Plebejer"), right: L("Einfaches Volk") }] },
      quiz: { 
        question: L("Wie nannte man den armen Teil der Bürger?"), 
        choices: [L("Plebejer"), L("Patrizier"), L("Kaiser"), L("Senatoren")], 
        answer: L("Plebejer") 
      }
    },
    {
      id: "zwoelf",
      title: L("Zwölftafelgesetz"),
      hint1: L("Die ersten schriftlichen Gesetze Roms."),
      hint2: L("Jeder sollte sie kennen können."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Tafel 1" }, { emoji: "📜", label: "Tafel 12" }] },
      interactive: { type: "gap-fill", text: L("Die Gesetze standen auf __."), gaps: [{ index: 0, options: ["Bronze-Tafeln", "Papier"], correct: 0 }] },
      quiz: { 
        question: L("Warum waren schriftliche Gesetze wichtig?"), 
        choices: [L("Gleiches Recht für alle"), L("Waren sie nicht"), L("Nur zum Lesen"), L("Wegen des Metalls")], 
        answer: L("Gleiches Recht für alle") 
      }
    },
    {
      id: "punisch",
      title: L("Punische Kriege"),
      hint1: L("Rom gegen Karthago."),
      hint2: L("Es ging um die Macht im Mittelmeer."),
      svg: { type: "text-bubbles", items: [{ text: "Rom", color: "#fff", bg: "#dc2626" }, { text: "Karthago", color: "#fff", bg: "#2563eb" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Hannibal"), right: L("Karthago") }, { left: L("Scipio"), right: L("Rom") }] },
      quiz: { 
        question: L("Gegen welche Stadt kämpfte Rom in den Punischen Kriegen?"), 
        choices: [L("Karthago"), L("Athen"), L("Alexandria"), L("Berlin")], 
        answer: L("Karthago") 
      }
    },
    {
      id: "hannibal",
      title: L("Hannibal"),
      hint1: L("Der Feldherr von Karthago."),
      hint2: L("Er zog mit Elefanten über die Alpen."),
      svg: { type: "icon-grid", items: [{ emoji: "🐘", label: "Elefant" }, { emoji: "🏔️", label: "Alpen" }] },
      interactive: { type: "word-order", words: [L("Hannibal"), L("ante"), L("portas")], instruction: L("Berühmter Ausruf!"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Welches Tier nutzte Hannibal für seinen Alpenzug?"), 
        choices: [L("Elefanten"), L("Pferde"), L("Hunde"), L("Löwen")], 
        answer: L("Elefanten") 
      }
    },
    {
      id: "legion",
      title: L("Die Legion"),
      hint1: L("Das römische Heer."),
      hint2: L("Soldaten waren gut organisiert."),
      svg: { type: "sentence-display", words: ["Stark", "und", "diszipliniert"], color: "#991b1b" },
      interactive: { type: "tap-count", tapCount: { emoji: "🛡️", count: 4 }, instruction: L("Zähle die Schilde!") },
      quiz: { 
        question: L("Wie nannte man einen römischen Soldaten?"), 
        choices: [L("Legionär"), L("Ritter"), L("Hoplit"), L("Ninja")], 
        answer: L("Legionär") 
      }
    },
    {
      id: "strassen",
      title: L("Straßenbau"),
      hint1: L("Rom baute feste Straßen durch ganz Europa."),
      hint2: L("Die Via Appia ist sehr berühmt."),
      svg: { type: "two-groups", left: { items: ["Stein", "Straße"], bg: "#f1f5f9", border: "#475569" }, right: { items: ["Rom", "Zentrum"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "gap-fill", text: L("Alle Wege führen nach __."), gaps: [{ index: 0, options: ["Rom", "Athen"], correct: 0 }] },
      quiz: { 
        question: L("Warum baute Rom so gute Straßen?"), 
        choices: [L("Für das Militär"), L("Nur zum Wandern"), L("Für Fahrräder"), L("Waren sie nicht")], 
        answer: L("Für das Militär") 
      }
    },
    {
      id: "forum",
      title: L("Forum Romanum"),
      hint1: L("Das Zentrum des öffentlichen Lebens."),
      hint2: L("Hier gab es Märkte und Tempel."),
      svg: { type: "icon-grid", items: [{ emoji: "🏛️", label: "Tempel" }, { emoji: "🛒", label: "Markt" }] },
      interactive: { type: "word-order", words: [L("Zentrum"), L("der"), L("Stadt")], instruction: L("Was war das Forum?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Was war das Forum Romanum?"), 
        choices: [L("Marktplatz und Zentrum"), L("Ein Wald"), L("Ein Hafen"), L("Ein Schlachtfeld")], 
        answer: L("Marktplatz und Zentrum") 
      }
    },
    {
      id: "gladiatoren",
      title: L("Gladiatoren"),
      hint1: L("Kämpfer in Arenen."),
      hint2: L("Oft waren es Sklaven."),
      svg: { type: "text-bubbles", items: [{ text: "Kampf", color: "#fff", bg: "#475569" }, { text: "Arena", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Netz"), right: L("Retiarier") }, { left: L("Schwert"), right: L("Gladius") }] },
      quiz: { 
        question: L("Wo kämpften Gladiatoren?"), 
        choices: [L("In der Arena"), L("Auf dem Schiff"), L("Im Wald"), L("Gar nicht")], 
        answer: L("In der Arena") 
      }
    },
    {
      id: "caesar",
      title: L("Julius Caesar"),
      hint1: L("Ein mächtiger Feldherr."),
      hint2: L("Er eroberte Gallien."),
      svg: { type: "icon-grid", items: [{ emoji: "🌿", label: "Lorbeer" }, { emoji: "🗡️", label: "Dolch" }] },
      interactive: { type: "word-order", words: [L("Veni"), L("vidi"), L("vici")], instruction: L("Caesars Ausspruch!"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Welches Land eroberte Caesar?"), 
        choices: [L("Gallien"), L("China"), L("Amerika"), L("Griechenland")], 
        answer: L("Gallien") 
      }
    },
    {
      id: "rubikon",
      title: L("Der Rubikon"),
      hint1: L("Ein Fluss in Italien."),
      hint2: L("Caesar überschritt ihn mit seinem Heer."),
      svg: { type: "text-bubbles", items: [{ text: "Fluss", color: "#fff", bg: "#3b82f6" }, { text: "Entscheidung", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "gap-fill", text: L("Die Würfel sind __."), gaps: [{ index: 0, options: ["gefallen", "rund"], correct: 0 }] },
      quiz: { 
        question: L("Was bedeutete das Überschreiten des Rubikon?"), 
        choices: [L("Bürgerkrieg"), L("Frieden"), L("Urlaub"), L("Handel")], 
        answer: L("Bürgerkrieg") 
      }
    },
    {
      id: "triumvirat",
      title: L("Triumvirat"),
      hint1: L("Die Herrschaft von drei Männern."),
      hint2: L("Caesar war einer von ihnen."),
      svg: { type: "two-groups", left: { items: ["Caesar", "Pompeius"], bg: "#dbeafe", border: "#2563eb" }, right: { items: ["Crassus"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "tap-count", tapCount: { emoji: "👤", count: 3 }, instruction: L("Zähle die Männer!") },
      quiz: { 
        question: L("Was bedeutet Triumvirat?"), 
        choices: [L("Drei-Männer-Bund"), L("Königsrat"), L("Volksfest"), L("Krieg")], 
        answer: L("Drei-Männer-Bund") 
      }
    },
    {
      id: "iden",
      title: L("Iden des März"),
      hint1: L("Der Todestag Caesars."),
      hint2: L("Er wurde ermordet."),
      svg: { type: "icon-grid", items: [{ emoji: "🗡️", label: "Mord" }, { emoji: "📅", label: "15. März" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Brutus"), right: L("Verschwörer") }, { left: L("Caesar"), right: L("Opfer") }] },
      quiz: { 
        question: L("Wann wurde Caesar ermordet?"), 
        choices: [L("15. März"), L("1. Januar"), L("4. Juli"), L("24. Dezember")], 
        answer: L("15. März") 
      }
    }
  ]
};

// ─── ISLAND 5: RÖMISCHES KAISERREICH ─────────────────────────────────────────
const I5: IslandSpec = {
  id: "i5",
  title: L("Römisches Kaiserreich"),
  topics: [
    {
      id: "augustus",
      title: L("Augustus"),
      hint1: L("Der erste römische Kaiser."),
      hint2: L("Er brachte Frieden nach Rom."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "Kaiser" }, { emoji: "🕊️", label: "Frieden" }] },
      interactive: { type: "gap-fill", text: L("Augustus hieß früher __."), gaps: [{ index: 0, options: ["Octavian", "Caesar"], correct: 0 }] },
      quiz: { 
        question: L("Wer war der erste Kaiser von Rom?"), 
        choices: [L("Augustus"), L("Caesar"), L("Nero"), L("Trajan")], 
        answer: L("Augustus") 
      }
    },
    {
      id: "pax",
      title: L("Pax Romana"),
      hint1: L("Der römische Friede."),
      hint2: L("Eine lange Zeit der Ruhe im Reich."),
      svg: { type: "text-bubbles", items: [{ text: "Frieden", color: "#fff", bg: "#10b981" }, { text: "Wohlstand", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "word-order", words: [L("Zeit"), L("des"), L("Friedens")], instruction: L("Was ist Pax?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Was bedeutet Pax Romana?"), 
        choices: [L("Römischer Friede"), L("Römischer Krieg"), L("Römische Steuer"), L("Römische Mauer")], 
        answer: L("Römischer Friede") 
      }
    },
    {
      id: "kolosseum",
      title: L("Das Kolosseum"),
      hint1: L("Das größte Amphitheater."),
      hint2: L("Hier fanden Spiele statt."),
      svg: { type: "icon-grid", items: [{ emoji: "🏟️", label: "Arena" }, { emoji: "🐯", label: "Tiere" }] },
      interactive: { type: "tap-count", tapCount: { emoji: "🏢", count: 4 }, instruction: L("Zähle die Etagen!") },
      quiz: { 
        question: L("Wozu diente das Kolosseum?"), 
        choices: [L("Für Unterhaltung"), L("Zum Wohnen"), L("Als Kirche"), L("Als Hafen")], 
        answer: L("Für Unterhaltung") 
      }
    },
    {
      id: "limes",
      title: L("Der Limes"),
      hint1: L("Die Grenze des Reiches."),
      hint2: L("Ein Schutzwall gegen Germanen."),
      svg: { type: "two-groups", left: { items: ["Wachtturm", "Soldat"], bg: "#f1f5f9", border: "#475569" }, right: { items: ["Wall", "Grenze"], bg: "#f1f5f9", border: "#475569" } },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "l", label: L("Limes") }], items: [{ text: L("Turm"), bucketId: "l" }, { text: L("Graben"), bucketId: "l" }], instruction: L("Zuweisen!") },
      quiz: { 
        question: L("Was war der Limes?"), 
        choices: [L("Ein Grenzwall"), L("Ein Berg"), L("Ein Fluss"), L("Ein Marktplatz")], 
        answer: L("Ein Grenzwall") 
      }
    },
    {
      id: "provinzen",
      title: L("Die Provinzen"),
      hint1: L("Gebiete außerhalb Italiens."),
      hint2: L("Sie wurden von Statthaltern regiert."),
      svg: { type: "text-bubbles", items: [{ text: "Gallien", color: "#fff", bg: "#6366f1" }, { text: "Ägypten", color: "#fff", bg: "#fbbf24" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Provinz"), right: L("Landesteil") }, { left: L("Statthalter"), right: L("Chef") }] },
      quiz: { 
        question: L("Wie nannte man die Gebiete des Römischen Reiches?"), 
        choices: [L("Provinzen"), L("Kantone"), L("Inseln"), L("Dörfer")], 
        answer: L("Provinzen") 
      }
    },
    {
      id: "brot",
      title: L("Brot & Spiele"),
      hint1: L("Panem et Circenses."),
      hint2: L("Das Volk wurde mit Essen und Unterhaltung beruhigt."),
      svg: { type: "icon-grid", items: [{ emoji: "🥖", label: "Brot" }, { emoji: "🏇", label: "Rennen" }] },
      interactive: { type: "gap-fill", text: L("Das Volk wollte Brot und __."), gaps: [{ index: 0, options: ["Spiele", "Arbeit"], correct: 0 }] },
      quiz: { 
        question: L("Wozu diente 'Brot und Spiele'?"), 
        choices: [L("Beruhigung des Volkes"), L("Ernährung"), L("Nur zum Spaß"), L("Gegen Hunger")], 
        answer: L("Beruhigung des Volkes") 
      }
    },
    {
      id: "thermen",
      title: L("Thermen"),
      hint1: L("Römische Badehäuser."),
      hint2: L("Hier traf man sich zur Entspannung."),
      svg: { type: "text-bubbles", items: [{ text: "Wasser", color: "#fff", bg: "#0ea5e9" }, { text: "Dampf", color: "#fff", bg: "#cbd5e1" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Warm"), right: L("Caldarium") }, { left: L("Kalt"), right: L("Frigidarium") }] },
      quiz: { 
        question: L("Was war eine Therme?"), 
        choices: [L("Ein Badehaus"), L("Ein Kloster"), L("Eine Schule"), L("Ein Gefängnis")], 
        answer: L("Ein Badehaus") 
      }
    },
    {
      id: "aqua",
      title: L("Aquädukte"),
      hint1: L("Wasserleitungen."),
      hint2: L("Sie brachten frisches Wasser in die Städte."),
      svg: { type: "two-groups", left: { items: ["Bogen", "Brücke"], bg: "#f1f5f9", border: "#475569" }, right: { items: ["Wasser", "Stadt"], bg: "#dbeafe", border: "#2563eb" } },
      interactive: { type: "gap-fill", text: L("Aquädukte leiteten __."), gaps: [{ index: 0, options: ["Wasser", "Gold"], correct: 0 }] },
      quiz: { 
        question: L("Was war die Aufgabe eines Aquädukts?"), 
        choices: [L("Wassertransport"), L("Post"), L("Militär"), L("Handel")], 
        answer: L("Wassertransport") 
      }
    },
    {
      id: "nero",
      title: L("Kaiser Nero"),
      hint1: L("Ein grausamer Kaiser."),
      hint2: L("Berühmt durch den Brand Roms."),
      svg: { type: "icon-grid", items: [{ emoji: "🔥", label: "Feuer" }, { emoji: "🎻", label: "Leier" }] },
      interactive: { type: "word-order", words: [L("Brand"), L("von"), L("Rom")], instruction: L("Neros Tat?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Was soll Nero während des Brandes getan haben?"), 
        choices: [L("Musiziert"), L("Geweint"), L("Gelöscht"), L("Geschlafen")], 
        answer: L("Musiziert") 
      }
    },
    {
      id: "pompeji",
      title: L("Pompeji"),
      hint1: L("Verschüttet durch den Vesuv."),
      hint2: L("Eine Zeitkapsel der Antike."),
      svg: { type: "text-bubbles", items: [{ text: "Vulkan", color: "#fff", bg: "#ef4444" }, { text: "Asche", color: "#fff", bg: "#64748b" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Vesuv"), right: L("Vulkan") }, { left: L("Asche"), right: L("Decke") }] },
      quiz: { 
        question: L("Wodurch wurde Pompeji zerstört?"), 
        choices: [L("Vulkanausbruch"), L("Feuer"), L("Krieg"), L("Erdbeben")], 
        answer: L("Vulkanausbruch") 
      }
    },
    {
      id: "christen",
      title: L("Christen"),
      hint1: L("Anfangs verfolgt."),
      hint2: L("Später wurde es Staatsreligion."),
      svg: { type: "icon-grid", items: [{ emoji: "✝️", label: "Glaube" }, { emoji: "🐟", label: "Fisch" }] },
      interactive: { type: "word-order", words: [L("Glaube"), L("an"), L("einen"), L("Gott")], instruction: L("Was ist das?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Welcher Kaiser erlaubte das Christentum?"), 
        choices: [L("Konstantin"), L("Nero"), L("Augustus"), L("Caesar")], 
        answer: L("Konstantin") 
      }
    },
    {
      id: "konstantinopel",
      title: L("Konstantinopel"),
      hint1: L("Die neue Hauptstadt im Osten."),
      hint2: L("Heute Istanbul."),
      svg: { type: "word-display", word: "BYZANZ", color: "#0ea5e9" },
      interactive: { type: "gap-fill", text: L("Die Stadt lag am __."), gaps: [{ index: 0, options: ["Bosporus", "Rhein"], correct: 0 }] },
      quiz: { 
        question: L("Wer gründete Konstantinopel?"), 
        choices: [L("Konstantin"), L("Augustus"), L("Alexander"), L("Nero")], 
        answer: L("Konstantin") 
      }
    },
    {
      id: "teilung",
      title: L("Reichsteilung"),
      hint1: L("395 n.Chr. wurde das Reich geteilt."),
      hint2: L("Es gab West- und Ostrom."),
      svg: { type: "two-groups", left: { items: ["Westrom", "Rom"], bg: "#fee2e2", border: "#ef4444" }, right: { items: ["Ostrom", "Byzanz"], bg: "#dcfce7", border: "#22c55e" } },
      interactive: { type: "tap-count", tapCount: { emoji: "🗺️", count: 2 }, instruction: L("Wie viele Teile?") },
      quiz: { 
        question: L("Wann wurde das Römische Reich geteilt?"), 
        choices: [L("395 n.Chr."), L("753 v.Chr."), L("476 n.Chr."), L("1914")], 
        answer: L("395 n.Chr.") 
      }
    },
    {
      id: "migration",
      title: L("Völkerwanderung"),
      hint1: L("Völker zogen durch Europa."),
      hint2: L("Der Druck der Hunnen war der Auslöser."),
      svg: { type: "icon-grid", items: [{ emoji: "🐎", label: "Hunnen" }, { emoji: "🏹", label: "Flucht" }] },
      interactive: { type: "word-order", words: [L("Hunnen"), L("treiben"), L("Völker"), L("an")], instruction: L("Was passierte?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Wer löste die Völkerwanderung aus?"), 
        choices: [L("Hunnen"), L("Griechen"), L("Ägypter"), L("Amerikaner")], 
        answer: L("Hunnen") 
      }
    },
    {
      id: "untergang",
      title: L("Untergang"),
      hint1: L("476 n.Chr. endete das Weströmische Reich."),
      hint2: L("Der letzte Kaiser wurde abgesetzt."),
      svg: { type: "sentence-display", words: ["Das", "Ende", "von", "Rom"], color: "#000" },
      interactive: { type: "gap-fill", text: L("Jahr des Untergangs: __."), gaps: [{ index: 0, options: ["476", "753", "1945"], correct: 0 }] },
      quiz: { 
        question: L("Welcher Teil Roms ging 476 n.Chr. unter?"), 
        choices: [L("Westrom"), L("Ostrom"), L("Ganz Rom"), L("Nur der Vatikan")], 
        answer: L("Westrom") 
      }
    }
  ]
};

// ─── ISLAND 6: DIE GERMANEN ─────────────────────────────────────────────────
const I6: IslandSpec = {
  id: "i6",
  title: L("Die Germanen"),
  topics: [
    {
      id: "staemme",
      title: L("Die Stämme"),
      hint1: L("Germanen waren kein einheitliches Volk."),
      hint2: L("Es gab viele Stämme wie die Goten."),
      svg: { type: "text-bubbles", items: [{ text: "Sachsen", color: "#fff", bg: "#7c2d12" }, { text: "Franken", color: "#fff", bg: "#1e40af" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Franken"), right: L("Stamm") }, { left: L("Goten"), right: L("Stamm") }] },
      quiz: { 
        question: L("Waren die Germanen ein einheitliches Volk?"), 
        choices: [L("Nein, viele Stämme"), L("Ja, ein Volk"), L("Nur eine Armee"), L("Waren sie nicht")], 
        answer: L("Nein, viele Stämme") 
      }
    },
    {
      id: "thing",
      title: L("Das Thing"),
      hint1: L("Die Volksversammlung der Germanen."),
      hint2: L("Hier wurden Gesetze beschlossen."),
      svg: { type: "icon-grid", items: [{ emoji: "🌳", label: "Baum" }, { emoji: "🗣️", label: "Rat" }] },
      interactive: { type: "word-order", words: [L("Rat"), L("unter"), L("der"), L("Eiche")], instruction: L("Wo tagte das Thing?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Was war das Thing?"), 
        choices: [L("Eine Versammlung"), L("Ein Haus"), L("Ein Gott"), L("Ein Schwert")], 
        answer: L("Eine Versammlung") 
      }
    },
    {
      id: "runen",
      title: L("Runen"),
      hint1: L("Die Schrift der Germanen."),
      hint2: L("Eingeritzt in Stein oder Holz."),
      svg: { type: "letter-circles", letters: ["ᚠ", "ᚢ", "ᚦ", "ᚩ", "ᚱ"], color: "#1e40af" },
      interactive: { type: "word-order", words: [L("Geheime"), L("Zeichen"), L("Runen")], instruction: L("Was sind Runen?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Worauf schrieben Germanen oft ihre Runen?"), 
        choices: [L("Stein und Holz"), L("Papier"), L("Sand"), L("Wasser")], 
        answer: L("Stein und Holz") 
      }
    },
    {
      id: "arminius",
      title: L("Arminius"),
      hint1: L("Ein Anführer der Cherusker."),
      hint2: L("Er besiegte die Römer."),
      svg: { type: "icon-grid", items: [{ emoji: "🛡️", label: "Schutz" }, { emoji: "⚔️", label: "Sieg" }] },
      interactive: { type: "gap-fill", text: L("Arminius besiegte den Römer __."), gaps: [{ index: 0, options: ["Varus", "Caesar"], correct: 0 }] },
      quiz: { 
        question: L("Welche berühmte Schlacht gewann Arminius?"), 
        choices: [L("Varusschlacht"), L("Waterloo"), L("Marathon"), L("Leipzig")], 
        answer: L("Varusschlacht") 
      }
    },
    {
      id: "walhalla",
      title: L("Walhalla"),
      hint1: L("Der Ruheort gefallener Krieger."),
      hint2: L("In den Hallen Odins."),
      svg: { type: "text-bubbles", items: [{ text: "Helden", color: "#fff", bg: "#f59e0b" }, { text: "Halle", color: "#fff", bg: "#fbbf24" }] },
      interactive: { type: "word-order", words: [L("Halle"), L("der"), L("Gefallenen")], instruction: L("Was ist Walhalla?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wer durfte nach Walhalla?"), 
        choices: [L("Tapfere Krieger"), L("Alle"), L("Nur Bauern"), L("Niemand")], 
        answer: L("Tapfere Krieger") 
      }
    },
    {
      id: "wotan",
      title: L("Gott Wotan"),
      hint1: L("Der höchste Gott (Odin)."),
      hint2: L("Gott des Wissens und Krieges."),
      svg: { type: "icon-grid", items: [{ emoji: "👁️", label: "Einäugig" }, { emoji: "🐎", label: "Sleipnir" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Wotan"), right: L("Odin") }, { left: L("Mittwoch"), right: L("Wotanstag") }] },
      quiz: { 
        question: L("Wer war der Göttervater der Germanen?"), 
        choices: [L("Wotan"), L("Thor"), L("Zeus"), L("Ra")], 
        answer: L("Wotan") 
      }
    },
    {
      id: "thor",
      title: L("Gott Thor"),
      hint1: L("Der Gott des Donners."),
      hint2: L("Sein Symbol ist der Hammer."),
      svg: { type: "text-bubbles", items: [{ text: "Donner", color: "#fff", bg: "#475569" }, { text: "Hammer", color: "#fff", bg: "#94a3b8" }] },
      interactive: { type: "gap-fill", text: L("Der Hammer heißt __."), gaps: [{ index: 0, options: ["Mjölnir", "Blitz"], correct: 0 }] },
      quiz: { 
        question: L("Welches Wetter machte Thor?"), 
        choices: [L("Gewitter"), L("Sonnenschein"), L("Schnee"), L("Nebel")], 
        answer: L("Gewitter") 
      }
    },
    {
      id: "freya",
      title: L("Göttin Freya"),
      hint1: L("Göttin der Liebe und Fruchtbarkeit."),
      hint2: L("Sehr schön und mächtig."),
      svg: { type: "icon-grid", items: [{ emoji: "🐱", label: "Katzen" }, { emoji: "❤️", label: "Liebe" }] },
      interactive: { type: "word-order", words: [L("Göttin"), L("der"), L("Liebe")], instruction: L("Wer war Freya?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Nach wem ist der Freitag benannt?"), 
        choices: [L("Freya"), L("Frühling"), L("Freitag"), L("Frieden")], 
        answer: L("Freya") 
      }
    },
    {
      id: "siedlung",
      title: L("Siedlungen"),
      hint1: L("Germanen lebten in Dörfern."),
      hint2: L("Es gab keine großen Städte."),
      svg: { type: "two-groups", left: { items: ["Dorf", "Haus"], bg: "#dcfce7", border: "#16a34a" }, right: { items: ["Stadt", "Rom"], bg: "#fee2e2", border: "#dc2626" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Zaun"), right: L("Schutz") }, { left: L("Wald"), right: L("Nähe") }] },
      quiz: { 
        question: L("Wo lebten die meisten Germanen?"), 
        choices: [L("In Dörfern"), L("In Städten"), L("In Höhlen"), L("Im Wasser")], 
        answer: L("In Dörfern") 
      }
    },
    {
      id: "handwerk",
      title: L("Handwerk"),
      hint1: L("Gute Schmiede und Weber."),
      hint2: L("Sie machten Schmuck und Waffen."),
      svg: { type: "icon-grid", items: [{ emoji: "🔨", label: "Schmied" }, { emoji: "🧵", label: "Weben" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Eisen"), right: L("Schwert") }, { left: L("Wolle"), right: L("Kleidung") }] },
      quiz: { 
        question: L("Was konnten germanische Schmiede besonders gut?"), 
        choices: [L("Waffen schmieden"), L("Bücher drucken"), L("Autos bauen"), L("Fliegen")], 
        answer: L("Waffen schmieden") 
      }
    },
    {
      id: "krieger",
      title: L("Krieger"),
      hint1: L("Tapferkeit war sehr wichtig."),
      hint2: L("Sie folgten ihrem Anführer."),
      svg: { type: "two-groups", left: { items: ["Schild", "Speer"], bg: "#fee2e2", border: "#dc2626" }, right: { items: ["Buch"], bg: "#f1f5f9", border: "#475569" } },
      interactive: { type: "gap-fill", text: L("Ein Krieger war seinem Herrn __."), gaps: [{ index: 0, options: ["treu", "egal"], correct: 0 }] },
      quiz: { 
        question: L("Was war die Hauptaufgabe eines Kriegers?"), 
        choices: [L("Schutz und Kampf"), L("Kochen"), L("Schreiben"), L("Singen")], 
        answer: L("Schutz und Kampf") 
      }
    },
    {
      id: "tacitus",
      title: L("Tacitus"),
      hint1: L("Ein römischer Schreiber."),
      hint2: L("Er schrieb das Buch 'Germania'."),
      svg: { type: "word-display", word: "GERMANIA", color: "#1e3a8a" },
      interactive: { type: "gap-fill", text: L("Tacitus war ein __."), gaps: [{ index: 0, options: ["Römer", "Germane"], correct: 0 }] },
      quiz: { 
        question: L("Woher wissen wir viel über Germanen?"), 
        choices: [L("Von römischen Berichten"), L("Durch Fotos"), L("Von germanischen Büchern"), L("Gar nicht")], 
        answer: L("Von römischen Berichten") 
      }
    },
    {
      id: "langhaus",
      title: L("Das Langhaus"),
      hint1: L("Ein großes Haus für Mensch und Tier."),
      hint2: L("Unter einem Dach."),
      svg: { type: "two-groups", left: { items: ["Vorne", "Menschen"], bg: "#fef3c7", border: "#d97706" }, right: { items: ["Hinten", "Tiere"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "tap-count", tapCount: { emoji: "🏠", count: 1 }, instruction: L("Zähle die Häuser!") },
      quiz: { 
        question: L("Wer lebte im Langhaus?"), 
        choices: [L("Menschen und Tiere"), L("Nur Tiere"), L("Nur Krieger"), L("Nur Götter")], 
        answer: L("Menschen und Tiere") 
      }
    },
    {
      id: "landwirtschaft",
      title: L("Landwirtschaft"),
      hint1: L("Sie bauten Getreide an."),
      hint2: L("Sie hielten Rinder und Schweine."),
      svg: { type: "icon-grid", items: [{ emoji: "🌾", label: "Korn" }, { emoji: "🐄", label: "Rind" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "f", label: L("Feld") }], items: [{ text: L("Gerste"), bucketId: "f" }, { text: L("Hafer"), bucketId: "f" }], instruction: L("Zuweisen!") },
      quiz: { 
        question: L("Wovon lebten die meisten Germanen?"), 
        choices: [L("Von der Landwirtschaft"), L("Vom Raub allein"), L("Vom Handel mit China"), L("Von Fabriken")], 
        answer: L("Von der Landwirtschaft") 
      }
    },
    {
      id: "handel",
      title: L("Handel mit Rom"),
      hint1: L("Germanen tauschten Waren."),
      hint2: L("Bernstein gegen Glas und Wein."),
      svg: { type: "two-groups", left: { items: ["Fell", "Bernstein"], bg: "#fef3c7", border: "#d97706" }, right: { items: ["Wein", "Glas"], bg: "#dbeafe", border: "#2563eb" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Bernstein"), right: L("Germanen") }, { left: L("Glas"), right: L("Römer") }] },
      quiz: { 
        question: L("Welches 'Gold des Nordens' war beliebt?"), 
        choices: [L("Bernstein"), L("Salz"), L("Holz"), L("Eisen")], 
        answer: L("Bernstein") 
      }
    }
  ]
};

// ─── ISLAND 7: VÖLKERWANDERUNG ──────────────────────────────────────────────
const I7: IslandSpec = {
  id: "i7",
  title: L("Völkerwanderung"),
  topics: [
    {
      id: "attila",
      title: L("Attila"),
      hint1: L("König der Hunnen."),
      hint2: L("Genannt 'Geißel Gottes'."),
      svg: { type: "icon-grid", items: [{ emoji: "🏇", label: "Reiter" }, { emoji: "🏹", label: "Bogen" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Attila"), right: L("Hunnen") }, { left: L("König"), right: L("Anführer") }] },
      quiz: { 
        question: L("Wer war Attila?"), 
        choices: [L("König der Hunnen"), L("Römischer Kaiser"), L("Gott"), L("Schreiber")], 
        answer: L("König der Hunnen") 
      }
    },
    {
      id: "alarich",
      title: L("Alarich"),
      hint1: L("König der Westgoten."),
      hint2: L("Er plünderte Rom."),
      svg: { type: "word-display", word: "WESTGOTEN", color: "#991b1b" },
      interactive: { type: "gap-fill", text: L("Alarich eroberte __."), gaps: [{ index: 0, options: ["Rom", "Athen"], correct: 0 }] },
      quiz: { 
        question: L("Was tat Alarich im Jahr 410?"), 
        choices: [L("Rom plündern"), L("Eine Stadt bauen"), L("Frieden schließen"), L("Ein Buch schreiben")], 
        answer: L("Rom plündern") 
      }
    },
    {
      id: "vandalen",
      title: L("Die Vandalen"),
      hint1: L("Ein Volk auf der Wanderung."),
      hint2: L("Sie zogen bis nach Afrika."),
      svg: { type: "text-bubbles", items: [{ text: "Wanderung", color: "#fff", bg: "#475569" }, { text: "Schiffe", color: "#fff", bg: "#0ea5e9" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Vandalismus"), right: L("Zerstörung") }, { left: L("Afrika"), right: L("Ziel") }] },
      quiz: { 
        question: L("Wohin zogen die Vandalen am Ende?"), 
        choices: [L("Nach Nordafrika"), L("Nach England"), L("Nach Asien"), L("Nach Amerika")], 
        answer: L("Nach Nordafrika") 
      }
    },
    {
      id: "ostgoten",
      title: L("Die Ostgoten"),
      hint1: L("Gegründet von Theoderich."),
      hint2: L("Sie herrschten in Italien."),
      svg: { type: "two-groups", left: { items: ["Theoderich", "König"], bg: "#f1f5f9", border: "#475569" }, right: { items: ["Ravenna", "Residenz"], bg: "#f1f5f9", border: "#475569" } },
      interactive: { type: "gap-fill", text: L("Der König hieß __."), gaps: [{ index: 0, options: ["Theoderich", "Karl"], correct: 0 }] },
      quiz: { 
        question: L("Welches heutige Land beherrschten die Ostgoten?"), 
        choices: [L("Italien"), L("Spanien"), L("Polen"), L("Schweden")], 
        answer: L("Italien") 
      }
    },
    {
      id: "pluenderung",
      title: L("Plünderung Roms"),
      hint1: L("Ein Schock für die Welt."),
      hint2: L("Rom war nicht mehr sicher."),
      svg: { type: "icon-grid", items: [{ emoji: "🔥", label: "Feuer" }, { emoji: "🪙", label: "Beute" }] },
      interactive: { type: "word-order", words: [L("Rom"), L("ist"), L("gefallen")], instruction: L("Was sagte man?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wann wurde Rom das erste Mal geplündert?"), 
        choices: [L("410 n.Chr."), L("753 v.Chr."), L("1914"), L("800 n.Chr.")], 
        answer: L("410 n.Chr.") 
      }
    },
    {
      id: "ende_westrom",
      title: L("Ende Westroms"),
      hint1: L("476 wurde der letzte Kaiser abgesetzt."),
      hint2: L("Das Ende der Antike."),
      svg: { type: "sentence-display", words: ["Ende", "einer", "Epoche"], color: "#000" },
      interactive: { type: "tap-count", tapCount: { emoji: "👑", count: 1 }, instruction: L("Zähle die Kaiser!") },
      quiz: { 
        question: L("Wer setzte den letzten Kaiser ab?"), 
        choices: [L("Odoaker"), L("Attila"), L("Caesar"), L("Napoleon")], 
        answer: L("Odoaker") 
      }
    },
    {
      id: "odoaker",
      title: L("Odoaker"),
      hint1: L("Ein germanischer Heerführer."),
      hint2: L("Er nannte sich König von Italien."),
      svg: { type: "text-bubbles", items: [{ text: "König", color: "#fff", bg: "#1e3a8a" }, { text: "Soldat", color: "#fff", bg: "#475569" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Odoaker"), right: L("Germanen") }, { left: L("Romulus"), right: L("Letzter Kaiser") }] },
      quiz: { 
        question: L("Wer wurde König von Italien nach 476?"), 
        choices: [L("Odoaker"), L("Augustus"), L("Karl"), L("Arthur")], 
        answer: L("Odoaker") 
      }
    },
    {
      id: "franken",
      title: L("Die Franken"),
      hint1: L("Ein starker germanischer Stamm."),
      hint2: L("Sie gründeten ein großes Reich."),
      svg: { type: "icon-grid", items: [{ emoji: "🛡️", label: "Schutz" }, { emoji: "🏰", label: "Reich" }] },
      interactive: { type: "gap-fill", text: L("Aus dem Frankenreich wurde __."), gaps: [{ index: 0, options: ["Frankreich", "England"], correct: 0 }] },
      quiz: { 
        question: L("Wer war ein früher Frankenkönig?"), 
        choices: [L("Chlodwig"), L("Attila"), L("Alarich"), L("Hannibal")], 
        answer: L("Chlodwig") 
      }
    },
    {
      id: "migration_reasons",
      title: L("Flucht & Migration"),
      hint1: L("Warum wanderten die Völker?"),
      hint2: L("Klima, Hunger und Feinde."),
      svg: { type: "two-groups", left: { items: ["Hunger", "Push"], bg: "#fee2e2", border: "#dc2626" }, right: { items: ["Land", "Pull"], bg: "#dcfce7", border: "#16a34a" } },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "g", label: L("Gründe") }], items: [{ text: L("Kälte"), bucketId: "g" }, { text: L("Krieg"), bucketId: "g" }], instruction: L("Zuweisen!") },
      quiz: { 
        question: L("Was war ein Grund für die Wanderung?"), 
        choices: [L("Hunger und Kälte"), L("Urlaubslust"), L("Langeweile"), L("Reiseangebote")], 
        answer: L("Hunger und Kälte") 
      }
    },
    {
      id: "ausloeser",
      title: L("Auslöser"),
      hint1: L("Der Einfall der Hunnen."),
      hint2: L("Ein Domino-Effekt begann."),
      svg: { type: "icon-grid", items: [{ emoji: "🏇", label: "Hunnen" }, { emoji: "🏃", label: "Flucht" }] },
      interactive: { type: "word-order", words: [L("Hunnen"), L("kommen"), L("Germanen"), L("gehen")], instruction: L("Was geschah?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Welches Reitervolk löste alles aus?"), 
        choices: [L("Hunnen"), L("Mongolen"), L("Römer"), L("Griechen")], 
        answer: L("Hunnen") 
      }
    },
    {
      id: "folgen",
      title: L("Folgen"),
      hint1: L("Die Karte Europas änderte sich."),
      hint2: L("Sprachen und Reiche entstanden neu."),
      svg: { type: "text-bubbles", items: [{ text: "Grenzen", color: "#fff", bg: "#9333ea" }, { text: "Sprache", color: "#fff", bg: "#7c3aed" }] },
      interactive: { type: "gap-fill", text: L("Es entstanden neue __."), gaps: [{ index: 0, options: ["Königreiche", "Pyramiden"], correct: 0 }] },
      quiz: { 
        question: L("Was passierte mit Europa?"), 
        choices: [L("Neue Reiche entstanden"), L("Es wurde eine Wüste"), L("Es blieb gleich"), L("Es versank im Meer")], 
        answer: L("Neue Reiche entstanden") 
      }
    },
    {
      id: "uebergang",
      title: L("Übergang"),
      hint1: L("Von der Antike zum Mittelalter."),
      hint2: L("Eine zeit des Wandels."),
      svg: { type: "two-groups", left: { items: ["Antike", "Alt"], bg: "#f1f5f9", border: "#475569" }, right: { items: ["Mittelalter", "Neu"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "word-order", words: [L("Ende"), L("der"), L("Antike")], instruction: L("Was geschah?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Welche Epoche folgt auf die Antike?"), 
        choices: [L("Mittelalter"), L("Steinzeit"), L("Neuzeit"), L("Gegenwart")], 
        answer: L("Mittelalter") 
      }
    },
    {
      id: "kirche",
      title: L("Kirchenrolle"),
      hint1: L("Die Kirche blieb stabil."),
      hint2: L("Sie bewahrte das Wissen."),
      svg: { type: "icon-grid", items: [{ emoji: "⛪", label: "Kirche" }, { emoji: "📜", label: "Wissen" }] },
      interactive: { type: "gap-fill", text: L("Die Kirche sprach __."), gaps: [{ index: 0, options: ["Latein", "Deutsch"], correct: 0 }] },
      quiz: { 
        question: L("Was tat die Kirche während der Wanderung?"), 
        choices: [L("Wissen bewahren"), L("Krieg führen"), L("Verschwinden"), L("Häuser bauen")], 
        answer: L("Wissen bewahren") 
      }
    },
    {
      id: "kulturwandel",
      title: L("Kulturwandel"),
      hint1: L("Römische und germanische Kultur mischten sich."),
      hint2: L("Neue Traditionen entstanden."),
      svg: { type: "text-bubbles", items: [{ text: "Mix", color: "#fff", bg: "#db2777" }, { text: "Neu", color: "#fff", bg: "#be185d" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Römer"), right: L("Städte") }, { left: L("Germanen"), right: L("Dörfer") }] },
      quiz: { 
        question: L("Was passierte mit den Kulturen?"), 
        choices: [L("Sie mischten sich"), L("Sie blieben getrennt"), L("Eine verschwand"), L("Nichts")], 
        answer: L("Sie mischten sich") 
      }
    },
    {
      id: "langobarden",
      title: L("Die Langobarden"),
      hint1: L("Ein Volk in Norditalien."),
      hint2: L("Sie gaben der Lombardei ihren Namen."),
      svg: { type: "word-display", word: "LANGBART", color: "#15803d" },
      interactive: { type: "gap-fill", text: L("Name bedeutet __."), gaps: [{ index: 0, options: ["Langbart", "Langbein"], correct: 0 }] },
      quiz: { 
        question: L("Woher kommt der Name Lombardei?"), 
        choices: [L("Vom Volk der Langobarden"), L("Vom Berg"), L("Vom Meer"), L("Vom Kaiser")], 
        answer: L("Vom Volk der Langobarden") 
      }
    }
  ]
};

// ─── ISLAND 8: ÜBERGANG ZUM MITTELALTER ─────────────────────────────────────
const I8: IslandSpec = {
  id: "i8",
  title: L("Übergang zum Mittelalter"),
  topics: [
    {
      id: "chlodwig",
      title: L("König Chlodwig"),
      hint1: L("Ein mächtiger Frankenkönig."),
      hint2: L("Er einte die fränkischen Stämme."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "Macht" }, { emoji: "🛡️", label: "Franken" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Chlodwig"), right: L("Merowinger") }, { left: L("Reich"), right: L("Einigung") }] },
      quiz: { 
        question: L("Welche Dynastie gründete Chlodwig?"), 
        choices: [L("Merowinger"), L("Karolinger"), L("Habsburger"), L("Römer")], 
        answer: L("Merowinger") 
      }
    },
    {
      id: "taufe",
      title: L("Die Taufe"),
      hint1: L("Chlodwig wurde Christ."),
      hint2: L("Das war wichtig für sein Reich."),
      svg: { type: "text-bubbles", items: [{ text: "Glaube", color: "#fff", bg: "#3b82f6" }, { text: "Taufe", color: "#fff", bg: "#60a5fa" }] },
      interactive: { type: "gap-fill", text: L("Chlodwig wurde __."), gaps: [{ index: 0, options: ["katholisch", "muslimisch"], correct: 0 }] },
      quiz: { 
        question: L("Warum ließ sich Chlodwig taufen?"), 
        choices: [L("Um Macht zu festigen"), L("Aus Versehen"), L("Er wollte Urlaub"), L("Gar nicht")], 
        answer: L("Um Macht zu festigen") 
      }
    },
    {
      id: "missionierung",
      title: L("Missionierung"),
      hint1: L("Die Verbreitung des Christentums."),
      hint2: L("Mönche zogen durch das Land."),
      svg: { type: "icon-grid", items: [{ emoji: "⛪", label: "Glaube" }, { emoji: "🚶", label: "Reise" }] },
      interactive: { type: "word-order", words: [L("Glauben"), L("in"), L("die"), L("Welt")], instruction: L("Was ist Mission?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Was machten Missionare?"), 
        choices: [L("Religion verbreiten"), L("Häuser bauen"), L("Handel"), L("Krieg führen")], 
        answer: L("Religion verbreiten") 
      }
    },
    {
      id: "kloester",
      title: L("Klöster"),
      hint1: L("Orte des Gebets und der Arbeit."),
      hint2: L("Zentren des Wissens."),
      svg: { type: "two-groups", left: { items: ["Beten", "Ora"], bg: "#ede9fe", border: "#7c3aed" }, right: { items: ["Arbeiten", "Labora"], bg: "#dcfce7", border: "#16a34a" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Mönch"), right: L("Kloster") }, { left: L("Nonne"), right: L("Kloster") }] },
      quiz: { 
        question: L("Was war die Hauptaufgabe im Kloster?"), 
        choices: [L("Beten und Arbeiten"), L("Nur Schlafen"), L("Kriegstraining"), L("Handel")], 
        answer: L("Beten und Arbeiten") 
      }
    },
    {
      id: "moenche",
      title: L("Mönche"),
      hint1: L("Sie lebten nach festen Regeln."),
      hint2: L("Benedikt von Nursia schrieb Regeln."),
      svg: { type: "text-bubbles", items: [{ text: "Regel", color: "#fff", bg: "#475569" }, { text: "Stille", color: "#fff", bg: "#94a3b8" }] },
      interactive: { type: "gap-fill", text: L("Ein bekannter Mönch war __."), gaps: [{ index: 0, options: ["Benedikt", "Caesar"], correct: 0 }] },
      quiz: { 
        question: L("Wie lebten Mönche?"), 
        choices: [L("Nach Regeln"), L("Völlig frei"), L("In Städten"), L("Auf Schiffen")], 
        answer: L("Nach Regeln") 
      }
    },
    {
      id: "schreibstuben",
      title: L("Schreibstuben"),
      hint1: L("Bücher wurden von Hand kopiert."),
      hint2: L("Sehr mühsame Arbeit."),
      svg: { type: "icon-grid", items: [{ emoji: "✒️", label: "Feder" }, { emoji: "📖", label: "Buch" }] },
      interactive: { type: "word-order", words: [L("Buch"), L("von"), L("Hand")], instruction: L("Wie entstand ein Buch?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wo wurden Bücher kopiert?"), 
        choices: [L("In der Schreibstube"), L("In der Fabrik"), L("Im Wald"), L("Gar nicht")], 
        answer: L("In der Schreibstube") 
      }
    },
    {
      id: "bildung",
      title: L("Bildung"),
      hint1: L("Nur wenige konnten lesen."),
      hint2: L("Kloster-Schulen waren wichtig."),
      svg: { type: "word-display", word: "LESEN", color: "#10b981" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Mönche"), right: L("Lesen") }, { left: L("Bauern"), right: L("Feldarbeit") }] },
      quiz: { 
        question: L("Wer konnte im frühen Mittelalter meist lesen?"), 
        choices: [L("Mönche und Priester"), L("Alle"), L("Nur Bauern"), L("Niemand")], 
        answer: L("Mönche und Priester") 
      }
    },
    {
      id: "land_ma",
      title: L("Landwirtschaft"),
      hint1: L("Die Basis des Lebens."),
      hint2: L("Fast alle waren Bauern."),
      svg: { type: "icon-grid", items: [{ emoji: "🌾", label: "Feld" }, { emoji: "🐂", label: "Ochse" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "b", label: L("Bauer") }], items: [{ text: L("Pflug"), bucketId: "b" }, { text: L("Sense"), bucketId: "b" }], instruction: L("Zuweisen!") },
      quiz: { 
        question: L("Was war der wichtigste Beruf?"), 
        choices: [L("Bauer"), L("Ritter"), L("Händler"), L("Seefahrer")], 
        answer: L("Bauer") 
      }
    },
    {
      id: "grundherrschaft",
      title: L("Grundherrschaft"),
      hint1: L("Der Herr besitzt das Land."),
      hint2: L("Bauern arbeiten für ihn."),
      svg: { type: "two-groups", left: { items: ["Grundherr", "Schutz"], bg: "#f1f5f9", border: "#475569" }, right: { items: ["Bauer", "Arbeit"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "gap-fill", text: L("Der Herr gab den Bauern __."), gaps: [{ index: 0, options: ["Schutz", "Gold"], correct: 0 }] },
      quiz: { 
        question: L("Was mussten Bauern dem Herrn geben?"), 
        choices: [L("Abgaben und Frondienst"), L("Nichts"), L("Blumen"), L("Geschenke")], 
        answer: L("Abgaben und Frondienst") 
      }
    },
    {
      id: "dorf",
      title: L("Dorfgemeinschaft"),
      hint1: L("Menschen halfen sich gegenseitig."),
      hint2: L("Ein Dorf war fast autark."),
      svg: { type: "text-bubbles", items: [{ text: "Dorf", color: "#fff", bg: "#16a34a" }, { text: "Hilfe", color: "#fff", bg: "#22c55e" }] },
      interactive: { type: "word-order", words: [L("Zusammenhalt"), L("im"), L("Dorf")], instruction: L("Was war wichtig?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wie lebten die Menschen im Dorf?"), 
        choices: [L("Eng zusammen"), L("Jeder für sich"), L("In Hochhäusern"), L("In Zelten")], 
        answer: L("Eng zusammen") 
      }
    },
    {
      id: "dreifeld",
      title: L("Dreifelderwirtschaft"),
      hint1: L("Ein neues System der Landwirtschaft."),
      hint2: L("Brache, Winter- und Sommergetreide."),
      svg: { type: "icon-grid", items: [{ emoji: "1️⃣", label: "Winter" }, { emoji: "2️⃣", label: "Sommer" }, { emoji: "3️⃣", label: "Pause" }] },
      interactive: { type: "tap-count", tapCount: { emoji: "🌾", count: 3 }, instruction: L("Zähle die Felder!") },
      quiz: { 
        question: L("Was war der Vorteil der Dreifelderwirtschaft?"), 
        choices: [L("Höhere Ernten"), L("Weniger Arbeit"), L("Mehr Freizeit"), L("Bunte Felder")], 
        answer: L("Höhere Ernten") 
      }
    },
    {
      id: "macht_kirche",
      title: L("Die Kirche"),
      hint1: L("Ein mächtiger Faktor."),
      hint2: L("Sie besaß viel Land."),
      svg: { type: "text-bubbles", items: [{ text: "Glaube", color: "#fff", bg: "#3b82f6" }, { text: "Macht", color: "#fff", bg: "#1e3a8a" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Kirche"), right: L("Macht") }, { left: L("Papst"), right: L("Anführer") }] },
      quiz: { 
        question: L("Wer war der mächtigste Mann der Kirche?"), 
        choices: [L("Papst"), L("Kaiser"), L("Bauer"), L("Soldat")], 
        answer: L("Papst") 
      }
    },
    {
      id: "papst",
      title: L("Der Papst"),
      hint1: L("Der Nachfolger des Petrus."),
      hint2: L("Sitz in Rom."),
      svg: { type: "icon-grid", items: [{ emoji: "🏛️", label: "Vatikan" }, { emoji: "🗝️", label: "Schlüssel" }] },
      interactive: { type: "gap-fill", text: L("Der Papst wohnt in __."), gaps: [{ index: 0, options: ["Rom", "Berlin"], correct: 0 }] },
      quiz: { 
        question: L("Welche Stadt ist der Sitz des Papstes?"), 
        choices: [L("Rom"), L("Paris"), L("London"), L("Athen")], 
        answer: L("Rom") 
      }
    },
    {
      id: "bischoefe",
      title: L("Bischöfe"),
      hint1: L("Leiter der Kirche in einer Region."),
      hint2: L("Oft Berater der Könige."),
      svg: { type: "word-display", word: "BISCHOF", color: "#9333ea" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Bischof"), right: L("Region") }, { left: L("Stab"), right: L("Zeichen") }] },
      quiz: { 
        question: L("Welche Rolle hatten Bischöfe?"), 
        choices: [L("Geistliche Führer"), L("Bauarbeiter"), L("Seefahrer"), L("Köche")], 
        answer: L("Geistliche Führer") 
      }
    },
    {
      id: "kulturbewahrung",
      title: L("Kulturbewahrung"),
      hint1: L("Wissen aus der Antike retten."),
      hint2: L("Mönche schrieben alte Texte ab."),
      svg: { type: "icon-grid", items: [{ emoji: "🏛️", label: "Alt" }, { emoji: "📖", label: "Neu" }] },
      interactive: { type: "word-order", words: [L("Rettung"), L("des"), L("Wissens")], instruction: L("Was geschah?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wer bewahrte die antike Kultur?"), 
        choices: [L("Die Mönche"), L("Die Hunnen"), L("Niemand"), L("Die Wikinger")], 
        answer: L("Die Mönche") 
      }
    }
  ]
};

// ─── ISLAND 9: ANTIKE WIEDERHOLUNG ──────────────────────────────────────────
const I9: IslandSpec = {
  id: "i9",
  title: L("Antike Wiederholung"),
  topics: [
    {
      id: "vergleich_kulturen",
      title: L("Kulturvergleich"),
      hint1: L("Ägypten, Griechenland, Rom."),
      hint2: L("Was haben sie gemeinsam?"),
      svg: { type: "icon-grid", items: [{ emoji: "🇪🇬", label: "Ägypten" }, { emoji: "🇬🇷", label: "Griechenland" }, { emoji: "🇮🇹", label: "Rom" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Pharao"), right: L("Ägypten") }, { left: L("Demokratie"), right: L("Griechenland") }, { left: L("Kaiser"), right: L("Rom") }] },
      quiz: { 
        question: L("Welche Kultur erfand die Demokratie?"), 
        choices: [L("Griechenland"), L("Ägypten"), L("Rom"), L("Germanen")], 
        answer: L("Griechenland") 
      }
    },
    {
      id: "timeline",
      title: L("Zeitstrahl"),
      hint1: L("Was kam zuerst?"),
      hint2: L("Bringe die Ereignisse in Ordnung."),
      svg: { type: "text-bubbles", items: [{ text: "753", color: "#fff", bg: "#475569" }, { text: "1492", color: "#fff", bg: "#10b981" }] },
      interactive: { type: "word-order", words: [L("Ägypten"), L("Griechenland"), L("Rom"), L("Mittelalter")], instruction: L("Zeitliche Folge?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Welche Epoche ist die älteste?"), 
        choices: [L("Frühe Hochkulturen"), L("Römisches Reich"), L("Mittelalter"), L("Neuzeit")], 
        answer: L("Frühe Hochkulturen") 
      }
    },
    {
      id: "schriften_mix",
      title: L("Schriften"),
      hint1: L("Hieroglyphen, Runen, Alphabet."),
      hint2: L("Wer schrieb wie?"),
      svg: { type: "icon-grid", items: [{ emoji: "𓀀", label: "Ägypten" }, { emoji: "ᚠ", label: "Germanen" }, { emoji: "A", label: "Rom" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Hieroglyphen"), right: L("Ägypten") }, { left: L("Runen"), right: L("Germanen") }, { left: L("Latein"), right: L("Rom") }] },
      quiz: { 
        question: L("Welche Schrift nutzten die Germanen?"), 
        choices: [L("Runen"), L("Hieroglyphen"), L("Keilschrift"), L("Gar keine")], 
        answer: L("Runen") 
      }
    },
    {
      id: "bauwerke_mix",
      title: L("Bauwerke"),
      hint1: L("Pyramiden, Tempel, Kolosseum."),
      hint2: L("Berühmte Steine."),
      svg: { type: "text-bubbles", items: [{ text: "Grab", color: "#fff", bg: "#f59e0b" }, { text: "Arena", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Pyramide"), right: L("Ägypten") }, { left: L("Parthenon"), right: L("Griechenland") }, { left: L("Kolosseum"), right: L("Rom") }] },
      quiz: { 
        question: L("Wo steht das Kolosseum?"), 
        choices: [L("Rom"), L("Athen"), L("Kairo"), L("Paris")], 
        answer: L("Rom") 
      }
    },
    {
      id: "goetter_mix",
      title: L("Götterwelt"),
      hint1: L("Ra, Zeus, Wotan."),
      hint2: L("Die Chefs der Götter."),
      svg: { type: "icon-grid", items: [{ emoji: "☀️", label: "Ra" }, { emoji: "⚡", label: "Zeus" }, { emoji: "👁️", label: "Wotan" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Sonne"), right: L("Ra") }, { left: L("Blitz"), right: L("Zeus") }, { left: L("Wissen"), right: L("Wotan") }] },
      quiz: { 
        question: L("Wer ist der griechische Göttervater?"), 
        choices: [L("Zeus"), L("Wotan"), L("Ra"), L("Osiris")], 
        answer: L("Zeus") 
      }
    },
    {
      id: "menschen_mix",
      title: L("Berühmte Köpfe"),
      hint1: L("Tutanchamun, Sokrates, Caesar."),
      hint2: L("Männer der Geschichte."),
      svg: { type: "text-bubbles", items: [{ text: "Denker", color: "#fff", bg: "#3b82f6" }, { text: "König", color: "#fff", bg: "#facc15" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Sokrates"), right: L("Denker") }, { left: L("Caesar"), right: L("Feldherr") }] },
      quiz: { 
        question: L("Wer war ein römischer Feldherr?"), 
        choices: [L("Julius Caesar"), L("Sokrates"), L("Tutanchamun"), L("Platon")], 
        answer: L("Julius Caesar") 
      }
    },
    {
      id: "ursache_wirkung",
      title: L("Ursachen"),
      hint1: L("Warum passierten Dinge?"),
      hint2: L("Zusammenhänge verstehen."),
      svg: { type: "two-groups", left: { items: ["Nilflut", "Ernte"], bg: "#dbeafe", border: "#2563eb" }, right: { items: ["Hunnen", "Wanderung"], bg: "#fee2e2", border: "#dc2626" } },
      interactive: { type: "gap-fill", text: L("Ohne den Nil gäbe es kein __."), gaps: [{ index: 0, options: ["Ägypten", "Rom"], correct: 0 }] },
      quiz: { 
        question: L("Was war die Folge der Varusschlacht?"), 
        choices: [L("Rom verlor Germanien"), L("Rom siegte"), L("Nichts"), L("Ende Roms")], 
        answer: L("Rom verlor Germanien") 
      }
    },
    {
      id: "reiche_mix",
      title: L("Großreiche"),
      hint1: L("Reiche kommen und gehen."),
      hint2: L("Von Ägypten bis zum Frankenreich."),
      svg: { type: "icon-grid", items: [{ emoji: "🌍", label: "Welt" }, { emoji: "📉", label: "Fall" }] },
      interactive: { type: "word-order", words: [L("Aufstieg"), L("und"), L("Fall")], instruction: L("Was beschreibt Geschichte?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Welches Reich hielt am längsten?"), 
        choices: [L("Ägypten"), L("Alexanderreich"), L("Westrom"), L("Sparta")], 
        answer: L("Ägypten") 
      }
    },
    {
      id: "alltag_mix",
      title: L("Alltag"),
      hint1: L("Wie lebten die Menschen?"),
      hint2: L("Bauern, Sklaven, Bürger."),
      svg: { type: "text-bubbles", items: [{ text: "Feld", color: "#fff", bg: "#16a34a" }, { text: "Markt", color: "#fff", bg: "#facc15" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Agora"), right: L("Griechen") }, { left: L("Forum"), right: L("Römer") }] },
      quiz: { 
        question: L("Wo kauften Römer ein?"), 
        choices: [L("Forum"), L("Agora"), L("Oase"), L("Kloster")], 
        answer: L("Forum") 
      }
    },
    {
      id: "demokratie_republik",
      title: L("Staatsformen"),
      hint1: L("Wie wurde regiert?"),
      hint2: L("Demokratie und Republik."),
      svg: { type: "icon-grid", items: [{ emoji: "🗳️", label: "Wahl" }, { emoji: "👑", label: "König" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Athen"), right: L("Demokratie") }, { left: L("Rom"), right: L("Republik") }] },
      quiz: { 
        question: L("Wo durften Bürger das erste Mal wählen?"), 
        choices: [L("Athen"), L("Ägypten"), L("Sparta"), L("Germanen")], 
        answer: L("Athen") 
      }
    },
    {
      id: "erfindungen_mix",
      title: L("Erfindungen"),
      hint1: L("Was blieb von der Antike?"),
      hint2: L("Schrift, Recht, Baukunst."),
      svg: { type: "text-bubbles", items: [{ text: "Beton", color: "#fff", bg: "#64748b" }, { text: "Uhr", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Aquädukt"), right: L("Wasser") }, { left: L("Papyrus"), right: L("Schreiben") }] },
      quiz: { 
        question: L("Was erfanden die Römer für den Bau?"), 
        choices: [L("Beton"), L("Plastik"), L("Stahl"), L("Glas")], 
        answer: L("Beton") 
      }
    },
    {
      id: "grenzen_mix",
      title: L("Grenzen"),
      hint1: L("Mauern und Wälle."),
      hint2: L("Schutz vor Feinden."),
      svg: { type: "icon-grid", items: [{ emoji: "🚧", label: "Wall" }, { emoji: "🏹", label: "Bogen" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Limes"), right: L("Römer") }, { left: L("Zaun"), right: L("Germanen") }] },
      quiz: { 
        question: L("Wie hieß der römische Grenzwall?"), 
        choices: [L("Limes"), L("Mauer"), L("Graben"), L("Damm")], 
        answer: L("Limes") 
      }
    },
    {
      id: "sport_kultur_mix",
      title: L("Kultur & Sport"),
      hint1: L("Theater und Spiele."),
      hint2: L("Zeitvertreib der Alten."),
      svg: { type: "text-bubbles", items: [{ text: "Drama", color: "#fff", bg: "#9333ea" }, { text: "Lauf", color: "#fff", bg: "#10b981" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Maske"), right: L("Theater") }, { left: L("Ringe"), right: L("Olympia") }] },
      quiz: { 
        question: L("Was war ein griechischer Wettkampf?"), 
        choices: [L("Olympische Spiele"), L("Gladiatorenkampf"), L("Ritterturnier"), L("Fußball")], 
        answer: L("Olympische Spiele") 
      }
    },
    {
      id: "religion_mix",
      title: L("Religion"),
      hint1: L("Viele Götter oder einer?"),
      hint2: L("Wandel der Welt."),
      svg: { type: "icon-grid", items: [{ emoji: "☀️", label: "Viel" }, { emoji: "✝️", label: "Ein" }] },
      interactive: { type: "gap-fill", text: L("Die Antike glaubte an __ Götter."), gaps: [{ index: 0, options: ["viele", "keine"], correct: 0 }] },
      quiz: { 
        question: L("Was passierte am Ende der Antike mit der Religion?"), 
        choices: [L("Das Christentum siegte"), L("Alle wurden Atheisten"), L("Nichts"), L("Neue Götter kamen")], 
        answer: L("Das Christentum siegte") 
      }
    },
    {
      id: "fazit",
      title: L("Fazit"),
      hint1: L("Geschichte ist spannend."),
      hint2: L("Lerne aus der Vergangenheit."),
      svg: { type: "word-display", word: "WISSEN", color: "#06b6d4" },
      interactive: { type: "word-order", words: [L("Geschichte"), L("lehrt"), L("uns"), L("viel")], instruction: L("Abschluss!"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Was ist Geschichte?"), 
        choices: [L("Erinnerung an früher"), L("Die Zukunft"), L("Ein Märchen"), L("Nur Zahlen")], 
        answer: L("Erinnerung an früher") 
      }
    }
  ]
};

const islands = [I1, I2, I3, I4, I5, I6, I7, I8, I9];
const built = islands.map(buildIsland);

export const GESCHICHTE_K5_I1_LABELS = built[0].labels;
export const GESCHICHTE_K5_I1_POOL = built[0].pool;
export const GESCHICHTE_K5_I2_LABELS = built[1].labels;
export const GESCHICHTE_K5_I2_POOL = built[1].pool;
export const GESCHICHTE_K5_I3_LABELS = built[2].labels;
export const GESCHICHTE_K5_I3_POOL = built[2].pool;
export const GESCHICHTE_K5_I4_LABELS = built[3].labels;
export const GESCHICHTE_K5_I4_POOL = built[3].pool;
export const GESCHICHTE_K5_I5_LABELS = built[4].labels;
export const GESCHICHTE_K5_I5_POOL = built[4].pool;
export const GESCHICHTE_K5_I6_LABELS = built[5].labels;
export const GESCHICHTE_K5_I6_POOL = built[5].pool;
export const GESCHICHTE_K5_I7_LABELS = built[6].labels;
export const GESCHICHTE_K5_I7_POOL = built[6].pool;
export const GESCHICHTE_K5_I8_LABELS = built[7].labels;
export const GESCHICHTE_K5_I8_POOL = built[7].pool;
export const GESCHICHTE_K5_I9_LABELS = built[8].labels;
export const GESCHICHTE_K5_I9_POOL = built[8].pool;
