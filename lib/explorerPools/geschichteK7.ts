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

// ─── ISLAND 1: ABSOLUTISMUS ───────────────────────────────────────────────

const I1: IslandSpec = {
  id: "i1",
  title: L("Der Absolutismus", "Absolutism", "Az abszolutizmus", "Absolutismul"),
  topics: [
    {
      title: L("Ludwig XIV.", "Louis XIV", "XIV. Lajos", "Ludovic al XIV-lea"),
      text: L("Der 'Sonnenkönig' herrschte uneingeschränkt über Frankreich. Er sah sich als Stellvertreter Gottes auf Erden.", "The 'Sun King' ruled over France with absolute power. He saw himself as God's representative on Earth.", "A „Napkirály” korlátlan hatalommal uralkodott Franciaország felett. Isten földi helytartójának tekintette magát.", "„Regele Soare” a guvernat Franța cu putere absolută. El s-a considerat reprezentantul lui Dumnezeu pe pământ."),
      svg: { type: "geschichte-diagram", name: "NapoleonSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("L'état, c'est moi", "I am the state", "Az állam én vagyok", "Statul sunt eu"), right: L("Leitsatz", "Motto", "Jelszó", "Deviză") },
          { left: L("Sonne", "Sun", "Nap", "Soare"), right: L("Symbol", "Symbol", "Szimbólum", "Simbol") },
        ],
        instruction: k("title"),
      }),
      quiz: "absolutismus_frankreich",
    },
    {
      title: L("Schloss Versailles", "Palace of Versailles", "Versailles-i kastély", "Palatul Versailles"),
      text: L("Das prächtige Schloss war das Zentrum der Macht und Vorbild für ganz Europa.", "The magnificent palace was the center of power and a model for all of Europe.", "A pompás kastély a hatalom központja és Európa-szerte mintakép volt.", "Mărețul palat a fost centrul puterii și un model pentru întreaga Europă."),
      svg: { type: "geschichte-diagram", name: "VersaillesSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Das Schloss liegt bei __. Es hat einen großen __.", "The palace is located near __. It has a large __.", "A kastély __ közelében fekszik. Van egy nagy __.", "Palatul este situat lângă __. Are un __ mare."),
        gaps: [
          { index: 0, options: [L("Paris", "Paris", "Párizs", "Paris"), L("Berlin", "Berlin", "Berlin", "Berlin")], correct: 0 },
          { index: 1, options: [L("Park", "Park", "Park", "Parc"), L("Wald", "Forest", "Erdő", "Pădure")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "versailler_hofleben",
    },
    {
      title: L("Ständegesellschaft", "Estate Society", "Rendi társadalom", "Societatea stărilor"),
      text: L("Die Gesellschaft war in drei Stände geteilt: Klerus, Adel und der Dritte Stand (Bauern und Bürger).", "Society was divided into three estates: clergy, nobility, and the Third Estate (peasants and citizens).", "A társadalom három rendre oszlott: papság, nemesség és a harmadik rend (parasztok és polgárok).", "Societatea era împărțită în trei stări: clerul, nobilimea și Starea a Treia (țăranii și cetățenii)."),
      svg: { type: "geschichte-diagram", name: "PyramidSvg" },
      interactive: (k) => ({
        type: "word-order",
        words: [L("Klerus", "Clergy", "Papság", "Cler"), L("Adel", "Nobility", "Nemesség", "Nobilime"), L("Dritter Stand", "Third Estate", "Harmadik rend", "Starea a Treia")],
        instruction: L("Ordne die Stände (1. bis 3.)", "Order the estates (1st to 3rd)", "Rendezd a rendeket (1.-3.)", "Ordonează stările (1-3)"),
      }),
      quiz: "ursachen_franz_rev",
    },
    {
      title: L("Merkantilismus", "Mercantilism", "Merkantilizmus", "Mercantilism"),
      text: L("Dieses Wirtschaftssystem zielte darauf ab, durch Exporte möglichst viel Gold ins Land zu bringen.", "This economic system aimed to bring as much gold as possible into the country through exports.", "Ez a gazdasági rendszer arra törekedett, hogy az export révén a lehető legtöbb aranyat hozza az országba.", "Acest sistem economic viza aducerea a cât mai mult aur în țară prin exporturi."),
      svg: { type: "geschichte-diagram", name: "FactorySvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "exp", label: L("Fördern", "Promote", "Támogatni", "Promovare") },
          { id: "imp", label: L("Hemmen", "Inhibit", "Gátolni", "Inhibare") },
        ],
        items: [
          { text: L("Export", "Export", "Export", "Export"), bucketId: "exp" },
          { text: L("Import", "Import", "Import", "Import"), bucketId: "imp" },
          { text: L("Zölle", "Taxes", "Vámok", "Taxe"), bucketId: "imp" },
        ],
        instruction: k("title"),
      }),
      quiz: "merkantilismus",
    },
    {
      title: L("Säulen der Macht", "Pillars of Power", "A hatalom oszlopai", "Pilonii puterii"),
      text: L("Ludwig XIV. stützte seine Macht auf das Heer, die Beamten, die Kirche und die Justiz.", "Louis XIV based his power on the army, officials, the Church, and the judiciary.", "XIV. Lajos a hadseregre, a tisztviselőkre, az egyházra és az igazságszolgáltatásra alapozta hatalmát.", "Ludovic al XIV-lea și-a bazat puterea pe armată, funcționari, Biserică și justiție."),
      svg: { type: "geschichte-diagram", name: "ColumnSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Heer", "Army", "Hadsereg", "Armată"), right: L("Soldaten", "Soldiers", "Katonák", "Soldați") },
          { left: L("Beamte", "Officials", "Hivatalnokok", "Funcționari"), right: L("Verwaltung", "Admin", "Közigazgatás", "Administrație") },
        ],
        instruction: k("title"),
      }),
      quiz: "absolutismus_frankreich",
    },
  ],
};

// ─── ISLAND 2: DIE AUFKLÄRUNG ──────────────────────────────────────────────

