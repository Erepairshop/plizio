import type { PoolTopicDef, SvgConfig } from "./types";
import type { TopicInteractive } from "@/app/astro-biologie/games/ExplorerEngine";

type Lang = "de" | "en" | "hu" | "ro";
type L4 = Record<Lang, string>;

/**
 * Helper to create a single-language label object.
 */
const L = (de: string, en: string, hu: string, ro: string): L4 => ({ de, en, hu, ro });

interface TopicSpec {
  id: string;
  title: L4;
  hint1: L4;
  hint2: L4;
  svg: any; // Allow L1 wrappers in spec
  interactive: any; // Allow L1 wrappers in spec
  quiz: {
    question: L4;
    choices: L4[];
    answer: L4;
  };
}

interface IslandSpec {
  id: string;
  title: L4;
  topics: TopicSpec[];
}

function buildIsland(island: IslandSpec) {
  const labels: Record<Lang, Record<string, string>> = {
    de: { explorer_title: island.title.de },
    en: { explorer_title: island.title.en },
    hu: { explorer_title: island.title.hu },
    ro: { explorer_title: island.title.ro },
  };

  const pool: PoolTopicDef[] = island.topics.map((topic) => {
    const prefix = `${island.id}_${topic.id}`;
    
    // Title
    labels.de[`${prefix}_title`] = topic.title.de;
        labels.en[`${prefix}_title`] = topic.title.en;
        labels.hu[`${prefix}_title`] = topic.title.hu;
        labels.ro[`${prefix}_title`] = topic.title.ro;
    // Hints
    labels.de[`${prefix}_h1`] = topic.hint1.de;
        labels.en[`${prefix}_h1`] = topic.hint1.en;
        labels.hu[`${prefix}_h1`] = topic.hint1.hu;
        labels.ro[`${prefix}_h1`] = topic.hint1.ro;
    labels.de[`${prefix}_h2`] = topic.hint2.de;
        labels.en[`${prefix}_h2`] = topic.hint2.en;
        labels.hu[`${prefix}_h2`] = topic.hint2.hu;
        labels.ro[`${prefix}_h2`] = topic.hint2.ro;
    // Quiz
    labels.de[`${prefix}_q`] = topic.quiz.question.de;
        labels.en[`${prefix}_q`] = topic.quiz.question.en;
        labels.hu[`${prefix}_q`] = topic.quiz.question.hu;
        labels.ro[`${prefix}_q`] = topic.quiz.question.ro;
    topic.quiz.choices.forEach((c, i) => {
      labels.de[`${prefix}_c${i}`] = c.de;
        labels.en[`${prefix}_c${i}`] = c.en;
        labels.hu[`${prefix}_c${i}`] = c.hu;
        labels.ro[`${prefix}_c${i}`] = c.ro;
    });
    labels.de[`${prefix}_a`] = topic.quiz.answer.de;
        labels.en[`${prefix}_a`] = topic.quiz.answer.en;
        labels.hu[`${prefix}_a`] = topic.quiz.answer.hu;
        labels.ro[`${prefix}_a`] = topic.quiz.answer.ro;

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
        labels.en[key] = obj.en;
        labels.hu[key] = obj.hu;
        labels.ro[key] = obj.ro;
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
  title: L("Frühe Hochkulturen", "Early civilizations", "Korai civilizációk", "Civilizațiile timpurii"),
  topics: [
    {
      id: "mesopotamien",
      title: L("Mesopotamien", "Mesopotamia", "Mezopotámia", "Mesopotamia"),
      hint1: L("Das Land zwischen Euphrat und Tigris.", "The land between the Euphrates and the Tigris.", "Az Eufrátesz és a Tigris közötti föld.", "Țara dintre Eufrat și Tigru."),
      hint2: L("Heute liegt dort der Irak.", "Today Iraq is there.", "Ma Irak ott van.", "Astăzi Irakul este acolo."),
      svg: { type: "text-bubbles", items: [{ text: "Euphrat", color: "#fff", bg: "#0284c7" }, { text: "Tigris", color: "#fff", bg: "#0ea5e9" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Meso", "Meso", "Meso", "Meso"), right: L("Zwischen", "Between", "Között", "Între") }, { left: L("Potamos", "Potamos", "Potamos", "Potamos"), right: L("Fluss", "Flow", "Folyik", "Flux") }] },
      quiz: { 
        question: L("Was bedeutet der Name Mesopotamien?", "What does the name Mesopotamia mean?", "Mi a Mezopotámia név jelentése?", "Ce înseamnă numele Mesopotamia?"), 
        choices: [L("Zweistromland", "Mesopotamia", "Mezopotámia", "Mesopotamia"), L("Bergland", "Mountain country", "Hegyvidéki ország", "Țara de munte"), L("Inselreich", "Island kingdom", "Sziget királyság", "Regatul insular"), L("Wüste", "Desert", "Sivatag", "Deşert")], 
        answer: L("Zweistromland", "Mesopotamia", "Mezopotámia", "Mesopotamia") 
      }
    },
    {
      id: "sumerer",
      title: L("Die Sumerer", "The Sumerians", "A sumérok", "Sumerienii"),
      hint1: L("Eines der ältesten Kulturvölker.", "One of the oldest civilized peoples.", "Az egyik legrégebbi civilizált nép.", "Unul dintre cele mai vechi popoare civilizate."),
      hint2: L("Sie erfanden die erste Schrift.", "They invented the first writing.", "Ők találták ki az első írást.", "Ei au inventat prima scriere."),
      svg: { type: "icon-grid", items: [{ emoji: "✍️", label: "Schrift" }, { emoji: "🌾", label: "Bauern" }] },
      interactive: { type: "gap-fill", text: L("Die Sumerer lebten in __.", "The Sumerians lived in __.", "A sumérok __-ban éltek.", "Sumerienii locuiau în __."), gaps: [{ index: 0, options: ["Mesopotamien", "Ägypten"], correct: 0 }] },
      quiz: { 
        question: L("Welches Volk erfand die Keilschrift?", "Which people invented cuneiform writing?", "Melyik ember találta fel az ékírást?", "Ce oameni au inventat scrierea cuneiformă?"), 
        choices: [L("Sumerer", "Sumerians", "sumérok", "sumerieni"), L("Römer", "Romans", "rómaiak", "romani"), L("Griechen", "Greeks", "görögök", "greci"), L("Germanen", "Teutons", "teutonok", "teutonii")], 
        answer: L("Sumerer", "Sumerians", "sumérok", "sumerieni") 
      }
    },
    {
      id: "keilschrift",
      title: L("Keilschrift", "Cuneiform", "Ékírásos", "Cuneiform"),
      hint1: L("Schriftzeichen in Keilform.", "Wedge-shaped characters.", "Ék alakú karakterek.", "Personaje în formă de pană."),
      hint2: L("Gedrückt in feuchten Ton.", "Pressed into wet clay.", "Nedves agyagba préselve.", "Presat în argilă umedă."),
      svg: { type: "letter-circles", letters: ["K", "E", "I", "L", "S"], color: "#1e40af" },
      interactive: { type: "word-order", words: [L("Griff", "Handle", "Fogantyú", "Mâner"), L("drückt", "presses", "megnyomja", "prese"), L("in", "in", "be", "în"), L("Ton", "clay", "agyag", "lut")], instruction: L("Wie schrieb man?", "How did you write?", "hogy írtál?", "Cum ai scris?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Auf welchem Material schrieben die Sumerer?", "What material did the Sumerians write on?", "Milyen anyagra írtak a sumérok?", "Pe ce material au scris sumerienii?"), 
        choices: [L("Tontafeln", "Clay tablets", "Agyagtáblák", "Tablete de argilă"), L("Papier", "Paper", "Papír", "Hârtie"), L("Holz", "Wood", "Faipari", "Lemn"), L("Leder", "leather", "bőr", "piele")], 
        answer: L("Tontafeln", "Clay tablets", "Agyagtáblák", "Tablete de argilă") 
      }
    },
    {
      id: "bewaesserung",
      title: L("Bewässerung", "irrigation", "öntözés", "irigare"),
      hint1: L("Kanäle brachten Wasser auf die Felder.", "Canals brought water to the fields.", "A csatornák vizet vittek a mezőkre.", "Canalele aduceau apă pe câmpuri."),
      hint2: L("So gab es reiche Ernten.", "So there were rich harvests.", "Tehát gazdag termés volt.", "Deci au fost recolte bogate."),
      svg: { type: "two-groups", left: { items: ["Kanal", "Wasser"], bg: "#dbeafe", border: "#2563eb" }, right: { items: ["Feld", "Ernte"], bg: "#dcfce7", border: "#16a34a" } },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "b", label: L("Landbau", "Agriculture", "Mezőgazdaság", "Agricultură") }], items: [{ text: L("Kanal", "channel", "csatorna", "canal"), bucketId: "b" }, { text: L("Damm", "dam", "gát", "baraj"), bucketId: "b" }], instruction: L("Zuweisen!", "Assign!", "Hozzárendelés!", "Atribui!") },
      quiz: { 
        question: L("Warum bauten Mesopotamier Kanäle?", "Why did Mesopotamians build canals?", "Miért építettek csatornákat a mezopotámiaiak?", "De ce au construit mesopotamienii canale?"), 
        choices: [L("Zur Bewässerung", "For irrigation", "Öntözéshez", "Pentru irigare"), L("Zum Schwimmen", "For swimming", "Az úszáshoz", "Pentru înot"), L("Als Mauern", "As walls", "Mint falak", "Ca ziduri"), L("Für Schiffe allein", "For ships alone", "Egyedül a hajókra", "Doar pentru nave")], 
        answer: L("Zur Bewässerung", "For irrigation", "Öntözéshez", "Pentru irigare") 
      }
    },
    {
      id: "rad",
      title: L("Das Rad", "The wheel", "A kerék", "Roata"),
      hint1: L("Eine der wichtigsten Erfindungen.", "One of the most important inventions.", "Az egyik legfontosabb találmány.", "Una dintre cele mai importante invenții."),
      hint2: L("Zuerst für Töpferscheiben genutzt.", "First used for pottery wheels.", "Először fazekaskorongokhoz használták.", "Folosit pentru prima dată pentru roțile de ceramică."),
      svg: { type: "icon-grid", items: [{ emoji: "⭕", label: "Rad" }, { emoji: "🛒", label: "Wagen" }] },
      interactive: { type: "tap-count", tapCount: { emoji: "⭕", count: 4 }, instruction: L("Wie viele Räder hat ein Wagen?", "How many wheels does a car have?", "Hány kereke van egy autónak?", "Câte roți are o mașină?") },
      quiz: { 
        question: L("Wofür war das Rad besonders nützlich?", "What was the bike particularly useful for?", "Mire volt különösen hasznos a kerékpár?", "Pentru ce a fost deosebit de utilă bicicleta?"), 
        choices: [L("Transport von Waren", "Transport of goods", "Áruszállítás", "Transport de mărfuri"), L("Zum Essen", "To eat", "enni", "Să mănânce"), L("Als Hausbau", "As a house building", "Házépítésként", "Ca o clădire de casă"), L("Nur zum Spielen", "Just to play", "Csak játszani", "Doar pentru a juca")], 
        answer: L("Transport von Waren", "Transport of goods", "Áruszállítás", "Transport de mărfuri") 
      }
    },
    {
      id: "hammurabi",
      title: L("König Hammurabi", "King Hammurabi", "Hammurapi király", "Regele Hammurabi"),
      hint1: L("Berühmt für seine Gesetze.", "Famous for his laws.", "Híres a törvényeiről.", "Faimos pentru legile sale."),
      hint2: L("Eingemeißelt in Stein.", "Carved in stone.", "Kőbe vésve.", "Sculpt în piatră."),
      svg: { type: "word-display", word: "GESETZ", color: "#475569" },
      interactive: { type: "gap-fill", text: L("Hammurabi war König von __.", "Hammurabi was king of __.", "Hammurapi __ királya volt.", "Hammurabi a fost regele __."), gaps: [{ index: 0, options: ["Babylon", "Rom"], correct: 0 }] },
      quiz: { 
        question: L("Was ließ Hammurabi aufschreiben?", "What did Hammurabi have written down?", "Mit írt le Hammurapi?", "Ce a scris Hammurabi?"), 
        choices: [L("Gesetzbuch", "Code of Laws", "törvénykönyv", "Codul legilor"), L("Kochbuch", "Cookbook", "Szakácskönyv", "Carte de bucate"), L("Märchen", "Fairy tale", "Tündérmese", "Basm"), L("Lieder", "songs", "dalokat", "cântece")], 
        answer: L("Gesetzbuch", "Code of Laws", "törvénykönyv", "Codul legilor") 
      }
    },
    {
      id: "zikkurat",
      title: L("Zikkurat", "Ziggurat", "Ziggurat", "Zigurat"),
      hint1: L("Ein riesiger Stufentempel.", "A huge step temple.", "Hatalmas lépcsős templom.", "Un templu uriaș cu trepte."),
      hint2: L("Sitz der Götter.", "Seat of the gods.", "Az istenek székhelye.", "Scaunul zeilor."),
      svg: { type: "text-bubbles", items: [{ text: "Tempel", color: "#fff", bg: "#f59e0b" }, { text: "Stufen", color: "#fff", bg: "#78350f" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Zikkurat", "Ziggurat", "Ziggurat", "Zigurat"), right: L("Tempel", "temple", "templom", "templu") }, { left: L("Priester", "priest", "pap", "preot"), right: L("Ritual", "ritual", "szertartás", "ritual") }] },
      quiz: { 
        question: L("Was ist eine Zikkurat?", "What is a Ziggurat?", "Mi az a Ziggurat?", "Ce este un zigurat?"), 
        choices: [L("Ein Stufentempel", "A step temple", "Lépcsős templom", "Un templu treptat"), L("Ein Marktplatz", "A marketplace", "Egy piactér", "O piata"), L("Ein Schiff", "A ship", "Egy hajó", "O navă"), L("Ein Grab", "A grave", "Egy sír", "Un mormânt")], 
        answer: L("Ein Stufentempel", "A step temple", "Lépcsős templom", "Un templu treptat") 
      }
    },
    {
      id: "priesterkoenige",
      title: L("Priesterkönige", "Priest-Kings", "Pap-Királyok", "Preoți-Regi"),
      hint1: L("Herrscher waren auch religiöse Führer.", "Rulers were also religious leaders.", "Az uralkodók vallási vezetők is voltak.", "Conducătorii erau și lideri religioși."),
      hint2: L("Sie regierten im Namen der Götter.", "They ruled in the name of the gods.", "Az istenek nevében uralkodtak.", "Au domnit în numele zeilor."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "König" }, { emoji: "🙏", label: "Priester" }] },
      interactive: { type: "word-order", words: [L("Gott", "God", "Isten", "Dumnezeu"), L("und", "and", "és", "şi"), L("Herrscher", "ruler", "uralkodó", "riglă")], instruction: L("Zwei Rollen!", "Two roles!", "Két szerep!", "Două roluri!"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wer regierte oft in frühen Hochkulturen?", "Who often ruled in early civilizations?", "Kik uralkodtak gyakran a korai civilizációkban?", "Cine a condus adesea în civilizațiile timpurii?"), 
        choices: [L("Priesterkönige", "Priest-Kings", "Pap-Királyok", "Preoți-Regi"), L("Präsidenten", "Presidents", "Elnökök", "Preşedinţii"), L("Bauernräte", "Peasant councils", "Paraszttanácsok", "Consiliile țărănești"), L("Händler", "Dealer", "Kereskedő", "Dealer")], 
        answer: L("Priesterkönige", "Priest-Kings", "Pap-Királyok", "Preoți-Regi") 
      }
    },
    {
      id: "ur",
      title: L("Die Stadt Ur", "The city of Ur", "Ur városa", "Orașul Ur"),
      hint1: L("Eine der ersten großen Städte.", "One of the first big cities.", "Az egyik első nagyváros.", "Unul dintre primele orașe mari."),
      hint2: L("Hier lebten Tausende Menschen.", "Thousands of people lived here.", "Emberek ezrei éltek itt.", "Aici locuiau mii de oameni."),
      svg: { type: "sentence-display", words: ["Erste", "große", "Stadt"], color: "#16a34a" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Ur", "Ur", "Ur", "Ur"), right: L("Sumerer", "Sumerians", "sumérok", "sumerieni") }, { left: L("Stadt", "City", "Város", "Oraş"), right: L("Mauer", "Wall", "Fal", "Perete") }] },
      quiz: { 
        question: L("In welcher Region lag die Stadt Ur?", "In which region was the city of Ur?", "Melyik régióban volt Ur városa?", "În ce regiune se afla orașul Ur?"), 
        choices: [L("Mesopotamien", "Mesopotamia", "Mezopotámia", "Mesopotamia"), L("Ägypten", "Egypt", "Egyiptom", "Egipt"), L("Indien", "India", "India", "India"), L("China", "China", "Kína", "China")], 
        answer: L("Mesopotamien", "Mesopotamia", "Mezopotámia", "Mesopotamia") 
      }
    },
    {
      id: "schreiber",
      title: L("Der Schreiber", "The Scribe", "Az Írnok", "Scribul"),
      hint1: L("Ein sehr wichtiger Beruf.", "A very important job.", "Nagyon fontos munka.", "O treabă foarte importantă."),
      hint2: L("Nur wenige konnten schreiben.", "Only a few could write.", "Csak kevesen tudtak írni.", "Doar câțiva puteau scrie."),
      svg: { type: "icon-grid", items: [{ emoji: "🖋️", label: "Feder" }, { emoji: "📜", label: "Liste" }] },
      interactive: { type: "gap-fill", text: L("Schreiber arbeiteten im __.", "Scribes worked in the __.", "Írnokok dolgoztak a __.", "Scribii lucrau în __."), gaps: [{ index: 0, options: ["Tempel", "Wald"], correct: 0 }] },
      quiz: { 
        question: L("Wofür brauchte man Schreiber?", "What were scribes needed for?", "Mire volt szükség az írástudókra?", "Pentru ce era nevoie de cărturari?"), 
        choices: [L("Für Vorräte und Steuern", "For supplies and taxes", "Az ellátásért és az adókért", "Pentru provizii și taxe"), L("Zum Jagen", "For hunting", "A vadászathoz", "Pentru vânătoare"), L("Für Sport", "For sports", "Sportoláshoz", "Pentru sport"), L("Gar nicht", "Not at all", "Egyáltalán nem", "Deloc")], 
        answer: L("Für Vorräte und Steuern", "For supplies and taxes", "Az ellátásért és az adókért", "Pentru provizii și taxe") 
      }
    },
    {
      id: "zeitmessung",
      title: L("Zeitmessung", "Timekeeping", "Időszámítás", "Pontaj"),
      hint1: L("Einteilung in 60 Minuten.", "Division into 60 minutes.", "Oszd fel 60 percre.", "Împărțire în 60 de minute."),
      hint2: L("Von den Sumerern erfunden.", "Invented by the Sumerians.", "A sumérok találták ki.", "Inventat de sumerieni."),
      svg: { type: "text-bubbles", items: [{ text: "60", color: "#fff", bg: "#ef4444" }, { text: "Zeit", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "tap-count", tapCount: { emoji: "⏰", count: 12 }, instruction: L("Zähle die Stunden!", "Count the hours!", "Számold meg az órákat!", "Numara orele!") },
      quiz: { 
        question: L("Auf welcher Zahl basierte das sumerische Zeitsystem?", "What number was the Sumerian time system based on?", "Milyen számon alapult a sumér időrendszer?", "Pe ce număr se baza sistemul orar sumerian?"), 
        choices: [L("60", "60", "60", "60"), L("10", "10", "10", "10"), L("100", "100", "100", "100"), L("7", "7", "7", "7")],
        answer: L("60", "60", "60", "60") 
      }
    },
    {
      id: "induskultur",
      title: L("Indus-Kultur", "Indus culture", "Indus kultúra", "cultura indusului"),
      hint1: L("Hochkultur am Indus-Fluss.", "Advanced culture on the Indus River.", "Fejlett kultúra az Indus folyón.", "Cultură avansată pe râul Indus."),
      hint2: L("Bekannt für geplante Städte.", "Known for planned cities.", "A tervezett városokról ismert.", "Cunoscut pentru orașele planificate."),
      svg: { type: "two-groups", left: { items: ["Indus", "Fluss"], bg: "#dbeafe", border: "#2563eb" }, right: { items: ["Bad", "Hygiene"], bg: "#f1f5f9", border: "#475569" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Indus", "Indus", "Indus", "Indus"), right: L("Pakistan", "Pakistan", "Pakisztán", "Pakistan") }, { left: L("Stadt", "City", "Város", "Oraş"), right: L("Planung", "planning", "tervezés", "planificare") }] },
      quiz: { 
        question: L("Was war besonders an Indus-Städten?", "What was special about Indus cities?", "Mi volt különleges az Indus városokban?", "Ce era special la orașele din Indus?"), 
        choices: [L("Sie waren genau geplant", "They were precisely planned", "Pontosan megtervezték", "Au fost precis planificate"), L("Sie hatten keine Häuser", "They had no houses", "Nem volt házuk", "Nu aveau case"), L("Sie lagen auf Bergen", "They were on mountains", "A hegyeken voltak", "Erau pe munți"), L("Sie waren rund", "They were round", "Kerekek voltak", "Erau rotunzi")], 
        answer: L("Sie waren genau geplant", "They were precisely planned", "Pontosan megtervezték", "Au fost precis planificate") 
      }
    },
    {
      id: "gelberfluss",
      title: L("Gelber Fluss", "Yellow River", "Sárga folyó", "Râul Galben"),
      hint1: L("Hochkultur im alten China.", "Advanced culture in ancient China.", "Fejlett kultúra az ókori Kínában.", "Cultura avansată în China antică."),
      hint2: L("Huang He brachte fruchtbaren Löss.", "Huang He brought fertile loess.", "Huang termékeny löszt hozott.", "Huang He a adus loess fertil."),
      svg: { type: "word-display", word: "HUANG HE", color: "#854d0e" },
      interactive: { type: "word-order", words: [L("Gelber", "Yellower", "Sárgább", "Mai galben"), L("Fluss", "Flow", "Folyik", "Flux"), L("China", "China", "Kína", "China")], instruction: L("Ordnen!", "Arrange!", "Rendezzen!", "Aranja!"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wo entstand die chinesische Hochkultur?", "Where did Chinese advanced culture originate?", "Honnan ered a fejlett kínai kultúra?", "De unde a apărut cultura avansată chineză?"), 
        choices: [L("Huang He", "Huang He", "Huang He", "Huang He"), L("Nil", "Nile", "Nílus", "Nil"), L("Donau", "Danube", "Duna", "Dunărea"), L("Amazonas", "Amazon", "amazon", "Amazon")], 
        answer: L("Huang He", "Huang He", "Huang He", "Huang He") 
      }
    },
    {
      id: "teilung_arbeit",
      title: L("Arbeitsteilung", "Division of labor", "Munkamegosztás", "Diviziunea muncii"),
      hint1: L("Menschen spezialisieren sich.", "People specialize.", "Az emberek specializálódnak.", "Oamenii se specializează."),
      hint2: L("Es gab Bauern, Schmiede, Händler.", "There were farmers, blacksmiths, traders.", "Voltak gazdák, kovácsok, kereskedők.", "Erau fermieri, fierari, comercianți."),
      svg: { type: "two-groups", left: { items: ["Bauer", "Schmied"], bg: "#dcfce7", border: "#16a34a" }, right: { items: ["Händler", "Schreiber"], bg: "#dbeafe", border: "#2563eb" } },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "b", label: L("Berufe", "Professions", "Szakmák", "Profesii") }], items: [{ text: L("Weber", "Weber", "Weber", "Weber"), bucketId: "b" }, { text: L("Töpfer", "potter", "fazekas", "olar"), bucketId: "b" }], instruction: L("Zuweisen!", "Assign!", "Hozzárendelés!", "Atribui!") },
      quiz: { 
        question: L("Was bedeutet Arbeitsteilung?", "What does division of labor mean?", "Mit jelent a munkamegosztás?", "Ce înseamnă diviziunea muncii?"), 
        choices: [L("Jeder macht eine spezielle Aufgabe", "Everyone does a specific task", "Mindenki egy meghatározott feladatot lát el", "Fiecare face o sarcină anume"), L("Niemand arbeitet", "Nobody works", "Senki sem dolgozik", "Nimeni nu lucrează"), L("Alle machen das Gleiche", "Everyone does the same thing", "Mindenki ugyanazt csinálja", "Toată lumea face același lucru"), L("Arbeit wird verboten", "Work is forbidden", "Munkavégzés tilos", "Munca este interzisa")], 
        answer: L("Jeder macht eine spezielle Aufgabe", "Everyone does a specific task", "Mindenki egy meghatározott feladatot lát el", "Fiecare face o sarcină anume") 
      }
    },
    {
      id: "halbmond",
      title: L("Fruchtbarer Halbmond", "Fertile Crescent", "Termékeny Félhold", "Semiluna Fertilă"),
      hint1: L("Gebiet im Nahen Osten.", "Middle East area.", "Közel-Kelet térsége.", "Zona Orientului Mijlociu."),
      hint2: L("Hier begannen Landwirtschaft und Städte.", "Agriculture and cities began here.", "Itt kezdődött a mezőgazdaság és a városok.", "Aici au început agricultura și orașele."),
      svg: { type: "icon-grid", items: [{ emoji: "🌙", label: "Form" }, { emoji: "🌱", label: "Früchte" }] },
      interactive: { type: "gap-fill", text: L("Das Gebiet ist sehr __.", "The area is very __.", "A terület nagyon __.", "Zona este foarte __."), gaps: [{ index: 0, options: ["fruchtbar", "eisig"], correct: 0 }] },
      quiz: { 
        question: L("Wo liegt der Fruchtbare Halbmond?", "Where is the Fertile Crescent?", "Hol van a Termékeny Félhold?", "Unde este Semiluna Fertilă?"), 
        choices: [L("Naher Osten", "Middle East", "Közel-Kelet", "Orientul Mijlociu"), L("Europa", "Europe", "Európa", "Europa"), L("Amerika", "America", "Amerika", "America"), L("Australien", "Australia", "Ausztrália", "Australia")], 
        answer: L("Naher Osten", "Middle East", "Közel-Kelet", "Orientul Mijlociu") 
      }
    }
  ]
};

// ─── ISLAND 2: DAS ALTE ÄGYPTEN ─────────────────────────────────────────────
const I2: IslandSpec = {
  id: "i2",
  title: L("Das alte Ägypten", "Ancient Egypt", "Az ókori Egyiptom", "Egiptul antic"),
  topics: [
    {
      id: "pharao",
      title: L("Der Pharao", "The Pharaoh", "A fáraó", "Faraonul"),
      hint1: L("Der Pharao war der König von Ägypten.", "Pharaoh was the king of Egypt.", "A fáraó Egyiptom királya volt.", "Faraon a fost regele Egiptului."),
      hint2: L("Er wurde wie ein Gott verehrt.", "He was worshiped like a god.", "Úgy imádták, mint egy istent.", "Era venerat ca un zeu."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "Macht" }, { emoji: "☀️", label: "Gott" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Pharao", "Pharaoh", "fáraó", "faraon"), right: L("König", "king", "király", "rege") }, { left: L("Untertanen", "subjects", "tantárgyak", "subiecte"), right: L("Volk", "People", "Emberek", "Oameni") }] },
      quiz: { 
        question: L("Wer war der oberste Herrscher in Ägypten?", "Who was the supreme ruler in Egypt?", "Ki volt Egyiptom legfőbb uralkodója?", "Cine a fost conducătorul suprem în Egipt?"), 
        choices: [L("Pharao", "Pharaoh", "fáraó", "faraon"), L("Kaiser", "Emperor", "Császár", "Împărat"), L("Präsident", "president", "elnök", "presedinte"), L("Ritter", "Knight", "Lovag", "Cavaler")], 
        answer: L("Pharao", "Pharaoh", "fáraó", "faraon") 
      }
    },
    {
      id: "pyramiden",
      title: L("Pyramiden", "Pyramids", "Piramisok", "Piramidele"),
      hint1: L("Pyramiden waren Grabmäler für Pharaonen.", "Pyramids were tombs for pharaohs.", "A piramisok fáraók sírjai voltak.", "Piramidele erau morminte pentru faraoni."),
      hint2: L("Die größte ist die Cheops-Pyramide.", "The largest is the Great Pyramid.", "A legnagyobb a Nagy Piramis.", "Cea mai mare este Marea Piramidă."),
      svg: { type: "text-bubbles", items: [{ text: "Stein", color: "#000", bg: "#fbbf24" }, { text: "Grab", color: "#000", bg: "#f59e0b" }] },
      interactive: { type: "tap-count", tapCount: { emoji: "🔺", count: 3 }, instruction: L("Zähle die Seiten!", "Count the pages!", "Számold meg az oldalakat!", "Numără paginile!") },
      quiz: { 
        question: L("Wozu dienten die Pyramiden?", "What were the pyramids used for?", "Mire használták a piramisokat?", "La ce au fost folosite piramidele?"), 
        choices: [L("Als Gräber", "As graves", "Mint sírok", "Ca morminte"), L("Als Getreidespeicher", "As a granary", "Magtárként", "Ca grânar"), L("Als Wohnhäuser", "As residential houses", "Lakóházakként", "Ca case de locuit"), L("Als Festungen", "As fortresses", "Mint erődítmények", "Ca cetăţi")], 
        answer: L("Als Gräber", "As graves", "Mint sírok", "Ca morminte") 
      }
    },
    {
      id: "nil",
      title: L("Der Nil", "The Nile", "A Nílus", "Nilul"),
      hint1: L("Der Nil ist die Lebensader Ägyptens.", "The Nile is Egypt's lifeline.", "A Nílus Egyiptom mentőöve.", "Nilul este linia de salvare a Egiptului."),
      hint2: L("Die jährliche Überschwemmung brachte fruchtbaren Schlamm.", "The annual flood brought fertile mud.", "Az évi árvíz termékeny iszapot hozott.", "Viopul anual a adus noroi fertil."),
      svg: { type: "two-groups", left: { items: ["Wasser", "Flut"], bg: "#dbeafe", border: "#2563eb" }, right: { items: ["Ernte", "Schlamm"], bg: "#dcfce7", border: "#16a34a" } },
      interactive: { type: "word-order", words: [L("Nilflut", "Nile flood", "Nílusi árvíz", "Viitura Nilului"), L("Schlamm", "mud", "sár", "noroi"), L("Ernte", "harvest", "aratás", "recolta")], instruction: L("Bringe den Kreislauf in Ordnung!", "Fix the cycle!", "Javítsd a ciklust!", "Remediați ciclul!"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Warum war der Nil so wichtig?", "Why was the Nile so important?", "Miért volt olyan fontos a Nílus?", "De ce era Nilul atât de important?"), 
        choices: [L("Wegen des fruchtbaren Schlamms", "Because of the fertile mud", "A termékeny iszap miatt", "Din cauza noroiului fertil"), L("Wegen des Salzwassers", "Because of the salt water", "A sós víz miatt", "Din cauza apei sărate"), L("Wegen der Fische allein", "Because of the fish alone", "Egyedül a hal miatt", "Doar din cauza peștelui"), L("Wegen des Eises", "Because of the ice", "A jég miatt", "Din cauza gheții")], 
        answer: L("Wegen des fruchtbaren Schlamms", "Because of the fertile mud", "A termékeny iszap miatt", "Din cauza noroiului fertil") 
      }
    },
    {
      id: "mumifizierung",
      title: L("Mumifizierung", "mummification", "mumifikálás", "mumificare"),
      hint1: L("Körper wurden haltbar gemacht.", "Bodies were preserved.", "A holttesteket megőrizték.", "Corpurile au fost conservate."),
      hint2: L("Man benutzte Salz und Leinenbinden.", "Salt and linen bandages were used.", "Só- és vászonkötést használtak.", "S-au folosit bandaje cu sare și in."),
      svg: { type: "icon-grid", items: [{ emoji: "🩹", label: "Binden" }, { emoji: "🧂", label: "Natron" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Einbalsamieren", "Embalm", "Illatosít", "Imbalsamare"), right: L("Haltbar machen", "Make it durable", "Legyen tartós", "Fă-l durabil") }, { left: L("Mumie", "mummy", "múmia", "mumie"), right: L("Körper", "Body", "Test", "Corp") }] },
      quiz: { 
        question: L("Warum wurden Tote mumifiziert?", "Why were dead people mummified?", "Miért mumifikálták a halottakat?", "De ce au fost mumificați oamenii morți?"), 
        choices: [L("Für das Leben nach dem Tod", "For life after death", "A halál utáni életre", "Pentru viața de după moarte"), L("Zum Spaß", "For fun", "A szórakozás kedvéért", "Pentru distracție"), L("Wegen Gesetzen", "Because of laws", "A törvények miatt", "Din cauza legilor"), L("Gegen Kälte", "Against cold", "Hideg ellen", "Împotriva frigului")], 
        answer: L("Für das Leben nach dem Tod", "For life after death", "A halál utáni életre", "Pentru viața de după moarte") 
      }
    },
    {
      id: "hieroglyphen",
      title: L("Hieroglyphen", "Hieroglyphs", "Hieroglifák", "Hieroglife"),
      hint1: L("Die heilige Schrift der Ägypter.", "The holy scriptures of the Egyptians.", "Az egyiptomiak szent iratai.", "Sfintele scripturi ale egiptenilor."),
      hint2: L("Es sind Bildzeichen.", "They are pictograms.", "Ezek piktogramok.", "Sunt pictograme."),
      svg: { type: "letter-circles", letters: ["H", "I", "E", "R", "O"], color: "#f59e0b" },
      interactive: { type: "word-order", words: [L("Bild", "Picture", "Kép", "Imagine"), L("Schrift", "Writing", "Írás", "Scris"), L("Zeichen", "Sign", "Jel", "Semn")], instruction: L("Was sind Hieroglyphen?", "What are hieroglyphs?", "Mik azok a hieroglifák?", "Ce sunt hieroglifele?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wie nennt man die ägyptische Bilderschrift?", "What is the Egyptian picture writing called?", "Hogy hívják az egyiptomi képírást?", "Cum se numește scrierea grafică egipteană?"), 
        choices: [L("Hieroglyphen", "Hieroglyphs", "Hieroglifák", "Hieroglife"), L("Keilschrift", "Cuneiform", "Ékírásos", "Cuneiform"), L("Alphabet", "alphabet", "ábécé", "alfabet"), L("Latein", "Latin", "latin", "latin")], 
        answer: L("Hieroglyphen", "Hieroglyphs", "Hieroglifák", "Hieroglife") 
      }
    },
    {
      id: "totenkult",
      title: L("Totenkult", "Death cult", "Halálkultusz", "Cultul morții"),
      hint1: L("Ägypter glaubten an ein Weiterleben nach dem Tod.", "Egyptians believed in life after death.", "Az egyiptomiak hittek a halál utáni életben.", "Egiptenii credeau în viața de după moarte."),
      hint2: L("Sie gaben Grabbeigaben mit.", "They gave grave goods.", "Sírtárgyakat adtak.", "Au dat bunuri funerare."),
      svg: { type: "two-groups", left: { items: ["Gold", "Essen"], bg: "#fef3c7", border: "#d97706" }, right: { items: ["Werkzeug"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "j", label: L("Jenseits", "Beyond", "Túl", "Dincolo") }], items: [{ text: L("Schätze", "Treasures", "Kincsek", "Comori"), bucketId: "j" }, { text: L("Speisen", "Food", "Élelmiszer", "Mâncare"), bucketId: "j" }], instruction: L("Zuweisen!", "Assign!", "Hozzárendelés!", "Atribui!") },
      quiz: { 
        question: L("Was legte man den Toten ins Grab?", "What did they put in the grave for the dead?", "Mit tettek a sírba a halottakért?", "Ce au pus în mormânt pentru morți?"), 
        choices: [L("Grabbeigaben", "Grave goods", "Sírtárgyak", "Bunuri funerare"), L("Nichts", "Nothing", "Semmi", "Nimic"), L("Nur Steine", "Just stones", "Csak kövek", "Doar pietre"), L("Geldbeutel", "wallet", "pénztárca", "portofel")], 
        answer: L("Grabbeigaben", "Grave goods", "Sírtárgyak", "Bunuri funerare") 
      }
    },
    {
      id: "ra",
      title: L("Gott Ra", "God Ra", "Isten Ra", "Doamne Ra"),
      hint1: L("Ra war der Sonnengott.", "Ra was the sun god.", "Ra volt a napisten.", "Ra era zeul soarelui."),
      hint2: L("Er war der wichtigste Gott.", "He was the most important god.", "Ő volt a legfontosabb isten.", "El era cel mai important zeu."),
      svg: { type: "text-bubbles", items: [{ text: "Sonne", color: "#fff", bg: "#ea580c" }, { text: "Licht", color: "#fff", bg: "#facc15" }] },
      interactive: { type: "gap-fill", text: L("Der Gott __ wird oft mit einem Falkenkopf dargestellt.", "The god __ is often depicted with a falcon's head.", "Az istent __ gyakran sólyomfejjel ábrázolják.", "Zeul __ este adesea înfățișat cu un cap de șoim."), gaps: [{ index: 0, options: ["Ra", "Osiris"], correct: 0 }] },
      quiz: { 
        question: L("Wofür war der Gott Ra zuständig?", "What was the god Ra responsible for?", "Miért volt felelős Ra isten?", "De ce era responsabil zeul Ra?"),
        choices: [L("Sonne", "Sun", "Nap", "Soare"), L("Unterwelt", "Underworld", "Alvilág", "Lumea interlopă"), L("Wasser", "Water", "Víz", "Apă"), L("Krieg", "War", "Háború", "Război")], 
        answer: L("Sonne", "Sun", "Nap", "Soare") 
      }
    },
    {
      id: "osiris",
      title: L("Gott Osiris", "God Osiris", "Ozirisz Isten", "Dumnezeule Osiris"),
      hint1: L("Der Herrscher der Unterwelt.", "The ruler of the underworld.", "Az alvilág uralkodója.", "Conducătorul lumii interlope."),
      hint2: L("Er richtet über die Toten.", "He judges the dead.", "A halottak felett ítélkezik.", "El judecă morții."),
      svg: { type: "two-groups", left: { items: ["Osiris", "Unterwelt"], bg: "#ede9fe", border: "#7c3aed" }, right: { items: ["Ra", "Himmel"], bg: "#dbeafe", border: "#2563eb" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Osiris", "Osiris", "Ozirisz", "Osiris"), right: L("Richter", "Judge", "Bíró", "Judecător") }, { left: L("Tote", "dead", "halott", "mort"), right: L("Gericht", "Court", "Bíróság", "Curtea") }] },
      quiz: { 
        question: L("Wo herrschte der Gott Osiris?", "Where did the god Osiris rule?", "Hol uralkodott Ozirisz isten?", "Unde a domnit zeul Osiris?"), 
        choices: [L("In der Unterwelt", "In the underworld", "Az alvilágban", "În lumea interlopă"), L("Im Himmel", "In heaven", "A mennyországban", "În rai"), L("Im Nil", "In the Nile", "A Nílusban", "În Nil"), L("In der Wüste", "In the desert", "A sivatagban", "În deșert")], 
        answer: L("In der Unterwelt", "In the underworld", "Az alvilágban", "În lumea interlopă") 
      }
    },
    {
      id: "isis",
      title: L("Göttin Isis", "Goddess Isis", "Ízisz istennő", "Zeița Isis"),
      hint1: L("Die Göttin der Magie und Mutterschaft.", "The goddess of magic and motherhood.", "A mágia és az anyaság istennője.", "Zeița magiei și a maternității."),
      hint2: L("Ehefrau von Osiris.", "Wife of Osiris.", "Ozirisz felesége.", "Soția lui Osiris."),
      svg: { type: "icon-grid", items: [{ emoji: "🪄", label: "Magie" }, { emoji: "👩", label: "Mutter" }] },
      interactive: { type: "word-order", words: [L("Schutz", "Protection", "Védelem", "Protecţie"), L("Göttin", "goddess", "istennő", "zeiţă"), L("Isis", "Isis", "Isis", "Isis")], instruction: L("Wer war Isis?", "Who was Isis?", "Ki volt Ízisz?", "Cine a fost Isis?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wofür steht die Göttin Isis?", "What does the goddess Isis stand for?", "Mit jelent Ízisz istennő?", "Ce reprezintă zeița Isis?"),
        choices: [L("Schutz und Magie", "Protection and magic", "Védelem és varázslat", "Protecție și magie"), L("Krieg", "War", "Háború", "Război"), L("Handel", "Trade", "Kereskedelmi", "Comerț"), L("Wetter", "Weather", "Időjárás", "Vreme")], 
        answer: L("Schutz und Magie", "Protection and magic", "Védelem és varázslat", "Protecție și magie") 
      }
    },
    {
      id: "papyrus",
      title: L("Papyrus", "papyrus", "papirusz", "papirus"),
      hint1: L("Das Schreibmaterial der Ägypter.", "The writing materials of the Egyptians.", "Az egyiptomiak írásanyagai.", "Materialele de scris ale egiptenilor."),
      hint2: L("Es wurde aus einer Schilfpflanze gemacht.", "It was made from a reed plant.", "Nád növényből készült.", "A fost făcută dintr-o plantă de stuf."),
      svg: { type: "word-display", word: "PAPYRUS", color: "#166534" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Papyrus", "papyrus", "papirusz", "papirus"), right: L("Papier", "Paper", "Papír", "Hârtie") }, { left: L("Schilf", "reed", "nád", "stuf"), right: L("Pflanze", "plant", "növény", "planta") }] },
      quiz: { 
        question: L("Woraus machten Ägypter Schreibmaterial?", "What did Egyptians make writing materials out of?", "Miből készítettek íróanyagokat az egyiptomiak?", "Din ce au făcut egiptenii materiale de scris?"), 
        choices: [L("Papyrus-Schilf", "Papyrus reeds", "Papirusz nád", "Stuf de papirus"), L("Holz", "Wood", "Faipari", "Lemn"), L("Leder", "leather", "bőr", "piele"), L("Stein", "Stone", "Kő", "Piatră")], 
        answer: L("Papyrus-Schilf", "Papyrus reeds", "Papirusz nád", "Stuf de papirus") 
      }
    },
    {
      id: "sphinx",
      title: L("Die Sphinx", "The Sphinx", "A Szfinx", "Sfinxul"),
      hint1: L("Ein Wesen mit Löwenkörper und Menschenkopf.", "A creature with a lion's body and a human's head.", "Egy lény oroszlántesttel és emberi fejjel.", "O creatură cu corp de leu și cap de om."),
      hint2: L("Sie bewacht die Pyramiden.", "She guards the pyramids.", "Ő őrzi a piramisokat.", "Ea păzește piramidele."),
      svg: { type: "sentence-display", words: ["Löwe", "und", "Mensch"], color: "#854d0e" },
      interactive: { type: "tap-count", tapCount: { emoji: "🐾", count: 2 }, instruction: L("Wie viele Teile?", "How many parts?", "Hány alkatrész?", "Câte piese?") },
      quiz: { 
        question: L("Welche Gestalt hat die Sphinx?", "What shape does the Sphinx have?", "Milyen alakja van a Szfinxnek?", "Ce formă are Sfinxul?"), 
        choices: [L("Löwe mit Menschenkopf", "Lion with human head", "Oroszlán emberi fejjel", "Leu cu cap de om"), L("Vogel mit Fischschwanz", "Bird with a fish tail", "Madár egy hal farkával", "Pasăre cu coadă de pește"), L("Hund mit Flügeln", "Dog with wings", "Kutya szárnyakkal", "Câine cu aripi"), L("Nur Mensch", "Only human", "Csak ember", "Numai uman")], 
        answer: L("Löwe mit Menschenkopf", "Lion with human head", "Oroszlán emberi fejjel", "Leu cu cap de om") 
      }
    },
    {
      id: "tut",
      title: L("Tutanchamun", "Tutankhamun", "Tutanhamon", "Tutankhamon"),
      hint1: L("Berühmt durch sein fast unberührtes Grab.", "Famous for his almost untouched grave.", "Szinte érintetlen sírjáról híres.", "Faimos pentru mormântul său aproape neatins."),
      hint2: L("Er starb sehr jung.", "He died very young.", "Nagyon fiatalon halt meg.", "A murit foarte tânăr."),
      svg: { type: "text-bubbles", items: [{ text: "Gold", color: "#fff", bg: "#fbbf24" }, { text: "Grab", color: "#fff", bg: "#78350f" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Tutanchamun", "Tutankhamun", "Tutanhamon", "Tutankhamon"), right: L("Kindkönig", "Child King", "Gyermekkirály", "Copil Rege") }, { left: L("Howard Carter", "Howard Carter", "Howard Carter", "Howard Carter"), right: L("Entdecker", "Explorer", "Felfedező", "Explorator") }] },
      quiz: { 
        question: L("Warum ist Tutanchamun so bekannt?", "Why is Tutankhamun so famous?", "Miért olyan híres Tutanhamon?", "De ce este Tutankhamon atât de faimos?"), 
        choices: [L("Wegen seines Goldgrabes", "Because of his gold grave", "Az aranysírja miatt", "Din cauza mormântului său de aur"), L("Er war der stärkste Krieger", "He was the strongest warrior", "Ő volt a legerősebb harcos", "Era cel mai puternic războinic"), L("Er baute die größte Pyramide", "He built the largest pyramid", "Ő építette a legnagyobb piramist", "El a construit cea mai mare piramidă"), L("Er erfand die Schrift", "He invented writing", "Ő találta fel az írást", "El a inventat scrisul")], 
        answer: L("Wegen seines Goldgrabes", "Because of his gold grave", "Az aranysírja miatt", "Din cauza mormântului său de aur") 
      }
    },
    {
      id: "kleopatra",
      title: L("Kleopatra", "Cleopatra", "Kleopátra", "Cleopatra"),
      hint1: L("Die letzte Königin von Ägypten.", "The last queen of Egypt.", "Egyiptom utolsó királynője.", "Ultima regină a Egiptului."),
      hint2: L("Sie war sehr klug.", "She was very smart.", "Nagyon okos volt.", "Era foarte inteligentă."),
      svg: { type: "icon-grid", items: [{ emoji: "👸", label: "Königin" }, { emoji: "🐍", label: "Ende" }] },
      interactive: { type: "word-order", words: [L("Letzte", "Last", "Utolsó", "Dura"), L("Pharaonin", "Pharaoh", "fáraó", "faraon"), L("Ägyptens", "of Egypt", "Egyiptom", "a Egiptului")], instruction: L("Wer war Kleopatra?", "Who was Cleopatra?", "Ki volt Kleopátra?", "Cine a fost Cleopatra?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wer war die letzte Herrscherin Ägyptens?", "Who was the last ruler of Egypt?", "Ki volt Egyiptom utolsó uralkodója?", "Cine a fost ultimul conducător al Egiptului?"), 
        choices: [L("Kleopatra", "Cleopatra", "Kleopátra", "Cleopatra"), L("Nefertiti", "Nefertiti", "Nefertiti", "Nefertiti"), L("Isis", "Isis", "Isis", "Isis"), L("Hatschepsut", "Hatshepsut", "Hatsepszut", "Hatshepsut")], 
        answer: L("Kleopatra", "Cleopatra", "Kleopátra", "Cleopatra") 
      }
    },
    {
      id: "oasen",
      title: L("Oasen", "Oases", "Oázisok", "Oaze"),
      hint1: L("Grüne Orte in der Wüste.", "Green places in the desert.", "Zöld helyek a sivatagban.", "Locuri verzi în deșert."),
      hint2: L("Dort gibt es Wasser.", "There is water there.", "Van ott víz.", "Acolo este apă."),
      svg: { type: "text-bubbles", items: [{ text: "Wasser", color: "#fff", bg: "#0284c7" }, { text: "Palmen", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "o", label: L("Oase", "oasis", "oázis", "oază") }], items: [{ text: L("Quelle", "source", "forrás", "sursă"), bucketId: "o" }, { text: L("Datteln", "Dates", "Dátumok", "Datele"), bucketId: "o" }], instruction: L("Zuweisen!", "Assign!", "Hozzárendelés!", "Atribui!") },
      quiz: { 
        question: L("Was findet man in einer Oase?", "What do you find in an oasis?", "Mit találsz egy oázisban?", "Ce gasesti intr-o oaza?"), 
        choices: [L("Wasser und Pflanzen", "Water and plants", "Víz és növények", "Apă și plante"), L("Nur Sand", "Just sand", "Csak homok", "Doar nisip"), L("Eis", "Ice", "Jég", "Gheaţă"), L("Salzwasser", "Salt water", "Sós víz", "Apă sărată")], 
        answer: L("Wasser und Pflanzen", "Water and plants", "Víz és növények", "Apă și plante") 
      }
    },
    {
      id: "ordnung",
      title: L("Gesellschaft", "Company", "Vállalat", "Companie"),
      hint1: L("Die Ägypter hatten eine feste Ordnung.", "The Egyptians had a fixed order.", "Az egyiptomiaknak fix rendje volt.", "Egiptenii aveau o ordine fixă."),
      hint2: L("Ganz oben war der Pharao.", "At the top was the Pharaoh.", "A tetején a fáraó volt.", "În vârf era Faraonul."),
      svg: { type: "two-groups", left: { items: ["Pharao", "Beamte"], bg: "#dbeafe", border: "#2563eb" }, right: { items: ["Bauern", "Sklaven"], bg: "#fee2e2", border: "#dc2626" } },
      interactive: { type: "gap-fill", text: L("Die meisten Menschen waren __.", "Most people were __.", "A legtöbb ember __ volt.", "Majoritatea oamenilor erau __."), gaps: [{ index: 0, options: ["Bauern", "Schreiber"], correct: 0 }] },
      quiz: { 
        question: L("Wer bildete die Basis der Gesellschaft?", "Who formed the basis of society?", "Kik alkották a társadalom alapját?", "Cine a stat la baza societății?"), 
        choices: [L("Bauern", "farmers", "gazdálkodók", "fermierii"), L("Pharaonen", "Pharaohs", "Fáraók", "faraonii"), L("Priester", "priest", "pap", "preot"), L("Beamte", "officer", "tisztviselő", "ofiţer")], 
        answer: L("Bauern", "farmers", "gazdálkodók", "fermierii") 
      }
    }
  ]
};

// ─── ISLAND 3: DAS ANTIKE GRIECHENLAND ──────────────────────────────────────
const I3: IslandSpec = {
  id: "i3",
  title: L("Das antike Griechenland", "Ancient Greece", "Ókori Görögország", "Grecia antică"),
  topics: [
    {
      id: "polis",
      title: L("Die Polis", "The polis", "A polisz", "Polisul"),
      hint1: L("Ein griechischer Stadtstaat.", "A Greek city-state.", "Görög városállam.", "Un oraș-stat grec."),
      hint2: L("Jede Stadt war wie ein eigenes Land.", "Each city was like its own country.", "Minden város olyan volt, mint a saját országa.", "Fiecare oraș era ca propria țară."),
      svg: { type: "icon-grid", items: [{ emoji: "🏛️", label: "Stadt" }, { emoji: "🗺️", label: "Staat" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Polis", "Polis", "Polis", "Polis"), right: L("Stadtstaat", "city-state", "városállam", "oraș-stat") }, { left: L("Agora", "Agora", "Agóra", "Agora"), right: L("Marktplatz", "Marketplace", "Piactér", "Piața") }] },
      quiz: { 
        question: L("Was bedeutet Polis?", "What does polis mean?", "Mit jelent a polisz ?", "Ce înseamnă polis?"), 
        choices: [L("Stadtstaat", "city-state", "városállam", "oraș-stat"), L("Polizei", "police", "rendőrség", "poliţie"), L("Insel", "Island", "Sziget", "Insulă"), L("Tempel", "temple", "templom", "templu")], 
        answer: L("Stadtstaat", "city-state", "városállam", "oraș-stat") 
      }
    },
    {
      id: "athen",
      title: L("Athen", "Athens", "Athén", "Atena"),
      hint1: L("Das Zentrum von Bildung und Kunst.", "The center of education and art.", "Az oktatás és a művészet központja.", "Centrul de educație și artă."),
      hint2: L("Berühmt für die Akropolis.", "Famous for the Acropolis.", "Híres az Akropoliszról.", "Faimos pentru Acropole."),
      svg: { type: "text-bubbles", items: [{ text: "Wissen", color: "#fff", bg: "#3b82f6" }, { text: "Demokratie", color: "#fff", bg: "#10b981" }] },
      interactive: { type: "word-order", words: [L("Athen", "Athens", "Athén", "Atena"), L("ist", "is", "van", "este"), L("Kultur", "culture", "kultúra", "cultură")], instruction: L("Satz bilden!", "Make a sentence!", "Alkoss egy mondatot!", "Alcătuiește o propoziție!"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wofür war Athen besonders bekannt?", "What was Athens particularly famous for?", "Miről volt különösen híres Athén?", "Pentru ce a fost deosebit de renumită Atena?"), 
        choices: [L("Demokratie und Kunst", "Democracy and art", "Demokrácia és művészet", "Democrația și arta"), L("Nur Krieg", "Just war", "Csak háború", "Doar război"), L("Wüste", "Desert", "Sivatag", "Deşert"), L("Schneehäuser", "Snow houses", "Havas házak", "Case de zăpadă")], 
        answer: L("Demokratie und Kunst", "Democracy and art", "Demokrácia és művészet", "Democrația și arta") 
      }
    },
    {
      id: "sparta",
      title: L("Sparta", "Sparta", "Spárta", "Sparta"),
      hint1: L("Ein Staat mit starken Kriegern.", "A state with strong warriors.", "Egy állam erős harcosokkal.", "Un stat cu războinici puternici."),
      hint2: L("Die Erziehung war sehr streng.", "The upbringing was very strict.", "A nevelés nagyon szigorú volt.", "Creșterea a fost foarte strictă."),
      svg: { type: "two-groups", left: { items: ["Kampf", "Disziplin"], bg: "#fca5a5", border: "#b91c1c" }, right: { items: ["Musik"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Sparta", "Sparta", "Spárta", "Sparta"), right: L("Militär", "Military", "Katonai", "Militar") }, { left: L("Erziehung", "Upbringing", "Nevelés", "Cresterea"), right: L("Härte", "hardness", "keménység", "duritate") }] },
      quiz: { 
        question: L("Was war in Sparta am wichtigsten?", "What was most important in Sparta?", "Mi volt a legfontosabb Spártában?", "Ce a fost cel mai important în Sparta?"), 
        choices: [L("Militärische Stärke", "Military strength", "Katonai erő", "Puterea militară"), L("Malerei", "painting", "festés", "pictura"), L("Handel", "Trade", "Kereskedelmi", "Comerț"), L("Seefahrt", "seafaring", "tengerész-", "navigatori")], 
        answer: L("Militärische Stärke", "Military strength", "Katonai erő", "Puterea militară") 
      }
    },
    {
      id: "demokratie",
      title: L("Demokratie", "democracy", "demokrácia", "democraţie"),
      hint1: L("Herrschaft des Volkes.", "Rule of the people.", "A nép uralma.", "Stăpânirea poporului."),
      hint2: L("Bürger durften mitbestimmen.", "Citizens were allowed to have a say.", "A polgárok beleszólhattak.", "Cetăţenilor li s-a permis să aibă un cuvânt de spus."),
      svg: { type: "two-groups", left: { items: ["Volk", "Wahl"], bg: "#dcfce7", border: "#16a34a" }, right: { items: ["König", "Befehl"], bg: "#fee2e2", border: "#dc2626" } },
      interactive: { type: "gap-fill", text: L("In Athen durften __ Männer wählen.", "In Athens, __ men were allowed to vote.", "Athénban __ férfi szavazhatott.", "În Atena, __ bărbați aveau voie să voteze."), gaps: [{ index: 0, options: ["freie", "alle"], correct: 0 }] },
      quiz: { 
        question: L("Was bedeutet Demokratie?", "What does democracy mean?", "Mit jelent a demokrácia?", "Ce înseamnă democrație?"), 
        choices: [L("Volksherrschaft", "People's rule", "Népuralom", "Stăpânirea oamenilor"), L("Königsherrschaft", "Kingship", "Királyság", "Regalitate"), L("Gesetz", "Law", "Törvény", "Drept"), L("Reichtum", "wealth", "jólét", "avere")], 
        answer: L("Volksherrschaft", "People's rule", "Népuralom", "Stăpânirea oamenilor") 
      }
    },
    {
      id: "olympia",
      title: L("Olympische Spiele", "Olympic games", "Olimpiai játékok", "jocuri olimpice"),
      hint1: L("Wettkämpfe zu Ehren von Zeus.", "Competitions in honor of Zeus.", "Versenyek Zeusz tiszteletére.", "Competiții în cinstea lui Zeus."),
      hint2: L("Alle Kriege mussten ruhen.", "All wars had to stop.", "Minden háborúnak véget kellett vetni.", "Toate războaiele trebuiau să înceteze."),
      svg: { type: "icon-grid", items: [{ emoji: "🏃", label: "Lauf" }, { emoji: "🥇", label: "Sieg" }] },
      interactive: { type: "tap-count", tapCount: { emoji: "⭕", count: 5 }, instruction: L("Zähle die Ringe!", "Count the rings!", "Számold meg a gyűrűket!", "Numără inelele!") },
      quiz: { 
        question: L("Wem zu Ehren fanden die Spiele statt?", "Who were the games in honor of?", "Kiknek volt a tiszteletére rendezett játékok?", "Cui au fost jocurile în cinstea?"), 
        choices: [L("Zeus", "Zeus", "Zeusz", "Zeus"), L("Hera", "Hera", "Héra", "Hera"), L("Athene", "Athena", "Athéné", "Atena"), L("Poseidon", "Poseidon", "Poszeidón", "Poseidon")], 
        answer: L("Zeus", "Zeus", "Zeusz", "Zeus") 
      }
    },
    {
      id: "sokrates",
      title: L("Sokrates", "Socrates", "Szókratész", "Socrate"),
      hint1: L("Ein berühmter Philosoph.", "A famous philosopher.", "Híres filozófus.", "Un filosof celebru."),
      hint2: L("Er stellte viele Fragen.", "He asked many questions.", "Sok kérdést tett fel.", "A pus multe întrebări."),
      svg: { type: "word-display", word: "PHILOSOPHIE", color: "#6366f1" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Sokrates", "Socrates", "Szókratész", "Socrate"), right: L("Fragen", "Questions", "Kérdések", "Întrebări") }, { left: L("Wissen", "To know", "Tudni", "A sti"), right: L("Denken", "Think", "Gondol", "Gândește-te") }] },
      quiz: { 
        question: L("Was war Sokrates von Beruf?", "What was Socrates' profession?", "Mi volt Szókratész hivatása?", "Care a fost profesia lui Socrate?"), 
        choices: [L("Philosoph", "philosopher", "filozófus", "filozof"), L("Soldat", "soldier", "katona", "soldat"), L("Bauer", "farmer", "gazda", "agricultor"), L("Schreiber", "Scribe", "Írnok", "Scrib")], 
        answer: L("Philosoph", "philosopher", "filozófus", "filozof") 
      }
    },
    {
      id: "platon",
      title: L("Platon", "Plato", "Plató", "Platon"),
      hint1: L("Schüler von Sokrates.", "Disciple of Socrates.", "Szókratész tanítványa.", "Discipolul lui Socrate."),
      hint2: L("Er gründete die Akademie.", "He founded the academy.", "Ő alapította az akadémiát.", "El a fondat academia."),
      svg: { type: "text-bubbles", items: [{ text: "Ideen", color: "#fff", bg: "#8b5cf6" }, { text: "Schule", color: "#fff", bg: "#4f46e5" }] },
      interactive: { type: "gap-fill", text: L("Platon war ein __.", "Plato was a __.", "Platón __ volt.", "Platon era un __."), gaps: [{ index: 0, options: ["Denker", "König"], correct: 0 }] },
      quiz: { 
        question: L("Was gründete Platon in Athen?", "What did Plato found in Athens?", "Mit talált Platón Athénban?", "Ce a găsit Platon la Atena?"), 
        choices: [L("Eine Akademie", "An academy", "Egy akadémia", "O academie"), L("Ein Heer", "An army", "Egy hadsereg", "O armată"), L("Einen Hafen", "A port", "Egy kikötő", "Un port"), L("Einen Markt", "A market", "Egy piac", "O piata")], 
        answer: L("Eine Akademie", "An academy", "Egy akadémia", "O academie") 
      }
    },
    {
      id: "aristoteles",
      title: L("Aristoteles", "Aristotle", "Arisztotelész", "Aristotel"),
      hint1: L("Ein Forscher und Philosoph.", "A researcher and philosopher.", "Kutató és filozófus.", "Un cercetător și filozof."),
      hint2: L("Lehrer von Alexander dem Großen.", "Teacher of Alexander the Great.", "Nagy Sándor tanára.", "Învățătorul lui Alexandru cel Mare."),
      svg: { type: "two-groups", left: { items: ["Logik", "Wissen"], bg: "#f1f5f9", border: "#475569" }, right: { items: ["Schule"], bg: "#f1f5f9", border: "#475569" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Aristoteles", "Aristotle", "Arisztotelész", "Aristotel"), right: L("Lehrer", "Teacher", "Tanár", "Profesor") }, { left: L("Alexander", "Alexander", "Sándor", "Alexandru"), right: L("Schüler", "Pupils", "Tanulók", "Elevii") }] },
      quiz: { 
        question: L("Wen unterrichtete Aristoteles?", "Who did Aristotle teach?", "Kit tanított Arisztotelész?", "Pe cine a predat Aristotel?"), 
        choices: [L("Alexander den Großen", "Alexander the Great", "Nagy Sándor", "Alexandru cel Mare"), L("Caesar", "Caesar", "Caesar", "Cezar"), L("Sokrates", "Socrates", "Szókratész", "Socrate"), L("Napoleon", "Napoleon", "Napóleon", "Napoleon")], 
        answer: L("Alexander den Großen", "Alexander the Great", "Nagy Sándor", "Alexandru cel Mare") 
      }
    },
    {
      id: "theater",
      title: L("Theater", "theater", "színház", "teatru"),
      hint1: L("Die Griechen liebten Dramen.", "The Greeks loved drama.", "A görögök szerették a drámát.", "Grecii iubeau drama."),
      hint2: L("Männer spielten alle Rollen.", "Men played all the roles.", "Férfiak játszották az összes szerepet.", "Bărbații au jucat toate rolurile."),
      svg: { type: "icon-grid", items: [{ emoji: "🎭", label: "Maske" }, { emoji: "🏛️", label: "Bühne" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "t", label: L("Theater", "theater", "színház", "teatru") }], items: [{ text: L("Tragödie", "tragedy", "tragédia", "tragedie"), bucketId: "t" }, { text: L("Komödie", "comedy", "komédia", "comedie"), bucketId: "t" }], instruction: L("Zuweisen!", "Assign!", "Hozzárendelés!", "Atribui!") },
      quiz: { 
        question: L("Was trugen griechische Schauspieler oft?", "What did Greek actors often wear?", "Mit viseltek gyakran a görög színészek?", "Ce purtau adesea actorii greci?"), 
        choices: [L("Masken", "Masks", "Maszkok", "Măști"), L("Brillen", "Glasses", "Szemüveg", "Ochelari"), L("Hüte", "Hats", "Kalapok", "Pălării"), L("Nichts", "Nothing", "Semmi", "Nimic")], 
        answer: L("Masken", "Masks", "Maszkok", "Măști") 
      }
    },
    {
      id: "zeus",
      title: L("Gott Zeus", "God Zeus", "Zeusz Isten", "Zeus Zeus"),
      hint1: L("Der Göttervater.", "The father of the gods.", "Az istenek atyja.", "Tatăl zeilor."),
      hint2: L("Sein Zeichen ist der Blitz.", "His symbol is lightning.", "Jelképe a villám.", "Simbolul lui este fulgerul."),
      svg: { type: "text-bubbles", items: [{ text: "Blitz", color: "#fff", bg: "#fde047" }, { text: "Olymp", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Zeus", "Zeus", "Zeusz", "Zeus"), right: L("Blitz", "flash", "vaku", "flash") }, { left: L("Olymp", "Olympus", "Olympus", "Olimp"), right: L("Berg", "Mountain", "Hegy", "Munte") }] },
      quiz: { 
        question: L("Wo wohnten die griechischen Götter?", "Where did the Greek gods live?", "Hol éltek a görög istenek?", "Unde locuiau zeii greci?"), 
        choices: [L("Auf dem Olymp", "On Mount Olympus", "Az Olümposz hegyén", "Pe Muntele Olimp"), L("Im Meer", "In the sea", "A tengerben", "În mare"), L("In der Wüste", "In the desert", "A sivatagban", "În deșert"), L("In den Pyramiden", "In the pyramids", "A piramisokban", "În piramide")], 
        answer: L("Auf dem Olymp", "On Mount Olympus", "Az Olümposz hegyén", "Pe Muntele Olimp") 
      }
    },
    {
      id: "athene",
      title: L("Göttin Athene", "Goddess Athena", "Athéné istennő", "Zeița Atena"),
      hint1: L("Göttin der Weisheit.", "Goddess of wisdom.", "A bölcsesség istennője.", "Zeiță a înțelepciunii."),
      hint2: L("Schutzherrin von Athen.", "Patroness of Athens.", "Athén védőnője.", "Patrona Atenei."),
      svg: { type: "icon-grid", items: [{ emoji: "🦉", label: "Eule" }, { emoji: "🛡️", label: "Schutz" }] },
      interactive: { type: "word-order", words: [L("Weisheit", "wisdom", "bölcsesség", "înţelepciune"), L("und", "and", "és", "şi"), L("Kampf", "Battle", "Csata", "Luptă")], instruction: L("Wofür steht Athene?", "What does Athena stand for?", "Mit jelent az Athena?", "Ce reprezintă Athena?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Welches Tier ist das Symbol für Athene?", "Which animal is the symbol of Athena?", "Melyik állat Athéné jelképe?", "Care animal este simbolul Atenei?"), 
        choices: [L("Eule", "Owl", "Bagoly", "Bufniţă"), L("Löwe", "Lion", "Oroszlán", "Leu"), L("Adler", "eagle", "sas", "vultur"), L("Schlange", "Snake", "Kígyó", "Şarpe")], 
        answer: L("Eule", "Owl", "Bagoly", "Bufniţă") 
      }
    },
    {
      id: "perserkriege",
      title: L("Perserkriege", "Persian Wars", "Perzsa háborúk", "Războaiele persane"),
      hint1: L("Griechen kämpften gegen das Perserreich.", "Greeks fought against the Persian Empire.", "A görögök harcoltak a Perzsa Birodalom ellen.", "Grecii au luptat împotriva Imperiului Persan."),
      hint2: L("Sie verteidigten ihre Freiheit.", "They defended their freedom.", "Megvédték a szabadságukat.", "Și-au apărat libertatea."),
      svg: { type: "two-groups", left: { items: ["Perser", "Heer"], bg: "#fee2e2", border: "#dc2626" }, right: { items: ["Griechen", "Polis"], bg: "#dbeafe", border: "#2563eb" } },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "g", label: L("Griechen", "Greeks", "görögök", "greci") }, { id: "p", label: L("Perser", "Persian", "perzsa", "persană") }], items: [{ text: L("Athen", "Athens", "Athén", "Atena"), bucketId: "g" }, { text: L("Xerxes", "Xerxes", "Xerxész", "Xerxes"), bucketId: "p" }], instruction: L("Zuweisen!", "Assign!", "Hozzárendelés!", "Atribui!") },
      quiz: { 
        question: L("Gegen wen kämpften die Griechen?", "Who were the Greeks fighting against?", "Ki ellen harcoltak a görögök?", "Contra cine luptau grecii?"), 
        choices: [L("Perser", "Persian", "perzsa", "persană"), L("Römer", "Romans", "rómaiak", "romani"), L("Ägypter", "Egyptians", "egyiptomiak", "egiptenii"), L("Germanen", "Teutons", "teutonok", "teutonii")], 
        answer: L("Perser", "Persian", "perzsa", "persană") 
      }
    },
    {
      id: "marathon",
      title: L("Marathon", "Marathon", "Maraton", "Maraton"),
      hint1: L("Ein berühmter Sieg der Athener.", "A famous victory for the Athenians.", "Az athéniak híres győzelme.", "O victorie celebră pentru atenieni."),
      hint2: L("Ein Läufer brachte die Nachricht.", "A runner brought the news.", "Egy futó hozta a hírt.", "Un alergător a adus vestea."),
      svg: { type: "sentence-display", words: ["Sieg", "über", "die", "Perser"], color: "#16a34a" },
      interactive: { type: "gap-fill", text: L("Der Lauf von Marathon ist __ km lang.", "The marathon course is __ km long.", "A maratoni pálya __ km hosszú.", "Cursa de maraton are o lungime de __ km."), gaps: [{ index: 0, options: ["42", "10", "100"], correct: 0 }] },
      quiz: { 
        question: L("Was geschah bei Marathon?", "What happened at Marathon?", "Mi történt a Maratonon?", "Ce s-a întâmplat la Maraton?"), 
        choices: [L("Eine Schlacht", "A battle", "Egy csata", "O bătălie"), L("Ein Fest", "A celebration", "Ünnep", "O sărbătoare"), L("Ein Hausbau", "A house building", "Egy ház épület", "O clădire de casă"), L("Eine Reise", "A journey", "Egy utazás", "O călătorie")], 
        answer: L("Eine Schlacht", "A battle", "Egy csata", "O bătălie") 
      }
    },
    {
      id: "agora",
      title: L("Die Agora", "The Agora", "Az Agora", "Agora"),
      hint1: L("Der Marktplatz von Athen.", "The Market Square of Athens.", "Az athéni piactér.", "Piața din Atena."),
      hint2: L("Hier wurde Politik gemacht.", "There was politics here.", "Volt itt politika.", "Aici era politică."),
      svg: { type: "icon-grid", items: [{ emoji: "🍎", label: "Markt" }, { emoji: "🗣️", label: "Rede" }] },
      interactive: { type: "word-order", words: [L("Treffpunkt", "Meeting point", "Találkozási pont", "Punct de întâlnire"), L("der", "the", "a", "cel"), L("Bürger", "Citizens", "Polgárok", "Cetăţeni")], instruction: L("Was war die Agora?", "What was the Agora?", "Mi volt az Agora?", "Ce era Agora?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Was war die Agora?", "What was the Agora?", "Mi volt az Agora?", "Ce era Agora?"), 
        choices: [L("Marktplatz", "Marketplace", "Piactér", "Piața"), L("Tempel", "temple", "templom", "templu"), L("Hafen", "Harbor", "Kikötő", "Port"), L("Schlachtfeld", "Battlefield", "Csatatér", "Câmpul de luptă")], 
        answer: L("Marktplatz", "Marketplace", "Piactér", "Piața") 
      }
    },
    {
      id: "hellenismus",
      title: L("Hellenismus", "Hellenism", "hellenizmus", "elenism"),
      hint1: L("Die Zeit nach Alexander dem Großen.", "The time after Alexander the Great.", "Nagy Sándor utáni idők.", "Timpul de după Alexandru cel Mare."),
      hint2: L("Griechische Kultur verbreitete sich.", "Greek culture spread.", "A görög kultúra elterjedt.", "Cultura greacă s-a răspândit."),
      svg: { type: "text-bubbles", items: [{ text: "Kultur", color: "#fff", bg: "#06b6d4" }, { text: "Welt", color: "#fff", bg: "#0891b2" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Hellenismus", "Hellenism", "hellenizmus", "elenism"), right: L("Kulturmix", "Mix of cultures", "Kultúrák keveréke", "Amestecul de culturi") }, { left: L("Alexander", "Alexander", "Sándor", "Alexandru"), right: L("Eroberer", "conqueror", "hódító", "cuceritor") }] },
      quiz: { 
        question: L("Was verbreitete sich im Hellenismus?", "What spread in Hellenism?", "Mi terjedt el a hellenizmusban?", "Ce s-a răspândit în elenism?"), 
        choices: [L("Griechische Kultur", "Greek culture", "görög kultúra", "cultura greaca"), L("Wüstensand", "desert sand", "sivatagi homok", "nisip de deșert"), L("Römisches Recht", "Roman law", "római jog", "dreptul roman"), L("Englisch", "English", "angol", "engleză")], 
        answer: L("Griechische Kultur", "Greek culture", "görög kultúra", "cultura greaca") 
      }
    }
  ]
};

// ─── ISLAND 4: RÖMISCHE REPUBLIK ────────────────────────────────────────────
const I4: IslandSpec = {
  id: "i4",
  title: L("Römische Republik", "Roman Republic", "Római Köztársaság", "Republica Romană"),
  topics: [
    {
      id: "mythos",
      title: L("Gründungsmythos", "Founding myth", "Mítosz alapítása", "Mitul fondator"),
      hint1: L("Romulus und Remus gründeten Rom.", "Romulus and Remus founded Rome.", "Romulus és Remus megalapították Rómát.", "Romulus și Remus au fondat Roma."),
      hint2: L("Sie wurden von einer Wölfin gesäugt.", "They were suckled by a she-wolf.", "Egy nőstény farkas szoptatta meg őket.", "Au fost alăptați de o lupoaică."),
      svg: { type: "icon-grid", items: [{ emoji: "🐺", label: "Wölfin" }, { emoji: "👶", label: "Zwillinge" }] },
      interactive: { type: "word-order", words: [L("753", "753", "753", "753"), L("v.Chr.", "BC", "I.E", "î.Hr"), L("Rom", "Rome", "Róma", "Roma"), L("gegründet", "founded", "alapított", "fondat")], instruction: L("Merkspruch: Wann wurde Rom gegründet?", "Motto: When was Rome founded?", "Mottó: Mikor alapították Rómát?", "Motto: Când a fost fondată Roma?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Wer waren die sagenhaften Gründer Roms?", "Who were the legendary founders of Rome?", "Kik voltak Róma legendás alapítói?", "Cine au fost fondatorii legendari ai Romei?"), 
        choices: [L("Romulus und Remus", "Romulus and Remus", "Romulus és Remus", "Romulus și Remus"), L("Caesar und Augustus", "Caesar and Augustus", "Caesar és Augustus", "Caesar și Augustus"), L("Zeus und Poseidon", "Zeus and Poseidon", "Zeusz és Poszeidón", "Zeus și Poseidon"), L("Adam und Eva", "Adam and Eve", "Ádám és Éva", "Adam și Eva")], 
        answer: L("Romulus und Remus", "Romulus and Remus", "Romulus és Remus", "Romulus și Remus") 
      }
    },
    {
      id: "senat",
      title: L("Der Senat", "The Senate", "A szenátus", "Senatul"),
      hint1: L("Die Versammlung der Ältesten.", "The Assembly of Elders.", "A Vének Gyűlése.", "Adunarea Bătrânilor."),
      hint2: L("Er beriet die Konsuln.", "He advised the consuls.", "Azt tanácsolta a konzuloknak.", "I-a sfătuit pe consuli."),
      svg: { type: "text-bubbles", items: [{ text: "Rat", color: "#fff", bg: "#ef4444" }, { text: "Macht", color: "#fff", bg: "#b91c1c" }] },
      interactive: { type: "gap-fill", text: L("Im Senat saßen die __.", "The __ sat in the Senate.", "A __ a szenátusban ült.", "__ a stat în Senat."), gaps: [{ index: 0, options: ["Adligen", "Bauern"], correct: 0 }] },
      quiz: { 
        question: L("Wer hatte in der Republik viel Macht?", "Who had a lot of power in the Republic?", "Kinek volt nagy hatalma a Köztársaságban?", "Cine avea multă putere în Republică?"), 
        choices: [L("Der Senat", "The Senate", "A szenátus", "Senatul"), L("Der Sklave", "The slave", "A rabszolga", "Sclavul"), L("Der Feind", "The enemy", "Az ellenség", "inamicul"), L("Niemand", "No one", "Senki", "Nici unul")], 
        answer: L("Der Senat", "The Senate", "A szenátus", "Senatul") 
      }
    },
    {
      id: "konsuln",
      title: L("Konsuln", "Consuls", "konzulok", "consuli"),
      hint1: L("Die zwei obersten Beamten.", "The two highest officials.", "A két legmagasabb tisztségviselő.", "Cei mai înalți doi oficiali."),
      hint2: L("Sie regierten für ein Jahr.", "They ruled for a year.", "Egy évig uralkodtak.", "Au condus timp de un an."),
      svg: { type: "two-groups", left: { items: ["Konsul 1", "Macht"], bg: "#fee2e2", border: "#ef4444" }, right: { items: ["Konsul 2", "Macht"], bg: "#fee2e2", border: "#ef4444" } },
      interactive: { type: "tap-count", tapCount: { emoji: "👔", count: 2 }, instruction: L("Wie viele Konsuln?", "How many consuls?", "Hány konzul?", "Câți consuli?") },
      quiz: { 
        question: L("Wie lange durfte ein Konsul regieren?", "How long was a consul allowed to rule?", "Meddig uralkodhatott egy konzul?", "Cât timp i s-a permis unui consul să conducă?"), 
        choices: [L("Ein Jahr", "A year", "Egy év", "Un an"), L("Ewig", "Forever", "Örökre", "Pentru totdeauna"), L("Zehn Jahre", "Ten years", "Tíz év", "Zece ani"), L("Einen Monat", "A month", "Egy hónap", "O lună")], 
        answer: L("Ein Jahr", "A year", "Egy év", "Un an") 
      }
    },
    {
      id: "staende",
      title: L("Patrizier & Plebejer", "Patricians & Plebeians", "Patríciusok és plebejusok", "Patricieni și plebei"),
      hint1: L("Zwei Gruppen in Rom.", "Two groups in Rome.", "Két csoport Rómában.", "Două grupuri la Roma."),
      hint2: L("Patrizier waren adlig, Plebejer das Volk.", "Patricians were nobles, plebeians were the people.", "A patríciusok nemesek, a plebejusok a népek.", "Patricienii erau nobili, plebeii erau oamenii."),
      svg: { type: "two-groups", left: { items: ["Patrizier", "Reich"], bg: "#ede9fe", border: "#4f46e5" }, right: { items: ["Plebejer", "Volk"], bg: "#f1f5f9", border: "#475569" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Patrizier", "Patrician", "Patrícius", "Patrician"), right: L("Adel", "Nobility", "Nemesség", "Nobleţe") }, { left: L("Plebejer", "Plebeians", "plebejusok", "plebei"), right: L("Einfaches Volk", "Simple people", "Egyszerű emberek", "Oameni simpli") }] },
      quiz: { 
        question: L("Wie nannte man den armen Teil der Bürger?", "What was the poor part of the citizens called?", "Hogy hívták a polgárok szegény részét?", "Cum se numea partea săracă a cetățenilor?"), 
        choices: [L("Plebejer", "Plebeians", "plebejusok", "plebei"), L("Patrizier", "Patrician", "Patrícius", "Patrician"), L("Kaiser", "Emperor", "Császár", "Împărat"), L("Senatoren", "Senators", "Szenátorok", "Senatorii")], 
        answer: L("Plebejer", "Plebeians", "plebejusok", "plebei") 
      }
    },
    {
      id: "zwoelf",
      title: L("Zwölftafelgesetz", "Law of the Twelve Tables", "A tizenkét tábla törvénye", "Legea celor douăsprezece tabele"),
      hint1: L("Die ersten schriftlichen Gesetze Roms.", "The first written laws of Rome.", "Róma első írott törvényei.", "Primele legi scrise ale Romei."),
      hint2: L("Jeder sollte sie kennen können.", "Everyone should be able to know them.", "Mindenkinek tudnia kell őket ismerni.", "Toată lumea ar trebui să le poată cunoaște."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Tafel 1" }, { emoji: "📜", label: "Tafel 12" }] },
      interactive: { type: "gap-fill", text: L("Die Gesetze standen auf __.", "The laws were __.", "A törvények __ voltak.", "Legile erau __."), gaps: [{ index: 0, options: ["Bronze-Tafeln", "Papier"], correct: 0 }] },
      quiz: { 
        question: L("Warum waren schriftliche Gesetze wichtig?", "Why were written laws important?", "Miért voltak fontosak az írott törvények?", "De ce au fost importante legile scrise?"), 
        choices: [L("Gleiches Recht für alle", "Equal rights for everyone", "Egyenlő jogok mindenkinek", "Drepturi egale pentru toată lumea"), L("Waren sie nicht", "They weren't", "Nem voltak azok", "Nu erau"), L("Nur zum Lesen", "Just for reading", "Csak olvasásra", "Doar pentru citit"), L("Wegen des Metalls", "Because of the metal", "A fém miatt", "Din cauza metalului")], 
        answer: L("Gleiches Recht für alle", "Equal rights for everyone", "Egyenlő jogok mindenkinek", "Drepturi egale pentru toată lumea") 
      }
    },
    {
      id: "punisch",
      title: L("Punische Kriege", "Punic Wars", "pun háborúk", "Războaiele punice"),
      hint1: L("Rom gegen Karthago.", "Rome against Carthage.", "Róma Karthágó ellen.", "Roma împotriva Cartaginei."),
      hint2: L("Es ging um die Macht im Mittelmeer.", "It was about power in the Mediterranean.", "A Földközi-tengeren uralkodó hatalomról volt szó.", "Era vorba despre puterea în Marea Mediterană."),
      svg: { type: "text-bubbles", items: [{ text: "Rom", color: "#fff", bg: "#dc2626" }, { text: "Karthago", color: "#fff", bg: "#2563eb" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Hannibal", "Hannibal", "Hannibál", "Hannibal"), right: L("Karthago", "Carthage", "Karthágó", "Cartagina") }, { left: L("Scipio", "Scipio", "Scipio", "Scipio"), right: L("Rom", "Rome", "Róma", "Roma") }] },
      quiz: { 
        question: L("Gegen welche Stadt kämpfte Rom in den Punischen Kriegen?", "Which city did Rome fight against in the Punic Wars?", "Melyik város ellen harcolt Róma a pun háborúkban?", "Contra ce oraș a luptat Roma în războaiele punice?"), 
        choices: [L("Karthago", "Carthage", "Karthágó", "Cartagina"), L("Athen", "Athens", "Athén", "Atena"), L("Alexandria", "Alexandria", "Alexandria", "Alexandria"), L("Berlin", "Berlin", "Berlin", "Berlin")], 
        answer: L("Karthago", "Carthage", "Karthágó", "Cartagina") 
      }
    },
    {
      id: "hannibal",
      title: L("Hannibal", "Hannibal", "Hannibál", "Hannibal"),
      hint1: L("Der Feldherr von Karthago.", "The general of Carthage.", "Karthágó tábornoka.", "generalul de la Cartagina."),
      hint2: L("Er zog mit Elefanten über die Alpen.", "He crossed the Alps with elephants.", "Elefántokkal kelt át az Alpokon.", "A traversat Alpii cu elefanții."),
      svg: { type: "icon-grid", items: [{ emoji: "🐘", label: "Elefant" }, { emoji: "🏔️", label: "Alpen" }] },
      interactive: { type: "word-order", words: [L("Hannibal", "Hannibal", "Hannibál", "Hannibal"), L("ante", "ante", "ante", "ante"), L("portas", "portas", "portas", "portas")], instruction: L("Berühmter Ausruf!", "Famous exclamation!", "Híres felkiáltás!", "Exclamație celebră!"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Welches Tier nutzte Hannibal für seinen Alpenzug?", "Which animal did Hannibal use for his Alpine journey?", "Melyik állatot használta Hannibal alpesi útjára?", "Ce animal a folosit Hannibal pentru călătoria sa alpină?"), 
        choices: [L("Elefanten", "Elephants", "Elefántok", "Elefanti"), L("Pferde", "Horses", "Lovak", "cai"), L("Hunde", "dogs", "kutyák", "câini"), L("Löwen", "Lions", "Nevezetességek", "Leii")], 
        answer: L("Elefanten", "Elephants", "Elefántok", "Elefanti") 
      }
    },
    {
      id: "legion",
      title: L("Die Legion", "The Legion", "A légió", "Legiunea"),
      hint1: L("Das römische Heer.", "The Roman army.", "A római hadsereg.", "Armata romană."),
      hint2: L("Soldaten waren gut organisiert.", "Soldiers were well organized.", "A katonák jól szervezettek voltak.", "Soldații erau bine organizați."),
      svg: { type: "sentence-display", words: ["Stark", "und", "diszipliniert"], color: "#991b1b" },
      interactive: { type: "tap-count", tapCount: { emoji: "🛡️", count: 4 }, instruction: L("Zähle die Schilde!", "Count the shields!", "Számold meg a pajzsokat!", "Numără scuturile!") },
      quiz: { 
        question: L("Wie nannte man einen römischen Soldaten?", "What did you call a Roman soldier?", "Hogy hívtak római katonát?", "Cum ai numit un soldat roman?"), 
        choices: [L("Legionär", "Legionnaire", "Légionárius", "Legionar"), L("Ritter", "Knight", "Lovag", "Cavaler"), L("Hoplit", "Hoplite", "Hoplita", "hoplit"), L("Ninja", "Ninja", "Ninja", "Ninja")], 
        answer: L("Legionär", "Legionnaire", "Légionárius", "Legionar") 
      }
    },
    {
      id: "strassen",
      title: L("Straßenbau", "Road construction", "Útépítés", "Construcția drumurilor"),
      hint1: L("Rom baute feste Straßen durch ganz Europa.", "Rome built solid roads throughout Europe.", "Róma szilárd utakat épített Európa-szerte.", "Roma a construit drumuri solide în toată Europa."),
      hint2: L("Die Via Appia ist sehr berühmt.", "The Appian Way is very famous.", "Az Appian Way nagyon híres.", "Calea Appian este foarte faimoasă."),
      svg: { type: "two-groups", left: { items: ["Stein", "Straße"], bg: "#f1f5f9", border: "#475569" }, right: { items: ["Rom", "Zentrum"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "gap-fill", text: L("Alle Wege führen nach __.", "All roads lead to __.", "Minden út ide vezet: __.", "Toate drumurile duc la __."), gaps: [{ index: 0, options: ["Rom", "Athen"], correct: 0 }] },
      quiz: { 
        question: L("Warum baute Rom so gute Straßen?", "Why did Rome build such good roads?", "Miért épített Róma ilyen jó utakat?", "De ce a construit Roma drumuri atât de bune?"), 
        choices: [L("Für das Militär", "For the military", "A katonaság számára", "Pentru militari"), L("Nur zum Wandern", "Just for hiking", "Csak túrázáshoz", "Doar pentru drumeții"), L("Für Fahrräder", "For bicycles", "Kerékpárokhoz", "Pentru biciclete"), L("Waren sie nicht", "They weren't", "Nem voltak azok", "Nu erau")], 
        answer: L("Für das Militär", "For the military", "A katonaság számára", "Pentru militari") 
      }
    },
    {
      id: "forum",
      title: L("Forum Romanum", "Roman Forum", "római fórum", "Forumul Roman"),
      hint1: L("Das Zentrum des öffentlichen Lebens.", "The center of public life.", "A közélet központja.", "Centrul vieții publice."),
      hint2: L("Hier gab es Märkte und Tempel.", "There were markets and temples here.", "Itt piacok és templomok voltak.", "Aici erau piețe și temple."),
      svg: { type: "icon-grid", items: [{ emoji: "🏛️", label: "Tempel" }, { emoji: "🛒", label: "Markt" }] },
      interactive: { type: "word-order", words: [L("Zentrum", "center", "központ", "centru"), L("der", "the", "a", "cel"), L("Stadt", "City", "Város", "Oraş")], instruction: L("Was war das Forum?", "What was the forum?", "mi volt a fórum?", "Care a fost forumul?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Was war das Forum Romanum?", "What was the Roman Forum?", "Mi volt a Forum Romanum?", "Ce a fost Forumul Roman?"), 
        choices: [L("Marktplatz und Zentrum", "Market square and center", "Piactér és központ", "Piața și centrul pieței"), L("Ein Wald", "A forest", "Egy erdő", "O pădure"), L("Ein Hafen", "A port", "Egy kikötő", "Un port"), L("Ein Schlachtfeld", "A battlefield", "Egy csatatér", "Un câmp de luptă")], 
        answer: L("Marktplatz und Zentrum", "Market square and center", "Piactér és központ", "Piața și centrul pieței") 
      }
    },
    {
      id: "gladiatoren",
      title: L("Gladiatoren", "Gladiators", "Gladiátorok", "Gladiatori"),
      hint1: L("Kämpfer in Arenen.", "Fighters in arenas.", "Harcosok az arénákban.", "Luptători în arene."),
      hint2: L("Oft waren es Sklaven.", "Often they were slaves.", "Gyakran rabszolgák voltak.", "Adesea erau sclavi."),
      svg: { type: "text-bubbles", items: [{ text: "Kampf", color: "#fff", bg: "#475569" }, { text: "Arena", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Netz", "network", "hálózat", "reţea"), right: L("Retiarier", "Retiarian", "Nyugdíjas", "Retiar") }, { left: L("Schwert", "sword", "kard", "sabie"), right: L("Gladius", "Gladius", "Gladius", "Gladius") }] },
      quiz: { 
        question: L("Wo kämpften Gladiatoren?", "Where did gladiators fight?", "Hol harcoltak a gladiátorok?", "Unde au luptat gladiatori?"), 
        choices: [L("In der Arena", "In the arena", "Az arénában", "În arenă"), L("Auf dem Schiff", "On the ship", "A hajón", "Pe navă"), L("Im Wald", "In the forest", "Az erdőben", "În pădure"), L("Gar nicht", "Not at all", "Egyáltalán nem", "Deloc")], 
        answer: L("In der Arena", "In the arena", "Az arénában", "În arenă") 
      }
    },
    {
      id: "caesar",
      title: L("Julius Caesar", "Julius Caesar", "Julius Caesar", "Iulius Cezar"),
      hint1: L("Ein mächtiger Feldherr.", "A powerful general.", "Erőteljes tábornok.", "Un general puternic."),
      hint2: L("Er eroberte Gallien.", "He conquered Gaul.", "Meghódította Galliát.", "A cucerit Galia."),
      svg: { type: "icon-grid", items: [{ emoji: "🌿", label: "Lorbeer" }, { emoji: "🗡️", label: "Dolch" }] },
      interactive: { type: "word-order", words: [L("Veni", "Veni", "Veni", "Veni"), L("vidi", "vidi", "vidi", "vidi"), L("vici", "vici", "vici", "vici")], instruction: L("Caesars Ausspruch!", "Caesar's saying!", "Caesar mondja!", "Cezarul spune!"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Welches Land eroberte Caesar?", "Which country did Caesar conquer?", "Melyik országot hódította meg Caesar?", "Ce țară a cucerit Cezar?"), 
        choices: [L("Gallien", "Gaul", "Gallia", "Galia"), L("China", "China", "Kína", "China"), L("Amerika", "America", "Amerika", "America"), L("Griechenland", "Greece", "Görögország", "Grecia")], 
        answer: L("Gallien", "Gaul", "Gallia", "Galia") 
      }
    },
    {
      id: "rubikon",
      title: L("Der Rubikon", "The Rubicon", "A Rubicon", "Rubiconul"),
      hint1: L("Ein Fluss in Italien.", "A river in Italy.", "Egy folyó Olaszországban.", "Un râu în Italia."),
      hint2: L("Caesar überschritt ihn mit seinem Heer.", "Caesar crossed it with his army.", "Caesar átkelt rajta a seregével.", "Cezar a traversat-o cu armata lui."),
      svg: { type: "text-bubbles", items: [{ text: "Fluss", color: "#fff", bg: "#3b82f6" }, { text: "Entscheidung", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "gap-fill", text: L("Die Würfel sind __.", "The dice are __.", "A kocka __.", "Zarurile sunt __."), gaps: [{ index: 0, options: ["gefallen", "rund"], correct: 0 }] },
      quiz: { 
        question: L("Was bedeutete das Überschreiten des Rubikon?", "What did crossing the Rubicon mean?", "Mit jelentett átlépni a Rubicont?", "Ce a însemnat trecerea Rubiconului?"), 
        choices: [L("Bürgerkrieg", "Civil War", "Polgárháború", "Războiul civil"), L("Frieden", "Peace", "Béke", "Pace"), L("Urlaub", "Vacation", "Vakáció", "Vacanţă"), L("Handel", "Trade", "Kereskedelmi", "Comerț")], 
        answer: L("Bürgerkrieg", "Civil War", "Polgárháború", "Războiul civil") 
      }
    },
    {
      id: "triumvirat",
      title: L("Triumvirat", "triumvirate", "triumvirátus", "triumvirat"),
      hint1: L("Die Herrschaft von drei Männern.", "The rule of three men.", "Három férfi uralma.", "Regula celor trei bărbați."),
      hint2: L("Caesar war einer von ihnen.", "Caesar was one of them.", "Caesar volt az egyikük.", "Cezar a fost unul dintre ei."),
      svg: { type: "two-groups", left: { items: ["Caesar", "Pompeius"], bg: "#dbeafe", border: "#2563eb" }, right: { items: ["Crassus"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "tap-count", tapCount: { emoji: "👤", count: 3 }, instruction: L("Zähle die Männer!", "Count the men!", "Számold meg a férfiakat!", "Numără bărbații!") },
      quiz: { 
        question: L("Was bedeutet Triumvirat?", "What does triumvirate mean?", "Mit jelent a triumvirátus?", "Ce înseamnă triumvirat?"), 
        choices: [L("Drei-Männer-Bund", "Three-man group", "Háromfős csoport", "Grup de trei oameni"), L("Königsrat", "King's Council", "Királyi Tanács", "Consiliul Regelui"), L("Volksfest", "Folk festival", "Népi fesztivál", "Festival popular"), L("Krieg", "War", "Háború", "Război")], 
        answer: L("Drei-Männer-Bund", "Three-man group", "Háromfős csoport", "Grup de trei oameni") 
      }
    },
    {
      id: "iden",
      title: L("Iden des März", "Ides of March", "Március idei", "Ideile lui martie"),
      hint1: L("Der Todestag Caesars.", "The anniversary of Caesar's death.", "Caesar halálának évfordulója.", "Aniversarea morții lui Cezar."),
      hint2: L("Er wurde ermordet.", "He was murdered.", "Meggyilkolták.", "A fost ucis."),
      svg: { type: "icon-grid", items: [{ emoji: "🗡️", label: "Mord" }, { emoji: "📅", label: "15. März" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Brutus", "Brutus", "Brutus", "Brutus"), right: L("Verschwörer", "conspirators", "összeesküvők", "conspiratori") }, { left: L("Caesar", "Caesar", "Caesar", "Cezar"), right: L("Opfer", "Victim", "Áldozat", "Victimă") }] },
      quiz: { 
        question: L("Wann wurde Caesar ermordet?", "When was Caesar assassinated?", "Mikor gyilkolták meg Caesart?", "Când a fost asasinat Cezar?"), 
        choices: [L("15. März", "March 15th", "március 15", "15 martie"), L("1. Januar", "January 1st", "január 1", "1 ianuarie"), L("4. Juli", "4th of July", "július 4", "4 iulie"), L("24. Dezember", "December 24th", "december 24", "24 decembrie")], 
        answer: L("15. März", "March 15th", "március 15", "15 martie") 
      }
    }
  ]
};

// ─── ISLAND 5: RÖMISCHES KAISERREICH ─────────────────────────────────────────
const I5: IslandSpec = {
  id: "i5",
  title: L("Römisches Kaiserreich", "Roman Empire", "Római Birodalom", "Imperiul Roman"),
  topics: [
    {
      id: "augustus",
      title: L("Augustus", "Augustus", "Augustus", "Augustus"),
      hint1: L("Der erste römische Kaiser.", "The first Roman emperor.", "Az első római császár.", "Primul împărat roman."),
      hint2: L("Er brachte Frieden nach Rom.", "He brought peace to Rome.", "Békét hozott Rómába.", "El a adus pacea la Roma."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "Kaiser" }, { emoji: "🕊️", label: "Frieden" }] },
      interactive: { type: "gap-fill", text: L("Augustus hieß früher __.", "Augustus used to be called __.", "Augustust régebben __-nek hívták.", "Augustus se numea __."), gaps: [{ index: 0, options: ["Octavian", "Caesar"], correct: 0 }] },
      quiz: { 
        question: L("Wer war der erste Kaiser von Rom?", "Who was the first emperor of Rome?", "Ki volt Róma első császára?", "Cine a fost primul împărat al Romei?"), 
        choices: [L("Augustus", "Augustus", "Augustus", "Augustus"), L("Caesar", "Caesar", "Caesar", "Cezar"), L("Nero", "Nero", "Néró", "Nero"), L("Trajan", "Trajan", "Traianus", "Traian")], 
        answer: L("Augustus", "Augustus", "Augustus", "Augustus") 
      }
    },
    {
      id: "pax",
      title: L("Pax Romana", "Pax Romana", "Pax Romana", "Pax Romana"),
      hint1: L("Der römische Friede.", "The Roman peace.", "A római béke.", "Pacea romană."),
      hint2: L("Eine lange Zeit der Ruhe im Reich.", "A long period of peace in the empire.", "Hosszú békeidőszak a birodalomban.", "O lungă perioadă de pace în imperiu."),
      svg: { type: "text-bubbles", items: [{ text: "Frieden", color: "#fff", bg: "#10b981" }, { text: "Wohlstand", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "word-order", words: [L("Zeit", "Time", "Idő", "Timp"), L("des", "des", "des", "des"), L("Friedens", "peace", "béke", "pace")], instruction: L("Was ist Pax?", "What is Pax?", "Mi az a Pax?", "Ce este Pax?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Was bedeutet Pax Romana?", "What does Pax Romana mean?", "Mit jelent a Pax Romana?", "Ce inseamna Pax Romana?"), 
        choices: [L("Römischer Friede", "Roman peace", "római béke", "pace romană"), L("Römischer Krieg", "Roman war", "római háború", "război roman"), L("Römische Steuer", "Roman tax", "római adó", "impozit roman"), L("Römische Mauer", "Roman wall", "római fal", "zidul roman")], 
        answer: L("Römischer Friede", "Roman peace", "római béke", "pace romană") 
      }
    },
    {
      id: "kolosseum",
      title: L("Das Kolosseum", "The Colosseum", "A Colosseum", "Colosseumul"),
      hint1: L("Das größte Amphitheater.", "The largest amphitheater.", "A legnagyobb amfiteátrum.", "Cel mai mare amfiteatru."),
      hint2: L("Hier fanden Spiele statt.", "Games took place here.", "A játékok itt zajlottak.", "Aici au avut loc jocuri."),
      svg: { type: "icon-grid", items: [{ emoji: "🏟️", label: "Arena" }, { emoji: "🐯", label: "Tiere" }] },
      interactive: { type: "tap-count", tapCount: { emoji: "🏢", count: 4 }, instruction: L("Zähle die Etagen!", "Count the floors!", "Számold meg az emeleteket!", "Numără etajele!") },
      quiz: { 
        question: L("Wozu diente das Kolosseum?", "What was the Colosseum used for?", "Mire használták a Colosseumot?", "La ce a fost folosit Colosseumul?"), 
        choices: [L("Für Unterhaltung", "For entertainment", "Szórakozásra", "Pentru divertisment"), L("Zum Wohnen", "For living", "Életre", "Pentru a trăi"), L("Als Kirche", "As a church", "Egyházként", "Ca biserică"), L("Als Hafen", "As a port", "Kikötőként", "Ca port")], 
        answer: L("Für Unterhaltung", "For entertainment", "Szórakozásra", "Pentru divertisment") 
      }
    },
    {
      id: "limes",
      title: L("Der Limes", "The Limes", "A Limes", "The Limes"),
      hint1: L("Die Grenze des Reiches.", "The border of the empire.", "A birodalom határa.", "Granița imperiului."),
      hint2: L("Ein Schutzwall gegen Germanen.", "A protective wall against Germanic tribes.", "Védőfal a germán törzsek ellen.", "Un zid de protecție împotriva triburilor germanice."),
      svg: { type: "two-groups", left: { items: ["Wachtturm", "Soldat"], bg: "#f1f5f9", border: "#475569" }, right: { items: ["Wall", "Grenze"], bg: "#f1f5f9", border: "#475569" } },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "l", label: L("Limes", "limes", "lime", "tei") }], items: [{ text: L("Turm", "Tower", "Torony", "Turn"), bucketId: "l" }, { text: L("Graben", "Dig", "Dig", "Sapă"), bucketId: "l" }], instruction: L("Zuweisen!", "Assign!", "Hozzárendelés!", "Atribui!") },
      quiz: { 
        question: L("Was war der Limes?", "What was the Limes?", "Mi volt a Limes?", "Ce a fost Limes?"), 
        choices: [L("Ein Grenzwall", "A border wall", "Egy határfal", "Un zid de frontieră"), L("Ein Berg", "A mountain", "Egy hegy", "Un munte"), L("Ein Fluss", "Influence", "Befolyás", "Influenţa"), L("Ein Marktplatz", "A marketplace", "Egy piactér", "O piata")], 
        answer: L("Ein Grenzwall", "A border wall", "Egy határfal", "Un zid de frontieră") 
      }
    },
    {
      id: "provinzen",
      title: L("Die Provinzen", "The provinces", "A tartományok", "Provinciile"),
      hint1: L("Gebiete außerhalb Italiens.", "Areas outside Italy.", "Olaszországon kívüli területek.", "Zone din afara Italiei."),
      hint2: L("Sie wurden von Statthaltern regiert.", "They were ruled by governors.", "Kormányzók uralták őket.", "Erau conduși de guvernatori."),
      svg: { type: "text-bubbles", items: [{ text: "Gallien", color: "#fff", bg: "#6366f1" }, { text: "Ägypten", color: "#fff", bg: "#fbbf24" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Provinz", "province", "tartomány", "provincie"), right: L("Landesteil", "part of the country", "az ország része", "parte a tarii") }, { left: L("Statthalter", "Governor", "Kormányzó", "Guvernator"), right: L("Chef", "Boss", "Főnök", "Șeful") }] },
      quiz: { 
        question: L("Wie nannte man die Gebiete des Römischen Reiches?", "What were the regions of the Roman Empire called?", "Hogyan nevezték a Római Birodalom régióit?", "Cum se numeau regiunile Imperiului Roman?"), 
        choices: [L("Provinzen", "Provinces", "Tartományok", "Provinciile"), L("Kantone", "Cantons", "Kantonok", "Cantoanele"), L("Inseln", "Islands", "Szigetek", "Insulele"), L("Dörfer", "Villages", "Falvak", "Sate")], 
        answer: L("Provinzen", "Provinces", "Tartományok", "Provinciile") 
      }
    },
    {
      id: "brot",
      title: L("Brot & Spiele", "Bread & Games", "Kenyér és játékok", "Pâine și Jocuri"),
      hint1: L("Panem et Circenses.", "Panem and Circenses.", "Panem és Circenses.", "Panem și Circenses."),
      hint2: L("Das Volk wurde mit Essen und Unterhaltung beruhigt.", "The people were calmed with food and entertainment.", "Az embereket étellel és szórakozással nyugtatták meg.", "Oamenii au fost liniștiți cu mâncare și distracție."),
      svg: { type: "icon-grid", items: [{ emoji: "🥖", label: "Brot" }, { emoji: "🏇", label: "Rennen" }] },
      interactive: { type: "gap-fill", text: L("Das Volk wollte Brot und __.", "The people wanted bread and __.", "Az emberek kenyeret akartak és __.", "Oamenii voiau pâine și __."), gaps: [{ index: 0, options: ["Spiele", "Arbeit"], correct: 0 }] },
      quiz: { 
        question: L("Wozu diente 'Brot und Spiele'?", "What was 'bread and circuses' used for?", "Mire használták a „kenyeret és a cirkuszt”?", "La ce folosea „pâinea și circurile”?"), 
        choices: [L("Beruhigung des Volkes", "reassurance of the people", "az emberek megnyugtatása", "liniștirea oamenilor"), L("Ernährung", "Nutrition", "Táplálás", "Nutriţie"), L("Nur zum Spaß", "Just for fun", "Csak szórakozásból", "Doar pentru distracție"), L("Gegen Hunger", "Against hunger", "Az éhség ellen", "Împotriva foamei")], 
        answer: L("Beruhigung des Volkes", "reassurance of the people", "az emberek megnyugtatása", "liniștirea oamenilor") 
      }
    },
    {
      id: "thermen",
      title: L("Thermen", "thermal baths", "termálfürdők", "băi termale"),
      hint1: L("Römische Badehäuser.", "Roman bathhouses.", "Római fürdőházak.", "Băile romane."),
      hint2: L("Hier traf man sich zur Entspannung.", "People met here to relax.", "Az emberek pihenni találkoztak itt.", "Oamenii s-au întâlnit aici pentru a se relaxa."),
      svg: { type: "text-bubbles", items: [{ text: "Wasser", color: "#fff", bg: "#0ea5e9" }, { text: "Dampf", color: "#fff", bg: "#cbd5e1" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Warm", "Warm", "Meleg", "Cald"), right: L("Caldarium", "Caldarium", "Caldarium", "Caldarium") }, { left: L("Kalt", "Cold", "Hideg", "Rece"), right: L("Frigidarium", "Frigidarium", "Frigidarium", "Frigidarium") }] },
      quiz: { 
        question: L("Was war eine Therme?", "What was a thermal bath?", "Mi volt a termálfürdő?", "Ce era o baie termală?"), 
        choices: [L("Ein Badehaus", "A bathhouse", "Egy fürdőház", "O baie"), L("Ein Kloster", "A monastery", "Egy kolostor", "O manastire"), L("Eine Schule", "A school", "Egy iskola", "O școală"), L("Ein Gefängnis", "A prison", "Egy börtön", "O închisoare")], 
        answer: L("Ein Badehaus", "A bathhouse", "Egy fürdőház", "O baie") 
      }
    },
    {
      id: "aqua",
      title: L("Aquädukte", "Aqueducts", "Vízvezetékek", "Apeducte"),
      hint1: L("Wasserleitungen.", "Water pipes.", "Vízcsövek.", "Conducte de apă."),
      hint2: L("Sie brachten frisches Wasser in die Städte.", "They brought fresh water to the cities.", "Friss vizet vittek a városokba.", "Au adus apă proaspătă în orașe."),
      svg: { type: "two-groups", left: { items: ["Bogen", "Brücke"], bg: "#f1f5f9", border: "#475569" }, right: { items: ["Wasser", "Stadt"], bg: "#dbeafe", border: "#2563eb" } },
      interactive: { type: "gap-fill", text: L("Aquädukte leiteten __.", "Aqueducts conducted __.", "Vízvezetékek végzett __.", "Apeducte conduse __."), gaps: [{ index: 0, options: ["Wasser", "Gold"], correct: 0 }] },
      quiz: { 
        question: L("Was war die Aufgabe eines Aquädukts?", "What was the purpose of an aqueduct?", "Mi volt a vízvezeték célja?", "Care era scopul unui apeduct?"), 
        choices: [L("Wassertransport", "Water transport", "Vízi közlekedés", "Transport pe apă"), L("Post", "post", "hozzászólás", "post"), L("Militär", "Military", "Katonai", "Militar"), L("Handel", "Trade", "Kereskedelmi", "Comerț")], 
        answer: L("Wassertransport", "Water transport", "Vízi közlekedés", "Transport pe apă") 
      }
    },
    {
      id: "nero",
      title: L("Kaiser Nero", "Emperor Nero", "Néró császár", "împăratul Nero"),
      hint1: L("Ein grausamer Kaiser.", "A cruel emperor.", "Kegyetlen császár.", "Un împărat crud."),
      hint2: L("Berühmt durch den Brand Roms.", "Famous for the burning of Rome.", "Róma felgyújtásáról híres.", "Faimos pentru incendierea Romei."),
      svg: { type: "icon-grid", items: [{ emoji: "🔥", label: "Feuer" }, { emoji: "🎻", label: "Leier" }] },
      interactive: { type: "word-order", words: [L("Brand", "fire", "Tűz", "foc"), L("von", "from", "-tól", "din"), L("Rom", "Rome", "Róma", "Roma")], instruction: L("Neros Tat?", "Nero's deed?", "Nero tette?", "fapta lui Nero?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Was soll Nero während des Brandes getan haben?", "What did Nero supposedly have done during the fire?", "Mit csinált állítólag Nero a tűz alatt?", "Ce se presupune că a făcut Nero în timpul incendiului?"), 
        choices: [L("Musiziert", "Makes music", "Zenét csinál", "Face muzica"), L("Geweint", "Cried", "sírt", "strigat"), L("Gelöscht", "Deleted", "Törölve", "Șters"), L("Geschlafen", "Slept", "Aludt", "A dormit")], 
        answer: L("Musiziert", "Makes music", "Zenét csinál", "Face muzica") 
      }
    },
    {
      id: "pompeji",
      title: L("Pompeji", "Pompeii", "Pompei", "Pompeii"),
      hint1: L("Verschüttet durch den Vesuv.", "Buried by Vesuvius.", "Eltemette a Vezúv.", "Îngropat de Vezuviu."),
      hint2: L("Eine Zeitkapsel der Antike.", "A time capsule of antiquity.", "Az ókor időkapszula.", "O capsulă a timpului a antichității."),
      svg: { type: "text-bubbles", items: [{ text: "Vulkan", color: "#fff", bg: "#ef4444" }, { text: "Asche", color: "#fff", bg: "#64748b" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Vesuv", "Vesuvius", "Vezúv", "Vezuviu"), right: L("Vulkan", "volcano", "vulkán", "vulcan") }, { left: L("Asche", "ash", "hamu", "frasin"), right: L("Decke", "Ceiling", "Mennyezet", "Plafon") }] },
      quiz: { 
        question: L("Wodurch wurde Pompeji zerstört?", "How was Pompeii destroyed?", "Hogyan semmisült meg Pompei?", "Cum a fost distrus Pompeii?"), 
        choices: [L("Vulkanausbruch", "Volcanic eruption", "Vulkánkitörés", "Erupție vulcanică"), L("Feuer", "Fire", "Tűz", "Foc"), L("Krieg", "War", "Háború", "Război"), L("Erdbeben", "earthquake", "földrengés", "cutremur")], 
        answer: L("Vulkanausbruch", "Volcanic eruption", "Vulkánkitörés", "Erupție vulcanică") 
      }
    },
    {
      id: "christen",
      title: L("Christen", "Christians", "keresztények", "creştinii"),
      hint1: L("Anfangs verfolgt.", "Initially persecuted.", "Kezdetben üldözött.", "Inițial persecutat."),
      hint2: L("Später wurde es Staatsreligion.", "Later it became the state religion.", "Később államvallássá vált.", "Mai târziu a devenit religia de stat."),
      svg: { type: "icon-grid", items: [{ emoji: "✝️", label: "Glaube" }, { emoji: "🐟", label: "Fisch" }] },
      interactive: { type: "word-order", words: [L("Glaube", "Believe", "Hisz", "crede"), L("an", "to", "hogy", "la"), L("einen", "a", "a", "o"), L("Gott", "God", "Isten", "Dumnezeu")], instruction: L("Was ist das?", "What is that?", "Mi ez?", "Ce este asta?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Welcher Kaiser erlaubte das Christentum?", "Which emperor allowed Christianity?", "Melyik császár engedte meg a kereszténységet?", "Care împărat a permis creștinismul?"), 
        choices: [L("Konstantin", "Constantine", "Konstantin", "Constantin"), L("Nero", "Nero", "Néró", "Nero"), L("Augustus", "Augustus", "Augustus", "Augustus"), L("Caesar", "Caesar", "Caesar", "Cezar")], 
        answer: L("Konstantin", "Constantine", "Konstantin", "Constantin") 
      }
    },
    {
      id: "konstantinopel",
      title: L("Konstantinopel", "Constantinople", "Konstantinápoly", "Constantinopol"),
      hint1: L("Die neue Hauptstadt im Osten.", "The new capital in the east.", "Az új főváros keleten.", "Noua capitală în est."),
      hint2: L("Heute Istanbul.", "Today Istanbul.", "Ma Isztambul.", "Astăzi Istanbul."),
      svg: { type: "word-display", word: "BYZANZ", color: "#0ea5e9" },
      interactive: { type: "gap-fill", text: L("Die Stadt lag am __.", "The city was on the __.", "A város a __.", "Orașul era pe __."), gaps: [{ index: 0, options: ["Bosporus", "Rhein"], correct: 0 }] },
      quiz: { 
        question: L("Wer gründete Konstantinopel?", "Who founded Constantinople?", "Ki alapította Konstantinápolyt?", "Cine a fondat Constantinopolul?"), 
        choices: [L("Konstantin", "Constantine", "Konstantin", "Constantin"), L("Augustus", "Augustus", "Augustus", "Augustus"), L("Alexander", "Alexander", "Sándor", "Alexandru"), L("Nero", "Nero", "Néró", "Nero")], 
        answer: L("Konstantin", "Constantine", "Konstantin", "Constantin") 
      }
    },
    {
      id: "teilung",
      title: L("Reichsteilung", "Division of the empire", "A birodalom felosztása", "Diviziunea imperiului"),
      hint1: L("395 n.Chr. wurde das Reich geteilt.", "395 AD the empire was divided.", "Kr.u. 395-ben a birodalom kettévált.", "395 d.Hr. imperiul a fost divizat."),
      hint2: L("Es gab West- und Ostrom.", "There were western and eastern rivers.", "Voltak nyugati és keleti folyók.", "Erau râuri de vest și de est."),
      svg: { type: "two-groups", left: { items: ["Westrom", "Rom"], bg: "#fee2e2", border: "#ef4444" }, right: { items: ["Ostrom", "Byzanz"], bg: "#dcfce7", border: "#22c55e" } },
      interactive: { type: "tap-count", tapCount: { emoji: "🗺️", count: 2 }, instruction: L("Wie viele Teile?", "How many parts?", "Hány alkatrész?", "Câte piese?") },
      quiz: { 
        question: L("Wann wurde das Römische Reich geteilt?", "When was the Roman Empire divided?", "Mikor osztották fel a Római Birodalmat?", "Când a fost împărțit Imperiul Roman?"), 
        choices: [L("395 n.Chr.", "395 AD", "Kr.u. 395", "395 d.Hr"), L("753 v.Chr.", "753 BC", "Kr.e. 753", "753 î.Hr"), L("476 n.Chr.", "476 AD", "i.sz. 476", "476 d.Hr"), L("1914", "1914", "1914", "1914")], 
        answer: L("395 n.Chr.", "395 AD", "Kr.u. 395", "395 d.Hr") 
      }
    },
    {
      id: "migration",
      title: L("Völkerwanderung", "Migration of peoples", "Népvándorlás", "Migrația popoarelor"),
      hint1: L("Völker zogen durch Europa.", "Peoples moved through Europe.", "A népek átköltöztek Európán.", "Popoarele s-au mutat prin Europa."),
      hint2: L("Der Druck der Hunnen war der Auslöser.", "The pressure from the Huns was the trigger.", "A hunok nyomása volt a kiváltó ok.", "Presiunea hunilor a fost declanșatorul."),
      svg: { type: "icon-grid", items: [{ emoji: "🐎", label: "Hunnen" }, { emoji: "🏹", label: "Flucht" }] },
      interactive: { type: "word-order", words: [L("Hunnen", "Huns", "hunok", "huni"), L("treiben", "to drive", "vezetni", "a conduce"), L("Völker", "peoples", "népek", "popoarele"), L("an", "to", "hogy", "la")], instruction: L("Was passierte?", "What happened?", "Mi történt?", "Ce s-a întâmplat?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Wer löste die Völkerwanderung aus?", "Who triggered the migration of peoples?", "Ki indította el a népvándorlást?", "Cine a declanșat migrația popoarelor?"), 
        choices: [L("Hunnen", "Huns", "hunok", "huni"), L("Griechen", "Greeks", "görögök", "greci"), L("Ägypter", "Egyptians", "egyiptomiak", "egiptenii"), L("Amerikaner", "American", "amerikai", "american")], 
        answer: L("Hunnen", "Huns", "hunok", "huni") 
      }
    },
    {
      id: "untergang",
      title: L("Untergang", "Doom", "Végzet", "Doom"),
      hint1: L("476 n.Chr. endete das Weströmische Reich.", "476 AD the Western Roman Empire ended.", "476-ban a Nyugat-Római Birodalom véget ért.", "476 d.Hr. Imperiul Roman de Apus sa încheiat."),
      hint2: L("Der letzte Kaiser wurde abgesetzt.", "The last emperor was deposed.", "Az utolsó császárt leváltották.", "Ultimul împărat a fost destituit."),
      svg: { type: "sentence-display", words: ["Das", "Ende", "von", "Rom"], color: "#000" },
      interactive: { type: "gap-fill", text: L("Jahr des Untergangs: __.", "Year of sinking: __.", "A süllyedés éve: __.", "Anul scufundării: __."), gaps: [{ index: 0, options: ["476", "753", "1945"], correct: 0 }] },
      quiz: { 
        question: L("Welcher Teil Roms ging 476 n.Chr. unter?", "Which part of Rome fell in 476 AD? under?", "Róma melyik része esett el i.sz. 476-ban? alatt?", "Care parte a Romei a căzut în 476 d.Hr.? sub?"), 
        choices: [L("Westrom", "Western Rome", "Nyugat-Róma", "Vestul Romei"), L("Ostrom", "Eastern Rome", "Kelet-Róma", "Roma de Est"), L("Ganz Rom", "All of Rome", "Egész Róma", "Toată Roma"), L("Nur der Vatikan", "Only the Vatican", "Csak a Vatikán", "Doar Vaticanul")], 
        answer: L("Westrom", "Western Rome", "Nyugat-Róma", "Vestul Romei") 
      }
    }
  ]
};

// ─── ISLAND 6: DIE GERMANEN ─────────────────────────────────────────────────
const I6: IslandSpec = {
  id: "i6",
  title: L("Die Germanen", "The Germanic peoples", "A germán népek", "Popoarele germanice"),
  topics: [
    {
      id: "staemme",
      title: L("Die Stämme", "The tribes", "A törzsek", "Triburile"),
      hint1: L("Germanen waren kein einheitliches Volk.", "Germanic people were not a unified people.", "A germán nép nem volt egységes nép.", "Poporul german nu era un popor unificat."),
      hint2: L("Es gab viele Stämme wie die Goten.", "There were many tribes like the Goths.", "Sok olyan törzs volt, mint a gótok.", "Au fost multe triburi precum goții."),
      svg: { type: "text-bubbles", items: [{ text: "Sachsen", color: "#fff", bg: "#7c2d12" }, { text: "Franken", color: "#fff", bg: "#1e40af" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Franken", "Franconia", "Frankónia", "Franconia"), right: L("Stamm", "tribe", "törzs", "trib") }, { left: L("Goten", "Goths", "gótok", "gotii"), right: L("Stamm", "tribe", "törzs", "trib") }] },
      quiz: { 
        question: L("Waren die Germanen ein einheitliches Volk?", "Were the Germanic peoples a unified people?", "A germán népek egységes népek voltak?", "Au fost popoarele germanice un popor unit?"), 
        choices: [L("Nein, viele Stämme", "No, many tribes", "Nem, sok törzs", "Nu, multe triburi"), L("Ja, ein Volk", "Yes, one people", "Igen, egy ember", "Da, un singur popor"), L("Nur eine Armee", "Just an army", "Csak egy hadsereg", "Doar o armată"), L("Waren sie nicht", "They weren't", "Nem voltak azok", "Nu erau")], 
        answer: L("Nein, viele Stämme", "No, many tribes", "Nem, sok törzs", "Nu, multe triburi") 
      }
    },
    {
      id: "thing",
      title: L("Das Thing", "The Thing", "A dolog", "Lucrul"),
      hint1: L("Die Volksversammlung der Germanen.", "The people's assembly of the Germanic peoples.", "A germán népek népgyűlése.", "Adunarea populară a popoarelor germanice."),
      hint2: L("Hier wurden Gesetze beschlossen.", "Laws were passed here.", "Itt törvényeket hoztak.", "Aici s-au dat legi."),
      svg: { type: "icon-grid", items: [{ emoji: "🌳", label: "Baum" }, { emoji: "🗣️", label: "Rat" }] },
      interactive: { type: "word-order", words: [L("Rat", "Advice", "Tanács", "Sfaturi"), L("unter", "under", "alatt", "sub"), L("der", "the", "a", "cel"), L("Eiche", "oak", "tölgy", "stejar")], instruction: L("Wo tagte das Thing?", "Where did the thing meet?", "Hol találkozott a dolog?", "Unde s-a întâlnit chestia?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Was war das Thing?", "What was that thing?", "Mi volt ez?", "Ce era chestia aia?"), 
        choices: [L("Eine Versammlung", "A gathering", "Egy összejövetel", "O adunare"), L("Ein Haus", "A house", "Egy házat", "O casă"), L("Ein Gott", "A god", "Egy isten", "Un zeu"), L("Ein Schwert", "A sword", "Egy kardot", "O sabie")], 
        answer: L("Eine Versammlung", "A gathering", "Egy összejövetel", "O adunare") 
      }
    },
    {
      id: "runen",
      title: L("Runen", "Runes", "Rúnák", "Rune"),
      hint1: L("Die Schrift der Germanen.", "The writing of the Germanic peoples.", "A germán népek írása.", "Scrierea popoarelor germanice."),
      hint2: L("Eingeritzt in Stein oder Holz.", "Carved into stone or wood.", "Kőbe vagy fába faragva.", "Sculpt în piatră sau lemn."),
      svg: { type: "letter-circles", letters: ["ᚠ", "ᚢ", "ᚦ", "ᚩ", "ᚱ"], color: "#1e40af" },
      interactive: { type: "word-order", words: [L("Geheime", "Secret", "Titkos", "Secret"), L("Zeichen", "Sign", "Jel", "Semn"), L("Runen", "Runes", "Rúnák", "Rune")], instruction: L("Was sind Runen?", "What are runes?", "Mik azok a rúnák?", "Ce sunt runele?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Worauf schrieben Germanen oft ihre Runen?", "What did Germanic people often write their runes on?", "Mire írták gyakran a germánok a rúnáikat?", "Pe ce își scriau adesea germanii runele?"), 
        choices: [L("Stein und Holz", "Stone and wood", "Kő és fa", "Piatra si lemn"), L("Papier", "Paper", "Papír", "Hârtie"), L("Sand", "sand", "homok", "nisip"), L("Wasser", "Water", "Víz", "Apă")], 
        answer: L("Stein und Holz", "Stone and wood", "Kő és fa", "Piatra si lemn") 
      }
    },
    {
      id: "arminius",
      title: L("Arminius", "Arminius", "Arminius", "Arminius"),
      hint1: L("Ein Anführer der Cherusker.", "A leader of the Cherusci.", "A Cherusci vezetője.", "Un conducător al Cheruscilor."),
      hint2: L("Er besiegte die Römer.", "He defeated the Romans.", "Legyőzte a rómaiakat.", "I-a învins pe romani."),
      svg: { type: "icon-grid", items: [{ emoji: "🛡️", label: "Schutz" }, { emoji: "⚔️", label: "Sieg" }] },
      interactive: { type: "gap-fill", text: L("Arminius besiegte den Römer __.", "Arminius defeated the Roman __.", "Arminius legyőzte a római __.", "Arminius l-a învins pe romanul __."), gaps: [{ index: 0, options: ["Varus", "Caesar"], correct: 0 }] },
      quiz: { 
        question: L("Welche berühmte Schlacht gewann Arminius?", "What famous battle did Arminius win?", "Milyen híres csatát nyert meg Arminius?", "Ce bătălie celebră a câștigat Arminius?"), 
        choices: [L("Varusschlacht", "Varus battle", "Varus csata", "bătălia lui Varus"), L("Waterloo", "Waterloo", "Waterloo", "Waterloo"), L("Marathon", "Marathon", "Maraton", "Maraton"), L("Leipzig", "Leipzig", "Lipcse", "Leipzig")], 
        answer: L("Varusschlacht", "Varus battle", "Varus csata", "bătălia lui Varus") 
      }
    },
    {
      id: "walhalla",
      title: L("Walhalla", "Valhalla", "Valhalla", "Valhalla"),
      hint1: L("Der Ruheort gefallener Krieger.", "The resting place of fallen warriors.", "Az elesett harcosok nyughelye.", "Locul de odihnă al războinicilor căzuți."),
      hint2: L("In den Hallen Odins.", "In the halls of Odin.", "Odin termeiben.", "În holurile lui Odin."),
      svg: { type: "text-bubbles", items: [{ text: "Helden", color: "#fff", bg: "#f59e0b" }, { text: "Halle", color: "#fff", bg: "#fbbf24" }] },
      interactive: { type: "word-order", words: [L("Halle", "hall", "terem", "hol"), L("der", "the", "a", "cel"), L("Gefallenen", "Fallen", "Elesett", "Căzut")], instruction: L("Was ist Walhalla?", "What is Valhalla?", "Mi az a Valhalla?", "Ce este Valhalla?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wer durfte nach Walhalla?", "Who was allowed to go to Valhalla?", "Ki mehetett Valhallába?", "Cui i s-a permis să meargă în Valhalla?"), 
        choices: [L("Tapfere Krieger", "Brave warriors", "Bátor harcosok", "Războinici curajoși"), L("Alle", "All", "Minden", "Toate"), L("Nur Bauern", "Just farmers", "Csak gazdálkodók", "Doar fermieri"), L("Niemand", "No one", "Senki", "Nici unul")], 
        answer: L("Tapfere Krieger", "Brave warriors", "Bátor harcosok", "Războinici curajoși") 
      }
    },
    {
      id: "wotan",
      title: L("Gott Wotan", "God Wotan", "Isten Wotan", "Dumnezeu Wotan"),
      hint1: L("Der höchste Gott (Odin).", "The supreme god (Odin).", "A legfőbb isten (Odin).", "Zeul suprem (Odin)."),
      hint2: L("Gott des Wissens und Krieges.", "God of knowledge and war.", "A tudás és a háború Istene.", "Zeul cunoașterii și al războiului."),
      svg: { type: "icon-grid", items: [{ emoji: "👁️", label: "Einäugig" }, { emoji: "🐎", label: "Sleipnir" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Wotan", "Wotan", "Wotan", "Wotan"), right: L("Odin", "Odin", "Odin", "Odin") }, { left: L("Mittwoch", "Wednesday", "szerda", "miercuri"), right: L("Wotanstag", "Wotan's Day", "Wotan napja", "Ziua lui Wotan") }] },
      quiz: { 
        question: L("Wer war der Göttervater der Germanen?", "Who was the father of the Germanic gods?", "Ki volt a germán istenek atyja?", "Cine a fost tatăl zeilor germanici?"), 
        choices: [L("Wotan", "Wotan", "Wotan", "Wotan"), L("Thor", "Thor", "Thor", "Thor"), L("Zeus", "Zeus", "Zeusz", "Zeus"), L("Ra", "Ra", "Ra", "Ra")], 
        answer: L("Wotan", "Wotan", "Wotan", "Wotan") 
      }
    },
    {
      id: "thor",
      title: L("Gott Thor", "God Thor", "Thor Isten", "Dumnezeul Thor"),
      hint1: L("Der Gott des Donners.", "The God of Thunder.", "A mennydörgés istene.", "Zeul tunetului."),
      hint2: L("Sein Symbol ist der Hammer.", "His symbol is the hammer.", "Jelképe a kalapács.", "Simbolul lui este ciocanul."),
      svg: { type: "text-bubbles", items: [{ text: "Donner", color: "#fff", bg: "#475569" }, { text: "Hammer", color: "#fff", bg: "#94a3b8" }] },
      interactive: { type: "gap-fill", text: L("Der Hammer heißt __.", "The hammer is called __.", "A kalapácsot __-nak hívják.", "Ciocanul se numește __."), gaps: [{ index: 0, options: ["Mjölnir", "Blitz"], correct: 0 }] },
      quiz: { 
        question: L("Welches Wetter machte Thor?", "What weather did Thor do?", "Milyen időjárást csinált Thor?", "Ce vreme a făcut Thor?"), 
        choices: [L("Gewitter", "Thunderstorm", "Zivatar", "Furtună"), L("Sonnenschein", "sunshine", "napfény", "soare"), L("Schnee", "Snow", "Hó", "Zăpadă"), L("Nebel", "Fog", "Köd", "Ceaţă")], 
        answer: L("Gewitter", "Thunderstorm", "Zivatar", "Furtună") 
      }
    },
    {
      id: "freya",
      title: L("Göttin Freya", "Goddess Freya", "Freya istennő", "Zeița Freya"),
      hint1: L("Göttin der Liebe und Fruchtbarkeit.", "Goddess of love and fertility.", "A szerelem és a termékenység istennője.", "Zeita iubirii si a fertilitatii."),
      hint2: L("Sehr schön und mächtig.", "Very beautiful and powerful.", "Nagyon szép és erős.", "Foarte frumos si puternic."),
      svg: { type: "icon-grid", items: [{ emoji: "🐱", label: "Katzen" }, { emoji: "❤️", label: "Liebe" }] },
      interactive: { type: "word-order", words: [L("Göttin", "goddess", "istennő", "zeiţă"), L("der", "the", "a", "cel"), L("Liebe", "Love", "Szeretet", "Dragoste")], instruction: L("Wer war Freya?", "Who was Freya?", "Ki volt Freya?", "Cine a fost Freya?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Nach wem ist der Freitag benannt?", "Who is Friday named after?", "Kiről nevezték el a pénteket?", "După cine poartă numele vineri?"), 
        choices: [L("Freya", "Freya", "Freya", "Freya"), L("Frühling", "Spring", "Tavaszi", "Primăvară"), L("Freitag", "Friday", "péntek", "vineri"), L("Frieden", "Peace", "Béke", "Pace")], 
        answer: L("Freya", "Freya", "Freya", "Freya") 
      }
    },
    {
      id: "siedlung",
      title: L("Siedlungen", "settlements", "települések", "aşezări"),
      hint1: L("Germanen lebten in Dörfern.", "Germanic people lived in villages.", "A germánok falvakban éltek.", "Oamenii germani trăiau în sate."),
      hint2: L("Es gab keine großen Städte.", "There were no big cities.", "Nem voltak nagy városok.", "Nu existau orașe mari."),
      svg: { type: "two-groups", left: { items: ["Dorf", "Haus"], bg: "#dcfce7", border: "#16a34a" }, right: { items: ["Stadt", "Rom"], bg: "#fee2e2", border: "#dc2626" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Zaun", "Fence", "Kerítés", "Gard"), right: L("Schutz", "Protection", "Védelem", "Protecţie") }, { left: L("Wald", "Forest", "Erdő", "Pădure"), right: L("Nähe", "Vicinity", "Környék", "Apropiere") }] },
      quiz: { 
        question: L("Wo lebten die meisten Germanen?", "Where did most of the Germanic people live?", "Hol élt a legtöbb germán nép?", "Unde locuiau majoritatea poporului german?"), 
        choices: [L("In Dörfern", "In villages", "A falvakban", "În sate"), L("In Städten", "In cities", "A városokban", "În orașe"), L("In Höhlen", "In caves", "A barlangokban", "În peșteri"), L("Im Wasser", "In water", "Vízben", "În apă")], 
        answer: L("In Dörfern", "In villages", "A falvakban", "În sate") 
      }
    },
    {
      id: "handwerk",
      title: L("Handwerk", "Crafts", "Iparművészet", "Meşteşuguri"),
      hint1: L("Gute Schmiede und Weber.", "Good blacksmiths and weavers.", "Jó kovácsok és takácsok.", "Fierari și țesători buni."),
      hint2: L("Sie machten Schmuck und Waffen.", "They made jewelry and weapons.", "Ékszereket és fegyvereket készítettek.", "Au făcut bijuterii și arme."),
      svg: { type: "icon-grid", items: [{ emoji: "🔨", label: "Schmied" }, { emoji: "🧵", label: "Weben" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Eisen", "iron", "vas", "fier"), right: L("Schwert", "sword", "kard", "sabie") }, { left: L("Wolle", "Wool", "Gyapjú", "Lână"), right: L("Kleidung", "Clothing", "Ruházat", "Îmbrăcăminte") }] },
      quiz: { 
        question: L("Was konnten germanische Schmiede besonders gut?", "What did Germanic blacksmiths do particularly well?", "Mit csináltak különösen jól a germán kovácsok?", "Ce au făcut fierarii germani în mod deosebit de bine?"), 
        choices: [L("Waffen schmieden", "Forge weapons", "Fegyvereket kovácsolni", "Forjați arme"), L("Bücher drucken", "Print books", "Nyomtasson könyveket", "Imprimați cărți"), L("Autos bauen", "Build cars", "Építs autókat", "Construiește mașini"), L("Fliegen", "Fly", "Repül", "Zbura")], 
        answer: L("Waffen schmieden", "Forge weapons", "Fegyvereket kovácsolni", "Forjați arme") 
      }
    },
    {
      id: "krieger",
      title: L("Krieger", "warrior", "harcos", "războinic"),
      hint1: L("Tapferkeit war sehr wichtig.", "Bravery was very important.", "A bátorság nagyon fontos volt.", "Curajul era foarte important."),
      hint2: L("Sie folgten ihrem Anführer.", "They followed their leader.", "Követték vezetőjüket.", "Și-au urmat liderul."),
      svg: { type: "two-groups", left: { items: ["Schild", "Speer"], bg: "#fee2e2", border: "#dc2626" }, right: { items: ["Buch"], bg: "#f1f5f9", border: "#475569" } },
      interactive: { type: "gap-fill", text: L("Ein Krieger war seinem Herrn __.", "A warrior was his master __.", "Egy harcos volt a gazdája __.", "Un războinic era stăpânul lui __."), gaps: [{ index: 0, options: ["treu", "egal"], correct: 0 }] },
      quiz: { 
        question: L("Was war die Hauptaufgabe eines Kriegers?", "What was the main task of a warrior?", "Mi volt egy harcos fő feladata?", "Care era sarcina principală a unui războinic?"), 
        choices: [L("Schutz und Kampf", "Protection and fight", "Védelem és harc", "Protecție și luptă"), L("Kochen", "Cook", "Szakács", "Bucătar"), L("Schreiben", "Write", "Írj", "Scrie"), L("Singen", "Sing", "Énekel", "Cânta")], 
        answer: L("Schutz und Kampf", "Protection and fight", "Védelem és harc", "Protecție și luptă") 
      }
    },
    {
      id: "tacitus",
      title: L("Tacitus", "Tacitus", "Tacitus", "Tacitus"),
      hint1: L("Ein römischer Historiker.", "A Roman historian.", "Római történész.", "Un istoric roman."),
      hint2: L("Er schrieb das Buch 'Germania'.", "He wrote the book 'Germania'.", "Ő írta a „Germania” című könyvet.", "A scris cartea „Germania”."),
      svg: { type: "word-display", word: "GERMANIA", color: "#1e3a8a" },
      interactive: { type: "gap-fill", text: L("Tacitus war ein __.", "Tacitus was a __.", "Tacitus __ volt.", "Tacitus a fost un __."), gaps: [{ index: 0, options: ["Römer", "Germane"], correct: 0 }] },
      quiz: { 
        question: L("Woher wissen wir viel über Germanen?", "How do we know much about Germanic peoples?", "Honnan tudunk sokat a germán népekről?", "De unde știm multe despre popoarele germanice?"), 
        choices: [L("Von römischen Berichten", "From Roman reports", "Római tudósításokból", "Din rapoartele romane"), L("Durch Fotos", "Through photos", "Fotókon keresztül", "Prin fotografii"), L("Von germanischen Büchern", "From Germanic books", "Germán könyvekből", "Din cărți germanice"), L("Gar nicht", "Not at all", "Egyáltalán nem", "Deloc")], 
        answer: L("Von römischen Berichten", "From Roman reports", "Római tudósításokból", "Din rapoartele romane") 
      }
    },
    {
      id: "langhaus",
      title: L("Das Langhaus", "The longhouse", "A hosszúház", "Casa lungă"),
      hint1: L("Ein großes Haus für Mensch und Tier.", "A large house for people and animals.", "Nagy ház emberek és állatok számára.", "O casă mare pentru oameni și animale."),
      hint2: L("Unter einem Dach.", "Under one roof.", "Egy fedél alatt.", "Sub un singur acoperiș."),
      svg: { type: "two-groups", left: { items: ["Vorne", "Menschen"], bg: "#fef3c7", border: "#d97706" }, right: { items: ["Hinten", "Tiere"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "tap-count", tapCount: { emoji: "🏠", count: 1 }, instruction: L("Zähle die Häuser!", "Count the houses!", "Számold meg a házakat!", "Numără casele!") },
      quiz: { 
        question: L("Wer lebte im Langhaus?", "Who lived in the longhouse?", "Ki lakott a hosszúházban?", "Cine locuia în casa lungă?"), 
        choices: [L("Menschen und Tiere", "people and animals", "emberek és állatok", "oameni si animale"), L("Nur Tiere", "Only animals", "Csak állatok", "Numai animale"), L("Nur Krieger", "Just warriors", "Csak harcosok", "Doar războinici"), L("Nur Götter", "Only gods", "Csak istenek", "Numai zei")], 
        answer: L("Menschen und Tiere", "people and animals", "emberek és állatok", "oameni si animale") 
      }
    },
    {
      id: "landwirtschaft",
      title: L("Landwirtschaft", "agriculture", "mezőgazdaság", "agricultură"),
      hint1: L("Sie bauten Getreide an.", "They grew grain.", "Gabonát termesztettek.", "Au crescut cereale."),
      hint2: L("Sie hielten Rinder und Schweine.", "They kept cattle and pigs.", "Szarvasmarhát és sertést tartottak.", "Ei țineau vite și porci."),
      svg: { type: "icon-grid", items: [{ emoji: "🌾", label: "Korn" }, { emoji: "🐄", label: "Rind" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "f", label: L("Feld", "Field", "Mező", "Domeniu") }], items: [{ text: L("Gerste", "barley", "árpa", "orz"), bucketId: "f" }, { text: L("Hafer", "Oats", "Zab", "Ovăz"), bucketId: "f" }], instruction: L("Zuweisen!", "Assign!", "Hozzárendelés!", "Atribui!") },
      quiz: { 
        question: L("Wovon lebten die meisten Germanen?", "What did most Germanic people live on?", "Miből élt a legtöbb germán ember?", "Din ce trăiau majoritatea germanilor?"), 
        choices: [L("Von der Landwirtschaft", "From agriculture", "A mezőgazdaságból", "Din agricultură"), L("Vom Raub allein", "From robbery alone", "Egyedül a rablásból", "Doar din jaf"), L("Vom Handel mit China", "Of trade with China", "A Kínával folytatott kereskedelemről", "De comerț cu China"), L("Von Fabriken", "Of factories", "A gyárakból", "De fabrici")], 
        answer: L("Von der Landwirtschaft", "From agriculture", "A mezőgazdaságból", "Din agricultură") 
      }
    },
    {
      id: "handel",
      title: L("Handel mit Rom", "Trade with Rome", "Kereskedjen Rómával", "Comerț cu Roma"),
      hint1: L("Germanen tauschten Waren.", "Germanic tribes exchanged goods.", "A germán törzsek árut cseréltek.", "Triburile germanice făceau schimb de mărfuri."),
      hint2: L("Bernstein gegen Glas und Wein.", "Amber versus glass and wine.", "Borostyán pohárral és borral szemben.", "Chihlimbar versus pahar și vin."),
      svg: { type: "two-groups", left: { items: ["Fell", "Bernstein"], bg: "#fef3c7", border: "#d97706" }, right: { items: ["Wein", "Glas"], bg: "#dbeafe", border: "#2563eb" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Bernstein", "amber", "borostyán", "chihlimbar"), right: L("Germanen", "Teutons", "teutonok", "teutonii") }, { left: L("Glas", "Glass", "Üveg", "Sticlă"), right: L("Römer", "Romans", "rómaiak", "romani") }] },
      quiz: { 
        question: L("Welches 'Gold des Nordens' war beliebt?", "Which 'Gold of the North' was popular?", "Melyik „Észak aranya” volt népszerű?", "Care „Aurul Nordului” a fost popular?"), 
        choices: [L("Bernstein", "amber", "borostyán", "chihlimbar"), L("Salz", "Salt", "Só", "Sare"), L("Holz", "Wood", "Faipari", "Lemn"), L("Eisen", "iron", "vas", "fier")], 
        answer: L("Bernstein", "amber", "borostyán", "chihlimbar") 
      }
    }
  ]
};

// ─── ISLAND 7: VÖLKERWANDERUNG ──────────────────────────────────────────────
const I7: IslandSpec = {
  id: "i7",
  title: L("Völkerwanderung", "Migration of peoples", "Népvándorlás", "Migrația popoarelor"),
  topics: [
    {
      id: "attila",
      title: L("Attila", "Attila", "Attila", "Attila"),
      hint1: L("König der Hunnen.", "King of the Huns.", "A hunok királya.", "Regele hunilor."),
      hint2: L("Genannt 'Geißel Gottes'.", "Called 'Scourge of God'.", "„Isten ostorának” hívják.", "Numit „Plagul lui Dumnezeu”."),
      svg: { type: "icon-grid", items: [{ emoji: "🏇", label: "Reiter" }, { emoji: "🏹", label: "Bogen" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Attila", "Attila", "Attila", "Attila"), right: L("Hunnen", "Huns", "hunok", "huni") }, { left: L("König", "king", "király", "rege"), right: L("Anführer", "leader", "vezető", "lider") }] },
      quiz: { 
        question: L("Wer war Attila?", "Who was Attila?", "Ki volt Attila?", "Cine a fost Attila?"), 
        choices: [L("König der Hunnen", "King of the Huns", "A hunok királya", "Regele hunilor"), L("Römischer Kaiser", "Roman Emperor", "római császár", "Împăratul Roman"), L("Gott", "God", "Isten", "Dumnezeu"), L("Schreiber", "Scribe", "Írnok", "Scrib")], 
        answer: L("König der Hunnen", "King of the Huns", "A hunok királya", "Regele hunilor") 
      }
    },
    {
      id: "alarich",
      title: L("Alarich", "Alaric", "Alaric", "Alaric"),
      hint1: L("König der Westgoten.", "King of the Visigoths.", "A vizigótok királya.", "Regele vizigoților."),
      hint2: L("Er plünderte Rom.", "He sacked Rome.", "Kifosztotta Rómát.", "A jefuit Roma."),
      svg: { type: "word-display", word: "WESTGOTEN", color: "#991b1b" },
      interactive: { type: "gap-fill", text: L("Alarich eroberte __.", "Alaric conquered __.", "Alaric meghódította __.", "Alaric a cucerit __."), gaps: [{ index: 0, options: ["Rom", "Athen"], correct: 0 }] },
      quiz: { 
        question: L("Was tat Alarich im Jahr 410?", "What did Alaric do in 410?", "Mit csinált Alaric a 410-ben?", "Ce a făcut Alaric în 410?"), 
        choices: [L("Rom plündern", "Sack Rome", "Zsák Róma", "Sacrează Roma"), L("Eine Stadt bauen", "Build a city", "Építs várost", "Construiește un oraș"), L("Frieden schließen", "make peace", "békét kötni", "face pace"), L("Ein Buch schreiben", "Write a book", "Írj egy könyvet", "Scrie o carte")], 
        answer: L("Rom plündern", "Sack Rome", "Zsák Róma", "Sacrează Roma") 
      }
    },
    {
      id: "vandalen",
      title: L("Die Vandalen", "The vandals", "A vandálok", "Vandalii"),
      hint1: L("Ein Volk auf der Wanderung.", "A people on the move.", "Mozgó nép.", "Un popor aflat în mișcare."),
      hint2: L("Sie zogen bis nach Afrika.", "They moved all the way to Africa.", "Egészen Afrikába költöztek.", "S-au mutat până în Africa."),
      svg: { type: "text-bubbles", items: [{ text: "Wanderung", color: "#fff", bg: "#475569" }, { text: "Schiffe", color: "#fff", bg: "#0ea5e9" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Vandalismus", "vandalism", "vandalizmus", "vandalism"), right: L("Zerstörung", "destruction", "megsemmisítés", "distrugere") }, { left: L("Afrika", "Africa", "Afrika", "Africa"), right: L("Ziel", "Goal", "Cél", "Scop") }] },
      quiz: { 
        question: L("Wohin zogen die Vandalen am Ende?", "Where did the vandals end up going?", "Hová lettek a vandálok?", "Unde au ajuns vandalii?"), 
        choices: [L("Nach Nordafrika", "To North Africa", "Észak-Afrikába", "Spre Africa de Nord"), L("Nach England", "To England", "Angliába", "În Anglia"), L("Nach Asien", "To Asia", "Ázsiába", "Spre Asia"), L("Nach Amerika", "To America", "Amerikába", "Spre America")], 
        answer: L("Nach Nordafrika", "To North Africa", "Észak-Afrikába", "Spre Africa de Nord") 
      }
    },
    {
      id: "ostgoten",
      title: L("Die Ostgoten", "The Ostrogoths", "Az osztrogótok", "Ostrogoții"),
      hint1: L("Gegründet von Theoderich.", "Founded by Theodoric.", "Theodoric alapította.", "Fondată de Teodoric."),
      hint2: L("Sie herrschten in Italien.", "They ruled in Italy.", "Olaszországban uralkodtak.", "Au condus în Italia."),
      svg: { type: "two-groups", left: { items: ["Theoderich", "König"], bg: "#f1f5f9", border: "#475569" }, right: { items: ["Ravenna", "Residenz"], bg: "#f1f5f9", border: "#475569" } },
      interactive: { type: "gap-fill", text: L("Der König hieß __.", "The king's name was __.", "A király neve __ volt.", "Numele regelui era __."), gaps: [{ index: 0, options: ["Theoderich", "Karl"], correct: 0 }] },
      quiz: { 
        question: L("Welches heutige Land beherrschten die Ostgoten?", "Which present-day country did the Ostrogoths rule?", "Melyik mai országban uralkodtak az osztrogótok?", "Ce țară actuală au condus ostrogoții?"), 
        choices: [L("Italien", "Italy", "Olaszország", "Italia"), L("Spanien", "Spain", "Spanyolország", "Spania"), L("Polen", "Poland", "Lengyelország", "Polonia"), L("Schweden", "Sweden", "Svédország", "Suedia")], 
        answer: L("Italien", "Italy", "Olaszország", "Italia") 
      }
    },
    {
      id: "pluenderung",
      title: L("Plünderung Roms", "Sack of Rome", "Róma zsákmánya", "Pricul Romei"),
      hint1: L("Ein Schock für die Welt.", "A shock to the world.", "Sokkoló a világ számára.", "Un șoc pentru lume."),
      hint2: L("Rom war nicht mehr sicher.", "Rome was no longer safe.", "Róma már nem volt biztonságban.", "Roma nu mai era în siguranță."),
      svg: { type: "icon-grid", items: [{ emoji: "🔥", label: "Feuer" }, { emoji: "🪙", label: "Beute" }] },
      interactive: { type: "word-order", words: [L("Rom", "Rome", "Róma", "Roma"), L("ist", "is", "van", "este"), L("gefallen", "fallen", "elesett", "căzut")], instruction: L("Was sagte man?", "What did they say?", "Mit mondtak?", "Ce au spus?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wann wurde Rom das erste Mal geplündert?", "When was Rome first sacked?", "Mikor rúgták ki először Rómát?", "Când a fost prima dată destituită Roma?"), 
        choices: [L("410 n.Chr.", "410 AD", "i.sz. 410", "410 d.Hr"), L("753 v.Chr.", "753 BC", "Kr.e. 753", "753 î.Hr"), L("1914", "1914", "1914", "1914"), L("800 n.Chr.", "800 AD", "Kr.u. 800", "800 d.Hr")], 
        answer: L("410 n.Chr.", "410 AD", "i.sz. 410", "410 d.Hr") 
      }
    },
    {
      id: "ende_westrom",
      title: L("Ende Westroms", "End of Western Rome", "Nyugat-Róma vége", "Sfârșitul Romei de Vest"),
      hint1: L("476 wurde der letzte Kaiser abgesetzt.", "The last emperor was deposed in 476.", "Az utolsó császárt 476-ban menesztették.", "Ultimul împărat a fost destituit în 476."),
      hint2: L("Das Ende der Antike.", "The end of antiquity.", "Az ókor vége.", "Sfârșitul antichității."),
      svg: { type: "sentence-display", words: ["Ende", "einer", "Epoche"], color: "#000" },
      interactive: { type: "tap-count", tapCount: { emoji: "👑", count: 1 }, instruction: L("Zähle die Kaiser!", "Count the emperors!", "Számold meg a császárokat!", "Numără împărații!") },
      quiz: { 
        question: L("Wer setzte den letzten Kaiser ab?", "Who deposed the last emperor?", "Ki menesztette az utolsó császárt?", "Cine l-a detronat pe ultimul împărat?"), 
        choices: [L("Odoaker", "Odoacer", "Odoacer", "Odoacru"), L("Attila", "Attila", "Attila", "Attila"), L("Caesar", "Caesar", "Caesar", "Cezar"), L("Napoleon", "Napoleon", "Napóleon", "Napoleon")], 
        answer: L("Odoaker", "Odoacer", "Odoacer", "Odoacru") 
      }
    },
    {
      id: "odoaker",
      title: L("Odoaker", "Odoacer", "Odoacer", "Odoacru"),
      hint1: L("Ein germanischer Heerführer.", "A Germanic military leader.", "Germán katonai vezető.", "Un lider militar german."),
      hint2: L("Er nannte sich König von Italien.", "He called himself King of Italy.", "Olaszország királyának nevezte magát.", "S-a autointitulat rege al Italiei."),
      svg: { type: "text-bubbles", items: [{ text: "König", color: "#fff", bg: "#1e3a8a" }, { text: "Soldat", color: "#fff", bg: "#475569" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Odoaker", "Odoacer", "Odoacer", "Odoacru"), right: L("Germanen", "Teutons", "teutonok", "teutonii") }, { left: L("Romulus", "Romulus", "Romulus", "Romulus"), right: L("Letzter Kaiser", "Last Emperor", "Utolsó császár", "Ultimul împărat") }] },
      quiz: { 
        question: L("Wer wurde König von Italien nach 476?", "Who became King of Italy after 476?", "Ki lett 476 után Olaszország királya?", "Cine a devenit rege al Italiei după 476?"), 
        choices: [L("Odoaker", "Odoacer", "Odoacer", "Odoacru"), L("Augustus", "Augustus", "Augustus", "Augustus"), L("Karl", "Charles", "Károly", "Charles"), L("Arthur", "Arthur", "Arthur", "Arthur")], 
        answer: L("Odoaker", "Odoacer", "Odoacer", "Odoacru") 
      }
    },
    {
      id: "franken",
      title: L("Die Franken", "The Franks", "A frankok", "Francii"),
      hint1: L("Ein starker germanischer Stamm.", "A strong Germanic tribe.", "Erős germán törzs.", "Un trib germanic puternic."),
      hint2: L("Sie gründeten ein großes Reich.", "They founded a great empire.", "Nagy birodalmat alapítottak.", "Au întemeiat un mare imperiu."),
      svg: { type: "icon-grid", items: [{ emoji: "🛡️", label: "Schutz" }, { emoji: "🏰", label: "Reich" }] },
      interactive: { type: "gap-fill", text: L("Aus dem Frankenreich wurde __.", "The Frankish Empire became __.", "A Frank Birodalom __ lett.", "Imperiul franc a devenit __."), gaps: [{ index: 0, options: ["Frankreich", "England"], correct: 0 }] },
      quiz: { 
        question: L("Wer war ein früher Frankenkönig?", "Who was an early Frankish king?", "Ki volt a korai frank király?", "Cine a fost un rege franc timpuriu?"), 
        choices: [L("Chlodwig", "Clovis", "Clovis", "Clovis"), L("Attila", "Attila", "Attila", "Attila"), L("Alarich", "Alaric", "Alaric", "Alaric"), L("Hannibal", "Hannibal", "Hannibál", "Hannibal")], 
        answer: L("Chlodwig", "Clovis", "Clovis", "Clovis") 
      }
    },
    {
      id: "migration_reasons",
      title: L("Flucht & Migration", "Flight & Migration", "Repülés és migráció", "Zbor și migrație"),
      hint1: L("Warum wanderten die Völker?", "Why did people migrate?", "Miért vándoroltak az emberek?", "De ce au migrat oamenii?"),
      hint2: L("Klima, Hunger und Feinde.", "Climate, hunger and enemies.", "Klíma, éhség és ellenségek.", "Clima, foamea și dușmanii."),
      svg: { type: "two-groups", left: { items: ["Hunger", "Push"], bg: "#fee2e2", border: "#dc2626" }, right: { items: ["Land", "Pull"], bg: "#dcfce7", border: "#16a34a" } },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "g", label: L("Gründe", "Reasons", "Okok", "Motive") }], items: [{ text: L("Kälte", "cold", "hideg", "rece"), bucketId: "g" }, { text: L("Krieg", "War", "Háború", "Război"), bucketId: "g" }], instruction: L("Zuweisen!", "Assign!", "Hozzárendelés!", "Atribui!") },
      quiz: { 
        question: L("Was war ein Grund für die Wanderung?", "What was the reason for the hike?", "Mi volt az oka a kirándulásnak?", "Care a fost motivul excursiei?"), 
        choices: [L("Hunger und Kälte", "Hunger and cold", "Éhség és hideg", "Foame și frig"), L("Urlaubslust", "Holiday spirit", "Ünnepi hangulat", "Spirit de vacanță"), L("Langeweile", "boredom", "unalom", "plictiseală"), L("Reiseangebote", "Travel offers", "Utazási ajánlatok", "Oferte de călătorie")], 
        answer: L("Hunger und Kälte", "Hunger and cold", "Éhség és hideg", "Foame și frig") 
      }
    },
    {
      id: "ausloeser",
      title: L("Auslöser", "trigger", "ravaszt", "declanșatorul"),
      hint1: L("Der Einfall der Hunnen.", "The invasion of the Huns.", "A hunok inváziója.", "Invazia hunilor."),
      hint2: L("Ein Domino-Effekt begann.", "A domino effect began.", "Dominó effektus kezdődött.", "A început un efect de domino."),
      svg: { type: "icon-grid", items: [{ emoji: "🏇", label: "Hunnen" }, { emoji: "🏃", label: "Flucht" }] },
      interactive: { type: "word-order", words: [L("Hunnen", "Huns", "hunok", "huni"), L("kommen", "come", "jön", "vino"), L("Germanen", "Teutons", "teutonok", "teutonii"), L("gehen", "go", "megy", "merge")], instruction: L("Was geschah?", "What happened?", "Mi történt?", "Ce s-a întâmplat?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Welches Reitervolk löste alles aus?", "Which equestrian people caused everything?", "Melyik lovas nép okozott mindent?", "Care echitație a cauzat totul?"), 
        choices: [L("Hunnen", "Huns", "hunok", "huni"), L("Mongolen", "Mongols", "mongolok", "mongolii"), L("Römer", "Romans", "rómaiak", "romani"), L("Griechen", "Greeks", "görögök", "greci")], 
        answer: L("Hunnen", "Huns", "hunok", "huni") 
      }
    },
    {
      id: "folgen",
      title: L("Folgen", "Follow", "Kövesd", "Urmăriți"),
      hint1: L("Die Karte Europas änderte sich.", "The map of Europe changed.", "Európa térképe megváltozott.", "Harta Europei s-a schimbat."),
      hint2: L("Sprachen und Reiche entstanden neu.", "New languages ​​and empires emerged.", "Új nyelvek és birodalmak jelentek meg.", "Au apărut noi limbi și imperii."),
      svg: { type: "text-bubbles", items: [{ text: "Grenzen", color: "#fff", bg: "#9333ea" }, { text: "Sprache", color: "#fff", bg: "#7c3aed" }] },
      interactive: { type: "gap-fill", text: L("Es entstanden neue __.", "New __ emerged.", "Új __ jelent meg.", "Noua __ a apărut."), gaps: [{ index: 0, options: ["Königreiche", "Pyramiden"], correct: 0 }] },
      quiz: { 
        question: L("Was passierte mit Europa?", "What happened to Europe?", "Mi történt Európával?", "Ce sa întâmplat cu Europa?"), 
        choices: [L("Neue Reiche entstanden", "New empires emerged", "Új birodalmak jöttek létre", "Au apărut noi imperii"), L("Es wurde eine Wüste", "It became a desert", "Sivatag lett belőle", "A devenit un deșert"), L("Es blieb gleich", "It stayed the same", "Ugyanúgy maradt", "A rămas la fel"), L("Es versank im Meer", "It sank into the sea", "A tengerbe süllyedt", "S-a scufundat în mare")], 
        answer: L("Neue Reiche entstanden", "New empires emerged", "Új birodalmak jöttek létre", "Au apărut noi imperii") 
      }
    },
    {
      id: "uebergang",
      title: L("Übergang", "transition", "átmenet", "tranziţie"),
      hint1: L("Von der Antike zum Mittelalter.", "From antiquity to the Middle Ages.", "Az ókortól a középkorig.", "Din antichitate până în Evul Mediu."),
      hint2: L("Eine zeit des Wandels.", "A time of change.", "A változás ideje.", "Un timp de schimbare."),
      svg: { type: "two-groups", left: { items: ["Antike", "Alt"], bg: "#f1f5f9", border: "#475569" }, right: { items: ["Mittelalter", "Neu"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "word-order", words: [L("Ende", "End", "Vége", "Sfârşit"), L("der", "the", "a", "cel"), L("Antike", "Antiquity", "Antikvitás", "Antichitate")], instruction: L("Was geschah?", "What happened?", "Mi történt?", "Ce s-a întâmplat?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Welche Epoche folgt auf die Antike?", "Which era follows antiquity?", "Melyik korszak követi az ókort?", "Care epocă urmează antichității?"), 
        choices: [L("Mittelalter", "Middle Ages", "középkor", "Evul mediu"), L("Steinzeit", "Stone Age", "kőkorszak", "Epoca de piatră"), L("Neuzeit", "modern times", "modern idők", "timpurile moderne"), L("Gegenwart", "Present", "Jelenlegi", "Prezent")], 
        answer: L("Mittelalter", "Middle Ages", "középkor", "Evul mediu") 
      }
    },
    {
      id: "kirche",
      title: L("Kirchenrolle", "Church role", "Egyházi szerep", "Rolul bisericii"),
      hint1: L("Die Kirche blieb stabil.", "The church remained stable.", "A templom stabil maradt.", "Biserica a rămas stabilă."),
      hint2: L("Sie bewahrte das Wissen.", "She preserved the knowledge.", "Megőrizte a tudást.", "Ea a păstrat cunoștințele."),
      svg: { type: "icon-grid", items: [{ emoji: "⛪", label: "Kirche" }, { emoji: "📜", label: "Wissen" }] },
      interactive: { type: "gap-fill", text: L("Die Kirche sprach __.", "The church spoke __.", "Az egyház beszélt __.", "Biserica a vorbit __."), gaps: [{ index: 0, options: ["Latein", "Deutsch"], correct: 0 }] },
      quiz: { 
        question: L("Was tat die Kirche während der Wanderung?", "What did the church do during the hike?", "Mit csinált az egyház a kirándulás alatt?", "Ce a făcut biserica în timpul drumeției?"), 
        choices: [L("Wissen bewahren", "Preserve knowledge", "Őrizd meg a tudást", "Păstrează cunoștințele"), L("Krieg führen", "wage war", "háborút vívni", "duce războiul"), L("Verschwinden", "Disappear", "Eltűnik", "Dispărea"), L("Häuser bauen", "Build houses", "Házakat építeni", "Construiți case")], 
        answer: L("Wissen bewahren", "Preserve knowledge", "Őrizd meg a tudást", "Păstrează cunoștințele") 
      }
    },
    {
      id: "kulturwandel",
      title: L("Kulturwandel", "Cultural change", "Kulturális változás", "Schimbarea culturală"),
      hint1: L("Römische und germanische Kultur mischten sich.", "Roman and Germanic cultures mixed.", "A római és a germán kultúra keveredik.", "Culturile romane și germanice s-au amestecat."),
      hint2: L("Neue Traditionen entstanden.", "New traditions emerged.", "Új hagyományok alakultak ki.", "Au apărut noi tradiții."),
      svg: { type: "text-bubbles", items: [{ text: "Mix", color: "#fff", bg: "#db2777" }, { text: "Neu", color: "#fff", bg: "#be185d" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Römer", "Romans", "rómaiak", "romani"), right: L("Städte", "Cities", "Városok", "Orașe") }, { left: L("Germanen", "Teutons", "teutonok", "teutonii"), right: L("Dörfer", "Villages", "Falvak", "Sate") }] },
      quiz: { 
        question: L("Was passierte mit den Kulturen?", "What happened to the cultures?", "Mi történt a kultúrákkal?", "Ce s-a întâmplat cu culturile?"), 
        choices: [L("Sie mischten sich", "They mingled", "Összekeveredtek", "S-au amestecat"), L("Sie blieben getrennt", "They remained separated", "Külön maradtak", "Au rămas separați"), L("Eine verschwand", "One disappeared", "Az egyik eltűnt", "Unul a dispărut"), L("Nichts", "Nothing", "Semmi", "Nimic")], 
        answer: L("Sie mischten sich", "They mingled", "Összekeveredtek", "S-au amestecat") 
      }
    },
    {
      id: "langobarden",
      title: L("Die Langobarden", "The Lombards", "A langobardok", "Lombardii"),
      hint1: L("Ein Volk in Norditalien.", "A people in northern Italy.", "Egy nép Észak-Olaszországban.", "Un popor din nordul Italiei."),
      hint2: L("Sie gaben der Lombardei ihren Namen.", "They gave Lombardy its name.", "Ők adták Lombardiának a nevét.", "Au dat numele Lombardiei."),
      svg: { type: "word-display", word: "LANGBART", color: "#15803d" },
      interactive: { type: "gap-fill", text: L("Name bedeutet __.", "Name means __.", "A név jelentése __.", "Numele înseamnă __."), gaps: [{ index: 0, options: ["Langbart", "Langbein"], correct: 0 }] },
      quiz: { 
        question: L("Woher kommt der Name Lombardei?", "Where does the name Lombardy come from?", "Honnan származik a Lombardia név?", "De unde provine numele Lombardia?"), 
        choices: [L("Vom Volk der Langobarden", "From the Lombard people", "A lombard néptől", "De la poporul lombard"), L("Vom Berg", "From the mountain", "A hegyről", "De la munte"), L("Vom Meer", "From the sea", "A tengerből", "De la mare"), L("Vom Kaiser", "From the emperor", "A császártól", "De la împărat")], 
        answer: L("Vom Volk der Langobarden", "From the Lombard people", "A lombard néptől", "De la poporul lombard") 
      }
    }
  ]
};

// ─── ISLAND 8: ÜBERGANG ZUM MITTELALTER ─────────────────────────────────────
const I8: IslandSpec = {
  id: "i8",
  title: L("Übergang zum Mittelalter", "Transition to the Middle Ages", "Átmenet a középkorba", "Tranziția către Evul Mediu"),
  topics: [
    {
      id: "chlodwig",
      title: L("König Chlodwig", "King Clovis", "Clovis király", "Regele Clovis"),
      hint1: L("Ein mächtiger Frankenkönig.", "A powerful Frankish king.", "Erőteljes frank király.", "Un rege franc puternic."),
      hint2: L("Er einte die fränkischen Stämme.", "He united the Frankish tribes.", "Egyesítette a frank törzseket.", "El a unit triburile france."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "Macht" }, { emoji: "🛡️", label: "Franken" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Chlodwig", "Clovis", "Clovis", "Clovis"), right: L("Merowinger", "Merovingian", "Meroving", "merovingian") }, { left: L("Reich", "Rich", "Gazdag", "Bogat"), right: L("Einigung", "agreement", "megállapodás", "acord") }] },
      quiz: { 
        question: L("Welche Dynastie gründete Chlodwig?", "Which dynasty founded Clovis?", "Melyik dinasztia alapította Clovist?", "Care dinastie l-a fondat pe Clovis?"), 
        choices: [L("Merowinger", "Merovingian", "Meroving", "merovingian"), L("Karolinger", "Carolingian", "Karoling", "carolingian"), L("Habsburger", "Habsburgs", "Habsburgok", "Habsburgii"), L("Römer", "Romans", "rómaiak", "romani")], 
        answer: L("Merowinger", "Merovingian", "Meroving", "merovingian") 
      }
    },
    {
      id: "taufe",
      title: L("Die Taufe", "The baptism", "A keresztség", "Botezul"),
      hint1: L("Chlodwig wurde Christ.", "Clovis became a Christian.", "Clovis keresztény lett.", "Clovis a devenit creștin."),
      hint2: L("Das war wichtig für sein Reich.", "This was important for his empire.", "Ez fontos volt birodalma számára.", "Acest lucru a fost important pentru imperiul său."),
      svg: { type: "text-bubbles", items: [{ text: "Glaube", color: "#fff", bg: "#3b82f6" }, { text: "Taufe", color: "#fff", bg: "#60a5fa" }] },
      interactive: { type: "gap-fill", text: L("Chlodwig wurde __.", "Clovis became __.", "Clovis __ lett.", "Clovis a devenit __."), gaps: [{ index: 0, options: ["katholisch", "muslimisch"], correct: 0 }] },
      quiz: { 
        question: L("Warum ließ sich Chlodwig taufen?", "Why was Clovis baptized?", "Miért keresztelkedett meg Clovis?", "De ce a fost botezat Clovis?"), 
        choices: [L("Um Macht zu festigen", "To consolidate power", "A hatalom megszilárdítására", "Pentru a consolida puterea"), L("Aus Versehen", "Accidentally", "Véletlenül", "Accidental"), L("Er wollte Urlaub", "He wanted a vacation", "Nyaralni akart", "Vroia o vacanta"), L("Gar nicht", "Not at all", "Egyáltalán nem", "Deloc")], 
        answer: L("Um Macht zu festigen", "To consolidate power", "A hatalom megszilárdítására", "Pentru a consolida puterea") 
      }
    },
    {
      id: "missionierung",
      title: L("Missionierung", "Proselytizing", "hittérítő", "Prozelitism"),
      hint1: L("Die Verbreitung des Christentums.", "The spread of Christianity.", "A kereszténység terjedése.", "Răspândirea creștinismului."),
      hint2: L("Mönche zogen durch das Land.", "Monks roamed the country.", "Szerzetesek járták az országot.", "Călugării cutreierau prin țară."),
      svg: { type: "icon-grid", items: [{ emoji: "⛪", label: "Glaube" }, { emoji: "🚶", label: "Reise" }] },
      interactive: { type: "word-order", words: [L("Glauben", "Believe", "Hisz", "crede"), L("in", "in", "be", "în"), L("die", "the", "a", "cel"), L("Welt", "World", "Világ", "Lume")], instruction: L("Was ist Mission?", "What is Mission?", "Mi az a küldetés?", "Ce este Misiunea?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Was machten Missionare?", "What did missionaries do?", "Mit csináltak a misszionáriusok?", "Ce au făcut misionarii?"), 
        choices: [L("Religion verbreiten", "Spread religion", "Terjeszd a vallást", "Răspândiți religia"), L("Häuser bauen", "Build houses", "Házakat építeni", "Construiți case"), L("Handel", "Trade", "Kereskedelmi", "Comerț"), L("Krieg führen", "wage war", "háborút vívni", "duce războiul")], 
        answer: L("Religion verbreiten", "Spread religion", "Terjeszd a vallást", "Răspândiți religia") 
      }
    },
    {
      id: "kloester",
      title: L("Klöster", "monasteries", "kolostorok", "mănăstiri"),
      hint1: L("Orte des Gebets und der Arbeit.", "Places of prayer and work.", "Ima és munka helyek.", "Locuri de rugăciune și muncă."),
      hint2: L("Zentren des Wissens.", "centers of knowledge.", "tudásközpontok.", "centre de cunoaștere."),
      svg: { type: "two-groups", left: { items: ["Beten", "Ora"], bg: "#ede9fe", border: "#7c3aed" }, right: { items: ["Arbeiten", "Labora"], bg: "#dcfce7", border: "#16a34a" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Mönch", "monk", "szerzetes", "călugăr"), right: L("Kloster", "monastery", "kolostor", "mănăstire") }, { left: L("Nonne", "nun", "apáca", "călugăriţă"), right: L("Kloster", "monastery", "kolostor", "mănăstire") }] },
      quiz: { 
        question: L("Was war die Hauptaufgabe im Kloster?", "What was the main task in the monastery?", "Mi volt a fő feladat a kolostorban?", "Care era sarcina principală în mănăstire?"), 
        choices: [L("Beten und Arbeiten", "Pray and work", "Imádkozz és dolgozz", "Rugați-vă și lucrați"), L("Nur Schlafen", "Just sleep", "Csak aludj", "Doar dormi"), L("Kriegstraining", "War training", "Háborús kiképzés", "Antrenament de război"), L("Handel", "Trade", "Kereskedelmi", "Comerț")], 
        answer: L("Beten und Arbeiten", "Pray and work", "Imádkozz és dolgozz", "Rugați-vă și lucrați") 
      }
    },
    {
      id: "moenche",
      title: L("Mönche", "Monks", "Szerzetesek", "Călugării"),
      hint1: L("Sie lebten nach festen Regeln.", "They lived according to fixed rules.", "Rögzített szabályok szerint éltek.", "Ei trăiau după reguli fixe."),
      hint2: L("Benedikt von Nursia schrieb Regeln.", "Benedict of Nursia wrote rules.", "Nursia Benedek írt szabályokat.", "Benedict de Nursia a scris reguli."),
      svg: { type: "text-bubbles", items: [{ text: "Regel", color: "#fff", bg: "#475569" }, { text: "Stille", color: "#fff", bg: "#94a3b8" }] },
      interactive: { type: "gap-fill", text: L("Ein bekannter Mönch war __.", "A well-known monk was __.", "Egy jól ismert szerzetes __ volt.", "Un călugăr cunoscut a fost __."), gaps: [{ index: 0, options: ["Benedikt", "Caesar"], correct: 0 }] },
      quiz: { 
        question: L("Wie lebten Mönche?", "How did monks live?", "Hogyan éltek a szerzetesek?", "Cum trăiau călugării?"), 
        choices: [L("Nach Regeln", "According to rules", "Szabályok szerint", "Conform regulilor"), L("Völlig frei", "Completely free", "Teljesen ingyenes", "Complet gratuit"), L("In Städten", "In cities", "A városokban", "În orașe"), L("Auf Schiffen", "On ships", "A hajókon", "Pe nave")], 
        answer: L("Nach Regeln", "According to rules", "Szabályok szerint", "Conform regulilor") 
      }
    },
    {
      id: "schreibstuben",
      title: L("Schreibstuben", "Writing rooms", "Írószobák", "Camere de scris"),
      hint1: L("Bücher wurden von Hand kopiert.", "Books were copied by hand.", "A könyveket kézzel másolták.", "Cărțile erau copiate manual."),
      hint2: L("Sehr mühsame Arbeit.", "Very tedious work.", "Nagyon fárasztó munka.", "Munca foarte obositoare."),
      svg: { type: "icon-grid", items: [{ emoji: "✒️", label: "Feder" }, { emoji: "📖", label: "Buch" }] },
      interactive: { type: "word-order", words: [L("Buch", "Book", "Könyv", "Carte"), L("von", "from", "-tól", "din"), L("Hand", "hand", "kéz", "mână")], instruction: L("Wie entstand ein Buch?", "How did a book come about?", "Hogyan született egy könyv?", "Cum a apărut o carte?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wo wurden Bücher kopiert?", "Where were books copied?", "Hol másolták a könyveket?", "Unde au fost copiate cărțile?"), 
        choices: [L("In der Schreibstube", "In the writing room", "Az írószobában", "În camera de scris"), L("In der Fabrik", "In the factory", "A gyárban", "În fabrică"), L("Im Wald", "In the forest", "Az erdőben", "În pădure"), L("Gar nicht", "Not at all", "Egyáltalán nem", "Deloc")], 
        answer: L("In der Schreibstube", "In the writing room", "Az írószobában", "În camera de scris") 
      }
    },
    {
      id: "bildung",
      title: L("Bildung", "Education", "Oktatás", "Educaţie"),
      hint1: L("Nur wenige konnten lesen.", "Only a few could read.", "Csak kevesen tudtak olvasni.", "Doar câțiva puteau citi."),
      hint2: L("Kloster-Schulen waren wichtig.", "Monastery schools were important.", "Fontosak voltak a kolostori iskolák.", "Școlile mănăstirii erau importante."),
      svg: { type: "word-display", word: "LESEN", color: "#10b981" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Mönche", "Monks", "Szerzetesek", "Călugării"), right: L("Lesen", "To read", "Olvasni", "A citi") }, { left: L("Bauern", "farmers", "gazdálkodók", "fermierii"), right: L("Feldarbeit", "Field work", "Terepmunka", "Munca pe teren") }] },
      quiz: { 
        question: L("Wer konnte im frühen Mittelalter meist lesen?", "Who could read most in the early Middle Ages?", "Ki tudott a legtöbbet olvasni a korai középkorban?", "Cine putea citi cel mai mult în Evul Mediu timpuriu?"), 
        choices: [L("Mönche und Priester", "monks and priests", "szerzetesek és papok", "monahi si preoti"), L("Alle", "All", "Minden", "Toate"), L("Nur Bauern", "Just farmers", "Csak gazdálkodók", "Doar fermieri"), L("Niemand", "No one", "Senki", "Nici unul")], 
        answer: L("Mönche und Priester", "monks and priests", "szerzetesek és papok", "monahi si preoti") 
      }
    },
    {
      id: "land_ma",
      title: L("Landwirtschaft", "agriculture", "mezőgazdaság", "agricultură"),
      hint1: L("Die Basis des Lebens.", "The basis of life.", "Az élet alapja.", "Baza vieții."),
      hint2: L("Fast alle waren Bauern.", "Almost all of them were farmers.", "Szinte valamennyien földművesek voltak.", "Aproape toți erau fermieri."),
      svg: { type: "icon-grid", items: [{ emoji: "🌾", label: "Feld" }, { emoji: "🐂", label: "Ochse" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "b", label: L("Bauer", "farmer", "gazda", "agricultor") }], items: [{ text: L("Pflug", "plow", "eke", "plug"), bucketId: "b" }, { text: L("Sense", "Scythe", "Kasza", "Coasă"), bucketId: "b" }], instruction: L("Zuweisen!", "Assign!", "Hozzárendelés!", "Atribui!") },
      quiz: { 
        question: L("Was war der wichtigste Beruf?", "What was the most important job?", "Mi volt a legfontosabb munka?", "Care a fost cea mai importantă slujbă?"), 
        choices: [L("Bauer", "farmer", "gazda", "agricultor"), L("Ritter", "Knight", "Lovag", "Cavaler"), L("Händler", "Dealer", "Kereskedő", "Dealer"), L("Seefahrer", "Sailors", "Tengerészek", "Marinarii")], 
        answer: L("Bauer", "farmer", "gazda", "agricultor") 
      }
    },
    {
      id: "grundherrschaft",
      title: L("Grundherrschaft", "manorial rule", "uradalmi uralom", "stăpânire boierească"),
      hint1: L("Der Herr besitzt das Land.", "The Lord owns the land.", "Az Úr birtokolja a földet.", "Domnul deține pământul."),
      hint2: L("Bauern arbeiten für ihn.", "Farmers work for him.", "A gazdák dolgoznak neki.", "Fermierii lucrează pentru el."),
      svg: { type: "two-groups", left: { items: ["Grundherr", "Schutz"], bg: "#f1f5f9", border: "#475569" }, right: { items: ["Bauer", "Arbeit"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "gap-fill", text: L("Der Herr gab den Bauern __.", "The Lord gave the farmers __.", "Az Úr adta a gazdáknak __.", "Domnul a dat fermierilor __."), gaps: [{ index: 0, options: ["Schutz", "Gold"], correct: 0 }] },
      quiz: { 
        question: L("Was mussten Bauern dem Herrn geben?", "What did farmers have to give to the master?", "Mit kellett adni a gazdáknak a gazdának?", "Ce trebuiau fermierii să-i dea stăpânului?"), 
        choices: [L("Abgaben und Frondienst", "Taxes and compulsory labor", "Adók és kötelező munka", "Impozite si munca obligatorie"), L("Nichts", "Nothing", "Semmi", "Nimic"), L("Blumen", "Flowers", "Virágok", "Flori"), L("Geschenke", "Gifts", "Ajándékok", "Cadouri")], 
        answer: L("Abgaben und Frondienst", "Taxes and compulsory labor", "Adók és kötelező munka", "Impozite si munca obligatorie") 
      }
    },
    {
      id: "dorf",
      title: L("Dorfgemeinschaft", "Village community", "Faluközösség", "Comunitatea satului"),
      hint1: L("Menschen halfen sich gegenseitig.", "People helped each other.", "Az emberek segítették egymást.", "Oamenii s-au ajutat unii pe alții."),
      hint2: L("Ein Dorf war fast autark.", "A village was almost self-sufficient.", "Egy falu szinte önellátó volt.", "Un sat era aproape autosuficient."),
      svg: { type: "text-bubbles", items: [{ text: "Dorf", color: "#fff", bg: "#16a34a" }, { text: "Hilfe", color: "#fff", bg: "#22c55e" }] },
      interactive: { type: "word-order", words: [L("Zusammenhalt", "cohesion", "kohézió", "coeziune"), L("im", "in the", "a", "în"), L("Dorf", "Village", "Falu", "Sat")], instruction: L("Was war wichtig?", "What was important?", "Mi volt fontos?", "Ce era important?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wie lebten die Menschen im Dorf?", "How did the people in the village live?", "Hogyan éltek a falubeliek?", "Cum trăiau oamenii din sat?"), 
        choices: [L("Eng zusammen", "Close together", "Közel egymáshoz", "Apropiați"), L("Jeder für sich", "Everyone for themselves", "Mindenki önmagáért", "Fiecare pentru sine"), L("In Hochhäusern", "In high-rise buildings", "Sokemeletes épületekben", "În clădirile înalte"), L("In Zelten", "In tents", "Sátrakban", "În corturi")], 
        answer: L("Eng zusammen", "Close together", "Közel egymáshoz", "Apropiați") 
      }
    },
    {
      id: "dreifeld",
      title: L("Dreifelderwirtschaft", "Three-field economy", "Három mezőgazdaság", "Economia cu trei câmpuri"),
      hint1: L("Ein neues System der Landwirtschaft.", "A new system of agriculture.", "A mezőgazdaság új rendszere.", "Un nou sistem de agricultură."),
      hint2: L("Brache, Winter- und Sommergetreide.", "Fallow, winter and summer cereals.", "Ugar, őszi és nyári kalászosok.", "Cereale de pânză, iarnă și vară."),
      svg: { type: "icon-grid", items: [{ emoji: "1️⃣", label: "Winter" }, { emoji: "2️⃣", label: "Sommer" }, { emoji: "3️⃣", label: "Pause" }] },
      interactive: { type: "tap-count", tapCount: { emoji: "🌾", count: 3 }, instruction: L("Zähle die Felder!", "Count the fields!", "Számold meg a mezőket!", "Numără câmpurile!") },
      quiz: { 
        question: L("Was war der Vorteil der Dreifelderwirtschaft?", "What was the advantage of the three-field economy?", "Mi volt a hárommezős gazdaság előnye?", "Care a fost avantajul economiei cu trei câmpuri?"), 
        choices: [L("Höhere Ernten", "Higher harvests", "Magasabb termés", "Recolte mai mari"), L("Weniger Arbeit", "Less work", "Kevesebb munka", "Mai puțină muncă"), L("Mehr Freizeit", "More free time", "Több szabadidő", "Mai mult timp liber"), L("Bunte Felder", "Colorful fields", "Színes mezők", "Câmpuri colorate")], 
        answer: L("Höhere Ernten", "Higher harvests", "Magasabb termés", "Recolte mai mari") 
      }
    },
    {
      id: "macht_kirche",
      title: L("Die Kirche", "The church", "A templom", "Biserica"),
      hint1: L("Ein mächtiger Faktor.", "A powerful factor.", "Erőteljes tényező.", "Un factor puternic."),
      hint2: L("Sie besaß viel Land.", "She owned a lot of land.", "Nagyon sok földje volt.", "Ea deținea mult teren."),
      svg: { type: "text-bubbles", items: [{ text: "Glaube", color: "#fff", bg: "#3b82f6" }, { text: "Macht", color: "#fff", bg: "#1e3a8a" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Kirche", "Church", "Templom", "Biserică"), right: L("Macht", "Power", "Hatalom", "Putere") }, { left: L("Papst", "Pope", "Pápa", "Papă"), right: L("Anführer", "leader", "vezető", "lider") }] },
      quiz: { 
        question: L("Wer war der mächtigste Mann der Kirche?", "Who was the most powerful man in the church?", "Ki volt a leghatalmasabb ember a gyülekezetben?", "Cine a fost cel mai puternic om din biserică?"), 
        choices: [L("Papst", "Pope", "Pápa", "Papă"), L("Kaiser", "Emperor", "Császár", "Împărat"), L("Bauer", "farmer", "gazda", "agricultor"), L("Soldat", "soldier", "katona", "soldat")], 
        answer: L("Papst", "Pope", "Pápa", "Papă") 
      }
    },
    {
      id: "papst",
      title: L("Der Papst", "The Pope", "A pápa", "Papa"),
      hint1: L("Der Nachfolger des Petrus.", "The Successor of Peter.", "Péter utódja.", "Succesorul lui Petru."),
      hint2: L("Sitz in Rom.", "Based in Rome.", "Székhelye: Róma.", "Cu sediul în Roma."),
      svg: { type: "icon-grid", items: [{ emoji: "🏛️", label: "Vatikan" }, { emoji: "🗝️", label: "Schlüssel" }] },
      interactive: { type: "gap-fill", text: L("Der Papst wohnt in __.", "The Pope lives in __.", "A pápa __-ban él.", "Papa locuiește în __."), gaps: [{ index: 0, options: ["Rom", "Berlin"], correct: 0 }] },
      quiz: { 
        question: L("Welche Stadt ist der Sitz des Papstes?", "Which city is the seat of the Pope?", "Melyik város a pápa székhelye?", "În ce oraș se află sediul Papei?"), 
        choices: [L("Rom", "Rome", "Róma", "Roma"), L("Paris", "Paris", "Párizs", "Paris"), L("London", "London", "London", "Londra"), L("Athen", "Athens", "Athén", "Atena")], 
        answer: L("Rom", "Rome", "Róma", "Roma") 
      }
    },
    {
      id: "bischoefe",
      title: L("Bischöfe", "Bishops", "Püspökök", "Episcopii"),
      hint1: L("Leiter der Kirche in einer Region.", "Leader of the church in a region.", "A gyülekezet vezetője egy régióban.", "Liderul bisericii dintr-o regiune."),
      hint2: L("Oft Berater der Könige.", "Often advisors to kings.", "Gyakran a királyok tanácsadói.", "Adesea consilieri ai regilor."),
      svg: { type: "word-display", word: "BISCHOF", color: "#9333ea" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Bischof", "bishop", "püspök", "episcop"), right: L("Region", "region", "régióban", "regiune") }, { left: L("Stab", "rod", "rúd", "tijă"), right: L("Zeichen", "Sign", "Jel", "Semn") }] },
      quiz: { 
        question: L("Welche Rolle hatten Bischöfe?", "What role did bishops have?", "Milyen szerepük volt a püspököknek?", "Ce rol au avut episcopii?"), 
        choices: [L("Geistliche Führer", "Spiritual leaders", "Spirituális vezetők", "Conducători spirituali"), L("Bauarbeiter", "construction worker", "építőmunkás", "muncitor în construcţii"), L("Seefahrer", "Sailors", "Tengerészek", "Marinarii"), L("Köche", "Chefs", "Szakácsok", "bucătari")], 
        answer: L("Geistliche Führer", "Spiritual leaders", "Spirituális vezetők", "Conducători spirituali") 
      }
    },
    {
      id: "kulturbewahrung",
      title: L("Kulturbewahrung", "Cultural preservation", "Kulturális megőrzés", "Conservarea culturală"),
      hint1: L("Wissen aus der Antike retten.", "Saving knowledge from antiquity.", "A tudás megmentése az ókorból.", "Salvarea cunoștințelor din antichitate."),
      hint2: L("Mönche schrieben alte Texte ab.", "Monks copied ancient texts.", "A szerzetesek ősi szövegeket másoltak.", "Călugării copiau texte antice."),
      svg: { type: "icon-grid", items: [{ emoji: "🏛️", label: "Alt" }, { emoji: "📖", label: "Neu" }] },
      interactive: { type: "word-order", words: [L("Rettung", "rescue", "mentés", "salvare"), L("des", "des", "des", "des"), L("Wissens", "knowledge", "tudás", "cunoştinţe")], instruction: L("Was geschah?", "What happened?", "Mi történt?", "Ce s-a întâmplat?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Wer bewahrte die antike Kultur?", "Who preserved ancient culture?", "Ki őrizte meg az ősi kultúrát?", "Cine a păstrat cultura antică?"), 
        choices: [L("Die Mönche", "The monks", "A szerzetesek", "Călugării"), L("Die Hunnen", "The Huns", "A hunok", "Hunii"), L("Niemand", "No one", "Senki", "Nici unul"), L("Die Wikinger", "The Vikings", "A vikingek", "Vikingii")], 
        answer: L("Die Mönche", "The monks", "A szerzetesek", "Călugării") 
      }
    }
  ]
};

// ─── ISLAND 9: ANTIKE WIEDERHOLUNG ──────────────────────────────────────────
const I9: IslandSpec = {
  id: "i9",
  title: L("Antike Wiederholung", "Antique repeat", "Antik ismétlés", "Repetă antică"),
  topics: [
    {
      id: "vergleich_kulturen",
      title: L("Kulturvergleich", "Cultural comparison", "Kulturális összehasonlítás", "Comparație culturală"),
      hint1: L("Ägypten, Griechenland, Rom.", "Egypt, Greece, Rome.", "Egyiptom, Görögország, Róma.", "Egipt, Grecia, Roma."),
      hint2: L("Was haben sie gemeinsam?", "What do they have in common?", "Mi a közös bennük?", "Ce au în comun?"),
      svg: { type: "icon-grid", items: [{ emoji: "🇪🇬", label: "Ägypten" }, { emoji: "🇬🇷", label: "Griechenland" }, { emoji: "🇮🇹", label: "Rom" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Pharao", "Pharaoh", "fáraó", "faraon"), right: L("Ägypten", "Egypt", "Egyiptom", "Egipt") }, { left: L("Demokratie", "democracy", "demokrácia", "democraţie"), right: L("Griechenland", "Greece", "Görögország", "Grecia") }, { left: L("Kaiser", "Emperor", "Császár", "Împărat"), right: L("Rom", "Rome", "Róma", "Roma") }] },
      quiz: { 
        question: L("Welche Kultur erfand die Demokratie?", "Which culture invented democracy?", "Melyik kultúra találta fel a demokráciát?", "Care cultură a inventat democrația?"), 
        choices: [L("Griechenland", "Greece", "Görögország", "Grecia"), L("Ägypten", "Egypt", "Egyiptom", "Egipt"), L("Rom", "Rome", "Róma", "Roma"), L("Germanen", "Teutons", "teutonok", "teutonii")], 
        answer: L("Griechenland", "Greece", "Görögország", "Grecia") 
      }
    },
    {
      id: "timeline",
      title: L("Zeitstrahl", "Timeline", "Idővonal", "Cronologie"),
      hint1: L("Was kam zuerst?", "What came first?", "Mi volt előbb?", "Ce a venit mai întâi?"),
      hint2: L("Bringe die Ereignisse in Ordnung.", "Put events in order.", "Tedd rendbe az eseményeket.", "Pune evenimentele în ordine."),
      svg: { type: "text-bubbles", items: [{ text: "753", color: "#fff", bg: "#475569" }, { text: "1492", color: "#fff", bg: "#10b981" }] },
      interactive: { type: "word-order", words: [L("Ägypten", "Egypt", "Egyiptom", "Egipt"), L("Griechenland", "Greece", "Görögország", "Grecia"), L("Rom", "Rome", "Róma", "Roma"), L("Mittelalter", "Middle Ages", "középkor", "Evul mediu")], instruction: L("Zeitliche Folge?", "Time sequence?", "Idősorrend?", "Secvență de timp?"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Welche Epoche ist die älteste?", "Which era is the oldest?", "Melyik korszak a legrégebbi?", "Care epocă este cea mai veche?"), 
        choices: [L("Frühe Hochkulturen", "Early civilizations", "Korai civilizációk", "Civilizațiile timpurii"), L("Römisches Reich", "Roman Empire", "Római Birodalom", "Imperiul Roman"), L("Mittelalter", "Middle Ages", "középkor", "Evul mediu"), L("Neuzeit", "modern times", "modern idők", "timpurile moderne")], 
        answer: L("Frühe Hochkulturen", "Early civilizations", "Korai civilizációk", "Civilizațiile timpurii") 
      }
    },
    {
      id: "schriften_mix",
      title: L("Schriften", "Fonts", "Betűtípusok", "Fonturi"),
      hint1: L("Hieroglyphen, Runen, Alphabet.", "Hieroglyphs, runes, alphabet.", "Hieroglifák, rúnák, ábécé.", "Hieroglife, rune, alfabet."),
      hint2: L("Wer schrieb wie?", "Who wrote how?", "Ki hogyan írta?", "Cine a scris cum?"),
      svg: { type: "icon-grid", items: [{ emoji: "𓀀", label: "Ägypten" }, { emoji: "ᚠ", label: "Germanen" }, { emoji: "A", label: "Rom" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Hieroglyphen", "Hieroglyphs", "Hieroglifák", "Hieroglife"), right: L("Ägypten", "Egypt", "Egyiptom", "Egipt") }, { left: L("Runen", "Runes", "Rúnák", "Rune"), right: L("Germanen", "Teutons", "teutonok", "teutonii") }, { left: L("Latein", "Latin", "latin", "latin"), right: L("Rom", "Rome", "Róma", "Roma") }] },
      quiz: { 
        question: L("Welche Schrift nutzten die Germanen?", "What script did the Germanic people use?", "Milyen forgatókönyvet használtak a germánok?", "Ce script a folosit poporul german?"), 
        choices: [L("Runen", "Runes", "Rúnák", "Rune"), L("Hieroglyphen", "Hieroglyphs", "Hieroglifák", "Hieroglife"), L("Keilschrift", "Cuneiform", "Ékírásos", "Cuneiform"), L("Gar keine", "None at all", "Egyáltalán nem", "Deloc")], 
        answer: L("Runen", "Runes", "Rúnák", "Rune") 
      }
    },
    {
      id: "bauwerke_mix",
      title: L("Bauwerke", "Structures", "Struktúrák", "Structuri"),
      hint1: L("Pyramiden, Tempel, Kolosseum.", "Pyramids, temples, colosseum.", "Piramisok, templomok, Colosseum.", "Piramide, temple, Colosseum."),
      hint2: L("Berühmte Steine.", "Famous stones.", "Híres kövek.", "Pietre celebre."),
      svg: { type: "text-bubbles", items: [{ text: "Grab", color: "#fff", bg: "#f59e0b" }, { text: "Arena", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Pyramide", "pyramid", "piramis", "piramidă"), right: L("Ägypten", "Egypt", "Egyiptom", "Egipt") }, { left: L("Parthenon", "Parthenon", "Parthenon", "Partenonul"), right: L("Griechenland", "Greece", "Görögország", "Grecia") }, { left: L("Kolosseum", "Colosseum", "Kolosszeum", "Colosseum"), right: L("Rom", "Rome", "Róma", "Roma") }] },
      quiz: { 
        question: L("Wo steht das Kolosseum?", "Where is the Colosseum?", "Hol van a Colosseum?", "Unde este Colosseumul?"), 
        choices: [L("Rom", "Rome", "Róma", "Roma"), L("Athen", "Athens", "Athén", "Atena"), L("Kairo", "Cairo", "Kairó", "Cairo"), L("Paris", "Paris", "Párizs", "Paris")], 
        answer: L("Rom", "Rome", "Róma", "Roma") 
      }
    },
    {
      id: "goetter_mix",
      title: L("Götterwelt", "world of gods", "istenek világa", "lumea zeilor"),
      hint1: L("Ra, Zeus, Wotan.", "Ra, Zeus, Wotan.", "Ra, Zeusz, Wotan.", "Ra, Zeus, Wotan."),
      hint2: L("Die Chefs der Götter.", "The bosses of the gods.", "Az istenek főnökei.", "Sefii zeilor."),
      svg: { type: "icon-grid", items: [{ emoji: "☀️", label: "Ra" }, { emoji: "⚡", label: "Zeus" }, { emoji: "👁️", label: "Wotan" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Sonne", "Sun", "Nap", "Soare"), right: L("Ra", "Ra", "Ra", "Ra") }, { left: L("Blitz", "flash", "vaku", "flash"), right: L("Zeus", "Zeus", "Zeusz", "Zeus") }, { left: L("Wissen", "To know", "Tudni", "A sti"), right: L("Wotan", "Wotan", "Wotan", "Wotan") }] },
      quiz: { 
        question: L("Wer ist der griechische Göttervater?", "Who is the Greek father of the gods?", "Ki az istenek görög atyja?", "Cine este părintele grec al zeilor?"), 
        choices: [L("Zeus", "Zeus", "Zeusz", "Zeus"), L("Wotan", "Wotan", "Wotan", "Wotan"), L("Ra", "Ra", "Ra", "Ra"), L("Osiris", "Osiris", "Ozirisz", "Osiris")], 
        answer: L("Zeus", "Zeus", "Zeusz", "Zeus") 
      }
    },
    {
      id: "menschen_mix",
      title: L("Berühmte Köpfe", "Famous people", "Híres emberek", "Oameni celebri"),
      hint1: L("Tutanchamun, Sokrates, Caesar.", "Tutankhamun, Socrates, Caesar.", "Tutanhamon, Szókratész, Caesar.", "Tutankhamon, Socrate, Cezar."),
      hint2: L("Männer der Geschichte.", "Men of History.", "A történelem emberei.", "Oameni de istorie."),
      svg: { type: "text-bubbles", items: [{ text: "Denker", color: "#fff", bg: "#3b82f6" }, { text: "König", color: "#fff", bg: "#facc15" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Sokrates", "Socrates", "Szókratész", "Socrate"), right: L("Denker", "thinker", "gondolkodó", "gânditor") }, { left: L("Caesar", "Caesar", "Caesar", "Cezar"), right: L("Feldherr", "General", "Általános", "General") }] },
      quiz: { 
        question: L("Wer war ein römischer Feldherr?", "Who was a Roman general?", "Ki volt a római hadvezér?", "Cine a fost un general roman?"), 
        choices: [L("Julius Caesar", "Julius Caesar", "Julius Caesar", "Iulius Cezar"), L("Sokrates", "Socrates", "Szókratész", "Socrate"), L("Tutanchamun", "Tutankhamun", "Tutanhamon", "Tutankhamon"), L("Platon", "Plato", "Plató", "Platon")], 
        answer: L("Julius Caesar", "Julius Caesar", "Julius Caesar", "Iulius Cezar") 
      }
    },
    {
      id: "ursache_wirkung",
      title: L("Ursachen", "Causes", "Okai", "Cauze"),
      hint1: L("Warum passierten Dinge?", "Why did things happen?", "Miért történtek dolgok?", "De ce s-au întâmplat lucrurile?"),
      hint2: L("Zusammenhänge verstehen.", "Understand connections.", "Értsd az összefüggéseket.", "Înțelegeți conexiunile."),
      svg: { type: "two-groups", left: { items: ["Nilflut", "Ernte"], bg: "#dbeafe", border: "#2563eb" }, right: { items: ["Hunnen", "Wanderung"], bg: "#fee2e2", border: "#dc2626" } },
      interactive: { type: "gap-fill", text: L("Ohne den Nil gäbe es kein __.", "Without the Nile there would be no __.", "A Nílus nélkül nem lenne __.", "Fără Nil nu ar exista __."), gaps: [{ index: 0, options: ["Ägypten", "Rom"], correct: 0 }] },
      quiz: { 
        question: L("Was war die Folge der Varusschlacht?", "What was the result of the Battle of Varus?", "Mi volt a varusi csata eredménye?", "Care a fost rezultatul bătăliei de la Varus?"), 
        choices: [L("Rom verlor Germanien", "Rome lost Germania", "Róma elvesztette Germaniát", "Roma a pierdut Germania"), L("Rom siegte", "Rome won", "Róma nyert", "Roma a câștigat"), L("Nichts", "Nothing", "Semmi", "Nimic"), L("Ende Roms", "End of Rome", "Róma vége", "Sfârșitul Romei")], 
        answer: L("Rom verlor Germanien", "Rome lost Germania", "Róma elvesztette Germaniát", "Roma a pierdut Germania") 
      }
    },
    {
      id: "reiche_mix",
      title: L("Großreiche", "Great empires", "Nagy birodalmak", "Mari imperii"),
      hint1: L("Reiche kommen und gehen.", "Rich people come and go.", "Gazdag emberek jönnek-mennek.", "Oamenii bogați vin și pleacă."),
      hint2: L("Von Ägypten bis zum Frankenreich.", "From Egypt to the Frankish Empire.", "Egyiptomtól a Frank Birodalomig.", "Din Egipt până în Imperiul Franc."),
      svg: { type: "icon-grid", items: [{ emoji: "🌍", label: "Welt" }, { emoji: "📉", label: "Fall" }] },
      interactive: { type: "word-order", words: [L("Aufstieg", "Ascension", "Felemelkedés", "Ascensiune"), L("und", "and", "és", "şi"), L("Fall", "case", "ügy", "caz")], instruction: L("Was beschreibt Geschichte?", "What describes history?", "Mi jellemzi a történelmet?", "Ce descrie istoria?"), correctOrder: [0, 1, 2] },
      quiz: { 
        question: L("Welches Reich hielt am längsten?", "Which empire lasted the longest?", "Melyik birodalom maradt fenn a legtovább?", "Care imperiu a durat cel mai mult?"), 
        choices: [L("Ägypten", "Egypt", "Egyiptom", "Egipt"), L("Alexanderreich", "Alexander Empire", "Sándor birodalom", "Imperiul Alexandru"), L("Westrom", "Western Rome", "Nyugat-Róma", "Vestul Romei"), L("Sparta", "Sparta", "Spárta", "Sparta")], 
        answer: L("Ägypten", "Egypt", "Egyiptom", "Egipt") 
      }
    },
    {
      id: "alltag_mix",
      title: L("Alltag", "Everyday", "Mindennapi", "În fiecare zi"),
      hint1: L("Wie lebten die Menschen?", "How did people live?", "Hogyan éltek az emberek?", "Cum trăiau oamenii?"),
      hint2: L("Bauern, Sklaven, Bürger.", "Peasants, slaves, citizens.", "Parasztok, rabszolgák, polgárok.", "Țărani, sclavi, cetățeni."),
      svg: { type: "text-bubbles", items: [{ text: "Feld", color: "#fff", bg: "#16a34a" }, { text: "Markt", color: "#fff", bg: "#facc15" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Agora", "Agora", "Agóra", "Agora"), right: L("Griechen", "Greeks", "görögök", "greci") }, { left: L("Forum", "forum", "fórum", "forum"), right: L("Römer", "Romans", "rómaiak", "romani") }] },
      quiz: { 
        question: L("Wo kauften Römer ein?", "Where did Romans shop?", "Hol vásároltak a rómaiak?", "Unde făceau romanii cumpărături?"), 
        choices: [L("Forum", "forum", "fórum", "forum"), L("Agora", "Agora", "Agóra", "Agora"), L("Oase", "oasis", "oázis", "oază"), L("Kloster", "monastery", "kolostor", "mănăstire")], 
        answer: L("Forum", "forum", "fórum", "forum") 
      }
    },
    {
      id: "demokratie_republik",
      title: L("Staatsformen", "Forms of government", "Kormányzati formák", "Forme de guvernare"),
      hint1: L("Wie wurde regiert?", "How was it governed?", "Hogyan kormányozták?", "Cum a fost guvernat?"),
      hint2: L("Demokratie und Republik.", "Democracy and republic.", "Demokrácia és köztársaság.", "Democrație și republică."),
      svg: { type: "icon-grid", items: [{ emoji: "🗳️", label: "Wahl" }, { emoji: "👑", label: "König" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Athen", "Athens", "Athén", "Atena"), right: L("Demokratie", "democracy", "demokrácia", "democraţie") }, { left: L("Rom", "Rome", "Róma", "Roma"), right: L("Republik", "republic", "köztársaság", "republică") }] },
      quiz: { 
        question: L("Wo durften Bürger das erste Mal wählen?", "Where were citizens allowed to vote for the first time?", "Hol szavazhattak először a polgárok?", "Unde au fost permis cetățenilor să voteze pentru prima dată?"), 
        choices: [L("Athen", "Athens", "Athén", "Atena"), L("Ägypten", "Egypt", "Egyiptom", "Egipt"), L("Sparta", "Sparta", "Spárta", "Sparta"), L("Germanen", "Teutons", "teutonok", "teutonii")], 
        answer: L("Athen", "Athens", "Athén", "Atena") 
      }
    },
    {
      id: "erfindungen_mix",
      title: L("Erfindungen", "Inventions", "Találmányok", "Invenții"),
      hint1: L("Was blieb von der Antike?", "What remained of antiquity?", "Mi maradt meg az ókorból?", "Ce a mai rămas din antichitate?"),
      hint2: L("Schrift, Recht, Baukunst.", "Writing, law, architecture.", "Írás, jog, építészet.", "Scriere, drept, arhitectură."),
      svg: { type: "text-bubbles", items: [{ text: "Beton", color: "#fff", bg: "#64748b" }, { text: "Uhr", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Aquädukt", "aqueduct", "vízvezeték", "apeduct"), right: L("Wasser", "Water", "Víz", "Apă") }, { left: L("Papyrus", "papyrus", "papirusz", "papirus"), right: L("Schreiben", "Write", "Írj", "Scrie") }] },
      quiz: { 
        question: L("Was erfanden die Römer für den Bau?", "What did the Romans invent for construction?", "Mit találtak ki a rómaiak az építkezéshez?", "Ce au inventat romanii pentru construcții?"), 
        choices: [L("Beton", "concrete", "konkrét", "beton"), L("Plastik", "plastic", "műanyag", "plastic"), L("Stahl", "Steel", "Acél", "Oţel"), L("Glas", "Glass", "Üveg", "Sticlă")], 
        answer: L("Beton", "concrete", "konkrét", "beton") 
      }
    },
    {
      id: "grenzen_mix",
      title: L("Grenzen", "Boundaries", "Határok", "Limite"),
      hint1: L("Mauern und Wälle.", "Walls and ramparts.", "Falak és sáncok.", "Ziduri și metereze."),
      hint2: L("Schutz vor Feinden.", "Protection from enemies.", "Védelem az ellenségekkel szemben.", "Protecție împotriva dușmanilor."),
      svg: { type: "icon-grid", items: [{ emoji: "🚧", label: "Wall" }, { emoji: "🏹", label: "Bogen" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Limes", "limes", "lime", "tei"), right: L("Römer", "Romans", "rómaiak", "romani") }, { left: L("Zaun", "Fence", "Kerítés", "Gard"), right: L("Germanen", "Teutons", "teutonok", "teutonii") }] },
      quiz: { 
        question: L("Wie hieß der römische Grenzwall?", "What was the name of the Roman border wall?", "Mi volt a római határfal neve?", "Cum se numea zidul roman de frontieră?"), 
        choices: [L("Limes", "limes", "lime", "tei"), L("Mauer", "Wall", "Fal", "Perete"), L("Graben", "Dig", "Dig", "Sapă"), L("Damm", "dam", "gát", "baraj")], 
        answer: L("Limes", "limes", "lime", "tei") 
      }
    },
    {
      id: "sport_kultur_mix",
      title: L("Kultur & Sport", "Culture & Sport", "Kultúra és Sport", "Cultură și sport"),
      hint1: L("Theater und Spiele.", "Theater and games.", "Színház és játékok.", "Teatru și jocuri."),
      hint2: L("Zeitvertreib der Alten.", "Pastime of the ancients.", "A régiek időtöltése.", "Distracția anticilor."),
      svg: { type: "text-bubbles", items: [{ text: "Drama", color: "#fff", bg: "#9333ea" }, { text: "Lauf", color: "#fff", bg: "#10b981" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Maske", "mask", "maszk", "masca"), right: L("Theater", "theater", "színház", "teatru") }, { left: L("Ringe", "Rings", "Gyűrűk", "Inele"), right: L("Olympia", "Olympia", "Olympia", "Olimpia") }] },
      quiz: { 
        question: L("Was war ein griechischer Wettkampf?", "What was a Greek competition?", "Mi volt a görög verseny?", "Ce a fost un concurs grecesc?"), 
        choices: [L("Olympische Spiele", "Olympic games", "Olimpiai játékok", "jocuri olimpice"), L("Gladiatorenkampf", "Gladiator fight", "Gladiátor harc", "Lupta cu gladiatori"), L("Ritterturnier", "Knight's tournament", "Lovagi torna", "Turneul cavalerilor"), L("Fußball", "football", "futball", "fotbal")], 
        answer: L("Olympische Spiele", "Olympic games", "Olimpiai játékok", "jocuri olimpice") 
      }
    },
    {
      id: "religion_mix",
      title: L("Religion", "religion", "vallás", "religie"),
      hint1: L("Viele Götter oder einer?", "Many gods or one?", "Sok isten vagy egy?", "Mulți zei sau unul?"),
      hint2: L("Wandel der Welt.", "Change in the world.", "Változás a világban.", "Schimbarea în lume."),
      svg: { type: "icon-grid", items: [{ emoji: "☀️", label: "Viel" }, { emoji: "✝️", label: "Ein" }] },
      interactive: { type: "gap-fill", text: L("Die Antike glaubte an __ Götter.", "The ancient world believed in __ gods.", "Az ókori világ __ istenekben hitt.", "Lumea antică credea în __ zei."), gaps: [{ index: 0, options: ["viele", "keine"], correct: 0 }] },
      quiz: { 
        question: L("Was passierte am Ende der Antike mit der Religion?", "What happened to religion at the end of antiquity?", "Mi történt a vallással az ókor végén?", "Ce s-a întâmplat cu religia la sfârșitul antichității?"), 
        choices: [L("Das Christentum siegte", "Christianity won", "A kereszténység győzött", "Creștinismul a câștigat"), L("Alle wurden Atheisten", "Everyone became atheists", "Mindenki ateista lett", "Toți au devenit atei"), L("Nichts", "Nothing", "Semmi", "Nimic"), L("Neue Götter kamen", "New gods came", "Új istenek jöttek", "Au venit zei noi")], 
        answer: L("Das Christentum siegte", "Christianity won", "A kereszténység győzött", "Creștinismul a câștigat") 
      }
    },
    {
      id: "fazit",
      title: L("Fazit", "Conclusion", "Következtetés", "Concluzie"),
      hint1: L("Geschichte ist spannend.", "History is exciting.", "A történelem izgalmas.", "Istoria este incitantă."),
      hint2: L("Lerne aus der Vergangenheit.", "Learn from the past.", "Tanulj a múltból.", "Învață din trecut."),
      svg: { type: "word-display", word: "WISSEN", color: "#06b6d4" },
      interactive: { type: "word-order", words: [L("Geschichte", "Story", "Történet", "Poveste"), L("lehrt", "teaches", "tanít", "preda"), L("uns", "us", "minket", "S.U.A"), L("viel", "much", "sokkal", "mult")], instruction: L("Abschluss!", "Diploma!", "Oklevél!", "Diplomă!"), correctOrder: [0, 1, 2, 3] },
      quiz: { 
        question: L("Was ist Geschichte?", "What is history?", "Mi a történelem?", "Ce este istoria?"), 
        choices: [L("Erinnerung an früher", "Memory of the past", "A múlt emléke", "Amintirea trecutului"), L("Die Zukunft", "The future", "A jövő", "Viitorul"), L("Ein Märchen", "A fairy tale", "Tündérmese", "Un basm"), L("Nur Zahlen", "Just numbers", "Csak számok", "Doar numere")], 
        answer: L("Erinnerung an früher", "Memory of the past", "A múlt emléke", "Amintirea trecutului") 
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
