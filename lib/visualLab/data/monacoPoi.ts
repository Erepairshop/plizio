import type { POI } from "./poi";

export const monacoCountry: POI = {
  id: "country-monaco",
  type: "country",
  parent: "europe",
  coords: [7.4246, 43.7384],
  name: {
    de: "Monaco",
    hu: "Monaco",
    ro: "Monaco",
    en: "Monaco"
  },
  description: {
    de: "Monaco ist der zweitkleinste Staat der Welt, bekannt für Luxus, das Casino von Monte-Carlo und den Formel-1-Grand-Prix.",
    hu: "Monaco a világ második legkisebb országa, amely luxusáról, a Monte-Carlo Casinóról és a Forma-1-es nagydíjról ismert.",
    ro: "Monaco este a doua cea mai mică țară din lume, cunoscută pentru lux, Cazinoul din Monte-Carlo și Marele Premiu de Formula 1.",
    en: "Monaco is the world's second-smallest country, known for luxury, the Monte-Carlo Casino, and the Formula 1 Grand Prix."
  },
  facts: {
    de: [
      "Monaco ist flächenmäßig der zweitkleinste Staat der Welt nach dem Vatikanstadt.",
      "Es ist das am dichtesten besiedelte Land der Erde.",
      "Monaco hat keine Einkommensteuer.",
      "Der Fürstenpalast wird seit dem 13. Jahrhundert von der Familie Grimaldi bewohnt.",
      "Das Land ist in vier traditionelle Stadtbezirke unterteilt."
    ],
    hu: [
      "Monaco a világ második legkisebb országa a Vatikán után.",
      "Ez a világ legsűrűbben lakott országa.",
      "Monacóban nincs jövedelemadó.",
      "A hercegi palotát a 13. század óta a Grimaldi-család lakja.",
      "Az ország négy hagyományos negyedre oszlik."
    ],
    ro: [
      "Monaco este a doua cea mai mică țară din lume ca suprafață, după Vatican.",
      "Este cea mai dens populată țară de pe Pământ.",
      "Monaco nu are impozit pe venit.",
      "Palatul Princiar este locuit de familia Grimaldi încă din secolul al XIII-lea.",
      "Țara este împărțită în patru cartiere tradiționale."
    ],
    en: [
      "Monaco is the world's second-smallest country by area, after Vatican City.",
      "It is the most densely populated country on Earth.",
      "Monaco has no income tax.",
      "The Prince's Palace has been occupied by the Grimaldi family since the 13th century.",
      "The country is divided into four traditional quarters."
    ]
  },
  image: "/geo-images/monaco/country-monaco.webp"
};

export const monacoDistricts: POI[] = [
  {
    id: "district-monaco-ville",
    type: "city",
    parent: "country-monaco",
    coords: [7.4244, 43.7308],
    name: { de: "Monaco-Ville", hu: "Monaco-Ville", ro: "Monaco-Ville", en: "Monaco-Ville" },
    description: {
      de: "Die Altstadt von Monaco, auch 'Der Fels' genannt, beherbergt den Fürstenpalast und die Kathedrale.",
      hu: "Monaco óvárosa, más néven 'A Szikla', itt található a hercegi palota és a katedrális.",
      ro: "Orașul vechi din Monaco, numit și 'Stânca', găzduiește Palatul Princiar și Catedrala.",
      en: "Monaco's old town, also known as 'The Rock', home to the Prince's Palace and the Cathedral."
    },
    facts: {
      de: ["Čltester Teil von Monaco", "Sitz der Regierung", "Blick auf Port Hercules", "Autofreie mittelalterliche Gassen"],
      hu: ["Monaco legrégebbi része", "A kormány székhelye", "Kilátás a Port Herculesre", "Autómentes középkori utcák"],
      ro: ["Cea mai veche parte a Monaco", "Sediul guvernului", "Vedere spre Port Hercules", "Străzi medievale pietonale"],
      en: ["Oldest part of Monaco", "Seat of the government", "Overlooks Port Hercules", "Pedestrianized medieval streets"]
    },
    descriptionAdvanced: {
      de: "Monaco-Ville, auch bekannt als „Le Rocher“, ist der älteste Stadtteil des Fürstentums. Er liegt auf einer hohen Klippe über dem Mittelmeer und beherbergt den Fürstenpalast sowie die Kathedrale von Monaco. Die engen mittelalterlichen Gassen sind fast vollständig Fußgängerzone und bewahren eine historische Atmosphäre. Hier befinden sich auch bedeutende Regierungsgebäude und Museen.",
      hu: "Monaco-Ville, más néven „Le Rocher” (A szikla), a hercegség legrégebbi negyede. Egy meredek sziklafalon fekszik a Földközi-tenger felett, itt található a Hercegi Palota és a monacói katedrális. A szűk, középkori utcák szinte teljesen autómentesek, megőrizve a történelmi hangulatot. Ebben a negyedben találhatók a fontosabb kormányzati épületek és múzeumok is.",
      ro: "Monaco-Ville, cunoscut și sub numele de „Le Rocher”, este cel mai vechi cartier al principatului. Este situat pe o stâncă înaltă deasupra Mediteranei și găzduiește Palatul Princiar și Catedrala din Monaco. Străzile medievale înguste sunt aproape în întregime pietonale, păstrând o atmosferă istorică. Aici se află, de asemenea, importante clădiri guvernamentale și muzee.",
      en: "Monaco-Ville, also known as 'Le Rocher', is the oldest district of the principality. It is situated on a high cliff overlooking the Mediterranean and houses the Prince's Palace and the Monaco Cathedral. The narrow medieval streets are almost entirely pedestrianized, preserving a historical atmosphere. Significant government buildings and museums are also located here.",
    },
    factsAdvanced: {
      de: ["Der Stadtteil liegt auf einem 62 Meter hohen Felsen.", "Beherbergt den Palast der Grimaldi-Familie seit dem 13. Jahrhundert.", "Die Einwohnerzahl liegt bei etwa 1.000 Personen.", "Enthält das Ozeanographische Museum an der Klippenkante.", "Die Kathedrale St. Nikolaus wurde 1875 im neoromanischen Stil erbaut.", "Wird offiziell als administrativer Stadtbezirk (Quartier) geführt."],
      hu: ["A városnegyed egy 62 méter magas sziklán fekszik.", "A 13. század óta itt található a Grimaldi-család palotája.", "Lakossága körülbelül 1000 főre tehető.", "Itt található az Óceánográfiai Múzeum a szikla szélén.", "A Szent Miklós-katedrális 1875-ben épült neoromán stílusban.", "Hivatalosan Monaco egyik közigazgatási körzete (Quartier)."],
      ro: ["Cartierul este situat pe o stâncă înaltă de 62 de metri.", "Găzduiește palatul familiei Grimaldi încă din secolul al XIII-lea.", "Populația cartierului este de aproximativ 1.000 de persoane.", "Include Muzeul Oceanografic, amplasat pe marginea stâncii.", "Catedrala Sfântul Nicolae a fost construită în 1875 în stil neoromanic.", "Este administrat oficial ca un district urban (Quartier)."],
      en: ["The district is situated on a 62-meter high rock formation.", "Home to the Palace of the Grimaldi family since the 13th century.", "The population is approximately 1,000 residents.", "Features the Oceanographic Museum perched on the cliffside.", "Saint Nicholas Cathedral was built in 1875 in Neo-Romanesque style.", "Is officially designated as an administrative ward (Quartier)."],
    },
  },
  {
    id: "district-monte-carlo",
    type: "city",
    parent: "country-monaco",
    coords: [7.4275, 43.7401],
    name: { de: "Monte-Carlo", hu: "Monte-Carlo", ro: "Monte-Carlo", en: "Monte-Carlo" },
    description: {
      de: "Der berühmteste Stadtteil Monacos, bekannt für das Casino, Luxushotels und den Grand Prix.",
      hu: "Monaco leghíresebb negyede, amely a kaszinóról, a luxusszállodákról és a nagydíjról ismert.",
      ro: "Cel mai faimos cartier din Monaco, cunoscut pentru cazinou, hoteluri de lux și Marele Premiu.",
      en: "The most famous district of Monaco, known for the casino, luxury hotels, and the Grand Prix."
    },
    facts: {
      de: ["Gegründet 1866", "Zentrum des Luxustourismus", "Beherbergt das berühmte Casino", "Teil der Formel-1-Rennstrecke"],
      hu: ["1866-ban alapították", "A luxusturizmus központja", "Itt található a híres kaszinó", "A Forma-1-es pálya része"],
      ro: ["Fondat în 1866", "Centrul turismului de lux", "Găzduiește celebrul cazinou", "Parte a circuitului de Formula 1"],
      en: ["Founded in 1866", "Center of luxury tourism", "Home to the famous Casino", "Part of the Formula 1 circuit"]
    }, image: "/poi-images/district-monte-carlo.webp",
    descriptionAdvanced: {
      de: "Monte-Carlo ist der bekannteste Stadtbezirk von Monaco, berühmt für seinen Luxus und das Casino. Er wurde im 19. Jahrhundert gegründet und entwickelte sich schnell zu einem Zentrum des internationalen Jetsets. Neben prachtvollen Hotels und Boutiquen umfasst der Bezirk auch Teile der Formel-1-Rennstrecke. Die Architektur ist durch die Belle Époque und moderne Hochhäuser geprägt.",
      hu: "Monte-Carlo Monaco legismertebb negyede, amely luxusáról és kaszinójáról híres. A 19. században alapították, és gyorsan a nemzetközi elit központjává vált. A pompás szállodák és butikok mellett a negyed magában foglalja a Forma-1-es versenypálya egyes szakaszait is. Építészetét a Belle Époque stílus és a modern felhőkarcolók jellemzik.",
      ro: "Monte-Carlo este cel mai faimos district din Monaco, renumit pentru luxul său și pentru cazinou. A fost fondat în secolul al XIX-lea și s-a transformat rapid într-un centru al elitei internaționale. Pe lângă hoteluri și boutique-uri somptuoase, districtul cuprinde și părți ale circuitului de Formula 1. Arhitectura este marcată de Belle Époque și zgârie-nori moderni.",
      en: "Monte-Carlo is the most famous district of Monaco, renowned for its luxury and the Casino. Founded in the 19th century, it quickly developed into a center for the international jet set. Besides magnificent hotels and boutiques, the district includes parts of the Formula 1 race track. The architecture is characterized by Belle Époque style and modern high-rises.",
    },
    factsAdvanced: {
      de: ["Wurde 1866 durch Fürst Charles III. offiziell benannt.", "Beherbergt das berühmte Casino von Monte-Carlo (eröffnet 1863).", "Der Place du Casino ist das architektonische Zentrum des Bezirks.", "Enthält das exklusive Hotel de Paris und das Café de Paris.", "Ein großer Teil des Großen Preises von Monaco findet hier statt.", "Gilt als einer der teuersten Wohnorte weltweit."],
      hu: ["1866-ban nevezte el hivatalosan III. Károly herceg.", "Itt található a híres Monte-Carlo Kaszinó (nyitás: 1863).", "A Place du Casino a negyed építészeti központja.", "Itt áll az exkluzív Hotel de Paris és a Café de Paris.", "A Monacói Nagydíj útvonalának jelentős része itt halad át.", "A világ egyik legdrágább lakóhelyének tartják."],
      ro: ["A fost numit oficial în 1866 de către prințul Carol al III-lea.", "Găzduiește celebrul Cazinou din Monte-Carlo (deschis în 1863).", "Place du Casino este centrul arhitectural al districtului.", "Include exclusivistul Hotel de Paris și Café de Paris.", "O mare parte a Marelui Premiu de Monaco se desfășoară aici.", "Este considerat unul dintre cele mai scumpe locuri de locuit din lume."],
      en: ["Was officially named in 1866 by Prince Charles III.", "Houses the famous Monte-Carlo Casino (opened in 1863).", "The Place du Casino serves as the architectural center of the district.", "Includes the exclusive Hotel de Paris and Café de Paris.", "A significant portion of the Monaco Grand Prix takes place here.", "Considered one of the most expensive places to live in the world."],
    },
  },
  {
    id: "district-fontvieille",
    type: "city",
    parent: "country-monaco",
    coords: [7.4172, 43.7297],
    name: { de: "Fontvieille", hu: "Fontvieille", ro: "Fontvieille", en: "Fontvieille" },
    description: {
      de: "Ein moderner Stadtteil, der größtenteils durch Landgewinnung aus dem Meer entstanden ist.",
      hu: "Modern negyed, amely nagyrészt a tengerből elhódított területen épült.",
      ro: "Un cartier modern, construit în mare parte pe teren recuperat din mare.",
      en: "A modern district mostly built on land reclaimed from the sea."
    },
    facts: {
      de: ["In den 1970er Jahren erbaut", "Beherbergt das Stadion Louis II", "Moderner Yachthafen", "Princess Grace Rosengarten befindet sich hier"],
      hu: ["Az 1970-es években épült", "Itt található a II. Lajos Stadion", "Modern jachtkikötő", "Itt van a Grace hercegnő rózsakert"],
      ro: ["Construit în anii 1970", "Găzduiește Stadionul Louis II", "Port de iahturi modern", "Grădina de trandafiri Princess Grace se află aici"],
      en: ["Built in the 1970s", "Home to Louis II Stadium", "Modern yacht harbor", "Princess Grace Rose Garden is located here"]
    }, image: "/poi-images/district-fontvieille.webp",
    descriptionAdvanced: {
      de: "Fontvieille ist der südlichste und jüngste Stadtteil von Monaco, der fast vollständig durch Landgewinnung aus dem Meer entstand. Das Projekt wurde in den 1970er Jahren unter Fürst Rainier III. realisiert. Der Bezirk beherbergt den Stade Louis II, einen modernen Yachthafen sowie zahlreiche Wohn- und Geschäftshäuser. Ein Highlight ist der Rosengarten der Prinzessin Grace.",
      hu: "Fontvieille Monaco legdélebbi és legfiatalabb negyede, amely szinte teljes egészében a tengerből visszanyert területen jött létre. A projektet az 1970-es években valósították meg III. Rainier herceg idején. A negyedben található a Stade Louis II stadion, egy modern jachtkikötő, valamint számos lakó- és irodaépület. Egyik fő látványossága a Grace hercegnő rózsakert.",
      ro: "Fontvieille este cel mai sudic și cel mai nou district din Monaco, creat aproape în întregime prin recuperarea terenului din mare. Proiectul a fost realizat în anii 1970 sub prințul Rainier al III-lea. Districtul găzduiește Stadionul Louis II, un port de iahturi modern și numeroase clădiri rezidențiale și comerciale. O atracție principală este Grădina de Trandafiri a Prințesei Grace.",
      en: "Fontvieille is the southernmost and newest district of Monaco, created almost entirely on land reclaimed from the sea. The project was realized in the 1970s under Prince Rainier III. The district houses the Stade Louis II, a modern yacht harbour, and numerous residential and commercial buildings. A highlight is the Princess Grace Rose Garden.",
    },
    factsAdvanced: {
      de: ["Umfasst eine Fläche von etwa 33 Hektar Neuland.", "Der Bau des Stadtteils begann offiziell im Jahr 1966.", "Beherbergt das Stade Louis II mit einer Kapazität von 18.500 Plätzen.", "Der Rosengarten der Prinzessin Grace wurde 1984 eröffnet.", "Enthält einen Hubschrauberlandeplatz (Héliport de Monaco).", "Beherbergt das Museum für Briefmarken und Münzen."],
      hu: ["Körülbelül 33 hektárnyi mesterséges területen fekszik.", "A negyed építése hivatalosan 1966-ban kezdődött meg.", "Itt található a 18 500 férőhelyes Stade Louis II stadion.", "A Grace hercegnő rózsakertet 1984-ben nyitották meg.", "Itt található a monacói helikopter-kikötő (Héliport).", "Otthont ad a Bélyeg- és Érmemúzeumnak is."],
      ro: ["Cuprinde o suprafață de aproximativ 33 de hectare de teren nou.", "Construcția districtului a început oficial în anul 1966.", "Găzduiește Stadionul Louis II cu o capacitate de 18.500 de locuri.", "Grădina de Trandafiri a Prințesei Grace a fost deschisă în 1984.", "Include un heliport (Héliport de Monaco) pentru transport aerian.", "Găzduiește Muzeul de Timbre și Monede."],
      en: ["Covers an area of approximately 33 hectares of reclaimed land.", "Construction of the district officially began in 1966.", "Houses the Stade Louis II with a capacity of 18,500 seats.", "The Princess Grace Rose Garden was opened in 1984.", "Contains a heliport (Héliport de Monaco) for air transport.", "Home to the Museum of Stamps and Coins."],
    },
  },
  {
    id: "district-la-condamine",
    type: "city",
    parent: "country-monaco",
    coords: [7.4203, 43.7356],
    name: { de: "La Condamine", hu: "La Condamine", ro: "La Condamine", en: "La Condamine" },
    description: {
      de: "Das Geschäftsviertel von Monaco rund um den Port Hercules mit seinem berühmten Markt.",
      hu: "Monaco üzleti negyede a Port Hercules körül, híres piacával.",
      ro: "Districtul comercial din Monaco, situat în jurul Portului Hercules, cu faimoasa sa piață.",
      en: "Monaco's business district around Port Hercules, featuring its famous market."
    },
    facts: {
      de: ["Zentrum des Port Hercules", "Traditioneller Condamine-Markt", "Start-Ziel-Gerade des Grand Prix", "Vielfältige Einkaufsmöglichkeiten"],
      hu: ["A Port Hercules központja", "Hagyományos Condamine piac", "A nagydíj rajt-cél egyenese", "Változatos vásárlási lehetőségek"],
      ro: ["Centrul Portului Hercules", "Piața tradițională Condamine", "Linia de start-sosire a Marelui Premiu", "Opțiuni diverse de cumpărături"],
      en: ["Center of Port Hercules", "Traditional Condamine Market", "Start-finish line of the Grand Prix", "Diverse shopping options"]
    }, image: "/poi-images/district-la-condamine.webp",
    descriptionAdvanced: {
      de: "La Condamine ist der zentrale Hafenbezirk von Monaco und umfasst den berühmten Port Hercule. Es ist einer der ältesten Stadtteile und dient als wichtiges Geschäftszentrum mit einem lebhaften Marktplatz. Hier befinden sich die Start- und Zielgeraden der Formel-1-Strecke. Der Bezirk verbindet das historische Monaco-Ville mit dem modernen Monte-Carlo.",
      hu: "La Condamine Monaco központi kikötői negyede, amely magában foglalja a híres Port Hercule-t. Ez az egyik legrégebbi városrész, fontos üzleti központ és élénk piac jellemzi. Itt található a Forma-1-es pálya rajt-cél egyenese is. A negyed összeköti a történelmi Monaco-Ville-t a modern Monte-Carlóval.",
      ro: "La Condamine este districtul portuar central din Monaco și cuprinde celebrul Port Hercule. Este unul dintre cele mai vechi cartiere și servește ca un centru de afaceri important, cu o piață plină de viață. Aici se află linia de start și sosire a circuitului de Formula 1. Districtul face legătura între orașul istoric Monaco-Ville și modernul Monte-Carlo.",
      en: "La Condamine is the central harbour district of Monaco, encompassing the famous Port Hercule. It is one of the oldest districts and serves as an important business center with a lively marketplace. The start and finish lines of the Formula 1 circuit are located here. The district connects historical Monaco-Ville with modern Monte-Carlo.",
    },
    factsAdvanced: {
      de: ["Beherbergt den Port Hercule, den einzigen Tiefwasserhafen Monacos.", "Der Marché de la Condamine wurde 1880 eröffnet.", "Die Kirche Sainte-Dévote, Schutzpatronin Monacos, liegt hier.", "Umfasst das Stade Nautique Rainier III, ein Freibad am Hafen.", "Ist das logistische Herz des Großen Preises von Monaco.", "Bekannt für seine Einkaufsstraßen Rue Grimaldi und Rue Princesse Caroline."],
      hu: ["Itt található a Port Hercule, Monaco egyetlen mélyvízi kikötője.", "A Marché de la Condamine piac 1880-ban nyílt meg.", "Itt áll a Szent Devóta-templom, Monaco védőszentjének szentélye.", "Itt található a Stade Nautique Rainier III szabadtéri uszoda.", "A Monacói Nagydíj logisztikai központja itt épül fel.", "Híres bevásárlóutcái a Rue Grimaldi és a Rue Princesse Caroline."],
      ro: ["Găzduiește Port Hercule, singurul port de apă adâncă din Monaco.", "Piața Condamine (Marché de la Condamine) a fost deschisă în 1880.", "Biserica Sainte-Dévote, patroana statului Monaco, se află aici.", "Include Stade Nautique Rainier III, o piscină în aer liber lângă port.", "Este inima logistică a Marelui Premiu de Monaco.", "Cunoscut pentru străzile comerciale Rue Grimaldi și Rue Princesse Caroline."],
      en: ["Houses Port Hercule, Monaco's only deep-water port.", "The Condamine Market (Marché de la Condamine) opened in 1880.", "The Church of Sainte-Dévote, patron saint of Monaco, is located here.", "Includes the Stade Nautique Rainier III, an outdoor pool by the harbour.", "Serves as the logistical heart of the Monaco Grand Prix.", "Famous for its shopping streets Rue Grimaldi and Rue Princesse Caroline."],
    },
  }
];