const I2: IslandSpec = {
  id: "i2",
  title: L("Die Aufklärung", "Enlightenment", "A felvilágosodás", "Iluminismul"),
  topics: [
    {
      title: L("Vernunft", "Reason", "Ész", "Rațiune"),
      text: L("Die Aufklärer forderten den Gebrauch des eigenen Verstandes statt blindem Gehorsam.", "The Enlighteners called for the use of one's own intellect instead of blind obedience.", "A felvilágosultak a saját ész használatát követelték a vak engedelmesség helyett.", "Iluminiștii au cerut folosirea propriului intelect în locul obedienței oarbe."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Habe Mut, dich deines eigenen __ zu bedienen!", "Have courage to use your own __!", "Merj a saját __ használni!", "Ai curajul să te folosești de propria __!"),
        gaps: [
          { index: 0, options: [L("Verstandes", "Reason", "Eszét", "Rațiune"), L("Königs", "King", "Királyát", "Rege")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "aufklaerung",
    },
    {
      title: L("Immanuel Kant", "Immanuel Kant", "Immanuel Kant", "Immanuel Kant"),
      text: L("Kant definierte Aufklärung als den 'Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit'.", "Kant defined Enlightenment as 'man's emergence from his self-imposed immaturity'.", "Kant a felvilágosodást úgy határozta meg, mint „az ember kilépése a maga okozta kiskorúságból”.", "Kant a definit Iluminismul drept „ieșirea omului din starea de minorat de care el însuși este vinovat”."),
      svg: { type: "geschichte-diagram", name: "WeimarSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Kant", "Kant", "Kant", "Kant"), right: L("Königsberg", "Königsberg", "Königsberg", "Königsberg") },
          { left: L("Kritik", "Critique", "Kritika", "Critică"), right: L("Vernunft", "Reason", "Ész", "Rațiune") },
        ],
        instruction: k("title"),
      }),
      quiz: "aufklaerung",
    },
    {
      title: L("Gewaltenteilung", "Separation of Powers", "Hatalmi ágak megosztása", "Separația puterilor"),
      text: L("Montesquieu forderte die Trennung der Macht in drei Zweige, um Tyrannei zu verhindern.", "Montesquieu called for the separation of power into three branches to prevent tyranny.", "Montesquieu a hatalom három ágra való felosztását követelte a zsarnokság megelőzése érdekében.", "Montesquieu a cerut separarea puterii în trei ramuri pentru a preveni tirania."),
      svg: { type: "geschichte-diagram", name: "ColumnSvg" },
      interactive: (k) => ({
        type: "word-order",
        words: [L("Gesetzgebung", "Legislative", "Törvényhozás", "Legislativ"), L("Ausführung", "Executive", "Végrehajtás", "Executiv"), L("Rechtsprechung", "Judiciary", "Igazságszolgáltatás", "Judiciar")],
        instruction: L("Nenne die drei Gewalten", "Order the three powers", "Nevezd meg a három hatalmi ágat", "Numește cele trei puteri"),
      }),
      quiz: "aufklaerung",
    },
    {
      title: L("Volkssouveränität", "Popular Sovereignty", "Népszuverenitás", "Suveranitatea poporului"),
      text: L("Rousseau lehrte, dass die Macht vom Volk ausgehen sollte, nicht vom König.", "Rousseau taught that power should originate from the people, not the king.", "Rousseau azt tanította, hogy a hatalomnak a néptől kell származnia, nem a királytól.", "Rousseau a învățat că puterea ar trebui să provină de la popor, nu de la rege."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Rousseau", "Rousseau", "Rousseau", "Rousseau"), right: L("Gesellschaftsvertrag", "Social Contract", "Társadalmi szerződés", "Contract social") },
          { left: L("Volk", "People", "Nép", "Popor"), right: L("Herrscher", "Ruler", "Uralkodó", "Conducător") },
        ],
        instruction: k("title"),
      }),
      quiz: "aufklaerung",
    },
    {
      title: L("Toleranz", "Tolerance", "Tolerancia", "Toleranță"),
      text: L("Voltaire kämpfte für die Gedankenfreiheit und religiöse Toleranz gegenüber allen Glaubensrichtungen.", "Voltaire fought for freedom of thought and religious tolerance toward all faiths.", "Voltaire küzdött a gondolatszabadságért és a vallási toleranciáért minden hittel szemben.", "Voltaire a luptat pentru libertatea de gândire și toleranța religioasă față de toate credințele."),
      svg: { type: "geschichte-diagram", name: "PeaceDoveSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "tol", label: L("Werte", "Values", "Értékek", "Valori") },
          { id: "no", label: L("Gegenteil", "Opposite", "Ellentét", "Opus") },
        ],
        items: [
          { text: L("Freiheit", "Freedom", "Szabadság", "Libertate"), bucketId: "tol" },
          { text: L("Zensur", "Censorship", "Cenzúra", "Cenzură"), bucketId: "no" },
          { text: L("Vorurteil", "Prejudice", "Előítélet", "Prejudecată"), bucketId: "no" },
        ],
        instruction: k("title"),
      }),
      quiz: "aufklaerung",
    },
  ],
};

// ─── ISLAND 3: AMERIKANISCHE REVOLUTION ─────────────────────────────────────

