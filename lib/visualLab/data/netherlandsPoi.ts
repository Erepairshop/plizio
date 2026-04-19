import type { POI } from "./poi";

export const netherlandsCountry: POI = {
  id: "NL",
  type: "country",
  parent: "EUROPE",
  coords: [5.2913, 52.1326],
  name: { de: "Niederlande", hu: "Hollandia", ro: "Țările de Jos", en: "Netherlands" },
  image: "/geo-images/netherlands/netherlands.webp",
  description: {
    de: "Ein Land in Westeuropa, bekannt für seine flache Landschaft, Tulpenfelder, Windmühlen und Radwege.",
    hu: "Nyugat-európai ország, amely lapos tájairól, tulipánmezőiről, szélmalmairól és kerékpárútjairól ismert.",
    ro: "O țară din Europa de Vest, cunoscută pentru peisajul său plat, câmpurile de lalele, morile de vânt și pistele de biciclete.",
    en: "A country in Western Europe, known for its flat landscape, tulip fields, windmills, and cycling routes."
  },
  facts: {
    de: ["Hauptstadt ist Amsterdam.", "Rund ein Drittel des Landes liegt unter dem Meeresspiegel.", "Es gibt mehr Fahrräder als Einwohner.", "Bekannt für Käse wie Gouda und Edamer."],
    hu: ["Fővárosa Amszterdam.", "Az ország mintegy harmada a tengerszint alatt fekszik.", "Több kerékpár van, mint lakos.", "Híres sajtjairól, mint a Gouda és az Edámi."],
    ro: ["Capitala este Amsterdam.", "Aproximativ o treime din țară se află sub nivelul mării.", "Există mai multe biciclete decât locuitori.", "Cunoscută pentru brânzeturi precum Gouda și Edam."],
    en: ["Capital is Amsterdam.", "About a third of the country is below sea level.", "There are more bicycles than residents.", "Famous for cheeses like Gouda and Edam."]
  }
};

