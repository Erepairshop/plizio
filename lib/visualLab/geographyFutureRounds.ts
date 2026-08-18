import type { GeographyLevel } from './geographyCurriculum';
import type { GeographySkillLang, GeographySkillRound } from './geographySkillContent';

type JuniorGrade = 5 | 6;
type LocalText = Record<GeographySkillLang, string>;

interface FutureScenario {
  prompt: LocalText;
  options: LocalText[];
  correct: number;
  explanation: LocalText;
}

const text = (de: string, en: string, hu: string, ro: string): LocalText => ({ de, en, hu, ro });

const TITLE = text('Zukunfts-Planer', 'Future Planner', 'Jövőtervező', 'Planificatorul viitorului');
const INSTRUCTION = text(
  'Wähle die Lösung, die Umwelt und Menschen langfristig am besten schützt.',
  'Choose the solution that best protects people and the environment in the long term.',
  'Válaszd azt a megoldást, amely hosszú távon a legjobban védi az embereket és a környezetet.',
  'Alege soluția care protejează cel mai bine oamenii și mediul pe termen lung.',
);
const CONTEXT: Record<JuniorGrade, LocalText> = {
  5: text('Alltag und Natur', 'Everyday life and nature', 'Mindennapok és természet', 'Viața cotidiană și natura'),
  6: text('Räume nachhaltig planen', 'Planning sustainable places', 'Fenntartható tértervezés', 'Planificarea durabilă a spațiilor'),
};

