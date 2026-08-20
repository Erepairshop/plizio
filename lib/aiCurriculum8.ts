import AI_K8_JSON from "./aiCurriculum8_data.json";
import { selectDiverseAIQuestions } from "./aiQuestionDiversity";
import type { KemiaTheme, KemiaQuestion } from "./kemiaCurriculumShared";

type MultiLang = { de: string; hu: string; ro: string; en: string };
type MultiLangOptions = { de: string[]; hu: string[]; ro: string[]; en: string[] };

interface RawQuestion {
  type: "mcq" | "typing";
  question: MultiLang;
  options?: MultiLangOptions;
  answer?: MultiLang | string;
  correct?: number;
}

const AI_DATA: Record<string, RawQuestion[]> = {
  "ai_k8_t1_1": [ // AGI
    { type: "mcq", question: { de: "Was bedeutet AGI?", hu: "Mit jelent az AGI?", ro: "Ce înseamnă AGI?", en: "What does AGI stand for?" }, options: { de: ["Artificial General Intelligence", "Advanced Global Info", "Automated Grade Interface", "All General Intelligence"], hu: ["Mesterséges Általános Intelligencia", "Fejlett Globális Információ", "Automatizált Osztályozó Interfész", "Minden Általános Intelligencia"], ro: ["Inteligență Artificială Generală", "Informație Globală Avansată", "Interfață de Notare Automată", "Toată Inteligența Generală"], en: ["Artificial General Intelligence", "Advanced Global Info", "Automated Grade Interface", "All General Intelligence"] }, correct: 0 },
    { type: "mcq", question: { de: "Was ist das Hauptmerkmal von AGI?", hu: "Mi az AGI fő jellemzője?", ro: "Care este principala caracteristică a AGI?", en: "What is the main characteristic of AGI?" }, options: { de: ["Kann jede intellektuelle Aufgabe wie ein Mensch lösen", "Kann nur Schach spielen", "Braucht keinen Strom", "Ist nur in Filmen möglich"], hu: ["Bármilyen szellemi feladatot képes megoldani, mint az ember", "Csak sakkozni tud", "Nincs szüksége áramra", "Csak filmekben létezik"], ro: ["Poate rezolva orice sarcină intelectuală ca un om", "Poate juca doar șah", "Nu are nevoie de curent", "Există doar în filme"], en: ["Can solve any intellectual task like a human", "Can only play chess", "Doesn't need electricity", "Only exists in movies"] }, correct: 0 },
    { type: "mcq", question: { de: "Existiert echte AGI heute schon?", hu: "Létezik már ma valódi AGI?", ro: "Există deja astăzi AGI reală?", en: "Does real AGI exist today?" }, options: { de: ["Nein, es ist ein theoretisches Ziel", "Ja, ChatGPT ist AGI", "Ja, in geheimen Laboren", "Ja, jeder Computer ist AGI"], hu: ["Nem, ez egy elméleti cél", "Igen, a ChatGPT az", "Igen, titkos laborokban", "Igen, minden számítógép az"], ro: ["Nu, este un obiectiv teoretic", "Da, ChatGPT este AGI", "Da, în laboratoare secrete", "Da, orice computer este AGI"], en: ["No, it is a theoretical goal", "Yes, ChatGPT is AGI", "Yes, in secret labs", "Yes, every computer is AGI"] }, correct: 0 },
    { type: "mcq", question: { de: "Was unterscheidet AGI von 'Narrow AI'?", hu: "Mi különbözteti meg az AGI-t a szűk MI-től?", ro: "Ce diferențiază AGI de 'IA restrânsă'?", en: "What distinguishes AGI from 'Narrow AI'?" }, options: { de: ["Vielseitigkeit vs. Spezialisierung", "Größe vs. Gewicht", "Kosten vs. Nutzen", "Farbe vs. Form"], hu: ["Sokoldalúság vs. specializáció", "Méret vs. súly", "Költség vs. haszon", "Szín vs. forma"], ro: ["Versatilitate vs. specializare", "Mărime vs. greutate", "Cost vs. beneficiu", "Culoare vs. formă"], en: ["Versatility vs. specialization", "Size vs. weight", "Cost vs. benefit", "Color vs. shape"] }, correct: 0 },
    { type: "mcq", question: { de: "Welche Fähigkeit wäre für AGI notwendig?", hu: "Milyen képesség szükséges az AGI-hoz?", ro: "Ce abilitate ar fi necesară pentru AGI?", en: "What ability would be necessary for AGI?" }, options: { de: ["Transferlernen über Domänen hinweg", "Nur Daten kopieren", "Sehr schnell tippen", "Bilder malen"], hu: ["Doméneken átívelő transzfer tanulás", "Csak adatok másolása", "Nagyon gyors gépelés", "Képek festése"], ro: ["Învățare prin transfer între domenii", "Doar copierea datelor", "Tastare foarte rapidă", "Pictarea tablourilor"], en: ["Transfer learning across domains", "Just copying data", "Very fast typing", "Painting pictures"] }, correct: 0 },
    { type: "typing", question: { de: "Was ist die Abkürzung für Artificial General Intelligence?", hu: "Mi a Mesterséges Általános Intelligencia rövidítése?", ro: "Care este abrevierea pentru Inteligența Artificială Generală?", en: "What is the abbreviation for Artificial General Intelligence?" }, answer: "AGI" },
    { type: "typing", question: { de: "Wie nennt man KI, die nur eine Aufgabe kann (Deutsch)?", hu: "Hogy hívjuk a csak egy feladatra képes MI-t?", ro: "Cum se numește IA care poate face doar o singură sarcină?", en: "What do we call AI that can only do one task?" }, answer: { de: "Schwache KI", hu: "szűk MI", ro: "IA slabă", en: "Narrow AI" } }
  ],
  "ai_k8_t1_2": [ // ASI
    { type: "mcq", question: { de: "Was bedeutet ASI?", hu: "Mit jelent az ASI?", ro: "Ce înseamnă ASI?", en: "What does ASI stand for?" }, options: { de: ["Artificial Super Intelligence", "Advanced System Interface", "Automated Space Intel", "All Smart Items"], hu: ["Mesterséges Szuperintelligencia", "Fejlett Rendszer Interfész", "Automatizált Űr Intelligencia", "Minden Okos Eszköz"], ro: ["Superinteligență Artificială", "Interfață de Sistem Avansată", "Inteligență Spațială Automată", "Toate Obiectele Inteligente"], en: ["Artificial Super Intelligence", "Advanced System Interface", "Automated Space Intel", "All Smart Items"] }, correct: 0 },
    { type: "mcq", question: { de: "Wie definiert man Superintelligenz?", hu: "Hogyan definiáljuk a szuperintelligenciát?", ro: "Cum definim superinteligența?", en: "How do we define superintelligence?" }, options: { de: ["Übertrifft menschliche Intelligenz in allen Bereichen", "Ist so schlau wie ein Hund", "Kann sehr gut rechnen", "Hat viele Festplatten"], hu: ["Minden területen meghaladja az emberi intelligenciát", "Olyan okos, mint egy kutya", "Nagyon jól tud számolni", "Sok merevlemeze van"], ro: ["Depășește inteligența umană în toate domeniile", "Este la fel de inteligentă ca un câine", "Știe să calculeze foarte bine", "Are multe hard disk-uri"], en: ["Surpasses human intelligence in all fields", "Is as smart as a dog", "Can calculate very well", "Has many hard drives"] }, correct: 0 },
    { type: "mcq", question: { de: "Welches Risiko wird oft mit ASI verbunden?", hu: "Milyen kockázatot társítanak gyakran az ASI-hoz?", ro: "Ce risc este adesea asociat cu ASI?", en: "What risk is often associated with ASI?" }, options: { de: ["Kontrollverlust durch den Menschen", "Zu wenig Speicherplatz", "Stromausfall", "Dass sie zu langsam ist"], hu: ["Az ember elveszíti az irányítást felette", "Túl kevés tárhely", "Áramszünet", "Hogy túl lassú lesz"], ro: ["Pierderea controlului de către oameni", "Prea puțin spațiu de stocare", "Pană de curent", "Că va fi prea lentă"], en: ["Loss of control by humans", "Too little storage space", "Power outage", "That it will be too slow"] }, correct: 0 },
    { type: "typing", question: { de: "Was ist die Abkürzung für Artificial Super Intelligence?", hu: "Mi a Mesterséges Szuperintelligencia rövidítése?", ro: "Care este abrevierea pentru Superinteligența Artificială?", en: "What is the abbreviation for Artificial Super Intelligence?" }, answer: "ASI" },
    { type: "typing", question: { de: "Wer prägte den Begriff der Superintelligenz (Nachname)?", hu: "Ki írt híres könyvet a szuperintelligenciáról (vezetéknév)?", ro: "Cine a scris o carte celebră despre superinteligență (nume de familie)?", en: "Who wrote a famous book about superintelligence (last name)?" }, answer: "Bostrom" }
  ],
  "ai_k8_t1_3": [ // Future of Work
    { type: "mcq", question: { de: "Welche Berufe sind am stärksten von KI betroffen?", hu: "Mely szakmákat érinti leginkább az AI?", ro: "Care profesii sunt cele mai afectate de IA?", en: "Which professions are most affected by AI?" }, options: { de: ["Routine- und Datenaufgaben", "Leistungssportler", "Tiefseetaucher", "Gärtner"], hu: ["Rutin- és adatközpontú feladatok", "Élsportolók", "Mélytengeri búvárok", "Kertészek"], ro: ["Sarcinile de rutină și de date", "Sportivii de performanță", "Scafandrii de mare adâncime", "Grădinarii"], en: ["Routine and data tasks", "Professional athletes", "Deep sea divers", "Gardeners"] }, correct: 0 },
    { type: "mcq", question: { de: "Was bedeutet 'Reskilling'?", hu: "Mit jelent a 'Reskilling'?", ro: "Ce înseamnă 'Reskilling'?", en: "What does 'Reskilling' mean?" }, options: { de: ["Neue Fähigkeiten für neue Jobs lernen", "Urlaub machen", "Einen Computer kaufen", "Alte Daten löschen"], hu: ["Új készségek tanulása új munkákhoz", "Nyaralás", "Számítógép vásárlás", "Régi adatok törlése"], ro: ["Învățarea de noi abilități pentru noi locuri de muncă", "Mersul în vacanță", "Cumpărarea unui computer", "Ștergerea datelor vechi"], en: ["Learning new skills for new jobs", "Taking a vacation", "Buying a computer", "Deleting old data"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man die Zusammenarbeit von Mensch und KI?", hu: "Hogy hívják az ember és az AI együttműködését (angolul)?", ro: "Cum se numește colaborarea dintre om și IA (în engleză)?", en: "What do we call the collaboration between humans and AI?" }, answer: { de: "Augmentation", hu: "Augmentáció", ro: "Augmentare", en: "Augmentation" } }
  ],
  "ai_k8_t1_4": [ // Self-driving Ethics
    { type: "mcq", question: { de: "Was ist das 'Trolley-Problem'?", hu: "Mi az a 'Trolley-probléma'?", ro: "Ce este 'Problema troleibuzului'?", en: "What is the 'Trolley Problem'?" }, options: { de: ["Ein ethisches Dilemma über Lebensentscheidungen", "Ein technisches Problem beim Zug", "Eine Frage der Geschwindigkeit", "Ein Problem mit dem Akku"], hu: ["Egy etikai dilemma élet-halál döntésekről", "Egy technikai hiba a vonatnál", "Sebesség kérdése", "Akkumulátor probléma"], ro: ["O dilemă etică despre decizii de viață și moarte", "O problemă tehnică la tren", "O chestiune de viteză", "O problemă cu bateria"], en: ["An ethical dilemma about life-and-death decisions", "A technical problem with the train", "A question of speed", "A battery problem"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man Autos, die ohne Fahrer fahren?", hu: "Hogy hívják a vezető nélkül közlekedő autókat?", ro: "Cum se numesc mașinile care circulă fără șofer?", en: "What do we call cars that drive without a driver?" }, answer: { de: "Autonom", hu: "Önvezető", ro: "Autonome", en: "Self-driving" } }
  ],
  "ai_k8_t1_5": [ // Autonomous Weapons
    { type: "mcq", question: { de: "Was sind 'Lethal Autonomous Weapons' (LAWs)?", hu: "Mik azok a gyilkos autonóm fegyverek (LAWs)?", ro: "Ce sunt 'Armele Autonome Letale' (LAWs)?", en: "What are Lethal Autonomous Weapons (LAWs)?" }, options: { de: ["Waffen, die Ziele ohne menschliches Eingreifen wählen", "Video-Spiele", "Alte Kanonen", "Polizeiautos"], hu: ["Fegyverek, amik emberi beavatkozás nélkül választanak célpontot", "Videojátékok", "Régi ágyúk", "Rőndőrautók"], ro: ["Arme care aleg ținte fără intervenție umană", "Jocuri video", "Tunuri vechi", "Mașini de poliție"], en: ["Weapons that choose targets without human intervention", "Video games", "Old cannons", "Police cars"] }, correct: 0 },
    { type: "typing", question: { de: "Was ist die Abkürzung für Lethal Autonomous Weapons?", hu: "Mi a gyilkos autonóm fegyverek angol rövidítése?", ro: "Care este abrevierea engleză pentru Armele Autonome Letale?", en: "What is the abbreviation for Lethal Autonomous Weapons?" }, answer: "LAWS" }
  ],
  "ai_k8_t1_6": [ // Advanced Privacy
    { type: "mcq", question: { de: "Was ist 'Differential Privacy'?", hu: "Mi az a 'Differential Privacy'?", ro: "Ce este 'Differential Privacy'?", en: "What is Differential Privacy?" }, options: { de: ["Ein System zum Schutz einzelner Datenpunkte in großen Mengen", "Ein Passwort-Manager", "Eine Art von Firewall", "Das Löschen von Cookies"], hu: ["Egy rendszer az egyéni adatok védelmére nagy adathalmazokban", "Egy jelszókezelő", "Egyfajta tűzfal", "Sütik törlése"], ro: ["Un sistem pentru protejarea datelor individuale în seturi mari de date", "Un manager de parole", "Un tip de firewall", "Ștergerea cookie-urilor"], en: ["A system to protect individual data points in large datasets", "A password manager", "A type of firewall", "Deleting cookies"] }, correct: 0 },
    { type: "typing", question: { de: "Was bedeutet die DSGVO (GDPR) Abkürzung?", hu: "Melyik uniós rendelet védi az adatokat (rövidítés)?", ro: "Ce regulament UE protejează datele (abreviere)?", en: "Which EU regulation protects data (abbreviation)?" }, answer: "GDPR" }
  ],
  "ai_k8_t2_1": [ // Digital Citizenship
    { type: "mcq", question: { de: "Was gehört zur digitalen Bürgerschaft?", hu: "Mi tartozik a digitális állampolgársághoz?", ro: "Ce aparține cetățeniei digitale?", en: "What belongs to digital citizenship?" }, options: { de: ["Verantwortungsbewusster Umgang mit Technik", "Nur Online-Shopping", "Viel Computerspielen", "Ein neues Handy haben"], hu: ["Felelősségteljes technológia használat", "Csak online vásárlás", "Sok számítógépes játék", "Új telefon birtoklása"], ro: ["Utilizarea responsabilă a tehnologiei", "Doar cumpărăturile online", "Multe jocuri pe calculator", "Deținerea unui telefon nou"], en: ["Responsible use of technology", "Only online shopping", "Playing lots of games", "Having a new phone"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man die Kluft beim Zugang zu Technik?", hu: "Hogy hívják a technológiához való hozzáférés szakadékát (angolul)?", ro: "Cum se numește prăpastia accesului la tehnologie (în engleză)?", en: "What is the gap in technology access called?" }, answer: "Digital Divide" }
  ],
  "ai_k8_t2_2": [ // AI and Democracy
    { type: "mcq", question: { de: "Wie kann KI Wahlen beeinflussen?", hu: "Hogyan befolyásolhatja az AI a választásokat?", ro: "Cum poate IA influența alegerile?", en: "How can AI influence elections?" }, options: { de: ["Durch gezielte Desinformation (Deepfakes)", "Durch das Zählen von Blättern", "Durch das Wetter", "Gar nicht"], hu: ["Célzott dezinformációval (Deepfakes)", "Levelek számolásával", "Az időjárással", "Egyáltalán nem"], ro: ["Prin dezinformare direcționată (Deepfakes)", "Prin numărarea frunzelor", "Prin vreme", "Deloc"], en: ["Through targeted disinformation (Deepfakes)", "By counting leaves", "By the weather", "Not at all"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man künstlich erzeugte, echt wirkende Videos?", hu: "Hogy hívják a mesterségesen generált, valódinak tűnő videókat?", ro: "Cum se numesc videoclipurile generate artificial care par reale?", en: "What are artificially generated, realistic-looking videos called?" }, answer: "Deepfake" }
  ],
  "ai_k8_t2_3": [ // AI vs Human Intel
    { type: "mcq", question: { de: "Was ist ein Vorteil menschlicher Intelligenz gegenüber heutiger KI?", hu: "Mi az emberi intelligencia előnye a mai MI-vel szemben?", ro: "Care este avantajul inteligenței umane față de IA actuală?", en: "What is an advantage of human intelligence over today's AI?" }, options: { de: ["Empathie und Kontextverständnis", "Rechengeschwindigkeit", "Speicherkapazität", "Keine Pausen brauchen"], hu: ["Empátia és kontextus megértése", "Számítási sebesség", "Tárolókapacitás", "Nincs szükség szünetre"], ro: ["Empatia și înțelegerea contextului", "Viteza de calcul", "Capacitatea de stocare", "Nu are nevoie de pauze"], en: ["Empathy and context understanding", "Calculation speed", "Storage capacity", "Not needing breaks"] }, correct: 0 },
    { type: "typing", question: { de: "Welches Organ ist das Vorbild für Neuronale Netze?", hu: "Melyik szerv a mintája a neurális hálóknak?", ro: "Care organ este modelul pentru rețelele neuronale?", en: "Which organ is the model for neural networks?" }, answer: { de: "Gehirn", hu: "Agy", ro: "Creier", en: "Brain" } }
  ],
  "ai_k8_t2_4": [ // Social Impacts
    { type: "mcq", question: { de: "Was ist eine 'Filterblase'?", hu: "Mi az a 'szűrőbuborék'?", ro: "Ce este o 'bulă de filtrare'?", en: "What is a 'filter bubble'?" }, options: { de: ["Algorithmen zeigen nur Inhalte, die die eigene Meinung bestätigen", "Ein Schutz für das Handy", "Ein Teil des Internets", "Eine Art von Chat"], hu: ["Az algoritmusok csak a véleményünket megerősítő tartalmat mutatják", "Egy telefontok", "Az internet egy része", "Egyfajta chat"], ro: ["Algoritmii arată doar conținut care confirmă propria opinie", "O protecție pentru telefon", "O parte a internetului", "Un tip de chat"], en: ["Algorithms only show content that confirms our own opinion", "A phone case", "A part of the internet", "A type of chat"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man Voreingenommenheit in KI-Systemen?", hu: "Hogy hívják az MI-rendszerek elfogultságát (angolul)?", ro: "Cum se numește părtinirea în sistemele IA (în engleză)?", en: "What is bias in AI systems called?" }, answer: "Bias" }
  ],
  "ai_k8_t2_5": [ // Singularity
    { type: "mcq", question: { de: "Was ist die 'Technologische Singularität'?", hu: "Mi a 'technológiai szingularitás'?", ro: "Ce este 'singularitatea tehnologică'?", en: "What is 'technological singularity'?" }, options: { de: ["Zeitpunkt, an dem KI-Wachstum unkontrollierbar wird", "Ein neues Update für Windows", "Die Erfindung des Rades", "Eine neue Art von Akku"], hu: ["Az a pont, ahol az MI fejlődése irányíthatatlanná válik", "Egy új Windows frissítés", "A kerék feltalálása", "Egy új típusú akkumulátor"], ro: ["Momentul în care creșterea IA devine necontrolabilă", "O nouă actualizare pentru Windows", "Invenția roții", "Un nou tip de baterie"], en: ["The point where AI growth becomes uncontrollable", "A new Windows update", "The invention of the wheel", "A new type of battery"] }, correct: 0 },
    { type: "typing", question: { de: "Welcher Futurist ist bekannt für die Szingularitäts-Theorie (Nachname)?", hu: "Melyik jövőkutató híres a szingularitás elméletéről (vezetéknév)?", ro: "Care futurist este celebru pentru teoria singularității (nume de familie)?", en: "Which futurist is famous for the singularity theory (last name)?" }, answer: "Kurzweil" }
  ],
  "ai_k8_t2_6": [ // Superintelligence
    { type: "mcq", question: { de: "Welche Art von Superintelligenz würde menschliche Gehirne kopieren?", hu: "Melyik szuperintelligencia másolná le az emberi agyat?", ro: "Ce tip de superinteligență ar copia creierul uman?", en: "Which type of superintelligence would copy human brains?" }, options: { de: ["Whole Brain Emulation", "Speed Superintelligence", "Collective Superintelligence", "None of these"], hu: ["Teljes agyemuláció", "Gyorsasági szuperintelligencia", "Kollektív szuperintelligencia", "Egyik sem"], ro: ["Emularea întregului creier", "Superinteligență de viteză", "Superinteligență colectivă", "Niciuna dintre acestea"], en: ["Whole brain emulation", "Speed superintelligence", "Collective superintelligence", "None of these"] }, correct: 0 },
    { type: "typing", question: { de: "Anderes Wort für Superintelligenz-Gefahr (Englisch)?", hu: "Másik szó a szuperintelligencia veszélyére (angolul)?", ro: "Alt cuvânt pentru pericolul superinteligenței (în engleză)?", en: "Another word for superintelligence threat?" }, answer: "Existential Risk" }
  ],
  "ai_k8_t3_1": [ // AI Oversight
    { type: "mcq", question: { de: "Was bedeutet 'Human-in-the-loop'?", hu: "Mit jelent a 'Human-in-the-loop'?", ro: "Ce înseamnă 'Human-in-the-loop'?", en: "What does 'Human-in-the-loop' mean?" }, options: { de: ["Ein Mensch muss KI-Entscheidungen bestätigen", "Menschen müssen im Kreis laufen", "Ein Mensch baut die Hardware", "KI kontrolliert Menschen"], hu: ["Egy embernek meg kell erősítenie az MI döntéseit", "Embereknek körben kell járniuk", "Egy ember építi a hardvert", "Az MI irányítja az embereket"], ro: ["Un om trebuie să confirme deciziile IA", "Oamenii trebuie să meargă în cerc", "Un om construiește hardware-ul", "IA controlează oamenii"], en: ["A human must confirm AI decisions", "Humans have to walk in a circle", "A human builds the hardware", "AI controls humans"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man die Überwachung von KI?", hu: "Hogy hívják az MI felügyeletét?", ro: "Cum se numește supravegherea IA?", en: "What is AI monitoring called?" }, answer: { de: "Aufsicht", hu: "Felügyelet", ro: "Supraveghere", en: "Oversight" } }
  ],
  "ai_k8_t3_2": [ // AI Alignment
    { type: "mcq", question: { de: "Was ist das Alignment-Problem?", hu: "Mi az az illesztési (alignment) probléma?", ro: "Ce este problema alinierii (alignment)?", en: "What is the alignment problem?" }, options: { de: ["KI-Ziele stimmen nicht mit menschlichen Werten überein", "Die Stecker passen nicht", "Die Software ist zu groß", "Die KI ist zu langsam"], hu: ["Az MI céljai nem egyeznek az emberi értékekkel", "Nem passzolnak a csatlakozók", "Túl nagy a szoftver", "Túl lassú az MI"], ro: ["Obiectivele IA nu coincid cu valorile umane", "Mufele nu se potrivesc", "Software-ul este prea mare", "IA este prea lentă"], en: ["AI goals do not match human values", "The plugs don't fit", "The software is too large", "The AI is too slow"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man die Übereinstimmung von Zielen?", hu: "Hogy hívják a célok összehangolását (angolul)?", ro: "Cum se numește alinierea obiectivelor (în engleză)?", en: "What is matching goals called?" }, answer: "Alignment" }
  ],
  "ai_k8_t3_3": [ // Safety Research
    { type: "mcq", question: { de: "Was ist 'Robustness' bei KI?", hu: "Mit jelent a 'robusztusság' az MI-nél?", ro: "Ce înseamnă 'robustețea' la IA?", en: "What does 'robustness' mean in AI?" }, options: { de: ["KI funktioniert auch bei unerwarteten Eingaben sicher", "KI ist aus schwerem Metall", "KI hat viel Speicher", "KI ist sehr teuer"], hu: ["Az MI váratlan bemenetek esetén is biztonságosan működik", "Az MI nehéz fémből van", "Az MI-nek sok memóriája van", "Az MI nagyon drága"], ro: ["IA funcționează în siguranță chiar și la intrări neașteptate", "IA este făcută din metal greu", "IA are multă memorie", "IA este foarte scumpă"], en: ["AI works safely even with unexpected inputs", "AI is made of heavy metal", "AI has a lot of memory", "AI is very expensive"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man Angriffe auf KI-Modelle?", hu: "Hogy hívják az MI-modellek elleni támadásokat (angolul)?", ro: "Cum se numesc atacurile asupra modelelor IA (în engleză)?", en: "What are attacks on AI models called?" }, answer: "Adversarial Attacks" }
  ],
  "ai_k8_t3_4": [ // Philosophical Questions
    { type: "mcq", question: { de: "Kann KI Bewusstsein haben?", hu: "Lehet-e az MI-nek öntudata?", ro: "Poate IA să aibă conștiință?", en: "Can AI have consciousness?" }, options: { de: ["Das ist eine ungelöste philosophische Frage", "Ja, seit 2020", "Nein, niemals", "Nur wenn sie Batterien hat"], hu: ["Ez egy megoldatlan filozófiai kérdés", "Igen, 2020 óta", "Nem, soha", "Csak ha van benne elem"], ro: ["Aceasta este o întrebare filozofică nerezolvată", "Da, din 2020", "Nu, niciodată", "Doar dacă are baterii"], en: ["That is an unsolved philosophical question", "Yes, since 2020", "No, never", "Only if it has batteries"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man das Problem des Geistes (Englisch)?", hu: "Hogy hívják a tudat nehéz problémáját (angolul)?", ro: "Cum se numește problema dificilă a conștiinței (în engleză)?", en: "What is the mind problem called?" }, answer: "Hard Problem of Consciousness" }
  ],
  "ai_k8_t3_5": [ // Turing Test
    { type: "mcq", question: { de: "Wer erfand den Turing-Test?", hu: "Ki találta fel a Turing-tesztet?", ro: "Cine a inventat testul Turing?", en: "Who invented the Turing Test?" }, options: { de: ["Alan Turing", "Albert Einstein", "Bill Gates", "Isaac Newton"], hu: ["Alan Turing", "Albert Einstein", "Bill Gates", "Isaac Newton"], ro: ["Alan Turing", "Albert Einstein", "Bill Gates", "Isaac Newton"], en: ["Alan Turing", "Albert Einstein", "Bill Gates", "Isaac Newton"] }, correct: 0 },
    { type: "typing", question: { de: "Wie hieß der Turing-Test ursprünglich?", hu: "Hogy hívták eredetileg a Turing-tesztet (angolul)?", ro: "Cum se numea inițial testul Turing (în engleză)?", en: "What was the Turing Test originally called?" }, answer: "Imitation Game" }
  ],
  "ai_k8_t3_6": [ // Chinese Room
    { type: "mcq", question: { de: "Was will das 'Chinesische Zimmer' zeigen?", hu: "Mit akar megmutatni a 'Kínai szoba'?", ro: "Ce vrea să demonstreze 'Camera Chineză'?", en: "What does the 'Chinese Room' want to show?" }, options: { de: ["Dass Rechnen nicht gleich Verstehen ist", "Wie man Chinesisch lernt", "Dass Computer alles wissen", "Dass Zimmer groß sein müssen"], hu: ["Hogy a számolás nem azonos a megértéssel", "Hogyan tanuljunk kínaiul", "Hogy a számítógépek mindent tudnak", "Hogy a szobáknak nagynak kell lenniük"], ro: ["Că procesarea nu înseamnă înțelegere", "Cum se învață limba chineză", "Că calculatoarele știu totul", "Că camerele trebuie să fie mari"], en: ["That processing is not the same as understanding", "How to learn Chinese", "That computers know everything", "That rooms must be large"] }, correct: 0 },
    { type: "typing", question: { de: "Wer erfand das Gedankenexperiment 'Chinesische Zimmer' (Nachname)?", hu: "Ki találta fel a 'Kínai szoba' gondolatkísérletet (vezetéknév)?", ro: "Cine a inventat experimentul mental 'Camera Chineză' (nume de familie)?", en: "Who invented the 'Chinese Room' thought experiment (last name)?" }, answer: "Searle" }
  ],
  "ai_k8_t4_1": [ // AI and Religion
    { type: "mcq", question: { de: "Wie reagieren Religionen auf KI?", hu: "Hogyan reagálnak a vallások az MI-re?", ro: "Cum reacționează religiile la IA?", en: "How do religions react to AI?" }, options: { de: ["Diskussionen über Seele und Schöpfung", "Sie ignorieren es", "Sie verbieten alle Computer", "Sie bauen eigene Roboter-Götter"], hu: ["Viták a lélekről és a teremtésről", "Figyelmen kívül hagyják", "Betiltanak minden számítógépet", "Saját robot-isteneket építenek"], ro: ["Discuții despre suflet și creație", "O ignoră", "Interzic toate calculatoarele", "Construiesc proprii zei roboți"], en: ["Discussions about soul and creation", "They ignore it", "They ban all computers", "They build their own robot gods"] }, correct: 0 },
    { type: "typing", question: { de: "Können Maschinen laut Theologie eine Seele haben?", hu: "Lehet a gépeknek lelkük a teológia szerint?", ro: "Pot mașinile să aibă suflet conform teologiei?", en: "Can machines have a soul according to theology?" }, answer: { de: "Umstritten", hu: "Vitatott", ro: "Controversat", en: "Controversial" } }
  ],
  "ai_k8_t4_2": [ // AI and Art
    { type: "mcq", question: { de: "Wer besitzt das Urheberrecht an KI-Kunst?", hu: "Kié a szerzői jog az MI-művészetnél?", ro: "Cine deține drepturile de autor pentru arta IA?", en: "Who owns the copyright for AI art?" }, options: { de: ["Rechtlich oft unklar / Menschlicher Ersteller", "Die KI selbst", "Niemand", "Der Stromanbieter"], hu: ["Jogilag gyakran tisztázatlan / Az emberi készítő", "Maga az MI", "Senki", "Az áramszolgáltató"], ro: ["Adesea neclar din punct de vedere legal / Creatorul uman", "IA însăși", "Nimeni", "Furnizorul de energie"], en: ["Often legally unclear / Human creator", "The AI itself", "Nobody", "The power provider"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man Befehle für Bild-KI?", hu: "Hogy hívják a kép-MI-nek adott utasításokat (angolul)?", ro: "Cum se numesc comenzile date IA de imagini (în engleză)?", en: "What are commands for image AI called?" }, answer: "Prompt" }
  ],
  "ai_k8_t4_3": [ // AI and Sport
    { type: "mcq", question: { de: "Wie hilft KI im Profisport?", hu: "Hogyan segít az MI a profi sportban?", ro: "Cum ajută IA în sportul de performanță?", en: "How does AI help in professional sports?" }, options: { de: ["Analyse von Bewegungen und Taktik", "Durch das Spielen für die Menschen", "Durch das Putzen der Schuhe", "Gar nem"], hu: ["Mozgás és taktika elemzése", "Az emberek helyett játszik", "Cipőpucolással", "Sehogy"], ro: ["Analiza mișcărilor și a tacticii", "Jucând în locul oamenilor", "Curățând pantofii", "Deloc"], en: ["Analysis of movements and tactics", "By playing for humans", "By cleaning shoes", "Not at all"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man Datenanalyse im Sport?", hu: "Hogy hívják az adatelemzést a sportban (angolul)?", ro: "Cum se numește analiza datelor în sport (în engleză)?", en: "What is data analysis in sports called?" }, answer: "Sports Analytics" }
  ],
  "ai_k8_t4_4": [ // AI and Military
    { type: "mcq", question: { de: "Was ist eine Gefahr von KI im Militär?", hu: "Mi az MI veszélye a katonaságnál?", ro: "Care este un pericol al IA în armată?", en: "What is a danger of AI in the military?" }, options: { de: ["Zu schnelle Eskalation durch Algorithmen", "Dass Soldaten zu viel schlafen", "Dass Waffen zu bunt sind", "Dass Panzer zu leise sind"], hu: ["Túl gyors eszkaláció az algoritmusok miatt", "Hogy a katonák túl sokat alszanak", "Hogy a fegyverek túl színesek", "Hogy a tankok túl halkak"], ro: ["Escaladarea prea rapidă din cauza algoritmilor", "Că soldații dorm prea mult", "Că armele sunt prea colorate", "Că tancurile sunt prea silențioase"], en: ["Too rapid escalation due to algorithms", "That soldiers sleep too much", "That weapons are too colorful", "That tanks are too quiet"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man Drohnen, die selbst entscheiden?", hu: "Hogy hívják az önállóan döntő drónokat?", ro: "Cum se numesc dronele care decid singure?", en: "What are drones that decide for themselves called?" }, answer: { de: "Autonome Drohnen", hu: "Autonóm drónok", ro: "Drone autonome", en: "Autonomous drones" } }
  ],
  "ai_k8_t4_5": [ // AI and Education
    { type: "mcq", question: { de: "Was ist 'Personalized Learning' durch KI?", hu: "Mi a személyre szabott tanulás az MI segítségével?", ro: "Ce este învățarea personalizată prin IA?", en: "What is personalized learning through AI?" }, options: { de: ["Lerninhalte passen sich dem Tempo des Schülers an", "Jeder bekommt den gleichen Test", "KI schreibt die Hausaufgaben", "Lehrer werden abgeschafft"], hu: ["A tananyag alkalmazkodik a diák tempójához", "Mindenki ugyanazt a tesztet kapja", "Az MI megírja a házit", "A tanárokat megszüntetik"], ro: ["Conținutul se adaptează ritmului elevului", "Toată lumea primește același test", "IA scrie temele", "Profesorii sunt eliminați"], en: ["Learning content adapts to the student's pace", "Everyone gets the same test", "AI writes homework", "Teachers are abolished"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man KI-Tutoren?", hu: "Hogy hívják az MI alapú korrepetitorokat (angolul)?", ro: "Cum se numesc tutorii bazați pe IA (în engleză)?", en: "What are AI-based tutors called?" }, answer: "Intelligent Tutoring Systems" }
  ],
  "ai_k8_t4_6": [ // AI and Aging
    { type: "mcq", question: { de: "Wie kann KI alten Menschen helfen?", hu: "Hogyan segíthet az MI az időseknek?", ro: "Cum poate IA să ajute persoanele în vârstă?", en: "How can AI help elderly people?" }, options: { de: ["Sturzerkennung und Medikamenten-Erinnerung", "Durch Verjüngung", "Durch das Löschen von Erinnerungen", "Gar nicht"], hu: ["Esésérzékelés és gyógyszer-emlékeztető", "Fiatalítással", "Emlékek törlésével", "Sehogy"], ro: ["Detectarea căderilor și reamintirea medicamentelor", "Prin întinerire", "Prin ștergerea amintirilor", "Deloc"], en: ["Fall detection and medication reminders", "By rejuvenation", "By deleting memories", "Not at all"] }, correct: 0 },
    { type: "typing", question: { de: "Wie nennt man Roboter für die Pflege?", hu: "Hogy hívják az ápolási robotokat (angolul)?", ro: "Cum se numesc roboții pentru îngrijire (în engleză)?", en: "What are care robots called?" }, answer: "Carebots" }
  ]
};

// Generic fallback data generator to ensure 25 MCQ + 10 Typing per subtopic
function getRawQuestions(subId: string): RawQuestion[] {
  // A gazdag JSON-tartalmat is használjuk (a régi AI_DATA csak az inline-t tartalmazta + 25/10-ciklus duplikált).
  const fromJson = Array.isArray((AI_K8_JSON as any)[subId]) ? ((AI_K8_JSON as any)[subId] as RawQuestion[]) : [];
  const fromInline = Array.isArray(AI_DATA[subId]) ? AI_DATA[subId] : [];
  const merged = fromJson.length >= fromInline.length ? [...fromJson, ...fromInline] : [...fromInline, ...fromJson];
  const seen = new Set<string>();
  const out: RawQuestion[] = [];
  for (const q of merged) {
    const ql = (q as any)?.question;
    const key = (ql && ql.hu) || (typeof ql === "string" ? ql : JSON.stringify(q));
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(q);
  }
  if (out.length > 0) return out;
  const fb = AI_DATA["ai_k8_t1_1"];
  return Array.isArray(fb) ? fb : [];
}

export const AI_K8_CURRICULUM: KemiaTheme[] = [
  {
    id: "ai_k8_th1",
    name: "AI Elmélet és Intelligencia",
    icon: "🧠",
    color: "#3B82F6",
    subtopics: [
      { id: "ai_k8_t1_1", name: { de: "AGI", hu: "AGI", ro: "AGI", en: "AGI" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t1_2", name: { de: "ASI", hu: "ASI", ro: "ASI", en: "ASI" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t3_5", name: { de: "Turing Test", hu: "Turing teszt", ro: "Testul Turing", en: "Turing Test" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t3_6", name: { de: "Chinesisches Zimmer", hu: "Kínai szoba", ro: "Camera Chineză", en: "Chinese Room" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t2_3", name: { de: "KI vs. Mensch", hu: "AI vs emberi intelligencia", ro: "IA vs inteligența umană", en: "AI vs Human Intelligence" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t2_5", name: { de: "Singularität", hu: "AI szingularitás", ro: "Singularitate IA", en: "AI Singularity" }, questions: [], hasGenerator: false }
    ]
  },
  {
    id: "ai_k8_th2",
    name: "Etika és Jog",
    icon: "⚖️",
    color: "#EF4444",
    subtopics: [
      { id: "ai_k8_t1_4", name: { de: "Ethik autonomer Autos", hu: "Önvezető autók etika", ro: "Etica mașinilor autonome", en: "Self-driving Ethics" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t1_5", name: { de: "Autonome Waffen", hu: "AI fegyverek", ro: "Arme autonome", en: "Autonomous Weapons" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t1_6", name: { de: "Datenschutz", hu: "Adatvédelem haladó", ro: "Protecția datelor avansată", en: "Advanced Privacy" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t2_2", name: { de: "KI und Demokratie", hu: "AI és demokrácia", ro: "IA și democrația", en: "AI and Democracy" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t3_2", name: { de: "AI Alignment", hu: "AI alignment", ro: "Alinierea IA", en: "AI Alignment" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t3_1", name: { de: "KI Überwachung", hu: "AI felügyelet", ro: "Supraveghere IA", en: "AI Oversight" }, questions: [], hasGenerator: false }
    ]
  },
  {
    id: "ai_k8_th3",
    name: "Társadalom és Jövő",
    icon: "🌍",
    color: "#10B981",
    subtopics: [
      { id: "ai_k8_t1_3", name: { de: "Zukunft der Arbeit", hu: "AI jövő-munkák", ro: "Viitorul muncii", en: "Future of Work" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t2_1", name: { de: "Digitale Bürgerschaft", hu: "Digital citizenship", ro: "Cetățenie digitală", en: "Digital Citizenship" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t2_4", name: { de: "Soziale Auswirkungen", hu: "AI társadalmi hatások", ro: "Impactul social al IA", en: "Social Impacts" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t4_5", name: { de: "KI und Bildung", hu: "AI és oktatás", ro: "IA și educația", en: "AI and Education" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t4_6", name: { de: "KI und Altern", hu: "AI és öregedés", ro: "IA și îmbătrânirea", en: "AI and Aging" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t4_1", name: { de: "KI und Religion", hu: "AI és vallás", ro: "IA și religia", en: "AI and Religion" }, questions: [], hasGenerator: false }
    ]
  },
  {
    id: "ai_k8_th4",
    name: "Biztonság és Alkalmazás",
    icon: "🛡️",
    color: "#F59E0B",
    subtopics: [
      { id: "ai_k8_t3_3", name: { de: "Sicherheitsforschung", hu: "AI safety research", ro: "Cercetarea siguranței IA", en: "AI Safety Research" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t4_4", name: { de: "Militärische KI", hu: "AI és katonai", ro: "IA și domeniul militar", en: "AI and Military" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t4_2", name: { de: "KI und Kunst", hu: "AI és művészet", ro: "IA și arta", en: "AI and Art" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t4_3", name: { de: "KI und Sport", hu: "AI és sport", ro: "IA și sportul", en: "AI and Sport" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t3_4", name: { de: "Philosophische Fragen", hu: "AI philosophiai kérdések", ro: "Întrebări filozofice IA", en: "Philosophical Questions" }, questions: [], hasGenerator: false },
      { id: "ai_k8_t2_6", name: { de: "Superintelligenz", hu: "AI szuperintelligencia", ro: "Superinteligență IA", en: "Superintelligence" }, questions: [], hasGenerator: false }
    ]
  }
];

// Initialize questions for all subtopics
AI_K8_CURRICULUM.forEach(theme => {
  theme.subtopics.forEach(sub => {
    const raw = getRawQuestions(sub.id);
    sub.questions = raw.map((q, idx) => {
      const qId = `${sub.id}_q${idx}`;
      if (q.type === "mcq") {
        return {
          type: "mcq",
          topic: "ai",
          subtopic: sub.id,
          question: q.question.hu,
          options: q.options?.hu || [],
          correct: q.correct || 0,
          _lang: {
            de: { q: q.question.de, opts: q.options?.de },
            hu: { q: q.question.hu, opts: q.options?.hu },
            ro: { q: q.question.ro, opts: q.options?.ro },
            en: { q: q.question.en, opts: q.options?.en }
          }
        } as any;
      } else {
        return {
          type: "typing",
          topic: "ai",
          subtopic: sub.id,
          question: q.question.hu,
          answer: q.answer && typeof q.answer === 'object' ? q.answer.hu : (q.answer || ""),
          _lang: {
            de: { q: q.question.de, ans: q.answer && typeof q.answer === 'object' ? q.answer.de : q.answer },
            hu: { q: q.question.hu, ans: q.answer && typeof q.answer === 'object' ? q.answer.hu : q.answer },
            ro: { q: q.question.ro, ans: q.answer && typeof q.answer === 'object' ? q.answer.ro : q.answer },
            en: { q: q.question.en, ans: q.answer && typeof q.answer === 'object' ? q.answer.en : q.answer }
          }
        } as any;
      }
    });
  });
});

export function getAIK8Questions(subtopicIds: string[], count = 10, lang = "hu"): KemiaQuestion[] {
  let pool: any[] = [];
  AI_K8_CURRICULUM.forEach(theme => {
    theme.subtopics.forEach(sub => {
      if (subtopicIds.includes(sub.id)) {
        sub.questions.forEach((q: any) => {
          const localized = { ...q };
          const lData = q._lang?.[lang] || q._lang?.["en"] || q._lang?.["hu"];
          if (lData) {
            localized.question = lData.q;
            if (q.type === "mcq") localized.options = lData.opts;
            else localized.answer = lData.ans;
          }
          pool.push(localized);
        });
      }
    });
  });
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return selectDiverseAIQuestions(pool, count);
}