export const netherlandsRegions: POI[] = [
  {
    id: "NL-DR", type: "region", parent: "NL", coords: [6.56, 52.84],
    name: { de: "Drenthe", hu: "Drenthe", ro: "Drenthe", en: "Drenthe" },
    image: "/geo-images/netherlands/drenthe.webp",
    description: { de: "Eine ländliche Provinz im Nordosten.", hu: "Egy vidéki tartomány északkeleten.", ro: "O provincie rurală în nord-est.", en: "A rural province in the northeast." },
    facts: { de: ["Bekannt für Hünengräber.", "Hauptstadt ist Assen."], hu: ["Megalitikus sírjairól (hunebedden) ismert.", "Fővárosa Assen."], ro: ["Cunoscută pentru mormintele megalitice.", "Capitala este Assen."], en: ["Known for megalithic tombs.", "Capital is Assen."] }
  },
  {
    id: "NL-FL", type: "region", parent: "NL", coords: [5.55, 52.47],
    name: { de: "Flevoland", hu: "Flevoland", ro: "Flevoland", en: "Flevoland" },
    image: "/geo-images/netherlands/flevoland.webp",
    description: { de: "Die jüngste Provinz der Niederlande.", hu: "Hollandia legfiatalabb tartománya.", ro: "Cea mai tânără provincie a Olandei.", en: "The youngest province of the Netherlands." },
    facts: { de: ["Wurde dem Meer abgerungen.", "Lelystad ist die Hauptstadt."], hu: ["A tengertől hódították el.", "Lelystad a fővárosa."], ro: ["A fost recuperată din mare.", "Lelystad este capitala."], en: ["Reclaimed from the sea.", "Lelystad is the capital."] }
  },
  {
    id: "NL-FR", type: "region", parent: "NL", coords: [5.85, 53.11],
    name: { de: "Friesland", hu: "Frízföld", ro: "Frizia", en: "Friesland" },
    image: "/geo-images/netherlands/friesland.webp",
    description: { de: "Bekannt für Seen und eine eigene Sprache.", hu: "Tavairól és saját nyelvéről ismert.", ro: "Cunoscută pentru lacuri și o limbă proprie.", en: "Known for lakes and its own language." },
    facts: { de: ["Zweite Amtssprache Friesisch.", "Viele Inseln gehören dazu."], hu: ["Második hivatalos nyelve a fríz.", "Sok sziget tartozik hozzá."], ro: ["A doua limbă oficială este frizona.", "Multe insule aparțin de ea."], en: ["Second official language is Frisian.", "Many islands belong to it."] }
  },
  {
    id: "NL-GE", type: "region", parent: "NL", coords: [5.92, 52.05],
    name: { de: "Gelderland", hu: "Gelderland", ro: "Gelderland", en: "Gelderland" },
    image: "/geo-images/netherlands/gelderland.webp",
    description: { de: "Die größte Provinz der Niederlande.", hu: "Hollandia legnagyobb tartománya.", ro: "Cea mai mare provincie a Olandei.", en: "The largest province of the Netherlands." },
    facts: { de: ["Heimat der Veluwe.", "Arnhem ist die Hauptstadt."], hu: ["A Veluwe otthona.", "Arnhem a fővárosa."], ro: ["Casa regiunii Veluwe.", "Arnhem este capitala."], en: ["Home of the Veluwe.", "Arnhem is the capital."] }
  },
  {
    id: "NL-GR", type: "region", parent: "NL", coords: [6.66, 53.22],
    name: { de: "Groningen", hu: "Groningen", ro: "Groningen", en: "Groningen" },
    image: "/geo-images/netherlands/groningen.webp",
    description: { de: "Eine nordöstliche Provinz mit Erdgasvorkommen.", hu: "Északkeleti tartomány földgázkészletekkel.", ro: "O provincie de nord-est cu rezerve de gaze naturale.", en: "A northeastern province with natural gas reserves." },
    facts: { de: ["Bekannt für ihre Studentenstadt.", "Viele alte Kirchen."], hu: ["Diákvárosáról ismert.", "Sok régi temploma van."], ro: ["Cunoscută pentru orașul său studențesc.", "Multe biserici vechi."], en: ["Known for its student city.", "Many old churches."] }
  },
  {
    id: "NL-LI", type: "region", parent: "NL", coords: [5.93, 51.19],
    name: { de: "Limburg", hu: "Limburg", ro: "Limburg", en: "Limburg" },
    image: "/geo-images/netherlands/limburg.webp",
    description: { de: "Die südlichste Provinz, relativ hügelig.", hu: "A legdélibb tartomány, viszonylag dombos.", ro: "Cea mai sudică provincie, relativ deluroasă.", en: "The southernmost province, relatively hilly." },
    facts: { de: ["Grenzt an Deutschland und Belgien.", "Maastricht ist die Hauptstadt."], hu: ["Németországgal és Belgiummal határos.", "Maastricht a fővárosa."], ro: ["Se învecinează cu Germania și Belgia.", "Maastricht este capitala."], en: ["Borders Germany and Belgium.", "Maastricht is the capital."] }
  },
  {
    id: "NL-NB", type: "region", parent: "NL", coords: [5.20, 51.52],
    name: { de: "Nordbrabant", hu: "Észak-Brabant", ro: "Brabantul de Nord", en: "North Brabant" },
    image: "/geo-images/netherlands/north-brabant.webp",
    description: { de: "Bekannt für Karneval und Gastfreundschaft.", hu: "Karneváljáról és vendégszeretetéről ismert.", ro: "Cunoscută pentru carnaval și ospitalitate.", en: "Known for carnival and hospitality." },
    facts: { de: ["Heimat von Philips.", "Viele Vergnügungsparks."], hu: ["A Philips hazája.", "Sok vidámparkja van."], ro: ["Casa companiei Philips.", "Multe parcuri de distracții."], en: ["Home of Philips.", "Many amusement parks."] }
  },
  {
    id: "NL-NH", type: "region", parent: "NL", coords: [4.84, 52.56],
    name: { de: "Nordholland", hu: "Észak-Holland", ro: "Olanda de Nord", en: "North Holland" },
    image: "/geo-images/netherlands/north-holland.webp",
    description: { de: "Heimat der Hauptstadt Amsterdam.", hu: "A főváros, Amszterdam otthona.", ro: "Casa capitalei Amsterdam.", en: "Home of the capital Amsterdam." },
    facts: { de: ["Schiphol Flughafen ist hier.", "Viele Tulpenfelder."], hu: ["Itt található a Schiphol repülőtér.", "Sok tulipánmező."], ro: ["Aeroportul Schiphol este aici.", "Multe câmpuri de lalele."], en: ["Schiphol airport is here.", "Many tulip fields."] }
  },
  {
    id: "NL-OV", type: "region", parent: "NL", coords: [6.46, 52.44],
    name: { de: "Overijssel", hu: "Overijssel", ro: "Overijssel", en: "Overijssel" },
    image: "/geo-images/netherlands/overijssel.webp",
    description: { de: "Eine Provinz im Osten der Niederlande.", hu: "Egy tartomány Hollandia keleti részén.", ro: "O provincie în estul Olandei.", en: "A province in the east of the Netherlands." },
    facts: { de: ["Bekannt für die Hansestädte.", "Zwolle ist die Hauptstadt."], hu: ["A Hanza-városokról ismert.", "Zwolle a fővárosa."], ro: ["Cunoscută pentru orașele hanseatice.", "Zwolle este capitala."], en: ["Known for Hanseatic cities.", "Zwolle is the capital."] }
  },
  {
    id: "NL-UT", type: "region", parent: "NL", coords: [5.16, 52.05],
    name: { de: "Utrecht", hu: "Utrecht", ro: "Utrecht", en: "Utrecht" },
    image: "/geo-images/netherlands/utrecht.webp",
    description: { de: "Die kleinste Provinz der Niederlande.", hu: "Hollandia legkisebb tartománya.", ro: "Cea mai mică provincie a Olandei.", en: "The smallest province of the Netherlands." },
    facts: { de: ["Zentraler Eisenbahnknotenpunkt.", "Hat eine berühmte Universität."], hu: ["Központi vasúti csomópont.", "Híres egyeteme van."], ro: ["Nod feroviar central.", "Are o universitate celebră."], en: ["Central railway hub.", "Has a famous university."] }
  },
  {
    id: "NL-ZE", type: "region", parent: "NL", coords: [3.86, 51.48],
    name: { de: "Zeeland", hu: "Zeeland", ro: "Zeelanda", en: "Zeeland" },
    image: "/geo-images/netherlands/zeeland.webp",
    description: { de: "Besteht hauptsächlich aus Inseln und Halbinseln.", hu: "Főként szigetekből és félszigetekből áll.", ro: "Este formată în principal din insule și peninsule.", en: "Consists mainly of islands and peninsulas." },
    facts: { de: ["Heimat der Deltawerke.", "Beliebt bei Strandurlaubern."], hu: ["A Delta-művek otthona.", "Népszerű a tengerparti nyaralók körében."], ro: ["Casa lucrărilor Delta.", "Populară printre turiștii de la plajă."], en: ["Home of the Delta Works.", "Popular with beachgoers."] }
  },
  {
    id: "NL-ZH", type: "region", parent: "NL", coords: [4.49, 51.98],
    name: { de: "Südholland", hu: "Dél-Holland", ro: "Olanda de Sud", en: "South Holland" },
    image: "/geo-images/netherlands/south-holland.webp",
    description: { de: "Die bevölkerungsreichste Provinz.", hu: "A legnépesebb tartomány.", ro: "Cea mai populată provincie.", en: "The most populous province." },
    facts: { de: ["Rotterdam hat den größten Hafen.", "Den Haag ist der Regierungssitz."], hu: ["Rotterdam rendelkezik a legnagyobb kikötővel.", "Hága a kormány székhelye."], ro: ["Rotterdam are cel mai mare port.", "Haga este sediul guvernului."], en: ["Rotterdam has the largest port.", "The Hague is the seat of government."] }
  }
];

