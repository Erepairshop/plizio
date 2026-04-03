import type { PoolTopicDef, SvgConfig } from "./types";

type Lang = "de" | "en" | "hu" | "ro";
type L4 = Record<Lang, string>;

const L = (de: string, en: string, hu: string, ro: string): L4 => ({ de, en, hu, ro });

interface TopicSpec {
  title: L4;
  text: L4;
  hint?: L4;
  bullet1?: L4;
  bullet2?: L4;
  labels?: Record<string, L4>;
  svg: SvgConfig;
  interactive: (k: (suffix: string) => string) => any;
  quiz: string;
  difficulty?: "easy" | "medium" | "hard";
}

interface IslandSpec {
  id: string;
  title: L4;
  topics: TopicSpec[];
}

function topicKey(islandId: string, index: number, suffix: string): string {
  return `${islandId}_t${index}_${suffix}`;
}

function buildTopicLabels(islandId: string, index: number, spec: TopicSpec) {
  const out: Record<string, L4> = {
    title: spec.title,
    text: spec.text,
  };
  if (spec.hint) out.hint = spec.hint;
  if (spec.bullet1) out.bullet1 = spec.bullet1;
  if (spec.bullet2) out.bullet2 = spec.bullet2;
  for (const [key, value] of Object.entries(spec.labels ?? {})) {
    out[key] = value;
  }
  const prefixed: Record<string, L4> = {};
  for (const [suffix, value] of Object.entries(out)) {
    prefixed[topicKey(islandId, index, suffix)] = value;
  }
  return prefixed;
}

function buildPool(islandId: string, topics: TopicSpec[]): PoolTopicDef[] {
  return topics.map((spec, index) => {
    const prefix = (suffix: string) => topicKey(islandId, index + 1, suffix);
    return {
      infoTitle: prefix("title"),
      infoText: prefix("text"),
      svg: spec.svg,
      bulletKeys: spec.bullet1 || spec.bullet2 ? [spec.bullet1 ? prefix("bullet1") : "", spec.bullet2 ? prefix("bullet2") : ""].filter(Boolean) as string[] : undefined,
      hintKey: spec.hint ? prefix("hint") : undefined,
      interactive: spec.interactive(prefix),
      quiz: { generate: spec.quiz },
      difficulty: spec.difficulty,
    };
  });
}

function buildIsland(island: IslandSpec) {
  const labels: Record<Lang, Record<string, string>> = {
    de: { explorer_title: island.title.de },
    en: { explorer_title: island.title.en },
    hu: { explorer_title: island.title.hu },
    ro: { explorer_title: island.title.ro },
  };
  island.topics.forEach((topic, idx) => {
    for (const [key, value] of Object.entries(buildTopicLabels(island.id, idx + 1, topic))) {
      labels.de[key] = value.de;
      labels.en[key] = value.en;
      labels.hu[key] = value.hu;
      labels.ro[key] = value.ro;
    }
  });
  return { labels, pool: buildPool(island.id, island.topics) };
}

// ─── ISLAND 1: IMPERIALISMUS ───────────────────────────────────────────────

const I1: IslandSpec = {
  id: "i1",
  title: L("Imperialismus", "Imperialism", "Imperializmus", "Imperialism"),
  topics: [
    {
      title: L("Motive", "Motives", "Motívumok", "Motive"),
      text: L("Großmächte strebten nach Rohstoffen, Absatzmärkten und politischer Macht weltweit.", "Great powers sought raw materials, markets, and political power worldwide.", "A nagyhatalmak nyersanyagokra, piacokra és politikai hatalomra törekedtek világszerte.", "Marile puteri au căutat materii prime, piețe și putere politică la nivel mondial."),
      svg: { type: "geschichte-diagram", name: "ShieldSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Rohstoffe", "Raw materials", "Nyersanyag", "Materii prime"), right: L("Wirtschaft", "Economy", "Gazdaság", "Economie") },
          { left: L("Macht", "Power", "Hatalom", "Putere"), right: L("Politik", "Politics", "Politika", "Politică") },
        ],
        instruction: k("title"),
      }),
      quiz: "imperialismus",
    },
    {
      title: L("Afrika-Konferenz", "Africa Conference", "Afrika-konferencia", "Conferința de la Berlin"),
      text: L("In Berlin wurde 1884/85 die Aufteilung Afrikas unter den europäischen Mächten geregelt.", "The division of Africa among European powers was regulated in Berlin in 1884/85.", "Berlinben szabályozták Afrika felosztását az európai hatalmak között 1884/85-ben.", "Divizarea Africii între puterile europene a fost reglementată la Berlin în 1884/85."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Ort der Konferenz: __. Ziel: __ Afrikas.", "Place: __. Goal: __ of Africa.", "Helyszín: __. Cél: Afrika __.", "Locul: __. Scop: __ Africii."),
        gaps: [
          { index: 0, options: ["Berlin", "London", "Paris"], correct: 0 },
          { index: 1, options: [L("Aufteilung", "Division", "felosztása", "divizarea"), L("Schutz", "Protection", "védelme", "protecția")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "imperialismus",
    },
    {
      title: L("Kolonien", "Colonies", "Gyarmatok", "Colonii"),
      text: L("Europäische Staaten beherrschten weite Teile der Welt und beuteten sie aus.", "European states ruled large parts of the world and exploited them.", "Az európai államok a világ nagy részét uralták és kizsákmányolták.", "Statele europene au stăpânit mari părți ale lumii și le-au exploatat."),
      svg: { type: "geschichte-diagram", name: "FactorySvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "col", label: L("Kolonien", "Colonies", "Gyarmatok", "Colonii") },
          { id: "pow", label: L("Mächte", "Powers", "Hatalmak", "Puteri") },
        ],
        items: [
          { text: L("Indien", "India", "India", "India"), bucketId: "col" },
          { text: L("Kongo", "Congo", "Kongó", "Congo"), bucketId: "col" },
          { text: L("England", "England", "Anglia", "Anglia"), bucketId: "pow" },
        ],
        instruction: k("title"),
      }),
      quiz: "imperialismus",
    },
    {
      title: L("Nationalstolz", "Nationalism", "Nacionalizmus", "Naționalism"),
      text: L("Jede Nation wollte die größte und mächtigste sein, was zu Spannungen führte.", "Every nation wanted to be the largest and most powerful, leading to tensions.", "Minden nemzet a legnagyobb és legerősebb akart lenni, ami feszültséghez vezetett.", "Fiecare națiune dorea să fie cea mai mare și mai puternică, ceea ce a dus la tensiuni."),
      svg: { type: "geschichte-diagram", name: "RevolutionSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Platz an der Sonne", "Place in the sun", "Hely a nap alatt", "Loc sub soare"), right: L("Deutschland", "Germany", "Németország", "Germania") },
          { left: L("Empire", "Empire", "Birodalom", "Imperiu"), right: L("Großbritannien", "Great Britain", "Nagy-Britannia", "Marea Britanie") },
        ],
        instruction: k("title"),
      }),
      quiz: "imperialismus",
    },
    {
      title: L("Wettlauf", "Race for Africa", "Versenyfutás", "Cursa pentru Africa"),
      text: L("Ein schneller Wettlauf um die letzten unbesetzten Gebiete der Erde begann.", "A rapid race for the last unoccupied territories on earth began.", "Gyors versenyfutás kezdődött a Föld utolsó még megszállatlan területeiért.", "A început o cursă rapidă pentru ultimele teritorii neocupate de pe pământ."),
      svg: { type: "geschichte-diagram", name: "SteamEngineSvg" },
      interactive: (k) => ({
        type: "word-order",
        words: [L("Erkundung", "Exploration", "Felfedezés", "Explorare"), L("Eroberung", "Conquest", "Hódítás", "Cucerire"), L("Ausbeutung", "Exploitation", "Kizsákmányolás", "Exploatare")],
        instruction: L("Schritte der Kolonialisierung", "Steps of colonization", "A gyarmatosítás lépései", "Pașii colonizării"),
      }),
      quiz: "imperialismus",
    },
  ],
};