const I3: IslandSpec = {
  id: "i3",
  title: L("Amerikanische Revolution", "American Revolution", "Amerikai forradalom", "Revoluția americană"),
  topics: [
    {
      title: L("Boston Tea Party", "Boston Tea Party", "Bostoni teadélután", "Partida de ceai de la Boston"),
      text: L("Aus Protest gegen britische Steuern warfen Siedler Teekisten ins Meer (1773).", "Settlers threw tea chests into the sea in protest against British taxes (1773).", "A brit adók elleni tiltakozásul a telepesek tealádákat dobtak a tengerbe (1773).", "Coloniștii au aruncat lăzi cu ceai în mare în semn de protest față de taxele britanice (1773)."),
      svg: { type: "geschichte-diagram", name: "RevolutionSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("No taxation without __! Der Protest war in __.", "No taxation without __! The protest was in __.", "Nincs adózás __ nélkül! A tiltakozás __-ban volt.", "Nicio taxare fără __! Protestul a fost în __."),
        gaps: [
          { index: 0, options: [L("representation", "representation", "képviselet", "reprezentare"), L("money", "money", "pénz", "bani")], correct: 0 },
          { index: 1, options: [L("Boston", "Boston", "Boston", "Boston"), L("London", "London", "London", "London")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "entdeckungsfahrten",
    },
    {
      title: L("Unabhängigkeitserklärung", "Declaration of Independence", "Függetlenségi Nyilatkozat", "Declarația de Independență"),
      text: L("Am 4. Juli 1776 erklärten die 13 Kolonien ihre Unabhängigkeit von England.", "On July 4, 1776, the 13 colonies declared their independence from England.", "1776. július 4-én a 13 gyarmat kikiáltotta függetlenségét Angliától.", "La 4 iulie 1776, cele 13 colonii și-au declarat independența față de Anglia."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("4. Juli 1776", "July 4, 1776", "1776. júl. 4.", "4 iulie 1776"), right: L("Feiertag", "Holiday", "Ünnep", "Sărbătoare") },
          { left: L("Thomas Jefferson", "Thomas Jefferson", "Thomas Jefferson", "Thomas Jefferson"), right: L("Autor", "Author", "Szerző", "Autor") },
        ],
        instruction: k("title"),
      }),
      quiz: "entdeckungsfahrten",
    },
    {
      title: L("George Washington", "George Washington", "George Washington", "George Washington"),
      text: L("Er war der Oberbefehlshaber im Unabhängigkeitskrieg und wurde der erste Präsident der USA.", "He was the commander-in-chief in the War of Independence and became the first president of the USA.", "A függetlenségi háború főparancsnoka volt, és az USA első elnöke lett.", "El a fost comandantul suprem în Războiul de Independență și a devenit primul președinte al SUA."),
      svg: { type: "geschichte-diagram", name: "NapoleonSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "wash", label: L("Washington", "Washington", "Washington", "Washington") },
          { id: "other", label: L("Andere", "Others", "Mások", "Alții") },
        ],
        items: [
          { text: L("1. Präsident", "1st President", "1. elnök", "Primul președinte"), bucketId: "wash" },
          { text: L("General", "General", "Tábornok", "General"), bucketId: "wash" },
          { text: L("König", "King", "Király", "Rege"), bucketId: "other" },
        ],
        instruction: k("title"),
      }),
      quiz: "entdeckungsfahrten",
    },
    {
      title: L("Die US-Verfassung", "The US Constitution", "Az USA alkotmánya", "Constituția SUA"),
      text: L("Sie ist eine der ältesten modernen Verfassungen und regelt die Gewaltenteilung in den USA.", "It is one of the oldest modern constitutions and regulates the separation of powers in the USA.", "Az egyik legrégebbi modern alkotmány, amely szabályozza a hatalmi ágak megosztását az USA-ban.", "Este una dintre cele mai vechi constituții moderne și reglementează separarea puterilor în SUA."),
      svg: { type: "geschichte-diagram", name: "ColumnSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Präsident", "President", "Elnök", "Președinte"), right: L("Exekutive", "Executive", "Végrehajtó", "Executiv") },
          { left: L("Kongress", "Congress", "Kongresszus", "Congres"), right: L("Legislative", "Legislative", "Törvényhozó", "Legislativ") },
          { left: L("Oberster Gerichtshof", "Supreme Court", "Legfelsőbb Bíróság", "Curtea Supremă"), right: L("Judikative", "Judiciary", "Bírói", "Judiciar") },
        ],
        instruction: k("title"),
      }),
      quiz: "entdeckungsfahrten",
    },
    {
      title: L("Bill of Rights", "Bill of Rights", "Jognyilatkozat", "Bill of Rights"),
      text: L("Die ersten zehn Zusatzartikel garantieren den Bürgern wichtige Grundrechte wie Religionsfreiheit.", "The first ten amendments guarantee citizens important basic rights such as freedom of religion.", "Az első tíz kiegészítés fontos alapjogokat garantál az állampolgároknak, például a vallásszabadságot.", "Primele zece amendamente garantează cetățenilor drepturi de bază importante, cum ar fi libertatea religioasă."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "right", label: L("Grundrechte", "Basic Rights", "Alapjogok", "Drepturi") },
          { id: "no", label: L("Kein Recht", "Not a Right", "Nem jog", "Nu e drept") },
        ],
        items: [
          { text: L("Pressefreiheit", "Press Freedom", "Sajtószabadság", "Libertatea presei"), bucketId: "right" },
          { text: L("Meinungsfreiheit", "Speech Freedom", "Véleményszabadság", "Libertatea de exprimare"), bucketId: "right" },
          { text: L("Gehorsamspflicht", "Obedience", "Engedelmesség", "Obediență"), bucketId: "no" },
        ],
        instruction: k("title"),
      }),
      quiz: "entdeckungsfahrten",
    },
  ],
};

// ─── ISLAND 4: FRANZÖSISCHE REVOLUTION ──────────────────────────────────────

