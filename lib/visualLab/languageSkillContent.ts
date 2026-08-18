import type { LanguageGameId, LanguageLevel } from "./languageCurriculum";
import { GERMAN_SKILL_BANK } from "./languageSkillGermanBank";

export type LanguageSkillGameId = Extract<LanguageGameId,
  "lese-detektiv" | "grammatik-scanner" | "text-retter" |
  "wort-netz" | "schreibwerkstatt" | "literatur-lupe">;
export type LanguageSkillLang = "de" | "hu" | "ro" | "en";

export interface LanguageSkillRound {
  id: string;
  gameId: LanguageSkillGameId;
  title: string;
  instruction: string;
  context: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  level: LanguageLevel;
}

type Entry = readonly [string, string, string, string, string, string];
type SkillBank = Record<LanguageSkillGameId, Entry[]>;

const TITLES: Record<LanguageSkillLang, Record<LanguageSkillGameId, string>> = {
  de: { "lese-detektiv": "Lese-Detektiv", "grammatik-scanner": "Grammatik-Scanner", "text-retter": "Text-Retter", "wort-netz": "Wort-Netz", "schreibwerkstatt": "Schreibwerkstatt", "literatur-lupe": "Literatur-Lupe" },
  hu: { "lese-detektiv": "Olvasódetektív", "grammatik-scanner": "Nyelvtanszkenner", "text-retter": "Szövegmenő", "wort-netz": "Szóháló", "schreibwerkstatt": "Íróműhely", "literatur-lupe": "Irodalmi nagyító" },
  ro: { "lese-detektiv": "Detectivul lecturii", "grammatik-scanner": "Scaner gramatical", "text-retter": "Salvatorul textului", "wort-netz": "Rețeaua cuvintelor", "schreibwerkstatt": "Atelier de scriere", "literatur-lupe": "Lupa literară" },
  en: { "lese-detektiv": "Reading Detective", "grammatik-scanner": "Grammar Scanner", "text-retter": "Text Rescuer", "wort-netz": "Word Network", "schreibwerkstatt": "Writing Workshop", "literatur-lupe": "Literature Lens" },
};

const INSTRUCTIONS: Record<LanguageSkillLang, Record<LanguageSkillGameId, string>> = {
  de: { "lese-detektiv": "Lies genau und wähle die belegte Antwort.", "grammatik-scanner": "Untersuche den markierten Ausdruck.", "text-retter": "Rette den Text mit der richtigen Form.", "wort-netz": "Finde die passende Wortbeziehung.", "schreibwerkstatt": "Wähle die klarste Formulierung.", "literatur-lupe": "Untersuche Gestaltung und Wirkung." },
  hu: { "lese-detektiv": "Olvasd el figyelmesen, és válaszd a bizonyítható választ.", "grammatik-scanner": "Vizsgáld meg a kiemelt nyelvi elemet.", "text-retter": "Válaszd ki a helyes változatot.", "wort-netz": "Találd meg a megfelelő szókapcsolatot.", "schreibwerkstatt": "Válaszd a legpontosabb megfogalmazást.", "literatur-lupe": "Vizsgáld meg a szöveg eszközeit és hatását." },
  ro: { "lese-detektiv": "Citește atent și alege răspunsul justificat.", "grammatik-scanner": "Analizează elementul evidențiat.", "text-retter": "Alege forma corectă.", "wort-netz": "Găsește relația potrivită.", "schreibwerkstatt": "Alege formularea cea mai clară.", "literatur-lupe": "Analizează mijloacele și efectul textului." },
  en: { "lese-detektiv": "Read closely and choose the supported answer.", "grammatik-scanner": "Inspect the highlighted language feature.", "text-retter": "Choose the correct version.", "wort-netz": "Find the correct word relationship.", "schreibwerkstatt": "Choose the clearest wording.", "literatur-lupe": "Examine the technique and its effect." },
};