export const monacoLandmarks: POI[] = [
  {
    id: "landmark-casino-monte-carlo",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4282, 43.7393],
    name: { de: "Casino von Monte-Carlo", hu: "Monte-Carlo Casino", ro: "Cazinoul din Monte-Carlo", en: "Monte-Carlo Casino" },
    description: {
      de: "Ein weltberühmtes Casino und Opernhaus im Stil der Belle Époque.",
      hu: "Világhírű kaszinó és operaház Belle Époque stílusban.",
      ro: "Un cazinou și o operă de renume mondial, în stil Belle Époque.",
      en: "A world-famous casino and opera house in Belle Époque style."
    },
    facts: {
      de: ["Entworfen von Charles Garnier", "Drehort für mehrere James-Bond-Filme", "Monegassen dürfen hier nicht spielen", "Beherbergt auch die Oper von Monte-Carlo"],
      hu: ["Charles Garnier tervezte", "Több James Bond film forgatási helyszíne", "A monacói állampolgárok nem játszhatnak itt", "Itt található a Monte-Carlo Opera is"],
      ro: ["Proiectat de Charles Garnier", "Locație de filmare pentru mai multe filme James Bond", "Cetățenii monegaști nu au voie să joace aici", "Găzduiește și Opera din Monte-Carlo"],
      en: ["Designed by Charles Garnier", "Filming location for several James Bond movies", "Monegasque citizens are not allowed to gamble here", "Also houses the Opéra de Monte-Carlo"]
    },
    descriptionAdvanced: {
      de: "Das Casino von Monte-Carlo ist ein weltberühmtes Glücksspiel- und Unterhaltungskomplex im Stil der Beaux-Arts. Entworfen vom Architekten Charles Garnier, wurde es im Jahr 1863 eröffnet. Das Gebäude beherbergt prächtige Säle, das Opernhaus von Monaco und exklusive Spielräume. Es gilt als eines der elegantesten Bauwerke des Fürstentums und ist ein Symbol für Reichtum.",
      hu: "A Monte-Carlo Kaszinó egy világhírű szerencsejáték- és szórakoztató központ Beaux-Arts stílusban. Charles Garnier építész tervei alapján épült, és 1863-ban nyitották meg. Az épületben pompás termek, a monacói operaház és exkluzív játéktermek találhatók. A hercegség egyik legelegánsabb építményeként a gazdagság és a luxus jelképe.",
      ro: "Cazinoul din Monte-Carlo este un complex de jocuri de noroc și divertisment de renume mondial, construit în stil Beaux-Arts. Proiectat de arhitectul Charles Garnier, a fost deschis în anul 1863. Clădirea găzduiește săli somptuoase, Opera din Monaco și săli de jocuri exclusiviste. Este considerat una dintre cele mai elegante structuri din principat și un simbol al bogăției.",
      en: "The Monte-Carlo Casino is a world-famous gambling and entertainment complex built in the Beaux-Arts style. Designed by architect Charles Garnier, it was opened in 1863. The building houses magnificent halls, the Monaco Opera House, and exclusive gaming rooms. It is considered one of the most elegant structures in the principality and a symbol of wealth.",
    },
    factsAdvanced: {
      de: ["Entworfen von Charles Garnier, dem Architekten der Pariser Oper.", "Offiziell im Jahr 1863 zur Rettung der Staatsfinanzen eröffnet.", "Bürgern von Monaco ist das Glücksspiel im Casino gesetzlich verboten.", "Das Gebäude beherbergt auch die Opéra de Monte-Carlo.", "Diente als Kulisse für mehrere James-Bond-Filme.", "Eigentümer ist die Société des Bains de Mer (SBM)."],
      hu: ["Charles Garnier, a Párizsi Opera építésze tervezte.", "1863-ban nyílt meg az államháztartás megmentése érdekében.", "A monacói állampolgároknak törvény tiltja a játékot a kaszinóban.", "Az épületben található a Monte-Carló-i Operaház is.", "Számos James Bond-film forgatási helyszínéül szolgált.", "Tulajdonosa a Société des Bains de Mer (SBM) társaság."],
      ro: ["Proiectat de Charles Garnier, arhitectul Operei din Paris.", "Deschis oficial în 1863 pentru a salva finanțele statului.", "Cetățenilor din Monaco le este interzis prin lege să joace în cazinou.", "Clădirea găzduiește, de asemenea, Opera din Monte-Carlo.", "A servit drept decor pentru mai multe filme din seria James Bond.", "Este deținut de compania Société des Bains de Mer (SBM)."],
      en: ["Designed by Charles Garnier, the architect of the Paris Opera.", "Officially opened in 1863 to save the state's finances.", "Citizens of Monaco are forbidden by law from gambling in the casino.", "The building also houses the Opéra de Monte-Carlo.", "Served as a filming location for several James Bond movies.", "Owned by the Société des Bains de Mer (SBM)."],
    },
  },
  {
    id: "landmark-oceanographic-museum",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4255, 43.7306],
    name: { de: "Ozeanographisches Museum", hu: "Oceanográfiai Múzeum", ro: "Muzeul Oceanografic", en: "Oceanographic Museum" },
    description: {
      de: "Ein beeindruckendes Museum für Meereswissenschaften direkt an einer Klippe.",
      hu: "Lenyűgöző tengerkutatási múzeum közvetlenül a sziklaparton.",
      ro: "Un muzeu impresionant de științe marine, situat direct pe o stâncă.",
      en: "An impressive museum of marine sciences located directly on a cliffside."
    },
    facts: {
      de: ["Gegründet von Fürst Albert I.", "Jacques-Yves Cousteau war lange Direktor", "Großes Aquarium im Untergeschoss", "Barocke Architektur"],
      hu: ["I. Albert herceg alapította", "Jacques-Yves Cousteau sokáig az igazgatója volt", "Nagy akvárium az alagsorban", "Barokk építészet"],
      ro: ["Fondat de Prințul Albert I", "Jacques-Yves Cousteau a fost director mult timp", "Acvariu mare la subsol", "Arhitectură barocă"],
      en: ["Founded by Prince Albert I", "Jacques-Yves Cousteau was director for a long time", "Large aquarium in the basement", "Baroque architecture"]
    }, image: "/poi-images/landmark-oceanographic-museum.webp",
    descriptionAdvanced: {
      de: "Das Ozeanographische Museum von Monaco thront auf einer Klippe über dem Mittelmeer in Monaco-Ville. Es wurde 1910 von Fürst Albert I. gegründet und ist ein Zentrum für Meeresforschung und Naturschutz. Das imposante neoklassizistische Gebäude beherbergt Aquarien mit über 6.000 Arten sowie historische Sammlungen. Es ist eines der bedeutendsten Museen seiner Art weltweit.",
      hu: "A monacói Óceánográfiai Múzeum egy sziklán trónol a Földközi-tenger felett Monaco-Ville negyedben. 1910-ben alapította I. Albert herceg, és a tengerkutatás, valamint a természetvédelem központja. Az impozáns neoklasszicista épületben több mint 6000 fajt bemutató akváriumok és történelmi gyűjtemények találhatók. A világ egyik legjelentősebb ilyen típusú múzeuma.",
      ro: "Muzeul Oceanografic din Monaco tronează pe o stâncă deasupra Mediteranei în Monaco-Ville. A fost fondat în 1910 de prințul Albert I și este un centru pentru cercetare marină și conservare. Clădirea neoclasică impunătoare găzduiește acvarii cu peste 6.000 de specii, precum și colecții istorice. Este unul dintre cele mai importante muzee de acest tip din lume.",
      en: "The Oceanographic Museum of Monaco perches on a cliff overlooking the Mediterranean in Monaco-Ville. Founded in 1910 by Prince Albert I, it is a center for marine research and conservation. The imposing neoclassical building houses aquariums with over 6,000 species and historical collections. It is one of the most significant museums of its kind globally.",
    },
    factsAdvanced: {
      de: ["Eingeweiht am 29. März 1910 durch Fürst Albert I.", "Jacques-Yves Cousteau war von 1957 bis 1988 Direktor des Museums.", "Das Gebäude wurde direkt in den Felsen von Monaco gebaut.", "Beherbergt ein 450.000 Liter fassendes Haifischbecken.", "Die Fassade ist mit maritimen Motiven und Skulpturen verziert.", "Enthält die weltweit erste Sammlung ozeanographischer Instrumente."],
      hu: ["1910. március 29-én avatta fel I. Albert herceg.", "Jacques-Yves Cousteau 1957 és 1988 között volt a múzeum igazgatója.", "Az épületet közvetlenül Monaco sziklájába építették bele.", "Egy 450 000 literes cápamedence is található benne.", "Homlokzatát tengeri motívumok és szobrok díszítik.", "Itt található a világ első óceánográfiai műszergyűjteménye."],
      ro: ["Inaugurat la 29 martie 1910 de către prințul Albert I.", "Jacques-Yves Cousteau a fost directorul muzeului între 1957 și 1988.", "Clădirea a fost construită direct în stânca din Monaco.", "Găzduiește un bazin cu rechini cu o capacitate de 450.000 de litri.", "Fațada este decorată cu motive și sculpturi maritime.", "Deține prima colecție de instrumente oceanografice din lume."],
      en: ["Inaugurated on March 29, 1910, by Prince Albert I.", "Jacques-Yves Cousteau served as director from 1957 to 1988.", "The building was constructed directly into the Rock of Monaco.", "Houses a shark lagoon tank with a capacity of 450,000 liters.", "The facade is decorated with maritime motifs and sculptures.", "Contains the world's first collection of oceanographic instruments."],
    },
  },
  {
    id: "landmark-jardin-exotique",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4137, 43.7334],
    name: { de: "Exotischer Garten", hu: "Egzotikus kert", ro: "Grădina Exotică", en: "Exotic Garden" },
    description: {
      de: "Ein botanischer Garten mit Tausenden von Sukkulenten und einer prähistorischen Grotte.",
      hu: "Botanikus kert több ezer szukkulenssel és egy őskori barlanggal.",
      ro: "O grădină botanică cu mii de plante suculente și o grotă preistorică.",
      en: "A botanical garden featuring thousands of succulents and a prehistoric cave."
    },
    facts: {
      de: ["Eröffnet 1933", "Bietet Panoramablick auf das Fürstentum", "Grotte de l'Observatoire befindet sich hier", "Sammlung seltener Wüstenpflanzen"],
      hu: ["1933-ban nyílt meg", "Panorámás kilátást nyújt a hercegségre", "Itt található az Obszervatórium-barlang", "Ritka sivatagi növények gyűjteménye"],
      ro: ["Deschisă în 1933", "Oferă vedere panoramică asupra principatului", "Grotte de l'Observatoire se află aici", "Colecție de plante rare de deșert"],
      en: ["Opened in 1933", "Offers panoramic views of the Principality", "Grotte de l'Observatoire is located here", "Collection of rare desert plants"]
    }, image: "/poi-images/landmark-jardin-exotique.webp",
    descriptionAdvanced: {
      de: "Der Exotische Garten von Monaco bietet eine spektakuläre Sammlung von Sukkulenten und Kakteen aus ariden Regionen weltweit. Er wurde 1933 eröffnet und liegt an einem steilen Hang mit Panoramablick über das Fürstentum. In die Anlage integriert ist eine prähistorische Höhle, die Grotte de l'Observatoire. Der Garten ist bekannt für seine Vielfalt an seltenen Pflanzenarten.",
      hu: "A monacói Egzotikus Kert a világ száraz vidékeiről származó pozsgások és kaktuszok látványos gyűjteményét kínálja. 1933-ban nyílt meg, és egy meredek lejtőn helyezkedik el, panorámás kilátással a hercegségre. A kert területén található egy őskori barlang, a Grotte de l'Observatoire is. A kert a ritka növényfajok sokszínűségéről ismert.",
      ro: "Grădina Exotică din Monaco oferă o colecție spectaculoasă de plante suculente și cactuși din regiuni aride ale lumii. A fost deschisă în 1933 și este situată pe o pantă abruptă, cu vedere panoramică asupra principatului. În complex este integrată o peșteră preistorică, Grotte de l'Observatoire. Grădina este cunoscută pentru diversitatea speciilor de plante rare.",
      en: "The Exotic Garden of Monaco features a spectacular collection of succulents and cacti from arid regions worldwide. Opened in 1933, it is situated on a steep slope with panoramic views over the principality. Integrated into the grounds is a prehistoric cave, the Grotte de l'Observatoire. The garden is renowned for its diversity of rare plant species.",
    },
    factsAdvanced: {
      de: ["Offiziell im Jahr 1933 für die Öffentlichkeit eröffnet.", "Beherbergt über 1.000 verschiedene Arten von Sukkulenten.", "Die Grotte de l'Observatoire enthält Stalaktiten und Stalagmiten.", "Liegt etwa 100 Meter über dem Meeresspiegel.", "In der Höhle wurden Spuren menschlicher Besiedlung aus der Steinzeit gefunden.", "Das Botanische Zentrum Monacos ist an den Garten angeschlossen."],
      hu: ["1933-ban nyitották meg hivatalosan a nagyközönség előtt.", "Több mint 1000 különböző pozsgás növényfajnak ad otthont.", "Az Obszervatórium-barlangban sztalaktitok és sztalagmitok láthatók.", "Körülbelül 100 méterrel a tengerszint felett helyezkedik el.", "A barlangban kőkorszaki emberi jelenlét nyomait találták meg.", "A Monacói Botanikai Központ a kerthez kapcsolódva működik."],
      ro: ["Deschisă oficial publicului în anul 1933.", "Găzduiește peste 1.000 de specii diferite de plante suculente.", "Grotte de l'Observatoire conține stalactite și stalagmite.", "Situată la aproximativ 100 de metri deasupra nivelului mării.", "În peșteră au fost găsite urme de așezări umane din epoca pietrei.", "Centrul Botanic din Monaco este afiliat acestei grădini."],
      en: ["Officially opened to the public in the year 1933.", "Houses over 1,000 different species of succulent plants.", "The Observatory Cave features stalactites and stalagmites.", "Located approximately 100 meters above sea level.", "Prehistoric human remains were discovered within the cave site.", "The Botanical Center of Monaco is affiliated with the garden."],
    },
  },
  {
    id: "landmark-larvotto-beach",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4355, 43.7441],
    name: { de: "Larvotto Strand", hu: "Larvotto strand", ro: "Plaja Larvotto", en: "Larvotto Beach" },
    description: {
      de: "Monacos einziger öffentlicher Strand mit feinem Kies und klarem Wasser.",
      hu: "Monaco egyetlen nyilvános strandja apró kavicsos parttal és tiszta vízzel.",
      ro: "Singura plajă publică din Monaco, cu pietriș fin și apă curată.",
      en: "Monaco's only public beach with fine gravel and clear water."
    },
    facts: {
      de: ["Künstlich angelegter Strand", "Gesäumt von Luxusrestaurants", "Beliebt bei Einheimischen und Touristen", "Vollständig renoviert von Renzo Piano"],
      hu: ["Mesterségesen kialakított strand", "Luxuséttermek szegélyezik", "Népszerű a helyiek és a turisták körében", "Renzo Piano által teljesen felújítva"],
      ro: ["Plajă creată artificial", "Mărginită de restaurante de lux", "Populară printre localnici și turiști", "Renovată complet de Renzo Piano"],
      en: ["Artificially created beach", "Lined with luxury restaurants", "Popular with locals and tourists", "Completely renovated by Renzo Piano"]
    },
    descriptionAdvanced: {
      de: "Der Larvotto-Strand ist der einzige öffentliche Badestrand in Monaco und befindet sich im gleichnamigen Stadtteil. Er bietet eine Mischung aus Sand und feinem Kies sowie zahlreiche Freizeiteinrichtungen. Nach einer umfassenden Renovierung durch Renzo Piano präsentiert sich die Promenade modern und barrierefrei. Der Strand ist ein beliebter Treffpunkt für Einheimische und Besucher.",
      hu: "A Larvotto-strand Monaco egyetlen nyilvános fürdőstrandja, amely az azonos nevű negyedben található. Homok és finom kavics keveréke, valamint számos szabadidős létesítmény várja a látogatókat. A Renzo Piano által tervezett átfogó felújítás után a sétány modern és akadálymentes lett. A strand a helyiek és a látogatók kedvelt találkozóhelye.",
      ro: "Plaja Larvotto este singura plajă publică din Monaco și se află în districtul cu același nume. Oferă un amestec de nisip și pietriș fin, precum și numeroase facilități de agrement. După o renovare majoră semnată de Renzo Piano, promenada este modernă și accesibilă. Plaja este un loc de întâlnire popular pentru localnici și turiști.",
      en: "Larvotto Beach is the only public bathing beach in Monaco, located in the district of the same name. It features a mix of sand and fine gravel along with numerous recreational facilities. Following an extensive renovation by Renzo Piano, the promenade is modern and accessible. The beach is a popular meeting point for locals and visitors alike.",
    },
    factsAdvanced: {
      de: ["Ist der einzige öffentlich zugängliche Strand des Fürstentums.", "Die Neugestaltung durch Renzo Piano wurde 2021 abgeschlossen.", "Der Strand ist durch Netze gegen Quallen geschützt.", "Liegt an der Avenue Princesse Grace.", "Bietet einen speziellen Handiplage-Bereich für Menschen mit Behinderungen.", "Die angrenzende Promenade beherbergt zahlreiche Restaurants und Cafés."],
      hu: ["A hercegség egyetlen nyilvánosan látogatható strandja.", "A Renzo Piano-féle újratervezés 2021-ben fejeződött be.", "A strandot hálókkal védik a medúzák ellen.", "Az Avenue Princesse Grace mentén fekszik.", "Speciális „Handiplage” részleggel rendelkezik mozgássérülteknek.", "A szomszédos sétányon számos étterem és kávézó található."],
      ro: ["Este singura plajă accesibilă publicului din principat.", "Reproiectarea de către Renzo Piano a fost finalizată în 2021.", "Plaja este protejată împotriva meduzelor prin plase speciale.", "Situată de-a lungul Avenue Princesse Grace.", "Dispune de o zonă specială Handiplage pentru persoanele cu dizabilități.", "Promenada adiacentă găzduiește numeroase restaurante și cafenele."],
      en: ["It is the only publicly accessible beach in the principality.", "The redesign by Renzo Piano was completed in 2021.", "The beach is protected against jellyfish by specialized nets.", "Located along the Avenue Princesse Grace.", "Features a dedicated 'Handiplage' area for people with disabilities.", "The adjacent promenade hosts numerous restaurants and cafes."],
    },
  },
  {
    id: "landmark-japanese-garden",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4308, 43.7428],
    name: { de: "Japanischer Garten", hu: "Japán kert", ro: "Grădina Japoneză", en: "Japanese Garden" },
    description: {
      de: "Ein friedlicher Zen-Garten am Mittelmeer, entworfen nach strengen Zen-Prinzipien.",
      hu: "Békés zen kert a Földközi-tenger partján, szigorú zen elvek alapján tervezve.",
      ro: "O grădină zen liniștită la malul Mediteranei, proiectată după principii zen stricte.",
      en: "A peaceful Zen garden by the Mediterranean, designed according to strict Zen principles."
    },
    facts: {
      de: ["Gestaltet von Yasuo Beppu", "Beinhaltet einen Wasserfall und einen Koi-Teich", "Über 7.000 Quadratmeter groß", "Offizielle Einweihung 1994"],
      hu: ["Yasuo Beppu tervezte", "Vízesést és koi-pontyos tavat is tartalmaz", "Több mint 7000 négyzetméter", "Hivatalos átadás 1994-ben"],
      ro: ["Proiectată de Yasuo Beppu", "Include o cascadă și un iaz cu pești koi", "Peste 7.000 de metri pătrați", "Inaugurată oficial în 1994"],
      en: ["Designed by Yasuo Beppu", "Features a waterfall and a koi pond", "Over 7,000 square meters", "Officially inaugurated in 1994"]
    }, image: "/poi-images/landmark-japanese-garden.webp",
    descriptionAdvanced: {
      de: "Der Japanische Garten von Monaco ist eine friedliche Oase im Herzen des Larvotto-Viertels. Er wurde 1994 im Auftrag von Fürst Rainier III. vom Landschaftsarchitekten Yasuo Beppu entworfen. Der Garten kombiniert Zen-Elemente mit mediterraner Flora und umfasst Teiche, Brücken und ein Teehaus. Er ist nach strengen Regeln des japanischen Gartenbaus gestaltet.",
      hu: "A monacói Japánkert egy békés oázis a Larvotto negyed szívében. 1994-ben készült el III. Rainier herceg megbízásából, Yasuo Beppu tájépítész tervei alapján. A kert a zen elemeket ötvözi a mediterrán flórával, tavakat, hidakat és egy teaházat is magában foglal. A japán kertépítészet szigorú szabályai szerint alakították ki.",
      ro: "Grădina Japoneză din Monaco este o oază de liniște în inima districtului Larvotto. A fost creată în 1994 la cererea prințului Rainier al III-lea de către arhitectul Yasuo Beppu. Grădina combină elemente Zen cu flora mediteraneană și include iazuri, poduri și o casă de ceai. Este proiectată conform regulilor stricte ale peisagisticii japoneze.",
      en: "The Japanese Garden of Monaco is a peaceful oasis in the heart of the Larvotto district. It was created in 1994 at the request of Prince Rainier III by landscape architect Yasuo Beppu. The garden combines Zen elements with Mediterranean flora and includes ponds, bridges, and a tea house. It is designed according to strict Japanese gardening principles.",
    },
    factsAdvanced: {
      de: ["Wurde im Jahr 1994 offiziell eingeweiht.", "Umfasst eine Fläche von etwa 7.000 Quadratmetern.", "Alle Baumaterialien und Pflanzen wurden aus Japan importiert.", "Enthält einen Wasserfall und einen Koi-Teich.", "Das Teehaus wurde in Japan vorgefertigt und in Monaco montiert.", "Der Garten ist als Ort der Meditation und Ruhe konzipiert."],
      hu: ["1994-ben avatták fel hivatalosan.", "Körülbelül 7000 négyzetméternyi területen fekszik.", "Minden építőanyagot és növényt Japánból importáltak.", "Egy vízesés és egy koipontyokkal teli tó is található benne.", "A teaházat Japánban gyártották le, és Monacóban szerelték össze.", "A kertet a meditáció és a nyugalom helyszínének tervezték."],
      ro: ["A fost inaugurată oficial în anul 1994.", "Cuprinde o suprafață de aproximativ 7.000 de metri pătrați.", "Toate materialele de construcție și plantele au fost importate din Japonia.", "Include o cascadă și un iaz cu pești Koi.", "Casa de ceai a fost prefabricată în Japonia și asamblată în Monaco.", "Grădina este concepută ca un loc de meditație și liniște."],
      en: ["Was officially inaugurated in the year 1994.", "Covers an area of approximately 7,000 square meters.", "All construction materials and plants were imported from Japan.", "Features a waterfall and a pond filled with Koi fish.", "The tea house was prefabricated in Japan and assembled in Monaco.", "The garden is designed as a place of meditation and quietude."],
    },
  },
  {
    id: "landmark-grimaldi-forum",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4325, 43.7431],
    name: { de: "Grimaldi Forum", hu: "Grimaldi Forum", ro: "Grimaldi Forum", en: "Grimaldi Forum" },
    description: {
      de: "Ein modernes Konferenz- und Kongresszentrum direkt am Meer.",
      hu: "Modern konferencia- és kongresszusi központ közvetlenül a tengerparton.",
      ro: "Un centru modern de conferințe și congrese situat direct pe malul mării.",
      en: "A modern conference and congress center located directly on the seafront."
    },
    facts: {
      de: ["Veranstaltungsort für UEFA-Auslosungen", "Große Kunstausstellungen im Sommer", "Ökologisches Gebäude", "Größtenteils unterirdisch gebaut"],
      hu: ["UEFA sorsolások helyszíne", "Nagy nyári művészeti kiállítások", "Környezetbarát épület", "Nagyrészt a föld alatt épült"],
      ro: ["Locul desfășurării tragerilor la sorți UEFA", "Mari expoziții de artă vara", "Clădire ecologică", "Construită în mare parte subteran"],
      en: ["Venue for UEFA draws", "Large art exhibitions in summer", "Eco-friendly building", "Mostly built underground"]
    }, image: "/poi-images/landmark-grimaldi-forum.webp",
    descriptionAdvanced: {
      de: "Das Grimaldi Forum ist das wichtigste Konferenz- und Kongresszentrum in Monaco, gelegen am Ufer von Larvotto. Es wurde im Jahr 2000 eröffnet und ist ein Meisterwerk moderner Architektur aus Glas und Stahl. Das Zentrum bietet flexible Räumlichkeiten für internationale Messen, Konzerte und Kunstausstellungen. Ein großer Teil des Gebäudes liegt unter dem Meeresspiegel.",
      hu: "A Grimaldi Forum Monaco legfontosabb konferencia- és kongresszusi központja, amely Larvotto partján található. 2000-ben nyílt meg, és az üveg-acél modern építészet mesterműve. A központ rugalmas tereket kínál nemzetközi vásárok, koncertek és művészeti kiállítások számára. Az épület jelentős része a tengerszint alatt helyezkedik el.",
      ro: "Grimaldi Forum este cel mai important centru de conferințe și congrese din Monaco, situat pe malul mării în Larvotto. A fost deschis în anul 2000 și este o capodoperă a arhitecturii moderne din sticlă și oțel. Centrul oferă spații flexibile pentru târguri internaționale, concerte și expoziții de artă. O mare parte a clădirii se află sub nivelul mării.",
      en: "The Grimaldi Forum is the primary conference and congress center in Monaco, located on the waterfront of Larvotto. Opened in 2000, it is a masterpiece of modern glass and steel architecture. The center offers flexible spaces for international trade fairs, concerts, and art exhibitions. A large part of the building is situated below sea level.",
    },
    factsAdvanced: {
      de: ["Wurde am 20. Juli 2000 offiziell eingeweiht.", "Umfasst eine Gesamtnutzfläche von 35.000 Quadratmetern.", "Ist Gastgeber der jährlichen UEFA-Champions-League-Auslosungen.", "Wurde auf landgewonnenem Boden direkt am Meer errichtet.", "Das Gebäude ist nach ISO 14001 für Umweltmanagement zertifiziert.", "Verfügt über drei Auditorien und zahlreiche Ausstellungsflächen."],
      hu: ["2000. július 20-án avatták fel hivatalosan.", "Összesen 35 000 négyzetméternyi hasznos területtel rendelkezik.", "Itt tartják az éves UEFA Bajnokok Ligája sorsolásokat.", "A tengerből visszanyert területen épült fel.", "Az épület ISO 14001 környezetirányítási tanúsítvánnyal rendelkezik.", "Három auditóriummal és számos kiállítótérrel várja az eseményeket."],
      ro: ["A fost inaugurat oficial la 20 iulie 2000.", "Cuprinde o suprafață utilă totală de 35.000 de metri pătrați.", "Găzduiește tragerile la sorți anuale pentru UEFA Champions League.", "Construit pe teren recuperat din mare, chiar pe faleză.", "Clădirea este certificată ISO 14001 pentru management de mediu.", "Dispune de trei auditorii și numeroase spații expoziționale."],
      en: ["Was officially inaugurated on July 20, 2000.", "Comprises a total usable area of 35,000 square meters.", "Hosts the annual UEFA Champions League group stage draws.", "Built on land reclaimed from the sea right at the waterfront.", "The building is ISO 14001 certified for environmental management.", "Features three auditoriums and numerous exhibition halls."],
    },
  },
  {
    id: "landmark-louis-ii-stadium",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4158, 43.7275],
    name: { de: "Louis-II-Stadion", hu: "II. Lajos Stadion", ro: "Stadionul Louis II", en: "Louis II Stadium" },
    description: {
      de: "Das Mehrzweckstadion von Monaco und Heimspielstätte des AS Monaco.",
      hu: "Monaco többcélú stadionja és az AS Monaco hazai pályája.",
      ro: "Stadionul polivalent din Monaco și sediul clubului AS Monaco.",
      en: "Monaco's multi-purpose stadium and home of AS Monaco."
    },
    facts: {
      de: ["Eingeweiht 1985", "Liegt auf künstlich gewonnenem Land", "Neun markante Bögen", "Beherbergt auch ein Schwimmzentrum"],
      hu: ["1985-ben adták át", "Mesterséges területen fekszik", "Kilenc jellegzetes ív", "Itt található egy úszóközpont is"],
      ro: ["Inaugurat în 1985", "Situat pe teren recuperat", "Nouă arcade distinctive", "Găzduiește și un centru de natație"],
      en: ["Inaugurated in 1985", "Located on reclaimed land", "Nine distinctive arches", "Also houses a swimming center"]
    }, image: "/poi-images/landmark-louis-ii-stadium.webp",
    descriptionAdvanced: {
      de: "Das Stade Louis II wurde 1985 eingeweiht und dient als Heimstätte des AS Monaco. Die Mehrzweckanlage wurde auf dem Meer abgetrotzten Land im Stadtteil Fontvieille errichtet. Sie zeichnet sich durch ihre neun charakteristischen Bögen aus und beherbergt neben dem Fußballplatz auch eine Leichtathletikbahn sowie ein Wassersportzentrum.",
      hu: "A II. Lajos Stadion Monaco Fontvieille negyedében található többfunkciós sportlétesítmény, amelyet 1985-ben adtak át. Az AS Monaco futballcsapatának otthona különleges építészeti megoldásairól ismert, mivel részben a tengerből visszanyert területre épült. A stadion kilenc íves boltíve jellegzetes eleme a városképnek.",
      ro: "Stadionul Louis II a fost inaugurat în 1985 și servește drept sediu pentru AS Monaco. Instalația multifuncțională a fost construită pe teren recuperat din mare în districtul Fontvieille. Se remarcă prin cele nouă arcade caracteristice și găzduiește, pe lângă terenul de fotbal, o pistă de atletism și un centru acvatic.",
      en: "The Stade Louis II was inaugurated in 1985 and serves as the home ground for AS Monaco. This multi-purpose facility was constructed on land reclaimed from the sea in the Fontvieille district. It is distinguished by its nine characteristic arches and houses an athletics track and an aquatic center alongside the football pitch.",
    },
    factsAdvanced: {
      de: ["Eröffnung am 25. Januar 1985 durch Fürst Rainier III.", "Gesamtkapazität von etwa 16.360 Sitzplätzen.", "Spielfeld liegt 8,35 Meter über dem Straßenniveau.", "Unter dem Rasen befindet sich ein Parkhaus mit vier Etagen.", "Austragungsort des UEFA Super Cups von 1998 bis 2012.", "Beinhaltet die Sportuniversität von Monaco."],
      hu: ["1985. január 25-én avatta fel III. Rainier herceg.", "Befogadóképessége körülbelül 16 360 ülőhely.", "A játéktér 8,35 méterrel az utcaszint felett helyezkedik el.", "A gyep alatt egy négyszintes parkolóház található.", "1998 és 2012 között az UEFA-szuperkupa állandó helyszíne volt.", "Itt található a Monacói Sportegyetem is."],
      ro: ["Inaugurat la 25 ianuarie 1985 de către Prințul Rainier al III-lea.", "Capacitate totală de aproximativ 16.360 de locuri.", "Terenul de joc se află la 8,35 metri deasupra nivelului străzii.", "Sub gazon se află o parcare cu patru etaje.", "Gazda Supercupei Europei între anii 1998 și 2012.", "Găzduiește Universitatea de Sport din Monaco."],
      en: ["Opened on January 25, 1985, by Prince Rainier III.", "Total capacity of approximately 16,360 seats.", "The playing field is located 8.35 meters above street level.", "Features a four-story parking garage beneath the pitch.", "Hosted the UEFA Super Cup annually from 1998 to 2012.", "Contains the Sports University of Monaco."],
    },
  },
  {
    id: "landmark-top-cars-collection",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4182, 43.7315],
    name: { de: "Automobilsammlung von Monaco", hu: "Hercegi autógyűjtemény", ro: "Colecția de mașini a Prințului", en: "Monaco Top Cars Collection" },
    description: {
      de: "Die private Oldtimersammlung von Fürst Rainier III.",
      hu: "III. Rainier herceg magán veteránautó gyűjteménye.",
      ro: "Colecția privată de mașini clasice a Prințului Rainier III.",
      en: "The private vintage car collection of Prince Rainier III."
    },
    facts: {
      de: ["Über 100 Fahrzeuge ausgestellt", "Beinhaltet Formel-1-Wagen", "Spezielle Kutschen der Fürstenfamilie", "Befindet sich in Fontvieille"],
      hu: ["Több mint 100 jármű látható", "Forma-1-es autókat is tartalmaz", "A hercegi család különleges hintói", "Fontvieille-ben található"],
      ro: ["Peste 100 de vehicule expuse", "Include mașini de Formula 1", "Trăsuri speciale ale familiei princiare", "Situată în Fontvieille"],
      en: ["Over 100 vehicles on display", "Includes Formula 1 cars", "Special carriages of the princely family", "Located in Fontvieille"]
    }, image: "/poi-images/landmark-top-cars-collection.webp",
    descriptionAdvanced: {
      de: "Die Oldtimersammlung von Fürst Rainier III. befindet sich auf den Terrassen von Fontvieille. Sie umfasst rund einhundert Fahrzeuge verschiedener Epochen und Marken. Die Ausstellung dokumentiert die Leidenschaft des Fürsten für Automobile und zeigt seltene Modelle von De Dion Bouton bis hin zu modernen Formel-1-Boliden.",
      hu: "III. Rainier herceg magángyűjteménye a Fontvieille teraszokon kapott helyet, és mintegy száz különböző korú járművet mutat be. A kiállítás a herceg autó iránti szenvedélyét dokumentálja a 20. század eleji ritkaságoktól a modern Forma-1-es autókig. A gyűjteményben katonai járművek és lovas kocsik is megtekinthetők.",
      ro: "Colecția de mașini de epocă a Prințului Rainier al III-lea este situată pe terasele din Fontvieille. Aceasta cuprinde aproximativ o sută de vehicule din diferite epoci și mărci. Expoziția documentează pasiunea Prințului pentru automobile și prezintă modele rare, de la De Dion Bouton până la monoposturi moderne de Formula 1.",
      en: "The private car collection of Prince Rainier III is located on the Terrasses de Fontvieille. It comprises approximately one hundred vehicles from various eras and manufacturers. The exhibition documents the Prince's passion for automobiles, showcasing rare models ranging from De Dion Bouton to modern Formula 1 cars.",
    },
    factsAdvanced: {
      de: ["Die Sammlung wurde 1993 für die Öffentlichkeit zugänglich gemacht.", "Beinhaltet den De Dion Bouton von 1903, das älteste Auto.", "Ausstellungsfläche beträgt rund 5.000 Quadratmeter.", "Besitzt den Lexus LS 600h von der Hochzeit von Fürst Albert II.", "Gezeigt werden sechs Formel-1-Wagen des Großen Preises von Monaco.", "Enthält Modelle von Bugatti, Rolls-Royce und Lamborghini."],
      hu: ["A gyűjteményt 1993-ban nyitották meg a nagyközönség előtt.", "A legidősebb autó egy 1903-as De Dion Bouton.", "A kiállítótér területe körülbelül 5000 négyzetméter.", "Itt látható a II. Albert herceg esküvőjén használt Lexus LS 600h.", "Hat darab Forma-1-es autót mutatnak be a monacói nagydíjról.", "Bugatti, Rolls-Royce és Lamborghini modellek is találhatók benne."],
      ro: ["Colecția a fost deschisă publicului în anul 1993.", "Include un De Dion Bouton din 1903, cea mai veche mașină.", "Suprafața expozițională este de aproximativ 5.000 mp.", "Deține modelul Lexus LS 600h de la nunta Prințului Albert al II-lea.", "Sunt expuse șase mașini de Formula 1 din Marele Premiu al Monaco.", "Conține modele de Bugatti, Rolls-Royce și Lamborghini."],
      en: ["The collection was opened to the public in 1993.", "Includes a 1903 De Dion Bouton, the oldest car in the set.", "Exhibition space covers approximately 5,000 square meters.", "Features the Lexus LS 600h used at Prince Albert II's wedding.", "Displays six Formula 1 cars from the Monaco Grand Prix.", "Contains models from Bugatti, Rolls-Royce, and Lamborghini."],
    },
  },
  {
    id: "landmark-princess-grace-rose-garden",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4178, 43.7286],
    name: { de: "Princess-Grace-Rosengarten", hu: "Grace hercegnő rózsakert", ro: "Grădina de trandafiri Princess Grace", en: "Princess Grace Rose Garden" },
    description: {
      de: "Ein wunderschöner Rosengarten zum Gedenken an Fürstin Gracia Patricia.",
      hu: "Gyönyörű rózsakert Grace hercegnő emlékére.",
      ro: "O grădină de trandafiri superbă în memoria Prințesei Grace.",
      en: "A beautiful rose garden in memory of Princess Grace."
    },
    facts: {
      de: ["Über 300 verschiedene Rosensorten", "Eröffnet 1984", "Herzförmiges Design", "Bronze-Statue der Fürstin"],
      hu: ["Több mint 300 rózsafajta", "1984-ben nyílt meg", "Szív alakú kialakítás", "A hercegnő bronzszobra"],
      ro: ["Peste 300 de soiuri de trandafiri", "Deschisă în 1984", "Design în formă de inimă", "Statuia de bronz a Prințesei"],
      en: ["Over 300 varieties of roses", "Opened in 1984", "Heart-shaped design", "Bronze statue of the Princess"]
    }, image: "/poi-images/landmark-princess-grace-rose-garden.webp",
    descriptionAdvanced: {
      de: "Der Rosengarten Prinzessin Gracia wurde 1984 von Fürst Rainier III. zum Gedenken an seine Gemahlin angelegt. Er befindet sich im Fontvieille-Park und beherbergt Tausende von Rosenstöcken. Die Anlage ist nach den Prinzipien eines englischen Gartens gestaltet, bewahrt jedoch einen mediterranen Charakter mit Olivenbäumen und Palmen.",
      hu: "A Grácia hercegnő rózsakertet 1984-ben alapította III. Rainier herceg felesége emlékére. A Fontvieille parkban található kert több ezer rózsatőnek ad otthont, amelyek számos fajtát képviselnek. A területet angolpark stílusban alakították ki, de mediterrán jellegét az olajfák és pálmák is hangsúlyozzák.",
      ro: "Grădina de trandafiri Prințesa Grace a fost creată în 1984 de către Prințul Rainier al III-lea în memoria soției sale. Situată în parcul Fontvieille, găzduiește mii de tufe de trandafiri. Amenajarea respectă principiile unei grădini englezești, păstrând totodată un caracter mediteranean cu măslini și palmieri.",
      en: "The Princess Grace Rose Garden was created in 1984 by Prince Rainier III in memory of his wife. Located within Fontvieille Park, it houses thousands of rose bushes across numerous varieties. The layout follows the principles of an English garden while maintaining a Mediterranean character with olive trees and palms.",
    },
    factsAdvanced: {
      de: ["Beherbergt über 6.000 Rosenstöcke von 300 verschiedenen Sorten.", "Die Gartenanlage erstreckt sich über eine Fläche von 5.000 m².", "Eine Bronzestatue von Prinzessin Gracia steht im Zentrum.", "Der Garten wurde im Jahr 2014 umfassend renoviert.", "Die Rosen sind nach Herkunft und Duftkategorien geordnet.", "Der Eintritt in den Garten ist für die Öffentlichkeit kostenlos."],
      hu: ["Több mint 6000 rózsatő található itt 300 különböző fajtából.", "A kert területe körülbelül 5000 négyzetméter.", "A központban Grácia hercegnő bronzszobra áll.", "A kertet 2014-ben jelentősen felújították és kibővítették.", "A rózsákat származásuk és illatuk alapján csoportosították.", "A kert látogatása ingyenes a nagyközönség számára."],
      ro: ["Găzduiește peste 6.000 de tufe de trandafiri din 300 de soiuri.", "Grădina se întinde pe o suprafață de 5.000 de metri pătrați.", "O statuie din bronz a Prințesei Grace se află în centru.", "Grădina a fost renovată extensiv în anul 2014.", "Trandafirii sunt organizați după origine și categorii de parfum.", "Intrarea în grădină este gratuită pentru public."],
      en: ["Houses over 6,000 rose bushes from 300 different varieties.", "The garden spans an area of approximately 5,000 square meters.", "A bronze statue of Princess Grace stands at the center.", "The garden underwent extensive renovation in 2014.", "Roses are organized by origin and fragrance categories.", "Entrance to the garden is free for the general public."],
    },
  },
  {
    id: "landmark-nmnm",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4361, 43.7455],
    name: { de: "Nouveau Musée National de Monaco", hu: "Monacói Új Nemzeti Múzeum", ro: "Noul Muzeu Național din Monaco", en: "Nouveau Musée National de Monaco" },
    description: {
      de: "Das nationale Museum für zeitgenössische Kunst in Monaco.",
      hu: "Monaco kortárs művészeti nemzeti múzeuma.",
      ro: "Muzeul național de artă contemporană din Monaco.",
      en: "Monaco's national museum for contemporary art."
    },
    facts: {
      de: ["Zwei Standorte: Villa Paloma und Villa Sauber", "Fokus auf zeitgenössisches Erbe", "Wechselnde Ausstellungen", "Wichtige Kulturinstitution"],
      hu: ["Két helyszín: Villa Paloma és Villa Sauber", "Fókuszban a kortárs örökség", "Váltakozó kiállítások", "Fontos kulturális intézmény"],
      ro: ["Două locații: Villa Paloma și Villa Sauber", "Focus pe patrimoniul contemporan", "Expoziții temporare", "Instituție culturală importantă"],
      en: ["Two locations: Villa Paloma and Villa Sauber", "Focus on contemporary heritage", "Rotating exhibitions", "Key cultural institution"]
    }, image: "/poi-images/landmark-nmnm.webp",
    descriptionAdvanced: {
      de: "Das Nouveau Musée National de Monaco (NMNM) präsentiert zeitgenössische Kunst an zwei historischen Standorten: der Villa Sauber und der Villa Paloma. Das Museum widmet sich der Erhaltung des kulturellen Erbes und der Förderung aktueller künstlerischer Ausdrucksformen. Durch wechselnde Ausstellungen werden Themen wie Theater, Mode und moderne Geschichte beleuchtet.",
      hu: "A Monacói Új Nemzeti Múzeum (NMNM) két történelmi helyszínen, a Villa Sauberben és a Villa Palomában mutatja be a kortárs művészetet. A múzeum célja a kulturális örökség megőrzése és a modern művészeti irányzatok népszerűsítése. Az időszaki kiállítások gyakran érintik a színház, a divat és a modern történelem témaköreit.",
      ro: "Noul Muzeu Național din Monaco (NMNM) prezintă artă contemporană în două locații istorice: Villa Sauber și Villa Paloma. Muzeul este dedicat conservării patrimoniului cultural și promovării formelor actuale de expresie artistică. Prin expoziții temporare, sunt abordate teme precum teatrul, moda și istoria modernă.",
      en: "The Nouveau Musée National de Monaco (NMNM) showcases contemporary art across two historic locations: Villa Sauber and Villa Paloma. The museum is dedicated to preserving cultural heritage and promoting current artistic expressions. Through rotating exhibitions, it explores themes such as theater, fashion, and modern history.",
    },
    factsAdvanced: {
      de: ["Die Villa Sauber wurde 2009 als erster Standort eröffnet.", "Die Villa Paloma folgte im Jahr 2010 als zweiter Ausstellungsort.", "Das NMNM besitzt eine bedeutende Sammlung von Theaterautomaten.", "Die Ausstellungen wechseln in der Regel zweimal pro Jahr.", "Villa Paloma verfügt über einen Garten mit Panoramablick.", "Das Museum konzentriert sich auf die Verbindung von Kunst und Wissenschaft."],
      hu: ["A Villa Saubert 2009-ben nyitották meg első helyszínként.", "A Villa Paloma 2010-ben csatlakozott a múzeumhoz.", "Az NMNM jelentős színházi automata-gyűjteménnyel rendelkezik.", "A kiállítások általában évente kétszer cserélődnek.", "A Villa Paloma kertjéből panorámás kilátás nyílik a városra.", "A múzeum a művészet és a tudomány kapcsolatára összpontosít."],
      ro: ["Villa Sauber a fost deschisă în 2009 ca prima locație.", "Villa Paloma a urmat în 2010 ca al doilea spațiu expozițional.", "NMNM deține o colecție importantă de automate teatrale.", "Expozițiile se schimbă, de regulă, de două ori pe an.", "Villa Paloma are o grădină cu vedere panoramică.", "Muzeul se concentrează pe legătura dintre artă și știință."],
      en: ["Villa Sauber opened in 2009 as the first museum location.", "Villa Paloma followed in 2010 as the second exhibition site.", "NMNM holds a significant collection of theatrical automatons.", "Exhibitions typically change twice per year.", "Villa Paloma features a garden with panoramic city views.", "The museum focuses on the intersection of art and science."],
    },
  },
  {
    id: "landmark-metropole-shopping",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4278, 43.7398],
    name: { de: "Metropole Shopping Monte-Carlo", hu: "Metropole Shopping", ro: "Metropole Shopping", en: "Metropole Shopping Monte-Carlo" },
    description: {
      de: "Ein luxuriöses Einkaufszentrum mit prachtvoller Innenausstattung.",
      hu: "Luxus bevásárlóközpont pompás belső térrel.",
      ro: "Un centru comercial de lux cu interioare somptuoase.",
      en: "A luxury shopping center with magnificent interiors."
    },
    facts: {
      de: ["Bekannt für Kristalllüster", "Luxusmarken", "In der Nähe des Casino-Platzes", "Besonderes Ambiente"],
      hu: ["Kristálycsillárjairól ismert", "Luxusmárkák", "A Kaszinó tér közelében", "Különleges atmoszféra"],
      ro: ["Cunoscut pentru lustrele de cristal", "Branduri de lux", "Lângă Piața Cazinoului", "Ambianță deosebită"],
      en: ["Known for crystal chandeliers", "Luxury brands", "Near Casino Square", "Unique atmosphere"]
    }, image: "/poi-images/landmark-metropole-shopping.webp",
    descriptionAdvanced: {
      de: "Das Metropole Shopping Monte-Carlo ist ein luxuriöses Einkaufszentrum im Herzen des Carré d'Or. Es besticht durch seine Architektur mit prunkvollen Marmorböden und prächtigen Kristalllüstern. Besucher finden hier über 80 Boutiquen renommierter internationaler Marken sowie exklusive Restaurants in einem eleganten, klimatisierten Ambiente.",
      hu: "A Metropole Shopping Monte-Carlo egy luxus bevásárlóközpont a Carré d'Or szívében. Az épület elegáns márványpadlóival és hatalmas kristálycsillárjaival tűnik ki a többi közül. A látogatók több mint 80 neves nemzetközi márka üzletét, valamint exkluzív éttermeket találnak a stílusos, légkondicionált környezetben.",
      ro: "Metropole Shopping Monte-Carlo este un centru comercial de lux situat în inima Carré d'Or. Impresionează prin arhitectura sa cu pardoseli de marmură și candelabre de cristal magnifice. Vizitatorii găsesc aici peste 80 de buticuri ale unor mărci internaționale renumite și restaurante exclusive într-un cadru elegant.",
      en: "Metropole Shopping Monte-Carlo is a luxury shopping destination located in the heart of the Carré d'Or. It is renowned for its grand architecture, featuring marble floors and magnificent crystal chandeliers. Visitors can find over 80 boutiques from prestigious international brands and exclusive restaurants in an elegant setting.",
    },
    factsAdvanced: {
      de: ["Das Einkaufszentrum wurde im Jahr 1988 eröffnet.", "Es beherbergt 80 verschiedene Fachgeschäfte und Boutiquen.", "Die Anlage ist über drei Etagen unterirdisch verteilt.", "Zwei riesige Kristalllüster der böhmischen Manufaktur Faustig.", "Direkter Zugang zum benachbarten Hotel Metropole Monte-Carlo.", "Verfügt über ein Parkhaus mit 600 Stellplätzen."],
      hu: ["A bevásárlóközpont 1988-ban nyitotta meg kapuit.", "Összesen 80 különböző szaküzlet és butik található benne.", "A létesítmény három föld alatti szinten terül el.", "Két hatalmas, cseh Faustig kristálycsillár díszíti a belső teret.", "Közvetlen átjárást biztosít a szomszédos Hotel Metropole-ba.", "A parkolóház 600 gépjármű befogadására alkalmas."],
      ro: ["Centrul comercial a fost inaugurat în anul 1988.", "Găzduiește 80 de magazine specializate și buticuri diferite.", "Complexul este dispus pe trei etaje subterane.", "Două candelabre uriașe de cristal de la manufactura Faustig.", "Acces direct la Hotelul Metropole Monte-Carlo adiacent.", "Dispune de o parcare cu o capacitate de 600 de locuri."],
      en: ["The shopping center was inaugurated in 1988.", "It houses 80 different specialty shops and boutiques.", "The facility is spread across three underground levels.", "Features two massive crystal chandeliers by the Faustig company.", "Offers direct access to the adjacent Hotel Metropole Monte-Carlo.", "Includes a parking garage with space for 600 vehicles."],
    },
  },
  {
    id: "landmark-opera-monte-carlo",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4285, 43.7391],
    name: { de: "Oper von Monte-Carlo", hu: "Monte-Carlo Opera", ro: "Opera din Monte-Carlo", en: "Opéra de Monte-Carlo" },
    description: {
      de: "Ein prachtvolles Opernhaus, das Teil des Casino-Komplexes ist.",
      hu: "Pompás operaház, amely a kaszinókomplexum része.",
      ro: "O operă splendidă care face parte din complexul cazinoului.",
      en: "A magnificent opera house that is part of the Casino complex."
    },
    facts: {
      de: ["Inauguriert 1879", "Auch Salle Garnier genannt", "Prachtvolle Vergoldungen", "Hervorragende Akustik"],
      hu: ["1879-ben avatták fel", "Salle Garnier-nek is hívják", "Pompás aranyozás", "Kiváló akusztika"],
      ro: ["Inaugurată în 1879", "Numită și Salle Garnier", "Poleială somptuoasă", "Acustică excelentă"],
      en: ["Inaugurated in 1879", "Also called Salle Garnier", "Lavish gilding", "Excellent acoustics"]
    }, image: "/poi-images/landmark-opera-monte-carlo.webp",
    descriptionAdvanced: {
      de: "Die Opéra de Monte-Carlo, auch Salle Garnier genannt, ist Teil des Kasinokomplexes und wurde von Charles Garnier entworfen. Das 1879 eingeweihte Opernhaus ist ein Meisterwerk der Belle Époque mit reich verzierten Goldornamenten und Fresken. Es dient als prestigeträchtiger Veranstaltungsort für internationale Opernproduktionen und Konzerte.",
      hu: "A Monte-Carlói Operaház, más néven Salle Garnier, a kaszinókomplexum része, és Charles Garnier tervezte. Az 1879-ben felavatott épület a Belle Époque építészet mesterműve, gazdagon díszített aranyozott elemekkel és freskókkal. Az operaház rangos helyszíne nemzetközi operaprodukcióknak és koncerteknek.",
      ro: "Opera din Monte-Carlo, cunoscută și sub numele de Salle Garnier, face parte din complexul cazinoului și a fost proiectată de Charles Garnier. Inaugurată în 1879, opera este o capodoperă a stilului Belle Époque, cu decorațiuni aurite și fresce bogate. Servește ca locație prestigioasă pentru producții de operă și concerte.",
      en: "The Opéra de Monte-Carlo, also known as the Salle Garnier, is part of the casino complex and was designed by Charles Garnier. Inaugurated in 1879, the opera house is a masterpiece of Belle Époque architecture, featuring ornate gold decorations and frescoes. It serves as a prestigious venue for international opera and concerts.",
    },
    factsAdvanced: {
      de: ["Eröffnung am 25. Januar 1879 mit Sarah Bernhardt.", "Der Bau dauerte nur acht Monate und neun Tage.", "Das Auditorium bietet Platz für 524 Zuschauer.", "Bühne bietet Ausblick auf das Mittelmeer durch ein Fenster.", "Charles Garnier entwarf auch die Opéra Garnier in Paris.", "Hier wurden über 45 Weltpremieren von Opern aufgeführt."],
      hu: ["1879. január 25-én nyílt meg Sarah Bernhardt fellépésével.", "Az építkezés mindössze nyolc hónapig és kilenc napig tartott.", "A nézőtér befogadóképessége 524 fő.", "A színpad egyik ablakán keresztül kilátás nyílik a tengerre.", "Charles Garnier tervezte a párizsi Opéra Garnier-t is.", "Eddig több mint 45 opera világpremierjének adott otthont."],
      ro: ["Inaugurată pe 25 ianuarie 1879 cu Sarah Bernhardt.", "Construcția a durat doar opt luni și nouă zile.", "Auditoriul are o capacitate de 524 de spectatori.", "Scena oferă o vedere spre Marea Mediterană printr-o fereastră.", "Charles Garnier a proiectat și Opéra Garnier din Paris.", "Aici au avut loc peste 45 de premiere mondiale de operă."],
      en: ["Opened on January 25, 1879, featuring Sarah Bernhardt.", "The construction took only eight months and nine days.", "The auditorium has a seating capacity of 524 spectators.", "The stage features a window with a view of the Mediterranean.", "Charles Garnier also designed the Opéra Garnier in Paris.", "More than 45 world premieres of operas have been staged here."],
    },
  },
  {
    id: "landmark-yacht-club",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4251, 43.7368],
    name: { de: "Yacht Club de Monaco", hu: "Monacói Yacht Klub", ro: "Yacht Club de Monaco", en: "Yacht Club de Monaco" },
    description: {
      de: "Der exklusive Yachtclub von Monaco in einem modernen Gebäude von Norman Foster.",
      hu: "Monaco exkluzív yacht klubja Norman Foster modern épületében.",
      ro: "Clubul nautic exclusivist din Monaco într-o clădire modernă de Norman Foster.",
      en: "Monaco's exclusive yacht club in a modern building by Norman Foster."
    },
    facts: {
      de: ["Gegründet 1953 von Fürst Rainier III.", "Gebäude ähnelt einem Kreuzfahrtschiff", "Zentrum der internationalen Segelszene", "Exklusiv für Mitglieder"],
      hu: ["III. Rainier herceg alapította 1953-ban", "Az épület egy luxushajóra hasonlít", "A nemzetközi vitorlázás központja", "Csak tagoknak"],
      ro: ["Fondat în 1953 de Prințul Rainier III", "Clădirea seamănă cu un vas de croazieră", "Centrul scenei internaționale de iahting", "Exclusiv pentru membrii"],
      en: ["Founded in 1953 by Prince Rainier III", "Building resembles a cruise ship", "Center of the international sailing scene", "Exclusive to members"]
    },
    descriptionAdvanced: {
      de: "Der Yacht Club de Monaco wurde 1953 von Fürst Rainier III. gegründet und ist einer der exklusivsten Yachtclubs weltweit. Sein modernes Hauptgebäude, entworfen von Lord Norman Foster, erinnert an ein großes Schiff am Kai. Der Club spielt eine zentrale Rolle im maritimen Leben Monacos und fördert den Erhalt nautischer Traditionen.",
      hu: "A Monacói Yacht Clubot 1953-ban alapította III. Rainier herceg, és a világ egyik legexkluzívabb vitorlás klubjaként tartják számon. Modern főépülete, amelyet Lord Norman Foster tervezett, egy hatalmas hajóra emlékeztet a parton. A klub központi szerepet játszik Monaco tengeri életében és a hajózási hagyományok őrzésében.",
      ro: "Yacht Club de Monaco a fost fondat în 1953 de Prințul Rainier al III-lea și este unul dintre cele mai exclusive cluburi nautice din lume. Clădirea sa principală modernă, proiectată de Lord Norman Foster, seamănă cu o navă mare la chei. Clubul joacă un rol central în viața maritimă din Monaco și promovează tradițiile nautice.",
      en: "The Yacht Club de Monaco was founded in 1953 by Prince Rainier III and is one of the most exclusive yacht clubs in the world. Its modern headquarters, designed by Lord Norman Foster, resembles a large ship docked at the quay. The club plays a central role in Monaco's maritime life and promotes nautical traditions.",
    },
    factsAdvanced: {
      de: ["Das neue Clubhaus wurde im Juni 2014 eingeweiht.", "Der Club hat über 2.500 Mitglieder aus 73 Nationen.", "Ausrichter der jährlichen Monaco Classic Week.", "Das Gebäude verfügt über 26.000 m² Nutzfläche.", "Beherbergt die Segelschule 'La Belle Classe'.", "Präsident des Clubs ist seit 1984 Fürst Albert II."],
      hu: ["Az új klubházat 2014 júniusában adták át.", "A klubnak több mint 2500 tagja van 73 országból.", "A kétévente megrendezett Monaco Classic Week házigazdája.", "Az épület 26 000 négyzetméternyi hasznos területtel rendelkezik.", "Itt működik a 'La Belle Classe' vitorlásiskola.", "A klub elnöke 1984 óta II. Albert herceg."],
      ro: ["Noua clădire a clubului a fost inaugurată în iunie 2014.", "Clubul are peste 2.500 de membri din 73 de națiuni.", "Organizator al evenimentului anual Monaco Classic Week.", "Clădirea are o suprafață utilă de 26.000 mp.", "Găzduiește școala de navigație 'La Belle Classe'.", "Președintele clubului este, din 1984, Prințul Albert al II-lea."],
      en: ["The new clubhouse was inaugurated in June 2014.", "The club has over 2,500 members from 73 different nations.", "Host of the biennial Monaco Classic Week event.", "The building features 26,000 square meters of floor space.", "Home to 'La Belle Classe' sailing school.", "Prince Albert II has been the club's president since 1984."],
    },
  },
  {
    id: "landmark-saint-martin-gardens",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4241, 43.7303],
    name: { de: "Gärten von Saint-Martin", hu: "Szent Márton kertek", ro: "Grădinile Saint-Martin", en: "Saint-Martin Gardens" },
    description: {
      de: "Die ersten öffentlichen Gärten von Monaco auf dem Felsen.",
      hu: "Monaco első nyilvános kertjei a Sziklán.",
      ro: "Primele grădini publice din Monaco pe Stâncă.",
      en: "Monaco's first public gardens located on the Rock."
    },
    facts: {
      de: ["Liegen zwischen dem Ozeanographischen Museum und der Kathedrale", "Mediterrane Flora", "Skulpturen und Denkmäler", "Panoramablick auf die Küste"],
      hu: ["Az Oceanográfiai Múzeum és a Katedrális között fekszenek", "Mediterrán flóra", "Szobrok és emlékművek", "Panorámás kilátás a partra"],
      ro: ["Situate între Muzeul Oceanografic și Catedrală", "Floră mediteraneană", "Sculpturi și monumente", "Vedere panoramică spre coastă"],
      en: ["Located between the Oceanographic Museum and the Cathedral", "Mediterranean flora", "Sculptures and monuments", "Panoramic coast views"]
    },
    descriptionAdvanced: {
      de: "Die Gärten von Saint-Martin erstrecken sich entlang der Klippen des Felsens von Monaco (Le Rocher). Sie wurden im 19. Jahrhundert angelegt und bieten verschlungene Pfade zwischen mediterraner und exotischer Flora. Neben der botanischen Vielfalt finden Besucher hier zahlreiche Skulpturen und spektakuläre Ausblicke auf das Mittelmeer.",
      hu: "A Saint-Martin kertek a monacói szikla (Le Rocher) szélén, a sziklafal mentén húzódnak. A 19. században kialakított park kanyargós ösvényei mediterrán és egzotikus növényvilágot mutatnak be. A botanikai változatosság mellett számos szobor és a Földközi-tengerre nyíló látványos kilátópontok várják a látogatókat.",
      ro: "Grădinile Saint-Martin se întind de-a lungul stâncilor de pe Le Rocher (Stânca Monaco). Au fost amenajate în secolul al XIX-lea și oferă poteci șerpuite printre flora mediteraneană și exotică. Pe lângă diversitatea botanică, vizitatorii găsesc aici numeroase sculpturi și vederi spectaculoase spre Marea Mediterană.",
      en: "The Saint-Martin Gardens stretch along the edge of the Rock of Monaco (Le Rocher). Established in the 19th century, these gardens offer winding paths through Mediterranean and exotic flora. Alongside botanical diversity, visitors can find numerous sculptures and spectacular viewpoints overlooking the Mediterranean Sea.",
    },
    factsAdvanced: {
      de: ["Die Anlage wurde im Jahr 1816 während einer Hungersnot begonnen.", "Es war der erste öffentliche Garten des Fürstentums.", "Eine Statue von Fürst Albert I. blickt auf das Meer.", "Die Gärten befinden sich zwischen dem Ozeanographischen Museum und der Kathedrale.", "Hier wachsen seltene Arten wie Aleppo-Kiefern und Steineichen.", "Zahlreiche archäologische Funde wurden auf diesem Gelände entdeckt."],
      hu: ["A munkálatokat 1816-ban, egy éhínség idején kezdték el.", "Ez volt a hercegség első nyilvános kertje.", "I. Albert herceg szobra a tengert nézi a kertben.", "A kertek az Óceánográfiai Múzeum és a Székesegyház között fekszenek.", "Ritka fajok, például aleppói fenyők és magyaltölgyek is élnek itt.", "A területen számos régészeti leletet tártak fel."],
      ro: ["Amenajarea a început în anul 1816, în timpul unei foamete.", "A fost prima grădină publică din Principat.", "O statuie a Prințului Albert I privește spre mare.", "Grădinile sunt situate între Muzeul Oceanografic și Catedrală.", "Aici cresc specii rare, precum pinii de Alep și stejarii de piatră.", "Numeroase descoperiri arheologice au fost făcute pe acest teren."],
      en: ["Work on the gardens began in 1816 during a period of famine.", "It was the first public garden established in the Principality.", "A statue of Prince Albert I stands overlooking the sea.", "The gardens are located between the Oceanographic Museum and the Cathedral.", "Home to rare species such as Aleppo pines and holm oaks.", "Numerous archaeological artifacts were discovered on this site."],
    },
  },
  {
    id: "landmark-champions-promenade",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4321, 43.7421],
    name: { de: "Champion's Promenade", hu: "Bajnokok sétánya", ro: "Champion's Promenade", en: "Champion's Promenade" },
    description: {
      de: "Ein 'Walk of Fame' für die weltbesten Fußballer.",
      hu: "A világ legjobb labdarúgóinak 'hírességek sétánya'.",
      ro: "Un 'Walk of Fame' pentru cei mai buni fotbaliști din lume.",
      en: "A 'Walk of Fame' for the world's best football players."
    },
    facts: {
      de: ["Fußabdrücke berühmter Spieler", "In der Nähe des Grimaldi Forums", "Verliehen durch die Golden Foot Awards", "Eingeweiht 2003"],
      hu: ["Híres játékosok lábnyomai", "A Grimaldi Forum közelében", "A Golden Foot Awards díjazottjai", "2003-ban adták át"],
      ro: ["Amprentele picioarelor unor jucători celebri", "Lângă Grimaldi Forum", "Acordate prin Golden Foot Awards", "Inaugurată în 2003"],
      en: ["Footprints of famous players", "Near the Grimaldi Forum", "Awarded via Golden Foot Awards", "Inaugurated in 2003"]
    }, image: "/poi-images/landmark-champions-promenade.webp",
    descriptionAdvanced: {
      de: "Die Champions Promenade ist Monacos Äquivalent zum Hollywood Walk of Fame, jedoch für Fußballlegenden. Sie befindet sich am Ufer von Fontvieille in der Nähe des Grimaldi Forums. Berühmte Spieler hinterlassen hier ihre Fußabdrücke in Bronze, um ihre sportlichen Leistungen und ihren Beitrag zum Weltfußball dauerhaft zu würdigen.",
      hu: "A Bajnokok Sétánya Monaco válasza a hollywoodi Hírességek Sétányára, de kifejezetten a labdarúgás legendái számára. A sétány Fontvieille partján, a Grimaldi Forum közelében található. Híres játékosok bronzba öntött lábnyomai láthatók itt, amelyek sportteljesítményük és a világfutballhoz való hozzájárulásuk előtt tisztelegnek.",
      ro: "Promenada Campionilor este echivalentul din Monaco pentru Hollywood Walk of Fame, dar dedicat legendelor fotbalului. Este situată pe malul mării în Fontvieille, lângă Grimaldi Forum. Jucători celebri își lasă aici amprentele picioarelor în bronz, pentru a onora realizările lor sportive în fotbalul mondial.",
      en: "The Champion's Promenade is Monaco's equivalent of the Hollywood Walk of Fame, but specifically for football legends. Located along the waterfront in Fontvieille near the Grimaldi Forum, it features the footprints of famous players cast in bronze to honor their sporting achievements and contributions to world football.",
    },
    factsAdvanced: {
      de: ["Die Promenade wurde im Jahr 2003 eingeweiht.", "Erster Preisträger des Golden Foot war Roberto Baggio.", "Beinhaltet Fußabdrücke von Pelé, Maradona und Zidane.", "Jedes Jahr wird ein neuer 'Golden Foot' Award verliehen.", "Die Preisträger müssen mindestens 28 Jahre alt sein.", "Die Fußabdrücke sind entlang der Promenade in den Boden eingelassen."],
      hu: ["A sétányt 2003-ban avatták fel.", "Az első Golden Foot-díjas Roberto Baggio volt.", "Pelé, Maradona és Zidane lábnyomai is megtalálhatók itt.", "Minden évben egy új 'Golden Foot' díjat adnak át.", "A díjazottaknak legalább 28 évesnek kell lenniük.", "A lábnyomok bronzlemezeken, a járdába süllyesztve láthatók."],
      ro: ["Promenada a fost inaugurată în anul 2003.", "Primul câștigător al premiului Golden Foot a fost Roberto Baggio.", "Include amprentele lui Pelé, Maradona și Zidane.", "În fiecare an se acordă un nou premiu 'Golden Foot'.", "Câștigătorii trebuie să aibă vârsta de cel puțin 28 de ani.", "Amprentele sunt încastrate în sol de-a lungul promenadei."],
      en: ["The promenade was inaugurated in 2003.", "The first recipient of the Golden Foot award was Roberto Baggio.", "Features footprints of Pelé, Maradona, and Zidane.", "A new 'Golden Foot' award is presented annually.", "Winners must be active players of at least 28 years of age.", "The footprints are set in bronze plaques along the walkway."],
    },
  },
  {
    id: "landmark-zoological-garden",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4192, 43.7291],
    name: { de: "Zoologischer Garten von Monaco", hu: "Monacói Állatkert", ro: "Grădina Zoologică din Monaco", en: "Monaco Zoological Garden" },
    description: {
      de: "Ein kleiner Zoo am Hang des Felsens von Monaco.",
      hu: "Kis állatkert a monacói Szikla oldalában.",
      ro: "O mică grădină zoologică pe versantul Stâncii din Monaco.",
      en: "A small zoo located on the side of the Rock of Monaco."
    },
    facts: {
      de: ["Gegründet 1954 von Fürst Rainier III.", "Beherbergt Tiere aus illegalem Handel oder Spenden", "Überblickt den Hafen von Fontvieille", "Spezialisiert auf exotische Vögel und Primaten"],
      hu: ["III. Rainier herceg alapította 1954-ben", "Illegális kereskedelemből mentett vagy ajándékozott állatok", "Kilátás Fontvieille kikötőjére", "Egzotikus madarakra és főemlősökre szakosodott"],
      ro: ["Fondată în 1954 de Prințul Rainier III", "Găzduiește animale provenite din trafic ilegal sau donații", "Vedere spre portul Fontvieille", "Specializată pe păsări exotice și primate"],
      en: ["Founded in 1954 by Prince Rainier III", "Houses animals rescued from illegal trade or donations", "Overlooks Fontvieille harbor", "Specializes in exotic birds and primates"]
    }, image: "/poi-images/landmark-zoological-garden.webp",
    descriptionAdvanced: {
      de: "Der Zoologische Garten von Monaco, 1954 von Fürst Rainier III. gegründet, klammert sich an die Südwand des Felsens von Monaco. Der Tierpark zeichnet sich dadurch aus, dass fast alle seine Bewohner aus Spenden oder Rettungsaktionen stammen. Er bietet ein Refugium für über 250 Tiere inmitten einer üppigen mediterranen Vegetation.",
      hu: "A Monacói Állatkertet 1954-ben alapította III. Rainier herceg a monacói szikla déli oldalán. A park különlegessége, hogy szinte minden lakója adományokból vagy mentési akciókból származik. Több mint 250 állatnak nyújt menedéket a buja mediterrán növényzet közepette, rálátással a fontvieille-i kikötőre.",
      ro: "Grădina Zoologică din Monaco, fondată în 1954 de Prințul Rainier al III-lea, este situată pe versantul sudic al Stâncii Monaco. Parcul se remarcă prin faptul că aproape toți locuitorii săi provin din donații sau acțiuni de salvare. Oferă un refugiu pentru peste 250 de animale în mijlocul unei vegetații mediteraneene luxuriante.",
      en: "The Monaco Zoological Garden, founded in 1954 by Prince Rainier III, is perched on the southern flank of the Rock of Monaco. The park is unique because almost all its inhabitants were either donated or rescued. It provides a sanctuary for over 250 animals amidst lush Mediterranean vegetation overlooking Fontvieille harbor.",
    },
    factsAdvanced: {
      de: ["Beherbergt etwa 50 verschiedene Tierarten.", "Kein Tier wurde jemals für den Zoo gekauft.", "Die Anlage erstreckt sich über mehrere Terrassenstufen.", "Bietet einen Blick auf den Hafen von Fontvieille.", "Hier leben Affen, Schildkröten, Vögel und Reptilien.", "Nach dem Tod oder der Genesung werden Tiere oft ausgewildert."],
      hu: ["Körülbelül 50 különböző állatfaj él itt.", "Soha egyetlen állatot sem vásároltak a kert számára.", "A létesítmény több teraszos szinten terül el.", "Kiváló kilátást nyújt a fontvieille-i kikötőre.", "Majmok, teknősök, madarak és hüllők is lakják.", "Gyógyulás után az állatokat gyakran visszaengedik a természetbe."],
      ro: ["Găzduiește aproximativ 50 de specii diferite de animale.", "Niciun animal nu a fost cumpărat vreodată pentru grădină.", "Instalația se întinde pe mai multe niveluri de terase.", "Oferă o vedere panoramică asupra portului Fontvieille.", "Aici trăiesc maimuțe, țestoase, păsări și reptile.", "După vindecare, animalele sunt adesea returnate în mediul lor."],
      en: ["Houses approximately 50 different species of animals.", "No animal has ever been purchased for the collection.", "The facility is built across several terraced levels.", "Offers views overlooking the Port of Fontvieille.", "Residents include monkeys, tortoises, birds, and reptiles.", "Animals are often returned to the wild after recovery."],
    },
  },
  {
    id: "landmark-place-du-casino",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4278, 43.7391],
    name: { de: "Casino-Platz", hu: "Kaszinó tér", ro: "Piața Cazinoului", en: "Casino Square" },
    description: {
      de: "Der zentrale Platz von Monte-Carlo, umgeben von legendären Gebäuden.",
      hu: "Monte-Carlo központi tere, legendás épületekkel körülvéve.",
      ro: "Piața centrală din Monte-Carlo, înconjurată de clădiri legendare.",
      en: "The central square of Monte-Carlo, surrounded by legendary buildings."
    },
    facts: {
      de: ["Ort zum Sehen und Gesehenwerden", "Hôtel de Paris und Café de Paris befinden sich hier", "Zentrum des gesellschaftlichen Lebens", "Oft voller Luxusautos"],
      hu: ["A társasági élet középpontja", "Itt található a Hôtel de Paris és a Café de Paris", "A közösségi élet központja", "Gyakran tele luxusautókkal"],
      ro: ["Locul unde să vezi și să fii văzut", "Hôtel de Paris și Café de Paris se află aici", "Centrul vieții sociale", "Adesea plină de mașini de lux"],
      en: ["The place to see and be seen", "Hôtel de Paris and Café de Paris are located here", "Center of social life", "Often filled with luxury cars"]
    },
    descriptionAdvanced: {
      de: "Der Place du Casino ist das pulsierende Herz von Monte-Carlo und einer der berühmtesten Plätze der Welt. Er wird vom legendären Casino de Monte-Carlo, dem Hotel de Paris und dem Café de Paris gesäumt. Der Platz ist ein Symbol für Luxus und Eleganz, geprägt von exklusiven Automobilen und einer perfekt gepflegten Gartenanlage.",
      hu: "A Place du Casino Monte-Carlo lüktető szíve és a világ egyik leghíresebb tere. Olyan ikonikus épületek veszik körül, mint a Monte-Carlói Kaszinó, a Hotel de Paris és a Café de Paris. A tér a luxus és az elegancia szimbóluma, ahol exkluzív autók és tökéletesen gondozott kertek határozzák meg a hangulatot.",
      ro: "Place du Casino este inima vibrantă a cartierului Monte-Carlo și una dintre cele mai faimoase piețe din lume. Este mărginită de legendarul Cazinou, Hotel de Paris și Café de Paris. Piața este un simbol al luxului și eleganței, fiind marcată de automobile exclusive și de o grădină perfect întreținută.",
      en: "The Place du Casino is the vibrant heart of Monte-Carlo and one of the most famous squares in the world. It is surrounded by the legendary Casino de Monte-Carlo, the Hôtel de Paris, and the Café de Paris. The square serves as a symbol of luxury and elegance, characterized by exclusive cars and perfectly manicured gardens.",
    },
    factsAdvanced: {
      de: ["Der Platz wurde im 19. Jahrhundert im Rahmen der Stadtentwicklung angelegt.", "Zentrum der Formel-1-Rennstrecke von Monaco.", "Verfügt über den 'Sky Mirror' von Anish Kapoor.", "Die Gärten wurden 2020 umfassend modernisiert.", "Hier befindet sich der berühmte kreisförmige Springbrunnen.", "Zahlreiche Luxusmarken haben hier ihre Flagship-Stores."],
      hu: ["A teret a 19. században alakították ki a városfejlesztés részeként.", "A monacói Forma-1-es versenypálya egyik központi szakasza.", "Itt található Anish Kapoor 'Sky Mirror' nevű szobra.", "A kerteket 2020-ban jelentősen korszerűsítették.", "A tér közepén található a híres kör alakú szökőkút.", "Számos luxusmárka zászlóshajó üzlete található a környéken."],
      ro: ["Piața a fost creată în secolul al XIX-lea ca parte a dezvoltării urbane.", "Punct central pe traseul de Formula 1 din Monaco.", "Găzduiește sculptura 'Sky Mirror' realizată de Anish Kapoor.", "Grădinile au fost modernizate extensiv în anul 2020.", "Aici se află faimoasa fântână arteziană circulară.", "Numeroase mărci de lux au magazine emblematice aici."],
      en: ["The square was created in the 19th century during urban expansion.", "A central point on the Monaco Formula 1 Grand Prix circuit.", "Features the 'Sky Mirror' sculpture by artist Anish Kapoor.", "The gardens underwent extensive modernization in 2020.", "Home to the famous circular fountain at the center.", "Numerous luxury brands have their flagship stores around the square."],
    },
  },
  {
    id: "landmark-f1-hairpin",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4298, 43.7401],
    name: { de: "Fairmont-Haarnadelkurve", hu: "Fairmont hajtűkanyar", ro: "Acul de păr Fairmont", en: "Fairmont Hairpin" },
    description: {
      de: "Die langsamste und berühmteste Kurve im Formel-1-Kalender.",
      hu: "A Forma-1-es versenynaptár leglassabb és leghíresebb kanyarja.",
      ro: "Cea mai lentă și celebră curbă din calendarul de Formula 1.",
      en: "The slowest and most famous corner in the Formula 1 calendar."
    },
    facts: {
      de: ["Teil des Monaco Grand Prix", "Spektakuläre Überholmanöver", "Früher als Loews-Kurve bekannt", "Extremer Lenkeinschlag erforderlich"],
      hu: ["A Monacói Nagydíj része", "Látványos előzések helyszíne", "Korábban Loews-kanyarként ismerték", "Extrém kormányzást igényel"],
      ro: ["Parte a Marelui Premiu din Monaco", "Depășiri spectaculoase", "Cunoscută anterior sub numele de curba Loews", "Necesită bracaj maxim"],
      en: ["Part of the Monaco Grand Prix", "Site of spectacular overtakes", "Formerly known as Loews corner", "Requires extreme steering input"]
    },
    descriptionAdvanced: {
      de: "Die Fairmont-Haarnadelkurve ist die langsamste und zugleich eine der spektakulärsten Passagen des Großen Preises von Monaco. Sie befindet sich vor dem Fairmont Hotel und erfordert von den Fahrern höchste Präzision und maximale Lenkeinschläge. Die Kurve bietet Fans und Fotografen eine einzigartige Gelegenheit, die Rennwagen aus nächster Nähe zu beobachten.",
      hu: "A Fairmont-tűkanyar a monacói nagydíj leglassabb, ugyanakkor egyik leglátványosabb szakasza. A Fairmont Hotel előtt található kanyar maximális kormányelfordítást és rendkívüli precizitást igényel a versenyzőktől. Ez a pont egyedülálló lehetőséget kínál a rajongóknak és fotósoknak az autók közeli megfigyelésére.",
      ro: "Acul de păr Fairmont este cea mai lentă și, în același timp, una dintre cele mai spectaculoase porțiuni ale Marelui Premiu de Formula 1 din Monaco. Situat în fața hotelului Fairmont, necesită precizie maximă și viraj complet din partea piloților. Curba oferă o oportunitate unică de a observa mașinile de curse de aproape.",
      en: "The Fairmont Hairpin is the slowest and one of the most spectacular sections of the Monaco Grand Prix circuit. Located in front of the Fairmont Hotel, it requires maximum steering lock and extreme precision from drivers. The curve offers fans and photographers a unique opportunity to see the racing cars at close range.",
    },
    factsAdvanced: {
      de: ["Die Rennwagen fahren hier mit etwa 45 bis 50 km/h.", "Früher war sie als Station- oder Loews-Haarnadel bekannt.", "Engste Kurve im gesamten Formel-1-Rennkalender.", "Das Gefälle der Straße macht die Anfahrt technisch anspruchsvoll.", "Während des Rennens ist sie ein Brennpunkt für Überholmanöver.", "Die Kurve ist das ganze Jahr über als normale Straße befahrbar."],
      hu: ["A versenyautók itt körülbelül 45-50 km/h sebességgel haladnak.", "Korábban Station vagy Loews tűkanyarként volt ismert.", "A teljes Forma-1-es versenynaptár legszűkebb kanyarja.", "Az út lejtése technikailag nehézzé teszi a megközelítését.", "A futam alatt az előzési kísérletek egyik fókuszpontja.", "A kanyar az év többi részében közútként funkcionál."],
      ro: ["Mașinile de curse circulă aici cu aproximativ 45-50 km/h.", "În trecut, era cunoscută sub numele de Station sau Loews Hairpin.", "Cea mai strânsă curbă din întregul calendar de Formula 1.", "Înclinația drumului face abordarea tehnic dificilă.", "În timpul cursei, este un punct critic pentru manevre de depășire.", "Curba este circulabilă ca drum public în restul anului."],
      en: ["Racing cars navigate this turn at approximately 45 to 50 km/h.", "Previously known as the Station or Loews Hairpin.", "The tightest corner on the entire Formula 1 racing calendar.", "The road's incline makes the approach technically challenging.", "A frequent hotspot for overtaking maneuvers during the race.", "The curve remains open to regular traffic throughout the year."],
    },
  },
  {
    id: "landmark-stade-nautique",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4221, 43.7361],
    name: { de: "Stade Nautique Rainier III", hu: "Rainier III vízi stadion", ro: "Stadionul Nautic Rainier III", en: "Stade Nautique Rainier III" },
    description: {
      de: "Ein beheiztes Freibad mit Salzwasser am Port Hercules.",
      hu: "Fűtött sós vizes szabadtéri úszómedence a Port Herculesnél.",
      ro: "O piscină în aer liber cu apă de mare încălzită la Port Hercules.",
      en: "A heated saltwater outdoor swimming pool at Port Hercules."
    },
    facts: {
      de: ["Im Winter eine Eislaufbahn", "Blick auf die Superyachten", "Teil des Grand-Prix-Kurses", "Olympische Ausmaße"],
      hu: ["Télen korcsolyapálya", "Kilátás a szuperjachtokra", "A nagydíj pálya része", "Olimpiai méretű"],
      ro: ["Patinoar pe timp de iarnă", "Vedere spre super-iahturi", "Parte a circuitului de Mare Premiu", "Dimensiuni olimpice"],
      en: ["Ice rink in winter", "Views of superyachts", "Part of the Grand Prix course", "Olympic dimensions"]
    }, image: "/poi-images/landmark-stade-nautique.webp",
    descriptionAdvanced: {
      de: "Das Stade Nautique Rainier III ist ein beeindruckendes Freibad direkt am Port Hercule. Während der Sommermonate verwandelt sich dieser Teil des Hafens in ein beheiztes Schwimmbecken mit olympischen Maßen und Sprungbrettern. Im Winter wird die Anlage auf innovative Weise in eine Eislaufbahn umfunktioniert, was sie zu einem ganzjährigen Freizeitzentrum macht.",
      hu: "A III. Rainier vízi stadion egy lenyűgöző szabadtéri úszókomplexum közvetlenül a Hercule kikötőben. A nyári hónapokban a kikötő ezen része fűtött, olimpiai méretű úszómedencévé alakul, ugródeszkákkal kiegészítve. Télen a létesítményt innovatív módon jégpályává alakítják, így egész évben kikapcsolódást nyújt.",
      ro: "Stadionul Nautic Rainier al III-lea este un complex de înot în aer liber situat direct în Port Hercule. În lunile de vară, această parte a portului se transformă într-o piscină încălzită de dimensiuni olimpice, dotată cu trambuline. Iarna, instalația este transformată într-un patinoar, devenind un centru de agrement permanent.",
      en: "The Stade Nautique Rainier III is an impressive outdoor swimming complex located directly on Port Hercule. During the summer months, this section of the harbor transforms into a heated Olympic-sized swimming pool with diving boards. In winter, the facility is innovatively converted into an ice rink, making it a year-round leisure hub.",
    },
    factsAdvanced: {
      de: ["Das beheizte Schwimmbecken enthält gefiltertes Meerwasser.", "Die Sprungtürme bieten Höhen von 1, 3, 5 und 10 Metern.", "Die Wasserfläche beträgt rund 1.000 Quadratmeter.", "Wassertemperatur wird konstant auf 27 Grad Celsius gehalten.", "Die Eislaufbahn im Winter umfasst eine Fläche von 1.000 m².", "Eingeweiht wurde die Anlage im Jahr 1961."],
      hu: ["A fűtött úszómedence szűrt tengervízzel van feltöltve.", "Az ugrótornyok 1, 3, 5 és 10 méteres magasságúak.", "A vízfelület nagysága körülbelül 1000 négyzetméter.", "A víz hőmérsékletét folyamatosan 27 Celsius-fokon tartják.", "A téli jégpálya alapterülete szintén 1000 négyzetméter.", "A létesítményt 1961-ben adták át."],
      ro: ["Piscina încălzită conține apă de mare filtrată.", "Trambulinele oferă înălțimi de 1, 3, 5 și 10 metri.", "Suprafața apei este de aproximativ 1.000 de metri pătrați.", "Temperatura apei este menținută constant la 27 de grade Celsius.", "Patinoarul de iarnă acoperă o suprafață de 1.000 mp.", "Complexul a fost inaugurat în anul 1961."],
      en: ["The heated swimming pool uses filtered seawater.", "Diving boards are available at heights of 1, 3, 5, and 10 meters.", "The water surface area covers approximately 1,000 square meters.", "Water temperature is consistently maintained at 27 degrees Celsius.", "The winter ice rink occupies a 1,000-square-meter area.", "The facility was originally inaugurated in 1961."],
    },
  },
  {
    id: "landmark-stamp-museum",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4188, 43.7318],
    name: { de: "Briefmarken- und Münzmuseum", hu: "Bélyeg- és érmemúzeum", ro: "Muzeul de timbre și monede", en: "Museum of Stamps and Coins" },
    description: {
      de: "Ein Museum, das die philatelistische und numismatische Geschichte Monacos zeigt.",
      hu: "Monaco filatéliai és numizmatikai történetét bemutató múzeum.",
      ro: "Un muzeu care prezintă istoria filatelică și numismatică a Monaco.",
      en: "A museum showcasing the philatelic and numismatic history of Monaco."
    },
    facts: {
      de: ["Seltene Briefmarken von Monaco", "Münzen seit 1640", "Befindet sich in Fontvieille", "Gegründet 1996"],
      hu: ["Ritka monacói bélyegek", "Érmék 1640-től kezdve", "Fontvieille-ben található", "1996-ban alapították"],
      ro: ["Timbre rare din Monaco", "Monede din 1640", "Situat în Fontvieille", "Fondat în 1996"],
      en: ["Rare Monaco stamps", "Coins dating back to 1640", "Located in Fontvieille", "Founded in 1996"]
    }, image: "/poi-images/landmark-stamp-museum.webp",
    descriptionAdvanced: {
      de: "Das Briefmarken- und Münzmuseum von Monaco befindet sich im Stadtteil Fontvieille und beherbergt die Privatsammlungen von Fürst Rainier III. Die Ausstellung zeigt seltene philatelistische Schätze und numismatische Stücke, die die Geschichte des Fürstentums dokumentieren. Es gilt als eine der bedeutendsten Sammlungen ihrer Art weltweit.",
      hu: "A Monacói Bélyeg- és Érmemúzeum Fontvieille negyedben található, és III. Rainier herceg magángyűjteményének ad otthont. A kiállítás ritka filatéliai kincseket és numizmatikai darabokat mutat be, amelyek a hercegség történetét dokumentálják. A gyűjtemény a világ egyik legjelentősebb ilyen jellegű tárlatának számít.",
      ro: "Muzeul de Timbre și Monede din Monaco este situat în districtul Fontvieille și găzduiește colecțiile private ale Prințului Rainier al III-lea. Expoziția prezintă comori filatelice rare și piese numismatice care documentează istoria Principatului. Este considerată una dintre cele mai importante colecții de acest tip din lume.",
      en: "The Museum of Stamps and Coins in Monaco is located in the Fontvieille district and houses the private collections of Prince Rainier III. The exhibition showcases rare philatelic treasures and numismatic pieces that document the Principality's history. It is regarded as one of the most significant collections of its kind globally.",
    },
    factsAdvanced: {
      de: ["Das Museum wurde im Jahr 1995 eröffnet.", "Beinhaltet die ersten Briefmarken Monacos aus dem Jahr 1885.", "Gezeigt werden Münzen des Fürstentums seit 1640.", "Verfügt über seltene Farbregister und Druckplatten.", "Hier wird die prestigeträchtige Ausstellung 'MonacoPhil' abgehalten.", "Die Sammlung umfasst auch Medaillen und historische Dokumente."],
      hu: ["A múzeumot 1995-ben nyitották meg a nagyközönség előtt.", "Itt őrzik Monaco első, 1885-ös kiadású bélyegeit.", "A hercegség 1640 óta vert érméit is bemutatják.", "Ritka színregiszterek és nyomólemezek is láthatók.", "Itt rendezik meg a rangos 'MonacoPhil' kiállítást.", "A gyűjtemény érmeket és történelmi dokumentumokat is tartalmaz."],
      ro: ["Muzeul a fost deschis în anul 1995.", "Include primele timbre din Monaco, datând din 1885.", "Sunt expuse monede ale Principatului emise începând cu 1640.", "Deține registre de culori rare și plăci de imprimare.", "Găzduiește prestigioasa expoziție internațională 'MonacoPhil'.", "Colecția cuprinde, de asemenea, medalii și documente istorice."],
      en: ["The museum was officially opened in 1995.", "Contains Monaco's first postage stamps from 1885.", "Displays coins from the Principality dating back to 1640.", "Features rare color registers and original printing plates.", "Host venue for the prestigious 'MonacoPhil' exhibition.", "The collection includes medals and historical documents."],
    },
  },
  {
    id: "landmark-theatre-princess-grace",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4288, 43.7428],
    name: { de: "Théâtre Princesse Grace", hu: "Grace hercegnő színház", ro: "Teatrul Princess Grace", en: "Princess Grace Theatre" },
    description: {
      de: "Ein wichtiges kulturelles Zentrum und Theater in Monaco.",
      hu: "Fontos kulturális központ és színház Monacóban.",
      ro: "Un important centru cultural și teatru din Monaco.",
      en: "A major cultural center and theatre in Monaco."
    },
    facts: {
      de: ["Eingeweiht 1981", "Befindet sich am Boulevard d'Italie", "Vielseitiges Programm", "Ehemals Cinema des Beaux-Arts"],
      hu: ["1981-ben avatták fel", "A Boulevard d'Italie-n található", "Változatos program", "Egykor Cinema des Beaux-Arts"],
      ro: ["Inaugurat în 1981", "Situat pe Boulevard d'Italie", "Program diversificat", "Fostul Cinema des Beaux-Arts"],
      en: ["Inaugurated in 1981", "Located on Boulevard d'Italie", "Diverse programming", "Formerly Cinema des Beaux-Arts"]
    }, image: "/poi-images/landmark-theatre-princess-grace.webp",
    descriptionAdvanced: {
      de: "Das Princess Grace Theatre wurde 1981 eingeweiht und ist ein bedeutendes Kulturzentrum für darstellende Künste in Monaco. Es wurde von Prinzessin Gracia selbst initiiert, um das kulturelle Leben im Fürstentum zu bereichern. Das Programm umfasst ein breites Spektrum von klassischem Theater über Komödien bis hin zu Tanzaufführungen und Konzerten.",
      hu: "A Grácia hercegnő Színházat 1981-ben avatták fel, és a hercegség egyik legfontosabb előadóművészeti központja. Maga Grácia hercegnő kezdeményezte a létrehozását a kulturális élet gazdagítása érdekében. A műsorterv a klasszikus drámáktól a komédiákon át a táncelőadásokig és koncertekig terjed.",
      ro: "Teatrul Prințesa Grace a fost inaugurat în 1981 și este un centru cultural important pentru artele spectacolului în Monaco. A fost inițiat de însăși Prințesa Grace pentru a îmbogăți viața culturală a Principatului. Programul include o gamă largă, de la teatru clasic și comedii, până la spectacole de dans și concerte.",
      en: "The Princess Grace Theatre was inaugurated in 1981 and serves as a major cultural center for performing arts in Monaco. It was established at the initiative of Princess Grace to enrich the Principality's cultural scene. The program covers a wide range of performances, from classical theater and comedies to dance and concerts.",
    },
    factsAdvanced: {
      de: ["Eröffnung erfolgte am 17. Dezember 1981.", "Das Theater verfügt über eine Kapazität von 371 Sitzplätzen.", "Befindet sich am Boulevard d'Italie mit Blick auf das Meer.", "Wurde auf den Grundmauern des alten Kinos 'Le Gaumont' errichtet.", "Dient als Veranstaltungsort für das jährliche 'Printemps des Arts'.", "Prinzessin Caroline ist die heutige Schirmherrin des Theaters."],
      hu: ["Az ünnepélyes megnyitót 1981. december 17-én tartották.", "A színház nézőtere 371 ülőhellyel rendelkezik.", "A Boulevard d'Italie-n található, kilátással a tengerre.", "A régi 'Le Gaumont' mozi alapjaira épült.", "A 'Printemps des Arts' művészeti fesztivál egyik helyszíne.", "A színház jelenlegi védnöke Karolina hercegnő."],
      ro: ["Inaugurarea a avut loc pe 17 decembrie 1981.", "Teatrul are o capacitate de 371 de locuri.", "Situat pe Boulevard d'Italie, cu vedere la mare.", "Construit pe fundația fostului cinematograf 'Le Gaumont'.", "Gazdă pentru festivalul anual 'Printemps des Arts'.", "Prințesa Caroline este actuala patroană a teatrului."],
      en: ["The theater was inaugurated on December 17, 1981.", "The venue has a seating capacity of 371 spectators.", "Located on Boulevard d'Italie with views of the sea.", "Built on the site of the former 'Le Gaumont' cinema.", "Serves as a venue for the annual 'Printemps des Arts' festival.", "Princess Caroline currently serves as the theater's patron."],
    },
  },
  {
    id: "landmark-chapelle-misericorde",
    type: "landmark",
    parent: "country-monaco",
    coords: [7.4211, 43.7328],
    name: { de: "Chapelle de la Miséricorde", hu: "Irgalmasság kápolna", ro: "Capela Milostivirii", en: "Chapelle de la Miséricorde" },
    description: {
      de: "Eine barocke Kapelle in Monaco-Ville, Sitz der Bruderschaft der Schwarzen Büßer.",
      hu: "Barokk kápolna Monaco-Ville-ben, a Fekete Bűnbánók testvériségének székhelye.",
      ro: "O chapelă barocă în Monaco-Ville, sediul Frăției Penitenților Negri.",
      en: "A Baroque chapel in Monaco-Ville, seat of the Brotherhood of Black Penitents."
    },
    facts: {
      de: ["Erbaut im 17. Jahrhundert", "Befindet sich am Place de la Mairie", "Wichtige religiöse Prozessionen", "Barocke Innenausstattung"],
      hu: ["A 17. században épült", "A Place de la Mairie-n található", "Fontos vallási körmenetek", "Barokk belső tér"],
      ro: ["Construită în secolul al XVII-lea", "Situată în Place de la Mairie", "Procesiuni religioase importante", "Interior baroc"],
      en: ["Built in the 17th century", "Located on Place de la Mairie", "Important religious processions", "Baroque interior"]
    }, image: "/poi-images/landmark-chapelle-misericorde.webp",
    descriptionAdvanced: {
      de: "Die Kapelle der Barmherzigkeit in Monaco-Ville ist ein barockes Gebäude aus dem 17. Jahrhundert. Sie dient als Sitz der Erzbruderschaft der Schwarzen Büßer und wurde unter der Herrschaft von Fürst Honoré II. errichtet. Die Architektur zeichnet sich durch eine kunstvolle Fassade und ein reich verziertes Inneres aus.",
      hu: "A monacói Chapelle de la Miséricorde egy 17. századi barokk kápolna Monaco-Ville szívében. Az épület a Fekete Bűnbánók testvériségének székhelye, alapkövét II. Honoré herceg rakta le 1639-ben. Belső tere gazdag stukkódíszítéséről és vallási műalkotásairól ismert.",
      ro: "Chapelle de la Miséricorde din Monaco-Ville este o capelă barocă ridicată în secolul al XVII-lea. Lăcașul servește drept sediu al Arhiconfraternității Penitenților Negri și a fost construit sub domnia prințului Honoré al II-lea. Interiorul său impresionează prin detaliile baroce și atmosfera solemnă.",
      en: "The Chapel of Mercy in Monaco-Ville is a 17th-century Baroque building located on the Place de la Mairie. It serves as the seat of the Archconfraternity of the Black Penitents and was commissioned by Prince Honoré II. The chapel is noted for its ornate facade and historic religious significance.",
    },
    factsAdvanced: {
      de: ["Grundsteinlegung im Jahr 1639", "Barocker Architekturstil", "Sitz der Schwarzen Büßer", "Erbaut unter Fürst Honoré II.", "Lage am Place de la Mairie", "Reiche Innenausstattung"],
      hu: ["Az alapkövet 1639-ben rakták le", "Barokk építészeti stílus", "A Fekete Bűnbánók székhelye", "II. Honoré herceg alapította", "A Place de la Mairie-n található", "Gazdag stukkódíszítés"],
      ro: ["Piatra de temelie pusă în 1639", "Stil arhitectural baroc", "Sediul Penitenților Negri", "Fondată de prințul Honoré al II-lea", "Situată în Place de la Mairie", "Decorată cu stucaturi bogate"],
      en: ["Foundation stone laid in 1639", "Baroque architectural style", "Seat of the Black Penitents", "Built under Prince Honoré II", "Located at Place de la Mairie", "Ornate interior decorations"],
    },
  },
];

