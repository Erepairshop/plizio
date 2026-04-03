import type { PoolTopicDef, SvgConfig } from "./types";

type Lang = "de" | "en" | "hu" | "ro";
type LangText = Record<Lang, string>;

type BucketInteractive = {
  type: "physics-bucket";
  buckets: [{ id: string; label: LangText }, { id: string; label: LangText }];
  items: { text: LangText; bucketId: string }[];
};

type MagnetInteractive = {
  type: "physics-magnet";
  pairs: { left: LangText; right: LangText }[];
};

type StackerInteractive = {
  type: "physics-stacker";
  words: LangText[];
  correctOrder: number[];
};

type SlingshotInteractive = {
  type: "physics-slingshot";
  question: LangText;
  targets: { id: string; text: LangText; isCorrect: boolean }[];
};

type GapFillInteractive = {
  type: "gap-fill";
  sentence: LangText;
  choices: LangText[];
  correctIndex: number;
};

type TopicSpec = {
  title: LangText;
  text: LangText;
  inst: LangText;
  h1: LangText;
  h2: LangText;
  svg: SvgConfig;
  quiz: string;
  difficulty?: "easy" | "medium" | "hard";
  interactive: BucketInteractive | MagnetInteractive | StackerInteractive | SlingshotInteractive | GapFillInteractive;
};

function L(de: string, en: string, hu: string, ro: string): LangText {
  return { de, en, hu, ro };
}

function buildIslandLabels(explorerTitle: LangText, topics: TopicSpec[]): Record<Lang, Record<string, string>> {
  const out: Record<Lang, Record<string, string>> = {
    de: { explorer_title: explorerTitle.de },
    en: { explorer_title: explorerTitle.en },
    hu: { explorer_title: explorerTitle.hu },
    ro: { explorer_title: explorerTitle.ro },
  };

  topics.forEach((topic, index) => {
    const key = `t${index + 1}`;
    for (const lang of ["de", "en", "hu", "ro"] as const) {
      out[lang][`${key}_title`] = topic.title[lang];
      out[lang][`${key}_text`] = topic.text[lang];
      out[lang][`${key}_inst`] = topic.inst[lang];
      out[lang][`${key}_h1`] = topic.h1[lang];
      out[lang][`${key}_h2`] = topic.h2[lang];
    }

    const interactive = topic.interactive;
    if (interactive.type === "physics-bucket") {
      for (const lang of ["de", "en", "hu", "ro"] as const) {
        out[lang][`${key}_b1`] = interactive.buckets[0].label[lang];
        out[lang][`${key}_b2`] = interactive.buckets[1].label[lang];
        interactive.items.forEach((item, itemIndex) => {
          out[lang][`${key}_i${itemIndex + 1}`] = item.text[lang];
        });
      }
    } else if (interactive.type === "physics-magnet") {
      for (const lang of ["de", "en", "hu", "ro"] as const) {
        interactive.pairs.forEach((pair, pairIndex) => {
          out[lang][`${key}_l${pairIndex + 1}`] = pair.left[lang];
          out[lang][`${key}_r${pairIndex + 1}`] = pair.right[lang];
        });
      }
    } else if (interactive.type === "physics-stacker") {
      for (const lang of ["de", "en", "hu", "ro"] as const) {
        interactive.words.forEach((word, wordIndex) => {
          out[lang][`${key}_w${wordIndex + 1}`] = word[lang];
        });
      }
    } else if (interactive.type === "physics-slingshot") {
      for (const lang of ["de", "en", "hu", "ro"] as const) {
        out[lang][`${key}_q`] = interactive.question[lang];
        interactive.targets.forEach((target, targetIndex) => {
          out[lang][`${key}_t${targetIndex + 1}`] = target.text[lang];
        });
      }
    } else if (interactive.type === "gap-fill") {
      for (const lang of ["de", "en", "hu", "ro"] as const) {
        out[lang][`${key}_sent`] = interactive.sentence[lang];
        interactive.choices.forEach((choice, choiceIndex) => {
          out[lang][`${key}_c${choiceIndex + 1}`] = choice[lang];
        });
      }
    }
  });

  return out;
}

function buildIslandPool(topics: TopicSpec[]): PoolTopicDef[] {
  return topics.map((topic, index) => {
    const key = `t${index + 1}`;

    let interactive: PoolTopicDef["interactive"];
    if (topic.interactive.type === "physics-bucket") {
      interactive = {
        type: "physics-bucket",
        buckets: [
          { id: topic.interactive.buckets[0].id, label: `${key}_b1` },
          { id: topic.interactive.buckets[1].id, label: `${key}_b2` },
        ],
        items: topic.interactive.items.map((item, itemIndex) => ({
          text: `${key}_i${itemIndex + 1}`,
          bucketId: item.bucketId,
        })),
        instruction: `${key}_inst`,
        hint1: `${key}_h1`,
        hint2: `${key}_h2`,
      };
    } else if (topic.interactive.type === "physics-magnet") {
      interactive = {
        type: "physics-magnet",
        pairs: topic.interactive.pairs.map((pair, pairIndex) => ({
          left: `${key}_l${pairIndex + 1}`,
          right: `${key}_r${pairIndex + 1}`,
        })),
        instruction: `${key}_inst`,
        hint1: `${key}_h1`,
        hint2: `${key}_h2`,
      };
    } else if (topic.interactive.type === "physics-stacker") {
      interactive = {
        type: "physics-stacker",
        words: topic.interactive.words.map((_, wordIndex) => `${key}_w${wordIndex + 1}`),
        correctOrder: topic.interactive.correctOrder,
        instruction: `${key}_inst`,
        hint1: `${key}_h1`,
        hint2: `${key}_h2`,
      };
    } else if (topic.interactive.type === "physics-slingshot") {
      interactive = {
        type: "physics-slingshot",
        question: `${key}_q`,
        targets: topic.interactive.targets.map((target, targetIndex) => ({
          id: target.id,
          text: `${key}_t${targetIndex + 1}`,
          isCorrect: target.isCorrect,
        })),
        instruction: `${key}_inst`,
        hint1: `${key}_h1`,
        hint2: `${key}_h2`,
      };
    } else {
      interactive = {
        type: "gap-fill",
        sentence: `${key}_sent`,
        choices: topic.interactive.choices.map((_, choiceIndex) => `${key}_c${choiceIndex + 1}`),
        correctIndex: topic.interactive.correctIndex,
        instruction: `${key}_inst`,
        hint1: `${key}_h1`,
        hint2: `${key}_h2`,
      };
    }

    return {
      difficulty: topic.difficulty,
      infoTitle: `${key}_title`,
      infoText: `${key}_text`,
      svg: topic.svg,
      interactive,
      quiz: { generate: topic.quiz },
    };
  });
}

function buildIsland(explorerTitle: LangText, topics: TopicSpec[]) {
  return {
    labels: buildIslandLabels(explorerTitle, topics),
    pool: buildIslandPool(topics),
  };
}