const DE: SkillBank = {
  "lese-detektiv": [
    ["Mia füttert vor der Schule den Hund.", "Was macht Mia vor der Schule?", "Sie füttert den Hund.", "Sie schläft.", "Sie kauft ein.", "Die Handlung steht direkt im Satz."],
    ["Amir teilt seinen Schirm mit Leo, als es regnet.", "Was zeigt Amirs Verhalten?", "Er ist hilfsbereit.", "Er ist ängstlich.", "Er ist ungeduldig.", "Das Teilen zeigt Hilfsbereitschaft."],
    ["Die Bibliothek schließt früher, weil eine neue Heizung eingebaut wird.", "Warum schließt sie früher?", "Wegen des Einbaus.", "Wegen eines Feiertags.", "Weil Bücher fehlen.", "Der Grund folgt auf 'weil'."],
    ["Der Kommentar fordert mehr Bäume auf Schulhöfen und nennt Schatten und saubere Luft als Gründe.", "Was ist die Hauptabsicht?", "Für mehr Bäume zu überzeugen.", "Eine Reise zu erzählen.", "Bäume zu sortieren.", "Forderung und Gründe zeigen eine überzeugende Absicht."],
  ],
  "grammatik-scanner": [
    ["Der kleine Hund bellt.", "Welche Wortart ist 'kleine'?", "Adjektiv", "Verb", "Nomen", "Das Wort beschreibt das Nomen Hund."],
    ["Die Kinder bauen eine Burg.", "Was ist 'eine Burg'?", "Akkusativobjekt", "Subjekt", "Prädikat", "Man fragt: Was bauen die Kinder?"],
    ["Obwohl es regnete, spielten wir draußen.", "Welche Beziehung drückt 'obwohl' aus?", "Gegengrund", "Ursache", "Zweck", "Die Handlung geschieht trotz eines Hindernisses."],
    ["Der Brief wurde gestern verschickt.", "Welche Form wird verwendet?", "Passiv", "Aktiv", "Imperativ", "Der Vorgang steht im Mittelpunkt."],
  ],
  "text-retter": [
    ["morgen gehen wir ins museum.", "Welche Version ist richtig?", "Morgen gehen wir ins Museum.", "morgen gehen Wir ins museum.", "Morgen gehen wir ins museum.", "Satzanfang und Nomen werden großgeschrieben."],
    ["Wir kaufen Äpfel Birnen und Brot.", "Wo stehen die Kommas richtig?", "Wir kaufen Äpfel, Birnen und Brot.", "Wir kaufen, Äpfel Birnen und Brot.", "Wir kaufen Äpfel Birnen, und Brot.", "Aufzählungsglieder werden getrennt."],
    ["Das Fahrrad, dass dort steht, ist neu.", "Welche Version ist richtig?", "Das Fahrrad, das dort steht, ist neu.", "Das Fahrrad das, dort steht ist neu.", "Das Fahrrad, dass dort steht ist neu.", "Das Relativpronomen bezieht sich auf Fahrrad."],
    ["Wegen dem Regen fiel das Spiel aus.", "Welche Standardform ist richtig?", "Wegen des Regens fiel das Spiel aus.", "Wegen den Regen fiel das Spiel aus.", "Wegen der Regen fiel das Spiel aus.", "'wegen' steht standardsprachlich mit Genitiv."],
  ],
  "wort-netz": [
    ["fröhlich", "Welches Wort bedeutet fast dasselbe?", "heiter", "eckig", "lautlos", "'heiter' ist ein Synonym."],
    ["mutig", "Welches Wort ist das Gegenteil?", "ängstlich", "tapfer", "kühn", "'ängstlich' ist das Antonym."],
    ["fahren", "Welches Wort gehört zur Wortfamilie?", "Fahrt", "Farbe", "Faden", "'Fahrt' hat denselben Wortstamm."],
    ["jemandem den Rücken stärken", "Was bedeutet die Redewendung?", "jemanden unterstützen", "jemanden überholen", "jemanden erschrecken", "Die Wendung bedeutet Rückhalt geben."],
  ],
  "schreibwerkstatt": [
    ["Ein Hund findet einen Ball.", "Welcher Satz ist klar und vollständig?", "Der Hund findet im Garten einen roten Ball.", "Hund Ball Garten.", "Findet Ball der Hund.", "Der Satz hat Struktur und genaue Angaben."],
    ["Zwei Ereignisse", "Welche Verbindung zeigt die Reihenfolge?", "Zuerst packte Lea, danach fuhr sie los.", "Lea packte, aber danach.", "Lea packte, obwohl danach.", "'zuerst' und 'danach' ordnen die Ereignisse."],
    ["Sachliche Beschreibung", "Welche Formulierung ist am genauesten?", "Der Turm ist 32 Meter hoch und aus rotem Backstein gebaut.", "Der Turm ist irgendwie riesig.", "Der Turm ist total cool.", "Messbare Merkmale wirken sachlich."],
    ["Argument für längere Pausen", "Welche Begründung ist tragfähig?", "Mehr Bewegung kann die spätere Konzentration fördern.", "Länger ist einfach besser.", "Alle wollen es, also stimmt es.", "Die Aussage nennt einen nachvollziehbaren Zusammenhang."],
  ],
  "literatur-lupe": [
    ["Der Wind flüstert in den Blättern.", "Welches Stilmittel liegt vor?", "Personifikation", "Aufzählung", "Übertreibung", "Der Wind erhält eine menschliche Fähigkeit."],
    ["Schnell wie ein Pfeil rannte sie los.", "Welches Stilmittel liegt vor?", "Vergleich", "Metapher", "Ironie", "Das Wort 'wie' markiert den Vergleich."],
    ["Ein Meer aus Lichtern lag unter uns.", "Welches Stilmittel prägt den Satz?", "Metapher", "Wiederholung", "Ellipse", "Die Lichter werden bildlich als Meer bezeichnet."],
    ["Der Leser kennt den versteckten Schlüssel, die Figur aber nicht.", "Welche Wirkung entsteht?", "Spannung durch Wissensvorsprung", "Langeweile", "Sachlichkeit", "Der Informationsunterschied erzeugt Erwartung."],
  ],
};

