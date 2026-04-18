import type { PoolTopicDef, SvgConfig } from "./types";

type Lang = "de" | "en" | "hu" | "ro";
type L4 = Record<Lang, string>;

const L = (de: string, en: string, hu: string, ro: string): L4 => ({ de, en, hu, ro });

interface TopicSpec {
  id: string;
  title: L4;
  hint1: L4;
  hint2: L4;
  svg: SvgConfig;
  interactive: any; 
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
    
    labels.de[`${prefix}_title`] = topic.title.de;
        labels.en[`${prefix}_title`] = topic.title.en;
        labels.hu[`${prefix}_title`] = topic.title.hu;
        labels.ro[`${prefix}_title`] = topic.title.ro;
    labels.de[`${prefix}_h1`] = topic.hint1.de;
        labels.en[`${prefix}_h1`] = topic.hint1.en;
        labels.hu[`${prefix}_h1`] = topic.hint1.hu;
        labels.ro[`${prefix}_h1`] = topic.hint1.ro;
    labels.de[`${prefix}_h2`] = topic.hint2.de;
        labels.en[`${prefix}_h2`] = topic.hint2.en;
        labels.hu[`${prefix}_h2`] = topic.hint2.hu;
        labels.ro[`${prefix}_h2`] = topic.hint2.ro;
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

    let interactive = { ...topic.interactive };
    if (interactive.instruction) {
      labels.de[`${prefix}_instr`] = interactive.instruction.de;
        labels.en[`${prefix}_instr`] = interactive.instruction.en;
        labels.hu[`${prefix}_instr`] = interactive.instruction.hu;
        labels.ro[`${prefix}_instr`] = interactive.instruction.ro;
      interactive.instruction = `${prefix}_instr`;
    }
    
    if (interactive.type === "match-pairs") {
      interactive.pairs = interactive.pairs.map((p: any, i: number) => {
        labels.de[`${prefix}_p${i}l`] = p.left.de;
        labels.en[`${prefix}_p${i}l`] = p.left.en;
        labels.hu[`${prefix}_p${i}l`] = p.left.hu;
        labels.ro[`${prefix}_p${i}l`] = p.left.ro;
        labels.de[`${prefix}_p${i}r`] = p.right.de;
        labels.en[`${prefix}_p${i}r`] = p.right.en;
        labels.hu[`${prefix}_p${i}r`] = p.right.hu;
        labels.ro[`${prefix}_p${i}r`] = p.right.ro;
        return { left: `${prefix}_p${i}l`, right: `${prefix}_p${i}r` };
      });
    } else if (interactive.type === "gap-fill") {
      labels.de[`${prefix}_gf_text`] = interactive.text.de;
        labels.en[`${prefix}_gf_text`] = interactive.text.en;
        labels.hu[`${prefix}_gf_text`] = interactive.text.hu;
        labels.ro[`${prefix}_gf_text`] = interactive.text.ro;
      interactive.text = `${prefix}_gf_text`;
      interactive.gaps = interactive.gaps.map((g: any, i: number) => {
        g.options = g.options.map((opt: any, j: number) => {
          labels.de[`${prefix}_gf${i}o${j}`] = opt.de;
        labels.en[`${prefix}_gf${i}o${j}`] = opt.en;
        labels.hu[`${prefix}_gf${i}o${j}`] = opt.hu;
        labels.ro[`${prefix}_gf${i}o${j}`] = opt.ro;
          return `${prefix}_gf${i}o${j}`;
        });
        return g;
      });
    } else if (interactive.type === "drag-to-bucket") {
      interactive.buckets = interactive.buckets.map((b: any, i: number) => {
        labels.de[`${prefix}_b${i}`] = b.label.de;
        labels.en[`${prefix}_b${i}`] = b.label.en;
        labels.hu[`${prefix}_b${i}`] = b.label.hu;
        labels.ro[`${prefix}_b${i}`] = b.label.ro;
        b.label = `${prefix}_b${i}`;
        return b;
      });
      interactive.items = interactive.items.map((it: any, i: number) => {
        labels.de[`${prefix}_it${i}`] = it.text.de;
        labels.en[`${prefix}_it${i}`] = it.text.en;
        labels.hu[`${prefix}_it${i}`] = it.text.hu;
        labels.ro[`${prefix}_it${i}`] = it.text.ro;
        it.text = `${prefix}_it${i}`;
        return it;
      });
    } else if (interactive.type === "word-order" || interactive.type === "sentence-build") {
      interactive.words = interactive.words.map((w: any, i: number) => {
        labels.de[`${prefix}_w${i}`] = w.de;
        labels.en[`${prefix}_w${i}`] = w.en;
        labels.hu[`${prefix}_w${i}`] = w.hu;
        labels.ro[`${prefix}_w${i}`] = w.ro;
        return `${prefix}_w${i}`;
      });
    } else if (interactive.type === "highlight-text") {
      labels.de[`${prefix}_ht`] = interactive.text.de;
        labels.en[`${prefix}_ht`] = interactive.text.en;
        labels.hu[`${prefix}_ht`] = interactive.text.hu;
        labels.ro[`${prefix}_ht`] = interactive.text.ro;
      interactive.text = `${prefix}_ht`;
    } else if (interactive.type === "lang-mcq") {
      labels.de[`${prefix}_lq`] = interactive.question.de;
        labels.en[`${prefix}_lq`] = interactive.question.en;
        labels.hu[`${prefix}_lq`] = interactive.question.hu;
        labels.ro[`${prefix}_lq`] = interactive.question.ro;
      interactive.question = `${prefix}_lq`;
      interactive.choices = interactive.choices.map((c: any, i: number) => {
        labels.de[`${prefix}_lc${i}`] = c.de;
        labels.en[`${prefix}_lc${i}`] = c.en;
        labels.hu[`${prefix}_lc${i}`] = c.hu;
        labels.ro[`${prefix}_lc${i}`] = c.ro;
        return `${prefix}_lc${i}`;
      });
      labels.de[`${prefix}_la`] = interactive.answer.de;
        labels.en[`${prefix}_la`] = interactive.answer.en;
        labels.hu[`${prefix}_la`] = interactive.answer.hu;
        labels.ro[`${prefix}_la`] = interactive.answer.ro;
      interactive.answer = `${prefix}_la`;
    }

    return {
      infoTitle: `${prefix}_title`,
      infoText: `${prefix}_h1`,
      hintKey: `${prefix}_h2`,
      svg: topic.svg,
      interactive: interactive,
      quiz: {
        question: `${prefix}_q`,
        choices: topic.quiz.choices.map((_, i) => `${prefix}_c${i}`),
        answer: `${prefix}_a`,
      },
    };
  });

  return { labels, pool };
}

