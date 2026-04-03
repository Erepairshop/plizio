// ─── GERMAN GRADE 5 GESCHICHTE GENERATORS ────────────────────────────────────
// Procedural MCQ question generators for German Grade 5 Geschichte (History)
// Topic: Die Antike — Frühe Hochkulturen bis Völkerwanderung
// Generates 45 questions per subtopic using seeded PRNG for reproducibility.
// All questions in German language (Deutsch)
// Grade-appropriate for 10-11 year old students (Klasse 5)

import type { CurriculumMCQ } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

/** Seeded PRNG (Mulberry32) */
function mulberry32(seed: number) {
  return function() {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Shuffle array using given RNG */
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Pick random element from array */
function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

/** Create MCQ question */
function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrongOptions: string[],
  rng?: () => number
): CurriculumMCQ {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) {
      seen.add(w);
      unique.push(w);
    }
  }
  const randomFn = rng || (() => Math.random());
  const opts = shuffle([correct, ...unique.slice(0, 3)], randomFn);
  return {
    type: "mcq",
    topic,
    subtopic,
    question,
    options: opts,
    correct: opts.indexOf(correct)
  };
}

// ─── DATA: FRÜHE HOCHKULTUREN ────────────────────────────────────────────────

const FLUSS_HOCHKULTUREN = [
  { name: "Mesopotamien", fluss: "Euphrat und Tigris", gebiet: "Irak" },
  { name: "Altes Ägypten", fluss: "Nil", gebiet: "Nordafrika" },
  { name: "Indus-Zivilisation", fluss: "Indus", gebiet: "Südasien" },
  { name: "Altes China", fluss: "Huang He (Gelber Fluss)", gebiet: "Ostasien" },
];

const SCHRIFTEN = [
  { name: "Keilschrift", volk: "Sumerer", material: "Tontafeln" },
  { name: "Hieroglyphen", volk: "Ägypter", material: "Papyrus und Stein" },
  { name: "Indus-Schrift", volk: "Indus-Volk", material: "Tontafeln" },
];

const HOCHKULTUR_ERRUNGENSCHAFTEN = [
  { was: "Codex Hammurabi", wofuer: "erstes schriftliches Gesetzbuch", wer: "Babylonier" },
  { was: "Keilschrift", wofuer: "erste Schrift der Welt", wer: "Sumerer" },
  { was: "Bewässerungskanäle", wofuer: "Landwirtschaft in trockenen Gebieten", wer: "Mesopotamier" },
  { was: "Zikkurat", wofuer: "Stufentempel als Gottessitz", wer: "Sumerer und Babylonier" },
];

// ─── GENERATOR 1: FRÜHE HOCHKULTUREN ────────────────────────────────────────