const HU: SkillBank = {
  "lese-detektiv": [
    ["Lili iskola előtt megeteti a kutyát.", "Mit tesz Lili iskola előtt?", "Megeteti a kutyát.", "Visszaalszik.", "Vásárolni megy.", "A mondat közvetlenül kimondja."],
    ["Áron esőben megosztja az esernyőjét Leóval.", "Mit mutat Áron viselkedése?", "Segítőkész.", "Türelmetlen.", "Félénk.", "A megosztás segítőkészségre utal."],
    ["A könyvtár korábban zár, mert új fűtést szerelnek be.", "Miért zár korábban?", "A szerelés miatt.", "Ünnepnap miatt.", "Mert elfogytak a könyvek.", "A 'mert' után áll az ok."],
    ["A cikk több fát kér az iskolaudvarokra, mert árnyékot adnak és tisztítják a levegőt.", "Mi a szerző célja?", "Meggyőzni a faültetésről.", "Kirándulást mesélni.", "Fafajokat sorolni.", "Az állítás és az érvek meggyőző célt mutatnak."],
  ],
  "grammatik-scanner": [
    ["A kicsi kutya ugat.", "Milyen szófajú a 'kicsi'?", "Melléknév", "Ige", "Főnév", "A kutya tulajdonságát nevezi meg."],
    ["A gyerekek várat építenek.", "Mi a mondat tárgya?", "várat", "gyerekek", "építenek", "A 'mit építenek?' kérdésre felel."],
    ["Bár esett, kint játszottunk.", "Milyen viszonyt fejez ki a 'bár'?", "Megengedő ellentétet", "Okot", "Célt", "A cselekvés az akadály ellenére megtörtént."],
    ["Ha több időm lenne, veletek mennék.", "Mit fejez ki a feltételes mód?", "Feltételhez kötött lehetőséget", "Parancsot", "Biztos múltat", "A történés egy feltételtől függ."],
  ],
  "text-retter": [
    ["holnap elmegyünk a múzeumba.", "Melyik változat helyes?", "Holnap elmegyünk a múzeumba.", "holnap Elmegyünk a múzeumba.", "Holnap elmegyünk a Múzeumba.", "A mondat nagybetűvel kezdődik."],
    ["Kenyeret tejet és sajtot vettünk.", "Hol áll helyesen a vessző?", "Kenyeret, tejet és sajtot vettünk.", "Kenyeret tejet, és sajtot vettünk.", "Kenyeret, tejet, és sajtot vettünk.", "A felsorolási tagokat vessző választja el."],
    ["Nem tudom hogy mikor indul.", "Melyik változat helyes?", "Nem tudom, hogy mikor indul.", "Nem, tudom hogy mikor indul.", "Nem tudom hogy, mikor indul.", "A fő- és mellékmondat közé vessző kerül."],
    ["Muszály befejeznünk.", "Melyik változat helyes?", "Muszáj befejeznünk.", "Muszály be fejeznünk.", "Muszáj befejeznűnk.", "A 'muszáj' j-vel írandó."],
  ],
  "wort-netz": [
    ["vidám", "Melyik szó rokon értelmű?", "derűs", "szögletes", "néma", "A 'derűs' jelentése hasonló."],
    ["bátor", "Melyik szó ellentétes értelmű?", "gyáva", "merész", "hősies", "A 'gyáva' a 'bátor' ellentéte."],
    ["ír", "Melyik szó tartozik a szócsaládba?", "írás", "irány", "illat", "Az 'írás' ugyanabból a szótőből ered."],
    ["a szívére veszi", "Mit jelent a szólás?", "Nagyon megbántódik.", "Gyorsan elfelejti.", "Futni kezd.", "A kifejezés erős érzelmi hatást jelent."],
  ],
  "schreibwerkstatt": [
    ["Egy kutya labdát talál.", "Melyik mondat teljes és pontos?", "A kutya a kertben talál egy piros labdát.", "Kutya labda kert.", "Talál labdát kutya.", "A mondat világos és részletes."],
    ["Két esemény", "Melyik kötés mutatja az időrendet?", "Először becsomagolt, azután elindult.", "Becsomagolt, de azután.", "Becsomagolt, habár azután.", "Az időhatározók rendezik az eseményeket."],
    ["Tárgyilagos leírás", "Melyik megfogalmazás a legpontosabb?", "A torony 32 méter magas és vörös téglából épült.", "A torony valahogy óriási.", "A torony nagyon menő.", "A mérhető adatok tárgyilagosak."],
    ["Érv a hosszabb szünet mellett", "Melyik indok megalapozott?", "A több mozgás javíthatja a későbbi figyelmet.", "A hosszabb egyszerűen jobb.", "Mindenki ezt akarja.", "Az állítás ellenőrizhető összefüggést nevez meg."],
  ],
  "literatur-lupe": [
    ["A szél suttog a levelek között.", "Melyik költői eszköz jelenik meg?", "Megszemélyesítés", "Felsorolás", "Túlzás", "A szél emberi tulajdonságot kap."],
    ["Úgy futott, mint a nyíl.", "Melyik eszköz jelenik meg?", "Hasonlat", "Metafora", "Irónia", "A 'mint' szó jelöli a hasonlatot."],
    ["Fénytenger terült el alattunk.", "Melyik eszköz határozza meg a képet?", "Metafora", "Ismétlés", "Hiányos mondat", "A sok fényt a szöveg tengernek nevezi."],
    ["Az olvasó tud az elrejtett kulcsról, a főhős nem.", "Milyen hatás keletkezik?", "Feszültség az információkülönbség miatt", "Unalom", "Tárgyilagosság", "Az olvasó előre lát egy veszélyt vagy megoldást."],
  ],
};

