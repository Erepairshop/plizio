import type { POI } from "./poi";

type Lang = "de" | "hu" | "ro" | "en";
type Theme = "coastal" | "heritage" | "mountain" | "urban" | "port" | "university" | "wine";

const REGION_NAMES: Record<string, Record<Lang, string>> = {
  "ES-AN": { de: "Andalusien", hu: "Andalúzia", ro: "Andaluzia", en: "Andalusia" },
  "ES-AR": { de: "Aragonien", hu: "Aragónia", ro: "Aragon", en: "Aragon" },
  "ES-AS": { de: "Asturien", hu: "Asztúria", ro: "Asturia", en: "Asturias" },
  "ES-IB": { de: "Balearen", hu: "Baleár-szigetek", ro: "Insulele Baleare", en: "Balearic Islands" },
  "ES-CB": { de: "Kantabrien", hu: "Kantábria", ro: "Cantabria", en: "Cantabria" },
  "ES-CL": { de: "Kastilien und León", hu: "Kasztília és León", ro: "Castilia și León", en: "Castile and León" },
  "ES-CM": { de: "Kastilien-La Mancha", hu: "Kasztília-La Mancha", ro: "Castilia-La Mancha", en: "Castilla-La Mancha" },
  "ES-CN": { de: "Kanarische Inseln", hu: "Kanári-szigetek", ro: "Insulele Canare", en: "Canary Islands" },
  "ES-CT": { de: "Katalonien", hu: "Katalónia", ro: "Catalonia", en: "Catalonia" },
  "ES-EX": { de: "Extremadura", hu: "Extremadura", ro: "Extremadura", en: "Extremadura" },
  "ES-GA": { de: "Galicien", hu: "Galícia", ro: "Galicia", en: "Galicia" },
  "ES-MD": { de: "Madrid", hu: "Madrid", ro: "Madrid", en: "Madrid" },
  "ES-MU": { de: "Murcia", hu: "Murcia", ro: "Murcia", en: "Murcia" },
  "ES-NA": { de: "Navarra", hu: "Navarra", ro: "Navarra", en: "Navarre" },
  "ES-PV": { de: "Baskenland", hu: "Baszkföld", ro: "Țara Bascilor", en: "Basque Country" },
  "ES-RI": { de: "La Rioja", hu: "La Rioja", ro: "La Rioja", en: "La Rioja" },
  "ES-VC": { de: "Valencia", hu: "Valencia", ro: "Valencia", en: "Valencian Community" },
};