function generateFrueheHochkulturen(): CurriculumMCQ[] {
  const rng = mulberry32(1001);
  const qs: CurriculumMCQ[] = [];
  const T = "Geschichte";
  const S = "fruehe_hochkulturen";

  // Block 1: Grundbegriffe
  qs.push(createMCQ(T, S, "Was versteht man unter einer 'Hochkultur'?",
    "Eine fortgeschrittene Gesellschaft mit Schrift, Städten und Arbeitsteilung",
    ["Ein Volk, das auf hohen Bergen lebt", "Eine Gesellschaft ohne Regeln und Gesetze", "Ein nomadisches Volk ohne festen Wohnsitz"],
    rng));
  qs.push(createMCQ(T, S, "Warum entstanden die meisten frühen Hochkulturen an Flüssen?",
    "Die Flüsse lieferten Wasser für die Landwirtschaft und fruchtbares Land",
    ["Flüsse waren gute Verstecke vor Feinden", "An Flüssen gab es viele Tiere zum Jagen", "Flüsse boten Schutz vor Kälte"],
    rng));
  qs.push(createMCQ(T, S, "Welche zwei Flüsse umrahmten Mesopotamien?",
    "Euphrat und Tigris",
    ["Nil und Indus", "Rhein und Donau", "Ganges und Brahmaputra"],
    rng));
  qs.push(createMCQ(T, S, "Was bedeutet der Name 'Mesopotamien'?",
    "Land zwischen den Flüssen",
    ["Land der Götter", "Land am großen Fluss", "Land der Pyramiden"],
    rng));
  qs.push(createMCQ(T, S, "Welches Volk gilt als eines der ältesten Hochkulturen der Welt?",
    "Die Sumerer in Mesopotamien",
    ["Die Römer in Italien", "Die Griechen in Athen", "Die Germanen in Nordeuropa"],
    rng));

  // Block 2: Schrift
  qs.push(createMCQ(T, S, "Wie hieß die Schrift, die die Sumerer erfanden?",
    "Keilschrift",
    ["Hieroglyphen", "Alphabet", "Runen"],
    rng));
  qs.push(createMCQ(T, S, "Woraus wurden die Tontafeln mit Keilschrift hergestellt?",
    "Aus feuchtem Ton, der in der Sonne getrocknet wurde",
    ["Aus Holz, das in der Sonne gebleicht wurde", "Aus Papyrus, der am Nil wuchs", "Aus Stein, der gehauen wurde"],
    rng));
  qs.push(createMCQ(T, S, "Wofür wurde die frühe Schrift hauptsächlich genutzt?",
    "Für Handelslisten und Aufzeichnungen",
    ["Für Liebesgedichte", "Für Sportergebnisse", "Für Wettervorhersagen"],
    rng));
  qs.push(createMCQ(T, S, "Welche Schrift nutzten die alten Ägypter?",
    "Hieroglyphen",
    ["Keilschrift", "Latein", "Runen"],
    rng));
  qs.push(createMCQ(T, S, "Was ist eine Zikkurat?",
    "Ein mesopotamischer Stufentempel",
    ["Eine ägyptische Grabstätte", "Eine griechische Säulenhalle", "Ein römisches Amphitheater"],
    rng));

  // Block 3: Babylonier und Gesetze
  qs.push(createMCQ(T, S, "Wer ließ den Codex Hammurabi aufschreiben?",
    "König Hammurabi von Babylon",
    ["Pharao Ramses II.", "König Cheops", "Alexander der Große"],
    rng));
  qs.push(createMCQ(T, S, "Was war der Codex Hammurabi?",
    "Eines der ältesten schriftlichen Gesetzbücher der Welt",
    ["Ein Rezeptbuch für babylonische Gerichte", "Eine Kriegsstrategie-Schrift", "Ein Kalender für landwirtschaftliche Arbeiten"],
    rng));
  qs.push(createMCQ(T, S, "Nach welchem Prinzip funktionierte der Codex Hammurabi?",
    "Auge um Auge – wer Schaden anrichtete, wurde gleich bestraft",
    ["Wer mehr zahlt, bekommt Recht", "Nur der König entschied über Strafen", "Gesetze galten nur für Reiche"],
    rng));
  qs.push(createMCQ(T, S, "Auf welchem Material war der Codex Hammurabi eingemeißelt?",
    "Auf einer großen schwarzen Steinstele",
    ["Auf Papyrus-Rollen", "Auf Tontafeln", "Auf Holztafeln"],
    rng));
  qs.push(createMCQ(T, S, "In welchem heutigen Land lag Mesopotamien hauptsächlich?",
    "Im heutigen Irak",
    ["Im heutigen Ägypten", "Im heutigen Iran", "Im heutigen Syrien"],
    rng));

  // Block 4: Verschiedene Hochkulturen
  qs.push(createMCQ(T, S, "An welchem Fluss entwickelte sich die Indus-Zivilisation?",
    "Am Fluss Indus",
    ["Am Nil", "Am Euphrat", "Am Ganges"],
    rng));
  qs.push(createMCQ(T, S, "In welchem Gebiet lag die Indus-Zivilisation?",
    "Im heutigen Pakistan und Indien",
    ["In China und Japan", "In Ägypten und Libyen", "In Griechenland und der Türkei"],
    rng));
  qs.push(createMCQ(T, S, "Welche Hochkultur entstand an den Ufern des Gelben Flusses (Huang He)?",
    "Die chinesische Hochkultur",
    ["Die indische Hochkultur", "Die mesopotamische Hochkultur", "Die ägyptische Hochkultur"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein Merkmal entwickelter Hochkulturen?",
    "Arbeitsteilung – verschiedene Berufsgruppen übernehmen unterschiedliche Aufgaben",
    ["Alle Menschen machen die gleiche Arbeit", "Es gibt keine Handwerker", "Alle leben als Jäger und Sammler"],
    rng));
  qs.push(createMCQ(T, S, "Was ermöglichte die Landwirtschaft in Mesopotamien trotz wenig Regen?",
    "Bewässerungskanäle, die Flusswasser aufs Feld leiteten",
    ["Riesige Gewächshäuser aus Stein", "Regentänze der Priester", "Besondere hitzeresistente Pflanzen"],
    rng));

  // Block 5: Städte und Gesellschaft
  qs.push(createMCQ(T, S, "Wie hieß eine der bedeutendsten Städte der Sumerer?",
    "Ur",
    ["Babylon", "Memphis", "Athen"],
    rng));
  qs.push(createMCQ(T, S, "Was war Babylon?",
    "Eine der mächtigsten Städte im alten Mesopotamien",
    ["Eine ägyptische Hafenstadt", "Eine griechische Insel", "Eine römische Kolonie"],
    rng));
  qs.push(createMCQ(T, S, "Welche Berufe gab es in frühen Hochkulturen NICHT?",
    "Flugzeugpiloten",
    ["Handwerker", "Händler", "Schreiber"],
    rng));
  qs.push(createMCQ(T, S, "Wie organisierte sich die Gesellschaft in frühen Hochkulturen?",
    "In Ständen – Priester, Krieger, Handwerker, Bauern",
    ["Alle waren gleichgestellt ohne Unterschiede", "Nur Frauen hatten Macht", "Es gab keine feste Ordnung"],
    rng));
  qs.push(createMCQ(T, S, "Welche Rolle spielten Priester in frühen Hochkulturen?",
    "Sie verwalteten die Tempel, führten Opfer durch und deuteten den Willen der Götter",
    ["Sie bauten die Pyramiden", "Sie führten das Heer in den Krieg", "Sie bauten Schiffe für den Handel"],
    rng));

  // Block 6: Zeitrechnung und Erfindungen
  qs.push(createMCQ(T, S, "Was erfanden die Sumerer, das wir heute noch nutzen?",
    "Die Einteilung der Stunde in 60 Minuten",
    ["Den Wochenkalender mit 7 Tagen", "Das Dezimalsystem", "Das Alphabet mit 26 Buchstaben"],
    rng));
  qs.push(createMCQ(T, S, "Welches Tier nutzten die Mesopotamier als erstes als Haustier für die Landwirtschaft?",
    "Rinder und Schafe",
    ["Pferde und Kamele", "Elefanten und Tiger", "Hunde und Katzen"],
    rng));
  qs.push(createMCQ(T, S, "Was bedeutet 'n. Chr.' bei Jahreszahlen?",
    "nach Christus – nach der Geburt Jesu",
    ["nach Christoph Kolumbus", "nach dem Chaos – eine alte Zeitangabe", "nach China – Ursprung der Zeitmessung"],
    rng));
  qs.push(createMCQ(T, S, "Was bedeutet 'v. Chr.' bei Jahreszahlen?",
    "vor Christus – vor der Geburt Jesu",
    ["vor China – also vor chinesischer Zeitrechnung", "vor dem Chaos", "vor der Christenheit – eine mittelalterliche Bezeichnung"],
    rng));
  qs.push(createMCQ(T, S, "Welches der folgenden Völker lebte in Mesopotamien?",
    "Die Babylonier",
    ["Die Pharaonen", "Die Spartaner", "Die Vandalen"],
    rng));

  // Block 7: Wiederholung und Vertiefung
  qs.push(createMCQ(T, S, "Was ist der 'Fruchtbare Halbmond'?",
    "Eine fruchtbare Region im Nahen Osten, die frühe Zivilisationen ermöglichte",
    ["Ein ägyptisches Fest im Frühling", "Ein Gebirge in Asien", "Eine Mondform, die als heilig galt"],
    rng));
  qs.push(createMCQ(T, S, "Was verstand man unter 'Polytheismus' in frühen Hochkulturen?",
    "Der Glaube an viele Götter",
    ["Der Glaube an einen einzigen Gott", "Der Glaube, dass Menschen Götter werden können", "Kein Glaube an übernatürliche Wesen"],
    rng));
  qs.push(createMCQ(T, S, "Warum galten frühe Könige und Pharaonen oft als Götter oder Göttersöhne?",
    "Es legitimierte ihre Herrschaft – das Volk gehorchte ihnen aus religiöser Ehrfurcht",
    ["Weil sie tatsächlich unsterblich waren", "Weil sie aus dem Himmel gefallen waren", "Weil sie die Schrift erfanden"],
    rng));
  qs.push(createMCQ(T, S, "Welche frühe Erfindung erleichterte den Transport von Waren?",
    "Das Rad",
    ["Das Segel", "Das Papier", "Die Uhr"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein Nomade?",
    "Ein Mensch, der mit seiner Gruppe umherzieht und keinen festen Wohnort hat",
    ["Ein Stadtbewohner mit festem Haus", "Ein Händler, der auf dem Fluss reist", "Ein Priester im Tempel"],
    rng));
  qs.push(createMCQ(T, S, "Was unterschied sesshafte Menschen von Nomaden?",
    "Sesshafte lebten dauerhaft an einem Ort und betrieben Landwirtschaft",
    ["Sesshafte zogen mit Tieren durch die Welt", "Sesshafte lebten ausschließlich von der Jagd", "Nomaden bauten größere Städte"],
    rng));
  qs.push(createMCQ(T, S, "Welcher Fluss war für das alte Ägypten lebensnotwendig?",
    "Der Nil",
    ["Der Euphrat", "Der Tigris", "Der Indus"],
    rng));
  qs.push(createMCQ(T, S, "Wo liegt der Fluss Nil?",
    "In Nordafrika",
    ["In Asien", "In Europa", "In Südamerika"],
    rng));
  qs.push(createMCQ(T, S, "Was war eine wichtige Folge der Nilüberschwemmung für die Ägypter?",
    "Der Nil hinterließ fruchtbaren Schlamm, der gute Ernten ermöglichte",
    ["Der Nil spülte die Dörfer weg und machte sie obdachlos", "Der Nil brachte frisches Trinkwasser aus den Bergen", "Die Ägypter mussten jedes Jahr flüchten"],
    rng));
  qs.push(createMCQ(T, S, "Welche der folgenden Erfindungen stammt NICHT aus der Antike?",
    "Das Internet",
    ["Die Schrift", "Das Rad", "Bewässerungskanäle"],
    rng));
  qs.push(createMCQ(T, S, "Welches Material nutzten die Ägypter für ihre Schriften?",
    "Papyrus – ein Schreibmaterial aus Schilfpflanzen",
    ["Ton – getrocknet in der Wüste", "Holz – aus Zedern des Libanon", "Leder – von geopferten Tieren"],
    rng));
  qs.push(createMCQ(T, S, "Was war die wichtigste Voraussetzung für das Entstehen einer Hochkultur?",
    "Sesshaftigkeit und Landwirtschaft als verlässliche Nahrungsgrundlage",
    ["Große Wälder als Baumaterial", "Ein mildes Klima ohne Winter", "Viele Kriege gegen Nachbarvölker"],
    rng));
  qs.push(createMCQ(T, S, "Was ist Archäologie?",
    "Die Wissenschaft, die vergangene Kulturen durch ausgegrabene Funde erforscht",
    ["Die Lehre der alten Sprachen", "Die Beschreibung vergangener Weltereignisse", "Die Kunst des Kartenlesen"],
    rng));
  qs.push(createMCQ(T, S, "Welche Erfindung der Sumerer nutzen wir im Alltag heute noch?",
    "Das Rad",
    ["Den Buchdruck", "Das Feuer", "Das Alphabet"],
    rng));
  qs.push(createMCQ(T, S, "Was ist eine Hochkultur im Gegensatz zu einer Stammesgesellschaft?",
    "Eine Hochkultur hat Schrift, Städte, arbeitsteilige Berufe und eine zentrale Regierung",
    ["Eine Hochkultur lebt ausschließlich von der Jagd", "Eine Hochkultur hat keine Religion", "Eine Stammesgesellschaft hat immer mehr Einwohner"],
    rng));

  return shuffle(qs, rng);
}

// ─── GENERATOR 3: GRIECHENLAND ───────────────────────────────────────────────

function generateGriechenland(): CurriculumMCQ[] {
  const rng = mulberry32(1003);
  const qs: CurriculumMCQ[] = [];
  const T = "Geschichte";
  const S = "griechenland";

  // Block 1: Polis
  qs.push(createMCQ(T, S, "Was war eine 'Polis' im antiken Griechenland?",
    "Ein Stadtstaat mit eigenem Gebiet und eigener Regierung",
    ["Ein griechisches Dorf ohne Stadtmauer", "Ein Hafen am Mittelmeer", "Ein militärisches Lager der Griechen"],
    rng));
  qs.push(createMCQ(T, S, "Wie hieß die bekannteste griechische Polis, die für ihre Demokratie bekannt ist?",
    "Athen",
    ["Sparta", "Korinth", "Troja"],
    rng));
  qs.push(createMCQ(T, S, "Wofür war die Polis Sparta bekannt?",
    "Für ihre strenge Krieger-Ausbildung und ihr Militär",
    ["Für ihre Demokratie und Philosophen", "Für ihre Handelsflotte", "Für ihre Pyramiden"],
    rng));
  qs.push(createMCQ(T, S, "Was war die Akropolis in Athen?",
    "Eine erhöhte Burganlage mit Tempeln, darunter der Parthenon",
    ["Ein unterirdischer Palast des Königs", "Ein großes Stadion für Sportwettkämpfe", "Ein Handelshafen"],
    rng));
  qs.push(createMCQ(T, S, "Welchem Gott war der Parthenon auf der Akropolis geweiht?",
    "Athena – der Göttin der Weisheit",
    ["Zeus – dem Göttervater", "Poseidon – dem Meeresgott", "Ares – dem Kriegsgott"],
    rng));

  // Block 2: Demokratie
  qs.push(createMCQ(T, S, "Was bedeutet das Wort 'Demokratie'?",
    "Herrschaft des Volkes (griechisch: demos = Volk, kratia = Herrschaft)",
    ["Herrschaft der Götter", "Herrschaft des Königs", "Herrschaft der Priester"],
    rng));
  qs.push(createMCQ(T, S, "Wer gilt als Begründer der Demokratie in Athen?",
    "Kleisthenes (um 508 v. Chr.)",
    ["Perikles", "Sokrates", "Alexander der Große"],
    rng));
  qs.push(createMCQ(T, S, "Wer durfte in der athenischen Demokratie abstimmen?",
    "Nur männliche Bürger Athensbürger – Frauen, Sklaven und Fremde nicht",
    ["Alle Menschen in Athen", "Nur Priester und Soldaten", "Nur Reiche und Adlige"],
    rng));
  qs.push(createMCQ(T, S, "Wer war Perikles?",
    "Ein wichtiger Staatsmann Athens, der die Demokratie ausbaute (5. Jh. v. Chr.)",
    ["Ein Philosoph, der Sokrates unterrichtete", "Ein Feldherr Spartas", "Der erste König Griechenlands"],
    rng));
  qs.push(createMCQ(T, S, "Was war die 'Volksversammlung' (Ekklesia) in Athen?",
    "Das Versammlungsort wo Bürger über Gesetze und politische Fragen abstimmten",
    ["Das Gericht, das über Verbrecher urteilte", "Die Schule für Philosophen", "Der Marktplatz für Händler"],
    rng));

  // Block 3: Philosophen
  qs.push(createMCQ(T, S, "Wer war Sokrates?",
    "Ein berühmter griechischer Philosoph (469–399 v. Chr.), der durch Fragen lehrte",
    ["Ein athenischer Feldherr im Perserkrieg", "Der Gründer der olympischen Spiele", "Ein Dichter griechischer Mythen"],
    rng));
  qs.push(createMCQ(T, S, "Wie kam Sokrates zu Tode?",
    "Er wurde zum Tod durch den Giftbecher (Schierling) verurteilt",
    ["Er starb im Krieg gegen Sparta", "Er wurde im Tempel ermordet", "Er ertrank im Mittelmeer"],
    rng));
  qs.push(createMCQ(T, S, "Wer war ein Schüler des Sokrates?",
    "Platon",
    ["Aristoteles", "Alexander der Große", "Hippokrates"],
    rng));
  qs.push(createMCQ(T, S, "Was gründete Platon in Athen?",
    "Die Akademie – eine philosophische Schule",
    ["Das erste Theater Griechenlands", "Den Athener Senat", "Das olympische Stadion"],
    rng));
  qs.push(createMCQ(T, S, "Wer war Aristoteles?",
    "Schüler Platons und Lehrer Alexanders des Großen – beschäftigte sich mit fast allem Wissen",
    ["Gründer der athenischen Demokratie", "Dichter der Ilias und Odyssee", "Arzt und Vater der Medizin"],
    rng));

  // Block 4: Olympische Spiele
  qs.push(createMCQ(T, S, "Wo fanden die antiken Olympischen Spiele statt?",
    "In Olympia auf der Halbinsel Peloponnes",
    ["In Athen auf der Akropolis", "In Sparta im Amphitheater", "In Delphi am Orakel"],
    rng));
  qs.push(createMCQ(T, S, "Zu Ehren welches Gottes wurden die Olympischen Spiele abgehalten?",
    "Zeus",
    ["Athena", "Apollo", "Poseidon"],
    rng));
  qs.push(createMCQ(T, S, "Alle wie viele Jahre fanden die antiken Olympischen Spiele statt?",
    "Alle vier Jahre",
    ["Alle zwei Jahre", "Jedes Jahr", "Alle zehn Jahre"],
    rng));
  qs.push(createMCQ(T, S, "Was erhielt ein Sieger bei den antiken Olympischen Spielen?",
    "Einen Olivenkranz",
    ["Eine Goldmedaille", "Einen Lorbeerkranz", "Eine silberne Schale"],
    rng));
  qs.push(createMCQ(T, S, "Was war besonderes an den Olympischen Spielen der Antike?",
    "Während der Spiele herrschte ein allgemeiner Waffenstillstand zwischen den Poleis",
    ["Frauen und Männer kämpften gemeinsam", "Nur Göttersöhne durften teilnehmen", "Die Sieger wurden König"],
    rng));

  // Block 5: Götter
  qs.push(createMCQ(T, S, "Wo sollen die griechischen Götter nach dem Glauben der Griechen gelebt haben?",
    "Auf dem Berg Olymp",
    ["Im Meer unter den Wellen", "In Höhlen unter der Erde", "In den Tempeln der Städte"],
    rng));
  qs.push(createMCQ(T, S, "Wer war Zeus in der griechischen Mythologie?",
    "Der Göttervater und Herrscher über alle Götter",
    ["Der Gott des Meeres", "Der Gott des Krieges", "Der Gott der Unterwelt"],
    rng));
  qs.push(createMCQ(T, S, "Wer war Poseidon?",
    "Der Gott des Meeres",
    ["Der Gott des Windes", "Der Gott der Unterwelt", "Der Göttervater"],
    rng));
  qs.push(createMCQ(T, S, "Wer war Hades?",
    "Der Gott der Unterwelt im griechischen Glauben",
    ["Der Göttervater", "Der Gott des Krieges", "Der Gott des Feuers"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein Mythos?",
    "Eine Erzählung über Götter und Helden, die Fragen über die Welt erklären soll",
    ["Ein historisches Dokument über echte Ereignisse", "Ein Gesetz im alten Griechenland", "Ein Theaterstück über das Leben Alexanders"],
    rng));

  // Block 6: Trojanischer Krieg und Literatur
  qs.push(createMCQ(T, S, "Was erzählt die Ilias von Homer?",
    "Den Krieg der Griechen gegen Troja (Trojanischer Krieg)",
    ["Die Irrfahrten des Odysseus", "Das Leben des Alexander des Großen", "Den Kampf gegen die Perser"],
    rng));
  qs.push(createMCQ(T, S, "Was erzählt die Odyssee von Homer?",
    "Die abenteuerliche Heimreise des Odysseus nach dem Trojanischen Krieg",
    ["Den Angriff auf Troja mit dem Trojanischen Pferd", "Das Leben in Sparta", "Die Gründung Roms"],
    rng));
  qs.push(createMCQ(T, S, "Was war das Trojanische Pferd?",
    "Ein riesiges hölzernes Pferd, in dem sich griechische Soldaten versteckten, um Troja zu erobern",
    ["Ein bronzenes Reiterdenkmal für den Sieg über Troja", "Ein religiöses Symbol der Griechen", "Eine Kriegsmaschine zum Einrammen von Toren"],
    rng));
  qs.push(createMCQ(T, S, "Wo soll die Stadt Troja gelegen haben?",
    "In der heutigen Türkei (Kleinasien)",
    ["In Griechenland nahe Athen", "In Ägypten am Nil", "Auf der Insel Kreta"],
    rng));

  // Block 7: Alexander der Große
  qs.push(createMCQ(T, S, "Wer war Alexander der Große?",
    "Ein mazedonischer König (356–323 v. Chr.), der ein riesiges Reich von Griechenland bis Indien eroberte",
    ["Ein athenischer Philosoph", "Ein spartanischer Feldherr", "Ein ägyptischer Pharao"],
    rng));
  qs.push(createMCQ(T, S, "Welcher Philosoph war der Lehrer Alexanders des Großen?",
    "Aristoteles",
    ["Sokrates", "Platon", "Homer"],
    rng));
  qs.push(createMCQ(T, S, "Welche Stadt gründete Alexander in Ägypten?",
    "Alexandria",
    ["Kairo", "Memphis", "Luxor"],
    rng));
  qs.push(createMCQ(T, S, "Was war die Polis Makedonien (Mazedonien), von der Alexander kam?",
    "Ein Königreich im Norden Griechenlands",
    ["Eine Kolonie Athens im Osten", "Eine spartanische Provinz", "Eine Insel im Ägäischen Meer"],
    rng));

  // Block 8: Theater und Kultur
  qs.push(createMCQ(T, S, "Was sind 'Tragödien' im griechischen Theater?",
    "Traurige Theaterstücke mit ernstem, oft tragischem Ausgang",
    ["Lustige Theaterstücke mit glücklichem Ende", "Geschichten über Götter ohne Menschen", "Theaterstücke über Sportsieger"],
    rng));
  qs.push(createMCQ(T, S, "Was sind 'Komödien' im griechischen Theater?",
    "Lustige Theaterstücke, die oft über Menschen und ihre Schwächen lachten",
    ["Traurige Stücke über den Tod", "Religöse Zeremonien mit Musik", "Sportvorführungen im Theater"],
    rng));
  qs.push(createMCQ(T, S, "Welche Form hatte ein typisches griechisches Theater?",
    "Ein halbrunder Zuschauerraum an einem Hang mit einer Bühne unten",
    ["Ein rechteckiger Raum mit festen Sitzen", "Ein Amphitheater wie in Rom", "Eine runde Arena wie ein Stadion"],
    rng));
  qs.push(createMCQ(T, S, "Wer war Hippokrates?",
    "Ein griechischer Arzt, der die Medizin als Wissenschaft begründete",
    ["Ein Philosoph aus Athen", "Ein Feldherr Alexanders", "Ein Dichter der Odyssee"],
    rng));
  qs.push(createMCQ(T, S, "Was ist das 'Orakel von Delphi'?",
    "Eine Priesterin (Pythia), die im Namen des Gottes Apollo Prophezeiungen verkündete",
    ["Das Hauptgericht Athens für Kriminelle", "Ein heiliges Buch aller griechischen Götter", "Eine Sternwarte für Astronomen"],
    rng));
  qs.push(createMCQ(T, S, "Wie viele Stadtstaaten (Poleis) gab es ungefähr im antiken Griechenland?",
    "Mehrere hundert",
    ["Genau 12", "Ungefähr 30", "Nur 3 bedeutende"],
    rng));
  qs.push(createMCQ(T, S, "Was ist das Gymnasium im antiken Griechenland?",
    "Eine Schule und Übungsanlage für Sport und Bildung",
    ["Ein Sportstadion für olympische Wettkämpfe", "Ein Marktplatz für Händler", "Ein Tempel für Götterverehrung"],
    rng));
  qs.push(createMCQ(T, S, "Was ist eine Kolonie im antiken Griechenland?",
    "Eine von Griechen neu besiedelte Stadt außerhalb Griechenlands (z.B. am Schwarzen Meer oder Süditalien)",
    ["Ein Dorf außerhalb der Stadtmauer", "Ein militärisches Lager einer Polis", "Ein Tempel in der Wildnis"],
    rng));
  qs.push(createMCQ(T, S, "Was bedeutet 'Marathon' historisch?",
    "Ein Ort in Griechenland, wo die Athener die Perser besiegten (490 v. Chr.) – ein Bote lief die Strecke nach Athen",
    ["Der Name des ersten Olympiasiegers im Weitsprung", "Ein griechisches Fest zu Ehren des Ares", "Ein Gebirge in Nordgriechenland"],
    rng));
  qs.push(createMCQ(T, S, "Was ist das bedeutendste Bauwerk auf der Athener Akropolis?",
    "Der Parthenon – ein Tempel der Göttin Athena",
    ["Das Theater des Dionysos", "Der Tempel des Zeus", "Das Rathaus der Volksversammlung"],
    rng));
  qs.push(createMCQ(T, S, "Welche griechische Polis war für ihr härtestes Erziehungssystem berühmt?",
    "Sparta",
    ["Athen", "Korinth", "Theben"],
    rng));
  qs.push(createMCQ(T, S, "Was war die 'Agora' in einer griechischen Polis?",
    "Der öffentliche Markt- und Versammlungsplatz – Zentrum des politischen und wirtschaftlichen Lebens",
    ["Der heilige Bezirk mit Tempeln", "Das Sportzentrum für Olympiatraining", "Das Gericht für Straftaten"],
    rng));

  return shuffle(qs, rng);
}

// ─── DATA: ÄGYPTEN ───────────────────────────────────────────────────────────

const PHARAONEN = [
  { name: "Cheops", bekannt: "ließ die größte Pyramide von Gizeh bauen", zeit: "um 2560 v. Chr." },
  { name: "Hatschepsut", bekannt: "eine der wenigen weiblichen Pharaonen", zeit: "um 1500 v. Chr." },
  { name: "Tutanchamun", bekannt: "junger Pharao, sein Grab wurde 1922 entdeckt", zeit: "um 1330 v. Chr." },
  { name: "Ramses II.", bekannt: "einer der mächtigsten Pharaonen, regierte 66 Jahre", zeit: "um 1280 v. Chr." },
];

const AEGYPTEN_GOETTER = [
  { name: "Ra", bereich: "Sonnengott", aussehen: "Menschenkörper mit Falkenkopf und Sonnenscheibe" },
  { name: "Osiris", bereich: "Gott der Unterwelt und des Todes", aussehen: "grünhäutige Mumie mit Krone" },
  { name: "Isis", bereich: "Göttin der Magie und Mutterschaft", aussehen: "Frau mit Kuhgehörnter Krone" },
  { name: "Anubis", bereich: "Gott der Totenriten", aussehen: "Menschenkörper mit Schakalkopf" },
  { name: "Horus", bereich: "Himmelsgott und Schutz des Pharaos", aussehen: "Menschenkörper mit Falkenkopf" },
];

// ─── GENERATOR 2: ÄGYPTEN ────────────────────────────────────────────────────

function generateAegypten(): CurriculumMCQ[] {
  const rng = mulberry32(1002);
  const qs: CurriculumMCQ[] = [];
  const T = "Geschichte";
  const S = "aegypten";

  // Block 1: Nil und Landwirtschaft
  qs.push(createMCQ(T, S, "Was machte den Nil so wichtig für die alten Ägypter?",
    "Er lieferte Wasser und fruchtbaren Schlamm für die Landwirtschaft",
    ["Er war ein guter Ort zum Verstecken vor Feinden", "Er lieferte Fische als einzige Nahrung", "Er trennte Ägypten von anderen Ländern"],
    rng));
  qs.push(createMCQ(T, S, "Wie nannten die alten Ägypter ihr fruchtbares Land am Nil?",
    "Das Schwarze Land (Kemet)",
    ["Das Goldene Land", "Das Heilige Land", "Das Grüne Land"],
    rng));
  qs.push(createMCQ(T, S, "Was ist das Nildelta?",
    "Die fächerförmige Mündung des Nils ins Mittelmeer",
    ["Ein Gebirge in der Sahara", "Eine Oase mitten in der Wüste", "Ein Stausee am Oberlauf des Nils"],
    rng));
  qs.push(createMCQ(T, S, "Was bauten die alten Ägypter, um das Nilwasser auf ihre Felder zu leiten?",
    "Bewässerungskanäle",
    ["Dämme aus Stein", "Brücken über den Nil", "Windmühlen"],
    rng));
  qs.push(createMCQ(T, S, "Warum überschwemmte der Nil regelmäßig seine Ufer?",
    "Durch Regenfälle und Schneeschmelze in den Gebirgen Afrikas",
    ["Durch Stürme im Mittelmeer", "Durch heilige Zeremonien der Priester", "Durch Verdunstung in der Wüste"],
    rng));

  // Block 2: Pharaonen
  qs.push(createMCQ(T, S, "Wie hieß der Herrscher im alten Ägypten?",
    "Pharao",
    ["Kaiser", "König", "Sultan"],
    rng));
  qs.push(createMCQ(T, S, "Welcher Pharao ließ die große Pyramide von Gizeh errichten?",
    "Cheops",
    ["Ramses II.", "Tutanchamun", "Hatschepsut"],
    rng));
  qs.push(createMCQ(T, S, "Was war besonders an Pharaonin Hatschepsut?",
    "Sie war eine der wenigen Frauen, die als Pharao herrschte",
    ["Sie baute die größte Pyramide Ägyptens", "Sie entdeckte die Hieroglyphen-Schrift", "Sie besiegte die Römer"],
    rng));
  qs.push(createMCQ(T, S, "Wer entdeckte 1922 das Grab des Tutanchamun?",
    "Der britische Archäologe Howard Carter",
    ["Der Franzose Napoleon Bonaparte", "Der Deutsche Heinrich Schliemann", "Der Ägypter Champollion"],
    rng));
  qs.push(createMCQ(T, S, "Warum ist Tutanchamuns Grab so berühmt?",
    "Es war nahezu unberaubt und enthielt reiche Schätze",
    ["Es war das größte Pharaonengrab Ägyptens", "Es wurde auf einer Insel im Nil gefunden", "Es enthielt die ältesten Hieroglyphen"],
    rng));

  // Block 3: Pyramiden und Sphinx
  qs.push(createMCQ(T, S, "Wo befinden sich die drei berühmten Pyramiden von Gizeh?",
    "In der Nähe von Kairo in Ägypten",
    ["In der Sahara nahe der Grenze zum Sudan", "Am Roten Meer", "In der Nähe von Luxor"],
    rng));
  qs.push(createMCQ(T, S, "Wozu dienten die Pyramiden im alten Ägypten?",
    "Als Grabstätten für die Pharaonen",
    ["Als Tempel für die Götter", "Als Festungen gegen Feinde", "Als Kornspeicher für schlechte Erntejahre"],
    rng));
  qs.push(createMCQ(T, S, "Was ist die Sphinx von Gizeh?",
    "Eine riesige Steinfigur mit Menschenkopf und Löwenkörper",
    ["Eine Pyramide mit besonderem Eingang", "Ein Obelisk mit Hieroglyphen", "Eine Statue eines ägyptischen Gottes"],
    rng));
  qs.push(createMCQ(T, S, "Wie nannte man die innere Kammer einer Pyramide, wo der Pharao ruhte?",
    "Grabkammer",
    ["Götterraum", "Thronsaal", "Schatzhaus"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein Obelisk?",
    "Ein hoher, schlanker Steinpfeiler mit pyramidenförmiger Spitze",
    ["Eine Art Pyramide für einfache Bürger", "Ein Tempeltor aus zwei Steinblöcken", "Eine Art Brunnen im Tempelhof"],
    rng));

  // Block 4: Mumifizierung
  qs.push(createMCQ(T, S, "Was ist eine Mumie?",
    "Ein konservierter Leichnam, der nicht verwest",
    ["Eine Statue aus Stein im Tempel", "Eine Schriftrolle mit Totensprüchen", "Ein Grabstein mit Inschrift"],
    rng));
  qs.push(createMCQ(T, S, "Warum mumifizierten die alten Ägypter ihre Toten?",
    "Sie glaubten, der Körper werde für das Leben nach dem Tod gebraucht",
    ["Um die Toten vor Insekten zu schützen", "Als Strafe für schlechte Pharaonen", "Weil sie kein Holz für Holzsärge hatten"],
    rng));
  qs.push(createMCQ(T, S, "In was wurde ein mumifizierter Körper gewickelt?",
    "In Leinenbinden",
    ["In Papyrus-Streifen", "In Tierfellen", "In Baumwolle"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein Sarkophag?",
    "Ein reich verzierter Steinsarg im alten Ägypten",
    ["Eine Grabkammer in der Pyramide", "Ein Behälter für Mumien-Organe", "Ein Buch über das Leben nach dem Tod",],
    rng));
  qs.push(createMCQ(T, S, "Welches Organ ließen die Ägypter als einziges im mumifizierten Körper?",
    "Das Herz",
    ["Das Gehirn", "Die Lunge", "Die Leber"],
    rng));

  // Block 5: Hieroglyphen
  qs.push(createMCQ(T, S, "Was sind Hieroglyphen?",
    "Die Bilderschrift der alten Ägypter",
    ["Die Geheimschrift der Priester Mesopotamiens", "Chinesische Schriftzeichen", "Zeichnungen in Höhlen aus der Steinzeit"],
    rng));
  qs.push(createMCQ(T, S, "Wo findet man Hieroglyphen häufig?",
    "In Tempeln und Grabkammern sowie auf Papyrus",
    ["In griechischen Amphitheatern", "In Bibliotheken Babylons", "Auf Schildern an Handelsstraßen"],
    rng));
  qs.push(createMCQ(T, S, "Was ist der Rosetta-Stein?",
    "Ein Stein mit einem Text in drei Schriften, der half Hieroglyphen zu entschlüsseln",
    ["Der erste Stein der Großen Pyramide", "Ein heiliger Opferstein aus Tempeln", "Ein Grenzstein zwischen Ober- und Unterägypten"],
    rng));
  qs.push(createMCQ(T, S, "Wer entschlüsselte 1822 die Hieroglyphen mit Hilfe des Rosetta-Steins?",
    "Der Franzose Jean-François Champollion",
    ["Der Engländer Howard Carter", "Der Deutsche Heinrich Schliemann", "Der Ägypter Ramses III."],
    rng));

  // Block 6: Götter
  qs.push(createMCQ(T, S, "Wer war Ra im alten Ägypten?",
    "Der Sonnengott",
    ["Der Flussgott des Nils", "Der Gott der Toten", "Der Gott des Windes"],
    rng));
  qs.push(createMCQ(T, S, "Welcher ägyptische Gott hatte einen Schakalkopf?",
    "Anubis",
    ["Osiris", "Horus", "Ra"],
    rng));
  qs.push(createMCQ(T, S, "Wer war Osiris im alten Ägypten?",
    "Der Gott der Unterwelt und des Totenreichs",
    ["Der Sonnengott", "Der Flussgott", "Der Kriegsgott"],
    rng));
  qs.push(createMCQ(T, S, "Welcher ägyptische Gott hatte einen Falkenkopf und schützte den Pharao?",
    "Horus",
    ["Anubis", "Osiris", "Seth"],
    rng));
  qs.push(createMCQ(T, S, "Was symbolisierte das Ankh-Symbol im alten Ägypten?",
    "Leben und Unsterblichkeit",
    ["Den Tod und die Unterwelt", "Die Macht des Pharaos", "Die Stärke des Nils"],
    rng));

  // Block 7: Gesellschaft und Alltag
  qs.push(createMCQ(T, S, "In welche zwei Teile war Ägypten aufgeteilt?",
    "Ober- und Unterägypten",
    ["Nord- und Südägypten", "Ost- und Westägypten", "Wüsten- und Nilägypten"],
    rng));
  qs.push(createMCQ(T, S, "Was trug der Pharao als Zeichen seiner Herrschaft über beide Teile Ägyptens?",
    "Eine Doppelkrone aus der roten und weißen Krone",
    ["Ein goldenes Zepter und einen Schild", "Einen Falkenkopf-Helm", "Eine blaue Krone mit Federn"],
    rng));
  qs.push(createMCQ(T, S, "Was war der Beruf eines Schreibers im alten Ägypten?",
    "Er schrieb Texte und Aufzeichnungen auf Papyrus – ein hochangesehener Beruf",
    ["Er schrieb Gesetze auf Tontafeln", "Er malte Fresken in den Tempeln", "Er kopierte Hieroglyphen in den Pyramiden"],
    rng));
  qs.push(createMCQ(T, S, "Was pflegten die alten Ägypter intensiv zu nutzen, was andere Kulturen nicht hatten?",
    "Schminke und Augenmakeup (Kohl) – für Männer und Frauen",
    ["Parfüm aus Rosen", "Spiegel aus poliertem Silber", "Seife aus Olivenöl"],
    rng));
  qs.push(createMCQ(T, S, "Wie hießen die kleinen Figürchen, die den Toten ins Grab mitgegeben wurden, um ihm im Jenseits zu dienen?",
    "Uschebti",
    ["Skarabäen", "Kanopen", "Obelisken"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein Skarabäus im alten Ägypten?",
    "Ein heiliger Mistkäfer, Symbol der Auferstehung",
    ["Eine Art Pyramide für Tiere", "Ein Edelstein, der Schutz bringt", "Eine Hieroglyphe für das Wort König"],
    rng));
  qs.push(createMCQ(T, S, "Wozu dienten Kanopen-Krüge?",
    "Zur Aufbewahrung der Organe des Verstorbenen bei der Mumifizierung",
    ["Als Trinkgefäße bei religiösen Festen", "Als Behälter für Nil-Schlamm", "Als Opfergefäße im Tempel"],
    rng));
  qs.push(createMCQ(T, S, "Welcher Text sollte dem Verstorbenen im Jenseits helfen?",
    "Das Totenbuch – mit Zaubersprüchen für die Reise ins Jenseits",
    ["Der Codex Hammurabi", "Die Ilias", "Die Zwölftafelgesetze"],
    rng));
  qs.push(createMCQ(T, S, "Wann ungefähr begann das alte Ägypten als Hochkultur?",
    "Um 3100 v. Chr.",
    ["Um 500 v. Chr.", "Um 100 n. Chr.", "Um 1000 v. Chr."],
    rng));
  qs.push(createMCQ(T, S, "Womit schrieben ägyptische Schreiber auf Papyrus?",
    "Mit einem Schreibstift (Binse/Kalamus), getaucht in Tinte",
    ["Mit einer Feder vom Falken", "Mit einem Meißel aus Bronze", "Mit einem Holzstift und Wachs"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein Tempel in Ägypten hauptsächlich?",
    "Das Haus eines Gottes, in dem Priester Rituale durchführten",
    ["Eine Begräbnisstätte für Pharaonen", "Ein Versammlungshaus für das Volk", "Ein Marktplatz für Händler"],
    rng));
  qs.push(createMCQ(T, S, "Was ist Luxor (Theben) im alten Ägypten?",
    "Eine bedeutende Stadt im Süden Ägyptens mit dem Tempel von Karnak",
    ["Die Hauptstadt des alten Ägyptens im Norden", "Die Stadt, wo die Pyramiden von Gizeh stehen", "Ein Hafen am Roten Meer"],
    rng));
  qs.push(createMCQ(T, S, "Wie nennt man den spitzen Stein-Pfeiler auf der Spitze eines Obelisken?",
    "Pyramidion – vergoldet als Symbol der Sonnenstrahlen",
    ["Skarabäus", "Ankh", "Djed"],
    rng));
  qs.push(createMCQ(T, S, "Was ist das 'Tal der Könige'?",
    "Ein Tal nahe Luxor, wo viele Pharaonen in Felsengräbern begraben wurden",
    ["Das fruchtbare Delta am Nilmündung", "Die Wüste westlich des Nils", "Ein heiliger See bei Gizeh"],
    rng));
  qs.push(createMCQ(T, S, "Welcher Pharao ist für die Mumifizierung mit dem 'goldenen Sarg' berühmt?",
    "Tutanchamun",
    ["Cheops", "Ramses II.", "Hatschepsut"],
    rng));
  qs.push(createMCQ(T, S, "Was ist das Papyrusrohr und wie wurde es genutzt?",
    "Eine Schilfpflanze am Nil – aus ihr wurden Schreibmaterial, Boote und Matten hergestellt",
    ["Eine Heilpflanze gegen Krankheiten", "Ein Nahrungsmittel der armen Bevölkerung", "Ein Baumaterial für Tempel"],
    rng));

  return shuffle(qs, rng);
}

// ─── GENERATOR 4: RÖMISCHE REPUBLIK ─────────────────────────────────────────

function generateRomRepublik(): CurriculumMCQ[] {
  const rng = mulberry32(1004);
  const qs: CurriculumMCQ[] = [];
  const T = "Geschichte";
  const S = "rom_republik";

  // Block 1: Gründung
  qs.push(createMCQ(T, S, "Wer soll der Sage nach Rom gegründet haben?",
    "Romulus und Remus",
    ["Julius Caesar und Brutus", "Romulus und Cäsar", "Augustus und Vergil"],
    rng));
  qs.push(createMCQ(T, S, "Wann wurde Rom der Sage nach gegründet?",
    "753 v. Chr.",
    ["476 v. Chr.", "27 v. Chr.", "100 n. Chr."],
    rng));
  qs.push(createMCQ(T, S, "Was ist die Sage von Romulus und Remus?",
    "Zwei Brüder wurden als Babies ausgesetzt und von einer Wölfin gesäugt – Romulus gründete später Rom",
    ["Zwei Brüder, die gemeinsam das erste Gesetz Roms schrieben", "Zwei Göttersöhne, die einen Tempel für Jupiter bauten", "Zwei Feldherren, die die Kelten besiegten"],
    rng));
  qs.push(createMCQ(T, S, "An welchem Fluss wurde Rom gegründet?",
    "Am Tiber",
    ["Am Rhein", "Am Po", "Am Arno"],
    rng));
  qs.push(createMCQ(T, S, "In welchem Land liegt das heutige Rom?",
    "In Italien",
    ["In Griechenland", "In der Türkei", "In Spanien"],
    rng));

  // Block 2: Senat und Konsuln
  qs.push(createMCQ(T, S, "Was war der Senat im alten Rom?",
    "Das wichtigste Beratungs- und Beschlussgremium der römischen Republik",
    ["Das Militärgericht für Verbrecher", "Eine Art Volksversammlung für alle Bürger", "Eine religiöse Gemeinschaft der Priester"],
    rng));
  qs.push(createMCQ(T, S, "Wer waren die Konsuln in der Römischen Republik?",
    "Zwei gleichberechtigte Amtsträger, die die Republik ein Jahr lang gemeinsam führten",
    ["Die Anführer des Senats auf Lebenszeit", "Die obersten Priester Roms", "Die Generäle, die im Krieg kommandierten"],
    rng));
  qs.push(createMCQ(T, S, "Warum gab es in Rom zwei Konsuln statt eines Königs?",
    "Um zu verhindern, dass eine Person zu viel Macht bekommt",
    ["Weil die Götter zwei Herrscher forderten", "Weil ein Konsul zu viel Arbeit hatte", "Weil es zwei wichtige Städte Roms gab"],
    rng));
  qs.push(createMCQ(T, S, "Was bedeutet 'Republik' auf Latein?",
    "Res publica – die öffentliche Sache (Gemeinwesen)",
    ["Eine Regierung ohne König", "Ein Land mit freien Bürgern", "Ein Stadtrat der Reichen"],
    rng));
  qs.push(createMCQ(T, S, "Wie lange dauerte die Römische Republik?",
    "Von etwa 509 v. Chr. bis 27 v. Chr.",
    ["Von 753 v. Chr. bis 476 n. Chr.", "Von 500 v. Chr. bis 100 n. Chr.", "Von 100 v. Chr. bis 400 n. Chr."],
    rng));

  // Block 3: Patrizier und Plebejer
  qs.push(createMCQ(T, S, "Wer waren die Patrizier im alten Rom?",
    "Der Adel – die reichen und einflussreichen Familien Roms",
    ["Arme Bürger ohne politische Rechte", "Soldaten der Legionen", "Priester des Jupiter-Tempels"],
    rng));
  qs.push(createMCQ(T, S, "Wer waren die Plebejer im alten Rom?",
    "Das einfache Volk – Bauern, Handwerker und Händler",
    ["Adlige Familien mit Landbesitz", "Ausländische Händler in Rom", "Freigelassene Sklaven"],
    rng));
  qs.push(createMCQ(T, S, "Was ist der Unterschied zwischen Patriziern und Plebejern?",
    "Patrizier hatten anfangs mehr Rechte und konnten hohe Ämter bekleiden – Plebejer kämpften um diese Rechte",
    ["Patrizier waren Soldaten, Plebejer Priester", "Patrizier lebten in Städten, Plebejer auf dem Land", "Es gab keinen Unterschied – beide hatten gleiche Rechte"],
    rng));
  qs.push(createMCQ(T, S, "Was sind die Zwölftafelgesetze?",
    "Die ersten schriftlich festgelegten Gesetze Roms (um 450 v. Chr.)",
    ["Die Gesetze Alexanders des Großen für Rom", "Die Regeln für die Gladiatorenkämpfe", "Die Steuertabellen des Senats"],
    rng));

  // Block 4: Punische Kriege
  qs.push(createMCQ(T, S, "Gegen welche Stadt kämpfte Rom in den Punischen Kriegen?",
    "Karthago (in Nordafrika, heute Tunesien)",
    ["Alexandria in Ägypten", "Athen in Griechenland", "Persepolis in Persien"],
    rng));
  qs.push(createMCQ(T, S, "Wer war Hannibal?",
    "Ein karthagischer Feldherr, der mit Elefanten über die Alpen nach Italien zog",
    ["Ein römischer Diktator im 1. Jh. v. Chr.", "Ein griechischer Philosoph", "Ein ägyptischer Pharao"],
    rng));
  qs.push(createMCQ(T, S, "Was war das Besondere an Hannibals Alpenüberquerung?",
    "Er überquerte die Alpen mit Kriegselefanten – etwas Unerhörtes für die Römer",
    ["Er überquerte die Alpen im Winter mit 100.000 Mann", "Er grub einen Tunnel durch die Alpen", "Er flog mit Kriegsadlern über die Alpen"],
    rng));
  qs.push(createMCQ(T, S, "Wie endeten die Punischen Kriege?",
    "Rom siegte – Karthago wurde 146 v. Chr. vollständig zerstört",
    ["Karthago siegte und Rom zahlte Tribut", "Es gab einen Friedensvertrag mit gleichen Rechten", "Karthago wurde eine römische Verbündete"],
    rng));

  // Block 5: Julius Caesar
  qs.push(createMCQ(T, S, "Wer war Julius Caesar?",
    "Ein mächtiger römischer Feldherr und Politiker (100–44 v. Chr.)",
    ["Der erste Kaiser Roms", "Ein griechischer Feldherr", "Ein karthagischer General"],
    rng));
  qs.push(createMCQ(T, S, "Was war Gallien?",
    "Das Gebiet des heutigen Frankreich und Belgien, das Caesar eroberte",
    ["Eine Provinz in Nordafrika", "Eine griechische Insel im Mittelmeer", "Das heutige Griechenland"],
    rng));
  qs.push(createMCQ(T, S, "Was bedeutet 'Veni, vidi, vici'?",
    "Ich kam, ich sah, ich siegte – ein berühmter Ausspruch Caesars",
    ["Ich lebe, ich kämpfe, ich sterbe – Legionärseid", "Wir kommen, wir bleiben, wir herrschen – Senatsspruch", "Ich baue, ich plane, ich vollende – Caesars Bauinschrift"],
    rng));
  qs.push(createMCQ(T, S, "Wann wurde Julius Caesar ermordet?",
    "An den Iden des März (15. März) 44 v. Chr.",
    ["476 v. Chr.", "27 v. Chr.", "100 v. Chr."],
    rng));
  qs.push(createMCQ(T, S, "Wo wurde Caesar ermordet?",
    "Im römischen Senat",
    ["Im Kolosseum", "Im Triumphzug auf dem Forum", "In seiner Villa außerhalb Roms"],
    rng));

  // Block 6: Militär und Straßen
  qs.push(createMCQ(T, S, "Was war eine römische Legion?",
    "Eine große Militäreinheit von etwa 4.000–6.000 Soldaten (Legionäre)",
    ["Ein Verband von 100 Reitern", "Eine Flotte von Kriegsschiffen", "Eine Gruppe von Bogenschützen"],
    rng));
  qs.push(createMCQ(T, S, "Was ist die Via Appia?",
    "Eine der ältesten und wichtigsten Römerstraßen von Rom nach Süditalien",
    ["Eine Wasserleitung, die Rom mit Trinkwasser versorgte", "Der Hauptweg durch das Forum Romanum", "Eine Handelsroute nach Ägypten"],
    rng));
  qs.push(createMCQ(T, S, "Wozu bauten die Römer ihr ausgedehntes Straßennetz?",
    "Für schnelle Truppenbewegungen und den Handel im Reich",
    ["Für Wagenrennen und Sportveranstaltungen", "Als Grenzbefestigungen gegen Feinde", "Als Pilgerrouten zu heiligen Tempeln"],
    rng));
  qs.push(createMCQ(T, S, "Was war die Maxime 'Alle Wege führen nach Rom'?",
    "Das Straßennetz hatte Rom als Mittelpunkt – alle Hauptstraßen begannen oder endeten dort",
    ["Ein Gesetz, dass Reisende immer nach Rom zurückkehren müssen", "Ein religiöser Spruch der Priester", "Eine Drohung an feindliche Völker"],
    rng));
  qs.push(createMCQ(T, S, "Was war das Forum Romanum?",
    "Der zentrale Markt- und Versammlungsplatz im alten Rom",
    ["Der kaiserliche Palast auf dem Palatinhügel", "Das Militärcamp außerhalb der Stadt", "Ein Tempel für alle Götter"],
    rng));
  qs.push(createMCQ(T, S, "Welche der folgenden Aussagen beschreibt die Römische Republik am besten?",
    "Eine Regierungsform ohne König, in der gewählte Amtsträger regierten",
    ["Ein Kaiserreich, das von einem einzigen Herrscher regiert wurde", "Eine Demokratie wie im antiken Athen", "Ein Stammesverband ohne feste Gesetze"],
    rng));
  qs.push(createMCQ(T, S, "Was war der Triumphzug in Rom?",
    "Eine Siegesparade durch die Stadt, die dem erfolgreichen Feldherren Ehre brachte",
    ["Ein religiöses Fest zu Ehren Jupiters", "Die Amtseinführung der Konsuln", "Ein Sportwettkampf im Zirkus"],
    rng));
  qs.push(createMCQ(T, S, "Was war ein Diktator in der Römischen Republik?",
    "Ein Notfallherrscher mit unbeschränkter Macht, der maximal 6 Monate regieren durfte",
    ["Ein Tyrann, der die Republik abschaffte", "Ein gewählter Konsul mit Sondervollmachten auf Dauer", "Der Anführer des Senats im Krieg"],
    rng));
  qs.push(createMCQ(T, S, "Welche Sprache sprachen die Römer?",
    "Latein",
    ["Griechisch", "Keltisch", "Etruskisch"],
    rng));
  qs.push(createMCQ(T, S, "Welches Volk lebte in Italien, bevor die Römer mächtig wurden?",
    "Die Etrusker – ein Volk in Mittelitalien, das die frühe Römerkultur stark beeinflusste",
    ["Die Kelten in Norditalien", "Die Griechen im Süden", "Die Karthager auf Sizilien"],
    rng));
  qs.push(createMCQ(T, S, "Was ist das Kapitol in Rom?",
    "Ein Hügel im Herzen Roms mit Tempeln – besonders dem Jupiter-Tempel",
    ["Das Gebäude des Senats", "Der Palast der Kaiser", "Das Stadion für Wagenrennen"],
    rng));
  qs.push(createMCQ(T, S, "Was war das Prinzip der 'Res Publica' (Republik)?",
    "Das Gemeinwohl steht über dem Einzelnen – der Staat gehört allen Bürgern",
    ["Der Staat gehört dem mächtigsten General", "Der König regiert durch göttliches Recht", "Das Volk wählt einen Kaiser auf Lebenszeit"],
    rng));
  qs.push(createMCQ(T, S, "Wann endete die Römische Republik und begann das Kaiserreich?",
    "27 v. Chr. – als Octavian (Augustus) die alleinige Herrschaft übernahm",
    ["44 v. Chr. – nach der Ermordung Caesars", "476 v. Chr. – beim Fall der Monarchie", "100 n. Chr. – unter Kaiser Trajan"],
    rng));
  qs.push(createMCQ(T, S, "Was ist eine 'centuria' in der römischen Volksversammlung?",
    "Eine Abstimmungsgruppe von Bürgern je nach Vermögen – Reiche hatten mehr Stimmen",
    ["Eine Gruppe von 100 Legionären", "Ein Stadtbezirk in Rom", "Eine Steuerklasse für Händler"],
    rng));
  qs.push(createMCQ(T, S, "Was ist das Latein-Alphabet?",
    "Das Schriftsystem der Römer – Grundlage des heutigen deutschen Alphabets",
    ["Die Runen der Germanen", "Die Hieroglyphen der Ägypter", "Das Griechische Alphabet"],
    rng));
  qs.push(createMCQ(T, S, "Was war eine 'testudo' (Schildkröte) im römischen Militär?",
    "Eine Kampfformation, bei der Soldaten ihre Schilde zusammensteckten – wie ein Schutzpanzer",
    ["Ein spezielles Kriegsschiff der Römer", "Ein Belagerungsturm aus Holz", "Ein Pferdegespann im Kampf"],
    rng));
  qs.push(createMCQ(T, S, "Welche Tiere waren neben Pferden im römischen Heer besonders bekannt?",
    "Kriegselefanten – besonders aus dem Heer des Karthagers Hannibal bekannt",
    ["Löwen als Anführer der Legionen", "Adler als Botschaftertiere", "Wölfe als Begleittiere der Legionen"],
    rng));
  qs.push(createMCQ(T, S, "Wofür waren die Römer im Bauwesen bekannt?",
    "Für Bögen, Gewölbe, Aquädukte und Beton (Opus Caementicium)",
    ["Für hölzerne Konstruktionen und Brücken", "Für Pyramiden und Obelisken", "Für Marmortempel ohne Dach"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein Legionsadler (Aquila)?",
    "Das heilige Symbol einer Legion – ein goldener Adler auf einem Stab, den zu verlieren eine Schande war",
    ["Ein echter Adler, der die Legion begleitete", "Eine Münze mit dem Kaiserbild", "Ein Triumphdenkmal nach dem Sieg"],
    rng));
  qs.push(createMCQ(T, S, "Was ist der 'Rubikon' historisch bekannt?",
    "Ein Fluss in Norditalien – Caesar überschritt ihn 49 v. Chr. mit Heer und begann damit den Bürgerkrieg",
    ["Ein Fluss, an dem Hannibal besiegt wurde", "Der Grenzfluss zwischen Rom und Karthago", "Der Fluss, an dem Romulus die Stadt gründete"],
    rng));
  qs.push(createMCQ(T, S, "Was ist 'Pax Romana' wörtlich?",
    "Römischer Frieden",
    ["Römische Macht", "Römische Gerechtigkeit", "Römisches Reich"],
    rng));
  qs.push(createMCQ(T, S, "Was ist der Unterschied zwischen 'Patrizier' und 'Klient' im alten Rom?",
    "Klienten waren einfache Bürger, die unter dem Schutz eines Patriziers standen und ihm dafür Dienste leisteten",
    ["Klienten waren Sklaven, die freigelassen wurden", "Klienten waren arme Bauern außerhalb der Stadt", "Klienten waren ausländische Händler in Rom"],
    rng));

  return shuffle(qs, rng);
}

// ─── GENERATOR 5: RÖMISCHES KAISERREICH ─────────────────────────────────────

function generateRomKaiserreich(): CurriculumMCQ[] {
  const rng = mulberry32(1005);
  const qs: CurriculumMCQ[] = [];
  const T = "Geschichte";
  const S = "rom_kaiserreich";

  // Block 1: Augustus und Beginn des Kaiserreichs
  qs.push(createMCQ(T, S, "Wer war der erste Kaiser Roms?",
    "Augustus (Gaius Octavius)",
    ["Julius Caesar", "Nero", "Konstantin"],
    rng));
  qs.push(createMCQ(T, S, "Wann begann das Römische Kaiserreich?",
    "27 v. Chr. mit Augustus",
    ["44 v. Chr. mit Caesar", "753 v. Chr. mit Romulus", "100 n. Chr. mit Trajan"],
    rng));
  qs.push(createMCQ(T, S, "In welchem Verhältnis stand Augustus zu Julius Caesar?",
    "Er war der Neffe und Adoptivsohn Caesars",
    ["Er war der Sohn Caesars", "Er war der Bruder Caesars", "Er war ein General Caesars"],
    rng));
  qs.push(createMCQ(T, S, "Was war die 'Pax Romana'?",
    "Eine lange Friedensperiode unter dem Römischen Reich (27 v. Chr. bis 180 n. Chr.)",
    ["Ein Friedensvertrag zwischen Rom und Karthago", "Ein Gesetz, das Kriege verbot", "Eine Periode nach dem Fall Roms"],
    rng));
  qs.push(createMCQ(T, S, "Was bedeutet 'Kaiser' auf Lateinisch?",
    "Caesar – der Titel leitet sich vom Namen Julius Caesar ab",
    ["Imperator – der oberste Befehlshaber", "Rex – der König", "Pontifex – der oberste Priester"],
    rng));

  // Block 2: Kolosseum und Gladiatoren
  qs.push(createMCQ(T, S, "Was ist das Kolosseum?",
    "Ein riesiges Amphitheater in Rom für Gladiatorenkämpfe und Tierhetzen",
    ["Ein Tempel für Jupiter in der Stadtmitte Roms", "Ein Palast der Kaiser auf dem Palatinhügel", "Ein Triumphbogen zu Ehren des Augustus"],
    rng));
  qs.push(createMCQ(T, S, "Wie viele Menschen fasste das Kolosseum ungefähr?",
    "Etwa 50.000 Zuschauer",
    ["Etwa 5.000 Zuschauer", "Etwa 500.000 Zuschauer", "Etwa 10.000 Zuschauer"],
    rng));
  qs.push(createMCQ(T, S, "Was waren Gladiatoren?",
    "Kämpfer, die in der Arena vor Publikum gegeneinander oder gegen Tiere kämpften",
    ["Soldaten der Legionen an der Grenze", "Sportler der Olympischen Spiele", "Priester, die religiöse Zeremonien durchführten"],
    rng));
  qs.push(createMCQ(T, S, "Was bedeutete der Daumen nach unten in einem Gladiatorenkampf?",
    "Der Besiegte sollte getötet werden",
    ["Der Besiegte durfte am Leben bleiben", "Das Publikum wollte einen neuen Kampf", "Der Kaiser wollte eingreifen"],
    rng));
  qs.push(createMCQ(T, S, "Was war 'Brot und Spiele' (Panem et Circenses)?",
    "Kostenlose Nahrung und Unterhaltung für das Volk, um es zufriedenzuhalten",
    ["Ein religiöses Fest für Jupiter", "Eine Belohnung für tapfere Soldaten", "Das Jahresgehalt der Konsuln"],
    rng));

  // Block 3: Pompeji
  qs.push(createMCQ(T, S, "Was geschah 79 n. Chr. mit der Stadt Pompeji?",
    "Sie wurde durch den Ausbruch des Vesuvs unter Asche begraben",
    ["Sie wurde von den Germanen zerstört", "Sie wurde bei einem Erdbeben ins Meer gespült", "Sie wurde von Caesar als Strafe niedergebrannt"],
    rng));
  qs.push(createMCQ(T, S, "Was ist der Vesuv?",
    "Ein Vulkan in Süditalien nahe Neapel",
    ["Ein Berg in den Alpen", "Ein Gebirge in Norditalien", "Ein erloschener Vulkan auf Sizilien"],
    rng));
  qs.push(createMCQ(T, S, "Was ist historisch bedeutsam an Pompeji?",
    "Die Asche konservierte die Stadt perfekt – Archäologen finden noch heute Gebäude, Fresken und Alltagsgegenstände",
    ["Es war die Geburtsstadt des Augustus", "Die Stadt hatte die ersten christlichen Kirchen", "Hier starb Julius Caesar"],
    rng));

  // Block 4: Limes und Grenzen
  qs.push(createMCQ(T, S, "Was ist der Limes?",
    "Die Befestigungslinie (Grenzwall) des Römischen Reiches, besonders gegen die Germanen",
    ["Ein Handelsweg durch das Römische Reich", "Eine Wasserleitung von Rom nach Gallien", "Ein Kanal für Schiffe in Norditalien"],
    rng));
  qs.push(createMCQ(T, S, "Wozu diente der Limes?",
    "Als Grenzschutz gegen einfallende Völker (besonders Germanen) und als Kontrollpunkt für den Handel",
    ["Als Straße für Legionen im Inland", "Als Bewässerungskanal für Felder", "Als Gebetsweg für Pilger"],
    rng));
  qs.push(createMCQ(T, S, "In welchem heutigen Land verlief der Obergermanische Limes?",
    "In Deutschland",
    ["In Frankreich", "In Österreich", "In der Schweiz"],
    rng));

  // Block 5: Christentum
  qs.push(createMCQ(T, S, "Wie behandelten die frühen römischen Kaiser die Christen?",
    "Sie wurden verfolgt, weil sie die Götter und den Kaiser nicht verehrten",
    ["Sie wurden als Verbündete gegen die Germanen eingesetzt", "Sie wurden mit Geld belohnt für ihre Lehren", "Sie wurden in eigenen Stadtteilen geduldet"],
    rng));
  qs.push(createMCQ(T, S, "Welcher Kaiser erkannte das Christentum im Römischen Reich an?",
    "Kaiser Konstantin I. (313 n. Chr. mit dem Mailänder Edikt)",
    ["Kaiser Augustus", "Kaiser Nero", "Kaiser Trajan"],
    rng));
  qs.push(createMCQ(T, S, "Was ist das Mailänder Edikt (313 n. Chr.)?",
    "Ein Erlass, der Religionsfreiheit im Reich garantierte und Christen nicht mehr verfolgt wurden",
    ["Ein Gesetz, das das Christentum zur Staatsreligion machte", "Ein Vertrag zwischen Rom und den Germanen", "Ein Befehl, alle heidnischen Tempel zu zerstören"],
    rng));
  qs.push(createMCQ(T, S, "Wer machte das Christentum offiziell zur Staatsreligion des Römischen Reiches?",
    "Kaiser Theodosius I. (380 n. Chr.)",
    ["Kaiser Konstantin", "Kaiser Augustus", "Kaiser Nero"],
    rng));

  // Block 6: Teilung und Untergang
  qs.push(createMCQ(T, S, "In welche zwei Teile wurde das Römische Reich aufgeteilt?",
    "Das Weströmische Reich (Hauptstadt Rom) und das Oströmische Reich (Hauptstadt Konstantinopel)",
    ["Das Nördliche und das Südliche Reich", "Das Atlantische und das Mittelmeer-Reich", "Das Germanische und das Lateinische Reich"],
    rng));
  qs.push(createMCQ(T, S, "Wann endete das Weströmische Reich?",
    "476 n. Chr.",
    ["27 v. Chr.", "100 n. Chr.", "1453 n. Chr."],
    rng));
  qs.push(createMCQ(T, S, "Was geschah 476 n. Chr.?",
    "Der letzte weströmische Kaiser Romulus Augustulus wurde von dem Germanen Odoaker abgesetzt",
    ["Kaiser Konstantin spaltete das Reich in zwei Teile", "Rom wurde von den Hunnen niedergebrannt", "Die Vandalen plünderten Rom zum ersten Mal"],
    rng));
  qs.push(createMCQ(T, S, "Was war Konstantinopel?",
    "Die neue Hauptstadt des Oströmischen Reiches, gegründet von Kaiser Konstantin",
    ["Ein Legionslager an der Donau", "Eine Handelsstadt in Nordafrika", "Ein Hafen in Griechenland"],
    rng));
  qs.push(createMCQ(T, S, "Was war eine Aquädukt?",
    "Ein Wasserleitungsbrückensystem der Römer zum Transport von frischem Wasser in die Städte",
    ["Eine Brücke für Legionen über breite Flüsse", "Ein Kanalsystem zur Entwässerung von Sümpfen", "Ein unterirdischer Speicher für Getreide"],
    rng));
  qs.push(createMCQ(T, S, "Was war das Forum in einer römischen Stadt?",
    "Der zentrale Markt- und Versammlungsplatz",
    ["Die Verteidigungsanlage am Stadtrand", "Der Tempel für den Schutzgott der Stadt", "Das Lager der Stadtgarnison"],
    rng));
  qs.push(createMCQ(T, S, "Was ist eine Insula in einer römischen Stadt?",
    "Ein mehrstöckiges Mietshaus für ärmere Stadtbewohner",
    ["Eine Villa für reiche Römer", "Ein Lagerhaus für Waren", "Ein öffentliches Bad für alle Bürger"],
    rng));
  qs.push(createMCQ(T, S, "Was waren die Thermen in einer römischen Stadt?",
    "Öffentliche Badeanstalten, die auch als gesellschaftliche Treffpunkte dienten",
    ["Tempel für Göttinnen", "Militärische Übungsgelände", "Unterirdische Getreidespeicher"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein Amphitheater?",
    "Ein ovales Freilichttheater für Gladiatorenkämpfe und Tierhetzen",
    ["Ein griechisches Halbrund-Theater für Tragödien", "Ein runder Tempel mit offener Decke", "Ein Marktplatz mit überdachten Gängen"],
    rng));
  qs.push(createMCQ(T, S, "Was bauten die Römer in vielen Städten als Zeichen ihrer Herrschaft?",
    "Triumphbögen zu Ehren von Siegen und Kaisern",
    ["Pyramiden als Grabstätten der Kaiser", "Zikkuraten als Tempel für ihre Götter", "Minarette als Gebetsstätten"],
    rng));
  qs.push(createMCQ(T, S, "Welche Sprache sprachen und schrieben die Römer?",
    "Latein",
    ["Griechisch", "Keltisch", "Germanisch"],
    rng));
  qs.push(createMCQ(T, S, "Warum ist Latein heute noch wichtig?",
    "Viele europäische Sprachen (Französisch, Spanisch, Italienisch, Rumänisch) stammen vom Latein ab",
    ["Es wird in der EU als gemeinsame Amtssprache genutzt", "Die Päpste sprechen heute noch ausschließlich Latein", "Latein ist die Muttersprache Deutschlands"],
    rng));
  qs.push(createMCQ(T, S, "Was sind die 'Sieben Hügel Roms'?",
    "Die sieben Hügel, auf denen das antike Rom erbaut wurde",
    ["Sieben Festungen rund um Rom", "Die sieben Schlachten, die Rom groß machten", "Sieben Tempel auf dem Forum Romanum"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein Viadukt?",
    "Eine Brückenkonstruktion über ein Tal, die Straßen oder Wasserleitungen trägt",
    ["Ein unterirdischer Gang in der Stadt", "Ein Hafenkai für Schiffe", "Ein Triumphbogen"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein Gladiator-Netzkämpfer ('Retiarius') besonders bekannt für?",
    "Netz und Dreizack – er warf das Netz auf den Gegner und stach mit dem Dreizack",
    ["Schweres Panzerrüstung und Kurzschwert", "Bogen und Pfeil aus der Ferne", "Zweihändiges Langschwert"],
    rng));
  qs.push(createMCQ(T, S, "Was bedeutet 'Kaiser' im Deutschen und woher kommt das Wort?",
    "Kaiser kommt vom lateinischen 'Caesar' – dem Namen Julius Caesars",
    ["Kaiser kommt von 'Kaiserstein' – dem Krönungsstein in Rom", "Kaiser kommt vom germanischen Wort für König", "Kaiser kommt vom griechischen Wort für Herrscher"],
    rng));
  qs.push(createMCQ(T, S, "Was ist eine 'Domus' im römischen Alltag?",
    "Ein Haus für reiche Bürger in Rom – mit Innenhof (Atrium) und Garten",
    ["Eine öffentliche Badeanstalt", "Ein Versammlungsraum des Senats", "Ein Lagerhaus für Waren"],
    rng));
  qs.push(createMCQ(T, S, "Was bauten die Römer für ihre Wasserversorgung?",
    "Aquädukte – Leitungen auf Bogenkonstruktionen, die Wasser über weite Strecken transportierten",
    ["Riesige Brunnen in der Stadtmitte", "Pumpen mit Wasserrädern am Tiber", "Wassertanks auf Tempeldächern"],
    rng));
  qs.push(createMCQ(T, S, "Was ist das 'Pantheon' in Rom?",
    "Ein Tempel für alle Götter, gebaut unter Kaiser Hadrian – mit einer runden Kuppelöffnung",
    ["Das Gefängnis für Staatsfeinde in Rom", "Ein Gebäude für den Senat", "Ein Amphitheater für Wagenrennen"],
    rng));
  qs.push(createMCQ(T, S, "Was war das Ergebnis der Varusschlacht für das Römerreich?",
    "Rom verzichtete auf die vollständige Unterwerfung Germaniens und hielt den Rhein als Grenze",
    ["Rom baute sofort einen neuen Limes in Germanien", "Rom rächte sich sofort mit einer riesigen Armee", "Die Germanen wurden friedliche Bundesgenossen"],
    rng));
  qs.push(createMCQ(T, S, "Was ist die 'Ara Pacis Augustae'?",
    "Ein Altar des Augustusfriedens – ein Denkmal für die Pax Romana",
    ["Der Grabstein des Augustus", "Ein Triumphbogen nach dem Sieg über Karthago", "Die Inschrift der Zwölftafelgesetze"],
    rng));
  qs.push(createMCQ(T, S, "Welche Völker lebten an den Grenzen des Römischen Reiches?",
    "Im Norden: Germanen; im Osten: Parther/Perser; im Süden: Berber in Nordafrika",
    ["Im Norden: Hunnen; im Osten: Griechen; im Süden: Ägypter", "Im Norden: Kelten; im Osten: Babylonier; im Süden: Nubier", "Im Norden: Wikinger; im Osten: Türken; im Süden: Araber"],
    rng));
  qs.push(createMCQ(T, S, "Was ist Nero historisch bekannt für?",
    "Er war ein grausamer Kaiser, der Christen verfolgen ließ und verdächtigt wurde, Rom in Brand gesetzt zu haben",
    ["Er war der erste Kaiser, der das Christentum erlaubte", "Er besiegte die Germanen endgültig am Rhein", "Er baute das Kolosseum"],
    rng));
  qs.push(createMCQ(T, S, "Was ist der 'Marc Aurel' historisch bekannt für?",
    "Als philosophischer Kaiser (Stoiker) und als Feldherr an der Donau gegen die Germanen",
    ["Als erster christlicher Kaiser Roms", "Als Erbauer des Kolosseums", "Als Sieger über Karthago"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein 'Triumphbogen'?",
    "Ein monumentaler Bogen aus Stein, der zum Gedenken an Siege und Kaiser errichtet wurde",
    ["Ein Bogen über den Eingang zum Forum", "Ein Torbogen an der Stadtmauer", "Ein Brückenbogen über den Tiber"],
    rng));

  return shuffle(qs, rng);
}

// ─── GENERATOR 6: GERMANEN ───────────────────────────────────────────────────

function generateGermanen(): CurriculumMCQ[] {
  const rng = mulberry32(1006);
  const qs: CurriculumMCQ[] = [];
  const T = "Geschichte";
  const S = "germanen";

  // Block 1: Grundlagen
  qs.push(createMCQ(T, S, "Wer waren die Germanen?",
    "Verschiedene Stämme, die in Nord- und Mitteleuropa nördlich des Limes lebten",
    ["Ein einziges großes Volk mit einem gemeinsamen König", "Die Vorfahren der heutigen Griechen", "Nomaden, die aus Asien nach Europa kamen"],
    rng));
  qs.push(createMCQ(T, S, "Welche Stämme gehörten zu den Germanen?",
    "Goten, Franken, Sachsen, Alemannen und viele andere",
    ["Gallier, Kelten und Iberer", "Hunnen, Avaren und Bulgaren", "Griechen, Römer und Karthager"],
    rng));
  qs.push(createMCQ(T, S, "Wo lebten die meisten Germanen?",
    "In Wäldern und kleinen Dörfern nördlich von Rhein und Donau",
    ["In großen Städten wie die Römer", "In Wüstengebieten Nordafrikas", "Auf Inseln im Mittelmeer"],
    rng));
  qs.push(createMCQ(T, S, "Was bauten die Germanen für ihre Häuser?",
    "Holzhäuser mit Stroh- oder Schilfrohr-Dächern",
    ["Steinhäuser mit Ziegeldächern wie die Römer", "Zelte aus Tierhäuten", "Höhlen in Felsenwänden"],
    rng));
  qs.push(createMCQ(T, S, "Wie ernährten sich die Germanen hauptsächlich?",
    "Von Landwirtschaft (Getreide, Gemüse), Viehzucht und Jagd",
    ["Ausschließlich von der Jagd", "Vom Handel mit anderen Völkern", "Von Früchten aus dem Wald"],
    rng));

  // Block 2: Gesellschaft
  qs.push(createMCQ(T, S, "Was war das 'Thing' (oder Ding) bei den Germanen?",
    "Eine Versammlung freier Männer des Stammes, die über wichtige Fragen entschieden",
    ["Ein religiöses Opferfest", "Der Marktplatz im Dorf", "Das Heim des Stammesführers"],
    rng));
  qs.push(createMCQ(T, S, "Wer war der Anführer eines germanischen Stammes?",
    "Ein Häuptling oder König, der von den freien Männern anerkannt wurde",
    ["Ein erblicher Kaiser wie in Rom", "Ein Priester, der von den Göttern bestimmt wurde", "Immer der älteste Mann im Stamm"],
    rng));
  qs.push(createMCQ(T, S, "Was waren die freien Männer bei den Germanen?",
    "Waffenfähige Männer, die an der Thing-Versammlung teilnehmen und kämpfen durften",
    ["Alle Männer unabhängig vom Stand", "Händler und Handwerker", "Priester und Weise"],
    rng));
  qs.push(createMCQ(T, S, "Welche Rolle spielten Frauen in der germanischen Gesellschaft?",
    "Sie führten den Haushalt, webten Stoffe und hatten in manchen Stämmen hohen Respekt",
    ["Sie hatten keine Rechte und durften nicht sprechen", "Sie führten das Heer in den Krieg", "Sie regierten gleichberechtigt mit den Männern"],
    rng));
  qs.push(createMCQ(T, S, "Was war die Sippe bei den Germanen?",
    "Die Großfamilie – verwandte Familien, die zusammen lebten und sich gegenseitig schützten",
    ["Ein militärischer Verband von 100 Kämpfern", "Eine religiöse Gemeinschaft", "Der Stammesrat der Ältesten"],
    rng));

  // Block 3: Religion
  qs.push(createMCQ(T, S, "Welche Götter verehrten die Germanen?",
    "Odin (Göttervater), Thor (Donnergott), Freya (Göttin der Liebe) und andere",
    ["Zeus, Athena und Poseidon", "Jupiter, Mars und Venus", "Ra, Osiris und Isis"],
    rng));
  qs.push(createMCQ(T, S, "Wer war Odin bei den Germanen?",
    "Der Göttervater und Gott der Weisheit, des Krieges und des Todes",
    ["Der Donnergott", "Der Gott des Handels", "Der Gott des Meeres"],
    rng));
  qs.push(createMCQ(T, S, "Wer war Thor bei den Germanen?",
    "Der Donnergott, der mit seinem Hammer Mjölnir Blitze und Donner machte",
    ["Der Göttervater", "Der Gott der Sonne", "Der Gott des Handels"],
    rng));
  qs.push(createMCQ(T, S, "Was ist Walhalla in der germanischen Religion?",
    "Die Halle der gefallenen Krieger, die dort nach einem tapferen Tod leben",
    ["Der Berg, auf dem die Götter wohnen", "Die Unterwelt für böse Menschen", "Ein heiliger Wald für Opferfeste"],
    rng));
  qs.push(createMCQ(T, S, "Wie heißen unsere Wochentage, die nach germanischen Göttern benannt wurden?",
    "Mittwoch (Odin/Wotan), Donnerstag (Thor), Freitag (Freya)",
    ["Montag (Mond), Dienstag (Tyr), Samstag (Saturn)", "Sonntag (Sol), Dienstag (Mars), Freitag (Venus)", "Montag (Mani), Mittwoch (Marte), Sonntag (Sol)"],
    rng));

  // Block 4: Runen und Kultur
  qs.push(createMCQ(T, S, "Was sind Runen?",
    "Die Schriftzeichen der Germanen, hauptsächlich auf Holz und Stein geritzt",
    ["Griechische Buchstaben auf Tontafeln", "Arabische Zahlen auf Papyrus", "Lateinische Buchstaben in Marmor gemeißelt"],
    rng));
  qs.push(createMCQ(T, S, "Wofür nutzten die Germanen Runen hauptsächlich?",
    "Für Inschriften auf Waffen, Grabsteinen und für Zauberei/Schutzformeln",
    ["Für lange Schriften und Bücher", "Für Handelslisten und Verträge", "Für religiöse Gesangbücher"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein 'Langhaus' bei den Germanen?",
    "Ein langes Holzgebäude, in dem Menschen und Tiere gemeinsam wohnten",
    ["Ein Palast des Stammesführers", "Ein Tempel für die Götter", "Ein Lagerschuppen für Getreide"],
    rng));
  qs.push(createMCQ(T, S, "Hatten die Germanen eigene Städte?",
    "Nein – sie lebten in kleinen Dörfern und Weilern, keine größeren Städte",
    ["Ja – germanische Städte waren größer als römische", "Ja – aber nur wenige, an Flüssen", "Ja – überall gab es befestigte Burgen"],
    rng));
  qs.push(createMCQ(T, S, "Womit handelten die Germanen mit den Römern?",
    "Mit Pelzen, Sklaven, Bernstein und Lebensmitteln gegen römische Waren",
    ["Mit Gold und Silber gegen Waffen", "Mit Papyrus gegen Getreide", "Mit Tonwaren gegen Schmuck"],
    rng));

  // Block 5: Arminius und Varusschlacht
  qs.push(createMCQ(T, S, "Wer war Arminius?",
    "Ein Führer des Cherusker-Stammes, der die Römer in der Varusschlacht 9 n. Chr. besiegte",
    ["Ein römischer General, der die Germanen unterwarf", "Ein Frankenkönig im 5. Jahrhundert", "Ein germanischer Priester und Seher"],
    rng));
  qs.push(createMCQ(T, S, "Wann fand die Varusschlacht statt?",
    "9 n. Chr.",
    ["476 n. Chr.", "44 v. Chr.", "100 v. Chr."],
    rng));
  qs.push(createMCQ(T, S, "Was geschah in der Varusschlacht?",
    "Arminius lockte drei römische Legionen unter General Varus in den Teutoburger Wald und vernichtete sie",
    ["Die Römer besiegten die Germanen endgültig", "Caesar schlug die Germanen am Rhein", "Die Germanen überquerten den Limes und plünderten Rom"],
    rng));
  qs.push(createMCQ(T, S, "Wie viele römische Soldaten kamen in der Varusschlacht ums Leben?",
    "Ungefähr 15.000 bis 20.000 Soldaten",
    ["Wenige hundert", "Fast eine Million", "Genau 3.000"],
    rng));
  qs.push(createMCQ(T, S, "Was waren die Folgen der Varusschlacht für das Römische Reich?",
    "Rom gab die Absicht auf, Germanien vollständig zu erobern – der Rhein blieb Grenze",
    ["Rom zog sich komplett aus Europa zurück", "Die Germanen wurden fortan Bundesgenossen Roms", "Caesar rächte die Niederlage sofort"],
    rng));

  // Block 6: Lebensweise und Vertiefung
  qs.push(createMCQ(T, S, "Womit kämpften germanische Krieger hauptsächlich?",
    "Mit Speeren, Schilden, Äxten und langen Schwertern",
    ["Mit Bögen und Pfeilen wie die Hunnen", "Mit Katapulten und Kriegsmaschinen", "Mit vergifteten Pfeilen aus dem Wald"],
    rng));
  qs.push(createMCQ(T, S, "Was ist Bernstein und warum war er bei Germanen und Römern wertvoll?",
    "Ein fossiles Baumharz, das an der Ostseeküste gefunden wurde – beliebt für Schmuck",
    ["Ein rares Metall aus den nordischen Bergen", "Ein Gewürz aus Germanien", "Eine heilige Pflanze der Germanen"],
    rng));
  qs.push(createMCQ(T, S, "Was unterschied die Germanen von den Römern in der Lebensweise am deutlichsten?",
    "Die Römer lebten in Städten mit Gesetzen und Schrift – die Germanen lebten in Dörfern ohne Städte",
    ["Die Germanen bauten Tempel, die Römer nicht", "Die Römer waren Nomaden, die Germanen sesshaft", "Die Germanen glaubten an die gleichen Götter wie die Römer"],
    rng));
  qs.push(createMCQ(T, S, "Welcher germanische Stamm wurde später besonders mächtig und gründete das Frankenreich?",
    "Die Franken",
    ["Die Goten", "Die Sachsen", "Die Alemannen"],
    rng));
  qs.push(createMCQ(T, S, "Was ist der Teutoburger Wald?",
    "Ein Wald im heutigen Niedersachsen/NRW, wo die Varusschlacht stattfand",
    ["Ein heiliger Hain der Germanen in Bayern", "Ein Gebirge an der Grenze zu Gallien", "Ein Grenzwall zwischen Germanen und Römern"],
    rng));
  qs.push(createMCQ(T, S, "Warum nannten die Römer die Gebiete nördlich des Limes 'Barbaricum'?",
    "Weil sie die Menschen dort als 'Barbaren' (Nichtrömer, unzivilisiert) betrachteten",
    ["Weil es dort sehr kalt und unwirtlich war", "Weil es kaum Bäume und Wald gab", "Weil die Germanen immer die Römer angriffen"],
    rng));
  qs.push(createMCQ(T, S, "Was ist eine 'Motte' bei germanischen Siedlungen?",
    "Ein kleiner Erdhügel mit Holzturm als Befestigung – frühe Form einer Burg",
    ["Ein gewebtes Tuch aus Wolle", "Ein Graben um das Dorf", "Ein heiliger Stein im Dorfzentrum"],
    rng));
  qs.push(createMCQ(T, S, "Was brannten die Germanen beim Totenritual?",
    "Sie verbrannten viele ihrer Toten (Brandbestattung) und legten Grabbeigaben ins Grab",
    ["Sie mumifizierten ihre Toten wie die Ägypter", "Sie versenkten die Toten im Moor", "Sie bauten Pyramiden für Häuptlinge"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein 'Moorleiche' archäologisch?",
    "Ein durch Moor konservierter Leichnam aus der germanischen Zeit",
    ["Eine Mumie aus dem Nil-Schlamm", "Ein Sklave, der im Sumpf arbeitete", "Ein Schatz im Moor versteckt"],
    rng));
  qs.push(createMCQ(T, S, "Welches germanische Volk siedelte zwischen Oder und Weichsel?",
    "Die Goten",
    ["Die Franken", "Die Sachsen", "Die Langobarden"],
    rng));
  qs.push(createMCQ(T, S, "Was ist 'Gold' historisch bei den Germanen bekannt für?",
    "Goldschmuck und goldene Fibeln (Gewandschließen) zeigten Reichtum und Status",
    ["Gold wurde als Währung für den Handel mit Rom genutzt", "Gold war heilig und durfte nicht getragen werden", "Gold wurde ausschließlich für Waffen genutzt"],
    rng));
  qs.push(createMCQ(T, S, "Was ist eine 'Fibel' im germanischen Kontext?",
    "Eine Gewandschließe (wie eine Sicherheitsnadel) – oft aus Bronze oder Gold gefertigt",
    ["Ein Musikinstrument aus Knochen", "Ein Schmiedehammer", "Ein Holzmesser"],
    rng));
  qs.push(createMCQ(T, S, "Was ist der 'Weihnachtsbaum' historisch in Verbindung mit den Germanen?",
    "Immergrüne Bäume galten bei Germanen als Symbol des Lebens im Winter",
    ["Ein christliches Symbol, das im Mittelalter eingeführt wurde", "Ein ägyptisches Symbol für Unsterblichkeit", "Ein römischer Brauch aus der Antike"],
    rng));
  qs.push(createMCQ(T, S, "Welche germanischen Götter gaben Wochentagen den Namen im Deutschen?",
    "Wotan/Odin (Mittwoch), Thor (Donnerstag), Freya (Freitag)",
    ["Jupiter (Mittwoch), Mars (Dienstag), Venus (Freitag)", "Zeus (Donnerstag), Ares (Dienstag), Aphrodite (Freitag)", "Odin (Montag), Thor (Dienstag), Freya (Mittwoch)"],
    rng));
  qs.push(createMCQ(T, S, "Was ist die 'Edda'?",
    "Eine Sammlung altnordischer Mythen und Gedichte über germanische Götter und Helden",
    ["Das Gesetzbuch der Germanen", "Ein Kriegsplan der Varusschlacht", "Die Runeninschriften des Arminius"],
    rng));
  qs.push(createMCQ(T, S, "Was unterschied die Goten von den Franken?",
    "Die Goten lebten östlicher (zwischen Oder und Weichsel), die Franken westlich am Rhein",
    ["Die Goten waren Christen, die Franken nicht", "Die Goten hatten keine Könige", "Die Franken waren Verbündete Roms, die Goten Feinde"],
    rng));
  qs.push(createMCQ(T, S, "Welche germanischen Stämme siedelten nach der Varusschlacht westlich des Rheins?",
    "Keine – Rom hielt den Rhein als Grenze; Germanen blieben östlich davon",
    ["Die Franken mit Erlaubnis Roms", "Die Alemannen als Bundesgenossen", "Die Sachsen im Rhein-Delta"],
    rng));
  qs.push(createMCQ(T, S, "Was ist der 'Sachsenspiegel'?",
    "Ein mittelalterliches Rechtsbuch, das auf germanisches Gewohnheitsrecht zurückgeht",
    ["Das Schutzschild des Arminius", "Ein Spiegel aus poliertem Silber", "Ein Kalender germanischer Feste"],
    rng));
  qs.push(createMCQ(T, S, "Was ist die historische Bedeutung des Arminius ('Cherusker-Fürst')?",
    "Er verhinderte, dass die Römer Germanien vollständig einverleibten – deshalb gilt er als 'Befreier Germaniens'",
    ["Er gründete das erste deutschsprachige Königreich", "Er besiegte die Hunnen und rettete Europa", "Er führte das Christentum bei den Germanen ein"],
    rng));
  qs.push(createMCQ(T, S, "Was unterschied die Kelten von den Germanen?",
    "Die Kelten lebten hauptsächlich westlich des Rheins (Gallien, Britannien) – die Germanen östlich davon",
    ["Die Kelten hatten eine stärkere Armee als die Germanen", "Die Kelten glaubten an die gleichen Götter", "Kelten und Germanen waren dasselbe Volk"],
    rng));

  return shuffle(qs, rng);
}

// ─── GENERATOR 7: VÖLKERWANDERUNG ────────────────────────────────────────────

function generateVoelkerwanderung(): CurriculumMCQ[] {
  const rng = mulberry32(1007);
  const qs: CurriculumMCQ[] = [];
  const T = "Geschichte";
  const S = "voelkerwanderung";

  // Block 1: Ursachen
  qs.push(createMCQ(T, S, "Was versteht man unter der 'Völkerwanderung'?",
    "Die Bewegung vieler Völker (4.-6. Jh. n. Chr.), die Roms Grenzen überschritten und neue Reiche gründeten",
    ["Die Wanderung der Germanen aus Asien nach Europa", "Die Flucht der Römer vor den Germanen", "Die Pilgerreisen der frühen Christen nach Jerusalem"],
    rng));
  qs.push(createMCQ(T, S, "Was löste die Völkerwanderung vor allem aus?",
    "Der Einfall der Hunnen aus Asien, der viele Völker vor sich hertrieb",
    ["Das Ende des Weströmischen Reiches", "Der Ausbruch des Vesuvs 79 n. Chr.", "Eine Hungersnot in ganz Europa"],
    rng));
  qs.push(createMCQ(T, S, "Woher kamen die Hunnen?",
    "Aus den Steppen Zentralasiens",
    ["Aus Nordafrika", "Aus dem Nahen Osten", "Aus dem heutigen Russland"],
    rng));
  qs.push(createMCQ(T, S, "Wofür waren die Hunnen bekannt?",
    "Für ihre überlegene Reiterei – sie kämpften zu Pferd mit Bögen",
    ["Für ihre starken Fußlegionen", "Für ihre mächtigen Kriegsflotten", "Für ihre befestigten Städte"],
    rng));
  qs.push(createMCQ(T, S, "Was war der Zusammenhang zwischen den Hunnen und den Germanen?",
    "Die Hunnen drängten die Germanen nach Westen, was diese zwang, in das Römerreich einzudringen",
    ["Die Hunnen waren Verbündete der Germanen gegen Rom", "Die Hunnen lebten friedlich neben den Germanen", "Die Germanen flohen nach Asien vor den Hunnen"],
    rng));

  // Block 2: Hunnen und Attila
  qs.push(createMCQ(T, S, "Wer war Attila?",
    "Der mächtigste König der Hunnen (um 434–453 n. Chr.)",
    ["Ein westgotischer König, der Rom plünderte", "Ein vandalischer Anführer in Nordafrika", "Ein fränkischer König im 5. Jahrhundert"],
    rng));
  qs.push(createMCQ(T, S, "Wie nannte man Attila in Europa?",
    "Die Geißel Gottes",
    ["Den Schrecken des Nordens", "Den Zerstörer Roms", "Den König der Könige"],
    rng));
  qs.push(createMCQ(T, S, "Bis wohin drangen die Hunnen unter Attila vor?",
    "Bis nach Gallien (Frankreich) und Norditalien",
    ["Bis nach Ägypten und Nordafrika", "Bis nach Skandinavien", "Bis nach Griechenland und Kleinasien"],
    rng));
  qs.push(createMCQ(T, S, "Was geschah nach Attilas Tod (453 n. Chr.)?",
    "Das Hunnenreich zerfiel schnell",
    ["Die Hunnen gründeten das Frankenreich", "Die Hunnen blieben als Herrscher in Gallien", "Die Hunnen wurden zum Christentum bekehrt"],
    rng));

  // Block 3: Westgoten
  qs.push(createMCQ(T, S, "Wer waren die Westgoten?",
    "Ein germanischer Stamm, der von den Hunnen nach Westen getrieben wurde und ins Römerreich einzog",
    ["Ein nordafrikanisches Volk, das das Mittelmeer beherrschte", "Ein asiatisches Reitervolk", "Verbündete Roms im Kampf gegen die Hunnen"],
    rng));
  qs.push(createMCQ(T, S, "Wer war Alarich?",
    "Der König der Westgoten, der Rom 410 n. Chr. plünderte",
    ["Der König der Hunnen unter Attila", "Ein weströmischer Kaiser", "Ein fränkischer Stammesführer"],
    rng));
  qs.push(createMCQ(T, S, "Wann plünderten die Westgoten unter Alarich die Stadt Rom?",
    "410 n. Chr.",
    ["476 n. Chr.", "378 n. Chr.", "455 n. Chr."],
    rng));
  qs.push(createMCQ(T, S, "Warum war die Plünderung Roms 410 n. Chr. so bedeutsam?",
    "Zum ersten Mal seit 800 Jahren wurde Rom von Feinden eingenommen – es schockierte die Welt",
    ["Es war das Ende des Weströmischen Reiches", "Es war die erste Niederlage eines Kaisers in der Stadt", "Es war der Beginn des Mittelalters"],
    rng));

  // Block 4: Vandalen
  qs.push(createMCQ(T, S, "Wer waren die Vandalen?",
    "Ein germanischer Stamm, der durch Europa zog und sich in Nordafrika niederließ",
    ["Ein asiatisches Reitervolk wie die Hunnen", "Ein griechisches Seevolk", "Ein keltischer Stamm aus Gallien"],
    rng));
  qs.push(createMCQ(T, S, "Was taten die Vandalen 455 n. Chr. in Rom?",
    "Sie plünderten Rom – daher kommt der Begriff 'Vandalismus'",
    ["Sie belagerten Rom ohne Erfolg", "Sie gründeten dort ihr neues Reich", "Sie verbündeten sich mit den Westgoten"],
    rng));
  qs.push(createMCQ(T, S, "Was bedeutet 'Vandalismus' heute?",
    "Sinnlose Zerstörung von Eigentum – nach dem plündernden Volk der Vandalen benannt",
    ["Tapferkeit im Kampf", "Entdeckungsreisen in unbekannte Länder", "Kunstvoll gestaltete Schmiedearbeit"],
    rng));

  // Block 5: Ostgoten und Odoaker
  qs.push(createMCQ(T, S, "Wer war Odoaker?",
    "Ein germanischer Heerführer, der 476 n. Chr. den letzten weströmischen Kaiser absetzte",
    ["Ein ostgotischer König, der Italien regierte", "Der letzte weströmische Kaiser", "Ein Hunnenführer nach Attila"],
    rng));
  qs.push(createMCQ(T, S, "Wie hieß der letzte weströmische Kaiser?",
    "Romulus Augustulus",
    ["Konstantin", "Theodosius", "Julius Nepos"],
    rng));
  qs.push(createMCQ(T, S, "Was gilt als das offizielle Ende des Weströmischen Reiches?",
    "476 n. Chr. – die Absetzung des Romulus Augustulus durch Odoaker",
    ["410 n. Chr. – die Plünderung Roms durch die Westgoten", "455 n. Chr. – die Plünderung durch die Vandalen", "378 n. Chr. – die Schlacht bei Adrianopel"],
    rng));
  qs.push(createMCQ(T, S, "Wer waren die Ostgoten?",
    "Ein germanischer Stamm, der nach dem Hunnenreich ein eigenes Reich in Italien gründete",
    ["Die östliche Gruppe der Hunnen", "Verbündete des Oströmischen Reiches", "Ein Stamm aus Nordafrika"],
    rng));

  // Block 6: Chlodwig und Frankenreich
  qs.push(createMCQ(T, S, "Wer war Chlodwig?",
    "Der fränkische König, der das Frankenreich gründete und zum Christentum konvertierte",
    ["Der letzte weströmische Kaiser", "Der König der Westgoten in Spanien", "Der Anführer der Hunnen nach Attila"],
    rng));
  qs.push(createMCQ(T, S, "Welchen Schritt machte Chlodwig um 496 n. Chr.?",
    "Er konvertierte zum Christentum und ließ sich taufen",
    ["Er ließ sich zum Kaiser von Rom ausrufen", "Er besiegte die Hunnen in Gallien", "Er vereinigte alle germanischen Stämme"],
    rng));
  qs.push(createMCQ(T, S, "Welches Reich entstand aus dem Frankenstamm?",
    "Das Frankenreich, das später das Reich Karls des Großen wurde",
    ["Das Heilige Römische Reich Deutscher Nation", "Das Oströmische Reich", "Das Ostgotenreich in Italien"],
    rng));
  qs.push(createMCQ(T, S, "In welchem heutigen Land entstand das Frankenreich hauptsächlich?",
    "Im heutigen Frankreich und Westdeutschland",
    ["In Italien und Spanien", "In England und Schottland", "In Polen und Tschechien"],
    rng));

  // Block 7: Angelsachsen und Gesamtfolgen
  qs.push(createMCQ(T, S, "Was geschah in Britannien (England) während der Völkerwanderung?",
    "Angeln und Sachsen (Angelsachsen) aus Norddeutschland wanderten nach Britannien ein",
    ["Die Hunnen besetzten Britannien", "Die Franken gründeten ihr Reich in England", "Die Römer blieben weiterhin Herrscher"],
    rng));
  qs.push(createMCQ(T, S, "Woher kommen die Angelsachsen?",
    "Von der norddeutschen Küste und aus Dänemark",
    ["Aus Skandinavien wie die Wikinger", "Aus Gallien (Frankreich)", "Aus dem Oströmischen Reich"],
    rng));
  qs.push(createMCQ(T, S, "Was ist eine wichtige Folge der Völkerwanderung für Europa?",
    "Neue Königreiche entstanden auf dem Boden des Weströmischen Reiches – Europa veränderte sich grundlegend",
    ["Europa wurde wieder vereint unter einem Kaiser", "Die germanischen Völker wurden alle Christen sofort", "Das Oströmische Reich übernahm ganz Europa"],
    rng));
  qs.push(createMCQ(T, S, "Welches Reich überlebte das Ende des Weströmischen Reiches 476 n. Chr.?",
    "Das Oströmische Reich (Byzantinisches Reich) mit Hauptstadt Konstantinopel",
    ["Das Frankenreich", "Das Hunnenreich", "Das Ostgotenreich"],
    rng));
  qs.push(createMCQ(T, S, "Bis wann bestand das Oströmische Reich (Byzanz)?",
    "Bis 1453 n. Chr. – über tausend Jahre nach dem Ende des Weströmischen Reiches",
    ["Bis 600 n. Chr.", "Bis 800 n. Chr.", "Bis 1000 n. Chr."],
    rng));
  qs.push(createMCQ(T, S, "Welche Epoche folgte auf die Antike und die Völkerwanderung?",
    "Das Mittelalter",
    ["Die Neuzeit", "Die Moderne", "Die Steinzeit"],
    rng));
  qs.push(createMCQ(T, S, "Was ist das Weströmische Reich und das Oströmische Reich insgesamt?",
    "Die Teilung des Römischen Reiches nach Kaiser Theodosius I. im Jahr 395 n. Chr.",
    ["Zwei unabhängig entstandene Reiche in Rom und Konstantinopel", "Das Reich vor und nach Augustus", "Die Gebiete nördlich und südlich des Mittelmeers"],
    rng));
  qs.push(createMCQ(T, S, "Welche Sprache sprachen die Menschen im Oströmischen Reich hauptsächlich?",
    "Griechisch",
    ["Latein", "Arabisch", "Germanisch"],
    rng));
  qs.push(createMCQ(T, S, "Wodurch unterschied sich das Frankenreich von den anderen Nachfolgestaaten Roms?",
    "Die Franken übernahmen das Christentum und die lateinische Schrift und Kultur der Römer",
    ["Die Franken behielten die germanischen Götter bei", "Die Franken sprachen weiterhin nur Germanisch", "Die Franken verweigerten jede Verbindung zu Rom"],
    rng));
  qs.push(createMCQ(T, S, "Was war die 'Schlacht auf den Katalaunischen Feldern' (451 n. Chr.)?",
    "Eine große Schlacht in Gallien, in der Römer und Westgoten gemeinsam die Hunnen unter Attila stoppten",
    ["Die letzte Schlacht des Weströmischen Reiches gegen die Vandalen", "Die Niederlage Roms gegen die Ostgoten", "Der Sieg der Hunnen über die Franken"],
    rng));
  qs.push(createMCQ(T, S, "Was ist ein 'foederatus' in der spätrömischen Zeit?",
    "Ein Verbündeter (Föderant) – barbarische Stämme, die als Bundesgenossen für Rom kämpften",
    ["Ein Bundesbürger des Römerreiches mit vollen Rechten", "Ein geplünderter Ort im Barbaricum", "Ein Vertrag zwischen zwei Kaisern"],
    rng));
  qs.push(createMCQ(T, S, "Was meint man mit 'Spätantike'?",
    "Die Periode von etwa 300 bis 600 n. Chr. – zwischen Antike und Mittelalter",
    ["Das goldene Zeitalter des Augustus (27 v. Chr. bis 14 n. Chr.)", "Die Zeit der Republik (509–27 v. Chr.)", "Die Ära nach dem Mittelalter"],
    rng));
  qs.push(createMCQ(T, S, "Welche zwei germanischen Stämme bildeten zusammen die 'Langobarden'?",
    "Langobarden waren ein eigener Stamm – sie zogen später nach Italien und gaben der Lombardei den Namen",
    ["Goten und Franken", "Sachsen und Alemannen", "Vandalen und Ostgoten"],
    rng));
  qs.push(createMCQ(T, S, "Welche Rolle spielte das Christentum in der Völkerwanderungszeit?",
    "Viele germanische Könige konvertierten zum Christentum – es half ihnen, römische Gebiete und Kirche zu übernehmen",
    ["Das Christentum wurde von allen Germanen sofort verboten", "Das Christentum schwächte die germanischen Stämme", "Nur die Hunnen nutzten das Christentum politisch"],
    rng));
  qs.push(createMCQ(T, S, "Welches Ereignis markiert traditionell den Beginn des Mittelalters?",
    "476 n. Chr. – das Ende des Weströmischen Reiches",
    ["410 n. Chr. – die Plünderung Roms durch Alarich", "500 n. Chr. – die Taufe Chlodwigs", "395 n. Chr. – die Reichsteilung durch Theodosius"],
    rng));
  qs.push(createMCQ(T, S, "Was ist 'Ravenna' historisch in der Spätantike?",
    "Die letzte Hauptstadt des Weströmischen Reiches – hier wurde Romulus Augustulus abgesetzt",
    ["Die Stadt, in der Augustus begraben liegt", "Eine byzantinische Hochburg in Nordafrika", "Der Geburtsort des Franken Chlodwig"],
    rng));
  qs.push(createMCQ(T, S, "Was war die 'Wanderung' bei der Völkerwanderung – zogen alle Germanen um?",
    "Nein – die meisten Germanen blieben in ihrer Heimat; nur einige Stämme zogen weit",
    ["Ja – alle Germanen verließen gleichzeitig ihre Heimat", "Ja – sie alle folgten den Hunnen nach Westen", "Nein – nur die Franken zogen, alle anderen blieben"],
    rng));
  qs.push(createMCQ(T, S, "Was ist 'Konstantinopel' heute?",
    "Das heutige Istanbul in der Türkei",
    ["Das heutige Athen in Griechenland", "Das heutige Sofia in Bulgarien", "Das heutige Belgrad in Serbien"],
    rng));
  qs.push(createMCQ(T, S, "Warum überlebte das Oströmische Reich viel länger als das Weströmische?",
    "Es hatte eine starke Hauptstadt (Konstantinopel), reiche Handelsrouten und eine gute Verteidigung",
    ["Es hatte eine stärkere Armee als das Westreich", "Die Germanen hatten kein Interesse am Osten", "Es lag weiter von den Hunnen entfernt"],
    rng));
  qs.push(createMCQ(T, S, "Was ist 'Boethius' in der Spätantike bekannt für?",
    "Ein spätantiker Philosoph und Minister unter Odoaker/Theoderich – schrieb 'Über den Trost der Philosophie'",
    ["Ein Frankenkönig nach Chlodwig", "Ein westgotischer Feldherr in Spanien", "Ein Bischof, der das Christentum in Britannien verbreitete"],
    rng));
  qs.push(createMCQ(T, S, "Was ist die 'Verwüstung des Römischen Reiches' durch die Vandalen?",
    "Die Vandalen plünderten 455 n. Chr. Rom – seitdem steht 'Vandalismus' für sinnlose Zerstörung",
    ["Die Vandalen brannten die Bibliothek Alexandria nieder", "Die Vandalen zerstörten den Limes", "Die Vandalen plünderten Konstantinopel"],
    rng));

  return shuffle(qs, rng);
}

// ─── EXPORT ──────────────────────────────────────────────────────────────────

export const G5_Generators_Geschichte: Record<string, () => CurriculumMCQ[]> = {
  fruehe_hochkulturen: generateFrueheHochkulturen,
  aegypten: generateAegypten,
  griechenland: generateGriechenland,
  rom_republik: generateRomRepublik,
  rom_kaiserreich: generateRomKaiserreich,
  germanen: generateGermanen,
  voelkerwanderung: generateVoelkerwanderung,
};