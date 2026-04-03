// ─── GERMAN GRADE 6 GESCHICHTE GENERATORS ────────────────────────────────────
// Procedural question generators for German Grade 6 Geschichte (History)
// Topic: Das Mittelalter
// Each subtopic generates 20 MCQ and 10 Typing questions.
// All questions in German language (Deutsch).

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

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

/** Create Typing question */
function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): CurriculumTyping {
  return {
    type: "typing",
    topic,
    subtopic,
    question,
    answer
  };
}

// ─── 1. DAS FRANKENREICH - CHLODWIG ──────────────────────────────────────────

function generateFrankenreichChlodwig(seed: number = 101): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "frankenreich_chlodwig";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Welches Herrschergeschlecht begründete das Frankenreich?", "Merowinger", ["Karolinger", "Ottonen", "Habsburger"]],
    ["Wer war der erste bedeutende König der Franken?", "Chlodwig I.", ["Karl der Große", "Pippin der Jüngere", "Ludwig das Kind"]],
    ["In welchem Jahr ließ sich Chlodwig I. taufen?", "um 496 n. Chr.", ["um 800 n. Chr.", "um 313 n. Chr.", "um 1066 n. Chr."]],
    ["Warum war die Taufe Chlodwigs politisch so wichtig?", "Er sicherte sich die Unterstützung der Kirche und der gallo-römischen Bevölkerung", ["Er wurde dadurch zum Kaiser von Rom", "Er konnte dadurch besser gegen die Wikinger kämpfen", "Er erfand dadurch die christliche Zeitrechnung"]],
    ["Welche Stadt machte Chlodwig zu seiner Residenz?", "Paris", ["Aachen", "Rom", "Konstantinopel"]],
    ["Zu welcher christlichen Glaubensrichtung trat Chlodwig über?", "Katholizismus", ["Arianismus", "Orthodoxie", "Protestantismus"]],
    ["Gegen welches Volk siegte Chlodwig in der Schlacht von Zülpich?", "Alamannen", ["Sachsen", "Vandalen", "Hunnen"]],
    ["Was geschah mit dem Frankenreich nach Chlodwigs Tod?", "Es wurde unter seinen Söhnen aufgeteilt", ["Es zerfiel sofort komplett", "Es wurde eine Republik", "Es wurde Teil des Oströmischen Reiches"]],
    ["Wie hießen die merowingischen Könige im Volksmund wegen ihrer Machtlosigkeit später?", "Schattenkönige", ["Sonnenkönige", "Wüstenkönige", "Eisenkönige"]],
    ["Wer regierte das Reich tatsächlich, während die Merowinger machtlos wurden?", "Hausmeier", ["Bischöfe", "Ritter", "Bauern"]],
    ["Welches Gebiet umfasste das Frankenreich zu Chlodwigs Zeiten hauptsächlich?", "Das heutige Frankreich und Teile Westdeutschlands", ["Nur Italien", "Spanien und Portugal", "England und Irland"]],
    ["Welche Sprache vermischte sich im Frankenreich mit dem Germanischen?", "Latein", ["Griechisch", "Arabisch", "Russisch"]],
    ["Was war das Symbol der Merowinger?", "Langhaarige Könige", ["Kurzgeschorene Köpfe", "Goldene Kronen", "Eiserne Faust"]],
    ["Wer war die Ehefrau Chlodwigs, die ihn zum Christentum drängte?", "Chlothilde", ["Hildegard", "Bertha", "Theophanu"]],
    ["Was war ein wichtiges Gesetzbuch der Franken?", "Lex Salica", ["Codex Hammurabi", "Magna Carta", "Bürgerliches Gesetzbuch"]],
    ["Welche Strafe sah die Lex Salica meistens vor?", "Geldstrafen (Wergeld)", ["Todesstrafe", "Gefängnis", "Verbannung"]],
    ["Wer war der legendäre Stammvater der Merowinger?", "Merowech", ["Chlodwig", "Karlmann", "Sigisbert"]],
    ["Welchen Titel trug Chlodwig nach seiner Taufe?", "Rex Francorum (König der Franken)", ["Imperator Augustus", "Papst", "Herzog von Bayern"]],
    ["Was passierte mit den gallo-römischen Bewohnern unter fränkischer Herrschaft?", "Sie behielten oft ihre Ämter und Kultur", ["Sie wurden alle versklavt", "Sie mussten das Land verlassen", "Sie wurden zwangsweise germanisiert"]],
    ["Was war die 'Salische Dynastie' ursprünglich?", "Ein Zweig der Franken", ["Ein römischer Stamm", "Ein Volk aus dem Osten", "Eine religiöse Sekte"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie heißt das Herrschergeschlecht von Chlodwig I.?", "Merowinger"],
    ["In welchem Jahr (ungefähr) ließ sich Chlodwig taufen?", "496"],
    ["Welche heutige französische Hauptstadt war Chlodwigs Residenz?", "Paris"],
    ["Wie nannte man die Verwalter des königlichen Hofes, die später die Macht übernahmen?", "Hausmeier"],
    ["Wie heißt das berühmte fränkische Gesetzbuch?", "Lex Salica"],
    ["Nach welchem Volk ist das Frankenreich benannt?", "Franken"],
    ["Welche Religion nahm Chlodwig an?", "Christentum"],
    ["Wie hieß die christliche Ehefrau Chlodwigs?", "Chlothilde"],
    ["Was mussten Täter laut Lex Salica oft zahlen, um eine Blutrache zu verhindern?", "Wergeld"],
    ["Wie nannte man die Merowingerkönige, als sie keine Macht mehr hatten?", "Schattenkönige"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 2. KARL DER GROSSE - KRÖNUNG UND REICH ──────────────────────────────────

function generateKarlDerGrosse(seed: number = 102): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "karl_der_grosse";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wann wurde Karl der Große zum Kaiser gekrönt?", "Weihnachten 800 n. Chr.", ["Ostern 753 n. Chr.", "Pfingsten 962 n. Chr.", "Neujahr 1000 n. Chr."]],
    ["In welcher Stadt fand die Kaiserkrönung Karls statt?", "Rom", ["Aachen", "Paris", "Konstantinopel"]],
    ["Welcher Papst krönte Karl den Großen zum Kaiser?", "Leo III.", ["Gregor der Große", "Urban II.", "Benedikt XVI."]],
    ["Welches antike Reich wollte Karl der Große erneuern?", "Das Römische Reich", ["Das Griechische Reich", "Das Ägyptische Reich", "Das Babylonische Reich"]],
    ["Gegen welches germanische Volk führte Karl über 30 Jahre lang Krieg?", "Sachsen", ["Franken", "Bayern", "Langobarden"]],
    ["Was war das Ziel der Sachsenkriege Karls des Großen?", "Unterwerfung und Zwangs-Christianisierung", ["Handelsbeziehungen", "Verteidigung der Alpen", "Suche nach Gold"]],
    ["Welche Stadt war Karls Lieblingspfalz und geistiges Zentrum?", "Aachen", ["Ingeheim", "Regensburg", "Paderborn"]],
    ["Wie nannte man die Gelehrtenrunde an Karls Hof?", "Hofakademie", ["Senat", "Zunft", "Ritterschaft"]],
    ["Was war die 'Karolingische Minuskel'?", "Eine neue, gut lesbare Schrift", ["Eine kleine Waffe", "Ein spezielles Kleidungsstück", "Eine Maßeinheit für Getreide"]],
    ["Warum förderte Karl die Bildung in seinem Reich?", "Er brauchte gebildete Beamte und Kleriker für die Verwaltung", ["Er wollte, dass alle Bauern lesen lernen", "Er wollte neue Gedichte schreiben", "Er hasste Latein"]],
    ["Welches Volk besiegte Karl in Italien und übernahm deren Krone?", "Langobarden", ["Etrusker", "Venedig", "Normannen"]],
    ["Was war der 'Sachsenhain' bei Verden?", "Ort einer grausamen Massenhinrichtung von Sachsen", ["Ein heiliger Wald der Franken", "Ein Krönungsplatz", "Ein Marktplatz"]],
    ["Wie wurde das Reich unter Karl dem Großen verwaltet?", "Durch Grafen und Königsboten", ["Durch ein Parlament", "Durch gewählte Bürgermeister", "Nur durch den Papst"]],
    ["Was passierte mit der Ausdehnung des Frankenreichs unter Karl?", "Es erreichte seine größte Ausdehnung", ["Es schrumpfte stark", "Es blieb genau so groß wie unter Chlodwig", "Es wurde in 100 Kleinstaaten geteilt"]],
    ["Wer war Karls Biograf, der 'Vita Karoli Magni' schrieb?", "Einhard", ["Alkuin", "Pippin", "Ludwig"]],
    ["Welchen Titel trug Karl vor seiner Kaiserkrönung?", "König der Franken und Langobarden", ["Herzog von Sachsen", "Zar von Russland", "Lord von England"]],
    ["Was war Karls Einstellung zur antiken Kultur?", "Er bewunderte sie und ließ antike Texte kopieren", ["Er ließ alle antiken Statuen zerstören", "Er hielt sie für Teufelszeug", "Er interessierte sich nicht dafür"]],
    ["Welches Tier schenkte der Kalif von Bagdad Karl dem Großen?", "Einen Elefanten (Abul Abbas)", ["Einen Löwen", "Ein Kamel", "Einen Tiger"]],
    ["Wo wurde Karl der Große begraben?", "Im Aachener Dom", ["In der Peterskirche in Rom", "In Notre-Dame in Paris", "In Westminster Abbey"]],
    ["Wie nannte man Karls Regierungszeit wegen der kulturellen Blüte?", "Karolingische Renaissance", ["Dunkles Mittelalter", "Goldenes Zeitalter Roms", "Aufklärung"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["In welchem Jahr wurde Karl der Große Kaiser?", "800"],
    ["In welcher Stadt wurde Karl der Große zum Kaiser gekrönt?", "Rom"],
    ["In welcher heutigen deutschen Stadt steht Karls berühmte Pfalzkapelle (Dom)?", "Aachen"],
    ["Gegen welchen germanischen Stamm im Norden führte Karl lange Kriege?", "Sachsen"],
    ["Welche neue, klare Schrift wurde unter Karl eingeführt?", ["Karolingische Minuskel", "Minuskel"]],
    ["Welcher Papst krönte Karl am Weihnachtstag?", "Leo III."],
    ["Wie nannte man die Abgesandten, die für Karl die Grafen kontrollierten?", ["Königsboten", "Missi dominici"]],
    ["Wie nannte man die Grenzgebiete des Reiches, die besonders geschützt wurden?", "Marken"],
    ["Wie hieß Karls Vater?", ["Pippin", "Pippin der Jüngere"]],
    ["Was war Karls Beiname?", "der Große"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 3. VERWALTUNG DES FRANKENREICHS (PFALZEN, BOTEN) ────────────────────────

function generateVerwaltungFrankenreich(seed: number = 103): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "verwaltung_frankenreich";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Hatte das Frankenreich eine feste Hauptstadt?", "Nein, der König reiste von Ort zu Ort (Reisekönigtum)", ["Ja, Aachen war die einzige Hauptstadt", "Ja, Paris war das Zentrum", "Ja, Rom war die Hauptstadt"]],
    ["Wie nannte man die befestigten Stützpunkte, in denen der König auf seiner Reise wohnte?", "Pfalzen", ["Burgen", "Klöster", "Rathäuser"]],
    ["Warum musste der König durch sein Reich reisen?", "Um Präsenz zu zeigen, Gericht zu halten und weil eine einzige Pfalz nicht genug Nahrung für den Hofstaat bot", ["Weil er keine eigene Wohnung hatte", "Weil er Angst vor Attentaten hatte", "Um Urlaub zu machen"]],
    ["Wer waren die 'Missi dominici'?", "Königsboten, die die Verwaltung in den Provinzen kontrollierten", ["Römische Soldaten", "Päpstliche Gesandte", "Berittene Händler"]],
    ["Welche Aufgabe hatten die Grafen im Frankenreich?", "Sie übten im Namen des Königs die Verwaltung, Gerichtsbarkeit und Heerführung aus", ["Sie waren nur für die Jagd zuständig", "Sie bauten ausschließlich Straßen", "Sie waren die Köche des Königs"]],
    ["Wie hießen die Grafen, die die gefährlichen Grenzgebiete schützten?", "Markgrafen", ["Stadtgrafen", "Landgrafen", "Pfalzgrafen"]],
    ["Was war das 'Capitulare'?", "Ein königlicher Erlass oder ein Gesetz", ["Ein Hut des Königs", "Ein Teil des Heeres", "Ein religiöses Lied"]],
    ["Wer unterstützte den König bei der schriftlichen Verwaltung?", "Die Hofkapelle (Geistliche)", ["Einfache Bauern", "Römische Sklaven", "Ausländische Kaufleute"]],
    ["Warum waren Geistliche für die Verwaltung so wichtig?", "Sie waren fast die Einzigen, die lesen und schreiben konnten", ["Sie hatten das meiste Geld", "Sie kannten die besten Jagdgründe", "Sie waren mit dem Papst verwandt"]],
    ["Wie nannte man den Vorsteher der königlichen Verwaltung?", "Pfalzgraf", ["Markgraf", "Zunftmeister", "Bürgermeister"]],
    ["Was geschah auf den Hoftagen?", "Wichtige Angelegenheiten des Reiches wurden mit den Großen besprochen", ["Es wurde nur getanzt", "Der König wurde jedes Mal neu gewählt", "Steuern wurden abgeschafft"]],
    ["Wie wurde die Versorgung des Königshofes in den Pfalzen geregelt?", "Durch Abgaben der umliegenden Krongüter", ["Durch Einkäufe im Supermarkt", "Durch Spenden der Armen", "Gar nicht, der Hof hungerte"]],
    ["Was war ein 'Königsbote' meistens?", "Ein hoher Geistlicher oder ein Adliger", ["Ein schneller Läufer aus dem Volk", "Ein dressierter Falke", "Ein römischer Beamter"]],
    ["Welches Recht hatte der König auf seinen Reisen?", "Das Gastungsrecht (Beherbergung und Verpflegung)", ["Das Recht auf alle Schätze des Gastgebers", "Das Recht, die Pfalz zu verkaufen", "Das Recht, die Pfalz in Brand zu setzen"]],
    ["In welchem Rhythmus reiste der König?", "Er wechselte den Ort meist nach einigen Wochen oder Monaten", ["Er blieb 10 Jahre an einem Ort", "Er reiste jeden Tag weiter", "Er reiste nur im Sommer"]],
    ["Was war eine 'Mark' im Frankenreich?", "Ein militärisches Grenzgebiet", ["Eine Währung", "Ein Marktplatz", "Ein Kleidungsstück"]],
    ["Wer ernannte die Grafen?", "Der König", ["Das Volk", "Der Papst", "Andere Grafen"]],
    ["Welche Sprache wurde in der schriftlichen Verwaltung Karls des Großen genutzt?", "Latein", ["Deutsch", "Französisch", "Englisch"]],
    ["Was war der 'Bann' des Königs?", "Die Befehls- und Strafgewalt des Königs", ["Ein Fluch der Kirche", "Ein Verbot zu tanzen", "Eine Art Gürtel"]],
    ["Wie kommunizierte der König mit fernen Reichsteilen?", "Durch Boten und schriftliche Erlasse", ["Durch das Telefon", "Durch Rauchzeichen", "Gar nicht"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie nennt man die Stützpunkte, die der reisende König besuchte?", "Pfalzen"],
    ["Wie hießen die Beamten, die in den Gebieten des Reiches Recht sprachen und das Heer führten?", "Grafen"],
    ["Wie hießen die Kontrolleure, die Karl der Große aussandte?", ["Königsboten", "Missi dominici"]],
    ["Welches Volk stellte die meisten Schreiber in der Verwaltung?", "Geistliche"],
    ["Wie nennt man die Regierungsform, bei der der König ständig umherzieht?", "Reisekönigtum"],
    ["Wie nennt man einen Grafen, der eine 'Mark' verwaltete?", "Markgraf"],
    ["In welcher Sprache wurden die königlichen Erlasse (Kapitularien) verfasst?", "Latein"],
    ["Wie hieß die berühmteste Pfalz Karls des Großen?", "Aachen"],
    ["Wie hieß die Gruppe von Geistlichen am Hof, die die Kapitularien verfasste?", "Hofkapelle"],
    ["Wie nennt man die Versammlungen des Königs mit den Großen des Reiches?", "Hoftage"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 4. DIE TEILUNG DES FRANKENREICHS (VERTRAG VON VERDUN) ──────────────────

function generateReichsteilungVerdun(seed: number = 104): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "reichsteilung_verdun";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wer war der direkte Nachfolger Karls des Großen als Kaiser?", "Ludwig der Fromme", ["Karl der Kahle", "Ludwig der Deutsche", "Lothar I."]],
    ["In welchem Jahr wurde der Vertrag von Verdun unterzeichnet?", "843 n. Chr.", ["800 n. Chr.", "496 n. Chr.", "1066 n. Chr."]],
    ["Wie viele Enkel Karls des Großen teilten das Reich in Verdun unter sich auf?", "Drei", ["Zwei", "Vier", "Fünf"]],
    ["Wer erhielt im Vertrag von Verdun das Westfrankenreich?", "Karl der Kahle", ["Ludwig der Deutsche", "Lothar I.", "Ludwig der Fromme"]],
    ["Wer erhielt im Vertrag von Verdun das Ostfrankenreich?", "Ludwig der Deutsche", ["Karl der Kahle", "Lothar I.", "Ludwig der Fromme"]],
    ["Wer erhielt das Mittelreich und die Kaiserkrone?", "Lothar I.", ["Karl der Kahle", "Ludwig der Deutsche", "Karlmann"]],
    ["Was war eine langfristige Folge der Reichsteilung?", "Die Entstehung der Vorläufer von Frankreich und Deutschland", ["Die sofortige Wiedervereinigung des Reiches", "Das Ende des Christentums in Europa", "Der Aufstieg Englands zur Weltmacht"]],
    ["Warum wurde das Reich geteilt?", "Wegen Erbstreitigkeiten unter den Söhnen Ludwigs des Frommen", ["Weil der Papst es so befohlen hatte", "Weil die Wikinger das Reich besetzt hatten", "Weil das Reich zu reich war"]],
    ["Wie hießen die Eide, die Karl der Kahle und Ludwig der Deutsche 842 schworen?", "Straßburger Eide", ["Verduner Schwüre", "Aachener Verträge", "Römische Gelübde"]],
    ["Was war das Besondere an den Straßburger Eiden?", "Sie wurden in den jeweiligen Volkssprachen (Altfranzösisch/Althochdeutsch) verfasst", ["Sie wurden mit Blut geschrieben", "Sie verboten jeglichen Krieg", "Sie wurden vom Kaiser diktiert"]],
    ["Welches Reich verschwand nach einiger Zeit als eigenständiges Gebilde?", "Das Mittelreich (Lotharingien)", ["Das Westreich", "Das Ostreich", "Das Frankenreich insgesamt"]],
    ["Wie nannte man das Ostfrankenreich später?", "Heiliges Römisches Reich", ["Königreich Frankreich", "Zarentum Russland", "Republik Italien"]],
    ["Wie nannte man das Westfrankenreich später?", "Frankreich", ["Deutschland", "Spanien", "Österreich"]],
    ["Was passierte mit der Kaiserkrone nach Lothars Tod?", "Sie wanderte zwischen verschiedenen Herrschern und verlor an Bedeutung", ["Sie wurde eingeschmolzen", "Sie wurde dem Papst zurückgegeben", "Sie wurde nach Amerika geschickt"]],
    ["Welcher Vertrag ergänzte 870 die Teilung von Verdun?", "Vertrag von Mersen", ["Vertrag von Rom", "Vertrag von Aachen", "Vertrag von Paris"]],
    ["Wer kämpfte in der Schlacht von Fontenoy (841) gegeneinander?", "Die Söhne Ludwigs des Frommen", ["Franken gegen Sachsen", "Römer gegen Germanen", "Christen gegen Muslime"]],
    ["Was war das Problem des Mittelreichs (Lothars Reich)?", "Es hatte keine natürlichen Grenzen und war schwer zu verteidigen", ["Es gab dort kein Wasser", "Die Menschen sprachen dort kein Latein", "Der Kaiser war dort verboten"]],
    ["Was war der Anlass für die Straßburger Eide?", "Ein Bündnis von Karl und Ludwig gegen ihren Bruder Lothar", ["Ein Friedensschluss mit den Wikingern", "Die Krönung Ludwigs des Frommen", "Der Bau des Aachener Doms"]],
    ["Wie hieß der älteste Sohn Ludwigs des Frommen?", "Lothar I.", ["Karl der Kahle", "Ludwig der Deutsche", "Pippin"]],
    ["In welcher heutigen Stadt wurde der Teilungsvertrag 843 geschlossen?", "Verdun", ["Straßburg", "Metz", "Trier"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["In welchem Jahr wurde das Frankenreich in Verdun geteilt?", "843"],
    ["Wie hieß der Vertrag von 843, der das Reich aufteilte?", "Vertrag von Verdun"],
    ["Wer erhielt das Ostfrankenreich?", "Ludwig der Deutsche"],
    ["Wer erhielt das Westfrankenreich?", "Karl der Kahle"],
    ["Wer erhielt das Mittelreich und den Kaisertitel?", "Lothar I."],
    ["Wie hieß der Vater der drei Brüder, die das Reich teilten?", "Ludwig der Fromme"],
    ["Aus welchem Reichsteil entwickelte sich später Deutschland?", "Ostfrankenreich"],
    ["Aus welchem Reichsteil entwickelte sich später Frankreich?", "Westfrankenreich"],
    ["Wie heißen die Eide von 842, die als älteste Zeugnisse der Volkssprachen gelten?", "Straßburger Eide"],
    ["Wie viele Brüder teilten das Reich 843 unter sich auf?", "3"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 5. DIE STÄNDEGESELLSCHAFT (LEHNSWESEN) ──────────────────────────────────

function generateStaendegesellschaftLehnswesen(seed: number = 105): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "staendegesellschaft_lehnswesen";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wie nannte man die mittelalterliche Gesellschaftsordnung?", "Ständegesellschaft", ["Demokratie", "Klassengesellschaft", "Diktatur"]],
    ["Welche drei Stände gab es im Mittelalter?", "Lehrstand, Wehrstand, Nährstand", ["Reiche, Mittelschicht, Arme", "Arbeiter, Angestellte, Beamte", "Politiker, Soldaten, Bürger"]],
    ["Wer gehörte zum ersten Stand (Lehrstand)?", "Geistliche (Klerus)", ["Ritter", "Bauern", "Kaufleute"]],
    ["Wer gehörte zum zweiten Stand (Wehrstand)?", "Adel und Ritter", ["Mönche", "Handwerker", "Lehrer"]],
    ["Wer gehörte zum dritten Stand (Nährstand)?", "Bauern und später Stadtbürger", ["Könige", "Bischöfe", "Grafen"]],
    ["Was war das Lehnswesen?", "Ein System von gegenseitiger Treue und Leistungen zwischen Lehnsherr und Vasall", ["Ein System zum Ausleihen von Büchern", "Eine Methode zum Bau von Burgen", "Eine Art der Steuererklärung"]],
    ["Was erhielt ein Vasall von seinem Lehnsherrn?", "Ein Lehen (meist Land) und Schutz", ["Nur Geld", "Ein Pferd und ein Schwert ohne Land", "Einen Adelstitel ohne Verpflichtung"]],
    ["Was schuldete der Vasall seinem Lehnsherrn?", "Rat und Tat (besonders Kriegsdienst)", ["Nur Steuern in Gold", "Gar nichts", "Er musste die Felder des Herrn bestellen"]],
    ["Was war der Kern des Lehnswesens?", "Der persönliche Treueeid", ["Ein schriftlicher Arbeitsvertrag", "Der Kauf von Land", "Die Wahl durch das Volk"]],
    ["Wie nennt man jemanden, der Land von einem Herrn zur Nutzung erhält?", "Vasall", ["Lehnsherr", "König", "Bürger"]],
    ["Wer stand an der Spitze der Lehenspyramide?", "Der König", ["Der Papst", "Der reichste Bauer", "Der oberste Ritter"]],
    ["Konnte man im Mittelalter leicht seinen Stand wechseln?", "Nein, man wurde meist in einen Stand hineingeboren (Gottgewollte Ordnung)", ["Ja, durch Fleiß", "Ja, man wurde alle 4 Jahre neu zugeordnet", "Ja, wenn man genug Geld hatte"]],
    ["Was ist ein 'Aftervasall'?", "Ein Vasall, der von einem anderen Vasallen Land erhalten hat", ["Ein Vasall, der seinen Eid gebrochen hat", "Der wichtigste Berater des Königs", "Ein Vasall, der kein Land besitzt"]],
    ["Warum war Landbesitz im Mittelalter so wichtig?", "Weil es kaum Geldwirtschaft gab und Land die Grundlage für Reichtum und Macht war", ["Weil man auf Land besser tanzen konnte", "Weil man Land nicht stehlen konnte", "Weil Land heilig war"]],
    ["Was geschah beim 'Lehnshuldigung'?", "Der Vasall legte seine Hände in die des Herrn und schwor Treue", ["Der Herr schenkte dem Vasallen eine Krone", "Es wurde ein großes Fest gefeiert", "Der Vasall musste das Land bezahlen"]],
    ["Was war die Hauptaufgabe des Klerus?", "Beten und für das Seelenheil der Menschen sorgen", ["Kämpfen", "Ackern", "Handel treiben"]],
    ["Wer bildete die überwältigende Mehrheit der Bevölkerung (ca. 90%)?", "Bauern", ["Ritter", "Mönche", "Adlige"]],
    ["Was bedeutete 'Immunität' im Lehnswesen?", "Das Recht eines Grundherrn, in seinem Gebiet selbst Gericht zu halten", ["Schutz vor Krankheiten", "Das Recht, keine Kleidung zu tragen", "Dass man nicht sterben konnte"]],
    ["Was passierte, wenn ein Vasall starb?", "Das Lehen fiel meist an den Herrn zurück, wurde aber oft dem Sohn neu verliehen", ["Das Land wurde an die Armen verteilt", "Das Land wurde verkauft", "Das Land wurde Eigentum der Kirche"]],
    ["Was war ein 'Handgang'?", "Ein Teil der Lehnszeremonie (Hände in die des Herrn legen)", ["Ein Spaziergang durch das Land", "Ein Faustkampf", "Das Waschen der Hände"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie nennt man das System von Lehnsherr und Vasall?", "Lehnswesen"],
    ["Wie nennt man die Gabe (meist Land), die der Herr dem Vasallen gab?", "Lehen"],
    ["Wie nennt man den Empfänger eines Lehens?", "Vasall"],
    ["Wer steht an der obersten Stelle der Lehenspyramide?", "König"],
    ["Zu welchem Stand gehörten die Geistlichen?", ["Klerus", "erster Stand", "Lehrstand"]],
    ["Zu welchem Stand gehörten die Ritter und der Adel?", ["zweiter Stand", "Wehrstand", "Adel"]],
    ["Zu welchem Stand gehörten die Bauern?", ["dritter Stand", "Nährstand"]],
    ["Wie nennt man das feierliche Versprechen der Treue?", ["Treueeid", "Lehnseid"]],
    ["Wie nennt man einen Vasallen, der sein Lehen von einem anderen Vasallen erhalten hat?", "Aftervasall"],
    ["Was war die wichtigste Leistung des Vasallen für den Herrn?", ["Kriegsdienst", "Heeresdienst"]]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 6. DAS RITTERTUM (AUSBILDUNG, IDEALE) ───────────────────────────────────

function generateRittertum(seed: number = 106): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "rittertum";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["In welchem Alter begann meist die Ausbildung zum Ritter?", "mit 7 Jahren", ["mit 14 Jahren", "mit 21 Jahren", "mit 10 Jahren"]],
    ["Wie nannte man einen Jungen im ersten Stadium seiner Ritterausbildung?", "Page", ["Knappe", "Edelmann", "Knecht"]],
    ["Wo fand die Ausbildung zum Ritter meistens statt?", "An einem fremden befreundeten Hof", ["In einer öffentlichen Schule", "Zuhause bei den Eltern", "In einem Kloster"]],
    ["Wie hieß die zweite Stufe der Ausbildung (ab ca. 14 Jahren)?", "Knappe", ["Page", "Meister", "Geselle"]],
    ["Was war die Hauptaufgabe eines Knappen?", "Dem Ritter dienen, die Waffen pflegen und im Kampf beistehen", ["Nur Kochen", "Bücher schreiben", "Das Land pflügen"]],
    ["Wie nannte man die feierliche Aufnahme in den Ritterstand?", "Schwertleite (später Ritterschlag)", ["Krönung", "Taufe", "Hochzeit"]],
    ["Welches war die wichtigste Waffe des Ritters beim Turnier?", "Lanze", ["Axt", "Dolch", "Bogen"]],
    ["Was versteht man unter 'Minne'?", "Die ritterliche Verehrung einer adligen Dame", ["Eine Art Bergwerk", "Ein spezielles Schwert", "Ein religiöses Fest"]],
    ["Was war eine 'Aventiure'?", "Ein gefährliches Abenteuer oder eine ritterliche Bewährungsprobe", ["Ein spezielles Essen", "Ein Teil der Rüstung", "Ein Gebet"]],
    ["Welche Tugend war für einen Ritter besonders wichtig?", "Tapferkeit, Treue und Ehre", ["Geiz", "Hinterlist", "Faulheit"]],
    ["Wie schützten sich Ritter im Kampf?", "Durch Kettenhemd oder später Plattenpanzer und Schild", ["Durch Lederjacken", "Durch magische Sprüche", "Gar nicht"]],
    ["Was ist ein Wappen?", "Ein Erkennungszeichen auf dem Schild des Ritters", ["Ein spezieller Hut", "Ein Name für das Pferd", "Ein religiöses Symbol"]],
    ["Warum wurden Turniere abgehalten?", "Als Übung für den Ernstfall und zur Unterhaltung", ["Um Geld für die Armen zu sammeln", "Um neue Könige zu wählen", "Um Streitigkeiten friedlich beizulegen"]],
    ["Was passierte, wenn ein Ritter im Turnier vom Pferd fiel?", "Er galt meist als besiegt und verlor oft Pferd und Rüstung an den Sieger", ["Er wurde hingerichtet", "Er bekam einen Trostpreis", "Er durfte sofort wieder aufsteigen"]],
    ["Wer konnte Ritter werden?", "Ursprünglich nur Söhne von Adligen", ["Jeder, der mutig war", "Nur reiche Kaufleute", "Nur Bauern"]],
    ["Was war der 'Kodex' des Rittertums?", "Unbeschriebene Regeln für das Verhalten eines Ritters", ["Ein Gesetzbuch des Königs", "Eine Art Kochbuch", "Ein Bestimmungsbuch für Pferde"]],
    ["Welches Tier war für den Ritter unentbehrlich?", "Das Schlachtross (Destrier)", ["Ein Esel", "Ein Hund", "Ein Falke"]],
    ["Wie nannte man wandernde Sänger, die von Rittertaten erzählten?", "Minnesänger", ["Rapper", "Chorsänger", "Opernsänger"]],
    ["Was war die 'Schwertleite' ursprünglich?", "Das Umgürten mit dem Schwert", ["Das Waschen des Schwerts", "Das Zerbrechen des Schwerts", "Das Verkaufen des Schwerts"]],
    ["Was ist ein 'Quest' im ritterlichen Sinne?", "Eine ritterliche Suche oder Aufgabe", ["Ein spezieller Helm", "Ein Tanz", "Ein Turnierpreis"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie nennt man die erste Stufe der Ritterausbildung (ab 7 Jahren)?", "Page"],
    ["Wie nennt man die zweite Stufe der Ritterausbildung (ab 14 Jahren)?", "Knappe"],
    ["Wie nennt man die feierliche Aufnahme in den Ritterstand?", ["Schwertleite", "Ritterschlag"]],
    ["Wie heißt das Erkennungszeichen auf dem Schild eines Ritters?", "Wappen"],
    ["Wie nennt man den ritterlichen Gesang oder die Verehrung einer Dame?", "Minne"],
    ["Was ist die wichtigste Stoßwaffe des Ritters zu Pferd?", "Lanze"],
    ["Wie nennt man das schwere Schutzgewand aus Eisenringen?", "Kettenhemd"],
    ["Wie nennt man die ritterlichen Kampfübungen zur Unterhaltung?", "Turnier"],
    ["Welche Tugend bezeichnet die Standhaftigkeit im Kampf?", "Tapferkeit"],
    ["Wie nennt man den Begleiter eines Ritters, der seine Ausrüstung trägt?", "Knappe"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 7. BURGEN (BAU, TYPEN, LEBEN) ───────────────────────────────────────────

function generateBurgen(seed: number = 107): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "burgen";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wie nennt man den Hauptturm einer Burg, der als letzter Zufluchtsort diente?", "Bergfried", ["Palas", "Zwinger", "Kemenate"]],
    ["Was war das repräsentative Wohngebäude des Burgherrn?", "Palas", ["Bergfried", "Vorburg", "Zugbrücke"]],
    ["Warum wurden viele Burgen auf Bergen errichtet (Höhenburgen)?", "Bessere Sicht und schwierigere Angriffsbedingungen", ["Wegen der besseren Luft", "Um näher bei Gott zu sein", "Weil es dort kein Wasser gab"]],
    ["Welcher Burgtyp wurde auf einem künstlich aufgeschütteten Erdhügel erbaut?", "Motte", ["Wasserburg", "Felsenburg", "Stadtburg"]],
    ["Was ist eine 'Vorburg'?", "Ein befestigter Bereich vor der Kernburg für Ställe und Werkstätten", ["Der Thronsaal des Königs", "Ein Graben ohne Wasser", "Die Brücke über den Fluss"]],
    ["Wie schützten sich die Bewohner einer Burg gegen das Verhungern bei Belagerungen?", "Durch große Vorratskammern und eigene Brunnen oder Zisternen", ["Durch tägliche Lieferungen von Bauern", "Durch Magie", "Gar nicht, sie ergaben sich sofort"]],
    ["Was ist ein 'Fallgitter'?", "Ein schweres Schutzgitter vor dem Burgtor", ["Ein Teil der Rüstung", "Ein Netz zum Fischen im Burggraben", "Eine Falle im Wald"]],
    ["Wie nennt man die Maueröffnungen, durch die Bogenschützen schossen?", "Schießscharten", ["Fenster", "Pechnasen", "Zinnen"]],
    ["Was war die Funktion einer 'Pechnase'?", "Hinausgießen von heißem Pech oder Wasser auf Angreifer", ["Ein Ort zum Schnarchen", "Ein Lager für Wolle", "Ein Schmuckstück an der Mauer"]],
    ["Woher bezog eine Burg auf einem Berg meist ihr Wasser?", "Aus einer Zisterne (Regenspeicher) oder einem tiefen Brunnen", ["Aus dem nächsten Supermarkt", "Aus dem Wolkenbruch", "Nur durch Weinlieferungen"]],
    ["Was war die 'Kemenate' in einer Burg?", "Ein beheizbarer Wohnraum, oft für die Frauen", ["Der Pferdestall", "Das Gefängnis", "Die Waffenkammer"]],
    ["Wer lebte außer der Familie des Burgherrn noch auf der Burg?", "Gesinde, Handwerker und Wachleute", ["Nur der König", "Nur Mönche", "Niemand, die Burg war meist leer"]],
    ["Was ist ein 'Zwinger'?", "Der Bereich zwischen der äußeren und inneren Ringmauer", ["Ein Käfig für wilde Tiere", "Der Schlafsaal der Ritter", "Ein spezielles Schwert"]],
    ["Woraus bestanden die ersten Burgen im frühen Mittelalter meist?", "Holz und Erde", ["Stein und Beton", "Glas und Stahl", "Nur aus Zelten"]],
    ["Was ist ein 'Abort' auf einer Burg?", "Die mittelalterliche Toilette (meist ein Erker über dem Abgrund)", ["Ein geheimes Dokument", "Der Abschiedsgruß der Ritter", "Ein spezielles Gebet"]],
    ["Was sind 'Zinnen'?", "Rechteckige Maueraufsätze zur Deckung der Verteidiger", ["Spitzen auf dem Helm", "Zähne des Burgherrn", "Glocken im Turm"]],
    ["Wie nennt man die Brücke, die bei Gefahr hochgezogen werden konnte?", "Zugbrücke", ["Hängebrücke", "Steinbrücke", "Pontonbrücke"]],
    ["Was passierte oft bei einer langandauernden Belagerung?", "Aushungerung und Seuchen innerhalb der Burg", ["Die Angreifer gaben nach 2 Tagen auf", "Es wurde ein Fußballspiel veranstaltet", "Die Burg wurde einfach weggetragen"]],
    ["Welcher Teil der Burg war am stärksten befestigt?", "Die Kernburg", ["Die Vorburg", "Der Gemüsegarten", "Der Parkplatz"]],
    ["Warum wurden Burgen im späten Mittelalter militärisch weniger wichtig?", "Wegen der Erfindung von Feuerwaffen und Kanonen", ["Weil die Ritter keine Lust mehr hatten", "Weil Burgen zu teuer im Unterhalt wurden", "Weil alle Menschen in den Urlaub fuhren"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie heißt der höchste Turm einer Burg?", "Bergfried"],
    ["Wie nennt man das Wohngebäude des Burgherrn?", "Palas"],
    ["Wie nennt man die bewegliche Brücke über den Burggraben?", "Zugbrücke"],
    ["Wie nennt man eine Burg auf einem künstlichen Erdhügel?", "Motte"],
    ["Wie nennt man den Bereich vor der Hauptburg?", "Vorburg"],
    ["Wie nennt man die Maueröffnungen für Bogenschützen?", "Schießscharten"],
    ["Wie heißt der Wasserspeicher für Regenwasser?", "Zisterne"],
    ["Wie nennt man die mittelalterliche Toilette an der Burgmauer?", "Abort"],
    ["Wie heißen die Maueraufsätze, die Schutz bieten?", "Zinnen"],
    ["Wie nennt man den innersten Teil der Burganlage?", "Kernburg"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 8. GRUNDHERRSCHAFT (HERR UND BAUER) ─────────────────────────────────────

function generateGrundherrschaft(seed: number = 108): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "grundherrschaft";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was war das Zentrum einer Grundherrschaft?", "Der Fronhof", ["Die Stadt", "Das Kloster", "Die Universität"]],
    ["Wer war der Eigentümer des gesamten Landes in der Grundherrschaft?", "Der Grundherr (Adel oder Klerus)", ["Der Bauer", "Der Kaiser allein", "Niemand, das Land war frei"]],
    ["Wie nennt man die unfreien Bauern, die an das Land gebunden waren?", "Hörige", ["Freibauern", "Ritter", "Bürger"]],
    ["Was sind 'Frondienste'?", "Arbeitsleistungen der Bauern auf dem Land des Herrn", ["Religiöse Lieder", "Steuern in Gold", "Kriegszüge nach Asien"]],
    ["Was schuldeten die Bauern dem Grundherrn als Gegenleistung für das Land?", "Abgaben (Naturalien) und Dienste", ["Nur ein nettes Wort", "Den Bau einer Pyramide", "Gar nichts"]],
    ["Was bot der Grundherr den Bauern im Gegenzug für ihre Dienste?", "Schutz und Schirm", ["Geld und Gold", "Eine Ausbildung zum Ritter", "Einen Urlaub am Meer"]],
    ["Was ist das 'Herrenland'?", "Der Teil des Landes, den der Grundherr selbst bewirtschaften ließ", ["Das Land des Kaisers", "Das Land, das den Bauern gehörte", "Ein Wald zum Jagen für alle"]],
    ["Was ist das 'Hufenland'?", "Land, das den Bauern zur Selbstversorgung überlassen wurde", ["Ein Land für Pferde", "Der Garten des Abtes", "Ödland"]],
    ["Was passierte, wenn ein höriger Bauer den Hof verlassen wollte?", "Er durfte es nicht ohne Erlaubnis des Herrn", ["Er konnte einfach gehen", "Er musste eine Strafe zahlen und durfte gehen", "Er wurde zum Ritter geschlagen"]],
    ["Wer war der 'Meier'?", "Der Verwalter des Fronhofs im Auftrag des Grundherrn", ["Der reichste Bauer", "Ein wandernder Sänger", "Der Koch des Königs"]],
    ["Was ist der 'Zehnt'?", "Eine Abgabe von 10 % der Ernte an die Kirche", ["Eine Gruppe von 10 Rittern", "Ein Feiertag alle 10 Tage", "Eine Strafe für 10 Vergehen"]],
    ["Was bedeutet 'Leibeigenschaft'?", "Die vollständige persönliche Abhängigkeit eines Menschen von seinem Herrn", ["Dass man Sport treiben muss", "Dass man nur Fleisch essen darf", "Dass man im Gefängnis lebt"]],
    ["Wer übte die niedere Gerichtsbarkeit über die Bauern aus?", "Der Grundherr", ["Der Papst", "Ein gewähltes Dorfgericht", "Der Bürgermeister"]],
    ["Was ist die 'Allmende'?", "Gemeinschaftlich genutztes Land wie Wälder und Wiesen", ["Ein spezielles Kleidungsstück", "Ein Gebet der Bauern", "Das Haus des Grundherrn"]],
    ["Warum waren viele Bauern im Mittelalter unfrei?", "Sie suchten Schutz bei einem Mächtigen gegen Krieg und Not", ["Weil sie es so wollten", "Weil sie kein Latein konnten", "Weil es ein Gesetz seit der Steinzeit war"]],
    ["Was ist das 'Bannrecht'?", "Der Zwang der Bauern, Einrichtungen des Herrn (z.B. Mühle) gegen Gebühr zu nutzen", ["Das Verbot zu tanzen", "Das Recht, jemanden zu verbannen", "Ein Gesetz gegen Diebstahl"]],
    ["Welche Abgaben mussten Bauern oft leisten?", "Getreide, Eier, Fleisch und Wolle", ["Computer, Autos und Handys", "Nur Goldmünzen", "Gar keine"]],
    ["Was passierte mit dem Land der Bauern bei deren Tod?", "Es blieb meist in der Familie, aber der Herr erhielt eine Abgabe", ["Es wurde an den Staat verkauft", "Es wurde herrenloses Land", "Es wurde in einen Wald verwandelt"]],
    ["Was war die Hauptaufgabe des Nährstandes (Bauern)?", "Die Versorgung der gesamten Bevölkerung mit Nahrung", ["Das Beten für alle", "Das Führen von Kriegen", "Das Bauen von Straßen"]],
    ["Welche Stellung hatte ein 'freier Bauer'?", "Er besaß eigenes Land, war aber oft rechtlich schlechter geschützt als Hörige", ["Er war so mächtig wie ein Graf", "Er musste gar nicht arbeiten", "Er war der Chef des Grundherrn"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie heißt der Haupthof eines Grundherrn?", "Fronhof"],
    ["Wie nennt man die Arbeitsdienste der Bauern für ihren Herrn?", "Frondienste"],
    ["Wie nennt man die Bauern, die an den Boden gebunden waren?", "Hörige"],
    ["Wie heißt die Abgabe von einem Zehntel der Ernte an die Kirche?", "Zehnt"],
    ["Wie nennt man das gemeinschaftlich genutzte Land (Wald, Wiese)?", "Allmende"],
    ["Was bot der Grundherr den Bauern außer Land als Gegenleistung?", "Schutz"],
    ["Wer verwaltete den Fronhof für den Grundherrn?", "Meier"],
    ["Wie nennt man die vollständige Unfreiheit eines Bauern?", "Leibeigenschaft"],
    ["Wie nennt man das Land, das der Herr für sich selbst behielt?", "Herrenland"],
    ["Was war die wichtigste Abgabe der Bauern (allgemeiner Begriff)?", "Naturalabgaben"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 9. BAUERNLEBEN (ALLTAG, DREIFELDERWIRTSCHAFT) ───────────────────────────

function generateBauernleben(seed: number = 109): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "bauernleben";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Welches System der Landwirtschaft setzte sich im Mittelalter durch?", "Dreifelderwirtschaft", ["Zweifelderwirtschaft", "Vierfelderwirtschaft", "Monokultur"]],
    ["Was wurde bei der Dreifelderwirtschaft im ersten Jahr auf einem field angebaut?", "Wintergetreide (z.B. Roggen)", ["Sommergetreide", "Kartoffeln", "Nichts (Brache)"]],
    ["Was geschah im dritten Jahr bei der Dreifelderwirtschaft mit dem Feld?", "Es blieb als Brache unbewirtschaftet, um sich zu erholen", ["Es wurde mit Gold bepflanzt", "Es wurde in einen Wald verwandelt", "Es wurde als Parkplatz genutzt"]],
    ["Welche Erfindung verbesserte die Zugkraft der Pferde?", "Das Kummet (Halsjoch)", ["Der Sattel", "Die Peitsche", "Der Hufeisenschutz"]],
    ["Welches neue Ackergerät ermöglichte das Aufbrechen schwerer Böden?", "Der Beetpflug mit Rädern und Sech", ["Der Hakenpflug", "Die Schaufel", "Die Sense"]],
    ["Woraus bestand die Hauptnahrung der Bauern im Mittelalter?", "Getreidebrei und Brot", ["Fleisch und Wein", "Pizza und Pasta", "Obstsalat"]],
    ["Warum war der Winter für die Bauern besonders schwierig?", "Vorräte wurden knapp und es gab keine Ernte", ["Weil sie nicht Skifahren konnten", "Weil es zu viel Sonne gab", "Weil die Steuern im Winter höher waren"]],
    ["Wer half auf dem Bauernhof bei der Ernte mit?", "Die ganze Familie, inklusive Frauen und Kinder", ["Nur der Grundherr", "Nur die Knechte", "Niemand, die Ernte geschah von selbst"]],
    ["Welches Tier lieferte den wichtigen Dünger für die Felder?", "Das Rind (oder Schafe/Schweine)", ["Der Hund", "Die Katze", "Der Goldfisch"]],
    ["Wie war das Wohnhaus eines Bauern meist aufgebaut?", "Mensch und Tier lebten oft unter einem Dach (Wohnstallhaus)", ["Es gab separate Häuser für jedes Familienmitglied", "Es waren Hochhäuser aus Stein", "Es waren kleine Zelte"]],
    ["Wann begann der Arbeitstag eines mittelalterlichen Bauern?", "Bei Sonnenaufgang", ["Um 10 Uhr vormittags", "Erst nach dem Mittagessen", "Nur nachts"]],
    ["Wie wurden Getreidekörner nach der Ernte vom Stroh getrennt?", "Durch Dreschen mit dem Dreschflegel", ["Mit dem Staubsauger", "Durch Kochen", "Durch Pusten"]],
    ["Welches Werkzeug wurde zum Mähen von Getreide verwendet?", "Sichel oder Sense", ["Messer", "Axt", "Säge"]],
    ["Was war eine Folge von schlechtem Wetter und Missernten?", "Hungersnot", ["Reichtum", "Ein großes Fest", "Urlaub für alle"]],
    ["Wozu diente die 'Brache'?", "Zur Erholung des Bodens", ["Als Spielplatz", "Als Bauplatz für Burgen", "Als Friedhof"]],
    ["Welches Getreide war die wichtigste Sorte für die Bauern?", "Roggen", ["Reis", "Mais", "Hirse"]],
    ["Was tranken die Bauern oft, weil das Wasser oft verunreinigt war?", "Dünnbier", ["Cola", "Kaffee", "Orangensaft"]],
    ["Wie nennt man die Zeit, in der die Ernte eingefahren wurde?", "Erntezeit", ["Ostern", "Advent", "Fastenzeit"]],
    ["Was war der 'Dorfschultheiß'?", "Ein von den Bauern gewählter oder vom Herrn bestimmter Dorfvorsteher", ["Der Dorflehrer", "Der Dorfarzt", "Der Dorfclown"]],
    ["Welche Aufgabe hatten die Frauen im bäuerlichen Haushalt?", "Gartenarbeit, Spinnen, Weben und Kindererziehung", ["Nur das Regieren des Landes", "Das Schreiben von Büchern", "Nichts, sie ruhten sich aus"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie nennt man das System aus Winter-, Sommergetreide und Brache?", "Dreifelderwirtschaft"],
    ["Wie heißt ein Feld, das ein Jahr lang nicht bepflanzt wird?", "Brache"],
    ["Welches Getreide wurde meist im Winter gesät?", "Roggen"],
    ["Welche Erfindung verbesserte die Nutzung von Pferden als Zugtiere?", "Kummet"],
    ["Mit welchem Werkzeug wurde Getreide gemäht?", ["Sichel", "Sense"]],
    ["Wie nennt man das Trennen von Korn und Spreu durch Schlagen?", "Dreschen"],
    ["Was war das Hauptnahrungsmittel der Bauern?", "Getreidebrei"],
    ["Wie nennt man den schweren Pflug mit Rädern?", "Beetpflug"],
    ["Welche Arbeit stand im Herbst im Vordergrund?", "Ernte"],
    ["Wo lebten Mensch und Vieh meist gemeinsam?", "Wohnstallhaus"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 10. KLÖSTER - ORA ET LABORA (REGEN, TAGESABLAUF) ─────────────────────────

function generateKloesterOraEtLabora(seed: number = 110): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "kloester_ora_et_labora";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was bedeutet der lateinische Wahlspruch 'Ora et labora'?", "Bete und arbeite", ["Lerne und lehre", "Kämpfe und siege", "Iss und trink"]],
    ["Wer verfasste die berühmte Klosterregel für das westliche Mönchtum?", "Benedikt von Nursia", ["Karl der Große", "Papst Leo III.", "Martin Luther"]],
    ["Wie nennt man den Vorsteher eines Klosters?", "Abt (oder Äbtissin)", ["König", "Graf", "Meister"]],
    ["Welche drei Gelübde mussten Mönche bei ihrem Eintritt ablegen?", "Armut, Keuschheit und Gehorsam", ["Reichtum, Macht und Ehre", "Mut, Tapferkeit und Stolz", "Lesen, Schreiben und Rechnen"]],
    ["Wie nannte man den gemeinsamen Speisesaal der Mönche?", "Refektorium", ["Dormitorium", "Skriptorium", "Laboratorium"]],
    ["Wie hieß der gemeinsame Schlafraum im Kloster?", "Dormitorium", ["Refektorium", "Kapitelsaal", "Kreuzgang"]],
    ["Was ist das 'Skriptorium'?", "Die Schreibstube, in der Bücher kopiert wurden", ["Die Küche", "Der Stall", "Die Waffenkammer"]],
    ["Wie oft am Tag versammelten sich die Mönche zum Gebet (Stundengebet)?", "Sieben bis acht Mal", ["Nur ein Mal", "Gar nicht", "Jede Stunde"]],
    ["Was versteht man unter 'Stabilitas loci'?", "Die Verpflichtung, lebenslang in derselben Klostergemeinschaft zu bleiben", ["Das Recht auf ein eigenes Pferd", "Das Verbot, Fleisch zu essen", "Die Erlaubnis zu heiraten"]],
    ["Wie nannte man den überdachten Rundgang um den Klosterinnenhof?", "Kreuzgang", ["Irrgarten", "Rennbahn", "Marktplatz"]],
    ["Was war die Hauptaufgabe eines Mönchs neben dem Gebet?", "Körperliche oder geistige Arbeit", ["Turniere bestreiten", "Kriege führen", "Steuern eintreiben"]],
    ["Welche Frisur war typisch für Mönche?", "Die Tonsur (geschorener Scheitel)", ["Lange Locken", "Ein Zopf", "Ein Irokese"]],
    ["Wer war im Kloster für die Krankenpflege zuständig?", "Der Infirmarius", ["Der Abt", "Der Koch", "Der Gärtner"]],
    ["Was passierte mit dem Privatbesitz eines Menschen, der ins Kloster eintrat?", "Er wurde abgegeben (Armutsgelübde)", ["Er wurde verdoppelt", "Er wurde im Wald vergraben", "Er blieb im Besitz der Familie"]],
    ["Welche Sprache wurde in den Klöstern für Gebete und Schriften genutzt?", "Latein", ["Deutsch", "Französisch", "Englisch"]],
    ["Warum trugen viele Mönche Kutten in dunklen Farben?", "Als Zeichen der Demut und Buße", ["Weil es damals nur schwarze Farbe gab", "Weil es modern war", "Damit man den Schmutz nicht sah"]],
    ["Wie nennt man jemanden, der sich auf das Leben als Mönch vorbereitet?", "Novize", ["Geselle", "Knappe", "Page"]],
    ["Was war das 'Kapitel' im Kloster?", "Die tägliche Versammlung der Mönche zur Beratung", ["Ein Buchteil", "Ein spezielles Essen", "Ein Werkzeug"]],
    ["Dürfen Mönche im Benediktinerorden Fleisch von vierfüßigen Tieren essen?", "Ursprünglich nur bei Krankheit erlaubt", ["Ja, immer", "Nein, niemals", "Nur an Feiertagen"]],
    ["Was war die 'Klausur'?", "Der Bereich des Klosters, der für Außenstehende gesperrt war", ["Eine schwierige Prüfung", "Ein spezieller Hut", "Der Klostergarten"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie lautet der Wahlspruch der Benediktiner (lateinisch)?", "Ora et labora"],
    ["Wer gründete das Kloster Monte Cassino?", "Benedikt von Nursia"],
    ["Wie nennt man das Oberhaupt eines Klosters?", "Abt"],
    ["Wie heißt der Speisesaal der Mönche?", "Refektorium"],
    ["Wie heißt der Schlafraum der Mönche?", "Dormitorium"],
    ["Wie heißt der Ort, an dem Bücher von Hand geschrieben wurden?", "Skriptorium"],
    ["Wie nennt man die geschorene Stelle auf dem Kopf der Mönche?", "Tonsur"],
    ["Welches Gelübde verlangt den Verzicht auf Eigentum?", "Armut"],
    ["Wie nennt man den überdachten Bogengang im Klosterhof?", "Kreuzgang"],
    ["Wie nennt man einen 'Anfänger' im Kloster?", "Novize"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 11. BEDEUTUNG DER KLÖSTER (BILDUNG, MEDIZIN) ───────────────────────────

function generateBedeutungKloester(seed: number = 111): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "bedeutung_kloester";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Warum waren Klöster im Mittelalter so wichtig für die Bildung?", "Sie unterhielten die einzigen Schulen und Bibliotheken", ["Weil dort das Internet erfunden wurde", "Weil alle Mönche Professoren waren", "Weil es dort keine Prüfungen gab"]],
    ["Was wurde im 'Skriptorium' hauptsächlich gemacht?", "Bücher von Hand kopiert und kunstvoll verziert", ["Essen für die Armen gekocht", "Waffen für Ritter geschmiedet", "Pferde gezüchtet"]],
    ["Welche Sprache war die Gelehrtensprache in den Klöstern?", "Latein", ["Deutsch", "Französisch", "Englisch"]],
    ["Wer war Hildegard von Bingen?", "Eine bedeutende Äbtissin, Gelehrte und Komponistin", ["Die Frau von Karl dem Großen", "Eine berühmte Ritterin", "Die erste Päpstin"]],
    ["Warum waren Klöster für die Medizin im Mittelalter wichtig?", "Sie verfügten über Kräutergärten und Wissen über Heilkunde", ["Sie erfanden das Röntgengerät", "Sie führten moderne Operationen durch", "Sie verkauften magische Tränke"]],
    ["Was bewahrten die Mönche durch das Kopieren alter Schriften?", "Das Wissen der antiken Griechen und Römer", ["Die Geheimnisse der Alchemie", "Den Weg nach Amerika", "Baupläne für Flugzeuge"]],
    ["Wie nennt man die prachtvoll verzierten Anfangsbuchstaben in Handschriften?", "Initialen", ["Titel", "Logos", "Stempel"]],
    ["Welches Material wurde vor der Erfindung des Papiers zum Schreiben genutzt?", "Pergament (aus Tierhäuten)", ["Papyrus", "Plastik", "Baumrinde"]],
    ["Wie nennt man die Kunst der Buchverzierung in Klöstern?", "Buchmalerei (Illumination)", ["Fotografie", "Grafitti", "Drucktechnik"]],
    ["Warum galten Klöster oft als 'Modellbetriebe' der Landwirtschaft?", "Sie führten neue Techniken wie Rodung und Sumpftrockenlegung ein", ["Sie nutzten Traktoren", "Sie bauten nur exotische Früchte an", "Sie arbeiteten gar nicht auf dem Feld"]],
    ["Was war ein 'Hospiz' in einem Kloster?", "Eine Herberge für Reisende und Pilger", ["Ein Lager für Waffen", "Ein Raum für Turniere", "Ein Gefängnis"]],
    ["Was lernten Kinder in den Klosterschulen?", "Lesen, Schreiben, Latein und religiösen Gesang", ["Mathematik und Informatik", "Reiten und Fechten", "Kochen und Backen"]],
    ["Woraus stellten Mönche ihre Medikamente meist her?", "Aus Heilkräutern aus dem Klostergarten", ["Aus chemischen Stoffen", "Aus Edelsteinen", "Aus Meerwasser"]],
    ["Warum schenkten viele Adlige den Klöstern Land und Geld?", "Um für ihr Seelenheil zu sorgen und Gebete zu sichern", ["Um Steuern zu sparen", "Weil sie die Mönche nicht mochten", "Um die Klöster zu schließen"]],
    ["Welches Schreibgerät wurde im Skriptorium meist verwendet?", "Der Federkiel (Gänsefeder)", ["Der Kugelschreiber", "Der Bleistift", "Der Füllfederhalter"]],
    ["Wie nennt man die Reinigung und Wiederbeschreibung eines alten Pergaments?", "Palimpsest", ["Recycling", "Update", "Kopie"]],
    ["Wer war der 'Cellerarius' im Kloster?", "Der Verwalter der Vorräte und Finanzen", ["Der oberste Koch", "Der Gärtner", "Der Bibliothekar"]],
    ["Welche Bedeutung hatten Klöster für die Erschließung neuer Gebiete?", "Mönche rodeten Wälder und machten Land urbar", ["Sie bauten Eisenbahnen", "Sie gründeten Fabriken", "Sie suchten nach Öl"]],
    ["In welchem Bereich außer Religion und Wissenschaft waren Klöster noch führend?", "In der Musik (Gregorianischer Choral)", ["Im Rock 'n' Roll", "Im Jazz", "In der Oper"]],
    ["Was war die 'Klostermedizin'?", "Eine auf Naturbeobachtung und Kräutern basierende Heilkunde", ["Eine moderne Chirurgie", "Eine rein magische Heilung", "Eine Sporttherapie"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["In welcher Schreibstube wurden Bücher kopiert?", "Skriptorium"],
    ["Auf welchem Material aus Tierhaut wurde im Mittelalter geschrieben?", "Pergament"],
    ["Wer war die berühmte Gelehrte aus dem Kloster Bingen?", "Hildegard von Bingen"],
    ["Welche Sprache war die Sprache der Gelehrten im Mittelalter?", "Latein"],
    ["Wie nennt man die medizinische Lehre der Klöster?", "Klostermedizin"],
    ["Wie nennt man die künstlerische Verzierung von Büchern?", "Buchmalerei"],
    ["Wie nennt man die reich verzierten Anfangsbuchstaben?", "Initialen"],
    ["Welche Herberge boten Klöster für Pilger an?", "Hospiz"],
    ["Aus welchem Tier wurden meist Federkiele zum Schreiben gewonnen?", "Gans"],
    ["Was war die wichtigste Quelle für Arzneimittel im Kloster?", "Heilkräuter"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 12. STADTENTSTEHUNG (MÄRKTE, RECHTE, LAGE) ──────────────────────────────

function generateStadtentstehung(seed: number = 112): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "stadtentstehung";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wo entstanden im Mittelalter bevorzugt neue Städte?", "An Flussübergängen, Kreuzungen wichtiger Handelswege oder bei Burgen", ["Mitten in der Wüste", "Nur auf hohen Berggipfeln", "Weit weg von jeglichem Wasser"]],
    ["Was bedeutet der Rechtsgrundsatz 'Stadtluft macht frei'?", "Nach Jahr und Tag Aufenthalt in der Stadt wurden unfreie Bauern frei", ["Dass die Luft in der Stadt besonders sauber war", "Dass man in der Stadt keine Steuern zahlen musste", "Dass man in der Stadt fliegen konnte"]],
    ["Was war eine wichtige Voraussetzung für die Gründung einer Stadt?", "Das Marktrecht (das Recht, Märkte abzuhalten)", ["Ein eigener Flughafen", "Ein Internetanschluss", "Eine eigene Armee"]],
    ["Wer verlieh im Mittelalter meist das Stadtrecht?", "Der Stadtherr (König, Bischof oder Herzog)", ["Das Volk durch Wahl", "Die Bauern vom Land", "Der Papst allein"]],
    ["Wie nennt man die befestigte Anlage, die eine Stadt vor Angriffen schützte?", "Stadtmauer", ["Gartenzaun", "Hecke", "Glaswand"]],
    ["Was war das wirtschaftliche Zentrum jeder mittelalterlichen Stadt?", "Der Marktplatz", ["Das Rathaus", "Die Kirche", "Das Gefängnis"]],
    ["Wie lange musste ein geflohener Bauer in der Stadt leben, um seine Freiheit zu erlangen?", "Ein Jahr und einen Tag (366 Tage)", ["Eine Woche", "Zehn Jahre", "Einen Monat"]],
    ["Wer bildete die Oberschicht in den Städten und saß im Rat?", "Patrizier (reiche Kaufleute)", ["Bauern", "Ritter", "Bettler"]],
    ["Was war das 'Stapelrecht'?", "Die Pflicht für durchreisende Händler, ihre Waren für einige Tage in der Stadt zum Verkauf anzubieten", ["Das Recht, Holz zu stapeln", "Ein Gesetz gegen zu hohe Häuser", "Das Recht, Steine zu sammeln"]],
    ["Wie nennt man die Selbstverwaltung einer Stadt?", "Autonomie", ["Diktatur", "Anarchie", "Monarchie"]],
    ["Welches Gebäude war der Sitz des Stadtrates und das Symbol bürgerlicher Freiheit?", "Das Rathaus", ["Der Dom", "Die Burg", "Die Stadtmühle"]],
    ["Wer galt als 'Bürger' einer Stadt?", "Bewohner mit vollen Rechten, meist Hausbesitzer, die einen Bürgereid leisteten", ["Jeder, der in der Stadt herumlief", "Nur die Soldaten", "Nur die Geistlichen"]],
    ["Warum zogen viele Menschen vom Land in die Städte?", "Wegen der Hoffnung auf Freiheit und bessere Verdienstmöglichkeiten", ["Weil es in der Stadt mehr Bäume gab", "Um den Ritterturnieren zu entkommen", "Weil sie dort kostenlos wohnen konnten"]],
    ["Was ist eine 'Gründungsstadt'?", "Eine planmäßig durch einen Stadtherrn angelegte Stadt", ["Eine Stadt, die im Wasser versunken ist", "Eine Stadt ohne Mauern", "Eine Stadt nur für Kinder"]],
    ["Welche Rolle spielten Flüsse für die Stadtentstehung?", "Wichtige Transportwege für den Handel", ["Nur zum Wäschewaschen", "Als Hindernis für Feinde (ohne Brücken)", "Gar keine"]],
    ["Was war der 'Bürgermeister'?", "Der Vorsitzende des Stadtrates", ["Der reichste Bauer", "Der Koch des Königs", "Der oberste Mönch"]],
    ["Hatten alle Bewohner einer Stadt das Bürgerrecht?", "Nein, Tagelöhner, Gesinde und oft auch Frauen hatten keine vollen Bürgerrechte", ["Ja, jeder Mensch", "Nur der Stadtherr", "Nur Kinder"]],
    ["Wie nannte man die Ansiedlungen von Kaufleuten vor einer Burg, aus denen oft Städte wurden?", "Suburbium (Vorburgsiedlung)", ["Gartenstadt", "Industriegebiet", "Parkplatz"]],
    ["Was passierte mit einer Stadt, wenn sie das 'Münzrecht' erhielt?", "Sie durfte eigenes Geld prägen", ["Sie durfte kein Geld mehr benutzen", "Sie musste alle Münzen abgeben", "Sie durfte nur mit Gold bezahlen"]],
    ["Was war die 'Zollfreiheit'?", "Das Privileg, für Waren keinen Zoll bezahlen zu müssen", ["Dass man keinen Pass brauchte", "Dass man alles geschenkt bekam", "Dass man im Gefängnis wohnte"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie lautet der berühmte Satz zur Freiheit in der Stadt?", "Stadtluft macht frei"],
    ["Wie nennt man das Recht, Waren auf einem Markt zu verkaufen?", "Marktrecht"],
    ["Wie nennt man das Oberhaupt des Stadtrates?", "Bürgermeister"],
    ["Wie nennt man die ratsfähige Oberschicht in der Stadt?", "Patrizier"],
    ["Wie lange (Frist) musste man in der Stadt leben, um frei zu werden?", "Jahr und Tag"],
    ["Welches Bauwerk schützte die Stadt nach außen?", "Stadtmauer"],
    ["Wie nennt man das Gebäude der Stadtverwaltung?", "Rathaus"],
    ["Wie nennt man jemanden, der das volle Stadtrecht besitzt?", "Bürger"],
    ["Wie nennt man das Recht, von Händlern Abgaben für Waren zu verlangen?", "Zollrecht"],
    ["Wo war das wirtschaftliche Zentrum der Stadt?", "Marktplatz"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 13. ZÜNFTE (HANDWERK, ZUNFTZWANG) ───────────────────────────────────────

function generateZuenfte(seed: number = 113): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "zuenfte";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was war eine Zunft im Mittelalter?", "Ein Zusammenschluss von Handwerkern desselben Berufs", ["Ein Verein von Rittern", "Eine Gruppe von Bauern", "Ein Klosterorden"]],
    ["Was versteht man unter dem 'Zunftzwang'?", "Dass man Mitglied der Zunft sein musste, um den Beruf auszuüben", ["Dass man gezwungen wurde, Handwerker zu werden", "Dass man in der Zunft wohnen musste", "Dass man nur für die Zunft beten durfte"]],
    ["Wer stand an der Spitze einer Zunft?", "Der Zunftmeister", ["Der Bürgermeister", "Der Bischof", "Der König"]],
    ["Wie nennt man die drei Stufen der Handwerksausbildung?", "Lehrling, Geselle, Meister", ["Page, Knappe, Ritter", "Schüler, Student, Doktor", "Anfänger, Fortgeschrittener, Profi"]],
    ["Was musste ein Geselle anfertigen, um Meister zu werden?", "Das Meisterstück", ["Ein Gedicht", "Eine Burg", "Ein Diplom"]],
    ["Was war eine Hauptaufgabe der Zunft?", "Festlegung von Preisen, Löhnen und Qualitätskontrolle", ["Organisation von Ritterturnieren", "Bau von Kathedralen", "Wahl des Kaisers"]],
    ["Wie nannte man die Zeit, in der Gesellen auf Wanderschaft gingen?", "Die Walz (Wanderjahre)", ["Der Urlaub", "Die Kreuzfahrt", "Die Flucht"]],
    ["Wer war von der Mitgliedschaft in einer Zunft meist ausgeschlossen?", "Menschen aus 'unehrlichen' Berufen (z.B. Henker, Abdecker)", ["Adlige", "Geistliche", "Reiche Kaufleute"]],
    ["Was war die 'Zunftlade'?", "Eine Truhe für Geld, Urkunden und das Zunftsiegel", ["Ein Bett für den Lehrling", "Ein Werkzeugkasten", "Ein Verkaufsstand"]],
    ["Warum gab es innerhalb einer Zunft kaum Konkurrenz?", "Weil die Zunft Mengen und Preise für alle festlegte", ["Weil alle befreundet waren", "Weil es zu wenig Kunden gab", "Weil Konkurrenz verboten war durch den Papst"]],
    ["Was passierte, wenn ein Handwerker schlechte Qualität lieferte?", "Er wurde von der Zunft bestraft (z.B. durch Bußgelder)", ["Er wurde sofort zum Ritter geschlagen", "Nichts, Qualität war egal", "Er bekam eine Belohnung"]],
    ["Welches Symbol hing oft über dem Eingang einer Werkstatt?", "Das Zunftwappen oder ein Handwerkszeichen", ["Ein Bild des Kaisers", "Eine Fahne des Papstes", "Ein Kreuz"]],
    ["Wie nennt man einen Handwerker, der nicht Mitglied einer Zunft war?", "Störer (Bönhase)", ["Freigeist", "Meister", "Lehrling"]],
    ["Was passierte mit der Werkstatt, wenn ein Zunftmeister starb?", "Die Witwe durfte den Betrieb oft eine Zeit lang weiterführen", ["Die Werkstatt wurde sofort abgerissen", "Die Werkstatt wurde dem König geschenkt", "Die Werkstatt wurde ein Kloster"]],
    ["Wo trafen sich die Zunftmitglieder zu Versammlungen?", "In der Zunftstube oder im Zunfthaus", ["Im Rathaus", "In der Kirche", "Auf dem Marktplatz"]],
    ["Was regelte die 'Zunftordnung'?", "Arbeitszeiten, Materialwahl und Ausbildung", ["Das Wetter", "Die Thronfolge", "Die Höhe der Stadtmauer"]],
    ["Wozu diente die soziale Absicherung der Zünfte?", "Unterstützung von kranken Mitgliedern, Witwen und Waisen", ["Bau von neuen Straßen", "Finanzierung von Kriegen", "Bezahlung des Bürgermeisters"]],
    ["Warum war die Herkunft für einen Lehrling wichtig?", "Er musste von 'ehrlicher' Geburt sein", ["Er musste adlig sein", "Er musste reich sein", "Er musste Latein können"]],
    ["Wie nannte man die feierliche Aufnahme eines Lehrlings in den Gesellenstand?", "Freisprechung", ["Krönung", "Ritterschlag", "Taufe"]],
    ["Hatten Frauen im Mittelalter eigene Zünfte?", "Nur in sehr seltenen Ausnahmefällen (z.B. Seidengarnherstellung)", ["Ja, für fast jeden Beruf", "Nein, niemals", "Nur wenn sie adlig waren"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie nennt man den Zusammenschluss von Handwerkern?", "Zunft"],
    ["Wie heißt die Pflicht, Mitglied einer Zunft zu sein?", "Zunftzwang"],
    ["Wie nennt man die erste Stufe der Ausbildung?", "Lehrling"],
    ["Wie nennt man einen Handwerker nach der Lehre, der auf Wanderschaft geht?", "Geselle"],
    ["Wie heißt der höchste Rang im Handwerk?", "Meister"],
    ["Wie nennt man das Prüfungsstück eines Gesellen?", "Meisterstück"],
    ["Wie nennt man die Wanderjahre der Gesellen?", "Walz"],
    ["Wie nennt man den Anführer einer Zunft?", "Zunftmeister"],
    ["In welcher Truhe wurden Zunftschätze aufbewahrt?", "Zunftlade"],
    ["Was regelte die Qualität und Preise in der Stadt?", "Zunftordnung"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 14. HANSE (HANDEL, FERNANDEL) ───────────────────────────────────────────

function generateHanse(seed: number = 114): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "hanse";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was war die Hanse ursprünglich?", "Ein Zusammenschluss von Kaufleuten und Städten zum Schutz des Handels", ["Eine Vereinigung von Piraten", "Ein religiöser Orden", "Ein Bund von Bauern"]],
    ["Welche Stadt galt als die 'Königin der Hanse'?", "Lübeck", ["Hamburg", "Bremen", "Berlin"]],
    ["Welches Meer war das Hauptgebiet der Hanse?", "Ostsee und Nordsee", ["Mittelmeer", "Schwarzes Meer", "Rotes Meer"]],
    ["Wie nannte man den typischen Schiffstyp der Hanse?", "Kogge", ["Galeere", "Dschunke", "Kanu"]],
    ["Was ist ein 'Kontor'?", "Eine feste Niederlassung der Hanse-Kaufleute im Ausland", ["Ein spezieller Hut", "Ein Gesetzbuch", "Ein Schiffstyp"]],
    ["Wo befand sich eines der vier großen Hauptkontore der Hanse?", "In London (Stalhof)", ["In Paris", "In Rom", "In Madrid"]],
    ["Welches Kontor lag im russischen Nowgorod?", "Der Peterhof", ["Der Stalhof", "Das Tuchhaus", "Die Pfalz"]],
    ["Warum schlossen sich die Städte zur Hanse zusammen?", "Um Handelsprivilegien zu erhalten und sich gegen Piraten zu schützen", ["Um den Kaiser zu stürzen", "Um eine neue Sprache zu erfinden", "Um Ritterturniere zu veranstalten"]],
    ["Wer war der berühmteste Pirat, der die Hanse bekämpfte?", "Klaus Störtebeker", ["Francis Drake", "Blackbeard", "Jack Sparrow"]],
    ["Wie nannte man die Gruppe der Piraten in der Ostsee?", "Vitalienbrüder (Likedeeler)", ["Sonnensegler", "Wüstensöhne", "Waldläufer"]],
    ["Was war der 'Hansetag'?", "Die Versammlung der Vertreter der Hansestädte", ["Ein Feiertag", "Ein spezielles Schiff", "Ein Gesetz gegen Diebstahl"]],
    ["Welche Waren wurden vor allem aus dem Osten (Russland/Baltikum) importiert?", "Pelze, Wachs und Holz", ["Gewürze und Seide", "Gold und Silber", "Wein und Oliven"]],
    ["Was war das Hauptexportgut der Hanse aus dem Westen?", "Tuche (Stoffe) und Wein", ["Reis", "Kartoffeln", "Papier"]],
    ["Was bedeutet der Begriff 'Hanse' ursprünglich?", "Schar oder Gruppe", ["Schiff", "Geld", "Mauer"]],
    ["Welche Sprache war die Verkehrssprache der Hanse?", "Mittelniederdeutsch", ["Latein", "Französisch", "Englisch"]],
    ["Was passierte bei der 'Verhansung'?", "Eine Stadt oder ein Kaufmann wurde aus der Hanse ausgeschlossen", ["Man wurde zum König gewählt", "Man bekam ein neues Schiff", "Man musste eine Goldkrone tragen"]],
    ["Was war der 'Pfundzoll'?", "Eine Abgabe zur Finanzierung von Kriegsschiffen zum Schutz der Handelsflotte", ["Ein Zoll auf jedes Kilo Brot", "Eine Steuer für den Papst", "Ein Gesetz gegen zu schwere Schiffe"]],
    ["Warum verlor die Hanse im 16. Jahrhundert an Bedeutung?", "Wegen der Entdeckung Amerikas und dem Aufstieg von Nationalstaaten", ["Wegen eines großen Vulkanausbruchs", "Weil alle Schiffe sanken", "Weil niemand mehr handeln wollte"]],
    ["Welches Tier ist oft auf hanseatischen Wappen zu sehen?", "Der Adler oder der Löwe", ["Der Elefant", "Das Krokodil", "Der Pinguin"]],
    ["Wie nannte man die hansischen Kaufleute oft wegen ihres Reichtums?", "Pfeffersäcke", ["Goldschlucker", "Seidenhasen", "Zuckerpuppen"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie nennt man den Bund der Kaufleute im Mittelalter?", "Hanse"],
    ["Welcher Schiffstyp war für die Hanse charakteristisch?", "Kogge"],
    ["Welche Stadt war das Zentrum und Hauptort der Hanse?", "Lübeck"],
    ["Wie nannte man die Handelsniederlassungen im Ausland?", "Kontor"],
    ["Wie hieß der berühmte Pirat der Vitalienbrüder?", ["Klaus Störtebeker", "Störtebeker"]],
    ["Wie nannte man die Versammlung der Hansestädte?", "Hansetag"],
    ["Wie hieß das Kontor in London?", "Stalhof"],
    ["In welchem Meer liegt das Kerngebiet der Hanse (außer der Nordsee)?", "Ostsee"],
    ["Welche Sprache sprach man in der Hanse?", "Mittelniederdeutsch"],
    ["Wie nannte man den Ausschluss aus der Hanse?", "Verhansung"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 15. STADTLEBEN (HYGIENE, ALLTAG) ────────────────────────────────────────

function generateStadtleben(seed: number = 115): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "stadtleben";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wie war die Hygiene in einer mittelalterlichen Stadt?", "Schlecht, Abfälle wurden oft auf die Straße geworfen", ["Sehr modern mit Kanalisation", "Es war verboten, Schmutz zu machen", "Alle Menschen badeten täglich im Fluss"]],
    ["Warum war die Stadtmauer für die Bewohner so wichtig?", "Schutz vor Feinden und Kontrolle von Zoll und Waren", ["Um den Wind abzuhalten", "Um die Stadt schöner zu machen", "Als Spielplatz für Kinder"]],
    ["Was war die Aufgabe des Nachtwächters?", "Überwachung der Stadt bei Nacht, Warnung vor Feuer und Dieben", ["Essen an die Armen verteilen", "Die Straßen fegen", "Bücher vorlesen"]],
    ["Warum war Feuer in der mittelalterlichen Stadt besonders gefährlich?", "Holzhäuser, enge Gassen und offenes Licht/Feuer", ["Weil es kein Wasser gab", "Weil die Menschen kein Feuer mochten", "Weil der Papst Feuer verboten hatte"]],
    ["Was war der Markt für die Stadtbewohner?", "Zentrum des Handels und Ort für Neuigkeiten", ["Ein Ort nur für Adlige", "Ein Übungsplatz für Ritter", "Der einzige Ort zum Schlafen"]],
    ["Wer gehörte zur städtischen Unterschicht?", "Tagelöhner, Bettler und Gesinde", ["Patrizier", "Bürgermeister", "Zunftmeister"]],
    ["Was sind 'unehrliche Berufe' im Mittelalter?", "Berufe wie Henker, Abdecker oder Gerber (wegen Geruch/Tätigkeit)", ["Lehrer und Professoren", "Ärzte und Apotheker", "Kaufleute und Banker"]],
    ["Woher bezogen die Stadtbewohner ihr Trinkwasser?", "Aus öffentlichen Brunnen", ["Aus dem Supermarkt", "Nur aus Wein", "Aus dem Regen, der direkt in den Mund fiel"]],
    ["Was passierte bei Diebstahl oder Betrug auf dem Markt oft?", "Der Täter wurde an den Pranger gestellt", ["Er wurde zum König gewählt", "Er bekam ein Geschenk", "Er durfte nie wieder essen"]],
    ["Was ist ein 'Ghetto' im mittelalterlichen Sinne?", "Ein abgeschlossenes Wohnviertel, oft für die jüdische Bevölkerung", ["Ein schöner Park", "Ein Palast des Bürgermeisters", "Ein Marktplatz für Gewürze"]],
    ["Wie sahen die meisten Bürgerhäuser aus?", "Fachwerkhäuser, oft mit vorkragenden Obergeschossen", ["Häuser aus Glas und Stahl", "Nur kleine Zelte", "Große Burgen aus Stein"]],
    ["Warum waren die Obergeschosse der Häuser oft breiter als das Erdgeschoss?", "Platzmangel in den Gassen und Steuern nach Grundfläche", ["Damit es schöner aussah", "Damit man besser aus dem Fenster springen konnte", "Damit die Ritter nicht hochklettern konnten"]],
    ["Welche Rolle spielten die Kirchenglocken im Alltag?", "Zeiteinteilung für Arbeit, Gebet und Warnung bei Gefahr", ["Nur zum Musikhören", "Gar keine Rolle", "Sie dienten als Kochtöpfe"]],
    ["Wer durfte nachts die Stadttore passieren?", "Niemand ohne besondere Erlaubnis (Tore wurden geschlossen)", ["Jeder, der wollte", "Nur die Tiere", "Nur die Kinder"]],
    ["Wie wurden Abfälle meistens entsorgt?", "In offene Rinnen (Ehgräben) in der Mitte der Straße", ["In moderne Mülltonnen", "Durch Verbrennen im Garten", "Gar nicht, es gab keinen Müll"]],
    ["Was war ein 'Spital' im Mittelalter?", "Eine Einrichtung zur Pflege von Kranken, Armen und Pilgern", ["Ein Ort zum Fechten", "Eine Schule für Ritter", "Ein Gefängnis für Könige"]],
    ["Wer saß im Stadtrat und traf wichtige Entscheidungen?", "Die Patrizier (reiche Kaufmannsfamilien)", ["Die Bauern vom Land", "Die Kinder der Stadt", "Nur der Henker"]],
    ["Wie waren die Straßen in der Stadt meist beschaffen?", "Eng, oft ungepflastert und bei Regen schlammig", ["Breite Autobahnen", "Überall mit Teppich ausgelegt", "Aus reinem Gold"]],
    ["Was bedeutete die 'Marktruhe'?", "Besonderer Schutz für Händler während der Marktzeit", ["Dass auf dem Markt nicht gesprochen werden durfte", "Dass alle Händler schlafen mussten", "Dass der Markt geschlossen war"]],
    ["Was war die 'Bürgerwache'?", "Bewohner, die abwechselnd die Stadtmauern bewachten", ["Ein Verein für Frühsport", "Die Köche des Bürgermeisters", "Eine religiöse Gruppe"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie nennt man die schützende Anlage um die Stadt?", "Stadtmauer"],
    ["Wie hieß der Mann, der nachts für Ordnung sorgte?", "Nachtwächter"],
    ["Wo fand der Handel im Zentrum statt?", "Marktplatz"],
    ["Wie nennt man die bauweise der mittelalterlichen Häuser?", "Fachwerk"],
    ["Wo wurden Verbrecher zur Schau gestellt?", "Pranger"],
    ["Wie nennt man die reiche Oberschicht der Stadt?", "Patrizier"],
    ["Woher holten die Menschen ihr Wasser?", "Brunnen"],
    ["Was drohte der Stadt oft wegen mangelnder Hygiene?", "Seuchen"],
    ["Wie nennt man eine soziale Einrichtung für Kranke?", "Spital"],
    ["Was wurde nachts geschlossen, um die Stadt zu schützen?", "Stadttore"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 16. INVESTITURSTREIT (PAPST UND KAISER) ─────────────────────────────────

function generateInvestiturstreit(seed: number = 116): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "investiturstreit";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was war der Kern des Investiturstreits?", "Der Streit darüber, wer Bischöfe in ihr Amt einsetzen darf (Papst oder Kaiser)", ["Ein Streit über die Höhe der Steuern", "Ein Krieg um neues Land in Asien", "Ein Streit über den Bau von Burgen"]],
    ["Wer waren die beiden großen Gegenspieler im Investiturstreit?", "Papst Gregor VII. und König Heinrich IV.", ["Karl der Große und Papst Leo III.", "Friedrich Barbarossa und Heinrich der Löwe", "Chlodwig und der Papst"]],
    ["Was bedeutet der Begriff 'Investitur'?", "Die feierliche Einsetzung eines Bischofs in sein Amt", ["Der Bau eines neuen Klosters", "Die Krönung eines Kaisers", "Die Heirat eines Adligen"]],
    ["Was war das 'Dictatus Papae'?", "Eine Schrift von Gregor VII., die den Vorrang des Papstes über alle weltlichen Herrscher betonte", ["Ein Kochbuch des Papstes", "Ein Friedensvertrag mit den Sachsen", "Ein Gesetz für Bauern"]],
    ["Was ist der 'Kirchenbann'?", "Der Ausschluss einer Person aus der Kirchengemeinschaft", ["Eine Belohnung für gute Taten", "Ein spezielles Gebet", "Ein Glockenläuten"]],
    ["Was passierte 1077 beim 'Gang nach Canossa'?", "Heinrich IV. zog als Büßer zum Papst, um die Lösung des Banns zu erreichen", ["Heinrich IV. eroberte Rom", "Der Papst floh nach Frankreich", "Ein großes Ritterturnier fand statt"]],
    ["Warum war der Bann für Heinrich IV. so gefährlich?", "Die Fürsten drohten, ihn abzusetzen, wenn er nicht vom Bann befreit würde", ["Er durfte kein Fleisch mehr essen", "Er musste seine Krone abgeben", "Er wurde ins Gefängnis geworfen"]],
    ["Wie endete der Investiturstreit offiziell im Jahr 1122?", "Mit dem Wormser Konkordat", ["Mit dem Sieg des Kaisers in Rom", "Mit der Auflösung der Kirche", "Mit der Teilung des Reiches"]],
    ["Was wurde im Wormser Konkordat festgelegt?", "Die Trennung zwischen der geistlichen und weltlichen Einsetzung (Investitur)", ["Dass der Kaiser auch Papst ist", "Dass es keine Bischöfe mehr gibt", "Dass der Papst Steuern an den Kaiser zahlt"]],
    ["Was ist die 'Zweiständerlehre'?", "Die Vorstellung, dass Papst und Kaiser zwei gleichberechtigte Mächte (Schwerter) von Gott sind", ["Dass ein Tisch zwei Beine haben muss", "Dass man zwei Könige braucht", "Dass es zwei Götter gibt"]],
    ["Welcher Begriff beschreibt den Kampf um die Freiheit der Kirche von weltlichem Einfluss?", "Libertas Ecclesiae", ["Pax Romana", "Magna Carta", "Lex Salica"]],
    ["Wie hieß die mächtige Adlige, auf deren Burg in Canossa der Papst Schutz suchte?", "Mathilde von Tuszien", ["Hildegard von Bingen", "Kaiserin Theophanu", "Königin Chlothilde"]],
    ["Welche Symbole wurden bei der geistlichen Investitur eines Bischofs überreicht?", "Ring und Stab", ["Schwert und Schild", "Krone und Zepter", "Hammer und Amboss"]],
    ["Was war das 'Reichskirchensystem'?", "Die Nutzung von Bischöfen als loyale Verwalter durch den Kaiser", ["Ein System zum Bau von Kirchen", "Eine Steuer für Klöster", "Ein Verbund von Bauernkirchen"]],
    ["Was forderte Gregor VII. in Bezug auf das Amt des Papstes?", "Dass der Papst allein Kaiser absetzen kann", ["Dass der Papst heiraten darf", "Dass der Papst ein Ritter sein muss", "Nichts Besonderes"]],
    ["Wie nannte man die Anhänger des Papstes in den späteren Machtkämpfen?", "Guelfen (Welfen)", ["Ghibellinen", "Hussiten", "Templer"]],
    ["Wie nannte man die Anhänger des Kaisers?", "Ghibellinen (Waiblinger)", ["Guelfen", "Mönche", "Sachsen"]],
    ["Was geschah 1076 in Worms vor dem Gang nach Canossa?", "Heinrich IV. erklärte den Papst für abgesetzt", ["Der Papst krönte Heinrich zum Kaiser", "Ein Friedensvertrag wurde unterschrieben", "Die Kirche wurde verbrannt"]],
    ["Wie viele Tage musste Heinrich IV. in Canossa im Schnee ausharren?", "Drei Tage", ["Einen Tag", "Eine Woche", "Einen Monat"]],
    ["Was war eine langfristige Folge des Investiturstreits?", "Die Schwächung der kaiserlichen Macht gegenüber den Fürsten", ["Die totale Macht des Kaisers über die Kirche", "Das Ende des Christentums", "Die Erfindung der Demokratie"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie nennt man den Streit um die Einsetzung von Bischöfen?", "Investiturstreit"],
    ["Wer war der päpstliche Gegenspieler von Heinrich IV.?", ["Gregor VII.", "Papst Gregor VII."]],
    ["Wie nennt man Heinrichs Bußgang nach Italien 1077?", "Gang nach Canossa"],
    ["Wie heißt der Ausschluss aus der Kirche?", "Bann"],
    ["In welcher Stadt wurde der Streit 1122 beigelegt?", "Worms"],
    ["Wie nennt man einen Vertrag zwischen Kirche und Staat?", "Konkordat"],
    ["Welches Symbol für die weltliche Macht wurde dem Bischof übergeben?", "Zepter"],
    ["Welcher Begriff fordert die Freiheit der Kirche?", "Libertas Ecclesiae"],
    ["Wer vermittelte in Canossa (Abt von Cluny)?", "Hugo"],
    ["Welches Symbol (neben dem Stab) erhielt der Bischof bei der Weihe?", "Ring"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 17. BARBAROSSA (FRIEDRICH I., STAUFER) ──────────────────────────────────

function generateBarbarossa(seed: number = 117): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "barbarossa";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wer war Friedrich I. Barbarossa?", "Ein bedeutender Kaiser aus dem Geschlecht der Staufer", ["Ein französischer König", "Ein Papst aus Avignon", "Ein Anführer der Wikinger"]],
    ["Was bedeutet der Beiname 'Barbarossa'?", "Rotbart", ["Eisenfaust", "Löwenherz", "Der Große"]],
    ["Aus welcher Adelsfamilie stammte Friedrich I.?", "Staufer", ["Habsburger", "Karolinger", "Welfen"]],
    ["Wer war Barbarossas größter Rivale im Reich?", "Heinrich der Löwe", ["Karl der Große", "Ludwig der Fromme", "Otto der Große"]],
    ["Was wollte Barbarossa in Italien vor allem erreichen?", "Die Wiederherstellung der kaiserlichen Rechte (Regalien)", ["Den Papst absetzen und selbst Papst werden", "Alle Städte in Italien zerstören", "Italien an Frankreich verkaufen"]],
    ["Was geschah 1176 in der Schlacht von Legnano?", "Barbarossa unterlag dem Lombardenbund der italienischen Städte", ["Barbarossa eroberte ganz Italien", "Der Papst wurde gefangen genommen", "Ein Friedensvertrag wurde ohne Kampf geschlossen"]],
    ["Wie starb Barbarossa im Jahr 1190?", "Er ertrank während des Kreuzzugs im Fluss Saleph (Kleinasien)", ["Er fiel in einer Ritterturnier", "Er starb an Altersschwäche in Aachen", "Er wurde von Heinrich dem Löwen ermordet"]],
    ["Welche Sage rankt sich um Barbarossas Tod?", "Die Kyffhäuser-Sage (er schläft im Berg und wird wiederkehren)", ["Er sei in den Himmel aufgefahren", "Er lebe als Einsiedler im Wald", "Er sei als Geist in Rom gesehen worden"]],
    ["Was ist der 'Friede von Konstanz' (1183)?", "Ein Friedensschluss, in dem Barbarossa den italienischen Städten Freiheiten gewährte", ["Das Ende der Sachsenkriege", "Der Vertrag zur Teilung des Reiches", "Ein Verbot von Klöstern"]],
    ["Welches Symbol war das Wappentier der Staufer?", "Der Löwe (drei Löwen)", ["Der Adler", "Der Drache", "Der Bär"]],
    ["Was passierte 1180 mit Heinrich dem Löwen?", "Barbarossa entzog ihm seine Herzogtümer (Bayern und Sachsen) nach einem Prozess", ["Er wurde zum Kaiser gekrönt", "Er wurde Barbarossas Nachfolger", "Er heiratete Barbarossas Tochter"]],
    ["Warum unternahm Barbarossa insgesamt sechs Italienzüge?", "Um seine Macht gegen die aufstrebenden Städte und den Papst zu sichern", ["Um dort Urlaub zu machen", "Um neue Pferde zu kaufen", "Um die Alpen zu sprengen"]],
    ["Wie hieß der Ort, an dem Barbarossa 1155 zum Kaiser gekrönt wurde?", "Rom", ["Aachen", "Mailand", "Palermo"]],
    ["Was versteht man unter 'Regalien'?", "Hoheitsrechte des Königs (z.B. Zoll, Münzrecht, Marktrecht)", ["Besondere Schuhe des Kaisers", "Geschenke für den Papst", "Die Namen der kaiserlichen Kinder"]],
    ["Wer war Barbarossas Sohn und Nachfolger?", "Heinrich VI.", ["Friedrich II.", "Konrad III.", "Karl IV."]],
    ["In welchem heutigen Land liegt der Fluss Saleph, in dem Barbarossa starb?", "Türkei", ["Italien", "Ägypten", "Griechenland"]],
    ["Welches Kloster war die Hausstiftung und Grablege der frühen Staufer?", "Kloster Lorch", ["Kloster Fulda", "Kloster Reichenau", "Aachener Dom"]],
    ["Was war der 'Landfrieden', den Barbarossa verkündete?", "Ein Verbot von Fehden und privater Gewalt im Reich", ["Ein Gesetz, das allen Bauern Land gab", "Dass man im Wald nicht jagen durfte", "Ein Ende aller Steuern"]],
    ["Wie nennt man die Zeit der Staufer wegen ihrer kulturellen Blüte oft?", "Ritterliche Blütezeit", ["Dunkles Zeitalter", "Industrielle Revolution", "Barockzeit"]],
    ["Welcher bedeutende Reichstag fand 1158 statt, um die kaiserlichen Rechte zu definieren?", "Reichstag von Roncaglia", ["Reichstag von Worms", "Reichstag von Nürnberg", "Reichstag von Augsburg"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie lautet der Beiname von Friedrich I.?", "Barbarossa"],
    ["Zu welchem Herrschergeschlecht gehörte Barbarossa?", "Staufer"],
    ["Wer war sein mächtiger Gegenspieler aus dem Haus der Welfen?", "Heinrich der Löwe"],
    ["In welchem Land unternahm Barbarossa sechs Feldzüge?", "Italien"],
    ["In welchem Fluss ertrank Barbarossa?", "Saleph"],
    ["Wie nennt man die Hoheitsrechte des Kaisers?", "Regalien"],
    ["In welchem Berg soll Barbarossa der Sage nach schlafen?", "Kyffhäuser"],
    ["Welche Stadt war der Ort seiner Kaiserkrönung?", "Rom"],
    ["Gegen welchen Bund von Städten verlor er bei Legnano?", "Lombardenbund"],
    ["Was bedeutet Barbarossa auf Deutsch?", "Rotbart"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 18. GOLDENE BULLE (GRUNDGESETZ DES REICHES) ─────────────────────────────

function generateGoldeneBulle(seed: number = 118): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "goldene_bulle";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was ist die Goldene Bulle von 1356?", "Das wichtigste Grundgesetz des Heiligen Römischen Reiches", ["Ein Friedensvertrag mit Frankreich", "Ein Dokument über die Entdeckung Amerikas", "Ein religiöses Buch"]],
    ["Welcher Kaiser erließ die Goldene Bulle?", "Karl IV.", ["Karl der Große", "Friedrich Barbarossa", "Otto der Große"]],
    ["Was regelte die Goldene Bulle hauptsächlich?", "Die Wahl des deutschen Königs durch die Kurfürsten", ["Die Höhe der Bauernsteuern", "Den Bau von Kathedralen", "Die Ausbildung von Rittern"]],
    ["Wie viele Kurfürsten waren zur Wahl des Königs berechtigt?", "Sieben", ["Drei", "Zehn", "Zwölf"]],
    ["Wer gehörte zu den drei geistlichen Kurfürsten?", "Erzbischöfe von Mainz, Köln und Trier", ["Der Papst und zwei Bischöfe", "Drei Äbte aus Fulda", "Die Bischöfe von Rom, Paris und London"]],
    ["Wer war einer der weltlichen Kurfürsten?", "Der König von Böhmen", ["Der Herzog von Bayern", "Der Graf von Tirol", "Der Fürst von Monaco"]],
    ["Warum heißt das Dokument 'Goldene Bulle'?", "Wegen des goldenen Siegels, das an der Urkunde hängt", ["Weil es auf Gold geschrieben wurde", "Weil es so viel Gold kostete", "Weil es in einer goldenen Truhe lag"]],
    ["Wo sollte die Wahl des Königs laut Goldener Bulle stattfinden?", "Frankfurt am Main", ["Aachen", "Nürnberg", "Regensburg"]],
    ["Welches Prinzip galt bei der Wahl des Königs?", "Das Mehrheitsprinzip", ["Einstimmigkeit aller Fürsten", "Das Losverfahren", "Der Papst entschied allein"]],
    ["Was war ein wichtiges Privileg der Kurfürsten?", "Ihre Territorien durften nicht geteilt werden (Unteilbarkeit)", ["Sie mussten keine Kleidung tragen", "Sie durften den Kaiser einsperren", "Sie bekamen täglich Gold geschenkt"]],
    ["War der Papst laut Goldener Bulle an der Königswahl beteiligt?", "Nein, seine Bestätigung war nicht mehr notwendig", ["Ja, er hatte das letzte Wort", "Ja, er musste die Stimmen zählen", "Nur wenn die Kurfürsten sich nicht einig waren"]],
    ["Wo sollte die Krönung des Königs traditionell stattfinden?", "Aachen", ["Rom", "Prag", "Wien"]],
    ["Wo sollte der erste Reichstag eines neuen Königs stattfinden?", "Nürnberg", ["München", "Berlin", "Hamburg"]],
    ["Was passierte, wenn ein weltlicher Kurfürst starb?", "Sein Land und die Kurwürde gingen ungeteilt an den ältesten Sohn (Primogenitur)", ["Das Volk wählte einen neuen Kurfürsten", "Das Land wurde unter allen Söhnen aufgeteilt", "Der Kaiser behielt das Land"]],
    ["Welcher Kurfürst leitete die Wahl als Erzkanzler für Deutschland?", "Der Erzbischof von Mainz", ["Der König von Böhmen", "Der Pfalzgraf bei Rhein", "Der Markgraf von Brandenburg"]],
    ["Welche weltliche Macht hatte die Position des Erzschatzmeisters?", "Der Pfalzgraf bei Rhein", ["Der Herzog von Sachsen", "Der Markgraf von Brandenburg", "Der König von Böhmen"]],
    ["Wie lange blieb die Goldene Bulle in Kraft?", "Bis zum Ende des Heiligen Römischen Reiches im Jahr 1806", ["Nur 10 Jahre", "Bis zum Tod Karls IV.", "Bis heute"]],
    ["Was wollte Karl IV. mit der Goldenen Bulle vor allem verhindern?", "Doppelwahlen und Thronstreitigkeiten", ["Dass die Bauern reich werden", "Dass der Papst nach Deutschland zieht", "Dass zu viele Burgen gebaut werden"]],
    ["Welche Sprachen sollten die Söhne der Kurfürsten laut Goldener Bulle lernen?", "Deutsch, Latein, Italienisch und Tschechisch", ["Nur Deutsch", "Englisch und Französisch", "Griechisch und Hebräisch"]],
    ["Was bedeutet das Wort 'Bulle' in diesem Zusammenhang?", "Eine Urkunde mit einem runden Metallsiegel", ["Ein männliches Rind", "Ein Polizist", "Ein spezieller Helm"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie heißt das Grundgesetz des Reiches von 1356?", "Goldene Bulle"],
    ["Welcher Kaiser erließ die Goldene Bulle?", "Karl IV."],
    ["Wie viele Kurfürsten durften den König wählen?", "7"],
    ["In welcher Stadt fand die Wahl des Königs statt?", "Frankfurt"],
    ["In welcher Stadt fand der erste Reichstag statt?", "Nürnberg"],
    ["Wie nennt man die Fürsten, die zur Wahl berechtigt waren?", "Kurfürsten"],
    ["Welcher Erzbischof war der Wahlleiter?", "Mainz"],
    ["In welcher Stadt wurde der König traditionell gekrönt?", "Aachen"],
    ["Welches Metall wurde für das Siegel der Bulle verwendet?", "Gold"],
    ["Wie nennt man das Recht, dass Territorien nicht geteilt werden dürfen?", "Unteilbarkeit"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 19. ISLAM ENTSTEHUNG (MOHAMMED, MEKKA, MEDINA, 5 SÄULEN) ───────────────

function generateIslamEntstehung(seed: number = 119): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "islam_entstehung";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["In welcher Stadt wurde der Prophet Mohammed geboren?", "Mekka", ["Medina", "Jerusalem", "Kairo"]],
    ["In welchem Jahr beginnt die islamische Zeitrechnung (Hidschra)?", "622 n. Chr.", ["570 n. Chr.", "632 n. Chr.", "800 n. Chr."]],
    ["Was bedeutet das Wort 'Islam' übersetzt?", "Hingabe an Gott", ["Gotteskrieg", "Heilige Schrift", "Wüstenreise"]],
    ["Wie nennt man die heilige Schrift des Islams?", "Koran", ["Bibel", "Tora", "Veden"]],
    ["Wie viele 'Säulen' bilden das Fundament des islamischen Glaubens?", "Fünf", ["Drei", "Sieben", "Zehn"]],
    ["Was ist die erste Säule des Islams?", "Das Glaubensbekenntnis (Schahada)", ["Das Gebet", "Das Fasten", "Die Pilgerfahrt"]],
    ["In welche Richtung beten Muslime?", "Nach Mekka (zur Kaaba)", ["Nach Osten zur Sonne", "Nach Jerusalem", "Nach Medina"]],
    ["Wie nennt man das Pflichtgebet, das fünfmal am Tag verrichtet wird?", "Salat", ["Zakat", "Haddsch", "Saum"]],
    ["Wie heißt der Fastenmonat im Islam?", "Ramadan", ["Schaban", "Muharram", "Rabi' al-awwal"]],
    ["Was ist die 'Zakat'?", "Die Armensteuer (Abgabe an Bedürftige)", ["Die Pilgerfahrt", "Das Glaubensbekenntnis", "Ein heiliger Krieg"]],
    ["Wie nennt man die Pilgerfahrt nach Mekka?", "Haddsch", ["Hidschra", "Dschihad", "Sunna"]],
    ["Was ist die Kaaba?", "Ein würfelförmiges Gebäude und zentrales Heiligtum in Mekka", ["Ein heiliger Berg", "Ein Gebetsteppich", "Eine Oase"]],
    ["Wie hieß die Flucht Mohammeds von Mekka nach Medina?", "Hidschra", ["Exodus", "Dschihad", "Haddsch"]],
    ["Wie nennt man das Gotteshaus der Muslime?", "Moschee", ["Kirche", "Synagoge", "Tempel"]],
    ["An welchen Gott glauben Muslime?", "Allah (der einzige Gott)", ["An viele Götter", "An die Sonne", "An Naturgeister"]],
    ["In welchem Alter erhielt Mohammed seine erste Offenbarung?", "mit 40 Jahren", ["mit 20 Jahren", "mit 60 Jahren", "mit 12 Jahren"]],
    ["Welcher Erzengel überbrachte Mohammed laut Überlieferung die Botschaft Gottes?", "Gabriel (Dschibril)", ["Michael", "Raphael", "Uriel"]],
    ["Was darf ein Muslim während des Ramadan zwischen Sonnenaufgang und Sonnenuntergang nicht tun?", "Essen, Trinken und Rauchen", ["Sprechen", "Schlafen", "Arbeiten"]],
    ["Wer gilt im Islam als der 'Siegel der Propheten' (der letzte Prophet)?", "Mohammed", ["Abraham", "Moses", "Jesus"]],
    ["Was ist das 'Freitagsgebet'?", "Das gemeinschaftliche Gebet in der Moschee am Freitagmittag", ["Ein Gebet nur für den König", "Ein Gebet im Wald", "Ein Gebet um Mitternacht"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie heißt der Prophet des Islams?", "Mohammed"],
    ["In welcher Stadt steht die Kaaba?", "Mekka"],
    ["Wie nennt man die heilige Schrift der Muslime?", "Koran"],
    ["Wie nennt man das Glaubensbekenntnis (arabischer Begriff)?", "Schahada"],
    ["In welchem Monat fasten Muslime?", "Ramadan"],
    ["Wie nennt man die Armensteuer?", "Zakat"],
    ["Wie nennt man die Auswanderung Mohammeds nach Medina 622?", "Hidschra"],
    ["Wie heißt das Gotteshaus der Muslime?", "Moschee"],
    ["Wie viele Säulen hat der Islam?", "5"],
    ["Wie heißt der einzige Gott im Islam?", "Allah"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 20. ISLAM EXPANSION (BIS SPANIEN, KALIFEN, MAUREN) ─────────────────────

function generateIslamExpansion(seed: number = 120): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "islam_expansion";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wie nennt man die Nachfolger Mohammeds an der Spitze des islamischen Reiches?", "Kalifen", ["Sultane", "Päpste", "Pharaonen"]],
    ["Bis in welches europäische Land dehnte sich das islamische Reich im 8. Jahrhundert aus?", "Spanien", ["Deutschland", "England", "Russland"]],
    ["Wer stoppte den Vormarsch der Muslime im Frankenreich bei der Schlacht von Tours und Poitiers (732)?", "Karl Martell", ["Karl der Große", "Chlodwig", "Pippin"]],
    ["Wie nannte man die Muslime, die die Iberische Halbinsel (Spanien/Portugal) eroberten?", "Mauren", ["Sachsen", "Wikinger", "Hunnen"]],
    ["Was war eine wichtige Hauptstadt des Kalifats in Spanien?", "Cordoba", ["Madrid", "Barcelona", "Aachen"]],
    ["Welches heutige Land im Osten wurde Teil des islamischen Reiches?", "Persien (Iran)", ["China", "Japan", "Australien"]],
    ["Welche bedeutende Stadt eroberten die Muslime 638?", "Jerusalem", ["Rom", "Konstantinopel", "Paris"]],
    ["Wie nennt man die Zeit der ersten vier Nachfolger Mohammeds?", "Zeit der rechtgeleiteten Kalifen", ["Dunkles Zeitalter", "Goldenes Zeitalter Roms", "Zeit der Kreuzzüge"]],
    ["Warum konnten sich die Muslime so schnell ausbreiten?", "Wegen der Schwäche der Nachbarreiche (Byzanz und Persien) und einer hohen Motivation", ["Wegen der Erfindung von Feuerwaffen", "Weil es keine anderen Menschen gab", "Weil alle Könige geflohen waren"]],
    ["Was war das 'Haus der Weisheit' in Bagdad?", "Ein Zentrum für Forschung, Übersetzung und Bildung", ["Ein Palast nur für Gold", "Ein Gefängnis", "Ein Marktplatz für Pferde"]],
    ["Welche wissenschaftliche Disziplin wurde im islamischen Reich besonders gefördert?", "Medizin, Mathematik und Astronomie", ["Informatik", "Raumfahrttechnik", "Automobilbau"]],
    ["Was passierte mit der nicht-islamischen Bevölkerung in den eroberten Gebieten?", "Sie durften oft gegen eine Steuer (Dschizya) ihre Religion behalten", ["Sie wurden alle sofort hingerichtet", "Sie mussten alle in den Wald ziehen", "Sie wurden alle Sklaven"]],
    ["Wie nennt man die islamische Dynastie, die von Damaskus aus regierte?", "Umayyaden", ["Abbasiden", "Osmanen", "Karolinger"]],
    ["Welche Dynastie stürzte die Umayyaden und verlegte die Hauptstadt nach Bagdad?", "Abbasiden", ["Merowinger", "Sachsen", "Welfen"]],
    ["Was war 'Al-Andalus'?", "Der maurische Name für die Iberische Halbinsel", ["Ein Berg in Arabien", "Ein spezielles Schiff", "Ein Name für den Papst"]],
    ["Wie nannte man die prachtvolle Burgstadt in Granada?", "Alhambra", ["Eiffelturm", "Kreml", "Tower von London"]],
    ["Welche Nutzpflanzen brachten die Mauren nach Spanien?", "Reis, Zuckerrohr, Zitronen und Orangen", ["Kartoffeln und Mais", "Bananen und Kakao", "Kaffee und Tee"]],
    ["Welche Ziffern verdanken wir der Vermittlung durch das islamische Reich?", "Arabische Ziffern (einschließlich der Null)", ["Römische Ziffern", "Griechische Buchstaben", "Keine Ziffern"]],
    ["In welchem Jahrhundert erreichten die Muslime Indien?", "im 8. Jahrhundert", ["im 1. Jahrhundert", "im 15. Jahrhundert", "im 20. Jahrhundert"]],
    ["Wie nannte man den Statthalter einer Provinz im islamischen Reich?", "Emir", ["Graf", "Herzog", "Senator"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie nennt man die Nachfolger des Propheten?", "Kalifen"],
    ["In welcher Schlacht wurde der muslimische Vormarsch 732 gestoppt?", ["Tours und Poitiers", "Schlacht von Tours und Poitiers"]],
    ["Wie nannte man die muslimischen Eroberer in Spanien?", "Mauren"],
    ["Wie hieß die Hauptstadt des Abbasiden-Kalifats?", "Bagdad"],
    ["Wie hieß die Hauptstadt des Kalifats in Spanien?", "Cordoba"],
    ["Welcher Franke besiegte die Muslime 732?", "Karl Martell"],
    ["Welche neue Ziffer (die 'Nichts' bedeutet) wurde vermittelt?", "Null"],
    ["Wie hieß das islamische Spanien?", "Al-Andalus"],
    ["Wie heißt der Prachtbau in Granada?", "Alhambra"],
    ["Wie nennt man den Steuerbetrag für Nicht-Muslime?", "Dschizya"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 21. KREUZZÜGE (URBAN II., JERUSALEM, RITTERORDEN) ───────────────────────

function generateKreuzzuege(seed: number = 121): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "kreuzzuege";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Welcher Papst rief 1095 zum Ersten Kreuzzug auf?", "Urban II.", ["Leo III.", "Gregor VII.", "Innozenz III."]],
    ["In welcher Stadt fand die Kirchenversammlung statt, auf der zum Kreuzzug aufgerufen wurde?", "Clermont", ["Rom", "Aachen", "Jerusalem"]],
    ["Was war das Hauptziel der Kreuzzüge?", "Die Eroberung Jerusalems und die Befreiung des Heiligen Grabes", ["Die Entdeckung Amerikas", "Die Bekehrung der Wikinger", "Die Zerstörung Roms"]],
    ["Wie lautete der berühmte Ausruf der Kreuzfahrer beim Aufbruch?", "Deus lo vult (Gott will es)", ["Veni, vidi, vici", "In hoc signo vinces", "Ora et labora"]],
    ["In welchem Jahr eroberten die Kreuzfahrer im Ersten Kreuzzug Jerusalem?", "1099", ["1204", "800", "1453"]],
    ["Wie nennt man die geistlichen Rittergemeinschaften, die während der Kreuzzüge entstanden?", "Ritterorden (z.B. Templer, Johanniter)", ["Zünfte", "Gilden", "Klosterbrüder"]],
    ["Was versprach der Papst denjenigen, die am Kreuzzug teilnahmen?", "Ablass (Vergebung der Sünden)", ["Viel Gold und Silber", "Eine eigene Burg", "Ein langes Leben"]],
    ["Welcher muslimische Herrscher eroberte 1187 Jerusalem zurück?", "Saladin (Salah ad-Din)", ["Mohammed", "Dschingis Khan", "Attila"]],
    ["Wie viele große Kreuzzüge gab es insgesamt ungefähr?", "Sieben bis acht", ["Nur einen", "Über hundert", "Genau drei"]],
    ["Welcher berühmte englische König nahm am Dritten Kreuzzug teil?", "Richard Löwenherz", ["William der Eroberer", "Heinrich VIII.", "König Artus"]],
    ["Was passierte im Vierten Kreuzzug (1204)?", "Die Kreuzfahrer plünderten die christliche Stadt Konstantinopel", ["Jerusalem wurde für immer befreit", "Der Papst wurde gefangen genommen", "Alle Schiffe sanken im Meer"]],
    ["Welches Volk bedrohte das Byzantinische Reich und war ein Anlass für den Kreuzzugruf?", "Seldschuken (Türken)", ["Römer", "Franken", "Sachsen"]],
    ["Wer bildete das Heer des 'Volkskreuzzugs'?", "Einfache Menschen (Bauern, Arme), die vor dem Ritterheer aufbrachen", ["Nur Könige", "Nur ausgebildete Söldner", "Römische Legionäre"]],
    ["Wie nennt man die Gebiete, die die Kreuzfahrer im Orient gründeten?", "Kreuzfahrerstaaten", ["Bundesländer", "Kolonien", "Kantone"]],
    ["Welches Symbol trugen die Kreuzfahrer auf ihrer Kleidung?", "Ein Kreuz", ["Einen Adler", "Einen Löwen", "Einen Halbmond"]],
    ["Wie war das Verhältnis zwischen Richard Löwenherz und Saladin?", "Sie respektierten sich trotz ihrer Feindschaft gegenseitig", ["Sie waren beste Freunde", "Sie trafen sich nie", "Sie hassten sich abgrundtief"]],
    ["Welcher deutsche Kaiser nahm am Dritten Kreuzzug teil und starb unterwegs?", "Friedrich I. Barbarossa", ["Karl der Große", "Otto der Große", "Heinrich IV."]],
    ["Was war der 'Kinderkreuzzug' (1212)?", "Ein tragischer Versuch von Kindern und Jugendlichen, das Heilige Land zu erreichen", ["Ein erfolgreicher Feldzug", "Ein Schulturnier", "Ein religiöses Fest"]],
    ["In welcher Stadt im heutigen Israel fiel 1291 die letzte Festung der Kreuzfahrer?", "Akkon", ["Jerusalem", "Bethlehem", "Nazareth"]],
    ["Was war ein religiöser Grund für die Kreuzzüge?", "Der Schutz der christlichen Pilger im Heiligen Land", ["Die Suche nach dem heiligen Gral", "Der Bau neuer Kirchen in Rom", "Die Krönung des Papstes"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Welcher Papst rief zum ersten Kreuzzug auf?", "Urban II."],
    ["Welche Stadt war das Hauptziel der Kreuzzüge?", "Jerusalem"],
    ["Wie hieß der muslimische Gegenspieler von Richard Löwenherz?", "Saladin"],
    ["Wie nennt man die bewaffneten Mönche (z.B. Templer)?", "Ritterorden"],
    ["In welchem Jahr wurde Jerusalem im ersten Kreuzzug erobert?", "1099"],
    ["Welcher englische König kämpfte im dritten Kreuzzug?", "Richard Löwenherz"],
    ["Wie hieß der deutsche Kaiser, der auf dem Kreuzzug ertrank?", "Barbarossa"],
    ["Welche christliche Stadt wurde 1204 geplündert?", "Konstantinopel"],
    ["Welche letzte Festung fiel 1291?", "Akkon"],
    ["Welches Zeichen trugen die Kämpfer auf ihrer Kleidung?", "Kreuz"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 22. FOLGEN DER KREUZZÜGE (WISSEN, WAREN, HANDEL) ───────────────────────

function generateFolgenKreuzzuege(seed: number = 122): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "folgen_kreuzzuege";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Welche neuen Waren kamen durch die Kreuzzüge verstärkt nach Europa?", "Gewürze, Seide, Baumwolle und Zucker", ["Kartoffeln und Mais", "Computer und Handys", "Eisenerz und Kohle"]],
    ["Welche italienischen Städte profitierten besonders stark vom Handel während der Kreuzzüge?", "Venedig, Genua und Pisa", ["Rom und Neapel", "Mailand und Turin", "Berlin und Paris"]],
    ["Welches Wissen wurde durch den Kontakt mit der islamischen Welt nach Europa gebracht?", "Medizinisches Wissen, Mathematik (Ziffern) und Astronomie", ["Wissen über den Bau von Raketen", "Die Erfindung des Buchdrucks", "Das Geheimnis der Atombombe"]],
    ["Wie veränderte sich die Geldwirtschaft durch die Kreuzzüge?", "Der Geldhandel und das Bankwesen nahmen zu", ["Geld wurde abgeschafft", "Man tauschte nur noch Muscheln", "Der König verbot alles Geld"]],
    ["Welches Instrument wurde durch den Kontakt mit dem Orient in Europa bekannt?", "Die Laute", ["Das E-Piano", "Das Saxophon", "Die elektrische Gitarre"]],
    ["Welches Material zur Papierherstellung wurde durch die Araber vermittelt?", "Lumpen (Hadern) zur Herstellung von Papier", ["Plastik", "Glas", "Metall"]],
    ["Was lernten die Europäer über die Hygiene im Orient?", "Die Nutzung von Seife und öffentlichen Bädern", ["Dass man sich nie waschen sollte", "Die Erfindung der Zahnbürste", "Nichts Neues"]],
    ["Wie beeinflussten die Kreuzzüge die Macht der italienischen Seestädte?", "Sie wurden zu den führenden Handelsmächten im Mittelmeer", ["Sie verloren alle ihre Schiffe", "Sie wurden Teil des Frankenreichs", "Sie wurden alle Klöster"]],
    ["Welche astronomischen Geräte gelangten nach Europa?", "Das Astrolabium und der Kompass", ["Das Fernrohr", "Das Mikroskop", "Der Geigerzähler"]],
    ["Was passierte mit dem Wissen der antiken Griechen, das im Orient bewahrt worden war?", "Es gelangte durch Übersetzungen zurück nach Europa", ["Es wurde für immer vergessen", "Es wurde verbrannt", "Es wurde nach Amerika geschickt"]],
    ["Welche neue Form der Kreditwirtschaft entwickelten die Ritterorden?", "Das Überweisen von Geld durch Wechselbriefe", ["Das Vergraben von Schätzen", "Das Tauschen von Land gegen Gold", "Gar keine"]],
    ["Was war eine negative Folge der Kreuzzüge für das Verhältnis der Religionen?", "Zunehmende Feindseligkeit und Misstrauen zwischen Christen, Muslimen und Juden", ["Dass alle die gleiche Sprache sprachen", "Dass es keine Kriege mehr gab", "Dass alle Menschen reich wurden"]],
    ["Welche neuen Obstsorten lernten die Europäer kennen?", "Aprikosen, Pfirsiche und Melonen", ["Äpfel und Birnen", "Bananen und Ananas", "Erdbeeren und Kirschen"]],
    ["Wie veränderte sich der Kleidungsstil durch die Kreuzzüge?", "Man nutzte feinere Stoffe wie Samt und Seide", ["Man trug nur noch Tierhäute", "Man trug keine Kleidung mehr", "Man trug nur noch Eisenrüstungen"]],
    ["Welches Handwerk wurde durch den Orient beeinflusst?", "Die Glasherstellung und Teppichknüpferei", ["Der Autobau", "Die Herstellung von Plastik", "Der Bau von Windrädern"]],
    ["Was passierte mit der Macht des Papstes durch die Kreuzzüge zunächst?", "Seine Macht und sein Einfluss nahmen stark zu", ["Er verlor alle Macht sofort", "Er wurde zum Kaiser ernannt", "Nichts änderte sich"]],
    ["Warum war der Zucker aus dem Orient so begehrt?", "Er war ein seltenes und teures Luxusgut (Süßungsmittel)", ["Weil er gesund für die Zähne war", "Weil er als Medizin gegen alles half", "Weil er leuchtete"]],
    ["Was war die 'Levante' im Zusammenhang mit dem Handel?", "Die Gebiete am östlichen Mittelmeer", ["Ein spezielles Schiff", "Eine Art Wind", "Ein Gesetz gegen Steuern"]],
    ["Wie beeinflussten die Kreuzzüge die ritterliche Kultur?", "Sie übernahmen orientalische Bräuche und ritterliche Ideale wurden verfeinert", ["Ritter wurden abgeschafft", "Ritter durften keine Waffen mehr tragen", "Nichts änderte sich"]],
    ["Welcher Begriff beschreibt den Austausch von Kulturen durch Kontakt?", "Kulturtransfer", ["Kulturkampf", "Kulturstopp", "Kulturabbruch"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Nenne ein Gewürz, das durch die Kreuzzüge beliebt wurde.", ["Pfeffer", "Zimt", "Muskat"]],
    ["Welcher edle Stoff wurde aus dem Orient importiert?", "Seide"],
    ["Wie heißt das Süßungsmittel aus dem Orient?", "Zucker"],
    ["Welche italienische Stadt war führend im Orienthandel?", "Venedig"],
    ["Welches mathematische System (Ziffern) wurde vermittelt?", "Arabische Ziffern"],
    ["Wie nennt man das astronomische Gerät zur Ortsbestimmung?", "Astrolabium"],
    ["Welches Hygienemittel lernten die Europäer kennen?", "Seife"],
    ["Aus welchem Material stellten die Araber Papier her?", ["Lumpen", "Hadern"]],
    ["Wie nennt man den Austausch von Wissen zwischen Kulturen?", "Kulturtransfer"],
    ["Wie heißt das Saiteninstrument, das aus dem Orient kam?", "Laute"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 23. KULTURKONTAKT (TOLERANZ UND KONFLIKT) ──────────────────────────────

function generateKulturkontakt(seed: number = 123): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "kulturkontakt";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["In welchem Gebiet lebten Christen, Muslime und Juden im Mittelalter lange Zeit friedlich zusammen?", "In Spanien (Al-Andalus) und Sizilien", ["In Skandinavien", "In England", "In Russland"]],
    ["Was versteht man unter dem Begriff 'Convivencia'?", "Das Zusammenleben verschiedener Religionsgruppen in Spanien", ["Einen religiösen Krieg", "Den Bau von Pyramiden", "Einen speziellen Tanz"]],
    ["Wer war Friedrich II. von Hohenstaufen?", "Ein Kaiser, der als 'Staunen der Welt' galt und sehr offen für andere Kulturen war", ["Ein Papst, der die Kreuzzüge verbot", "Ein Ritter, der nie sprach", "Ein einfacher Bauer"]],
    ["In welcher Sprache wurden viele wissenschaftliche Werke aus dem Arabischen ins Lateinische übersetzt?", "Latein", ["Deutsch", "Französisch", "Englisch"]],
    ["Welche Stadt auf Sizilien war ein Zentrum des kulturellen Austauschs?", "Palermo", ["Rom", "Neapel", "Venedig"]],
    ["Was war die 'Übersetzerschule von Toledo'?", "Ein Zentrum, in dem arabische, jüdische und christliche Gelehrte zusammenarbeiteten", ["Eine Schule für Soldaten", "Ein Ort zum Bau von Schiffen", "Ein Gefängnis"]],
    ["Welcher jüdische Gelehrte war Leibarzt von Saladin und ein bedeutender Philosoph?", "Maimonides", ["Aristoteles", "Platon", "Sokrates"]],
    ["Was war ein Hauptgrund für Konflikte zwischen den Religionen?", "Religiöser Eifer und der Anspruch auf die alleinige Wahrheit", ["Streit um das beste Essen", "Unterschiedliche Kleidung", "Das Wetter"]],
    ["Was bedeutet der Begriff 'Reconquista'?", "Die christliche Rückeroberung der Iberischen Halbinsel", ["Die Entdeckung von Gold", "Ein Friedensvertrag", "Die Erfindung des Rades"]],
    ["Welches Volk brachte das Wissen über die Papierherstellung nach Europa?", "Die Araber (vermittelt durch die Chinesen)", ["Die Wikinger", "Die Römer", "Die Sachsen"]],
    ["Wie nannte man Christen, die in maurischen Gebieten lebten und arabische Kultur annahmen?", "Mozaraber", ["Ritter", "Mönche", "Bürger"]],
    ["Was war das Besondere am Hof Friedrichs II. in Sizilien?", "Dort arbeiteten christliche, jüdische und muslimische Gelehrte zusammen", ["Es gab dort nur Soldaten", "Es wurde nur Latein gesprochen", "Niemand durfte dort forschen"]],
    ["Wie beeinflusste die arabische Architektur den europäischen Kirchenbau?", "Durch Elemente wie Spitzbögen und Verzierungen", ["Gar nicht", "Durch den Bau von Hochhäusern", "Durch die Nutzung von Glasfassaden"]],
    ["Was war eine Folge der Reconquista für die Muslime und Juden in Spanien?", "Sie wurden später oft zur Taufe gezwungen oder vertrieben", ["Sie wurden alle Könige", "Sie bekamen alles Land geschenkt", "Sie durften die Regierung übernehmen"]],
    ["Welche wissenschaftliche Methode förderte Friedrich II.?", "Die Beobachtung der Natur und das Experiment", ["Das reine Auswendiglernen alter Texte", "Magie und Zauberei", "Gar keine Forschung"]],
    ["Wie nannte man Muslime, die unter christlicher Herrschaft lebten?", "Mudejaren", ["Mozaraber", "Ritter", "Bauern"]],
    ["Was war ein gemeinsames Ziel von christlichen, jüdischen und muslimischen Gelehrten?", "Die Erforschung der Natur und die Übersetzung antiker Texte", ["Die Zerstörung aller Bücher", "Der Bau einer Mauer um Europa", "Das Finden von Gold"]],
    ["In welchem Bereich war die Zusammenarbeit der Kulturen besonders erfolgreich?", "In der Medizin und Astronomie", ["In der Raumfahrt", "Im Automobilbau", "In der Informatik"]],
    ["Warum gilt Sizilien als 'Schmelztiegel' der Kulturen?", "Weil dort Normannen, Araber, Griechen und Italiener zusammenlebten", ["Weil es dort sehr heiß war", "Weil dort Eisen geschmolzen wurde", "Weil es eine Insel war"]],
    ["Welche Haltung hatte die Kirche meist zum Kontakt mit anderen Religionen?", "Sie war oft misstrauisch und forderte die Bekehrung", ["Sie förderte die Religionsfreiheit für alle", "Sie interessierte sich nicht dafür", "Sie wollte alle Klöster schließen"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie nennt man das Zusammenleben in Spanien?", "Convivencia"],
    ["In welcher spanischen Stadt gab es eine berühmte Übersetzerschule?", "Toledo"],
    ["Welcher Kaiser war besonders offen für die arabische Kultur?", ["Friedrich II.", "Friedrich der Zweite"]],
    ["Wie nennt man die Rückeroberung Spaniens durch die Christen?", "Reconquista"],
    ["Wie hieß der berühmte jüdische Philosoph aus Cordoba?", "Maimonides"],
    ["Auf welcher Insel trafen normannische und arabische Kultur aufeinander?", "Sizilien"],
    ["Wie nennt man Christen unter muslimischer Herrschaft?", "Mozaraber"],
    ["Welche Sprache war die Sprache der Wissenschaft im Orient?", "Arabisch"],
    ["Wie nennt man Muslime unter christlicher Herrschaft?", "Mudejaren"],
    ["Was war die Hauptstadt von Friedrich II. auf Sizilien?", "Palermo"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

// ─── 24. SCHWARZER TOD (PEST 1347-1352) ──────────────────────────────────────

function generateSchwarzerTod(seed: number = 124): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "schwarzer_tod";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["In welchem Zeitraum wütete die große Pestwelle in Europa?", "1347 bis 1352", ["1200 bis 1205", "1500 bis 1510", "1000 bis 1005"]],
    ["Welchen Namen gaben die Menschen der Pest wegen ihrer Auswirkungen?", "Schwarzer Tod", ["Gelber Schrecken", "Roter Fluch", "Weißer Nebel"]],
    ["Wie wurde die Pest im Mittelalter tatsächlich übertragen (was man damals nicht wusste)?", "Durch Flöhe, die auf Ratten lebten", ["Durch schlechte Luft (Miasmen)", "Durch das Ansehen von Kranken", "Durch den Genuss von Fleisch"]],
    ["Über welchen Weg kam die Pest von Asien nach Europa?", "Über Handelswege wie die Seidenstraße und Schiffe aus dem Schwarzen Meer", ["Über den Nordpol", "Durch Zugvögel", "Gar nicht, sie entstand in Paris"]],
    ["In welcher Hafenstadt in Sizilien kam die Pest 1347 zuerst an?", "Messina", ["Rom", "Venedig", "Genua"]],
    ["Wie viel der europäischen Bevölkerung starb schätzungsweise an der Pest?", "Etwa ein Drittel bis die Hälfte", ["Fast niemand", "Alle Menschen", "Nur 5 %"]],
    ["Was dachten viele Menschen im Mittelalter über die Ursache der Pest?", "Dass es eine Strafe Gottes für ihre Sünden sei", ["Dass es an zu viel Sport lag", "Dass es eine Erfindung der Ritter war", "Dass die Sonne schuld war"]],
    ["Wer waren die 'Flagellanten'?", "Menschen, die durch das Land zogen und sich selbst auspeitschten, um Gottes Zorn zu besänftigen", ["Ärzte, die die Pest heilten", "Ritter, die gegen die Pest kämpften", "Bettler aus Italien"]],
    ["Zu welchen grausamen Ereignissen kam es während der Pest gegenüber Minderheiten?", "Zu Judenpogromen (Verfolgungen), weil man sie fälschlich der Brunnenvergiftung beschuldigte", ["Zu großen Festen", "Zu gemeinsamen Gebeten aller Religionen", "Nichts Besonderes"]],
    ["Was war ein typisches Symptom der Beulenpest?", "Schmerzhafte Schwellungen (Beulen) am Hals, in den Achseln oder Leisten", ["Haarausfall", "Dass man plötzlich fliegen konnte", "Blauäugigkeit"]],
    ["Wie versuchten sich die 'Pestärzte' später oft zu schützen?", "Durch lange Mäntel und Masken mit vogelartigen Schnäbeln", ["Durch das Tragen von Rüstungen", "Durch tägliches Tauchen im Meer", "Gar nicht"]],
    ["Welche wirtschaftliche Folge hatte der enorme Bevölkerungsrückgang?", "Arbeitskräftemangel führte zu höheren Löhnen für die Überlebenden", ["Die Preise für Brot sanken auf Null", "Es gab zu viele Arbeiter", "Geld wurde abgeschafft"]],
    ["Was passierte mit vielen Dörfern nach der Pest?", "Sie wurden verlassen und verfielen (Wüstungen)", ["Sie wurden zu großen Städten", "Sie wurden alle vergoldet", "Nichts, sie blieben gleich"]],
    ["Wie reagierte die Kunst auf den allgegenwärtigen Tod?", "Es entstanden Motive wie der 'Totentanz'", ["Man malte nur noch Blumen", "Man hörte auf zu malen", "Es gab nur noch Bilder von Königen"]],
    ["Was bedeutet der Begriff 'Quarantäne'?", "Ein 40-tägiges Isolieren von ankommenden Schiffen (von ital. quaranta = 40)", ["Ein spezielles Medikament", "Ein Ort zum Tanzen", "Ein Gebet der Mönche"]],
    ["In welcher italienischen Stadt wurde die Quarantäne zuerst eingeführt?", "Venedig (oder Ragusa/Dubrovnik)", ["Rom", "Mailand", "Neapel"]],
    ["Welches Bakterium ist der Erreger der Pest?", "Yersinia pestis", ["Escherichia coli", "Salmonellen", "Grippevirus"]],
    ["Was passierte mit der sozialen Ordnung nach der Pest?", "Die feudale Ordnung geriet ins Wanken, da Bauern mehr Rechte fordern konnten", ["Sie wurde strenger als je zuvor", "Der König wurde abgeschafft", "Niemand musste mehr arbeiten"]],
    ["Warum konnte sich die Pest in den Städten besonders schnell ausbreiten?", "Wegen der engen Gassen und mangelnden Hygiene", ["Weil es in den Städten zu viel Wald gab", "Weil die Menschen dort zu viel lasen", "Weil es dort keine Mauern gab"]],
    ["Welche Form der Pest war fast immer tödlich und verbreitete sich durch Tröpfcheninfektion?", "Lungenpest", ["Beulenpest", "Hautpest", "Knochenpest"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Wie nannte man die Pest im Mittelalter?", "Schwarzer Tod"],
    ["Welches Tier übertrug die Flöhe?", "Ratte"],
    ["Wie nennt man die Menschen, die sich zur Buße selbst peitschten?", "Flagellanten"],
    ["Gegen welche Bevölkerungsgruppe gab es während der Pest Pogrome?", "Juden"],
    ["Wie viele Tage dauerte die ursprüngliche Isolierung von Schiffen?", "40"],
    ["Welcher Begriff beschreibt die Isolierung von Kranken?", "Quarantäne"],
    ["Wie nennt man die Schwellungen bei der Pest?", "Beulen"],
    ["Welches Motiv der Kunst zeigt den Tod, der alle Menschen mitnimmt?", "Totentanz"],
    ["Wie nennt man ein verlassen abgegangenes Dorf?", "Wüstung"],
    ["Wie hieß der Erreger der Pest (Nachname des Entdeckers)?", "Yersinia pestis"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));

  return qs;
}

export const G6_Generators_Geschichte: Record<string, (seed?: number) => CurriculumQuestion[]> = {
  frankenreich_chlodwig: (seed?: number) => generateFrankenreichChlodwig(seed),
  karl_der_grosse: (seed?: number) => generateKarlDerGrosse(seed),
  verwaltung_frankenreich: (seed?: number) => generateVerwaltungFrankenreich(seed),
  reichsteilung_verdun: (seed?: number) => generateReichsteilungVerdun(seed),
  staendegesellschaft_lehnswesen: (seed?: number) => generateStaendegesellschaftLehnswesen(seed),
  rittertum: (seed?: number) => generateRittertum(seed),
  burgen: (seed?: number) => generateBurgen(seed),
  grundherrschaft: (seed?: number) => generateGrundherrschaft(seed),
  bauernleben: (seed?: number) => generateBauernleben(seed),
  kloester_ora_et_labora: (seed?: number) => generateKloesterOraEtLabora(seed),
  bedeutung_kloester: (seed?: number) => generateBedeutungKloester(seed),
  stadtentstehung: (seed?: number) => generateStadtentstehung(seed),
  zuenfte: (seed?: number) => generateZuenfte(seed),
  hanse: (seed?: number) => generateHanse(seed),
  stadtleben: (seed?: number) => generateStadtleben(seed),
  investiturstreit: (seed?: number) => generateInvestiturstreit(seed),
  barbarossa: (seed?: number) => generateBarbarossa(seed),
  goldene_bulle: (seed?: number) => generateGoldeneBulle(seed),
  islam_entstehung: (seed?: number) => generateIslamEntstehung(seed),
  islam_expansion: (seed?: number) => generateIslamExpansion(seed),
  kreuzzuege: (seed?: number) => generateKreuzzuege(seed),
  folgen_kreuzzuege: (seed?: number) => generateFolgenKreuzzuege(seed),
  kulturkontakt: (seed?: number) => generateKulturkontakt(seed),
  schwarzer_tod: (seed?: number) => generateSchwarzerTod(seed)
};