const THEME_TEXT: Record<Theme, { desc: Record<Lang, string>; facts: Record<Lang, [string, string, string]> }> = {
  coastal: {
    desc: {
      de: "eine Küstenstadt mit Hafen- und Strandcharakter",
      hu: "egy tengerparti város kikötőkkel és strandokkal",
      ro: "un oraș de coastă cu porturi și plaje",
      en: "a coastal city with harbor and beach life",
    },
    facts: {
      de: [
        "Die Lage am Meer prägt Klima und Alltag.",
        "Promenaden und Strände gehören oft zum Stadtbild.",
        "Frischer Fisch und Meeresfrüchte sind typisch für die Küche.",
      ],
      hu: [
        "A tenger közelsége meghatározza az éghajlatot és a mindennapokat.",
        "A sétányok és a strandok gyakran a városkép részei.",
        "A friss hal és a tengeri ételek sok helyen jellemzőek.",
      ],
      ro: [
        "Apropierea de mare influențează clima și viața de zi cu zi.",
        "Promenadele și plajele fac adesea parte din peisajul urban.",
        "Peștele și fructele de mare sunt frecvente în bucătăria locală.",
      ],
      en: [
        "The sea shapes the climate and daily rhythm.",
        "Promenades and beaches often define the cityscape.",
        "Fresh fish and seafood are common local specialties.",
      ],
    },
  },
  heritage: {
    desc: {
      de: "eine historische Stadt mit starkem Kulturerbe",
      hu: "egy történelmi város erős kulturális örökséggel",
      ro: "un oraș istoric cu un patrimoniu puternic",
      en: "a historic city with a strong heritage profile",
    },
    facts: {
      de: [
        "Die Altstadt bewahrt viele Spuren vergangener Jahrhunderte.",
        "Plätze, Kirchen und Paläste prägen das Stadtbild.",
        "Besucher kommen oft wegen Architektur und Museen.",
      ],
      hu: [
        "Az óváros sok múltbeli évszázad nyomát őrzi.",
        "Terek, templomok és paloták határozzák meg a városképet.",
        "A látogatók gyakran az építészet és a múzeumok miatt érkeznek.",
      ],
      ro: [
        "Centrul vechi păstrează multe urme ale secolelor trecute.",
        "Piețele, bisericile și palatele definesc peisajul urban.",
        "Vizitatorii vin adesea pentru arhitectură și muzee.",
      ],
      en: [
        "The old town preserves many traces of earlier centuries.",
        "Squares, churches, and palaces shape the cityscape.",
        "Visitors often come for the architecture and museums.",
      ],
    },
  },
  mountain: {
    desc: {
      de: "eine Stadt am Rand von Bergen oder Hochland",
      hu: "egy hegyek vagy fennsíkok közelében fekvő város",
      ro: "un oraș aflat la marginea munților sau a podișului",
      en: "a city near mountains or highland landscapes",
    },
    facts: {
      de: [
        "Das Umland bietet oft Hügel, Täler oder Aussichtspunkte.",
        "Der Ort eignet sich gut als Ausgangspunkt für Naturausflüge.",
        "Das Klima ist meist etwas kühler als an der Küste.",
      ],
      hu: [
        "A környék gyakran dombokat, völgyeket vagy kilátókat kínál.",
        "A település jó kiindulópont természetjáráshoz.",
        "Az éghajlat általában hűvösebb, mint a partvidéken.",
      ],
      ro: [
        "Împrejurimile oferă adesea dealuri, văi sau puncte de belvedere.",
        "Locul este bun ca punct de plecare pentru excursii în natură.",
        "Clima este de obicei ceva mai răcoroasă decât pe coastă.",
      ],
      en: [
        "The surroundings often feature hills, valleys, or viewpoints.",
        "It is a good base for nature outings.",
        "The climate is usually a bit cooler than on the coast.",
      ],
    },
  },
  urban: {
    desc: {
      de: "eine lebendige Stadt mit starkem Alltags- und Kulturleben",
      hu: "egy élénk város erős mindennapi és kulturális élettel",
      ro: "un oraș vibrant cu viață urbană și culturală intensă",
      en: "a lively city with a strong everyday and cultural rhythm",
    },
    facts: {
      de: [
        "Handel, Kultur und Alltag verschmelzen hier deutlich.",
        "Der Stadtkern ist meist lebendig und gut vernetzt.",
        "Cafés, Plätze und kleine Geschäfte prägen das Bild.",
      ],
      hu: [
        "A kereskedelem, a kultúra és a mindennapok itt jól összefonódnak.",
        "A belváros általában élénk és jól kapcsolt.",
        "Kávézók, terek és kis üzletek adják a hangulatot.",
      ],
      ro: [
        "Comerțul, cultura și viața cotidiană se împletesc aici clar.",
        "Centrul orașului este de obicei animat și bine conectat.",
        "Cafenelele, piețele și micile magazine dau tonul locului.",
      ],
      en: [
        "Trade, culture, and daily life blend here naturally.",
        "The city center is usually lively and well connected.",
        "Cafes, squares, and small shops shape the atmosphere.",
      ],
    },
  },
  port: {
    desc: {
      de: "ein bedeutender Hafen- und Handelsort",
      hu: "egy fontos kikötő- és kereskedelmi hely",
      ro: "un important oraș-port și centru comercial",
      en: "an important port and trade city",
    },
    facts: {
      de: [
        "Hafen und Logistik prägen den Ort stark.",
        "Die Verbindung zum Meer ist wirtschaftlich wichtig.",
        "Küstenverkehr und Fischerei spielen oft eine Rolle.",
      ],
      hu: [
        "A kikötő és a logisztika erősen meghatározza a helyet.",
        "A tengerhez fűződő kapcsolat gazdaságilag fontos.",
        "A part menti közlekedés és a halászat gyakran szerepet kap.",
      ],
      ro: [
        "Portul și logistica definesc puternic locul.",
        "Legătura cu marea este importantă din punct de vedere economic.",
        "Traficul de coastă și pescuitul au deseori un rol important.",
      ],
      en: [
        "The port and logistics sector strongly shape the city.",
        "Its link to the sea is economically important.",
        "Coastal traffic and fishing often play a role.",
      ],
    },
  },
  university: {
    desc: {
      de: "eine traditionsreiche Universitätsstadt",
      hu: "egy hagyományos egyetemi város",
      ro: "un oraș universitar cu tradiție",
      en: "a traditional university city",
    },
    facts: {
      de: [
        "Studenten prägen das Straßenbild und die Kultur.",
        "Die Stadt hat eine lange Bildungs- und Forschungstradition.",
        "Cafés, Bibliotheken und Altstadtgassen gehören zum Alltag.",
      ],
      hu: [
        "A diákok meghatározzák az utcák hangulatát és a kultúrát.",
        "A városnak hosszú oktatási és kutatási hagyománya van.",
        "Kávézók, könyvtárak és óvárosi sikátorok a mindennapok részei.",
      ],
      ro: [
        "Studenții definesc atmosfera străzilor și cultura locală.",
        "Orașul are o tradiție lungă în educație și cercetare.",
        "Cafenelele, bibliotecile și străduțele vechi fac parte din viața de zi cu zi.",
      ],
      en: [
        "Students shape the streetscape and culture.",
        "The city has a long tradition in education and research.",
        "Cafes, libraries, and old town lanes are part of daily life.",
      ],
    },
  },
  wine: {
    desc: {
      de: "eine Stadt im Umfeld bekannter Weintradition",
      hu: "egy város híres borászati hagyományok közelében",
      ro: "un oraș legat de o tradiție vinicolă renumită",
      en: "a city linked to a renowned wine tradition",
    },
    facts: {
      de: [
        "Die Umgebung ist für Wein und Bodegas bekannt.",
        "Kulinarik und regionale Produkte spielen eine große Rolle.",
        "Viele Besucher verbinden den Ort mit Genuss und Tradition.",
      ],
      hu: [
        "A környék borairól és bodegáiról ismert.",
        "A gasztronómia és a helyi termékek fontos szerepet kapnak.",
        "Sok látogató az ízekkel és a hagyománnyal azonosítja a helyet.",
      ],
      ro: [
        "Împrejurimile sunt cunoscute pentru vin și bodegas.",
        "Gastronomia și produsele regionale au un rol important.",
        "Mulți vizitatori asociază locul cu tradiția și plăcerea gustului.",
      ],
      en: [
        "The surrounding area is known for wine and bodegas.",
        "Cuisine and regional products play a major role.",
        "Many visitors associate the place with taste and tradition.",
      ],
    },
  },
};