// ─── ISLAND 2: ERSTER WELTKRIEG ──────────────────────────────────────────────

const I2: IslandSpec = {
  id: "i2",
  title: L("Erster Weltkrieg", "World War I", "I. világháború", "Primul Război Mondial"),
  topics: [
    {
      title: L("Sarajevo 1914", "Sarajevo 1914", "Szarajevó 1914", "Sarajevo 1914"),
      text: L("Das Attentat auf den österreichischen Thronfolger löste die Julikrise aus.", "The assassination of the Austrian heir to the throne triggered the July Crisis.", "Az osztrák trónörökös elleni merénylet robbantotta ki a júliusi válságot.", "Atentatul împotriva moștenitorului tronului austriac a declanșat Criza din Iulie."),
      svg: { type: "geschichte-diagram", name: "RomanSoldierSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Ermordet: __. Stadt: __.", "Assassinated: __. City: __.", "Meggyilkolva: __. Város: __.", "Asasinat: __. Oraș: __."),
        gaps: [
          { index: 0, options: ["Franz Ferdinand", "Wilhelm II.", "Bismarck"], correct: 0 },
          { index: 1, options: ["Sarajevo", "Wien", "Berlin"], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "erster_weltkrieg_beginn",
    },
    {
      title: L("Grabenkrieg", "Trench Warfare", "Lövészárok-háború", "Războiul de tranșee"),
      text: L("An der Westfront erstarrten die Fronten in kilometerlangen Schützengräben.", "On the Western Front, the fronts froze in miles of trenches.", "A nyugati fronton a harcok kilométeres lövészárkokba merevedtek.", "Pe frontul de vest, fronturile au încremenit în kilometri de tranșee."),
      svg: { type: "geschichte-diagram", name: "TrenchSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Schützengraben", "Trench", "Lövészárok", "Tranșee"), right: L("Schutz", "Protection", "Védelem", "Protecție") },
          { left: L("Niemandsland", "No man's land", "Senki földje", "Tărâmul nimănui"), right: L("Mitte", "Middle", "Közép", "Mijloc") },
        ],
        instruction: k("title"),
      }),
      quiz: "erster_weltkrieg_verlauf",
    },
    {
      title: L("Materialschlacht", "War of Attrition", "Anyagháború", "Război de uzură"),
      text: L("Der Krieg wurde durch den massiven Einsatz von Waffen und Soldaten entschieden.", "The war was decided by the massive use of weapons and soldiers.", "A háborút a fegyverek és katonák tömeges bevetése döntötte el.", "Războiul a fost decis de utilizarea masivă a armelor și a soldaților."),
      svg: { type: "geschichte-diagram", name: "FactorySvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "new", label: L("Neue Waffen", "New weapons", "Új fegyverek", "Arme noi") },
          { id: "old", label: L("Alte Waffen", "Old weapons", "Régi fegyverek", "Arme vechi") },
        ],
        items: [
          { text: L("Giftgas", "Poison gas", "Gáz", "Gaz toxic"), bucketId: "new" },
          { text: L("Panzer", "Tanks", "Harckocsi", "Tancuri"), bucketId: "new" },
          { text: L("Schwerter", "Swords", "Kardok", "Săbii"), bucketId: "old" },
        ],
        instruction: k("title"),
      }),
      quiz: "erster_weltkrieg_verlauf",
    },
    {
      title: L("Heimatfront", "Home Front", "Hátország", "Frontul de acasă"),
      text: L("Frauen arbeiteten in Fabriken, während die Bevölkerung Hunger litt.", "Women worked in factories while the population suffered from hunger.", "A nők gyárakban dolgoztak, miközben a lakosság éhezett.", "Femeile lucrau în fabrici în timp ce populația suferea de foame."),
      svg: { type: "geschichte-diagram", name: "FactorySvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Frauen ersetzten die __. Es gab wenig __.", "Women replaced the __. There was little __.", "A nők helyettesítették a __. Kevés volt az __.", "Femeile i-au înlocuit pe __. Era puțină __."),
        gaps: [
          { index: 0, options: [L("Männer", "Men", "férfiakat", "bărbați"), L("Kinder", "Children", "gyerekeket", "copii")], correct: 0 },
          { index: 1, options: [L("Essen", "Food", "étel", "mâncare"), L("Gold", "Gold", "arany", "aur")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "erster_weltkrieg_verlauf",
    },
    {
      title: L("Versailles 1919", "Versailles 1919", "Versailles 1919", "Versailles 1919"),
      text: L("Der Friedensvertrag beendete den Krieg, gab Deutschland aber die alleinige Schuld.", "The peace treaty ended the war but gave Germany sole responsibility.", "A békeszerződés véget vetett a háborúnak, de Németországot tette egyedüli felelőssé.", "Tratatul de pace a pus capăt războiului, dar a dat Germaniei întreaga vină."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Kriegsschuld", "War guilt", "Háborús bűnösség", "Vina de război"), right: L("Paragraph 231", "Art. 231", "231. pont", "Articolul 231") },
          { left: L("Reparationen", "Reparations", "Jóvátétel", "Reparații"), right: L("Zahlungen", "Payments", "Fizetések", "Plăți") },
        ],
        instruction: k("title"),
      }),
      quiz: "erster_weltkrieg_verlauf",
    },
  ],
};

