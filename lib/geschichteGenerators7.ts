// ─── GERMAN GRADE 7 GESCHICHTE GENERATORS ────────────────────────────────────
// Procedural question generators for German Grade 7 History (Early Modern Period)
// Topic: Frühe Neuzeit (Renaissance bis Französische Revolution)
// Each subtopic generates 20 MCQ and 10 Typing questions.
// Language: German (Deutsch) only. Aligned with German Gymnasium Lehrplan.

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

function mulberry32(seed: number) {
  return function() {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[], rng?: () => number): CurriculumMCQ {
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
  return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) };
}

function createTyping(topic: string, subtopic: string, question: string, answer: string | string[]): CurriculumTyping {
  return { type: "typing", topic, subtopic, question, answer };
}

// ─── 1. RENAISSANCE ─────────────────────────────────────────────────────────

function generateRenaissance(seed: number = 701): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "renaissance";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was bedeutet der Begriff 'Renaissance' wörtlich?", "Wiedergeburt", ["Aufklärung", "Revolution", "Zerstörung", "Fortschritt"]],
    ["Welche Epoche diente der Renaissance als Vorbild?", "Die Antike", ["Das Mittelalter", "Die Steinzeit", "Die Neuzeit", "Das Barock"]],
    ["In welchem Land nahm die Renaissance ihren Anfang?", "Italien", ["Deutschland", "Frankreich", "Spanien", "England"]],
    ["Wer gilt als der Inbegriff des Universalgenies der Renaissance?", "Leonardo da Vinci", ["Albrecht Dürer", "Michelangelo", "Erasmus", "Galileo"]],
    ["Welche neue Maltechnik ermöglichte eine realistische Raumdarstellung?", "Zentralperspektive", ["Aquarell", "Mosaik", "Ikonenmalerei", "Abstraktion"]],
    ["Welche italienische Stadt war ein Zentrum der frühen Renaissance?", "Florenz", ["Rom", "Neapel", "Venedig", "Mailand"]],
    ["Wie nannte man reiche Förderer von Kunst und Wissenschaft?", "Mäzene", ["Vasalem", "Ritter", "Zunftmeister", "Lehnsherren"]],
    ["Wer malte die Decke der Sixtinischen Kapelle?", "Michelangelo", ["Leonardo da Vinci", "Raffael", "Donatello", "Botticelli"]],
    ["Was war ein Hauptmerkmal der Renaissance-Architektur?", "Symmetrie und Proportionen nach antikem Vorbild", ["Gotik", "Unregelmäßig", "Fehlen von Fenstern", "Nur Holz"]],
    ["Welcher Wissenschaftler bewies das heliozentrische Weltbild?", "Nikolaus Kopernikus", ["Aristoteles", "Ptolemäus", "Erasmus", "Luther"]],
    ["Was ersetzte das mittelalterliche 'Gottzentrierte' Weltbild?", "Ein menschenzentriertes Weltbild", ["Tierzentriert", "Materiell", "Ohne Gott", "Kein Weltbild"]],
    ["Wer schuf die Skulptur des 'David' in Florenz?", "Michelangelo", ["Bernini", "Donatello", "Leonardo", "Raffael"]],
    ["Wie nennt man die Zeit des Aufbruchs vom 14. bis 16. Jhd.?", "Renaissance", ["Mittelalter", "Moderne", "Antike", "Industrie"]],
    ["Welche Familie förderte die Kunst in Florenz besonders stark?", "Die Medici", ["Habsburger", "Fugger", "Bourbonen", "Tudors"]],
    ["Was untersuchte Leonardo da Vinci, um den Körper besser zu malen?", "Anatomie", ["Pflanzen", "Astronomie", "Chemie", "Kochen"]],
    ["Welche antike Sprache wurde in der Renaissance wieder gelernt?", "Griechisch", ["Arabisch", "Russisch", "Englisch", "Deutsch"]],
    ["Was war das Ideal der Erziehung in der Renaissance?", "Der vielseitig gebildete Mensch", ["Spezialisierter Arbeiter", "Krieger allein", "Mönch allein", "Händler"]],
    ["Wer malte 'Die Schule von Athen'?", "Raffael", ["Leonardo", "Michelangelo", "Tizian", "Dürer"]],
    ["Welches Instrument wurde in der Renaissance weiterentwickelt?", "Die Laute", ["Saxophon", "Keyboard", "E-Gitarre", "Schlagzeug"]],
    ["Was war 'Ad Fontes'?", "Der Ruf 'Zurück zu den Quellen'", ["Ein Wein", "Ein Schlachtruf", "Ein Gebet", "Ein Gesetz"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie nennt man die Wiedergeburt der Antike?", "Renaissance"],
    ["In welchem Land begann die Renaissance?", "Italien"],
    ["Wer malte die Mona Lisa?", ["Leonardo da Vinci", "Leonardo"]],
    ["Welche Stadt war das Zentrum der Medici?", "Florenz"],
    ["Wie nennt man die räumliche Darstellung?", "Zentralperspektive"],
    ["Wer schuf den David?", "Michelangelo"],
    ["Wie hießen die Förderer der Künste?", "Maezene"],
    ["Welches antike Volk war Vorbild?", "Roemer"],
    ["Wer bewies das heliozentrische Weltbild?", "Kopernikus"],
    ["Hauptthema der Renaissance-Kunst?", "Mensch"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 2. HUMANISMUS ──────────────────────────────────────────────────────────

function generateHumanismus(seed: number = 702): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "humanismus";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was steht im Zentrum des Humanismus?", "Die Würde und Bildung des Menschen", ["Die Macht des Königs", "Die Strenge der Kirche", "Das Gold", "Die Jagd"]],
    ["Welcher Gelehrte gilt als 'Fürst der Humanisten'?", "Erasmus von Rotterdam", ["Martin Luther", "Gutenberg", "Karl der Große", "Kolumbus"]],
    ["Was forderten Humanisten beim Studium alter Texte?", "Ad Fontes – Zurück zu den Quellen", ["Bücher verbrennen", "Nur Papstmeinung", "Antike ignorieren", "Nur Deutsch"]],
    ["In welcher Sprache schrieben Humanisten meist?", "Latein", ["Deutsch", "Englisch", "Französisch", "Spanisch"]],
    ["Welche Fähigkeit war für Humanisten die wichtigste?", "Kritisches Denken und Vernunft", ["Gehorsam", "Kraft", "Reiten", "Singen"]],
    ["Was war das Ziel humanistischer Bildung?", "Entfaltung der Persönlichkeit", ["Soldatenausbildung", "Dogmen lernen", "Reichtum", "Schweigen"]],
    ["Wer schrieb 'Lob der Torheit'?", "Erasmus von Rotterdam", ["Aquin", "Aristoteles", "Cäsar", "Bingen"]],
    ["Was unterscheidet den Humanisten vom MA-Gelehrten?", "Er hinterfragt Lehrmeinungen", ["Er glaubt alles", "Darf nicht lesen", "Ritter", "Waldleben"]],
    ["Welcher deutsche Humanist verfasste die 'Dunkelmännerbriefe'?", "Ulrich von Hutten", ["Dürer", "Fugger", "Maximilian", "Luther"]],
    ["Wie verbreiteten sich Ideen so schnell?", "Durch den Buchdruck", ["Brieftauben", "Internet", "Sagen", "Kaiser"]],
    ["Rolle der Bildung?", "Weg zur Freiheit", ["Nur für Priester", "Abgelehnt", "Dient Krieg", "Verboten"]],
    ["Was bedeutet 'Humanismus'?", "Menschlichkeit / Bildung", ["Göttlichkeit", "Tierwelt", "Kriegskunst", "Handwerk"]],
    ["Welche Philosophie beeinflusste sie?", "Stoa und Platonismus", ["Nihilismus", "Marxismus", "Scholastik", "Existentialismus"]],
    ["Was dachten sie über das Individuum?", "Jeder ist einzigartig and wertvoll", ["Werkzeug des Staates", "Alle gleich", "Einzelner zählt nichts", "Nur Reiche"]],
    ["Welches Fach wurde gefördert?", "Philologie", ["Chemie", "Informatik", "Sport", "Bau"]],
    ["Kritik an der Kirche?", "Aberglaube und mangelnde Bildung", ["Zu viele Bücher", "Messen zu kurz", "Papst verheiratet", "Zu viel Latein"]],
    ["Wer schrieb 'Utopia'?", "Thomas Morus", ["Erasmus", "Luther", "Machiavelli", "Dante"]],
    ["Wie sahen sie Geschichte?", "Lehrmeisterin", ["Kette von Fehlern", "Unwichtig", "Märchen", "Gottesurteil"]],
    ["Was war die 'Dunkelheit'?", "Das 'finstere' Mittelalter", ["Nacht", "Blindheit", "Wald", "Mangel an Gold"]],
    ["Was forderte Hutten für Deutschland?", "Einigkeit und Freiheit von Rom", ["Mehr Steuern", "Ein Verbot des Buchdrucks", "Einen Krieg gegen Spanien", "Gar nichts"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Geisteshaltung, die den Menschen in den Mittelpunkt stellt?", "Humanismus"],
    ["Humanist aus Rotterdam?", "Erasmus"],
    ["Wichtigste Sprache der Humanisten?", "Latein"],
    ["Slogan 'Zurück zu den Quellen'?", "Ad Fontes"],
    ["Erfindung zur Verbreitung?", "Buchdruck"],
    ["Was sollte man gebrauchen?", "Vernunft"],
    ["Wer schrieb 'Utopia'?", "Thomas Morus"],
    ["Zentrum der Studien?", "Italien"],
    ["Ziel der Bildung?", "Persönlichkeit"],
    ["Kritiker alter Meinungen?", "Humanisten"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 3. BUCHDRUCK ──────────────────────────────────────────────────────────

function generateBuchdruck(seed: number = 703): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "buchdruck";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wer erfand um 1450 den Buchdruck?", "Johannes Gutenberg", ["Luther", "Dürer", "da Vinci", "Fugger"]],
    ["In welcher Stadt wurde er erfunden?", "Mainz", ["Berlin", "Wien", "Köln", "München"]],
    ["Wichtigste Neuerung?", "Bewegliche Lettern aus Metall", ["Papier", "Glas", "Dampf", "Hand"]],
    ["Erstes großes Werk?", "Die Bibel", ["Kochbuch", "Wörterbuch", "Koran", "Gesetz"]],
    ["Herstellung davor?", "Von Hand abgeschrieben", ["Schreibmaschinen", "Computer", "Stempel", "Gar nicht"]],
    ["Folge des Buchdrucks?", "Schnelle und günstige Info-Verbreitung", ["Bücher teurer", "Keiner liest", "Verbot", "Weniger Wissen"]],
    ["Welches Material wurde billiger?", "Papier", ["Pergament", "Leder", "Ton", "Wachs"]],
    ["Wichtig für Reformation?", "Luthers Schriften massenhaft verbreitet", ["Luther erfand es", "Heilig", "Verboten", "Drucker waren Lutheraner"]],
    ["Folge für Bildung?", "Zugänglich für mehr Menschen", ["Nur Adel", "Schulen weg", "Leseverbot", "Keine Lehrer"]],
    ["Werkstatt Name?", "Druckerei", ["Fabrik", "Atelier", "Manufaktur", "Stube"]],
    ["Handgießinstrument Zweck?", "Schnelles Gießen von Lettern", ["Musik", "Pflügen", "Waffe", "Medizin"]],
    ["Bücher vor 1500?", "Inkunabeln", ["Manuskript", "Papyrus", "Codex", "Antiquität"]],
    ["Beruf des Kopisten?", "Verlor an Bedeutung", ["Reicher", "Wichtigster", "Gleich", "Geschützt"]],
    ["Rolle für Wissenschaft?", "Ergebnisse weltweit vergleichbar", ["Verlangsamt", "Geheim", "Kein Einfluss", "Druckverbot"]],
    ["Was ermöglichte er für Sprachen?", "Vereinheitlichung der Rechtschreibung", ["Dialekte", "Verschwinden", "Verbot", "Gar nichts"]],
    ["Lettern Material?", "Legierung (Blei, Zinn, Antimon)", ["Gold", "Holz", "Ton", "Plastik"]],
    ["Farbauftrag?", "Lederballen", ["Pinsel", "Finger", "Eintauchen", "Trocken"]],
    ["Setzen Definition?", "Anordnen der Lettern", ["Ausruhen", "Verkaufen", "Binden", "Kochen"]],
    ["Neue Info-Formen?", "Flugblätter und Zeitungen", ["TV", "Radio", "Internet", "Postkarte"]],
    ["Ehrentitel Gutenbergs?", "Mann des Jahrtausends", ["König", "Papst", "Ritter", "Meister"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Erfinder des Buchdrucks?", "Gutenberg"],
    ["Erfindungsort?", "Mainz"],
    ["Metall-Buchstaben?", "Lettern"],
    ["Ersatz für Pergament?", "Papier"],
    ["Großes Erstlingswerk?", "Bibel"],
    ["Erste Zeitungsformen?", "Flugblaetter"],
    ["Vorname Gutenbergs?", "Johannes"],
    ["Jahrhundert der Erfindung?", "15"],
    ["Wiegendrucke?", "Inkunabeln"],
    ["Verfahren?", "Hochdruck"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 4. ENTDECKUNGSFAHRTEN ───────────────────────────────────────────────────

function generateEntdeckungsfahrten(seed: number = 704): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "entdeckungsfahrten";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wer erreichte 1492 Amerika?", "Kolumbus", ["da Gama", "Polo", "Magellan", "Cook"]],
    ["Seeweg um Afrika nach Indien?", "Vasco da Gama", ["Kolumbus", "Magellan", "Cortes", "Pizarro"]],
    ["Erste Weltumsegelung Leitung?", "Magellan", ["Kolumbus", "Vespucci", "Drake", "Cook"]],
    ["Hauptmotiv?", "Gold, Gewürze, Edelsteine", ["Nordpol", "Pinguine", "Ozeanreinigung", "Urlaub"]],
    ["Neues Schiff?", "Karavelle", ["Galeere", "U-Boot", "Dampfer", "Kanu"]],
    ["Grund für Seeweg-Suche?", "Landweg blockiert / Osmanen", ["Angst vor Pferden", "Kein Wasser", "Segellust", "Insel-Indien"]],
    ["Amerika Name nach?", "Amerigo Vespucci", ["Kolumbus", "Ferdinand", "Rex", "Magellan"]],
    ["Gerät für Himmelsrichtung?", "Kompass", ["Sextant", "Fernrohr", "GPS", "Astrolabium"]],
    ["Astrolabium Zweck?", "Breite bestimmen", ["Tiefe", "Wind", "Gewicht", "Zeit"]],
    ["Führende Nation zuerst?", "Portugal", ["Deutschland", "Russland", "Schweden", "Österreich"]],
    ["Heinrich der Seefahrer Rolle?", "Förderer", ["Pirat", "Entdecker", "König", "Erfinder"]],
    ["Vertrag von Tordesillas?", "Aufteilung Welt Spanien/Portugal", ["Frieden Indigene", "Ende Druck", "Hanse", "China"]],
    ["Wo glaubte Kolumbus zu sein?", "Indien", ["Amerika", "China", "Japan", "Australien"]],
    ["Zuerst erreicht?", "Bahamas", ["Hawaii", "Island", "Madagaskar", "Irland"]],
    ["Anzahl Schiffe Kolumbus?", "Drei", ["Zehn", "Eins", "Fünf", "Fünfzig"]],
    ["Schicksal Magellan?", "Getötet (Philippinen)", ["Heimkehr", "Spanien-König", "Verschollen", "Mönch"]],
    ["Dauer Weltumsegelung?", "Fast drei Jahre", ["Drei Monate", "Zehn Jahre", "Woche", "Monat"]],
    ["Ozean 'Pazifik' Benennung?", "Magellan", ["Kolumbus", "Drake", "Vespucci", "Gama"]],
    ["Risiko für Seeleute?", "Skorbut, Stürme, Hunger", ["Zuviel Obst", "TV", "Steuern", "Internet"]],
    ["Beweis durch Magellan?", "Erde ist Kugel", ["Flach", "Keine Kontinente", "Ende am Horizont", "Goldbäume"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Amerika-Entdecker?", "Kolumbus"],
    ["Schiffsart?", "Karavelle"],
    ["Indien-Seeweg (Name)?", ["Vasco da Gama", "da Gama"]],
    ["Weltumsegelung?", "Magellan"],
    ["Namensgeber Amerika?", "Vespucci"],
    ["Förderland Kolumbus?", "Spanien"],
    ["Richtungsgerät?", "Kompass"],
    ["Kostbares Gewürz?", ["Pfeffer", "Zimt"]],
    ["Ozean dazwischen?", "Atlantik"],
    ["Mangelkrankheit?", "Skorbut"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 5. EROBERUNG AMERIKAS ───────────────────────────────────────────────────

function generateEroberungAmerikas(seed: number = 705): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "eroberung_amerikas";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Eroberer Azteken?", "Cortes", ["Pizarro", "Kolumbus", "Magellan", "Atahualpa"]],
    ["Eroberer Inka?", "Pizarro", ["Cortes", "Vespucci", "Montezuma", "Gama"]],
    ["Letzter Aztekenherrscher?", "Montezuma II.", ["Atahualpa", "Pizarro", "Cortes", "Huitzilopochtli"]],
    ["Letzter Inkaherrscher?", "Atahualpa", ["Montezuma", "Cortes", "Pizarro", "Tupac"]],
    ["Azteken-Hauptstadt?", "Tenochtitlan", ["Cusco", "Lima", "Palenque", "Tikal"]],
    ["Inka-Hauptstadt?", "Cusco", ["Madrid", "Tenochtitlan", "Lima", "Tikal"]],
    ["Unbekannte Waffe?", "Feuerwaffen / Pferde", ["Bogen", "Speer", "Schild", "Messer"]],
    ["Größte Todesursache?", "Eingeschleppte Krankheiten", ["Hunger", "Vulkane", "Tiere", "Krieg"]],
    ["Name der Eroberer?", "Konquistadoren", ["Ritter", "Mäzene", "Humanisten", "Zünfte"]],
    ["Hauptziel Spanien?", "Gold und Silber", ["Natur", "Unis", "Kunst", "Olivenöl"]],
    ["Rolle Kirche?", "Missionierung", ["Schutz Götter", "Widerstand", "Gar keine", "Moscheen"]],
    ["Encomienda Definition?", "Zwangsarbeitssystem", ["Festmahl", "Vertrag", "Schiff", "Lied"]],
    ["Kritiker der Grausamkeit?", "Las Casas", ["Cortes", "Karl V.", "Pizarro", "Loyola"]],
    ["Name der Gebiete?", "Vizekönigreich", ["Provinz", "Kolonie", "Freistaat", "Land des Goldes"]],
    ["Schicksal indigene Kultur?", "Zerstört / Unterdrückt", ["Staatssprache", "Unverändert", "Übernommen", "Vorbild"]],
    ["Edelmetall aus Potosi?", "Silber", ["Gold", "Platin", "Eisen", "Kupfer"]],
    ["Requerimiento?", "Aufforderung zur Unterwerfung", ["Rezept", "Bericht", "Buch", "Tagebuch"]],
    ["Grund für Sieg Weniger?", "Technik, Krankheiten, Bündnisse", ["Keine Waffen", "Fliegen", "Götter", "Zufall"]],
    ["Folge Gold in Europa?", "Inflation", ["Alle reich", "Meer", "Kirche", "Nichts"]],
    ["Pflanzen aus Amerika?", "Mais, Kartoffel, Tomate", ["Weizen", "Reis", "Apfel", "Tulpe"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Azteken-Eroberer?", "Cortes"],
    ["Inka-Eroberer?", "Pizarro"],
    ["Hauptstadt Azteken?", "Tenochtitlan"],
    ["Hauptstadt Inka?", "Cusco"],
    ["Krankheit (P...)?", "Pocken"],
    ["Name der Eroberer?", "Konquistadoren"],
    ["Hauptmetall?", "Gold"],
    ["Nahrungsmittel (K...)?", "Kartoffel"],
    ["König Azteken?", "Montezuma"],
    ["König Inka?", "Atahualpa"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 6. REFORMATION ──────────────────────────────────────────────────────────

function generateReformation(seed: number = 706): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "reformation";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Hauptgrund Kritik Luthers?", "Ablasshandel", ["Musik", "Farbe", "Essen", "Krankenhäuser"]],
    ["Thesen-Veröffentlichung Datum?", "31. Oktober 1517", ["24. Dez", "1. Jan", "15. Aug", "10. Mai"]],
    ["Ort Thesenanschlag?", "Schlosskirche Wittenberg", ["Dom Köln", "Dom Mainz", "Petersdom", "Dom Aachen"]],
    ["Forderung Luthers?", "Bibel allein (Sola Scriptura)", ["Macht Papst", "Prunk", "Ablass", "Kloster-Ende"]],
    ["Bibel-Sprache Luthers?", "Deutsch", ["Latein", "Griechisch", "Hebräisch", "Französisch"]],
    ["Reichstag zu Worms 1521?", "Widerruf verweigert", ["Kaiserwahl", "Begnadigung", "Gründung", "Rücktritt"]],
    ["Wormser Edikt?", "Verbot Luther-Lehren / Acht", ["Handel", "Ehe", "Druck", "Tee"]],
    ["Ort Bibelübersetzung?", "Wartburg", ["Vatikan", "Versailles", "Garten", "Gefängnis"]],
    ["Name auf Wartburg?", "Junker Jörg", ["Mönch Martin", "König", "Bauer", "Graf"]],
    ["Beschützer Luthers?", "Friedrich der Weise", ["Karl V.", "Ludwig XIV.", "Papst", "Fugger"]],
    ["Bedeutung 'Reformation'?", "Erneuerung", ["Zerstörung", "Spaltung", "Krieg", "Gesetz"]],
    ["Name Anhänger später?", "Protestanten", ["Katholiken", "Jesuiten", "Orthodoxe", "Heiden"]],
    ["Hilfreiche Erfindung?", "Buchdruck", ["Pulver", "Kompass", "Rad", "Dampf"]],
    ["Sola Fide Bedeutung?", "Gerechtfertigung durch Glauben", ["Geld spenden", "Ritter sein", "Gott vergibt nie", "Papst"]],
    ["Papst gegen Luther?", "Leo X.", ["Franziskus", "Gregor", "Benedikt", "Innozenz"]],
    ["Problem lateinische Bibel?", "Volk verstand sie nicht", ["Schwer", "Falsch", "Verboten", "Teuer"]],
    ["Ablassbrief Zweck?", "Erlass von Strafen", ["Reisepass", "Brief", "Steuer", "Brot"]],
    ["Reaktion Karl V.?", "Blieb katholisch / Einheit", ["Wurde Lutheraner", "Gold", "Ignorierte", "Trat zurück"]],
    ["Folge für Deutschland?", "Konfessionelle Spaltung", ["Einigkeit", "Kriegsende", "Keine Religion", "Eroberung Rom"]],
    ["Augsburger Religionsfriede?", "1555", ["1517", "1648", "1521", "1600"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Reformation Mönch?", "Luther"],
    ["Stadt Thesen?", "Wittenberg"],
    ["Anzahl Thesen?", "95"],
    ["Kritisierter Handel?", "Ablasshandel"],
    ["Werk auf Wartburg?", "Bibel"],
    ["Zielsprache Bibel?", "Deutsch"],
    ["Burgname?", "Wartburg"],
    ["Pseudonym?", "Junker Joerg"],
    ["Name der Anhänger?", "Protestanten"],
    ["Jahr der Reformation?", "1517"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 7. BAUERNKRIEG ──────────────────────────────────────────────────────────

function generateBauernkrieg(seed: number = 707): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "bauernkrieg";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wann war der Bauernkrieg?", "1524 bis 1526", ["1618-1648", "1789-1799", "1492-1500", "1517-1521"]],
    ["Radikaler Bauernführer?", "Thomas Müntzer", ["Fugger", "Karl V.", "Friedrich", "Erasmus"]],
    ["Forderungs-Dokument?", "Die 12 Artikel", ["Thesen", "Bulle", "Verfassung", "Edikt"]],
    ["Hauptforderung?", "Aufhebung Leibeigenschaft", ["Mehr Steuern", "Schlösser", "Ende Druck", "Frankreich-Krieg"]],
    ["Name der Bauerngruppen?", "Haufen", ["Armeen", "Zünfte", "Gilden", "Divisionen"]],
    ["Schlachtort 1525?", "Frankenhausen", ["Waterloo", "Leipzig", "Wien", "Berlin"]],
    ["Haltung Luthers?", "Verurteilte Gewalt scharf", ["Anführer", "Neutral", "Freiheitsruf", "Forderte Mord"]],
    ["Fahnen-Symbol?", "Bundschuh", ["Adler", "Löwe", "Kreuz", "Krone"]],
    ["Gegner der Bauern?", "Grundherren", ["Handwerker", "Papst", "Kaufleute", "Ausland"]],
    ["Ergebnis?", "Bauern vernichtend geschlagen", ["Freiheit", "Kompromiss", "Kaiser abgesetzt", "Nichts"]],
    ["Rolle Bibel?", "Begründung Freiheit", ["Verbot", "Ignoriert", "Zu kompliziert", "Nur Latein"]],
    ["Thomas Müntzer Ende?", "Hingerichtet", ["Begnadigt", "Flucht", "Mönch", "Ritter"]],
    ["Anzahl Tote Bauern?", "Über 70.000", ["100", "Million", "12", "Keiner"]],
    ["Warum Niederlage?", "Schlechte Bewaffnung / Orga", ["Keine Lust", "Zuviel Gold", "Zu wenige", "Gelände"]],
    ["Forderung Pfarrer?", "Wahl durch Gemeinde", ["Verbot", "Reich", "Nur Adel", "Gar nichts"]],
    ["Aufstands-Region?", "Süddeutschland / Thüringen", ["Norden", "Rügen", "Spanien", "Italien"]],
    ["Gottes Recht Definition?", "Freiheit und Gleichheit", ["Adel über allem", "Geld spenden", "Nur Latein", "Heiliger Krieg"]],
    ["Götz von Berlichingen?", "Ritter / Anführer Haufen", ["Papst", "Maler", "Erfinder", "Mainzer"]],
    ["Folge für Überlebende?", "Lasten wurden schwerer", ["Eigenes Land", "Adlige", "Keine Arbeit", "Wahlrecht"]],
    ["Ende offiziell?", "1526", ["1517", "1648", "1555", "1521"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Radikaler Führer?", "Muentzer"],
    ["Fahnen-Symbol?", "Bundschuh"],
    ["Anzahl Artikel?", "12"],
    ["Startjahr?", "1524"],
    ["Hauptgegner-System?", "Leibeigenschaft"],
    ["Schlacht-Ort?", "Frankenhausen"],
    ["Name der Gruppen?", "Haufen"],
    ["Gegner-Reformator?", "Luther"],
    ["Waldrecht?", "Jagdrecht"],
    ["Wichtigstes Buch?", "Bibel"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 8. GEGENREFORMATION ─────────────────────────────────────────────────────

function generateGegenreformation(seed: number = 708): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "gegenreformation";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Hauptziel?", "Erneuerung Katholizismus / Rückgewinnung", ["Abschaffung Papst", "Bibel-Vernichtung", "China", "Burgen"]],
    ["Gründer Jesuiten?", "Ignatius von Loyola", ["Luther", "Calvin", "Franz", "Erasmus"]],
    ["Reformkonzil Ort?", "Trient", ["Worms", "Münster", "Nürnberg", "Wien"]],
    ["Aufgabe Jesuiten?", "Bildung / Mission", ["Feldarbeit", "Bier", "Bauern-Krieg", "Pyramiden"]],
    ["Trient Bestätigung?", "Papst-Autorität / 7 Sakramente", ["Luther-Lehre", "Beichte weg", "Bilderverbot", "Deutsch"]],
    ["Baustil?", "Barock", ["Gotik", "Romanik", "Renaissance", "Klassik"]],
    ["Bücher-Überwachung?", "Index", ["Lex Salica", "Grundgesetz", "12 Artikel", "Koran"]],
    ["Erfolgsgebiete?", "Bayern, Österreich, Polen", ["Norden", "England", "Skandinavien", "Schottland"]],
    ["Jesuitenstil Merkmal?", "Prunkvoll / beeindruckend", ["Schlicht", "Holz", "Glas", "Kein Stil"]],
    ["Zweck Schulen?", "Ausbildung Elite", ["Nur Beten", "Handwerk", "Krieg", "Bauern"]],
    ["Name Jesuiten wörtlich?", "Gesellschaft Jesu", ["Freunde", "Krieger", "Lehrer", "Brüder"]],
    ["Ablasshandel-Entscheidung?", "Missbrauch verboten / Lehre bleibt", ["Abgeschafft", "Kostenlos", "Gleich", "Verdoppelt"]],
    ["Inquisition Rolle?", "Schutz Glauben / Strafen", ["Sport", "Steuer", "Hilfe", "Krankenhaus"]],
    ["Emotionale Bindung?", "Rituale, Musik, Pracht", ["Gesangsverbot", "Kurze Messen", "Nur Latein", "Internet"]],
    ["Konfessionalisierung?", "Festigung Glaubensrichtungen", ["Abschaffung", "Mode", "Landwirtschaft", "Städte"]],
    ["Karl Borromäus?", "Reformbischof", ["Fürst", "König", "Entdecker", "Erfinder"]],
    ["Jesuiten an Höfen?", "Beichtväter / Berater", ["Köche", "Gold", "Wächter", "Tänzer"]],
    ["Religionspartei?", "Spaltung in zwei Lager", ["Fest", "Musik", "Gesetz", "Steuer"]],
    ["Dauer Trient?", "1545 bis 1563", ["1517-1521", "1618-1648", "1492-1500", "1789-1799"]],
    ["Einheit erreicht?", "Nein / Spaltung blieb", ["Ja, katholisch", "Ja, lutherisch", "Keine Kirche", "Keine Spaltung"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Jesuiten-Gründer?", "Loyola"],
    ["Konzil-Ort?", "Trient"],
    ["Stilrichtung?", "Barock"],
    ["Orden-Name?", "Jesuiten"],
    ["Bücher-Liste?", "Index"],
    ["Zentrum?", "Italien"],
    ["Aufgabe?", "Bildung"],
    ["Kirchenoberhaupt?", "Papst"],
    ["Zielgruppe?", "Protestanten"],
    ["Was wurde erneuert?", "Katholische Reform"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 9. DREISSIGJÄHRIGER KRIEG ───────────────────────────────────────────────

function generateDreissigjaehrigerKrieg(seed: number = 709): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "dreissigjaehriger_krieg";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Anlass?", "Prager Fenstersturz 1618", ["Entdeckung Amerika", "Taufe", "Luthers Tod", "Versailles"]],
    ["Dauer?", "1618 bis 1648", ["1517-1547", "1756-1786", "1492-1522", "1800-1830"]],
    ["Kaiserlicher Feldherr?", "Wallenstein", ["Gustav Adolf", "Friedrich", "Napoleon", "Bismarck"]],
    ["Schwedischer König 1630?", "Gustav II. Adolf", ["Karl XII.", "Christian", "Sigismund", "Erik"]],
    ["Wallenstein Finanzierung?", "Kontributionen", ["Kredite", "Goldfunde", "Spenden", "Bibeln"]],
    ["Frankreich-Rolle?", "Gegen Habsburger / Macht", ["Neutral", "Pro-Kaiser", "Wikinger", "Kein Staat"]],
    ["System-Name Versorgung?", "Der Krieg ernährt den Krieg", ["Soldaten-Garten", "Kaiser-Gold", "Wetten", "Keine"]],
    ["Lützen 1632?", "Gustav Adolf fiel", ["Kriegsende", "Besiegt", "Römer", "Nichts"]],
    ["Friedensschluss?", "Westfälischer Friede 1648", ["Sieg Kaiser", "Sieg Schweden", "Zerstörung Rom", "Nie"]],
    ["Schauplatz?", "Heiliges Römisches Reich", ["Spanien", "England", "Russland", "Frankreich"]],
    ["Wallenstein-Person?", "Böhmischer Adliger / General", ["Schwede", "Pfarrer", "Franzose", "Bauernführer"]],
    ["Protestanten-Bündnis?", "Union", ["Währung", "Orden", "Hanse", "Garde"]],
    ["Katholiken-Bündnis?", "Liga", ["Team", "Bund", "Flotte", "Gesetz"]],
    ["Wallenstein Ende?", "Ermordet 1634", ["Kaiser", "Alter", "Flucht", "Papst"]],
    ["Söldner Rolle?", "Kämpften für Geld", ["Freiwillige", "Religiös", "Gab es nicht", "Ritter"]],
    ["Restitutionsedikt 1629?", "Besitz-Rückgabe Katholiken", ["Frieden", "Kanonen-Verbot", "Schule", "Handel"]],
    ["Tilly?", "Kaiserlicher Feldherr", ["Admiral", "König", "Gelehrter", "Entdecker"]],
    ["Epochenname?", "Glaubenskriege", ["Goldene 20er", "Aufklärung", "Industrie", "Völkerwanderung"]],
    ["Stadt-Zerstörung 1631?", "Magdeburg", ["Berlin", "Wien", "München", "Hamburg"]],
    ["Prager Exekution?", "Hinrichtung Aufständische", ["Fest", "Mode", "Frieden", "Theater"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Startjahr?", "1618"],
    ["Endjahr?", "1648"],
    ["Kaiser-General?", "Wallenstein"],
    ["Schweden-Koenig?", ["Gustav Adolf", "Gustav II. Adolf"]],
    ["Fenstersturz-Stadt?", "Prag"],
    ["Friede-Name?", "Westfaelischer"],
    ["Dauer (Jahre)?", "30"],
    ["Gegner-Land Habsburger?", "Frankreich"],
    ["Geld-Soldaten?", "Soeldner"],
    ["Fluss Prag?", "Moldau"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 10. LEIDEN DER BEVÖLKERUNG ──────────────────────────────────────────────

function generateLeidenBevoelkerung(seed: number = 710): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "leiden_bevoelkerung";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Haupttodesursache?", "Hunger und Seuchen", ["Schlachten", "Duelle", "Schiffe", "Alter"]],
    ["Bevölkerungs-Verlust Reich?", "Etwa ein Drittel", ["Niemand", "90 %", "5 %", "Nur Soldaten"]],
    ["Soldaten vs. Bauern?", "Raub von Vieh / Saatgut", ["Hilfe Ernte", "Schulen", "Gold", "Ignoriert"]],
    ["Wüstung Definition?", "Verlassenes / zerstörtes Dorf", ["Schloss", "Garten", "Waffe", "Lied"]],
    ["Schwedentrunk?", "Foltermethode", ["Getränk", "Gruß", "Medizin", "Erfrischung"]],
    ["Stadt-Probleme?", "Überfüllung, Hunger, Krankheit", ["Kino zu", "Zuviel Arbeit", "Hitze", "Druck"]],
    ["Überlebensstrategie?", "Flucht Wald / Städte", ["Amerika", "Supermarkt", "Bett", "Ignoriert"]],
    ["Landwirtschaft Zustand?", "Zusammenbruch", ["Blüte", "Nur Wein", "Maschinen", "Gleich"]],
    ["Schnelle Krankheit?", "Pest", ["Grippe", "Schnupfen", "Sonnenbrand", "Skorbut"]],
    ["Psychische Folge?", "Angst / Hoffnungslosigkeit", ["Freude", "Keine", "Sprachen", "Lust"]],
    ["Hilfslosigkeit Grund?", "Strukturen zerstört", ["Verboten", "Niemand wollte", "Alle reich", "Papst"]],
    ["Handel Zustand?", "Erlahmt", ["Schneller", "Internet", "Nur Gold", "Gleich"]],
    ["Schutzlose Gruppen?", "Frauen, Kinder, Alte", ["Ritter", "Kaiser", "Generäle", "Flotte"]],
    ["Einquartierung?", "Aufnahme von Soldaten", ["Klöster", "Häuser blau", "Miete", "Fest"]],
    ["Währung?", "Geldentwertung (Inflation)", ["Wertvoller", "Muscheln", "Gold weg", "Nichts"]],
    ["Kleine Eiszeit?", "Kühles Wetter / Missernten", ["Eissalon", "Urlaub", "Gesetz", "Kühlschrank"]],
    ["Not-Nahrung?", "Wurzeln, Rinde, Unkraut", ["Pizza", "Schokolade", "Früchte", "Nichts"]],
    ["Erholungsdauer?", "Viele Jahrzehnte / 100 Jahre", ["Wochen", "Jahr", "Minuten", "Sofort"]],
    ["Söldner-Zerstörung Grund?", "Raub mangels Sold", ["Ernteschutz", "Wiederaufbau", "Disziplin", "Nie in Dörfer"]],
    ["Magdeburgisieren?", "Völlige Zerstörung Stadt", ["Uni", "Krönung", "Gesetz", "Kuchen"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Kriegskrankheit?", "Pest"],
    ["Geldentwertung?", "Inflation"],
    ["Leidender Stand?", "Bauern"],
    ["Hauptmangel?", ["Nahrung", "Essen"]],
    ["Jauche-Folter?", "Schwedentrunk"],
    ["Toten-Anteil?", ["Drittel", "ein Drittel"]],
    ["Hilfe-Gebet?", "Bittgebet"],
    ["Verlassenes Dorf?", "Wuestung"],
    ["Bauern-Verlust?", "Vieh"],
    ["Jahrhundert?", "17"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 11. WESTFÄLISCHER FRIEDE ────────────────────────────────────────────────

function generateWestfaelischerFriede(seed: number = 711): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "westfaelischer_friede";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Verhandlungsorte?", "Münster und Osnabrück", ["Berlin/Wien", "Paris/London", "Rom/Neapel", "Prag/Warschau"]],
    ["Unterschrift Jahr?", "1648", ["1618", "1517", "1789", "1555"]],
    ["Religiöse Bestimmung?", "Gleichberechtigung Konfessionen", ["Verbot", "Nur Katholisch", "Kaiser Gott", "Islam"]],
    ["Fürsten Status?", "Souveränität (Selbstständigkeit)", ["Machtverlust", "Abgesetzt", "Nach Schweden", "Könige Frankreich"]],
    ["Gestärkte Mächte?", "Frankreich und Schweden", ["Spanien", "Italien", "Russland", "Österreich"]],
    ["Schweiz / Niederlande?", "Unabhängig vom Reich", ["Teil Preußen", "Kaiser-Besetzung", "Französisch", "Weg"]],
    ["Verhandlungsdauer?", "Fünf Jahre", ["Wochen", "Zehn Jahre", "Monat", "Jahrhundert"]],
    ["Normaljahr 1624?", "Stichtag Besitzstand", ["Ohne Krieg", "Geburt", "Zeitung", "Regen"]],
    ["Völkerrecht Beginn?", "Anerkennung Souveränität", ["Waffenverbot", "EU", "Grenzen weg", "Demokratie"]],
    ["Katholischer Ort?", "Münster", ["Osnabrück", "Berlin", "Wien", "London"]],
    ["Protestantischer Ort?", "Osnabrück", ["Münster", "Rom", "Paris", "Venedig"]],
    ["Kaiser-Macht?", "Stark eingeschränkt", ["Absolut", "Abgesetzt", "Papst", "Gott"]],
    ["Mitteilung Volk?", "Flugblätter, Boten, Feuer", ["TV", "Radio", "Geheim", "Englisch"]],
    ["Gremium Fürsten?", "Regensburg / Reichstag", ["Parlament", "Senat", "Duma", "Versammlung"]],
    ["Elsass-Schicksal?", "Teile an Frankreich", ["Unabhängig", "Schweden", "Kaiserreich", "Verlassen"]],
    ["Vorpommern-Schicksal?", "An Schweden", ["Polnisch", "Dänisch", "Kaiser", "Verkauft"]],
    ["Staatsform Reich danach?", "Lockerer Staatenbund", ["Zentralstaat", "Demokratie", "Republik", "Diktatur"]],
    ["Verhandlungsführer Kaiser?", "Trauttmansdorff", ["Wallenstein", "Napoleon", "Bismarck", "Luther"]],
    ["Neu anerkannte Konfession?", "Reformierte (Calvinisten)", ["Lutheraner", "Katholiken", "Muslime", "Anglikaner"]],
    ["Art des Friedens?", "Europäischer Machtfriede", ["Nur Gott", "Nur Geld", "Nur USA", "Handelsvertrag"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Kriegsende Jahr?", "1648"],
    ["Stadt Münster / ...?", "Osnabrueck"],
    ["Unabhängiger Staat?", ["Schweiz", "Niederlande"]],
    ["Selbstständigkeit Name?", "Souveraenitaet"],
    ["Elsass-Besitzer?", "Frankreich"],
    ["Vorpommern-Besitzer?", "Schweden"],
    ["Name des Friedens?", "Westfaelischer"],
    ["Stichtag?", "Normaljahr"],
    ["Gegner der Fürsten?", "Kaiser"],
    ["Sprache?", "Latein"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 12. ABSOLUTISMUS IN FRANKREICH ──────────────────────────────────────────

function generateAbsolutismusFrankreich(seed: number = 712): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "absolutismus_frankreich";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Ludwig XIV. Beiname?", "Sonnenkönig", ["Mondkönig", "Große", "Kurze", "Gerechte"]],
    ["Berühmter Satz?", "L'état, c'est moi", ["Freiheit", "Brot", "Sintflut", "Gott"]],
    ["Absolutismus Merkmal?", "Herrscher über dem Gesetz", ["Volk wählt", "Teilung Macht", "Papst", "Verfassung"]],
    ["Schloss?", "Versailles", ["Neuschwanstein", "Sanssouci", "Hofburg", "Windsor"]],
    ["Machtstütze?", "Stehendes Heer", ["Internet", "Wahlen", "Gewerkschaft", "Presse"]],
    ["Sonnen-Symbolik?", "Alles dreht sich um ihn", ["Kleidung", "Osten", "Winter", "Zufall"]],
    ["Adels-Kontrolle?", "Hofleben / Zeremoniell", ["Einsperren", "Abschaffung", "Ganze Macht", "Ignorieren"]],
    ["Finanzminister?", "Colbert", ["Richelieu", "Mazarin", "Napoleon", "Robespierre"]],
    ["Gottesgnadentum?", "Macht von Gott", ["Gott Diener", "König Gott", "Papst Chef", "Gott Strafe"]],
    ["Stehendes Heer Definition?", "Immer einsatzbereit", ["Dürfen nicht sitzen", "Statuen", "Neu gewählt", "Ritter"]],
    ["Wirtschaftspolitik?", "Merkantilismus", ["Sozial", "Kommunismus", "Kapitalismus", "Tausch"]],
    ["Merkantilismus Ziel?", "Viel Export / Gold in Kasse", ["Alle reich", "Handelsverbot", "Nur Land", "Geld Ausland"]],
    ["Anzahl Stände?", "Drei", ["Zwei", "Vier", "Zehn", "Keine"]],
    ["Dritter Stand?", "Bauern / Stadtbürger", ["Ritter", "Priester", "Ausländer", "Beamte"]],
    ["Hauptsteuerzahler?", "Dritter Stand", ["Adel", "Klerus", "König", "Keiner"]],
    ["Hugenotten-Schicksal?", "Religionsfreiheit weg / Flucht", ["Minister", "Bau Versailles", "Gleich", "Könige"]],
    ["Etikette?", "Strenge Regeln am Hof", ["Aufkleber", "Steuer", "Jagd", "Bauern-Gesetz"]],
    ["Regierungsdauer?", "72 Jahre", ["10", "25", "5", "100"]],
    ["Kriegsziele Ludwigs?", "Vergrößerung / Ruhm", ["Weltfriede", "Abschaffung", "Amerika", "Schutz Kleiner"]],
    ["Diplomatensprache?", "Französisch", ["Latein", "Deutsch", "Englisch", "Spanisch"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Ludwig-Beiname?", "Sonnenkoenig"],
    ["Schloss-Name?", "Versailles"],
    ["Finanzminister?", "Colbert"],
    ["Staatsform?", "Absolutismus"],
    ["Der Staat bin ...?", "ich"],
    ["Wirtschaftssystem?", "Merkantilismus"],
    ["Leidender Stand?", "Bauern"],
    ["Macht-Säule (H...)?", "Heer"],
    ["Hof-Regeln?", "Etikette"],
    ["Land?", "Frankreich"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 13. VERSAILLER HOFLEBEN ────────────────────────────────────────────────

function generateVersaillerHofleben(seed: number = 713): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "versailler_hofleben";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Hauptzweck Hofleben?", "Kontrolle und Beschäftigung des Adels", ["Erholung Bauern", "Ausbildung Soldaten", "Schutz Pest"]],
    ["Aufsteh-Zeremoniell?", "Levée", ["Couchée", "Déjeuner", "Soirée"]],
    ["Pflicht des Adels?", "Präsenz am Hof und Dienst", ["Steuern zahlen", "Land verlassen", "Papst gehorchen"]],
    ["Warum teures Leben?", "Kleidung und Glücksspiel", ["Gold leihen", "Eigene Schlösser", "Armee bezahlen"]],
    ["Größe Hofstaat?", "Bis zu 10.000 Menschen", ["12", "50", "Eine Million"]],
    ["Rolle der Mode?", "Statussymbol und Ausdruck von Rang", ["Egal", "Einfache Kleidung", "Nur König bunt"]],
    ["Folge Abwesenheit?", "Verlust von Einfluss und Ämtern", ["Hinrichtung", "Belohnung", "Gleichheit"]],
    ["Festliche Abende?", "Appartements", ["Hoftage", "Ritterturniere", "Bauernfeste"]],
    ["Hygiene-Problem?", "Kaum Toiletten und Waschräume", ["Zuviel Seife", "Verbot Wasser", "Zuviel Waschen"]],
    ["Wirkung auf Europa?", "Vorbild für andere Fürsten", ["Lächerlich", "Verbot Schlösser", "Hüttenbau"]],
    ["Wer reicht dem König das Hemd?", "Ranghöchster Adliger", ["Diener", "Koch", "Gärtner", "Niemand"]],
    ["Symbol der Ordnung?", "Strenge Etikette", ["Chaos", "Freie Wahl", "Volkswahl"]],
    ["Zweck der Gärten?", "Sieg des Menschen über die Natur", ["Kartoffelanbau", "Urwald", "Für alle offen"]],
    ["Heizung im Schloss?", "Offene Kamine (oft zu kalt)", ["Zentralheizung", "Immer warm", "Strom"]],
    ["Spiegelgalerie?", "Saal mit Fenstern und Spiegeln", ["Schlafraum", "Küche", "Gefängnis"]],
    ["Verstoß gegen Etikette?", "Verlust des Ansehens", ["Geschenk", "Ministerposten", "Nichts"]],
    ["Anrede des Königs?", "Majestät", ["Präsident", "Chef", "Kamerad"]],
    ["Baustil Versailles?", "Barock und Klassizismus", ["Gotik", "Romanik", "Moderne"]],
    ["Dritter Stand in Versailles?", "Nur als Diener oder Arbeiter", ["Regierten mit", "Gäste", "Gar nicht"]],
    ["Lage von Versailles?", "Nahe bei Paris", ["In Berlin", "In Rom", "In London"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Schlossname?", "Versailles"],
    ["Aufsteh-Ritual?", "Levee"],
    ["Hof-Regeln?", "Etikette"],
    ["Land?", "Frankreich"],
    ["Wer wohnte dort (Stand)?", "Adel"],
    ["Berühmter Saal?", "Spiegelgalerie"],
    ["Baustil?", "Barock"],
    ["Gartenanlage?", "Schlosspark"],
    ["Bauherr (Beiname)?", "Sonnenkoenig"],
    ["Zentrum der ...?", "Macht"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 14. MERKANTILISMUS ──────────────────────────────────────────────────────

function generateMerkantilismus(seed: number = 714): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "merkantilismus";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Hauptziel Merkantilismus?", "Viel Gold und Silber in die Staatskasse", ["Gleichheit", "Handelsverbot", "Nur Bauern"]],
    ["Vater des Systems?", "Jean-Baptiste Colbert", ["Ludwig XIV.", "Luther", "Napoleon", "Smith"]],
    ["Export-Förderung?", "Verkauf von Luxusgütern", ["Getreide verschenken", "Hohe Export-Steuer", "Gar nicht"]],
    ["Import-Regel?", "Zölle auf Fertigwaren", ["Verbot Rohstoffe", "Keine Kontrolle", "Alles frei"]],
    ["Manufakturen Definition?", "Werkstätten mit Arbeitsteilung", ["Bauernhöfe", "Schiffe", "Klöster", "Burgen"]],
    ["Rohstoff-Strategie?", "Billig importieren, teuer verarbeiten", ["Teuer verkaufen", "Verbieten", "Unwichtig"]],
    ["Zweck Arbeitsteilung?", "Schnellere und billigere Produktion", ["Weniger Arbeit", "Königswille", "Kein Grund"]],
    ["Binnenzölle?", "Sollten abgeschafft werden", ["Erhöht", "Gleich geblieben", "Gab es nie"]],
    ["Infrastruktur-Maßnahmen?", "Bau von Kanälen und Straßen", ["Abriss Brücken", "Wagenverbot", "Gar nichts"]],
    ["Verlierer des Systems?", "Bauern und einfache Arbeiter", ["Kaufleute", "König", "Adel", "Minister"]],
    ["Namensherkunft?", "Latein 'mercator' (Kaufmann)", ["Französisch 'merci'", "Insel Merkant", "Gott Merkur"]],
    ["Staatliche Rolle?", "Lenkung und Kontrolle der Wirtschaft", ["Hielt sich raus", "Gab keinen Staat", "Bauern-Macht"]],
    ["Handelsbilanz-Ziel?", "Mehr Export als Import", ["Beides gleich", "Nur Import", "Handel Sünde"]],
    ["Bevölkerungspolitik?", "Hohe Kinderzahl erwünscht (Arbeiter/Soldaten)", ["Auswanderung", "Schrumpfung", "Egal"]],
    ["Finanzbedarf Grund?", "Heer, Kriege, Versailles", ["Armenpflege", "Kirchenbau USA", "Bücherkauf"]],
    ["Typische Produkte?", "Spiegel, Teppiche, Seide", ["Traktoren", "Stahlpanzer", "Kartoffeln"]],
    ["Qualitätssicherung?", "Staatliche Vorschriften", ["Zufall", "Gar nicht", "Gebet"]],
    ["Canal du Midi?", "Berühmter Kanal in Frankreich", ["Modeblatt", "Schiff", "Gesetz"]],
    ["Protektionismus?", "Schutz der eigenen Wirtschaft", ["Tierschutz", "Königsschutz", "Religionsschutz"]],
    ["Verbreitung?", "In fast ganz Europa", ["Nur Paris", "Nur Kolonien", "Verboten"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wirtschaftssystem?", "Merkantilismus"],
    ["Finanzminister?", "Colbert"],
    ["Vorläufer der Fabrik?", "Manufakturen"],
    ["Staatsschatz-Metall?", ["Gold", "Silber"]],
    ["Was wurde beim Import besteuert?", "Fertigwaren"],
    ["Grenz-Abgabe?", "Zoll"],
    ["Verkauf ins Ausland?", "Export"],
    ["Kauf aus dem Ausland?", "Import"],
    ["Arbeitskräfte?", "Bevoelkerung"],
    ["Musterland?", "Frankreich"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 15. DIE AUFKLÄRUNG ──────────────────────────────────────────────────────

function generateAufklaerung(seed: number = 715): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "aufklaerung";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Kant-Motto?", "Mut zum eigenen Verstand", ["Bete!", "Glaube!", "Gehorche!", "Ich bin Staat"]],
    ["Jahrhundert?", "18. Jahrhundert", ["15.", "16.", "19.", "20."]],
    ["Wichtigstes Mittel?", "Vernunft (Ratio)", ["Schwert", "Gold", "Gebet", "Kanone"]],
    ["Staatsform-Forderung?", "Gewaltenteilung", ["Absolutismus", "Diktatur", "Gottesstaat", "Räte"]],
    ["Montesquieu Forderung?", "Trennung der drei Gewalten", ["Rousseau", "Kant", "Voltaire", "Ludwig"]],
    ["Rousseau Idee?", "Volkssouveränität", ["Papstmacht", "Sklaverei", "Schlossbau", "Adelsprivileg"]],
    ["Höchster Wert?", "Freiheit und Gleichheit", ["Gehorsam", "Raub", "Privilegien", "Armut"]],
    ["Hauptgegner Kritik?", "Absolute Herrschaft und dogmatische Kirche", ["Wissenschaft", "Bauern", "Antike", "Natur"]],
    ["Enzyklopädie?", "Sammelwerk des Wissens", ["Kochbuch", "Gesetzbuch", "Roman", "Reisebericht"]],
    ["Erziehungsziel?", "Selbstständiges Denken", ["Nur Gehorsam", "Ablehnung Bildung", "Nur für Reiche", "Sport"]],
    ["Toleranz-Kämpfer?", "Voltaire", ["Loyola", "Wallenstein", "Ludwig", "Karl"]],
    ["Säkularisierung?", "Trennung von Kirche und Staat", ["Klostergründung", "Krönung", "Erfindung Rad", "Krieg"]],
    ["Beeinflusste Revolutionen?", "Amerikanische und Französische", ["Industrielle", "Völkerwanderung", "Reformation", "Keine"]],
    ["Umgang mit Vorurteilen?", "Beseitigung durch Wissen", ["Förderung", "Ignorieren", "Heiligsprechung", "Verbot"]],
    ["Weltbild-Sicherung?", "Heliozentrisch", ["Geozentrisch", "Flach", "Mensch-Mitte", "Keine Sonne"]],
    ["Treffpunkte?", "Salons und Kaffeehäuser", ["Nur Kirchen", "Kasernen", "Keller", "Wälder"]],
    ["Text 'Was ist Aufklärung?'?", "Kant", ["Goethe", "Schiller", "Rousseau", "Voltaire"]],
    ["Toleranz Bedeutung?", "Erdulden anderer Meinungen", ["Bekämpfen", "Mitmachen", "Vernichten", "Ignorieren"]],
    ["Preußen-König-Ideal?", "Erster Diener seines Staates", ["Absoluter Herr", "Sonnenkönig", "Gott-Stellvertreter", "Zar"]],
    ["Gesellschaftsvertrag?", "Freiwilliger Zusammenschluss zum Staat", ["Wollverkauf", "Pakt Teufel", "Heirat", "Adelspakt"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Werkzeug der Aufklärung?", "Verstand"],
    ["Forderung Gewaltenteilung (Wer)?", "Montesquieu"],
    ["Philosoph Königsberg?", "Kant"],
    ["Macht vom Volk?", "Volkssouveraenitaet"],
    ["Wissens-Lexikon?", "Enzyklopaedie"],
    ["Forderung Voltaire?", "Toleranz"],
    ["Epoche Name?", "Aufklaerung"],
    ["Gegenteil Aberglaube?", "Wissen"],
    ["Rousseau-Thema?", "Gesellschaftsvertrag"],
    ["Wissenschaft statt ...?", "Glaube"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 16. PREUSSEN UNTER FRIEDRICH DEM GROSSEN ───────────────────────────────

function generatePreussenFriedrich(seed: number = 716): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "preussen_friedrich";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Selbstbezeichnung Friedrichs?", "Erster Diener seines Staates", ["Sonnenkönig", "Gott", "Kaiser", "Chef"]],
    ["Religions-Einstellung?", "Religiöse Toleranz", ["Verbot", "Nur Katholisch", "Keine Religion", "Islam"]],
    ["Beiname Friedrichs?", "Der Große", ["Kurze", "Dicke", "Sanfte", "Gerechte"]],
    ["Schloss Potsdam?", "Sanssouci", ["Versailles", "Wartburg", "Neuschwanstein", "Belvedere"]],
    ["Wichtigster Krieg?", "Siebenjähriger Krieg", ["30-jähriger", "Bauernkrieg", "1. Weltkrieg", "Punischer Krieg"]],
    ["Knolle Einführung?", "Kartoffel", ["Tomate", "Mais", "Ananas", "Reis"]],
    ["Abschaffung Strafe?", "Folter", ["Armee", "Steuern", "Schulen", "Klöster"]],
    ["Regierungsform?", "Aufgeklärter Absolutismus", ["Demokratie", "Diktatur", "Republik", "Oligarchie"]],
    ["Preußische Tugenden?", "Disziplin und Pflichtbewusstsein", ["Faulheit", "Nur Kunst", "Ignoranz", "Feiern"]],
    ["Gegnerin Österreich?", "Maria Theresia", ["Elisabeth", "Katharina", "Antoinette", "Victoria"]],
    ["Armee Status?", "Modernste und stärkste Europas", ["Aufgelöst", "Nur Schwach", "Nur Söldner", "Ritter"]],
    ["Bildungspolitik?", "Allgemeine Schulpflicht", ["Schul-Ende", "Leseverbot", "Unwichtig", "Privat"]],
    ["Eroberte Region?", "Schlesien", ["Bayern", "Sachsen", "Tirol", "Böhmen"]],
    ["Hobby des Königs?", "Flötespielen und Philosophie", ["Fußball", "Kochen", "Tanzen", "Jagd"]],
    ["Freund-Philosoph?", "Voltaire", ["Kant", "Rousseau", "Luther", "Aristoteles"]],
    ["Rolle des Königs?", "Verpflichtung zum Wohle des Staates", ["Vergnügen", "Gott-Herrschaft", "Unwichtig", "Reichtum"]],
    ["Gesetzbuch Name?", "Allgemeines Landrecht", ["Code Civil", "Lex Salica", "BGB", "Verfassung"]],
    ["Residenzstadt Ausbau?", "Berlin / Potsdam", ["Wien", "München", "Hamburg", "Paris"]],
    ["Kartoffelbefehl Grund?", "Sicherung der Ernährung", ["Verbot", "Geschenk USA", "Mode", "Export"]],
    ["Dauer Regentschaft?", "46 Jahre", ["10", "72", "5", "100"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Schlossname?", "Sanssouci"],
    ["Beiname?", "der Grosse"],
    ["Welche Pflanze?", "Kartoffel"],
    ["Gegnerin (Österreich)?", "Maria Theresia"],
    ["Was verbot er (Folter)?", "Folter"],
    ["Staat Diener?", "Diener"],
    ["Heeres-Eigenschaft?", "Disziplin"],
    ["Philosoph-Freund?", "Voltaire"],
    ["Regierungsform?", "Aufgeklaerter Absolutismus"],
    ["Staat?", "Preussen"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 17. URSACHEN FRANZÖSISCHE REVOLUTION ───────────────────────────────────

function generateUrsachenFranzRev(seed: number = 717): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "ursachen_franz_rev";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Jahr des Beginns?", "1789", ["1776", "1848", "1648", "1815"]],
    ["Ständeordnung?", "Klerus, Adel, Dritter Stand", ["Reich und Arm", "Klassen", "Keine", "Ritter/Bauern"]],
    ["Steuerzahler?", "Dritter Stand", ["Adel", "Klerus", "König", "Niemand"]],
    ["Grund Bankrott?", "Schulden durch Kriege und Hof", ["Zu wenig Steuern", "Goldmangel", "Buchdruck", "Pest"]],
    ["König bei Ausbruch?", "Ludwig XVI.", ["Ludwig XIV.", "Napoleon", "Karl X.", "Franz II."]],
    ["Geistige Ursache?", "Aufklärung", ["Mittelalter", "Gottesgnadentum", "Bücherverbot", "Rittertum"]],
    ["Naturereignis-Folge?", "Missernten und Hunger", ["Vulkan", "Tsunami", "Erdbeben", "Hitze"]],
    ["Forderung 3. Stand?", "Mitsprache und gerechte Steuern", ["Abschaffung Gesetze", "Rückkehr Steinzeit", "Gar nichts", "Krieg"]],
    ["Generalstände Problem?", "Jeder Stand nur 1 Stimme", ["Kopfstimmen", "König entschied", "Nur 3. Stand wählte", "Papst-Veto"]],
    ["Ballhausschwur?", "Nationalversammlung / Verfassung", ["Fest", "Rücktritt", "Ritter-Eid", "Kriegserklärung"]],
    ["Nationalversammlung?", "Vertretung des ganzen Volkes", ["Generäle", "Hofstaat", "Kloster", "Zunft"]],
    ["Brotpreis-Steigerung Grund?", "Knappheit und Spekulation", ["Verbot", "Gold-Brot", "Keine Bäcker", "Hitze"]],
    ["Altes System Name?", "Ancien Régime", ["Moderne", "Demokratie", "Zukunft", "Republik"]],
    ["Marie-Antoinette Ruf?", "Arrogant und verschwenderisch", ["Anführerin Arme", "Steuer-Ende", "Aufklärerin", "Heilige"]],
    ["Adels-Problem?", "Privilegien halten (Steuern)", ["Zuviel Arbeit", "Wohnverbot", "Kein Land", "Armut"]],
    ["Ludwig XVI. Reaktion?", "Zögerlich", ["Sofort aufgegeben", "Revolutionär", "Flucht USA", "Kaiserwahl"]],
    ["Bastille Symbol?", "Willkürherrschaft", ["Freiheit", "Handel", "Kunst", "Religion"]],
    ["Farben Trikolore?", "Blau, Weiß, Rot", ["Schwarz, Rot, Gold", "Blau, Gelb, Rot", "Grün, Weiß, Rot", "Lila"]],
    ["Revolutions-Slogan?", "Freiheit, Gleichheit, Brüderlichkeit", ["Gott, König", "Brot, Wein", "Ordnung", "Friede"]],
    ["Ausbreitung?", "Ganz Frankreich", ["Nur Paris", "Nur Kolonien", "Nur Versailles", "Nur Klöster"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Start-Jahr?", "1789"],
    ["Stand der Bauern?", "Dritter Stand"],
    ["Koenig (Name)?", "Ludwig XVI."],
    ["Schloss?", "Versailles"],
    ["Geld-Problem?", ["Schulden", "Staatsbankrott"]],
    ["Denkweise?", "Aufklaerung"],
    ["Natur-Grund?", "Missernten"],
    ["System-Name?", "Ancien Regime"],
    ["Schwur-Ort?", "Ballhaus"],
    ["Forderung (V...)?", "Verfassung"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 18. STURM AUF DIE BASTILLE ──────────────────────────────────────────────

function generateSturmBastille(seed: number = 718): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "sturm_bastille";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Tag des Sturms?", "14. Juli 1789", ["4. Juli", "3. Okt", "1. Mai", "24. Dez"]],
    ["Bastille Funktion?", "Festung und Staatsgefängnis", ["Rathaus", "Markt", "Kloster", "Bauernhof"]],
    ["Grund des Sturms?", "Suche nach Schießpulver und Waffen", ["Tee-Einladung", "Goldsuche", "Fest feiern", "Abriss"]],
    ["Symbolik?", "Ende der Willkürherrschaft", ["Sieg England", "Amerika-Entdeckung", "Krönung", "Kirchen-Ende"]],
    ["Kommandant?", "Launay", ["Robespierre", "Ludwig", "Napoleon", "Lafayette"]],
    ["Anzahl Gefangene?", "Sieben", ["1000", "100", "500", "Keine"]],
    ["Bastille-Schicksal?", "Abgetragen", ["Renoviert", "Museum", "Rückgabe", "Kaserne"]],
    ["Nationalgarde Anführer?", "Lafayette", ["Napoleon", "Robespierre", "Danton", "Marat"]],
    ["König-Tagebuch Notiz?", "Rien (Nichts)", ["Flucht", "Gegenschlag", "Fest", "Gebet"]],
    ["Bedeutung heute?", "Nationalfeiertag", ["Tag des Brotes", "Wahltag", "Arbeitstag", "Friedenstag"]],
    ["Reaktion Nationalversammlung?", "Wende-Signal", ["Auflösung", "Verhaftung", "Ignorieren", "Trauer"]],
    ["Grande Peur?", "Bauernaufstände auf dem Land", ["Gute Ernte", "Ritter-Sieg", "Gleichheit", "Flucht"]],
    ["Volks-Forderung?", "Brot and Mitsprache", ["Krieg", "Druckverbot", "Gefängnisbau", "Gold"]],
    ["Revolutions-Zeichen?", "Kokarde", ["Helm", "Fahne weiß", "Hut grün", "Mantel rot"]],
    ["Bürgerwehr?", "Bewaffnete Bürger zum Schutz", ["Garde", "Söldner", "Mönche", "Piraten"]],
    ["Pariser Stimmung Grund?", "Necker-Entlassung / Truppen", ["Kaltes Wetter", "Kriegssieg", "Wahl-Ankündigung", "Hitze"]],
    ["Waffen beim Sturm?", "Gewehre, Piken, Kanonen", ["Bomben", "Flieger", "Panzer", "Keine"]],
    ["Beginn-Signal?", "Entscheidender Umbruch", ["Später", "Sofort vorbei", "Kleiner Aufstand", "Kein Beginn"]],
    ["Teilnehmerzahl?", "Tausende Bürger", ["Zehn", "Million", "Armee", "Nationalversammlung"]],
    ["Kopf des Kommandanten?", "Auf Pike getragen", ["Begraben", "Geschenk", "In Gold", "Verloren"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Datum?", "14. Juli"],
    ["Name der Burg?", "Bastille"],
    ["Was suchten sie?", "Schiespulver"],
    ["Was endete symbolisch?", "Absolutismus"],
    ["Status heute?", "Nationalfeiertag"],
    ["Kommandant?", "Launay"],
    ["Farben-Symbol?", "Trikolore"],
    ["Waffenart?", "Waffen"],
    ["Gefängnisart?", "Staatsgefaengnis"],
    ["General (L...)?", "Lafayette"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 19. SCHRECKENSHERRSCHAFT (ROBESPIERRE) ──────────────────────────────────

function generateSchreckensherrschaft(seed: number = 719): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "schreckensherrschaft";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wer war der führende Kopf der Schreckensherrschaft (Terreur)?", "Maximilien de Robespierre", ["Ludwig XVI.", "Napoleon", "Lafayette", "Danton"]],
    ["Welche politische Gruppe übernahm 1793 die Macht?", "Die Jakobiner", ["Die Girondisten", "Die Royalisten", "Die Liberalen", "Die Sozialisten"]],
    ["Was war das wichtigste Hinrichtungswerkzeug der Revolution?", "Die Guillotine", ["Der Galgen", "Das Schwert", "Die Kanone", "Das Gift"]],
    ["Welches Gremium regierte während der Schreckensherrschaft?", "Der Wohlfahrtsausschuss", ["Der Senat", "Die Generalstände", "Das Parlament", "Die Inquisition"]],
    ["Was war der Vorwand für die vielen Hinrichtungen?", "Schutz der Revolution vor 'Feinden der Freiheit'", ["Hunger in Paris", "Die Eroberung Englands", "Die Einführung der Steuer", "Religiöser Eifer"]],
    ["Wie endete die Herrschaft Robespierres 1794?", "Er wurde selbst gestürzt und hingerichtet", ["Er wurde zum Kaiser gewählt", "Er floh nach Amerika", "Er starb an Altersschwäche", "Er trat freiwillig zurück"]],
    ["Was passierte mit König Ludwig XVI. im Januar 1793?", "Er wurde mit der Guillotine hingerichtet", ["Er wurde nach England verbannt", "Er blieb König ohne Macht", "Er starb im Gefängnis an Krankheit"]],
    ["Welcher berühmte Revolutionär wurde von Robespierre hingerichtet (ehemaliger Freund)?", "Georges Danton", ["Lafayette", "Napoleon", "Talleyrand", "Marat"]],
    ["Was war das 'Gesetz über die Verdächtigen'?", "Jeder konnte ohne Beweise verhaftet werden", ["Ein Gesetz zur Förderung des Handels", "Die Erlaubnis zu wählen", "Ein Verbot der Guillotine"]],
    ["Wie nannten sich die radikalen Anhänger der Revolution in Paris?", "Sansculotten", ["Ritter", "Jakobiner-Elite", "Mönche", "Bürgerwehr"]],
    ["Was bedeutet 'Sansculotten' wörtlich?", "Ohne Kniebundhosen (Arbeiterhosen)", ["Ohne Geld", "Ohne Gott", "Mit Waffen", "Mit Bildung"]],
    ["Welchen Kalender führten die Jakobiner ein?", "Den Revolutionskalender (mit neuen Monatsnamen)", ["Den gregorianischen Kalender", "Den islamischen Kalender", "Gar keinen"]],
    ["Was war das Ziel der 'Tugend' laut Robespierre?", "Ein Staat ohne Korruption, durch Terror erzwungen", ["Ein freies Leben für alle", "Der Reichtum des Einzelnen", "Die Rückkehr zum König"]],
    ["Wie hießen die Monate im Revolutionskalender (Beispiel)?", "Thermidor, Brumaire, Germinal", ["Januar, Februar", "Montag, Dienstag", "Frühling, Sommer"]],
    ["Was geschah mit der christlichen Religion unter den Jakobinern?", "Sie sollte durch den 'Kult des Höchsten Wesens' ersetzt werden", ["Sie wurde Staatsreligion", "Nichts änderte sich", "Sie wurde weltweit verbreitet"]],
    ["Wie viele Menschen starben etwa während der Schreckensherrschaft?", "Zehntausende (ca. 16.000 bis 40.000)", ["Genau 12", "Über eine Million", "Nur der König", "Niemand"]],
    ["Warum verloren die Jakobiner schließlich die Unterstützung des Volkes?", "Wegen des ständigen Terrors und der wirtschaftlichen Not", ["Weil sie den Krieg gewannen", "Weil sie die Steuern abschafften", "Weil sie zu friedlich waren"]],
    ["Was war die 'Reaktion vom 9. Thermidor'?", "Der Sturz Robespierres am 27. Juli 1794", ["Die Hinrichtung des Königs", "Der Sturm auf die Bastille", "Die Krönung Napoleons"]],
    ["Wer regierte nach den Jakobinern (1795-1799)?", "Das Direktorium (fünf Männer)", ["Wieder ein König", "Das Volk direkt", "Napoleon sofort", "Der Papst"]],
    ["Welche Parole der Revolution blieb trotz des Terrors bestehen?", "Liberté, Égalité, Fraternité", ["Gott und König", "Arbeit macht frei", "Brot und Spiele", "Ruhe und Ordnung"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Führer der Jakobiner?", "Robespierre"],
    ["Hinrichtungs-Gerät?", "Guillotine"],
    ["Name der radikalen Gruppe?", "Jakobiner"],
    ["Wie hießen die Pariser Arbeiter?", "Sansculotten"],
    ["Wichtigster Ausschuss (W...)?", "Wohlfahrtsausschuss"],
    ["König (Name), der 1793 starb?", "Ludwig XVI."],
    ["Monatsname im neuen Kalender?", ["Thermidor", "Brumaire", "Germinal", "Prairial"]],
    ["Was forderte Robespierre neben Terror?", "Tugend"],
    ["Französischer Name für den Schrecken?", "Terreur"],
    ["Wer stürzte Robespierre (Datum/Monat)?", "Thermidor"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 20. AUFSTIEG NAPOLEONS ──────────────────────────────────────────────────

function generateAufstiegNapoleon(seed: number = 720): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "aufstieg_napoleon";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wo wurde Napoleon Bonaparte geboren?", "Korsika", ["Paris", "Marseille", "Rom", "Wien"]],
    ["Wie gelangte Napoleon 1799 an die Macht?", "Durch einen Staatsstreich", ["Er wurde vom Volk gewählt", "Er war der Sohn des Königs", "Er wurde vom Papst ernannt"]],
    ["Was war Napoleons wichtigstes Gesetzbuch?", "Code Civil (Code Napoléon)", ["Lex Salica", "Magna Carta", "Die 12 Artikel", "Das Grundgesetz"]],
    ["Was garantierte der Code Civil unter anderem?", "Gleichheit vor dem Gesetz und Schutz des Eigentums", ["Das Wahlrecht für Frauen", "Die Rückkehr zur Leibeigenschaft", "Die absolute Macht des Adels"]],
    ["Welchen Titel gab sich Napoleon 1804?", "Kaiser der Franzosen", ["König von Frankreich", "Präsident der Republik", "Papst von Avignon", "Zar"]],
    ["In welcher berühmten Schlacht siegte Napoleon 1805 gegen Österreich und Russland?", "Schlacht bei Austerlitz (Dreikaiserschlacht)", ["Schlacht bei Waterloo", "Schlacht bei Leipzig", "Schlacht von Trafalgar"]],
    ["Was passierte bei der Kaiserkrönung Napoleons in Notre-Dame?", "Er setzte sich die Krone selbst auf das Haupt", ["Der Papst krönte ihn demütig", "Er weigerte sich, die Krone zu tragen", "Das Volk krönte ihn"]],
    ["Wie nannte man das Bündnis deutscher Staaten unter Napoleons Schutz?", "Rheinbund", ["Deutscher Bund", "Hanse", "Heiliges Römisches Reich", "Europäische Union"]],
    ["Was geschah 1806 mit dem 'Heiligen Römischen Reich Deutscher Nation'?", "Es wurde aufgelöst (Kaiser Franz II. dankte ab)", ["Es wurde vergrößert", "Es wurde in Preußen umbenannt", "Es blieb völlig unverändert"]],
    ["Welche Seeschlacht verlor Napoleon 1805 gegen England?", "Schlacht von Trafalgar", ["Schlacht von Salamis", "Schlacht im Skagerrak", "Schlacht bei Jutland"]],
    ["Was war die 'Kontinentalsperre'?", "Ein Wirtschaftsboykott gegen Großbritannien", ["Eine Mauer um Paris", "Ein Verbot für Schiffe nach Amerika", "Eine Gebirgssperre in den Alpen"]],
    ["Welche Modernisierungen brachte Napoleon nach Deutschland?", "Einführung des Code Civil, Gewerbefreiheit und neue Verwaltung", ["Die Rückkehr zum Mittelalter", "Das Verbot des Buchdrucks", "Den Bau von Pyramiden"]],
    ["Warum sahen viele Deutsche Napoleon anfangs als Befreier?", "Wegen der Ideale der Revolution (Freiheit, Ende der Kleinstaaterei)", ["Weil er ihnen Gold schenkte", "Weil er Deutsch sprach", "Weil er alle Steuern abschaffte"]],
    ["Was war die 'Säkularisation' unter Napoleon?", "Die Enteignung kirchlicher Besitztümer durch den Staat", ["Die Gründung neuer Klöster", "Die Krönung eines Bischofs", "Ein Verbot zu beten"]],
    ["Was war die 'Mediatisierung'?", "Kleine Herrschaften wurden größeren Staaten unterstellt", ["Alle Menschen bekamen ein Handy", "Die Abschaffung des Adels", "Der Bau von Zeitungen"]],
    ["Gegen welches Land scheiterte Napoleon 1812 katastrophal?", "Russland", ["Spanien", "Italien", "Österreich", "Preußen"]],
    ["Wer war der große englische Admiral bei Trafalgar?", "Lord Nelson", ["Wellington", "James Cook", "Drake", "Churchill"]],
    ["Wie nannte man die radikale Umgestaltung Deutschlands durch Napoleon?", "Flurbereinigung der Landkarte", ["Das Chaos", "Die Steinzeit", "Die große Pause", "Der Bau von Berlin"]],
    ["In welchem Alter wurde Napoleon General?", "Mit 24 Jahren", ["Mit 10", "Mit 50", "Mit 18", "Er war nie General"]],
    ["Welches Land besetzte Napoleon 1808, was zu einem langen Kleinkrieg führte?", "Spanien", ["Russland", "Schweden", "Osmanisches Reich", "USA"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Geburtsinsel Napoleons?", "Korsika"],
    ["Berühmtes Gesetzbuch?", "Code Civil"],
    ["Kaisertitel (Jahr)?", "1804"],
    ["Gegnerland zur See?", "England"],
    ["Name des deutschen Bündnisses?", "Rheinbund"],
    ["Schlacht der drei Kaiser?", "Austerlitz"],
    ["Wie nannte man den Wirtschafts-Boykott?", "Kontinentalsperre"],
    ["Nachname Napoleons?", "Bonaparte"],
    ["Was setzte er sich selbst auf?", "Krone"],
    ["Gegen welches Land scheiterte er 1812?", "Russland"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 21. ENDE NAPOLEONS (WATERLOO & ELBA) ───────────────────────────────────

function generateEndeNapoleon(seed: number = 721): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "ende_napoleon";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was war der Wendepunkt, der Napoleons Macht brach?", "Der gescheiterte Russlandfeldzug 1812", ["Der Bau von Versailles", "Die Entdeckung Amerikas", "Die Krönung in Rom"]],
    ["Wie nannte man die große Entscheidungsschlacht 1813 bei Leipzig?", "Völkerschlacht bei Leipzig", ["Schlacht bei Austerlitz", "Schlacht von Trafalgar", "Schlacht von Verdun"]],
    ["Wohin wurde Napoleon 1814 nach seiner ersten Abdankung verbannt?", "Insel Elba", ["St. Helena", "Island", "Korsika", "Australien"]],
    ["Wie nennt man Napoleons kurze Rückkehr an die Macht 1815?", "Herrschaft der Hundert Tage", ["Die goldene Woche", "Das Jahr der Freiheit", "Der Marsch auf Paris"]],
    ["In welcher Schlacht wurde Napoleon 1815 endgültig besiegt?", "Schlacht bei Waterloo", ["Schlacht bei Leipzig", "Schlacht von Austerlitz", "Schlacht bei Jena"]],
    ["Wer war der britische Feldherr, der Napoleon bei Waterloo besiegte?", "Herzog von Wellington", ["Lord Nelson", "James Cook", "Prinz Eugen", "Bismarck"]],
    ["Welche Rolle spielte der preußische General Blücher bei Waterloo?", "Er kam rechtzeitig zu Hilfe und entschied die Schlacht", ["Er kämpfte auf Napoleons Seite", "Er blieb im Lager", "Er kam zu spät"]],
    ["Wohin wurde Napoleon nach 1815 endgültig verbannt (bis zu seinem Tod)?", "St. Helena (im Südatlantik)", ["Elba", "Korsika", "Madagaskar", "London"]],
    ["Woran starb Napoleon 1821 vermutlich?", "Magenkrebs (oder Giftverdacht)", ["Im Kampf", "Durch ein Attentat", "An Altersschwäche", "Er ertrank"]],
    ["Was passierte mit der europäischen Landkarte nach Napoleon?", "Sie wurde auf dem Wiener Kongress neu geordnet", ["Sie blieb genau so, wie Napoleon sie wollte", "Sie wurde komplett gelöscht", "Alles wurde russisch"]],
    ["Was löste der Russlandfeldzug 1812 in Preußen aus?", "Die Befreiungskriege gegen die französische Herrschaft", ["Große Freude und Jubel", "Einen Krieg gegen Österreich", "Den Bau von Fabriken"]],
    ["Was war das Problem für Napoleons Armee in Russland?", "Kälte ('General Winter') und mangelnde Versorgung", ["Zuviel Essen", "Hitze", "Munitionsmangel allein", "Die russische Flotte"]],
    ["Wie viele Soldaten kehrten etwa vom Russlandfeldzug zurück?", "Nur ein kleiner Bruchteil (ca. 30.000 von 600.000)", ["Fast alle", "Genau die Hälfte", "Niemand", "Über 500.000"]],
    ["Was war die 'Taktik der verbrannten Erde' der Russen?", "Sie vernichteten Vorräte und Häuser auf dem Rückzug", ["Sie zündeten die Sonne an", "Sie warfen Gold in die Brunnen", "Sie bauten Mauern aus Feuer"]],
    ["Wer war Zar von Russland während des Krieges gegen Napoleon?", "Alexander I.", ["Nikolaus II.", "Peter der Große", "Iwan der Schreckliche", "Stalin"]],
    ["Welcher Staat leistete Napoleon in Spanien hartnäckigen Widerstand?", "Guerilla-Krieger des Volkes", ["Die spanische Marine allein", "Die Ritter von Kastilien", "Der König von Portugal"]],
    ["Warum scheiterte die Herrschaft der Hundert Tage?", "Ganz Europa schloss sich gegen Napoleon zusammen", ["Er hatte kein Geld mehr", "Das Volk wollte ihn nicht mehr", "Er war krank", "Er wollte nicht kämpfen"]],
    ["Wo liegt Waterloo heute?", "In Belgien", ["In Frankreich", "In Deutschland", "In England", "In den Niederlanden"]],
    ["Was war Napoleons letzter Wunsch bezüglich seines Begräbnisses?", "An den Ufern der Seine in Paris bestattet zu werden", ["Auf Korsika zu bleiben", "Im Meer versenkt zu werden", "In Rom zu liegen"]],
    ["Welche Epoche endete symbolisch mit dem Wiener Kongress?", "Die Ära der Französischen Revolution und Napoleons", ["Das Mittelalter", "Die Steinzeit", "Die Moderne", "Das Industriezeitalter"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Ort der endgültigen Niederlage?", "Waterloo"],
    ["Große Schlacht 1813?", "Leipzig"],
    ["Erste Verbannungs-Insel?", "Elba"],
    ["Zweite Verbannungs-Insel?", "St. Helena"],
    ["Britischer General bei Waterloo?", "Wellington"],
    ["Preußischer General (Marschall Vorwärts)?", "Bluecher"],
    ["Russischer Gegner (Titel)?", "Zar"],
    ["Schlimmster Feind in Russland?", "Winter"],
    ["Jahr der Schlacht bei Waterloo?", "1815"],
    ["Wie viele 'Tage' regierte er zuletzt?", "100"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 22. WIENER KONGRESS (1814/15) ───────────────────────────────────────────

function generateWienerKongress(seed: number = 722): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "wiener_kongress";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was war das Hauptziel des Wiener Kongresses?", "Wiederherstellung der alten Ordnung (Restauration) und Frieden", ["Gründung der Demokratie", "Vorbereitung eines neuen Krieges", "Krönung Napoleons zum Weltkaiser"]],
    ["Wer war der führende Staatsmann auf dem Wiener Kongress?", "Fürst von Metternich", ["Bismarck", "Napoleon", "Friedrich der Große", "Robespierre"]],
    ["Was bedeutet der Begriff 'Restauration'?", "Wiederherstellung der Zustände vor der Revolution 1789", ["Bau von neuen Restaurants", "Erneuerung der Klöster", "Modernisierung der Fabriken"]],
    ["Was bedeutet 'Legitimität' im Sinne des Kongresses?", "Rechtmäßigkeit der Herrschaft durch Gottesgnadentum und Abstammung", ["Recht durch Wahlen", "Recht durch körperliche Stärke", "Recht durch Reichtum"]],
    ["Was war die 'Solidarität' der Fürsten?", "Gegenseitige Hilfe gegen revolutionäre Ideen", ["Gemeinsames Feiern", "Teilen von Gold mit dem Volk", "Verbot aller Grenzen"]],
    ["Welcher Bund wurde als Ersatz für das Heilige Römische Reich gegründet?", "Deutscher Bund", ["Rheinbund", "Europäische Union", "Zollverein", "Norddeutscher Bund"]],
    ["Was passierte mit Polen auf dem Kongress?", "Es wurde größtenteils Russland zugesprochen (Kongresspolen)", ["Es wurde unabhängig", "Es wurde Teil Frankreichs", "Es wurde abgeschafft"]],
    ["Wie nannte man den Kongress spöttisch, weil so viel gefeiert wurde?", "'Der Kongress tanzt'", ["'Der Kongress schläft'", "'Der Kongress streitet'", "'Der Kongress weint'"]],
    ["Was war das 'System Metternich'?", "Strenge Überwachung und Unterdrückung nationaler und liberaler Bewegungen", ["Ein neues Steuersystem", "Ein System zum Bau von Straßen", "Die Einführung der Schulpflicht"]],
    ["Welche Mächte bildeten die 'Heilige Allianz'?", "Russland, Österreich und Preußen", ["Frankreich, England und USA", "Spanien, Italien und Portugal", "Schweden und Dänemark"]],
    ["Was passierte mit Preußen auf dem Kongress?", "Es erhielt große Gebiete im Westen (Rheinland und Westfalen)", ["Es verlor fast alles Land", "Es wurde aufgelöst", "Es wurde Teil von Österreich"]],
    ["Wurde das Heilige Römische Reich wiederhergestellt?", "Nein, sehr zum Enttäuschung vieler Deutscher", ["Ja, alles wurde wie im Mittelalter", "Ja, aber ohne Kaiser", "Nur in Bayern"]],
    ["Welche Rolle spielte Frankreich auf dem Kongress?", "Es durfte als Großmacht mitverhandeln (durch Talleyrand)", ["Es wurde komplett vernichtet", "Es durfte nicht teilnehmen", "Es wurde eine Kolonie Preußens"]],
    ["Was war das 'Gleichgewicht der Mächte' (Pentarchie)?", "Kein Staat in Europa sollte so mächtig werden wie Napoleon", ["Alle Staaten sollten gleich viel Gold haben", "Alle Könige sollten gleich alt sein", "Alle Armeen sollten gleich groß sein"]],
    ["Welche fünf Mächte bestimmten Europa nach 1815?", "Preußen, Österreich, Russland, England, Frankreich", ["USA, China, Japan, Indien, Brasilien", "Spanien, Italien, Polen, Schweden, Dänemark"]],
    ["Was geschah mit den liberalen Hoffnungen der Bürger?", "Sie wurden enttäuscht und unterdrückt", ["Sie wurden sofort erfüllt", "Sie wurden Gesetz", "Niemand hatte solche Hoffnungen"]],
    ["Was war die Bundesakte?", "Das Grundgesetz des Deutschen Bundes", ["Ein Kochbuch für Soldaten", "Ein Liebesbrief an den Kaiser", "Ein Vertrag über Wolle"]],
    ["Wo fand der Kongress statt?", "Wien", ["Berlin", "Paris", "London", "Rom"]],
    ["Wie lange dauerte der Kongress etwa?", "Vom September 1814 bis Juni 1815", ["Zwei Tage", "Zehn Jahre", "Einen Monat", "Fünf Minuten"]],
    ["Was war die Folge der Gebietsgewinne Preußens am Rhein?", "Preußen wurde zum 'Wächter am Rhein' gegen Frankreich", ["Preußen wurde ein reiner Agrarstaat", "Preußen wurde katholisch", "Preußen verließ den Deutschen Bund"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Zentrum des Kongresses (Stadt)?", "Wien"],
    ["Führender Staatsmann (M...)?", "Metternich"],
    ["Wiederherstellung der alten Ordnung?", "Restauration"],
    ["Bund der deutschen Staaten?", "Deutscher Bund"],
    ["Rechtmäßigkeit der Herrschaft?", "Legitimitaet"],
    ["Bündnis der drei Ostmächte?", "Heilige Allianz"],
    ["Wer vertrat Frankreich?", "Talleyrand"],
    ["Was 'tat' der Kongress laut Sprichwort?", "tanzt"],
    ["Größte Macht im Osten?", "Russland"],
    ["Preußisches Gebiet im Westen?", ["Rheinland", "Westfalen"]]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 23. INDUSTRIELLE REVOLUTION (ANFÄNGE) ──────────────────────────────────

function generateIndustrielleRev(seed: number = 723): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "industrielle_revolution";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["In welchem Land begann die Industrielle Revolution zuerst?", "England (Großbritannien)", ["Deutschland", "Frankreich", "USA", "Russland"]],
    ["Welche Erfindung war der Motor der Industrialisierung?", "Die Dampfmaschine", ["Das Auto", "Das Telefon", "Der Buchdruck", "Das Rad"]],
    ["Wer verbesserte die Dampfmaschine entscheidend?", "James Watt", ["Gutenberg", "Newton", "Einstein", "Napoleon"]],
    ["Welcher Wirtschaftszweig wurde als Erstes mechanisiert?", "Die Textilindustrie (Weben und Spinnen)", ["Der Autobau", "Die Computertechnik", "Die Luftfahrt", "Der Bergbau allein"]],
    ["Was war eine Voraussetzung für die Industrialisierung in England?", "Reichtum an Kohle, Eisen und Kapital aus dem Seehandel", ["Mangel an Arbeitern", "Verbot von Maschinen", "Abwesenheit von Flüssen"]],
    ["Welches Transportmittel revolutionierte den Handel?", "Die Eisenbahn", ["Das Flugzeug", "Das U-Boot", "Die Pferdekutsche allein", "Das Fahrrad"]],
    ["Wie nannte man die neue Klasse der Fabrikarbeiter?", "Proletariat", ["Adel", "Klerus", "Bürgertum", "Ritterschaft"]],
    ["Was ist 'Urbanisierung' im 19. Jahrhundert?", "Die schnelle Ausdehnung der Städte durch Zuwanderung", ["Der Bau von Burgen", "Die Flucht in die Wälder", "Der Abriss von Häusern"]],
    ["Was war ein Hauptproblem der frühen Industrialisierung?", "Kinderarbeit und schlechte Arbeitsbedingungen", ["Zu viel Freizeit für Arbeiter", "Zu hohe Löhne", "Mangel an Maschinen", "Keine Zölle"]],
    ["Wann begann die Industrialisierung in Deutschland etwa?", "Mitte des 19. Jahrhunderts (nach 1830)", ["Bereits 1500", "Erst 1950", "Gleichzeitig mit England 1750", "Gar nicht"]],
    ["Welche Erfindung half beim Weben?", "Der mechanische Webstuhl", ["Die Schreibmaschine", "Die Nähmaschine allein", "Der Kochtopf"]],
    ["Was war die 'Soziale Frage'?", "Die Not und Elend der Arbeiterklasse und die Suche nach Lösungen", ["Eine Quizshow", "Die Frage nach dem Wetter", "Der Streit um Landkarten"]],
    ["Welches Material wurde für Maschinen und Schienen besonders wichtig?", "Eisen und Stahl", ["Holz", "Plastik", "Gold", "Glas"]],
    ["Wie hießen die ersten Lokomotiven (Beispiel)?", "The Rocket (in England) oder Adler (in Deutschland)", ["Ferrari", "Boeing", "Sputnik", "Titanic"]],
    ["Was passierte mit den alten Zünften durch die Industrialisierung?", "Sie verloren an Macht durch die Gewerbefreiheit", ["Sie wurden reicher", "Sie bestimmten alles", "Nichts änderte sich"]],
    ["Wer gründete in Deutschland bedeutende Fabriken (z.B. Stahl)?", "Alfred Krupp", ["Ludwig XIV.", "Martin Luther", "Friedrich der Große", "Johann Wolfgang von Goethe"]],
    ["Welche Energiequelle ersetzte zunehmend die Wasserkraft?", "Steinkohle", ["Windkraft", "Atomkraft", "Solarenergie", "Holzfeuer allein"]],
    ["Was war eine Folge der Industrialisierung für die Umwelt?", "Starke Verschmutzung von Luft und Wasser", ["Die Luft wurde sauberer", "Es gab mehr Wälder", "Nichts änderte sich"]],
    ["Wie veränderte sich die Arbeitswelt?", "Arbeit nach dem Takt der Maschine statt nach der Natur", ["Mehr Arbeit zu Hause", "Weniger Arbeit insgesamt", "Arbeit wurde zum Hobby"]],
    ["Was war die erste Eisenbahnstrecke in Deutschland (1835)?", "Nürnberg – Fürth", ["Berlin – Potsdam", "München – Wien", "Köln – Paris", "Hamburg – Bremen"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Mutterland der Industrie?", "England"],
    ["Wichtigste Erfindung?", "Dampfmaschine"],
    ["Erfinder (Verbesserer) der Dampfmaschine?", "James Watt"],
    ["Neue Transportart auf Schienen?", "Eisenbahn"],
    ["Klasse der armen Arbeiter?", "Proletariat"],
    ["Zustrom in die Städte?", "Urbanisierung"],
    ["Arbeit von Minderjährigen?", "Kinderarbeit"],
    ["Wichtigster Rohstoff für Energie?", "Kohle"],
    ["Industrie der Kleidung?", "Textilindustrie"],
    ["Lokomotive in Deutschland 1835?", "Adler"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 24. GESELLSCHAFTLICHER WANDEL IM 19. JHD. ──────────────────────────────

function generateGesellschaftlicherWandel(seed: number = 724): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "gesellschaft_wandel";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was war die 'Soziale Frage' im 19. Jahrhundert?", "Das Elend der Arbeiter und die Suche nach Reformen", ["Die Frage nach dem Wetter", "Die Mode der Reichen", "Der Bau von Kirchen"]],
    ["Wer verfasste das 'Kommunistische Manifest' (1848)?", "Karl Marx und Friedrich Engels", ["Bismarck", "Napoleon", "Kant und Hegel", "Goethe und Schiller"]],
    ["Was forderten die frühen Gewerkschaften?", "Höhere Löhne und kürzere Arbeitszeiten", ["Die Abschaffung der Arbeit", "Krieg gegen England", "Die Rückkehr zum König"]],
    ["Welche neue Gesellschaftsklasse wurde im 19. Jhd. mächtig?", "Das Bürgertum (Unternehmer, Bankiers)", ["Die Ritter", "Die Mönche", "Die Leibeigenen"]],
    ["Was passierte mit der traditionellen Großfamilie?", "Sie löste sich in den Städten oft in Kleinfamilien auf", ["Sie wurde gesetzlich vorgeschrieben", "Sie blieb genau gleich", "Alle lebten allein"]],
    ["Wie nannte man die Wohngebiete der Arbeiter?", "Mietskasernen / Slums", ["Villenviertel", "Schlossanlagen", "Bauernhöfe", "Ferienparks"]],
    ["Was war eine Reaktion der Kirche auf die soziale Not?", "Gründung von Waisenhäusern und Suppenküchen (Innere Mission)", ["Verbot der Hilfe", "Ignorieren der Not", "Unterstützung der Fabrikbesitzer"]],
    ["Welcher preußische Staatsmann führte die erste staatliche Sozialversicherung ein?", "Otto von Bismarck", ["Friedrich der Große", "Wilhelm II.", "Hitler", "Adenauer"]],
    ["Was forderte der Liberalismus?", "Freiheit des Individuums und Grundrechte", ["Die absolute Macht des Staates", "Die Rückkehr zur Steinzeit", "Das Verbot von Handel"]],
    ["Was forderte der Nationalismus im 19. Jahrhundert?", "Einen eigenen Nationalstaat für ein Volk", ["Die Auflösung aller Völker", "Die Weltherrschaft eines Königs", "Das Verbot von Sprachen"]],
    ["Welche Rolle spielten Frauen in der frühen Industrie?", "Sie arbeiteten oft schwer für noch geringere Löhne als Männer", ["Sie durften nicht arbeiten", "Sie waren alle Chefinnen", "Sie bekamen den gleichen Lohn"]],
    ["Was war die 'Emanzipation' im 19. Jhd.?", "Das Streben nach rechtlicher Gleichstellung (z.B. von Juden oder Frauen)", ["Die Auswanderung nach Asien", "Der Bau von Dampfschiffen", "Das Verbot von Schulen"]],
    ["Was war der 'Biedermeier'?", "Eine bürgerliche Kultur des Rückzugs ins Private (ca. 1815-1848)", ["Ein neuer Krieg", "Eine radikale politische Partei", "Eine Erfindung in der Physik"]],
    ["Was ist 'Pauperismus'?", "Die Massenarmut der Zeit vor und während der frühen Industrialisierung", ["Reichtum für alle", "Eine neue Religion", "Ein Modestil aus Paris"]],
    ["Wer war Adolph Kolping?", "Ein Priester, der sich besonders für junge Handwerksgesellen einsetzte", ["Ein berühmter Erfinder", "Ein General im Krieg", "Ein reicher Bankier"]],
    ["Was geschah mit der Alphabetisierung?", "Sie nahm durch die Einführung der allgemeinen Schulpflicht stark zu", ["Sie nahm ab", "Niemand lernte mehr lesen", "Sie wurde verboten"]],
    ["Was war das 'Manifest' von Marx als Lösung?", "Die Übernahme der Macht durch das Proletariat (Klassenkampf)", ["Ein friedliches Gebet", "Die Rückkehr zum Absolutismus", "Das Auswandern nach Amerika"]],
    ["Wie veränderte sich die Kommunikation?", "Telegrafie und später das Telefon machten Nachrichten schneller", ["Nichts änderte sich", "Briefe wurden verboten", "Man nutzte nur noch Trommeln"]],
    ["Welcher Staat wurde 1871 zum Nationalstaat geeint?", "Das Deutsche Reich", ["Österreich", "Die Schweiz", "Frankreich (war es schon)", "Russland"]],
    ["Was war ein Merkmal der bürgerlichen Familie?", "Trennung von Erwerbsarbeit (Vater) und Haushalt (Mutter)", ["Alle arbeiteten in der Fabrik zusammen", "Es gab keine Rollenverteilung", "Die Kinder regierten"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Lösung der Not?", "Soziale Frage"],
    ["Verfasser 'Kommunistisches Manifest'?", "Marx"],
    ["Arbeiter-Zusammenschluss?", "Gewerkschaft"],
    ["Erfinder der Sozialversicherung?", "Bismarck"],
    ["Massenarmut-Begriff?", "Pauperismus"],
    ["Klasse der Unternehmer?", "Buergertum"],
    ["Gleichstellung-Begriff?", "Emanzipation"],
    ["Rückzug ins Private (Stil)?", "Biedermeier"],
    ["Helfer der Gesellen (Priester)?", "Kolping"],
    ["Hauptziel der Liberalen?", "Freiheit"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 25. AMERIKANISCHE REVOLUTION ───────────────────────────────────────────

function generateAmerikanischeRevolution(seed: number = 725): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "amerikanische_revolution";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was war der Slogan der amerikanischen Siedler gegen die britischen Steuern?", "No taxation without representation", ["Give me liberty or give me death", "In God we trust", "E pluribus unum"]],
    ["Wann wurde die Unabhängigkeitserklärung der USA unterzeichnet?", "4. Juli 1776", ["14. Juli 1789", "1. Januar 1800", "24. Dezember 1775"]],
    ["Wer war der erste Präsident der USA?", "George Washington", ["Thomas Jefferson", "Benjamin Franklin", "Abraham Lincoln"]],
    ["Was war die 'Boston Tea Party'?", "Ein Protest gegen die Teesteuer, bei dem Tee ins Meer geworfen wurde", ["Ein gemütliches Kaffeetrinken", "Die Gründung einer Teefirma", "Ein Ball in Boston"]],
    ["Gegen welches Land kämpften die 13 Kolonien um ihre Unabhängigkeit?", "Großbritannien", ["Frankreich", "Spanien", "Deutschland"]],
    ["Wer war der Hauptautor der Unabhängigkeitserklärung?", "Thomas Jefferson", ["George Washington", "John Adams", "Benjamin Franklin"]],
    ["Welche Rolle spielte Frankreich im Unabhängigkeitskrieg?", "Es unterstützte die Amerikaner gegen die Briten", ["Es kämpfte auf britischer Seite", "Es blieb völlig neutral", "Es besetzte New York"]],
    ["Was ist die 'Bill of Rights'?", "Die ersten zehn Zusatzartikel zur US-Verfassung (Grundrechte)", ["Ein Gesetz zur Einführung von Steuern", "Ein Friedensvertrag mit Indianern", "Ein Kochbuch"]],
    ["In welcher Stadt wurde die Unabhängigkeit erklärt?", "Philadelphia", ["Washington D.C.", "New York", "Boston"]],
    ["Wie viele Kolonien erklärten 1776 ihre Unabhängigkeit?", "13", ["50", "10", "20", "7"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Stadt der Tea Party?", "Boston"],
    ["US-Unabhängigkeitstag (Datum)?", "4. Juli"],
    ["Erster US-Präsident?", "Washington"],
    ["Slogan: No taxation without ...?", "representation"],
    ["Hauptgegner (Staat)?", ["England", "Grossbritannien"]],
    ["Autor der Deklaration?", "Jefferson"],
    ["Zahl der Gründungskolonien?", "13"],
    ["Dokument der Grundrechte?", "Bill of Rights"],
    ["Name des neuen Staates?", "USA"],
    ["Jahr der Erklärung?", "1776"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── GENERATOR MAP ─────────────────────────────────────────────────────────

export const G7_Generators_Geschichte: Record<string, (seed?: number) => CurriculumQuestion[]> = {
  renaissance: (seed?: number) => generateRenaissance(seed),
  humanismus: (seed?: number) => generateHumanismus(seed),
  buchdruck: (seed?: number) => generateBuchdruck(seed),
  entdeckungsfahrten: (seed?: number) => generateEntdeckungsfahrten(seed),
  eroberung_amerikas: (seed?: number) => generateEroberungAmerikas(seed),
  reformation: (seed?: number) => generateReformation(seed),
  bauernkrieg: (seed?: number) => generateBauernkrieg(seed),
  gegenreformation: (seed?: number) => generateGegenreformation(seed),
  dreissigjaehriger_krieg: (seed?: number) => generateDreissigjaehrigerKrieg(seed),
  leiden_bevoelkerung: (seed?: number) => generateLeidenBevoelkerung(seed),
  westfaelischer_friede: (seed?: number) => generateWestfaelischerFriede(seed),
  absolutismus_frankreich: (seed?: number) => generateAbsolutismusFrankreich(seed),
  versailler_hofleben: (seed?: number) => generateVersaillerHofleben(seed),
  merkantilismus: (seed?: number) => generateMerkantilismus(seed),
  aufklaerung: (seed?: number) => generateAufklaerung(seed),
  preussen_friedrich: (seed?: number) => generatePreussenFriedrich(seed),
  ursachen_franz_rev: (seed?: number) => generateUrsachenFranzRev(seed),
  sturm_bastille: (seed?: number) => generateSturmBastille(seed),
  schreckensherrschaft: (seed?: number) => generateSchreckensherrschaft(seed),
  aufstieg_napoleon: (seed?: number) => generateAufstiegNapoleon(seed),
  ende_napoleon: (seed?: number) => generateEndeNapoleon(seed),
  wiener_kongress: (seed?: number) => generateWienerKongress(seed),
  industrielle_revolution_anfang: (seed?: number) => generateIndustrielleRev(seed),
  gesellschaftlicher_wandel: (seed?: number) => generateGesellschaftlicherWandel(seed),
  amerikanische_revolution: (seed?: number) => generateAmerikanischeRevolution(seed)
};
