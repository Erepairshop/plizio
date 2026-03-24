"use client";
// PopGenExplorer.tsx — Bio Island i8: Populációgenetika (K8)
// Topics: 1) Génállomány 2) Hardy-Weinberg szabály 3) Evolúciós tényezők 4) Fajképződés 5) Review

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";
import { EcologyEvolutionSvg } from "@/app/astro-biologie/svg";

// ─── INLINE SVG ILLUSTRATIONS ───────────────────────────────────────

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      <g transform="translate(120, 70)">
        <rect x="-60" y="-30" width="120" height="60" rx="10" fill="none" stroke="#64748B" strokeWidth="2" />
        <circle cx="-30" cy="0" r="15" fill="#3B82F6" opacity="0.6" />
        <circle cx="30" cy="0" r="15" fill="#EF4444" opacity="0.6" />
        <text x="0" y="5" fontSize="24" fontWeight="bold" fill="#1E293B" textAnchor="middle">=</text>
        <text x="0" y="50" fontSize="16" fontWeight="bold" fill="#64748B" textAnchor="middle">p + q = 1</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF08A" rx="20" />
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="45" fill="#FDE047" stroke="#CA8A04" strokeWidth="3" />
        <text x="0" y="15" fontSize="40" textAnchor="middle">📊</text>
      </g>
    </svg>
  );
});