export const netherlandsCities: POI[] = [
  {
    id: "NL-CT-AMS", type: "city", parent: "NL-NH", coords: [4.90, 52.37],
    name: { de: "Amsterdam", hu: "Amszterdam", ro: "Amsterdam", en: "Amsterdam" },
    image: "/geo-images/netherlands/amsterdam.webp",
    description: { de: "Die Hauptstadt und größte Stadt der Niederlande.", hu: "Hollandia fővárosa és legnagyobb városa.", ro: "Capitala și cel mai mare oraș din Țările de Jos.", en: "The capital and largest city of the Netherlands." },
    facts: { de: ["Bekannt für ihre Grachten.", "Zahlreiche Museen."], hu: ["Csatornáiról ismert.", "Számos múzeum található itt."], ro: ["Cunoscută pentru canalele sale.", "Numeroase muzee."], en: ["Known for its canals.", "Numerous museums."] }
  },
  {
    id: "NL-CT-ROT", type: "city", parent: "NL-ZH", coords: [4.48, 51.92],
    name: { de: "Rotterdam", hu: "Rotterdam", ro: "Rotterdam", en: "Rotterdam" },
    image: "/geo-images/netherlands/rotterdam.webp",
    description: { de: "Eine bedeutende Hafenstadt.", hu: "Jelentős kikötőváros.", ro: "Un oraș portuar important.", en: "A major port city." },
    facts: { de: ["Größter Hafen Europas.", "Moderne Architektur."], hu: ["Európa legnagyobb kikötője.", "Modern építészet."], ro: ["Cel mai mare port din Europa.", "Arhitectură modernă."], en: ["Largest port in Europe.", "Modern architecture."] }
  },
  {
    id: "NL-CT-HAA", type: "city", parent: "NL-ZH", coords: [4.30, 52.07],
    name: { de: "Den Haag", hu: "Hága", ro: "Haga", en: "The Hague" },
    image: "/geo-images/netherlands/the-hague.webp",
    description: { de: "Der Sitz der niederländischen Regierung und des Parlaments.", hu: "A holland kormány és a parlament székhelye.", ro: "Sediul guvernului și parlamentului olandez.", en: "The seat of the Dutch government and parliament." },
    facts: { de: ["Heimat des Internationalen Gerichtshofs.", "Liegt an der Nordsee."], hu: ["A Nemzetközi Bíróság otthona.", "Az Északi-tenger partján fekszik."], ro: ["Sediul Curții Internaționale de Justiție.", "Situată pe Marea Nordului."], en: ["Home to the International Court of Justice.", "Located on the North Sea."] }
  },
  {
    id: "NL-CT-UTR", type: "city", parent: "NL-UT", coords: [5.12, 52.09],
    name: { de: "Utrecht", hu: "Utrecht", ro: "Utrecht", en: "Utrecht" },
    image: "/geo-images/netherlands/utrecht.webp",
    description: { de: "Eine lebendige Universitätsstadt mit einem historischen Zentrum.", hu: "Élénk egyetemi város történelmi központtal.", ro: "Un oraș universitar vibrant cu un centru istoric.", en: "A vibrant university city with a historic center." },
    facts: { de: ["Der Domturm ist das Wahrzeichen.", "Viele Grachten."], hu: ["A Domtorony a jelképe.", "Sok csatornája van."], ro: ["Turnul Dom este simbolul.", "Multe canale."], en: ["The Dom Tower is the landmark.", "Many canals."] }
  },
  {
    id: "NL-CT-EIN", type: "city", parent: "NL-NB", coords: [5.48, 51.44],
    name: { de: "Eindhoven", hu: "Eindhoven", ro: "Eindhoven", en: "Eindhoven" },
    image: "/geo-images/netherlands/eindhoven.webp",
    description: { de: "Eine moderne Stadt, bekannt für Technologie und Design.", hu: "Modern város, amely a technológiáról és a dizájnról ismert.", ro: "Un oraș modern, cunoscut pentru tehnologie și design.", en: "A modern city known for technology and design." },
    facts: { de: ["Geburtsort von Philips.", "Dutch Design Week."], hu: ["A Philips szülőhelye.", "Holland Design Hét."], ro: ["Locul de naștere al lui Philips.", "Dutch Design Week."], en: ["Birthplace of Philips.", "Dutch Design Week."] }
  },
  {
    id: "NL-CT-GRO", type: "city", parent: "NL-GR", coords: [6.57, 53.22],
    name: { de: "Groningen", hu: "Groningen", ro: "Groningen", en: "Groningen" },
    image: "/geo-images/netherlands/groningen.webp",
    description: { de: "Die größte Stadt im Norden der Niederlande.", hu: "Hollandia északi részének legnagyobb városa.", ro: "Cel mai mare oraș din nordul Olandei.", en: "The largest city in the north of the Netherlands." },
    facts: { de: ["Junge Bevölkerung.", "Martiniturm."], hu: ["Fiatal népesség.", "Martini-torony."], ro: ["Populație tânără.", "Turnul Martini."], en: ["Young population.", "Martini Tower."] }
  },
  {
    id: "NL-CT-TIL", type: "city", parent: "NL-NB", coords: [5.08, 51.56],
    name: { de: "Tilburg", hu: "Tilburg", ro: "Tilburg", en: "Tilburg" },
    image: "/geo-images/netherlands/tilburg.webp",
    description: { de: "Eine Stadt mit einer reichen Textilgeschichte.", hu: "Gazdag textilipari múlttal rendelkező város.", ro: "Un oraș cu o bogată istorie textilă.", en: "A city with a rich textile history." },
    facts: { de: ["Große Kirmes.", "Textilmuseum."], hu: ["Nagy vidámpark.", "Textilmúzeum."], ro: ["Mare bâlci.", "Muzeul Textilelor."], en: ["Large funfair.", "Textile museum."] }
  },
  {
    id: "NL-CT-NIJ", type: "city", parent: "NL-GE", coords: [5.86, 51.84],
    name: { de: "Nijmegen", hu: "Nijmegen", ro: "Nijmegen", en: "Nijmegen" },
    image: "/geo-images/netherlands/nijmegen.webp",
    description: { de: "Die älteste Stadt der Niederlande.", hu: "Hollandia legöregebb városa.", ro: "Cel mai vechi oraș din Țările de Jos.", en: "The oldest city in the Netherlands." },
    facts: { de: ["Römische Wurzeln.", "Vier-Tage-Marsch."], hu: ["Római gyökerek.", "Négynapos gyaloglat."], ro: ["Rădăcini romane.", "Marșul de patru zile."], en: ["Roman roots.", "Four Days Marches."] }
  },
  {
    id: "NL-CT-HAR", type: "city", parent: "NL-NH", coords: [4.64, 52.38],
    name: { de: "Haarlem", hu: "Haarlem", ro: "Haarlem", en: "Haarlem" },
    image: "/geo-images/netherlands/haarlem.webp",
    description: { de: "Eine malerische Stadt mit viel Geschichte.", hu: "Festői város gazdag történelemmel.", ro: "Un oraș pitoresc cu multă istorie.", en: "A picturesque city with a lot of history." },
    facts: { de: ["Viele Hofjes.", "Grote Kerk."], hu: ["Sok Hofje (belső udvar).", "Grote Kerk (Nagy templom)."], ro: ["Multe hofjes.", "Grote Kerk."], en: ["Many hofjes.", "Grote Kerk."] }
  },
  {
    id: "NL-CT-LEI", type: "city", parent: "NL-ZH", coords: [4.49, 52.16],
    name: { de: "Leiden", hu: "Leiden", ro: "Leiden", en: "Leiden" },
    image: "/geo-images/netherlands/leiden.webp",
    description: { de: "Bekannt für die älteste Universität der Niederlande.", hu: "Hollandia legrégebbi egyeteméről ismert.", ro: "Cunoscută pentru cea mai veche universitate din Olanda.", en: "Known for the oldest university in the Netherlands." },
    facts: { de: ["Geburtsort von Rembrandt.", "Botanischer Garten."], hu: ["Rembrandt szülőhelye.", "Botanikus kert."], ro: ["Locul de naștere al lui Rembrandt.", "Grădina Botanică."], en: ["Birthplace of Rembrandt.", "Botanical garden."] }
  },
  {
    id: "NL-CT-DEL", type: "city", parent: "NL-ZH", coords: [4.36, 52.01],
    name: { de: "Delft", hu: "Delft", ro: "Delft", en: "Delft" },
    image: "/geo-images/netherlands/delft.webp",
    description: { de: "Berühmt für ihr blaues Porzellan.", hu: "Kék porcelánjáról híres.", ro: "Faimoasă pentru porțelanul său albastru.", en: "Famous for its blue porcelain." },
    facts: { de: ["Delfts Blauw.", "Johannes Vermeer."], hu: ["Delfti kék.", "Johannes Vermeer."], ro: ["Albastru de Delft.", "Johannes Vermeer."], en: ["Delft Blue.", "Johannes Vermeer."] }
  },
  {
    id: "NL-CT-MAA", type: "city", parent: "NL-LI", coords: [5.69, 50.85],
    name: { de: "Maastricht", hu: "Maastricht", ro: "Maastricht", en: "Maastricht" },
    image: "/geo-images/netherlands/maastricht.webp",
    description: { de: "Eine der ältesten Städte, bekannt für den Vertrag von Maastricht.", hu: "Az egyik legrégebbi város, a maastrichti szerződésről ismert.", ro: "Unul dintre cele mai vechi orașe, cunoscut pentru Tratatul de la Maastricht.", en: "One of the oldest cities, known for the Maastricht Treaty." },
    facts: { de: ["Vrijthof.", "Liegt an der Maas."], hu: ["Vrijthof tér.", "A Maas folyó partján fekszik."], ro: ["Piața Vrijthof.", "Situată pe râul Maas."], en: ["Vrijthof square.", "Located on the Meuse river."] }
  },
  {
    id: "NL-LM-AFH", type: "landmark", parent: "NL-NH", coords: [4.88, 52.37],
    name: { de: "Anne Frank Haus", hu: "Anne Frank Ház", ro: "Casa Anne Frank", en: "Anne Frank House" },
    image: "/geo-images/netherlands/anne-frank-house.webp",
    description: { de: "Das Versteck von Anne Frank während des Zweiten Weltkriegs.", hu: "Anne Frank búvóhelye a második világháború alatt.", ro: "Ascunzătoarea Annei Frank în timpul celui de-al Doilea Război Mondial.", en: "The hiding place of Anne Frank during World War II." },
    facts: { de: ["Ein Museum.", "Zieht Millionen Besucher an."], hu: ["Múzeum.", "Látogatók millióit vonzza."], ro: ["Un muzeu.", "Atrage milioane de vizitatori."], en: ["A museum.", "Attracts millions of visitors."] }
  },
  {
    id: "NL-LM-RJM", type: "landmark", parent: "NL-NH", coords: [4.88, 52.36],
    name: { de: "Rijksmuseum", hu: "Rijksmuseum", ro: "Rijksmuseum", en: "Rijksmuseum" },
    image: "/geo-images/netherlands/rijksmuseum.webp",
    description: { de: "Das niederländische Nationalmuseum.", hu: "A holland nemzeti múzeum.", ro: "Muzeul Național Olandez.", en: "The Dutch national museum." },
    facts: { de: ["Beherbergt die 'Nachtwache'.", "In Amsterdam."], hu: ["Az 'Éjjeli őrjárat' otthona.", "Amszterdamban található."], ro: ["Găzduiește 'Rondul de noapte'.", "În Amsterdam."], en: ["Houses the 'Night Watch'.", "In Amsterdam."] }
  },
  {
    id: "NL-LM-VGM", type: "landmark", parent: "NL-NH", coords: [4.88, 52.35],
    name: { de: "Van Gogh Museum", hu: "Van Gogh Múzeum", ro: "Muzeul Van Gogh", en: "Van Gogh Museum" },
    image: "/geo-images/netherlands/van-gogh-museum.webp",
    description: { de: "Museum mit der größten Sammlung von Van Goghs Werken.", hu: "Múzeum Van Gogh műveinek legnagyobb gyűjteményével.", ro: "Muzeul cu cea mai mare colecție de lucrări ale lui Van Gogh.", en: "Museum with the largest collection of Van Gogh's works." },
    facts: { de: ["Gegenüber dem Rijksmuseum.", "Sehr beliebt."], hu: ["A Rijksmuseummal szemben.", "Nagyon népszerű."], ro: ["Vizavi de Rijksmuseum.", "Foarte popular."], en: ["Opposite the Rijksmuseum.", "Very popular."] }
  },
  {
    id: "NL-LM-VOL", type: "landmark", parent: "NL-NH", coords: [5.07, 52.49],
    name: { de: "Volendam", hu: "Volendam", ro: "Volendam", en: "Volendam" },
    image: "/geo-images/netherlands/volendam.webp",
    description: { de: "Ein traditionelles Fischerdorf.", hu: "Hagyományos halászfalu.", ro: "Un sat tradițional de pescari.", en: "A traditional fishing village." },
    facts: { de: ["Bekannt für traditionelle Kleidung.", "Am Markermeer."], hu: ["Hagyományos ruházatáról ismert.", "A Markermeer partján."], ro: ["Cunoscut pentru hainele tradiționale.", "Pe Markermeer."], en: ["Known for traditional clothing.", "On the Markermeer."] }
  },
  {
    id: "NL-LM-KEU", type: "landmark", parent: "NL-ZH", coords: [4.55, 52.27],
    name: { de: "Keukenhof", hu: "Keukenhof", ro: "Keukenhof", en: "Keukenhof" },
    image: "/geo-images/netherlands/keukenhof.webp",
    description: { de: "Einer der größten Blumengärten der Welt.", hu: "A világ egyik legnagyobb virágoskertje.", ro: "Una dintre cele mai mari grădini de flori din lume.", en: "One of the world's largest flower gardens." },
    facts: { de: ["Nur im Frühling geöffnet.", "Millionen von Tulpen."], hu: ["Csak tavasszal tart nyitva.", "Több millió tulipán."], ro: ["Deschis doar primăvara.", "Milioane de lalele."], en: ["Open only in spring.", "Millions of tulips."] }
  },
  {
    id: "NL-LM-GIE", type: "landmark", parent: "NL-OV", coords: [6.08, 52.73],
    name: { de: "Giethoorn", hu: "Giethoorn", ro: "Giethoorn", en: "Giethoorn" },
    image: "/geo-images/netherlands/giethoorn.webp",
    description: { de: "Bekannt als das Venedig des Nordens.", hu: "Észak Velencéjeként ismert.", ro: "Cunoscută ca Veneția Nordului.", en: "Known as the Venice of the North." },
    facts: { de: ["Keine Autos, nur Boote.", "Viele Kanäle."], hu: ["Nincsenek autók, csak csónakok.", "Sok csatorna."], ro: ["Fără mașini, doar bărci.", "Multe canale."], en: ["No cars, only boats.", "Many canals."] }
  },
  {
    id: "NL-LM-KIN", type: "landmark", parent: "NL-ZH", coords: [4.63, 51.88],
    name: { de: "Kinderdijk", hu: "Kinderdijk", ro: "Kinderdijk", en: "Kinderdijk" },
    image: "/geo-images/netherlands/kinderdijk.webp",
    description: { de: "Bekannt für seine Windmühlen.", hu: "Szélmalmairól ismert.", ro: "Cunoscută pentru morile sale de vânt.", en: "Known for its windmills." },
    facts: { de: ["UNESCO-Weltkulturerbe.", "19 Windmühlen."], hu: ["UNESCO Világörökség része.", "19 szélmalom."], ro: ["Patrimoniul mondial UNESCO.", "19 mori de vânt."], en: ["UNESCO World Heritage site.", "19 windmills."] }
  },
  {
    id: "NL-LM-TEX", type: "landmark", parent: "NL-NH", coords: [4.80, 53.05],
    name: { de: "Texel", hu: "Texel", ro: "Texel", en: "Texel" },
    image: "/geo-images/netherlands/texel.webp",
    description: { de: "Die größte der Westfriesischen Inseln.", hu: "A legnagyobb a Nyugati-Fríz-szigetek közül.", ro: "Cea mai mare dintre Insulele Frisice de Vest.", en: "The largest of the West Frisian Islands." },
    facts: { de: ["Viele Schafe.", "Nationalpark Duinen van Texel."], hu: ["Sok juh.", "Duinen van Texel Nemzeti Park."], ro: ["Multe oi.", "Parcul Național Duinen van Texel."], en: ["Many sheep.", "Duinen van Texel National Park."] }
  },
  {
    id: "NL-LM-HOG", type: "landmark", parent: "NL-GE", coords: [5.82, 52.10],
    name: { de: "Hoge Veluwe", hu: "Hoge Veluwe", ro: "Hoge Veluwe", en: "Hoge Veluwe" },
    image: "/geo-images/netherlands/hoge-veluwe.webp",
    description: { de: "Ein großer Nationalpark.", hu: "Egy nagy nemzeti park.", ro: "Un mare parc național.", en: "A large national park." },
    facts: { de: ["Beinhaltet das Kröller-Müller Museum.", "Viele Hirsche und Wildschweine."], hu: ["Itt található a Kröller-Müller Múzeum.", "Sok szarvas és vaddisznó."], ro: ["Include Muzeul Kröller-Müller.", "Multe cerbi și mistreți."], en: ["Includes the Kröller-Müller Museum.", "Many deer and wild boar."] }
  },
  {
    id: "NL-LM-ZAA", type: "landmark", parent: "NL-NH", coords: [4.82, 52.47],
    name: { de: "Zaanse Schans", hu: "Zaanse Schans", ro: "Zaanse Schans", en: "Zaanse Schans" },
    image: "/geo-images/netherlands/zaanse-schans.webp",
    description: { de: "Ein Freilichtmuseum mit Windmühlen.", hu: "Szabadtéri múzeum szélmalmokkal.", ro: "Un muzeu în aer liber cu mori de vânt.", en: "An open-air museum with windmills." },
    facts: { de: ["Historische Holzhäuser.", "Käseherstellung."], hu: ["Történelmi faházak.", "Sajtkészítés."], ro: ["Case istorice din lemn.", "Fabricarea brânzei."], en: ["Historic wooden houses.", "Cheese making."] }
  },
  {
    id: "NL-LM-ERA", type: "landmark", parent: "NL-ZH", coords: [4.49, 51.90],
    name: { de: "Erasmusbrücke", hu: "Erasmus híd", ro: "Podul Erasmus", en: "Erasmus Bridge" },
    image: "/geo-images/netherlands/erasmus-bridge.webp",
    description: { de: "Eine markante Schrägseilbrücke in Rotterdam.", hu: "Feltűnő ferdekábeles híd Rotterdamban.", ro: "Un pod hobanat proeminent în Rotterdam.", en: "A prominent cable-stayed bridge in Rotterdam." },
    facts: { de: ["Auch 'Der Schwan' genannt.", "Über die Neue Maas."], hu: ["'A Hattyú' néven is ismert.", "Az Új-Maas folyó felett."], ro: ["Cunoscut și ca 'Lebăda'.", "Peste Noua Maas."], en: ["Also known as 'The Swan'.", "Over the New Meuse."] }
  },
  {
    id: "NL-LM-MAD", type: "landmark", parent: "NL-ZH", coords: [4.29, 52.09],
    name: { de: "Madurodam", hu: "Madurodam", ro: "Madurodam", en: "Madurodam" },
    image: "/geo-images/netherlands/madurodam.webp",
    description: { de: "Ein Miniaturpark in Den Haag.", hu: "Miniatűr park Hágában.", ro: "Un parc în miniatură în Haga.", en: "A miniature park in The Hague." },
    facts: { de: ["Zeigt niederländische Sehenswürdigkeiten im Maßstab 1:25.", "Interaktive Ausstellungen."], hu: ["Holland látványosságokat mutat be 1:25 méretarányban.", "Interaktív kiállítások."], ro: ["Prezintă repere olandeze la scara 1:25.", "Expoziții interactive."], en: ["Shows Dutch landmarks on a 1:25 scale.", "Interactive exhibits."] }
  },
  {
    id: "NL-LM-EFT", type: "landmark", parent: "NL-NB", coords: [5.05, 51.65],
    name: { de: "Efteling", hu: "Efteling", ro: "Efteling", en: "Efteling" },
    image: "/geo-images/netherlands/efteling.webp",
    description: { de: "Ein märchenhafter Vergnügungspark.", hu: "Mesebeli vidámpark.", ro: "Un parc de distracții de basm.", en: "A fairytale amusement park." },
    facts: { de: ["Einer der ältesten Parks der Welt.", "Märchenwald."], hu: ["A világ egyik legrégebbi parkja.", "Meseerdő."], ro: ["Unul dintre cele mai vechi parcuri din lume.", "Pădurea basmelor."], en: ["One of the oldest parks in the world.", "Fairytale forest."] }
  },
  {
    id: "NL-LM-ZUI", type: "landmark", parent: "NL", coords: [5.40, 52.60],
    name: { de: "Zuiderzee", hu: "Zuiderzee", ro: "Zuiderzee", en: "Zuiderzee" },
    image: "/geo-images/netherlands/zuiderzee.webp",
    description: { de: "Eine ehemalige Bucht der Nordsee.", hu: "Az Északi-tenger egykori öble.", ro: "Un fost golf al Mării Nordului.", en: "A former bay of the North Sea." },
    facts: { de: ["Durch den Abschlussdeich geschlossen.", "Heute IJsselmeer."], hu: ["A Zárógát (Afsluitdijk) választja el.", "Ma IJsselmeer."], ro: ["Închis de Afsluitdijk.", "Astăzi IJsselmeer."], en: ["Closed off by the Afsluitdijk.", "Today IJsselmeer."] }
  },
  {
    id: "NL-LM-IJS", type: "landmark", parent: "NL", coords: [5.40, 52.70],
    name: { de: "IJsselmeer", hu: "IJsselmeer", ro: "IJsselmeer", en: "IJsselmeer" },
    image: "/geo-images/netherlands/ijsselmeer.webp",
    description: { de: "Ein großer See, der aus der Zuiderzee entstand.", hu: "Nagy tó, amely a Zuiderzeeből jött létre.", ro: "Un lac mare creat din Zuiderzee.", en: "A large lake created from the Zuiderzee." },
    facts: { de: ["Größter See der Niederlande.", "Süßwasser."], hu: ["Hollandia legnagyobb tava.", "Édesvíz."], ro: ["Cel mai mare lac din Olanda.", "Apă dulce."], en: ["Largest lake in the Netherlands.", "Freshwater."] }
  }
];

export const netherlandsAllPoi: POI[] = [
  netherlandsCountry,
  ...netherlandsRegions,
  ...netherlandsCities
];