// ─── ISLAND 3: WEIMARER REPUBLIK ───────────────────────────────────────────

const I3: IslandSpec = {
  id: "i3",
  title: L("Weimarer Republik", "Weimar Republic", "Weimari köztársaság", "Republica de la Weimar"),
  topics: [
    {
      title: L("Demokratie", "Democracy", "Demokrácia", "Democrație"),
      text: L("Nach der Revolution 1918 wurde Deutschland erstmals eine Republik.", "After the 1918 revolution, Germany became a republic for the first time.", "Az 1918-as forradalom után Németország először lett köztársaság.", "După revoluția din 1918, Germania a devenit republică pentru prima dată."),
      svg: { type: "geschichte-diagram", name: "WeimarSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Erster Präsident: Friedrich __. Ort: __.", "First President: Friedrich __. Place: __.", "Első elnök: Friedrich __. Hely: __.", "Primul președinte: Friedrich __. Locul: __."),
        gaps: [
          { index: 0, options: ["Ebert", "Hitler", "Kohl"], correct: 0 },
          { index: 1, options: ["Weimar", "Berlin", "Paris"], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "weimarer_republik",
    },
    {
      title: L("Hyperinflation", "Hyperinflation", "Hiperinfláció", "Hiperinflație"),
      text: L("1923 verlor das Geld völlig an Wert. Brot kostete Milliarden von Mark.", "In 1923, money lost all its value. Bread cost billions of marks.", "1923-ban a pénz teljesen elértéktelenedett. Egy kenyér milliárdokba került.", "În 1923, banii și-au pierdut complet valoarea. Pâinea costa miliarde de mărci."),
      svg: { type: "geschichte-diagram", name: "ShieldSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("1923", "1923", "1923", "1923"), right: L("Inflation", "Inflation", "Infláció", "Inflație") },
          { left: L("Rentenmark", "Rentenmark", "Rentenmark", "Rentenmark"), right: L("Rettung", "Rescue", "Mentőöv", "Salvare") },
        ],
        instruction: k("title"),
      }),
      quiz: "weimarer_republik",
    },
    {
      title: L("Goldene 20er", "Golden Twenties", "Arany húszas évek", "Anii '20 de aur"),
      text: L("Eine kurze Zeit der wirtschaftlichen Erholung und kulturellen Blüte.", "A short period of economic recovery and cultural flourish.", "A gazdasági fellendülés és a kulturális virágzás rövid időszaka.", "O scurtă perioadă de redresare economică și înflorire culturală."),
      svg: { type: "geschichte-diagram", name: "PeaceDoveSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "art", label: L("Kultur", "Culture", "Kultúra", "Cultură") },
          { id: "pol", label: L("Politik", "Politics", "Politika", "Politică") },
        ],
        items: [
          { text: L("Jazz", "Jazz", "Jazz", "Jazz"), bucketId: "art" },
          { text: L("Kino", "Cinema", "Mozi", "Cinema"), bucketId: "art" },
          { text: L("Verträge", "Treaties", "Szerződések", "Tratate"), bucketId: "pol" },
        ],
        instruction: k("title"),
      }),
      quiz: "weimarer_republik",
    },
    {
      title: L("Börsenkrach 1929", "Stock Market Crash", "Tőzsdekrach", "Crahul bursier"),
      text: L("Der Absturz der Kurse in New York löste eine Weltwirtschaftskrise aus.", "The crash of prices in New York triggered a global economic crisis.", "A New York-i árfolyamok összeomlása gazdasági világválságot robbantott ki.", "Căderea cotațiilor la New York a declanșat o criză economică mondială."),
      svg: { type: "geschichte-diagram", name: "ColumnSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Tag: Schwarzer __. Folge: __.", "Day: Black __. Result: __.", "Nap: Fekete __. Következmény: __.", "Ziua: __ neagră. Rezultat: __."),
        gaps: [
          { index: 0, options: [L("Donnerstag", "Thursday", "csütörtök", "joi"), L("Montag", "Monday", "hétfő", "luni")], correct: 0 },
          { index: 1, options: [L("Arbeitslosigkeit", "Unemployment", "munkanélküliség", "șomaj"), L("Reichtum", "Wealth", "gazdagság", "bogăție")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "weimarer_republik",
    },
    {
      title: L("Das Ende", "The End", "A vég", "Sfârșitul"),
      text: L("Politische Instabilität und Not führten zum Untergang der Republik.", "Political instability and hardship led to the demise of the republic.", "A politikai instabilitás és a nyomor a köztársaság bukásához vezetett.", "Instabilitatea politică și suferința au dus la dispariția republicii."),
      svg: { type: "geschichte-diagram", name: "PyramidSvg" },
      interactive: (k) => ({
        type: "word-order",
        words: [L("Krise", "Crisis", "Válság", "Criză"), L("Radikalisierung", "Radicalization", "Radikalizálódás", "Radicalizare"), L("Diktatur", "Dictatorship", "Diktatúra", "Dictatură")],
        instruction: L("Weg in den Abgrund", "Path to the abyss", "Út a szakadékba", "Drumul spre abis"),
      }),
      quiz: "weimarer_republik",
    },
  ],
};

// ─── ISLAND 4: NS-AUFSTIEG ───────────────────────────────────────────────────

const I4: IslandSpec = {
  id: "i4",
  title: L("NS-Aufstieg", "Rise of National Socialism", "A náci hatalomátvétel", "Ascensiunea nazismului"),
  topics: [
    {
      title: L("Machtergreifung", "Seizure of Power", "Hatalomátvétel", "Preluarea puterii"),
      text: L("Am 30. Januar 1933 wurde Adolf Hitler zum Reichskanzler ernannt. Kurz darauf wurde die Demokratie abgeschafft.", "On January 30, 1933, Adolf Hitler was appointed Reich Chancellor. Shortly after, democracy was abolished.", "1933. január 30-án Adolf Hitlert kinevezték birodalmi kancellárrá. Röviddel ezután felszámolták a demokráciát.", "La 30 ianuarie 1933, Adolf Hitler a fost numit cancelar al Reich-ului. La scurt timp după aceea, democrația a fost abolită."),
      svg: { type: "geschichte-diagram", name: "NapoleonSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Hitler wurde am 30. __ 1933 Kanzler. Das Parlament verlor die __.", "Hitler became Chancellor on Jan __, 1933. Parliament lost its __.", "Hitler 1933. __ 30-án lett kancellár. A parlament elvesztette __.", "Hitler a devenit cancelar pe 30 __ 1933. Parlamentul și-a pierdut __."),
        gaps: [
          { index: 0, options: ["Januar", "März", "Mai"], correct: 0 },
          { index: 1, options: [L("Macht", "Power", "hatalmát", "puterea"), L("Gebäude", "Building", "épületét", "clădirea")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "ns_machtuebernahme",
    },
    {
      title: L("Reichstagsbrand", "Reichstag Fire", "A Reichstag felégetése", "Incendierea Reichstagului"),
      text: L("Der Brand des Parlamentsgebäudes diente als Vorwand, um Grundrechte außer Kraft zu setzen.", "The burning of the parliament building served as a pretext to suspend basic rights.", "A parlament épületének felgyújtása ürügyként szolgált az alapjogok felfüggesztésére.", "Incendierea clădirii parlamentului a servit drept pretext pentru suspendarea drepturilor fundamentale."),
      svg: { type: "geschichte-diagram", name: "ReichstagSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Februar 1933", "February 1933", "1933. február", "Februarie 1933"), right: L("Reichstagsbrand", "Reichstag Fire", "Reichstag-tűz", "Incendierea Reichstagului") },
          { left: L("Notverordnung", "Emergency Decree", "Kényszerrendelet", "Decret de urgență"), right: L("Grundrechte weg", "Rights gone", "Jogok vége", "Drepturi anulate") },
        ],
        instruction: k("title"),
      }),
      quiz: "ns_machtuebernahme",
    },
    {
      title: L("NS-Ideologie", "NS Ideology", "Náci ideológia", "Ideologia nazistă"),
      text: L("Rassismus, Antisemitismus und das Streben nach Lebensraum im Osten waren die Kernpunkte.", "Racism, antisemitism, and the quest for living space in the East were core points.", "A rasszizmus, az antiszemitizmus és a keleti élettér keresése voltak a legfőbb pontok.", "Rasismul, antisemitismul și căutarea spațiului vital în Est au fost punctele centrale."),
      svg: { type: "geschichte-diagram", name: "PyramidSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "ide", label: L("Ideologie", "Ideology", "Ideológia", "Ideologie") },
          { id: "oth", label: L("Anderes", "Other", "Más", "Altele") },
        ],
        items: [
          { text: L("Herrenrasse", "Master race", "Felsőbbrendű faj", "Rasa superioară"), bucketId: "ide" },
          { text: L("Antisemitismus", "Antisemitism", "Antiszemitizmus", "Antisemitism"), bucketId: "ide" },
          { text: L("Gleichheit", "Equality", "Egyenlőség", "Egalitate"), bucketId: "oth" },
        ],
        instruction: k("title"),
      }),
      quiz: "ns_ideologie",
    },
    {
      title: L("Propaganda", "Propaganda", "Propaganda", "Propaganda"),
      text: L("Joseph Goebbels kontrollierte die Medien und inszenierte Hitler als unfehlbaren Führer.", "Joseph Goebbels controlled the media and staged Hitler as an infallible leader.", "Joseph Goebbels irányította a médiát, és Hitlert tévedhetetlen vezérként állította be.", "Joseph Goebbels a controlat mass-media și l-a prezentat pe Hitler ca pe un lider infailibil."),
      svg: { type: "geschichte-diagram", name: "RevolutionSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Wichtigstes Medium: __. Minister: __.", "Most important medium: __. Minister: __.", "Legfontosabb eszköz: __. Miniszter: __.", "Cel mai important mediu: __. Ministru: __."),
        gaps: [
          { index: 0, options: [L("Radio", "Radio", "rádió", "radio"), L("Internet", "Internet", "internet", "internet")], correct: 0 },
          { index: 1, options: ["Goebbels", "Bismarck", "Adenauer"], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "ns_propaganda",
    },
    {
      title: L("Gleichschaltung", "Gleichschaltung", "Egyenirányítás", "Sincronizarea"),
      text: L("Alle Bereiche des Lebens (Vereine, Schulen, Ämter) wurden dem NS-Staat untergeordnet.", "All areas of life (clubs, schools, offices) were subordinated to the NS state.", "Az élet minden területét (egyesületek, iskolák, hivatalok) a náci állam alá rendelték.", "Toate domeniile vieții (cluburi, școli, birouri) au fost subordonate statului nazist."),
      svg: { type: "geschichte-diagram", name: "ColumnSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Hitlerjugend", "Hitler Youth", "Hitlerjugend", "Tineretul hitlerist"), right: L("Jugend", "Youth", "Ifjúság", "Tineret") },
          { left: L("Einheitspartei", "Single Party", "Egységpárt", "Partid unic"), right: L("NSDAP", "NSDAP", "NSDAP", "NSDAP") },
        ],
        instruction: k("title"),
      }),
      quiz: "ns_machtuebernahme",
    },
  ],
};