type CitySeed = {
  id: string;
  parent: keyof typeof REGION_NAMES;
  coords: [number, number];
  name: Record<Lang, string>;
  theme: Theme;
};

const CITY_SEEDS: CitySeed[] = [
  { id: "es-cadiz", parent: "ES-AN", coords: [-6.2886, 36.5271], name: { de: "Cádiz", hu: "Cádiz", ro: "Cádiz", en: "Cádiz" }, theme: "coastal" },
  { id: "es-jerez", parent: "ES-AN", coords: [-6.1377, 36.6850], name: { de: "Jerez de la Frontera", hu: "Jerez de la Frontera", ro: "Jerez de la Frontera", en: "Jerez de la Frontera" }, theme: "wine" },
  { id: "es-algeciras", parent: "ES-AN", coords: [-5.4477, 36.1408], name: { de: "Algeciras", hu: "Algeciras", ro: "Algeciras", en: "Algeciras" }, theme: "port" },
  { id: "es-huelva", parent: "ES-AN", coords: [-6.9447, 37.2614], name: { de: "Huelva", hu: "Huelva", ro: "Huelva", en: "Huelva" }, theme: "port" },
  { id: "es-jaen", parent: "ES-AN", coords: [-3.7889, 37.7796], name: { de: "Jaén", hu: "Jaén", ro: "Jaén", en: "Jaén" }, theme: "heritage" },
  { id: "es-ubeda", parent: "ES-AN", coords: [-3.3620, 38.0115], name: { de: "Úbeda", hu: "Úbeda", ro: "Úbeda", en: "Úbeda" }, theme: "heritage" },
  { id: "es-baeza", parent: "ES-AN", coords: [-3.4696, 37.9936], name: { de: "Baeza", hu: "Baeza", ro: "Baeza", en: "Baeza" }, theme: "heritage" },
  { id: "es-ronda", parent: "ES-AN", coords: [-5.1670, 36.7427], name: { de: "Ronda", hu: "Ronda", ro: "Ronda", en: "Ronda" }, theme: "mountain" },
  { id: "es-marbella", parent: "ES-AN", coords: [-4.8864, 36.5101], name: { de: "Marbella", hu: "Marbella", ro: "Marbella", en: "Marbella" }, theme: "coastal" },
  { id: "es-antequera", parent: "ES-AN", coords: [-4.5581, 37.0182], name: { de: "Antequera", hu: "Antequera", ro: "Antequera", en: "Antequera" }, theme: "heritage" },
  { id: "es-motril", parent: "ES-AN", coords: [-3.5183, 36.7447], name: { de: "Motril", hu: "Motril", ro: "Motril", en: "Motril" }, theme: "coastal" },
  { id: "es-nerja", parent: "ES-AN", coords: [-3.8810, 36.7470], name: { de: "Nerja", hu: "Nerja", ro: "Nerja", en: "Nerja" }, theme: "coastal" },
  { id: "es-girona", parent: "ES-CT", coords: [2.8214, 41.9794], name: { de: "Girona", hu: "Girona", ro: "Girona", en: "Girona" }, theme: "heritage" },
  { id: "es-tarragona", parent: "ES-CT", coords: [1.2493, 41.1189], name: { de: "Tarragona", hu: "Tarragona", ro: "Tarragona", en: "Tarragona" }, theme: "heritage" },
  { id: "es-lleida", parent: "ES-CT", coords: [0.6220, 41.6176], name: { de: "Lleida", hu: "Lleida", ro: "Lleida", en: "Lleida" }, theme: "urban" },
  { id: "es-figueres", parent: "ES-CT", coords: [2.9580, 42.2650], name: { de: "Figueres", hu: "Figueres", ro: "Figueres", en: "Figueres" }, theme: "heritage" },
  { id: "es-reus", parent: "ES-CT", coords: [1.1098, 41.1545], name: { de: "Reus", hu: "Reus", ro: "Reus", en: "Reus" }, theme: "urban" },
  { id: "es-sabadell", parent: "ES-CT", coords: [2.1097, 41.5486], name: { de: "Sabadell", hu: "Sabadell", ro: "Sabadell", en: "Sabadell" }, theme: "urban" },
  { id: "es-terrassa", parent: "ES-CT", coords: [2.0104, 41.5632], name: { de: "Terrassa", hu: "Terrassa", ro: "Terrassa", en: "Terrassa" }, theme: "urban" },
  { id: "es-vic", parent: "ES-CT", coords: [2.2549, 41.9301], name: { de: "Vic", hu: "Vic", ro: "Vic", en: "Vic" }, theme: "heritage" },
  { id: "es-sitges", parent: "ES-CT", coords: [1.8118, 41.2342], name: { de: "Sitges", hu: "Sitges", ro: "Sitges", en: "Sitges" }, theme: "coastal" },
  { id: "es-tortosa", parent: "ES-CT", coords: [0.5200, 40.8126], name: { de: "Tortosa", hu: "Tortosa", ro: "Tortosa", en: "Tortosa" }, theme: "heritage" },
  { id: "es-alicante", parent: "ES-VC", coords: [-0.4907, 38.3452], name: { de: "Alicante", hu: "Alicante", ro: "Alicante", en: "Alicante" }, theme: "coastal" },
  { id: "es-elche", parent: "ES-VC", coords: [-0.6984, 38.2699], name: { de: "Elche", hu: "Elche", ro: "Elche", en: "Elche" }, theme: "urban" },
  { id: "es-castellon", parent: "ES-VC", coords: [-0.0513, 39.9864], name: { de: "Castellón de la Plana", hu: "Castellón de la Plana", ro: "Castellón de la Plana", en: "Castellón de la Plana" }, theme: "coastal" },
  { id: "es-benidorm", parent: "ES-VC", coords: [-0.1310, 38.5411], name: { de: "Benidorm", hu: "Benidorm", ro: "Benidorm", en: "Benidorm" }, theme: "coastal" },
  { id: "es-gandia", parent: "ES-VC", coords: [-0.1810, 38.9670], name: { de: "Gandia", hu: "Gandia", ro: "Gandia", en: "Gandia" }, theme: "coastal" },
  { id: "es-alcoi", parent: "ES-VC", coords: [-0.4731, 38.6988], name: { de: "Alcoi", hu: "Alcoi", ro: "Alcoi", en: "Alcoi" }, theme: "mountain" },
  { id: "es-denia", parent: "ES-VC", coords: [0.1057, 38.8408], name: { de: "Dénia", hu: "Dénia", ro: "Dénia", en: "Dénia" }, theme: "coastal" },
  { id: "es-xabia", parent: "ES-VC", coords: [0.1643, 38.7912], name: { de: "Xàbia", hu: "Xàbia", ro: "Xàbia", en: "Xàbia" }, theme: "coastal" },
  { id: "es-burgos", parent: "ES-CL", coords: [-3.7038, 42.3439], name: { de: "Burgos", hu: "Burgos", ro: "Burgos", en: "Burgos" }, theme: "heritage" },
  { id: "es-leon", parent: "ES-CL", coords: [-5.5671, 42.5987], name: { de: "León", hu: "León", ro: "León", en: "León" }, theme: "heritage" },
  { id: "es-segovia", parent: "ES-CL", coords: [-4.1184, 40.9429], name: { de: "Segovia", hu: "Segovia", ro: "Segovia", en: "Segovia" }, theme: "heritage" },
  { id: "es-avila", parent: "ES-CL", coords: [-4.6976, 40.6566], name: { de: "Ávila", hu: "Ávila", ro: "Ávila", en: "Ávila" }, theme: "heritage" },
  { id: "es-soria", parent: "ES-CL", coords: [-2.4652, 41.7636], name: { de: "Soria", hu: "Soria", ro: "Soria", en: "Soria" }, theme: "mountain" },
  { id: "es-zamora", parent: "ES-CL", coords: [-5.7448, 41.5034], name: { de: "Zamora", hu: "Zamora", ro: "Zamora", en: "Zamora" }, theme: "heritage" },
  { id: "es-palencia", parent: "ES-CL", coords: [-4.5288, 42.0101], name: { de: "Palencia", hu: "Palencia", ro: "Palencia", en: "Palencia" }, theme: "urban" },
  { id: "es-ponferrada", parent: "ES-CL", coords: [-6.5900, 42.5480], name: { de: "Ponferrada", hu: "Ponferrada", ro: "Ponferrada", en: "Ponferrada" }, theme: "mountain" },
  { id: "es-coruna", parent: "ES-GA", coords: [-8.4115, 43.3623], name: { de: "A Coruña", hu: "A Coruña", ro: "A Coruña", en: "A Coruña" }, theme: "coastal" },
  { id: "es-vigo", parent: "ES-GA", coords: [-8.7226, 42.2406], name: { de: "Vigo", hu: "Vigo", ro: "Vigo", en: "Vigo" }, theme: "port" },
  { id: "es-santiago", parent: "ES-GA", coords: [-8.5448, 42.8782], name: { de: "Santiago de Compostela", hu: "Santiago de Compostela", ro: "Santiago de Compostela", en: "Santiago de Compostela" }, theme: "university" },
  { id: "es-lugo", parent: "ES-GA", coords: [-7.5560, 43.0121], name: { de: "Lugo", hu: "Lugo", ro: "Lugo", en: "Lugo" }, theme: "heritage" },
  { id: "es-ourense", parent: "ES-GA", coords: [-7.8639, 42.3359], name: { de: "Ourense", hu: "Ourense", ro: "Ourense", en: "Ourense" }, theme: "urban" },
  { id: "es-pontevedra", parent: "ES-GA", coords: [-8.6444, 42.4337], name: { de: "Pontevedra", hu: "Pontevedra", ro: "Pontevedra", en: "Pontevedra" }, theme: "coastal" },
  { id: "es-ferrol", parent: "ES-GA", coords: [-8.2360, 43.4880], name: { de: "Ferrol", hu: "Ferrol", ro: "Ferrol", en: "Ferrol" }, theme: "port" },
  { id: "es-toledo", parent: "ES-CM", coords: [-4.0273, 39.8628], name: { de: "Toledo", hu: "Toledo", ro: "Toledo", en: "Toledo" }, theme: "heritage" },
  { id: "es-cuenca", parent: "ES-CM", coords: [-2.1319, 40.0704], name: { de: "Cuenca", hu: "Cuenca", ro: "Cuenca", en: "Cuenca" }, theme: "heritage" },
  { id: "es-albacete", parent: "ES-CM", coords: [-1.8559, 38.9944], name: { de: "Albacete", hu: "Albacete", ro: "Albacete", en: "Albacete" }, theme: "urban" },
  { id: "es-ciudad-real", parent: "ES-CM", coords: [-3.9272, 38.9860], name: { de: "Ciudad Real", hu: "Ciudad Real", ro: "Ciudad Real", en: "Ciudad Real" }, theme: "urban" },
  { id: "es-talavera", parent: "ES-CM", coords: [-4.8248, 39.9598], name: { de: "Talavera de la Reina", hu: "Talavera de la Reina", ro: "Talavera de la Reina", en: "Talavera de la Reina" }, theme: "urban" },
  { id: "es-puertollano", parent: "ES-CM", coords: [-4.1070, 38.6866], name: { de: "Puertollano", hu: "Puertollano", ro: "Puertollano", en: "Puertollano" }, theme: "urban" },
  { id: "es-guadalajara", parent: "ES-CM", coords: [-3.1689, 40.6331], name: { de: "Guadalajara", hu: "Guadalajara", ro: "Guadalajara", en: "Guadalajara" }, theme: "urban" },
  { id: "es-alcala", parent: "ES-MD", coords: [-3.3686, 40.4818], name: { de: "Alcalá de Henares", hu: "Alcalá de Henares", ro: "Alcalá de Henares", en: "Alcalá de Henares" }, theme: "university" },
  { id: "es-aranjuez", parent: "ES-MD", coords: [-3.6038, 40.0357], name: { de: "Aranjuez", hu: "Aranjuez", ro: "Aranjuez", en: "Aranjuez" }, theme: "heritage" },
  { id: "es-getafe", parent: "ES-MD", coords: [-3.7320, 40.3080], name: { de: "Getafe", hu: "Getafe", ro: "Getafe", en: "Getafe" }, theme: "urban" },
  { id: "es-mostoles", parent: "ES-MD", coords: [-3.8648, 40.3223], name: { de: "Móstoles", hu: "Móstoles", ro: "Móstoles", en: "Móstoles" }, theme: "urban" },
  { id: "es-san-sebastian", parent: "ES-PV", coords: [-1.9812, 43.3183], name: { de: "San Sebastián", hu: "San Sebastián", ro: "San Sebastián", en: "San Sebastián" }, theme: "coastal" },
  { id: "es-vitoria", parent: "ES-PV", coords: [-2.6733, 42.8467], name: { de: "Vitoria-Gasteiz", hu: "Vitoria-Gasteiz", ro: "Vitoria-Gasteiz", en: "Vitoria-Gasteiz" }, theme: "urban" },
  { id: "es-getxo", parent: "ES-PV", coords: [-2.9910, 43.3566], name: { de: "Getxo", hu: "Getxo", ro: "Getxo", en: "Getxo" }, theme: "coastal" },
  { id: "es-portugalete", parent: "ES-PV", coords: [-3.0200, 43.3200], name: { de: "Portugalete", hu: "Portugalete", ro: "Portugalete", en: "Portugalete" }, theme: "port" },
  { id: "es-barakaldo", parent: "ES-PV", coords: [-2.9870, 43.2970], name: { de: "Barakaldo", hu: "Barakaldo", ro: "Barakaldo", en: "Barakaldo" }, theme: "urban" },
  { id: "es-hondarribia", parent: "ES-PV", coords: [-1.7890, 43.3660], name: { de: "Hondarribia", hu: "Hondarribia", ro: "Hondarribia", en: "Hondarribia" }, theme: "coastal" },
  { id: "es-gernika", parent: "ES-PV", coords: [-2.6860, 43.3170], name: { de: "Gernika-Lumo", hu: "Gernika-Lumo", ro: "Gernika-Lumo", en: "Gernika-Lumo" }, theme: "heritage" },
  { id: "es-pamplona", parent: "ES-NA", coords: [-1.6432, 42.8125], name: { de: "Pamplona", hu: "Pamplona", ro: "Pamplona", en: "Pamplona" }, theme: "university" },
  { id: "es-tudela", parent: "ES-NA", coords: [-1.6075, 42.0634], name: { de: "Tudela", hu: "Tudela", ro: "Tudela", en: "Tudela" }, theme: "urban" },
  { id: "es-estella", parent: "ES-NA", coords: [-2.0324, 42.6714], name: { de: "Estella-Lizarra", hu: "Estella-Lizarra", ro: "Estella-Lizarra", en: "Estella-Lizarra" }, theme: "heritage" },
  { id: "es-tafalla", parent: "ES-NA", coords: [-1.6809, 42.5232], name: { de: "Tafalla", hu: "Tafalla", ro: "Tafalla", en: "Tafalla" }, theme: "urban" },
  { id: "es-logrono", parent: "ES-RI", coords: [-2.4457, 42.4627], name: { de: "Logroño", hu: "Logroño", ro: "Logroño", en: "Logroño" }, theme: "wine" },
  { id: "es-haro", parent: "ES-RI", coords: [-2.8490, 42.5750], name: { de: "Haro", hu: "Haro", ro: "Haro", en: "Haro" }, theme: "wine" },
  { id: "es-calahorra", parent: "ES-RI", coords: [-1.9650, 42.3010], name: { de: "Calahorra", hu: "Calahorra", ro: "Calahorra", en: "Calahorra" }, theme: "urban" },
  { id: "es-santo-domingo", parent: "ES-RI", coords: [-3.0000, 42.4410], name: { de: "Santo Domingo de la Calzada", hu: "Santo Domingo de la Calzada", ro: "Santo Domingo de la Calzada", en: "Santo Domingo de la Calzada" }, theme: "heritage" },
  { id: "es-huesca", parent: "ES-AR", coords: [-0.4089, 42.1401], name: { de: "Huesca", hu: "Huesca", ro: "Huesca", en: "Huesca" }, theme: "mountain" },
  { id: "es-teruel", parent: "ES-AR", coords: [-1.1065, 40.3456], name: { de: "Teruel", hu: "Teruel", ro: "Teruel", en: "Teruel" }, theme: "heritage" },
  { id: "es-jaca", parent: "ES-AR", coords: [-0.5505, 42.5720], name: { de: "Jaca", hu: "Jaca", ro: "Jaca", en: "Jaca" }, theme: "mountain" },
  { id: "es-alcaniz", parent: "ES-AR", coords: [-0.1348, 41.0480], name: { de: "Alcañiz", hu: "Alcañiz", ro: "Alcañiz", en: "Alcañiz" }, theme: "heritage" },
  { id: "es-barbastro", parent: "ES-AR", coords: [0.1400, 42.0360], name: { de: "Barbastro", hu: "Barbastro", ro: "Barbastro", en: "Barbastro" }, theme: "wine" },
  { id: "es-calatayud", parent: "ES-AR", coords: [-1.6430, 41.3548], name: { de: "Calatayud", hu: "Calatayud", ro: "Calatayud", en: "Calatayud" }, theme: "heritage" },
  { id: "es-santander", parent: "ES-CB", coords: [-3.8044, 43.4623], name: { de: "Santander", hu: "Santander", ro: "Santander", en: "Santander" }, theme: "coastal" },
  { id: "es-torrelavega", parent: "ES-CB", coords: [-4.0260, 43.3500], name: { de: "Torrelavega", hu: "Torrelavega", ro: "Torrelavega", en: "Torrelavega" }, theme: "urban" },
  { id: "es-castro", parent: "ES-CB", coords: [-3.2170, 43.3820], name: { de: "Castro Urdiales", hu: "Castro Urdiales", ro: "Castro Urdiales", en: "Castro Urdiales" }, theme: "coastal" },
  { id: "es-laredo", parent: "ES-CB", coords: [-3.4060, 43.4110], name: { de: "Laredo", hu: "Laredo", ro: "Laredo", en: "Laredo" }, theme: "coastal" },
  { id: "es-oviedo", parent: "ES-AS", coords: [-5.8500, 43.3619], name: { de: "Oviedo", hu: "Oviedo", ro: "Oviedo", en: "Oviedo" }, theme: "university" },
  { id: "es-gijon", parent: "ES-AS", coords: [-5.6610, 43.5322], name: { de: "Gijón", hu: "Gijón", ro: "Gijón", en: "Gijón" }, theme: "coastal" },
  { id: "es-aviles", parent: "ES-AS", coords: [-5.9240, 43.5550], name: { de: "Avilés", hu: "Avilés", ro: "Avilés", en: "Avilés" }, theme: "port" },
  { id: "es-cangas", parent: "ES-AS", coords: [-5.1290, 43.3500], name: { de: "Cangas de Onís", hu: "Cangas de Onís", ro: "Cangas de Onís", en: "Cangas de Onís" }, theme: "mountain" },
  { id: "es-palma", parent: "ES-IB", coords: [2.6502, 39.5696], name: { de: "Palma", hu: "Palma", ro: "Palma", en: "Palma" }, theme: "coastal" },
  { id: "es-ibiza", parent: "ES-IB", coords: [1.4300, 38.9067], name: { de: "Ibiza", hu: "Ibiza", ro: "Ibiza", en: "Ibiza" }, theme: "coastal" },
  { id: "es-mahon", parent: "ES-IB", coords: [4.2650, 39.8880], name: { de: "Mahón", hu: "Mahón", ro: "Mahón", en: "Mahón" }, theme: "port" },
  { id: "es-inca", parent: "ES-IB", coords: [2.9130, 39.7180], name: { de: "Inca", hu: "Inca", ro: "Inca", en: "Inca" }, theme: "urban" },
  { id: "es-manacor", parent: "ES-IB", coords: [3.2110, 39.5690], name: { de: "Manacor", hu: "Manacor", ro: "Manacor", en: "Manacor" }, theme: "urban" },
  { id: "es-las-palmas", parent: "ES-CN", coords: [-15.4300, 28.1235], name: { de: "Las Palmas de Gran Canaria", hu: "Las Palmas de Gran Canaria", ro: "Las Palmas de Gran Canaria", en: "Las Palmas de Gran Canaria" }, theme: "coastal" },
  { id: "es-santa-cruz", parent: "ES-CN", coords: [-16.2510, 28.4630], name: { de: "Santa Cruz de Tenerife", hu: "Santa Cruz de Tenerife", ro: "Santa Cruz de Tenerife", en: "Santa Cruz de Tenerife" }, theme: "port" },
  { id: "es-la-laguna", parent: "ES-CN", coords: [-16.3140, 28.4860], name: { de: "La Laguna", hu: "La Laguna", ro: "La Laguna", en: "La Laguna" }, theme: "university" },
  { id: "es-telde", parent: "ES-CN", coords: [-15.4180, 27.9920], name: { de: "Telde", hu: "Telde", ro: "Telde", en: "Telde" }, theme: "urban" },
  { id: "es-badajoz", parent: "ES-EX", coords: [-6.9700, 38.8780], name: { de: "Badajoz", hu: "Badajoz", ro: "Badajoz", en: "Badajoz" }, theme: "port" },
  { id: "es-caceres", parent: "ES-EX", coords: [-6.3730, 39.4760], name: { de: "Cáceres", hu: "Cáceres", ro: "Cáceres", en: "Cáceres" }, theme: "heritage" },
  { id: "es-murcia", parent: "ES-MU", coords: [-1.1300, 37.9922], name: { de: "Murcia", hu: "Murcia", ro: "Murcia", en: "Murcia" }, theme: "urban" },
  { id: "es-cartagena", parent: "ES-MU", coords: [-0.9800, 37.6250], name: { de: "Cartagena", hu: "Cartagena", ro: "Cartagena", en: "Cartagena" }, theme: "port" },
  { id: "es-lorca", parent: "ES-MU", coords: [-1.6980, 37.6710], name: { de: "Lorca", hu: "Lorca", ro: "Lorca", en: "Lorca" }, theme: "heritage" },
  { id: "es-aguilas", parent: "ES-MU", coords: [-1.5800, 37.4060], name: { de: "Águilas", hu: "Águilas", ro: "Águilas", en: "Águilas" }, theme: "coastal" },
];

function buildDescription(seed: CitySeed, lang: Lang): string {
  const region = REGION_NAMES[seed.parent][lang];
  return `${seed.name[lang]} ist ${THEME_TEXT[seed.theme].desc[lang]} in ${region}.`;
}

function buildFacts(seed: CitySeed, lang: Lang): string[] {
  const region = REGION_NAMES[seed.parent][lang];
  return [`Liegt in ${region}.`, ...THEME_TEXT[seed.theme].facts[lang]];
}

export const spainCitiesExtra: POI[] = CITY_SEEDS.map((seed) => ({
  id: seed.id,
  type: "city",
  parent: seed.parent,
  coords: seed.coords,
  name: seed.name,
  description: {
    de: buildDescription(seed, "de"),
    hu: buildDescription(seed, "hu"),
    ro: buildDescription(seed, "ro"),
    en: buildDescription(seed, "en"),
  },
  facts: {
    de: buildFacts(seed, "de"),
    hu: buildFacts(seed, "hu"),
    ro: buildFacts(seed, "ro"),
    en: buildFacts(seed, "en"),
  },
}));