const I4: IslandSpec = {
  id: "i4",
  title: L("Französische Revolution", "French Revolution", "Francia forradalom", "Revoluția franceză"),
  topics: [
    {
      title: L("Generalstände", "Estates-General", "Rendi gyűlés", "Stările Generale"),
      text: L("1789 rief der König die Vertreter der drei Stände zusammen, um die Finanzkrise zu lösen.", "In 1789, the king called together representatives of the three estates to solve the financial crisis.", "1789-ben a király összehívta a három rend képviselőit a pénzügyi válság megoldására.", "În 1789, regele a convocat reprezentanții celor trei stări pentru a rezolva criza financiară."),
      svg: { type: "geschichte-diagram", name: "PyramidSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("1. Stand", "1st Estate", "1. rend", "Starea I"), right: L("Klerus", "Clergy", "Papság", "Cler") },
          { left: L("2. Stand", "2nd Estate", "2. rend", "Starea II"), right: L("Adel", "Nobility", "Nemesség", "Nobilime") },
          { left: L("3. Stand", "3rd Estate", "3. rend", "Starea III"), right: L("Bürger & Bauern", "Commoners", "Polgárok és parasztok", "Cetățeni și țărani") },
        ],
        instruction: k("title"),
      }),
      quiz: "ursachen_franz_rev",
    },
    {
      title: L("Sturm auf die Bastille", "Storming of the Bastille", "A Bastille ostroma", "Căderea Bastiliei"),
      text: L("Am 14. Juli 1789 stürmte das Volk von Paris das Staatsgefängnis – das Symbol der Willkür.", "On July 14, 1789, the people of Paris stormed the state prison – the symbol of tyranny.", "1789. július 14-én Párizs népe megostromolta az állami börtönt – az önkény jelképét.", "La 14 iulie 1789, poporul Parisului a asaltat închisoarea statului – simbolul tiraniei."),
      svg: { type: "geschichte-diagram", name: "BastilleSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Der Sturm war am __. Juli. Es suchten Waffen und __.", "The storm was on July __. They sought weapons and __.", "Az ostrom július __-én volt. Fegyvereket és __ kerestek.", "Asaltul a fost pe __ iulie. Căutau arme și __."),
        gaps: [
          { index: 0, options: ["14", "4", "24"], correct: 0 },
          { index: 1, options: [L("Schießpulver", "Gunpowder", "puskaport", "praf de pușcă"), L("Gold", "Gold", "aranyat", "aur")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "sturm_bastille",
    },
    {
      title: L("Menschenrechte", "Human Rights", "Emberi jogok", "Drepturile omului"),
      text: L("Die Nationalversammlung verkündete 1789 die Erklärung der Menschen- und Bürgerrechte.", "The National Assembly proclaimed the Declaration of the Rights of Man and of the Citizen in 1789.", "A Nemzetgyűlés 1789-ben kihirdette az Emberi és Polgári Jogok Nyilatkozatát.", "Adunarea Națională a proclamat Declarația Drepturilor Omului și ale Cetățeanului în 1789."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "right", label: L("Rechte", "Rights", "Jogok", "Drepturi") },
          { id: "no", label: L("Gegenteil", "Opposite", "Ellentét", "Opus") },
        ],
        items: [
          { text: L("Freiheit", "Freedom", "Szabadság", "Libertate"), bucketId: "right" },
          { text: L("Eigentum", "Property", "Tulajdon", "Proprietate"), bucketId: "right" },
          { text: L("Willkür", "Tyranny", "Önkény", "Tiranie"), bucketId: "no" },
        ],
        instruction: k("title"),
      }),
      quiz: "ursachen_franz_rev",
    },
    {
      title: L("Ballhausschwur", "Tennis Court Oath", "Labdaházi eskü", "Jurământul de la Jeu de Paume"),
      text: L("Die Abgeordneten schworen, erst auseinanderzugehen, wenn eine Verfassung ausgearbeitet sei.", "The deputies swore not to separate until a constitution had been drafted.", "A képviselők megesküdtek, hogy addig nem oszlanak szét, amíg ki nem dolgozzák az alkotmányt.", "Deputații au jurat să nu se separe până când nu va fi elaborată o constituție."),
      svg: { type: "geschichte-diagram", name: "WeimarSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Wir schwören eine __ zu geben.", "We swear to give a __.", "Esküszünk, hogy __ adunk.", "Jurăm să dăm o __."),
        gaps: [
          { index: 0, options: [L("Verfassung", "Constitution", "alkotmányt", "constituție"), L("Krone", "Crown", "koronát", "coroană")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "ursachen_franz_rev",
    },
    {
      title: L("Die Jakobiner", "The Jacobins", "A jakobinusok", "Iacobinii"),
      text: L("Unter Robespierre errichteten die radikalen Jakobiner eine Schreckensherrschaft (Terreur).", "Under Robespierre, the radical Jacobins established a reign of terror (Terreur).", "Robespierre vezetésével a radikális jakobinusok bevezették a diktatúrát (Terror).", "Sub conducerea lui Robespierre, iacobinii radicali au stabilit o domnie a terorii (Terreur)."),
      svg: { type: "geschichte-diagram", name: "RevolutionSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Robespierre", "Robespierre", "Robespierre", "Robespierre"), right: L("Anführer", "Leader", "Vezető", "Lider") },
          { left: L("Guillotine", "Guillotine", "Guillotine", "Ghilotină"), right: L("Hinrichtung", "Execution", "Kivégzés", "Execuție") },
        ],
        instruction: k("title"),
      }),
      quiz: "schreckensherrschaft",
    },
  ],
};

// ─── ISLAND 5: NAPOLEON BONAPARTE ──────────────────────────────────────────

const I5: IslandSpec = {
  id: "i5",
  title: L("Napoleon Bonaparte", "Napoleon Bonaparte", "Napóleon Bonaparte", "Napoleon Bonaparte"),
  topics: [
    {
      title: L("Aufstieg zur Macht", "Rise to Power", "Hatalomra jutás", "Ascensiunea la putere"),
      text: L("Der junge General Napoleon beendete die Revolution durch einen Staatsstreich 1799.", "The young general Napoleon ended the revolution through a coup d'état in 1799.", "A fiatal Napóleon tábornok egy államcsínnyel vetett véget a forradalomnak 1799-ben.", "Tânărul general Napoleon a pus capăt revoluției printr-o lovitură de stat în 1799."),
      svg: { type: "geschichte-diagram", name: "NapoleonSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Napoleon wurde zuerst __.", "Napoleon first became __.", "Napóleon először __ lett.", "Napoleon a devenit mai întâi __."),
        gaps: [
          { index: 0, options: [L("Konsul", "Consul", "konzul", "consul"), L("Papst", "Pope", "pápa", "papă")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "aufstieg_napoleon",
    },
    {
      title: L("Code Civil", "Code Civil", "Code Civil", "Codul Civil"),
      text: L("Napoleons Gesetzbuch garantierte Gleichheit vor dem Gesetz und Eigentumsrechte.", "Napoleon's law book guaranteed equality before the law and property rights.", "Napóleon törvénykönyve garantálta a törvény előtti egyenlőséget és a tulajdonjogokat.", "Codul de legi al lui Napoleon a garantat egalitatea în fața legii și drepturile de proprietate."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Eigentum", "Property", "Tulajdon", "Proprietate"), right: L("Schutz", "Protection", "Védelem", "Protecție") },
          { left: L("Gesetz", "Law", "Törvény", "Lege"), right: L("Gleichheit", "Equality", "Egyenlőség", "Egalitate") },
        ],
        instruction: k("title"),
      }),
      quiz: "aufstieg_napoleon",
    },
    {
      title: L("Kaiserkrönung", "Coronation", "Császárrá koronázás", "Încoronarea ca împărat"),
      text: L("1804 krönte sich Napoleon in der Kathedrale Notre-Dame selbst zum Kaiser.", "In 1804, Napoleon crowned himself emperor in the Notre-Dame Cathedral.", "1804-ben Napóleon a Notre-Dame-székesegyházban saját magát koronázta császárrá.", "În 1804, Napoleon s-a încoronat el însuși împărat în Catedrala Notre-Dame."),
      svg: { type: "geschichte-diagram", name: "PyramidSvg" },
      interactive: (k) => ({
        type: "word-order",
        words: ["1799", "1804", "1812", "1815"],
        instruction: L("Ordne die Jahreszahlen chronologisch", "Order the years chronologically", "Rendezd az évszámokat időrendbe", "Ordonează anii cronologic"),
      }),
      quiz: "aufstieg_napoleon",
    },
    {
      title: L("Russlandfeldzug", "Russian Campaign", "Oroszországi hadjárat", "Campania din Rusia"),
      text: L("Der Versuch, Russland 1812 zu erobern, scheiterte am 'General Winter' und der Taktik der Russen.", "The attempt to conquer Russia in 1812 failed due to 'General Winter' and Russian tactics.", "Az Oroszország meghódítására tett kísérlet 1812-ben kudarcba fulladt a „Tél tábornok” és az orosz taktika miatt.", "Încercarea de a cuceri Rusia în 1812 a eșuat din cauza „Generalului Iarnă” și a tacticii rușilor."),
      svg: { type: "geschichte-diagram", name: "TrenchSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "fail", label: L("Gründe Scheitern", "Reasons for failure", "Kudarc okai", "Motivele eșecului") },
          { id: "other", label: L("Anderes", "Other", "Egyéb", "Altele") },
        ],
        items: [
          { text: L("Kälte", "Cold", "Hideg", "Frig"), bucketId: "fail" },
          { text: L("Hunger", "Hunger", "Éhség", "Foame"), bucketId: "fail" },
          { text: L("Zuviel Gold", "Too much gold", "Túl sok arany", "Prea mult aur"), bucketId: "other" },
        ],
        instruction: k("title"),
      }),
      quiz: "ende_napoleon",
    },
    {
      title: L("Waterloo", "Waterloo", "Waterloo", "Waterloo"),
      text: L("1815 wurde Napoleon bei Waterloo endgültig besiegt und auf die Insel St. Helena verbannt.", "In 1815, Napoleon was finally defeated at Waterloo and exiled to the island of Saint Helena.", "1815-ben Napóleon Waterloonál végleg vereséget szenvedett, és Szent Ilona szigetére száműzték.", "În 1815, Napoleon a fost învins definitiv la Waterloo și exilat pe insula Sfânta Elena."),
      svg: { type: "geschichte-diagram", name: "ShieldSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Waterloo", "Waterloo", "Waterloo", "Waterloo"), right: L("Belgien", "Belgium", "Belgium", "Belgia") },
          { left: L("Wellington", "Wellington", "Wellington", "Wellington"), right: L("England", "England", "Anglia", "Anglia") },
          { left: L("St. Helena", "St. Helena", "Szt. Ilona", "Sf. Elena"), right: L("Exil", "Exile", "Száműzetés", "Exil") },
        ],
        instruction: k("title"),
      }),
      quiz: "ende_napoleon",
    },
  ],
};