// ─── ISLAND 5: ZWEITER WELTKRIEG ──────────────────────────────────────────────

const I5: IslandSpec = {
  id: "i5",
  title: L("Zweiter Weltkrieg", "World War II", "II. világháború", "Al Doilea Război Mondial"),
  topics: [
    {
      title: L("Kriegsbeginn 1939", "Outbreak 1939", "A háború kezdete", "Începutul războiului"),
      text: L("Mit dem Überfall auf Polen begann am 1. September 1939 der blutigste Krieg der Geschichte.", "The bloodiest war in history began with the invasion of Poland on September 1, 1939.", "Lengyelország lerohanásával 1939. szeptember 1-jén kezdődött a történelem legvéresebb háborúja.", "Odată cu invadarea Poloniei la 1 septembrie 1939, a început cel mai sângeros război din istorie."),
      svg: { type: "geschichte-diagram", name: "TrenchSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Datum: 1. __ 1939. Land: __.", "Date: Sep 1, 1939. Country: __.", "Dátum: 1939. szeptember 1. Ország: __.", "Data: 1 septembrie 1939. Țara: __."),
        gaps: [
          { index: 0, options: ["September", "August", "Oktober"], correct: 0 },
          { index: 1, options: [L("Polen", "Poland", "Lengyelország", "Polonia"), L("Russland", "Russia", "Oroszország", "Rusia")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "zweiter_weltkrieg",
    },
    {
      title: L("Blitzkrieg", "Blitzkrieg", "Villámháború", "Război fulger"),
      text: L("In den ersten Jahren erzielte die deutsche Wehrmacht schnelle Siege durch Panzer und Luftwaffe.", "In the early years, the German Wehrmacht achieved rapid victories through tanks and air force.", "Az első években a német hadsereg gyors győzelmeket aratott páncélosok és a légierő segítségével.", "În primii ani, Wehrmacht-ul german a obținut victorii rapide prin tancuri și forțele aeriene."),
      svg: { type: "geschichte-diagram", name: "SteamEngineSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Panzer", "Tanks", "Páncélosok", "Tancuri"), right: L("Schnelligkeit", "Speed", "Gyorsaság", "Viteză") },
          { left: L("Luftwaffe", "Air Force", "Légierő", "Forțe aeriene"), right: L("Angriff", "Attack", "Támadás", "Atac") },
        ],
        instruction: k("title"),
      }),
      quiz: "zweiter_weltkrieg",
    },
    {
      title: L("Stalingrad", "Stalingrad", "Sztálingrád", "Stalingrad"),
      text: L("Die Schlacht von Stalingrad (1942/43) markierte den entscheidenden Wendepunkt des Krieges.", "The Battle of Stalingrad (1942/43) marked the decisive turning point of the war.", "A sztálingrádi csata (1942/43) jelentette a háború döntő fordulatpontját.", "Bătălia de la Stalingrad (1942/43) a marcat punctul de cotitură decisiv al războiului."),
      svg: { type: "geschichte-diagram", name: "TrenchSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Der Wendepunkt war im __. Die 6. Armee __.", "The turning point was in the __. The 6th Army __.", "A fordulat __ volt. A 6. hadsereg __.", "Punctul de cotitură a fost în __. Armata a 6-a __."),
        gaps: [
          { index: 0, options: ["Osten", "Westen", "Süden"], correct: 0 },
          { index: 1, options: [L("kapitulierte", "surrendered", "megadta magát", "a capitulat"), L("siegte", "won", "győzött", "a câștigat")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "zweiter_weltkrieg",
    },
    {
      title: L("Widerstand", "Resistance", "Ellenállás", "Rezistența"),
      text: L("Menschen wie die Geschwister Scholl oder Stauffenberg kämpften mutig gegen Hitler.", "People like the Scholl siblings or Stauffenberg fought courageously against Hitler.", "Olyan emberek, mint a Scholl testvérek vagy Stauffenberg, bátran küzdöttek Hitler ellen.", "Oameni precum frații Scholl sau Stauffenberg au luptat cu curaj împotriva lui Hitler."),
      svg: { type: "geschichte-diagram", name: "KnightSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Weiße Rose", "White Rose", "Fehér Rózsa", "Trandafirul Alb"), right: L("Flugblätter", "Leaflets", "Röplapok", "Manifeste") },
          { left: L("20. Juli 1944", "July 20, 1944", "1944. júl. 20.", "20 iulie 1944"), right: L("Attentat", "Assassination", "Merénylet", "Atentat") },
        ],
        instruction: k("title"),
      }),
      quiz: "widerstand_ns",
    },
    {
      title: L("Kapitulation 1945", "Surrender 1945", "Kapituláció 1945", "Capitularea 1945"),
      text: L("Am 8. Mai 1945 endete der Krieg in Europa mit der bedingungslosen Kapitulation Deutschlands.", "On May 8, 1945, the war in Europe ended with Germany's unconditional surrender.", "1945. május 8-án Európában véget ért a háború Németország feltétel nélküli megadásával.", "La 8 mai 1945, războiul în Europa s-a încheiat cu capitularea necondiționată a Germaniei."),
      svg: { type: "geschichte-diagram", name: "PeaceDoveSvg" },
      interactive: (k) => ({
        type: "word-order",
        words: ["1939", "1941", "1944", "1945"],
        instruction: L("Ordne die Kriegsjahre", "Order the war years", "Rendezd a háborús éveket", "Ordonează anii de război"),
      }),
      quiz: "zweiter_weltkrieg",
    },
  ],
};

