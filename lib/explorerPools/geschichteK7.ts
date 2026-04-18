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

// ─── ISLAND 1: DIE FRANZÖSISCHE REVOLUTION (BEGINN) ────────────────────────
const I1: IslandSpec = {
  id: "i1",
  title: L("Französische Revolution: Beginn", "French Revolution: beginning", "Francia forradalom: kezdet", "Revoluția Franceză: început"),
  topics: [
    {
      id: "staende",
      title: L("Ständegesellschaft", "Estate society", "Birtoktársadalom", "Societatea imobiliară"),
      hint1: L("Die Gesellschaft war in drei Stände geteilt.", "The company was divided into three classes.", "A társaságot három osztályra osztották.", "Compania a fost împărțită în trei clase."),
      hint2: L("Klerus, Adel und der Dritte Stand.", "Clergy, nobility and the third estate.", "Papság, nemesség és a harmadik birtok.", "Clerul, nobilimea și a treia stare."),
      svg: { type: "two-groups", left: { items: ["Klerus", "Adel"], bg: "#fee2e2", border: "#ef4444" }, right: { items: ["Bauern", "Bürger"], bg: "#dcfce7", border: "#22c55e" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("1. Stand", "1st stand", "1. állvány", "primul stand"), right: L("Klerus", "clergy", "papság", "clerului") }, { left: L("2. Stand", "2nd stand", "2. állvány", "a 2-a stand"), right: L("Adel", "Nobility", "Nemesség", "Nobleţe") }, { left: L("3. Stand", "3rd stand", "3. állvány", "a 3-a stand"), right: L("Bauern", "farmers", "gazdálkodók", "fermierii") }] },
      quiz: { question: L("Wer gehörte zum ersten Stand?", "Who belonged to the first estate?", "Kik tartoztak az első birtokhoz?", "Cine a aparținut primei moșii?"), choices: [L("Klerus", "clergy", "papság", "clerului"), L("Adel", "Nobility", "Nemesség", "Nobleţe"), L("Bauern", "farmers", "gazdálkodók", "fermierii"), L("König", "king", "király", "rege")], answer: L("Klerus", "clergy", "papság", "clerului") }
    },
    {
      id: "generalstaende",
      title: L("Generalstände", "Estates General", "Birtok tábornok", "Estatele Generale"),
      hint1: L("1789 rief Ludwig XVI. die Generalstände zusammen.", "In 1789 Louis XVI called. the Estates General together.", "1789-ben XVI. Lajos hívott. az Estates General együtt.", "În 1789 Ludovic al XVI-lea a sunat. Statelor Generale împreună."),
      hint2: L("Das Ziel war die Lösung der Finanzkrise.", "The goal was to solve the financial crisis.", "A cél a pénzügyi válság megoldása volt.", "Scopul a fost rezolvarea crizei financiare."),
      svg: { type: "text-bubbles", items: [{ text: "1789", color: "#fff", bg: "#3b82f6" }, { text: "Steuern", color: "#fff", bg: "#ef4444" }] },
      interactive: { type: "gap-fill", text: L("Der König brauchte neues __.", "The king needed new __.", "A királynak új __ kellett.", "Regele avea nevoie de noi __."), gaps: [{ index: 0, options: [L("Geld", "Money", "Pénz", "Bani"), L("Brot", "Bread", "Kenyér", "Pâine")], correct: 0 }] },
      quiz: { question: L("In welchem Jahr wurden die Generalstände einberufen?", "In what year were the Estates General convened?", "Melyik évben hívták össze a birtokgenerálist?", "În ce an s-au reunit Staturile Generale?"), choices: [L("1789", "1789", "1789", "1789"), L("1776", "1776", "1776", "1776"), L("1815", "1815", "1815", "1815"), L("1799", "1799", "1799", "1799")], answer: L("1789", "1789", "1789", "1789") }
    },
    {
      id: "ballhaus",
      title: L("Ballhausschwur", "Ballhaus Oath", "Ballhaus eskü", "Jurământul Ballhaus"),
      hint1: L("Abgeordnete schworen, eine Verfassung zu geben.", "MPs vowed to give a constitution.", "A képviselők megfogadták, hogy alkotmányt adnak.", "Parlamentarii au promis că vor da o constituție."),
      hint2: L("Sie trafen sich im Ballhaus von Versailles.", "They met in the ballroom at Versailles.", "A versailles-i bálteremben találkoztak.", "S-au întâlnit în sala de bal de la Versailles."),
      svg: { type: "word-display", word: "Verfassung", color: "#1e3a8a" },
      interactive: { type: "word-order", words: [L("Wir", "We", "Mi", "Noi"), L("geben", "give", "ad", "da"), L("uns", "us", "minket", "S.U.A"), L("eine", "one", "egy", "unul"), L("Verfassung", "Constitution", "Alkotmány", "Constituţie")], instruction: L("Ordne den Schwur!", "Arrange the oath!", "Rendezd az esküt!", "Aranjați jurământul!") },
      quiz: { question: L("Was forderten die Abgeordneten im Ballhaus?", "What did the representatives in the ballroom demand?", "Mit követeltek a képviselők a bálteremben?", "Ce au cerut reprezentanții din sala de bal?"), choices: [L("Eine Verfassung", "A constitution", "Egy alkotmány", "O constitutie"), L("Mehr Wein", "More wine", "Több bort", "Mai mult vin"), L("Einen neuen König", "A new king", "Egy új király", "Un nou rege"), L("Krieg", "War", "Háború", "Război")], answer: L("Eine Verfassung", "A constitution", "Egy alkotmány", "O constitutie") }
    },
    {
      id: "bastille",
      title: L("Sturm auf die Bastille", "Storming of the Bastille", "A Bastille megtámadása", "Furtunul Bastiliei"),
      hint1: L("Am 14. Juli 1789 begann der Aufstand.", "The uprising began on July 14, 1789.", "A felkelés 1789. július 14-én kezdődött.", "Răscoala a început la 14 iulie 1789."),
      hint2: L("Die Bastille war ein Symbol der Willkür.", "The Bastille was a symbol of arbitrariness.", "A Bastille az önkény szimbóluma volt.", "Bastilia a fost un simbol al arbitrarului."),
      svg: { type: "text-bubbles", items: [{ text: "Bastille", color: "#fff", bg: "#3b82f6" }, { text: "Gefängnis", color: "#fff", bg: "#6366f1" }, { text: "Waffen", color: "#fff", bg: "#3b82f6" }, { text: "Pulver", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "tap-count", count: 14, instruction: L("An welchem Tag im Juli war der Sturm?", "What day in July was the storm?", "Melyik nap volt júliusban a vihar?", "În ce zi din iulie a fost furtuna?") },
      quiz: { question: L("Was war die Bastille?", "What was the Bastille?", "Mi volt a Bastille?", "Ce a fost Bastilia?"), choices: [L("Ein Gefängnis", "A prison", "Egy börtön", "O închisoare"), L("Ein Schloss", "A castle", "Egy kastély", "Un castel"), L("Eine Kirche", "A church", "Egy templom", "O biserică"), L("Ein Markt", "A market", "Egy piac", "O piata")], answer: L("Ein Gefängnis", "A prison", "Egy börtön", "O închisoare") }
    },
    {
      id: "menschenrechte",
      title: L("Menschenrechte", "Human rights", "Emberi jogok", "Drepturile omului"),
      hint1: L("1789 wurde die Erklärung der Rechte verkündet.", "In 1789 the Declaration of Rights was proclaimed.", "1789-ben kihirdették a Jogok Nyilatkozatát.", "În 1789 a fost proclamată Declarația Drepturilor."),
      hint2: L("Gleichheit vor dem Gesetz war zentral.", "Equality before the law was central.", "A törvény előtti egyenlőség központi szerepet kapott.", "Egalitatea în fața legii era centrală."),
      svg: { type: "sentence-display", words: ["Freiheit", "Gleichheit", "Brüderlichkeit"], color: "#16a34a" },
      interactive: { type: "highlight-text", text: L("Alle Menschen sind von Geburt an frei und gleich an Rechten.", "All people are free from birth and have equal rights.", "Minden ember születésétől fogva szabad és egyenlő jogokkal rendelkezik.", "Toți oamenii sunt liberi de la naștere și au drepturi egale."), instruction: L("Markiere die zentrale Aussage!", "Mark the central statement!", "Jelölje be a központi állítást!", "Marcați declarația centrală!") },
      quiz: { question: L("Was ist ein Kernpunkt der Menschenrechte?", "What is a core issue of human rights?", "Mi az emberi jogok alapvető kérdése?", "Care este o problemă de bază a drepturilor omului?"), choices: [L("Gleichheit", "equality", "egyenlőség", "egalitate"), L("Sklaverei", "slavery", "rabszolgaság", "robie"), L("Absolute Macht", "Absolute power", "Abszolút hatalom", "Putere absolută"), L("Zensur", "censorship", "cenzúra", "cenzură")], answer: L("Gleichheit", "equality", "egyenlőség", "egalitate") }
    },
    {
      id: "trikolore",
      title: L("Die Trikolore", "The tricolor", "A trikolór", "Tricolorul"),
      hint1: L("Die neue Flagge Frankreichs.", "The new flag of France.", "Franciaország új zászlaja.", "Noul steag al Franței."),
      hint2: L("Blau, Weiß und Rot.", "Blue, white and red.", "Kék, fehér és piros.", "Albastru, alb și roșu."),
      svg: { type: "text-bubbles", items: [{ text: "Blau", color: "#fff", bg: "#002395" }, { text: "Weiß", color: "#000", bg: "#ffffff" }, { text: "Rot", color: "#fff", bg: "#ed2939" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Revolution", "revolution", "forradalom", "revoluţie"), items: [L("Trikolore", "Tricolor", "Trikolór", "Tricolor"), L("Kokarde", "cockade", "kokárda", "cocardă")] }, { label: L("Monarchie", "monarchy", "monarchia", "monarhie"), items: [L("Lilie", "lily", "liliom", "crin")] }] },
      quiz: { question: L("Welche Farben hat die Trikolore?", "What colors are the tricolor?", "Milyen színű a trikolor?", "Ce culori sunt tricolorul?"), choices: [L("Blau-Weiß-Rot", "Blue-white-red", "Kék-fehér-piros", "Albastru-alb-rosu"), L("Schwarz-Rot-Gold", "Black-red-gold", "Fekete-piros-arany", "Negru-rosu-auriu"), L("Rot-Gelb", "Red-yellow", "Piros-sárga", "Roșu-galben"), L("Grün-Weiß-Rot", "Green-white-red", "Zöld-fehér-piros", "Verde-alb-rosu")], answer: L("Blau-Weiß-Rot", "Blue-white-red", "Kék-fehér-piros", "Albastru-alb-rosu") }
    },
    {
      id: "ludwig16",
      title: L("Ludwig XVI.", "Louis XVI", "Lajos XVI", "Ludovic al XVI-lea"),
      hint1: L("Der letzte absolutistische König.", "The last absolutist king.", "Az utolsó abszolutista király.", "Ultimul rege absolutist."),
      hint2: L("Er war mit der Situation überfordert.", "He was overwhelmed by the situation.", "Meglepte a helyzet.", "A fost copleșit de situație."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "Krone" }, { emoji: "🏰", label: "Versailles" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Ludwig XVI.", "Louis XVI", "Lajos XVI", "Ludovic al XVI-lea"), right: L("König", "king", "király", "rege") }, { left: L("Marie Antoinette", "Marie Antoinette", "Marie Antoinette", "Maria Antonieta"), right: L("Königin", "queen", "királynő", "regină") }] },
      quiz: { question: L("Wer war der König zu Beginn der Revolution?", "Who was the king at the beginning of the revolution?", "Ki volt a király a forradalom kezdetén?", "Cine a fost regele la începutul revoluției?"), choices: [L("Ludwig XVI.", "Louis XVI", "Lajos XVI", "Ludovic al XVI-lea"), L("Ludwig XIV.", "Louis XIV", "Lajos XIV", "Ludovic al XIV-lea"), L("Napoleon", "Napoleon", "Napóleon", "Napoleon"), L("Karl X.", "Charles X", "X. Károly", "Carol al X-lea")], answer: L("Ludwig XVI.", "Louis XVI", "Lajos XVI", "Ludovic al XVI-lea") }
    },
    {
      id: "nationalversammlung",
      title: L("Nationalversammlung", "National Assembly", "Országgyűlés", "Adunarea Națională"),
      hint1: L("Der 3. Stand erklärte sich zur Vertretung.", "The 3rd Estate declared itself representative.", "A 3. Birtok képviselőnek nyilvánította magát.", "Statul 3 s-a declarat reprezentant."),
      hint2: L("Sie wollten die Nation allein vertreten.", "They wanted to represent the nation alone.", "Egyedül akarták képviselni a nemzetet.", "Au vrut să reprezinte singuri națiunea."),
      svg: { type: "word-display", word: "Nation", color: "#dc2626" },
      interactive: { type: "sentence-build", words: [L("Die", "The", "A", "The"), L("Nationalversammlung", "National Assembly", "Országgyűlés", "Adunarea Națională"), L("vertritt", "represents", "képviseli", "reprezintă"), L("das", "the", "a", "cel"), L("Volk", "People", "Emberek", "Oameni")], instruction: L("Bilde den Satz!", "Make the sentence!", "Fogalmazd meg a mondatot!", "Faceți propoziția!") },
      quiz: { question: L("Wer bildete die Nationalversammlung?", "Who formed the National Assembly?", "Kik alkották az Országgyűlést?", "Cine a format Adunarea Națională?"), choices: [L("Der 3. Stand", "The 3rd Estate", "A 3. birtok", "Moșia a 3-a"), L("Nur der Adel", "Only the nobility", "Csak a nemesség", "Doar nobilimea"), L("Die Priester", "The priests", "A papok", "Preoții"), L("Ausländer", "Foreigner", "Külföldi", "Străin")], answer: L("Der 3. Stand", "The 3rd Estate", "A 3. birtok", "Moșia a 3-a") }
    },
    {
      id: "brotpreise",
      title: L("Hunger & Brot", "Hunger & Bread", "Éhség és kenyér", "Foame și Pâine"),
      hint1: L("Missernten führten zu hohen Brotpreisen.", "Bad harvests led to high bread prices.", "A rossz termés magas kenyérárakat eredményezett.", "Recoltele proaste au dus la prețuri mari la pâine."),
      hint2: L("Das Volk litt unter großem Hunger.", "The people suffered from great hunger.", "Az emberek nagy éhségtől szenvedtek.", "Oamenii sufereau de o foame mare."),
      svg: { type: "text-bubbles", items: [{ text: "Missernte", color: "#fff", bg: "#dc2626" }, { text: "Hunger", color: "#fff", bg: "#991b1b" }, { text: "Hohe Preise", color: "#fff", bg: "#dc2626" }, { text: "Wut", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "urs", label: L("Ursachen", "Causes", "Okai", "Cauze") }], items: [{ text: L("Hunger", "hunger", "éhség", "foame"), bucketId: "urs" }, { text: L("Schulden", "Debts", "Adósságok", "Datorii"), bucketId: "urs" }] },
      quiz: { question: L("Was war ein wirtschaftlicher Grund für die Revolution?", "What was an economic reason for the revolution?", "Mi volt a forradalom gazdasági oka?", "Care a fost motivul economic al revoluției?"), choices: [L("Hohe Brotpreise", "High bread prices", "Magas kenyérárak", "Prețuri mari la pâine"), L("Zu viel Gold", "Too much gold", "Túl sok arany", "Prea mult aur"), L("Günstige Mieten", "Cheap rents", "Olcsó bérleti díjak", "Chirii ieftine"), L("Keine Steuern", "No taxes", "Nincsenek adók", "Fara taxe")], answer: L("Hohe Brotpreise", "High bread prices", "Magas kenyérárak", "Prețuri mari la pâine") }
    },
    {
      id: "versailles",
      title: L("Versailles", "Versailles", "Versailles", "Versailles"),
      hint1: L("Der prunkvolle Sitz des Königs.", "The king's magnificent residence.", "A király csodálatos rezidenciája.", "Reședința magnifică a regelui."),
      hint2: L("Weit weg vom hungernden Volk in Paris.", "Far away from the starving people in Paris.", "Távol a párizsi éhező emberektől.", "Departe de oamenii înfometați din Paris."),
      svg: { type: "icon-grid", items: [{ emoji: "🏰", label: "Schloss" }, { emoji: "🌳", label: "Park" }] },
      interactive: { type: "gap-fill", text: L("Der König residierte in __.", "The king resided in __.", "A király __-ben lakott.", "Regele locuia în __."), gaps: [{ index: 0, options: ["Versailles", "Berlin", "Wien"], correct: 0 }] },
      quiz: { question: L("Wo wohnte der französische König?", "Where did the French king live?", "Hol élt a francia király?", "Unde locuia regele francez?"), choices: [L("Versailles", "Versailles", "Versailles", "Versailles"), L("Louvre", "Louvre", "Louvre", "Luvru"), L("Bastille", "Bastille", "Bastille", "Bastille"), L("Eiffelturm", "Eiffel Tower", "Eiffel-torony", "Turnul Eiffel")], answer: L("Versailles", "Versailles", "Versailles", "Versailles") }
    },
    {
      id: "aufklaerung",
      title: L("Einfluss der Aufklärung", "Influence of the Enlightenment", "A felvilágosodás hatása", "Influența Iluminismului"),
      hint1: L("Denker forderten Vernunft und Freiheit.", "Thinkers demanded reason and freedom.", "A gondolkodók értelmet és szabadságot követeltek.", "Gânditorii au cerut rațiune și libertate."),
      hint2: L("Kritik an der Macht des Königs.", "Criticism of the king's power.", "A király hatalmának bírálata.", "Critica puterii regelui."),
      svg: { type: "text-bubbles", items: [{ text: "Vernunft", color: "#fff", bg: "#8b5cf6" }, { text: "Wissen", color: "#fff", bg: "#4f46e5" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Montesquieu", "Montesquieu", "Montesquieu", "Montesquieu"), right: L("Gewaltenteilung", "Separation of powers", "A hatáskörök szétválasztása", "Separarea puterilor") }, { left: L("Rousseau", "Rousseau", "Rousseau", "Rousseau"), right: L("Volkswille", "will of the people", "a nép akarata", "vointa poporului") }] },
      quiz: { question: L("Was forderten die Aufklärer?", "What did the enlighteners demand?", "Mit követeltek a felvilágosítók?", "Ce au cerut iluminatorii?"), choices: [L("Gewaltenteilung", "Separation of powers", "A hatáskörök szétválasztása", "Separarea puterilor"), L("Mehr Steuern", "More taxes", "Több adó", "Mai multe taxe"), L("Absolute Macht", "Absolute power", "Abszolút hatalom", "Putere absolută"), L("Hexenverbrennung", "Witch burning", "Boszorkányégetés", "Vrăjitoare care arde")], answer: L("Gewaltenteilung", "Separation of powers", "A hatáskörök szétválasztása", "Separarea puterilor") }
    },
    {
      id: "olympe",
      title: L("Olympe de Gouges", "Olympe de Gouges", "Olympe de Gouges", "Olympe de Gouges"),
      hint1: L("Sie forderte Rechte für Frauen.", "She demanded rights for women.", "A nők jogait követelte.", "Ea a cerut drepturi pentru femei."),
      hint2: L("Erklärung der Rechte der Frau.", "Declaration of Women's Rights.", "Nyilatkozat a nők jogairól.", "Declarația Drepturilor Femeii."),
      svg: { type: "word-display", word: "Frauenrechte", color: "#db2777" },
      interactive: { type: "lang-mcq", question: L("Was forderte Olympe de Gouges?", "What did Olympe de Gouges demand?", "Mit követelt az Olympe de Gouges?", "Ce a cerut Olympe de Gouges?"), choices: [L("Rechte für Frauen", "Rights for women", "A nők jogai", "Drepturi pentru femei"), L("Rückkehr zum König", "Return to the king", "Vissza a királyhoz", "Întoarce-te la rege"), L("Krieg gegen England", "War against England", "Háború Anglia ellen", "Război împotriva Angliei")], answer: L("Rechte für Frauen", "Rights for women", "A nők jogai", "Drepturi pentru femei") },
      quiz: { question: L("Was forderte Olympe de Gouges?", "What did Olympe de Gouges demand?", "Mit követelt az Olympe de Gouges?", "Ce a cerut Olympe de Gouges?"), choices: [L("Rechte für Frauen", "Rights for women", "A nők jogai", "Drepturi pentru femei"), L("Rückkehr zum König", "Return to the king", "Vissza a királyhoz", "Întoarce-te la rege"), L("Krieg gegen England", "War against England", "Háború Anglia ellen", "Război împotriva Angliei"), L("Steuererhöhung", "Tax increase", "Adóemelés", "Creșterea impozitului")], answer: L("Rechte für Frauen", "Rights for women", "A nők jogai", "Drepturi pentru femei") }
    },
    {
      id: "marschfrauen",
      title: L("Marsch der Frauen", "Women's March", "Női március", "Marșul Femeilor"),
      hint1: L("Frauen zogen nach Versailles.", "Women moved to Versailles.", "A nők Versailles-ba költöztek.", "Femeile s-au mutat la Versailles."),
      hint2: L("Sie holten den König nach Paris.", "They brought the king to Paris.", "Párizsba vitték a királyt.", "L-au adus pe rege la Paris."),
      svg: { type: "icon-grid", items: [{ emoji: "🥖", label: "Brot" }, { emoji: "🚶‍♀️", label: "Marsch" }] },
      interactive: { type: "tap-count", count: 7, instruction: L("In welchem Monat (Oktober=10) war der Marsch?", "In which month (October=10) was the march?", "Melyik hónapban (október=10) volt a felvonulás?", "În ce lună (octombrie=10) a avut loc marșul?") },
      quiz: { question: L("Wohin zogen die Frauen beim Marsch?", "Where did the women go on the march?", "Hová mentek a nők a menetben?", "Unde au plecat femeile în marș?"), choices: [L("Versailles", "Versailles", "Versailles", "Versailles"), L("Lyon", "Lyons", "Lyons", "Lyon"), L("Marseille", "Marseilles", "Marseille", "Marsilia"), L("London", "London", "London", "Londra")], answer: L("Versailles", "Versailles", "Versailles", "Versailles") }
    },
    {
      id: "verfassung1791",
      title: L("Verfassung 1791", "Constitution 1791", "Alkotmány 1791", "Constituția 1791"),
      hint1: L("Frankreich wurde eine konstitutionelle Monarchie.", "France became a constitutional monarchy.", "Franciaország alkotmányos monarchiává vált.", "Franța a devenit o monarhie constituțională."),
      hint2: L("Der König war an Gesetze gebunden.", "The king was bound by laws.", "A királyt törvények kötötték.", "Regele era obligat prin legi."),
      svg: { type: "two-groups", left: { items: ["Gesetz"], bg: "#dbeafe", border: "#2563eb" }, right: { items: ["König"], bg: "#fef3c7", border: "#d97706" } },
      interactive: { type: "gap-fill", text: L("Die Verfassung beschränkt die Macht des __.", "The constitution limits the power of the __.", "Az alkotmány korlátozza a __ hatalmát.", "Constituția limitează puterea __."), gaps: [{ index: 0, options: [L("Königs", "King's", "Királyé", "a regelui"), L("Volkes", "people", "emberek", "oameni")], correct: 0 }] },
      quiz: { question: L("Was bedeutet konstitutionelle Monarchie?", "What does constitutional monarchy mean?", "Mit jelent az alkotmányos monarchia?", "Ce înseamnă monarhia constituțională?"), choices: [L("König an Verfassung gebunden", "King bound by constitution", "Alkotmányhoz kötött király", "Rege obligat prin constituție"), L("König hat alle Macht", "King has all power", "Királynak minden hatalma van", "Regele are toată puterea"), L("Es gibt keinen König", "There is no king", "Nincs király", "Nu există rege"), L("Nur die Kirche regiert", "Only the church rules", "Csak az egyház uralkodik", "Doar biserica guvernează")], answer: L("König an Verfassung gebunden", "King bound by constitution", "Alkotmányhoz kötött király", "Rege obligat prin constituție") }
    },
    {
      id: "fluchtkoenig",
      title: L("Fluchtversuch", "Attempt to escape", "Szökési kísérlet", "Încercarea de a scăpa"),
      hint1: L("Ludwig XVI. wollte ins Ausland fliehen.", "Louis XVI wanted to flee abroad.", "XVI. Lajos külföldre akart menekülni.", "Ludovic al XVI-lea a vrut să fugă în străinătate."),
      hint2: L("Er wurde in Varennes gefasst.", "He was caught in Varennes.", "Varennes-ben fogták el.", "A fost prins la Varennes."),
      svg: { type: "text-bubbles", items: [{ text: "Varennes", color: "#fff", bg: "#475569" }, { text: "Verrat", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Varennes", "Varennes", "Varennes", "Varennes"), right: L("Ort der Festnahme", "Place of arrest", "Letartóztatás helye", "Locul arestării") }, { left: L("Flucht", "Escape", "Menekülés", "Evadare"), right: L("Vertrauensverlust", "Loss of trust", "A bizalom elvesztése", "Pierderea încrederii") }] },
      quiz: { question: L("Wo wurde der fliehende König gefasst?", "Where was the fleeing king caught?", "Hol fogták el a menekülő királyt?", "Unde a fost prins regele care fugea?"), choices: [L("Varennes", "Varennes", "Varennes", "Varennes"), L("Paris", "Paris", "Párizs", "Paris"), L("Berlin", "Berlin", "Berlin", "Berlin"), L("Straßburg", "Strasbourg", "Strasbourg", "Strasbourg")], answer: L("Varennes", "Varennes", "Varennes", "Varennes") }
    }
  ]
};

// ─── ISLAND 2: DIE SCHRECKENSHERRSCHAFT & NAPOLEON ─────────────────────────
const I2: IslandSpec = {
  id: "i2",
  title: L("Terror & Napoleon", "Terror & Napoleon", "Terror és Napóleon", "Teroare și Napoleon"),
  topics: [
    {
      id: "guillotine",
      title: L("Die Guillotine", "The guillotine", "A guillotine", "Ghilotina"),
      hint1: L("Ein Gerät zur schnellen Hinrichtung.", "A device for quick execution.", "Készülék a gyors végrehajtáshoz.", "Un dispozitiv pentru execuție rapidă."),
      hint2: L("Es galt als 'humaner' Weg zu töten.", "It was considered a 'humane' way to kill.", "Az ölés „humánus” módjának számított.", "Era considerat un mod „uman” de a ucide."),
      svg: { type: "icon-grid", items: [{ emoji: "🗡️", label: "Fallbeil" }, { emoji: "⚖️", label: "Strafe" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Guillotine", "guillotine", "guillotine", "ghilotină"), right: L("Hinrichtung", "execution", "végrehajtás", "execuţie") }, { left: L("Dr. Guillotin", "Dr. Guillotine", "Dr. Guillotine", "Dr. Ghilotina"), right: L("Erfinder", "inventor", "feltaláló", "inventator") }] },
      quiz: { question: L("Wofür wurde die Guillotine genutzt?", "What was the guillotine used for?", "Mire használták a guillotine-t?", "La ce a fost folosită ghilotina?"), choices: [L("Hinrichtungen", "Executions", "Kivégzések", "Execuții"), L("Brot schneiden", "Cutting bread", "Kenyér vágás", "Tăierea pâinii"), L("Hausbau", "House construction", "Házépítés", "Construcția casei"), L("Sport", "sport", "sport", "sport")], answer: L("Hinrichtungen", "Executions", "Kivégzések", "Execuții") }
    },
    {
      id: "robespierre",
      title: L("Maximilien Robespierre", "Maximilian Robespierre", "Maximilian Robespierre", "Maximilian Robespierre"),
      hint1: L("Anführer der Jakobiner.", "Leader of the Jacobins.", "A jakobinusok vezére.", "Liderul iacobinilor."),
      hint2: L("Er rechtfertigte den Terror mit Tugend.", "He justified terror with virtue.", "A rettegést erénnyel indokolta.", "El a justificat teroarea cu virtute."),
      svg: { type: "text-bubbles", items: [{ text: "Terror", color: "#fff", bg: "#991b1b" }, { text: "Tugend", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "gap-fill", text: L("Robespierre war ein __.", "Robespierre was a __.", "Robespierre __ volt.", "Robespierre era un __."), gaps: [{ index: 0, options: ["Jakobiner", "Königstreuer"], correct: 0 }] },
      quiz: { question: L("Wer war der Kopf der Schreckensherrschaft?", "Who was the mastermind of the Reign of Terror?", "Ki volt a Terror uralmának kitalálója?", "Cine a fost creierul Domniei Terorii?"), choices: [L("Robespierre", "Robespierre", "Robespierre", "Robespierre"), L("Napoleon", "Napoleon", "Napóleon", "Napoleon"), L("Ludwig XVI.", "Louis XVI", "Lajos XVI", "Ludovic al XVI-lea"), L("Metternich", "Metternich", "Metternich", "Metternich")], answer: L("Robespierre", "Robespierre", "Robespierre", "Robespierre") }
    },
    {
      id: "jakobiner",
      title: L("Die Jakobiner", "The Jacobins", "A jakobinusok", "Iacobinii"),
      hint1: L("Radikale Anhänger der Revolution.", "Radical supporters of the revolution.", "A forradalom radikális támogatói.", "Susținători radicali ai revoluției."),
      hint2: L("Sie wollten die Republik mit Gewalt.", "They wanted the republic by force.", "Erőszakkal akarták a köztársaságot.", "Au vrut republica cu forța."),
      svg: { type: "word-display", word: "Republik", color: "#ef4444" },
      interactive: { type: "block-drag", blocks: [{ label: L("Gruppen", "groups", "csoportok", "grupuri"), items: [L("Jakobiner", "Jacobin", "jakobinus", "iacobin"), L("Girondisten", "Girondists", "Girondisták", "girondiști")] }] },
      quiz: { question: L("Was wollten die Jakobiner?", "What did the Jacobins want?", "Mit akartak a jakobinusok?", "Ce doreau iacobinii?"), choices: [L("Eine radikale Republik", "A radical republic", "Radikális köztársaság", "O republică radicală"), L("Die Rückkehr des Königs", "The Return of the King", "A király visszatér", "Întoarcerea Regelui"), L("Frieden mit allen", "Peace with everyone", "Béke mindenkivel", "Pace cu toată lumea"), L("Keine Gesetze", "No laws", "Nincsenek törvények", "Fara legi")], answer: L("Eine radikale Republik", "A radical republic", "Radikális köztársaság", "O republică radicală") }
    },
    {
      id: "endemonarchie",
      title: L("Ende der Monarchie", "End of the monarchy", "A monarchia vége", "Sfârșitul monarhiei"),
      hint1: L("Der König wurde abgesetzt und hingerichtet.", "The king was deposed and executed.", "A királyt leváltották és kivégezték.", "Regele a fost detronat și executat."),
      hint2: L("1792 wurde Frankreich zur Republik.", "In 1792 France became a republic.", "1792-ben Franciaország köztársasággá vált.", "În 1792, Franța a devenit republică."),
      svg: { type: "text-bubbles", items: [{ text: "1791", color: "#fff", bg: "#2563eb" }, { text: "Monarchie", color: "#fff", bg: "#6366f1" }, { text: "1792", color: "#fff", bg: "#dc2626" }, { text: "Republik", color: "#fff", bg: "#ef4444" }] },
      interactive: { type: "tap-count", count: 1792, instruction: L("In welchem Jahr wurde die Republik ausgerufen?", "In what year was the republic proclaimed?", "Melyik évben kiáltották ki a köztársaságot?", "În ce an a fost proclamată republica?") },
      quiz: { question: L("Was geschah 1792?", "What happened in 1792?", "Mi történt 1792-ben?", "Ce s-a întâmplat în 1792?"), choices: [L("Ausrufung der Republik", "Proclamation of the Republic", "A köztársaság kikiáltása", "Proclamarea Republicii"), L("Sieg bei Waterloo", "Victory at Waterloo", "Győzelem Waterloonál", "Victorie la Waterloo"), L("Entdeckung Amerikas", "Discovery of America", "Amerika felfedezése", "Descoperirea Americii"), L("Bau der Bastille", "Construction of the Bastille", "A Bastille építése", "Construcția Bastiliei")], answer: L("Ausrufung der Republik", "Proclamation of the Republic", "A köztársaság kikiáltása", "Proclamarea Republicii") }
    },
    {
      id: "napoleonaufstieg",
      title: L("Aufstieg Napoleons", "Rise of Napoleon", "Napóleon felemelkedése", "Ascensiunea lui Napoleon"),
      hint1: L("Ein erfolgreicher General aus Korsika.", "A successful general from Corsica.", "Sikeres tábornok Korzikáról.", "Un general de succes din Corsica."),
      hint2: L("Er beendete die Revolution 1799.", "He ended the revolution in 1799.", "1799-ben vetett véget a forradalomnak.", "A pus capăt revoluției în 1799."),
      svg: { type: "text-bubbles", items: [{ text: "General", color: "#fff", bg: "#3b82f6" }, { text: "1799", color: "#fff", bg: "#475569" }] },
      interactive: { type: "word-order", words: [L("Napoleon", "Napoleon", "Napóleon", "Napoleon"), L("wird", "becomes", "válik", "devine"), L("Erster", "First", "Első", "Primul"), L("Konsul", "consul", "konzul", "consul")], instruction: L("Sein erster Titel?", "His first title?", "Az első címe?", "Primul lui titlu?") },
      quiz: { question: L("Woher stammte Napoleon?", "Where did Napoleon come from?", "Honnan jött Napóleon?", "De unde a venit Napoleon?"), choices: [L("Korsika", "Corsica", "Korzika", "Corsica"), L("Paris", "Paris", "Párizs", "Paris"), L("London", "London", "London", "Londra"), L("Berlin", "Berlin", "Berlin", "Berlin")], answer: L("Korsika", "Corsica", "Korzika", "Corsica") }
    },
    {
      id: "codecivil",
      title: L("Code Civil", "Code Civil", "törvénykönyv Ptk", "Cod civil"),
      hint1: L("Ein modernes Gesetzbuch Napoleons.", "A modern Napoleonic law code.", "Modern napóleoni törvénykönyv.", "Un cod de drept napoleonian modern."),
      hint2: L("Es garantierte Freiheit und Eigentum.", "It guaranteed freedom and property.", "Ez garantálta a szabadságot és a tulajdont.", "A garantat libertatea și proprietatea."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Gesetze" }] },
      interactive: { type: "highlight-text", text: L("Gleichheit vor dem Gesetz für alle männlichen Bürger.", "Equality before the law for all male citizens.", "Törvény előtti egyenlőség minden férfi állampolgár számára.", "Egalitatea în fața legii pentru toți cetățenii de sex masculin."), instruction: L("Was war neu?", "What was new?", "Mi volt az új?", "Ce era nou?") },
      quiz: { question: L("Was war der Code Civil?", "What was the Civil Code?", "Mi volt a Ptk?", "Ce era Codul Civil?"), choices: [L("Ein Gesetzbuch", "A law book", "Egy jogi könyv", "O carte de lege"), L("Ein Kochbuch", "A cookbook", "Egy szakácskönyv", "O carte de bucate"), L("Ein Kriegsplan", "A war plan", "Egy haditerv", "Un plan de război"), L("Eine Schiffsklasse", "A class of ship", "Egy hajóosztály", "O clasă de navă")], answer: L("Ein Gesetzbuch", "A law book", "Egy jogi könyv", "O carte de lege") }
    },
    {
      id: "kaiserkroenung",
      title: L("Kaiserkrönung", "Imperial coronation", "Birodalmi koronázás", "Încoronarea imperială"),
      hint1: L("1804 krönte sich Napoleon selbst.", "In 1804 Napoleon crowned himself.", "1804-ben Napóleon megkoronáztatta magát.", "În 1804 Napoleon s-a încoronat."),
      hint2: L("Er wollte seine Macht festigen.", "He wanted to consolidate his power.", "Meg akarta szilárdítani hatalmát.", "Voia să-și consolideze puterea."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "Kaiser" }, { emoji: "🏛️", label: "Notre Dame" }] },
      interactive: { type: "sentence-build", words: [L("Er", "He", "Ő", "El"), L("setzte", "sat", "ült", "sat"), L("sich", "itself", "maga", "în sine"), L("die", "the", "a", "cel"), L("Krone", "crown", "korona", "coroană"), L("selbst", "himself", "magát", "se"), L("auf", "on", "-on", "pe")], instruction: L("Was tat er?", "What was he doing?", "Mit csinált?", "Ce făcea?") },
      quiz: { question: L("Wann wurde Napoleon Kaiser?", "When did Napoleon become emperor?", "Mikor lett Napóleon császár?", "Când a devenit Napoleon împărat?"), choices: [L("1804", "1804", "1804", "1804"), L("1789", "1789", "1789", "1789"), L("1815", "1815", "1815", "1815"), L("1871", "1871", "1871", "1871")], answer: L("1804", "1804", "1804", "1804") }
    },
    {
      id: "russlandfeldzug",
      title: L("Russlandfeldzug", "Russian campaign", "Orosz kampány", "campanie rusă"),
      hint1: L("1812 scheiterte die Große Armee.", "In 1812 the Grand Army failed.", "1812-ben a Nagy Hadsereg megbukott.", "În 1812 Marea Armată a eșuat."),
      hint2: L("Kälte und Hunger besiegten ihn.", "Cold and hunger defeated him.", "A hideg és az éhség legyőzte.", "Frigul și foamea l-au învins."),
      svg: { type: "text-bubbles", items: [{ text: "Russland", color: "#fff", bg: "#1e40af" }, { text: "Kälte", color: "#fff", bg: "#6366f1" }, { text: "Napoleon", color: "#fff", bg: "#1e40af" }, { text: "Rückzug", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "drag-to-bucket", buckets: [{ id: "fail", label: L("Gründe", "Reasons", "Okok", "Motive") }], items: [{ text: L("Winter", "winter", "téli", "iarnă"), bucketId: "fail" }, { text: L("Hunger", "hunger", "éhség", "foame"), bucketId: "fail" }] },
      quiz: { question: L("Was stoppte Napoleon in Russland?", "What stopped Napoleon in Russia?", "Mi akadályozta meg Napóleont Oroszországban?", "Ce l-a oprit pe Napoleon în Rusia?"), choices: [L("Kälte und Hunger", "Cold and hunger", "Hideg és éhség", "Frig și foame"), L("Die russische Marine", "The Russian Navy", "Az orosz haditengerészet", "Marina Rusă"), L("Ein Vulkanausbruch", "A volcanic eruption", "Vulkánkitörés", "O erupție vulcanică"), L("Geldmangel", "Lack of money", "Pénz hiánya", "Lipsa banilor")], answer: L("Kälte und Hunger", "Cold and hunger", "Hideg és éhség", "Frig și foame") }
    },
    {
      id: "leipzig",
      title: L("Völkerschlacht bei Leipzig", "Battle of the Nations near Leipzig", "Nemzetek csatája Lipcse közelében", "Bătălia Națiunilor de lângă Leipzig"),
      hint1: L("1813 kämpften viele Völker gegen ihn.", "In 1813 many peoples fought against him.", "1813-ban sok nép harcolt ellene.", "În 1813 multe popoare au luptat împotriva lui."),
      hint2: L("Napoleons Macht in Deutschland brach zusammen.", "Napoleon's power in Germany collapsed.", "Napóleon hatalma Németországban összeomlott.", "Puterea lui Napoleon în Germania s-a prăbușit."),
      svg: { type: "text-bubbles", items: [{ text: "1813", color: "#fff", bg: "#1e3a8a" }, { text: "Leipzig", color: "#fff", bg: "#ea580c" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Leipzig", "Leipzig", "Lipcse", "Leipzig"), right: L("1813", "1813", "1813", "1813") }, { left: L("Völkerschlacht", "Battle of the Nations", "Nemzetek csatája", "Bătălia Națiunilor"), right: L("Niederlage", "defeat", "vereség", "învinge") }] },
      quiz: { question: L("Wann war die Völkerschlacht bei Leipzig?", "When was the Battle of Leipzig?", "Mikor volt a lipcsei csata?", "Când a fost bătălia de la Leipzig?"), choices: [L("1813", "1813", "1813", "1813"), L("1804", "1804", "1804", "1804"), L("1815", "1815", "1815", "1815"), L("1789", "1789", "1789", "1789")], answer: L("1813", "1813", "1813", "1813") }
    },
    {
      id: "waterloo",
      title: L("Schlacht bei Waterloo", "Battle of Waterloo", "Waterloo-i csata", "Bătălia de la Waterloo"),
      hint1: L("Seine endgültige Niederlage 1815.", "His final defeat in 1815.", "Végső veresége 1815-ben.", "Înfrângerea sa finală în 1815."),
      hint2: L("Besiegt von Wellington und Blücher.", "Defeated by Wellington and Blücher.", "Wellington és Blücher legyőzte.", "Învins de Wellington și Blücher."),
      svg: { type: "word-display", word: "Waterloo", color: "#000" },
      interactive: { type: "gap-fill", text: L("Waterloo liegt im heutigen __.", "Waterloo is located in today's __.", "Waterloo a mai __.", "Waterloo este situat în __ de astăzi."), gaps: [{ index: 0, options: ["Belgien", "Frankreich"], correct: 0 }] },
      quiz: { question: L("In welchem Jahr wurde Napoleon bei Waterloo besiegt?", "In what year was Napoleon defeated at Waterloo?", "Melyik évben szenvedett vereséget Napóleon Waterloonál?", "În ce an a fost învins Napoleon la Waterloo?"), choices: [L("1815", "1815", "1815", "1815"), L("1812", "1812", "1812", "1812"), L("1813", "1813", "1813", "1813"), L("1821", "1821", "1821", "1821")], answer: L("1815", "1815", "1815", "1815") }
    },
    {
      id: "sthelena",
      title: L("Verbannung St. Helena", "Banishment of St. Helena", "Szent Ilona száműzése", "Exilarea Sfintei Elena"),
      hint1: L("Seine letzte Station im Exil.", "His last stop in exile.", "Utolsó állomása a száműzetésben.", "Ultima sa oprire în exil."),
      hint2: L("Eine einsame Insel im Atlantik.", "A lonely island in the Atlantic.", "Egy magányos sziget az Atlanti-óceánon.", "O insulă singuratică din Atlantic."),
      svg: { type: "letter-circles", letters: ["I", "N", "S", "E", "L"], color: "#1e40af" },
      interactive: { type: "lang-mcq", question: L("Wo starb Napoleon?", "Where did Napoleon die?", "Hol halt meg Napóleon?", "Unde a murit Napoleon?"), choices: [L("St. Helena", "Saint Helena", "Szent Ilona", "Sfânta Elena"), L("Elba", "Elba", "Elba", "Elba"), L("Paris", "Paris", "Párizs", "Paris")], answer: L("St. Helena", "Saint Helena", "Szent Ilona", "Sfânta Elena") },
      quiz: { question: L("Wo starb Napoleon?", "Where did Napoleon die?", "Hol halt meg Napóleon?", "Unde a murit Napoleon?"), choices: [L("St. Helena", "Saint Helena", "Szent Ilona", "Sfânta Elena"), L("Elba", "Elba", "Elba", "Elba"), L("Paris", "Paris", "Párizs", "Paris"), L("London", "London", "London", "Londra")], answer: L("St. Helena", "Saint Helena", "Szent Ilona", "Sfânta Elena") }
    },
    {
      id: "rheinbund",
      title: L("Rheinbund", "Rhine Confederation", "Rajnai Konföderáció", "Confederația Rinului"),
      hint1: L("Deutsche Staaten unter Napoleons Schutz.", "German states under Napoleon's protection.", "Napóleon védelme alatt álló német államok.", "state germane aflate sub protecția lui Napoleon."),
      hint2: L("Ende des Heiligen Römischen Reiches.", "End of the Holy Roman Empire.", "A Szent Római Birodalom vége.", "Sfârșitul Sfântului Imperiu Roman."),
      svg: { type: "two-groups", left: { items: ["Bayern", "Sachsen"], bg: "#dcfce7", border: "#16a34a" }, right: { items: ["Österreich", "Preußen"], bg: "#fee2e2", border: "#ef4444" } },
      interactive: { type: "match-pairs", pairs: [{ left: L("Rheinbund", "Rhine Confederation", "Rajnai Konföderáció", "Confederația Rinului"), right: L("Napoleon", "Napoleon", "Napóleon", "Napoleon") }, { left: L("1806", "1806", "1806", "1806"), right: L("Ende HRRDN", "End HRRDN", "HRRDN vége", "Încheiați HRRDN") }] },
      quiz: { question: L("Wann endete das Heilige Römische Reich?", "When did the Holy Roman Empire end?", "Mikor ért véget a Szent Római Birodalom?", "Când s-a încheiat Sfântul Imperiu Roman?"), choices: [L("1806", "1806", "1806", "1806"), L("1804", "1804", "1804", "1804"), L("1815", "1815", "1815", "1815"), L("1871", "1871", "1871", "1871")], answer: L("1806", "1806", "1806", "1806") }
    },
    {
      id: "kontinentalsperre",
      title: L("Kontinentalsperre", "Continental blockade", "Kontinentális blokád", "Blocada continentală"),
      hint1: L("Handelsverbot gegen England.", "Trade ban against England.", "Kereskedelmi tilalom Anglia ellen.", "Interdicția comercială împotriva Angliei."),
      hint2: L("Er wollte England wirtschaftlich besiegen.", "He wanted to defeat England economically.", "Angliát gazdaságilag akarta legyőzni.", "El a vrut să învingă Anglia din punct de vedere economic."),
      svg: { type: "text-bubbles", items: [{ text: "Handel", color: "#fff", bg: "#0ea5e9" }, { text: "Stopp", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "gap-fill", text: L("Die Sperre galt gegen __.", "The ban was against __.", "A tiltás __ ellen szólt.", "Interdicția a fost împotriva __."), gaps: [{ index: 0, options: ["England", "Russland"], correct: 0 }] },
      quiz: { question: L("Gegen wen richtete sich die Kontinentalsperre?", "Who was the continental blockade aimed at?", "Kire irányult a kontinentális blokád?", "Cine a vizat blocada continentală?"), choices: [L("England", "England", "Anglia", "Anglia"), L("Spanien", "Spain", "Spanyolország", "Spania"), L("Preußen", "Prussia", "Poroszország", "Prusia"), L("Amerika", "America", "Amerika", "America")], answer: L("England", "England", "Anglia", "Anglia") }
    },
    {
      id: "saekularisation",
      title: L("Säkularisation", "secularization", "szekularizáció", "secularizare"),
      hint1: L("Enteignung kirchlicher Besitztümer.", "Expropriation of church property.", "Egyházi vagyon kisajátítása.", "Exproprierea proprietății bisericești."),
      hint2: L("Fürsten erhielten Kirchenland.", "Princes received church land.", "A hercegek egyházi földet kaptak.", "Prinții au primit pământ bisericesc."),
      svg: { type: "text-bubbles", items: [{ text: "Kirche", color: "#fff", bg: "#7c3aed" }, { text: "Landverlust", color: "#fff", bg: "#6366f1" }, { text: "Fürsten", color: "#fff", bg: "#7c3aed" }, { text: "Landgewinn", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "word-order", words: [L("Kirche", "Church", "Templom", "Biserică"), L("verliert", "loses", "veszít", "pierde"), L("ihre", "her", "neki", "ei"), L("Macht", "Power", "Hatalom", "Putere")], instruction: L("Was geschah?", "What happened?", "Mi történt?", "Ce s-a întâmplat?") },
      quiz: { question: L("Was bedeutet Säkularisation?", "What does secularization mean?", "Mit jelent a szekularizáció?", "Ce înseamnă secularizare?"), choices: [L("Enteignung der Kirche", "Expropriation of the church", "A templom kisajátítása", "Exproprierea bisericii"), L("Wahl eines Papstes", "Election of a Pope", "Pápaválasztás", "Alegerea unui Papă"), L("Bau von Kirchen", "Building churches", "Templomok építése", "Construirea de biserici"), L("Neugründung von Klöstern", "Founding of new monasteries", "Új kolostorok alapítása", "Întemeierea de noi mănăstiri")], answer: L("Enteignung der Kirche", "Expropriation of the church", "A templom kisajátítása", "Exproprierea bisericii") }
    },
    {
      id: "legende",
      title: L("Napoleons Legende", "Napoleon's legend", "Napóleon legendája", "Legenda lui Napoleon"),
      hint1: L("Widersprüchliche Wirkung bis heute.", "Contradictory effect to this day.", "A mai napig ellentmondásos hatás.", "Efect contradictoriu până în ziua de azi."),
      hint2: L("Befreier oder Tyrann?", "Liberator or tyrant?", "Felszabadító vagy zsarnok?", "Eliberator sau tiran?"),
      svg: { type: "text-bubbles", items: [{ text: "Befreier", color: "#fff", bg: "#16a34a" }, { text: "Tyrann", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Meinungen", "Opinions", "Vélemények", "Opinii"), items: [L("Modernisierer", "Modernizer", "Modernizáló", "Modernizator"), L("Eroberer", "conqueror", "hódító", "cuceritor")] }] },
      quiz: { question: L("Wie wird Napoleon oft gesehen?", "How is Napoleon often viewed?", "Hogyan nézik gyakran Napóleont?", "Cum este privit adesea Napoleon?"), choices: [L("Widersprüchlich", "Contradictory", "Ellentmondó", "Contradictoriu"), L("Nur als Heiliger", "Only as a saint", "Csak mint szent", "Numai ca sfânt"), L("Nur als Versager", "Only as a failure", "Csak kudarcként", "Doar ca eșec"), L("Gar nicht mehr", "Not at all anymore", "Már egyáltalán nem", "Nu mai deloc")], answer: L("Widersprüchlich", "Contradictory", "Ellentmondó", "Contradictoriu") }
    }
  ]
};

// ─── ISLAND 3: DER WIENER KONGRESS & RESTAURATION ──────────────────────────
const I3: IslandSpec = {
  id: "i3",
  title: L("Wiener Kongress", "Congress of Vienna", "Bécsi Kongresszus", "Congresul de la Viena"),
  topics: [
    {
      id: "restauration",
      title: L("Restauration", "restoration", "felújítás", "restaurare"),
      hint1: L("Wiederherstellung der alten Ordnung.", "Restoration of the old order.", "A régi rend visszaállítása.", "Restabilirea ordinii vechi."),
      hint2: L("Zeit vor der Revolution als Ideal.", "Time before the revolution as an ideal.", "A forradalom előtti idő mint ideál.", "Timpul înainte de revoluție ca ideal."),
      svg: { type: "text-bubbles", items: [{ text: "Neu", color: "#fff", bg: "#16a34a" }, { text: "Revolution", color: "#fff", bg: "#15803d" }, { text: "Alt", color: "#fff", bg: "#dc2626" }, { text: "Monarchie", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Restauration", "restoration", "felújítás", "restaurare"), right: L("Wiederherstellung", "Restoration", "Felújítás", "Restaurare") }, { left: L("Alt", "Old", "Régi", "Vechi"), right: L("Vor 1789", "Before 1789", "1789 előtt", "Înainte de 1789") }] },
      quiz: { question: L("Was bedeutet Restauration?", "What does restoration mean?", "Mit jelent a helyreállítás?", "Ce înseamnă restaurare?"), choices: [L("Wiederherstellung", "Restoration", "Felújítás", "Restaurare"), L("Zerstörung", "destruction", "megsemmisítés", "distrugere"), L("Neuanfang", "New beginning", "Új kezdet", "Nou început"), L("Urlaub", "Vacation", "Vakáció", "Vacanţă")], answer: L("Wiederherstellung", "Restoration", "Felújítás", "Restaurare") }
    },
    {
      id: "legitimitaet",
      title: L("Legitimität", "legitimacy", "legitimációja", "legitimitate"),
      hint1: L("Rechtmäßigkeit der Herrschaft.", "legitimacy of rule.", "a szabály legitimitása.", "legitimitatea guvernării."),
      hint2: L("Gottesgnadentum als Begründung.", "Divine grace as justification.", "Az isteni kegyelem, mint megigazulás.", "Harul divin ca justificare."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "König" }, { emoji: "🙏", label: "Gott" }] },
      interactive: { type: "gap-fill", text: L("Herrschaft durch __ Gnade.", "Rule by __ grace.", "__ kegyelem által uralkodni.", "Domnește prin __ har."), gaps: [{ index: 0, options: ["Gottes", "Volkes"], correct: 0 }] },
      quiz: { question: L("Wie begründeten Fürsten ihre Macht?", "How did princes establish their power?", "Hogyan alapították meg a fejedelmek hatalmukat?", "Cum și-au stabilit prinții puterea?"), choices: [L("Gottesgnadentum", "divine grace", "isteni kegyelem", "har divin"), L("Wahlen", "Choose", "Válasszon", "Alege"), L("Stärke", "Strength", "Erő", "Rezistenţă"), L("Zufall", "Coincidence", "Egybeesés", "Coincidenţă")], answer: L("Gottesgnadentum", "divine grace", "isteni kegyelem", "har divin") }
    },
    {
      id: "solidaritaet",
      title: L("Solidarität", "solidarity", "szolidaritás", "solidaritate"),
      hint1: L("Gegenseitige Hilfe der Monarchen.", "Mutual Aid of Monarchs.", "Az uralkodók kölcsönös segítségnyújtása.", "Ajutorul reciproc al monarhilor."),
      hint2: L("Schutz gegen neue Revolutionen.", "Protection against new revolutions.", "Védelem az új forradalmak ellen.", "Protecție împotriva noilor revoluții."),
      svg: { type: "text-bubbles", items: [{ text: "Allianz", color: "#fff", bg: "#16a34a" }, { text: "Hilfe", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "word-order", words: [L("Fürsten", "Princes", "Hercegek", "Prinți"), L("helfen", "help", "Segítség", "Ajutor"), L("sich", "itself", "maga", "în sine"), L("gegenseitig", "each other", "egymást", "reciproc")], instruction: L("Was war Solidarität?", "What was solidarity?", "Mi volt a szolidaritás?", "Ce a fost solidaritatea?") },
      quiz: { question: L("Gegen wen richtete sich die Solidarität?", "Who was the solidarity directed against?", "Ki ellen irányult a szolidaritás?", "Cui a fost îndreptată solidaritatea?"), choices: [L("Revolutionäre", "Revolutionaries", "Forradalmárok", "Revoluționarii"), L("Andere Könige", "Other kings", "Más királyok", "Alți regi"), L("Die Kirche", "The church", "A templom", "Biserica"), L("Händler", "Dealer", "Kereskedő", "Dealer")], answer: L("Revolutionäre", "Revolutionaries", "Forradalmárok", "Revoluționarii") }
    },
    {
      id: "metternich",
      title: L("Fürst von Metternich", "Prince of Metternich", "Metternich hercege", "Prințul de Metternich"),
      hint1: L("Der 'Kutscher Europas'.", "The 'coachman of Europe'.", "Európa kocsisa.", "„Cocherul Europei”."),
      hint2: L("Österreichischer Staatsmann.", "Austrian statesman.", "osztrák államférfi.", "om de stat austriac."),
      svg: { type: "word-display", word: "Metternich", color: "#475569" },
      interactive: { type: "highlight-text", text: L("Metternich bekämpfte alle liberalen Ideen mit Zensur.", "Metternich fought all liberal ideas with censorship.", "Metternich minden liberális eszmét cenzúrával harcolt.", "Metternich a luptat cu cenzura tuturor ideilor liberale."), instruction: L("Seine Methode?", "His method?", "A módszere?", "Metoda lui?") },
      quiz: { question: L("Welches Land vertrat Metternich?", "Which country did Metternich represent?", "Melyik országot képviselte Metternich?", "Ce țară a reprezentat Metternich?"), choices: [L("Österreich", "Austria", "Ausztria", "Austria"), L("Preußen", "Prussia", "Poroszország", "Prusia"), L("Russland", "Russia", "Oroszország", "Rusia"), L("England", "England", "Anglia", "Anglia")], answer: L("Österreich", "Austria", "Ausztria", "Austria") }
    },
    {
      id: "deutscherbund",
      title: L("Deutscher Bund", "German Confederation", "Német Konföderáció", "Confederația Germană"),
      hint1: L("Lockerer Staatenbund von 39 Staaten.", "Loose confederation of 39 states.", "39 állam laza konföderációja.", "Confederație liberă a 39 de state."),
      hint2: L("Kein deutscher Nationalstaat.", "Not a German nation state.", "Nem német nemzetállam.", "Nu este un stat național german."),
      svg: { type: "icon-grid", items: [{ emoji: "🤝", label: "Staatenbund" }] },
      interactive: { type: "tap-count", count: 39, instruction: L("Wie viele Staaten gehörten zum Bund?", "How many states were part of the federal government?", "Hány állam volt a szövetségi kormány része?", "Câte state făceau parte din guvernul federal?") },
      quiz: { question: L("Was war der Deutsche Bund?", "What was the German Confederation?", "Mi volt a Német Szövetség?", "Ce a fost Confederația Germană?"), choices: [L("Lockerer Staatenbund", "Loose alliance of states", "Az államok laza szövetsége", "Alianță liberă a statelor"), L("Ein Einheitsstaat", "A unitary state", "Egységes állam", "Un stat unitar"), L("Ein Sportverein", "A sports club", "Egy sportklub", "Un club sportiv"), L("Eine Armee", "An army", "Egy hadsereg", "O armată")], answer: L("Lockerer Staatenbund", "Loose alliance of states", "Az államok laza szövetsége", "Alianță liberă a statelor") }
    },
    {
      id: "zensur",
      title: L("Zensur", "censorship", "cenzúra", "cenzură"),
      hint1: L("Kontrolle von Büchern und Zeitungen.", "Checking books and newspapers.", "Könyvek és újságok ellenőrzése.", "Verificarea cărților și a ziarelor."),
      hint2: L("Verbot von freien Meinungen.", "Prohibition of free opinions.", "A szabad vélemények tilalma.", "Interzicerea opiniilor libere."),
      svg: { type: "text-bubbles", items: [{ text: "Stopp", color: "#fff", bg: "#dc2626" }, { text: "Verbot", color: "#fff", bg: "#991b1b" }] },
      interactive: { type: "gap-fill", text: L("Die Presse wurde __.", "The press became __.", "A sajtó __ lett.", "Presa a devenit __."), gaps: [{ index: 0, options: ["zensiert", "gefeiert"], correct: 0 }] },
      quiz: { question: L("Wozu diente die Zensur?", "What was the purpose of censorship?", "Mi volt a cenzúra célja?", "Care a fost scopul cenzurii?"), choices: [L("Kontrolle der Meinung", "Control of opinion", "A vélemény ellenőrzése", "Controlul opiniei"), L("Leseförderung", "Reading promotion", "Olvasás promóció", "Promovarea lecturii"), L("Papier sparen", "Save paper", "Takarítson meg papírt", "Economisiți hârtie"), L("Werbung", "Advertising", "Hirdető", "Publicitate")], answer: L("Kontrolle der Meinung", "Control of opinion", "A vélemény ellenőrzése", "Controlul opiniei") }
    },
    {
      id: "karlsbad",
      title: L("Karlsbader Beschlüsse", "Carlsbad Resolutions", "Carlsbad határozatok", "Rezoluții Carlsbad"),
      hint1: L("Harte Gesetze gegen Liberale.", "Harsh laws against liberals.", "Kemény törvények a liberálisokkal szemben.", "Legi dure împotriva liberalilor."),
      hint2: L("Verbot von Burschenschaften.", "Ban on fraternities.", "Testvériségek betiltása.", "Interdicția fraternităților."),
      svg: { type: "text-bubbles", items: [{ text: "1819", color: "#fff", bg: "#475569" }, { text: "Beschlüsse", color: "#fff", bg: "#64748b" }, { text: "Zensur", color: "#fff", bg: "#475569" }, { text: "Überwachung", color: "#fff", bg: "#64748b" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Karlsbad", "Carlsbad", "Carlsbad", "Carlsbad"), right: L("1819", "1819", "1819", "1819") }, { left: L("Verbot", "Ban", "Tilalom", "Interzice"), right: L("Burschenschaften", "Fraternities", "Testvériségek", "Fraternități") }] },
      quiz: { question: L("Was wurde in Karlsbad beschlossen?", "What was decided in Carlsbad?", "Mit döntöttek Carlsbadban?", "Ce s-a hotărât la Carlsbad?"), choices: [L("Strenge Zensur", "Strict censorship", "Szigorú cenzúra", "Cenzură strictă"), L("Mehr Freiheit", "More freedom", "Több szabadság", "Mai multă libertate"), L("Ein neuer König", "A new king", "Egy új király", "Un rege nou"), L("Ein Volksfest", "A folk festival", "Népünnepély", "Un festival popular")], answer: L("Strenge Zensur", "Strict censorship", "Szigorú cenzúra", "Cenzură strictă") }
    },
    {
      id: "biedermeier",
      title: L("Biedermeier", "Biedermeier", "Biedermeier", "Biedermeier"),
      hint1: L("Rückzug ins Private.", "Retreat into private life.", "Visszahúzódni a magánéletbe.", "Retrageți-vă în viața privată."),
      hint2: L("Häuslichkeit und Ruhe.", "Domesticity and peace.", "Hazaiság és béke.", "Domesticitate și pace."),
      svg: { type: "icon-grid", items: [{ emoji: "🏠", label: "Heim" }, { emoji: "☕", label: "Kaffee" }] },
      interactive: { type: "sentence-build", words: [L("Rückzug", "retreat", "visszavonulás", "retragere"), L("in", "in", "be", "în"), L("die", "the", "a", "cel"), L("eigene", "own", "saját", "proprii"), L("Wohnung", "Apartment", "Lakás", "Apartament")], instruction: L("Biedermeier-Motto?", "Biedermeier motto?", "Biedermeier mottó?", "Motto-ul lui Biedermeier?") },
      quiz: { question: L("Was ist typisch für die Biedermeier-Zeit?", "What is typical of the Biedermeier period?", "Mi jellemző a biedermeier korszakra?", "Ce este tipic pentru perioada Biedermeier?"), choices: [L("Rückzug ins Private", "Retreat into private life", "Visszahúzódni a magánéletbe", "Retrageți-vă în viața privată"), L("Politische Revolten", "Political revolts", "Politikai lázadások", "Revolte politice"), L("Weltreisen", "World travel", "Világutazás", "Călătorie în lume"), L("Fabrikbau", "Factory construction", "Gyári építés", "Construcția fabricii")], answer: L("Rückzug ins Private", "Retreat into private life", "Visszahúzódni a magánéletbe", "Retrageți-vă în viața privată") }
    },
    {
      id: "hambach",
      title: L("Hambacher Fest", "Hambach Festival", "Hambach Fesztivál", "Festivalul Hambach"),
      hint1: L("Große Demonstration für Freiheit 1832.", "Great demonstration for freedom in 1832.", "Nagy tüntetés a szabadságért 1832-ben.", "Mare demonstrație pentru libertate în 1832."),
      hint2: L("30.000 Menschen auf dem Hambacher Schloss.", "30,000 people at Hambach Castle.", "30 000 ember a Hambach kastélyban.", "30.000 de oameni la Castelul Hambach."),
      svg: { type: "text-bubbles", items: [{ text: "1832", color: "#fff", bg: "#f59e0b" }, { text: "Freiheit", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "word-order", words: [L("Hinauf", "Up", "Fel", "Sus"), L("zum", "for the", "a", "pentru"), L("Schloss", "Lock", "Zár", "Blocare")], instruction: L("Der Ruf von Hambach?", "Hambach's reputation?", "Hambach hírnevét?", "Reputația lui Hambach?") },
      quiz: { question: L("Was forderten die Menschen in Hambach?", "What did the people in Hambach demand?", "Mit követeltek a hambachiak?", "Ce au cerut oamenii din Hambach?"), choices: [L("Einheit und Freiheit", "Unity and freedom", "Egység és szabadság", "Unitate și libertate"), L("Mehr Steuern", "More taxes", "Több adó", "Mai multe taxe"), L("Einen neuen Papst", "A new pope", "Egy új pápa", "Un nou papă"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Einheit und Freiheit", "Unity and freedom", "Egység és szabadság", "Unitate și libertate") }
    },
    {
      id: "wartburg",
      title: L("Wartburgfest", "Wartburg Festival", "Wartburg Fesztivál", "Festivalul Wartburg"),
      hint1: L("Studenten forderten deutsche Einheit 1817.", "Students demanded German unity in 1817.", "A diákok 1817-ben követelték a német egységet.", "Studenții au cerut unitatea germană în 1817."),
      hint2: L("Verbrennung von Symbolen der Unfreiheit.", "Burning of symbols of bondage.", "A rabság szimbólumainak égetése.", "Arderea simbolurilor sclaviei."),
      svg: { type: "word-display", word: "Einheit", color: "#000" },
      interactive: { type: "tap-count", count: 1817, instruction: L("In welchem Jahr war das Wartburgfest?", "What year was the Wartburg Festival?", "Melyik évben volt a Wartburg Fesztivál?", "În ce an a fost Festivalul Wartburg?") },
      quiz: { question: L("Wer organisierte das Wartburgfest?", "Who organized the Wartburg Festival?", "Ki szervezte a Wartburg Fesztivált?", "Cine a organizat Festivalul Wartburg?"), choices: [L("Studenten", "students", "hallgatók", "elevilor"), L("Bauern", "farmers", "gazdálkodók", "fermierii"), L("Könige", "Kings", "Királyok", "regi"), L("Händler", "Dealer", "Kereskedő", "Dealer")], answer: L("Studenten", "students", "hallgatók", "elevilor") }
    },
    {
      id: "liberalismus",
      title: L("Liberalismus", "liberalism", "liberalizmus", "liberalism"),
      hint1: L("Forderung nach Freiheit des Einzelnen.", "Demand for individual freedom.", "Az egyéni szabadság igénye.", "Cererea de libertate individuală."),
      hint2: L("Rechte gegenüber dem Staat.", "Rights against the state.", "Jogok az állammal szemben.", "Drepturi împotriva statului."),
      svg: { type: "two-groups", left: { items: ["Freiheit"], bg: "#dcfce7", border: "#16a34a" }, right: { items: ["Zwang"], bg: "#fee2e2", border: "#dc2626" } },
      interactive: { type: "lang-mcq", question: L("Was ist das Hauptziel des Liberalismus?", "What is the main goal of liberalism?", "Mi a liberalizmus fő célja?", "Care este scopul principal al liberalismului?"), choices: [L("Freiheit", "Freedom", "Szabadság", "Libertate"), L("Absolute Macht", "Absolute power", "Abszolút hatalom", "Putere absolută"), L("Gleiche Armut", "Same poverty", "Ugyanaz a szegénység", "Aceeași sărăcie")], answer: L("Freiheit", "Freedom", "Szabadság", "Libertate") },
      quiz: { question: L("Was ist das Hauptziel des Liberalismus?", "What is the main goal of liberalism?", "Mi a liberalizmus fő célja?", "Care este scopul principal al liberalismului?"), choices: [L("Freiheit", "Freedom", "Szabadság", "Libertate"), L("Absolute Macht", "Absolute power", "Abszolút hatalom", "Putere absolută"), L("Gleiche Armut", "Same poverty", "Ugyanaz a szegénység", "Aceeași sărăcie"), L("Zensur", "censorship", "cenzúra", "cenzură")], answer: L("Freiheit", "Freedom", "Szabadság", "Libertate") }
    },
    {
      id: "nationalismus",
      title: L("Nationalismus (19. Jh.)", "Nationalism (19th century)", "Nacionalizmus (XIX. század)", "Naţionalism (secolul al XIX-lea)"),
      hint1: L("Wunsch nach einem eigenen Nationalstaat.", "Desire for our own nation state.", "A saját nemzetállamunk iránti vágy.", "Dorința pentru propriul nostru stat național."),
      hint2: L("Ein Volk, eine Nation.", "One people, one nation.", "Egy nép, egy nemzet.", "Un popor, o singură națiune."),
      svg: { type: "icon-grid", items: [{ emoji: "🇩🇪", label: "Einheit" }, { emoji: "⚔️", label: "Kampf" }] },
      interactive: { type: "gap-fill", text: L("Ein Volk will ein __.", "A people wants a __.", "Egy nép egy __-t akar.", "Un popor vrea un __."), gaps: [{ index: 0, options: ["Land", "Haus"], correct: 0 }] },
      quiz: { question: L("Was wollten Nationalisten im 19. Jahrhundert?", "What did nationalists want in the 19th century?", "Mit akartak a nacionalisták a 19. században?", "Ce doreau naționaliștii în secolul al XIX-lea?"), choices: [L("Einen Nationalstaat", "A nation state", "Egy nemzetállam", "Un stat-națiune"), L("Viele kleine Fürstentümer", "Many small principalities", "Sok kis fejedelemség", "Multe principate mici"), L("Ein Weltreich", "A world empire", "Világbirodalom", "Un imperiu mondial"), L("Gar keinen Staat", "No state at all", "Egyáltalán nincs állam", "Nici un stat")], answer: L("Einen Nationalstaat", "A nation state", "Egy nemzetállam", "Un stat-națiune") }
    },
    {
      id: "heiligeallianz",
      title: L("Heilige Allianz", "Holy Alliance", "Szent Szövetség", "Sfânta Alianță"),
      hint1: L("Bündnis von Russland, Preußen, Österreich.", "Alliance of Russia, Prussia, Austria.", "Oroszország, Poroszország, Ausztria szövetsége.", "Alianța Rusiei, Prusiei, Austriei."),
      hint2: L("Christliche Grundwerte als Basis.", "Basic Christian values ​​as a basis.", "Alapvető keresztény értékek, mint alap.", "Valorile creștine de bază ca bază."),
      svg: { type: "text-bubbles", items: [{ text: "Drei", color: "#fff", bg: "#475569" }, { text: "Mächte", color: "#fff", bg: "#1e3a8a" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Russland", "Russia", "Oroszország", "Rusia"), right: L("Zar", "Tsar", "Cár", "Ţar") }, { left: L("Preußen", "Prussia", "Poroszország", "Prusia"), right: L("König", "king", "király", "rege") }] },
      quiz: { question: L("Wer gehörte zur Heiligen Allianz?", "Who belonged to the Holy Alliance?", "Kik tartoztak a Szent Szövetséghez?", "Cine a aparținut Sfintei Alianțe?"), choices: [L("Österreich, Preußen, Russland", "Austria, Prussia, Russia", "Ausztria, Poroszország, Oroszország", "Austria, Prusia, Rusia"), L("Frankreich, England, USA", "France, England, USA", "Franciaország, Anglia, USA", "Franța, Anglia, SUA"), L("China, Indien, Japan", "China, India, Japan", "Kína, India, Japán", "China, India, Japonia"), L("Niemand", "No one", "Senki", "Nici unul")], answer: L("Österreich, Preußen, Russland", "Austria, Prussia, Russia", "Ausztria, Poroszország, Oroszország", "Austria, Prusia, Rusia") }
    },
    {
      id: "pentarchie",
      title: L("Pentarchie", "Pentarchy", "Pentarchia", "Pentarhia"),
      hint1: L("Die fünf Großmächte Europas.", "The five major powers of Europe.", "Európa öt nagyhatalma.", "Cele cinci mari puteri ale Europei."),
      hint2: L("Gleichgewicht der Kräfte.", "Balance of power.", "Erőegyensúly.", "Echilibrul puterii."),
      svg: { type: "text-bubbles", items: [{ text: "5", color: "#fff", bg: "#2563eb" }, { text: "Mächte", color: "#fff", bg: "#6366f1" }, { text: "Gleichgewicht", color: "#fff", bg: "#2563eb" }, { text: "Frieden", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "tap-count", count: 5, instruction: L("Wie viele Mächte bildeten die Pentarchie?", "How many powers formed the Pentarchy?", "Hány hatalom alkotta a Pentarchiát?", "Câte puteri au format Pentarhia?") },
      quiz: { question: L("Was war das Ziel der Pentarchie?", "What was the goal of the Pentarchy?", "Mi volt a Pentarchia célja?", "Care a fost scopul Pentarhiei?"), choices: [L("Gleichgewicht der Mächte", "Balance of Powers", "Erőviszonyok", "Echilibrul puterilor"), L("Weltherrschaft", "World domination", "Világuralom", "Dominarea lumii"), L("Vernichtung Englands", "Destruction of England", "Anglia elpusztítása", "Distrugerea Angliei"), L("Zerstörung Frankreichs", "Destruction of France", "Franciaország elpusztítása", "Distrugerea Franței")], answer: L("Gleichgewicht der Mächte", "Balance of Powers", "Erőviszonyok", "Echilibrul puterilor") }
    },
    {
      id: "grenzen",
      title: L("Neue Grenzen", "New frontiers", "Új határok", "Noi frontiere"),
      hint1: L("Europa wurde neu aufgeteilt.", "Europe was re-divided.", "Európa újra felosztott.", "Europa a fost redivizată."),
      hint2: L("Preußen erhielt Gebiete am Rhein.", "Prussia received territories on the Rhine.", "Poroszország Rajna menti területeket kapott.", "Prusia a primit teritorii pe Rin."),
      svg: { type: "icon-grid", items: [{ emoji: "🦅", label: "Preußen" }, { emoji: "👑", label: "Österreich" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Gewinner", "winner", "győztes", "câştigător"), items: [L("Preußen", "Prussia", "Poroszország", "Prusia"), L("Russland", "Russia", "Oroszország", "Rusia")] }] },
      quiz: { question: L("Welches Land erhielt Gebiete am Rhein?", "Which country received territories on the Rhine?", "Melyik ország kapott Rajna menti területeket?", "Care țară a primit teritorii pe Rin?"), choices: [L("Preußen", "Prussia", "Poroszország", "Prusia"), L("Frankreich", "France", "Franciaország", "Franţa"), L("Italien", "Italy", "Olaszország", "Italia"), L("Spanien", "Spain", "Spanyolország", "Spania")], answer: L("Preußen", "Prussia", "Poroszország", "Prusia") }
    }
  ]
};

// ─── ISLAND 4: DIE REVOLUTION VON 1848 ─────────────────────────────────────
const I4: IslandSpec = {
  id: "i4",
  title: L("Revolution 1848", "Revolution 1848", "1848-as forradalom", "Revoluția 1848"),
  topics: [
    {
      id: "maerz",
      title: L("Märzforderungen", "March demands", "Március követeli", "cere martie"),
      hint1: L("Was das Volk im März forderte.", "What the people demanded in March.", "Amit a nép követelt márciusban.", "Ce au cerut oamenii în martie."),
      hint2: L("Pressefreiheit und Parlament.", "Freedom of the press and parliament.", "A sajtó és a parlament szabadsága.", "Libertatea presei și a parlamentului."),
      svg: { type: "icon-grid", items: [{ emoji: "📜", label: "Forderung" }, { emoji: "📢", label: "Freiheit" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Presse", "press", "sajtó", "presa"), right: L("Freiheit", "Freedom", "Szabadság", "Libertate") }, { left: L("Verfassung", "Constitution", "Alkotmány", "Constituţie"), right: L("Recht", "Right", "Jobbra", "Corect") }] },
      quiz: { question: L("Was war eine Märzforderung?", "What was a March demand?", "Mi volt a márciusi követelés?", "Care a fost o cerere din martie?"), choices: [L("Pressefreiheit", "Freedom of the press", "Sajtószabadság", "Libertatea presei"), L("Mehr Steuern", "More taxes", "Több adó", "Mai multe taxe"), L("Zensur", "censorship", "cenzúra", "cenzură"), L("Königsmacht", "Royal power", "Királyi hatalom", "Puterea regală")], answer: L("Pressefreiheit", "Freedom of the press", "Sajtószabadság", "Libertatea presei") }
    },
    {
      id: "barrikaden",
      title: L("Barrikadenkämpfe", "Barricade fights", "Barikád harcok", "Lupte de baricade"),
      hint1: L("Kämpfe in Berlin und Wien.", "Fights in Berlin and Vienna.", "Harcok Berlinben és Bécsben.", "Lupte la Berlin și Viena."),
      hint2: L("Das Volk gegen das Militär.", "The people against the military.", "A nép a katonaság ellen.", "Oamenii împotriva armatei."),
      svg: { type: "text-bubbles", items: [{ text: "Kampf", color: "#fff", bg: "#991b1b" }, { text: "Straße", color: "#fff", bg: "#475569" }] },
      interactive: { type: "gap-fill", text: L("In __ gab es schwere Kämpfe.", "There was heavy fighting in __.", "Súlyos harcok voltak __-ban.", "Au fost lupte grele în __."), gaps: [{ index: 0, options: ["Berlin", "London"], correct: 0 }] },
      quiz: { question: L("Wo fanden Barrikadenkämpfe statt?", "Where did barricade fighting take place?", "Hol zajlottak a barikádharcok?", "Unde au avut loc luptele cu baricade?"), choices: [L("Berlin", "Berlin", "Berlin", "Berlin"), L("München", "Munich", "München", "Munchen"), L("Hamburg", "Hamburg", "Hamburg", "Hamburg"), L("Bremen", "Bremen", "Bremen", "Bremen")], answer: L("Berlin", "Berlin", "Berlin", "Berlin") }
    },
    {
      id: "paulskirche",
      title: L("Die Paulskirche", "Paul's Church", "Pál templom", "Biserica lui Pavel"),
      hint1: L("Sitz des ersten deutschen Parlaments.", "Seat of the first German parliament.", "Az első német parlament székhelye.", "Sediul primului parlament german."),
      hint2: L("Frankfurt am Main.", "Frankfurt am Main.", "Frankfurt am Main.", "Frankfurt pe Main."),
      svg: { type: "word-display", word: "Parlament", color: "#1e3a8a" },
      interactive: { type: "word-order", words: [L("Erstes", "First", "Első", "Primul"), L("deutsches", "German", "német", "german"), L("Parlament", "parliament", "parlament", "parlament")], instruction: L("Was tagte dort?", "What was happening there?", "Mi történt ott?", "Ce se întâmpla acolo?") },
      quiz: { question: L("In welcher Stadt steht die Paulskirche?", "In which city is Paul's Church located?", "Melyik városban található a Pál-templom?", "În ce oraș se află Biserica lui Pavel?"), choices: [L("Frankfurt", "Frankfurt", "Frankfurt", "Frankfurt"), L("Berlin", "Berlin", "Berlin", "Berlin"), L("Leipzig", "Leipzig", "Lipcse", "Leipzig"), L("Köln", "Cologne", "Köln", "Köln")], answer: L("Frankfurt", "Frankfurt", "Frankfurt", "Frankfurt") }
    },
    {
      id: "grundrechte1848",
      title: L("Grundrechte 1848", "Basic rights 1848", "Alapjogok 1848", "Drepturi de bază 1848"),
      hint1: L("Erstmals Rechte für alle Deutschen.", "Rights for all Germans for the first time.", "Első alkalommal jogok minden német számára.", "Drepturi pentru toți germanii pentru prima dată."),
      hint2: L("Vorbild für heutige Gesetze.", "Model for today's laws.", "Modell a mai törvényekhez.", "Model pentru legile de astăzi."),
      svg: { type: "text-bubbles", items: [{ text: "Freiheit", color: "#fff", bg: "#1e3a8a" }, { text: "Recht", color: "#fff", bg: "#3b82f6" }, { text: "Gleichheit", color: "#fff", bg: "#1e3a8a" }, { text: "Gesetz", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "highlight-text", text: L("Die Freiheit der Person ist unverletzlich.", "The freedom of the person is inviolable.", "A személy szabadsága sérthetetlen.", "Libertatea persoanei este inviolabilă."), instruction: L("Wichtiger Satz!", "Important sentence!", "Fontos mondat!", "Propoziție importantă!") },
      quiz: { question: L("Was wurde in der Paulskirche erarbeitet?", "What was done in Paul's Church?", "Mi történt Pál templomában?", "Ce s-a făcut în Biserica lui Pavel?"), choices: [L("Grundrechte", "Fundamental rights", "Alapvető jogok", "Drepturi fundamentale"), L("Kriegspläne", "War plans", "Háborús tervek", "Planuri de război"), L("Steuertabellen", "Tax tables", "Adótáblázatok", "Tabelele fiscale"), L("Liederbücher", "Songbooks", "Énekeskönyvek", "Cărți de cântece")], answer: L("Grundrechte", "Fundamental rights", "Alapvető jogok", "Drepturi fundamentale") }
    },
    {
      id: "kleindeutsch",
      title: L("Kleindeutsche Lösung", "Little German solution", "Kis német megoldás", "Mică soluție germană"),
      hint1: L("Ein Deutschland ohne Österreich.", "A Germany without Austria.", "Németország Ausztria nélkül.", "O Germania fără Austria."),
      hint2: L("Preußen sollte die Führung übernehmen.", "Prussia should take the lead.", "Poroszországnak át kell vennie a vezetést.", "Prusia ar trebui să preia conducerea."),
      svg: { type: "text-bubbles", items: [{ text: "Ohne", color: "#fff", bg: "#dc2626" }, { text: "Österreich", color: "#fff", bg: "#475569" }] },
      interactive: { type: "gap-fill", text: L("Kleindeutsch heißt __ Österreich.", "Little German means __ Austria.", "A kis német jelentése __ Ausztria.", "Micul german înseamnă __ Austria."), gaps: [{ index: 0, options: ["ohne", "mit"], correct: 0 }] },
      quiz: { question: L("Was bedeutete kleindeutsch?", "What did Kleindeutsch mean?", "Mit jelentett Kleindeutsch?", "Ce a vrut să spună Kleindeutsch?"), choices: [L("Ohne Österreich", "Without Austria", "Ausztria nélkül", "Fara Austria"), L("Mit Österreich", "With Austria", "Ausztriával", "Cu Austria"), L("Nur Preußen", "Only Prussia", "Csak Poroszország", "Doar Prusia"), L("Nur Bayern", "Only Bavaria", "Csak Bajorország", "Doar Bavaria")], answer: L("Ohne Österreich", "Without Austria", "Ausztria nélkül", "Fara Austria") }
    },
    {
      id: "grossdeutsch",
      title: L("Großdeutsche Lösung", "Greater German solution", "Nagyobb német megoldás", "Soluție germană mai mare"),
      hint1: L("Ein Deutschland mit Österreich.", "One Germany with Austria.", "Egy Németország Ausztriával.", "O singură Germania cu Austria."),
      hint2: L("Schwierig wegen der vielen Völker dort.", "Difficult because of the many peoples there.", "Nehéz a sok nép miatt.", "Greu din cauza multor popoare de acolo."),
      svg: { type: "text-bubbles", items: [{ text: "Mit", color: "#fff", bg: "#16a34a" }, { text: "Österreich", color: "#fff", bg: "#475569" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Großdeutsch", "Greater German", "Nagynémet", "Germană mai mare"), right: L("Mit Österreich", "With Austria", "Ausztriával", "Cu Austria") }, { left: L("Kleindeutsch", "Little German", "Kis német", "Micul german"), right: L("Preußen führt", "Prussia leads", "Poroszország vezet", "Prusia conduce") }] },
      quiz: { question: L("Was war das Problem der großdeutschen Lösung?", "What was the problem of the Greater German solution?", "Mi volt a nagynémet megoldás problémája?", "Care a fost problema soluției Marii Germane?"), choices: [L("Vielvölkerstaat Österreich", "Multi-ethnic state Austria", "Ausztria többnemzetiségű állam", "Stat multietnic Austria"), L("Zu wenig Land", "Too little land", "Túl kevés a föld", "Prea puțin pământ"), L("Kein König", "Not a king", "Nem király", "Nu un rege"), L("Geldmangel", "Lack of money", "Pénz hiánya", "Lipsa banilor")], answer: L("Vielvölkerstaat Österreich", "Multi-ethnic state Austria", "Ausztria többnemzetiségű állam", "Stat multietnic Austria") }
    },
    {
      id: "friedrichwilhelm",
      title: L("Friedrich Wilhelm IV.", "Frederick William IV", "Frigyes Vilmos IV", "Frederic William al IV-lea"),
      hint1: L("Preußischer König.", "Prussian king.", "porosz király.", "regele prusac."),
      hint2: L("Er lehnte die Kaiserkrone ab.", "He refused the imperial crown.", "Megtagadta a császári koronát.", "A refuzat coroana imperială."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "Krone" }, { emoji: "🚫", label: "Nein" }] },
      interactive: { type: "sentence-build", words: [L("Er", "He", "Ő", "El"), L("will", "wants", "akar", "vrea"), L("keine", "no", "nem", "nu"), L("Krone", "crown", "korona", "coroană"), L("vom", "from the", "a", "din"), L("Volk", "People", "Emberek", "Oameni")], instruction: L("Seine Haltung?", "His attitude?", "A hozzáállása?", "Atitudinea lui?") },
      quiz: { question: L("Warum lehnte der König die Krone ab?", "Why did the king refuse the crown?", "Miért utasította el a király a koronát?", "De ce a refuzat regele coroana?"), choices: [L("Er wollte sie nicht vom Volk", "He didn't want them from the people", "Nem akarta őket az emberektől", "Nu le-a vrut de la oameni"), L("Sie war zu schwer", "She was too heavy", "Túl nehéz volt", "Era prea grea"), L("Er wollte Republik", "He wanted a republic", "Köztársaságot akart", "El voia o republică"), L("Er hatte schon eine", "He already had one", "Neki már volt egy", "Avea deja unul")], answer: L("Er wollte sie nicht vom Volk", "He didn't want them from the people", "Nem akarta őket az emberektől", "Nu le-a vrut de la oameni") }
    },
    {
      id: "scheitern1848",
      title: L("Das Scheitern", "The failure", "A kudarc", "Eșecul"),
      hint1: L("Die Revolution wurde niedergeschlagen.", "The revolution was crushed.", "A forradalmat leverték.", "Revoluția a fost zdrobită."),
      hint2: L("Die alten Mächte siegten.", "The old forces won.", "A régi erők győztek.", "Forțele vechi au câștigat."),
      svg: { type: "text-bubbles", items: [{ text: "Revolution", color: "#fff", bg: "#dc2626" }, { text: "Aus", color: "#fff", bg: "#991b1b" }, { text: "Monarchie", color: "#fff", bg: "#2563eb" }, { text: "Bleibt", color: "#fff", bg: "#1e40af" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Ende", "End", "Vége", "Sfârşit"), items: [L("Niederlage", "defeat", "vereség", "învinge"), L("Auflösung", "resolution", "felbontás", "rezoluţie")] }] },
      quiz: { question: L("Wie endete die Revolution 1848?", "How did the revolution end in 1848?", "Hogyan ért véget a forradalom 1848-ban?", "Cum s-a încheiat revoluția în 1848?"), choices: [L("Sie scheiterte", "She failed", "Elbukott", "Ea a eșuat"), L("Sie siegte", "She won", "Ő nyert", "Ea a câștigat"), L("Nichts geschah", "Nothing happened", "Nem történt semmi", "Nu sa întâmplat nimic"), L("Krieg begann", "War began", "Háború kezdődött", "Războiul a început")], answer: L("Sie scheiterte", "She failed", "Elbukott", "Ea a eșuat") }
    },
    {
      id: "auswanderung",
      title: L("Auswanderung", "emigration", "kivándorlás", "emigrare"),
      hint1: L("Viele Deutsche flohen nach Amerika.", "Many Germans fled to America.", "Sok német menekült Amerikába.", "Mulți germani au fugit în America."),
      hint2: L("Die 'Forty-Eighters'.", "The 'Forty Eighters'.", "A „Negyvennyolcasok”.", "„Patruzeci de optzeci”."),
      svg: { type: "icon-grid", items: [{ emoji: "🇺🇸", label: "USA" }] },
      interactive: { type: "tap-count", count: 48, instruction: L("Wie nennt man die Auswanderer von 18..?", "What do you call the emigrants from 18...?", "Hogy hívják a 18 éves kivándorlókat...?", "Cum îi spuneți emigranților de la 18...?") },
      quiz: { question: L("Wohin flohen viele Revolutionäre?", "Where did many revolutionaries flee?", "Hová menekült sok forradalmár?", "Unde au fugit mulți revoluționari?"), choices: [L("Amerika (USA)", "America (USA)", "Amerika (USA)", "America (SUA)"), L("Russland", "Russia", "Oroszország", "Rusia"), L("China", "China", "Kína", "China"), L("Afrika", "Africa", "Afrika", "Africa")], answer: L("Amerika (USA)", "America (USA)", "Amerika (USA)", "America (SUA)") }
    },
    {
      id: "erbe1848",
      title: L("Das Erbe von 1848", "The legacy of 1848", "1848 hagyatéka", "Moștenirea din 1848"),
      hint1: L("Die Ideen blieben lebendig.", "The ideas remained alive.", "Az ötletek életben maradtak.", "Ideile au rămas vii."),
      hint2: L("Wegbereiter für die Demokratie.", "Paving the way for democracy.", "Egyengeti az utat a demokrácia felé.", "Deschizând calea către democrație."),
      svg: { type: "text-bubbles", items: [{ text: "Demokratie", color: "#fff", bg: "#16a34a" }, { text: "Einheit", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "highlight-text", text: L("1848 war der erste Versuch einer deutschen Demokratie.", "1848 was the first attempt at German democracy.", "1848 volt az első kísérlet a német demokráciára.", "1848 a fost prima încercare de democrație germană."), instruction: L("Historischer Wert?", "Historical value?", "Történelmi érték?", "Valoare istorică?") },
      quiz: { question: L("Was blieb von 1848?", "What remained of 1848?", "Mi maradt 1848-ból?", "Ce a mai rămas din 1848?"), choices: [L("Die demokratischen Ideen", "The democratic ideas", "A demokratikus eszmék", "Ideile democratice"), L("Die alten Könige", "The ancient kings", "Az ősi királyok", "Regii antici"), L("Nur Ruinen", "Just ruins", "Csak romok", "Doar ruine"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Die demokratischen Ideen", "The democratic ideas", "A demokratikus eszmék", "Ideile democratice") }
    },
    {
      id: "frankreich1848",
      title: L("Februarrevolution", "February revolution", "Februári forradalom", "revoluția din februarie"),
      hint1: L("Beginn der Unruhen in Paris.", "Beginning of the riots in Paris.", "A párizsi zavargások kezdete.", "Începutul revoltelor de la Paris."),
      hint2: L("Sturz des 'Bürgerkönigs'.", "Overthrow of the 'Citizen King'.", "A „polgárkirály” megdöntése.", "Răsturnarea „Regelui cetățean”."),
      svg: { type: "text-bubbles", items: [{ text: "Paris", color: "#fff", bg: "#2563eb" }, { text: "Februar", color: "#fff", bg: "#6366f1" }, { text: "Berlin", color: "#fff", bg: "#2563eb" }, { text: "März", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Februar", "February", "február", "februarie"), right: L("Paris", "Paris", "Párizs", "Paris") }, { left: L("März", "March", "március", "martie"), right: L("Berlin", "Berlin", "Berlin", "Berlin") }] },
      quiz: { question: L("Wo begann die Revolution 1848?", "Where did the revolution begin in 1848?", "Hol kezdődött a forradalom 1848-ban?", "Unde a început revoluția în 1848?"), choices: [L("Paris", "Paris", "Párizs", "Paris"), L("London", "London", "London", "Londra"), L("Rom", "Rome", "Róma", "Roma"), L("Madrid", "Madrid", "Madrid", "Madrid")], answer: L("Paris", "Paris", "Párizs", "Paris") }
    },
    {
      id: "parlamentarier",
      title: L("Abgeordnete", "MPs", "képviselők", "parlamentarii"),
      hint1: L("Meist Professoren und Juristen.", "Mostly professors and lawyers.", "Leginkább professzorok és jogászok.", "Mai ales profesori și avocați."),
      hint2: L("Das 'Professorenparlament'.", "The 'Professors' Parliament'.", "A „Professzorok Parlamentje”.", "Parlamentul „Profesorilor”."),
      svg: { type: "icon-grid", items: [{ emoji: "🎓", label: "Professoren" }, { emoji: "⚖️", label: "Juristen" }] },
      interactive: { type: "lang-mcq", question: L("Wer saß hauptsächlich im Parlament?", "Who mainly sat in parliament?", "Kik voltak főként a parlamentben?", "Cine a stat în principal în parlament?"), choices: [L("Gebildete Bürger", "Educated citizens", "Művelt állampolgárok", "Cetăţeni educaţi"), L("Bauern", "farmers", "gazdálkodók", "fermierii"), L("Fabrikarbeiter", "Factory worker", "Gyári munkás", "Muncitor din fabrică")], answer: L("Gebildete Bürger", "Educated citizens", "Művelt állampolgárok", "Cetăţeni educaţi") },
      quiz: { question: L("Wer saß hauptsächlich im Parlament?", "Who mainly sat in parliament?", "Kik voltak főként a parlamentben?", "Cine a stat în principal în parlament?"), choices: [L("Gebildete Bürger", "Educated citizens", "Művelt állampolgárok", "Cetăţeni educaţi"), L("Bauern", "farmers", "gazdálkodók", "fermierii"), L("Fabrikarbeiter", "Factory worker", "Gyári munkás", "Muncitor din fabrică"), L("Adlige", "Nobles", "Nemesek", "Nobili")], answer: L("Gebildete Bürger", "Educated citizens", "Művelt állampolgárok", "Cetăţeni educaţi") }
    },
    {
      id: "grundrechte_heute",
      title: L("Grundrechte heute", "Basic rights today", "Alapjogok ma", "Drepturi de bază astăzi"),
      hint1: L("Ähnlichkeit zum Grundgesetz.", "Similarity to the Basic Law.", "Hasonlóság az Alaptörvényhez.", "Asemănarea cu Legea fundamentală."),
      hint2: L("Wurzeln unserer Freiheit.", "Roots of our freedom.", "Szabadságunk gyökerei.", "Rădăcinile libertății noastre."),
      svg: { type: "word-display", word: "Grundgesetz", color: "#166534" },
      interactive: { type: "gap-fill", text: L("1848 war ein __ für heute.", "1848 was a __ for today.", "1848 ma __ volt.", "1848 a fost un __ pentru astăzi."), gaps: [{ index: 0, options: ["Vorbild", "Fehler"], correct: 0 }] },
      quiz: { question: L("Welches heutige Gesetz hat Wurzeln in 1848?", "Which current law has roots in 1848?", "Melyik jelenlegi törvény gyökere 1848?", "Care lege actuală are rădăcini în 1848?"), choices: [L("Grundgesetz", "Basic Law", "Alaptörvény", "Legea fundamentală"), L("Strafgesetzbuch", "criminal code", "büntető törvénykönyv", "cod penal"), L("Straßenverkehrsordnung", "Road traffic regulations", "Közúti közlekedési szabályok", "Reglementări de circulație rutieră"), L("Schulordnung", "School regulations", "Iskolai szabályzat", "Regulamentul școlar")], answer: L("Grundgesetz", "Basic Law", "Alaptörvény", "Legea fundamentală") }
    },
    {
      id: "schwarzrotgold",
      title: L("Schwarz-Rot-Gold", "Black-red-gold", "Fekete-piros-arany", "Negru-rosu-auriu"),
      hint1: L("Die Farben der Freiheit.", "The colors of freedom.", "A szabadság színei.", "Culorile libertății."),
      hint2: L("Entstanden aus den Lützower Jägern.", "Originated from the Lützower Jäger.", "A Lützower Jägerből származik.", "Originar din Lützower Jäger."),
      svg: { type: "text-bubbles", items: [{ text: "Schwarz", color: "#fff", bg: "#000" }, { text: "Rot", color: "#fff", bg: "#f00" }, { text: "Gold", color: "#000", bg: "#ff0" }] },
      interactive: { type: "tap-count", count: 3, instruction: L("Wie viele Farben hat die deutsche Flagge?", "How many colors does the German flag have?", "Hány színű a német zászló?", "Câte culori are steagul Germaniei?") },
      quiz: { question: L("Wofür standen die Farben 1848?", "What did the colors stand for in 1848?", "Mit jelentettek a színek 1848-ban?", "Ce reprezentau culorile în 1848?"), choices: [L("Einheit und Freiheit", "Unity and freedom", "Egység és szabadság", "Unitate și libertate"), L("Krieg und Tod", "War and death", "Háború és halál", "Război și moarte"), L("Reichtum", "wealth", "jólét", "avere"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Einheit und Freiheit", "Unity and freedom", "Egység és szabadság", "Unitate și libertate") }
    },
    {
      id: "reaktion",
      title: L("Reaktionszeit", "Response time", "Válaszidő", "Timp de răspuns"),
      hint1: L("Rückkehr zur alten Ordnung nach 1849.", "Return to the old order after 1849.", "Visszatérés a régi rendhez 1849 után.", "Revenirea la vechea ordine după 1849."),
      hint2: L("Unterdrückung der Demokraten.", "Suppression of Democrats.", "A demokraták elnyomása.", "Suprimarea democraților."),
      svg: { type: "text-bubbles", items: [{ text: "Revolution", color: "#fff", bg: "#dc2626" }, { text: "Ende", color: "#fff", bg: "#991b1b" }, { text: "Polizei", color: "#fff", bg: "#475569" }, { text: "Macht", color: "#fff", bg: "#64748b" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Folgen", "Follow", "Kövesd", "Urmăriți"), items: [L("Überwachung", "surveillance", "felügyelet", "supraveghere"), L("Verhaftung", "arrest", "letartóztatás", "arestare")] }] },
      quiz: { question: L("Was geschah nach dem Scheitern?", "What happened after the failure?", "Mi történt a kudarc után?", "Ce s-a întâmplat după eșec?"), choices: [L("Harte Unterdrückung", "Hard oppression", "Kemény elnyomás", "Opresiune grea"), L("Sofortige Wahlen", "Immediate elections", "Azonnali választások", "Alegeri imediate"), L("Ein Volksfest", "A folk festival", "Népünnepély", "Un festival popular"), L("Krieg gegen England", "War against England", "Háború Anglia ellen", "Război împotriva Angliei")], answer: L("Harte Unterdrückung", "Hard oppression", "Kemény elnyomás", "Opresiune grea") }
    }
  ]
};

// ─── ISLAND 5: DIE INDUSTRIELLE REVOLUTION (ANFÄNGE) ───────────────────────
const I5: IslandSpec = {
  id: "i5",
  title: L("Industrielle Revolution", "Industrial revolution", "Ipari forradalom", "Revoluție industrială"),
  topics: [
    {
      id: "watt",
      title: L("James Watt", "James Watts", "James Watts", "James Watts"),
      hint1: L("Verbesserer der Dampfmaschine.", "Improver of the steam engine.", "A gőzgép továbbfejlesztése.", "Îmbunătățitor al motorului cu abur."),
      hint2: L("Er ermöglichte den Antrieb von Maschinen.", "It made it possible to drive machines.", "Lehetővé tette a gépek vezetését.", "A făcut posibilă conducerea utilajelor."),
      svg: { type: "icon-grid", items: [{ emoji: "⚙️", label: "Technik" }, { emoji: "💨", label: "Dampf" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("James Watt", "James Watts", "James Watts", "James Watts"), right: L("Dampfmaschine", "Steam engine", "Gőzgép", "Motor cu abur") }, { left: L("Kraft", "Power", "Hatalom", "Putere"), right: L("Dampf", "steam", "gőz", "aburi") }] },
      quiz: { question: L("Was verbesserte James Watt?", "What did James Watt improve?", "Mit javított James Watt?", "Ce a îmbunătățit James Watt?"), choices: [L("Dampfmaschine", "Steam engine", "Gőzgép", "Motor cu abur"), L("Auto", "car", "autó", "masina"), L("Flugzeug", "Airplane", "Repülőgép", "Avion"), L("Internet", "Internet", "Internet", "Internet")], answer: L("Dampfmaschine", "Steam engine", "Gőzgép", "Motor cu abur") }
    },
    {
      id: "england",
      title: L("Mutterland England", "Motherland England", "Anyaország Anglia", "Patria Anglia"),
      hint1: L("Hier begann die Industrialisierung.", "Industrialization began here.", "Itt kezdődött az iparosítás.", "Aici a început industrializarea."),
      hint2: L("Rohstoffe und Erfindungen.", "Raw materials and inventions.", "Nyersanyagok és találmányok.", "Materii prime și invenții."),
      svg: { type: "icon-grid", items: [{ emoji: "🇬🇧", label: "England" }] },
      interactive: { type: "gap-fill", text: L("England hatte viel __.", "England had a lot of __.", "Angliában sok __ volt.", "Anglia a avut o mulțime de __."), gaps: [{ index: 0, options: ["Kohle", "Holz"], correct: 0 }] },
      quiz: { question: L("In welchem Land begann die Industrie?", "In which country did the industry begin?", "Melyik országban kezdődött az ipar?", "În ce țară a început industria?"), choices: [L("England", "England", "Anglia", "Anglia"), L("Deutschland", "Germany", "Németország", "Germania"), L("Frankreich", "France", "Franciaország", "Franţa"), L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII")], answer: L("England", "England", "Anglia", "Anglia") }
    },
    {
      id: "webstuhl",
      title: L("Mechanischer Webstuhl", "Mechanical loom", "Mechanikus szövőszék", "Răsătorit mecanic"),
      hint1: L("Erste große Industrie: Textilien.", "First major industry: textiles.", "Az első nagy iparág: textil.", "Prima industrie majoră: textile."),
      hint2: L("Stoffe wurden viel günstiger.", "Fabrics became much cheaper.", "A szövetek sokkal olcsóbbak lettek.", "Țesăturile au devenit mult mai ieftine."),
      svg: { type: "text-bubbles", items: [{ text: "Stoff", color: "#fff", bg: "#16a34a" }, { text: "Weben", color: "#fff", bg: "#0ea5e9" }] },
      interactive: { type: "word-order", words: [L("Maschinen", "machines", "gépek", "masini"), L("weben", "weave", "szövés", "ţese"), L("schneller", "faster", "gyorsabban", "Mai repede")], instruction: L("Was war neu?", "What was new?", "Mi volt az új?", "Ce era nou?") },
      quiz: { question: L("Welche Industrie war die erste?", "Which industry was first?", "Melyik iparág volt az első?", "Care industrie a fost prima?"), choices: [L("Textilindustrie", "Textile industry", "Textilipar", "Industria textila"), L("Autoindustrie", "Auto industry", "Autóipar", "Industria auto"), L("Computer", "computer", "számítógép", "calculator"), L("Luftfahrt", "aviation", "repülés", "aviaţie")], answer: L("Textilindustrie", "Textile industry", "Textilipar", "Industria textila") }
    },
    {
      id: "eisenbahn",
      title: L("Die Eisenbahn", "The railway", "A vasút", "Calea ferată"),
      hint1: L("Revolution des Transports.", "Transportation revolution.", "Közlekedési forradalom.", "Revoluția transporturilor."),
      hint2: L("Schneller Transport von Kohle.", "Faster transportation of coal.", "A szén gyorsabb szállítása.", "Transport mai rapid al cărbunelui."),
      svg: { type: "word-display", word: "Dampflok", color: "#475569" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Adler", "eagle", "sas", "vultur"), right: L("Erste Bahn", "First train", "Első vonat", "Primul tren") }, { left: L("Schienen", "rails", "sínek", "șine"), right: L("Weg", "Away", "El", "Departe") }] },
      quiz: { question: L("Was veränderte den Transport?", "What changed transportation?", "Mi változtatta meg a közlekedést?", "Ce a schimbat transportul?"), choices: [L("Eisenbahn", "railroad", "vasút", "cale ferată"), L("Pferdewagen", "Horse cart", "Lovas szekér", "Căruță cu cai"), L("Schiff", "Ship", "Hajó", "Navă"), L("Flugzeug", "Airplane", "Repülőgép", "Avion")], answer: L("Eisenbahn", "railroad", "vasút", "cale ferată") }
    },
    {
      id: "kohle",
      title: L("Kohle & Eisen", "Coal & Iron", "Szén és Vas", "Cărbune și Fier"),
      hint1: L("Wichtigste Rohstoffe.", "Most important raw materials.", "A legfontosabb alapanyagok.", "Cele mai importante materii prime."),
      hint2: L("Brennstoff für Maschinen.", "Fuel for machines.", "Üzemanyag a gépekhez.", "Combustibil pentru mașini."),
      svg: { type: "icon-grid", items: [{ emoji: "⬛", label: "Kohle" }, { emoji: "⛏️", label: "Bergbau" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Rohstoffe", "raw materials", "nyersanyagok", "materii prime"), items: [L("Kohle", "Money", "Pénz", "Bani"), L("Eisenerz", "Iron ore", "Vasérc", "Minereu de fier")] }] },
      quiz: { question: L("Welcher Rohstoff trieb Maschinen an?", "What raw material powered machines?", "Milyen nyersanyaggal működő gépek?", "Ce mașini alimentate cu materii prime?"), choices: [L("Kohle", "Money", "Pénz", "Bani"), L("Öl", "oil", "olaj", "ulei"), L("Holz", "Wood", "Faipari", "Lemn"), L("Wasser", "Water", "Víz", "Apă")], answer: L("Kohle", "Money", "Pénz", "Bani") }
    },
    {
      id: "fabrik",
      title: L("Fabrikarbeit", "Factory work", "Gyári munka", "Munca din fabrică"),
      hint1: L("Arbeit unter einem Dach.", "Work under one roof.", "Dolgozzon egy fedél alatt.", "Lucrați sub un singur acoperiș."),
      hint2: L("Feste Arbeitszeiten und Disziplin.", "Fixed working hours and discipline.", "Fix munkaidő és fegyelem.", "Program de lucru fix și disciplină."),
      svg: { type: "text-bubbles", items: [{ text: "Früher", color: "#fff", bg: "#92400e" }, { text: "Handarbeit", color: "#fff", bg: "#b45309" }, { text: "Heute", color: "#fff", bg: "#475569" }, { text: "Maschinen", color: "#fff", bg: "#64748b" }] },
      interactive: { type: "gap-fill", text: L("In der Fabrik regiert die __.", "The __ rules in the factory.", "A __ szabályok a gyárban.", "__ regulile din fabrică."), gaps: [{ index: 0, options: ["Uhr", "Sonne"], correct: 0 }] },
      quiz: { question: L("Was war neu in Fabriken?", "What was new in factories?", "Mi volt az új a gyárakban?", "Ce era nou în fabrici?"), choices: [L("Strenge Disziplin", "Strict discipline", "Szigorú fegyelem", "Disciplina stricta"), L("Viel Freiheit", "Lots of freedom", "Sok szabadságot", "Multă libertate"), L("Keine Regeln", "No rules", "Nincsenek szabályok", "Fara reguli"), L("Kurze Arbeit", "Short work", "Rövid munka", "Munca scurta")], answer: L("Strenge Disziplin", "Strict discipline", "Szigorú fegyelem", "Disciplina stricta") }
    },
    {
      id: "adler1835",
      title: L("Der Adler", "The eagle", "A sas", "Vulturul"),
      hint1: L("Erste Eisenbahn in Deutschland.", "First railway in Germany.", "Az első vasút Németországban.", "Prima cale ferată din Germania."),
      hint2: L("Von Nürnberg nach Fürth.", "From Nuremberg to Fürth.", "Nürnbergtől Fürthig.", "De la Nürnberg la Fürth."),
      svg: { type: "text-bubbles", items: [{ text: "1835", color: "#fff", bg: "#ea580c" }, { text: "Nürnberg", color: "#fff", bg: "#1e3a8a" }] },
      interactive: { type: "tap-count", count: 1835, instruction: L("In welchem Jahr fuhr der Adler?", "What year did the eagle fly?", "Melyik évben repült a sas?", "În ce an a zburat vulturul?") },
      quiz: { question: L("Wo fuhr die erste deutsche Bahn?", "Where did the first German train run?", "Hol indult az első német vonat?", "Unde a circulat primul tren german?"), choices: [L("Nürnberg-Fürth", "Nuremberg-Fürth", "Nürnberg-Fürth", "Nürnberg-Fürth"), L("Berlin-Potsdam", "Berlin-Potsdam", "Berlin-Potsdam", "Berlin-Potsdam"), L("Hamburg-Kiel", "Hamburg-Kiel", "Hamburg-Kiel", "Hamburg-Kiel"), L("München-Augsburg", "Munich-Augsburg", "München-Augsburg", "Munchen-Augsburg")], answer: L("Nürnberg-Fürth", "Nuremberg-Fürth", "Nürnberg-Fürth", "Nürnberg-Fürth") }
    },
    {
      id: "urbanisierung",
      title: L("Urbanisierung", "urbanization", "urbanizáció", "urbanizare"),
      hint1: L("Wachstum der Städte.", "Growth of cities.", "A városok növekedése.", "Creșterea orașelor."),
      hint2: L("Menschen ziehen vom Land weg.", "People are moving away from the country.", "Az emberek elköltöznek az országból.", "Oamenii se îndepărtează de țară."),
      svg: { type: "icon-grid", items: [{ emoji: "🏙️", label: "Großstadt" }] },
      interactive: { type: "sentence-build", words: [L("Städte", "Cities", "Városok", "Orașe"), L("wachsen", "grow", "nő", "cresc"), L("sehr", "very", "nagyon", "foarte"), L("schnell", "fast", "gyors", "rapid")], instruction: L("Was ist Urbanisierung?", "What is Urbanization?", "Mi az urbanizáció?", "Ce este Urbanizarea?") },
      quiz: { question: L("Wohin zogen die Menschen?", "Where did people move to?", "Hová költöztek az emberek?", "Unde s-au mutat oamenii?"), choices: [L("In die Städte", "To the cities", "A városokba", "Spre orase"), L("Aufs Land", "In the countryside", "Vidéken", "În mediul rural"), L("In den Wald", "Into the forest", "Az erdőbe", "În pădure"), L("Gar nicht", "Not at all", "Egyáltalán nem", "Deloc")], answer: L("In die Städte", "To the cities", "A városokba", "Spre orase") }
    },
    {
      id: "kapitalismus",
      title: L("Kapitalismus", "capitalism", "kapitalizmus", "capitalism"),
      hint1: L("Privater Besitz von Fabriken.", "Private ownership of factories.", "A gyárak magántulajdona.", "Proprietate privată a fabricilor."),
      hint2: L("Gewinn steht im Vordergrund.", "Profit is the priority.", "A profit a prioritás.", "Profitul este prioritatea."),
      svg: { type: "text-bubbles", items: [{ text: "Kapital", color: "#fff", bg: "#fbbf24" }, { text: "Profit", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "lang-mcq", question: L("Was ist Kapitalismus?", "What is Capitalism?", "Mi az a kapitalizmus?", "Ce este capitalismul?"), choices: [L("Marktwirtschaft mit Profit", "Market economy with profit", "Piacgazdaság profittal", "Economia de piata cu profit"), L("Tausch von Äpfeln", "Exchange of apples", "Alma csere", "Schimb de mere"), L("Alles gehört allen", "Everything belongs to everyone", "Minden mindenkié", "Totul aparține tuturor")], answer: L("Marktwirtschaft mit Profit", "Market economy with profit", "Piacgazdaság profittal", "Economia de piata cu profit") },
      quiz: { question: L("Was ist Kapitalismus?", "What is Capitalism?", "Mi az a kapitalizmus?", "Ce este capitalismul?"), choices: [L("Marktwirtschaft mit Profit", "Market economy with profit", "Piacgazdaság profittal", "Economia de piata cu profit"), L("Tausch von Äpfeln", "Exchange of apples", "Alma csere", "Schimb de mere"), L("Alles gehört allen", "Everything belongs to everyone", "Minden mindenkié", "Totul aparține tuturor"), L("Planwirtschaft", "Planned economy", "Tervezett gazdaság", "Economia planificată")], answer: L("Marktwirtschaft mit Profit", "Market economy with profit", "Piacgazdaság profittal", "Economia de piata cu profit") }
    },
    {
      id: "technisierung",
      title: L("Technisierung", "Mechanization", "Gépesítés", "Mecanizare"),
      hint1: L("Maschinen übernehmen Aufgaben.", "Machines take over tasks.", "A gépek veszik át a feladatokat.", "Mașinile preiau sarcini."),
      hint2: L("Effizienz steigt extrem.", "Efficiency increases extremely.", "A hatékonyság rendkívül növekszik.", "Eficiența crește extrem de mult."),
      svg: { type: "icon-grid", items: [{ emoji: "⚙️", label: "Maschine" }, { emoji: "📈", label: "Ertrag" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Hand", "hand", "kéz", "mână"), right: L("Langsam", "Slow", "Lassú", "Lent") }, { left: L("Maschine", "machine", "gép", "maşină"), right: L("Schnell", "Fast", "Gyors", "Rapid") }] },
      quiz: { question: L("Was war der Vorteil von Maschinen?", "What was the advantage of machines?", "Mi volt az előnye a gépeknek?", "Care a fost avantajul mașinilor?"), choices: [L("Schnellere Produktion", "Faster production", "Gyorsabb gyártás", "Producție mai rapidă"), L("Mehr Freizeit", "More free time", "Több szabadidő", "Mai mult timp liber"), L("Bessere Luft", "Better air", "Jobb levegő", "Aer mai bun"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Schnellere Produktion", "Faster production", "Gyorsabb gyártás", "Producție mai rapidă") }
    },
    {
      id: "lokomotive",
      title: L("Dampflokomotive", "Steam locomotive", "Gőzmozdony", "Locomotiva cu abur"),
      hint1: L("Antrieb durch Wasserdampf.", "Driven by water vapor.", "Vízgőz hajtja.", "Acționat de vapori de apă."),
      hint2: L("Schwerer Transport möglich.", "Heavy transport possible.", "Nehéz szállítás lehetséges.", "Transport greu posibil."),
      svg: { type: "text-bubbles", items: [{ text: "Pferd", color: "#fff", bg: "#92400e" }, { text: "Schwach", color: "#fff", bg: "#b45309" }, { text: "Lok", color: "#fff", bg: "#475569" }, { text: "Stark", color: "#fff", bg: "#64748b" }] },
      interactive: { type: "gap-fill", text: L("Die Lok braucht Wasser und __.", "The locomotive needs water and __.", "A mozdonynak vízre van szüksége és __.", "Locomotiva are nevoie de apă și __."), gaps: [{ index: 0, options: ["Kohle", "Holz"], correct: 0 }] },
      quiz: { question: L("Wie wurde die Lok angetrieben?", "How was the locomotive powered?", "Hogyan működött a mozdony?", "Cum era alimentată locomotiva?"), choices: [L("Wasserdampf", "Water vapor", "Vízgőz", "Vaporii de apă"), L("Elektrizität", "electricity", "elektromos áram", "electricitate"), L("Benzin", "petrol", "benzin", "benzină"), L("Luft", "Air", "Levegő", "Aer")], answer: L("Wasserdampf", "Water vapor", "Vízgőz", "Vaporii de apă") }
    },
    {
      id: "fabrikherr",
      title: L("Fabrikbesitzer", "Factory owner", "Gyáros", "Proprietarul fabricii"),
      hint1: L("Die neuen Reichen.", "The new rich.", "Az újgazdagok.", "Noul bogat."),
      hint2: L("Oft Bourgeoisie genannt.", "Often called bourgeoisie.", "Gyakran burzsoáziának hívják.", "Adesea numită burghezie."),
      svg: { type: "word-display", word: "Unternehmer", color: "#1e3a8a" },
      interactive: { type: "highlight-text", text: L("Die Unternehmer besaßen das Kapital.", "The entrepreneurs owned the capital.", "A vállalkozók birtokolták a fővárost.", "Antreprenorii dețineau capitalul."), instruction: L("Wer war mächtig?", "Who was powerful?", "Ki volt erős?", "Cine era puternic?") },
      quiz: { question: L("Wer besaß die Fabriken?", "Who owned the factories?", "Kié volt a gyárak?", "Cine dețin fabricile?"), choices: [L("Unternehmer", "Entrepreneur", "Vállalkozó", "Antreprenor"), L("Arbeiter", "workers", "dolgozók", "muncitori"), L("Könige", "Kings", "Királyok", "regi"), L("Priester", "priest", "pap", "preot")], answer: L("Unternehmer", "Entrepreneur", "Vállalkozó", "Antreprenor") }
    },
    {
      id: "bevoelkerung",
      title: L("Bevölkerungsexplosion", "Population explosion", "Népességrobbanás", "Explozie a populației"),
      hint1: L("Zahl der Menschen stieg stark an.", "The number of people rose sharply.", "Az emberek száma meredeken emelkedett.", "Numărul de oameni a crescut brusc."),
      hint2: L("Bessere Hygiene und Medizin.", "Better hygiene and medicine.", "Jobb higiénia és gyógyszer.", "Igienă și medicamente mai bune."),
      svg: { type: "icon-grid", items: [{ emoji: "👨‍👩‍👧‍👦", label: "Wachstum" }, { emoji: "➕", label: "Mehr" }] },
      interactive: { type: "tap-count", count: 2, instruction: L("Wie viele Faktoren (Essen+Medizin) halfen?", "How many factors (food + medicine) helped?", "Hány tényező (étel + gyógyszer) segített?", "Câți factori (mâncare + medicamente) au ajutat?") },
      quiz: { question: L("Warum stieg die Bevölkerung?", "Why did the population increase?", "Miért nőtt a népesség?", "De ce a crescut populația?"), choices: [L("Bessere Nahrung", "Better food", "Jobb étel", "Mâncare mai bună"), L("Mehr Kriege", "More wars", "Még több háború", "Mai multe războaie"), L("Wenig Kinder", "Few children", "Kevés gyerek", "Puțini copii"), L("Kälte", "cold", "hideg", "rece")], answer: L("Bessere Nahrung", "Better food", "Jobb étel", "Mâncare mai bună") }
    },
    {
      id: "export",
      title: L("Welthandel", "World trade", "Világkereskedelem", "Comerțul mondial"),
      hint1: L("Waren wurden weltweit verkauft.", "Goods were sold worldwide.", "Az árukat világszerte értékesítették.", "Mărfurile au fost vândute în toată lumea."),
      hint2: L("Dampfschiffe halfen dabei.", "Steamboats helped with this.", "A gőzhajók segítettek ebben.", "Ambarcațiunile cu aburi au ajutat la asta."),
      svg: { type: "text-bubbles", items: [{ text: "Schiff", color: "#fff", bg: "#0284c7" }, { text: "Welt", color: "#fff", bg: "#16a34a" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Import", "import", "import", "import"), right: L("Einfuhr", "import", "import", "import") }, { left: L("Export", "export", "export", "export"), right: L("Ausfuhr", "export", "export", "export") }] },
      quiz: { question: L("Was beschleunigte den Welthandel?", "What accelerated world trade?", "Mi gyorsította fel a világkereskedelmet?", "Ce a accelerat comerțul mondial?"), choices: [L("Dampfschiffe", "Steamboats", "Gőzhajók", "Barci cu aburi"), L("Ruderboote", "Rowing boats", "Evezős csónakok", "Bărci cu vâsle"), L("Flugzeuge", "Airplanes", "Repülőgépek", "Avioane"), L("Autos", "Cars", "Autók", "Mașini")], answer: L("Dampfschiffe", "Steamboats", "Gőzhajók", "Barci cu aburi") }
    },
    {
      id: "erfindungen",
      title: L("Wichtige Erfindungen", "Important inventions", "Fontos találmányok", "Invenții importante"),
      hint1: L("Rad, Pflug, Dampfmaschine.", "Wheel, plow, steam engine.", "Kerék, eke, gőzgép.", "Roată, plug, motor cu abur."),
      hint2: L("Technik verändert die Welt.", "Technology is changing the world.", "A technológia megváltoztatja a világot.", "Tehnologia schimbă lumea."),
      svg: { type: "icon-grid", items: [{ emoji: "📞", label: "Telefon" }, { emoji: "💡", label: "Glühbirne" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Telefon", "phone", "telefon", "telefon"), right: L("Bell", "Bell", "Harang", "Clopot") }, { left: L("Glühbirne", "light bulb", "villanykörte", "bec"), right: L("Edison", "Edison", "Edison", "Edison") }] },
      quiz: { question: L("Was gehört zur späten Industriezeit?", "What belongs to the late industrial period?", "Mi tartozik a késői iparos időszakhoz?", "Ce aparține perioadei industriale târzii?"), choices: [L("Elektrizität", "electricity", "elektromos áram", "electricitate"), L("Feuerstein", "Flint", "Kovakő", "Cremene"), L("Höhlenmalerei", "Cave painting", "Barlangfestés", "Pictura rupestră"), L("Streitwagen", "Chariot", "Szekér", "Carul")], answer: L("Elektrizität", "electricity", "elektromos áram", "electricitate") }
    }
  ]
};

// ─── ISLAND 6: SOZIALE FRAGE & TECHNISCHER FORTSCHRITT ─────────────────────
const I6: IslandSpec = {
  id: "i6",
  title: L("Soziale Frage", "Social question", "Társadalmi kérdés", "Întrebare socială"),
  topics: [
    {
      id: "arbeiterelend",
      title: L("Das Elend", "The misery", "A nyomorúság", "Mizeria"),
      hint1: L("Schlechte Arbeitsbedingungen.", "Bad working conditions.", "Rossz munkakörülmények.", "Condiții proaste de muncă."),
      hint2: L("Lange Arbeitszeiten, wenig Lohn.", "Long working hours, low pay.", "Hosszú munkaidő, alacsony fizetés.", "Program lung de lucru, salariu mic."),
      svg: { type: "text-bubbles", items: [{ text: "Lohn", color: "#fff", bg: "#991b1b" }, { text: "Niedrig", color: "#fff", bg: "#dc2626" }, { text: "Zeit", color: "#fff", bg: "#991b1b" }, { text: "14 Stunden", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Lohn", "Salary", "Fizetés", "Salariu"), right: L("Wenig", "Few", "Kevés", "Puțini") }, { left: L("Wohnung", "Apartment", "Lakás", "Apartament"), right: L("Eng", "Closely", "Szorosan", "Îndeaproape") }] },
      quiz: { question: L("Wie war das Leben der Arbeiter?", "What was life like for the workers?", "Milyen volt a munkások élete?", "Cum era viața pentru muncitori?"), choices: [L("Sehr arm", "Very poor", "Nagyon szegény", "Foarte sărac"), L("Reich", "Rich", "Gazdag", "Bogat"), L("Gemütlich", "Cozy", "Kényelmes", "Confortabil"), L("Luxuriös", "Luxurious", "Fényűző", "de lux")], answer: L("Sehr arm", "Very poor", "Nagyon szegény", "Foarte sărac") }
    },
    {
      id: "kinderarbeit",
      title: L("Kinderarbeit", "Child labor", "Gyermekmunka", "Munca copiilor"),
      hint1: L("Kinder mussten mitverdienen.", "Children had to earn money too.", "A gyerekeknek is pénzt kellett keresniük.", "Și copiii trebuiau să câștige bani."),
      hint2: L("In Bergwerken oder Fabriken.", "In mines or factories.", "Bányákban vagy gyárakban.", "În mine sau fabrici."),
      svg: { type: "icon-grid", items: [{ emoji: "👶", label: "Kind" }, { emoji: "⛏️", label: "Arbeit" }] },
      interactive: { type: "gap-fill", text: L("Kinder arbeiteten oft __ Stunden.", "Children often worked __ hours.", "A gyerekek gyakran __ órát dolgoztak.", "Copiii au lucrat adesea __ ore."), gaps: [{ index: 0, options: ["12", "2"], correct: 0 }] },
      quiz: { question: L("Wo arbeiteten Kinder oft?", "Where did children often work?", "Hol dolgoztak gyakran a gyerekek?", "Unde lucrau adesea copiii?"), choices: [L("In Bergwerken", "In mines", "A bányákban", "În mine"), L("In der Schule", "At school", "Az iskolában", "La scoala"), L("Im Kindergarten", "In kindergarten", "Az óvodában", "La grădiniță"), L("Gar nicht", "Not at all", "Egyáltalán nem", "Deloc")], answer: L("In Bergwerken", "In mines", "A bányákban", "În mine") }
    },
    {
      id: "proletariat",
      title: L("Das Proletariat", "The proletariat", "A proletariátus", "Proletariatul"),
      hint1: L("Die neue Klasse der Arbeiter.", "The new class of workers.", "A munkások új osztálya.", "Noua clasă de muncitori."),
      hint2: L("Besitzlose Lohnarbeiter.", "Propertyless wage workers.", "Ingatlan nélküli bérmunkások.", "Muncitori salariați fără proprietate."),
      svg: { type: "word-display", word: "Arbeiterklasse", color: "#991b1b" },
      interactive: { type: "sentence-build", words: [L("Arbeiter", "workers", "dolgozók", "muncitori"), L("haben", "have", "van", "au"), L("keinen", "none", "egyik sem", "nici unul"), L("Besitz", "possession", "birtoklása", "deţinere")], instruction: L("Wer sind Proletarier?", "Who are proletarians?", "Kik a proletárok?", "Cine sunt proletarii?") },
      quiz: { question: L("Wie nennt man die besitzlose Klasse?", "What do you call the propertyless class?", "Mit nevezel ingatlantalan osztálynak?", "Cum numești clasa fără proprietate?"), choices: [L("Proletariat", "proletariat", "proletariátus", "proletariatul"), L("Adel", "Nobility", "Nemesség", "Nobleţe"), L("Bourgeoisie", "bourgeoisie", "burzsoázia", "burghezie"), L("Klerus", "clergy", "papság", "clerului")], answer: L("Proletariat", "proletariat", "proletariátus", "proletariatul") }
    },
    {
      id: "gewerkschaften",
      title: L("Gewerkschaften", "Trade unions", "Szakszervezetek", "Sindicatele"),
      hint1: L("Zusammenschluss von Arbeitern.", "Association of workers.", "Munkásszövetség.", "Asociația muncitorilor."),
      hint2: L("Kampf für bessere Bedingungen.", "Fight for better conditions.", "Küzdj a jobb feltételekért.", "Luptă pentru condiții mai bune."),
      svg: { type: "text-bubbles", items: [{ text: "Streik", color: "#fff", bg: "#ef4444" }, { text: "Rechte", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Streik", "strike", "sztrájk", "grevă"), right: L("Waffe", "weapon", "fegyver", "armă") }, { left: L("Gewerkschaft", "union", "unió", "uniune"), right: L("Schutz", "Protection", "Védelem", "Protecţie") }] },
      quiz: { question: L("Was forderten Gewerkschaften?", "What did unions demand?", "Mit követeltek a szakszervezetek?", "Ce au cerut sindicatele?"), choices: [L("Höhere Löhne", "Higher wages", "Magasabb bérek", "Salarii mai mari"), L("Längere Arbeit", "Longer work", "Hosszabb munka", "Muncă mai lungă"), L("Mehr Steuern", "More taxes", "Több adó", "Mai multe taxe"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Höhere Löhne", "Higher wages", "Magasabb bérek", "Salarii mai mari") }
    },
    {
      id: "marx",
      title: L("Karl Marx", "Karl Marx", "Karl Marx", "Karl Marx"),
      hint1: L("Denker des Kommunismus.", "Communism thinker.", "Kommunizmus gondolkodó.", "Gânditor la comunism."),
      hint2: L("Das Kapital' und 'Manifest'.", "Capital' and 'Manifesto'.", "Capital” és „Manifesto”.", "Capital” și „Manifest”."),
      svg: { type: "icon-grid", items: [{ emoji: "📖", label: "Manifest" }, { emoji: "⚒️", label: "Symbol" }] },
      interactive: { type: "highlight-text", text: L("Proletarier aller Länder, vereinigt euch!", "Proletarians of all countries, unite!", "Minden ország proletárjai, egyesüljetek!", "Proletari din toate țările, uniți-vă!"), instruction: L("Berühmter Satz?", "Famous phrase?", "Híres mondat?", "Fraza celebră?") },
      quiz: { question: L("Was forderte Karl Marx?", "What did Karl Marx demand?", "Mit követelt Karl Marx?", "Ce a cerut Karl Marx?"), choices: [L("Klassenlose Gesellschaft", "Classless society", "Osztálytalan társadalom", "Societate fără clase"), L("Einen starken König", "A strong king", "Erős király", "Un rege puternic"), L("Mehr Klöster", "More monasteries", "Még több kolostor", "Mai multe mănăstiri"), L("Privatisierung", "privatization", "privatizáció", "privatizare")], answer: L("Klassenlose Gesellschaft", "Classless society", "Osztálytalan társadalom", "Societate fără clase") }
    },
    {
      id: "sozialversicherung",
      title: L("Bismarcks Gesetze", "Bismarck's laws", "Bismarck törvényei", "legile lui Bismarck"),
      hint1: L("Erste Krankenversicherung 1883.", "First health insurance in 1883.", "Az első egészségbiztosítás 1883-ban.", "Prima asigurare de sănătate în 1883."),
      hint2: L("Schutz gegen Krankheiten und Unfälle.", "Protection against illness and accidents.", "Betegségek és balesetek elleni védelem.", "Protecție împotriva bolilor și accidentelor."),
      svg: { type: "text-bubbles", items: [{ text: "Krankheit", color: "#fff", bg: "#7c3aed" }, { text: "Geld", color: "#fff", bg: "#6d28d9" }, { text: "Alter", color: "#fff", bg: "#7c3aed" }, { text: "Rente", color: "#fff", bg: "#6d28d9" }] },
      interactive: { type: "tap-count", count: 3, instruction: L("Wie viele große Versicherungen (Kranken, Unfall, Rente)?", "How many major insurance policies (health, accident, pension)?", "Hány főbb biztosítás (egészségügyi, baleseti, nyugdíjas)?", "Câte polițe de asigurare majore (sănătate, accident, pensie)?") },
      quiz: { question: L("Wer führte die Sozialversicherung ein?", "Who introduced social security?", "Ki vezette be a társadalombiztosítást?", "Cine a introdus securitatea socială?"), choices: [L("Bismarck", "Bismarck", "Bismarck", "Bismarck"), L("Napoleon", "Napoleon", "Napóleon", "Napoleon"), L("Marx", "Marx", "Marx", "Marx"), L("Hitler", "Hitler", "Hitler", "Hitler")], answer: L("Bismarck", "Bismarck", "Bismarck", "Bismarck") }
    },
    {
      id: "mietskaserne",
      title: L("Mietskasernen", "Tenements", "Bérházak", "Locuri de locuit"),
      hint1: L("Enge, dunkle Wohnungen.", "Cramped, dark apartments.", "Szűk, sötét lakások.", "Apartamente înghesuite, întunecate."),
      hint2: L("Oft viele Menschen in einem Zimmer.", "Often many people in one room.", "Gyakran sok ember egy szobában.", "Adesea mulți oameni într-o cameră."),
      svg: { type: "icon-grid", items: [{ emoji: "🏚️", label: "Hinterhof" }] },
      interactive: { type: "gap-fill", text: L("Es war eng und __.", "It was tight and __.", "Szoros volt és __.", "A fost strâns și __."), gaps: [{ index: 0, options: ["ungesund", "luxuriös"], correct: 0 }] },
      quiz: { question: L("Wie nannte man die Arbeiterhäuser?", "What were the workers' houses called?", "Hogy hívták a munkásházakat?", "Cum se numeau casele muncitorilor?"), choices: [L("Mietskasernen", "Tenements", "Bérházak", "Locuri de locuit"), L("Villen", "Villas", "Villák", "Vile"), L("Schlösser", "Castles", "Várak", "castele"), L("Hotels", "Hotels", "Szállodák", "Hoteluri")], answer: L("Mietskasernen", "Tenements", "Bérházak", "Locuri de locuit") }
    },
    {
      id: "streik",
      title: L("Der Streik", "The strike", "A sztrájkot", "Greva"),
      hint1: L("Arbeitsniederlegung als Protest.", "Work stoppage as a protest.", "A munkabeszüntetés tiltakozásként.", "Oprirea muncii ca protest."),
      hint2: L("Druckmittel gegen Fabrikherren.", "Means of pressure against factory owners.", "A nyomásgyakorlás eszközei a gyártulajdonosok ellen.", "Mijloace de presiune împotriva proprietarilor de fabrici."),
      svg: { type: "text-bubbles", items: [{ text: "Halt", color: "#fff", bg: "#dc2626" }, { text: "Protest", color: "#fff", bg: "#ea580c" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Methoden", "Methods", "Mód", "Metode"), items: [L("Streik", "strike", "sztrájk", "grevă"), L("Demos", "Demos", "Demos", "Demo-uri")] }] },
      quiz: { question: L("Was passiert bei einem Streik?", "What happens during a strike?", "Mi történik a sztrájk során?", "Ce se întâmplă în timpul unei greve?"), choices: [L("Arbeit ruht", "Work rests", "A munka pihen", "Munca se odihnește"), L("Arbeit wird schneller", "Work gets faster", "A munka gyorsabbá válik", "Munca devine mai rapidă"), L("Man geht wandern", "You go hiking", "Menj túrázni", "Te duci la drumeții"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Arbeit ruht", "Work rests", "A munka pihen", "Munca se odihnește") }
    },
    {
      id: "sozialismus",
      title: L("Sozialismus", "socialism", "szocializmus", "socialism"),
      hint1: L("Gleichheit und soziale Gerechtigkeit.", "Equality and social justice.", "Egyenlőség és társadalmi igazságosság.", "Egalitate și justiție socială."),
      hint2: L("Staat soll Wirtschaft lenken.", "The state should manage the economy.", "Az államnak kellene irányítania a gazdaságot.", "Statul ar trebui să gestioneze economia."),
      svg: { type: "word-display", word: "Gleichheit", color: "#991b1b" },
      interactive: { type: "lang-mcq", question: L("Was will der Sozialismus?", "What does socialism want?", "Mit akar a szocializmus?", "Ce vrea socialismul?"), choices: [L("Soziale Sicherheit", "Social Security", "Társadalombiztosítás", "Securitate Socială"), L("Absolute Monarchie", "Absolute monarchy", "Abszolút monarchia", "Monarhie absolută"), L("Sklaverei", "slavery", "rabszolgaság", "robie")], answer: L("Soziale Sicherheit", "Social Security", "Társadalombiztosítás", "Securitate Socială") },
      quiz: { question: L("Was will der Sozialismus?", "What does socialism want?", "Mit akar a szocializmus?", "Ce vrea socialismul?"), choices: [L("Soziale Sicherheit", "Social Security", "Társadalombiztosítás", "Securitate Socială"), L("Absolute Monarchie", "Absolute monarchy", "Abszolút monarchia", "Monarhie absolută"), L("Sklaverei", "slavery", "rabszolgaság", "robie"), L("Feudalismus", "feudalism", "feudalizmus", "feudalism")], answer: L("Soziale Sicherheit", "Social Security", "Társadalombiztosítás", "Securitate Socială") }
    },
    {
      id: "hygiene",
      title: L("Hygiene & Medizin", "Hygiene & Medicine", "Higiénia és orvostudomány", "Igienă și medicină"),
      hint1: L("Kampf gegen Krankheiten.", "Fight against diseases.", "Küzdelem a betegségek ellen.", "Lupta împotriva bolilor."),
      hint2: L("Robert Koch und Bakterien.", "Robert Koch and bacteria.", "Robert Koch és a baktériumok.", "Robert Koch și bacterii."),
      svg: { type: "icon-grid", items: [{ emoji: "🔬", label: "Mikroskop" }, { emoji: "🧼", label: "Sauberkeit" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Koch", "Cook", "Szakács", "Bucătar"), right: L("Bakterien", "bacteria", "baktériumok", "bacterii") }, { left: L("Seife", "Soap", "Szappan", "Săpun"), right: L("Sauberkeit", "cleanliness", "tisztaság", "curăţenie") }] },
      quiz: { question: L("Wer erforschte Bakterien?", "Who researched bacteria?", "Ki kutatta a baktériumokat?", "Cine a cercetat bacteriile?"), choices: [L("Robert Koch", "Robert Cook", "Robert Cook", "Robert Cook"), L("James Watt", "James Watts", "James Watts", "James Watts"), L("Bismarck", "Bismarck", "Bismarck", "Bismarck"), L("Napoleon", "Napoleon", "Napóleon", "Napoleon")], answer: L("Robert Koch", "Robert Cook", "Robert Cook", "Robert Cook") }
    },
    {
      id: "telekommunikation",
      title: L("Das Telefon", "The phone", "A telefon", "Telefonul"),
      hint1: L("Schnelle Übermittlung von Tönen.", "Fast transmission of tones.", "Hangok gyors átvitele.", "Transmitere rapidă a tonurilor."),
      hint2: L("Graham Bell.", "Graham Bell.", "Graham Bell.", "Graham Bell."),
      svg: { type: "icon-grid", items: [{ emoji: "📞", label: "Telefon" }] },
      interactive: { type: "gap-fill", text: L("Erfinder: Graham __.", "Inventor: Graham __.", "Feltaláló: Graham __.", "Inventatorul: Graham __."), gaps: [{ index: 0, options: ["Bell", "Edison"], correct: 0 }] },
      quiz: { question: L("Was erfand Graham Bell?", "What did Graham Bell invent?", "Mit talált fel Graham Bell?", "Ce a inventat Graham Bell?"), choices: [L("Telefon", "phone", "telefon", "telefon"), L("Auto", "car", "autó", "masina"), L("Radio", "radio", "rádió", "radio"), L("Dampfschiff", "Steamboat", "Gőzhajó", "barca cu aburi")], answer: L("Telefon", "phone", "telefon", "telefon") }
    },
    {
      id: "gluehbirne",
      title: L("Die Glühbirne", "The light bulb", "A villanykörte", "Becul"),
      hint1: L("Licht durch Elektrizität.", "Light through electricity.", "Fény elektromosságon keresztül.", "Lumina prin electricitate."),
      hint2: L("Thomas Edison.", "Thomas Edison.", "Thomas Edison.", "Thomas Edison."),
      svg: { type: "text-bubbles", items: [{ text: "Licht", color: "#fff", bg: "#fde047" }, { text: "Strom", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "tap-count", count: 1, instruction: L("Wie viele Fäden glühen?", "How many threads glow?", "Hány szál világít?", "Câte fire strălucesc?") },
      quiz: { question: L("Wer erfand die Glühbirne?", "Who invented the light bulb?", "Ki találta fel az izzót?", "Cine a inventat becul?"), choices: [L("Thomas Edison", "Thomas Edison", "Thomas Edison", "Thomas Edison"), L("James Watt", "James Watts", "James Watts", "James Watts"), L("Karl Marx", "Karl Marx", "Karl Marx", "Karl Marx"), L("Bismarck", "Bismarck", "Bismarck", "Bismarck")], answer: L("Thomas Edison", "Thomas Edison", "Thomas Edison", "Thomas Edison") }
    },
    {
      id: "automobil",
      title: L("Das Auto", "The car", "Az autó", "Mașina"),
      hint1: L("Fahrzeug mit Verbrennungsmotor.", "Vehicle with an internal combustion engine.", "Belső égésű motorral felszerelt jármű.", "Vehicul cu motor cu ardere internă."),
      hint2: L("Carl Benz 1886.", "Carl Benz 1886.", "Carl Benz 1886.", "Carl Benz 1886."),
      svg: { type: "word-display", word: "Benz", color: "#475569" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Benz", "Benz", "Benz", "Benz"), right: L("Auto", "car", "autó", "masina") }, { left: L("1886", "1886", "1886", "1886"), right: L("Patent", "patent", "szabadalom", "brevet") }] },
      quiz: { question: L("Wann wurde das Auto erfunden?", "When was the car invented?", "Mikor találták fel az autót?", "Când a fost inventată mașina?"), choices: [L("1886", "1886", "1886", "1886"), L("1835", "1835", "1835", "1835"), L("1914", "1914", "1914", "1914"), L("1789", "1789", "1789", "1789")], answer: L("1886", "1886", "1886", "1886") }
    },
    {
      id: "frauenarbeit",
      title: L("Frauen in der Industrie", "Women in industry", "Nők az iparban", "Femeile din industrie"),
      hint1: L("Frauen arbeiteten oft für weniger Lohn.", "Women often worked for less pay.", "A nők gyakran kevesebb fizetésért dolgoztak.", "Femeile lucrau adesea pentru un salariu mai mic."),
      hint2: L("Doppelbelastung: Haushalt und Fabrik.", "Double burden: household and factory.", "Kettős teher: háztartás és gyár.", "Sarcină dublă: gospodărie și fabrică."),
      svg: { type: "text-bubbles", items: [{ text: "Mann", color: "#fff", bg: "#2563eb" }, { text: "Mehr Lohn", color: "#fff", bg: "#3b82f6" }, { text: "Frau", color: "#fff", bg: "#db2777" }, { text: "Weniger Lohn", color: "#fff", bg: "#ec4899" }] },
      interactive: { type: "sentence-build", words: [L("Frauen", "Women", "Nők", "Femei"), L("verdienten", "earned", "szerzett", "câștigat"), L("weniger", "fewer", "kevesebbet", "mai putini"), L("als", "as", "mint", "ca"), L("Männer", "Men", "Férfiak", "Bărbați")], instruction: L("Ungerechtigkeit?", "Injustice?", "Igazságtalanság?", "Nedreptate?") },
      quiz: { question: L("Warum stellten Fabrikanten gerne Frauen ein?", "Why did manufacturers like to hire women?", "Miért szerettek a gyártók nőket felvenni?", "De ce le plăcea producătorilor să angajeze femei?"), choices: [L("Sie waren billiger", "They were cheaper", "Olcsóbbak voltak", "Erau mai ieftine"), L("Sie waren stärker", "They were stronger", "Erősebbek voltak", "Erau mai puternici"), L("Sie hatten Ferien", "They were on vacation", "Nyaralni voltak", "Erau în vacanță"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Sie waren billiger", "They were cheaper", "Olcsóbbak voltak", "Erau mai ieftine") }
    },
    {
      id: "flieszband",
      title: L("Fließbandarbeit", "Assembly line work", "Szerelősoros munka", "Lucrul pe linia de asamblare"),
      hint1: L("Zerlegung in kleine Schritte.", "Breakdown into small steps.", "Lebontás apró lépésekre.", "Defalcare în pași mici."),
      hint2: L("Später durch Henry Ford berühmt.", "Later made famous by Henry Ford.", "Később Henry Ford tette híressé.", "Mai târziu, făcut celebru de Henry Ford."),
      svg: { type: "icon-grid", items: [{ emoji: "🏭", label: "Fabrik" }, { emoji: "🔄", label: "Schritt" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Arbeit", "Work", "Munka", "Lucru"), items: [L("Monoton", "Monotone", "Monoton", "Monoton"), L("Schnell", "Fast", "Gyors", "Rapid")] }] },
      quiz: { question: L("Was ist typisch für Fließbandarbeit?", "What is typical of assembly line work?", "Mi jellemző a futószalagos munkára?", "Ce este tipic pentru lucrul pe linia de asamblare?"), choices: [L("Immer gleicher Schritt", "Always the same step", "Mindig ugyanaz a lépés", "Întotdeauna același pas"), L("Viel Abwechslung", "Lots of variety", "Sok fajta", "Multă varietate"), L("Keine Zeitvorgabe", "No time limit", "Nincs időkorlát", "Fără limită de timp"), L("Freie Wahl", "Free choice", "Szabad választás", "Liberă alegere")], answer: L("Immer gleicher Schritt", "Always the same step", "Mindig ugyanaz a lépés", "Întotdeauna același pas") }
    }
  ]
};

// ─── ISLAND 7: DIE DEUTSCHE EINIGUNG 1871 ──────────────────────────────────
const I7: IslandSpec = {
  id: "i7",
  title: L("Deutsche Einigung", "German unification", "német egyesülés", "unificarea Germaniei"),
  topics: [
    {
      id: "bismarck",
      title: L("Otto von Bismarck", "Otto von Bismarck", "Otto von Bismarck", "Otto von Bismarck"),
      hint1: L("Preußischer Ministerpräsident.", "Prussian Prime Minister.", "porosz miniszterelnök.", "prim-ministru prusac."),
      hint2: L("Einte Deutschland 'mit Eisen und Blut'.", "United Germany 'with iron and blood'.", "Egyesült Németország „vassal és vérrel”.", "Germania Unită „cu fier și sânge”."),
      svg: { type: "icon-grid", items: [{ emoji: "⚒️", label: "Eisen" }, { emoji: "🩸", label: "Blut" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Bismarck", "Bismarck", "Bismarck", "Bismarck"), right: L("Preußen", "Prussia", "Poroszország", "Prusia") }, { left: L("Kanzler", "Chancellor", "Kancellár", "Cancelar"), right: L("Reich", "Rich", "Gazdag", "Bogat") }] },
      quiz: { question: L("Wie nannte man Bismarck?", "What was Bismarck called?", "Hogy hívták Bismarckot?", "Cum se numea Bismarck?"), choices: [L("Eiserner Kanzler", "Iron Chancellor", "vaskancellár", "Cancelar de Fier"), L("Sonnenkönig", "Sun King", "Napkirály", "Regele Soarelui"), L("Der Große", "The great", "A nagy", "Cea mare"), L("Reformkönig", "Reform king", "Reformkirály", "Regele reformei")], answer: L("Eiserner Kanzler", "Iron Chancellor", "vaskancellár", "Cancelar de Fier") }
    },
    {
      id: "eisenblut",
      title: L("Eisen und Blut", "iron and blood", "vas és vér", "fier și sânge"),
      hint1: L("Bismarcks Motto für die Einigung.", "Bismarck's motto for unification.", "Bismarck mottója az egyesülésről.", "Motto-ul lui Bismarck pentru unificare."),
      hint2: L("Einigung durch Kriege.", "Unification through wars.", "Egyesítés háborúkon keresztül.", "Unirea prin războaie."),
      svg: { type: "text-bubbles", items: [{ text: "Krieg", color: "#fff", bg: "#991b1b" }, { text: "Einheit", color: "#fff", bg: "#1e3a8a" }] },
      interactive: { type: "word-order", words: [L("Nicht", "Not", "Nem", "Nu"), L("durch", "through", "keresztül", "prin"), L("Reden", "Talk", "Beszélgetés", "Vorbi"), L("sondern", "rather", "inkább", "mai degrabă"), L("Eisen", "iron", "vas", "fier"), L("und", "and", "és", "şi"), L("Blut", "blood", "vér", "sânge")], instruction: L("Das Zitat!", "The quote!", "Az idézet!", "Citatul!") },
      quiz: { question: L("Was meinte Bismarck mit 'Eisen und Blut'?", "What did Bismarck mean by 'iron and blood'?", "Mit ért Bismarck „vas és vér” alatt?", "Ce a vrut să spună Bismarck prin „fier și sânge”?"), choices: [L("Militärische Gewalt", "Military violence", "Katonai erőszak", "Violența militară"), L("Gartenarbeit", "Gardening", "Kertészkedés", "Grădinărit"), L("Kochen", "Cook", "Szakács", "Bucătar"), L("Friedliche Reden", "Peaceful speeches", "Békés beszédek", "Discursuri pașnice")], answer: L("Militärische Gewalt", "Military violence", "Katonai erőszak", "Violența militară") }
    },
    {
      id: "reichsgruendung",
      title: L("Reichsgründung 1871", "Founding of the empire in 1871", "A birodalom megalapítása 1871-ben", "Întemeierea imperiului în 1871"),
      hint1: L("Nach dem Sieg gegen Frankreich.", "After the win against France.", "A Franciaország elleni győzelem után.", "După victoria cu Franța."),
      hint2: L("Im Spiegelsaal von Versailles.", "In the Hall of Mirrors at Versailles.", "Versailles-i Tükörcsarnokban.", "În Sala Oglinzilor de la Versailles."),
      svg: { type: "icon-grid", items: [{ emoji: "🏛️", label: "Versailles" }] },
      interactive: { type: "tap-count", count: 1871, instruction: L("In welchem Jahr wurde das Reich gegründet?", "In what year was the empire founded?", "Melyik évben alakult a birodalom?", "În ce an a fost fondat imperiul?") },
      quiz: { question: L("Wo wurde das Deutsche Reich gegründet?", "Where was the German Empire founded?", "Hol alakult a Német Birodalom?", "Unde a fost fondat Imperiul German?"), choices: [L("Versailles", "Versailles", "Versailles", "Versailles"), L("Berlin", "Berlin", "Berlin", "Berlin"), L("Frankfurt", "Frankfurt", "Frankfurt", "Frankfurt"), L("München", "Munich", "München", "Munchen")], answer: L("Versailles", "Versailles", "Versailles", "Versailles") }
    },
    {
      id: "wilhelm1",
      title: L("Wilhelm I.", "William I", "I. Vilmos", "William I"),
      hint1: L("Erster deutscher Kaiser.", "First German Emperor.", "Első német császár.", "Primul împărat german."),
      hint2: L("Vorher König von Preußen.", "Previously King of Prussia.", "Korábban Poroszország királya.", "Anterior rege al Prusiei."),
      svg: { type: "icon-grid", items: [{ emoji: "👑", label: "Kaiser" }, { emoji: "🛡️", label: "Preußen" }] },
      interactive: { type: "gap-fill", text: L("Wilhelm I. war König von __.", "William I was King of __.", "I. Vilmos __ királya volt.", "William I a fost regele __."), gaps: [{ index: 0, options: ["Preußen", "Bayern"], correct: 0 }] },
      quiz: { question: L("Wer wurde 1871 Kaiser?", "Who became emperor in 1871?", "Ki lett 1871-ben császár?", "Cine a devenit împărat în 1871?"), choices: [L("Wilhelm I.", "William I", "I. Vilmos", "William I"), L("Friedrich III.", "Frederick III", "Frigyes III", "Frederic al III-lea"), L("Bismarck", "Bismarck", "Bismarck", "Bismarck"), L("Napoleon III.", "Napoleon III", "Napóleon III", "Napoleon al III-lea")], answer: L("Wilhelm I.", "William I", "I. Vilmos", "William I") }
    },
    {
      id: "elsaßlothringen",
      title: L("Elsass-Lothringen", "Alsace-Lorraine", "Elzász-Lotaringia", "Alsacia-Lorena"),
      hint1: L("Gebiet, das 1871 an Deutschland fiel.", "Territory that fell to Germany in 1871.", "Az 1871-ben Németországhoz tartozó terület.", "Teritoriu care a căzut Germaniei în 1871."),
      hint2: L("Grund für lange Feindschaft mit Frankreich.", "Reason for long enmity with France.", "A Franciaországgal való hosszas ellenségeskedés oka.", "Motiv pentru îndelung dușmănie cu Franța."),
      svg: { type: "text-bubbles", items: [{ text: "Land", color: "#fff", bg: "#475569" }, { text: "Streit", color: "#fff", bg: "#dc2626" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Elsass", "Alsace", "Elzász", "Alsacia"), right: L("Straßburg", "Strasbourg", "Strasbourg", "Strasbourg") }, { left: L("Gewinn", "Profit", "Nyereség", "Profit"), right: L("1871", "1871", "1871", "1871") }] },
      quiz: { question: L("Welches Gebiet verlor Frankreich 1871?", "What territory did France lose in 1871?", "Milyen területet veszített Franciaország 1871-ben?", "Ce teritoriu a pierdut Franța în 1871?"), choices: [L("Elsass-Lothringen", "Alsace-Lorraine", "Elzász-Lotaringia", "Alsacia-Lorena"), L("Paris", "Paris", "Párizs", "Paris"), L("Normandie", "Normandy", "Normandia", "Normandia"), L("Bretagne", "Brittany", "Bretagne", "Bretania")], answer: L("Elsass-Lothringen", "Alsace-Lorraine", "Elzász-Lotaringia", "Alsacia-Lorena") }
    },
    {
      id: "kulturkampf",
      title: L("Kulturkampf", "Culture clash", "Kultúra összecsapása", "Ciocnire culturală"),
      hint1: L("Konflikt zwischen Staat und Kirche.", "Conflict between church and state.", "Konfliktus egyház és állam között.", "Conflict între biserică și stat."),
      hint2: L("Bismarck gegen den Papst.", "Bismarck against the Pope.", "Bismarck a pápa ellen.", "Bismarck împotriva Papei."),
      svg: { type: "text-bubbles", items: [{ text: "Bismarck", color: "#fff", bg: "#475569" }, { text: "Staat", color: "#fff", bg: "#64748b" }, { text: "Papst", color: "#fff", bg: "#7c3aed" }, { text: "Kirche", color: "#fff", bg: "#6d28d9" }] },
      interactive: { type: "lang-mcq", question: L("Gegen wen richtete sich der Kulturkampf?", "Who was the culture war against?", "Ki ellen volt a kultúrharc?", "Împotriva cui a fost războiul cultural?"), choices: [L("Katholische Kirche", "Catholic Church", "Katolikus Egyház", "Biserica Catolică"), L("Bauern", "farmers", "gazdálkodók", "fermierii"), L("Händler", "Dealer", "Kereskedő", "Dealer")], answer: L("Katholische Kirche", "Catholic Church", "Katolikus Egyház", "Biserica Catolică") },
      quiz: { question: L("Gegen wen richtete sich der Kulturkampf?", "Who was the culture war against?", "Ki ellen volt a kultúrharc?", "Împotriva cui a fost războiul cultural?"), choices: [L("Katholische Kirche", "Catholic Church", "Katolikus Egyház", "Biserica Catolică"), L("Bauern", "farmers", "gazdálkodók", "fermierii"), L("Händler", "Dealer", "Kereskedő", "Dealer"), L("Armee", "army", "hadsereg", "armată")], answer: L("Katholische Kirche", "Catholic Church", "Katolikus Egyház", "Biserica Catolică") }
    },
    {
      id: "sozialistengesetze",
      title: L("Sozialistengesetze", "Socialist laws", "Szocialista törvények", "Legile socialiste"),
      hint1: L("Verbot von sozialistischen Parteien.", "Ban on socialist parties.", "A szocialista pártok betiltása.", "Interzicerea partidelor socialiste."),
      hint2: L("Angst vor Revolution der Arbeiter.", "Fear of workers' revolution.", "A munkásforradalomtól való félelem.", "Frica de revoluția muncitorească."),
      svg: { type: "word-display", word: "Verbot", color: "#991b1b" },
      interactive: { type: "gap-fill", text: L("Bismarck verbot die __.", "Bismarck banned the __.", "Bismarck betiltotta a __.", "Bismarck a interzis __."), gaps: [{ index: 0, options: ["Sozialisten", "Könige"], correct: 0 }] },
      quiz: { question: L("Warum gab es die Sozialistengesetze?", "Why did the socialist laws exist?", "Miért léteztek a szocialista törvények?", "De ce au existat legile socialiste?"), choices: [L("Angst vor Umsturz", "Fear of overthrow", "Félelem a megdöntéstől", "Frica de răsturnare"), L("Geldmangel", "Lack of money", "Pénz hiánya", "Lipsa banilor"), L("Umweltgründe", "Environmental reasons", "Környezetvédelmi okok", "Motive de mediu"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Angst vor Umsturz", "Fear of overthrow", "Félelem a megdöntéstől", "Frica de răsturnare") }
    },
    {
      id: "buendnispolitik",
      title: L("Bündnispolitik", "Alliance politics", "Szövetségi politika", "Politica Alianței"),
      hint1: L("Bismarck wollte Frankreich isolieren.", "Bismarck wanted to isolate France.", "Bismarck el akarta szigetelni Franciaországot.", "Bismarck dorea să izoleze Franța."),
      hint2: L("Sicherung des Friedens durch Verträge.", "Securing peace through treaties.", "A béke biztosítása szerződésekkel.", "Asigurarea păcii prin tratate."),
      svg: { type: "text-bubbles", items: [{ text: "Vertrag", color: "#fff", bg: "#16a34a" }, { text: "Schutz", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Zweibund", "Dual alliance", "Kettős szövetség", "Alianță dublă"), right: L("Österreich", "Austria", "Ausztria", "Austria") }, { left: L("Rückvers.", "Reverse", "Fordított", "Verso"), right: L("Russland", "Russia", "Oroszország", "Rusia") }] },
      quiz: { question: L("Was war Bismarcks Ziel in Europa?", "What was Bismarck's goal in Europe?", "Mi volt Bismarck célja Európában?", "Care a fost scopul lui Bismarck în Europa?"), choices: [L("Frieden sichern", "Secure peace", "Biztonságos béke", "Pace asigurată"), L("Frankreich stärken", "Strengthen France", "Franciaország erősítése", "Întărește Franța"), L("Krieg gegen alle", "War against everyone", "Háború mindenki ellen", "Război împotriva tuturor"), L("Urlaub", "Vacation", "Vakáció", "Vacanţă")], answer: L("Frieden sichern", "Secure peace", "Biztonságos béke", "Pace asigurată") }
    },
    {
      id: "sedan",
      title: L("Schlacht von Sedan", "Battle of Sedan", "Sedani csata", "Bătălia de la Sedan"),
      hint1: L("Entscheidender Sieg 1870.", "Decisive victory in 1870.", "Döntő győzelem 1870-ben.", "Victorie decisivă în 1870."),
      hint2: L("Napoleon III. wurde gefangen.", "Napoleon III was caught.", "III. Napóleont elkapták.", "Napoleon al III-lea a fost prins."),
      svg: { type: "icon-grid", items: [{ emoji: "🏆", label: "Sieg" }] },
      interactive: { type: "tap-count", count: 1, instruction: L("Wie viele Kaiser wurden gefangen?", "How many emperors were captured?", "Hány császárt fogtak el?", "Câți împărați au fost capturați?") },
      quiz: { question: L("Welche Schlacht entschied den Krieg 1870?", "Which battle decided the war of 1870?", "Melyik csata döntötte el az 1870-es háborút?", "Care bătălie a decis războiul din 1870?"), choices: [L("Sedan", "Sedan", "Szedán", "Sedan"), L("Waterloo", "Waterloo", "Waterloo", "Waterloo"), L("Leipzig", "Leipzig", "Lipcse", "Leipzig"), L("Stalingrad", "Stalingrad", "Sztálingrád", "Stalingrad")], answer: L("Sedan", "Sedan", "Szedán", "Sedan") }
    },
    {
      id: "norddeutscherbund",
      title: L("Norddeutscher Bund", "North German Confederation", "Északnémet Konföderáció", "Confederația Germaniei de Nord"),
      hint1: L("Vorstufe zum Kaiserreich.", "Precursor to the Empire.", "A Birodalom előfutára.", "Precursor al Imperiului."),
      hint2: L("Gegründet nach 1866.", "Founded after 1866.", "1866 után alapították.", "Fondată după 1866."),
      svg: { type: "text-bubbles", items: [{ text: "Preußen", color: "#fff", bg: "#1e3a8a" }, { text: "Führung", color: "#fff", bg: "#2563eb" }, { text: "Norden", color: "#fff", bg: "#1e3a8a" }, { text: "Einheit", color: "#fff", bg: "#2563eb" }] },
      interactive: { type: "word-order", words: [L("Bund", "Federal", "Szövetségi", "Federal"), L("der", "the", "a", "cel"), L("nördlichen", "northern", "északi", "de nord"), L("Staaten", "States", "államok", "state")], instruction: L("Was war es?", "What was it?", "Mi volt az?", "Ce a fost?") },
      quiz: { question: L("Wer führte den Norddeutschen Bund an?", "Who led the North German Confederation?", "Ki vezette az Északnémet Konföderációt?", "Cine a condus Confederația Germaniei de Nord?"), choices: [L("Preußen", "Prussia", "Poroszország", "Prusia"), L("Bayern", "Bavaria", "Bajorország", "Bavaria"), L("Sachsen", "Saxony", "Szászország", "Saxonia"), L("Hessen", "Hesse", "Hesse", "Hesse")], answer: L("Preußen", "Prussia", "Poroszország", "Prusia") }
    },
    {
      id: "koeniggraetz",
      title: L("Königgrätz 1866", "Königgrätz 1866", "Königgrätz 1866", "Königgrätz 1866"),
      hint1: L("Preußen besiegt Österreich.", "Prussia defeats Austria.", "Poroszország legyőzi Ausztriát.", "Prusia învinge Austria."),
      hint2: L("Entscheidung um die Führung in Deutschland.", "Decision about leadership in Germany.", "Döntés a németországi vezetésről.", "Decizie privind conducerea în Germania."),
      svg: { type: "icon-grid", items: [{ emoji: "⚔️", label: "Bruderkrieg" }, { emoji: "🥇", label: "Preußen" }] },
      interactive: { type: "gap-fill", text: L("Preußen verdrängt __.", "Prussia ousts __.", "Poroszország kiszorítja __.", "Prusia îl înlătură pe __."), gaps: [{ index: 0, options: ["Österreich", "Bayern"], correct: 0 }] },
      quiz: { question: L("Was war die Folge von Königgrätz?", "What was the result of Königgrätz?", "Mi volt a Königgrätz eredménye?", "Care a fost rezultatul Königgrätz?"), choices: [L("Preußen führt", "Prussia leads", "Poroszország vezet", "Prusia conduce"), L("Österreich führt", "Austria leads", "Ausztria vezet", "Austria conduce"), L("Frieden mit allen", "Peace with everyone", "Béke mindenkivel", "Pace cu toată lumea"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Preußen führt", "Prussia leads", "Poroszország vezet", "Prusia conduce") }
    },
    {
      id: "spiegelsaal",
      title: L("Spiegelsaal", "Hall of Mirrors", "Tükrök csarnoka", "Sala Oglinzilor"),
      hint1: L("Ort der Proklamation.", "Place of proclamation.", "Kihirdetés helye.", "Locul proclamării."),
      hint2: L("Besonders demütigend für Frankreich.", "Particularly humiliating for France.", "Különösen megalázó Franciaország számára.", "Deosebit de umilitor pentru Franța."),
      svg: { type: "text-bubbles", items: [{ text: "Spiegel", color: "#fff", bg: "#fde047" }, { text: "Prunk", color: "#fff", bg: "#fbbf24" }] },
      interactive: { type: "highlight-text", text: L("Der König von Preußen wird zum Deutschen Kaiser.", "The King of Prussia becomes the German Emperor.", "Poroszország királya lesz a német császár.", "Regele Prusiei devine împărat german."), instruction: L("Was geschah?", "What happened?", "Mi történt?", "Ce s-a întâmplat?") },
      quiz: { question: L("In welchem Schloss ist der Spiegelsaal?", "In which castle is the Hall of Mirrors?", "Melyik kastélyban található a Tükörcsarnok?", "În ce castel se află Sala Oglinzilor?"), choices: [L("Versailles", "Versailles", "Versailles", "Versailles"), L("Berlin", "Berlin", "Berlin", "Berlin"), L("Neuschwanstein", "Neuschwanstein", "Neuschwanstein", "Neuschwanstein"), L("Sanssouci", "Sanssouci", "Sanssouci", "Sanssouci")], answer: L("Versailles", "Versailles", "Versailles", "Versailles") }
    },
    {
      id: "dreiklassenwahl",
      title: L("Dreiklassenwahlrecht", "Three-class voting rights", "Három osztályú szavazati jog", "Drepturi de vot în trei clase"),
      hint1: L("Wahlsystem in Preußen.", "Electoral system in Prussia.", "Választási rendszer Poroszországban.", "Sistemul electoral din Prusia."),
      hint2: L("Reiche hatten mehr Stimmen.", "Rich people had more votes.", "A gazdagok több szavazatot kaptak.", "Oamenii bogați au avut mai multe voturi."),
      svg: { type: "text-bubbles", items: [{ text: "Reich", color: "#fff", bg: "#b45309" }, { text: "Viel Macht", color: "#fff", bg: "#d97706" }, { text: "Arm", color: "#fff", bg: "#475569" }, { text: "Wenig Macht", color: "#fff", bg: "#64748b" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Stimmen", "Voices", "Hangok", "Voci"), items: [L("Klasse 1", "Class 1", "1. osztály", "Clasa 1"), L("Klasse 2", "Class 2", "2. osztály", "Clasa 2"), L("Klasse 3", "Class 3", "3. osztály", "Clasa 3")] }] },
      quiz: { question: L("Wer hatte beim Dreiklassenwahlrecht am meisten Macht?", "Who had the most power in three-class voting?", "Kinek volt a legnagyobb hatalma a háromosztályos szavazásban?", "Cine a avut cea mai mare putere în votul în trei clase?"), choices: [L("Die Reichen", "The rich", "A gazdagok", "Cei bogați"), L("Die Armen", "The poor", "A szegények", "Săracii"), L("Die Bauern", "The farmers", "A gazdák", "Fermierii"), L("Niemand", "No one", "Senki", "Nici unul")], answer: L("Die Reichen", "The rich", "A gazdagok", "Cei bogați") }
    },
    {
      id: "nationalhymne",
      title: L("Lied der Deutschen", "Song of the Germans", "A németek dala", "Cântecul germanilor"),
      hint1: L("1841 von Fallersleben geschrieben.", "Written by Fallersleben in 1841.", "Fallersleben írta 1841-ben.", "Scrisă de Fallersleben în 1841."),
      hint2: L("Wunsch nach Einheit.", "Desire for unity.", "Az egység vágya.", "Dorinta de unitate."),
      svg: { type: "word-display", word: "Helgoland", color: "#0284c7" },
      interactive: { type: "sentence-build", words: [L("Einigkeit", "unity", "egység", "unitate"), L("und", "and", "és", "şi"), L("Recht", "Right", "Jobbra", "Corect"), L("und", "and", "és", "şi"), L("Freiheit", "Freedom", "Szabadság", "Libertate")], instruction: L("Beginn der Hymne?", "Start of the anthem?", "A himnusz kezdete?", "Începutul imnului?") },
      quiz: { question: L("Wer schrieb das Lied der Deutschen?", "Who wrote the German song?", "Ki írta a német dalt?", "Cine a scris cântecul german?"), choices: [L("Fallersleben", "Fallersleben", "Fallersleben", "Fallersleben"), L("Goethe", "Goethe", "Goethe", "Goethe"), L("Schiller", "Schiller", "Schiller", "Schiller"), L("Bismarck", "Bismarck", "Bismarck", "Bismarck")], answer: L("Fallersleben", "Fallersleben", "Fallersleben", "Fallersleben") }
    },
    {
      id: "proklamation",
      title: L("Proklamation", "proclamation", "kiáltvány", "proclamare"),
      hint1: L("Ausrufung des Kaisers.", "Proclamation of the Emperor.", "A császár kiáltványa.", "Proclamarea Împăratului."),
      hint2: L("18. Januar 1871.", "January 18, 1871.", "1871. január 18.", "18 ianuarie 1871."),
      svg: { type: "icon-grid", items: [{ emoji: "📅", label: "18. Jan" }, { emoji: "📣", label: "Ruf" }] },
      interactive: { type: "tap-count", count: 18, instruction: L("An welchem Tag im Januar?", "On which day in January?", "Január melyik napján?", "In ce zi din ianuarie?") },
      quiz: { question: L("An welchem Tag wurde das Reich gegründet?", "On what day was the empire founded?", "Melyik napon alapították a birodalmat?", "În ce zi a fost fondat imperiul?"), choices: [L("18. Januar", "January 18th", "január 18", "18 ianuarie"), L("1. Januar", "January 1st", "január 1", "1 ianuarie"), L("4. Juli", "4th of July", "július 4", "4 iulie"), L("24. Dezember", "December 24th", "december 24", "24 decembrie")], answer: L("18. Januar", "January 18th", "január 18", "18 ianuarie") }
    }
  ]
};

// ─── ISLAND 8: IMPERIALISMUS & KOLONIALISMUS ───────────────────────────────
const I8: IslandSpec = {
  id: "i8",
  title: L("Imperialismus", "imperialism", "imperializmus", "imperialism"),
  topics: [
    {
      id: "weltmacht",
      title: L("Platz an der Sonne", "Place in the sun", "Helyezze a napfénybe", "Așezați la soare"),
      hint1: L("Deutscher Wunsch nach Weltmacht.", "German desire for world power.", "A német világhatalom utáni vágy.", "Dorința germană de putere mondială."),
      hint2: L("Forderung nach eigenen Kolonien.", "Demand for their own colonies.", "Saját kolóniák iránti kereslet.", "Cererea pentru propriile colonii."),
      svg: { type: "icon-grid", items: [{ emoji: "☀️", label: "Sonne" }, { emoji: "🌍", label: "Welt" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Platz", "Place", "Hely", "Loc"), right: L("Sonne", "Sun", "Nap", "Soare") }, { left: L("Kolonie", "colony", "kolónia", "colonie"), right: L("Macht", "Power", "Hatalom", "Putere") }] },
      quiz: { question: L("Was meint 'Platz an der Sonne'?", "What does 'place in the sun' mean?", "Mit jelent az, hogy „hely a napon”?", "Ce înseamnă „loc la soare”?"), choices: [L("Weltmachtanspruch", "Claim to world power", "Igyekezzen a világhatalomra", "Pretinde la puterea mondială"), L("Urlaub am Strand", "Beach vacation", "Tengerparti nyaralás", "Vacanta la plaja"), L("Gartenbau", "horticulture", "kertészet", "horticultură"), L("Astronomie", "astronomy", "csillagászat", "astronomie")], answer: L("Weltmachtanspruch", "Claim to world power", "Igyekezzen a világhatalomra", "Pretinde la puterea mondială") }
    },
    {
      id: "afrika",
      title: L("Wettlauf um Afrika", "Race for Africa", "Verseny Afrikáért", "Cursa pentru Africa"),
      hint1: L("Aufteilung Afrikas unter Europa.", "Division of Africa among Europe.", "Afrika felosztása Európa között.", "Împărțirea Africii între Europa."),
      hint2: L("Konferenz in Berlin 1884.", "Conference in Berlin 1884.", "Konferencia Berlinben 1884.", "Conferință de la Berlin 1884."),
      svg: { type: "icon-grid", items: [{ emoji: "🌍", label: "Afrika" }] },
      interactive: { type: "gap-fill", text: L("Die Mächte zogen __.", "The powers pulled __.", "A hatalmak __-t húztak.", "Puterile au tras __."), gaps: [{ index: 0, options: ["Grenzen", "Schiffe"], correct: 0 }] },
      quiz: { question: L("Wo wurde Afrika aufgeteilt?", "Where was Africa divided?", "Hol osztották fel Afrikát?", "Unde a fost împărțită Africa?"), choices: [L("Berlin", "Berlin", "Berlin", "Berlin"), L("Paris", "Paris", "Párizs", "Paris"), L("London", "London", "London", "Londra"), L("Rom", "Rome", "Róma", "Roma")], answer: L("Berlin", "Berlin", "Berlin", "Berlin") }
    },
    {
      id: "rohstoffe",
      title: L("Rohstoffraub", "Robbery of raw materials", "Nyersanyag rablás", "Jaf de materii prime"),
      hint1: L("Kolonien lieferten billige Waren.", "Colonies provided cheap goods.", "A kolóniák olcsó árut biztosítottak.", "Coloniile furnizează bunuri ieftine."),
      hint2: L("Gummi, Gold und Kakao.", "Rubber, gold and cocoa.", "Gumi, arany és kakaó.", "Cauciuc, aur și cacao."),
      svg: { type: "text-bubbles", items: [{ text: "Kolonie", color: "#fff", bg: "#3b82f6" }, { text: "Rohstoff", color: "#fff", bg: "#6366f1" }, { text: "Europa", color: "#fff", bg: "#3b82f6" }, { text: "Fabrik", color: "#fff", bg: "#6366f1" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Waren", "Were", "Voltak", "Au fost"), items: [L("Gold", "Gold", "Arany", "Aur"), L("Gummi", "rubber", "gumi", "cauciuc")] }] },
      quiz: { question: L("Was holten die Europäer aus Kolonien?", "What did Europeans get from colonies?", "Mit kaptak az európaiak a gyarmatoktól?", "Ce au primit europenii de la colonii?"), choices: [L("Rohstoffe", "raw materials", "nyersanyagok", "materii prime"), L("Fertige Autos", "Finished cars", "Kész autók", "Mașini terminate"), L("Computer", "computer", "számítógép", "calculator"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Rohstoffe", "raw materials", "nyersanyagok", "materii prime") }
    },
    {
      id: "herero",
      title: L("Herero-Aufstand", "Herero uprising", "Herero felkelés", "Revolta Herero"),
      hint1: L("Widerstand gegen deutsche Herrschaft.", "Resistance to German rule.", "Ellenállás a német uralom ellen.", "Rezistența la stăpânirea germană."),
      hint2: L("Grausame Niederschlagung.", "Cruel crackdown.", "Kegyetlen leverés.", "Reprima crudă."),
      svg: { type: "text-bubbles", items: [{ text: "1904", color: "#fff", bg: "#991b1b" }, { text: "Namibia", color: "#fff", bg: "#475569" }] },
      interactive: { type: "highlight-text", text: L("Der Aufstand der Herero wurde gewaltsam beendet.", "The Herero uprising was ended violently.", "A Herero-felkelés erőszakkal véget ért.", "Revolta Herero a fost încheiată violent."), instruction: L("Was geschah?", "What happened?", "Mi történt?", "Ce s-a întâmplat?") },
      quiz: { question: L("In welcher Kolonie war der Aufstand?", "In which colony was the rebellion?", "Melyik kolónián volt a lázadás?", "În ce colonie a avut loc rebeliunea?"), choices: [L("Deutsch-Südwestafrika", "German Southwest Africa", "Német Délnyugat-Afrika", "Africa de Sud-Vest germană"), L("Kamerun", "Cameroon", "Kamerun", "Camerun"), L("Togo", "Togo", "Togo", "Togo"), L("China", "China", "Kína", "China")], answer: L("Deutsch-Südwestafrika", "German Southwest Africa", "Német Délnyugat-Afrika", "Africa de Sud-Vest germană") }
    },
    {
      id: "flottenbau",
      title: L("Flottenbau", "Fleet construction", "Flottaépítés", "Construcția flotei"),
      hint1: L("Deutschland baut große Kriegsschiffe.", "Germany is building large warships.", "Németország nagy hadihajókat épít.", "Germania construiește nave mari de război."),
      hint2: L("Wettlauf mit England zur See.", "Sea race with England.", "Tengeri verseny Angliával.", "Cursa pe mare cu Anglia."),
      svg: { type: "word-display", word: "Schlachtschiff", color: "#1e3a8a" },
      interactive: { type: "tap-count", count: 2, instruction: L("Wie viele Mächte (DE/GB) bauten um die Wette?", "How many powers (DE/GB) were competing?", "Hány hatalom (DE/GB) versenyzett?", "Câte puteri (DE/GB) au concurat?") },
      quiz: { question: L("Gegen wen baute Deutschland Schiffe?", "Who was Germany building ships against?", "Ki ellen épített Németország hajókat?", "Împotriva cui construia Germania nave?"), choices: [L("England", "England", "Anglia", "Anglia"), L("Russland", "Russia", "Oroszország", "Rusia"), L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII"), L("Spanien", "Spain", "Spanyolország", "Spania")], answer: L("England", "England", "Anglia", "Anglia") }
    },
    {
      id: "zivilisierung",
      title: L("Angebliche Zivilisierung", "Alleged civilization", "Állítólagos civilizáció", "Presupusă civilizație"),
      hint1: L("Europäer hielten sich für überlegen.", "Europeans thought they were superior.", "Az európaiak azt hitték, hogy jobbak.", "Europenii se credeau superiori."),
      hint2: L("Rechtfertigung für Unterdrückung.", "Justification for oppression.", "Indoklás az elnyomásra.", "Justificare pentru oprimare."),
      svg: { type: "icon-grid", items: [{ emoji: "📖", label: "Lehre" }, { emoji: "⛪", label: "Mission" }] },
      interactive: { type: "lang-mcq", question: L("Was war eine Rechtfertigung?", "What was justification?", "Mi volt az indoklás?", "Ce a fost justificarea?"), choices: [L("Zivilisierungsmission", "Civilization mission", "Civilizációs küldetés", "Misiunea civilizației"), L("Sportwettkampf", "Sports competition", "Sportverseny", "Competiție sportivă"), L("Urlaubshilfe", "Holiday help", "Ünnepi segítség", "Ajutor de vacanta")], answer: L("Zivilisierungsmission", "Civilization mission", "Civilizációs küldetés", "Misiunea civilizației") },
      quiz: { question: L("Was war eine Rechtfertigung für Kolonisierung?", "What was a justification for colonization?", "Mi indokolta a gyarmatosítást?", "Care a fost o justificare pentru colonizare?"), choices: [L("Zivilisierungsmission", "Civilization mission", "Civilizációs küldetés", "Misiunea civilizației"), L("Sportwettkampf", "Sports competition", "Sportverseny", "Competiție sportivă"), L("Urlaubshilfe", "Holiday help", "Ünnepi segítség", "Ajutor de vacanta"), L("Friedenspakt", "Peace pact", "Békeegyezmény", "Pact de pace")], answer: L("Zivilisierungsmission", "Civilization mission", "Civilizációs küldetés", "Misiunea civilizației") }
    },
    {
      id: "wilhelm2",
      title: L("Wilhelm II.", "William II", "Vilmos II", "William al II-lea"),
      hint1: L("Der letzte deutsche Kaiser.", "The last German emperor.", "Az utolsó német császár.", "Ultimul împărat german."),
      hint2: L("Er liebte Uniformen und Paraden.", "He loved uniforms and parades.", "Szerette az egyenruhákat és a felvonulásokat.", "Îi plăceau uniformele și paradele."),
      svg: { type: "text-bubbles", items: [{ text: "Kaiser", color: "#fff", bg: "#475569" }, { text: "Marine", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Wilhelm II.", "William II", "Vilmos II", "William al II-lea"), right: L("Letzter Kaiser", "Last Emperor", "Utolsó császár", "Ultimul împărat") }, { left: L("Flotte", "fleet", "flotta", "flotă"), right: L("Leidenschaft", "Passion", "Szenvedély", "Pasiune") }] },
      quiz: { question: L("Wer regierte während des Imperialismus?", "Who ruled during imperialism?", "Ki uralkodott az imperializmus idején?", "Cine a condus în timpul imperialismului?"), choices: [L("Wilhelm II.", "William II", "Vilmos II", "William al II-lea"), L("Bismarck", "Bismarck", "Bismarck", "Bismarck"), L("Wilhelm I.", "William I", "I. Vilmos", "William I"), L("Hitler", "Hitler", "Hitler", "Hitler")], answer: L("Wilhelm II.", "William II", "Vilmos II", "William al II-lea") }
    },
    {
      id: "socialdarwinism",
      title: L("Sozialdarwinismus", "Social Darwinism", "Szociáldarwinizmus", "Darwinismul social"),
      hint1: L("Recht des Stärkeren.", "Right of the strongest.", "A legerősebb joga.", "Dreptul celui mai puternic."),
      hint2: L("Falsche Anwendung von Darwins Lehre.", "Misapplication of Darwin's teachings.", "Darwin tanításainak helytelen alkalmazása.", "Aplicarea greșită a învățăturilor lui Darwin."),
      svg: { type: "text-bubbles", items: [{ text: "Stark", color: "#fff", bg: "#dc2626" }, { text: "Herrscht", color: "#fff", bg: "#b91c1c" }, { text: "Schwach", color: "#fff", bg: "#2563eb" }, { text: "Dient", color: "#fff", bg: "#1d4ed8" }] },
      interactive: { type: "gap-fill", text: L("Recht des __.", "Right of __.", "__ joga.", "Dreptul lui __."), gaps: [{ index: 0, options: ["Stärkeren", "Gerechten"], correct: 0 }] },
      quiz: { question: L("Was besagt der Sozialdarwinismus?", "What does Social Darwinism say?", "Mit mond a szociáldarwinizmus?", "Ce spune darwinismul social?"), choices: [L("Recht des Stärkeren", "Right of the strongest", "A legerősebb joga", "Dreptul celui mai puternic"), L("Alle sind gleich", "Everyone is equal", "Mindenki egyenlő", "Toți sunt egali"), L("Gott herrscht", "God rules", "Isten uralkodik", "Dumnezeu guvernează"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Recht des Stärkeren", "Right of the strongest", "A legerősebb joga", "Dreptul celui mai puternic") }
    },
    {
      id: "kolonialmaechte",
      title: L("Kolonialmächte", "colonial powers", "gyarmati hatalmak", "puterile coloniale"),
      hint1: L("England, Frankreich, Deutschland.", "England, France, Germany.", "Anglia, Franciaország, Németország.", "Anglia, Franta, Germania."),
      hint2: L("Wer hat die meisten Kolonien?", "Who has the most colonies?", "Kinek van a legtöbb kolóniája?", "Cine are cele mai multe colonii?"),
      svg: { type: "icon-grid", items: [{ emoji: "🇬🇧", label: "England" }, { emoji: "🇫🇷", label: "Frankreich" }, { emoji: "🇩🇪", label: "Deutschland" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Indien", "India", "India", "India"), right: L("England", "England", "Anglia", "Anglia") }, { left: L("Algerien", "Algeria", "Algéria", "Algeria"), right: L("Frankreich", "France", "Franciaország", "Franţa") }] },
      quiz: { question: L("Wer hatte das größte Weltreich?", "Who had the largest world empire?", "Kinek volt a világ legnagyobb birodalma?", "Cine avea cel mai mare imperiu mondial?"), choices: [L("England", "England", "Anglia", "Anglia"), L("Deutschland", "Germany", "Németország", "Germania"), L("Russland", "Russia", "Oroszország", "Rusia"), L("Japan", "Japan", "Japán", "Japonia")], answer: L("England", "England", "Anglia", "Anglia") }
    },
    {
      id: "opiumkrieg",
      title: L("Opiumkrieg", "Opium War", "Ópiumháború", "Războiul Opiului"),
      hint1: L("England gegen China.", "England against China.", "Anglia Kína ellen.", "Anglia împotriva Chinei."),
      hint2: L("Erzwungener Drogenhandel.", "Forced drug trafficking.", "Kényszer kábítószer-kereskedelem.", "Trafic forțat de droguri."),
      svg: { type: "text-bubbles", items: [{ text: "China", color: "#fff", bg: "#ea580c" }, { text: "Opium", color: "#fff", bg: "#8b5cf6" }] },
      interactive: { type: "sentence-build", words: [L("England", "England", "Anglia", "Anglia"), L("zwang", "obligation", "kötelezettség", "obligaţie"), L("China", "China", "Kína", "China"), L("zum", "for the", "a", "pentru"), L("Handel", "Trade", "Kereskedelmi", "Comerț")], instruction: L("Was geschah?", "What happened?", "Mi történt?", "Ce s-a întâmplat?") },
      quiz: { question: L("Gegen wen kämpfte China?", "Who was China fighting against?", "Ki ellen harcolt Kína?", "Contra cine lupta China?"), choices: [L("England", "England", "Anglia", "Anglia"), L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII"), L("Spanien", "Spain", "Spanyolország", "Spania"), L("Italien", "Italy", "Olaszország", "Italia")], answer: L("England", "England", "Anglia", "Anglia") }
    },
    {
      id: "boxeraufstand",
      title: L("Boxeraufstand", "Boxer Rebellion", "Boxerlázadás", "Rebeliunea Boxerului"),
      hint1: L("Chinesischer Widerstand.", "Chinese resistance.", "Kínai ellenállás.", "Rezistența chineză."),
      hint2: L("Gegen fremde Mächte.", "Against foreign powers.", "Idegen hatalmak ellen.", "Împotriva puterilor străine."),
      svg: { type: "icon-grid", items: [{ emoji: "🥊", label: "Boxer" }, { emoji: "🇨🇳", label: "China" }] },
      interactive: { type: "tap-count", count: 8, instruction: L("Wie viele Nationen (8-Nationen-Bund) kämpften?", "How many nations (8-nation league) fought?", "Hány nemzet (8 nemzeti bajnokság) harcolt?", "Câte națiuni (liga a 8 națiuni) s-au luptat?") },
      quiz: { question: L("Was wollten die 'Boxer'?", "What did the 'Boxers' want?", "Mit akartak a „bokszolók”?", "Ce au vrut „boxerii”?"), choices: [L("Ausländer vertreiben", "expel foreigners", "kiutasítani a külföldieket", "alunga străinii"), L("Sport treiben", "to do sports", "sportolni", "a face sport"), L("Tee verkaufen", "Sell ​​tea", "eladni a teát", "Vinde ceai"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Ausländer vertreiben", "expel foreigners", "kiutasítani a külföldieket", "alunga străinii") }
    },
    {
      id: "missionare",
      title: L("Missionare", "Missionaries", "Misszionáriusok", "Misionari"),
      hint1: L("Verbreitung des Christentums.", "Spread of Christianity.", "A kereszténység terjedése.", "Răspândirea creștinismului."),
      hint2: L("Oft Hand in Hand mit Soldaten.", "Often hand in hand with soldiers.", "Gyakran katonákkal kéz a kézben.", "Adesea mână în mână cu soldații."),
      svg: { type: "text-bubbles", items: [{ text: "Bibel", color: "#fff", bg: "#7c3aed" }, { text: "Glaube", color: "#fff", bg: "#6d28d9" }, { text: "Schutz", color: "#fff", bg: "#059669" }, { text: "Armee", color: "#fff", bg: "#047857" }] },
      interactive: { type: "gap-fill", text: L("Sie brachten das __.", "They brought the __.", "Elhozták a __.", "Au adus __."), gaps: [{ index: 0, options: ["Christentum", "Islam"], correct: 0 }] },
      quiz: { question: L("Was machten Missionare in Afrika?", "What did missionaries do in Africa?", "Mit csináltak a misszionáriusok Afrikában?", "Ce au făcut misionarii în Africa?"), choices: [L("Religion verbreiten", "Spread religion", "Terjeszd a vallást", "Răspândiți religia"), L("Häuser bauen", "Build houses", "Házakat építeni", "Construiți case"), L("Gar nichts", "Nothing at all", "Egyáltalán semmi", "Nimic"), L("Auto fahren", "drive a car", "autót vezetni", "conduce o mașină")], answer: L("Religion verbreiten", "Spread religion", "Terjeszd a vallást", "Răspândiți religia") }
    },
    {
      id: "eisenbahn_kolonien",
      title: L("Bahn in Afrika", "Railway in Africa", "Vasút Afrikában", "Calea ferată în Africa"),
      hint1: L("Transport von Rohstoffen zur Küste.", "Transporting raw materials to the coast.", "Nyersanyagok szállítása a tengerpartra.", "Transportul materiilor prime pe litoral."),
      hint2: L("Ausbeutung des Hinterlandes.", "Exploitation of the hinterland.", "A hátország kizsákmányolása.", "Exploatarea hinterlandului."),
      svg: { type: "icon-grid", items: [{ emoji: "⛏️", label: "Mine" }, { emoji: "🚢", label: "Hafen" }] },
      interactive: { type: "word-order", words: [L("Vom", "From the", "A", "De la"), L("Inneren", "interior", "belső", "interior"), L("zum", "for the", "a", "pentru"), L("Meer", "sea", "tenger", "mare")], instruction: L("Der Weg?", "The way?", "Az utat?", "Modul în care?") },
      quiz: { question: L("Wozu dienten die Bahnen in Kolonien?", "What were the railways used for in colonies?", "Mire használták a vasutakat a gyarmatokon?", "La ce erau folosite căile ferate în colonii?"), choices: [L("Rohstofftransport", "Raw material transport", "Nyersanyag szállítás", "Transport de materii prime"), L("Tourismus", "tourism", "idegenforgalom", "turism"), L("Zum Spaß", "For fun", "A szórakozás kedvéért", "Pentru distracție"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Rohstofftransport", "Raw material transport", "Nyersanyag szállítás", "Transport de materii prime") }
    },
    {
      id: "schutzgebiete",
      title: L("Schutzgebiete", "Protected areas", "Védett területek", "Zone protejate"),
      hint1: L("Name für deutsche Kolonien.", "Name for German colonies.", "Német gyarmatok neve.", "Nume pentru coloniile germane."),
      hint2: L("Angeblicher Schutz durch das Reich.", "Alleged protection by the Reich.", "A Birodalom állítólagos védelme.", "Pretinsa protecție din partea Reichului."),
      svg: { type: "word-display", word: "Togo", color: "#16a34a" },
      interactive: { type: "match-pairs", pairs: [{ left: L("Togo", "Togo", "Togo", "Togo"), right: L("Afrika", "Africa", "Afrika", "Africa") }, { left: L("Samoa", "Samoa", "Szamoa", "Samoa"), right: L("Südsee", "South Seas", "Déli tengerek", "Mările Sudului") }] },
      quiz: { question: L("Wie nannte Deutschland seine Kolonien?", "What did Germany call its colonies?", "Hogyan nevezte Németország gyarmatait?", "Cum și-a numit Germania coloniile?"), choices: [L("Schutzgebiete", "Protected areas", "Védett területek", "Zone protejate"), L("Ferienorte", "Holiday resorts", "Üdülőhelyek", "Stațiuni de vacanță"), L("Bundesländer", "Federal states", "Szövetségi államok", "state federale"), L("Provinzen", "Provinces", "Tartományok", "Provinciile")], answer: L("Schutzgebiete", "Protected areas", "Védett területek", "Zone protejate") }
    },
    {
      id: "nationalstolz",
      title: L("Nationalstolz", "National pride", "Nemzeti büszkeség", "Mândria națională"),
      hint1: L("Kolonien als Zeichen von Ehre.", "Colonies as a sign of honor.", "A kolóniák a becsület jeleként.", "Coloniile în semn de onoare."),
      hint2: L("Man wollte dazugehören.", "You wanted to belong.", "Te akartál tartozni.", "Ai vrut să aparții."),
      svg: { type: "text-bubbles", items: [{ text: "Ehre", color: "#fff", bg: "#fbbf24" }, { text: "Stolz", color: "#fff", bg: "#ea580c" }] },
      interactive: { type: "highlight-text", text: L("Ein Volk ohne Kolonien galt als zweitklassig.", "A people without colonies was considered second class.", "A kolóniák nélküli nép másodosztályúnak számított.", "Un popor fără colonii era considerat clasa a doua."), instruction: L("Die Meinung damals?", "The opinion at the time?", "Az akkori vélemény?", "Opinia de atunci?") },
      quiz: { question: L("Was war ein Grund für Kolonien?", "What was the reason for colonies?", "Mi volt az oka a kolóniáknak?", "Care a fost motivul coloniilor?"), choices: [L("Prestige", "Prestigious", "Tekintélyes", "Prestigioasă"), L("Geld sparen", "save money", "pénzt takarít meg", "economisi bani"), L("Umweltschutz", "Environmental protection", "Környezetvédelem", "Protecția mediului"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Prestige", "Prestigious", "Tekintélyes", "Prestigioasă") }
    }
  ]
};

// ─── ISLAND 9: DER WEG IN DEN ERSTEN WELTKRIEG ─────────────────────────────
const I9: IslandSpec = {
  id: "i9",
  title: L("Weg zum Krieg", "Road to war", "Út a háborúhoz", "Drumul către război"),
  topics: [
    {
      id: "attentat",
      title: L("Das Attentat", "The assassination attempt", "A merényletkísérlet", "Tentativa de asasinat"),
      hint1: L("Mord in Sarajevo 1914.", "Murder in Sarajevo 1914.", "Gyilkosság Szarajevóban 1914.", "Crimă la Saraievo 1914."),
      hint2: L("Österreichischer Thronfolger.", "Heir to the Austrian throne.", "Az osztrák trón örököse.", "Moștenitor al tronului Austriei."),
      svg: { type: "icon-grid", items: [{ emoji: "🔫", label: "Schuss" }, { emoji: "📅", label: "28. Juni" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Sarajevo", "Sarajevo", "Szarajevó", "Saraievo"), right: L("Ort", "Location", "Elhelyezkedés", "Locaţie") }, { left: L("Franz Ferd.", "Franz Ferd.", "Ferenc Ferd.", "Franz Ferd."), right: L("Opfer", "Victim", "Áldozat", "Victimă") }] },
      quiz: { question: L("Wo geschah das Attentat?", "Where did the attack happen?", "Hol történt a támadás?", "Unde a avut loc atacul?"), choices: [L("Sarajevo", "Sarajevo", "Szarajevó", "Saraievo"), L("Berlin", "Berlin", "Berlin", "Berlin"), L("Paris", "Paris", "Párizs", "Paris"), L("Wien", "Vienna", "Bécs", "Viena")], answer: L("Sarajevo", "Sarajevo", "Szarajevó", "Saraievo") }
    },
    {
      id: "pulverfass",
      title: L("Pulverfass Balkan", "Balkan powder keg", "Balkáni porhordó", "Butoiul de pulbere din Balcani"),
      hint1: L("Viele Konflikte in Südosteuropa.", "Many conflicts in southeastern Europe.", "Sok konfliktus Délkelet-Európában.", "Multe conflicte în sud-estul Europei."),
      hint2: L("Spannungen zwischen den Mächten.", "Tensions between powers.", "A hatalmak közötti feszültség.", "Tensiuni între puteri."),
      svg: { type: "text-bubbles", items: [{ text: "Balkan", color: "#fff", bg: "#991b1b" }, { text: "Pulver", color: "#fff", bg: "#475569" }] },
      interactive: { type: "gap-fill", text: L("Der Balkan war ein __.", "The Balkans were a __.", "A Balkán egy __.", "Balcanii au fost un __."), gaps: [{ index: 0, options: ["Pulverfass", "Spielplatz"], correct: 0 }] },
      quiz: { question: L("Wie nannte man den Balkan vor 1914?", "What were the Balkans called before 1914?", "Hogyan nevezték a Balkánt 1914 előtt?", "Cum se numeau Balcanii înainte de 1914?"), choices: [L("Pulverfass Europas", "Powder keg of Europe", "Európa porhordója", "Butoiul de pulbere al Europei"), L("Garten Europas", "Garden of Europe", "Európa kertje", "Grădina Europei"), L("Küche Europas", "Cuisine of Europe", "Európa konyhája", "Bucătăria Europei"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Pulverfass Europas", "Powder keg of Europe", "Európa porhordója", "Butoiul de pulbere al Europei") }
    },
    {
      id: "buendnissysteme",
      title: L("Bündnisse 1914", "Alliances 1914", "Szövetségek 1914", "Alianțe 1914"),
      hint1: L("Europa war in zwei Blöcke geteilt.", "Europe was divided into two blocs.", "Európát két blokkra osztották.", "Europa a fost împărțită în două blocuri."),
      hint2: L("Entente gegen Mittelmächte.", "Entente against Central Powers.", "Antant a központi hatalmak ellen.", "Antanta împotriva Puterilor Centrale."),
      svg: { type: "two-groups", left: { items: ["Deutschland", "Österreich"], bg: "#fee2e2", border: "#ef4444" }, right: { items: ["Frankreich", "Russland"], bg: "#dbeafe", border: "#2563eb" } },
      interactive: { type: "block-drag", blocks: [{ label: L("Mittelmächte", "Central Powers", "Központi Hatalmak", "Puterile centrale"), items: [L("Deutschland", "Germany", "Németország", "Germania"), L("Österreich", "Austria", "Ausztria", "Austria")] }] },
      quiz: { question: L("Wer gehörte zur Entente?", "Who belonged to the Entente?", "Kik tartoztak az antanthoz?", "Cine a aparținut Antantei?"), choices: [L("Frankreich, Russland, England", "France, Russia, England", "Franciaország, Oroszország, Anglia", "Franța, Rusia, Anglia"), L("Deutschland, Österreich", "Germany, Austria", "Németország, Ausztria", "Germania, Austria"), L("USA, China", "USA, China", "USA, Kína", "SUA, China"), L("Niemand", "No one", "Senki", "Nici unul")], answer: L("Frankreich, Russland, England", "France, Russia, England", "Franciaország, Oroszország, Anglia", "Franța, Rusia, Anglia") }
    },
    {
      id: "aufruestung",
      title: L("Wettrüsten", "arms race", "fegyverkezési verseny", "cursa înarmărilor"),
      hint1: L("Alle Mächte vergrößern ihr Heer.", "All powers are increasing their armies.", "Minden hatalom növeli seregét.", "Toate puterile își măresc armatele."),
      hint2: L("Angst vor dem Nachbarn.", "Fear of the neighbor.", "Félelem a szomszédtól.", "Frica de vecin."),
      svg: { type: "text-bubbles", items: [{ text: "Früher", color: "#fff", bg: "#16a34a" }, { text: "Wenig Waffen", color: "#fff", bg: "#15803d" }, { text: "1914", color: "#fff", bg: "#dc2626" }, { text: "Viel Waffen", color: "#fff", bg: "#b91c1c" }] },
      interactive: { type: "tap-count", count: 2, instruction: L("Wie viele große Bündnisblöcke?", "How many large alliance blocs?", "Hány nagy szövetségi blokk?", "Câte blocuri mari de alianță?") },
      quiz: { question: L("Was ist ein Wettrüsten?", "What is an arms race?", "Mi az a fegyverkezési verseny?", "Ce este o cursă a înarmărilor?"), choices: [L("Immer mehr Waffen bauen", "Building more and more weapons", "Egyre több fegyver építése", "Construind din ce în ce mai multe arme"), L("Ein sportlicher Wettkampf", "A sporting competition", "Sportverseny", "O competiție sportivă"), L("Hausbau-Wettbewerb", "House building competition", "Házépítési verseny", "Concurs de constructii case"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Immer mehr Waffen bauen", "Building more and more weapons", "Egyre több fegyver építése", "Construind din ce în ce mai multe arme") }
    },
    {
      id: "blankoscheck",
      title: L("Der Blankoscheck", "The blank check", "Az üres csekk", "Cecul în alb"),
      hint1: L("Zusage Deutschlands an Österreich.", "Germany's commitment to Austria.", "Németország elkötelezettsége Ausztria iránt.", "Angajamentul Germaniei față de Austria."),
      hint2: L("Bedingungslose Unterstützung.", "Unconditional support.", "Feltétel nélküli támogatás.", "Sprijin necondiționat."),
      svg: { type: "word-display", word: "Scheck", color: "#16a34a" },
      interactive: { type: "highlight-text", text: L("Deutschland versprach Österreich volle Hilfe.", "Germany promised Austria full help.", "Németország teljes segítséget ígért Ausztriának.", "Germania a promis Austriei ajutor complet."), instruction: L("Was war der Scheck?", "What was the check?", "Mi volt a csekk?", "Care a fost cecul?") },
      quiz: { question: L("Wem gab Deutschland den Blankoscheck?", "Who did Germany give the blank check to?", "Kinek adta ki Németország az üres csekket?", "Cui i-a dat Germania cecul în alb?"), choices: [L("Österreich", "Austria", "Ausztria", "Austria"), L("Russland", "Russia", "Oroszország", "Rusia"), L("Serbien", "Serbia", "Szerbia", "Serbia"), L("Italien", "Italy", "Olaszország", "Italia")], answer: L("Österreich", "Austria", "Ausztria", "Austria") }
    },
    {
      id: "mobilmachung",
      title: L("Mobilmachung", "mobilization", "mozgósítás", "mobilizare"),
      hint1: L("Vorbereitung der Armee auf Krieg.", "Preparing the army for war.", "A hadsereg felkészítése a háborúra.", "Pregătirea armatei pentru război."),
      hint2: L("Züge bringen Soldaten an die Grenze.", "Trains bring soldiers to the border.", "A vonatok katonákat visznek a határra.", "Trenurile aduc soldați la graniță."),
      svg: { type: "icon-grid", items: [{ emoji: "🚆", label: "Zug" }, { emoji: "🔫", label: "Soldat" }] },
      interactive: { type: "word-order", words: [L("Die", "The", "A", "The"), L("Armeen", "armies", "hadseregek", "armatelor"), L("machen", "make", "készítsenek", "face"), L("sich", "itself", "maga", "în sine"), L("bereit", "ready", "kész", "gata")], instruction: L("Was bedeutet Mobil?", "What does mobile mean?", "Mit jelent a mobil?", "Ce înseamnă mobil?") },
      quiz: { question: L("Was passiert bei der Mobilmachung?", "What happens during mobilization?", "Mi történik a mobilizáció során?", "Ce se întâmplă în timpul mobilizării?"), choices: [L("Soldaten ziehen in den Krieg", "Soldiers go to war", "A katonák háborúba indulnak", "Soldații merg la război"), L("Friedensvertrag wird unterschrieben", "Peace treaty is signed", "Békeszerződést írnak alá", "Tratatul de pace este semnat"), L("Nichts", "Nothing", "Semmi", "Nimic"), L("Urlaub beginnt", "Vacation begins", "Kezdődik a vakáció", "Începe vacanța")], answer: L("Soldaten ziehen in den Krieg", "Soldiers go to war", "A katonák háborúba indulnak", "Soldații merg la război") }
    },
    {
      id: "schlieffenplan",
      title: L("Schlieffenplan", "Schlieffen plan", "Schlieffen terv", "Planul Schlieffen"),
      hint1: L("Deutscher Plan für Zweifrontenkrieg.", "German plan for two-front war.", "A német kétfrontos háború terve.", "Plan german de război pe două fronturi."),
      hint2: L("Erst Frankreich, dann Russland.", "First France, then Russia.", "Először Franciaország, majd Oroszország.", "Mai întâi Franța, apoi Rusia."),
      svg: { type: "icon-grid", items: [{ emoji: "🇫🇷", label: "Frankreich" }, { emoji: "🇷🇺", label: "Russland" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Westen", "west", "nyugat", "vest"), right: L("Frankreich", "France", "Franciaország", "Franţa") }, { left: L("Osten", "east", "keleti", "Orientul"), right: L("Russland", "Russia", "Oroszország", "Rusia") }] },
      quiz: { question: L("Wen wollte Deutschland zuerst besiegen?", "Who did Germany want to defeat first?", "Kit akart először legyőzni Németország?", "Pe cine a vrut Germania să învingă prima?"), choices: [L("Frankreich", "France", "Franciaország", "Franţa"), L("Russland", "Russia", "Oroszország", "Rusia"), L("England", "England", "Anglia", "Anglia"), L("USA", "USA", "Egyesült Államok", "STATELE UNITE ALE AMERICII")], answer: L("Frankreich", "France", "Franciaország", "Franţa") }
    },
    {
      id: "belgien",
      title: L("Durchmarsch Belgien", "March through Belgium", "Március Belgiumon keresztül", "Marș prin Belgia"),
      hint1: L("Verletzung der Neutralität.", "Violation of neutrality.", "A semlegesség megsértése.", "Încălcarea neutralității."),
      hint2: L("Grund für Englands Kriegseintritt.", "Reason for England's entry into the war.", "Anglia háborúba lépésének oka.", "Motivul intrării Angliei în război."),
      svg: { type: "text-bubbles", items: [{ text: "Belgien", color: "#fff", bg: "#ef4444" }, { text: "Neutral", color: "#fff", bg: "#475569" }] },
      interactive: { type: "gap-fill", text: L("Deutschland marschierte durch __.", "Germany marched through __.", "Németország átvonult __.", "Germania a defilat prin __."), gaps: [{ index: 0, options: ["Belgien", "Holland"], correct: 0 }] },
      quiz: { question: L("Welches Land wurde neutral überrannt?", "Which country was neutrally overrun?", "Melyik országot támadták meg semlegesen?", "Care țară a fost depășită în mod neutru?"), choices: [L("Belgien", "Belgium", "Belgium", "Belgia"), L("Schweiz", "Switzerland", "Svájc", "Elveţia"), L("Schweden", "Sweden", "Svédország", "Suedia"), L("Spanien", "Spain", "Spanyolország", "Spania")], answer: L("Belgien", "Belgium", "Belgium", "Belgia") }
    },
    {
      id: "kriegsausbruch",
      title: L("Kriegsausbruch 1914", "Outbreak of war in 1914", "A háború kitörése 1914-ben", "Izbucnirea războiului în 1914"),
      hint1: L("Anfang August begann das Töten.", "The killing began in early August.", "A gyilkosság augusztus elején kezdődött.", "Uciderea a început la începutul lunii august."),
      hint2: L("Begeisterung bei vielen jungen Männern.", "Enthusiasm among many young men.", "Lelkesedés sok fiatal között.", "Entuziasm în rândul multor tineri."),
      svg: { type: "text-bubbles", items: [{ text: "August", color: "#fff", bg: "#991b1b" }, { text: "1914", color: "#fff", bg: "#475569" }] },
      interactive: { type: "tap-count", count: 1914, instruction: L("In welchem Jahr begann der 1. Weltkrieg?", "In which year did the First World War begin?", "Melyik évben kezdődött az első világháború?", "În ce an a început Primul Război Mondial?") },
      quiz: { question: L("Wann brach der 1. Weltkrieg aus?", "When did World War I break out?", "Mikor tört ki az első világháború?", "Când a izbucnit Primul Război Mondial?"), choices: [L("August 1914", "August 1914", "1914 augusztus", "august 1914"), L("Juli 1789", "July 1789", "1789. július", "iulie 1789"), L("Mai 1848", "May 1848", "1848 május", "mai 1848"), L("Januar 1871", "January 1871", "1871. január", "ianuarie 1871")], answer: L("August 1914", "August 1914", "1914 augusztus", "august 1914") }
    },
    {
      id: "automatisierung_tod",
      title: L("Moderner Krieg", "Modern war", "Modern háború", "Războiul modern"),
      hint1: L("Maschinengewehre und Kanonen.", "Machine guns and cannons.", "Géppuskák és ágyúk.", "Mitraliere și tunuri."),
      hint2: L("Industrielles Töten.", "Industrial killing.", "Ipari gyilkolás.", "Ucidere industrială."),
      svg: { type: "icon-grid", items: [{ emoji: "💣", label: "Bombe" }, { emoji: "🔫", label: "MG" }] },
      interactive: { type: "sentence-build", words: [L("Neue", "New", "Új", "Nou"), L("Waffen", "Weapons", "Fegyverek", "Arme"), L("töten", "kill", "megöl", "ucide"), L("viele", "many", "sok", "multe"), L("Menschen", "People", "Emberek", "Oameni")], instruction: L("Was war neu?", "What was new?", "Mi volt az új?", "Ce era nou?") },
      quiz: { question: L("Warum gab es so viele Tote?", "Why were there so many deaths?", "Miért volt annyi haláleset?", "De ce au fost atât de multe morți?"), choices: [L("Moderne Waffen", "Modern weapons", "Modern fegyverek", "Arme moderne"), L("Wenig Soldaten", "Few soldiers", "Kevés katona", "Puțini soldați"), L("Kein Essen", "No food", "Nincs kaja", "Fără mâncare"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Moderne Waffen", "Modern weapons", "Modern fegyverek", "Arme moderne") }
    },
    {
      id: "serbien",
      title: L("Österreich gegen Serbien", "Austria versus Serbia", "Ausztria kontra Szerbia", "Austria versus Serbia"),
      hint1: L("Der Funke am Balkan.", "The spark in the Balkans.", "A szikra a Balkánon.", "Scânteia în Balcani."),
      hint2: L("Ultimatum nach dem Attentat.", "Ultimatum after the assassination attempt.", "Ultimátum a merénylet után.", "Ultimatum după tentativa de asasinat."),
      svg: { type: "text-bubbles", items: [{ text: "Österreich", color: "#fff", bg: "#dc2626" }, { text: "Groß", color: "#fff", bg: "#b91c1c" }, { text: "Serbien", color: "#fff", bg: "#2563eb" }, { text: "Klein", color: "#fff", bg: "#1d4ed8" }] },
      interactive: { type: "match-pairs", pairs: [{ left: L("Wien", "Vienna", "Bécs", "Viena"), right: L("Österreich", "Austria", "Ausztria", "Austria") }, { left: L("Belgrad", "Belgrade", "Belgrád", "Belgrad"), right: L("Serbien", "Serbia", "Szerbia", "Serbia") }] },
      quiz: { question: L("Gegen wen erklärte Österreich zuerst den Krieg?", "Who did Austria declare war on first?", "Kinek üzent először hadat Ausztria?", "Cui i-a declarat Austria primul război?"), choices: [L("Serbien", "Serbia", "Szerbia", "Serbia"), L("Russland", "Russia", "Oroszország", "Rusia"), L("Frankreich", "France", "Franciaország", "Franţa"), L("England", "England", "Anglia", "Anglia")], answer: L("Serbien", "Serbia", "Szerbia", "Serbia") }
    },
    {
      id: "russlandmobil",
      title: L("Russlands Antwort", "Russia's answer", "Oroszország válasza", "Răspunsul Rusiei"),
      hint1: L("Russland hilft seinem 'Bruder' Serbien.", "Russia helps its 'brother' Serbia.", "Oroszország segíti „testvérét”, Szerbiát.", "Rusia își ajută „fratele” Serbia."),
      hint2: L("Mobilmachung im Osten.", "Mobilization in the East.", "Mozgósítás keleten.", "Mobilizarea în Est."),
      svg: { type: "word-display", word: "Schutz", color: "#1e3a8a" },
      interactive: { type: "gap-fill", text: L("Russland schützte __.", "Russia protected __.", "Oroszország védett __.", "Rusia a protejat __."), gaps: [{ index: 0, options: ["Serbien", "Polen"], correct: 0 }] },
      quiz: { question: L("Wen schützte Russland?", "Who did Russia protect?", "Kit védett Oroszország?", "Pe cine a protejat Rusia?"), choices: [L("Serbien", "Serbia", "Szerbia", "Serbia"), L("Deutschland", "Germany", "Németország", "Germania"), L("Österreich", "Austria", "Ausztria", "Austria"), L("Türkei", "Türkiye", "Türkiye", "Turcia")], answer: L("Serbien", "Serbia", "Szerbia", "Serbia") }
    },
    {
      id: "augusterlebnis",
      title: L("August-Erlebnis", "August experience", "Augusztusi tapasztalat", "Experiența din august"),
      hint1: L("Freude auf den Krieg.", "Joy of war.", "A háború öröme.", "Bucuria războiului."),
      hint2: L("Man dachte, man ist zu Weihnachten zuhause.", "You thought you would be home for Christmas.", "Azt hitted, karácsonyra otthon leszel.", "Ai crezut că vei fi acasă de Crăciun."),
      svg: { type: "icon-grid", items: [{ emoji: "🚩", label: "Stolz" }, { emoji: "🚅", label: "Abfahrt" }] },
      interactive: { type: "lang-mcq", question: L("Was dachten viele Soldaten am Anfang?", "What did many soldiers think at the beginning?", "Mit gondolt sok katona az elején?", "Ce credeau mulți soldați la început?"), choices: [L("Kurzer Krieg", "Short war", "Rövid háború", "Război scurt"), L("Langer Krieg", "Long war", "Hosszú háború", "Război lung"), L("Gar kein Krieg", "No war at all", "Egyáltalán nincs háború", "Niciun război")], answer: L("Kurzer Krieg", "Short war", "Rövid háború", "Război scurt") },
      quiz: { question: L("Was dachten viele Soldaten am Anfang?", "What did many soldiers think at the beginning?", "Mit gondolt sok katona az elején?", "Ce credeau mulți soldați la început?"), choices: [L("Kurzer Krieg", "Short war", "Rövid háború", "Război scurt"), L("Langer Krieg", "Long war", "Hosszú háború", "Război lung"), L("Gar kein Krieg", "No war at all", "Egyáltalán nincs háború", "Niciun război"), L("Frieden", "Peace", "Béke", "Pace")], answer: L("Kurzer Krieg", "Short war", "Rövid háború", "Război scurt") }
    },
    {
      id: "weltkrieg",
      title: L("Warum 'Weltkrieg'?", "Why 'World War'?", "Miért \"világháború\"?", "De ce „Războiul Mondial”?"),
      hint1: L("Krieg auf fast allen Kontinenten.", "War on almost every continent.", "Háború szinte minden kontinensen.", "Război pe aproape fiecare continent."),
      hint2: L("Beteiligung vieler Nationen.", "Participation of many nations.", "Számos nemzet részvétele.", "Participarea multor națiuni."),
      svg: { type: "text-bubbles", items: [{ text: "Erde", color: "#fff", bg: "#16a34a" }, { text: "Global", color: "#fff", bg: "#3b82f6" }] },
      interactive: { type: "highlight-text", text: L("Der Krieg umfasste fast die ganze bewohnte Welt.", "The war encompassed almost the entire inhabited world.", "A háború szinte az egész lakott világot felölelte.", "Războiul a cuprins aproape întreaga lume locuită."), instruction: L("Was bedeutet Welt?", "What does world mean?", "Mit jelent a világ?", "Ce înseamnă lume?") },
      quiz: { question: L("Warum hieß es Weltkrieg?", "Why was it called World War?", "Miért hívták világháborúnak?", "De ce s-a numit Război Mondial?"), choices: [L("Beteiligung vieler Nationen", "Participation of many nations", "Számos nemzet részvétele", "Participarea multor națiuni"), L("Nur in Europa", "Only in Europe", "Csak Európában", "Doar în Europa"), L("Nur im Meer", "Only in the sea", "Csak a tengerben", "Doar în mare"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Beteiligung vieler Nationen", "Participation of many nations", "Számos nemzet részvétele", "Participarea multor națiuni") }
    },
    {
      id: "fazit1914",
      title: L("Ende einer Epoche", "End of an era", "Egy korszak vége", "Sfârșitul unei ere"),
      hint1: L("Die alte Welt geht unter.", "The old world is ending.", "A régi világ véget ér.", "Lumea veche se termină."),
      hint2: L("Beginn des Zeitalters der Extreme.", "Beginning of the age of extremes.", "A szélsőségek korának kezdete.", "Începutul epocii extremelor."),
      svg: { type: "text-bubbles", items: [{ text: "Früher", color: "#fff", bg: "#7c3aed" }, { text: "Könige", color: "#fff", bg: "#6d28d9" }, { text: "Später", color: "#fff", bg: "#dc2626" }, { text: "Chaos", color: "#fff", bg: "#b91c1c" }] },
      interactive: { type: "block-drag", blocks: [{ label: L("Wandel", "change", "változás", "schimba"), items: [L("Ende", "End", "Vége", "Sfârşit"), L("Neuanfang", "New beginning", "Új kezdet", "Nou început")] }] },
      quiz: { question: L("Was markiert 1914 historisch?", "What marks 1914 historically?", "Mi jellemzi történelmileg 1914-et?", "Ce marchează 1914 din punct de vedere istoric?"), choices: [L("Ende des 19. Jahrhunderts", "Late 19th century", "19. század vége", "Sfârșitul secolului al XIX-lea"), L("Anfang der Römer", "Beginning of the Romans", "A rómaiak kezdete", "Începutul romanilor"), L("Entdeckung Amerikas", "Discovery of America", "Amerika felfedezése", "Descoperirea Americii"), L("Nichts", "Nothing", "Semmi", "Nimic")], answer: L("Ende des 19. Jahrhunderts", "Late 19th century", "19. század vége", "Sfârșitul secolului al XIX-lea") }
    }
  ]
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