// ─── ISLAND 6: WIENER KONGRESS ───────────────────────────────────────────────

const I6: IslandSpec = {
  id: "i6",
  title: L("Wiener Kongress", "Congress of Vienna", "Bécsi kongresszus", "Congresul de la Viena"),
  topics: [
    {
      title: L("Restauration", "Restoration", "Restauráció", "Restaurația"),
      text: L("Ziel war die Wiederherstellung der alten Ordnung vor der Französischen Revolution.", "The goal was to restore the old order before the French Revolution.", "A cél a francia forradalom előtti régi rend visszaállítása volt.", "Scopul a fost restaurarea vechii ordini de dinaintea Revoluției Franceze."),
      svg: { type: "geschichte-diagram", name: "TempleSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Restauration bedeutet __.", "Restoration means __.", "A restauráció __ jelent.", "Restaurația înseamnă __."),
        gaps: [
          { index: 0, options: [L("Wiederherstellung", "Restoration", "Visszaállítást", "Restaurare"), L("Zerstörung", "Destruction", "Rombolást", "Distrugere")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "wiener_kongress",
    },
    {
      title: L("Legitimität", "Legitimacy", "Legitimitás", "Legitimitatea"),
      text: L("Die Fürsten rechtfertigten ihre Herrschaft durch das Gottesgnadentum.", "The princes justified their rule through divine right.", "A fejedelmek hatalmukat az istenkegyelemmel indokolták.", "Principii și-au justificat domnia prin dreptul divin."),
      svg: { type: "geschichte-diagram", name: "PyramidSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Gott", "God", "Isten", "Dumnezeu"), right: L("Gnaden", "Grace", "Kegyelem", "Har") },
          { left: L("Dynastie", "Dynasty", "Dinasztia", "Dinastie"), right: L("Abstammung", "Descent", "Származás", "Origine") },
        ],
        instruction: k("title"),
      }),
      quiz: "wiener_kongress",
    },
    {
      title: L("Solidarität", "Solidarity", "Szolidaritás", "Solidaritatea"),
      text: L("Die Monarchen versprachen sich gegenseitige Hilfe gegen revolutionäre Bestrebungen.", "The monarchs promised each other mutual aid against revolutionary movements.", "Az uralkodók kölcsönös segítséget ígértek egymásnak a forradalmi törekvésekkel szemben.", "Monarhii și-au promis ajutor reciproc împotriva mișcărilor revoluționare."),
      svg: { type: "geschichte-diagram", name: "ShieldSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "all", label: L("Heilige Allianz", "Holy Alliance", "Szent Szövetség", "Sfânta Alianță") },
          { id: "other", label: L("Andere", "Others", "Mások", "Alții") },
        ],
        items: [
          { text: L("Preußen", "Prussia", "Poroszország", "Prusia"), bucketId: "all" },
          { text: L("Österreich", "Austria", "Ausztria", "Austria"), bucketId: "all" },
          { text: L("Russland", "Russia", "Oroszország", "Rusia"), bucketId: "all" },
          { text: L("USA", "USA", "USA", "SUA"), bucketId: "other" },
        ],
        instruction: k("title"),
      }),
      quiz: "wiener_kongress",
    },
    {
      title: L("Fürst von Metternich", "Prince Metternich", "Metternich herceg", "Prințul Metternich"),
      text: L("Metternich war der führende Staatsmann des Kongresses és Verfechter der alten Ordnung.", "Metternich was the leading statesman of the congress and advocate of the old order.", "Metternich a kongresszus vezető államférfija és a régi rend védelmezője volt.", "Metternich a fost omul de stat conducător al congresului și susținător al vechii ordini."),
      svg: { type: "geschichte-diagram", name: "ColumnSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Metternich kam aus __.", "Metternich came from __.", "Metternich __-ból származott.", "Metternich a venit din __."),
        gaps: [
          { index: 0, options: [L("Österreich", "Austria", "Ausztriából", "Austria"), L("Frankreich", "France", "Franciaországból", "Franța")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "wiener_kongress",
    },
    {
      title: L("Deutscher Bund", "German Confederation", "Német Szövetség", "Confederația Germană"),
      text: L("Als lockerer Zusammenschluss von 39 Staaten ersetzte er das Heilige Römische Reich.", "As a loose confederation of 39 states, it replaced the Holy Roman Empire.", "39 állam laza szövetségeként váltotta fel a Német-római Birodalmat.", "Ca o confederație laxă de 39 de state, a înlocuit Sfântul Imperiu Roman."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "word-order",
        words: ["39", "4", "12", "100"],
        instruction: L("Wie viele Staaten gehörten zum Bund?", "How many states belonged to the confederation?", "Hány állam tartozott a szövetséghez?", "Câte state aparțineau confederației?"),
      }),
      quiz: "wiener_kongress",
    },
  ],
};