const RO: SkillBank = {
  "lese-detektiv": [
    ["Mara hrănește câinele înainte de școală.", "Ce face Mara înainte de școală?", "Hrănește câinele.", "Doarme din nou.", "Merge la cumpărături.", "Acțiunea este spusă direct."],
    ["Andrei împarte umbrela cu Luca atunci când plouă.", "Ce arată comportamentul lui?", "Este săritor.", "Este nerăbdător.", "Este fricos.", "Împărțirea umbrelei arată ajutor."],
    ["Biblioteca se închide devreme deoarece se montează încălzirea.", "De ce se închide devreme?", "Din cauza lucrărilor.", "Din cauza unei sărbători.", "Pentru că lipsesc cărți.", "Cauza este introdusă prin 'deoarece'."],
    ["Articolul cere mai mulți copaci în curtea școlii pentru umbră și aer curat.", "Care este intenția principală?", "Să convingă cititorul.", "Să spună o poveste.", "Să ordoneze arborii.", "Cererea și motivele arată intenția de convingere."],
  ],
  "grammatik-scanner": [
    ["Câinele mic latră.", "Ce parte de vorbire este 'mic'?", "Adjectiv", "Verb", "Substantiv", "Cuvântul exprimă o însușire."],
    ["Copiii construiesc un castel.", "Ce funcție are 'un castel'?", "Complement direct", "Subiect", "Predicat", "Răspunde la întrebarea 'ce construiesc?'."],
    ["Deși ploua, ne-am jucat afară.", "Ce relație exprimă 'deși'?", "Concesie", "Cauză", "Scop", "Acțiunea are loc în ciuda unui obstacol."],
    ["Scrisoarea a fost trimisă ieri.", "La ce diateză este verbul?", "Pasivă", "Activă", "Reflexivă", "Accentul cade pe acțiunea suferită."],
  ],
  "text-retter": [
    ["mâine mergem la muzeu.", "Care variantă este corectă?", "Mâine mergem la muzeu.", "mâine Mergem la muzeu.", "Mâine mergem la Muzeu.", "Propoziția începe cu literă mare."],
    ["Copii se joacă în parc.", "Care variantă este corectă?", "Copiii se joacă în parc.", "Copiii se joacă în parcul.", "Copii se joacă în parcul.", "Substantivul articulat are forma 'copiii'."],
    ["Am cumpărat mere pere și pâine.", "Unde sunt corecte virgulele?", "Am cumpărat mere, pere și pâine.", "Am cumpărat, mere pere și pâine.", "Am cumpărat mere pere, și pâine.", "Elementele enumerării se despart prin virgulă."],
    ["Datorită ploii, meciul a fost anulat.", "Ce variantă exprimă corect cauza negativă?", "Din cauza ploii, meciul a fost anulat.", "Grație ploii, meciul a fost anulat.", "Mulțumită ploii, meciul a fost anulat.", "'Din cauza' este potrivit pentru un efect nefavorabil."],
  ],
  "wort-netz": [
    ["vesel", "Ce cuvânt are sens apropiat?", "bucuros", "colțuros", "tăcut", "'bucuros' este sinonim."],
    ["curajos", "Ce cuvânt are sens opus?", "fricos", "viteaz", "îndrăzneț", "'fricos' este antonim."],
    ["scrie", "Ce cuvânt aparține familiei lexicale?", "scriere", "scrum", "stradă", "'scriere' are aceeași rădăcină."],
    ["a pune umărul", "Ce înseamnă expresia?", "a ajuta", "a refuza", "a adormi", "Expresia înseamnă a contribui."],
  ],
  "schreibwerkstatt": [
    ["Un câine găsește o minge.", "Care propoziție este clară și completă?", "Câinele găsește în grădină o minge roșie.", "Câine minge grădină.", "Găsește minge câine.", "Propoziția are structură și detalii."],
    ["Două evenimente", "Ce legătură arată ordinea?", "Mai întâi a împachetat, apoi a plecat.", "A împachetat, dar apoi.", "A împachetat, deși apoi.", "Marcatorii temporali ordonează evenimentele."],
    ["Descriere obiectivă", "Care formulare este precisă?", "Turnul are 32 de metri și este din cărămidă roșie.", "Turnul este cumva uriaș.", "Turnul este super tare.", "Datele măsurabile sunt obiective."],
    ["Argument pentru pauze mai lungi", "Care motiv este bine susținut?", "Mai multă mișcare poate îmbunătăți concentrarea.", "Mai lung este pur și simplu mai bun.", "Toți vor asta.", "Argumentul prezintă o legătură verificabilă."],
  ],
  "literatur-lupe": [
    ["Vântul șoptește printre frunze.", "Ce figură de stil apare?", "Personificare", "Enumerație", "Hiperbolă", "Vântul primește o însușire omenească."],
    ["A alergat repede ca o săgeată.", "Ce figură apare?", "Comparație", "Metaforă", "Ironie", "Cuvântul 'ca' marchează comparația."],
    ["O mare de lumini se întindea sub noi.", "Ce figură domină imaginea?", "Metaforă", "Repetiție", "Elipsă", "Luminile sunt numite figurat mare."],
    ["Cititorul știe unde este cheia, dar personajul nu.", "Ce efect apare?", "Tensiune prin diferența de informație", "Plictiseală", "Obiectivitate", "Cititorul anticipează pericolul sau soluția."],
  ],
};