const KEMIA_K8_I1_TOPICS: TopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Kohlenstoff ist besonders", "Why Carbon Matters", "A szén különleges", "De ce conteaza carbonul"),
    text: L(
      "Kohlenstoff kann lange Ketten und viele Verbindungen bilden.",
      "Carbon can build long chains and many compounds.",
      "A szén hosszú láncokat és sok vegyületet alkot.",
      "Carbonul poate forma lanturi lungi si multe combinatii."
    ),
    inst: L("Sortiere die Beispiele.", "Sort the examples.", "Rendezd a példákat.", "Sorteaza exemplele."),
    h1: L("Kohlenstoff baut Ketten.", "Carbon builds chains.", "A szén láncokat épít.", "Carbonul face lanturi."),
    h2: L("Wasser gehört nicht dazu.", "Water does not belong here.", "A víz nem tartozik ide.", "Apa nu apartine aici."),
    svg: { type: "kemia-diagram", name: "OrganicSvg" },
    quiz: "carbon_special",
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "c", label: L("C-Stoffe", "Carbon based", "Szenes anyagok", "Pe baza de carbon") },
        { id: "n", label: L("Ohne C", "No carbon", "Nem szenes", "Fara carbon") },
      ],
      items: [
        { text: L("Kohlenstoff", "carbon", "szén", "carbon"), bucketId: "c" },
        { text: L("Kohlenwasserstoff", "hydrocarbon", "szénhidrogén", "hidrocarbura"), bucketId: "c" },
        { text: L("Wasser", "water", "víz", "apa"), bucketId: "n" },
        { text: L("Salz", "salt", "só", "sare"), bucketId: "n" },
      ],
    },
  },
  {
    difficulty: "easy",
    title: L("Kohlenwasserstoffe", "Hydrocarbons", "Szénhidrogének", "Hidrocarburi"),
    text: L(
      "Kohlenwasserstoffe bestehen nur aus Kohlenstoff und Wasserstoff.",
      "Hydrocarbons contain only carbon and hydrogen.",
      "A szénhidrogének csak szénből és hidrogénből állnak.",
      "Hidrocarburile contin doar carbon si hidrogen."
    ),
    inst: L("Verbinde Begriff und Bedeutung.", "Match term and meaning.", "Párosítsd a szót és jelentését.", "Potriveste termenul cu sensul."),
    h1: L("Nur C und H.", "Only C and H.", "Csak C és H.", "Doar C si H."),
    h2: L("Alkane und Alkene gehören dazu.", "Alkanes and alkenes belong here.", "Az alkánok és alkének ide tartoznak.", "Alcanii si alcenele apartin aici."),
    svg: { type: "kemia-diagram", name: "OrganicSvg" },
    quiz: "hydrocarbons_intro",
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: L("Kohlenwasserstoff", "hydrocarbon", "szénhidrogén", "hidrocarbura"), right: L("C und H", "C and H", "C és H", "C si H") },
        { left: L("Alkan", "alkane", "alkán", "alkan"), right: L("nur Einfachbindungen", "only single bonds", "csak egyszeres kötések", "doar legaturi simple") },
        { left: L("Alken", "alkene", "alkén", "alchena"), right: L("mindestens eine Doppelbindung", "at least one double bond", "legalább egy kettős kötés", "cel putin o dubla legatura") },
        { left: L("Brennstoff", "fuel", "tüzelőanyag", "combustibil"), right: L("liefert Energie", "gives energy", "energiát ad", "da energie") },
      ],
    },
  },
  {
    difficulty: "medium",
    title: L("Alkane", "Alkanes", "Alkánok", "Alcani"),
    text: L(
      "Alkane sind gesättigte Kohlenwasserstoffe mit Einfachbindungen.",
      "Alkanes are saturated hydrocarbons with single bonds.",
      "Az alkánok telített szénhidrogének egyszeres kötésekkel.",
      "Alcanii sunt hidrocarburi saturate cu legaturi simple."
    ),
    inst: L("Ordne die Beispiele nach der Kettenlaenge.", "Order the examples by chain length.", "Rendezd a példákat lánchossz szerint.", "Ordoneaza exemplele dupa lungimea lantului."),
    h1: L("Vom kleinen zum größeren Molekül.", "From smaller to larger molecules.", "A kisebbtől a nagyobb molekula felé.", "De la molecule mai mici la mai mari."),
    h2: L("Mehr C-Atome bedeuten eine längere Kette.", "More C atoms mean a longer chain.", "Több szénatom hosszabb láncot jelent.", "Mai multi atomi de carbon inseamna un lant mai lung."),
    svg: { type: "kemia-diagram", name: "OrganicSvg" },
    quiz: "alkanes_intro",
    interactive: {
      type: "physics-stacker",
      words: [L("Methan", "methane", "metán", "metan"), L("Ethan", "ethane", "etán", "etan"), L("Propan", "propane", "propán", "propan")],
      correctOrder: [0, 1, 2],
    },
  },
  {
    difficulty: "medium",
    title: L("Alkene", "Alkenes", "Alkének", "Alcene"),
    text: L(
      "Alkene sind ungesättigte Kohlenwasserstoffe mit Doppelbindung.",
      "Alkenes are unsaturated hydrocarbons with a double bond.",
      "Az alkének telítetlen szénhidrogének kettős kötéssel.",
      "Alcenele sunt hidrocarburi nesaturate cu dubla legatura."
    ),
    inst: L("Triff alle Alkene.", "Hit all alkenes.", "Találd el az összes alként.", "Loveste toate alchenele."),
    h1: L("Alkene haben eine Doppelbindung.", "Alkenes have a double bond.", "Az alkéneknek kettős kötésük van.", "Alcenele au o dubla legatura."),
    h2: L("Methan und Ethan sind keine Alkene.", "Methane and ethane are not alkenes.", "A metán és az etán nem alkének.", "Metanul si etanul nu sunt alcene."),
    svg: { type: "kemia-diagram", name: "OrganicSvg" },
    quiz: "alkenes_intro",
    interactive: {
      type: "physics-slingshot",
      question: L("Welche Stoffe sind Alkene?", "Which substances are alkenes?", "Mely anyagok alkének?", "Care substante sunt alcene?"),
      targets: [
        { id: "1", text: L("Ethen", "ethene", "etén", "etena"), isCorrect: true },
        { id: "2", text: L("Propen", "propene", "propén", "propena"), isCorrect: true },
        { id: "3", text: L("Methan", "methane", "metán", "metan"), isCorrect: false },
        { id: "4", text: L("Ethan", "ethane", "etán", "etan"), isCorrect: false },
      ],
    },
  },
  {
    difficulty: "hard",
    title: L("Organische Brennstoffe", "Organic Fuels", "Szerves tüzelőanyagok", "Combustibili organici"),
    text: L(
      "Viele Brennstoffe in unserem Alltag sind organische Stoffe.",
      "Many fuels in daily life are organic substances.",
      "A mindennapi tüzelőanyagok között sok a szerves anyag.",
      "Multe combustibili din viata de zi cu zi sunt substante organice."
    ),
    inst: L("Wähle die passende Ergänzung.", "Choose the correct ending.", "Válaszd ki a helyes kiegészítést.", "Alege completarea corecta."),
    h1: L("Brennstoffe geben Energie frei.", "Fuels release energy.", "A tüzelőanyagok energiát adnak le.", "Combustibilii elibereaza energie."),
    h2: L("Beim Verbrennen entsteht meist Energie und Wärme.", "Burning usually gives energy and heat.", "Égetéskor energia és hő keletkezik.", "Prin ardere apar energie si caldura."),
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "fuels_organic",
    interactive: {
      type: "gap-fill",
      sentence: L(
        "Organische Brennstoffe liefern beim Verbrennen ___.",
        "Organic fuels release ___ when they burn.",
        "A szerves tüzelőanyagok égetésekor ___ adnak le.",
        "Combustibilii organici elibereaza ___ cand ard."
      ),
      choices: [
        L("Energie", "energy", "energiát", "energie"),
        L("Salz", "salt", "sót", "sare"),
        L("Wasser", "water", "vizet", "apa"),
        L("Luft", "air", "levegőt", "aer"),
      ],
      correctIndex: 0,
    },
  },
];

const KEMIA_K8_I2_TOPICS: TopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Alkohole", "Alcohols", "Alkoholok", "Alcooli"),
    text: L(
      "Alkohole sind eine wichtige organische Stoffklasse mit OH-Gruppe.",
      "Alcohols are an important organic group with an OH group.",
      "Az alkoholok fontos szerves vegyületcsoportok OH-csoporttal.",
      "Alcoolii sunt o clasa organica importanta cu grup OH."
    ),
    inst: L("Sortiere die Beispiele.", "Sort the examples.", "Rendezd a példákat.", "Sorteaza exemplele."),
    h1: L("Ethanol gehört dazu.", "Ethanol belongs here.", "Az etanol ide tartozik.", "Etanolul apartine aici."),
    h2: L("Nicht alles mit Geschmack ist Alkohol.", "Not everything with taste is an alcohol.", "Nem minden folyadék alkohol.", "Nu tot ce are gust este alcool."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "alcohols_intro",
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "a", label: L("Alkohol", "Alcohol", "Alkohol", "Alcool") },
        { id: "n", label: L("Kein Alkohol", "Not alcohol", "Nem alkohol", "Nu este alcool") },
      ],
      items: [
        { text: L("Ethanol", "ethanol", "etanol", "etanol"), bucketId: "a" },
        { text: L("Methanol", "methanol", "metanol", "metanol"), bucketId: "a" },
        { text: L("Wasser", "water", "víz", "apa"), bucketId: "n" },
        { text: L("Essig", "vinegar", "ecet", "otet"), bucketId: "n" },
      ],
    },
  },
  {
    difficulty: "easy",
    title: L("Carbonsäuren", "Carboxylic Acids", "Karbonsavak", "Acizi carboxilici"),
    text: L(
      "Carbonsäuren haben die saure COOH-Gruppe und kommen im Alltag oft vor.",
      "Carboxylic acids have the acidic COOH group and appear often in daily life.",
      "A karbonsavak savas COOH-csoportot tartalmaznak és sokszor előfordulnak.",
      "Acizii carboxilici au grupul acid COOH si apar des in viata de zi cu zi."
    ),
    inst: L("Paare Begriff und Beispiel.", "Match term and example.", "Párosítsd a fogalmat és a példát.", "Potriveste termenul cu exemplul."),
    h1: L("Essigsäure ist eine Carbonsäure.", "Acetic acid is a carboxylic acid.", "Az ecetsav karbonsav.", "Acidul acetic este un acid carboxilic."),
    h2: L("COOH ist die typische Gruppe.", "COOH is the typical group.", "A COOH a jellegzetes csoport.", "COOH este grupul tipic."),
    svg: { type: "kemia-diagram", name: "PhScaleSvg" },
    quiz: "carboxylic_acids",
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: L("Carbonsäure", "carboxylic acid", "karbonsav", "acid carboxilic"), right: L("enthält COOH", "contains COOH", "COOH-csoportot tartalmaz", "contine COOH") },
        { left: L("Essigsäure", "acetic acid", "ecetsav", "acid acetic"), right: L("Alltagsbeispiel", "everyday example", "hétköznapi példa", "exemplu de zi cu zi") },
        { left: L("COOH", "COOH", "COOH", "COOH"), right: L("saure Gruppe", "acid group", "savas csoport", "grup acid") },
        { left: L("sauer", "sour", "savanyú", "acru"), right: L("typischer Geschmack", "typical taste", "jellemző íz", "gust tipic") },
      ],
    },
  },
  {
    difficulty: "medium",
    title: L("Ester", "Esters", "Észterek", "Esteri"),
    text: L(
      "Ester entstehen aus Säure und Alkohol und riechen oft fruchtig.",
      "Esters are made from acid and alcohol and often smell fruity.",
      "Az észterek savból és alkoholból keletkeznek, és gyakran gyümölcsös illatúak.",
      "Esterii se formeaza din acid si alcool si au adesea miros fructat."
    ),
    inst: L("Ordne die Reaktionsschritte.", "Order the reaction steps.", "Rendezd a reakció lépéseit.", "Ordoneaza pasii reactiei."),
    h1: L("Säure und Alkohol reagieren.", "Acid and alcohol react.", "A sav és az alkohol reagál.", "Acidul si alcoolul reactioneaza."),
    h2: L("Am Ende entsteht Ester plus Wasser.", "At the end, ester and water appear.", "A végén észter és víz keletkezik.", "La final apar ester si apa."),
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "esters_intro",
    interactive: {
      type: "physics-stacker",
      words: [L("Säure", "acid", "sav", "acid"), L("+ Alkohol", "+ alcohol", "+ alkohol", "+ alcool"), L("-> Ester", "-> ester", "-> észter", "-> ester"), L("+ Wasser", "+ water", "+ víz", "+ apa")],
      correctOrder: [0, 1, 2, 3],
    },
  },
  {
    difficulty: "medium",
    title: L("Polymere", "Polymers", "Polimerek", "Polimeri"),
    text: L(
      "Polymere bestehen aus vielen gleichen Bausteinen.",
      "Polymers consist of many repeating building blocks.",
      "A polimerek sok azonos építőegységből állnak.",
      "Polimerii sunt alcatuiti din multe unitati repetate."
    ),
    inst: L("Triff alle Polymere.", "Hit all polymers.", "Találd el az összes polimert.", "Loveste toti polimerii."),
    h1: L("Viele gleiche Bausteine.", "Many repeated units.", "Sok azonos elem.", "Multe unitati repetate."),
    h2: L("Kunststoff ist oft ein Polymer.", "Plastic is often a polymer.", "A műanyag gyakran polimer.", "Plasticul este adesea un polimer."),
    svg: { type: "kemia-diagram", name: "OrganicSvg" },
    quiz: "polymers_intro",
    interactive: {
      type: "physics-slingshot",
      question: L("Welche Stoffe sind Polymere?", "Which substances are polymers?", "Mely anyagok polimerek?", "Care substante sunt polimeri?"),
      targets: [
        { id: "1", text: L("Polyethylen", "polyethylene", "polietilén", "polietilena"), isCorrect: true },
        { id: "2", text: L("PET", "PET", "PET", "PET"), isCorrect: true },
        { id: "3", text: L("Salz", "salt", "só", "sare"), isCorrect: false },
        { id: "4", text: L("Wasser", "water", "víz", "apa"), isCorrect: false },
      ],
    },
  },
  {
    difficulty: "hard",
    title: L("Kunststoffe im Alltag", "Plastics in Daily Life", "Műanyagok a mindennapokban", "Plastice in viata de zi cu zi"),
    text: L(
      "Kunststoffe sind praktisch, aber Recycling ist wichtig.",
      "Plastics are useful, but recycling matters.",
      "A műanyag hasznos, de az újrahasznosítás fontos.",
      "Materialele plastice sunt utile, dar reciclarea conteaza."
    ),
    inst: L("Wähle die passende Ergänzung.", "Choose the correct ending.", "Válaszd ki a helyes kiegészítést.", "Alege completarea corecta."),
    h1: L("Weniger Abfall ist besser.", "Less waste is better.", "A kevesebb hulladék jobb.", "Mai putine deseuri este mai bine."),
    h2: L("Recycling schont Rohstoffe.", "Recycling saves raw materials.", "Az újrahasznosítás nyersanyagot spórol.", "Reciclarea economiseste materii prime."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "plastics_daily",
    interactive: {
      type: "gap-fill",
      sentence: L(
        "Kunststoffe sollen möglichst ___ werden.",
        "Plastics should if possible be ___.",
        "A műanyagokat lehetőség szerint ___ kell.",
        "Plasticele ar trebui, pe cat posibil, sa fie ___."
      ),
      choices: [
        L("recycelt", "recycled", "újrahasznosítva", "reciclate"),
        L("verbrannt", "burned", "elégetve", "arse"),
        L("weggeworfen", "thrown away", "eldobva", "aruncate"),
        L("zerdrückt", "crushed", "összenyomva", "strivite"),
      ],
      correctIndex: 0,
    },
  },
];

