import type { POI } from "./poi";

export const spainCountry: POI[] = [
  {
    id: "ES",
    type: "country",
    parent: "EU",
    coords: [-3.7, 40.4],
    name: {"de": "Spanien", "hu": "Spanyolország", "ro": "Spania", "en": "Spain"},
    image: "/geo-images/spain/spain.webp",
    description: {"de": "Land in Südwesteuropa auf der Iberischen Halbinsel, bekannt für seine Kultur, Strände und Geschichte.", "hu": "Délnyugat-európai ország az Ibériai-félszigeten, amely kultúrájáról, strandjairól és történelméről ismert.", "ro": "Țară din sud-vestul Europei, în Peninsula Iberică, cunoscută pentru cultură, plaje și istorie.", "en": "Country in southwestern Europe on the Iberian Peninsula, known for its culture, beaches, and history."},
    facts: {"de": ["Hauptstadt: Madrid.", "Einwohner: ca. 48 Millionen.", "Währung: Euro."], "hu": ["Főváros: Madrid.", "Népesség: kb. 48 millió.", "Pénznem: Euró."], "ro": ["Capitala: Madrid.", "Populație: aprox. 48 milioane.", "Monedă: Euro."], "en": ["Capital: Madrid.", "Population: approx. 48 million.", "Currency: Euro."]}
  }
];

export const spainRegions: POI[] = [
  {
    id: "ES-GA",
    type: "region",
    parent: "ES",
    coords: [-8.0, 42.5],
    name: {"de": "Galicien", "hu": "Galícia", "ro": "Galicia", "en": "Galicia"},
    image: "/geo-images/spain/galicia.webp",
    description: {"de": "Autonome Gemeinschaft im Nordwesten Spaniens.", "hu": "Autonóm közösség Spanyolország északnyugati részén.", "ro": "Comunitate autonomă în nord-vestul Spaniei.", "en": "Autonomous community in northwestern Spain."}
  },
  {
    id: "ES-AS",
    type: "region",
    parent: "ES",
    coords: [-6.0, 43.3],
    name: {"de": "Asturien", "hu": "Asztúria", "ro": "Asturia", "en": "Asturias"},
    image: "/geo-images/spain/asturias.webp",
    description: {"de": "Grüne und gebirgige Region im Norden Spaniens.", "hu": "Zöld és hegyvidéki régió Észak-Spanyolországban.", "ro": "Regiune verde și muntoasă din nordul Spaniei.", "en": "Green and mountainous region in northern Spain."}
  },
  {
    id: "ES-CB",
    type: "region",
    parent: "ES",
    coords: [-4.0, 43.2],
    name: {"de": "Kantabrien", "hu": "Kantábria", "ro": "Cantabria", "en": "Cantabria"},
    image: "/geo-images/spain/cantabria.webp",
    description: {"de": "Region an der Nordküste Spaniens mit reicher prähistorischer Kunst.", "hu": "Régió Spanyolország északi partján, gazdag őskori művészettel.", "ro": "Regiune pe coasta de nord a Spaniei cu artă preistorică bogată.", "en": "Region on the northern coast of Spain with rich prehistoric art."}
  },
  {
    id: "ES-PV",
    type: "region",
    parent: "ES",
    coords: [-2.5, 43.0],
    name: {"de": "Baskenland", "hu": "Baszkföld", "ro": "Țara Bascilor", "en": "Basque Country"},
    image: "/geo-images/spain/basque-country.webp",
    description: {"de": "Region mit eigener Sprache und Kultur im Norden Spaniens.", "hu": "Saját nyelvvel és kultúrával rendelkező régió Észak-Spanyolországban.", "ro": "Regiune cu limbă și cultură proprie în nordul Spaniei.", "en": "Region with its own language and culture in northern Spain."}
  },
  {
    id: "ES-NC",
    type: "region",
    parent: "ES",
    coords: [-1.5, 42.8],
    name: {"de": "Navarra", "hu": "Navarra", "ro": "Navarra", "en": "Navarre"},
    image: "/geo-images/spain/navarre.webp",
    description: {"de": "Autonome Gemeinschaft im Norden, bekannt für das San Fermín-Fest.", "hu": "Északi autonóm közösség, amely a San Fermín fesztiválról ismert.", "ro": "Comunitate autonomă în nord, cunoscută pentru festivalul San Fermín.", "en": "Autonomous community in the north, known for the San Fermín festival."}
  },
  {
    id: "ES-RI",
    type: "region",
    parent: "ES",
    coords: [-2.5, 42.3],
    name: {"de": "La Rioja", "hu": "La Rioja", "ro": "La Rioja", "en": "La Rioja"},
    image: "/geo-images/spain/la-rioja.webp",
    description: {"de": "Kleine Region, die weltweit für ihren Wein berühmt ist.", "hu": "Kis régió, amely világhírű a boráról.", "ro": "Regiune mică faimoasă în lume pentru vinul său.", "en": "Small region world-famous for its wine."}
  },
  {
    id: "ES-AR",
    type: "region",
    parent: "ES",
    coords: [-0.5, 41.5],
    name: {"de": "Aragonien", "hu": "Aragónia", "ro": "Aragon", "en": "Aragon"},
    image: "/geo-images/spain/aragon.webp",
    description: {"de": "Binnenlandregion in Nordostspanien mit vielfältiger Landschaft.", "hu": "Belföldi régió Északkelet-Spanyolországban változatos tájakkal.", "ro": "Regiune interioară în nord-estul Spaniei cu peisaje diverse.", "en": "Inland region in northeastern Spain with diverse landscapes."}
  },
  {
    id: "ES-CT",
    type: "region",
    parent: "ES",
    coords: [1.5, 41.5],
    name: {"de": "Katalonien", "hu": "Katalónia", "ro": "Catalonia", "en": "Catalonia"},
    image: "/geo-images/spain/catalonia.webp",
    description: {"de": "Region im Nordosten mit starker Identität und eigener Sprache.", "hu": "Északkeleti régió erős identitással és saját nyelvvel.", "ro": "Regiune în nord-est cu o identitate puternică și limbă proprie.", "en": "Region in the northeast with a strong identity and its own language."}
  },
  {
    id: "ES-CL",
    type: "region",
    parent: "ES",
    coords: [-4.5, 41.5],
    name: {"de": "Kastilien und León", "hu": "Kasztília és León", "ro": "Castilia și León", "en": "Castile and León"},
    image: "/geo-images/spain/castile-and-le-n.webp",
    description: {"de": "Die größte autonome Gemeinschaft Spaniens.", "hu": "Spanyolország legnagyobb autonóm közössége.", "ro": "Cea mai mare comunitate autonomă din Spania.", "en": "The largest autonomous community in Spain."}
  },
  {
    id: "ES-MD",
    type: "region",
    parent: "ES",
    coords: [-3.7, 40.5],
    name: {"de": "Madrid", "hu": "Madrid", "ro": "Madrid", "en": "Madrid"},
    image: "/geo-images/spain/madrid.webp",
    description: {"de": "Die Hauptstadtregion und das wirtschaftliche Zentrum Spaniens.", "hu": "Spanyolország fővárosi régiója és gazdasági központja.", "ro": "Regiunea capitalei și centrul economic al Spaniei.", "en": "The capital region and economic center of Spain."}
  },
  {
    id: "ES-CM",
    type: "region",
    parent: "ES",
    coords: [-3.0, 39.5],
    name: {"de": "Kastilien-La Mancha", "hu": "Kasztília-La Mancha", "ro": "Castilia-La Mancha", "en": "Castilla-La Mancha"},
    image: "/geo-images/spain/castilla-la-mancha.webp",
    description: {"de": "Zentralspanische Region, bekannt für Don Quijote.", "hu": "Közép-spanyolországi régió, Don Quijote hazája.", "ro": "Regiune centrală a Spaniei, cunoscută pentru Don Quijote.", "en": "Central Spanish region, famous for Don Quixote."}
  },
  {
    id: "ES-EX",
    type: "region",
    parent: "ES",
    coords: [-6.0, 39.5],
    name: {"de": "Extremadura", "hu": "Extremadura", "ro": "Extremadura", "en": "Extremadura"},
    image: "/geo-images/spain/extremadura.webp",
    description: {"de": "Region im Westen Spaniens mit reichem römischen Erbe.", "hu": "Spanyolország nyugati régiója, gazdag római örökséggel.", "ro": "Regiune din vestul Spaniei cu o bogată moștenire romană.", "en": "Region in western Spain with rich Roman heritage."}
  },
  {
    id: "ES-VC",
    type: "region",
    parent: "ES",
    coords: [-0.5, 39.5],
    name: {"de": "Valencia", "hu": "Valencia", "ro": "Valencia", "en": "Valencian Community"},
    image: "/geo-images/spain/valencian-community.webp",
    description: {"de": "Küstenregion im Osten, bekannt für Paella.", "hu": "Keleti parti régió, a paella hazája.", "ro": "Regiune de coastă în est, cunoscută pentru paella.", "en": "Coastal region in the east, known for paella."}
  },
  {
    id: "ES-AN",
    type: "region",
    parent: "ES",
    coords: [-4.5, 37.5],
    name: {"de": "Andalusien", "hu": "Andalúzia", "ro": "Andaluzia", "en": "Andalusia"},
    image: "/geo-images/spain/andalusia.webp",
    description: {"de": "Südlichste Region mit maurischer Architektur und Flamenco.", "hu": "A legdélibb régió, mór építészettel és flamencóval.", "ro": "Cea mai sudică regiune, cu arhitectură maură și flamenco.", "en": "Southernmost region with Moorish architecture and flamenco."}
  },
  {
    id: "ES-MU",
    type: "region",
    parent: "ES",
    coords: [-1.5, 38.0],
    name: {"de": "Murcia", "hu": "Murcia", "ro": "Murcia", "en": "Murcia"},
    image: "/geo-images/spain/murcia.webp",
    description: {"de": "Region im Südosten, bekannt für Landwirtschaft und Strände.", "hu": "Délkeleti régió, mezőgazdaságáról és strandjairól ismert.", "ro": "Regiune în sud-est, cunoscută pentru agricultură și plaje.", "en": "Southeastern region, known for agriculture and beaches."}
  },
  {
    id: "ES-IB",
    type: "region",
    parent: "ES",
    coords: [3.0, 39.5],
    name: {"de": "Balearen", "hu": "Baleár-szigetek", "ro": "Insulele Baleare", "en": "Balearic Islands"},
    image: "/geo-images/spain/balearic-islands.webp",
    description: {"de": "Inselgruppe im Mittelmeer.", "hu": "Szigetcsoport a Földközi-tengeren.", "ro": "Arhipelag în Marea Mediterană.", "en": "Archipelago in the Mediterranean Sea."}
  },
  {
    id: "ES-CN",
    type: "region",
    parent: "ES",
    coords: [-15.5, 28.0],
    name: {"de": "Kanarische Inseln", "hu": "Kanári-szigetek", "ro": "Insulele Canare", "en": "Canary Islands"},
    image: "/geo-images/spain/canary-islands.webp",
    description: {"de": "Inselgruppe im Atlantischen Ozean vor der Küste Afrikas.", "hu": "Szigetcsoport az Atlanti-óceánban Afrika partjainál.", "ro": "Arhipelag în Oceanul Atlantic în largul coastei Africii.", "en": "Archipelago in the Atlantic Ocean off the coast of Africa."}
  }
];

