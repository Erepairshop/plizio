import type { POI } from "./poi";

export const poiExtraUsaCitiesV2: POI[] = [
  {
    id: "new-york-city-cities-v2",
    type: "city",
    parent: "US-NY",
    coords: [-74.0060, 40.7128],
    name: { de: "New York City", hu: "New York", ro: "New York", en: "New York City" },
    description: {
      de: "Die bevölkerungsreichste Stadt der Vereinigten Staaten, ein globales Zentrum für Finanzen, Kultur und Medien.",
      hu: "Az Egyesült Államok legnépesebb városa, a pénzügy, a kultúra és a média globális központja.",
      ro: "Cel mai populat oraș din Statele Unite, un centru global pentru finanțe, cultură și media.",
      en: "The most populous city in the United States, a global hub for finance, culture, and media."
    },
    facts: {
      de: ["Spitzname 'The Big Apple'", "Besteht aus fünf Stadtteilen", "Heimat der Freiheitsstatue", "Über 8 Millionen Einwohner"],
      hu: ["Beceneve 'A Nagy Alma'", "Öt kerületből áll", "A Szabadság-szobor otthona", "Több mint 8 millió lakos"],
      ro: ["Poreclit 'Marele Măr'", "Compus din cinci burguri", "Gazda Statuii Libertății", "Peste 8 milioane de locuitori"],
      en: ["Nicknamed 'The Big Apple'", "Composed of five boroughs", "Home to the Statue of Liberty", "Over 8 million residents"]
    }
  },
  {
    id: "los-angeles-cities-v2",
    type: "city",
    parent: "US-CA",
    coords: [-118.2437, 34.0522],
    name: { de: "Los Angeles", hu: "Los Angeles", ro: "Los Angeles", en: "Los Angeles" },
    description: {
      de: "Die größte Stadt in Kalifornien und das Zentrum der amerikanischen Film- und Unterhaltungsindustrie.",
      hu: "Kalifornia legnagyobb városa, az amerikai film- és szórakoztatóipar központja.",
      ro: "Cel mai mare oraș din California și centrul industriei americane de film și divertisment.",
      en: "The largest city in California and the center of the American film and entertainment industry."
    },
    facts: {
      de: ["Bekannt für Hollywood", "Vielfältige Kulturlandschaft", "Umfangreiches Autobahnnetz", "Gastgeber der Olympischen Spiele"],
      hu: ["Hollywoodról ismert", "Változatos kulturális táj", "Kiterjedt autópálya-hálózat", "Olimpiai játékok házigazdája"],
      ro: ["Cunoscut pentru Hollywood", "Peisaj cultural divers", "Rețea extinsă de autostrăzi", "Gazdă a Jocurilor Olimpice"],
      en: ["Known for Hollywood", "Diverse cultural landscape", "Extensive freeway system", "Host of the Olympic Games"]
    }
  },
  {
    id: "chicago-cities-v2",
    type: "city",
    parent: "US-IL",
    coords: [-87.6298, 41.8781],
    name: { de: "Chicago", hu: "Chicago", ro: "Chicago", en: "Chicago" },
    description: {
      de: "Die größte Stadt im Mittleren Westen, bekannt für ihre kühne Architektur und ihre Wolkenkratzer.",
      hu: "A Közép-Nyugat legnagyobb városa, merész építészetéről és felhőkarcolóiról ismert.",
      ro: "Cel mai mare oraș din Midwest, cunoscut pentru arhitectura sa îndrăzneață și zgârie-norii săi.",
      en: "The largest city in the Midwest, known for its bold architecture and skyscrapers."
    },
    facts: {
      de: ["Spitzname 'The Windy City'", "Geburtsort des Wolkenkratzers", "Willis Tower, ehemals Sears Tower", "Wichtiger Verkehrsknotenpunkt"],
      hu: ["Beceneve 'A szeles város'", "A felhőkarcoló szülőhelye", "Willis Tower, korábban Sears Tower", "Fontos közlekedési csomópont"],
      ro: ["Poreclit 'Orașul Vânturilor'", "Locul de naștere al zgârie-norilor", "Willis Tower, fost Sears Tower", "Nod important de transport"],
      en: ["Nicknamed 'The Windy City'", "Birthplace of the skyscraper", "Willis Tower, formerly Sears Tower", "Major transportation hub"]
    }
  },
  {
    id: "houston-cities-v2",
    type: "city",
    parent: "US-TX",
    coords: [-95.3698, 29.7604],
    name: { de: "Houston", hu: "Houston", ro: "Houston", en: "Houston" },
    description: {
      de: "Die größte Stadt in Texas, ein Zentrum der Öl- und Gasindustrie und der Weltraumforschung.",
      hu: "Texas legnagyobb városa, az olaj- és gázipar, valamint az űrkutatás központja.",
      ro: "Cel mai mare oraș din Texas, un centru pentru industria petrolieră și a gazelor și explorarea spațială.",
      en: "The largest city in Texas, a hub for the oil and gas industry and space exploration."
    },
    facts: {
      de: ["Heimat des Johnson Space Center der NASA", "Großer internationaler Hafen", "Vielfältige Bevölkerung", "Museum District mit 19 Museen"],
      hu: ["A NASA Johnson Űrközpontjának otthona", "Nagy nemzetközi kikötő", "Változatos lakosság", "Múzeumi negyed 19 múzeummal"],
      ro: ["Gazda Centrului Spațial Johnson al NASA", "Port internațional major", "Populație diversă", "District muzeal cu 19 muzee"],
      en: ["Home to NASA's Johnson Space Center", "Major international port", "Diverse population", "Museum District with 19 museums"]
    }
  },
  {
    id: "phoenix-cities-v2",
    type: "state-capital",
    parent: "US-AZ",
    coords: [-112.0740, 33.4484],
    name: { de: "Phoenix", hu: "Phoenix", ro: "Phoenix", en: "Phoenix" },
    description: {
      de: "Die Hauptstadt und bevölkerungsreichste Stadt von Arizona, bekannt für ihr heißes Wüstenklima.",
      hu: "Arizona fővárosa és legnépesebb városa, forró sivatagi éghajlatáról ismert.",
      ro: "Capitala și cel mai populat oraș din Arizona, cunoscut pentru climatul său deșertic fierbinte.",
      en: "The capital and most populous city of Arizona, known for its hot desert climate."
    },
    facts: {
      de: ["Spitzname 'Valley of the Sun'", "Umgrenzt von Bergketten", "Ganzjährig warmes Wetter", "Wichtiger Wirtschaftsstandort im Südwesten"],
      hu: ["Beceneve 'A Nap Völgye'", "Hegyláncok veszik körül", "Egész évben meleg időjárás", "Fontos gazdasági központ a délnyugaton"],
      ro: ["Poreclit 'Valea Soarelui'", "Înconjurat de lanțuri montane", "Vreme caldă pe tot parcursul anului", "Centru economic important în sud-vest"],
      en: ["Nicknamed 'Valley of the Sun'", "Surrounded by mountain ranges", "Year-round warm weather", "Major economic hub in the Southwest"]
    }
  },
  {
    id: "philadelphia-cities-v2",
    type: "city",
    parent: "US-PA",
    coords: [-75.1652, 39.9526],
    name: { de: "Philadelphia", hu: "Philadelphia", ro: "Philadelphia", en: "Philadelphia" },
    description: {
      de: "Eine historisch bedeutsame Stadt, in der die Unabhängigkeitserklärung und die Verfassung unterzeichnet wurden.",
      hu: "Történelmileg jelentős város, ahol a Függetlenségi Nyilatkozatot és az Alkotmányt aláírták.",
      ro: "Un oraș important din punct de vedere istoric, unde au fost semnate Declarația de Independență și Constituția.",
      en: "A historically significant city where the Declaration of Independence and Constitution were signed."
    },
    facts: {
      de: ["Spitzname 'Philly' oder 'City of Brotherly Love'", "Heimat der Liberty Bell", "Bekannt für Philly Cheesesteaks", "Erste Hauptstadt der USA"],
      hu: ["Beceneve 'Philly' vagy 'A testvéri szeretet városa'", "A Szabadság-harang otthona", "Híres a Philly cheesesteakről", "Az USA első fővárosa"],
      ro: ["Poreclit 'Philly' sau 'Orașul Iubirii Frățești'", "Gazda Clopotului Libertății", "Cunoscut pentru cheesesteak-urile Philly", "Prima capitală a SUA"],
      en: ["Nicknamed 'Philly' or 'City of Brotherly Love'", "Home of the Liberty Bell", "Known for Philly cheesesteaks", "First capital of the U.S."]
    }
  },
  {
    id: "san-antonio-cities-v2",
    type: "city",
    parent: "US-TX",
    coords: [-98.4936, 29.4241],
    name: { de: "San Antonio", hu: "San Antonio", ro: "San Antonio", en: "San Antonio" },
    description: {
      de: "Eine Stadt mit reichem kolonialem Erbe, bekannt für den Alamo und den River Walk.",
      hu: "Gazdag gyarmati örökséggel rendelkező város, az Alamoról és a River Walkról ismert.",
      ro: "Un oraș cu o bogată moștenire colonială, cunoscut pentru Alamo și River Walk.",
      en: "A city with a rich colonial heritage, known for the Alamo and the River Walk."
    },
    facts: {
      de: ["Der Alamo, eine ehemalige spanische Mission", "River Walk mit Restaurants und Geschäften", "Starke hispanische Kultur", "Älteste Gemeinde in Texas"],
      hu: ["Az Alamo, egykori spanyol misszió", "River Walk éttermekkel és üzletekkel", "Erős spanyol kultúra", "Texas legrégebbi települése"],
      ro: ["Alamo, o fostă misiune spaniolă", "River Walk cu restaurante și magazine", "Cultură hispanică puternică", "Cea mai veche municipalitate din Texas"],
      en: ["The Alamo, a former Spanish mission", "River Walk lined with restaurants and shops", "Strong Hispanic culture", "Oldest municipality in Texas"]
    }
  },
  {
    id: "san-diego-cities-v2",
    type: "city",
    parent: "US-CA",
    coords: [-117.1611, 32.7157],
    name: { de: "San Diego", hu: "San Diego", ro: "San Diego", en: "San Diego" },
    description: {
      de: "Eine Küstenstadt in Südkalifornien, bekannt für ihre Strände, Parks und das milde Klima.",
      hu: "Part menti város Dél-Kaliforniában, strandjairól, parkjairól és enyhe éghajlatáról ismert.",
      ro: "Un oraș de coastă în sudul Californiei, cunoscut pentru plajele, parcurile și clima sa blândă.",
      en: "A coastal city in Southern California, known for its beaches, parks, and mild climate."
    },
    facts: {
      de: ["Heimat des weltberühmten San Diego Zoo", "Balboa Park mit zahlreichen Museen", "Starke Präsenz der US-Marine", "Beliebtes Touristenziel"],
      hu: ["A világhírű San Diego-i Állatkert otthona", "Balboa Park számos múzeummal", "Erős amerikai haditengerészeti jelenlét", "Népszerű turisztikai célpont"],
      ro: ["Gazda faimoasei Grădini Zoologice din San Diego", "Parcul Balboa cu numeroase muzee", "Prezență puternică a Marinei SUA", "Destinație turistică populară"],
      en: ["Home to the world-famous San Diego Zoo", "Balboa Park with numerous museums", "Strong U.S. Navy presence", "Popular tourist destination"]
    }
  },
  {
    id: "dallas-cities-v2",
    type: "city",
    parent: "US-TX",
    coords: [-96.7970, 32.7767],
    name: { de: "Dallas", hu: "Dallas", ro: "Dallas", en: "Dallas" },
    description: {
      de: "Ein wichtiges Handels- und Kulturzentrum in Nordtexas.",
      hu: "Észak-Texas fontos kereskedelmi és kulturális központja.",
      ro: "Un centru comercial și cultural major în nordul Texasului.",
      en: "A major commercial and cultural hub in North Texas."
    },
    facts: {
      de: ["Bekannt für die Dallas Cowboys (NFL)", "Arts District ist das größte städtische Kunstviertel der USA", "Historisches West End", "Ort des Attentats auf John F. Kennedy"],
      hu: ["Híres a Dallas Cowboys (NFL) csapatáról", "Az Arts District az USA legnagyobb városi művészeti negyede", "Történelmi West End", "John F. Kennedy meggyilkolásának helyszíne"],
      ro: ["Cunoscut pentru Dallas Cowboys (NFL)", "Districtul Artelor este cel mai mare district urban de artă din SUA", "West End istoric", "Locul asasinării lui John F. Kennedy"],
      en: ["Known for the Dallas Cowboys (NFL)", "Arts District is the largest urban arts district in the U.S.", "Historic West End", "Site of the assassination of John F. Kennedy"]
    }
  },
  {
    id: "san-jose-cities-v2",
    type: "city",
    parent: "US-CA",
    coords: [-121.8863, 37.3382],
    name: { de: "San José", hu: "San José", ro: "San Jose", en: "San Jose" },
    description: {
      de: "Das wirtschaftliche, kulturelle und politische Zentrum des Silicon Valley.",
      hu: "A Szilícium-völgy gazdasági, kulturális és politikai központja.",
      ro: "Centrul economic, cultural și politic al Silicon Valley.",
      en: "The economic, cultural, and political center of Silicon Valley."
    },
    facts: {
      de: ["Gilt als 'Hauptstadt des Silicon Valley'", "Hohe Konzentration von Technologieunternehmen", "Winchester Mystery House", "Tech Museum of Innovation"],
      hu: ["A 'Szilícium-völgy fővárosának' tartják", "Magas a technológiai vállalatok koncentrációja", "Winchester Mystery House", "Innovációs Technológiai Múzeum"],
      ro: ["Considerat 'Capitala Silicon Valley'", "Concentrație mare de companii de tehnologie", "Casa Misterelor Winchester", "Muzeul de Tehnologie al Inovației"],
      en: ["Considered the 'Capital of Silicon Valley'", "High concentration of tech companies", "Winchester Mystery House", "Tech Museum of Innovation"]
    }
  },
  {
    id: "austin-cities-v2",
    type: "state-capital",
    parent: "US-TX",
    coords: [-97.7431, 30.2672],
    name: { de: "Austin", hu: "Austin", ro: "Austin", en: "Austin" },
    description: {
      de: "Die Hauptstadt von Texas, bekannt für ihre lebendige Live-Musik-Szene und ihre Technologie-Industrie.",
      hu: "Texas fővárosa, élénk élőzenei színteréről és technológiai iparáról ismert.",
      ro: "Capitala Texasului, cunoscută pentru scena sa vibrantă de muzică live și industria tehnologică.",
      en: "The capital of Texas, known for its vibrant live-music scene and technology industry."
    },
    facts: {
      de: ["'Live Music Capital of the World'", "South by Southwest (SXSW) Festival", "'Keep Austin Weird' Motto", "Wachsendes Technologiezentrum 'Silicon Hills'"],
      hu: ["'A világ élőzenei fővárosa'", "South by Southwest (SXSW) fesztivál", "'Keep Austin Weird' (Tartsd meg Austint furcsának) mottó", "Növekvő 'Silicon Hills' technológiai központ"],
      ro: ["'Capitala mondială a muzicii live'", "Festivalul South by Southwest (SXSW)", "Motto-ul 'Păstrează Austinul ciudat'", "Centru tehnologic în creștere 'Silicon Hills'"],
      en: ["'Live Music Capital of the World'", "South by Southwest (SXSW) festival", "'Keep Austin Weird' motto", "Growing 'Silicon Hills' tech hub"]
    }
  },
  {
    id: "jacksonville-cities-v2",
    type: "city",
    parent: "US-FL",
    coords: [-81.6557, 30.3322],
    name: { de: "Jacksonville", hu: "Jacksonville", ro: "Jacksonville", en: "Jacksonville" },
    description: {
      de: "Die flächenmäßig größte Stadt in den kontinentalen Vereinigten Staaten, an der Atlantikküste Floridas.",
      hu: "Az kontinentális Egyesült Államok legnagyobb területű városa, Florida atlanti partvidékén.",
      ro: "Cel mai mare oraș ca suprafață din Statele Unite continentale, pe coasta atlantică a Floridei.",
      en: "The largest city by area in the contiguous United States, on the Atlantic coast of Florida."
    },
    facts: {
      de: ["Großer Militär- und Zivilhafen", "Umfangreiches Parksystem", "Jacksonville Jaguars (NFL)", "St. Johns River fließt durch die Stadt"],
      hu: ["Nagy katonai és polgári kikötő", "Kiterjedt parkrendszer", "Jacksonville Jaguars (NFL)", "A St. Johns folyó áthalad a városon"],
      ro: ["Port militar și civil mare", "Sistem extins de parcuri", "Jacksonville Jaguars (NFL)", "Râul St. Johns traversează orașul"],
      en: ["Large military and civilian deepwater port", "Extensive park system", "Jacksonville Jaguars (NFL)", "St. Johns River flows through the city"]
    }
  },
  {
    id: "fort-worth-cities-v2",
    type: "city",
    parent: "US-TX",
    coords: [-97.3327, 32.7555],
    name: { de: "Fort Worth", hu: "Fort Worth", ro: "Fort Worth", en: "Fort Worth" },
    description: {
      de: "Eine Stadt in Nordtexas, bekannt für ihr westliches Erbe und ihre boomende Innenstadt.",
      hu: "Észak-texasi város, nyugati örökségéről és virágzó belvárosáról ismert.",
      ro: "Un oraș din nordul Texasului, cunoscut pentru moștenirea sa occidentală și centrul orașului în plină expansiune.",
      en: "A city in North Texas, known for its Western heritage and booming downtown."
    },
    facts: {
      de: ["Historische Stockyards", "Kimbell Art Museum", "Teil des Metroplex Dallas-Fort Worth", "Kulturviertel mit Museen von Weltrang"],
      hu: ["Történelmi vágóhidak", "Kimbell Művészeti Múzeum", "A Dallas-Fort Worth Metroplex része", "Kulturális negyed világszínvonalú múzeumokkal"],
      ro: ["Târguri de vite istorice", "Muzeul de Artă Kimbell", "Parte a Metroplexului Dallas-Fort Worth", "District cultural cu muzee de clasă mondială"],
      en: ["Historic Stockyards", "Kimbell Art Museum", "Part of the Dallas-Fort Worth metroplex", "Cultural District with world-class museums"]
    }
  },
  {
    id: "columbus-cities-v2",
    type: "state-capital",
    parent: "US-OH",
    coords: [-82.9988, 39.9612],
    name: { de: "Columbus", hu: "Columbus", ro: "Columbus", en: "Columbus" },
    description: {
      de: "Die Hauptstadt und größte Stadt Ohios, Sitz der Ohio State University.",
      hu: "Ohio fővárosa és legnagyobb városa, az Ohio State University székhelye.",
      ro: "Capitala și cel mai mare oraș din Ohio, sediul Universității de Stat din Ohio.",
      en: "The capital and largest city of Ohio, home to Ohio State University."
    },
    facts: {
      de: ["Große und vielfältige Wirtschaft", "German Village, ein historisches Viertel", "Scioto Mile, ein städtischer Park am Flussufer", "Ohio State Buckeyes Football"],
      hu: ["Nagy és változatos gazdaság", "German Village, egy történelmi negyed", "Scioto Mile, egy folyóparti városi park", "Ohio State Buckeyes futball"],
      ro: ["Economie mare și diversificată", "German Village, un cartier istoric", "Scioto Mile, un parc urban pe malul râului", "Fotbalul Ohio State Buckeyes"],
      en: ["Large and diverse economy", "German Village, a historic neighborhood", "Scioto Mile, a riverfront urban park", "Ohio State Buckeyes football"]
    }
  },
  {
    id: "charlotte-cities-v2",
    type: "city",
    parent: "US-NC",
    coords: [-80.8431, 35.2271],
    name: { de: "Charlotte", hu: "Charlotte", ro: "Charlotte", en: "Charlotte" },
    description: {
      de: "Ein wichtiges Finanzzentrum und die größte Stadt in North Carolina.",
      hu: "Fontos pénzügyi központ és Észak-Karolina legnagyobb városa.",
      ro: "Un centru financiar major și cel mai mare oraș din Carolina de Nord.",
      en: "A major financial hub and the largest city in North Carolina."
    },
    facts: {
      de: ["Zweitgrößtes Bankenzentrum der USA", "Heimat der Carolina Panthers (NFL)", "NASCAR Hall of Fame", "Spitzname 'Queen City'"],
      hu: ["Az USA második legnagyobb bankközpontja", "A Carolina Panthers (NFL) otthona", "NASCAR Hírességek Csarnoka", "Beceneve 'A Királynő Városa'"],
      ro: ["Al doilea cel mai mare centru bancar din SUA", "Gazda Carolina Panthers (NFL)", "NASCAR Hall of Fame", "Poreclit 'Orașul Regină'"],
      en: ["Second-largest banking center in the U.S.", "Home to the Carolina Panthers (NFL)", "NASCAR Hall of Fame", "Nicknamed the 'Queen City'"]
    }
  },
  {
    id: "indianapolis-cities-v2",
    type: "state-capital",
    parent: "US-IN",
    coords: [-86.1581, 39.7684],
    name: { de: "Indianapolis", hu: "Indianapolis", ro: "Indianapolis", en: "Indianapolis" },
    description: {
      de: "Die Hauptstadt von Indiana, berühmt für das Autorennen Indianapolis 500.",
      hu: "Indiana fővárosa, híres az Indianapolis 500 autóversenyről.",
      ro: "Capitala statului Indiana, renumită pentru cursa auto Indianapolis 500.",
      en: "The capital of Indiana, famous for the Indianapolis 500 auto race."
    },
    facts: {
      de: ["Indianapolis Motor Speedway", "Größte Stadt in Indiana", "Spitzname 'Indy' und 'Crossroads of America'", "Umfangreiches Netz von Radwegen"],
      hu: ["Indianapolis Motor Speedway", "Indiana legnagyobb városa", "Beceneve 'Indy' és 'Amerika Kereszteződése'", "Kiterjedt kerékpárút-hálózat"],
      ro: ["Indianapolis Motor Speedway", "Cel mai mare oraș din Indiana", "Poreclit 'Indy' și 'Răscrucea Americii'", "Rețea extinsă de piste pentru biciclete"],
      en: ["Indianapolis Motor Speedway", "Largest city in Indiana", "Nicknamed 'Indy' and the 'Crossroads of America'", "Extensive network of bike trails"]
    }
  },
  {
    id: "seattle-cities-v2",
    type: "city",
    parent: "US-WA",
    coords: [-122.3321, 47.6062],
    name: { de: "Seattle", hu: "Seattle", ro: "Seattle", en: "Seattle" },
    description: {
      de: "Eine Küstenstadt und Technologiezentrum im pazifischen Nordwesten, umgeben von Wasser, Bergen und Wäldern.",
      hu: "Part menti város és technológiai központ a csendes-óceáni északnyugaton, vízzel, hegyekkel és erdőkkel körülvéve.",
      ro: "Un oraș de coastă și un centru tehnologic în Pacificul de Nord-Vest, înconjurat de apă, munți și păduri.",
      en: "A coastal seaport city and tech hub in the Pacific Northwest, surrounded by water, mountains and forests."
    },
    facts: {
      de: ["Heimat von Microsoft und Amazon (in der Metropolregion)", "Space Needle, ein Wahrzeichen der Weltausstellung 1962", "Pike Place Market", "Geburtsort der Grunge-Musik"],
      hu: ["A Microsoft és az Amazon otthona (a nagyvárosi területen)", "Space Needle, az 1962-es világkiállítás jelképe", "Pike Place Market", "A grunge zene szülőhelye"],
      ro: ["Sediul Microsoft și Amazon (în zona metropolitană)", "Space Needle, un simbol al Expoziției Mondiale din 1962", "Piața Pike Place", "Locul de naștere al muzicii grunge"],
      en: ["Home to Microsoft and Amazon (in metro area)", "Space Needle, a landmark from the 1962 World's Fair", "Pike Place Market", "Birthplace of grunge music"]
    }
  },
  {
    id: "denver-cities-v2",
    type: "state-capital",
    parent: "US-CO",
    coords: [-104.9903, 39.7392],
    name: { de: "Denver", hu: "Denver", ro: "Denver", en: "Denver" },
    description: {
      de: "Die Hauptstadt von Colorado, eine hochgelegene Stadt am Fuße der Rocky Mountains.",
      hu: "Colorado fővárosa, egy magasan fekvő város a Sziklás-hegység lábánál.",
      ro: "Capitala statului Colorado, un oraș la mare altitudine la poalele Munților Stâncoși.",
      en: "The capital of Colorado, a high-altitude city at the foot of the Rocky Mountains."
    },
    facts: {
      de: ["Spitzname 'The Mile-High City'", "Genau eine Meile über dem Meeresspiegel", "Tor zu den Skigebieten der Rockies", "Vier ausgeprägte Jahreszeiten"],
      hu: ["Beceneve 'Az egy mérföld magas város'", "Pontosan egy mérföldre a tengerszint felett", "Kapu a Sziklás-hegység síterepeihez", "Négy különböző évszak"],
      ro: ["Poreclit 'Orașul de o milă înălțime'", "Exact o milă deasupra nivelului mării", "Poarta de acces către stațiunile de schi din Munții Stâncoși", "Patru anotimpuri distincte"],
      en: ["Nicknamed 'The Mile-High City'", "Exactly one mile above sea level", "Gateway to the ski resorts of the Rockies", "Four distinct seasons"]
    }
  },
  {
    id: "washington-dc-cities-v2",
    type: "city",
    parent: "US-DC",
    coords: [-77.0369, 38.9072],
    name: { de: "Washington, D.C.", hu: "Washington D.C.", ro: "Washington, D.C.", en: "Washington, D.C." },
    description: {
      de: "Die Hauptstadt der Vereinigten Staaten, Heimat von ikonischen Denkmälern und Bundesgebäuden.",
      hu: "Az Egyesült Államok fővárosa, ikonikus emlékművek és szövetségi épületek otthona.",
      ro: "Capitala Statelor Unite, gazda unor monumente iconice și clădiri federale.",
      en: "The capital of the United States, home to iconic monuments and federal buildings."
    },
    facts: {
      de: ["Sitz der US-Regierung", "Das Weiße Haus, das Kapitol und der Oberste Gerichtshof", "Zahlreiche kostenlose Museen (Smithsonian)", "Kein Bundesstaat, sondern ein District"],
      hu: ["Az amerikai kormány székhelye", "A Fehér Ház, a Capitolium és a Legfelsőbb Bíróság", "Számos ingyenes múzeum (Smithsonian)", "Nem állam, hanem kerület"],
      ro: ["Sediul guvernului SUA", "Casa Albă, Capitoliul și Curtea Supremă", "Numeroase muzee gratuite (Smithsonian)", "Nu este un stat, ci un district"],
      en: ["Seat of the U.S. government", "The White House, the Capitol, and the Supreme Court", "Numerous free museums (Smithsonian)", "Not a state, but a District"]
    }
  },
  {
    id: "boston-cities-v2",
    type: "state-capital",
    parent: "US-MA",
    coords: [-71.0589, 42.3601],
    name: { de: "Boston", hu: "Boston", ro: "Boston", en: "Boston" },
    description: {
      de: "Die Hauptstadt von Massachusetts, eine der ältesten Städte der USA mit einer reichen Geschichte der Amerikanischen Revolution.",
      hu: "Massachusetts fővárosa, az USA egyik legrégebbi városa, gazdag amerikai forradalmi történelemmel.",
      ro: "Capitala statului Massachusetts, unul dintre cele mai vechi orașe din SUA, cu o istorie bogată a Revoluției Americane.",
      en: "The capital of Massachusetts, one of the oldest cities in the U.S. with a rich history of the American Revolution."
    },
    facts: {
      de: ["Freedom Trail, ein historischer Wanderweg", "Boston Tea Party", "Renommierte Universitäten wie Harvard und MIT", "Wichtiger Hafen und Wirtschaftszentrum"],
      hu: ["Freedom Trail, egy történelmi sétaút", "Bostoni teadélután", "Neves egyetemek, mint a Harvard és az MIT", "Fontos kikötő és gazdasági központ"],
      ro: ["Freedom Trail, un traseu istoric pietonal", "Revolta Ceaiului de la Boston", "Universități renumite precum Harvard și MIT", "Port important și centru economic"],
      en: ["Freedom Trail, a historic walking path", "Boston Tea Party", "Renowned universities like Harvard and MIT", "Major port and economic hub"]
    }
  },
  {
    id: "el-paso-cities-v2",
    type: "city",
    parent: "US-TX",
    coords: [-106.4850, 31.7619],
    name: { de: "El Paso", hu: "El Paso", ro: "El Paso", en: "El Paso" },
    description: {
      de: "Eine Stadt im äußersten Westen von Texas an der Grenze zu Mexiko, mit einer starken hispanischen Kultur.",
      hu: "Város Texas legnyugatibb csücskében, a mexikói határon, erős spanyol kultúrával.",
      ro: "Un oraș în vestul extrem al Texasului, la granița cu Mexic, cu o puternică cultură hispanică.",
      en: "A city in the far western corner of Texas, on the border with Mexico, with a strong Hispanic culture."
    },
    facts: {
      de: ["Liegt am Rio Grande", "Grenzt an Ciudad Juárez, Mexiko", "Sonniges Klima", "Franklin Mountains State Park"],
      hu: ["A Rio Grande folyó mentén fekszik", "A mexikói Ciudad Juárez-szel határos", "Napos éghajlat", "Franklin Mountains Állami Park"],
      ro: ["Situat pe Rio Grande", "Se învecinează cu Ciudad Juárez, Mexic", "Climă însorită", "Parcul Statal Franklin Mountains"],
      en: ["Located on the Rio Grande", "Borders Ciudad Juárez, Mexico", "Sunny climate", "Franklin Mountains State Park"]
    }
  },
  {
    id: "detroit-cities-v2",
    type: "city",
    parent: "US-MI",
    coords: [-83.0458, 42.3314],
    name: { de: "Detroit", hu: "Detroit", ro: "Detroit", en: "Detroit" },
    description: {
      de: "Historisch bekannt als das Zentrum der US-Automobilindustrie und Heimat des Motown-Sounds.",
      hu: "Történelmileg az amerikai autóipar központjaként és a Motown hangzás otthonaként ismert.",
      ro: "Cunoscut istoric drept centrul industriei auto americane și casa sunetului Motown.",
      en: "Historically known as the center of the U.S. auto industry and the home of the Motown sound."
    },
    facts: {
      de: ["Spitzname 'Motor City'", "Hauptsitz der 'Big Three' Autohersteller", "Motown Museum", "Erlebt eine wirtschaftliche Wiederbelebung"],
      hu: ["Beceneve 'Motorváros'", "A 'három nagy' autógyártó székhelye", "Motown Múzeum", "Gazdasági újjáéledésen megy keresztül"],
      ro: ["Poreclit 'Orașul Motoarelor'", "Sediul central al producătorilor auto 'Cei Trei Mari'", "Muzeul Motown", "Trece printr-o revitalizare economică"],
      en: ["Nicknamed 'Motor City'", "Headquarters of the 'Big Three' auto manufacturers", "Motown Museum", "Undergoing an economic revival"]
    }
  },
  {
    id: "nashville-cities-v2",
    type: "state-capital",
    parent: "US-TN",
    coords: [-86.7816, 36.1627],
    name: { de: "Nashville", hu: "Nashville", ro: "Nashville", en: "Nashville" },
    description: {
      de: "Die Hauptstadt von Tennessee und ein Zentrum der Country-Musik-Industrie.",
      hu: "Tennessee fővárosa és a country zeneiparának központja.",
      ro: "Capitala statului Tennessee și un centru al industriei muzicii country.",
      en: "The capital of Tennessee and a hub for the country music industry."
    },
    facts: {
      de: ["Spitzname 'Music City'", "Grand Ole Opry, eine berühmte Country-Musik-Bühne", "Country Music Hall of Fame and Museum", "Zahlreiche Honky-Tonk-Bars"],
      hu: ["Beceneve 'Zeneváros'", "Grand Ole Opry, egy híres country zenei színpad", "Country Zenei Hírességek Csarnoka és Múzeuma", "Számos honky-tonk bár"],
      ro: ["Poreclit 'Orașul Muzicii'", "Grand Ole Opry, o faimoasă scenă de muzică country", "Country Music Hall of Fame and Museum", "Numeroase baruri honky-tonk"],
      en: ["Nicknamed 'Music City'", "Grand Ole Opry, a famous country music stage", "Country Music Hall of Fame and Museum", "Numerous honky-tonk bars"]
    }
  },
  {
    id: "portland-or-cities-v2",
    type: "city",
    parent: "US-OR",
    coords: [-122.6750, 45.5051],
    name: { de: "Portland (Oregon)", hu: "Portland (Oregon)", ro: "Portland (Oregon)", en: "Portland, OR" },
    description: {
      de: "Die größte Stadt in Oregon, bekannt für ihre umweltfreundliche Kultur, Parks und Kaffeeszene.",
      hu: "Oregon legnagyobb városa, környezetbarát kultúrájáról, parkjairól és kávézóiról ismert.",
      ro: "Cel mai mare oraș din Oregon, cunoscut pentru cultura sa ecologică, parcuri și scena cafelei.",
      en: "The largest city in Oregon, known for its eco-friendly culture, parks, and coffee scene."
    },
    facts: {
      de: ["'Keep Portland Weird' Motto", "Umfangreiche Radwege", "Powell's City of Books, eine riesige Buchhandlung", "Blühende Food-Truck-Szene"],
      hu: ["'Keep Portland Weird' (Tartsd meg Portlandet furcsának) mottó", "Kiterjedt kerékpárutak", "Powell's City of Books, egy hatalmas könyvesbolt", "Virágzó food truck szcéna"],
      ro: ["Motto-ul 'Păstrează Portlandul ciudat'", "Piste extinse pentru biciclete", "Powell's City of Books, o librărie uriașă", "Scenă înfloritoare a camioanelor cu mâncare"],
      en: ["'Keep Portland Weird' motto", "Extensive bike paths", "Powell's City of Books, a massive bookstore", "Thriving food truck scene"]
    }
  },
  {
    id: "memphis-cities-v2",
    type: "city",
    parent: "US-TN",
    coords: [-90.0490, 35.1495],
    name: { de: "Memphis", hu: "Memphis", ro: "Memphis", en: "Memphis" },
    description: {
      de: "Eine Stadt am Mississippi, berühmt als Geburtsort des Blues und Rock 'n' Roll.",
      hu: "Város a Mississippi folyó partján, a blues és a rock 'n' roll szülőhelyeként híres.",
      ro: "Un oraș pe râul Mississippi, faimos ca locul de naștere al blues-ului și rock 'n' roll-ului.",
      en: "A city on the Mississippi River, famous as the birthplace of blues and rock 'n' roll."
    },
    facts: {
      de: ["Graceland, Elvis Presleys Anwesen", "Sun Studio, wo viele Legenden aufnahmen", "Beale Street, das Zentrum der Blues-Musik", "National Civil Rights Museum"],
      hu: ["Graceland, Elvis Presley birtoka", "Sun Studio, ahol sok legenda készített felvételt", "Beale Street, a blues zene központja", "Nemzeti Polgárjogi Múzeum"],
      ro: ["Graceland, domeniul lui Elvis Presley", "Sun Studio, unde au înregistrat multe legende", "Beale Street, centrul muzicii blues", "Muzeul Național al Drepturilor Civile"],
      en: ["Graceland, Elvis Presley's estate", "Sun Studio, where many legends recorded", "Beale Street, the heart of blues music", "National Civil Rights Museum"]
    }
  },
  {
    id: "oklahoma-city-cities-v2",
    type: "state-capital",
    parent: "US-OK",
    coords: [-97.5164, 35.4676],
    name: { de: "Oklahoma City", hu: "Oklahoma City", ro: "Oklahoma City", en: "Oklahoma City" },
    description: {
      de: "Die Hauptstadt von Oklahoma, bekannt für ihre Cowboy-Kultur und die Viehmärkte.",
      hu: "Oklahoma fővárosa, cowboy-kultúrájáról és szarvasmarha-vásárairól ismert.",
      ro: "Capitala Oklahomei, cunoscută pentru cultura sa de cowboy și târgurile de vite.",
      en: "The capital of Oklahoma, known for its cowboy culture and stockyards."
    },
    facts: {
      de: ["National Cowboy & Western Heritage Museum", "Stockyards City, ein historisches Viehmarktviertel", "Oklahoma City National Memorial & Museum", "Bricktown Unterhaltungsviertel"],
      hu: ["Nemzeti Cowboy és Nyugati Örökség Múzeum", "Stockyards City, egy történelmi szarvasmarha-vásár negyed", "Oklahoma City Nemzeti Emlékhely és Múzeum", "Bricktown szórakoztató negyed"],
      ro: ["Muzeul Național al Cowboy-ilor și al Patrimoniului Vestic", "Stockyards City, un cartier istoric al târgurilor de vite", "Memorialul și Muzeul Național Oklahoma City", "Districtul de divertisment Bricktown"],
      en: ["National Cowboy & Western Heritage Museum", "Stockyards City, a historic livestock market district", "Oklahoma City National Memorial & Museum", "Bricktown entertainment district"]
    }
  },
  {
    id: "las-vegas-cities-v2",
    type: "city",
    parent: "US-NV",
    coords: [-115.1398, 36.1699],
    name: { de: "Las Vegas", hu: "Las Vegas", ro: "Las Vegas", en: "Las Vegas" },
    description: {
      de: "Weltbekannt als Unterhaltungshauptstadt, berühmt für ihre Casinos, Shows und das pulsierende Nachtleben.",
      hu: "Világhírű szórakoztató főváros, híres kaszinóiról, műsorairól és pezsgő éjszakai életéről.",
      ro: "Renumită la nivel mondial ca o capitală a divertismentului, faimoasă pentru cazinourile, spectacolele și viața de noapte vibrantă.",
      en: "World-renowned as an entertainment capital, famous for its casinos, shows, and vibrant nightlife."
    },
    facts: {
      de: ["Der Las Vegas Strip mit seinen riesigen Resorts", "Spitzname 'Sin City'", "Heiratshauptstadt der Welt", "Fremont Street Experience in der Innenstadt"],
      hu: ["A Las Vegas Strip hatalmas üdülőhelyeivel", "Beceneve 'A Bűn Városa'", "A világ házassági fővárosa", "Fremont Street Experience a belvárosban"],
      ro: ["Las Vegas Strip cu stațiunile sale masive", "Poreclit 'Orașul Păcatelor'", "Capitala mondială a căsătoriilor", "Experiența Fremont Street în centrul orașului"],
      en: ["The Las Vegas Strip with its massive resorts", "Nicknamed 'Sin City'", "Marriage Capital of the World", "Fremont Street Experience downtown"]
    }
  },
  {
    id: "louisville-cities-v2",
    type: "city",
    parent: "US-KY",
    coords: [-85.7585, 38.2527],
    name: { de: "Louisville", hu: "Louisville", ro: "Louisville", en: "Louisville" },
    description: {
      de: "Die größte Stadt in Kentucky, berühmt für das Kentucky Derby und Bourbon-Brennereien.",
      hu: "Kentucky legnagyobb városa, híres a Kentucky Derbyről és a bourbon lepárlókról.",
      ro: "Cel mai mare oraș din Kentucky, renumit pentru Derby-ul Kentucky și distileriile de bourbon.",
      en: "The largest city in Kentucky, famous for the Kentucky Derby and bourbon distilleries."
    },
    facts: {
      de: ["Churchill Downs, Heimat des Kentucky Derby", "Urban Bourbon Trail", "Louisville Slugger Museum & Factory", "Geburtsort von Muhammad Ali"],
      hu: ["Churchill Downs, a Kentucky Derby otthona", "Urban Bourbon Trail", "Louisville Slugger Múzeum és Gyár", "Muhammad Ali szülőhelye"],
      ro: ["Churchill Downs, gazda Derby-ului Kentucky", "Traseul Urban al Bourbonului", "Muzeul și Fabrica Louisville Slugger", "Locul de naștere al lui Muhammad Ali"],
      en: ["Churchill Downs, home of the Kentucky Derby", "Urban Bourbon Trail", "Louisville Slugger Museum & Factory", "Birthplace of Muhammad Ali"]
    }
  },
  {
    id: "baltimore-cities-v2",
    type: "city",
    parent: "US-MD",
    coords: [-76.6122, 39.2904],
    name: { de: "Baltimore", hu: "Baltimore", ro: "Baltimore", en: "Baltimore" },
    description: {
      de: "Eine historische Hafenstadt in Maryland mit einer reichen maritimen Geschichte.",
      hu: "Történelmi kikötőváros Marylandben, gazdag tengerészeti múlttal.",
      ro: "Un oraș portuar istoric din Maryland, cu o bogată istorie maritimă.",
      en: "A historic seaport city in Maryland with a rich maritime history."
    },
    facts: {
      de: ["Inner Harbor mit Geschäften und Attraktionen", "National Aquarium", "Fort McHenry, Geburtsort der Nationalhymne", "Heimat von Edgar Allan Poe"],
      hu: ["Inner Harbor üzletekkel és látnivalókkal", "Nemzeti Akvárium", "Fort McHenry, a nemzeti himnusz szülőhelye", "Edgar Allan Poe otthona"],
      ro: ["Inner Harbor cu magazine și atracții", "Acvariul Național", "Fort McHenry, locul de naștere al imnului național", "Casa lui Edgar Allan Poe"],
      en: ["Inner Harbor with shops and attractions", "National Aquarium", "Fort McHenry, birthplace of the national anthem", "Home of Edgar Allan Poe"]
    }
  },
  {
    id: "milwaukee-cities-v2",
    type: "city",
    parent: "US-WI",
    coords: [-87.9065, 43.0389],
    name: { de: "Milwaukee", hu: "Milwaukee", ro: "Milwaukee", en: "Milwaukee" },
    description: {
      de: "Die größte Stadt in Wisconsin am Ufer des Michigansees, bekannt für ihre Brauereien.",
      hu: "Wisconsin legnagyobb városa a Michigan-tó partján, sörfőzdéiről ismert.",
      ro: "Cel mai mare oraș din Wisconsin, pe malul lacului Michigan, cunoscut pentru fabricile sale de bere.",
      en: "The largest city in Wisconsin on the shore of Lake Michigan, known for its breweries."
    },
    facts: {
      de: ["Historisches Brauereierbe (Miller, Pabst, Schlitz)", "Milwaukee Art Museum mit seiner markanten Architektur", "Harley-Davidson Museum", "Summerfest, das 'größte Musikfestival der Welt'"],
      hu: ["Történelmi sörfőző örökség (Miller, Pabst, Schlitz)", "Milwaukee Művészeti Múzeum jellegzetes építészetével", "Harley-Davidson Múzeum", "Summerfest, a 'világ legnagyobb zenei fesztiválja'"],
      ro: ["Moștenire istorică a berăriilor (Miller, Pabst, Schlitz)", "Muzeul de Artă Milwaukee cu arhitectura sa distinctivă", "Muzeul Harley-Davidson", "Summerfest, 'cel mai mare festival de muzică din lume'"],
      en: ["Historic brewing heritage (Miller, Pabst, Schlitz)", "Milwaukee Art Museum with its distinctive architecture", "Harley-Davidson Museum", "Summerfest, 'The World's Largest Music Festival'"]
    }
  },
  {
    id: "albuquerque-cities-v2",
    type: "city",
    parent: "US-NM",
    coords: [-106.6504, 35.0844],
    name: { de: "Albuquerque", hu: "Albuquerque", ro: "Albuquerque", en: "Albuquerque" },
    description: {
      de: "Die größte Stadt in New Mexico, bekannt für das International Balloon Fiesta.",
      hu: "Új-Mexikó legnagyobb városa, a Nemzetközi Hőlégballon Fesztiválról ismert.",
      ro: "Cel mai mare oraș din New Mexico, cunoscut pentru Festivalul Internațional de Baloane.",
      en: "The largest city in New Mexico, famous for the International Balloon Fiesta."
    },
    facts: {
      de: ["Jährliches Heißluftballon-Festival", "Historische Altstadt mit Adobe-Architektur", "Sandia Peak Tramway", "Lage an der historischen Route 66"],
      hu: ["Éves hőlégballon-fesztivál", "Történelmi óváros vályogépítészettel", "Sandia Peak libegő", "A történelmi 66-os út mentén fekszik"],
      ro: ["Festival anual de baloane cu aer cald", "Oraș vechi istoric cu arhitectură din chirpici", "Telecabina Sandia Peak", "Situat pe istoricul Route 66"],
      en: ["Annual hot air balloon festival", "Historic Old Town with adobe architecture", "Sandia Peak Tramway", "Located on historic Route 66"]
    }
  },
  {
    id: "tucson-cities-v2",
    type: "city",
    parent: "US-AZ",
    coords: [-110.9747, 32.2226],
    name: { de: "Tucson", hu: "Tucson", ro: "Tucson", en: "Tucson" },
    description: {
      de: "Eine Stadt in Arizona, umgeben von mehreren Gebirgszügen, mit einer Mischung aus indianischen, spanischen und anglo-amerikanischen Kulturen.",
      hu: "Város Arizonában, több hegylánccal körülvéve, indián, spanyol és angol-amerikai kultúrák keverékével.",
      ro: "Un oraș din Arizona înconjurat de mai multe lanțuri montane, cu un amestec de culturi nativ-americane, spaniole și anglo-americane.",
      en: "A city in Arizona surrounded by multiple mountain ranges, with a mix of Native American, Spanish, and Anglo-American cultures."
    },
    facts: {
      de: ["Saguaro National Park", "Mission San Xavier del Bac", "Pima Air & Space Museum", "Erste UNESCO-Stadt der Gastronomie in den USA"],
      hu: ["Saguaro Nemzeti Park", "Mission San Xavier del Bac", "Pima Repülési és Űrmúzeum", "Az első UNESCO Gasztronómiai Város az USA-ban"],
      ro: ["Parcul Național Saguaro", "Misiunea San Xavier del Bac", "Muzeul Aerospațial Pima", "Primul Oraș al Gastronomiei UNESCO din SUA"],
      en: ["Saguaro National Park", "Mission San Xavier del Bac", "Pima Air & Space Museum", "First UNESCO City of Gastronomy in the U.S."]
    }
  },
  {
    id: "fresno-cities-v2",
    type: "city",
    parent: "US-CA",
    coords: [-119.7871, 36.7378],
    name: { de: "Fresno", hu: "Fresno", ro: "Fresno", en: "Fresno" },
    description: {
      de: "Eine große Stadt im San Joaquin Valley in Kalifornien, ein wichtiges landwirtschaftliches Zentrum.",
      hu: "Nagy város a kaliforniai San Joaquin-völgyben, fontos mezőgazdasági központ.",
      ro: "Un oraș mare în Valea San Joaquin din California, un centru agricol important.",
      en: "A large city in California's San Joaquin Valley, a major agricultural hub."
    },
    facts: {
      de: ["Tor zu den Nationalparks Yosemite, Sequoia und Kings Canyon", "Große landwirtschaftliche Produktion (Rosinen, Mandeln, Weintrauben)", "Forestiere Underground Gardens", "Fresno Chaffee Zoo"],
      hu: ["Kapu a Yosemite, Sequoia és Kings Canyon Nemzeti Parkokhoz", "Nagy mezőgazdasági termelés (mazsola, mandula, szőlő)", "Forestiere földalatti kertek", "Fresno Chaffee Állatkert"],
      ro: ["Poarta de acces către Parcurile Naționale Yosemite, Sequoia și Kings Canyon", "Producție agricolă mare (stafide, migdale, struguri)", "Grădinile subterane Forestiere", "Grădina Zoologică Fresno Chaffee"],
      en: ["Gateway to Yosemite, Sequoia, and Kings Canyon National Parks", "Large agricultural production (raisins, almonds, grapes)", "Forestiere Underground Gardens", "Fresno Chaffee Zoo"]
    }
  },
  {
    id: "sacramento-cities-v2",
    type: "state-capital",
    parent: "US-CA",
    coords: [-121.4944, 38.5816],
    name: { de: "Sacramento", hu: "Sacramento", ro: "Sacramento", en: "Sacramento" },
    description: {
      de: "Die Hauptstadt von Kalifornien, bekannt für ihre Rolle im kalifornischen Goldrausch.",
      hu: "Kalifornia fővárosa, a kaliforniai aranylázban betöltött szerepéről ismert.",
      ro: "Capitala Californiei, cunoscută pentru rolul său în Goana după Aur din California.",
      en: "The capital of California, known for its role in the California Gold Rush."
    },
    facts: {
      de: ["Old Sacramento Waterfront, ein historisches Viertel", "California State Railroad Museum", "California State Capitol Museum", "Spitzname 'River City'"],
      hu: ["Old Sacramento Waterfront, egy történelmi negyed", "Kaliforniai Állami Vasúti Múzeum", "Kaliforniai Állami Capitolium Múzeum", "Beceneve 'Folyóváros'"],
      ro: ["Old Sacramento Waterfront, un cartier istoric", "Muzeul Căilor Ferate de Stat din California", "Muzeul Capitoliului de Stat din California", "Poreclit 'Orașul Râului'"],
      en: ["Old Sacramento Waterfront, a historic district", "California State Railroad Museum", "California State Capitol Museum", "Nicknamed 'River City'"]
    }
  },
  {
    id: "kansas-city-mo-cities-v2",
    type: "city",
    parent: "US-MO",
    coords: [-94.5786, 39.0997],
    name: { de: "Kansas City (Missouri)", hu: "Kansas City (Missouri)", ro: "Kansas City (Missouri)", en: "Kansas City, MO" },
    description: {
      de: "Eine große Stadt in Missouri, berühmt für ihren Jazz, ihre Brunnen und ihre Barbecue-Küche.",
      hu: "Nagy város Missouriban, híres jazz-éről, szökőkútjairól és barbecue konyhájáról.",
      ro: "Un oraș mare din Missouri, renumit pentru jazz-ul, fântânile și bucătăria sa barbecue.",
      en: "A large city in Missouri, famous for its jazz, fountains, and barbecue cuisine."
    },
    facts: {
      de: ["Spitzname 'City of Fountains'", "Mehr als 200 Brunnen", "Wichtige Rolle in der Geschichte des Jazz", "American Jazz Museum"],
      hu: ["Beceneve 'A szökőkutak városa'", "Több mint 200 szökőkút", "Fontos szerep a jazz történetében", "Amerikai Jazz Múzeum"],
      ro: ["Poreclit 'Orașul Fântânilor'", "Peste 200 de fântâni", "Rol important în istoria jazz-ului", "Muzeul American de Jazz"],
      en: ["Nicknamed the 'City of Fountains'", "More than 200 fountains", "Major role in the history of jazz", "American Jazz Museum"]
    }
  },
  {
    id: "long-beach-cities-v2",
    type: "city",
    parent: "US-CA",
    coords: [-118.1937, 33.7701],
    name: { de: "Long Beach", hu: "Long Beach", ro: "Long Beach", en: "Long Beach" },
    description: {
      de: "Eine Hafenstadt in Südkalifornien, Heimat des Queen Mary Ozeandampfers und des Aquarium of the Pacific.",
      hu: "Kikötőváros Dél-Kaliforniában, a Queen Mary óceánjáró és a Csendes-óceáni Akvárium otthona.",
      ro: "Un oraș portuar din sudul Californiei, gazda pachebotului Queen Mary și a Acvariului Pacificului.",
      en: "A port city in Southern California, home to the Queen Mary ocean liner and the Aquarium of the Pacific."
    },
    facts: {
      de: ["Zweitgrößter Containerhafen der USA", "RMS Queen Mary, ein historisches Schiffshotel", "Grand Prix von Long Beach, ein Autorennen", "Vielfältige Stadtviertel"],
      hu: ["Az USA második legnagyobb konténerkikötője", "RMS Queen Mary, egy történelmi hajószálló", "Long Beach-i Nagydíj, egy autóverseny", "Változatos városrészek"],
      ro: ["Al doilea cel mai mare port de containere din SUA", "RMS Queen Mary, un hotel-navă istoric", "Marele Premiu de la Long Beach, o cursă auto", "Cartiere diverse"],
      en: ["Second-busiest container port in the U.S.", "RMS Queen Mary, a historic ship hotel", "Grand Prix of Long Beach, a street race", "Diverse neighborhoods"]
    }
  },
  {
    id: "mesa-cities-v2",
    type: "city",
    parent: "US-AZ",
    coords: [-111.8315, 33.4152],
    name: { de: "Mesa", hu: "Mesa", ro: "Mesa", en: "Mesa" },
    description: {
      de: "Eine große Vorstadt östlich von Phoenix, eine der am schnellsten wachsenden Städte der USA.",
      hu: "Nagy külváros Phoenix-től keletre, az USA egyik leggyorsabban növekvő városa.",
      ro: "O suburbie mare la est de Phoenix, unul dintre orașele cu cea mai rapidă creștere din SUA.",
      en: "A large suburban city east of Phoenix, one of the fastest-growing cities in the U.S."
    },
    facts: {
      de: ["Teil des 'Valley of the Sun'", "Mesa Arts Center", "Archäologische Stätten der Hohokam-Kultur", "In der Nähe von Erholungsgebieten wie dem Salt River"],
      hu: ["A 'Nap Völgyének' része", "Mesa Művészeti Központ", "Hohokam kultúra régészeti lelőhelyei", "Közel a Salt River-hez hasonló üdülőhelyekhez"],
      ro: ["Parte a 'Văii Soarelui'", "Centrul de Arte Mesa", "Situl arheologic al culturii Hohokam", "Aproape de zone de recreere precum Râul Salt"],
      en: ["Part of the 'Valley of the Sun'", "Mesa Arts Center", "Hohokam culture archaeological sites", "Near recreational areas like the Salt River"]
    }
  },
  {
    id: "atlanta-cities-v2",
    type: "state-capital",
    parent: "US-GA",
    coords: [-84.3880, 33.7490],
    name: { de: "Atlanta", hu: "Atlanta", ro: "Atlanta", en: "Atlanta" },
    description: {
      de: "Die Hauptstadt von Georgia, ein wichtiges Handels- und Verkehrszentrum im Südosten.",
      hu: "Georgia fővárosa, a délkelet fontos kereskedelmi és közlekedési központja.",
      ro: "Capitala Georgiei, un centru comercial și de transport major în sud-est.",
      en: "The capital of Georgia, a major commercial and transportation hub in the Southeast."
    },
    facts: {
      de: ["Hartsfield-Jackson Atlanta International Airport, einer der verkehrsreichsten der Welt", "Heimat von Coca-Cola", "Martin Luther King Jr. National Historical Park", "Gastgeber der Olympischen Spiele 1996"],
      hu: ["Hartsfield-Jackson Atlanta Nemzetközi Repülőtér, a világ egyik legforgalmasabbja", "A Coca-Cola otthona", "Ifj. Martin Luther King Nemzeti Történelmi Park", "Az 1996-os olimpiai játékok házigazdája"],
      ro: ["Aeroportul Internațional Hartsfield-Jackson Atlanta, unul dintre cele mai aglomerate din lume", "Sediul Coca-Cola", "Parcul Național Istoric Martin Luther King Jr.", "Gazda Jocurilor Olimpice din 1996"],
      en: ["Hartsfield-Jackson Atlanta International Airport, one of the world's busiest", "Home of Coca-Cola", "Martin Luther King Jr. National Historical Park", "Host of the 1996 Olympic Games"]
    }
  },
  {
    id: "colorado-springs-cities-v2",
    type: "city",
    parent: "US-CO",
    coords: [-104.8214, 38.8339],
    name: { de: "Colorado Springs", hu: "Colorado Springs", ro: "Colorado Springs", en: "Colorado Springs" },
    description: {
      de: "Eine Stadt am Fuße des Pikes Peak in Colorado, bekannt für ihre malerische Lage und militärische Präsenz.",
      hu: "Város a Pikes Peak lábánál Coloradóban, festői fekvéséről és katonai jelenlétéről ismert.",
      ro: "Un oraș la poalele Vârfului Pikes din Colorado, cunoscut pentru peisajul său pitoresc și prezența militară.",
      en: "A city at the base of Pikes Peak in Colorado, known for its scenic location and military presence."
    },
    facts: {
      de: ["Garden of the Gods Park mit roten Sandsteinformationen", "United States Air Force Academy", "U.S. Olympic & Paralympic Training Center", "Hohe Lebensqualität"],
      hu: ["Garden of the Gods Park vörös homokkő képződményekkel", "Az Egyesült Államok Légierejének Akadémiája", "Amerikai Olimpiai és Paralimpiai Edzőközpont", "Magas életminőség"],
      ro: ["Parcul Garden of the Gods cu formațiuni de gresie roșie", "Academia Forțelor Aeriene ale Statelor Unite", "Centrul de Antrenament Olimpic și Paralimpic al SUA", "Calitate ridicată a vieții"],
      en: ["Garden of the Gods park with red sandstone formations", "United States Air Force Academy", "U.S. Olympic & Paralympic Training Center", "High quality of life"]
    }
  },
  {
    id: "virginia-beach-cities-v2",
    type: "city",
    parent: "US-VA",
    coords: [-75.9780, 36.8529],
    name: { de: "Virginia Beach", hu: "Virginia Beach", ro: "Virginia Beach", en: "Virginia Beach" },
    description: {
      de: "Eine unabhängige Stadt an der Atlantikküste von Virginia, bekannt für ihre Strände und ihren langen Boardwalk.",
      hu: "Független város Virginia atlanti partvidékén, strandjairól és hosszú sétányáról ismert.",
      ro: "Un oraș independent pe coasta atlantică a Virginiei, cunoscut pentru plajele și faleza sa lungă.",
      en: "An independent city on the Atlantic coast of Virginia, known for its beaches and long boardwalk."
    },
    facts: {
      de: ["Hält den Guinness-Weltrekord für den längsten Vergnügungsstrand", "First Landing State Park", "Militärische Präsenz, insbesondere die Marine", "Beliebtes Sommerurlaubsziel"],
      hu: ["A világ leghosszabb üdülőstrandjának Guinness-rekordját tartja", "First Landing Állami Park", "Katonai jelenlét, különösen a haditengerészet", "Népszerű nyári üdülőhely"],
      ro: ["Deține recordul mondial Guinness pentru cea mai lungă plajă de agrement", "Parcul Statal First Landing", "Prezență militară, în special a Marinei", "Destinație populară de vacanță de vară"],
      en: ["Holds the Guinness World Record for the longest pleasure beach", "First Landing State Park", "Military presence, especially the Navy", "Popular summer vacation spot"]
    }
  },
  {
    id: "raleigh-cities-v2",
    type: "state-capital",
    parent: "US-NC",
    coords: [-78.6382, 35.7796],
    name: { de: "Raleigh", hu: "Raleigh", ro: "Raleigh", en: "Raleigh" },
    description: {
      de: "Die Hauptstadt von North Carolina, bekannt als die 'Stadt der Eichen' und Teil des Research Triangle Park.",
      hu: "Észak-Karolina fővárosa, a 'tölgyek városaként' ismert és a Research Triangle Park része.",
      ro: "Capitala Carolinei de Nord, cunoscută drept „Orașul Stejarilor” și parte a Parcului de Cercetare Triangle.",
      en: "The capital of North Carolina, known as the 'City of Oaks' and part of the Research Triangle Park."
    },
    facts: {
      de: ["Teil des Research Triangle mit Durham und Chapel Hill", "Zahlreiche Technologie- und Forschungsunternehmen", "North Carolina Museum of Natural Sciences", "Viele Bäume und Grünflächen"],
      hu: ["A Research Triangle része Durhammel és Chapel Hillel", "Számos technológiai és kutatási vállalat", "Észak-Karolinai Természettudományi Múzeum", "Sok fa és zöldterület"],
      ro: ["Parte a Triunghiului de Cercetare cu Durham și Chapel Hill", "Numeroase companii de tehnologie și cercetare", "Muzeul de Științe Naturale din Carolina de Nord", "Mulți copaci și spații verzi"],
      en: ["Part of the Research Triangle with Durham and Chapel Hill", "Numerous technology and research companies", "North Carolina Museum of Natural Sciences", "Many trees and green spaces"]
    }
  },
  {
    id: "omaha-cities-v2",
    type: "city",
    parent: "US-NE",
    coords: [-95.9345, 41.2565],
    name: { de: "Omaha", hu: "Omaha", ro: "Omaha", en: "Omaha" },
    description: {
      de: "Die größte Stadt in Nebraska, bekannt als Heimat von Warren Buffett und mehreren Fortune-500-Unternehmen.",
      hu: "Nebraska legnagyobb városa, Warren Buffett és több Fortune 500 vállalat otthonaként ismert.",
      ro: "Cel mai mare oraș din Nebraska, cunoscut ca fiind casa lui Warren Buffett și a mai multor companii Fortune 500.",
      en: "The largest city in Nebraska, known as the home of Warren Buffett and several Fortune 500 companies."
    },
    facts: {
      de: ["Hauptsitz von Berkshire Hathaway", "Jährliche Hauptversammlung zieht Tausende an", "Henry Doorly Zoo and Aquarium", "Historischer Old Market Bezirk"],
      hu: ["A Berkshire Hathaway székhelye", "Az éves közgyűlés több ezer embert vonz", "Henry Doorly Állatkert és Akvárium", "Történelmi Old Market negyed"],
      ro: ["Sediul Berkshire Hathaway", "Adunarea anuală a acționarilor atrage mii de oameni", "Grădina Zoologică și Acvariul Henry Doorly", "Cartierul istoric Old Market"],
      en: ["Headquarters of Berkshire Hathaway", "Annual shareholders' meeting attracts thousands", "Henry Doorly Zoo and Aquarium", "Historic Old Market district"]
    }
  },
  {
    id: "miami-cities-v2",
    type: "city",
    parent: "US-FL",
    coords: [-80.1918, 25.7617],
    name: { de: "Miami", hu: "Miami", ro: "Miami", en: "Miami" },
    description: {
      de: "Eine Küstenmetropole in Südflorida, bekannt für ihre Strände, ihr Nachtleben und ihre lateinamerikanische Kultur.",
      hu: "Part menti metropolisz Dél-Floridában, strandjairól, éjszakai életéről és latin-amerikai kultúrájáról ismert.",
      ro: "O metropolă de coastă din sudul Floridei, cunoscută pentru plajele, viața de noapte și cultura sa latino-americană.",
      en: "A coastal metropolis in South Florida, known for its beaches, nightlife, and Latin American culture."
    },
    facts: {
      de: ["Großer Hafen für Kreuzfahrtschiffe", "South Beach mit Art-déco-Architektur", "Starker kubanischer Einfluss in Little Havana", "Internationales Finanzzentrum"],
      hu: ["Nagy kikötő a sétahajók számára", "South Beach art deco építészettel", "Erős kubai befolyás Little Havanában", "Nemzetközi pénzügyi központ"],
      ro: ["Port major pentru nave de croazieră", "South Beach cu arhitectură Art Deco", "Influență cubaneză puternică în Little Havana", "Centru financiar internațional"],
      en: ["Major cruise ship port", "South Beach with its Art Deco architecture", "Strong Cuban influence in Little Havana", "International financial hub"]
    }
  },
  {
    id: "oakland-cities-v2",
    type: "city",
    parent: "US-CA",
    coords: [-122.2711, 37.8044],
    name: { de: "Oakland", hu: "Oakland", ro: "Oakland", en: "Oakland" },
    description: {
      de: "Eine Hafenstadt in der San Francisco Bay Area, bekannt für ihre Vielfalt und ihren geschäftigen Hafen.",
      hu: "Kikötőváros a San Francisco-öböl térségében, sokszínűségéről és forgalmas kikötőjéről ismert.",
      ro: "Un oraș portuar în zona Golfului San Francisco, cunoscut pentru diversitatea și portul său aglomerat.",
      en: "A port city in the San Francisco Bay Area, known for its diversity and busy port."
    },
    facts: {
      de: ["Wichtiger Hafen an der Westküste", "Jack London Square am Wasser", "Lake Merritt, ein Gezeitensee im Stadtzentrum", "Vielfältige kulinarische Szene"],
      hu: ["Fontos kikötő a nyugati parton", "Jack London Square a vízparton", "Merritt-tó, egy árapály-tó a városközpontban", "Változatos kulináris színtér"],
      ro: ["Port important pe coasta de vest", "Piața Jack London pe malul apei", "Lacul Merritt, un lac de maree în centrul orașului", "Scenă culinară diversă"],
      en: ["Major West Coast port", "Jack London Square on the waterfront", "Lake Merritt, a tidal lagoon in the city center", "Diverse culinary scene"]
    }
  },
  {
    id: "minneapolis-cities-v2",
    type: "city",
    parent: "US-MN",
    coords: [-93.2650, 44.9778],
    name: { de: "Minneapolis", hu: "Minneapolis", ro: "Minneapolis", en: "Minneapolis" },
    description: {
      de: "Die größte Stadt in Minnesota, bekannt für ihre Parks, Seen und ihre blühende Kunstszene.",
      hu: "Minnesota legnagyobb városa, parkjairól, tavairól és virágzó művészeti életéről ismert.",
      ro: "Cel mai mare oraș din Minnesota, cunoscut pentru parcurile, lacurile și scena sa artistică înfloritoare.",
      en: "The largest city in Minnesota, known for its parks, lakes, and thriving arts scene."
    },
    facts: {
      de: ["Bildet die 'Twin Cities' mit Saint Paul", "Chain of Lakes, eine Kette von Seen", "Walker Art Center und Minneapolis Sculpture Garden", "Umfangreiches Skyway-System"],
      hu: ["Az 'Ikervárosokat' alkotja Saint Paullal", "Chain of Lakes, egy tórendszer", "Walker Művészeti Központ és Minneapolis Szoborkert", "Kiterjedt Skyway rendszer"],
      ro: ["Formează 'Orașele Gemene' cu Saint Paul", "Lanțul de Lacuri, un lanț de lacuri", "Centrul de Artă Walker și Grădina de Sculptură Minneapolis", "Sistem extins de pasarele suspendate (Skyway)"],
      en: ["Forms the 'Twin Cities' with Saint Paul", "Chain of Lakes, a string of lakes", "Walker Art Center and Minneapolis Sculpture Garden", "Extensive skyway system"]
    }
  },
  {
    id: "tulsa-cities-v2",
    type: "city",
    parent: "US-OK",
    coords: [-95.9928, 36.1540],
    name: { de: "Tulsa", hu: "Tulsa", ro: "Tulsa", en: "Tulsa" },
    description: {
      de: "Eine Stadt in Oklahoma, einst als 'Ölhauptstadt der Welt' bekannt, mit einer reichen Art-déco-Architektur.",
      hu: "Város Oklahomában, egykor a 'világ olajfővárosaként' ismert, gazdag art deco építészettel.",
      ro: "Un oraș din Oklahoma, cunoscut odinioară drept „Capitala mondială a petrolului”, cu o bogată arhitectură Art Deco.",
      en: "A city in Oklahoma, once known as the 'Oil Capital of the World,' with rich Art Deco architecture."
    },
    facts: {
      de: ["Große Konzentration von Art-déco-Gebäuden", "Philbrook Museum of Art", "Gathering Place, ein großer Flusspark", "Woody Guthrie Center"],
      hu: ["Nagy koncentrációban art deco épületek", "Philbrook Művészeti Múzeum", "Gathering Place, egy nagy folyóparti park", "Woody Guthrie Központ"],
      ro: ["Concentrație mare de clădiri Art Deco", "Muzeul de Artă Philbrook", "Gathering Place, un parc mare pe malul râului", "Centrul Woody Guthrie"],
      en: ["Large concentration of Art Deco buildings", "Philbrook Museum of Art", "Gathering Place, a large riverfront park", "Woody Guthrie Center"]
    }
  },
  {
    id: "arlington-tx-cities-v2",
    type: "city",
    parent: "US-TX",
    coords: [-97.1081, 32.7357],
    name: { de: "Arlington (Texas)", hu: "Arlington (Texas)", ro: "Arlington (Texas)", en: "Arlington, TX" },
    description: {
      de: "Eine Stadt im Metroplex Dallas-Fort Worth, bekannt für ihre Sportstadien und Vergnügungsparks.",
      hu: "Város a Dallas-Fort Worth Metroplexben, sportstadionjairól és vidámparkjairól ismert.",
      ro: "Un oraș în Metroplexul Dallas-Fort Worth, cunoscut pentru stadioanele sale sportive și parcurile de distracții.",
      en: "A city in the Dallas-Fort Worth metroplex, known for its sports stadiums and amusement parks."
    },
    facts: {
      de: ["Heimat der Dallas Cowboys (AT&T Stadium)", "Heimat der Texas Rangers (Globe Life Field)", "Six Flags Over Texas Vergnügungspark", "International Bowling Museum"],
      hu: ["A Dallas Cowboys otthona (AT&T Stadion)", "A Texas Rangers otthona (Globe Life Field)", "Six Flags Over Texas vidámpark", "Nemzetközi Bowling Múzeum"],
      ro: ["Gazda Dallas Cowboys (Stadionul AT&T)", "Gazda Texas Rangers (Globe Life Field)", "Parcul de distracții Six Flags Over Texas", "Muzeul Internațional de Bowling"],
      en: ["Home of the Dallas Cowboys (AT&T Stadium)", "Home of the Texas Rangers (Globe Life Field)", "Six Flags Over Texas amusement park", "International Bowling Museum"]
    }
  },
  {
    id: "new-orleans-cities-v2",
    type: "city",
    parent: "US-LA",
    coords: [-90.0715, 29.9511],
    name: { de: "New Orleans", hu: "New Orleans", ro: "New Orleans", en: "New Orleans" },
    description: {
      de: "Eine Stadt in Louisiana am Mississippi, berühmt für ihr Nachtleben, ihre Live-Musik und ihre einzigartige Kultur.",
      hu: "Város Louisianában a Mississippi folyó partján, híres éjszakai életéről, élőzenéjéről és egyedi kultúrájáról.",
      ro: "Un oraș din Louisiana pe râul Mississippi, renumit pentru viața de noapte, muzica live și cultura sa unică.",
      en: "A Louisiana city on the Mississippi River, famous for its nightlife, live music, and unique culture."
    },
    facts: {
      de: ["Spitzname 'The Big Easy'", "Geburtsort des Jazz", "French Quarter mit seiner spanischen und französischen Architektur", "Mardi Gras, ein berühmter Karneval"],
      hu: ["Beceneve 'The Big Easy'", "A jazz szülőhelye", "Francia negyed spanyol és francia építészettel", "Mardi Gras, egy híres karnevál"],
      ro: ["Poreclit 'The Big Easy'", "Locul de naștere al jazz-ului", "Cartierul Francez cu arhitectura sa spaniolă și franceză", "Mardi Gras, un carnaval faimos"],
      en: ["Nicknamed 'The Big Easy'", "Birthplace of jazz", "French Quarter with its Spanish and French architecture", "Mardi Gras, a famous carnival"]
    }
  },
  {
    id: "wichita-cities-v2",
    type: "city",
    parent: "US-KS",
    coords: [-97.3375, 37.6872],
    name: { de: "Wichita", hu: "Wichita", ro: "Wichita", en: "Wichita" },
    description: {
      de: "Die größte Stadt in Kansas, bekannt als 'Luftfahrthauptstadt der Welt' wegen ihrer Rolle in der Flugzeugproduktion.",
      hu: "Kansas legnagyobb városa, a 'világ repülőgép-fővárosaként' ismert a repülőgépgyártásban betöltött szerepe miatt.",
      ro: "Cel mai mare oraș din Kansas, cunoscut drept „Capitala aeriană a lumii” pentru rolul său în producția de aeronave.",
      en: "The largest city in Kansas, known as the 'Air Capital of the World' for its role in aircraft production."
    },
    facts: {
      de: ["Zentrum der Flugzeugindustrie (Cessna, Beechcraft)", "Kansas Aviation Museum", "Old Cowtown Museum, ein lebendiges Geschichtsmuseum", "Keeper of the Plains Statue"],
      hu: ["A repülőgépipar központja (Cessna, Beechcraft)", "Kansas Repülési Múzeum", "Old Cowtown Múzeum, egy élő történelmi múzeum", "Keeper of the Plains szobor"],
      ro: ["Centru al industriei aeronautice (Cessna, Beechcraft)", "Muzeul Aviației din Kansas", "Muzeul Old Cowtown, un muzeu de istorie vie", "Statuia Păstrătorului Câmpiilor"],
      en: ["Hub of the aircraft industry (Cessna, Beechcraft)", "Kansas Aviation Museum", "Old Cowtown Museum, a living history museum", "Keeper of the Plains statue"]
    }
  },
  {
    id: "cleveland-cities-v2",
    type: "city",
    parent: "US-OH",
    coords: [-81.6944, 41.4993],
    name: { de: "Cleveland", hu: "Cleveland", ro: "Cleveland", en: "Cleveland" },
    description: {
      de: "Eine große Stadt in Ohio am Ufer des Eriesees, Heimat der Rock and Roll Hall of Fame.",
      hu: "Nagy város Ohióban az Erie-tó partján, a Rock and Roll Hírességek Csarnokának otthona.",
      ro: "Un oraș mare din Ohio, pe malul lacului Erie, gazda Rock and Roll Hall of Fame.",
      en: "A major city in Ohio on the shore of Lake Erie, home to the Rock and Roll Hall of Fame."
    },
    facts: {
      de: ["Rock and Roll Hall of Fame", "Cleveland Museum of Art", "Playhouse Square, das zweitgrößte Theaterzentrum der USA", "Starkes industrielles Erbe"],
      hu: ["Rock and Roll Hírességek Csarnoka", "Clevelandi Művészeti Múzeum", "Playhouse Square, az USA második legnagyobb színházi központja", "Erős ipari örökség"],
      ro: ["Rock and Roll Hall of Fame", "Muzeul de Artă din Cleveland", "Playhouse Square, al doilea cel mai mare centru de teatru din SUA", "Moștenire industrială puternică"],
      en: ["Rock and Roll Hall of Fame", "Cleveland Museum of Art", "Playhouse Square, the second-largest theater district in the U.S.", "Strong industrial heritage"]
    }
  },
  {
    id: "tampa-cities-v2",
    type: "city",
    parent: "US-FL",
    coords: [-82.4572, 27.9506],
    name: { de: "Tampa", hu: "Tampa", ro: "Tampa", en: "Tampa" },
    description: {
      de: "Eine Stadt an der Golfküste Floridas, bekannt für ihre Museen und ihr kulturelles Angebot.",
      hu: "Város Florida Golf-partján, múzeumairól és kulturális kínálatáról ismert.",
      ro: "Un oraș de pe coasta Golfului Florida, cunoscut pentru muzeele și ofertele sale culturale.",
      en: "A city on Florida's Gulf Coast, known for its museums and cultural offerings."
    },
    facts: {
      de: ["Busch Gardens Tampa Bay, ein Vergnügungspark mit afrikanischem Thema", "Florida Aquarium", "Ybor City, ein historisches Viertel, das von Zigarrenherstellern gegründet wurde", "Wichtiger Hafen"],
      hu: ["Busch Gardens Tampa Bay, egy afrikai témájú vidámpark", "Floridai Akvárium", "Ybor City, egy történelmi negyed, amelyet szivargyártók alapítottak", "Fontos kikötő"],
      ro: ["Busch Gardens Tampa Bay, un parc de distracții cu tematică africană", "Acvariul din Florida", "Ybor City, un cartier istoric fondat de producătorii de trabucuri", "Port important"],
      en: ["Busch Gardens Tampa Bay, an African-themed amusement park", "The Florida Aquarium", "Ybor City, a historic neighborhood founded by cigar manufacturers", "Major port"]
    }
  },
  {
    id: "honolulu-cities-v2",
    type: "state-capital",
    parent: "US-HI",
    coords: [-157.8583, 21.3069],
    name: { de: "Honolulu", hu: "Honolulu", ro: "Honolulu", en: "Honolulu" },
    description: {
      de: "Die Hauptstadt von Hawaii, ein wichtiges Tor zu den Vereinigten Staaten und ein beliebtes Touristenziel.",
      hu: "Hawaii fővárosa, fontos kapu az Egyesült Államokba és népszerű turisztikai célpont.",
      ro: "Capitala statului Hawaii, o poartă importantă către Statele Unite și o destinație turistică populară.",
      en: "The capital of Hawaii, a major gateway to the United States and a popular tourist destination."
    },
    facts: {
      de: ["Waikiki Beach, ein berühmter Strand", "Pearl Harbor, ein historischer Marinestützpunkt", "Iolani-Palast, die einzige offizielle königliche Residenz in den USA", "Diamond Head, ein vulkanischer Tuffkegel"],
      hu: ["Waikiki Beach, egy híres strand", "Pearl Harbor, egy történelmi haditengerészeti bázis", "Iolani-palota, az egyetlen hivatalos királyi rezidencia az USA-ban", "Diamond Head, egy vulkáni tufakúp"],
      ro: ["Plaja Waikiki, o plajă faimoasă", "Pearl Harbor, o bază navală istorică", "Palatul Iolani, singura reședință regală oficială din SUA", "Diamond Head, un con vulcanic de tuf"],
      en: ["Waikiki Beach, a famous beach", "Pearl Harbor, a historic naval base", "Iolani Palace, the only official royal residence in the U.S.", "Diamond Head, a volcanic tuff cone"]
    }
  },
  {
    id: "anaheim-cities-v2",
    type: "city",
    parent: "US-CA",
    coords: [-117.9143, 33.8366],
    name: { de: "Anaheim", hu: "Anaheim", ro: "Anaheim", en: "Anaheim" },
    description: {
      de: "Eine Stadt in Orange County, Kalifornien, die vor allem für den Disneyland Resort bekannt ist.",
      hu: "Város Orange megyében, Kaliforniában, leginkább a Disneyland Resortról ismert.",
      ro: "Un oraș din Orange County, California, cel mai bine cunoscut pentru Disneyland Resort.",
      en: "A city in Orange County, California, best known for being the home of the Disneyland Resort."
    },
    facts: {
      de: ["Disneyland Park, der ursprüngliche Disney-Themenpark", "Disney California Adventure Park", "Anaheim Convention Center", "Heimat der Anaheim Ducks (NHL) und Los Angeles Angels (MLB)"],
      hu: ["Disneyland Park, az eredeti Disney vidámpark", "Disney California Adventure Park", "Anaheimi Kongresszusi Központ", "Az Anaheim Ducks (NHL) és a Los Angeles Angels (MLB) otthona"],
      ro: ["Disneyland Park, parcul tematic original Disney", "Parcul Disney California Adventure", "Centrul de Convenții Anaheim", "Gazda echipelor Anaheim Ducks (NHL) și Los Angeles Angels (MLB)"],
      en: ["Disneyland Park, the original Disney theme park", "Disney California Adventure Park", "Anaheim Convention Center", "Home to the Anaheim Ducks (NHL) and Los Angeles Angels (MLB)"]
    }
  },
  {
    id: "orlando-cities-v2",
    type: "city",
    parent: "US-FL",
    coords: [-81.3792, 28.5383],
    name: { de: "Orlando", hu: "Orlando", ro: "Orlando", en: "Orlando" },
    description: {
      de: "Eine Stadt in Zentralflorida, die weltweit für ihre Themenparks wie Walt Disney World und Universal Orlando bekannt ist.",
      hu: "Város Közép-Floridában, világszerte ismert vidámparkjairól, mint a Walt Disney World és a Universal Orlando.",
      ro: "Un oraș din centrul Floridei, renumit la nivel mondial pentru parcurile sale tematice, cum ar fi Walt Disney World și Universal Orlando.",
      en: "A city in central Florida, world-famous for its theme parks, including Walt Disney World and Universal Orlando."
    },
    facts: {
      de: ["'The Theme Park Capital of the World'", "Walt Disney World Resort", "Universal Orlando Resort", "SeaWorld Orlando"],
      hu: ["'A világ vidámpark-fővárosa'", "Walt Disney World Resort", "Universal Orlando Resort", "SeaWorld Orlando"],
      ro: ["'Capitala mondială a parcurilor tematice'", "Walt Disney World Resort", "Universal Orlando Resort", "SeaWorld Orlando"],
      en: ["'The Theme Park Capital of the World'", "Walt Disney World Resort", "Universal Orlando Resort", "SeaWorld Orlando"]
    }
  },
  {
    id: "pittsburgh-cities-v2",
    type: "city",
    parent: "US-PA",
    coords: [-79.9959, 40.4406],
    name: { de: "Pittsburgh", hu: "Pittsburgh", ro: "Pittsburgh", en: "Pittsburgh" },
    description: {
      de: "Eine Stadt in Pennsylvania, die für ihre Geschichte als Zentrum der Stahlindustrie und ihre zahlreichen Brücken bekannt ist.",
      hu: "Város Pennsylvaniában, az acélipar központjaként és számos hídjáról ismert.",
      ro: "Un oraș din Pennsylvania, cunoscut pentru istoria sa ca centru al industriei siderurgice și pentru numeroasele sale poduri.",
      en: "A city in Pennsylvania known for its history as a steel industry hub and its numerous bridges."
    },
    facts: {
      de: ["Spitzname 'Steel City' und 'City of Bridges'", "446 Brücken", "Wandel von der Industrie zu Technologie und Gesundheitswesen", "Andy Warhol Museum"],
      hu: ["Beceneve 'Acélváros' és 'A hidak városa'", "446 híd", "Átmenet az iparról a technológiára és az egészségügyre", "Andy Warhol Múzeum"],
      ro: ["Poreclit 'Orașul de Oțel' și 'Orașul Podurilor'", "446 de poduri", "Tranziție de la industrie la tehnologie și sănătate", "Muzeul Andy Warhol"],
      en: ["Nicknamed 'Steel City' and 'City of Bridges'", "446 bridges", "Transitioned from industry to tech and healthcare", "The Andy Warhol Museum"]
    }
  },
  {
    id: "st-louis-cities-v2",
    type: "city",
    parent: "US-MO",
    coords: [-90.1994, 38.6270],
    name: { de: "St. Louis", hu: "St. Louis", ro: "St. Louis", en: "St. Louis" },
    description: {
      de: "Eine große unabhängige Stadt in Missouri am Mississippi, bekannt für den Gateway Arch.",
      hu: "Nagy független város Missouriban a Mississippi folyó partján, a Gateway Archról ismert.",
      ro: "Un oraș independent mare din Missouri, pe râul Mississippi, cunoscut pentru Arcul Gateway.",
      en: "A major independent city in Missouri on the Mississippi River, famous for the Gateway Arch."
    },
    facts: {
      de: ["Gateway Arch, das 'Tor zum Westen'", "Forest Park, einer der größten städtischen Parks der USA", "Heimat des Budweiser Biers", "St. Louis Cardinals (MLB)"],
      hu: ["Gateway Arch, a 'Nyugat kapuja'", "Forest Park, az USA egyik legnagyobb városi parkja", "A Budweiser sör otthona", "St. Louis Cardinals (MLB)"],
      ro: ["Arcul Gateway, 'Poarta către Vest'", "Parcul Forest, unul dintre cele mai mari parcuri urbane din SUA", "Casa berii Budweiser", "St. Louis Cardinals (MLB)"],
      en: ["Gateway Arch, the 'Gateway to the West'", "Forest Park, one of the largest urban parks in the U.S.", "Home of Budweiser beer", "St. Louis Cardinals (MLB)"]
    }
  },
  {
    id: "riverside-cities-v2",
    type: "city",
    parent: "US-CA",
    coords: [-117.3755, 33.9806],
    name: { de: "Riverside", hu: "Riverside", ro: "Riverside", en: "Riverside" },
    description: {
      de: "Eine Stadt in Südkalifornien, Geburtsort der kalifornischen Zitrusindustrie.",
      hu: "Város Dél-Kaliforniában, a kaliforniai citrusipar szülőhelye.",
      ro: "Un oraș din sudul Californiei, locul de naștere al industriei citricelor din California.",
      en: "A city in Southern California, the birthplace of the California citrus industry."
    },
    facts: {
      de: ["Mission Inn, ein historisches Hotel", "University of California, Riverside", "Mount Rubidoux Park", "Parent Washington Navel Orange Tree"],
      hu: ["Mission Inn, egy történelmi szálloda", "Kaliforniai Egyetem, Riverside", "Mount Rubidoux Park", "Az eredeti Washington Navel narancsfa"],
      ro: ["Mission Inn, un hotel istoric", "Universitatea din California, Riverside", "Parcul Mount Rubidoux", "Portocalul mamă Washington Navel"],
      en: ["The Mission Inn, a historic hotel", "University of California, Riverside", "Mount Rubidoux Park", "Parent Washington Navel Orange Tree"]
    }
  },
  {
    id: "santa-ana-cities-v2",
    type: "city",
    parent: "US-CA",
    coords: [-117.8677, 33.7455],
    name: { de: "Santa Ana", hu: "Santa Ana", ro: "Santa Ana", en: "Santa Ana" },
    description: {
      de: "Der Sitz des Orange County in Kalifornien, eine dicht besiedelte Stadt mit einer großen hispanischen Bevölkerung.",
      hu: "Orange megye székhelye Kaliforniában, sűrűn lakott város nagy spanyol ajkú lakossággal.",
      ro: "Sediul comitatului Orange din California, un oraș dens populat cu o mare populație hispanică.",
      en: "The county seat of Orange County, California, a densely populated city with a large Hispanic population."
    },
    facts: {
      de: ["Bowers Museum", "Discovery Cube Orange County", "Santa Ana Zoo", "Historisches Gerichtsgebäude von Orange County"],
      hu: ["Bowers Múzeum", "Discovery Cube Orange County", "Santa Ana Állatkert", "Orange megye történelmi bírósági épülete"],
      ro: ["Muzeul Bowers", "Discovery Cube Orange County", "Grădina Zoologică Santa Ana", "Clădirea istorică a tribunalului din Orange County"],
      en: ["Bowers Museum", "Discovery Cube Orange County", "Santa Ana Zoo", "Historic Orange County Courthouse"]
    }
  },
  {
    id: "cincinnati-cities-v2",
    type: "city",
    parent: "US-OH",
    coords: [-84.5120, 39.1031],
    name: { de: "Cincinnati", hu: "Cincinnati", ro: "Cincinnati", en: "Cincinnati" },
    description: {
      de: "Eine Stadt in Ohio am Ohio River, bekannt für ihre historische Architektur und ihr deutsches Erbe.",
      hu: "Város Ohióban az Ohio folyó partján, történelmi építészetéről és német örökségéről ismert.",
      ro: "Un oraș din Ohio pe râul Ohio, cunoscut pentru arhitectura sa istorică și moștenirea germană.",
      en: "A city in Ohio on the Ohio River, known for its historic architecture and German heritage."
    },
    facts: {
      de: ["Spitzname 'The Queen City'", "Over-the-Rhine, ein historisches Viertel mit Brauereien", "Cincinnati Reds, das erste professionelle Baseballteam", "National Underground Railroad Freedom Center"],
      hu: ["Beceneve 'A Királynő Városa'", "Over-the-Rhine, egy történelmi negyed sörfőzdékkel", "Cincinnati Reds, az első profi baseballcsapat", "Nemzeti Földalatti Vasút Szabadságközpont"],
      ro: ["Poreclit 'Orașul Regină'", "Over-the-Rhine, un cartier istoric cu berării", "Cincinnati Reds, prima echipă profesionistă de baseball", "Centrul Național pentru Libertatea Căii Ferate Subterane"],
      en: ["Nicknamed 'The Queen City'", "Over-the-Rhine, a historic neighborhood with breweries", "Cincinnati Reds, the first professional baseball team", "National Underground Railroad Freedom Center"]
    }
  },
  {
    id: "lexington-cities-v2",
    type: "city",
    parent: "US-KY",
    coords: [-84.4777, 38.0406],
    name: { de: "Lexington", hu: "Lexington", ro: "Lexington", en: "Lexington" },
    description: {
      de: "Bekannt als die 'Pferdehauptstadt der Welt', umgeben von Bluegrass-Landschaften und Pferdefarmen.",
      hu: "A 'világ ló fővárosaként' ismert, Bluegrass tájakkal és lófarmokkal körülvéve.",
      ro: "Cunoscută drept „Capitala mondială a cailor”, înconjurată de peisaje Bluegrass și ferme de cai.",
      en: "Known as the 'Horse Capital of the World,' surrounded by Bluegrass landscapes and horse farms."
    },
    facts: {
      de: ["Kentucky Horse Park", "Keeneland Rennbahn", "Zentrum der Vollblutzucht", "Mary Todd Lincoln House"],
      hu: ["Kentucky Ló Park", "Keeneland versenypálya", "A telivértenyésztés központja", "Mary Todd Lincoln-ház"],
      ro: ["Parcul Cailor din Kentucky", "Hipodromul Keeneland", "Centrul de creștere a cailor pursânge", "Casa Mary Todd Lincoln"],
      en: ["Kentucky Horse Park", "Keeneland race course", "Center of thoroughbred horse breeding", "Mary Todd Lincoln House"]
    }
  },
  {
    id: "anchorage-cities-v2",
    type: "city",
    parent: "US-AK",
    coords: [-149.9003, 61.2181],
    name: { de: "Anchorage", hu: "Anchorage", ro: "Anchorage", en: "Anchorage" },
    description: {
      de: "Die größte Stadt Alaskas, ein Tor zu den nahegelegenen Wildnisgebieten und Bergen.",
      hu: "Alaszka legnagyobb városa, kapu a közeli vadon területekhez és hegyekhez.",
      ro: "Cel mai mare oraș din Alaska, o poartă de acces către zonele sălbatice și munții din apropiere.",
      en: "Alaska's largest city, a gateway to nearby wilderness areas and mountains."
    },
    facts: {
      de: ["Umgeben von sechs Gebirgszügen", "Möglichkeit, Elche in der Stadt zu sehen", "Alaska Native Heritage Center", "Startpunkt für viele Abenteuer in Alaska"],
      hu: ["Hat hegylánc veszi körül", "Lehetőség jávorszarvasok megtekintésére a városban", "Alaszkai Őslakos Örökségi Központ", "Sok alaszkai kaland kiindulópontja"],
      ro: ["Înconjurat de șase lanțuri montane", "Posibilitatea de a vedea elani în oraș", "Centrul Patrimoniului Nativ din Alaska", "Punct de plecare pentru multe aventuri în Alaska"],
      en: ["Surrounded by six mountain ranges", "Possibility of seeing moose in the city", "Alaska Native Heritage Center", "Starting point for many Alaskan adventures"]
    }
  },
  {
    id: "stockton-cities-v2",
    type: "city",
    parent: "US-CA",
    coords: [-121.2908, 37.9577],
    name: { de: "Stockton", hu: "Stockton", ro: "Stockton", en: "Stockton" },
    description: {
      de: "Eine Stadt im Central Valley von Kalifornien mit einem Binnenhafen am San Joaquin River.",
      hu: "Város Kalifornia Central Valley-jében, egy belvízi kikötővel a San Joaquin folyón.",
      ro: "Un oraș din Valea Centrală a Californiei, cu un port interior pe râul San Joaquin.",
      en: "A city in California's Central Valley, with an inland seaport on the San Joaquin River."
    },
    facts: {
      de: ["Hafen von Stockton, ein wichtiger Binnenhafen", "University of the Pacific", "Haggin Museum", "Vielfältige Bevölkerung"],
      hu: ["Stocktoni kikötő, egy fontos belvízi kikötő", "Pacifici Egyetem", "Haggin Múzeum", "Változatos lakosság"],
      ro: ["Portul Stockton, un port interior important", "Universitatea Pacificului", "Muzeul Haggin", "Populație diversă"],
      en: ["Port of Stockton, a major inland port", "University of the Pacific", "Haggin Museum", "Diverse population"]
    }
  },
  {
    id: "toledo-cities-v2",
    type: "city",
    parent: "US-OH",
    coords: [-83.5379, 41.6528],
    name: { de: "Toledo", hu: "Toledo", ro: "Toledo", en: "Toledo" },
    description: {
      de: "Eine Hafenstadt in Ohio am westlichen Ende des Eriesees, bekannt für ihre Glasindustrie.",
      hu: "Kikötőváros Ohióban az Erie-tó nyugati végén, üvegiparáról ismert.",
      ro: "Un oraș portuar din Ohio, la capătul vestic al lacului Erie, cunoscut pentru industria sa de sticlă.",
      en: "A port city in Ohio on the western end of Lake Erie, known for its glass industry."
    },
    facts: {
      de: ["Spitzname 'The Glass City'", "Toledo Museum of Art mit einer großen Glassammlung", "National Museum of the Great Lakes", "Historisches Zentrum der Automobilindustrie"],
      hu: ["Beceneve 'Az Üvegváros'", "Toledói Művészeti Múzeum nagy üveggyűjteménnyel", "Nagy Tavak Nemzeti Múzeuma", "Az autóipar történelmi központja"],
      ro: ["Poreclit 'Orașul de Sticlă'", "Muzeul de Artă din Toledo, cu o mare colecție de sticlă", "Muzeul Național al Marilor Lacuri", "Centru istoric al industriei auto"],
      en: ["Nicknamed 'The Glass City'", "Toledo Museum of Art with a large glass collection", "National Museum of the Great Lakes", "Historic center for the auto industry"]
    }
  },
  {
    id: "st-paul-cities-v2",
    type: "state-capital",
    parent: "US-MN",
    coords: [-93.0900, 44.9537],
    name: { de: "Saint Paul", hu: "Saint Paul", ro: "Saint Paul", en: "Saint Paul" },
    description: {
      de: "Die Hauptstadt von Minnesota, die zusammen mit Minneapolis die 'Twin Cities' bildet.",
      hu: "Minnesota fővárosa, amely Minneapolis-szal együtt alkotja az 'Ikervárosokat'.",
      ro: "Capitala statului Minnesota, care formează „Orașele Gemene” împreună cu Minneapolis.",
      en: "The capital of Minnesota, forming the 'Twin Cities' with Minneapolis."
    },
    facts: {
      de: ["Cathedral of Saint Paul", "Minnesota State Capitol", "Science Museum of Minnesota", "Historische Summit Avenue mit viktorianischen Villen"],
      hu: ["Szent Pál-székesegyház", "Minnesotai Állami Capitolium", "Minnesotai Tudományos Múzeum", "Történelmi Summit Avenue viktoriánus villákkal"],
      ro: ["Catedrala Sfântul Paul", "Capitoliul Statului Minnesota", "Muzeul de Științe din Minnesota", "Avenida istorică Summit cu conace victoriene"],
      en: ["Cathedral of Saint Paul", "Minnesota State Capitol", "Science Museum of Minnesota", "Historic Summit Avenue with Victorian mansions"]
    }
  },
  {
    id: "newark-cities-v2",
    type: "city",
    parent: "US-NJ",
    coords: [-74.1724, 40.7357],
    name: { de: "Newark", hu: "Newark", ro: "Newark", en: "Newark" },
    description: {
      de: "Die größte Stadt in New Jersey, ein wichtiger Luft-, Schifffahrts- und Eisenbahnknotenpunkt.",
      hu: "New Jersey legnagyobb városa, fontos légi, tengeri és vasúti csomópont.",
      ro: "Cel mai mare oraș din New Jersey, un nod important aerian, maritim și feroviar.",
      en: "The largest city in New Jersey, a major air, shipping, and rail hub."
    },
    facts: {
      de: ["Newark Liberty International Airport", "Port Newark-Elizabeth Marine Terminal", "New Jersey Performing Arts Center", "Branch Brook Park mit der größten Kirschblütensammlung der USA"],
      hu: ["Newark Liberty Nemzetközi Repülőtér", "Port Newark-Elizabeth Tengeri Terminál", "New Jersey Előadóművészeti Központ", "Branch Brook Park az USA legnagyobb cseresznyevirág-gyűjteményével"],
      ro: ["Aeroportul Internațional Newark Liberty", "Terminalul Maritim Port Newark-Elizabeth", "Centrul de Arte Spectacolului din New Jersey", "Parcul Branch Brook cu cea mai mare colecție de cireși înfloriți din SUA"],
      en: ["Newark Liberty International Airport", "Port Newark-Elizabeth Marine Terminal", "New Jersey Performing Arts Center", "Branch Brook Park with the largest collection of cherry blossom trees in the U.S."]
    }
  },
  {
    id: "henderson-cities-v2",
    type: "city",
    parent: "US-NV",
    coords: [-115.0275, 36.0396],
    name: { de: "Henderson", hu: "Henderson", ro: "Henderson", en: "Henderson" },
    description: {
      de: "Eine Stadt in Nevada, südöstlich von Las Vegas, bekannt für ihre Parks und Wanderwege.",
      hu: "Város Nevadában, Las Vegastól délkeletre, parkjairól és túraútvonalairól ismert.",
      ro: "Un oraș din Nevada, la sud-est de Las Vegas, cunoscut pentru parcurile și traseele sale.",
      en: "A city in Nevada, southeast of Las Vegas, known for its parks and trails."
    },
    facts: {
      de: ["Zweitgrößte Stadt in Nevada", "Konzipiert als ruhige Alternative zu Las Vegas", "Lake Las Vegas Resort", "Umfangreiches Netz von Parks und Wanderwegen"],
      hu: ["Nevada második legnagyobb városa", "Csendes alternatívaként tervezték Las Vegashoz képest", "Lake Las Vegas Resort", "Kiterjedt park- és túraútvonal-hálózat"],
      ro: ["Al doilea cel mai mare oraș din Nevada", "Conceput ca o alternativă liniștită la Las Vegas", "Stațiunea Lake Las Vegas", "Rețea extinsă de parcuri și trasee"],
      en: ["Second largest city in Nevada", "Designed as a quiet alternative to Las Vegas", "Lake Las Vegas resort", "Extensive network of parks and trails"]
    }
  },
  {
    id: "plano-cities-v2",
    type: "city",
    parent: "US-TX",
    coords: [-96.6989, 33.0198],
    name: { de: "Plano", hu: "Plano", ro: "Plano", en: "Plano" },
    description: {
      de: "Eine wohlhabende Stadt nördlich von Dallas, Heimat vieler Unternehmenszentralen.",
      hu: "Jómódú város Dallastól északra, számos vállalati központ otthona.",
      ro: "Un oraș bogat la nord de Dallas, sediul multor corporații.",
      en: "An affluent city north of Dallas, home to many corporate headquarters."
    },
    facts: {
      de: ["Hauptsitze von Toyota Motor North America, Frito-Lay und J.C. Penney", "Hohe Lebensqualität", "Gilt als eine der sichersten Städte der USA", "Legacy West, ein großes gemischt genutztes Entwicklungsgebiet"],
      hu: ["A Toyota Motor North America, a Frito-Lay és a J.C. Penney székhelye", "Magas életminőség", "Az USA egyik legbiztonságosabb városának tartják", "Legacy West, egy nagy vegyes felhasználású fejlesztési terület"],
      ro: ["Sediul Toyota Motor North America, Frito-Lay și J.C. Penney", "Calitate ridicată a vieții", "Considerat unul dintre cele mai sigure orașe din SUA", "Legacy West, o dezvoltare mare cu utilizare mixtă"],
      en: ["Headquarters of Toyota Motor North America, Frito-Lay, and J.C. Penney", "High quality of life", "Considered one of the safest cities in the U.S.", "Legacy West, a large mixed-use development"]
    }
  },
  {
    id: "irvine-cities-v2",
    type: "city",
    parent: "US-CA",
    coords: [-117.8265, 33.6846],
    name: { de: "Irvine", hu: "Irvine", ro: "Irvine", en: "Irvine" },
    description: {
      de: "Eine geplante Stadt in Orange County, Kalifornien, bekannt für ihre Sicherheit, Schulen und Parks.",
      hu: "Tervezett város Orange megyében, Kaliforniában, biztonságáról, iskoláiról és parkjairól ismert.",
      ro: "Un oraș planificat în Orange County, California, cunoscut pentru siguranța, școlile și parcurile sale.",
      en: "A planned city in Orange County, California, known for its safety, schools, and parks."
    },
    facts: {
      de: ["University of California, Irvine (UCI)", "Konsequent als eine der sichersten Städte Amerikas eingestuft", "Umfangreiches Netz von Parks und Freiflächen", "Zentrum für Technologie- und Halbleiterunternehmen"],
      hu: ["Kaliforniai Egyetem, Irvine (UCI)", "Folyamatosan Amerika egyik legbiztonságosabb városaként rangsorolják", "Kiterjedt park- és zöldterület-hálózat", "Technológiai és félvezetőipari vállalatok központja"],
      ro: ["Universitatea din California, Irvine (UCI)", "Clasat constant printre cele mai sigure orașe din America", "Rețea extinsă de parcuri și spații deschise", "Centru pentru companii de tehnologie și semiconductori"],
      en: ["University of California, Irvine (UCI)", "Consistently ranked one of the safest cities in America", "Extensive network of parks and open spaces", "Hub for tech and semiconductor companies"]
    }
  },
  {
    id: "durham-cities-v2",
    type: "city",
    parent: "US-NC",
    coords: [-78.8986, 35.9940],
    name: { de: "Durham", hu: "Durham", ro: "Durham", en: "Durham" },
    description: {
      de: "Eine Stadt in North Carolina, bekannt für die Duke University und ihre Rolle im Research Triangle Park.",
      hu: "Város Észak-Karolinában, a Duke Egyetemről és a Research Triangle Parkban betöltött szerepéről ismert.",
      ro: "Un oraș din Carolina de Nord, cunoscut pentru Universitatea Duke și rolul său în Parcul de Cercetare Triangle.",
      en: "A city in North Carolina known for Duke University and its role in the Research Triangle Park."
    },
    facts: {
      de: ["Duke University und ihre berühmte Kapelle", "Teil des Research Triangle", "Ehemaliges Zentrum der Tabakindustrie", "Durham Performing Arts Center"],
      hu: ["Duke Egyetem és híres kápolnája", "A Research Triangle része", "A dohányipar egykori központja", "Durhami Előadóművészeti Központ"],
      ro: ["Universitatea Duke și capela sa faimoasă", "Parte a Triunghiului de Cercetare", "Fost centru al industriei tutunului", "Centrul de Arte Spectacolului Durham"],
      en: ["Duke University and its famous chapel", "Part of the Research Triangle", "Former center of the tobacco industry", "Durham Performing Arts Center"]
    }
  },
  {
    id: "st-petersburg-fl-cities-v2",
    type: "city",
    parent: "US-FL",
    coords: [-82.6403, 27.7676],
    name: { de: "St. Petersburg (Florida)", hu: "St. Petersburg (Florida)", ro: "St. Petersburg (Florida)", en: "St. Petersburg, FL" },
    description: {
      de: "Eine Stadt an der Golfküste Floridas, bekannt für ihr angenehmes Wetter und ihre Kunstszene.",
      hu: "Város Florida Golf-partján, kellemes időjárásáról és művészeti életéről ismert.",
      ro: "Un oraș de pe coasta Golfului Florida, cunoscut pentru vremea sa plăcută și scena sa artistică.",
      en: "A city on Florida's Gulf Coast, known for its pleasant weather and arts scene."
    },
    facts: {
      de: ["Spitzname 'Sunshine City'", "Hält den Rekord für die meisten aufeinanderfolgenden Sonnentage", "Salvador Dalí Museum", "Fort De Soto Park"],
      hu: ["Beceneve 'Napfény Városa'", "A legtöbb egymást követő napos nap rekordját tartja", "Salvador Dalí Múzeum", "Fort De Soto Park"],
      ro: ["Poreclit 'Orașul Soarelui'", "Deține recordul pentru cele mai multe zile consecutive cu soare", "Muzeul Salvador Dalí", "Parcul Fort De Soto"],
      en: ["Nicknamed 'Sunshine City'", "Holds the record for most consecutive days of sunshine", "The Salvador Dalí Museum", "Fort De Soto Park"]
    }
  },
  {
    id: "jersey-city-cities-v2",
    type: "city",
    parent: "US-NJ",
    coords: [-74.0776, 40.7282],
    name: { de: "Jersey City", hu: "Jersey City", ro: "Jersey City", en: "Jersey City" },
    description: {
      de: "Eine Stadt in New Jersey gegenüber von Lower Manhattan, bekannt für ihre Skyline-Ansichten und ihre Vielfalt.",
      hu: "Város New Jersey-ben, Alsó-Manhattannel szemben, felhőkarcolóiról és sokszínűségéről ismert.",
      ro: "Un oraș din New Jersey, vizavi de Lower Manhattan, cunoscut pentru priveliștile sale la orizont și diversitatea sa.",
      en: "A city in New Jersey across from Lower Manhattan, known for its skyline views and diversity."
    },
    facts: {
      de: ["Liberty State Park mit Blick auf die Freiheitsstatue", "Teil der Metropolregion New York", "Finanzviertel, das als 'Wall Street West' bekannt ist", "Empty Sky, das 9/11-Mahnmal von New Jersey"],
      hu: ["Liberty State Park kilátással a Szabadság-szoborra", "New York-i nagyvárosi terület része", "Pénzügyi negyed, amelyet 'Wall Street West'-nek is neveznek", "Empty Sky, New Jersey 9/11-es emlékműve"],
      ro: ["Parcul Statal Liberty cu vedere la Statuia Libertății", "Parte a zonei metropolitane New York", "District financiar cunoscut sub numele de 'Wall Street West'", "Empty Sky, memorialul 9/11 din New Jersey"],
      en: ["Liberty State Park with views of the Statue of Liberty", "Part of the New York metropolitan area", "Financial district known as 'Wall Street West'", "Empty Sky, New Jersey's 9/11 memorial"]
    }
  },
  {
    id: "chandler-cities-v2",
    type: "city",
    parent: "US-AZ",
    coords: [-111.8412, 33.3062],
    name: { de: "Chandler", hu: "Chandler", ro: "Chandler", en: "Chandler" },
    description: {
      de: "Ein Vorort südöstlich von Phoenix, bekannt für seine Parks und seine wachsende Technologiebranche.",
      hu: "Külváros Phoenix-től délkeletre, parkjairól és növekvő technológiai iparáról ismert.",
      ro: "O suburbie la sud-est de Phoenix, cunoscută pentru parcurile și industria sa tehnologică în creștere.",
      en: "A suburb southeast of Phoenix, known for its parks and growing tech industry."
    },
    facts: {
      de: ["Jährliches Ostrich Festival", "Zentrum für Halbleiterherstellung", "Veterans Oasis Park", "Historische Innenstadt"],
      hu: ["Éves Struccfesztivál", "A félvezetőgyártás központja", "Veterans Oasis Park", "Történelmi belváros"],
      ro: ["Festivalul anual al struților", "Centru pentru producția de semiconductori", "Parcul Veterans Oasis", "Centru istoric"],
      en: ["Annual Ostrich Festival", "Hub for semiconductor manufacturing", "Veterans Oasis Park", "Historic downtown area"]
    }
  },
  {
    id: "laredo-cities-v2",
    type: "city",
    parent: "US-TX",
    coords: [-99.5076, 27.5036],
    name: { de: "Laredo", hu: "Laredo", ro: "Laredo", en: "Laredo" },
    description: {
      de: "Eine Stadt am Rio Grande an der Grenze zu Mexiko, der größte Binnenhafen der Vereinigten Staaten.",
      hu: "Város a Rio Grande mentén a mexikói határon, az Egyesült Államok legnagyobb belvízi kikötője.",
      ro: "Un oraș pe Rio Grande, la granița cu Mexic, cel mai mare port interior din Statele Unite.",
      en: "A city on the Rio Grande on the border with Mexico, the largest inland port in the United States."
    },
    facts: {
      de: ["Wichtiger Knotenpunkt für den Handel mit Mexiko", "Republic of the Rio Grande Museum", "Starke hispanische Kultur", "Jährliche Feier zum Geburtstag von Washington"],
      hu: ["Fontos kereskedelmi csomópont Mexikóval", "A Rio Grande Köztársaság Múzeuma", "Erős spanyol kultúra", "Éves Washington születésnapi ünnepség"],
      ro: ["Nod important pentru comerțul cu Mexic", "Muzeul Republicii Rio Grande", "Cultură hispanică puternică", "Sărbătoarea anuală a zilei de naștere a lui Washington"],
      en: ["Major hub for trade with Mexico", "Republic of the Rio Grande Museum", "Strong Hispanic culture", "Annual Washington's Birthday Celebration"]
    }
  },
  {
    id: "norfolk-cities-v2",
    type: "city",
    parent: "US-VA",
    coords: [-76.2859, 36.8508],
    name: { de: "Norfolk", hu: "Norfolk", ro: "Norfolk", en: "Norfolk" },
    description: {
      de: "Eine Hafenstadt in Virginia, Heimat der größten Marinebasis der Welt.",
      hu: "Kikötőváros Virginiában, a világ legnagyobb haditengerészeti bázisának otthona.",
      ro: "Un oraș portuar din Virginia, gazda celei mai mari baze navale din lume.",
      en: "A waterfront city in Virginia, home to the largest naval base in the world."
    },
    facts: {
      de: ["Naval Station Norfolk", "Chrysler Museum of Art", "Norfolk Botanical Garden", "USS Wisconsin, ein Schlachtschiff-Museum"],
      hu: ["Norfolki haditengerészeti állomás", "Chrysler Művészeti Múzeum", "Norfolki Botanikus Kert", "USS Wisconsin, egy csatahajó-múzeum"],
      ro: ["Baza Navală Norfolk", "Muzeul de Artă Chrysler", "Grădina Botanică Norfolk", "USS Wisconsin, un muzeu-navă de luptă"],
      en: ["Naval Station Norfolk", "Chrysler Museum of Art", "Norfolk Botanical Garden", "USS Wisconsin, a battleship museum"]
    }
  },
  {
    id: "reno-cities-v2",
    type: "city",
    parent: "US-NV",
    coords: [-119.8138, 39.5296],
    name: { de: "Reno", hu: "Reno", ro: "Reno", en: "Reno" },
    description: {
      de: "Bekannt als 'Die größte kleine Stadt der Welt', eine Stadt in Nevada mit Casinos und Outdoor-Aktivitäten.",
      hu: "A 'világ legnagyobb kisvárosaként' ismert, nevadai város kaszinókkal és szabadtéri tevékenységekkel.",
      ro: "Cunoscut drept „Cel mai mare mic oraș din lume”, un oraș din Nevada cu cazinouri și activități în aer liber.",
      en: "Known as 'The Biggest Little City in the World,' a city in Nevada with casinos and outdoor recreation."
    },
    facts: {
      de: ["National Automobile Museum", "In der Nähe des Lake Tahoe", "Truckee River fließt durch die Stadt", "Jährliches Great Reno Balloon Race"],
      hu: ["Nemzeti Autómúzeum", "A Tahoe-tó közelében", "A Truckee folyó áthalad a városon", "Éves Great Reno Hőlégballon Verseny"],
      ro: ["Muzeul Național al Automobilului", "Aproape de Lacul Tahoe", "Râul Truckee traversează orașul", "Cursa anuală de baloane Great Reno"],
      en: ["National Automobile Museum", "Near Lake Tahoe", "Truckee River runs through the city", "Annual Great Reno Balloon Race"]
    }
  },
  {
    id: "buffalo-cities-v2",
    type: "city",
    parent: "US-NY",
    coords: [-78.8784, 42.8864],
    name: { de: "Buffalo", hu: "Buffalo", ro: "Buffalo", en: "Buffalo" },
    description: {
      de: "Die zweitgrößte Stadt im Bundesstaat New York am Ostufer des Eriesees, nahe der Niagarafälle.",
      hu: "New York állam második legnagyobb városa az Erie-tó keleti partján, a Niagara-vízesés közelében.",
      ro: "Al doilea cel mai mare oraș din statul New York, pe malul estic al lacului Erie, lângă Cascada Niagara.",
      en: "The second-largest city in New York State, on the eastern shore of Lake Erie, near Niagara Falls."
    },
    facts: {
      de: ["Bekannt für Buffalo Wings", "Industrielles Erbe", "Albright-Knox Art Gallery", "Schneereiche Winter"],
      hu: ["Híres a Buffalo csirkeszárnyakról", "Ipari örökség", "Albright-Knox Művészeti Galéria", "Havas telek"],
      ro: ["Cunoscut pentru aripioarele Buffalo", "Moștenire industrială", "Galeria de Artă Albright-Knox", "Ierni cu zăpadă abundentă"],
      en: ["Famous for Buffalo wings", "Industrial heritage", "Albright-Knox Art Gallery", "Snowy winters"]
    }
  },
  {
    id: "fort-wayne-cities-v2",
    type: "city",
    parent: "US-IN",
    coords: [-85.1394, 41.0793],
    name: { de: "Fort Wayne", hu: "Fort Wayne", ro: "Fort Wayne", en: "Fort Wayne" },
    description: {
      de: "Die zweitgrößte Stadt in Indiana mit einer reichen Geschichte und einer wachsenden Wirtschaft.",
      hu: "Indiana második legnagyobb városa, gazdag történelemmel és növekvő gazdasággal.",
      ro: "Al doilea cel mai mare oraș din Indiana, cu o istorie bogată și o economie în creștere.",
      en: "The second-largest city in Indiana, with a rich history and a growing economy."
    },
    facts: {
      de: ["Johnny Appleseed Park", "Fort Wayne Children's Zoo", "Drei Flüsse fließen durch die Stadt", "Historische Wurzeln als französischer Handelsposten"],
      hu: ["Johnny Appleseed Park", "Fort Wayne-i Gyermekállatkert", "Három folyó folyik át a városon", "Történelmi gyökerei mint francia kereskedelmi állomás"],
      ro: ["Parcul Johnny Appleseed", "Grădina Zoologică pentru Copii Fort Wayne", "Trei râuri traversează orașul", "Rădăcini istorice ca post comercial francez"],
      en: ["Johnny Appleseed Park", "Fort Wayne Children's Zoo", "Three rivers run through the city", "Historic roots as a French trading post"]
    }
  },
  {
    id: "boise-cities-v2",
    type: "state-capital",
    parent: "US-ID",
    coords: [-116.2023, 43.6150],
    name: { de: "Boise", hu: "Boise", ro: "Boise", en: "Boise" },
    description: {
      de: "Die Hauptstadt von Idaho, bekannt für ihre Lebensqualität und den Zugang zu Outdoor-Aktivitäten.",
      hu: "Idaho fővárosa, életminőségéről és a szabadtéri tevékenységekhez való hozzáférésről ismert.",
      ro: "Capitala statului Idaho, cunoscută pentru calitatea vieții și accesul la activități în aer liber.",
      en: "The capital of Idaho, known for its quality of life and access to outdoor recreation."
    },
    facts: {
      de: ["Spitzname 'City of Trees'", "Boise River Greenbelt, ein Park am Flussufer", "Basque Block, der das baskische Erbe feiert", "Idaho State Capitol"],
      hu: ["Beceneve 'A fák városa'", "Boise River Greenbelt, egy folyóparti park", "Basque Block, amely a baszk örökséget ünnepli", "Idahói Állami Capitolium"],
      ro: ["Poreclit 'Orașul Copacilor'", "Boise River Greenbelt, un parc pe malul râului", "Cartierul Basc, care celebrează moștenirea bască", "Capitoliul Statului Idaho"],
      en: ["Nicknamed the 'City of Trees'", "Boise River Greenbelt, a riverfront park", "Basque Block celebrating Basque heritage", "Idaho State Capitol"]
    }
  },
  {
    id: "richmond-va-cities-v2",
    type: "state-capital",
    parent: "US-VA",
    coords: [-77.4360, 37.5407],
    name: { de: "Richmond (Virginia)", hu: "Richmond (Virginia)", ro: "Richmond (Virginia)", en: "Richmond, VA" },
    description: {
      de: "Die Hauptstadt von Virginia, eine Stadt mit einer zentralen Rolle in der Geschichte des Bürgerkriegs.",
      hu: "Virginia fővárosa, a polgárháború történetében központi szerepet játszó város.",
      ro: "Capitala Virginiei, un oraș cu un rol central în istoria Războiului Civil.",
      en: "The capital of Virginia, a city with a central role in Civil War history."
    },
    facts: {
      de: ["Ehemalige Hauptstadt der Konföderierten Staaten von Amerika", "Virginia Museum of Fine Arts", "Monument Avenue", "Edgar Allan Poe Museum"],
      hu: ["Az Amerikai Konföderációs Államok egykori fővárosa", "Virginiai Szépművészeti Múzeum", "Monument Avenue", "Edgar Allan Poe Múzeum"],
      ro: ["Fosta capitală a Statelor Confederate ale Americii", "Muzeul de Arte Frumoase din Virginia", "Avenida Monumentelor", "Muzeul Edgar Allan Poe"],
      en: ["Former capital of the Confederate States of America", "Virginia Museum of Fine Arts", "Monument Avenue", "The Edgar Allan Poe Museum"]
    }
  },
  {
    id: "des-moines-cities-v2",
    type: "state-capital",
    parent: "US-IA",
    coords: [-93.6212, 41.5908],
    name: { de: "Des Moines", hu: "Des Moines", ro: "Des Moines", en: "Des Moines" },
    description: {
      de: "Die Hauptstadt von Iowa, ein wichtiges Zentrum für die Versicherungsbranche und die Landwirtschaft.",
      hu: "Iowa fővárosa, a biztosítási ipar és a mezőgazdaság fontos központja.",
      ro: "Capitala statului Iowa, un centru important pentru industria asigurărilor și agricultură.",
      en: "The capital of Iowa, a major center for the insurance industry and agriculture."
    },
    facts: {
      de: ["Iowa State Fair, eine der größten Messen des Landes", "Iowa State Capitol mit seiner goldenen Kuppel", "Des Moines Art Center", "Wichtig für die Präsidentschaftsvorwahlen"],
      hu: ["Iowa Állami Vásár, az ország egyik legnagyobb vására", "Iowai Állami Capitolium aranykupolájával", "Des Moines Művészeti Központ", "Fontos az elnöki előválasztások szempontjából"],
      ro: ["Târgul de Stat din Iowa, unul dintre cele mai mari din țară", "Capitoliul Statului Iowa cu domul său auriu", "Centrul de Artă Des Moines", "Important pentru alegerile primare prezidențiale"],
      en: ["Iowa State Fair, one of the largest state fairs in the country", "Iowa State Capitol with its golden dome", "Des Moines Art Center", "Important for presidential caucuses"]
    }
  },
  {
    id: "baton-rouge-cities-v2",
    type: "state-capital",
    parent: "US-LA",
    coords: [-91.1871, 30.4515],
    name: { de: "Baton Rouge", hu: "Baton Rouge", ro: "Baton Rouge", en: "Baton Rouge" },
    description: {
      de: "Die Hauptstadt von Louisiana am Mississippi, bekannt für ihre Industrie und ihre Universität.",
      hu: "Louisiana fővárosa a Mississippi folyó partján, iparáról és egyeteméről ismert.",
      ro: "Capitala Louisianei pe râul Mississippi, cunoscută pentru industria și universitatea sa.",
      en: "The capital of Louisiana on the Mississippi River, known for its industry and university."
    },
    facts: {
      de: ["Louisiana State University (LSU)", "Höchstes Kapitolgebäude der USA", "USS Kidd, ein Zerstörermuseum", "Wichtiger Standort für die petrochemische Industrie"],
      hu: ["Louisianai Állami Egyetem (LSU)", "Az USA legmagasabb capitolium-épülete", "USS Kidd, egy rombolómúzeum", "Fontos petrolkémiai ipari helyszín"],
      ro: ["Universitatea de Stat din Louisiana (LSU)", "Cea mai înaltă clădire de capitoliu din SUA", "USS Kidd, un muzeu distrugător", "Locație importantă pentru industria petrochimică"],
      en: ["Louisiana State University (LSU)", "Tallest state capitol building in the U.S.", "USS Kidd, a destroyer museum", "Major site for the petrochemical industry"]
    }
  },
  {
    id: "spokane-cities-v2",
    type: "city",
    parent: "US-WA",
    coords: [-117.4260, 47.6588],
    name: { de: "Spokane", hu: "Spokane", ro: "Spokane", en: "Spokane" },
    description: {
      de: "Eine Stadt im Osten Washingtons, bekannt für ihre Wasserfälle im Stadtzentrum und ihre Outdoor-Aktivitäten.",
      hu: "Város Kelet-Washingtonban, a belvárosi vízeséseiről és szabadtéri tevékenységeiről ismert.",
      ro: "Un oraș din estul statului Washington, cunoscut pentru cascadele din centrul orașului și activitățile în aer liber.",
      en: "A city in eastern Washington, known for its downtown waterfalls and outdoor recreation."
    },
    facts: {
      de: ["Riverfront Park, Ort der Weltausstellung 1974", "Spokane Falls", "Centennial Trail für Radfahren und Wandern", "In der Nähe vieler Seen und Berge"],
      hu: ["Riverfront Park, az 1974-es világkiállítás helyszíne", "Spokane-vízesés", "Centennial Trail kerékpározáshoz és túrázáshoz", "Sok tó és hegy közelében"],
      ro: ["Parcul Riverfront, locul Expoziției Mondiale din 1974", "Cascadele Spokane", "Traseul Centenar pentru ciclism și drumeții", "Aproape de multe lacuri și munți"],
      en: ["Riverfront Park, site of the 1974 World's Fair", "Spokane Falls", "Centennial Trail for biking and hiking", "Near many lakes and mountains"]
    }
  },
  {
    id: "birmingham-al-cities-v2",
    type: "city",
    parent: "US-AL",
    coords: [-86.8025, 33.5207],
    name: { de: "Birmingham (Alabama)", hu: "Birmingham (Alabama)", ro: "Birmingham (Alabama)", en: "Birmingham, AL" },
    description: {
      de: "Die größte Stadt in Alabama, eine wichtige Stadt der Bürgerrechtsbewegung.",
      hu: "Alabama legnagyobb városa, a polgárjogi mozgalom fontos városa.",
      ro: "Cel mai mare oraș din Alabama, un oraș important al Mișcării pentru Drepturile Civile.",
      en: "The largest city in Alabama, a key city in the Civil Rights Movement."
    },
    facts: {
      de: ["Birmingham Civil Rights Institute", "16th Street Baptist Church", "Sloss Furnaces, ein nationales historisches Wahrzeichen", "Ehemals ein Zentrum der Stahlindustrie"],
      hu: ["Birminghami Polgárjogi Intézet", "16. utcai baptista templom", "Sloss Furnaces, nemzeti történelmi emlékhely", "Egykor az acélipar központja"],
      ro: ["Institutul pentru Drepturile Civile din Birmingham", "Biserica Baptistă de pe Strada 16", "Furnalurile Sloss, un reper istoric național", "Fost centru al industriei siderurgice"],
      en: ["Birmingham Civil Rights Institute", "16th Street Baptist Church", "Sloss Furnaces, a National Historic Landmark", "Formerly a major steel industry center"]
    }
  },
  {
    id: "rochester-ny-cities-v2",
    type: "city",
    parent: "US-NY",
    coords: [-77.6109, 43.1566],
    name: { de: "Rochester (New York)", hu: "Rochester (New York)", ro: "Rochester (New York)", en: "Rochester, NY" },
    description: {
      de: "Eine Stadt im Westen von New York, bekannt als Geburtsort von Unternehmen wie Kodak und Xerox.",
      hu: "Város Nyugat-New Yorkban, olyan vállalatok szülőhelyeként ismert, mint a Kodak és a Xerox.",
      ro: "Un oraș din vestul statului New York, cunoscut ca locul de naștere al unor companii precum Kodak și Xerox.",
      en: "A city in Western New York, known as the birthplace of companies like Kodak and Xerox."
    },
    facts: {
      de: ["George Eastman Museum, ein Fotografie-Museum", "The Strong National Museum of Play", "Susan B. Anthony Museum & House", "Zentrum für Optik und Bildgebung"],
      hu: ["George Eastman Múzeum, egy fotográfiai múzeum", "The Strong Nemzeti Játékmúzeum", "Susan B. Anthony Múzeum és Ház", "Az optika és a képalkotás központja"],
      ro: ["Muzeul George Eastman, un muzeu de fotografie", "Muzeul Național al Jocului The Strong", "Muzeul și Casa Susan B. Anthony", "Centru pentru optică și imagistică"],
      en: ["George Eastman Museum, a photography museum", "The Strong National Museum of Play", "Susan B. Anthony Museum & House", "Hub for optics and imaging"]
    }
  },
  {
    id: "aurora-co-cities-v2",
    type: "city",
    parent: "US-CO",
    coords: [-104.8319, 39.7294],
    name: { de: "Aurora (Colorado)", hu: "Aurora (Colorado)", ro: "Aurora (Colorado)", en: "Aurora, CO" },
    description: {
      de: "Eine große Stadt östlich von Denver, bekannt für ihre militärische Präsenz und ihre Vielfalt.",
      hu: "Nagy város Denvertől keletre, katonai jelenlétéről és sokszínűségéről ismert.",
      ro: "Un oraș mare la est de Denver, cunoscut pentru prezența sa militară și diversitatea sa.",
      en: "A large city east of Denver, known for its military presence and diversity."
    },
    facts: {
      de: ["Buckley Air Force Base", "Anschutz Medical Campus", "Vielfältige internationale Restaurants", "Aurora Reservoir für Wassersport"],
      hu: ["Buckley légi bázis", "Anschutz Orvosi Kampusz", "Változatos nemzetközi éttermek", "Aurora-víztározó vízisportokhoz"],
      ro: ["Baza Aeriană Buckley", "Campusul Medical Anschutz", "Restaurante internaționale diverse", "Rezervorul Aurora pentru sporturi nautice"],
      en: ["Buckley Air Force Base", "Anschutz Medical Campus", "Diverse international restaurants", "Aurora Reservoir for water sports"]
    }
  },
  {
    id: "little-rock-cities-v2",
    type: "state-capital",
    parent: "US-AR",
    coords: [-92.2896, 34.7465],
    name: { de: "Little Rock", hu: "Little Rock", ro: "Little Rock", en: "Little Rock" },
    description: {
      de: "Die Hauptstadt von Arkansas, ein wichtiger Ort in der Geschichte der Aufhebung der Rassentrennung.",
      hu: "Arkansas fővárosa, a deszegregáció történetének fontos helyszíne.",
      ro: "Capitala statului Arkansas, un loc cheie în istoria desegregării.",
      en: "The capital of Arkansas, a key site in the history of desegregation."
    },
    facts: {
      de: ["Little Rock Central High School National Historic Site", "William J. Clinton Presidential Library and Museum", "River Market District", "Big Dam Bridge"],
      hu: ["Little Rock Central High School Nemzeti Történelmi Helyszín", "William J. Clinton Elnöki Könyvtár és Múzeum", "River Market negyed", "Big Dam híd"],
      ro: ["Liceul Central Little Rock, sit istoric național", "Biblioteca și Muzeul Prezidențial William J. Clinton", "Districtul River Market", "Podul Big Dam"],
      en: ["Little Rock Central High School National Historic Site", "William J. Clinton Presidential Library and Museum", "River Market District", "Big Dam Bridge"]
    }
  },
  {
    id: "columbia-sc-cities-v2",
    type: "state-capital",
    parent: "US-SC",
    coords: [-81.0348, 34.0007],
    name: { de: "Columbia (South Carolina)", hu: "Columbia (Dél-Karolina)", ro: "Columbia (Carolina de Sud)", en: "Columbia, SC" },
    description: {
      de: "Die Hauptstadt von South Carolina, bekannt für ihre heißen Sommer und ihre Universität.",
      hu: "Dél-Karolina fővárosa, forró nyarairól és egyeteméről ismert.",
      ro: "Capitala Carolinei de Sud, cunoscută pentru verile sale fierbinți și universitatea sa.",
      en: "The capital of South Carolina, known for its hot summers and its university."
    },
    facts: {
      de: ["University of South Carolina", "South Carolina State House", "Riverbanks Zoo and Garden", "Congaree National Park in der Nähe"],
      hu: ["Dél-Karolinai Egyetem", "Dél-Karolinai Állami Ház", "Riverbanks Állatkert és Kert", "Congaree Nemzeti Park a közelben"],
      ro: ["Universitatea din Carolina de Sud", "Casa de Stat din Carolina de Sud", "Grădina Zoologică și Grădina Riverbanks", "Parcul Național Congaree în apropiere"],
      en: ["University of South Carolina", "South Carolina State House", "Riverbanks Zoo and Garden", "Congaree National Park nearby"]
    }
  },
  {
    id: "jackson-ms-cities-v2",
    type: "state-capital",
    parent: "US-MS",
    coords: [-90.1848, 32.2988],
    name: { de: "Jackson (Mississippi)", hu: "Jackson (Mississippi)", ro: "Jackson (Mississippi)", en: "Jackson, MS" },
    description: {
      de: "Die Hauptstadt von Mississippi, bekannt als 'Stadt mit Seele' für ihre Rolle in der Blues-, Gospel- und Jazzmusik.",
      hu: "Mississippi fővárosa, a 'lélekkel teli városként' ismert a blues, a gospel és a jazz zenében betöltött szerepe miatt.",
      ro: "Capitala statului Mississippi, cunoscută drept „Orașul cu Suflet” pentru rolul său în muzica blues, gospel și jazz.",
      en: "The capital of Mississippi, known as the 'City with Soul' for its role in blues, gospel, and jazz music."
    },
    facts: {
      de: ["Mississippi Civil Rights Museum", "Mississippi Freedom Trail", "Geburtsort vieler berühmter Musiker", "Mississippi State Capitol"],
      hu: ["Mississippi Polgárjogi Múzeum", "Mississippi Szabadság Ösvény", "Sok híres zenész szülőhelye", "Mississippi Állami Capitolium"],
      ro: ["Muzeul Drepturilor Civile din Mississippi", "Traseul Libertății din Mississippi", "Locul de naștere al multor muzicieni celebri", "Capitoliul Statului Mississippi"],
      en: ["Mississippi Civil Rights Museum", "Mississippi Freedom Trail", "Birthplace of many famous musicians", "Mississippi State Capitol"]
    }
  },
  {
    id: "providence-cities-v2",
    type: "state-capital",
    parent: "US-RI",
    coords: [-71.4128, 41.8240],
    name: { de: "Providence", hu: "Providence", ro: "Providence", en: "Providence" },
    description: {
      de: "Die Hauptstadt von Rhode Island, eine der ältesten Städte der USA mit einer lebendigen Kunstszene.",
      hu: "Rhode Island fővárosa, az USA egyik legrégebbi városa, élénk művészeti élettel.",
      ro: "Capitala statului Rhode Island, unul dintre cele mai vechi orașe din SUA, cu o scenă artistică vibrantă.",
      en: "The capital of Rhode Island, one of the oldest cities in the U.S. with a vibrant arts scene."
    },
    facts: {
      de: ["Gegründet von Roger Williams", "Brown University und Rhode Island School of Design (RISD)", "WaterFire, eine Kunstinstallation auf den Flüssen", "Historische Benefit Street"],
      hu: ["Roger Williams alapította", "Brown Egyetem és Rhode Island School of Design (RISD)", "WaterFire, egy művészeti installáció a folyókon", "Történelmi Benefit Street"],
      ro: ["Fondat de Roger Williams", "Universitatea Brown și Școala de Design din Rhode Island (RISD)", "WaterFire, o instalație de artă pe râuri", "Strada istorică Benefit"],
      en: ["Founded by Roger Williams", "Brown University and Rhode Island School of Design (RISD)", "WaterFire, an art installation on the rivers", "Historic Benefit Street"]
    }
  },
  {
    id: "hartford-cities-v2",
    type: "state-capital",
    parent: "US-CT",
    coords: [-72.6851, 41.7637],
    name: { de: "Hartford", hu: "Hartford", ro: "Hartford", en: "Hartford" },
    description: {
      de: "Die Hauptstadt von Connecticut, bekannt als 'Versicherungshauptstadt der Welt'.",
      hu: "Connecticut fővárosa, a 'világ biztosítási fővárosaként' ismert.",
      ro: "Capitala statului Connecticut, cunoscută drept „Capitala mondială a asigurărilor”.",
      en: "The capital of Connecticut, known as the 'Insurance Capital of the World'."
    },
    facts: {
      de: ["Zentrum für die Versicherungsbranche", "Mark Twain House & Museum", "Harriet Beecher Stowe Center", "Wadsworth Atheneum, das älteste öffentliche Kunstmuseum der USA"],
      hu: ["A biztosítási ipar központja", "Mark Twain Ház és Múzeum", "Harriet Beecher Stowe Központ", "Wadsworth Atheneum, az USA legrégebbi nyilvános művészeti múzeuma"],
      ro: ["Centru pentru industria asigurărilor", "Casa și Muzeul Mark Twain", "Centrul Harriet Beecher Stowe", "Wadsworth Atheneum, cel mai vechi muzeu public de artă din SUA"],
      en: ["Hub for the insurance industry", "Mark Twain House & Museum", "Harriet Beecher Stowe Center", "Wadsworth Atheneum, the oldest public art museum in the U.S."]
    }
  },
  {
    id: "salt-lake-city-cities-v2",
    type: "state-capital",
    parent: "US-UT",
    coords: [-111.8910, 40.7608],
    name: { de: "Salt Lake City", hu: "Salt Lake City", ro: "Salt Lake City", en: "Salt Lake City" },
    description: {
      de: "Die Hauptstadt von Utah, gegründet von Mormonen-Pionieren, nahe dem Großen Salzsee.",
      hu: "Utah fővárosa, mormon telepesek alapították, a Nagy-sóstó közelében.",
      ro: "Capitala statului Utah, fondată de pionierii mormoni, lângă Marele Lac Sărat.",
      en: "The capital of Utah, founded by Mormon pioneers, near the Great Salt Lake."
    },
    facts: {
      de: ["Hauptsitz der Kirche Jesu Christi der Heiligen der Letzten Tage", "Temple Square", "Tor zu fünf Nationalparks in Utah", "Gastgeber der Olympischen Winterspiele 2002"],
      hu: ["Az Utolsó Napok Szentjeinek Jézus Krisztus Egyháza központja", "Temple Square", "Kapu Utah öt nemzeti parkjához", "A 2002-es téli olimpia házigazdája"],
      ro: ["Sediul Bisericii lui Isus Hristos a Sfinților din Zilele din Urmă", "Piața Templului", "Poarta de acces către cele cinci parcuri naționale din Utah", "Gazda Jocurilor Olimpice de iarnă din 2002"],
      en: ["Headquarters of The Church of Jesus Christ of Latter-day Saints", "Temple Square", "Gateway to Utah's five national parks", "Host of the 2002 Winter Olympics"]
    }
  },
  {
    id: "charleston-sc-cities-v2",
    type: "city",
    parent: "US-SC",
    coords: [-79.9311, 32.7765],
    name: { de: "Charleston (South Carolina)", hu: "Charleston (Dél-Karolina)", ro: "Charleston (Carolina de Sud)", en: "Charleston, SC" },
    description: {
      de: "Eine historische Hafenstadt in South Carolina, bekannt für ihre pastellfarbenen Häuser und Kopfsteinpflasterstraßen.",
      hu: "Történelmi kikötőváros Dél-Karolinában, pasztellszínű házairól és macskaköves utcáiról ismert.",
      ro: "Un oraș portuar istoric din Carolina de Sud, cunoscut pentru casele sale în culori pastelate și străzile pietruite.",
      en: "A historic port city in South Carolina, known for its pastel-colored houses and cobblestone streets."
    },
    facts: {
      de: ["Historisches Viertel", "Fort Sumter, wo der Bürgerkrieg begann", "Rainbow Row", "Bekannt für seine Gastfreundschaft und Küche"],
      hu: ["Történelmi negyed", "Fort Sumter, ahol a polgárháború kezdődött", "Rainbow Row", "Vendégszeretetéről és konyhájáról ismert"],
      ro: ["Cartier istoric", "Fort Sumter, unde a început Războiul Civil", "Rainbow Row", "Cunoscut pentru ospitalitatea și bucătăria sa"],
      en: ["Historic district", "Fort Sumter, where the Civil War began", "Rainbow Row", "Known for its hospitality and cuisine"]
    }
  },
  {
    id: "savannah-cities-v2",
    type: "city",
    parent: "US-GA",
    coords: [-81.0912, 32.0809],
    name: { de: "Savannah", hu: "Savannah", ro: "Savannah", en: "Savannah" },
    description: {
      de: "Eine Küstenstadt in Georgia, bekannt für ihre historischen Plätze und ihre mit spanischem Moos bewachsenen Eichen.",
      hu: "Part menti város Georgiában, történelmi tereiről és spanyol mohával borított tölgyfáiról ismert.",
      ro: "Un oraș de coastă din Georgia, cunoscut pentru piețele sale istorice și stejarii acoperiți cu mușchi spaniol.",
      en: "A coastal Georgia city, known for its historic squares and Spanish moss-draped oak trees."
    },
    facts: {
      de: ["22 historische Plätze in der Innenstadt", "Historischer Flussuferbezirk", "Bonaventure-Friedhof", "Spukgeschichten und Geistertouren"],
      hu: ["22 történelmi tér a belvárosban", "Történelmi folyóparti negyed", "Bonaventure temető", "Kísértethistóriák és szellemtúrák"],
      ro: ["22 de piețe istorice în centrul orașului", "Cartier istoric pe malul râului", "Cimitirul Bonaventure", "Povești cu fantome și tururi bântuite"],
      en: ["22 historic squares in its downtown area", "Historic riverfront district", "Bonaventure Cemetery", "Haunted stories and ghost tours"]
    }
  },
  {
    id: "santa-fe-cities-v2",
    type: "state-capital",
    parent: "US-NM",
    coords: [-105.9378, 35.6870],
    name: { de: "Santa Fe", hu: "Santa Fe", ro: "Santa Fe", en: "Santa Fe" },
    description: {
      de: "Die Hauptstadt von New Mexico, bekannt für ihre Pueblo-Architektur und als kreatives Kunstzentrum.",
      hu: "Új-Mexikó fővárosa, Pueblo-stílusú építészetéről és kreatív művészeti központként ismert.",
      ro: "Capitala statului New Mexico, cunoscută pentru arhitectura sa în stil Pueblo și ca un centru artistic creativ.",
      en: "The capital of New Mexico, known for its Pueblo-style architecture and as a creative arts hub."
    },
    facts: {
      de: ["Älteste Hauptstadt der USA", "Canyon Road mit über 100 Kunstgalerien", "Georgia O'Keeffe Museum", "Loretto-Kapelle und ihre wundersame Treppe"],
      hu: ["Az USA legrégebbi fővárosa", "Canyon Road több mint 100 művészeti galériával", "Georgia O'Keeffe Múzeum", "Loretto-kápolna és csodálatos lépcsője"],
      ro: ["Cea mai veche capitală de stat din SUA", "Canyon Road cu peste 100 de galerii de artă", "Muzeul Georgia O'Keeffe", "Capela Loretto și scara sa miraculoasă"],
      en: ["Oldest state capital in the U.S.", "Canyon Road with over 100 art galleries", "Georgia O'Keeffe Museum", "Loretto Chapel and its miraculous staircase"]
    }
  },
  {
    id: "juneau-cities-v2",
    type: "state-capital",
    parent: "US-AK",
    coords: [-134.4197, 58.3019],
    name: { de: "Juneau", hu: "Juneau", ro: "Juneau", en: "Juneau" },
    description: {
      de: "Die Hauptstadt von Alaska, eine der wenigen Hauptstädte, die nicht über Straßen erreichbar ist.",
      hu: "Alaszka fővárosa, egyike azon kevés fővárosoknak, amelyeket nem lehet közúton megközelíteni.",
      ro: "Capitala Alaskăi, una dintre puținele capitale de stat inaccesibile pe șosea.",
      en: "The capital of Alaska, one of the few state capitals not accessible by road."
    },
    facts: {
      de: ["Nur per Flugzeug oder Schiff erreichbar", "Mendenhall-Gletscher", "Walbeobachtungstouren", "Mount Roberts Tramway"],
      hu: ["Csak repülővel vagy hajóval érhető el", "Mendenhall-gleccser", "Bálnafigyelő túrák", "Mount Roberts libegő"],
      ro: ["Accesibil doar cu avionul sau cu barca", "Ghețarul Mendenhall", "Tururi de observare a balenelor", "Telecabina Mount Roberts"],
      en: ["Accessible only by plane or boat", "Mendenhall Glacier", "Whale watching tours", "Mount Roberts Tramway"]
    }
  },
  {
    id: "montgomery-cities-v2",
    type: "state-capital",
    parent: "US-AL",
    coords: [-86.3077, 32.3792],
    name: { de: "Montgomery", hu: "Montgomery", ro: "Montgomery", en: "Montgomery" },
    description: {
      de: "Die Hauptstadt von Alabama, eine Schlüsselstadt in der Bürgerrechtsbewegung.",
      hu: "Alabama fővárosa, a polgárjogi mozgalom kulcsfontosságú városa.",
      ro: "Capitala statului Alabama, un oraș cheie în Mișcarea pentru Drepturile Civile.",
      en: "The capital of Alabama, a key city in the Civil Rights Movement."
    },
    facts: {
      de: ["Rosa Parks Museum", "Dexter Avenue King Memorial Baptist Church", "Erste Hauptstadt der Konföderation", "National Memorial for Peace and Justice"],
      hu: ["Rosa Parks Múzeum", "Dexter Avenue King Memorial Baptista Templom", "A Konföderáció első fővárosa", "Nemzeti Emlékmű a Békéért és Igazságért"],
      ro: ["Muzeul Rosa Parks", "Biserica Baptistă Memorială Dexter Avenue King", "Prima capitală a Confederației", "Memorialul Național pentru Pace și Justiție"],
      en: ["Rosa Parks Museum", "Dexter Avenue King Memorial Baptist Church", "First capital of the Confederacy", "National Memorial for Peace and Justice"]
    }
  },
  {
    id: "annapolis-cities-v2",
    type: "state-capital",
    parent: "US-MD",
    coords: [-76.4922, 38.9784],
    name: { de: "Annapolis", hu: "Annapolis", ro: "Annapolis", en: "Annapolis" },
    description: {
      de: "Die Hauptstadt von Maryland, Heimat der United States Naval Academy.",
      hu: "Maryland fővárosa, az Egyesült Államok Tengerészeti Akadémiájának otthona.",
      ro: "Capitala statului Maryland, sediul Academiei Navale a Statelor Unite.",
      en: "The capital of Maryland, home to the United States Naval Academy."
    },
    facts: {
      de: ["United States Naval Academy", "Größte Konzentration von Gebäuden aus dem 18. Jahrhundert in den USA", "Maryland State House", "Historischer Hafen"],
      hu: ["Egyesült Államok Tengerészeti Akadémiája", "A 18. századi épületek legnagyobb koncentrációja az USA-ban", "Marylandi Állami Ház", "Történelmi kikötő"],
      ro: ["Academia Navală a Statelor Unite", "Cea mai mare concentrație de clădiri din secolul al XVIII-lea din SUA", "Casa de Stat din Maryland", "Port istoric"],
      en: ["United States Naval Academy", "Largest concentration of 18th-century buildings in the U.S.", "Maryland State House", "Historic seaport"]
    }
  },
  {
    id: "albany-ny-cities-v2",
    type: "state-capital",
    parent: "US-NY",
    coords: [-73.7562, 42.6526],
    name: { de: "Albany (New York)", hu: "Albany (New York)", ro: "Albany (New York)", en: "Albany, NY" },
    description: {
      de: "Die Hauptstadt des Bundesstaates New York mit einer langen Geschichte, die bis in die niederländische Kolonialzeit zurückreicht.",
      hu: "New York állam fővárosa, hosszú történelme a holland gyarmati időkig nyúlik vissza.",
      ro: "Capitala statului New York, cu o istorie lungă care datează din perioada colonială olandeză.",
      en: "The capital of New York State, with a long history dating back to the Dutch colonial era."
    },
    facts: {
      de: ["Empire State Plaza", "New York State Capitol", "New York State Museum", "Eine der ältesten durchgehend bewohnten Siedlungen der ursprünglichen 13 Kolonien"],
      hu: ["Empire State Plaza", "New York Állami Capitolium", "New York Állami Múzeum", "Az eredeti 13 gyarmat egyik legrégebbi, folyamatosan lakott települése"],
      ro: ["Empire State Plaza", "Capitoliul Statului New York", "Muzeul Statului New York", "Una dintre cele mai vechi așezări locuite continuu din cele 13 colonii originale"],
      en: ["Empire State Plaza", "New York State Capitol", "New York State Museum", "One of the oldest surviving settlements of the original 13 colonies"]
    }
  },
  {
    id: "harrisburg-cities-v2",
    type: "state-capital",
    parent: "US-PA",
    coords: [-76.8867, 40.2732],
    name: { de: "Harrisburg", hu: "Harrisburg", ro: "Harrisburg", en: "Harrisburg" },
    description: {
      de: "Die Hauptstadt von Pennsylvania am Susquehanna River.",
      hu: "Pennsylvania fővárosa a Susquehanna folyó partján.",
      ro: "Capitala statului Pennsylvania, pe râul Susquehanna.",
      en: "The capital of Pennsylvania, on the Susquehanna River."
    },
    facts: {
      de: ["Pennsylvania State Capitol", "National Civil War Museum", "State Museum of Pennsylvania", "Three Mile Island Kernkraftwerk in der Nähe"],
      hu: ["Pennsylvaniai Állami Capitolium", "Nemzeti Polgárháborús Múzeum", "Pennsylvaniai Állami Múzeum", "A Three Mile Island atomerőmű a közelben"],
      ro: ["Capitoliul Statului Pennsylvania", "Muzeul Național al Războiului Civil", "Muzeul de Stat din Pennsylvania", "Centrala nucleară Three Mile Island în apropiere"],
      en: ["Pennsylvania State Capitol", "National Civil War Museum", "State Museum of Pennsylvania", "Three Mile Island Nuclear Generating Station nearby"]
    }
  },
  {
    id: "trenton-cities-v2",
    type: "state-capital",
    parent: "US-NJ",
    coords: [-74.7429, 40.2171],
    name: { de: "Trenton", hu: "Trenton", ro: "Trenton", en: "Trenton" },
    description: {
      de: "Die Hauptstadt von New Jersey, bekannt für die entscheidende Schlacht von Trenton im Unabhängigkeitskrieg.",
      hu: "New Jersey fővárosa, a függetlenségi háború döntő trentoni csatájáról ismert.",
      ro: "Capitala statului New Jersey, cunoscută pentru Bătălia crucială de la Trenton din timpul Războiului de Independență.",
      en: "The capital of New Jersey, known for the pivotal Battle of Trenton in the Revolutionary War."
    },
    facts: {
      de: ["'Trenton Makes, The World Takes' Brückenschild", "Old Barracks Museum", "New Jersey State Museum", "New Jersey State House"],
      hu: ["'Trenton Makes, The World Takes' híd felirat", "Old Barracks Múzeum", "New Jersey Állami Múzeum", "New Jersey Állami Ház"],
      ro: ["Semnul de pe pod 'Trenton Makes, The World Takes'", "Muzeul Old Barracks", "Muzeul de Stat din New Jersey", "Casa de Stat din New Jersey"],
      en: ["'Trenton Makes, The World Takes' bridge sign", "Old Barracks Museum", "New Jersey State Museum", "New Jersey State House"]
    }
  },
  {
    id: "dover-cities-v2",
    type: "state-capital",
    parent: "US-DE",
    coords: [-75.5244, 39.1582],
    name: { de: "Dover", hu: "Dover", ro: "Dover", en: "Dover" },
    description: {
      de: "Die Hauptstadt von Delaware, dem 'ersten Staat', der die US-Verfassung ratifiziert hat.",
      hu: "Delaware fővárosa, az 'első állam', amely ratifikálta az amerikai alkotmányt.",
      ro: "Capitala statului Delaware, 'Primul Stat' care a ratificat Constituția SUA.",
      en: "The capital of Delaware, the 'First State' to ratify the U.S. Constitution."
    },
    facts: {
      de: ["Dover International Speedway, eine NASCAR-Strecke", "Air Mobility Command Museum", "First State Heritage Park", "Delaware State Capitol"],
      hu: ["Dover International Speedway, egy NASCAR pálya", "Légimozgékonysági Parancsnokság Múzeuma", "First State Örökségi Park", "Delaware-i Állami Capitolium"],
      ro: ["Dover International Speedway, o pistă NASCAR", "Muzeul Comandamentului Mobilității Aeriene", "Parcul Patrimoniului First State", "Capitoliul Statului Delaware"],
      en: ["Dover International Speedway, a NASCAR track", "Air Mobility Command Museum", "First State Heritage Park", "Delaware State Capitol"]
    }
  },
  {
    id: "augusta-me-cities-v2",
    type: "state-capital",
    parent: "US-ME",
    coords: [-69.7794, 44.3106],
    name: { de: "Augusta (Maine)", hu: "Augusta (Maine)", ro: "Augusta (Maine)", en: "Augusta, ME" },
    description: {
      de: "Die Hauptstadt von Maine am Kennebec River.",
      hu: "Maine fővárosa a Kennebec folyó partján.",
      ro: "Capitala statului Maine, pe râul Kennebec.",
      en: "The capital of Maine, located on the Kennebec River."
    },
    facts: {
      de: ["Maine State Museum", "Maine State House", "Old Fort Western, eine ehemalige britische Kolonialfestung", "Eine der kleinsten Hauptstädte der USA nach Einwohnerzahl"],
      hu: ["Maine Állami Múzeum", "Maine Állami Ház", "Old Fort Western, egykori brit gyarmati erőd", "Az USA egyik legkisebb lakosságú fővárosa"],
      ro: ["Muzeul de Stat din Maine", "Casa de Stat din Maine", "Vechiul Fort Western, o fostă fortăreață colonială britanică", "Una dintre cele mai mici capitale de stat din SUA ca populație"],
      en: ["Maine State Museum", "Maine State House", "Old Fort Western, a former British colonial outpost", "One of the smallest U.S. state capitals by population"]
    }
  },
  {
    id: "concord-nh-cities-v2",
    type: "state-capital",
    parent: "US-NH",
    coords: [-71.5376, 43.2081],
    name: { de: "Concord (New Hampshire)", hu: "Concord (New Hampshire)", ro: "Concord (New Hampshire)", en: "Concord, NH" },
    description: {
      de: "Die Hauptstadt von New Hampshire, bekannt für ihr Kapitolgebäude mit goldener Kuppel.",
      hu: "New Hampshire fővárosa, aranykupolás capitoliumáról ismert.",
      ro: "Capitala statului New Hampshire, cunoscută pentru clădirea sa de capitoliu cu dom auriu.",
      en: "The capital of New Hampshire, known for its gold-domed State House."
    },
    facts: {
      de: ["New Hampshire State House", "McAuliffe-Shepard Discovery Center", "Größtes Kapitolgebäude der USA, in dem die Legislative noch in ihren ursprünglichen Kammern tagt", "Historische Innenstadt"],
      hu: ["New Hampshire Állami Ház", "McAuliffe-Shepard Felfedező Központ", "Az USA legnagyobb capitoliuma, ahol a törvényhozás még mindig az eredeti üléstermeiben ülésezik", "Történelmi belváros"],
      ro: ["Casa de Stat din New Hampshire", "Centrul de Descoperiri McAuliffe-Shepard", "Cel mai mare capitoliu de stat din SUA în care legislativul se întrunește încă în camerele sale originale", "Centru istoric"],
      en: ["New Hampshire State House", "McAuliffe-Shepard Discovery Center", "Largest state capitol in the U.S. in which the legislature still meets in its original chambers", "Historic downtown"]
    }
  },
  {
    id: "montpelier-cities-v2",
    type: "state-capital",
    parent: "US-VT",
    coords: [-72.5754, 44.2601],
    name: { de: "Montpelier", hu: "Montpelier", ro: "Montpelier", en: "Montpelier" },
    description: {
      de: "Die kleinste Hauptstadt eines Bundesstaates in den USA nach Einwohnerzahl.",
      hu: "Az USA legkisebb lakosságú állami fővárosa.",
      ro: "Cea mai mică capitală de stat din SUA ca populație.",
      en: "The smallest state capital in the United States by population."
    },
    facts: {
      de: ["Vermont State House", "Vermont History Museum", "Kein McDonald's Restaurant", "Umgeben von Hügeln und Wäldern"],
      hu: ["Vermonti Állami Ház", "Vermonti Történeti Múzeum", "Nincs McDonald's étterem", "Hegyekkel és erdőkkel körülvéve"],
      ro: ["Casa de Stat din Vermont", "Muzeul de Istorie din Vermont", "Nu are niciun restaurant McDonald's", "Înconjurat de dealuri și păduri"],
      en: ["Vermont State House", "Vermont History Museum", "Does not have a McDonald's restaurant", "Surrounded by hills and forests"]
    }
  },
  {
    id: "helena-cities-v2",
    type: "state-capital",
    parent: "US-MT",
    coords: [-112.0391, 46.5891],
    name: { de: "Helena", hu: "Helena", ro: "Helena", en: "Helena" },
    description: {
      de: "Die Hauptstadt von Montana, gegründet nach Goldfunden im 19. Jahrhundert.",
      hu: "Montana fővárosa, a 19. századi aranyleletek után alapították.",
      ro: "Capitala statului Montana, fondată după descoperirile de aur din secolul al XIX-lea.",
      en: "The capital of Montana, founded after gold discoveries in the 19th century."
    },
    facts: {
      de: ["Montana State Capitol", "Reeder's Alley, ein historisches Viertel", "Gates of the Mountains, eine Flussschlucht", "In der Nähe der kontinentalen Wasserscheide"],
      hu: ["Montanai Állami Capitolium", "Reeder's Alley, egy történelmi negyed", "Gates of the Mountains, egy folyókanyon", "A kontinentális vízválasztó közelében"],
      ro: ["Capitoliul Statului Montana", "Aleea Reeder, un cartier istoric", "Porțile Munților, un canion fluvial", "Aproape de Diviziunea Continentală"],
      en: ["Montana State Capitol", "Reeder's Alley, a historic district", "Gates of the Mountains, a river canyon", "Near the Continental Divide"]
    }
  },
  {
    id: "cheyenne-cities-v2",
    type: "state-capital",
    parent: "US-WY",
    coords: [-104.8202, 41.1399],
    name: { de: "Cheyenne", hu: "Cheyenne", ro: "Cheyenne", en: "Cheyenne" },
    description: {
      de: "Die Hauptstadt von Wyoming, bekannt für das Cheyenne Frontier Days, das größte Outdoor-Rodeo der Welt.",
      hu: "Wyoming fővárosa, a Cheyenne Frontier Days-ről, a világ legnagyobb szabadtéri rodeójáról ismert.",
      ro: "Capitala statului Wyoming, cunoscută pentru Cheyenne Frontier Days, cel mai mare rodeo în aer liber din lume.",
      en: "The capital of Wyoming, known for the Cheyenne Frontier Days, the world's largest outdoor rodeo."
    },
    facts: {
      de: ["Cheyenne Frontier Days Old West Museum", "Wyoming State Capitol", "Historischer Eisenbahnknotenpunkt", "Big Boy Dampflokomotive"],
      hu: ["Cheyenne Frontier Days Old West Múzeum", "Wyoming Állami Capitolium", "Történelmi vasúti csomópont", "Big Boy gőzmozdony"],
      ro: ["Muzeul Vestului Sălbatic Cheyenne Frontier Days", "Capitoliul Statului Wyoming", "Nod feroviar istoric", "Locomotiva cu aburi Big Boy"],
      en: ["Cheyenne Frontier Days Old West Museum", "Wyoming State Capitol", "Historic railroad depot", "Big Boy steam locomotive"]
    },
    descriptionAdvanced: {
      de: "Cheyenne ist die Hauptstadt von Wyoming und liegt auf einer Höhe von 1848 Metern in den High Plains. Die Stadt wurde 1867 als Knotenpunkt der Union Pacific Railroad gegründet und bewahrt bis heute ihr reiches Erbe als Wild-West-Stadt. Geografie K8 – Hochlandsteppen und kontinentale Klimazonen.",
      hu: "Cheyenne Wyoming fővárosa, 1848 méteres tengerszint feletti magasságban fekszik a High Plains régióban. A várost 1867-ben alapították az Union Pacific vasútvonal csomópontjaként, és a mai napig megőrizte gazdag vadnyugati örökségét. Földrajz K8 – Magasföldi sztyeppék és kontinentális éghajlati övek.",
      ro: "Cheyenne este capitala statului Wyoming și este situat la o altitudine de 1848 de metri în High Plains. Orașul a fost fondat în 1867 ca un nod feroviar al Union Pacific Railroad și își păstrează până astăzi moștenirea bogată de oraș din Vestul Sălbatic. Geografie K8 – Stepe de podiș și zone climatice continentale.",
      en: "Cheyenne is the capital of Wyoming, situated at an elevation of 1,848 meters on the High Plains. Founded in 1867 as a hub for the Union Pacific Railroad, the city retains its rich heritage as a Wild West town. Geography K8 – High plains and continental climate zones."
    },
    factsAdvanced: {
      de: ["Gegründet am 4. Juli 1867", "Höhe: 1848 m ü. M.", "Frontier Days Rodeo-Festival", "Strategischer Standort nahe der Interstates 80 und 25", "Bekannt für seine starken Winde", "Staatspalast im Beaux-Arts-Stil"],
      hu: ["1867. július 4-én alapították", "Tengerszint feletti magasság: 1848 m", "Frontier Days rodeófesztivál", "Stratégiai helyszín a 80-as és 25-ös autópályák közelében", "Erős szeleiről híres", "Beaux-Arts stílusú állami capitolium"],
      ro: ["Fondat la 4 iulie 1867", "Altitudine: 1848 m", "Festivalul de rodeo Frontier Days", "Locație strategică lângă autostrăzile Interstate 80 și 25", "Cunoscut pentru vânturile sale puternice", "Capitoliu de stat în stil Beaux-Arts"],
      en: ["Founded on July 4, 1867", "Elevation: 1,848 m", "Frontier Days rodeo festival", "Strategic location near Interstates 80 and 25", "Known for high winds", "Beaux-Arts style state capitol"]
    }
  },
  {
    id: "bismarck-cities-v2",
    type: "state-capital",
    parent: "US-ND",
    coords: [-100.7837, 46.8083],
    name: { de: "Bismarck", hu: "Bismarck", ro: "Bismarck", en: "Bismarck" },
    description: {
      de: "Die Hauptstadt von North Dakota am Missouri River.",
      hu: "Észak-Dakota fővárosa a Missouri folyó partján.",
      ro: "Capitala statului Dakota de Nord, pe râul Missouri.",
      en: "The capital of North Dakota, located on the Missouri River."
    },
    facts: {
      de: ["North Dakota State Capitol, das höchste Gebäude des Bundesstaates", "North Dakota Heritage Center & State Museum", "Lewis & Clark Riverboat", "Fort Abraham Lincoln State Park in der Nähe"],
      hu: ["Észak-Dakotai Állami Capitolium, az állam legmagasabb épülete", "Észak-Dakotai Örökségi Központ és Állami Múzeum", "Lewis & Clark folyami hajó", "Fort Abraham Lincoln Állami Park a közelben"],
      ro: ["Capitoliul Statului Dakota de Nord, cea mai înaltă clădire din stat", "Centrul Patrimoniului și Muzeul de Stat din Dakota de Nord", "Barca fluvială Lewis & Clark", "Parcul Statal Fort Abraham Lincoln în apropiere"],
      en: ["North Dakota State Capitol, the tallest building in the state", "North Dakota Heritage Center & State Museum", "Lewis & Clark Riverboat", "Fort Abraham Lincoln State Park nearby"]
    }
  },
  {
    id: "pierre-cities-v2",
    type: "state-capital",
    parent: "US-SD",
    coords: [-100.3510, 44.3683],
    name: { de: "Pierre", hu: "Pierre", ro: "Pierre", en: "Pierre" },
    description: {
      de: "Die Hauptstadt von South Dakota, eine der kleinsten Hauptstädte der USA.",
      hu: "Dél-Dakota fővárosa, az USA egyik legkisebb fővárosa.",
      ro: "Capitala statului Dakota de Sud, una dintre cele mai mici capitale de stat din SUA.",
      en: "The capital of South Dakota, one of the smallest U.S. state capitals."
    },
    facts: {
      de: ["South Dakota State Capitol", "South Dakota Discovery Center", "Am Missouri River gelegen", "Geringe Bevölkerungsdichte"],
      hu: ["Dél-Dakotai Állami Capitolium", "Dél-Dakotai Felfedező Központ", "A Missouri folyó mentén található", "Alacsony népsűrűség"],
      ro: ["Capitoliul Statului Dakota de Sud", "Centrul de Descoperiri din Dakota de Sud", "Situat pe râul Missouri", "Densitate scăzută a populației"],
      en: ["South Dakota State Capitol", "South Dakota Discovery Center", "Located on the Missouri River", "Low population density"]
    }
  },
  {
    id: "springfield-il-cities-v2",
    type: "state-capital",
    parent: "US-IL",
    coords: [-89.6501, 39.7817],
    name: { de: "Springfield (Illinois)", hu: "Springfield (Illinois)", ro: "Springfield (Illinois)", en: "Springfield, IL" },
    description: {
      de: "Die Hauptstadt von Illinois, bekannt als Heimat von Abraham Lincoln.",
      hu: "Illinois fővárosa, Abraham Lincoln otthonaként ismert.",
      ro: "Capitala statului Illinois, cunoscută ca fiind casa lui Abraham Lincoln.",
      en: "The capital of Illinois, famous for being the home of Abraham Lincoln."
    },
    facts: {
      de: ["Abraham Lincoln Presidential Library and Museum", "Lincoln Home National Historic Site", "Lincoln's Tomb", "Illinois State Capitol"],
      hu: ["Abraham Lincoln Elnöki Könyvtár és Múzeum", "Lincoln Otthona Nemzeti Történelmi Helyszín", "Lincoln sírja", "Illinois-i Állami Capitolium"],
      ro: ["Biblioteca și Muzeul Prezidențial Abraham Lincoln", "Situl Istoric Național Casa lui Lincoln", "Mormântul lui Lincoln", "Capitoliul Statului Illinois"],
      en: ["Abraham Lincoln Presidential Library and Museum", "Lincoln Home National Historic Site", "Lincoln's Tomb", "Illinois State Capitol"]
    }
  },
  {
    id: "jefferson-city-cities-v2",
    type: "state-capital",
    parent: "US-MO",
    coords: [-92.1735, 38.5767],
    name: { de: "Jefferson City", hu: "Jefferson City", ro: "Jefferson City", en: "Jefferson City" },
    description: {
      de: "Die Hauptstadt von Missouri, benannt nach Thomas Jefferson.",
      hu: "Missouri fővárosa, Thomas Jeffersonról nevezték el.",
      ro: "Capitala statului Missouri, numită după Thomas Jefferson.",
      en: "The capital of Missouri, named for Thomas Jefferson."
    },
    facts: {
      de: ["Missouri State Capitol", "Missouri State Penitentiary Tours", "Am Missouri River gelegen", "Gegründet, um als Hauptstadt zu dienen"],
      hu: ["Missouri Állami Capitolium", "Missouri Állami Fegyház túrák", "A Missouri folyó mentén található", "Fővárosként alapították"],
      ro: ["Capitoliul Statului Missouri", "Tururile Penitenciarului de Stat din Missouri", "Situat pe râul Missouri", "Fondat pentru a servi drept capitală"],
      en: ["Missouri State Capitol", "Missouri State Penitentiary tours", "Located on the Missouri River", "Founded specifically to serve as the state capital"]
    }
  },
  {
    id: "frankfort-cities-v2",
    type: "state-capital",
    parent: "US-KY",
    coords: [-84.8734, 38.2009],
    name: { de: "Frankfort", hu: "Frankfort", ro: "Frankfort", en: "Frankfort" },
    description: {
      de: "Die Hauptstadt von Kentucky, eine kleine Stadt am Kentucky River.",
      hu: "Kentucky fővárosa, egy kisváros a Kentucky folyó partján.",
      ro: "Capitala statului Kentucky, un mic oraș pe râul Kentucky.",
      en: "The capital of Kentucky, a small city on the Kentucky River."
    },
    facts: {
      de: ["Kentucky State Capitol", "Grab von Daniel Boone", "Liberty Hall Historic Site", "Zentrum der Bourbon-Herstellung"],
      hu: ["Kentuckyi Állami Capitolium", "Daniel Boone sírja", "Liberty Hall Történelmi Helyszín", "A bourbon gyártás központja"],
      ro: ["Capitoliul Statului Kentucky", "Mormântul lui Daniel Boone", "Situl Istoric Liberty Hall", "Centru de producție a bourbonului"],
      en: ["Kentucky State Capitol", "Grave of Daniel Boone", "Liberty Hall Historic Site", "Center of bourbon production"]
    }
  },
  {
    id: "lansing-cities-v2",
    type: "state-capital",
    parent: "US-MI",
    coords: [-84.5555, 42.7325],
    name: { de: "Lansing", hu: "Lansing", ro: "Lansing", en: "Lansing" },
    description: {
      de: "Die Hauptstadt von Michigan, bekannt für ihre Rolle in der Automobilindustrie und als Regierungssitz.",
      hu: "Michigan fővárosa, az autóiparban betöltött szerepéről és kormányzati székhelyként ismert.",
      ro: "Capitala statului Michigan, cunoscută pentru rolul său în industria auto și ca sediu al guvernului.",
      en: "The capital of Michigan, known for its role in the auto industry and as a government seat."
    },
    facts: {
      de: ["Michigan State Capitol", "R.E. Olds Transportation Museum", "Michigan State University in der Nähe (East Lansing)", "Zentrum für Bildung und Regierung"],
      hu: ["Michigani Állami Capitolium", "R.E. Olds Közlekedési Múzeum", "Michigani Állami Egyetem a közelben (East Lansing)", "Oktatási és kormányzati központ"],
      ro: ["Capitoliul Statului Michigan", "Muzeul Transporturilor R.E. Olds", "Universitatea de Stat din Michigan în apropiere (East Lansing)", "Centru pentru educație și guvern"],
      en: ["Michigan State Capitol", "R.E. Olds Transportation Museum", "Michigan State University nearby (East Lansing)", "Center for education and government"]
    }
  },
  {
    id: "madison-wi-cities-v2",
    type: "state-capital",
    parent: "US-WI",
    coords: [-89.4012, 43.0731],
    name: { de: "Madison (Wisconsin)", hu: "Madison (Wisconsin)", ro: "Madison (Wisconsin)", en: "Madison, WI" },
    description: {
      de: "Die Hauptstadt von Wisconsin, auf einer Landenge zwischen zwei Seen gebaut.",
      hu: "Wisconsin fővárosa, egy földszorosra épült két tó között.",
      ro: "Capitala statului Wisconsin, construită pe un istm între două lacuri.",
      en: "The capital of Wisconsin, built on an isthmus between two lakes."
    },
    facts: {
      de: ["University of Wisconsin-Madison", "Wisconsin State Capitol", "Dane County Farmers' Market, einer der größten in den USA", "Hohe Lebensqualität und fahrradfreundlich"],
      hu: ["Wisconsini Egyetem-Madison", "Wisconsini Állami Capitolium", "Dane megyei termelői piac, az egyik legnagyobb az USA-ban", "Magas életminőség és kerékpárbarát"],
      ro: ["Universitatea din Wisconsin-Madison", "Capitoliul Statului Wisconsin", "Piața Fermierilor din Comitatul Dane, una dintre cele mai mari din SUA", "Calitate ridicată a vieții și prietenoasă cu bicicletele"],
      en: ["University of Wisconsin-Madison", "Wisconsin State Capitol", "Dane County Farmers' Market, one of the largest in the U.S.", "High quality of life and bike-friendly"]
    }
  },
  {
    id: "tallahassee-cities-v2",
    type: "state-capital",
    parent: "US-FL",
    coords: [-84.2807, 30.4383],
    name: { de: "Tallahassee", hu: "Tallahassee", ro: "Tallahassee", en: "Tallahassee" },
    description: {
      de: "Die Hauptstadt von Florida mit einer hügeligen Landschaft und mit spanischem Moos bewachsenen Eichen.",
      hu: "Florida fővárosa, dombos tájjal és spanyol mohával borított tölgyfákkal.",
      ro: "Capitala Floridei, cu un peisaj deluros și stejari acoperiți cu mușchi spaniol.",
      en: "The capital of Florida, featuring a hilly landscape and Spanish moss-draped oak trees."
    },
    facts: {
      de: ["Florida State University", "Florida A&M University", "Mission San Luis de Apalachee", "Canopy Roads, malerische, von Bäumen gesäumte Straßen"],
      hu: ["Floridai Állami Egyetem", "Floridai A&M Egyetem", "Mission San Luis de Apalachee", "Canopy Roads, festői, fákkal szegélyezett utak"],
      ro: ["Universitatea de Stat din Florida", "Universitatea Florida A&M", "Misiunea San Luis de Apalachee", "Drumurile Canopy, drumuri pitorești mărginite de copaci"],
      en: ["Florida State University", "Florida A&M University", "Mission San Luis de Apalachee", "Canopy roads, scenic tree-lined streets"]
    }
  },
  {
    id: "charleston-wv-cities-v2",
    type: "state-capital",
    parent: "US-WV",
    coords: [-81.6326, 38.3498],
    name: { de: "Charleston (West Virginia)", hu: "Charleston (Nyugat-Virginia)", ro: "Charleston (Virginia de Vest)", en: "Charleston, WV" },
    description: {
      de: "Die Hauptstadt von West Virginia am Zusammenfluss von Elk und Kanawha River.",
      hu: "Nyugat-Virginia fővárosa az Elk és a Kanawha folyók összefolyásánál.",
      ro: "Capitala statului Virginia de Vest, la confluența râurilor Elk și Kanawha.",
      en: "The capital of West Virginia, at the confluence of the Elk and Kanawha rivers."
    },
    facts: {
      de: ["West Virginia State Capitol mit goldener Kuppel", "West Virginia State Museum", "Clay Center for the Arts and Sciences", "Historische East End"],
      hu: ["Nyugat-Virginiai Állami Capitolium aranykupolával", "Nyugat-Virginiai Állami Múzeum", "Clay Művészeti és Tudományos Központ", "Történelmi East End"],
      ro: ["Capitoliul Statului Virginia de Vest cu dom auriu", "Muzeul de Stat din Virginia de Vest", "Centrul Clay pentru Arte și Științe", "Cartierul istoric East End"],
      en: ["West Virginia State Capitol with a gold dome", "West Virginia State Museum", "Clay Center for the Arts and Sciences", "Historic East End"]
    }
  },
  {
    id: "salem-or-cities-v2",
    type: "state-capital",
    parent: "US-OR",
    coords: [-123.0351, 44.9429],
    name: { de: "Salem (Oregon)", hu: "Salem (Oregon)", ro: "Salem (Oregon)", en: "Salem, OR" },
    description: {
      de: "Die Hauptstadt von Oregon im Willamette Valley, umgeben von Weinbergen und Ackerland.",
      hu: "Oregon fővárosa a Willamette-völgyben, szőlőültetvényekkel és termőföldekkel körülvéve.",
      ro: "Capitala statului Oregon, în Valea Willamette, înconjurată de podgorii și terenuri agricole.",
      en: "The capital of Oregon, in the Willamette Valley, surrounded by vineyards and farmland."
    },
    facts: {
      de: ["Oregon State Capitol", "Willamette University", "Enchanted Forest, ein Themenpark", "In der Nähe der Oregon-Weinanbaugebiete"],
      hu: ["Oregoni Állami Capitolium", "Willamette Egyetem", "Enchanted Forest, egy vidámpark", "Az oregoni borvidékek közelében"],
      ro: ["Capitoliul Statului Oregon", "Universitatea Willamette", "Pădurea Fermecată, un parc tematic", "Aproape de regiunile viticole din Oregon"],
      en: ["Oregon State Capitol", "Willamette University", "Enchanted Forest, a theme park", "Near Oregon's wine country"]
    }
  },
  {
    id: "olympia-cities-v2",
    type: "state-capital",
    parent: "US-WA",
    coords: [-122.9007, 47.0379],
    name: { de: "Olympia", hu: "Olympia", ro: "Olympia", en: "Olympia" },
    description: {
      de: "Die Hauptstadt von Washington am südlichen Ende des Puget Sound.",
      hu: "Washington fővárosa a Puget Sound déli végén.",
      ro: "Capitala statului Washington, la capătul sudic al Puget Sound.",
      en: "The capital of Washington, at the southern end of Puget Sound."
    },
    facts: {
      de: ["Washington State Capitol", "Nisqually National Wildlife Refuge in der Nähe", "Percival Landing Park am Wasser", "Kleine, aber lebendige Kunstszene"],
      hu: ["Washingtoni Állami Capitolium", "Nisqually Nemzeti Vadvédelmi Terület a közelben", "Percival Landing Park a vízparton", "Kicsi, de élénk művészeti élet"],
      ro: ["Capitoliul Statului Washington", "Refugiul Național de Faună Sălbatică Nisqually în apropiere", "Parcul Percival Landing pe malul apei", "Scenă artistică mică, dar vibrantă"],
      en: ["Washington State Capitol", "Nisqually National Wildlife Refuge nearby", "Percival Landing Park on the waterfront", "Small but vibrant arts scene"]
    }
  },
  {
    id: "carson-city-cities-v2",
    type: "state-capital",
    parent: "US-NV",
    coords: [-119.7674, 39.1638],
    name: { de: "Carson City", hu: "Carson City", ro: "Carson City", en: "Carson City" },
    description: {
      de: "Die Hauptstadt von Nevada, eine unabhängige Stadt in der Nähe des Lake Tahoe.",
      hu: "Nevada fővárosa, független város a Tahoe-tó közelében.",
      ro: "Capitala statului Nevada, un oraș independent lângă Lacul Tahoe.",
      en: "The capital of Nevada, an independent city near Lake Tahoe."
    },
    facts: {
      de: ["Nevada State Capitol", "Nevada State Railroad Museum", "In der Nähe der historischen Stadt Virginia City", "Tor zur Sierra Nevada"],
      hu: ["Nevadai Állami Capitolium", "Nevadai Állami Vasúti Múzeum", "A történelmi Virginia City közelében", "Kapu a Sierra Nevadához"],
      ro: ["Capitoliul Statului Nevada", "Muzeul Căilor Ferate de Stat din Nevada", "Aproape de orașul istoric Virginia City", "Poarta de acces către Sierra Nevada"],
      en: ["Nevada State Capitol", "Nevada State Railroad Museum", "Near the historic town of Virginia City", "Gateway to the Sierra Nevada"]
    }
  },
  {
    id: "lincoln-ne-cities-v2",
    type: "state-capital",
    parent: "US-NE",
    coords: [-96.6851, 40.8136],
    name: { de: "Lincoln (Nebraska)", hu: "Lincoln (Nebraska)", ro: "Lincoln (Nebraska)", en: "Lincoln, NE" },
    description: {
      de: "Die Hauptstadt von Nebraska und Sitz der University of Nebraska.",
      hu: "Nebraska fővárosa és a Nebraskai Egyetem székhelye.",
      ro: "Capitala statului Nebraska și sediul Universității din Nebraska.",
      en: "The capital of Nebraska and home to the University of Nebraska."
    },
    facts: {
      de: ["Nebraska State Capitol, ein einzigartiger Wolkenkratzer-Turm", "University of Nebraska-Lincoln", "Sunken Gardens", "Museum of American Speed"],
      hu: ["Nebraskai Állami Capitolium, egy egyedi felhőkarcoló-torony", "Nebraska-Lincolni Egyetem", "Süllyesztett kertek", "Az Amerikai Sebesség Múzeuma"],
      ro: ["Capitoliul Statului Nebraska, un turn unic de zgârie-nori", "Universitatea din Nebraska-Lincoln", "Grădinile Scufundate", "Muzeul Vitezei Americane"],
      en: ["Nebraska State Capitol, a unique skyscraper tower", "University of Nebraska-Lincoln", "Sunken Gardens", "Museum of American Speed"]
    }
  }
]
