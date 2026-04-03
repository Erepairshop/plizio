// ─── GERMAN GRADE 8 GESCHICHTE GENERATORS ────────────────────────────────────
// Procedural question generators for German Grade 8 History (Modern Era)
// Topic: Imperialismus bis Weimarer Republik
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

// ─── 1. IMPERIALISMUS ───────────────────────────────────────────────────────

function generateImperialismus(seed: number = 801): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "imperialismus";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was war ein Hauptmotiv des Imperialismus?", "Gewinnung von Rohstoffen und Absatzmärkten", ["Schutz der Umwelt", "Weltfrieden", "Abschaffung des Handels", "Bau von Museen"]],
    ["In welchem Zeitraum fand der Höhepunkt des Imperialismus statt?", "1880 bis 1914", ["1500-1600", "1700-1750", "1945-1990", "1492-1520"]],
    ["Welcher Kontinent wurde fast vollständig unter den europäischen Mächten aufgeteilt?", "Afrika", ["Asien", "Australien", "Südamerika", "Antarktis"]],
    ["Was versteht man unter 'Sozialdarwinismus' im Imperialismus?", "Die Übertragung der Lehre vom 'Recht des Stärkeren' auf Völker", ["Gleichheit aller Menschen", "Hilfe für Schwache", "Abschaffung von Klassen"]],
    ["Welche Nation galt als die größte Kolonialmacht der Welt?", "Großbritannien", ["Deutschland", "Italien", "Russland", "Österreich"]],
    ["Was war das Ziel der 'Berliner Afrika-Konferenz' (1884/85)?", "Regelung der Aufteilung Afrikas unter den Mächten", ["Schutz der indigenen Kultur", "Verbot von Kolonien", "Bau einer Eisenbahn nach China"]],
    ["Wie nannte man den deutschen Anspruch auf Weltgeltung unter Wilhelm II.?", "'Platz an der Sonne'", ["'Gott und Vaterland'", "'Brot für die Welt'", "'Eintracht und Recht'"]],
    ["Welche Rolle spielte der Nationalismus für den Imperialismus?", "Er steigerte das Konkurrenzdenken und Überlegenheitsgefühl der Nationen", ["Er verhinderte Kriege", "Er förderte die Zusammenarbeit", "Er war völlig egal"]],
    ["Welches Land eroberte den Kongo als Privatbesitz des Königs?", "Belgien (Leopold II.)", ["Frankreich", "England", "Spanien", "Portugal"]],
    ["Was war die 'Sendungsbewusstsein' Theorie?", "Der Glaube, die 'zivilisierte' Kultur in die Welt tragen zu müssen", ["Die Absicht, alle Briefe per Post zu schicken", "Die Idee, dass alle Menschen reich sein sollten", "Kein Begriff des Imperialismus"]],
    ["Welches technische Mittel erleichterte die Eroberung der Kolonien?", "Das Maschinengewehr und Dampfschiffe", ["Der Buchdruck allein", "Das Internet", "Die Windmühle", "Das Fahrrad"]],
    ["Was passierte mit der Kultur der Kolonisierten?", "Sie wurde oft unterdrückt és durch europäische Werte ersetzt", ["Sie wurde weltweit Vorbild", "Sie wurde unter Naturschutz gestellt", "Nichts geschah"]],
    ["Was war die 'Zweibund' Allianz?", "Ein Bündnis zwischen Deutschland und Österreich-Ungarn", ["Frankreich és Russland", "England und USA", "Italien und Spanien"]],
    ["Welche Krise in Marokko zeigte die Spannungen zwischen den Mächten?", "Die Marokkokrisen (1905 és 1911)", ["Die Weizenkrise", "Die Goldkrise", "Die Ölkrise"]],
    ["Wie nannte man die Gebiete, die wirtschaftlich abhängig, aber formal eigenständig waren?", "Interessensphären / Protektorate", ["Freistaaten", "Demokratien", "Republiken"]],
    ["Welches asiatische Land wurde durch 'Ungleiche Verträge' zur Öffnung gezwungen?", "China", ["Indien", "Japan (teilweise)", "Thailand", "Australien"]],
    ["Wer war Cecil Rhodes?", "Ein britischer Imperialist (Rhodesien)", ["Ein deutscher Maler", "Ein französischer Revolutionär", "Ein russischer Zar"]],
    ["Was war das 'Faschoda-Syndrom'?", "Ein Beinahe-Krieg zwischen England und Frankreich in Afrika 1898", ["Eine Tropenkrankheit", "Ein Modestil", "Ein Musikstück"]],
    ["Was war die Folge des Imperialismus für die heutige Welt?", "Grenzkonflikte und wirtschaftliche Abhängigkeiten in ehemaligen Kolonien", ["Weltweite Einigkeit", "Das Ende aller Grenzen", "Reichtum für alle Afrikaner"]],
    ["Welche deutsche Kolonie lag in Ostafrika?", "Deutsch-Ostafrika (Tansania, Ruanda, Burundi)", ["Kamerun", "Togo", "Namibia", "Samoa"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Hauptkontinent des Imperialismus?", "Afrika"],
    ["Deutscher Slogan: Platz an der ...?", "Sonne"],
    ["Größte Kolonialmacht?", ["England", "Grossbritannien"]],
    ["Konferenz zur Aufteilung Afrikas (Stadt)?", "Berlin"],
    ["Theorie vom Recht des Stärkeren?", "Sozialdarwinismus"],
    ["Wichtigster Rohstoffgrund?", "Rohstoffe"],
    ["Name einer deutschen Kolonie?", ["Kamerun", "Togo", "Deutsch-Südwestafrika"]],
    ["Ziele: Macht und ...?", "Reichtum"],
    ["Kaiser während des Imperialismus?", ["Wilhelm II.", "Wilhelm 2."]],
    ["Jahrhundert des Imperialismus?", "19"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 2. ERSTER WELTKRIEG (AUSBRUCH) ──────────────────────────────────────────

function generateErsterWeltkriegBeginn(seed: number = 802): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "erster_weltkrieg_beginn";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was war der unmittelbare Anlass für den Ersten Weltkrieg?", "Das Attentat von Sarajevo (28. Juni 1914)", ["Die Entdeckung Amerikas", "Der Bau der Mauer", "Die Französische Revolution"]],
    ["Wer wurde in Sarajevo ermordet?", "Erzherzog Franz Ferdinand (Österreich-Ungarn)", ["Kaiser Wilhelm II.", "Zar Nikolaus II.", "König Ludwig", "Bismarck"]],
    ["Wie nannte man das Bündnis aus Deutschland und Österreich-Ungarn?", "Mittelmächte", ["Entente", "Rheinbund", "NATO", "Warschauer Pakt"]],
    ["Welche Mächte bildeten die 'Triple Entente'?", "Großbritannien, Frankreich und Russland", ["Deutschland, Italien, Österreich", "USA, Japan, China", "Spanien, Portugal, Holland"]],
    ["Was war der 'Schlieffen-Plan'?", "Ein deutscher Plan für einen schnellen Sieg gegen Frankreich durch Belgien", ["Ein Plan zur Rettung des Papstes", "Ein Plan für den Bau von Schiffen", "Ein Friedensplan"]],
    ["Warum trat Großbritannien in den Krieg ein?", "Wegen der deutschen Verletzung der belgischen Neutralität", ["Weil es Gold wollte", "Weil der Zar es befahl", "Aus Versehen"]],
    ["Was versteht man unter der 'Julikrise'?", "Die diplomatischen Verwicklungen nach dem Attentat 1914", ["Eine Hitzewelle in Berlin", "Eine Streikwelle der Arbeiter", "Die Gründung der SPD"]],
    ["Welches Land galt als 'Pulverfass Europas'?", "Der Balkan", ["Skandinavien", "Iberische Halbinsel", "Großbritannien", "Italien"]],
    ["Was war die 'Blankovollmacht'?", "Deutschlands uneingeschränkte Unterstützung für Österreich-Ungarn", ["Ein Scheck über eine Million Mark", "Die Erlaubnis zu heiraten", "Ein Friedensangebot"]],
    ["In welchem Jahr begann der Erste Weltkrieg?", "1914", ["1939", "1871", "1918", "1789"]],
    ["Wie war die Stimmung bei Kriegsbeginn in vielen Ländern?", "Begeisterung und Nationalstolz ('August-Erlebnis')", ["Tiefe Trauer überall", "Gleichgültigkeit", "Angst vor Maschinen"]],
    ["Welches Land wechselte 1915 die Seiten von den Mittelmächten zur Entente?", "Italien", ["Spanien", "Bulgarien", "Osmanisches Reich", "USA"]],
    ["Was war das Ziel Serbiens auf dem Balkan?", "Ein großserbisches Reich (Nationalstaat)", ["Die Unterwerfung unter Österreich", "Der Anschluss an Deutschland", "Die Auswanderung"]],
    ["Wer war der deutsche Reichskanzler 1914?", "Theobald von Bethmann Hollweg", ["Otto von Bismarck", "Adolf Hitler", "Konrad Adenauer", "Willy Brandt"]],
    ["Welche Rolle spielte das Osmanische Reich?", "Es kämpfte auf der Seite der Mittelmächte", ["Es blieb neutral", "Es unterstützte England", "Es wurde sofort aufgelöst"]],
    ["Warum scheiterte der Schlieffen-Plan?", "Wegen des Widerstands in Belgien und des schnellen Vorrückens Russlands", ["Weil die Soldaten nicht kämpfen wollten", "Wegen schlechten Wetters allein", "Weil es kein Benzin gab"]],
    ["Wie nannte man den Ersten Weltkrieg während er stattfand?", "Der Große Krieg", ["Der Zweite Weltkrieg", "Der kalte Krieg", "Der 30-jährige Krieg"]],
    ["Was war das 'Bündnissystem' vor 1914?", "Ein kompliziertes Netz aus Beistandsverträgen", ["Ein System zum Handel mit Obst", "Eine religiöse Vereinigung", "Ein Verbot von Waffen"]],
    ["Welcher Staat erklärte als Erster den Krieg?", "Österreich-Ungarn (an Serbien)", ["Deutschland", "Russland", "Frankreich", "England"]],
    ["Was passierte an der Marne 1914?", "Das deutsche Vorrücken wurde gestoppt (Wunder an der Marne)", ["Der Krieg endete", "Napoleon siegte", "Die USA griffen ein"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Stadt des Attentats?", "Sarajevo"],
    ["Start-Jahr des Krieges?", "1914"],
    ["Gegner der Mittelmächte?", "Entente"],
    ["Ermordeter Thronfolger?", ["Franz Ferdinand", "Ferdinand"]],
    ["Deutscher Kriegsplan?", "Schlieffenplan"],
    ["Staat, der Neutralität verlor?", "Belgien"],
    ["Bündnispartner Deutschlands?", ["Oesterreich", "Oesterreich-Ungarn"]],
    ["Krisenmonat 1914?", "Juli"],
    ["Anderer Name für Mittelmächte?", "Zentralmaechte"],
    ["Region 'Pulverfass'?", "Balkan"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 3. ERSTER WELTKRIEG (VERLAUF & ENDE) ────────────────────────────────────

function generateErsterWeltkriegVerlauf(seed: number = 803): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "erster_weltkrieg_verlauf";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was war das Hauptmerkmal des Krieges an der Westfront?", "Stellungskrieg und Grabenkrieg", ["Schneller Bewegungskrieg", "Reiner Seekrieg", "Luftkrieg ohne Landsoldaten"]],
    ["Welche Schlacht gilt als Symbol für das sinnlose Sterben (Materialschlacht)?", "Schlacht um Verdun (1916)", ["Schlacht bei Austerlitz", "Schlacht von Waterloo", "Schlacht am Weißen Berg"]],
    ["Welche neue Waffe wurde im Ersten Weltkrieg erstmals massenhaft eingesetzt?", "Giftgas und Panzer", ["Atombomben", "Armbrust", "Speere", "Laserwaffen"]],
    ["Was geschah 1917 an der Ostfront?", "Russland schied nach der Oktoberrevolution aus dem Krieg aus", ["Russland eroberte Berlin", "Russland wurde eine Demokratie", "Nichts änderte sich"]],
    ["Warum traten die USA 1917 in den Krieg ein?", "Wegen des uneingeschränkten U-Boot-Krieges der Deutschen", ["Weil sie Lust auf Krieg hatten", "Weil England sie angriff", "Weil sie Gold wollten"]],
    ["Was versteht man unter 'Heimatfront'?", "Die Einbeziehung der gesamten Bevölkerung und Wirtschaft in den Krieg", ["Ein Garten vor dem Haus", "Die Verteidigung der eigenen Grenze", "Ein Film über den Krieg"]],
    ["Wann endete der Erste Weltkrieg (Waffenstillstand)?", "11. November 1918", ["8. Mai 1945", "1. September 1939", "24. Dezember 1914", "1. Januar 1920"]],
    ["Welche Folge hatte der Hungerwinter 1916/17 in Deutschland?", "Große Not und sinkende Kriegsmoral ('Steckrübenwinter')", ["Überfluss an Essen", "Ein Sieg an der Front", "Die Erfindung des Kühlschranks"]],
    ["Wer waren die 'Großen Drei' bei den Friedensverhandlungen?", "USA, Großbritannien, Frankreich", ["Deutschland, Österreich, Italien", "Russland, China, Japan", "Spanien, Holland, Schweden"]],
    ["Wie hieß der Friedensvertrag, der Deutschland die alleinige Kriegsschuld gab?", "Friedensvertrag von Versailles", ["Westfälischer Friede", "Wiener Kongress", "Vertrag von Tordesillas"]],
    ["Was passierte mit der deutschen Monarchie 1918?", "Kaiser Wilhelm II. dankte ab és floh ins Exil", ["Er blieb Kaiser mit mehr Macht", "Er wurde hingerichtet", "Er wurde zum Präsidenten gewählt"]],
    ["Was war das 'Niemandsland'?", "Das Gebiet zwischen den feindlichen Schützengräben", ["Ein Land ohne Einwohner", "Ein Park in Paris", "Die Wüste Sahara"]],
    ["Welche Rolle spielten Frauen während des Krieges?", "Sie übernahmen die Arbeit der Männer in Fabriken und Landwirtschaft", ["Sie blieben nur zu Hause", "Sie wurden alle Soldatinnen", "Sie spielten keine Rolle"]],
    ["Was war der 'Friede von Brest-Litowsk'?", "Der Friedensvertrag zwischen Deutschland und Sowjetrussland 1918", ["Das Ende des Krieges im Westen", "Ein Vertrag mit den USA", "Ein Handelsabkommen"]],
    ["Welche Krankheit forderte am Ende des Krieges Millionen Todesopfer?", "Spanische Grippe", ["Pest", "Cholera", "Masern", "Pocken"]],
    ["Wie viele Soldaten starben insgesamt etwa im Ersten Weltkrieg?", "Etwa 9 bis 10 Millionen", ["Über 100 Millionen", "Genau 1000", "Fast niemand", "50 Millionen"]],
    ["Was war die 'Diktatur der OHL'?", "Die faktische Herrschaft der Generäle Hindenburg und Ludendorff", ["Die Macht des Kaisers allein", "Die Herrschaft des Parlaments", "Ein Gesetz der SPD"]],
    ["Welches Land wurde durch den Versailler Vertrag neu gegründet/unabhängig?", "Polen", ["Frankreich", "England", "Spanien", "Italien"]],
    ["Was war der 'Völkerbund'?", "Eine internationale Organisation zur Friedenssicherung (Vorläufer der UNO)", ["Ein Sportverein", "Ein Bündnis für den Krieg", "Eine Handelskammer"]],
    ["Welches Gebiet musste Deutschland nach 1818 an Frankreich zurückgeben?", "Elsass-Lothringen", ["Bayern", "Sachsen", "Schlesien", "Ostpreußen"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Art des Krieges im Westen?", "Grabenkrieg"],
    ["Berühmte Materialschlacht (V...)?", "Verdun"],
    ["Schlimme Waffe (G...)?", "Giftgas"],
    ["Staat, der 1917 beitrat?", "USA"],
    ["Endjahr des Krieges?", "1918"],
    ["Ort des Friedensvertrags?", "Versailles"],
    ["Deutsche Herrschaft (Abkürzung)?", "OHL"],
    ["Krankheit am Ende?", "Spanische Grippe"],
    ["Was bauten Soldaten zum Schutz?", "Schuetzengraben"],
    ["Abgedankter Kaiser?", "Wilhelm II."]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 4. WEIMARER REPUBLIK (ENTSTEHUNG & KRISEN) ──────────────────────────────

function generateWeimarerRepublik(seed: number = 804): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "weimarer_republik";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was war die Weimarer Republik?", "Die erste parlamentarische Demokratie in Deutschland (1919-1933)", ["Ein neues Königreich", "Eine Diktatur Napoleons", "Ein Bundesland von Preußen"]],
    ["In welcher Stadt wurde die neue Verfassung ausgearbeitet?", "Weimar", ["Berlin", "München", "Frankfurt", "Köln"]],
    ["Wer war der erste Reichspräsident der Weimarer Republik?", "Friedrich Ebert (SPD)", ["Paul von Hindenburg", "Adolf Hitler", "Otto von Bismarck", "Wilhelm II."]],
    ["Was war die 'Novemberrevolution' 1918?", "Der Sturz des Kaisers und die Ausrufung der Republik", ["Eine Revolution in Russland", "Ein Aufstand der Bauern 1525", "Der Bau der Mauer"]],
    ["Welches Problem prägte das Jahr 1923 in Deutschland?", "Hyperinflation und der Hitlerputsch", ["Großer Wohlstand", "Der Sieg im Weltkrieg", "Die Entdeckung des Buchdrucks"]],
    ["Was war der 'Hitlerputsch' in München (1923)?", "Ein gescheiterter Versuch der NSDAP, die Macht zu übernehmen", ["Die Wahl Hitlers zum Kanzler", "Ein Friedensangebot an Frankreich", "Ein Streik der Arbeiter"]],
    ["Was besagte die 'Dolchstoßlegende'?", "Dass das deutsche Heer unbesiegt gewesen, aber von Politikern verraten worden sei", ["Dass Ritter mit Dolchen kämpften", "Eine Sage aus dem Mittelalter", "Dass Deutschland den Krieg gewonnen habe"]],
    ["Was waren die 'Goldenen Zwanziger'?", "Eine Zeit der kulturellen Blüte und wirtschaftlichen Erholung (1924-1929)", ["Eine Zeit, in der alle Gold trugen", "Das Ende der Welt", "Ein Jahrzehnt des Krieges"]],
    ["Welcher Außenminister prägte die Aussöhnung mit Frankreich (Verträge von Locarno)?", "Gustav Stresemann", ["Bismarck", "Rathenau", "Hindenburg", "Adenauer"]],
    ["Was war das Hauptproblem der Weimarer Verfassung?", "Zu viel Macht für den Reichspräsidenten (Artikel 48 - Notverordnung)", ["Es gab keine Wahlen", "Der König entschied alles", "Sie war zu kurz"]],
    ["Was geschah am 'Schwarzen Donnerstag' (1929)?", "Der New Yorker Börsenkrach löste die Weltwirtschaftskrise aus", ["Die Sonne verfinsterte sich", "Der Erste Weltkrieg begann", "Napoleon wurde besiegt"]],
    ["Welche Rolle spielten die 'Freikorps' nach 1918?", "Paramilitärische Verbände, die Unruhen gewaltsam niederschlugen", ["Ein Chor für Volkslieder", "Eine Gruppe von Ärzten", "Die Leibgarde des Kaisers"]],
    ["Wer wurde 1925 zum Reichspräsidenten gewählt?", "Paul von Hindenburg", ["Friedrich Ebert", "Philipp Scheidemann", "Rosa Luxemburg", "Karl Liebknecht"]],
    ["Wie endete der Generalstreik beim Kapp-Lüttwitz-Putsch (1920)?", "Er brachte den rechtsextremen Putsch zum Scheitern", ["Er führte zur Diktatur", "Er wurde ignoriert", "Er dauerte 10 Jahre"]],
    ["Was war das Bauhaus?", "Eine berühmte Schule für Architektur und Design in Weimar/Dessau", ["Ein Baumarkt", "Ein Gefängnis", "Die Residenz des Präsidenten"]],
    ["Wie nannte man die Währung nach der Hyperinflation 1923?", "Rentenmark (später Reichsmark)", ["Euro", "Dollar", "Goldgulden", "Bitcoins"]],
    ["Wer waren Rosa Luxemburg und Karl Liebknecht?", "Anführer des Spartakusbundes, 1919 ermordet", ["Berühmte Opernsänger", "Preußische Generäle", "Entdecker"]],
    ["Was war der 'Dawes-Plan'?", "Ein Plan zur Regelung der deutschen Reparationszahlungen", ["Ein Plan zur Eroberung Polens", "Ein Bauplan für Flugzeuge", "Ein Gesetz gegen Streiks"]],
    ["Welche neue Kunstform wurde in den 1920ern sehr populär?", "Kino (Tonfilm) und Jazz", ["Ikonenmalerei", "Ritterspiele", "Höhlenmalerei"]],
    ["Warum gilt Weimar oft als 'Republik ohne Republikaner'?", "Weil viele Beamte, Richter und Militärs die Demokratie ablehnten", ["Weil es keine Einwohner gab", "Weil alle Könige sein wollten", "Weil es keine Parteien gab"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Name der ersten deutschen Demokratie?", "Weimarer Republik"],
    ["Stadt der Verfassung?", "Weimar"],
    ["Erster Präsident?", "Ebert"],
    ["Wirtschaftskrise 1923?", "Inflation"],
    ["Außenminister (Friedensnobelpreis)?", "Stresemann"],
    ["Putschist in München 1923?", "Hitler"],
    ["Legendärer Verrat (D...)?", "Dolchstosslegende"],
    ["Krisenjahr nach 1929?", "Weltwirtschaftskrise"],
    ["Zahl der 'goldenen' Jahre?", "20er"],
    ["Präsident ab 1925?", "Hindenburg"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 13. AUFSTIEG DER NSDAP ──────────────────────────────────────────────────

function generateNSMachtuebernahme(seed: number = 813): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "ns_machtuebernahme";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wann wurde Adolf Hitler zum Reichskanzler ernannt?", "30. Januar 1933", ["9. November 1918", "1. September 1939", "5. März 1933", "1. Mai 1933"]],
    ["Wer ernannte Hitler zum Reichskanzler?", "Paul von Hindenburg", ["Friedrich Ebert", "Ludwig XIV.", "Bismarck", "Stresemann"]],
    ["Was war der Anlass für die Einschränkung der Grundrechte 1933?", "Der Reichstagsbrand", ["Der Bau der Autobahn", "Die Olympiade", "Der Einmarsch in Polen"]],
    ["Mit welchem Gesetz entmachtete Hitler das Parlament?", "Ermächtigungsgesetz", ["Versailler Vertrag", "Grundgesetz", "Lex Salica", "Notverordnung"]],
    ["Wie nannte die NS-Propaganda die Regierungsübernahme?", "'Machtergreifung'", ["'Wahlkampf'", "'Befreiung'", "'Revolution von oben'"]],
    ["Welche Partei wurde als einzige im NS-Staat zugelassen?", "NSDAP", ["SPD", "Zentrum", "KPD", "FDP"]],
    ["Was geschah im 'Röhm-Putsch' 1834?", "Die Ausschaltung der SA-Führung durch die SS", ["Ein Aufstand der Arbeiter", "Die Wahl des Kaisers", "Die Gründung der Hitlerjugend"]],
    ["Welchen Titel nahm Hitler nach Hindenburgs Tod an?", "Führer und Reichskanzler", ["König von Deutschland", "Präsident auf Lebenszeit", "Kaiser", "Zar"]],
    ["Was war die 'Gleichschaltung'?", "Die Unterordnung aller Organisationen unter die NS-Ideologie", ["Der Bau von Stromleitungen", "Die Einführung der Rentenversicherung", "Die Wahl neuer Parteien"]],
    ["Wo fand der jährliche Reichsparteitag der NSDAP statt?", "Nürnberg", ["Berlin", "München", "Hamburg", "Köln"]],
    ["Wie hieß das erste Konzentrationslager (1933)?", "Dachau", ["Auschwitz", "Buchenwald", "Sachsenhausen", "Treblinka"]],
    ["Welches Ministerium leitete Joseph Goebbels?", "Ministerium für Volksaufklärung und Propaganda", ["Wirtschaftsministerium", "Kriegsministerium", "Bildungsministerium"]],
    ["Wie hoch war die Arbeitslosigkeit bei Hitlers Amtsantritt?", "Über 6 Millionen", ["Fast null", "Eine Million", "10 Millionen", "500.000"]],
    ["Was versprach Hitler dem Volk vor allem?", "Arbeit und Brot (Ende der Arbeitslosigkeit)", ["Freie Wahlen", "Weltfrieden", "Höhere Steuern"]],
    ["Wer leistete als Einzige im Reichstag Widerstand gegen das Ermächtigungsgesetz?", "Die SPD", ["Die KPD (war schon verboten)", "Das Zentrum", "Die NSDAP"]],
    ["Was passierte mit Gewerkschaften 1933?", "Sie wurden zerschlagen und durch die DAF ersetzt", ["Sie wurden gestärkt", "Nichts änderte sich", "Sie wurden verboten"]],
    ["Was war die DAF?", "Deutsche Arbeitsfront", ["Deutscher Alpenverein", "Die Armee Frankreichs", "Ein Automobilklub"]],
    ["Wie sicherte sich die NSDAP die Mehrheit bei der Wahl im März 1933?", "Durch Terror gegen politische Gegner", ["Durch völlig freie Debatten", "Gar nicht, sie verlor", "Durch Bestechung mit Gold"]],
    ["Welche Rolle spielte die SA (Sturmabteilung)?", "Als Schlägertrupp der Partei für den Straßenterror", ["Als Elite-Polizei", "Als Chor für Volkslieder", "Als Hilfsorganisation"]],
    ["Wann endete die Weimarer Republik faktisch?", "Mit dem Ermächtigungsgesetz im März 1933", ["1918", "1945", "1929", "1939"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Jahr der Machtübernahme?", "1933"],
    ["Wer ernannte Hitler?", "Hindenburg"],
    ["Name des Brandes 1933?", "Reichstagsbrand"],
    ["Gesetz zur Entmachtung (E...)?", "Ermaechtigungsgesetz"],
    ["Propagandaminister?", "Goebbels"],
    ["Einzige erlaubte Partei?", "NSDAP"],
    ["Vorname Hitlers?", "Adolf"],
    ["Erstes KZ?", "Dachau"],
    ["Begriff der Unterordnung?", "Gleichschaltung"],
    ["Kampfbund der NSDAP (Abk.)?", "SA"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 14. NS IDEOLOGIE ────────────────────────────────────────────────────────

function generateNSIdeologie(seed: number = 814): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "ns_ideologie";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was war der Kern der NS-Ideologie?", "Rassismus und Antisemitismus", ["Demokratie", "Gleichheit", "Religionsfreiheit", "Pazifismus"]],
    ["Wie nannte die NS-Ideologie die angebliche 'Herrenrasse'?", "Arier", ["Römer", "Slawen", "Germanen (im engeren Sinne)", "Franzosen"]],
    ["Welches Ziel verfolgte Hitler im Osten?", "Gewinnung von 'Lebensraum'", ["Handelspartnerschaft", "Friedenspakt", "Schutz der Natur"]],
    ["Was bedeutet der Begriff 'Antisemitismus'?", "Hass und Feindschaft gegen Juden", ["Hass gegen Christen", "Hass gegen Moslems", "Hass gegen alle"]],
    ["Wie hieß Hitlers programmatisches Buch?", "'Mein Kampf'", ["'Das Kapital'", "'Die Bibel'", "'Der Staat bin ich'", "'Utopia'"]],
    ["Was versteht man unter 'Volksgemeinschaft'?", "Zusammenschluss aller 'Arier' unter Ausschluss 'Minderwertiger'", ["Gleichheit aller Erdenbürger", "Ein Sportverein", "Die Kirche"]],
    ["Was besagte das 'Führerprinzip'?", "Befehl von oben nach unten, Gehorsam von unten nach oben", ["Wahlen bestimmen alles", "Jeder darf entscheiden", "Der Papst ist Chef"]],
    ["Was war das Ziel der 'Eugenik' (Euthanasie) im NS?", "Vernichtung 'lebensunwerten' Lebens (Behinderte/Kranke)", ["Förderung der Medizin für alle", "Schutz alter Menschen", "Erfindung des Impfens"]],
    ["Gegen welche Gruppen richtete sich der NS-Hass?", "Juden, Sinti/Roma, Homosexuelle, Zeugen Jehovas", ["Nur gegen Ausländer", "Nur gegen Reiche", "Nur gegen Soldaten"]],
    ["Was war der 'Sozialdarwinismus' im NS?", "Die falsche Übertragung der Tierwelt-Auslese auf Menschenrassen", ["Eine Form der Rentenversicherung", "Eine neue Kunstform", "Die Lehre von Einstein"]],
    ["Was symbolisierte das Hakenkreuz?", "Das Zeichen der NSDAP und der 'arischen' Rasse", ["Das Kreuz der Kirche", "Ein Zeichen für Glück allein", "Das Wappen von Berlin"]],
    ["Was war die 'Blut-und-Boden-Ideologie'?", "Verbindung von 'rassischer Reinheit' und bäuerlichem Leben", ["Ein Rezept für Suppe", "Ein Gesetz zum Bergbau", "Eine Form der Jagd"]],
    ["Wie wurde die NS-Ideologie in Schulen verbreitet?", "Durch Anpassung aller Lehrpläne und Rassenkunde", ["Gar nicht, Schulen blieben neutral", "Nur in freiwilligen Kursen", "Durch das Internet"]],
    ["Was dachten Nationalsozialisten über das Individuum?", "Der Einzelne zählt nichts, das Volk ist alles", ["Jeder Mensch ist frei", "Das Individuum ist heilig", "Nur Künstler zählen"]],
    ["Welche Rolle spielten Frauen in der NS-Ideologie?", "Als Mutter und Hausfrau zur Sicherung des Fortbestands", ["Als Führungskräfte in der Wirtschaft", "Als Soldatinnen an der Front", "Keine Rolle"]],
    ["Was war der 'totalitäre Anspruch'?", "Die totale Kontrolle über alle Lebensbereiche der Menschen", ["Die Freiheit für alle Staaten", "Die totale Freiheit der Meinung", "Die Macht des Geldes"]],
    ["Was versteht man unter 'Degenerierter Kunst'?", "Moderne Kunst, die nicht dem NS-Ideal entsprach", ["Kunst, die aus Gold war", "Alte Steinzeitkunst", "Gar nichts"]],
    ["Wie nannten die Nazis ihre Gegner?", "'Volksverräter' oder 'Schädlinge'", ["'Freunde'", "'Mitbürger'", "'Ehrengäste'"]],
    ["Was war das Ziel der 'Endlösung'?", "Die systematische Ermordung der europäischen Juden", ["Das Ende des Krieges", "Die Lösung des Hungerproblems", "Die Erfindung des Autos"]],
    ["Welches Volk galt den Nazis als 'slawische Untermenschen'?", "Russen, Polen, Ukrainer", ["Engländer", "Franzosen", "Italiener", "Schweden"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Hass gegen Juden?", "Antisemitismus"],
    ["Begriff der 'Herrenrasse'?", "Arier"],
    ["Hitlers Buch?", "Mein Kampf"],
    ["Ziel im Osten?", "Lebensraum"],
    ["Name der 'Gemeinschaft'?", "Volksgemeinschaft"],
    ["Prinzip der Führung?", "Fuehrerprinzip"],
    ["Mord an Kranken (E...)?", "Euthanasie"],
    ["NS-Symbol (Kreuz)?", "Hakenkreuz"],
    ["Lehre von den Rassen?", "Rassenkunde"],
    ["Farbe der NSDAP?", "Braun"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 15. NS PROPAGANDA & ALLTAG ──────────────────────────────────────────────

function generateNSPropagandaAlltag(seed: number = 815): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "ns_propaganda";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Welches Medium wurde massiv für Propaganda genutzt?", "Der Volksempfänger (Radio)", ["Das Fernsehen", "Das Internet", "Die Schallplatte allein", "Bücher fremder Autoren"]],
    ["Was war die 'Hitlerjugend' (HJ)?", "Die NS-Organisation für Jungen", ["Ein Sportverein für Erwachsene", "Eine Schule für Priester", "Die Armee"]],
    ["Wie hieß die Organisation für Mädchen?", "BDM (Bund Deutscher Mädel)", ["HJ", "DAF", "NSDAP", "Frauenbund"]],
    ["Welche Großveranstaltung 1936 diente der Propaganda?", "Die Olympischen Spiele in Berlin", ["Die Weltausstellung", "Der Wiener Kongress", "Die Krönung"]],
    ["Wie versuchte der Staat, die Freizeit zu kontrollieren?", "Durch die Organisation 'Kraft durch Freude' (KdF)", ["Gar nicht", "Durch Verbot von Urlaub", "Durch Pflichtarbeit im Wald"]],
    ["Was war der 'Muttertag' im NS-Sinne?", "Ein Tag zur Ehrung kinderreicher 'arischer' Mütter", ["Ein Tag für alle Frauen der Welt", "Ein religiöses Fest", "Kein Feiertag"]],
    ["Was passierte bei den Bücherverbrennungen 1933?", "Schriften jüdischer, marxistischer és pazifistischer Autoren wurden verbrannt", ["Alle Schulbücher wurden verbrannt", "Nur Kochbücher wurden verbrannt", "Nichts passierte"]],
    ["Welche Parole wurde ständig wiederholt?", "'Ein Volk, ein Reich, ein Führer'", ["'Freiheit für alle'", "'Gott schütze den Kaiser'", "'Brot für die Welt'"]],
    ["Was war das Ziel der Erziehung im NS?", "Abhärtung, Gehorsam és ideologische Schulung", ["Kritisches Denken", "Künstlerische Freiheit", "Friedensliebe"]],
    ["Wie nannte man die billigen KdF-Autos, für die man sparen konnte?", "Volkswagen (Käfer)", ["Mercedes", "BMW", "Audi", "Porsche"]],
    ["Was war die Aufgabe der 'Blockwarte'?", "Die Überwachung der Nachbarn im Wohnviertel", ["Der Bau von Häusern", "Das Löschen von Bränden", "Das Verteilen von Post"]],
    ["Welche Rolle spielte die SS (Schutzstaffel)?", "Vom Personenschutz zur mächtigen Terrororganisation (KZ-Bewachung)", ["Sie war ein Chor", "Sie war ein Kochklub", "Sie war die SPD-Garde"]],
    ["Wer leitete die SS?", "Heinrich Himmler", ["Joseph Goebbels", "Hermann Göring", "Ernst Röhm", "Adolf Hitler"]],
    ["Was war das 'Winterhilfswerk'?", "Eine staatlich gelenkte Spendensammlung für Arme", ["Eine Skischule", "Ein Verbot zu heizen", "Ein Urlaub in den Bergen"]],
    ["Was geschah mit Lehrern, die nicht NS-treu waren?", "Sie wurden entlassen (Berufsverbot)", ["Sie bekamen eine Gehaltserhöhung", "Nichts änderte sich", "Sie wurden befördert"]],
    ["Wie wurde Hitler in der Propaganda dargestellt?", "Als unfehlbarer Retter und Genie", ["Als einfacher Diener", "Als normaler Politiker", "Als Gott persönlich"]],
    ["Was war die 'Reichskulturkammer'?", "Eine Einrichtung zur Kontrolle aller Künstler", ["Ein Museum in Berlin", "Ein Theater", "Ein Gesetz zum Denkmalschutz"]],
    ["Wie nannte man die wöchentliche Nachrichtenschau im Kino?", "Deutsche Wochenschau", ["Tagesschau", "Daily News", "NS-Film", "Propaganda-TV"]],
    ["Was war die HJ-Streife?", "Jugendliche, die andere Jugendliche überwachten", ["Ein Ausflug in den Wald", "Eine neue Sportart", "Ein Abzeichen"]],
    ["War die Teilnahme an HJ/BDM verpflichtend?", "Ja, ab 1939 gesetzlich (Jugenddienstpflicht)", ["Nein, immer freiwillig", "Nur für Kinder von Parteimitgliedern", "Nur in Bayern"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Propaganda-Radio?", "Volksempfaenger"],
    ["Jungen-Organisation?", "Hitlerjugend"],
    ["Mädchen-Organisation?", "BDM"],
    ["Freizeitorganisation (K...)?", "Kraft durch Freude"],
    ["Olympiade-Jahr in Berlin?", "1936"],
    ["Was passierte mit Büchern?", "Buecherverbrennung"],
    ["SS-Chef?", "Himmler"],
    ["Auto für das Volk?", "Volkswagen"],
    ["Slogan: Ein Volk, ein Reich, ...?", "ein Fuehrer"],
    ["Abkürzung HJ?", "Hitlerjugend"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 16. HOLOCAUST (JUDENVERFOLGUNG) ─────────────────────────────────────────

function generateHolocaust(seed: number = 816): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "holocaust";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was waren die 'Nürnberger Gesetze' (1935)?", "Rassengesetze zur Ausgrenzung der Juden", ["Gesetze zum Bau der Autobahn", "Friedensverträge", "Ein Verbot der NSDAP"]],
    ["Was passierte am 9. November 1938 (Reichspogromnacht)?", "Synagogen brannten, jüdische Geschäfte wurden zerstört", ["Hitler wurde gewählt", "Der Krieg endete", "Die Mauer fiel"]],
    ["Wo fand die Konferenz zur Planung der 'Endlösung' statt?", "Wannsee-Konferenz (1942)", ["Wiener Kongress", "Berliner Konferenz", "Pariser Konferenz"]],
    ["Welches Kennzeichen mussten Juden ab 1941 tragen?", "Den Gelben Stern (Judenstern)", ["Ein rotes Tuch", "Einen Hut", "Gar kein Kennzeichen"]],
    ["Wie hieß das größte Vernichtungslager?", "Auschwitz-Birkenau", ["Dachau", "Buchenwald", "Sachsenhausen", "Theresienstadt"]],
    ["Wie viele jüdische Menschen wurden etwa ermordet?", "Etwa 6 Millionen", ["Über 50 Millionen", "Genau 1000", "Eine Million", "10 Millionen"]],
    ["Was versteht man unter 'Shoah'?", "Der hebräische Begriff für den Holocaust (Katastrophe)", ["Ein Feiertag", "Ein Fastengericht", "Ein Tanz"]],
    ["Was geschah in den Ghettos (z.B. Warschau)?", "Juden wurden dort auf engstem Raum eingesperrt és hungerten", ["Dort gab es Luxushotels", "Es waren Ferienorte", "Sie dienten der Bildung"]],
    ["Wie wurden die Menschen in die Vernichtungslager transportiert?", "In Güterwaggons der Reichsbahn", ["In Bussen", "Mit Schiffen", "Sie mussten laufen"]],
    ["Was war Zyklon B?", "Ein Giftgas für den Massenmord in den Gaskammern", ["Ein Reinigungsmittel allein", "Ein Treibstoff für Flugzeuge", "Ein Medikament"]],
    ["Was geschah bei der 'Selektion' an der Rampe?", "Arbeitsfähige wurden von Kindern, Alten és Kranken getrennt", ["Es wurden Geschenke verteilt", "Niemand wurde getrennt", "Man wählte eine Partei"]],
    ["Wer war Anne Frank?", "Ein jüdisches Mädchen, das ein berühmtes Tagebuch schrieb", ["Eine Widerstandskämpferin mit Waffen", "Die Frau Hitlers", "Eine Generalin"]],
    ["Was versteht man unter 'Deportation'?", "Die gewaltsame Verschleppung von Menschen", ["Die Einladung zum Tee", "Die freiwillige Ausreise", "Der Bau von Schulen"]],
    ["Welches Land befreite das Lager Auschwitz 1945?", "Die Sowjetunion (Rote Armee)", ["USA", "England", "Frankreich", "Deutschland selbst"]],
    ["Wie nennt man die Leugnung des Holocaust heute?", "Holocaust-Leugnung (eine Straftat in Deutschland)", ["Freie Meinung", "Historische Forschung", "Ein Märchen"]],
    ["Wer waren die 'Gerechten unter den Völkern'?", "Nicht-Juden, die Juden vor der Ermordung retteten", ["Die Generäle der SS", "Die Aufseher im KZ", "Die Mitglieder der NSDAP"]],
    ["Was war der 'Boykott-Tag' am 1. April 1933?", "Aufruf, nicht in jüdischen Geschäften zu kaufen", ["Ein Tag für kostenlose Waren", "Ein Feiertag der SPD", "Der Tag der Arbeit"]],
    ["Welches Gesetz entzog jüdischen Beamten die Stelle?", "Gesetz zur Wiederherstellung des Berufsbeamtentums", ["Ermächtigungsgesetz", "Lex Salica", "Grundgesetz"]],
    ["Was bedeutet der Begriff 'Holocaust' wörtlich?", "Brandopfer (aus dem Griechischen)", ["Zerstörung", "Krieg", "Hass", "Ende"]],
    ["In welchem heutigen Land lag Auschwitz-Birkenau?", "Polen", ["Deutschland", "Russland", "Frankreich", "Österreich"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Anderer Name für Holocaust?", "Shoah"],
    ["Name der Rassengesetze?", "Nuernberger Gesetze"],
    ["Datum der Pogromnacht (Tag/Monat)?", "9. November"],
    ["Ort der Mord-Konferenz?", "Wannsee"],
    ["Bekanntestes Vernichtungslager?", "Auschwitz"],
    ["Zeichen auf der Kleidung?", "Judenstern"],
    ["Anzahl Opfer (in Millionen)?", "6"],
    ["Tagebuch-Autorin?", "Anne Frank"],
    ["Giftgas-Name?", "Zyklon B"],
    ["Begriff für Verschleppung?", "Deportation"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 17. ZWEITER WELTKRIEG (VERLAUF) ─────────────────────────────────────────

function generateZweiterWeltkrieg(seed: number = 817): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "zweiter_weltkrieg";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wann begann der Zweite Weltkrieg?", "1. September 1939", ["30. Januar 1933", "8. Mai 1945", "28. Juni 1914", "1. Januar 1940"]],
    ["Mit welchem Ereignis begann der Zweite Weltkrieg?", "Deutscher Überfall auf Polen", ["Angriff auf Pearl Harbor", "Atombombe auf Hiroshima", "Bau der Mauer"]],
    ["Welche Staaten bildeten die 'Achsenmächte'?", "Deutschland, Italien, Japan", ["USA, England, Frankreich", "Russland, China, Indien", "Spanien, Portugal, Brasilien"]],
    ["Wer waren die 'Alliierten'?", "Großbritannien, USA, Sowjetunion (und Frankreich)", ["Deutschland és Italien", "Japan és China", "Österreich és Ungarn"]],
    ["Was versteht man unter 'Blitzkrieg'?", "Schnelle Siege durch massiven Einsatz von Panzern és Flugzeugen", ["Krieg mit Taschenlampen", "Ein Krieg, der nur bei Gewitter stattfand", "Ein sehr langsamer Krieg"]],
    ["Was geschah am 7. Dezember 1941?", "Japanischer Angriff auf Pearl Harbor", ["Ende des Krieges", "Hitlers Tod", "D-Day"]],
    ["Welche Schlacht 1942/43 gilt als der Wendepunkt im Osten?", "Schlacht von Stalingrad", ["Schlacht von Verdun", "Schlacht bei Waterloo", "Schlacht von Moskau"]],
    ["Was war der 'D-Day' (6. Juni 1944)?", "Landung der Alliierten in der Normandie", ["Deutschlands Kapitulation", "Hitlers Geburtstag", "Beginn des Holocaust"]],
    ["Wann kapitulierte Deutschland bedingungslos?", "8. Mai 1945", ["1. September 1939", "30. April 1945", "11. November 1918"]],
    ["Welche neue Waffe beendete den Krieg gegen Japan?", "Die Atombombe (Hiroshima/Nagasaki)", ["Das Maschinengewehr", "Das Flugzeug", "Das U-Boot"]],
    ["Was war der 'Hitler-Stalin-Pakt'?", "Ein Nichtangriffspakt zwischen Deutschland és der Sowjetunion 1939", ["Ein Handelsvertrag über Öl", "Die Aufteilung Amerikas", "Ein Sportbündnis"]],
    ["Welcher Staat leistete unter Winston Churchill erbitterten Widerstand?", "Großbritannien", ["Frankreich", "Polen", "Österreich", "Italien"]],
    ["Was war das Unternehmen 'Barbarossa'?", "Der deutsche Überfall auf die Sowjetunion 1941", ["Die Eroberung Englands", "Der Bau von Autobahnen", "Ein Friedensplan"]],
    ["Wie nannte man die Luftschlacht um England?", "Battle of Britain", ["Luftkrieg", "D-Day", "Blitzkrieg"]],
    ["Wo starb Adolf Hitler?", "Im Führerbunker in Berlin (Selbstmord)", ["An der Front", "Im Exil", "In Versailles", "Auf Korsika"]],
    ["Was passierte in der Konferenz von Jalta?", "Die Alliierten planten die Aufteilung Deutschlands", ["Frieden mit Hitler", "Krönung des Zaren", "Ende des Pazifismus"]],
    ["Wer war US-Präsident während der meisten Zeit des Krieges?", "Franklin D. Roosevelt", ["Harry S. Truman", "J.F. Kennedy", "Abraham Lincoln", "Barack Obama"]],
    ["Was versteht man unter 'Totaler Krieg'?", "Mobilisierung aller Ressourcen für den Sieg", ["Ein Krieg ohne Waffen", "Ein Krieg nur am Wochenende", "Ein kleiner Grenzstreit"]],
    ["Wie viele Menschen starben insgesamt etwa im Zweiten Weltkrieg?", "Über 60 Millionen", ["Über 100 Millionen", "Eine Million", "10 Millionen", "5 Millionen"]],
    ["Was war der 'Wüstenfuchs'?", "Der Beiname des deutschen Generals Erwin Rommel", ["Ein wildes Tier", "Ein Panzer", "Ein Spion", "Ein Film"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Startjahr?", "1939"],
    ["Endjahr?", "1945"],
    ["Erster überfallener Staat?", "Polen"],
    ["Landung in der Normandie?", "D-Day"],
    ["Schlacht-Wendepunkt im Osten?", "Stalingrad"],
    ["US-Stützpunkt (Angriff Japans)?", "Pearl Harbor"],
    ["Britischer Premier?", "Churchill"],
    ["Deutsche Taktik (B...)?", "Blitzkrieg"],
    ["Schlimmste Waffe am Ende?", "Atombombe"],
    ["Kapitulations-Datum (Monat)?", "Mai"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 18. WIDERSTAND GEGEN DEN NS ─────────────────────────────────────────────

function generateWiderstandNS(seed: number = 818): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "widerstand_ns";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wie hieß die Widerstandsgruppe der Geschwister Scholl?", "Die Weiße Rose", ["Die Rote Kapelle", "Edelweißpiraten", "Stauffenberg-Gruppe"]],
    ["Was war die Haupttätigkeit der 'Weißen Rose'?", "Verteilen von Flugblättern gegen den NS", ["Attentate auf Hitler", "Spionage für die USA", "Bau von Waffen"]],
    ["Wer leitete das Attentat vom 20. Juli 1944?", "Claus Schenk Graf von Stauffenberg", ["Hans Scholl", "Georg Elser", "Dietrich Bonhoeffer"]],
    ["Wo fand das Attentat vom 20. Juli 1944 statt?", "Im Führerhauptquartier Wolfsschanze", ["In Berlin im Reichstag", "Im Sportpalast", "In Paris"]],
    ["Warum scheiterte das Attentat von Stauffenberg?", "Die Bombe stand hinter einem schweren Tischbein és Hitler überlebte", ["Hitler war nicht da", "Die Bombe explodierte nicht", "Stauffenberg wurde vorher gefasst"]],
    ["Wer verübte bereits 1939 ein Bombenattentat im Münchener Bürgerbräukeller?", "Georg Elser", ["Sophie Scholl", "Helmuth von Moltke", "Konrad Adenauer"]],
    ["Wie hießen die Jugendlichen, die sich dem HJ-Zwang widersetzten?", "Edelweißpiraten / Swing-Jugend", ["HJ-Gegner", "Jung-Pionere", "Rote Garden"]],
    ["Welche religiöse Gruppe verweigerte konsequent den Hitlergruß és den Kriegsdienst?", "Zeugen Jehovas", ["Katholiken allgemein", "Protestanten allgemein", "Heilsarmee"]],
    ["Was war der 'Kreisauer Kreis'?", "Eine Gruppe, die Pläne für ein demokratisches Deutschland nach Hitler entwarf", ["Ein Sportklub", "Eine Spezialeinheit der SS", "Die Leibwächter Hitlers"]],
    ["Wer war Dietrich Bonhoeffer?", "Ein evangelischer Theologe és Widerstandskämpfer", ["Ein katholischer Papst", "Ein General der Wehrmacht", "Ein Erfinder"]],
    ["Was geschah mit den Mitgliedern der 'Weißen Rose'?", "Sie wurden 1943 hingerichtet", ["Sie konnten fliehen", "Sie wurden begnadigt", "Sie wurden Politiker"]],
    ["Wie nannte man den Widerstand innerhalb der Armee?", "Militärischer Widerstand", ["Ziviler Ungehorsam", "Revolution", "Desertion allein"]],
    ["Welche Rolle spielten die christlichen Kirchen im Widerstand?", "Einzelne Personen leisteten mutigen Widerstand, die Institutionen blieben oft passiv", ["Sie stürzten Hitler", "Sie unterstützten ihn zu 100%", "Es gab keinen kirchlichen Widerstand"]],
    ["Was war die 'Rote Kapelle'?", "Ein Spionagenetzwerk és Widerstandsgruppe gegen den NS", ["Ein Musikchor", "Ein Zirkus", "Ein Kloster"]],
    ["Warum war Widerstand im NS-Staat extrem lebensgefährlich?", "Wegen der totalen Überwachung durch die Gestapo és grausamer Strafen", ["Wegen schlechten Wetters", "Wegen der Steuern", "Wegen der vielen Autos"]],
    ["Was forderte die 'Weiße Rose' in ihren Flugblättern?", "Freiheit, Wahrheit és ein Ende des Krieges", ["Die Weltherrschaft Deutschlands", "Mehr Macht für Hitler", "Die Vernichtung Englands"]],
    ["Was passierte nach dem Scheitern des 20. Juli?", "Tausende wurden verhaftet és hingerichtet (Sippenhaft)", ["Hitler trat zurück", "Nichts geschah", "Es gab Wahlen"]],
    ["Wer war Clemens August Graf von Galen?", "Ein katholischer Bischof, der gegen die Euthanasie predigte", ["Ein General", "Ein Freund Hitlers", "Ein jüdischer Rabbiner"]],
    ["Wie nannte man die geheime Staatspolizei des NS?", "Gestapo", ["Stasi", "Kripo", "BND", "NATO"]],
    ["Gab es während des Krieges einen großen Volksaufstand gegen Hitler?", "Nein, der Terror és die Propaganda verhinderten dies weitgehend", ["Ja, 1944 revoltierte das ganze Volk", "Ja, in Berlin gab es tägliche Demos", "Nur in Bayern"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Gruppe der Geschwister Scholl?", "Weisse Rose"],
    ["Attentäter vom 20. Juli 1944?", "Stauffenberg"],
    ["Einzeltäter im Bürgerbräukeller 1939?", "Elser"],
    ["Theologe im Widerstand?", "Bonhoeffer"],
    ["Geheime Staatspolizei?", "Gestapo"],
    ["Mittel der Weißen Rose?", "Flugblaetter"],
    ["Ort des 20. Juli (W...)?", "Wolfsschanze"],
    ["Widerstand der Jugend (E...)?", "Edelweisspiraten"],
    ["Vorname Sophie Scholls?", "Sophie"],
    ["Ziel des 20. Juli?", "Attentat"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 19. NACHKRIEGSZEIT & TEILUNG ─────────────────────────────────────────────

function generateNachkriegszeit(seed: number = 819): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "nachkriegszeit";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wie nannte man die Konferenz der Siegermächte 1945?", "Potsdamer Konferenz", ["Wiener Kongress", "Berliner Konferenz", "Wartburgfest"]],
    ["Wer waren die 'Großen Drei' in Potsdam?", "Truman (USA), Stalin (UdSSR), Churchill/Attlee (GB)", ["Hitler, Mussolini, Hirohito", "Napoleon, Metternich, Zar", "Adenauer, Erhard, Brandt"]],
    ["Was waren die '4 Ds' der Besatzungspolitik?", "Denazifizierung, Demilitarisierung, Demokratisierung, Dezentralisierung", ["Diktatur, Dauer, Deutschland, Demo", "Dampf, Dorf, Dienst, Deal"]],
    ["In wie viele Besatzungszonen wurde Deutschland geteilt?", "Vier (USA, GB, UdSSR, Frankreich)", ["Zwei", "Drei", "Zehn", "Fünf"]],
    ["Welche Stadt wurde ebenfalls in vier Sektoren geteilt?", "Berlin", ["München", "Hamburg", "Bonn", "Frankfurt"]],
    ["Wie nannte man die Frauen, die den Schutt der zerstörten Städte wegräumten?", "Trümmerfrauen", ["Fabrikfrauen", "Bauarbeiterinnen", "Kriegerwitwen", "Heldinnen"]],
    ["Was war der 'Marshallplan'?", "Ein US-Hilfsprogramm zum Wiederaufbau Europas", ["Ein Plan zur Eroberung Russlands", "Ein Verbot der Industrie", "Ein Plan für neue Grenzen"]],
    ["Was war die 'Währungsreform' 1948 in den Westzonen?", "Einführung der D-Mark", ["Einführung des Euro", "Abschaffung des Geldes", "Rückkehr zum Gold"]],
    ["Wie reagierte die Sowjetunion auf die Währungsreform?", "Mit der Berlin-Blockade", ["Mit einem Friedensangebot", "Mit dem Bau der Mauer sofort", "Gar nicht"]],
    ["Wie wurden die Berliner während der Blockade versorgt?", "Durch die Luftbrücke ('Rosinenbomber')", ["Durch Schiffe", "Durch Tunnel", "Gar nicht, sie hungerten"]],
    ["Wann wurde die Bundesrepublik Deutschland (BRD) gegründet?", "23. Mai 1949 (Grundgesetz)", ["8. Mai 1945", "17. Juni 1953", "3. Oktober 1990"]],
    ["Wann wurde die Deutsche Demokratische Republik (DDR) gegründet?", "7. Oktober 1949", ["1. Januar 1950", "13. August 1961", "9. November 1918"]],
    ["Wer war der erste Bundeskanzler der BRD?", "Konrad Adenauer", ["Ludwig Erhard", "Willy Brandt", "Helmut Kohl", "Theodor Heuss"]],
    ["Wie heißt die Verfassung der Bundesrepublik?", "Grundgesetz", ["Charta", "Verfassung von Weimar", "Lex Deutschland", "Magna Carta"]],
    ["Welche Stadt wurde provisorische Hauptstadt der BRD?", "Bonn", ["Berlin", "München", "Frankfurt", "Hamburg"]],
    ["Was versteht man unter 'Entnazifizierung'?", "Die Säuberung der Gesellschaft von NS-Einflüssen", ["Die Krönung eines neuen Königs", "Die Einführung der NATO", "Der Bau von Kinos"]],
    ["Was waren die Nürnberger Prozesse?", "Gerichtsverfahren gegen Hauptkriegsverbrecher des NS-Regimes", ["Wahlkämpfe in Franken", "Ein Sportfest", "Friedensverhandlungen mit Japan"]],
    ["Welche Wirtschaftsform wurde in der BRD eingeführt?", "Soziale Marktwirtschaft", ["Planwirtschaft", "Tauschwirtschaft", "Absoluter Kapitalismus"]],
    ["Was passierte am 17. Juni 1953 in der DDR?", "Ein Volksaufstand gegen die Erhöhung der Arbeitsnormen", ["Der Bau der Mauer", "Die Wiedervereinigung", "Ein Staatsbesuch aus den USA"]],
    ["Wie nannte man den wirtschaftlichen Aufstieg der BRD in den 1950ern?", "Wirtschaftswunder", ["Goldrausch", "Industrie-Revolution", "Geldsegen", "Boom-Zeit"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Konferenzort 1945?", "Potsdam"],
    ["Name der Helferinnen (Schutt)?", "Truemmerfrauen"],
    ["US-Hilfsprogramm?", "Marshallplan"],
    ["Währung ab 1948 (West)?", "D-Mark"],
    ["Versorgung Berlins aus der Luft?", "Luftbruecke"],
    ["Erster Bundeskanzler?", "Adenauer"],
    ["Hauptstadt der BRD (alt)?", "Bonn"],
    ["Name der Verfassung?", "Grundgesetz"],
    ["Jahr der doppelten Staatsgründung?", "1949"],
    ["Aufstand in der DDR (Tag/Monat)?", "17. Juni"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 20. KALTER KRIEG & MAUERBAU ─────────────────────────────────────────────

function generateKalterKrieg(seed: number = 820): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "kalter_krieg";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was versteht man unter dem 'Kalten Krieg'?", "Der Konflikt zwischen den Westmächten (USA) und dem Ostblock (UdSSR)", ["Ein Krieg im Winter", "Ein Krieg am Nordpol", "Ein Krieg ohne Waffen"]],
    ["Wann wurde die Berliner Mauer gebaut?", "13. August 1961", ["9. November 1989", "17. Juni 1953", "1. September 1939", "8. Mai 1945"]],
    ["Warum baute die DDR-Führung die Mauer?", "Um die Massenflucht der Menschen in den Westen zu stoppen", ["Zum Schutz vor dem Wetter", "Als Kunstprojekt", "Um Touristen anzulocken"]],
    ["Wie nannte die DDR die Mauer offiziell?", "'Antifaschistischer Schutzwall'", ["'Große Mauer'", "'Freiheitszaun'", "'Grenze'"]],
    ["Was war die 'Kuba-Krise' 1962?", "Die Stationierung sowjetischer Raketen auf Kuba (fast Atomkrieg)", ["Ein Streit um Zuckerpreise", "Eine Revolution in Spanien", "Der Bau der Mauer"]],
    ["Welches Militärbündnis gründeten die Westmächte?", "NATO", ["Warschauer Pakt", "EU", "UNO", "Hanse"]],
    ["Welches Militärbündnis gründete der Ostblock?", "Warschauer Pakt", ["NATO", "Rheinbund", "EWG", "SEATO"]],
    ["Wie nannte Winston Churchill die Grenze durch Europa?", "Eiserner Vorhang", ["Großer Graben", "Mauer des Schreckens", "Stahlzaun", "Niemandsland"]],
    ["Wer war US-Präsident während des Mauerbaus und der Kuba-Krise?", "John F. Kennedy", ["Franklin D. Roosevelt", "Ronald Reagan", "Donald Trump", "Barack Obama"]],
    ["Welchen berühmten Satz sagte Kennedy 1963 in Berlin?", "'Ich bin ein Berliner'", ["'Die Mauer muss weg'", "'Guten Tag, Berlin'", "'Friede sei mit euch'"]],
    ["Was war das 'Wettrüsten'?", "Die ständige Steigerung der militärischen Stärke beider Seiten", ["Ein Sportwettbewerb", "Ein Handel mit Gold", "Der Bau von Spielzeug"]],
    ["Was versteht man unter der 'Stasi' in der DDR?", "Ministerium für Staatssicherheit (Geheimpolizei)", ["Ein Reisebüro", "Die Abkürzung für Statistik", "Ein Sportverein"]],
    ["Wer war der Führer der UdSSR während der Kuba-Krise?", "Nikita Chruschtschow", ["Josef Stalin", "Michail Gorbatschow", "Wladimir Putin", "Lenin"]],
    ["Was war der 'Sputnik-Schock'?", "Der erste künstliche Satellit der UdSSR 1957", ["Ein Erdbeben in Moskau", "Die Erfindung des Fernsehers", "Ein Verbot von Radio"]],
    ["Was war die 'Entspannungspolitik' (Ab den 1970ern)?", "Versuche zur friedlichen Koexistenz und Rüstungskontrolle", ["Die Abschaffung aller Grenzen", "Ein gemeinsamer Urlaub der Führer", "Nichts änderte sich"]],
    ["Wer leitete in der BRD die 'Neue Ostpolitik' ein?", "Willy Brandt", ["Konrad Adenauer", "Helmut Kohl", "Angela Merkel", "Helmut Schmidt"]],
    ["Was war der Kniefall von Warschau?", "Willy Brandts Geste der Demut und Bitte um Vergebung", ["Ein Unfall beim Tanzen", "Ein Protest gegen Preußen", "Ein Zeichen der Stärke"]],
    ["Was war der 'Prager Frühling' 1968?", "Ein Versuch zur Demokratisierung in der Tschechoslowakei (niedergeschlagen)", ["Ein Musikfestival", "Der Bau einer Brücke", "Die Gründung der DDR"]],
    ["Welche Rolle spielte Berlin im Kalten Krieg?", "Als Frontstadt und Brennpunkt der Auseinandersetzung", ["Es war völlig unwichtig", "Es war eine neutrale Zone", "Es gab kein Berlin mehr"]],
    ["Wann wurde der Warschauer Pakt aufgelöst?", "1991", ["1945", "1961", "1989", "2000"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Mauerbau-Jahr?", "1961"],
    ["US-Bündnis?", "NATO"],
    ["Sowjet-Bündnis?", "Warschauer Pakt"],
    ["Metapher Churchills (E...)?", "Eiserner Vorhang"],
    ["Geheimpolizei DDR?", "Stasi"],
    ["Krise 1962 (Raketen)?", "Kuba-Krise"],
    ["US-Präsident in Berlin 1963?", "Kennedy"],
    ["Slogan Kennedys?", "Ich bin ein Berliner"],
    ["Begriff für Aufrüstung?", "Wettruesten"],
    ["Kanzler der Ostpolitik?", "Brandt"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 21. MAUERFALL & WIEDERVEREINIGUNG ───────────────────────────────────────

function generateWiedervereinigung(seed: number = 821): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "wiedervereinigung";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Wann fiel die Berliner Mauer?", "9. November 1989", ["3. Oktober 1990", "13. August 1961", "17. Juni 1953", "1. Januar 1990"]],
    ["Wann wurde Deutschland offiziell wiedervereinigt?", "3. Oktober 1990", ["9. November 1989", "8. Mai 1945", "1. Juli 1990", "24. Dezember 1990"]],
    ["Welcher sowjetische Politiker ermöglichte durch seine Reformen die Wende?", "Michail Gorbatschow", ["Josef Stalin", "Wladimir Putin", "Boris Jelzin", "Nikita Chruschtschow"]],
    ["Wie nannten sich die Reformprogramme Gorbatschows?", "Glasnost (Offenheit) und Perestroika (Umbau)", ["Blitzkrieg und Donner", "Sonne und Mond", "Brot und Spiele", "Ruhe und Ordnung"]],
    ["Welche Parole riefen die Demonstranten in der DDR 1989?", "'Wir sind das Volk'", ["'Freiheit für alle'", "'Gott schütze den König'", "'Brot für die Welt'"]],
    ["Wo fanden die berühmten 'Montagsdemonstrationen' statt?", "Leipzig (und andere Städte)", ["Berlin (nur im Westen)", "München", "Bonn", "Hamburg"]],
    ["Wer war Bundeskanzler zum Zeitpunkt der Wiedervereinigung?", "Helmut Kohl", ["Willy Brandt", "Angela Merkel", "Gerhard Schröder", "Konrad Adenauer"]],
    ["Was versteht man unter dem 'Zwei-plus-Vier-Vertrag'?", "Der Friedensvertrag zwischen den beiden deutschen Staaten und den Siegermächten", ["Ein Vertrag über den Bau von zwei Brücken", "Ein Abkommen über Fußball", "Ein Handelsvertrag"]],
    ["Was passierte am 1. Juli 1940 (Wirtschafts-, Währungs- und Sozialunion)?", "Die D-Mark wurde in der DDR eingeführt", ["Die DDR wurde abgeschafft", "Die Mauer wurde gebaut", "Gar nichts"]],
    ["Wie nannte man die friedliche Revolution in der DDR?", "Die Wende", ["Der Umbruch", "Der große Krieg", "Die Rückkehr", "Das Wunder"]],
    ["Welcher DDR-Politiker verkündete versehentlich die sofortige Grenzöffnung?", "Günter Schabowski", ["Erich Honecker", "Walter Ulbricht", "Egon Krenz", "Gregor Gysi"]],
    ["Was geschah mit der DDR nach dem 3. Oktober 1990?", "Sie trat der Bundesrepublik bei und hörte auf zu existieren", ["Sie blieb ein eigener Staat", "Sie wurde russisch", "Sie wurde polnisch"]],
    ["Welche Rolle spielten die Kirchen in der DDR-Opposition?", "Sie boten Raum für freie Diskussionen und Gebete (Friedensgebete)", ["Sie waren verboten", "Sie leiteten die Armee", "Sie bauten die Mauer"]],
    ["Was war das Paneuropäische Picknick?", "Eine Grenzöffnung zwischen Österreich und Ungarn 1989", ["Ein Fest in Berlin", "Ein Picknick im Wald", "Ein Sportereignis"]],
    ["Wie nannte Helmut Kohl die blühende Zukunft im Osten?", "'Blühende Landschaften'", ["'Goldene Zeiten'", "'Reiche Ernte'", "'Grüne Wiesen'"]],
    ["Welches Land öffnete als erstes den 'Eisernen Vorhang' (Sommer 1989)?", "Ungarn", ["Polen", "Tschechoslowakei", "Österreich", "Rumänien"]],
    ["Was war der 'Zehn-Punkte-Plan'?", "Helmut Kohls Plan zur schrittweisen Einigung Deutschlands", ["Ein Plan für zehn neue Kinos", "Ein Kochbuch", "Ein Gesetz für Schulen"]],
    ["Wer war Staatsratsvorsitzender der DDR während der 1980er?", "Erich Honecker", ["Walter Ulbricht", "Wilhelm Pieck", "Egon Krenz"]],
    ["Was war die 'Treuhandanstalt'?", "Eine Behörde zur Privatisierung der DDR-Wirtschaft", ["Eine Bank in Bonn", "Ein Museum für Geschichte", "Ein Verein für Sport"]],
    ["Wie nennt man den 3. Oktober heute?", "Tag der Deutschen Einheit", ["Nationalfeiertag der DDR", "Tag der Freiheit", "Tag des Friedens", "Gründungstag"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Mauerfall-Datum (Tag/Monat/Jahr)?", "9. November 1989"],
    ["Tag der Deutschen Einheit (Datum)?", "3. Oktober"],
    ["Sowjetischer Reformer?", "Gorbatschow"],
    ["DDR-Slogan: Wir sind das ...?", "Volk"],
    ["Stadt der Montagsdemos?", "Leipzig"],
    ["Kanzler der Einheit?", "Kohl"],
    ["Wende-Begriff (G...)?", "Glasnost"],
    ["DDR-Slogan Ende: Wir sind ... Volk!", "ein"],
    ["Name des Einigungsprozesses?", "Wende"],
    ["Zahl der Siegermächte (Vertrag)?", "4"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── 22. EUROPÄISCHE EINIGUNG (EU) ───────────────────────────────────────────

function generateEuropaEinigung(seed: number = 822): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "Geschichte";
  const S = "europa_einigung";
  const qs: CurriculumQuestion[] = [];

  const mcqPool: [string, string, string[]][] = [
    ["Was war das Hauptziel der europäischen Einigung nach 1945?", "Dauerhafter Frieden in Europa", ["Die Weltherrschaft", "Die Abschaffung aller Sprachen", "Der Bau von Raketen"]],
    ["Was war die erste Vorläufer-Organisation der EU (1951)?", "Montanunion (EGKS)", ["EWG", "NATO", "UNO", "Hanse"]],
    ["Welche zwei Länder galten als 'Motor' der Einigung?", "Deutschland und Frankreich", ["England und Spanien", "Italien und Griechenland", "Polen und Russland"]],
    ["Was wurde 1957 in den 'Römischen Verträgen' gegründet?", "Europäische Wirtschaftsgemeinschaft (EWG)", ["Der Euro", "Die Bundeswehr", "Das Internet"]],
    ["Wann trat der Vertrag von Maastricht in Kraft (Gründung der EU)?", "1. November 1993", ["1945", "1989", "2002", "1918"]],
    ["Wie heißt die gemeinsame europäische Währung?", "Euro", ["Dollar", "D-Mark", "ECU", "Pfund"]],
    ["Was regelt das 'Schengener Abkommen'?", "Den Wegfall von Grenzkontrollen im Binnenraum", ["Den Preis für Brot", "Das Verbot von Autos", "Die Wahl des Präsidenten"]],
    ["Wo hat die Europäische Kommission ihren Hauptsitz?", "Brüssel", ["Straßburg", "Luxemburg", "Berlin", "Paris"]],
    ["Wie viele Sterne hat die Europaflagge?", "12", ["27", "50", "15", "6"]],
    ["Was symbolisieren die Sterne auf der Flagge?", "Einheit, Solidarität és Harmonie", ["Die Anzahl der Länder", "Die Anzahl der Flüsse", "Die Anzahl der Könige"]],
    ["Welche Rolle hat das Europäische Parlament?", "Vertretung der Bürger és Gesetzgebung", ["Oberbefehl über das Heer", "Verwaltung der Steuern allein", "Gar keine"]],
    ["In welcher Stadt tagt das Europäische Parlament meist?", "Straßburg", ["Brüssel", "Bonn", "Den Haag", "London"]],
    ["Was versteht man unter den 'Vier Freiheiten' im EU-Binnenmarkt?", "Freier Verkehr von Waren, Personen, Dienstleistungen és Kapital", ["Freiheit zu rauchen, zu trinken, zu tanzen és zu singen", "Gar nichts"]],
    ["Welches Land trat 2020 als erstes Mitglied aus der EU aus (Brexit)?", "Großbritannien", ["Frankreich", "Italien", "Polen", "Ungarn"]],
    ["Was ist der Europäische Rat?", "Die Versammlung der Staats- és Regierungschefs", ["Ein Gerichtshof", "Eine Bank", "Ein Sportverein"]],
    ["Was ist die EZB?", "Europäische Zentralbank (verantwortlich für den Euro)", ["Ein Fernsehsender", "Ein Autobauer", "Ein Hilfswerk"]],
    ["Wer war ein bedeutender Gründervater der Einigung?", "Robert Schuman / Konrad Adenauer", ["Napoleon", "Bismarck", "Hitler", "Kaiser Wilhelm"]],
    ["Wie viele Mitgliedstaaten hat die EU heute etwa (nach dem Brexit)?", "27", ["12", "15", "50", "100"]],
    ["Was war der Friedensnobelpreis für die EU 2012?", "Ehrung für über 60 Jahre Beitrag zu Frieden és Versöhnung", ["Eine Geldspende für Banken", "Ein Preis für das beste Auto", "Gar nichts"]],
    ["Was ist die 'Europäische Hymne'?", "Die 'Ode an die Freude' (Beethoven)", ["Ein Lied von ABBA", "Die Nationalhymne Englands", "Ein Marsch"]]
  ];

  const typingPool: [string, string | string[]][] = [
    ["Hauptstadt der EU?", "Bruessel"],
    ["Gemeinsame Währung?", "Euro"],
    ["Grenzkontroll-Abkommen?", "Schengen"],
    ["Vorgänger (Abk.)?", "EWG"],
    ["Anzahl Sterne (Flagge)?", "12"],
    ["Parlaments-Sitz?", "Strassburg"],
    ["Wichtigstes Gründungsland (West)?", "Frankreich"],
    ["Zahl der Mitgliedstaaten?", "27"],
    ["Name der Hymne (O...)?", "Ode an die Freude"],
    ["Gründungstag (Monat)?", "Mai"]
  ];

  shuffle(mcqPool, rng).forEach(m => qs.push(createMCQ(T, S, m[0], m[1], m[2], rng)));
  shuffle(typingPool, rng).forEach(t => qs.push(createTyping(T, S, t[0], t[1])));
  return qs;
}

// ─── FINAL GENERATOR MAP ───────────────────────────────────────────────────

export const G8_Generators_Geschichte: Record<string, (seed?: number) => CurriculumQuestion[]> = {
  imperialismus: (seed?: number) => generateImperialismus(seed),
  erster_weltkrieg_beginn: (seed?: number) => generateErsterWeltkriegBeginn(seed),
  erster_weltkrieg_verlauf: (seed?: number) => generateErsterWeltkriegVerlauf(seed),
  weimarer_republik: (seed?: number) => generateWeimarerRepublik(seed),
  ns_machtuebernahme: (seed?: number) => generateNSMachtuebernahme(seed),
  ns_ideologie: (seed?: number) => generateNSIdeologie(seed),
  ns_propaganda: (seed?: number) => generateNSPropagandaAlltag(seed),
  holocaust: (seed?: number) => generateHolocaust(seed),
  zweiter_weltkrieg: (seed?: number) => generateZweiterWeltkrieg(seed),
  widerstand_ns: (seed?: number) => generateWiderstandNS(seed),
  nachkriegszeit: (seed?: number) => generateNachkriegszeit(seed),
  kalter_krieg: (seed?: number) => generateKalterKrieg(seed),
  wiedervereinigung: (seed?: number) => generateWiedervereinigung(seed),
  europa_einigung: (seed?: number) => generateEuropaEinigung(seed),
  
  // Placeholders for additional nuanced subtopics if needed
  teilung_deutschlands: (seed?: number) => generateNachkriegszeit(seed),
  berliner_mauer: (seed?: number) => generateKalterKrieg(seed),
  wirtschaftswunder: (seed?: number) => generateNachkriegszeit(seed),
  gesellschaft_60er: (seed?: number) => generateKalterKrieg(seed),
  julikrise: (seed?: number) => generateErsterWeltkriegBeginn(seed),
  kolonien_deutsch: (seed?: number) => generateImperialismus(seed),
  bismarck_aussenpolitik: (seed?: number) => generateImperialismus(seed),
  versailler_vertrag: (seed?: number) => generateErsterWeltkriegVerlauf(seed),
  weltwirtschaftskrise: (seed?: number) => generateWeimarerRepublik(seed),
  moderne_welt: (seed?: number) => generateEuropaEinigung(seed)
};