const KEMIA_K8_I3_TOPICS: TopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Reaktionsgeschwindigkeit", "Reaction Rate", "Reakciósebesség", "Viteza reactiei"),
    text: L(
      "Eine Reaktion läuft mal schnell und mal langsam ab.",
      "A reaction can be fast or slow.",
      "Egy reakció lehet gyors vagy lassú.",
      "O reactie poate fi rapida sau lenta."
    ),
    inst: L("Sortiere die Faktoren.", "Sort the factors.", "Rendezd a hatásokat.", "Sorteaza factorii."),
    h1: L("Mehr Teilchenkontakt beschleunigt.", "More particle contact speeds things up.", "Több részecske-összeütközés gyorsít.", "Mai multe ciocniri accelereaza."),
    h2: L("Kalt macht oft langsamer.", "Cold often slows things down.", "A hideg gyakran lassít.", "Recele incetineste adesea."),
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "reaction_rate_intro",
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "s", label: L("macht schneller", "makes faster", "gyorsít", "accelereaza") },
        { id: "l", label: L("macht langsamer", "makes slower", "lassít", "incetineste") },
      ],
      items: [
        { text: L("warm", "warm", "meleg", "cald"), bucketId: "s" },
        { text: L("Katalysator", "catalyst", "katalizátor", "catalizator"), bucketId: "s" },
        { text: L("Pulver", "powder", "por", "pulbere"), bucketId: "s" },
        { text: L("kalt", "cold", "hideg", "rece"), bucketId: "l" },
      ],
    },
  },
  {
    difficulty: "easy",
    title: L("Oberfläche", "Surface Area", "Felület", "Suprafata"),
    text: L(
      "Mehr Oberfläche bedeutet oft eine schnellere Reaktion.",
      "More surface area often means a faster reaction.",
      "A nagyobb felület gyakran gyorsabb reakciót jelent.",
      "Mai multa suprafata inseamna adesea o reactie mai rapida."
    ),
    inst: L("Paare Faktor und Wirkung.", "Match factor and effect.", "Párosítsd a tényezőt és a hatást.", "Potriveste factorul si efectul."),
    h1: L("Pulver reagiert schneller als Brocken.", "Powder reacts faster than lumps.", "A por gyorsabban reagál, mint a darab.", "Pulberea reactioneaza mai repede decat bucata."),
    h2: L("Mehr Kontaktstellen helfen.", "More contact points help.", "Több érintkezési pont segít.", "Mai multe puncte de contact ajuta."),
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "surface_area_effect",
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: L("Pulver", "powder", "por", "pulbere"), right: L("große Oberfläche", "large surface area", "nagy felület", "suprafata mare") },
        { left: L("Brocken", "lump", "darab", "bucata"), right: L("kleinere Oberfläche", "smaller surface area", "kisebb felület", "suprafata mai mica") },
        { left: L("zerkleinert", "crushed", "összetörve", "maruntit"), right: L("mehr Reaktion", "more reaction", "több reakció", "reactie mai rapida") },
        { left: L("ganze Stücke", "whole pieces", "egész darabok", "bucati intregi"), right: L("langsamer", "slower", "lassabb", "mai lent") },
      ],
    },
  },
  {
    difficulty: "medium",
    title: L("Temperatur", "Temperature", "Hőmérséklet", "Temperatura"),
    text: L(
      "Wärmer bedeutet meist mehr Teilchenbewegung und mehr Zusammenstöße.",
      "Warmer conditions usually mean more particle movement and more collisions.",
      "A melegebb környezet több részecskemozgást és több ütközést jelent.",
      "Temperatura mai mare inseamna de obicei mai multa miscare si mai multe ciocniri."
    ),
    inst: L("Ordne die Reaktionsidee.", "Order the reaction idea.", "Rendezd a reakció gondolatmenetét.", "Ordoneaza ideea reactiei."),
    h1: L("Erst wärmer, dann schneller.", "First warmer, then faster.", "Előbb melegebb, aztán gyorsabb.", "Mai intai mai cald, apoi mai rapid."),
    h2: L("Teilchen bewegen sich schneller.", "Particles move faster.", "A részecskék gyorsabban mozognak.", "Particulele se misca mai repede."),
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "temperature_rate",
    interactive: {
      type: "physics-stacker",
      words: [L("wärmer", "warmer", "melegebb", "mai cald"), L("mehr Kollisionen", "more collisions", "több ütközés", "mai multe ciocniri"), L("schnellere Reaktion", "faster reaction", "gyorsabb reakció", "reactie mai rapida")],
      correctOrder: [0, 1, 2],
    },
  },
  {
    difficulty: "medium",
    title: L("Konzentration", "Concentration", "Koncentráció", "Concentratie"),
    text: L(
      "Mehr Teilchen in gleichem Raum kann Reaktionen beschleunigen.",
      "More particles in the same space can speed up reactions.",
      "Több részecske ugyanakkora térben gyorsítja a reakciót.",
      "Mai multe particule in acelasi spatiu pot accelera reactiile."
    ),
    inst: L("Triff alle guten Beschleuniger.", "Hit all good speed-up factors.", "Találd el az összes gyorsító tényezőt.", "Loveste toti factorii de accelerare."),
    h1: L("Konzentration gehört dazu.", "Concentration belongs here.", "A koncentráció ide tartozik.", "Concentratia apartine aici."),
    h2: L("Zu wenig Teilchen bremst.", "Too few particles slow things down.", "Túl kevés részecske lassít.", "Prea putine particule incetinesc."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "concentration_rate",
    interactive: {
      type: "physics-slingshot",
      question: L("Welche Faktoren machen eine Reaktion schneller?", "Which factors make a reaction faster?", "Mely tényezők gyorsítják a reakciót?", "Ce factori fac reactia mai rapida?"),
      targets: [
        { id: "1", text: L("hohe Konzentration", "high concentration", "nagy koncentráció", "concentratie mare"), isCorrect: true },
        { id: "2", text: L("große Oberfläche", "large surface area", "nagy felület", "suprafata mare"), isCorrect: true },
        { id: "3", text: L("niedrige Temperatur", "low temperature", "alacsony hőmérséklet", "temperatura scazuta"), isCorrect: false },
        { id: "4", text: L("wenig Teilchen", "few particles", "kevés részecske", "putine particule"), isCorrect: false },
      ],
    },
  },
  {
    difficulty: "hard",
    title: L("Katalysatoren", "Catalysts", "Katalizátorok", "Catalizatori"),
    text: L(
      "Ein Katalysator macht eine Reaktion schneller, ohne verbraucht zu werden.",
      "A catalyst speeds up a reaction without being used up.",
      "A katalizátor gyorsítja a reakciót anélkül, hogy elhasználódna.",
      "Un catalizator accelereaza reactia fara sa fie consumat."
    ),
    inst: L("Wähle die passende Ergänzung.", "Choose the correct ending.", "Válaszd ki a helyes kiegészítést.", "Alege completarea corecta."),
    h1: L("Aktivierungsenergie sinkt.", "Activation energy drops.", "Az aktivációs energia csökken.", "Energia de activare scade."),
    h2: L("Der Katalysator bleibt erhalten.", "The catalyst remains unchanged.", "A katalizátor megmarad.", "Catalizatorul ramane neschimbat."),
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "catalysts_intro",
    interactive: {
      type: "gap-fill",
      sentence: L(
        "Ein Katalysator senkt die ___.",
        "A catalyst lowers the ___.",
        "A katalizátor csökkenti az ___.",
        "Un catalizator scade ___."
      ),
      choices: [
        L("Aktivierungsenergie", "activation energy", "aktivációs energia", "energia de activare"),
        L("Masse", "mass", "tömeg", "masa"),
        L("Farbe", "color", "szín", "culoare"),
        L("Dichte", "density", "sűrűség", "densitate"),
      ],
      correctIndex: 0,
    },
  },
];

