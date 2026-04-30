
import fs from 'fs';
import path from 'path';

const header = 'import type { POI } from "./poi";\n\n';

const cities = [
  {
    id: "city-grenoble-extra",
    type: "city",
    parent: "FR-ARA",
    coords: [5.7245, 45.1885],
    name: { de: "Grenoble", hu: "Grenoble", ro: "Grenoble", en: "Grenoble" },
    description: {
      de: "Grenoble, bekannt als die 'Hauptstadt der Alpen', ist ein bedeutendes europäisches Zentrum für Wissenschaft und Technologie, umgeben von Bergen.",
      hu: "Grenoble, az 'Alpok fővárosa', a tudomány és technológia fontos európai központja, hegyekkel körülvéve.",
      ro: "Grenoble, cunoscut ca 'Capitala Alpilor', este un centru european major pentru știință și tehnologie, înconjurat de munți.",
      en: "Grenoble, known as the 'Capital of the Alps,' is a major European center for science and technology, surrounded by mountains."
    },
    facts: {
      de: ["Gastgeber der Olympischen Winterspiele 1968.", "Zentrum für Nuklearforschung.", "Seilbahn zur Bastille Festung."],
      hu: ["Az 1968-as téli olimpia házigazdája.", "Atomkutatási központ.", "Felvonó a Bastille erődhöz."],
      ro: ["Gazda Jocurilor Olimpice de iarnă din 1968.", "Centru de cercetare nucleară.", "Telecabină către Fortăreața Bastilia."],
      en: ["Host of the 1968 Winter Olympics.", "Center for nuclear research.", "Cable car to the Bastille fortress."]
    },
    descriptionAdvanced: {
      de: "Grenoble, im Herzen der französischen Alpen, ist nicht nur für seine atemberaubende Bergkulisse bekannt, sondern auch als eines der führenden Forschungs- und Innovationszentren Europas. Die Stadt beherbergt das European Synchrotron Radiation Facility (ESRF) und das Institut Laue-Langevin, was sie zu einem Magneten für Wissenschaftler aus aller Welt macht. Neben der Hochtechnologie pflegt Grenoble ein reiches kulturelles Erbe. Das Musée de Grenoble bietet eine beeindruckende Sammlung von Kunstwerken, die von der Antike bis zur Gegenwart reicht. Die historische Altstadt mit ihren engen Gassen und dem Place Grenette lädt zum Verweilen ein und verbindet alpinen Charme mit städtischem Flair. Geografie K7 — Gebirgsregionen und Stadtplanung.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Heimat von Stendhal, einem der bedeutendsten französischen Schriftsteller.",
        "Die Universität Grenoble Alpes ist eine der größten Frankreichs.",
        "Die Bastille-Festung ist per Seilbahn 'Les Bulles' erreichbar.",
        "Grenoble war Vorreiter bei der Einführung von Fußgängerzonen.",
        "Die Region ist berühmt für die 'Noix de Grenoble' (Walnüsse).",
        "Die Stadt liegt am Zusammenfluss von Isère und Drac.",
        "Das ESRF ist die intensivste Synchrotron-Lichtquelle weltweit."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "city-strasbourg-extra",
    type: "city",
    parent: "FR-GES",
    coords: [7.7521, 48.5734],
    name: { de: "Straßburg", hu: "Strasbourg", ro: "Strasbourg", en: "Strasbourg" },
    description: {
      de: "Straßburg ist der offizielle Sitz des Europäischen Parlaments und ein Symbol der deutsch-französischen Aussöhnung. Die Altstadt Grande Île ist UNESCO-Weltkulturerbe.",
      hu: "Strasbourg az Európai Parlament hivatalos székhelye és a francia-német megbékélés szimbóluma. A Grande Île történelmi központja az UNESCO Világörökség része.",
      ro: "Strasbourg este sediul oficial al Parlamentului European și un simbol al reconcilierii franco-germane. Centrul său istoric, Grande Île, este un sit al Patrimoniului Mondial UNESCO.",
      en: "Strasbourg is the official seat of the European Parliament and a symbol of Franco-German reconciliation. Its historic center, the Grande Île, is a UNESCO World Heritage site."
    },
    facts: {
      de: ["Sitz des Europäischen Parlaments.", "Historisches Viertel 'Petite France'.", "Berühmter Weihnachtsmarkt."],
      hu: ["Az Európai Parlament székhelye.", "A 'Petite France' történelmi negyed.", "Híres karácsonyi vásár."],
      ro: ["Sediul Parlamentului European.", "Cartierul istoric 'Petite France'.", "Târg de Crăciun renumit."],
      en: ["Seat of the European Parliament.", "Historic 'Petite France' quarter.", "Famous Christmas market."]
    },
    descriptionAdvanced: {
      de: "Als Hauptstadt des Elsass verbindet Straßburg auf einzigartige Weise französische und deutsche Kultur. Das Herz der Stadt, die Grande Île, wird vom Fluss Ill umschlossen und ist geprägt von mittelalterlichen Fachwerkhäusern und engen Gassen. Das Viertel 'Petite France' ist besonders malerisch mit seinen Kanälen und alten Gerberhäusern. Neben dem Europäischen Parlament beherbergt die Stadt auch den Europarat und den Europäischen Gerichtshof für Menschenrechte, was ihre Bedeutung als europäische Hauptstadt unterstreicht. Das Straßburger Münster (Cathédrale Notre-Dame) ist ein Meisterwerk der Gotik; seine astronomische Uhr und die Aussichtsplattform ziehen Besucher magisch an. Geschichte K8 — Europäische Integration und Versöhnung.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Grande Île wurde 1988 UNESCO-Weltkulturerbe.",
        "Der Weihnachtsmarkt 'Christkindelsmärik' besteht seit 1570.",
        "Gutenberg entwickelte hier den Buchdruck mit beweglichen Lettern.",
        "Das Vauban-Wehr bietet Panoramablicke auf die Stadt.",
        "Die Stadt hat das größte Straßenbahnnetz Frankreichs.",
        "Die 'Marseillaise' wurde 1792 in Straßburg komponiert.",
        "Die Nationalbibliothek ist die zweitgrößte des Landes."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "city-rouen-extra",
    type: "city",
    parent: "FR-NOR",
    coords: [1.0993, 49.4432],
    name: { de: "Rouen", hu: "Rouen", ro: "Rouen", en: "Rouen" },
    description: {
      de: "Rouen ist die historische Hauptstadt der Normandie, bekannt für ihre beeindruckende Kathedrale, die von Claude Monet gemalt wurde, und als der Ort, an dem Jeanne d'Arc verbrannt wurde.",
      hu: "Rouen Normandia történelmi fővárosa, híres lenyűgöző katedrálisáról, melyet Claude Monet is megfestett, és arról a helyről, ahol Jeanne d'Arc-ot megégették.",
      ro: "Rouen este capitala istorică a Normandiei, cunoscută pentru catedrala sa impresionantă pictată de Claude Monet și ca locul unde a fost arsă pe rug Ioana d'Arc.",
      en: "Rouen is the historic capital of Normandy, known for its impressive cathedral painted by Claude Monet and as the place where Joan of Arc was burned at the stake."
    },
    facts: {
      de: ["Hauptstadt der Normandie.", "Gotische Kathedrale Notre-Dame.", "Jeanne d'Arc Denkmal."],
      hu: ["Normandia fővárosa.", "Notre-Dame gótikus katedrális.", "Jeanne d'Arc emlékmű."],
      ro: ["Capitala Normandiei.", "Catedrala gotică Notre-Dame.", "Monumentul Ioanei d'Arc."],
      en: ["Capital of Normandy.", "Gothic Notre-Dame Cathedral.", "Joan of Arc Memorial."]
    },
    descriptionAdvanced: {
      de: "Rouen, die 'Stadt der hundert Kirchtürme', ist ein lebendiges Museum mittelalterlicher Architektur. Die Altstadt ist reich an kopfsteingepflasterten Gassen und über 2.000 Fachwerkhäusern. Die Kathedrale Notre-Dame ist berühmt für ihre Fassade, die Claude Monet in einer Serie von über 30 Gemälden verewigte. Der Gros-Horloge, eine Renaissance-Uhr in einem Torbogen, ist ein weiteres Wahrzeichen. Rouen ist untrennbar mit der Geschichte von Jeanne d'Arc verbunden; auf dem Place du Vieux-Marché wurde sie 1431 auf dem Scheiterhaufen verbrannt. Geschichte K7 — Mittelalter und Hundertjähriger Krieg.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Turm der Kathedrale war einst das höchste Bauwerk der Welt.",
        "Das Historial Jeanne d'Arc zeigt ihren Prozess digital.",
        "Der Justizpalast ist ein Meisterwerk der Flamboyant-Gotik.",
        "Der Schriftsteller Gustave Flaubert wurde hier geboren.",
        "Rouen ist der größte Getreideexporthafen Westeuropas.",
        "Die Stadt war eine strategische Festung im Hundertjährigen Krieg.",
        "Das 'Aître Saint-Maclou' ist ein alter Pestfriedhof."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "city-montpellier-extra",
    type: "city",
    parent: "FR-OCC",
    coords: [3.8767, 43.6108],
    name: { de: "Montpellier", hu: "Montpellier", ro: "Montpellier", en: "Montpellier" },
    description: {
      de: "Montpellier ist eine dynamische Stadt im Süden Frankreichs, bekannt für ihre mittelalterlichen Gassen, ihre Universität und den sonnigen Place de la Comédie.",
      hu: "Montpellier egy dinamikus város Dél-Franciaországban, ismert középkori utcáiról, egyeteméről és a napsütötte Place de la Comédie-ról.",
      ro: "Montpellier este un oraș dinamic din sudul Franței, cunoscut pentru străzile sale medievale, universitatea sa și însorita Place de la Comédie.",
      en: "Montpellier is a dynamic city in the south of France, known for its medieval streets, its university, and the sunny Place de la Comédie."
    },
    facts: {
      de: ["Älteste medizinische Fakultät der Welt.", "Place de la Comédie.", "Nahe zum Mittelmeer."],
      hu: ["A világ legrégebbi orvosi egyeteme.", "Place de la Comédie.", "Közel a Földközi-tengerhez."],
      ro: ["Cea mai veche facultate de medicină din lume.", "Place de la Comédie.", "Aproape de Marea Mediterană."],
      en: ["World's oldest medical school.", "Place de la Comédie.", "Close to the Mediterranean."]
    },
    descriptionAdvanced: {
      de: "Montpellier ist eine der lebendigsten Städte Südfrankreichs, geprägt von einer jungen Bevölkerung und einer mediterranen Atmosphäre. Das Herz der Stadt ist der Place de la Comédie mit der Opéra Comédie und dem Drei-Grazien-Brunnen. Die medizinische Fakultät der Universität Montpellier, gegründet im 12. Jahrhundert, ist die älteste noch aktive der Welt. Die Stadt verbindet ihr historisches Erbe gekonnt mit moderner Architektur, wie im Antigone-Viertel. Geografie K8 — Stadtentwicklung und Demografie.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Fast ein Drittel der Einwohner sind Studenten.",
        "Der Jardin des Plantes ist der älteste botanische Garten des Landes.",
        "Der Arc de Triomphe ist König Ludwig XIV. gewidmet.",
        "Montpellier wurde erst im Mittelalter gegründet.",
        "Das Musée Fabre zählt zu den wichtigsten Kunstmuseen.",
        "Die Straßenbahnen wurden von berühmten Designern gestaltet.",
        "Ein jüdisches Ritualbad aus dem 12. Jahrhundert ist erhalten."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "city-avignon-extra",
    type: "city",
    parent: "FR-PAC",
    coords: [4.8056, 43.9493],
    name: { de: "Avignon", hu: "Avignon", ro: "Avignon", en: "Avignon" },
    description: {
      de: "Avignon ist berühmt für den Papstpalast, in dem die Päpste im 14. Jahrhundert residierten. Die Brücke von Avignon, Pont Saint-Bénézet, ist ebenfalls weltberühmt.",
      hu: "Avignon a Pápai palotáról híres, ahol a 14. században a pápák székeltek. Az avignoni híd, a Pont Saint-Bénézet, szintén világhírű.",
      ro: "Avignon este renumit pentru Palatul Papilor, unde au locuit papii în secolul al XIV-lea. Podul din Avignon, Pont Saint-Bénézet, este de asemenea faimos în întreaga lume.",
      en: "Avignon is famous for the Palais des Papes (Palace of the Popes), where the Popes resided in the 14th century. The Pont d'Avignon (Pont Saint-Bénézet) is also world-famous."
    },
    facts: {
      de: ["Historisches Zentrum ist UNESCO-Weltkulturerbe.", "Jährliches Theaterfestival im Juli.", "Berühmtes Lied 'Sur le Pont d'Avignon'."],
      hu: ["Történelmi központja az UNESCO Világörökség része.", "Évenkénti színházi fesztivál júliusban.", "Híres dal: 'Sur le Pont d'Avignon'."],
      ro: ["Centrul istoric este un sit al Patrimoniului Mondial UNESCO.", "Festival anual de teatru în iulie.", "Cântecul faimos 'Sur le Pont d'Avignon'."],
      en: ["Historic center is a UNESCO World Heritage site.", "Annual theatre festival in July.", "Famous song 'Sur le Pont d'Avignon'."]
    },
    descriptionAdvanced: {
      de: "Avignon, die Stadt der Päpste, war im 14. Jahrhundert das Zentrum der Christenheit. Der Papstpalast (Palais des Papes), der größte gotische Palast Europas, dominiert die Stadt und zeugt von dieser Blütezeit. Das historische Zentrum, umgeben von einer beeindruckenden mittelalterlichen Stadtmauer, ist zusammen mit dem Palast und der berühmten Brücke Pont Saint-Bénézet UNESCO-Weltkulturerbe. Jedes Jahr im Juli findet hier das berühmte Theaterfestival statt. Geschichte K7 — Das Papsttum im Mittelalter.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Neun Päpste residierten im 14. Jahrhundert hier.",
        "Die Stadtmauern sind 4,3 Kilometer lang.",
        "Der Rocher des Doms bietet Panoramablicke auf die Rhône.",
        "Das Theaterfestival wurde 1947 gegründet.",
        "Die Brücke hat heute nur noch vier von 22 Bögen.",
        "Das Musée du Petit Palais zeigt Renaissance-Meisterwerke.",
        "Avignon ist ein Tor zum Weinbaugebiet Côtes du Rhône."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "city-dijon-extra",
    type: "city",
    parent: "FR-BFC",
    coords: [5.0415, 47.3220],
    name: { de: "Dijon", hu: "Dijon", ro: "Dijon", en: "Dijon" },
    description: {
      de: "Dijon, die Hauptstadt von Burgund, ist berühmt für ihren Senf, den Kir-Cocktail und ihre reiche Geschichte als Sitz der Herzöge von Burgund.",
      hu: "Dijon, Burgundia fővárosa, híres a mustárjáról, a Kir koktélról és gazdag történelméről, mint a burgundi hercegek székhelye.",
      ro: "Dijon, capitala Burgundiei, este renumit pentru muștarul său, cocktailul Kir și istoria sa bogată ca sediu al ducilor de Burgundia.",
      en: "Dijon, the capital of Burgundy, is famous for its mustard, the Kir cocktail, and its rich history as the seat of the Dukes of Burgundy."
    },
    facts: {
      de: ["Historische Hauptstadt Burgunds.", "Berühmter Dijon-Senf.", "Palast der Herzöge."],
      hu: ["Burgundia történelmi fővárosa.", "Híres dijoni mustár.", "Hercegi palota."],
      ro: ["Capitala istorică a Burgundiei.", "Faimosul muștar de Dijon.", "Palatul Ducilor."],
      en: ["Historic capital of Burgundy.", "Famous Dijon mustard.", "Palace of the Dukes."]
    },
    descriptionAdvanced: {
      de: "Dijon, die historische Hauptstadt des Herzogtums Burgund, ist eine Stadt von außergewöhnlichem Reichtum an Kunst und Geschichte. Der Palast der Herzöge und der Stände von Burgund ist das Herz der Stadt und beherbergt heute das Rathaus und das Musée des Beaux-Arts. Ein Wahrzeichen ist die kleine Eule (Chouette), die Glück bringen soll. Kulinarisch ist die Stadt weltweit für ihren Senf bekannt. Geschichte K7 — Europäische Fürstenhöfe und Regionalgeschichte.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das historische Zentrum ist UNESCO-Weltkulturerbe.",
        "Der Eulen-Weg führt zu den wichtigsten Sehenswürdigkeiten.",
        "Der Philipp-der-Gute-Turm bietet eine weite Aussicht.",
        "Die Gräber der Herzöge sind Meisterwerke der Bildhauerei.",
        "Gustave Eiffel, der Erbauer des Eiffelturms, wurde hier geboren.",
        "Die Cité de la Gastronomie feiert die französische Küche.",
        "Hier beginnt die berühmte Route des Grands Crus."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "city-clermont-ferrand-extra",
    type: "city",
    parent: "FR-ARA",
    coords: [3.0870, 45.7772],
    name: { de: "Clermont-Ferrand", hu: "Clermont-Ferrand", ro: "Clermont-Ferrand", en: "Clermont-Ferrand" },
    description: {
      de: "Clermont-Ferrand liegt im Zentralmassiv und ist berühmt für seine Kette von Vulkanen, die Chaîne des Puys, und als Heimat des Reifenherstellers Michelin.",
      hu: "Clermont-Ferrand a Francia-középhegységben fekszik, híres a Chaîne des Puys nevű vulkáni láncáról és a Michelin gumiabroncsgyártó otthonaként.",
      ro: "Clermont-Ferrand se află în Masivul Central și este renumit pentru lanțul său de vulcani, Chaîne des Puys, și ca sediu al producătorului de anvelope Michelin.",
      en: "Clermont-Ferrand is located in the Massif Central and is famous for its chain of volcanoes, the Chaîne des Puys, and as the home of the Michelin tire company."
    },
    facts: {
      de: ["Vulkankette Chaîne des Puys.", "Hauptsitz von Michelin.", "Schwarze Kathedrale aus Lavastein."],
      hu: ["Chaîne des Puys vulkánlánc.", "Michelin főhadiszállás.", "Fekete katedrális lávakőből."],
      ro: ["Lanțul de vulcani Chaîne des Puys.", "Sediul central Michelin.", "Catedrala neagră din piatră de lavă."],
      en: ["Chaîne des Puys volcanic chain.", "Michelin headquarters.", "Black lava-stone cathedral."]
    },
    descriptionAdvanced: {
      de: "Clermont-Ferrand ist eine einzigartige Stadt, die auf vulkanischem Boden gebaut wurde. Sie ist umgeben von der Chaîne des Puys, einer Kette von rund 80 schlafenden Vulkanen. Die gotische Kathedrale Notre-Dame-de-l'Assomption ist vollständig aus dunklem Volvic-Lavastein erbaut. Die Stadt ist auch der weltweite Hauptsitz von Michelin. Geografie K7 — Vulkanismus und industrielle Entwicklung.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Stadt entstand aus der Vereinigung zweier Orte.",
        "Der Place de Jaude ist der zentrale Treffpunkt.",
        "Der Puy de Dôme ist der höchste Vulkan der Region.",
        "Hier findet ein wichtiges Kurzfilmfestival statt.",
        "Blaise Pascal wurde in Clermont geboren.",
        "Die romanische Basilika gehört zum UNESCO-Erbe.",
        "Die Stadt ist eine Hochburg des französischen Rugbys."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "city-rennes-extra",
    type: "city",
    parent: "FR-BRE",
    coords: [-1.6778, 48.1173],
    name: { de: "Rennes", hu: "Rennes", ro: "Rennes", en: "Rennes" },
    description: {
      de: "Rennes ist die Hauptstadt der Bretagne, bekannt für ihre mittelalterlichen Fachwerkhäuser und die lebhafte Studentenpopulation.",
      hu: "Rennes Bretagne fővárosa, középkori, фахверк házairól és élénk egyetemista népességéről ismert.",
      ro: "Rennes este capitala Bretaniei, cunoscută pentru casele sale medievale cu grinzi de lemn și pentru populația sa vibrantă de studenți.",
      en: "Rennes is the capital of Brittany, known for its medieval half-timbered houses and vibrant student population."
    },
    facts: {
      de: ["Hauptstadt der Bretagne.", "Mittelalterliches Zentrum.", "Wichtige Universitätsstadt."],
      hu: ["Bretagne fővárosa.", "Középkori belváros.", "Fontos egyetemi város."],
      ro: ["Capitala Bretaniei.", "Centru medieval.", "Oraș universitar important."],
      en: ["Capital of Brittany.", "Medieval center.", "Major university city."]
    },
    descriptionAdvanced: {
      de: "Rennes, die dynamische Hauptstadt der Bretagne, verbindet ein reiches historisches Erbe mit einer pulsierenden modernen Kultur. Das mittelalterliche Zentrum hat nach einem großen Brand im Jahr 1720 seine farbenfrohen Fachwerkhäuser behalten. Das Parlament der Bretagne ist ein Juwel der Barockarchitektur. Mit über 60.000 Studenten ist Rennes eine der lebendigsten Städte Frankreichs. Geografie K8 — Urbane Zentren und regionale Identität.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Thabor-Park ist eine grüne Oase im Zentrum.",
        "Die Portes Mordelaises waren einst das Stadttor.",
        "Das Festival 'Les Trans Musicales' ist weltberühmt.",
        "Rennes hat ein modernes fahrerloses Metrosystem.",
        "Die Stadt ist ein Zentrum für digitale Innovation.",
        "Der Marché des Lices ist einer der größten Märkte.",
        "Zweisprachige Schilder pflegen das bretonische Erbe."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "city-aix-en-provence-extra",
    type: "city",
    parent: "FR-PAC",
    coords: [5.4474, 43.5297],
    name: { de: "Aix-en-Provence", hu: "Aix-en-Provence", ro: "Aix-en-Provence", en: "Aix-en-Provence" },
    description: {
      de: "Aix-en-Provence ist eine elegante Stadt, die für ihre von Platanen gesäumte Allee Cours Mirabeau, ihre Brunnen und als Geburtsort des Malers Paul Cézanne bekannt ist.",
      hu: "Aix-en-Provence egy elegáns város, amely a platánfákkal szegélyezett Cours Mirabeau sétányáról, szökőkútjairól és a festő, Paul Cézanne szülőhelyeként ismert.",
      ro: "Aix-en-Provence este un oraș elegant, cunoscut pentru bulevardul său mărginit de platani, Cours Mirabeau, fântânile sale și ca loc de naștere al pictorului Paul Cézanne.",
      en: "Aix-en-Provence is an elegant city known for its plane tree-lined boulevard, Cours Mirabeau, its fountains, and as the birthplace of the painter Paul Cézanne."
    },
    facts: {
      de: ["Stadt der tausend Brunnen.", "Heimat von Paul Cézanne.", "Prachtboulevard Cours Mirabeau."],
      hu: ["Ezer szökőkút városa.", "Paul Cézanne szülőhelye.", "Cours Mirabeau sétány."],
      ro: ["Orașul celor o mie de fântâni.", "Locul de naștere al lui Paul Cézanne.", "Bulevardul Cours Mirabeau."],
      en: ["City of a thousand fountains.", "Home of Paul Cézanne.", "Grand boulevard Cours Mirabeau."]
    },
    descriptionAdvanced: {
      de: "Aix-en-Provence, die historische Hauptstadt der Provence, strahlt bürgerliche Eleganz aus. Die Stadt ist bekannt für den Cours Mirabeau, gesäumt von Cafés und Adelspalästen. Aix wird oft als 'Stadt der tausend Brunnen' bezeichnet. Sie ist untrennbar mit dem Maler Paul Cézanne verbunden, dessen Atelier besichtigt werden kann. Geschichte K8 — Kunstgeschichte und französische Klassik.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Gegründet von Römern als 'Aquae Sextiae'.",
        "Die Kathedrale vereint Stile aus 13 Jahrhunderten.",
        "Das Musée Granet zeigt bedeutende Werke Cézannes.",
        "Calissons d'Aix sind eine süße Mandelspezialität.",
        "Der Cours Mirabeau trennt Altstadt und Mazarin-Viertel.",
        "Das Hôtel de Caumont ist ein prächtiges Kunstzentrum.",
        "Das Opernfestival genießt weltweiten Ruf."
      ],
      hu: [],
      ro: [],
      en: []
    }
  }
];

const history = [
  {
    id: "historical-arena-of-nimes-extra",
    type: "historical",
    parent: "FR-OCC",
    coords: [4.3599, 43.8344],
    name: { de: "Arena von Nîmes", hu: "Nîmes-i Aréna", ro: "Arena din Nîmes", en: "Arena of Nîmes" },
    description: {
      de: "Die Arena von Nîmes ist eines der am besten erhaltenen römischen Amphitheater der Welt. Sie wurde um 70 n. Chr. erbaut und wird heute für Konzerte und Veranstaltungen genutzt.",
      hu: "A Nîmes-i Aréna a világ egyik legjobb állapotban fennmaradt római amfiteátruma. Kb. i.sz. 70-ben épült, ma koncerteknek és rendezvényeknek ad otthont.",
      ro: "Arena din Nîmes este unul dintre cele mai bine conservate amfiteatre romane din lume. Construită în jurul anului 70 d.Hr., astăzi este folosită pentru concerte și evenimente.",
      en: "The Arena of Nîmes is one of the best-preserved Roman amphitheaters in the world. Built around 70 AD, it is now used for concerts and events."
    },
    facts: {
      de: ["Bestens erhaltenes Amphitheater.", "Römisches Erbe.", "Platz für 24.000 Zuschauer."],
      hu: ["Legjobban megőrzött amfiteátrum.", "Római örökség.", "24 000 néző befogadására alkalmas."],
      ro: ["Amfiteatru extrem de bine conservat.", "Moștenire romană.", "Capacitate de 24.000 de spectatori."],
      en: ["Extremely well-preserved amphitheater.", "Roman heritage.", "Seating for 24,000 spectators."]
    },
    descriptionAdvanced: {
      de: "Die Arena von Nîmes ist ein beeindruckendes Zeugnis der römischen Ingenieurskunst in Gallien. Erbaut Ende des 1. Jahrhunderts n. Chr., besteht ihre Fassade aus 60 Arkaden auf zwei Ebenen. Ursprünglich für Gladiatorenkämpfe genutzt, diente sie im Mittelalter als Festung. Heute ist sie Schauplatz für moderne Konzerte und die berühmten 'Ferias'. Geschichte K6 — Das Römische Reich und seine Provinzen.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die elliptische Form misst 133 mal 101 Meter.",
        "Sie wurde für eine schnelle Evakuierung konzipiert.",
        "Im Mittelalter lebten Menschen innerhalb der Mauern.",
        "Die 'Grands Jeux Romains' sind ein riesiges Reenactment.",
        "Nîmes war ein wichtiger Knotenpunkt der Via Domitia.",
        "Das moderne Musée de la Romanité liegt direkt gegenüber.",
        "Ein mobiles Dach ermöglicht heute ganzjährige Nutzung."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "landmark-viaduc-de-millau-extra",
    type: "landmark",
    parent: "FR-OCC",
    coords: [3.0766, 44.0772],
    name: { de: "Viadukt von Millau", hu: "Millau-i völgyhíd", ro: "Viaductul Millau", en: "Millau Viaduct" },
    description: {
      de: "Das Viadukt von Millau ist die höchste Schrägseilbrücke der Welt und ein Meisterwerk der Ingenieurskunst, entworfen von Norman Foster und Michel Virlogeux.",
      hu: "A Millau-i völgyhíd a világ legmagasabb ferdekábeles hídja, a mérnöki tudomány mesterműve, melyet Norman Foster és Michel Virlogeux tervezett.",
      ro: "Viaductul Millau este cel mai înalt pod hobanat din lume și o capodoperă a ingineriei, proiectată de Norman Foster și Michel Virlogeux.",
      en: "The Millau Viaduct is the tallest cable-stayed bridge in the world and a masterpiece of engineering, designed by Norman Foster and Michel Virlogeux."
    },
    facts: {
      de: ["Höchste Brücke der Welt.", "Überquert das Tarn-Tal.", "343 Meter maximale Höhe."],
      hu: ["A világ legmagasabb hídja.", "Átszeli a Tarn völgyét.", "343 méteres maximális magasság."],
      ro: ["Cel mai înalt pod din lume.", "Traversează valea Tarnului.", "Înălțime maximă de 343 metri."],
      en: ["Tallest bridge in the world.", "Crosses the Tarn valley.", "343 meters maximum height."]
    },
    descriptionAdvanced: {
      de: "Das Viadukt von Millau ist eine technische und ästhetische Meisterleistung. Mit einer Pylonhöhe von 343 Metern übertrifft es sogar den Eiffelturm. Die Brücke scheint förmlich über dem Tal des Tarn zu schweben. Sie löste das Problem massiver Staus in Südfrankreich und ist heute selbst eine Touristenattraktion. Geografie K8 — Infrastruktur und moderne Architektur.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Brücke ist insgesamt 2.460 Meter lang.",
        "Sie wurde in einer Rekordzeit von nur drei Jahren gebaut.",
        "GPS-gesteuerte Systeme halfen beim Bau der Fahrbahn.",
        "Die Baukosten betrugen rund 400 Millionen Euro.",
        "Sie hält den Weltrekord für die höchste Fahrbahn in Europa.",
        "Ein spezielles Besucherzentrum informiert über die Technik.",
        "Die Brücke ist für extreme Windgeschwindigkeiten ausgelegt."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "castle-chateau-de-chambord-extra",
    type: "castle",
    parent: "FR-CVL",
    coords: [1.5173, 47.6162],
    name: { de: "Schloss Chambord", hu: "Chambord-i kastély", ro: "Castelul Chambord", en: "Château de Chambord" },
    description: {
      de: "Schloss Chambord ist das größte Schloss der Loire und ein Meisterwerk der französischen Renaissance-Architektur, das möglicherweise von Leonardo da Vinci beeinflusst wurde.",
      hu: "A Chambord-i kastély a Loire-völgy legnagyobb kastélya, a francia reneszánsz építészet mesterműve, melyet valószínűleg Leonardo da Vinci is befolyásolt.",
      ro: "Castelul Chambord este cel mai mare castel de pe Valea Loarei și o capodoperă a arhitecturii renascentiste franceze, posibil influențată de Leonardo da Vinci.",
      en: "Château de Chambord is the largest château in the Loire Valley and a masterpiece of French Renaissance architecture, possibly influenced by Leonardo da Vinci."
    },
    facts: {
      de: ["Größtes Loireschloss.", "Berühmte Doppelwendeltreppe.", "Vom König Franz I. erbaut."],
      hu: ["A legnagyobb Loire-menti kastély.", "Híres kettős csigalépcső.", "I. Ferenc király építtette."],
      ro: ["Cel mai mare castel de pe Loara.", "Celebră scară dublă elicoidală.", "Construit de regele Francisc I."],
      en: ["Largest Loire château.", "Famous double helix staircase.", "Built by King Francis I."]
    },
    descriptionAdvanced: {
      de: "Schloss Chambord ist der Inbegriff der französischen Renaissance. Erbaut als Jagdschloss für Franz I., besticht es durch seine markante Dachlandschaft und die Doppelwendeltreppe, die Leonardo da Vinci zugeschrieben wird. Das Schloss ist von einem gewaltigen Waldpark umgeben, der so groß wie das Stadtgebiet von Paris ist. Geschichte K7 — Die Renaissance in Frankreich.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Das Schloss hat 426 Zimmer und 282 Kamine.",
        "Die Bauarbeiten begannen 1519.",
        "Im Zweiten Weltkrieg wurde die Mona Lisa hier versteckt.",
        "Die Salamander ist das Emblem des Erbauerkönigs.",
        "Der Park ist das größte umzäunte Waldgebiet Europas.",
        "Das Schloss gehört heute dem französischen Staat.",
        "Es steht seit 1981 auf der UNESCO-Welterbeliste."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "landmark-pont-du-gard-extra",
    type: "landmark",
    parent: "FR-OCC",
    coords: [4.6492, 43.9475],
    name: { de: "Pont du Gard", hu: "Pont du Gard", ro: "Pont du Gard", en: "Pont du Gard" },
    description: {
      de: "Der Pont du Gard ist ein antikes römisches Aquädukt, das den Fluss Gardon überquert. Er ist ein Zeugnis der römischen Ingenieurskunst und UNESCO-Weltkulturerbe.",
      hu: "A Pont du Gard egy ókori római vízvezeték, amely a Gardon folyót keresztezi. A római mérnöki tudás tanúbizonysága és az UNESCO Világörökség része.",
      ro: "Pont du Gard este un apeduct roman antic care traversează râul Gardon. Este o mărturie a ingineriei romane și un sit al Patrimoniului Mondial UNESCO.",
      en: "The Pont du Gard is an ancient Roman aqueduct that crosses the Gardon River. It is a testament to Roman engineering and a UNESCO World Heritage site."
    },
    facts: {
      de: ["Römisches Aquädukt.", "Drei Ebenen von Arkaden.", "Fast 2000 Jahre alt."],
      hu: ["Római vízvezeték.", "Háromszintes árkádsor.", "Közel 2000 éves."],
      ro: ["Apeduct roman.", "Trei niveluri de arcade.", "Vechime de aproape 2000 de ani."],
      en: ["Roman aqueduct.", "Three tiers of arches.", "Nearly 2000 years old."]
    },
    descriptionAdvanced: {
      de: "Der Pont du Gard ist der spektakulärste Teil einer 50 km langen Wasserleitung nach Nîmes. Dieses antike Meisterwerk wurde im 1. Jahrhundert n. Chr. erbaut. Die Präzision ist verblüffend: Die gesamte Leitung hat nur ein Gefälle von 12,6 Metern. Die massiven Steinblöcke wurden ohne Mörtel gefügt. Geschichte K6 — Römische Technik und Stadtentwicklung.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Täglich flossen 40.000 m³ Wasser nach Nîmes.",
        "Die Brücke ist fast 49 Meter hoch.",
        "Einzelne Steine wiegen bis zu sechs Tonnen.",
        "Die oberen Bögen sind schmaler für mehr Stabilität.",
        "Es ist eines der meistbesuchten Monumente Frankreichs.",
        "Im 18. Jahrhundert wurde eine Straßenbrücke angebaut.",
        "Die Konstruktion überstand alle großen Hochwasser."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "historical-carnac-stones-extra",
    type: "historical",
    parent: "FR-BRE",
    coords: [-3.0583, 47.5847],
    name: { de: "Steinreihen von Carnac", hu: "Carnaci kősorok", ro: "Aliniamentele de la Carnac", en: "Carnac Stones" },
    description: {
      de: "Die Steinreihen von Carnac in der Bretagne sind die größte Ansammlung megalithischer Steine der Welt, deren Zweck bis heute ein Rätsel ist.",
      hu: "A bretagne-i Carnaci kősorok a világ legnagyobb megalitikus kőegyüttese, melynek célja máig rejtély.",
      ro: "Aliniamentele de la Carnac din Bretania reprezintă cea mai mare colecție de pietre megalitice din lume, al căror scop rămâne un mister.",
      en: "The Carnac stones in Brittany are the largest collection of megalithic stones in the world, whose purpose remains a mystery to this day."
    },
    facts: {
      de: ["Tausende von Menhiren.", "Neolithische Kultstätte.", "Größte Megalithanlage weltweit."],
      hu: ["Menhirek ezrei.", "Neolitikus kultikus hely.", "A világ legnagyobb megalit-együttese."],
      ro: ["Mii de menhire.", "Sit neolitic de cult.", "Cel mai mare ansamblu megalitic din lume."],
      en: ["Thousands of menhirs.", "Neolithic cult site.", "World's largest megalithic site."]
    },
    descriptionAdvanced: {
      de: "Die Steinreihen von Carnac sind ein außergewöhnliches prähistorisches Rätsel. Über mehrere Kilometer erstrecken sich Tausende von Menhiren. Sie wurden um 4500 v. Chr. errichtet. Ob es sich um astronomische Kalender oder religiöse Stätten handelt, ist bis heute nicht abschließend geklärt. Geschichte K5 — Die Jungsteinzeit und frühe Gesellschaften.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Anlage ist älter als Stonehenge.",
        "Größte Steine sind über 6 Meter hoch.",
        "Es gibt Reihen, Dolmen und Grabhügel.",
        "Le Ménec ist die größte Steingruppe.",
        "Legenden sprechen von einer versteinerten Legion.",
        "Früher wurden Steine für Hausbau entfernt.",
        "Ein Besucherzentrum erklärt die Megalithkultur."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "castle-chateau-haut-koenigsbourg-extra",
    type: "castle",
    parent: "FR-GES",
    coords: [7.344, 48.249],
    name: { de: "Hohkönigsburg", hu: "Haut-Koenigsbourg kastély", ro: "Castelul Haut-Koenigsbourg", en: "Château du Haut-Koenigsbourg" },
    description: {
      de: "Die Hohkönigsburg im Elsass ist eine restaurierte Bergfestung aus dem 12. Jahrhundert, die einen atemberaubenden Blick über die Rheinebene bietet.",
      hu: "A Haut-Koenigsbourg kastély Elzászban egy 12. századi, helyreállított hegyi erőd, ahonnan lenyűgöző kilátás nyílik a Rajna-völgyre.",
      ro: "Castelul Haut-Koenigsbourg din Alsacia este o fortăreață montană restaurată din secolul al XII-lea, oferind o priveliște uluitoare asupra câmpiei Rinului.",
      en: "The Château du Haut-Koenigsbourg in Alsace is a restored 12th-century mountain fortress offering a breathtaking view over the Rhine plain."
    },
    facts: {
      de: ["Mächtige Burg in den Vogesen.", "Vom Kaiser Wilhelm II. restauriert.", "Überblickt die Rheinebene."],
      hu: ["Hatalmas vár a Vogézekben.", "II. Vilmos császár restauráltatta.", "Kilátás a Rajna-völgyre."],
      ro: ["Cetate impunătoare în Munții Vosgi.", "Restaurată de Kaiserul Wilhelm al II-lea.", "Vedere asupra Câmpiei Rinului."],
      en: ["Mighty castle in the Vosges.", "Restored by Kaiser Wilhelm II.", "Overlooks the Rhine plain."]
    },
    descriptionAdvanced: {
      de: "Die Hohkönigsburg thront majestätisch in den Vogesen. Die Ruine aus dem 12. Jahrhundert wurde Anfang des 20. Jahrhunderts auf Befehl von Kaiser Wilhelm II. aufwendig rekonstruiert. Die Burg vermittelt heute einen idealisierten Eindruck einer mittelalterlichen Festung. Sie ist ein Symbol für die wechselvolle deutsch-französische Geschichte. Geschichte K7 — Ritterburgen und das Mittelalter.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Restaurierung dauerte acht Jahre.",
        "Bei Fernsicht sind sogar die Alpen zu sehen.",
        "Die Burg hat funktionstüchtige Zugbrücken.",
        "Sie diente als Filmkulisse für 'Die große Illusion'.",
        "Ein mittelalterlicher Burggarten ist angeschlossen.",
        "In der Waffenkammer sind Rüstungen ausgestellt.",
        "Die Burg ist eine der meistbesuchten im Elsass."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "historical-omaha-beach-extra",
    type: "historical",
    parent: "FR-NOR",
    coords: [-0.8803, 49.3711],
    name: { de: "Omaha Beach", hu: "Omaha part", ro: "Plaja Omaha", en: "Omaha Beach" },
    description: {
      de: "Omaha Beach war einer der fünf Landungsabschnitte der Alliierten in der Normandie am D-Day, dem 6. Juni 1944. Es war der Ort der intensivsten Kämpfe.",
      hu: "Az Omaha part egyike volt az öt szövetséges partraszállási zónának Normandiában a D-napon, 1944. június 6-án. Itt zajlottak a leghevesebb harcok.",
      ro: "Plaja Omaha a fost una dintre cele cinei sectoare de debarcare ale Aliaților în Normandia în Ziua Z, 6 iunie 1944. A fost locul celor mai intense lupte.",
      en: "Omaha Beach was one of the five Allied landing sectors in Normandy on D-Day, June 6, 1944. It was the site of the most intense fighting."
    },
    facts: {
      de: ["Schauplatz der D-Day Landung.", "Amerikanischer Sektor.", "Erschütternde Kriegsgeschichte."],
      hu: ["A D-napos partraszállás helyszíne.", "Amerikai szektor.", "Megerőltető háborús történelem."],
      ro: ["Locul debarcării din Ziua Z.", "Sector american.", "Istorie de război cutremurătoare."],
      en: ["Site of the D-Day landings.", "American sector.", "Profound wartime history."]
    },
    descriptionAdvanced: {
      de: "Omaha Beach ist ein Ort von tiefer historischer Bedeutung. Hier erlitten die US-Truppen am 6. Juni 1944 die schwersten Verluste, was dem Abschnitt den Namen 'Bloody Omaha' einbrachte. Der nahegelegene Soldatenfriedhof in Colleville-sur-Mer ist eine mahnende Gedenkstätte für den Preis der Freiheit. Geschichte K8 — Der Zweite Weltkrieg und die Befreiung Europas.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Allein hier fielen am ersten Tag 2.400 Soldaten.",
        "Die Klippen machten die Landung extrem schwierig.",
        "Das Denkmal 'Les Braves' steht direkt am Strand.",
        "Der US-Friedhof beherbergt 9.387 Gräber.",
        "Pointe du Hoc liegt in unmittelbarer Nähe.",
        "Reste des Atlantikwalls sind noch sichtbar.",
        "Der Ort ist heute ein Symbol der Versöhnung."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "castle-chateau-de-chenonceau-extra",
    type: "castle",
    parent: "FR-CVL",
    coords: [1.0665, 47.3249],
    name: { de: "Schloss Chenonceau", hu: "Chenonceau-i kastély", ro: "Castelul Chenonceau", en: "Château de Chenonceau" },
    description: {
      de: "Das Schloss Chenonceau, auch bekannt als das 'Damenschloss', ist berühmt für seine elegante Bogenbrücke über den Fluss Cher.",
      hu: "A Chenonceau-i kastély, más néven a 'Hölgyek kastélya', híres a Cher folyó felett átívelő elegáns hídjáról.",
      ro: "Castelul Chenonceau, cunoscut și sub numele de 'Castelul Doamnelor', este renumit pentru podul său elegant cu arcade peste râul Cher.",
      en: "Château de Chenonceau, also known as the 'Ladies' Château', is famous for its elegant arched bridge spanning the River Cher."
    },
    facts: {
      de: ["Schloss über dem Fluss Cher.", "Geprägt von starken Frauen.", "Prachtvolle Renaissance-Architektur."],
      hu: ["Kastély a Cher folyó felett.", "Erős nők formálták a történelmét.", "Pompás reneszánsz építészet."],
      ro: ["Castel peste râul Cher.", "Marcat de influența unor femei puternice.", "Arhitectură renascentistă magnifică."],
      en: ["Château over the River Cher.", "Shaped by influential women.", "Splendid Renaissance architecture."]
    },
    descriptionAdvanced: {
      de: "Schloss Chenonceau wird oft als 'Damenschloss' bezeichnet, da Frauen wie Diane de Poitiers und Katharina von Medici seine Geschichte prägten. Besonders spektakulär ist die zweistöckige Galerie, die den Fluss Cher auf einer Bogenbrücke überspannt. Es ist eines der meistbesuchten Schlösser Frankreichs. Geschichte K7 — Die Rolle der Frauen in der Renaissance.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Galerie diente im Krieg als Lazarett.",
        "Der Fluss Cher markierte einst die Demarkationslinie.",
        "Die Gärten sind nach den Schlossherrinnen benannt.",
        "Im Inneren hängen Werke alter Meister.",
        "Es befindet sich heute in Privatbesitz.",
        "Ein Renaissance-Irrgarten gehört zum Park.",
        "Die Küchen liegen in den Brückenpfeilern."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "historical-lascaux-iv-extra",
    type: "historical",
    parent: "FR-NAQ",
    coords: [1.178, 45.05],
    name: { de: "Lascaux IV", hu: "Lascaux IV", ro: "Lascaux IV", en: "Lascaux IV" },
    description: {
      de: "Lascaux IV ist eine vollständige Nachbildung der berühmten prähistorischen Höhle von Lascaux, die für ihre außergewöhnlichen paläolithischen Malereien bekannt ist.",
      hu: "A Lascaux IV a híres Lascaux-i barlang teljes másolata, amely a rendkívüli paleolitikus festményeiről ismert.",
      ro: "Lascaux IV este o replică completă a faimoasei peșteri preistorice Lascaux, cunoscută pentru picturile sale paleolitice excepționale.",
      en: "Lascaux IV is a complete replica of the famous prehistoric Lascaux cave, known for its exceptional Paleolithic paintings."
    },
    facts: {
      de: ["Nachbildung der Eiszeithöhle.", "Höhlenmalerei der Cro-Magnon-Menschen.", "Weltkulturerbe der UNESCO."],
      hu: ["A jégkorszaki barlang másolata.", "Cro-Magnon barlangrajzok.", "UNESCO Világörökség része."],
      ro: ["Replica peșterii glaciare.", "Picturi rupestre ale omului Cro-Magnon.", "Patrimoniu Mondial UNESCO."],
      en: ["Replica of the Ice Age cave.", "Paleolithic cave paintings.", "UNESCO World Heritage site."]
    },
    descriptionAdvanced: {
      de: "Lascaux IV ist die modernste Nachbildung der berühmten Höhle von Lascaux. Da das Original zum Schutz vor Verfall geschlossen ist, bietet Lascaux IV eine millimetergenaue Rekonstruktion der prähistorischen Malereien. Der 'Saal der Stiere' zeigt die beeindruckende Kunstfertigkeit unserer Vorfahren. Geschichte K5 — Die Anfänge der Kunst in der Steinzeit.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Malereien sind etwa 17.000 Jahre alt.",
        "Dargestellt sind Stiere, Pferde und Hirsche.",
        "Laser-Scanning ermöglichte die exakte Kopie.",
        "Die Originalhöhle wurde 1940 entdeckt.",
        "Mineralpigmente lieferten die Farben.",
        "Es gilt als die 'Sixtinische Kapelle der Urzeit'.",
        "Das Gebäude ist architektonisch in den Hügel integriert."
      ],
      hu: [],
      ro: [],
      en: []
    }
  }
];

const other = [
  {
    id: "industry-airbus-toulouse-extra",
    type: "industry",
    parent: "FR-OCC",
    coords: [1.3636, 43.6291],
    name: { de: "Airbus-Werk Toulouse", hu: "Airbus gyár, Toulouse", ro: "Fabrica Airbus Toulouse", en: "Airbus Factory Toulouse" },
    description: {
      de: "Die Endmontagelinie von Airbus in Toulouse ist eine der größten Industrieanlagen Europas und der Geburtsort vieler Passagierflugzeuge, einschließlich des A380.",
      hu: "Az Airbus toulouse-i végszerelő sora Európa egyik legnagyobb ipari létesítménye, számos utasszállító repülőgép, köztük az A380 szülőhelye.",
      ro: "Linia de asamblare finală Airbus din Toulouse este una dintre cele mai mari facilități industriale din Europa și locul de naștere al multor avioane de pasageri, inclusiv A380.",
      en: "The Airbus final assembly line in Toulouse is one of the largest industrial facilities in Europe and the birthplace of many passenger aircraft, including the A380."
    },
    facts: {
      de: ["Hauptsitz von Airbus.", "Produktion des A350.", "Luftfahrtzentrum Europas."],
      hu: ["Az Airbus főhadiszállása.", "Az A350 gyártása.", "Európa légiközlekedési központja."],
      ro: ["Sediul central Airbus.", "Producția de A350.", "Centrul aviatic al Europei."],
      en: ["Airbus headquarters.", "Production of the A350.", "Aviation hub of Europe."]
    },
    descriptionAdvanced: {
      de: "Toulouse ist das pulsierende Zentrum der europäischen Luft- und Raumfahrt. Das Airbus-Werk ist eine der gigantischsten Industrieanlagen weltweit. In Hallen so groß wie mehrere Fußballfelder werden modernste Passagierjets wie der A350 montiert. Die Stadt zieht Fachkräfte aus ganz Europa an und prägt die technologische Zukunft der Region. Geografie K8 — Industriestandorte und globale Vernetzung.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Hier wurde der legendäre A380 gebaut.",
        "Das Museum Aeroscopia zeigt eine Concorde.",
        "Über 80.000 Menschen arbeiten hier im Sektor.",
        "Die 'Cité de l'espace' ist ebenfalls in Toulouse.",
        "Airbus wurde als europäisches Gemeinschaftsprojekt gegründet.",
        "Die Endmontage nutzt hochmoderne Robotik.",
        "Testflüge gehören zum Alltag in Toulouse-Blagnac."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "port-le-havre-extra",
    type: "port",
    parent: "FR-NOR",
    coords: [0.1025, 49.4944],
    name: { de: "Hafen von Le Havre", hu: "Le Havre kikötője", ro: "Portul Le Havre", en: "Port of Le Havre" },
    description: {
      de: "Der Hafen von Le Havre ist der zweitgrößte Hafen Frankreichs und ein wichtiges Tor für den internationalen Handel, insbesondere für Container und Ölprodukte.",
      hu: "Le Havre kikötője Franciaország második legnagyobb kikötője, a nemzetközi kereskedelem fontos kapuja, különösen a konténerek és olajtermékek számára.",
      ro: "Portul Le Havre este al doilea cel mai mare port din Franța și o poartă majoră pentru comerțul internațional, în special pentru containere și produse petroliere.",
      en: "The Port of Le Havre is the second largest port in France and a major gateway for international trade, especially for containers and oil products."
    },
    facts: {
      de: ["Größter Containerhafen des Landes.", "UNESCO-Weltkulturerbe (Stadtzentrum).", "Tor zum Atlantik."],
      hu: ["Az ország legnagyobb konténerkikötője.", "UNESCO világörökség (városközpont).", "Az Atlanti-óceán kapuja."],
      ro: ["Cel mai mare port de containere din țară.", "Patrimoniu UNESCO (centrul orașului).", "Poarta către Atlantic."],
      en: ["Country's largest container port.", "UNESCO World Heritage (city center).", "Gateway to the Atlantic."]
    },
    descriptionAdvanced: {
      de: "Der Hafen von Le Havre ist ein strategischer Eckpfeiler der französischen Wirtschaft. An der Seinemündung gelegen, ist er der wichtigste Knotenpunkt für den Containerverkehr mit Nordamerika. Die Architektur der nach dem Krieg wiederaufgebauten Stadt von Auguste Perret bildet einen faszinierenden Rahmen für dieses industrielle Zentrum. Geografie K8 — Welthandel und Hafenwirtschaft.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Der Hafen erstreckt sich über 10.000 Hektar.",
        "Le Havre ist ein bedeutender Kreuzfahrthafen.",
        "Der Komplex 'Port 2000' ist hochmodern.",
        "Es gibt direkte Binnenverbindungen nach Paris.",
        "Die Pont de Normandie ist in der Nähe.",
        "Hier wurden früher Transatlantik-Liner abgefertigt.",
        "Der Hafen ist wichtig für den Ölimport."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "agriculture-bordeaux-vineyards-extra",
    type: "agriculture",
    parent: "FR-NAQ",
    coords: [-0.5792, 44.8378],
    name: { de: "Weinberge von Bordeaux", hu: "Bordeaux-i borvidék", ro: "Viile din Bordeaux", en: "Bordeaux Vineyards" },
    description: {
      de: "Die Weinregion Bordeaux ist weltberühmt für ihre Weine. Tausende von Châteaux produzieren einige der prestigeträchtigsten Weine der Welt.",
      hu: "A Bordeaux-i borvidék világhírű borairól. Több ezer kastély (château) termeli a világ legnevesebb borait.",
      ro: "Regiunea viticolă Bordeaux este renumită în întreaga lume pentru vinurile sale. Mii de castele (châteaux) produc unele dintre cele mai prestigioase vinuri din lume.",
      en: "The Bordeaux wine region is world-famous for its wines. Thousands of châteaux produce some of the most prestigious wines in the world."
    },
    facts: {
      de: ["Berühmteste Weinregion der Welt.", "Über 110.000 Hektar Rebfläche.", "Heimat edler Châteaux."],
      hu: ["A világ leghíresebb borvidéke.", "Több mint 110 000 hektár szőlő.", "Nemes kastélyok (Châteaux) otthona."],
      ro: ["Cea mai faimoasă regiune viticolă din lume.", "Peste 110.000 hectare de viță de vie.", "Locul de origine al renumitelor castele viticole."],
      en: ["World's most famous wine region.", "Over 110,000 hectares of vineyards.", "Home of prestigious châteaux."]
    },
    descriptionAdvanced: {
      de: "Bordeaux ist das Synonym für Spitzenweine. Die Region ist geprägt von einer Jahrhunderte alten Weintradition und einem perfekten Zusammenspiel von Boden und Klima (Terroir). Von den Kiesböden des Médoc bis zu den Lehmplateaus von Saint-Émilion bietet Bordeaux eine unvergleichliche Vielfalt an Rot- und Weißweinen. Geografie K7 — Landwirtschaftliche Sonderkulturen und Export.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Jedes Jahr werden 700 Millionen Flaschen gefüllt.",
        "Merlot und Cabernet sind die Hauptsorten.",
        "Die Klassifizierung von 1855 gilt noch heute.",
        "Saint-Émilion ist UNESCO-Kulturerbe.",
        "Die Cité du Vin ist ein modernes Wein-Museum.",
        "Weinbau wird hier seit der Römerzeit betrieben.",
        "Die Appellationen regeln streng die Qualität."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "nature-gorges-du-verdon-extra",
    type: "river",
    parent: "FR-PAC",
    coords: [6.368, 43.749],
    name: { de: "Verdonschlucht", hu: "Verdon-szurdok", ro: "Cheile Verdonului", en: "Verdon Gorge" },
    description: {
      de: "Die Verdonschlucht ist einer der tiefsten und schönsten Canyons Europas. Der türkisfarbene Fluss Verdon hat sich hier tief in die Kalksteinfelsen gegraben.",
      hu: "A Verdon-szurdok Európa egyik legmélyebb és legszebb kanyonja. A türkizkék Verdon folyó mélyen bevágta magát a mészkősziklákba.",
      ro: "Cheile Verdonului sunt unul dintre cele mai adânci și mai frumoase canioane din Europa. Râul Verdon, de culoare turcoaz, a săpat adânc în stâncile de calcar.",
      en: "The Verdon Gorge is one of the deepest and most beautiful canyons in Europe. The turquoise Verdon River has carved deep into the limestone cliffs."
    },
    facts: {
      de: ["Grand Canyon Europas.", "Türkisblaues Wasser.", "Bis zu 700 Meter tief."],
      hu: ["Európa Grand Canyonja.", "Türkizkék víz.", "Akár 700 méter mély."],
      ro: ["Marele Canion al Europei.", "Apă turcoaz.", "Adâncime de până la 700 metri."],
      en: ["Europe's Grand Canyon.", "Turquoise water.", "Up to 700 meters deep."]
    },
    descriptionAdvanced: {
      de: "Die Verdonschlucht ist ein spektakuläres Naturwunder in der Provence. Der Fluss Verdon hat sich über Jahrmillionen durch den Kalkstein gegraben. Die intensive Farbe des Wassers ist weltberühmt. Es ist ein Paradies für Wanderer, Kletterer und Wassersportler gleichermaßen. Geografie K7 — Erosionsprozesse und Fließgewässer.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Schlucht ist etwa 25 km lang.",
        "Der 'Sentier Martel' ist ein bekannter Wanderweg.",
        "Geier wurden hier wieder angesiedelt.",
        "Der Lac de Sainte-Croix liegt am Ende.",
        "Die Wände sind ein Kletter-Hotspot.",
        "Panoramastraßen bieten tolle Aussichten.",
        "Die Kalkfelsen stammen aus dem Jura."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "animal-habitat-camargue-extra",
    type: "animal-habitat",
    parent: "FR-PAC",
    coords: [4.4286, 43.5539],
    name: { de: "Camargue", hu: "Camargue", ro: "Camargue", en: "Camargue" },
    description: {
      de: "Die Camargue ist ein riesiges Feuchtgebiet im Rhone-Delta, bekannt für ihre weißen Pferde, schwarzen Stiere und rosa Flamingos.",
      hu: "A Camargue egy hatalmas vizes élőhely a Rhône-deltában, híres fehér lovairól, fekete bikáiról és rózsaszín flamingóiról.",
      ro: "Camargue este o zonă umedă vastă în delta Ronului, cunoscută pentru caii săi albi, taurii negri și flamingo roz.",
      en: "The Camargue is a vast wetland in the Rhône delta, famous for its white horses, black bulls, and pink flamingos."
    },
    facts: {
      de: ["Sumpflandschaft am Mittelmeer.", "Berühmte weiße Wildpferde.", "Wichtiges Brutgebiet für Flamingos."],
      hu: ["Mocsári táj a Földközi-tenger partján.", "Híres fehér vadlovak.", "Fontos fészkelőhely flamingók számára."],
      ro: ["Zonă mlăștinoasă la Mediterană.", "Faimoșii cai albi sălbatici.", "Zonă importantă de cuibărit pentru flamingo."],
      en: ["Wetland on the Mediterranean.", "Famous white wild horses.", "Important breeding ground for flamingos."]
    },
    descriptionAdvanced: {
      de: "Die Camargue ist eine einzigartige Naturregion im Delta der Rhône. Geprägt von Salzwiesen und Lagunen, bietet sie Lebensraum für weiße Wildpferde und schwarze Stiere. Es ist zudem der einzige Ort in Frankreich, an dem Rosaflamingos brüten. Geografie K7 — Ökosysteme in Flussdeltas.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Region ist ein Naturpark von 85.000 ha.",
        "Hier wird hochwertiger Meersalz gewonnen.",
        "Roter Camargue-Reis ist eine Spezialität.",
        "Die Stadt Aigues-Mortes liegt am Rand.",
        "Gardians sind die traditionellen Cowboys.",
        "Hunderttausende Zugvögel rasten hier.",
        "Die Landschaft ist extrem flach."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "lake-lake-geneva-extra",
    type: "lake",
    parent: "FR-ARA",
    coords: [6.4, 46.4],
    name: { de: "Genfersee", hu: "Genfi-tó", ro: "Lacul Geneva", en: "Lake Geneva" },
    description: {
      de: "Der Genfersee, an der Grenze zwischen Frankreich und der Schweiz gelegen, ist einer der größten Seen Westeuropas. Er ist bekannt für seine eleganten Städte und die Alpenkulisse.",
      hu: "A Genfi-tó, amely Franciaország és Svájc határán fekszik, Nyugat-Európa egyik legnagyobb tava. Elegáns városairól és alpesi hátteréről ismert.",
      ro: "Lacul Geneva, situat la granița dintre Franța și Elveția, este unul dintre cele mai mari lacuri din Europa de Vest. Este cunoscut pentru orașele sale elegante și peisajul alpin.",
      en: "Lake Geneva, located on the border between France and Switzerland, is one of the largest lakes in Western Europe. It is known for its elegant towns and Alpine backdrop."
    },
    facts: {
      de: ["Größter See Westeuropas.", "Wird von der Rhône durchflossen.", "Alpines Mikroklima."],
      hu: ["Nyugat-Európa legnagyobb tava.", "A Rhône folyik keresztül rajta.", "Alpesi mikroklíma."],
      ro: ["Cel mai mare lac din Europa de Vest.", "Străbătut de râul Ron.", "Microclimat alpin."],
      en: ["Largest lake in Western Europe.", "Fed by the Rhône river.", "Alpine microclimate."]
    },
    descriptionAdvanced: {
      de: "Der Genfersee ist ein riesiges Binnengewässer im Herzen Europas. Er verbindet die französischen Hochalpen mit den Schweizer Jura-Höhen. Die Ufer sind gesäumt von mondänen Kurorten wie Évian. Der See hat einen ausgleichenden Einfluss auf das Klima der Region. Geografie K7 — Alpenrandseen und Wasserressourcen.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Er ist sichelförmig und bis zu 310 m tief.",
        "Frankreich gehört etwa 40% der Wasserfläche.",
        "Die Schifffahrt hat eine lange Tradition.",
        "Der Jet d'Eau in Genf ist ein Wahrzeichen.",
        "Weinbau wird an den sonnigen Hängen betrieben.",
        "Die Wasserqualität ist heute sehr hoch.",
        "Es ist ein wichtiges Trinkwasserreservoir."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "forest-fontainebleau-forest-extra",
    type: "forest",
    parent: "FR-IDF",
    coords: [2.699, 48.404],
    name: { de: "Wald von Fontainebleau", hu: "Fontainebleau-i erdő", ro: "Pădurea Fontainebleau", en: "Fontainebleau Forest" },
    description: {
      de: "Der Wald von Fontainebleau ist ein riesiges Waldgebiet südlich von Paris, das für seine Felsformationen, die zum Bouldern genutzt werden, und seine reiche Geschichte berühmt ist.",
      hu: "A Fontainebleau-i erdő egy hatalmas erdőterület Párizstól délre, híres a sziklaformációiról, amelyeket boulderezésre használnak, valamint gazdag történelméről.",
      ro: "Pădurea Fontainebleau este o pădure vastă la sud de Paris, renumită pentru formațiunile sale stâncoase folosite pentru bouldering și pentru istoria sa bogată.",
      en: "The Forest of Fontainebleau is a vast forest south of Paris, famous for its rock formations used for bouldering and its rich history."
    },
    facts: {
      de: ["Boulder-Paradies.", "Nahe bei Paris.", "Ehemaliges königliches Jagdgebiet."],
      hu: ["Boulderező paradicsom.", "Párizs közelében.", "Egykori királyi vadászterület."],
      ro: ["Paradis pentru bouldering.", "Aproape de Paris.", "Fost domeniu de vânătoare regal."],
      en: ["Bouldering paradise.", "Near Paris.", "Former royal hunting ground."]
    },
    descriptionAdvanced: {
      de: "Fontainebleau ist einer der historischsten Wälder Frankreichs. Weltweit bekannt als Mekka für Boulderer, besticht er durch bizarre Sandsteinformationen. Er war Inspirationsquelle für die Maler der Schule von Barbizon. Das Schloss Fontainebleau liegt am Rande des Waldes. Geografie K7 — Waldökosysteme und Erholungsräume.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Er umfasst über 25.000 Hektar.",
        "Wurde schon 1861 unter Naturschutz gestellt.",
        "Hunderte Kilometer Wanderwege kreuzen ihn.",
        "Die Sandsteine sind 30 Mio. Jahre alt.",
        "Früher diente er als Jagdwald der Könige.",
        "Seltene Tierarten wie Hirsche leben hier.",
        "Die 'Gorges de Franchard' sind sehr beliebt."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "agriculture-champagne-region-extra",
    type: "agriculture",
    parent: "FR-GES",
    coords: [4.3333, 49.1667],
    name: { de: "Champagne-Region", hu: "Champagne borvidék", ro: "Regiunea Champagne", en: "Champagne Region" },
    description: {
      de: "Die Champagne ist die einzige Region der Welt, in der echter Champagner hergestellt werden darf. Die Weinberge, Häuser und Keller sind UNESCO-Weltkulturerbe.",
      hu: "Champagne az egyetlen régió a világon, ahol valódi pezsgőt lehet készíteni. A szőlőültetvények, a házak és a pincék az UNESCO Világörökség részét képezik.",
      ro: "Champagne este singura regiune din lume unde se poate produce șampanie autentică. Viile, casele și pivnițele sunt situri ale Patrimoniului Mondial UNESCO.",
      en: "Champagne is the only region in the world where true champagne can be produced. Its vineyards, houses, and cellars are a UNESCO World Heritage site."
    },
    facts: {
      de: ["Heimat des Champagners.", "Einzigartige Kreideböden.", "Zentren in Reims und Épernay."],
      hu: ["A pezsgő hazája.", "Egyedülálló kréta-talaj.", "Reims és Épernay a központjai."],
      ro: ["Patria șampaniei.", "Sol unic de cretă.", "Centrele sunt Reims și Épernay."],
      en: ["Home of champagne.", "Unique chalky soil.", "Centers in Reims and Épernay."]
    },
    descriptionAdvanced: {
      de: "Champagne ist eine der renommiertesten Agrarregionen weltweit. Nur hier darf unter strengen Regeln Champagner produziert werden. Die Kreideböden verleihen dem Wein seine Spritzigkeit. Die Keller von Reims und Épernay sind unterirdische Kathedralen des Genusses. Geografie K7 — Agrarwirtschaft und Markenrecht.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die AOC Champagne ist gesetzlich geschützt.",
        "34.000 Hektar Rebfläche werden bewirtschaftet.",
        "Millionen Flaschen lagern in den Kellern.",
        "Die Avenue de Champagne ist weltberühmt.",
        "Dom Pérignon verfeinerte die Methode.",
        "Die UNESCO ehrte die Region 2015.",
        "Kreide speichert perfekt die Wärme."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "kid-landmark-futuroscope-extra",
    type: "kid-landmark",
    parent: "FR-NAQ",
    coords: [0.3636, 46.6631],
    name: { de: "Futuroscope", hu: "Futuroscope", ro: "Futuroscope", en: "Futuroscope" },
    description: {
      de: "Futuroscope ist ein einzigartiger Themenpark, der sich auf Multimedia, Kino und futuristische Technologien konzentriert. Seine Pavillons haben auffällige, moderne Architekturen.",
      hu: "A Futuroscope egy egyedülálló vidámpark, amely a multimédiára, a moira és a futurisztikus technológiákra összpontosít. Pavilonjai feltűnő, modern építészeti stílusúak.",
      ro: "Futuroscope este un parc tematic unic axat pe multimedia, cinema și tehnologii futuriste. Pavilioanele sale au o arhitectură modernă și izbitoare.",
      en: "Futuroscope is a unique theme park focusing on multimedia, cinema, and futuristic technologies. Its pavilions have striking, modern architectures."
    },
    facts: {
      de: ["Futuristischer Themenpark.", "Fokus auf Multimedia und 4D.", "Markante Architektur."],
      hu: ["Futurisztikus vidámpark.", "Multimédia és 4D fókusz.", "Jellegzetes építészet."],
      ro: ["Parc tematic futurist.", "Accent pe multimedia și 4D.", "Arhitectură frapantă."],
      en: ["Futuristic theme park.", "Focus on multimedia and 4D.", "Striking architecture."]
    },
    descriptionAdvanced: {
      de: "Futuroscope bei Poitiers ist ein technologisch orientierter Freizeitpark. Er setzt auf immersive visuelle Erlebnisse statt auf bloße Geschwindigkeit. Die Architektur der Pavillons ist ein Blickfang und zeigt visionäre Formen. Der Park ist ein Schaufenster für digitale Innovationen. Geografie K8 — Tourismus und Technologiestandorte.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Eröffnung war im Jahr 1987.",
        "Kinémax ist ein Pavillon in Kristallform.",
        "Vielerorts werden 3D-Brillen genutzt.",
        "Die Abendshow mit Licht ist preisgekrönt.",
        "Es gibt Robotik-Attraktionen für Kinder.",
        "Der Park dient auch Bildungszwecken.",
        "Er ist einer der meistbesuchten Parks."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "mountain-aiguille-du-midi-extra",
    type: "mountain",
    parent: "FR-ARA",
    coords: [6.8871, 45.8795],
    name: { de: "Aiguille du Midi", hu: "Aiguille du Midi", ro: "Aiguille du Midi", en: "Aiguille du Midi" },
    description: {
      de: "Die Aiguille du Midi ist ein 3.842 m hoher Berg im Mont-Blanc-Massiv. Eine Seilbahn führt zum Gipfel und bietet einen spektakulären Blick auf die Alpen.",
      hu: "Az Aiguille du Midi egy 3842 méter magas hegy a Mont Blanc-masszívumban. Egy felvonó visz fel a csúcsra, ahonnan lenyűgöző kilátás nyílik az Alpokra.",
      ro: "Aiguille du Midi este un munte de 3.842 m în masivul Mont Blanc. O telecabină duce spre vârf, oferind o priveliște spectaculoasă asupra Alpilor.",
      en: "The Aiguille du Midi is a 3,842m mountain in the Mont Blanc massif. A cable car leads to the summit, offering a spectacular view of the Alps."
    },
    facts: {
      de: ["Gipfel auf 3.842 Metern.", "Höchste Seilbahn Frankreichs.", "Direkt am Mont-Blanc."],
      hu: ["3842 méteres csúcs.", "Franciaország legmagasabb felvonója.", "Közvetlenül a Mont-Blanc mellett."],
      ro: ["Vârf la 3.842 metri.", "Cea mai înaltă telecabină din Franța.", "Chiar lângă Mont-Blanc."],
      en: ["3,842-meter summit.", "France's highest cable car.", "Right next to Mont Blanc."]
    },
    descriptionAdvanced: {
      de: "Die Aiguille du Midi ist der höchste Punkt, den man in Europa per Seilbahn erreichen kann. Der Ausblick auf den Mont-Blanc ist atemberaubend. Die Attraktion 'Step into the Void' bietet einen Blick in 1000 Meter Tiefe. Es ist das Tor zum Hochgebirge für Bergsteiger. Geografie K7 — Hochgebirge und glaziale Formen.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Seilbahn überwindet 2800 Höhenmeter.",
        "Sie wurde bereits 1955 eröffnet.",
        "Die Bergstation liegt direkt im Fels.",
        "Der Sauerstoffgehalt ist hier spürbar geringer.",
        "Vara kann man weiter nach Italien fahren.",
        "Es ist ein Magnet für Extrem-Skifahrer.",
        "Ein Museum zeigt die Geschichte des Bergsteigens."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "animal-habitat-zoo-de-beauval-extra",
    type: "animal-habitat",
    parent: "FR-CVL",
    coords: [1.3533, 47.2464],
    name: { de: "ZooParc de Beauval", hu: "Beauval Állatkert", ro: "Grădina Zoologică Beauval", en: "ZooParc de Beauval" },
    description: {
      de: "Der ZooParc de Beauval zählt zu den besten Zoos der Welt und beherbergt eine außergewöhnliche Vielfalt an Tieren, darunter Riesenpandas.",
      hu: "A ZooParc de Beauval a világ legjobb állatkertjei közé tartozik, és rendkívüli állatfaj-sokféleségnek ad otthont, beleértve az óriáspandákat is.",
      ro: "ZooParc de Beauval este considerată una dintre cele mai bune grădini zoologice din lume, găzduind o varietate excepțională de animale, inclusiv panda uriași.",
      en: "ZooParc de Beauval is ranked among the best zoos in the world, housing an exceptional variety of animals, including giant pandas."
    },
    facts: {
      de: ["Top 5 Zoos weltweit.", "Heimat von Riesenpandas.", "Über 35.000 Tiere."],
      hu: ["A világ 5 legjobb állatkertje között.", "Óriáspandák otthona.", "Több mint 35 000 állat."],
      ro: ["Top 5 grădini zoologice din lume.", "Găzduiește panda uriași.", "Peste 35.000 de animale."],
      en: ["Top 5 zoos worldwide.", "Home to giant pandas.", "Over 35,000 animals."]
    },
    descriptionAdvanced: {
      de: "Beauval ist mehr als ein Tierpark; es ist ein Zentrum für Artenschutz. Als einziger Zoo Frankreichs beherbergt er Riesenpandas aus China. Der Äquatorial-Dom ist ein architektonisches Highlight. Der Zoo investiert massiv in den Schutz bedrohter Arten weltweit. Geografie K7 — Biodiversität und Naturschutz.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "In Beauval leben über 800 Arten.",
        "Der Dom bietet ein tropisches Klima.",
        "Die Panda-Zwillinge wurden hier geboren.",
        "Es gibt eine eigene moderne Tierklinik.",
        "Eine Seilbahn verbindet Parkteile.",
        "Bildungsprogramme schulen das Umweltbewusstsein.",
        "Weiße Tiger waren eine frühe Sensation."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "industry-aero-valley-bordeaux-extra",
    type: "industry",
    parent: "FR-NAQ",
    coords: [-0.7153, 44.8398],
    name: { de: "Aerospace Valley Bordeaux", hu: "Aerospace Valley Bordeaux", ro: "Aerospace Valley Bordeaux", en: "Aerospace Valley Bordeaux" },
    description: {
      de: "Bordeaux ist ein wichtiges Zentrum der französischen Luft- und Raumfahrtindustrie mit Unternehmen wie Dassault Aviation, ArianeGroup und Thales.",
      hu: "Bordeaux a francia repülőgép- és űripar fontos központja, ahol olyan vállalatok működnek, mint a Dassault Aviation, az ArianeGroup és a Thales.",
      ro: "Bordeaux este un centru major pentru industria aerospațială franceză, cu companii precum Dassault Aviation, ArianeGroup și Thales.",
      en: "Bordeaux is a major hub for the French aerospace industry, with companies like Dassault Aviation, ArianeGroup, and Thales."
    },
    facts: {
      de: ["Hub für militärische Luftfahrt.", "Bau der Ariane-Raketen.", "Hochtechnologie-Cluster."],
      hu: ["Katonai repülési központ.", "Az Ariane rakéták építése.", "Csúcstechnológiai klaszter."],
      ro: ["Hub pentru aviația militară.", "Construcția rachetelor Ariane.", "Cluster de înaltă tehnologie."],
      en: ["Military aviation hub.", "Construction of Ariane rockets.", "High-tech cluster."]
    },
    descriptionAdvanced: {
      de: "Bordeaux ist ein Kraftzentrum der französischen Hightech-Industrie. Während Toulouse zivil dominiert ist, werden in Bordeaux Militärjets und Weltraumraketen gebaut. Firmen wie Dassault und ArianeGroup prägen die Region. Es ist ein Motor für Innovation und Beschäftigung. Geografie K8 — Wirtschaftsstandorte der Zukunft.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Hier wird der Falcon-Businessjet montiert.",
        "Bordeaux liefert wichtige Bauteile für Raketen.",
        "Die Region fördert Drohnen-Technologie.",
        "Tausende Ingenieure arbeiten vor Ort.",
        "Der Sektor zieht viele Start-ups an.",
        "Es gibt enge Verbindungen zur Forschung.",
        "Bordeaux ist weltweit führend in Verbundstoffen."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "river-loire-extra",
    type: "river",
    parent: "FR-CVL",
    coords: [-0.173, 47.28],
    name: { de: "Loire", hu: "Loire", ro: "Loara", en: "Loire River" },
    description: {
      de: "Die Loire ist der längste Fluss Frankreichs. Ihr Tal, das Loiretal, ist bekannt als der 'Garten Frankreichs' und berühmt für seine vielen Schlösser.",
      hu: "A Loire Franciaország leghosszabb folyója. Völgye, a Loire-völgy, 'Franciaország kertjeként' ismert és számos kastélyáról híres.",
      ro: "Loara este cel mai lung râu din Franța. Valea sa, Valea Loarei, este cunoscută ca 'Grădina Franței' și renumită pentru numeroasele sale castele.",
      en: "The Loire is the longest river in France. Its valley, the Loire Valley, is known as the 'Garden of France' and is famous for its many châteaux."
    },
    facts: {
      de: ["Längster Fluss des Landes.", "UNESCO-Weltnaturerbe (Tal).", "Berühmt für Renaissance-Schlösser."],
      hu: ["Az ország leghosszabb folyója.", "UNESCO világörökség (völgy).", "Híres a reneszánsz kastélyokról."],
      ro: ["Cel mai lung fluviu al țării.", "Patrimoniu UNESCO (valea).", "Faimos pentru castelele renascentiste."],
      en: ["Longest river in the country.", "UNESCO World Heritage (valley).", "Famous for Renaissance châteaux."]
    },
    descriptionAdvanced: {
      de: "Die Loire gilt als der letzte wilde Strom Westeuropas. Über 1000 km fließt sie durch vielfältige Landschaften. Das Loiretal ist berühmt für seine Schlösser und Weine. Der Fluss ist ökologisch wertvoll durch seine Sandbänke und Auen. Geografie K7 — Flussläufe und Naturräume.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Loire entspringt im Zentralmassiv.",
        "Nantes liegt nahe der Mündung.",
        "Sie durchfließt den 'Garten Frankreichs'.",
        "Der Wasserstand schwankt jahreszeitlich stark.",
        "Der Radweg 'Loire à Vélo' ist sehr beliebt.",
        "Der Fluss ist für seine Untiefen bekannt.",
        "Das Loiretal gehört zum Weltkulturerbe."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "sea-etretat-cliffs-extra",
    type: "sea",
    parent: "FR-NOR",
    coords: [0.2074, 49.7078],
    name: { de: "Klippen von Étretat", hu: "Étretat-i sziklák", ro: "Stâncile din Étretat", en: "Cliffs of Étretat" },
    description: {
      de: "Die Kreidefelsen von Étretat sind berühmt für ihre natürlichen Bögen, insbesondere die Porte d'Aval und die Aiguille (Nadel).",
      hu: "Az Étretat-i krétasziklák híresek természetes boltíveikről, különösen a Porte d'Aval-ról és az Aiguille-ról (Tű).",
      ro: "Stâncile de cretă din Étretat sunt renumite pentru arcadele lor naturale, în special Porte d'Aval și Aiguille (Acul).",
      en: "The chalk cliffs of Étretat are famous for their natural arches, especially the Porte d'Aval and the Aiguille (Needle)."
    },
    facts: {
      de: ["Weiße Alabasterküste.", "Spektakuläre Felsbögen.", "Motiv vieler impressionistischer Maler."],
      hu: ["Fehér alabástrompart.", "Látványos sziklaívek.", "Sok impresszionista festő témája."],
      ro: ["Coasta albă de alabastru.", "Arcade spectaculoase în stâncă.", "Subiect pentru mulți pictori impresioniști."],
      en: ["White Alabaster Coast.", "Spectacular rock arches.", "Subject of many Impressionist painters."]
    },
    descriptionAdvanced: {
      de: "Die Klippen von Étretat sind ein dramatischer Höhepunkt der normannischen Küste. Wind und Wellen formten markante Bögen in die Kreide. Künstler wie Monet waren fasziniert von dem Lichtspiel auf den weißen Felsen. Es ist ein Symbol für die Kraft der Küstenerosion. Geografie K7 — Küstenformen und Brandung.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Porte d'Aval ähnelt einem Elefanten.",
        "Die Felsnadel ist 70 Meter hoch.",
        "Arsène Lupin soll hier Schätze versteckt haben.",
        "Man kann bei Ebbe am Strand wandern.",
        "Die Kreide enthält Schichten aus Feuerstein.",
        "Die Gärten von Étretat liegen auf der Höhe.",
        "Es ist ein wichtiges Naturschutzgebiet."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "industry-perfume-grasse-extra",
    type: "industry",
    parent: "FR-PAC",
    coords: [6.9231, 43.6583],
    name: { de: "Parfümindustrie in Grasse", hu: "Grasse-i parfümipar", ro: "Industria parfumurilor din Grasse", en: "Grasse Perfume Industry" },
    description: {
      de: "Grasse gilt als die Welthauptstadt des Parfüms. Seit Jahrhunderten werden hier Duftstoffe aus den umliegenden Blumenfeldern gewonnen.",
      hu: "Grasse-t a parfüm világfővárosának tartják. Évszázadok óta nyernek ki itt illatanyagokat a környező virágmezőkről.",
      ro: "Grasse este considerată capitala mondială a parfumurilor. De secole, aici se extrag esențe din câmpurile de flori din jur.",
      en: "Grasse is considered the world's capital of perfume. For centuries, fragrances have been extracted here from the surrounding flower fields."
    },
    facts: {
      de: ["Welthauptstadt des Parfüms.", "Felder von Jasmin und Rosen.", "UNESCO-Kulturerbe (Wissen)."],
      hu: ["A parfüm világfővárosa.", "Jázmin- és rózsaföldek.", "UNESCO világörökség (tudás)."],
      ro: ["Capitala mondială a parfumului.", "Câmpuri de iasomie și trandafiri.", "Patrimoniu UNESCO (expertiză)."],
      en: ["World capital of perfume.", "Fields of jasmine and roses.", "UNESCO heritage (knowledge)."]
    },
    descriptionAdvanced: {
      de: "Grasse ist das historische Zentrum der Duftherstellung. Das milde Klima der Provence erlaubt den Anbau kostbarer Blumen wie Jasmin. Hier werden die feinsten Essenzen für globale Luxusmarken produziert. Das Handwerk der Parfümeure ist als Kulturerbe anerkannt. Geografie K8 — Handwerk, Tradition und Weltmarkt.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Früher war Grasse eine Stadt der Gerber.",
        "Für 1 Liter Öl braucht man Tonnen von Blüten.",
        "Molinard und Fragonard sitzen hier.",
        "Die 'Nasen' werden hier ausgebildet.",
        "Jasmin aus Grasse ist in Chanel No. 5.",
        "Es gibt ein internationales Parfümmuseum.",
        "Die Ernte erfolgt meist in Handarbeit."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "mountain-pyrenees-np-extra",
    type: "mountain",
    parent: "FR-OCC",
    coords: [-0.0833, 42.8333],
    name: { de: "Nationalpark Pyrenäen", hu: "Pireneusok Nemzeti Park", ro: "Parcul Național Pirinei", en: "Pyrenees National Park" },
    description: {
      de: "Der Nationalpark Pyrenäen erstreckt sich entlang der Grenze zu Spanien und bietet spektakuläre Berglandschaften, Seen und Wasserfälle.",
      hu: "A Pireneusok Nemzeti Park a spanyol határ mentén húzódik, és látványos hegyi tájakat, tavakat és vízeséseket kínál.",
      ro: "Parcul Național Pirinei se întinde de-a lungul graniței cu Spania și oferă peisaje montane spectaculoase, lacuri și cascade.",
      en: "The Pyrenees National Park stretches along the border with Spain, offering spectacular mountain landscapes, lakes, and waterfalls."
    },
    facts: {
      de: ["Hochgebirge an der Grenze.", "Cirque de Gavarnie.", "Heimat des Steinbocks."],
      hu: ["Magashegység a határon.", "Cirque de Gavarnie.", "A kőszáli kecske otthona."],
      ro: ["Munți înalți la frontieră.", "Circul Gavarnie.", "Locul de origine al caprei negre."],
      en: ["High mountains on the border.", "Cirque de Gavarnie.", "Home to the ibex."]
    },
    descriptionAdvanced: {
      de: "Der Nationalpark Pyrenäen schützt eine wilde Grenzregion. Majestätische Kessel wie der Cirque de Gavarnie sind Meisterwerke der Glazialerosion. Seltene Arten wie der Bartgeier finden hier Zuflucht. Der Park ist ein Refugium für Naturliebhaber und Wanderer. Geografie K7 — Hochgebirge und Naturschutz.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Gründung war im Jahr 1967.",
        "Die Grande Cascade ist sehr beeindruckend.",
        "Der Park ist 100 km lang.",
        "Hunde sind im Kerngebiet verboten.",
        "Der Vignemale ist der höchste Gipfel.",
        "Über 200 Bergseen liegen im Gebiet.",
        "Wanderer nutzen den GR 10 Weg."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "kid-landmark-puy-du-fou-extra",
    type: "kid-landmark",
    parent: "FR-PDL",
    coords: [-0.9306, 46.8931],
    name: { de: "Puy du Fou", hu: "Puy du Fou", ro: "Puy du Fou", en: "Puy du Fou" },
    description: {
      de: "Puy du Fou ist ein historischer Themenpark, der für seine spektakulären Shows bekannt ist, die verschiedene Epochen der französischen Geschichte nachstellen.",
      hu: "A Puy du Fou egy történelmi vidámpark, amely a francia történelem különböző korszakait felelevenítő látványos előadásairól ismert.",
      ro: "Puy du Fou este un parc tematic istoric renumit pentru spectacolele sale grandioase care reconstituie diferite perioade din istoria Franței.",
      en: "Puy du Fou is a historical theme park renowned for its spectacular shows that reenact different periods of French history."
    },
    facts: {
      de: ["Bester Themenpark weltweit (mehrfach).", "Historische Live-Shows.", "Keine mechanischen Fahrgeschäfte."],
      hu: ["A világ legjobb vidámparkja (többször).", "Történelmi élő előadások.", "Nincsenek mechanikus játékok."],
      ro: ["Cel mai bun parc tematic din lume (premiat).", "Spectacole istorice live.", "Fără atracții mecanice."],
      en: ["Voted world's best theme park.", "Live historical shows.", "No mechanical rides."]
    },
    descriptionAdvanced: {
      de: "Puy du Fou ist ein einzigartiges Erlebnis für Kinder und Erwachsene. Statt Achterbahnen bietet er spektakuläre Inszenierungen der Geschichte: von Gladiatoren bis zu Musketieren. Die Liebe zum Detail in den historischen Dörfern ist bemerkenswert. Es ist lebendiger Geschichtsunterricht unter freiem Himmel. Geschichte K6-K8 — Mittelalter und Neuzeit.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Cinéscénie ist die größte Nachtshow.",
        "Tausende Freiwillige wirken mit.",
        "Es gibt Greifvogel-Shows im Park.",
        "Wikinger-Schiffe steigen aus dem Wasser.",
        "Der Park hat mehrere Themen-Hotels.",
        "Er wurde 1978 gegründet.",
        "Millionen Besucher kommen jährlich."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "agriculture-provence-lavender-extra",
    type: "agriculture",
    parent: "FR-PAC",
    coords: [5.923, 43.933],
    name: { de: "Lavendelfelder der Provence", hu: "Provence-i levendulamezők", ro: "Câmpurile de lavandă din Provence", en: "Lavender Fields of Provence" },
    description: {
      de: "Die Lavendelfelder der Provence bieten im Sommer einen atemberaubenden Anblick und Duft. Das Plateau de Valensole ist einer der berühmtesten Orte dafür.",
      hu: "A provence-i levendulamezők nyáron lélegzetelállító látványt és illatot nyújtanak. A Valensole-fennsík az egyik leghíresebb helyszín.",
      ro: "Câmpurile de lavandă din Provence oferă o priveliște și un parfum uimitoare în timpul verii. Platoul Valensole este unul dintre cele mai faimoase locuri.",
      en: "The lavender fields of Provence offer a breathtaking sight and scent in the summer. The Valensole Plateau is one of the most famous spots."
    },
    facts: {
      de: ["Lila Blütenmeer im Sommer.", "Zentrum der Lavendelöl-Produktion.", "Ikonisches Bild der Provence."],
      hu: ["Lila virágtenger nyáron.", "A levendulaolaj-gyártás központja.", "Provence ikonikus jelképe."],
      ro: ["Mare de flori mov vara.", "Centrul producției de ulei de lavandă.", "Imagine iconică a Provenței."],
      en: ["Purple sea of flowers in summer.", "Center of lavender oil production.", "Iconic image of Provence."]
    },
    descriptionAdvanced: {
      de: "Die Lavendelfelder sind die Seele der sommerlichen Provence. Auf Plateaus wie Valensole erstrecken sich violette Reihen bis zum Horizont. Der Anbau dient der Gewinnung ätherischer Öle für die Parfümindustrie. Es ist ein Paradebeispiel für regionale Spezialkulturen. Geografie K7 — Landwirtschaft und Tourismus.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Blütezeit ist von Juni bis August.",
        "Lavandin ist die häufigste Sorte.",
        "Die Ernte erfolgt bei voller Sonne.",
        "Destillerien zeigen den Destillationsprozess.",
        "Die Abtei Sénanque ist ein Top-Motiv.",
        "Lavendel wirkt beruhigend und heilend.",
        "Es gibt spezielle 'Lavendelrouten'."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "lake-annecy-extra",
    type: "lake",
    parent: "FR-ARA",
    coords: [6.15, 45.85],
    name: { de: "See von Annecy", hu: "Annecy-tó", ro: "Lacul Annecy", en: "Lake Annecy" },
    description: {
      de: "Der See von Annecy gilt als einer der saubersten Seen Europas. Er liegt inmitten der französischen Alpen und ist ein beliebtes Ziel für Wassersportler.",
      hu: "Az Annecy-tó Európa egyik legtisztább tavának számít. A francia Alpok szívében fekszik, és a vízi sportok kedvelőinek népszerű célpontja.",
      ro: "Lacul Annecy este considerat unul dintre cele mai curate lacuri din Europa. Situat în inima Alpilor francezi, este o destinație populară pentru sporturile nautice.",
      en: "Lake Annecy is considered one of the cleanest lakes in Europe. Located in the heart of the French Alps, it is a popular destination for water sports."
    },
    facts: {
      de: ["Kristallklares Wasser.", "Umgeben von Alpengipfeln.", "Sauberster See Europas."],
      hu: ["Kristálytiszta víz.", "Alpesi csúcsok veszik körül.", "Európa legtisztább tava."],
      ro: ["Apă de cristal.", "Înconjurat de vârfuri alpine.", "Cel mai curat lac din Europa."],
      en: ["Crystal clear water.", "Surrounded by Alpine peaks.", "Cleanest lake in Europe."]
    },
    descriptionAdvanced: {
      de: "Der See von Annecy besticht durch seine außergewöhnliche Wasserqualität. Durch strenge Umweltschutzmaßnahmen ist er einer der reinsten Seen des Kontinents. Die Stadt Annecy am Nordufer wird oft als 'Venedig der Alpen' bezeichnet. Der See bietet ideale Bedingungen für Segeln und Tauchen. Geografie K7 — Gewässerschutz und Alpentourismus.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Die Wassertemperatur erreicht 22°C.",
        "Es gibt einen 40 km langen Radweg um den See.",
        "Das 'Fête du Lac' ist ein großes Feuerwerk.",
        "Der See entstand durch Gletscherschmelze.",
        "Paraglider starten vom Col de la Forclaz.",
        "Das Palais de l'Isle ist ein bekanntes Motiv.",
        "Berge wie der Semnoz umrahmen das Ufer."
      ],
      hu: [],
      ro: [],
      en: []
    }
  },
  {
    id: "kid-landmark-parc-asterix-extra",
    type: "kid-landmark",
    parent: "FR-HDF",
    coords: [2.5723, 49.1342],
    name: { de: "Parc Astérix", hu: "Parc Astérix", ro: "Parc Astérix", en: "Parc Astérix" },
    description: {
      de: "Der Parc Astérix ist ein Themenpark, der auf der berühmten Comic-Serie von Goscinny und Uderzo basiert. Er bietet eine Mischung aus Achterbahnen und thematischen Welten.",
      hu: "A Parc Astérix egy vidámpark, amely Goscinny és Uderzo híres képregénysorozatán alapul. Hullámvasutak és tematikus világok keverékét kínálja.",
      ro: "Parc Astérix este un parc tematic bazat pe faimoasa serie de benzi desenate de Goscinny și Uderzo. Oferă un amestec de montañe ruse și lumi tematice.",
      en: "Parc Astérix is a theme park based on the famous comic book series by Goscinny and Uderzo. It offers a mix of roller coasters and themed worlds."
    },
    facts: {
      de: ["Galliens Welt erleben.", "Große Achterbahnen.", "Thematisiert nach den Comics."],
      hu: ["Éld át Gallia világát.", "Hatalmas hullámvasutak.", "A képregények világa."],
      ro: ["Experimentează lumea Galiei.", "Montagne russe-uri mari.", "Tematizat după benzile desenate."],
      en: ["Experience the world of Gaul.", "Major roller coasters.", "Themed after the comics."]
    },
    descriptionAdvanced: {
      de: "Der Parc Astérix bringt den Humor der Gallier in die reale Welt. Er ist bekannt für seine rasanten Achterbahnen wie 'OzIris'. Die verschiedenen Welten wie Ägypten oder das Römische Reich sind detailverliebt gestaltet. Es ist ein Vergnügen für die ganze Familie mit typisch französischem Charme. Sachkunde K3-K5 — Kultur und Unterhaltung.",
      hu: "",
      ro: "",
      en: ""
    },
    factsAdvanced: {
      de: [
        "Eröffnung war im Jahr 1989.",
        "Tonnerre 2 Zeus ist eine Holzachterbahn.",
        "Das Gallische Dorf ist das Zentrum.",
        "Show-Kämpfe zwischen Römern und Galliern.",
        "Es gibt Wasserbahnen für heiße Tage.",
        "Der Park liegt nördlich von Paris.",
        "Maskottchen sind Asterix und Obelix."
      ],
      hu: [],
      ro: [],
      en: []
    }
  }
];

function writePoiFile(name, pois) {
    const outPath = `lib/visualLab/data/${name}.ts`;
    const body = `export const ${name}: POI[] = [\n${pois.map(p => {
        let s = '  {\n';
        for (const [key, value] of Object.entries(p)) {
            if (typeof value === 'string') {
                s += `    ${key}: "${value}",\n`;
            } else if (Array.isArray(value)) {
                s += `    ${key}: ${JSON.stringify(value)},\n`;
            } else {
                s += `    ${key}: ${JSON.stringify(value, null, 2).replace(/\n/g, '\n    ')},\n`;
            }
        }
        return s + '  }';
    }).join(',\n')}\n];\n`;
    fs.writeFileSync(outPath, header + body);
    console.log(`Wrote ${pois.length} POIs to ${outPath}`);
}

writePoiFile('poiExtraFranceCities', cities);
writePoiFile('poiExtraFranceHistory', history);
writePoiFile('poiExtraFranceOther', other);