// ─── ISLAND 6: HOLOCAUST ─────────────────────────────────────────────────────

const I6: IslandSpec = {
  id: "i6",
  title: L("Holocaust / Shoah", "Holocaust / Shoah", "Holokauszt / Soá", "Holocaust / Shoah"),
  topics: [
    {
      title: L("Nürnberger Gesetze", "Nuremberg Laws", "Nürnbergi törvények", "Legile de la Nürnberg"),
      text: L("1935 wurden Juden durch Rassengesetze ausgegrenzt und ihrer Rechte beraubt.", "In 1935, Jews were marginalized and deprived of their rights through racial laws.", "1935-ben a zsidókat faji törvényekkel kirekesztették és megfosztották jogaiktól.", "În 1935, evreii au fost marginalizați și privați de drepturile lor prin legile rasiale."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Die Gesetze waren von __. Juden verloren die __.", "The laws were from __. Jews lost their __.", "A törvények __-ból származnak. A zsidók elvesztették az __.", "Legile au fost din __. Evreii și-au pierdut __."),
        gaps: [
          { index: 0, options: ["1935", "1914", "1945"], correct: 0 },
          { index: 1, options: [L("Staatsbürgerschaft", "Citizenship", "állampolgárságukat", "cetățenia"), L("Häuser", "Houses", "házaikat", "casele")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "holocaust",
    },
    {
      title: L("Pogromnacht", "Pogrom Night", "Kristályéjszaka", "Noaptea Pogromului"),
      text: L("Am 9. November 1938 wurden jüdische Geschäfte zerstört und Synagogen in Brand gesetzt.", "On November 9, 1938, Jewish shops were destroyed and synagogues set on fire.", "1938. november 9-én zsidó üzleteket romboltak le és zsinagógákat gyújtottak fel.", "La 9 noiembrie 1938, magazinele evreiești au fost distruse și sinagogile incendiate."),
      svg: { type: "geschichte-diagram", name: "BastilleSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("9. November", "Nov 9", "Nov. 9.", "9 noiembrie"), right: L("1938", "1938", "1938", "1938") },
          { left: L("Synagogen", "Synagogues", "Zsinagógák", "Sinagogi"), right: L("Brand", "Fire", "Tűz", "Foc") },
        ],
        instruction: k("title"),
      }),
      quiz: "holocaust",
    },
    {
      title: L("Wannsee-Konferenz", "Wannsee Conference", "Wannseei konferencia", "Conferința de la Wannsee"),
      text: L("1942 planten NS-Funktionäre die systematische Ermordung aller europäischen Juden.", "In 1942, NS officials planned the systematic murder of all European Jews.", "1942-ben a náci tisztviselők megtervezték az összes európai zsidó szisztematikus kiirtását.", "În 1942, oficialii naziști au planificat uciderea sistematică a tuturor evreilor europeni."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Ort: __ am Wannsee. Ziel: __.", "Place: __ at Wannsee. Goal: __.", "Hely: __ a Wannsee-nál. Cél: __.", "Locul: __ la Wannsee. Scop: __."),
        gaps: [
          { index: 0, options: ["Villa", "Schloss", "Burg"], correct: 0 },
          { index: 1, options: [L("Völkermord", "Genocide", "Népirtás", "Genocid"), L("Frieden", "Peace", "Béke", "Pace")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "holocaust",
    },
    {
      title: L("Auschwitz", "Auschwitz", "Auschwitz", "Auschwitz"),
      text: L("Im größten Vernichtungslager wurden über eine Million Menschen ermordet.", "In the largest extermination camp, over a million people were murdered.", "A legnagyobb megsemmisítő táborban több mint egymillió embert gyilkoltak meg.", "În cel mai mare lagăr de exterminare, peste un milion de oameni au fost uciși."),
      svg: { type: "geschichte-diagram", name: "TrenchSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "cam", label: L("Lager", "Camp", "Tábor", "Lagăr") },
          { id: "vic", label: L("Opfer", "Victims", "Áldozatok", "Victime") },
        ],
        items: [
          { text: L("Gaskammern", "Gas chambers", "Gázkamrák", "Camere de gazare"), bucketId: "cam" },
          { text: L("Juden", "Jews", "Zsidók", "Evrei"), bucketId: "vic" },
          { text: L("Sinti & Roma", "Sinti & Roma", "Sintik és romák", "Sinti și romi"), bucketId: "vic" },
        ],
        instruction: k("title"),
      }),
      quiz: "holocaust",
    },
    {
      title: L("Anne Frank", "Anne Frank", "Anne Frank", "Anne Frank"),
      text: L("Ihr Tagebuch wurde zum Symbol für das Schicksal der verfolgten Juden.", "Her diary became a symbol of the fate of the persecuted Jews.", "Naplója az üldözött zsidók sorsának jelképévé vált.", "Jurnalul ei a devenit un simbol al sorții evreilor persecutați."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Anne Frank schrieb ein __. Sie lebte in __.", "Anne Frank wrote a __. She lived in __.", "Anne Frank egy __-t írt. __-ban élt.", "Anne Frank a scris un __. Ea a trăit în __."),
        gaps: [
          { index: 0, options: [L("Tagebuch", "Diary", "naplót", "jurnal"), L("Lied", "Song", "dalt", "cântec")], correct: 0 },
          { index: 1, options: ["Amsterdam", "Berlin", "Paris"], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "holocaust",
    },
  ],
};
// ─── ISLAND 7: KALTER KRIEG ──────────────────────────────────────────────────

const I7: IslandSpec = {
  id: "i7",
  title: L("Der Kalte Krieg", "The Cold War", "A hidegháború", "Războiul Rece"),
  topics: [
    {
      title: L("Eiserner Vorhang", "Iron Curtain", "Vasfüggöny", "Cortina de fier"),
      text: L("Churchills Metapher für die Teilung Europas in einen westlichen und einen östlichen Block.", "Churchill's metaphor for the division of Europe into a Western and an Eastern block.", "Churchill metaforája Európa nyugati és keleti blokkra való felosztására.", "Metafora lui Churchill pentru divizarea Europei într-un bloc vestic și unul estic."),
      svg: { type: "geschichte-diagram", name: "BerlinWallSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Westen", "West", "Nyugat", "Vest"), right: L("Demokratie", "Democracy", "Demokrácia", "Democrație") },
          { left: L("Osten", "East", "Kelet", "Est"), right: L("Kommunismus", "Communism", "Kommunizmus", "Comunism") },
        ],
        instruction: k("title"),
      }),
      quiz: "kalter_krieg",
    },
    {
      title: L("NATO & Warschauer Pakt", "NATO & Warsaw Pact", "NATO és Varsói Szerződés", "NATO și Pactul de la Varșovia"),
      text: L("Die beiden Militärbündnisse standen sich jahrzehntelang schwer bewaffnet gegenüber.", "The two military alliances faced each other heavily armed for decades.", "A két katonai szövetség évtizedekig állt egymással szemben állig felfegyverkezve.", "Cele două alianțe militare s-au confruntat timp de decenii, fiind puternic înarmate."),
      svg: { type: "geschichte-diagram", name: "ShieldSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "west", label: L("Westen (NATO)", "West", "Nyugat", "Vest") },
          { id: "east", label: L("Osten (Pakt)", "East", "Kelet", "Est") },
        ],
        items: [
          { text: "USA", bucketId: "west" },
          { text: "BRD", bucketId: "west" },
          { text: "UdSSR", bucketId: "east" },
          { text: "DDR", bucketId: "east" },
        ],
        instruction: k("title"),
      }),
      quiz: "kalter_krieg",
    },
    {
      title: L("Mauerbau 1961", "Berlin Wall 1961", "A fal felépítése", "Construirea Zidului"),
      text: L("Um die Fluchtbewegung zu stoppen, baute die DDR die Berliner Mauer.", "To stop the wave of escapees, the GDR built the Berlin Wall.", "A menekülthullám megállítására az NDK felépítette a berlini falat.", "Pentru a opri valul de refugiați, RDG a construit Zidul Berlinului."),
      svg: { type: "geschichte-diagram", name: "BerlinWallSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Baubeginn: 13. __ 1961. Stadt: __.", "Start: Aug 13, 1961. City: __.", "Építés kezdete: 1961. augusztus 13. Város: __.", "Începutul construcției: 13 __ 1961. Orașul: __."),
        gaps: [
          { index: 0, options: ["August", "Juni", "Oktober"], correct: 0 },
          { index: 1, options: ["Berlin", "Bonn", "Prag"], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "kalter_krieg",
    },
    {
      title: L("Kuba-Krise 1962", "Cuban Missile Crisis", "Kubai rakétaválság", "Criza rachetelor din Cuba"),
      text: L("Die Stationierung sowjetischer Raketen auf Kuba brachte die Welt an den Rand eines Atomkriegs.", "The deployment of Soviet missiles in Cuba brought the world to the brink of nuclear war.", "A szovjet rakéták kubai telepítése az atomháború szélére sodorta a világot.", "Amplasarea rachetelor sovietice în Cuba a adus lumea în pragul unui război nuclear."),
      svg: { type: "geschichte-diagram", name: "TrenchSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: "USA", right: "Kennedy" },
          { left: "UdSSR", right: "Chruschtschow" },
          { left: "Kuba", right: "Castro" },
        ],
        instruction: k("title"),
      }),
      quiz: "kalter_krieg",
    },
    {
      title: L("Die Stasi", "The Stasi", "A Stasi", "Stasi"),
      text: L("Das Ministerium für Staatssicherheit überwachte die Bürger der DDR lückenlos.", "The Ministry for State Security monitored the citizens of the GDR completely.", "Az Állambiztonsági Minisztérium folyamatosan megfigyelte az NDK állampolgárait.", "Ministerul Securității Statului monitoriza complet cetățenii RDG."),
      svg: { type: "geschichte-diagram", name: "RomanSoldierSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Die Stasi war die __. Sie sammelte __.", "The Stasi was the __. It collected __.", "A Stasi volt a __. __ gyűjtött.", "Stasi a fost __. Colecta __."),
        gaps: [
          { index: 0, options: [L("Geheimpolizei", "Secret Police", "titkosrendőrség", "poliția secretă"), L("Feuerwehr", "Fire Dept", "tűzoltóság", "pompierii")], correct: 0 },
          { index: 1, options: [L("Informationen", "Information", "információkat", "informații"), L("Briefmarken", "Stamps", "bélyegeket", "timbre")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "kalter_krieg",
    },
  ],
};

// ─── ISLAND 8: WIEDERVEREINIGUNG ─────────────────────────────────────────────

const I8: IslandSpec = {
  id: "i8",
  title: L("Wiedervereinigung", "German Reunification", "Újraegyesítés", "Reunificarea"),
  topics: [
    {
      title: L("Gorbatschow", "Gorbachev", "Gorbacsov", "Gorbaciov"),
      text: L("Mit Glasnost und Perestroika leitete er das Ende des Kalten Krieges ein.", "With Glasnost and Perestroika, he initiated the end of the Cold War.", "Glasznoszttyal és peresztrojkával elindította a hidegháború végét.", "Cu Glasnost și Perestroika, el a inițiat sfârșitul Războiului Rece."),
      svg: { type: "geschichte-diagram", name: "PeaceDoveSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: "Glasnost", right: L("Offenheit", "Openness", "Nyíltság", "Deschidere") },
          { left: "Perestroika", right: L("Umbau", "Restructuring", "Átalakítás", "Restructurare") },
        ],
        instruction: k("title"),
      }),
      quiz: "wiedervereinigung",
    },
    {
      title: L("Montagsdemos", "Monday Demonstrations", "Hétfői tüntetések", "Demonstrațiile de luni"),
      text: L("In Leipzig und anderen Städten protestierten die Menschen friedlich: 'Wir sind das Volk!'", "In Leipzig and other cities, people protested peacefully: 'We are the people!'", "Lipcsében és más városokban az emberek békésen tüntettek: „Mi vagyunk a nép!”", "În Leipzig și în alte orașe, oamenii au protestat pașnic: „Noi suntem poporul!”"),
      svg: { type: "geschichte-diagram", name: "RevolutionSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Stadt: __. Parole: Wir sind das __!", "City: __. Slogan: We are the __!", "Város: __. Jelszó: Mi vagyunk a __!", "Orașul: __. Slogan: Noi suntem __!"),
        gaps: [
          { index: 0, options: ["Leipzig", "Bonn", "München"], correct: 0 },
          { index: 1, options: [L("Volk", "People", "nép", "poporul"), L("Heer", "Army", "hadsereg", "armata")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "wiedervereinigung",
    },
    {
      title: L("Mauerfall 1989", "Fall of the Wall", "A fal leomlása", "Căderea Zidului"),
      text: L("Am 9. November 1989 öffnete sich die Grenze zwischen Ost- und West-Berlin.", "On November 9, 1989, the border between East and West Berlin opened.", "1989. november 9-én megnyílt a határ Kelet- és Nyugat-Berlin között.", "La 9 noiembrie 1989, granița dintre Berlinul de Est și cel de Vest s-a deschis."),
      svg: { type: "geschichte-diagram", name: "BerlinWallSvg" },
      interactive: (k) => ({
        type: "word-order",
        words: ["9. Nov 1989", "1. Juli 1990", "3. Okt 1990"],
        instruction: L("Ordne die Schritte zur Einheit", "Order the steps to unity", "Rendezd az egység felé vezető lépéseket", "Ordonează pașii către unitate"),
      }),
      quiz: "wiedervereinigung",
    },
    {
      title: L("3. Oktober 1990", "October 3, 1990", "1990. október 3.", "3 octombrie 1990"),
      text: L("Der Tag der Deutschen Einheit markiert den offiziellen Beitritt der DDR zur Bundesrepublik.", "The Day of German Unity marks the official accession of the GDR to the Federal Republic.", "A német egység napja az NDK hivatalos csatlakozását jelenti a Szövetségi Köztársasághoz.", "Ziua Unității Germane marchează aderarea oficială a RDG la Republica Federală."),
      svg: { type: "geschichte-diagram", name: "CrownSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Staatsform: __. Bundeskanzler: __.", "State form: __. Chancellor: __.", "Államforma: __. Kancellár: __.", "Forma de stat: __. Cancelar: __."),
        gaps: [
          { index: 0, options: [L("Einheit", "Unity", "Egység", "Unitate"), L("Teilung", "Division", "Megosztottság", "Divizare")], correct: 0 },
          { index: 1, options: ["Helmut Kohl", "Willy Brandt", "Angela Merkel"], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "wiedervereinigung",
    },
    {
      title: L("Zwei-plus-Vier", "Two-plus-Four", "Kettő plusz négy", "Doi plus Patru"),
      text: L("Der Vertrag zwischen den deutschen Staaten und den Siegermächten regelte die volle Souveränität.", "The treaty between the German states and the winning powers regulated full sovereignty.", "A német államok és a győztes hatalmak közötti szerződés rendezte a teljes szuverenitást.", "Tratatul dintre statele germane și puterile învingătoare a reglementat suveranitatea deplină."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: "2", right: L("Deutsche Staaten", "German states", "Német államok", "Statele germane") },
          { left: "4", right: L("Siegermächte", "Winning powers", "Győztes hatalmak", "Puterile învingătoare") },
        ],
        instruction: k("title"),
      }),
      quiz: "wiedervereinigung",
    },
  ],
};

// ─── ISLAND 9: EUROPÄISCHE EINIGUNG ──────────────────────────────────────────

const I9: IslandSpec = {
  id: "i9",
  title: L("Europäische Einigung", "European Integration", "Európai egység", "Integrarea europeană"),
  topics: [
    {
      title: L("Friedensprojekt", "Peace Project", "Békeprojekt", "Proiect de pace"),
      text: L("Nach zwei Weltkriegen war das Ziel ein dauerhafter Frieden durch Zusammenarbeit.", "After two world wars, the goal was a lasting peace through cooperation.", "Két világháború után a cél a tartós béke volt az együttműködés révén.", "După două războaie mondiale, scopul a fost o pace durabilă prin cooperare."),
      svg: { type: "geschichte-diagram", name: "PeaceDoveSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Krieg", "War", "Háború", "Război"), right: L("Vergangenheit", "Past", "Múlt", "Trecut") },
          { left: L("Frieden", "Peace", "Béke", "Pace"), right: L("Zukunft", "Future", "Jövő", "Viitor") },
        ],
        instruction: k("title"),
      }),
      quiz: "europa_einigung",
    },
    {
      title: L("Robert Schuman", "Robert Schuman", "Robert Schuman", "Robert Schuman"),
      text: L("Sein Plan von 1950 zur Kontrolle der Kohle- und Stahlproduktion war der Grundstein der EU.", "His 1950 plan to control coal and steel production was the cornerstone of the EU.", "1950-es terve a szén- és acéltermelés ellenőrzésére az EU alapköve volt.", "Planul său din 1950 pentru controlul producției de cărbune și oțel a fost piatra de temelie a UE."),
      svg: { type: "geschichte-diagram", name: "FactorySvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Schuman-Plan: Kohle und __. Jahr: __.", "Schuman Plan: Coal and __. Year: __.", "Schuman-terv: Szén és __. Év: __.", "Planul Schuman: Cărbune și __. An: __."),
        gaps: [
          { index: 0, options: [L("Stahl", "Steel", "acél", "oțel"), L("Gold", "Gold", "arany", "aur")], correct: 0 },
          { index: 1, options: ["1950", "1914", "1990"], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "europa_einigung",
    },
    {
      title: L("EWG 1957", "EEC 1957", "EGK 1957", "CEE 1957"),
      text: L("In den Römischen Verträgen wurde die Europäische Wirtschaftsgemeinschaft gegründet.", "The European Economic Community was founded in the Treaties of Rome.", "A Római Szerződésekben megalapították az Európai Gazdasági Közösséget.", "În Tratatele de la Roma a fost fondată Comunitatea Economică Europeană."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Rom", "Rome", "Róma", "Roma"), right: L("Verträge", "Treaties", "Szerződések", "Tratate") },
          { left: L("Wirtschaft", "Economy", "Gazdaság", "Economie"), right: L("Gemeinschaft", "Community", "Közösség", "Comunitate") },
        ],
        instruction: k("title"),
      }),
      quiz: "europa_einigung",
    },
    {
      title: L("Die EU", "The EU", "Az EU", "UE"),
      text: L("Der Vertrag von Maastricht (1992) machte aus der Gemeinschaft die Europäische Union.", "The Treaty of Maastricht (1992) turned the community into the European Union.", "A Maastrichti Szerződés (1992) alakította át a közösséget Európai Unióvá.", "Tratatul de la Maastricht (1992) a transformat comunitatea în Uniunea Europeană."),
      svg: { type: "geschichte-diagram", name: "EUFlagSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Name: __ Union. Sitz: __.", "Name: __ Union. Seat: __.", "Név: Európai __. Székhely: __.", "Numele: Uniunea __. Sediul: __."),
        gaps: [
          { index: 0, options: ["Europäische", "Deutsche", "Amerikanische"], correct: 0 },
          { index: 1, options: ["Brüssel", "Berlin", "London"], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "europa_einigung",
    },
    {
      title: L("Der Euro", "The Euro", "Az Euró", "Euro"),
      text: L("Seit 2002 ist der Euro das gemeinsame Bargeld in vielen Ländern der EU.", "Since 2002, the Euro has been the common cash in many EU countries.", "2002 óta az euró a közös készpénz az EU számos országában.", "Din 2002, Euro este moneda comună în multe țări din UE."),
      svg: { type: "geschichte-diagram", name: "EUFlagSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: "Euro", right: L("Währung", "Currency", "Pénznem", "Monedă") },
          { left: "2002", right: L("Bargeld", "Cash", "Készpénz", "Numerar") },
        ],
        instruction: k("title"),
      }),
      quiz: "europa_einigung",
    },
  ],
};