const GRADE_5: FutureScenario[] = [
  {
    prompt: text('Auf dem Schulhof liegen Papier, eine Glasflasche und eine Bananenschale. Was ist der beste Plan?', 'Paper, a glass bottle and a banana peel are lying in the schoolyard. What is the best plan?', 'Papír, üvegpalack és banánhéj hever az iskolaudvaron. Mi a legjobb terv?', 'În curtea școlii sunt hârtie, o sticlă și o coajă de banană. Care este cel mai bun plan?'),
    options: [text('Alles getrennt in die passenden Behälter geben', 'Sort everything into the correct bins', 'Mindent a megfelelő szelektív gyűjtőbe tenni', 'Sortăm totul în containerele potrivite'), text('Alles in einen Sack werfen', 'Put everything in one bag', 'Mindent egy zsákba dobni', 'Punem totul într-un singur sac'), text('Den Müll liegen lassen', 'Leave the waste where it is', 'Ott hagyni a hulladékot', 'Lăsăm deșeurile acolo'), text('Nur das Papier aufheben', 'Pick up only the paper', 'Csak a papírt felszedni', 'Ridicăm doar hârtia')],
    correct: 0,
    explanation: text('Getrennte Sammlung ermöglicht Recycling und Kompostierung.', 'Sorting allows recycling and composting.', 'A szétválogatás lehetővé teszi az újrahasznosítást és a komposztálást.', 'Sortarea permite reciclarea și compostarea.'),
  },
  {
    prompt: text('Ein Klassenraum steht in der Pause leer. Welche Maßnahme spart sofort Energie?', 'A classroom is empty during the break. Which action saves energy immediately?', 'A tanterem üres a szünetben. Mi takarít meg azonnal energiát?', 'O sală de clasă este goală în pauză. Ce măsură economisește imediat energie?'),
    options: [text('Licht und unnötige Geräte ausschalten', 'Switch off lights and unused devices', 'Lekapcsolni a lámpát és a nem használt eszközöket', 'Oprim luminile și aparatele nefolosite'), text('Das Licht heller stellen', 'Make the lights brighter', 'Erősebbre állítani a világítást', 'Mărim intensitatea luminii'), text('Die Tür offen lassen', 'Leave the door open', 'Nyitva hagyni az ajtót', 'Lăsăm ușa deschisă'), text('Alle Geräte laden', 'Charge every device', 'Minden eszközt tölteni', 'Încărcăm toate aparatele')],
    correct: 0,
    explanation: text('Nicht benötigte Beleuchtung und Geräte verbrauchen sonst weiter Strom.', 'Unused lights and devices otherwise continue to consume electricity.', 'A fölöslegesen működő világítás és eszközök tovább fogyasztják az áramot.', 'Luminile și aparatele nefolosite continuă altfel să consume energie.'),
  },
  {
    prompt: text('Ein Wanderweg führt durch die Brutzone seltener Vögel. Wie sollte der Nationalpark handeln?', 'A hiking trail crosses a nesting area of rare birds. What should the national park do?', 'Egy turistaút ritka madarak költőhelyén halad át. Mit tegyen a nemzeti park?', 'Un traseu trece prin zona de cuibărit a unor păsări rare. Ce ar trebui să facă parcul național?'),
    options: [text('Den Abschnitt während der Brutzeit umleiten', 'Reroute that section during nesting season', 'A költési időszakban elterelni az útvonalat', 'Deviază traseul în perioada de cuibărit'), text('Mehr Besucher gleichzeitig hineinlassen', 'Allow more visitors at once', 'Egyszerre több látogatót beengedni', 'Permite mai mulți vizitatori simultan'), text('Die Nester näher an den Weg setzen', 'Move nests closer to the trail', 'A fészkeket közelebb tenni az úthoz', 'Mută cuiburile mai aproape de traseu'), text('Lautsprecher aufstellen', 'Install loudspeakers', 'Hangszórókat felszerelni', 'Instalează difuzoare')],
    correct: 0,
    explanation: text('Eine zeitweise Umleitung schützt die Tiere und erhält den Naturbesuch.', 'A temporary reroute protects wildlife while keeping nature accessible.', 'Az ideiglenes terelés védi az állatokat, miközben a terület látogatható marad.', 'Deviarea temporară protejează animalele și păstrează accesul în natură.'),
  },
  {
    prompt: text('Für einen Ausflug braucht die Klasse Getränke. Welche Wahl verursacht am wenigsten Verpackungsmüll?', 'The class needs drinks for a trip. Which choice creates the least packaging waste?', 'Az osztálynak ital kell a kirándulásra. Melyik választás okozza a legkevesebb csomagolási hulladékot?', 'Clasa are nevoie de băuturi pentru excursie. Ce alegere produce cele mai puține deșeuri?'),
    options: [text('Wiederbefüllbare Flaschen mitnehmen', 'Bring refillable bottles', 'Újratölthető palackokat vinni', 'Luăm sticle reutilizabile'), text('Viele kleine Einwegflaschen kaufen', 'Buy many small single-use bottles', 'Sok kis eldobható palackot venni', 'Cumpărăm multe sticle mici de unică folosință'), text('Getränke in Plastiktüten füllen', 'Put drinks in plastic bags', 'Műanyag zacskóba tölteni az italt', 'Punem băuturile în pungi de plastic'), text('Jede Flasche doppelt verpacken', 'Double-wrap every bottle', 'Minden palackot kétszer becsomagolni', 'Ambalăm fiecare sticlă de două ori')],
    correct: 0,
    explanation: text('Mehrwegflaschen können viele Male genutzt werden und vermeiden Einwegmüll.', 'Reusable bottles can be used many times and avoid single-use waste.', 'A többször használható palackok csökkentik az eldobható hulladékot.', 'Sticlele reutilizabile reduc deșeurile de unică folosință.'),
  },
  {
    prompt: text('Der Sportplatz liegt einen Kilometer von der Schule entfernt. Wie kommt eine Gruppe klimafreundlich dorthin?', 'The sports field is one kilometre from school. How can a group get there in a climate-friendly way?', 'A sportpálya egy kilométerre van az iskolától. Hogyan juthat oda a csoport klímabarát módon?', 'Terenul de sport este la un kilometru de școală. Cum ajunge grupul acolo într-un mod ecologic?'),
    options: [text('Zu Fuß gehen oder Fahrrad fahren', 'Walk or cycle', 'Gyalog vagy kerékpárral menni', 'Mergem pe jos sau cu bicicleta'), text('Jede Person fährt allein im Auto', 'Everyone travels alone by car', 'Mindenki külön autóval megy', 'Fiecare merge singur cu mașina'), text('Einen leeren Bus hinterherschicken', 'Send an empty bus behind them', 'Egy üres buszt utánuk küldeni', 'Trimitem un autobuz gol în urma lor'), text('Mit dem Flugzeug reisen', 'Travel by plane', 'Repülővel utazni', 'Călătorim cu avionul')],
    correct: 0,
    explanation: text('Kurze Wege lassen sich ohne Abgase aktiv zurücklegen.', 'Short distances can be travelled actively without exhaust emissions.', 'A rövid út mozgással, kipufogógáz nélkül megtehető.', 'Distanțele scurte pot fi parcurse activ, fără gaze de eșapament.'),
  },
  {
    prompt: text('Im Schulgarten wird Trinkwasser knapp. Welche Bewässerung spart am meisten Wasser?', 'Drinking water is becoming scarce in the school garden. Which irrigation method saves the most water?', 'Az iskolakertben kevés az ivóvíz. Melyik öntözés takarít meg a legtöbb vizet?', 'Apa potabilă devine rară în grădina școlii. Ce metodă economisește cel mai mult?'),
    options: [text('Regenwasser sammeln und morgens gezielt gießen', 'Collect rainwater and water carefully in the morning', 'Esővizet gyűjteni és reggel célzottan öntözni', 'Colectăm apa de ploaie și udăm dimineața, țintit'), text('Mittags den ganzen Hof beregnen', 'Spray the entire yard at noon', 'Délben az egész udvart locsolni', 'Stropim toată curtea la prânz'), text('Den Schlauch ständig laufen lassen', 'Leave the hose running all the time', 'Folyamatosan folyatni a slagot', 'Lăsăm furtunul să curgă permanent'), text('Auch Wege und Mauern gießen', 'Water paths and walls as well', 'Az utakat és falakat is locsolni', 'Udăm și aleile și zidurile')],
    correct: 0,
    explanation: text('Gesammeltes Regenwasser und gezieltes Gießen verringern Verdunstung und Verlust.', 'Collected rainwater and targeted watering reduce evaporation and waste.', 'Az esővíz és a célzott reggeli öntözés csökkenti a párolgást és a veszteséget.', 'Apa de ploaie și udarea țintită reduc evaporarea și pierderile.'),
  },
  {
    prompt: text('Die Mensa plant einen Obsttag. Welche Auswahl hat meist den kürzesten Transportweg?', 'The cafeteria plans a fruit day. Which choice usually has the shortest transport route?', 'A menza gyümölcsnapot tervez. Melyik választás útja általában a legrövidebb?', 'Cantina pregătește o zi a fructelor. Ce alegere are de obicei cel mai scurt transport?'),
    options: [text('Saisonales Obst aus der Region', 'Seasonal fruit from the region', 'Helyi, idényjellegű gyümölcs', 'Fructe locale de sezon'), text('Jede Frucht einzeln per Flugzeug', 'Fly in each fruit separately', 'Minden gyümölcsöt külön repülővel hozni', 'Aducem fiecare fruct separat cu avionul'), text('Obst mit mehrfacher Kühlreise', 'Fruit transported through several cold chains', 'Többszörös hűtött szállítású gyümölcs', 'Fructe transportate prin mai multe lanțuri frigorifice'), text('Nur weit entfernte Sorten wählen', 'Choose only distant varieties', 'Csak távoli fajtákat választani', 'Alegem doar soiuri îndepărtate')],
    correct: 0,
    explanation: text('Regionale Saisonware braucht häufig weniger Transport und Kühlung.', 'Regional seasonal produce often needs less transport and cooling.', 'A helyi idényáru általában kevesebb szállítást és hűtést igényel.', 'Produsele locale de sezon necesită adesea mai puțin transport și răcire.'),
  },
  {
    prompt: text('Eine versiegelte Ecke des Schulhofs soll im Sommer kühler werden und Insekten helfen. Welcher Umbau passt?', 'A paved corner of the schoolyard should become cooler in summer and help insects. Which redesign fits?', 'Az iskolaudvar burkolt sarkát nyáron hűvösebbé és rovarbaráttá tennék. Melyik átalakítás jó?', 'Un colț pavat al curții trebuie să fie mai răcoros vara și să ajute insectele. Ce amenajare este potrivită?'),
    options: [text('Belag öffnen, heimische Pflanzen und Schattenbäume setzen', 'Remove paving and plant native flowers and shade trees', 'Felszedni a burkolatot, őshonos növényeket és árnyékadó fákat ültetni', 'Îndepărtăm pavajul și plantăm specii locale și arbori de umbră'), text('Mehr dunklen Asphalt auftragen', 'Add more dark asphalt', 'Még több sötét aszfaltot lerakni', 'Adăugăm mai mult asfalt închis'), text('Alle Pflanzen entfernen', 'Remove all plants', 'Minden növényt eltávolítani', 'Îndepărtăm toate plantele'), text('Die Fläche mit Plastik abdecken', 'Cover the area with plastic', 'Műanyaggal lefedni a területet', 'Acoperim zona cu plastic')],
    correct: 0,
    explanation: text('Grünflächen spenden Schatten, speichern Wasser und schaffen Lebensräume.', 'Green areas provide shade, retain water and create habitats.', 'A zöldfelület árnyékot ad, vizet tart vissza és élőhelyet teremt.', 'Spațiile verzi oferă umbră, rețin apa și creează habitate.'),
  },
];

