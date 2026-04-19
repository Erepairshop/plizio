import type { POI } from "./poi";

export const spainCountry: POI[] = [
  {
    id: "ES",
    type: "country",
    parent: "EU",
    coords: [-3.7, 40.4],
    name: {"de": "Spanien", "hu": "Spanyolország", "ro": "Spania", "en": "Spain"},
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
    description: {"de": "Autonome Gemeinschaft im Nordwesten Spaniens.", "hu": "Autonóm közösség Spanyolország északnyugati részén.", "ro": "Comunitate autonomă în nord-vestul Spaniei.", "en": "Autonomous community in northwestern Spain."}
  },
  {
    id: "ES-AS",
    type: "region",
    parent: "ES",
    coords: [-6.0, 43.3],
    name: {"de": "Asturien", "hu": "Asztúria", "ro": "Asturia", "en": "Asturias"},
    description: {"de": "Grüne und gebirgige Region im Norden Spaniens.", "hu": "Zöld és hegyvidéki régió Észak-Spanyolországban.", "ro": "Regiune verde și muntoasă din nordul Spaniei.", "en": "Green and mountainous region in northern Spain."}
  },
  {
    id: "ES-CB",
    type: "region",
    parent: "ES",
    coords: [-4.0, 43.2],
    name: {"de": "Kantabrien", "hu": "Kantábria", "ro": "Cantabria", "en": "Cantabria"},
    description: {"de": "Region an der Nordküste Spaniens mit reicher prähistorischer Kunst.", "hu": "Régió Spanyolország északi partján, gazdag őskori művészettel.", "ro": "Regiune pe coasta de nord a Spaniei cu artă preistorică bogată.", "en": "Region on the northern coast of Spain with rich prehistoric art."}
  },
  {
    id: "ES-PV",
    type: "region",
    parent: "ES",
    coords: [-2.5, 43.0],
    name: {"de": "Baskenland", "hu": "Baszkföld", "ro": "Țara Bascilor", "en": "Basque Country"},
    description: {"de": "Region mit eigener Sprache und Kultur im Norden Spaniens.", "hu": "Saját nyelvvel és kultúrával rendelkező régió Észak-Spanyolországban.", "ro": "Regiune cu limbă și cultură proprie în nordul Spaniei.", "en": "Region with its own language and culture in northern Spain."}
  },
  {
    id: "ES-NC",
    type: "region",
    parent: "ES",
    coords: [-1.5, 42.8],
    name: {"de": "Navarra", "hu": "Navarra", "ro": "Navarra", "en": "Navarre"},
    description: {"de": "Autonome Gemeinschaft im Norden, bekannt für das San Fermín-Fest.", "hu": "Északi autonóm közösség, amely a San Fermín fesztiválról ismert.", "ro": "Comunitate autonomă în nord, cunoscută pentru festivalul San Fermín.", "en": "Autonomous community in the north, known for the San Fermín festival."}
  },
  {
    id: "ES-RI",
    type: "region",
    parent: "ES",
    coords: [-2.5, 42.3],
    name: {"de": "La Rioja", "hu": "La Rioja", "ro": "La Rioja", "en": "La Rioja"},
    description: {"de": "Kleine Region, die weltweit für ihren Wein berühmt ist.", "hu": "Kis régió, amely világhírű a boráról.", "ro": "Regiune mică faimoasă în lume pentru vinul său.", "en": "Small region world-famous for its wine."}
  },
  {
    id: "ES-AR",
    type: "region",
    parent: "ES",
    coords: [-0.5, 41.5],
    name: {"de": "Aragonien", "hu": "Aragónia", "ro": "Aragon", "en": "Aragon"},
    description: {"de": "Binnenlandregion in Nordostspanien mit vielfältiger Landschaft.", "hu": "Belföldi régió Északkelet-Spanyolországban változatos tájakkal.", "ro": "Regiune interioară în nord-estul Spaniei cu peisaje diverse.", "en": "Inland region in northeastern Spain with diverse landscapes."}
  },
  {
    id: "ES-CT",
    type: "region",
    parent: "ES",
    coords: [1.5, 41.5],
    name: {"de": "Katalonien", "hu": "Katalónia", "ro": "Catalonia", "en": "Catalonia"},
    description: {"de": "Region im Nordosten mit starker Identität und eigener Sprache.", "hu": "Északkeleti régió erős identitással és saját nyelvvel.", "ro": "Regiune în nord-est cu o identitate puternică și limbă proprie.", "en": "Region in the northeast with a strong identity and its own language."}
  },
  {
    id: "ES-CL",
    type: "region",
    parent: "ES",
    coords: [-4.5, 41.5],
    name: {"de": "Kastilien und León", "hu": "Kasztília és León", "ro": "Castilia și León", "en": "Castile and León"},
    description: {"de": "Die größte autonome Gemeinschaft Spaniens.", "hu": "Spanyolország legnagyobb autonóm közössége.", "ro": "Cea mai mare comunitate autonomă din Spania.", "en": "The largest autonomous community in Spain."}
  },
  {
    id: "ES-MD",
    type: "region",
    parent: "ES",
    coords: [-3.7, 40.5],
    name: {"de": "Madrid", "hu": "Madrid", "ro": "Madrid", "en": "Madrid"},
    description: {"de": "Die Hauptstadtregion und das wirtschaftliche Zentrum Spaniens.", "hu": "Spanyolország fővárosi régiója és gazdasági központja.", "ro": "Regiunea capitalei și centrul economic al Spaniei.", "en": "The capital region and economic center of Spain."}
  },
  {
    id: "ES-CM",
    type: "region",
    parent: "ES",
    coords: [-3.0, 39.5],
    name: {"de": "Kastilien-La Mancha", "hu": "Kasztília-La Mancha", "ro": "Castilia-La Mancha", "en": "Castilla-La Mancha"},
    description: {"de": "Zentralspanische Region, bekannt für Don Quijote.", "hu": "Közép-spanyolországi régió, Don Quijote hazája.", "ro": "Regiune centrală a Spaniei, cunoscută pentru Don Quijote.", "en": "Central Spanish region, famous for Don Quixote."}
  },
  {
    id: "ES-EX",
    type: "region",
    parent: "ES",
    coords: [-6.0, 39.5],
    name: {"de": "Extremadura", "hu": "Extremadura", "ro": "Extremadura", "en": "Extremadura"},
    description: {"de": "Region im Westen Spaniens mit reichem römischen Erbe.", "hu": "Spanyolország nyugati régiója, gazdag római örökséggel.", "ro": "Regiune din vestul Spaniei cu o bogată moștenire romană.", "en": "Region in western Spain with rich Roman heritage."}
  },
  {
    id: "ES-VC",
    type: "region",
    parent: "ES",
    coords: [-0.5, 39.5],
    name: {"de": "Valencia", "hu": "Valencia", "ro": "Valencia", "en": "Valencian Community"},
    description: {"de": "Küstenregion im Osten, bekannt für Paella.", "hu": "Keleti parti régió, a paella hazája.", "ro": "Regiune de coastă în est, cunoscută pentru paella.", "en": "Coastal region in the east, known for paella."}
  },
  {
    id: "ES-AN",
    type: "region",
    parent: "ES",
    coords: [-4.5, 37.5],
    name: {"de": "Andalusien", "hu": "Andalúzia", "ro": "Andaluzia", "en": "Andalusia"},
    description: {"de": "Südlichste Region mit maurischer Architektur und Flamenco.", "hu": "A legdélibb régió, mór építészettel és flamencóval.", "ro": "Cea mai sudică regiune, cu arhitectură maură și flamenco.", "en": "Southernmost region with Moorish architecture and flamenco."}
  },
  {
    id: "ES-MU",
    type: "region",
    parent: "ES",
    coords: [-1.5, 38.0],
    name: {"de": "Murcia", "hu": "Murcia", "ro": "Murcia", "en": "Murcia"},
    description: {"de": "Region im Südosten, bekannt für Landwirtschaft und Strände.", "hu": "Délkeleti régió, mezőgazdaságáról és strandjairól ismert.", "ro": "Regiune în sud-est, cunoscută pentru agricultură și plaje.", "en": "Southeastern region, known for agriculture and beaches."}
  },
  {
    id: "ES-IB",
    type: "region",
    parent: "ES",
    coords: [3.0, 39.5],
    name: {"de": "Balearen", "hu": "Baleár-szigetek", "ro": "Insulele Baleare", "en": "Balearic Islands"},
    description: {"de": "Inselgruppe im Mittelmeer.", "hu": "Szigetcsoport a Földközi-tengeren.", "ro": "Arhipelag în Marea Mediterană.", "en": "Archipelago in the Mediterranean Sea."}
  },
  {
    id: "ES-CN",
    type: "region",
    parent: "ES",
    coords: [-15.5, 28.0],
    name: {"de": "Kanarische Inseln", "hu": "Kanári-szigetek", "ro": "Insulele Canare", "en": "Canary Islands"},
    description: {"de": "Inselgruppe im Atlantischen Ozean vor der Küste Afrikas.", "hu": "Szigetcsoport az Atlanti-óceánban Afrika partjainál.", "ro": "Arhipelag în Oceanul Atlantic în largul coastei Africii.", "en": "Archipelago in the Atlantic Ocean off the coast of Africa."}
  }
];