const KEMIA_K8_I4_TOPICS: TopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Ionen in Lösung", "Ions in Solution", "Ionok oldatban", "Ioni in solutie"),
    text: L(
      "Ionen tragen Ladung und machen Lösungen leitfähig.",
      "Ions carry charge and make solutions conductive.",
      "Az ionok töltéssel rendelkeznek és vezetővé teszik az oldatot.",
      "Ionii poarta sarcina si fac solutiile conductoare."
    ),
    inst: L("Sortiere die Ionen.", "Sort the ions.", "Rendezd az ionokat.", "Sorteaza ionii."),
    h1: L("Positive und negative Ionen.", "Positive and negative ions.", "Pozitív és negatív ionok.", "Ioni pozitivi si negativi."),
    h2: L("Salzlösung enthält viele Ionen.", "Salt solution contains many ions.", "A sós oldat sok iont tartalmaz.", "Solutia salina contine multi ioni."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "ions_in_solution",
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "p", label: L("positiv", "positive", "pozitív", "pozitiv") },
        { id: "n", label: L("negativ", "negative", "negatív", "negativ") },
      ],
      items: [
        { text: L("Natrium-Ion", "sodium ion", "nátrium-ion", "ion de sodiu"), bucketId: "p" },
        { text: L("Calcium-Ion", "calcium ion", "kalcium-ion", "ion de calciu"), bucketId: "p" },
        { text: L("Chlorid-Ion", "chloride ion", "kloridion", "ion de clorura"), bucketId: "n" },
        { text: L("Sulfat-Ion", "sulfate ion", "szulfátion", "ion sulfat"), bucketId: "n" },
      ],
    },
  },
  {
    difficulty: "easy",
    title: L("Elektrolyse", "Electrolysis", "Elektrolízis", "Electroliza"),
    text: L(
      "Bei der Elektrolyse zerlegt Strom Stoffe in neue Bestandteile.",
      "In electrolysis, electricity breaks compounds into new parts.",
      "Az elektrolízis során az áram bontja az anyagokat.",
      "La electroliza, curentul descompune substantele."
    ),
    inst: L("Paare Begriff und Wirkung.", "Match term and effect.", "Párosítsd a fogalmat és a hatást.", "Potriveste termenul cu efectul."),
    h1: L("Strom hilft beim Zerlegen.", "Electricity helps break things apart.", "Az áram segít a bontásban.", "Curentul ajuta la descompunere."),
    h2: L("Anode und Kathode gehören dazu.", "Anode and cathode belong here.", "Az anód és katód ide tartozik.", "Anodul si catodul apartin aici."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "electrolysis_intro",
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: L("Anode", "anode", "anód", "anod"), right: L("Oxidation", "oxidation", "oxidáció", "oxidare") },
        { left: L("Kathode", "cathode", "katód", "catod"), right: L("Reduktion", "reduction", "redukció", "reducere") },
        { left: L("Elektrolyt", "electrolyte", "elektrolit", "electrolit"), right: L("leitet Ionen", "conducts ions", "ionokat vezet", "conduce ionii") },
        { left: L("Strom", "current", "áram", "curent"), right: L("treibt den Prozess", "drives the process", "meghajtja a folyamatot", "impinge procesul") },
      ],
    },
  },
  {
    difficulty: "medium",
    title: L("Elektroden", "Electrodes", "Elektródák", "Electrozi"),
    text: L(
      "An der Elektrode laufen wichtige Stoffumwandlungen ab.",
      "Important material changes happen at the electrodes.",
      "Az elektródáknál fontos anyagváltozások mennek végbe.",
      "La electrozi au loc schimbari importante ale substantei."
    ),
    inst: L("Ordne den Ablauf.", "Order the process.", "Rendezd a folyamatot.", "Ordoneaza procesul."),
    h1: L("Erst Strom, dann Bewegung der Ionen.", "First current, then ion movement.", "Előbb áram, aztán ionmozgás.", "Mai intai curent, apoi miscare de ioni."),
    h2: L("Danach entstehen neue Stoffe.", "Then new substances appear.", "Ezután új anyagok keletkeznek.", "Apoi apar substante noi."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "electrodes_intro",
    interactive: {
      type: "physics-stacker",
      words: [L("Strom an", "switch on current", "áram be", "porneste curentul"), L("Ionen wandern", "ions move", "ionok mozognak", "ionii se misca"), L("Stoffe entstehen", "substances form", "anyagok keletkeznek", "se formeaza substante")],
      correctOrder: [0, 1, 2],
    },
  },
  {
    difficulty: "medium",
    title: L("Batterien und Zellen", "Batteries and Cells", "Elemek és cellák", "Baterii si celule"),
    text: L(
      "Eine Batterie liefert elektrische Energie für viele Alltagsgeräte.",
      "A battery provides electrical energy for many everyday devices.",
      "Az elem sok mindennapi eszközt lát el elektromos energiával.",
      "O baterie ofera energie electrica pentru multe aparate.",
    ),
    inst: L("Triff alle Dinge mit Batterie.", "Hit all battery-powered things.", "Találd el az összes elemes eszközt.", "Loveste toate lucrurile care merg pe baterie."),
    h1: L("Batterien treiben kleine Geräte an.", "Batteries power small devices.", "Az elemek kis eszközöket működtetnek.", "Bateriile alimenteaza dispozitive mici."),
    h2: L("Nicht jedes Objekt braucht Strom.", "Not every object needs electricity.", "Nem minden tárgyhoz kell áram.", "Nu orice obiect are nevoie de curent."),
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "batteries_intro",
    interactive: {
      type: "physics-slingshot",
      question: L("Welche Dinge laufen oft mit Batterien?", "Which things often run on batteries?", "Mely dolgok mennek gyakran elemmel?", "Ce lucruri functioneaza adesea pe baterii?"),
      targets: [
        { id: "1", text: L("Taschenlampe", "flashlight", "zseblámpa", "lanterna"), isCorrect: true },
        { id: "2", text: L("Handy", "phone", "telefon", "telefon"), isCorrect: true },
        { id: "3", text: L("Fernbedienung", "remote control", "távirányító", "telecomanda"), isCorrect: true },
        { id: "4", text: L("Löffel", "spoon", "kanál", "lingura"), isCorrect: false },
      ],
    },
  },
  {
    difficulty: "hard",
    title: L("Redox", "Redox", "Redox", "Redox"),
    text: L(
      "Redox-Reaktionen sind Elektronenübertragungen.",
      "Redox reactions are electron transfers.",
      "A redox reakciók elektronátadások.",
      "Reactiile redox sunt transferuri de electroni."
    ),
    inst: L("Wähle die richtige Ergänzung.", "Choose the correct ending.", "Válaszd ki a helyes kiegészítést.", "Alege completarea corecta."),
    h1: L("Oxidation und Reduktion gehören zusammen.", "Oxidation and reduction belong together.", "Az oxidáció és a redukció összetartozik.", "Oxidarea si reducerea merg impreuna."),
    h2: L("Elektronen wechseln den Besitzer.", "Electrons change hands.", "Az elektronok gazdát cserélnek.", "Electronii isi schimba proprietarul."),
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "redox_intro",
    interactive: {
      type: "gap-fill",
      sentence: L(
        "Redox bedeutet ___ übertragung.",
        "Redox means ___ transfer.",
        "A redox ___ átadást jelenti.",
        "Redox inseamna transfer de ___."
      ),
      choices: [
        L("Elektronen", "electrons", "elektronok", "electroni"),
        L("Wasser", "water", "víz", "apa"),
        L("Salz", "salt", "só", "sare"),
        L("Licht", "light", "fény", "lumina"),
      ],
      correctIndex: 0,
    },
  },
];