export const monacoRegionsPoi: POI[] = [
  {
    id: "MC-001-antoinette-park",
    type: "landmark",
    parent: "MC-001",
    coords: [7.4147, 43.7375],
    name: {
      de: "Prinzessin-Antoinette-Park",
      hu: "Antoinette hercegnő park",
      ro: "Parcul Princesse Antoinette",
      en: "Princess Antoinette Park"
    },
    description: {
      de: "Ein herrlicher Park mit hundertjährigen Olivenbäumen, ideal für Familien.",
      hu: "Gyönyörű park százéves olajfákkal, ideális családok számára.",
      ro: "Un parc splendid cu măslini centenari, ideal pentru familii.",
      en: "A beautiful park with century-old olive trees, ideal for families."
    },
    facts: {
      de: [
        "Beherbergt einen Minigolfplatz",
        "Viele Spielbereiche für Kinder",
        "Blick auf den Felsen von Monaco",
        "Hundertjährige Olivenbäume"
      ],
      hu: [
        "Minigolfpálya található benne",
        "Számos játszótér gyerekeknek",
        "Kilátás a monacói Sziklára",
        "Százéves olajfák"
      ],
      ro: [
        "Găzduiește un teren de minigolf",
        "Multe zone de joacă pentru copii",
        "Vedere spre Stânca Monaco",
        "Măslini centenari"
      ],
      en: [
        "Houses a mini-golf course",
        "Many play areas for children",
        "View of the Rock of Monaco",
        "Century-old olive trees"
      ]
    }, image: "/poi-images/MC-001-antoinette-park.webp",
    descriptionAdvanced: {
      de: "Der Princess Antoinette Park im monegassischen Stadtbezirk La Condamine ist eine grüne Oase der Ruhe und Erholung im dicht bebauten Fürstentum. Der Park wurde nach Prinzessin Antoinette, der älteren Schwester von Fürst Rainier III., benannt und erstreckt sich über mehrere Ebenen am Hang. Eine Besonderheit des Parks sind die jahrhundertealten Olivenbäume, die sorgfältig gepflegt werden und dem Ort ein mediterranes Flair verleihen. Er dient vor allem als Freizeitraum für Familien und bietet zahlreiche Einrichtungen wie Spielplätze, einen Minigolfplatz und Sportbereiche. Jedes Jahr findet hier das traditionelle monegassische Picknick statt, das die lokale Identität und Gemeinschaft stärkt. Die Aussichtspunkte im Park bieten einen herrlichen Blick auf den Hafen und den Felsen von Monaco. Trotz seiner zentralen Lage wirkt der Park wie ein abgeschirmter Garten, der den Lärm der Stadt filtert. Die Gestaltung kombiniert ökologische Vielfalt mit funktionalen Freizeitflächen für alle Altersgruppen.",
      hu: "A Princess Antoinette Park Monaco La Condamine negyedében található, és a sűrűn beépített hercegség egyik legfontosabb zöldterülete. A parkot III. Rainier herceg nővéréről, Antoinette hercegnőről nevezték el, és több szinten terül el a domboldalon. Legfőbb jellegzetessége a több száz éves olajfák jelenléte, amelyek mediterrán hangulatot árasztanak és gondos védelem alatt állnak. A terület elsősorban a családok számára nyújt kikapcsolódási lehetőséget, számos játszótérrel, minigolfpályával és sportolási lehetőséggel felszerelve. Minden évben itt rendezik meg a hagyományos monacói pikniket (U Cavagnëtu), amely a helyi közösség egyik legfontosabb eseménye. A park kilátóiból gyönyörű panoráma nyílik a kikötőre és a monacói sziklára. Központi elhelyezkedése ellenére a park megőrizte nyugodt jellegét, hatékonyan szűrve ki a város zaját. Kertészeti elrendezése a biológiai sokféleséget ötvözi a funkcionális közösségi terekkel.",
      ro: "Parcul Prințesa Antoinette din districtul La Condamine al Principatului Monaco este o oază de verdeață esențială într-un peisaj urban extrem de dens. Denumit după Prințesa Antoinette, sora mai mare a Prințului Rainier al III-lea, parcul se întinde pe mai multe terase pe versantul dealului. Un element distinctiv al parcului sunt măslinii săi centenari, care sunt protejați și conferă locului o atmosferă mediteraneană autentică. Spațiul este dedicat în principal recreerii familiilor, oferind locuri de joacă moderne, un teren de minigolf și zone destinate sportului. În fiecare an, parcul găzduiește celebrul picnic tradițional monegasc, un eveniment central pentru identitatea locală. De pe terasele sale, vizitatorii pot admira vederi panoramice către portul Hercule și stânca pe care se află Palatul Princiar. Deși situat central, parcul oferă o izolare fonică naturală și un microclimat plăcut chiar și în zilele toride. Este un exemplu de gestionare eficientă a spațiului public într-un micro-stat.",
      en: "Princess Antoinette Park, located in the La Condamine district of Monaco, serves as a vital green sanctuary within the densely populated principality. Named after Princess Antoinette, the elder sister of Prince Rainier III, the park is terraced across several levels on the hillside. Its most remarkable feature is a collection of century-old olive trees that provide a serene Mediterranean ambiance and are meticulously preserved. The park is primarily designed for family leisure, featuring extensive playgrounds, a miniature golf course, and various sports facilities. It is the annual venue for the traditional Monegasque picnic (U Cavagnëtu), an important community event celebrating local culture. From its vantage points, visitors can enjoy panoramic views of Port Hercule and the Rock of Monaco. Despite its central location, the park acts as a natural acoustic buffer, offering a quiet escape from the city's hustle. Its landscape architecture skillfully combines ecological diversity with functional recreational spaces for all generations.",
    },
    factsAdvanced: {
      de: ["Benannt nach Prinzessin Antoinette, der Schwester von Rainier III.", "Beherbergt einen Hain aus über 100 Jahre alten Olivenbäumen.", "Verfügt über einen professionell gestalteten 18-Loch-Minigolfplatz.", "Jährlicher Austragungsort des Picknicks 'U Cavagnëtu'.", "Der Eintritt in den Park ist für die Öffentlichkeit kostenlos.", "Liegt in unmittelbarer Nähe zum Botanischen Garten von Monaco."],
      hu: ["Antoinette hercegnőről, III. Rainier nővéréről kapta a nevét.", "Területén több mint 100 éves olajfaliget található.", "Egy professzionális 18 lyukú minigolfpályával rendelkezik.", "Itt tartják évente az 'U Cavagnëtu' nevű monacói pikniket.", "A park látogatása a nagyközönség számára ingyenes.", "Közvetlen közelében található a monacói Egzotikus Kert."],
      ro: ["Poartă numele Prințesei Antoinette, sora lui Rainier al III-lea.", "Adăpostește o livadă de măslini cu o vechime de peste 100 de ani.", "Include un teren de minigolf cu 18 găuri bine întreținut.", "Găzduiește anual picnicul tradițional numit 'U Cavagnëtu'.", "Accesul în incinta parcului este gratuit pentru toți vizitatorii.", "Este situat foarte aproape de Grădina Exotică din Monaco."],
      en: ["Named after Princess Antoinette, sister of Prince Rainier III.", "Home to a grove of olive trees over 100 years old.", "Features a professionally designed 18-hole miniature golf course.", "Hosts the annual 'U Cavagnëtu' traditional Monegasque picnic.", "Entrance to the park is free for the general public.", "Located in close proximity to the Exotic Garden of Monaco."],
    },
  },
  {
    id: "MC-001-st-charles-church",
    type: "landmark",
    parent: "MC-001",
    coords: [7.4301, 43.7423],
    name: {
      de: "Kirche Saint-Charles",
      hu: "Szent Károly-templom",
      ro: "Biserica Saint-Charles",
      en: "Saint-Charles Church"
    },
    description: {
      de: "Eine wunderschöne Kirche im Stil der Neorenaissance im Herzen von Monte-Carlo.",
      hu: "Gyönyörű neoreneszánsz stílusú templom Monte-Carlo szívében.",
      ro: "O biserică frumoasă în stil neorenascentist în inima orașului Monte-Carlo.",
      en: "A beautiful Neo-Renaissance style church in the heart of Monte-Carlo."
    },
    facts: {
      de: [
        "Eingeweiht 1883",
        "Bekannt für seine Glasmalereien",
        "Glockenturm ist 30 Meter hoch",
        "Ort vieler Hochzeiten"
      ],
      hu: [
        "1883-ban szentelték fel",
        "Üvegablakairól ismert",
        "Harangtornya 30 méter magas",
        "Számos esküvő helyszíne"
      ],
      ro: [
        "Inaugurată în 1883",
        "Cunoscută pentru vitraliile sale",
        "Turnul clopotniță are 30 de metri înălțime",
        "Locul multor nunți"
      ],
      en: [
        "Inaugurated in 1883",
        "Known for its stained glass windows",
        "Bell tower is 30 meters high",
        "Site of many weddings"
      ]
    },
    descriptionAdvanced: {
      de: "Die Kirche Saint-Charles im Stadtteil Monte Carlo ist ein architektonisches Juwel, das im späten 19. Jahrhundert errichtet wurde. Sie wurde unter der Schirmherrschaft von Fürst Charles III. erbaut und im Jahr 1883 offiziell eingeweiht. Der Baustil ist stark von der französischen Renaissance beeinflusst, was sich in der prächtigen Fassade und den harmonischen Proportionen zeigt. Das Innere der Kirche ist mit feinen Mosaiken, farbenfrohen Glasfenstern und einer beeindruckenden Orgel ausgestattet. Die Kirche dient als wichtige Pfarrkirche für die Gemeinde von Monte Carlo und ist Schauplatz zahlreicher religiöser Zeremonien des Fürstenhauses. Ihr Glockenturm ist ein markanter Punkt in der Skyline des Stadtteils und fügt sich elegant in die umliegende Belle-Époque-Architektur ein. Die Kirche wurde mehrfach restauriert, um ihre künstlerische Pracht und strukturelle Integrität zu bewahren. Heute ist sie nicht nur ein Ort des Gebets, sondern auch ein bedeutendes kulturelles Denkmal, das die tiefe religiöse Tradition Monacos widerspiegelt.",
      hu: "A Saint-Charles templom Monte Carlo negyedében található, és a 19. század végi monacói építészet egyik kiemelkedő példája. A templomot III. Károly herceg védnöksége alatt építették, és 1883-ban szentelték fel. Építészeti stílusa a francia reneszánsz jegyeit ötvözi, ami a gazdagon díszített homlokzaton és a harmonikus belső tereken is tükröződik. A belső teret finom mozaikok, színes ólomüveg ablakok és egy lenyűgöző orgona ékesíti. Fontos szerepet tölt be Monte Carlo közösségi életében, mint a kerület fő plébániatemploma, és gyakran ad otthont a hercegi családhoz kötődő egyházi eseményeknek. Harangtornya a városrész látképének meghatározó eleme, és elegánsan illeszkedik a környező Belle Époque stílusú épületek közé. Az évtizedek során többször restaurálták, hogy megőrizzék művészeti értékeit és szerkezeti épségét. A templom ma is a hit és a kultúra találkozási pontja Monacóban, tükrözve az ország katolikus hagyományait.",
      ro: "Biserica Saint-Charles din districtul Monte Carlo este o bijuterie arhitecturală ridicată la sfârșitul secolului al XIX-lea. Construită sub patronajul Prințului Charles al III-lea, edificiul a fost inaugurat oficial în anul 1883. Stilul arhitectural este puternic influențat de Renașterea franceză, remarcându-se prin fațada sa bogat ornamentată și proporțiile echilibrate. Interiorul bisericii este decorat cu mozaicuri fine, vitralii colorate și o orgă impresionantă, oferind o atmosferă de solemnitate și rafinament. Lăcașul de cult servește drept biserică parohială principală pentru comunitatea din Monte Carlo și găzduiește frecvent ceremonii religioase importante. Turnul său cu clopot este un punct de reper în silueta urbană a districtului, armonizându-se cu arhitectura specifică perioadei Belle Époque din jur. Biserica a beneficiat de mai multe lucrări de restaurare pentru a-și păstra splendoarea artistică originală. Astăzi, Saint-Charles rămâne un simbol al tradiției religioase și al identității culturale a Principatului Monaco.",
      en: "Saint-Charles Church, situated in the Monte Carlo district, is an architectural masterpiece completed in the late 19th century. Built under the patronage of Prince Charles III, it was officially inaugurated in 1883. The church's design is heavily influenced by the French Renaissance style, characterized by its ornate facade and harmonious proportions. The interior is adorned with exquisite mosaics, vibrant stained-glass windows, and an impressive pipe organ, creating a space of profound spiritual beauty. It serves as the primary parish church for the Monte Carlo community and frequently hosts religious ceremonies attended by the Princely family. Its distinctive bell tower is a prominent feature of the local skyline, blending seamlessly with the surrounding Belle Époque architecture. The building has undergone several restorations to maintain its artistic grandeur and structural integrity over the decades. Today, it stands as a testament to Monaco's deep-rooted Catholic traditions and serves as a significant cultural monument.",
    },
    factsAdvanced: {
      de: ["Eingeweiht am 9. November 1883 durch Fürst Charles III.", "Der Baustil entspricht der Neorenaissance.", "Die Kirche verfügt über 19 prächtige Buntglasfenster.", "Das Gebäude wurde auf dem Gelände einer ehemaligen Kapelle errichtet.", "Beherbergt eine wertvolle Orgel der Firma Cavaillé-Coll.", "Die Fassade ist mit Mosaiken und Steinskulpturen verziert."],
      hu: ["1883. november 9-én szentelte fel III. Károly herceg.", "Az épület stílusa a neoreneszánsz jegyeit hordozza.", "A templom 19 monumentális ólomüveg ablakkal rendelkezik.", "Egy korábbi kápolna helyén emelték a mai épületet.", "Egy értékes Cavaillé-Coll orgona található a belső térben.", "A homlokzatot gazdag mozaikdíszítés és kőszobrok ékesítik."],
      ro: ["Inaugurată oficial la 9 noiembrie 1883 de Prințul Charles al III-lea.", "Stilul arhitectural predominant este cel neorenascentist.", "Biserica deține 19 vitralii spectaculoase lucrate manual.", "Edificiul a fost construit pe locul unei capele mai vechi.", "Adăpostește o orgă de mare valoare marca Cavaillé-Coll.", "Fațada este decorată cu mozaicuri și sculpturi fine în piatră."],
      en: ["Inaugurated on November 9, 1883, by Prince Charles III.", "The architectural style follows the Neo-Renaissance movement.", "The church features 19 magnificent stained-glass windows.", "It was built on the site of a former smaller chapel.", "Houses a valuable pipe organ crafted by Cavaillé-Coll.", "The facade is decorated with mosaics and intricate stone carvings."],
    },
  }
];

export const monacoAllPoi: POI[] = [
  monacoCountry,
  ...monacoDistricts,
  ...monacoLandmarks,
  ...monacoRegionsPoi
];