// ─── ISLAND 7: INDUSTRIELLE REVOLUTION ──────────────────────────────────────

const I7: IslandSpec = {
  id: "i7",
  title: L("Industrielle Revolution", "Industrial Revolution", "Ipari forradalom", "Revoluția industrială"),
  topics: [
    {
      title: L("Dampfmaschine", "Steam Engine", "Gőzgép", "Mașina cu abur"),
      text: L("James Watt verbesserte die Dampfmaschine, die zum Motor der Industrialisierung wurde.", "James Watt improved the steam engine, which became the engine of industrialization.", "James Watt tökéletesítette a gőzgépet, amely az iparosodás motorjává vált.", "James Watt a perfecționat mașina cu abur, care a devenit motorul industrializării."),
      svg: { type: "geschichte-diagram", name: "SteamEngineSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Erfinder: James __. Kraft durch __.", "Inventor: James __. Power through __.", "Feltaláló: James __. Erő __ által.", "Inventor: James __. Putere prin __."),
        gaps: [
          { index: 0, options: ["Watt", "Newton", "Tesla"], correct: 0 },
          { index: 1, options: [L("Wasserdampf", "Steam", "gőz", "abur"), L("Elektrizität", "Electricity", "elektromosság", "electricitate")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "industrielle_revolution_anfang",
    },
    {
      title: L("Fabrikarbeit", "Factory Work", "Gyári munka", "Munca în fabrică"),
      text: L("Maschinen ersetzten Handarbeit. Es entstanden große Fabriken mit strenger Disziplin.", "Machines replaced manual labor. Large factories with strict discipline emerged.", "A gépek felváltották a kézi munkát. Szigorú fegyelmű nagygyárak jöttek létre.", "Mașinile au înlocuit munca manuală. Au apărut mari fabrici cu disciplină strictă."),
      svg: { type: "geschichte-diagram", name: "FactorySvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "pro", label: L("Vorteile", "Pros", "Előnyök", "Avantaje") },
          { id: "con", label: L("Nachteile", "Cons", "Hátrányok", "Dezavantaje") },
        ],
        items: [
          { text: L("Massengüter", "Mass goods", "Tömegáru", "Bunuri de masă"), bucketId: "pro" },
          { text: L("Lärm", "Noise", "Zaj", "Zgomot"), bucketId: "con" },
          { text: L("Lange Arbeitszeit", "Long hours", "Hosszú munkaidő", "Program lung"), bucketId: "con" },
        ],
        instruction: k("title"),
      }),
      quiz: "industrielle_revolution_anfang",
    },
    {
      title: L("Die Eisenbahn", "The Railway", "A vasút", "Calea ferată"),
      text: L("Die Eisenbahn revolutionierte den Transport von Waren und Menschen im 19. Jahrhundert.", "The railway revolutionized the transport of goods and people in the 19th century.", "A vasút forradalmasította az áruk és emberek szállítását a 19. században.", "Calea ferată a revoluționat transportul de mărfuri și persoane în secolul al XIX-lea."),
      svg: { type: "geschichte-diagram", name: "SteamEngineSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Adler", "Adler", "Adler", "Adler"), right: L("Erste Lokomotive (DE)", "First loco", "Első mozdony", "Prima locomotivă") },
          { left: L("Schienen", "Rails", "Sínek", "Șine"), right: L("Transportweg", "Route", "Szállítási út", "Rută") },
        ],
        instruction: k("title"),
      }),
      quiz: "industrielle_revolution_anfang",
    },
    {
      title: L("Soziale Frage", "Social Question", "Társadalmi kérdés", "Chestiunea socială"),
      text: L("Die Not der Arbeiter führte zur Suche nach Lösungen und zur Entstehung von Gewerkschaften.", "The plight of the workers led to the search for solutions and the emergence of trade unions.", "A munkások nyomora megoldások kereséséhez és szakszervezetek kialakulásához vezetett.", "Suferința muncitorilor a dus la căutarea de soluții și la apariția sindicatelor."),
      svg: { type: "geschichte-diagram", name: "PyramidSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Arbeiter nannten sich __. Sie forderten höhere __.", "Workers called themselves __. They demanded higher __.", "A munkások __-nak nevezték magukat. Magasabb __ követeltek.", "Muncitorii s-au numit __. Ei au cerut __ mai mari."),
        gaps: [
          { index: 0, options: [L("Proletarier", "Proletarians", "proletárok", "proletari"), L("Adlige", "Nobles", "nemesek", "nobili")], correct: 0 },
          { index: 1, options: [L("Löhne", "Wages", "béreket", "salarii"), L("Steuern", "Taxes", "adókat", "taxe")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "gesellschaftlicher_wandel",
    },
    {
      title: L("Urbanisierung", "Urbanization", "Urbanizáció", "Urbanizare"),
      text: L("Immer mehr Menschen zogen vom Land in die schnell wachsenden Industriestädte.", "More and more people moved from the countryside into the rapidly growing industrial cities.", "Egyre többen költöztek vidékről a gyorsan növekvő iparvárosokba.", "Tot mai mulți oameni s-au mutat de la sat în orașele industriale care creșteau rapid."),
      svg: { type: "geschichte-diagram", name: "MedievalCitySvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "city", label: L("Stadt", "City", "Város", "Oraș") },
          { id: "land", label: L("Land", "Country", "Vidék", "Sat") },
        ],
        items: [
          { text: L("Mietskaserne", "Tenement", "Bérkaszárnya", "Cazărmi"), bucketId: "city" },
          { text: L("Ackerbau", "Farming", "Földművelés", "Agricultură"), bucketId: "land" },
          { text: L("Fabrik", "Factory", "Gyár", "Fabrică"), bucketId: "city" },
        ],
        instruction: k("title"),
      }),
      quiz: "gesellschaftlicher_wandel",
    },
  ],
};