const GRADE_6: FutureScenario[] = [
  {
    prompt: text('Eine trockene Stadt verbraucht viel Trinkwasser für Parks. Welche Kombination ist langfristig sinnvoll?', 'A dry city uses much drinking water for parks. Which combination makes sense long term?', 'Egy száraz város sok ivóvizet használ a parkokra. Melyik megoldás fenntartható hosszú távon?', 'Un oraș secetos folosește multă apă potabilă pentru parcuri. Ce combinație este durabilă?'),
    options: [text('Trockenheitsverträgliche Pflanzen, Regenwasserspeicher und Tröpfchenbewässerung', 'Drought-tolerant plants, rainwater storage and drip irrigation', 'Szárazságtűrő növények, esővíztárolás és csepegtető öntözés', 'Plante rezistente la secetă, stocarea ploii și irigare prin picurare'), text('Rasen mittags fluten', 'Flood lawns at noon', 'Délben elárasztani a gyepet', 'Inundăm gazonul la prânz'), text('Lecks im Netz ignorieren', 'Ignore leaks in the network', 'Figyelmen kívül hagyni a csőtöréseket', 'Ignorăm pierderile din rețea'), text('Nur Trinkwasserbrunnen vergrößern', 'Only enlarge drinking-water fountains', 'Csak az ivóvízkutakat bővíteni', 'Mărim doar fântânile cu apă potabilă')],
    correct: 0,
    explanation: text('Die Kombination senkt Bedarf, nutzt Niederschlag und bringt Wasser direkt zu den Wurzeln.', 'This combination cuts demand, uses rainfall and delivers water directly to roots.', 'A kombináció csökkenti az igényt, hasznosítja a csapadékot és közvetlenül a gyökérhez juttatja a vizet.', 'Combinația reduce consumul, folosește ploaia și duce apa direct la rădăcini.'),
  },
  {
    prompt: text('Ein Alpengletscher zieht sich zurück. Welche Folge muss eine Region bei der Wasserplanung beachten?', 'An Alpine glacier is retreating. Which consequence must a region consider in water planning?', 'Egy alpesi gleccser visszahúzódik. Melyik következményt kell figyelembe venni a vízgazdálkodásban?', 'Un ghețar alpin se retrage. Ce consecință trebuie luată în calcul la planificarea apei?'),
    options: [text('Langfristig kann im Sommer weniger Schmelzwasser verfügbar sein', 'Less meltwater may be available in summer in the long term', 'Hosszú távon nyáron kevesebb olvadékvíz állhat rendelkezésre', 'Pe termen lung poate fi mai puțină apă de topire vara'), text('Der Meeresspiegel sinkt sofort überall', 'Sea level immediately falls everywhere', 'A tengerszint azonnal mindenhol csökken', 'Nivelul mării scade imediat peste tot'), text('Alle Flüsse frieren dauerhaft zu', 'All rivers freeze permanently', 'Minden folyó tartósan befagy', 'Toate râurile îngheață permanent'), text('Niederschlag wird unmöglich', 'Precipitation becomes impossible', 'Lehetetlenné válik a csapadék', 'Precipitațiile devin imposibile')],
    correct: 0,
    explanation: text('Gletscher speichern Wasser; ihr Verlust verändert den saisonalen Abfluss.', 'Glaciers store water; their loss changes seasonal runoff.', 'A gleccserek vizet tárolnak, eltűnésük megváltoztatja az évszakos vízhozamot.', 'Ghețarii stochează apă, iar pierderea lor schimbă scurgerea sezonieră.'),
  },
  {
    prompt: text('Ein Acker verliert bei Starkregen viel Boden. Welche Bewirtschaftung schützt ihn am besten?', 'A field loses much soil during heavy rain. Which farming method protects it best?', 'Egy szántóföldről heves esőben sok talaj mosódik le. Melyik gazdálkodás védi legjobban?', 'Un teren pierde mult sol la ploi puternice. Ce metodă îl protejează cel mai bine?'),
    options: [text('Zwischenfrüchte, Hecken und möglichst dauerhafte Bodenbedeckung', 'Cover crops, hedges and continuous soil cover', 'Takarónövények, sövények és tartós talajborítás', 'Culturi de acoperire, garduri vii și sol acoperit permanent'), text('Den Boden ganzjährig nackt lassen', 'Leave the soil bare all year', 'Egész évben csupaszon hagyni a talajt', 'Lăsăm solul gol tot anul'), text('Hangabwärts tief pflügen', 'Plough deeply downhill', 'Lejtőirányban mélyen szántani', 'Arăm adânc în josul pantei'), text('Alle Feldränder entfernen', 'Remove all field margins', 'Minden mezsgyét eltávolítani', 'Îndepărtăm toate marginile câmpului')],
    correct: 0,
    explanation: text('Pflanzen und Hecken bremsen Wasser, halten den Boden fest und fördern Humus.', 'Plants and hedges slow water, hold soil and support humus formation.', 'A növényzet lassítja a vizet, megfogja a talajt és segíti a humuszképződést.', 'Plantele încetinesc apa, fixează solul și favorizează humusul.'),
  },
  {
    prompt: text('Ein beliebter Bergsee leidet unter zu vielen Tagesgästen. Welche Maßnahme verbindet Tourismus und Naturschutz?', 'A popular mountain lake suffers from too many day visitors. Which measure balances tourism and conservation?', 'Egy népszerű hegyi tavat túl sok látogató terhel. Mi hangolja össze a turizmust és a természetvédelmet?', 'Un lac montan popular este afectat de prea mulți vizitatori. Ce măsură echilibrează turismul și protecția naturii?'),
    options: [text('Besucherzahl steuern, ÖPNV-Shuttle anbieten und sensible Zonen sperren', 'Manage visitor numbers, offer public shuttles and close sensitive zones', 'Korlátozni a látogatószámot, tömegközlekedési járatot adni és lezárni az érzékeny részeket', 'Controlăm numărul de vizitatori, oferim navete publice și închidem zonele sensibile'), text('Direkt am Ufer neue Parkplätze bauen', 'Build new car parks directly on the shore', 'Új parkolókat építeni közvetlenül a parton', 'Construim parcări noi chiar pe mal'), text('Abfälle im See sammeln lassen', 'Let waste collect in the lake', 'A hulladékot a tóban hagyni', 'Lăsăm deșeurile să se adune în lac'), text('Alle Wege verbreitern', 'Widen every trail', 'Minden ösvényt kiszélesíteni', 'Lărgim toate potecile')],
    correct: 0,
    explanation: text('Steuerung schützt empfindliche Flächen, während der Ort erreichbar bleibt.', 'Management protects sensitive areas while keeping the place accessible.', 'A szabályozás védi az érzékeny területeket, miközben a hely elérhető marad.', 'Gestionarea protejează zonele sensibile și păstrează accesul.'),
  },
  {
    prompt: text('Eine Schulkantine möchte die Umweltbelastung ihrer Lieferkette senken. Welche Änderung wirkt an mehreren Stellen?', 'A school cafeteria wants to reduce the environmental impact of its supply chain. Which change helps at several stages?', 'Az iskolai menza csökkentené az ellátási lánc környezeti terhét. Melyik változtatás hat több ponton?', 'Cantina școlii vrea să reducă impactul lanțului de aprovizionare. Ce schimbare ajută în mai multe etape?'),
    options: [text('Saisonal und regional einkaufen, Speiseabfälle messen und vermeiden', 'Buy seasonal regional food and measure and prevent food waste', 'Helyi és idényárut venni, mérni és csökkenteni az ételhulladékot', 'Cumpărăm local și sezonier și măsurăm și reducem risipa'), text('Nur Einzelportionen doppelt verpacken', 'Double-wrap only individual portions', 'Minden adagot kétszer becsomagolni', 'Ambalăm dublu fiecare porție'), text('Lebensmittel absichtlich weit transportieren', 'Transport food deliberately over long distances', 'Szándékosan messziről szállítani az ételt', 'Transportăm intenționat alimentele de departe'), text('Reste täglich wegwerfen', 'Throw away leftovers every day', 'Naponta kidobni a maradékot', 'Aruncăm zilnic resturile')],
    correct: 0,
    explanation: text('Kurze saisonale Wege und weniger Abfall sparen Transport, Kühlung, Fläche und Ressourcen.', 'Short seasonal routes and less waste save transport, cooling, land and resources.', 'A rövid, idényjellegű út és a kevesebb hulladék szállítást, hűtést, területet és erőforrást takarít meg.', 'Rutele scurte și sezoniere și risipa redusă economisesc transport, răcire, teren și resurse.'),
  },
  {
    prompt: text('Ein Fluss überschwemmt nach Starkregen regelmäßig Häuser. Welche räumliche Planung mindert das Risiko nachhaltig?', 'A river regularly floods houses after heavy rain. Which spatial plan reduces the risk sustainably?', 'Egy folyó heves esők után rendszeresen házakat önt el. Melyik területrendezés csökkenti tartósan a kockázatot?', 'Un râu inundă frecvent case după ploi torențiale. Ce planificare reduce durabil riscul?'),
    options: [text('Auen freihalten, Rückhalteflächen schaffen und nicht neu im Überschwemmungsgebiet bauen', 'Keep floodplains open, create retention areas and avoid new building in flood zones', 'Szabadon hagyni az árteret, vízvisszatartó területeket kialakítani és nem építeni az elöntési zónába', 'Păstrăm lunca liberă, creăm zone de retenție și nu construim în zona inundabilă'), text('Den Fluss überall enger einmauern', 'Wall the river into a narrower channel everywhere', 'Mindenhol szűk falak közé szorítani a folyót', 'Îngustăm râul între ziduri peste tot'), text('Weitere Häuser direkt ans Ufer setzen', 'Build more houses directly on the bank', 'További házakat építeni közvetlenül a partra', 'Construim mai multe case chiar pe mal'), text('Alle Böden asphaltieren', 'Asphalt every surface', 'Minden felszínt leaszfaltozni', 'Asfaltăm toate suprafețele')],
    correct: 0,
    explanation: text('Auen und Rückhalteräume geben Hochwasser Platz und senken Abflussspitzen.', 'Floodplains and retention areas give water space and reduce peak flow.', 'Az ártér és a tározók helyet adnak a víznek, és csökkentik az árhullám csúcsát.', 'Luncile și zonele de retenție oferă spațiu apei și reduc vârful viiturii.'),
  },
  {
    prompt: text('Ein dicht bebautes Viertel wird bei Hitzewellen besonders heiß. Welche Kombination verbessert das Mikroklima?', 'A densely built neighbourhood becomes especially hot during heatwaves. Which combination improves its microclimate?', 'Egy sűrűn beépített városrész hőhullámban különösen felforrósodik. Mi javítja a mikroklímát?', 'Un cartier dens devine foarte fierbinte în timpul caniculei. Ce combinație îmbunătățește microclimatul?'),
    options: [text('Bäume, helle Dächer, entsiegelte Flächen und Trinkwasserstellen', 'Trees, light roofs, permeable surfaces and drinking-water points', 'Fák, világos tetők, vízáteresztő felszínek és ivóvízpontok', 'Arbori, acoperișuri deschise, suprafețe permeabile și puncte de apă'), text('Mehr dunkler Asphalt und weniger Schatten', 'More dark asphalt and less shade', 'Több sötét aszfalt és kevesebb árnyék', 'Mai mult asfalt închis și mai puțină umbră'), text('Alle Innenhöfe überbauen', 'Build over every courtyard', 'Minden udvart beépíteni', 'Construim pe toate curțile'), text('Bäume durch Parkplätze ersetzen', 'Replace trees with car parks', 'A fákat parkolókra cserélni', 'Înlocuim arborii cu parcări')],
    correct: 0,
    explanation: text('Schatten, Verdunstung und helle Oberflächen verringern die Wärmebelastung.', 'Shade, evaporation and light surfaces reduce heat stress.', 'Az árnyék, a párologtatás és a világos felszínek csökkentik a hőterhelést.', 'Umbra, evaporarea și suprafețele deschise reduc stresul termic.'),
  },
  {
    prompt: text('Eine Gemeinde muss zwischen zwei Energieplänen wählen. Welcher Plan ist robuster und spart langfristig Emissionen?', 'A municipality must choose between two energy plans. Which plan is more resilient and cuts emissions long term?', 'Egy település két energiaterv közül választ. Melyik ellenállóbb és csökkenti hosszú távon a kibocsátást?', 'O comună alege între două planuri energetice. Care este mai rezilient și reduce emisiile pe termen lung?'),
    options: [text('Gebäude dämmen, erneuerbare Quellen mischen und Speicher ausbauen', 'Insulate buildings, mix renewable sources and expand storage', 'Épületszigetelés, többféle megújuló forrás és energiatárolás', 'Izolăm clădirile, combinăm surse regenerabile și extindem stocarea'), text('Nur mehr fossilen Brennstoff verbrauchen', 'Only burn more fossil fuel', 'Csak több fosszilis tüzelőanyagot használni', 'Ardem doar mai mult combustibil fosil'), text('Energieverluste ignorieren', 'Ignore energy losses', 'Figyelmen kívül hagyni az energiaveszteséget', 'Ignorăm pierderile de energie'), text('Alle Lösungen von einer einzigen Quelle abhängig machen', 'Make every solution depend on one source', 'Mindent egyetlen forrástól függővé tenni', 'Facem toate soluțiile dependente de o singură sursă')],
    correct: 0,
    explanation: text('Effizienz, mehrere erneuerbare Quellen und Speicher ergänzen sich und verringern Ausfälle.', 'Efficiency, diverse renewables and storage reinforce each other and reduce outages.', 'A hatékonyság, a többféle megújuló forrás és a tárolás kiegészíti egymást és csökkenti a kieséseket.', 'Eficiența, sursele regenerabile diverse și stocarea se completează și reduc întreruperile.'),
  },
];

export function buildGeographyFutureRounds(
  grade: JuniorGrade,
  lang: GeographySkillLang,
  level: GeographyLevel,
  count: number,
): GeographySkillRound[] {
  const scenarios = grade === 5 ? GRADE_5 : GRADE_6;
  const offset = Math.min(level - 1, scenarios.length - 1);
  const levelScenarios = [...scenarios.slice(offset), ...scenarios.slice(0, offset)]
    .slice(0, Math.max(1, count));
  return levelScenarios.map((item, index) => ({
    id: `zukunfts-planer-g${grade}-l${level}-${index + 1}`,
    gameId: 'zukunfts-planer',
    grade,
    level,
    title: TITLE[lang],
    instruction: INSTRUCTION[lang],
    context: CONTEXT[grade][lang],
    prompt: item.prompt[lang],
    options: item.options.map((option) => option[lang]),
    correctAnswer: item.options[item.correct][lang],
    explanation: item.explanation[lang],
  }));
}