const EN: SkillBank = {
  "lese-detektiv": [
    ["Mia feeds the dog before school.", "What does Mia do before school?", "She feeds the dog.", "She sleeps.", "She goes shopping.", "The action is stated directly."],
    ["Amir shares his umbrella with Leo when it rains.", "What does Amir's behaviour show?", "He is helpful.", "He is impatient.", "He is afraid.", "Sharing the umbrella is helpful."],
    ["The library closes early because a new heating system is being installed.", "Why does it close early?", "Because of the installation.", "Because it is a holiday.", "Because books are missing.", "The reason follows 'because'."],
    ["The article calls for more trees at schools and gives shade and clean air as reasons.", "What is its main purpose?", "To persuade readers.", "To tell a journey.", "To sort trees.", "The claim and reasons show a persuasive purpose."],
  ],
  "grammatik-scanner": [
    ["The small dog barks.", "What part of speech is 'small'?", "Adjective", "Verb", "Noun", "It describes the noun dog."],
    ["The children build a castle.", "What is 'a castle'?", "Direct object", "Subject", "Predicate", "It answers 'build what?'."],
    ["Although it rained, we played outside.", "What does 'although' express?", "Concession", "Cause", "Purpose", "The action happens despite an obstacle."],
    ["The letter was sent yesterday.", "Which voice is used?", "Passive voice", "Active voice", "Imperative mood", "The sentence focuses on the received action."],
  ],
  "text-retter": [
    ["tomorrow we are going to the museum.", "Which version is correct?", "Tomorrow we are going to the museum.", "tomorrow We are going to the museum.", "Tomorrow we are going to the Museum.", "A sentence begins with a capital letter."],
    ["The dog wagged it's tail.", "Which version is correct?", "The dog wagged its tail.", "The dog wagged its' tail.", "The dog wagged it is tail.", "The possessive 'its' has no apostrophe."],
    ["We bought apples pears and bread.", "Where are the commas correct?", "We bought apples, pears and bread.", "We bought, apples pears and bread.", "We bought apples pears, and bread.", "Items in a list are separated."],
    ["Walking through the park, the rain soaked Maya.", "Which version removes the dangling modifier?", "Walking through the park, Maya was soaked by the rain.", "Walking through the park, the rain was wet.", "The rain walked through the park.", "Maya is the person walking."],
  ],
  "wort-netz": [
    ["happy", "Which word has a similar meaning?", "cheerful", "square", "silent", "'cheerful' is a synonym."],
    ["brave", "Which word has the opposite meaning?", "cowardly", "bold", "fearless", "'cowardly' is an antonym."],
    ["act", "Which word belongs to the same word family?", "action", "acre", "ankle", "'action' shares the root."],
    ["break the ice", "What does the idiom mean?", "make people feel comfortable", "damage frozen water", "end a friendship", "The idiom means easing social tension."],
  ],
  "schreibwerkstatt": [
    ["A dog finds a ball.", "Which sentence is clear and complete?", "The dog finds a red ball in the garden.", "Dog ball garden.", "Finds ball the dog.", "The sentence has structure and detail."],
    ["Two events", "Which link shows their order?", "First Lea packed; afterwards, she left.", "Lea packed, but afterwards.", "Lea packed, although afterwards.", "The time markers order the events."],
    ["Objective description", "Which wording is most precise?", "The tower is 32 metres tall and built from red brick.", "The tower is somehow huge.", "The tower is really cool.", "Measurable details are objective."],
    ["Argument for longer breaks", "Which reason is well supported?", "More exercise may improve later concentration.", "Longer is simply better.", "Everyone wants it.", "The claim gives a testable connection."],
  ],
  "literatur-lupe": [
    ["The wind whispered through the leaves.", "Which technique is used?", "Personification", "Listing", "Hyperbole", "The wind receives a human ability."],
    ["She ran as fast as an arrow.", "Which technique is used?", "Simile", "Metaphor", "Irony", "The word 'as' marks a comparison."],
    ["A sea of lights lay below us.", "Which technique shapes the image?", "Metaphor", "Repetition", "Ellipsis", "The lights are described as a sea."],
    ["The reader knows about the key, but the main character does not.", "What effect is created?", "Suspense through an information gap", "Boredom", "Objectivity", "The reader anticipates danger or a solution."],
  ],
};