// ─── ISLAND 8: VORMÄRZ UND REVOLUTION ───────────────────────────────────────

const I8: IslandSpec = {
  id: "i8",
  title: L("Vormärz & Revolution", "Vormärz & Revolution", "Vormärz és forradalom", "Vormärz și revoluția"),
  topics: [
    {
      title: L("Wartburgfest", "Wartburg Festival", "Wartburgi ünnep", "Festivalul de la Wartburg"),
      text: L("1817 forderten Studenten auf der Wartburg Einheit und Freiheit für Deutschland.", "In 1817, students at the Wartburg called for unity and freedom for Germany.", "1817-ben egyetemisták egységet és szabadságot követeltek Németországnak Wartburg várában.", "În 1817, studenții de la Wartburg au cerut unitate și libertate pentru Germania."),
      svg: { type: "geschichte-diagram", name: "CastleSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("1817", "1817", "1817", "1817"), right: L("Wartburgfest", "Wartburg Festival", "Wartburgi ünnep", "Festivalul de la Wartburg") },
          { left: L("Farben", "Colors", "Színek", "Culori"), right: L("Schwarz-Rot-Gold", "Black-Red-Gold", "Fekete-vörös-arany", "Negru-roșu-auriu") },
        ],
        instruction: k("title"),
      }),
      quiz: "gesellschaftlicher_wandel",
    },
    {
      title: L("Hambacher Fest", "Hambach Festival", "Hambachi ünnep", "Festivalul de la Hambach"),
      text: L("1832 demonstrierten 30.000 Menschen für Freiheit, Demokratie und europäische Einheit.", "In 1832, 30,000 people demonstrated for freedom, democracy, and European unity.", "1832-ben 30 000 ember tüntetett a szabadságért, a demokráciáért és az európai egységért.", "În 1832, 30.000 de oameni au demonstrat pentru libertate, democrație și unitate europeană."),
      svg: { type: "geschichte-diagram", name: "RevolutionSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Hinauf, hinauf zum __! Freiheit und __!", "Up, up to the __! Freedom and __!", "Fel, fel a __-hoz! Szabadság és __!", "Sus, sus la __! Libertate și __!"),
        gaps: [
          { index: 0, options: [L("Schloss", "Castle", "kastélyhoz", "castel"), L("Markt", "Market", "piachoz", "piață")], correct: 0 },
          { index: 1, options: [L("Einheit", "Unity", "egység", "unitate"), L("Krieg", "War", "háború", "război")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "gesellschaftlicher_wandel",
    },
    {
      title: L("Märzrevolution 1848", "March Revolution", "Márciusi forradalom", "Revoluția de la martie"),
      text: L("In ganz Europa brachen Unruhen aus. Das Volk kämpfte gegen die Fürstenherrschaft.", "Unrest broke out all over Europe. The people fought against the rule of the princes.", "Európa-szerte zavargások törtek ki. A nép a fejedelmek uralma ellen harcolt.", "În întreaga Europă au izbucnit revolte. Poporul a luptat împotriva stăpânirii principilor."),
      svg: { type: "geschichte-diagram", name: "RevolutionSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("März 1848", "March 1848", "1848. március", "Martie 1848"), right: L("Barrikadenkämpfe", "Barricades", "Barrikádharcok", "Lupte de baricadă") },
          { left: L("Berlin/Wien", "Berlin/Vienna", "Berlin/Bécs", "Berlin/Viena"), right: L("Schauplätze", "Scenes", "Helyszínek", "Locuri") },
        ],
        instruction: k("title"),
      }),
      quiz: "gesellschaftlicher_wandel",
    },
    {
      title: L("Die Paulskirche", "Paulskirche", "Paulskirche", "Paulskirche"),
      text: L("In der Frankfurter Paulskirche tagte das erste frei gewählte deutsche Parlament.", "The first freely elected German parliament met in Frankfurt's Paulskirche.", "A frankfurti Paulskirche-ben ülésezett az első szabadon választott német parlament.", "În Paulskirche din Frankfurt s-a întrunit primul parlament german ales liber."),
      svg: { type: "geschichte-diagram", name: "TempleSvg" },
      interactive: (k) => ({
        type: "word-order",
        words: [L("Wahl", "Election", "Választás", "Alegeri"), L("Debatte", "Debate", "Vita", "Dezbatere"), L("Verfassung", "Constitution", "Alkotmány", "Constituție")],
        instruction: L("Schritte der Nationalversammlung", "Steps of the National Assembly", "A nemzetgyűlés lépései", "Pașii Adunării Naționale"),
      }),
      quiz: "gesellschaftlicher_wandel",
    },
    {
      title: L("Das Scheitern", "The Failure", "A bukás", "Eșecul"),
      text: L("König Friedrich Wilhelm IV. lehnte die Kaiserkrone ab. Die Revolution wurde niedergeschlagen.", "King Frederick William IV rejected the imperial crown. The revolution was suppressed.", "IV. Frigyes Vilmos király elutasította a császári koronát. A forradalmat levertek.", "Regele Frederic Wilhelm al IV-lea a refuzat coroana imperială. Revoluția a fost înăbușită."),
      svg: { type: "geschichte-diagram", name: "CrownSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Keine Krone aus der __. Die Revolution __.", "No crown from the __. The revolution __.", "Nincs korona a __-ból. A forradalom __.", "Nicio coroană din __. Revoluția __."),
        gaps: [
          { index: 0, options: [L("Gosse", "Gutter", "utcáról", "stradă"), L("Kirche", "Church", "templomból", "biserică")], correct: 0 },
          { index: 1, options: [L("scheiterte", "failed", "elbukott", "a eșuat"), L("siegte", "won", "győzött", "a câștigat")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "gesellschaftlicher_wandel",
    },
  ],
};

// ─── ISLAND 9: NATIONBUILDING ───────────────────────────────────────────────

const I9: IslandSpec = {
  id: "i9",
  title: L("Nationbuilding", "Nation Building", "Nemzetépítés", "Formarea națiunii"),
  topics: [
    {
      title: L("Bismarck", "Bismarck", "Bismarck", "Bismarck"),
      text: L("Otto von Bismarck einte Deutschland 'durch Eisen und Blut'.", "Otto von Bismarck unified Germany 'through iron and blood'.", "Otto von Bismarck „vassal és vérrel” egyesítette Németországot.", "Otto von Bismarck a unit Germania „prin fier și sânge”."),
      svg: { type: "geschichte-diagram", name: "NapoleonSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Bismarck", "Bismarck", "Bismarck", "Bismarck"), right: L("Eiserner Kanzler", "Iron Chancellor", "Vaskancellár", "Cancelarul de fier") },
          { left: L("Preußen", "Prussia", "Poroszország", "Prusia"), right: L("Führungsmacht", "Lead power", "Vezető hatalom", "Putere conducătoare") },
        ],
        instruction: k("title"),
      }),
      quiz: "preussen_friedrich",
    },
    {
      title: L("Reichsgründung 1871", "Founding of the Empire", "Birodalomalapítás", "Fondarea Imperiului"),
      text: L("Im Schloss von Versailles wurde Wilhelm I. zum deutschen Kaiser gekrönt.", "In the Palace of Versailles, William I was crowned German Emperor.", "A versailles-i kastélyban I. Vilmost német császárrá koronázták.", "În Palatul de la Versailles, Wilhelm I a fost încoronat împărat german."),
      svg: { type: "geschichte-diagram", name: "CrownSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Ort: Spiegelsaal von __. Jahr: __.", "Place: Hall of Mirrors at __. Year: __.", "Hely: __ tükörterme. Év: __.", "Loc: Sala Oglinzilor din __. An: __."),
        gaps: [
          { index: 0, options: ["Versailles", "Berlin", "Wien"], correct: 0 },
          { index: 1, options: ["1871", "1848", "1914"], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "preussen_friedrich",
    },
    {
      title: L("Nationalismus", "Nationalism", "Nationalizmus", "Naționalism"),
      text: L("Das Streben nach einem eigenen Nationalstaat prägte das 19. Jahrhundert.", "The quest for its own nation-state characterized the 19th century.", "A saját nemzetállam utáni vágy határozta meg a 19. századot.", "Căutarea propriului stat național a caracterizat secolul al XIX-lea."),
      svg: { type: "geschichte-diagram", name: "RevolutionSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "nat", label: L("Nation", "Nation", "Nemzet", "Națiune") },
          { id: "mon", label: L("Monarchie", "Monarchy", "Monarchia", "Monarhie") },
        ],
        items: [
          { text: L("Einheit", "Unity", "Egység", "Unitate"), bucketId: "nat" },
          { text: L("Freiheit", "Freedom", "Szabadság", "Libertate"), bucketId: "nat" },
          { text: L("Gottesgnadentum", "Divine Right", "Istenkegyelem", "Har divin"), bucketId: "mon" },
        ],
        instruction: k("title"),
      }),
      quiz: "preussen_friedrich",
    },
    {
      title: L("Imperialismus", "Imperialism", "Imperializmus", "Imperialism"),
      text: L("Europäische Mächte teilten die Welt unter sich auf, besonders in Afrika.", "European powers divided the world among themselves, especially in Africa.", "Az európai hatalmak felosztották egymás között a világot, különösen Afrikában.", "Puterile europene au împărțit lumea între ele, în special în Africa."),
      svg: { type: "geschichte-diagram", name: "ShieldSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Kolonien", "Colonies", "Gyarmatok", "Colonii"), right: L("Rohstoffe", "Resources", "Nyersanyagok", "Materii prime") },
          { left: L("Macht", "Power", "Hatalom", "Putere"), right: L("Weltreich", "Empire", "Világbirodalom", "Imperiu mondial") },
        ],
        instruction: k("title"),
      }),
      quiz: "preussen_friedrich",
    },
    {
      title: L("Kulturkampf", "Kulturkampf", "Kultúrharc", "Kulturkampf"),
      text: L("Bismarck kämpfte gegen den Einfluss der katholischen Kirche im neuen Reich.", "Bismarck fought against the influence of the Catholic Church in the new empire.", "Bismarck küzdött a katolikus egyház befolyása ellen az új birodalomban.", "Bismarck a luptat împotriva influenței Bisericii Catolice în noul imperiu."),
      svg: { type: "geschichte-diagram", name: "ColumnSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Staat gegen __. Zivilehe wurde __.", "State against __. Civil marriage became __.", "Állam az __ ellen. A polgári házasság __ lett.", "Statul împotriva __. Căsătoria civilă a devenit __."),
        gaps: [
          { index: 0, options: [L("Kirche", "Church", "egyház", "Biserică"), L("Bauern", "Peasants", "parasztok", "țărani")], correct: 0 },
          { index: 1, options: [L("Pflicht", "Compulsory", "kötelező", "obligatorie"), L("verboten", "Forbidden", "tilos", "interzisă")], correct: 0 },
        ],
        instruction: k("title"),
      }),
      quiz: "preussen_friedrich",
    },
  ],
};