const KEMIA_K8_I5_TOPICS: TopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Formelmasse", "Formula Mass", "Képlettömeg", "Masă formula"),
    text: L(
      "Die Formelmasse ist die Summe der Atommassen in einer Formel.",
      "Formula mass is the sum of atomic masses in a formula.",
      "A képlettömeg egy képlet atomtömegeinek összege.",
      "Masa formulei este suma maselor atomice dintr-o formula."
    ),
    inst: L("Ordne die Rechenschritte.", "Order the calculation steps.", "Rendezd a számítás lépéseit.", "Ordoneaza pasii de calcul."),
    h1: L("Erst zählen, dann addieren.", "Count first, then add.", "Előbb számolj, aztán adj össze.", "Mai intai numara, apoi aduna."),
    h2: L("Die Formel hilft dir beim Rechnen.", "The formula helps you calculate.", "A képlet segít a számolásban.", "Formula te ajuta la calcul."),
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "formula_mass",
    interactive: {
      type: "physics-stacker",
      words: [L("Formel lesen", "read the formula", "képlet olvasása", "citeste formula"), L("Atome zählen", "count atoms", "atomok számlálása", "numara atomii"), L("Massen addieren", "add masses", "tömegek összeadása", "aduna masele")],
      correctOrder: [0, 1, 2],
    },
  },
  {
    difficulty: "easy",
    title: L("Mol", "Mole", "Mol", "Mol"),
    text: L(
      "Mit dem Mol zählst du sehr viele Teilchen.",
      "The mole lets you count very many particles.",
      "A mollal nagyon sok részecskét számolunk.",
      "Cu molul numeri foarte multe particule."
    ),
    inst: L("Paare den Begriff.", "Match the term.", "Párosítsd a fogalmat.", "Potriveste termenul."),
    h1: L("Mol gehört zur Stoffmenge.", "Mole belongs to amount of substance.", "A mol az anyagmennyiséghez tartozik.", "Molul apartine cantitatii de substanta."),
    h2: L("Avogadro hilft beim Zählen.", "Avogadro helps with counting.", "Avogadro segít a számolásban.", "Avogadro ajuta la numarare."),
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "mole_intro",
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: L("Mol", "mole", "mol", "mol"), right: L("Stoffmenge", "amount of substance", "anyagmennyiség", "cantitate de substanta") },
        { left: L("Avogadro-Zahl", "Avogadro number", "Avogadro-szám", "numarul lui Avogadro"), right: L("Teilchenzahl", "particle count", "részecskeszám", "numarul de particule") },
        { left: L("Molare Masse", "molar mass", "moláris tömeg", "masa molara"), right: L("g pro mol", "g per mol", "g per mol", "g pe mol") },
        { left: L("Teilchen", "particle", "részecske", "particula"), right: L("Atom oder Molekül", "atom or molecule", "atom vagy molekula", "atom sau molecula") },
      ],
    },
  },
  {
    difficulty: "medium",
    title: L("Einfache Stöchiometrie", "Simple Stoichiometry", "Egyszerű sztöchiometria", "Stoechiometrie simpla"),
    text: L(
      "Stöchiometrie verbindet Reaktionsgleichung und Stoffmengen.",
      "Stoichiometry links reaction equations and amounts of substance.",
      "A sztöchiometria a reakcióegyenletet és az anyagmennyiséget kapcsolja össze.",
      "Stoechiometria leaga ecuatia reactiei de cantitatile de substanta."
    ),
    inst: L("Verbinde die Rechenschritte.", "Match the calculation steps.", "Párosítsd a számítás lépéseit.", "Potriveste pasii calculului."),
    h1: L("Die Gleichung zeigt das Verhältnis.", "The equation shows the ratio.", "Az egyenlet mutatja az arányt.", "Ecuatia arata raportul."),
    h2: L("Koeffizienten sind wichtig.", "Coefficients matter.", "A koefficiensek fontosak.", "Coeficientii conteaza."),
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "simple_stoichiometry",
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: L("Reaktionsgleichung", "reaction equation", "reakcióegyenlet", "ecuatia reactiei"), right: L("liefert das Verhältnis", "gives the ratio", "adja az arányt", "da raportul") },
        { left: L("Masse", "mass", "tömeg", "masa"), right: L("g", "g", "g", "g") },
        { left: L("Stoffmenge", "amount of substance", "anyagmennyiség", "cantitate de substanta"), right: L("mol", "mol", "mol", "mol") },
        { left: L("Koeffizient", "coefficient", "koefficiens", "coeficient"), right: L("Teilchenverhältnis", "particle ratio", "részecskearány", "raport de particule") },
      ],
    },
  },
  {
    difficulty: "medium",
    title: L("Ausbeute", "Yield", "Kihozatal", "Randament"),
    text: L(
      "Die Ausbeute sagt, wie viel Produkt wirklich entsteht.",
      "Yield tells how much product is really obtained.",
      "A kihozatal megmutatja, mennyi termék keletkezik valójában.",
      "Randamentul arata cat produs se obtine cu adevarat."
    ),
    inst: L("Triff die richtigen Aussagen.", "Hit the correct statements.", "Találd el a helyes állításokat.", "Loveste afirmatiile corecte."),
    h1: L("Reale und theoretische Ausbeute sind nicht immer gleich.", "Actual and theoretical yield are not always the same.", "A valós és az elméleti kihozatal nem mindig azonos.", "Randamentul real si cel teoretic nu sunt mereu egale."),
    h2: L("Prozent hilft beim Vergleichen.", "Percent helps compare.", "A százalék segít az összehasonlításban.", "Procentul ajuta la comparatie."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "yield_intro",
    interactive: {
      type: "physics-slingshot",
      question: L("Welche Aussage passt zur Ausbeute?", "Which statement fits yield?", "Mely állítás illik a kihozatalhoz?", "Ce afirmatie se potriveste randamentului?"),
      targets: [
        { id: "1", text: L("Die reale Ausbeute kann kleiner sein.", "The actual yield can be smaller.", "A valós kihozatal kisebb lehet.", "Randamentul real poate fi mai mic."), isCorrect: true },
        { id: "2", text: L("100 Prozent ist immer sicher.", "100 percent is always guaranteed.", "A 100 százalék mindig biztos.", "100 la suta este mereu sigur."), isCorrect: false },
        { id: "3", text: L("Katalysatoren ändern die Produktmenge direkt.", "Catalysts directly change product amount.", "A katalizátorok közvetlenül változtatják a termék mennyiségét.", "Catalizatorii schimba direct cantitatea de produs."), isCorrect: false },
        { id: "4", text: L("Ausbeute kann in Prozent angegeben werden.", "Yield can be given in percent.", "A kihozatal százalékban is megadható.", "Randamentul poate fi dat in procente."), isCorrect: true },
      ],
    },
  },
  {
    difficulty: "hard",
    title: L("Konzentrationsrechnung", "Concentration Calculations", "Koncentrációszámítás", "Calculul concentratiei"),
    text: L(
      "Konzentration verbindet Stoffmenge und Volumen.",
      "Concentration links amount of substance and volume.",
      "A koncentráció az anyagmennyiséget és a térfogatot kapcsolja össze.",
      "Concentratia leaga cantitatea de substanta de volum."
    ),
    inst: L("Wähle die richtige Formelidee.", "Choose the correct formula idea.", "Válaszd ki a helyes képletgondolatot.", "Alege ideea corecta a formulei."),
    h1: L("Stoffmenge geteilt durch Volumen.", "Amount of substance divided by volume.", "Anyagmennyiség osztva térfogattal.", "Cantitatea de substanta impartita la volum."),
    h2: L("Mehr Stoff in gleichem Raum ist konzentrierter.", "More substance in the same space means higher concentration.", "Több anyag ugyanabban a térben nagyobb koncentráció.", "Mai multa substanta in acelasi spatiu inseamna concentratie mai mare."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "concentration_calc",
    interactive: {
      type: "gap-fill",
      sentence: L(
        "Die Konzentration ist ___ durch ___.",
        "Concentration is ___ divided by ___.",
        "A koncentráció ___ osztva ___.",
        "Concentratia este ___ impartita la ___."
      ),
      choices: [
        L("Stoffmenge / Volumen", "amount / volume", "anyagmennyiség / térfogat", "cantitate / volum"),
        L("Masse / Farbe", "mass / color", "tömeg / szín", "masa / culoare"),
        L("Temperatur / Zeit", "temperature / time", "hőmérséklet / idő", "temperatura / timp"),
        L("Dichte / Licht", "density / light", "sűrűség / fény", "densitate / lumina"),
      ],
      correctIndex: 0,
    },
  },
];

const KEMIA_K8_I6_TOPICS: TopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Düngemittel", "Fertilizers", "Műtrágyák", "Ingrasaminte"),
    text: L(
      "Düngemittel liefern Pflanzen wichtige Nährstoffe.",
      "Fertilizers provide plants with important nutrients.",
      "A műtrágyák fontos tápanyagokat adnak a növényeknek.",
      "Ingrasamintele ofera plantelor nutrienti importanti."
    ),
    inst: L("Sortiere die Stoffe.", "Sort the substances.", "Rendezd az anyagokat.", "Sorteaza substantele."),
    h1: L("N, P und K sind typische Nährstoffe.", "N, P, and K are typical nutrients.", "Az N, P és K jellemző tápanyagok.", "N, P si K sunt nutrienti tipici."),
    h2: L("Nicht alles im Boden ist Dünger.", "Not everything in soil is fertilizer.", "Nem minden talajanyagot nevezünk műtrágyának.", "Nu tot ce e in sol este ingrasamant."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "fertilizers_intro",
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "f", label: L("Nährstoffe", "Nutrients", "Tápanyagok", "Nutrienti") },
        { id: "n", label: L("nicht Dünger", "not fertilizer", "nem műtrágya", "nu este ingrasamant") },
      ],
      items: [
        { text: L("Stickstoff", "nitrogen", "nitrogén", "azot"), bucketId: "f" },
        { text: L("Phosphat", "phosphate", "foszfát", "fosfat"), bucketId: "f" },
        { text: L("Wasser", "water", "víz", "apa"), bucketId: "n" },
        { text: L("Sand", "sand", "homok", "nisip"), bucketId: "n" },
      ],
    },
  },
  {
    difficulty: "easy",
    title: L("Seifen und Waschmittel", "Soaps and Detergents", "Szappanok és mosószerek", "Sapunuri si detergenti"),
    text: L(
      "Seifen und Waschmittel helfen Fett und Schmutz zu entfernen.",
      "Soaps and detergents help remove grease and dirt.",
      "A szappanok és mosószerek segítenek eltávolítani a zsírt és a szennyeződést.",
      "Sapunurile si detergentii ajuta la indepartarea grasimii si murdariei."
    ),
    inst: L("Paare Stoff and Wirkung.", "Match substance and effect.", "Párosítsd az anyagot és a hatást.", "Potriveste substanta si efectul."),
    h1: L("Tenside verbinden Fett und Wasser.", "Surfactants connect fat and water.", "A tenzidek összekötik a zsiradékot és a vizet.", "Tensidele leaga grasimea si apa."),
    h2: L("Hartes Wasser macht oft Kalk.", "Hard water often makes limescale.", "A kemény víz gyakran vízkövet okoz.", "Apa dura produce adesea depuneri de calcar."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "soaps_detergents",
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: L("Seife", "soap", "szappan", "sapun"), right: L("reinigt Fett", "removes grease", "eltávolítja a zsírt", "indeparteaza grasimea") },
        { left: L("Waschmittel", "detergent", "mosószer", "detergent"), right: L("für die Wäsche", "for laundry", "mosáshoz", "pentru haine") },
        { left: L("Tensid", "surfactant", "tenzid", "tensid"), right: L("verbindet Fett und Wasser", "links fat and water", "összeköti a zsírt és a vizet", "leaga grasimea si apa") },
        { left: L("hartes Wasser", "hard water", "kemény víz", "apa dura"), right: L("bildet oft Kalk", "often forms limescale", "gyakran vízkövet képez", "formeaza adesea calcar") },
      ],
    },
  },
  {
    difficulty: "medium",
    title: L("Lebensmittelchemie", "Food Chemistry", "Élelmiszerkémia", "Chimia alimentelor"),
    text: L(
      "Chemie hilft bei Haltbarkeit, Geschmack und Zusammensetzung von Lebensmitteln.",
      "Chemistry helps with shelf life, taste, and composition of food.",
      "A kémia segít az élelmiszerek eltarthatóságában, ízében és összetételében.",
      "Chimia ajuta la durata de pastrare, gust si compozitia alimentelor."
    ),
    inst: L("Sortiere die Lebensmittel.", "Sort the foods.", "Rendezd az élelmiszereket.", "Sorteaza alimentele."),
    h1: L("Frisch und verarbeitet gehören nicht zusammen.", "Fresh and processed are not the same.", "A friss és a feldolgozott nem ugyanaz.", "Proaspete si procesate nu sunt la fel."),
    h2: L("Chemie steckt auch im Essen.", "Chemistry is also in food.", "A kémia az ételben is jelen van.", "Chimia este prezenta si in mancare."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "food_chemistry",
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "f", label: L("frisch", "fresh", "friss", "proaspat") },
        { id: "p", label: L("verarbeitet", "processed", "feldolgozott", "procesat") },
      ],
      items: [
        { text: L("Apfel", "apple", "alma", "mar"), bucketId: "f" },
        { text: L("Karotte", "carrot", "répa", "morcov"), bucketId: "f" },
        { text: L("Limonade", "lemonade", "limonádé", "limonada"), bucketId: "p" },
        { text: L("Joghurt", "yogurt", "joghurt", "iaurt"), bucketId: "p" },
      ],
    },
  },
  {
    difficulty: "medium",
    title: L("Grüne Chemie", "Green Chemistry", "Zöld kémia", "Chimie verde"),
    text: L(
      "Grüne Chemie versucht, Abfall und Schadstoffe zu verringern.",
      "Green chemistry tries to reduce waste and harmful substances.",
      "A zöld kémia a hulladékot és a káros anyagokat csökkenti.",
      "Chimia verde incearca sa reduca deseurile si substantele daunatoare."
    ),
    inst: L("Triff die grüne Idee.", "Hit the green idea.", "Találd el a zöld gondolatot.", "Loveste ideea verde."),
    h1: L("Weniger Abfall ist besser.", "Less waste is better.", "A kevesebb hulladék jobb.", "Mai putine deseuri este mai bine."),
    h2: L("Sauberer arbeiten schont die Umwelt.", "Cleaner work protects the environment.", "A tisztább munka védi a környezetet.", "Lucrul mai curat protejeaza mediul."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "green_chemistry_intro",
    interactive: {
      type: "physics-slingshot",
      question: L("Was passt zur Grünen Chemie?", "What fits green chemistry?", "Mi illik a zöld kémiához?", "Ce se potriveste chimiei verzi?"),
      targets: [
        { id: "1", text: L("weniger Abfall", "less waste", "kevesebb hulladék", "mai putine deseuri"), isCorrect: true },
        { id: "2", text: L("mehr giftige Stoffe", "more toxic substances", "több mérgező anyag", "mai multe substante toxice"), isCorrect: false },
        { id: "3", text: L("Rohstoffe sparen", "save raw materials", "nyersanyag-takarékosság", "economiseste materii prime"), isCorrect: true },
        { id: "4", text: L("umweltschädlich arbeiten", "work in a harmful way", "károsan dolgozni", "a lucra daunator"), isCorrect: false },
      ],
    },
  },
  {
    difficulty: "hard",
    title: L("Abwasserreinigung", "Wastewater Treatment", "Szennyvíztisztítás", "Tratarea apelor uzate"),
    text: L(
      "Abwasserreinigung macht verschmutztes Wasser wieder nutzbar.",
      "Wastewater treatment makes dirty water usable again.",
      "A szennyvíztisztítás újra felhasználhatóbbá teszi a szennyezett vizet.",
      "Tratarea apelor uzate face apa murdara din nou utilizabila."
    ),
    inst: L("Wähle die passende Ergänzung.", "Choose the correct ending.", "Válaszd ki a helyes kiegészítést.", "Alege completarea corecta."),
    h1: L("Sauberes Wasser ist das Ziel.", "Clean water is the goal.", "A tiszta víz a cél.", "Apa curata este obiectivul."),
    h2: L("Reinigung schont Mensch und Natur.", "Cleaning protects people and nature.", "A tisztítás az embert és a természetet védi.", "Curatarea protejeaza oamenii si natura."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "wastewater_treatment",
    interactive: {
      type: "gap-fill",
      sentence: L(
        "Abwasserreinigung macht Wasser ___.",
        "Wastewater treatment makes water ___.",
        "A szennyvíztisztítás a vizet ___ teszi.",
        "Tratarea apelor uzate face apa ___."
      ),
      choices: [
        L("sauber", "clean", "tisztává", "curata"),
        L("laut", "loud", "hangossá", "zgomotoasa"),
        L("schwer", "heavy", "nehézzé", "grea"),
        L("rot", "red", "pirossá", "rosie"),
      ],
      correctIndex: 0,
    },
  },
];

const KEMIA_K8_I7_TOPICS: TopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Organik Check", "Organic Check", "Szerves ellenőrzés", "Verificare organica"),
    text: L(
      "Wiederhole die Grundidee der organischen Chemie.",
      "Review the basic idea of organic chemistry.",
      "Ismételd át a szerves kémia alapját.",
      "Repetă ideea de bază a chimiei organice."
    ),
    inst: L("Sortiere die Beispiele.", "Sort the examples.", "Rendezd a példákat.", "Sorteaza exemplele."),
    h1: L("Nur C und H ist ein guter Hinweis.", "Only C and H is a good clue.", "A C és H jó nyom.", "Doar C si H este un indiciu bun."),
    h2: L("Nicht jeder Stoff gehört zur organischen Chemie.", "Not every substance is organic chemistry.", "Nem minden anyag szerves kémia.", "Nu orice substanta este chimie organica."),
    svg: { type: "kemia-diagram", name: "OrganicSvg" },
    quiz: "carbon_special",
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "o", label: L("organisch", "organic", "szerves", "organic") },
        { id: "n", label: L("nicht organisch", "not organic", "nem szerves", "neorganic") },
      ],
      items: [
        { text: L("Kohlenwasserstoff", "hydrocarbon", "szénhidrogén", "hidrocarbura"), bucketId: "o" },
        { text: L("Alkan", "alkane", "alkán", "alkan"), bucketId: "o" },
        { text: L("Wasser", "water", "víz", "apa"), bucketId: "n" },
        { text: L("Salz", "salt", "só", "sare"), bucketId: "n" },
      ],
    },
  },
  {
    difficulty: "easy",
    title: L("Ketten und Doppelbindungen", "Chains and Double Bonds", "Láncok és kettős kötések", "Lanturi si duble legaturi"),
    text: L(
      "Alkane und Alkene gehören zusammen, aber sie sind nicht gleich.",
      "Alkanes and alkenes belong together, but they are not the same.",
      "Az alkánok és alkének összetartoznak, de nem ugyanazok.",
      "Alcanii si alchenele merg impreuna, dar nu sunt la fel."
    ),
    inst: L("Paare die Stoffklasse.", "Match the class.", "Párosítsd az osztályt.", "Potriveste clasa."),
    h1: L("Einfachbindung oder Doppelbindung?", "Single bond or double bond?", "Egyszeres vagy kettős kötés?", "Legatura simpla sau dubla?"),
    h2: L("Das ist der wichtigste Unterschied.", "That is the key difference.", "Ez a legfontosabb különbség.", "Aceasta este diferenta cheie."),
    svg: { type: "kemia-diagram", name: "OrganicSvg" },
    quiz: "alkenes_intro",
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: L("Alkan", "alkane", "alkán", "alkan"), right: L("Einfachbindung", "single bond", "egyszeres kötés", "legatura simpla") },
        { left: L("Alken", "alkene", "alkén", "alchena"), right: L("Doppelbindung", "double bond", "kettős kötés", "legatura dubla") },
        { left: L("Hydrocarbon", "hydrocarbon", "szénhidrogén", "hidrocarbura"), right: L("C und H", "C and H", "C és H", "C si H") },
        { left: L("Brennstoff", "fuel", "tüzelőanyag", "combustibil"), right: L("liefert Energie", "gives energy", "energiát ad", "da energie") },
      ],
    },
  },
  {
    difficulty: "medium",
    title: L("Stoffklassen", "Functional Groups", "Funkciós csoportok", "Grupe functionale"),
    text: L(
      "Alkohole, Säuren und Ester sind wichtige Stoffklassen.",
      "Alcohols, acids, and esters are important groups.",
      "Az alkoholok, savak és észterek fontos csoportok.",
      "Alcoolii, acizii si esterii sunt grupe importante."
    ),
    inst: L("Ordne die Gruppe.", "Order the group.", "Rendezd a csoportot.", "Ordoneaza grupul."),
    h1: L("Vom Alkohol zur Säure.", "From alcohol to acid.", "Az alkoholtól a savig.", "De la alcool la acid."),
    h2: L("Dann entsteht der Ester.", "Then the ester forms.", "Ezután keletkezik az észter.", "Apoi se formaza esterul."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "esters_intro",
    interactive: {
      type: "physics-stacker",
      words: [L("Alkohol", "alcohol", "alkohol", "alcool"), L("Carbonsäure", "carboxylic acid", "karbonsav", "acid carboxilic"), L("Ester", "ester", "eszter", "ester")],
      correctOrder: [0, 1, 2],
    },
  },
  {
    difficulty: "medium",
    title: L("Brennstoffe und Kunststoffe", "Fuels and Plastics", "Tüzelőanyagok és műanyagok", "Combustibili si materiale plastice"),
    text: L(
      "Viele Alltagsstoffe aus Kohlenstoff kommen als Brennstoff oder Kunststoff vor.",
      "Many carbon-based everyday materials appear as fuels or plastics.",
      "Sok szénalapú mindennapi anyag tüzelőanyag vagy műanyag.",
      "Multe materiale de zi cu zi pe baza de carbon apar ca combustibili sau materiale plastice."
    ),
    inst: L("Triff die richtigen Beispiele.", "Hit the correct examples.", "Találd el a helyes példákat.", "Loveste exemplele corecte."),
    h1: L("Kunststoff ist oft ein Polymer.", "Plastic is often a polymer.", "A műanyag gyakran polimer.", "Plasticul este adesea un polimer."),
    h2: L("Brennstoffe geben Energie frei.", "Fuels release energy.", "A tüzelőanyagok energiát adnak le.", "Combustibilii elibereaza energie."),
    svg: { type: "kemia-diagram", name: "OrganicSvg" },
    quiz: "fuels_organic",
    interactive: {
      type: "physics-slingshot",
      question: L("Welche Beispiele passen hierher?", "Which examples fit here?", "Mely példák illenek ide?", "Ce exemple se potrivesc aici?"),
      targets: [
        { id: "1", text: L("Benzin", "gasoline", "benzin", "benzina"), isCorrect: true },
        { id: "2", text: L("Polyethylen", "polyethylene", "polietilén", "polietilena"), isCorrect: true },
        { id: "3", text: L("Kochsalz", "table salt", "konyhasó", "sare de bucatarie"), isCorrect: false },
        { id: "4", text: L("Wasser", "water", "víz", "apa"), isCorrect: false },
      ],
    },
  },
  {
    difficulty: "hard",
    title: L("Organik Zusammenfassung", "Organic Summary", "Szerves összefoglaló", "Rezumat organic"),
    text: L(
      "Die wichtigsten Begriffe der organischen Chemie wiederholen wir hier noch einmal.",
      "We review the key terms of organic chemistry here once more.",
      "Itt még egyszer ismételjük a szerves kémia fontos fogalmait.",
      "Aici reluam inca o data termenii cheie ai chimiei organice."
    ),
    inst: L("Fülle die Lücke.", "Fill the gap.", "Töltsd ki a hiányt.", "Completeaza spatiul gol."),
    h1: L("C und H sind entscheidend.", "C and H matter.", "A C és H a lényeg.", "C si H conteaza."),
    h2: L("Die Reaktion am Ende bleibt gleich.", "The final reaction stays the same.", "A végső reakció ugyanaz marad.", "Reactia finala ramane aceeasi."),
    svg: { type: "kemia-diagram", name: "OrganicSvg" },
    quiz: "hydrocarbons_intro",
    interactive: {
      type: "gap-fill",
      sentence: L(
        "Kohlenwasserstoffe bestehen aus ___ und ___.",
        "Hydrocarbons consist of ___ and ___.",
        "A szénhidrogének ___ és ___ állnak.",
        "Hidrocarburile sunt formate din ___ si ___."
      ),
      choices: [
        L("Kohlenstoff und Wasserstoff", "carbon and hydrogen", "szén és hidrogén", "carbon si hidrogen"),
        L("Wasser und Salz", "water and salt", "víz és só", "apa si sare"),
        L("Eisen und Kupfer", "iron and copper", "vas és réz", "fier si cupru"),
        L("Licht und Wärme", "light and heat", "fény és hő", "lumina si caldura"),
      ],
      correctIndex: 0,
    },
  },
];