const islands = [I1, I2, I3, I4, I5, I6, I7, I8, I9];
const built = islands.map(buildIsland);

export const GESCHICHTE_K8_I1_LABELS = built[0].labels;
export const GESCHICHTE_K8_I1_POOL = built[0].pool;
export const GESCHICHTE_K8_I2_LABELS = built[1].labels;
export const GESCHICHTE_K8_I2_POOL = built[1].pool;
export const GESCHICHTE_K8_I3_LABELS = built[2].labels;
export const GESCHICHTE_K8_I3_POOL = built[2].pool;
export const GESCHICHTE_K8_I4_LABELS = built[3].labels;
export const GESCHICHTE_K8_I4_POOL = built[3].pool;
export const GESCHICHTE_K8_I5_LABELS = built[4].labels;
export const GESCHICHTE_K8_I5_POOL = built[4].pool;
export const GESCHICHTE_K8_I6_LABELS = built[5].labels;
export const GESCHICHTE_K8_I6_POOL = built[5].pool;
export const GESCHICHTE_K8_I7_LABELS = built[6].labels;
export const GESCHICHTE_K8_I7_POOL = built[6].pool;
export const GESCHICHTE_K8_I8_LABELS = built[7].labels;
export const GESCHICHTE_K8_I8_POOL = built[7].pool;
export const GESCHICHTE_K8_I9_LABELS = built[8].labels;
export const GESCHICHTE_K8_I9_POOL = built[8].pool;