// ─── ISLAND 1: DER ERSTE WELTKRIEG ──────────────────────────────────────────
const I1: IslandSpec = {
  id: "i1",
  title: L("Erster Weltkrieg", "First World War", "Első világháború", "Primul Război Mondial"),
  topics: [
    {
      id: "attentat",
      title: L("Attentat von Sarajevo", "Sarajevo attack", "Szarajevói támadás", "Atacul de la Sarajevo"),
      hint1: L("Am 28. Juni 1914 wurde Franz Ferdinand ermordet.", "On June 28, 1914, Franz Ferdinand was murdered.", "1914. június 28-án meggyilkolták Ferenc Ferdinándot.", "La 28 iunie 1914, Franz Ferdinand a fost ucis."),
      hint2: L("Dieses Ereignis war der Auslöser des Krieges.", "This event was the trigger for the war.", "Ez az esemény volt a háború kiváltó oka.", "Acest eveniment a fost declanșarea războiului."),
      svg: { type: "icon-grid", items: [{ emoji: "🔫", label: "Schuss" }, { emoji: "📅", label: "28. Juni" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Opfer", "Victim", "Áldozat", "Victimă"), right: L("Franz Ferdinand", "Franz Ferdinand", "Ferenc Ferdinánd", "Franz Ferdinand") }, { left: L("Ort", "Location", "Elhelyezkedés", "Locaţie"), right: L("Sarajevo", "Sarajevo", "Szarajevó", "Saraievo") }] },
      quiz: { question: L("Wer wurde in Sarajevo ermordet?", "Who was murdered in Sarajevo?", "Kit gyilkoltak meg Szarajevóban?", "Cine a fost ucis la Saraievo?"), choices: [L("Franz Ferdinand", "Franz Ferdinand", "Ferenc Ferdinánd", "Franz Ferdinand"), L("Wilhelm II.", "William II", "Vilmos II", "William al II-lea"), L("Bismarck", "Bismarck", "Bismarck", "Bismarck"), L("Hitler", "Hitler", "Hitler", "Hitler")], answer: L("Franz Ferdinand", "Franz Ferdinand", "Ferenc Ferdinánd", "Franz Ferdinand") }
    },
    {
      id: "grabenkrieg",
      title: L("Grabenkrieg", "Trench warfare", "Árokharc", "Război de tranșee"),
      hint1: L("Soldaten lebten monatelang in Schützengräben.", "Soldiers lived in trenches for months.", "A katonák hónapokig lövészárkokban éltek.", "Soldații au trăit luni de zile în tranșee."),
      hint2: L("Es gab kaum Geländegewinne, nur viele Tote.", "There was hardly any ground gained, just a lot of deaths.", "Alig sikerült teret nyerni, csak sok haláleset.", "Nu s-a câștigat aproape nimic, doar o mulțime de morți."),
      svg: { type: "text-bubbles", items: [{ text: "Angriff → Verlust", color: "#fff", bg: "#3b82f6" }, { text: "Abwehr → Graben", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "gap-fill", text: L("An der __ erstarrte die Front.", "At the __ the front froze.", "A __-nál a front megfagyott.", "La __ frontul a înghețat."), gaps: [{ index: 0, options: ["Westfront", "Ostfront"], correct: 0 }] },
      quiz: { question: L("Was ist typisch für den Ersten Weltkrieg?", "What is typical of the First World War?", "Mi jellemző az első világháborúra?", "Ce este tipic pentru Primul Război Mondial?"), choices: [L("Grabenkrieg", "Trench warfare", "Árokharc", "Război de tranșee"), L("Blitzkrieg", "Blitzkrieg", "Villámháború", "Blitzkrieg"), L("Ritterkampf", "Knight fight", "Lovagharc", "Lupta cavalerilor"), L("Atomkrieg", "Nuclear war", "Atomháború", "Războiul nuclear")], answer: L("Grabenkrieg", "Trench warfare", "Árokharc", "Război de tranșee") }
    },
    {
      id: "giftgas",
      title: L("Giftgas", "Poison gas", "Mérgező gáz", "Gaz otrăvitor"),
      hint1: L("Erstmals wurden chemische Waffen eingesetzt.", "Chemical weapons were used for the first time.", "Először használtak vegyi fegyvert.", "Armele chimice au fost folosite pentru prima dată."),
      hint2: L("Es verursachte schreckliche Qualen.", "It caused terrible agony.", "Szörnyű kínt okozott.", "A provocat o agonie teribilă."),
      svg: { type: "text-bubbles", items: [{ text: "Gas", color: "#fff", bg: "#4ade80" }, { text: "Qual", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "word-order", words: [L("Einsatz", "Mission", "Misszió", "Misiune"), L("von", "from", "-tól", "din"), L("chemischen", "chemical", "kémiai", "chimic"), L("Waffen", "Weapons", "Fegyverek", "Arme")], instruction: L("Was war neu?", "What was new?", "Mi volt az új?", "Ce era nou?") },
      quiz: { question: L("Welche neue Waffe wurde eingesetzt?", "What new weapon was used?", "Milyen új fegyvert használtak?", "Ce armă nouă a fost folosită?"), choices: [L("Giftgas", "Poison gas", "Mérgező gáz", "Gaz otrăvitor"), L("Armbrust", "crossbow", "nyílpuska", "arbaleta"), L("Drohnen", "Drones", "Drónok", "Drones"), L("Laser", "Laser", "Lézer", "Laser")], answer: L("Giftgas", "Poison gas", "Mérgező gáz", "Gaz otrăvitor") }
    },
    {
      id: "materialschlacht",
      title: L("Materialschlacht", "Material battle", "Anyagi harc", "Luptă materială"),
      hint1: L("Enormer Einsatz von Waffen und Munition.", "Enormous use of weapons and ammunition.", "Hatalmas fegyver- és lőszerhasználat.", "Utilizarea enormă a armelor și muniției."),
      hint2: L("Die Industrie arbeitete nur für den Krieg.", "Industry only worked for the war.", "Az ipar csak a háborúra dolgozott.", "Industria a funcționat doar pentru război."),
      svg: { type: "icon-grid", items: [{ emoji: "💣", label: "Bomben" }, { emoji: "🏭", label: "Fabrik" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "w", label: L("Waffen", "Weapons", "Fegyverek", "Arme") }], items: [{ text: L("Panzer", "Tank", "Tartály", "Rezervor"), bucketId: "w" }, { text: L("MG", "MG", "MG", "MG"), bucketId: "w" }] },
      quiz: { question: L("Was bedeutet Materialschlacht?", "What does material battle mean?", "Mit jelent az anyagi harc?", "Ce înseamnă bătălia materială?"), choices: [L("Massiver Waffeneinsatz", "Massive use of weapons", "Masszív fegyverhasználat", "Utilizarea masivă a armelor"), L("Tausch von Waren", "Exchange of goods", "Árucsere", "Schimb de mărfuri"), L("Sportwettkampf", "Sports competition", "Sportverseny", "Competiție sportivă"), L("Bau von Häusern", "Construction of houses", "Házak építése", "Construcția de case")], answer: L("Massiver Waffeneinsatz", "Massive use of weapons", "Masszív fegyverhasználat", "Utilizarea masivă a armelor") }
    },
    {
      id: "hindenburg",
      title: L("Paul von Hindenburg", "Paul von Hindenburg", "Paul von Hindenburg", "Paul von Hindenburg"),
      hint1: L("Deutscher Generalfeldmarschall.", "German Field Marshal.", "német tábornagy.", "feldmareșal german."),
      hint2: L("Späterer Reichspräsident.", "Later Reich President.", "Későbbi birodalmi elnök.", "Mai târziu, președintele Reich-ului."),
      svg: { type: "word-display", word: "Generalfeldmarschall", color: "#1e3a8a" },
      interactive: { type: "highlight-text", text: L("Hindenburg wurde durch den Sieg bei Tannenberg berühmt.", "Hindenburg became famous for his victory at Tannenberg.", "Hindenburg a tannenbergi győzelmével vált híressé.", "Hindenburg a devenit faimos pentru victoria sa de la Tannenberg."), instruction: L("Wichtiger Name!", "Important name!", "Fontos név!", "Nume important!") },
      quiz: { question: L("Wer war ein bekannter deutscher General?", "Who was a well-known German general?", "Ki volt az ismert német tábornok?", "Cine a fost un cunoscut general german?"), choices: [L("Hindenburg", "Hindenburg", "Hindenburg", "Hindenburg"), L("Napoleon", "Napoleon", "Napóleon", "Napoleon"), L("Washington", "Washington", "Washington", "Washington"), L("Caesar", "Caesar", "Caesar", "Cezar")], answer: L("Hindenburg", "Hindenburg", "Hindenburg", "Hindenburg") }
    },
    {
      id: "versaillervertrag",
      title: L("Versailler Vertrag", "Treaty of Versailles", "Versailles-i szerződés", "Tratatul de la Versailles"),
      hint1: L("Friedensvertrag von 1919.", "Peace treaty of 1919.", "1919-es békeszerződés.", "Tratatul de pace din 1919."),
      hint2: L("Harte Bedingungen für Deutschland.", "Tough conditions for Germany.", "Nehéz körülmények Németország számára.", "Condiții grele pentru Germania."),
      svg: { type: "text-bubbles", items: [{ text: "Schuld → Deutschland", color: "#fff", bg: "#3b82f6" }, { text: "Folge → Reparationen", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "tap-count", count: 1919, instruction: L("In welchem Jahr wurde der Vertrag unterzeichnet?", "In what year was the contract signed?", "Melyik évben írták alá a szerződést?", "In ce an a fost semnat contractul?") },
      quiz: { question: L("Wie hieß der Friedensvertrag nach 1918?", "What was the name of the peace treaty after 1918?", "Mi volt a békeszerződés neve 1918 után?", "Cum se numea tratatul de pace după 1918?"), choices: [L("Versailler Vertrag", "Treaty of Versailles", "Versailles-i szerződés", "Tratatul de la Versailles"), L("Wiener Kongress", "Congress of Vienna", "Bécsi Kongresszus", "Congresul de la Viena"), L("Maastricht", "Maastricht", "Maastricht", "Maastricht"), L("Westfälischer Friede", "Peace of Westphalia", "Vesztfáliai béke", "Pacea din Westfalia")], answer: L("Versailler Vertrag", "Treaty of Versailles", "Versailles-i szerződés", "Tratatul de la Versailles") }
    },
    {
      id: "reparationen",
      title: L("Reparationen", "Reparations", "Jóvátétel", "Reparații"),
      hint1: L("Entschädigungszahlungen Deutschlands.", "Compensation payments from Germany.", "Kártérítési kifizetések Németországból.", "Plăți de compensații din Germania."),
      hint2: L("Belastung für die neue Demokratie.", "Burden on the new democracy.", "Teher az új demokrácián.", "Povara pentru noua democratie."),
      svg: { type: "text-bubbles", items: [{ text: "Geld", color: "#fff", bg: "#fbbf24" }, { text: "Schuld", color: "#fff", bg: "#475569" }] },
      interactive: { type: "sentence-build", words: [L("Deutschland", "Germany", "Németország", "Germania"), L("musste", "had to", "kellett", "trebuia"), L("hohe", "height", "magasság", "înălţime"), L("Summen", "Buzz", "Zümmögés", "Buzz"), L("bezahlen", "pay", "fizetés", "plată")], instruction: L("Was sind Reparationen?", "What are reparations?", "Mik azok a jóvátételek?", "Ce sunt reparațiile?") },
      quiz: { question: L("Was musste Deutschland laut Vertrag leisten?", "What did Germany have to do according to the contract?", "Mit kellett Németországnak tennie a szerződés szerint?", "Ce trebuia să facă Germania conform contractului?"), choices: [L("Reparationen", "Reparations", "Jóvátétel", "Reparații"), L("Keine Steuern", "No taxes", "Nincsenek adók", "Fara taxe"), L("Neue Schlösser", "New locks", "Új zárak", "Încuietori noi"), L("Urlaub geben", "give vacation", "szabadságot adni", "da vacanta")], answer: L("Reparationen", "Reparations", "Jóvátétel", "Reparații") }
    },
    {
      id: "novemberrevolution",
      title: L("Novemberrevolution", "November revolution", "novemberi forradalom", "revoluția din noiembrie"),
      hint1: L("1918 stürzte das Kaiserreich.", "In 1918 the empire fell.", "1918-ban a birodalom összeomlott.", "În 1918 imperiul a căzut."),
      hint2: L("Deutschland wurde eine Republik.", "Germany became a republic.", "Németország köztársaság lett.", "Germania a devenit o republică."),
      svg: { type: "icon-grid", items: [{ emoji: "🚩", label: "Aufstand" }, { emoji: "🏙️", label: "Berlin" }] },
      interactive: { type: "gap-fill", text: L("Kaiser __ dankte ab.", "Emperor __ abdicated.", "__ császár lemondott a trónról.", "Împăratul __ a abdicat."), gaps: [{ index: 0, options: ["Wilhelm II.", "Friedrich"], correct: 0 }] },
      quiz: { question: L("Was geschah im November 1918?", "What happened in November 1918?", "Mi történt 1918 novemberében?", "Ce s-a întâmplat în noiembrie 1918?"), choices: [L("Revolution", "revolution", "forradalom", "revoluţie"), L("Kaiserkrönung", "Imperial coronation", "Birodalmi koronázás", "Încoronarea imperială"), L("Olympiade", "Olympics", "olimpia", "olimpiade"), L("Mauerbau", "Building a wall", "Fal építése", "Construirea unui zid")], answer: L("Revolution", "revolution", "forradalom", "revoluţie") }
    },
    {
      id: "u_boot",
      title: L("U-Boot-Krieg", "Submarine warfare", "Tengeralattjáró hadviselés", "Război submarin"),
      hint1: L("Deutschland setzte Unterseeboote ein.", "Germany used submarines.", "Németország tengeralattjárókat használt.", "Germania a folosit submarine."),
      hint2: L("Grund für den Kriegseintritt der USA.", "Reason for the USA entering the war.", "Az USA háborúba lépésének oka.", "Motivul intrării SUA în război."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "U-Boot" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("U-Boot", "Submarine", "Tengeralattjáró", "Submarin"), right: L("Seekrieg", "Naval War", "Tengerészeti háború", "Război Naval") }, { left: L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII"), right: L("Kriegseintritt", "Entry into war", "Belépés a háborúba", "Intrarea în război") }] },
      quiz: { question: L("Welches Land trat wegen des U-Boot-Kriegs ein?", "Which country intervened because of the submarine war?", "Melyik ország avatkozott be a tengeralattjáró-háború miatt?", "Care țară a intervenit din cauza războiului submarin?"), choices: [L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII"), L("Russland", "Russia", "Oroszország", "Rusia"), L("China", "China", "Kína", "China"), L("Japan", "Japan", "Japán", "Japonia")], answer: L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII") }
    },
    {
      id: "tannenberg",
      title: L("Schlacht bei Tannenberg", "Battle of Tannenberg", "Tannenbergi csata", "Bătălia de la Tannenberg"),
      hint1: L("Großer Sieg im Osten gegen Russland.", "Big win in the East against Russia.", "Nagy győzelem keleten Oroszország ellen.", "Mare victorie în Est împotriva Rusiei."),
      hint2: L("Hindenburg und Ludendorff wurden Helden.", "Hindenburg and Ludendorff became heroes.", "Hindenburg és Ludendorff hősök lettek.", "Hindenburg și Ludendorff au devenit eroi."),
      svg: { type: "text-bubbles", items: [{ text: "Osten", color: "#fff", bg: "#1e3a8a" }, { text: "Sieg", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Ostfront", "Eastern Front", "Keleti Front", "Frontul de Est"), items: [L("Tannenberg", "Tannenberg", "Tannenberg", "Tannenberg"), L("Masuren", "Masuria", "Mazuria", "Masuria")] }] },
      quiz: { question: L("Gegen wen siegte Deutschland bei Tannenberg?", "Who did Germany win against at Tannenberg?", "Ki ellen nyert Németország Tannenbergben?", "Cui a câștigat Germania la Tannenberg?"), choices: [L("Russland", "Russia", "Oroszország", "Rusia"), L("Frankreich", "France", "Franciaország", "Franţa"), L("England", "England", "Anglia", "Anglia"), L("Italien", "Italy", "Olaszország", "Italia")], answer: L("Russland", "Russia", "Oroszország", "Rusia") }
    },
    {
      id: "frauenwahlrecht",
      title: L("Frauenwahlrecht", "Women's suffrage", "A nők választójoga", "Dreptul de vot al femeilor"),
      hint1: L("Nach dem Krieg erhielten Frauen das Wahlrecht.", "After the war, women received the right to vote.", "A háború után a nők szavazati jogot kaptak.", "După război, femeile au primit dreptul de vot."),
      hint2: L("Erstmals 1919 in Deutschland.", "For the first time in Germany in 1919.", "Németországban először 1919-ben.", "Pentru prima dată în Germania în 1919."),
      svg: { type: "word-display", word: "Wahlrecht", color: "#db2777" },
      interactive: { type: "lang-mcq", question: L("Wann durften Frauen erstmals wählen?", "When were women first allowed to vote?", "Mikor szavazhattak először a nők?", "Când au primit pentru prima dată femeile voie să voteze?"), choices: [L("1919", "1919", "1919", "1919"), L("1871", "1871", "1871", "1871"), L("1945", "1945", "1945", "1945")], answer: L("1919", "1919", "1919", "1919") },
      quiz: { question: L("Wann erhielten Frauen in Deutschland das Wahlrecht?", "When did women in Germany get the right to vote?", "Mikor kaptak választójogot a nők Németországban?", "Când au primit femeile din Germania dreptul de vot?"), choices: [L("1919", "1919", "1919", "1919"), L("1871", "1871", "1871", "1871"), L("1945", "1945", "1945", "1945"), L("1933", "1933", "1933", "1933")], answer: L("1919", "1919", "1919", "1919") }
    },
    {
      id: "hunger_ww1",
      title: L("Steckrübenwinter", "Turnip winter", "Fehérrépa tél", "Napi iarna"),
      hint1: L("Großer Hunger in der Heimat.", "Great hunger at home.", "Nagy éhség otthon.", "Foame mare acasă."),
      hint2: L("Wegen der britischen Seeblockade.", "Because of the British naval blockade.", "A brit tengeri blokád miatt.", "Din cauza blocadei navale britanice."),
      svg: { type: "icon-grid", items: [{ emoji: "🥔", label: "Hunger" }, { emoji: "❄️", label: "Winter" }] },
      interactive: { type: "gap-fill", text: L("Es gab fast nur noch __.", "There was almost only __.", "Szinte csak __ volt.", "Era aproape doar __."), gaps: [{ index: 0, options: [L("Steckrüben", "Turnips", "Fehérrépa", "Napi"), L("Fleisch", "Meat", "Hús", "Carne")], correct: 0 }] },
      quiz: { question: L("Warum hungerte das Volk?", "Why were the people hungry?", "Miért éheztek az emberek?", "De ce le era oamenilor foame?"), choices: [L("Seeblockade", "Naval blockade", "Tengeri blokád", "Blocada navală"), L("Zu viel Regen", "Too much rain", "Túl sok eső", "Prea multă ploaie"), L("Keine Bauern", "No farmers", "Nincsenek gazdák", "Fără fermieri"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Seeblockade", "Naval blockade", "Tengeri blokád", "Blocada navală") }
    },
    {
      id: "panzer_ww1",
      title: L("Tanks", "Tanks", "Tankok", "Tancuri"),
      hint1: L("Erste gepanzerte Fahrzeuge.", "First armored vehicles.", "Az első páncélozott járművek.", "Primele vehicule blindate."),
      hint2: L("Besonders von England eingesetzt.", "Used especially by England.", "Főleg Anglia használta.", "Folosit mai ales de Anglia."),
      svg: { type: "text-bubbles", items: [{ text: "Stahl → Panzer", color: "#fff", bg: "#3b82f6" }, { text: "Durchbruch → Ziel", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "tap-count", count: 1, instruction: L("Wie viele Fronten (Zweifrontenkrieg) gab es?", "How many fronts (two-front war) were there?", "Hány front volt (kétfrontos háború)?", "Câte fronturi (război cu două fronturi) au fost?") },
      quiz: { question: L("Wer setzte Panzer zuerst massiv ein?", "Who was the first to massively use tanks?", "Ki volt az első, aki tömegesen használt tankokat?", "Cine a fost primul care a folosit masiv tancurile?"), choices: [L("England", "England", "Anglia", "Anglia"), L("Preußen", "Prussia", "Poroszország", "Prusia"), L("Russland", "Russia", "Oroszország", "Rusia"), L("China", "China", "Kína", "China")], answer: L("England", "England", "Anglia", "Anglia") }
    },
    {
      id: "dolchstosz",
      title: L("Dolchstoßlegende", "Stab legend", "Stab legenda", "Legenda înjunghiului"),
      hint1: L("Lüge über das Ende des Krieges.", "Lie about the end of the war.", "Hazudj a háború végéről.", "Mințiți despre sfârșitul războiului."),
      hint2: L("Behauptung, das Heer sei unbesiegt geblieben.", "Claim that the army remained undefeated.", "Azt állítják, hogy a hadsereg veretlen maradt.", "Pretindeți că armata a rămas neînvinsă."),
      svg: { type: "text-bubbles", items: [{ text: "Lüge", color: "#fff", bg: "#dc2626" }, { text: "Verrat", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "sentence-build", words: [L("Das", "The", "A", "The"), L("Heer", "army", "hadsereg", "armată"), L("wurde", "became", "lett", "devenit"), L("von", "from", "-tól", "din"), L("hinten", "rear", "hátulsó", "spate"), L("erstochen", "stabbed", "leszúrta", "înjunghiat")], instruction: L("Was war der Kern?", "What was the core?", "Mi volt a mag?", "Care a fost miezul?") },
      quiz: { question: L("Was besagte die Dolchstoßlegende?", "What did the stab in the back legend say?", "Mit mondott a hátba szúrás legendája?", "Ce spunea legenda înjunghiului din spate?"), choices: [L("Verrat in der Heimat", "Betrayal at home", "Árulás otthon", "Trădarea acasă"), L("Sieg an der Front", "Victory at the front", "Győzelem az élen", "Victorie pe front"), L("Frieden mit allen", "Peace with everyone", "Béke mindenkivel", "Pace cu toată lumea"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Verrat in der Heimat", "Betrayal at home", "Árulás otthon", "Trădarea acasă") }
    },
    {
      id: "weimar_start",
      title: L("Geburt von Weimar", "Birth of Weimar", "Weimar születése", "Nașterea lui Weimar"),
      hint1: L("Nationalversammlung in Weimar.", "National Assembly in Weimar.", "Nemzetgyűlés Weimarban.", "Adunarea Națională de la Weimar."),
      hint2: L("Flucht vor den Unruhen in Berlin.", "Escape from the unrest in Berlin.", "Menekülés a berlini nyugtalanság elől.", "Scăpați de tulburările din Berlin."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Theater" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Städte", "Cities", "Városok", "Orașe"), items: [L("Weimar", "Weimar", "Weimar", "Weimar"), L("Berlin", "Berlin", "Berlin", "Berlin")] }] },
      quiz: { question: L("Wo wurde die Verfassung beraten?", "Where was the constitution discussed?", "Hol tárgyalták az alkotmányt?", "Unde s-a discutat constituția?"), choices: [L("Weimar", "Weimar", "Weimar", "Weimar"), L("München", "Munich", "München", "Munchen"), L("Hamburg", "Hamburg", "Hamburg", "Hamburg"), L("Köln", "Cologne", "Köln", "Köln")], answer: L("Weimar", "Weimar", "Weimar", "Weimar") }
    }
  ]
};

// ─── ISLAND 2: DIE WEIMARER REPUBLIK ────────────────────────────────────────
const I2: IslandSpec = {
  id: "i2",
  title: L("Weimarer Republik", "Weimar Republic", "Weimari Köztársaság", "Republica Weimar"),
  topics: [
    {
      id: "hyperinflation",
      title: L("Hyperinflation 1923", "Hyperinflation 1923", "Hiperinfláció 1923", "Hiperinflația 1923"),
      hint1: L("Geld verlor stündlich an Wert.", "Money was losing value every hour.", "A pénz minden órában veszített értékéből.", "Banii pierdeau valoare în fiecare oră."),
      hint2: L("Menschen brauchten Schubkarren voll Geld.", "People needed wheelbarrows full of money.", "Az embereknek pénzzel teli talicskákra volt szükségük.", "Oamenii aveau nevoie de roabe pline cu bani."),
      svg: { type: "icon-grid", items: [{ emoji: "💸", label: "Wertlos" }, { emoji: "🍞", label: "Teuer" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Brot", "Bread", "Kenyér", "Pâine"), right: L("Milliarden", "billion", "milliárd", "miliard") }, { left: L("Geld", "Money", "Pénz", "Bani"), right: L("Papier", "Paper", "Papír", "Hârtie") }] },
      quiz: { question: L("In welchem Jahr war die Hyperinflation?", "What year was hyperinflation?", "Melyik évben volt hiperinfláció?", "În ce an a fost hiperinflația?"), choices: [L("1923", "1923", "1923", "1923"), L("1914", "1914", "1914", "1914"), L("1933", "1933", "1933", "1933"), L("1945", "1945", "1945", "1945")], answer: L("1923", "1923", "1923", "1923") }
    },
    {
      id: "goldene20er",
      title: L("Goldene Zwanziger", "Golden Twenties", "Arany húszas évek", "Anii Douăzeci de Aur"),
      hint1: L("Kulturelle Blüte und Aufschwung.", "Cultural flourishing and recovery.", "Kulturális virágzás és fellendülés.", "Înflorire și recuperare culturală."),
      hint2: L("Kino, Jazz und neue Mode.", "Cinema, jazz and new fashion.", "Mozi, jazz és új divat.", "Cinema, jazz și modă nouă."),
      svg: { type: "text-bubbles", items: [{ text: "Jazz", color: "#fff", bg: "#8b5cf6" }, { text: "Kino", color: "#fff", bg: "#0ea5e9" }] },
      interactive: { type: "gap-fill", text: L("Berlin war eine __.", "Berlin was a __.", "Berlin __ volt.", "Berlinul a fost un __."), gaps: [{ index: 0, options: ["Weltstadt", "Kleinstadt"], correct: 0 }] },
      quiz: { question: L("Was ist typisch für die Goldenen 20er?", "What is typical of the Roaring 20s?", "Mi jellemző a Roaring 20-as évekre?", "Ce este tipic pentru Roaring 20s?"), choices: [L("Aufschwung der Kultur", "Upsurge of culture", "A kultúra felfutása", "Apariția culturii"), L("Dauerhafter Hunger", "Constant hunger", "Állandó éhség", "Foame constantă"), L("Nur Krieg", "Just war", "Csak háború", "Doar război"), L("Keine Musik", "No music", "Nincs zene", "Fără muzică")], answer: L("Aufschwung der Kultur", "Upsurge of culture", "A kultúra felfutása", "Apariția culturii") }
    },
    {
      id: "weltwirtschaftskrise",
      title: L("Börsenkrach 1929", "Stock market crash in 1929", "Tőzsdekrach 1929", "Prăbușirea bursei în 1929"),
      hint1: L("Schwarzer Freitag in New York.", "Black Friday in New York.", "Black Friday New Yorkban.", "Vinerea Neagră la New York."),
      hint2: L("Folge: Massenarbeitslosigkeit weltweit.", "Consequence: mass unemployment worldwide.", "Következmény: tömeges munkanélküliség világszerte.", "Consecință: șomaj în masă în întreaga lume."),
      svg: { type: "text-bubbles", items: [{ text: "Aktien → Sturz", color: "#fff", bg: "#3b82f6" }, { text: "Arbeit → Verlust", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "word-order", words: [L("Aktien", "Shares", "Részvények", "Acțiuni"), L("verlieren", "lose", "veszít", "pierde"), L("an", "to", "hogy", "la"), L("Wert", "Value", "Érték", "Valoare")], instruction: L("Was geschah?", "What happened?", "Mi történt?", "Ce s-a întâmplat?") },
      quiz: { question: L("Wo begann die Weltwirtschaftskrise?", "Where did the Great Depression begin?", "Hol kezdődött a nagy gazdasági világválság?", "Unde a început Marea Depresiune?"), choices: [L("New York", "new York", "New York", "New York"), L("Berlin", "Berlin", "Berlin", "Berlin"), L("London", "London", "London", "Londra"), L("Paris", "Paris", "Párizs", "Paris")], answer: L("New York", "new York", "New York", "New York") }
    },
    {
      id: "stresemann",
      title: L("Gustav Stresemann", "Gustav Stresemann", "Gustav Stresemann", "Gustav Stresemann"),
      hint1: L("Außenminister und Versöhner.", "Foreign Minister and Conciliator.", "külügyminiszter és békéltető.", "Ministrul de Externe și Conciliator."),
      hint2: L("Friedensnobelpreis 1926.", "Nobel Peace Prize 1926.", "Nobel-békedíj 1926.", "Premiul Nobel pentru Pace 1926."),
      svg: { type: "word-display", word: "Frieden", color: "#16a34a" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Nobelpreis", "Nobel Prize", "Nobel-díj", "Premiul Nobel"), right: L("1926", "1926", "1926", "1926") }, { left: L("Locarno", "Locarno", "Locarno", "Locarno"), right: L("Vertrag", "Contract", "Szerződés", "Contracta") }] },
      quiz: { question: L("Was war Stresemanns Ziel?", "What was Stresemann's goal?", "Mi volt Stresemann célja?", "Care a fost scopul lui Stresemann?"), choices: [L("Verständigung", "understanding", "megértés", "înţelegere"), L("Neuer Krieg", "New war", "Új háború", "Război nou"), L("Diktatur", "dictatorship", "diktatúra", "dictatură"), L("Keine Steuern", "No taxes", "Nincsenek adók", "Fara taxe")], answer: L("Verständigung", "understanding", "megértés", "înţelegere") }
    },
    {
      id: "hitlerputsch",
      title: L("Hitler-Putsch 1923", "Hitler Putsch 1923", "Hitler-puccs 1923", "Hitler Putsch 1923"),
      hint1: L("Versuchter Umsturz in München.", "Attempted coup in Munich.", "Puccskísérlet Münchenben.", "Tentativă de lovitură de stat la München."),
      hint2: L("Hitler wurde verhaftet.", "Hitler was arrested.", "Hitlert letartóztatták.", "Hitler a fost arestat."),
      svg: { type: "icon-grid", items: [{ emoji: "🚫", label: "Stopp" }, { emoji: "🍺", label: "München" }] },
      interactive: { type: "gap-fill", text: L("Der Putsch in __ scheiterte.", "The coup in __ failed.", "A __-i puccs meghiúsult.", "Lovitura din __ a eșuat."), gaps: [{ index: 0, options: ["München", "Berlin"], correct: 0 }] },
      quiz: { question: L("Wo fand der Hitler-Putsch statt?", "Where did the Hitler Putsch take place?", "Hol történt a Hitler-puccs?", "Unde a avut loc Putsch-ul lui Hitler?"), choices: [L("München", "Munich", "München", "Munchen"), L("Berlin", "Berlin", "Berlin", "Berlin"), L("Hamburg", "Hamburg", "Hamburg", "Hamburg"), L("Wien", "Vienna", "Bécs", "Viena")], answer: L("München", "Munich", "München", "Munchen") }
    },
    {
      id: "radikalisierung",
      title: L("Radikalisierung", "Radicalization", "Radikalizálódás", "Radicalizarea"),
      hint1: L("Zunahme von Gewalt auf den Straßen.", "Increase in violence on the streets.", "Növekszik az erőszak az utcákon.", "Creșterea violenței pe stradă."),
      hint2: L("Extreme Parteien bekämpften sich.", "Extreme parties fought each other.", "Az extrém pártok harcoltak egymással.", "Partidele extreme s-au luptat între ele."),
      svg: { type: "text-bubbles", items: [{ text: "KPD", color: "#fff", bg: "#dc2626" }, { text: "NSDAP", color: "#fff", bg: "#475569" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "ext", label: L("Extrem", "Extreme", "Szélső", "Extrem") }], items: [{ text: L("Rechts", "Right", "Jobbra", "Corect"), bucketId: "ext" }, { text: L("Links", "Left", "Balra", "Stânga"), bucketId: "ext" }] },
      quiz: { question: L("Was schwächte die Republik am Ende?", "What weakened the republic in the end?", "Mi gyengítette meg végül a köztársaságot?", "Ce a slăbit republica în cele din urmă?"), choices: [L("Radikale Parteien", "Radical parties", "Radikális pártok", "Partidele radicale"), L("Zu viel Einigkeit", "Too much unity", "Túl sok egység", "Prea multă unitate"), L("Wenig Sport", "Little exercise", "Kis gyakorlat", "Mic exercițiu"), L("Gutes Wetter", "Good weather", "Jó idő", "vreme bună")], answer: L("Radikale Parteien", "Radical parties", "Radikális pártok", "Partidele radicale") }
    },
    {
      id: "bauhaus",
      title: L("Das Bauhaus", "The Bauhaus", "A Bauhaus", "Bauhausul"),
      hint1: L("Berühmte Schule für Kunst und Bau.", "Famous school of art and construction.", "Híres művészeti és építőipari iskola.", "Renumită școală de artă și construcții."),
      hint2: L("Form folgt Funktion.", "Form follows function.", "Az űrlap a függvényt követi.", "Forma urmează funcției."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Design" }] },
      interactive: { type: "highlight-text", text: L("Das Bauhaus revolutionierte Architektur und Design.", "The Bauhaus revolutionized architecture and design.", "A Bauhaus forradalmasította az építészetet és a designt.", "Bauhaus a revoluționat arhitectura și designul."), instruction: L("Was war es?", "What was it?", "Mi volt az?", "Ce a fost?") },
      quiz: { question: L("Was ist das Bauhaus?", "What is the Bauhaus?", "Mi az a Bauhaus?", "Ce este Bauhaus?"), choices: [L("Design-Schule", "Design school", "Tervező iskola", "Scoala de design"), L("Ein Baumarkt", "A hardware store", "Egy vasbolt", "Un magazin de hardware"), L("Ein Bahnhof", "A train station", "Egy vasútállomás", "O gară"), L("Eine Kirche", "A church", "Egy templom", "O biserică")], answer: L("Design-Schule", "Design school", "Tervező iskola", "Scoala de design") }
    },
    {
      id: "ebert",
      title: L("Friedrich Ebert", "Friedrich Ebert", "Friedrich Ebert", "Friedrich Ebert"),
      hint1: L("Erster Reichspräsident.", "First Reich President.", "Első birodalmi elnök.", "Primul președinte al Reichului."),
      hint2: L("Ein Sozialdemokrat.", "A social democrat.", "Szociáldemokrata.", "Un social-democrat."),
      svg: { type: "word-display", word: "Präsident", color: "#1e3a8a" },
      interactive: { type: "sentence-build", words: [L("Ebert", "Ebert", "Ebert", "Ebert"), L("war", "was", "volt", "a fost"), L("ein", "a", "a", "o"), L("Mann", "Man", "Férfi", "Om"), L("der", "the", "a", "cel"), L("Mitte", "center", "központ", "centru")], instruction: L("Wer war er?", "Who was he?", "Ki volt ő?", "Cine era el?") },
      quiz: { question: L("Welcher Partei gehörte Ebert an?", "Which party did Ebert belong to?", "Melyik párthoz tartozott Ebert?", "Cărui partid aparținea Ebert?"), choices: [L("SPD", "SPD", "SPD", "SPD"), L("NSDAP", "NSDAP", "NSDAP", "NSDAP"), L("Zentrum", "center", "központ", "centru"), L("KPD", "KPD", "KPD", "KPD")], answer: L("SPD", "SPD", "SPD", "SPD") }
    },
    {
      id: "weimarerverfassung",
      title: L("Die Verfassung", "The Constitution", "Az Alkotmány", "Constitutia"),
      hint1: L("Sehr modern, aber auch schwach.", "Very modern, but also weak.", "Nagyon modern, de gyenge is.", "Foarte modern, dar și slab."),
      hint2: L("Große Macht des Reichspräsidenten.", "Great power of the Reich President.", "A birodalmi elnök nagy hatalma.", "Marea putere a președintelui Reichului."),
      svg: { type: "text-bubbles", items: [{ text: "Volk → Wählt", color: "#fff", bg: "#3b82f6" }, { text: "Präsident → Macht", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "tap-count", count: 48, instruction: L("Welcher Artikel (Notverordnung) war gefährlich?", "Which article (emergency regulation) was dangerous?", "Melyik cikk (sürgősségi rendelet) volt veszélyes?", "Ce articol (regulament de urgență) a fost periculos?") },
      quiz: { question: L("Wer hatte laut Verfassung sehr viel Macht?", "Who had a lot of power according to the constitution?", "Kinek volt nagy hatalma az alkotmány szerint?", "Cine avea multă putere conform constituției?"), choices: [L("Reichspräsident", "Reich President", "Birodalom elnöke", "Președintele Reichului"), L("Bürgermeister", "mayor", "polgármester", "primar"), L("Pfarrer", "Pastor", "Lelkész", "Pastor"), L("Niemand", "No one", "Senki", "Nici unul")], answer: L("Reichspräsident", "Reich President", "Birodalom elnöke", "Președintele Reichului") }
    },
    {
      id: "arbeitslosigkeit",
      title: L("Massennot", "Mass distress", "Tömeges szorongás", "Supărare în masă"),
      hint1: L("Über 6 Millionen Arbeitslose 1932.", "Over 6 million unemployed in 1932.", "1932-ben több mint 6 millió munkanélküli volt.", "Peste 6 milioane de șomeri în 1932."),
      hint2: L("Nährboden für die Nazis.", "Breeding ground for the Nazis.", "A nácik táptalaja.", "Teren de reproducere pentru naziști."),
      svg: { type: "icon-grid", items: [{ emoji: "📉", label: "Krise" }, { emoji: "🚶", label: "Schlange" }] },
      interactive: { type: "gap-fill", text: L("Millionen hatten keine __.", "Millions had no __.", "Millióknak nem volt __.", "Milioane nu aveau __."), gaps: [{ index: 0, options: ["Arbeit", "Handys"], correct: 0 }] },
      quiz: { question: L("Wie viele Arbeitslose gab es ca. 1932?", "How many unemployed people were there around 1932?", "Hány munkanélküli volt 1932 körül?", "Câți șomeri erau în jurul anului 1932?"), choices: [L("6 Millionen", "6 million", "6 millió", "6 milioane"), L("1 Million", "1 million", "1 millió", "1 milion"), L("100.000", "100,000", "100 000", "100.000"), L("Keine", "No", "Nem", "Nu")], answer: L("6 Millionen", "6 million", "6 millió", "6 milioane") }
    },
    {
      id: "vergnuegen",
      title: L("Amüsiermeile Berlin", "Berlin amusement mile", "Berlini szórakoztató mérföld", "Berlinul de distracție"),
      hint1: L("Tanzlokale und Revues.", "Dance halls and revues.", "Tánctermek és revük.", "Săli de dans și reviste."),
      hint2: L("Verdrängung der Sorgen.", "Repression of worries.", "Az aggodalmak elfojtása.", "Reprimarea grijilor."),
      svg: { type: "text-bubbles", items: [{ text: "Tanz", color: "#fff", bg: "#db2777" }, { text: "Nacht", color: "#fff", bg: "#1e3a8a" }] },
      interactive: { type: "lang-mcq", question: L("Wo war das Zentrum des Nachtlebens?", "Where was the center of nightlife?", "Hol volt az éjszakai élet központja?", "Unde era centrul vieții de noapte?"), choices: [L("Berlin", "Berlin", "Berlin", "Berlin"), L("Bonn", "Bonn", "Bonn", "Bonn"), L("Weimar", "Weimar", "Weimar", "Weimar")], answer: L("Berlin", "Berlin", "Berlin", "Berlin") },
      quiz: { question: L("Wo war das kulturelle Zentrum der 1920er?", "Where was the cultural center of the 1920s?", "Hol volt az 1920-as évek kulturális központja?", "Unde a fost centrul cultural al anilor 1920?"), choices: [L("Berlin", "Berlin", "Berlin", "Berlin"), L("Bonn", "Bonn", "Bonn", "Bonn"), L("Weimar", "Weimar", "Weimar", "Weimar"), L("München", "Munich", "München", "Munchen")], answer: L("Berlin", "Berlin", "Berlin", "Berlin") }
    },
    {
      id: "ruhrbesetzung",
      title: L("Ruhrkampf 1923", "Ruhr Battle 1923", "Ruhr-csata 1923", "Bătălia Ruhr 1923"),
      hint1: L("Frankreich besetzt das Ruhrgebiet.", "France occupies the Ruhr area.", "Franciaország elfoglalja a Ruhr-vidéket.", "Franța ocupă zona Ruhr."),
      hint2: L("Passiver Widerstand der Deutschen.", "Passive resistance from the Germans.", "Passzív ellenállás a németek részéről.", "Rezistența pasivă a germanilor."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Kohle" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Frankreich", "France", "Franciaország", "Franţa"), right: L("Besatzung", "crew", "legénység", "echipajul") }, { left: L("Ruhr", "Dysentery", "Vérhas", "Dizenterie"), right: L("Kohle", "Money", "Pénz", "Bani") }] },
      quiz: { question: L("Welches Gebiet wurde 1923 besetzt?", "Which area was occupied in 1923?", "Melyik területet foglalták el 1923-ban?", "Ce zonă a fost ocupată în 1923?"), choices: [L("Ruhrgebiet", "Ruhr area", "Ruhr-vidék", "Zona Ruhr"), L("Bayern", "Bavaria", "Bajorország", "Bavaria"), L("Sachsen", "Saxony", "Szászország", "Saxonia"), L("Berlin", "Berlin", "Berlin", "Berlin")], answer: L("Ruhrgebiet", "Ruhr area", "Ruhr-vidék", "Zona Ruhr") }
    },
    {
      id: "dolchstosz_weimar",
      title: L("Belastung", "Burden", "Teher", "Povară"),
      hint1: L("Rechte Propaganda gegen Demokraten.", "Right-wing propaganda against Democrats.", "Jobboldali propaganda a demokraták ellen.", "Propaganda de dreapta împotriva democraților."),
      hint2: L("'Novemberverbrecher' als Schimpfwort.", "'November criminal' as a swear word.", "„Novemberi bűnöző” szitokszóként.", "„Pentru noiembrie” ca înjurătură."),
      svg: { type: "text-bubbles", items: [{ text: "Hass", color: "#fff", bg: "#991b1b" }, { text: "Wut", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Gegner", "Opponent", "Ellenfél", "Adversar"), items: [L("Nationalisten", "Nationalists", "nacionalisták", "Naţionalişti"), L("Monarchisten", "Monarchists", "Monarchisták", "Monarhiști")] }] },
      quiz: { question: L("Wie nannten Feinde die Demokraten?", "What did enemies call the Democrats?", "Hogy hívták az ellenségek a demokratákat?", "Cum i-au numit dușmanii pe democrați?"), choices: [L("Novemberverbrecher", "November criminals", "Novemberi bűnözők", "criminali din noiembrie"), L("Helden", "Heroes", "Hősök", "Eroi"), L("Könige", "Kings", "Királyok", "regi"), L("Sportler", "sportsman", "sportember", "sportiv")], answer: L("Novemberverbrecher", "November criminals", "Novemberi bűnözők", "criminali din noiembrie") }
    },
    {
      id: "frauenbild",
      title: L("Neue Frau", "New woman", "Új nő", "Femeie nouă"),
      hint1: L("Kurze Haare, Berufstätigkeit.", "Short hair, professional activity.", "Rövid haj, szakmai tevékenység.", "Păr scurt, activitate profesională."),
      hint2: L("Mehr Unabhängigkeit.", "More independence.", "Több függetlenség.", "Mai multă independență."),
      svg: { type: "icon-grid", items: [{ emoji: "👩‍💼", label: "Beruf" }, { emoji: "✂️", label: "Bubikopf" }] },
      interactive: { type: "sentence-build", words: [L("Frauen", "Women", "Nők", "Femei"), L("wurden", "became", "lett", "devenit"), L("selbstbewusster", "more confident", "magabiztosabb", "mai încrezător")], instruction: L("Was änderte sich?", "What changed?", "Mi változott?", "Ce sa schimbat?") },
      quiz: { question: L("Welche Frisur war modern?", "Which hairstyle was modern?", "Melyik frizura volt modern?", "Ce coafură era modernă?"), choices: [L("Bubikopf", "bobbed hair", "kócos haj", "părul bobinet"), L("Lange Zöpfe", "Long braids", "Hosszú fonatok", "Impletituri lungi"), L("Perücke", "wig", "paróka", "perucă"), L("Glatze", "Bald", "Kopasz", "Chel")], answer: L("Bubikopf", "bobbed hair", "kócos haj", "părul bobinet") }
    },
    {
      id: "hindenburg_praesident",
      title: L("Paul von Hindenburg", "Paul von Hindenburg", "Paul von Hindenburg", "Paul von Hindenburg"),
      hint1: L("Reichspräsident ab 1925.", "Reich President from 1925.", "Birodalom elnöke 1925-től.", "Președinte Reich din 1925."),
      hint2: L("Eigentlich ein Anhänger des Kaisers.", "Actually a supporter of the emperor.", "Valójában a császár támogatója.", "De fapt, un susținător al împăratului."),
      svg: { type: "word-display", word: "Ersatzkaiser", color: "#475569" },
      interactive: { type: "tap-count", count: 2, instruction: L("Wie viele (Ebert/Hindenburg) große Präsidenten?", "How many (Ebert/Hindenburg) great presidents?", "Hány (Ebert/Hindenburg) nagy elnök?", "Câți (Ebert/Hindenburg) președinți mari?") },
      quiz: { question: L("Wer wurde 1925 Präsident?", "Who became president in 1925?", "Ki lett az elnök 1925-ben?", "Cine a devenit președinte în 1925?"), choices: [L("Hindenburg", "Hindenburg", "Hindenburg", "Hindenburg"), L("Hitler", "Hitler", "Hitler", "Hitler"), L("Stresemann", "Stresemann", "Stresemann", "Stresemann"), L("Adenauer", "Adenauer", "Adenauer", "Adenauer")], answer: L("Hindenburg", "Hindenburg", "Hindenburg", "Hindenburg") }
    }
  ]
};

// ─── ISLAND 3: NATIONALSOZIALISMUS & MACHTERGREIFUNG ───────────────────────
const I3: IslandSpec = {
  id: "i3",
  title: L("NS-Zeit", "Nazi period", "náci időszak", "perioada nazistă"),
  topics: [
    {
      id: "machtergreifung",
      title: L("30. Januar 1933", "January 30, 1933", "1933. január 30", "30 ianuarie 1933"),
      hint1: L("Hitler wird Reichskanzler.", "Hitler becomes Reich Chancellor.", "Hitler lesz a birodalmi kancellár.", "Hitler devine cancelar al Reichului."),
      hint2: L("Beginn der Zerstörung der Demokratie.", "Beginning of the destruction of democracy.", "A demokrácia pusztításának kezdete.", "Începutul distrugerii democrației."),
      svg: { type: "icon-grid", items: [{ emoji: "🏛️", label: "Amt" }, { emoji: "📅", label: "30. Jan" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Hitler", "Hitler", "Hitler", "Hitler"), right: L("Kanzler", "Chancellor", "Kancellár", "Cancelar") }, { left: L("Hindenburg", "Hindenburg", "Hindenburg", "Hindenburg"), right: L("Präsident", "president", "elnök", "presedinte") }] },
      quiz: { question: L("Wann wurde Hitler Kanzler?", "When did Hitler become chancellor?", "Mikor lett Hitler kancellár?", "Când a devenit Hitler cancelar?"), choices: [L("30. Januar 1933", "January 30, 1933", "1933. január 30", "30 ianuarie 1933"), L("1. Mai 1945", "May 1, 1945", "1945. május 1", "1 mai 1945"), L("9. November 1918", "November 9, 1918", "1918. november 9", "9 noiembrie 1918"), L("1. September 1939", "September 1, 1939", "1939. szeptember 1", "1 septembrie 1939")], answer: L("30. Januar 1933", "January 30, 1933", "1933. január 30", "30 ianuarie 1933") }
    },
    {
      id: "reichstagsbrand",
      title: L("Reichstagsbrand", "Reichstag fire", "Reichstag tűz", "Incendiul Reichstagului"),
      hint1: L("Das Parlamentsgebäude brannte.", "The parliament building burned.", "A parlament épülete leégett.", "Clădirea Parlamentului a ars."),
      hint2: L("Vorwand für die Verfolgung von Gegnern.", "Pretext for pursuing opponents.", "Az ellenfelek üldözésének ürügye.", "Pretext pentru urmărirea adversarilor."),
      svg: { type: "text-bubbles", items: [{ text: "Feuer", color: "#fff", bg: "#ef4444" }, { text: "Terror", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "gap-fill", text: L("Es war im __ 1933.", "It was in __ 1933.", "1933-ban volt.", "Era în __ 1933."), gaps: [{ index: 0, options: ["Februar", "August"], correct: 0 }] },
      quiz: { question: L("Was diente als Vorwand für Notverordnungen?", "What served as a pretext for emergency regulations?", "Mi szolgált ürügyül a vészhelyzeti szabályozásra?", "Ce a servit drept pretext pentru reglementări de urgență?"), choices: [L("Reichstagsbrand", "Reichstag fire", "Reichstag tűz", "Incendiul Reichstagului"), L("Ein Streik", "A strike", "Sztrájkot", "O grevă"), L("Ein Sportfest", "A sports festival", "Sportfesztivál", "Un festival sportiv"), L("Ein Regen", "A rain", "Egy eső", "O ploaie")], answer: L("Reichstagsbrand", "Reichstag fire", "Reichstag tűz", "Incendiul Reichstagului") }
    },
    {
      id: "ermaechtigungsgesetz",
      title: L("Ermächtigungsgesetz", "Enabling Act", "Engedélyező törvény", "Actul de activare"),
      hint1: L("Selbstentmachtung des Parlaments.", "Disempowerment of Parliament.", "A parlament felhatalmazása.", "Dezactivarea Parlamentului."),
      hint2: L("Hitler konnte nun ohne Parlament Gesetze erlassen.", "Hitler could now pass laws without parliament.", "Hitler immár parlament nélkül is hozhat törvényeket.", "Hitler putea acum să adopte legi fără parlament."),
      svg: { type: "text-bubbles", items: [{ text: "Gesetz → Hitler", color: "#fff", bg: "#3b82f6" }, { text: "Kontrolle → Keine", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "word-order", words: [L("Ende", "End", "Vége", "Sfârşit"), L("der", "the", "a", "cel"), L("Demokratie", "democracy", "demokrácia", "democraţie")], instruction: L("Was bedeutete das Gesetz?", "What did the law mean?", "Mit jelentett a törvény?", "Ce a însemnat legea?") },
      quiz: { question: L("Was bewirkte das Ermächtigungsgesetz?", "What did the enabling law achieve?", "Mit ért el a felhatalmazó törvény?", "Ce a realizat legea de abilitare?"), choices: [L("Diktatur", "dictatorship", "diktatúra", "dictatură"), L("Mehr Freiheit", "More freedom", "Több szabadság", "Mai multă libertate"), L("Wahlen alle Wochen", "Elections every week", "Választások minden héten", "Alegeri în fiecare săptămână"), L("Keine Änderung", "No change", "Nincs változás", "Nicio schimbare")], answer: L("Diktatur", "dictatorship", "diktatúra", "dictatură") }
    },
    {
      id: "gleichschaltung",
      title: L("Gleichschaltung", "Synchronization", "Szinkronizálás", "Sincronizare"),
      hint1: L("Kontrolle über alle Lebensbereiche.", "Control over all areas of life.", "Irányítsd az élet minden területét.", "Control asupra tuturor domeniilor vieții."),
      hint2: L("Parteien und Gewerkschaften wurden verboten.", "Parties and unions were banned.", "Betiltották a pártokat és a szakszervezeteket.", "Partidele și sindicatele au fost interzise."),
      svg: { type: "icon-grid", items: [{ emoji: "🚫", label: "Verbot" }, { emoji: "⚙️", label: "Zwang" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Partei", "party", "fél", "parte"), right: L("NSDAP", "NSDAP", "NSDAP", "NSDAP") }, { left: L("Alleine", "Alone", "Kizárólag", "Singur"), right: L("Macht", "Power", "Hatalom", "Putere") }] },
      quiz: { question: L("Welche Partei war als einzige erlaubt?", "Which party was the only one allowed?", "Melyik párt volt az egyetlen engedélyezett?", "Care partid era singurul permis?"), choices: [L("NSDAP", "NSDAP", "NSDAP", "NSDAP"), L("SPD", "SPD", "SPD", "SPD"), L("KPD", "KPD", "KPD", "KPD"), L("Zentrum", "center", "központ", "centru")], answer: L("NSDAP", "NSDAP", "NSDAP", "NSDAP") }
    },
    {
      id: "propaganda",
      title: L("Propaganda", "propaganda", "propaganda", "propagandă"),
      hint1: L("Gezielte Beeinflussung der Menschen.", "Targeted influence on people.", "Célzott befolyás az emberekre.", "Influență direcționată asupra oamenilor."),
      hint2: L("Joseph Goebbels als Minister.", "Joseph Goebbels as minister.", "Joseph Goebbels miniszter.", "Joseph Goebbels ca ministru."),
      svg: { type: "text-bubbles", items: [{ text: "Radio", color: "#fff", bg: "#fbbf24" }, { text: "Lüge", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "highlight-text", text: L("Goebbels kontrollierte Presse, Funk und Film.", "Goebbels controlled the press, radio and film.", "Goebbels irányította a sajtót, a rádiót és a filmet.", "Goebbels controla presa, radioul și filmul."), instruction: L("Wer war das?", "Who was that?", "Ki volt az?", "Cine era acela?") },
      quiz: { question: L("Wer war Propagandaminister?", "Who was propaganda minister?", "Ki volt a propagandaminiszter?", "Cine a fost ministrul propagandei?"), choices: [L("Goebbels", "Goebbels", "Goebbels", "Goebbels"), L("Hindenburg", "Hindenburg", "Hindenburg", "Hindenburg"), L("Ebert", "Ebert", "Ebert", "Ebert"), L("Adenauer", "Adenauer", "Adenauer", "Adenauer")], answer: L("Goebbels", "Goebbels", "Goebbels", "Goebbels") }
    },
    {
      id: "antisemitismus",
      title: L("Hass auf Juden", "Hatred of Jews", "A zsidógyűlölet", "Ura față de evrei"),
      hint1: L("Kernpunkt der NS-Ideologie.", "Central point of Nazi ideology.", "A náci ideológia központi pontja.", "Punctul central al ideologiei naziste."),
      hint2: L("Ausgrenzung und Entrechtung.", "Exclusion and disenfranchisement.", "Kizárás és jogfosztás.", "Excluderea și lipsa drepturilor de autor."),
      svg: { type: "word-display", word: "Rassenhass", color: "#000" },
      interactive: { type: "block-drag", blocks: [{ label: L("Ideologie", "ideology", "ideológia", "ideologie"), items: [L("Rassismus", "racism", "rasszizmus", "rasism"), L("Antisemitismus", "Anti-Semitism", "Antiszemitizmus", "Antisemitism")] }] },
      quiz: { question: L("Was war ein Hauptmerkmal der NS-Lehre?", "What was a main feature of Nazi doctrine?", "Mi volt a náci doktrína fő jellemzője?", "Care a fost o caracteristică principală a doctrinei naziste?"), choices: [L("Antisemitismus", "Anti-Semitism", "Antiszemitizmus", "Antisemitism"), L("Gleichheit", "equality", "egyenlőség", "egalitate"), L("Frieden", "Peace", "Béke", "Pace"), L("Demokratie", "democracy", "demokrácia", "democraţie")], answer: L("Antisemitismus", "Anti-Semitism", "Antiszemitizmus", "Antisemitism") }
    },
    {
      id: "konzentrationslager",
      title: L("Die Lager", "The camps", "A táborok", "Lagărele"),
      hint1: L("Orte der Haft und Folter.", "Places of detention and torture.", "Fogvatartási és kínzási helyek.", "Locuri de detenție și tortură."),
      hint2: L("Dachau war das erste KZ 1933.", "Dachau was the first concentration camp in 1933.", "Dachau volt az első koncentrációs tábor 1933-ban.", "Dachau a fost primul lagăr de concentrare în 1933."),
      svg: { type: "text-bubbles", items: [{ text: "Gegner → Haft", color: "#fff", bg: "#3b82f6" }, { text: "Gewalt → Terror", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "tap-count", count: 1933, instruction: L("In welchem Jahr wurde Dachau eröffnet?", "In what year was Dachau opened?", "Melyik évben nyitották meg a Dachaut?", "În ce an a fost deschis Dachau?") },
      quiz: { question: L("Wo wurden Gegner eingesperrt?", "Where were opponents imprisoned?", "Hol voltak bebörtönözve az ellenfelek?", "Unde au fost închiși adversarii?"), choices: [L("Konzentrationslager", "Concentration camp", "Koncentrációs tábor", "Lagăr de concentrare"), L("Hotels", "Hotels", "Szállodák", "Hoteluri"), L("Schulen", "Schools", "Iskolák", "scoli"), L("Sportvereine", "Sports clubs", "Sportklubok", "Cluburi sportive")], answer: L("Konzentrationslager", "Concentration camp", "Koncentrációs tábor", "Lagăr de concentrare") }
    },
    {
      id: "hitlerjugend",
      title: L("HJ und BDM", "HJ and BDM", "HJ és BDM", "HJ și BDM"),
      hint1: L("Jugendorganisationen der Nazis.", "Nazi youth organizations.", "Náci ifjúsági szervezetek.", "organizații de tineret naziste."),
      hint2: L("Erziehung zu Gehorsam und Krieg.", "Education for obedience and war.", "Engedelmességre és háborúra nevelés.", "Educație pentru ascultare și război."),
      svg: { type: "icon-grid", items: [{ emoji: "👦", label: "HJ" }, { emoji: "👧", label: "BDM" }] },
      interactive: { type: "gap-fill", text: L("Jugend sollte dem __ folgen.", "Youth should follow the __.", "A fiataloknak követniük kell a __.", "Tinerii ar trebui să urmeze __."), gaps: [{ index: 0, options: [L("Führer", "Leader", "Vezető", "Lider"), L("Vater", "Father", "Apa", "tată")], correct: 0 }] },
      quiz: { question: L("Wie hieß die Organisation für Jungen?", "What was the name of the organization for boys?", "Mi volt a fiúszervezet neve?", "Cum se numea organizația pentru băieți?"), choices: [L("Hitlerjugend", "Hitler Youth", "Hitlerjugend", "Tineretul Hitler"), L("Pfadfinder", "scout", "felderítő", "cercetaş"), L("Sportclub", "Sports club", "Sportklub", "Club sportiv"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Hitlerjugend", "Hitler Youth", "Hitlerjugend", "Tineretul Hitler") }
    },
    {
      id: "nuernbergergesetze",
      title: L("Rassengesetze", "Racial laws", "Faji törvények", "Legile rasiale"),
      hint1: L("1935 wurden Juden entrechtet.", "In 1935 Jews were disenfranchised.", "1935-ben a zsidókat jogfosztották.", "În 1935, evreii au fost privați de drepturi de autor."),
      hint2: L("Verbot von Ehen zwischen Juden und Nichtjuden.", "Prohibition of marriages between Jews and non-Jews.", "Zsidók és nem zsidók közötti házasságkötés tilalma.", "Interzicerea căsătoriilor între evrei și neevrei."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Gesetz" }] },
      interactive: { type: "sentence-build", words: [L("Juden", "Jews", "zsidók", "evrei"), L("verloren", "lost", "elveszett", "pierdut"), L("ihre", "her", "neki", "ei"), L("Rechte", "right", "jobbra", "corect")], instruction: L("Was geschah 1935?", "What happened in 1935?", "Mi történt 1935-ben?", "Ce s-a întâmplat în 1935?") },
      quiz: { question: L("Wo wurden die Rassengesetze verkündet?", "Where were the racial laws promulgated?", "Hol hirdették ki a faji törvényeket?", "Unde au fost promulgate legile rasiale?"), choices: [L("Nürnberg", "Nuremberg", "Nürnberg", "Nürnberg"), L("Berlin", "Berlin", "Berlin", "Berlin"), L("München", "Munich", "München", "Munchen"), L("Wien", "Vienna", "Bécs", "Viena")], answer: L("Nürnberg", "Nuremberg", "Nürnberg", "Nürnberg") }
    },
    {
      id: "volksgemeinschaft",
      title: L("Volksgemeinschaft", "national community", "nemzeti közösség", "comunitatea națională"),
      hint1: L("Einheit der 'Arier'.", "Unity of the 'Aryans'.", "Az „árják” egysége.", "Unitatea „arienilor”."),
      hint2: L("Ausschluss aller anderen.", "exclusion of all others.", "az összes többi kizárása.", "excluderea tuturor celorlalte."),
      svg: { type: "text-bubbles", items: [{ text: "Wir", color: "#fff", bg: "#16a34a" }, { text: "Nicht-Ihr", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "lang-mcq", question: L("Wer durfte dazugehören?", "Who was allowed to belong?", "Kinek szabadott tartoznia?", "Cui i s-a permis să aparțină?"), choices: [L("Nur 'Arier'", "Only 'Aryans'", "csak \"árják\"", "Doar „arieni”"), L("Alle Menschen", "All people", "Minden ember", "Toți oamenii"), L("Nur Reiche", "Only rich people", "Csak gazdag emberek", "Doar oameni bogați")], answer: L("Nur 'Arier'", "Only 'Aryans'", "csak \"árják\"", "Doar „arieni”") },
      quiz: { question: L("Wer durfte laut NS-Ideologie dazugehören?", "Who was allowed to belong according to Nazi ideology?", "Ki tartozhatott a náci ideológia szerint?", "Cui i s-a permis să aparțină conform ideologiei naziste?"), choices: [L("Nur 'Arier'", "Only 'Aryans'", "csak \"árják\"", "Doar „arieni”"), L("Alle Menschen", "All people", "Minden ember", "Toți oamenii"), L("Nur Reiche", "Only rich people", "Csak gazdag emberek", "Doar oameni bogați"), L("Niemand", "No one", "Senki", "Nici unul")], answer: L("Nur 'Arier'", "Only 'Aryans'", "csak \"árják\"", "Doar „arieni”") }
    },
    {
      id: "widerstand_ns",
      title: L("Mutiger Widerstand", "Courageous resistance", "Bátor ellenállás", "Rezistență curajoasă"),
      hint1: L("Menschen, die sich trauten.", "People who dared.", "Emberek, akik mertek.", "Oameni care au îndrăznit."),
      hint2: L("Oft mit dem Leben bezahlt.", "Often paid with one's life.", "Gyakran az életével fizetik meg.", "Adesea plătit cu viața."),
      svg: { type: "icon-grid", items: [{ emoji: "🌹", label: "Weiße Rose" }, { emoji: "💣", label: "Stauffenberg" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Weiße Rose", "White rose", "Fehér rózsa", "Trandafir alb"), right: L("Geschwister Scholl", "Scholl siblings", "Scholl testvérek", "Frații Scholl") }, { left: L("20. Juli", "July 20th", "július 20", "20 iulie"), right: L("Stauffenberg", "Stauffenberg", "Stauffenberg", "Stauffenberg") }] },
      quiz: { question: L("Wer gehörte zum Widerstand?", "Who belonged to the resistance?", "Kik tartoztak az ellenálláshoz?", "Cine a aparținut rezistenței?"), choices: [L("Geschwister Scholl", "Scholl siblings", "Scholl testvérek", "Frații Scholl"), L("Goebbels", "Goebbels", "Goebbels", "Goebbels"), L("Himmler", "Himmler", "Himmler", "Himmler"), L("Niemand", "No one", "Senki", "Nici unul")], answer: L("Geschwister Scholl", "Scholl siblings", "Scholl testvérek", "Frații Scholl") }
    },
    {
      id: "pogromnacht",
      title: L("9. November 1938", "November 9, 1938", "1938. november 9", "9 noiembrie 1938"),
      hint1: L("Brennende Synagogen.", "Burning synagogues.", "Égő zsinagógák.", "Sinagogi aprinse."),
      hint2: L("Offene Gewalt gegen Juden.", "Open violence against Jews.", "Nyílt erőszak a zsidók ellen.", "Violență deschisă împotriva evreilor."),
      svg: { type: "text-bubbles", items: [{ text: "Glas → Scherben", color: "#fff", bg: "#3b82f6" }, { text: "Gewalt → Staatlich", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "gap-fill", text: L("Man nennt es auch __.", "It is also called __.", "__-nek is nevezik.", "Se mai numește și __."), gaps: [{ index: 0, options: ["Kristallnacht", "Friedensnacht"], correct: 0 }] },
      quiz: { question: L("Was geschah in der Pogromnacht?", "What happened on the night of the pogrom?", "Mi történt a pogrom éjszakáján?", "Ce s-a întâmplat în noaptea pogromului?"), choices: [L("Synagogen brannten", "Synagogues burned", "A zsinagógák leégtek", "Sinagogile au ars"), L("König wurde gewählt", "King was elected", "Királyt választottak", "Regele a fost ales"), L("Mauer wurde gebaut", "Wall was built", "Falat építettek", "Zidul a fost construit"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Synagogen brannten", "Synagogues burned", "A zsinagógák leégtek", "Sinagogile au ars") }
    },
    {
      id: "aufrüstung_ns",
      title: L("Vorbereitung", "Preparation", "Készítmény", "Pregătirea"),
      hint1: L("Heimliche und offene Aufrüstung.", "Secret and open armament.", "Titkos és nyílt fegyverzet.", "Armament secret și deschis."),
      hint2: L("Beseitigung der Arbeitslosigkeit durch Rüstung.", "Elimination of unemployment through armaments.", "A munkanélküliség felszámolása fegyverkezéssel.", "Eliminarea șomajului prin armament."),
      svg: { type: "text-bubbles", items: [{ text: "Waffen", color: "#fff", bg: "#475569" }, { text: "Heer", color: "#fff", bg: "#1e3a8a" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Ziele", "Goals", "Gólok", "Goluri"), items: [L("Krieg", "War", "Háború", "Război"), L("Raum", "Space", "Tér", "Spaţiu")] }] },
      quiz: { question: L("Wie bekämpfte Hitler die Arbeitslosigkeit?", "How did Hitler fight unemployment?", "Hogyan küzdött Hitler a munkanélküliség ellen?", "Cum a luptat Hitler cu șomajul?"), choices: [L("Rüstungsindustrie", "Defense industry", "Védelmi ipar", "Industria de apărare"), L("Urlaubsreisen", "Holiday trips", "Üdülési utak", "Călătorii de vacanță"), L("Schulbau", "School building", "Iskola épülete", "Clădirea școlii"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Rüstungsindustrie", "Defense industry", "Védelmi ipar", "Industria de apărare") }
    },
    {
      id: "lebensraum",
      title: L("Lebensraum im Osten", "habitat in the east", "élőhely keleten", "habitat în est"),
      hint1: L("Plan zur Eroberung von Gebieten.", "Plan to conquer territories.", "Területek meghódításának terve.", "Planifică cucerirea teritoriilor."),
      hint2: L("Besonders in Polen und Russland.", "Especially in Poland and Russia.", "Főleg Lengyelországban és Oroszországban.", "Mai ales în Polonia și Rusia."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Osten" }] },
      interactive: { type: "word-order", words: [L("Eroberung", "conquest", "hódítás", "cucerire"), L("von", "from", "-tól", "din"), L("neuem", "new", "új", "nou"), L("Land", "country", "ország", "ţară")], instruction: L("Was war das Ziel?", "What was the goal?", "Mi volt a cél?", "Care a fost scopul?") },
      quiz: { question: L("Wohin wollte Hitler expandieren?", "Where did Hitler want to expand?", "Hol akart Hitler terjeszkedni?", "Unde a vrut Hitler să se extindă?"), choices: [L("Nach Osten", "To the east", "Kelet felé", "Spre est"), L("Nach Westen", "To the west", "Nyugatra", "Spre vest"), L("Nach Amerika", "To America", "Amerikába", "Spre America"), L("Nach Afrika", "To Africa", "Afrikába", "Spre Africa")], answer: L("Nach Osten", "To the east", "Kelet felé", "Spre est") }
    },
    {
      id: "ende_demokratie",
      title: L("Abschluss", "Diploma", "Oklevél", "Diplomă"),
      hint1: L("Der Staat wurde totalitär.", "The state became totalitarian.", "Az állam totalitáriussá vált.", "Statul a devenit totalitar."),
      hint2: L("Keine Freiheit mehr.", "No more freedom.", "Nincs több szabadság.", "Gata cu libertatea."),
      svg: { type: "word-display", word: "Diktatur", color: "#000" },
      interactive: { type: "tap-count", count: 1, instruction: L("Wie viele Parteien (Einparteienstaat) gab es?", "How many parties (one-party state) were there?", "Hány párt (egypárti állam) volt?", "Câte partide (stat cu un singur partid) au fost?") },
      quiz: { question: L("Was war Deutschland ab 1933?", "What was Germany from 1933?", "Mi volt Németország 1933-tól?", "Ce a fost Germania din 1933?"), choices: [L("Totalitäre Diktatur", "Totalitarian dictatorship", "Totalitárius diktatúra", "Dictatura totalitara"), L("Freie Republik", "Free Republic", "Szabad Köztársaság", "Republica Liberă"), L("Königreich", "kingdom", "királyság", "regat"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Totalitäre Diktatur", "Totalitarian dictatorship", "Totalitárius diktatúra", "Dictatura totalitara") }
    }
  ]
};

// ─── ISLAND 4: DER ZWEITE WELTKRIEG ─────────────────────────────────────────
const I4: IslandSpec = {
  id: "i4",
  title: L("Zweiter Weltkrieg", "Second World War", "Második világháború", "Al Doilea Război Mondial"),
  topics: [
    {
      id: "ueberfall_polen",
      title: L("Kriegsbeginn", "Start of war", "A háború kezdete", "Începutul războiului"),
      hint1: L("1. September 1939.", "September 1, 1939.", "1939. szeptember 1.", "1 septembrie 1939."),
      hint2: L("Einmarsch in Polen ohne Kriegserklärung.", "Invasion of Poland without a declaration of war.", "Lengyelország megszállása hadüzenet nélkül.", "Invazia Poloniei fără declarație de război."),
      svg: { type: "icon-grid", items: [{ emoji: "🇵🇱", label: "Polen" }, { emoji: "📅", label: "1. Sept" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("1. Sept 1939", "September 1, 1939", "1939. szeptember 1", "1 septembrie 1939"), right: L("Beginn", "beginning", "kezdet", "început") }, { left: L("Polen", "Poland", "Lengyelország", "Polonia"), right: L("Ziel", "Goal", "Cél", "Scop") }] },
      quiz: { question: L("Wann begann der Zweite Weltkrieg?", "When did World War II begin?", "Mikor kezdődött a második világháború?", "Când a început al Doilea Război Mondial?"), choices: [L("1. September 1939", "September 1, 1939", "1939. szeptember 1", "1 septembrie 1939"), L("1. August 1914", "August 1, 1914", "1914. augusztus 1", "1 august 1914"), L("30. Januar 1933", "January 30, 1933", "1933. január 30", "30 ianuarie 1933"), L("8. Mai 1945", "May 8, 1945", "1945. május 8", "8 mai 1945")], answer: L("1. September 1939", "September 1, 1939", "1939. szeptember 1", "1 septembrie 1939") }
    },
    {
      id: "blitzkrieg_ww2",
      title: L("Blitzkrieg", "Blitzkrieg", "Villámháború", "Blitzkrieg"),
      hint1: L("Schnelle Siege gegen Nachbarländer.", "Quick victories against neighboring countries.", "Gyors győzelmek a szomszédos országok ellen.", "Victorii rapide împotriva țărilor vecine."),
      hint2: L("Zusammenspiel von Panzern und Flugzeugen.", "Interaction between tanks and aircraft.", "A harckocsik és a repülőgépek közötti kölcsönhatás.", "Interacțiunea dintre tancuri și aeronave."),
      svg: { type: "text-bubbles", items: [{ text: "Schnell", color: "#fff", bg: "#fbbf24" }, { text: "Sieg", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "gap-fill", text: L("Erfolge im __.", "Successes in __.", "Sikerek __.", "Succese în __."), gaps: [{ index: 0, options: ["Westen", "Osten"], correct: 0 }] },
      quiz: { question: L("Was war der Blitzkrieg?", "What was the Blitzkrieg?", "Mi volt a Blitzkrieg?", "Ce a fost Blitzkrieg?"), choices: [L("Schneller Angriff", "Quick attack", "Gyors támadás", "Atac rapid"), L("Krieg bei Gewitter", "War in a thunderstorm", "Háború zivatarban", "Război într-o furtună"), L("Ein Wetterphänomen", "A weather phenomenon", "Időjárási jelenség", "Un fenomen meteorologic"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Schneller Angriff", "Quick attack", "Gyors támadás", "Atac rapid") }
    },
    {
      id: "stalingrad_ww2",
      title: L("Stalingrad", "Stalingrad", "Sztálingrád", "Stalingrad"),
      hint1: L("Entscheidender Wendepunkt 1942/43.", "Decisive turning point in 1942/43.", "Döntő fordulópont az 1942/43.", "Moment de cotitură decisiv în 1942/43."),
      hint2: L("Untergang der 6. Armee.", "Fall of the 6th Army.", "A 6. hadsereg bukása.", "Căderea Armatei a 6-a."),
      svg: { type: "text-bubbles", items: [{ text: "Wende → Niederlage", color: "#fff", bg: "#3b82f6" }, { text: "Ort → Wolga", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "word-order", words: [L("Der", "The", "A", "The"), L("Wendepunkt", "Turning point", "Fordulópont", "Punct de cotitură"), L("im", "in the", "a", "în"), L("Osten", "east", "keleti", "Orientul")], instruction: L("Was war Stalingrad?", "What was Stalingrad?", "Mi volt Sztálingrád?", "Ce a fost Stalingrad?") },
      quiz: { question: L("Welche Schlacht war die Wende?", "Which battle was the turning point?", "Melyik csata volt a fordulópont?", "Care bătălie a fost punctul de cotitură?"), choices: [L("Stalingrad", "Stalingrad", "Sztálingrád", "Stalingrad"), L("Waterloo", "Waterloo", "Waterloo", "Waterloo"), L("Sedan", "Sedan", "Szedán", "Sedan"), L("Leipzig", "Leipzig", "Lipcse", "Leipzig")], answer: L("Stalingrad", "Stalingrad", "Sztálingrád", "Stalingrad") }
    },
    {
      id: "holocaust_ww2",
      title: L("Holocaust", "holocaust", "Holocaust", "holocaust"),
      hint1: L("Systematischer Völkermord an Juden.", "Systematic genocide of Jews.", "A zsidók szisztematikus népirtása.", "Genocidul sistematic al evreilor."),
      hint2: L("Über 6 Millionen Opfer.", "Over 6 million victims.", "Több mint 6 millió áldozat.", "Peste 6 milioane de victime."),
      svg: { type: "word-display", word: "Shoah", color: "#475569" },
      interactive: { type: "highlight-text", text: L("Auschwitz war das größte Vernichtungslager.", "Auschwitz was the largest extermination camp.", "Auschwitz volt a legnagyobb megsemmisítő tábor.", "Auschwitz a fost cel mai mare lagăr de exterminare."), instruction: L("Wo geschah das?", "Where did this happen?", "Hol történt ez?", "Unde s-a întâmplat asta?") },
      quiz: { question: L("Wie viele Juden wurden ermordet?", "How many Jews were murdered?", "Hány zsidót gyilkoltak meg?", "Câți evrei au fost uciși?"), choices: [L("Über 6 Millionen", "Over 6 million", "Több mint 6 millió", "Peste 6 milioane"), L("1 Million", "1 million", "1 millió", "1 milion"), L("100.000", "100,000", "100 000", "100.000"), L("Keine", "No", "Nem", "Nu")], answer: L("Über 6 Millionen", "Over 6 million", "Több mint 6 millió", "Peste 6 milioane") }
    },
    {
      id: "widerstand_scholl",
      title: L("Weiße Rose", "White rose", "Fehér rózsa", "Trandafir alb"),
      hint1: L("Widerstand von Studenten in München.", "Resistance from students in Munich.", "A müncheni diákok ellenállása.", "Rezistența studenților din München."),
      hint2: L("Flugblätter gegen Hitler.", "Leaflets against Hitler.", "Szórólapok Hitler ellen.", "Pliante împotriva lui Hitler."),
      svg: { type: "icon-grid", items: [{ emoji: "🌹", label: "Blume" }, { emoji: "📜", label: "Blatt" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Hans Scholl", "Hans Scholl", "Hans Scholl", "Hans Scholl"), right: L("Bruder", "Brother", "Testvér", "Frate") }, { left: L("Sophie Scholl", "Sophie Scholl", "Sophie Scholl", "Sophie Scholl"), right: L("Schwester", "Sister", "nővér", "soră") }] },
      quiz: { question: L("Wie hieß die Widerstandsgruppe?", "What was the name of the resistance group?", "Mi volt az ellenállási csoport neve?", "Cum se numea grupul de rezistență?"), choices: [L("Weiße Rose", "White rose", "Fehér rózsa", "Trandafir alb"), L("Roter Stern", "Red star", "Vörös csillag", "Steaua roșie"), L("Blauer Enzian", "Blue gentian", "Kék encián", "Gențiană albastră"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Weiße Rose", "White rose", "Fehér rózsa", "Trandafir alb") }
    },
    {
      id: "totalerkrieg",
      title: L("Totaler Krieg", "Total war", "Totális háború", "Război total"),
      hint1: L("Goebbels Rede 1943.", "Goebbels speech 1943.", "Goebbels beszéde 1943.", "Discursul lui Goebbels din 1943."),
      hint2: L("Alle Kraft nur noch für den Sieg.", "All your strength left for victory.", "Minden erőd a győzelemhez maradt.", "Toată puterea ți-a rămas pentru victorie."),
      svg: { type: "text-bubbles", items: [{ text: "Alles", color: "#fff", bg: "#991b1b" }, { text: "Sieg", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "gap-fill", text: L("Wollt ihr den __ Krieg?", "Do you want the __ war?", "Akarod a __ háborút?", "Vrei războiul __?"), gaps: [{ index: 0, options: ["totalen", "kurzen"], correct: 0 }] },
      quiz: { question: L("Wer rief zum totalen Krieg auf?", "Who called for total war?", "Ki hívott totális háborúra?", "Cine a cerut un război total?"), choices: [L("Goebbels", "Goebbels", "Goebbels", "Goebbels"), L("Hitler", "Hitler", "Hitler", "Hitler"), L("Stauffenberg", "Stauffenberg", "Stauffenberg", "Stauffenberg"), L("Hindenburg", "Hindenburg", "Hindenburg", "Hindenburg")], answer: L("Goebbels", "Goebbels", "Goebbels", "Goebbels") }
    },
    {
      id: "attentat_juli",
      title: L("20. Juli 1944", "July 20, 1944", "1944. július 20", "20 iulie 1944"),
      hint1: L("Bombenattentat auf Hitler.", "Bomb attack on Hitler.", "Bombatámadás Hitler ellen.", "Atacul cu bombă asupra lui Hitler."),
      hint2: L("Claus Schenk Graf von Stauffenberg.", "Claus Schenk, Count of Stauffenberg.", "Claus Schenk, Stauffenberg grófja.", "Claus Schenk, Contele de Stauffenberg."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Bombe" }] },
      interactive: { type: "tap-count", count: 20, instruction: L("An welchem Tag im Juli war das Attentat?", "On what day in July was the attack?", "Július melyik napján volt a támadás?", "În ce zi din iulie a avut loc atacul?") },
      quiz: { question: L("Wer führte das Attentat 1944 aus?", "Who carried out the assassination attempt in 1944?", "Ki követte el a merényletet 1944-ben?", "Cine a comis tentativa de asasinat în 1944?"), choices: [L("Stauffenberg", "Stauffenberg", "Stauffenberg", "Stauffenberg"), L("Scholl", "Scholl", "Scholl", "Scholl"), L("Adenauer", "Adenauer", "Adenauer", "Adenauer"), L("Brandt", "Brandt", "Brandt", "Brandt")], answer: L("Stauffenberg", "Stauffenberg", "Stauffenberg", "Stauffenberg") }
    },
    {
      id: "dday",
      title: L("D-Day", "D Day", "D nap", "Ziua D"),
      hint1: L("Landung der Alliierten in der Normandie.", "Allied landings in Normandy.", "Szövetségesek partraszállása Normandiában.", "Debarcarea aliaților în Normandia."),
      hint2: L("6. Juni 1944.", "June 6, 1944.", "1944. június 6.", "6 iunie 1944."),
      svg: { type: "text-bubbles", items: [{ text: "Westen → Landung", color: "#fff", bg: "#3b82f6" }, { text: "Freiheit → Ziel", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Länder", "Countries", "Országok", "Țări"), items: [L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII"), L("England", "England", "Anglia", "Anglia")] }] },
      quiz: { question: L("Wo landeten die Alliierten 1944?", "Where did the Allies land in 1944?", "Hol szálltak partra a szövetségesek 1944-ben?", "Unde au aterizat aliații în 1944?"), choices: [L("Normandie", "Normandy", "Normandia", "Normandia"), L("Berlin", "Berlin", "Berlin", "Berlin"), L("Rom", "Rome", "Róma", "Roma"), L("Madrid", "Madrid", "Madrid", "Madrid")], answer: L("Normandie", "Normandy", "Normandia", "Normandia") }
    },
    {
      id: "allierte",
      title: L("Die Alliierten", "The Allies", "A szövetségesek", "Aliații"),
      hint1: L("Gegner Deutschlands.", "opponents of Germany.", "Németország ellenfelei.", "adversarii Germaniei."),
      hint2: L("USA, Sowjetunion, England.", "USA, Soviet Union, England.", "USA, Szovjetunió, Anglia.", "SUA, Uniunea Sovietică, Anglia."),
      svg: { type: "text-bubbles", items: [{ text: "USA", color: "#fff", bg: "#3b82f6" }, { text: "UdSSR", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "lang-mcq", question: L("Wer gehörte nicht zu den Alliierten?", "Who wasn't one of the Allies?", "Ki nem volt a szövetségesek egyike?", "Cine nu a fost unul dintre aliați?"), choices: [L("Japan", "Japan", "Japán", "Japonia"), L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII"), L("England", "England", "Anglia", "Anglia")], answer: L("Japan", "Japan", "Japán", "Japonia") },
      quiz: { question: L("Wer gehörte nicht zu den Alliierten?", "Who wasn't one of the Allies?", "Ki nem volt a szövetségesek egyike?", "Cine nu a fost unul dintre aliați?"), choices: [L("Japan", "Japan", "Japán", "Japonia"), L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII"), L("England", "England", "Anglia", "Anglia"), L("UdSSR", "USSR", "Szovjetunió", "URSS")], answer: L("Japan", "Japan", "Japán", "Japonia") }
    },
    {
      id: "stunde_null",
      title: L("Kriegsende", "End of war", "A háború vége", "Sfârșitul războiului"),
      hint1: L("8. Mai 1945.", "May 8, 1945.", "1945. május 8.", "8 mai 1945."),
      hint2: L("Bedingungslose Kapitulation.", "Unconditional surrender.", "Feltétel nélküli önátadás.", "Predare necondiționată."),
      svg: { type: "word-display", word: "Kapitulation", color: "#000" },
      interactive: { type: "gap-fill", text: L("Der Krieg endete im __.", "The war ended in __.", "A háború __-ben ért véget.", "Războiul s-a încheiat în __."), gaps: [{ index: 0, options: ["Mai", "Januar"], correct: 0 }] },
      quiz: { question: L("Wann endete der Krieg in Europa?", "When did the war in Europe end?", "Mikor ért véget a háború Európában?", "Când s-a încheiat războiul din Europa?"), choices: [L("8. Mai 1945", "May 8, 1945", "1945. május 8", "8 mai 1945"), L("1. September 1939", "September 1, 1939", "1939. szeptember 1", "1 septembrie 1939"), L("11. November 1918", "November 11, 1918", "1918. november 11", "11 noiembrie 1918"), L("3. Oktober 1990", "October 3, 1990", "1990. október 3", "3 octombrie 1990")], answer: L("8. Mai 1945", "May 8, 1945", "1945. május 8", "8 mai 1945") }
    },
    {
      id: "ausbomben",
      title: L("Luftkrieg", "air war", "légi háború", "război aerian"),
      hint1: L("Zerstörung deutscher Städte.", "Destruction of German cities.", "Német városok lerombolása.", "Distrugerea orașelor germane."),
      hint2: L("Dresden, Berlin, Hamburg.", "Dresden, Berlin, Hamburg.", "Drezda, Berlin, Hamburg.", "Dresda, Berlin, Hamburg."),
      svg: { type: "icon-grid", items: [{ emoji: "✈️", label: "Bomber" }, { emoji: "🏚️", label: "Ruine" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Bombe", "bomb", "bomba", "bombă"), right: L("Zerstörung", "destruction", "megsemmisítés", "distrugere") }, { left: L("Bunker", "bunker", "bunker", "buncăr"), right: L("Schutz", "Protection", "Védelem", "Protecţie") }] },
      quiz: { question: L("Was passierte mit vielen deutschen Städten?", "What happened to many German cities?", "Mi történt sok német várossal?", "Ce s-a întâmplat cu multe orașe germane?"), choices: [L("Sie wurden zerbombt", "They were bombed", "Bombázták őket", "Au fost bombardați"), L("Nichts geschah", "Nothing happened", "Nem történt semmi", "Nu sa întâmplat nimic"), L("Sie wurden reicher", "They became richer", "Gazdagabbak lettek", "Au devenit mai bogați"), L("Urlaubsorte", "vacation spots", "nyaralóhelyek", "locuri de vacanta")], answer: L("Sie wurden zerbombt", "They were bombed", "Bombázták őket", "Au fost bombardați") }
    },
    {
      id: "flucht_vertreibung",
      title: L("Flucht", "Escape", "Menekülés", "Evadare"),
      hint1: L("Millionen Deutsche flohen aus dem Osten.", "Millions of Germans fled the East.", "Németek milliói menekültek el Keletről.", "Milioane de germani au fugit din Est."),
      hint2: L("Verlust der Heimat.", "Loss of home.", "Otthonvesztés.", "Pierderea casei."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Treck" }] },
      interactive: { type: "sentence-build", words: [L("Millionen", "Millions", "Milliók", "Milioane"), L("verloren", "lost", "elveszett", "pierdut"), L("ihre", "her", "neki", "ei"), L("Heimat", "Hometown", "Szülőváros", "Orașul natal")], instruction: L("Was war die Folge?", "What was the result?", "mi lett az eredménye?", "Care a fost rezultatul?") },
      quiz: { question: L("Wohin flohen die Menschen?", "Where did the people flee to?", "Hová menekültek az emberek?", "Unde au fugit oamenii?"), choices: [L("Nach Westen", "To the west", "Nyugatra", "Spre vest"), L("Nach Osten", "To the east", "Kelet felé", "Spre est"), L("Nach China", "To China", "Kínába", "Spre China"), L("Nach Japan", "To Japan", "Japánba", "În Japonia")], answer: L("Nach Westen", "To the west", "Nyugatra", "Spre vest") }
    },
    {
      id: "nuernberger_prozesse",
      title: L("Nürnberger Prozesse", "Nuremberg Trials", "Nürnbergi per", "Procesele de la Nürnberg"),
      hint1: L("Gericht gegen Hauptkriegsverbrecher.", "Trial of major war criminals.", "A fő háborús bűnösök tárgyalása.", "Procesul marilor criminali de război."),
      hint2: L("Gerechtigkeit nach dem Grauen.", "Justice after horror.", "Igazság a horror után.", "Dreptate după groază."),
      svg: { type: "text-bubbles", items: [{ text: "Gericht → Urteil", color: "#fff", bg: "#3b82f6" }, { text: "Verbrechen → Strafe", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Ort", "Location", "Elhelyezkedés", "Locaţie"), items: [L("Nürnberg", "Nuremberg", "Nürnberg", "Nürnberg")] }] },
      quiz: { question: L("Wo wurden die NS-Anführer angeklagt?", "Where were the Nazi leaders accused?", "Hol vádolták meg a náci vezetőket?", "Unde au fost acuzați liderii naziști?"), choices: [L("Nürnberg", "Nuremberg", "Nürnberg", "Nürnberg"), L("Berlin", "Berlin", "Berlin", "Berlin"), L("München", "Munich", "München", "Munchen"), L("Bonn", "Bonn", "Bonn", "Bonn")], answer: L("Nürnberg", "Nuremberg", "Nürnberg", "Nürnberg") }
    },
    {
      id: "hiroshima",
      title: L("Atombombe", "Atomic bomb", "Atombomba", "Bombă atomică"),
      hint1: L("Abwurf über Hiroshima und Nagasaki.", "Dropped over Hiroshima and Nagasaki.", "Hirosimára és Nagaszakira esett.", "A căzut peste Hiroshima și Nagasaki."),
      hint2: L("Ende des Krieges im Pazifik.", "End of the War in the Pacific.", "A háború vége a Csendes-óceánon.", "Sfârșitul războiului în Pacific."),
      svg: { type: "text-bubbles", items: [{ text: "Atom", color: "#fff", bg: "#facc15" }, { text: "Tod", color: "#fff", bg: "#000" }] },
      interactive: { type: "tap-count", count: 2, instruction: L("Wie viele Städte (Hiroshima/Nagasaki)?", "How many cities (Hiroshima/Nagasaki)?", "Hány város (Hirosima/Nagaszaki)?", "Câte orașe (Hiroshima/Nagasaki)?") },
      quiz: { question: L("Wer warf die Atombomben?", "Who threw the atomic bombs?", "Ki dobta az atombombákat?", "Cine a aruncat bombele atomice?"), choices: [L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII"), L("Deutschland", "Germany", "Németország", "Germania"), L("Japan", "Japan", "Japán", "Japonia"), L("Russland", "Russia", "Oroszország", "Rusia")], answer: L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII") }
    },
    {
      id: "vereintenationen",
      title: L("Gründung der UN", "Founding of the UN", "Az ENSZ megalapítása", "Fondarea ONU"),
      hint1: L("1945 als Friedenssicherung.", "1945 as peacekeeping.", "1945 békefenntartóként.", "1945 ca menținere a păcii."),
      hint2: L("Nie wieder Krieg.", "Never again war.", "Soha többé háború.", "Niciodată din nou război."),
      svg: { type: "icon-grid", items: [{ emoji: "🇺🇳", label: "UN" }, { emoji: "🕊️", label: "Frieden" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("UN", "U.N.", "ENSZ.", "O.N.U."), right: L("Frieden", "Peace", "Béke", "Pace") }, { left: L("1945", "1945", "1945", "1945"), right: L("Gründung", "Founding", "Alapítás", "Fondator") }] },
      quiz: { question: L("Wozu wurde die UN gegründet?", "Why was the UN founded?", "Miért alapították az ENSZ-t?", "De ce a fost fondată ONU?"), choices: [L("Frieden bewahren", "keep peace", "őrizd meg a békét", "păstrează pacea"), L("Krieg planen", "plan war", "háborút tervezni", "planifică războiul"), L("Geld drucken", "Print money", "Nyomtasson pénzt", "Imprimați bani"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Frieden bewahren", "keep peace", "őrizd meg a békét", "păstrează pacea") }
    }
  ]
};

// ─── ISLAND 5: DEUTSCHLAND IM KALTEN KRIEG ──────────────────────────────────
const I5: IslandSpec = {
  id: "i5",
  title: L("Kalter Krieg", "Cold War", "Hidegháború", "Războiul Rece"),
  topics: [
    {
      id: "teilung",
      title: L("Zwei Staaten", "Two states", "Két állam", "Două state"),
      hint1: L("Gründung von BRD und DDR 1949.", "Founding of FRG and GDR in 1949.", "Az NSZK és az NDK megalapítása 1949-ben.", "Fondarea RFG și RDG în 1949."),
      hint2: L("Deutschland wurde geteilt.", "Germany was divided.", "Németország megosztott.", "Germania era divizată."),
      svg: { type: "two-groups", left: { items: ["BRD"], bg: "#3b82f6", border: "#1d4ed8" }, right: { items: ["DDR"], bg: "#ef4444", border: "#b91c1c" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("BRD", "Germany", "Németország", "Germania"), right: L("Bonn", "Bonn", "Bonn", "Bonn") }, { left: L("DDR", "GDR", "NDK", "RDG"), right: L("Ost-Berlin", "East Berlin", "Kelet-Berlin", "Berlinul de Est") }] },
      quiz: { question: L("Wann wurden die beiden Staaten gegründet?", "When were the two states founded?", "Mikor alapították a két államot?", "Când au fost fondate cele două state?"), choices: [L("1949", "1949", "1949", "1949"), L("1945", "1945", "1945", "1945"), L("1961", "1961", "1961", "1961"), L("1989", "1989", "1989", "1989")], answer: L("1949", "1949", "1949", "1949") }
    },
    {
      id: "mauerbau",
      title: L("Berliner Mauer", "Berlin wall", "Berlini fal", "zidul Berlinului"),
      hint1: L("13. August 1961.", "August 13, 1961.", "1961. augusztus 13.", "13 august 1961."),
      hint2: L("Trennung von Familien und Freunden.", "Separation from families and friends.", "Elszakadás a családtól és a barátoktól.", "Separarea de familii și prieteni."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Mauer" }] },
      interactive: { type: "gap-fill", text: L("Die Mauer stand in __.", "The wall was in __.", "A fal __-ben volt.", "Zidul era în __."), gaps: [{ index: 0, options: ["Berlin", "München"], correct: 0 }] },
      quiz: { question: L("Wann wurde die Mauer gebaut?", "When was the wall built?", "Mikor épült a fal?", "Când a fost construit zidul?"), choices: [L("1961", "1961", "1961", "1961"), L("1949", "1949", "1949", "1949"), L("1989", "1989", "1989", "1989"), L("1945", "1945", "1945", "1945")], answer: L("1961", "1961", "1961", "1961") }
    },
    {
      id: "luftbruecke",
      title: L("Berliner Blockade", "Berlin blockade", "Berlini blokád", "Blocada Berlinului"),
      hint1: L("Rosinenbomber' versorgten die Stadt.", "Raisin bombers supplied the city.", "Mazsolabombázók látták el a várost.", "Avioanele cu stafide au alimentat orașul."),
      hint2: L("Sowjetunion sperrte alle Wege.", "Soviet Union closed all routes.", "A Szovjetunió minden útvonalat lezárt.", "Uniunea Sovietică a închis toate rutele."),
      svg: { type: "icon-grid", items: [{ emoji: "✈️", label: "Bomber" }, { emoji: "🍬", label: "Rosinen" }] },
      interactive: { type: "word-order", words: [L("Hilfe", "Help", "Segítség", "Ajutor"), L("aus", "out of", "ki", "din"), L("der", "the", "a", "cel"), L("Luft", "Air", "Levegő", "Aer")], instruction: L("Was war es?", "What was it?", "Mi volt az?", "Ce a fost?") },
      quiz: { question: L("Wie hießen die Versorgungsflugzeuge?", "What were the supply planes called?", "Hogy hívták az utánpótlási repülőgépeket?", "Cum se numeau avioanele de aprovizionare?"), choices: [L("Rosinenbomber", "Raisin bomber", "Mazsola bombázó", "Bomber cu stafide"), L("Düsenjets", "Jets", "Fúvókák", "Jeturi"), L("Zeppeline", "Zeppelins", "Zeppelinek", "Zeppelini"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Rosinenbomber", "Raisin bomber", "Mazsola bombázó", "Bomber cu stafide") }
    },
    {
      id: "adenauer",
      title: L("Konrad Adenauer", "Konrad Adenauer", "Konrad Adenauer", "Konrad Adenauer"),
      hint1: L("Erster Bundeskanzler der BRD.", "First Federal Chancellor of the Federal Republic of Germany.", "A Németországi Szövetségi Köztársaság első szövetségi kancellárja.", "Primul cancelar federal al Republicii Federale Germania."),
      hint2: L("Westintegration und Aussöhnung.", "Western integration and reconciliation.", "Nyugati integráció és megbékélés.", "Integrarea și reconcilierea occidentală."),
      svg: { type: "word-display", word: "Adenauer", color: "#1e3a8a" },
      interactive: { type: "highlight-text", text: L("Adenauer führte die BRD nach Westen.", "Adenauer led the Federal Republic of Germany to the west.", "Adenauer nyugat felé vezette a Német Szövetségi Köztársaságot.", "Adenauer a condus Republica Federală Germania spre vest."), instruction: L("Wer war er?", "Who was he?", "Ki volt ő?", "Cine era el?") },
      quiz: { question: L("Welcher Partei gehörte Adenauer an?", "Which party did Adenauer belong to?", "Melyik párthoz tartozott Adenauer?", "Cărui partid a aparținut Adenauer?"), choices: [L("CDU", "CDU", "CDU", "CDU"), L("SPD", "SPD", "SPD", "SPD"), L("FDP", "FDP", "FDP", "FDP"), L("SED", "SED", "SED", "SED")], answer: L("CDU", "CDU", "CDU", "CDU") }
    },
    {
      id: "wirtschaftswunder",
      title: L("Wirtschaftswunder", "Economic miracle", "Gazdasági csoda", "Miracol economic"),
      hint1: L("Schneller Aufstieg in den 50ern.", "Rapid rise in the 50s.", "Gyors emelkedés az 50-es években.", "Creștere rapidă în anii 50."),
      hint2: L("Ludwig Erhard und die Soziale Marktwirtschaft.", "Ludwig Erhard and the social market economy.", "Ludwig Erhard és a szociális piacgazdaság.", "Ludwig Erhard și economia socială de piață."),
      svg: { type: "text-bubbles", items: [{ text: "Wohlstand", color: "#fff", bg: "#16a34a" }, { text: "VW Käfer", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "gap-fill", text: L("Vater des Wunders: Ludwig __.", "Father of the miracle: Ludwig __.", "A csoda atyja: Ludwig __.", "Părintele miracolului: Ludwig __."), gaps: [{ index: 0, options: ["Erhard", "Kohl"], correct: 0 }] },
      quiz: { question: L("Was war das Wirtschaftswunder?", "What was the economic miracle?", "Mi volt a gazdasági csoda?", "Care a fost miracolul economic?"), choices: [L("Schneller Aufstieg", "Fast climb", "Gyors mászás", "Urcare rapidă"), L("Ein Zaubertrick", "A magic trick", "Varázstrükk", "Un truc magic"), L("Ein Misserfolg", "A failure", "Egy kudarc", "Un eșec"), L("Nur für Reiche", "Only for rich people", "Csak gazdagoknak", "Doar pentru oameni bogați")], answer: L("Schneller Aufstieg", "Fast climb", "Gyors mászás", "Urcare rapidă") }
    },
    {
      id: "sed",
      title: L("Die SED", "The SED", "A SED", "SED"),
      hint1: L("Einheitspartei in der DDR.", "Unity party in the GDR.", "Egységpárt az NDK-ban.", "Partidul Unității în RDG."),
      hint2: L("Diktatur unter Führung der Sowjetunion.", "Dictatorship led by the Soviet Union.", "A Szovjetunió által vezetett diktatúra.", "Dictatura condusă de Uniunea Sovietică."),
      svg: { type: "text-bubbles", items: [{ text: "DDR → SED", color: "#fff", bg: "#3b82f6" }, { text: "Kontrolle → Stasi", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("DDR", "GDR", "NDK", "RDG"), right: L("Kommunismus", "communism", "kommunizmus", "comunism") }, { left: L("BRD", "Germany", "Németország", "Germania"), right: L("Kapitalismus", "capitalism", "kapitalizmus", "capitalism") }] },
      quiz: { question: L("Wie hieß die mächtigste Partei der DDR?", "What was the name of the most powerful party in the GDR?", "Mi volt a neve az NDK legerősebb pártjának?", "Cum se numea cel mai puternic partid din RDG?"), choices: [L("SED", "SED", "SED", "SED"), L("CDU", "CDU", "CDU", "CDU"), L("SPD", "SPD", "SPD", "SPD"), L("AfD", "AfD", "AfD", "AfD")], answer: L("SED", "SED", "SED", "SED") }
    },
    {
      id: "stasi",
      title: L("Die Stasi", "The Stasi", "A Stasi", "Stasi"),
      hint1: L("Geheimdienst der DDR.", "GDR secret service.", "NDK titkosszolgálat.", "Serviciul secret al RDG."),
      hint2: L("Überwachung der eigenen Bürger.", "Surveillance of your own citizens.", "Saját állampolgárai felügyelete.", "Supravegherea propriilor cetățeni."),
      svg: { type: "icon-grid", items: [{ emoji: "👂", label: "Hören" }, { emoji: "📂", label: "Akte" }] },
      interactive: { type: "tap-count", count: 1, instruction: L("Wie viele (SED) Parteien führten die DDR?", "How many (SED) parties led the GDR?", "Hány (SED) párt vezette az NDK-t?", "Câte partide (SED) au condus RDG?") },
      quiz: { question: L("Was war die Aufgabe der Stasi?", "What was the Stasi's job?", "Mi volt a Stasi feladata?", "Care era treaba lui Stasi?"), choices: [L("Überwachung", "surveillance", "felügyelet", "supraveghere"), L("Post austragen", "deliver mail", "posta kézbesítése", "livra corespondenta"), L("Sport fördern", "Promote sport", "A sport népszerűsítése", "Promovați sportul"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Überwachung", "surveillance", "felügyelet", "supraveghere") }
    },
    {
      id: "aufstand_1953",
      title: L("17. Juni 1953", "June 17, 1953", "1953. június 17", "17 iunie 1953"),
      hint1: L("Volksaufstand in der DDR.", "Popular uprising in the GDR.", "Népfelkelés az NDK-ban.", "Revoltă populară în RDG."),
      hint2: L("Niederschlagung durch sowjetische Panzer.", "Repression by Soviet tanks.", "A szovjet tankok elnyomása.", "Reprimarea tancurilor sovietice."),
      svg: { type: "text-bubbles", items: [{ text: "Freiheit", color: "#fff", bg: "#3b82f6" }, { text: "Panzer", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "highlight-text", text: L("Der Aufstand forderte freie Wahlen.", "The uprising demanded free elections.", "A felkelés szabad választásokat követelt.", "Revolta a cerut alegeri libere."), instruction: L("Was wollten sie?", "What did they want?", "Mit akartak?", "Ce au vrut?") },
      quiz: { question: L("Wann war der erste große Aufstand in der DDR?", "When was the first major uprising in the GDR?", "Mikor volt az első nagyobb felkelés az NDK-ban?", "Când a avut loc prima revoltă majoră din RDG?"), choices: [L("17. Juni 1953", "June 17, 1953", "1953. június 17", "17 iunie 1953"), L("9. November 1989", "November 9, 1989", "1989. november 9", "9 noiembrie 1989"), L("13. August 1961", "August 13, 1961", "1961. augusztus 13", "13 august 1961"), L("1. Mai 1945", "May 1, 1945", "1945. május 1", "1 mai 1945")], answer: L("17. Juni 1953", "June 17, 1953", "1953. június 17", "17 iunie 1953") }
    },
    {
      id: "brand_ostpolitik",
      title: L("Willy Brandt", "Willy Brandt", "Willy Brandt", "Willy Brandt"),
      hint1: L("Kniefall von Warschau.", "Warsaw kneels.", "Varsó letérdel.", "Varșovia îngenunchează."),
      hint2: L("Entspannungspolitik gegenüber dem Osten.", "Policy of détente towards the East.", "Az enyhülés politikája kelet felé.", "Politica de destindere către Est."),
      svg: { type: "word-display", word: "Ostpolitik", color: "#1e3a8a" },
      interactive: { type: "sentence-build", words: [L("Wandel", "change", "változás", "schimba"), L("durch", "through", "keresztül", "prin"), L("Annäherung", "Approach", "Megközelítés", "Abordare")], instruction: L("Brandts Motto?", "Brandt's motto?", "Brandt mottója?", "Motto-ul lui Brandt?") },
      quiz: { question: L("Was war Brandts Ziel?", "What was Brandt's goal?", "Mi volt Brandt célja?", "Care a fost scopul lui Brandt?"), choices: [L("Entspannung", "relaxation", "pihenés", "relaxare"), L("Krieg", "War", "Háború", "Război"), L("Mehr Mauern", "More walls", "Több falat", "Mai mulți pereți"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Entspannung", "relaxation", "pihenés", "relaxare") }
    },
    {
      id: "gastarbeiter",
      title: L("Gastarbeiter", "guest workers", "vendégmunkások", "muncitori invitati"),
      hint1: L("Menschen kamen zum Arbeiten nach Deutschland.", "People came to Germany to work.", "Az emberek dolgozni jöttek Németországba.", "Oamenii au venit în Germania să lucreze."),
      hint2: L("Besonders aus Italien und der Türkei.", "Especially from Italy and Turkey.", "Főleg Olaszországból és Törökországból.", "Mai ales din Italia și Turcia."),
      svg: { type: "icon-grid", items: [{ emoji: "🇮🇹", label: "Italien" }, { emoji: "🇹🇷", label: "Türkei" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Herkunft", "Origin", "Származás", "Origine"), items: [L("Italien", "Italy", "Olaszország", "Italia"), L("Türkei", "Türkiye", "Türkiye", "Turcia")] }] },
      quiz: { question: L("Warum kamen Gastarbeiter?", "Why did guest workers come?", "Miért jöttek vendégmunkások?", "De ce au venit muncitorii invitați?"), choices: [L("Arbeitskräftemangel", "Labor shortage", "Munkaerőhiány", "Lipsa forței de muncă"), L("Zum Urlaub", "For vacation", "Nyaralásra", "Pentru vacanta"), L("Kein Grund", "No reason", "Nincs ok", "Nici un motiv"), L("Wegen des Wetters", "Because of the weather", "Az időjárás miatt", "Din cauza vremii")], answer: L("Arbeitskräftemangel", "Labor shortage", "Munkaerőhiány", "Lipsa forței de muncă") }
    },
    {
      id: "atomgefahr",
      title: L("Kuba-Krise", "Cuban Missile Crisis", "Kubai rakétaválság", "Criza rachetelor din Cuba"),
      hint1: L("Die Welt am Rande des Atomkriegs.", "The world on the brink of nuclear war.", "A világ az atomháború szélén.", "Lumea în pragul războiului nuclear."),
      hint2: L("Raketenstationierung auf Kuba.", "Missile deployment in Cuba.", "Rakétatelepítés Kubában.", "Desfăşurarea de rachete în Cuba."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Rakete" }] },
      interactive: { type: "gap-fill", text: L("Konflikt zwischen USA und __.", "Conflict between USA and __.", "Konfliktus az USA és __ között.", "Conflict între SUA și __."), gaps: [{ index: 0, options: ["UdSSR", "China"], correct: 0 }] },
      quiz: { question: L("Wo standen die Raketen 1962?", "Where were the rockets in 1962?", "Hol voltak a rakéták 1962-ben?", "Unde erau rachetele în 1962?"), choices: [L("Kuba", "Cuba", "Kuba", "Cuba"), L("Berlin", "Berlin", "Berlin", "Berlin"), L("Paris", "Paris", "Párizs", "Paris"), L("London", "London", "London", "Londra")], answer: L("Kuba", "Cuba", "Kuba", "Cuba") }
    },
    {
      id: "apollo",
      title: L("Mondlandung", "Moon landing", "Holdraszállás", "Aterizare pe Lună"),
      hint1: L("Wettlauf im All.", "Space race.", "Űrverseny.", "Cursa spațială."),
      hint2: L("Neil Armstrong 1969.", "Neil Armstrong 1969.", "Neil Armstrong 1969.", "Neil Armstrong 1969."),
      svg: { type: "icon-grid", items: [{ emoji: "🚀", label: "Rakete" }, { emoji: "🌕", label: "Mond" }] },
      interactive: { type: "tap-count", count: 1, instruction: L("Wie viele (erste) Schritte auf dem Mond?", "How many (first) steps on the moon?", "Hány (első) lépés a Holdon?", "Câți (primii) pași pe lună?") },
      quiz: { question: L("Welches Land landete zuerst auf dem Mond?", "Which country landed on the moon first?", "Melyik ország landolt először a Holdon?", "Care țară a aterizat prima pe Lună?"), choices: [L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII"), L("Russland", "Russia", "Oroszország", "Rusia"), L("China", "China", "Kína", "China"), L("Deutschland", "Germany", "Németország", "Germania")], answer: L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII") }
    },
    {
      id: "vietnam",
      title: L("Vietnamkrieg", "Vietnam War", "vietnami háború", "Războiul din Vietnam"),
      hint1: L("Stellvertreterkrieg der Blöcke.", "Proxy war of the blocs.", "A blokkok proxy háborúja.", "Războiul proxy al blocurilor."),
      hint2: L("Große Proteste weltweit.", "Big protests worldwide.", "Nagy tiltakozások világszerte.", "Proteste mari la nivel mondial."),
      svg: { type: "text-bubbles", items: [{ text: "Dschungel", color: "#fff", bg: "#16a34a" }, { text: "Protest", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII"), right: L("Süden", "south", "déli", "sud") }, { left: L("Kommunisten", "communists", "kommunisták", "comuniştilor"), right: L("Norden", "north", "északi", "nord") }] },
      quiz: { question: L("In welchem Jahrzehnt war der Höhepunkt?", "What decade was the peak?", "Melyik évtized volt a csúcs?", "Ce deceniu a fost apogeul?"), choices: [L("1960er", "1960s", "1960-as évek", "anii 1960"), L("1920er", "1920s", "1920-as évek", "anii 1920"), L("1990er", "1990s", "1990-es évek", "anii 1990"), L("1880er", "1880s", "1880-as évek", "anii 1880")], answer: L("1960er", "1960s", "1960-as évek", "anii 1960") }
    },
    {
      id: "frauenbewegung",
      title: L("68er Bewegung", "68 movement", "68 mozgalom", "68 mișcare"),
      hint1: L("Studentenrevolten.", "Student revolts.", "Diáklázadások.", "Revolte studențești."),
      hint2: L("Kritik an den Eltern und dem Staat.", "Criticism of parents and the state.", "A szülők és az állam kritikája.", "Critica părinților și a statului."),
      svg: { type: "word-display", word: "Revolte", color: "#ef4444" },
      interactive: { type: "highlight-text", text: L("Die 68er wollten die Gesellschaft verändern.", "The '68ers wanted to change society.", "A '68-asok meg akarták változtatni a társadalmat.", "Cei din '68 au vrut să schimbe societatea."), instruction: L("Was wollten sie?", "What did they want?", "Mit akartak?", "Ce au vrut?") },
      quiz: { question: L("Welches Jahr gab der Bewegung den Namen?", "What year gave the movement its name?", "Melyik évben kapta a mozgalom nevét?", "În ce an a dat numele mișcării?"), choices: [L("1968", "1968", "1968", "1968"), L("1945", "1945", "1945", "1945"), L("1989", "1989", "1989", "1989"), L("2000", "2000", "2000", "2000")], answer: L("1968", "1968", "1968", "1968") }
    },
    {
      id: "nato",
      title: L("NATO", "NATO", "NATO", "NATO"),
      hint1: L("Westliches Verteidigungsbündnis.", "Western Defense Alliance.", "Nyugati Védelmi Szövetség.", "Alianța de Apărare a Vestului."),
      hint2: L("Schutz vor sowjetischem Angriff.", "Protection from Soviet attack.", "Védelem a szovjet támadás ellen.", "Protecție împotriva atacurilor sovietice."),
      svg: { type: "text-bubbles", items: [{ text: "West → NATO", color: "#fff", bg: "#3b82f6" }, { text: "Ost → Warschauer Pakt", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "lang-mcq", question: L("Was ist die NATO?", "What is NATO?", "Mi az a NATO?", "Ce este NATO?"), choices: [L("Militärbündnis", "military alliance", "katonai szövetség", "alianță militară"), L("Sportverein", "Sports club", "Sportklub", "Club sportiv"), L("Bank", "bank", "bank", "bancar")], answer: L("Militärbündnis", "military alliance", "katonai szövetség", "alianță militară") },
      quiz: { question: L("Was ist die NATO?", "What is NATO?", "Mi az a NATO?", "Ce este NATO?"), choices: [L("Militärbündnis", "military alliance", "katonai szövetség", "alianță militară"), L("Sportverein", "Sports club", "Sportklub", "Club sportiv"), L("Bank", "bank", "bank", "bancar"), L("Hilfsorganisation", "Aid organization", "Segélyszervezet", "Organizarea ajutorului")], answer: L("Militärbündnis", "military alliance", "katonai szövetség", "alianță militară") }
    }
  ]
};

// ─── ISLAND 6: MAUERFALL & WIEDERVEREINIGUNG ───────────────────────────────
const I6: IslandSpec = {
  id: "i6",
  title: L("Wiedervereinigung", "reunion", "újraegyesülés", "reuniune"),
  topics: [
    {
      id: "gorbatschow",
      title: L("Gorbatschow", "Gorbachev", "Gorbacsov", "Gorbaciov"),
      hint1: L("Sowjetischer Führer.", "Soviet leader.", "szovjet vezető.", "lider sovietic."),
      hint2: L("Glasnost (Offenheit) und Perestroika (Umbau).", "Glasnost (openness) and perestroika (reconstruction).", "Glasznoszty (nyitottság) és peresztrojka (rekonstrukció).", "Glasnost (deschidere) și perestroika (reconstrucție)."),
      svg: { type: "icon-grid", items: [{ emoji: "🗣️", label: "Glasnost" }, { emoji: "🏗️", label: "Umbau" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Glasnost", "Glasnost", "Glasnost", "Glasnost"), right: L("Offenheit", "openness", "nyitottság", "deschidere") }, { left: L("Perestroika", "Perestroika", "Peresztrojka", "Perestroika"), right: L("Umbau", "Remodeling", "Átalakítás", "Remodelarea") }] },
      quiz: { question: L("Wer leitete die Reformen in der UdSSR ein?", "Who initiated the reforms in the USSR?", "Ki kezdeményezte a reformokat a Szovjetunióban?", "Cine a inițiat reformele în URSS?"), choices: [L("Gorbatschow", "Gorbachev", "Gorbacsov", "Gorbaciov"), L("Stalin", "Stalin", "Sztálin", "Stalin"), L("Putin", "Putin", "Putyin", "Putin"), L("Lenin", "Lenin", "Lenin", "Lenin")], answer: L("Gorbatschow", "Gorbachev", "Gorbacsov", "Gorbaciov") }
    },
    {
      id: "montagsdemos",
      title: L("Wir sind das Volk", "We are the people", "Mi vagyunk az emberek", "Noi suntem oamenii"),
      hint1: L("Friedliche Demos in der DDR.", "Peaceful demonstrations in the GDR.", "Békés tüntetések az NDK-ban.", "Manifestări pașnice în RDG."),
      hint2: L("Besonders in Leipzig.", "Especially in Leipzig.", "Főleg Lipcsében.", "Mai ales la Leipzig."),
      svg: { type: "text-bubbles", items: [{ text: "Leipzig", color: "#fff", bg: "#1e3a8a" }, { text: "Freiheit", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "gap-fill", text: L("Sie riefen: Wir sind das __.", "They shouted: We are __.", "Azt kiabálták: __ vagyunk.", "Ei au strigat: Suntem __."), gaps: [{ index: 0, options: ["Volk", "Heer"], correct: 0 }] },
      quiz: { question: L("Wo fanden die Montagsdemos statt?", "Where did the Monday demonstrations take place?", "Hol voltak a hétfői tüntetések?", "Unde au avut loc demonstrațiile de luni?"), choices: [L("DDR / Leipzig", "GDR / Leipzig", "NDK / Lipcse", "RDG / Leipzig"), L("BRD / Bonn", "Federal Republic of Germany / Bonn", "Németországi Szövetségi Köztársaság / Bonn", "Republica Federală Germania / Bonn"), L("USA / New York", "USA / New York", "USA / New York", "SUA / New York"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("DDR / Leipzig", "GDR / Leipzig", "NDK / Lipcse", "RDG / Leipzig") }
    },
    {
      id: "mauerfall_1989",
      title: L("9. November 1989", "November 9, 1989", "1989. november 9", "9 noiembrie 1989"),
      hint1: L("Öffnung der Grenze.", "Opening of the border.", "A határ megnyitása.", "Deschiderea frontierei."),
      hint2: L("Menschen tanzten auf der Mauer.", "People danced on the wall.", "Az emberek táncoltak a falon.", "Oamenii au dansat pe perete."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Offen" }] },
      interactive: { type: "tap-count", count: 11, instruction: L("In welchem Monat (Nov=11) fiel die Mauer?", "In which month (Nov=11) did the wall fall?", "Melyik hónapban (nov=11) dőlt le a fal?", "În ce lună (Nov=11) a căzut zidul?") },
      quiz: { question: L("Wann fiel die Berliner Mauer?", "When did the Berlin Wall fall?", "Mikor omlott le a berlini fal?", "Când a căzut Zidul Berlinului?"), choices: [L("9. November 1989", "November 9, 1989", "1989. november 9", "9 noiembrie 1989"), L("3. Oktober 1990", "October 3, 1990", "1990. október 3", "3 octombrie 1990"), L("13. August 1961", "August 13, 1961", "1961. augusztus 13", "13 august 1961"), L("1. Mai 1945", "May 1, 1945", "1945. május 1", "1 mai 1945")], answer: L("9. November 1989", "November 9, 1989", "1989. november 9", "9 noiembrie 1989") }
    },
    {
      id: "helmutkohl",
      title: L("Helmut Kohl", "Helmut Kohl", "Helmut Kohl", "Helmut Kohl"),
      hint1: L("Kanzler der Einheit.", "Chancellor of Unity.", "az egység kancellárja.", "Cancelarul Unității."),
      hint2: L("Er nutzte die Chance zur Einigung.", "He took the opportunity to reach an agreement.", "Megragadta az alkalmat a megegyezésre.", "A profitat de ocazie pentru a ajunge la o înțelegere."),
      svg: { type: "word-display", word: "Kanzler", color: "#1e3a8a" },
      interactive: { type: "highlight-text", text: L("Kohl versprach 'blühende Landschaften'.", "Kohl promised 'blooming landscapes'.", "Kohl „virágzó tájakat” ígért.", "Kohl a promis „peisaje înflorite”."), instruction: L("Wer war das?", "Who was that?", "Ki volt az?", "Cine era acela?") },
      quiz: { question: L("Wer war Bundeskanzler 1990?", "Who was Chancellor in 1990?", "Ki volt a kancellár 1990-ben?", "Cine a fost cancelar în 1990?"), choices: [L("Helmut Kohl", "Helmut Kohl", "Helmut Kohl", "Helmut Kohl"), L("Willy Brandt", "Willy Brandt", "Willy Brandt", "Willy Brandt"), L("Angela Merkel", "Angela Merkel", "Angela Merkel", "Angela Merkel"), L("Gerhard Schröder", "Gerhard Schröder", "Gerhard Schröder", "Gerhard Schröder")], answer: L("Helmut Kohl", "Helmut Kohl", "Helmut Kohl", "Helmut Kohl") }
    },
    {
      id: "einheitsvertrag",
      title: L("3. Oktober 1990", "October 3, 1990", "1990. október 3", "3 octombrie 1990"),
      hint1: L("Tag der Deutschen Einheit.", "Day of German unity.", "A német egység napja.", "Ziua unității germane."),
      hint2: L("Offizielles Ende der Teilung.", "Official end of division.", "A szakosztály hivatalos vége.", "Sfârșitul oficial al diviziunii."),
      svg: { type: "text-bubbles", items: [{ text: "DDR → Beitritt", color: "#fff", bg: "#3b82f6" }, { text: "Einheit → Vollzug", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "word-order", words: [L("Ein", "A", "A", "O"), L("einiges", "some", "néhány", "unele"), L("Deutschland", "Germany", "Németország", "Germania")], instruction: L("Was geschah?", "What happened?", "Mi történt?", "Ce s-a întâmplat?") },
      quiz: { question: L("Was ist der Nationalfeiertag Deutschlands?", "What is Germany's national holiday?", "Mi Németország nemzeti ünnepe?", "Care este sărbătoarea națională a Germaniei?"), choices: [L("3. Oktober", "October 3rd", "október 3", "3 octombrie"), L("9. November", "November 9th", "november 9", "9 noiembrie"), L("1. Mai", "May 1st", "május 1", "1 mai"), L("24. Dezember", "December 24th", "december 24", "24 decembrie")], answer: L("3. Oktober", "October 3rd", "október 3", "3 octombrie") }
    },
    {
      id: "zweiplusvier",
      title: L("Zwei-plus-Vier-Vertrag", "Two plus four contract", "Kettő plusz négy szerződés", "Contract doi plus patru"),
      hint1: L("Vertrag zwischen DE und Siegermächten.", "Treaty between DE and victorious powers.", "Szerződés DE és a győztes hatalmak között.", "Tratat între DE și puterile învingătoare."),
      hint2: L("Souveränität für das vereinte Deutschland.", "Sovereignty for a united Germany.", "Szuverenitás az egyesült Németországnak.", "Suveranitate pentru o Germania unită."),
      svg: { type: "icon-grid", items: [{ emoji: "🤝", label: "Vertrag" }, { emoji: "🌍", label: "Welt" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("2", "2", "2", "2"), right: L("Deutsche Staaten", "German states", "német államok", "state germane") }, { left: L("4", "4", "4", "4"), right: L("Siegermächte", "victorious powers", "győztes hatalmak", "puteri victorioase") }] },
      quiz: { question: L("Wer musste der Einheit zustimmen?", "Who had to agree to unity?", "Kinek kellett beleegyeznie az egységbe?", "Cine trebuia să fie de acord cu unitatea?"), choices: [L("Siegermächte", "victorious powers", "győztes hatalmak", "puteri victorioase"), L("Nur die UN", "Only the UN", "Csak az ENSZ", "Doar ONU"), L("Niemand", "No one", "Senki", "Nici unul"), L("Nur der Papst", "Only the Pope", "Csak a pápa", "Doar Papa")], answer: L("Siegermächte", "victorious powers", "győztes hatalmak", "puteri victorioase") }
    },
    {
      id: "treuhand",
      title: L("Treuhand", "Trust", "Bizalom", "Încredere"),
      hint1: L("Verkauf der DDR-Wirtschaft.", "Selling the GDR economy.", "Az NDK gazdaságának eladása.", "Vând economia RDG."),
      hint2: L("Viele Fabriken wurden geschlossen.", "Many factories were closed.", "Sok gyárat bezártak.", "Multe fabrici au fost închise."),
      svg: { type: "text-bubbles", items: [{ text: "Fabrik", color: "#fff", bg: "#475569" }, { text: "Aus", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "gap-fill", text: L("Viele verloren ihre __.", "Many lost their __.", "Sokan elvesztették a __.", "Mulți și-au pierdut __."), gaps: [{ index: 0, options: ["Arbeit", "Sprache"], correct: 0 }] },
      quiz: { question: L("Was machte die Treuhandanstalt?", "What did the trust company do?", "Mit csinált a bizalmi társaság?", "Ce a făcut compania de încredere?"), choices: [L("DDR-Betriebe privatisieren", "Privatize GDR companies", "Privatizálni az NDK-s cégeket", "Privatizează companiile din RDG"), L("Häuser bauen", "Build houses", "Házakat építeni", "Construiți case"), L("Geld verschenken", "give away money", "pénzt adni", "da bani"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("DDR-Betriebe privatisieren", "Privatize GDR companies", "Privatizálni az NDK-s cégeket", "Privatizează companiile din RDG") }
    },
    {
      id: "ostalgie",
      title: L("Ostalgie", "Ostalgie", "Ostalgie", "Ostalgie"),
      hint1: L("Erinnerung an das Leben in der DDR.", "Remembering life in the GDR.", "Az NDK-beli életre emlékezve.", "Amintirea vieții din RDG."),
      hint2: L("Trabi, Ampelmännchen, Sandmännchen.", "Trabi, traffic light man, sandman.", "Trabi, közlekedési lámpás ember, homokember.", "Trabi, om de semafor, om de nisip."),
      svg: { type: "icon-grid", items: [{ emoji: "🚗", label: "Trabi" }, { emoji: "🚦", label: "Ampel" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("DDR-Symbole", "GDR symbols", "NDK szimbólumok", "Simboluri GDR"), items: [L("Trabi", "Trabi", "Trabi", "Trabi"), L("FDJ", "FDJ", "FDJ", "FDJ")] }] },
      quiz: { question: L("Wie hieß das bekannte DDR-Auto?", "What was the name of the famous GDR car?", "Mi volt a híres NDK autó neve?", "Cum se numea celebra mașină din RDG?"), choices: [L("Trabant", "Trabant", "Trabant", "Trabant"), L("VW Käfer", "VW Beetle", "VW Bogár", "VW Beetle"), L("Mercedes", "Mercedes", "Mercedes", "Mercedes"), L("Fiat", "Fiat", "Fiat", "Fiat")], answer: L("Trabant", "Trabant", "Trabant", "Trabant") }
    },
    {
      id: "bluehende_landschaften",
      title: L("Blühende Landschaften", "Blooming landscapes", "Virágzó tájak", "Peisaje înflorite"),
      hint1: L("Kohls Versprechen für den Osten.", "Kohl's promise for the East.", "Kohl keleti ígérete.", "Promisiunea lui Kohl pentru Est."),
      hint2: L("Der Aufbau dauerte länger als gedacht.", "The construction took longer than expected.", "Az építkezés a vártnál tovább tartott.", "Construcția a durat mai mult decât se aștepta."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Aufbau" }] },
      interactive: { type: "sentence-build", words: [L("Der", "The", "A", "The"), L("Aufbau", "Construction", "Építés", "Constructii"), L("Ost", "East", "Keleti", "Orientul"), L("begann", "began", "kezdődött", "a început")], instruction: L("Was geschah?", "What happened?", "Mi történt?", "Ce s-a întâmplat?") },
      quiz: { question: L("Was meinte Kohl mit 'blühenden Landschaften'?", "What did Kohl mean by 'blooming landscapes'?", "Mit ért Kohl „virágzó táj” alatt?", "Ce a vrut să spună Kohl prin „peisaje înflorite”?"), choices: [L("Wirtschaftlicher Erfolg", "Economic success", "Gazdasági siker", "Succesul economic"), L("Nur echte Blumen", "Only real flowers", "Csak igazi virágok", "Numai flori adevărate"), L("Wüsten", "deserts", "sivatagok", "deserturi"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Wirtschaftlicher Erfolg", "Economic success", "Gazdasági siker", "Succesul economic") }
    },
    {
      id: "berlin_hauptstadt",
      title: L("Hauptstadtbeschluss", "Capital Resolution", "Fővárosi határozat", "Rezoluție de capital"),
      hint1: L("Berlin wird wieder Sitz von Regierung.", "Berlin becomes the seat of government again.", "Berlin ismét a kormány székhelye lesz.", "Berlinul devine din nou sediul guvernului."),
      hint2: L("Umzug von Bonn nach Berlin.", "Moving from Bonn to Berlin.", "Költözés Bonnból Berlinbe.", "Mutarea de la Bonn la Berlin."),
      svg: { type: "text-bubbles", items: [{ text: "Alt → Bonn", color: "#fff", bg: "#3b82f6" }, { text: "Neu → Berlin", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "lang-mcq", question: L("Welche Stadt war Hauptstadt der BRD vor 1990?", "Which city was the capital of the Federal Republic of Germany before 1990?", "Melyik város volt a Németországi Szövetségi Köztársaság fővárosa 1990 előtt?", "Care oraș a fost capitala Republicii Federale Germania înainte de 1990?"), choices: [L("Bonn", "Bonn", "Bonn", "Bonn"), L("München", "Munich", "München", "Munchen"), L("Hamburg", "Hamburg", "Hamburg", "Hamburg")], answer: L("Bonn", "Bonn", "Bonn", "Bonn") },
      quiz: { question: L("Welche Stadt war vor 1990 Hauptstadt der BRD?", "Which city was the capital of the Federal Republic of Germany before 1990?", "Melyik város volt a Németországi Szövetségi Köztársaság fővárosa 1990 előtt?", "Care oraș a fost capitala Republicii Federale Germania înainte de 1990?"), choices: [L("Bonn", "Bonn", "Bonn", "Bonn"), L("München", "Munich", "München", "Munchen"), L("Hamburg", "Hamburg", "Hamburg", "Hamburg"), L("Berlin", "Berlin", "Berlin", "Berlin")], answer: L("Bonn", "Bonn", "Bonn", "Bonn") }
    },
    {
      id: "schabowski",
      title: L("Günter Schabowski", "Günter Schabowski", "Günter Schabowski", "Günter Schabowski"),
      hint1: L("Unbeabsichtigte Maueröffnung.", "Accidental opening of the wall.", "A fal véletlen felnyitása.", "Deschiderea accidentală a peretelui."),
      hint2: L("Das tritt nach meiner Kenntnis... sofort, unverzüglich.", "As far as I know, this occurs... immediately, immediately.", "Amennyire én tudom, ez megtörténik... azonnal, azonnal.", "Din câte știu eu, asta se întâmplă... imediat, imediat."),
      svg: { type: "text-bubbles", items: [{ text: "Sofort", color: "#fff", bg: "#16a34a" }, { text: "Irrtum", color: "#fff", bg: "#ea580c" }] },
      interactive: { type: "highlight-text", text: L("Schabowski öffnete die Grenze durch einen Versprecher.", "Schabowski opened the border with a slip of the tongue.", "Schabowski csúsztatással nyitotta meg a határt.", "Schabowski a deschis granița cu o scădere a limbii."), instruction: L("Was passierte?", "What happened?", "Mi történt?", "Ce s-a întâmplat?") },
      quiz: { question: L("Welcher Satz öffnete die Grenze?", "Which sentence opened the border?", "Melyik mondat nyitotta meg a határt?", "Care sentință a deschis granița?"), choices: [L("Sofort, unverzüglich", "Immediately, immediately", "Azonnal, azonnal", "Imediat, imediat"), L("Nächste Woche", "Next week", "Jövő héten", "Săptămâna viitoare"), L("Vielleicht", "Perhaps", "Talán", "Poate"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Sofort, unverzüglich", "Immediately, immediately", "Azonnal, azonnal", "Imediat, imediat") }
    },
    {
      id: "begrueszungsgeld",
      title: L("Begrüßungsgeld", "Welcome money", "Üdvözlő pénz", "Bun venit bani"),
      hint1: L("100 DM für DDR-Bürger.", "100 DM for GDR citizens.", "100 DM NDK állampolgárok számára.", "100 DM pentru cetățenii RDG."),
      hint2: L("Erster Einkauf im Westen.", "First purchase in the West.", "Első vásárlás Nyugaton.", "Prima achiziție în Occident."),
      svg: { type: "icon-grid", items: [{ emoji: "💶", label: "100 DM" }, { emoji: "🛒", label: "Kauf" }] },
      interactive: { type: "tap-count", count: 100, instruction: L("Wie viele DM gab es?", "How many DM were there?", "Hány DM volt ott?", "Cati DM au fost?") },
      quiz: { question: L("Wie viel Geld bekamen DDR-Bürger bei der Einreise?", "How much money did GDR citizens get when they entered the country?", "Mennyi pénzt kaptak az NDK állampolgárai, amikor beléptek az országba?", "Câți bani au primit cetățenii RDG la intrarea în țară?"), choices: [L("100 DM", "100 DM", "100 DM", "100 DM"), L("10 DM", "10 DM", "10 DM", "10 DM"), L("1000 DM", "1000 DM", "1000 DM", "1000 DM"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("100 DM", "100 DM", "100 DM", "100 DM") }
    },
    {
      id: "stasi_akten",
      title: L("Akteur", "actor", "színész", "actor"),
      hint1: L("Bürger stürmten Stasi-Zentralen.", "Citizens stormed Stasi headquarters.", "A polgárok megrohamozták a Stasi főhadiszállását.", "Cetăţenii au luat cu asalt sediul Stasi."),
      hint2: L("Rettung der Akten vor der Vernichtung.", "Saving the files from destruction.", "A fájlok mentése a pusztulástól.", "Salvarea fișierelor de la distrugere."),
      svg: { type: "word-display", word: "Akte", color: "#475569" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Bürger", "Citizens", "Polgárok", "Cetăţeni"), right: L("Sturm", "Storm", "Vihar", "Furtună") }, { left: L("Akten", "files", "fájlokat", "fişiere"), right: L("Wahrheit", "Truth", "Igazság", "Adevăr") }] },
      quiz: { question: L("Was wollten die Bürger in den Stasi-Zentralen?", "What did the citizens want in the Stasi headquarters?", "Mit akartak a polgárok a Stasi-székházban?", "Ce doreau cetățenii la sediul Stasi?"), choices: [L("Akten sichern", "Back up files", "Fájlok biztonsági mentése", "Faceți copii de rezervă ale fișierelor"), L("Geld klauen", "Steal money", "Pénzt lopni", "Fura bani"), L("Kaffee trinken", "drink coffee", "kávét inni", "bea cafea"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Akten sichern", "Back up files", "Fájlok biztonsági mentése", "Faceți copii de rezervă ale fișierelor") }
    },
    {
      id: "runder_tisch",
      title: L("Runder Tisch", "Round table", "Kerekasztal", "Masa rotunda"),
      hint1: L("Gespräche zwischen Regierung und Opposition.", "Talks between government and opposition.", "Tárgyalások a kormány és az ellenzék között.", "Discuții între guvern și opoziție."),
      hint2: L("Friedlicher Übergang zur Demokratie.", "Peaceful transition to democracy.", "Békés átmenet a demokráciába.", "Tranziție pașnică la democrație."),
      svg: { type: "text-bubbles", items: [{ text: "Dialog", color: "#fff", bg: "#3b82f6" }, { text: "Frieden", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "gap-fill", text: L("Ein __ Übergang.", "A __ transition.", "Egy __ átmenet.", "O tranziție __."), gaps: [{ index: 0, options: ["friedlicher", "blutiger"], correct: 0 }] },
      quiz: { question: L("Was war der 'Runde Tisch'?", "What was the 'Round Table'?", "Mi volt a „Kerekasztal”?", "Ce a fost „Masa rotundă”?"), choices: [L("Forum für Gespräche", "Forum for discussions", "Fórum a vitákhoz", "Forum pentru discutii"), L("Ein Möbelstück", "A piece of furniture", "Egy bútordarab", "O piesa de mobilier"), L("Ein Marktplatz", "A marketplace", "Egy piactér", "O piata"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Forum für Gespräche", "Forum for discussions", "Fórum a vitákhoz", "Forum pentru discutii") }
    },
    {
      id: "fazit_einheit",
      title: L("Fazit", "Conclusion", "Következtetés", "Concluzie"),
      hint1: L("Deutschland ist wieder eins.", "Germany is one again.", "Németország ismét egy.", "Germania este din nou una."),
      hint2: L("Herausforderung des Zusammenwachsens.", "Challenge of growing together.", "Az együtt növekedés kihívása.", "Provocarea de a crește împreună."),
      svg: { type: "icon-grid", items: [{ emoji: "🇩🇪", label: "Eins" }, { emoji: "🇪🇺", label: "Europa" }] },
      interactive: { type: "word-order", words: [L("Zusammenwachsen", "Growing together", "Együtt növekedni", "Crescând împreună"), L("was", "What", "Mi", "Ce"), L("zusammen", "together", "együtt", "împreună"), L("gehört", "heard", "hallott", "auzit")], instruction: L("Brandts Satz?", "Brandt's sentence?", "Brandt mondata?", "sentința lui Brandt?") },
      quiz: { question: L("Was ist Deutschland heute?", "What is Germany today?", "Mi ma Németország?", "Ce este Germania astăzi?"), choices: [L("Ein demokratischer Einheitsstaat", "A democratic unitary state", "Demokratikus egységes állam", "Un stat unitar democratic"), L("Zwei Staaten", "Two states", "Két állam", "Două state"), L("Ein Kaiserreich", "An empire", "Egy birodalom", "Un imperiu"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Ein demokratischer Einheitsstaat", "A democratic unitary state", "Demokratikus egységes állam", "Un stat unitar democratic") }
    }
  ]
};

// ─── ISLAND 7: EUROPA & GLOBALISIERUNG ─────────────────────────────────────
const I7: IslandSpec = {
  id: "i7",
  title: L("Modernes Europa", "Modern Europe", "Modern Európa", "Europa modernă"),
  topics: [
    {
      id: "eu_gruendung",
      title: L("Die EU", "The EU", "Az EU", "UE"),
      hint1: L("Zusammenschluss europäischer Staaten.", "Union of European states.", "Európai Államok Uniója.", "Uniunea statelor europene."),
      hint2: L("Frieden und Wohlstand durch Handel.", "Peace and prosperity through trade.", "Béke és jólét a kereskedelem révén.", "Pace și prosperitate prin comerț."),
      svg: { type: "icon-grid", items: [{ emoji: "🇪🇺", label: "EU" }, { emoji: "🤝", label: "Bund" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("EU", "EU", "EU", "UE"), right: L("Brüssel", "Brussels", "Brüsszel", "Bruxelles") }, { left: L("Euro", "euro", "euro", "euro"), right: L("Währung", "currency", "valuta", "valută") }] },
      quiz: { question: L("Wo ist der Hauptsitz der EU?", "Where is the EU headquarters?", "Hol van az EU központja?", "Unde este sediul UE?"), choices: [L("Brüssel", "Brussels", "Brüsszel", "Bruxelles"), L("Berlin", "Berlin", "Berlin", "Berlin"), L("Paris", "Paris", "Párizs", "Paris"), L("London", "London", "London", "Londra")], answer: L("Brüssel", "Brussels", "Brüsszel", "Bruxelles") }
    },
    {
      id: "euro",
      title: L("Der Euro", "The Euro", "Az euró", "Euro"),
      hint1: L("Gemeinsame Währung seit 2002.", "Common currency since 2002.", "Közös valuta 2002 óta.", "Moneda comună din 2002."),
      hint2: L("Wegfall von Umtauschgebühren.", "Elimination of exchange fees.", "Az átváltási díjak megszüntetése.", "Eliminarea taxelor de schimb."),
      svg: { type: "text-bubbles", items: [{ text: "Geld", color: "#fff", bg: "#fbbf24" }, { text: "Europa", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "tap-count", count: 2002, instruction: L("In welchem Jahr kam das Bargeld?", "What year did the cash come in?", "Melyik évben jött be a készpénz?", "În ce an au venit banii?") },
      quiz: { question: L("Seit wann gibt es Euro-Bargeld?", "Since when has euro cash been around?", "Mióta létezik euró készpénz?", "De când există numerar în euro?"), choices: [L("2002", "2002", "2002", "2002"), L("1990", "1990", "1990", "1990"), L("2010", "2010", "2010", "2010"), L("1945", "1945", "1945", "1945")], answer: L("2002", "2002", "2002", "2002") }
    },
    {
      id: "schengen",
      title: L("Schengen", "Schengen", "Schengen", "Schengen"),
      hint1: L("Grenzen ohne Kontrollen.", "Borders without controls.", "Határok ellenőrzés nélkül.", "Frontiere fără controale."),
      hint2: L("Freies Reisen in Europa.", "Free travel in Europe.", "Ingyenes utazás Európában.", "Călătorie gratuită în Europa."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Frei" }] },
      interactive: { type: "gap-fill", text: L("Reisen ohne __.", "Traveling without __.", "Utazás __ nélkül.", "Călătorind fără __."), gaps: [{ index: 0, options: ["Kontrolle", "Auto"], correct: 0 }] },
      quiz: { question: L("Was bedeutet das Schengen-Abkommen?", "What does the Schengen Agreement mean?", "Mit jelent a Schengeni Egyezmény?", "Ce înseamnă Acordul Schengen?"), choices: [L("Keine Grenzkontrollen", "No border controls", "Nincs határellenőrzés", "Fără controale la frontieră"), L("Günstiges Benzin", "Cheap gasoline", "Olcsó benzin", "Benzină ieftină"), L("Mehr Steuern", "More taxes", "Több adó", "Mai multe taxe"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Keine Grenzkontrollen", "No border controls", "Nincs határellenőrzés", "Fără controale la frontieră") }
    },
    {
      id: "digitalisierung",
      title: L("Internet", "Internet", "Internet", "Internet"),
      hint1: L("Revolution der Kommunikation.", "Revolution of communication.", "A kommunikáció forradalma.", "Revoluția comunicării."),
      hint2: L("Weltweite Vernetzung.", "Worldwide networking.", "Világméretű hálózatépítés.", "Rețele la nivel mondial."),
      svg: { type: "icon-grid", items: [{ emoji: "💻", label: "Netz" }, { emoji: "🌐", label: "Welt" }] },
      interactive: { type: "highlight-text", text: L("Das Internet hat die Welt verändert.", "The Internet has changed the world.", "Az internet megváltoztatta a világot.", "Internetul a schimbat lumea."), instruction: L("Wichtigste Erfindung?", "Most important invention?", "A legfontosabb találmány?", "Cea mai importantă invenție?") },
      quiz: { question: L("Was veränderte die Welt ab den 90ern?", "What changed the world from the 90s onwards?", "Mi változtatta meg a világot a 90-es évektől kezdve?", "Ce a schimbat lumea din anii 90 încolo?"), choices: [L("Internet", "Internet", "Internet", "Internet"), L("Dampfmaschine", "Steam engine", "Gőzgép", "Motor cu abur"), L("Rad", "wheel", "kerék", "roată"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Internet", "Internet", "Internet", "Internet") }
    },
    {
      id: "klimawandel",
      title: L("Umweltschutz", "Environmental protection", "Környezetvédelem", "Protecția mediului"),
      hint1: L("Globale Erwärmung.", "Global warming.", "Globális felmelegedés.", "Încălzire globală."),
      hint2: L("Herausforderung für die Zukunft.", "Challenge for the future.", "Kihívás a jövőre nézve.", "Provocare pentru viitor."),
      svg: { type: "text-bubbles", items: [{ text: "Erde", color: "#fff", bg: "#16a34a" }, { text: "Heiß", color: "#fff", bg: "#ea580c" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Probleme", "problems", "problémákat", "probleme"), items: [L("CO2", "CO2", "CO2", "CO2"), L("Plastik", "plastic", "műanyag", "plastic")] }] },
      quiz: { question: L("Was ist eine große heutige Sorge?", "What is a big concern today?", "Mi a legnagyobb gond ma?", "Care este o mare îngrijorare astăzi?"), choices: [L("Klimawandel", "Climate change", "Klímaváltozás", "Schimbările climatice"), L("Zu viel Gold", "Too much gold", "Túl sok arany", "Prea mult aur"), L("Kein Internet", "No internet", "Nincs internet", "Fără internet"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Klimawandel", "Climate change", "Klímaváltozás", "Schimbările climatice") }
    },
    {
      id: "maastricht",
      title: L("Maastricht", "Maastricht", "Maastricht", "Maastricht"),
      hint1: L("Vertrag zur Gründung der EU 1992.", "Treaty establishing the EU in 1992.", "Az EU-t létrehozó szerződés 1992-ben.", "Tratatul de instituire a UE în 1992."),
      hint2: L("Aus der EG wurde die EU.", "The EC became the EU.", "Az EB lett az EU.", "CE a devenit UE."),
      svg: { type: "word-display", word: "Union", color: "#1e3a8a" },
      interactive: { type: "match-pairs", pairs: [{ left: L("1992", "1992", "1992", "1992"), right: L("Vertrag", "Contract", "Szerződés", "Contracta") }, { left: L("Maastricht", "Maastricht", "Maastricht", "Maastricht"), right: L("Ort", "Location", "Elhelyezkedés", "Locaţie") }] },
      quiz: { question: L("Wann wurde der Maastricht-Vertrag unterzeichnet?", "When was the Maastricht Treaty signed?", "Mikor írták alá a Maastrichti Szerződést?", "Când a fost semnat Tratatul de la Maastricht?"), choices: [L("1992", "1992", "1992", "1992"), L("1945", "1945", "1945", "1945"), L("1961", "1961", "1961", "1961"), L("2020", "2020", "2020", "2020")], answer: L("1992", "1992", "1992", "1992") }
    },
    {
      id: "demokratisierung",
      title: L("Demokratiewelle", "Wave of democracy", "A demokrácia hulláma", "Val de democrație"),
      hint1: L("Ende vieler Diktaturen.", "End of many dictatorships.", "Sok diktatúra vége.", "Sfârșitul multor dictaturi."),
      hint2: L("Besonders in Osteuropa nach 1989.", "Especially in Eastern Europe after 1989.", "Főleg Kelet-Európában 1989 után.", "Mai ales în Europa de Est după 1989."),
      svg: { type: "text-bubbles", items: [{ text: "Alt → Diktatur", color: "#fff", bg: "#3b82f6" }, { text: "Neu → Demokratie", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "word-order", words: [L("Freiheit", "Freedom", "Szabadság", "Libertate"), L("für", "for", "számára", "pentru"), L("alle", "all", "minden", "toate"), L("Menschen", "People", "Emberek", "Oameni")], instruction: L("Was war das Ziel?", "What was the goal?", "Mi volt a cél?", "Care a fost scopul?") },
      quiz: { question: L("Was geschah in Osteuropa nach 1989?", "What happened in Eastern Europe after 1989?", "Mi történt Kelet-Európában 1989 után?", "Ce s-a întâmplat în Europa de Est după 1989?"), choices: [L("Demokratisierung", "Democratization", "Demokratizálás", "Democratizare"), L("Mehr Mauern", "More walls", "Több falat", "Mai mulți pereți"), L("Keine Änderung", "No change", "Nincs változás", "Nicio schimbare"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Demokratisierung", "Democratization", "Demokratizálás", "Democratizare") }
    },
    {
      id: "globalisierung",
      title: L("Globalisierung", "globalization", "globalizáció", "globalizarea"),
      hint1: L("Weltweite Wirtschaft.", "Global economy.", "Globális gazdaság.", "Economia globală."),
      hint2: L("Waren aus aller Welt im Supermarkt.", "Goods from all over the world in the supermarket.", "Áruk a világ minden tájáról a szupermarketben.", "Mărfuri din toată lumea în supermarket."),
      svg: { type: "icon-grid", items: [{ emoji: "🌍", label: "Welt" }, { emoji: "📦", label: "Handel" }] },
      interactive: { type: "gap-fill", text: L("Die Welt wird ein __.", "The world will be a __.", "A világ egy __ lesz.", "Lumea va fi un __."), gaps: [{ index: 0, options: ["Dorf", "Haus"], correct: 0 }] },
      quiz: { question: L("Was bedeutet Globalisierung?", "What does globalization mean?", "Mit jelent a globalizáció?", "Ce înseamnă globalizarea?"), choices: [L("Weltweite Vernetzung", "Worldwide networking", "Világméretű hálózatépítés", "Rețele la nivel mondial"), L("Nur im eigenen Dorf", "Only in your own village", "Csak a saját falujában", "Doar în satul tău"), L("Kein Handel mehr", "No more trading", "Nincs több kereskedés", "Nu mai tranzacționați"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Weltweite Vernetzung", "Worldwide networking", "Világméretű hálózatépítés", "Rețele la nivel mondial") }
    },
    {
      id: "migration_modern",
      title: L("Migration", "migration", "migráció", "migrație"),
      hint1: L("Menschen verlassen ihre Heimat.", "People leave their homes.", "Az emberek elhagyják otthonaikat.", "Oamenii își părăsesc casele."),
      hint2: L("Gründe: Krieg, Not, Arbeit.", "Reasons: war, hardship, work.", "Okok: háború, nehézségek, munka.", "Motive: război, greutăți, muncă."),
      svg: { type: "text-bubbles", items: [{ text: "Flucht", color: "#fff", bg: "#475569" }, { text: "Hoffnung", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Grund", "Reason", "Ok", "Motiv"), right: L("Krieg", "War", "Háború", "Război") }, { left: L("Ziel", "Goal", "Cél", "Scop"), right: L("Sicherheit", "Security", "Biztonság", "Securitate") }] },
      quiz: { question: L("Warum ziehen Menschen in andere Länder?", "Why do people move to other countries?", "Miért költöznek az emberek más országokba?", "De ce oamenii se mută în alte țări?"), choices: [L("Vielfältige Gründe", "Various reasons", "Különféle okok miatt", "Diverse motive"), L("Nur zum Spaß", "Just for fun", "Csak szórakozásból", "Doar pentru distracție"), L("Gar nicht", "Not at all", "Egyáltalán nem", "Deloc"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Vielfältige Gründe", "Various reasons", "Különféle okok miatt", "Diverse motive") }
    },
    {
      id: "friedensnobelpreis_eu",
      title: L("EU & Frieden", "EU & Peace", "EU és béke", "UE și pace"),
      hint1: L("2012 erhielt die EU den Nobelpreis.", "In 2012 the EU received the Nobel Prize.", "2012-ben az EU Nobel-díjat kapott.", "În 2012, UE a primit Premiul Nobel."),
      hint2: L("Für den Beitrag zu Frieden und Versöhnung.", "For contributing to peace and reconciliation.", "A békéhez és a megbékéléshez való hozzájárulásért.", "Pentru contribuția la pace și reconciliere."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Nobelpreis" }] },
      interactive: { type: "tap-count", count: 2012, instruction: L("In welchem Jahr war die Verleihung?", "What year was the award ceremony?", "Melyik évben volt a díjátadó?", "În ce an a avut loc ceremonia de premiere?") },
      quiz: { question: L("Welchen Preis erhielt die EU 2012?", "What award did the EU receive in 2012?", "Milyen díjat kapott az EU 2012-ben?", "Ce premiu a primit UE în 2012?"), choices: [L("Friedensnobelpreis", "Nobel Peace Prize", "Nobel-békedíj", "Premiul Nobel pentru Pace"), L("Oscar", "Oscar", "Oscar", "Oscar"), L("Goldene Kamera", "Golden camera", "Arany fényképezőgép", "Aparat foto de aur"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Friedensnobelpreis", "Nobel Peace Prize", "Nobel-békedíj", "Premiul Nobel pentru Pace") }
    },
    {
      id: "ostbeidritt_eu",
      title: L("Osterweiterung", "Eastern expansion", "Keleti terjeszkedés", "Expansiunea estică"),
      hint1: L("Beitritt vieler osteuropäischer Staaten.", "Many Eastern European states join.", "Sok kelet-európai állam csatlakozik.", "Multe state din Europa de Est se alătură."),
      hint2: L("Polen, Ungarn, Tschechien etc.", "Poland, Hungary, Czech Republic etc.", "Lengyelország, Magyarország, Csehország stb.", "Polonia, Ungaria, Cehia etc."),
      svg: { type: "icon-grid", items: [{ emoji: "🇵🇱", label: "Polen" }, { emoji: "🇭🇺", label: "Ungarn" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Beitritt", "accession", "csatlakozás", "aderare"), items: [L("2004", "2004", "2004", "2004")] }] },
      quiz: { question: L("Wann traten viele östliche Länder bei?", "When did many Eastern countries join?", "Mikor csatlakozott sok keleti ország?", "Când s-au alăturat multe țări din Est?"), choices: [L("2004", "2004", "2004", "2004"), L("1990", "1990", "1990", "1990"), L("1945", "1945", "1945", "1945"), L("2020", "2020", "2020", "2020")], answer: L("2004", "2004", "2004", "2004") }
    },
    {
      id: "brexit",
      title: L("Brexit", "Brexit", "Brexit", "Brexit"),
      hint1: L("Austritt Großbritanniens.", "Britain's exit.", "Nagy-Britannia kilépése.", "ieșirea Marii Britanii."),
      hint2: L("Erster Austritt eines Landes.", "First exit of a country.", "Egy ország első kilépése.", "Prima ieșire dintr-o țară."),
      svg: { type: "word-display", word: "Exit", color: "#991b1b" },
      interactive: { type: "gap-fill", text: L("Land: __.", "Country: __.", "Ország: __.", "Țara: __."), gaps: [{ index: 0, options: ["Großbritannien", "Frankreich"], correct: 0 }] },
      quiz: { question: L("Welches Land verließ die EU?", "Which country left the EU?", "Melyik ország lépett ki az EU-ból?", "Ce țară a părăsit UE?"), choices: [L("Großbritannien", "Great Britain", "Nagy-Britannia", "Marea Britanie"), L("Deutschland", "Germany", "Németország", "Germania"), L("Italien", "Italy", "Olaszország", "Italia"), L("Spanien", "Spain", "Spanyolország", "Spania")], answer: L("Großbritannien", "Great Britain", "Nagy-Britannia", "Marea Britanie") }
    },
    {
      id: "werte_eu",
      title: L("Werte", "Values", "Értékek", "Valori"),
      hint1: L("Menschenwürde, Freiheit, Demokratie.", "Human dignity, freedom, democracy.", "Emberi méltóság, szabadság, demokrácia.", "Demnitate umană, libertate, democrație."),
      hint2: L("Gemeinsame Basis der EU.", "Common basis of the EU.", "Az EU közös alapja.", "Baza comună a UE."),
      svg: { type: "text-bubbles", items: [{ text: "Recht", color: "#fff", bg: "#16a34a" }, { text: "Freiheit", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "highlight-text", text: L("Die EU schützt die Grundrechte der Bürger.", "The EU protects the fundamental rights of citizens.", "Az EU védi a polgárok alapvető jogait.", "UE protejează drepturile fundamentale ale cetățenilor."), instruction: L("Was ist wichtig?", "What is important?", "Mi a fontos?", "Ce este important?") },
      quiz: { question: L("Was ist ein Wert der EU?", "What is a value of the EU?", "Mi az EU értéke?", "Care este o valoare a UE?"), choices: [L("Demokratie", "democracy", "demokrácia", "democraţie"), L("Diktatur", "dictatorship", "diktatúra", "dictatură"), L("Sklaverei", "slavery", "rabszolgaság", "robie"), L("Zensur", "censorship", "cenzúra", "cenzură")], answer: L("Demokratie", "democracy", "demokrácia", "democraţie") }
    },
    {
      id: "parlament_eu",
      title: L("EU-Parlament", "EU Parliament", "EU Parlament", "Parlamentul UE"),
      hint1: L("Direkt gewähltes Organ.", "Directly elected body.", "Közvetlenül választott testület.", "Organism ales direct."),
      hint2: L("Sitz in Straßburg und Brüssel.", "Based in Strasbourg and Brussels.", "Székhelye: Strasbourg és Brüsszel.", "Cu sediul la Strasbourg și Bruxelles."),
      svg: { type: "text-bubbles", items: [{ text: "Bürger → Wahl", color: "#fff", bg: "#3b82f6" }, { text: "Europa → Gesetz", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "sentence-build", words: [L("Wir", "We", "Mi", "Noi"), L("wählen", "choose", "válasszon", "alege"), L("das", "the", "a", "cel"), L("Parlament", "parliament", "parlament", "parlament")], instruction: L("Was tun Bürger?", "What do citizens do?", "Mit csinálnak a polgárok?", "Ce fac cetățenii?") },
      quiz: { question: L("Wer wählt das EU-Parlament?", "Who elects the EU Parliament?", "Ki választja az Európai Parlamentet?", "Cine alege Parlamentul UE?"), choices: [L("Die Bürger", "The citizens", "A polgárok", "Cetăţenii"), L("Nur die Könige", "Only the kings", "Csak a királyok", "Doar regii"), L("Die US-Regierung", "The US government", "Az amerikai kormány", "Guvernul SUA"), L("Niemand", "No one", "Senki", "Nici unul")], answer: L("Die Bürger", "The citizens", "A polgárok", "Cetăţenii") }
    },
    {
      id: "zukunft_eu",
      title: L("Herausforderung", "Challenge", "Kihívás", "Provocare"),
      hint1: L("Zusammenhalt in Krisenzeiten.", "Cohesion in times of crisis.", "Összetartás a válság idején.", "Coeziunea în timp de criză."),
      hint2: L("Wirtschaft und Sicherheit.", "Economy and security.", "Gazdaság és biztonság.", "Economie și securitate."),
      svg: { type: "icon-grid", items: [{ emoji: "❓", label: "Zukunft" }, { emoji: "🇪🇺", label: "Gemeinsam" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Gemeinsam", "Together", "Együtt", "Împreună"), right: L("Stark", "Strong", "Erős", "Puternic") }, { left: L("Einsam", "Lonely", "Magányos", "Singuratic"), right: L("Schwach", "Weak", "Gyenge", "Slab") }] },
      quiz: { question: L("Was ist wichtig für Europas Zukunft?", "What is important for Europe's future?", "Mi a fontos Európa jövője szempontjából?", "Ce este important pentru viitorul Europei?"), choices: [L("Zusammenarbeit", "Cooperation", "Együttműködés", "Cooperare"), L("Streit", "Fight", "Harc", "Luptă"), L("Abschottung", "Isolation", "Elkülönítés", "Izolare"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Zusammenarbeit", "Cooperation", "Együttműködés", "Cooperare") }
    }
  ]
};

// ─── ISLAND 8: WIEDERHOLUNG MODERNE ─────────────────────────────────────────
const I8: IslandSpec = {
  id: "i8",
  title: L("Wiederholung", "Repetition", "Ismétlés", "Repetiţie"),
  topics: [
    {
      id: "ww1_vs_ww2",
      title: L("Weltkriege", "World Wars", "világháborúk", "Războaie mondiale"),
      hint1: L("Vergleich der beiden Katastrophen.", "Comparison of the two disasters.", "A két katasztrófa összehasonlítása.", "Comparația celor două dezastre."),
      hint2: L("1914-18 und 1939-45.", "1914-18 and 1939-45.", "1914-18 és 1939-45.", "1914-18 și 1939-45."),
      svg: { type: "text-bubbles", items: [{ text: "1. WK → 1914", color: "#fff", bg: "#3b82f6" }, { text: "2. WK → 1939", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Kaiser", "Emperor", "Császár", "Împărat"), right: L("1. WK", "WW1", "WW1", "WW1") }, { left: L("Hitler", "Hitler", "Hitler", "Hitler"), right: L("2. WK", "WWII", "világháború", "Al Doilea Război Mondial") }] },
      quiz: { question: L("Welcher Krieg war früher?", "Which war was earlier?", "Melyik háború volt korábban?", "Care război a fost mai devreme?"), choices: [L("Erster Weltkrieg", "First World War", "Első világháború", "Primul Război Mondial"), L("Zweiter Weltkrieg", "Second World War", "Második világháború", "Al Doilea Război Mondial"), L("Kalter Krieg", "Cold War", "Hidegháború", "Războiul Rece"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Erster Weltkrieg", "First World War", "Első világháború", "Primul Război Mondial") }
    },
    {
      id: "demokratie_check",
      title: L("Staatsformen", "Forms of government", "Kormányzati formák", "Forme de guvernare"),
      hint1: L("Weimar, NS-Zeit, BRD/DDR.", "Weimar, Nazi era, FRG/GDR.", "Weimar, náci korszak, NSZK/NDK.", "Weimar, epoca nazistă, RFG/GDR."),
      hint2: L("Wandel der Regierungen.", "Change in governments.", "Változás a kormányokban.", "Schimbarea guvernelor."),
      svg: { type: "text-bubbles", items: [{ text: "Frei", color: "#fff", bg: "#16a34a" }, { text: "Unfrei", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Diktatur", "dictatorship", "diktatúra", "dictatură"), items: [L("NS-Zeit", "Nazi period", "náci időszak", "perioada nazistă"), L("DDR", "GDR", "NDK", "RDG")] }, { label: L("Demokratie", "democracy", "demokrácia", "democraţie"), items: [L("BRD", "Germany", "Németország", "Germania")] }] },
      quiz: { question: L("Was war die DDR?", "What was the GDR?", "Mi volt az NDK?", "Ce a fost RDG?"), choices: [L("Diktatur", "dictatorship", "diktatúra", "dictatură"), L("Königreich", "kingdom", "királyság", "regat"), L("Freie Republik", "Free Republic", "Szabad Köztársaság", "Republica Liberă"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Diktatur", "dictatorship", "diktatúra", "dictatură") }
    },
    {
      id: "timeline_20jh",
      title: L("Zeitstrahl", "Timeline", "Idővonal", "Cronologie"),
      hint1: L("Reihenfolge der Ereignisse.", "Order of events.", "Az események sorrendje.", "Ordinea evenimentelor."),
      hint2: L("Vom Kaiser zur EU.", "From the emperor to the EU.", "A császártól az EU-ig.", "De la împărat la UE."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "1914" }, { emoji: "📜", label: "2000" }] },
      interactive: { type: "word-order", words: ["1914", "1933", "1945", "1989"], instruction: L("Ordne!", "Arrange!", "Rendezzen!", "Aranja!") } ,
      quiz: { question: L("Was geschah 1989?", "What happened in 1989?", "Mi történt 1989-ben?", "Ce s-a întâmplat în 1989?"), choices: [L("Mauerfall", "Fall of the wall", "A fal leomlása", "Căderea zidului"), L("Machtergreifung", "Seizure of power", "A hatalom átvétele", "Preluarea puterii"), L("Kriegsbeginn", "Start of war", "A háború kezdete", "Începutul războiului"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Mauerfall", "Fall of the wall", "A fal leomlása", "Căderea zidului") }
    },
    {
      id: "menschen_20jh",
      title: L("Personen", "persons", "személyek", "persoane"),
      hint1: L("Wer prägte das Jahrhundert?", "Who shaped the century?", "Ki alakította a századot?", "Cine a modelat secolul?"),
      hint2: L("Adenauer, Brandt, Kohl.", "Adenauer, Brandt, Kohl.", "Adenauer, Brandt, Kohl.", "Adenauer, Brandt, Kohl."),
      svg: { type: "icon-grid", items: [{ emoji: "👨", label: "Adenauer" }, { emoji: "👨", label: "Brandt" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Einheit", "Unit", "Egység", "Unitate"), right: L("Kohl", "Cabbage", "Káposzta", "Varză") }, { left: L("West", "West", "nyugat", "Vest"), right: L("Adenauer", "Adenauer", "Adenauer", "Adenauer") }] },
      quiz: { question: L("Wer war der Kanzler der Einheit?", "Who was the chancellor of unity?", "Ki volt az egység kancellárja?", "Cine a fost cancelarul unității?"), choices: [L("Helmut Kohl", "Helmut Kohl", "Helmut Kohl", "Helmut Kohl"), L("Willy Brandt", "Willy Brandt", "Willy Brandt", "Willy Brandt"), L("Adolf Hitler", "Adolf Hitler", "Adolf Hitler", "Adolf Hitler"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Helmut Kohl", "Helmut Kohl", "Helmut Kohl", "Helmut Kohl") }
    },
    {
      id: "symbole_20jh",
      title: L("Symbole", "Symbols", "Szimbólumok", "Simboluri"),
      hint1: L("Mauer, Hakenkreuz, Euro.", "Wall, swastika, euro.", "Fal, horogkereszt, euró.", "Perete, zvastica, euro."),
      hint2: L("Zeichen der Geschichte.", "Signs of history.", "A történelem jelei.", "Semne ale istoriei."),
      svg: { type: "text-bubbles", items: [{ text: "Mauer", color: "#fff", bg: "#475569" }, { text: "Sterne", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "gap-fill", text: L("Die Sterne stehen für __.", "The stars represent __.", "A csillagok __.", "Stelele reprezintă __."), gaps: [{ index: 0, options: ["Europa", "Deutschland"], correct: 0 }] },
      quiz: { question: L("Was ist ein Symbol für die Teilung?", "What is a symbol of division?", "Mi a megosztottság szimbóluma?", "Ce este un simbol al diviziunii?"), choices: [L("Die Mauer", "The wall", "A falat", "Zidul"), L("Der Euro", "The Euro", "Az euró", "Euro"), L("Der Rhein", "The Rhine", "A Rajna", "Rinul"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Die Mauer", "The wall", "A falat", "Zidul") }
    },
    {
      id: "technik_wandel",
      title: L("Fortschritt", "Progress", "Előrehalad", "Progres"),
      hint1: L("Vom Zeppelin zum Computer.", "From Zeppelin to Computer.", "A Zeppelintől a számítógépig.", "De la Zeppelin la computer."),
      hint2: L("Beschleunigung des Lebens.", "Acceleration of life.", "Az élet felgyorsulása.", "Accelerarea vieții."),
      svg: { type: "icon-grid", items: [{ emoji: "📟", label: "Alt" }, { emoji: "📱", label: "Neu" }] },
      interactive: { type: "highlight-text", text: L("Technik veränderte den Alltag der Menschen.", "Technology changed people's everyday lives.", "A technológia megváltoztatta az emberek mindennapjait.", "Tehnologia a schimbat viața de zi cu zi a oamenilor."), instruction: L("Was geschah?", "What happened?", "Mi történt?", "Ce s-a întâmplat?") },
      quiz: { question: L("Was ist eine moderne Erfindung?", "What is a modern invention?", "Mi a modern találmány?", "Ce este o invenție modernă?"), choices: [L("Smartphone", "Smartphone", "Okostelefon", "Smartphone"), L("Dampfmaschine", "Steam engine", "Gőzgép", "Motor cu abur"), L("Pflug", "plow", "eke", "plug"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Smartphone", "Smartphone", "Okostelefon", "Smartphone") }
    },
    {
      id: "ideologien_mix",
      title: L("Ismen", "Isms", "Isms", "Isme"),
      hint1: L("Sozialismus, Nationalismus, Liberalismus.", "Socialism, nationalism, liberalism.", "Szocializmus, nacionalizmus, liberalizmus.", "Socialism, naționalism, liberalism."),
      hint2: L("Ideen, die die Welt bewegten.", "Ideas that moved the world.", "Ötletek, amelyek megmozgatták a világot.", "Idei care au mișcat lumea."),
      svg: { type: "word-display", word: "Ideen", color: "#1e3a8a" },
      interactive: { type: "lang-mcq", question: L("Was will der Liberalismus?", "What does liberalism want?", "Mit akar a liberalizmus?", "Ce vrea liberalismul?"), choices: [L("Freiheit", "Freedom", "Szabadság", "Libertate"), L("Gleichschaltung", "Synchronization", "Szinkronizálás", "Sincronizare"), L("Diktatur", "dictatorship", "diktatúra", "dictatură")], answer: L("Freiheit", "Freedom", "Szabadság", "Libertate") },
      quiz: { question: L("Was will der Liberalismus?", "What does liberalism want?", "Mit akar a liberalizmus?", "Ce vrea liberalismul?"), choices: [L("Freiheit", "Freedom", "Szabadság", "Libertate"), L("Gleichschaltung", "Synchronization", "Szinkronizálás", "Sincronizare"), L("Diktatur", "dictatorship", "diktatúra", "dictatură"), L("Monarchie", "monarchy", "monarchia", "monarhie")], answer: L("Freiheit", "Freedom", "Szabadság", "Libertate") }
    },
    {
      id: "grenzen_mix",
      title: L("Grenzen", "Boundaries", "Határok", "Limite"),
      hint1: L("Vom Eisernen Vorhang zum offenen Europa.", "From the Iron Curtain to an open Europe.", "A vasfüggönytől a nyitott Európáig.", "De la Cortina de Fier la o Europă deschisă."),
      hint2: L("Wandel der Schlagbäume.", "Change of barriers.", "A korlátok változása.", "Schimbarea barierelor."),
      svg: { type: "text-bubbles", items: [{ text: "Gestern → Stacheldraht", color: "#fff", bg: "#3b82f6" }, { text: "Heute → Offen", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "tap-count", count: 2, instruction: L("Wie viele (BRD/DDR) deutsche Staaten?", "How many (FRG/GDR) German states?", "Hány (NSZK/NDK) német állam?", "Câte state germane (RFG/GDR)?") },
      quiz: { question: L("Was trennte Europa jahrzehntelang?", "What divided Europe for decades?", "Mi osztotta meg Európát évtizedekre?", "Ce a divizat Europa decenii?"), choices: [L("Eiserner Vorhang", "Iron Curtain", "Vasfüggöny", "Cortina de fier"), L("Der Äquator", "The equator", "Az egyenlítő", "Ecuatorul"), L("Der Himalaya", "The Himalayas", "A Himalája", "Himalaya"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Eiserner Vorhang", "Iron Curtain", "Vasfüggöny", "Cortina de fier") }
    },
    {
      id: "wirtschaft_check",
      title: L("Wirtschaft", "Business", "Üzleti", "Afaceri"),
      hint1: L("Inflation, Wunder, Globalisierung.", "Inflation, miracles, globalization.", "Infláció, csodák, globalizáció.", "Inflație, miracole, globalizare."),
      hint2: L("Wie das Geld floss.", "How the money flowed.", "Hogyan áramlott a pénz.", "Cum curgeau banii."),
      svg: { type: "text-bubbles", items: [{ text: "Mark", color: "#fff", bg: "#fbbf24" }, { text: "Euro", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("1923", "1923", "1923", "1923"), right: L("Inflation", "inflation", "infláció", "inflatia") }, { left: L("1950er", "1950s", "1950-es évek", "anii 1950"), right: L("Wunder", "Wonder", "Csoda", "Mirare") }] },
      quiz: { question: L("Wie hieß die Währung vor dem Euro?", "What was the currency called before the euro?", "Hogyan hívták a valutát az euró előtt?", "Cum se numea moneda înainte de euro?"), choices: [L("D-Mark", "Deutsche Mark", "Deutsche Mark", "Deutsche Mark"), L("Dollar", "dollar", "dollár", "dolar"), L("Pfund", "pound", "font", "lira"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("D-Mark", "Deutsche Mark", "Deutsche Mark", "Deutsche Mark") }
    },
    {
      id: "widerstand_helden",
      title: L("Zivilcourage", "Civil courage", "Polgári bátorság", "Curaj civil"),
      hint1: L("Nein sagen können.", "Being able to say no.", "Képes nemet mondani.", "A putea spune nu."),
      hint2: L("Werte verteidigen.", "Defend values.", "Megvédeni az értékeket.", "Apărați valorile."),
      svg: { type: "icon-grid", items: [{ emoji: "🤝", label: "Mut" }, { emoji: "⚖️", label: "Recht" }] },
      interactive: { type: "sentence-build", words: [L("Mut", "courage", "bátorság", "curaj"), L("ist", "is", "van", "este"), L("wichtig", "important", "fontos", "important"), L("für", "for", "számára", "pentru"), L("Freiheit", "Freedom", "Szabadság", "Libertate")], instruction: L("Lektion?", "Lesson?", "Lecke?", "Lecţie?") },
      quiz: { question: L("Was lernt man aus der Geschichte?", "What do you learn from history?", "Mit tanulsz a történelemből?", "Ce înveți din istorie?"), choices: [L("Zivilcourage ist nötig", "Civil courage is necessary", "Polgári bátorság kell", "Este necesar curajul civil"), L("Gewalt siegt immer", "Violence always wins", "Az erőszak mindig győz", "Violența învinge întotdeauna"), L("Nichts", "Nothing", "Semmi", "Nimic"), L("Alles egal", "Everything doesn't matter", "Minden nem számít", "Totul nu contează")], answer: L("Zivilcourage ist nötig", "Civil courage is necessary", "Polgári bátorság kell", "Este necesar curajul civil") }
    },
    {
      id: "frauen_wandel",
      title: L("Rolle der Frau", "Role of women", "A nők szerepe", "Rolul femeii"),
      hint1: L("Vom Wahlrecht zur Gleichberechtigung.", "From the right to vote to equality.", "A választójogtól az egyenlőségig.", "De la dreptul de vot la egalitate."),
      hint2: L("Langer Weg zur Freiheit.", "Long road to freedom.", "Hosszú út a szabadsághoz.", "Drum lung spre libertate."),
      svg: { type: "word-display", word: "Gleichheit", color: "#db2777" },
      interactive: { type: "gap-fill", text: L("Frauen erhielten das __.", "Women received the __.", "A nők megkapták a __.", "Femeile au primit __."), gaps: [{ index: 0, options: [L("Wahlrecht", "Right to vote", "Szavazati jog", "Dreptul la vot"), L("Fahrverbot", "Driving ban", "Vezetési tilalom", "Interdicția de a conduce")], correct: 0 }] },
      quiz: { question: L("In welchem Jahr erhielten Frauen in DE das Wahlrecht?", "In which year did women in Germany gain the right to vote?", "Melyik évben szereztek szavazati jogot a nők Németországban?", "În ce an au câștigat femeile din Germania dreptul de vot?"), choices: [L("1919", "1919", "1919", "1919"), L("1871", "1871", "1871", "1871"), L("1945", "1945", "1945", "1945"), L("2000", "2000", "2000", "2000")], answer: L("1919", "1919", "1919", "1919") }
    },
    {
      id: "globalisierung_check",
      title: L("Vernetzung", "Networking", "Hálózatépítés", "Rețele"),
      hint1: L("Weltweite Abhängigkeit.", "Worldwide dependency.", "Világméretű függőség.", "Dependență la nivel mondial."),
      hint2: L("Chancen und Risiken.", "Opportunities and risks.", "Lehetőségek és kockázatok.", "Oportunități și riscuri."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Welt" }] },
      interactive: { type: "lang-mcq", question: L("Was bedeutet Globalisierung?", "What does globalization mean?", "Mit jelent a globalizáció?", "Ce înseamnă globalizarea?"), choices: [L("Weltweiter Handel", "Worldwide trade", "Világméretű kereskedelem", "Comerț mondial"), L("Nur lokaler Markt", "Local market only", "Csak helyi piac", "Doar piata locala"), L("Ende der Technik", "End of technology", "A technológia vége", "Sfârșitul tehnologiei")], answer: L("Weltweiter Handel", "Worldwide trade", "Világméretű kereskedelem", "Comerț mondial") },
      quiz: { question: L("Was bedeutet Globalisierung?", "What does globalization mean?", "Mit jelent a globalizáció?", "Ce înseamnă globalizarea?"), choices: [L("Weltweiter Handel", "Worldwide trade", "Világméretű kereskedelem", "Comerț mondial"), L("Nur lokaler Markt", "Local market only", "Csak helyi piac", "Doar piata locala"), L("Ende der Technik", "End of technology", "A technológia vége", "Sfârșitul tehnologiei"), L("Isolation", "isolation", "elkülönítés", "izolare")], answer: L("Weltweiter Handel", "Worldwide trade", "Világméretű kereskedelem", "Comerț mondial") }
    },
    {
      id: "kultur_mix",
      title: L("Kultur", "culture", "kultúra", "cultură"),
      hint1: L("Vom Stummfilm zum Streaming.", "From silent films to streaming.", "A némafilmektől a streamingig.", "De la filme mut la streaming."),
      hint2: L("Unterhaltung für alle.", "Entertainment for everyone.", "Szórakozás mindenkinek.", "Divertisment pentru toată lumea."),
      svg: { type: "icon-grid", items: [{ emoji: "🎬", label: "Film" }, { emoji: "📻", label: "Radio" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("20er", "20s", "20-as évek", "20 de ani"), right: L("Stummfilm", "Silent film", "Némafilm", "Film mut") }, { left: L("Heute", "Today", "Ma", "Astăzi"), right: L("Internet", "Internet", "Internet", "Internet") }] },
      quiz: { question: L("Was war eine neue Technik in den 20ern?", "What was new technology in the 20s?", "Mi volt az új technológia a 20-as években?", "Ce era noua tehnologie în anii 20?"), choices: [L("Rundfunk", "Broadcasting", "Műsorszórás", "Difuzare"), L("Smartphone", "Smartphone", "Okostelefon", "Smartphone"), L("Dampfschiff", "Steamboat", "Gőzhajó", "barca cu aburi"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Rundfunk", "Broadcasting", "Műsorszórás", "Difuzare") }
    },
    {
      id: "ursache_folge_mix",
      title: L("Logik", "logic", "logika", "logică"),
      hint1: L("Zusammenhänge erkennen.", "Recognize connections.", "Az összefüggések felismerése.", "Recunoaște legăturile."),
      hint2: L("Warum passierte was?", "Why did something happen?", "Miért történt valami?", "De ce sa întâmplat ceva?"),
      svg: { type: "text-bubbles", items: [{ text: "Not → Radikale", color: "#fff", bg: "#3b82f6" }, { text: "Mauerfall → Einheit", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "highlight-text", text: L("Wirtschaftskrisen führen oft zu politischer Instabilität.", "Economic crises often lead to political instability.", "A gazdasági válságok gyakran politikai instabilitáshoz vezetnek.", "Crizele economice duc adesea la instabilitate politică."), instruction: L("Was ist die Gefahr?", "What is the danger?", "Mi a veszély?", "Care este pericolul?") },
      quiz: { question: L("Was war die Folge des Mauerfalls?", "What was the result of the fall of the Berlin Wall?", "Mi volt az eredménye a berlini fal leomlásának?", "Care a fost rezultatul căderii Zidului Berlinului?"), choices: [L("Die Einheit", "The unity", "Az egység", "Unitatea"), L("Ein neuer Krieg", "A new war", "Egy új háború", "Un nou război"), L("Ein dritter Staat", "A third state", "Egy harmadik állam", "Un al treilea stat"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Die Einheit", "The unity", "Az egység", "Unitatea") }
    },
    {
      id: "abschluss_20jh",
      title: L("Das 20. Jahrhundert", "The 20th century", "A 20. század", "Secolul al XX-lea"),
      hint1: L("Jahrhundert der Extreme.", "Century of extremes.", "A szélsőségek évszázada.", "Un secol de extreme."),
      hint2: L("Schreckliche Kriege und große Hoffnung.", "Terrible wars and great hope.", "Szörnyű háborúk és nagy remények.", "Războaie groaznice și speranță mare."),
      svg: { type: "word-display", word: "Geschichte", color: "#16a34a" },
      interactive: { type: "tap-count", count: 100, instruction: L("Wie viele Jahre hat ein Jahrhundert?", "How many years are in a century?", "Hány év van egy évszázadban?", "Câți ani sunt într-un secol?") },
      quiz: { question: L("Wie nennt man das 20. Jahrhundert oft?", "What do people often call the 20th century?", "Mit neveznek az emberek gyakran a 20. századnak?", "Cum numesc oamenii adesea secolul al XX-lea?"), choices: [L("Zeitalter der Extreme", "Age of extremes", "A szélsőségek kora", "Vârsta extremelor"), L("Die ruhige Zeit", "The quiet time", "A csendes idő", "Timpul de liniste"), L("Die Steinzeit", "The Stone Age", "A kőkorszak", "Epoca de piatră"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Zeitalter der Extreme", "Age of extremes", "A szélsőségek kora", "Vârsta extremelor") }
    }
  ]
};

// ─── ISLAND 9: AKTUELLE ZEITGESCHICHTE ─────────────────────────────────────
const I9: IslandSpec = {
  id: "i9",
  title: L("Heute", "Today", "Ma", "Astăzi"),
  topics: [
    {
      id: "digital_revolution",
      title: L("Digitale Welt", "Digital world", "Digitális világ", "Lumea digitală"),
      hint1: L("Smartphones und soziale Medien.", "Smartphones and social media.", "Okostelefonok és közösségi média.", "Smartphone-uri și rețele sociale."),
      hint2: L("Ständige Erreichbarkeit.", "Constant availability.", "Állandó elérhetőség.", "Disponibilitate constantă."),
      svg: { type: "icon-grid", items: [{ emoji: "📱", label: "Handy" }, { emoji: "💬", label: "Chat" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Internet", "Internet", "Internet", "Internet"), right: L("Vernetzung", "Networking", "Hálózatépítés", "Rețele") }, { left: L("Daten", "Data", "Adat", "Date"), right: L("Schutz", "Protection", "Védelem", "Protecţie") }] },
      quiz: { question: L("Was prägt unseren Alltag heute am meisten?", "What shapes our everyday life most today?", "Mi határozza meg leginkább mai mindennapjainkat?", "Ce ne modelează cel mai mult viața de zi cu zi astăzi?"), choices: [L("Digitale Technik", "Digital technology", "Digitális technológia", "Tehnologia digitală"), L("Dampfmaschinen", "Steam engines", "Gőzgépek", "Motoare cu abur"), L("Kutschen", "carriages", "kocsik", "vagoane"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Digitale Technik", "Digital technology", "Digitális technológia", "Tehnologia digitală") }
    },
    {
      id: "eu_heute",
      title: L("Herausforderung EU", "EU challenge", "EU kihívás", "provocarea UE"),
      hint1: L("Suche nach Einigkeit.", "Seek unity.", "Keresd az egységet.", "Căutați unitatea."),
      hint2: L("Gemeinsame Politik in schwierigen Zeiten.", "Common politics in difficult times.", "Közös politika nehéz időkben.", "Politică comună în vremuri dificile."),
      svg: { type: "text-bubbles", items: [{ text: "Einheit", color: "#fff", bg: "#3b82f6" }, { text: "Vielfalt", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "gap-fill", text: L("In __ ist die Zentrale.", "The headquarters is in __.", "A központ __.", "Sediul este în __."), gaps: [{ index: 0, options: ["Brüssel", "Rom"], correct: 0 }] },
      quiz: { question: L("Was ist ein aktuelles Ziel der EU?", "What is a current goal of the EU?", "Mi az EU jelenlegi célja?", "Care este obiectivul actual al UE?"), choices: [L("Stabilität sichern", "Ensure stability", "Biztosítsa a stabilitást", "Asigurați stabilitatea"), L("Krieg führen", "wage war", "háborút vívni", "duce războiul"), L("Mauern bauen", "Build walls", "Építs falakat", "Construiți ziduri"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Stabilität sichern", "Ensure stability", "Biztosítsa a stabilitást", "Asigurați stabilitatea") }
    },
    {
      id: "umwelt_global",
      title: L("Klimaschutz", "Climate protection", "Klímavédelem", "Protecția climei"),
      hint1: L("Pariser Abkommen.", "Paris Agreement.", "Párizsi Megállapodás.", "Acordul de la Paris."),
      hint2: L("Begrenzung der Erderwärmung.", "Limiting global warming.", "A globális felmelegedés korlátozása.", "Limitarea încălzirii globale."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Erde" }] },
      interactive: { type: "highlight-text", text: L("Die Begrenzung der CO2-Emissionen ist ein weltweites Ziel.", "Limiting CO2 emissions is a global goal.", "A CO2-kibocsátás korlátozása globális cél.", "Limitarea emisiilor de CO2 este un obiectiv global."), instruction: L("Was ist CO2?", "What is CO2?", "Mi az a CO2?", "Ce este CO2?") },
      quiz: { question: L("Welches Abkommen ist wichtig für das Klima?", "Which agreement is important for the climate?", "Melyik megállapodás fontos az éghajlat szempontjából?", "Ce acord este important pentru climă?"), choices: [L("Pariser Abkommen", "Paris Agreement", "Párizsi Megállapodás", "Acordul de la Paris"), L("Versailler Vertrag", "Treaty of Versailles", "Versailles-i szerződés", "Tratatul de la Versailles"), L("Magna Carta", "Magna Carta", "Magna Carta", "Magna Carta"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Pariser Abkommen", "Paris Agreement", "Párizsi Megállapodás", "Acordul de la Paris") }
    },
    {
      id: "fake_news",
      title: L("Desinformation", "disinformation", "dezinformáció", "dezinformare"),
      hint1: L("Gefahr durch falsche Nachrichten.", "Danger of false news.", "Hamis hírek veszélye.", "Pericol de știri false."),
      hint2: L("Manipulation der Meinung.", "Manipulation of opinion.", "Véleménymanipuláció.", "Manipularea opiniei."),
      svg: { type: "text-bubbles", items: [{ text: "Lüge", color: "#fff", bg: "#dc2626" }, { text: "Check", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "word-order", words: [L("Prüfe", "Check", "Ellenőrzés", "Verifica"), L("die", "the", "a", "cel"), L("Quelle", "source", "forrás", "sursă")], instruction: L("Regel?", "Rule?", "Szabály?", "Regulă?") },
      quiz: { question: L("Wie nennt man absichtliche Falschmeldungen?", "What do you call intentional hoaxes?", "Mit nevezünk szándékos hoaxnak?", "Cum numiți farse intenționate?"), choices: [L("Fake News", "Fake news", "Álhírek", "Știri false"), L("Gute Nachrichten", "Good news", "Jó hír", "Vești bune"), L("Märchen", "Fairy tale", "Tündérmese", "Basm"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Fake News", "Fake news", "Álhírek", "Știri false") }
    },
    {
      id: "globaler_handel",
      title: L("Warenwege", "Goods routes", "Áruútvonalak", "Rute de mărfuri"),
      hint1: L("Containerschiffe und Logistik.", "Container ships and logistics.", "Konténerhajózás és logisztika.", "Nave de containere și logistică."),
      hint2: L("Abhängigkeit von Lieferketten.", "Dependence on supply chains.", "Az ellátási láncoktól való függés.", "Dependența de lanțurile de aprovizionare."),
      svg: { type: "icon-grid", items: [{ emoji: "🚢", label: "Schiff" }, { emoji: "📦", label: "Paket" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Hafen", "Harbor", "Kikötő", "Port"), right: L("Logistik", "logistics", "logisztika", "logistică") }, { left: L("Konsum", "consumption", "fogyasztás", "consum"), right: L("Kauf", "purchase", "vásárlás", "cumpărare") }] },
      quiz: { question: L("Was ermöglicht billige Waren weltweit?", "What makes cheap goods possible worldwide?", "Mi teszi lehetővé az olcsó árukat világszerte?", "Ce face ca bunurile ieftine să fie posibile în întreaga lume?"), choices: [L("Globale Lieferketten", "Global supply chains", "Globális ellátási láncok", "Lanțurile globale de aprovizionare"), L("Nur Handarbeit", "Only manual work", "Csak kézi munka", "Doar lucru manual"), L("Kein Transport", "No transportation", "Nincs szállítás", "Fără transport"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Globale Lieferketten", "Global supply chains", "Globális ellátási láncok", "Lanțurile globale de aprovizionare") }
    },
    {
      id: "ki",
      title: L("KI", "AI", "AI", "AI"),
      hint1: L("Künstliche Intelligenz.", "Artificial intelligence.", "Mesterséges intelligencia.", "Inteligenţă artificială."),
      hint2: L("Maschinen, die lernen.", "Machines that learn.", "Gépek, amelyek tanulnak.", "Mașini care învață."),
      svg: { type: "word-display", word: "KI", color: "#8b5cf6" },
      interactive: { type: "lang-mcq", question: L("Was bedeutet KI?", "What does AI mean?", "Mit jelent a AI?", "Ce înseamnă AI?"), choices: [L("Künstliche Intelligenz", "Artificial intelligence", "Mesterséges intelligencia", "Inteligenţă artificială"), L("Keine Infos", "No info", "Nincs információ", "Nicio informație"), L("Kleines Interface", "Small interface", "Kis felület", "Interfață mică")], answer: L("Künstliche Intelligenz", "Artificial intelligence", "Mesterséges intelligencia", "Inteligenţă artificială") },
      quiz: { question: L("Was bedeutet KI?", "What does AI mean?", "Mit jelent a AI?", "Ce înseamnă AI?"), choices: [L("Künstliche Intelligenz", "Artificial intelligence", "Mesterséges intelligencia", "Inteligenţă artificială"), L("Keine Infos", "No info", "Nincs információ", "Nicio informație"), L("Kleines Interface", "Small interface", "Kis felület", "Interfață mică"), L("Kurze Info", "Short info", "Rövid információ", "Informații scurte")], answer: L("Künstliche Intelligenz", "Artificial intelligence", "Mesterséges intelligencia", "Inteligenţă artificială") }
    },
    {
      id: "friedenssicherung",
      title: L("Konflikte heute", "Conflicts today", "Konfliktusok ma", "Conflicte astăzi"),
      hint1: L("Neue Spannungen weltweit.", "New tensions worldwide.", "Új feszültségek világszerte.", "Noi tensiuni la nivel mondial."),
      hint2: L("Diplomatie als wichtigstes Werkzeug.", "Diplomacy as the most important tool.", "A diplomácia, mint a legfontosabb eszköz.", "Diplomația ca instrument cel mai important."),
      svg: { type: "text-bubbles", items: [{ text: "Krieg → Gefahr", color: "#fff", bg: "#3b82f6" }, { text: "Reden → Lösung", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "gap-fill", text: L("Diplomatie bedeutet __.", "Diplomacy means __.", "A diplomácia jelentése __.", "Diplomația înseamnă __."), gaps: [{ index: 0, options: [L("Verhandeln", "Negotiate", "Tárgyalni", "Negocia"), L("Kämpfen", "Battle", "Csata", "Luptă")], correct: 0 }] },
      quiz: { question: L("Was soll Kriege verhindern?", "What is supposed to prevent wars?", "Mi akadályozza meg a háborúkat?", "Ce ar trebui să prevină războaiele?"), choices: [L("Diplomatie", "diplomacy", "diplomácia", "diplomaţie"), L("Mehr Waffen", "More weapons", "Még több fegyver", "Mai multe arme"), L("Abschottung", "Isolation", "Elkülönítés", "Izolare"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Diplomatie", "diplomacy", "diplomácia", "diplomaţie") }
    },
    {
      id: "energiewende",
      title: L("Erneuerbare Energie", "Renewable energy", "Megújuló energia", "Energie regenerabilă"),
      hint1: L("Wind, Sonne, Wasser.", "Wind, sun, water.", "Szél, nap, víz.", "Vânt, soare, apă."),
      hint2: L("Abkehr von Kohle und Öl.", "Moving away from coal and oil.", "Távolodás a széntől és az olajtól.", "Îndepărtându-se de cărbune și petrol."),
      svg: { type: "icon-grid", items: [{ emoji: "💨", label: "Wind" }, { emoji: "☀️", label: "Sonne" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Sauber", "Clean", "Tiszta", "Curat"), items: [L("Windkraft", "Wind power", "Szélenergia", "Energia eoliană"), L("Solar", "Solar", "Nap", "Solar")] }] },
      quiz: { question: L("Was gehört zur Energiewende?", "What is part of the energy transition?", "Mi az energiaátmenet része?", "Ce face parte din tranziția energetică?"), choices: [L("Sonnenergie", "Solar energy", "Napenergia", "Energia solară"), L("Kohleverbrennung", "Coal combustion", "Szénégetés", "Arderea cărbunelui"), L("Ölheizung", "Oil heating", "Olaj fűtés", "Încălzire cu ulei"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Sonnenergie", "Solar energy", "Napenergia", "Energia solară") }
    },
    {
      id: "pandemie",
      title: L("Gesundheit", "Health", "Egészség", "Sănătate"),
      hint1: L("Globale Krankheiten.", "Global diseases.", "Globális betegségek.", "Boli globale."),
      hint2: L("Bedeutung der Wissenschaft.", "Importance of science.", "A tudomány jelentősége.", "Importanța științei."),
      svg: { type: "text-bubbles", items: [{ text: "Maske", color: "#fff", bg: "#3b82f6" }, { text: "Impfung", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "tap-count", count: 1, instruction: L("Wie viele (eine) Welt haben wir?", "How many (one) worlds do we have?", "Hány (egy) világunk van?", "Câte (una) lumi avem?") },
      quiz: { question: L("Was schützt vor Viren?", "What protects against viruses?", "Mi véd a vírusok ellen?", "Ce protejează împotriva virușilor?"), choices: [L("Impfungen", "Vaccinations", "Oltások", "Vaccinări"), L("Handewaschen allein", "Handwashing alone", "Egyedül kézmosás", "Spălatul pe mâini singur"), L("Gar nichts", "Nothing at all", "Egyáltalán semmi", "Nimic"), L("Warten", "Wait", "Várjon", "Așteaptă")], answer: L("Impfungen", "Vaccinations", "Oltások", "Vaccinări") }
    },
    {
      id: "demokratie_gefahr",
      title: L("Zusammenhalt", "cohesion", "kohézió", "coeziune"),
      hint1: L("Gefahr durch Spaltung.", "Danger of division.", "Megosztás veszélye.", "Pericol de divizare."),
      hint2: L("Wichtigkeit des Dialogs.", "Importance of dialogue.", "A párbeszéd fontossága.", "Importanța dialogului."),
      svg: { type: "text-bubbles", items: [{ text: "Reden → Brücke", color: "#fff", bg: "#3b82f6" }, { text: "Hass → Mauer", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "highlight-text", text: L("Demokratie braucht aktive Bürger.", "Democracy needs active citizens.", "A demokráciának aktív állampolgárokra van szüksége.", "Democrația are nevoie de cetățeni activi."), instruction: L("Was ist nötig?", "What is necessary?", "Mi szükséges?", "Ce este necesar?") },
      quiz: { question: L("Was stärkt die Demokratie?", "What strengthens democracy?", "Mi erősíti a demokráciát?", "Ce întărește democrația?"), choices: [L("Mitmachen", "Join in", "Csatlakozik", "Alăturați-vă"), L("Zuschauen", "Watch", "Óra", "Ceas"), L("Ignorieren", "Ignore", "Figyelmen kívül hagyni", "Ignora"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Mitmachen", "Join in", "Csatlakozik", "Alăturați-vă") }
    },
    {
      id: "weltraum_modern",
      title: L("Mars-Pläne", "Mars plans", "Mars tervek", "Planurile lui Marte"),
      hint1: L("Neue Reiseziele im All.", "New travel destinations in space.", "Új utazási célpontok az űrben.", "Noi destinații de călătorie în spațiu."),
      hint2: L("Private Firmen wie SpaceX.", "Private companies like SpaceX.", "Magánvállalatok, mint a SpaceX.", "Companii private precum SpaceX."),
      svg: { type: "icon-grid", items: [{ emoji: "🔴", label: "Mars" }, { emoji: "🚀", label: "Ziel" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Erde", "Earth", "Föld", "Pământ"), right: L("Blau", "Blue", "Kék", "Albastru") }, { left: L("Mars", "Mars", "Mars", "Marte"), right: L("Rot", "Red", "Piros", "Roşu") }] },
      quiz: { question: L("Welcher Planet ist das nächste Ziel?", "Which planet is the next target?", "Melyik bolygó a következő célpont?", "Care planetă este următoarea țintă?"), choices: [L("Mars", "Mars", "Mars", "Marte"), L("Venus", "Venus", "Vénusz", "Venus"), L("Jupiter", "Jupiter", "Jupiter", "Jupiter"), L("Saturn", "Saturn", "Szaturnusz", "Saturn")], answer: L("Mars", "Mars", "Mars", "Marte") }
    },
    {
      id: "nachhaltigkeit",
      title: L("Nachhaltigkeit", "sustainability", "fenntarthatóság", "durabilitate"),
      hint1: L("Ressourcen schonen.", "Save resources.", "Mentse az erőforrásokat.", "Economisiți resurse."),
      hint2: L("An die Enkel denken.", "Think about the grandchildren.", "Gondolj az unokákra.", "Gândește-te la nepoți."),
      svg: { type: "word-display", word: "Zukunft", color: "#16a34a" },
      interactive: { type: "sentence-build", words: [L("Schütze", "Protect", "Védje", "Proteja"), L("die", "the", "a", "cel"), L("Natur", "Nature", "Természet", "Natură"), L("für", "for", "számára", "pentru"), L("später", "later", "később", "mai târziu")], instruction: L("Motto?", "Motto?", "Jelmondat?", "Motto?") },
      quiz: { question: L("Was bedeutet Nachhaltigkeit?", "What does sustainability mean?", "Mit jelent a fenntarthatóság?", "Ce înseamnă sustenabilitate?"), choices: [L("Ressourcenschutz", "Resource protection", "Erőforrásvédelem", "Protecția resurselor"), L("Verschwendung", "waste", "hulladék", "deşeuri"), L("Alles sofort verbrauchen", "Use everything immediately", "Azonnal használjon fel mindent", "Folosește totul imediat"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Ressourcenschutz", "Resource protection", "Erőforrásvédelem", "Protecția resurselor") }
    },
    {
      id: "vielfalt",
      title: L("Bunte Welt", "Colorful world", "Színes világ", "Lume colorată"),
      hint1: L("Akzeptanz verschiedener Lebensstile.", "Acceptance of different lifestyles.", "A különböző életmódok elfogadása.", "Acceptarea diferitelor stiluri de viață."),
      hint2: L("Gegen Diskriminierung.", "Against discrimination.", "A diszkrimináció ellen.", "Împotriva discriminării."),
      svg: { type: "text-bubbles", items: [{ text: "Bunt", color: "#fff", bg: "#db2777" }, { text: "Offen", color: "#fff", bg: "#8b5cf6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Respekt", "respect", "tisztelet", "respect"), right: L("Frieden", "Peace", "Béke", "Pace") }, { left: L("Hass", "hate", "gyűlölet", "ură"), right: L("Konflikt", "conflict", "konfliktus", "conflict") }] },
      quiz: { question: L("Was fördert das Zusammenleben?", "What promotes coexistence?", "Mi segíti elő az együttélést?", "Ce promovează conviețuirea?"), choices: [L("Toleranz", "tolerance", "tolerancia", "toleranţă"), L("Vorurteile", "Prejudices", "Előítéletek", "Prejudecăți"), L("Gewalt", "Violence", "Erőszak", "Violenţă"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Toleranz", "tolerance", "tolerancia", "toleranţă") }
    },
    {
      id: "bildung_digital",
      title: L("Lernen heute", "Learn today", "Tanulj még ma", "Învață astăzi"),
      hint1: L("Tablets statt Kreide.", "Tablets instead of chalk.", "Tabletták kréta helyett.", "Tablete în loc de cretă."),
      hint2: L("Wissen ist überall verfügbar.", "Knowledge is available everywhere.", "A tudás mindenhol elérhető.", "Cunoștințele sunt disponibile peste tot."),
      svg: { type: "icon-grid", items: [{ emoji: "🎓", label: "Wissen" }, { emoji: "💻", label: "Online" }] },
      interactive: { type: "gap-fill", text: L("Lernen mit der __.", "Learning with the __.", "Tanulás a __.", "Învățând cu __."), gaps: [{ index: 0, options: ["Cloud", "Tafel"], correct: 0 }] },
      quiz: { question: L("Was hilft beim modernen Lernen?", "What helps with modern learning?", "Mi segíti a modern tanulást?", "Ce ajută la învățarea modernă?"), choices: [L("Digitale Medien", "Digital media", "Digitális média", "Media digitală"), L("Trommeln", "Drumming", "Dobolás", "Tobe"), L("Steintafeln", "Stone tablets", "Kőtáblák", "Tablete de piatră"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Digitale Medien", "Digital media", "Digitális média", "Media digitală") }
    },
    {
      id: "schlusswort",
      title: L("Deine Geschichte", "Your story", "A te történeted", "Povestea ta"),
      hint1: L("Du schreibst die Zukunft.", "You write the future.", "Te írod a jövőt.", "Tu scrii viitorul."),
      hint2: L("Lerne aus dem Gestern.", "Learn from yesterday.", "Tanulj a tegnapból.", "Învață de ieri."),
      svg: { type: "word-display", word: "Zukunft", color: "#3b82f6" },
      interactive: { type: "sentence-build", words: [L("Geschichte", "Story", "Történet", "Poveste"), L("geht", "goes", "megy", "merge"), L("immer", "always", "mindig", "întotdeauna"), L("weiter", "further", "további", "mai departe")], instruction: L("Schluss?", "Ending?", "Befejező?", "Final?") },
      quiz: { question: L("Was ist Geschichte?", "What is history?", "Mi a történelem?", "Ce este istoria?"), choices: [L("Vergangenheit und Zukunft", "Past and future", "Múlt és jövő", "Trecut și viitor"), L("Nur alte Bücher", "Just old books", "Csak régi könyvek", "Doar cărți vechi"), L("Langweilig", "Boring", "Fúrás", "Plictisitor"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Vergangenheit und Zukunft", "Past and future", "Múlt és jövő", "Trecut și viitor") }
    }
  ]
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