export const spainCities: POI[] = [
  {
    id: "es-madrid", type: "city", parent: "ES-MD", coords: [-3.7038, 40.4168],
    name: {"de": "Madrid", "hu": "Madrid", "ro": "Madrid", "en": "Madrid"},
    description: {"de": "Die Hauptstadt und größte Stadt Spaniens.", "hu": "Spanyolország fővárosa és legnagyobb városa.", "ro": "Capitala și cel mai mare oraș al Spaniei.", "en": "The capital and largest city of Spain."},
    facts: {"de": ["Politik- und Kulturzentrum.", "Prado-Museum."], "hu": ["Politikai és kulturális központ.", "Prado Múzeum."], "ro": ["Centrul politic și cultural.", "Muzeul Prado."], "en": ["Political and cultural center.", "Prado Museum."]}
  },
  {
    id: "es-barcelona", type: "city", parent: "ES-CT", coords: [2.1686, 41.3874],
    name: {"de": "Barcelona", "hu": "Barcelona", "ro": "Barcelona", "en": "Barcelona"},
    description: {"de": "Metropole am Mittelmeer, berühmt für Gaudís Architektur.", "hu": "Metropolisz a Földközi-tenger partján, híres Gaudí építészetéről.", "ro": "Metropolă la Marea Mediterană, faimoasă pentru arhitectura lui Gaudí.", "en": "Metropolis on the Mediterranean, famous for Gaudí's architecture."},
    facts: {"de": ["Zweitgrößte Stadt Spaniens.", "Heimat der Sagrada Familia."], "hu": ["Spanyolország második legnagyobb városa.", "A Sagrada Familia otthona."], "ro": ["Al doilea oraș ca mărime din Spania.", "Casa Sagrada Familia."], "en": ["Second largest city in Spain.", "Home to the Sagrada Familia."]}
  },
  {
    id: "es-valencia", type: "city", parent: "ES-VC", coords: [-0.3763, 39.4699],
    name: {"de": "Valencia", "hu": "Valencia", "ro": "Valencia", "en": "Valencia"},
    description: {"de": "Die drittgrößte Stadt Spaniens, bekannt für die Stadt der Künste und Wissenschaften.", "hu": "Spanyolország harmadik legnagyobb városa, ismert a Művészetek és Tudományok Városáról.", "ro": "Al treilea oraș ca mărime din Spania, cunoscut pentru Orașul Artelor și Științelor.", "en": "The third largest city in Spain, known for the City of Arts and Sciences."},
    facts: {"de": ["Ursprungsort der Paella.", "Fallas-Fest."], "hu": ["A paella szülőhelye.", "Fallas fesztivál."], "ro": ["Locul de origine al paellei.", "Festivalul Fallas."], "en": ["Origin of paella.", "Fallas festival."]}
  },
  {
    id: "es-sevilla", type: "city", parent: "ES-AN", coords: [-5.9845, 37.3891],
    name: {"de": "Sevilla", "hu": "Sevilla", "ro": "Sevilia", "en": "Seville"},
    description: {"de": "Hauptstadt von Andalusien, berühmt für Flamenco und ihre Kathedrale.", "hu": "Andalúzia fővárosa, híres a flamencóról és a katedrálisáról.", "ro": "Capitala Andaluziei, faimoasă pentru flamenco și catedrala sa.", "en": "Capital of Andalusia, famous for flamenco and its cathedral."}
  },
  {
    id: "es-zaragoza", type: "city", parent: "ES-AR", coords: [-0.8877, 41.6497],
    name: {"de": "Zaragoza", "hu": "Zaragoza", "ro": "Zaragoza", "en": "Zaragoza"},
    description: {"de": "Historische Stadt am Ebro-Fluss.", "hu": "Történelmi város az Ebro folyó partján.", "ro": "Oraș istoric pe râul Ebro.", "en": "Historic city on the Ebro river."}
  },
  {
    id: "es-malaga", type: "city", parent: "ES-AN", coords: [-4.4214, 36.7213],
    name: {"de": "Málaga", "hu": "Málaga", "ro": "Málaga", "en": "Málaga"},
    description: {"de": "Hafenstadt an der Costa del Sol, Geburtsort von Picasso.", "hu": "Kikötőváros a Costa del Solon, Picasso szülőhelye.", "ro": "Oraș-port pe Costa del Sol, locul de naștere al lui Picasso.", "en": "Port city on the Costa del Sol, birthplace of Picasso."}
  },
  {
    id: "es-bilbao", type: "city", parent: "ES-PV", coords: [-2.9350, 43.2630],
    name: {"de": "Bilbao", "hu": "Bilbao", "ro": "Bilbao", "en": "Bilbao"},
    description: {"de": "Industriestadt im Baskenland, Heimat des Guggenheim-Museums.", "hu": "Ipari város Baszkföldön, a Guggenheim Múzeum otthona.", "ro": "Oraș industrial în Țara Bascilor, casa Muzeului Guggenheim.", "en": "Industrial city in the Basque Country, home to the Guggenheim Museum."}
  },
  {
    id: "es-granada", type: "city", parent: "ES-AN", coords: [-3.5986, 37.1773],
    name: {"de": "Granada", "hu": "Granada", "ro": "Granada", "en": "Granada"},
    description: {"de": "Stadt am Fuße der Sierra Nevada, bekannt für die Alhambra.", "hu": "Város a Sierra Nevada lábánál, az Alhambráról ismert.", "ro": "Oraș la poalele Sierra Nevada, cunoscut pentru Alhambra.", "en": "City at the foot of the Sierra Nevada, known for the Alhambra."}
  },
  {
    id: "es-cordoba", type: "city", parent: "ES-AN", coords: [-4.7794, 37.8882],
    name: {"de": "Córdoba", "hu": "Córdoba", "ro": "Córdoba", "en": "Córdoba"},
    description: {"de": "Historische Stadt, ehemals Zentrum des islamischen Spaniens.", "hu": "Történelmi város, az iszlám Spanyolország egykori központja.", "ro": "Oraș istoric, fost centru al Spaniei islamice.", "en": "Historic city, former center of Islamic Spain."}
  },
  {
    id: "es-salamanca", type: "city", parent: "ES-CL", coords: [-5.6635, 40.9701],
    name: {"de": "Salamanca", "hu": "Salamanca", "ro": "Salamanca", "en": "Salamanca"},
    description: {"de": "Heimat der ältesten Universität Spaniens.", "hu": "Spanyolország legrégebbi egyetemének otthona.", "ro": "Casa celei mai vechi universități din Spania.", "en": "Home to the oldest university in Spain."}
  },
  {
    id: "es-toledo", type: "city", parent: "ES-CM", coords: [-4.0273, 39.8628],
    name: {"de": "Toledo", "hu": "Toledo", "ro": "Toledo", "en": "Toledo"},
    description: {"de": "Die 'Stadt der drei Kulturen', ein UNESCO-Weltkulturerbe.", "hu": "A 'Három kultúra városa', az UNESCO Világörökség része.", "ro": "„Orașul celor trei culturi”, sit al Patrimoniului Mondial UNESCO.", "en": "The 'City of the Three Cultures', a UNESCO World Heritage site."}
  },
  {
    id: "es-santiago", type: "city", parent: "ES-GA", coords: [-8.5448, 42.8782],
    name: {"de": "Santiago de Compostela", "hu": "Santiago de Compostela", "ro": "Santiago de Compostela", "en": "Santiago de Compostela"},
    description: {"de": "Endpunkt des berühmten Jakobswegs.", "hu": "A híres Szent Jakab-út végpontja.", "ro": "Punctul final al faimosului Camino de Santiago.", "en": "End point of the famous Camino de Santiago."}
  },
  {
    id: "es-alhambra", type: "landmark", parent: "ES-AN", coords: [-3.5896, 37.1760],
    name: {"de": "Alhambra", "hu": "Alhambra", "ro": "Alhambra", "en": "Alhambra"},
    description: {"de": "Atemberaubender maurischer Palastkomplex in Granada.", "hu": "Lélegzetelállító mór palotaegyüttes Granadában.", "ro": "Complex de palate maure uluitor în Granada.", "en": "Breathtaking Moorish palace complex in Granada."}
  },
  {
    id: "es-sagrada-familia", type: "landmark", parent: "ES-CT", coords: [2.1744, 41.4036],
    name: {"de": "Sagrada Familia", "hu": "Sagrada Família", "ro": "Sagrada Familia", "en": "Sagrada Familia"},
    description: {"de": "Antoni Gaudís unvollendetes Meisterwerk in Barcelona.", "hu": "Antoni Gaudí befejezetlen remekműve Barcelonában.", "ro": "Capodopera neterminată a lui Antoni Gaudí din Barcelona.", "en": "Antoni Gaudí's unfinished masterpiece in Barcelona."}
  },
  {
    id: "es-park-guell", type: "landmark", parent: "ES-CT", coords: [2.1527, 41.4145],
    name: {"de": "Park Güell", "hu": "Güell park", "ro": "Parcul Güell", "en": "Park Güell"},
    description: {"de": "Ein farbenfroher öffentlicher Park mit Architekturelementen von Gaudí.", "hu": "Színes nyilvános park Gaudí építészeti elemeivel.", "ro": "Un parc public plin de culoare, cu elemente arhitecturale de Gaudí.", "en": "A colorful public park with architectural elements by Gaudí."}
  },
  {
    id: "es-prado", type: "landmark", parent: "ES-MD", coords: [-3.6922, 40.4138],
    name: {"de": "Museo del Prado", "hu": "Prado Múzeum", "ro": "Muzeul Prado", "en": "Prado Museum"},
    description: {"de": "Das wichtigste spanische nationale Kunstmuseum in Madrid.", "hu": "Spanyolország legfontosabb nemzeti művészeti múzeuma Madridban.", "ro": "Principalul muzeu național de artă spaniol din Madrid.", "en": "The main Spanish national art museum in Madrid."}
  },
  {
    id: "es-santiago-bernabeu", type: "landmark", parent: "ES-MD", coords: [-3.6883, 40.4531],
    name: {"de": "Santiago Bernabéu Stadion", "hu": "Santiago Bernabéu Stadion", "ro": "Stadionul Santiago Bernabéu", "en": "Santiago Bernabéu Stadium"},
    description: {"de": "Das berühmte Stadion des Fußballvereins Real Madrid.", "hu": "A Real Madrid futballklub híres stadionja.", "ro": "Faimosul stadion al clubului de fotbal Real Madrid.", "en": "The famous stadium of the Real Madrid football club."}
  },
  {
    id: "es-camp-nou", type: "landmark", parent: "ES-CT", coords: [2.1228, 41.3809],
    name: {"de": "Camp Nou", "hu": "Camp Nou", "ro": "Camp Nou", "en": "Camp Nou"},
    description: {"de": "Das Heimatstadion des FC Barcelona und das größte Stadion Europas.", "hu": "Az FC Barcelona hazai stadionja és Európa legnagyobb stadionja.", "ro": "Stadionul de origine al FC Barcelona și cel mai mare stadion din Europa.", "en": "The home stadium of FC Barcelona and the largest stadium in Europe."}
  },
  {
    id: "es-ibiza", type: "landmark", parent: "ES-IB", coords: [1.4322, 38.9067],
    name: {"de": "Ibiza", "hu": "Ibiza", "ro": "Ibiza", "en": "Ibiza"},
    description: {"de": "Insel der Balearen, berühmt für ihr Nachtleben und schöne Strände.", "hu": "Baleár-sziget, híres éjszakai életéről és gyönyörű strandjairól.", "ro": "Insulă din Baleare, faimoasă pentru viața de noapte și plajele frumoase.", "en": "Balearic island famous for its nightlife and beautiful beaches."}
  },
  {
    id: "es-mallorca", type: "landmark", parent: "ES-IB", coords: [2.9862, 39.6151],
    name: {"de": "Mallorca", "hu": "Mallorca", "ro": "Mallorca", "en": "Mallorca"},
    description: {"de": "Die größte der Baleareninseln, ein beliebtes Urlaubsziel.", "hu": "A legnagyobb Baleár-sziget, népszerű nyaralóhely.", "ro": "Cea mai mare dintre Insulele Baleare, o destinație populară de vacanță.", "en": "The largest of the Balearic Islands, a popular holiday destination."}
  },
  {
    id: "es-tenerife", type: "landmark", parent: "ES-CN", coords: [-16.6291, 28.2916],
    name: {"de": "Teneriffa", "hu": "Tenerife", "ro": "Tenerife", "en": "Tenerife"},
    description: {"de": "Die größte der Kanarischen Inseln, dominiert vom Vulkan Teide.", "hu": "A legnagyobb Kanári-sziget, a Teide vulkán uralja.", "ro": "Cea mai mare dintre Insulele Canare, dominată de vulcanul Teide.", "en": "The largest of the Canary Islands, dominated by the Teide volcano."}
  },
  {
    id: "es-gran-canaria", type: "landmark", parent: "ES-CN", coords: [-15.5997, 27.9202],
    name: {"de": "Gran Canaria", "hu": "Gran Canaria", "ro": "Gran Canaria", "en": "Gran Canaria"},
    description: {"de": "Kanarische Insel, bekannt für ihre vielfältigen Landschaften.", "hu": "Kanári-sziget, változatos tájairól ismert.", "ro": "Insula Canară, cunoscută pentru peisajele sale diverse.", "en": "Canary Island known for its diverse landscapes."}
  },
  {
    id: "es-pyrenees", type: "nature", parent: "ES-AR", coords: [-0.0763, 42.6687],
    name: {"de": "Pyrenäen", "hu": "Pireneusok", "ro": "Pirinei", "en": "Pyrenees"},
    description: {"de": "Die Bergkette, die die natürliche Grenze zwischen Spanien und Frankreich bildet.", "hu": "A Spanyolország és Franciaország közötti természetes határt alkotó hegység.", "ro": "Lanțul muntos care formează granița naturală dintre Spania și Franța.", "en": "The mountain range that forms the natural border between Spain and France."}
  },
  {
    id: "es-sierra-nevada", type: "nature", parent: "ES-AN", coords: [-3.3000, 37.0500],
    name: {"de": "Sierra Nevada", "hu": "Sierra Nevada", "ro": "Sierra Nevada", "en": "Sierra Nevada"},
    description: {"de": "Gebirgszug in Andalusien mit dem höchsten Gipfel des spanischen Festlands.", "hu": "Hegység Andalúziában, a kontinentális Spanyolország legmagasabb csúcsával.", "ro": "Lanț muntos din Andaluzia cu cel mai înalt vârf din Spania continentală.", "en": "Mountain range in Andalusia containing the highest point of continental Spain."}
  },
  {
    id: "es-picos-europa", type: "nature", parent: "ES-AS", coords: [-4.8458, 43.1979],
    name: {"de": "Picos de Europa", "hu": "Picos de Europa", "ro": "Picos de Europa", "en": "Picos de Europa"},
    description: {"de": "Ein markantes Bergmassiv an der Nordküste Spaniens.", "hu": "Jellegzetes hegymasszívum Spanyolország északi partján.", "ro": "Un masiv muntos uimitor pe coasta de nord a Spaniei.", "en": "A striking mountain massif on the northern coast of Spain."}
  },
  {
    id: "es-costa-brava", type: "nature", parent: "ES-CT", coords: [3.1235, 41.9750],
    name: {"de": "Costa Brava", "hu": "Costa Brava", "ro": "Costa Brava", "en": "Costa Brava"},
    description: {"de": "Wilde Küstenregion im Nordosten von Katalonien.", "hu": "Vad tengerparti régió Katalónia északkeleti részén.", "ro": "Regiune de coastă sălbatică în nord-estul Cataloniei.", "en": "Wild coastal region in northeastern Catalonia."}
  },
  {
    id: "es-costa-del-sol", type: "nature", parent: "ES-AN", coords: [-4.6318, 36.5360],
    name: {"de": "Costa del Sol", "hu": "Costa del Sol", "ro": "Costa del Sol", "en": "Costa del Sol"},
    description: {"de": "Sonnenverwöhnte Küste in Südspanien, ein beliebtes Touristenziel.", "hu": "Napsütötte tengerpart Dél-Spanyolországban, népszerű turisztikai célpont.", "ro": "Coastă însorită din sudul Spaniei, o destinație turistică populară.", "en": "Sun-drenched coast in southern Spain, a popular tourist destination."}
  }
];

export const spainAllPoi: POI[] = [...spainCountry, ...spainRegions, ...spainCities];