const islands = [I1, I2, I3, I4, I5, I6, I7, I8, I9];
const built = islands.map(buildIsland);

export const GESCHICHTE_K7_I1_LABELS = built[0].labels;
export const GESCHICHTE_K7_I1_POOL = built[0].pool;
export const GESCHICHTE_K7_I2_LABELS = built[1].labels;
export const GESCHICHTE_K7_I2_POOL = built[1].pool;
export const GESCHICHTE_K7_I3_LABELS = built[2].labels;
export const GESCHICHTE_K7_I3_POOL = built[2].pool;
export const GESCHICHTE_K7_I4_LABELS = built[3].labels;
export const GESCHICHTE_K7_I4_POOL = built[3].pool;
export const GESCHICHTE_K7_I5_LABELS = built[4].labels;
export const GESCHICHTE_K7_I5_POOL = built[4].pool;
export const GESCHICHTE_K7_I6_LABELS = built[5].labels;
export const GESCHICHTE_K7_I6_POOL = built[5].pool;
export const GESCHICHTE_K7_I7_LABELS = built[6].labels;
export const GESCHICHTE_K7_I7_POOL = built[6].pool;
export const GESCHICHTE_K7_I8_LABELS = built[7].labels;
export const GESCHICHTE_K7_I8_POOL = built[7].pool;
export const GESCHICHTE_K7_I9_LABELS = built[8].labels;
export const GESCHICHTE_K7_I9_POOL = built[8].pool;