const BANK: Record<LanguageSkillLang, SkillBank> = { de: DE, hu: HU, ro: RO, en: EN };

function rotate<T>(values: T[], offset: number): T[] {
  if (values.length < 2) return [...values];
  const start = ((offset % values.length) + values.length) % values.length;
  return [...values.slice(start), ...values.slice(0, start)];
}

export function buildLanguageSkillRounds(gameId: LanguageSkillGameId, lang: LanguageSkillLang, gradeInput: number, level: LanguageLevel, count: number): LanguageSkillRound[] {
  const grade = Math.max(1, Math.min(8, Math.floor(gradeInput) || 1));
  const rows: readonly Entry[] = lang === "de"
    ? (GERMAN_SKILL_BANK[gameId][grade] ?? DE[gameId])
    : (BANK[lang]?.[gameId] ?? BANK.en[gameId]);
  // Reserve eight unique, difficulty-ordered German tasks for every level.
  const levelStart = (level - 1) * 8;
  const levelRows = lang === "de" && rows.length >= 40
    ? rows.slice(levelStart, levelStart + 8)
    : rows;
  const order = rotate([...levelRows], grade + level * 2);
  return Array.from({ length: Math.max(1, count) }, (_, index) => {
    const [context, prompt, correctAnswer, wrongA, wrongB, explanation] = order[index % order.length];
    return {
      id: `${gameId}:${lang}:g${grade}:l${level}:r${index}`,
      gameId,
      title: TITLES[lang][gameId],
      instruction: INSTRUCTIONS[lang][gameId],
      context,
      prompt,
      options: rotate([correctAnswer, wrongA, wrongB], grade * 7 + level * 3 + index),
      correctAnswer,
      explanation,
      level,
    };
  });
}

export const LANGUAGE_SKILL_GAME_IDS: LanguageSkillGameId[] = ["lese-detektiv", "grammatik-scanner", "text-retter", "wort-netz", "schreibwerkstatt", "literatur-lupe"];