const KEMIA_K8_I8_TOPICS: TopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Schneller oder langsamer", "Faster or Slower", "Gyorsabb vagy lassabb", "Mai rapid sau mai lent"),
    text: L(
      "Wiederhole die Faktoren für Reaktionsgeschwindigkeit.",
      "Review the factors for reaction rate.",
      "Ismételd a reakciósebesség tényezőit.",
      "Repetă factorii vitezei reactiei."
    ),
    inst: L("Sortiere die Faktoren.", "Sort the factors.", "Rendezd a tényezőket.", "Sorteaza factorii."),
    h1: L("Wärme und Oberfläche helfen oft.", "Heat and surface area often help.", "A meleg és a felület gyakran segít.", "Caldura si suprafata ajuta adesea."),
    h2: L("Kalt und wenig Teilchen bremsen.", "Cold and few particles slow things down.", "A hideg és kevés részecske lassít.", "Recele si putine particule incetinesc."),
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "reaction_rate_intro",
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "f", label: L("beschleunigt", "speeds up", "gyorsít", "accelereaza") },
        { id: "s", label: L("bremst", "slows down", "lassít", "incetineste") },
      ],
      items: [
        { text: L("warm", "warm", "meleg", "cald"), bucketId: "f" },
        { text: L("Katalysator", "catalyst", "katalizátor", "catalizator"), bucketId: "f" },
        { text: L("hohe Konzentration", "high concentration", "nagy koncentráció", "concentratie mare"), bucketId: "f" },
        { text: L("kalt", "cold", "hideg", "rece"), bucketId: "s" },
      ],
    },
  },
  {
    difficulty: "easy",
    title: L("Einflussfaktoren", "Influencing Factors", "Befolyásoló tényezők", "Factori de influenta"),
    text: L(
      "Oberfläche, Temperatur und Konzentration beeinflussen die Rate.",
      "Surface area, temperature, and concentration affect the rate.",
      "A felület, a hőmérséklet és a koncentráció befolyásolja a sebességet.",
      "Suprafata, temperatura si concentratia influenteaza viteza."
    ),
    inst: L("Paare Faktor und Wirkung.", "Match factor and effect.", "Párosítsd a tényezőt és a hatást.", "Potriveste factorul si efectul."),
    h1: L("Mehr Kontakt bringt mehr Reaktion.", "More contact means more reaction.", "Több érintkezés több reakciót jelent.", "Mai mult contact inseamna mai multa reactie."),
    h2: L("Katalysator ist wichtig, aber bleibt erhalten.", "Catalyst matters but remains.", "A katalizátor fontos, de megmarad.", "Catalizatorul conteaza, dar ramane."),
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "surface_area_effect",
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: L("Pulver", "powder", "por", "pulbere"), right: L("große Oberfläche", "large surface area", "nagy felület", "suprafata mare") },
        { left: L("hohe Temperatur", "high temperature", "magas hőmérséklet", "temperatura ridicata"), right: L("mehr Teilchenbewegung", "more particle motion", "több részecskemozgás", "mai multa miscare") },
        { left: L("Katalysator", "catalyst", "katalizátor", "catalizator"), right: L("schnellere Reaktion", "faster reaction", "gyorsabb reakció", "reactie mai rapida") },
        { left: L("niedrige Konzentration", "low concentration", "alacsony koncentráció", "concentratie mica"), right: L("weniger Zusammenstöße", "fewer collisions", "kevesebb ütközés", "mai putine ciocniri") },
      ],
    },
  },
  {
    difficulty: "medium",
    title: L("Elektrolyse und Strom", "Electrolysis and Current", "Elektrolízis és áram", "Electroliza si curent"),
    text: L(
      "Die elektrochemischen Begriffe gehören zusammen.",
      "The electrochemical terms belong together.",
      "Az elektrokémiai fogalmak összetartoznak.",
      "Termenii electrochimici merg impreuna."
    ),
    inst: L("Ordne den Ablauf.", "Order the process.", "Rendezd a folyamatot.", "Ordoneaza procesul."),
    h1: L("Erst Strom, dann Teilchenbewegung.", "First current, then particle movement.", "Előbb áram, aztán részecskemozgás.", "Mai intai curent, apoi miscare de particule."),
    h2: L("Danach entstehen Stoffe an den Elektroden.", "Then substances form at the electrodes.", "Ezután anyagok keletkeznek az elektródáknál.", "Apoi se formeaza substante la electrozi."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "electrolysis_intro",
    interactive: {
      type: "physics-stacker",
      words: [L("Strom an", "current on", "áram be", "curent pornit"), L("Ionen wandern", "ions move", "ionok mozognak", "ionii se misca"), L("Stoffe entstehen", "substances form", "anyagok keletkeznek", "se formeaza substante")],
      correctOrder: [0, 1, 2],
    },
  },
  {
    difficulty: "medium",
    title: L("Stoffmenge und Reaktion", "Amount and Reaction", "Anyagmennyiség és reakció", "Cantitate si reactie"),
    text: L(
      "Beim Rechnen mit Stoffmengen brauchst du die Gleichung und die Einheiten.",
      "When calculating with amounts, you need the equation and the units.",
      "Az anyagmennyiséggel való számoláshoz kell az egyenlet és a mértékegység.",
      "La calculele cu cantitati ai nevoie de ecuatie si unitati."
    ),
    inst: L("Triff die richtigen Aussagen.", "Hit the correct statements.", "Találd el a helyes állításokat.", "Loveste afirmatiile corecte."),
    h1: L("Mol und g sind nicht das Gleiche.", "Mole and g are not the same.", "A mol és a g nem ugyanaz.", "Molul si g nu sunt acelasi lucru."),
    h2: L("Koeffizienten geben Verhältnisse an.", "Coefficients show ratios.", "A koefficiensek arányt mutatnak.", "Coeficientii arata raporturi."),
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "simple_stoichiometry",
    interactive: {
      type: "physics-slingshot",
      question: L("Welche Aussagen stimmen?", "Which statements are true?", "Mely állítások igazak?", "Care afirmatii sunt adevarate?"),
      targets: [
        { id: "1", text: L("1 mol enthält sehr viele Teilchen.", "1 mole contains many particles.", "1 mol sok részecskét tartalmaz.", "1 mol contine multe particule."), isCorrect: true },
        { id: "2", text: L("Batterien gehören zur Elektrochemie.", "Batteries belong to electrochemistry.", "Az elemek az elektrokémiához tartoznak.", "Bateriile apartin electrochimiei."), isCorrect: true },
        { id: "3", text: L("Masse ist dasselbe wie Konzentration.", "Mass is the same as concentration.", "A tömeg ugyanaz, mint a koncentráció.", "Masa este acelasi lucru cu concentratia."), isCorrect: false },
        { id: "4", text: L("Katalysatoren verbraucht man immer.", "Catalysts are always consumed.", "A katalizátorokat mindig elhasználjuk.", "Catalizatorii sunt mereu consumati."), isCorrect: false },
      ],
    },
  },
  {
    difficulty: "hard",
    title: L("Konzentration und Ausbeute", "Concentration and Yield", "Koncentráció és kihozatal", "Concentratie si randament"),
    text: L(
      "Beides sind wichtige Rechenideen in der Chemie.",
      "Both are important calculation ideas in chemistry.",
      "Mindkettő fontos számolási ötlet a kémiában.",
      "Ambele sunt idei importante de calcul in chimie."
    ),
    inst: L("Fülle die Lücke.", "Fill the gap.", "Töltsd ki a hiányt.", "Completeaza spatiul gol."),
    h1: L("Stoffmenge pro Volumen.", "Amount of substance per volume.", "Anyagmennyiség térfogatonként.", "Cantitate de substanta pe volum."),
    h2: L("Der Begriff passt in die Formel.", "The term fits the formula.", "A fogalom illik a képletbe.", "Termenul se potriveste formulei."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "concentration_calc",
    interactive: {
      type: "gap-fill",
      sentence: L(
        "Konzentration ist ___ pro ___.",
        "Concentration is ___ per ___.",
        "A koncentráció ___ per ___.",
        "Concentratia este ___ pe ___."
      ),
      choices: [
        L("Stoffmenge / Volumen", "amount / volume", "anyagmennyiség / térfogat", "cantitate / volum"),
        L("Masse / Farbe", "mass / color", "tömeg / szín", "masa / culoare"),
        L("Zeit / Licht", "time / light", "idő / fény", "timp / lumina"),
        L("Wärme / Salz", "heat / salt", "hő / só", "caldura / sare"),
      ],
      correctIndex: 0,
    },
  },
];

const KEMIA_K8_I9_TOPICS: TopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Alles gemischt", "Mixed Review", "Vegyes ismétlés", "Recapitulare mixta"),
    text: L(
      "Diese Insel prüft organische, elektrochemische und rechnerische Ideen zusammen.",
      "This island checks organic, electrochemical, and calculation ideas together.",
      "Ez a sziget a szerves, elektrokémiai és számolási ötleteket együtt ellenőrzi.",
      "Aceasta insula verifica impreuna idei organice, electrochimice si de calcul."
    ),
    inst: L("Sortiere die Beispiele.", "Sort the examples.", "Rendezd a példákat.", "Sorteaza exemplele."),
    h1: L("Erkenne die Fachrichtung.", "Recognize the topic area.", "Ismerd fel a témát.", "Recunoaste domeniul."),
    h2: L("Nicht alles ist organisch.", "Not everything is organic.", "Nem minden szerves.", "Nu totul este organic."),
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "carbon_special",
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "a", label: L("organisch", "organic", "szerves", "organic") },
        { id: "b", label: L("anderes", "other", "más", "altceva") },
      ],
      items: [
        { text: L("Ester", "ester", "észter", "ester"), bucketId: "a" },
        { text: L("Batterie", "battery", "elem", "baterie"), bucketId: "b" },
        { text: L("Alkan", "alkane", "alkán", "alkan"), bucketId: "a" },
        { text: L("Mol", "mole", "mol", "mol"), bucketId: "b" },
      ],
    },
  },
  {
    difficulty: "easy",
    title: L("Begriffe verbinden", "Connect the Terms", "Kapcsold össze a fogalmakat", "Conecteaza termenii"),
    text: L(
      "Echte Chemie kocht aus vielen kleinen Begriffen.",
      "Real chemistry is built from many small terms.",
      "A kémia sok kis fogalomból áll.",
      "Chimia reala este alcatuita din multi termeni mici."
    ),
    inst: L("Paare die Begriffe.", "Match the terms.", "Párosítsd a fogalmakat.", "Potriveste termenii."),
    h1: L("So erkennst du den Zusammenhang.", "This helps you see the connection.", "Így látod az összefüggést.", "Asta te ajuta sa vezi legatura."),
    h2: L("Ein Begriff, ein Bild im Kopf.", "One term, one image in your head.", "Egy fogalom, egy kép a fejedben.", "Un termen, o imagine in minte."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "hydrocarbons_intro",
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: L("Katalysator", "catalyst", "katalizátor", "catalizator"), right: L("macht schneller", "speeds up", "gyorsít", "accelereaza") },
        { left: L("Anode", "anode", "anód", "anod"), right: L("Oxidation", "oxidation", "oxidáció", "oxidare") },
        { left: L("Mol", "mole", "mol", "mol"), right: L("Stoffmenge", "amount of substance", "anyagmennyiség", "cantitate de substanta") },
        { left: L("Seife", "soap", "szappan", "sapun"), right: L("reinigt Fett", "removes grease", "eltávolítja a zsírt", "indeparteaza grasimea") },
      ],
    },
  },
  {
    difficulty: "medium",
    title: L("Reihenfolge", "Sequence", "Sorrend", "Ordine"),
    text: L(
      "Wiederhole die Abläufe aus Reaktion und Berechnung.",
      "Review the steps from reactions and calculations.",
      "Ismételd a reakciók és számolás lépéseit.",
      "Repetă pașii din reacții și calcule."
    ),
    inst: L("Ordne den Ablauf.", "Order the process.", "Rendezd a folyamatot.", "Ordoneaza procesul."),
    h1: L("Erst denken, dann rechnen.", "Think first, then calculate.", "Előbb gondolkodj, aztán számolj.", "Mai intai gandeste, apoi calculeaza."),
    h2: L("Das ist ein gutes Lernmuster.", "This is a good learning pattern.", "Ez jó tanulási minta.", "Acesta este un model bun de invatare."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "electrolysis_intro",
    interactive: {
      type: "physics-stacker",
      words: [L("Thema erkennen", "recognize the topic", "téma felismerése", "recunoaste tema"), L("Regel anwenden", "apply the rule", "szabály alkalmazása", "aplica regula"), L("Antwort prüfen", "check the answer", "válasz ellenőrzése", "verifica raspunsul")],
      correctOrder: [0, 1, 2],
    },
  },
  {
    difficulty: "medium",
    title: L("Sichere Antworten", "Safe Answers", "Biztos válaszok", "Raspunsuri sigure"),
    text: L(
      "Einige Aussagen sind in der Chemie immer richtig, andere nicht.",
      "Some statements are always right in chemistry, others are not.",
      "A kémiában van, ami mindig igaz, és van, ami nem.",
      "Unele afirmatii sunt mereu corecte in chimie, altele nu."
    ),
    inst: L("Triff die richtigen Aussagen.", "Hit the correct statements.", "Találd el a helyes állításokat.", "Loveste afirmatiile corecte."),
    h1: L("Koeffizienten sind wichtig.", "Coefficients matter.", "A koefficiensek fontosak.", "Coeficientii conteaza."),
    h2: L("Teilchenzahl und Mol gehören zusammen.", "Particle count and mole belong together.", "A részecskeszám és a mol összetartozik.", "Numarul de particule si molul merg impreuna."),
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "simple_stoichiometry",
    interactive: {
      type: "physics-slingshot",
      question: L("Welche Aussagen sind richtig?", "Which statements are correct?", "Mely állítások helyesek?", "Ce afirmatii sunt corecte?"),
      targets: [
        { id: "1", text: L("1 mol ist eine Stoffmenge.", "1 mole is an amount of substance.", "1 mol anyagmennyiség.", "1 mol este o cantitate de substanta."), isCorrect: true },
        { id: "2", text: L("Batterien gehören zur Elektrochemie.", "Batteries belong to electrochemistry.", "Az elemek az elektrokémiához tartoznak.", "Bateriile apartin electrochimiei."), isCorrect: true },
        { id: "3", text: L("Masse ist dasselbe wie Konzentration.", "Mass is the same as concentration.", "A tömeg ugyanaz, mint a koncentráció.", "Masa este acelasi lucru cu concentratia."), isCorrect: false },
        { id: "4", text: L("Katalysatoren verbraucht man immer.", "Catalysts are always consumed.", "A katalizátorokat mindig elhasználjuk.", "Catalizatorii sunt mereu consumati."), isCorrect: false },
      ],
    },
  },
  {
    difficulty: "hard",
    title: L("Abschluss-Lücke", "Final Gap", "Záró hiány", "Lacuna finala"),
    text: L(
      "Zum Schluss kommt noch einmal ein kurzer Gesamtblick.",
      "Ated the end, there is one more short overview.",
      "A végén még egy rövid összefoglaló jön.",
      "La final vine inca o scurta privire de ansamblu."
    ),
    inst: L("Fülle die Lücke.", "Fill the gap.", "Töltsd ki a hiányt.", "Completeaza spatiul gol."),
    h1: L("Chemie verbindet Alltag und Zahlen.", "Chemistry connects daily life and numbers.", "A kémia összeköti a hétköznapokat és a számokat.", "Chimia leaga viata de zi cu zi si numerele."),
    h2: L("Das Beste passt in einen Satz.", "The best answer fits in one sentence.", "A legjobb válasz egy mondatba fér.", "Cel mai bun raspuns incape intr-o propozitie."),
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "concentration_calc",
    interactive: {
      type: "gap-fill",
      sentence: L(
        "Katalysatoren, Ionen und Mol gehören zur ___.",
        "Catalysts, ions, and moles belong to ___.",
        "A katalizátorok, ionok és molok a ___ tartoznak.",
        "Catalizatorii, ionii si molii apartin ___."
      ),
      choices: [
        L("Chemie", "chemistry", "kémiához", "chimiei"),
        L("Sport", "sports", "sporthoz", "sportului"),
        L("Musik", "music", "zenéhez", "muzicii"),
        L("Kunst", "art", "művészethez", "artei"),
      ],
      correctIndex: 0,
    },
  },
];

const I1 = buildIsland(L("Organische Grundlagen", "Organic Basics", "Szerves alapok", "Bazele organice"), KEMIA_K8_I1_TOPICS);
...
export const KEMIA_K8_I9_LABELS = I9.labels;
export const KEMIA_K8_I9_POOL = I9.pool;