export const spainCities: POI[] = [
  {
    id: "es-madrid", type: "city", parent: "ES-MD", coords: [-3.7038, 40.4168],
    name: {"de": "Madrid", "hu": "Madrid", "ro": "Madrid", "en": "Madrid"},
    image: "/geo-images/spain/madrid.webp",
    description: {"de": "Die Hauptstadt und größte Stadt Spaniens.", "hu": "Spanyolország fővárosa és legnagyobb városa.", "ro": "Capitala și cel mai mare oraș al Spaniei.", "en": "The capital and largest city of Spain."},
    facts: {"de": ["Politik- und Kulturzentrum.", "Prado-Museum."], "hu": ["Politikai és kulturális központ.", "Prado Múzeum."], "ro": ["Centrul politic și cultural.", "Muzeul Prado."], "en": ["Political and cultural center.", "Prado Museum."]}
  },
  {
    id: "es-barcelona", type: "city", parent: "ES-CT", coords: [2.1686, 41.3874],
    name: {"de": "Barcelona", "hu": "Barcelona", "ro": "Barcelona", "en": "Barcelona"},
    image: "/geo-images/spain/barcelona.webp",
    description: {"de": "Metropole am Mittelmeer, berühmt für Gaudís Architektur.", "hu": "Metropolisz a Földközi-tenger partján, híres Gaudí építészetéről.", "ro": "Metropolă la Marea Mediterană, faimoasă pentru arhitectura lui Gaudí.", "en": "Metropolis on the Mediterranean, famous for Gaudí's architecture."},
    facts: {"de": ["Zweitgrößte Stadt Spaniens.", "Heimat der Sagrada Familia."], "hu": ["Spanyolország második legnagyobb városa.", "A Sagrada Familia otthona."], "ro": ["Al doilea oraș ca mărime din Spania.", "Casa Sagrada Familia."], "en": ["Second largest city in Spain.", "Home to the Sagrada Familia."]}
  },
  {
    id: "es-valencia", type: "city", parent: "ES-VC", coords: [-0.3763, 39.4699],
    name: {"de": "Valencia", "hu": "Valencia", "ro": "Valencia", "en": "Valencia"},
    image: "/geo-images/spain/valencia.webp",
    description: {"de": "Die drittgrößte Stadt Spaniens, bekannt für die Stadt der Künste und Wissenschaften.", "hu": "Spanyolország harmadik legnagyobb városa, ismert a Művészetek és Tudományok Városáról.", "ro": "Al treilea oraș ca mărime din Spania, cunoscut pentru Orașul Artelor și Științelor.", "en": "The third largest city in Spain, known for the City of Arts and Sciences."},
    facts: {"de": ["Ursprungsort der Paella.", "Fallas-Fest."], "hu": ["A paella szülőhelye.", "Fallas fesztivál."], "ro": ["Locul de origine al paellei.", "Festivalul Fallas."], "en": ["Origin of paella.", "Fallas festival."]}
  },
  {
    id: "es-sevilla", type: "city", parent: "ES-AN", coords: [-5.9845, 37.3891],
    name: {"de": "Sevilla", "hu": "Sevilla", "ro": "Sevilia", "en": "Seville"},
    image: "/geo-images/spain/seville.webp",
    description: {"de": "Hauptstadt von Andalusien, berühmt für Flamenco und ihre Kathedrale.", "hu": "Andalúzia fővárosa, híres a flamencóról és a katedrálisáról.", "ro": "Capitala Andaluziei, faimoasă pentru flamenco și catedrala sa.", "en": "Capital of Andalusia, famous for flamenco and its cathedral."}
  },
  {
    id: "es-zaragoza", type: "city", parent: "ES-AR", coords: [-0.8877, 41.6497],
    name: {"de": "Zaragoza", "hu": "Zaragoza", "ro": "Zaragoza", "en": "Zaragoza"},
    image: "/geo-images/spain/zaragoza.webp",
    description: {"de": "Historische Stadt am Ebro-Fluss.", "hu": "Történelmi város az Ebro folyó partján.", "ro": "Oraș istoric pe râul Ebro.", "en": "Historic city on the Ebro river."}
  },
  {
    id: "es-malaga", type: "city", parent: "ES-AN", coords: [-4.4214, 36.7213],
    name: {"de": "Málaga", "hu": "Málaga", "ro": "Málaga", "en": "Málaga"},
    image: "/geo-images/spain/m-laga.webp",
    description: {"de": "Hafenstadt an der Costa del Sol, Geburtsort von Picasso.", "hu": "Kikötőváros a Costa del Solon, Picasso szülőhelye.", "ro": "Oraș-port pe Costa del Sol, locul de naștere al lui Picasso.", "en": "Port city on the Costa del Sol, birthplace of Picasso."}
  },
  {
    id: "es-bilbao", type: "city", parent: "ES-PV", coords: [-2.9350, 43.2630],
    name: {"de": "Bilbao", "hu": "Bilbao", "ro": "Bilbao", "en": "Bilbao"},
    image: "/geo-images/spain/bilbao.webp",
    description: {"de": "Industriestadt im Baskenland, Heimat des Guggenheim-Museums.", "hu": "Ipari város Baszkföldön, a Guggenheim Múzeum otthona.", "ro": "Oraș industrial în Țara Bascilor, casa Muzeului Guggenheim.", "en": "Industrial city in the Basque Country, home to the Guggenheim Museum."}
  },
  {
    id: "es-granada", type: "city", parent: "ES-AN", coords: [-3.5986, 37.1773],
    name: {"de": "Granada", "hu": "Granada", "ro": "Granada", "en": "Granada"},
    image: "/geo-images/spain/granada.webp",
    description: {"de": "Stadt am Fuße der Sierra Nevada, bekannt für die Alhambra.", "hu": "Város a Sierra Nevada lábánál, az Alhambráról ismert.", "ro": "Oraș la poalele Sierra Nevada, cunoscut pentru Alhambra.", "en": "City at the foot of the Sierra Nevada, known for the Alhambra."}
  },
  {
    id: "es-cordoba", type: "city", parent: "ES-AN", coords: [-4.7794, 37.8882],
    name: {"de": "Córdoba", "hu": "Córdoba", "ro": "Córdoba", "en": "Córdoba"},
    image: "/geo-images/spain/c-rdoba.webp",
    description: {"de": "Historische Stadt, ehemals Zentrum des islamischen Spaniens.", "hu": "Történelmi város, az iszlám Spanyolország egykori központja.", "ro": "Oraș istoric, fost centru al Spaniei islamice.", "en": "Historic city, former center of Islamic Spain."}
  },
  {
    id: "es-salamanca", type: "city", parent: "ES-CL", coords: [-5.6635, 40.9701],
    name: {"de": "Salamanca", "hu": "Salamanca", "ro": "Salamanca", "en": "Salamanca"},
    image: "/geo-images/spain/salamanca.webp",
    description: {"de": "Heimat der ältesten Universität Spaniens.", "hu": "Spanyolország legrégebbi egyetemének otthona.", "ro": "Casa celei mai vechi universități din Spania.", "en": "Home to the oldest university in Spain."}
  },
  {
    id: "es-toledo", type: "city", parent: "ES-CM", coords: [-4.0273, 39.8628],
    name: {"de": "Toledo", "hu": "Toledo", "ro": "Toledo", "en": "Toledo"},
    image: "/geo-images/spain/toledo.webp",
    description: {"de": "Die 'Stadt der drei Kulturen', ein UNESCO-Weltkulturerbe.", "hu": "A 'Három kultúra városa', az UNESCO Világörökség része.", "ro": "„Orașul celor trei culturi”, sit al Patrimoniului Mondial UNESCO.", "en": "The 'City of the Three Cultures', a UNESCO World Heritage site."}
  },
  {
    id: "es-santiago", type: "city", parent: "ES-GA", coords: [-8.5448, 42.8782],
    name: {"de": "Santiago de Compostela", "hu": "Santiago de Compostela", "ro": "Santiago de Compostela", "en": "Santiago de Compostela"},
    image: "/geo-images/spain/santiago-de-compostela.webp",
    description: {"de": "Endpunkt des berühmten Jakobswegs.", "hu": "A híres Szent Jakab-út végpontja.", "ro": "Punctul final al faimosului Camino de Santiago.", "en": "End point of the famous Camino de Santiago."}
  },
  {
    id: "es-alhambra", type: "landmark", parent: "ES-AN", coords: [-3.5896, 37.1760],
    name: {"de": "Alhambra", "hu": "Alhambra", "ro": "Alhambra", "en": "Alhambra"},
    image: "/geo-images/spain/alhambra.webp",
    description: {"de": "Atemberaubender maurischer Palastkomplex in Granada.", "hu": "Lélegzetelállító mór palotaegyüttes Granadában.", "ro": "Complex de palate maure uluitor în Granada.", "en": "Breathtaking Moorish palace complex in Granada."}
  },
  {
    id: "es-sagrada-familia", type: "landmark", parent: "ES-CT", coords: [2.1744, 41.4036],
    name: {"de": "Sagrada Familia", "hu": "Sagrada Família", "ro": "Sagrada Familia", "en": "Sagrada Familia"},
    image: "/geo-images/spain/sagrada-familia.webp",
    description: {"de": "Antoni Gaudís unvollendetes Meisterwerk in Barcelona.", "hu": "Antoni Gaudí befejezetlen remekműve Barcelonában.", "ro": "Capodopera neterminată a lui Antoni Gaudí din Barcelona.", "en": "Antoni Gaudí's unfinished masterpiece in Barcelona."}
  },
  {
    id: "es-park-guell", type: "landmark", parent: "ES-CT", coords: [2.1527, 41.4145],
    name: {"de": "Park Güell", "hu": "Güell park", "ro": "Parcul Güell", "en": "Park Güell"},
    image: "/geo-images/spain/park-g-ell.webp",
    description: {"de": "Ein farbenfroher öffentlicher Park mit Architekturelementen von Gaudí.", "hu": "Színes nyilvános park Gaudí építészeti elemeivel.", "ro": "Un parc public plin de culoare, cu elemente arhitecturale de Gaudí.", "en": "A colorful public park with architectural elements by Gaudí."}
  },
  {
    id: "es-prado", type: "landmark", parent: "ES-MD", coords: [-3.6922, 40.4138],
    name: {"de": "Museo del Prado", "hu": "Prado Múzeum", "ro": "Muzeul Prado", "en": "Prado Museum"},
    image: "/geo-images/spain/prado-museum.webp",
    description: {"de": "Das wichtigste spanische nationale Kunstmuseum in Madrid.", "hu": "Spanyolország legfontosabb nemzeti művészeti múzeuma Madridban.", "ro": "Principalul muzeu național de artă spaniol din Madrid.", "en": "The main Spanish national art museum in Madrid."}
  },
  {
    id: "es-santiago-bernabeu", type: "landmark", parent: "ES-MD", coords: [-3.6883, 40.4531],
    name: {"de": "Santiago Bernabéu Stadion", "hu": "Santiago Bernabéu Stadion", "ro": "Stadionul Santiago Bernabéu", "en": "Santiago Bernabéu Stadium"},
    image: "/geo-images/spain/santiago-bernab-u-stadium.webp",
    description: {"de": "Das berühmte Stadion des Fußballvereins Real Madrid.", "hu": "A Real Madrid futballklub híres stadionja.", "ro": "Faimosul stadion al clubului de fotbal Real Madrid.", "en": "The famous stadium of the Real Madrid football club."}
  },
  {
    id: "es-camp-nou", type: "landmark", parent: "ES-CT", coords: [2.1228, 41.3809],
    name: {"de": "Camp Nou", "hu": "Camp Nou", "ro": "Camp Nou", "en": "Camp Nou"},
    image: "/geo-images/spain/camp-nou.webp",
    description: {"de": "Das Heimatstadion des FC Barcelona und das größte Stadion Europas.", "hu": "Az FC Barcelona hazai stadionja és Európa legnagyobb stadionja.", "ro": "Stadionul de origine al FC Barcelona și cel mai mare stadion din Europa.", "en": "The home stadium of FC Barcelona and the largest stadium in Europe."}
  },
  {
    id: "es-ibiza", type: "landmark", parent: "ES-IB", coords: [1.4322, 38.9067],
    name: {"de": "Ibiza", "hu": "Ibiza", "ro": "Ibiza", "en": "Ibiza"},
    image: "/geo-images/spain/ibiza.webp",
    description: {"de": "Insel der Balearen, berühmt für ihr Nachtleben und schöne Strände.", "hu": "Baleár-sziget, híres éjszakai életéről és gyönyörű strandjairól.", "ro": "Insulă din Baleare, faimoasă pentru viața de noapte și plajele frumoase.", "en": "Balearic island famous for its nightlife and beautiful beaches."}
  },
  {
    id: "es-mallorca", type: "landmark", parent: "ES-IB", coords: [2.9862, 39.6151],
    name: {"de": "Mallorca", "hu": "Mallorca", "ro": "Mallorca", "en": "Mallorca"},
    image: "/geo-images/spain/mallorca.webp",
    description: {"de": "Die größte der Baleareninseln, ein beliebtes Urlaubsziel.", "hu": "A legnagyobb Baleár-sziget, népszerű nyaralóhely.", "ro": "Cea mai mare dintre Insulele Baleare, o destinație populară de vacanță.", "en": "The largest of the Balearic Islands, a popular holiday destination."}
  },
  {
    id: "es-tenerife", type: "landmark", parent: "ES-CN", coords: [-16.6291, 28.2916],
    name: {"de": "Teneriffa", "hu": "Tenerife", "ro": "Tenerife", "en": "Tenerife"},
    image: "/geo-images/spain/tenerife.webp",
    description: {"de": "Die größte der Kanarischen Inseln, dominiert vom Vulkan Teide.", "hu": "A legnagyobb Kanári-sziget, a Teide vulkán uralja.", "ro": "Cea mai mare dintre Insulele Canare, dominată de vulcanul Teide.", "en": "The largest of the Canary Islands, dominated by the Teide volcano."}
  },
  {
    id: "es-gran-canaria", type: "landmark", parent: "ES-CN", coords: [-15.5997, 27.9202],
    name: {"de": "Gran Canaria", "hu": "Gran Canaria", "ro": "Gran Canaria", "en": "Gran Canaria"},
    image: "/geo-images/spain/gran-canaria.webp",
    description: {"de": "Kanarische Insel, bekannt für ihre vielfältigen Landschaften.", "hu": "Kanári-sziget, változatos tájairól ismert.", "ro": "Insula Canară, cunoscută pentru peisajele sale diverse.", "en": "Canary Island known for its diverse landscapes."}
  },
  {
    id: "es-pyrenees", type: "landmark", parent: "ES-AR", coords: [-0.0763, 42.6687],
    name: {"de": "Pyrenäen", "hu": "Pireneusok", "ro": "Pirinei", "en": "Pyrenees"},
    image: "/geo-images/spain/pyrenees.webp",
    description: {"de": "Die Bergkette, die die natürliche Grenze zwischen Spanien und Frankreich bildet.", "hu": "A Spanyolország és Franciaország közötti természetes határt alkotó hegység.", "ro": "Lanțul muntos care formează granița naturală dintre Spania și Franța.", "en": "The mountain range that forms the natural border between Spain and France."}
  },
  {
    id: "es-sierra-nevada", type: "landmark", parent: "ES-AN", coords: [-3.3000, 37.0500],
    name: {"de": "Sierra Nevada", "hu": "Sierra Nevada", "ro": "Sierra Nevada", "en": "Sierra Nevada"},
    image: "/geo-images/spain/sierra-nevada.webp",
    description: {"de": "Gebirgszug in Andalusien mit dem höchsten Gipfel des spanischen Festlands.", "hu": "Hegység Andalúziában, a kontinentális Spanyolország legmagasabb csúcsával.", "ro": "Lanț muntos din Andaluzia cu cel mai înalt vârf din Spania continentală.", "en": "Mountain range in Andalusia containing the highest point of continental Spain."}
  },
  {
    id: "es-picos-europa", type: "landmark", parent: "ES-AS", coords: [-4.8458, 43.1979],
    name: {"de": "Picos de Europa", "hu": "Picos de Europa", "ro": "Picos de Europa", "en": "Picos de Europa"},
    image: "/geo-images/spain/picos-de-europa.webp",
    description: {"de": "Ein markantes Bergmassiv an der Nordküste Spaniens.", "hu": "Jellegzetes hegymasszívum Spanyolország északi partján.", "ro": "Un masiv muntos uimitor pe coasta de nord a Spaniei.", "en": "A striking mountain massif on the northern coast of Spain."}
  },
  {
    id: "es-costa-brava", type: "landmark", parent: "ES-CT", coords: [3.1235, 41.9750],
    name: {"de": "Costa Brava", "hu": "Costa Brava", "ro": "Costa Brava", "en": "Costa Brava"},
    image: "/geo-images/spain/costa-brava.webp",
    description: {"de": "Wilde Küstenregion im Nordosten von Katalonien.", "hu": "Vad tengerparti régió Katalónia északkeleti részén.", "ro": "Regiune de coastă sălbatică în nord-estul Cataloniei.", "en": "Wild coastal region in northeastern Catalonia."}
  },
  {
    id: "es-costa-del-sol", type: "landmark", parent: "ES-AN", coords: [-4.6318, 36.5360],
    name: {"de": "Costa del Sol", "hu": "Costa del Sol", "ro": "Costa del Sol", "en": "Costa del Sol"},
    image: "/geo-images/spain/costa-del-sol.webp",
    description: {"de": "Sonnenverwöhnte Küste in Südspanien, ein beliebtes Touristenziel.", "hu": "Napsütötte tengerpart Dél-Spanyolországban, népszerű turisztikai célpont.", "ro": "Coastă însorită din sudul Spaniei, o destinație turistică populară.", "en": "Sun-drenched coast in southern Spain, a popular tourist destination."}
  },
{
  "id": "es-gaudi-casa-batllo",
  "type": "landmark",
  "parent": "ES-CT",
  "coords": [
    2.165,
    41.392
  ],
  "name": {
    "de": "Casa Batlló",
    "hu": "Casa Batlló",
    "ro": "Casa Batlló",
    "en": "Casa Batlló"
  },
  "image": "/geo-images/spain/gaudi-casa-batllo.webp",
  "description": {
    "de": "Casa Batlló ist ein Meisterwerk des Architekten Antoni Gaudí in Barcelona. Es zeichnet sich durch seine organischen Formen und die farbenfrohe Mosaikfassade aus. Das Gebäude wurde zwischen 1904 und 1906 umfassend umgebaut und ist heute ein UNESCO-Weltkulturerbe.",
    "hu": "A Casa Batlló Antoni Gaudí építész egyik barcelonai remekműve. Szerves formáiról és színes mozaikhomlokzatáról híres. Az épületet 1904 és 1906 között építették át, és ma az UNESCO világörökség része.",
    "ro": "Casa Batlló este o capodoperă a arhitectului Antoni Gaudí din Barcelona. Este renumită pentru formele sale organice și fațada colorată din mozaic. Clădirea a fost reconstruită între 1904 și 1906 și este astăzi în Patrimoniul Mondial UNESCO.",
    "en": "Casa Batlló is a masterpiece by the architect Antoni Gaudí in Barcelona. It is famous for its organic forms and colorful mosaic facade. The building was rebuilt between 1904 and 1906 and is now a UNESCO World Heritage Site."
  },
  "facts": {
    "de": [
      "Entworfen von Antoni Gaudí.",
      "Befindet sich am Passeig de Gràcia.",
      "Wird lokal 'Haus der Knochen' genannt.",
      "Das Dach stellt einen Drachenrücken dar.",
      "Verfügt über bunte Keramikmosaike (Trencadís).",
      "Gehört seit 2005 zum UNESCO-Weltkulturerbe."
    ],
    "hu": [
      "Antoni Gaudí tervezte.",
      "A Passeig de Gràcia utcában található.",
      "A helyiek 'Csontok házának' hívják.",
      "A tető egy sárkány hátát ábrázolja.",
      "Színes kerámiamozaikokkal (trencadís) díszített.",
      "2005 óta az UNESCO világörökség része."
    ],
    "ro": [
      "Proiectată de Antoni Gaudí.",
      "Se află pe Passeig de Gràcia.",
      "Numită local 'Casa Oaselor'.",
      "Acoperișul reprezintă spatele unui dragon.",
      "Decorată cu mozaicuri ceramice colorate (trencadís).",
      "Face parte din Patrimoniul UNESCO din 2005."
    ],
    "en": [
      "Designed by Antoni Gaudí.",
      "Located on the Passeig de Gràcia.",
      "Locally called the 'House of Bones'.",
      "The roof represents a dragon's back.",
      "Decorated with colorful ceramic mosaics (trencadís).",
      "Part of the UNESCO World Heritage since 2005."
    ]
  }
},
{
  "id": "es-gaudi-casa-mila",
  "type": "landmark",
  "parent": "ES-CT",
  "coords": [
    2.162,
    41.395
  ],
  "name": {
    "de": "Casa Milà (La Pedrera)",
    "hu": "Casa Milà (La Pedrera)",
    "ro": "Casa Milà (La Pedrera)",
    "en": "Casa Milà (La Pedrera)"
  },
  "image": "/geo-images/spain/gaudi-casa-mila.webp",
  "description": {
    "de": "Casa Milà, auch bekannt als La Pedrera, ist ein weiteres ikonisches Werk von Antoni Gaudí. Es war das letzte private Wohnhaus, das der Architekt entwarf. Die unkonventionelle steinerne Fassade und die schmiedeeisernen Balkone machen es zu einem Meisterwerk des Modernismus.",
    "hu": "A Casa Milà, más néven La Pedrera, Antoni Gaudí újabb ikonikus alkotása. Ez volt az építész által tervezett utolsó magánlakás. A rendhagyó kőhomlokzat és a kovácsoltvas erkélyek a modernizmus mesterművévé teszik.",
    "ro": "Casa Milà, cunoscută și sub numele de La Pedrera, este o altă lucrare iconică a lui Antoni Gaudí. A fost ultima reședință privată proiectată de arhitect. Fațada sa neconvențională din piatră și balcoanele din fier forjat o fac o capodoperă a modernismului.",
    "en": "Casa Milà, also known as La Pedrera, is another iconic work by Antoni Gaudí. It was the last private residence designed by the architect. Its unconventional stone facade and wrought iron balconies make it a masterpiece of Modernism."
  },
  "facts": {
    "de": [
      "Entworfen von Antoni Gaudí.",
      "Erbaut zwischen 1906 und 1912.",
      "La Pedrera bedeutet 'der Steinbruch'.",
      "Bekannt für seine surrealen Schornsteine auf dem Dach.",
      "Hat keine tragenden Wände, nur Säulen.",
      "Seit 1984 UNESCO-Weltkulturerbe."
    ],
    "hu": [
      "Antoni Gaudí tervezte.",
      "1906 és 1912 között épült.",
      "A La Pedrera jelentése 'a kőbánya'.",
      "A tetőn lévő szürreális kéményekről ismert.",
      "Nincsenek teherhordó falai, csak oszlopai.",
      "1984 óta UNESCO világörökség."
    ],
    "ro": [
      "Proiectată de Antoni Gaudí.",
      "Construită între 1906 și 1912.",
      "La Pedrera înseamnă 'cariera de piatră'.",
      "Renumită pentru coșurile de fum suprarealiste de pe acoperiș.",
      "Nu are pereți portanți, ci doar stâlpi.",
      "Patrimoniu Mondial UNESCO din 1984."
    ],
    "en": [
      "Designed by Antoni Gaudí.",
      "Built between 1906 and 1912.",
      "La Pedrera means 'the stone quarry'.",
      "Famous for its surreal chimneys on the roof.",
      "Has no load-bearing walls, only columns.",
      "UNESCO World Heritage site since 1984."
    ]
  }
},
{
  "id": "es-picasso-museum",
  "type": "landmark",
  "parent": "ES-CT",
  "coords": [
    2.18,
    41.385
  ],
  "name": {
    "de": "Picasso-Museum",
    "hu": "Picasso Múzeum",
    "ro": "Muzeul Picasso",
    "en": "Picasso Museum Barcelona"
  },
  "image": "/geo-images/spain/picasso-museum.webp",
  "description": {
    "de": "Das Picasso-Museum in Barcelona beherbergt eine der umfangreichsten Sammlungen von Kunstwerken von Pablo Picasso. Es konzentriert sich besonders auf seine frühen Werke und seine prägenden Jahre in der Stadt. Das Museum befindet sich in fünf mittelalterlichen Palästen im Viertel El Born.",
    "hu": "A barcelonai Picasso Múzeum Pablo Picasso műveinek egyik legkiterjedtebb gyűjteményének ad otthont. Különös hangsúlyt fektet korai műveire és a városban töltött meghatározó éveire. A múzeum öt középkori palotában kapott helyet az El Born negyedben.",
    "ro": "Muzeul Picasso din Barcelona găzduiește una dintre cele mai vaste colecții de opere de artă ale lui Pablo Picasso. Se concentrează în special pe lucrările sale timpurii și pe anii săi de formare în oraș. Muzeul este situat în cinci palate medievale din cartierul El Born.",
    "en": "The Picasso Museum in Barcelona houses one of the most extensive collections of artworks by Pablo Picasso. It focuses particularly on his early works and his formative years in the city. The museum is located in five medieval palaces in the El Born district."
  },
  "facts": {
    "de": [
      "Eröffnet im Jahr 1963.",
      "Beherbergt über 4.000 Werke von Picasso.",
      "Erstes Museum, das Picasso gewidmet wurde.",
      "Untergebracht in fünf zusammenhängenden gotischen Palästen.",
      "Zeigt Picassos Serie 'Las Meninas'.",
      "Veranschaulicht Picassos tiefe Verbundenheit mit Barcelona."
    ],
    "hu": [
      "1963-ban nyílt meg.",
      "Több mint 4000 Picasso-művet őriz.",
      "Az első Picassónak szentelt múzeum volt.",
      "Öt egymásba nyíló gótikus palotában található.",
      "Kiállítják itt a 'Las Meninas' sorozatát.",
      "Bemutatja Picasso mély kötődését Barcelonához."
    ],
    "ro": [
      "Deschis în 1963.",
      "Găzduiește peste 4.000 de lucrări ale lui Picasso.",
      "Primul muzeu dedicat lui Picasso.",
      "Găzduit în cinci palate gotice interconectate.",
      "Expune seria 'Las Meninas' a lui Picasso.",
      "Ilustrează legătura profundă a lui Picasso cu Barcelona."
    ],
    "en": [
      "Opened in 1963.",
      "Houses over 4,000 works by Picasso.",
      "First museum dedicated to Picasso.",
      "Housed in five interconnected Gothic palaces.",
      "Displays Picasso's 'Las Meninas' series.",
      "Illustrates Picasso's deep connection with Barcelona."
    ]
  }
},
{
  "id": "es-montserrat",
  "type": "mountain",
  "parent": "ES-CT",
  "coords": [
    1.836,
    41.604
  ],
  "name": {
    "de": "Kloster Montserrat",
    "hu": "Montserrat kolostor",
    "ro": "Mănăstirea Montserrat",
    "en": "Montserrat monastery"
  },
  "image": "/geo-images/spain/montserrat.webp",
  "description": {
    "de": "Das Kloster Montserrat liegt spektakulär eingebettet in den gezackten Felsen des gleichnamigen Gebirges in Katalonien. Es ist ein wichtiges spirituelles Zentrum und beherbergt die berühmte Schwarze Madonna. Besucher genießen sowohl die religiöse Bedeutung als auch die atemberaubende Aussicht.",
    "hu": "A Montserrat kolostor látványosan bújik meg a névadó hegyvidék csipkézett sziklái között Katalóniában. Fontos szellemi központ, és a híres Fekete Madonna otthona. A látogatók a vallási jelentőségét és a lélegzetelállító kilátást egyaránt élvezik.",
    "ro": "Mănăstirea Montserrat este spectaculos înconjurată de stâncile zimțate ale lanțului muntos cu același nume din Catalonia. Este un centru spiritual important și adăpostește celebra Madonă Neagră. Vizitatorii se bucură atât de semnificația sa religioasă, cât și de priveliștile uimitoare.",
    "en": "The Montserrat Monastery is spectacularly nestled in the jagged rocks of the mountain range of the same name in Catalonia. It is an important spiritual center and houses the famous Black Madonna. Visitors enjoy both its religious significance and breathtaking views."
  },
  "facts": {
    "de": [
      "Gegründet im 11. Jahrhundert.",
      "Liegt auf etwa 720 Metern Höhe.",
      "Heimat der 'La Moreneta' (Schwarze Madonna).",
      "Verfügt über einen der ältesten Knabenchöre Europas, die Escolania.",
      "Bietet Zugang über eine Seilbahn und eine Zahnradbahn.",
      "Ein beliebtes Ziel für Pilger und Wanderer."
    ],
    "hu": [
      "A 11. században alapították.",
      "Körülbelül 720 méteres magasságban fekszik.",
      "A 'La Moreneta' (Fekete Madonna) otthona.",
      "Itt működik Európa egyik legrégebbi fiúkórusa, az Escolania.",
      "Drótkötélpályán és fogaskerekűn is megközelíthető.",
      "Népszerű célpont zarándokok és túrázók számára."
    ],
    "ro": [
      "Fondată în secolul al XI-lea.",
      "Situată la aproximativ 720 de metri altitudine.",
      "Casa 'La Moreneta' (Madona Neagră).",
      "Găzduiește unul dintre cele mai vechi coruri de băieți din Europa, Escolania.",
      "Accesibilă cu o telecabină și o cale ferată cu cremalieră.",
      "O destinație populară pentru pelerini și drumeți."
    ],
    "en": [
      "Founded in the 11th century.",
      "Located at about 720 meters altitude.",
      "Home to 'La Moreneta' (Black Madonna).",
      "Features one of Europe's oldest boys' choirs, the Escolania.",
      "Offers access via a cable car and a rack railway.",
      "A popular destination for pilgrims and hikers."
    ]
  }
},
{
  "id": "es-valencia-oceanografic",
  "type": "kid-landmark",
  "parent": "ES-VC",
  "coords": [
    -0.352,
    39.453
  ],
  "name": {
    "de": "Oceanogràfic Valencia",
    "hu": "Oceanogràfic Valencia",
    "ro": "Oceanogràfic Valencia",
    "en": "Oceanogràfic Valencia"
  },
  "image": "/geo-images/spain/valencia-oceanografic.webp",
  "description": {
    "de": "Das Oceanogràfic in Valencia ist das größte Aquarium in Europa und ein Paradies für Meeresliebhaber. Es beherbergt tausende von Tieren aus verschiedenen marinen Ökosystemen auf der ganzen Welt. Besonders beeindruckend ist der Unterwassertunnel, in dem man Haie und Rochen hautnah erleben kann.",
    "hu": "A valenciai Oceanogràfic Európa legnagyobb akváriuma és a tenger szerelmeseinek paradicsoma. Több ezer állatnak ad otthont a világ különböző tengeri ökoszisztémáiból. Különösen lenyűgöző a víz alatti alagút, ahol cápákat és rájákat láthatunk testközelből.",
    "ro": "Oceanogràfic din Valencia este cel mai mare acvariu din Europa și un paradis pentru iubitorii de mare. Găzduiește mii de animale din diverse ecosisteme marine din întreaga lume. Deosebit de impresionant este tunelul subacvatic, unde puteți vedea rechini și pisici de mare de aproape.",
    "en": "The Oceanogràfic in Valencia is the largest aquarium in Europe and a paradise for marine lovers. It houses thousands of animals from various marine ecosystems around the world. Especially impressive is the underwater tunnel where you can experience sharks and rays up close."
  },
  "facts": {
    "de": [
      "Größtes Aquarium in Europa.",
      "Beherbergt über 45.000 Tiere aus 500 Arten.",
      "Architektur von Félix Candela entworfen.",
      "Umfasst arktische, antarktische und tropische Lebensräume.",
      "Besitzt ein großes Delfinarium.",
      "Bietet Programme zum Schutz der Meerestiere an."
    ],
    "hu": [
      "Európa legnagyobb akváriuma.",
      "Több mint 500 faj 45 000 egyedének ad otthont.",
      "Az épületet Félix Candela tervezte.",
      "Sarkvidéki, antarktiszi és trópusi élőhelyeket is bemutat.",
      "Nagy delfináriummal is rendelkezik.",
      "Tengeri állatvédelmi programokat működtet."
    ],
    "ro": [
      "Cel mai mare acvariu din Europa.",
      "Găzduiește peste 45.000 de animale din 500 de specii.",
      "Arhitectură proiectată de Félix Candela.",
      "Include habitate arctice, antarctice și tropicale.",
      "Are un delfinariu mare.",
      "Oferă programe de conservare marină."
    ],
    "en": [
      "Largest aquarium in Europe.",
      "Houses over 45,000 animals from 500 species.",
      "Architecture designed by Félix Candela.",
      "Includes Arctic, Antarctic, and tropical habitats.",
      "Features a large dolphinarium.",
      "Offers marine conservation programs."
    ]
  }
},
{
  "id": "es-valencia-city-of-arts",
  "type": "landmark",
  "parent": "ES-VC",
  "coords": [
    -0.354,
    39.454
  ],
  "name": {
    "de": "Stadt der Künste und Wissenschaften",
    "hu": "Művészetek és Tudományok Városa",
    "ro": "Orașul Artelor și Științelor",
    "en": "City of Arts and Sciences"
  },
  "image": "/geo-images/spain/valencia-city-of-arts.webp",
  "description": {
    "de": "Die Stadt der Künste und Wissenschaften ist ein futuristischer Gebäudekomplex in Valencia. Entworfen von Santiago Calatrava, vereint sie Wissenschaft, Kunst und Unterhaltung in einer einzigartigen architektonischen Landschaft. Es ist das moderne Wahrzeichen der Stadt.",
    "hu": "A Művészetek és Tudományok Városa egy futurisztikus épületkomplexum Valenciában. A Santiago Calatrava által tervezett együttes a tudományt, a művészetet és a szórakozást ötvözi egyedülálló építészeti környezetben. Ez a város modern jelképe.",
    "ro": "Orașul Artelor și Științelor este un complex de clădiri futuriste din Valencia. Proiectat de Santiago Calatrava, combină știința, arta și divertismentul într-un peisaj arhitectural unic. Este reperul modern al orașului.",
    "en": "The City of Arts and Sciences is a futuristic building complex in Valencia. Designed by Santiago Calatrava, it combines science, art, and entertainment in a unique architectural landscape. It is the modern landmark of the city."
  },
  "facts": {
    "de": [
      "Erbaut im ehemaligen Flussbett des Turia.",
      "Entworfen vom Stararchitekten Santiago Calatrava.",
      "Enthält ein IMAX-Kino (L'Hemisfèric).",
      "Umfasst ein interaktives Wissenschaftsmuseum.",
      "Der Palau de les Arts beherbergt das Opernhaus.",
      "Beliebte Kulisse für Science-Fiction-Filme und Serien."
    ],
    "hu": [
      "A Turia folyó kiszáradt medrében épült.",
      "A sztárépítész, Santiago Calatrava tervezte.",
      "Itt található az L'Hemisfèric IMAX mozi.",
      "Interaktív tudományos múzeumot is magában foglal.",
      "A Palau de les Arts ad otthont az operaháznak.",
      "Népszerű forgatási helyszín sci-fi filmekhez és sorozatokhoz."
    ],
    "ro": [
      "Construit în fosta albie a râului Turia.",
      "Proiectat de arhitectul vedetă Santiago Calatrava.",
      "Conține un cinematograf IMAX (L'Hemisfèric).",
      "Include un muzeu interactiv de știință.",
      "Palau de les Arts găzduiește opera.",
      "Decor popular pentru filme și seriale SF."
    ],
    "en": [
      "Built in the former riverbed of the Turia.",
      "Designed by star architect Santiago Calatrava.",
      "Contains an IMAX cinema (L'Hemisfèric).",
      "Includes an interactive science museum.",
      "The Palau de les Arts houses the opera house.",
      "Popular backdrop for sci-fi movies and series."
    ]
  }
},
{
  "id": "es-mallorca-palma",
  "type": "city",
  "parent": "ES-IB",
  "coords": [
    2.65,
    39.569
  ],
  "name": {
    "de": "Palma de Mallorca",
    "hu": "Palma de Mallorca",
    "ro": "Palma de Mallorca",
    "en": "Palma de Mallorca"
  },
  "image": "/geo-images/spain/mallorca-palma.webp",
  "description": {
    "de": "Palma ist die Hauptstadt der Baleareninsel Mallorca. Die Stadt beeindruckt durch ihre gewaltige gotische Kathedrale La Seu, die direkt am Meer thront. Neben historischen Sehenswürdigkeiten bietet Palma eine lebhafte Altstadt und wunderschöne Strände in der Nähe.",
    "hu": "Palma Mallorca szigetének fővárosa. A város egyik fő látványossága a közvetlenül a tengerparton magasodó hatalmas gótikus katedrális, a La Seu. A történelmi látnivalók mellett Palma nyüzsgő óvárossal és gyönyörű közeli strandokkal büszkélkedhet.",
    "ro": "Palma este capitala insulei baleare Mallorca. Orașul impresionează prin masiva sa catedrală gotică La Seu, situată chiar pe malul mării. Pe lângă atracțiile istorice, Palma oferă un oraș vechi plin de viață și plaje frumoase în apropiere.",
    "en": "Palma is the capital of the Balearic island of Mallorca. The city impresses with its massive Gothic cathedral, La Seu, which sits right on the seafront. In addition to historical sights, Palma offers a lively old town and beautiful nearby beaches."
  },
  "facts": {
    "de": [
      "Hauptstadt der Autonomen Gemeinschaft der Balearen.",
      "Heimat der Kathedrale La Seu (Baubeginn 1229).",
      "Castell de Bellver ist eine seltene runde Burg.",
      "Verfügt über einen großen internationalen Flughafen.",
      "Malerische Altstadt mit engen Gassen.",
      "Beliebtes Ziel für europäischen Tourismus."
    ],
    "hu": [
      "A Baleár-szigetek autonóm közösség fővárosa.",
      "A La Seu katedrális otthona (építése 1229-ben kezdődött).",
      "A Castell de Bellver egy ritka, kerek alaprajzú vár.",
      "Nagy nemzetközi repülőtérrel rendelkezik.",
      "Festői óvárosa szűk utcácskákkal van tele.",
      "Az európai turizmus egyik legnépszerűbb célpontja."
    ],
    "ro": [
      "Capitala comunității autonome a Insulelor Baleare.",
      "Casa catedralei La Seu (începută în 1229).",
      "Castell de Bellver este un castel rotund rar.",
      "Are un aeroport internațional mare.",
      "Oraș vechi pitoresc, cu străzi înguste.",
      "Destinație populară pentru turismul european."
    ],
    "en": [
      "Capital of the autonomous community of the Balearic Islands.",
      "Home to the La Seu Cathedral (begun in 1229).",
      "Castell de Bellver is a rare circular castle.",
      "Features a large international airport.",
      "Picturesque old town with narrow streets.",
      "Popular destination for European tourism."
    ]
  }
},
{
  "id": "es-ibiza-town",
  "type": "city",
  "parent": "ES-IB",
  "coords": [
    1.433,
    38.906
  ],
  "name": {
    "de": "Ibiza-Stadt",
    "hu": "Ibiza város",
    "ro": "Orașul Ibiza",
    "en": "Ibiza Town"
  },
  "image": "/geo-images/spain/ibiza-town.webp",
  "description": {
    "de": "Ibiza-Stadt, katalanisch Eivissa, ist weltbekannt für ihr pulsierendes Nachtleben und die historische Altstadt Dalt Vila. Die befestigte Oberstadt, umgeben von Renaissance-Mauern, gehört zum UNESCO-Weltkulturerbe. Die Stadt zieht sowohl Partygänger als auch Kulturliebhaber an.",
    "hu": "Ibiza városa (katalánul Eivissa) világszerte ismert pezsgő éjszakai életéről és történelmi óvárosáról, a Dalt Viláról. A reneszánsz falakkal körülvett erődített felsőváros az UNESCO világörökség része. A város a bulizni vágyókat és a kultúra szerelmeseit egyaránt vonzza.",
    "ro": "Orașul Ibiza, în catalană Eivissa, este faimos în întreaga lume pentru viața de noapte vibrantă și orașul vechi istoric Dalt Vila. Orașul de sus fortificat, înconjurat de ziduri renascentiste, este un sit al Patrimoniului Mondial UNESCO. Orașul atrage atât petrecăreți, cât și iubitori de cultură.",
    "en": "Ibiza Town, natively Eivissa, is world-renowned for its vibrant nightlife and the historic Dalt Vila old town. The fortified upper town, surrounded by Renaissance walls, is a UNESCO World Heritage site. The city attracts both partygoers and culture lovers."
  },
  "facts": {
    "de": [
      "Lokaler Name ist Eivissa.",
      "Die Altstadt Dalt Vila ist UNESCO-Weltkulturerbe.",
      "Berühmt für weltbekannte Nachtclubs wie Pacha.",
      "Besitzt wichtige archäologische phönizische Stätten.",
      "Der Hafen zieht viele Luxusyachten an.",
      "Beliebte Urlaubsdestination im Mittelmeer."
    ],
    "hu": [
      "Helyi neve Eivissa.",
      "A Dalt Vila óváros UNESCO világörökség.",
      "Olyan világhírű éjszakai klubokról ismert, mint a Pacha.",
      "Jelentős föníciai régészeti lelőhelyekkel rendelkezik.",
      "A kikötő számos luxusjachtot vonz.",
      "Népszerű nyaralóhely a Földközi-tengeren."
    ],
    "ro": [
      "Numele local este Eivissa.",
      "Orașul vechi Dalt Vila este în Patrimoniul Mondial UNESCO.",
      "Faimos pentru cluburi de noapte de renume mondial precum Pacha.",
      "Are situri arheologice feniciene importante.",
      "Portul atrage multe iahturi de lux.",
      "Destinație populară de vacanță în Marea Mediterană."
    ],
    "en": [
      "Local name is Eivissa.",
      "The old town Dalt Vila is a UNESCO World Heritage site.",
      "Famous for world-renowned nightclubs like Pacha.",
      "Has important Phoenician archaeological sites.",
      "The harbor attracts many luxury yachts.",
      "Popular holiday destination in the Mediterranean."
    ]
  }
},
{
  "id": "es-tenerife-teide",
  "type": "mountain",
  "parent": "ES-CN",
  "coords": [
    -16.644,
    28.273
  ],
  "name": {
    "de": "Pico del Teide",
    "hu": "Teide",
    "ro": "Muntele Teide",
    "en": "Mount Teide"
  },
  "image": "/geo-images/spain/tenerife-teide.webp",
  "description": {
    "de": "Der Pico del Teide auf der Insel Teneriffa ist der höchste Berg Spaniens. Dieser imposante Schichtvulkan bildet das Zentrum des Teide-Nationalparks, der eine einzigartige Mondlandschaft aufweist. Besucher können mit einer Seilbahn bis fast an den Gipfel fahren.",
    "hu": "A Tenerife szigetén magasodó Teide Spanyolország legmagasabb hegye. Ez az impozáns rétegvulkán alkotja a Teide Nemzeti Park központját, amely egyedülálló, holdszerű tájjal rendelkezik. A látogatók drótkötélpályán majdnem a csúcsig feljuthatnak.",
    "ro": "Muntele Teide de pe insula Tenerife este cel mai înalt munte din Spania. Acest stratovulcan impunător formează centrul Parcului Național Teide, care prezintă un peisaj lunar unic. Vizitatorii pot urca cu telecabina aproape de vârf.",
    "en": "Mount Teide on the island of Tenerife is the highest mountain in Spain. This imposing stratovolcano forms the center of the Teide National Park, which features a unique lunar landscape. Visitors can take a cable car almost to the summit."
  },
  "facts": {
    "de": [
      "Höchster Berg Spaniens (3.715 Meter).",
      "Dritthöchster Vulkan der Erde (vom Meeresgrund gemessen).",
      "Teide-Nationalpark ist UNESCO-Weltnaturerbe.",
      "Letzter Ausbruch in der Teide-Region war 1909.",
      "Eine Seilbahn führt bis auf 3.555 Meter Höhe.",
      "Beliebtes Ziel für Sternenbeobachter."
    ],
    "hu": [
      "Spanyolország legmagasabb hegye (3715 méter).",
      "A világ harmadik legmagasabb vulkánja (a tengerfenéktől mérve).",
      "A Teide Nemzeti Park az UNESCO világörökség része.",
      "Utolsó kitörése a Teide régióban 1909-ben volt.",
      "A drótkötélpálya 3555 méteres magasságig visz fel.",
      "A csillagászok és csillagnézők kedvelt célpontja."
    ],
    "ro": [
      "Cel mai înalt munte din Spania (3.715 metri).",
      "Al treilea vulcan ca înălțime din lume (măsurat de la fundul oceanului).",
      "Parcul Național Teide este Patrimoniu Mondial UNESCO.",
      "Ultima erupție în regiunea Teide a fost în 1909.",
      "O telecabină urcă până la 3.555 de metri.",
      "O destinație populară pentru observarea stelelor."
    ],
    "en": [
      "Highest mountain in Spain (3,715 meters).",
      "Third highest volcano on Earth (measured from the ocean floor).",
      "Teide National Park is a UNESCO World Heritage site.",
      "Last eruption in the Teide region was in 1909.",
      "A cable car goes up to 3,555 meters.",
      "A popular destination for stargazers."
    ]
  }
},
{
  "id": "es-gran-canaria-dunes",
  "type": "landmark",
  "parent": "ES-CN",
  "coords": [
    -15.566,
    27.737
  ],
  "name": {
    "de": "Dünen von Maspalomas",
    "hu": "Maspalomas homokdűnéi",
    "ro": "Dunele din Maspalomas",
    "en": "Maspalomas Dunes"
  },
  "image": "/geo-images/spain/gran-canaria-dunes.webp",
  "description": {
    "de": "Die Dünen von Maspalomas sind ein faszinierendes Naturschutzgebiet im Süden Gran Canarias. Sie bieten eine spektakuläre Wüstenlandschaft direkt am Atlantischen Ozean. Das Gebiet umfasst auch eine Oase und einen Palmenhain, die eine reiche Vogelwelt anziehen.",
    "hu": "A maspalomasi dűnék lenyűgöző természetvédelmi területet alkotnak Gran Canaria déli részén. Látványos sivatagi tájat kínálnak közvetlenül az Atlanti-óceán partján. A terület egy oázist és egy pálmaligetet is magában foglal, amelyek gazdag madárvilágot vonzanak.",
    "ro": "Dunele din Maspalomas sunt o rezervație naturală fascinantă în sudul insulei Gran Canaria. Oferă un peisaj deșertic spectaculos chiar la Oceanul Atlantic. Zona include, de asemenea, o oază și o plantație de palmieri care atrag numeroase păsări.",
    "en": "The Maspalomas Dunes are a fascinating nature reserve in the south of Gran Canaria. They offer a spectacular desert landscape right on the Atlantic Ocean. The area also includes an oasis and a palm grove that attract a rich birdlife."
  },
  "facts": {
    "de": [
      "Naturschutzgebiet seit 1987.",
      "Umfasst rund 400 Hektar Fläche.",
      "Die Dünen wandern ständig durch den Wind.",
      "Ein 68 Meter hoher Leuchtturm (Faro) steht in der Nähe.",
      "Die Charca-Oase ist wichtig für Zugvögel.",
      "Beliebter Ort für Touristen und Fotografen."
    ],
    "hu": [
      "1987 óta természetvédelmi terület.",
      "Körülbelül 400 hektáron terül el.",
      "A dűnék a szél miatt folyamatosan vándorolnak.",
      "A közelben áll egy 68 méter magas világítótorony (Faro).",
      "A Charca oázis fontos megálló a költöző madaraknak.",
      "Népszerű hely a turisták és fotósok körében."
    ],
    "ro": [
      "Rezervație naturală din 1987.",
      "Acoperă aproximativ 400 de hectare.",
      "Dunele se mișcă constant din cauza vântului.",
      "Un far de 68 de metri (Faro) se află în apropiere.",
      "Oaza Charca este importantă pentru păsările migratoare.",
      "Loc popular pentru turiști și fotografi."
    ],
    "en": [
      "Nature reserve since 1987.",
      "Covers around 400 hectares.",
      "The dunes are constantly shifting due to the wind.",
      "A 68-meter-high lighthouse (Faro) stands nearby.",
      "The Charca oasis is important for migratory birds.",
      "Popular spot for tourists and photographers."
    ]
  }
},
{
  "id": "es-santander",
  "type": "city",
  "parent": "ES-CB",
  "coords": [
    -3.8,
    43.463
  ],
  "name": {
    "de": "Santander",
    "hu": "Santander",
    "ro": "Santander",
    "en": "Santander"
  },
  "image": "/geo-images/spain/santander.webp",
  "description": {
    "de": "Santander ist die elegante Hauptstadt von Kantabrien an der nordspanischen Küste. Sie ist bekannt für ihre weite Bucht, historische Seebäder und den königlichen Palacio de la Magdalena. Die Stadt kombiniert reiches maritimes Erbe mit moderner Architektur.",
    "hu": "Santander Kantábria elegáns fővárosa Spanyolország északi partján. Tágas öbléről, történelmi tengerparti üdülőhelyeiről és a királyi Palacio de la Magdalena palotáról ismert. A város ötvözi a gazdag tengerészeti örökséget a modern építészettel.",
    "ro": "Santander este eleganta capitală a Cantabriei, pe coasta de nord a Spaniei. Este cunoscută pentru golful său larg, stațiunile balneare istorice și palatul regal Palacio de la Magdalena. Orașul combină o bogată moștenire maritimă cu arhitectura modernă.",
    "en": "Santander is the elegant capital of Cantabria on the northern Spanish coast. It is known for its sweeping bay, historic seaside resorts, and the royal Palacio de la Magdalena. The city combines a rich maritime heritage with modern architecture."
  },
  "facts": {
    "de": [
      "Hauptstadt der Region Kantabrien.",
      "Sitz der historischen Banco Santander.",
      "Der Palacio de la Magdalena war Sommerresidenz der Könige.",
      "Großer Brand im Jahr 1941 zerstörte das historische Zentrum.",
      "Bietet schöne Strände wie den Playa del Sardinero.",
      "Das Centro Botín ist ein neues modernes Kunstzentrum."
    ],
    "hu": [
      "Kantábria régió fővárosa.",
      "A történelmi Banco Santander székhelye.",
      "A Palacio de la Magdalena a királyok nyári rezidenciája volt.",
      "Egy 1941-es nagy tűzvész elpusztította a történelmi központot.",
      "Olyan gyönyörű strandokat kínál, mint a Playa del Sardinero.",
      "A Centro Botín a város új modern művészeti központja."
    ],
    "ro": [
      "Capitala regiunii Cantabria.",
      "Sediul băncii istorice Banco Santander.",
      "Palacio de la Magdalena a fost reședința de vară a regilor.",
      "Un mare incendiu în 1941 a distrus centrul istoric.",
      "Oferă plaje frumoase precum Playa del Sardinero.",
      "Centro Botín este un nou centru de artă modernă."
    ],
    "en": [
      "Capital of the Cantabria region.",
      "Headquarters of the historic Banco Santander.",
      "The Palacio de la Magdalena was the summer residence of kings.",
      "A great fire in 1941 destroyed the historic center.",
      "Offers beautiful beaches like Playa del Sardinero.",
      "The Centro Botín is a new modern art center."
    ]
  }
},
{
  "id": "es-oviedo",
  "type": "city",
  "parent": "ES-AS",
  "coords": [
    -5.844,
    43.362
  ],
  "name": {
    "de": "Oviedo",
    "hu": "Oviedo",
    "ro": "Oviedo",
    "en": "Oviedo"
  },
  "image": "/geo-images/spain/oviedo.webp",
  "description": {
    "de": "Oviedo ist die historische Hauptstadt des Fürstentums Asturien. Die Stadt ist berühmt für ihre einzigartige präromanische Architektur, darunter beeindruckende Kirchen aus dem 9. Jahrhundert. Ihre charmante Altstadt lädt zum Flanieren und Genießen von asturischem Apfelwein (Sidra) ein.",
    "hu": "Oviedo az Asztúriai Hercegség történelmi fővárosa. A város egyedülálló preromán építészetéről, köztük a 9. századból származó lenyűgöző templomairól híres. Hangulatos óvárosa ideális sétákra és a hagyományos asztúriai almabor (sidra) kóstolására.",
    "ro": "Oviedo este capitala istorică a Principatului Asturiei. Orașul este faimos pentru arhitectura sa preromanică unică, inclusiv biserici impresionante din secolul al IX-lea. Orașul său vechi fermecător vă invită să vă plimbați și să vă bucurați de cidrul asturian (sidra).",
    "en": "Oviedo is the historic capital of the Principality of Asturias. The city is famous for its unique pre-Romanesque architecture, including impressive 9th-century churches. Its charming old town invites you to stroll and enjoy Asturian cider (sidra)."
  },
  "facts": {
    "de": [
      "Hauptstadt von Asturien.",
      "Heimat präromanischer Denkmäler (UNESCO-Welterbe).",
      "Bekannt für seine Apfelwein-Kultur (Sidrerías).",
      "Wichtige Station auf dem nördlichen Jakobsweg.",
      "Verleiht jährlich die renommierten Prinzessin-von-Asturien-Preise.",
      "Viele Skulpturen zieren die Fußgängerzonen."
    ],
    "hu": [
      "Asztúria fővárosa.",
      "Preromán műemlékek (UNESCO világörökség) otthona.",
      "Almabor-kultúrájáról (sidrerías) ismert.",
      "Az Északi Szent Jakab-út fontos állomása.",
      "Itt adják át évente az Asztúria Hercegnője díjakat.",
      "Sétálóutcáit számos szobor díszíti."
    ],
    "ro": [
      "Capitala Asturiei.",
      "Acasă la monumentele preromanice (Patrimoniu UNESCO).",
      "Cunoscut pentru cultura cidrului (sidrerías).",
      "Oprire importantă pe ruta nordică a Camino de Santiago.",
      "Acordă anual prestigioasele premii Prințesa Asturiei.",
      "Multe sculpturi împodobesc zonele pietonale."
    ],
    "en": [
      "Capital of Asturias.",
      "Home to pre-Romanesque monuments (UNESCO World Heritage).",
      "Known for its cider culture (sidrerías).",
      "Important stop on the northern Camino de Santiago.",
      "Annually awards the prestigious Princess of Asturias Awards.",
      "Many sculptures adorn the pedestrian zones."
    ]
  }
},
{
  "id": "es-pamplona-bull",
  "type": "city",
  "parent": "ES-NC",
  "coords": [
    -1.645,
    42.817
  ],
  "name": {
    "de": "Pamplona",
    "hu": "Pamplona",
    "ro": "Pamplona",
    "en": "Pamplona"
  },
  "image": "/geo-images/spain/pamplona-bull.webp",
  "description": {
    "de": "Pamplona ist die historische Hauptstadt der Region Navarra im Norden Spaniens. Sie ist weltweit berühmt für das San-Fermín-Fest mit dem traditionellen Stierlauf (Encierro). Jenseits dieses Spektakels bietet die Stadt gut erhaltene Stadtmauern und eine gotische Kathedrale.",
    "hu": "Pamplona az észak-spanyolországi Navarra régió történelmi fővárosa. Világszerte a San Fermín fesztiválról és a hagyományos bikafuttatásról (encierro) híres. Ezen a látványosságon túl a város jó állapotban fennmaradt városfalakkal és egy gótikus katedrálissal büszkélkedhet.",
    "ro": "Pamplona este capitala istorică a regiunii Navarra din nordul Spaniei. Este faimoasă în întreaga lume pentru festivalul San Fermín, cu tradiționala cursă de tauri (encierro). Dincolo de acest spectacol, orașul oferă ziduri bine conservate și o catedrală gotică.",
    "en": "Pamplona is the historic capital of the Navarre region in northern Spain. It is world-famous for the San Fermín festival featuring the traditional running of the bulls (encierro). Beyond this spectacle, the city offers well-preserved city walls and a Gothic cathedral."
  },
  "facts": {
    "de": [
      "Berühmt für das San-Fermín-Fest im Juli.",
      "Bekannt gemacht durch Ernest Hemingways Roman 'Fiesta'.",
      "Wichtige Station auf dem französischen Jakobsweg.",
      "Besitzt eine der am besten erhaltenen Zitadellen Europas.",
      "Gegründet um 74 v. Chr. vom römischen General Pompejus.",
      "Verfügt über viele Grünflächen und Parks."
    ],
    "hu": [
      "Híres a júliusi San Fermín fesztiválról.",
      "Ernest Hemingway 'Fiesta' című regénye tette világszerte ismertté.",
      "Fontos megálló a Francia Szent Jakab-úton.",
      "Itt található Európa egyik legjobb állapotban lévő fellegvára.",
      "Kr. e. 74 körül alapította Pompeius római hadvezér.",
      "Sok zöldterülettel és parkkal rendelkezik."
    ],
    "ro": [
      "Faimos pentru festivalul San Fermín din iulie.",
      "Făcut cunoscut de romanul lui Ernest Hemingway, 'Fiesta'.",
      "Oprire importantă pe Calea Franceză a Camino de Santiago.",
      "Are una dintre cele mai bine conservate cetăți din Europa.",
      "Fondat în jurul anului 74 î.Hr. de generalul roman Pompei.",
      "Are multe zone verzi și parcuri."
    ],
    "en": [
      "Famous for the San Fermín festival in July.",
      "Made known by Ernest Hemingway's novel 'The Sun Also Rises'.",
      "Important stop on the French Way of the Camino de Santiago.",
      "Has one of the best-preserved citadels in Europe.",
      "Founded around 74 BC by the Roman general Pompey.",
      "Features many green spaces and parks."
    ]
  }
},
{
  "id": "es-zaragoza-pilar",
  "type": "landmark",
  "parent": "ES-AR",
  "coords": [
    -0.878,
    41.656
  ],
  "name": {
    "de": "Basílica del Pilar",
    "hu": "Pilar-bazilika",
    "ro": "Basílica del Pilar",
    "en": "Basílica del Pilar Zaragoza"
  },
  "image": "/geo-images/spain/zaragoza-pilar.webp",
  "description": {
    "de": "Die Basílica de Nuestra Señora del Pilar ist eine prachtvolle Barockkirche in Zaragoza. Sie thront majestätisch am Ufer des Flusses Ebro und zieht jährlich Millionen Pilger an. Der Legende nach erschien hier die Jungfrau Maria dem Apostel Jakobus auf einer Säule (Pilar).",
    "hu": "A Nuestra Señora del Pilar bazilika egy csodálatos barokk templom Zaragozában. Fenségesen magasodik az Ebro folyó partján, és évente zarándokok millióit vonzza. A legenda szerint itt jelent meg Szűz Mária Jakab apostolnak egy oszlopon (pilar).",
    "ro": "Basílica de Nuestra Señora del Pilar este o magnifică biserică barocă din Zaragoza. Se înalță maiestuos pe malul râului Ebro și atrage milioane de pelerini în fiecare an. Potrivit legendei, Fecioara Maria i-a apărut aici apostolului Iacob pe un stâlp (pilar).",
    "en": "The Basílica de Nuestra Señora del Pilar is a magnificent Baroque church in Zaragoza. It sits majestically on the banks of the Ebro River and attracts millions of pilgrims annually. According to legend, the Virgin Mary appeared here to the Apostle James on a pillar (pilar)."
  },
  "facts": {
    "de": [
      "Gilt als das erste Marienheiligtum der Christenheit.",
      "Die heutige Barockkirche wurde im 17. Jahrhundert begonnen.",
      "Einige der Kuppelfresken stammen von Francisco de Goya.",
      "Befindet sich am Ufer des Flusses Ebro.",
      "Die Fiesta del Pilar wird jeden Oktober groß gefeiert.",
      "Zwei Fliegerbomben aus dem Spanischen Bürgerkrieg schlugen ein, explodierten aber nicht."
    ],
    "hu": [
      "A kereszténység első Mária-kegyhelyének tartják.",
      "A mai barokk templom építése a 17. században kezdődött.",
      "Néhány kupolafreskót Francisco de Goya festett.",
      "Az Ebro folyó partján található.",
      "A Fiesta del Pilar fesztivált minden októberben ünneplik.",
      "A spanyol polgárháborúban két légibomba is eltalálta, de nem robbantak fel."
    ],
    "ro": [
      "Considerat primul altar marian din creștinătate.",
      "Actuala biserică barocă a fost începută în secolul al XVII-lea.",
      "Unele dintre frescele de pe dom au fost pictate de Francisco de Goya.",
      "Situată pe malul râului Ebro.",
      "Festivalul Fiesta del Pilar este sărbătorit în fiecare octombrie.",
      "Două bombe din Războiul Civil Spaniol au lovit-o, dar nu au explodat."
    ],
    "en": [
      "Considered the first Marian shrine in Christianity.",
      "The current Baroque church was begun in the 17th century.",
      "Some of the dome frescoes were painted by Francisco de Goya.",
      "Located on the banks of the Ebro River.",
      "The Fiesta del Pilar is heavily celebrated every October.",
      "Two aerial bombs from the Spanish Civil War hit it but failed to explode."
    ]
  }
},
{
  "id": "es-malaga-alcazaba",
  "type": "historical",
  "parent": "ES-AN",
  "coords": [
    -4.418,
    36.722
  ],
  "name": {
    "de": "Alcazaba von Málaga",
    "hu": "Málagai Alcazaba",
    "ro": "Alcazaba din Málaga",
    "en": "Alcazaba Málaga"
  },
  "image": "/geo-images/spain/malaga-alcazaba.webp",
  "description": {
    "de": "Die Alcazaba von Málaga ist eine maurische Palastanlage aus dem 11. Jahrhundert. Sie thront auf einem Hügel über der Stadt und bot eine hervorragende Verteidigungsposition. Die Festung beeindruckt mit ihren verzierten Gärten, Innenhöfen und der weiten Aussicht auf das Meer.",
    "hu": "A málagai Alcazaba egy 11. századi mór palotaerőd. A város feletti dombon magasodva kiváló védelmi pozíciót nyújtott. Az erőd díszes kertjeivel, belső udvaraival és a tengerre nyíló széles kilátással nyűgözi le a látogatókat.",
    "ro": "Alcazaba din Málaga este o fortăreață palat maură din secolul al XI-lea. Este așezată pe un deal deasupra orașului, oferind o poziție defensivă excelentă. Fortăreața impresionează prin grădinile sale ornamentate, curțile interioare și priveliștea largă spre mare.",
    "en": "The Alcazaba of Málaga is an 11th-century Moorish palace fortress. Perched on a hill above the city, it offered an excellent defensive position. The fortress impresses with its ornate gardens, courtyards, and sweeping views of the sea."
  },
  "facts": {
    "de": [
      "Erbaut von der Hammudiden-Dynastie im frühen 11. Jahrhundert.",
      "Eine der besterhaltenen Alcazabas in Spanien.",
      "Liegt oberhalb der Überreste eines antiken römischen Theaters.",
      "Durch einen gemauerten Gang mit der Burg Gibralfaro verbunden.",
      "Kombiniert militärische Befestigung mit Palastarchitektur.",
      "Verfügt über ein ausgeklügeltes Bewässerungssystem."
    ],
    "hu": [
      "A Hammúdida-dinasztia építette a 11. század elején.",
      "Spanyolország egyik legjobb állapotban fennmaradt alcazabája.",
      "Egy ókori római színház romjai felett fekszik.",
      "Egy falazott folyosó köti össze a Gibralfaro várral.",
      "A katonai erődítményt palotaépítészettel ötvözi.",
      "Kifinomult öntözőrendszerrel rendelkezik."
    ],
    "ro": [
      "Construit de dinastia Hammudid la începutul secolului al XI-lea.",
      "Una dintre cele mai bine conservate alcazaba din Spania.",
      "Situat deasupra ruinelor unui vechi teatru roman.",
      "Conectată la Castelul Gibralfaro printr-un coridor cu ziduri.",
      "Combină fortificația militară cu arhitectura de palat.",
      "Are un sistem de irigare sofisticat."
    ],
    "en": [
      "Built by the Hammudid dynasty in the early 11th century.",
      "One of the best-preserved alcazabas in Spain.",
      "Situated above the remains of an ancient Roman theater.",
      "Connected to the Gibralfaro Castle by a walled corridor.",
      "Combines military fortification with palace architecture.",
      "Features a sophisticated irrigation system."
    ]
  }
},
{
  "id": "es-ronda",
  "type": "city",
  "parent": "ES-AN",
  "coords": [
    -5.164,
    36.742
  ],
  "name": {
    "de": "Ronda",
    "hu": "Ronda",
    "ro": "Ronda",
    "en": "Ronda"
  },
  "image": "/geo-images/spain/ronda.webp",
  "description": {
    "de": "Ronda ist eine der spektakulärsten Städte Andalusiens, berühmt für ihre Lage auf einem Felsplateau, das durch eine tiefe Schlucht (El Tajo) geteilt wird. Die beeindruckende Brücke Puente Nuevo verbindet die Altstadt mit den neueren Vierteln. Ronda ist auch eine der Wiegen des modernen Stierkampfs.",
    "hu": "Ronda Andalúzia egyik leglátványosabb városa, amely egy mély szurdok (El Tajo) által kettészelt sziklafennsíkon fekszik. A lenyűgöző Puente Nuevo híd köti össze az óvárost az újabb negyedekkel. Ronda egyben a modern bikaviadalok egyik bölcsője is.",
    "ro": "Ronda este unul dintre cele mai spectaculoase orașe din Andaluzia, faimos pentru locația sa pe un platou stâncos împărțit de un defileu adânc (El Tajo). Impresionantul pod Puente Nuevo face legătura între orașul vechi și cartierele mai noi. Ronda este, de asemenea, unul dintre leagănele luptelor cu tauri moderne.",
    "en": "Ronda is one of the most spectacular cities in Andalusia, famous for its location on a rocky plateau divided by a deep gorge (El Tajo). The impressive Puente Nuevo bridge connects the old town with the newer districts. Ronda is also one of the cradles of modern bullfighting."
  },
  "facts": {
    "de": [
      "Die Schlucht El Tajo ist über 100 Meter tief.",
      "Die Puente Nuevo wurde im späten 18. Jahrhundert fertiggestellt.",
      "Die Stierkampfarena Plaza de Toros gehört zu den ältesten Spaniens.",
      "Ernest Hemingway und Orson Welles verbrachten hier viel Zeit.",
      "Wichtiger Ort auf der Route der 'Weißen Dörfer' (Pueblos Blancos).",
      "Besitzt gut erhaltene arabische Bäder aus dem 13. Jahrhundert."
    ],
    "hu": [
      "Az El Tajo szurdok több mint 100 méter mély.",
      "A Puente Nuevo (Új Híd) a 18. század végén készült el.",
      "A Plaza de Toros bikaviadal-aréna Spanyolország egyik legrégebbi ilyen épülete.",
      "Ernest Hemingway és Orson Welles sok időt töltött itt.",
      "A 'Fehér falvak' (Pueblos Blancos) útvonalának fontos állomása.",
      "Jó állapotban fennmaradt, 13. századi arab fürdőkkel rendelkezik."
    ],
    "ro": [
      "Defileul El Tajo are o adâncime de peste 100 de metri.",
      "Podul Puente Nuevo a fost finalizat la sfârșitul secolului al XVIII-lea.",
      "Arena de tauri Plaza de Toros este una dintre cele mai vechi din Spania.",
      "Ernest Hemingway și Orson Welles au petrecut mult timp aici.",
      "Un loc important pe traseul 'Satelor Albe' (Pueblos Blancos).",
      "Are băi arabe bine conservate din secolul al XIII-lea."
    ],
    "en": [
      "The El Tajo gorge is over 100 meters deep.",
      "The Puente Nuevo bridge was completed in the late 18th century.",
      "The Plaza de Toros is one of the oldest bullrings in Spain.",
      "Ernest Hemingway and Orson Welles spent a lot of time here.",
      "An important town on the route of the 'White Villages' (Pueblos Blancos).",
      "Features well-preserved Arab baths from the 13th century."
    ]
  }
},
{
  "id": "es-setenil-de-las-bodegas",
  "type": "city",
  "parent": "ES-AN",
  "coords": [
    -5.18,
    36.857
  ],
  "name": {
    "de": "Setenil de las Bodegas",
    "hu": "Setenil de las Bodegas",
    "ro": "Setenil de las Bodegas",
    "en": "Setenil de las Bodegas"
  },
  "image": "/geo-images/spain/setenil-de-las-bodegas.webp",
  "description": {
    "de": "Setenil de las Bodegas ist ein einzigartiges andalusisches Dorf. Viele seiner weiß getünchten Häuser sind direkt in die steilen Felswände einer Flussschlucht hineingebaut. Diese ungewöhnliche Höhlenarchitektur spendet im heißen Sommer Schatten und Kühle.",
    "hu": "Setenil de las Bodegas egy egyedülálló andalúz falu. Számos fehérre meszelt házát közvetlenül egy folyószurdok meredek sziklafalaiba vájták. Ez a szokatlan barlangépítészet hűvöset és árnyékot nyújt a forró nyárban.",
    "ro": "Setenil de las Bodegas este un sat andaluz unic. Multe dintre casele sale văruite în alb sunt construite direct în stâncile abrupte ale unui defileu al râului. Această arhitectură de peșteră neobișnuită oferă umbră și răcoare în verile fierbinți.",
    "en": "Setenil de las Bodegas is a unique Andalusian village. Many of its whitewashed houses are built directly into the steep cliffs of a river gorge. This unusual cave architecture provides shade and coolness during the hot summers."
  },
  "facts": {
    "de": [
      "Gehört zu den 'Pueblos Blancos' (Weißen Dörfern) Andalusiens.",
      "Häuser sind teilweise komplett vom überhängenden Felsen bedeckt.",
      "Der Fluss Trejo hat die Schlucht geformt.",
      "Der Name 'Bodegas' stammt von ehemaligen Weinkellereien.",
      "Bekannt für lokale Produkte wie Olivenöl und Chorizo.",
      "War eine stark umkämpfte Festung während der Reconquista."
    ],
    "hu": [
      "Az andalúziai 'Pueblos Blancos' (Fehér falvak) egyike.",
      "A házak egy részét teljesen beborítják a kinyúló sziklák.",
      "A szurdokot a Trejo folyó vájta ki.",
      "A 'Bodegas' név a korábbi borászatokra utal.",
      "Helyi termékeiről, például olívaolajáról és chorizójáról is ismert.",
      "Sokat vitatott erődítmény volt a Reconquista idején."
    ],
    "ro": [
      "Aparține de 'Pueblos Blancos' (Satele Albe) din Andaluzia.",
      "Casele sunt parțial acoperite complet de stânca surplombantă.",
      "Râul Trejo a sculptat defileul.",
      "Numele 'Bodegas' provine de la fostele crame.",
      "Cunoscut pentru produsele locale precum uleiul de măsline și chorizo.",
      "A fost o fortăreață puternic contestată în timpul Reconquistei."
    ],
    "en": [
      "Belongs to the 'Pueblos Blancos' (White Villages) of Andalusia.",
      "Houses are sometimes completely covered by the overhanging rock.",
      "The Trejo river carved the gorge.",
      "The name 'Bodegas' comes from former wineries.",
      "Known for local products like olive oil and chorizo.",
      "Was a heavily contested fortress during the Reconquista."
    ]
  }
},
{
  "id": "es-sierra-nevada-np",
  "type": "mountain",
  "parent": "ES-AN",
  "coords": [
    -3.367,
    37.055
  ],
  "name": {
    "de": "Sierra Nevada Nationalpark",
    "hu": "Sierra Nevada Nemzeti Park",
    "ro": "Parcul Național Sierra Nevada",
    "en": "Sierra Nevada NP"
  },
  "image": "/geo-images/spain/sierra-nevada-np.webp",
  "description": {
    "de": "Der Sierra Nevada Nationalpark in Südspanien umfasst das höchste Gebirge der Iberischen Halbinsel. Er bietet im Winter exzellente Möglichkeiten zum Skifahren und im Sommer großartige Wanderwege. Die einzigartige Flora und Fauna macht ihn zu einem wertvollen Biosphärenreservat.",
    "hu": "A dél-spanyolországi Sierra Nevada Nemzeti Park az Ibériai-félsziget legmagasabb hegységét foglalja magában. Télen kiváló síelési lehetőségeket, nyáron pedig nagyszerű túraútvonalakat kínál. Egyedülálló növény- és állatvilága értékes bioszféra-rezervátummá teszi.",
    "ro": "Parcul Național Sierra Nevada din sudul Spaniei cuprinde cel mai înalt lanț muntos din Peninsula Iberică. Oferă oportunități excelente de schi iarna și trasee grozave de drumeții vara. Flora și fauna sa unică îl fac o valoroasă rezervație a biosferei.",
    "en": "The Sierra Nevada National Park in southern Spain encompasses the highest mountain range on the Iberian Peninsula. It offers excellent skiing opportunities in winter and great hiking trails in summer. Its unique flora and fauna make it a valuable biosphere reserve."
  },
  "facts": {
    "de": [
      "Beinhaltet den Mulhacén (3.482 m), den höchsten Gipfel des Festlands.",
      "Südlichstes Skigebiet Europas.",
      "Seit 1986 UNESCO-Biosphärenreservat.",
      "Heimat vieler endemischer Pflanzenarten.",
      "Ganz in der Nähe der Stadt Granada gelegen.",
      "Bekannt für seine klaren Nächte, ideal für astronomische Observatorien."
    ],
    "hu": [
      "Itt található a Mulhacén (3482 m), a spanyol szárazföld legmagasabb csúcsa.",
      "Európa legdélebbi síterepe.",
      "1986 óta UNESCO bioszféra-rezervátum.",
      "Számos endemikus (csak itt élő) növényfaj otthona.",
      "Nagyon közel fekszik Granada városához.",
      "Tiszta éjszakáiról ismert, így ideális a csillagászati obszervatóriumok számára."
    ],
    "ro": [
      "Include Mulhacén (3.482 m), cel mai înalt vârf de pe continent.",
      "Cea mai sudică stațiune de schi din Europa.",
      "Rezervație a biosferei UNESCO din 1986.",
      "Găzduiește multe specii de plante endemice.",
      "Situat foarte aproape de orașul Granada.",
      "Cunoscut pentru nopțile senine, ideale pentru observatoarele astronomice."
    ],
    "en": [
      "Includes Mulhacén (3,482 m), the highest peak in mainland Spain.",
      "Europe's southernmost ski resort.",
      "UNESCO Biosphere Reserve since 1986.",
      "Home to many endemic plant species.",
      "Located very close to the city of Granada.",
      "Known for clear nights, ideal for astronomical observatories."
    ]
  }
},
{
  "id": "es-picos-de-europa",
  "type": "mountain",
  "parent": "ES-AS",
  "coords": [
    -4.942,
    43.195
  ],
  "name": {
    "de": "Picos de Europa",
    "hu": "Picos de Europa",
    "ro": "Picos de Europa",
    "en": "Picos de Europa"
  },
  "image": "/geo-images/spain/picos-de-europa.webp",
  "description": {
    "de": "Die Picos de Europa sind ein markantes Kalksteinmassiv im Norden Spaniens. Sie bieten dramatische Gipfel, tiefe Schluchten und malerische Bergseen wie die Lagos de Covadonga. Die raue Landschaft ist ein Paradies für Kletterer, Wanderer und Naturliebhaber.",
    "hu": "A Picos de Europa egy jellegzetes mészkőmasszívum Észak-Spanyolországban. Drámai hegycsúcsokat, mély szurdokokat és festői hegyi tavakat kínál, mint például a Lagos de Covadonga. A zord táj a hegymászók, túrázók és természetbarátok paradicsoma.",
    "ro": "Picos de Europa sunt un masiv izbitor de calcar din nordul Spaniei. Oferă vârfuri dramatice, defileuri adânci și lacuri montane pitorești precum Lagos de Covadonga. Peisajul accidentat este un paradis pentru alpiniști, drumeți și iubitori de natură.",
    "en": "The Picos de Europa is a striking limestone massif in northern Spain. It offers dramatic peaks, deep gorges, and picturesque mountain lakes like the Lagos de Covadonga. The rugged landscape is a paradise for climbers, hikers, and nature lovers."
  },
  "facts": {
    "de": [
      "Spaniens erster Nationalpark, gegründet 1918.",
      "Besteht aus drei Hauptmassiven aus Kalkstein.",
      "Der Naranjo de Bulnes (Picu Urriellu) ist ein berühmter Kletterberg.",
      "Heimat von Braunbären und Wölfen.",
      "Erstreckt sich über Asturien, Kantabrien und Kastilien und León.",
      "Die Cares-Schlucht ist ein beliebter Wanderweg."
    ],
    "hu": [
      "Spanyolország első, 1918-ban alapított nemzeti parkja.",
      "Három fő mészkőmasszívumból áll.",
      "A Naranjo de Bulnes (Picu Urriellu) híres hegymászó célpont.",
      "Barnamedvék és farkasok élőhelye.",
      "Asztúria, Kantábria és Kasztília és León területén húzódik.",
      "A Cares-szurdok népszerű túraútvonal."
    ],
    "ro": [
      "Primul parc național al Spaniei, fondat în 1918.",
      "Este format din trei masive principale de calcar.",
      "Naranjo de Bulnes (Picu Urriellu) este un munte faimos pentru cățărat.",
      "Casa urșilor bruni și a lupilor.",
      "Se întinde pe Asturias, Cantabria și Castilia și León.",
      "Defileul Cares este un traseu popular de drumeții."
    ],
    "en": [
      "Spain's first national park, founded in 1918.",
      "Consists of three main limestone massifs.",
      "The Naranjo de Bulnes (Picu Urriellu) is a famous climbing peak.",
      "Home to brown bears and wolves.",
      "Spans across Asturias, Cantabria, and Castile and León.",
      "The Cares Gorge is a popular hiking trail."
    ]
  }
},
{
  "id": "es-gibraltar-rock",
  "type": "landmark",
  "parent": "ES-AN",
  "coords": [
    -5.349,
    36.143
  ],
  "name": {
    "de": "Fels von Gibraltar",
    "hu": "Gibraltár sziklája",
    "ro": "Stânca Gibraltarului",
    "en": "Rock of Gibraltar (view from Spain)"
  },
  "image": "/geo-images/spain/gibraltar-rock.webp",
  "description": {
    "de": "Der imposante Fels von Gibraltar überblickt die schmale Meerenge zwischen Europa und Afrika. Obwohl Gibraltar ein britisches Überseegebiet ist, prägt der mächtige Kalksteinfels die andalusische Küstenlinie eindrucksvoll. Er ist berühmt für seine strategische Lage und die wild lebenden Berberaffen.",
    "hu": "A lenyűgöző Gibraltár sziklája az Európa és Afrika közötti szűk szorosra néz. Bár Gibraltár brit tengerentúli terület, a hatalmas mészkőszikla meghatározza az andalúz partvonalat. Különösen stratégiai fekvéséről és vadon élő berber makákóiról ismert.",
    "ro": "Impresionanta Stâncă a Gibraltarului are vedere spre strâmtoarea îngustă dintre Europa și Africa. Deși Gibraltar este un teritoriu britanic de peste mări, uriașa stâncă de calcar domină coasta andaluză. Este faimoasă pentru locația sa strategică și macacii berberi sălbatici.",
    "en": "The imposing Rock of Gibraltar overlooks the narrow strait between Europe and Africa. Although Gibraltar is a British Overseas Territory, the massive limestone rock heavily shapes the Andalusian coastline. It is famous for its strategic location and wild Barbary macaques."
  },
  "facts": {
    "de": [
      "Britisches Überseegebiet, umgeben von spanischem Terrain.",
      "Etwa 426 Meter hoher monolithischer Kalksteinfels.",
      "Heimat der einzigen wild lebenden Affenpopulation in Europa.",
      "Bekannt als eine der 'Säulen des Herakles' in der Antike.",
      "Verfügt über ein ausgedehntes Tunnelnetzwerk aus dem Zweiten Weltkrieg.",
      "Bietet bei klarem Wetter einen Blick bis nach Nordafrika."
    ],
    "hu": [
      "Brit tengerentúli terület, spanyol szárazfölddel körülvéve.",
      "Körülbelül 426 méter magas monolit mészkőszikla.",
      "Európa egyetlen vadon élő majompopulációjának otthona.",
      "Az ókorban 'Héraklész oszlopai' egyikeként ismerték.",
      "Kiterjedt, második világháborús alagútrendszerrel rendelkezik.",
      "Tiszta időben egészen Észak-Afrikáig el lehet látni."
    ],
    "ro": [
      "Teritoriu britanic de peste mări, înconjurat de teren spaniol.",
      "Stâncă monolitică de calcar înaltă de aproximativ 426 de metri.",
      "Găzduiește singura populație de maimuțe sălbatice din Europa.",
      "Cunoscut ca unul dintre „Stâlpii lui Hercule” din antichitate.",
      "Are o rețea extinsă de tuneluri din al Doilea Război Mondial.",
      "Oferă priveliști până în Africa de Nord în zilele senine."
    ],
    "en": [
      "British Overseas Territory surrounded by Spanish land.",
      "Approximately 426-meter high monolithic limestone rock.",
      "Home to the only wild monkey population in Europe.",
      "Known as one of the 'Pillars of Hercules' in antiquity.",
      "Features an extensive network of World War II tunnels.",
      "Offers views as far as North Africa on clear days."
    ]
  }
},
{
  "id": "es-salamanca-university",
  "type": "historical",
  "parent": "ES-CL",
  "coords": [
    -5.666,
    40.961
  ],
  "name": {
    "de": "Altstadt von Salamanca",
    "hu": "Salamanca óvárosa",
    "ro": "Orașul vechi Salamanca",
    "en": "Salamanca Old City"
  },
  "image": "/geo-images/spain/salamanca-university.webp",
  "description": {
    "de": "Die goldene Stadt Salamanca ist berühmt für ihre alte Universität, eine der ältesten in Europa. Die historische Altstadt ist ein architektonisches Juwel im plateresken Stil, geprägt vom goldenen Sandstein (Villamayor-Stein). Der belebte Plaza Mayor ist das Herzstück der Stadt.",
    "hu": "Salamanca, az „arany város” az ősi egyeteméről híres, amely az egyik legrégebbi Európában. A történelmi óváros a platereszk stílus építészeti ékköve, amelyet a helyi arany homokkő határoz meg. A nyüzsgő Plaza Mayor a város lüktető szíve.",
    "ro": "Orașul auriu Salamanca este faimos pentru vechea sa universitate, una dintre cele mai vechi din Europa. Orașul vechi istoric este o bijuterie arhitecturală în stil plateresc, caracterizată de gresie aurie (piatră de Villamayor). Animata Plaza Mayor este inima orașului.",
    "en": "The golden city of Salamanca is famous for its ancient university, one of the oldest in Europe. The historic old town is an architectural jewel in the Plateresque style, characterized by golden sandstone. The bustling Plaza Mayor is the heart of the city."
  },
  "facts": {
    "de": [
      "Die Universität wurde 1218 gegründet.",
      "Seit 1988 ist die Altstadt UNESCO-Weltkulturerbe.",
      "Besitzt eine 'Alte' und eine 'Neue' Kathedrale, die miteinander verbunden sind.",
      "Der Plaza Mayor gilt als einer der schönsten Plätze Spaniens.",
      "Touristen suchen traditionell den Frosch (La Rana) an der Universitätsfassade.",
      "Bekannt für den goldenen Glanz der Gebäude bei Sonnenuntergang."
    ],
    "hu": [
      "Az egyetemet 1218-ban alapították.",
      "Az óváros 1988 óta az UNESCO világörökség része.",
      "Egy 'Régi' és egy 'Új' katedrálissal is rendelkezik, amelyek egybeépültek.",
      "A Plaza Mayort Spanyolország egyik legszebb terének tartják.",
      "A turisták hagyományosan a békát (La Rana) keresik az egyetem homlokzatán.",
      "Ismert az épületek naplementekor látható aranyos ragyogásáról."
    ],
    "ro": [
      "Universitatea a fost fondată în 1218.",
      "Din 1988, orașul vechi este în Patrimoniul Mondial UNESCO.",
      "Are o catedrală „Veche” și una „Nouă”, care sunt conectate.",
      "Plaza Mayor este considerată una dintre cele mai frumoase piețe din Spania.",
      "Turiștii caută în mod tradițional broasca (La Rana) pe fațada universității.",
      "Cunoscut pentru strălucirea aurie a clădirilor la apus."
    ],
    "en": [
      "The university was founded in 1218.",
      "The old town has been a UNESCO World Heritage site since 1988.",
      "Has an 'Old' and a 'New' Cathedral that are joined together.",
      "The Plaza Mayor is considered one of the most beautiful squares in Spain.",
      "Tourists traditionally look for the frog (La Rana) on the university facade.",
      "Known for the golden glow of its buildings at sunset."
    ]
  }
},
{
  "id": "es-burgos-cathedral",
  "type": "landmark",
  "parent": "ES-CL",
  "coords": [
    -3.704,
    42.341
  ],
  "name": {
    "de": "Kathedrale von Burgos",
    "hu": "Burgosi katedrális",
    "ro": "Catedrala din Burgos",
    "en": "Burgos Cathedral"
  },
  "image": "/geo-images/spain/burgos-cathedral.webp",
  "description": {
    "de": "Die Kathedrale von Burgos ist ein Meisterwerk der spanischen Gotik. Mit ihren filigranen Türmen und der reichen Innenausstattung dominiert sie die historische Stadt in Kastilien. Sie ist nicht nur ein architektonisches Wunder, sondern beherbergt auch das Grab des legendären Nationalhelden El Cid.",
    "hu": "A burgosi katedrális a spanyol gótika mesterműve. Csipkézett tornyaival és gazdag belső terével uralja a kasztíliai történelmi várost. Nemcsak építészeti csoda, hanem itt található a legendás nemzeti hős, El Cid sírja is.",
    "ro": "Catedrala din Burgos este o capodoperă a goticului spaniol. Cu turnurile sale filigranate și interiorul bogat, domină orașul istoric din Castilia. Nu este doar o minune arhitecturală, ci adăpostește și mormântul legendarului erou național El Cid.",
    "en": "The Burgos Cathedral is a masterpiece of Spanish Gothic architecture. With its filigree spires and rich interior, it dominates the historic city in Castile. It is not only an architectural marvel but also houses the tomb of the legendary national hero El Cid."
  },
  "facts": {
    "de": [
      "Baubeginn im Jahr 1221.",
      "Als einzige spanische Kathedrale eigenständig UNESCO-Weltkulturerbe.",
      "Hervorragendes Beispiel der französischen Gotik in Spanien.",
      "Beherbergt das Grab von El Cid und seiner Frau Doña Jimena.",
      "Wichtige Station auf dem Camino Francés (Jakobsweg).",
      "Bekannt für die goldene Treppe (Escalera Dorada)."
    ],
    "hu": [
      "Az építkezés 1221-ben kezdődött.",
      "Az egyetlen spanyol katedrális, amely önállóan is UNESCO világörökség.",
      "A francia gótika kiemelkedő példája Spanyolországban.",
      "Itt található El Cid és felesége, Doña Jimena sírja.",
      "A Francia Szent Jakab-út (Camino Francés) fontos állomása.",
      "Híres az Arany lépcsőjéről (Escalera Dorada)."
    ],
    "ro": [
      "Construcția a început în 1221.",
      "Singura catedrală spaniolă care este un sit independent al Patrimoniului Mondial UNESCO.",
      "Un exemplu remarcabil al goticului francez în Spania.",
      "Adăpostește mormântul lui El Cid și al soției sale Doña Jimena.",
      "Oprire importantă pe Camino Francés (Calea Sfântului Iacob).",
      "Cunoscută pentru scara de aur (Escalera Dorada)."
    ],
    "en": [
      "Construction began in 1221.",
      "The only Spanish cathedral independently designated a UNESCO World Heritage site.",
      "An outstanding example of French Gothic in Spain.",
      "Houses the tomb of El Cid and his wife Doña Jimena.",
      "An important stop on the Camino Francés (Way of St. James).",
      "Known for the Golden Staircase (Escalera Dorada)."
    ]
  }
},
{
  "id": "es-leon-cathedral",
  "type": "landmark",
  "parent": "ES-CL",
  "coords": [
    -5.567,
    42.599
  ],
  "name": {
    "de": "Kathedrale von León",
    "hu": "Leóni katedrális",
    "ro": "Catedrala din León",
    "en": "León Cathedral"
  },
  "image": "/geo-images/spain/leon-cathedral.webp",
  "description": {
    "de": "Die Kathedrale von León, auch bekannt als 'Haus des Lichts', ist eines der feinsten Beispiele der Hochgotik. Ihre außergewöhnlich großen Buntglasfenster tauchen das Innere in ein faszinierendes Lichtspiel. Sie ist ein spiritueller Höhepunkt auf dem Pilgerweg nach Santiago de Compostela.",
    "hu": "A leóni katedrális, amelyet 'A Fény Házaként' is ismernek, az érett gótika egyik legszebb példája. Kivételesen nagy ólomüveg ablakai lenyűgöző fényjátékba öltöztetik a belső teret. A Santiago de Compostelába vezető zarándokút egyik spirituális csúcspontja.",
    "ro": "Catedrala din León, cunoscută și sub numele de „Casa Luminii”, este unul dintre cele mai fine exemple de arhitectură gotică înaltă. Vitraliile sale excepțional de mari scaldă interiorul într-un joc fascinant de lumini. Este un punct culminant spiritual pe traseul de pelerinaj spre Santiago de Compostela.",
    "en": "The León Cathedral, also known as the 'House of Light', is one of the finest examples of High Gothic architecture. Its exceptionally large stained-glass windows bathe the interior in a fascinating play of light. It is a spiritual highlight on the pilgrimage route to Santiago de Compostela."
  },
  "facts": {
    "de": [
      "Gebaut auf den Ruinen römischer Bäder.",
      "Besitzt über 1.700 Quadratmeter historische Buntglasfenster.",
      "Das Mauerwerk wurde extrem reduziert, um riesige Fenster zu ermöglichen.",
      "Wird oft mit der französischen Kathedrale von Amiens verglichen.",
      "Die Fenster stammen größtenteils aus dem 13. bis 16. Jahrhundert.",
      "Beherbergt ein bedeutendes Diözesanmuseum."
    ],
    "hu": [
      "Római fürdők romjaira épült.",
      "Több mint 1700 négyzetméternyi történelmi ólomüveg ablakkal rendelkezik.",
      "A falazatot a minimumra csökkentették a hatalmas ablakok érdekében.",
      "Gyakran hasonlítják a francia amiens-i katedrálishoz.",
      "Az ablakok többsége a 13. és a 16. század között készült.",
      "Jelentős egyházmegyei múzeumnak ad otthont."
    ],
    "ro": [
      "Construită pe ruinele unor băi romane.",
      "Are peste 1.700 de metri pătrați de vitralii istorice.",
      "Zidăria a fost redusă la extrem pentru a permite ferestre uriașe.",
      "Adesea comparată cu catedrala franceză din Amiens.",
      "Ferestrele datează în mare parte din secolele XIII - XVI.",
      "Găzduiește un important muzeu eparhial."
    ],
    "en": [
      "Built over the ruins of Roman baths.",
      "Features over 1,700 square meters of historic stained-glass windows.",
      "Masonry was reduced to a minimum to allow for huge windows.",
      "Often compared to the French Cathedral of Amiens.",
      "The windows mostly date from the 13th to the 16th century.",
      "Houses an important diocesan museum."
    ]
  }
},
{
  "id": "es-camino-santiago",
  "type": "landmark",
  "parent": "ES-GA",
  "coords": [
    -8.547,
    42.881
  ],
  "name": {
    "de": "Jakobsweg",
    "hu": "Szent Jakab-út",
    "ro": "Camino de Santiago",
    "en": "Camino de Santiago"
  },
  "image": "/geo-images/spain/camino-santiago.webp",
  "description": {
    "de": "Der Jakobsweg (Camino de Santiago) ist ein historisches Netzwerk von Pilgerwegen, die alle zum Grab des Apostels Jakobus in Santiago de Compostela führen. Pilger aus aller Welt wandern wochenlang durch Nordspanien. Diese spirituelle und kulturelle Reise prägt die Identität ganzer Regionen.",
    "hu": "A Szent Jakab-út (Camino de Santiago) zarándokutak történelmi hálózata, amelyek mindegyike Jakab apostol Santiago de Compostela-i sírjához vezet. A világ minden tájáról érkező zarándokok heteken át gyalogolnak Észak-Spanyolországon keresztül. Ez a spirituális és kulturális utazás egész régiók identitását határozza meg.",
    "ro": "Camino de Santiago este o rețea istorică de rute de pelerinaj, toate ducând la mormântul Apostolului Iacob din Santiago de Compostela. Pelerini din toată lumea merg pe jos prin nordul Spaniei timp de săptămâni. Această călătorie spirituală și culturală conturează identitatea unor regiuni întregi.",
    "en": "The Camino de Santiago is a historic network of pilgrimage routes, all leading to the tomb of the Apostle James in Santiago de Compostela. Pilgrims from all over the world hike through northern Spain for weeks. This spiritual and cultural journey shapes the identity of entire regions."
  },
  "facts": {
    "de": [
      "Der 'Camino Francés' ist die populärste Route.",
      "Das Symbol der Pilger ist die Jakobsmuschel.",
      "Die Wege sind UNESCO-Weltkulturerbe.",
      "Pilger erhalten am Ziel die Urkunde 'Compostela'.",
      "Man muss mindestens 100 km wandern, um die Urkunde zu erhalten.",
      "Fördert einen starken internationalen Kulturaustausch."
    ],
    "hu": [
      "A legnépszerűbb útvonal a 'Camino Francés'.",
      "A zarándokok szimbóluma a fésűkagyló.",
      "Az útvonalak az UNESCO világörökség részét képezik.",
      "A zarándokok a célban megkapják a 'Compostela' oklevelet.",
      "Legalább 100 km-t kell gyalogolni az oklevél megszerzéséhez.",
      "Erős nemzetközi kulturális cserét mozdít elő."
    ],
    "ro": [
      "'Camino Francés' este cea mai populară rută.",
      "Simbolul pelerinilor este scoica scallop.",
      "Traseele sunt în Patrimoniul Mondial UNESCO.",
      "Pelerinii primesc certificatul 'Compostela' la destinație.",
      "Trebuie să mergi pe jos cel puțin 100 km pentru a primi certificatul.",
      "Promovează un puternic schimb cultural internațional."
    ],
    "en": [
      "The 'Camino Francés' is the most popular route.",
      "The symbol of the pilgrims is the scallop shell.",
      "The routes are a UNESCO World Heritage site.",
      "Pilgrims receive the 'Compostela' certificate upon arrival.",
      "You must walk at least 100 km to earn the certificate.",
      "Fosters strong international cultural exchange."
    ]
  }
},
{
  "id": "es-galicia-coast",
  "type": "landmark",
  "parent": "ES-GA",
  "coords": [
    -9.289,
    42.901
  ],
  "name": {
    "de": "Cíes-Inseln",
    "hu": "Cíes-szigetek",
    "ro": "Insulele Cíes",
    "en": "Cíes Islands"
  },
  "image": "/geo-images/spain/galicia-coast.webp",
  "description": {
    "de": "Die Cíes-Inseln vor der galicischen Küste sind ein streng geschütztes Naturparadies. Sie bieten einige der schönsten Strände der Welt, wie den Playa de Rodas, mit weißem Sand und kristallklarem Wasser. Es gibt hier keine Autos, sondern nur unberührte Natur und Wanderwege.",
    "hu": "A galíciai partoknál fekvő Cíes-szigetek szigorúan védett természeti paradicsom. A világ legszebb strandjai közé tartoznak az itt találhatóak, mint például a fehér homokos, kristálytiszta vizű Playa de Rodas. Itt nincsenek autók, csak érintetlen természet és túraútvonalak.",
    "ro": "Insulele Cíes de pe coasta Galiciei sunt un paradis natural strict protejat. Oferă unele dintre cele mai frumoase plaje din lume, precum Playa de Rodas, cu nisip alb și ape cristaline. Nu există mașini aici, doar natură neatinsă și trasee de drumeții.",
    "en": "The Cíes Islands off the Galician coast are a strictly protected natural paradise. They offer some of the most beautiful beaches in the world, such as Playa de Rodas, with white sand and crystal-clear water. There are no cars here, only pristine nature and hiking trails."
  },
  "facts": {
    "de": [
      "Teil des Nationalparks Atlantische Inseln von Galicien.",
      "Die Inseln waren in der Vergangenheit Zufluchtsorte für Piraten.",
      "Der Playa de Rodas wurde oft zum besten Strand der Welt gewählt.",
      "Tägliche Besucherzahlen sind streng limitiert, um die Natur zu schützen.",
      "Beherbergen die weltweit größte Möwenkolonie.",
      "Das Wasserbleibt selbst im Hochsommer sehr erfrischend kalt."
    ],
    "hu": [
      "A Galíciai Atlanti-szigetek Nemzeti Park része.",
      "A múltban a szigetek kalózok menedékhelyéül szolgáltak.",
      "A Playa de Rodast gyakran a világ legjobb strandjának választják.",
      "A napi látogatók száma a természet védelme érdekében szigorúan korlátozott.",
      "A világ legnagyobb sirálykolóniájának adnak otthont.",
      "A víz még nyár közepén is frissítően hideg marad."
    ],
    "ro": [
      "Parte a Parcului Național Insulele Atlantice din Galicia.",
      "În trecut, insulele au fost refugii pentru pirați.",
      "Playa de Rodas a fost adesea votată cea mai bună plajă din lume.",
      "Numărul de vizitatori zilnici este strict limitat pentru a proteja natura.",
      "Găzduiesc cea mai mare colonie de pescăruși din lume.",
      "Apa rămâne foarte rece și revigorantă chiar și la mijlocul verii."
    ],
    "en": [
      "Part of the Atlantic Islands of Galicia National Park.",
      "The islands were pirate hideouts in the past.",
      "Playa de Rodas has often been voted the best beach in the world.",
      "Daily visitor numbers are strictly limited to protect nature.",
      "Home to the world's largest seagull colony.",
      "The water remains refreshingly cold even in midsummer."
    ]
  }
},
{
  "id": "es-merida-roman",
  "type": "historical",
  "parent": "ES-EX",
  "coords": [
    -6.343,
    38.916
  ],
  "name": {
    "de": "Römisches Theater Mérida",
    "hu": "Méridai római színház",
    "ro": "Teatrul roman din Mérida",
    "en": "Mérida Roman Theatre"
  },
  "image": "/geo-images/spain/merida-roman.webp",
  "description": {
    "de": "Das Römische Theater in Mérida ist eines der prächtigsten noch erhaltenen Bauwerke aus der Zeit des Römischen Reiches auf der iberischen Halbinsel. Die antike Hauptstadt Lusitanias beeindruckt mit ihrer reich verzierten Bühnenwand. Noch heute wird es jeden Sommer für klassische Theaterfestivals genutzt.",
    "hu": "A méridai római színház a Római Birodalom korának egyik legcsodálatosabb, épségben fennmaradt építménye az Ibériai-félszigeten. Lusitania egykori fővárosa lenyűgözően díszített színpadi falával nyűgözi le a látogatókat. Minden nyáron ma is klasszikus színházi fesztiválok helyszíne.",
    "ro": "Teatrul roman din Mérida este una dintre cele mai magnifice structuri supraviețuitoare din perioada Imperiului Roman din Peninsula Iberică. Fosta capitală a Lusitaniei impresionează prin peretele scenic bogat ornamentat. Chiar și astăzi este folosit în fiecare vară pentru festivaluri de teatru clasic.",
    "en": "The Roman Theatre in Mérida is one of the most magnificent surviving structures from the Roman Empire period on the Iberian Peninsula. The ancient capital of Lusitania impresses with its richly decorated stage wall. It is still used every summer for classical theater festivals."
  },
  "facts": {
    "de": [
      "Erbaut um die Jahre 16 bis 15 v. Chr.",
      "Bot Platz für etwa 6.000 Zuschauer.",
      "Teil des Archäologischen Ensembles von Mérida (UNESCO-Welterbe).",
      "Die Bühne wird von korinthischen Marmorsäulen geschmückt.",
      "Befindet sich neben einem fast ebenso gut erhaltenen Amphitheater.",
      "War jahrhundertelang unter Erde und Schutt begraben."
    ],
    "hu": [
      "Kr. e. 16 és 15 körül épült.",
      "Körülbelül 6000 néző számára biztosított helyet.",
      "A méridai régészeti együttes (UNESCO világörökség) része.",
      "A színpadot korinthoszi márványoszlopok díszítik.",
      "Közvetlenül egy szintén jó állapotú amfiteátrum mellett található.",
      "Évszázadokon át föld és törmelék borította."
    ],
    "ro": [
      "Construit în jurul anilor 16 - 15 î.Hr.",
      "Oferea locuri pentru aproximativ 6.000 de spectatori.",
      "Parte a Ansamblului Arheologic de la Mérida (Patrimoniu UNESCO).",
      "Scena este decorată cu coloane corintice de marmură.",
      "Situat lângă un amfiteatru aproape la fel de bine conservat.",
      "A fost îngropat sub pământ și dărâmături timp de secole."
    ],
    "en": [
      "Built around 16 to 15 BC.",
      "Provided seating for about 6,000 spectators.",
      "Part of the Archaeological Ensemble of Mérida (UNESCO World Heritage).",
      "The stage is decorated with Corinthian marble columns.",
      "Located next to an almost equally well-preserved amphitheater.",
      "Was buried under earth and rubble for centuries."
    ]
  }
},
{
  "id": "es-toledo-cathedral",
  "type": "historical",
  "parent": "ES-CM",
  "coords": [
    -4.024,
    39.857
  ],
  "name": {
    "de": "Kathedrale von Toledo",
    "hu": "Toledói katedrális",
    "ro": "Catedrala din Toledo",
    "en": "Toledo Cathedral"
  },
  "image": "/geo-images/spain/toledo-cathedral.webp",
  "description": {
    "de": "Die Kathedrale von Toledo ist eine prachtvolle gotische Kirche von immenser historischer Bedeutung in Spanien. Die 'Primas-Kathedrale' spiegelt mit ihrem monumentalen Hauptaltar, dem reich verzierten Chor und Gemälden von El Greco großen Reichtum wider. Sie wurde an der Stelle einer ehemaligen großen Moschee errichtet.",
    "hu": "A toledói katedrális egy pompás gótikus templom, amely hatalmas történelmi jelentőséggel bír Spanyolországban. A 'Prímás katedrális' hatalmas főoltárával, gazdagon díszített kórusával és El Greco festményeivel mérhetetlen gazdagságot tükröz. Egy korábbi nagymecset helyére épült.",
    "ro": "Catedrala din Toledo este o biserică gotică magnifică de o importanță istorică imensă în Spania. „Catedrala Primat” reflectă o mare bogăție cu altarul său principal monumental, corul ornamentat și picturile lui El Greco. A fost construită pe locul unei foste mari moschei.",
    "en": "The Toledo Cathedral is a magnificent Gothic church of immense historical significance in Spain. The 'Primate Cathedral' reflects vast wealth with its monumental main altar, ornate choir, and paintings by El Greco. It was built on the site of a former great mosque."
  },
  "facts": {
    "de": [
      "Gilt als das Opus Magnum der spanischen Gotik.",
      "Baubeginn war im Jahr 1226 unter Ferdinand III.",
      "Das gotische Gebäude enthält auch Mudéjar-Elemente.",
      "Der beeindruckende Hauptaltar (Retablo) zeigt Szenen aus dem Leben Christi.",
      "Die Sakristei ist eine Kunstgalerie mit Werken von Tizian und Goya.",
      "El Grecos berühmtes Gemälde 'Die Entkleidung Christi' hängt hier."
    ],
    "hu": [
      "A spanyol gótika mesterművének (Opus Magnum) tartják.",
      "Építése 1226-ban kezdődött III. Ferdinánd alatt.",
      "A gótikus épület mudéjar stíluselemeket is tartalmaz.",
      "A lenyűgöző főoltár (retablo) Krisztus életének jeleneteit ábrázolja.",
      "A sekrestye valóságos művészeti galéria Tiziano és Goya műveivel.",
      "Itt található El Greco híres festménye, 'Krisztus megfosztása ruháitól'."
    ],
    "ro": [
      "Considerată „Opus Magnum” a goticului spaniol.",
      "Construcția a început în 1226 sub Ferdinand al III-lea.",
      "Clădirea gotică conține și elemente mudéjar.",
      "Altarul principal impresionant (retablo) arată scene din viața lui Hristos.",
      "Sacristia este o galerie de artă cu lucrări de Titian și Goya.",
      "Faimosul tablou al lui El Greco „Dezbrăcarea lui Hristos” atârnă aici."
    ],
    "en": [
      "Considered the 'Opus Magnum' of Spanish Gothic architecture.",
      "Construction began in 1226 under Ferdinand III.",
      "The Gothic building also features Mudéjar elements.",
      "The impressive main altar (retablo) shows scenes from the life of Christ.",
      "The sacristy is an art gallery with works by Titian and Goya.",
      "El Greco's famous painting 'The Disrobing of Christ' hangs here."
    ]
  }
},
{
  "id": "es-cuenca-hanging",
  "type": "landmark",
  "parent": "ES-CM",
  "coords": [
    -2.134,
    40.076
  ],
  "name": {
    "de": "Hängende Häuser von Cuenca",
    "hu": "Cuenca függőházai",
    "ro": "Casele suspendate din Cuenca",
    "en": "Cuenca Hanging Houses"
  },
  "image": "/geo-images/spain/cuenca-hanging.webp",
  "description": {
    "de": "Die Hängenden Häuser (Casas Colgadas) von Cuenca sind ein architektonisches Wunder der mittelalterlichen Stadt. Sie kleben scheinbar schwerelos an den steilen Klippen über der Schlucht des Flusses Huécar. Heute sind sie das bekannteste Symbol der Stadt, die zum UNESCO-Weltkulturerbe gehört.",
    "hu": "Cuenca függőházai (Casas Colgadas) a középkori város építészeti csodái. Szinte súlytalannak tűnve tapadnak a Huécar folyó szurdoka feletti meredek sziklákhoz. Ma ezek jelentik az UNESCO világörökség részét képező város legismertebb szimbólumát.",
    "ro": "Casele suspendate (Casas Colgadas) din Cuenca sunt o minune arhitecturală a orașului medieval. Se agață aparent fără greutate de stâncile abrupte de deasupra defileului râului Huécar. Astăzi sunt cel mai faimos simbol al orașului, care este un sit al Patrimoniului Mondial UNESCO.",
    "en": "The Hanging Houses (Casas Colgadas) of Cuenca are an architectural marvel of the medieval city. They cling seemingly weightlessly to the steep cliffs above the Huécar river gorge. Today they are the most famous symbol of the city, which is a UNESCO World Heritage site."
  },
  "facts": {
    "de": [
      "Nur wenige der ursprünglichen hängenden Häuser existieren noch.",
      "Sie wurden vermutlich im 15. Jahrhundert erbaut.",
      "Ihre Holzbalkone ragen dramatisch über den Abgrund.",
      "Eines der Häuser beherbergt das Museum für abstrakte spanische Kunst.",
      "Cuenca liegt spektakulär zwischen den Flüssen Júcar und Huécar.",
      "Die Brücke San Pablo bietet die beste Aussicht auf die Häuser."
    ],
    "hu": [
      "Az eredeti függőházakból már csak kevés maradt fenn.",
      "Feltehetően a 15. században épültek.",
      "Fából készült erkélyeik drámaian nyúlnak a szakadék fölé.",
      "Az egyik házban működik a Spanyol Absztrakt Művészeti Múzeum.",
      "Cuenca látványos helyen, a Júcar és a Huécar folyók között fekszik.",
      "A San Pablo hídról nyílik a legjobb kilátás a házakra."
    ],
    "ro": [
      "Doar câteva dintre casele suspendate originale mai există.",
      "Probabil au fost construite în secolul al XV-lea.",
      "Balcoanele lor de lemn se întind dramatic peste prăpastie.",
      "Una dintre case găzduiește Muzeul de Artă Abstractă Spaniolă.",
      "Cuenca este situată spectaculos între râurile Júcar și Huécar.",
      "Podul San Pablo oferă cea mai bună vedere asupra caselor."
    ],
    "en": [
      "Only a few of the original hanging houses still exist.",
      "They were probably built in the 15th century.",
      "Their wooden balconies protrude dramatically over the abyss.",
      "One of the houses hosts the Museum of Spanish Abstract Art.",
      "Cuenca is spectacularly situated between the Júcar and Huécar rivers.",
      "The San Pablo bridge offers the best view of the houses."
    ]
  }
},
{
  "id": "es-murcia-cathedral",
  "type": "landmark",
  "parent": "ES-MU",
  "coords": [
    -1.13,
    37.983
  ],
  "name": {
    "de": "Kathedrale von Murcia",
    "hu": "Murciai katedrális",
    "ro": "Catedrala din Murcia",
    "en": "Murcia Cathedral"
  },
  "image": "/geo-images/spain/murcia-cathedral.webp",
  "description": {
    "de": "Die Kathedrale Santa María in Murcia ist das architektonische Meisterwerk der Region. Ihre faszinierende Hauptfassade ist ein herausragendes Beispiel des spanischen Barocks. Der hohe Glockenturm und die Mischung aus Gotik, Renaissance und Barock machen das Bauwerk einzigartig.",
    "hu": "A murciai Santa María katedrális a régió építészeti mesterműve. Lenyűgöző főhomlokzata a spanyol barokk egyik kiemelkedő példája. Magas harangtornya, valamint a gótika, a reneszánsz és a barokk stílusjegyek keveredése teszi egyedülállóvá az építményt.",
    "ro": "Catedrala Santa María din Murcia este capodopera arhitecturală a regiunii. Fațada sa principală fascinantă este un exemplu remarcabil al barocului spaniol. Turnul său înalt al clopotniței și amestecul de stiluri gotic, renascentist și baroc fac din clădire una unică.",
    "en": "The Cathedral of Santa María in Murcia is the architectural masterpiece of the region. Its fascinating main facade is an outstanding example of Spanish Baroque. Its high bell tower and the mix of Gothic, Renaissance, and Baroque styles make the building unique."
  },
  "facts": {
    "de": [
      "Der Bau begann 1394 auf den Grundmauern einer Moschee.",
      "Die barocke Hauptfassade wurde im 18. Jahrhundert fertiggestellt.",
      "Der Glockenturm ist mit 90 Metern der zweithöchste Spaniens.",
      "Die Vélez-Kapelle besticht durch prächtige Spätgotik.",
      "Beherbergt in der Hauptkapelle das Herz von König Alfons X.",
      "Das Glockenspiel hat 25 Glocken, jede mit einem eigenen Namen."
    ],
    "hu": [
      "Építése 1394-ben kezdődött egy mecset alapjain.",
      "A barokk főhomlokzat a 18. században készült el.",
      "A 90 méter magas harangtorony Spanyolország második legmagasabbja.",
      "A Vélez-kápolna káprázatos késő gótikus stílusával hódít.",
      "A fő kápolnában őrzik X. Alfonz király szívét.",
      "Harangjátéka 25 harangból áll, melyek mindegyike saját nevet visel."
    ],
    "ro": [
      "Construcția a început în 1394 pe fundațiile unei moschei.",
      "Fațada principală barocă a fost finalizată în secolul al XVIII-lea.",
      "Turnul clopotniței de 90 de metri este al doilea cel mai înalt din Spania.",
      "Capela Vélez impresionează prin goticul său târziu magnific.",
      "Găzduiește inima regelui Alfonso X în capela principală.",
      "Carilonul are 25 de clopote, fiecare cu propriul nume."
    ],
    "en": [
      "Construction began in 1394 on the foundations of a mosque.",
      "The Baroque main facade was completed in the 18th century.",
      "The 90-meter bell tower is the second highest in Spain.",
      "The Vélez Chapel impresses with its magnificent late Gothic style.",
      "Houses the heart of King Alfonso X in the main chapel.",
      "The carillon has 25 bells, each with its own name."
    ]
  }
},
{
  "id": "es-logrono-wine",
  "type": "city",
  "parent": "ES-RI",
  "coords": [
    -2.445,
    42.466
  ],
  "name": {
    "de": "Logroño",
    "hu": "Logroño",
    "ro": "Logroño",
    "en": "Logroño (wine)"
  },
  "image": "/geo-images/spain/logrono-wine.webp",
  "description": {
    "de": "Logroño ist die Hauptstadt der Region La Rioja und ein Zentrum der spanischen Weinkultur. Die Stadt ist weltweit für ihre exzellenten Rotweine bekannt. Ein Highlight für Besucher ist die Calle del Laurel, eine Straße voller Tapas-Bars, in denen man lokale Weine und Spezialitäten probiert.",
    "hu": "Logroño a La Rioja régió fővárosa és a spanyol borkultúra központja. A város világszerte ismert kiváló vörösborairól. A látogatók számára kiemelkedő élményt nyújt a Calle del Laurel, a tapas bárokkal teli utca, ahol helyi borokat és különlegességeket kóstolhatnak.",
    "ro": "Logroño este capitala regiunii La Rioja și un centru al culturii vinului spaniol. Orașul este cunoscut în întreaga lume pentru vinurile sale roșii excelente. Un punct culminant pentru vizitatori este Calle del Laurel, o stradă plină de baruri de tapas unde se pot degusta vinuri și specialități locale.",
    "en": "Logroño is the capital of the La Rioja region and a center of Spanish wine culture. The city is known worldwide for its excellent red wines. A highlight for visitors is the Calle del Laurel, a street full of tapas bars where you can taste local wines and specialties."
  },
  "facts": {
    "de": [
      "Hauptstadt der kleinsten autonomen Region Spaniens (La Rioja).",
      "Wichtiger Halt auf dem französischen Jakobsweg.",
      "Die Calle del Laurel bietet über 60 Tapas-Bars.",
      "Jedes Jahr im September findet das Weinlesefest San Mateo statt.",
      "Umgeben von Hunderten von renommierten Weingütern (Bodegas).",
      "Der Fluss Ebro fließt malerisch durch die Stadt."
    ],
    "hu": [
      "Spanyolország legkisebb autonóm régiójának (La Rioja) fővárosa.",
      "Fontos megálló a Francia Szent Jakab-úton.",
      "A Calle del Laurel több mint 60 tapas bárral várja a vendégeket.",
      "Minden szeptemberben megrendezik a San Mateo szüreti fesztivált.",
      "Több száz neves borászat (bodegas) veszi körül.",
      "Az Ebro folyó festőien folyik át a városon."
    ],
    "ro": [
      "Capitala celei mai mici comunități autonome din Spania (La Rioja).",
      "Oprire importantă pe ruta franceză Camino de Santiago.",
      "Calle del Laurel oferă peste 60 de baruri de tapas.",
      "În fiecare septembrie are loc festivalul recoltei de vin San Mateo.",
      "Înconjurat de sute de crame renumite (bodegas).",
      "Râul Ebro curge pitoresc prin oraș."
    ],
    "en": [
      "Capital of Spain's smallest autonomous community (La Rioja).",
      "Important stop on the French route of the Camino de Santiago.",
      "Calle del Laurel offers over 60 tapas bars.",
      "The San Mateo wine harvest festival takes place every September.",
      "Surrounded by hundreds of renowned wineries (bodegas).",
      "The Ebro River flows picturesquely through the city."
    ]
  }
}
];

export const spainAllPoi: POI[] = [...spainCountry, ...spainRegions, ...spainCities];
