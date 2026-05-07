// @ts-nocheck
import type { POI } from "./poi";
import { poiExtraNetherlandsCities } from "./poiExtraNetherlandsCities";

export const netherlandsCountry: POI = {
  id: "NL",
  type: "country",
  parent: "EUROPE",
  coords: [5.2913, 52.1326],
  name: { de: "Niederlande", hu: "Hollandia", ro: "Țările de Jos", en: "Netherlands" },
  image: "/geo-images/netherlands/netherlands.webp",
  description: {
    de: "Die Niederlande sind ein westeuropäisches Land, bekannt für seine flache Landschaft, historische Windmühlen, weite Tulpenfelder und ein innovatives System der Landgewinnung.",
    hu: "Hollandia egy nyugat-európai ország, amely sík tájairól, történelmi szélmalmairól, kiterjedt tulipánmezőiről és innovatív területnyerési rendszeréről ismert.",
    ro: "Țările de Jos reprezintă o țară din Europa de Vest, renumită pentru peisajul său plat, morile de vânt istorice, câmpurile întinse de lalele și un sistem inovator de recuperare a terenurilor.",
    en: "The Netherlands is a Western European country known for its flat landscape, historic windmills, vast tulip fields, and an innovative system of land reclamation."
  },
  descriptionAdvanced: {
    de: "Die Niederlande, oft auch umgangssprachlich Holland genannt, sind ein dicht besiedeltes Land im Nordwesten Europas, das für seine flache Landschaft, weite Tulpenfelder und historische Windmühlen bekannt ist. Ein großer Teil der Landfläche liegt unter dem Meeresspiegel und wird durch ein komplexes System von Deichen und Pumpwerken geschützt. Das Land hat eine reiche maritime Geschichte und spielte eine führende Rolle im globalen Handel des 17. Jahrhunderts, dem sogenannten Goldenen Zeitalter. Heute ist es eine der fortschrittlichsten und tolerantesten Gesellschaften der Welt. Geografie K6: Wenn ein Viertel der Niederlande unter dem Meeresspiegel liegt, wie viel Prozent des Landes müssen künstlich trocken gehalten werden?",
    hu: "Hollandia (hivatalosan: Țările de Jos, bár leggyakrabban Hollandiaként említik) egy sűrűn lakott ország Északnyugat-Európában, amely sík tájairól és a tenger szintje alatti területeiről ismert. Az ország területének negyede a tenger szintje alatt fekszik, és egy rendkívül komplex gátrendszer és szivattyúállomások hálózata védi a víztől. Történelmileg a 17. században globális tengeri és kereskedelmi nagyhatalom volt, ezt az időszakot holland aranykornak nevezik. Ma a világ egyik leginnovatívabb és legtoleránsabb társadalma. Földrajz K6: Ha az ország negyede a tengerszint alatt fekszik, hogyan tudják megakadályozni a területek elárasztását?",
    ro: "Țările de Jos, denumite adesea Olanda, reprezintă o națiune dens populată din nord-vestul Europei, celebră pentru peisajele sale plate și zonele situate sub nivelul mării. Aproape un sfert din suprafața țării se află sub nivelul mării, fiind protejată de un sistem complex de diguri și stații de pompare. Istoric, în secolul al XVII-lea a fost o putere maritimă și comercială globală, perioadă cunoscută sub numele de Epoca de Aur olandeză. Astăzi este considerată una dintre cele mai inovatoare și tolerante societăți din lume. Geografie K6: Dacă un sfert din Țările de Jos se află sub nivelul mării, cum reușesc să prevină inundarea acestor teritorii?",
    en: "The Netherlands, often colloquially called Holland, is a densely populated country in northwestern Europe, known for its flat landscape, vast tulip fields, and historic windmills. A large part of its land area lies below sea level and is protected by a complex system of dikes and pumping stations. The country has a rich maritime history and played a leading role in global trade during the 17th century, known as the Golden Age. Today, it is one of the most progressive and tolerant societies in the world. Geography K6: If a quarter of the Netherlands is below sea level, what percentage of the country must be kept artificially dry?"
  },
  facts: {
    de: [
      "Hauptstadt: Amsterdam, Regierungssitz: Den Haag.",
      "Geografie: Rund ein Drittel des Landes liegt unter dem Meeresspiegel.",
      "Mobilität: Es gibt mehr Fahrräder im Land als Einwohner.",
      "Kulinarik: Weltberühmt für Käsesorten wie Gouda und Edamer.",
      "Wirtschaft: Der Rotterdamer Hafen ist der größte Seehafen Europas.",
      "Landwirtschaft: Die Niederlande sind der zweitgrößte Agrarexporteur der Welt.",
      "Infrastruktur: Das Land besitzt eines der dichtesten Radwegenetze weltweit.",
      "Luftfahrt: Schiphol ist einer der bedeutendsten internationalen Flughäfen.",
      "Politik: Gründungsmitglied der EU und NATO sowie Sitz des Internationalen Gerichtshofs.",
      "Natur: Der Keukenhof ist der größte Blumengarten der Welt."
    ],
    hu: [
      "Főváros: Amszterdam, a kormány székhelye: Hága.",
      "Földrajz: Az ország mintegy harmada a tengerszint alatt fekszik.",
      "Mobilitás: Több kerékpár van az országban, mint lakos.",
      "Gasztronómia: Világhírű sajtjairól, mint a Gouda és az Edámi.",
      "Gazdaság: A rotterdami kikötő Európa legnagyobb tengeri kikötője.",
      "Mezőgazdaság: Hollandia a világ második legnagyobb mezőgazdasági exportőre.",
      "Infrastruktúra: Az ország a világ egyik legsűrűbb kerékpárút-hálózatával rendelkezik.",
      "Légiközlekedés: Schiphol az egyik legjelentősebb nemzetközi repülőtér.",
      "Politika: Az EU és a NATO alapító tagja, valamint a Nemzetközi Bíróság székhelye.",
      "Természet: A Keukenhof a világ legnagyobb virágoskertje."
    ],
    ro: [
      "Capitala: Amsterdam, sediul guvernului: Haga.",
      "Geografie: Aproximativ o treime din țară se află sub nivelul mării.",
      "Mobilitate: Există mai multe biciclete în țară decât locuitori.",
      "Gastronomie: Renumită în întreaga lume pentru brânzeturi precum Gouda și Edam.",
      "Economie: Portul Rotterdam este cel mai mare port maritim din Europa.",
      "Agricultură: Țările de Jos sunt al doilea mare exportator agricol din lume.",
      "Infrastructură: Țara are una dintre cele mai dense rețele de piste pentru biciclete din lume.",
      "Aviație: Schiphol este unul dintre cele mai importante aeroporturi internaționale.",
      "Politică: Membru fondator al UE și NATO, precum și sediul Curții Internaționale de Justiție.",
      "Natură: Keukenhof este cea mai mare grădină de flori din lume."
    ],
    en: [
      "Capital: Amsterdam, seat of government: The Hague.",
      "Geography: About a third of the country lies below sea level.",
      "Mobility: There are more bicycles in the country than residents.",
      "Cuisine: World-famous for cheeses like Gouda and Edam.",
      "Economy: The Port of Rotterdam is the largest seaport in Europe.",
      "Agriculture: The Netherlands is the world's second-largest agricultural exporter.",
      "Infrastructure: The country has one of the densest networks of cycle paths in the world.",
      "Aviation: Schiphol is one of the most important international airports.",
      "Politics: Founding member of the EU and NATO, and seat of the International Court of Justice.",
      "Nature: Keukenhof is the largest flower garden in the world."
    ]
  },
    factsAdvanced: {
    de: [
      "Etwa 26 % der Landfläche der Niederlande liegen unter dem Meeresspiegel.",
      "Der höchste Punkt des europäischen Teils des Landes, der Vaalserberg, ist nur 322 Meter hoch.",
      "Die Niederlande haben mehr Fahrräder als Einwohner (etwa 23 Millionen Räder bei 17 Millionen Menschen).",
      "Das Land ist nach den USA der zweitgrößte Agrarexporteur der Welt."
    ],
    hu: ["Az ország területének körülbelül 26%-a a tengerszint alatt fekszik.", "Az európai rész legmagasabb pontja, a Vaalserberg mindössze 322 méter magas.", "Hollandiában több a kerékpár, mint a lakos (kb. 23 millió kerékpár jut 17,5 millió emberre).", "Az Egyesült Államok után a világ második legnagyobb mezőgazdasági exportőre."],
    ro: [
      "Aproximativ 26% din suprafața țării se află sub nivelul mării.",
      "Cel mai înalt punct din partea europeană, Vaalserberg, are o altitudine de doar 322 de metri.",
      "În Olanda există mai multe biciclete decât locuitori (aprox. 23 de milioane la 17,5 milioane de oameni).",
      "După Statele Unite, este al doilea cel mai mare exportator de produse agricole din lume."
    ],
    en: [
      "About 26% of the land area of the Netherlands is below sea level.",
      "The highest point in the European part of the country, the Vaalserberg, is only 322 meters high.",
      "The Netherlands has more bicycles than inhabitants (about 23 million bikes for 17.5 million people).",
      "After the United States, the country is the world's second-largest agricultural exporter."
    ]
  }
  };

export const netherlandsRegions: POI[] = [
  {
    id: "NL-DR", type: "region", parent: "NL", coords: [6.56, 52.84],
    name: { de: "Drenthe", hu: "Drenthe", ro: "Drenthe", en: "Drenthe" },
    image: "/geo-images/netherlands/drenthe.webp",
    description: {
      de: "Drenthe ist eine ländliche Provinz im Nordosten der Niederlande, bekannt für ihre prähistorischen Hünengräber, weite Heideflächen und dichte Wälder.",
      hu: "Drenthe egy vidéki tartomány Hollandia északkeleti részén, amely történelem előtti megalitikus sírjairól, kiterjedt fenyérjeiről és sűrű erdőiről ismert.",
      ro: "Drenthe este o provincie rurală din nord-estul Olandei, cunoscută pentru mormintele sale megalitice preistorice, pajiștile întinse și pădurile dese.",
      en: "Drenthe is a rural province in the northeast of the Netherlands, known for its prehistoric megalithic tombs, vast heathlands, and dense forests."
    },
    descriptionAdvanced: {
    de: "Drenthe ist eine Provinz im Nordosten der Niederlande, die für ihre ruhige, ländliche Atmosphäre und ausgedehnte Heideflächen bekannt ist. Die Region hat eine sehr geringe Bevölkerungsdichte im Vergleich zum Rest des Landes und gilt als Paradies für Radfahrer und Naturfreunde. Historisch bedeutsam sind die prähistorischen Hünengräber (Hunebedden), die ältesten Monumente der Niederlande, die von frühen bäuerlichen Gesellschaften errichtet wurden. Die Hauptstadt der Provinz ist Assen, die auch für die berühmte Motorradrennstrecke TT Circuit bekannt ist. Geschichte K5: Die Hünengräber wurden aus riesigen Steinen gebaut, die während der Eiszeit nach Drenthe geschoben wurden. Welche Naturgewalt hat diese Steine transportiert?",
    hu: "Drenthe Hollandia északkeleti tartománya, amely nyugodt, vidéki hangulatáról és hatalmas fenyérjeiről ismert. A régiónak az ország többi részéhez képest nagyon alacsony a népsűrűsége, és a kerékpárosok, valamint a természetbarátok igazi paradicsoma. Történelmi szempontból kiemelkedőek a történelem előtti megalitikus sírok (Hunebedden), amelyek Hollandia legrégebbi emlékművei. A tartomány fővárosa Assen, amely a híres TT Circuit motorversenypályájáról is ismert. Történelem K5: A megalitikus sírokat hatalmas kövekből építették, amelyeket a jégkorszak alatt toltak Drenthe területére. Milyen természeti erő szállította ezeket a köveket?",
    ro: "Drenthe este o provincie din nord-estul Olandei, renumită pentru atmosfera sa liniștită, rurală și pentru zonele vaste acoperite cu iarbă neagră (erica). Regiunea are o densitate a populației foarte scăzută în comparație cu restul țării, fiind considerată un adevărat paradis pentru cicliști și iubitorii de natură. Din punct de vedere istoric, de o importanță majoră sunt mormintele megalitice preistorice (Hunebedden), cele mai vechi monumente din Olanda, ridicate de primele comunități agricole. Capitala provinciei este Assen, un oraș recunoscut pe plan internațional pentru circuitul său de curse de motociclete, TT Circuit. Istorie K5: Mormintele megalitice au fost construite din pietre uriașe împinse spre Drenthe în timpul Epocii de Gheață. Ce forță a naturii a transportat aceste stânci masive?",
    en: "Drenthe is a province in the northeastern Netherlands, known for its quiet, rural atmosphere and expansive heathlands. The region has a very low population density compared to the rest of the country and is considered a paradise for cyclists and nature lovers. Historically significant are the prehistoric megalithic tombs (Hunebedden), the oldest monuments in the Netherlands, built by early farming communities. The provincial capital is Assen, which is also famous for the TT Circuit motorcycle racing track. History K5: The megalithic tombs were built from huge stones pushed to Drenthe during the Ice Age. What natural force transported these stones?"
  },
  facts: {
    de: ["Bekannt für die prähistorischen Hünengräber.","Assen ist die Hauptstadt der Provinz Drenthe.","Beherbergt den Nationalpark Dwingelderveld.","Wird oft als die Fahrradprovinz der Niederlande bezeichnet.","Der TT Circuit in Assen ist eine berühmte Rennstrecke.","Hat eine sehr geringe Bevölkerungsdichte.","Camp Westerbork ist eine wichtige historische Gedenkstätte.","Das Wildlands Adventure Zoo Emmen ist eine Hauptattraktion."],
    hu: ["A történelem előtti megalitikus sírjairól ismert.","Assen Drenthe tartomány fővárosa.","Itt található a Dwingelderveld Nemzeti Park.","Gyakran nevezik Hollandia kerékpáros tartományának.","Az asseni TT Circuit egy híres versenypálya.","Nagyon alacsony a népsűrűsége.","A Westerbork tábor fontos történelmi emlékhely.","A Wildlands Adventure Zoo Emmen az egyik fő látványosság."],
    ro: ["Cunoscută pentru mormintele megalitice preistorice.","Assen este capitala provinciei Drenthe.","Găzduiește Parcul Național Dwingelderveld.","Adesea numită provincia bicicletelor din Țările de Jos.","Circuitul TT din Assen este o pistă de curse celebră.","Are o densitate a populației foarte scăzută.","Tabăra Westerbork este un important memorial istoric.","Wildlands Adventure Zoo Emmen este o atracție principală."],
    en: ["Known for the prehistoric megalithic tombs.","Assen is the capital of the province of Drenthe.","Houses the Dwingelderveld National Park.","Often referred to as the cycling province of the Netherlands.","The TT Circuit in Assen is a famous racing track.","Has a very low population density.","Camp Westerbork is an important historical memorial site.","The Wildlands Adventure Zoo Emmen is a main attraction."]
  },
  factsAdvanced: {
    de: [
      "In Drenthe befinden sich 52 der 54 prähistorischen Hünengräber der Niederlande.",
      "Die Provinz hat die niedrigste Bevölkerungsdichte aller niederländischen Provinzen.",
      "Assen ist seit 1925 Austragungsort der berühmten TT-Motorradrennen.",
      "Das Nationale Gefängnismuseum befindet sich im historischen Dorf Veenhuizen in Drenthe."
    ],
    hu: ["Drenthe tartományban található Hollandia 54 megalitikus sírjából 52.", "Ez a tartomány rendelkezik a legalacsonyabb népsűrűséggel Hollandiában.", "Assen városa 1925 óta ad otthont a híres TT motorversenyeknek.", "A Nemzeti Börtönmúzeum a történelmi Veenhuizen faluban található."],
    ro: [
      "În Drenthe se găsesc 52 dintre cele 54 de morminte megalitice preistorice (Hunebedden) păstrate în Olanda.",
      "Provincia are cea mai mică densitate a populației dintre toate provinciile olandeze.",
      "Assen găzduiește celebrele curse de motociclete TT încă din 1925.",
      "Muzeul Național al Închisorii este situat în satul istoric Veenhuizen."
    ],
    en: [
      "Drenthe is home to 52 of the 54 prehistoric megalithic tombs in the Netherlands.",
      "The province has the lowest population density of all Dutch provinces.",
      "Assen has hosted the famous TT motorcycle races since 1925.",
      "The National Prison Museum is located in the historic village of Veenhuizen in Drenthe."
    ]
  }
  },
  {
    id: "NL-FL", type: "region", parent: "NL", coords: [5.55, 52.47],
    name: { de: "Flevoland", hu: "Flevoland", ro: "Flevoland", en: "Flevoland" },
    image: "/geo-images/netherlands/flevoland.webp",
    description: {
      de: "Flevoland ist die jüngste Provinz der Niederlande, ein Meisterwerk der Landgewinnung, das im 20. Jahrhundert vollständig dem Meer abgerungen wurde.",
      hu: "Flevoland Hollandia legfiatalabb tartománya, a területnyerés remekműve, amelyet a 20. században teljes egészében a tengertől hódítottak el.",
      ro: "Flevoland este cea mai tânără provincie a Olandei, o capodoperă a recuperării terenurilor, care a fost recuperată în întregime din mare în secolul al XX-lea.",
      en: "Flevoland is the youngest province in the Netherlands, a masterpiece of land reclamation entirely reclaimed from the sea in the 20th century."
    },
    descriptionAdvanced: {
    de: "Flevoland ist die jüngste Provinz der Niederlande und ein Meisterwerk der Ingenieurskunst, da sie fast vollständig durch Landgewinnung aus dem ehemaligen Zuiderzee-Meer entstand. Die Provinz wurde 1986 offiziell gegründet und besteht hauptsächlich aus drei großen Poldern. Die Landschaft ist geprägt von weiten, flachen landwirtschaftlichen Flächen, modernen, planmäßig angelegten Städten wie Almere und Lelystad sowie großen Naturreservaten. Das Gebiet bietet einzigartige Einblicke in die moderne Stadtplanung und den Umgang mit dem Wasserbau. Sachkunde K6: Flevoland wurde dem Meer abgerungen. Wie nennt man ein Stück Land, das durch Deiche geschützt und künstlich entwässert wird?",
    hu: "Flevoland Hollandia legfiatalabb tartománya, amely a mérnöki tudomány mesterműve, hiszen szinte teljes egészében az egykori Zuiderzee tengerből hódították el. A tartományt hivatalosan 1986-ban hozták létre, és három nagy polderből áll. A tájat kiterjedt, sík mezőgazdasági területek, modern, mesterségesen tervezett városok (mint Almere és Lelystad), valamint hatalmas természetvédelmi területek jellemzik. A terület egyedülálló bepillantást nyújt a modern várostervezésbe és a vízgazdálkodásba. Környezetismeret K6: Flevolandot a tengertől hódították el. Hogy hívják azokat a földterületeket, amelyeket gátakkal védenek és mesterségesen kiszárítanak?",
    ro: "Flevoland este cea mai tânără provincie a Țărilor de Jos și o capodoperă a ingineriei, fiind formată aproape în întregime prin asanarea terenurilor din fosta mare Zuiderzee. Provincia a fost înființată oficial în 1986 și este compusă din trei poldere mari. Peisajul este dominat de terenuri agricole vaste, orașe moderne precum Almere și Lelystad, și rezervații naturale. Această zonă oferă o perspectivă unică asupra planificării urbane moderne și a managementului apelor. Științe ale naturii K6: Flevoland a fost cucerită de la mare. Cum se numește o porțiune de pământ protejată de diguri și drenată artificial?",
    en: "Flevoland is the youngest province in the Netherlands and a masterpiece of engineering, as it was almost entirely created through land reclamation from the former Zuiderzee. The province was officially established in 1986 and mainly consists of three large polders. The landscape is characterized by vast, flat agricultural areas, modern, planned cities like Almere and Lelystad, and large nature reserves. The area offers unique insights into modern urban planning and water management. Science K6: Flevoland was reclaimed from the sea. What do you call a piece of land protected by dikes and artificially drained?"
  },
  facts: {
    de: ["Gegründet am 1. Januar 1986 als 12. Provinz.","Die gesamte Provinz liegt unterhalb des Meeresspiegels.","Lelystad ist die Hauptstadt der Provinz.","Almere ist die am schnellsten wachsende Stadt der Niederlande.","Beherbergt das Naturschutzgebiet Oostvaardersplassen.","Der ehemalige Inselflecken Schokland liegt nun im Festland.","Bekannt für moderne Architektur und städtebauliche Planung.","Wichtiger Standort für Windenergie-Parks in den Niederlanden."],
    hu: ["1986. január 1-jén alapították a 12. tartományként.","Az egész tartomány a tengerszint alatt fekszik.","Lelystad a tartomány fővárosa.","Almere Hollandia leggyorsabban növekvő városa.","Itt található az Oostvaardersplassen természetvédelmi terület.","Az egykori Schokland sziget most a szárazföldön fekszik.","A modern építészetről és várostervezésről ismert.","A hollandiai szélenergia-parkok fontos helyszíne."],
    ro: ["Fondată pe 1 ianuarie 1986 ca a 12-a provincie.","Întreaga provincie se află sub nivelul mării.","Lelystad este capitala provinciei.","Almere este orașul cu cea mai rapidă creștere din Olanda.","Găzduiește rezervația naturală Oostvaardersplassen.","Fosta insulă Schokland se află acum pe continent.","Cunoscută pentru arhitectura modernă și planificarea urbană.","O locație importantă pentru parcurile eoliene din Olanda."],
    en: ["Founded on January 1, 1986, as the 12th province.","The entire province lies below sea level.","Lelystad is the capital of the province.","Almere is the fastest-growing city in the Netherlands.","Home to the Oostvaardersplassen nature reserve.","The former island of Schokland is now landlocked.","Known for modern architecture and urban planning.","An important location for wind energy parks in the Netherlands."]
  },
  factsAdvanced: {
    de: [
      "Flevoland ist die größte künstliche Insel der Welt.",
      "Die Provinzhauptstadt Lelystad ist nach Cornelis Lely benannt, dem Architekten der Zuiderzeewerke.",
      "Das Naturschutzgebiet Oostvaardersplassen in Flevoland ist bekannt für seine Wildpferde und Rothirsche.",
      "Die Provinz liegt durchschnittlich 5 Meter unter dem Meeresspiegel."
    ],
    hu: ["Flevoland a világ legnagyobb mesterséges szigete.", "A tartomány fővárosát, Lelystadot Cornelis Lelyről, a Zuiderzee-művek tervezőjéről nevezték el.", "Az Oostvaardersplassen természetvédelmi terület vadlovairól és gímszarvasairól ismert.", "A tartomány átlagosan 5 méterrel fekszik a tengerszint alatt."],
    ro: [
      "Flevoland este considerată cea mai mare insulă artificială din lume.",
      "Capitala provinciei, Lelystad, a fost denumită după Cornelis Lely, arhitectul proiectului Zuiderzee.",
      "Rezervația naturală Oostvaardersplassen din Flevoland este renumită pentru caii sălbatici și cerbii roșii.",
      "Provincia se află în medie la 5 metri sub nivelul mării."
    ],
    en: [
      "Flevoland is the largest artificial island in the world.",
      "The provincial capital Lelystad is named after Cornelis Lely, the architect of the Zuiderzee Works.",
      "The Oostvaardersplassen nature reserve in Flevoland is famous for its wild horses and red deer.",
      "The province lies on average 5 meters below sea level."
    ]
  }
  },
  {
    id: "NL-FR", type: "region", parent: "NL", coords: [5.85, 53.11],
    name: { de: "Friesland", hu: "Frízföld", ro: "Frizia", en: "Friesland" },
    image: "/geo-images/netherlands/friesland.webp",
    description: {
      de: "Friesland ist eine einzigartige Provinz im Norden der Niederlande, bekannt für ihre eigene Sprache, zahlreiche Seen und die berühmte Elfstedentocht.",
      hu: "Frízföld egy egyedülálló tartomány Hollandia északi részén, amely saját nyelvéről, számos taváról és a híres Elfstedentochtról ismert.",
      ro: "Frizia este o provincie unică din nordul Olandei, cunoscută pentru propria limbă, numeroasele lacuri și faimosul Elfstedentocht.",
      en: "Friesland is a unique province in the north of the Netherlands, known for its own language, numerous lakes, and the famous Elfstedentocht."
    },
    descriptionAdvanced: {
    de: "Friesland, gelegen im Norden der Niederlande, besitzt eine starke eigene kulturelle Identität und ist die einzige Provinz mit einer zweiten offiziellen Sprache: Westfriesisch. Die Landschaft wird von zahllosen Seen, Kanälen und der langen Küste am Wattenmeer dominiert. Traditionelle Sportarten wie das Eisschnelllaufen auf den zugefrorenen Kanälen (Elfstedentocht) und das Fierljeppen (Stabweitsprung über Wassergräben) sind tief in der Kultur verwurzelt. Die Landwirtschaft, insbesondere die Milchwirtschaft mit den bekannten schwarz-weißen Holstein-Friesian-Rindern, prägt das ländliche Bild. Geografie K7: Friesland hat viele durch Kanäle verbundene Seen. Warum war der Wassertransport früher effizienter als der Straßentransport?",
    hu: "Frízföld (Friesland) Hollandia északi tartománya, amely erős kulturális identitásáról és saját hivatalos nyelvéről, a frízről ismert. A régiót a kiterjedt tavak hálózata, a csatornák és a tengerparti szigetek jellemzik, így a vízisportok egyik legnépszerűbb központja. A tartomány gazdasága történelmileg a mezőgazdaságra és a hajózásra épült, ma pedig a turizmus is jelentős. Télen, ha a csatornák befagynak, a híres tizenegy városos korcsolyaverseny (Elfstedentocht) lázba hozza az egész országot. Földrajz K5: Melyik az a két hivatalos nyelv, amelyet Frízföld tartományban beszélnek?",
    ro: "Frizia (Friesland), situată în nordul Olandei, are o identitate culturală puternică și este singura provincie cu o a doua limbă oficială: frizona de vest. Peisajul este dominat de o rețea de lacuri, canale și coasta Mării Wadden. Sporturile tradiționale, cum ar fi patinajul pe gheață pe canale (Elfstedentocht) și săritura cu prăjina peste canale (Fierljeppen), sunt profund înrădăcinate în cultura locală. Agricultura, în special producția de lapte cu vacile Holstein-Friză, este esențială. Geografie K7: Frizia are multe lacuri interconectate prin canale. De ce era transportul pe apă mai eficient decât cel rutier în trecut?",
    en: "Friesland, located in the northern Netherlands, has a strong cultural identity of its own and is the only province with a second official language: West Frisian. The landscape is dominated by countless lakes, canals, and the long coastline along the Wadden Sea. Traditional sports such as ice skating on frozen canals (Elfstedentocht) and Fierljeppen (pole vaulting over water ditches) are deeply rooted in the culture. Agriculture, especially dairy farming with the famous black-and-white Holstein-Friesian cattle, characterizes the rural landscape. Geography K7: Friesland has many lakes connected by canals. Why was water transport more efficient than road transport in the past?"
  },
  facts: {
    de: ["Friesisch ist hier die zweite offizielle Amtssprache.","Leeuwarden ist die Hauptstadt der Provinz.","Berühmt für das Schlittschuhrennen 'Elfstedentocht'.","Die Friesischen Seen sind ein beliebtes Segelrevier.","Beherbergt die ältesten funktionierenden Planetarien Europas (Eise Eisinga).","Bekannt für das schwarz-weiße Friesenrind.","Vier Watteninseln gehören zur Provinz Friesland.","Hat eine lange Tradition im Wassersport und Bootsbau."],
    hu: ["A fríz itt a második hivatalos nyelv.","Leeuwarden a tartomány fővárosa.","Híres az 'Elfstedentocht' korcsolyaversenyről.","A Fríz-tavak népszerű vitorlásterületek.","Itt található Európa legrégebbi működő planetáriuma (Eise Eisinga).","A fekete-fehér fríz szarvasmarháról ismert.","Négy Watt-sziget tartozik Frízföld tartományhoz.","Hosszú hagyománya van a vízi sportoknak és a hajóépítésnek."],
    ro: ["Frizona este a doua limbă oficială aici.","Leeuwarden este capitala provinciei.","Faimoasă pentru cursa de patinaj pe gheață 'Elfstedentocht'.","Lacurile frizone sunt o zonă populară de navigație.","Găzduiește cel mai vechi planetariu funcțional din Europa (Eise Eisinga).","Cunoscută pentru bovinele frizone alb-negru.","Patru insule Wadden aparțin provinciei Frizia.","Are o lungă tradiție în sporturile nautice și construcția de bărci."],
    en: ["Frisian is the second official language here.","Leeuwarden is the capital of the province.","Famous for the 'Elfstedentocht' ice skating race.","The Frisian Lakes are a popular sailing area.","Houses the oldest working planetarium in Europe (Eise Eisinga).","Known for the black and white Frisian cattle.","Four Wadden Islands belong to the province of Friesland.","Has a long tradition in water sports and boat building."]
  },
  factsAdvanced: {
    de: [
      "Westfriesisch wird von mehr als der Hälfte der Einwohner Frieslands als Muttersprache gesprochen.",
      "Die Elfstedentocht, ein legendäres Eisschnelllaufrennen über 200 Kilometer, findet auf den Kanälen der Provinz statt, wenn diese stark genug zugefroren sind.",
      "Friesland hat 11 historische Städte, die alle im Mittelalter Stadtrechte erhielten.",
      "Das Wattenmeer, das an Friesland grenzt, ist ein UNESCO-Weltnaturerbe."
    ],
    hu: ["A fríz egy hivatalosan elismert nyelv, amelyet a holland mellett beszélnek itt.", "A tartomány büszkélkedhet Hollandia legnagyobb összefüggő tavainak hálózatával.", "Az Elfstedentocht (tizenegy városos túra) egy legendás, közel 200 km hosszú korcsolyaverseny.", "Itt található a Wadden-tenger több szigete, amely UNESCO Világörökségi helyszín."],
    ro: [
      "Frizona de vest este o limbă recunoscută oficial, vorbită alături de olandeză.",
      "Provincia se mândrește cu cea mai mare rețea de lacuri interconectate din Olanda.",
      "Elfstedentocht este o cursă legendară de patinaj pe gheață cu o lungime de aproape 200 km.",
      "Mai multe insule din Marea Wadden, un sit al Patrimoniului Mondial UNESCO, sunt situate aici."
    ],
    en: [
      "West Frisian is spoken as a native language by more than half of Friesland's residents.",
      "The Elfstedentocht, a legendary 200-kilometer ice skating race, takes place on the province's canals when they freeze solidly enough.",
      "Friesland has 11 historical cities, all of which received city rights in the Middle Ages.",
      "The Wadden Sea, which borders Friesland, is a UNESCO World Heritage natural site."
    ]
  }
  },
  {
    id: "NL-GE", type: "region", parent: "NL", coords: [5.92, 52.05],
    name: { de: "Gelderland", hu: "Gelderland", ro: "Gelderland", en: "Gelderland" },
    image: "/geo-images/netherlands/gelderland.webp",
    description: {
      de: "Gelderland ist die flächenmäßig größte Provinz der Niederlande, bekannt für den Nationalpark De Hoge Veluwe und die historische Stadt Nijmegen.",
      hu: "Gelderland Hollandia legnagyobb területű tartománya, amely a De Hoge Veluwe Nemzeti Parkról és Nijmegen történelmi városáról ismert.",
      ro: "Gelderland este cea mai mare provincie din Olanda ca suprafață, cunoscută pentru Parcul Național De Hoge Veluwe și orașul istoric Nijmegen.",
      en: "Gelderland is the largest province in the Netherlands by area, known for the De Hoge Veluwe National Park and the historic city of Nijmegen."
    },
    descriptionAdvanced: {
    de: "Gelderland ist die flächenmäßig größte Provinz der Niederlande und liegt im Osten und in der Mitte des Landes. Sie ist besonders bekannt für ihre abwechslungsreiche Natur, zu der die bewaldeten Hügel der Veluwe, weitläufige Heideflächen und die Flusstäler von Rhein, Waal und IJssel gehören. Historisch war die Region ein mächtiges Herzogtum, wovon heute noch zahlreiche Schlösser und Burgen zeugen, wie zum Beispiel Schloss Rosendael. Die Hauptstadt Arnhem spielte eine entscheidende Rolle in der Endphase des Zweiten Weltkriegs, bekannt durch die Schlacht um Arnhem. Geschichte K8: Während der Operation Market Garden 1944 versuchten alliierte Truppen, Brücken in Gelderland zu erobern. Welches strategische Ziel verfolgten sie damit?",
    hu: "Gelderland Hollandia legnagyobb területű tartománya, amely változatos tájairól ismert, az erdős Veluwe régiótól kezdve az ország legjelentősebb folyóinak völgyéig. A tartomány gazdag történelemmel büszkélkedhet, amelyet számos kastély, erődítmény és középkori város, például Arnhem és Nijmegen őriz. Arnhem a II. világháború során a Market Garden hadművelet egyik kulcsfontosságú helyszíne volt. A Veluwe Nemzeti Park lenyűgöző természeti kincsekkel és művészeti gyűjteményekkel várja a látogatókat. Történelem K8: Miért volt stratégiai jelentősége Arnhem városának a második világháborúban?",
    ro: "Gelderland este cea mai mare provincie din Olanda ca suprafață, situată în estul și centrul țării. Este cunoscută pentru natura sa diversificată, incluzând dealurile împădurite din Veluwe, mlaștinile și văile râurilor Rin, Waal și IJssel. Istoric, regiunea a fost un ducat puternic, cu numeroase castele și cetăți medievale, cum ar fi Castelul Rosendael. Capitala Arnhem a jucat un rol crucial în faza finală a celui de-al Doilea Război Mondial. Istorie K8: În timpul Operațiunii Market Garden din 1944, trupele aliate au încercat să captureze poduri în Gelderland. Ce obiectiv strategic urmăreau?",
    en: "Gelderland is the largest province in the Netherlands by area, located in the east and center of the country. It is particularly known for its diverse nature, which includes the forested hills of the Veluwe, vast heathlands, and the river valleys of the Rhine, Waal, and IJssel. Historically, the region was a powerful duchy, as evidenced today by numerous castles and fortresses, such as Rosendael Castle. The capital Arnhem played a crucial role in the final phase of World War II, known through the Battle of Arnhem. History K8: During Operation Market Garden in 1944, Allied troops attempted to capture bridges in Gelderland. What strategic goal were they pursuing?"
  },
  facts: {
    de: ["Gelderland ist die flächengrößte Provinz der Niederlande.","Arnhem ist die Hauptstadt und Nijmegen die größte Stadt.","Der Nationalpark De Hoge Veluwe liegt hier.","Nijmegen gilt als die älteste Stadt der Niederlande.","Schauplatz der Operation Market Garden im Zweiten Weltkrieg.","Der Fluss Rhein durchquert die Provinz.","Bekannt für Obstbau in der Region Betuwe.","Das Kröller-Müller-Museum ist eine Top-Attraktion der Provinz."],
    hu: ["Gelderland területét tekintve Hollandia legnagyobb tartománya.","Arnhem a főváros, és Nijmegen a legnagyobb város.","Itt található a De Hoge Veluwe Nemzeti Park.","Nijmegen Hollandia legrégebbi városának számít.","A Market Garden hadművelet helyszíne a második világháborúban.","A Rajna folyó átszeli a tartományt.","A Betuwe régió gyümölcstermesztéséről ismert.","A Kröller-Müller Múzeum a tartomány egyik fő látványossága."],
    ro: ["Gelderland este cea mai mare provincie din Olanda după suprafață.","Arnhem este capitala și Nijmegen este cel mai mare oraș.","Parcul Național De Hoge Veluwe se află aici.","Nijmegen este considerat cel mai vechi oraÈ™ din Olanda.","Locul Operațiunii Market Garden din timpul celui de-al Doilea Război Mondial.","Fluviul Rin traversează provincia.","Cunoscută pentru pomicultură în regiunea Betuwe.","Muzeul Kröller-Müller este o atracție principală a provinciei."],
    en: ["Gelderland is the largest province in the Netherlands by area.","Arnhem is the capital and Nijmegen is the largest city.","The De Hoge Veluwe National Park is located here.","Nijmegen is considered the oldest city in the Netherlands.","Site of Operation Market Garden during World War II.","The Rhine River crosses the province.","Known for fruit growing in the Betuwe region.","The Kröller-Müller Museum is a top attraction in the province."]
  },
  factsAdvanced: {
    de: [
      "Der Nationalpark De Hoge Veluwe in Gelderland ist das größte zusammenhängende Naturschutzgebiet der Niederlande.",
      "Gelderland produziert einen Großteil der niederländischen Äpfel und Birnen, insbesondere in der Region Betuwe.",
      "Die Stadt Nijmegen in Gelderland beansprucht, die älteste Stadt der Niederlande zu sein.",
      "Arnhem verfügt über das einzige Obus-System (Trolleybus) der Niederlande."
    ],
    hu: ["A Hoge Veluwe Nemzeti Park Hollandia legnagyobb összefüggő természetvédelmi területe.", "Nijmegen, Gelderland egyik városa, Hollandia egyik legrégebbi települése, a római korban alapították.", "A tartományban található a Kröller-Müller Múzeum, amely a világ második legnagyobb Van Gogh-gyűjteményét őrzi.", "Gelderland a holland gyümölcstermesztés központja, különösen a Betuwe régió."],
    ro: [
      "Parcul Național De Hoge Veluwe din Gelderland este cea mai mare rezervație naturală continuă din Olanda.",
      "Orașul Nijmegen revendică titlul de cel mai vechi oraș din Țările de Jos, având o istorie romană.",
      "Muzeul Kröller-Müller, situat aici, adăpostește a doua cea mai mare colecție Van Gogh din lume.",
      "Gelderland produce o mare parte din fructele olandeze, în special în regiunea Betuwe."
    ],
    en: [
      "The De Hoge Veluwe National Park in Gelderland is the largest continuous nature reserve in the Netherlands.",
      "Gelderland produces a large proportion of Dutch apples and pears, particularly in the Betuwe region.",
      "The city of Nijmegen in Gelderland claims to be the oldest city in the Netherlands.",
      "Arnhem has the only trolleybus system in the Netherlands."
    ]
  }
  },
  {
    id: "NL-GR", type: "region", parent: "NL", coords: [6.66, 53.22],
    name: { de: "Groningen", hu: "Groningen", ro: "Groningen", en: "Groningen" },
    image: "/geo-images/netherlands/groningen.webp",
    description: {
      de: "Groningen ist die nordöstlichste Provinz der Niederlande, bekannt für ihre weiten Polderlandschaften und die lebendige Universitätsstadt Groningen.",
      hu: "Groningen Hollandia legészakkeletibb tartománya, amely kiterjedt polderjeiről és vibráló egyetemi városáról, Groningenről ismert.",
      ro: "Groningen este cea mai nord-estică provincie a Olandei, cunoscută pentru peisajele sale vaste de poldere și orașul universitar vibrant Groningen.",
      en: "Groningen is the northeasternmost province of the Netherlands, known for its vast polder landscapes and the vibrant university city of Groningen."
    },
    descriptionAdvanced: {
    de: "Groningen ist die nordöstlichste Provinz der Niederlande und vereint weite landwirtschaftliche Flächen mit einer der lebendigsten Universitätsstädte des Landes. Die Region war historisch stark durch den Handel geprägt und profitierte vom Torfabbau und später von großen Erdgasfunden im 20. Jahrhundert. Die Landschaft zeichnet sich durch charakteristische alte Bauernhöfe und weite Polder aus. Die gleichnamige Hauptstadt wird oft als 'Metropole des Nordens' bezeichnet und hat eine lange Geschichte als Hansestadt. Geografie K7: In Groningen wurde jahrelang Erdgas gefördert, was zu Erdbeben führte. Wie entsteht ein Erdbeben durch die Entnahme von Gas aus dem Boden?",
    hu: "Groningen a legészakibb holland tartomány, amelyet lenyűgöző kontrasztok jellemeznek: az egyetemi város élénk nyüzsgése és a vidék végtelen, csendes polderei. A tartomány fővárosa, Groningen városa évszázadok óta a régió kulturális és gazdasági központja, ahol a fiatalos egyetemi élet történelmi építészettel párosul. A vidék gazdag agrárterület, ahol monumentális régi tanyák (úgynevezett herenboerderijen) találhatók. A tartomány alatt található Európa egyik legnagyobb földgázmezője is. Földrajz K8: A földgáz kitermelése milyen geológiai problémákat okozott Groningen tartományban az elmúlt évtizedekben?",
    ro: "Groningen, cea mai nord-estică provincie a Olandei, combină vaste terenuri agricole cu unul dintre cele mai vibrante orașe universitare din țară. Regiunea a fost modelată istoric de comerț, profitând de extracția turbei și, mai târziu, de mari rezerve de gaze naturale descoperite în secolul al XX-lea. Peisajul se remarcă prin ferme vechi caracteristice și poldere întinse. Capitala cu același nume este adesea numită \\\\\\\"Metropola Nordului\\\\\\\" și are o lungă istorie ca oraș hanseatic. Geografie K7: Extracția gazelor naturale a provocat cutremure în Groningen. Cum se produce un cutremur în urma extragerii gazului din sol?",
    en: "Groningen is the northeasternmost province of the Netherlands, combining vast agricultural lands with one of the most vibrant university cities in the country. The region was historically heavily shaped by trade and profited from peat extraction, and later from large natural gas discoveries in the 20th century. The landscape features characteristic old farmhouses and wide polders. The capital of the same name is often called the 'Metropolis of the North' and has a long history as a Hanseatic city. Geography K7: Natural gas was extracted in Groningen for years, leading to earthquakes. How does an earthquake occur due to gas extraction from the ground?"
  },
  facts: {
    de: ["Groningen ist die nordöstlichste Provinz des Landes.","Die gleichnamige Stadt beherbergt eine der ältesten Universitäten der Niederlande.","Verfügt über das größte Onshore-Erdgasfeld Europas.","Die Landschaft ist geprägt von mittelalterlichen 'Borg'-Häusern.","Ein Zentrum der Fahrradkultur, mit einem extrem fahrradfreundlichen Zentrum.","Der Martiniturm in Groningen ist das Wahrzeichen der Region.","Die Festung Bourtange liegt nahe der deutschen Grenze.","Der Seehafen Eemshaven ist ein wichtiger Energie- und Datenknotenpunkt."],
    hu: ["Groningen az ország legészakkeletibb tartománya.","Az azonos nevű város Hollandia egyik legrégebbi egyetemének ad otthont.","Itt található Európa legnagyobb szárazföldi földgázmezője.","A tájat a középkori 'Borg' házak jellemzik.","A kerékpáros kultúra központja, rendkívül kerékpárosbarát központtal.","A groningeni Martini-torony a régió jelképe.","A Bourtange erőd a német határ közelében található.","Az Eemshaven tengeri kikötő fontos energia- és adatközpont."],
    ro: ["Groningen este cea mai nord-estică provincie a țării.","Orașul cu același nume găzduiește una dintre cele mai vechi universități din Olanda.","Are cel mai mare zăcământ de gaze naturale onshore din Europa.","Peisajul este caracterizat de case medievale 'Borg'.","Un centru al culturii bicicletelor, cu un centru extrem de prietenos pentru biciclete.","Turnul Martini din Groningen este simbolul regiunii.","Cetatea Bourtange este situată în apropierea graniței cu Germania.","Portul maritim Eemshaven este un important centru de energie și date."],
    en: ["Groningen is the northeasternmost province of the country.","The city of the same name is home to one of the oldest universities in the Netherlands.","Has the largest onshore natural gas field in Europe.","The landscape is characterized by medieval 'Borg' houses.","A center of bicycle culture, with an extremely bicycle-friendly center.","The Martini Tower in Groningen is the landmark of the region.","The Bourtange fortress is located near the German border.","The Eemshaven seaport is an important energy and data hub."]
  },
  factsAdvanced: {
    de: [
      "Das Groningen-Gasfeld war das größte Erdgasfeld in Westeuropa.",
      "Die Universität Groningen, gegründet 1614, ist eine der ältesten und renommiertesten Universitäten der Niederlande.",
      "Der Martiniturm in der Stadt Groningen ist 97 Meter hoch und ein Wahrzeichen der Provinz.",
      "In der Provinz steht die Festung Bourtange, eine perfekt erhaltene sternförmige Festungsanlage aus dem 16. Jahrhundert."
    ],
    hu: ["A groningeni egyetemet 1614-ben alapították, így Hollandia egyik legrégebbi egyeteme.", "A tartomány alatt fekvő slochtereni földgázmező Európa legnagyobbja.", "A Bourtange erőd egy csillag alakú védelmi építmény a spanyol-holland háború idejéből.", "A Martini-torony Groningen városának szimbóluma, amely több mint 500 éves."],
    ro: [
      "Universitatea din Groningen, fondată în 1614, este una dintre cele mai vechi din Olanda.",
      "Câmpul de gaze Slochteren situat sub provincie este cel mai mare din Europa.",
      "Fortăreața Bourtange este o structură defensivă în formă de stea datând din Războiul de Optzeci de Ani.",
      "Turnul Martini este simbolul orașului Groningen și are o vechime de peste 500 de ani."
    ],
    en: [
      "The Groningen gas field was the largest natural gas field in Western Europe.",
      "The University of Groningen, founded in 1614, is one of the oldest and most prestigious universities in the Netherlands.",
      "The Martini Tower in the city of Groningen is 97 meters high and a landmark of the province.",
      "The province is home to the Bourtange fortress, a perfectly preserved star-shaped fortification from the 16th century."
    ]
  }
  },
  {
    id: "NL-LI", type: "region", parent: "NL", coords: [5.93, 51.19],
    name: { de: "Limburg", hu: "Limburg", ro: "Limburg", en: "Limburg" },
    image: "/geo-images/netherlands/limburg.webp",
  description: {
    de: "Limburg ist die südlichste Provinz der Niederlande und grenzt an Deutschland sowie Belgien. Im Gegensatz zum Rest des Landes ist die Landschaft hier sanft hügelig, was ihr einen einzigartigen Charme verleiht. Die Hauptstadt Maastricht strahlt eine fast südeuropäische Atmosphäre aus und ist historisch durch den Vertrag von Maastricht bedeutend. Die Region ist berühmt für ihren Burgunder-Lebensstil, Spargel, Höhlen und traditionellen Vlaai (Kuchen).",
    hu: "Limburg Hollandia legdélibb tartománya, amely Németországgal és Belgiummal határos. Az ország többi részével ellentétben a táj itt enyhén dombos, ami egyedülálló bájt kölcsönöz neki. A főváros, Maastricht szinte dél-európai hangulatot áraszt, és történelmileg jelentős a maastrichti szerződés révén. A régió híres burgundi életmódjáról, spárgájáról, barlangjairól és a hagyományos vlaai (sütemény) készítéséről.",
    ro: "Limburg este cea mai sudică provincie a Olandei și se învecinează cu Germania și Belgia. Spre deosebire de restul țării, peisajul de aici este ușor deluros, ceea ce îi conferă un farmec unic. Capitala Maastricht emană o atmosferă aproape sud-europeană și este semnificativă istoric prin Tratatul de la Maastricht. Regiunea este renumită pentru stilul său de viață burgund, sparanghel, peșteri și vlaai (plăcintă) tradițională.",
    en: "Limburg is the southernmost province of the Netherlands, bordering Germany and Belgium. Unlike the rest of the country, the landscape here is gently hilly, giving it a unique charm. The capital, Maastricht, exudes an almost southern European atmosphere and is historically significant due to the Maastricht Treaty. The region is famous for its Burgundian lifestyle, asparagus, caves, and traditional vlaai (pie)."
  },
  facts: {
    de: ["Maastricht ist die Hauptstadt der Provinz Limburg.","Einzige hügelige Provinz der ansonsten flachen Niederlande.","Der höchste Punkt des Landes (Vaalserberg) liegt hier im Dreiländereck.","Bekannt für den Limburger Vlaai (einen traditionellen Obstkuchen).","Das historische Zentrum von Maastricht hat eine römische Vergangenheit.","Die Region hat viele Kalksteinhöhlen (z. B. bei Valkenburg).","Starke katholische Traditionen im Vergleich zum Norden.","Der Vertrag von Maastricht (EU-Gründung) wurde hier 1992 unterzeichnet."],
    hu: ["Maastricht Limburg tartomány fővárosa.","Az egyetlen dombos tartomány az egyébként sík Hollandiában.","Itt található az ország legmagasabb pontja (Vaalserberg) a hármashatáron.","A limburgi Vlaai-ról (hagyományos gyümölcsös pite) ismert.","Maastricht történelmi központja római múlttal rendelkezik.","A régióban sok mészkőbarlang található (pl. Valkenburg közelében).","Erős katolikus hagyományok az északi résszel szemben.","A maastrichti szerződést (az EU alapítását) itt írták alá 1992-ben."],
    ro: ["Maastricht este capitala provinciei Limburg.","Singura provincie deluroasă din Olanda altfel plată.","Cel mai înalt punct din țară (Vaalserberg) este situat aici, la granița triplă.","Cunoscută pentru Limburg Vlaai (o plăcintă tradițională cu fructe).","Centrul istoric al orașului Maastricht are un trecut roman.","Regiunea are multe peșteri de calcar (de ex. lângă Valkenburg).","Tradiții catolice puternice în comparație cu nordul.","Tratatul de la Maastricht (înființarea UE) a fost semnat aici în 1992."],
    en: ["Maastricht is the capital of the province of Limburg.","The only hilly province in the otherwise flat Netherlands.","The highest point in the country (Vaalserberg) is located here at the tripoint.","Known for the Limburg Vlaai (a traditional fruit pie).","The historic center of Maastricht has a Roman past.","The region has many limestone caves (e.g., near Valkenburg).","Strong Catholic traditions compared to the north.","The Maastricht Treaty (EU foundation) was signed here in 1992."]
  },
  descriptionAdvanced: {
    de: "Limburg, die südlichste Provinz der Niederlande, unterscheidet sich geografisch und kulturell stark vom Rest des Landes. Die Landschaft ist sanft hügelig, eine Seltenheit in den ansonsten extrem flachen Niederlanden, was sie zu einer beliebten Region für Radsportler macht. Limburg hat eine tief verwurzelte katholische Tradition und ist berühmt für seinen ausgeprägten burgundischen Lebensstil und die vielfältigen regionalen Dialekte. Die Hauptstadt Maastricht am Ufer der Maas ist eine der ältesten Städte des Landes und atmet eine internationale, fast südeuropäische Atmosphäre. Geschichte K7: In Maastricht wurde 1992 ein wichtiger Vertrag unterzeichnet, der zur Gründung der Europäischen Union führte. Welcher Vertrag war das?",
    hu: "Limburg Hollandia legdélebbi tartománya, amely eltér a hagyományos holland síkvidéki tájtól: dombos vidékeivel és kanyargós folyóival inkább Közép-Európára emlékeztet. A régió történelmi kapcsolatban állt a szomszédos német és belga területekkel, ami egyedi kulturális és gasztronómiai hagyományokat eredményezett. Fővárosa, Maastricht az ország egyik legrégebbi városa, és az 1992-es maastrichti szerződés révén az Európai Unió születési helyeként is ismert. Gazdaságilag korábban a szénbányászat központja volt. Történelem K8: Milyen jelentős nemzetközi egyezményt írtak alá Maastrichtban, amely megalapozta az Európai Uniót?",
    ro: "Limburg, cea mai sudică provincie a Olandei, diferă geografic și cultural de restul țării. Peisajul este ușor deluros, o raritate în Olanda care este extrem de plată, fiind o regiune preferată pentru ciclism. Limburg are o tradiție catolică profund înrădăcinată, fiind renumită pentru stilul său de viață burgund și varietatea de dialecte regionale. Capitala Maastricht, situată pe malurile fluviului Maas, este printre cele mai vechi orașe din țară și emană o atmosferă internațională. Istorie K7: În 1992, la Maastricht a fost semnat un tratat important care a condus la înființarea Uniunii Europene. Care a fost acel tratat?",
    en: "Limburg, the southernmost province of the Netherlands, differs geographically and culturally significantly from the rest of the country. The landscape is gently hilly, a rarity in the otherwise extremely flat Netherlands, making it a popular region for cyclists. Limburg has a deeply rooted Catholic tradition and is famous for its distinct Burgundian lifestyle and diverse regional dialects. The capital Maastricht on the banks of the river Maas is one of the oldest cities in the country and exudes an international, almost southern European atmosphere. History K7: An important treaty was signed in Maastricht in 1992 that led to the founding of the European Union. Which treaty was that?"
  },
  factsAdvanced: {
    de: [
      "In Limburg liegt der Dreiländerpunkt (Drielandenpunt), wo die Grenzen von Deutschland, Belgien und den Niederlanden zusammentreffen.",
      "Der höchste natürliche Punkt der europäischen Niederlande, der Vaalserberg, liegt hier in Limburg.",
      "Limburg ist berühmt für seinen weichen, fruchtigen Vlaai, einen traditionellen Kuchen.",
      "Der Vertrag von Maastricht wurde 1992 in der Provinzhauptstadt unterzeichnet."
    ],
    hu: ["A Vaalserberg hegy Limburgban található, és ez Hollandia európai részének legmagasabb pontja.", "A hármashatárpont (Drielandenpunt) itt található, ahol Hollandia, Belgium és Németország találkozik.", "Maastrichtot a rómaiak alapították egy fontos Maas-folyón lévő átkelőhelynél.", "A tartomány híres különleges gyümölcsös pitéjéről, a vlaai-ról."],
    ro: [
      "În Limburg se află Vaalserberg, cel mai înalt punct din Țările de Jos europene.",
      "Aici se găsește punctul celor trei granițe (Drielandenpunt), unde se întâlnesc Olanda, Belgia și Germania.",
      "Maastricht a fost fondat de romani la un punct de trecere important de pe fluviul Maas.",
      "Provincia este renumită pentru vlaai, o plăcintă tradițională delicioasă cu fructe."
    ],
    en: [
      "In Limburg lies the tripoint (Drielandenpunt) where the borders of Germany, Belgium, and the Netherlands meet.",
      "The highest natural point of the European Netherlands, the Vaalserberg, is located here in Limburg.",
      "Limburg is famous for its soft, fruity Vlaai, a traditional pie.",
      "The Maastricht Treaty was signed in the provincial capital in 1992."
    ]
  }
  },
  {
    id: "NL-NB", type: "region", parent: "NL", coords: [5.20, 51.52],
    name: { de: "Nordbrabant", hu: "Észak-Brabant", ro: "Brabantul de Nord", en: "North Brabant" },
    image: "/geo-images/netherlands/north-brabant.webp",
  description: {
    de: "Nordbrabant ist eine charmante und wirtschaftlich starke Provinz im Süden der Niederlande, die für ihre Gemütlichkeit und Gastfreundschaft bekannt ist. Die Region war der Geburtsort des Elektronikriesen Philips und ist heute ein führendes europäisches Technologiezentrum. Neben modernen Städten wie Eindhoven, Breda und Tilburg gibt es hier wunderschöne Nationalparks und den weltberühmten Märchen-Freizeitpark Efteling. Nordbrabant ist zudem das Zentrum des niederländischen Karnevals.",
    hu: "Észak-Brabant egy bájos és gazdaságilag erős tartomány Hollandia déli részén, amely otthonosságáról és vendégszeretetéről ismert. A régió volt a Philips elektronikai óriás szülőhelye, és ma is vezető európai technológiai központ. Az olyan modern városok mellett, mint Eindhoven, Breda és Tilburg, gyönyörű nemzeti parkok és a világhírű Efteling mese-vidámpark is megtalálható itt. Észak-Brabant egyben a holland karnevál központja is.",
    ro: "Brabantul de Nord este o provincie fermecătoare și puternică din punct de vedere economic din sudul Olandei, cunoscută pentru confortul și ospitalitatea sa. Regiunea a fost locul de naștere al gigantului electronic Philips și este acum un important centru tehnologic european. Pe lângă orașe moderne precum Eindhoven, Breda și Tilburg, există parcuri naționale frumoase și faimosul parc de distracții cu basme Efteling. Brabantul de Nord este, de asemenea, centrul carnavalului olandez.",
    en: "North Brabant is a charming and economically strong province in the south of the Netherlands, known for its coziness and hospitality. The region was the birthplace of the electronics giant Philips and is now a leading European technology hub. In addition to modern cities such as Eindhoven, Breda, and Tilburg, there are beautiful national parks and the world-famous Efteling fairytale amusement park. North Brabant is also the center of the Dutch carnival."
  },
  facts: {
    de: ["'s-Hertogenbosch (Den Bosch) ist die Hauptstadt der Provinz.","Eindhoven ist das wichtigste Technologiezentrum (Heimat von Philips).","Der Märchen-Freizeitpark Efteling liegt in Nordbrabant.","Die Region ist das Zentrum des traditionellen niederländischen Karnevals.","Vincent van Gogh wurde in Zundert (Nordbrabant) geboren.","Nationalparks wie die Loonse und Drunense Dünen prägen die Natur.","Breda hat starke historische Verbindungen zur königlichen Familie.","Die Design Academy Eindhoven ist weltweit anerkannt."],
    hu: ["'s-Hertogenbosch (Den Bosch) a tartomány fővárosa.","Eindhoven a legfontosabb technológiai központ (a Philips hazája).","Az Efteling mese-vidámpark Észak-Brabantban található.","A régió a hagyományos holland karnevál központja.","Vincent van Gogh Zundertben (Észak-Brabant) született.","A természetet olyan nemzeti parkok jellemzik, mint a Loonse és a Drunense Duinen.","Breda erős történelmi kapcsolatokkal rendelkezik a királyi családdal.","Az eindhoveni Design Academy világszerte elismert."],
    ro: ["'s-Hertogenbosch (Den Bosch) este capitala provinciei.","Eindhoven este cel mai important centru tehnologic (casa Philips).","Parcul de distracții Efteling se află în Brabantul de Nord.","Regiunea este centrul carnavalului tradițional olandez.","Vincent van Gogh s-a născut în Zundert (Brabantul de Nord).","Parcurile naționale precum Dunele Loonse și Drunense caracterizează natura.","Breda are legături istorice puternice cu familia regală.","Design Academy Eindhoven este recunoscută la nivel mondial."],
    en: ["'s-Hertogenbosch (Den Bosch) is the capital of the province.","Eindhoven is the main technology center (home of Philips).","The Efteling fairytale amusement park is located in North Brabant.","The region is the center of the traditional Dutch carnival.","Vincent van Gogh was born in Zundert (North Brabant).","National parks such as the Loonse and Drunense Dunes characterize the nature.","Breda has strong historical connections to the royal family.","The Design Academy Eindhoven is globally recognized."]
  },
  descriptionAdvanced: {
    de: "Nordbrabant liegt im Süden der Niederlande und ist eine Provinz mit einem reichen industriellen und kulturellen Erbe. Die Region vereint historische Städte wie 's-Hertogenbosch und Breda mit modernen Technologiezentren wie Eindhoven, das durch den Philips-Konzern geprägt wurde. Die Kultur hier gilt als sehr gesellig, was sich im ausgiebig gefeierten Karneval und der traditionellen Gastfreundschaft zeigt. Nordbrabant ist zudem die Heimatstadt von Vincent van Gogh, dessen frühe Werke von der rauen Landschaft und den Bauern der Region inspiriert wurden. Kunst K6: Vincent van Gogh wurde in Nordbrabant geboren. In welchem Stil malte er seine berühmten, farbenfrohen Sonnenblumen?",
    hu: "Észak-Brabant (Noord-Brabant) egy gazdaságilag és kulturálisan is meghatározó tartomány Dél-Hollandiában. Ismert barátságos, \\\\\\\"burgundi\\\\\\\" életmódjáról, amely a jó ételeket és a társasági életet ünnepli. Fővárosa 's-Hertogenbosch (Den Bosch), míg Eindhoven a technológia és az innováció globális központja, részben a Philips vállalat alapításának köszönhetően. A tartomány természeti szépségeit a Loonse en Drunense Duinen homokdűnéi és a Biesbosch nemzeti parkjai kínálják. Földrajz K7: Miért nevezik Eindhovent a 'Fény Városának', és melyik nagyvállalathoz köthető ez?",
    ro: "Brabantul de Nord (Noord-Brabant) este o provincie determinantă economic și cultural din sudul Olandei. Este cunoscută pentru stilul său de viață prietenos, \\\\\\\"burgund\\\\\\\", care celebrează mâncarea bună și socializarea. Capitala sa este 's-Hertogenbosch (Den Bosch), în timp ce Eindhoven este un centru global de tehnologie și inovație, parțial datorită fondării companiei Philips. Frumusețile naturale ale provinciei includ dunele de nisip din Loonse en Drunense Duinen și parcul național Biesbosch. Geografie K7: De ce este Eindhoven numit \\\\\\\"Orașul Luminii\\\\\\\" și de ce companie majoră este legat?",
    en: "North Brabant is located in the south of the Netherlands and is a province with a rich industrial and cultural heritage. The region combines historical cities like 's-Hertogenbosch and Breda with modern technology hubs like Eindhoven, which was shaped by the Philips corporation. The culture here is considered very sociable, evident in the extensively celebrated carnival and traditional hospitality. North Brabant is also the home province of Vincent van Gogh, whose early works were inspired by the rough landscape and the farmers of the region. Art K6: Vincent van Gogh was born in North Brabant. In what style did he paint his famous, colorful sunflowers?"
  },
  factsAdvanced: {
    de: [
      "Eindhoven in Nordbrabant ist eines der wichtigsten Technologiezentren Europas, oft als 'Brainport' bezeichnet.",
      "Die Provinz beherbergt Efteling, den größten und ältesten Freizeitpark der Niederlande.",
      "In Zundert, einer Gemeinde in Nordbrabant, wurde der berühmte Maler Vincent van Gogh geboren.",
      "Der Karneval in Brabant wird stark gefeiert, und viele Städte nehmen für diese Zeit spezielle Karnevalsnamen an."
    ],
    hu: ["Eindhoven Európa egyik legjelentősebb technológiai és design központja.", "A híres holland festő, Vincent van Gogh Észak-Brabantban született (Zundertben).", "Az Efteling, Európa egyik legrégebbi és legnépszerűbb vidámparkja is ebben a tartományban van.", "Itt ünneplik a holland karnevál leglátványosabb eseményeit."],
    ro: [
      "Eindhoven este unul dintre cele mai importante centre de tehnologie și design din Europa.",
      "Celebrul pictor olandez Vincent van Gogh s-a născut în Brabantul de Nord (în Zundert).",
      "Efteling, unul dintre cele mai vechi și mai populare parcuri de distracții din Europa, se află aici.",
      "Aici sunt sărbătorite cele mai spectaculoase evenimente ale carnavalului olandez."
    ],
    en: [
      "Eindhoven in North Brabant is one of Europe's most important technology centers, often referred to as 'Brainport'.",
      "The province is home to Efteling, the largest and oldest amusement park in the Netherlands.",
      "The famous painter Vincent van Gogh was born in Zundert, a municipality in North Brabant.",
      "Carnival is heavily celebrated in Brabant, and many cities adopt special carnival names during this time."
    ]
  }
  },
  {
    id: "NL-NH", type: "region", parent: "NL", coords: [4.84, 52.56],
    name: { de: "Nordholland", hu: "Észak-Holland", ro: "Olanda de Nord", en: "North Holland" },
    image: "/geo-images/netherlands/north-holland.webp",
  description: {
    de: "Nordholland ist eine der wichtigsten und bevölkerungsreichsten Provinzen der Niederlande, die das pulsierende Amsterdam, historische Städte und breite Nordseestrände umfasst. Sie bildet zusammen mit Südholland das historische Herz der niederländischen Wirtschaft und Kultur. Die Provinz beheimatet Schiphol, einen der größten Flughäfen Europas, sowie pittoreske Fischerdörfer wie Volendam. Der Kontrast zwischen der internationalen Metropole Amsterdam und den traditionellen Windmühlen an der Zaanse Schans ist bemerkenswert.",
    hu: "Észak-Holland Hollandia egyik legfontosabb és legnépesebb tartománya, amely magában foglalja a nyüzsgő Amszterdamot, történelmi városokat és széles északi-tengeri strandokat. Dél-Hollandiával együtt a holland gazdaság és kultúra történelmi szívét alkotja. A tartomány ad otthont Schipholnak, Európa egyik legnagyobb repülőterének, valamint festői halászfalvaknak, mint Volendam. Az amszterdami nemzetközi metropolisz és a Zaanse Schans hagyományos szélmalmai közötti kontraszt figyelemre méltó.",
    ro: "Olanda de Nord este una dintre cele mai importante și populate provincii ale Olandei, cuprinzând vibrantul Amsterdam, orașe istorice și plaje largi la Marea Nordului. Împreună cu Olanda de Sud, formează inima istorică a economiei și culturii olandeze. Provincia găzduiește Schiphol, unul dintre cele mai mari aeroporturi din Europa, precum și sate de pescari pitorești precum Volendam. Contrastul dintre metropola internațională Amsterdam și morile de vânt tradiționale de pe Zaanse Schans este remarcabil.",
    en: "North Holland is one of the most important and populous provinces of the Netherlands, encompassing vibrant Amsterdam, historic cities, and wide North Sea beaches. Together with South Holland, it forms the historical heart of the Dutch economy and culture. The province is home to Schiphol, one of Europe's largest airports, as well as picturesque fishing villages such as Volendam. The contrast between the international metropolis of Amsterdam and the traditional windmills at the Zaanse Schans is remarkable."
  },
  facts: {
    de: ["Haarlem ist die Hauptstadt der Provinz Nordholland.","Amsterdam, die größte Stadt des Landes, liegt hier.","Der internationale Flughafen Schiphol gehört zur Provinz.","Bekannt für das Freilichtmuseum Zaanse Schans.","Der Käsemarkt in Alkmaar ist eine weltweite Touristenattraktion.","Texel, die größte niederländische Watteninsel, gehört zu Nordholland.","Ein Großteil des Gebiets liegt unter dem Meeresspiegel.","Umfasst die wichtigsten historischen Häfen des Goldenen Zeitalters."],
    hu: ["Haarlem Észak-Holland tartomány fővárosa.","Amszterdam, az ország legnagyobb városa itt található.","A Schiphol nemzetközi repülőtér a tartományhoz tartozik.","A Zaanse Schans szabadtéri múzeumról ismert.","Az alkmaari sajtpiac világszerte ismert turisztikai látványosság.","Texel, a legnagyobb holland Watt-sziget Észak-Hollandiához tartozik.","A terület nagy része a tengerszint alatt fekszik.","Magában foglalja az aranykor legfontosabb történelmi kikötőit."],
    ro: ["Haarlem este capitala provinciei Olanda de Nord.","Amsterdam, cel mai mare oraș din țară, este situat aici.","Aeroportul Internațional Schiphol aparține provinciei.","Cunoscută pentru muzeul în aer liber Zaanse Schans.","Piața de brânză din Alkmaar este o atracție turistică la nivel mondial.","Texel, cea mai mare insulă Wadden olandeză, aparține Olandei de Nord.","O mare parte a zonei se află sub nivelul mării.","Include cele mai importante porturi istorice din Epoca de Aur."],
    en: ["Haarlem is the capital of the province of North Holland.","Amsterdam, the largest city in the country, is located here.","Schiphol International Airport belongs to the province.","Known for the Zaanse Schans open-air museum.","The cheese market in Alkmaar is a worldwide tourist attraction.","Texel, the largest Dutch Wadden Island, belongs to North Holland.","Much of the area is below sea level.","Includes the most important historic ports of the Golden Age."]
  },
  descriptionAdvanced: {
    de: "Nordholland ist eine der wirtschaftlich und kulturell bedeutendsten Provinzen der Niederlande, mit Amsterdam als strahlendem Zentrum. Die Provinz umfasst eine vielfältige Landschaft von den langen Nordseestränden im Westen bis hin zu den alten Zuiderzee-Städten im Osten. Historisch war Nordholland das Herzstück des niederländischen Goldenen Zeitalters im 17. Jahrhundert, als der Handel über die Ozeane immensen Reichtum in Städte wie Haarlem, Alkmaar und Hoorn brachte. Die Provinz ist auch bekannt für ihre Blumenzwiebelregion, wo im Frühling ausgedehnte Tulpenfelder blühen. Geografie K5: Nordholland grenzt an das IJsselmeer, das früher ein salziges Binnenmeer war. Warum hat man dieses Meer durch einen Deich von der Nordsee getrennt?",
    hu: "Észak-Holland (Noord-Holland) egy félsziget alakú tartomány, amelyet nyugatról az Északi-tenger, keletről pedig az IJsselmeer határol. Ebben a tartományban található az ország fővárosa, Amszterdam, valamint Schiphol nemzetközi repülőtere, amely Hollandia legfontosabb gazdasági motorja. A régió északi része gazdag polderekben, szélmalmokban és hagyományos halászfalvakban, mint például Volendam és Marken. Itt található a sajtpiacáról híres Alkmaar is. Gazdaság K7: Milyen szerepet játszott Amszterdam a 17. századi globális kereskedelemben?",
    ro: "Olanda de Nord (Noord-Holland) este o provincie în formă de peninsulă, mărginită la vest de Marea Nordului și la est de IJsselmeer. Aici se află capitala țării, Amsterdam, precum și aeroportul internațional Schiphol, cel mai important motor economic al Olandei. Partea de nord a regiunii este bogată în poldere, mori de vânt și sate tradiționale de pescari, precum Volendam și Marken. Tot aici se află și Alkmaar, faimos pentru piața sa de brânză. Economie K7: Ce rol a jucat Amsterdam în comerțul global din secolul al XVII-lea?",
    en: "North Holland is one of the most economically and culturally significant provinces in the Netherlands, with Amsterdam as its radiant center. The province encompasses a diverse landscape from the long North Sea beaches in the west to the old Zuiderzee towns in the east. Historically, North Holland was the heart of the Dutch Golden Age in the 17th century, when transoceanic trade brought immense wealth to cities like Haarlem, Alkmaar, and Hoorn. The province is also known for its bulb-growing region, where extensive tulip fields bloom in spring. Geography K5: North Holland borders the IJsselmeer, which used to be a salty inland sea. Why was this sea separated from the North Sea by a dike?"
  },
  factsAdvanced: {
    de: [
      "Amsterdam, die Hauptstadt der Niederlande, liegt in Nordholland.",
      "Der Flughafen Schiphol, einer der größten und wichtigsten Flughäfen Europas, befindet sich in dieser Provinz.",
      "Die Insel Texel im Wattenmeer ist die größte der niederländischen Nordseeinseln und gehört zu Nordholland.",
      "Nordholland ist ein wichtiger Standort für die niederländische Käseproduktion, berühmt durch Städte wie Alkmaar und Edam."
    ],
    hu: ["A tartomány területének nagy része mesterségesen kiszárított föld (polder).", "Az amszterdami Schiphol repülőtér egy kiszáradt tó medrében épült, 4 méterrel a tengerszint alatt.", "A Zaanse Schans szabadtéri múzeum a 18-19. századi ipari szélmalmokat mutatja be.", "Texel szigete Észak-Hollandiához tartozik, és népszerű madármegfigyelő hely."],
    ro: [
      "O mare parte din teritoriul provinciei este pământ asanat artificial (polder).",
      "Aeroportul Schiphol din Amsterdam a fost construit în albia unui lac secat, la 4 metri sub nivelul mării.",
      "Muzeul în aer liber Zaanse Schans prezintă mori de vânt industriale din secolele XVIII-XIX.",
      "Insula Texel aparține Olandei de Nord și este un loc popular pentru observarea păsărilor."
    ],
    en: [
      "Amsterdam, the capital of the Netherlands, is located in North Holland.",
      "Schiphol Airport, one of the largest and most important airports in Europe, is situated in this province.",
      "The island of Texel in the Wadden Sea is the largest of the Dutch North Sea islands and belongs to North Holland.",
      "North Holland is a major center for Dutch cheese production, famous for cities like Alkmaar and Edam."
    ]
  }
  },
  {
    id: "NL-OV", type: "region", parent: "NL", coords: [6.46, 52.44],
    name: { de: "Overijssel", hu: "Overijssel", ro: "Overijssel", en: "Overijssel" },
    image: "/geo-images/netherlands/overijssel.webp",
  description: {
    de: "Overijssel ist eine von Natur und Geschichte geprägte Provinz im Osten der Niederlande. Die Landschaft variiert von den morastigen Gebieten in Nordwesten bis zu den ausgedehnten Wäldern und historischen Landgütern im Osten. Zahlreiche alte Hansestädte wie Zwolle, Kampen und Deventer zeugen von der großen Bedeutung der Region im mittelalterlichen Handel. Ein absolutes Highlight ist das autofreie Wasserdorf Giethoorn, auch 'Venedig des Nordens' genannt.",
    hu: "Overijssel természettel és történelemmel átszőtt tartomány Hollandia keleti részén. A táj az északnyugati mocsaras területektől a keleti kiterjedt erdőkig és történelmi birtokokig változik. Számos régi Hanza-város, mint Zwolle, Kampen és Deventer tanúskodik a régió középkori kereskedelemben betöltött nagy jelentőségéről. Abszolút fénypont az autómentes vízi falu, Giethoorn, más néven 'Észak Velencéje'.",
    ro: "Overijssel este o provincie plină de natură și istorie din estul Olandei. Peisajul variază de la zonele mlăștinoase din nord-vest până la pădurile întinse și moșiile istorice din est. Numeroase orașe hanseatice vechi, cum ar fi Zwolle, Kampen și Deventer, mărturisesc importanța mare a regiunii în comerțul medieval. Un punct de atracție absolut este satul de apă fără mașini Giethoorn, cunoscut și sub numele de 'Veneția Nordului'.",
    en: "Overijssel is a province steeped in nature and history in the east of the Netherlands. The landscape varies from the marshy areas in the northwest to the extensive forests and historic estates in the east. Numerous old Hanseatic cities such as Zwolle, Kampen, and Deventer bear witness to the region's great importance in medieval trade. An absolute highlight is the car-free water village of Giethoorn, also known as the 'Venice of the North'."
  },
  facts: {
    de: ["Zwolle ist die historische Hauptstadt der Provinz.","Beherbergt das idyllische Wasserdorf Giethoorn.","Verfügt über viele alte Hansestädte wie Kampen und Deventer.","Die Universität Twente befindet sich in Enschede.","Die Landschaft umfasst den Nationalpark Sallandse Heuvelrug.","Der Fluss IJssel bildet die natürliche Grenze zu Gelderland.","Ehemaliges Zentrum der Textilindustrie (Region Twente).","Die Region ist bekannt für ihre ländlichen Landgüter und Schlösser."],
    hu: ["Zwolle a tartomány történelmi fővárosa.","Itt található az idilli vízi falu, Giethoorn.","Számos régi Hanza-várossal rendelkezik, mint Kampen és Deventer.","A Twentei Egyetem Enschedében található.","A táj magában foglalja a Sallandse Heuvelrug Nemzeti Parkot.","Az IJssel folyó képezi a természetes határt Gelderland felé.","A textilipar egykori központja (Twente régió).","A régió ismert vidéki birtokairól és kastélyairól."],
    ro: ["Zwolle este capitala istorică a provinciei.","Găzduiește satul de apă idilic Giethoorn.","Are multe orașe hanseatice vechi, cum ar fi Kampen și Deventer.","Universitatea din Twente este situată în Enschede.","Peisajul include Parcul Național Sallandse Heuvelrug.","Râul IJssel formează granița naturală cu Gelderland.","Fostul centru al industriei textile (regiunea Twente).","Regiunea este cunoscută pentru moșiile și castelele sale rurale."],
    en: ["Zwolle is the historic capital of the province.","Home to the idyllic water village of Giethoorn.","Has many old Hanseatic cities such as Kampen and Deventer.","The University of Twente is located in Enschede.","The landscape includes the Sallandse Heuvelrug National Park.","The river IJssel forms the natural border with Gelderland.","Former center of the textile industry (Twente region).","The region is known for its rural estates and castles."]
  },
  descriptionAdvanced: {
    de: "Overijssel liegt im Osten der Niederlande und zeichnet sich durch eine Mischung aus historischen Hansestädten, Polderlandschaften und sandigen Naturgebieten aus. Die Provinz wird von der IJssel durchzogen, einem Seitenarm des Rheins, der für den mittelalterlichen Handel von entscheidender Bedeutung war. In der Region Twente im Osten der Provinz entwickelte sich im 19. Jahrhundert eine bedeutende Textilindustrie, die Städte wie Enschede groß machte. Ein touristisches Highlight der Provinz ist das malerische Dorf Giethoorn, das oft als das 'Venedig des Nordens' bezeichnet wird. Geschichte K6: Hansestädte wie Zwolle und Kampen in Overijssel trieben viel Handel. Was war die Hanse?",
    hu: "Overijssel egy keleti tartomány Hollandiában, amelyet az IJssel-folyó, kiterjedt erdők és tőzeglápok jellemeznek. A régió történelmi gazdagságát a Hanza-szövetséghez tartozó ősi városok, mint Zwolle, Kampen és Deventer adják, amelyek a középkorban virágzó kereskedelmi központok voltak. Északnyugati részén található a Weerribben-Wieden Nemzeti Park, egyedülálló vizes élőhelyeivel. Emellett Giethoorn, a 'holland Velence' is ebben a tartományban vonzza a látogatókat. Történelem K6: Mi volt a Hanza-szövetség, és miért voltak fontosak az ehhez tartozó városok?",
    ro: "Overijssel este o provincie estică din Olanda, caracterizată de râul IJssel, păduri extinse și mlaștini de turbă. Bogăția istorică a regiunii este dată de orașele antice care au aparținut Ligii Hanseatice, precum Zwolle, Kampen și Deventer, centre comerciale înfloritoare în Evul Mediu. În partea de nord-vest se află Parcul Național Weerribben-Wieden, cu zone umede unice. De asemenea, Giethoorn, 'Veneția olandeză', atrage vizitatorii în această provincie. Istorie K6: Ce a fost Liga Hanseatică și de ce au fost importante orașele care îi aparțineau?",
    en: "Overijssel is located in the eastern Netherlands and is characterized by a mix of historic Hanseatic cities, polder landscapes, and sandy nature areas. The province is traversed by the IJssel, a branch of the Rhine that was crucial for medieval trade. In the Twente region in the east of the province, a significant textile industry developed in the 19th century, which made cities like Enschede prominent. A tourist highlight of the province is the picturesque village of Giethoorn, often referred to as the 'Venice of the North'. History K6: Hanseatic cities like Zwolle and Kampen in Overijssel conducted a lot of trade. What was the Hanseatic League?"
  },
  factsAdvanced: {
    de: [
      "Die Provinzhauptstadt Zwolle war im Mittelalter ein wichtiges Mitglied des Handelsbündnisses der Hanse.",
      "Das Dorf Giethoorn in Overijssel hat in seinem alten Zentrum keine Straßen, der Verkehr läuft über Wasserwege.",
      "Der Nationalpark Weerribben-Wieden ist das größte Sumpfgebiet Nordwesteuropas.",
      "Enschede beherbergt die Universiteit Twente, eine führende technische Universität in Europa."
    ],
    hu: ["Giethoorn falujában az óvárosban egyáltalán nincsenek utak, csak csatornák.", "Deventer az ország egyik legrégebbi városa, híres a középkori könyvtáráról.", "A tartomány egykor a holland textilipar központja volt (különösen Twente régió).", "Az IJssel folyó menti városok a 14-15. században hatalmas vagyonra tettek szert a Hanza kereskedelemből."],
    ro: [
      "În satul Giethoorn nu există drumuri în orașul vechi, ci doar canale.",
      "Deventer este unul dintre cele mai vechi orașe din țară, faimos pentru biblioteca sa medievală.",
      "Provincia a fost cândva centrul industriei textile olandeze (în special regiunea Twente).",
      "Orașele de-a lungul râului IJssel au acumulat o bogăție uriașă în secolele XIV-XV din comerțul hanseatic."
    ],
    en: [
      "The provincial capital Zwolle was an important member of the Hanseatic trade alliance in the Middle Ages.",
      "The village of Giethoorn in Overijssel has no roads in its old center; traffic flows via waterways.",
      "The Weerribben-Wieden National Park is the largest wetland in northwestern Europe.",
      "Enschede is home to the University of Twente, a leading technical university in Europe."
    ]
  }
  },
  {
    id: "NL-UT", type: "region", parent: "NL", coords: [5.16, 52.05],
    name: { de: "Utrecht", hu: "Utrecht", ro: "Utrecht", en: "Utrecht" },
    image: "/geo-images/netherlands/utrecht.webp",
  description: {
    de: "Utrecht ist die flächenmäßig kleinste, aber am dichtesten besiedelte Provinz der Niederlande. Sie liegt im geographischen Zentrum des Landes und ist ein wichtiger Verkehrsknotenpunkt für Züge und Straßen. Die Hauptstadt, ebenfalls Utrecht genannt, ist berühmt für ihren majestätischen Domturm und die einzigartigen Werftkeller entlang der Grachten. Außerhalb der Stadt finden sich prächtige Schlösser und das bewaldete Gebiet des Utrechter Hügelrückens.",
    hu: "Utrecht Hollandia legkisebb területű, de legsűrűbben lakott tartománya. Az ország földrajzi középpontjában fekszik, és fontos vasúti, valamint közúti csomópont. A főváros, amelyet szintén Utrechtnek hívnak, híres fenséges Dóm-tornyáról és a csatornák mentén található egyedülálló rakparti pincékről. A városon kívül csodálatos kastélyok és az Utrechti-hegyhátság erdős területe található.",
    ro: "Utrecht este cea mai mică provincie ca suprafață, dar cea mai dens populată din Olanda. Este situată în centrul geografic al țării și este un important nod de transport pentru trenuri și drumuri. Capitala, numită și Utrecht, este renumită pentru maiestuosul său Turn Dom și pivnițele unice ale debarcaderului de-a lungul canalelor. În afara orașului puteți găsi castele magnifice și zona împădurită din Utrechtse Heuvelrug.",
    en: "Utrecht is the smallest province by area but the most densely populated in the Netherlands. It is located in the geographical center of the country and is an important transport hub for trains and roads. The capital, also called Utrecht, is famous for its majestic Dom Tower and the unique wharf cellars along the canals. Outside the city, magnificent castles and the wooded area of the Utrecht Hill Ridge can be found."
  },
  facts: {
    de: ["Flächenmäßig die kleinste Provinz der Niederlande.","Utrecht (Stadt) ist der zentrale Verkehrsknotenpunkt des Landes.","Die Universität Utrecht ist die größte der Niederlande.","Die Stadt Utrecht hat einzigartige zweistöckige Grachten.","Beherbergt das Kasteel de Haar, das größte Schloss des Landes.","Der Domturm in Utrecht ist der höchste Kirchturm der Niederlande.","Zentraler Sitz der niederländischen Eisenbahngesellschaft (NS).","Die Region ist geprägt durch den waldreichen Utrechter Hügelrücken."],
    hu: ["Területét tekintve Hollandia legkisebb tartománya.","Utrecht (város) az ország központi közlekedési csomópontja.","Az Utrechti Egyetem a legnagyobb Hollandiában.","Utrecht városa egyedülálló kétszintes csatornákkal rendelkezik.","Itt található a Kasteel de Haar, az ország legnagyobb kastélya.","Az utrechti Dóm-torony Hollandia legmagasabb templomtornya.","A holland vasúttársaság (NS) központi székhelye.","A régiót az erdős Utrechti-hegyhátság jellemzi."],
    ro: ["Cea mai mică provincie din Olanda din punct de vedere al suprafeței.","Utrecht (oraș) este nodul central de transport al țării.","Universitatea din Utrecht este cea mai mare din Olanda.","Orașul Utrecht are canale unice cu două niveluri.","Găzduiește Kasteel de Haar, cel mai mare castel din țară.","Turnul Dom din Utrecht este cel mai înalt turn al unei biserici din Olanda.","Sediul central al companiei olandeze de căi ferate (NS).","Regiunea se caracterizează prin regiunea împădurită Utrechtse Heuvelrug."],
    en: ["The smallest province in the Netherlands by area.","Utrecht (city) is the central transport hub of the country.","Utrecht University is the largest in the Netherlands.","The city of Utrecht has unique two-level canals.","Home to Kasteel de Haar, the largest castle in the country.","The Dom Tower in Utrecht is the tallest church tower in the Netherlands.","Central headquarters of the Dutch railway company (NS).","The region is characterized by the wooded Utrecht Hill Ridge."]
  },
  descriptionAdvanced: {
    de: "Utrecht ist die flächenmäßig kleinste Provinz der Niederlande, hat jedoch aufgrund ihrer zentralen Lage eine enorme strategische und wirtschaftliche Bedeutung. Die gleichnamige Hauptstadt ist einer der wichtigsten Verkehrsknotenpunkte des Landes und beherbergt die größte Universität der Niederlande. Die Landschaft variiert von den waldreichen Hügeln des Utrechtse Heuvelrug im Osten bis hin zu den grünen Weide- und Polderlandschaften im Westen. Im Mittelalter war Utrecht das unbestrittene religiöse Zentrum der nördlichen Niederlande, wovon der beeindruckende Domturm noch heute zeugt. Geschichte K7: Der Utrechter Domturm steht frei und ist nicht mehr mit der Kirche verbunden. Durch welches Naturereignis wurde das Kirchenschiff im 17. Jahrhundert zerstört?",
    hu: "Utrecht Hollandia legkisebb területű, de legsűrűbben lakott tartománya, amely az ország földrajzi közepén helyezkedik el. Fővárosa, a szintén Utrecht nevű város, gazdag középkori múltjával, híres egyetemével és az egyedi, kétszintes csatornáival hívja fel magára a figyelmet. A tartomány keleti részén található a zöldellő Utrechtse Heuvelrug, egy jégkorszaki eredetű dombvidék, amely lenyűgöző erdőkkel és kastélyokkal van tele. Földrajz K6: Hogyan befolyásolja egy ország központi elhelyezkedése az infrastrukturális fejlődését, mint ahogy Utrecht esetében látható?",
    ro: "Utrecht este cea mai mică, dar și cea mai dens populată provincie din Olanda, situată în centrul geografic al țării. Capitala sa, cu același nume, atrage atenția cu trecutul său medieval bogat, universitatea faimoasă și canalele unice pe două niveluri. În partea de est a provinciei se află verdele Utrechtse Heuvelrug, o regiune de dealuri din epoca glaciară, plină de păduri și castele impresionante. Geografie K6: Cum influențează locația centrală a unei țări dezvoltarea infrastructurii sale, așa cum se vede în cazul Utrecht?",
    en: "Utrecht is the smallest province in the Netherlands by area, but it holds enormous strategic and economic importance due to its central location. The capital of the same name is one of the country's main transport hubs and houses the largest university in the Netherlands. The landscape varies from the wooded hills of the Utrechtse Heuvelrug in the east to the green pastures and polders in the west. In the Middle Ages, Utrecht was the undisputed religious center of the northern Netherlands, a fact still evidenced by the impressive Dom Tower today. History K7: The Dom Tower of Utrecht stands detached and is no longer connected to the church. What natural event destroyed the nave in the 17th century?"
  },
  factsAdvanced: {
    de: [
      "Der Hauptbahnhof von Utrecht ist der größte und verkehrsreichste Bahnhof der Niederlande.",
      "Der Domturm in der Stadt Utrecht ist mit 112 Metern der höchste Kirchturm der Niederlande.",
      "Die Universität Utrecht, gegründet 1636, hat bereits 12 Nobelpreisträger hervorgebracht.",
      "Das Rietveld-Schröder-Haus in Utrecht ist ein UNESCO-Weltkulturerbe und Meisterwerk der De-Stijl-Architektur."
    ],
    hu: ["Utrecht városának csatornái egyedülállóak a vízszint közelében lévő raktárhelyiségek (werfkelders) miatt.", "Az Utrechti Egyetem, amelyet 1636-ban alapítottak, az egyik legrangosabb Európában.", "Itt található a De Haar kastély, Hollandia legnagyobb és legfényűzőbb kastélya.", "A tartomány Hollandia legfontosabb vasúti csomópontja."],
    ro: [
      "Canalele din orașul Utrecht sunt unice datorită spațiilor de depozitare aproape de nivelul apei (werfkelders).",
      "Universitatea din Utrecht, fondată în 1636, este una dintre cele mai prestigioase din Europa.",
      "Aici se află Castelul De Haar, cel mai mare și mai luxos castel din Olanda.",
      "Provincia este cel mai important nod feroviar din Țările de Jos."
    ],
    en: [
      "Utrecht Central Station is the largest and busiest railway station in the Netherlands.",
      "At 112 meters, the Dom Tower in the city of Utrecht is the tallest church tower in the Netherlands.",
      "Utrecht University, founded in 1636, has produced 12 Nobel laureates.",
      "The Rietveld Schröder House in Utrecht is a UNESCO World Heritage site and a masterpiece of De Stijl architecture."
    ]
  }
  },
  {
    id: "NL-ZE", type: "region", parent: "NL", coords: [3.86, 51.48],
    name: { de: "Zeeland", hu: "Zeeland", ro: "Zeelanda", en: "Zeeland" },
    image: "/geo-images/netherlands/zeeland.webp",
  description: {
    de: "Zeeland ist eine einzigartige Provinz im Südwesten der Niederlande, die zu einem großen Teil aus Inseln und Halbinseln besteht. Die ständige Auseinandersetzung mit dem Wasser hat die Geschichte der Region geprägt, insbesondere nach der großen Flutkatastrophe von 1953. Zum Schutz wurden die beeindruckenden Deltawerke errichtet, die als ein Meisterwerk der Ingenieurskunst gelten. Heute ist Zeeland mit seinen sauberen Stränden und charmanten historischen Städten ein Paradies für Urlauber.",
    hu: "Zeeland egy egyedülálló tartomány Hollandia délnyugati részén, amely nagyrészt szigetekből és félszigetekből áll. A vízzel való folyamatos küzdelem rányomta bélyegét a régió történelmére, különösen az 1953-as nagy árvízkatasztrófa után. Védelem céljából építették a lenyűgöző Delta-műveket, amely a mérnöki munka remekművének számít. Ma Zeeland tiszta strandjaival és hangulatos történelmi városaival a nyaralók paradicsoma.",
    ro: "Zeelanda este o provincie unică din sud-vestul Olandei, care constă în mare parte din insule și peninsule. Lupta constantă cu apa a modelat istoria regiunii, în special după marele dezastru al inundațiilor din 1953. Pentru protecție au fost construite impresionantele Lucrări Delta, care sunt considerate o capodoperă a ingineriei. Astăzi, Zeelanda este un paradis pentru turiști, cu plajele sale curate și orașele istorice fermecătoare.",
    en: "Zeeland is a unique province in the southwest of the Netherlands, consisting largely of islands and peninsulas. The constant struggle with water has shaped the history of the region, especially after the great flood disaster of 1953. For protection, the impressive Delta Works were built, which are considered a masterpiece of engineering. Today, Zeeland, with its clean beaches and charming historic towns, is a paradise for vacationers."
  },
  facts: {
    de: ["Middelburg ist die historische Hauptstadt der Provinz.","Beherbergt die Deltawerke, ein weltberühmtes Hochwasserschutzsystem.","Zeeland ist die sonnenreichste Provinz der Niederlande.","Wurde 1953 von einer katastrophalen Sturmflut schwer getroffen.","Eine wichtige landwirtschaftliche Region, besonders für Austern und Muscheln.","Der Hafen von Vlissingen hat eine reiche maritime Geschichte.","Zeeland war der Namensgeber für das Land Neuseeland.","Verfügt über einige der längsten und saubersten Sandstrände des Landes."],
    hu: ["Middelburg a tartomány történelmi fővárosa.","Itt találhatók a Delta-művek, egy világhírű árvízvédelmi rendszer.","Zeeland Hollandia legnaposabb tartománya.","1953-ban egy katasztrofális vihardagály súlyosan sújtotta.","Fontos mezőgazdasági régió, különösen az osztriga és a kagyló tekintetében.","A vlissingeni kikötő gazdag tengeri történelemmel rendelkezik.","Zeeland volt a névadója Új-Zélandnak.","Az ország leghosszabb és legtisztább homokos strandjaival rendelkezik."],
    ro: ["Middelburg este capitala istorică a provinciei.","Găzduiește Lucrările Delta, un sistem de protecție împotriva inundațiilor renumit la nivel mondial.","Zeelanda este cea mai însorită provincie din Olanda.","A fost grav afectată de o inundație catastrofală în 1953.","O regiune agricolă importantă, în special pentru stridii și midii.","Portul Vlissingen are o bogată istorie maritimă.","Zeelanda a fost omonimul țării Noua Zeelandă.","Are unele dintre cele mai lungi și mai curate plaje cu nisip din țară."],
    en: ["Middelburg is the historic capital of the province.","Houses the Delta Works, a world-famous flood protection system.","Zeeland is the sunniest province in the Netherlands.","Was severely hit by a catastrophic storm surge in 1953.","An important agricultural region, especially for oysters and mussels.","The port of Vlissingen has a rich maritime history.","Zeeland was the namesake for the country of New Zealand.","Has some of the longest and cleanest sandy beaches in the country."]
  },
  descriptionAdvanced: {
    de: "Zeeland liegt im äußersten Südwesten der Niederlande und ist eine Provinz, die buchstäblich aus dem Meer entstanden ist, bestehend aus Inseln und Halbinseln. Das Element Wasser hat die Geschichte der Region geprägt, oft auf tragische Weise, wie bei der verheerenden Sturmflut von 1953. Als Reaktion darauf wurden die Deltawerke erbaut, ein gigantisches System von Dämmen und Sturmflutwehren, das oft als eines der modernen Weltwunder der Technik bezeichnet wird. Heute ist Zeeland eine ruhige Region, die für ihre sauberen Strände, historischen Hafenstädte wie Middelburg und die Fischerei, insbesondere auf Muscheln und Austern, bekannt ist. Geografie K8: Die Deltawerke schützen Zeeland vor Sturmfluten. Warum steigt die Gefahr solcher Fluten durch den globalen Klimawandel?",
    hu: "Zeeland (magyarul Tengerföld) egy délnyugati tartomány, amely félszigetek és szigetek láncolatából áll a Schelde, a Maas és a Rajna folyók torkolatánál. Zeeland története az állandó küzdelemről szól a tenger ellen; az 1953-as katasztrofális árvíz után itt épült meg a világ egyik legnagyobb mérnöki csodája, a Delta-művek, amely megvédi a szárazföldet az Északi-tenger viharaitól. A tartomány kiváló mezőgazdasággal és jelentős halászattal (különösen osztriga és kagyló) rendelkezik. Természetismeret K7: Hogyan működnek a Delta-művek, és miért nevezik a világ nyolcadik csodájának?",
    ro: "Zeelanda este o provincie din sud-vestul țării, formată dintr-un lanț de peninsule și insule la gura de vărsare a râurilor Scheldt, Maas și Rin. Istoria Zeelandei este o luptă constantă împotriva mării; după inundația catastrofală din 1953, aici a fost construită una dintre cele mai mari minuni inginerești ale lumii, Lucrările Delta, care protejează uscatul de furtunile din Marea Nordului. Provincia are o agricultură excelentă și un pescuit semnificativ (în special stridii și midii). Științe ale naturii K7: Cum funcționează Lucrările Delta și de ce sunt numite a opta minune a lumii?",
    en: "Zeeland, located in the extreme southwest of the Netherlands, is a province literally born from the sea, consisting of islands and peninsulas. The element of water has shaped the region's history, often tragically, such as during the devastating North Sea flood of 1953. In response, the Delta Works were constructed, a gigantic system of dams and storm surge barriers often referred to as one of the modern wonders of the engineering world. Today, Zeeland is a tranquil region known for its clean beaches, historic port towns like Middelburg, and its fishing industry, particularly for mussels and oysters. Geography K8: The Delta Works protect Zeeland from storm surges. Why does global climate change increase the risk of such floods?"
  },
  factsAdvanced: {
    de: [
      "Zeeland hat die längste Küstenlinie aller niederländischen Provinzen.",
      "Die Oosterscheldekering, Teil der Deltawerke in Zeeland, ist ein 8 Kilometer langes Sturmflutwehr.",
      "Die Provinzhauptstadt Middelburg war im Goldenen Zeitalter eine der wichtigsten Handelsstädte der VOC (Niederländische Ostindien-Kompanie).",
      "Zeeland ist der größte Produzent von Miesmuscheln in den Niederlanden."
    ],
    hu: ["A Delta-művek gátak, zsilipek és vihargátak gigantikus rendszere Zeelandban.", "Middelburg, a főváros, a 17. században az egyik legfontosabb holland kereskedelmi város volt.", "A tartomány neve inspirálta az Új-Zélandot felfedező holland tengerészeket az ország elnevezésére.", "Zeeland híres a tenger gyümölcseiről, különösen a minőségi feketekagylóról és az osztrigáról."],
    ro: [
      "Lucrările Delta reprezintă un sistem gigantic de diguri, ecluze și bariere împotriva furtunilor din Zeelanda.",
      "Middelburg, capitala, a fost unul dintre cele mai importante orașe comerciale olandeze în secolul al XVII-lea.",
      "Numele provinciei i-a inspirat pe marinarii olandezi care au descoperit Noua Zeelandă să numească acea țară.",
      "Zeelanda este faimoasă pentru fructele de mare, în special midiile negre de calitate și stridiile."
    ],
    en: [
      "Zeeland has the longest coastline of all Dutch provinces.",
      "The Oosterscheldekering, part of the Delta Works in Zeeland, is an 8-kilometer-long storm surge barrier.",
      "The provincial capital Middelburg was one of the most important trading cities of the VOC (Dutch East India Company) in the Golden Age.",
      "Zeeland is the largest producer of mussels in the Netherlands."
    ]
  }
  },
  {
    id: "NL-ZH", type: "region", parent: "NL", coords: [4.49, 51.98],
    name: { de: "Südholland", hu: "Dél-Holland", ro: "Olanda de Sud", en: "South Holland" },
    image: "/geo-images/netherlands/south-holland.webp",
  description: {
    de: "Südholland ist die am dichtesten besiedelte und wirtschaftlich stärkste Provinz der Niederlande. Hier schlägt das politische und industrielle Herz des Landes: Den Haag beheimatet die Regierung und das Königshaus, während Rotterdam mit Europas größtem Hafen auftrumpft. Die Provinz ist zudem bekannt für historische Universitätsstädte wie Leiden und Delft. Zwischen den Großstädten prägen weite Gewächshausanlagen (Westland) und Windmühlen das klassische niederländische Landschaftsbild.",
    hu: "Dél-Holland Hollandia legsűrűbben lakott és gazdaságilag legerősebb tartománya. Itt dobog az ország politikai és ipari szíve: Hága ad otthont a kormánynak és a királyi családnak, míg Rotterdam Európa legnagyobb kikötőjével büszkélkedhet. A tartomány ismert a történelmi egyetemvárosokról is, mint Leiden és Delft. A nagyvárosok között kiterjedt üvegházrendszerek (Westland) és szélmalmok jellemzik a klasszikus holland tájat.",
    ro: "Olanda de Sud este cea mai dens populată și cea mai puternică provincie din punct de vedere economic din Olanda. Inima politică și industrială a țării bate aici: Haga găzduiește guvernul și familia regală, în timp ce Rotterdam se mândrește cu cel mai mare port din Europa. Provincia este cunoscută și pentru orașele universitare istorice, cum ar fi Leiden și Delft. Între orașele mari, complexe vaste de sere (Westland) și morile de vânt caracterizează peisajul olandez clasic.",
    en: "South Holland is the most densely populated and economically strongest province in the Netherlands. The political and industrial heart of the country beats here: The Hague is home to the government and the royal family, while Rotterdam boasts Europe's largest port. The province is also known for historic university cities such as Leiden and Delft. Between the big cities, vast greenhouse complexes (Westland) and windmills characterize the classic Dutch landscape."
  },
  facts: {
    de: ["Bevölkerungsreichste Provinz der Niederlande.","Den Haag ist der offizielle Regierungssitz und Sitz des Parlaments.","Rotterdam verfügt über den größten und wichtigsten Seehafen Europas.","Die Windmühlen von Kinderdijk gehören zum UNESCO-Welterbe.","Die Universitätsstadt Leiden beherbergt die älteste Uni des Landes.","Delft ist weltbekannt für sein blaues Porzellan (Delfts Blauw).","Keukenhof in Lisse ist der berühmteste Frühlingsgarten der Welt.","Die Region 'Westland' ist das Herz der niederländischen Gewächshausindustrie."],
    hu: ["Hollandia legnépesebb tartománya.","Hága a kormány és a parlament hivatalos székhelye.","Rotterdam rendelkezik Európa legnagyobb és legfontosabb tengeri kikötőjével.","A kinderdijki szélmalmok az UNESCO világörökség részét képezik.","Leiden egyetemi városa ad otthont az ország legrégebbi egyetemének.","Delft világszerte ismert kék porcelánjáról (Delfti kék).","A lisse-i Keukenhof a világ leghíresebb tavaszi kertje.","A 'Westland' régió a holland üvegház-ipar szíve."],
    ro: ["Cea mai populată provincie din Țările de Jos.","Haga este sediul oficial al guvernului și sediul parlamentului.","Rotterdam are cel mai mare și cel mai important port maritim din Europa.","Morile de vânt din Kinderdijk fac parte din Patrimoniul Mondial UNESCO.","Orașul universitar Leiden găzduiește cea mai veche universitate din țară.","Delft este renumit în întreaga lume pentru porțelanul său albastru (Delfts Blauw).","Keukenhof din Lisse este cea mai faimoasă grădină de primăvară din lume.","Regiunea 'Westland' este inima industriei olandeze de sere."],
    en: ["The most populous province in the Netherlands.","The Hague is the official seat of government and seat of parliament.","Rotterdam has the largest and most important seaport in Europe.","The windmills of Kinderdijk are a UNESCO World Heritage Site.","The university city of Leiden is home to the country's oldest university.","Delft is world-famous for its blue porcelain (Delft Blue).","Keukenhof in Lisse is the most famous spring garden in the world.","The 'Westland' region is the heart of the Dutch greenhouse industry."]
  },
  descriptionAdvanced: {
    de: "Südholland ist die bevölkerungsreichste und am dichtesten besiedelte Provinz der Niederlande und bildet das wirtschaftliche und politische Herz des Landes. Hier befinden sich die internationale Hafenstadt Rotterdam, das politische Zentrum Den Haag sowie wichtige Universitätsstädte wie Leiden und Delft. Die Provinz ist stark urbanisiert, aber auch die Heimat der berühmten Windmühlen von Kinderdijk und des großen Blumengartens Keukenhof. Im 17. Jahrhundert war Südholland der treibende Motor hinter dem wirtschaftlichen Aufstieg der niederländischen Republik und brachte Künstler wie Vermeer und Rembrandt hervor. Wirtschaft K8: Rotterdam in Südholland beherbergt einen der größten Häfen der Welt. Warum ist ein Hafen für die Wirtschaft eines Landes so wichtig?",
    hu: "Dél-Holland (Zuid-Holland) Hollandia legnépesebb és gazdaságilag legfontosabb tartománya. Itt található Hága, a holland kormány, a parlament és a királyi család székhelye, valamint a Nemzetközi Bíróság. Rotterdam, a másik nagyváros, Európa legnagyobb tengeri kikötőjével büszkélkedhet, amely a globális áruforgalom kapuja. A tartomány ad otthont a híres Kinderdijk szélmalmainak és a Keukenhof tulipánmezőinek, melyek az ország ikonikus szimbólumai. Gazdaság K8: Milyen gazdasági előnyt jelent Európa számára a rotterdami kikötő hatalmas kapacitása?",
    ro: "Olanda de Sud (Zuid-Holland) este cea mai populată și cea mai importantă provincie economică din Țările de Jos. Aici se află Haga, sediul guvernului olandez, al parlamentului, al familiei regale și al Curții Internaționale de Justiție. Rotterdam, celălalt oraș mare, se mândrește cu cel mai mare port maritim din Europa, o poartă pentru traficul global de mărfuri. Provincia găzduiește celebrele mori de vânt de la Kinderdijk și câmpurile de lalele Keukenhof, care sunt simboluri iconice ale țării. Economie K8: Ce avantaj economic reprezintă pentru Europa capacitatea uriașă a portului Rotterdam?",
    en: "South Holland is the most populous and densely populated province in the Netherlands, forming the economic and political heart of the country. It is home to the international port city of Rotterdam, the political center The Hague, and major university cities like Leiden and Delft. The province is highly urbanized, but also features the famous windmills of Kinderdijk and the large Keukenhof flower garden. In the 17th century, South Holland was the driving force behind the economic rise of the Dutch Republic and produced artists such as Vermeer and Rembrandt. Economics K8: Rotterdam in South Holland hosts one of the largest ports in the world. Why is a port so important to a country's economy?"
  },
  factsAdvanced: {
    de: [
      "Rotterdam in Südholland besitzt den größten Seehafen Europas.",
      "Den Haag ist der Sitz der niederländischen Regierung, der königlichen Familie und des Internationalen Gerichtshofs.",
      "Die Universität Leiden, gegründet 1575, ist die älteste Universität der Niederlande.",
      "Südholland hat die höchste Bevölkerungsdichte aller Provinzen des Landes."
    ],
    hu: ["Rotterdam kikötője volt a világ legforgalmasabb kikötője évtizedeken keresztül, 2004-ig.", "Hága az egyetlen olyan nemzetközi jogi központ, amely nem főváros.", "Kinderdijk 19 történelmi szélmalma az UNESCO Világörökség része.", "A Gouda városából származó sajt a világ egyik leghíresebb és legnagyobb mennyiségben exportált sajtja."],
    ro: [
      "Portul Rotterdam a fost cel mai aglomerat port din lume timp de decenii, până în 2004.",
      "Haga este singurul centru juridic internațional care nu este o capitală.",
      "Cele 19 mori de vânt istorice din Kinderdijk fac parte din Patrimoniul Mondial UNESCO.",
      "Brânza din orașul Gouda este una dintre cele mai faimoase și exportate brânzeturi din lume."
    ],
    en: [
      "Rotterdam in South Holland has the largest seaport in Europe.",
      "The Hague is the seat of the Dutch government, the royal family, and the International Court of Justice.",
      "Leiden University, founded in 1575, is the oldest university in the Netherlands.",
      "South Holland has the highest population density of all the provinces in the country."
    ]
  }
  }
];

export const netherlandsCities: POI[] = [
  {
    id: "NL-CT-AMS", type: "city", parent: "NL-NH", coords: [4.90, 52.37],
    name: { de: "Amsterdam", hu: "Amszterdam", ro: "Amsterdam", en: "Amsterdam" },
    image: "/geo-images/netherlands/amsterdam.webp",
    description: {
      de: "Amsterdam ist die Hauptstadt der Niederlande, weltberühmt für ihr historisches Grachtennetz, erstklassige Museen und ihre liberale Atmosphäre.",
      hu: "Amszterdam Hollandia fővárosa, amely világhírű történelmi csatornahálózatáról, világszínvonalú múzeumairól és liberális légköréről ismert.",
      ro: "Amsterdam este capitala Olandei, renumită în întreaga lume pentru rețeaua sa istorică de canale, muzeele de primă clasă și atmosfera sa liberală.",
      en: "Amsterdam is the capital of the Netherlands, world-famous for its historic canal network, world-class museums, and its liberal atmosphere."
    },
    descriptionAdvanced: {
    de: "Amsterdam ist die Hauptstadt und bevölkerungsreichste Stadt der Niederlande, weltberühmt für ihr historisches Grachtensystem aus dem 17. Jahrhundert. Die Stadt wuchs während des niederländischen Goldenen Zeitalters zu einem der wichtigsten Handelszentren der Welt heran und prägte die moderne Finanzwelt mit der Gründung der ersten Börse. Heute ist Amsterdam eine pulsierende, weltoffene Metropole, die Kunstliebhaber mit Museen wie dem Rijksmuseum und dem Van-Gogh-Museum anzieht. Die einzigartige Architektur mit schmalen, giebelgekrönten Kaufmannshäusern und unzähligen Brücken verleiht der Stadt ihren unverwechselbaren Charme. Geschichte K6: Das Grachtensystem in Amsterdam wurde sternförmig angelegt. Welchen praktischen Nutzen hatten diese Wasserwege für die Kaufmannshäuser?",
    hu: "Amszterdam Hollandia fővárosa és egyben legnépesebb városa, amely lenyűgöző csatornahálózatáról, történelmi építészetéről és pezsgő kulturális életéről híres. A 17. századi holland aranykorban a világ legfontosabb kereskedelmi és pénzügyi központja volt, itt jött létre a világ első tőzsdéje is. A város történelmi központja a Grachtengordel (csatornagyűrű), amely az UNESCO Világörökség része. Ma Amszterdam a globális turizmus egyik központja, híres múzeumokkal, mint a Rijksmuseum és az Anne Frank Ház. Történelem K7: Milyen hatással volt a világ első tőzsdéjének megalapítása Amszterdam globális szerepére a 17. században?",
    ro: "Amsterdam este capitala și cel mai populat oraș al Olandei, renumit pentru rețeaua sa uimitoare de canale, arhitectura istorică și viața culturală vibrantă. În secolul al XVII-lea, în timpul Epocii de Aur olandeze, a fost cel mai important centru comercial și financiar din lume; aici a fost înființată prima bursă de valori din lume. Centrul istoric al orașului este Grachtengordel (Inelul Canalelor), un sit al Patrimoniului Mondial UNESCO. Astăzi, Amsterdam este un centru global al turismului, cu muzee celebre precum Rijksmuseum și Casa Anne Frank. Istorie K7: Ce impact a avut înființarea primei burse de valori din lume asupra rolului global al Amsterdamului în secolul al XVII-lea?",
    en: "Amsterdam is the capital and most populous city of the Netherlands, world-famous for its historic 17th-century canal system. The city grew into one of the world's most important trading centers during the Dutch Golden Age and shaped modern finance with the founding of the first stock exchange. Today, Amsterdam is a vibrant, cosmopolitan metropolis that attracts art lovers with museums such as the Rijksmuseum and the Van Gogh Museum. Its unique architecture featuring narrow, gabled merchant houses and countless bridges gives the city its distinctive charm. History K6: The canal system in Amsterdam was laid out in a star shape. What practical use did these waterways have for the merchant houses?"
  },
  facts: {
    de: ["Ist die größte Stadt und formelle Hauptstadt der Niederlande.","Verfügt über mehr als 160 Grachten und 1.200 Brücken.","Der Grachtengürtel ist seit 2010 UNESCO-Weltkulturerbe.","Rund 880.000 Fahrräder prägen den Verkehr der Stadt.","Das Rijksmuseum beherbergt Meisterwerke von Rembrandt.","Das Anne-Frank-Haus ist eine der meistbesuchten historischen Stätten.","Gebaut auf Millionen von Holzpfählen aufgrund des weichen Bodens.","Der Dam-Platz und der Königspalast sind zentrale Sehenswürdigkeiten."],
    hu: ["Hollandia legnagyobb városa és formális fővárosa.","Több mint 160 csatornával és 1200 híddal rendelkezik.","A csatornák övezete 2010 óta az UNESCO világörökség része.","Mintegy 880 000 kerékpár jellemzi a város közlekedését.","A Rijksmuseum Rembrandt remekműveinek ad otthont.","Az Anne Frank Ház az egyik leglátogatottabb történelmi emlékhely.","A puha talaj miatt fapillérek millióira épült.","A Dam tér és a Királyi Palota a város központi látványosságai."],
    ro: ["Este cel mai mare oraș și capitala formală a Olandei.","Are peste 160 de canale și 1.200 de poduri.","Rețeaua de canale face parte din Patrimoniul Mondial UNESCO din 2010.","Aproximativ 880.000 de biciclete domină traficul orașului.","Rijksmuseum găzduiește capodoperele lui Rembrandt.","Casa Anne Frank este unul dintre cele mai vizitate situri istorice.","Construit pe milioane de stâlpi de lemn din cauza solului moale.","Piața Dam și Palatul Regal sunt atracții centrale."],
    en: ["It is the largest city and formal capital of the Netherlands.","Has over 160 canals and 1,200 bridges.","The canal ring has been a UNESCO World Heritage site since 2010.","Around 880,000 bicycles dominate the city's traffic.","The Rijksmuseum houses masterpieces by Rembrandt.","The Anne Frank House is one of the most visited historical sites.","Built on millions of wooden piles due to the soft soil.","Dam Square and the Royal Palace are central attractions."]
  },
  factsAdvanced: {
    de: [
      "Amsterdam hat mehr als 100 Kilometer Grachten (Kanäle) und über 1.500 Brücken.",
      "Die Stadt ist fast vollständig auf Millionen von Holzpfählen gebaut, die im sumpfigen Boden verankert wurden.",
      "Der Amsterdamer Grachtengürtel aus dem 17. Jahrhundert ist ein UNESCO-Weltkulturerbe.",
      "Das Anne-Frank-Haus in Amsterdam empfängt jährlich über eine Million Besucher aus aller Welt."
    ],
    hu: ["A városban több mint 100 kilométernyi csatorna, mintegy 90 sziget és 1500 híd található.", "Amszterdam házait több millió facölöpre építették, hogy ne süllyedjenek el a mocsaras talajban.", "A világ legrégebbi megszakítás nélkül működő tőzsdéjét (Euronext Amsterdam) 1602-ben alapították.", "A városnak több kerékpárja van, mint lakosa, amit a kiváló kerékpáros infrastruktúra támogat."],
    ro: [
      "Orașul are peste 100 de kilometri de canale, aproximativ 90 de insule și 1.500 de poduri.",
      "Casele din Amsterdam sunt construite pe milioane de stâlpi de lemn pentru a nu se scufunda în solul mlăștinos.",
      "Cea mai veche bursă de valori din lume care funcționează continuu (Euronext Amsterdam) a fost fondată în 1602.",
      "Orașul are mai multe biciclete decât locuitori, susținute de o infrastructură excelentă pentru ciclism."
    ],
    en: [
      "Amsterdam has over 100 kilometers of canals and more than 1,500 bridges.",
      "The city is built almost entirely on millions of wooden pilings anchored in the swampy ground.",
      "Amsterdam's 17th-century Canal Ring is a UNESCO World Heritage site.",
      "The Anne Frank House in Amsterdam receives over a million visitors from all over the world every year."
    ]
  }
  },
  {
    id: "NL-CT-ROT", type: "city", parent: "NL-ZH", coords: [4.48, 51.92],
    name: { de: "Rotterdam", hu: "Rotterdam", ro: "Rotterdam", en: "Rotterdam" },
    image: "/geo-images/netherlands/rotterdam.webp",
  description: {
    de: "Rotterdam ist eine dynamische Metropole in Südholland, die für ihre beeindruckende moderne Skyline und Europas größten Seehafen bekannt ist. Nachdem das historische Zentrum im Zweiten Weltkrieg zerstört wurde, entschied man sich für einen innovativen Wiederaufbau. Dies macht die Stadt heute zu einem internationalen Zentrum für Architektur und Design. Wahrzeichen wie die Erasmusbrücke und die spektakuläre Markthalle prägen das Gesicht dieser pulsierenden Hafenstadt.",
    hu: "Rotterdam egy dinamikus metropolisz Dél-Hollandiában, amely lenyűgöző modern látképéről és Európa legnagyobb tengeri kikötőjéről ismert. Miután a történelmi központ a második világháborúban elpusztult, az innovatív újjáépítés mellett döntöttek. Ennek köszönhetően a város ma az építészet és a dizájn nemzetközi központja. Olyan nevezetességek, mint az Erasmus-híd és a látványos Vásárcsarnok határozzák meg ennek a nyüzsgő kikötővárosnak az arculatát.",
    ro: "Rotterdam este o metropolă dinamică din Olanda de Sud, cunoscută pentru orizontul său modern impresionant și cel mai mare port maritim din Europa. După ce centrul istoric a fost distrus în Al Doilea Război Mondial, s-a luat decizia pentru o reconstrucție inovatoare. Acest lucru face ca orașul de astăzi să fie un centru internațional pentru arhitectură și design. Repere precum Podul Erasmus și spectaculoasa Sală a Pieței (Markthal) modelează fața acestui vibrant oraș portuar.",
    en: "Rotterdam is a dynamic metropolis in South Holland, known for its impressive modern skyline and Europe's largest seaport. After the historic center was destroyed in World War II, an innovative reconstruction was chosen. This makes the city today an international center for architecture and design. Landmarks such as the Erasmus Bridge and the spectacular Market Hall (Markthal) shape the face of this vibrant port city."
  },
      descriptionAdvanced: {
    de: "Rotterdam ist eine dynamische Hafenstadt an der Mündung von Rhein und Maas, die durch ihre markante moderne Architektur hervorsticht. Im Gegensatz zu vielen anderen niederländischen Städten wurde das historische Zentrum im Zweiten Weltkrieg fast vollständig zerstört, was den Weg für innovative städtebauliche Konzepte ebnete. Die Stadt ist die Heimat des größten europäischen Seehafens, der eine zentrale Rolle im globalen Handel und der europäischen Logistik spielt. Ikonen wie die Erasmusbrücke, die Kubushäuser und die spektakuläre Markthalle prägen die Skyline dieser zukunftsorientierten Metropole. Architektur K7: Nach der Zerstörung Rotterdams entschied man sich gegen einen historischen Wiederaufbau. Warum kann moderne Architektur eine Stadt wirtschaftlich und funktional verbessern?",
    hu: "Rotterdam a holland modernitás és építészeti innováció központja. Miután a második világháború során a város központját egy bombázás szinte teljesen elpusztította, Rotterdamot egy merész, kortárs tervek alapján építették újjá, szakítva a hagyományos holland városképpel. A város ad otthont Európa legnagyobb tengeri kikötőjének, amely évtizedeken át a világ legforgalmasabbja volt. Ikonikus épületei közé tartozik az Erasmus-híd, a Kockaházak és a hatalmas Markthal piac. Földrajz K8: Miért vált Rotterdam kikötője Európa legfontosabb kereskedelmi csomópontjává?",
    ro: "Rotterdam este centrul modernității și al inovației arhitecturale din Olanda. După ce centrul orașului a fost distrus aproape complet de bombardamente în timpul celui de-al Doilea Război Mondial, Rotterdam a fost reconstruit folosind modele contemporane îndrăznețe, rupând cu peisajul urban tradițional olandez. Orașul găzduiește cel mai mare port maritim din Europa, care a fost cel mai aglomerat din lume timp de decenii. Clădirile sale iconice includ Podul Erasmus, Casele Cubice (Kubuswoningen) și imensa piață Markthal. Geografie K8: De ce a devenit portul Rotterdam cel mai important centru comercial din Europa?",
    en: "Rotterdam is a dynamic port city at the mouth of the Rhine and Maas rivers, standing out for its striking modern architecture. Unlike many other Dutch cities, its historical center was almost completely destroyed in World War II, which paved the way for innovative urban planning concepts. The city is home to Europe's largest seaport, playing a central role in global trade and European logistics. Icons like the Erasmus Bridge, the Cube Houses, and the spectacular Markthal define the skyline of this forward-looking metropolis. Architecture K7: After Rotterdam's destruction, a historical reconstruction was rejected. Why can modern architecture improve a city economically and functionally?"
  },
    facts: {
    de: ["Besitzt den größten Seehafen Europas.","Bekannt für ihre kühne und innovative moderne Architektur.","Die Erasmusbrücke ('Der Schwan') ist das Wahrzeichen der Stadt.","Die Kubushäuser (Kubuswoningen) sind eine architektonische Besonderheit.","Die riesige, hufeisenförmige Markthalle bietet Kulinarik und Kunst.","Euromast ist der höchste Aussichtsturm der Niederlande.","Wurde im Zweiten Weltkrieg (1940) fast vollständig zerstört.","Veranstaltet ein renommiertes Internationales Filmfestival (IFFR)."],
    hu: ["Európa legnagyobb tengeri kikötőjével rendelkezik.","Merész és innovatív modern építészetéről ismert.","Az Erasmus-híd ('A Hattyú') a város jelképe.","A Kockaházak (Kubuswoningen) építészeti különlegességnek számítanak.","A hatalmas, patkó alakú Vásárcsarnok kulináris és művészeti élményeket kínál.","Az Euromast Hollandia legmagasabb kilátótornya.","A második világháborúban (1940) szinte teljesen megsemmisült.","Egy neves Nemzetközi Filmfesztiválnak (IFFR) ad otthont."],
    ro: ["Are cel mai mare port maritim din Europa.","Cunoscut pentru arhitectura sa modernă îndrăzneață și inovatoare.","Podul Erasmus ('Lebăda') este simbolul orașului.","Casele cubice (Kubuswoningen) sunt o atracție arhitecturală.","Uriașa sală a pieței în formă de potcoavă oferă delicii culinare și artă.","Euromast este cel mai înalt turn de observație din Olanda.","A fost distrus aproape complet în al Doilea Război Mondial (1940).","Găzduiește un renumit Festival Internațional de Film (IFFR)."],
    en: ["Has the largest seaport in Europe.","Known for its bold and innovative modern architecture.","The Erasmus Bridge ('The Swan') is the landmark of the city.","The Cube Houses (Kubuswoningen) are an architectural peculiarity.","The huge, horseshoe-shaped Market Hall offers culinary delights and art.","Euromast is the highest observation tower in the Netherlands.","Was almost completely destroyed in World War II (1940).","Hosts a renowned International Film Festival (IFFR)."]
  },
      factsAdvanced: {
    de: [
      "Der Hafen von Rotterdam ist der flächengrößte Tiefwasserhafen Europas und erstreckt sich über 40 Kilometer.",
      "Die Erasmusbrücke, ein architektonisches Wahrzeichen der Stadt, trägt wegen ihrer Form den Spitznamen 'Der Schwan'.",
      "Rotterdam besitzt eine der spektakulärsten Markthallen der Welt, die gleichzeitig Wohnungen im bogenförmigen Dach integriert.",
      "Der Euromast in Rotterdam bietet mit 185 Metern Höhe den höchsten Aussichtspunkt der Niederlande."
    ],
    hu: ["Rotterdam kikötője közvetlen hozzáférést biztosít az Északi-tengerhez gátak és zsilipek nélkül.", "Az Erasmus-hidat (Erasmusbrug) aszimmetrikus formája miatt gyakran 'A Hattyú'-nak becézik.", "A Kockaházak (Kubuswoningen) 45 fokban megdöntött, kocka alakú lakások innovatív rendszere.", "A város a Maas folyó deltájában fekszik, és vízügyi védelme példaértékű a világ számára."],
    ro: [
      "Portul Rotterdam oferă acces direct la Marea Nordului fără baraje sau ecluze.",
      "Podul Erasmus (Erasmusbrug) este adesea supranumit 'Lebăda' datorită formei sale asimetrice.",
      "Casele Cubice (Kubuswoningen) reprezintă un sistem inovator de apartamente în formă de cub, înclinate la 45 de grade.",
      "Orașul este situat în delta râului Maas, iar apărarea sa împotriva apelor este un exemplu la nivel mondial."
    ],
    en: [
      "The Port of Rotterdam is Europe's largest deep-water port by area, stretching over 40 kilometers.",
      "The Erasmus Bridge, an architectural landmark of the city, is nicknamed 'The Swan' due to its shape.",
      "Rotterdam boasts one of the world's most spectacular market halls, which also integrates apartments into its arched roof.",
      "At 185 meters, the Euromast in Rotterdam offers the highest observation point in the Netherlands."
    ]
  }
  },
  {
    id: "NL-CT-HAA", type: "city", parent: "NL-ZH", coords: [4.30, 52.07],
    name: { de: "Den Haag", hu: "Hága", ro: "Haga", en: "The Hague" },
    image: "/geo-images/netherlands/the-hague.webp",
  description: {
    de: "Den Haag ist der Sitz der niederländischen Regierung und der königlichen Familie, obwohl es nicht die Hauptstadt ist. Die Stadt hat ein elegantes Flair, geprägt von breiten Alleen, majestätischen Palästen und wichtigen internationalen Institutionen wie dem Internationalen Gerichtshof im Friedenspalast. Zugleich liegt Den Haag direkt an der Nordsee, und der Stadtteil Scheveningen bietet einen der beliebtesten Sandstrände des Landes.",
    hu: "Hága a holland kormány és a királyi család székhelye, bár nem a főváros. A város elegáns hangulattal rendelkezik, amelyet széles sugárutak, fenséges paloták és fontos nemzetközi intézmények, például a Békepalotában található Nemzetközi Bíróság jellemeznek. Ugyanakkor Hága közvetlenül az Északi-tenger partján fekszik, és Scheveningen negyede az ország egyik legnépszerűbb homokos strandját kínálja.",
    ro: "Haga este sediul guvernului olandez și al familiei regale, deși nu este capitala. Orașul are un aer elegant, caracterizat de bulevarde largi, palate maiestuoase și instituții internaționale importante precum Curtea Internațională de Justiție din Palatul Păcii. În același timp, Haga se află chiar pe Marea Nordului, iar districtul Scheveningen oferă una dintre cele mai populare plaje cu nisip din țară.",
    en: "The Hague is the seat of the Dutch government and the royal family, although it is not the capital. The city has an elegant flair, characterized by wide avenues, majestic palaces, and important international institutions such as the International Court of Justice in the Peace Palace. At the same time, The Hague is located right on the North Sea, and the Scheveningen district offers one of the most popular sandy beaches in the country."
  },
      descriptionAdvanced: {
    de: "Den Haag (auch 's-Gravenhage genannt) ist zwar nicht die Hauptstadt der Niederlande, aber der Sitz der Regierung, des Parlaments und der Residenz der königlichen Familie. Die Stadt hat eine vornehme, internationale Ausstrahlung, geprägt von breiten Alleen, historischen Palästen und repräsentativen Botschaftsvierteln. Weltweite Bedeutung hat Den Haag als 'Stadt des Friedens und der Gerechtigkeit', da sie den Internationalen Gerichtshof und den Internationalen Strafgerichtshof beherbergt. Zudem grenzt die Stadt mit den Vierteln Scheveningen und Kijkduin direkt an die Nordsee. Politik K8: Der Internationale Gerichtshof in Den Haag löst Konflikte zwischen Staaten. Warum ist es wichtig, dass solche Gerichte unabhängig in einem neutralen Land liegen?",
    hu: "Hága (Den Haag) a nemzetközi jog és az igazságszolgáltatás globális központja, emellett Hollandia politikai szíve. Bár a hivatalos főváros Amszterdam, a holland kormány, a parlament, a Legfelsőbb Bíróság és az uralkodó királyi család is Hágában székel. A város elegáns, zöldövezeti negyedekkel, széles sugárutakkal és nagvonalú palotákkal rendelkezik, továbbá népszerű tengerparti üdülőhellyel, Scheveningen-nel. Itt működik a Nemzetközi Bíróság és a Nemzetközi Büntetőbíróság. Társadalomismeret K8: Milyen globális konfliktusokat oldanak meg a hágai Nemzetközi Bíróságon?",
    ro: "Haga (Den Haag) este centrul global al dreptului internațional și al justiției, precum și inima politică a Țărilor de Jos. Deși capitala oficială este Amsterdam, guvernul olandez, parlamentul, Curtea Supremă și familia regală conducătoare au sediul la Haga. Orașul are cartiere elegante, pline de verdeață, bulevarde largi și palate grandioase, precum și o populară stațiune litorală, Scheveningen. Aici funcționează Curtea Internațională de Justiție și Curtea Penală Internațională. Studii sociale K8: Ce fel de conflicte globale sunt rezolvate la Curtea Internațională de Justiție de la Haga?",
    en: "The Hague (also known as 's-Gravenhage) is not the capital of the Netherlands, but it is the seat of the government, parliament, and the royal family's residence. The city has a distinguished, international flair, characterized by broad avenues, historic palaces, and prestigious embassy districts. The Hague holds global significance as the 'City of Peace and Justice' because it houses the International Court of Justice and the International Criminal Court. In addition, the city borders directly on the North Sea with its Scheveningen and Kijkduin districts. Politics K8: The International Court of Justice in The Hague resolves conflicts between states. Why is it important for such courts to be independent and located in a neutral country?"
  },
    facts: {
    de: ["Sitz der niederländischen Regierung und des Parlaments.","Wohnsitz der königlichen Familie der Niederlande.","Beherbergt den Internationalen Gerichtshof im Friedenspalast.","Das Mauritshuis-Museum zeigt 'Das Mädchen mit dem Perlenohrgehänge'.","Der Binnenhof ist das politische Herz der Niederlande.","Der Stadtteil Scheveningen ist ein berühmter Badeort an der Nordsee.","Miniaturpark Madurodam zeigt die Niederlande im Maßstab 1:25.","Wird oft als die 'Stadt des Friedens und der Gerechtigkeit' bezeichnet."],
    hu: ["A holland kormány és a parlament székhelye.","A holland királyi család lakhelye.","A Békepalotában található a Nemzetközi Bíróság.","A Mauritshuis múzeum bemutatja a 'Leány gyöngyfülbevalóval' című festményt.","A Binnenhof Hollandia politikai szíve.","Scheveningen városrésze híres északi-tengeri fürdőhely.","A Madurodam miniatűr park 1:25 méretarányban mutatja be Hollandiát.","Gyakran nevezik a 'béke és az igazságosság városának'."],
    ro: ["Sediul guvernului olandez și al parlamentului.","Reședința familiei regale a Olandei.","Găzduiește Curtea Internațională de Justiție la Palatul Păcii.","Muzeul Mauritshuis expune 'Fata cu cercel de perlă'.","Binnenhof este inima politică a Olandei.","Cartierul Scheveningen este o faimoasă stațiune balneară la Marea Nordului.","Parcul în miniatură Madurodam arată Olanda la scara 1:25.","Adesea denumit 'Orașul păcii și justiției'."],
    en: ["Seat of the Dutch government and parliament.","Residence of the royal family of the Netherlands.","Houses the International Court of Justice in the Peace Palace.","The Mauritshuis museum displays 'Girl with a Pearl Earring'.","The Binnenhof is the political heart of the Netherlands.","The Scheveningen district is a famous seaside resort on the North Sea.","Miniature park Madurodam shows the Netherlands at a 1:25 scale.","Often referred to as the 'City of Peace and Justice'."]
  },
      factsAdvanced: {
    de: [
      "Den Haag ist der Sitz der niederländischen Regierung und des Monarchen, obwohl Amsterdam die Hauptstadt ist.",
      "Im Friedenspalast (Vredespaleis) in Den Haag ist der Internationale Gerichtshof der Vereinten Nationen ansässig.",
      "Der Binnenhof in Den Haag ist der älteste, noch immer genutzte Parlamentskomplex der Welt.",
      "Scheveningen, ein Stadtteil von Den Haag, ist das beliebteste Seebad der Niederlande."
    ],
    hu: ["A Béke Palotája (Vredespaleis) ad otthont az ENSZ Nemzetközi Bíróságának.", "A Binnenhof épületegyüttese az egyik legrégebbi, ma is használt parlamentépület a világon.", "Hága az egyetlen nagy holland város, amely közvetlenül az Északi-tenger partján fekszik.", "A Mauritshuis múzeumban található Vermeer híres festménye, a Leány gyöngyfülbevalóval."],
    ro: [
      "Palatul Păcii (Vredespaleis) găzduiește Curtea Internațională de Justiție a ONU.",
      "Complexul de clădiri Binnenhof este una dintre cele mai vechi clădiri parlamentare aflate încă în uz din lume.",
      "Haga este singurul oraș mare olandez situat direct pe coasta Mării Nordului.",
      "Muzeul Mauritshuis adăpostește faimoasa pictură a lui Vermeer, 'Fata cu cercel de perlă'."
    ],
    en: [
      "The Hague is the seat of the Dutch government and the monarch, although Amsterdam is the capital.",
      "The Peace Palace (Vredespaleis) in The Hague is the seat of the United Nations' International Court of Justice.",
      "The Binnenhof in The Hague is the oldest parliamentary complex in the world still in use.",
      "Scheveningen, a district of The Hague, is the most popular seaside resort in the Netherlands."
    ]
  }
  },
  {
    id: "NL-CT-UTR", type: "city", parent: "NL-UT", coords: [5.12, 52.09],
    name: { de: "Utrecht", hu: "Utrecht", ro: "Utrecht", en: "Utrecht" },
    image: "/geo-images/netherlands/utrecht.webp",
  description: {
    de: "Utrecht, oft als gemütlichere Alternative zu Amsterdam betrachtet, ist eine pulsierende Universitätsstadt im Herzen der Niederlande. Ihr historisches Zentrum wird dominiert vom majestätischen Domturm, der höchsten Kirche des Landes. Die Oudegracht, der Hauptkanal der Stadt, ist einzigartig in Europa wegen ihrer Werftkeller, in denen heute Restaurants und Cafés direkt am Wasser liegen. Mit der größten Universität des Landes hat Utrecht eine junge und dynamische Bevölkerung.",
    hu: "Utrechtet gyakran Amszterdam hangulatosabb alternatívájaként tartják számon; egy nyüzsgő egyetemváros Hollandia szívében. Történelmi központját a fenséges Dóm-torony, az ország legmagasabb temploma uralja. A város fő csatornája, az Oudegracht egyedülálló Európában a rakparti pincéi miatt, ahol ma közvetlenül a vízparton éttermek és kávézók találhatók. Az ország legnagyobb egyetemével Utrecht fiatal és dinamikus népességgel rendelkezik.",
    ro: "Utrecht, considerat adesea o alternativă mai confortabilă la Amsterdam, este un oraș universitar vibrant în inima Olandei. Centrul său istoric este dominat de maiestuosul Turn Dom, cea mai înaltă biserică din țară. Oudegracht, canalul principal al orașului, este unic în Europa datorită pivnițelor sale de pe chei, unde astăzi restaurantele și cafenelele sunt situate chiar pe apă. Cu cea mai mare universitate din țară, Utrecht are o populație tânără și dinamică.",
    en: "Utrecht, often considered a cozier alternative to Amsterdam, is a vibrant university city in the heart of the Netherlands. Its historic center is dominated by the majestic Dom Tower, the tallest church in the country. The Oudegracht, the city's main canal, is unique in Europe because of its wharf cellars, where restaurants and cafes are now located right on the water. With the largest university in the country, Utrecht has a young and dynamic population."
  },
      descriptionAdvanced: {
    de: "Utrecht liegt geographisch im Zentrum der Niederlande und ist eine der ältesten Städte des Landes, gegründet von den Römern als Festung. Die historische Altstadt ist einzigartig wegen ihrer Oudegracht, einem Kanal, dessen Uferstraßen tiefer liegen als das Straßenniveau und mittelalterliche Werftkeller beherbergen, die heute Cafés und Restaurants sind. Utrecht ist eine lebendige Studentenstadt und ein wichtiger Knotenpunkt für den nationalen Eisenbahnverkehr. Das Wahrzeichen der Stadt ist der imposante Domturm, der über dem historischen Zentrum thront. Geschichte K6: Die Römer bauten Utrecht als Grenzbefestigung. Welcher große Fluss, der in den Niederlanden ins Meer mündet, bildete die nördliche Grenze des Römischen Reiches?",
    hu: "Utrecht Hollandia negyedik legnagyobb városa, amely gazdag egyházi történelemmel és középkori bájjal rendelkezik. Évszázadokon át a holland kereszténység központja és az ország legfontosabb városa volt, mielőtt Amszterdam átvette volna ezt a szerepet. Különlegessége a történelmi csatornarendszer, amelynek alsó szintjén, közvetlenül a víz mellett raktárhelyiségek, a 'werf'-ek találhatók; ma ezek hangulatos kávézóknak adnak otthont. A városképet az ikonikus Dom-torony, Hollandia legmagasabb templomtornya uralja. Történelem K6: Miért volt Utrecht az ország legfontosabb vallási és kulturális központja a középkorban?",
    ro: "Utrecht este al patrulea oraș ca mărime din Țările de Jos, cu o bogată istorie ecleziastică și un farmec medieval deosebit. Timp de secole, a fost centrul creștinismului olandez și cel mai important oraș din țară, înainte ca Amsterdam să preia acest rol. O caracteristică unică este sistemul său istoric de canale, care are spații de depozitare la nivelul inferior, direct lângă apă, numite 'werfkelders'; astăzi, acestea găzduiesc cafenele și restaurante confortabile. Peisajul urban este dominat de iconicul Turn Dom, cel mai înalt turn de biserică din Olanda. Istorie K6: De ce a fost Utrecht cel mai important centru religios și cultural al țării în Evul Mediu?",
    en: "Geographically located in the center of the Netherlands, Utrecht is one of the country's oldest cities, founded by the Romans as a fortress. The historic city center is unique due to its Oudegracht, a canal whose waterfront streets lie below street level and house medieval wharf cellars, which are now cafes and restaurants. Utrecht is a lively student city and a major hub for national rail traffic. The city's landmark is the imposing Dom Tower, which towers over the historic center. History K6: The Romans built Utrecht as a border fortification. Which major river, flowing into the sea in the Netherlands, formed the northern border of the Roman Empire?"
  },
    facts: {
    de: ["Der Domturm (112 Meter) ist der höchste Kirchturm der Niederlande.","Die Werftkeller (Werven) an der Oudegracht sind weltweit einzigartig.","Ist der wichtigste Eisenbahnknotenpunkt des Landes (Utrecht Centraal).","Hat die größte Universität der Niederlande (Universität Utrecht).","Das Rietveld-Schröder-Haus ist UNESCO-Weltkulturerbe.","Das Eisenbahnmuseum (Spoorwegmuseum) ist eine Hauptattraktion.","Bietet eines der lebendigsten Studentenleben des Landes.","War historisch eines der wichtigsten kirchlichen Zentren im Norden."],
    hu: ["A Dóm-torony (112 méter) Hollandia legmagasabb templomtornya.","Az Oudegracht mentén található rakparti pincék (Werven) világszerte egyedülállóak.","Az ország legfontosabb vasúti csomópontja (Utrecht Centraal).","Itt található Hollandia legnagyobb egyeteme (Utrechti Egyetem).","A Rietveld-Schröder-ház az UNESCO világörökség része.","A Vasúti Múzeum (Spoorwegmuseum) az egyik fő látványosság.","Az ország egyik legélénkebb diákéletével büszkélkedhet.","Történelmileg a legfontosabb északi egyházi központok egyike volt."],
    ro: ["Turnul Dom (112 metri) este cel mai înalt turn de biserică din Olanda.","Pivnițele din debarcader (Werven) de pe Oudegracht sunt unice în lume.","Este cel mai important nod feroviar din țară (Utrecht Centraal).","Are cea mai mare universitate din Olanda (Universitatea din Utrecht).","Casa Rietveld-Schröder este inclusă în Patrimoniul Mondial UNESCO.","Muzeul Căilor Ferate (Spoorwegmuseum) este o atracție principală.","Oferă una dintre cele mai vibrante vieți studențești din țară.","A fost din punct de vedere istoric unul dintre cele mai importante centre ecleziastice din nord."],
    en: ["The Dom Tower (112 meters) is the tallest church tower in the Netherlands.","The wharf cellars (Werven) on the Oudegracht are unique in the world.","Is the most important railway hub in the country (Utrecht Centraal).","Has the largest university in the Netherlands (Utrecht University).","The Rietveld-Schröder House is a UNESCO World Heritage site.","The Railway Museum (Spoorwegmuseum) is a main attraction.","Offers one of the most vibrant student lives in the country.","Was historically one of the most important ecclesiastical centers in the north."]
  },
      factsAdvanced: {
    de: [
      "Die Oudegracht in Utrecht ist weltweit einzigartig wegen ihrer zweistufigen Struktur mit Werftkellern direkt am Wasser.",
      "Mit dem Hauptbahnhof beherbergt Utrecht den wichtigsten Knotenpunkt des niederländischen Schienennetzes.",
      "Der Domturm von Utrecht ist 112 Meter hoch und musste 1674 einen schweren Tornado überstehen, der das Kirchenschiff zerstörte.",
      "Die Universität Utrecht gehört zu den renommiertesten Forschungsuniversitäten Europas."
    ],
    hu: ["A 112 méter magas Dom-torony (Domtoren) egy vihar következtében szakadt el a főhajótól 1674-ben.", "Utrecht az ország legfontosabb vasúti csomópontja, a Central Station a legforgalmasabb állomás.", "A városban alapították 1579-ben az Utrechti Uniót, amely a független Hollandia elődjének tekinthető.", "Egyeteme az egyik legnagyobb és legelismertebb az országban."],
    ro: [
      "Turnul Dom (Domtoren), înalt de 112 metri, a fost separat de nava principală de o furtună violentă în 1674.",
      "Utrecht este cel mai important nod feroviar al țării, Gara Centrală fiind cea mai aglomerată stație.",
      "Uniunea de la Utrecht a fost fondată aici în 1579, fiind considerată un precursor al Olandei independente.",
      "Universitatea sa este una dintre cele mai mari și mai respectate din țară."
    ],
    en: [
      "The Oudegracht in Utrecht is unique in the world for its two-tiered structure with wharf cellars right on the water.",
      "With its Central Station, Utrecht hosts the most important hub of the Dutch rail network.",
      "The Dom Tower of Utrecht is 112 meters high and had to survive a severe tornado in 1674 that destroyed the church nave.",
      "Utrecht University is among the most renowned research universities in Europe."
    ]
  }
  },
  {
    id: "NL-CT-EIN", type: "city", parent: "NL-NB", coords: [5.48, 51.44],
    name: { de: "Eindhoven", hu: "Eindhoven", ro: "Eindhoven", en: "Eindhoven" },
    image: "/geo-images/netherlands/eindhoven.webp",
  description: {
    de: "Eindhoven ist die innovativste und designorientierteste Stadt der Niederlande, gelegen in der Provinz Nordbrabant. Ihre rasante Entwicklung vom kleinen Dorf zur Hightech-Metropole verdankt die Stadt dem Unternehmen Philips, das hier gegründet wurde. Heute ist Eindhoven das Herzstück der Brainport-Region, einem führenden europäischen Technologiezentrum. Jedes Jahr im Oktober zieht die 'Dutch Design Week' kreative Köpfe aus aller Welt an.",
    hu: "Eindhoven Hollandia leginnovatívabb és dizájn-központúbb városa, Észak-Brabant tartományban. A város a kis faluból csúcstechnológiai metropolisszá fejlődését a Philips cégnek köszönheti, amelyet itt alapítottak. Ma Eindhoven a Brainport régió, Európa egyik vezető technológiai központjának a szíve. Minden októberben a 'Dutch Design Week' kreatív elméket vonz a világ minden tájáról.",
    ro: "Eindhoven este cel mai inovator și orientat spre design oraș din Țările de Jos, situat în provincia Brabantul de Nord. Orașul datorează dezvoltarea sa rapidă de la un mic sat la o metropolă de înaltă tehnologie companiei Philips, care a fost fondată aici. Astăzi Eindhoven este inima regiunii Brainport, un important centru tehnologic european. În fiecare an, în luna octombrie, 'Dutch Design Week' atrage minți creative din întreaga lume.",
    en: "Eindhoven is the most innovative and design-oriented city in the Netherlands, located in the province of North Brabant. The city owes its rapid development from a small village to a high-tech metropolis to the Philips company, which was founded here. Today Eindhoven is the heart of the Brainport region, a leading European technology center. Every October, the 'Dutch Design Week' attracts creative minds from all over the world."
  },
      descriptionAdvanced: {
    de: "Eindhoven ist eine moderne und industriell geprägte Stadt im Süden der Niederlande, die oft als das Silicon Valley Europas bezeichnet wird. Der rasante Aufstieg der Stadt begann Ende des 19. Jahrhunderts mit der Gründung des Philips-Konzerns, der Eindhoven in ein Zentrum für Technologie, Design und Innovation verwandelte. Auch wenn ein Großteil der Philips-Produktion verlagert wurde, bleibt der Geist der Innovation durch die Technische Universität und den Hightech-Campus lebendig. Jedes Jahr im Herbst leuchtet die Stadt auf besondere Weise, wenn Künstler aus aller Welt das Glow-Festival, ein bedeutendes Lichtkunst-Event, veranstalten. Physik K7: Eindhoven ist für seine Technologie und das GLOW-Festival bekannt. Wie funktioniert eine moderne LED, die bei solchen Lichtfestivals genutzt wird?",
    hu: "Eindhoven a holland innováció, a technológia és a formatervezés központja. A város robbanásszerű fejlődését a Philips vállalat 1891-es megalapítása indította el, amely izzólámpák, majd elektronikai cikkek gyártásával vált világhírűvé. Emiatt Eindhovent a 'Fény Városának' is nevezik. Ma a High Tech Campus és a műszaki egyetem (TU/e) révén Európa egyik legokosabb régiójaként tartják számon, amely hatalmas számú szabadalmat jegyez évről évre. Gazdaság K8: Hogyan alakította egyetlen vállalat (a Philips) egy egész város gazdaságát és társadalmát?",
    ro: "Eindhoven este centrul inovației, tehnologiei și designului olandez. Dezvoltarea explozivă a orașului a fost declanșată de fondarea companiei Philips în 1891, care a devenit celebră în întreaga lume prin producția de becuri și, ulterior, de articole electronice. Din acest motiv, Eindhoven este adesea numit 'Orașul Luminii'. Astăzi, prin intermediul High Tech Campus și al Universității de Tehnologie (TU/e), este considerată una dintre cele mai inteligente regiuni din Europa, înregistrând un număr imens de brevete în fiecare an. Economie K8: Cum a modelat o singură companie (Philips) economia și societatea unui oraș întreg?",
    en: "Eindhoven is a modern and industrial city in the south of the Netherlands, often referred to as the Silicon Valley of Europe. The city's rapid rise began at the end of the 19th century with the founding of the Philips corporation, which transformed Eindhoven into a center for technology, design, and innovation. Although much of Philips' production has relocated, the spirit of innovation remains alive through the University of Technology and the High Tech Campus. Every autumn, the city lights up in a special way when artists from all over the world host the Glow Festival, a major light art event. Physics K7: Eindhoven is known for its technology and the GLOW festival. How does a modern LED, used in such light festivals, work?"
  },
    facts: {
    de: ["Geburtsort des globalen Elektronikkonzerns Philips.","Zentrum der High-Tech-Region 'Brainport Eindhoven'.","Das Philips Museum zeigt die Geschichte des Unternehmens.","Die Dutch Design Week ist eines der wichtigsten Design-Events Europas.","Heimat des berühmten Fußballvereins PSV Eindhoven.","Das 'Evoluon' ist ein markantes, ufo-förmiges Bauwerk.","Lichtfestival 'GLOW' taucht die Stadt im November in bunte Kunstwerke.","Die Design Academy Eindhoven zählt zu den besten der Welt."],
    hu: ["A Philips globális elektronikai konszern szülőhelye.","A 'Brainport Eindhoven' csúcstechnológiai régió központja.","A Philips Múzeum a vállalat történetét mutatja be.","A Dutch Design Week Európa egyik legfontosabb dizájneseménye.","A híres PSV Eindhoven futballklub otthona.","Az 'Evoluon' egy feltűnő, ufó alakú építmény.","A 'GLOW' fényfesztivál novemberben színes művészeti alkotásokba burkolja a várost.","Az eindhoveni Design Academy a világ legjobbjai közé tartozik."],
    ro: ["Locul de naștere al companiei globale de electronice Philips.","Centrul regiunii de înaltă tehnologie 'Brainport Eindhoven'.","Muzeul Philips prezintă istoria companiei.","Dutch Design Week este unul dintre cele mai importante evenimente de design din Europa.","Sediul celebrului club de fotbal PSV Eindhoven.","'Evoluon' este o clădire izbitoare, în formă de OZN.","Festivalul luminii 'GLOW' scufundă orașul în opere de artă colorate în noiembrie.","Design Academy Eindhoven este printre cele mai bune din lume."],
    en: ["Birthplace of the global electronics company Philips.","Center of the high-tech region 'Brainport Eindhoven'.","The Philips Museum shows the history of the company.","The Dutch Design Week is one of the most important design events in Europe.","Home of the famous football club PSV Eindhoven.","The 'Evoluon' is a striking, UFO-shaped building.","The light festival 'GLOW' immerses the city in colorful artworks in November.","The Design Academy Eindhoven is among the best in the world."]
  },
      factsAdvanced: {
    de: [
      "Eindhoven wird oft als die 'Lichtstadt' der Niederlande bezeichnet, ein Erbe der Philips-Glühbirnenproduktion.",
      "Die Design Academy Eindhoven gilt als eine der besten Schulen für Industriedesign weltweit.",
      "Während der Dutch Design Week im Oktober besuchen jährlich über 300.000 Menschen Eindhoven.",
      "Der Hightech-Campus Eindhoven konzentriert mehr als 200 Unternehmen und Forschungsinstitute."
    ],
    hu: ["A város évente megrendezi a GLOW Eindhoven fesztivált, amely a világító művészetet ünnepli.", "Az ASML, a világ vezető csipgyártó berendezés gyártója az eindhoveni régióban (Veldhoven) működik.", "Az Evoluon egy repülő csészealj alakú épület, amelyet a Philips építtetett a technológia népszerűsítésére.", "Itt található a Van Abbemuseum, amely a kortárs és modern művészet egyik kiemelkedő múzeuma."],
    ro: [
      "Orașul găzduiește anual festivalul GLOW Eindhoven, care celebrează arta luminii.",
      "ASML, principalul producător mondial de echipamente pentru fabricarea cipurilor, operează în regiunea Eindhoven (Veldhoven).",
      "Evoluon este o clădire în formă de farfurie zburătoare, construită de Philips pentru a promova tehnologia.",
      "Aici se află Muzeul Van Abbe, unul dintre cele mai importante muzee de artă modernă și contemporană."
    ],
    en: [
      "Eindhoven is often called the 'City of Light' of the Netherlands, a legacy of Philips light bulb production.",
      "The Design Academy Eindhoven is considered one of the best schools for industrial design worldwide.",
      "During Dutch Design Week in October, over 300,000 people visit Eindhoven annually.",
      "The High Tech Campus Eindhoven concentrates more than 200 companies and research institutes."
    ]
  }
  },
  {
    id: "NL-CT-GRO", type: "city", parent: "NL-GR", coords: [6.57, 53.22],
    name: { de: "Groningen", hu: "Groningen", ro: "Groningen", en: "Groningen" },
    image: "/geo-images/netherlands/groningen.webp",
  description: {
    de: "Groningen ist die größte Stadt im Norden der Niederlande und als junge, dynamische Universitätsstadt bekannt. Rund ein Viertel der Bevölkerung sind Studenten, was der Stadt ein pulsierendes Nachtleben und eine lebhafte Kulturszene verleiht. Der historische Stadtkern wird vom berühmten Martiniturm überragt und ist äußerst fahrradfreundlich. Die Mischung aus alten Gassen, modernen Museen wie dem Groninger Museum und innovativer Stadtplanung macht sie einzigartig.",
    hu: "Groningen a legnagyobb város Hollandia északi részén, és fiatalos, dinamikus egyetemvárosként ismert. A lakosság mintegy negyede diák, ami lüktető éjszakai életet és élénk kulturális színteret biztosít a városnak. A történelmi városközpont fölé a híres Martini-torony magasodik, és a terület rendkívül kerékpárosbarát. A régi utcák, az olyan modern múzeumok, mint a Groninger Múzeum, és az innovatív várostervezés keveréke egyedülállóvá teszi.",
    ro: "Groningen este cel mai mare oraș din nordul Olandei și este cunoscut ca un oraș universitar tânăr și dinamic. Aproximativ un sfert din populație sunt studenți, ceea ce oferă orașului o viață de noapte vibrantă și o scenă culturală plină de viață. Centrul istoric al orașului este dominat de faimosul Turn Martini și este extrem de prietenos cu bicicletele. Amestecul de alei vechi, muzee moderne, cum ar fi Muzeul Groninger, și planificarea urbană inovatoare îl fac unic.",
    en: "Groningen is the largest city in the north of the Netherlands and is known as a young, dynamic university city. About a quarter of the population are students, giving the city a vibrant nightlife and lively cultural scene. The historic city center is dominated by the famous Martini Tower and is extremely bicycle-friendly. The mix of old alleys, modern museums like the Groninger Museum, and innovative urban planning makes it unique."
  },
      descriptionAdvanced: {
    de: "Groningen ist das unbestrittene städtische Zentrum im Norden der Niederlande und hat eine reiche Geschichte als Handelsstadt der Hanse. Heute ist Groningen vor allem eine junge und dynamische Universitätsstadt; die Studenten machen einen großen Teil der Bevölkerung aus und prägen das kulturelle Leben. Das Stadtzentrum bietet eine Mischung aus historischen Bauten wie dem markanten Martiniturm und moderner Architektur wie dem auffälligen Groninger Museum. Groningen gilt zudem als Vorreiter in der nachhaltigen Mobilität und wurde zur fahrradfreundlichsten Stadt der Welt gekürt. Sachkunde K5: Groningen ist eine der fahrradfreundlichsten Städte. Warum ist es für die Umwelt gut, wenn Menschen mehr Fahrrad statt Auto fahren?",
    hu: "Groningen városa az északi tartományok legfontosabb gazdasági és kulturális központja, egy igazi, nyüzsgő egyetemváros. Lakosságának jelentős részét diákok teszik ki, ami fiatalos, energikus atmoszférát és élénk éjszakai életet kölcsönöz a településnek. A város büszkélkedhet Hollandia legkiterjedtebb kerékpáros infrastruktúrájával, a központból szinte teljesen kitiltották az autókat. Jelképe az ötszáz éves Martini-torony és az innovatív kortárs dizájnnal rendelkező Groninger Múzeum. Földrajz K7: Miért előnyös egy város számára, ha közlekedését nagyrészt kerékpárokra és tömegközlekedésre alapozza?",
    ro: "Orașul Groningen este cel mai important centru economic și cultural din provinciile nordice, fiind un oraș universitar cu adevărat vibrant. O mare parte a populației sale este formată din studenți, ceea ce îi conferă o atmosferă tânără, plină de energie și o viață de noapte animată. Orașul se mândrește cu cea mai extinsă infrastructură pentru biciclete din Olanda, iar mașinile sunt aproape complet interzise în centru. Simbolurile sale sunt Turnul Martini, vechi de cinci sute de ani, și Muzeul Groninger, cu designul său contemporan inovator. Geografie K7: De ce este benefic pentru un oraș să își bazeze transportul în mare parte pe biciclete și transport public?",
    en: "Groningen is the undisputed urban center in the north of the Netherlands and has a rich history as a Hanseatic trading city. Today, Groningen is primarily a young and dynamic university city; students make up a large part of the population and shape its cultural life. The city center offers a mix of historical buildings like the striking Martini Tower and modern architecture such as the eye-catching Groninger Museum. Groningen is also considered a pioneer in sustainable mobility and has been named the most bicycle-friendly city in the world. Science K5: Groningen is one of the most bicycle-friendly cities. Why is it good for the environment when people ride bicycles more often than driving cars?"
  },
    facts: {
    de: ["Groningen ist die größte Wirtschafts- und Kulturmetropole im Norden.","Besitzt den prozentual höchsten Studentenanteil der Niederlande.","Der Martiniturm (d'Olle Grieze) ist das berühmte Wahrzeichen der Stadt.","Das futuristische Groninger Museum ist weltbekannt für moderne Kunst.","Das Stadtzentrum wurde in den 1970ern konsequent fahrradfreundlich gemacht.","Hat keine Sperrstunde, was ein intensives Nachtleben ermöglicht.","Die Rijksuniversiteit Groningen ist eine der ältesten Universitäten des Landes.","Der Grote Markt ist das geschäftige historische Herz der Stadt."],
    hu: ["Groningen a legnagyobb gazdasági és kulturális metropolisz északon.","A lakosság arányát tekintve itt a legmagasabb a diákok aránya Hollandiában.","A Martini-torony (d'Olle Grieze) a város híres jelképe.","A futurisztikus Groninger Múzeum világhírű modern művészetéről.","A városközpontot az 1970-es években következetesen kerékpárosbaráttá tették.","Nincs záróra, ami intenzív éjszakai életet tesz lehetővé.","A Groningeni Egyetem (RUG) az ország egyik legrégebbi egyeteme.","A Grote Markt a város nyüzsgő történelmi központja."],
    ro: ["Groningen este cea mai mare metropolă economică și culturală din nord.","Are cel mai mare procent de studenți din Olanda.","Turnul Martini (d'Olle Grieze) este faimosul simbol al orașului.","Muzeul futurist Groninger este renumit în întreaga lume pentru arta modernă.","Centrul orașului a devenit în mod constant prietenos cu bicicletele în anii 1970.","Nu are oră de închidere, ceea ce permite o viață de noapte intensă.","Universitatea din Groningen este una dintre cele mai vechi universități din țară.","Grote Markt este inima istorică plină de viață a orașului."],
    en: ["Groningen is the largest economic and cultural metropolis in the north.","Has the highest percentage of students in the Netherlands.","The Martini Tower (d'Olle Grieze) is the famous landmark of the city.","The futuristic Groninger Museum is world-renowned for modern art.","The city center was made consistently bicycle-friendly in the 1970s.","Has no curfew, which allows for an intense nightlife.","The University of Groningen is one of the oldest universities in the country.","The Grote Markt is the bustling historic heart of the city."]
  },
      factsAdvanced: {
    de: [
      "Mehr als ein Viertel der Bevölkerung von Groningen besteht aus Studenten.",
      "Das Groninger Museum liegt auf einer künstlichen Insel und wurde von renommierten internationalen Architekten entworfen.",
      "Groningen hat einen der höchsten Anteile an Fahrradverkehr weltweit im Stadtzentrum.",
      "Das Peerd van Ome Loeks ist ein berühmtes lokales Denkmal, das auf einem alten Volkslied basiert."
    ],
    hu: ["A város lakosságának több mint negyedét egyetemi hallgatók teszik ki.", "Groningent 1977-ben teljesen átalakították a kerékpárosok és a gyalogosok javára egy úttörő közlekedési tervvel.", "A Groninger Múzeum egy mesterséges szigeten áll, és posztmodern építészetéről híres.", "A város történelme a 11. századig nyúlik vissza, és a Hanza-szövetség tagja volt."],
    ro: [
      "Mai mult de un sfert din populația orașului este formată din studenți universitari.",
      "Groningen a fost complet transformat în 1977 în favoarea bicicliștilor și pietonilor printr-un plan de transport de pionierat.",
      "Muzeul Groninger se află pe o insulă artificială și este renumit pentru arhitectura sa postmodernă.",
      "Istoria orașului datează din secolul al XI-lea și a fost membru al Ligii Hanseatice."
    ],
    en: [
      "More than a quarter of the population of Groningen consists of students.",
      "The Groninger Museum is situated on an artificial island and was designed by renowned international architects.",
      "Groningen has one of the highest proportions of bicycle traffic worldwide in its city center.",
      "The Peerd van Ome Loeks is a famous local monument based on an old folk song."
    ]
  }
  },
  {
    id: "NL-CT-TIL", type: "city", parent: "NL-NB", coords: [5.08, 51.56],
    name: { de: "Tilburg", hu: "Tilburg", ro: "Tilburg", en: "Tilburg" },
    image: "/geo-images/netherlands/tilburg.webp",
  description: {
    de: "Tilburg, in der Provinz Nordbrabant gelegen, ist eine Stadt, die sich von einer historischen Textil-Metropole zu einem modernen Zentrum für Kultur und Innovation gewandelt hat. Das kulturelle Highlight der Stadt ist die Spoorzone, ein ehemaliges Eisenbahngelände, das heute eine beeindruckende Architektur-Bibliothek (LocHal) beherbergt. Zudem ist Tilburg landesweit bekannt für die Tilburger Kirmes, die größte Messe (Kermis) der Benelux-Länder.",
    hu: "A Tilburg, amely Észak-Brabant tartományban található, egy olyan város, amely történelmi textil-metropoliszból a kultúra és az innováció modern központjává alakult át. A város kulturális fénypontja a Spoorzone, egy egykori vasúti terület, amely ma egy lenyűgöző építészeti könyvtárnak (LocHal) ad otthont. Ezenkívül Tilburg országszerte ismert a Tilburgi Vándorcirkuszról (Kermis), amely a Benelux államok legnagyobb vására.",
    ro: "Tilburg, situat în provincia Brabantul de Nord, este un oraș care s-a transformat dintr-o metropolă istorică a textilelor într-un centru modern pentru cultură și inovație. Punctul culminant cultural al orașului este Spoorzone, o fostă zonă feroviară care găzduiește acum o bibliotecă arhitecturală impresionantă (LocHal). Tilburg este cunoscut și la nivel național pentru Târgul din Tilburg, cel mai mare târg (Kermis) din țările Benelux.",
    en: "Tilburg, located in the province of North Brabant, is a city that has transformed from a historic textile metropolis into a modern center for culture and innovation. The cultural highlight of the city is the Spoorzone, a former railway area that now houses an impressive architectural library (LocHal). In addition, Tilburg is known nationwide for the Tilburg Fair, the largest funfair (Kermis) in the Benelux countries."
  },
      descriptionAdvanced: {
    de: "Tilburg ist eine florierende Stadt in der Provinz Nordbrabant, deren Geschichte eng mit der Textilindustrie verknüpft ist. Im 19. und frühen 20. Jahrhundert wurde die Stadt als die 'Wollhauptstadt' der Niederlande bezeichnet und war geprägt von Fabriken und Arbeiterquartieren. Heute hat sich Tilburg erfolgreich zu einer modernen Bildungs- und Kulturstadt gewandelt, die alte Industriegebäude kreativ nutzt; ein hervorragendes Beispiel dafür ist das Museum de Pont für zeitgenössische Kunst. Die Tilburgse Kermis, die jährlich im Juli stattfindet, ist der größte Jahrmarkt der Benelux-Länder und zieht Millionen Besucher an. Textilgeschichte K6: In Tilburg wurde früher viel Wolle verarbeitet. Von welchem Tier gewinnt man die meiste Wolle für Kleidung?",
    hu: "Tilburg egykor a holland textilipar fellegvára volt, amelyet gyakran 'Hollandia gyapjúfővárosaként' emlegettek. Bár az iparág a 20. század végén hanyatlásnak indult, a város sikeresen újra feltalálta magát, és az egykori gyárépületeket kreatív központokká, modern múzeumokká és lakóövezetekké alakították át. Tilburg ma egy modern, dinamikus város, amely egyetemi kampuszáról, élénk zenei és kulturális életéről, valamint a LocHal nevű, díjnyertes, régi mozdonycsarnokból kialakított könyvtáráról ismert. Gazdaság K7: Hogyan tud egy korábbi iparváros sikeresen átállni a modern, tudásalapú szolgáltatói gazdaságra?",
    ro: "Tilburg a fost cândva un bastion al industriei textile olandeze, fiind adesea numit 'capitala lânii din Olanda'. Deși industria a intrat în declin la sfârșitul secolului al XX-lea, orașul s-a reinventat cu succes, transformând fostele clădiri industriale în centre creative, muzee moderne și zone rezidențiale. Astăzi, Tilburg este un oraș modern și dinamic, cunoscut pentru campusul său universitar, viața muzicală și culturală activă, precum și pentru LocHal, o bibliotecă premiată amenajată într-o veche hală de locomotive. Economie K7: Cum poate un fost oraș industrial să treacă cu succes la o economie modernă bazată pe cunoaștere și servicii?",
    en: "Tilburg is a thriving city in the province of North Brabant, its history closely linked to the textile industry. In the 19th and early 20th centuries, the city was known as the 'wool capital' of the Netherlands and was defined by factories and working-class neighborhoods. Today, Tilburg has successfully transformed into a modern educational and cultural city that creatively repurposes old industrial buildings; a prime example is the De Pont Museum of contemporary art. The Tilburgse Kermis, held annually in July, is the largest fair in the Benelux countries and attracts millions of visitors. Textile History K6: Tilburg used to process a lot of wool. Which animal provides the most wool for clothing?"
  },
    facts: {
    de: ["Ehemaliges Zentrum der niederländischen Woll- und Textilindustrie.","Beherbergt das interessante 'TextielMuseum' in einer alten Fabrik.","Veranstaltet jährlich die größte Kirmes (Kermis) der Benelux-Staaten.","Die preisgekrönte Bibliothek 'LocHal' befindet sich in einer alten Zughalle.","Die Universität Tilburg ist bekannt für Rechts- und Wirtschaftswissenschaften.","Hat eine große und sehr aktive internationale Studentenszene.","Der Safaripark Beekse Bergen liegt nur wenige Kilometer entfernt.","König Wilhelm II. der Niederlande verbrachte hier gerne Zeit."],
    hu: ["A holland gyapjú- és textilipar egykori központja.","Egy régi gyárban ad otthont az érdekes 'Textilmúzeumnak'.","Évente itt rendezik meg a Benelux államok legnagyobb vásárát (Kermis).","A díjnyertes 'LocHal' könyvtár egy régi vasúti csarnokban található.","A Tilburgi Egyetem jogi és közgazdasági képzéseiről híres.","Nagy és rendkívül aktív nemzetközi diákélettel rendelkezik.","A Beekse Bergen szafaripark mindössze néhány kilométerre található.","II. Vilmos holland király szívesen töltötte itt az idejét."],
    ro: ["Fostul centru al industriei olandeze de lână și textile.","Găzduiește interesantul 'Muzeu al Textilelor' într-o fabrică veche.","Organizează anual cel mai mare târg (Kermis) din țările Benelux.","Biblioteca premiată 'LocHal' este situată într-o hală de tren veche.","Universitatea Tilburg este cunoscută pentru drept și economie.","Are o scenă studențească internațională mare și foarte activă.","Parcul safari Beekse Bergen este la doar câțiva kilometri distanță.","Regele William al II-lea al Olandei i-a plăcut să petreacă timpul aici."],
    en: ["Former center of the Dutch wool and textile industry.","Houses the interesting 'Textile Museum' in an old factory.","Hosts the largest funfair (Kermis) in the Benelux countries annually.","The award-winning 'LocHal' library is located in an old train hall.","Tilburg University is known for law and economics.","Has a large and very active international student scene.","The Beekse Bergen safari park is just a few kilometers away.","King William II of the Netherlands liked to spend time here."]
  },
      factsAdvanced: {
    de: [
      "Tilburg war früher das unangefochtene Zentrum der niederländischen Wollindustrie.",
      "Die Universität Tilburg ist besonders renommiert in den Bereichen Wirtschaft, Recht und Sozialwissenschaften.",
      "Das Textilmuseum in Tilburg befindet sich in einer ehemaligen Fabrik und zeigt noch heute arbeitende Webstühle.",
      "Die LocHal, eine umgebaute Lokomotivenwerkstatt, dient heute als preisgekrönte öffentliche Bibliothek."
    ],
    hu: ["A De Pont Múzeum egy egykori gyapjúfonodában található, és kortárs művészetet állít ki.", "A LocHal 2019-ben elnyerte a Világ Év Épülete díjat a belsőépítészeti kategóriában.", "Tilburg rendezi meg minden júliusban a Benelux államok legnagyobb, tíznapos vidámparki fesztiválját (Tilburgse Kermis).", "Az 1927-ben alapított Tilburgi Egyetem (TiU) közgazdasági és jogi képzéseiről híres."],
    ro: [
      "Muzeul De Pont este situat într-o fostă filatură de lână și expune artă contemporană.",
      "În 2019, LocHal a câștigat premiul pentru Clădirea Anului în lume la categoria design interior.",
      "În fiecare lună iulie, Tilburg găzduiește cel mai mare festival de parc de distracții de zece zile din țările Benelux (Tilburgse Kermis).",
      "Universitatea din Tilburg (TiU), fondată în 1927, este faimoasă pentru programele sale de economie și drept."
    ],
    en: [
      "Tilburg was once the undisputed center of the Dutch wool industry.",
      "Tilburg University is particularly renowned in the fields of economics, law, and social sciences.",
      "The Textile Museum in Tilburg is housed in a former factory and still displays operating looms.",
      "The LocHal, a converted locomotive workshop, now serves as an award-winning public library."
    ]
  }
  },
  {
    id: "NL-CT-NIJ", type: "city", parent: "NL-GE", coords: [5.86, 51.84],
    name: { de: "Nijmegen", hu: "Nijmegen", ro: "Nijmegen", en: "Nijmegen" },
    image: "/geo-images/netherlands/nijmegen.webp",
  description: {
    de: "Nijmegen gilt als die älteste Stadt der Niederlande und blickt auf eine faszinierende über 2000-jährige römische Geschichte zurück. Die Stadt am Fluss Waal in Gelderland kombiniert ihr historisches Erbe mit einer lebendigen studentischen Atmosphäre. Weltweite Bekanntheit erlangt Nijmegen jedes Jahr im Juli durch den internationalen Vier-Tage-Marsch, das größte Mehrtages-Wanderereignis der Welt, das von großen Festivitäten begleitet wird.",
    hu: "Nijmegen Hollandia legrégebbi városának számít, és több mint 2000 éves lenyűgöző római történelemre tekinthet vissza. A Gelderlandban, a Waal folyó partján fekvő város történelmi örökségét élénk diákélettel ötvözi. Nijmegen minden év júliusában világszerte ismertté válik a nemzetközi Négynapos Gyaloglat révén, amely a világ legnagyobb többnapos gyalogos eseménye, és hatalmas ünnepségek kísérik.",
    ro: "Nijmegen este considerat cel mai vechi oraș din Țările de Jos și are o istorie romană fascinantă de peste 2000 de ani. Orașul de pe râul Waal din Gelderland își combină moștenirea istorică cu o atmosferă studențească plină de viață. Nijmegen capătă faimă mondială în fiecare lună iulie prin Marșul Internațional de Patru Zile, cel mai mare eveniment de mers pe jos de mai multe zile din lume, care este însoțit de festivități mari.",
    en: "Nijmegen is considered the oldest city in the Netherlands and looks back on a fascinating Roman history of over 2000 years. The city on the Waal river in Gelderland combines its historical heritage with a lively student atmosphere. Nijmegen gains worldwide fame every July through the International Four Days Marches, the largest multi-day walking event in the world, accompanied by huge festivities."
  },
      descriptionAdvanced: {
    de: "Nijmegen beansprucht den Titel der ältesten Stadt der Niederlande, deren Wurzeln bis auf ein römisches Militärlager um den Beginn unserer Zeitrechnung zurückgehen. Die Stadt am Waal war ein wichtiger Stützpunkt an der Grenze des Römischen Reiches und später eine Kaiserpfalz von Karl dem Großen. Im Zweiten Weltkrieg erlitt Nijmegen schwere Zerstörungen, als sie fälschlicherweise bombardiert wurde, konnte aber ihren historischen Charme in Teilen wieder aufbauen. Heute ist es eine lebendige Universitätsstadt, weltberühmt für das jährliche 'Vierdaagse'-Wanderevent, an dem Zehntausende Menschen teilnehmen. Geschichte K6: Nijmegen lag an der Grenze des Römischen Reiches. Wie nannte man den Grenzwall, den die Römer zur Verteidigung bauten?",
    hu: "Nijmegen Hollandia legrégebbi városa, amelynek története a római korig nyúlik vissza, amikor Ulpia Noviomagus néven a birodalom fontos északi helyőrsége volt. A város a Waal folyó partján fekszik, és dombosabb környezete miatt elüt a tipikus sík holland tájtól. Nijmegen ma is jelentős egyetemváros és kulturális központ, amely világszerte ismert az évente megrendezett négynapos gyaloglótúráról (Vierdaagse), amely a világ legnagyobb többnapos menetelő eseménye. Történelem K6: Mi volt a szerepe a római limesnek (határnak), amelynek egyik kulcspontja Nijmegen volt?",
    ro: "Nijmegen este cel mai vechi oraș din Olanda, cu o istorie care datează din epoca romană, când, sub numele de Ulpia Noviomagus, a fost o importantă garnizoană nordică a imperiului. Orașul este situat pe malurile râului Waal și, datorită împrejurimilor sale mai deluroase, contrastează cu peisajul tipic plat olandez. Nijmegen rămâne astăzi un important oraș universitar și un centru cultural, cunoscut în întreaga lume pentru Marșul de Patru Zile (Vierdaagse) desfășurat anual, cel mai mare eveniment de mers pe jos de mai multe zile din lume. Istorie K6: Care a fost rolul limesului roman (granița), pentru care Nijmegen era un punct cheie?",
    en: "Nijmegen claims the title of the oldest city in the Netherlands, with roots tracing back to a Roman military camp around the beginning of our era. The city on the Waal river was an important outpost on the border of the Roman Empire and later an imperial palace for Charlemagne. In World War II, Nijmegen suffered severe destruction when it was mistakenly bombed, but managed to rebuild parts of its historical charm. Today, it is a lively university city, world-famous for the annual 'Vierdaagse' walking event, in which tens of thousands of people participate. History K6: Nijmegen was located on the border of the Roman Empire. What was the border wall called that the Romans built for defense?"
  },
    facts: {
    de: ["Die älteste Stadt der Niederlande, gegründet von den Römern (Ulpia Noviomagus).","Weltbekannt für den Nijmegen-Vier-Tage-Marsch (Vierdaagse).","Befindet sich am Ufer des Flusses Waal, nahe der deutschen Grenze.","Der Valkhof-Park bietet Ruinen und einen weiten Blick über die Waal.","Die Radboud-Universität Nijmegen ist eine der führenden Universitäten.","Hat eine bewegte Geschichte im Zweiten Weltkrieg (Bombardierung 1944).","Die St. Stevenskerk ist ein markantes historisches Wahrzeichen.","Wurde 2018 zur Umwelthauptstadt Europas (Green Capital) gewählt."],
    hu: ["Hollandia legrégebbi városa, amelyet a rómaiak alapítottak (Ulpia Noviomagus).","Világhírű a nijmegeni Négynapos Gyaloglatról (Vierdaagse).","A Waal folyó partján található, közel a német határhoz.","A Valkhof park romokat és lenyűgöző kilátást nyújt a Waalra.","A nijmegeni Radboud Egyetem az egyik vezető egyetem.","A második világháborúban (1944-es bombázás) viharos története volt.","A Szent István-templom kiemelkedő történelmi nevezetesség.","2018-ban Európa Zöld Fővárosának (Green Capital) választották."],
    ro: ["Cel mai vechi oraÈ™ din Olanda, fondat de romani (Ulpia Noviomagus).","Renumit pentru Marșul de Patru Zile de la Nijmegen (Vierdaagse).","Situat pe malul râului Waal, aproape de granița cu Germania.","Parcul Valkhof oferă ruine și vederi panoramice peste Waal.","Universitatea Radboud din Nijmegen este una dintre universitățile de top.","A avut o istorie zbuciumată în timpul celui de-al Doilea Război Mondial (bombardamentul din 1944).","Biserica Sf. Ștefan este un reper istoric proeminent.","În 2018 a fost aleasă Capitala Verde a Europei (Green Capital)."],
    en: ["The oldest city in the Netherlands, founded by the Romans (Ulpia Noviomagus).","World-famous for the Nijmegen Four Days Marches (Vierdaagse).","Located on the banks of the river Waal, near the German border.","The Valkhof Park offers ruins and sweeping views over the Waal.","Radboud University Nijmegen is one of the leading universities.","Had a turbulent history in World War II (1944 bombing).","St. Stephen's Church is a prominent historical landmark.","Was elected European Green Capital in 2018."]
  },
      factsAdvanced: {
    de: [
      "Nijmegen feierte im Jahr 2005 sein 2000-jähriges Bestehen und gilt als älteste Stadt der Niederlande.",
      "Der 'Nijmeegse Vierdaagse' ist die größte mehrtägige Marschveranstaltung der Welt.",
      "Die Radboud-Universität in Nijmegen ist eine der führenden Forschungseinrichtungen der Niederlande.",
      "Im Valkhofpark befinden sich die Reste einer Pfalz, die von Kaiser Karl dem Großen genutzt wurde."
    ],
    hu: ["Nijmegen idén ünnepli fennállásának több mint 2000. évfordulóját.", "A Nemzetközi Négynapos Gyaloglótúrán (Vierdaagse) évente több mint 40 000 ember vesz részt a világ minden tájáról.", "A város a második világháború alatt súlyos bombatámadásokat szenvedett, de történelmi épületeit szépen helyreállították.", "A Radboud Egyetem az ország egyik vezető kutatóintézménye."],
    ro: [
      "Nijmegen a sărbătorit recent a peste 2000-a aniversare de la înființare.",
      "La Marșul Internațional de Patru Zile (Vierdaagse) participă anual peste 40.000 de oameni din întreaga lume.",
      "Orașul a suferit bombardamente severe în timpul celui de-al Doilea Război Mondial, dar clădirile sale istorice au fost frumos restaurate.",
      "Universitatea Radboud este una dintre cele mai importante instituții de cercetare din țară."
    ],
    en: [
      "Nijmegen celebrated its 2,000th anniversary in 2005 and is considered the oldest city in the Netherlands.",
      "The 'Nijmeegse Vierdaagse' is the largest multi-day marching event in the world.",
      "Radboud University in Nijmegen is one of the leading research institutions in the Netherlands.",
      "The Valkhof Park contains the ruins of a palace once used by Emperor Charlemagne."
    ]
  }
  },
  {
    id: "NL-CT-HAR", type: "city", parent: "NL-NH", coords: [4.64, 52.38],
    name: { de: "Haarlem", hu: "Haarlem", ro: "Haarlem", en: "Haarlem" },
    image: "/geo-images/netherlands/haarlem.webp",
  description: {
    de: "Haarlem, die Hauptstadt der Provinz Nordholland, ist eine malerische Stadt mit viel historischem Charme, die nur wenige Kilometer von der Nordseeküste entfernt liegt. Sie gilt als kleine, ruhigere Version von Amsterdam, komplett mit Grachten, Windmühlen und einer gut erhaltenen Altstadt. Das Herz der Stadt ist der Grote Markt mit der beeindruckenden St.-Bavo-Kirche. Haarlem ist zudem bekannt für seine vielen versteckten Hofjes (Innenhöfe).",
    hu: "Haarlem, Észak-Holland tartomány fővárosa, festői város gazdag történelmi bájjal, amely mindössze néhány kilométerre fekszik az Északi-tenger partjától. Gyakran nevezik Amszterdam kisebb, csendesebb változatának, csatornákkal, szélmalmokkal és egy jól megőrzött óvárossal. A város szíve a Grote Markt a lenyűgöző Szent Bavo-templommal. Haarlem emellett ismert számos rejtett udvaráról (Hofjes) is.",
    ro: "Haarlem, capitala provinciei Olanda de Nord, este un oraș pitoresc cu mult farmec istoric, situat la doar câțiva kilometri de coasta Mării Nordului. Este adesea considerat o versiune mai mică și mai liniștită a Amsterdamului, completată cu canale, mori de vânt și un oraș vechi bine conservat. Inima orașului este Grote Markt cu impresionanta sa Biserică Sf. Bavo. Haarlem este, de asemenea, cunoscut pentru numeroasele sale curți ascunse (Hofjes).",
    en: "Haarlem, the capital of the province of North Holland, is a picturesque city with a lot of historic charm, located just a few kilometers from the North Sea coast. It is often considered a smaller, quieter version of Amsterdam, complete with canals, windmills, and a well-preserved old town. The heart of the city is the Grote Markt with its impressive St. Bavo's Church. Haarlem is also known for its many hidden courtyards (Hofjes)."
  },
      descriptionAdvanced: {
    de: "Haarlem, die historische Hauptstadt der Provinz Nordholland, liegt nur eine kurze Zugfahrt von Amsterdam entfernt, bietet aber eine ruhigere, ebenso malerische Atmosphäre. Die Stadt florierte im 17. Jahrhundert und war ein Zentrum für Bierbrauereien, Tulpenhandel und Malerei, in dem Meister wie Frans Hals wirkten. Das mittelalterliche Zentrum rund um den Grote Markt mit der beeindruckenden Bavo-Kirche gehört zu den schönsten der Niederlande. Haarlem wird oft als die Einkaufsstadt der Niederlande bezeichnet und ist von prächtigen Grachten und historischen Hofjes (versteckten Innenhöfen) durchzogen. Kunst K7: Frans Hals war ein berühmter Maler aus Haarlem, der vor allem Porträts malte. Warum ließen sich wohlhabende Bürger im 17. Jahrhundert so gerne porträtieren?",
    hu: "Haarlem, az Észak-Holland tartomány fővárosa, történelmi épületeivel, macskaköves utcáival és gazdag kulturális örökségével Amszterdam csendesebb, de ugyanolyan gyönyörű alternatívája. A holland aranykorban a virágkereskedelem, a sörfőzés és a művészetek központja volt, itt élt és alkotott a híres festő, Frans Hals. A város központjában áll a hatalmas Grote Kerk (Nagy Templom), amely lenyűgöző Müller-orgonájáról ismert, melyen egykor maga Mozart is játszott. Művészettörténet K7: Miért volt a 17. századi holland festészet (mint amit Frans Hals képviselt) forradalmi az európai művészetben?",
    ro: "Haarlem, capitala provinciei Olanda de Nord, este o alternativă mai liniștită, dar la fel de frumoasă la Amsterdam, cu clădirile sale istorice, străzile pietruite și patrimoniul cultural bogat. În timpul Epocii de Aur olandeze, a fost un centru al comerțului cu flori, al berăriei și al artelor; celebrul pictor Frans Hals a trăit și a lucrat aici. În centrul orașului se înalță masiva Grote Kerk (Biserica Mare), cunoscută pentru impresionanta sa orgă Müller, la care a cântat odată chiar și Mozart. Istoria artei K7: De ce a fost pictura olandeză din secolul al XVII-lea (cum ar fi cea reprezentată de Frans Hals) revoluționară în arta europeană?",
    en: "Haarlem, the historical capital of the province of North Holland, is just a short train ride from Amsterdam but offers a quieter, equally picturesque atmosphere. The city flourished in the 17th century and was a center for breweries, tulip trading, and painting, where masters like Frans Hals worked. The medieval center around the Grote Markt, with its impressive Bavo Church, is among the most beautiful in the Netherlands. Haarlem is often called the shopping city of the Netherlands and is intersected by magnificent canals and historical Hofjes (hidden courtyards). Art K7: Frans Hals was a famous painter from Haarlem who mainly painted portraits. Why did wealthy citizens like to have their portraits painted in the 17th century?"
  },
    facts: {
    de: ["Haarlem ist die Hauptstadt der Provinz Nordholland.","Bekannt als 'Stadt der Blumen' in der Nähe der Tulpenfelder.","Verfügt über viele historische 'Hofjes' (versteckte Innenhöfe).","Die St.-Bavo-Kirche (Grote Kerk) dominiert den Marktplatz.","In der St.-Bavo-Kirche steht die berühmte Müller-Orgel, die einst Mozart spielte.","Das Teylers Museum ist das älteste Museum der Niederlande (1784).","Das Frans-Hals-Museum zeigt Kunstwerke aus dem Goldenen Zeitalter.","Die De Adriaan-Windmühle ist ein klassisches Wahrzeichen der Stadt."],
    hu: ["Haarlem Észak-Holland tartomány fővárosa.","A tulipánmezők közelében lévő 'A virágok városa' néven ismert.","Számos történelmi 'Hofje' (rejtett belső udvar) található itt.","A Szent Bavo-templom (Grote Kerk) uralja a piacteret.","A Szent Bavo-templomban áll a híres Müller-orgona, amelyen egykor Mozart is játszott.","A Teylers Múzeum Hollandia legrégebbi múzeuma (1784).","A Frans Hals Múzeum az aranykor műalkotásait mutatja be.","A De Adriaan szélmalom a város klasszikus jelképe."],
    ro: ["Haarlem este capitala provinciei Olanda de Nord.","Cunoscut sub numele de 'Orașul Florilor' în apropierea câmpurilor de lalele.","Are multe 'Hofjes' (curți interioare ascunse) istorice.","Biserica Sf. Bavo (Grote Kerk) domină piața orașului.","În Biserica Sf. Bavo se află celebra orgă Müller la care a cântat odată Mozart.","Muzeul Teylers este cel mai vechi muzeu din Olanda (1784).","Muzeul Frans Hals expune opere de artă din Epoca de Aur.","Moara de vânt De Adriaan este un reper clasic al orașului."],
    en: ["Haarlem is the capital of the province of North Holland.","Known as the 'City of Flowers' near the tulip fields.","Has many historic 'Hofjes' (hidden courtyards).","St. Bavo's Church (Grote Kerk) dominates the market square.","In St. Bavo's Church is the famous Müller organ, once played by Mozart.","The Teylers Museum is the oldest museum in the Netherlands (1784).","The Frans Hals Museum displays artworks from the Golden Age.","The De Adriaan windmill is a classic landmark of the city."]
  },
      factsAdvanced: {
    de: [
      "Haarlem war das historische Zentrum des holländischen Tulpenhandels im 17. Jahrhundert.",
      "In der St.-Bavo-Kirche steht eine riesige Müller-Orgel, auf der schon Mozart als Junge spielte.",
      "Das Teylers Museum in Haarlem, eröffnet 1784, ist das älteste Museum der Niederlande.",
      "Haarlem verfügt über mehr als 20 historische 'Hofjes', kleine Wohnanlagen um einen idyllischen Innenhof."
    ],
    hu: ["Haarlem a holland tulipántermesztő vidék ('Bollenstreek') északi kapuja.", "A Grote Kerk (Sint-Bavokerk) orgonája 5000 síppal rendelkezik, és a 18. században a világ legnagyobbja volt.", "A Teylers Múzeum, Hollandia legrégebbi múzeuma (1784), a művészetet és a tudományt ötvözi.", "A városban számos belső udvaros kis lakóház (hofje) maradt fenn a középkorból."],
    ro: [
      "Haarlem este poarta de nord a regiunii de cultivare a lalelelor din Olanda ('Bollenstreek').",
      "Orga din Grote Kerk (Sint-Bavokerk) are 5.000 de tuburi și era cea mai mare din lume în secolul al XVIII-lea.",
      "Muzeul Teylers, cel mai vechi muzeu din Olanda (1784), combină arta și știința.",
      "În oraș au supraviețuit din Evul Mediu numeroase case mici cu curți interioare (hofje)."
    ],
    en: [
      "Haarlem was the historical center of the Dutch tulip trade in the 17th century.",
      "The St. Bavo Church houses a massive Müller organ, which Mozart played as a young boy.",
      "The Teylers Museum in Haarlem, opened in 1784, is the oldest museum in the Netherlands.",
      "Haarlem has over 20 historic 'Hofjes', small residential complexes situated around an idyllic inner courtyard."
    ]
  }
  },
  {
    id: "NL-CT-LEI", type: "city", parent: "NL-ZH", coords: [4.49, 52.16],
    name: { de: "Leiden", hu: "Leiden", ro: "Leiden", en: "Leiden" },
    image: "/geo-images/netherlands/leiden.webp",
  description: {
    de: "Leiden ist eine prachtvolle Stadt in Südholland, berühmt für die älteste Universität der Niederlande und als Geburtsort des legendären Malers Rembrandt. Die Innenstadt ist durchzogen von idyllischen Grachten, die nach Amsterdam das zweitgrößte Kanalnetz des Landes bilden. Leiden bietet zudem hochkarätige Museen wie das Nationalmuseum für Altertümer und den wunderschönen Botanischen Garten (Hortus botanicus), wo einst die ersten Tulpen des Landes gepflanzt wurden.",
    hu: "Leiden egy csodálatos város Dél-Hollandiában, amely Hollandia legrégebbi egyeteméről és a legendás festő, Rembrandt szülőhelyeként ismert. A belvárost idilli csatornák szelik át, amelyek Amszterdam után az ország második legnagyobb csatornahálózatát alkotják. Leiden emellett kiemelkedő múzeumokat kínál, mint a Nemzeti Régiségmúzeum, és a gyönyörű Botanikus Kert (Hortus botanicus), ahol egykor az ország első tulipánjait elültették.",
    ro: "Leiden este un oraș magnific din Olanda de Sud, renumit pentru cea mai veche universitate din Țările de Jos și locul de naștere al pictorului legendar Rembrandt. Centrul orașului este străbătut de canale idilice care formează a doua cea mai mare rețea de canale din țară după Amsterdam. Leiden oferă, de asemenea, muzee de primă clasă, cum ar fi Muzeul Național de Antichități și frumoasa Grădină Botanică (Hortus botanicus), unde au fost plantate odată primele lalele din țară.",
    en: "Leiden is a magnificent city in South Holland, famous for the oldest university in the Netherlands and as the birthplace of the legendary painter Rembrandt. The city center is crisscrossed by idyllic canals that form the country's second-largest canal network after Amsterdam. Leiden also offers top-class museums such as the National Museum of Antiquities and the beautiful Botanical Garden (Hortus botanicus), where the country's first tulips were planted."
  },
      descriptionAdvanced: {
    de: "Leiden ist eine pittoreske historische Stadt, die eng mit ihrer Universität, der ältesten der Niederlande, verbunden ist. Gegründet 1575 von Wilhelm von Oranien als Belohnung für den Widerstand gegen die Spanier, zog die Universität brillante Köpfe aus ganz Europa an, darunter Descartes und Spinoza. Die Stadt ist durchzogen von malerischen Kanälen, an denen prächtige Patrizierhäuser und die ältesten botanischen Gärten des Landes (Hortus Botanicus) liegen. Leiden war zudem der Geburtsort des legendären Malers Rembrandt van Rijn, dessen frühe Jahre stark von der Atmosphäre dieser Gelehrtenstadt geprägt waren. Geschichte K8: Leiden hielt 1574 einer monatelangen spanischen Belagerung stand. Warum wurden Kanäle und Deiche geöffnet, um die Belagerer zu vertreiben?",
    hu: "Leiden Hollandia egyik legfontosabb történelmi egyetemvárosa. Itt alapította Orániai Vilmos 1575-ben az ország legrégebbi egyetemét, jutalmul a spanyol ostrom alatti hősies helytállásért. A város szűk csatornáival, több száz éves épületeivel és gazdag múzeumi kínálatával (mint a Rijksmuseum van Oudheden és a Naturalis) hódít. Leiden Rembrandt szülővárosa is, ahol a művész az első lépéseit tette a festészet felé. A város tudományos légköre olyan alakokat vonzott ide, mint Albert Einstein. Történelem K8: Miért volt stratégiai jelentősége a leideni ostromnak a nyolcvanéves háború során?",
    ro: "Leiden este unul dintre cele mai importante orașe universitare istorice din Olanda. Aici, Wilhelm de Orania a fondat cea mai veche universitate din țară în 1575, ca o recompensă pentru rezistența eroică din timpul asediului spaniol. Orașul captivează prin canalele sale înguste, clădirile vechi de secole și o ofertă bogată de muzee (cum ar fi Rijksmuseum van Oudheden și Naturalis). Leiden este, de asemenea, locul de naștere al lui Rembrandt, unde artistul a făcut primii pași în pictură. Atmosfera științifică a orașului a atras figuri precum Albert Einstein. Istorie K8: De ce a avut asediul orașului Leiden o importanță strategică în Războiul de Optzeci de Ani?",
    en: "Leiden is a picturesque historical city intimately connected to its university, the oldest in the Netherlands. Founded in 1575 by William of Orange as a reward for its resistance against the Spanish, the university attracted brilliant minds from across Europe, including Descartes and Spinoza. The city is traversed by scenic canals lined with grand patrician houses and the oldest botanical gardens in the country (Hortus Botanicus). Leiden was also the birthplace of the legendary painter Rembrandt van Rijn, whose early years were deeply influenced by the atmosphere of this scholarly city. History K8: Leiden withstood a month-long Spanish siege in 1574. Why were canals and dikes opened to drive away the besiegers?"
  },
    facts: {
    de: ["Geburtsort des weltberühmten Malers Rembrandt van Rijn.","Beherbergt die älteste Universität der Niederlande (gegründet 1575).","Im Hortus botanicus Leiden wurden die ersten Tulpen des Landes kultiviert.","Nach Amsterdam die meisten Brücken und Grachten des Landes.","Das Rijksmuseum van Oudheden beherbergt einen echten ägyptischen Tempel.","Leiden widerstand 1574 erfolgreich einer spanischen Belagerung.","Bietet Gedichte in verschiedenen Sprachen an unzähligen Hauswänden.","Naturalis ist ein hochmodernes Museum für Biodiversität."],
    hu: ["A világhírű festő, Rembrandt van Rijn szülőhelye.","Itt található Hollandia legrégebbi egyeteme (alapítva: 1575).","A leideni Hortus botanicusban termesztették az ország első tulipánjait.","Amszterdam után itt van a legtöbb híd és csatorna az országban.","A Rijksmuseum van Oudheden egy valódi egyiptomi templomnak ad otthont.","Leiden 1574-ben sikeresen ellenállt egy spanyol ostromnak.","Különböző nyelvű versek találhatók számtalan házfalon.","A Naturalis egy rendkívül modern biodiverzitási múzeum."],
    ro: ["Locul de naștere al celebrului pictor Rembrandt van Rijn.","Găzduiește cea mai veche universitate din Olanda (fondată în 1575).","Primele lalele din țară au fost cultivate în Hortus botanicus Leiden.","După Amsterdam, are cele mai multe poduri și canale din țară.","Rijksmuseum van Oudheden găzduiește un templu egiptean autentic.","Leiden a rezistat cu succes unui asediu spaniol în 1574.","Prezintă poezii în diferite limbi pe nenumărați pereți de case.","Naturalis este un muzeu de ultimă generație pentru biodiversitate."],
    en: ["Birthplace of the world-famous painter Rembrandt van Rijn.","Home to the oldest university in the Netherlands (founded in 1575).","The country's first tulips were cultivated in the Hortus botanicus Leiden.","After Amsterdam, has the most bridges and canals in the country.","The Rijksmuseum van Oudheden houses a real Egyptian temple.","Leiden successfully withstood a Spanish siege in 1574.","Features poems in various languages on countless house walls.","Naturalis is a state-of-the-art museum for biodiversity."]
  },
      factsAdvanced: {
    de: [
      "Die Universität Leiden ist die älteste Universität der Niederlande und wurde 1575 gegründet.",
      "Im Hortus Botanicus von Leiden wurden die ersten Tulpen in Westeuropa gepflanzt.",
      "Rembrandt van Rijn, einer der bedeutendsten Künstler des Barock, wurde in Leiden geboren.",
      "An den Außenwänden vieler Gebäude in Leiden sind über 100 weltberühmte Gedichte in verschiedenen Sprachen aufgemalt."
    ],
    hu: ["A Leideni Egyetem botanikuskertje (Hortus Botanicus) az egyik legrégebbi a világon, itt ültették az első tulipánokat Európában.", "Amszterdam után Leiden rendelkezik a legtöbb hidat számláló csatornarendszerrel Hollandiában.", "A város falaira több mint 100 híres verset festettek a világ különböző nyelvein.", "Leidenben jött létre az első holland csillagvizsgáló 1633-ban."],
    ro: [
      "Grădina botanică a Universității din Leiden (Hortus Botanicus) este una dintre cele mai vechi din lume; aici au fost plantate primele lalele din Europa.",
      "După Amsterdam, Leiden are sistemul de canale cu cele mai multe poduri din Olanda.",
      "Peste 100 de poezii celebre au fost pictate pe pereții orașului în diferite limbi ale lumii.",
      "Primul observator olandez a fost înființat la Leiden în 1633."
    ],
    en: [
      "Leiden University is the oldest university in the Netherlands, founded in 1575.",
      "The first tulips in Western Europe were planted in the Hortus Botanicus of Leiden.",
      "Rembrandt van Rijn, one of the most important artists of the Baroque period, was born in Leiden.",
      "The exterior walls of many buildings in Leiden feature over 100 world-famous poems painted in various languages."
    ]
  }
  },
  {
    id: "NL-CT-DEL", type: "city", parent: "NL-ZH", coords: [4.36, 52.01],
    name: { de: "Delft", hu: "Delft", ro: "Delft", en: "Delft" },
    image: "/geo-images/netherlands/delft.webp",
  description: {
    de: "Delft ist eine historische Stadt in Südholland, deren Name weltweit mit dem traditionellen blauen Porzellan, dem 'Delfter Blau', verbunden ist. Die Stadt bezaubert mit ihrem gut erhaltenen mittelalterlichen Zentrum, charmanten Grachten und engen Gassen. Zudem ist Delft eng mit der Geschichte des niederländischen Königshauses und dem berühmten Maler Johannes Vermeer verknüpft. Die Technische Universität Delft gehört zu den renommiertesten der Welt.",
    hu: "Delft egy történelmi város Dél-Hollandiában, amelynek neve világszerte a hagyományos kék porcelánnal, a 'Delfti kékkel' forrt össze. A város elbűvöl a jól megőrzött középkori központjával, bájos csatornáival és szűk utcáival. Ezenkívül Delft szorosan kötődik a holland királyi család történetéhez és a híres festőhöz, Johannes Vermeerhez. A Delfti Műszaki Egyetem a világ legelismertebbjei közé tartozik.",
    ro: "Delft este un oraș istoric din Olanda de Sud al cărui nume este asociat la nivel mondial cu porțelanul tradițional albastru, 'Albastru de Delft'. Orașul încântă cu centrul său medieval bine conservat, canale fermecătoare și străzi înguste. În plus, Delft este strâns legat de istoria familiei regale olandeze și a faimosului pictor Johannes Vermeer. Universitatea de Tehnologie din Delft este una dintre cele mai renumite din lume.",
    en: "Delft is a historic city in South Holland whose name is worldwide associated with the traditional blue porcelain, 'Delft Blue'. The city enchants with its well-preserved medieval center, charming canals, and narrow streets. Furthermore, Delft is closely linked to the history of the Dutch royal family and the famous painter Johannes Vermeer. Delft University of Technology is one of the most renowned in the world."
  },
      descriptionAdvanced: {
    de: "Delft ist weltweit bekannt für sein ikonisches blau-weißes Porzellan, das Delfter Blau (Delfts Blauw), das im 17. Jahrhundert als Imitation chinesischen Porzellans entstand. Die Stadt hat ein außergewöhnlich gut erhaltenes historisches Zentrum mit von Bäumen gesäumten Grachten, alten Kirchen und herrschaftlichen Kaufmannshäusern. Delft hat auch eine tiefe Verbindung zum niederländischen Königshaus; Wilhelm von Oranien, der 'Vater des Vaterlandes', residierte hier und wurde 1584 im Prinsenhof ermordet, woraufhin die Stadt zur traditionellen Begräbnisstätte der königlichen Familie wurde. Es ist auch die Geburtsstadt des Meisters des Lichts, Johannes Vermeer. Kunst K7: Johannes Vermeer malte 'Das Mädchen mit dem Perlenohrgehänge'. Warum wurden seine Bilder für ihre einzigartige Darstellung des Lichts berühmt?",
    hu: "Delft a világ minden táján ismert a kék-fehér porcelánjáról (Delfts Blauw), amely a 17. században jött létre a kínai porcelánok helyi alternatívájaként. A festői szépségű, fákkal szegélyezett csatornákkal és ősi hidakkal rendelkező város Johannes Vermeer festő szülőhelye és otthona volt. Delft emellett különleges történelmi jelentőséggel bír a királyi család számára: az Új Templom (Nieuwe Kerk) ad otthont az Orániai-Nassau-ház kriptájának, ahol Orániai Vilmos (a Haza Atyja) és a későbbi uralkodók is nyugszanak. Történelem K6: Miért próbálták a delfti fazekasok utánozni a 17. századi kínai porcelánokat?",
    ro: "Delft este cunoscut în întreaga lume pentru porțelanul său albastru cu alb (Delfts Blauw), care a apărut în secolul al XVII-lea ca o alternativă locală la porțelanul chinezesc. Orașul pitoresc, cu canale flancate de copaci și poduri antice, a fost locul de naștere și casa pictorului Johannes Vermeer. De asemenea, Delft are o semnificație istorică specială pentru familia regală: Biserica Nouă (Nieuwe Kerk) găzduiește cripta Casei de Orania-Nassau, unde se odihnesc Wilhelm de Orania (Părintele Patriei) și monarhii ulteriori. Istorie K6: De ce olarii din Delft au încercat să imite porțelanul chinezesc din secolul al XVII-lea?",
    en: "Delft is globally known for its iconic blue-and-white pottery, Delft Blue (Delfts Blauw), which originated in the 17th century as an imitation of Chinese porcelain. The city boasts an exceptionally well-preserved historical center with tree-lined canals, old churches, and stately merchant houses. Delft also has a deep connection to the Dutch royal family; William of Orange, the 'Father of the Fatherland', resided here and was assassinated in the Prinsenhof in 1584, after which the city became the traditional burial place for the royal family. It is also the birthplace of the master of light, Johannes Vermeer. Art K7: Johannes Vermeer painted 'Girl with a Pearl Earring'. Why did his paintings become famous for their unique depiction of light?"
  },
    facts: {
    de: ["Weltbekannt für das 'Delfter Blau' (Delfts Blauw) Porzellan.","Johannes Vermeer, der Maler des Mädchens mit dem Perlenohrgehänge, lebte hier.","Die Nieuwe Kerk (Neue Kirche) ist die Grabstätte der königlichen Familie.","Wilhelm von Oranien (Willem de Zwijger) wurde im Prinsenhof ermordet.","Beherbergt die größte Technische Universität der Niederlande.","Verfügt über ein charmantes, historisches Grachtensystem.","Der große Marktplatz zwischen Rathaus und Neuer Kirche ist beeindruckend.","Delft hat noch immer aktive, traditionelle Keramikmanufakturen."],
    hu: ["Világhírű a 'Delfti kék' (Delfts Blauw) porcelánjáról.","Itt élt Johannes Vermeer, a Leány gyöngyfülbevalóval című festmény alkotója.","Az Új Templom (Nieuwe Kerk) a királyi család temetkezési helye.","Orániai Vilmost (Willem de Zwijger) a Prinsenhofban gyilkolták meg.","Hollandia legnagyobb műszaki egyetemének ad otthont.","Bájos, történelmi csatornarendszerrel rendelkezik.","A városháza és az Új Templom közötti nagy piactér lenyűgöző.","Delftben még mindig működnek hagyományos kerámia manufaktúrák."],
    ro: ["Renumit în întreaga lume pentru porțelanul 'Albastru de Delft' (Delfts Blauw).","Johannes Vermeer, pictorul Fetei cu cercel de perlă, a locuit aici.","Biserica Nouă (Nieuwe Kerk) este locul de înmormântare al familiei regale.","William de Orania (Willem de Zwijger) a fost asasinat în Prinsenhof.","Găzduiește cea mai mare Universitate Tehnică din Olanda.","Are un sistem istoric fermecător de canale.","Piața mare dintre primărie și Biserica Nouă este impresionantă.","Delft are încă ateliere tradiționale de ceramică active."],
    en: ["World-famous for the 'Delft Blue' (Delfts Blauw) porcelain.","Johannes Vermeer, the painter of the Girl with a Pearl Earring, lived here.","The New Church (Nieuwe Kerk) is the burial place of the royal family.","William of Orange (Willem de Zwijger) was assassinated in the Prinsenhof.","Home to the largest Technical University in the Netherlands.","Features a charming, historic canal system.","The large market square between the town hall and the New Church is impressive.","Delft still has active, traditional ceramics manufactories."]
  },
      factsAdvanced: {
    de: [
      "In der Nieuwe Kerk (Neuen Kirche) in Delft befindet sich die königliche Krypta des Hauses Oranien-Nassau.",
      "Die Technische Universität Delft (TU Delft) ist die älteste und größte technische Universität des Landes.",
      "Von den ursprünglich zahlreichen Fayence-Fabriken existiert heute nur noch die 'Royal Delft', die traditionelles handbemaltes Porzellan herstellt.",
      "Johannes Vermeer verbrachte sein gesamtes Leben in Delft und hielt die Stadt in seinem berühmten Gemälde 'Ansicht von Delft' fest."
    ],
    hu: ["A Királyi Delft (Royal Delft) az egyetlen fennmaradt 17. századi porcelángyár a városban.", "A Delfti Műszaki Egyetem (TU Delft) Hollandia legnagyobb és legrégebbi technológiai egyeteme.", "Orániai Vilmost a delfti Prinsenhofban gyilkolták meg 1584-ben; a golyónyomok ma is láthatók.", "Vermeer híres, 'Delft látképe' című festménye a holland városképfestészet csúcspontja."],
    ro: [
      "Royal Delft este singura fabrică de porțelan din secolul al XVII-lea rămasă în oraș.",
      "Universitatea de Tehnologie din Delft (TU Delft) este cea mai mare și cea mai veche universitate de tehnologie din Olanda.",
      "Wilhelm de Orania a fost asasinat în Prinsenhof din Delft în 1584; urmele de gloanțe sunt vizibile și astăzi.",
      "Cea mai faimoasă pictură a lui Vermeer, 'Vedere din Delft', este punctul culminant al picturii peisajelor urbane olandeze."
    ],
    en: [
      "The royal crypt of the House of Orange-Nassau is located in the Nieuwe Kerk (New Church) in Delft.",
      "Delft University of Technology (TU Delft) is the oldest and largest technical university in the country.",
      "Of the originally numerous faience factories, only 'Royal Delft' still exists today, producing traditional hand-painted porcelain.",
      "Johannes Vermeer spent his entire life in Delft and immortalized the city in his famous painting 'View of Delft'."
    ]
  }
  },
  {
    id: "NL-CT-MAA", type: "city", parent: "NL-LI", coords: [5.69, 50.85],
    name: { de: "Maastricht", hu: "Maastricht", ro: "Maastricht", en: "Maastricht" },
    image: "/geo-images/netherlands/maastricht.webp",
  description: {
    de: "Maastricht, gelegen im südlichsten Zipfel der Niederlande, ist eine der ältesten Städte des Landes und besticht durch ein spürbar südeuropäisches Flair. Die Stadt wird durch die Maas in zwei Hälften geteilt und bietet historische Plätze, uralte Basiliken und exklusive Boutiquen. Internationale Bekanntheit erlangte sie durch den Vertrag von Maastricht 1992, der die Europäische Union begründete. Unterirdische Grotten runden das Angebot ab.",
    hu: "Maastricht, amely Hollandia legdélebbi csücskében található, az ország egyik legrégebbi városa, és érezhetően dél-európai hangulatával hódít. A várost a Maas folyó osztja két részre, és történelmi tereket, ősi bazilikákat és exkluzív butikokat kínál. Nemzetközi ismertségét az 1992-es maastrichti szerződés révén szerezte, amely megalapította az Európai Uniót. A földalatti barlangok teszik teljessé a kínálatot.",
    ro: "Maastricht, situat în extremitatea sudică a Olandei, este unul dintre cele mai vechi orașe din țară și captivează cu o atmosferă sud-europeană vizibilă. Orașul este împărțit în două de râul Maas și oferă piețe istorice, bazilici antice și buticuri exclusive. A câștigat recunoaștere internațională prin Tratatul de la Maastricht din 1992, care a fondat Uniunea Europeană. Peșterile subterane completează oferta.",
    en: "Maastricht, located in the southernmost tip of the Netherlands, is one of the oldest cities in the country and captivates with a noticeable southern European flair. The city is divided in half by the Meuse River and offers historic squares, ancient basilicas, and exclusive boutiques. It gained international fame through the Maastricht Treaty of 1992, which founded the European Union. Underground caves complete the offer."
  },
      descriptionAdvanced: {
    de: "Maastricht ist eine der ältesten und charmantesten Städte der Niederlande, gelegen an der Maas im tiefsten Süden der Provinz Limburg. Die Stadt hat einen unverwechselbaren internationalen und fast südländischen Flair, geprägt von ihrer Nähe zu Belgien und Deutschland. Maastricht blickt auf eine römische Vergangenheit zurück, wovon antike Ruinen zeugen, und besticht durch kopfsteingepflasterte Straßen, majestätische romanische Basiliken wie Sint Servaas und alte Befestigungsanlagen. Weltweite politische Bedeutung erlangte die Stadt 1992 durch die Unterzeichnung des Vertrages von Maastricht, der die Europäische Union begründete. Geschichte K8: Durch den Vertrag von Maastricht wurde die EU gegründet und eine gemeinsame Währung geplant. Welchen Vorteil hat eine gemeinsame Währung wie der Euro für den Handel?",
    hu: "Maastricht Hollandia legdélebbi fekvésű, középkori hangulatú városa, amely a Maas folyó partján épült fel. Mivel a rómaiak alapították katonai bázisként, egyike az ország két legrégebbi városának (Nijmegen mellett). Történelmi belvárosa szűk utcácskákat, régi templomokat és megmaradt városfalakat rejt. A modern történelemben a város 1992-ben szerzett globális ismertséget a Maastrichti Szerződés aláírásával, amely létrehozta az Európai Uniót és megnyitotta az utat az euró bevezetése előtt. Történelem K8: Hogyan befolyásolta a Maastrichti Szerződés az európai országok gazdasági együttműködését?",
    ro: "Maastricht este cel mai sudic oraș cu atmosferă medievală din Olanda, construit pe malul râului Maas. Având în vedere că a fost fondat de romani ca bază militară, este unul dintre cele mai vechi două orașe din țară (alături de Nijmegen). Centrul său istoric ascunde străzi înguste, biserici vechi și ziduri de oraș conservate. În istoria modernă, orașul a câștigat o recunoaștere globală în 1992 prin semnarea Tratatului de la Maastricht, care a creat Uniunea Europeană și a deschis calea pentru introducerea monedei euro. Istorie K8: Cum a influențat Tratatul de la Maastricht cooperarea economică a țărilor europene?",
    en: "Maastricht is one of the oldest and most charming cities in the Netherlands, located on the Maas river in the deep south of the province of Limburg. The city has a distinct international and almost southern European flair, influenced by its proximity to Belgium and Germany. Maastricht looks back on a Roman past, evidenced by ancient ruins, and captivates with cobblestone streets, majestic Romanesque basilicas like Sint Servaas, and old fortifications. The city gained global political significance in 1992 with the signing of the Maastricht Treaty, which founded the European Union. History K8: The Maastricht Treaty founded the EU and planned a common currency. What is the advantage of a common currency like the Euro for trade?"
  },
    facts: {
    de: ["Gehört zu den ältesten Siedlungen der Niederlande (Römischer Ursprung).","Der Vrijthof ist der berühmteste und belebteste Platz der Stadt.","Gründungsort der modernen EU durch den Vertrag von Maastricht (1992).","Die St.-Servatius-Brücke gilt als die älteste Brücke des Landes.","Das Tunnelsystem des Sint-Pietersberg (Merklhöhlen) ist ein Labyrinth.","Ausgeprägter 'burgundischer' Lebensstil mit exzellenter Gastronomie.","Die dominikanische Buchhandlung gilt als eine der schönsten der Welt.","Das TEFAF Art Festival ist eine weltweit führende Kunstmesse."],
    hu: ["Hollandia legrégebbi települései közé tartozik (római eredetű).","A Vrijthof a város leghíresebb és legforgalmasabb tere.","A modern EU alapító helyszíne az 1992-es maastrichti szerződés révén.","A Szent Szervácius híd az ország legrégebbi hídjának számít.","A Sint-Pietersberg (Márgabarlangok) alagútrendszere egy labirintus.","Kifejezetten 'burgundi' életmód kiváló gasztronómiával.","A domonkos könyvesboltot a világ egyik legszebbjeként tartják számon.","A TEFAF Art Festival a világ egyik vezető művészeti vására."],
    ro: ["Una dintre cele mai vechi așezări din Olanda (origine romană).","Vrijthof este cea mai faimoasă și aglomerată piață a orașului.","Locul de fondare al UE moderne prin Tratatul de la Maastricht (1992).","Podul Sf. Servatius este considerat cel mai vechi pod din țară.","Sistemul de tuneluri Sint-Pietersberg (peșteri de marnă) este un labirint.","Stil de viață pronunțat 'burgund' cu o gastronomie excelentă.","Librăria dominicană este considerată una dintre cele mai frumoase din lume.","TEFAF Art Festival este un târg de artă de top la nivel mondial."],
    en: ["One of the oldest settlements in the Netherlands (Roman origin).","The Vrijthof is the most famous and busiest square in the city.","Founding place of the modern EU through the Maastricht Treaty (1992).","St. Servatius Bridge is considered the oldest bridge in the country.","The Sint-Pietersberg tunnel system (marl caves) is a labyrinth.","Pronounced 'Burgundian' lifestyle with excellent gastronomy.","The Dominican bookstore is considered one of the most beautiful in the world.","The TEFAF Art Festival is a leading global art fair."]
  },
      factsAdvanced: {
    de: [
      "Die Sint-Servaas-Basilika am Vrijthof in Maastricht gilt als die älteste noch erhaltene Kirche der Niederlande.",
      "Unter der Stadt erstreckt sich ein riesiges Netzwerk von unterirdischen Kalksteinhöhlen (Sint-Pietersberg), in denen Kunstwerke versteckt wurden.",
      "Der Vertrag zur Gründung der Europäischen Union wurde 1992 im Regierungsgebäude der Provinz in Maastricht unterzeichnet.",
      "Maastricht war bereits um das Jahr 50 v. Chr. eine römische Siedlung mit einer Brücke über die Maas."
    ],
    hu: ["A Sint-Servaasbasiliek a legrégebbi fennmaradt templom Hollandiában.", "A várost egy kiterjedt mészkőbarlang-rendszer övezi (Sint-Pietersberg), amelyet az évszázadok során bányászat hozott létre.", "Maastrichtban évente megrendezik a TEFAF-ot, a világ egyik legfontosabb művészeti és régiségvásárát.", "A város egyedi kulináris kultúrával rendelkezik, amely erősen belga és francia hatásokat mutat."],
    ro: [
      "Basilica Sfântul Servatius este cea mai veche biserică supraviețuitoare din Olanda.",
      "Orașul este înconjurat de un sistem extins de peșteri de calcar (Sint-Pietersberg), creat prin minerit de-a lungul secolelor.",
      "Maastricht găzduiește anual TEFAF, unul dintre cele mai importante târguri de artă și antichități din lume.",
      "Orașul are o cultură culinară unică, cu puternice influențe belgiene și franceze."
    ],
    en: [
      "The Basilica of Saint Servatius on the Vrijthof in Maastricht is considered the oldest surviving church in the Netherlands.",
      "A vast network of underground limestone caves (Sint-Pietersberg) extends beneath the city, where artworks were once hidden.",
      "The treaty establishing the European Union was signed in 1992 in the provincial government building in Maastricht.",
      "Maastricht was a Roman settlement with a bridge over the Maas as early as 50 BC."
    ]
  }
  },
  {
    id: "NL-LM-AFH", type: "landmark", parent: "NL-NH", coords: [4.88, 52.37],
    name: { de: "Anne Frank Haus", hu: "Anne Frank Ház", ro: "Casa Anne Frank", en: "Anne Frank House" },
    image: "/geo-images/netherlands/anne-frank-house.webp",
  description: {
    de: "Das Anne Frank Haus in Amsterdam ist eines der bedeutendsten historischen Wahrzeichen der Niederlande. Es ist das Gebäude, in dem sich das jüdische Mädchen Anne Frank und ihre Familie während des Zweiten Weltkriegs über zwei Jahre lang vor der nationalsozialistischen Verfolgung versteckten. In diesem sogenannten 'Hinterhaus' schrieb Anne ihr weltberühmtes Tagebuch. Heute ist das Haus ein Museum, das tiefe und bewegende Einblicke in ihr Leben und den Holocaust gibt.",
    hu: "Az amszterdami Anne Frank Ház Hollandia egyik legjelentősebb történelmi nevezetessége. Ez az az épület, ahol a zsidó származású kislány, Anne Frank és családja a második világháború alatt több mint két évig rejtőzött a náci üldöztetés elől. Ebben az úgynevezett 'hátsó traktusban' írta Anne a világhírű naplóját. Ma a ház egy múzeum, amely mély és megható bepillantást nyújt életébe és a holokauszt történetébe.",
    ro: "Casa Anne Frank din Amsterdam este unul dintre cele mai importante repere istorice din Țările de Jos. Este clădirea în care tânăra evreică Anne Frank și familia ei s-au ascuns de persecuția nazistă timp de peste doi ani în timpul celui de-al Doilea Război Mondial. În această așa-numită 'Anexă Secretă' Anne a scris jurnalul ei de renume mondial. Astăzi casa este un muzeu care oferă informații profunde și emoționante despre viața ei și despre Holocaust.",
    en: "The Anne Frank House in Amsterdam is one of the most important historic landmarks in the Netherlands. It is the building where the Jewish girl Anne Frank and her family hid from Nazi persecution for over two years during World War II. In this so-called 'Secret Annex', Anne wrote her world-famous diary. Today the house is a museum that provides deep and moving insights into her life and the Holocaust."
  },
      descriptionAdvanced: {
    de: "Das Anne-Frank-Haus an der Prinsengracht in Amsterdam ist eines der bewegendsten und wichtigsten historischen Museen Europas. Es war das Versteck, in dem das jüdische Mädchen Anne Frank und ihre Familie sich über zwei Jahre lang vor der Verfolgung durch die Nationalsozialisten verborgen hielten. Im sogenannten 'Hinterhaus', das durch ein schwenkbares Bücherregal getarnt war, schrieb Anne ihr weltberühmtes Tagebuch. Das Museum bewahrt die bedrückende Atmosphäre der dunklen Räume und erinnert eindringlich an die Schrecken des Holocaust und die Wichtigkeit von Toleranz. Geschichte K8: Anne Frank versteckte sich vor der Gestapo. Warum verfolgte das nationalsozialistische Regime in Deutschland und den besetzten Gebieten jüdische Bürger?",
    hu: "Az Anne Frank Ház Amszterdam központjában található múzeum, amely az emberi kitartás és a történelem egyik legsötétebb korszakának emlékműve. Az épület hátsó traktusában (a Hátsó Traktus) rejtőzött el Anne Frank és családja, valamint négy másik zsidó ember több mint két évig a náci megszállás alatt a második világháborúban. Itt írta meg Anne világhírűvé vált naplóját, amely a remény, a félelem és a fiatalság megrendítő krónikája. A múzeum az eredeti rejtekhelyet és az üldöztetés dokumentumait mutatja be. Történelem K8: Miért döntöttek úgy a családok a második világháború alatt, hogy titkos rejtekhelyeken húzzák meg magukat?",
    ro: "Casa Anne Frank, un muzeu din centrul Amsterdamului, este un monument al perseverenței umane și al uneia dintre cele mai întunecate epoci ale istoriei. În secțiunea din spate a clădirii (Anexa Secretă), Anne Frank și familia ei, împreună cu alte patru persoane evreiești, s-au ascuns timp de mai bine de doi ani în timpul ocupației naziste în al Doilea Război Mondial. Aici a scris Anne jurnalul ei devenit celebru în întreaga lume, o cronică emoționantă a speranței, fricii și tinereții. Muzeul expune ascunzătoarea originală și documente despre persecuție. Istorie K8: De ce familiile au decis să se refugieze în ascunzători secrete în timpul celui de-al Doilea Război Mondial?",
    en: "The Anne Frank House on the Prinsengracht in Amsterdam is one of Europe's most moving and important historical museums. It was the hiding place where the Jewish girl Anne Frank and her family concealed themselves from Nazi persecution for over two years. In the so-called 'Secret Annex', disguised by a movable bookcase, Anne wrote her world-famous diary. The museum preserves the oppressive atmosphere of the dark rooms and serves as a poignant reminder of the horrors of the Holocaust and the importance of tolerance. History K8: Anne Frank hid from the Gestapo. Why did the Nazi regime in Germany and the occupied territories persecute Jewish citizens?"
  },
    facts: {
    de: ["Das Versteck befand sich im 'Achterhuis' (Hinterhaus) an der Prinsengracht.","Der Zugang war durch ein drehbares Bücherregal getarnt.","Das Original-Tagebuch von Anne Frank ist hier ausgestellt.","Eröffnete 1960 als Museum für die Öffentlichkeit.","Empfängt jährlich über eine Million Besucher aus aller Welt.","Soll die Erinnerung an die Opfer des Holocaust wachhalten.","Die Zimmer sind heute unmöbliert, wie von Otto Frank gewünscht.","Ein emotionaler Rundgang zeigt die Enge und Angst der Versteckten."],
    hu: ["A búvóhely a Prinsengrachton található 'Achterhuis' (Hátsó traktus) volt.","A bejáratot egy forgatható könyvespolc álcázta.","Anne Frank eredeti naplója itt van kiállítva.","1960-ban nyílt meg múzeumként a nagyközönség előtt.","Évente több mint egymillió látogatót fogad a világ minden tájáról.","Célja, hogy ébren tartsa a holokauszt áldozatainak emlékét.","A szobák ma bútorozatlanok, ahogy Otto Frank kívánta.","Érzelmes séta mutatja be a rejtőzködők szűkös helyzetét és félelmeit."],
    ro: ["Ascunzătoarea era în 'Achterhuis' (Anexa Secretă) pe Prinsengracht.","Accesul era camuflat printr-o bibliotecă rotativă.","Jurnalul original al Annei Frank este expus aici.","S-a deschis publicului ca muzeu în 1960.","Primește anual peste un milion de vizitatori din întreaga lume.","Destinat să păstreze vie amintirea victimelor Holocaustului.","Camerele sunt astăzi nemobilate, așa cum a dorit Otto Frank.","Un tur emoționant arată izolarea și frica celor ascunși."],
    en: ["The hiding place was in the 'Achterhuis' (Secret Annex) on the Prinsengracht.","The entrance was camouflaged by a revolving bookcase.","The original diary of Anne Frank is exhibited here.","Opened to the public as a museum in 1960.","Receives over a million visitors from all over the world annually.","Intended to keep the memory of the victims of the Holocaust alive.","The rooms are unfurnished today, as Otto Frank wished.","An emotional tour shows the confinement and fear of those in hiding."]
  },
      factsAdvanced: {
    de: [
      "Das Anne-Frank-Haus wurde 1960 als Museum für die Öffentlichkeit zugänglich gemacht, um einen Abriss zu verhindern.",
      "Anne Franks Tagebuch, das sie im Hinterhaus schrieb, wurde in über 70 Sprachen übersetzt.",
      "Die Familie Frank versteckte sich vom 6. Juli 1942 bis zu ihrer Entdeckung am 4. August 1944 in den Räumlichkeiten.",
      "Otto Frank, Annes Vater, war der einzige der acht Untergetauchten, der die Konzentrationslager überlebte."
    ],
    hu: ["A rejtekhely bejáratát egy forgatható könyvespolc rejtette el az irodában.", "A naplót Anne Frank apja, Otto Frank – a család egyetlen túlélője – adta ki 1947-ben.", "A múzeumot 1960-ban nyitották meg a nagyközönség előtt a lebontástól megmentett épületben.", "A naplót több mint 70 nyelvre fordították le, és a világirodalom egyik legolvasottabb műve."],
    ro: [
      "Intrarea în ascunzătoare era camuflată de o bibliotecă rotativă din birou.",
      "Jurnalul a fost publicat în 1947 de tatăl Annei Frank, Otto Frank, singurul supraviețuitor al familiei.",
      "Muzeul a fost deschis publicului în 1960 în clădirea salvată de la demolare.",
      "Jurnalul a fost tradus în peste 70 de limbi și este una dintre cele mai citite opere din literatura universală."
    ],
    en: [
      "The Anne Frank House opened to the public as a museum in 1960 to prevent its demolition.",
      "Anne Frank's diary, written in the Secret Annex, has been translated into over 70 languages.",
      "The Frank family hid in the premises from July 6, 1942, until their discovery on August 4, 1944.",
      "Otto Frank, Anne's father, was the only one of the eight people in hiding to survive the concentration camps."
    ]
  }
  },
  {
    id: "NL-LM-RJM", type: "landmark", parent: "NL-NH", coords: [4.88, 52.36],
    name: { de: "Rijksmuseum", hu: "Rijksmuseum", ro: "Rijksmuseum", en: "Rijksmuseum" },
    image: "/geo-images/netherlands/rijksmuseum.webp",
  description: {
    de: "Das Rijksmuseum in Amsterdam ist das niederländische Nationalmuseum und eines der bedeutendsten Kunstmuseen der Welt. Es beherbergt eine gigantische Sammlung von über einer Million Objekten, die die Geschichte der Niederlande vom Mittelalter bis ins 20. Jahrhundert abdecken. Das absolute Herzstück des Museums ist die Ehrengalerie, in der weltberühmte Meisterwerke des niederländischen Goldenen Zeitalters präsentiert werden, allen voran Rembrandts monumentales Gemälde 'Die Nachtwache'.",
    hu: "Az amszterdami Rijksmuseum a holland nemzeti múzeum és a világ egyik legjelentősebb művészeti múzeuma. Több mint egymillió tárgyból álló gigantikus gyűjteménynek ad otthont, amely Hollandia történelmét mutatja be a középkortól a 20. századig. A múzeum abszolút szíve a Díszgaléria (Eregalerij), ahol a holland aranykor világhírű remekműveit mutatják be, mindenekelőtt Rembrandt monumentális 'Éjjeli őrjárat' című festményét.",
    ro: "Rijksmuseum din Amsterdam este muzeul național olandez și unul dintre cele mai importante muzee de artă din lume. Găzduiește o colecție gigantică de peste un milion de obiecte care acoperă istoria Țărilor de Jos din Evul Mediu până în secolul al XX-lea. Piesa centrală absolută a muzeului este Galeria de Onoare, unde sunt prezentate capodopere de renume mondial ale Epocii de Aur olandeze, mai presus de toate pictura monumentală a lui Rembrandt, 'Rondul de noapte'.",
    en: "The Rijksmuseum in Amsterdam is the Dutch national museum and one of the most important art museums in the world. It houses a gigantic collection of over one million objects covering the history of the Netherlands from the Middle Ages to the 20th century. The absolute centerpiece of the museum is the Gallery of Honour, where world-famous masterpieces of the Dutch Golden Age are presented, most notably Rembrandt's monumental painting 'The Night Watch'."
  },
      descriptionAdvanced: {
    de: "Das Rijksmuseum in Amsterdam ist das niederländische Nationalmuseum und beherbergt eine der bedeutendsten Kunstsammlungen der Welt. Es wurde vom Architekten Pierre Cuypers entworfen und 1885 in seinem markanten neogotischen Stil eröffnet. Die Sammlung widmet sich der niederländischen Geschichte und Kunst vom Mittelalter bis zum 20. Jahrhundert, mit einem besonderen Schwerpunkt auf den Meisterwerken des Goldenen Zeitalters im 17. Jahrhundert. Das unbestrittene Highlight der Ausstellung ist Rembrandts monumentales Gemälde 'Die Nachtwache', das jährlich Millionen von Kunstliebhabern anzieht. Kunst K7: 'Die Nachtwache' von Rembrandt ist berühmt für ihr Spiel mit Licht und Schatten. Wie nennt man diese spezielle Maltechnik der Hell-Dunkel-Malerei?",
    hu: "A Rijksmuseum Hollandia nemzeti múzeuma Amszterdamban, amely a holland művészet és történelem lenyűgöző gyűjteményének ad otthont a középkortól napjainkig. A Pierre Cuypers által tervezett grandiózus, neogótikus és reneszánsz elemeket ötvöző épület 1885-ben nyitotta meg kapuit. A múzeum leghíresebb részlege a 17. századi holland aranykor festészetét mutatja be, beleértve Rembrandt, Johannes Vermeer és Frans Hals remekműveit. A legikonikusabb kiállított mű Rembrandt hatalmas méretű, 'Éjjeli őrjárat' című festménye. Művészettörténet K7: Miért nevezik 'Éjjeli őrjáratnak' Rembrandt festményét, ha valójában egy nappali jelenetet ábrázol?",
    ro: "Rijksmuseum este muzeul național al Olandei din Amsterdam, găzduind o colecție impresionantă de artă și istorie olandeză din Evul Mediu până în prezent. Proiectată de Pierre Cuypers, clădirea grandioasă, care combină elemente neogotice și renascentiste, și-a deschis porțile în 1885. Cea mai faimoasă secțiune a muzeului expune pictura din Epoca de Aur olandeză din secolul al XVII-lea, inclusiv capodopere de Rembrandt, Johannes Vermeer și Frans Hals. Cea mai iconică lucrare expusă este pictura masivă a lui Rembrandt, 'Rondul de noapte'. Istoria artei K7: De ce pictura lui Rembrandt este numită 'Rondul de noapte' dacă, de fapt, descrie o scenă de zi?",
    en: "The Rijksmuseum in Amsterdam is the Dutch national museum and houses one of the most significant art collections in the world. It was designed by architect Pierre Cuypers and opened in 1885 in its striking neo-Gothic style. The collection is dedicated to Dutch history and art from the Middle Ages to the 20th century, with a special emphasis on the masterpieces of the Golden Age in the 17th century. The undisputed highlight of the exhibition is Rembrandt's monumental painting 'The Night Watch', which attracts millions of art lovers annually. Art K7: 'The Night Watch' by Rembrandt is famous for its play with light and shadow. What is this special painting technique of chiaroscuro called?"
  },
    facts: {
    de: ["Gegründet im Jahr 1800, befindet sich seit 1885 am heutigen Standort.","Das Gebäude wurde von dem Architekten Pierre Cuypers entworfen.","Beherbergt 'Die Nachtwache', Rembrandts berühmtestes Gemälde.","Zeigt Meisterwerke von Vermeer, Frans Hals und Jan Steen.","Besitzt eine spektakuläre historische Forschungsbibliothek (Cuypers-Bibliothek).","Nach einer 10-jährigen Renovierung 2013 neu eröffnet.","Der Museumsbau wird von einem Fahrradweg durchquert.","Es gibt umfangreiche Sammlungen zu asiatischer Kunst und Delft Blauw."],
    hu: ["1800-ban alapították, 1885 óta található a jelenlegi helyén.","Az épületet Pierre Cuypers építész tervezte.","Itt található az 'Éjjeli őrjárat', Rembrandt leghíresabb festménye.","Vermeer, Frans Hals és Jan Steen remekműveit is bemutatja.","Látványos történelmi kutatókönyvtárral (Cuypers-könyvtár) rendelkezik.","10 éves felújítás után 2013-ban nyílt meg újra.","A múzeum épületén egy kerékpárút halad keresztül.","Kiterjedt ázsiai művészeti és delfti kék gyűjteményekkel rendelkezik."],
    ro: ["Fondată în 1800, se află în locația actuală din 1885.","Clădirea a fost proiectată de arhitectul Pierre Cuypers.","Găzduiește 'Rondul de noapte', cea mai faimoasă pictură a lui Rembrandt.","Expune capodopere de Vermeer, Frans Hals și Jan Steen.","Are o bibliotecă de cercetare istorică spectaculoasă (Biblioteca Cuypers).","Redeschisă în 2013, după o renovare de 10 ani.","O pistă de biciclete trece chiar prin clădirea muzeului.","Există colecții extinse de artă asiatică și Albastru de Delft."],
    en: ["Founded in 1800, it has been at its current location since 1885.","The building was designed by architect Pierre Cuypers.","Houses 'The Night Watch', Rembrandt's most famous painting.","Exhibits masterpieces by Vermeer, Frans Hals, and Jan Steen.","Has a spectacular historical research library (Cuypers Library).","Reopened in 2013 after a 10-year renovation.","A bicycle path passes right through the museum building.","There are extensive collections of Asian art and Delft Blue."]
  },
      factsAdvanced: {
    de: [
      "Das Rijksmuseum besitzt mehr als 1 Million Objekte, von denen etwa 8.000 in den Sälen ausgestellt sind.",
      "Rembrandts 'Nachtwache' ist so groß (363 × 437 cm), dass sie bei einem Umbau durch einen speziellen Schlitz im Boden bewegt werden musste.",
      "Die Cuypers-Bibliothek im Museum ist die älteste und größte kunsthistorische Bibliothek der Niederlande.",
      "Neben Rembrandt sind auch weltberühmte Werke von Johannes Vermeer, Frans Hals und Jan Steen ausgestellt."
    ],
    hu: ["A múzeum több mint egymillió tárgyat őriz, ebből mintegy 8000 van folyamatosan kiállítva.", "A Cuypers-könyvtár a múzeum épületén belül Hollandia legnagyobb és legrégebbi nyilvános művészettörténeti könyvtára.", "Az épületen a kerékpárosok egy aluljárón keresztül keresztülhajthatnak, ami a világon egyedülálló.", "A 2013-ban befejezett tízéves felújítás során az épület visszanyerte eredeti, 19. századi pompáját."],
    ro: [
      "Muzeul păstrează peste un milion de obiecte, dintre care aproximativ 8.000 sunt expuse permanent.",
      "Biblioteca Cuypers din incinta muzeului este cea mai mare și cea mai veche bibliotecă publică de istoria artei din Olanda.",
      "O pistă de biciclete trece printr-un pasaj chiar prin mijlocul clădirii, o caracteristică unică în lume.",
      "În timpul unei renovări de zece ani finalizate în 2013, clădirea și-a recăpătat gloria originală din secolul al XIX-lea."
    ],
    en: [
      "The Rijksmuseum holds over 1 million objects, of which about 8,000 are displayed in its galleries.",
      "Rembrandt's 'Night Watch' is so large (363 × 437 cm) that it had to be moved through a special slit in the floor during renovations.",
      "The Cuypers Library in the museum is the oldest and largest art history library in the Netherlands.",
      "Alongside Rembrandt, world-famous works by Johannes Vermeer, Frans Hals, and Jan Steen are also exhibited."
    ]
  }
  },
  {
    id: "NL-LM-VGM", type: "landmark", parent: "NL-NH", coords: [4.88, 52.35],
    name: { de: "Van Gogh Museum", hu: "Van Gogh Múzeum", ro: "Muzeul Van Gogh", en: "Van Gogh Museum" },
    image: "/geo-images/netherlands/van-gogh-museum.webp",
  description: {
    de: "Das Van Gogh Museum am Amsterdamer Museumplein widmet sich ganz dem Leben und Schaffen des niederländischen Post-Impressionisten Vincent van Gogh. Es beherbergt die weltweit größte Sammlung seiner Werke, darunter berühmte Gemälde wie 'Die Sonnenblumen', 'Mandelblüte' und 'Das Schlafzimmer'. Das Museum führt chronologisch durch seine verschiedenen Lebens- und Schaffensphasen und zeigt zudem Kunstwerke seiner Zeitgenossen und Freunde wie Paul Gauguin.",
    hu: "Az amszterdami Museumplein-en található Van Gogh Múzeum teljes egészében Vincent van Gogh holland posztimpresszionista festő életének és munkásságának van szentelve. Itt található műveinek a világon a legnagyobb gyűjteménye, köztük olyan híres festményekkel, mint a 'Napraforgók', a 'Mandulavirágzás' és 'A hálószoba'. A múzeum időrendben vezeti végig a látogatót élete és alkotásai különböző szakaszain, valamint bemutatja kortársai és barátai (pl. Paul Gauguin) műveit is.",
    ro: "Muzeul Van Gogh de pe Museumplein din Amsterdam este dedicat în întregime vieții și operei pictorului post-impresionist olandez Vincent van Gogh. Găzduiește cea mai mare colecție din lume a operelor sale, inclusiv picturi celebre precum 'Floarea-soarelui', 'Flori de migdal' și 'Dormitorul'. Muzeul te ghidează cronologic prin diferitele etape ale vieții și muncii sale și expune, de asemenea, lucrări ale contemporanilor și prietenilor săi, cum ar fi Paul Gauguin.",
    en: "The Van Gogh Museum on the Museumplein in Amsterdam is dedicated entirely to the life and work of the Dutch post-impressionist painter Vincent van Gogh. It houses the world's largest collection of his works, including famous paintings such as 'Sunflowers', 'Almond Blossom', and 'The Bedroom'. The museum guides visitors chronologically through the different stages of his life and work and also displays artworks by his contemporaries and friends like Paul Gauguin."
  },
      descriptionAdvanced: {
    de: "Das Van Gogh Museum am Museumplein in Amsterdam ist ganz dem Leben und Werk von Vincent van Gogh, einem der einflussreichsten Künstler der Kunstgeschichte, gewidmet. Es beherbergt die weltweit größte Sammlung seiner Gemälde, Zeichnungen und Briefe und bietet Besuchern einen tiefen Einblick in seine künstlerische Entwicklung und sein oft tragisches Leben. Die chronologisch aufgebaute Ausstellung verfolgt seinen Weg von den düsteren frühen Werken in den Niederlanden bis zu den leuchtenden, expressiven Meisterwerken aus seiner Zeit in Frankreich. Das moderne Gebäude wurde von dem berühmten Architekten Gerrit Rietveld entworfen. Kunst K6: Vincent van Gogh nutzte in seinen späten Gemälden oft kräftige Komplementärkontraste. Welche Farbe ist die Komplementärfarbe von Blau?",
    hu: "A Van Gogh Múzeum Amszterdamban a világ legnagyobb Vincent van Gogh alkotásaiból álló gyűjteményét őrzi. A múzeumot a festő öccsének, Theónak a fia, Vincent Willem van Gogh alapítványa hozta létre, hogy a művész hagyatéka egyben maradjon és a nagyközönség számára is elérhető legyen. A kiállítás időrendben mutatja be a zseniális, tragikus sorsú posztimpresszionista festő fejlődését, a korai sötét holland korszakától kezdve a ragyogó, élénk színű dél-franciaországi remekművekig. Művészettörténet K8: Hogyan tükrözik a színek Vincent van Gogh lelkiállapotát és művészi fejlődését a különböző korszakaiban?",
    ro: "Muzeul Van Gogh din Amsterdam adăpostește cea mai mare colecție de lucrări ale lui Vincent van Gogh din lume. Muzeul a fost creat de fundația lui Vincent Willem van Gogh, fiul fratelui pictorului, Theo, pentru a menține moștenirea artistului unită și accesibilă publicului larg. Expoziția urmărește cronologic dezvoltarea genialului, dar tragicului pictor post-impresionist, de la perioada sa întunecată timpurie din Olanda până la capodoperele luminoase și viu colorate din sudul Franței. Istoria artei K8: Cum reflectă culorile starea de spirit a lui Vincent van Gogh și dezvoltarea sa artistică în diferitele sale perioade?",
    en: "The Van Gogh Museum on Museumplein in Amsterdam is entirely dedicated to the life and work of Vincent van Gogh, one of the most influential artists in art history. It houses the world's largest collection of his paintings, drawings, and letters, offering visitors a deep insight into his artistic development and his often tragic life. The chronologically structured exhibition traces his journey from the gloomy early works in the Netherlands to the bright, expressive masterpieces from his time in France. The modern building was designed by the famous architect Gerrit Rietveld. Art K6: Vincent van Gogh often used strong complementary contrasts in his late paintings. Which color is the complementary color of blue?"
  },
    facts: {
    de: ["Besitzt über 200 Gemälde, 500 Zeichnungen und unzählige Briefe Van Goghs.","Eröffnete 1973 und ist eines der meistbesuchten Museen des Landes.","Das Hauptgebäude wurde vom Architekten Gerrit Rietveld entworfen.","Zeigt Meisterwerke wie die 'Sonnenblumen' und 'Kartoffelesser'.","Die Ausstellung erklärt Van Goghs Inspirationen und seinen tragischen Weg.","Befindet sich direkt neben dem Rijksmuseum und dem Stedelijk Museum.","Briefe zwischen Vincent und seinem Bruder Theo sind ein zentraler Teil.","2015 wurde ein spektakulärer gläserner Eingangsbereich eröffnet."],
    hu: ["Van Gogh több mint 200 festményével, 500 rajzával és számtalan levelével rendelkezik.","1973-ban nyílt meg, és az ország egyik leglátogatottabb múzeuma.","A főépületet Gerrit Rietveld építész tervezte.","Olyan remekműveket mutat be, mint a 'Napraforgók' és a 'Krumplievők'.","A kiállítás elmagyarázza Van Gogh inspirációit és tragikus útját.","Közvetlenül a Rijksmuseum és a Stedelijk Museum mellett található.","Vincent és testvére, Theo levelezése központi része a kiállításnak.","2015-ben egy látványos, csupa üveg bejárati részt nyitottak meg."],
    ro: ["Are peste 200 de picturi, 500 de desene și nenumărate scrisori ale lui Van Gogh.","Deschis în 1973 și este unul dintre cele mai vizitate muzee din țară.","Clădirea principală a fost proiectată de arhitectul Gerrit Rietveld.","Afișează capodopere precum 'Floarea-soarelui' și 'Mâncătorii de cartofi'.","Expoziția explică inspirațiile lui Van Gogh și calea sa tragică.","Situat chiar lângă Rijksmuseum și Stedelijk Museum.","Scrisorile dintre Vincent și fratele său Theo sunt o parte centrală.","O zonă de intrare din sticlă spectaculoasă a fost deschisă în 2015."],
    en: ["Owns over 200 paintings, 500 drawings, and countless letters from Van Gogh.","Opened in 1973 and is one of the most visited museums in the country.","The main building was designed by architect Gerrit Rietveld.","Displays masterpieces such as the 'Sunflowers' and 'Potato Eaters'.","The exhibition explains Van Gogh's inspirations and his tragic path.","Located right next to the Rijksmuseum and the Stedelijk Museum.","Letters between Vincent and his brother Theo are a central part.","A spectacular glass entrance area was opened in 2015."]
  },
      factsAdvanced: {
    de: [
      "Das Museum besitzt mehr als 200 Gemälde, 500 Zeichnungen und über 700 Briefe von Vincent van Gogh.",
      "Eines der berühmtesten Ausstellungsstücke ist das leuchtend gelbe Gemälde 'Sonnenblumen'.",
      "Das Museum beleuchtet auch den engen Briefwechsel zwischen Vincent und seinem Bruder Theo, der ihn finanziell unterstützte.",
      "Vincent van Gogh verkaufte zu seinen Lebzeiten vermutlich nur ein einziges Gemälde."
    ],
    hu: ["A gyűjtemény mintegy 200 festményt, 500 rajzot és több mint 700 levelet tartalmaz.", "Itt található a híres 'Napraforgók', 'A krumplievők' és a 'Mandulavirágzás' című festmény.", "A múzeum épülete Gerrit Rietveld építész tervei alapján készült, 1973-ban nyílt meg.", "Évente több mint kétmillió látogatót fogad, ezzel az ország egyik leglátogatottabb múzeuma."],
    ro: [
      "Colecția conține aproximativ 200 de picturi, 500 de desene și peste 700 de scrisori.",
      "Aici sunt expuse celebrele picturi 'Floarea-soarelui', 'Mâncătorii de cartofi' și 'Flori de migdal'.",
      "Clădirea muzeului, proiectată de arhitectul Gerrit Rietveld, a fost deschisă în 1973.",
      "Primește peste două milioane de vizitatori anual, fiind unul dintre cele mai vizitate muzee din țară."
    ],
    en: [
      "The museum holds more than 200 paintings, 500 drawings, and over 700 letters by Vincent van Gogh.",
      "One of the most famous exhibits is the bright yellow painting 'Sunflowers'.",
      "The museum also highlights the close correspondence between Vincent and his brother Theo, who supported him financially.",
      "Vincent van Gogh probably sold only one painting during his lifetime."
    ]
  }
  },
  {
    id: "NL-LM-VOL", type: "landmark", parent: "NL-NH", coords: [5.07, 52.49],
    name: { de: "Volendam", hu: "Volendam", ro: "Volendam", en: "Volendam" },
    image: "/geo-images/netherlands/volendam.webp",
  description: {
    de: "Volendam ist ein weltbekanntes, malerisches Fischerdorf am Markermeer in der Provinz Nordholland. Es ist berühmt für seine gut erhaltenen traditionellen Holzhäuser, verwinkelten Gassen und die historische Hafenkulisse. Volendam gilt als Symbol für die klassische holländische Kultur: Bewohner trugen hier noch lange die typische traditionelle Tracht. Besucher können hier frischen Fisch probieren, sich in traditioneller Kleidung fotografieren lassen und die maritime Atmosphäre genießen.",
    hu: "Volendam egy világhírű, festői halászfalu a Markermeer partján, Észak-Holland tartományban. Jól megőrzött hagyományos faházairól, kanyargós utcáiról és történelmi kikötői hátteréről ismert. Volendam a klasszikus holland kultúra szimbóluma: a helyiek még sokáig viselték az itteni jellegzetes népviseletet. A látogatók friss halat kóstolhatnak, hagyományos ruházatban fényképezkedhetnek, és élvezhetik a tengeri hangulatot.",
    ro: "Volendam este un sat de pescari pitoresc, renumit la nivel mondial, situat pe Markermeer în provincia Olanda de Nord. Este faimos pentru casele sale tradiționale din lemn bine conservate, străzile șerpuite și decorul portului istoric. Volendam este considerat un simbol al culturii clasice olandeze: locuitorii au purtat aici costumul tradițional tipic mult timp. Vizitatorii pot gusta pește proaspăt, pot fi fotografiați în haine tradiționale și se pot bucura de atmosfera maritimă.",
    en: "Volendam is a world-famous, picturesque fishing village on the Markermeer in the province of North Holland. It is famous for its well-preserved traditional wooden houses, winding streets, and historic harbor backdrop. Volendam is considered a symbol of classic Dutch culture: residents here wore the typical traditional costume for a long time. Visitors can taste fresh fish, have their picture taken in traditional clothing, and enjoy the maritime atmosphere."
  },
      descriptionAdvanced: {
    de: "Volendam ist ein malerisches Fischerdorf am Markermeer in der Provinz Nordholland, das international als Symbol der traditionellen niederländischen Kultur gilt. Das Dorf ist berühmt für seine alten Holzhäuser, den gemütlichen Hafen voller historischer Segelschiffe und seine Bewohner, von denen einige an Festtagen noch die traditionelle Tracht tragen. Früher ein wichtiger Hafen für den Fischfang an der Zuiderzee, zog Volendam im 19. Jahrhundert viele Maler an, die das authentische holländische Leben festhalten wollten. Heute ist es eines der beliebtesten Touristenziele des Landes und bekannt für seinen frisch geräucherten Aal. Geografie K5: Volendam lag früher an der Zuiderzee, einem salzigen Meer. Was geschah, als die Zuiderzee durch den Afsluitdijk vom offenen Meer abgetrennt wurde?",
    hu: "Volendam egy festői történelmi halászfalu az Észak-Holland tartományban, az egykori Zuiderzee (ma Markermeer) partján. A falu a 20. század elején a művészek – köztük Picasso és Renoir – kedvelt menedékhelye volt, akik az autentikus holland életérzést keresték. Ma a turizmus a legfőbb iparága; a látogatókat a zöld faházak szegélyezte régi kikötő, a hagyományos holland népviseletek és a füstölt angolnát (paling) kínáló halárusok vonzzák. Földrajz K5: Hogyan változtatta meg a halászfalvak (mint Volendam) életét a tenger lezárása (a gátak megépítése)?",
    ro: "Volendam este un sat istoric pitoresc de pescari din provincia Olanda de Nord, pe malul fostei Zuiderzee (acum Markermeer). La începutul secolului al XX-lea, satul a fost un refugiu popular pentru artiști – inclusiv Picasso și Renoir – care căutau stilul de viață autentic olandez. Astăzi, turismul este principala sa industrie; vizitatorii sunt atrași de vechiul port mărginit de case verzi din lemn, costumele tradiționale olandeze și negustorii de pește care oferă anghilă afumată (paling). Geografie K5: Cum a schimbat închiderea mării (construirea digurilor) viața satelor de pescari precum Volendam?",
    en: "Volendam is a picturesque fishing village on the Markermeer in the province of North Holland, internationally recognized as a symbol of traditional Dutch culture. The village is famous for its old wooden houses, its cozy harbor filled with historic sailing ships, and its residents, some of whom still wear traditional costumes on festive days. Once a major port for fishing on the Zuiderzee, Volendam attracted many painters in the 19th century who wanted to capture authentic Dutch life. Today, it is one of the country's most popular tourist destinations and is known for its freshly smoked eel. Geography K5: Volendam used to be located on the Zuiderzee, a salty sea. What happened when the Zuiderzee was separated from the open sea by the Afsluitdijk?"
  },
    facts: {
    de: ["Direkt am Wasser des Markermeers gelegen (früher Zuiderzee).","Berühmt für die typisch niederländische, traditionelle Tracht.","Ein beliebtes Fotomotiv ist das Tragen der Tracht im Fotostudio.","Bekannt für lokale Fischspezialitäten wie frischen Räucheraal.","Zahlreiche Souvenirläden säumen die belebte Hafenpromenade (De Dijk).","Hat eine erfolgreiche Musikerszene (Palingpop) hervorgebracht.","Kleine Gassen im 'Doolhof' bieten einen Einblick ins historische Leben.","Eine Fährverbindung führt zur ehemaligen Insel Marken."],
    hu: ["Közvetlenül a Markermeer (korábban Zuiderzee) partján fekszik.","Híres a tipikus holland, hagyományos népviseletről.","Népszerű fotótéma a népviselet felpróbálása egy fotóstúdióban.","Helyi halkülönlegességekről, például a friss füstölt angolnáról ismert.","A nyüzsgő kikötői sétányt (De Dijk) számtalan szuvenírbolt szegélyezi.","Sikeres zenei színteret (Palingpop) hozott létre.","A 'Doolhof' (útvesztő) szűk utcácskái bepillantást nyújtanak a történelmi életbe.","Kompjárat vezet a korábbi Marken szigetre."],
    ro: ["Situat chiar pe apa lacului Markermeer (fostul Zuiderzee).","Renumit pentru costumul tradițional tipic olandez.","Un motiv foto popular este purtarea costumului tradițional într-un studio foto.","Cunoscut pentru specialități locale din pește, precum anghila afumată.","Nenumărate magazine de suveniruri mărginesc promenada plină de viață (De Dijk).","A produs o scenă muzicală de succes (Palingpop).","Aleile mici din 'Doolhof' oferă o perspectivă asupra vieții istorice.","O legătură de feribot duce la fosta insulă Marken."],
    en: ["Located right on the water of the Markermeer (formerly Zuiderzee).","Famous for the typical Dutch, traditional costume.","A popular photo motif is wearing the traditional costume in a photo studio.","Known for local fish specialties like fresh smoked eel.","Numerous souvenir shops line the bustling harbor promenade (De Dijk).","Has produced a successful music scene (Palingpop).","Small alleys in the 'Doolhof' offer a glimpse into historical life.","A ferry connection leads to the former island of Marken."]
  },
      factsAdvanced: {
    de: [
      "Die traditionelle Frauen-Tracht von Volendam mit ihrer spitzen Spitzenhaube ist oft das klischeehafte Bild einer 'Holländerin' im Ausland.",
      "Im späten 19. und frühen 20. Jahrhundert existierte in Volendam eine blühende Künstlerkolonie, die von Malern wie Renoir und Signac besucht wurde.",
      "Die lokale Musikszene, der 'Palingsound' (Aalsound), brachte zahlreiche erfolgreiche niederländische Popbands hervor.",
      "Das Volendams Museum präsentiert detailgetreu die historische Lebensweise und die Trachtenvielfalt der Region."
    ],
    hu: ["A volendami hagyományos népviselet, különösen a nők csipkefőkötője, a holland kultúra nemzetközi szimbólumává vált.", "A falu zenei kultúrája (a 'Palingsound' – angolnahang) jelentős a holland popzenében.", "Volendam egy gát megépítésével született meg a 14. században Edam kikötőjeként.", "A kikötőből rendszeres kompjárat közlekedik a szemközti, egykor szigetként funkcionáló Marken faluba."],
    ro: [
      "Costumul tradițional din Volendam, în special boneta de dantelă a femeilor, a devenit un simbol internațional al culturii olandeze.",
      "Cultura muzicală a satului ('Palingsound' – sunetul anghilei) este semnificativă în muzica pop olandeză.",
      "Volendam a luat naștere prin construirea unui baraj în secolul al XIV-lea ca port pentru orașul Edam.",
      "Un serviciu regulat de feribot face legătura cu satul Marken din apropiere, fostă insulă."
    ],
    en: [
      "The traditional women's costume of Volendam, with its pointed lace cap, is often the clichéd image of a 'Dutch woman' abroad.",
      "In the late 19th and early 20th centuries, Volendam hosted a thriving artist colony visited by painters like Renoir and Signac.",
      "The local music scene, known as 'Palingsound' (eel sound), produced numerous successful Dutch pop bands.",
      "The Volendam Museum meticulously presents the historical way of life and the variety of traditional costumes in the region."
    ]
  }
  },
  {
    id: "NL-LM-KEU", type: "landmark", parent: "NL-ZH", coords: [4.55, 52.27],
    name: { de: "Keukenhof", hu: "Keukenhof", ro: "Keukenhof", en: "Keukenhof" },
    image: "/geo-images/netherlands/keukenhof.webp",
  description: {
    de: "Der Keukenhof in Lisse ist unbestritten der bekannteste und größte Frühlingsgarten der Welt. Auf einem weitläufigen Areal erblühen jährlich rund sieben Millionen Frühlingszwiebeln, darunter vor allem unzählige Sorten der berühmten holländischen Tulpe. Der Park bietet jedes Jahr ein neues Thema, prachtvolle Blumenshows in Pavillons und herrliche Spazierwege. Er ist nur für etwa acht Wochen im Frühling geöffnet, zieht in dieser Zeit aber Millionen von Touristen an.",
    hu: "A lisse-i Keukenhof vitathatatlanul a világ legismertebb és legnagyobb tavaszi kertje. Egy kiterjedt területen évente mintegy hétmillió tavaszi virághagyma nyílik, köztük elsősorban a híres holland tulipán számtalan fajtája. A park minden évben új témát, pompás virágkiállításokat kínál a pavilonokban és csodálatos sétányokon. Csak körülbelül nyolc hétig tart nyitva tavasszal, de ez idő alatt turisták millióit vonzza.",
    ro: "Keukenhof din Lisse este fără îndoială cea mai faimoasă și cea mai mare grădină de primăvară din lume. Peste șapte milioane de bulbi de primăvară înfloresc aici anual pe o zonă extinsă, inclusiv nenumărate soiuri din faimoasa lalea olandeză. Parcul oferă o nouă temă în fiecare an, spectacole florale magnifice în pavilioane și alei minunate. Este deschis doar aproximativ opt săptămâni primăvara, dar atrage milioane de turiști în acest timp.",
    en: "Keukenhof in Lisse is undoubtedly the most famous and largest spring garden in the world. About seven million spring bulbs bloom here annually over an extensive area, including countless varieties of the famous Dutch tulip. The park offers a new theme every year, magnificent flower shows in pavilions, and wonderful walking paths. It is only open for about eight weeks in spring but attracts millions of tourists during this time."
  },
      descriptionAdvanced: {
    de: "Der Keukenhof in Lisse wird oft als der 'Garten Europas' bezeichnet und ist einer der größten und bekanntesten Blumengärten der Welt. Jedes Frühjahr öffnet der Park für nur etwa acht Wochen seine Tore und präsentiert ein atemberaubendes, farbenfrohes Meer aus rund sieben Millionen blühenden Zwiebelblumen, hauptsächlich Tulpen, Narzissen und Hyazinthen. Die Anlage erstreckt sich über 32 Hektar rund um das historische Schloss Keukenhof und wird jährlich neu gestaltet, um die niederländische Blumenzuchtindustrie weltweit zu repräsentieren. Die unzähligen, perfekt arrangierten Beete machen ihn zu einem Paradies für Fotografen. Biologie K6: Im Keukenhof blühen Millionen von Tulpen. Welches Pflanzenteil nutzt die Tulpe, um Nährstoffe über den Winter zu speichern?",
    hu: "A Keukenhof, gyakran 'Európa kertje'-ként emlegetve, a világ egyik legnagyobb virágoskertje, amely a dél-hollandiai Lisse városában található. A park évente csupán nyolc hétig, a tavaszi virágzás idején tart nyitva, mégis több mint egymillió látogatót vonz a világ minden tájáról. A 32 hektáros területen a holland virághagymatermesztők több mint hétmillió tulipánt, jácintot és nárciszt ültetnek el minden ősszel, gondosan megtervezett tematikus minták szerint. Környezetismeret K6: Milyen természeti feltételek kellenek ahhoz, hogy egy ország a világ vezető virághagymatermesztője legyen?",
    ro: "Keukenhof, numită adesea 'Grădina Europei', este una dintre cele mai mari grădini de flori din lume, situată în orașul Lisse din Olanda de Sud. Parcul este deschis doar opt săptămâni pe an, în timpul înfloririi de primăvară, atrăgând totuși peste un milion de vizitatori din întreaga lume. Pe suprafața de 32 de hectare, cultivatorii olandezi de bulbi plantează manual peste șapte milioane de lalele, zambile și narcise în fiecare toamnă, după modele tematice atent planificate. Științele naturii K6: Ce condiții naturale sunt necesare pentru ca o țară să fie principalul producător de bulbi de flori din lume?",
    en: "The Keukenhof in Lisse is often called the 'Garden of Europe' and is one of the largest and most famous flower gardens in the world. Every spring, the park opens its gates for only about eight weeks, presenting a breathtaking, colorful sea of around seven million blooming bulb flowers, primarily tulips, daffodils, and hyacinths. The grounds span 32 hectares around the historic Keukenhof Castle and are redesigned annually to showcase the Dutch floriculture industry to the world. The countless perfectly arranged flowerbeds make it a paradise for photographers. Biology K6: Millions of tulips bloom at Keukenhof. Which part of the plant does the tulip use to store nutrients over the winter?"
  },
    facts: {
    de: ["Gilt als der 'Garten Europas' und größter Zwiebelblumengarten der Welt.","Rund 7 Millionen Blumen werden jeden Herbst von Hand gepflanzt.","Nur ca. zwei Monate im Jahr (März bis Mai) geöffnet.","Zeigt über 800 verschiedene Sorten von Tulpen.","Ein gigantisches Schaufenster der niederländischen Zierpflanzenindustrie.","Befindet sich mitten im Anbaugebiet für Blumenzwiebeln (Bollenstreek).","Ein jährlicher Blumenkorso fährt am Keukenhof vorbei.","Das Gelände war ursprünglich der Kräutergarten eines Schlosses (Keuken=Küche)."],
    hu: ["'Európa kertje' és a világ legnagyobb virághagymakertje.","Minden ősszel mintegy 7 millió virágot ültetnek el kézzel.","Évente csak kb. két hónapig (márciustól májusig) tart nyitva.","Több mint 800 különböző tulipánfajtát mutat be.","A holland dísznövényipar gigantikus kirakata.","A virághagymatermesztő vidék (Bollenstreek) kellős közepén található.","Évente egy virágkarnevál halad el a Keukenhof mellett.","A terület eredetileg egy kastély fűszerkertje (Keuken = konyha) volt."],
    ro: ["Considerată 'Grădina Europei' și cea mai mare grădină de flori cu bulbi din lume.","Aproximativ 7 milioane de flori sunt plantate manual în fiecare toamnă.","Deschis doar aproximativ două luni pe an (martie - mai).","Afișează peste 800 de soiuri diferite de lalele.","O vitrină gigantică a industriei olandeze de plante ornamentale.","Situată în mijlocul zonei de cultivare a bulbilor de flori (Bollenstreek).","O paradă anuală a florilor trece pe lângă Keukenhof.","Terenul a fost inițial grădina de ierburi a unui castel (Keuken=Bucătărie)."],
    en: ["Considered the 'Garden of Europe' and the largest bulb flower garden in the world.","About 7 million flowers are planted by hand every autumn.","Open only about two months a year (March to May).","Displays over 800 different varieties of tulips.","A gigantic showcase of the Dutch ornamental plant industry.","Located in the middle of the bulb-growing area (Bollenstreek).","An annual flower parade passes by the Keukenhof.","The grounds were originally the herb garden of a castle (Keuken=Kitchen)."]
  },
      factsAdvanced: {
    de: [
      "Der Keukenhof ist nur von Mitte März bis Mitte Mai für die Öffentlichkeit zugänglich.",
      "Jedes Jahr pflanzen 40 Gärtner mehr als 7 Millionen Blumenzwiebeln per Hand.",
      "Die Tulpe, das Symbol des Parks und der Niederlande, stammt ursprünglich aus Zentralasien und dem Osmanischen Reich.",
      "Der Park wurde 1949 von den führenden Blumenzwiebelzüchtern der Niederlande als Schaufenster für ihre Branche gegründet."
    ],
    hu: ["A Keukenhof szó szerinti jelentése 'konyhakert', mivel a terület egykor egy kastély birtoka volt, ahol gyógynövényeket termesztettek.", "Minden évben a hagymákat ősszel kézzel ültetik el a kertészek.", "A parkot eredetileg 1949-ben hozták létre, hogy a holland exportőrök bemutathassák a hagymáikat.", "Több mint 800 különböző tulipánfajta látható a kertben a tavaszi szezonban."],
    ro: [
      "Sensul literal al cuvântului Keukenhof este 'grădină de bucătărie', deoarece zona a fost cândva domeniul unui castel unde se cultivau ierburi aromatice.",
      "În fiecare an, bulbii sunt plantați manual de grădinari toamna.",
      "Parcul a fost creat inițial în 1949 pentru exportatorii olandezi pentru a-și expune bulbii.",
      "Peste 800 de soiuri diferite de lalele pot fi văzute în grădină în sezonul de primăvară."
    ],
    en: [
      "The Keukenhof is only open to the public from mid-March to mid-May.",
      "Every year, 40 gardeners plant more than 7 million flower bulbs by hand.",
      "The tulip, the symbol of the park and the Netherlands, originally comes from Central Asia and the Ottoman Empire.",
      "The park was founded in 1949 by leading Dutch bulb growers as a showcase for their industry."
    ]
  }
  },
  {
    id: "NL-LM-GIE", type: "landmark", parent: "NL-OV", coords: [6.08, 52.73],
    name: { de: "Giethoorn", hu: "Giethoorn", ro: "Giethoorn", en: "Giethoorn" },
    image: "/geo-images/netherlands/giethoorn.webp",
  description: {
    de: "Giethoorn, gelegen in der Provinz Overijssel, ist ein idyllisches Wasserdorf, das oft liebevoll als das 'Venedig des Nordens' bezeichnet wird. Der historische Kern des Dorfes ist komplett autofrei; stattdessen dienen kleine Wasserwege als Straßen. Die traditionellen, reetgedeckten Bauernhäuser liegen auf kleinen Inseln, die durch unzählige markante Holzbrücken miteinander verbunden sind. Besucher können das Dorf am besten in elektrischen, leisen 'Flüsterbooten' erkunden.",
    hu: "Giethoorn, amely Overijssel tartományban található, egy idilli vízi falu, amelyet gyakran 'Észak Velencéjeként' is becéznek. A falu történelmi központja teljesen autómentes; ehelyett kis vízi utak szolgálnak utcákként. A hagyományos, nádtetős parasztházak kis szigeteken fekszenek, amelyeket számtalan jellegzetes fahíd köt össze egymással. A látogatók a falut leginkább elektromos, csendes 'suttogócsónakokban' fedezhetik fel.",
    ro: "Giethoorn, situat în provincia Overijssel, este un sat de apă idilic pe care mulți îl numesc cu afecțiune 'Veneția Nordului'. Centrul istoric al satului este complet lipsit de mașini; în schimb, căile navigabile mici servesc drept străzi. Fermele tradiționale cu acoperiș din stuf se află pe insule mici, care sunt conectate prin nenumărate poduri din lemn caracteristice. Vizitatorii pot explora cel mai bine satul în bărci electrice, silențioase ('bărci care șoptesc').",
    en: "Giethoorn, located in the province of Overijssel, is an idyllic water village affectionately referred to as the 'Venice of the North'. The historic center of the village is completely car-free; instead, small waterways serve as streets. The traditional thatched-roof farmhouses are situated on small islands connected by countless characteristic wooden bridges. Visitors can best explore the village in electric, quiet 'whisper boats'."
  },
      descriptionAdvanced: {
    de: "Giethoorn ist ein idyllisches Dorf in der Provinz Overijssel, das weltweit als das 'Venedig des Nordens' bekannt ist. Das Besondere an diesem Ort ist, dass das historische Zentrum keine Straßen für Autos besitzt; der gesamte Verkehr und Transport findet auf einem dichten Netzwerk schmaler Kanäle statt. Die Fortbewegung erfolgt traditionell in flachen 'Punttern', leisen Elektrobooten, die von den Einwohnern liebevoll 'Flüsterboote' genannt werden. Die malerischen, strohgedeckten Bauernhäuser, die auf kleinen Torfinseln stehen und durch mehr als 170 Holzbrücken verbunden sind, verleihen Giethoorn eine märchenhafte Atmosphäre. Geografie K5: In Giethoorn baute man Häuser auf Torfinseln. Was ist Torf und wie entstand er in solchen feuchten Gebieten?",
    hu: "Giethoorn egy mesébe illő falu Overijssel tartományban, amelyet gyakran 'Holland Velence'-ként is emlegetnek. A falu különlegessége, hogy a történelmi központban egyáltalán nincsenek utak, így az autóforgalom is teljesen hiányzik; a közlekedés kizárólag a sűrű csatornahálózaton, úgynevezett suttogó csónakokkal (fluisterboot), vagy az azokon átívelő számtalan fa gyaloghídon történik. A települést a 13. században alapították tőzegbányászok, a csatornákat eredetileg a tőzeg szállítására ásták. Földrajz K6: Hogyan befolyásolta a tőzegkitermelés Giethoorn tájképét és csatornáinak kialakulását?",
    ro: "Giethoorn este un sat de poveste din provincia Overijssel, adesea numit 'Veneția olandeză'. Caracteristica specială a satului este că nu există drumuri în centrul istoric, astfel încât traficul auto este complet absent; transportul are loc exclusiv pe rețeaua densă de canale, folosind așa-numitele bărci care șoptesc (fluisterboot) sau pe nenumăratele punți pietonale de lemn care le traversează. Așezarea a fost fondată în secolul al XIII-lea de minerii de turbă, canalele fiind săpate inițial pentru a transporta turba. Geografie K6: Cum a influențat extracția turbei peisajul din Giethoorn și formarea canalelor sale?",
    en: "Giethoorn is an idyllic village in the province of Overijssel, known worldwide as the 'Venice of the North'. The special thing about this place is that the historic center has no roads for cars; all traffic and transport takes place on a dense network of narrow canals. Transportation is traditionally done in flat 'punters', quiet electric boats lovingly called 'whisper boats' by the locals. The picturesque, thatched-roof farmhouses standing on small peat islands, connected by more than 170 wooden bridges, give Giethoorn a fairytale atmosphere. Geography K5: In Giethoorn, houses were built on peat islands. What is peat, and how was it formed in such wetlands?"
  },
    facts: {
    de: ["Das alte Zentrum hat keine Straßen, nur Kanäle und Fußwege.","Bekannt als das 'Venedig der Niederlande'.","Der Transport erfolgt traditionell in sogenannten Flüsterbooten (Punter).","Besitzt über 170 charakteristische Holzbrücken.","Gelegen inmitten des Nationalparks Weerribben-Wieden.","Entstanden durch historischen Torfabbau in der Region.","Ein überaus beliebtes Ziel für internationale Touristen.","Viele Häuser haben Dächer, die noch traditionell mit Schilf gedeckt sind."],
    hu: ["A régi központban nincsenek utak, csak csatornák és gyalogutak.","Úgy is ismert, mint 'Hollandia Velencéje'.","A közlekedés hagyományosan az úgynevezett suttogócsónakokkal (Punter) történik.","Több mint 170 jellegzetes fahíddal rendelkezik.","A Weerribben-Wieden Nemzeti Park közepén található.","A régió történelmi tőzegkitermelése során jött létre.","A nemzetközi turisták körében rendkívül népszerű úti cél.","Sok háznak a tetejét még ma is hagyományosan náddal fedik."],
    ro: ["Centrul vechi nu are drumuri, doar canale și poteci.","Cunoscută ca 'Veneția Olandei'.","Transportul se face în mod tradițional în așa-numitele bărci cu șoapte (Punter).","Are peste 170 de poduri caracteristice din lemn.","Situat în mijlocul Parcului Național Weerribben-Wieden.","Creat de extracția istorică a turbei din regiune.","O destinație extrem de populară pentru turiștii internaționali.","Multe case au încă acoperișuri de stuf tradiționale."],
    en: ["The old center has no roads, only canals and footpaths.","Known as the 'Venice of the Netherlands'.","Transportation is traditionally by so-called whisper boats (Punter).","Has over 170 characteristic wooden bridges.","Located in the middle of the Weerribben-Wieden National Park.","Created by historical peat extraction in the region.","An extremely popular destination for international tourists.","Many houses have roofs that are still traditionally thatched with reeds."]
  },
      factsAdvanced: {
    de: [
      "Im historischen Zentrum von Giethoorn gibt es keine Autostraßen, sondern nur Wasserwege und Radwege.",
      "Das Dorf hat seinen Ursprung in der Torfgewinnung; durch das Abgraben des Torfs entstanden Teiche und Seen.",
      "Es gibt über 170 hölzerne Bogenbrücken, die die kleinen Inseln des Dorfes miteinander verbinden.",
      "Ein Großteil der Einwohner nutzt Kähne (Punter), um Waren zu transportieren oder sogar Tiere auf Weiden zu bringen."
    ],
    hu: ["A faluban több mint 170 kis fahíd köti össze a csatornák által elválasztott telkeket.", "A hagyományos giethoorni házak nádtetővel rendelkeznek, ami régen a legolcsóbb tetőfedő anyag volt.", "A suttogó csónakok elektromos motorral működnek, hogy ne zavarják a falu nyugalmát.", "A település különösen az ázsiai, főleg kínai turisták körében rendkívül népszerű."],
    ro: [
      "În sat, peste 170 de poduri mici de lemn leagă parcelele separate de canale.",
      "Casele tradiționale din Giethoorn au acoperișuri de stuf, care în trecut era cel mai ieftin material pentru acoperiș.",
      "Bărcile cu șoapte au motoare electrice pentru a nu deranja liniștea satului.",
      "Așezarea este extrem de populară, în special în rândul turiștilor asiatici."
    ],
    en: [
      "In the historical center of Giethoorn there are no car roads, only waterways and cycle paths.",
      "The village originated from peat extraction; digging up the peat created ponds and lakes.",
      "There are over 170 wooden arch bridges connecting the small islands of the village.",
      "Many of the residents use punts to transport goods or even bring animals to pastures."
    ]
  }
  },
  {
    id: "NL-LM-KIN", type: "landmark", parent: "NL-ZH", coords: [4.63, 51.88],
    name: { de: "Kinderdijk", hu: "Kinderdijk", ro: "Kinderdijk", en: "Kinderdijk" },
    image: "/geo-images/netherlands/kinderdijk.webp",
  description: {
    de: "Kinderdijk ist weltbekannt für sein außergewöhnliches Ensemble aus 19 historischen Windmühlen, die malerisch an den Kanälen der Provinz Südholland stehen. Dieses UNESCO-Weltkulturerbe veranschaulicht eindrucksvoll die jahrhundertealte niederländische Tradition des Wassermanagements. Die im 18. Jahrhundert erbauten Mühlen dienten dazu, das Wasser aus den Poldern zu pumpen und die Region vor Überschwemmungen zu schützen. Ein absolutes Muss für jeden Besucher der Niederlande.",
    hu: "Kinderdijk világhírű a Dél-Holland tartomány csatornái mentén festőien sorakozó 19 történelmi szélmalomból álló kivételes együtteséről. Ez az UNESCO világörökségi helyszín lenyűgözően szemlélteti a holland vízgazdálkodás évszázados hagyományát. A 18. században épült malmokat arra használták, hogy kiszivattyúzzák a vizet a polderekből, és megvédjék a régiót az árvizektől. Abszolút kötelező látnivaló minden hollandiai látogató számára.",
    ro: "Kinderdijk este faimos în întreaga lume pentru ansamblul său excepțional de 19 mori de vânt istorice situate pitoresc de-a lungul canalelor din provincia Olanda de Sud. Acest sit al Patrimoniului Mondial UNESCO ilustrează impresionant tradiția olandeză de secole a managementului apei. Morile, construite în secolul al XVIII-lea, au fost folosite pentru a pompa apa din poldere și pentru a proteja regiunea de inundații. O necesitate absolută pentru fiecare vizitator al Olandei.",
    en: "Kinderdijk is world-famous for its exceptional ensemble of 19 historic windmills situated picturesquely along the canals in the province of South Holland. This UNESCO World Heritage site impressively illustrates the centuries-old Dutch tradition of water management. The mills, built in the 18th century, were used to pump water out of the polders and protect the region from flooding. An absolute must for every visitor to the Netherlands."
  },
      descriptionAdvanced: {
    de: "Kinderdijk ist ein kleines Dorf in der Provinz Südholland, das eine der berühmtesten und ikonischsten Landschaften der Niederlande bietet. Hier steht ein Netzwerk von 19 authentischen Windmühlen aus dem 18. Jahrhundert, die an den Ufern der Kanäle erbaut wurden, um das tiefliegende Polderland vor Überschwemmungen zu schützen. Diese historischen Konstruktionen sind ein Meisterwerk des traditionellen niederländischen Wassermanagements und dokumentieren den jahrhundertealten Kampf der Niederländer gegen das Wasser. Aufgrund ihrer historischen und technologischen Bedeutung wurden die Mühlen von Kinderdijk in die Liste des UNESCO-Weltkulturerbes aufgenommen. Physik K6: Die Windmühlen von Kinderdijk pumpten Wasser bergauf. Wie kann Windenergie genutzt werden, um eine Archimedische Schraube anzutreiben?",
    hu: "Kinderdijk egy világhírű szélmalom-komplexum Dél-Hollandiában, amely az Alblasserwaard polder vízszintjének szabályozására épült. A 18. század közepén, 1738 és 1740 között épült 19 szélmalom a legnagyobb fennmaradt ilyen jellegű csoportosulás Hollandiában. Eredeti céljuk az volt, hogy a vizet a mélyebben fekvő területekről a Lek folyóba pumpálják, megelőzve az elárasztást. A komplexum 1997 óta az UNESCO Világörökség része, és lenyűgöző példája a hagyományos holland vízgazdálkodásnak. Történelem K7: Milyen technológiai innovációt jelentettek a szélmalmok a holland vízgazdálkodásban a 18. században?",
    ro: "Kinderdijk este un complex de mori de vânt faimos în lume, situat în Olanda de Sud, construit pentru a regla nivelul apei din polderul Alblasserwaard. Cele 19 mori de vânt, construite la mijlocul secolului al XVIII-lea, între 1738 și 1740, reprezintă cel mai mare grup de acest gen care a supraviețuit în Țările de Jos. Scopul lor original era de a pompa apa din zonele joase în râul Lek, prevenind inundațiile. Complexul este un sit al Patrimoniului Mondial UNESCO din 1997 și un exemplu uimitor de management tradițional olandez al apei. Istorie K7: Ce inovație tehnologică au reprezentat morile de vânt în managementul olandez al apei în secolul al XVIII-lea?",
    en: "Kinderdijk is a small village in the province of South Holland that offers one of the most famous and iconic landscapes in the Netherlands. It features a network of 19 authentic 18th-century windmills built along the banks of canals to protect the low-lying polder land from flooding. These historical structures are a masterpiece of traditional Dutch water management, documenting the centuries-old battle of the Dutch against the water. Because of their historical and technological significance, the windmills of Kinderdijk were added to the UNESCO World Heritage List. Physics K6: The windmills of Kinderdijk pumped water uphill. How can wind energy be used to drive an Archimedean screw?"
  },
    facts: {
    de: ["Seit 1997 auf der Liste des UNESCO-Weltkulturerbes.","Das Netz besteht aus 19 gut erhaltenen Mühlen aus dem 18. Jahrhundert.","Sie wurden gebaut, um den tiefliegenden Alblasserwaard trockenzuhalten.","Ein ikonisches Symbol für den ewigen Kampf der Niederländer gegen das Wasser.","Einige Mühlen können von innen besichtigt werden.","Im Winter ist das zugefrorene Wasser ein beliebtes Eislaufgebiet.","Die Mühlen sind teilweise heute noch funktionstüchtig.","Liegt nicht weit entfernt von der Großstadt Rotterdam."],
    hu: ["1997 óta szerepel az UNESCO világörökségi listáján.","A hálózat 19 jó állapotban fennmaradt 18. századi malomból áll.","Azért építették őket, hogy szárazon tartsák az alacsonyan fekvő Alblasserwaardot.","A hollandok víz elleni örökös küzdelmének ikonikus szimbóluma.","Néhány malmot belülről is meg lehet tekinteni.","Télen a befagyott víz népszerű korcsolyázó terület.","A malmok egy része még ma is működőképes.","Nem messze található Rotterdam nagyvárosától."],
    ro: ["Aflată pe lista Patrimoniului Mondial UNESCO din 1997.","Rețeaua este formată din 19 mori bine conservate din secolul al XVIII-lea.","Au fost construite pentru a menține uscatul jos Alblasserwaard.","Un simbol iconic pentru lupta eternă a olandezilor împotriva apei.","Unele mori pot fi vizitate pe dinăuntru.","Iarna, apa înghețată este o zonă populară pentru patinaj pe gheață.","Unele mori sunt încă funcționale astăzi.","Situat nu departe de marele oraÈ™ Rotterdam."],
    en: ["On the UNESCO World Heritage list since 1997.","The network consists of 19 well-preserved 18th-century mills.","They were built to keep the low-lying Alblasserwaard dry.","An iconic symbol of the Dutch eternal struggle against water.","Some mills can be visited inside.","In winter, the frozen water is a popular ice skating area.","Some of the mills are still fully functional today.","Located not far from the major city of Rotterdam."]
  },
      factsAdvanced: {
    de: [
      "Die 19 Mühlen in Kinderdijk wurden um 1740 erbaut, um das Gebiet Alblasserwaard trocken zu halten.",
      "Kinderdijk wurde 1997 zum UNESCO-Weltkulturerbe erklärt.",
      "Der Name 'Kinderdijk' (Kinderdeich) stammt der Legende nach von einer Wiege mit einem weinenden Baby, die bei einer großen Flut unversehrt ans Land gespült wurde.",
      "Obwohl heute moderne Pumpstationen die Arbeit verrichten, sind fast alle Mühlen noch funktionsfähig."
    ],
    hu: ["A Kinderdijk malmai egy komplex, többlépcsős pumpálási rendszert alkottak.", "Napjainkban a vizet modern, elektromos szivattyúállomások mozgatják, de a malmok ma is működőképesek.", "A 'Kinderdijk' név (Gyermekgát) egy legendából származik, amely szerint egy 1421-es árvíz után egy bölcsőt mosott partra a víz egy macskával és egy csecsemővel.", "A 19 malom közül sokat ma is laknak, fenntartva a molnár-hagyományokat."],
    ro: [
      "Cele 19 mori de vânt din Kinderdijk au fost construite în jurul anului 1740 pentru a menține uscată zona Alblasserwaard.",
      "Kinderdijk a fost declarat sit al Patrimoniului Mondial UNESCO în 1997.",
      "Numele 'Kinderdijk' (Dicul Copilului) provine dintr-o legendă despre un leagăn cu un bebeluș plângând care a ajuns neatins la țărm în timpul unei mari inundații.",
      "Deși astăzi stațiile de pompare moderne fac treaba, aproape toate morile sunt încă funcționale."
    ],
    en: [
      "The 19 mills in Kinderdijk were built around 1740 to keep the Alblasserwaard area dry.",
      "Kinderdijk was declared a UNESCO World Heritage site in 1997.",
      "The name 'Kinderdijk' (Children's Dike) comes from a legend about a cradle with a crying baby that washed ashore unharmed during a massive flood.",
      "Although modern pumping stations do the work today, almost all the mills are still functional."
    ]
  }
  },
  {
    id: "NL-LM-TEX", type: "landmark", parent: "NL-NH", coords: [4.80, 53.05],
    name: { de: "Texel", hu: "Texel", ro: "Texel", en: "Texel" },
    image: "/geo-images/netherlands/texel.webp",
  description: {
    de: "Texel ist die größte und meistbesuchte der niederländischen Watteninseln und liegt in Nordholland. Die Insel bietet eine unglaubliche landschaftliche Vielfalt: von einem endlosen Sandstrand an der Westküste über weite Dünenlandschaften im Nationalpark bis hin zu satten grünen Wiesen und kleinen Wäldern. Texel ist berühmt für seine Schafzucht, hervorragende Radwege und das Zentrum Ecomare, das sich um Seehunde und die Nordsee-Natur kümmert.",
    hu: "Texel a legnagyobb és leglátogatottabb a holland Watt-szigetek közül, és Észak-Hollandiában található. A sziget hihetetlen táji változatosságot kínál: a nyugati part végtelen homokos strandjától a nemzeti park kiterjedt dűnés tájain át a buja zöld rétekig és kis erdőkig. Texel híres a juhtenyésztésről, kiváló kerékpárútjairól és az Ecomare központról, amely a fókákkal és az Északi-tenger természetével foglalkozik.",
    ro: "Texel este cea mai mare și mai vizitată dintre insulele Wadden din Olanda și se află în Olanda de Nord. Insula oferă o incredibilă diversitate peisagistică: de la o plajă nesfârșită de nisip pe coasta de vest la vaste peisaje de dune din parcul național, la pajiști verzi și mici păduri. Texel este renumită pentru creșterea oilor, pistele excelente pentru biciclete și centrul Ecomare, care are grijă de foci și de natura Mării Nordului.",
    en: "Texel is the largest and most visited of the Dutch Wadden Islands and is located in North Holland. The island offers incredible scenic diversity: from an endless sandy beach on the west coast to vast dune landscapes in the national park, to lush green meadows and small forests. Texel is famous for its sheep breeding, excellent cycling paths, and the Ecomare center, which cares for seals and the nature of the North Sea."
  },
      descriptionAdvanced: {
    de: "Texel ist die größte und am dichtesten besiedelte der Westfriesischen Inseln in der Nordsee und gehört zur Provinz Nordholland. Die Insel ist bekannt für ihre vielfältige Naturlandschaft, die lange Sandstrände, weite Dünengebiete, Kiefernwälder und Salzwiesen umfasst. Texel ist ein Paradies für Vogelbeobachter, da Millionen von Zugvögeln hier Rast machen, sowie für Naturliebhaber, die die Seehundstation Ecomare besuchen. Neben der Natur prägt die Landwirtschaft, insbesondere die Schafzucht, das Bild der Insel; das Texelschaf und der daraus gewonnene Käse und die Wolle sind weit über die Inselgrenzen hinaus bekannt. Biologie K7: Auf Texel machen viele Zugvögel Rast. Warum müssen Zugvögel auf ihrer Reise nach Süden besonders viel fettreiche Nahrung zu sich nehmen?",
    hu: "Texel a legnagyobb és legnépesebb a holland Wadden-szigetek közül, amely Észak-Holland tartományhoz tartozik. A sziget híres változatos természeti környezetéről: hosszú, homokos strandok, dűnék, fenyvesek, fenyérek és gazdag polderek alkotják a tájat. Területének mintegy harmada védett nemzeti park (Duinen van Texel), amely madármegfigyelők paradicsoma, hiszen több száz madárfaj vonul át vagy fészkel itt. A sziget gazdasága a turizmusra és a juhtenyésztésre épül. Környezetismeret K6: Miért tekinthető a Wadden-tenger és a környező szigetek ökoszisztémája globálisan is egyedülállónak?",
    ro: "Texel este cea mai mare și cea mai dens populată dintre insulele Wadden, aparținând provinciei Olanda de Nord. Insula este renumită pentru mediul său natural divers: plaje lungi cu nisip, dune, păduri de pini, lande și poldere bogate alcătuiesc peisajul. Aproximativ o treime din suprafața sa este un parc național protejat (Duinen van Texel), care este un paradis pentru observatorii de păsări, deoarece sute de specii de păsări migrează sau cuibăresc aici. Economia insulei se bazează pe turism și creșterea oilor. Științe ale naturii K6: De ce este ecosistemul Mării Wadden și al insulelor din jur considerat unic la nivel global?",
    en: "Texel is the largest and most populous of the West Frisian Islands in the North Sea and belongs to the province of North Holland. The island is known for its diverse natural landscape, which includes long sandy beaches, vast dune areas, pine forests, and salt marshes. Texel is a paradise for bird watchers, as millions of migratory birds stop here, as well as for nature lovers visiting the Ecomare seal sanctuary. Besides nature, agriculture, especially sheep farming, shapes the island's image; the Texel sheep and the cheese and wool derived from it are renowned far beyond the island. Biology K7: Many migratory birds stop to rest on Texel. Why do migratory birds need to eat a lot of fat-rich food on their journey south?"
  },
    facts: {
    de: ["Ist die größte der fünf bewohnten niederländischen Watteninseln.","Die Insel hat fast so viele Schafe wie menschliche Einwohner.","Der rote Leuchtturm am Nordstrand ist das Wahrzeichen von Texel.","Ein großer Teil der Insel ist der 'Nationalpark Duinen van Texel'.","Das Naturzentrum 'Ecomare' pflegt verletzte Seehunde und Vögel.","Produziert eigenes Bier (Texels Skuumkoppe) und berühmten Schafskäse.","Erreichbar über eine kurze Fährverbindung ab Den Helder.","Ein Paradies für Vogelbeobachter und Naturliebhaber."],
    hu: ["A legnagyobb az öt lakott holland Watt-sziget közül.","A szigeten majdnem annyi juh él, mint ahány ember.","Az északi strandon lévő piros világítótorony Texel jelképe.","A sziget nagy része a 'Duinen van Texel Nemzeti Parkhoz' tartozik.","Az 'Ecomare' természetvédelmi központ sérült fókákat és madarakat ápol.","Saját sört (Texels Skuumkoppe) és híres juhsajtot gyárt.","Den Helderből rövid kompjárattal elérhető.","Paradicsom a madármegfigyelők és a természetbarátok számára."],
    ro: ["Este cea mai mare dintre cele cinci insule Wadden locuite din Olanda.","Insula are aproape la fel de multe oi ca și locuitori umani.","Farul roșu de pe plaja de nord este reperul din Texel.","O mare parte a insulei este 'Parcul Național Duinen van Texel'.","Centrul natural 'Ecomare' îngrijește focile și păsările rănite.","Produce propria bere (Texels Skuumkoppe) și celebra brânză de oaie.","Accesibil prin intermediul unui feribot scurt de la Den Helder.","Un paradis pentru observatorii de păsări și iubitorii de natură."],
    en: ["Is the largest of the five inhabited Dutch Wadden Islands.","The island has almost as many sheep as human inhabitants.","The red lighthouse on the north beach is the landmark of Texel.","A large part of the island is the 'Duinen van Texel National Park'.","The nature center 'Ecomare' cares for injured seals and birds.","Produces its own beer (Texels Skuumkoppe) and famous sheep cheese.","Accessible via a short ferry connection from Den Helder.","A paradise for bird watchers and nature lovers."]
  },
      factsAdvanced: {
    de: [
      "Texel ist nur über eine kurze, 20-minütige Fährfahrt von der Hafenstadt Den Helder aus zu erreichen.",
      "Auf der Insel leben mehr Schafe als menschliche Einwohner (etwa 14.000 Menschen gegenüber zehntausenden Schafen).",
      "Ein Drittel der Inselfläche steht als Nationalpark 'Duinen van Texel' unter Naturschutz.",
      "Die Seehundauffangstation Ecomare auf Texel rettet kranke und verwaiste Seehunde aus dem Wattenmeer."
    ],
    hu: ["Texel szigetén nagyjából annyi juh él, mint ember (körülbelül 14 000).", "Az Ecomare nevű tengeri múzeum és fókamenhely a sziget egyik legnépszerűbb látványossága.", "A szigetet komppal lehet megközelíteni Den Helderből, az út mindössze 20 percet vesz igénybe.", "Itt évente megrendezik a világ legnagyobb katamarán vitorlásversenyét, a Ronde om Texelt."],
    ro: [
      "Texel poate fi atins doar printr-o scurtă călătorie cu feribotul de 20 de minute din portul Den Helder.",
      "Pe insulă trăiesc mai multe oi decât locuitori umani (aproximativ 14.000 de oameni față de zeci de mii de oi).",
      "O treime din suprafața insulei este protejată ca parcul național 'Duinen van Texel'.",
      "Sanctuarul de foci Ecomare de pe Texel salvează focile bolnave și orfane din Marea Wadden."
    ],
    en: [
      "Texel can only be reached via a short, 20-minute ferry ride from the port city of Den Helder.",
      "There are more sheep on the island than human inhabitants (about 14,000 people compared to tens of thousands of sheep).",
      "A third of the island's area is protected as the 'Duinen van Texel' National Park.",
      "The Ecomare seal sanctuary on Texel rescues sick and orphaned seals from the Wadden Sea."
    ]
  }
  },
  {
    id: "NL-LM-HOG", type: "landmark", parent: "NL-GE", coords: [5.82, 52.10],
    name: { de: "Hoge Veluwe", hu: "Hoge Veluwe", ro: "Hoge Veluwe", en: "Hoge Veluwe" },
    image: "/geo-images/netherlands/hoge-veluwe.webp",
  description: {
    de: "Der Nationalpark De Hoge Veluwe ist das größte durchgehende Naturschutzgebiet der Niederlande und befindet sich in der Provinz Gelderland. Er bietet eine faszinierende Mischung aus dichten Wäldern, weiten Heideflächen und beeindruckenden Sandverwehungen. Eine Besonderheit des Parks sind die kostenlosen weißen Fahrräder, mit denen Besucher das Areal erkunden können. Mitten im Park liegt zudem das Kröller-Müller-Museum mit einer weltberühmten Van-Gogh-Sammlung.",
    hu: "A De Hoge Veluwe Nemzeti Park Hollandia legnagyobb egybefüggő természetvédelmi területe, amely Gelderland tartományban található. Sűrű erdők, kiterjedt fenyérek és lenyűgöző homokfúvások lenyűgöző keverékét kínálja. A park egyik különlegessége az ingyenes fehér kerékpárok, amelyekkel a látogatók felfedezhetik a területet. A park közepén található a Kröller-Müller Múzeum is egy világhírű Van Gogh-gyűjteménnyel.",
    ro: "Parcul Național De Hoge Veluwe este cea mai mare rezervație naturală continuă din Țările de Jos și este situat în provincia Gelderland. Oferă un amestec fascinant de păduri dese, suprafețe întinse de câmpie și depuneri impresionante de nisip. O caracteristică specială a parcului sunt bicicletele albe gratuite cu care vizitatorii pot explora zona. În mijlocul parcului se află, de asemenea, Muzeul Kröller-Müller cu o colecție Van Gogh de renume mondial.",
    en: "The De Hoge Veluwe National Park is the largest continuous nature reserve in the Netherlands and is located in the province of Gelderland. It offers a fascinating mix of dense forests, extensive heathlands, and impressive sand drifts. A special feature of the park are the free white bicycles that visitors can use to explore the area. In the middle of the park is also the Kröller-Müller Museum with a world-famous Van Gogh collection."
  },
      descriptionAdvanced: {
    de: "Der Nationalpark De Hoge Veluwe in der Provinz Gelderland ist das größte privat verwaltete Naturschutzgebiet der Niederlande und eine der schönsten Landschaften des Landes. Der Park zeichnet sich durch eine enorme landschaftliche Vielfalt aus, die von dichten Nadel- und Laubwäldern über weite, purpur blühende Heideflächen bis hin zu dynamischen Sandverwehungen reicht. Neben der reichen Tierwelt, darunter Rothirsche, Wildschweine und Mufflons, ist der Park berühmt für das Kröller-Müller-Museum, das mitten in der Natur liegt und eine herausragende Van-Gogh-Sammlung beherbergt. Besucher erkunden den Park typischerweise auf den kostenlos zur Verfügung stehenden weißen Fahrrädern. Biologie K6: In De Hoge Veluwe gibt es große, offene Sandflächen. Warum haben Pflanzen es schwer, auf diesen trockenen Sanddünen Wurzeln zu schlagen?",
    hu: "A Hoge Veluwe Nemzeti Park Hollandia legnagyobb egybefüggő természetvédelmi területe, amely Gelderland tartományban található. A parkot egy gazdag házaspár, Anton Kröller és Helene Müller alapította a 20. század elején. A táj rendkívül változatos: kiterjedt fenyőerdők, hatalmas homokdűnék és lila fenyérek váltakoznak, miközben gímszarvasok, vaddisznók és muflonok élnek itt szabadon. A park szívében található a híres Kröller-Müller Múzeum is. Természetismeret K7: Hogyan jöttek létre a park területén található hatalmas futóhomokdűnék?",
    ro: "Parcul Național Hoge Veluwe este cea mai mare rezervație naturală continuă din Olanda, situată în provincia Gelderland. Parcul a fost fondat la începutul secolului al XX-lea de un cuplu bogat, Anton Kröller și Helene Müller. Peisajul este extrem de divers: păduri extinse de pini, dune masive de nisip și mlaștini purpurii alternează, în timp ce cerbi roșii, mistreți și mufloni trăiesc aici în sălbăticie. În inima parcului se află, de asemenea, celebrul Muzeul Kröller-Müller. Științele naturii K7: Cum s-au format dunele masive de nisip mișcător din interiorul parcului?",
    en: "De Hoge Veluwe National Park in the province of Gelderland is the largest privately managed nature reserve in the Netherlands and one of the country's most beautiful landscapes. The park features enormous scenic diversity, ranging from dense coniferous and deciduous forests to vast, purple-blooming heathlands and dynamic sand drifts. Besides the rich wildlife, including red deer, wild boar, and mouflon, the park is famous for the Kröller-Müller Museum, which is situated right in the middle of nature and houses an outstanding Van Gogh collection. Visitors typically explore the park on the free white bicycles provided. Biology K6: De Hoge Veluwe has large, open areas of sand. Why do plants struggle to take root on these dry sand dunes?"
  },
    facts: {
    de: ["Größter zusammenhängender, privat verwalteter Nationalpark im Land.","Berühmt für das Angebot der 'Witte Fietsen' (weiße Gratis-Fahrräder).","Beherbergt das Kröller-Müller-Museum mit großem Skulpturengarten.","Die Landschaft reicht von Sanddünen bis zu ausgedehnten Wäldern.","Heimat von Wildtieren wie Rothirschen, Wildschweinen und Mufflons.","Das Jagdhaus St. Hubertus ist ein architektonisches Highlight.","Ursprünglich das private Jagdrevier des Ehepaars Kröller-Müller.","Bietet spektakuläre Aussichten zur Heideblüte im August."],
    hu: ["A legnagyobb egybefüggő, magánkézben lévő nemzeti park az országban.","Híres a 'Witte Fietsen' (ingyenes fehér kerékpárok) szolgáltatásról.","A Kröller-Müller Múzeumnak és annak nagy szoborparkjának ad otthont.","A táj a homokdűnéktől a kiterjedt erdőkig terjed.","Vadon élő állatok, pl. gímszarvasok, vaddisznók és muflonok otthona.","A St. Hubertus vadászház egy építészeti fénypont.","Eredetileg a Kröller-Müller házaspár magán vadászterülete volt.","Látványos kilátást kínál augusztusban, a hanga virágzásakor."],
    ro: ["Cel mai mare parc național continuu, administrat privat din țară.","Faimos pentru oferta de 'Witte Fietsen' (biciclete albe gratuite).","Găzduiește Muzeul Kröller-Müller cu o grădină mare de sculpturi.","Peisajul variază de la dune de nisip la păduri extinse.","Casa unor animale sălbatice precum cerbi roșii, mistreți și mufloni.","Cabana de vânătoare St. Hubertus este un punct culminant arhitectural.","A fost inițial terenul de vânătoare privat al cuplului Kröller-Müller.","Oferă vederi spectaculoase ale înfloririi bruyerei în luna august."],
    en: ["Largest continuous, privately managed national park in the country.","Famous for offering 'Witte Fietsen' (free white bicycles).","Houses the Kröller-Müller Museum with a large sculpture garden.","The landscape ranges from sand dunes to extensive forests.","Home to wildlife such as red deer, wild boar, and mouflon.","The St. Hubertus hunting lodge is an architectural highlight.","Originally the private hunting ground of the Kröller-Müller couple.","Offers spectacular views of the heather bloom in August."]
  },
      factsAdvanced: {
    de: [
      "Der Nationalpark wurde von dem Ehepaar Kröller-Müller gegründet, das ihr Land und ihre Kunstsammlung dem Staat stiftete.",
      "Im Park stehen den Besuchern rund 1.800 weiße Fahrräder (Witte Fietsen) kostenlos zur Verfügung.",
      "Das Kröller-Müller-Museum im Park besitzt die zweitgrößte Van-Gogh-Sammlung der Welt.",
      "Der Park ist ein wichtiger Lebensraum für die 'Big Four' der Niederlande: Rothirsch, Wildschwein, Mufflon und Reh."
    ],
    hu: ["A park látogatói ingyenesen használhatják a kihelyezett híres 'fehér kerékpárokat' a terület felfedezésére.", "A Kröller-Müller Múzeum a világ második legnagyobb Van Gogh-gyűjteményével büszkélkedhet.", "Az alapítók által építtetett Jachthuis Sint Hubertus kastély a park egyik építészeti remekműve.", "A park fenntartása szinte kizárólag a belépőjegyek bevételeiből történik, állami támogatás nélkül."],
    ro: [
      "Parcul național a fost fondat de cuplul Kröller-Müller, care a donat statului pământul și colecția lor de artă.",
      "În parc, vizitatorilor li se pun la dispoziție gratuit aproximativ 1.800 de biciclete albe (Witte Fietsen).",
      "Muzeul Kröller-Müller din parc deține a doua cea mai mare colecție Van Gogh din lume.",
      "Parcul este un habitat important pentru 'Cei Patru Mari' din Olanda: cerbul roșu, mistrețul, muflonul și căprioara."
    ],
    en: [
      "The national park was founded by the Kröller-Müller couple, who donated their land and art collection to the state.",
      "Around 1,800 white bicycles (Witte Fietsen) are available to visitors free of charge in the park.",
      "The Kröller-Müller Museum in the park holds the second-largest Van Gogh collection in the world.",
      "The park is a crucial habitat for the 'Big Four' of the Netherlands: red deer, wild boar, mouflon, and roe deer."
    ]
  }
  },
  {
    id: "NL-LM-ZAA", type: "landmark", parent: "NL-NH", coords: [4.82, 52.47],
    name: { de: "Zaanse Schans", hu: "Zaanse Schans", ro: "Zaanse Schans", en: "Zaanse Schans" },
    image: "/geo-images/netherlands/zaanse-schans.webp",
  description: {
    de: "Die Zaanse Schans in der Nähe von Amsterdam ist ein lebendiges Freilichtmuseum, das das niederländische Leben im 18. und 19. Jahrhundert perfekt konserviert hat. An den Ufern der Zaan reihen sich historische grüne Holzhäuser, traditionelle Handwerksbetriebe und mächtige Windmühlen, die noch heute in Betrieb sind. Hier können Besucher zusehen, wie Holzschuhe (Klompen) geschnitzt, Käse hergestellt oder Farbpigmente mit Windkraft gemahlen werden.",
    hu: "Az Amszterdam közelében található Zaanse Schans egy élő szabadtéri múzeum, amely tökéletesen megőrizte a 18. és 19. századi holland életet. A Zaan partján történelmi zöld faházak, hagyományos kézműves műhelyek és hatalmas szélmalmok sorakoznak, amelyek ma is működnek. Itt a látogatók megnézhetik, hogyan faragnak fapapucsot (klompen), hogyan készítenek sajtot vagy hogyan őrölnek festékpigmenteket szélenergiával.",
    ro: "Zaanse Schans, lângă Amsterdam, este un muzeu viu în aer liber care a păstrat perfect viața olandeză din secolele al XVIII-lea și al XIX-lea. Pe malurile Zaan-ului sunt aliniate case istorice verzi din lemn, ateliere tradiționale și mori de vânt masive care sunt încă în funcțiune. Aici vizitatorii pot urmări cum sunt sculptați saboții de lemn (klompen), se face brânză sau pigmenții de culoare sunt măcinați folosind energia eoliană.",
    en: "The Zaanse Schans near Amsterdam is a living open-air museum that has perfectly preserved Dutch life in the 18th and 19th centuries. Along the banks of the Zaan are lined up historic green wooden houses, traditional craft workshops, and massive windmills that are still in operation today. Here visitors can watch how wooden clogs (klompen) are carved, cheese is made, or color pigments are ground using wind power."
  },
      descriptionAdvanced: {
    de: "Zaanse Schans ist ein faszinierendes Freilichtmuseum in der Nähe von Amsterdam, das das industrielle und handwerkliche Leben der Niederlande im 18. und 19. Jahrhundert lebendig hält. Das Areal am Ufer des Flusses Zaan ist ein Ensemble historischer, grün gestrichener Holzhäuser, traditioneller Handwerksbetriebe und einer Reihe majestätischer, voll funktionsfähiger Windmühlen. Die Region Zaanstreek gilt historisch als das erste Industriegebiet der Welt, in dem Hunderte von Mühlen unter anderem Holz sägten, Öl pressten und Gewürze mahlten. Besucher können hier in authentischen Werkstätten zuschauen, wie Holzschuhe (Klompen) geschnitzt oder traditioneller Käse hergestellt werden. Geschichte K7: In der Zaanstreek trieben Windmühlen die ersten industriellen Maschinen an. Welche große Erfindung ersetzte im 19. Jahrhundert die Windkraft in den Fabriken?",
    hu: "A Zaanse Schans egy életteli szabadtéri múzeum Amszterdamtól északra, amely a 18. és 19. századi holland ipari forradalom emlékét őrzi. A területen található fűrészmalmok, olajütők, fűszer- és festékőrlő szélmalmok hűen mutatják be, hogyan működött a Zaan folyó mente, amely egykor Európa egyik legnagyobb és legrégebbi ipari központja volt több száz működő szélmalommal. A malmok mellett hagyományos zöld faházak, sajtüzem és fapapucs-készítő műhely is várja a látogatókat. Történelem K6: Miért tekinthető a Zaan folyó mente a világ első igazi ipari régiójának?",
    ro: "Zaanse Schans este un muzeu viu în aer liber la nord de Amsterdam, care păstrează amintirea revoluției industriale olandeze din secolele XVIII și XIX. Gaterul, presele de ulei, condimentele și morile de vânt pentru vopsea găsite în zonă arată fidel modul în care funcționa malul râului Zaan, cândva unul dintre cele mai mari și mai vechi centre industriale din Europa cu sute de mori de vânt funcționale. Lângă mori, vizitatorii pot găsi case tradiționale din lemn verde, o fabrică de brânză și un atelier de saboți. Istorie K6: De ce râul Zaan este considerat a fi prima regiune industrială adevărată din lume?",
    en: "Zaanse Schans is a fascinating open-air museum near Amsterdam that keeps the industrial and artisanal life of the Netherlands in the 18th and 19th centuries alive. The area on the banks of the river Zaan is an ensemble of historical, green-painted wooden houses, traditional craft workshops, and a series of majestic, fully functional windmills. The Zaanstreek region is historically considered the world's first industrial area, where hundreds of mills sawed wood, pressed oil, and ground spices, among other things. Visitors can watch in authentic workshops how wooden shoes (clogs) are carved or traditional cheese is made. History K7: In the Zaanstreek, windmills powered the first industrial machines. What great invention replaced wind power in factories in the 19th century?"
  },
    facts: {
    de: ["Vermittelt das Flair der Zaan-Region während der frühen Industrialisierung.","Eine Reihe von voll funktionsfähigen historischen Windmühlen.","Besucher können z.B. Gewürz-, Farb- und Sägemühlen besichtigen.","Traditionelle Herstellung von Gouda und Edamer Käse wird demonstriert.","Es gibt Werkstätten für die typischen holländischen Holzschuhe.","Die Gebäude wurden aus der gesamten Region hierher umgesiedelt.","Gehört zu den Top-Touristenattraktionen in der Nähe von Amsterdam.","Das Gebiet gilt als erstes echtes Industriegebiet der Welt."],
    hu: ["A Zaan régió hangulatát közvetíti a korai iparosodás idején.","Teljesen működőképes, történelmi szélmalmok sorozatát láthatjuk.","A látogatók fűszer-, festék- és fűrészmalmokat is megtekinthetnek.","Bemutatják a hagyományos Gouda és Edámi sajt készítését.","Műhelyek vannak a tipikus holland fapapucsokhoz is.","Az épületeket az egész régióból telepítették át ide.","Amszterdam közelében a legnépszerűbb turisztikai látványosságok közé tartozik.","A területet a világ első igazi ipari régiójának tartják."],
    ro: ["Transmite farmecul regiunii Zaan din timpul industrializării timpurii.","O serie de mori de vânt istorice complet funcționale.","Vizitatorii pot vizita mori de condimente, de culoare și gatere.","Sunt demonstrate producția tradițională de brânză Gouda și Edam.","Sunt ateliere pentru saboții de lemn tipici olandezi.","Clădirile au fost mutate aici din întreaga regiune.","Una dintre atracțiile turistice de top din apropiere de Amsterdam.","Zona este considerată a fi prima zonă industrială adevărată din lume."],
    en: ["Conveys the flair of the Zaan region during early industrialization.","A series of fully functional historic windmills.","Visitors can tour spice, dye, and sawmills, among others.","Traditional production of Gouda and Edam cheese is demonstrated.","There are workshops for the typical Dutch wooden clogs.","The buildings were relocated here from the entire region.","One of the top tourist attractions near Amsterdam.","The area is considered the world's first true industrial region."]
  },
      factsAdvanced: {
    de: [
      "Die Zaanstreek war im 17. Jahrhundert mit über 600 Windmühlen das größte Industriegebiet Europas.",
      "Die meisten historischen Gebäude der Zaanse Schans wurden in den 1960er Jahren aus anderen Dörfern der Region hierher verlegt.",
      "Die Holzsägemühlen der Region produzierten das Holz für die riesigen Flotten der Niederländischen Ostindien-Kompanie.",
      "Die Zaanse Schans ist eine der beliebtesten Touristenattraktionen der Niederlande mit über zwei Millionen Besuchern jährlich."
    ],
    hu: ["A Zaanse Schans malmainak és házainak nagy részét az 1960-as években teherautókon és hajókon szállították ide a régió más részeiről a megmentésük érdekében.", "A terület egykor több mint 600 működő szélmalomnak adott otthont.", "Itt található az ország első Albert Heijn élelmiszerboltjának eredeti épülete.", "A malmok közül sok ma is aktívan termel, például fűszereket, lenmagolajat vagy lisztet."],
    ro: [
      "Regiunea Zaan a fost cea mai mare zonă industrială din Europa în secolul al XVII-lea, cu peste 600 de mori de vânt.",
      "Majoritatea clădirilor istorice din Zaanse Schans au fost mutate aici în anii 1960 din alte sate din regiune.",
      "Gaterele de lemn din regiune au produs lemnul pentru flotele uriașe ale Companiei Olandeze a Indiilor de Est.",
      "Zaanse Schans este una dintre cele mai populare atracții turistice din Țările de Jos, cu peste două milioane de vizitatori anual."
    ],
    en: [
      "The Zaanstreek was the largest industrial area in Europe in the 17th century, with over 600 windmills.",
      "Most of the historical buildings in Zaanse Schans were relocated here from other villages in the region in the 1960s.",
      "The region's wood-sawing mills produced the timber for the massive fleets of the Dutch East India Company.",
      "Zaanse Schans is one of the most popular tourist attractions in the Netherlands, with over two million visitors annually."
    ]
  }
  },
  {
    id: "NL-LM-ERA", type: "landmark", parent: "NL-ZH", coords: [4.49, 51.90],
    name: { de: "Erasmusbrücke", hu: "Erasmus híd", ro: "Podul Erasmus", en: "Erasmus Bridge" },
    image: "/geo-images/netherlands/erasmus-bridge.webp",
  description: {
    de: "Die Erasmusbrücke, oft liebevoll 'Der Schwan' genannt, ist das unumstrittene architektonische Wahrzeichen des modernen Rotterdam. Mit ihrem markanten, asymmetrischen 139 Meter hohen Pylon spannt sich die Schrägseilbrücke über den Fluss Neue Maas und verbindet das Zentrum mit dem aufstrebenden Viertel 'Kop van Zuid'. Seit ihrer Eröffnung 1996 prägt sie die Skyline und steht symbolisch für die ständige Erneuerung der Hafenstadt.",
    hu: "Az Erasmus-hidat, amelyet gyakran 'A Hattyú' néven emlegetnek, a modern Rotterdam vitathatatlan építészeti szimbóluma. Feltűnő, aszimmetrikus 139 méter magas pilonjával a ferdekábeles híd az Új-Maas folyó felett ível át, és összeköti a központot a feltörekvő 'Kop van Zuid' negyeddel. 1996-os megnyitása óta meghatározza a városképet, és a kikötőváros folyamatos megújulását szimbolizálja.",
    ro: "Podul Erasmus, denumit adesea cu afecțiune 'Lebăda', este reperul arhitectural incontestabil al Rotterdamului modern. Cu pilonul său izbitor, asimetric de 139 de metri înălțime, podul hobanat se întinde peste râul Nieuwe Maas și conectează centrul cu districtul în plină dezvoltare 'Kop van Zuid'. De la deschiderea sa în 1996, a definit linia orizontului și este un simbol al reînnoirii constante a orașului-port.",
    en: "The Erasmus Bridge, often affectionately called 'The Swan', is the undisputed architectural landmark of modern Rotterdam. With its striking, asymmetrical 139-meter-high pylon, the cable-stayed bridge spans the Nieuwe Maas river and connects the center with the emerging 'Kop van Zuid' district. Since its opening in 1996, it has defined the skyline and symbolizes the constant renewal of the port city."
  },
      descriptionAdvanced: {
    de: "Die Erasmusbrücke (Erasmusbrug) ist das unverkennbare architektonische Wahrzeichen der Stadt Rotterdam und überspannt majestätisch den Fluss Nieuwe Maas. Die 1996 fertiggestellte Schrägseilbrücke ist ein Meisterwerk der modernen Ingenieurskunst, entworfen von dem Architekten Ben van Berkel. Mit ihrem 139 Meter hohen, asymmetrisch geknickten Stahlpylon, der von Dutzenden von Stahlseilen gehalten wird, hat sich die Brücke den eleganten Spitznamen 'Der Schwan' verdient. Sie verbindet nicht nur das historische Zentrum mit dem modernen Entwicklungsviertel Kop van Zuid, sondern ist auch ein Symbol für den innovativen Wiederaufbau und die Dynamik Rotterdams. Physik K8: Die Erasmusbrücke ist eine Schrägseilbrücke. Wie verteilen die starken Stahlseile das enorme Gewicht der Fahrbahn auf den Pylon?",
    hu: "Az Erasmus-híd (Erasmusbrug) Rotterdam egyik legfontosabb építészeti szimbóluma, amely a Maas folyó felett ível át, összekötve a város északi és déli részét. Az 1996-ban átadott, 800 méter hosszú ferdekábeles hidat Ben van Berkel építész tervezte. Aszimmetrikus, 139 méter magas, fehéren ragyogó pilonja miatt a helyiek gyakran csak 'A Hattyú' (De Zwaan) néven emlegetik. A híd nemcsak közlekedési, hanem vizuális kapocs is Rotterdam modern felhőkarcoló-negyede (Kop van Zuid) és a történelmi központ között. Fizika K8: Milyen mérnöki előnyökkel jár a ferdekábeles híd kialakítás a hagyományos függőhidakkal szemben?",
    ro: "Podul Erasmus (Erasmusbrug) este un simbol arhitectural inconfundabil al Rotterdamului și traversează maiestuos râul Nieuwe Maas. Finalizat în 1996, podul hobanat, lung de 800 de metri, a fost proiectat de arhitectul Ben van Berkel. Datorită pilonului său asimetric din oțel, înalt de 139 de metri și susținut de cabluri groase, localnicii îl numesc adesea 'Lebăda' (De Zwaan). Podul nu este doar o legătură de transport, ci și una vizuală între cartierul modern de zgârie-nori al Rotterdamului (Kop van Zuid) și centrul istoric. Fizică K8: Ce avantaje inginerești oferă designul unui pod hobanat în comparație cu podurile suspendate tradiționale?",
    en: "The Erasmus Bridge (Erasmusbrug) is the unmistakable architectural landmark of the city of Rotterdam, majestically spanning the river Nieuwe Maas. Completed in 1996, the cable-stayed bridge is a masterpiece of modern engineering designed by architect Ben van Berkel. With its 139-meter-high, asymmetrically bent steel pylon held by dozens of steel cables, the bridge has earned the elegant nickname 'The Swan'. It not only connects the historical center with the modern Kop van Zuid development district, but is also a symbol of Rotterdam's innovative reconstruction and dynamism. Physics K8: The Erasmus Bridge is a cable-stayed bridge. How do the strong steel cables distribute the enormous weight of the roadway to the pylon?"
  },
    facts: {
    de: ["Architektonisches Wahrzeichen von Rotterdam, erbaut von Ben van Berkel.","Aufgrund ihrer Form wird sie oft 'De Zwaan' (Der Schwan) genannt.","Verbindet das nördliche und südliche Rotterdam über die Neue Maas.","Wurde 1996 von Königin Beatrix offiziell eröffnet.","Die Brücke ist 802 Meter lang und der Pylon 139 Meter hoch.","Besitzt eine Klappbrücke für sehr große Schiffe.","Spielt eine zentrale Rolle bei städtischen Events und Marathonläufen.","Ist nachts spektakulär beleuchtet und dominiert die Skyline."],
    hu: ["Rotterdam építészeti jelképe, Ben van Berkel tervezte.","Alakja miatt gyakran 'De Zwaan'-nak (A Hattyú) is nevezik.","Az Új-Maas folyó felett köti össze Észak- és Dél-Rotterdamot.","1996-ban hivatalosan Beatrix királynő nyitotta meg.","A híd 802 méter hosszú, és a pilon 139 méter magas.","Felnyitható résszel is rendelkezik a nagyon nagy hajók számára.","Központi szerepet játszik a városi eseményekben és maratonokon.","Éjszaka látványosan kivilágítva uralja a városképet."],
    ro: ["Reper arhitectural al Rotterdamului, construit de Ben van Berkel.","Datorită formei sale, este numită adesea 'De Zwaan' (Lebăda).","Conectează Rotterdamul de nord cu cel de sud peste Nieuwe Maas.","A fost deschis oficial în 1996 de Regina Beatrix.","Podul are 802 metri lungime și pilonul are 139 de metri înălțime.","Are o secțiune basculantă pentru navele foarte mari.","Joacă un rol central în evenimentele urbane și la maratoane.","Este iluminat spectaculos noaptea și domină orizontul."],
    en: ["Architectural landmark of Rotterdam, built by Ben van Berkel.","Because of its shape, it is often called 'De Zwaan' (The Swan).","Connects northern and southern Rotterdam across the Nieuwe Maas.","Was officially opened in 1996 by Queen Beatrix.","The bridge is 802 meters long and the pylon is 139 meters high.","Has a bascule section for very large ships.","Plays a central role in city events and marathons.","Is spectacularly illuminated at night and dominates the skyline."]
  },
      factsAdvanced: {
    de: [
      "Die Brücke ist nach dem berühmten Renaissance-Humanisten Erasmus von Rotterdam benannt.",
      "Mit einer Länge von 802 Metern ist sie eine der längsten Brücken der Niederlande.",
      "Im südlichen Teil besitzt die Brücke eine 89 Meter lange Klappbrücke, um großen Schiffen die Durchfahrt zu ermöglichen; sie ist die schwerste Klappbrücke Westeuropas.",
      "Die markante Form brachte der Brücke den weit verbreiteten Spitznamen 'De Zwaan' (Der Schwan) ein."
    ],
    hu: ["Az Erasmus-híd déli részén egy felnyitható (bascule) szakasz található a legnagyobb tengerjáró hajók áthaladásához.", "Az átadása utáni első hetekben erős szélben a híd kábelei veszélyesen rezonálni kezdtek, amit utólagos lengéscsillapítókkal orvosoltak.", "A híd a híres humanista filozófusról, Rotterdami Erasmusról kapta a nevét.", "Gyakran szolgál nagyszabású események, például a Red Bull Air Race vagy zenei fesztiválok háttereként."],
    ro: [
      "Podul este numit după faimosul umanist renascentist Erasmus din Rotterdam.",
      "Cu o lungime de 802 metri, este unul dintre cele mai lungi poduri din Olanda.",
      "În partea de sud, podul are o secțiune basculantă de 89 de metri lungime pentru a permite trecerea navelor mari; este cel mai greu pod basculant din Europa de Vest.",
      "Forma izbitoare a adus podului porecla populară 'De Zwaan' (Lebăda)."
    ],
    en: [
      "The bridge is named after the famous Renaissance humanist Erasmus of Rotterdam.",
      "With a length of 802 meters, it is one of the longest bridges in the Netherlands.",
      "In its southern section, the bridge has an 89-meter-long bascule bridge to allow large ships to pass; it is the heaviest bascule bridge in Western Europe.",
      "Its striking shape earned the bridge the widespread nickname 'De Zwaan' (The Swan)."
    ]
  }
  },
  {
    id: "NL-LM-MAD", type: "landmark", parent: "NL-ZH", coords: [4.29, 52.09],
    name: { de: "Madurodam", hu: "Madurodam", ro: "Madurodam", en: "Madurodam" },
    image: "/geo-images/netherlands/madurodam.webp",
  description: {
    de: "Madurodam ist ein einzigartiger Miniaturpark in Den Haag, der Besuchern erlaubt, die gesamten Niederlande an nur einem Nachmittag zu entdecken. Auf einem Maßstab von 1:25 sind hier die berühmtesten Bauwerke, Landschaften und technischen Meisterleistungen des Landes detailgetreu nachgebaut. Es gibt animierte Züge, fahrende Schiffe am Rotterdamer Hafen und blühende Mini-Tulpenfelder. Der Park ist ein lehrreiches Erlebnis, besonders für Familien.",
    hu: "A Madurodam egy egyedülálló miniatűr park Hágában, amely lehetővé teszi a látogatók számára, hogy egyetlen délután alatt felfedezzék egész Hollandiát. Az ország leghíresebb épületei, tájai és műszaki remekművei 1:25 méretarányban részletesen újra vannak alkotva. Vannak animált vonatok, mozgó hajók a rotterdami kikötőben és virágzó mini tulipánmezők. A park tanulságos élmény, különösen családok számára.",
    ro: "Madurodam este un parc în miniatură unic în Haga, care permite vizitatorilor să descopere întreaga Olanda într-o singură după-amiază. Cele mai faimoase clădiri, peisaje și capodopere inginerești ale țării au fost recreate în detaliu la scară 1:25. Există trenuri animate, nave în mișcare în portul Rotterdam și câmpuri de lalele mini înflorite. Parcul este o experiență educațională, mai ales pentru familii.",
    en: "Madurodam is a unique miniature park in The Hague that allows visitors to discover the entire Netherlands in just one afternoon. At a scale of 1:25, the country's most famous buildings, landscapes, and engineering feats are recreated in detail. There are animated trains, moving ships in the port of Rotterdam, and blooming mini tulip fields. The park is an educational experience, especially for families."
  },
      descriptionAdvanced: {
    de: "Madurodam ist ein einzigartiger Miniaturpark in Den Haag, der die architektonischen, historischen und industriellen Höhepunkte der Niederlande im Maßstab 1:25 originalgetreu präsentiert. Der Park wurde 1952 als Gedenkstätte für den im Zweiten Weltkrieg umgekommenen Widerstandskämpfer George Maduro sowie als Wohltätigkeitsstiftung für Kinder gegründet. Besucher können hier durch eine detailliert nachgebaute niederländische Landschaft spazieren, die von fahrenden Miniaturzügen, schwimmenden Schiffen und funktionierenden Windmühlen belebt wird. Madurodam ist nicht nur eine Touristenattraktion, sondern vermittelt spielerisch Wissen über den niederländischen Wasserbau, die Landwirtschaft und die Geschichte des Landes. Sachkunde K5: In Madurodam ist alles im Maßstab 1:25 gebaut. Wenn ein echtes Gebäude 25 Meter hoch ist, wie hoch ist dann das Modell im Park?",
    hu: "A Madurodam egy lenyűgöző miniatűr park Hágában, amely az egész holland társadalom, építészet és történelem 1:25 méretarányú, élethű mását mutatja be. A parkot 1952-ben nyitották meg George Maduro, egy a második világháborúban hősi halált halt curaçaói ellenálló emlékére. A látogatók végigsétálhatnak a miniatűr csatornákon, a mozgó vonatok, szélmalmok és hajók között, megcsodálva az ország legfontosabb épületeinek aprólékos modelljeit. A park bevételeit alapítása óta gyermekeket segítő jótékonysági szervezetek kapják. Társadalomismeret K5: Milyen céllal hozták létre a Madurodam parkot, és hogyan szolgálja ma a közösséget?",
    ro: "Madurodam este un parc tematic în miniatură fascinant din Haga, care prezintă o replică fidelă la scara 1:25 a întregii societăți, arhitecturi și istorii olandeze. Parcul a fost deschis în 1952 în memoria lui George Maduro, un luptător de rezistență din Curaçao care a murit eroic în al Doilea Război Mondial. Vizitatorii se pot plimba de-a lungul canalelor în miniatură, printre trenuri în mișcare, mori de vânt și nave, admirând modelele meticuloase ale celor mai importante clădiri din țară. De la înființare, veniturile parcului au fost donate organizațiilor caritabile pentru copii. Studii sociale K5: În ce scop a fost creat parcul Madurodam și cum servește el comunitatea astăzi?",
    en: "Madurodam is a unique miniature park in The Hague that faithfully presents the architectural, historical, and industrial highlights of the Netherlands on a 1:25 scale. The park was founded in 1952 as a memorial to George Maduro, a resistance fighter who died in World War II, and as a charitable foundation for children. Visitors can stroll through a meticulously recreated Dutch landscape enlivened by moving miniature trains, floating ships, and working windmills. Madurodam is not just a tourist attraction; it playfully imparts knowledge about Dutch water management, agriculture, and the country's history. Science K5: Everything in Madurodam is built on a 1:25 scale. If a real building is 25 meters high, how high is the model in the park?"
  },
    facts: {
    de: ["Präsentiert Highlights der Niederlande im Maßstab 1:25.","Wurde 1952 als Denkmal für den Kriegshelden George Maduro eröffnet.","Gewinne des Parks gehen an wohltätige Einrichtungen für Kinder.","Viele Modelle sind interaktiv und in Bewegung (Züge, Flugzeuge, Hafen).","Es gibt Nachbildungen vom Schiphol-Flughafen und dem Rijksmuseum.","Zeigt auch eindrucksvoll die niederländische Wasserwirtschaft.","Ist eine der beliebtesten Familienattraktionen der Niederlande.","Wird kontinuierlich erweitert und digital modernisiert."],
    hu: ["1:25 méretarányban mutatja be Hollandia legfőbb látványosságait.","1952-ben nyílt meg George Maduro háborús hős emlékére.","A park nyereségét gyermekeket segítő jótékonysági szervezetek kapják.","Számos modell interaktív és mozog (vonatok, repülők, kikötő).","Itt látható a Schiphol repülőtér és a Rijksmuseum másolata is.","Látványosan mutatja be a holland vízgazdálkodást.","Hollandia egyik legnépszerűbb családi látványossága.","Folyamatosan bővítik és digitálisan modernizálják."],
    ro: ["Prezintă aspectele esențiale ale Olandei la scară 1:25.","Deschis în 1952 ca un memorial pentru eroul de război George Maduro.","Profiturile parcului sunt destinate organizațiilor de caritate pentru copii.","Multe modele sunt interactive și în mișcare (trenuri, avioane, port).","Există replici ale aeroportului Schiphol și ale Rijksmuseum.","De asemenea, demonstrează în mod impresionant managementul apei olandez.","Este una dintre cele mai populare atracții de familie din Olanda.","Este în continuă expansiune și modernizat digital."],
    en: ["Presents highlights of the Netherlands at a 1:25 scale.","Was opened in 1952 as a memorial for the war hero George Maduro.","Profits from the park go to children's charities.","Many models are interactive and in motion (trains, airplanes, port).","There are replicas of Schiphol Airport and the Rijksmuseum.","Also impressively demonstrates Dutch water management.","Is one of the most popular family attractions in the Netherlands.","Is continuously expanded and digitally modernized."]
  },
      factsAdvanced: {
    de: [
      "Madurodam spendet seinen gesamten Gewinn an Wohltätigkeitsorganisationen, die sich für Kinder einsetzen.",
      "Die Modelle im Park sind exakte Nachbildungen echter niederländischer Wahrzeichen im Maßstab 1:25.",
      "Prinzessin (später Königin) Beatrix war die erste offizielle Bürgermeisterin der Miniaturstadt Madurodam.",
      "Der Park zeigt eine sich ständig bewegende Infrastruktur, darunter eines der größten Modelleisenbahnnetze der Welt."
    ],
    hu: ["A parkban minden fa és bokor valódi, amelyeket folyamatos metszéssel tartanak a modellépületekhez illő 1:25-ös arányban.", "A Madurodam a világ egyik legfejlettebb miniatűr vasúthálózatával rendelkezik, amely mintegy 4 km hosszú.", "A park 1952-es megnyitásakor Beatrix hercegnő (a későbbi királynő) lett a miniatűr város első 'polgármestere'.", "Az épületek elkészítése gyakran hónapokat vagy éveket vesz igénybe a 3D-szkennelési technológia és a kézi munka ötvözésével."],
    ro: [
      "Madurodam își donează tot profitul organizațiilor caritabile care ajută copiii.",
      "Modelele din parc sunt replici exacte ale obiectivelor turistice olandeze reale la scara 1:25.",
      "Prințesa (mai târziu Regina) Beatrix a fost primul primar oficial al orașului în miniatură Madurodam.",
      "Parcul prezintă o infrastructură în mișcare constantă, inclusiv una dintre cele mai mari rețele de cale ferată în miniatură din lume."
    ],
    en: [
      "Madurodam donates its entire profit to charities dedicated to helping children.",
      "The models in the park are exact replicas of real Dutch landmarks on a 1:25 scale.",
      "Princess (later Queen) Beatrix was the first official mayor of the miniature city of Madurodam.",
      "The park features a constantly moving infrastructure, including one of the world's largest model railway networks."
    ]
  }
  },
  {
    id: "NL-LM-EFT", type: "landmark", parent: "NL-NB", coords: [5.05, 51.65],
    name: { de: "Efteling", hu: "Efteling", ro: "Efteling", en: "Efteling" },
    image: "/geo-images/netherlands/efteling.webp",
  description: {
    de: "Efteling, gelegen in Nordbrabant, ist der größte, bekannteste und zauberhafteste Freizeitpark der Niederlande und zählt zu den ältesten in Europa. Ursprünglich als Märchenwald mit von Anton Pieck entworfenen Szenen gestartet, bietet der Park heute eine perfekte Mischung aus nostalgischen Märchen, spektakulären Achterbahnen und magischen Dark-Rides. Die liebevolle Gestaltung und das Thema Magie machen Efteling zu einer weltklasse Attraktion für alle Altersgruppen.",
    hu: "Az Észak-Brabantban található Efteling Hollandia legnagyobb, legismertebb és legvarázslatosabb vidámparkja, valamint Európa egyik legrégebbi ilyen létesítménye. Eredetileg Anton Pieck által tervezett jelenetekből álló meseerdőként indult, a park ma a nosztalgikus mesék, a látványos hullámvasutak és a varázslatos sötét túrák (dark rides) tökéletes keverékét kínálja. A szeretetteljes kialakítás és a varázslat témája teszi az Eftelinget világszínvonalú látványossággá minden korosztály számára.",
    ro: "Efteling, situat în Brabantul de Nord, este cel mai mare, mai cunoscut și mai magic parc de distracții din Olanda și unul dintre cele mai vechi din Europa. Începând inițial ca o pădure de basm cu scene proiectate de Anton Pieck, parcul oferă acum un amestec perfect de basme nostalgice, montagne russe spectaculoase și atracții întunecate magice. Designul minunat și tema magiei fac din Efteling o atracție de clasă mondială pentru toate vârstele.",
    en: "Efteling, located in North Brabant, is the largest, best-known, and most magical amusement park in the Netherlands and one of the oldest in Europe. Originally starting as a fairytale forest with scenes designed by Anton Pieck, the park now offers a perfect mix of nostalgic fairytales, spectacular roller coasters, and magical dark rides. The loving design and the theme of magic make Efteling a world-class attraction for all ages."
  },
      descriptionAdvanced: {
    de: "Efteling ist der größte und älteste Freizeitpark der Niederlande, gelegen im südniederländischen Kaatsheuvel in der Provinz Nordbrabant. Er öffnete 1952 seine Tore als Naturpark mit einem liebevoll gestalteten Märchenwald, der vom berühmten niederländischen Illustrator Anton Pieck entworfen wurde. Sein romantischer, nostalgischer Zeichenstil prägt bis heute das Erscheinungsbild des gesamten Parks. Im Laufe der Jahrzehnte hat sich Efteling zu einem der leading Themenparks Europas entwickelt, der spektakuläre Achterbahnen und aufwendige Dark Rides in dichten Wäldern versteckt und dabei stets seinem märchenhaften und mystischen Charakter treu geblieben ist. Kunst K5: Anton Pieck entwarf Efteling mit einem nostalgischen Zeichenstil. Warum nutzen Märchenparks oft alte und traditionelle Baustile für ihre Kulissen?",
    hu: "Az Efteling Európa egyik legrégebbi és leglátogatottabb vidámparkja, amely Észak-Brabant tartományban, Kaatsheuvelben található. A park 1952-ben nyílt meg egyetlen Meseerdővel (Sprookjesbos), amelyet a híres holland illusztrátor, Anton Pieck tervezett. Sikerének titka a romantikus, részletgazdag dizájnban és a hagyományos európai mesék varázslatos atmoszférájának megteremtésében rejlik. Mára egy modern, hullámvasutakkal és sötét utazásokkal (dark rides) teli, gigantikus élményparkká nőtte ki magát. Irodalom K5: Milyen európai mesék karakterei jelennek meg leggyakrabban az Efteling park Meseerdejében?",
    ro: "Efteling este cel mai mare și mai vechi parc de distracții din Olanda, situat în Kaatsheuvel, provincia Brabantul de Nord. Și-a deschis porțile în 1952 cu o Pădure de Basm (Sprookjesbos) proiectată cu dragoste de faimosul ilustrator olandez Anton Pieck. Secretul succesului său constă în designul romantic și detaliat și în crearea atmosferei magice a basmelor tradiționale europene. Astăzi a devenit un gigantic parc de distracții modern, plin de montagne russe și atracții întunecate (dark rides). Literatură K5: Personajele din ce basme europene apar cel mai des în Pădurea de Basm a parcului Efteling?",
    en: "Efteling is the largest and oldest amusement park in the Netherlands, located in Kaatsheuvel in the southern province of North Brabant. It opened its gates in 1952 as a nature park with a lovingly designed Fairytale Forest created by the famous Dutch illustrator Anton Pieck. His romantic, nostalgic drawing style still characterizes the appearance of the entire park today. Over the decades, Efteling has developed into one of Europe's leading theme parks, hiding spectacular roller coasters and elaborate dark rides in dense forests while always remaining true to its fairytale and mystical character. Art K5: Anton Pieck designed Efteling with a nostalgic drawing style. Why do fairytale parks often use old and traditional architectural styles for their sets?"
  },
    facts: {
    de: ["Größter und besucherstärkster Freizeitpark der Niederlande.","Geöffnet 1952, ist er älter als die meisten Disney-Parks.","Bekannt für den nostalgischen Märchenwald (Sprookjesbos).","Das romantische Design stammt maßgeblich vom Künstler Anton Pieck.","Bietet Weltklasse-Achterbahnen wie den Dive-Coaster 'Baron 1898'.","Symbol des Parks ist die magische Figur 'Pardoes'.","Der Park ist an 365 Tagen im Jahr geöffnet.","Dazu gehören auch Übernachtungsmöglichkeiten und eine Theatershow."],
    hu: ["Hollandia legnagyobb és leglátogatottabb vidámparkja.","1952-ben nyílt meg, így régebbi a legtöbb Disney-parknál.","Nosztalgikus meseerdejéről (Sprookjesbos) ismert.","A romantikus dizájn nagyrészt Anton Pieck művész munkája.","Világszínvonalú hullámvasutakat kínál, mint a 'Baron 1898' szabadeséses.","A park jelképe 'Pardoes', a varázslatos figura.","A park az év 365 napján nyitva tart.","Szálláshelyeket és egy színházi műsort is magában foglal."],
    ro: ["Cel mai mare și mai vizitat parc de distracții din Olanda.","Deschis în 1952, este mai vechi decât majoritatea parcurilor Disney.","Cunoscut pentru pădurea nostalgică a basmelor (Sprookjesbos).","Designul romantic provine în mare măsură de la artistul Anton Pieck.","Oferă montagne russe de talie mondială precum Dive Coaster 'Baron 1898'.","Simbolul parcului este figura magică 'Pardoes'.","Parcul este deschis 365 de zile pe an.","Include, de asemenea, opțiuni de cazare și un spectacol de teatru."],
    en: ["Largest and most visited amusement park in the Netherlands.","Opened in 1952, it is older than most Disney parks.","Known for the nostalgic fairytale forest (Sprookjesbos).","The romantic design is largely the work of artist Anton Pieck.","Offers world-class roller coasters like the dive coaster 'Baron 1898'.","The symbol of the park is the magical figure 'Pardoes'.","The park is open 365 days a year.","Also includes overnight accommodations and a theater show."]
  },
      factsAdvanced: {
    de: [
      "Efteling ist dreimal so alt wie das Disneyland in Paris und diente Walt Disney als frühe Inspirationsquelle.",
      "Der Märchenwald (Sprookjesbos) war die erste Attraktion des Parks und zeigt noch heute klassische Märchen der Gebrüder Grimm.",
      "Efteling ist einer der meistbesuchten Freizeitparks in Europa mit über fünf Millionen Gästen pro Jahr.",
      "Ein bekanntes Markenzeichen des Parks sind die Papierschlucker (Holle Bolle Gijs), die Besucher auffordern, Müll in ihre Münder zu werfen."
    ],
    hu: ["Az Efteling három évvel korábban nyílt meg, mint az első amerikai Disneyland.", "A park ikonikus figurája Langnek (Hosszúnyakú), a meseerdő lakója, és a varázslatos papírkosár, Holle Bolle Gijs, aki megeszi a szemetet.", "A park évente több mint 5 millió látogatót fogad, ami Hollandia lakosságának jelentős részét teszi ki.", "A Fata Morgana, egy Ezeregyéjszaka témájú csónakos utazás, Anton Pieck utolsó nagy tervezési munkája volt."],
    ro: [
      "Efteling este de trei ori mai vechi decât Disneyland Paris și a servit ca sursă timpurie de inspirație pentru Walt Disney.",
      "Pădurea Basmelor (Sprookjesbos) a fost prima atracție a parcului și încă prezintă basme clasice ale Fraților Grimm.",
      "Efteling este unul dintre cele mai vizitate parcuri de distracții din Europa, cu peste cinci milioane de oaspeți anual.",
      "Un semn distinctiv bine-cunoscut al parcului sunt mâncătorii de hârtie (Holle Bolle Gijs), care cer vizitatorilor să arunce gunoiul în gura lor."
    ],
    en: [
      "Efteling is three times older than Disneyland in Paris and served as an early source of inspiration for Walt Disney.",
      "The Fairytale Forest (Sprookjesbos) was the park's first attraction and still features classic tales by the Brothers Grimm.",
      "Efteling is one of the most visited amusement parks in Europe, with over five million guests a year.",
      "A well-known trademark of the park are the paper gobblers (Holle Bolle Gijs), which ask visitors to throw trash into their mouths."
    ]
  }
  },
  {
    id: "NL-LM-ZUI", type: "landmark", parent: "NL", coords: [5.40, 52.60],
    name: { de: "Zuiderzee", hu: "Zuiderzee", ro: "Zuiderzee", en: "Zuiderzee" },
    image: "/geo-images/netherlands/zuiderzee.webp",
  description: {
    de: "Die Zuiderzee war historisch eine große, flache Bucht der Nordsee im Zentrum der Niederlande. Jahrhundertelang war sie ein bedeutendes Fischereigebiet und Handelsroute, brachte aber auch gefährliche Sturmfluten tief ins Land. Um die Überschwemmungsgefahr dauerhaft zu bannen, wurde die Zuiderzee im 20. Jahrhundert durch den Bau des Afsluitdijk (Abschlussdeich) vom Meer abgeschnitten, was zur Entstehung des Süßwassersees IJsselmeer führte.",
    hu: "A Zuiderzee történelmileg az Északi-tenger nagy, sekély öble volt Hollandia központjában. Évszázadokon át fontos halászati terület és kereskedelmi útvonal volt, de veszélyes vihardagályokat is hozott mélyen az ország belsejébe. Az árvízveszély tartós megszüntetése érdekében a 20. században az Afsluitdijk (Zárógát) megépítésével elvágták a Zuiderzeet a tengertől, ami az édesvizű IJsselmeer kialakulásához vezetett.",
    ro: "Zuiderzee a fost istoric un golf mare și puțin adânc al Mării Nordului, în centrul Olandei. De secole, a fost o importantă zonă de pescuit și rută comercială, dar a adus și inundații periculoase cauzate de furtuni adânc în interior. Pentru a elimina definitiv riscul inundațiilor, Zuiderzee a fost separată de mare în secolul al XX-lea prin construcția Afsluitdijk (Barajul de închidere), ducând la formarea lacului de apă dulce IJsselmeer.",
    en: "The Zuiderzee was historically a large, shallow bay of the North Sea in the center of the Netherlands. For centuries it was an important fishing area and trade route, but it also brought dangerous storm surges deep inland. To permanently eliminate the risk of flooding, the Zuiderzee was cut off from the sea in the 20th century by the construction of the Afsluitdijk (Enclosure Dam), leading to the creation of the freshwater lake IJsselmeer."
  },
      descriptionAdvanced: {
    de: "Die Zuiderzee war historisch eine große, flache und salzige Meeresbucht im Norden der Niederlande, die direkt mit der Nordsee verbunden war. Sie spielte jahrhundertelang eine zentrale Rolle für die Fischerei und den maritimen Handel niederländischer Küstenstädte, stellte jedoch gleichzeitig eine ständige Bedrohung durch verheerende Sturmfluten dar. Um das Land endgültig vor dem Wasser zu schützen, wurde 1932 der gigantische Abschlussdeich (Afsluitdijk) vollendet, der die Bucht von der Nordsee abtrennte. Diese Meisterleistung des Wasserbaus verwandelte das wilde Binnenmeer in den heutigen, ruhigen und ausgedehnten Süßwassersee IJsselmeer. Geografie K7: Die Zuiderzee wurde durch einen Deich zum See gemacht. Wie wird das Salzwasser im Laufe der Zeit auf natürliche Weise zu Süßwasser?",
    hu: "A Zuiderzeemuseum Enkhuizen városában található szabadtéri és beltéri múzeum, amely a Zuiderzee (Déli-tenger) partvidékének kultúráját és mindennapjait mutatja be a 19. század végétől a 20. század elejéig. Amikor az Afsluitdijk gát megépítésével a tengert elzárták és édesvízű tóvá (IJsselmeer) változtatták, a környékbeli halászfalvak évszázados életmódja örökre megváltozott. A múzeum eredeti, tégláról téglára áttelepített házakkal, hagyományos mesterségekkel és halfüstölőkkel őrzi ezt a letűnt világot. Történelem K7: Milyen drasztikus gazdasági és társadalmi változásokat hozott a halászfalvak életében a Zuiderzee tenger lezárása?",
    ro: "Zuiderzee a fost istoric un golf mare și puțin adânc al Mării Nordului, conectat direct la mare. Timp de secole, a jucat un rol central în pescuitul și comerțul maritim al orașelor de coastă olandeze, dar a reprezentat, de asemenea, o amenințare constantă prin inundații devastatoare. Pentru a proteja definitiv uscatul, în 1932 a fost finalizat giganticul baraj Afsluitdijk, separând golful de Marea Nordului. Această capodoperă a ingineriei hidraulice a transformat marea sălbatică interioară în calmul și extinsul lac cu apă dulce de astăzi, IJsselmeer. Geografie K7: Marea Zuiderzee a fost transformată într-un lac printr-un dig. Cum devine în mod natural apa sărată apă dulce de-a lungul timpului?",
    en: "The Zuiderzee was historically a large, shallow, and salty bay in the north of the Netherlands that was directly connected to the North Sea. For centuries, it played a central role in fishing and maritime trade for Dutch coastal towns, but at the same time posed a constant threat of devastating storm surges. To permanently protect the land from the water, the massive Afsluitdijk (Enclosure Dike) was completed in 1932, cutting the bay off from the North Sea. This masterpiece of water engineering transformed the wild inland sea into today's tranquil and expansive freshwater lake, the IJsselmeer. Geography K7: The Zuiderzee was turned into a lake by a dike. How does the saltwater naturally become freshwater over time?"
  },
    facts: {
    de: ["Ehemalige flache Nordseebucht im Herzen der Niederlande.","Wurde 1932 durch den Afsluitdijk vom offenen Meer abgetrennt.","Verwandelte sich danach in den Süßwassersee IJsselmeer.","Diente jahrhundertelang der Fischerei und dem Seehandel.","Verursachte in der Vergangenheit schwere Hochwasserkatastrophen.","Das Zuiderzeemuseum in Enkhuizen bewahrt die Geschichte der Region.","Aus großen Teilen des Meeresbodens entstand die Provinz Flevoland.","Alte Zuiderzee-Hafendörfer wie Urk verloren ihren direkten Meerzugang."],
    hu: ["Korábban egy sekély Északi-tengeri öböl Hollandia szívében.","1932-ben az Afsluitdijk (Zárógát) vágta el a nyílt tengertől.","Ezt követően az édesvizű IJsselmeer-ré alakult át.","Évszázadokon át halászatot és tengeri kereskedelmet szolgált.","A múltban súlyos árvízkatasztrófákat okozott.","Az enkhuizeni Zuiderzee Múzeum megőrzi a régió történetét.","A tengerfenék nagy részéből jött létre Flevoland tartomány.","A régi kikötőfalvak, mint Urk, elvesztették közvetlen tengeri kapcsolatukat."],
    ro: ["Fostul golf plat din Marea Nordului din inima Olandei.","A fost separat de marea deschisă de Afsluitdijk în 1932.","Apoi s-a transformat în lacul cu apă dulce IJsselmeer.","De secole a fost folosit pentru pescuit și comerț maritim.","A provocat dezastre grave cauzate de inundații în trecut.","Muzeul Zuiderzee din Enkhuizen păstrează istoria regiunii.","Provincia Flevoland a fost creată din mari părți ale fundului mării.","Satele portuare vechi Zuiderzee, cum ar fi Urk, și-au pierdut accesul direct la mare."],
    en: ["Former shallow North Sea bay in the heart of the Netherlands.","Was separated from the open sea by the Afsluitdijk in 1932.","Then transformed into the freshwater lake IJsselmeer.","Served fishing and maritime trade for centuries.","Caused severe flood disasters in the past.","The Zuiderzee Museum in Enkhuizen preserves the region's history.","The province of Flevoland was created from large parts of the seabed.","Old Zuiderzee harbor villages like Urk lost their direct sea access."]
  },
      factsAdvanced: {
    de: [
      "Die Zuiderzee entstand im späten Mittelalter durch verheerende Überschwemmungen, die einen Binnensee mit der Nordsee verbanden.",
      "Die ständige Bedrohung durch Fluten gipfelte in der fatalen Zuiderzeeflut von 1916, die den endgültigen Anstoß für den Bau des Deiches gab.",
      "Der Bau des Afsluitdijk dauerte fünf Jahre und trennte 1932 die Meeresbucht vom offenen Meer ab.",
      "Viele alte Fischerdörfer, die einst vom Salzwasserfischfang lebten, mussten sich nach der Schließung komplett umorientieren."
    ],
    hu: ["A szabadtéri múzeumot egy komppal lehet megközelíteni, ami megadja a korhű tengerparti érkezés illúzióját.", "Több mint 130 történelmi épület található a területén, a boltoktól a templomig.", "A látogatók megkóstolhatják a helyben, hagyományos módszerrel füstölt heringet.", "A múzeum nemcsak az épületeket, hanem az egykori lakók népviseletét és szokásait is dokumentálja."],
    ro: [
      "Zuiderzee a fost formată în Evul Mediu târziu prin inundații devastatoare care au conectat un lac interior cu Marea Nordului.",
      "Amenințarea constantă a inundațiilor a culminat cu inundația fatală Zuiderzee din 1916, care a dat impulsul final pentru construirea digului.",
      "Construcția Afsluitdijk a durat cinci ani și a separat golful de marea deschisă în 1932.",
      "Multe sate vechi de pescari care odată trăiau din pescuitul de apă sărată au trebuit să se reorienteze complet după închidere."
    ],
    en: [
      "The Zuiderzee was formed in the late Middle Ages by devastating floods that connected an inland lake with the North Sea.",
      "The constant threat of floods culminated in the fatal Zuiderzee flood of 1916, which gave the final impetus for building the dike.",
      "The construction of the Afsluitdijk took five years and separated the bay from the open sea in 1932.",
      "Many old fishing villages that once lived off saltwater fishing had to completely reorient themselves after the closure."
    ]
  }
  },
  {
    id: "NL-LM-IJS", type: "landmark", parent: "NL", coords: [5.40, 52.70],
    name: { de: "IJsselmeer", hu: "IJsselmeer", ro: "IJsselmeer", en: "IJsselmeer" },
    image: "/geo-images/netherlands/ijsselmeer.webp",
  description: {
    de: "Das IJsselmeer ist heute der größte Binnensee der Niederlande und entstand 1932, als die Meeresbucht Zuiderzee durch den Bau des Afsluitdijk eingedeicht wurde. Im Laufe der Jahre wandelte sich das Salzwasser in ein riesiges Süßwasserreservoir, das heute eine zentrale Rolle für die Wasserversorgung und den Wassersport spielt. Die Ränder des IJsselmeers sind gesäumt von historischen Segelschiffen und malerischen alten Fischerdörfern.",
    hu: "Az IJsselmeer ma Hollandia legnagyobb belső tava, amely 1932-ben jött létre, amikor a Zuiderzee-öblöt az Afsluitdijk megépítésével lezárták. Az évek során a sós víz egy hatalmas édesvízi víztározóvá alakult át, amely ma központi szerepet játszik a vízellátásban és a vízi sportokban. Az IJsselmeer partjait történelmi vitorlás hajók és festői régi halászfalvak szegélyezik.",
    ro: "IJsselmeer este astăzi cel mai mare lac interior din Olanda și a fost creat în 1932, când golful Zuiderzee a fost îndiguit prin construcția Afsluitdijk. De-a lungul anilor, apa sărată s-a transformat într-un uriaș rezervor de apă dulce, care joacă astăzi un rol central în aprovizionarea cu apă și sporturile nautice. Marginile IJsselmeer sunt mărginite de veliere istorice și sate vechi de pescari pitorești.",
    en: "The IJsselmeer is today the largest inland lake in the Netherlands and was created in 1932 when the Zuiderzee bay was dammed up by the construction of the Afsluitdijk. Over the years, the saltwater turned into a huge freshwater reservoir, which today plays a central role in water supply and water sports. The edges of the IJsselmeer are lined with historic sailing ships and picturesque old fishing villages."
  },
      descriptionAdvanced: {
    de: "Das IJsselmeer ist heute der größte See der Niederlande, ein riesiges Süßwasserreservoir, das durch die Abdämmung der ehemaligen Zuiderzee entstand. Der 32 Kilometer lange Abschlussdeich schützt die umliegenden Provinzen seit 1932 vor der Nordsee und formte diesen neuen Binnensee, der durch den Fluss IJssel mit Süßwasser gespeist wird. Aus Teilen des Sees wurden durch gewaltige Eindeichungen die fruchtbaren Polder der neuen Provinz Flevoland gewonnen. Heute dient das flache IJsselmeer nicht nur dem Hochwasserschutz und der Trinkwassergewinnung, sondern ist auch ein beliebtes Revier für Segler und ein wichtiges Vogelschutzgebiet. Geografie K6: Im IJsselmeer baute man neue Inseln und Polder aus dem Wasser. Was ist der Hauptgrund, warum die Niederlande neues Land aus dem Meer gewinnen?",
    hu: "Az IJsselmeer (IJssel-tó) Hollandia legnagyobb tava, amely egy nagyszabású mérnöki beavatkozás, a Zuiderzee 1932-es elzárásának eredményeként jött létre. A tengeröblöt az Afsluitdijk nevű hatalmas gát zárta el az Északi-tengertől, így az egykori sós vízű tenger lassan édesvizű tóvá változott, amelyet elsősorban az IJssel folyó táplál. A tó mélysége mindössze 5-6 méter, és létfontosságú szerepet játszik az ország édesvíz-ellátásában, a mezőgazdaságban, valamint a vízi sportok és rekreáció terén. Földrajz K7: Hogyan válik egy sós tengeröböl édesvízű tóvá egy gát megépítése után?",
    ro: "IJsselmeer este cel mai mare lac din Olanda de astăzi, un rezervor uriaș de apă dulce creat prin îndiguirea fostei Zuiderzee. Barajul de închidere lung de 32 de kilometri protejează provinciile înconjurătoare de Marea Nordului din 1932 și a format acest nou lac interior, care este alimentat cu apă dulce de râul IJssel. Din părți ale lacului au fost recuperate polderele fertile ale noii provincii Flevoland. Astăzi, IJsselmeer-ul de mică adâncime nu servește doar pentru protecția împotriva inundațiilor și extragerea apei potabile, ci este și o zonă populară pentru marinari și un important sanctuar de păsări. Geografie K6: Noi insule și poldere au fost construite din apă în IJsselmeer. Care este principalul motiv pentru care Olanda recuperează noi terenuri din mare?",
    en: "The IJsselmeer is today the largest lake in the Netherlands, a massive freshwater reservoir created by the damming of the former Zuiderzee. The 32-kilometer-long Afsluitdijk has protected the surrounding provinces from the North Sea since 1932 and shaped this new inland lake, which is fed with freshwater by the river IJssel. Parts of the lake were reclaimed through massive dyking to create the fertile polders of the new province of Flevoland. Today, the shallow IJsselmeer serves not only for flood protection and drinking water supply, but is also a popular area for sailors and an important bird sanctuary. Geography K6: New islands and polders were built from the water in the IJsselmeer. What is the main reason why the Netherlands reclaims new land from the sea?"
  },
    facts: {
    de: ["Größter Binnensee der Niederlande, entstanden durch Einpolderung.","Entstand 1932 durch die Schließung der Nordseebucht Zuiderzee.","Besteht aus Süßwasser, das primär vom Fluss IJssel gespeist wird.","Ist ein äußerst beliebtes Revier für Segler und Windsurfer.","Dient als eines der wichtigsten Trinkwasserreservoirs des Landes.","Wurde später durch den Houtribdijk weiter unterteilt (Markermeer).","Fischerdörfer wie Volendam und Enkhuizen liegen an seinem Ufer.","Bietet bedeutenden Lebensraum für zahlreiche Wasservögel."],
    hu: ["Hollandia legnagyobb beltengere/tava, polderesítéssel jött létre.","1932-ben a Zuiderzee északi-tengeri öböl lezárásával jött létre.","Édesvízből áll, amelyet elsősorban az IJssel folyó táplál.","Rendkívül népszerű a vitorlázók és szörfösök körében.","Az ország egyik legfontosabb ivóvíztározójaként szolgál.","Később a Houtribdijk tovább osztotta (Markermeer).","Partján olyan halászfalvak fekszenek, mint Volendam és Enkhuizen.","Jelentős élőhelyet biztosít számos vízimadár számára."],
    ro: ["Cel mai mare lac interior din Olanda, creat prin recuperarea polderelor.","Creat în 1932 prin închiderea golfului Zuiderzee din Marea Nordului.","Este format din apă dulce, care este alimentată în principal de râul IJssel.","Este o zonă extrem de populară pentru marinari și windsurferi.","Servește ca unul dintre cele mai importante rezervoare de apă potabilă din țară.","Ulterior a fost subdivizat în continuare de Houtribdijk (Markermeer).","Sate de pescari precum Volendam și Enkhuizen se află pe țărmul său.","Oferă un habitat important pentru numeroase păsări de apă."],
    en: ["The largest inland lake in the Netherlands, created by impoldering.","Created in 1932 by the closure of the North Sea bay Zuiderzee.","Consists of freshwater, which is primarily fed by the river IJssel.","Is an extremely popular area for sailors and windsurfers.","Serves as one of the most important drinking water reservoirs in the country.","Was later further subdivided by the Houtribdijk (Markermeer).","Fishing villages like Volendam and Enkhuizen are on its shores.","Provides significant habitat for numerous water birds."]
  },
      factsAdvanced: {
    de: [
      "Das IJsselmeer ist kein natürlicher See, sondern entstand 1932 künstlich durch den Bau des Afsluitdijk.",
      "Obwohl es ein riesiges Binnengewässer ist, ist der See mit durchschnittlich fünf Metern Tiefe sehr flach.",
      "Das IJsselmeer ist das wichtigste Süßwasserreservoir der Niederlande und dient in Trockenzeiten der Bewässerung.",
      "Aus dem südlichen Teil des ursprünglichen IJsselmeers wurde durch Landgewinnung die Provinz Flevoland geschaffen."
    ],
    hu: ["Az IJsselmeer területének jelentős részét az évtizedek során polderesítéssel (Flevoland) szárazfölddé alakították.", "A tó édesvízkészlete kritikus fontosságú a holland ivóvízellátás szempontjából szárazság idején.", "1976-ban egy másik gáttal (Houtribdijk) a tavat kettéosztották, létrehozva a déli Markermeer-t.", "A tavat szegélyező történelmi városok (pl. Hoorn, Enkhuizen, Urk) egykori tengeri kikötővárosok voltak."],
    ro: [
      "IJsselmeer nu este un lac natural, ci a fost creat artificial în 1932 prin construcția Afsluitdijk.",
      "Deși este un corp uriaș de apă interioară, lacul este foarte puțin adânc, cu o adâncime medie de cinci metri.",
      "IJsselmeer este cel mai important rezervor de apă dulce din Olanda și este folosit pentru irigații în perioadele secetoase.",
      "Provincia Flevoland a fost creată din partea de sud a lacului original IJsselmeer prin recuperarea terenurilor."
    ],
    en: [
      "The IJsselmeer is not a natural lake, but was created artificially in 1932 by the construction of the Afsluitdijk.",
      "Although it is a huge inland body of water, the lake is very shallow, averaging just five meters deep.",
      "The IJsselmeer is the most important freshwater reservoir in the Netherlands and is used for irrigation during dry periods.",
      "The province of Flevoland was created through land reclamation from the southern part of the original IJsselmeer."
    ]
  }
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
    descriptionAdvanced: {
    de: "Gouda ist eine historische Käsestadt im Herzen der Provinz Südholland, die weltweit für das gleichnamige Molkereiprodukt bekannt ist. Das Zentrum der Stadt wird dominiert von dem prachtvollen gotischen Stadhuis (Rathaus) auf dem großen Marktplatz, das im 15. Jahrhundert erbaut wurde. Jeden Donnerstag im Sommer findet hier der traditionelle Käsemarkt statt, ein farbenfrohes Spektakel, bei dem die Käselaibe noch wie vor Jahrhunderten mit Pferdekutschen antransportiert und per Handschlag gehandelt werden. Neben Käse ist Gouda auch berühmt für die Herstellung traditioneller Tonpfeifen, Keramik und köstlicher Sirupwaffeln (Stroopwafels). Geografie K5: Gouda exportiert seinen berühmten Käse in die ganze Welt. Aus welcher Milch wird der klassische Gouda-Käse hergestellt?",
    hu: "Gouda egy történelmi város Dél-Hollandiában, amely az egész világon ismertté vált az azonos nevű sajtjáról. Bár a sajtot nem feltétlenül magában a városban készítették, évszázadokon át itt, a lenyűgöző Városháza előtti téren cserélt gazdát a híres sajtpiacon. Gouda nemcsak a gasztronómiájáról (köztük a stroopwafel nevű szirupos ostyáról), hanem a Szent János-templom (Sint-Janskerk) csodálatos, 16. századi ólomüveg ablakairól is híres, amelyek túlélték a reformáció képrombolásait. Történelem K6: Miért rendezték a nagy sajtvásárokat a város főterén, és hogyan működött a kereskedelem mérlegelése a középkorban?",
    ro: "Gouda este un oraș istoric al brânzei în inima Olandei de Sud, renumit în întreaga lume pentru produsul lactat cu același nume. Centrul orașului este dominat de superba Primărie gotică (Stadhuis) din piața mare, construită în secolul al XV-lea. În fiecare joi din timpul verii are loc aici tradiționala piață a brânzei, un spectacol colorat în care roțile de brânză sunt aduse cu trăsuri trase de cai, ca acum secole, și tranzacționate prin strângeri de mână. Pe lângă brânză, Gouda este renumită și pentru producția de pipe tradiționale din lut, ceramică și delicioase vafe cu sirop (Stroopwafels). Geografie K5: Gouda își exportă celebra brânză în toată lumea. Din ce lapte este făcută brânza Gouda clasică?",
    en: "Gouda is a historic cheese city in the heart of the province of South Holland, known worldwide for the dairy product of the same name. The center of the city is dominated by the magnificent Gothic Stadhuis (Town Hall) on the large market square, built in the 15th century. Every Thursday in the summer, the traditional cheese market takes place here, a colorful spectacle where wheels of cheese are still transported by horse-drawn carriages and traded with a handshake, just as they were centuries ago. Besides cheese, Gouda is also famous for producing traditional clay pipes, ceramics, and delicious syrup waffles (stroopwafels). Geography K5: Gouda exports its famous cheese all over the world. What kind of milk is classic Gouda cheese made from?"
  },
    facts: {
      de: ["Bekannt für Goudakäse und den historischen Käsemarkt.", "Heimat der Sirupwaffeln (Stroopwafels).", "Die Sint-Janskerk hat beeindruckende Glasmalereien.", "Das gotische Rathaus stammt aus dem 15. Jahrhundert.", "Goudaer Kerzen sind traditionell und bekannt.", "Besitzt malerische historische Kanäle."],
      hu: ["A gouda sajtról és a történelmi sajtpiacról ismert.", "A szirupos gofri (Stroopwafel) hazája.", "A Sint-Janskerk lenyűgöző ólomüveg ablakokkal rendelkezik.", "Gótikus városházája a 15. századból származik.", "A goudai gyertyák hagyományosak és híresek.", "Festői történelmi csatornákkal büszkélkedhet."],
      ro: ["Cunoscut pentru brânza Gouda și piața istorică de brânzeturi.", "Locul de naștere al vafelor cu sirop (Stroopwafels).", "Sint-Janskerk are vitralii impresionante.", "Primăria gotică datează din secolul al XV-lea.", "Lumânările Gouda sunt tradiționale și cunoscute.", "Se mândrește cu canale istorice pitorești."],
      en: ["Known for Gouda cheese and the historic cheese market.", "Home of the syrup waffles (Stroopwafels).", "The Sint-Janskerk has impressive stained glass windows.", "Its Gothic town hall dates from the 15th century.", "Gouda candles are traditional and well-known.", "Boasts picturesque historic canals."]
    },
    factsAdvanced: {
    de: [
      "Gouda-Käse macht etwa 60 Prozent der gesamten niederländischen Käseproduktion aus.",
      "Die Sint-Janskerk in Gouda ist mit 123 Metern die längste Kirche der Niederlande und berühmt für ihre großen, bemalten Glasfenster.",
      "Die Stroopwafel (Sirupwaffel), eine der bekanntesten niederländischen Süßigkeiten, wurde in Gouda erfunden.",
      "Das freistehende, gotische Rathaus von Gouda, erbaut im Jahr 1450, ist eines der ältesten in den Niederlanden."
    ],
    hu: ["A goudai sajtpiac a mai napig működik minden csütörtökön a nyári hónapokban, hagyományos ceremóniákkal.", "A goudai Városháza (Stadhuis) az egyik legrégebbi és legszebb gótikus városháza Hollandiában.", "A Szent János-templom Hollandia leghosszabb temploma a maga 123 méterével.", "A Gouda sajt neve nem védett eredetmegjelölés, így világszerte gyárthatnak ilyen nevű sajtot."],
    ro: [],
    en: [
      "Gouda cheese makes up about 60 percent of total Dutch cheese production.",
      "The Sint-Janskerk in Gouda is the longest church in the Netherlands at 123 meters and is famous for its large, painted stained glass windows.",
      "The stroopwafel (syrup waffle), one of the most famous Dutch sweets, was invented in Gouda.",
      "Gouda's freestanding Gothic Town Hall, built in 1450, is one of the oldest in the Netherlands."
    ]
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
    descriptionAdvanced: {
    de: "Enschede ist die größte Stadt der Region Twente im Osten der Niederlande, nahe der deutschen Grenze. Die Stadt erlebte im 19. Jahrhundert einen rasanten Aufschwung und wurde zu einem der bedeutendsten Zentren der Textilindustrie Europas. Nach dem Zusammenbruch dieser Industrie im 20. Jahrhundert durchlief Enschede einen beeindruckenden Wandel und ist heute eine moderne, grüne Innovationsstadt, stark geprägt durch die Technische Universität Twente. Eine tiefe Narbe in der jüngeren Geschichte der Stadt hinterließ die verheerende Feuerwerkskatastrophe im Jahr 2000, nach der das betroffene Viertel Roombeek als ein Paradebeispiel moderner, bürgernaher Architektur wiederaufgebaut wurde. Geschichte K8: Enschede wuchs durch die Textilindustrie. Welche revolutionäre Erfindung aus dem 18. Jahrhundert trieb die mechanischen Webstühle in großen Fabriken an?",
    hu: "Enschede Kelet-Hollandia legnagyobb városa, Overijssel tartomány Twente régiójának központja. A 19. és 20. században a holland textilipar lüktető szíve volt, amelyet hatalmas gyárak és kémények jellemeztek. A textilipar hanyatlása után a város átalakult, és ma a Twentei Egyetem (Universiteit Twente) révén a technológia és az innováció egyik fellegvára. 2000-ben egy tragikus tűzijáték-raktár robbanás pusztította el a város egy részét (Roombeek), amelyet azóta díjnyertes modern építészeti negyedként építettek újjá. Társadalomismeret K8: Hogyan tudott Enschede egy katasztrófa után egy modern és fenntartható városrészt létrehozni?",
    ro: "Enschede este cel mai mare oraș din estul Olandei, centrul regiunii Twente din provincia Overijssel. În secolele al XIX-lea și al XX-lea, a fost inima care bătea a industriei textile olandeze, caracterizată prin fabrici uriașe și coșuri de fum. După declinul industriei textile, orașul a fost transformat și este astăzi o fortăreață a tehnologiei și inovației datorită Universității din Twente. În 2000, o explozie tragică a unui depozit de artificii a distrus o parte a orașului (Roombeek), care a fost reconstruită de atunci ca un district arhitectural modern premiat. Studii sociale K8: Cum a reușit Enschede să creeze un district urban modern și durabil după un dezastru?",
    en: "Enschede is the largest city in the Twente region in the eastern Netherlands, near the German border. The city experienced a rapid boom in the 19th century and became one of the most important centers of the textile industry in Europe. Following the collapse of this industry in the 20th century, Enschede underwent an impressive transformation and is today a modern, green city of innovation, strongly influenced by the University of Twente. A deep scar in the city's recent history was left by the devastating fireworks disaster in 2000, after which the affected Roombeek district was rebuilt as a prime example of modern, citizen-oriented architecture. History K8: Enschede grew through the textile industry. What revolutionary 18th-century invention powered mechanical looms in large factories?"
  },
    facts: {
      de: ["Ehemaliges Zentrum der niederländischen Textilindustrie.", "Heimat der renommierten Universität Twente.", "Der Oude Markt ist das lebendige Zentrum der Stadt.", "Bekannt für das Rijksmuseum Twenthe.", "Im Jahr 2000 durch eine Feuerwerkskatastrophe teilweise zerstört.", "Grenzt direkt an das deutsche Bundesland Nordrhein-Westfalen."],
      hu: ["A holland textilipar egykori központja.", "A neves Twente-i Egyetem otthona.", "Az Oude Markt a város nyüzsgő központja.", "A Rijksmuseum Twenthe-ről ismert.", "2000-ben részben elpusztult egy tűzijáték-katasztrófa miatt.", "Közvetlenül határos a német Észak-Rajna-Vesztfália tartománnyal."],
      ro: ["Fostul centru al industriei textile olandeze.", "Sediul renumitei Universități din Twente.", "Oude Markt este centrul vibrant al orașului.", "Cunoscut pentru Rijksmuseum Twenthe.", "Parțial distrus de un dezastru al artificiilor în anul 2000.", "Se învecinează direct cu statul german Renania de Nord-Westfalia."],
      en: ["Former center of the Dutch textile industry.", "Home to the renowned University of Twente.", "The Oude Markt is the vibrant center of the city.", "Known for the Rijksmuseum Twenthe.", "Partially destroyed by a fireworks disaster in 2000.", "Borders directly on the German state of North Rhine-Westphalia."]
    },
    factsAdvanced: {
    de: [
      "Enschede war im 19. Jahrhundert die unangefochtene Textilhauptstadt der Niederlande.",
      "Der alte Marktplatz (Oude Markt) gilt als einer der lebendigsten Ausgehplätze im Osten der Niederlande.",
      "Am 13. Mai 2000 zerstörte die Explosion einer Feuerwerksfabrik große Teile des Stadtteils Roombeek.",
      "Die Universität Twente ist die einzige niederländische Universität mit einem echten Campus, auf dem Studenten leben und lernen."
    ],
    hu: ["A Twentei Egyetem Hollandia egyetlen olyan egyeteme, amely amerikai stílusú, integrált campusszal rendelkezik.", "A város közvetlenül a német határ mellett fekszik, és erős határon átnyúló kapcsolatokat ápol Münsterrel.", "A Grolsch, a világ egyik leghíresebb holland söre, egy Enschede melletti modern sörfőzdében készül.", "A Rijksmuseum Twenthe a régió legfontosabb képzőművészeti múzeuma."],
    ro: [
      "Universitatea din Twente este singura universitate din Olanda care are un campus integrat în stil american.",
      "Orașul este situat chiar la granița cu Germania și menține relații transfrontaliere puternice cu Münster.",
      "Grolsch, una dintre cele mai faimoase beri olandeze din lume, este fabricată într-o fabrică de bere modernă de lângă Enschede.",
      "Rijksmuseum Twenthe este cel mai important muzeu de arte plastice din regiune."
    ],
    en: [
      "Enschede was the undisputed textile capital of the Netherlands in the 19th century.",
      "The old market square (Oude Markt) is considered one of the liveliest nightlife spots in the eastern Netherlands.",
      "On May 13, 2000, the explosion of a fireworks factory destroyed large parts of the Roombeek district.",
      "The University of Twente is the only Dutch university with a true campus where students live and study."
    ]
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
    descriptionAdvanced: {
    de: "Arnhem (Arnheim), die charmante Hauptstadt der Provinz Gelderland, liegt malerisch an den Ufern des Niederrheins. Im Zweiten Weltkrieg erlangte die Stadt durch die Operation Market Garden weltweite traurige Berühmtheit; die heftige Schlacht um die Brücke von Arnheim (bekannt aus dem Film 'Die Brücke von Arnheim') prägte das Stadtbild durch schwere Zerstörungen. Heute ist Arnhem eine modebewusste und grüne Stadt, umgeben von dichten Wäldern. Sie ist berühmt für ihr renommiertes Modeviertel und beheimatet kulturelle Highlights wie das Niederländische Freilichtmuseum und den großen Tierpark Burgers' Zoo. Geschichte K8: Bei der Schlacht um Arnheim versuchten alliierte Fallschirmjäger vergeblich, die Rheinbrücke zu halten. Warum war diese Brücke für den Vormarsch nach Deutschland so wichtig?",
    hu: "Arnhem Gelderland tartomány zöldellő fővárosa, amely a Rajna alsó szakaszának (Nederrijn) partján fekszik. A város neve örökre összefonódott a második világháborúval a \\\\\\\"Market Garden\\\\\\\" hadművelet miatt, amikor a szövetséges ejtőernyősök súlyos veszteségeket szenvedtek az arnhemi híd megszerzéséért folytatott csatában (\\\\\\\"A híd túl messze volt\\\\\\\"). Ma Arnhem egy divat- és dizájnközpont, élénk kulturális élettel, valamint Hollandia egyik legismertebb szabadtéri múzeumával (Nederlands Openluchtmuseum). Történelem K8: Miért volt a 'Market Garden' hadművelet kulcsfontosságú a szövetségesek számára a második világháborúban?",
    ro: "Arnhem este capitala verde a provinciei Gelderland, situată pe malurile Rinului Inferior (Nederrijn). Numele orașului este legat pentru totdeauna de al Doilea Război Mondial din cauza Operațiunii \\\\\\\"Market Garden\\\\\\\", când parașutiștii aliați au suferit pierderi grele în bătălia pentru capturarea podului Arnhem (\\\\\\\"Un pod prea îndepărtat\\\\\\\"). Astăzi, Arnhem este un centru de modă și design, cu o viață culturală vibrantă, precum și unul dintre cele mai faimoase muzee în aer liber din Olanda (Nederlands Openluchtmuseum). Istorie K8: De ce a fost Operațiunea 'Market Garden' esențială pentru aliați în al Doilea Război Mondial?",
    en: "Arnhem, the charming capital of the province of Gelderland, is picturesquely situated on the banks of the Lower Rhine. In World War II, the city gained worldwide tragic notoriety due to Operation Market Garden; the fierce battle for the bridge at Arnhem (known from the film 'A Bridge Too Far') left its mark on the cityscape through heavy destruction. Today, Arnhem is a fashion-conscious and green city surrounded by dense forests. It is famous for its renowned fashion district and is home to cultural highlights such as the Netherlands Open Air Museum and the large Burgers' Zoo. History K8: During the Battle of Arnhem, Allied paratroopers tried in vain to hold the Rhine bridge. Why was this bridge so important for the advance into Germany?"
  },
    facts: {
      de: ["Schauplatz der berühmten Schlacht um Arnheim (1944).", "Das Niederländische Freilichtmuseum (Openluchtmuseum) ist hier.", "Heimat des bekannten Burgers' Zoo.", "Grenzt an den Nationalpark Hoge Veluwe.", "Hat eine große Mode- und Designszene.", "Die John-Frost-Brücke ist ein wichtiges Denkmal."],
      hu: ["A híres arnhemi csata (1944) helyszíne.", "Itt található a Holland Szabadtéri Múzeum (Openluchtmuseum).", "A híres Burgers' Zoo otthona.", "A Hoge Veluwe Nemzeti Parkkal határos.", "Jelentős divat- és dizájnközpont.", "A John Frost híd fontos emlékmű."],
      ro: ["Locația celebrei Bătălii de la Arnhem (1944).", "Muzeul Olandez în Aer Liber (Openluchtmuseum) este aici.", "Acasă la faimoasa Grădină Zoologică Burgers'.", "Se învecinează cu Parcul Național Hoge Veluwe.", "Are o scenă mare de modă și design.", "Podul John Frost este un monument important."],
      en: ["Site of the famous Battle of Arnhem (1944).", "The Netherlands Open Air Museum (Openluchtmuseum) is here.", "Home to the famous Burgers' Zoo.", "Borders the Hoge Veluwe National Park.", "Has a large fashion and design scene.", "The John Frost Bridge is an important monument."]
    },
    factsAdvanced: {
    de: [
      "Arnhem ist die einzige Stadt in den Niederlanden, die über ein ausgedehntes Obus-Netz (Trolleybusse) verfügt.",
      "Die historische John-Frost-Brücke in Arnhem wurde im September 1944 Schauplatz erbitterter Kämpfe im Zweiten Weltkrieg.",
      "Das Niederländische Freilichtmuseum in Arnhem zeigt über 80 historische Gebäude aus verschiedenen Epochen des Landes.",
      "Arnhem ist eine der wichtigsten Mode-Städte der Niederlande, dank der renommierten ArtEZ Hochschule für Künste."
    ],
    hu: ["A John Frost híd Arnhemben arról a brit parancsnokról kapta a nevét, aki hősiesen védte azt 1944-ben.", "A Holland Szabadtéri Múzeum (Openluchtmuseum) több mint 100 történelmi holland épületet mutat be.", "A város ad otthont a Burgers' Zoo-nak, Európa egyik legnagyobb és leginnovatívabb állatkertjének.", "Arnhem az egyetlen holland város, ahol ma is kiterjedt trolibusz-hálózat működik."],
    ro: [
      "Podul John Frost din Arnhem poartă numele comandantului britanic care l-a apărat eroic în 1944.",
      "Muzeul Olandez în Aer Liber (Openluchtmuseum) prezintă peste 100 de clădiri olandeze istorice.",
      "Orașul găzduiește Burgers' Zoo, una dintre cele mai mari și mai inovatoare grădini zoologice din Europa.",
      "Arnhem este singurul oraș olandez care mai are și astăzi o rețea extinsă de troleibuze."
    ],
    en: [
      "Arnhem is the only city in the Netherlands with an extensive trolleybus network.",
      "The historic John Frost Bridge in Arnhem was the scene of fierce fighting in World War II in September 1944.",
      "The Netherlands Open Air Museum in Arnhem features over 80 historical buildings from different eras of the country.",
      "Arnhem is one of the most important fashion cities in the Netherlands, thanks to the renowned ArtEZ University of the Arts."
    ]
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
    descriptionAdvanced: {
    de: "Zwolle ist die pulsierende Hauptstadt der Provinz Overijssel und vereint eine reiche mittelalterliche Vergangenheit mit einer dynamischen modernen Entwicklung. Als ehemaliges mächtiges Mitglied der Hanse blühte die Stadt im Mittelalter auf, wovon heute noch die sternförmigen Festungsgräben, das prachtvolle Sassenpoort (Stadttor) und die majestätischen Kaufmannshäuser zeugen. Zwolle ist bekannt für seine kulinarische Exzellenz und beherbergt das Spitzenrestaurant De Librije. Eine besondere Sehenswürdigkeit ist auch die spektakuläre Buchhandlung 'Waanders In de Broeren', die sich harmonisch in ein monumentales, gotisches Kirchengebäude einfügt. Geschichte K6: Zwolle war eine Hansestadt. Was transportierten die hanseatischen Kaufmannsschiffe typischerweise über Nord- und Ostsee?",
    hu: "Zwolle egy történelmi város Overijssel tartományban, amely a középkorban a Hanza-szövetség egyik legbefolyásosabb kereskedelmi központja volt. A városmagot ma is csillag alakú csatornarendszer és masszív erődítmények veszik körül, a Peperbus (Borsszóró) nevű impozáns templomtorony pedig uralja a városképet. Zwolle híres kiváló gasztronómiájáról – itt található a De Librije, Hollandia egyik leghíresebb Michelin-csillagos étterme. A város ötvözi a történelmi bájt a dinamikus, modern egyetemi élettel. Történelem K6: Mi volt a Hanza-szövetség, és miért biztosított gazdagságot a hozzá tartozó városoknak, mint Zwolle?",
    ro: "Zwolle este un oraș istoric din provincia Overijssel, care a fost unul dintre cele mai influente centre comerciale ale Ligii Hanseatice în Evul Mediu. Centrul orașului este și astăzi înconjurat de un sistem de canale în formă de stea și fortificații masive, în timp ce impunătorul turn al bisericii Peperbus (Solnița) domină orizontul. Zwolle este renumit pentru gastronomia sa excelentă – aici se află De Librije, unul dintre cele mai faimoase restaurante cu stele Michelin din Olanda. Orașul combină farmecul istoric cu viața universitară modernă și dinamică. Istorie K6: Ce a fost Liga Hanseatică și de ce a oferit bogăție orașelor membre, cum ar fi Zwolle?",
    en: "Zwolle is the vibrant capital of the province of Overijssel and combines a rich medieval past with dynamic modern development. As a former powerful member of the Hanseatic League, the city flourished in the Middle Ages, a legacy still evident today in its star-shaped moats, the magnificent Sassenpoort (city gate), and its majestic merchant houses. Zwolle is known for its culinary excellence and is home to the top-tier restaurant De Librije. A special attraction is the spectacular bookstore 'Waanders In de Broeren', which harmoniously blends into a monumental, Gothic church building. History K6: Zwolle was a Hanseatic city. What did Hanseatic merchant ships typically transport across the North and Baltic Seas?"
  },
    facts: {
      de: ["Historische Hansestadt mit reicher Geschichte.", "Das Stadttor 'Sassenpoort' ist ein Wahrzeichen.", "Bekannt für das sternförmige Kanalsystem.", "Das Museum de Fundatie zeigt bildende Kunst.", "Die gotische Grote Kerk stammt aus dem 15. Jahrhundert.", "Waanders In de Broeren ist eine Buchhandlung in einer alten Kirche."],
      hu: ["Történelmi Hanza-város gazdag történelemmel.", "A 'Sassenpoort' városkapu az egyik fő látványosság.", "A csillag alakú csatornarendszerről ismert.", "A Museum de Fundatie képzőművészeti alkotásokat mutat be.", "A gótikus Grote Kerk a 15. századból származik.", "A Waanders In de Broeren egy régi templomban működő könyvesbolt."],
      ro: ["Oraș istoric hanseatic cu o istorie bogată.", "Poarta orașului 'Sassenpoort' este un reper.", "Cunoscut pentru sistemul său de canale în formă de stea.", "Museum de Fundatie expune arte plastice.", "Biserica gotică Grote Kerk datează din secolul al XV-lea.", "Waanders In de Broeren este o librărie într-o veche biserică."],
      en: ["Historic Hanseatic city with a rich history.", "The 'Sassenpoort' city gate is a landmark.", "Known for its star-shaped canal system.", "The Museum de Fundatie displays fine arts.", "The Gothic Grote Kerk dates from the 15th century.", "Waanders In de Broeren is a bookstore in an old church."]
    },
    factsAdvanced: {
    de: [
      "Zwolle gehörte im 15. Jahrhundert zu den wohlhabendsten Mitgliedern der Hanse.",
      "Das Sassenpoort, erbaut um 1409, ist ein monumentales Stadttor und gehört zu den Top-100-Kulturdenkmälern der Niederlande.",
      "Das Restaurant De Librije in Zwolle gehört zu den wenigen niederländischen Restaurants, die mit drei Michelin-Sternen ausgezeichnet wurden.",
      "Die Buchhandlung in der 500 Jahre alten Broerenkerk in Zwolle wird oft als eine der schönsten der Welt bezeichnet."
    ],
    hu: ["A Sassenpoort, a város megmaradt középkori kapuja, a 15. századból származik és az UNESCO műemléki listáján szerepel.", "A Waanders In de Broeren egy lenyűgöző könyvesbolt, amelyet egy 15. századi domonkos templomban alakítottak ki.", "Zwolle lakóit a középkor óta 'Blauwvingers'-nek (Kékujjúaknak) csúfolják egy szomszédos várossal való viszály miatt.", "A város egy fontos közlekedési csomópont a Randstad (a nyugati metropolisz) és Hollandia északi része között."],
    ro: [
      "Sassenpoort, poarta medievală rămasă a orașului, datează din secolul al XV-lea și se află pe lista monumentelor UNESCO.",
      "Waanders In de Broeren este o librărie uimitoare creată într-o biserică dominicană din secolul al XV-lea.",
      "Locuitorii din Zwolle au fost porecliți 'Blauwvingers' (Degete albastre) încă din Evul Mediu, din cauza unei dispute cu un oraș vecin.",
      "Orașul este un nod de transport important între Randstad (metropola vestică) și partea de nord a Olandei."
    ],
    en: [
      "Zwolle was one of the wealthiest members of the Hanseatic League in the 15th century.",
      "The Sassenpoort, built around 1409, is a monumental city gate and belongs to the top 100 cultural monuments in the Netherlands.",
      "Restaurant De Librije in Zwolle is one of the few Dutch restaurants awarded three Michelin stars.",
      "The bookstore in the 500-year-old Broerenkerk in Zwolle is often described as one of the most beautiful in the world."
    ]
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
    descriptionAdvanced: {
    de: "Breda ist eine traditionsreiche, burgundische Stadt in der Provinz Nordbrabant, deren Geschichte tief mit dem niederländischen Königshaus der Oranier-Nassau verwurzelt ist. Das beeindruckende Schloss von Breda und die prächtige Grote Kerk, in der viele frühe Mitglieder der königlichen Familie begraben liegen, zeugen von dieser aristokratischen Vergangenheit. Die Stadt hat einen historischen Stadtkern mit von Bäumen gesäumten Plätzen und Grachten, der eine entspannte, gesellige Atmosphäre ausstrahlt. Breda war auch eine wichtige Festungsstadt und der Ort, an dem der Friede von Breda 1667 den Zweiten Englisch-Niederländischen Krieg beendete. Geschichte K7: Die Familie von Oranien-Nassau herrscht in den Niederlanden. Was war die Rolle von Wilhelm von Oranien im 16. Jahrhundert für das Land?",
    hu: "Breda egy elegáns város Észak-Brabant tartományban, amely szoros történelmi kapcsolatokat ápol az Orániai-Nassau uralkodóházzal. A Breda Kastély és a lenyűgöző Grote Kerk (Nagy Templom) a város királyi múltjának legszebb emlékei; ez utóbbiban több korai Orániai herceg is nyugszik. A várost gyakran 'az Észak Gyöngyszemeként' említik burgundi atmoszférája, kiváló éttermei és pezsgő éjszakai élete miatt. Breda fontos helyszíne volt a nyolcvanéves háborúnak is, amelynek során többször is gazdát cserélt. Történelem K7: Miért volt Breda fontos bázisa az Orániai-Nassau-háznak a holland függetlenségi háború előtt?",
    ro: "Breda este un oraș elegant din provincia Brabantul de Nord, care menține legături istorice strânse cu Casa Regală de Orania-Nassau. Castelul Breda și impresionanta Grote Kerk (Biserica Mare) sunt cele mai frumoase amintiri ale trecutului regal al orașului; mai mulți prinți timpurii de Orania se odihnesc în aceasta din urmă. Orașul este adesea denumit 'Perla Sudului' datorită atmosferei sale burgunde, restaurantelor excelente și vieții de noapte vibrante. Breda a fost, de asemenea, un loc important în timpul Războiului de Optzeci de Ani, schimbând mâinile de mai multe ori. Istorie K7: De ce a fost Breda o bază importantă pentru Casa de Orania-Nassau înaintea războiului de independență olandez?",
    en: "Breda is a traditional, Burgundian city in the province of North Brabant, with a history deeply rooted in the Dutch royal House of Orange-Nassau. The impressive Castle of Breda and the magnificent Grote Kerk, where many early members of the royal family are buried, bear witness to this aristocratic past. The city has a historic center with tree-lined squares and canals, radiating a relaxed, sociable atmosphere. Breda was also an important fortified city and the place where the Treaty of Breda in 1667 ended the Second Anglo-Dutch War. History K7: The House of Orange-Nassau rules the Netherlands. What was the role of William of Orange for the country in the 16th century?"
  },
    facts: {
      de: ["Historische Residenzstadt der Familie von Oranien-Nassau.", "Die Onze-Lieve-Vrouwekerk ist ein Meisterwerk der Brabanter Gotik.", "Das Schloss Breda war einst ein königlicher Palast.", "Beliebt für seine burgundische Gastfreundschaft.", "Der Begijnhof ist eine ruhige historische Oase im Zentrum.", "War eine wichtige Festungsstadt."],
      hu: ["Az Orániai-Nassau család történelmi rezidenciavárosa.", "Az Onze-Lieve-Vrouwekerk a brabanti gótika remekműve.", "A bredai kastély egykor királyi palota volt.", "Népszerű a burgundi vendégszeretetéről.", "A Begijnhof egy csendes történelmi oázis a központban.", "Fontos erődváros volt."],
      ro: ["Oraș rezidențial istoric al familiei de Orania-Nassau.", "Onze-Lieve-Vrouwekerk este o capodoperă a goticului brabantin.", "Castelul Breda a fost odată un palat regal.", "Popular pentru ospitalitatea sa burgundă.", "Begijnhof este o oază istorică liniștită în centru.", "A fost un important oraÈ™ fortificat."],
      en: ["Historic residential city of the House of Orange-Nassau.", "The Onze-Lieve-Vrouwekerk is a masterpiece of Brabantian Gothic.", "Breda Castle was once a royal palace.", "Popular for its Burgundian hospitality.", "The Begijnhof is a quiet historic oasis in the center.", "Was an important fortified city."]
    },
    factsAdvanced: {
    de: [
      "Breda wird aufgrund seiner starken historischen Bindung an die königliche Familie oft als 'Nassaustadt' bezeichnet.",
      "In der Liebfrauenkirche (Grote Kerk) in Breda befindet sich die Grabstätte früher Vorfahren des niederländischen Königshauses.",
      "Der Friede von Breda von 1667 besiegelte, dass die Niederlande Neu-Amsterdam (das spätere New York) an die Briten abtraten.",
      "Das Stadtzentrum ist umgeben von den sogenannten Singels, den Resten der alten Festungsgräben."
    ],
    hu: ["A bredai Grote Kerk tornya 97 méter magas, és a gótikus építészet egyik csúcspontja.", "A 'Spanyolok általi bredai ostrom' Diego Velázquez híres festményének ('Breda átadása') témája.", "Breda volt a lengyel páncélos hadosztály által felszabadított első holland város a második világháborúban.", "A KMA (Királyi Katonai Akadémia) 1828 óta a bredai kastélyban működik."],
    ro: [
      "Turnul Grote Kerk din Breda are 97 de metri înălțime și este un punct culminant al arhitecturii gotice.",
      "Asediul Bredei de către spanioli este subiectul celebrului tablou al lui Diego Velázquez ('Predarea Bredei').",
      "Breda a fost primul oraș olandez eliberat de divizia blindată poloneză în al Doilea Război Mondial.",
      "KMA (Academia Militară Regală) funcționează în Castelul Breda din 1828."
    ],
    en: [
      "Breda is often referred to as the 'Nassau City' due to its strong historical ties to the royal family.",
      "The Church of Our Lady (Grote Kerk) in Breda contains the tomb of early ancestors of the Dutch royal family.",
      "The Treaty of Breda of 1667 sealed the Netherlands' concession of New Amsterdam (later New York) to the British.",
      "The city center is surrounded by the so-called Singels, the remnants of the old defensive moats."
    ]
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
    descriptionAdvanced: {
    de: "'s-Hertogenbosch, oft liebevoll Den Bosch genannt, ist die Hauptstadt der Provinz Nordbrabant und besticht durch eine außergewöhnlich charmante, mittelalterliche Altstadt. Die unbestrittene architektonische Perle der Stadt ist die gewaltige Sint-Janskathedraal (St.-Johannes-Kathedrale), ein Meisterwerk der Brabanter Gotik, das reich mit Skulpturen verziert ist. Die Stadt wird von einem verborgenen Netzwerk alter Wasserwege, der Binnendieze, untertunnelt, das man heute in kleinen Booten erkunden kann. Den Bosch ist zudem die Heimatstadt des berühmten und visionären Malers Hieronymus Bosch, dessen surreale Werke die Welt noch heute faszinieren. Kunst K8: Hieronymus Bosch malte im Mittelalter fantastische Bilder voller Dämonen und seltsamer Kreaturen. Wie spiegelten diese Bilder die damaligen Ängste der Menschen wider?",
    hu: "'s-Hertogenbosch, gyakran egyszerűen csak Den Bosch (A Herceg Erdeje) néven ismert város Észak-Brabant fővárosa. A település a holland dél klasszikus, katolikus gyökerekkel rendelkező központja, amelynek büszkesége a fenséges Szent János-katedrális (Sint-Janskathedraal), a brabanti gótika mesterműve. A város leghíresebb szülötte Hieronymus Bosch, a 15-16. századi látomásos és szürreális festő, akinek zsenialitását egy külön múzeum is ünnepli. Den Bosch híres még a Binnendieze nevű rejtett csatornarendszeréről is. Művészettörténet K8: Milyen középkori hiedelmek és félelmek tükröződnek Hieronymus Bosch szürreális festményein?",
    ro: "'s-Hertogenbosch, adesea cunoscut simplu sub numele de Den Bosch (Pădurea Ducelui), este capitala Brabantului de Nord. Așezarea este centrul clasic al sudului olandez cu rădăcini catolice, a cărui mândrie este maiestuoasa Catedrală Sf. Ioan (Sint-Janskathedraal), o capodoperă a goticului brabantin. Cel mai faimos fiu al orașului este Hieronymus Bosch, un pictor vizionar și suprarealist din secolele XV-XVI, a cărui genialitate este sărbătorită într-un muzeu dedicat. Den Bosch este, de asemenea, renumit pentru sistemul său ascuns de canale numit Binnendieze. Istoria artei K8: Ce credințe și temeri medievale se reflectă în picturile suprarealiste ale lui Hieronymus Bosch?",
    en: "'s-Hertogenbosch, affectionately known as Den Bosch, is the capital of the province of North Brabant and boasts an exceptionally charming medieval old town. The city's undisputed architectural pearl is the massive Sint-Janskathedraal (St. John's Cathedral), a masterpiece of Brabantine Gothic richly decorated with sculptures. The city is tunneled by a hidden network of old waterways, the Binnendieze, which can be explored in small boats today. Den Bosch is also the hometown of the famous and visionary painter Hieronymus Bosch, whose surreal works still fascinate the world. Art K8: Hieronymus Bosch painted fantastic pictures full of demons and strange creatures in the Middle Ages. How did these images reflect the fears of people at that time?"
  },
    facts: {
      de: ["Die St.-Johannes-Kathedrale (Sint-Jan) ist stark gotisch geprägt.", "Heimatstadt des Malers Hieronymus Bosch.", "Die historische Binnendieze ist ein teilweise unterirdisches Kanalsystem.", "Berühmt für die süße Spezialität 'Bossche Bol'.", "Eine der ältesten Städte der Niederlande.", "Veranstaltet einen der größten Karnevale des Landes."],
      hu: ["A Szent János-székesegyház (Sint-Jan) gótikus remekmű.", "Hieronymus Bosch festőművész szülővárosa.", "A történelmi Binnendieze egy részben földalatti csatornarendszer.", "Híres a 'Bossche Bol' nevű édességről.", "Hollandia egyik legrégebbi városa.", "Az ország egyik legnagyobb karneválját rendezi meg."],
      ro: ["Catedrala Sf. Ioan (Sint-Jan) este puternic influențată de stilul gotic.", "Orașul natal al pictorului Hieronymus Bosch.", "Binnendieze este un sistem de canale parțial subteran istoric.", "Faimos pentru specialitatea dulce 'Bossche Bol'.", "Unul dintre cele mai vechi orașe din Țările de Jos.", "Găzduiește unul dintre cele mai mari carnavaluri din țară."],
      en: ["St. John's Cathedral (Sint-Jan) is strongly influenced by the Gothic style.", "Hometown of the painter Hieronymus Bosch.", "The historic Binnendieze is a partially underground canal system.", "Famous for the sweet specialty 'Bossche Bol'.", "One of the oldest cities in the Netherlands.", "Hosts one of the largest carnivals in the country."]
    },
    factsAdvanced: {
    de: [
      "Die Sint-Janskathedraal in 's-Hertogenbosch gilt als der Höhepunkt der gotischen Architektur in den Niederlanden.",
      "Das unterirdische Kanalsystem der Binnendieze verlief früher unterhalb der Häuser und diente sowohl als Transportweg als auch als Abwassersystem.",
      "Die lokale kulinarische Spezialität ist der 'Bossche Bol', ein riesiger, mit Sahne gefüllter und mit Schokolade überzogener Windbeutel.",
      "Der weltberühmte mittelalterliche Maler Hieronymus Bosch lebte und arbeitete sein ganzes Leben in dieser Stadt."
    ],
    hu: ["A Binnendieze csatornák részben a város történelmi épületei alatt futnak, és hajóval felfedezhetők.", "A város híres édessége a 'Bossche Bol', egy hatalmas, csokoládéval bevont és tejszínhabbal töltött fánk.", "A Sint-Janskathedraal külsejét különleges 'kapaszkodó' kőszobrok (szörnyek, emberek) díszítik a támpilléreken.", "A város egyike volt a kevés holland településnek, amelyik a 80 éves háború elején hű maradt a spanyol koronához."],
    ro: [
      "Canalele Binnendieze trec parțial pe sub clădirile istorice ale orașului și pot fi explorate cu barca.",
      "Dulciul faimos al orașului este 'Bossche Bol', o gogoașă uriașă acoperită cu ciocolată și umplută cu frișcă.",
      "Exteriorul Catedralei Sint-Janskathedraal este decorat cu statui speciale de piatră care se agață (monștri, oameni) pe contraforturi.",
      "Orașul a fost una dintre puținele așezări olandeze care au rămas loiale coroanei spaniole la începutul Războiului de Optzeci de Ani."
    ],
    en: [
      "The Sint-Janskathedraal in 's-Hertogenbosch is considered the pinnacle of Gothic architecture in the Netherlands.",
      "The underground canal system of the Binnendieze used to run beneath the houses and served as both a transport route and a sewer system.",
      "The local culinary specialty is the 'Bossche Bol', a giant cream-filled profiterole covered in dark chocolate.",
      "The world-famous medieval painter Hieronymus Bosch lived and worked his entire life in this city."
    ]
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
    descriptionAdvanced: {
    de: "Dordrecht ist die älteste Stadt der alten Grafschaft Holland und liegt auf einer Insel, umgeben von breiten Flüssen in der Provinz Südholland. Die Stadt erlebte ihre Blütezeit im Mittelalter durch das sogenannte Stapelrecht, das vorbeifahrende Schiffe zwang, ihre Waren hier abzuladen und auf dem Markt anzubieten, was Dordrecht immensen Reichtum bescherte. Die historische Innenstadt mit ihren malerischen, oft schiefen Häusern direkt am Wasser, über 1000 denkmalgeschützten Gebäuden und der massiven, nicht ganz fertiggestellten Grote Kerk strahlt einen unverwechselbaren maritimen Charme aus. Im Jahr 1572 fand hier zudem die Erste Freie Staatenversammlung statt, ein Schlüsselereignis in der Unabhängigkeit der Niederlande. Geschichte K7: Dordrecht hatte das mittelalterliche Stapelrecht. Wie verhalf dieses Vorrecht der Stadt zu großem Reichtum durch Zölle und Handel?",
    hu: "Dordrecht, gyakran röviden csak Dordt, Hollandia legidősebb városa a történelmi Holland grófság (a mai Észak- és Dél-Holland) területén, 1220-ban kapott városi rangot. A település egy szigeten fekszik több nagy folyó találkozásánál, amely ideális kereskedelmi központtá tette a középkorban a fa- és gabonakereskedelem számára. Dordrecht történelmi belvárosa több mint ezer műemlékkel, festői belső kikötőkkel és jellegzetes patricius házakkal büszkélkedhet. Az 1618-as dordrechti zsinat a holland protestantizmus egyik legfontosabb eseménye volt. Történelem K7: Hogyan alapozta meg Dordrecht gazdagságát a 'stapelrecht' (árumegállítási jog) a középkori Hollandiában?",
    ro: "",
    en: "Dordrecht is the oldest city in the historic County of Holland, located on an island surrounded by broad rivers in the province of South Holland. The city experienced its heyday in the Middle Ages through the so-called staple right, which forced passing ships to unload their goods and offer them at the market here, bringing immense wealth to Dordrecht. The historical inner city, with its picturesque, often crooked houses right on the water, over 1,000 listed buildings, and the massive, unfinished Grote Kerk, exudes an unmistakable maritime charm. In 1572, the First Free Assembly of the States also took place here, a key event in the independence of the Netherlands. History K7: Dordrecht had medieval staple rights. How did this privilege help the city to great wealth through tolls and trade?"
  },
    facts: {
      de: ["Die älteste Stadt in der früheren Grafschaft Holland (Stadtrechte 1220).", "Eine wasserreiche Inselstadt.", "Das Dordrechts Museum ist für seine niederländische Malerei bekannt.", "Die Erste Freie Staatenversammlung fand 1572 hier statt.", "Die Grote Kerk prägt die Skyline der Stadt.", "Grenzt direkt an den Nationalpark De Biesbosch."],
      hu: ["A korábbi Holland Grófság legrégebbi városa (városjogok: 1220).", "Vizekben gazdag szigetváros.", "A Dordrechts Museum a holland festészetről ismert.", "Itt tartották 1572-ben az első szabad rendi gyűlést.", "A Grote Kerk uralja a város látképét.", "Közvetlenül a De Biesbosch Nemzeti Parkkal határos."],
      ro: ["Cel mai vechi oraÈ™ din fostul Comitat Olanda (drepturi de oraÈ™ 1220).", "Un oraș-insulă bogat în apă.", "Muzeul Dordrechts este cunoscut pentru pictura sa olandeză.", "Prima Adunare Liberă a Statelor a avut loc aici în 1572.", "Grote Kerk domină orizontul orașului.", "Se învecinează direct cu Parcul Național De Biesbosch."],
      en: ["The oldest city in the former County of Holland (city rights 1220).", "A water-rich island city.", "The Dordrechts Museum is known for its Dutch painting.", "The First Free Assembly of the States took place here in 1572.", "The Grote Kerk dominates the city skyline.", "Borders directly on the De Biesbosch National Park."]
    },
    factsAdvanced: {
    de: [
      "Dordrecht erhielt 1220 Stadtrechte und ist die älteste noch bestehende Stadt in der historischen Region Holland.",
      "Die massige Grote Kerk hat einen auffallend schiefen, unvollendeten Turm, der aufgrund des weichen Bodens anfing zu sinken.",
      "Das Stadtzentrum liegt buchstäblich im Wasser und besitzt noch viele historische Hafenbecken ohne Ufermauern, wo die Häuser direkt aus dem Wasser ragen.",
      "Die Stadt grenzt direkt an den Nationalpark De Biesbosch, eines der wenigen Süßwasser-Gezeitengebiete Europas."
    ],
    hu: ["Dordrecht a Biesbosch Nemzeti Park, egy egyedülálló édesvízi árapály-deltavidék szomszédságában fekszik.", "A Grote Kerk hatalmas, ferde tornya befejezetlen maradt, miután a mocsaras talaj süllyedni kezdett.", "1572-ben itt tartották az Első Szabad Államok Gyűlését, amely Orániai Vilmost választotta vezetőnek.", "A város történelmi központja a vízre épült, így sok ház bejárata közvetlenül a csatornákra nyílik."],
    ro: [],
    en: [
      "Dordrecht received city rights in 1220 and is the oldest surviving city in the historical region of Holland.",
      "The massive Grote Kerk has a strikingly crooked, unfinished tower that began to sink due to the soft ground.",
      "The city center is literally on the water and still has many historical harbor basins without quays, where the houses rise directly out of the water.",
      "The city borders directly on the De Biesbosch National Park, one of the few freshwater tidal areas in Europe."
    ]
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
    descriptionAdvanced: {
    de: "Alkmaar, eine malerische Stadt in der Provinz Nordholland, ist weltweit berühmt für ihren traditionellen Käsemarkt, der jeden Freitag von April bis September stattfindet. Die Stadt bietet ein prächtiges historisches Zentrum mit vielen alten Grachten, Zugbrücken und eleganten Kaufmannshäusern, das von der reichen Vergangenheit zeugt. Alkmaar schrieb 1573 niederländische Geschichte, als es den spanischen Truppen während des Achtzigjährigen Krieges erfolgreich widerstand. Dieser wichtige Sieg, der den Wendepunkt des Krieges markierte, prägte das berühmte Sprichwort 'Der Sieg beginnt in Alkmaar'. Geschichte K6: Alkmaar besiegte die Spanier 1573, auch weil das Umland geflutet wurde. Warum war das Fluten von Land (Inundation) in den Niederlanden eine wirksame Verteidigung?",
    hu: "Alkmaar egy varázslatos város Észak-Holland tartományban, amely a világ minden táján a hagyományos sajtpiacáról (Kaasmarkt) ismert. Minden pénteken a Waagplein téren a sajthordó céhek tagjai a hagyományoknak megfelelően, fehér ruhában és színes szalmakalapokban mérlegelik és cipelik a sárga Goudát és Edamit hatalmas fa hordágyakon. Alkmaar gazdag történelemmel is bír: az 1573-as spanyol ostrom sikeres visszaverése volt az első nagy holland győzelem a nyolcvanéves háborúban, innen ered a mondás: 'Alkmaarnál kezdődik a győzelem'. Történelem K6: Miért volt morálisan olyan fontos a hollandok számára az alkmaari ostrom sikeres visszaverése?",
    ro: "",
    en: "Alkmaar, a picturesque city in the province of North Holland, is globally famous for its traditional cheese market held every Friday from April to September. The city offers a magnificent historical center with many old canals, drawbridges, and elegant merchant houses that bear witness to its rich past. Alkmaar made Dutch history in 1573 when it successfully resisted Spanish troops during the Eighty Years' War. This crucial victory, marking the turning point of the war, inspired the famous saying 'Victory begins at Alkmaar'. History K6: Alkmaar defeated the Spanish in 1573, partly because the surrounding land was flooded. Why was flooding land (inundation) an effective defense in the Netherlands?"
  },
    facts: {
      de: ["Weltberühmt für den traditionellen Käsemarkt auf dem Waagplein.", "Erfolgreiche Belagerung von Alkmaar 1573 als Wendepunkt im Achtzigjährigen Krieg.", "Beherbergt das Nationale Biermuseum De Boom.", "Das Käsemuseum befindet sich im historischen Waaghaus.", "Viele erhaltene historische Hofjes (Innenhöfe).", "Ein wichtiges kulturelles Zentrum nördlich von Amsterdam."],
      hu: ["Világhírű a Waagplein téren tartott hagyományos sajtpiacról.", "Alkmaar sikeres 1573-as ostroma fordulópont volt a nyolcvanéves háborúban.", "Itt található a De Boom Nemzeti Sörmúzeum.", "A Sajtmúzeum a történelmi Waag-épületben kapott helyet.", "Számos megőrzött történelmi Hofje (belső udvar).", "Amszterdamtól északra jelentős kulturális központ."],
      ro: ["Renumit în întreaga lume pentru piața tradițională de brânzeturi din Waagplein.", "Asediul de succes din Alkmaar din 1573 ca punct de cotitură în Războiul de Optzeci de Ani.", "Găzduiește Muzeul Național al Berii De Boom.", "Muzeul Brânzei se află în clădirea istorică Waag.", "Multe hofjes (curți) istorice conservate.", "Un important centru cultural la nord de Amsterdam."],
      en: ["World-famous for the traditional cheese market on the Waagplein.", "Successful siege of Alkmaar in 1573 as a turning point in the Eighty Years' War.", "Houses the National Beer Museum De Boom.", "The Cheese Museum is located in the historic Waag building.", "Many preserved historic hofjes (courtyards).", "An important cultural center north of Amsterdam."]
    },
    factsAdvanced: {
    de: [
      "Der Käsemarkt in Alkmaar ist der berühmteste der Niederlande; hier transportieren Käseträger in traditioneller Kleidung tonnenschwere Käselaibe.",
      "Der Sieg von Alkmaar über die spanische Belagerung 1573 war der erste große Erfolg der Niederländer im Kampf um ihre Unabhängigkeit.",
      "Das Käsemuseum der Stadt befindet sich im Waagplein, im historischen Gebäude der alten Stadtwaage.",
      "Alkmaar verfügt über 399 nationale Denkmäler, darunter malerische Höfchen (Hofjes), die früher für arme Witwen erbaut wurden."
    ],
    hu: ["Az alkmaari sajtpiac áprilistól szeptemberig működik, és évente több mint 100 000 turistát vonz.", "A városban található a Holland Sajtmúzeum (Hollands Kaasmuseum), a Mázsaház (De Waag) épületében.", "A sajthordók céhe (Kaasdragersgilde) négy különböző színű (piros, kék, sárga, zöld) csoportra oszlik.", "Alkmaar az ország egyik legfontosabb városa az orgonazene és az orgonaépítés történetében."],
    ro: [],
    en: [
      "The cheese market in Alkmaar is the most famous in the Netherlands; here, cheese carriers in traditional clothing transport wheels of cheese weighing tons.",
      "The victory of Alkmaar over the Spanish siege in 1573 was the first major success for the Dutch in the fight for their independence.",
      "The city's Cheese Museum is located at the Waagplein, in the historical building of the old weigh house.",
      "Alkmaar has 399 national monuments, including picturesque Hofjes (almshouses) previously built for poor widows."
    ]
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
    descriptionAdvanced: {
    de: "Das Mauritshuis ist ein weltbekanntes Kunstmuseum in Den Haag, das sich in einem palastartigen Stadthaus aus dem 17. Jahrhundert direkt am Hofvijver befindet. Obwohl das Museum im Vergleich zu anderen Nationalgalerien eher klein ist, beherbergt es eine der feinsten Sammlungen der niederländischen Malerei des Goldenen Zeitalters. Die Wände der prunkvollen Räume sind mit den Meisterwerken von Vermeer, Rembrandt, Rubens und Frans Hals geschmückt. Das absolute Herzstück und der unbestrittene Publikumsmagnet der Sammlung ist Johannes Vermeers faszinierendes Gemälde 'Das Mädchen mit dem Perlenohrgehänge', das oft als die 'Mona Lisa des Nordens' bezeichnet wird. Kunst K7: 'Das Mädchen mit dem Perlenohrgehänge' ist eine sogenannte 'Tronie'. Was unterscheidet eine Tronie im 17. Jahrhundert von einem klassischen Porträt?",
    hu: "A Mauritshuis (Móric-ház) Hágában található, és Hollandia egyik legjelentősebb művészeti múzeuma. A palotát Johan Maurits van Nassau-Siegen számára építették a 17. században a holland klasszicista építészet remekműveként. A múzeum világhírű a holland Aranykor festészetének páratlan gyűjteményéről. Méreteiben sokkal intimebb, mint a Rijksmuseum, mégis olyan ikonikus mesterműveknek ad otthont, mint Johannes Vermeer 'Leány gyöngyfülbevalóval' című alkotása, valamint Rembrandt 'Dr. Nicolaes Tulp anatómiája' című festménye. Művészettörténet K8: Miért tartják a 'Leány gyöngyfülbevalóval' című festményt a 'holland Mona Lisának'?",
    ro: "",
    en: "The Mauritshuis is a world-renowned art museum in The Hague, located in a palatial 17th-century townhouse right next to the Hofvijver lake. Although the museum is rather small compared to other national galleries, it houses one of the finest collections of Dutch Golden Age painting. The walls of the magnificent rooms are adorned with masterpieces by Vermeer, Rembrandt, Rubens, and Frans Hals. The absolute centerpiece and undisputed crowd-puller of the collection is Johannes Vermeer's captivating painting 'Girl with a Pearl Earring', often referred to as the 'Mona Lisa of the North'. Art K7: 'Girl with a Pearl Earring' is a so-called 'Tronie'. What distinguishes a tronie in the 17th century from a classic portrait?"
  },
    facts: {
      de: ["Beherbergt 'Das Mädchen mit dem Perlenohrgehänge' von Johannes Vermeer.", "Zeigt Rembrandts 'Die Anatomiestunde des Dr. Tulp'.", "Die königliche Gemäldegalerie ist in einem Palast untergebracht.", "Fokus auf niederländische und flämische Malerei des 17. Jahrhunderts.", "Direkt neben dem Binnenhof gelegen.", "Gilt als eines der schönsten kleinen Museen der Welt."],
      hu: ["Itt található Johannes Vermeer 'Leány gyöngyfülbevalóval' című festménye.", "Bemutatja Rembrandt 'Dr. Tulp anatómiája' című művét.", "A királyi képtár egy palotában kapott helyet.", "Főként a 17. századi holland és flamand festészetre fókuszál.", "Közvetlenül a Binnenhof mellett található.", "A világ egyik legszebb kis múzeumának tartják."],
      ro: ["Găzduiește 'Fata cu cercel de perlă' de Johannes Vermeer.", "Expune 'Lecția de anatomie a Dr. Tulp' de Rembrandt.", "Galeria regală de pictură este găzduită într-un palat.", "Se concentrează pe pictura olandeză și flamandă din secolul al XVII-lea.", "Situat chiar lângă Binnenhof.", "Considerat unul dintre cele mai frumoase muzee mici din lume."],
      en: ["Houses 'Girl with a Pearl Earring' by Johannes Vermeer.", "Displays Rembrandt's 'The Anatomy Lesson of Dr. Nicolaes Tulp'.", "The Royal Picture Gallery is housed in a palace.", "Focuses on 17th-century Dutch and Flemish painting.", "Located right next to the Binnenhof.", "Considered one of the most beautiful small museums in the world."]
    },
    factsAdvanced: {
    de: [
      "Das Gebäude wurde im 17. Jahrhundert für den Grafen Johann Moritz von Nassau-Siegen im klassizistischen Stil erbaut.",
      "Die Sammlung des Museums basiert ursprünglich auf der Gemäldesammlung von Statthalter Wilhelm V. von Oranien.",
      "Vermeers berühmtestes Werk, 'Das Mädchen mit dem Perlenohrgehänge', wird im Museum in einem Raum mit Rembrandts 'Anatomiestunde' präsentiert.",
      "Das Mauritshuis beherbergt fast 850 Gemälde, wobei der Fokus strikt auf niederländischen und flämischen Meistern des 17. Jahrhunderts liegt."
    ],
    hu: ["Az épületet a híres 17. századi holland építész, Jacob van Campen tervezte.", "A gyűjtemény magját eredetileg Orániai Vilmos V. herceg magángyűjteménye alkotta.", "Carel Fabritius 'A tengelice' (Het Puttertje) című festménye is ebben a múzeumban található.", "A múzeum közvetlenül a Binnenhof, a holland parlament történelmi épületegyüttese mellett fekszik."],
    ro: [],
    en: [
      "The building was erected in the 17th century for Count John Maurice of Nassau-Siegen in the classicist style.",
      "The museum's collection originally stems from the painting collection of Stadtholder William V, Prince of Orange.",
      "Vermeer's most famous work, 'Girl with a Pearl Earring', is presented in the museum in a room with Rembrandt's 'The Anatomy Lesson'.",
      "The Mauritshuis houses nearly 850 paintings, strictly focusing on Dutch and Flemish masters of the 17th century."
    ]
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
    descriptionAdvanced: {
    de: "Der Königliche Palast (Paleis op de Dam) in Amsterdam ist eines der prächtigsten und monumentalsten Gebäude der Niederlande und dominiert den zentralen Dam-Platz. Er wurde im 17. Jahrhundert, während des Höhepunkts des Goldenen Zeitalters, ursprünglich als gewaltiges Rathaus für die wohlhabende Handelsmetropole erbaut und sollte die enorme Macht und den Reichtum Amsterdams repräsentieren. Erst im frühen 19. Jahrhundert wurde es vom französischen König Louis Bonaparte, dem Bruder Napoleons, in einen königlichen Palast umgewandelt. Heute wird das imposante Bauwerk von der niederländischen Königsfamilie für offizielle Empfänge und staatliche Zeremonien genutzt, steht aber in der restlichen Zeit Besuchern offen. Architektur K6: Der Palast am Dam wurde auf extrem sumpfigem Boden gebaut. Wie schafften es die Baumeister des 17. Jahrhunderts, dass ein so schweres Gebäude aus Stein nicht einsinkt?",
    hu: "Az amszterdami Királyi Palota (Koninklijk Paleis) a Dam téren áll, és eredetileg nem királyi rezidenciának, hanem Amszterdam Városházának épült a 17. századi holland aranykor csúcsán. Az épület Jacob van Campen tervei alapján készült klasszicista stílusban, és a város hihetetlen gazdagságát és globális hatalmát hivatott hirdetni. Csak a 19. század elején, amikor Bonaparte Lajos (Napóleon testvére) Hollandia királya lett, alakították át palotává. Ma a holland királyi család három hivatalos palotájának egyike, amelyet állami fogadásokra használnak. Történelem K7: Hogyan tükrözte a Városháza (a mai Palota) építészete Amszterdam 17. századi globális kereskedelmi szerepét?",
    ro: "",
    en: "The Royal Palace (Paleis op de Dam) in Amsterdam is one of the most magnificent and monumental buildings in the Netherlands, dominating the central Dam Square. It was originally built in the 17th century, during the height of the Golden Age, as a massive town hall for the wealthy trading metropolis, intended to represent Amsterdam's enormous power and wealth. It was not until the early 19th century that it was transformed into a royal palace by the French King Louis Bonaparte, Napoleon's brother. Today, the imposing structure is used by the Dutch royal family for official receptions and state ceremonies, but remains open to visitors during the rest of the year. Architecture K6: The palace on the Dam was built on extremely swampy ground. How did 17th-century builders prevent such a heavy stone building from sinking?"
  },
    facts: {
      de: ["Ursprünglich als Amsterdamer Rathaus erbaut (1648).", "Gilt als das größte weltliche Gebäude des 17. Jahrhunderts.", "Wird heute für staatliche Empfänge und royale Veranstaltungen genutzt.", "Die Bürgerhalle zeigt beeindruckende Weltkarten auf dem Boden.", "Ruht auf über 13.000 Holzpfählen.", "Louis Bonaparte machte es 1808 zum Königspalast."],
      hu: ["Eredetileg amszterdami városházaként épült (1648).", "A 17. század legnagyobb világi épületének tartják.", "Ma állami fogadásokra és királyi rendezvényekre használják.", "A Polgárok Csarnoka padlóján lenyűgöző világtérképek láthatók.", "Több mint 13 000 facölöpön nyugszik.", "Louis Bonaparte tette királyi palotává 1808-ban."],
      ro: ["Construit inițial ca Primărie a Amsterdamului (1648).", "Considerată cea mai mare clădire seculară din secolul al XVII-lea.", "Astăzi este folosit pentru recepții de stat și evenimente regale.", "Sala Cetățenilor prezintă hărți ale lumii impresionante pe podea.", "Se sprijină pe peste 13.000 de piloni de lemn.", "Louis Bonaparte l-a transformat în palat regal în 1808."],
      en: ["Originally built as the Amsterdam Town Hall (1648).", "Considered the largest secular building of the 17th century.", "Today it is used for state receptions and royal events.", "The Citizens' Hall features impressive world maps on the floor.", "Rests on over 13,000 wooden piles.", "Louis Bonaparte made it a royal palace in 1808."]
    },
    factsAdvanced: {
    de: [
      "Das Gebäude ruht auf exakt 13.659 Holzpfählen, die tief in den weichen, morastigen Boden Amsterdams gerammt wurden.",
      "Es wurde von dem renommierten Architekten Jacob van Campen entworfen und gilt als das wichtigste Gebäude des niederländischen Klassizismus.",
      "Die Bürgersaal im Inneren des Palastes enthält riesige, in den Marmorboden eingelassene Landkarten, die Amsterdam als Zentrum des Universums darstellen.",
      "Das Gebäude wurde erst 1808 durch Louis Bonaparte (König von Holland) von einem Rathaus in einen Königspalast umgewandelt."
    ],
    hu: ["Az épület több mint 13 600 facölöpön nyugszik, hogy ne süllyedjen el a mocsaras amszterdami talajban.", "A palota központi csarnokának (Burgerzaal) padlóján három hatalmas térkép (világtérképek és csillagtérkép) látható.", "A homlokzaton lévő Atlasz-szobor a világ terhét a vállán hordozó mitológiai alakot ábrázolja.", "A palota bútorzatának jelentős része Bonaparte Lajos király idejéből, az empíre stílus korából származik."],
    ro: [],
    en: [
      "The building rests on exactly 13,659 wooden pilings driven deep into Amsterdam's soft, boggy ground.",
      "It was designed by renowned architect Jacob van Campen and is considered the most important building of Dutch Classicism.",
      "The Citizens' Hall inside the palace features huge maps inlaid in the marble floor, depicting Amsterdam as the center of the universe.",
      "The building was converted from a town hall into a royal palace in 1808 by Louis Bonaparte (King of Holland)."
    ]
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
        descriptionAdvanced: {
    de: "Die Windmühlen von Kinderdijk bilden das größte erhaltene Windmühlennetzwerk der Niederlande und sind ein ikonisches Symbol für den Jahrhunderte alten Kampf des Landes gegen das Wasser. Die Gruppe von 19 Mühlen wurde um das Jahr 1740 errichtet, um das tiefliegende Polderland des Alblasserwaard zu entwässern, indem sie das Wasser über verschiedene Höhenstufen in den Fluss Lek pumpten. Diese ausgeklügelte Wasserwirtschaftsstruktur zeigt die Meisterschaft der Niederländer in der Landschaftsgestaltung und Entwässerungstechnik, lange bevor Dampfmaschinen und Elektrizität genutzt wurden. Die malerisch an den Kanälen aufgereihten Mühlen wurden 1997 zum UNESCO-Weltkulturerbe ernannt. Physik K6: Die Mühlen in Kinderdijk hoben das Wasser in ein höheres Becken. Welche einfache Maschine im Inneren der Mühle nutzte die Drehbewegung, um das Wasser nach oben zu befördern?",
    hu: "Kinderdijk, Dél-Hollandia szívében, a holland vízgazdálkodás és mérnöki zsenialitás legszebb szimbóluma. Az itteni 19 monumentális szélmalom 1738 és 1740 között épült azzal a céllal, hogy kiszivattyúzza a felesleges vizet a környező polderekről, megakadályozva az állandó áradásokat. A szélmalmok szorosan együttműködtek a zsiliprendszerekkel, a csatornákkal és a szivattyúállomásokkal egy rendkívül komplex védelmi hálózatban. Az UNESCO 1997-ben a Világörökség részévé nyilvánította a területet, mivel az ember és a természet harmonikus küzdelmét példázza. Természetismeret K7: Hogyan pumpálták a vizet a szélmalmok magasabb szintekre, mielőtt a folyóba engedték volna?",
    ro: "",
    en: "The windmills of Kinderdijk form the largest surviving windmill network in the Netherlands and are an iconic symbol of the country's centuries-old struggle against the water. The group of 19 mills was built around 1740 to drain the low-lying polder land of the Alblasserwaard by pumping the water up through various elevation levels into the river Lek. This ingenious water management structure demonstrates the mastery of the Dutch in landscaping and drainage technology long before steam engines and electricity were used. The mills, picturesquely lined up along the canals, were designated a UNESCO World Heritage site in 1997. Physics K6: The mills in Kinderdijk lifted water into a higher basin. Which simple machine inside the mill used the rotary motion to move the water upwards?"
  },
    facts: {
      de: ["Seit 1997 Teil des UNESCO-Weltkulturerbes.", "Besteht aus 19 erhaltenen Windmühlen aus dem Jahr 1740.", "Erbaut, um den Alblasserwaard vor Überschwemmungen zu bewahren.", "Ikonisches Symbol für das niederländische Wassermanagement.", "Besucher können einige der Mühlen von innen besichtigen.", "Die Mühlen können noch heute Wasser pumpen."],
      hu: ["1997 óta az UNESCO Világörökség része.", "19 fennmaradt szélmalomból áll 1740-ből.", "Az Alblasserwaard áradásoktól való megvédésére épült.", "A holland vízgazdálkodás ikonikus szimbóluma.", "A látogatók néhány malmot belülről is megtekinthetnek.", "A malmok még ma is képesek vizet szivattyúzni."],
      ro: ["Parte a Patrimoniului Mondial UNESCO din 1997.", "Constă din 19 mori de vânt conservate din anul 1740.", "Construite pentru a proteja Alblasserwaard de inundații.", "Simbol iconic al managementului apei olandez.", "Vizitatorii pot vedea interiorul unora dintre mori.", "Morile pot pompa apă și astăzi."],
      en: ["Part of the UNESCO World Heritage Site since 1997.", "Consists of 19 preserved windmills from 1740.", "Built to protect the Alblasserwaard from flooding.", "Iconic symbol of Dutch water management.", "Visitors can view the inside of some of the mills.", "The mills can still pump water today."]
    },
      factsAdvanced: {
    de: [
      "Das Netzwerk in Kinderdijk besteht aus 19 intakten Mühlen, mehr als an jedem anderen Ort in den Niederlanden.",
      "Sie waren Teil eines komplexen Systems, das Wasser aus dem Polder in Becken pumpte, um es bei Ebbe in den Fluss abzulassen.",
      "Seit 1997 steht Kinderdijk als herausragendes Beispiel der Wasserbaukunst auf der Liste des UNESCO-Weltkulturerbes.",
      "Einige der Mühlen in Kinderdijk werden noch heute von traditionellen Müllern bewohnt und betrieben."
    ],
    hu: ["A 19 malom közül sokat még mindig a molnárcsaládok laknak, akik felügyelik a működésüket.", "Télen a befagyott csatornákon a Kinderdijk malmai között korcsolyázni is lehet, ami festői látvány.", "A malmok között kétféle típus dominál: a nyolcszögletű 'grondzeiler' és a kerek téglamalmak.", "Nyáron, szombatonként a malmok mind egyszerre forognak, emlékezve a régi időkre."],
    ro: [],
    en: [
      "The network in Kinderdijk consists of 19 intact mills, more than anywhere else in the Netherlands.",
      "They were part of a complex system that pumped water from the polder into basins to be discharged into the river at low tide.",
      "Since 1997, Kinderdijk has been on the UNESCO World Heritage List as an outstanding example of hydraulic engineering.",
      "Some of the mills in Kinderdijk are still inhabited and operated by traditional millers today."
    ]
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
        descriptionAdvanced: {
    de: "Der Afsluitdijk (Abschlussdeich) ist eines der monumentalsten Ingenieursbauwerke der Welt und ein Symbol für den niederländischen Schutz vor der See. Der gewaltige, 32 Kilometer lange Deich wurde 1932 vollendet und verbindet die Provinzen Nordholland und Friesland, wodurch er die gefährliche, salzige Meeresbucht Zuiderzee von der Nordsee abtrennte. Dieses Jahrhundertbauwerk verwandelte die unberechenbare Zuiderzee in den friedlichen Süßwassersee IJsselmeer und schützte hunderte Kilometer Küstenlinie dauerhaft vor verheerenden Sturmfluten. Der Deich ist nicht nur ein Schutzwall, sondern beherbergt auch eine wichtige Autobahn und komplexe Schleusensysteme zur Regulierung des Wasserstandes. Geografie K7: Der Afsluitdijk trennte eine Meeresbucht ab. Welchen Vorteil bietet ein großer Süßwassersee im Vergleich zu einer Meeresbucht für die Landwirtschaft?",
    hu: "Az Afsluitdijk (Zárógát) Hollandia egyik leglenyűgözőbb mérnöki teljesítménye, egy 32 kilométer hosszú gát, amely Észak-Holland és Frízföld tartományokat köti össze. 1932-ben fejezték be azzal a céllal, hogy lezárja a sekély Zuiderzee-t (Déli-tenger), megvédve ezzel a partvidéket a pusztító áradásoktól és vihardagályoktól. A gát megépítésével a sós vizű Zuiderzee egy édesvizű tóvá, az IJsselmeer-ré alakult át. A gáton autópálya fut végig, a közepén lévő kilátópontnál pedig egy emlékmű tiszteleg a tervező, Cornelis Lely előtt. Földrajz K8: Milyen ökológiai és gazdasági hatásai voltak a Zuiderzee lezárásának a part menti falvakra?",
    ro: "",
    en: "The Afsluitdijk (Enclosure Dike) is one of the world's most monumental engineering structures and a symbol of Dutch protection from the sea. Completed in 1932, the massive 32-kilometer-long dike connects the provinces of North Holland and Friesland, separating the dangerous, salty Zuiderzee bay from the North Sea. This construction of the century transformed the unpredictable Zuiderzee into the peaceful freshwater lake IJsselmeer and permanently protected hundreds of kilometers of coastline from devastating storm surges. The dike is not only a protective wall but also houses an important highway and complex lock systems to regulate the water level. Geography K7: The Afsluitdijk separated a bay. What advantage does a large freshwater lake offer over a saltwater bay for agriculture?"
  },
    facts: {
      de: ["32 Kilometer lang und verbindet Nordholland mit Friesland.", "Verwandelte die salzige Zuiderzee in das süße IJsselmeer.", "Ein zentrales Bauwerk der Zuiderzeewerke.", "Schützt weite Teile des Landes vor Überschwemmungen.", "Führt eine Autobahn und einen Radweg über den Damm.", "Wurde von dem Ingenieur Cornelis Lely entworfen."],
      hu: ["32 kilométer hosszú, és Észak-Hollandiát köti össze Frízfölddel.", "A sós Zuiderzeet édes IJsselmeerré változtatta.", "A Zuiderzee-munkálatok központi építménye.", "Az ország nagy részét védi az árvizektől.", "Egy autópálya és egy kerékpárút vezet át a gáton.", "Cornelis Lely mérnök tervezte."],
      ro: ["Are o lungime de 32 de kilometri și leagă Olanda de Nord de Frizia.", "A transformat Zuiderzee sărat în IJsselmeer dulce.", "O structură centrală a Lucrărilor Zuiderzee.", "Protejează mari părți ale țării de inundații.", "Poartă o autostradă și o pistă de biciclete peste baraj.", "A fost proiectat de inginerul Cornelis Lely."],
      en: ["32 kilometers long, connecting North Holland with Friesland.", "Transformed the salty Zuiderzee into the fresh IJsselmeer.", "A central structure of the Zuiderzee Works.", "Protects large parts of the country from flooding.", "Carries a highway and a bicycle path across the dam.", "Was designed by the engineer Cornelis Lely."]
    },
      factsAdvanced: {
    de: [
      "Der Bau des 32 Kilometer langen Afsluitdijk dauerte von 1927 bis 1932 und wurde größtenteils in Handarbeit und mit einfachen Maschinen durchgeführt.",
      "Durch den Deich verkürzte sich die zu schützende niederländische Küstenlinie um rund 300 Kilometer.",
      "Der Deich verwandelte das Salzwasser der Zuiderzee allmählich in das Süßwasser des heutigen IJsselmeers.",
      "Am Deich befindet sich ein Monument für Cornelis Lely, den Ingenieur und Politiker, der das Projekt entwarf und durchsetzte."
    ],
    hu: ["A gát építése során hatalmas mennyiségű agyagot és bazalttömböket használtak fel, melyeket hajókkal szállítottak.", "Az Afsluitdijk 90 méter széles és 7,2 méterrel magasodik a tengerszint fölé.", "Éjszaka a gát zsilipkapuit Daan Roosegaarde különleges fényművészeti installációja, a 'Gates of Light' világítja meg.", "A gáton nagyszabású árapály-erőmű kísérletek is zajlanak (Blue Energy) az édes- és sós víz keveredéséből adódó energia hasznosítására."],
    ro: [],
    en: [
      "The construction of the 32-kilometer Afsluitdijk lasted from 1927 to 1932 and was mostly done by hand and with simple machines.",
      "The dike shortened the Dutch coastline requiring protection by around 300 kilometers.",
      "The dike gradually transformed the saltwater of the Zuiderzee into the freshwater of today's IJsselmeer.",
      "At the dike stands a monument to Cornelis Lely, the engineer and politician who designed and pushed through the project."
    ]
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
        descriptionAdvanced: {
    de: "Der Friedenspalast (Vredespaleis) in Den Haag ist ein prächtiges, schlossartiges Gebäude und weltweit ein mächtiges Symbol für internationales Recht und globale Gerechtigkeit. Er wurde 1913 nach einem Architekturwettbewerb erbaut, großzügig finanziert durch eine Spende des amerikanischen Stahlmagnaten und Philanthropen Andrew Carnegie. Heute beherbergt das Gebäude den Internationalen Gerichtshof (das höchste Rechtsorgan der Vereinten Nationen), den Ständigen Schiedshof und eine der größten Bibliotheken für Völkerrecht weltweit. Die Ausstattung des Palastes besteht aus wertvollen Materialien und Kunstwerken, die von Ländern aus der ganzen Welt als Friedensgeste gespendet wurden. Politik K8: Der Internationale Gerichtshof im Friedenspalast verhandelt keine Kriminalfälle von Einzelpersonen. Wer sind die einzigen Parteien, die vor diesem Gericht verklagt werden können?",
    hu: "A hágai Béke Palota (Vredespaleis) a nemzetközi jog és a globális konfliktusmegoldás szimbolikus központja. A lenyűgöző neoreneszánsz épületet 1913-ban adták át az amerikai filantróp, Andrew Carnegie adományának köszönhetően. Jelenleg az ENSZ Nemzetközi Bírósága (ICJ) és az Állandó Választottbíróság (PCA) székhelye, valamint a hágai Nemzetközi Jogi Akadémia és egy hatalmas jogi könyvtár is itt működik. A palota belső tereit a világ különböző nemzetei által adományozott műalkotások és építőanyagok díszítik. Társadalomismeret K8: Mi volt a motiváció a Béke Palota felépítésére közvetlenül az első világháború előtt?",
    ro: "Palatul Păcii din Haga (Vredespaleis) este centrul simbolic al dreptului internațional și al soluționării conflictelor globale. Uimitoarea clădire neo-renascentistă a fost finalizată în 1913, grație unei donații din partea filantropului american Andrew Carnegie. În prezent, găzduiește Curtea Internațională de Justiție a ONU (CIJ) și Curtea Permanentă de Arbitraj (CPA), precum și Academia de Drept Internațional de la Haga și o vastă bibliotecă juridică. Interioarele palatului sunt decorate cu opere de artă și materiale de construcție donate de diferite națiuni din întreaga lume. Studii sociale K8: Care a fost motivația din spatele construirii Palatului Păcii chiar înainte de Primul Război Mondial?",
    en: "The Peace Palace (Vredespaleis) in The Hague is a magnificent, castle-like building and a powerful global symbol of international law and justice. Built in 1913 following an architectural competition, it was generously funded by a donation from American steel magnate and philanthropist Andrew Carnegie. Today, the building houses the International Court of Justice (the highest judicial body of the United Nations), the Permanent Court of Arbitration, and one of the largest international law libraries in the world. The palace's interior is made of precious materials and artworks donated by countries from all over the world as a gesture of peace. Politics K8: The International Court of Justice in the Peace Palace does not try criminal cases of individuals. Who are the only parties that can be sued before this court?"
  },
    facts: {
      de: ["Sitz des Internationalen Gerichtshofs der UN.", "Beherbergt auch den Ständigen Schiedshof und eine große Bibliothek.", "Eröffnet im Jahr 1913 kurz vor dem Ersten Weltkrieg.", "Finanziert durch den Philanthropen Andrew Carnegie.", "Länder weltweit spendeten Materialien für den Bau.", "Symbolisiert Den Haags Status als Stadt des Friedens."],
      hu: ["Az ENSZ Nemzetközi Bíróságának székhelye.", "Itt található az Állandó Választottbíróság és egy nagy könyvtár is.", "1913-ban, nem sokkal az első világháború előtt nyílt meg.", "Andrew Carnegie filantróp finanszírozta.", "A világ számos országa adományozott anyagokat az építkezéshez.", "Hága mint a béke városa státuszának szimbóluma."],
      ro: ["Sediul Curții Internaționale de Justiție a ONU.", "Găzduiește, de asemenea, Curtea Permanentă de Arbitraj și o mare bibliotecă.", "Deschis în 1913 chiar înainte de Primul Război Mondial.", "Finanțat de filantropul Andrew Carnegie.", "Țări din întreaga lume au donat materiale pentru construcție.", "Simbolizează statutul Hagăi de oraș al păcii."],
      en: ["Seat of the UN International Court of Justice.", "Also houses the Permanent Court of Arbitration and a large library.", "Opened in 1913 shortly before World War I.", "Funded by philanthropist Andrew Carnegie.", "Countries around the world donated materials for construction.", "Symbolizes The Hague's status as a city of peace."]
    },
      factsAdvanced: {
    de: [
      "Der Bau des Vredespaleis wurde durch eine Spende von 1,5 Millionen Dollar durch den Industriellen Andrew Carnegie ermöglicht.",
      "Der Friedenspalast ist Sitz des Internationalen Gerichtshofs, des einzigen Hauptorgans der UN, das sich nicht in New York befindet.",
      "Die Baumaterialien und das Interieur stammen aus der ganzen Welt; so stiftete Italien Marmor und die Schweiz die Turmuhr.",
      "Eine 'Ewige Friedensflamme' brennt vor den Toren des Palastes, umgeben vom Weltfriedenspfad, der Steine aus 196 Ländern enthält."
    ],
    hu: ["Az épülethez szükséges építőanyagokat (pl. márványt, fát, selymet) több tucat különböző ország adományozta a világbéke jegyében.", "Az 'Örök Béke Lángja' emlékmű a palota kapuja előtt folyamatosan ég.", "Bár az ENSZ egyik legfőbb szerve, a Nemzetközi Bíróság, a palota maga egy holland alapítvány tulajdonában van.", "A palotát a francia építész, Louis Cordonnier tervezte egy nemzetközi pályázat győzteseként."],
    ro: [
      "Materialele de construcție pentru clădire (de ex., marmură, lemn, mătase) au fost donate de zeci de țări diferite în numele păcii mondiale.",
      "Monumentul 'Flacăra Păcii Eterne' arde continuu în fața porților palatului.",
      "Deși găzduiește unul dintre principalele organe ale ONU, Curtea Internațională de Justiție, palatul în sine este deținut de o fundație olandeză.",
      "Palatul a fost proiectat de arhitectul francez Louis Cordonnier, în urma unui concurs internațional."
    ],
    en: [
      "The construction of the Peace Palace was made possible by a $1.5 million donation from industrialist Andrew Carnegie.",
      "The Peace Palace is the seat of the International Court of Justice, the only principal organ of the UN not located in New York.",
      "The building materials and interior stem from all over the world; for example, Italy donated marble and Switzerland the tower clock.",
      "An 'Eternal Peace Flame' burns outside the gates of the palace, surrounded by the World Peace Path containing stones from 196 countries."
    ]
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
        descriptionAdvanced: {
    de: "Das Wattenmeer (Waddenzee) im Norden der Niederlande ist eines der dynamischsten und bedeutendsten Feuchtgebiete der Welt, ein riesiges System aus Gezeitenflächen, Sandbänken und Salzwiesen. Es erstreckt sich entlang der niederländischen Küste bis nach Deutschland und Dänemark und verändert mit Ebbe und Flut zweimal täglich komplett sein Gesicht. Dieser einzigartige Lebensraum ist von unschätzbarem Wert für die Artenvielfalt und dient jährlich etwa 10 bis 12 Millionen Zugvögeln als unverzichtbarer Rast- und Futterplatz auf ihrer Reise. Die Region ist auch berühmt für das 'Wattwandern' (Wadlopen), bei dem man bei Ebbe zu Fuß über den freigelegten Meeresboden zu den Nordseeinseln wandern kann. Biologie K6: Das Wattenmeer fällt bei Ebbe trocken und wird bei Flut überschwemmt. Warum finden Vögel genau in dieser Schlammschicht bei Ebbe so viel Nahrung?",
    hu: "A Wadden-tenger (Waddenzee) a világ legnagyobb egybefüggő árapálysíksága, amely Hollandia partjaitól egészen Németországig és Dániáig húzódik. A tenger lenyűgöző dinamikája miatt apálykor a víz szinte teljesen visszahúzódik, hatalmas iszap- és homokpadokat hagyva hátra, amelyek millió költöző madár és fóka számára nyújtanak táplálékot és pihenőhelyet. Ezt a felbecsülhetetlen ökológiai értéket az UNESCO a Világörökség részévé nyilvánította. Az itt élő hollandok kedvelt tevékenysége a 'wadlopen', vagyis az apálykor az iszapban tett gyalogtúra a szigetek felé. Környezetismeret K7: Miért kritikus a Wadden-tenger ökoszisztémája a költöző madarak túlélése szempontjából?",
    ro: "Marea Wadden (Waddenzee) este cel mai mare sistem continuu de bancuri de nisip și noroi intertidale din lume, întinzându-se de pe coasta olandeză până în Germania și Danemarca. Datorită dinamicii uimitoare a mării, la reflux, apa se retrage aproape complet, lăsând în urmă întinderi vaste de noroi și bancuri de nisip care oferă hrană și un loc de odihnă pentru milioane de păsări migratoare și foci. Această valoare ecologică inestimabilă a fost declarată Patrimoniu Mondial de către UNESCO. O activitate preferată de olandezii care trăiesc aici este 'wadlopen', o drumeție la reflux prin noroi către insule. Științele naturii K7: De ce este ecosistemul Mării Wadden esențial pentru supraviețuirea păsărilor migratoare?",
    en: "The Wadden Sea (Waddenzee) in the north of the Netherlands is one of the most dynamic and important wetlands in the world, a vast system of intertidal mudflats, sandbanks, and salt marshes. It stretches along the Dutch coast to Germany and Denmark, completely changing its face twice a day with the ebb and flow of the tide. This unique habitat is of inestimable value for biodiversity and serves as an indispensable resting and feeding ground for about 10 to 12 million migratory birds every year. The region is also famous for 'mudflat hiking' (wadlopen), where you can walk across the exposed seabed to the North Sea islands at low tide. Biology K6: The Wadden Sea falls dry at low tide and is flooded at high tide. Why do birds find so much food in this mud layer specifically at low tide?"
  },
    facts: {
      de: ["Seit 2009 UNESCO-Weltnaturerbe.", "Größtes Gezeitensystem der Welt.", "Ein wichtiger Lebensraum für Seehunde.", "Rastplatz für Millionen von Zugvögeln jährlich.", "Wattwandern (Wadlopen) ist eine beliebte Aktivität.", "Erstreckt sich entlang der niederländischen Küste und den Nordseeinseln."],
      hu: ["2009 óta az UNESCO természeti világörökség része.", "A világ legnagyobb árapály-rendszere.", "A fókák fontos élőhelye.", "Évente vándormadarak millióinak pihenőhelye.", "Az iszapjárás (Wadlopen) népszerű tevékenység.", "A holland partok és az északi-tengeri szigetek mentén húzódik."],
      ro: ["Patrimoniul natural mondial UNESCO din 2009.", "Cel mai mare sistem de maree din lume.", "Un habitat important pentru foci.", "Loc de odihnă pentru milioane de păsări migratoare în fiecare an.", "Mersul pe noroi (Wadlopen) este o activitate populară.", "Se întinde de-a lungul coastei olandeze și a insulelor Mării Nordului."],
      en: ["UNESCO World Natural Heritage Site since 2009.", "Largest tidal system in the world.", "An important habitat for seals.", "Resting place for millions of migratory birds annually.", "Mudflat walking (Wadlopen) is a popular activity.", "Stretches along the Dutch coast and the North Sea islands."]
    },
      factsAdvanced: {
    de: [
      "Das Wattenmeer ist das größte zusammenhängende Gezeitensystem aus Sand- und Schlickflutten der Welt.",
      "Das gesamte niederländische Wattenmeer steht unter strengem Naturschutz und gehört zum UNESCO-Weltnaturerbe.",
      "Rund 10.000 verschiedene Pflanzen- und Tierarten leben im Wattenmeer, von mikroskopisch kleinen Algen bis hin zu Seehunden.",
      "Beim traditionellen Wadlopen (Wattwandern) navigieren Führer Gruppen bei Ebbe durch den Schlick des Meeresbodens."
    ],
    hu: ["A Wadden-tenger naponta kétszer, árapály idején drasztikusan változtatja a kinézetét és a vízszintjét.", "A terület több mint 10 000 növény- és állatfajnak ad otthont, a mikroszkopikus algáktól a tengeri emlősökig.", "A borjúfókák (gewone zeehond) nagy számban pihennek a napon sütkérezve a felszínre bukkanó homokpadokon.", "Az iszaptúrákat (wadlopen) szigorúan csak tapasztalt helyi vezetőkkel szabad megtenni a gyorsan emelkedő vízszint miatt."],
    ro: [
      "Marea Wadden își schimbă drastic aspectul și nivelul apei de două ori pe zi din cauza mareelor.",
      "Zona găzduiește peste 10.000 de specii de plante și animale, de la alge microscopice la mamifere marine.",
      "Focile comune (gewone zeehond) se odihnesc în număr mare, la soare, pe bancurile de nisip care apar la suprafață.",
      "Drumețiile prin noroi (wadlopen) ar trebui făcute strict doar cu ghizi locali cu experiență, din cauza nivelului apei care crește rapid."
    ],
    en: [
      "The Wadden Sea is the largest unbroken system of intertidal sand and mud flats in the world.",
      "The entire Dutch Wadden Sea is strictly protected and is a UNESCO World Heritage natural site.",
      "Around 10,000 different plant and animal species live in the Wadden Sea, from microscopic algae to seals.",
      "During traditional wadlopen (mudflat hiking), guides navigate groups through the mud of the seabed at low tide."
    ]
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
        descriptionAdvanced: {
    de: "Der Nationalpark De Biesbosch liegt in den Provinzen Südholland und Nordbrabant und ist eines der letzten großen Süßwasser-Gezeitengebiete Europas. Die einzigartige Landschaft aus verwinkelten Flüssen, Inseln, Weidenwäldern und Schilffeldern entstand erst im Jahr 1421, als die verheerende St.-Elisabeth-Flut unzählige Dörfer zerstörte und das Land in ein großes Binnenmeer verwandelte. Heute ist der Biesbosch ein wahres Labyrinth aus Wasserwegen, das man am besten geräuschlos mit einem Kanu oder Flüsterboot erkundet. Der Park ist ein Paradies für Wasservögel und eine der wenigen Regionen in den Niederlanden, in denen der Biber, der hier erfolgreich wieder angesiedelt wurde, in großer Zahl vorkommt. Geografie K7: Der Biesbosch ist ein Süßwasser-Gezeitengebiet. Wie können Ebbe und Flut weit im Landesinneren an einem Fluss auftreten, obwohl das Wasser süß ist?",
    hu: "A De Biesbosch Nemzeti Park Hollandia egyik legnagyobb nemzeti parkja, egy hatalmas, édesvízi árapály-deltavidék Dél-Holland és Észak-Brabant határán. Ez a vízilabirintusokkal, fűzfaerdőkkel és nádasokkal teli mocsárvidék az 1421-es Szent Erzsébet-napi árvíz során jött létre, amikor a tenger áttörte a gátakat és tucatnyi falut elpusztított. Ma a park a természetjárók, kenusok és madármegfigyelők paradicsoma, és az egyik legsikeresebb helyszíne a hódok hollandiai visszatelepítésének. Földrajz K6: Hogyan képes egy ilyen mocsárvidék csökkenteni a folyami áradások veszélyét a környező városok számára?",
    ro: "Parcul Național De Biesbosch este unul dintre cele mai mari parcuri naționale din Olanda, o zonă umedă masivă, o deltă cu maree cu apă dulce la granița dintre Olanda de Sud și Brabantul de Nord. Această mlaștină plină de labirinturi de apă, păduri de sălcii și stuf a fost formată în timpul inundației de Sfânta Elisabeta din 1421, când marea a rupt digurile și a distrus zeci de sate. Astăzi, parcul este un paradis pentru drumeții pe natură, canotori și observatori de păsări și unul dintre cele mai de succes locuri pentru reintroducerea castorilor în Olanda. Geografie K6: Cum poate o astfel de zonă umedă să reducă riscul inundațiilor fluviale pentru orașele din jur?",
    en: "De Biesbosch National Park, located in the provinces of South Holland and North Brabant, is one of the last major freshwater tidal areas in Europe. The unique landscape of winding rivers, islands, willow forests, and reed beds was created only in 1421, when the devastating St. Elizabeth's flood destroyed countless villages and turned the land into a large inland sea. Today, the Biesbosch is a true labyrinth of waterways, best explored silently by canoe or whisper boat. The park is a paradise for water birds and one of the few regions in the Netherlands where the beaver, successfully reintroduced here, is found in large numbers. Geography K7: The Biesbosch is a freshwater tidal area. How can tides occur far inland on a river even though the water is fresh?"
  },
    facts: {
      de: ["Ein seltenes Süßwasser-Gezeitensystem.", "Entstand durch die St.-Elisabeth-Flut im Jahr 1421.", "Bekannt für seine Population an Europäischen Bibern.", "Sehr beliebt für Kanu- und Flüsterboot-Touren.", "Wichtiger Brutplatz für viele Wasservögel.", "Liegt an der Grenze von Südholland und Nordbrabant."],
      hu: ["Ritka édesvízi árapály-rendszer.", "Az 1421-es Szent Erzsébet-árvíz révén alakult ki.", "Híres európai hódpopulációjáról.", "Nagyon népszerű a kenu- és suttogócsónak-túrákhoz.", "Sok vízimadár fontos fészkelőhelye.", "Dél-Holland és Észak-Brabant határán fekszik."],
      ro: ["Un sistem rar de maree cu apă dulce.", "Creat de inundația Sf. Elisabeta din 1421.", "Renumit pentru populația sa de castori europeni.", "Foarte popular pentru excursiile cu canoe și bărci cu șoapte.", "Loc important de reproducere pentru multe păsări de apă.", "Situat la granița dintre Olanda de Sud și Brabantul de Nord."],
      en: ["A rare freshwater tidal system.", "Created by the St. Elizabeth's flood in 1421.", "Famous for its population of European beavers.", "Very popular for canoe and whisper boat tours.", "Important breeding ground for many water birds.", "Located on the border of South Holland and North Brabant."]
    },
      factsAdvanced: {
    de: [
      "Die Landschaft des Biesbosch entstand in einer einzigen Sturmnacht, der St.-Elisabeth-Flut im Jahr 1421.",
      "Der Biesbosch ist eines der wenigen Gebiete der Erde, wo Ebbe und Flut in einer reinen Süßwasserumgebung auftreten.",
      "Im Zweiten Weltkrieg diente das unübersichtliche Schilflabyrinth niederländischen Widerstandskämpfern als sicheres Versteck.",
      "Der Biber wurde 1988 im Biesbosch wieder angesiedelt und gilt heute als das Symboltier des Nationalparks."
    ],
    hu: ["A De Biesbosch a ritka édesvízi árapályos területek egyike Európában.", "A park számos szigete csak vízen keresztül (kenuval vagy elektromos csónakkal) közelíthető meg.", "A területet a második világháború alatt holland ellenállók használták rejtekhelyként és csempészútvonalként.", "A hódokat 1988-ban telepítették vissza a Biesbosch-ba, és mára virágzó populációjuk van."],
    ro: [
      "De Biesbosch este una dintre puținele zone rare de maree cu apă dulce din Europa.",
      "Multe dintre insulele parcului pot fi accesate doar pe apă (cu canoea sau barca electrică).",
      "Zona a fost folosită de membrii rezistenței olandeze în timpul celui de-al Doilea Război Mondial ca ascunzătoare și rută de contrabandă.",
      "Castorii au fost reintroduși în Biesbosch în 1988 și acum au o populație înfloritoare."
    ],
    en: [
      "The landscape of the Biesbosch was formed in a single stormy night, the St. Elizabeth's flood of 1421.",
      "The Biesbosch is one of the few areas on Earth where tides occur in a purely freshwater environment.",
      "During World War II, the confusing labyrinth of reeds served as a safe hideout for Dutch resistance fighters.",
      "The beaver was reintroduced to the Biesbosch in 1988 and is now considered the symbol of the national park."
    ]
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
        descriptionAdvanced: {
    de: "Der Nationalpark Zuid-Kennemerland erstreckt sich entlang der Nordseeküste zwischen Haarlem und Zandvoort und ist ein ausgedehntes Naturschutzgebiet von rauer Schönheit. Die Landschaft wird dominiert von weiten, windgepeitschten Dünenketten, verborgenen Dünenseen und alten Kiefernwäldern, die einst von wohlhabenden Amsterdamer Kaufleuten als Sommerresidenzen gepflanzt wurden. Der Park spielt eine wichtige Rolle im Küstenschutz und der Trinkwassergewinnung für die Region. Zur Erhaltung der halboffenen Dünenlandschaft werden große Pflanzenfresser eingesetzt, darunter schottische Hochlandrinder und die beeindruckenden Wisente (europäische Bisons), die hier frei umherstreifen. Biologie K6: In Zuid-Kennemerland weiden Wisente und Hochlandrinder. Warum setzen Naturschützer große Pflanzenfresser ein, um die Dünenlandschaft offen zu halten?",
    hu: "A Zuid-Kennemerland Nemzeti Park Észak-Holland partvidékén terül el, Haarlem és Zandvoort közelében. A parkot kiterjedt, tengeri szelek által formált homokdűnék, dűnevölgyek, ritka fenyőerdők és érintetlen tengerparti sávok alkotják. A terület ökoszisztémájának egyensúlyát olyan legelésző nagyvadakkal tartják fenn, mint a skót felföldi marhák, a konik lovak és a visszatelepített, ősi európai bölény, a wisent. A park a városi lakosság kedvelt rekreációs területe túrázásra és kerékpározásra. Környezetismeret K6: Milyen szerepet játszanak a növények (pl. a dűnefű) a homokdűnék stabilizálásában a tengerparton?",
    ro: "Parcul Național Zuid-Kennemerland este situat pe coasta Olandei de Nord, lângă Haarlem și Zandvoort. Parcul este format din întinderi vaste de dune de nisip sculptate de vânturile marine, văi ale dunelor, păduri rare de pini și zone de coastă imaculate. Echilibrul ecosistemului zonei este menținut de vânatul mare care pășunează, precum vitele Scottish Highland, caii Konik și reintrodusul bizon european antic, zimbrul. Parcul este o zonă de recreere populară pentru populația urbană, ideală pentru drumeții și ciclism. Științele naturii K6: Ce rol joacă plantele (ex. iarba de dune) în stabilizarea dunelor de nisip de pe coastă?",
    en: "Zuid-Kennemerland National Park stretches along the North Sea coast between Haarlem and Zandvoort and is an extensive nature reserve of rugged beauty. The landscape is dominated by sweeping, windswept dune chains, hidden dune lakes, and old pine forests that were once planted as summer residences by wealthy Amsterdam merchants. The park plays an important role in coastal protection and drinking water extraction for the region. To maintain the semi-open dune landscape, large herbivores are used, including Scottish Highland cattle and impressive European bison (wisents) that roam freely here. Biology K6: Wisents and Highland cattle graze in Zuid-Kennemerland. Why do conservationists use large herbivores to keep the dune landscape open?"
  },
    facts: {
      de: ["Beherbergt eine freilebende Herde von Wisenten (Europäischen Bisons).", "Schützt ein ausgedehntes und dynamisches Dünengebiet.", "Ein beliebtes Erholungsgebiet nahe Amsterdam und Haarlem.", "Wichtig für die Gewinnung von sauberem Trinkwasser.", "Bietet Hunderte Kilometer an Rad- und Wanderwegen.", "Die Vegetation reicht von Strandhafer bis zu dichten Kiefernwäldern."],
      hu: ["Szabadon élő európai bölénycsordának ad otthont.", "Kiterjedt és dinamikus dűnevidéket véd.", "Népszerű rekreációs terület Amszterdam és Haarlem közelében.", "Fontos a tiszta ivóvíz kinyerése szempontjából.", "Több száz kilométernyi kerékpár- és túraútvonalat kínál.", "A növényzet a homoki zabtól a sűrű fenyőerdőkig terjed."],
      ro: ["Găzduiește o turmă de zimbri (bizon european) care trăiesc liberi.", "Protejează o zonă de dune extinsă și dinamică.", "O zonă de recreere populară lângă Amsterdam și Haarlem.", "Important pentru obținerea apei potabile curate.", "Oferă sute de kilometri de trasee de ciclism și drumeții.", "Vegetația variază de la iarba de plajă la păduri dese de pini."],
      en: ["Houses a free-roaming herd of wisent (European bison).", "Protects an extensive and dynamic dune area.", "A popular recreation area near Amsterdam and Haarlem.", "Important for the extraction of clean drinking water.", "Offers hundreds of kilometers of cycling and hiking trails.", "Vegetation ranges from beach grass to dense pine forests."]
    },
      factsAdvanced: {
    de: [
      "Der Nationalpark schützt einen der breitesten Dünengürtel der niederländischen Nordseeküste.",
      "Seit 2007 grasen frei lebende Wisente (Europäische Bisons) in einem abgetrennten Teil des Parks, um das Zuwachsen der Dünen zu verhindern.",
      "Unter den Sanddünen von Kennemerland wird ein Großteil des Trinkwassers für die Region um Amsterdam gefiltert und gespeichert.",
      "Im Park befinden sich auch historische Landgüter aus dem 17. Jahrhundert, die sogenannten 'Buitenplaatsen'."
    ],
    hu: ["A park területén egyedülálló, zárt dűne-tavak (duinmeren) is találhatók, amelyek gazdagok kétéltűekben és madarakban.", "Az európai bölényt (wisent) 2007-ben telepítették ide vissza egy elzárt területre.", "A dűnék fontos szerepet játszanak a holland ivóvízellátásban: itt tisztítják és tárolják az édesvizet természetes szűrőként.", "A parkban számos második világháborús bunker (Atlantisz-fal maradványa) bújik meg a homok alatt."],
    ro: [
      "Parcul conține, de asemenea, lacuri de dune unice, închise (duinmeren), bogate în amfibieni și păsări.",
      "Zimbrul european (wisent) a fost reintrodus aici în 2007 într-o zonă împrejmuită.",
      "Dunele joacă un rol important în aprovizionarea cu apă potabilă din Olanda: apa dulce este purificată și stocată aici ca filtru natural.",
      "O serie de buncăre din timpul celui de-al Doilea Război Mondial (rămășițe ale Zidului Atlanticului) sunt ascunse sub nisipul din parc."
    ],
    en: [
      "The national park protects one of the widest dune belts on the Dutch North Sea coast.",
      "Since 2007, free-roaming wisents (European bison) have grazed in an enclosed section of the park to prevent the dunes from overgrowing.",
      "A large part of the drinking water for the Amsterdam region is filtered and stored beneath the sand dunes of Kennemerland.",
      "The park also contains historical 17th-century country estates, known as 'Buitenplaatsen'."
    ]
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
        descriptionAdvanced: {
    de: "Die Hunebedden (Hünengräber) in der Provinz Drenthe sind die ältesten und faszinierendsten vorgeschichtlichen Monumente der Niederlande. Diese gewaltigen Steingräber wurden vor mehr als 5.000 Jahren von den Bauern der sogenannten Trichterbecherkultur errichtet, lange vor dem Bau der ägyptischen Pyramiden oder Stonehenge. Sie bestehen aus gigantischen Findlingen, die während der Eiszeit von Gletschern aus Skandinavien in die Niederlande transportiert wurden. Heute sind noch 54 dieser mystischen Megalithanlagen erhalten geblieben; sie liegen meist friedlich versteckt in den ausgedehnten Heide- und Waldlandschaften Drenthes und sind Zeugen der frühesten Besiedlung des Landes. Geschichte K5: Die Erbauer der Hünengräber gehörten zu den ersten Menschen, die Ackerbau betrieben. Wie veränderte der Ackerbau die Lebensweise der Menschen im Vergleich zu den früheren Jägern und Sammlern?",
    hu: "A Drenthe tartományban található megalitikus sírok, az úgynevezett 'Hunebedden' Hollandia legrégebbi ember alkotta műemlékei, amelyek története a Krisztus előtti 3400 körüli évekre (a Tölcséres Szájú Edények Kultúrájának idejére) nyúlik vissza. Ezek a grandiózus sírkamrák hatalmas gránit tömbökből épültek, amelyeket a legutóbbi jégkorszak gleccserei szállítottak Skandináviából a mai Hollandia területére. A legnagyobb és leghíresebb sír Borger falu mellett található (D27), ahol egy modern látogatóközpont mutatja be a kőkori emberek életét. Történelem K5: Hogyan voltak képesek a kőkorszaki emberek ilyen hatalmas, akár 20 tonnás sziklatömböket elmozdítani és egymásra helyezni?",
    ro: "Mormintele megalitice din provincia Drenthe, așa-numitele 'Hunebedden', sunt cele mai vechi monumente create de om din Olanda, a căror istorie datează din jurul anului 3400 î.Hr. (pe vremea Culturii Vaselor Pâlnie). Aceste camere mortuare grandioase au fost construite din blocuri masive de granit transportate din Scandinavia de ghețarii din ultima eră glaciară pe teritoriul Olandei de astăzi. Cel mai mare și mai faimos mormânt se află lângă satul Borger (D27), unde un centru de vizitare modern prezintă viața oamenilor din Epoca de Piatră. Istorie K5: Cum au reușit oamenii din Epoca de Piatră să mute și să stivuiască bolovani atât de masivi, de până la 20 de tone?",
    en: "The Hunebedden (megalithic tombs) in the province of Drenthe are the oldest and most fascinating prehistoric monuments in the Netherlands. These massive stone tombs were erected over 5,000 years ago by farmers of the Funnelbeaker culture, long before the construction of the Egyptian pyramids or Stonehenge. They consist of gigantic boulders transported to the Netherlands from Scandinavia by glaciers during the Ice Age. Today, 54 of these mystical megalithic structures remain; they lie mostly peacefully hidden in Drenthe's vast heathlands and forests and are witnesses to the country's earliest settlement. History K5: The builders of the megalithic tombs were among the first people to practice agriculture. How did agriculture change the way of life compared to earlier hunters and gatherers?"
  },
    facts: {
      de: ["Es gibt noch 52 erhaltene Hünengräber in den Niederlanden.", "Die meisten befinden sich in der Provinz Drenthe.", "Errichtet aus Findlingen, die während der Eiszeit aus Skandinavien kamen.", "ÄŒlter als Stonehenge und die Pyramiden.", "In Borger befindet sich das größte Hünengrab (D27) und das Hunebedcentrum.", "Dienten als kollektive Grabstätten."],
      hu: ["Hollandiában még 52 fennmaradt megalitikus sír található.", "A legtöbb Drenthe tartományban van.", "A jégkorszak alatt Skandináviából idesodort vándorkövekből épültek.", "Régebbiek, mint Stonehenge és a piramisok.", "Borgerben található a legnagyobb megalitikus sír (D27) és a Hunebedcentrum.", "Kollektív temetkezési helyként szolgáltak."],
      ro: ["Există încă 52 de morminte megalitice păstrate în Țările de Jos.", "Cele mai multe sunt situate în provincia Drenthe.", "Construite din bolovani care au venit din Scandinavia în timpul Epocii de Gheață.", "Mai vechi decât Stonehenge și piramidele.", "În Borger se află cel mai mare mormânt megalitic (D27) și Hunebedcentrum.", "Au servit drept locuri de înmormântare colective."],
      en: ["There are still 52 preserved dolmens in the Netherlands.", "Most are located in the province of Drenthe.", "Built from boulders that came from Scandinavia during the Ice Age.", "Older than Stonehenge and the pyramids.", "In Borger is the largest dolmen (D27) and the Hunebedcentrum.", "Served as collective burial places."]
    },
      factsAdvanced: {
    de: [
      "Die Hünengräber (Hunebedden) wurden um 3000 v. Chr. erbaut und sind damit älter als Stonehenge und die Pyramiden von Gizeh.",
      "Von den ursprünglich über 80 in den Niederlanden bekannten Hünengräbern sind heute noch 54 erhalten geblieben.",
      "Das größte noch erhaltene Hünengrab ist das D27 in Borger; es ist über 22 Meter lang.",
      "Die tonnenschweren Decksteine wurden während der vorletzten Eiszeit von skandinavischen Gletschern nach Drenthe geschoben."
    ],
    hu: ["Hollandiában összesen 54 Hunebed maradt fenn, ebből 52 Drenthe tartományban található.", "A sírokat eredetileg földdel és homokkal fedték be, a kövek a földalatti sírkamra vázát alkották.", "A leghosszabb sírkamra (D27) majdnem 23 méter hosszú.", "A 'hunebed' elnevezés a 17. századból származik, amikor az emberek úgy hitték, hogy a köveket 'huynen' (óriások) hordták össze."],
    ro: [
      "Un total de 54 de Hunebedden au supraviețuit în Olanda, dintre care 52 sunt situate în provincia Drenthe.",
      "Mormintele au fost inițial acoperite cu pământ și nisip, pietrele formând scheletul camerei mortuare subterane.",
      "Cea mai lungă cameră mortuară (D27) are o lungime de aproape 23 de metri.",
      "Numele 'hunebed' datează din secolul al XVII-lea, când oamenii credeau că pietrele au fost strânse de 'huynen' (giganți)."
    ],
    en: [
      "The Hunebedden were built around 3000 BC, making them older than Stonehenge and the Pyramids of Giza.",
      "Of the originally more than 80 megalithic tombs known in the Netherlands, 54 are preserved today.",
      "The largest surviving megalithic tomb is D27 in Borger; it is over 22 meters long.",
      "The capstones, weighing several tons, were pushed to Drenthe by Scandinavian glaciers during the penultimate Ice Age."
    ]
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
        descriptionAdvanced: {
    de: "Der Vondelpark ist der berühmteste und meistbesuchte Stadtpark Amsterdams, vergleichbar mit dem Central Park in New York, jedoch mit einem typisch niederländischen, entspannten Flair. Der 1865 im Stil eines englischen Landschaftsgartens eröffnete Park liegt zentral im Museumsviertel und ist eine grüne Oase mit gewundenen Teichen, weitläufigen Rasenflächen und schattigen Bäumen. An sonnigen Tagen wird der Park zum Freiluft-Wohnzimmer der Amsterdamer; Menschen picknicken, fahren Fahrrad, joggen oder besuchen kostenlose Vorstellungen im Open-Air-Theater. Der Park ist nach dem niederländischen Dichter Joost van den Vondel benannt, dessen imposante Statue den Park ziert. Geografie K5: Der Vondelpark wurde auf weichem Torfboden angelegt und muss regelmäßig entwässert werden. Was passiert, wenn man sumpfigen Boden nicht mit Kanälen und Pumpen trocken hält?",
    hu: "A Vondelpark Amszterdam legnagyobb, legismertebb és legnépszerűbb városi parkja, amelyet évente több millió helyi lakos és turista keres fel. A parkot az 1860-as években az angol tájépítészeti stílus (romantikus, kanyargós utak, tavak és hidak) jegyében tervezték meg. Névadója Joost van den Vondel, a 17. század leghíresebb holland költője és drámaírója, akinek hatalmas szobra a park közepén áll. Nyáron a park szabadtéri színháza ingyenes koncerteket és előadásokat kínál, miközben a pázsit tele van piknikezőkkel. Irodalom K6: Kivel lehetne összehasonlítani Vondelt (például Shakespeare-rel) a saját nemzeti irodalmukra gyakorolt hatásuk alapján?",
    ro: "Vondelpark este cel mai mare, mai cunoscut și cel mai popular parc orășenesc din Amsterdam, vizitat de milioane de localnici și turiști în fiecare an. Parcul a fost proiectat în anii 1860 în stilul arhitecturii peisagistice englezești (căi romantice, șerpuitoare, lacuri și poduri). Este numit după Joost van den Vondel, cel mai faimos poet și dramaturg olandez din secolul al XVII-lea, a cărui statuie masivă se află în mijlocul parcului. Vara, teatrul în aer liber al parcului oferă concerte și spectacole gratuite, în timp ce pajiștile sunt pline de oameni care fac picnic. Literatură K6: Cu cine ar putea fi comparat Vondel (de exemplu, Shakespeare) pe baza impactului lor asupra propriei lor literaturi naționale?",
    en: "The Vondelpark is Amsterdam's most famous and most visited city park, comparable to Central Park in New York, but with a typically Dutch, relaxed flair. Opened in 1865 in the style of an English landscape garden, the park is centrally located in the Museum Quarter and serves as a green oasis with winding ponds, sweeping lawns, and shady trees. On sunny days, the park becomes the open-air living room for Amsterdammers; people picnic, cycle, jog, or attend free performances at the open-air theater. The park is named after the Dutch poet Joost van den Vondel, whose imposing statue adorns the park. Geography K5: The Vondelpark was laid out on soft peat soil and must be regularly drained. What happens if swampy ground is not kept dry with canals and pumps?"
  },
    facts: {
      de: ["Der meistbesuchte Park der Niederlande (ca. 10 Millionen Besucher jährlich).", "Benannt nach dem Dichter Joost van den Vondel.", "Eröffnet im Jahr 1865.", "Seit 1996 ein nationales Denkmal (Rijksmonument).", "Verfügt über ein Freilichttheater mit Sommeraufführungen.", "Beherbergt eine Skulptur von Pablo Picasso."],
      hu: ["Hollandia leglátogatottabb parkja (évente kb. 10 millió látogató).", "Joost van den Vondel költőről nevezték el.", "1865-ben nyitották meg.", "1996 óta nemzeti műemlék (Rijksmonument).", "Szabadtéri színházzal rendelkezik nyári előadásokkal.", "Itt található egy Pablo Picasso-szobor."],
      ro: ["Cel mai vizitat parc din Olanda (aproximativ 10 milioane de vizitatori anual).", "Numit după poetul Joost van den Vondel.", "Deschis în 1865.", "Monument național (Rijksmonument) din 1996.", "Are un teatru în aer liber cu spectacole de vară.", "Găzduiește o sculptură de Pablo Picasso."],
      en: ["The most visited park in the Netherlands (approx. 10 million visitors annually).", "Named after the poet Joost van den Vondel.", "Opened in 1865.", "A national monument (Rijksmonument) since 1996.", "Has an open-air theater with summer performances.", "Houses a sculpture by Pablo Picasso."]
    },
      factsAdvanced: {
    de: [
      "Der Vondelpark zieht jährlich rund 10 Millionen Besucher an und ist der größte Park innerhalb des Amsterdamer Zentrums.",
      "Er wurde von der wohlhabenden Amsterdamer Bürgerschaft finanziert und erst 1953 der Stadtverwaltung übergeben.",
      "Wegen des weichen Torfbodens musste der Park alle paar Jahrzehnte aufwendig saniert werden, um ein Absinken zu verhindern.",
      "Der Park steht seit 1996 unter Denkmalschutz (Rijksmonument) und beherbergt eine Skulptur von Pablo Picasso."
    ],
    hu: ["A park nem önkormányzati területként jött létre, hanem egy gazdag polgárokból álló bizottság vásárolta meg a földet.", "A terület egy süllyedő tőzeglápra épült, ezért a parkot az évtizedek során folyamatosan fel kell tölteni és karbantartani.", "A Vondelparkban több mint 100 fafaj található, és rengeteg zöld papagáj (Sándor-papagáj) él itt vadon.", "A park szélén található a híres holland filmmúzeum, a (korábbi nevén) Filmmuseum pavilonja."],
    ro: [
      "Parcul nu a fost creat ca o zonă municipală, ci terenul a fost cumpărat de un comitet format din cetățeni bogați.",
      "Zona a fost construită pe o mlaștină de turbă care se scufundă, așa că parcul a trebuit să fie umplut și întreținut constant de-a lungul deceniilor.",
      "În Vondelpark se găsesc peste 100 de specii de copaci, iar mulți papagali verzi (papagali cu guler roz) trăiesc în sălbăticie aici.",
      "Faimosul muzeu de film olandez, pavilionul Filmmuseum (fostul nume), este situat la marginea parcului."
    ],
    en: [
      "The Vondelpark attracts around 10 million visitors annually and is the largest park within the center of Amsterdam.",
      "It was financed by wealthy Amsterdam citizens and only handed over to the city administration in 1953.",
      "Because of the soft peat soil, the park has had to undergo major renovations every few decades to prevent it from sinking.",
      "The park has been a national heritage site (Rijksmonument) since 1996 and features a sculpture by Pablo Picasso."
    ]
  }
  }
];

export const netherlandsAllPoi: POI[] = [netherlandsCountry,
  ...netherlandsRegions,
  ...netherlandsCities, ...poiExtraNetherlandsCities];