// ─── LABELS ─────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Populációgenetika",
    // T1: Génállomány
    t1_title: "A populáció génállománya",
    t1_text: "A populációgenetika nem az egyedeket, hanem a csoportok génösszetételét vizsgálja. A génállomány a populáció összes egyedének összes génjét jelenti.",
    t1_b1: "Génfrekvencia: egy adott génváltozat (allél) előfordulási aránya.",
    t1_b2: "Változatosság: minél többféle gén van jelen, annál alkalmazkodóbb a csoport.",
    t1_b3: "Ideális populáció: ahol nincs mutáció és szelekció (elméleti modell).",
    t1_inst: "Egészítsd ki a definíciót!",
    t1_gap_sentence: "A populáció összes génjének összessége a {gap}.",
    t1_c1: "génállomány", t1_c2: "vérplazma", t1_c3: "csontváz",
    t1_q: "Mit mutat meg a génfrekvencia?",
    t1_q_a: "Egy adott génváltozat gyakoriságát a populációban", t1_q_b: "Az állatok sebességét", t1_q_c: "A növények magasságát", t1_q_d: "A DNS molekula tömegét",

    // T2: Hardy-Weinberg (Gap-fill)
    t2_title: "A Hardy-Weinberg szabály",
    t2_text: "Ez a törvény kimondja, hogy egy ideális populációban a géngyakoriságok nem változnak nemzedékről nemzedékre. Ez az evolúciós nyugalom állapota.",
    t2_b1: "p + q = 1 (az allélok gyakoriságának összege).",
    t2_b2: "p² + 2pq + q² = 1 (a genotípusok eloszlása).",
    t2_b3: "A valóságban külső hatások (pl. szelekció) miatt ez az egyensúly felborul.",
    t2_inst: "Melyik képlet írja le az allélgyakoriságok összegét?",
    t2_gap_formula: "A bázisösszefüggés egyszerűen: {gap} = 1.",
    t2_f1: "p + q", t2_f2: "a + b + c", t2_f3: "E = mc²",
    t2_q: "Mit jelent a Hardy-Weinberg egyensúly?",
    t2_q_a: "Hogy a génösszetétel változatlan marad", t2_q_b: "Hogy mindenki mutálódik", t2_q_c: "Hogy a populáció kihal", t2_q_d: "Hogy az állatok elvándorolnak",

    // T3: Evolúciós tényezők (Drag-to-bucket)
    t3_title: "Mi változtatja meg a géneket?",
    t3_text: "A természetben ritka az egyensúly. Különböző tényezők folyamatosan alakítják a populáció génösszetételét – ez maga az evolúció.",
    t3_b1: "Mutáció: új génváltozatok megjelenése.",
    t3_b2: "Szelekció: a kedvező gének elterjedése.",
    t3_b3: "Migráció: gének beáramlása vándorlással.",
    t3_inst: "Melyik tényező változtatja meg a génfrekvenciát? Válogasd szét!",
    t3_bucket_valtoztat: "Változást okoz",
    t3_bucket_nem: "Nem változtat",
    t3_item_v1: "Természetes szelekció", t3_item_v2: "Mutáció", t3_item_v3: "Vándorlás",
    t3_item_n1: "Véletlenszerű párválasztás", t3_item_n2: "Óriási populációméret",
    t3_q: "Hogy hívjuk azt a folyamatot, amikor a környezet 'kiválogatja' a jobb génállományú egyedeket?",
    t3_q_a: "Szelekció", t3_q_b: "Mutáció", t3_q_c: "Izoláció", t3_q_d: "Hibridizáció",

    // T4: Fajképződés (Match-pairs)
    t4_title: "Hogyan lesz új faj?",
    t4_text: "Ha egy populáció kettészakad és a két csoport között megszűnik a génforgalom (izoláció), az idővel új fajok kialakulásához vezet.",
    t4_b1: "Földrajzi izoláció: hegyek vagy óceán választja el a csoportokat.",
    t4_b2: "Szaporodási izoláció: eltérő párzási időszak vagy szokások.",
    t4_b3: "Fajképződés: amikor a két csoport már nem tud egymással szaporodni.",
    t4_inst: "Párosítsd az elszigetelődés módját a példájával!",
    t4_l1: "Földrajzi gát", t4_r1: "Sziget elszakadása a kontinenstől",
    t4_l2: "Időbeli gát", t4_r2: "Eltérő virágzási idő",
    t4_l3: "Alaktani gát", t4_r3: "Eltérő testméret vagy ivarszerv",
    t4_q: "Mikor tekintünk két állatcsoportot külön fajnak?",
    t4_q_a: "Ha természetes körülmények között nem tudnak szaporodni", t4_q_b: "Ha más a színük", t4_q_c: "Ha mást esznek", t4_q_d: "Ha más országban élnek",

    // T5: Review
    t5_title: "Populációgenetikai összefoglaló",
    t5_text: "Az evolúció alapja a populációk génállományának lassú, de folyamatos változása.",
    t5_b1: "Génállomány = a közösség összes génje.",
    t5_b2: "Hardy-Weinberg = elméleti egyensúly.",
    t5_b3: "Izoláció = új fajok útja.",
    t5_inst: "Hogy hívjuk a gének vándorlását populációk között?",
    t5_gap_sentence2: "A populációk közötti géncserét a(z) {gap} biztosítja.",
    t5_c51: "migráció", t5_c52: "mutáció", t5_c53: "szelekció",
    t5_q: "Melyik állítás IGAZ az evolúcióra populációs szinten?",
    t5_q_a: "A génfrekvenciák megváltozása jelzi az evolúciót.", t5_q_b: "Az evolúció során a gének száma mindig csökken.", t5_q_c: "Csak az egyedek változnak, a populáció nem.", t5_q_d: "A környezetnek nincs hatása a génekre.",
  },
  en: {
    explorer_title: "Population Genetics",
    t1_title: "The Gene Pool", t1_text: "Population genetics studies the genetic composition of groups. The gene pool is the sum of all genes in a population.",
    t1_b1: "Gene frequency: the proportion of a specific allele.", t1_b2: "Diversity: higher variety leads to better adaptation.", t1_b3: "Ideal population: theoretical model without evolution.",
    t1_inst: "Complete the definition!", t1_gap_sentence: "The sum of all genes in a population is the {gap}.",
    t1_c1: "gene pool", t1_c2: "plasma", t1_c3: "skeleton",
    t1_q: "What does gene frequency represent?", t1_q_a: "The prevalence of an allele in a group", t1_q_b: "Animal speed", t1_q_c: "Plant height", t1_q_d: "DNA mass",

    t2_title: "Hardy-Weinberg Principle", t2_text: "In an ideal population, gene frequencies remain constant across generations.",
    t2_b1: "p + q = 1 (allele frequencies).", t2_b2: "p² + 2pq + q² = 1 (genotypes).", t2_b3: "In reality, external factors break this balance.",
    t2_inst: "Which formula represents allele frequency sum?", t2_gap_formula: "The basic relation is: {gap} = 1.",
    t2_f1: "p + q", t2_f2: "a + b + c", t2_f3: "E = mc²",
    t2_q: "What is Hardy-Weinberg equilibrium?", t2_q_a: "Constant genetic composition", t2_q_b: "Everyone mutates", t2_q_c: "Population dies out", t2_q_d: "Migration",

    t3_title: "Evolutionary Factors", t3_text: "In nature, various factors constantly reshape the gene pool – this is evolution.",
    t3_b1: "Mutation: new gene variants.", t3_b2: "Selection: spread of favorable genes.", t3_b3: "Migration: gene flow between populations.",
    t3_inst: "Which factor changes gene frequency? Sort them!",
    t3_bucket_valtoztat: "Causes change", t3_bucket_nem: "Does not change",
    t3_item_v1: "Natural selection", t3_item_v2: "Mutation", t3_item_v3: "Migration",
    t3_item_n1: "Random mating", t3_item_n2: "Infinite population size",
    t3_q: "What is the process where environment 'selects' better genotypes?",
    t3_q_a: "Selection", t3_q_b: "Mutation", t3_q_c: "Isolation", t3_q_d: "Hybridization",

    t4_title: "Speciation", t4_text: "If gene flow stops between groups (isolation), it leads to new species over time.",
    t4_b1: "Geographical: mountains or oceans separate groups.", t4_b2: "Reproductive: different mating times or behaviors.", t4_b3: "Speciation: groups can no longer interbreed.",
    t4_inst: "Match the type of isolation with an example!",
    t4_l1: "Geographical", t4_r1: "Island separating from continent",
    t4_l2: "Temporal", t4_r2: "Different flowering times",
    t4_l3: "Mechanical", t4_r3: "Different body sizes or organs",
    t4_q: "When are two groups considered separate species?",
    t4_q_a: "When they cannot interbreed naturally", t4_q_b: "Different colors", t4_q_c: "Different diet", t4_q_d: "Different country",

    t5_title: "PopGen Summary", t5_text: "Evolution is based on constant changes in the gene pool.",
    t5_b1: "Gene pool = all genes in community.", t5_b2: "Hardy-Weinberg = theoretical balance.", t5_b3: "Isolation = path to new species.",
    t5_inst: "What is the movement of genes between populations called?",
    t5_gap_sentence2: "Gene flow between populations is ensured by {gap}.",
    t5_c51: "migration", t5_c52: "mutation", t5_c53: "selection",
    t5_q: "What statement is TRUE about population evolution?",
    t5_q_a: "Evolution is signaled by changes in gene frequency.", t5_q_b: "Gene count always decreases.", t5_q_c: "Only individuals change.", t5_q_d: "Environment has no effect.",
  },
  de: {
    explorer_title: "Populationsgenetik",
    t1_title: "Der Genpool", t1_text: "Die Populationsgenetik untersucht die Zusammensetzung von Gruppen. Der Genpool ist die Gesamtheit aller Gene.",
    t1_b1: "Genfrequenz: Anteil einer Genvariante.", t1_b2: "Variabilität: führt zu besserer Anpassung.", t1_b3: "Ideale Population: theoretisches Modell ohne Wandel.",
    t1_inst: "Ergänze!", t1_gap_sentence: "Die Summe aller Gene einer Population ist der {gap}.",
    t1_c1: "Genpool", t1_c2: "Plasma", t1_c3: "Knochen",
    t1_q: "Was zeigt die Genfrequenz?", t1_q_a: "Häufigkeit einer Variante", t1_q_b: "Geschwindigkeit", t1_q_c: "Pflanzenhöhe", t1_q_d: "Masse",

    t2_title: "Hardy-Weinberg-Regel", t2_text: "In einer idealen Population bleiben Genfrequenzen über Generationen konstant.",
    t2_b1: "p + q = 1 (Allele).", t2_b2: "p² + 2pq + q² = 1 (Genotypen).", t2_b3: "In der Natur stören Faktoren das Gleichgewicht.",
    t2_inst: "Welche Formel für Allelhäufigkeit?", t2_gap_formula: "Es gilt: {gap} = 1.",
    t2_f1: "p + q", t2_f2: "a + b + c", t2_f3: "E = mc²",
    t2_q: "Was bedeutet das Gleichgewicht?", t2_q_a: "Zusammensetzung bleibt gleich", t2_q_b: "Alle mutieren", t2_q_c: "Aussterben", t2_q_d: "Wanderung",

    t3_title: "Evolutionsfaktoren", t3_text: "Faktoren verändern ständig den Genpool – das ist Evolution.",
    t3_b1: "Mutation: neue Varianten.", t3_b2: "Selektion: Ausbreitung guter Gene.", t3_b3: "Migration: Genfluss durch Wanderung.",
    t3_inst: "Was ändert die Frequenz? Sortiere!",
    t3_bucket_valtoztat: "Ändert Frequenz", t3_bucket_nem: "Ändert nicht",
    t3_item_v1: "Selektion", t3_item_v2: "Mutation", t3_item_v3: "Gendrift",
    t3_item_n1: "Panmixie", t3_item_n2: "Große Population",
    t3_q: "Wie nennt man die Auslese durch die Umwelt?",
    t3_q_a: "Selektion", t3_q_b: "Mutation", t3_q_c: "Isolation", t3_q_d: "Klonen",

    t4_title: "Artbildung", t4_text: "Isolation führt über Zeit zu neuen Arten.",
    t4_b1: "Geografisch: Berge/Meere trennen Gruppen.", t4_b2: "Reproduktiv: andere Paarungszeiten.", t4_b3: "Artbildung: keine Fortpflanzung mehr möglich.",
    t4_inst: "Verbinde Barriere und Beispiel!",
    t4_l1: "Geografisch", t4_r1: "Inselbildung",
    t4_l2: "Zeitlich", t4_r2: "Andere Blütezeit",
    t4_l3: "Verhalten", t4_r3: "Anderer Balzgesang",
    t4_q: "Wann sind es zwei Arten?",
    t4_q_a: "Keine natürliche Fortpflanzung", t4_q_b: "Andere Farbe", t4_q_c: "Anderes Futter", t4_q_d: "Anderes Land",

    t5_title: "Zusammenfassung", t5_text: "Evolution ist Wandel im Genpool.",
    t5_b1: "Genpool = alle Gene.", t5_b2: "Hardy-Weinberg = Ruhe.", t5_b3: "Isolation = neue Wege.",
    t5_inst: "Wie nennt man den Genaustausch?",
    t5_gap_sentence2: "Genaustausch erfolgt durch {gap}.",
    t5_c51: "Migration", t5_c52: "Mutation", t5_c53: "Schlaf",
    t5_q: "Was ist wahr für Evolution?",
    t5_q_a: "Änderung der Genfrequenz.", t5_q_b: "Gene verschwinden immer.", t5_q_c: "Sonne ist egal.", t5_q_d: "Nur Vögel mutieren.",
  },
  ro: {
    explorer_title: "Genetica Populațiilor",
    t1_title: "Fondul Genetic", t1_text: "Genetica populațiilor studiază compoziția genetică a grupurilor.",
    t1_b1: "Frecvența genică: proporția unei variante.", t1_b2: "Variabilitatea: duce la adaptare mai bună.", t1_b3: "Populația ideală: model fără evoluție.",
    t1_inst: "Completează!", t1_gap_sentence: "Totalitatea genelor unei populații este {gap}.",
    t1_c1: "fondul genetic", t1_c2: "plasma", t1_c3: "scheletul",
    t1_q: "Ce arată frecvența genică?", t1_q_a: "Prevalența unei alele în grup", t1_q_b: "Viteza", t1_q_c: "Înălțimea", t1_q_d: "Masa ADN",

    t2_title: "Regula Hardy-Weinberg", t2_text: "Într-o populație ideală, frecvențele rămân constante.",
    t2_b1: "p + q = 1 (alele).", t2_b2: "p² + 2pq + q² = 1 (genotipuri).", t2_b3: "În natură, factorii perturbă echilibrul.",
    t2_inst: "Care formulă redă suma alelelor?", t2_gap_formula: "Relația este: {gap} = 1.",
    t2_f1: "p + q", t2_f2: "a + b + c", t2_f3: "E = mc²",
    t2_q: "Ce înseamnă echilibrul Hardy-Weinberg?", t2_q_a: "Compoziția rămâne neschimbată", t2_q_b: "Toți se mută", t2_q_c: "Extincție", t2_q_d: "Mutație",

    t3_title: "Factorii Evoluției", t3_text: "În natură, diverși factori modelează fondul genetic.",
    t3_b1: "Mutația: variante noi.", t3_b2: "Selecția: răspândirea genelor bune.", t3_b3: "Migrația: fluxul de gene.",
    t3_inst: "Ce factor schimbă frecvența? Sortează!",
    t3_bucket_valtoztat: "Cauzează schimbări", t3_bucket_nem: "Nu schimbă",
    t3_item_v1: "Selecția naturală", t3_item_v2: "Mutația", t3_item_v3: "Migrația",
    t3_item_n1: "Împerecherea aleatorie", t3_item_n2: "Populație infinită",
    t3_q: "Cum numim selecția făcută de mediu?",
    t3_q_a: "Selecție", t3_q_b: "Mutație", t3_q_c: "Izolare", t3_q_d: "Clonare",

    t4_title: "Speciația", t4_text: "Izolarea duce în timp la specii noi.",
    t4_b1: "Geografică: munți/oceane separă grupuri.", t4_b2: "Reproductivă: perioade de împerechere diferite.", t4_b3: "Speciație: grupurile nu se mai pot reproduce.",
    t4_inst: "Potrivește izolarea cu exemplul!",
    t4_l1: "Geografică", t4_r1: "Separarea unei insule",
    t4_l2: "Temporală", t4_r2: "Înflorire în momente diferite",
    t4_l3: "Comportamentală", t4_r3: "Cântece de curtare diferite",
    t4_q: "Când considerăm două grupuri specii diferite?",
    t4_q_a: "Când nu se pot reproduce natural", t4_q_b: "Culori diferite", t4_q_c: "Hrană diferită", t4_q_d: "Țări diferite",

    t5_title: "Recapitulare PopGen", t5_text: "Evoluția este schimbarea fondului genetic.",
    t5_b1: "Fond genetic = totalitatea genelor.", t5_b2: "Hardy-Weinberg = echilibru.", t5_b3: "Izolare = specii noi.",
    t5_inst: "Cum numim fluxul de gene?",
    t5_gap_sentence2: "Schimbul de gene se face prin {gap}.",
    t5_c51: "migrație", t5_c52: "mutație", t5_c53: "selecție",
    t5_q: "Ce este adevărat despre evoluție?",
    t5_q_a: "Schimbarea frecvenței genice.", t5_q_b: "Genele dispar mereu.", t5_q_c: "Doar indivizii contează.", t5_q_d: "Soarele e singurul factor.",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <EcologyEvolutionSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_gap_sentence",
      choices: ["t1_c1", "t1_c2", "t1_c3"],
      correctIndex: 0,
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_gap_formula",
      choices: ["t2_f1", "t2_f2", "t2_f3"],
      correctIndex: 0,
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: (lang) => <EcologyEvolutionSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "valtoztat", label: "t3_bucket_valtoztat" },
        { id: "nem", label: "t3_bucket_nem" },
      ],
      items: [
        { text: "t3_item_v1", bucketId: "valtoztat" },
        { text: "t3_item_n1", bucketId: "nem" },
        { text: "t3_item_v2", bucketId: "valtoztat" },
        { text: "t3_item_n2", bucketId: "nem" },
        { text: "t3_item_v3", bucketId: "valtoztat" },
      ],
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: (lang) => <EcologyEvolutionSvg lang={lang} />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" },
        { left: "t4_l2", right: "t4_r2" },
        { left: "t4_l3", right: "t4_r3" },
      ],
      instruction: "t4_inst",
      hint1: "t4_b1",
      hint2: "t4_b2",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_q_a", "t4_q_b", "t4_q_c", "t4_q_d"],
      answer: "t4_q_a",
    },
  },
  {
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t5_gap_sentence2",
      choices: ["t5_c51", "t5_c52", "t5_c53"],
      correctIndex: 0,
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b3",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a",
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📊",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PopGenExplorer = memo(function PopGenExplorer({
  color = "#64748B", // Slate-500 a statisztikai/adat jelleghez
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={8} 
      explorerId="bio_k8_popgen" 
      color={color} 
      lang={lang} 
      onDone={onDone} 
    />
  );
});

export default PopGenExplorer;
