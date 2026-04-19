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
  },
  {
    id: "nl-gouda", type: "city", parent: "NL-ZH", coords: [4.7085, 52.0115],
    name: { de: "Gouda", hu: "Gouda", ro: "Gouda", en: "Gouda" },
    image: "/geo-images/netherlands/gouda.webp",
    description: {
      de: "Gouda ist eine historische Stadt in der Provinz Südholland, weltberühmt für den gleichnamigen Käse. Die Stadt hat eine reiche Geschichte, die bis ins Mittelalter zurückreicht, und ist bekannt für ihre prächtigen Gebäude und Kanäle. Jedes Jahr im Sommer findet ein traditioneller Käsemarkt statt.",
      hu: "Gouda történelmi város Dél-Holland tartományban, amely világhírű az azonos nevű sajtról. A város gazdag történelemmel rendelkezik, amely a középkorig nyúlik vissza, és gyönyörű épületeiről, valamint csatornáiról ismert. Minden nyáron hagyományos sajtpiacot tartanak itt.",
      ro: "Gouda este un oraș istoric din provincia Olanda de Sud, renumit în întreaga lume pentru brânza cu același nume. Orașul are o istorie bogată care datează din Evul Mediu și este cunoscut pentru clădirile și canalele sale magnifice. În fiecare vară are loc o piață tradițională de brânzeturi.",
      en: "Gouda is a historic city in the province of South Holland, world-famous for its namesake cheese. The city has a rich history dating back to the Middle Ages and is known for its magnificent buildings and canals. A traditional cheese market is held every summer."
    },
    facts: {
      de: ["Bekannt für Goudakäse und den historischen Käsemarkt.", "Heimat der Sirupwaffeln (Stroopwafels).", "Die Sint-Janskerk hat beeindruckende Glasmalereien.", "Das gotische Rathaus stammt aus dem 15. Jahrhundert.", "Goudaer Kerzen sind traditionell und bekannt.", "Besitzt malerische historische Kanäle."],
      hu: ["A gouda sajtról és a történelmi sajtpiacról ismert.", "A szirupos gofri (Stroopwafel) hazája.", "A Sint-Janskerk lenyűgöző ólomüveg ablakokkal rendelkezik.", "Gótikus városházája a 15. századból származik.", "A goudai gyertyák hagyományosak és híresek.", "Festői történelmi csatornákkal büszkélkedhet."],
      ro: ["Cunoscut pentru brânza Gouda și piața istorică de brânzeturi.", "Locul de naștere al vafelor cu sirop (Stroopwafels).", "Sint-Janskerk are vitralii impresionante.", "Primăria gotică datează din secolul al XV-lea.", "Lumânările Gouda sunt tradiționale și cunoscute.", "Se mândrește cu canale istorice pitorești."],
      en: ["Known for Gouda cheese and the historic cheese market.", "Home of the syrup waffles (Stroopwafels).", "The Sint-Janskerk has impressive stained glass windows.", "Its Gothic town hall dates from the 15th century.", "Gouda candles are traditional and well-known.", "Boasts picturesque historic canals."]
    }
  },
  {
    id: "nl-delft-full", type: "city", parent: "NL-ZH", coords: [4.3571, 52.0116],
    name: { de: "Delft", hu: "Delft", ro: "Delft", en: "Delft" },
    image: "/geo-images/netherlands/delft.webp",
    description: {
      de: "Delft ist eine malerische Stadt, weltbekannt für ihr blau-weißes Porzellan, das 'Delfter Blau'. Sie bietet eine gut erhaltene historische Altstadt mit wunderschönen Grachten und traditioneller Architektur. Delft ist eng mit dem niederländischen Königshaus und dem berühmten Maler Johannes Vermeer verbunden.",
      hu: "Delft festői város, amely világszerte ismert kék-fehér porcelánjáról, a 'Delfti kékről'. Jól megőrzött történelmi óvárosával, gyönyörű csatornáiról és hagyományos építészetével büszkélkedhet. Delft szorosan kötődik a holland királyi családhoz és a híres festőhöz, Johannes Vermeerhez.",
      ro: "Delft este un oraș pitoresc, renumit în întreaga lume pentru porțelanul său albastru și alb, 'Albastru de Delft'. Oferă un oraș vechi istoric bine conservat, cu canale frumoase și arhitectură tradițională. Delft este strâns legat de familia regală olandeză și de faimosul pictor Johannes Vermeer.",
      en: "Delft is a picturesque city, world-renowned for its blue and white porcelain, 'Delft Blue'. It offers a well-preserved historic old town with beautiful canals and traditional architecture. Delft is closely associated with the Dutch royal family and the famous painter Johannes Vermeer."
    },
    facts: {
      de: ["Heimat des berühmten Delfter Blau Porzellans.", "Geburts- und Wohnort von Johannes Vermeer.", "Die Neue Kirche ist die Grabstätte der königlichen Familie.", "Sitz der Technischen Universität Delft.", "Verfügt über ein charmantes Grachtensystem.", "Wilhelm von Oranien wurde hier ermordet."],
      hu: ["A híres delfti kék porcelán hazája.", "Johannes Vermeer szülő- és lakóhelye.", "Az Új Templom a királyi család temetkezési helye.", "A Delfti Műszaki Egyetem székhelye.", "Bájos csatornarendszerrel rendelkezik.", "Orániai Vilmost itt gyilkolták meg."],
      ro: ["Locul de naștere al celebrului porțelan Albastru de Delft.", "Locul de naștere și reședința lui Johannes Vermeer.", "Biserica Nouă este locul de înmormântare al familiei regale.", "Sediul Universității de Tehnologie din Delft.", "Are un sistem fermecător de canale.", "Wilhelm de Orania a fost asasinat aici."],
      en: ["Home to the famous Delft Blue porcelain.", "Birthplace and residence of Johannes Vermeer.", "The New Church is the burial place of the royal family.", "Seat of the Delft University of Technology.", "Features a charming canal system.", "William of Orange was assassinated here."]
    }
  },
  {
    id: "nl-enschede", type: "city", parent: "NL-OV", coords: [6.8937, 52.2215],
    name: { de: "Enschede", hu: "Enschede", ro: "Enschede", en: "Enschede" },
    image: "/geo-images/netherlands/enschede.webp",
    description: {
      de: "Enschede ist die größte Stadt in der Provinz Overijssel und liegt nahe der deutschen Grenze. Sie wuchs während der industriellen Revolution als Zentrum der Textilindustrie rasant heran. Heute ist Enschede eine lebendige Universitätsstadt mit einem modernen Stadtzentrum.",
      hu: "Enschede Overijssel tartomány legnagyobb városa, a német határ közelében. Az ipari forradalom idején a textilipar központjaként gyorsan növekedett. Ma Enschede nyüzsgő egyetemváros modern városközponttal.",
      ro: "Enschede este cel mai mare oraș din provincia Overijssel și este situat aproape de granița cu Germania. A crescut rapid în timpul Revoluției Industriale ca centru al industriei textile. Astăzi, Enschede este un oraș universitar vibrant cu un centru modern.",
      en: "Enschede is the largest city in the province of Overijssel and is located near the German border. It grew rapidly during the Industrial Revolution as a center of the textile industry. Today, Enschede is a vibrant university city with a modern city center."
    },
    facts: {
      de: ["Ehemaliges Zentrum der niederländischen Textilindustrie.", "Heimat der renommierten Universität Twente.", "Der Oude Markt ist das lebendige Zentrum der Stadt.", "Bekannt für das Rijksmuseum Twenthe.", "Im Jahr 2000 durch eine Feuerwerkskatastrophe teilweise zerstört.", "Grenzt direkt an das deutsche Bundesland Nordrhein-Westfalen."],
      hu: ["A holland textilipar egykori központja.", "A neves Twente-i Egyetem otthona.", "Az Oude Markt a város nyüzsgő központja.", "A Rijksmuseum Twenthe-ről ismert.", "2000-ben részben elpusztult egy tűzijáték-katasztrófa miatt.", "Közvetlenül határos a német Észak-Rajna-Vesztfália tartománnyal."],
      ro: ["Fostul centru al industriei textile olandeze.", "Sediul renumitei Universități din Twente.", "Oude Markt este centrul vibrant al orașului.", "Cunoscut pentru Rijksmuseum Twenthe.", "Parțial distrus de un dezastru al artificiilor în anul 2000.", "Se învecinează direct cu statul german Renania de Nord-Westfalia."],
      en: ["Former center of the Dutch textile industry.", "Home to the renowned University of Twente.", "The Oude Markt is the vibrant center of the city.", "Known for the Rijksmuseum Twenthe.", "Partially destroyed by a fireworks disaster in 2000.", "Borders directly on the German state of North Rhine-Westphalia."]
    }
  },
  {
    id: "nl-arnhem", type: "city", parent: "NL-GE", coords: [5.8987, 51.9851],
    name: { de: "Arnheim", hu: "Arnhem", ro: "Arnhem", en: "Arnhem" },
    image: "/geo-images/netherlands/arnhem.webp",
    description: {
      de: "Arnheim ist die Hauptstadt der Provinz Gelderland und eine wichtige historische Stadt am Rhein. Bekannt wurde sie vor allem durch die Schlacht um Arnheim im Zweiten Weltkrieg. Heute bietet Arnheim großartige Museen, ausgedehnte Parks und ist ein beliebtes Ziel für Natur- und Geschichtsliebhaber.",
      hu: "Arnhem Gelderland tartomány fővárosa és fontos történelmi város a Rajna mentén. Különösen a második világháborús arnhemi csata révén vált ismertté. Ma Arnhem nagyszerű múzeumokat, kiterjedt parkokat kínál, és népszerű célpont a természet és a történelem szerelmesei számára.",
      ro: "Arnhem este capitala provinciei Gelderland și un oraș istoric important pe Rin. A devenit cunoscut în special pentru Bătălia de la Arnhem din timpul celui de-al Doilea Război Mondial. Astăzi, Arnhem oferă muzee grozave, parcuri întinse și este o destinație populară pentru iubitorii de natură și istorie.",
      en: "Arnhem is the capital of the province of Gelderland and an important historic city on the Rhine. It became known primarily for the Battle of Arnhem during World War II. Today, Arnhem offers great museums, extensive parks and is a popular destination for nature and history lovers."
    },
    facts: {
      de: ["Schauplatz der berühmten Schlacht um Arnheim (1944).", "Das Niederländische Freilichtmuseum (Openluchtmuseum) ist hier.", "Heimat des bekannten Burgers' Zoo.", "Grenzt an den Nationalpark Hoge Veluwe.", "Hat eine große Mode- und Designszene.", "Die John-Frost-Brücke ist ein wichtiges Denkmal."],
      hu: ["A híres arnhemi csata (1944) helyszíne.", "Itt található a Holland Szabadtéri Múzeum (Openluchtmuseum).", "A híres Burgers' Zoo otthona.", "A Hoge Veluwe Nemzeti Parkkal határos.", "Jelentős divat- és dizájnközpont.", "A John Frost híd fontos emlékmű."],
      ro: ["Locația celebrei Bătălii de la Arnhem (1944).", "Muzeul Olandez în Aer Liber (Openluchtmuseum) este aici.", "Acasă la faimoasa Grădină Zoologică Burgers'.", "Se învecinează cu Parcul Național Hoge Veluwe.", "Are o scenă mare de modă și design.", "Podul John Frost este un monument important."],
      en: ["Site of the famous Battle of Arnhem (1944).", "The Netherlands Open Air Museum (Openluchtmuseum) is here.", "Home to the famous Burgers' Zoo.", "Borders the Hoge Veluwe National Park.", "Has a large fashion and design scene.", "The John Frost Bridge is an important monument."]
    }
  },
  {
    id: "nl-zwolle", type: "city", parent: "NL-OV", coords: [6.0830, 52.5168],
    name: { de: "Zwolle", hu: "Zwolle", ro: "Zwolle", en: "Zwolle" },
    image: "/geo-images/netherlands/zwolle.webp",
    description: {
      de: "Zwolle ist die Hauptstadt der Provinz Overijssel und war einst eine mächtige Hansestadt. Die gut erhaltene Altstadt wird von sternförmigen Kanälen umgeben. Zwolle vereint historische Architektur mit moderner Lebensart und beherbergt das beeindruckende Museum de Fundatie.",
      hu: "Zwolle Overijssel tartomány fővárosa, amely egykor hatalmas Hanza-város volt. A jól megőrzött óvárost csillag alakú csatornák veszik körül. Zwolle ötvözi a történelmi építészetet a modern életmóddal, és itt található a lenyűgöző Museum de Fundatie.",
      ro: "Zwolle este capitala provinciei Overijssel și a fost odată un puternic oraș hanseatic. Orașul vechi bine conservat este înconjurat de canale în formă de stea. Zwolle combină arhitectura istorică cu un stil de viață modern și găzduiește impresionantul Museum de Fundatie.",
      en: "Zwolle is the capital of the province of Overijssel and was once a powerful Hanseatic city. The well-preserved old town is surrounded by star-shaped canals. Zwolle combines historic architecture with a modern lifestyle and is home to the impressive Museum de Fundatie."
    },
    facts: {
      de: ["Historische Hansestadt mit reicher Geschichte.", "Das Stadttor 'Sassenpoort' ist ein Wahrzeichen.", "Bekannt für das sternförmige Kanalsystem.", "Das Museum de Fundatie zeigt bildende Kunst.", "Die gotische Grote Kerk stammt aus dem 15. Jahrhundert.", "Waanders In de Broeren ist eine Buchhandlung in einer alten Kirche."],
      hu: ["Történelmi Hanza-város gazdag történelemmel.", "A 'Sassenpoort' városkapu az egyik fő látványosság.", "A csillag alakú csatornarendszerről ismert.", "A Museum de Fundatie képzőművészeti alkotásokat mutat be.", "A gótikus Grote Kerk a 15. századból származik.", "A Waanders In de Broeren egy régi templomban működő könyvesbolt."],
      ro: ["Oraș istoric hanseatic cu o istorie bogată.", "Poarta orașului 'Sassenpoort' este un reper.", "Cunoscut pentru sistemul său de canale în formă de stea.", "Museum de Fundatie expune arte plastice.", "Biserica gotică Grote Kerk datează din secolul al XV-lea.", "Waanders In de Broeren este o librărie într-o veche biserică."],
      en: ["Historic Hanseatic city with a rich history.", "The 'Sassenpoort' city gate is a landmark.", "Known for its star-shaped canal system.", "The Museum de Fundatie displays fine arts.", "The Gothic Grote Kerk dates from the 15th century.", "Waanders In de Broeren is a bookstore in an old church."]
    }
  },
  {
    id: "nl-breda", type: "city", parent: "NL-NB", coords: [4.7683, 51.5719],
    name: { de: "Breda", hu: "Breda", ro: "Breda", en: "Breda" },
    image: "/geo-images/netherlands/breda.webp",
    description: {
      de: "Breda ist eine charmante historische Stadt in Nordbrabant mit starken Verbindungen zum niederländischen Königshaus von Oranien-Nassau. Die Stadt ist bekannt für ihren schönen Grote Markt, das imposante Schloss Breda und eine entspannte, gastfreundliche Atmosphäre. Breda bietet eine reiche Mischung aus Geschichte und modernem Stadtleben.",
      hu: "Breda bájos történelmi város Észak-Brabantban, amely szoros szálakkal kötődik a holland Orániai-Nassau-házhoz. A város ismert a gyönyörű Grote Markt-ról, az impozáns bredai kastélyról és a nyugodt, vendégszerető légkörről. Breda a történelem és a modern városi élet gazdag keverékét kínálja.",
      ro: "Breda este un oraș istoric fermecător din Brabantul de Nord, cu legături puternice cu familia regală olandeză de Orania-Nassau. Orașul este cunoscut pentru frumoasa sa piață Grote Markt, impunătorul castel Breda și o atmosferă relaxată și primitoare. Breda oferă un amestec bogat de istorie și viață urbană modernă.",
      en: "Breda is a charming historic city in North Brabant with strong ties to the Dutch royal House of Orange-Nassau. The city is known for its beautiful Grote Markt, the imposing Breda Castle and a relaxed, welcoming atmosphere. Breda offers a rich mix of history and modern city life."
    },
    facts: {
      de: ["Historische Residenzstadt der Familie von Oranien-Nassau.", "Die Onze-Lieve-Vrouwekerk ist ein Meisterwerk der Brabanter Gotik.", "Das Schloss Breda war einst ein königlicher Palast.", "Beliebt für seine burgundische Gastfreundschaft.", "Der Begijnhof ist eine ruhige historische Oase im Zentrum.", "War eine wichtige Festungsstadt."],
      hu: ["Az Orániai-Nassau család történelmi rezidenciavárosa.", "Az Onze-Lieve-Vrouwekerk a brabanti gótika remekműve.", "A bredai kastély egykor királyi palota volt.", "Népszerű a burgundi vendégszeretetéről.", "A Begijnhof egy csendes történelmi oázis a központban.", "Fontos erődváros volt."],
      ro: ["Oraș rezidențial istoric al familiei de Orania-Nassau.", "Onze-Lieve-Vrouwekerk este o capodoperă a goticului brabantin.", "Castelul Breda a fost odată un palat regal.", "Popular pentru ospitalitatea sa burgundă.", "Begijnhof este o oază istorică liniștită în centru.", "A fost un important oraș fortificat."],
      en: ["Historic residential city of the House of Orange-Nassau.", "The Onze-Lieve-Vrouwekerk is a masterpiece of Brabantian Gothic.", "Breda Castle was once a royal palace.", "Popular for its Burgundian hospitality.", "The Begijnhof is a quiet historic oasis in the center.", "Was an important fortified city."]
    }
  },
  {
    id: "nl-s-hertogenbosch", type: "city", parent: "NL-NB", coords: [5.3037, 51.6977],
    name: { de: "'s-Hertogenbosch", hu: "'s-Hertogenbosch", ro: "'s-Hertogenbosch", en: "'s-Hertogenbosch" },
    image: "/geo-images/netherlands/s-hertogenbosch.webp",
    description: {
      de: "'s-Hertogenbosch, auch Den Bosch genannt, ist die Hauptstadt der Provinz Nordbrabant. Die Stadt bewahrt ihr mittelalterliches Flair und ist berühmt für die imposante St.-Johannes-Kathedrale sowie für den Maler Hieronymus Bosch. Den Bosch ist für seine traditionelle Gastfreundschaft und den süßen Snack 'Bossche Bol' bekannt.",
      hu: "'s-Hertogenbosch, vagy más néven Den Bosch Észak-Brabant tartomány fővárosa. A város őrzi középkori hangulatát, és híres az impozáns Szent János-székesegyházról, valamint Hieronymus Bosch festőművészről. Den Bosch ismert hagyományos vendégszeretetéről és a 'Bossche Bol' nevű édes finomságról.",
      ro: "'s-Hertogenbosch, numit și Den Bosch, este capitala provinciei Brabantul de Nord. Orașul își păstrează flerul medieval și este faimos pentru impunătoarea Catedrală Sf. Ioan și pentru pictorul Hieronymus Bosch. Den Bosch este cunoscut pentru ospitalitatea sa tradițională și pentru gustarea dulce 'Bossche Bol'.",
      en: "'s-Hertogenbosch, also known as Den Bosch, is the capital of the province of North Brabant. The city retains its medieval flair and is famous for the imposing St. John's Cathedral and the painter Hieronymus Bosch. Den Bosch is known for its traditional hospitality and the sweet snack 'Bossche Bol'."
    },
    facts: {
      de: ["Die St.-Johannes-Kathedrale (Sint-Jan) ist stark gotisch geprägt.", "Heimatstadt des Malers Hieronymus Bosch.", "Die historische Binnendieze ist ein teilweise unterirdisches Kanalsystem.", "Berühmt für die süße Spezialität 'Bossche Bol'.", "Eine der ältesten Städte der Niederlande.", "Veranstaltet einen der größten Karnevale des Landes."],
      hu: ["A Szent János-székesegyház (Sint-Jan) gótikus remekmű.", "Hieronymus Bosch festőművész szülővárosa.", "A történelmi Binnendieze egy részben földalatti csatornarendszer.", "Híres a 'Bossche Bol' nevű édességről.", "Hollandia egyik legrégebbi városa.", "Az ország egyik legnagyobb karneválját rendezi meg."],
      ro: ["Catedrala Sf. Ioan (Sint-Jan) este puternic influențată de stilul gotic.", "Orașul natal al pictorului Hieronymus Bosch.", "Binnendieze este un sistem de canale parțial subteran istoric.", "Faimos pentru specialitatea dulce 'Bossche Bol'.", "Unul dintre cele mai vechi orașe din Țările de Jos.", "Găzduiește unul dintre cele mai mari carnavaluri din țară."],
      en: ["St. John's Cathedral (Sint-Jan) is strongly influenced by the Gothic style.", "Hometown of the painter Hieronymus Bosch.", "The historic Binnendieze is a partially underground canal system.", "Famous for the sweet specialty 'Bossche Bol'.", "One of the oldest cities in the Netherlands.", "Hosts one of the largest carnivals in the country."]
    }
  },
  {
    id: "nl-maastricht-full", type: "city", parent: "NL-LI", coords: [5.6889, 50.8514],
    name: { de: "Maastricht", hu: "Maastricht", ro: "Maastricht", en: "Maastricht" },
    image: "/geo-images/netherlands/maastricht.webp",
    description: {
      de: "Maastricht liegt im äußersten Süden der Niederlande und gehört zu den ältesten Städten des Landes. Die Stadt hat eine fast südeuropäische Atmosphäre und ist historisch bedeutend durch den Vertrag von Maastricht, der die Europäische Union begründete. Maastricht ist berühmt für seine charmanten Plätze, Höhlen und Basiliken.",
      hu: "Maastricht Hollandia legdélibb részén fekszik, és az ország egyik legrégebbi városa. A város szinte dél-európai hangulatot áraszt, és történelmileg jelentős a maastrichti szerződés révén, amely az Európai Uniót megalapította. Maastricht híres bájos tereiről, barlangjairól és bazilikáiról.",
      ro: "Maastricht este situat în extremitatea sudică a Olandei și este unul dintre cele mai vechi orașe din țară. Orașul are o atmosferă aproape sud-europeană și este semnificativ din punct de vedere istoric datorită Tratatului de la Maastricht, care a fondat Uniunea Europeană. Maastricht este renumit pentru piețele, peșterile și bazilicile sale fermecătoare.",
      en: "Maastricht is located in the far south of the Netherlands and is one of the oldest cities in the country. The city has an almost southern European atmosphere and is historically significant through the Maastricht Treaty, which founded the European Union. Maastricht is famous for its charming squares, caves and basilicas."
    },
    facts: {
      de: ["Gründungsort der Europäischen Union durch den Vertrag von Maastricht (1992).", "Die St.-Servatius-Brücke ist die älteste Brücke der Niederlande.", "Der Vrijthof ist der berühmteste Platz der Stadt.", "Unterirdische Grotten im Sint-Pietersberg.", "Geprägt von einer reichen römischen Geschichte.", "Bekannt für das TEFAF-Kunstfestival."],
      hu: ["Az Európai Unió alapító helyszíne a maastrichti szerződés révén (1992).", "A Szent Szervácius híd Hollandia legrégebbi hídja.", "A Vrijthof a város leghíresebb tere.", "Földalatti barlangok a Sint-Pietersberg-hegyben.", "Gazdag római kori történelemmel büszkélkedhet.", "A TEFAF művészeti fesztiválról ismert."],
      ro: ["Locul de fondare al Uniunii Europene prin Tratatul de la Maastricht (1992).", "Podul Sf. Servatius este cel mai vechi pod din Olanda.", "Vrijthof este cea mai faimoasă piață din oraș.", "Peșteri subterane din Sint-Pietersberg.", "Caracterizat de o bogată istorie romană.", "Cunoscut pentru festivalul de artă TEFAF."],
      en: ["Founding place of the European Union through the Maastricht Treaty (1992).", "St. Servatius Bridge is the oldest bridge in the Netherlands.", "The Vrijthof is the city's most famous square.", "Underground caves in the Sint-Pietersberg.", "Characterized by a rich Roman history.", "Known for the TEFAF art festival."]
    }
  },
  {
    id: "nl-dordrecht", type: "city", parent: "NL-ZH", coords: [4.6683, 51.8133],
    name: { de: "Dordrecht", hu: "Dordrecht", ro: "Dordrecht", en: "Dordrecht" },
    image: "/geo-images/netherlands/dordrecht.webp",
    description: {
      de: "Dordrecht, oft liebevoll 'Dordt' genannt, ist die älteste Stadt in der Provinz Südholland. Die von Flüssen umgebene Inselstadt spielte eine zentrale Rolle im Handel der Niederlande. Die reiche Geschichte spiegelt sich in den vielen mittelalterlichen Gebäuden, Höfen und Innenstadthäfen wider.",
      hu: "Dordrechtet, amelyet gyakran 'Dordt'-nak is becéznek, Dél-Holland tartomány legrégebbi városa. A folyókkal körülvett szigetváros központi szerepet játszott a holland kereskedelemben. Gazdag történelme számos középkori épületben, udvarban és belvárosi kikötőben tükröződik.",
      ro: "Dordrecht, adesea numit cu afecțiune 'Dordt', este cel mai vechi oraș din provincia Olanda de Sud. Orașul-insulă înconjurat de râuri a jucat un rol central în comerțul olandez. Istoria sa bogată se reflectă în numeroasele clădiri medievale, curți și porturi din centrul orașului.",
      en: "Dordrecht, often affectionately called 'Dordt', is the oldest city in the province of South Holland. The island city surrounded by rivers played a central role in Dutch trade. Its rich history is reflected in the many medieval buildings, courtyards, and inner-city harbors."
    },
    facts: {
      de: ["Die älteste Stadt in der früheren Grafschaft Holland (Stadtrechte 1220).", "Eine wasserreiche Inselstadt.", "Das Dordrechts Museum ist für seine niederländische Malerei bekannt.", "Die Erste Freie Staatenversammlung fand 1572 hier statt.", "Die Grote Kerk prägt die Skyline der Stadt.", "Grenzt direkt an den Nationalpark De Biesbosch."],
      hu: ["A korábbi Holland Grófság legrégebbi városa (városjogok: 1220).", "Vizekben gazdag szigetváros.", "A Dordrechts Museum a holland festészetről ismert.", "Itt tartották 1572-ben az első szabad rendi gyűlést.", "A Grote Kerk uralja a város látképét.", "Közvetlenül a De Biesbosch Nemzeti Parkkal határos."],
      ro: ["Cel mai vechi oraș din fostul Comitat Olanda (drepturi de oraș 1220).", "Un oraș-insulă bogat în apă.", "Muzeul Dordrechts este cunoscut pentru pictura sa olandeză.", "Prima Adunare Liberă a Statelor a avut loc aici în 1572.", "Grote Kerk domină orizontul orașului.", "Se învecinează direct cu Parcul Național De Biesbosch."],
      en: ["The oldest city in the former County of Holland (city rights 1220).", "A water-rich island city.", "The Dordrechts Museum is known for its Dutch painting.", "The First Free Assembly of the States took place here in 1572.", "The Grote Kerk dominates the city skyline.", "Borders directly on the De Biesbosch National Park."]
    }
  },
  {
    id: "nl-alkmaar", type: "city", parent: "NL-NH", coords: [4.7483, 52.6324],
    name: { de: "Alkmaar", hu: "Alkmaar", ro: "Alkmaar", en: "Alkmaar" },
    image: "/geo-images/netherlands/alkmaar.webp",
    description: {
      de: "Alkmaar ist eine charmante historische Stadt in Nordholland, weltweit bekannt für ihren traditionellen Käsemarkt, der im Sommer wöchentlich stattfindet. Neben dem Käse bietet die Stadt ein wunderschönes Zentrum mit vielen Grachten, historischen Gebäuden und interessanten Museen wie dem nationalen Biermuseum.",
      hu: "Alkmaar egy bájos történelmi város Észak-Hollandiában, amely világszerte ismert hagyományos sajtpiacáról, amelyet nyáron hetente tartanak. A sajt mellett a város gyönyörű központot kínál számos csatornával, történelmi épülettel és olyan érdekes múzeumokkal, mint a Nemzeti Sörmúzeum.",
      ro: "Alkmaar este un oraș istoric fermecător din Olanda de Nord, renumit în întreaga lume pentru piața sa tradițională de brânzeturi, care are loc săptămânal în timpul verii. Pe lângă brânză, orașul oferă un centru frumos, cu multe canale, clădiri istorice și muzee interesante, cum ar fi Muzeul Național al Berii.",
      en: "Alkmaar is a charming historic city in North Holland, known worldwide for its traditional cheese market, which is held weekly in summer. In addition to cheese, the city offers a beautiful center with many canals, historic buildings and interesting museums such as the National Beer Museum."
    },
    facts: {
      de: ["Weltberühmt für den traditionellen Käsemarkt auf dem Waagplein.", "Erfolgreiche Belagerung von Alkmaar 1573 als Wendepunkt im Achtzigjährigen Krieg.", "Beherbergt das Nationale Biermuseum De Boom.", "Das Käsemuseum befindet sich im historischen Waaghaus.", "Viele erhaltene historische Hofjes (Innenhöfe).", "Ein wichtiges kulturelles Zentrum nördlich von Amsterdam."],
      hu: ["Világhírű a Waagplein téren tartott hagyományos sajtpiacról.", "Alkmaar sikeres 1573-as ostroma fordulópont volt a nyolcvanéves háborúban.", "Itt található a De Boom Nemzeti Sörmúzeum.", "A Sajtmúzeum a történelmi Waag-épületben kapott helyet.", "Számos megőrzött történelmi Hofje (belső udvar).", "Amszterdamtól északra jelentős kulturális központ."],
      ro: ["Renumit în întreaga lume pentru piața tradițională de brânzeturi din Waagplein.", "Asediul de succes din Alkmaar din 1573 ca punct de cotitură în Războiul de Optzeci de Ani.", "Găzduiește Muzeul Național al Berii De Boom.", "Muzeul Brânzei se află în clădirea istorică Waag.", "Multe hofjes (curți) istorice conservate.", "Un important centru cultural la nord de Amsterdam."],
      en: ["World-famous for the traditional cheese market on the Waagplein.", "Successful siege of Alkmaar in 1573 as a turning point in the Eighty Years' War.", "Houses the National Beer Museum De Boom.", "The Cheese Museum is located in the historic Waag building.", "Many preserved historic hofjes (courtyards).", "An important cultural center north of Amsterdam."]
    }
  },
  {
    id: "nl-van-gogh-museum", type: "landmark", parent: "NL-NH", coords: [4.8810, 52.3584],
    name: { de: "Van Gogh Museum", hu: "Van Gogh Múzeum", ro: "Muzeul Van Gogh", en: "Van Gogh Museum" },
    image: "/geo-images/netherlands/van-gogh-museum.webp",
    description: {
      de: "Das Van Gogh Museum in Amsterdam widmet sich dem Leben und Werk des niederländischen Malers Vincent van Gogh. Es beherbergt die weltweit größte Sammlung seiner Gemälde, Zeichnungen und Briefe. Das Museum zieht jährlich Millionen Kunstliebhaber an und zeigt auch Werke von Van Goghs Zeitgenossen.",
      hu: "Az amszterdami Van Gogh Múzeum Vincent van Gogh holland festőművész életének és munkásságának szenteli magát. Itt található a világ legnagyobb gyűjteménye a festményeiből, rajzaiból és leveleiből. A múzeum évente művészetkedvelők millióit vonzza, és Van Gogh kortársainak műveit is bemutatja.",
      ro: "Muzeul Van Gogh din Amsterdam este dedicat vieții și operei pictorului olandez Vincent van Gogh. Găzduiește cea mai mare colecție din lume a picturilor, desenelor și scrisorilor sale. Muzeul atrage anual milioane de iubitori de artă și expune, de asemenea, lucrări ale contemporanilor lui Van Gogh.",
      en: "The Van Gogh Museum in Amsterdam is dedicated to the life and work of the Dutch painter Vincent van Gogh. It houses the world's largest collection of his paintings, drawings, and letters. The museum attracts millions of art lovers annually and also displays works by Van Gogh's contemporaries."
    },
    facts: {
      de: ["Beherbergt die größte Van-Gogh-Sammlung der Welt.", "Enthält Meisterwerke wie 'Die Sonnenblumen' und 'Das Schlafzimmer'.", "Wurde 1973 eröffnet und von Gerrit Rietveld entworfen.", "Zeigt über 200 Gemälde und 500 Zeichnungen.", "Gehört zu den meistbesuchten Museen der Niederlande.", "Liegt am Museumplein in Amsterdam."],
      hu: ["A világ legnagyobb Van Gogh-gyűjteményének ad otthont.", "Olyan remekműveket tartalmaz, mint a 'Napraforgók' és 'A hálószoba'.", "1973-ban nyílt meg, és Gerrit Rietveld tervezte.", "Több mint 200 festményt és 500 rajzot mutat be.", "Hollandia leglátogatottabb múzeumai közé tartozik.", "Az amszterdami Museumplein téren található."],
      ro: ["Găzduiește cea mai mare colecție Van Gogh din lume.", "Conține capodopere precum 'Floarea-soarelui' și 'Dormitorul'.", "Deschis în 1973 și proiectat de Gerrit Rietveld.", "Expune peste 200 de picturi și 500 de desene.", "Unul dintre cele mai vizitate muzee din Olanda.", "Situat pe Museumplein din Amsterdam."],
      en: ["Houses the largest Van Gogh collection in the world.", "Contains masterpieces such as 'Sunflowers' and 'The Bedroom'.", "Opened in 1973 and designed by Gerrit Rietveld.", "Displays over 200 paintings and 500 drawings.", "One of the most visited museums in the Netherlands.", "Located on the Museumplein in Amsterdam."]
    }
  },
  {
    id: "nl-mauritshuis", type: "landmark", parent: "NL-ZH", coords: [4.3145, 52.0803],
    name: { de: "Mauritshuis", hu: "Mauritshuis", ro: "Mauritshuis", en: "Mauritshuis" },
    image: "/geo-images/netherlands/mauritshuis.webp",
    description: {
      de: "Das Mauritshuis in Den Haag ist ein renommiertes Kunstmuseum, das sich auf Meisterwerke des Goldenen Zeitalters der Niederlande spezialisiert hat. Das Museum befindet sich in einem historischen Palast aus dem 17. Jahrhundert und beherbergt weltberühmte Werke wie Vermeers 'Das Mädchen mit dem Perlenohrgehänge'.",
      hu: "A hágai Mauritshuis egy neves művészeti múzeum, amely a holland aranykor remekműveire specializálódott. A múzeum egy történelmi 17. századi palotában kapott helyet, és olyan világhírű műveknek ad otthont, mint Vermeer 'Leány gyöngyfülbevalóval' című festménye.",
      ro: "Mauritshuis din Haga este un renumit muzeu de artă specializat în capodopere din Epoca de Aur olandeză. Muzeul este găzduit într-un palat istoric din secolul al XVII-lea și găzduiește lucrări de renume mondial, cum ar fi 'Fata cu cercel de perlă' de Vermeer.",
      en: "The Mauritshuis in The Hague is a renowned art museum specializing in masterpieces from the Dutch Golden Age. The museum is housed in a historic 17th-century palace and is home to world-famous works such as Vermeer's 'Girl with a Pearl Earring'."
    },
    facts: {
      de: ["Beherbergt 'Das Mädchen mit dem Perlenohrgehänge' von Johannes Vermeer.", "Zeigt Rembrandts 'Die Anatomiestunde des Dr. Tulp'.", "Die königliche Gemäldegalerie ist in einem Palast untergebracht.", "Fokus auf niederländische und flämische Malerei des 17. Jahrhunderts.", "Direkt neben dem Binnenhof gelegen.", "Gilt als eines der schönsten kleinen Museen der Welt."],
      hu: ["Itt található Johannes Vermeer 'Leány gyöngyfülbevalóval' című festménye.", "Bemutatja Rembrandt 'Dr. Tulp anatómiája' című művét.", "A királyi képtár egy palotában kapott helyet.", "Főként a 17. századi holland és flamand festészetre fókuszál.", "Közvetlenül a Binnenhof mellett található.", "A világ egyik legszebb kis múzeumának tartják."],
      ro: ["Găzduiește 'Fata cu cercel de perlă' de Johannes Vermeer.", "Expune 'Lecția de anatomie a Dr. Tulp' de Rembrandt.", "Galeria regală de pictură este găzduită într-un palat.", "Se concentrează pe pictura olandeză și flamandă din secolul al XVII-lea.", "Situat chiar lângă Binnenhof.", "Considerat unul dintre cele mai frumoase muzee mici din lume."],
      en: ["Houses 'Girl with a Pearl Earring' by Johannes Vermeer.", "Displays Rembrandt's 'The Anatomy Lesson of Dr. Nicolaes Tulp'.", "The Royal Picture Gallery is housed in a palace.", "Focuses on 17th-century Dutch and Flemish painting.", "Located right next to the Binnenhof.", "Considered one of the most beautiful small museums in the world."]
    }
  },
  {
    id: "nl-royal-palace-dam", type: "historical", parent: "NL-NH", coords: [4.8914, 52.3732],
    name: { de: "Königspalast Amsterdam", hu: "Amszterdami Királyi Palota", ro: "Palatul Regal din Amsterdam", en: "Royal Palace Amsterdam" },
    image: "/geo-images/netherlands/royal-palace-dam.webp",
    description: {
      de: "Der Königspalast auf dem Dam-Platz in Amsterdam ist einer der offiziellen Paläste der niederländischen Königsfamilie. Ursprünglich im 17. Jahrhundert als Rathaus erbaut, spiegelt er den Reichtum des Goldenen Zeitalters wider. Später wurde er von Louis Bonaparte, Napoleons Bruder, in einen Palast umgewandelt.",
      hu: "Az amszterdami Dam téren található Királyi Palota a holland királyi család egyik hivatalos palotája. Eredetileg a 17. században épült városházaként, és az aranykor gazdagságát tükrözi. Később Louis Bonaparte, Napóleon testvére alakította át palotává.",
      ro: "Palatul Regal din Piața Dam din Amsterdam este unul dintre palatele oficiale ale familiei regale olandeze. Construit inițial în secolul al XVII-lea ca primărie, reflectă bogăția Epocii de Aur. Mai târziu a fost transformat într-un palat de Louis Bonaparte, fratele lui Napoleon.",
      en: "The Royal Palace on Dam Square in Amsterdam is one of the official palaces of the Dutch royal family. Originally built in the 17th century as a town hall, it reflects the wealth of the Golden Age. It was later transformed into a palace by Louis Bonaparte, Napoleon's brother."
    },
    facts: {
      de: ["Ursprünglich als Amsterdamer Rathaus erbaut (1648).", "Gilt als das größte weltliche Gebäude des 17. Jahrhunderts.", "Wird heute für staatliche Empfänge und royale Veranstaltungen genutzt.", "Die Bürgerhalle zeigt beeindruckende Weltkarten auf dem Boden.", "Ruht auf über 13.000 Holzpfählen.", "Louis Bonaparte machte es 1808 zum Königspalast."],
      hu: ["Eredetileg amszterdami városházaként épült (1648).", "A 17. század legnagyobb világi épületének tartják.", "Ma állami fogadásokra és királyi rendezvényekre használják.", "A Polgárok Csarnoka padlóján lenyűgöző világtérképek láthatók.", "Több mint 13 000 facölöpön nyugszik.", "Louis Bonaparte tette királyi palotává 1808-ban."],
      ro: ["Construit inițial ca Primărie a Amsterdamului (1648).", "Considerată cea mai mare clădire seculară din secolul al XVII-lea.", "Astăzi este folosit pentru recepții de stat și evenimente regale.", "Sala Cetățenilor prezintă hărți ale lumii impresionante pe podea.", "Se sprijină pe peste 13.000 de piloni de lemn.", "Louis Bonaparte l-a transformat în palat regal în 1808."],
      en: ["Originally built as the Amsterdam Town Hall (1648).", "Considered the largest secular building of the 17th century.", "Today it is used for state receptions and royal events.", "The Citizens' Hall features impressive world maps on the floor.", "Rests on over 13,000 wooden piles.", "Louis Bonaparte made it a royal palace in 1808."]
    }
  },
  {
    id: "nl-efteling", type: "kid-landmark", parent: "NL-NB", coords: [5.0440, 51.6492],
    name: { de: "Efteling", hu: "Efteling", ro: "Efteling", en: "Efteling" },
    image: "/geo-images/netherlands/efteling.webp",
    description: {
      de: "Efteling ist der größte und berühmteste Freizeitpark der Niederlande und einer der ältesten der Welt. Mit einem einzigartigen Fokus auf Märchen, Mythen und Sagen bietet der Park Fahrgeschäfte für alle Altersgruppen. Der märchenhafte Charakter verdankt sich vor allem den Entwürfen des Künstlers Anton Pieck.",
      hu: "Az Efteling Hollandia legnagyobb és leghíresebb vidámparkja, és a világ egyik legrégebbi parkja. A mesékre, mítoszokra és legendákra összpontosítva a park minden korosztály számára kínál attrakciókat. Mesebeli karakterét főleg Anton Pieck művész terveinek köszönheti.",
      ro: "Efteling este cel mai mare și mai faimos parc de distracții din Țările de Jos și unul dintre cele mai vechi din lume. Cu un accent unic pe basme, mituri și legende, parcul oferă atracții pentru toate vârstele. Caracterul său de basm se datorează în principal desenelor artistului Anton Pieck.",
      en: "Efteling is the largest and most famous amusement park in the Netherlands and one of the oldest in the world. With a unique focus on fairy tales, myths and legends, the park offers rides for all ages. Its fairytale character is mainly due to the designs of the artist Anton Pieck."
    },
    facts: {
      de: ["Eröffnet 1952 mit dem berühmten Märchenwald (Sprookjesbos).", "Der meistbesuchte Freizeitpark der Niederlande.", "Bekannt für das magische und nostalgische Design von Anton Pieck.", "Bietet aufregende Achterbahnen wie Baron 1898.", "Das ganze Jahr über geöffnet.", "Eine der beliebtesten Touristenattraktionen in Europa."],
      hu: ["1952-ben nyílt meg a híres Meseerdővel (Sprookjesbos).", "Hollandia leglátogatottabb vidámparkja.", "Anton Pieck varázslatos és nosztalgikus dizájnjáról ismert.", "Olyan izgalmas hullámvasutakat kínál, mint a Baron 1898.", "Egész évben nyitva tart.", "Európa egyik legnépszerűbb turisztikai látványossága."],
      ro: ["Deschis în 1952 cu celebra Pădure de Basm (Sprookjesbos).", "Cel mai vizitat parc de distracții din Olanda.", "Cunoscut pentru designul magic și nostalgic al lui Anton Pieck.", "Oferă montagne russe palpitante, cum ar fi Baron 1898.", "Deschis pe tot parcursul anului.", "Una dintre cele mai populare atracții turistice din Europa."],
      en: ["Opened in 1952 with the famous Fairytale Forest (Sprookjesbos).", "The most visited amusement park in the Netherlands.", "Known for the magical and nostalgic design of Anton Pieck.", "Offers thrilling roller coasters such as Baron 1898.", "Open all year round.", "One of the most popular tourist attractions in Europe."]
    }
  },
  {
    id: "nl-madurodam", type: "kid-landmark", parent: "NL-ZH", coords: [4.2963, 52.0995],
    name: { de: "Madurodam", hu: "Madurodam", ro: "Madurodam", en: "Madurodam" },
    image: "/geo-images/netherlands/madurodam.webp",
    description: {
      de: "Madurodam ist ein weltbekannter Miniaturpark in Den Haag, der die Niederlande im Maßstab 1:25 präsentiert. Hier können Besucher detailgetreue Nachbildungen von niederländischen Wahrzeichen, Städten und Landschaften bewundern. Der Park bietet zudem interaktive Erlebnisse und zeigt die Geschichte und technologischen Errungenschaften des Landes.",
      hu: "A Madurodam egy világszerte ismert hágai miniatűr park, amely Hollandiát mutatja be 1:25 méretarányban. A látogatók itt holland nevezetességek, városok és tájak részletes másolatait csodálhatják meg. A park interaktív élményeket is kínál, és bemutatja az ország történelmét és technológiai vívmányait.",
      ro: "Madurodam este un parc în miniatură de renume mondial din Haga, care prezintă Țările de Jos la scara 1:25. Aici vizitatorii pot admira replici detaliate ale reperelor, orașelor și peisajelor olandeze. Parcul oferă, de asemenea, experiențe interactive și prezintă istoria și realizările tehnologice ale țării.",
      en: "Madurodam is a world-renowned miniature park in The Hague that presents the Netherlands on a scale of 1:25. Here visitors can admire detailed replicas of Dutch landmarks, cities and landscapes. The park also offers interactive experiences and highlights the history and technological achievements of the country."
    },
    facts: {
      de: ["Gegründet 1952 zum Gedenken an den Kriegshelden George Maduro.", "Präsentiert die Niederlande im Maßstab 1:25.", "Enthält über 700 detaillierte Modelle von Gebäuden und Bauwerken.", "Die Gewinne gehen traditionell an wohltätige Zwecke für Kinder.", "Viele Modelle sind animiert und interaktiv.", "Ein beliebter Ort, um die Niederlande an einem Tag zu erleben."],
      hu: ["1952-ben alapították George Maduro háborús hős emlékére.", "Hollandiát mutatja be 1:25 méretarányban.", "Több mint 700 részletes épület- és építménymodellt tartalmaz.", "A bevételt hagyományosan gyermekekkel foglalkozó jótékonysági szervezetek kapják.", "Számos modell animált és interaktív.", "Népszerű hely Hollandia egyetlen nap alatt történő felfedezésére."],
      ro: ["Fondat în 1952 în memoria eroului de război George Maduro.", "Prezintă Țările de Jos la scara 1:25.", "Conține peste 700 de modele detaliate de clădiri și structuri.", "Profiturile sunt direcționate în mod tradițional către organizațiile de caritate pentru copii.", "Multe modele sunt animate și interactive.", "Un loc popular pentru a experimenta Olanda într-o singură zi."],
      en: ["Founded in 1952 in memory of war hero George Maduro.", "Presents the Netherlands on a scale of 1:25.", "Contains over 700 detailed models of buildings and structures.", "Profits traditionally go to children's charities.", "Many models are animated and interactive.", "A popular place to experience the Netherlands in a single day."]
    }
  },
  {
    id: "nl-zaanse-schans", type: "landmark", parent: "NL-NH", coords: [4.8194, 52.4732],
    name: { de: "Zaanse Schans", hu: "Zaanse Schans", ro: "Zaanse Schans", en: "Zaanse Schans" },
    image: "/geo-images/netherlands/zaanse-schans.webp",
    description: {
      de: "Die Zaanse Schans ist ein historisches Viertel in Zaandam, das wie ein Freilichtmuseum wirkt. Sie vermittelt einen lebendigen Eindruck des Lebens in den Niederlanden des 18. und 19. Jahrhunderts. Besucher können traditionelle Windmühlen in Betrieb, grüne Holzhäuser, eine Käserei und eine Holzschuhwerkstatt besichtigen.",
      hu: "A Zaanse Schans egy történelmi negyed Zaandamban, amely olyan, mint egy szabadtéri múzeum. Élethű képet ad a 18. és 19. századi holland életről. A látogatók megtekinthetik a működő hagyományos szélmalmokat, a zöld faházakat, egy sajtgyárat és egy fapapucskészítő műhelyt.",
      ro: "Zaanse Schans este un cartier istoric din Zaandam care funcționează ca un muzeu în aer liber. Oferă o impresie vie a vieții din Olanda în secolele al XVIII-lea și al XIX-lea. Vizitatorii pot vedea mori de vânt tradiționale în funcțiune, case verzi din lemn, o fabrică de brânzeturi și un atelier de saboți.",
      en: "Zaanse Schans is a historic neighborhood in Zaandam that feels like an open-air museum. It provides a vivid impression of life in the Netherlands in the 18th and 19th centuries. Visitors can see operational traditional windmills, green wooden houses, a cheese factory and a clog workshop."
    },
    facts: {
      de: ["Berühmt für seine funktionsfähigen historischen Windmühlen.", "Zeigt traditionelle Holzarchitektur der Region Zaanstreek.", "Beherbergt traditionelle Handwerksbetriebe (Holzschuhe, Käse).", "Millionen von Touristen besuchen es jährlich.", "Viele der Gebäude wurden hierher versetzt, um sie zu retten.", "Liegt malerisch am Fluss Zaan."],
      hu: ["Működő történelmi szélmalmairól híres.", "A Zaanstreek régió hagyományos faépítészetét mutatja be.", "Hagyományos kézműves műhelyeknek (fapapucs, sajt) ad otthont.", "Turisták milliói látogatják évente.", "Sok épületet ideköltöztettek a megmentésük érdekében.", "Festői környezetben, a Zaan folyó partján fekszik."],
      ro: ["Renumit pentru morile sale de vânt istorice funcționale.", "Prezintă arhitectura tradițională din lemn a regiunii Zaanstreek.", "Găzduiește ateliere de artizanat tradițional (saboți, brânză).", "Milioane de turiști îl vizitează anual.", "Multe dintre clădiri au fost mutate aici pentru a fi salvate.", "Situat pitoresc pe râul Zaan."],
      en: ["Famous for its operational historic windmills.", "Shows traditional wooden architecture of the Zaanstreek region.", "Houses traditional craft workshops (clogs, cheese).", "Millions of tourists visit it annually.", "Many of the buildings were moved here to save them.", "Picturesquely situated on the Zaan river."]
    }
  },
  {
    id: "nl-kinderdijk-wind", type: "landmark", parent: "NL-ZH", coords: [4.6389, 51.8833],
    name: { de: "Mühlen von Kinderdijk", hu: "Kinderdijk szélmalmai", ro: "Morile de vânt din Kinderdijk", en: "Windmills at Kinderdijk" },
    image: "/geo-images/netherlands/kinderdijk-wind.webp",
    description: {
      de: "Kinderdijk ist weltberühmt für sein System aus 19 historischen Windmühlen, die im 18. Jahrhundert erbaut wurden. Sie dienten dazu, überschüssiges Wasser aus den Poldern abzupumpen und das Land vor Überschwemmungen zu schützen. Heute ist die Landschaft ein herausragendes Beispiel der niederländischen Wassermanagement-Geschichte.",
      hu: "Kinderdijk világhírű a 18. században épült, 19 történelmi szélmalomból álló rendszeréről. Ezeket arra használták, hogy kiszivattyúzzák a felesleges vizet a polderekből, és megvédjék a földet az áradásoktól. Ma a táj a holland vízgazdálkodás történetének kiemelkedő példája.",
      ro: "Kinderdijk este renumit în întreaga lume pentru sistemul său de 19 mori de vânt istorice construite în secolul al XVIII-lea. Ele au fost folosite pentru a pompa excesul de apă din poldere și pentru a proteja terenul de inundații. Astăzi peisajul este un exemplu remarcabil al istoriei managementului apei olandez.",
      en: "Kinderdijk is world-famous for its system of 19 historic windmills built in the 18th century. They were used to pump excess water from the polders and protect the land from flooding. Today the landscape is an outstanding example of Dutch water management history."
    },
    facts: {
      de: ["Seit 1997 Teil des UNESCO-Weltkulturerbes.", "Besteht aus 19 erhaltenen Windmühlen aus dem Jahr 1740.", "Erbaut, um den Alblasserwaard vor Überschwemmungen zu bewahren.", "Ikonisches Symbol für das niederländische Wassermanagement.", "Besucher können einige der Mühlen von innen besichtigen.", "Die Mühlen können noch heute Wasser pumpen."],
      hu: ["1997 óta az UNESCO Világörökség része.", "19 fennmaradt szélmalomból áll 1740-ből.", "Az Alblasserwaard áradásoktól való megvédésére épült.", "A holland vízgazdálkodás ikonikus szimbóluma.", "A látogatók néhány malmot belülről is megtekinthetnek.", "A malmok még ma is képesek vizet szivattyúzni."],
      ro: ["Parte a Patrimoniului Mondial UNESCO din 1997.", "Constă din 19 mori de vânt conservate din anul 1740.", "Construite pentru a proteja Alblasserwaard de inundații.", "Simbol iconic al managementului apei olandez.", "Vizitatorii pot vedea interiorul unora dintre mori.", "Morile pot pompa apă și astăzi."],
      en: ["Part of the UNESCO World Heritage Site since 1997.", "Consists of 19 preserved windmills from 1740.", "Built to protect the Alblasserwaard from flooding.", "Iconic symbol of Dutch water management.", "Visitors can view the inside of some of the mills.", "The mills can still pump water today."]
    }
  },
  {
    id: "nl-afsluitdijk", type: "landmark", parent: "NL-FR", coords: [5.1000, 53.0500],
    name: { de: "Afsluitdijk", hu: "Afsluitdijk (Zárógát)", ro: "Afsluitdijk", en: "Afsluitdijk" },
    image: "/geo-images/netherlands/afsluitdijk.webp",
    description: {
      de: "Der Afsluitdijk (Abschlussdeich) ist ein monumentaler, 32 Kilometer langer Deich, der die Provinzen Nordholland und Friesland verbindet. Durch seinen Bau 1932 wurde die Nordseebucht Zuiderzee abgetrennt und in den Süßwassersee IJsselmeer umgewandelt. Er ist ein Meisterwerk der niederländischen Ingenieurskunst zum Schutz vor dem Meer.",
      hu: "Az Afsluitdijk (Zárógát) egy monumentális, 32 kilométer hosszú gát, amely Észak-Holland és Frízföld tartományokat köti össze. 1932-es felépítésével a Zuiderzee északi-tengeri öblöt leválasztották, és édesvizű IJsselmeerré alakították. A tenger elleni védekezés holland mérnöki remekműve.",
      ro: "Afsluitdijk (Barajul de închidere) este un dig monumental de 32 de kilometri care leagă provinciile Olanda de Nord și Frizia. Construcția sa în 1932 a separat golful Mării Nordului Zuiderzee și l-a transformat în lacul de apă dulce IJsselmeer. Este o capodoperă a ingineriei olandeze pentru protecția împotriva mării.",
      en: "The Afsluitdijk (Enclosure Dam) is a monumental 32-kilometer-long dam connecting the provinces of North Holland and Friesland. Its construction in 1932 separated the Zuiderzee bay from the North Sea and transformed it into the freshwater lake IJsselmeer. It is a masterpiece of Dutch engineering for sea defense."
    },
    facts: {
      de: ["32 Kilometer lang und verbindet Nordholland mit Friesland.", "Verwandelte die salzige Zuiderzee in das süße IJsselmeer.", "Ein zentrales Bauwerk der Zuiderzeewerke.", "Schützt weite Teile des Landes vor Überschwemmungen.", "Führt eine Autobahn und einen Radweg über den Damm.", "Wurde von dem Ingenieur Cornelis Lely entworfen."],
      hu: ["32 kilométer hosszú, és Észak-Hollandiát köti össze Frízfölddel.", "A sós Zuiderzeet édes IJsselmeerré változtatta.", "A Zuiderzee-munkálatok központi építménye.", "Az ország nagy részét védi az árvizektől.", "Egy autópálya és egy kerékpárút vezet át a gáton.", "Cornelis Lely mérnök tervezte."],
      ro: ["Are o lungime de 32 de kilometri și leagă Olanda de Nord de Frizia.", "A transformat Zuiderzee sărat în IJsselmeer dulce.", "O structură centrală a Lucrărilor Zuiderzee.", "Protejează mari părți ale țării de inundații.", "Poartă o autostradă și o pistă de biciclete peste baraj.", "A fost proiectat de inginerul Cornelis Lely."],
      en: ["32 kilometers long, connecting North Holland with Friesland.", "Transformed the salty Zuiderzee into the fresh IJsselmeer.", "A central structure of the Zuiderzee Works.", "Protects large parts of the country from flooding.", "Carries a highway and a bicycle path across the dam.", "Was designed by the engineer Cornelis Lely."]
    }
  },
  {
    id: "nl-peace-palace", type: "historical", parent: "NL-ZH", coords: [4.2908, 52.0866],
    name: { de: "Friedenspalast", hu: "Békepalota", ro: "Palatul Păcii", en: "Peace Palace" },
    image: "/geo-images/netherlands/peace-palace.webp",
    description: {
      de: "Der Friedenspalast (Vredespaleis) in Den Haag ist ein imposantes Gebäude und das globale Symbol für internationalen Frieden und Gerechtigkeit. Er beherbergt den Internationalen Gerichtshof der Vereinten Nationen und den Ständigen Schiedshof. Er wurde durch eine großzügige Spende des amerikanischen Stahlmagnaten Andrew Carnegie erbaut.",
      hu: "A hágai Békepalota (Vredespaleis) egy impozáns épület, amely a nemzetközi béke és igazságosság globális szimbóluma. Itt székel az ENSZ Nemzetközi Bírósága és az Állandó Választottbíróság. Andrew Carnegie amerikai acélmágnás nagylelkű adományából épült.",
      ro: "Palatul Păcii (Vredespaleis) din Haga este o clădire impunătoare și simbolul global al păcii și justiției internaționale. Găzduiește Curtea Internațională de Justiție a Națiunilor Unite și Curtea Permanentă de Arbitraj. A fost construit printr-o donație generoasă de la magnatul american al oțelului Andrew Carnegie.",
      en: "The Peace Palace (Vredespaleis) in The Hague is an imposing building and the global symbol of international peace and justice. It houses the International Court of Justice of the United Nations and the Permanent Court of Arbitration. It was built through a generous donation from American steel magnate Andrew Carnegie."
    },
    facts: {
      de: ["Sitz des Internationalen Gerichtshofs der UN.", "Beherbergt auch den Ständigen Schiedshof und eine große Bibliothek.", "Eröffnet im Jahr 1913 kurz vor dem Ersten Weltkrieg.", "Finanziert durch den Philanthropen Andrew Carnegie.", "Länder weltweit spendeten Materialien für den Bau.", "Symbolisiert Den Haags Status als Stadt des Friedens."],
      hu: ["Az ENSZ Nemzetközi Bíróságának székhelye.", "Itt található az Állandó Választottbíróság és egy nagy könyvtár is.", "1913-ban, nem sokkal az első világháború előtt nyílt meg.", "Andrew Carnegie filantróp finanszírozta.", "A világ számos országa adományozott anyagokat az építkezéshez.", "Hága mint a béke városa státuszának szimbóluma."],
      ro: ["Sediul Curții Internaționale de Justiție a ONU.", "Găzduiește, de asemenea, Curtea Permanentă de Arbitraj și o mare bibliotecă.", "Deschis în 1913 chiar înainte de Primul Război Mondial.", "Finanțat de filantropul Andrew Carnegie.", "Țări din întreaga lume au donat materiale pentru construcție.", "Simbolizează statutul Hagăi de oraș al păcii."],
      en: ["Seat of the UN International Court of Justice.", "Also houses the Permanent Court of Arbitration and a large library.", "Opened in 1913 shortly before World War I.", "Funded by philanthropist Andrew Carnegie.", "Countries around the world donated materials for construction.", "Symbolizes The Hague's status as a city of peace."]
    }
  },
  {
    id: "nl-anne-frank-house", type: "historical", parent: "NL-NH", coords: [4.8839, 52.3752],
    name: { de: "Anne Frank Haus", hu: "Anne Frank Ház", ro: "Casa Anne Frank", en: "Anne Frank House" },
    image: "/geo-images/netherlands/anne-frank-house.webp",
    description: {
      de: "Das Anne Frank Haus in Amsterdam ist das Gebäude, in dem sich die jüdische Familie Frank während des Zweiten Weltkriegs vor den Nationalsozialisten versteckte. Hier schrieb Anne Frank ihr weltberühmtes Tagebuch. Heute ist das Haus ein bedeutendes Museum und Gedenkstätte.",
      hu: "Az amszterdami Anne Frank Ház az az épület, ahol a zsidó Frank család a második világháború alatt a nácik elől bujkált. Itt írta Anne Frank világhírű naplóját. Ma a ház fontos múzeum és emlékhely.",
      ro: "Casa Anne Frank din Amsterdam este clădirea în care familia evreiască Frank s-a ascuns de naziști în timpul celui de-al Doilea Război Mondial. Aici și-a scris Anne Frank jurnalul ei de renume mondial. Astăzi casa este un important muzeu și un memorial.",
      en: "The Anne Frank House in Amsterdam is the building where the Jewish Frank family hid from the Nazis during World War II. It was here that Anne Frank wrote her world-famous diary. Today the house is an important museum and memorial."
    },
    facts: {
      de: ["Ort des 'Hinterhauses', wo Anne Frank sich versteckte.", "Das Original-Tagebuch wird hier ausgestellt.", "Erinnert an die Opfer des Holocaust.", "Eines der meistbesuchten Museen in Amsterdam.", "Der Zugang zum Versteck war hinter einem drehbaren Bücherregal verborgen.", "Besucher spüren die beklemmende Enge des Verstecks."],
      hu: ["A 'Hátsó traktus' helyszíne, ahol Anne Frank bujkált.", "Itt állítják ki az eredeti naplót.", "A holokauszt áldozataira emlékezik.", "Amszterdam egyik leglátogatottabb múzeuma.", "A rejtekhely bejárata egy forgatható könyvespolc mögött volt.", "A látogatók átérezhetik a rejtekhely nyomasztó szűkös voltát."],
      ro: ["Locația 'Anexei Secrete', unde s-a ascuns Anne Frank.", "Jurnalul original este expus aici.", "Comemorează victimele Holocaustului.", "Unul dintre cele mai vizitate muzee din Amsterdam.", "Accesul la ascunzătoare a fost ascuns în spatele unei biblioteci rotative.", "Vizitatorii pot simți îngustimea opresivă a ascunzătoarei."],
      en: ["Location of the 'Secret Annex', where Anne Frank hid.", "The original diary is on display here.", "Commemorates the victims of the Holocaust.", "One of the most visited museums in Amsterdam.", "Access to the hiding place was hidden behind a revolving bookcase.", "Visitors can feel the oppressive confinement of the hiding place."]
    }
  },
  {
    id: "nl-hoge-veluwe", type: "landmark", parent: "NL-GE", coords: [5.8500, 52.0500],
    name: { de: "Hoge Veluwe", hu: "Hoge Veluwe", ro: "Hoge Veluwe", en: "Hoge Veluwe" },
    image: "/geo-images/netherlands/hoge-veluwe.webp",
    description: {
      de: "Der Nationalpark De Hoge Veluwe ist das größte durchgehende Naturschutzgebiet der Niederlande. Er bietet eine einzigartige Landschaft aus Wäldern, Heideland, Grasflächen und Sandverwehungen. Mitten im Park liegt das Kröller-Müller Museum, das eine bedeutende Kunstsammlung und einen großen Skulpturengarten beherbergt.",
      hu: "A De Hoge Veluwe Nemzeti Park Hollandia legnagyobb egybefüggő természetvédelmi területe. Erdők, fenyérek, füves puszták és homokdűnék egyedülálló táját kínálja. A park közepén található a Kröller-Müller Múzeum, amely jelentős művészeti gyűjteménynek és egy nagy szoborparknak ad otthont.",
      ro: "Parcul Național De Hoge Veluwe este cea mai mare rezervație naturală continuă din Țările de Jos. Oferă un peisaj unic de păduri, pajiști, pășuni și dune de nisip. În mijlocul parcului se află Muzeul Kröller-Müller, care găzduiește o importantă colecție de artă și o mare grădină de sculpturi.",
      en: "De Hoge Veluwe National Park is the largest continuous nature reserve in the Netherlands. It offers a unique landscape of forests, heathland, grasslands and sand dunes. In the middle of the park is the Kröller-Müller Museum, which houses an important art collection and a large sculpture garden."
    },
    facts: {
      de: ["Größter Nationalpark der Niederlande auf Privatgrund.", "Berühmt für die kostenlosen weißen Fahrräder (Witte Fietsen).", "Beherbergt das renommierte Kröller-Müller Museum.", "Die Landschaft reicht von Sanddünen bis zu dichten Wäldern.", "Heimat von Hirschen, Wildschweinen und Mufflons.", "Besonders zur Heideblüte im August ein Spektakel."],
      hu: ["Hollandia legnagyobb magánterületen lévő nemzeti parkja.", "Híres az ingyenes fehér kerékpárokról (Witte Fietsen).", "A neves Kröller-Müller Múzeumnak ad otthont.", "A táj a homokdűnéktől a sűrű erdőkig terjed.", "Szarvasok, vaddisznók és muflonok otthona.", "Különösen az augusztusi hangavirágzás idején látványos."],
      ro: ["Cel mai mare parc național din Olanda aflat pe un teren privat.", "Faimos pentru bicicletele albe gratuite (Witte Fietsen).", "Găzduiește renumitul Muzeu Kröller-Müller.", "Peisajul variază de la dune de nisip la păduri dese.", "Casa cerbilor, mistreților și muflonilor.", "Un spectacol în special în timpul înfloririi bruyerei în august."],
      en: ["Largest national park in the Netherlands on private land.", "Famous for the free white bicycles (Witte Fietsen).", "Houses the renowned Kröller-Müller Museum.", "The landscape ranges from sand dunes to dense forests.", "Home to deer, wild boar and mouflon.", "A spectacle especially during the heather bloom in August."]
    }
  },
  {
    id: "nl-waddenzee", type: "landmark", parent: "NL-FR", coords: [5.4000, 53.4500],
    name: { de: "Wattenmeer", hu: "Watt-tenger", ro: "Marea Wadden", en: "Wadden Sea" },
    image: "/geo-images/netherlands/waddenzee.webp",
    description: {
      de: "Das niederländische Wattenmeer ist ein außergewöhnliches Naturgebiet und Teil des UNESCO-Weltnaturerbes, das sich bis nach Deutschland und Dänemark erstreckt. Es ist das weltweit größte zusammenhängende Gezeitensystem aus Sand- und Schlickwatten. Das Gebiet ist von entscheidender Bedeutung für Millionen von Zugvögeln.",
      hu: "A holland Watt-tenger kivételes természeti terület, az UNESCO Világörökség része, amely Németországig és Dániáig húzódik. Ez a világ legnagyobb egybefüggő, iszapos és homokos árapály-rendszere. A terület létfontosságú vándormadarak milliói számára.",
      ro: "Marea Wadden olandeză este o zonă naturală excepțională și parte a Patrimoniului Mondial UNESCO care se extinde până în Germania și Danemarca. Este cel mai mare sistem continuu de maree de bancuri de nisip și noroi din lume. Zona este vitală pentru milioane de păsări migratoare.",
      en: "The Dutch Wadden Sea is an exceptional natural area and part of the UNESCO World Heritage Site that stretches all the way to Germany and Denmark. It is the world's largest unbroken system of intertidal sand and mud flats. The area is of crucial importance to millions of migratory birds."
    },
    facts: {
      de: ["Seit 2009 UNESCO-Weltnaturerbe.", "Größtes Gezeitensystem der Welt.", "Ein wichtiger Lebensraum für Seehunde.", "Rastplatz für Millionen von Zugvögeln jährlich.", "Wattwandern (Wadlopen) ist eine beliebte Aktivität.", "Erstreckt sich entlang der niederländischen Küste und den Nordseeinseln."],
      hu: ["2009 óta az UNESCO természeti világörökség része.", "A világ legnagyobb árapály-rendszere.", "A fókák fontos élőhelye.", "Évente vándormadarak millióinak pihenőhelye.", "Az iszapjárás (Wadlopen) népszerű tevékenység.", "A holland partok és az északi-tengeri szigetek mentén húzódik."],
      ro: ["Patrimoniul natural mondial UNESCO din 2009.", "Cel mai mare sistem de maree din lume.", "Un habitat important pentru foci.", "Loc de odihnă pentru milioane de păsări migratoare în fiecare an.", "Mersul pe noroi (Wadlopen) este o activitate populară.", "Se întinde de-a lungul coastei olandeze și a insulelor Mării Nordului."],
      en: ["UNESCO World Natural Heritage Site since 2009.", "Largest tidal system in the world.", "An important habitat for seals.", "Resting place for millions of migratory birds annually.", "Mudflat walking (Wadlopen) is a popular activity.", "Stretches along the Dutch coast and the North Sea islands."]
    }
  },
  {
    id: "nl-texel-island", type: "island", parent: "NL-NH", coords: [4.7667, 53.0500],
    name: { de: "Texel", hu: "Texel", ro: "Texel", en: "Texel" },
    image: "/geo-images/netherlands/texel-island.webp",
    description: {
      de: "Texel ist die größte und bevölkerungsreichste der Westfriesischen Inseln der Niederlande. Sie bietet lange Sandstrände, den Nationalpark Duinen van Texel, charmante Dörfer und Natur pur. Die Insel ist bekannt für ihre vielen Schafe und als Zufluchtsort für zahlreiche Vogelarten.",
      hu: "Texel a legnagyobb és legnépesebb a hollandiai Nyugati-Fríz-szigetek közül. Hosszú homokos strandokat, a Duinen van Texel Nemzeti Parkot, bájos falvakat és hamisítatlan természetet kínál. A sziget híres a sok juhról és arról, hogy számos madárfaj menedéke.",
      ro: "Texel este cea mai mare și cea mai populată dintre Insulele Frisice de Vest din Țările de Jos. Oferă plaje lungi cu nisip, Parcul Național Duinen van Texel, sate fermecătoare și natură pură. Insula este cunoscut pentru oile sale numeroase și ca refugiu pentru numeroase specii de păsări.",
      en: "Texel is the largest and most populous of the West Frisian Islands of the Netherlands. It offers long sandy beaches, the Duinen van Texel National Park, charming villages and pure nature. The island is known for its many sheep and as a refuge for numerous bird species."
    },
    facts: {
      de: ["Die größte niederländische Nordseeinsel.", "Beherbergt den Nationalpark Duinen van Texel.", "Es gibt auf der Insel etwa genauso viele Schafe wie Einwohner.", "Der rote Leuchtturm im Norden ist ein beliebtes Fotomotiv.", "Ecomare bietet Einblicke in das Leben von Seehunden.", "Bietet hervorragende Bedingungen für Radfahrer und Wanderer."],
      hu: ["A legnagyobb holland északi-tengeri sziget.", "A Duinen van Texel Nemzeti Park otthona.", "A szigeten körülbelül annyi juh van, mint amennyi lakos.", "Az északi piros világítótorony népszerű fotótéma.", "Az Ecomare bepillantást enged a fókák életébe.", "Kiváló feltételeket kínál a kerékpárosok és túrázók számára."],
      ro: ["Cea mai mare insulă olandeză din Marea Nordului.", "Găzduiește Parcul Național Duinen van Texel.", "Pe insulă sunt cam tot atâtea oi câți locuitori.", "Farul roșu din nord este un motiv foto popular.", "Ecomare oferă informații despre viața focilor.", "Oferă condiții excelente pentru bicicliști și drumeți."],
      en: ["The largest Dutch North Sea island.", "Home to the Duinen van Texel National Park.", "There are about as many sheep as residents on the island.", "The red lighthouse in the north is a popular photo motif.", "Ecomare offers insights into the life of seals.", "Offers excellent conditions for cyclists and hikers."]
    }
  },
  {
    id: "nl-biesbosch", type: "landmark", parent: "NL-NB", coords: [4.8000, 51.7500],
    name: { de: "De Biesbosch", hu: "De Biesbosch", ro: "De Biesbosch", en: "De Biesbosch" },
    image: "/geo-images/netherlands/biesbosch.webp",
    description: {
      de: "Der Nationalpark De Biesbosch ist eines der größten Süßwasser-Gezeitengebiete Europas. Die Landschaft besteht aus einem Labyrinth von Flüssen, Inseln und Weidenwäldern. Es ist ein Paradies für Kanufahrer, Vogelbeobachter und Naturliebhaber, und bekannt für die dort ansässigen Biber.",
      hu: "A De Biesbosch Nemzeti Park Európa egyik legnagyobb édesvízi árapály-területe. A táj folyók, szigetek és fűzerdők labirintusából áll. Paradicsom a kenuzók, madármegfigyelők és természetbarátok számára, és az itt élő hódokról ismert.",
      ro: "Parcul Național De Biesbosch este una dintre cele mai mari zone de maree cu apă dulce din Europa. Peisajul este alcătuit dintr-un labirint de râuri, insule și păduri de salcie. Este un paradis pentru canotori, observatori de păsări și iubitorii de natură și este renumit pentru castorii rezidenți.",
      en: "De Biesbosch National Park is one of the largest freshwater tidal areas in Europe. The landscape consists of a labyrinth of rivers, islands, and willow forests. It is a paradise for canoeists, bird watchers, and nature lovers, and is known for its resident beavers."
    },
    facts: {
      de: ["Ein seltenes Süßwasser-Gezeitensystem.", "Entstand durch die St.-Elisabeth-Flut im Jahr 1421.", "Bekannt für seine Population an Europäischen Bibern.", "Sehr beliebt für Kanu- und Flüsterboot-Touren.", "Wichtiger Brutplatz für viele Wasservögel.", "Liegt an der Grenze von Südholland und Nordbrabant."],
      hu: ["Ritka édesvízi árapály-rendszer.", "Az 1421-es Szent Erzsébet-árvíz révén alakult ki.", "Híres európai hódpopulációjáról.", "Nagyon népszerű a kenu- és suttogócsónak-túrákhoz.", "Sok vízimadár fontos fészkelőhelye.", "Dél-Holland és Észak-Brabant határán fekszik."],
      ro: ["Un sistem rar de maree cu apă dulce.", "Creat de inundația Sf. Elisabeta din 1421.", "Renumit pentru populația sa de castori europeni.", "Foarte popular pentru excursiile cu canoe și bărci cu șoapte.", "Loc important de reproducere pentru multe păsări de apă.", "Situat la granița dintre Olanda de Sud și Brabantul de Nord."],
      en: ["A rare freshwater tidal system.", "Created by the St. Elizabeth's flood in 1421.", "Famous for its population of European beavers.", "Very popular for canoe and whisper boat tours.", "Important breeding ground for many water birds.", "Located on the border of South Holland and North Brabant."]
    }
  },
  {
    id: "nl-keukenhof-gardens", type: "landmark", parent: "NL-ZH", coords: [4.5473, 52.2697],
    name: { de: "Keukenhof", hu: "Keukenhof", ro: "Keukenhof", en: "Keukenhof" },
    image: "/geo-images/netherlands/keukenhof-gardens.webp",
    description: {
      de: "Der Keukenhof ist der berühmteste Frühlingsgarten der Welt und das Schaufenster der niederländischen Blumenzucht. Jedes Jahr blühen hier Millionen von Tulpen, Narzissen und Hyazinthen in einem spektakulären Farbenmeer. Der Park ist nur für wenige Wochen im Frühjahr geöffnet und zieht Besucher aus aller Welt an.",
      hu: "A Keukenhof a világ leghíresebb tavaszi kertje és a holland virágtermesztés kirakata. Évente több millió tulipán, nárcisz és jácint nyílik itt a színek látványos tengerében. A park csak néhány hétig tart nyitva tavasszal, és a világ minden tájáról vonzza a látogatókat.",
      ro: "Keukenhof este cea mai faimoasă grădină de primăvară din lume și vitrina floriculturii olandeze. În fiecare an, milioane de lalele, narcise și zambile înfloresc aici într-o mare de culori spectaculoasă. Parcul este deschis doar pentru câteva săptămâni primăvara și atrage vizitatori din întreaga lume.",
      en: "Keukenhof is the most famous spring garden in the world and the showcase of Dutch floriculture. Every year millions of tulips, daffodils and hyacinths bloom here in a spectacular sea of colors. The park is only open for a few weeks in the spring and attracts visitors from all over the world."
    },
    facts: {
      de: ["Bekannt als 'Garten Europas'.", "Etwa 7 Millionen Blumenzwiebeln werden jährlich gepflanzt.", "Nur ca. 8 Wochen im Frühling (März bis Mai) geöffnet.", "Zeigt über 800 verschiedene Tulpensorten.", "Einer der am meisten fotografierten Orte der Welt.", "Befindet sich in Lisse, in der 'Bollenstreek' (Zwiebelregion)."],
      hu: ["'Európa kertjeként' ismert.", "Évente mintegy 7 millió virághagymát ültetnek el.", "Csak kb. 8 hétig van nyitva tavasszal (márciustól májusig).", "Több mint 800 különböző tulipánfajtát mutat be.", "A világ egyik legtöbbet fényképezett helye.", "Lisse-ben, a 'Bollenstreek' (virághagyma régió) területén található."],
      ro: ["Cunoscută sub numele de 'Grădina Europei'.", "Aproximativ 7 milioane de bulbi de flori sunt plantați anual.", "Deschis doar aproximativ 8 săptămâni primăvara (martie până în mai).", "Afișează peste 800 de soiuri diferite de lalele.", "Unul dintre cele mai fotografiate locuri din lume.", "Situat în Lisse, în 'Bollenstreek' (regiunea bulbilor)."],
      en: ["Known as the 'Garden of Europe'.", "About 7 million flower bulbs are planted annually.", "Open only about 8 weeks in spring (March to May).", "Displays over 800 different varieties of tulips.", "One of the most photographed places in the world.", "Located in Lisse, in the 'Bollenstreek' (bulb region)."]
    }
  },
  {
    id: "nl-dunes-kennemerland", type: "landmark", parent: "NL-NH", coords: [4.5500, 52.4500],
    name: { de: "Nationalpark Zuid-Kennemerland", hu: "Zuid-Kennemerland Nemzeti Park", ro: "Parcul Național Zuid-Kennemerland", en: "Zuid-Kennemerland National Park" },
    image: "/geo-images/netherlands/dunes-kennemerland.webp",
    description: {
      de: "Der Nationalpark Zuid-Kennemerland ist eine wunderschöne Dünenlandschaft an der Nordseeküste in der Nähe von Haarlem. Der Park zeichnet sich durch weite Sanddünen, versteckte Dünenseen und alte Waldgebiete aus. Er bietet zahlreichen Tierarten wie Hochlandrindern, Konik-Pferden und sogar Wisenten einen Lebensraum.",
      hu: "A Zuid-Kennemerland Nemzeti Park gyönyörű dűnés táj az északi-tengeri partvidéken, Haarlem közelében. A parkot kiterjedt homokdűnék, rejtett dűnetavak és régi erdőségek jellemzik. Számos állatfajnak ad otthont, például skót felföldi marháknak, koniklovaknak és még európai bölényeknek is.",
      ro: "Parcul Național Zuid-Kennemerland este un peisaj frumos de dune pe coasta Mării Nordului, lângă Haarlem. Parcul este caracterizat de dune de nisip întinse, lacuri de dune ascunse și zone forestiere vechi. Oferă un habitat pentru numeroase specii de animale, cum ar fi vite Highland, cai Konik și chiar zimbri.",
      en: "Zuid-Kennemerland National Park is a beautiful dune landscape on the North Sea coast near Haarlem. The park is characterized by vast sand dunes, hidden dune lakes, and ancient woodlands. It provides a habitat for numerous animal species such as Highland cattle, Konik horses, and even European bison."
    },
    facts: {
      de: ["Beherbergt eine freilebende Herde von Wisenten (Europäischen Bisons).", "Schützt ein ausgedehntes und dynamisches Dünengebiet.", "Ein beliebtes Erholungsgebiet nahe Amsterdam und Haarlem.", "Wichtig für die Gewinnung von sauberem Trinkwasser.", "Bietet Hunderte Kilometer an Rad- und Wanderwegen.", "Die Vegetation reicht von Strandhafer bis zu dichten Kiefernwäldern."],
      hu: ["Szabadon élő európai bölénycsordának ad otthont.", "Kiterjedt és dinamikus dűnevidéket véd.", "Népszerű rekreációs terület Amszterdam és Haarlem közelében.", "Fontos a tiszta ivóvíz kinyerése szempontjából.", "Több száz kilométernyi kerékpár- és túraútvonalat kínál.", "A növényzet a homoki zabtól a sűrű fenyőerdőkig terjed."],
      ro: ["Găzduiește o turmă de zimbri (bizon european) care trăiesc liberi.", "Protejează o zonă de dune extinsă și dinamică.", "O zonă de recreere populară lângă Amsterdam și Haarlem.", "Important pentru obținerea apei potabile curate.", "Oferă sute de kilometri de trasee de ciclism și drumeții.", "Vegetația variază de la iarba de plajă la păduri dese de pini."],
      en: ["Houses a free-roaming herd of wisent (European bison).", "Protects an extensive and dynamic dune area.", "A popular recreation area near Amsterdam and Haarlem.", "Important for the extraction of clean drinking water.", "Offers hundreds of kilometers of cycling and hiking trails.", "Vegetation ranges from beach grass to dense pine forests."]
    }
  },
  {
    id: "nl-drenthe-hunebed", type: "historical", parent: "NL-DR", coords: [6.7500, 52.8000],
    name: { de: "Hünengräber in Drenthe", hu: "Drenthei Hunebedden", ro: "Mormintele megalitice din Drenthe", en: "Hunebedden in Drenthe" },
    image: "/geo-images/netherlands/drenthe-hunebed.webp",
    description: {
      de: "Die Provinz Drenthe ist berühmt für ihre Hunebedden (Hünengräber), prähistorische Grabmonumente, die aus riesigen Findlingen bestehen. Diese Megalithanlagen wurden vor über 5.000 Jahren von den Bauern der Trichterbecherkultur errichtet. Sie sind die ältesten Denkmäler der Niederlande.",
      hu: "Drenthe tartomány híres a Hunebeddenekről, a hatalmas vándorkövekből álló őskori síremlékekről. Ezeket a megalitikus építményeket több mint 5000 évvel ezelőtt emelték a tölcséres edények kultúrájának földművesei. Ezek Hollandia legrégebbi műemlékei.",
      ro: "Provincia Drenthe este faimoasă pentru Hunebedden, monumente funerare preistorice formate din bolovani uriași. Aceste structuri megalitice au fost construite cu peste 5.000 de ani în urmă de fermierii din cultura vaselor pâlnie. Ele sunt cele mai vechi monumente din Țările de Jos.",
      en: "The province of Drenthe is famous for its Hunebedden (dolmens), prehistoric burial monuments made of huge erratic boulders. These megalithic structures were built over 5,000 years ago by farmers of the Funnelbeaker culture. They are the oldest monuments in the Netherlands."
    },
    facts: {
      de: ["Es gibt noch 52 erhaltene Hünengräber in den Niederlanden.", "Die meisten befinden sich in der Provinz Drenthe.", "Errichtet aus Findlingen, die während der Eiszeit aus Skandinavien kamen.", "Älter als Stonehenge und die Pyramiden.", "In Borger befindet sich das größte Hünengrab (D27) und das Hunebedcentrum.", "Dienten als kollektive Grabstätten."],
      hu: ["Hollandiában még 52 fennmaradt megalitikus sír található.", "A legtöbb Drenthe tartományban van.", "A jégkorszak alatt Skandináviából idesodort vándorkövekből épültek.", "Régebbiek, mint Stonehenge és a piramisok.", "Borgerben található a legnagyobb megalitikus sír (D27) és a Hunebedcentrum.", "Kollektív temetkezési helyként szolgáltak."],
      ro: ["Există încă 52 de morminte megalitice păstrate în Țările de Jos.", "Cele mai multe sunt situate în provincia Drenthe.", "Construite din bolovani care au venit din Scandinavia în timpul Epocii de Gheață.", "Mai vechi decât Stonehenge și piramidele.", "În Borger se află cel mai mare mormânt megalitic (D27) și Hunebedcentrum.", "Au servit drept locuri de înmormântare colective."],
      en: ["There are still 52 preserved dolmens in the Netherlands.", "Most are located in the province of Drenthe.", "Built from boulders that came from Scandinavia during the Ice Age.", "Older than Stonehenge and the pyramids.", "In Borger is the largest dolmen (D27) and the Hunebedcentrum.", "Served as collective burial places."]
    }
  },
  {
    id: "nl-ijsselmeer", type: "lake", parent: "NL-FL", coords: [5.2500, 52.7500],
    name: { de: "IJsselmeer", hu: "IJsselmeer", ro: "IJsselmeer", en: "IJsselmeer" },
    image: "/geo-images/netherlands/ijsselmeer.webp",
    description: {
      de: "Das IJsselmeer ist der größte See der Niederlande, ein flaches Süßwasserbecken, das 1932 durch den Bau des Afsluitdijk aus der Zuiderzee entstand. Es ist ein Paradies für Segler und Wassersportler. Rund um den See liegen viele historische Fischerdörfer, die an die maritime Vergangenheit erinnern.",
      hu: "Az IJsselmeer Hollandia legnagyobb tava, egy sekély édesvizű medence, amely 1932-ben a Zuiderzeeből jött létre az Afsluitdijk felépítésével. Paradicsom a vitorlázók és a vízi sportok szerelmesei számára. A tó körül számos történelmi halászfalu található, amelyek a tengeri múltra emlékeztetnek.",
      ro: "IJsselmeer este cel mai mare lac din Țările de Jos, un bazin de apă dulce de mică adâncime care a fost creat din Zuiderzee în 1932 prin construcția Afsluitdijk. Este un paradis pentru marinari și iubitorii de sporturi nautice. În jurul lacului se află multe sate de pescari istorice care amintesc de trecutul maritim.",
      en: "The IJsselmeer is the largest lake in the Netherlands, a shallow freshwater basin that was created from the Zuiderzee in 1932 by the construction of the Afsluitdijk. It is a paradise for sailors and water sports enthusiasts. Around the lake are many historic fishing villages that are reminders of the maritime past."
    },
    facts: {
      de: ["Größter Binnensee der Niederlande.", "Wurde 1932 durch Abtrennung von der Nordsee zum Süßwassersee.", "Dient als riesiges Süßwasserreservoir.", "Teil des Sees wurde zur Gewinnung der Provinz Flevoland trockengelegt.", "Beliebtes Revier für Segeln, Kitesurfen und Windsurfen.", "Umgeben von historischen Orten wie Volendam und Hoorn."],
      hu: ["Hollandia legnagyobb beltengere/tava.", "1932-ben az Északi-tengertől való leválasztással vált édesvizű tóvá.", "Hatalmas édesvíztározóként szolgál.", "A tó egy részét kiszárították Flevoland tartomány létrehozásához.", "Népszerű terület a vitorlázás, a kiteszörf és a szörfözés szerelmesei körében.", "Olyan történelmi helyek veszik körül, mint Volendam és Hoorn."],
      ro: ["Cel mai mare lac interior din Olanda.", "A devenit un lac cu apă dulce în 1932 prin separarea de Marea Nordului.", "Servește ca un imens rezervor de apă dulce.", "O parte a lacului a fost drenată pentru a crea provincia Flevoland.", "Zonă populară pentru navigație, kitesurfing și windsurfing.", "Înconjurat de locuri istorice precum Volendam și Hoorn."],
      en: ["Largest inland lake in the Netherlands.", "Became a freshwater lake in 1932 by separation from the North Sea.", "Serves as a huge freshwater reservoir.", "Part of the lake was drained to create the province of Flevoland.", "Popular area for sailing, kitesurfing and windsurfing.", "Surrounded by historic places like Volendam and Hoorn."]
    }
  },
  {
    id: "nl-giethoorn-village", type: "landmark", parent: "NL-OV", coords: [6.0800, 52.7400],
    name: { de: "Giethoorn", hu: "Giethoorn", ro: "Giethoorn", en: "Giethoorn" },
    image: "/geo-images/netherlands/giethoorn-village.webp",
    description: {
      de: "Giethoorn ist ein idyllisches Dorf in der Provinz Overijssel, das oft als 'Venedig des Nordens' bezeichnet wird. Der historische Kern hat keine Straßen, stattdessen dienen kleine Kanäle als Transportwege. Die charakteristischen strohgedeckten Bauernhäuser sind durch zahlreiche hohe Holzbrücken verbunden.",
      hu: "Giethoorn egy idilli falu Overijssel tartományban, amelyet gyakran 'Észak Velencéjének' is neveznek. A történelmi központban nincsenek utak, helyettük kis csatornák szolgálnak közlekedési útvonalként. A jellegzetes nádtetős parasztházakat számos magas fahíd köti össze.",
      ro: "Giethoorn este un sat idilic din provincia Overijssel, adesea numit 'Veneția Nordului'. Centrul istoric nu are străzi, în schimb canale mici servesc drept rute de transport. Fermele caracteristice cu acoperiș de stuf sunt conectate prin numeroase poduri înalte din lemn.",
      en: "Giethoorn is an idyllic village in the province of Overijssel, often referred to as the 'Venice of the North'. The historic center has no roads, instead small canals serve as transport routes. The characteristic thatched-roof farmhouses are connected by numerous high wooden bridges."
    },
    facts: {
      de: ["Bekannt als 'Venedig des Nordens'.", "Das historische Zentrum ist komplett autofrei.", "Der Verkehr erfolgt hauptsächlich über sogenannte Flüsterboote.", "Besitzt über 170 kleine Holzbrücken.", "Liegt im Nationalpark Weerribben-Wieden.", "Entstand durch Torfabbau in der Region."],
      hu: ["'Észak Velencéje' néven ismert.", "A történelmi központ teljesen autómentes.", "A közlekedés főleg úgynevezett suttogócsónakokkal történik.", "Több mint 170 kis fahíddal rendelkezik.", "A Weerribben-Wieden Nemzeti Parkban található.", "A régióban folyó tőzegkitermelés révén alakult ki."],
      ro: ["Cunoscut ca 'Veneția Nordului'.", "Centrul istoric este complet fără mașini.", "Transportul se face în principal prin așa-numitele bărci cu șoapte.", "Are peste 170 de poduri mici din lemn.", "Situat în Parcul Național Weerribben-Wieden.", "Creat de extracția turbei în regiune."],
      en: ["Known as the 'Venice of the North'.", "The historic center is completely car-free.", "Traffic is mainly via so-called whisper boats.", "Has over 170 small wooden bridges.", "Located in the Weerribben-Wieden National Park.", "Created by peat extraction in the region."]
    }
  },
  {
    id: "nl-vondelpark", type: "landmark", parent: "NL-NH", coords: [4.8686, 52.3580],
    name: { de: "Vondelpark", hu: "Vondelpark", ro: "Vondelpark", en: "Vondelpark" },
    image: "/geo-images/netherlands/vondelpark.webp",
    description: {
      de: "Der Vondelpark ist der berühmteste und beliebteste Stadtpark von Amsterdam. Entworfen im Stil eines englischen Landschaftsgartens, ist er die grüne Lunge der Stadt. Der Park ist ein Treffpunkt für Einheimische und Touristen gleichermaßen, ideal zum Spazierengehen, Radfahren oder Entspannen.",
      hu: "A Vondelpark Amszterdam leghíresebb és legnépszerűbb városi parkja. Az angol tájkert stílusában tervezett park a város zöld tüdeje. A park a helyiek és a turisták kedvelt találkozóhelye, ideális sétára, kerékpározásra vagy pihenésre.",
      ro: "Vondelpark este cel mai faimos și popular parc al orașului din Amsterdam. Proiectat în stilul unei grădini peisagistice englezești, este plămânul verde al orașului. Parcul este un punct de întâlnire atât pentru localnici, cât și pentru turiști, ideal pentru plimbări, ciclism sau relaxare.",
      en: "Vondelpark is the most famous and popular city park in Amsterdam. Designed in the style of an English landscape garden, it is the green lung of the city. The park is a meeting place for locals and tourists alike, ideal for walking, cycling or relaxing."
    },
    facts: {
      de: ["Der meistbesuchte Park der Niederlande (ca. 10 Millionen Besucher jährlich).", "Benannt nach dem Dichter Joost van den Vondel.", "Eröffnet im Jahr 1865.", "Seit 1996 ein nationales Denkmal (Rijksmonument).", "Verfügt über ein Freilichttheater mit Sommeraufführungen.", "Beherbergt eine Skulptur von Pablo Picasso."],
      hu: ["Hollandia leglátogatottabb parkja (évente kb. 10 millió látogató).", "Joost van den Vondel költőről nevezték el.", "1865-ben nyitották meg.", "1996 óta nemzeti műemlék (Rijksmonument).", "Szabadtéri színházzal rendelkezik nyári előadásokkal.", "Itt található egy Pablo Picasso-szobor."],
      ro: ["Cel mai vizitat parc din Olanda (aproximativ 10 milioane de vizitatori anual).", "Numit după poetul Joost van den Vondel.", "Deschis în 1865.", "Monument național (Rijksmonument) din 1996.", "Are un teatru în aer liber cu spectacole de vară.", "Găzduiește o sculptură de Pablo Picasso."],
      en: ["The most visited park in the Netherlands (approx. 10 million visitors annually).", "Named after the poet Joost van den Vondel.", "Opened in 1865.", "A national monument (Rijksmonument) since 1996.", "Has an open-air theater with summer performances.", "Houses a sculpture by Pablo Picasso."]
    }
  }
];

export const netherlandsAllPoi: POI[] = [
  netherlandsCountry,
  ...netherlandsRegions,
  ...netherlandsCities
];