// @ts-nocheck
import type { POI } from "./poi";
import { poiExtraNetherlandsCities } from "./poiExtraNetherlandsCities";

export const netherlandsCountry: POI = {
  id: "NL",
  type: "country",
  parent: "EUROPE",
  coords: [5.2913, 52.1326],
  name: { de: "Niederlande", hu: "Hollandia", ro: "ÈšÄƒrile de Jos", en: "Netherlands" },
  image: "/geo-images/netherlands/netherlands.webp",
  description: {
    de: "Die Niederlande sind ein westeuropÃ¤isches Land, bekannt fÃ¼r seine flache Landschaft, historische WindmÃ¼hlen, weite Tulpenfelder und ein innovatives System der Landgewinnung.",
    hu: "Hollandia egy nyugat-eurÃ³pai orszÃ¡g, amely sÃ­k tÃ¡jairÃ³l, tÃ¶rtÃ©nelmi szÃ©lmalmairÃ³l, kiterjedt tulipÃ¡nmezÅ‘irÅ‘l Ã©s innovatÃ­v terÃ¼letnyerÃ©si rendszerÃ©rÅ‘l ismert.",
    ro: "ÈšÄƒrile de Jos reprezintÄƒ o È›arÄƒ din Europa de Vest, renumitÄƒ pentru peisajul sÄƒu plat, morile de vÃ¢nt istorice, cÃ¢mpurile Ã®ntinse de lalele È™i un sistem inovator de recuperare a terenurilor.",
    en: "The Netherlands is a Western European country known for its flat landscape, historic windmills, vast tulip fields, and an innovative system of land reclamation."
  },
  descriptionAdvanced: {
    de: "Die Niederlande, oft auch umgangssprachlich Holland genannt, sind ein dicht besiedeltes Land im Nordwesten Europas, das fÃ¼r seine flache Landschaft, weite Tulpenfelder und historische WindmÃ¼hlen bekannt ist. Ein groÃŸer Teil der LandflÃ¤che liegt unter dem Meeresspiegel und wird durch ein komplexes System von Deichen und Pumpwerken geschÃ¼tzt. Das Land hat eine reiche maritime Geschichte und spielte eine fÃ¼hrende Rolle im globalen Handel des 17. Jahrhunderts, dem sogenannten Goldenen Zeitalter. Heute ist es eine der fortschrittlichsten und tolerantesten Gesellschaften der Welt. Geografie K6: Wenn ein Viertel der Niederlande unter dem Meeresspiegel liegt, wie viel Prozent des Landes mÃ¼ssen kÃ¼nstlich trocken gehalten werden?",
    hu: "Hollandia (hivatalosan: ÈšÄƒrile de Jos, bÃ¡r leggyakrabban HollandiakÃ©nt emlÃ­tik) egy sÅ±rÅ±n lakott orszÃ¡g Ã‰szaknyugat-EurÃ³pÃ¡ban, amely sÃ­k tÃ¡jairÃ³l Ã©s a tenger szintje alatti terÃ¼leteirÅ‘l ismert. Az orszÃ¡g terÃ¼letÃ©nek negyede a tenger szintje alatt fekszik, Ã©s egy rendkÃ­vÃ¼l komplex gÃ¡trendszer Ã©s szivattyÃºÃ¡llomÃ¡sok hÃ¡lÃ³zata vÃ©di a vÃ­ztÅ‘l. TÃ¶rtÃ©nelmileg a 17. szÃ¡zadban globÃ¡lis tengeri Ã©s kereskedelmi nagyhatalom volt, ezt az idÅ‘szakot holland aranykornak nevezik. Ma a vilÃ¡g egyik leginnovatÃ­vabb Ã©s legtolerÃ¡nsabb tÃ¡rsadalma. FÃ¶ldrajz K6: Ha az orszÃ¡g negyede a tengerszint alatt fekszik, hogyan tudjÃ¡k megakadÃ¡lyozni a terÃ¼letek elÃ¡rasztÃ¡sÃ¡t?",
    ro: "ÈšÄƒrile de Jos, denumite adesea Olanda, reprezintÄƒ o naÈ›iune dens populatÄƒ din nord-vestul Europei, celebrÄƒ pentru peisajele sale plate È™i zonele situate sub nivelul mÄƒrii. Aproape un sfert din suprafaÈ›a È›Äƒrii se aflÄƒ sub nivelul mÄƒrii, fiind protejatÄƒ de un sistem complex de diguri È™i staÈ›ii de pompare. Istoric, Ã®n secolul al XVII-lea a fost o putere maritimÄƒ È™i comercialÄƒ globalÄƒ, perioadÄƒ cunoscutÄƒ sub numele de Epoca de Aur olandezÄƒ. AstÄƒzi este consideratÄƒ una dintre cele mai inovatoare È™i tolerante societÄƒÈ›i din lume. Geografie K6: DacÄƒ un sfert din ÈšÄƒrile de Jos se aflÄƒ sub nivelul mÄƒrii, cum reuÈ™esc sÄƒ previnÄƒ inundarea acestor teritorii?",
    en: "The Netherlands, often colloquially called Holland, is a densely populated country in northwestern Europe, known for its flat landscape, vast tulip fields, and historic windmills. A large part of its land area lies below sea level and is protected by a complex system of dikes and pumping stations. The country has a rich maritime history and played a leading role in global trade during the 17th century, known as the Golden Age. Today, it is one of the most progressive and tolerant societies in the world. Geography K6: If a quarter of the Netherlands is below sea level, what percentage of the country must be kept artificially dry?"
  },
  facts: {
    de: [
      "Hauptstadt: Amsterdam, Regierungssitz: Den Haag.",
      "Geografie: Rund ein Drittel des Landes liegt unter dem Meeresspiegel.",
      "MobilitÃ¤t: Es gibt mehr FahrrÃ¤der im Land als Einwohner.",
      "Kulinarik: WeltberÃ¼hmt fÃ¼r KÃ¤sesorten wie Gouda und Edamer.",
      "Wirtschaft: Der Rotterdamer Hafen ist der grÃ¶ÃŸte Seehafen Europas.",
      "Landwirtschaft: Die Niederlande sind der zweitgrÃ¶ÃŸte Agrarexporteur der Welt.",
      "Infrastruktur: Das Land besitzt eines der dichtesten Radwegenetze weltweit.",
      "Luftfahrt: Schiphol ist einer der bedeutendsten internationalen FlughÃ¤fen.",
      "Politik: GrÃ¼ndungsmitglied der EU und NATO sowie Sitz des Internationalen Gerichtshofs.",
      "Natur: Der Keukenhof ist der grÃ¶ÃŸte Blumengarten der Welt."
    ],
    hu: [
      "FÅ‘vÃ¡ros: Amszterdam, a kormÃ¡ny szÃ©khelye: HÃ¡ga.",
      "FÃ¶ldrajz: Az orszÃ¡g mintegy harmada a tengerszint alatt fekszik.",
      "MobilitÃ¡s: TÃ¶bb kerÃ©kpÃ¡r van az orszÃ¡gban, mint lakos.",
      "GasztronÃ³mia: VilÃ¡ghÃ­rÅ± sajtjairÃ³l, mint a Gouda Ã©s az EdÃ¡mi.",
      "GazdasÃ¡g: A rotterdami kikÃ¶tÅ‘ EurÃ³pa legnagyobb tengeri kikÃ¶tÅ‘je.",
      "MezÅ‘gazdasÃ¡g: Hollandia a vilÃ¡g mÃ¡sodik legnagyobb mezÅ‘gazdasÃ¡gi exportÅ‘re.",
      "InfrastruktÃºra: Az orszÃ¡g a vilÃ¡g egyik legsÅ±rÅ±bb kerÃ©kpÃ¡rÃºt-hÃ¡lÃ³zatÃ¡val rendelkezik.",
      "LÃ©gikÃ¶zlekedÃ©s: Schiphol az egyik legjelentÅ‘sebb nemzetkÃ¶zi repÃ¼lÅ‘tÃ©r.",
      "Politika: Az EU Ã©s a NATO alapÃ­tÃ³ tagja, valamint a NemzetkÃ¶zi BÃ­rÃ³sÃ¡g szÃ©khelye.",
      "TermÃ©szet: A Keukenhof a vilÃ¡g legnagyobb virÃ¡goskertje."
    ],
    ro: [
      "Capitala: Amsterdam, sediul guvernului: Haga.",
      "Geografie: Aproximativ o treime din È›arÄƒ se aflÄƒ sub nivelul mÄƒrii.",
      "Mobilitate: ExistÄƒ mai multe biciclete Ã®n È›arÄƒ decÃ¢t locuitori.",
      "Gastronomie: RenumitÄƒ Ã®n Ã®ntreaga lume pentru brÃ¢nzeturi precum Gouda È™i Edam.",
      "Economie: Portul Rotterdam este cel mai mare port maritim din Europa.",
      "AgriculturÄƒ: ÈšÄƒrile de Jos sunt al doilea mare exportator agricol din lume.",
      "InfrastructurÄƒ: Èšara are una dintre cele mai dense reÈ›ele de piste pentru biciclete din lume.",
      "AviaÈ›ie: Schiphol este unul dintre cele mai importante aeroporturi internaÈ›ionale.",
      "PoliticÄƒ: Membru fondator al UE È™i NATO, precum È™i sediul CurÈ›ii InternaÈ›ionale de JustiÈ›ie.",
      "NaturÄƒ: Keukenhof este cea mai mare grÄƒdinÄƒ de flori din lume."
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
      "Etwa 26 % der LandflÃ¤che der Niederlande liegen unter dem Meeresspiegel.",
      "Der hÃ¶chste Punkt des europÃ¤ischen Teils des Landes, der Vaalserberg, ist nur 322 Meter hoch.",
      "Die Niederlande haben mehr FahrrÃ¤der als Einwohner (etwa 23 Millionen RÃ¤der bei 17 Millionen Menschen).",
      "Das Land ist nach den USA der zweitgrÃ¶ÃŸte Agrarexporteur der Welt."
    ],
    hu: ["Az orszÃ¡g terÃ¼letÃ©nek kÃ¶rÃ¼lbelÃ¼l 26%-a a tengerszint alatt fekszik.", "Az eurÃ³pai rÃ©sz legmagasabb pontja, a Vaalserberg mindÃ¶ssze 322 mÃ©ter magas.", "HollandiÃ¡ban tÃ¶bb a kerÃ©kpÃ¡r, mint a lakos (kb. 23 milliÃ³ kerÃ©kpÃ¡r jut 17,5 milliÃ³ emberre).", "Az EgyesÃ¼lt Ãllamok utÃ¡n a vilÃ¡g mÃ¡sodik legnagyobb mezÅ‘gazdasÃ¡gi exportÅ‘re."],
    ro: [
      "Aproximativ 26% din suprafaÈ›a È›Äƒrii se aflÄƒ sub nivelul mÄƒrii.",
      "Cel mai Ã®nalt punct din partea europeanÄƒ, Vaalserberg, are o altitudine de doar 322 de metri.",
      "ÃŽn Olanda existÄƒ mai multe biciclete decÃ¢t locuitori (aprox. 23 de milioane la 17,5 milioane de oameni).",
      "DupÄƒ Statele Unite, este al doilea cel mai mare exportator de produse agricole din lume."
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
      de: "Drenthe ist eine lÃ¤ndliche Provinz im Nordosten der Niederlande, bekannt fÃ¼r ihre prÃ¤historischen HÃ¼nengrÃ¤ber, weite HeideflÃ¤chen und dichte WÃ¤lder.",
      hu: "Drenthe egy vidÃ©ki tartomÃ¡ny Hollandia Ã©szakkeleti rÃ©szÃ©n, amely tÃ¶rtÃ©nelem elÅ‘tti megalitikus sÃ­rjairÃ³l, kiterjedt fenyÃ©rjeirÅ‘l Ã©s sÅ±rÅ± erdÅ‘irÅ‘l ismert.",
      ro: "Drenthe este o provincie ruralÄƒ din nord-estul Olandei, cunoscutÄƒ pentru mormintele sale megalitice preistorice, pajiÈ™tile Ã®ntinse È™i pÄƒdurile dese.",
      en: "Drenthe is a rural province in the northeast of the Netherlands, known for its prehistoric megalithic tombs, vast heathlands, and dense forests."
    },
    descriptionAdvanced: {
    de: "Drenthe ist eine Provinz im Nordosten der Niederlande, die fÃ¼r ihre ruhige, lÃ¤ndliche AtmosphÃ¤re und ausgedehnte HeideflÃ¤chen bekannt ist. Die Region hat eine sehr geringe BevÃ¶lkerungsdichte im Vergleich zum Rest des Landes und gilt als Paradies fÃ¼r Radfahrer und Naturfreunde. Historisch bedeutsam sind die prÃ¤historischen HÃ¼nengrÃ¤ber (Hunebedden), die Ã¤ltesten Monumente der Niederlande, die von frÃ¼hen bÃ¤uerlichen Gesellschaften errichtet wurden. Die Hauptstadt der Provinz ist Assen, die auch fÃ¼r die berÃ¼hmte Motorradrennstrecke TT Circuit bekannt ist. Geschichte K5: Die HÃ¼nengrÃ¤ber wurden aus riesigen Steinen gebaut, die wÃ¤hrend der Eiszeit nach Drenthe geschoben wurden. Welche Naturgewalt hat diese Steine transportiert?",
    hu: "Drenthe Hollandia Ã©szakkeleti tartomÃ¡nya, amely nyugodt, vidÃ©ki hangulatÃ¡rÃ³l Ã©s hatalmas fenyÃ©rjeirÅ‘l ismert. A rÃ©giÃ³nak az orszÃ¡g tÃ¶bbi rÃ©szÃ©hez kÃ©pest nagyon alacsony a nÃ©psÅ±rÅ±sÃ©ge, Ã©s a kerÃ©kpÃ¡rosok, valamint a termÃ©szetbarÃ¡tok igazi paradicsoma. TÃ¶rtÃ©nelmi szempontbÃ³l kiemelkedÅ‘ek a tÃ¶rtÃ©nelem elÅ‘tti megalitikus sÃ­rok (Hunebedden), amelyek Hollandia legrÃ©gebbi emlÃ©kmÅ±vei. A tartomÃ¡ny fÅ‘vÃ¡rosa Assen, amely a hÃ­res TT Circuit motorversenypÃ¡lyÃ¡jÃ¡rÃ³l is ismert. TÃ¶rtÃ©nelem K5: A megalitikus sÃ­rokat hatalmas kÃ¶vekbÅ‘l Ã©pÃ­tettÃ©k, amelyeket a jÃ©gkorszak alatt toltak Drenthe terÃ¼letÃ©re. Milyen termÃ©szeti erÅ‘ szÃ¡llÃ­totta ezeket a kÃ¶veket?",
    ro: "Drenthe este o provincie din nord-estul Olandei, renumitÄƒ pentru atmosfera sa liniÈ™titÄƒ, ruralÄƒ È™i pentru zonele vaste acoperite cu iarbÄƒ neagrÄƒ (erica). Regiunea are o densitate a populaÈ›iei foarte scÄƒzutÄƒ Ã®n comparaÈ›ie cu restul È›Äƒrii, fiind consideratÄƒ un adevÄƒrat paradis pentru cicliÈ™ti È™i iubitorii de naturÄƒ. Din punct de vedere istoric, de o importanÈ›Äƒ majorÄƒ sunt mormintele megalitice preistorice (Hunebedden), cele mai vechi monumente din Olanda, ridicate de primele comunitÄƒÈ›i agricole. Capitala provinciei este Assen, un oraÈ™ recunoscut pe plan internaÈ›ional pentru circuitul sÄƒu de curse de motociclete, TT Circuit. Istorie K5: Mormintele megalitice au fost construite din pietre uriaÈ™e Ã®mpinse spre Drenthe Ã®n timpul Epocii de GheaÈ›Äƒ. Ce forÈ›Äƒ a naturii a transportat aceste stÃ¢nci masive?",
    en: "Drenthe is a province in the northeastern Netherlands, known for its quiet, rural atmosphere and expansive heathlands. The region has a very low population density compared to the rest of the country and is considered a paradise for cyclists and nature lovers. Historically significant are the prehistoric megalithic tombs (Hunebedden), the oldest monuments in the Netherlands, built by early farming communities. The provincial capital is Assen, which is also famous for the TT Circuit motorcycle racing track. History K5: The megalithic tombs were built from huge stones pushed to Drenthe during the Ice Age. What natural force transported these stones?"
  },
  facts: {
    de: ["Bekannt fÃ¼r die prÃ¤historischen HÃ¼nengrÃ¤ber.","Assen ist die Hauptstadt der Provinz Drenthe.","Beherbergt den Nationalpark Dwingelderveld.","Wird oft als die Fahrradprovinz der Niederlande bezeichnet.","Der TT Circuit in Assen ist eine berÃ¼hmte Rennstrecke.","Hat eine sehr geringe BevÃ¶lkerungsdichte.","Camp Westerbork ist eine wichtige historische GedenkstÃ¤tte.","Das Wildlands Adventure Zoo Emmen ist eine Hauptattraktion."],
    hu: ["A tÃ¶rtÃ©nelem elÅ‘tti megalitikus sÃ­rjairÃ³l ismert.","Assen Drenthe tartomÃ¡ny fÅ‘vÃ¡rosa.","Itt talÃ¡lhatÃ³ a Dwingelderveld Nemzeti Park.","Gyakran nevezik Hollandia kerÃ©kpÃ¡ros tartomÃ¡nyÃ¡nak.","Az asseni TT Circuit egy hÃ­res versenypÃ¡lya.","Nagyon alacsony a nÃ©psÅ±rÅ±sÃ©ge.","A Westerbork tÃ¡bor fontos tÃ¶rtÃ©nelmi emlÃ©khely.","A Wildlands Adventure Zoo Emmen az egyik fÅ‘ lÃ¡tvÃ¡nyossÃ¡g."],
    ro: ["CunoscutÄƒ pentru mormintele megalitice preistorice.","Assen este capitala provinciei Drenthe.","GÄƒzduieÈ™te Parcul NaÈ›ional Dwingelderveld.","Adesea numitÄƒ provincia bicicletelor din ÈšÄƒrile de Jos.","Circuitul TT din Assen este o pistÄƒ de curse celebrÄƒ.","Are o densitate a populaÈ›iei foarte scÄƒzutÄƒ.","TabÄƒra Westerbork este un important memorial istoric.","Wildlands Adventure Zoo Emmen este o atracÈ›ie principalÄƒ."],
    en: ["Known for the prehistoric megalithic tombs.","Assen is the capital of the province of Drenthe.","Houses the Dwingelderveld National Park.","Often referred to as the cycling province of the Netherlands.","The TT Circuit in Assen is a famous racing track.","Has a very low population density.","Camp Westerbork is an important historical memorial site.","The Wildlands Adventure Zoo Emmen is a main attraction."]
  },
  factsAdvanced: {
    de: [
      "In Drenthe befinden sich 52 der 54 prÃ¤historischen HÃ¼nengrÃ¤ber der Niederlande.",
      "Die Provinz hat die niedrigste BevÃ¶lkerungsdichte aller niederlÃ¤ndischen Provinzen.",
      "Assen ist seit 1925 Austragungsort der berÃ¼hmten TT-Motorradrennen.",
      "Das Nationale GefÃ¤ngnismuseum befindet sich im historischen Dorf Veenhuizen in Drenthe."
    ],
    hu: ["Drenthe tartomÃ¡nyban talÃ¡lhatÃ³ Hollandia 54 megalitikus sÃ­rjÃ¡bÃ³l 52.", "Ez a tartomÃ¡ny rendelkezik a legalacsonyabb nÃ©psÅ±rÅ±sÃ©ggel HollandiÃ¡ban.", "Assen vÃ¡rosa 1925 Ã³ta ad otthont a hÃ­res TT motorversenyeknek.", "A Nemzeti BÃ¶rtÃ¶nmÃºzeum a tÃ¶rtÃ©nelmi Veenhuizen faluban talÃ¡lhatÃ³."],
    ro: [
      "ÃŽn Drenthe se gÄƒsesc 52 dintre cele 54 de morminte megalitice preistorice (Hunebedden) pÄƒstrate Ã®n Olanda.",
      "Provincia are cea mai micÄƒ densitate a populaÈ›iei dintre toate provinciile olandeze.",
      "Assen gÄƒzduieÈ™te celebrele curse de motociclete TT Ã®ncÄƒ din 1925.",
      "Muzeul NaÈ›ional al ÃŽnchisorii este situat Ã®n satul istoric Veenhuizen."
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
      de: "Flevoland ist die jÃ¼ngste Provinz der Niederlande, ein Meisterwerk der Landgewinnung, das im 20. Jahrhundert vollstÃ¤ndig dem Meer abgerungen wurde.",
      hu: "Flevoland Hollandia legfiatalabb tartomÃ¡nya, a terÃ¼letnyerÃ©s remekmÅ±ve, amelyet a 20. szÃ¡zadban teljes egÃ©szÃ©ben a tengertÅ‘l hÃ³dÃ­tottak el.",
      ro: "Flevoland este cea mai tÃ¢nÄƒrÄƒ provincie a Olandei, o capodoperÄƒ a recuperÄƒrii terenurilor, care a fost recuperatÄƒ Ã®n Ã®ntregime din mare Ã®n secolul al XX-lea.",
      en: "Flevoland is the youngest province in the Netherlands, a masterpiece of land reclamation entirely reclaimed from the sea in the 20th century."
    },
    descriptionAdvanced: {
    de: "Flevoland ist die jÃ¼ngste Provinz der Niederlande und ein Meisterwerk der Ingenieurskunst, da sie fast vollstÃ¤ndig durch Landgewinnung aus dem ehemaligen Zuiderzee-Meer entstand. Die Provinz wurde 1986 offiziell gegrÃ¼ndet und besteht hauptsÃ¤chlich aus drei groÃŸen Poldern. Die Landschaft ist geprÃ¤gt von weiten, flachen landwirtschaftlichen FlÃ¤chen, modernen, planmÃ¤ÃŸig angelegten StÃ¤dten wie Almere und Lelystad sowie groÃŸen Naturreservaten. Das Gebiet bietet einzigartige Einblicke in die moderne Stadtplanung und den Umgang mit dem Wasserbau. Sachkunde K6: Flevoland wurde dem Meer abgerungen. Wie nennt man ein StÃ¼ck Land, das durch Deiche geschÃ¼tzt und kÃ¼nstlich entwÃ¤ssert wird?",
    hu: "Flevoland Hollandia legfiatalabb tartomÃ¡nya, amely a mÃ©rnÃ¶ki tudomÃ¡ny mestermÅ±ve, hiszen szinte teljes egÃ©szÃ©ben az egykori Zuiderzee tengerbÅ‘l hÃ³dÃ­tottÃ¡k el. A tartomÃ¡nyt hivatalosan 1986-ban hoztÃ¡k lÃ©tre, Ã©s hÃ¡rom nagy polderbÅ‘l Ã¡ll. A tÃ¡jat kiterjedt, sÃ­k mezÅ‘gazdasÃ¡gi terÃ¼letek, modern, mestersÃ©gesen tervezett vÃ¡rosok (mint Almere Ã©s Lelystad), valamint hatalmas termÃ©szetvÃ©delmi terÃ¼letek jellemzik. A terÃ¼let egyedÃ¼lÃ¡llÃ³ bepillantÃ¡st nyÃºjt a modern vÃ¡rostervezÃ©sbe Ã©s a vÃ­zgazdÃ¡lkodÃ¡sba. KÃ¶rnyezetismeret K6: Flevolandot a tengertÅ‘l hÃ³dÃ­tottÃ¡k el. Hogy hÃ­vjÃ¡k azokat a fÃ¶ldterÃ¼leteket, amelyeket gÃ¡takkal vÃ©denek Ã©s mestersÃ©gesen kiszÃ¡rÃ­tanak?",
    ro: "Flevoland este cea mai tÃ¢nÄƒrÄƒ provincie a ÈšÄƒrilor de Jos È™i o capodoperÄƒ a ingineriei, fiind formatÄƒ aproape Ã®n Ã®ntregime prin asanarea terenurilor din fosta mare Zuiderzee. Provincia a fost Ã®nfiinÈ›atÄƒ oficial Ã®n 1986 È™i este compusÄƒ din trei poldere mari. Peisajul este dominat de terenuri agricole vaste, oraÈ™e moderne precum Almere È™i Lelystad, È™i rezervaÈ›ii naturale. AceastÄƒ zonÄƒ oferÄƒ o perspectivÄƒ unicÄƒ asupra planificÄƒrii urbane moderne È™i a managementului apelor. È˜tiinÈ›e ale naturii K6: Flevoland a fost cuceritÄƒ de la mare. Cum se numeÈ™te o porÈ›iune de pÄƒmÃ¢nt protejatÄƒ de diguri È™i drenatÄƒ artificial?",
    en: "Flevoland is the youngest province in the Netherlands and a masterpiece of engineering, as it was almost entirely created through land reclamation from the former Zuiderzee. The province was officially established in 1986 and mainly consists of three large polders. The landscape is characterized by vast, flat agricultural areas, modern, planned cities like Almere and Lelystad, and large nature reserves. The area offers unique insights into modern urban planning and water management. Science K6: Flevoland was reclaimed from the sea. What do you call a piece of land protected by dikes and artificially drained?"
  },
  facts: {
    de: ["GegrÃ¼ndet am 1. Januar 1986 als 12. Provinz.","Die gesamte Provinz liegt unterhalb des Meeresspiegels.","Lelystad ist die Hauptstadt der Provinz.","Almere ist die am schnellsten wachsende Stadt der Niederlande.","Beherbergt das Naturschutzgebiet Oostvaardersplassen.","Der ehemalige Inselflecken Schokland liegt nun im Festland.","Bekannt fÃ¼r moderne Architektur und stÃ¤dtebauliche Planung.","Wichtiger Standort fÃ¼r Windenergie-Parks in den Niederlanden."],
    hu: ["1986. januÃ¡r 1-jÃ©n alapÃ­tottÃ¡k a 12. tartomÃ¡nykÃ©nt.","Az egÃ©sz tartomÃ¡ny a tengerszint alatt fekszik.","Lelystad a tartomÃ¡ny fÅ‘vÃ¡rosa.","Almere Hollandia leggyorsabban nÃ¶vekvÅ‘ vÃ¡rosa.","Itt talÃ¡lhatÃ³ az Oostvaardersplassen termÃ©szetvÃ©delmi terÃ¼let.","Az egykori Schokland sziget most a szÃ¡razfÃ¶ldÃ¶n fekszik.","A modern Ã©pÃ­tÃ©szetrÅ‘l Ã©s vÃ¡rostervezÃ©srÅ‘l ismert.","A hollandiai szÃ©lenergia-parkok fontos helyszÃ­ne."],
    ro: ["FondatÄƒ pe 1 ianuarie 1986 ca a 12-a provincie.","ÃŽntreaga provincie se aflÄƒ sub nivelul mÄƒrii.","Lelystad este capitala provinciei.","Almere este oraÈ™ul cu cea mai rapidÄƒ creÈ™tere din Olanda.","GÄƒzduieÈ™te rezervaÈ›ia naturalÄƒ Oostvaardersplassen.","Fosta insulÄƒ Schokland se aflÄƒ acum pe continent.","CunoscutÄƒ pentru arhitectura modernÄƒ È™i planificarea urbanÄƒ.","O locaÈ›ie importantÄƒ pentru parcurile eoliene din Olanda."],
    en: ["Founded on January 1, 1986, as the 12th province.","The entire province lies below sea level.","Lelystad is the capital of the province.","Almere is the fastest-growing city in the Netherlands.","Home to the Oostvaardersplassen nature reserve.","The former island of Schokland is now landlocked.","Known for modern architecture and urban planning.","An important location for wind energy parks in the Netherlands."]
  },
  factsAdvanced: {
    de: [
      "Flevoland ist die grÃ¶ÃŸte kÃ¼nstliche Insel der Welt.",
      "Die Provinzhauptstadt Lelystad ist nach Cornelis Lely benannt, dem Architekten der Zuiderzeewerke.",
      "Das Naturschutzgebiet Oostvaardersplassen in Flevoland ist bekannt fÃ¼r seine Wildpferde und Rothirsche.",
      "Die Provinz liegt durchschnittlich 5 Meter unter dem Meeresspiegel."
    ],
    hu: ["Flevoland a vilÃ¡g legnagyobb mestersÃ©ges szigete.", "A tartomÃ¡ny fÅ‘vÃ¡rosÃ¡t, Lelystadot Cornelis LelyrÅ‘l, a Zuiderzee-mÅ±vek tervezÅ‘jÃ©rÅ‘l neveztÃ©k el.", "Az Oostvaardersplassen termÃ©szetvÃ©delmi terÃ¼let vadlovairÃ³l Ã©s gÃ­mszarvasairÃ³l ismert.", "A tartomÃ¡ny Ã¡tlagosan 5 mÃ©terrel fekszik a tengerszint alatt."],
    ro: [
      "Flevoland este consideratÄƒ cea mai mare insulÄƒ artificialÄƒ din lume.",
      "Capitala provinciei, Lelystad, a fost denumitÄƒ dupÄƒ Cornelis Lely, arhitectul proiectului Zuiderzee.",
      "RezervaÈ›ia naturalÄƒ Oostvaardersplassen din Flevoland este renumitÄƒ pentru caii sÄƒlbatici È™i cerbii roÈ™ii.",
      "Provincia se aflÄƒ Ã®n medie la 5 metri sub nivelul mÄƒrii."
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
    name: { de: "Friesland", hu: "FrÃ­zfÃ¶ld", ro: "Frizia", en: "Friesland" },
    image: "/geo-images/netherlands/friesland.webp",
    description: {
      de: "Friesland ist eine einzigartige Provinz im Norden der Niederlande, bekannt fÃ¼r ihre eigene Sprache, zahlreiche Seen und die berÃ¼hmte Elfstedentocht.",
      hu: "FrÃ­zfÃ¶ld egy egyedÃ¼lÃ¡llÃ³ tartomÃ¡ny Hollandia Ã©szaki rÃ©szÃ©n, amely sajÃ¡t nyelvÃ©rÅ‘l, szÃ¡mos tavÃ¡rÃ³l Ã©s a hÃ­res ElfstedentochtrÃ³l ismert.",
      ro: "Frizia este o provincie unicÄƒ din nordul Olandei, cunoscutÄƒ pentru propria limbÄƒ, numeroasele lacuri È™i faimosul Elfstedentocht.",
      en: "Friesland is a unique province in the north of the Netherlands, known for its own language, numerous lakes, and the famous Elfstedentocht."
    },
    descriptionAdvanced: {
    de: "Friesland, gelegen im Norden der Niederlande, besitzt eine starke eigene kulturelle IdentitÃ¤t und ist die einzige Provinz mit einer zweiten offiziellen Sprache: Westfriesisch. Die Landschaft wird von zahllosen Seen, KanÃ¤len und der langen KÃ¼ste am Wattenmeer dominiert. Traditionelle Sportarten wie das Eisschnelllaufen auf den zugefrorenen KanÃ¤len (Elfstedentocht) und das Fierljeppen (Stabweitsprung Ã¼ber WassergrÃ¤ben) sind tief in der Kultur verwurzelt. Die Landwirtschaft, insbesondere die Milchwirtschaft mit den bekannten schwarz-weiÃŸen Holstein-Friesian-Rindern, prÃ¤gt das lÃ¤ndliche Bild. Geografie K7: Friesland hat viele durch KanÃ¤le verbundene Seen. Warum war der Wassertransport frÃ¼her effizienter als der StraÃŸentransport?",
    hu: "FrÃ­zfÃ¶ld (Friesland) Hollandia Ã©szaki tartomÃ¡nya, amely erÅ‘s kulturÃ¡lis identitÃ¡sÃ¡rÃ³l Ã©s sajÃ¡t hivatalos nyelvÃ©rÅ‘l, a frÃ­zrÅ‘l ismert. A rÃ©giÃ³t a kiterjedt tavak hÃ¡lÃ³zata, a csatornÃ¡k Ã©s a tengerparti szigetek jellemzik, Ã­gy a vÃ­zisportok egyik legnÃ©pszerÅ±bb kÃ¶zpontja. A tartomÃ¡ny gazdasÃ¡ga tÃ¶rtÃ©nelmileg a mezÅ‘gazdasÃ¡gra Ã©s a hajÃ³zÃ¡sra Ã©pÃ¼lt, ma pedig a turizmus is jelentÅ‘s. TÃ©len, ha a csatornÃ¡k befagynak, a hÃ­res tizenegy vÃ¡rosos korcsolyaverseny (Elfstedentocht) lÃ¡zba hozza az egÃ©sz orszÃ¡got. FÃ¶ldrajz K5: Melyik az a kÃ©t hivatalos nyelv, amelyet FrÃ­zfÃ¶ld tartomÃ¡nyban beszÃ©lnek?",
    ro: "Frizia (Friesland), situatÄƒ Ã®n nordul Olandei, are o identitate culturalÄƒ puternicÄƒ È™i este singura provincie cu o a doua limbÄƒ oficialÄƒ: frizona de vest. Peisajul este dominat de o reÈ›ea de lacuri, canale È™i coasta MÄƒrii Wadden. Sporturile tradiÈ›ionale, cum ar fi patinajul pe gheaÈ›Äƒ pe canale (Elfstedentocht) È™i sÄƒritura cu prÄƒjina peste canale (Fierljeppen), sunt profund Ã®nrÄƒdÄƒcinate Ã®n cultura localÄƒ. Agricultura, Ã®n special producÈ›ia de lapte cu vacile Holstein-FrizÄƒ, este esenÈ›ialÄƒ. Geografie K7: Frizia are multe lacuri interconectate prin canale. De ce era transportul pe apÄƒ mai eficient decÃ¢t cel rutier Ã®n trecut?",
    en: "Friesland, located in the northern Netherlands, has a strong cultural identity of its own and is the only province with a second official language: West Frisian. The landscape is dominated by countless lakes, canals, and the long coastline along the Wadden Sea. Traditional sports such as ice skating on frozen canals (Elfstedentocht) and Fierljeppen (pole vaulting over water ditches) are deeply rooted in the culture. Agriculture, especially dairy farming with the famous black-and-white Holstein-Friesian cattle, characterizes the rural landscape. Geography K7: Friesland has many lakes connected by canals. Why was water transport more efficient than road transport in the past?"
  },
  facts: {
    de: ["Friesisch ist hier die zweite offizielle Amtssprache.","Leeuwarden ist die Hauptstadt der Provinz.","BerÃ¼hmt fÃ¼r das Schlittschuhrennen 'Elfstedentocht'.","Die Friesischen Seen sind ein beliebtes Segelrevier.","Beherbergt die Ã¤ltesten funktionierenden Planetarien Europas (Eise Eisinga).","Bekannt fÃ¼r das schwarz-weiÃŸe Friesenrind.","Vier Watteninseln gehÃ¶ren zur Provinz Friesland.","Hat eine lange Tradition im Wassersport und Bootsbau."],
    hu: ["A frÃ­z itt a mÃ¡sodik hivatalos nyelv.","Leeuwarden a tartomÃ¡ny fÅ‘vÃ¡rosa.","HÃ­res az 'Elfstedentocht' korcsolyaversenyrÅ‘l.","A FrÃ­z-tavak nÃ©pszerÅ± vitorlÃ¡sterÃ¼letek.","Itt talÃ¡lhatÃ³ EurÃ³pa legrÃ©gebbi mÅ±kÃ¶dÅ‘ planetÃ¡riuma (Eise Eisinga).","A fekete-fehÃ©r frÃ­z szarvasmarhÃ¡rÃ³l ismert.","NÃ©gy Watt-sziget tartozik FrÃ­zfÃ¶ld tartomÃ¡nyhoz.","HosszÃº hagyomÃ¡nya van a vÃ­zi sportoknak Ã©s a hajÃ³Ã©pÃ­tÃ©snek."],
    ro: ["Frizona este a doua limbÄƒ oficialÄƒ aici.","Leeuwarden este capitala provinciei.","FaimoasÄƒ pentru cursa de patinaj pe gheaÈ›Äƒ 'Elfstedentocht'.","Lacurile frizone sunt o zonÄƒ popularÄƒ de navigaÈ›ie.","GÄƒzduieÈ™te cel mai vechi planetariu funcÈ›ional din Europa (Eise Eisinga).","CunoscutÄƒ pentru bovinele frizone alb-negru.","Patru insule Wadden aparÈ›in provinciei Frizia.","Are o lungÄƒ tradiÈ›ie Ã®n sporturile nautice È™i construcÈ›ia de bÄƒrci."],
    en: ["Frisian is the second official language here.","Leeuwarden is the capital of the province.","Famous for the 'Elfstedentocht' ice skating race.","The Frisian Lakes are a popular sailing area.","Houses the oldest working planetarium in Europe (Eise Eisinga).","Known for the black and white Frisian cattle.","Four Wadden Islands belong to the province of Friesland.","Has a long tradition in water sports and boat building."]
  },
  factsAdvanced: {
    de: [
      "Westfriesisch wird von mehr als der HÃ¤lfte der Einwohner Frieslands als Muttersprache gesprochen.",
      "Die Elfstedentocht, ein legendÃ¤res Eisschnelllaufrennen Ã¼ber 200 Kilometer, findet auf den KanÃ¤len der Provinz statt, wenn diese stark genug zugefroren sind.",
      "Friesland hat 11 historische StÃ¤dte, die alle im Mittelalter Stadtrechte erhielten.",
      "Das Wattenmeer, das an Friesland grenzt, ist ein UNESCO-Weltnaturerbe."
    ],
    hu: ["A frÃ­z egy hivatalosan elismert nyelv, amelyet a holland mellett beszÃ©lnek itt.", "A tartomÃ¡ny bÃ¼szkÃ©lkedhet Hollandia legnagyobb Ã¶sszefÃ¼ggÅ‘ tavainak hÃ¡lÃ³zatÃ¡val.", "Az Elfstedentocht (tizenegy vÃ¡rosos tÃºra) egy legendÃ¡s, kÃ¶zel 200 km hosszÃº korcsolyaverseny.", "Itt talÃ¡lhatÃ³ a Wadden-tenger tÃ¶bb szigete, amely UNESCO VilÃ¡gÃ¶rÃ¶ksÃ©gi helyszÃ­n."],
    ro: [
      "Frizona de vest este o limbÄƒ recunoscutÄƒ oficial, vorbitÄƒ alÄƒturi de olandezÄƒ.",
      "Provincia se mÃ¢ndreÈ™te cu cea mai mare reÈ›ea de lacuri interconectate din Olanda.",
      "Elfstedentocht este o cursÄƒ legendarÄƒ de patinaj pe gheaÈ›Äƒ cu o lungime de aproape 200 km.",
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
      de: "Gelderland ist die flÃ¤chenmÃ¤ÃŸig grÃ¶ÃŸte Provinz der Niederlande, bekannt fÃ¼r den Nationalpark De Hoge Veluwe und die historische Stadt Nijmegen.",
      hu: "Gelderland Hollandia legnagyobb terÃ¼letÅ± tartomÃ¡nya, amely a De Hoge Veluwe Nemzeti ParkrÃ³l Ã©s Nijmegen tÃ¶rtÃ©nelmi vÃ¡rosÃ¡rÃ³l ismert.",
      ro: "Gelderland este cea mai mare provincie din Olanda ca suprafaÈ›Äƒ, cunoscutÄƒ pentru Parcul NaÈ›ional De Hoge Veluwe È™i oraÈ™ul istoric Nijmegen.",
      en: "Gelderland is the largest province in the Netherlands by area, known for the De Hoge Veluwe National Park and the historic city of Nijmegen."
    },
    descriptionAdvanced: {
    de: "Gelderland ist die flÃ¤chenmÃ¤ÃŸig grÃ¶ÃŸte Provinz der Niederlande und liegt im Osten und in der Mitte des Landes. Sie ist besonders bekannt fÃ¼r ihre abwechslungsreiche Natur, zu der die bewaldeten HÃ¼gel der Veluwe, weitlÃ¤ufige HeideflÃ¤chen und die FlusstÃ¤ler von Rhein, Waal und IJssel gehÃ¶ren. Historisch war die Region ein mÃ¤chtiges Herzogtum, wovon heute noch zahlreiche SchlÃ¶sser und Burgen zeugen, wie zum Beispiel Schloss Rosendael. Die Hauptstadt Arnhem spielte eine entscheidende Rolle in der Endphase des Zweiten Weltkriegs, bekannt durch die Schlacht um Arnhem. Geschichte K8: WÃ¤hrend der Operation Market Garden 1944 versuchten alliierte Truppen, BrÃ¼cken in Gelderland zu erobern. Welches strategische Ziel verfolgten sie damit?",
    hu: "Gelderland Hollandia legnagyobb terÃ¼letÅ± tartomÃ¡nya, amely vÃ¡ltozatos tÃ¡jairÃ³l ismert, az erdÅ‘s Veluwe rÃ©giÃ³tÃ³l kezdve az orszÃ¡g legjelentÅ‘sebb folyÃ³inak vÃ¶lgyÃ©ig. A tartomÃ¡ny gazdag tÃ¶rtÃ©nelemmel bÃ¼szkÃ©lkedhet, amelyet szÃ¡mos kastÃ©ly, erÅ‘dÃ­tmÃ©ny Ã©s kÃ¶zÃ©pkori vÃ¡ros, pÃ©ldÃ¡ul Arnhem Ã©s Nijmegen Å‘riz. Arnhem a II. vilÃ¡ghÃ¡borÃº sorÃ¡n a Market Garden hadmÅ±velet egyik kulcsfontossÃ¡gÃº helyszÃ­ne volt. A Veluwe Nemzeti Park lenyÅ±gÃ¶zÅ‘ termÃ©szeti kincsekkel Ã©s mÅ±vÃ©szeti gyÅ±jtemÃ©nyekkel vÃ¡rja a lÃ¡togatÃ³kat. TÃ¶rtÃ©nelem K8: MiÃ©rt volt stratÃ©giai jelentÅ‘sÃ©ge Arnhem vÃ¡rosÃ¡nak a mÃ¡sodik vilÃ¡ghÃ¡borÃºban?",
    ro: "Gelderland este cea mai mare provincie din Olanda ca suprafaÈ›Äƒ, situatÄƒ Ã®n estul È™i centrul È›Äƒrii. Este cunoscutÄƒ pentru natura sa diversificatÄƒ, incluzÃ¢nd dealurile Ã®mpÄƒdurite din Veluwe, mlaÈ™tinile È™i vÄƒile rÃ¢urilor Rin, Waal È™i IJssel. Istoric, regiunea a fost un ducat puternic, cu numeroase castele È™i cetÄƒÈ›i medievale, cum ar fi Castelul Rosendael. Capitala Arnhem a jucat un rol crucial Ã®n faza finalÄƒ a celui de-al Doilea RÄƒzboi Mondial. Istorie K8: ÃŽn timpul OperaÈ›iunii Market Garden din 1944, trupele aliate au Ã®ncercat sÄƒ captureze poduri Ã®n Gelderland. Ce obiectiv strategic urmÄƒreau?",
    en: "Gelderland is the largest province in the Netherlands by area, located in the east and center of the country. It is particularly known for its diverse nature, which includes the forested hills of the Veluwe, vast heathlands, and the river valleys of the Rhine, Waal, and IJssel. Historically, the region was a powerful duchy, as evidenced today by numerous castles and fortresses, such as Rosendael Castle. The capital Arnhem played a crucial role in the final phase of World War II, known through the Battle of Arnhem. History K8: During Operation Market Garden in 1944, Allied troops attempted to capture bridges in Gelderland. What strategic goal were they pursuing?"
  },
  facts: {
    de: ["Gelderland ist die flÃ¤chengrÃ¶ÃŸte Provinz der Niederlande.","Arnhem ist die Hauptstadt und Nijmegen die grÃ¶ÃŸte Stadt.","Der Nationalpark De Hoge Veluwe liegt hier.","Nijmegen gilt als die Ã¤lteste Stadt der Niederlande.","Schauplatz der Operation Market Garden im Zweiten Weltkrieg.","Der Fluss Rhein durchquert die Provinz.","Bekannt fÃ¼r Obstbau in der Region Betuwe.","Das KrÃ¶ller-MÃ¼ller-Museum ist eine Top-Attraktion der Provinz."],
    hu: ["Gelderland terÃ¼letÃ©t tekintve Hollandia legnagyobb tartomÃ¡nya.","Arnhem a fÅ‘vÃ¡ros, Ã©s Nijmegen a legnagyobb vÃ¡ros.","Itt talÃ¡lhatÃ³ a De Hoge Veluwe Nemzeti Park.","Nijmegen Hollandia legrÃ©gebbi vÃ¡rosÃ¡nak szÃ¡mÃ­t.","A Market Garden hadmÅ±velet helyszÃ­ne a mÃ¡sodik vilÃ¡ghÃ¡borÃºban.","A Rajna folyÃ³ Ã¡tszeli a tartomÃ¡nyt.","A Betuwe rÃ©giÃ³ gyÃ¼mÃ¶lcstermesztÃ©sÃ©rÅ‘l ismert.","A KrÃ¶ller-MÃ¼ller MÃºzeum a tartomÃ¡ny egyik fÅ‘ lÃ¡tvÃ¡nyossÃ¡ga."],
    ro: ["Gelderland este cea mai mare provincie din Olanda dupÄƒ suprafaÈ›Äƒ.","Arnhem este capitala È™i Nijmegen este cel mai mare oraÈ™.","Parcul NaÈ›ional De Hoge Veluwe se aflÄƒ aici.","Nijmegen este considerat cel mai vechi oraÈ™ din Olanda.","Locul OperaÈ›iunii Market Garden din timpul celui de-al Doilea RÄƒzboi Mondial.","Fluviul Rin traverseazÄƒ provincia.","CunoscutÄƒ pentru pomiculturÄƒ Ã®n regiunea Betuwe.","Muzeul KrÃ¶ller-MÃ¼ller este o atracÈ›ie principalÄƒ a provinciei."],
    en: ["Gelderland is the largest province in the Netherlands by area.","Arnhem is the capital and Nijmegen is the largest city.","The De Hoge Veluwe National Park is located here.","Nijmegen is considered the oldest city in the Netherlands.","Site of Operation Market Garden during World War II.","The Rhine River crosses the province.","Known for fruit growing in the Betuwe region.","The KrÃ¶ller-MÃ¼ller Museum is a top attraction in the province."]
  },
  factsAdvanced: {
    de: [
      "Der Nationalpark De Hoge Veluwe in Gelderland ist das grÃ¶ÃŸte zusammenhÃ¤ngende Naturschutzgebiet der Niederlande.",
      "Gelderland produziert einen GroÃŸteil der niederlÃ¤ndischen Ã„pfel und Birnen, insbesondere in der Region Betuwe.",
      "Die Stadt Nijmegen in Gelderland beansprucht, die Ã¤lteste Stadt der Niederlande zu sein.",
      "Arnhem verfÃ¼gt Ã¼ber das einzige Obus-System (Trolleybus) der Niederlande."
    ],
    hu: ["A Hoge Veluwe Nemzeti Park Hollandia legnagyobb Ã¶sszefÃ¼ggÅ‘ termÃ©szetvÃ©delmi terÃ¼lete.", "Nijmegen, Gelderland egyik vÃ¡rosa, Hollandia egyik legrÃ©gebbi telepÃ¼lÃ©se, a rÃ³mai korban alapÃ­tottÃ¡k.", "A tartomÃ¡nyban talÃ¡lhatÃ³ a KrÃ¶ller-MÃ¼ller MÃºzeum, amely a vilÃ¡g mÃ¡sodik legnagyobb Van Gogh-gyÅ±jtemÃ©nyÃ©t Å‘rzi.", "Gelderland a holland gyÃ¼mÃ¶lcstermesztÃ©s kÃ¶zpontja, kÃ¼lÃ¶nÃ¶sen a Betuwe rÃ©giÃ³."],
    ro: [
      "Parcul NaÈ›ional De Hoge Veluwe din Gelderland este cea mai mare rezervaÈ›ie naturalÄƒ continuÄƒ din Olanda.",
      "OraÈ™ul Nijmegen revendicÄƒ titlul de cel mai vechi oraÈ™ din ÈšÄƒrile de Jos, avÃ¢nd o istorie romanÄƒ.",
      "Muzeul KrÃ¶ller-MÃ¼ller, situat aici, adÄƒposteÈ™te a doua cea mai mare colecÈ›ie Van Gogh din lume.",
      "Gelderland produce o mare parte din fructele olandeze, Ã®n special Ã®n regiunea Betuwe."
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
      de: "Groningen ist die nordÃ¶stlichste Provinz der Niederlande, bekannt fÃ¼r ihre weiten Polderlandschaften und die lebendige UniversitÃ¤tsstadt Groningen.",
      hu: "Groningen Hollandia legÃ©szakkeletibb tartomÃ¡nya, amely kiterjedt polderjeirÅ‘l Ã©s vibrÃ¡lÃ³ egyetemi vÃ¡rosÃ¡rÃ³l, GroningenrÅ‘l ismert.",
      ro: "Groningen este cea mai nord-esticÄƒ provincie a Olandei, cunoscutÄƒ pentru peisajele sale vaste de poldere È™i oraÈ™ul universitar vibrant Groningen.",
      en: "Groningen is the northeasternmost province of the Netherlands, known for its vast polder landscapes and the vibrant university city of Groningen."
    },
    descriptionAdvanced: {
    de: "Groningen ist die nordÃ¶stlichste Provinz der Niederlande und vereint weite landwirtschaftliche FlÃ¤chen mit einer der lebendigsten UniversitÃ¤tsstÃ¤dte des Landes. Die Region war historisch stark durch den Handel geprÃ¤gt und profitierte vom Torfabbau und spÃ¤ter von groÃŸen Erdgasfunden im 20. Jahrhundert. Die Landschaft zeichnet sich durch charakteristische alte BauernhÃ¶fe und weite Polder aus. Die gleichnamige Hauptstadt wird oft als 'Metropole des Nordens' bezeichnet und hat eine lange Geschichte als Hansestadt. Geografie K7: In Groningen wurde jahrelang Erdgas gefÃ¶rdert, was zu Erdbeben fÃ¼hrte. Wie entsteht ein Erdbeben durch die Entnahme von Gas aus dem Boden?",
    hu: "Groningen a legÃ©szakibb holland tartomÃ¡ny, amelyet lenyÅ±gÃ¶zÅ‘ kontrasztok jellemeznek: az egyetemi vÃ¡ros Ã©lÃ©nk nyÃ¼zsgÃ©se Ã©s a vidÃ©k vÃ©gtelen, csendes polderei. A tartomÃ¡ny fÅ‘vÃ¡rosa, Groningen vÃ¡rosa Ã©vszÃ¡zadok Ã³ta a rÃ©giÃ³ kulturÃ¡lis Ã©s gazdasÃ¡gi kÃ¶zpontja, ahol a fiatalos egyetemi Ã©let tÃ¶rtÃ©nelmi Ã©pÃ­tÃ©szettel pÃ¡rosul. A vidÃ©k gazdag agrÃ¡rterÃ¼let, ahol monumentÃ¡lis rÃ©gi tanyÃ¡k (Ãºgynevezett herenboerderijen) talÃ¡lhatÃ³k. A tartomÃ¡ny alatt talÃ¡lhatÃ³ EurÃ³pa egyik legnagyobb fÃ¶ldgÃ¡zmezÅ‘je is. FÃ¶ldrajz K8: A fÃ¶ldgÃ¡z kitermelÃ©se milyen geolÃ³giai problÃ©mÃ¡kat okozott Groningen tartomÃ¡nyban az elmÃºlt Ã©vtizedekben?",
    ro: "Groningen, cea mai nord-esticÄƒ provincie a Olandei, combinÄƒ vaste terenuri agricole cu unul dintre cele mai vibrante oraÈ™e universitare din È›arÄƒ. Regiunea a fost modelatÄƒ istoric de comerÈ›, profitÃ¢nd de extracÈ›ia turbei È™i, mai tÃ¢rziu, de mari rezerve de gaze naturale descoperite Ã®n secolul al XX-lea. Peisajul se remarcÄƒ prin ferme vechi caracteristice È™i poldere Ã®ntinse. Capitala cu acelaÈ™i nume este adesea numitÄƒ â€žMetropola Norduluiâ€ È™i are o lungÄƒ istorie ca oraÈ™ hanseatic. Geografie K7: ExtracÈ›ia gazelor naturale a provocat cutremure Ã®n Groningen. Cum se produce un cutremur Ã®n urma extragerii gazului din sol?",
    en: "Groningen is the northeasternmost province of the Netherlands, combining vast agricultural lands with one of the most vibrant university cities in the country. The region was historically heavily shaped by trade and profited from peat extraction, and later from large natural gas discoveries in the 20th century. The landscape features characteristic old farmhouses and wide polders. The capital of the same name is often called the 'Metropolis of the North' and has a long history as a Hanseatic city. Geography K7: Natural gas was extracted in Groningen for years, leading to earthquakes. How does an earthquake occur due to gas extraction from the ground?"
  },
  facts: {
    de: ["Groningen ist die nordÃ¶stlichste Provinz des Landes.","Die gleichnamige Stadt beherbergt eine der Ã¤ltesten UniversitÃ¤ten der Niederlande.","VerfÃ¼gt Ã¼ber das grÃ¶ÃŸte Onshore-Erdgasfeld Europas.","Die Landschaft ist geprÃ¤gt von mittelalterlichen 'Borg'-HÃ¤usern.","Ein Zentrum der Fahrradkultur, mit einem extrem fahrradfreundlichen Zentrum.","Der Martiniturm in Groningen ist das Wahrzeichen der Region.","Die Festung Bourtange liegt nahe der deutschen Grenze.","Der Seehafen Eemshaven ist ein wichtiger Energie- und Datenknotenpunkt."],
    hu: ["Groningen az orszÃ¡g legÃ©szakkeletibb tartomÃ¡nya.","Az azonos nevÅ± vÃ¡ros Hollandia egyik legrÃ©gebbi egyetemÃ©nek ad otthont.","Itt talÃ¡lhatÃ³ EurÃ³pa legnagyobb szÃ¡razfÃ¶ldi fÃ¶ldgÃ¡zmezÅ‘je.","A tÃ¡jat a kÃ¶zÃ©pkori 'Borg' hÃ¡zak jellemzik.","A kerÃ©kpÃ¡ros kultÃºra kÃ¶zpontja, rendkÃ­vÃ¼l kerÃ©kpÃ¡rosbarÃ¡t kÃ¶zponttal.","A groningeni Martini-torony a rÃ©giÃ³ jelkÃ©pe.","A Bourtange erÅ‘d a nÃ©met hatÃ¡r kÃ¶zelÃ©ben talÃ¡lhatÃ³.","Az Eemshaven tengeri kikÃ¶tÅ‘ fontos energia- Ã©s adatkÃ¶zpont."],
    ro: ["Groningen este cea mai nord-esticÄƒ provincie a È›Äƒrii.","OraÈ™ul cu acelaÈ™i nume gÄƒzduieÈ™te una dintre cele mai vechi universitÄƒÈ›i din Olanda.","Are cel mai mare zÄƒcÄƒmÃ¢nt de gaze naturale onshore din Europa.","Peisajul este caracterizat de case medievale 'Borg'.","Un centru al culturii bicicletelor, cu un centru extrem de prietenos pentru biciclete.","Turnul Martini din Groningen este simbolul regiunii.","Cetatea Bourtange este situatÄƒ Ã®n apropierea graniÈ›ei cu Germania.","Portul maritim Eemshaven este un important centru de energie È™i date."],
    en: ["Groningen is the northeasternmost province of the country.","The city of the same name is home to one of the oldest universities in the Netherlands.","Has the largest onshore natural gas field in Europe.","The landscape is characterized by medieval 'Borg' houses.","A center of bicycle culture, with an extremely bicycle-friendly center.","The Martini Tower in Groningen is the landmark of the region.","The Bourtange fortress is located near the German border.","The Eemshaven seaport is an important energy and data hub."]
  },
  factsAdvanced: {
    de: [
      "Das Groningen-Gasfeld war das grÃ¶ÃŸte Erdgasfeld in Westeuropa.",
      "Die UniversitÃ¤t Groningen, gegrÃ¼ndet 1614, ist eine der Ã¤ltesten und renommiertesten UniversitÃ¤ten der Niederlande.",
      "Der Martiniturm in der Stadt Groningen ist 97 Meter hoch und ein Wahrzeichen der Provinz.",
      "In der Provinz steht die Festung Bourtange, eine perfekt erhaltene sternfÃ¶rmige Festungsanlage aus dem 16. Jahrhundert."
    ],
    hu: ["A groningeni egyetemet 1614-ben alapÃ­tottÃ¡k, Ã­gy Hollandia egyik legrÃ©gebbi egyeteme.", "A tartomÃ¡ny alatt fekvÅ‘ slochtereni fÃ¶ldgÃ¡zmezÅ‘ EurÃ³pa legnagyobbja.", "A Bourtange erÅ‘d egy csillag alakÃº vÃ©delmi Ã©pÃ­tmÃ©ny a spanyol-holland hÃ¡borÃº idejÃ©bÅ‘l.", "A Martini-torony Groningen vÃ¡rosÃ¡nak szimbÃ³luma, amely tÃ¶bb mint 500 Ã©ves."],
    ro: [
      "Universitatea din Groningen, fondatÄƒ Ã®n 1614, este una dintre cele mai vechi din Olanda.",
      "CÃ¢mpul de gaze Slochteren situat sub provincie este cel mai mare din Europa.",
      "FortÄƒreaÈ›a Bourtange este o structurÄƒ defensivÄƒ Ã®n formÄƒ de stea datÃ¢nd din RÄƒzboiul de Optzeci de Ani.",
      "Turnul Martini este simbolul oraÈ™ului Groningen È™i are o vechime de peste 500 de ani."
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
    de: "Limburg ist die sÃ¼dlichste Provinz der Niederlande und grenzt an Deutschland sowie Belgien. Im Gegensatz zum Rest des Landes ist die Landschaft hier sanft hÃ¼gelig, was ihr einen einzigartigen Charme verleiht. Die Hauptstadt Maastricht strahlt eine fast sÃ¼deuropÃ¤ische AtmosphÃ¤re aus und ist historisch durch den Vertrag von Maastricht bedeutend. Die Region ist berÃ¼hmt fÃ¼r ihren Burgunder-Lebensstil, Spargel, HÃ¶hlen und traditionellen Vlaai (Kuchen).",
    hu: "Limburg Hollandia legdÃ©libb tartomÃ¡nya, amely NÃ©metorszÃ¡ggal Ã©s Belgiummal hatÃ¡ros. Az orszÃ¡g tÃ¶bbi rÃ©szÃ©vel ellentÃ©tben a tÃ¡j itt enyhÃ©n dombos, ami egyedÃ¼lÃ¡llÃ³ bÃ¡jt kÃ¶lcsÃ¶nÃ¶z neki. A fÅ‘vÃ¡ros, Maastricht szinte dÃ©l-eurÃ³pai hangulatot Ã¡raszt, Ã©s tÃ¶rtÃ©nelmileg jelentÅ‘s a maastrichti szerzÅ‘dÃ©s rÃ©vÃ©n. A rÃ©giÃ³ hÃ­res burgundi Ã©letmÃ³djÃ¡rÃ³l, spÃ¡rgÃ¡jÃ¡rÃ³l, barlangjairÃ³l Ã©s a hagyomÃ¡nyos vlaai (sÃ¼temÃ©ny) kÃ©szÃ­tÃ©sÃ©rÅ‘l.",
    ro: "Limburg este cea mai sudicÄƒ provincie a Olandei È™i se Ã®nvecineazÄƒ cu Germania È™i Belgia. Spre deosebire de restul È›Äƒrii, peisajul de aici este uÈ™or deluros, ceea ce Ã®i conferÄƒ un farmec unic. Capitala Maastricht emanÄƒ o atmosferÄƒ aproape sud-europeanÄƒ È™i este semnificativÄƒ istoric prin Tratatul de la Maastricht. Regiunea este renumitÄƒ pentru stilul sÄƒu de viaÈ›Äƒ burgund, sparanghel, peÈ™teri È™i vlaai (plÄƒcintÄƒ) tradiÈ›ionalÄƒ.",
    en: "Limburg is the southernmost province of the Netherlands, bordering Germany and Belgium. Unlike the rest of the country, the landscape here is gently hilly, giving it a unique charm. The capital, Maastricht, exudes an almost southern European atmosphere and is historically significant due to the Maastricht Treaty. The region is famous for its Burgundian lifestyle, asparagus, caves, and traditional vlaai (pie)."
  },
  facts: {
    de: ["Maastricht ist die Hauptstadt der Provinz Limburg.","Einzige hÃ¼gelige Provinz der ansonsten flachen Niederlande.","Der hÃ¶chste Punkt des Landes (Vaalserberg) liegt hier im DreilÃ¤ndereck.","Bekannt fÃ¼r den Limburger Vlaai (einen traditionellen Obstkuchen).","Das historische Zentrum von Maastricht hat eine rÃ¶mische Vergangenheit.","Die Region hat viele KalksteinhÃ¶hlen (z. B. bei Valkenburg).","Starke katholische Traditionen im Vergleich zum Norden.","Der Vertrag von Maastricht (EU-GrÃ¼ndung) wurde hier 1992 unterzeichnet."],
    hu: ["Maastricht Limburg tartomÃ¡ny fÅ‘vÃ¡rosa.","Az egyetlen dombos tartomÃ¡ny az egyÃ©bkÃ©nt sÃ­k HollandiÃ¡ban.","Itt talÃ¡lhatÃ³ az orszÃ¡g legmagasabb pontja (Vaalserberg) a hÃ¡rmashatÃ¡ron.","A limburgi Vlaai-rÃ³l (hagyomÃ¡nyos gyÃ¼mÃ¶lcsÃ¶s pite) ismert.","Maastricht tÃ¶rtÃ©nelmi kÃ¶zpontja rÃ³mai mÃºlttal rendelkezik.","A rÃ©giÃ³ban sok mÃ©szkÅ‘barlang talÃ¡lhatÃ³ (pl. Valkenburg kÃ¶zelÃ©ben).","ErÅ‘s katolikus hagyomÃ¡nyok az Ã©szaki rÃ©sszel szemben.","A maastrichti szerzÅ‘dÃ©st (az EU alapÃ­tÃ¡sÃ¡t) itt Ã­rtÃ¡k alÃ¡ 1992-ben."],
    ro: ["Maastricht este capitala provinciei Limburg.","Singura provincie deluroasÄƒ din Olanda altfel platÄƒ.","Cel mai Ã®nalt punct din È›arÄƒ (Vaalserberg) este situat aici, la graniÈ›a triplÄƒ.","CunoscutÄƒ pentru Limburg Vlaai (o plÄƒcintÄƒ tradiÈ›ionalÄƒ cu fructe).","Centrul istoric al oraÈ™ului Maastricht are un trecut roman.","Regiunea are multe peÈ™teri de calcar (de ex. lÃ¢ngÄƒ Valkenburg).","TradiÈ›ii catolice puternice Ã®n comparaÈ›ie cu nordul.","Tratatul de la Maastricht (Ã®nfiinÈ›area UE) a fost semnat aici Ã®n 1992."],
    en: ["Maastricht is the capital of the province of Limburg.","The only hilly province in the otherwise flat Netherlands.","The highest point in the country (Vaalserberg) is located here at the tripoint.","Known for the Limburg Vlaai (a traditional fruit pie).","The historic center of Maastricht has a Roman past.","The region has many limestone caves (e.g., near Valkenburg).","Strong Catholic traditions compared to the north.","The Maastricht Treaty (EU foundation) was signed here in 1992."]
  },
  descriptionAdvanced: {
    de: "Limburg, die sÃ¼dlichste Provinz der Niederlande, unterscheidet sich geografisch und kulturell stark vom Rest des Landes. Die Landschaft ist sanft hÃ¼gelig, eine Seltenheit in den ansonsten extrem flachen Niederlanden, was sie zu einer beliebten Region fÃ¼r Radsportler macht. Limburg hat eine tief verwurzelte katholische Tradition und ist berÃ¼hmt fÃ¼r seinen ausgeprÃ¤gten burgundischen Lebensstil und die vielfÃ¤ltigen regionalen Dialekte. Die Hauptstadt Maastricht am Ufer der Maas ist eine der Ã¤ltesten StÃ¤dte des Landes und atmet eine internationale, fast sÃ¼deuropÃ¤ische AtmosphÃ¤re. Geschichte K7: In Maastricht wurde 1992 ein wichtiger Vertrag unterzeichnet, der zur GrÃ¼ndung der EuropÃ¤ischen Union fÃ¼hrte. Welcher Vertrag war das?",
    hu: "Limburg Hollandia legdÃ©lebbi tartomÃ¡nya, amely eltÃ©r a hagyomÃ¡nyos holland sÃ­kvidÃ©ki tÃ¡jtÃ³l: dombos vidÃ©keivel Ã©s kanyargÃ³s folyÃ³ival inkÃ¡bb KÃ¶zÃ©p-EurÃ³pÃ¡ra emlÃ©keztet. A rÃ©giÃ³ tÃ¶rtÃ©nelmi kapcsolatban Ã¡llt a szomszÃ©dos nÃ©met Ã©s belga terÃ¼letekkel, ami egyedi kulturÃ¡lis Ã©s gasztronÃ³miai hagyomÃ¡nyokat eredmÃ©nyezett. FÅ‘vÃ¡rosa, Maastricht az orszÃ¡g egyik legrÃ©gebbi vÃ¡rosa, Ã©s az 1992-es maastrichti szerzÅ‘dÃ©s rÃ©vÃ©n az EurÃ³pai UniÃ³ szÃ¼letÃ©si helyekÃ©nt is ismert. GazdasÃ¡gilag korÃ¡bban a szÃ©nbÃ¡nyÃ¡szat kÃ¶zpontja volt. TÃ¶rtÃ©nelem K8: Milyen jelentÅ‘s nemzetkÃ¶zi egyezmÃ©nyt Ã­rtak alÃ¡ Maastrichtban, amely megalapozta az EurÃ³pai UniÃ³t?",
    ro: "Limburg, cea mai sudicÄƒ provincie a Olandei, diferÄƒ geografic È™i cultural de restul È›Äƒrii. Peisajul este uÈ™or deluros, o raritate Ã®n Olanda care este extrem de platÄƒ, fiind o regiune preferatÄƒ pentru ciclism. Limburg are o tradiÈ›ie catolicÄƒ profund Ã®nrÄƒdÄƒcinatÄƒ, fiind renumitÄƒ pentru stilul sÄƒu de viaÈ›Äƒ burgund È™i varietatea de dialecte regionale. Capitala Maastricht, situatÄƒ pe malurile fluviului Maas, este printre cele mai vechi oraÈ™e din È›arÄƒ È™i emanÄƒ o atmosferÄƒ internaÈ›ionalÄƒ. Istorie K7: ÃŽn 1992, la Maastricht a fost semnat un tratat important care a condus la Ã®nfiinÈ›area Uniunii Europene. Care a fost acel tratat?",
    en: "Limburg, the southernmost province of the Netherlands, differs geographically and culturally significantly from the rest of the country. The landscape is gently hilly, a rarity in the otherwise extremely flat Netherlands, making it a popular region for cyclists. Limburg has a deeply rooted Catholic tradition and is famous for its distinct Burgundian lifestyle and diverse regional dialects. The capital Maastricht on the banks of the river Maas is one of the oldest cities in the country and exudes an international, almost southern European atmosphere. History K7: An important treaty was signed in Maastricht in 1992 that led to the founding of the European Union. Which treaty was that?"
  },
  factsAdvanced: {
    de: [
      "In Limburg liegt der DreilÃ¤nderpunkt (Drielandenpunt), wo die Grenzen von Deutschland, Belgien und den Niederlanden zusammentreffen.",
      "Der hÃ¶chste natÃ¼rliche Punkt der europÃ¤ischen Niederlande, der Vaalserberg, liegt hier in Limburg.",
      "Limburg ist berÃ¼hmt fÃ¼r seinen weichen, fruchtigen Vlaai, einen traditionellen Kuchen.",
      "Der Vertrag von Maastricht wurde 1992 in der Provinzhauptstadt unterzeichnet."
    ],
    hu: ["A Vaalserberg hegy Limburgban talÃ¡lhatÃ³, Ã©s ez Hollandia eurÃ³pai rÃ©szÃ©nek legmagasabb pontja.", "A hÃ¡rmashatÃ¡rpont (Drielandenpunt) itt talÃ¡lhatÃ³, ahol Hollandia, Belgium Ã©s NÃ©metorszÃ¡g talÃ¡lkozik.", "Maastrichtot a rÃ³maiak alapÃ­tottÃ¡k egy fontos Maas-folyÃ³n lÃ©vÅ‘ Ã¡tkelÅ‘helynÃ©l.", "A tartomÃ¡ny hÃ­res kÃ¼lÃ¶nleges gyÃ¼mÃ¶lcsÃ¶s pitÃ©jÃ©rÅ‘l, a vlaai-rÃ³l."],
    ro: [
      "ÃŽn Limburg se aflÄƒ Vaalserberg, cel mai Ã®nalt punct din ÈšÄƒrile de Jos europene.",
      "Aici se gÄƒseÈ™te punctul celor trei graniÈ›e (Drielandenpunt), unde se Ã®ntÃ¢lnesc Olanda, Belgia È™i Germania.",
      "Maastricht a fost fondat de romani la un punct de trecere important de pe fluviul Maas.",
      "Provincia este renumitÄƒ pentru vlaai, o plÄƒcintÄƒ tradiÈ›ionalÄƒ delicioasÄƒ cu fructe."
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
    name: { de: "Nordbrabant", hu: "Ã‰szak-Brabant", ro: "Brabantul de Nord", en: "North Brabant" },
    image: "/geo-images/netherlands/north-brabant.webp",
  description: {
    de: "Nordbrabant ist eine charmante und wirtschaftlich starke Provinz im SÃ¼den der Niederlande, die fÃ¼r ihre GemÃ¼tlichkeit und Gastfreundschaft bekannt ist. Die Region war der Geburtsort des Elektronikriesen Philips und ist heute ein fÃ¼hrendes europÃ¤isches Technologiezentrum. Neben modernen StÃ¤dten wie Eindhoven, Breda und Tilburg gibt es hier wunderschÃ¶ne Nationalparks und den weltberÃ¼hmten MÃ¤rchen-Freizeitpark Efteling. Nordbrabant ist zudem das Zentrum des niederlÃ¤ndischen Karnevals.",
    hu: "Ã‰szak-Brabant egy bÃ¡jos Ã©s gazdasÃ¡gilag erÅ‘s tartomÃ¡ny Hollandia dÃ©li rÃ©szÃ©n, amely otthonossÃ¡gÃ¡rÃ³l Ã©s vendÃ©gszeretetÃ©rÅ‘l ismert. A rÃ©giÃ³ volt a Philips elektronikai Ã³riÃ¡s szÃ¼lÅ‘helye, Ã©s ma is vezetÅ‘ eurÃ³pai technolÃ³giai kÃ¶zpont. Az olyan modern vÃ¡rosok mellett, mint Eindhoven, Breda Ã©s Tilburg, gyÃ¶nyÃ¶rÅ± nemzeti parkok Ã©s a vilÃ¡ghÃ­rÅ± Efteling mese-vidÃ¡mpark is megtalÃ¡lhatÃ³ itt. Ã‰szak-Brabant egyben a holland karnevÃ¡l kÃ¶zpontja is.",
    ro: "Brabantul de Nord este o provincie fermecÄƒtoare È™i puternicÄƒ din punct de vedere economic din sudul Olandei, cunoscutÄƒ pentru confortul È™i ospitalitatea sa. Regiunea a fost locul de naÈ™tere al gigantului electronic Philips È™i este acum un important centru tehnologic european. Pe lÃ¢ngÄƒ oraÈ™e moderne precum Eindhoven, Breda È™i Tilburg, existÄƒ parcuri naÈ›ionale frumoase È™i faimosul parc de distracÈ›ii cu basme Efteling. Brabantul de Nord este, de asemenea, centrul carnavalului olandez.",
    en: "North Brabant is a charming and economically strong province in the south of the Netherlands, known for its coziness and hospitality. The region was the birthplace of the electronics giant Philips and is now a leading European technology hub. In addition to modern cities such as Eindhoven, Breda, and Tilburg, there are beautiful national parks and the world-famous Efteling fairytale amusement park. North Brabant is also the center of the Dutch carnival."
  },
  facts: {
    de: ["'s-Hertogenbosch (Den Bosch) ist die Hauptstadt der Provinz.","Eindhoven ist das wichtigste Technologiezentrum (Heimat von Philips).","Der MÃ¤rchen-Freizeitpark Efteling liegt in Nordbrabant.","Die Region ist das Zentrum des traditionellen niederlÃ¤ndischen Karnevals.","Vincent van Gogh wurde in Zundert (Nordbrabant) geboren.","Nationalparks wie die Loonse und Drunense DÃ¼nen prÃ¤gen die Natur.","Breda hat starke historische Verbindungen zur kÃ¶niglichen Familie.","Die Design Academy Eindhoven ist weltweit anerkannt."],
    hu: ["'s-Hertogenbosch (Den Bosch) a tartomÃ¡ny fÅ‘vÃ¡rosa.","Eindhoven a legfontosabb technolÃ³giai kÃ¶zpont (a Philips hazÃ¡ja).","Az Efteling mese-vidÃ¡mpark Ã‰szak-Brabantban talÃ¡lhatÃ³.","A rÃ©giÃ³ a hagyomÃ¡nyos holland karnevÃ¡l kÃ¶zpontja.","Vincent van Gogh Zundertben (Ã‰szak-Brabant) szÃ¼letett.","A termÃ©szetet olyan nemzeti parkok jellemzik, mint a Loonse Ã©s a Drunense Duinen.","Breda erÅ‘s tÃ¶rtÃ©nelmi kapcsolatokkal rendelkezik a kirÃ¡lyi csalÃ¡ddal.","Az eindhoveni Design Academy vilÃ¡gszerte elismert."],
    ro: ["'s-Hertogenbosch (Den Bosch) este capitala provinciei.","Eindhoven este cel mai important centru tehnologic (casa Philips).","Parcul de distracÈ›ii Efteling se aflÄƒ Ã®n Brabantul de Nord.","Regiunea este centrul carnavalului tradiÈ›ional olandez.","Vincent van Gogh s-a nÄƒscut Ã®n Zundert (Brabantul de Nord).","Parcurile naÈ›ionale precum Dunele Loonse È™i Drunense caracterizeazÄƒ natura.","Breda are legÄƒturi istorice puternice cu familia regalÄƒ.","Design Academy Eindhoven este recunoscutÄƒ la nivel mondial."],
    en: ["'s-Hertogenbosch (Den Bosch) is the capital of the province.","Eindhoven is the main technology center (home of Philips).","The Efteling fairytale amusement park is located in North Brabant.","The region is the center of the traditional Dutch carnival.","Vincent van Gogh was born in Zundert (North Brabant).","National parks such as the Loonse and Drunense Dunes characterize the nature.","Breda has strong historical connections to the royal family.","The Design Academy Eindhoven is globally recognized."]
  },
  descriptionAdvanced: {
    de: "Nordbrabant liegt im SÃ¼den der Niederlande und ist eine Provinz mit einem reichen industriellen und kulturellen Erbe. Die Region vereint historische StÃ¤dte wie 's-Hertogenbosch und Breda mit modernen Technologiezentren wie Eindhoven, das durch den Philips-Konzern geprÃ¤gt wurde. Die Kultur hier gilt als sehr gesellig, was sich im ausgiebig gefeierten Karneval und der traditionellen Gastfreundschaft zeigt. Nordbrabant ist zudem die Heimatstadt von Vincent van Gogh, dessen frÃ¼he Werke von der rauen Landschaft und den Bauern der Region inspiriert wurden. Kunst K6: Vincent van Gogh wurde in Nordbrabant geboren. In welchem Stil malte er seine berÃ¼hmten, farbenfrohen Sonnenblumen?",
    hu: "Ã‰szak-Brabant (Noord-Brabant) egy gazdasÃ¡gilag Ã©s kulturÃ¡lisan is meghatÃ¡rozÃ³ tartomÃ¡ny DÃ©l-HollandiÃ¡ban. Ismert barÃ¡tsÃ¡gos, â€žburgundiâ€ Ã©letmÃ³djÃ¡rÃ³l, amely a jÃ³ Ã©teleket Ã©s a tÃ¡rsasÃ¡gi Ã©letet Ã¼nnepli. FÅ‘vÃ¡rosa 's-Hertogenbosch (Den Bosch), mÃ­g Eindhoven a technolÃ³gia Ã©s az innovÃ¡ciÃ³ globÃ¡lis kÃ¶zpontja, rÃ©szben a Philips vÃ¡llalat alapÃ­tÃ¡sÃ¡nak kÃ¶szÃ¶nhetÅ‘en. A tartomÃ¡ny termÃ©szeti szÃ©psÃ©geit a Loonse en Drunense Duinen homokdÅ±nÃ©i Ã©s a Biesbosch nemzeti parkjai kÃ­nÃ¡ljÃ¡k. FÃ¶ldrajz K7: MiÃ©rt nevezik Eindhovent a 'FÃ©ny VÃ¡rosÃ¡nak', Ã©s melyik nagyvÃ¡llalathoz kÃ¶thetÅ‘ ez?",
    ro: "Brabantul de Nord (Noord-Brabant) este o provincie determinantÄƒ economic È™i cultural din sudul Olandei. Este cunoscutÄƒ pentru stilul sÄƒu de viaÈ›Äƒ prietenos, â€žburgundâ€, care celebreazÄƒ mÃ¢ncarea bunÄƒ È™i socializarea. Capitala sa este 's-Hertogenbosch (Den Bosch), Ã®n timp ce Eindhoven este un centru global de tehnologie È™i inovaÈ›ie, parÈ›ial datoritÄƒ fondÄƒrii companiei Philips. FrumuseÈ›ile naturale ale provinciei includ dunele de nisip din Loonse en Drunense Duinen È™i parcul naÈ›ional Biesbosch. Geografie K7: De ce este Eindhoven numit â€žOraÈ™ul Luminiiâ€ È™i de ce companie majorÄƒ este legat?",
    en: "North Brabant is located in the south of the Netherlands and is a province with a rich industrial and cultural heritage. The region combines historical cities like 's-Hertogenbosch and Breda with modern technology hubs like Eindhoven, which was shaped by the Philips corporation. The culture here is considered very sociable, evident in the extensively celebrated carnival and traditional hospitality. North Brabant is also the home province of Vincent van Gogh, whose early works were inspired by the rough landscape and the farmers of the region. Art K6: Vincent van Gogh was born in North Brabant. In what style did he paint his famous, colorful sunflowers?"
  },
  factsAdvanced: {
    de: [
      "Eindhoven in Nordbrabant ist eines der wichtigsten Technologiezentren Europas, oft als 'Brainport' bezeichnet.",
      "Die Provinz beherbergt Efteling, den grÃ¶ÃŸten und Ã¤ltesten Freizeitpark der Niederlande.",
      "In Zundert, einer Gemeinde in Nordbrabant, wurde der berÃ¼hmte Maler Vincent van Gogh geboren.",
      "Der Karneval in Brabant wird stark gefeiert, und viele StÃ¤dte nehmen fÃ¼r diese Zeit spezielle Karnevalsnamen an."
    ],
    hu: ["Eindhoven EurÃ³pa egyik legjelentÅ‘sebb technolÃ³giai Ã©s design kÃ¶zpontja.", "A hÃ­res holland festÅ‘, Vincent van Gogh Ã‰szak-Brabantban szÃ¼letett (Zundertben).", "Az Efteling, EurÃ³pa egyik legrÃ©gebbi Ã©s legnÃ©pszerÅ±bb vidÃ¡mparkja is ebben a tartomÃ¡nyban van.", "Itt Ã¼nneplik a holland karnevÃ¡l leglÃ¡tvÃ¡nyosabb esemÃ©nyeit."],
    ro: [
      "Eindhoven este unul dintre cele mai importante centre de tehnologie È™i design din Europa.",
      "Celebrul pictor olandez Vincent van Gogh s-a nÄƒscut Ã®n Brabantul de Nord (Ã®n Zundert).",
      "Efteling, unul dintre cele mai vechi È™i mai populare parcuri de distracÈ›ii din Europa, se aflÄƒ aici.",
      "Aici sunt sÄƒrbÄƒtorite cele mai spectaculoase evenimente ale carnavalului olandez."
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
    name: { de: "Nordholland", hu: "Ã‰szak-Holland", ro: "Olanda de Nord", en: "North Holland" },
    image: "/geo-images/netherlands/north-holland.webp",
  description: {
    de: "Nordholland ist eine der wichtigsten und bevÃ¶lkerungsreichsten Provinzen der Niederlande, die das pulsierende Amsterdam, historische StÃ¤dte und breite NordseestrÃ¤nde umfasst. Sie bildet zusammen mit SÃ¼dholland das historische Herz der niederlÃ¤ndischen Wirtschaft und Kultur. Die Provinz beheimatet Schiphol, einen der grÃ¶ÃŸten FlughÃ¤fen Europas, sowie pittoreske FischerdÃ¶rfer wie Volendam. Der Kontrast zwischen der internationalen Metropole Amsterdam und den traditionellen WindmÃ¼hlen an der Zaanse Schans ist bemerkenswert.",
    hu: "Ã‰szak-Holland Hollandia egyik legfontosabb Ã©s legnÃ©pesebb tartomÃ¡nya, amely magÃ¡ban foglalja a nyÃ¼zsgÅ‘ Amszterdamot, tÃ¶rtÃ©nelmi vÃ¡rosokat Ã©s szÃ©les Ã©szaki-tengeri strandokat. DÃ©l-HollandiÃ¡val egyÃ¼tt a holland gazdasÃ¡g Ã©s kultÃºra tÃ¶rtÃ©nelmi szÃ­vÃ©t alkotja. A tartomÃ¡ny ad otthont Schipholnak, EurÃ³pa egyik legnagyobb repÃ¼lÅ‘terÃ©nek, valamint festÅ‘i halÃ¡szfalvaknak, mint Volendam. Az amszterdami nemzetkÃ¶zi metropolisz Ã©s a Zaanse Schans hagyomÃ¡nyos szÃ©lmalmai kÃ¶zÃ¶tti kontraszt figyelemre mÃ©ltÃ³.",
    ro: "Olanda de Nord este una dintre cele mai importante È™i populate provincii ale Olandei, cuprinzÃ¢nd vibrantul Amsterdam, oraÈ™e istorice È™i plaje largi la Marea Nordului. ÃŽmpreunÄƒ cu Olanda de Sud, formeazÄƒ inima istoricÄƒ a economiei È™i culturii olandeze. Provincia gÄƒzduieÈ™te Schiphol, unul dintre cele mai mari aeroporturi din Europa, precum È™i sate de pescari pitoreÈ™ti precum Volendam. Contrastul dintre metropola internaÈ›ionalÄƒ Amsterdam È™i morile de vÃ¢nt tradiÈ›ionale de pe Zaanse Schans este remarcabil.",
    en: "North Holland is one of the most important and populous provinces of the Netherlands, encompassing vibrant Amsterdam, historic cities, and wide North Sea beaches. Together with South Holland, it forms the historical heart of the Dutch economy and culture. The province is home to Schiphol, one of Europe's largest airports, as well as picturesque fishing villages such as Volendam. The contrast between the international metropolis of Amsterdam and the traditional windmills at the Zaanse Schans is remarkable."
  },
  facts: {
    de: ["Haarlem ist die Hauptstadt der Provinz Nordholland.","Amsterdam, die grÃ¶ÃŸte Stadt des Landes, liegt hier.","Der internationale Flughafen Schiphol gehÃ¶rt zur Provinz.","Bekannt fÃ¼r das Freilichtmuseum Zaanse Schans.","Der KÃ¤semarkt in Alkmaar ist eine weltweite Touristenattraktion.","Texel, die grÃ¶ÃŸte niederlÃ¤ndische Watteninsel, gehÃ¶rt zu Nordholland.","Ein GroÃŸteil des Gebiets liegt unter dem Meeresspiegel.","Umfasst die wichtigsten historischen HÃ¤fen des Goldenen Zeitalters."],
    hu: ["Haarlem Ã‰szak-Holland tartomÃ¡ny fÅ‘vÃ¡rosa.","Amszterdam, az orszÃ¡g legnagyobb vÃ¡rosa itt talÃ¡lhatÃ³.","A Schiphol nemzetkÃ¶zi repÃ¼lÅ‘tÃ©r a tartomÃ¡nyhoz tartozik.","A Zaanse Schans szabadtÃ©ri mÃºzeumrÃ³l ismert.","Az alkmaari sajtpiac vilÃ¡gszerte ismert turisztikai lÃ¡tvÃ¡nyossÃ¡g.","Texel, a legnagyobb holland Watt-sziget Ã‰szak-HollandiÃ¡hoz tartozik.","A terÃ¼let nagy rÃ©sze a tengerszint alatt fekszik.","MagÃ¡ban foglalja az aranykor legfontosabb tÃ¶rtÃ©nelmi kikÃ¶tÅ‘it."],
    ro: ["Haarlem este capitala provinciei Olanda de Nord.","Amsterdam, cel mai mare oraÈ™ din È›arÄƒ, este situat aici.","Aeroportul InternaÈ›ional Schiphol aparÈ›ine provinciei.","CunoscutÄƒ pentru muzeul Ã®n aer liber Zaanse Schans.","PiaÈ›a de brÃ¢nzÄƒ din Alkmaar este o atracÈ›ie turisticÄƒ la nivel mondial.","Texel, cea mai mare insulÄƒ Wadden olandezÄƒ, aparÈ›ine Olandei de Nord.","O mare parte a zonei se aflÄƒ sub nivelul mÄƒrii.","Include cele mai importante porturi istorice din Epoca de Aur."],
    en: ["Haarlem is the capital of the province of North Holland.","Amsterdam, the largest city in the country, is located here.","Schiphol International Airport belongs to the province.","Known for the Zaanse Schans open-air museum.","The cheese market in Alkmaar is a worldwide tourist attraction.","Texel, the largest Dutch Wadden Island, belongs to North Holland.","Much of the area is below sea level.","Includes the most important historic ports of the Golden Age."]
  },
  descriptionAdvanced: {
    de: "Nordholland ist eine der wirtschaftlich und kulturell bedeutendsten Provinzen der Niederlande, mit Amsterdam als strahlendem Zentrum. Die Provinz umfasst eine vielfÃ¤ltige Landschaft von den langen NordseestrÃ¤nden im Westen bis hin zu den alten Zuiderzee-StÃ¤dten im Osten. Historisch war Nordholland das HerzstÃ¼ck des niederlÃ¤ndischen Goldenen Zeitalters im 17. Jahrhundert, als der Handel Ã¼ber die Ozeane immensen Reichtum in StÃ¤dte wie Haarlem, Alkmaar und Hoorn brachte. Die Provinz ist auch bekannt fÃ¼r ihre Blumenzwiebelregion, wo im FrÃ¼hling ausgedehnte Tulpenfelder blÃ¼hen. Geografie K5: Nordholland grenzt an das IJsselmeer, das frÃ¼her ein salziges Binnenmeer war. Warum hat man dieses Meer durch einen Deich von der Nordsee getrennt?",
    hu: "Ã‰szak-Holland (Noord-Holland) egy fÃ©lsziget alakÃº tartomÃ¡ny, amelyet nyugatrÃ³l az Ã‰szaki-tenger, keletrÅ‘l pedig az IJsselmeer hatÃ¡rol. Ebben a tartomÃ¡nyban talÃ¡lhatÃ³ az orszÃ¡g fÅ‘vÃ¡rosa, Amszterdam, valamint Schiphol nemzetkÃ¶zi repÃ¼lÅ‘tere, amely Hollandia legfontosabb gazdasÃ¡gi motorja. A rÃ©giÃ³ Ã©szaki rÃ©sze gazdag polderekben, szÃ©lmalmokban Ã©s hagyomÃ¡nyos halÃ¡szfalvakban, mint pÃ©ldÃ¡ul Volendam Ã©s Marken. Itt talÃ¡lhatÃ³ a sajtpiacÃ¡rÃ³l hÃ­res Alkmaar is. GazdasÃ¡g K7: Milyen szerepet jÃ¡tszott Amszterdam a 17. szÃ¡zadi globÃ¡lis kereskedelemben?",
    ro: "Olanda de Nord (Noord-Holland) este o provincie Ã®n formÄƒ de peninsulÄƒ, mÄƒrginitÄƒ la vest de Marea Nordului È™i la est de IJsselmeer. Aici se aflÄƒ capitala È›Äƒrii, Amsterdam, precum È™i aeroportul internaÈ›ional Schiphol, cel mai important motor economic al Olandei. Partea de nord a regiunii este bogatÄƒ Ã®n poldere, mori de vÃ¢nt È™i sate tradiÈ›ionale de pescari, precum Volendam È™i Marken. Tot aici se aflÄƒ È™i Alkmaar, faimos pentru piaÈ›a sa de brÃ¢nzÄƒ. Economie K7: Ce rol a jucat Amsterdam Ã®n comerÈ›ul global din secolul al XVII-lea?",
    en: "North Holland is one of the most economically and culturally significant provinces in the Netherlands, with Amsterdam as its radiant center. The province encompasses a diverse landscape from the long North Sea beaches in the west to the old Zuiderzee towns in the east. Historically, North Holland was the heart of the Dutch Golden Age in the 17th century, when transoceanic trade brought immense wealth to cities like Haarlem, Alkmaar, and Hoorn. The province is also known for its bulb-growing region, where extensive tulip fields bloom in spring. Geography K5: North Holland borders the IJsselmeer, which used to be a salty inland sea. Why was this sea separated from the North Sea by a dike?"
  },
  factsAdvanced: {
    de: [
      "Amsterdam, die Hauptstadt der Niederlande, liegt in Nordholland.",
      "Der Flughafen Schiphol, einer der grÃ¶ÃŸten und wichtigsten FlughÃ¤fen Europas, befindet sich in dieser Provinz.",
      "Die Insel Texel im Wattenmeer ist die grÃ¶ÃŸte der niederlÃ¤ndischen Nordseeinseln und gehÃ¶rt zu Nordholland.",
      "Nordholland ist ein wichtiger Standort fÃ¼r die niederlÃ¤ndische KÃ¤seproduktion, berÃ¼hmt durch StÃ¤dte wie Alkmaar und Edam."
    ],
    hu: ["A tartomÃ¡ny terÃ¼letÃ©nek nagy rÃ©sze mestersÃ©gesen kiszÃ¡rÃ­tott fÃ¶ld (polder).", "Az amszterdami Schiphol repÃ¼lÅ‘tÃ©r egy kiszÃ¡radt tÃ³ medrÃ©ben Ã©pÃ¼lt, 4 mÃ©terrel a tengerszint alatt.", "A Zaanse Schans szabadtÃ©ri mÃºzeum a 18-19. szÃ¡zadi ipari szÃ©lmalmokat mutatja be.", "Texel szigete Ã‰szak-HollandiÃ¡hoz tartozik, Ã©s nÃ©pszerÅ± madÃ¡rmegfigyelÅ‘ hely."],
    ro: [
      "O mare parte din teritoriul provinciei este pÄƒmÃ¢nt asanat artificial (polder).",
      "Aeroportul Schiphol din Amsterdam a fost construit Ã®n albia unui lac secat, la 4 metri sub nivelul mÄƒrii.",
      "Muzeul Ã®n aer liber Zaanse Schans prezintÄƒ mori de vÃ¢nt industriale din secolele XVIII-XIX.",
      "Insula Texel aparÈ›ine Olandei de Nord È™i este un loc popular pentru observarea pÄƒsÄƒrilor."
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
    de: "Overijssel ist eine von Natur und Geschichte geprÃ¤gte Provinz im Osten der Niederlande. Die Landschaft variiert von den morastigen Gebieten in Nordwesten bis zu den ausgedehnten WÃ¤ldern und historischen LandgÃ¼tern im Osten. Zahlreiche alte HansestÃ¤dte wie Zwolle, Kampen und Deventer zeugen von der groÃŸen Bedeutung der Region im mittelalterlichen Handel. Ein absolutes Highlight ist das autofreie Wasserdorf Giethoorn, auch 'Venedig des Nordens' genannt.",
    hu: "Overijssel termÃ©szettel Ã©s tÃ¶rtÃ©nelemmel Ã¡tszÅ‘tt tartomÃ¡ny Hollandia keleti rÃ©szÃ©n. A tÃ¡j az Ã©szaknyugati mocsaras terÃ¼letektÅ‘l a keleti kiterjedt erdÅ‘kig Ã©s tÃ¶rtÃ©nelmi birtokokig vÃ¡ltozik. SzÃ¡mos rÃ©gi Hanza-vÃ¡ros, mint Zwolle, Kampen Ã©s Deventer tanÃºskodik a rÃ©giÃ³ kÃ¶zÃ©pkori kereskedelemben betÃ¶ltÃ¶tt nagy jelentÅ‘sÃ©gÃ©rÅ‘l. AbszolÃºt fÃ©nypont az autÃ³mentes vÃ­zi falu, Giethoorn, mÃ¡s nÃ©ven 'Ã‰szak VelencÃ©je'.",
    ro: "Overijssel este o provincie plinÄƒ de naturÄƒ È™i istorie din estul Olandei. Peisajul variazÄƒ de la zonele mlÄƒÈ™tinoase din nord-vest pÃ¢nÄƒ la pÄƒdurile Ã®ntinse È™i moÈ™iile istorice din est. Numeroase oraÈ™e hanseatice vechi, cum ar fi Zwolle, Kampen È™i Deventer, mÄƒrturisesc importanÈ›a mare a regiunii Ã®n comerÈ›ul medieval. Un punct de atracÈ›ie absolut este satul de apÄƒ fÄƒrÄƒ maÈ™ini Giethoorn, cunoscut È™i sub numele de 'VeneÈ›ia Nordului'.",
    en: "Overijssel is a province steeped in nature and history in the east of the Netherlands. The landscape varies from the marshy areas in the northwest to the extensive forests and historic estates in the east. Numerous old Hanseatic cities such as Zwolle, Kampen, and Deventer bear witness to the region's great importance in medieval trade. An absolute highlight is the car-free water village of Giethoorn, also known as the 'Venice of the North'."
  },
  facts: {
    de: ["Zwolle ist die historische Hauptstadt der Provinz.","Beherbergt das idyllische Wasserdorf Giethoorn.","VerfÃ¼gt Ã¼ber viele alte HansestÃ¤dte wie Kampen und Deventer.","Die UniversitÃ¤t Twente befindet sich in Enschede.","Die Landschaft umfasst den Nationalpark Sallandse Heuvelrug.","Der Fluss IJssel bildet die natÃ¼rliche Grenze zu Gelderland.","Ehemaliges Zentrum der Textilindustrie (Region Twente).","Die Region ist bekannt fÃ¼r ihre lÃ¤ndlichen LandgÃ¼ter und SchlÃ¶sser."],
    hu: ["Zwolle a tartomÃ¡ny tÃ¶rtÃ©nelmi fÅ‘vÃ¡rosa.","Itt talÃ¡lhatÃ³ az idilli vÃ­zi falu, Giethoorn.","SzÃ¡mos rÃ©gi Hanza-vÃ¡rossal rendelkezik, mint Kampen Ã©s Deventer.","A Twentei Egyetem EnschedÃ©ben talÃ¡lhatÃ³.","A tÃ¡j magÃ¡ban foglalja a Sallandse Heuvelrug Nemzeti Parkot.","Az IJssel folyÃ³ kÃ©pezi a termÃ©szetes hatÃ¡rt Gelderland felÃ©.","A textilipar egykori kÃ¶zpontja (Twente rÃ©giÃ³).","A rÃ©giÃ³ ismert vidÃ©ki birtokairÃ³l Ã©s kastÃ©lyairÃ³l."],
    ro: ["Zwolle este capitala istoricÄƒ a provinciei.","GÄƒzduieÈ™te satul de apÄƒ idilic Giethoorn.","Are multe oraÈ™e hanseatice vechi, cum ar fi Kampen È™i Deventer.","Universitatea din Twente este situatÄƒ Ã®n Enschede.","Peisajul include Parcul NaÈ›ional Sallandse Heuvelrug.","RÃ¢ul IJssel formeazÄƒ graniÈ›a naturalÄƒ cu Gelderland.","Fostul centru al industriei textile (regiunea Twente).","Regiunea este cunoscutÄƒ pentru moÈ™iile È™i castelele sale rurale."],
    en: ["Zwolle is the historic capital of the province.","Home to the idyllic water village of Giethoorn.","Has many old Hanseatic cities such as Kampen and Deventer.","The University of Twente is located in Enschede.","The landscape includes the Sallandse Heuvelrug National Park.","The river IJssel forms the natural border with Gelderland.","Former center of the textile industry (Twente region).","The region is known for its rural estates and castles."]
  },
  descriptionAdvanced: {
    de: "Overijssel liegt im Osten der Niederlande und zeichnet sich durch eine Mischung aus historischen HansestÃ¤dten, Polderlandschaften und sandigen Naturgebieten aus. Die Provinz wird von der IJssel durchzogen, einem Seitenarm des Rheins, der fÃ¼r den mittelalterlichen Handel von entscheidender Bedeutung war. In der Region Twente im Osten der Provinz entwickelte sich im 19. Jahrhundert eine bedeutende Textilindustrie, die StÃ¤dte wie Enschede groÃŸ machte. Ein touristisches Highlight der Provinz ist das malerische Dorf Giethoorn, das oft als das 'Venedig des Nordens' bezeichnet wird. Geschichte K6: HansestÃ¤dte wie Zwolle und Kampen in Overijssel trieben viel Handel. Was war die Hanse?",
    hu: "Overijssel egy keleti tartomÃ¡ny HollandiÃ¡ban, amelyet az IJssel-folyÃ³, kiterjedt erdÅ‘k Ã©s tÅ‘zeglÃ¡pok jellemeznek. A rÃ©giÃ³ tÃ¶rtÃ©nelmi gazdagsÃ¡gÃ¡t a Hanza-szÃ¶vetsÃ©ghez tartozÃ³ Å‘si vÃ¡rosok, mint Zwolle, Kampen Ã©s Deventer adjÃ¡k, amelyek a kÃ¶zÃ©pkorban virÃ¡gzÃ³ kereskedelmi kÃ¶zpontok voltak. Ã‰szaknyugati rÃ©szÃ©n talÃ¡lhatÃ³ a Weerribben-Wieden Nemzeti Park, egyedÃ¼lÃ¡llÃ³ vizes Ã©lÅ‘helyeivel. Emellett Giethoorn, a 'holland Velence' is ebben a tartomÃ¡nyban vonzza a lÃ¡togatÃ³kat. TÃ¶rtÃ©nelem K6: Mi volt a Hanza-szÃ¶vetsÃ©g, Ã©s miÃ©rt voltak fontosak az ehhez tartozÃ³ vÃ¡rosok?",
    ro: "Overijssel este o provincie esticÄƒ din Olanda, caracterizatÄƒ de rÃ¢ul IJssel, pÄƒduri extinse È™i mlaÈ™tini de turbÄƒ. BogÄƒÈ›ia istoricÄƒ a regiunii este datÄƒ de oraÈ™ele antice care au aparÈ›inut Ligii Hanseatice, precum Zwolle, Kampen È™i Deventer, centre comerciale Ã®nfloritoare Ã®n Evul Mediu. ÃŽn partea de nord-vest se aflÄƒ Parcul NaÈ›ional Weerribben-Wieden, cu zone umede unice. De asemenea, Giethoorn, 'VeneÈ›ia olandezÄƒ', atrage vizitatorii Ã®n aceastÄƒ provincie. Istorie K6: Ce a fost Liga HanseaticÄƒ È™i de ce au fost importante oraÈ™ele care Ã®i aparÈ›ineau?",
    en: "Overijssel is located in the eastern Netherlands and is characterized by a mix of historic Hanseatic cities, polder landscapes, and sandy nature areas. The province is traversed by the IJssel, a branch of the Rhine that was crucial for medieval trade. In the Twente region in the east of the province, a significant textile industry developed in the 19th century, which made cities like Enschede prominent. A tourist highlight of the province is the picturesque village of Giethoorn, often referred to as the 'Venice of the North'. History K6: Hanseatic cities like Zwolle and Kampen in Overijssel conducted a lot of trade. What was the Hanseatic League?"
  },
  factsAdvanced: {
    de: [
      "Die Provinzhauptstadt Zwolle war im Mittelalter ein wichtiges Mitglied des HandelsbÃ¼ndnisses der Hanse.",
      "Das Dorf Giethoorn in Overijssel hat in seinem alten Zentrum keine StraÃŸen, der Verkehr lÃ¤uft Ã¼ber Wasserwege.",
      "Der Nationalpark Weerribben-Wieden ist das grÃ¶ÃŸte Sumpfgebiet Nordwesteuropas.",
      "Enschede beherbergt die Universiteit Twente, eine fÃ¼hrende technische UniversitÃ¤t in Europa."
    ],
    hu: ["Giethoorn falujÃ¡ban az Ã³vÃ¡rosban egyÃ¡ltalÃ¡n nincsenek utak, csak csatornÃ¡k.", "Deventer az orszÃ¡g egyik legrÃ©gebbi vÃ¡rosa, hÃ­res a kÃ¶zÃ©pkori kÃ¶nyvtÃ¡rÃ¡rÃ³l.", "A tartomÃ¡ny egykor a holland textilipar kÃ¶zpontja volt (kÃ¼lÃ¶nÃ¶sen Twente rÃ©giÃ³).", "Az IJssel folyÃ³ menti vÃ¡rosok a 14-15. szÃ¡zadban hatalmas vagyonra tettek szert a Hanza kereskedelembÅ‘l."],
    ro: [
      "ÃŽn satul Giethoorn nu existÄƒ drumuri Ã®n oraÈ™ul vechi, ci doar canale.",
      "Deventer este unul dintre cele mai vechi oraÈ™e din È›arÄƒ, faimos pentru biblioteca sa medievalÄƒ.",
      "Provincia a fost cÃ¢ndva centrul industriei textile olandeze (Ã®n special regiunea Twente).",
      "OraÈ™ele de-a lungul rÃ¢ului IJssel au acumulat o bogÄƒÈ›ie uriaÈ™Äƒ Ã®n secolele XIV-XV din comerÈ›ul hanseatic."
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
    de: "Utrecht ist die flÃ¤chenmÃ¤ÃŸig kleinste, aber am dichtesten besiedelte Provinz der Niederlande. Sie liegt im geographischen Zentrum des Landes und ist ein wichtiger Verkehrsknotenpunkt fÃ¼r ZÃ¼ge und StraÃŸen. Die Hauptstadt, ebenfalls Utrecht genannt, ist berÃ¼hmt fÃ¼r ihren majestÃ¤tischen Domturm und die einzigartigen Werftkeller entlang der Grachten. AuÃŸerhalb der Stadt finden sich prÃ¤chtige SchlÃ¶sser und das bewaldete Gebiet des Utrechter HÃ¼gelrÃ¼ckens.",
    hu: "Utrecht Hollandia legkisebb terÃ¼letÅ±, de legsÅ±rÅ±bben lakott tartomÃ¡nya. Az orszÃ¡g fÃ¶ldrajzi kÃ¶zÃ©ppontjÃ¡ban fekszik, Ã©s fontos vasÃºti, valamint kÃ¶zÃºti csomÃ³pont. A fÅ‘vÃ¡ros, amelyet szintÃ©n Utrechtnek hÃ­vnak, hÃ­res fensÃ©ges DÃ³m-tornyÃ¡rÃ³l Ã©s a csatornÃ¡k mentÃ©n talÃ¡lhatÃ³ egyedÃ¼lÃ¡llÃ³ rakparti pincÃ©krÅ‘l. A vÃ¡roson kÃ­vÃ¼l csodÃ¡latos kastÃ©lyok Ã©s az Utrechti-hegyhÃ¡tsÃ¡g erdÅ‘s terÃ¼lete talÃ¡lhatÃ³.",
    ro: "Utrecht este cea mai micÄƒ provincie ca suprafaÈ›Äƒ, dar cea mai dens populatÄƒ din Olanda. Este situatÄƒ Ã®n centrul geografic al È›Äƒrii È™i este un important nod de transport pentru trenuri È™i drumuri. Capitala, numitÄƒ È™i Utrecht, este renumitÄƒ pentru maiestuosul sÄƒu Turn Dom È™i pivniÈ›ele unice ale debarcaderului de-a lungul canalelor. ÃŽn afara oraÈ™ului puteÈ›i gÄƒsi castele magnifice È™i zona Ã®mpÄƒduritÄƒ din Utrechtse Heuvelrug.",
    en: "Utrecht is the smallest province by area but the most densely populated in the Netherlands. It is located in the geographical center of the country and is an important transport hub for trains and roads. The capital, also called Utrecht, is famous for its majestic Dom Tower and the unique wharf cellars along the canals. Outside the city, magnificent castles and the wooded area of the Utrecht Hill Ridge can be found."
  },
  facts: {
    de: ["FlÃ¤chenmÃ¤ÃŸig die kleinste Provinz der Niederlande.","Utrecht (Stadt) ist der zentrale Verkehrsknotenpunkt des Landes.","Die UniversitÃ¤t Utrecht ist die grÃ¶ÃŸte der Niederlande.","Die Stadt Utrecht hat einzigartige zweistÃ¶ckige Grachten.","Beherbergt das Kasteel de Haar, das grÃ¶ÃŸte Schloss des Landes.","Der Domturm in Utrecht ist der hÃ¶chste Kirchturm der Niederlande.","Zentraler Sitz der niederlÃ¤ndischen Eisenbahngesellschaft (NS).","Die Region ist geprÃ¤gt durch den waldreichen Utrechter HÃ¼gelrÃ¼cken."],
    hu: ["TerÃ¼letÃ©t tekintve Hollandia legkisebb tartomÃ¡nya.","Utrecht (vÃ¡ros) az orszÃ¡g kÃ¶zponti kÃ¶zlekedÃ©si csomÃ³pontja.","Az Utrechti Egyetem a legnagyobb HollandiÃ¡ban.","Utrecht vÃ¡rosa egyedÃ¼lÃ¡llÃ³ kÃ©tszintes csatornÃ¡kkal rendelkezik.","Itt talÃ¡lhatÃ³ a Kasteel de Haar, az orszÃ¡g legnagyobb kastÃ©lya.","Az utrechti DÃ³m-torony Hollandia legmagasabb templomtornya.","A holland vasÃºttÃ¡rsasÃ¡g (NS) kÃ¶zponti szÃ©khelye.","A rÃ©giÃ³t az erdÅ‘s Utrechti-hegyhÃ¡tsÃ¡g jellemzi."],
    ro: ["Cea mai micÄƒ provincie din Olanda din punct de vedere al suprafeÈ›ei.","Utrecht (oraÈ™) este nodul central de transport al È›Äƒrii.","Universitatea din Utrecht este cea mai mare din Olanda.","OraÈ™ul Utrecht are canale unice cu douÄƒ niveluri.","GÄƒzduieÈ™te Kasteel de Haar, cel mai mare castel din È›arÄƒ.","Turnul Dom din Utrecht este cel mai Ã®nalt turn al unei biserici din Olanda.","Sediul central al companiei olandeze de cÄƒi ferate (NS).","Regiunea se caracterizeazÄƒ prin regiunea Ã®mpÄƒduritÄƒ Utrechtse Heuvelrug."],
    en: ["The smallest province in the Netherlands by area.","Utrecht (city) is the central transport hub of the country.","Utrecht University is the largest in the Netherlands.","The city of Utrecht has unique two-level canals.","Home to Kasteel de Haar, the largest castle in the country.","The Dom Tower in Utrecht is the tallest church tower in the Netherlands.","Central headquarters of the Dutch railway company (NS).","The region is characterized by the wooded Utrecht Hill Ridge."]
  },
  descriptionAdvanced: {
    de: "Utrecht ist die flÃ¤chenmÃ¤ÃŸig kleinste Provinz der Niederlande, hat jedoch aufgrund ihrer zentralen Lage eine enorme strategische und wirtschaftliche Bedeutung. Die gleichnamige Hauptstadt ist einer der wichtigsten Verkehrsknotenpunkte des Landes und beherbergt die grÃ¶ÃŸte UniversitÃ¤t der Niederlande. Die Landschaft variiert von den waldreichen HÃ¼geln des Utrechtse Heuvelrug im Osten bis hin zu den grÃ¼nen Weide- und Polderlandschaften im Westen. Im Mittelalter war Utrecht das unbestrittene religiÃ¶se Zentrum der nÃ¶rdlichen Niederlande, wovon der beeindruckende Domturm noch heute zeugt. Geschichte K7: Der Utrechter Domturm steht frei und ist nicht mehr mit der Kirche verbunden. Durch welches Naturereignis wurde das Kirchenschiff im 17. Jahrhundert zerstÃ¶rt?",
    hu: "Utrecht Hollandia legkisebb terÃ¼letÅ±, de legsÅ±rÅ±bben lakott tartomÃ¡nya, amely az orszÃ¡g fÃ¶ldrajzi kÃ¶zepÃ©n helyezkedik el. FÅ‘vÃ¡rosa, a szintÃ©n Utrecht nevÅ± vÃ¡ros, gazdag kÃ¶zÃ©pkori mÃºltjÃ¡val, hÃ­res egyetemÃ©vel Ã©s az egyedi, kÃ©tszintes csatornÃ¡ival hÃ­vja fel magÃ¡ra a figyelmet. A tartomÃ¡ny keleti rÃ©szÃ©n talÃ¡lhatÃ³ a zÃ¶ldellÅ‘ Utrechtse Heuvelrug, egy jÃ©gkorszaki eredetÅ± dombvidÃ©k, amely lenyÅ±gÃ¶zÅ‘ erdÅ‘kkel Ã©s kastÃ©lyokkal van tele. FÃ¶ldrajz K6: Hogyan befolyÃ¡solja egy orszÃ¡g kÃ¶zponti elhelyezkedÃ©se az infrastrukturÃ¡lis fejlÅ‘dÃ©sÃ©t, mint ahogy Utrecht esetÃ©ben lÃ¡thatÃ³?",
    ro: "Utrecht este cea mai micÄƒ, dar È™i cea mai dens populatÄƒ provincie din Olanda, situatÄƒ Ã®n centrul geografic al È›Äƒrii. Capitala sa, cu acelaÈ™i nume, atrage atenÈ›ia cu trecutul sÄƒu medieval bogat, universitatea faimoasÄƒ È™i canalele unice pe douÄƒ niveluri. ÃŽn partea de est a provinciei se aflÄƒ verdele Utrechtse Heuvelrug, o regiune de dealuri din epoca glaciarÄƒ, plinÄƒ de pÄƒduri È™i castele impresionante. Geografie K6: Cum influenÈ›eazÄƒ locaÈ›ia centralÄƒ a unei È›Äƒri dezvoltarea infrastructurii sale, aÈ™a cum se vede Ã®n cazul Utrecht?",
    en: "Utrecht is the smallest province in the Netherlands by area, but it holds enormous strategic and economic importance due to its central location. The capital of the same name is one of the country's main transport hubs and houses the largest university in the Netherlands. The landscape varies from the wooded hills of the Utrechtse Heuvelrug in the east to the green pastures and polders in the west. In the Middle Ages, Utrecht was the undisputed religious center of the northern Netherlands, a fact still evidenced by the impressive Dom Tower today. History K7: The Dom Tower of Utrecht stands detached and is no longer connected to the church. What natural event destroyed the nave in the 17th century?"
  },
  factsAdvanced: {
    de: [
      "Der Hauptbahnhof von Utrecht ist der grÃ¶ÃŸte und verkehrsreichste Bahnhof der Niederlande.",
      "Der Domturm in der Stadt Utrecht ist mit 112 Metern der hÃ¶chste Kirchturm der Niederlande.",
      "Die UniversitÃ¤t Utrecht, gegrÃ¼ndet 1636, hat bereits 12 NobelpreistrÃ¤ger hervorgebracht.",
      "Das Rietveld-SchrÃ¶der-Haus in Utrecht ist ein UNESCO-Weltkulturerbe und Meisterwerk der De-Stijl-Architektur."
    ],
    hu: ["Utrecht vÃ¡rosÃ¡nak csatornÃ¡i egyedÃ¼lÃ¡llÃ³ak a vÃ­zszint kÃ¶zelÃ©ben lÃ©vÅ‘ raktÃ¡rhelyisÃ©gek (werfkelders) miatt.", "Az Utrechti Egyetem, amelyet 1636-ban alapÃ­tottak, az egyik legrangosabb EurÃ³pÃ¡ban.", "Itt talÃ¡lhatÃ³ a De Haar kastÃ©ly, Hollandia legnagyobb Ã©s legfÃ©nyÅ±zÅ‘bb kastÃ©lya.", "A tartomÃ¡ny Hollandia legfontosabb vasÃºti csomÃ³pontja."],
    ro: [
      "Canalele din oraÈ™ul Utrecht sunt unice datoritÄƒ spaÈ›iilor de depozitare aproape de nivelul apei (werfkelders).",
      "Universitatea din Utrecht, fondatÄƒ Ã®n 1636, este una dintre cele mai prestigioase din Europa.",
      "Aici se aflÄƒ Castelul De Haar, cel mai mare È™i mai luxos castel din Olanda.",
      "Provincia este cel mai important nod feroviar din ÈšÄƒrile de Jos."
    ],
    en: [
      "Utrecht Central Station is the largest and busiest railway station in the Netherlands.",
      "At 112 meters, the Dom Tower in the city of Utrecht is the tallest church tower in the Netherlands.",
      "Utrecht University, founded in 1636, has produced 12 Nobel laureates.",
      "The Rietveld SchrÃ¶der House in Utrecht is a UNESCO World Heritage site and a masterpiece of De Stijl architecture."
    ]
  }
  },
  {
    id: "NL-ZE", type: "region", parent: "NL", coords: [3.86, 51.48],
    name: { de: "Zeeland", hu: "Zeeland", ro: "Zeelanda", en: "Zeeland" },
    image: "/geo-images/netherlands/zeeland.webp",
  description: {
    de: "Zeeland ist eine einzigartige Provinz im SÃ¼dwesten der Niederlande, die zu einem groÃŸen Teil aus Inseln und Halbinseln besteht. Die stÃ¤ndige Auseinandersetzung mit dem Wasser hat die Geschichte der Region geprÃ¤gt, insbesondere nach der groÃŸen Flutkatastrophe von 1953. Zum Schutz wurden die beeindruckenden Deltawerke errichtet, die als ein Meisterwerk der Ingenieurskunst gelten. Heute ist Zeeland mit seinen sauberen StrÃ¤nden und charmanten historischen StÃ¤dten ein Paradies fÃ¼r Urlauber.",
    hu: "Zeeland egy egyedÃ¼lÃ¡llÃ³ tartomÃ¡ny Hollandia dÃ©lnyugati rÃ©szÃ©n, amely nagyrÃ©szt szigetekbÅ‘l Ã©s fÃ©lszigetekbÅ‘l Ã¡ll. A vÃ­zzel valÃ³ folyamatos kÃ¼zdelem rÃ¡nyomta bÃ©lyegÃ©t a rÃ©giÃ³ tÃ¶rtÃ©nelmÃ©re, kÃ¼lÃ¶nÃ¶sen az 1953-as nagy Ã¡rvÃ­zkatasztrÃ³fa utÃ¡n. VÃ©delem cÃ©ljÃ¡bÃ³l Ã©pÃ­tettÃ©k a lenyÅ±gÃ¶zÅ‘ Delta-mÅ±veket, amely a mÃ©rnÃ¶ki munka remekmÅ±vÃ©nek szÃ¡mÃ­t. Ma Zeeland tiszta strandjaival Ã©s hangulatos tÃ¶rtÃ©nelmi vÃ¡rosaival a nyaralÃ³k paradicsoma.",
    ro: "Zeelanda este o provincie unicÄƒ din sud-vestul Olandei, care constÄƒ Ã®n mare parte din insule È™i peninsule. Lupta constantÄƒ cu apa a modelat istoria regiunii, Ã®n special dupÄƒ marele dezastru al inundaÈ›iilor din 1953. Pentru protecÈ›ie au fost construite impresionantele LucrÄƒri Delta, care sunt considerate o capodoperÄƒ a ingineriei. AstÄƒzi, Zeelanda este un paradis pentru turiÈ™ti, cu plajele sale curate È™i oraÈ™ele istorice fermecÄƒtoare.",
    en: "Zeeland is a unique province in the southwest of the Netherlands, consisting largely of islands and peninsulas. The constant struggle with water has shaped the history of the region, especially after the great flood disaster of 1953. For protection, the impressive Delta Works were built, which are considered a masterpiece of engineering. Today, Zeeland, with its clean beaches and charming historic towns, is a paradise for vacationers."
  },
  facts: {
    de: ["Middelburg ist die historische Hauptstadt der Provinz.","Beherbergt die Deltawerke, ein weltberÃ¼hmtes Hochwasserschutzsystem.","Zeeland ist die sonnenreichste Provinz der Niederlande.","Wurde 1953 von einer katastrophalen Sturmflut schwer getroffen.","Eine wichtige landwirtschaftliche Region, besonders fÃ¼r Austern und Muscheln.","Der Hafen von Vlissingen hat eine reiche maritime Geschichte.","Zeeland war der Namensgeber fÃ¼r das Land Neuseeland.","VerfÃ¼gt Ã¼ber einige der lÃ¤ngsten und saubersten SandstrÃ¤nde des Landes."],
    hu: ["Middelburg a tartomÃ¡ny tÃ¶rtÃ©nelmi fÅ‘vÃ¡rosa.","Itt talÃ¡lhatÃ³k a Delta-mÅ±vek, egy vilÃ¡ghÃ­rÅ± Ã¡rvÃ­zvÃ©delmi rendszer.","Zeeland Hollandia legnaposabb tartomÃ¡nya.","1953-ban egy katasztrofÃ¡lis vihardagÃ¡ly sÃºlyosan sÃºjtotta.","Fontos mezÅ‘gazdasÃ¡gi rÃ©giÃ³, kÃ¼lÃ¶nÃ¶sen az osztriga Ã©s a kagylÃ³ tekintetÃ©ben.","A vlissingeni kikÃ¶tÅ‘ gazdag tengeri tÃ¶rtÃ©nelemmel rendelkezik.","Zeeland volt a nÃ©vadÃ³ja Ãšj-ZÃ©landnak.","Az orszÃ¡g leghosszabb Ã©s legtisztÃ¡bb homokos strandjaival rendelkezik."],
    ro: ["Middelburg este capitala istoricÄƒ a provinciei.","GÄƒzduieÈ™te LucrÄƒrile Delta, un sistem de protecÈ›ie Ã®mpotriva inundaÈ›iilor renumit la nivel mondial.","Zeelanda este cea mai Ã®nsoritÄƒ provincie din Olanda.","A fost grav afectatÄƒ de o inundaÈ›ie catastrofalÄƒ Ã®n 1953.","O regiune agricolÄƒ importantÄƒ, Ã®n special pentru stridii È™i midii.","Portul Vlissingen are o bogatÄƒ istorie maritimÄƒ.","Zeelanda a fost omonimul È›Äƒrii Noua ZeelandÄƒ.","Are unele dintre cele mai lungi È™i mai curate plaje cu nisip din È›arÄƒ."],
    en: ["Middelburg is the historic capital of the province.","Houses the Delta Works, a world-famous flood protection system.","Zeeland is the sunniest province in the Netherlands.","Was severely hit by a catastrophic storm surge in 1953.","An important agricultural region, especially for oysters and mussels.","The port of Vlissingen has a rich maritime history.","Zeeland was the namesake for the country of New Zealand.","Has some of the longest and cleanest sandy beaches in the country."]
  },
  descriptionAdvanced: {
    de: "Zeeland liegt im Ã¤uÃŸersten SÃ¼dwesten der Niederlande und ist eine Provinz, die buchstÃ¤blich aus dem Meer entstanden ist, bestehend aus Inseln und Halbinseln. Das Element Wasser hat die Geschichte der Region geprÃ¤gt, oft auf tragische Weise, wie bei der verheerenden Sturmflut von 1953. Als Reaktion darauf wurden die Deltawerke erbaut, ein gigantisches System von DÃ¤mmen und Sturmflutwehren, das oft als eines der modernen Weltwunder der Technik bezeichnet wird. Heute ist Zeeland eine ruhige Region, die fÃ¼r ihre sauberen StrÃ¤nde, historischen HafenstÃ¤dte wie Middelburg und die Fischerei, insbesondere auf Muscheln und Austern, bekannt ist. Geografie K8: Die Deltawerke schÃ¼tzen Zeeland vor Sturmfluten. Warum steigt die Gefahr solcher Fluten durch den globalen Klimawandel?",
    hu: "Zeeland (magyarul TengerfÃ¶ld) egy dÃ©lnyugati tartomÃ¡ny, amely fÃ©lszigetek Ã©s szigetek lÃ¡ncolatÃ¡bÃ³l Ã¡ll a Schelde, a Maas Ã©s a Rajna folyÃ³k torkolatÃ¡nÃ¡l. Zeeland tÃ¶rtÃ©nete az Ã¡llandÃ³ kÃ¼zdelemrÅ‘l szÃ³l a tenger ellen; az 1953-as katasztrofÃ¡lis Ã¡rvÃ­z utÃ¡n itt Ã©pÃ¼lt meg a vilÃ¡g egyik legnagyobb mÃ©rnÃ¶ki csodÃ¡ja, a Delta-mÅ±vek, amely megvÃ©di a szÃ¡razfÃ¶ldet az Ã‰szaki-tenger viharaitÃ³l. A tartomÃ¡ny kivÃ¡lÃ³ mezÅ‘gazdasÃ¡ggal Ã©s jelentÅ‘s halÃ¡szattal (kÃ¼lÃ¶nÃ¶sen osztriga Ã©s kagylÃ³) rendelkezik. TermÃ©szetismeret K7: Hogyan mÅ±kÃ¶dnek a Delta-mÅ±vek, Ã©s miÃ©rt nevezik a vilÃ¡g nyolcadik csodÃ¡jÃ¡nak?",
    ro: "Zeelanda este o provincie din sud-vestul È›Äƒrii, formatÄƒ dintr-un lanÈ› de peninsule È™i insule la gura de vÄƒrsare a rÃ¢urilor Scheldt, Maas È™i Rin. Istoria Zeelandei este o luptÄƒ constantÄƒ Ã®mpotriva mÄƒrii; dupÄƒ inundaÈ›ia catastrofalÄƒ din 1953, aici a fost construitÄƒ una dintre cele mai mari minuni inginereÈ™ti ale lumii, LucrÄƒrile Delta, care protejeazÄƒ uscatul de furtunile din Marea Nordului. Provincia are o agriculturÄƒ excelentÄƒ È™i un pescuit semnificativ (Ã®n special stridii È™i midii). È˜tiinÈ›e ale naturii K7: Cum funcÈ›ioneazÄƒ LucrÄƒrile Delta È™i de ce sunt numite a opta minune a lumii?",
    en: "Zeeland, located in the extreme southwest of the Netherlands, is a province literally born from the sea, consisting of islands and peninsulas. The element of water has shaped the region's history, often tragically, such as during the devastating North Sea flood of 1953. In response, the Delta Works were constructed, a gigantic system of dams and storm surge barriers often referred to as one of the modern wonders of the engineering world. Today, Zeeland is a tranquil region known for its clean beaches, historic port towns like Middelburg, and its fishing industry, particularly for mussels and oysters. Geography K8: The Delta Works protect Zeeland from storm surges. Why does global climate change increase the risk of such floods?"
  },
  factsAdvanced: {
    de: [
      "Zeeland hat die lÃ¤ngste KÃ¼stenlinie aller niederlÃ¤ndischen Provinzen.",
      "Die Oosterscheldekering, Teil der Deltawerke in Zeeland, ist ein 8 Kilometer langes Sturmflutwehr.",
      "Die Provinzhauptstadt Middelburg war im Goldenen Zeitalter eine der wichtigsten HandelsstÃ¤dte der VOC (NiederlÃ¤ndische Ostindien-Kompanie).",
      "Zeeland ist der grÃ¶ÃŸte Produzent von Miesmuscheln in den Niederlanden."
    ],
    hu: ["A Delta-mÅ±vek gÃ¡tak, zsilipek Ã©s vihargÃ¡tak gigantikus rendszere Zeelandban.", "Middelburg, a fÅ‘vÃ¡ros, a 17. szÃ¡zadban az egyik legfontosabb holland kereskedelmi vÃ¡ros volt.", "A tartomÃ¡ny neve inspirÃ¡lta az Ãšj-ZÃ©landot felfedezÅ‘ holland tengerÃ©szeket az orszÃ¡g elnevezÃ©sÃ©re.", "Zeeland hÃ­res a tenger gyÃ¼mÃ¶lcseirÅ‘l, kÃ¼lÃ¶nÃ¶sen a minÅ‘sÃ©gi feketekagylÃ³rÃ³l Ã©s az osztrigÃ¡rÃ³l."],
    ro: [
      "LucrÄƒrile Delta reprezintÄƒ un sistem gigantic de diguri, ecluze È™i bariere Ã®mpotriva furtunilor din Zeelanda.",
      "Middelburg, capitala, a fost unul dintre cele mai importante oraÈ™e comerciale olandeze Ã®n secolul al XVII-lea.",
      "Numele provinciei i-a inspirat pe marinarii olandezi care au descoperit Noua ZeelandÄƒ sÄƒ numeascÄƒ acea È›arÄƒ.",
      "Zeelanda este faimoasÄƒ pentru fructele de mare, Ã®n special midiile negre de calitate È™i stridiile."
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
    name: { de: "SÃ¼dholland", hu: "DÃ©l-Holland", ro: "Olanda de Sud", en: "South Holland" },
    image: "/geo-images/netherlands/south-holland.webp",
  description: {
    de: "SÃ¼dholland ist die am dichtesten besiedelte und wirtschaftlich stÃ¤rkste Provinz der Niederlande. Hier schlÃ¤gt das politische und industrielle Herz des Landes: Den Haag beheimatet die Regierung und das KÃ¶nigshaus, wÃ¤hrend Rotterdam mit Europas grÃ¶ÃŸtem Hafen auftrumpft. Die Provinz ist zudem bekannt fÃ¼r historische UniversitÃ¤tsstÃ¤dte wie Leiden und Delft. Zwischen den GroÃŸstÃ¤dten prÃ¤gen weite GewÃ¤chshausanlagen (Westland) und WindmÃ¼hlen das klassische niederlÃ¤ndische Landschaftsbild.",
    hu: "DÃ©l-Holland Hollandia legsÅ±rÅ±bben lakott Ã©s gazdasÃ¡gilag legerÅ‘sebb tartomÃ¡nya. Itt dobog az orszÃ¡g politikai Ã©s ipari szÃ­ve: HÃ¡ga ad otthont a kormÃ¡nynak Ã©s a kirÃ¡lyi csalÃ¡dnak, mÃ­g Rotterdam EurÃ³pa legnagyobb kikÃ¶tÅ‘jÃ©vel bÃ¼szkÃ©lkedhet. A tartomÃ¡ny ismert a tÃ¶rtÃ©nelmi egyetemvÃ¡rosokrÃ³l is, mint Leiden Ã©s Delft. A nagyvÃ¡rosok kÃ¶zÃ¶tt kiterjedt Ã¼veghÃ¡zrendszerek (Westland) Ã©s szÃ©lmalmok jellemzik a klasszikus holland tÃ¡jat.",
    ro: "Olanda de Sud este cea mai dens populatÄƒ È™i cea mai puternicÄƒ provincie din punct de vedere economic din Olanda. Inima politicÄƒ È™i industrialÄƒ a È›Äƒrii bate aici: Haga gÄƒzduieÈ™te guvernul È™i familia regalÄƒ, Ã®n timp ce Rotterdam se mÃ¢ndreÈ™te cu cel mai mare port din Europa. Provincia este cunoscutÄƒ È™i pentru oraÈ™ele universitare istorice, cum ar fi Leiden È™i Delft. ÃŽntre oraÈ™ele mari, complexe vaste de sere (Westland) È™i morile de vÃ¢nt caracterizeazÄƒ peisajul olandez clasic.",
    en: "South Holland is the most densely populated and economically strongest province in the Netherlands. The political and industrial heart of the country beats here: The Hague is home to the government and the royal family, while Rotterdam boasts Europe's largest port. The province is also known for historic university cities such as Leiden and Delft. Between the big cities, vast greenhouse complexes (Westland) and windmills characterize the classic Dutch landscape."
  },
  facts: {
    de: ["BevÃ¶lkerungsreichste Provinz der Niederlande.","Den Haag ist der offizielle Regierungssitz und Sitz des Parlaments.","Rotterdam verfÃ¼gt Ã¼ber den grÃ¶ÃŸten und wichtigsten Seehafen Europas.","Die WindmÃ¼hlen von Kinderdijk gehÃ¶ren zum UNESCO-Welterbe.","Die UniversitÃ¤tsstadt Leiden beherbergt die Ã¤lteste Uni des Landes.","Delft ist weltbekannt fÃ¼r sein blaues Porzellan (Delfts Blauw).","Keukenhof in Lisse ist der berÃ¼hmteste FrÃ¼hlingsgarten der Welt.","Die Region 'Westland' ist das Herz der niederlÃ¤ndischen GewÃ¤chshausindustrie."],
    hu: ["Hollandia legnÃ©pesebb tartomÃ¡nya.","HÃ¡ga a kormÃ¡ny Ã©s a parlament hivatalos szÃ©khelye.","Rotterdam rendelkezik EurÃ³pa legnagyobb Ã©s legfontosabb tengeri kikÃ¶tÅ‘jÃ©vel.","A kinderdijki szÃ©lmalmok az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©t kÃ©pezik.","Leiden egyetemi vÃ¡rosa ad otthont az orszÃ¡g legrÃ©gebbi egyetemÃ©nek.","Delft vilÃ¡gszerte ismert kÃ©k porcelÃ¡njÃ¡rÃ³l (Delfti kÃ©k).","A lisse-i Keukenhof a vilÃ¡g leghÃ­resebb tavaszi kertje.","A 'Westland' rÃ©giÃ³ a holland Ã¼veghÃ¡z-ipar szÃ­ve."],
    ro: ["Cea mai populatÄƒ provincie din ÈšÄƒrile de Jos.","Haga este sediul oficial al guvernului È™i sediul parlamentului.","Rotterdam are cel mai mare È™i cel mai important port maritim din Europa.","Morile de vÃ¢nt din Kinderdijk fac parte din Patrimoniul Mondial UNESCO.","OraÈ™ul universitar Leiden gÄƒzduieÈ™te cea mai veche universitate din È›arÄƒ.","Delft este renumit Ã®n Ã®ntreaga lume pentru porÈ›elanul sÄƒu albastru (Delfts Blauw).","Keukenhof din Lisse este cea mai faimoasÄƒ grÄƒdinÄƒ de primÄƒvarÄƒ din lume.","Regiunea 'Westland' este inima industriei olandeze de sere."],
    en: ["The most populous province in the Netherlands.","The Hague is the official seat of government and seat of parliament.","Rotterdam has the largest and most important seaport in Europe.","The windmills of Kinderdijk are a UNESCO World Heritage Site.","The university city of Leiden is home to the country's oldest university.","Delft is world-famous for its blue porcelain (Delft Blue).","Keukenhof in Lisse is the most famous spring garden in the world.","The 'Westland' region is the heart of the Dutch greenhouse industry."]
  },
  descriptionAdvanced: {
    de: "SÃ¼dholland ist die bevÃ¶lkerungsreichste und am dichtesten besiedelte Provinz der Niederlande und bildet das wirtschaftliche und politische Herz des Landes. Hier befinden sich die internationale Hafenstadt Rotterdam, das politische Zentrum Den Haag sowie wichtige UniversitÃ¤tsstÃ¤dte wie Leiden und Delft. Die Provinz ist stark urbanisiert, aber auch die Heimat der berÃ¼hmten WindmÃ¼hlen von Kinderdijk und des groÃŸen Blumengartens Keukenhof. Im 17. Jahrhundert war SÃ¼dholland der treibende Motor hinter dem wirtschaftlichen Aufstieg der niederlÃ¤ndischen Republik und brachte KÃ¼nstler wie Vermeer und Rembrandt hervor. Wirtschaft K8: Rotterdam in SÃ¼dholland beherbergt einen der grÃ¶ÃŸten HÃ¤fen der Welt. Warum ist ein Hafen fÃ¼r die Wirtschaft eines Landes so wichtig?",
    hu: "DÃ©l-Holland (Zuid-Holland) Hollandia legnÃ©pesebb Ã©s gazdasÃ¡gilag legfontosabb tartomÃ¡nya. Itt talÃ¡lhatÃ³ HÃ¡ga, a holland kormÃ¡ny, a parlament Ã©s a kirÃ¡lyi csalÃ¡d szÃ©khelye, valamint a NemzetkÃ¶zi BÃ­rÃ³sÃ¡g. Rotterdam, a mÃ¡sik nagyvÃ¡ros, EurÃ³pa legnagyobb tengeri kikÃ¶tÅ‘jÃ©vel bÃ¼szkÃ©lkedhet, amely a globÃ¡lis Ã¡ruforgalom kapuja. A tartomÃ¡ny ad otthont a hÃ­res Kinderdijk szÃ©lmalmainak Ã©s a Keukenhof tulipÃ¡nmezÅ‘inek, melyek az orszÃ¡g ikonikus szimbÃ³lumai. GazdasÃ¡g K8: Milyen gazdasÃ¡gi elÅ‘nyt jelent EurÃ³pa szÃ¡mÃ¡ra a rotterdami kikÃ¶tÅ‘ hatalmas kapacitÃ¡sa?",
    ro: "Olanda de Sud (Zuid-Holland) este cea mai populatÄƒ È™i cea mai importantÄƒ provincie economicÄƒ din ÈšÄƒrile de Jos. Aici se aflÄƒ Haga, sediul guvernului olandez, al parlamentului, al familiei regale È™i al CurÈ›ii InternaÈ›ionale de JustiÈ›ie. Rotterdam, celÄƒlalt oraÈ™ mare, se mÃ¢ndreÈ™te cu cel mai mare port maritim din Europa, o poartÄƒ pentru traficul global de mÄƒrfuri. Provincia gÄƒzduieÈ™te celebrele mori de vÃ¢nt de la Kinderdijk È™i cÃ¢mpurile de lalele Keukenhof, care sunt simboluri iconice ale È›Äƒrii. Economie K8: Ce avantaj economic reprezintÄƒ pentru Europa capacitatea uriaÈ™Äƒ a portului Rotterdam?",
    en: "South Holland is the most populous and densely populated province in the Netherlands, forming the economic and political heart of the country. It is home to the international port city of Rotterdam, the political center The Hague, and major university cities like Leiden and Delft. The province is highly urbanized, but also features the famous windmills of Kinderdijk and the large Keukenhof flower garden. In the 17th century, South Holland was the driving force behind the economic rise of the Dutch Republic and produced artists such as Vermeer and Rembrandt. Economics K8: Rotterdam in South Holland hosts one of the largest ports in the world. Why is a port so important to a country's economy?"
  },
  factsAdvanced: {
    de: [
      "Rotterdam in SÃ¼dholland besitzt den grÃ¶ÃŸten Seehafen Europas.",
      "Den Haag ist der Sitz der niederlÃ¤ndischen Regierung, der kÃ¶niglichen Familie und des Internationalen Gerichtshofs.",
      "Die UniversitÃ¤t Leiden, gegrÃ¼ndet 1575, ist die Ã¤lteste UniversitÃ¤t der Niederlande.",
      "SÃ¼dholland hat die hÃ¶chste BevÃ¶lkerungsdichte aller Provinzen des Landes."
    ],
    hu: ["Rotterdam kikÃ¶tÅ‘je volt a vilÃ¡g legforgalmasabb kikÃ¶tÅ‘je Ã©vtizedeken keresztÃ¼l, 2004-ig.", "HÃ¡ga az egyetlen olyan nemzetkÃ¶zi jogi kÃ¶zpont, amely nem fÅ‘vÃ¡ros.", "Kinderdijk 19 tÃ¶rtÃ©nelmi szÃ©lmalma az UNESCO VilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.", "A Gouda vÃ¡rosÃ¡bÃ³l szÃ¡rmazÃ³ sajt a vilÃ¡g egyik leghÃ­resebb Ã©s legnagyobb mennyisÃ©gben exportÃ¡lt sajtja."],
    ro: [
      "Portul Rotterdam a fost cel mai aglomerat port din lume timp de decenii, pÃ¢nÄƒ Ã®n 2004.",
      "Haga este singurul centru juridic internaÈ›ional care nu este o capitalÄƒ.",
      "Cele 19 mori de vÃ¢nt istorice din Kinderdijk fac parte din Patrimoniul Mondial UNESCO.",
      "BrÃ¢nza din oraÈ™ul Gouda este una dintre cele mai faimoase È™i exportate brÃ¢nzeturi din lume."
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
      de: "Amsterdam ist die Hauptstadt der Niederlande, weltberÃ¼hmt fÃ¼r ihr historisches Grachtennetz, erstklassige Museen und ihre liberale AtmosphÃ¤re.",
      hu: "Amszterdam Hollandia fÅ‘vÃ¡rosa, amely vilÃ¡ghÃ­rÅ± tÃ¶rtÃ©nelmi csatornahÃ¡lÃ³zatÃ¡rÃ³l, vilÃ¡gszÃ­nvonalÃº mÃºzeumairÃ³l Ã©s liberÃ¡lis lÃ©gkÃ¶rÃ©rÅ‘l ismert.",
      ro: "Amsterdam este capitala Olandei, renumitÄƒ Ã®n Ã®ntreaga lume pentru reÈ›eaua sa istoricÄƒ de canale, muzeele de primÄƒ clasÄƒ È™i atmosfera sa liberalÄƒ.",
      en: "Amsterdam is the capital of the Netherlands, world-famous for its historic canal network, world-class museums, and its liberal atmosphere."
    },
    descriptionAdvanced: {
    de: "Amsterdam ist die Hauptstadt und bevÃ¶lkerungsreichste Stadt der Niederlande, weltberÃ¼hmt fÃ¼r ihr historisches Grachtensystem aus dem 17. Jahrhundert. Die Stadt wuchs wÃ¤hrend des niederlÃ¤ndischen Goldenen Zeitalters zu einem der wichtigsten Handelszentren der Welt heran und prÃ¤gte die moderne Finanzwelt mit der GrÃ¼ndung der ersten BÃ¶rse. Heute ist Amsterdam eine pulsierende, weltoffene Metropole, die Kunstliebhaber mit Museen wie dem Rijksmuseum und dem Van-Gogh-Museum anzieht. Die einzigartige Architektur mit schmalen, giebelgekrÃ¶nten KaufmannshÃ¤usern und unzÃ¤hligen BrÃ¼cken verleiht der Stadt ihren unverwechselbaren Charme. Geschichte K6: Das Grachtensystem in Amsterdam wurde sternfÃ¶rmig angelegt. Welchen praktischen Nutzen hatten diese Wasserwege fÃ¼r die KaufmannshÃ¤user?",
    hu: "Amszterdam Hollandia fÅ‘vÃ¡rosa Ã©s egyben legnÃ©pesebb vÃ¡rosa, amely lenyÅ±gÃ¶zÅ‘ csatornahÃ¡lÃ³zatÃ¡rÃ³l, tÃ¶rtÃ©nelmi Ã©pÃ­tÃ©szetÃ©rÅ‘l Ã©s pezsgÅ‘ kulturÃ¡lis Ã©letÃ©rÅ‘l hÃ­res. A 17. szÃ¡zadi holland aranykorban a vilÃ¡g legfontosabb kereskedelmi Ã©s pÃ©nzÃ¼gyi kÃ¶zpontja volt, itt jÃ¶tt lÃ©tre a vilÃ¡g elsÅ‘ tÅ‘zsdÃ©je is. A vÃ¡ros tÃ¶rtÃ©nelmi kÃ¶zpontja a Grachtengordel (csatornagyÅ±rÅ±), amely az UNESCO VilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze. Ma Amszterdam a globÃ¡lis turizmus egyik kÃ¶zpontja, hÃ­res mÃºzeumokkal, mint a Rijksmuseum Ã©s az Anne Frank HÃ¡z. TÃ¶rtÃ©nelem K7: Milyen hatÃ¡ssal volt a vilÃ¡g elsÅ‘ tÅ‘zsdÃ©jÃ©nek megalapÃ­tÃ¡sa Amszterdam globÃ¡lis szerepÃ©re a 17. szÃ¡zadban?",
    ro: "Amsterdam este capitala È™i cel mai populat oraÈ™ al Olandei, renumit pentru reÈ›eaua sa uimitoare de canale, arhitectura istoricÄƒ È™i viaÈ›a culturalÄƒ vibrantÄƒ. ÃŽn secolul al XVII-lea, Ã®n timpul Epocii de Aur olandeze, a fost cel mai important centru comercial È™i financiar din lume; aici a fost Ã®nfiinÈ›atÄƒ prima bursÄƒ de valori din lume. Centrul istoric al oraÈ™ului este Grachtengordel (Inelul Canalelor), un sit al Patrimoniului Mondial UNESCO. AstÄƒzi, Amsterdam este un centru global al turismului, cu muzee celebre precum Rijksmuseum È™i Casa Anne Frank. Istorie K7: Ce impact a avut Ã®nfiinÈ›area primei burse de valori din lume asupra rolului global al Amsterdamului Ã®n secolul al XVII-lea?",
    en: "Amsterdam is the capital and most populous city of the Netherlands, world-famous for its historic 17th-century canal system. The city grew into one of the world's most important trading centers during the Dutch Golden Age and shaped modern finance with the founding of the first stock exchange. Today, Amsterdam is a vibrant, cosmopolitan metropolis that attracts art lovers with museums such as the Rijksmuseum and the Van Gogh Museum. Its unique architecture featuring narrow, gabled merchant houses and countless bridges gives the city its distinctive charm. History K6: The canal system in Amsterdam was laid out in a star shape. What practical use did these waterways have for the merchant houses?"
  },
  facts: {
    de: ["Ist die grÃ¶ÃŸte Stadt und formelle Hauptstadt der Niederlande.","VerfÃ¼gt Ã¼ber mehr als 160 Grachten und 1.200 BrÃ¼cken.","Der GrachtengÃ¼rtel ist seit 2010 UNESCO-Weltkulturerbe.","Rund 880.000 FahrrÃ¤der prÃ¤gen den Verkehr der Stadt.","Das Rijksmuseum beherbergt Meisterwerke von Rembrandt.","Das Anne-Frank-Haus ist eine der meistbesuchten historischen StÃ¤tten.","Gebaut auf Millionen von HolzpfÃ¤hlen aufgrund des weichen Bodens.","Der Dam-Platz und der KÃ¶nigspalast sind zentrale SehenswÃ¼rdigkeiten."],
    hu: ["Hollandia legnagyobb vÃ¡rosa Ã©s formÃ¡lis fÅ‘vÃ¡rosa.","TÃ¶bb mint 160 csatornÃ¡val Ã©s 1200 hÃ­ddal rendelkezik.","A csatornÃ¡k Ã¶vezete 2010 Ã³ta az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.","Mintegy 880 000 kerÃ©kpÃ¡r jellemzi a vÃ¡ros kÃ¶zlekedÃ©sÃ©t.","A Rijksmuseum Rembrandt remekmÅ±veinek ad otthont.","Az Anne Frank HÃ¡z az egyik leglÃ¡togatottabb tÃ¶rtÃ©nelmi emlÃ©khely.","A puha talaj miatt fapillÃ©rek milliÃ³ira Ã©pÃ¼lt.","A Dam tÃ©r Ã©s a KirÃ¡lyi Palota a vÃ¡ros kÃ¶zponti lÃ¡tvÃ¡nyossÃ¡gai."],
    ro: ["Este cel mai mare oraÈ™ È™i capitala formalÄƒ a Olandei.","Are peste 160 de canale È™i 1.200 de poduri.","ReÈ›eaua de canale face parte din Patrimoniul Mondial UNESCO din 2010.","Aproximativ 880.000 de biciclete dominÄƒ traficul oraÈ™ului.","Rijksmuseum gÄƒzduieÈ™te capodoperele lui Rembrandt.","Casa Anne Frank este unul dintre cele mai vizitate situri istorice.","Construit pe milioane de stÃ¢lpi de lemn din cauza solului moale.","PiaÈ›a Dam È™i Palatul Regal sunt atracÈ›ii centrale."],
    en: ["It is the largest city and formal capital of the Netherlands.","Has over 160 canals and 1,200 bridges.","The canal ring has been a UNESCO World Heritage site since 2010.","Around 880,000 bicycles dominate the city's traffic.","The Rijksmuseum houses masterpieces by Rembrandt.","The Anne Frank House is one of the most visited historical sites.","Built on millions of wooden piles due to the soft soil.","Dam Square and the Royal Palace are central attractions."]
  },
  factsAdvanced: {
    de: [
      "Amsterdam hat mehr als 100 Kilometer Grachten (KanÃ¤le) und Ã¼ber 1.500 BrÃ¼cken.",
      "Die Stadt ist fast vollstÃ¤ndig auf Millionen von HolzpfÃ¤hlen gebaut, die im sumpfigen Boden verankert wurden.",
      "Der Amsterdamer GrachtengÃ¼rtel aus dem 17. Jahrhundert ist ein UNESCO-Weltkulturerbe.",
      "Das Anne-Frank-Haus in Amsterdam empfÃ¤ngt jÃ¤hrlich Ã¼ber eine Million Besucher aus aller Welt."
    ],
    hu: ["A vÃ¡rosban tÃ¶bb mint 100 kilomÃ©ternyi csatorna, mintegy 90 sziget Ã©s 1500 hÃ­d talÃ¡lhatÃ³.", "Amszterdam hÃ¡zait tÃ¶bb milliÃ³ facÃ¶lÃ¶pre Ã©pÃ­tettÃ©k, hogy ne sÃ¼llyedjenek el a mocsaras talajban.", "A vilÃ¡g legrÃ©gebbi megszakÃ­tÃ¡s nÃ©lkÃ¼l mÅ±kÃ¶dÅ‘ tÅ‘zsdÃ©jÃ©t (Euronext Amsterdam) 1602-ben alapÃ­tottÃ¡k.", "A vÃ¡rosnak tÃ¶bb kerÃ©kpÃ¡rja van, mint lakosa, amit a kivÃ¡lÃ³ kerÃ©kpÃ¡ros infrastruktÃºra tÃ¡mogat."],
    ro: [
      "OraÈ™ul are peste 100 de kilometri de canale, aproximativ 90 de insule È™i 1.500 de poduri.",
      "Casele din Amsterdam sunt construite pe milioane de stÃ¢lpi de lemn pentru a nu se scufunda Ã®n solul mlÄƒÈ™tinos.",
      "Cea mai veche bursÄƒ de valori din lume care funcÈ›ioneazÄƒ continuu (Euronext Amsterdam) a fost fondatÄƒ Ã®n 1602.",
      "OraÈ™ul are mai multe biciclete decÃ¢t locuitori, susÈ›inute de o infrastructurÄƒ excelentÄƒ pentru ciclism."
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
    de: "Rotterdam ist eine dynamische Metropole in SÃ¼dholland, die fÃ¼r ihre beeindruckende moderne Skyline und Europas grÃ¶ÃŸten Seehafen bekannt ist. Nachdem das historische Zentrum im Zweiten Weltkrieg zerstÃ¶rt wurde, entschied man sich fÃ¼r einen innovativen Wiederaufbau. Dies macht die Stadt heute zu einem internationalen Zentrum fÃ¼r Architektur und Design. Wahrzeichen wie die ErasmusbrÃ¼cke und die spektakulÃ¤re Markthalle prÃ¤gen das Gesicht dieser pulsierenden Hafenstadt.",
    hu: "Rotterdam egy dinamikus metropolisz DÃ©l-HollandiÃ¡ban, amely lenyÅ±gÃ¶zÅ‘ modern lÃ¡tkÃ©pÃ©rÅ‘l Ã©s EurÃ³pa legnagyobb tengeri kikÃ¶tÅ‘jÃ©rÅ‘l ismert. MiutÃ¡n a tÃ¶rtÃ©nelmi kÃ¶zpont a mÃ¡sodik vilÃ¡ghÃ¡borÃºban elpusztult, az innovatÃ­v ÃºjjÃ¡Ã©pÃ­tÃ©s mellett dÃ¶ntÃ¶ttek. Ennek kÃ¶szÃ¶nhetÅ‘en a vÃ¡ros ma az Ã©pÃ­tÃ©szet Ã©s a dizÃ¡jn nemzetkÃ¶zi kÃ¶zpontja. Olyan nevezetessÃ©gek, mint az Erasmus-hÃ­d Ã©s a lÃ¡tvÃ¡nyos VÃ¡sÃ¡rcsarnok hatÃ¡rozzÃ¡k meg ennek a nyÃ¼zsgÅ‘ kikÃ¶tÅ‘vÃ¡rosnak az arculatÃ¡t.",
    ro: "Rotterdam este o metropolÄƒ dinamicÄƒ din Olanda de Sud, cunoscutÄƒ pentru orizontul sÄƒu modern impresionant È™i cel mai mare port maritim din Europa. DupÄƒ ce centrul istoric a fost distrus Ã®n Al Doilea RÄƒzboi Mondial, s-a luat decizia pentru o reconstrucÈ›ie inovatoare. Acest lucru face ca oraÈ™ul de astÄƒzi sÄƒ fie un centru internaÈ›ional pentru arhitecturÄƒ È™i design. Repere precum Podul Erasmus È™i spectaculoasa SalÄƒ a PieÈ›ei (Markthal) modeleazÄƒ faÈ›a acestui vibrant oraÈ™ portuar.",
    en: "Rotterdam is a dynamic metropolis in South Holland, known for its impressive modern skyline and Europe's largest seaport. After the historic center was destroyed in World War II, an innovative reconstruction was chosen. This makes the city today an international center for architecture and design. Landmarks such as the Erasmus Bridge and the spectacular Market Hall (Markthal) shape the face of this vibrant port city."
  },
      descriptionAdvanced: {
    de: "Rotterdam ist eine dynamische Hafenstadt an der MÃ¼ndung von Rhein und Maas, die durch ihre markante moderne Architektur hervorsticht. Im Gegensatz zu vielen anderen niederlÃ¤ndischen StÃ¤dten wurde das historische Zentrum im Zweiten Weltkrieg fast vollstÃ¤ndig zerstÃ¶rt, was den Weg fÃ¼r innovative stÃ¤dtebauliche Konzepte ebnete. Die Stadt ist die Heimat des grÃ¶ÃŸten europÃ¤ischen Seehafens, der eine zentrale Rolle im globalen Handel und der europÃ¤ischen Logistik spielt. Ikonen wie die ErasmusbrÃ¼cke, die KubushÃ¤user und die spektakulÃ¤re Markthalle prÃ¤gen die Skyline dieser zukunftsorientierten Metropole. Architektur K7: Nach der ZerstÃ¶rung Rotterdams entschied man sich gegen einen historischen Wiederaufbau. Warum kann moderne Architektur eine Stadt wirtschaftlich und funktional verbessern?",
    hu: "Rotterdam a holland modernitÃ¡s Ã©s Ã©pÃ­tÃ©szeti innovÃ¡ciÃ³ kÃ¶zpontja. MiutÃ¡n a mÃ¡sodik vilÃ¡ghÃ¡borÃº sorÃ¡n a vÃ¡ros kÃ¶zpontjÃ¡t egy bombÃ¡zÃ¡s szinte teljesen elpusztÃ­totta, Rotterdamot egy merÃ©sz, kortÃ¡rs tervek alapjÃ¡n Ã©pÃ­tettÃ©k ÃºjjÃ¡, szakÃ­tva a hagyomÃ¡nyos holland vÃ¡roskÃ©ppel. A vÃ¡ros ad otthont EurÃ³pa legnagyobb tengeri kikÃ¶tÅ‘jÃ©nek, amely Ã©vtizedeken Ã¡t a vilÃ¡g legforgalmasabbja volt. Ikonikus Ã©pÃ¼letei kÃ¶zÃ© tartozik az Erasmus-hÃ­d, a KockahÃ¡zak Ã©s a hatalmas Markthal piac. FÃ¶ldrajz K8: MiÃ©rt vÃ¡lt Rotterdam kikÃ¶tÅ‘je EurÃ³pa legfontosabb kereskedelmi csomÃ³pontjÃ¡vÃ¡?",
    ro: "Rotterdam este centrul modernitÄƒÈ›ii È™i al inovaÈ›iei arhitecturale din Olanda. DupÄƒ ce centrul oraÈ™ului a fost distrus aproape complet de bombardamente Ã®n timpul celui de-al Doilea RÄƒzboi Mondial, Rotterdam a fost reconstruit folosind modele contemporane Ã®ndrÄƒzneÈ›e, rupÃ¢nd cu peisajul urban tradiÈ›ional olandez. OraÈ™ul gÄƒzduieÈ™te cel mai mare port maritim din Europa, care a fost cel mai aglomerat din lume timp de decenii. ClÄƒdirile sale iconice includ Podul Erasmus, Casele Cubice (Kubuswoningen) È™i imensa piaÈ›Äƒ Markthal. Geografie K8: De ce a devenit portul Rotterdam cel mai important centru comercial din Europa?",
    en: "Rotterdam is a dynamic port city at the mouth of the Rhine and Maas rivers, standing out for its striking modern architecture. Unlike many other Dutch cities, its historical center was almost completely destroyed in World War II, which paved the way for innovative urban planning concepts. The city is home to Europe's largest seaport, playing a central role in global trade and European logistics. Icons like the Erasmus Bridge, the Cube Houses, and the spectacular Markthal define the skyline of this forward-looking metropolis. Architecture K7: After Rotterdam's destruction, a historical reconstruction was rejected. Why can modern architecture improve a city economically and functionally?"
  },
    facts: {
    de: ["Besitzt den grÃ¶ÃŸten Seehafen Europas.","Bekannt fÃ¼r ihre kÃ¼hne und innovative moderne Architektur.","Die ErasmusbrÃ¼cke ('Der Schwan') ist das Wahrzeichen der Stadt.","Die KubushÃ¤user (Kubuswoningen) sind eine architektonische Besonderheit.","Die riesige, hufeisenfÃ¶rmige Markthalle bietet Kulinarik und Kunst.","Euromast ist der hÃ¶chste Aussichtsturm der Niederlande.","Wurde im Zweiten Weltkrieg (1940) fast vollstÃ¤ndig zerstÃ¶rt.","Veranstaltet ein renommiertes Internationales Filmfestival (IFFR)."],
    hu: ["EurÃ³pa legnagyobb tengeri kikÃ¶tÅ‘jÃ©vel rendelkezik.","MerÃ©sz Ã©s innovatÃ­v modern Ã©pÃ­tÃ©szetÃ©rÅ‘l ismert.","Az Erasmus-hÃ­d ('A HattyÃº') a vÃ¡ros jelkÃ©pe.","A KockahÃ¡zak (Kubuswoningen) Ã©pÃ­tÃ©szeti kÃ¼lÃ¶nlegessÃ©gnek szÃ¡mÃ­tanak.","A hatalmas, patkÃ³ alakÃº VÃ¡sÃ¡rcsarnok kulinÃ¡ris Ã©s mÅ±vÃ©szeti Ã©lmÃ©nyeket kÃ­nÃ¡l.","Az Euromast Hollandia legmagasabb kilÃ¡tÃ³tornya.","A mÃ¡sodik vilÃ¡ghÃ¡borÃºban (1940) szinte teljesen megsemmisÃ¼lt.","Egy neves NemzetkÃ¶zi FilmfesztivÃ¡lnak (IFFR) ad otthont."],
    ro: ["Are cel mai mare port maritim din Europa.","Cunoscut pentru arhitectura sa modernÄƒ Ã®ndrÄƒzneaÈ›Äƒ È™i inovatoare.","Podul Erasmus ('LebÄƒda') este simbolul oraÈ™ului.","Casele cubice (Kubuswoningen) sunt o atracÈ›ie arhitecturalÄƒ.","UriaÈ™a salÄƒ a pieÈ›ei Ã®n formÄƒ de potcoavÄƒ oferÄƒ delicii culinare È™i artÄƒ.","Euromast este cel mai Ã®nalt turn de observaÈ›ie din Olanda.","A fost distrus aproape complet Ã®n al Doilea RÄƒzboi Mondial (1940).","GÄƒzduieÈ™te un renumit Festival InternaÈ›ional de Film (IFFR)."],
    en: ["Has the largest seaport in Europe.","Known for its bold and innovative modern architecture.","The Erasmus Bridge ('The Swan') is the landmark of the city.","The Cube Houses (Kubuswoningen) are an architectural peculiarity.","The huge, horseshoe-shaped Market Hall offers culinary delights and art.","Euromast is the highest observation tower in the Netherlands.","Was almost completely destroyed in World War II (1940).","Hosts a renowned International Film Festival (IFFR)."]
  },
      factsAdvanced: {
    de: [
      "Der Hafen von Rotterdam ist der flÃ¤chengrÃ¶ÃŸte Tiefwasserhafen Europas und erstreckt sich Ã¼ber 40 Kilometer.",
      "Die ErasmusbrÃ¼cke, ein architektonisches Wahrzeichen der Stadt, trÃ¤gt wegen ihrer Form den Spitznamen 'Der Schwan'.",
      "Rotterdam besitzt eine der spektakulÃ¤rsten Markthallen der Welt, die gleichzeitig Wohnungen im bogenfÃ¶rmigen Dach integriert.",
      "Der Euromast in Rotterdam bietet mit 185 Metern HÃ¶he den hÃ¶chsten Aussichtspunkt der Niederlande."
    ],
    hu: ["Rotterdam kikÃ¶tÅ‘je kÃ¶zvetlen hozzÃ¡fÃ©rÃ©st biztosÃ­t az Ã‰szaki-tengerhez gÃ¡tak Ã©s zsilipek nÃ©lkÃ¼l.", "Az Erasmus-hidat (Erasmusbrug) aszimmetrikus formÃ¡ja miatt gyakran 'A HattyÃº'-nak becÃ©zik.", "A KockahÃ¡zak (Kubuswoningen) 45 fokban megdÃ¶ntÃ¶tt, kocka alakÃº lakÃ¡sok innovatÃ­v rendszere.", "A vÃ¡ros a Maas folyÃ³ deltÃ¡jÃ¡ban fekszik, Ã©s vÃ­zÃ¼gyi vÃ©delme pÃ©ldaÃ©rtÃ©kÅ± a vilÃ¡g szÃ¡mÃ¡ra."],
    ro: [
      "Portul Rotterdam oferÄƒ acces direct la Marea Nordului fÄƒrÄƒ baraje sau ecluze.",
      "Podul Erasmus (Erasmusbrug) este adesea supranumit 'LebÄƒda' datoritÄƒ formei sale asimetrice.",
      "Casele Cubice (Kubuswoningen) reprezintÄƒ un sistem inovator de apartamente Ã®n formÄƒ de cub, Ã®nclinate la 45 de grade.",
      "OraÈ™ul este situat Ã®n delta rÃ¢ului Maas, iar apÄƒrarea sa Ã®mpotriva apelor este un exemplu la nivel mondial."
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
    name: { de: "Den Haag", hu: "HÃ¡ga", ro: "Haga", en: "The Hague" },
    image: "/geo-images/netherlands/the-hague.webp",
  description: {
    de: "Den Haag ist der Sitz der niederlÃ¤ndischen Regierung und der kÃ¶niglichen Familie, obwohl es nicht die Hauptstadt ist. Die Stadt hat ein elegantes Flair, geprÃ¤gt von breiten Alleen, majestÃ¤tischen PalÃ¤sten und wichtigen internationalen Institutionen wie dem Internationalen Gerichtshof im Friedenspalast. Zugleich liegt Den Haag direkt an der Nordsee, und der Stadtteil Scheveningen bietet einen der beliebtesten SandstrÃ¤nde des Landes.",
    hu: "HÃ¡ga a holland kormÃ¡ny Ã©s a kirÃ¡lyi csalÃ¡d szÃ©khelye, bÃ¡r nem a fÅ‘vÃ¡ros. A vÃ¡ros elegÃ¡ns hangulattal rendelkezik, amelyet szÃ©les sugÃ¡rutak, fensÃ©ges palotÃ¡k Ã©s fontos nemzetkÃ¶zi intÃ©zmÃ©nyek, pÃ©ldÃ¡ul a BÃ©kepalotÃ¡ban talÃ¡lhatÃ³ NemzetkÃ¶zi BÃ­rÃ³sÃ¡g jellemeznek. Ugyanakkor HÃ¡ga kÃ¶zvetlenÃ¼l az Ã‰szaki-tenger partjÃ¡n fekszik, Ã©s Scheveningen negyede az orszÃ¡g egyik legnÃ©pszerÅ±bb homokos strandjÃ¡t kÃ­nÃ¡lja.",
    ro: "Haga este sediul guvernului olandez È™i al familiei regale, deÈ™i nu este capitala. OraÈ™ul are un aer elegant, caracterizat de bulevarde largi, palate maiestuoase È™i instituÈ›ii internaÈ›ionale importante precum Curtea InternaÈ›ionalÄƒ de JustiÈ›ie din Palatul PÄƒcii. ÃŽn acelaÈ™i timp, Haga se aflÄƒ chiar pe Marea Nordului, iar districtul Scheveningen oferÄƒ una dintre cele mai populare plaje cu nisip din È›arÄƒ.",
    en: "The Hague is the seat of the Dutch government and the royal family, although it is not the capital. The city has an elegant flair, characterized by wide avenues, majestic palaces, and important international institutions such as the International Court of Justice in the Peace Palace. At the same time, The Hague is located right on the North Sea, and the Scheveningen district offers one of the most popular sandy beaches in the country."
  },
      descriptionAdvanced: {
    de: "Den Haag (auch 's-Gravenhage genannt) ist zwar nicht die Hauptstadt der Niederlande, aber der Sitz der Regierung, des Parlaments und der Residenz der kÃ¶niglichen Familie. Die Stadt hat eine vornehme, internationale Ausstrahlung, geprÃ¤gt von breiten Alleen, historischen PalÃ¤sten und reprÃ¤sentativen Botschaftsvierteln. Weltweite Bedeutung hat Den Haag als 'Stadt des Friedens und der Gerechtigkeit', da sie den Internationalen Gerichtshof und den Internationalen Strafgerichtshof beherbergt. Zudem grenzt die Stadt mit den Vierteln Scheveningen und Kijkduin direkt an die Nordsee. Politik K8: Der Internationale Gerichtshof in Den Haag lÃ¶st Konflikte zwischen Staaten. Warum ist es wichtig, dass solche Gerichte unabhÃ¤ngig in einem neutralen Land liegen?",
    hu: "HÃ¡ga (Den Haag) a nemzetkÃ¶zi jog Ã©s az igazsÃ¡gszolgÃ¡ltatÃ¡s globÃ¡lis kÃ¶zpontja, emellett Hollandia politikai szÃ­ve. BÃ¡r a hivatalos fÅ‘vÃ¡ros Amszterdam, a holland kormÃ¡ny, a parlament, a LegfelsÅ‘bb BÃ­rÃ³sÃ¡g Ã©s az uralkodÃ³ kirÃ¡lyi csalÃ¡d is HÃ¡gÃ¡ban szÃ©kel. A vÃ¡ros elegÃ¡ns, zÃ¶ldÃ¶vezeti negyedekkel, szÃ©les sugÃ¡rutakkal Ã©s nagvonalÃº palotÃ¡kkal rendelkezik, tovÃ¡bbÃ¡ nÃ©pszerÅ± tengerparti Ã¼dÃ¼lÅ‘hellyel, Scheveningen-nel. Itt mÅ±kÃ¶dik a NemzetkÃ¶zi BÃ­rÃ³sÃ¡g Ã©s a NemzetkÃ¶zi BÃ¼ntetÅ‘bÃ­rÃ³sÃ¡g. TÃ¡rsadalomismeret K8: Milyen globÃ¡lis konfliktusokat oldanak meg a hÃ¡gai NemzetkÃ¶zi BÃ­rÃ³sÃ¡gon?",
    ro: "Haga (Den Haag) este centrul global al dreptului internaÈ›ional È™i al justiÈ›iei, precum È™i inima politicÄƒ a ÈšÄƒrilor de Jos. DeÈ™i capitala oficialÄƒ este Amsterdam, guvernul olandez, parlamentul, Curtea SupremÄƒ È™i familia regalÄƒ conducÄƒtoare au sediul la Haga. OraÈ™ul are cartiere elegante, pline de verdeaÈ›Äƒ, bulevarde largi È™i palate grandioase, precum È™i o popularÄƒ staÈ›iune litoralÄƒ, Scheveningen. Aici funcÈ›ioneazÄƒ Curtea InternaÈ›ionalÄƒ de JustiÈ›ie È™i Curtea PenalÄƒ InternaÈ›ionalÄƒ. Studii sociale K8: Ce fel de conflicte globale sunt rezolvate la Curtea InternaÈ›ionalÄƒ de JustiÈ›ie de la Haga?",
    en: "The Hague (also known as 's-Gravenhage) is not the capital of the Netherlands, but it is the seat of the government, parliament, and the royal family's residence. The city has a distinguished, international flair, characterized by broad avenues, historic palaces, and prestigious embassy districts. The Hague holds global significance as the 'City of Peace and Justice' because it houses the International Court of Justice and the International Criminal Court. In addition, the city borders directly on the North Sea with its Scheveningen and Kijkduin districts. Politics K8: The International Court of Justice in The Hague resolves conflicts between states. Why is it important for such courts to be independent and located in a neutral country?"
  },
    facts: {
    de: ["Sitz der niederlÃ¤ndischen Regierung und des Parlaments.","Wohnsitz der kÃ¶niglichen Familie der Niederlande.","Beherbergt den Internationalen Gerichtshof im Friedenspalast.","Das Mauritshuis-Museum zeigt 'Das MÃ¤dchen mit dem PerlenohrgehÃ¤nge'.","Der Binnenhof ist das politische Herz der Niederlande.","Der Stadtteil Scheveningen ist ein berÃ¼hmter Badeort an der Nordsee.","Miniaturpark Madurodam zeigt die Niederlande im MaÃŸstab 1:25.","Wird oft als die 'Stadt des Friedens und der Gerechtigkeit' bezeichnet."],
    hu: ["A holland kormÃ¡ny Ã©s a parlament szÃ©khelye.","A holland kirÃ¡lyi csalÃ¡d lakhelye.","A BÃ©kepalotÃ¡ban talÃ¡lhatÃ³ a NemzetkÃ¶zi BÃ­rÃ³sÃ¡g.","A Mauritshuis mÃºzeum bemutatja a 'LeÃ¡ny gyÃ¶ngyfÃ¼lbevalÃ³val' cÃ­mÅ± festmÃ©nyt.","A Binnenhof Hollandia politikai szÃ­ve.","Scheveningen vÃ¡rosrÃ©sze hÃ­res Ã©szaki-tengeri fÃ¼rdÅ‘hely.","A Madurodam miniatÅ±r park 1:25 mÃ©retarÃ¡nyban mutatja be HollandiÃ¡t.","Gyakran nevezik a 'bÃ©ke Ã©s az igazsÃ¡gossÃ¡g vÃ¡rosÃ¡nak'."],
    ro: ["Sediul guvernului olandez È™i al parlamentului.","ReÈ™edinÈ›a familiei regale a Olandei.","GÄƒzduieÈ™te Curtea InternaÈ›ionalÄƒ de JustiÈ›ie la Palatul PÄƒcii.","Muzeul Mauritshuis expune 'Fata cu cercel de perlÄƒ'.","Binnenhof este inima politicÄƒ a Olandei.","Cartierul Scheveningen este o faimoasÄƒ staÈ›iune balnearÄƒ la Marea Nordului.","Parcul Ã®n miniaturÄƒ Madurodam aratÄƒ Olanda la scara 1:25.","Adesea denumit 'OraÈ™ul pÄƒcii È™i justiÈ›iei'."],
    en: ["Seat of the Dutch government and parliament.","Residence of the royal family of the Netherlands.","Houses the International Court of Justice in the Peace Palace.","The Mauritshuis museum displays 'Girl with a Pearl Earring'.","The Binnenhof is the political heart of the Netherlands.","The Scheveningen district is a famous seaside resort on the North Sea.","Miniature park Madurodam shows the Netherlands at a 1:25 scale.","Often referred to as the 'City of Peace and Justice'."]
  },
      factsAdvanced: {
    de: [
      "Den Haag ist der Sitz der niederlÃ¤ndischen Regierung und des Monarchen, obwohl Amsterdam die Hauptstadt ist.",
      "Im Friedenspalast (Vredespaleis) in Den Haag ist der Internationale Gerichtshof der Vereinten Nationen ansÃ¤ssig.",
      "Der Binnenhof in Den Haag ist der Ã¤lteste, noch immer genutzte Parlamentskomplex der Welt.",
      "Scheveningen, ein Stadtteil von Den Haag, ist das beliebteste Seebad der Niederlande."
    ],
    hu: ["A BÃ©ke PalotÃ¡ja (Vredespaleis) ad otthont az ENSZ NemzetkÃ¶zi BÃ­rÃ³sÃ¡gÃ¡nak.", "A Binnenhof Ã©pÃ¼letegyÃ¼ttese az egyik legrÃ©gebbi, ma is hasznÃ¡lt parlamentÃ©pÃ¼let a vilÃ¡gon.", "HÃ¡ga az egyetlen nagy holland vÃ¡ros, amely kÃ¶zvetlenÃ¼l az Ã‰szaki-tenger partjÃ¡n fekszik.", "A Mauritshuis mÃºzeumban talÃ¡lhatÃ³ Vermeer hÃ­res festmÃ©nye, a LeÃ¡ny gyÃ¶ngyfÃ¼lbevalÃ³val."],
    ro: [
      "Palatul PÄƒcii (Vredespaleis) gÄƒzduieÈ™te Curtea InternaÈ›ionalÄƒ de JustiÈ›ie a ONU.",
      "Complexul de clÄƒdiri Binnenhof este una dintre cele mai vechi clÄƒdiri parlamentare aflate Ã®ncÄƒ Ã®n uz din lume.",
      "Haga este singurul oraÈ™ mare olandez situat direct pe coasta MÄƒrii Nordului.",
      "Muzeul Mauritshuis adÄƒposteÈ™te faimoasa picturÄƒ a lui Vermeer, 'Fata cu cercel de perlÄƒ'."
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
    de: "Utrecht, oft als gemÃ¼tlichere Alternative zu Amsterdam betrachtet, ist eine pulsierende UniversitÃ¤tsstadt im Herzen der Niederlande. Ihr historisches Zentrum wird dominiert vom majestÃ¤tischen Domturm, der hÃ¶chsten Kirche des Landes. Die Oudegracht, der Hauptkanal der Stadt, ist einzigartig in Europa wegen ihrer Werftkeller, in denen heute Restaurants und CafÃ©s direkt am Wasser liegen. Mit der grÃ¶ÃŸten UniversitÃ¤t des Landes hat Utrecht eine junge und dynamische BevÃ¶lkerung.",
    hu: "Utrechtet gyakran Amszterdam hangulatosabb alternatÃ­vÃ¡jakÃ©nt tartjÃ¡k szÃ¡mon; egy nyÃ¼zsgÅ‘ egyetemvÃ¡ros Hollandia szÃ­vÃ©ben. TÃ¶rtÃ©nelmi kÃ¶zpontjÃ¡t a fensÃ©ges DÃ³m-torony, az orszÃ¡g legmagasabb temploma uralja. A vÃ¡ros fÅ‘ csatornÃ¡ja, az Oudegracht egyedÃ¼lÃ¡llÃ³ EurÃ³pÃ¡ban a rakparti pincÃ©i miatt, ahol ma kÃ¶zvetlenÃ¼l a vÃ­zparton Ã©ttermek Ã©s kÃ¡vÃ©zÃ³k talÃ¡lhatÃ³k. Az orszÃ¡g legnagyobb egyetemÃ©vel Utrecht fiatal Ã©s dinamikus nÃ©pessÃ©ggel rendelkezik.",
    ro: "Utrecht, considerat adesea o alternativÄƒ mai confortabilÄƒ la Amsterdam, este un oraÈ™ universitar vibrant Ã®n inima Olandei. Centrul sÄƒu istoric este dominat de maiestuosul Turn Dom, cea mai Ã®naltÄƒ bisericÄƒ din È›arÄƒ. Oudegracht, canalul principal al oraÈ™ului, este unic Ã®n Europa datoritÄƒ pivniÈ›elor sale de pe chei, unde astÄƒzi restaurantele È™i cafenelele sunt situate chiar pe apÄƒ. Cu cea mai mare universitate din È›arÄƒ, Utrecht are o populaÈ›ie tÃ¢nÄƒrÄƒ È™i dinamicÄƒ.",
    en: "Utrecht, often considered a cozier alternative to Amsterdam, is a vibrant university city in the heart of the Netherlands. Its historic center is dominated by the majestic Dom Tower, the tallest church in the country. The Oudegracht, the city's main canal, is unique in Europe because of its wharf cellars, where restaurants and cafes are now located right on the water. With the largest university in the country, Utrecht has a young and dynamic population."
  },
      descriptionAdvanced: {
    de: "Utrecht liegt geographisch im Zentrum der Niederlande und ist eine der Ã¤ltesten StÃ¤dte des Landes, gegrÃ¼ndet von den RÃ¶mern als Festung. Die historische Altstadt ist einzigartig wegen ihrer Oudegracht, einem Kanal, dessen UferstraÃŸen tiefer liegen als das StraÃŸenniveau und mittelalterliche Werftkeller beherbergen, die heute CafÃ©s und Restaurants sind. Utrecht ist eine lebendige Studentenstadt und ein wichtiger Knotenpunkt fÃ¼r den nationalen Eisenbahnverkehr. Das Wahrzeichen der Stadt ist der imposante Domturm, der Ã¼ber dem historischen Zentrum thront. Geschichte K6: Die RÃ¶mer bauten Utrecht als Grenzbefestigung. Welcher groÃŸe Fluss, der in den Niederlanden ins Meer mÃ¼ndet, bildete die nÃ¶rdliche Grenze des RÃ¶mischen Reiches?",
    hu: "Utrecht Hollandia negyedik legnagyobb vÃ¡rosa, amely gazdag egyhÃ¡zi tÃ¶rtÃ©nelemmel Ã©s kÃ¶zÃ©pkori bÃ¡jjal rendelkezik. Ã‰vszÃ¡zadokon Ã¡t a holland keresztÃ©nysÃ©g kÃ¶zpontja Ã©s az orszÃ¡g legfontosabb vÃ¡rosa volt, mielÅ‘tt Amszterdam Ã¡tvette volna ezt a szerepet. KÃ¼lÃ¶nlegessÃ©ge a tÃ¶rtÃ©nelmi csatornarendszer, amelynek alsÃ³ szintjÃ©n, kÃ¶zvetlenÃ¼l a vÃ­z mellett raktÃ¡rhelyisÃ©gek, a 'werf'-ek talÃ¡lhatÃ³k; ma ezek hangulatos kÃ¡vÃ©zÃ³knak adnak otthont. A vÃ¡roskÃ©pet az ikonikus Dom-torony, Hollandia legmagasabb templomtornya uralja. TÃ¶rtÃ©nelem K6: MiÃ©rt volt Utrecht az orszÃ¡g legfontosabb vallÃ¡si Ã©s kulturÃ¡lis kÃ¶zpontja a kÃ¶zÃ©pkorban?",
    ro: "Utrecht este al patrulea oraÈ™ ca mÄƒrime din ÈšÄƒrile de Jos, cu o bogatÄƒ istorie ecleziasticÄƒ È™i un farmec medieval deosebit. Timp de secole, a fost centrul creÈ™tinismului olandez È™i cel mai important oraÈ™ din È›arÄƒ, Ã®nainte ca Amsterdam sÄƒ preia acest rol. O caracteristicÄƒ unicÄƒ este sistemul sÄƒu istoric de canale, care are spaÈ›ii de depozitare la nivelul inferior, direct lÃ¢ngÄƒ apÄƒ, numite 'werfkelders'; astÄƒzi, acestea gÄƒzduiesc cafenele È™i restaurante confortabile. Peisajul urban este dominat de iconicul Turn Dom, cel mai Ã®nalt turn de bisericÄƒ din Olanda. Istorie K6: De ce a fost Utrecht cel mai important centru religios È™i cultural al È›Äƒrii Ã®n Evul Mediu?",
    en: "Geographically located in the center of the Netherlands, Utrecht is one of the country's oldest cities, founded by the Romans as a fortress. The historic city center is unique due to its Oudegracht, a canal whose waterfront streets lie below street level and house medieval wharf cellars, which are now cafes and restaurants. Utrecht is a lively student city and a major hub for national rail traffic. The city's landmark is the imposing Dom Tower, which towers over the historic center. History K6: The Romans built Utrecht as a border fortification. Which major river, flowing into the sea in the Netherlands, formed the northern border of the Roman Empire?"
  },
    facts: {
    de: ["Der Domturm (112 Meter) ist der hÃ¶chste Kirchturm der Niederlande.","Die Werftkeller (Werven) an der Oudegracht sind weltweit einzigartig.","Ist der wichtigste Eisenbahnknotenpunkt des Landes (Utrecht Centraal).","Hat die grÃ¶ÃŸte UniversitÃ¤t der Niederlande (UniversitÃ¤t Utrecht).","Das Rietveld-SchrÃ¶der-Haus ist UNESCO-Weltkulturerbe.","Das Eisenbahnmuseum (Spoorwegmuseum) ist eine Hauptattraktion.","Bietet eines der lebendigsten Studentenleben des Landes.","War historisch eines der wichtigsten kirchlichen Zentren im Norden."],
    hu: ["A DÃ³m-torony (112 mÃ©ter) Hollandia legmagasabb templomtornya.","Az Oudegracht mentÃ©n talÃ¡lhatÃ³ rakparti pincÃ©k (Werven) vilÃ¡gszerte egyedÃ¼lÃ¡llÃ³ak.","Az orszÃ¡g legfontosabb vasÃºti csomÃ³pontja (Utrecht Centraal).","Itt talÃ¡lhatÃ³ Hollandia legnagyobb egyeteme (Utrechti Egyetem).","A Rietveld-SchrÃ¶der-hÃ¡z az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.","A VasÃºti MÃºzeum (Spoorwegmuseum) az egyik fÅ‘ lÃ¡tvÃ¡nyossÃ¡g.","Az orszÃ¡g egyik legÃ©lÃ©nkebb diÃ¡kÃ©letÃ©vel bÃ¼szkÃ©lkedhet.","TÃ¶rtÃ©nelmileg a legfontosabb Ã©szaki egyhÃ¡zi kÃ¶zpontok egyike volt."],
    ro: ["Turnul Dom (112 metri) este cel mai Ã®nalt turn de bisericÄƒ din Olanda.","PivniÈ›ele din debarcader (Werven) de pe Oudegracht sunt unice Ã®n lume.","Este cel mai important nod feroviar din È›arÄƒ (Utrecht Centraal).","Are cea mai mare universitate din Olanda (Universitatea din Utrecht).","Casa Rietveld-SchrÃ¶der este inclusÄƒ Ã®n Patrimoniul Mondial UNESCO.","Muzeul CÄƒilor Ferate (Spoorwegmuseum) este o atracÈ›ie principalÄƒ.","OferÄƒ una dintre cele mai vibrante vieÈ›i studenÈ›eÈ™ti din È›arÄƒ.","A fost din punct de vedere istoric unul dintre cele mai importante centre ecleziastice din nord."],
    en: ["The Dom Tower (112 meters) is the tallest church tower in the Netherlands.","The wharf cellars (Werven) on the Oudegracht are unique in the world.","Is the most important railway hub in the country (Utrecht Centraal).","Has the largest university in the Netherlands (Utrecht University).","The Rietveld-SchrÃ¶der House is a UNESCO World Heritage site.","The Railway Museum (Spoorwegmuseum) is a main attraction.","Offers one of the most vibrant student lives in the country.","Was historically one of the most important ecclesiastical centers in the north."]
  },
      factsAdvanced: {
    de: [
      "Die Oudegracht in Utrecht ist weltweit einzigartig wegen ihrer zweistufigen Struktur mit Werftkellern direkt am Wasser.",
      "Mit dem Hauptbahnhof beherbergt Utrecht den wichtigsten Knotenpunkt des niederlÃ¤ndischen Schienennetzes.",
      "Der Domturm von Utrecht ist 112 Meter hoch und musste 1674 einen schweren Tornado Ã¼berstehen, der das Kirchenschiff zerstÃ¶rte.",
      "Die UniversitÃ¤t Utrecht gehÃ¶rt zu den renommiertesten ForschungsuniversitÃ¤ten Europas."
    ],
    hu: ["A 112 mÃ©ter magas Dom-torony (Domtoren) egy vihar kÃ¶vetkeztÃ©ben szakadt el a fÅ‘hajÃ³tÃ³l 1674-ben.", "Utrecht az orszÃ¡g legfontosabb vasÃºti csomÃ³pontja, a Central Station a legforgalmasabb Ã¡llomÃ¡s.", "A vÃ¡rosban alapÃ­tottÃ¡k 1579-ben az Utrechti UniÃ³t, amely a fÃ¼ggetlen Hollandia elÅ‘djÃ©nek tekinthetÅ‘.", "Egyeteme az egyik legnagyobb Ã©s legelismertebb az orszÃ¡gban."],
    ro: [
      "Turnul Dom (Domtoren), Ã®nalt de 112 metri, a fost separat de nava principalÄƒ de o furtunÄƒ violentÄƒ Ã®n 1674.",
      "Utrecht este cel mai important nod feroviar al È›Äƒrii, Gara CentralÄƒ fiind cea mai aglomeratÄƒ staÈ›ie.",
      "Uniunea de la Utrecht a fost fondatÄƒ aici Ã®n 1579, fiind consideratÄƒ un precursor al Olandei independente.",
      "Universitatea sa este una dintre cele mai mari È™i mai respectate din È›arÄƒ."
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
    de: "Eindhoven ist die innovativste und designorientierteste Stadt der Niederlande, gelegen in der Provinz Nordbrabant. Ihre rasante Entwicklung vom kleinen Dorf zur Hightech-Metropole verdankt die Stadt dem Unternehmen Philips, das hier gegrÃ¼ndet wurde. Heute ist Eindhoven das HerzstÃ¼ck der Brainport-Region, einem fÃ¼hrenden europÃ¤ischen Technologiezentrum. Jedes Jahr im Oktober zieht die 'Dutch Design Week' kreative KÃ¶pfe aus aller Welt an.",
    hu: "Eindhoven Hollandia leginnovatÃ­vabb Ã©s dizÃ¡jn-kÃ¶zpontÃºbb vÃ¡rosa, Ã‰szak-Brabant tartomÃ¡nyban. A vÃ¡ros a kis falubÃ³l csÃºcstechnolÃ³giai metropolisszÃ¡ fejlÅ‘dÃ©sÃ©t a Philips cÃ©gnek kÃ¶szÃ¶nheti, amelyet itt alapÃ­tottak. Ma Eindhoven a Brainport rÃ©giÃ³, EurÃ³pa egyik vezetÅ‘ technolÃ³giai kÃ¶zpontjÃ¡nak a szÃ­ve. Minden oktÃ³berben a 'Dutch Design Week' kreatÃ­v elmÃ©ket vonz a vilÃ¡g minden tÃ¡jÃ¡rÃ³l.",
    ro: "Eindhoven este cel mai inovator È™i orientat spre design oraÈ™ din ÈšÄƒrile de Jos, situat Ã®n provincia Brabantul de Nord. OraÈ™ul datoreazÄƒ dezvoltarea sa rapidÄƒ de la un mic sat la o metropolÄƒ de Ã®naltÄƒ tehnologie companiei Philips, care a fost fondatÄƒ aici. AstÄƒzi Eindhoven este inima regiunii Brainport, un important centru tehnologic european. ÃŽn fiecare an, Ã®n luna octombrie, 'Dutch Design Week' atrage minÈ›i creative din Ã®ntreaga lume.",
    en: "Eindhoven is the most innovative and design-oriented city in the Netherlands, located in the province of North Brabant. The city owes its rapid development from a small village to a high-tech metropolis to the Philips company, which was founded here. Today Eindhoven is the heart of the Brainport region, a leading European technology center. Every October, the 'Dutch Design Week' attracts creative minds from all over the world."
  },
      descriptionAdvanced: {
    de: "Eindhoven ist eine moderne und industriell geprÃ¤gte Stadt im SÃ¼den der Niederlande, die oft als das Silicon Valley Europas bezeichnet wird. Der rasante Aufstieg der Stadt begann Ende des 19. Jahrhunderts mit der GrÃ¼ndung des Philips-Konzerns, der Eindhoven in ein Zentrum fÃ¼r Technologie, Design und Innovation verwandelte. Auch wenn ein GroÃŸteil der Philips-Produktion verlagert wurde, bleibt der Geist der Innovation durch die Technische UniversitÃ¤t und den Hightech-Campus lebendig. Jedes Jahr im Herbst leuchtet die Stadt auf besondere Weise, wenn KÃ¼nstler aus aller Welt das Glow-Festival, ein bedeutendes Lichtkunst-Event, veranstalten. Physik K7: Eindhoven ist fÃ¼r seine Technologie und das GLOW-Festival bekannt. Wie funktioniert eine moderne LED, die bei solchen Lichtfestivals genutzt wird?",
    hu: "Eindhoven a holland innovÃ¡ciÃ³, a technolÃ³gia Ã©s a formatervezÃ©s kÃ¶zpontja. A vÃ¡ros robbanÃ¡sszerÅ± fejlÅ‘dÃ©sÃ©t a Philips vÃ¡llalat 1891-es megalapÃ­tÃ¡sa indÃ­totta el, amely izzÃ³lÃ¡mpÃ¡k, majd elektronikai cikkek gyÃ¡rtÃ¡sÃ¡val vÃ¡lt vilÃ¡ghÃ­rÅ±vÃ©. Emiatt Eindhovent a 'FÃ©ny VÃ¡rosÃ¡nak' is nevezik. Ma a High Tech Campus Ã©s a mÅ±szaki egyetem (TU/e) rÃ©vÃ©n EurÃ³pa egyik legokosabb rÃ©giÃ³jakÃ©nt tartjÃ¡k szÃ¡mon, amely hatalmas szÃ¡mÃº szabadalmat jegyez Ã©vrÅ‘l Ã©vre. GazdasÃ¡g K8: Hogyan alakÃ­totta egyetlen vÃ¡llalat (a Philips) egy egÃ©sz vÃ¡ros gazdasÃ¡gÃ¡t Ã©s tÃ¡rsadalmÃ¡t?",
    ro: "Eindhoven este centrul inovaÈ›iei, tehnologiei È™i designului olandez. Dezvoltarea explozivÄƒ a oraÈ™ului a fost declanÈ™atÄƒ de fondarea companiei Philips Ã®n 1891, care a devenit celebrÄƒ Ã®n Ã®ntreaga lume prin producÈ›ia de becuri È™i, ulterior, de articole electronice. Din acest motiv, Eindhoven este adesea numit 'OraÈ™ul Luminii'. AstÄƒzi, prin intermediul High Tech Campus È™i al UniversitÄƒÈ›ii de Tehnologie (TU/e), este consideratÄƒ una dintre cele mai inteligente regiuni din Europa, Ã®nregistrÃ¢nd un numÄƒr imens de brevete Ã®n fiecare an. Economie K8: Cum a modelat o singurÄƒ companie (Philips) economia È™i societatea unui oraÈ™ Ã®ntreg?",
    en: "Eindhoven is a modern and industrial city in the south of the Netherlands, often referred to as the Silicon Valley of Europe. The city's rapid rise began at the end of the 19th century with the founding of the Philips corporation, which transformed Eindhoven into a center for technology, design, and innovation. Although much of Philips' production has relocated, the spirit of innovation remains alive through the University of Technology and the High Tech Campus. Every autumn, the city lights up in a special way when artists from all over the world host the Glow Festival, a major light art event. Physics K7: Eindhoven is known for its technology and the GLOW festival. How does a modern LED, used in such light festivals, work?"
  },
    facts: {
    de: ["Geburtsort des globalen Elektronikkonzerns Philips.","Zentrum der High-Tech-Region 'Brainport Eindhoven'.","Das Philips Museum zeigt die Geschichte des Unternehmens.","Die Dutch Design Week ist eines der wichtigsten Design-Events Europas.","Heimat des berÃ¼hmten FuÃŸballvereins PSV Eindhoven.","Das 'Evoluon' ist ein markantes, ufo-fÃ¶rmiges Bauwerk.","Lichtfestival 'GLOW' taucht die Stadt im November in bunte Kunstwerke.","Die Design Academy Eindhoven zÃ¤hlt zu den besten der Welt."],
    hu: ["A Philips globÃ¡lis elektronikai konszern szÃ¼lÅ‘helye.","A 'Brainport Eindhoven' csÃºcstechnolÃ³giai rÃ©giÃ³ kÃ¶zpontja.","A Philips MÃºzeum a vÃ¡llalat tÃ¶rtÃ©netÃ©t mutatja be.","A Dutch Design Week EurÃ³pa egyik legfontosabb dizÃ¡jnesemÃ©nye.","A hÃ­res PSV Eindhoven futballklub otthona.","Az 'Evoluon' egy feltÅ±nÅ‘, ufÃ³ alakÃº Ã©pÃ­tmÃ©ny.","A 'GLOW' fÃ©nyfesztivÃ¡l novemberben szÃ­nes mÅ±vÃ©szeti alkotÃ¡sokba burkolja a vÃ¡rost.","Az eindhoveni Design Academy a vilÃ¡g legjobbjai kÃ¶zÃ© tartozik."],
    ro: ["Locul de naÈ™tere al companiei globale de electronice Philips.","Centrul regiunii de Ã®naltÄƒ tehnologie 'Brainport Eindhoven'.","Muzeul Philips prezintÄƒ istoria companiei.","Dutch Design Week este unul dintre cele mai importante evenimente de design din Europa.","Sediul celebrului club de fotbal PSV Eindhoven.","'Evoluon' este o clÄƒdire izbitoare, Ã®n formÄƒ de OZN.","Festivalul luminii 'GLOW' scufundÄƒ oraÈ™ul Ã®n opere de artÄƒ colorate Ã®n noiembrie.","Design Academy Eindhoven este printre cele mai bune din lume."],
    en: ["Birthplace of the global electronics company Philips.","Center of the high-tech region 'Brainport Eindhoven'.","The Philips Museum shows the history of the company.","The Dutch Design Week is one of the most important design events in Europe.","Home of the famous football club PSV Eindhoven.","The 'Evoluon' is a striking, UFO-shaped building.","The light festival 'GLOW' immerses the city in colorful artworks in November.","The Design Academy Eindhoven is among the best in the world."]
  },
      factsAdvanced: {
    de: [
      "Eindhoven wird oft als die 'Lichtstadt' der Niederlande bezeichnet, ein Erbe der Philips-GlÃ¼hbirnenproduktion.",
      "Die Design Academy Eindhoven gilt als eine der besten Schulen fÃ¼r Industriedesign weltweit.",
      "WÃ¤hrend der Dutch Design Week im Oktober besuchen jÃ¤hrlich Ã¼ber 300.000 Menschen Eindhoven.",
      "Der Hightech-Campus Eindhoven konzentriert mehr als 200 Unternehmen und Forschungsinstitute."
    ],
    hu: ["A vÃ¡ros Ã©vente megrendezi a GLOW Eindhoven fesztivÃ¡lt, amely a vilÃ¡gÃ­tÃ³ mÅ±vÃ©szetet Ã¼nnepli.", "Az ASML, a vilÃ¡g vezetÅ‘ csipgyÃ¡rtÃ³ berendezÃ©s gyÃ¡rtÃ³ja az eindhoveni rÃ©giÃ³ban (Veldhoven) mÅ±kÃ¶dik.", "Az Evoluon egy repÃ¼lÅ‘ csÃ©szealj alakÃº Ã©pÃ¼let, amelyet a Philips Ã©pÃ­ttetett a technolÃ³gia nÃ©pszerÅ±sÃ­tÃ©sÃ©re.", "Itt talÃ¡lhatÃ³ a Van Abbemuseum, amely a kortÃ¡rs Ã©s modern mÅ±vÃ©szet egyik kiemelkedÅ‘ mÃºzeuma."],
    ro: [
      "OraÈ™ul gÄƒzduieÈ™te anual festivalul GLOW Eindhoven, care celebreazÄƒ arta luminii.",
      "ASML, principalul producÄƒtor mondial de echipamente pentru fabricarea cipurilor, opereazÄƒ Ã®n regiunea Eindhoven (Veldhoven).",
      "Evoluon este o clÄƒdire Ã®n formÄƒ de farfurie zburÄƒtoare, construitÄƒ de Philips pentru a promova tehnologia.",
      "Aici se aflÄƒ Muzeul Van Abbe, unul dintre cele mai importante muzee de artÄƒ modernÄƒ È™i contemporanÄƒ."
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
    de: "Groningen ist die grÃ¶ÃŸte Stadt im Norden der Niederlande und als junge, dynamische UniversitÃ¤tsstadt bekannt. Rund ein Viertel der BevÃ¶lkerung sind Studenten, was der Stadt ein pulsierendes Nachtleben und eine lebhafte Kulturszene verleiht. Der historische Stadtkern wird vom berÃ¼hmten Martiniturm Ã¼berragt und ist Ã¤uÃŸerst fahrradfreundlich. Die Mischung aus alten Gassen, modernen Museen wie dem Groninger Museum und innovativer Stadtplanung macht sie einzigartig.",
    hu: "Groningen a legnagyobb vÃ¡ros Hollandia Ã©szaki rÃ©szÃ©n, Ã©s fiatalos, dinamikus egyetemvÃ¡roskÃ©nt ismert. A lakossÃ¡g mintegy negyede diÃ¡k, ami lÃ¼ktetÅ‘ Ã©jszakai Ã©letet Ã©s Ã©lÃ©nk kulturÃ¡lis szÃ­nteret biztosÃ­t a vÃ¡rosnak. A tÃ¶rtÃ©nelmi vÃ¡roskÃ¶zpont fÃ¶lÃ© a hÃ­res Martini-torony magasodik, Ã©s a terÃ¼let rendkÃ­vÃ¼l kerÃ©kpÃ¡rosbarÃ¡t. A rÃ©gi utcÃ¡k, az olyan modern mÃºzeumok, mint a Groninger MÃºzeum, Ã©s az innovatÃ­v vÃ¡rostervezÃ©s keverÃ©ke egyedÃ¼lÃ¡llÃ³vÃ¡ teszi.",
    ro: "Groningen este cel mai mare oraÈ™ din nordul Olandei È™i este cunoscut ca un oraÈ™ universitar tÃ¢nÄƒr È™i dinamic. Aproximativ un sfert din populaÈ›ie sunt studenÈ›i, ceea ce oferÄƒ oraÈ™ului o viaÈ›Äƒ de noapte vibrantÄƒ È™i o scenÄƒ culturalÄƒ plinÄƒ de viaÈ›Äƒ. Centrul istoric al oraÈ™ului este dominat de faimosul Turn Martini È™i este extrem de prietenos cu bicicletele. Amestecul de alei vechi, muzee moderne, cum ar fi Muzeul Groninger, È™i planificarea urbanÄƒ inovatoare Ã®l fac unic.",
    en: "Groningen is the largest city in the north of the Netherlands and is known as a young, dynamic university city. About a quarter of the population are students, giving the city a vibrant nightlife and lively cultural scene. The historic city center is dominated by the famous Martini Tower and is extremely bicycle-friendly. The mix of old alleys, modern museums like the Groninger Museum, and innovative urban planning makes it unique."
  },
      descriptionAdvanced: {
    de: "Groningen ist das unbestrittene stÃ¤dtische Zentrum im Norden der Niederlande und hat eine reiche Geschichte als Handelsstadt der Hanse. Heute ist Groningen vor allem eine junge und dynamische UniversitÃ¤tsstadt; die Studenten machen einen groÃŸen Teil der BevÃ¶lkerung aus und prÃ¤gen das kulturelle Leben. Das Stadtzentrum bietet eine Mischung aus historischen Bauten wie dem markanten Martiniturm und moderner Architektur wie dem auffÃ¤lligen Groninger Museum. Groningen gilt zudem als Vorreiter in der nachhaltigen MobilitÃ¤t und wurde zur fahrradfreundlichsten Stadt der Welt gekÃ¼rt. Sachkunde K5: Groningen ist eine der fahrradfreundlichsten StÃ¤dte. Warum ist es fÃ¼r die Umwelt gut, wenn Menschen mehr Fahrrad statt Auto fahren?",
    hu: "Groningen vÃ¡rosa az Ã©szaki tartomÃ¡nyok legfontosabb gazdasÃ¡gi Ã©s kulturÃ¡lis kÃ¶zpontja, egy igazi, nyÃ¼zsgÅ‘ egyetemvÃ¡ros. LakossÃ¡gÃ¡nak jelentÅ‘s rÃ©szÃ©t diÃ¡kok teszik ki, ami fiatalos, energikus atmoszfÃ©rÃ¡t Ã©s Ã©lÃ©nk Ã©jszakai Ã©letet kÃ¶lcsÃ¶nÃ¶z a telepÃ¼lÃ©snek. A vÃ¡ros bÃ¼szkÃ©lkedhet Hollandia legkiterjedtebb kerÃ©kpÃ¡ros infrastruktÃºrÃ¡jÃ¡val, a kÃ¶zpontbÃ³l szinte teljesen kitiltottÃ¡k az autÃ³kat. JelkÃ©pe az Ã¶tszÃ¡z Ã©ves Martini-torony Ã©s az innovatÃ­v kortÃ¡rs dizÃ¡jnnal rendelkezÅ‘ Groninger MÃºzeum. FÃ¶ldrajz K7: MiÃ©rt elÅ‘nyÃ¶s egy vÃ¡ros szÃ¡mÃ¡ra, ha kÃ¶zlekedÃ©sÃ©t nagyrÃ©szt kerÃ©kpÃ¡rokra Ã©s tÃ¶megkÃ¶zlekedÃ©sre alapozza?",
    ro: "OraÈ™ul Groningen este cel mai important centru economic È™i cultural din provinciile nordice, fiind un oraÈ™ universitar cu adevÄƒrat vibrant. O mare parte a populaÈ›iei sale este formatÄƒ din studenÈ›i, ceea ce Ã®i conferÄƒ o atmosferÄƒ tÃ¢nÄƒrÄƒ, plinÄƒ de energie È™i o viaÈ›Äƒ de noapte animatÄƒ. OraÈ™ul se mÃ¢ndreÈ™te cu cea mai extinsÄƒ infrastructurÄƒ pentru biciclete din Olanda, iar maÈ™inile sunt aproape complet interzise Ã®n centru. Simbolurile sale sunt Turnul Martini, vechi de cinci sute de ani, È™i Muzeul Groninger, cu designul sÄƒu contemporan inovator. Geografie K7: De ce este benefic pentru un oraÈ™ sÄƒ Ã®È™i bazeze transportul Ã®n mare parte pe biciclete È™i transport public?",
    en: "Groningen is the undisputed urban center in the north of the Netherlands and has a rich history as a Hanseatic trading city. Today, Groningen is primarily a young and dynamic university city; students make up a large part of the population and shape its cultural life. The city center offers a mix of historical buildings like the striking Martini Tower and modern architecture such as the eye-catching Groninger Museum. Groningen is also considered a pioneer in sustainable mobility and has been named the most bicycle-friendly city in the world. Science K5: Groningen is one of the most bicycle-friendly cities. Why is it good for the environment when people ride bicycles more often than driving cars?"
  },
    facts: {
    de: ["Groningen ist die grÃ¶ÃŸte Wirtschafts- und Kulturmetropole im Norden.","Besitzt den prozentual hÃ¶chsten Studentenanteil der Niederlande.","Der Martiniturm (d'Olle Grieze) ist das berÃ¼hmte Wahrzeichen der Stadt.","Das futuristische Groninger Museum ist weltbekannt fÃ¼r moderne Kunst.","Das Stadtzentrum wurde in den 1970ern konsequent fahrradfreundlich gemacht.","Hat keine Sperrstunde, was ein intensives Nachtleben ermÃ¶glicht.","Die Rijksuniversiteit Groningen ist eine der Ã¤ltesten UniversitÃ¤ten des Landes.","Der Grote Markt ist das geschÃ¤ftige historische Herz der Stadt."],
    hu: ["Groningen a legnagyobb gazdasÃ¡gi Ã©s kulturÃ¡lis metropolisz Ã©szakon.","A lakossÃ¡g arÃ¡nyÃ¡t tekintve itt a legmagasabb a diÃ¡kok arÃ¡nya HollandiÃ¡ban.","A Martini-torony (d'Olle Grieze) a vÃ¡ros hÃ­res jelkÃ©pe.","A futurisztikus Groninger MÃºzeum vilÃ¡ghÃ­rÅ± modern mÅ±vÃ©szetÃ©rÅ‘l.","A vÃ¡roskÃ¶zpontot az 1970-es Ã©vekben kÃ¶vetkezetesen kerÃ©kpÃ¡rosbarÃ¡ttÃ¡ tettÃ©k.","Nincs zÃ¡rÃ³ra, ami intenzÃ­v Ã©jszakai Ã©letet tesz lehetÅ‘vÃ©.","A Groningeni Egyetem (RUG) az orszÃ¡g egyik legrÃ©gebbi egyeteme.","A Grote Markt a vÃ¡ros nyÃ¼zsgÅ‘ tÃ¶rtÃ©nelmi kÃ¶zpontja."],
    ro: ["Groningen este cea mai mare metropolÄƒ economicÄƒ È™i culturalÄƒ din nord.","Are cel mai mare procent de studenÈ›i din Olanda.","Turnul Martini (d'Olle Grieze) este faimosul simbol al oraÈ™ului.","Muzeul futurist Groninger este renumit Ã®n Ã®ntreaga lume pentru arta modernÄƒ.","Centrul oraÈ™ului a devenit Ã®n mod constant prietenos cu bicicletele Ã®n anii 1970.","Nu are orÄƒ de Ã®nchidere, ceea ce permite o viaÈ›Äƒ de noapte intensÄƒ.","Universitatea din Groningen este una dintre cele mai vechi universitÄƒÈ›i din È›arÄƒ.","Grote Markt este inima istoricÄƒ plinÄƒ de viaÈ›Äƒ a oraÈ™ului."],
    en: ["Groningen is the largest economic and cultural metropolis in the north.","Has the highest percentage of students in the Netherlands.","The Martini Tower (d'Olle Grieze) is the famous landmark of the city.","The futuristic Groninger Museum is world-renowned for modern art.","The city center was made consistently bicycle-friendly in the 1970s.","Has no curfew, which allows for an intense nightlife.","The University of Groningen is one of the oldest universities in the country.","The Grote Markt is the bustling historic heart of the city."]
  },
      factsAdvanced: {
    de: [
      "Mehr als ein Viertel der BevÃ¶lkerung von Groningen besteht aus Studenten.",
      "Das Groninger Museum liegt auf einer kÃ¼nstlichen Insel und wurde von renommierten internationalen Architekten entworfen.",
      "Groningen hat einen der hÃ¶chsten Anteile an Fahrradverkehr weltweit im Stadtzentrum.",
      "Das Peerd van Ome Loeks ist ein berÃ¼hmtes lokales Denkmal, das auf einem alten Volkslied basiert."
    ],
    hu: ["A vÃ¡ros lakossÃ¡gÃ¡nak tÃ¶bb mint negyedÃ©t egyetemi hallgatÃ³k teszik ki.", "Groningent 1977-ben teljesen Ã¡talakÃ­tottÃ¡k a kerÃ©kpÃ¡rosok Ã©s a gyalogosok javÃ¡ra egy ÃºttÃ¶rÅ‘ kÃ¶zlekedÃ©si tervvel.", "A Groninger MÃºzeum egy mestersÃ©ges szigeten Ã¡ll, Ã©s posztmodern Ã©pÃ­tÃ©szetÃ©rÅ‘l hÃ­res.", "A vÃ¡ros tÃ¶rtÃ©nelme a 11. szÃ¡zadig nyÃºlik vissza, Ã©s a Hanza-szÃ¶vetsÃ©g tagja volt."],
    ro: [
      "Mai mult de un sfert din populaÈ›ia oraÈ™ului este formatÄƒ din studenÈ›i universitari.",
      "Groningen a fost complet transformat Ã®n 1977 Ã®n favoarea bicicliÈ™tilor È™i pietonilor printr-un plan de transport de pionierat.",
      "Muzeul Groninger se aflÄƒ pe o insulÄƒ artificialÄƒ È™i este renumit pentru arhitectura sa postmodernÄƒ.",
      "Istoria oraÈ™ului dateazÄƒ din secolul al XI-lea È™i a fost membru al Ligii Hanseatice."
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
    de: "Tilburg, in der Provinz Nordbrabant gelegen, ist eine Stadt, die sich von einer historischen Textil-Metropole zu einem modernen Zentrum fÃ¼r Kultur und Innovation gewandelt hat. Das kulturelle Highlight der Stadt ist die Spoorzone, ein ehemaliges EisenbahngelÃ¤nde, das heute eine beeindruckende Architektur-Bibliothek (LocHal) beherbergt. Zudem ist Tilburg landesweit bekannt fÃ¼r die Tilburger Kirmes, die grÃ¶ÃŸte Messe (Kermis) der Benelux-LÃ¤nder.",
    hu: "A Tilburg, amely Ã‰szak-Brabant tartomÃ¡nyban talÃ¡lhatÃ³, egy olyan vÃ¡ros, amely tÃ¶rtÃ©nelmi textil-metropoliszbÃ³l a kultÃºra Ã©s az innovÃ¡ciÃ³ modern kÃ¶zpontjÃ¡vÃ¡ alakult Ã¡t. A vÃ¡ros kulturÃ¡lis fÃ©nypontja a Spoorzone, egy egykori vasÃºti terÃ¼let, amely ma egy lenyÅ±gÃ¶zÅ‘ Ã©pÃ­tÃ©szeti kÃ¶nyvtÃ¡rnak (LocHal) ad otthont. EzenkÃ­vÃ¼l Tilburg orszÃ¡gszerte ismert a Tilburgi VÃ¡ndorcirkuszrÃ³l (Kermis), amely a Benelux Ã¡llamok legnagyobb vÃ¡sÃ¡ra.",
    ro: "Tilburg, situat Ã®n provincia Brabantul de Nord, este un oraÈ™ care s-a transformat dintr-o metropolÄƒ istoricÄƒ a textilelor Ã®ntr-un centru modern pentru culturÄƒ È™i inovaÈ›ie. Punctul culminant cultural al oraÈ™ului este Spoorzone, o fostÄƒ zonÄƒ feroviarÄƒ care gÄƒzduieÈ™te acum o bibliotecÄƒ arhitecturalÄƒ impresionantÄƒ (LocHal). Tilburg este cunoscut È™i la nivel naÈ›ional pentru TÃ¢rgul din Tilburg, cel mai mare tÃ¢rg (Kermis) din È›Äƒrile Benelux.",
    en: "Tilburg, located in the province of North Brabant, is a city that has transformed from a historic textile metropolis into a modern center for culture and innovation. The cultural highlight of the city is the Spoorzone, a former railway area that now houses an impressive architectural library (LocHal). In addition, Tilburg is known nationwide for the Tilburg Fair, the largest funfair (Kermis) in the Benelux countries."
  },
      descriptionAdvanced: {
    de: "Tilburg ist eine florierende Stadt in der Provinz Nordbrabant, deren Geschichte eng mit der Textilindustrie verknÃ¼pft ist. Im 19. und frÃ¼hen 20. Jahrhundert wurde die Stadt als die 'Wollhauptstadt' der Niederlande bezeichnet und war geprÃ¤gt von Fabriken und Arbeiterquartieren. Heute hat sich Tilburg erfolgreich zu einer modernen Bildungs- und Kulturstadt gewandelt, die alte IndustriegebÃ¤ude kreativ nutzt; ein hervorragendes Beispiel dafÃ¼r ist das Museum de Pont fÃ¼r zeitgenÃ¶ssische Kunst. Die Tilburgse Kermis, die jÃ¤hrlich im Juli stattfindet, ist der grÃ¶ÃŸte Jahrmarkt der Benelux-LÃ¤nder und zieht Millionen Besucher an. Textilgeschichte K6: In Tilburg wurde frÃ¼her viel Wolle verarbeitet. Von welchem Tier gewinnt man die meiste Wolle fÃ¼r Kleidung?",
    hu: "Tilburg egykor a holland textilipar fellegvÃ¡ra volt, amelyet gyakran 'Hollandia gyapjÃºfÅ‘vÃ¡rosakÃ©nt' emlegettek. BÃ¡r az iparÃ¡g a 20. szÃ¡zad vÃ©gÃ©n hanyatlÃ¡snak indult, a vÃ¡ros sikeresen Ãºjra feltalÃ¡lta magÃ¡t, Ã©s az egykori gyÃ¡rÃ©pÃ¼leteket kreatÃ­v kÃ¶zpontokkÃ¡, modern mÃºzeumokkÃ¡ Ã©s lakÃ³Ã¶vezetekkÃ© alakÃ­tottÃ¡k Ã¡t. Tilburg ma egy modern, dinamikus vÃ¡ros, amely egyetemi kampuszÃ¡rÃ³l, Ã©lÃ©nk zenei Ã©s kulturÃ¡lis Ã©letÃ©rÅ‘l, valamint a LocHal nevÅ±, dÃ­jnyertes, rÃ©gi mozdonycsarnokbÃ³l kialakÃ­tott kÃ¶nyvtÃ¡rÃ¡rÃ³l ismert. GazdasÃ¡g K7: Hogyan tud egy korÃ¡bbi iparvÃ¡ros sikeresen Ã¡tÃ¡llni a modern, tudÃ¡salapÃº szolgÃ¡ltatÃ³i gazdasÃ¡gra?",
    ro: "Tilburg a fost cÃ¢ndva un bastion al industriei textile olandeze, fiind adesea numit 'capitala lÃ¢nii din Olanda'. DeÈ™i industria a intrat Ã®n declin la sfÃ¢rÈ™itul secolului al XX-lea, oraÈ™ul s-a reinventat cu succes, transformÃ¢nd fostele clÄƒdiri industriale Ã®n centre creative, muzee moderne È™i zone rezidenÈ›iale. AstÄƒzi, Tilburg este un oraÈ™ modern È™i dinamic, cunoscut pentru campusul sÄƒu universitar, viaÈ›a muzicalÄƒ È™i culturalÄƒ activÄƒ, precum È™i pentru LocHal, o bibliotecÄƒ premiatÄƒ amenajatÄƒ Ã®ntr-o veche halÄƒ de locomotive. Economie K7: Cum poate un fost oraÈ™ industrial sÄƒ treacÄƒ cu succes la o economie modernÄƒ bazatÄƒ pe cunoaÈ™tere È™i servicii?",
    en: "Tilburg is a thriving city in the province of North Brabant, its history closely linked to the textile industry. In the 19th and early 20th centuries, the city was known as the 'wool capital' of the Netherlands and was defined by factories and working-class neighborhoods. Today, Tilburg has successfully transformed into a modern educational and cultural city that creatively repurposes old industrial buildings; a prime example is the De Pont Museum of contemporary art. The Tilburgse Kermis, held annually in July, is the largest fair in the Benelux countries and attracts millions of visitors. Textile History K6: Tilburg used to process a lot of wool. Which animal provides the most wool for clothing?"
  },
    facts: {
    de: ["Ehemaliges Zentrum der niederlÃ¤ndischen Woll- und Textilindustrie.","Beherbergt das interessante 'TextielMuseum' in einer alten Fabrik.","Veranstaltet jÃ¤hrlich die grÃ¶ÃŸte Kirmes (Kermis) der Benelux-Staaten.","Die preisgekrÃ¶nte Bibliothek 'LocHal' befindet sich in einer alten Zughalle.","Die UniversitÃ¤t Tilburg ist bekannt fÃ¼r Rechts- und Wirtschaftswissenschaften.","Hat eine groÃŸe und sehr aktive internationale Studentenszene.","Der Safaripark Beekse Bergen liegt nur wenige Kilometer entfernt.","KÃ¶nig Wilhelm II. der Niederlande verbrachte hier gerne Zeit."],
    hu: ["A holland gyapjÃº- Ã©s textilipar egykori kÃ¶zpontja.","Egy rÃ©gi gyÃ¡rban ad otthont az Ã©rdekes 'TextilmÃºzeumnak'.","Ã‰vente itt rendezik meg a Benelux Ã¡llamok legnagyobb vÃ¡sÃ¡rÃ¡t (Kermis).","A dÃ­jnyertes 'LocHal' kÃ¶nyvtÃ¡r egy rÃ©gi vasÃºti csarnokban talÃ¡lhatÃ³.","A Tilburgi Egyetem jogi Ã©s kÃ¶zgazdasÃ¡gi kÃ©pzÃ©seirÅ‘l hÃ­res.","Nagy Ã©s rendkÃ­vÃ¼l aktÃ­v nemzetkÃ¶zi diÃ¡kÃ©lettel rendelkezik.","A Beekse Bergen szafaripark mindÃ¶ssze nÃ©hÃ¡ny kilomÃ©terre talÃ¡lhatÃ³.","II. Vilmos holland kirÃ¡ly szÃ­vesen tÃ¶ltÃ¶tte itt az idejÃ©t."],
    ro: ["Fostul centru al industriei olandeze de lÃ¢nÄƒ È™i textile.","GÄƒzduieÈ™te interesantul 'Muzeu al Textilelor' Ã®ntr-o fabricÄƒ veche.","OrganizeazÄƒ anual cel mai mare tÃ¢rg (Kermis) din È›Äƒrile Benelux.","Biblioteca premiatÄƒ 'LocHal' este situatÄƒ Ã®ntr-o halÄƒ de tren veche.","Universitatea Tilburg este cunoscutÄƒ pentru drept È™i economie.","Are o scenÄƒ studenÈ›eascÄƒ internaÈ›ionalÄƒ mare È™i foarte activÄƒ.","Parcul safari Beekse Bergen este la doar cÃ¢È›iva kilometri distanÈ›Äƒ.","Regele William al II-lea al Olandei i-a plÄƒcut sÄƒ petreacÄƒ timpul aici."],
    en: ["Former center of the Dutch wool and textile industry.","Houses the interesting 'Textile Museum' in an old factory.","Hosts the largest funfair (Kermis) in the Benelux countries annually.","The award-winning 'LocHal' library is located in an old train hall.","Tilburg University is known for law and economics.","Has a large and very active international student scene.","The Beekse Bergen safari park is just a few kilometers away.","King William II of the Netherlands liked to spend time here."]
  },
      factsAdvanced: {
    de: [
      "Tilburg war frÃ¼her das unangefochtene Zentrum der niederlÃ¤ndischen Wollindustrie.",
      "Die UniversitÃ¤t Tilburg ist besonders renommiert in den Bereichen Wirtschaft, Recht und Sozialwissenschaften.",
      "Das Textilmuseum in Tilburg befindet sich in einer ehemaligen Fabrik und zeigt noch heute arbeitende WebstÃ¼hle.",
      "Die LocHal, eine umgebaute Lokomotivenwerkstatt, dient heute als preisgekrÃ¶nte Ã¶ffentliche Bibliothek."
    ],
    hu: ["A De Pont MÃºzeum egy egykori gyapjÃºfonodÃ¡ban talÃ¡lhatÃ³, Ã©s kortÃ¡rs mÅ±vÃ©szetet Ã¡llÃ­t ki.", "A LocHal 2019-ben elnyerte a VilÃ¡g Ã‰v Ã‰pÃ¼lete dÃ­jat a belsÅ‘Ã©pÃ­tÃ©szeti kategÃ³riÃ¡ban.", "Tilburg rendezi meg minden jÃºliusban a Benelux Ã¡llamok legnagyobb, tÃ­znapos vidÃ¡mparki fesztivÃ¡ljÃ¡t (Tilburgse Kermis).", "Az 1927-ben alapÃ­tott Tilburgi Egyetem (TiU) kÃ¶zgazdasÃ¡gi Ã©s jogi kÃ©pzÃ©seirÅ‘l hÃ­res."],
    ro: [
      "Muzeul De Pont este situat Ã®ntr-o fostÄƒ filaturÄƒ de lÃ¢nÄƒ È™i expune artÄƒ contemporanÄƒ.",
      "ÃŽn 2019, LocHal a cÃ¢È™tigat premiul pentru ClÄƒdirea Anului Ã®n lume la categoria design interior.",
      "ÃŽn fiecare lunÄƒ iulie, Tilburg gÄƒzduieÈ™te cel mai mare festival de parc de distracÈ›ii de zece zile din È›Äƒrile Benelux (Tilburgse Kermis).",
      "Universitatea din Tilburg (TiU), fondatÄƒ Ã®n 1927, este faimoasÄƒ pentru programele sale de economie È™i drept."
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
    de: "Nijmegen gilt als die Ã¤lteste Stadt der Niederlande und blickt auf eine faszinierende Ã¼ber 2000-jÃ¤hrige rÃ¶mische Geschichte zurÃ¼ck. Die Stadt am Fluss Waal in Gelderland kombiniert ihr historisches Erbe mit einer lebendigen studentischen AtmosphÃ¤re. Weltweite Bekanntheit erlangt Nijmegen jedes Jahr im Juli durch den internationalen Vier-Tage-Marsch, das grÃ¶ÃŸte Mehrtages-Wanderereignis der Welt, das von groÃŸen FestivitÃ¤ten begleitet wird.",
    hu: "Nijmegen Hollandia legrÃ©gebbi vÃ¡rosÃ¡nak szÃ¡mÃ­t, Ã©s tÃ¶bb mint 2000 Ã©ves lenyÅ±gÃ¶zÅ‘ rÃ³mai tÃ¶rtÃ©nelemre tekinthet vissza. A Gelderlandban, a Waal folyÃ³ partjÃ¡n fekvÅ‘ vÃ¡ros tÃ¶rtÃ©nelmi Ã¶rÃ¶ksÃ©gÃ©t Ã©lÃ©nk diÃ¡kÃ©lettel Ã¶tvÃ¶zi. Nijmegen minden Ã©v jÃºliusÃ¡ban vilÃ¡gszerte ismerttÃ© vÃ¡lik a nemzetkÃ¶zi NÃ©gynapos Gyaloglat rÃ©vÃ©n, amely a vilÃ¡g legnagyobb tÃ¶bbnapos gyalogos esemÃ©nye, Ã©s hatalmas Ã¼nnepsÃ©gek kÃ­sÃ©rik.",
    ro: "Nijmegen este considerat cel mai vechi oraÈ™ din ÈšÄƒrile de Jos È™i are o istorie romanÄƒ fascinantÄƒ de peste 2000 de ani. OraÈ™ul de pe rÃ¢ul Waal din Gelderland Ã®È™i combinÄƒ moÈ™tenirea istoricÄƒ cu o atmosferÄƒ studenÈ›eascÄƒ plinÄƒ de viaÈ›Äƒ. Nijmegen capÄƒtÄƒ faimÄƒ mondialÄƒ Ã®n fiecare lunÄƒ iulie prin MarÈ™ul InternaÈ›ional de Patru Zile, cel mai mare eveniment de mers pe jos de mai multe zile din lume, care este Ã®nsoÈ›it de festivitÄƒÈ›i mari.",
    en: "Nijmegen is considered the oldest city in the Netherlands and looks back on a fascinating Roman history of over 2000 years. The city on the Waal river in Gelderland combines its historical heritage with a lively student atmosphere. Nijmegen gains worldwide fame every July through the International Four Days Marches, the largest multi-day walking event in the world, accompanied by huge festivities."
  },
      descriptionAdvanced: {
    de: "Nijmegen beansprucht den Titel der Ã¤ltesten Stadt der Niederlande, deren Wurzeln bis auf ein rÃ¶misches MilitÃ¤rlager um den Beginn unserer Zeitrechnung zurÃ¼ckgehen. Die Stadt am Waal war ein wichtiger StÃ¼tzpunkt an der Grenze des RÃ¶mischen Reiches und spÃ¤ter eine Kaiserpfalz von Karl dem GroÃŸen. Im Zweiten Weltkrieg erlitt Nijmegen schwere ZerstÃ¶rungen, als sie fÃ¤lschlicherweise bombardiert wurde, konnte aber ihren historischen Charme in Teilen wieder aufbauen. Heute ist es eine lebendige UniversitÃ¤tsstadt, weltberÃ¼hmt fÃ¼r das jÃ¤hrliche 'Vierdaagse'-Wanderevent, an dem Zehntausende Menschen teilnehmen. Geschichte K6: Nijmegen lag an der Grenze des RÃ¶mischen Reiches. Wie nannte man den Grenzwall, den die RÃ¶mer zur Verteidigung bauten?",
    hu: "Nijmegen Hollandia legrÃ©gebbi vÃ¡rosa, amelynek tÃ¶rtÃ©nete a rÃ³mai korig nyÃºlik vissza, amikor Ulpia Noviomagus nÃ©ven a birodalom fontos Ã©szaki helyÅ‘rsÃ©ge volt. A vÃ¡ros a Waal folyÃ³ partjÃ¡n fekszik, Ã©s dombosabb kÃ¶rnyezete miatt elÃ¼t a tipikus sÃ­k holland tÃ¡jtÃ³l. Nijmegen ma is jelentÅ‘s egyetemvÃ¡ros Ã©s kulturÃ¡lis kÃ¶zpont, amely vilÃ¡gszerte ismert az Ã©vente megrendezett nÃ©gynapos gyaloglÃ³tÃºrÃ¡rÃ³l (Vierdaagse), amely a vilÃ¡g legnagyobb tÃ¶bbnapos menetelÅ‘ esemÃ©nye. TÃ¶rtÃ©nelem K6: Mi volt a szerepe a rÃ³mai limesnek (hatÃ¡rnak), amelynek egyik kulcspontja Nijmegen volt?",
    ro: "Nijmegen este cel mai vechi oraÈ™ din Olanda, cu o istorie care dateazÄƒ din epoca romanÄƒ, cÃ¢nd, sub numele de Ulpia Noviomagus, a fost o importantÄƒ garnizoanÄƒ nordicÄƒ a imperiului. OraÈ™ul este situat pe malurile rÃ¢ului Waal È™i, datoritÄƒ Ã®mprejurimilor sale mai deluroase, contrasteazÄƒ cu peisajul tipic plat olandez. Nijmegen rÄƒmÃ¢ne astÄƒzi un important oraÈ™ universitar È™i un centru cultural, cunoscut Ã®n Ã®ntreaga lume pentru MarÈ™ul de Patru Zile (Vierdaagse) desfÄƒÈ™urat anual, cel mai mare eveniment de mers pe jos de mai multe zile din lume. Istorie K6: Care a fost rolul limesului roman (graniÈ›a), pentru care Nijmegen era un punct cheie?",
    en: "Nijmegen claims the title of the oldest city in the Netherlands, with roots tracing back to a Roman military camp around the beginning of our era. The city on the Waal river was an important outpost on the border of the Roman Empire and later an imperial palace for Charlemagne. In World War II, Nijmegen suffered severe destruction when it was mistakenly bombed, but managed to rebuild parts of its historical charm. Today, it is a lively university city, world-famous for the annual 'Vierdaagse' walking event, in which tens of thousands of people participate. History K6: Nijmegen was located on the border of the Roman Empire. What was the border wall called that the Romans built for defense?"
  },
    facts: {
    de: ["Die Ã¤lteste Stadt der Niederlande, gegrÃ¼ndet von den RÃ¶mern (Ulpia Noviomagus).","Weltbekannt fÃ¼r den Nijmegen-Vier-Tage-Marsch (Vierdaagse).","Befindet sich am Ufer des Flusses Waal, nahe der deutschen Grenze.","Der Valkhof-Park bietet Ruinen und einen weiten Blick Ã¼ber die Waal.","Die Radboud-UniversitÃ¤t Nijmegen ist eine der fÃ¼hrenden UniversitÃ¤ten.","Hat eine bewegte Geschichte im Zweiten Weltkrieg (Bombardierung 1944).","Die St. Stevenskerk ist ein markantes historisches Wahrzeichen.","Wurde 2018 zur Umwelthauptstadt Europas (Green Capital) gewÃ¤hlt."],
    hu: ["Hollandia legrÃ©gebbi vÃ¡rosa, amelyet a rÃ³maiak alapÃ­tottak (Ulpia Noviomagus).","VilÃ¡ghÃ­rÅ± a nijmegeni NÃ©gynapos GyaloglatrÃ³l (Vierdaagse).","A Waal folyÃ³ partjÃ¡n talÃ¡lhatÃ³, kÃ¶zel a nÃ©met hatÃ¡rhoz.","A Valkhof park romokat Ã©s lenyÅ±gÃ¶zÅ‘ kilÃ¡tÃ¡st nyÃºjt a Waalra.","A nijmegeni Radboud Egyetem az egyik vezetÅ‘ egyetem.","A mÃ¡sodik vilÃ¡ghÃ¡borÃºban (1944-es bombÃ¡zÃ¡s) viharos tÃ¶rtÃ©nete volt.","A Szent IstvÃ¡n-templom kiemelkedÅ‘ tÃ¶rtÃ©nelmi nevezetessÃ©g.","2018-ban EurÃ³pa ZÃ¶ld FÅ‘vÃ¡rosÃ¡nak (Green Capital) vÃ¡lasztottÃ¡k."],
    ro: ["Cel mai vechi oraÈ™ din Olanda, fondat de romani (Ulpia Noviomagus).","Renumit pentru MarÈ™ul de Patru Zile de la Nijmegen (Vierdaagse).","Situat pe malul rÃ¢ului Waal, aproape de graniÈ›a cu Germania.","Parcul Valkhof oferÄƒ ruine È™i vederi panoramice peste Waal.","Universitatea Radboud din Nijmegen este una dintre universitÄƒÈ›ile de top.","A avut o istorie zbuciumatÄƒ Ã®n timpul celui de-al Doilea RÄƒzboi Mondial (bombardamentul din 1944).","Biserica Sf. È˜tefan este un reper istoric proeminent.","ÃŽn 2018 a fost aleasÄƒ Capitala Verde a Europei (Green Capital)."],
    en: ["The oldest city in the Netherlands, founded by the Romans (Ulpia Noviomagus).","World-famous for the Nijmegen Four Days Marches (Vierdaagse).","Located on the banks of the river Waal, near the German border.","The Valkhof Park offers ruins and sweeping views over the Waal.","Radboud University Nijmegen is one of the leading universities.","Had a turbulent history in World War II (1944 bombing).","St. Stephen's Church is a prominent historical landmark.","Was elected European Green Capital in 2018."]
  },
      factsAdvanced: {
    de: [
      "Nijmegen feierte im Jahr 2005 sein 2000-jÃ¤hriges Bestehen und gilt als Ã¤lteste Stadt der Niederlande.",
      "Der 'Nijmeegse Vierdaagse' ist die grÃ¶ÃŸte mehrtÃ¤gige Marschveranstaltung der Welt.",
      "Die Radboud-UniversitÃ¤t in Nijmegen ist eine der fÃ¼hrenden Forschungseinrichtungen der Niederlande.",
      "Im Valkhofpark befinden sich die Reste einer Pfalz, die von Kaiser Karl dem GroÃŸen genutzt wurde."
    ],
    hu: ["Nijmegen idÃ©n Ã¼nnepli fennÃ¡llÃ¡sÃ¡nak tÃ¶bb mint 2000. Ã©vfordulÃ³jÃ¡t.", "A NemzetkÃ¶zi NÃ©gynapos GyaloglÃ³tÃºrÃ¡n (Vierdaagse) Ã©vente tÃ¶bb mint 40 000 ember vesz rÃ©szt a vilÃ¡g minden tÃ¡jÃ¡rÃ³l.", "A vÃ¡ros a mÃ¡sodik vilÃ¡ghÃ¡borÃº alatt sÃºlyos bombatÃ¡madÃ¡sokat szenvedett, de tÃ¶rtÃ©nelmi Ã©pÃ¼leteit szÃ©pen helyreÃ¡llÃ­tottÃ¡k.", "A Radboud Egyetem az orszÃ¡g egyik vezetÅ‘ kutatÃ³intÃ©zmÃ©nye."],
    ro: [
      "Nijmegen a sÄƒrbÄƒtorit recent a peste 2000-a aniversare de la Ã®nfiinÈ›are.",
      "La MarÈ™ul InternaÈ›ional de Patru Zile (Vierdaagse) participÄƒ anual peste 40.000 de oameni din Ã®ntreaga lume.",
      "OraÈ™ul a suferit bombardamente severe Ã®n timpul celui de-al Doilea RÄƒzboi Mondial, dar clÄƒdirile sale istorice au fost frumos restaurate.",
      "Universitatea Radboud este una dintre cele mai importante instituÈ›ii de cercetare din È›arÄƒ."
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
    de: "Haarlem, die Hauptstadt der Provinz Nordholland, ist eine malerische Stadt mit viel historischem Charme, die nur wenige Kilometer von der NordseekÃ¼ste entfernt liegt. Sie gilt als kleine, ruhigere Version von Amsterdam, komplett mit Grachten, WindmÃ¼hlen und einer gut erhaltenen Altstadt. Das Herz der Stadt ist der Grote Markt mit der beeindruckenden St.-Bavo-Kirche. Haarlem ist zudem bekannt fÃ¼r seine vielen versteckten Hofjes (InnenhÃ¶fe).",
    hu: "Haarlem, Ã‰szak-Holland tartomÃ¡ny fÅ‘vÃ¡rosa, festÅ‘i vÃ¡ros gazdag tÃ¶rtÃ©nelmi bÃ¡jjal, amely mindÃ¶ssze nÃ©hÃ¡ny kilomÃ©terre fekszik az Ã‰szaki-tenger partjÃ¡tÃ³l. Gyakran nevezik Amszterdam kisebb, csendesebb vÃ¡ltozatÃ¡nak, csatornÃ¡kkal, szÃ©lmalmokkal Ã©s egy jÃ³l megÅ‘rzÃ¶tt Ã³vÃ¡rossal. A vÃ¡ros szÃ­ve a Grote Markt a lenyÅ±gÃ¶zÅ‘ Szent Bavo-templommal. Haarlem emellett ismert szÃ¡mos rejtett udvarÃ¡rÃ³l (Hofjes) is.",
    ro: "Haarlem, capitala provinciei Olanda de Nord, este un oraÈ™ pitoresc cu mult farmec istoric, situat la doar cÃ¢È›iva kilometri de coasta MÄƒrii Nordului. Este adesea considerat o versiune mai micÄƒ È™i mai liniÈ™titÄƒ a Amsterdamului, completatÄƒ cu canale, mori de vÃ¢nt È™i un oraÈ™ vechi bine conservat. Inima oraÈ™ului este Grote Markt cu impresionanta sa BisericÄƒ Sf. Bavo. Haarlem este, de asemenea, cunoscut pentru numeroasele sale curÈ›i ascunse (Hofjes).",
    en: "Haarlem, the capital of the province of North Holland, is a picturesque city with a lot of historic charm, located just a few kilometers from the North Sea coast. It is often considered a smaller, quieter version of Amsterdam, complete with canals, windmills, and a well-preserved old town. The heart of the city is the Grote Markt with its impressive St. Bavo's Church. Haarlem is also known for its many hidden courtyards (Hofjes)."
  },
      descriptionAdvanced: {
    de: "Haarlem, die historische Hauptstadt der Provinz Nordholland, liegt nur eine kurze Zugfahrt von Amsterdam entfernt, bietet aber eine ruhigere, ebenso malerische AtmosphÃ¤re. Die Stadt florierte im 17. Jahrhundert und war ein Zentrum fÃ¼r Bierbrauereien, Tulpenhandel und Malerei, in dem Meister wie Frans Hals wirkten. Das mittelalterliche Zentrum rund um den Grote Markt mit der beeindruckenden Bavo-Kirche gehÃ¶rt zu den schÃ¶nsten der Niederlande. Haarlem wird oft als die Einkaufsstadt der Niederlande bezeichnet und ist von prÃ¤chtigen Grachten und historischen Hofjes (versteckten InnenhÃ¶fen) durchzogen. Kunst K7: Frans Hals war ein berÃ¼hmter Maler aus Haarlem, der vor allem PortrÃ¤ts malte. Warum lieÃŸen sich wohlhabende BÃ¼rger im 17. Jahrhundert so gerne portrÃ¤tieren?",
    hu: "Haarlem, az Ã‰szak-Holland tartomÃ¡ny fÅ‘vÃ¡rosa, tÃ¶rtÃ©nelmi Ã©pÃ¼leteivel, macskakÃ¶ves utcÃ¡ival Ã©s gazdag kulturÃ¡lis Ã¶rÃ¶ksÃ©gÃ©vel Amszterdam csendesebb, de ugyanolyan gyÃ¶nyÃ¶rÅ± alternatÃ­vÃ¡ja. A holland aranykorban a virÃ¡gkereskedelem, a sÃ¶rfÅ‘zÃ©s Ã©s a mÅ±vÃ©szetek kÃ¶zpontja volt, itt Ã©lt Ã©s alkotott a hÃ­res festÅ‘, Frans Hals. A vÃ¡ros kÃ¶zpontjÃ¡ban Ã¡ll a hatalmas Grote Kerk (Nagy Templom), amely lenyÅ±gÃ¶zÅ‘ MÃ¼ller-orgonÃ¡jÃ¡rÃ³l ismert, melyen egykor maga Mozart is jÃ¡tszott. MÅ±vÃ©szettÃ¶rtÃ©net K7: MiÃ©rt volt a 17. szÃ¡zadi holland festÃ©szet (mint amit Frans Hals kÃ©pviselt) forradalmi az eurÃ³pai mÅ±vÃ©szetben?",
    ro: "Haarlem, capitala provinciei Olanda de Nord, este o alternativÄƒ mai liniÈ™titÄƒ, dar la fel de frumoasÄƒ la Amsterdam, cu clÄƒdirile sale istorice, strÄƒzile pietruite È™i patrimoniul cultural bogat. ÃŽn timpul Epocii de Aur olandeze, a fost un centru al comerÈ›ului cu flori, al berÄƒriei È™i al artelor; celebrul pictor Frans Hals a trÄƒit È™i a lucrat aici. ÃŽn centrul oraÈ™ului se Ã®nalÈ›Äƒ masiva Grote Kerk (Biserica Mare), cunoscutÄƒ pentru impresionanta sa orgÄƒ MÃ¼ller, la care a cÃ¢ntat odatÄƒ chiar È™i Mozart. Istoria artei K7: De ce a fost pictura olandezÄƒ din secolul al XVII-lea (cum ar fi cea reprezentatÄƒ de Frans Hals) revoluÈ›ionarÄƒ Ã®n arta europeanÄƒ?",
    en: "Haarlem, the historical capital of the province of North Holland, is just a short train ride from Amsterdam but offers a quieter, equally picturesque atmosphere. The city flourished in the 17th century and was a center for breweries, tulip trading, and painting, where masters like Frans Hals worked. The medieval center around the Grote Markt, with its impressive Bavo Church, is among the most beautiful in the Netherlands. Haarlem is often called the shopping city of the Netherlands and is intersected by magnificent canals and historical Hofjes (hidden courtyards). Art K7: Frans Hals was a famous painter from Haarlem who mainly painted portraits. Why did wealthy citizens like to have their portraits painted in the 17th century?"
  },
    facts: {
    de: ["Haarlem ist die Hauptstadt der Provinz Nordholland.","Bekannt als 'Stadt der Blumen' in der NÃ¤he der Tulpenfelder.","VerfÃ¼gt Ã¼ber viele historische 'Hofjes' (versteckte InnenhÃ¶fe).","Die St.-Bavo-Kirche (Grote Kerk) dominiert den Marktplatz.","In der St.-Bavo-Kirche steht die berÃ¼hmte MÃ¼ller-Orgel, die einst Mozart spielte.","Das Teylers Museum ist das Ã¤lteste Museum der Niederlande (1784).","Das Frans-Hals-Museum zeigt Kunstwerke aus dem Goldenen Zeitalter.","Die De Adriaan-WindmÃ¼hle ist ein klassisches Wahrzeichen der Stadt."],
    hu: ["Haarlem Ã‰szak-Holland tartomÃ¡ny fÅ‘vÃ¡rosa.","A tulipÃ¡nmezÅ‘k kÃ¶zelÃ©ben lÃ©vÅ‘ 'A virÃ¡gok vÃ¡rosa' nÃ©ven ismert.","SzÃ¡mos tÃ¶rtÃ©nelmi 'Hofje' (rejtett belsÅ‘ udvar) talÃ¡lhatÃ³ itt.","A Szent Bavo-templom (Grote Kerk) uralja a piacteret.","A Szent Bavo-templomban Ã¡ll a hÃ­res MÃ¼ller-orgona, amelyen egykor Mozart is jÃ¡tszott.","A Teylers MÃºzeum Hollandia legrÃ©gebbi mÃºzeuma (1784).","A Frans Hals MÃºzeum az aranykor mÅ±alkotÃ¡sait mutatja be.","A De Adriaan szÃ©lmalom a vÃ¡ros klasszikus jelkÃ©pe."],
    ro: ["Haarlem este capitala provinciei Olanda de Nord.","Cunoscut sub numele de 'OraÈ™ul Florilor' Ã®n apropierea cÃ¢mpurilor de lalele.","Are multe 'Hofjes' (curÈ›i interioare ascunse) istorice.","Biserica Sf. Bavo (Grote Kerk) dominÄƒ piaÈ›a oraÈ™ului.","ÃŽn Biserica Sf. Bavo se aflÄƒ celebra orgÄƒ MÃ¼ller la care a cÃ¢ntat odatÄƒ Mozart.","Muzeul Teylers este cel mai vechi muzeu din Olanda (1784).","Muzeul Frans Hals expune opere de artÄƒ din Epoca de Aur.","Moara de vÃ¢nt De Adriaan este un reper clasic al oraÈ™ului."],
    en: ["Haarlem is the capital of the province of North Holland.","Known as the 'City of Flowers' near the tulip fields.","Has many historic 'Hofjes' (hidden courtyards).","St. Bavo's Church (Grote Kerk) dominates the market square.","In St. Bavo's Church is the famous MÃ¼ller organ, once played by Mozart.","The Teylers Museum is the oldest museum in the Netherlands (1784).","The Frans Hals Museum displays artworks from the Golden Age.","The De Adriaan windmill is a classic landmark of the city."]
  },
      factsAdvanced: {
    de: [
      "Haarlem war das historische Zentrum des hollÃ¤ndischen Tulpenhandels im 17. Jahrhundert.",
      "In der St.-Bavo-Kirche steht eine riesige MÃ¼ller-Orgel, auf der schon Mozart als Junge spielte.",
      "Das Teylers Museum in Haarlem, erÃ¶ffnet 1784, ist das Ã¤lteste Museum der Niederlande.",
      "Haarlem verfÃ¼gt Ã¼ber mehr als 20 historische 'Hofjes', kleine Wohnanlagen um einen idyllischen Innenhof."
    ],
    hu: ["Haarlem a holland tulipÃ¡ntermesztÅ‘ vidÃ©k ('Bollenstreek') Ã©szaki kapuja.", "A Grote Kerk (Sint-Bavokerk) orgonÃ¡ja 5000 sÃ­ppal rendelkezik, Ã©s a 18. szÃ¡zadban a vilÃ¡g legnagyobbja volt.", "A Teylers MÃºzeum, Hollandia legrÃ©gebbi mÃºzeuma (1784), a mÅ±vÃ©szetet Ã©s a tudomÃ¡nyt Ã¶tvÃ¶zi.", "A vÃ¡rosban szÃ¡mos belsÅ‘ udvaros kis lakÃ³hÃ¡z (hofje) maradt fenn a kÃ¶zÃ©pkorbÃ³l."],
    ro: [
      "Haarlem este poarta de nord a regiunii de cultivare a lalelelor din Olanda ('Bollenstreek').",
      "Orga din Grote Kerk (Sint-Bavokerk) are 5.000 de tuburi È™i era cea mai mare din lume Ã®n secolul al XVIII-lea.",
      "Muzeul Teylers, cel mai vechi muzeu din Olanda (1784), combinÄƒ arta È™i È™tiinÈ›a.",
      "ÃŽn oraÈ™ au supravieÈ›uit din Evul Mediu numeroase case mici cu curÈ›i interioare (hofje)."
    ],
    en: [
      "Haarlem was the historical center of the Dutch tulip trade in the 17th century.",
      "The St. Bavo Church houses a massive MÃ¼ller organ, which Mozart played as a young boy.",
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
    de: "Leiden ist eine prachtvolle Stadt in SÃ¼dholland, berÃ¼hmt fÃ¼r die Ã¤lteste UniversitÃ¤t der Niederlande und als Geburtsort des legendÃ¤ren Malers Rembrandt. Die Innenstadt ist durchzogen von idyllischen Grachten, die nach Amsterdam das zweitgrÃ¶ÃŸte Kanalnetz des Landes bilden. Leiden bietet zudem hochkarÃ¤tige Museen wie das Nationalmuseum fÃ¼r AltertÃ¼mer und den wunderschÃ¶nen Botanischen Garten (Hortus botanicus), wo einst die ersten Tulpen des Landes gepflanzt wurden.",
    hu: "Leiden egy csodÃ¡latos vÃ¡ros DÃ©l-HollandiÃ¡ban, amely Hollandia legrÃ©gebbi egyetemÃ©rÅ‘l Ã©s a legendÃ¡s festÅ‘, Rembrandt szÃ¼lÅ‘helyekÃ©nt ismert. A belvÃ¡rost idilli csatornÃ¡k szelik Ã¡t, amelyek Amszterdam utÃ¡n az orszÃ¡g mÃ¡sodik legnagyobb csatornahÃ¡lÃ³zatÃ¡t alkotjÃ¡k. Leiden emellett kiemelkedÅ‘ mÃºzeumokat kÃ­nÃ¡l, mint a Nemzeti RÃ©gisÃ©gmÃºzeum, Ã©s a gyÃ¶nyÃ¶rÅ± Botanikus Kert (Hortus botanicus), ahol egykor az orszÃ¡g elsÅ‘ tulipÃ¡njait elÃ¼ltettÃ©k.",
    ro: "Leiden este un oraÈ™ magnific din Olanda de Sud, renumit pentru cea mai veche universitate din ÈšÄƒrile de Jos È™i locul de naÈ™tere al pictorului legendar Rembrandt. Centrul oraÈ™ului este strÄƒbÄƒtut de canale idilice care formeazÄƒ a doua cea mai mare reÈ›ea de canale din È›arÄƒ dupÄƒ Amsterdam. Leiden oferÄƒ, de asemenea, muzee de primÄƒ clasÄƒ, cum ar fi Muzeul NaÈ›ional de AntichitÄƒÈ›i È™i frumoasa GrÄƒdinÄƒ BotanicÄƒ (Hortus botanicus), unde au fost plantate odatÄƒ primele lalele din È›arÄƒ.",
    en: "Leiden is a magnificent city in South Holland, famous for the oldest university in the Netherlands and as the birthplace of the legendary painter Rembrandt. The city center is crisscrossed by idyllic canals that form the country's second-largest canal network after Amsterdam. Leiden also offers top-class museums such as the National Museum of Antiquities and the beautiful Botanical Garden (Hortus botanicus), where the country's first tulips were planted."
  },
      descriptionAdvanced: {
    de: "Leiden ist eine pittoreske historische Stadt, die eng mit ihrer UniversitÃ¤t, der Ã¤ltesten der Niederlande, verbunden ist. GegrÃ¼ndet 1575 von Wilhelm von Oranien als Belohnung fÃ¼r den Widerstand gegen die Spanier, zog die UniversitÃ¤t brillante KÃ¶pfe aus ganz Europa an, darunter Descartes und Spinoza. Die Stadt ist durchzogen von malerischen KanÃ¤len, an denen prÃ¤chtige PatrizierhÃ¤user und die Ã¤ltesten botanischen GÃ¤rten des Landes (Hortus Botanicus) liegen. Leiden war zudem der Geburtsort des legendÃ¤ren Malers Rembrandt van Rijn, dessen frÃ¼he Jahre stark von der AtmosphÃ¤re dieser Gelehrtenstadt geprÃ¤gt waren. Geschichte K8: Leiden hielt 1574 einer monatelangen spanischen Belagerung stand. Warum wurden KanÃ¤le und Deiche geÃ¶ffnet, um die Belagerer zu vertreiben?",
    hu: "Leiden Hollandia egyik legfontosabb tÃ¶rtÃ©nelmi egyetemvÃ¡rosa. Itt alapÃ­totta OrÃ¡niai Vilmos 1575-ben az orszÃ¡g legrÃ©gebbi egyetemÃ©t, jutalmul a spanyol ostrom alatti hÅ‘sies helytÃ¡llÃ¡sÃ©rt. A vÃ¡ros szÅ±k csatornÃ¡ival, tÃ¶bb szÃ¡z Ã©ves Ã©pÃ¼leteivel Ã©s gazdag mÃºzeumi kÃ­nÃ¡latÃ¡val (mint a Rijksmuseum van Oudheden Ã©s a Naturalis) hÃ³dÃ­t. Leiden Rembrandt szÃ¼lÅ‘vÃ¡rosa is, ahol a mÅ±vÃ©sz az elsÅ‘ lÃ©pÃ©seit tette a festÃ©szet felÃ©. A vÃ¡ros tudomÃ¡nyos lÃ©gkÃ¶re olyan alakokat vonzott ide, mint Albert Einstein. TÃ¶rtÃ©nelem K8: MiÃ©rt volt stratÃ©giai jelentÅ‘sÃ©ge a leideni ostromnak a nyolcvanÃ©ves hÃ¡borÃº sorÃ¡n?",
    ro: "Leiden este unul dintre cele mai importante oraÈ™e universitare istorice din Olanda. Aici, Wilhelm de Orania a fondat cea mai veche universitate din È›arÄƒ Ã®n 1575, ca o recompensÄƒ pentru rezistenÈ›a eroicÄƒ din timpul asediului spaniol. OraÈ™ul captiveazÄƒ prin canalele sale Ã®nguste, clÄƒdirile vechi de secole È™i o ofertÄƒ bogatÄƒ de muzee (cum ar fi Rijksmuseum van Oudheden È™i Naturalis). Leiden este, de asemenea, locul de naÈ™tere al lui Rembrandt, unde artistul a fÄƒcut primii paÈ™i Ã®n picturÄƒ. Atmosfera È™tiinÈ›ificÄƒ a oraÈ™ului a atras figuri precum Albert Einstein. Istorie K8: De ce a avut asediul oraÈ™ului Leiden o importanÈ›Äƒ strategicÄƒ Ã®n RÄƒzboiul de Optzeci de Ani?",
    en: "Leiden is a picturesque historical city intimately connected to its university, the oldest in the Netherlands. Founded in 1575 by William of Orange as a reward for its resistance against the Spanish, the university attracted brilliant minds from across Europe, including Descartes and Spinoza. The city is traversed by scenic canals lined with grand patrician houses and the oldest botanical gardens in the country (Hortus Botanicus). Leiden was also the birthplace of the legendary painter Rembrandt van Rijn, whose early years were deeply influenced by the atmosphere of this scholarly city. History K8: Leiden withstood a month-long Spanish siege in 1574. Why were canals and dikes opened to drive away the besiegers?"
  },
    facts: {
    de: ["Geburtsort des weltberÃ¼hmten Malers Rembrandt van Rijn.","Beherbergt die Ã¤lteste UniversitÃ¤t der Niederlande (gegrÃ¼ndet 1575).","Im Hortus botanicus Leiden wurden die ersten Tulpen des Landes kultiviert.","Nach Amsterdam die meisten BrÃ¼cken und Grachten des Landes.","Das Rijksmuseum van Oudheden beherbergt einen echten Ã¤gyptischen Tempel.","Leiden widerstand 1574 erfolgreich einer spanischen Belagerung.","Bietet Gedichte in verschiedenen Sprachen an unzÃ¤hligen HauswÃ¤nden.","Naturalis ist ein hochmodernes Museum fÃ¼r BiodiversitÃ¤t."],
    hu: ["A vilÃ¡ghÃ­rÅ± festÅ‘, Rembrandt van Rijn szÃ¼lÅ‘helye.","Itt talÃ¡lhatÃ³ Hollandia legrÃ©gebbi egyeteme (alapÃ­tva: 1575).","A leideni Hortus botanicusban termesztettÃ©k az orszÃ¡g elsÅ‘ tulipÃ¡njait.","Amszterdam utÃ¡n itt van a legtÃ¶bb hÃ­d Ã©s csatorna az orszÃ¡gban.","A Rijksmuseum van Oudheden egy valÃ³di egyiptomi templomnak ad otthont.","Leiden 1574-ben sikeresen ellenÃ¡llt egy spanyol ostromnak.","KÃ¼lÃ¶nbÃ¶zÅ‘ nyelvÅ± versek talÃ¡lhatÃ³k szÃ¡mtalan hÃ¡zfalon.","A Naturalis egy rendkÃ­vÃ¼l modern biodiverzitÃ¡si mÃºzeum."],
    ro: ["Locul de naÈ™tere al celebrului pictor Rembrandt van Rijn.","GÄƒzduieÈ™te cea mai veche universitate din Olanda (fondatÄƒ Ã®n 1575).","Primele lalele din È›arÄƒ au fost cultivate Ã®n Hortus botanicus Leiden.","DupÄƒ Amsterdam, are cele mai multe poduri È™i canale din È›arÄƒ.","Rijksmuseum van Oudheden gÄƒzduieÈ™te un templu egiptean autentic.","Leiden a rezistat cu succes unui asediu spaniol Ã®n 1574.","PrezintÄƒ poezii Ã®n diferite limbi pe nenumÄƒraÈ›i pereÈ›i de case.","Naturalis este un muzeu de ultimÄƒ generaÈ›ie pentru biodiversitate."],
    en: ["Birthplace of the world-famous painter Rembrandt van Rijn.","Home to the oldest university in the Netherlands (founded in 1575).","The country's first tulips were cultivated in the Hortus botanicus Leiden.","After Amsterdam, has the most bridges and canals in the country.","The Rijksmuseum van Oudheden houses a real Egyptian temple.","Leiden successfully withstood a Spanish siege in 1574.","Features poems in various languages on countless house walls.","Naturalis is a state-of-the-art museum for biodiversity."]
  },
      factsAdvanced: {
    de: [
      "Die UniversitÃ¤t Leiden ist die Ã¤lteste UniversitÃ¤t der Niederlande und wurde 1575 gegrÃ¼ndet.",
      "Im Hortus Botanicus von Leiden wurden die ersten Tulpen in Westeuropa gepflanzt.",
      "Rembrandt van Rijn, einer der bedeutendsten KÃ¼nstler des Barock, wurde in Leiden geboren.",
      "An den AuÃŸenwÃ¤nden vieler GebÃ¤ude in Leiden sind Ã¼ber 100 weltberÃ¼hmte Gedichte in verschiedenen Sprachen aufgemalt."
    ],
    hu: ["A Leideni Egyetem botanikuskertje (Hortus Botanicus) az egyik legrÃ©gebbi a vilÃ¡gon, itt Ã¼ltettÃ©k az elsÅ‘ tulipÃ¡nokat EurÃ³pÃ¡ban.", "Amszterdam utÃ¡n Leiden rendelkezik a legtÃ¶bb hidat szÃ¡mlÃ¡lÃ³ csatornarendszerrel HollandiÃ¡ban.", "A vÃ¡ros falaira tÃ¶bb mint 100 hÃ­res verset festettek a vilÃ¡g kÃ¼lÃ¶nbÃ¶zÅ‘ nyelvein.", "Leidenben jÃ¶tt lÃ©tre az elsÅ‘ holland csillagvizsgÃ¡lÃ³ 1633-ban."],
    ro: [
      "GrÄƒdina botanicÄƒ a UniversitÄƒÈ›ii din Leiden (Hortus Botanicus) este una dintre cele mai vechi din lume; aici au fost plantate primele lalele din Europa.",
      "DupÄƒ Amsterdam, Leiden are sistemul de canale cu cele mai multe poduri din Olanda.",
      "Peste 100 de poezii celebre au fost pictate pe pereÈ›ii oraÈ™ului Ã®n diferite limbi ale lumii.",
      "Primul observator olandez a fost Ã®nfiinÈ›at la Leiden Ã®n 1633."
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
    de: "Delft ist eine historische Stadt in SÃ¼dholland, deren Name weltweit mit dem traditionellen blauen Porzellan, dem 'Delfter Blau', verbunden ist. Die Stadt bezaubert mit ihrem gut erhaltenen mittelalterlichen Zentrum, charmanten Grachten und engen Gassen. Zudem ist Delft eng mit der Geschichte des niederlÃ¤ndischen KÃ¶nigshauses und dem berÃ¼hmten Maler Johannes Vermeer verknÃ¼pft. Die Technische UniversitÃ¤t Delft gehÃ¶rt zu den renommiertesten der Welt.",
    hu: "Delft egy tÃ¶rtÃ©nelmi vÃ¡ros DÃ©l-HollandiÃ¡ban, amelynek neve vilÃ¡gszerte a hagyomÃ¡nyos kÃ©k porcelÃ¡nnal, a 'Delfti kÃ©kkel' forrt Ã¶ssze. A vÃ¡ros elbÅ±vÃ¶l a jÃ³l megÅ‘rzÃ¶tt kÃ¶zÃ©pkori kÃ¶zpontjÃ¡val, bÃ¡jos csatornÃ¡ival Ã©s szÅ±k utcÃ¡ival. EzenkÃ­vÃ¼l Delft szorosan kÃ¶tÅ‘dik a holland kirÃ¡lyi csalÃ¡d tÃ¶rtÃ©netÃ©hez Ã©s a hÃ­res festÅ‘hÃ¶z, Johannes Vermeerhez. A Delfti MÅ±szaki Egyetem a vilÃ¡g legelismertebbjei kÃ¶zÃ© tartozik.",
    ro: "Delft este un oraÈ™ istoric din Olanda de Sud al cÄƒrui nume este asociat la nivel mondial cu porÈ›elanul tradiÈ›ional albastru, 'Albastru de Delft'. OraÈ™ul Ã®ncÃ¢ntÄƒ cu centrul sÄƒu medieval bine conservat, canale fermecÄƒtoare È™i strÄƒzi Ã®nguste. ÃŽn plus, Delft este strÃ¢ns legat de istoria familiei regale olandeze È™i a faimosului pictor Johannes Vermeer. Universitatea de Tehnologie din Delft este una dintre cele mai renumite din lume.",
    en: "Delft is a historic city in South Holland whose name is worldwide associated with the traditional blue porcelain, 'Delft Blue'. The city enchants with its well-preserved medieval center, charming canals, and narrow streets. Furthermore, Delft is closely linked to the history of the Dutch royal family and the famous painter Johannes Vermeer. Delft University of Technology is one of the most renowned in the world."
  },
      descriptionAdvanced: {
    de: "Delft ist weltweit bekannt fÃ¼r sein ikonisches blau-weiÃŸes Porzellan, das Delfter Blau (Delfts Blauw), das im 17. Jahrhundert als Imitation chinesischen Porzellans entstand. Die Stadt hat ein auÃŸergewÃ¶hnlich gut erhaltenes historisches Zentrum mit von BÃ¤umen gesÃ¤umten Grachten, alten Kirchen und herrschaftlichen KaufmannshÃ¤usern. Delft hat auch eine tiefe Verbindung zum niederlÃ¤ndischen KÃ¶nigshaus; Wilhelm von Oranien, der 'Vater des Vaterlandes', residierte hier und wurde 1584 im Prinsenhof ermordet, woraufhin die Stadt zur traditionellen BegrÃ¤bnisstÃ¤tte der kÃ¶niglichen Familie wurde. Es ist auch die Geburtsstadt des Meisters des Lichts, Johannes Vermeer. Kunst K7: Johannes Vermeer malte 'Das MÃ¤dchen mit dem PerlenohrgehÃ¤nge'. Warum wurden seine Bilder fÃ¼r ihre einzigartige Darstellung des Lichts berÃ¼hmt?",
    hu: "Delft a vilÃ¡g minden tÃ¡jÃ¡n ismert a kÃ©k-fehÃ©r porcelÃ¡njÃ¡rÃ³l (Delfts Blauw), amely a 17. szÃ¡zadban jÃ¶tt lÃ©tre a kÃ­nai porcelÃ¡nok helyi alternatÃ­vÃ¡jakÃ©nt. A festÅ‘i szÃ©psÃ©gÅ±, fÃ¡kkal szegÃ©lyezett csatornÃ¡kkal Ã©s Å‘si hidakkal rendelkezÅ‘ vÃ¡ros Johannes Vermeer festÅ‘ szÃ¼lÅ‘helye Ã©s otthona volt. Delft emellett kÃ¼lÃ¶nleges tÃ¶rtÃ©nelmi jelentÅ‘sÃ©ggel bÃ­r a kirÃ¡lyi csalÃ¡d szÃ¡mÃ¡ra: az Ãšj Templom (Nieuwe Kerk) ad otthont az OrÃ¡niai-Nassau-hÃ¡z kriptÃ¡jÃ¡nak, ahol OrÃ¡niai Vilmos (a Haza Atyja) Ã©s a kÃ©sÅ‘bbi uralkodÃ³k is nyugszanak. TÃ¶rtÃ©nelem K6: MiÃ©rt prÃ³bÃ¡ltÃ¡k a delfti fazekasok utÃ¡nozni a 17. szÃ¡zadi kÃ­nai porcelÃ¡nokat?",
    ro: "Delft este cunoscut Ã®n Ã®ntreaga lume pentru porÈ›elanul sÄƒu albastru cu alb (Delfts Blauw), care a apÄƒrut Ã®n secolul al XVII-lea ca o alternativÄƒ localÄƒ la porÈ›elanul chinezesc. OraÈ™ul pitoresc, cu canale flancate de copaci È™i poduri antice, a fost locul de naÈ™tere È™i casa pictorului Johannes Vermeer. De asemenea, Delft are o semnificaÈ›ie istoricÄƒ specialÄƒ pentru familia regalÄƒ: Biserica NouÄƒ (Nieuwe Kerk) gÄƒzduieÈ™te cripta Casei de Orania-Nassau, unde se odihnesc Wilhelm de Orania (PÄƒrintele Patriei) È™i monarhii ulteriori. Istorie K6: De ce olarii din Delft au Ã®ncercat sÄƒ imite porÈ›elanul chinezesc din secolul al XVII-lea?",
    en: "Delft is globally known for its iconic blue-and-white pottery, Delft Blue (Delfts Blauw), which originated in the 17th century as an imitation of Chinese porcelain. The city boasts an exceptionally well-preserved historical center with tree-lined canals, old churches, and stately merchant houses. Delft also has a deep connection to the Dutch royal family; William of Orange, the 'Father of the Fatherland', resided here and was assassinated in the Prinsenhof in 1584, after which the city became the traditional burial place for the royal family. It is also the birthplace of the master of light, Johannes Vermeer. Art K7: Johannes Vermeer painted 'Girl with a Pearl Earring'. Why did his paintings become famous for their unique depiction of light?"
  },
    facts: {
    de: ["Weltbekannt fÃ¼r das 'Delfter Blau' (Delfts Blauw) Porzellan.","Johannes Vermeer, der Maler des MÃ¤dchens mit dem PerlenohrgehÃ¤nge, lebte hier.","Die Nieuwe Kerk (Neue Kirche) ist die GrabstÃ¤tte der kÃ¶niglichen Familie.","Wilhelm von Oranien (Willem de Zwijger) wurde im Prinsenhof ermordet.","Beherbergt die grÃ¶ÃŸte Technische UniversitÃ¤t der Niederlande.","VerfÃ¼gt Ã¼ber ein charmantes, historisches Grachtensystem.","Der groÃŸe Marktplatz zwischen Rathaus und Neuer Kirche ist beeindruckend.","Delft hat noch immer aktive, traditionelle Keramikmanufakturen."],
    hu: ["VilÃ¡ghÃ­rÅ± a 'Delfti kÃ©k' (Delfts Blauw) porcelÃ¡njÃ¡rÃ³l.","Itt Ã©lt Johannes Vermeer, a LeÃ¡ny gyÃ¶ngyfÃ¼lbevalÃ³val cÃ­mÅ± festmÃ©ny alkotÃ³ja.","Az Ãšj Templom (Nieuwe Kerk) a kirÃ¡lyi csalÃ¡d temetkezÃ©si helye.","OrÃ¡niai Vilmost (Willem de Zwijger) a Prinsenhofban gyilkoltÃ¡k meg.","Hollandia legnagyobb mÅ±szaki egyetemÃ©nek ad otthont.","BÃ¡jos, tÃ¶rtÃ©nelmi csatornarendszerrel rendelkezik.","A vÃ¡roshÃ¡za Ã©s az Ãšj Templom kÃ¶zÃ¶tti nagy piactÃ©r lenyÅ±gÃ¶zÅ‘.","Delftben mÃ©g mindig mÅ±kÃ¶dnek hagyomÃ¡nyos kerÃ¡mia manufaktÃºrÃ¡k."],
    ro: ["Renumit Ã®n Ã®ntreaga lume pentru porÈ›elanul 'Albastru de Delft' (Delfts Blauw).","Johannes Vermeer, pictorul Fetei cu cercel de perlÄƒ, a locuit aici.","Biserica NouÄƒ (Nieuwe Kerk) este locul de Ã®nmormÃ¢ntare al familiei regale.","William de Orania (Willem de Zwijger) a fost asasinat Ã®n Prinsenhof.","GÄƒzduieÈ™te cea mai mare Universitate TehnicÄƒ din Olanda.","Are un sistem istoric fermecÄƒtor de canale.","PiaÈ›a mare dintre primÄƒrie È™i Biserica NouÄƒ este impresionantÄƒ.","Delft are Ã®ncÄƒ ateliere tradiÈ›ionale de ceramicÄƒ active."],
    en: ["World-famous for the 'Delft Blue' (Delfts Blauw) porcelain.","Johannes Vermeer, the painter of the Girl with a Pearl Earring, lived here.","The New Church (Nieuwe Kerk) is the burial place of the royal family.","William of Orange (Willem de Zwijger) was assassinated in the Prinsenhof.","Home to the largest Technical University in the Netherlands.","Features a charming, historic canal system.","The large market square between the town hall and the New Church is impressive.","Delft still has active, traditional ceramics manufactories."]
  },
      factsAdvanced: {
    de: [
      "In der Nieuwe Kerk (Neuen Kirche) in Delft befindet sich die kÃ¶nigliche Krypta des Hauses Oranien-Nassau.",
      "Die Technische UniversitÃ¤t Delft (TU Delft) ist die Ã¤lteste und grÃ¶ÃŸte technische UniversitÃ¤t des Landes.",
      "Von den ursprÃ¼nglich zahlreichen Fayence-Fabriken existiert heute nur noch die 'Royal Delft', die traditionelles handbemaltes Porzellan herstellt.",
      "Johannes Vermeer verbrachte sein gesamtes Leben in Delft und hielt die Stadt in seinem berÃ¼hmten GemÃ¤lde 'Ansicht von Delft' fest."
    ],
    hu: ["A KirÃ¡lyi Delft (Royal Delft) az egyetlen fennmaradt 17. szÃ¡zadi porcelÃ¡ngyÃ¡r a vÃ¡rosban.", "A Delfti MÅ±szaki Egyetem (TU Delft) Hollandia legnagyobb Ã©s legrÃ©gebbi technolÃ³giai egyeteme.", "OrÃ¡niai Vilmost a delfti Prinsenhofban gyilkoltÃ¡k meg 1584-ben; a golyÃ³nyomok ma is lÃ¡thatÃ³k.", "Vermeer hÃ­res, 'Delft lÃ¡tkÃ©pe' cÃ­mÅ± festmÃ©nye a holland vÃ¡roskÃ©pfestÃ©szet csÃºcspontja."],
    ro: [
      "Royal Delft este singura fabricÄƒ de porÈ›elan din secolul al XVII-lea rÄƒmasÄƒ Ã®n oraÈ™.",
      "Universitatea de Tehnologie din Delft (TU Delft) este cea mai mare È™i cea mai veche universitate de tehnologie din Olanda.",
      "Wilhelm de Orania a fost asasinat Ã®n Prinsenhof din Delft Ã®n 1584; urmele de gloanÈ›e sunt vizibile È™i astÄƒzi.",
      "Cea mai faimoasÄƒ picturÄƒ a lui Vermeer, 'Vedere din Delft', este punctul culminant al picturii peisajelor urbane olandeze."
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
    de: "Maastricht, gelegen im sÃ¼dlichsten Zipfel der Niederlande, ist eine der Ã¤ltesten StÃ¤dte des Landes und besticht durch ein spÃ¼rbar sÃ¼deuropÃ¤isches Flair. Die Stadt wird durch die Maas in zwei HÃ¤lften geteilt und bietet historische PlÃ¤tze, uralte Basiliken und exklusive Boutiquen. Internationale Bekanntheit erlangte sie durch den Vertrag von Maastricht 1992, der die EuropÃ¤ische Union begrÃ¼ndete. Unterirdische Grotten runden das Angebot ab.",
    hu: "Maastricht, amely Hollandia legdÃ©lebbi csÃ¼cskÃ©ben talÃ¡lhatÃ³, az orszÃ¡g egyik legrÃ©gebbi vÃ¡rosa, Ã©s Ã©rezhetÅ‘en dÃ©l-eurÃ³pai hangulatÃ¡val hÃ³dÃ­t. A vÃ¡rost a Maas folyÃ³ osztja kÃ©t rÃ©szre, Ã©s tÃ¶rtÃ©nelmi tereket, Å‘si bazilikÃ¡kat Ã©s exkluzÃ­v butikokat kÃ­nÃ¡l. NemzetkÃ¶zi ismertsÃ©gÃ©t az 1992-es maastrichti szerzÅ‘dÃ©s rÃ©vÃ©n szerezte, amely megalapÃ­totta az EurÃ³pai UniÃ³t. A fÃ¶ldalatti barlangok teszik teljessÃ© a kÃ­nÃ¡latot.",
    ro: "Maastricht, situat Ã®n extremitatea sudicÄƒ a Olandei, este unul dintre cele mai vechi oraÈ™e din È›arÄƒ È™i captiveazÄƒ cu o atmosferÄƒ sud-europeanÄƒ vizibilÄƒ. OraÈ™ul este Ã®mpÄƒrÈ›it Ã®n douÄƒ de rÃ¢ul Maas È™i oferÄƒ pieÈ›e istorice, bazilici antice È™i buticuri exclusive. A cÃ¢È™tigat recunoaÈ™tere internaÈ›ionalÄƒ prin Tratatul de la Maastricht din 1992, care a fondat Uniunea EuropeanÄƒ. PeÈ™terile subterane completeazÄƒ oferta.",
    en: "Maastricht, located in the southernmost tip of the Netherlands, is one of the oldest cities in the country and captivates with a noticeable southern European flair. The city is divided in half by the Meuse River and offers historic squares, ancient basilicas, and exclusive boutiques. It gained international fame through the Maastricht Treaty of 1992, which founded the European Union. Underground caves complete the offer."
  },
      descriptionAdvanced: {
    de: "Maastricht ist eine der Ã¤ltesten und charmantesten StÃ¤dte der Niederlande, gelegen an der Maas im tiefsten SÃ¼den der Provinz Limburg. Die Stadt hat einen unverwechselbaren internationalen und fast sÃ¼dlÃ¤ndischen Flair, geprÃ¤gt von ihrer NÃ¤he zu Belgien und Deutschland. Maastricht blickt auf eine rÃ¶mische Vergangenheit zurÃ¼ck, wovon antike Ruinen zeugen, und besticht durch kopfsteingepflasterte StraÃŸen, majestÃ¤tische romanische Basiliken wie Sint Servaas und alte Befestigungsanlagen. Weltweite politische Bedeutung erlangte die Stadt 1992 durch die Unterzeichnung des Vertrages von Maastricht, der die EuropÃ¤ische Union begrÃ¼ndete. Geschichte K8: Durch den Vertrag von Maastricht wurde die EU gegrÃ¼ndet und eine gemeinsame WÃ¤hrung geplant. Welchen Vorteil hat eine gemeinsame WÃ¤hrung wie der Euro fÃ¼r den Handel?",
    hu: "Maastricht Hollandia legdÃ©lebbi fekvÃ©sÅ±, kÃ¶zÃ©pkori hangulatÃº vÃ¡rosa, amely a Maas folyÃ³ partjÃ¡n Ã©pÃ¼lt fel. Mivel a rÃ³maiak alapÃ­tottÃ¡k katonai bÃ¡ziskÃ©nt, egyike az orszÃ¡g kÃ©t legrÃ©gebbi vÃ¡rosÃ¡nak (Nijmegen mellett). TÃ¶rtÃ©nelmi belvÃ¡rosa szÅ±k utcÃ¡cskÃ¡kat, rÃ©gi templomokat Ã©s megmaradt vÃ¡rosfalakat rejt. A modern tÃ¶rtÃ©nelemben a vÃ¡ros 1992-ben szerzett globÃ¡lis ismertsÃ©get a Maastrichti SzerzÅ‘dÃ©s alÃ¡Ã­rÃ¡sÃ¡val, amely lÃ©trehozta az EurÃ³pai UniÃ³t Ã©s megnyitotta az utat az eurÃ³ bevezetÃ©se elÅ‘tt. TÃ¶rtÃ©nelem K8: Hogyan befolyÃ¡solta a Maastrichti SzerzÅ‘dÃ©s az eurÃ³pai orszÃ¡gok gazdasÃ¡gi egyÃ¼ttmÅ±kÃ¶dÃ©sÃ©t?",
    ro: "Maastricht este cel mai sudic oraÈ™ cu atmosferÄƒ medievalÄƒ din Olanda, construit pe malul rÃ¢ului Maas. AvÃ¢nd Ã®n vedere cÄƒ a fost fondat de romani ca bazÄƒ militarÄƒ, este unul dintre cele mai vechi douÄƒ oraÈ™e din È›arÄƒ (alÄƒturi de Nijmegen). Centrul sÄƒu istoric ascunde strÄƒzi Ã®nguste, biserici vechi È™i ziduri de oraÈ™ conservate. ÃŽn istoria modernÄƒ, oraÈ™ul a cÃ¢È™tigat o recunoaÈ™tere globalÄƒ Ã®n 1992 prin semnarea Tratatului de la Maastricht, care a creat Uniunea EuropeanÄƒ È™i a deschis calea pentru introducerea monedei euro. Istorie K8: Cum a influenÈ›at Tratatul de la Maastricht cooperarea economicÄƒ a È›Äƒrilor europene?",
    en: "Maastricht is one of the oldest and most charming cities in the Netherlands, located on the Maas river in the deep south of the province of Limburg. The city has a distinct international and almost southern European flair, influenced by its proximity to Belgium and Germany. Maastricht looks back on a Roman past, evidenced by ancient ruins, and captivates with cobblestone streets, majestic Romanesque basilicas like Sint Servaas, and old fortifications. The city gained global political significance in 1992 with the signing of the Maastricht Treaty, which founded the European Union. History K8: The Maastricht Treaty founded the EU and planned a common currency. What is the advantage of a common currency like the Euro for trade?"
  },
    facts: {
    de: ["GehÃ¶rt zu den Ã¤ltesten Siedlungen der Niederlande (RÃ¶mischer Ursprung).","Der Vrijthof ist der berÃ¼hmteste und belebteste Platz der Stadt.","GrÃ¼ndungsort der modernen EU durch den Vertrag von Maastricht (1992).","Die St.-Servatius-BrÃ¼cke gilt als die Ã¤lteste BrÃ¼cke des Landes.","Das Tunnelsystem des Sint-Pietersberg (MerklhÃ¶hlen) ist ein Labyrinth.","AusgeprÃ¤gter 'burgundischer' Lebensstil mit exzellenter Gastronomie.","Die dominikanische Buchhandlung gilt als eine der schÃ¶nsten der Welt.","Das TEFAF Art Festival ist eine weltweit fÃ¼hrende Kunstmesse."],
    hu: ["Hollandia legrÃ©gebbi telepÃ¼lÃ©sei kÃ¶zÃ© tartozik (rÃ³mai eredetÅ±).","A Vrijthof a vÃ¡ros leghÃ­resebb Ã©s legforgalmasabb tere.","A modern EU alapÃ­tÃ³ helyszÃ­ne az 1992-es maastrichti szerzÅ‘dÃ©s rÃ©vÃ©n.","A Szent SzervÃ¡cius hÃ­d az orszÃ¡g legrÃ©gebbi hÃ­djÃ¡nak szÃ¡mÃ­t.","A Sint-Pietersberg (MÃ¡rgabarlangok) alagÃºtrendszere egy labirintus.","Kifejezetten 'burgundi' Ã©letmÃ³d kivÃ¡lÃ³ gasztronÃ³miÃ¡val.","A domonkos kÃ¶nyvesboltot a vilÃ¡g egyik legszebbjekÃ©nt tartjÃ¡k szÃ¡mon.","A TEFAF Art Festival a vilÃ¡g egyik vezetÅ‘ mÅ±vÃ©szeti vÃ¡sÃ¡ra."],
    ro: ["Una dintre cele mai vechi aÈ™ezÄƒri din Olanda (origine romanÄƒ).","Vrijthof este cea mai faimoasÄƒ È™i aglomeratÄƒ piaÈ›Äƒ a oraÈ™ului.","Locul de fondare al UE moderne prin Tratatul de la Maastricht (1992).","Podul Sf. Servatius este considerat cel mai vechi pod din È›arÄƒ.","Sistemul de tuneluri Sint-Pietersberg (peÈ™teri de marnÄƒ) este un labirint.","Stil de viaÈ›Äƒ pronunÈ›at 'burgund' cu o gastronomie excelentÄƒ.","LibrÄƒria dominicanÄƒ este consideratÄƒ una dintre cele mai frumoase din lume.","TEFAF Art Festival este un tÃ¢rg de artÄƒ de top la nivel mondial."],
    en: ["One of the oldest settlements in the Netherlands (Roman origin).","The Vrijthof is the most famous and busiest square in the city.","Founding place of the modern EU through the Maastricht Treaty (1992).","St. Servatius Bridge is considered the oldest bridge in the country.","The Sint-Pietersberg tunnel system (marl caves) is a labyrinth.","Pronounced 'Burgundian' lifestyle with excellent gastronomy.","The Dominican bookstore is considered one of the most beautiful in the world.","The TEFAF Art Festival is a leading global art fair."]
  },
      factsAdvanced: {
    de: [
      "Die Sint-Servaas-Basilika am Vrijthof in Maastricht gilt als die Ã¤lteste noch erhaltene Kirche der Niederlande.",
      "Unter der Stadt erstreckt sich ein riesiges Netzwerk von unterirdischen KalksteinhÃ¶hlen (Sint-Pietersberg), in denen Kunstwerke versteckt wurden.",
      "Der Vertrag zur GrÃ¼ndung der EuropÃ¤ischen Union wurde 1992 im RegierungsgebÃ¤ude der Provinz in Maastricht unterzeichnet.",
      "Maastricht war bereits um das Jahr 50 v. Chr. eine rÃ¶mische Siedlung mit einer BrÃ¼cke Ã¼ber die Maas."
    ],
    hu: ["A Sint-Servaasbasiliek a legrÃ©gebbi fennmaradt templom HollandiÃ¡ban.", "A vÃ¡rost egy kiterjedt mÃ©szkÅ‘barlang-rendszer Ã¶vezi (Sint-Pietersberg), amelyet az Ã©vszÃ¡zadok sorÃ¡n bÃ¡nyÃ¡szat hozott lÃ©tre.", "Maastrichtban Ã©vente megrendezik a TEFAF-ot, a vilÃ¡g egyik legfontosabb mÅ±vÃ©szeti Ã©s rÃ©gisÃ©gvÃ¡sÃ¡rÃ¡t.", "A vÃ¡ros egyedi kulinÃ¡ris kultÃºrÃ¡val rendelkezik, amely erÅ‘sen belga Ã©s francia hatÃ¡sokat mutat."],
    ro: [
      "Basilica SfÃ¢ntul Servatius este cea mai veche bisericÄƒ supravieÈ›uitoare din Olanda.",
      "OraÈ™ul este Ã®nconjurat de un sistem extins de peÈ™teri de calcar (Sint-Pietersberg), creat prin minerit de-a lungul secolelor.",
      "Maastricht gÄƒzduieÈ™te anual TEFAF, unul dintre cele mai importante tÃ¢rguri de artÄƒ È™i antichitÄƒÈ›i din lume.",
      "OraÈ™ul are o culturÄƒ culinarÄƒ unicÄƒ, cu puternice influenÈ›e belgiene È™i franceze."
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
    name: { de: "Anne Frank Haus", hu: "Anne Frank HÃ¡z", ro: "Casa Anne Frank", en: "Anne Frank House" },
    image: "/geo-images/netherlands/anne-frank-house.webp",
  description: {
    de: "Das Anne Frank Haus in Amsterdam ist eines der bedeutendsten historischen Wahrzeichen der Niederlande. Es ist das GebÃ¤ude, in dem sich das jÃ¼dische MÃ¤dchen Anne Frank und ihre Familie wÃ¤hrend des Zweiten Weltkriegs Ã¼ber zwei Jahre lang vor der nationalsozialistischen Verfolgung versteckten. In diesem sogenannten 'Hinterhaus' schrieb Anne ihr weltberÃ¼hmtes Tagebuch. Heute ist das Haus ein Museum, das tiefe und bewegende Einblicke in ihr Leben und den Holocaust gibt.",
    hu: "Az amszterdami Anne Frank HÃ¡z Hollandia egyik legjelentÅ‘sebb tÃ¶rtÃ©nelmi nevezetessÃ©ge. Ez az az Ã©pÃ¼let, ahol a zsidÃ³ szÃ¡rmazÃ¡sÃº kislÃ¡ny, Anne Frank Ã©s csalÃ¡dja a mÃ¡sodik vilÃ¡ghÃ¡borÃº alatt tÃ¶bb mint kÃ©t Ã©vig rejtÅ‘zÃ¶tt a nÃ¡ci Ã¼ldÃ¶ztetÃ©s elÅ‘l. Ebben az Ãºgynevezett 'hÃ¡tsÃ³ traktusban' Ã­rta Anne a vilÃ¡ghÃ­rÅ± naplÃ³jÃ¡t. Ma a hÃ¡z egy mÃºzeum, amely mÃ©ly Ã©s meghatÃ³ bepillantÃ¡st nyÃºjt Ã©letÃ©be Ã©s a holokauszt tÃ¶rtÃ©netÃ©be.",
    ro: "Casa Anne Frank din Amsterdam este unul dintre cele mai importante repere istorice din ÈšÄƒrile de Jos. Este clÄƒdirea Ã®n care tÃ¢nÄƒra evreicÄƒ Anne Frank È™i familia ei s-au ascuns de persecuÈ›ia nazistÄƒ timp de peste doi ani Ã®n timpul celui de-al Doilea RÄƒzboi Mondial. ÃŽn aceastÄƒ aÈ™a-numitÄƒ 'AnexÄƒ SecretÄƒ' Anne a scris jurnalul ei de renume mondial. AstÄƒzi casa este un muzeu care oferÄƒ informaÈ›ii profunde È™i emoÈ›ionante despre viaÈ›a ei È™i despre Holocaust.",
    en: "The Anne Frank House in Amsterdam is one of the most important historic landmarks in the Netherlands. It is the building where the Jewish girl Anne Frank and her family hid from Nazi persecution for over two years during World War II. In this so-called 'Secret Annex', Anne wrote her world-famous diary. Today the house is a museum that provides deep and moving insights into her life and the Holocaust."
  },
      descriptionAdvanced: {
    de: "Das Anne-Frank-Haus an der Prinsengracht in Amsterdam ist eines der bewegendsten und wichtigsten historischen Museen Europas. Es war das Versteck, in dem das jÃ¼dische MÃ¤dchen Anne Frank und ihre Familie sich Ã¼ber zwei Jahre lang vor der Verfolgung durch die Nationalsozialisten verborgen hielten. Im sogenannten 'Hinterhaus', das durch ein schwenkbares BÃ¼cherregal getarnt war, schrieb Anne ihr weltberÃ¼hmtes Tagebuch. Das Museum bewahrt die bedrÃ¼ckende AtmosphÃ¤re der dunklen RÃ¤ume und erinnert eindringlich an die Schrecken des Holocaust und die Wichtigkeit von Toleranz. Geschichte K8: Anne Frank versteckte sich vor der Gestapo. Warum verfolgte das nationalsozialistische Regime in Deutschland und den besetzten Gebieten jÃ¼dische BÃ¼rger?",
    hu: "Az Anne Frank HÃ¡z Amszterdam kÃ¶zpontjÃ¡ban talÃ¡lhatÃ³ mÃºzeum, amely az emberi kitartÃ¡s Ã©s a tÃ¶rtÃ©nelem egyik legsÃ¶tÃ©tebb korszakÃ¡nak emlÃ©kmÅ±ve. Az Ã©pÃ¼let hÃ¡tsÃ³ traktusÃ¡ban (a HÃ¡tsÃ³ Traktus) rejtÅ‘zÃ¶tt el Anne Frank Ã©s csalÃ¡dja, valamint nÃ©gy mÃ¡sik zsidÃ³ ember tÃ¶bb mint kÃ©t Ã©vig a nÃ¡ci megszÃ¡llÃ¡s alatt a mÃ¡sodik vilÃ¡ghÃ¡borÃºban. Itt Ã­rta meg Anne vilÃ¡ghÃ­rÅ±vÃ© vÃ¡lt naplÃ³jÃ¡t, amely a remÃ©ny, a fÃ©lelem Ã©s a fiatalsÃ¡g megrendÃ­tÅ‘ krÃ³nikÃ¡ja. A mÃºzeum az eredeti rejtekhelyet Ã©s az Ã¼ldÃ¶ztetÃ©s dokumentumait mutatja be. TÃ¶rtÃ©nelem K8: MiÃ©rt dÃ¶ntÃ¶ttek Ãºgy a csalÃ¡dok a mÃ¡sodik vilÃ¡ghÃ¡borÃº alatt, hogy titkos rejtekhelyeken hÃºzzÃ¡k meg magukat?",
    ro: "Casa Anne Frank, un muzeu din centrul Amsterdamului, este un monument al perseverenÈ›ei umane È™i al uneia dintre cele mai Ã®ntunecate epoci ale istoriei. ÃŽn secÈ›iunea din spate a clÄƒdirii (Anexa SecretÄƒ), Anne Frank È™i familia ei, Ã®mpreunÄƒ cu alte patru persoane evreieÈ™ti, s-au ascuns timp de mai bine de doi ani Ã®n timpul ocupaÈ›iei naziste Ã®n al Doilea RÄƒzboi Mondial. Aici a scris Anne jurnalul ei devenit celebru Ã®n Ã®ntreaga lume, o cronicÄƒ emoÈ›ionantÄƒ a speranÈ›ei, fricii È™i tinereÈ›ii. Muzeul expune ascunzÄƒtoarea originalÄƒ È™i documente despre persecuÈ›ie. Istorie K8: De ce familiile au decis sÄƒ se refugieze Ã®n ascunzÄƒtori secrete Ã®n timpul celui de-al Doilea RÄƒzboi Mondial?",
    en: "The Anne Frank House on the Prinsengracht in Amsterdam is one of Europe's most moving and important historical museums. It was the hiding place where the Jewish girl Anne Frank and her family concealed themselves from Nazi persecution for over two years. In the so-called 'Secret Annex', disguised by a movable bookcase, Anne wrote her world-famous diary. The museum preserves the oppressive atmosphere of the dark rooms and serves as a poignant reminder of the horrors of the Holocaust and the importance of tolerance. History K8: Anne Frank hid from the Gestapo. Why did the Nazi regime in Germany and the occupied territories persecute Jewish citizens?"
  },
    facts: {
    de: ["Das Versteck befand sich im 'Achterhuis' (Hinterhaus) an der Prinsengracht.","Der Zugang war durch ein drehbares BÃ¼cherregal getarnt.","Das Original-Tagebuch von Anne Frank ist hier ausgestellt.","ErÃ¶ffnete 1960 als Museum fÃ¼r die Ã–ffentlichkeit.","EmpfÃ¤ngt jÃ¤hrlich Ã¼ber eine Million Besucher aus aller Welt.","Soll die Erinnerung an die Opfer des Holocaust wachhalten.","Die Zimmer sind heute unmÃ¶bliert, wie von Otto Frank gewÃ¼nscht.","Ein emotionaler Rundgang zeigt die Enge und Angst der Versteckten."],
    hu: ["A bÃºvÃ³hely a Prinsengrachton talÃ¡lhatÃ³ 'Achterhuis' (HÃ¡tsÃ³ traktus) volt.","A bejÃ¡ratot egy forgathatÃ³ kÃ¶nyvespolc Ã¡lcÃ¡zta.","Anne Frank eredeti naplÃ³ja itt van kiÃ¡llÃ­tva.","1960-ban nyÃ­lt meg mÃºzeumkÃ©nt a nagykÃ¶zÃ¶nsÃ©g elÅ‘tt.","Ã‰vente tÃ¶bb mint egymilliÃ³ lÃ¡togatÃ³t fogad a vilÃ¡g minden tÃ¡jÃ¡rÃ³l.","CÃ©lja, hogy Ã©bren tartsa a holokauszt Ã¡ldozatainak emlÃ©kÃ©t.","A szobÃ¡k ma bÃºtorozatlanok, ahogy Otto Frank kÃ­vÃ¡nta.","Ã‰rzelmes sÃ©ta mutatja be a rejtÅ‘zkÃ¶dÅ‘k szÅ±kÃ¶s helyzetÃ©t Ã©s fÃ©lelmeit."],
    ro: ["AscunzÄƒtoarea era Ã®n 'Achterhuis' (Anexa SecretÄƒ) pe Prinsengracht.","Accesul era camuflat printr-o bibliotecÄƒ rotativÄƒ.","Jurnalul original al Annei Frank este expus aici.","S-a deschis publicului ca muzeu Ã®n 1960.","PrimeÈ™te anual peste un milion de vizitatori din Ã®ntreaga lume.","Destinat sÄƒ pÄƒstreze vie amintirea victimelor Holocaustului.","Camerele sunt astÄƒzi nemobilate, aÈ™a cum a dorit Otto Frank.","Un tur emoÈ›ionant aratÄƒ izolarea È™i frica celor ascunÈ™i."],
    en: ["The hiding place was in the 'Achterhuis' (Secret Annex) on the Prinsengracht.","The entrance was camouflaged by a revolving bookcase.","The original diary of Anne Frank is exhibited here.","Opened to the public as a museum in 1960.","Receives over a million visitors from all over the world annually.","Intended to keep the memory of the victims of the Holocaust alive.","The rooms are unfurnished today, as Otto Frank wished.","An emotional tour shows the confinement and fear of those in hiding."]
  },
      factsAdvanced: {
    de: [
      "Das Anne-Frank-Haus wurde 1960 als Museum fÃ¼r die Ã–ffentlichkeit zugÃ¤nglich gemacht, um einen Abriss zu verhindern.",
      "Anne Franks Tagebuch, das sie im Hinterhaus schrieb, wurde in Ã¼ber 70 Sprachen Ã¼bersetzt.",
      "Die Familie Frank versteckte sich vom 6. Juli 1942 bis zu ihrer Entdeckung am 4. August 1944 in den RÃ¤umlichkeiten.",
      "Otto Frank, Annes Vater, war der einzige der acht Untergetauchten, der die Konzentrationslager Ã¼berlebte."
    ],
    hu: ["A rejtekhely bejÃ¡ratÃ¡t egy forgathatÃ³ kÃ¶nyvespolc rejtette el az irodÃ¡ban.", "A naplÃ³t Anne Frank apja, Otto Frank â€“ a csalÃ¡d egyetlen tÃºlÃ©lÅ‘je â€“ adta ki 1947-ben.", "A mÃºzeumot 1960-ban nyitottÃ¡k meg a nagykÃ¶zÃ¶nsÃ©g elÅ‘tt a lebontÃ¡stÃ³l megmentett Ã©pÃ¼letben.", "A naplÃ³t tÃ¶bb mint 70 nyelvre fordÃ­tottÃ¡k le, Ã©s a vilÃ¡girodalom egyik legolvasottabb mÅ±ve."],
    ro: [
      "Intrarea Ã®n ascunzÄƒtoare era camuflatÄƒ de o bibliotecÄƒ rotativÄƒ din birou.",
      "Jurnalul a fost publicat Ã®n 1947 de tatÄƒl Annei Frank, Otto Frank, singurul supravieÈ›uitor al familiei.",
      "Muzeul a fost deschis publicului Ã®n 1960 Ã®n clÄƒdirea salvatÄƒ de la demolare.",
      "Jurnalul a fost tradus Ã®n peste 70 de limbi È™i este una dintre cele mai citite opere din literatura universalÄƒ."
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
    de: "Das Rijksmuseum in Amsterdam ist das niederlÃ¤ndische Nationalmuseum und eines der bedeutendsten Kunstmuseen der Welt. Es beherbergt eine gigantische Sammlung von Ã¼ber einer Million Objekten, die die Geschichte der Niederlande vom Mittelalter bis ins 20. Jahrhundert abdecken. Das absolute HerzstÃ¼ck des Museums ist die Ehrengalerie, in der weltberÃ¼hmte Meisterwerke des niederlÃ¤ndischen Goldenen Zeitalters prÃ¤sentiert werden, allen voran Rembrandts monumentales GemÃ¤lde 'Die Nachtwache'.",
    hu: "Az amszterdami Rijksmuseum a holland nemzeti mÃºzeum Ã©s a vilÃ¡g egyik legjelentÅ‘sebb mÅ±vÃ©szeti mÃºzeuma. TÃ¶bb mint egymilliÃ³ tÃ¡rgybÃ³l Ã¡llÃ³ gigantikus gyÅ±jtemÃ©nynek ad otthont, amely Hollandia tÃ¶rtÃ©nelmÃ©t mutatja be a kÃ¶zÃ©pkortÃ³l a 20. szÃ¡zadig. A mÃºzeum abszolÃºt szÃ­ve a DÃ­szgalÃ©ria (Eregalerij), ahol a holland aranykor vilÃ¡ghÃ­rÅ± remekmÅ±veit mutatjÃ¡k be, mindenekelÅ‘tt Rembrandt monumentÃ¡lis 'Ã‰jjeli Å‘rjÃ¡rat' cÃ­mÅ± festmÃ©nyÃ©t.",
    ro: "Rijksmuseum din Amsterdam este muzeul naÈ›ional olandez È™i unul dintre cele mai importante muzee de artÄƒ din lume. GÄƒzduieÈ™te o colecÈ›ie giganticÄƒ de peste un milion de obiecte care acoperÄƒ istoria ÈšÄƒrilor de Jos din Evul Mediu pÃ¢nÄƒ Ã®n secolul al XX-lea. Piesa centralÄƒ absolutÄƒ a muzeului este Galeria de Onoare, unde sunt prezentate capodopere de renume mondial ale Epocii de Aur olandeze, mai presus de toate pictura monumentalÄƒ a lui Rembrandt, 'Rondul de noapte'.",
    en: "The Rijksmuseum in Amsterdam is the Dutch national museum and one of the most important art museums in the world. It houses a gigantic collection of over one million objects covering the history of the Netherlands from the Middle Ages to the 20th century. The absolute centerpiece of the museum is the Gallery of Honour, where world-famous masterpieces of the Dutch Golden Age are presented, most notably Rembrandt's monumental painting 'The Night Watch'."
  },
      descriptionAdvanced: {
    de: "Das Rijksmuseum in Amsterdam ist das niederlÃ¤ndische Nationalmuseum und beherbergt eine der bedeutendsten Kunstsammlungen der Welt. Es wurde vom Architekten Pierre Cuypers entworfen und 1885 in seinem markanten neogotischen Stil erÃ¶ffnet. Die Sammlung widmet sich der niederlÃ¤ndischen Geschichte und Kunst vom Mittelalter bis zum 20. Jahrhundert, mit einem besonderen Schwerpunkt auf den Meisterwerken des Goldenen Zeitalters im 17. Jahrhundert. Das unbestrittene Highlight der Ausstellung ist Rembrandts monumentales GemÃ¤lde 'Die Nachtwache', das jÃ¤hrlich Millionen von Kunstliebhabern anzieht. Kunst K7: 'Die Nachtwache' von Rembrandt ist berÃ¼hmt fÃ¼r ihr Spiel mit Licht und Schatten. Wie nennt man diese spezielle Maltechnik der Hell-Dunkel-Malerei?",
    hu: "A Rijksmuseum Hollandia nemzeti mÃºzeuma Amszterdamban, amely a holland mÅ±vÃ©szet Ã©s tÃ¶rtÃ©nelem lenyÅ±gÃ¶zÅ‘ gyÅ±jtemÃ©nyÃ©nek ad otthont a kÃ¶zÃ©pkortÃ³l napjainkig. A Pierre Cuypers Ã¡ltal tervezett grandiÃ³zus, neogÃ³tikus Ã©s reneszÃ¡nsz elemeket Ã¶tvÃ¶zÅ‘ Ã©pÃ¼let 1885-ben nyitotta meg kapuit. A mÃºzeum leghÃ­resebb rÃ©szlege a 17. szÃ¡zadi holland aranykor festÃ©szetÃ©t mutatja be, beleÃ©rtve Rembrandt, Johannes Vermeer Ã©s Frans Hals remekmÅ±veit. A legikonikusabb kiÃ¡llÃ­tott mÅ± Rembrandt hatalmas mÃ©retÅ±, 'Ã‰jjeli Å‘rjÃ¡rat' cÃ­mÅ± festmÃ©nye. MÅ±vÃ©szettÃ¶rtÃ©net K7: MiÃ©rt nevezik 'Ã‰jjeli Å‘rjÃ¡ratnak' Rembrandt festmÃ©nyÃ©t, ha valÃ³jÃ¡ban egy nappali jelenetet Ã¡brÃ¡zol?",
    ro: "Rijksmuseum este muzeul naÈ›ional al Olandei din Amsterdam, gÄƒzduind o colecÈ›ie impresionantÄƒ de artÄƒ È™i istorie olandezÄƒ din Evul Mediu pÃ¢nÄƒ Ã®n prezent. ProiectatÄƒ de Pierre Cuypers, clÄƒdirea grandioasÄƒ, care combinÄƒ elemente neogotice È™i renascentiste, È™i-a deschis porÈ›ile Ã®n 1885. Cea mai faimoasÄƒ secÈ›iune a muzeului expune pictura din Epoca de Aur olandezÄƒ din secolul al XVII-lea, inclusiv capodopere de Rembrandt, Johannes Vermeer È™i Frans Hals. Cea mai iconicÄƒ lucrare expusÄƒ este pictura masivÄƒ a lui Rembrandt, 'Rondul de noapte'. Istoria artei K7: De ce pictura lui Rembrandt este numitÄƒ 'Rondul de noapte' dacÄƒ, de fapt, descrie o scenÄƒ de zi?",
    en: "The Rijksmuseum in Amsterdam is the Dutch national museum and houses one of the most significant art collections in the world. It was designed by architect Pierre Cuypers and opened in 1885 in its striking neo-Gothic style. The collection is dedicated to Dutch history and art from the Middle Ages to the 20th century, with a special emphasis on the masterpieces of the Golden Age in the 17th century. The undisputed highlight of the exhibition is Rembrandt's monumental painting 'The Night Watch', which attracts millions of art lovers annually. Art K7: 'The Night Watch' by Rembrandt is famous for its play with light and shadow. What is this special painting technique of chiaroscuro called?"
  },
    facts: {
    de: ["GegrÃ¼ndet im Jahr 1800, befindet sich seit 1885 am heutigen Standort.","Das GebÃ¤ude wurde von dem Architekten Pierre Cuypers entworfen.","Beherbergt 'Die Nachtwache', Rembrandts berÃ¼hmtestes GemÃ¤lde.","Zeigt Meisterwerke von Vermeer, Frans Hals und Jan Steen.","Besitzt eine spektakulÃ¤re historische Forschungsbibliothek (Cuypers-Bibliothek).","Nach einer 10-jÃ¤hrigen Renovierung 2013 neu erÃ¶ffnet.","Der Museumsbau wird von einem Fahrradweg durchquert.","Es gibt umfangreiche Sammlungen zu asiatischer Kunst und Delft Blauw."],
    hu: ["1800-ban alapÃ­tottÃ¡k, 1885 Ã³ta talÃ¡lhatÃ³ a jelenlegi helyÃ©n.","Az Ã©pÃ¼letet Pierre Cuypers Ã©pÃ­tÃ©sz tervezte.","Itt talÃ¡lhatÃ³ az 'Ã‰jjeli Å‘rjÃ¡rat', Rembrandt leghÃ­resabb festmÃ©nye.","Vermeer, Frans Hals Ã©s Jan Steen remekmÅ±veit is bemutatja.","LÃ¡tvÃ¡nyos tÃ¶rtÃ©nelmi kutatÃ³kÃ¶nyvtÃ¡rral (Cuypers-kÃ¶nyvtÃ¡r) rendelkezik.","10 Ã©ves felÃºjÃ­tÃ¡s utÃ¡n 2013-ban nyÃ­lt meg Ãºjra.","A mÃºzeum Ã©pÃ¼letÃ©n egy kerÃ©kpÃ¡rÃºt halad keresztÃ¼l.","Kiterjedt Ã¡zsiai mÅ±vÃ©szeti Ã©s delfti kÃ©k gyÅ±jtemÃ©nyekkel rendelkezik."],
    ro: ["FondatÄƒ Ã®n 1800, se aflÄƒ Ã®n locaÈ›ia actualÄƒ din 1885.","ClÄƒdirea a fost proiectatÄƒ de arhitectul Pierre Cuypers.","GÄƒzduieÈ™te 'Rondul de noapte', cea mai faimoasÄƒ picturÄƒ a lui Rembrandt.","Expune capodopere de Vermeer, Frans Hals È™i Jan Steen.","Are o bibliotecÄƒ de cercetare istoricÄƒ spectaculoasÄƒ (Biblioteca Cuypers).","RedeschisÄƒ Ã®n 2013, dupÄƒ o renovare de 10 ani.","O pistÄƒ de biciclete trece chiar prin clÄƒdirea muzeului.","ExistÄƒ colecÈ›ii extinse de artÄƒ asiaticÄƒ È™i Albastru de Delft."],
    en: ["Founded in 1800, it has been at its current location since 1885.","The building was designed by architect Pierre Cuypers.","Houses 'The Night Watch', Rembrandt's most famous painting.","Exhibits masterpieces by Vermeer, Frans Hals, and Jan Steen.","Has a spectacular historical research library (Cuypers Library).","Reopened in 2013 after a 10-year renovation.","A bicycle path passes right through the museum building.","There are extensive collections of Asian art and Delft Blue."]
  },
      factsAdvanced: {
    de: [
      "Das Rijksmuseum besitzt mehr als 1 Million Objekte, von denen etwa 8.000 in den SÃ¤len ausgestellt sind.",
      "Rembrandts 'Nachtwache' ist so groÃŸ (363 Ã— 437 cm), dass sie bei einem Umbau durch einen speziellen Schlitz im Boden bewegt werden musste.",
      "Die Cuypers-Bibliothek im Museum ist die Ã¤lteste und grÃ¶ÃŸte kunsthistorische Bibliothek der Niederlande.",
      "Neben Rembrandt sind auch weltberÃ¼hmte Werke von Johannes Vermeer, Frans Hals und Jan Steen ausgestellt."
    ],
    hu: ["A mÃºzeum tÃ¶bb mint egymilliÃ³ tÃ¡rgyat Å‘riz, ebbÅ‘l mintegy 8000 van folyamatosan kiÃ¡llÃ­tva.", "A Cuypers-kÃ¶nyvtÃ¡r a mÃºzeum Ã©pÃ¼letÃ©n belÃ¼l Hollandia legnagyobb Ã©s legrÃ©gebbi nyilvÃ¡nos mÅ±vÃ©szettÃ¶rtÃ©neti kÃ¶nyvtÃ¡ra.", "Az Ã©pÃ¼leten a kerÃ©kpÃ¡rosok egy aluljÃ¡rÃ³n keresztÃ¼l keresztÃ¼lhajthatnak, ami a vilÃ¡gon egyedÃ¼lÃ¡llÃ³.", "A 2013-ban befejezett tÃ­zÃ©ves felÃºjÃ­tÃ¡s sorÃ¡n az Ã©pÃ¼let visszanyerte eredeti, 19. szÃ¡zadi pompÃ¡jÃ¡t."],
    ro: [
      "Muzeul pÄƒstreazÄƒ peste un milion de obiecte, dintre care aproximativ 8.000 sunt expuse permanent.",
      "Biblioteca Cuypers din incinta muzeului este cea mai mare È™i cea mai veche bibliotecÄƒ publicÄƒ de istoria artei din Olanda.",
      "O pistÄƒ de biciclete trece printr-un pasaj chiar prin mijlocul clÄƒdirii, o caracteristicÄƒ unicÄƒ Ã®n lume.",
      "ÃŽn timpul unei renovÄƒri de zece ani finalizate Ã®n 2013, clÄƒdirea È™i-a recÄƒpÄƒtat gloria originalÄƒ din secolul al XIX-lea."
    ],
    en: [
      "The Rijksmuseum holds over 1 million objects, of which about 8,000 are displayed in its galleries.",
      "Rembrandt's 'Night Watch' is so large (363 Ã— 437 cm) that it had to be moved through a special slit in the floor during renovations.",
      "The Cuypers Library in the museum is the oldest and largest art history library in the Netherlands.",
      "Alongside Rembrandt, world-famous works by Johannes Vermeer, Frans Hals, and Jan Steen are also exhibited."
    ]
  }
  },
  {
    id: "NL-LM-VGM", type: "landmark", parent: "NL-NH", coords: [4.88, 52.35],
    name: { de: "Van Gogh Museum", hu: "Van Gogh MÃºzeum", ro: "Muzeul Van Gogh", en: "Van Gogh Museum" },
    image: "/geo-images/netherlands/van-gogh-museum.webp",
  description: {
    de: "Das Van Gogh Museum am Amsterdamer Museumplein widmet sich ganz dem Leben und Schaffen des niederlÃ¤ndischen Post-Impressionisten Vincent van Gogh. Es beherbergt die weltweit grÃ¶ÃŸte Sammlung seiner Werke, darunter berÃ¼hmte GemÃ¤lde wie 'Die Sonnenblumen', 'MandelblÃ¼te' und 'Das Schlafzimmer'. Das Museum fÃ¼hrt chronologisch durch seine verschiedenen Lebens- und Schaffensphasen und zeigt zudem Kunstwerke seiner Zeitgenossen und Freunde wie Paul Gauguin.",
    hu: "Az amszterdami Museumplein-en talÃ¡lhatÃ³ Van Gogh MÃºzeum teljes egÃ©szÃ©ben Vincent van Gogh holland posztimpresszionista festÅ‘ Ã©letÃ©nek Ã©s munkÃ¡ssÃ¡gÃ¡nak van szentelve. Itt talÃ¡lhatÃ³ mÅ±veinek a vilÃ¡gon a legnagyobb gyÅ±jtemÃ©nye, kÃ¶ztÃ¼k olyan hÃ­res festmÃ©nyekkel, mint a 'NapraforgÃ³k', a 'MandulavirÃ¡gzÃ¡s' Ã©s 'A hÃ¡lÃ³szoba'. A mÃºzeum idÅ‘rendben vezeti vÃ©gig a lÃ¡togatÃ³t Ã©lete Ã©s alkotÃ¡sai kÃ¼lÃ¶nbÃ¶zÅ‘ szakaszain, valamint bemutatja kortÃ¡rsai Ã©s barÃ¡tai (pl. Paul Gauguin) mÅ±veit is.",
    ro: "Muzeul Van Gogh de pe Museumplein din Amsterdam este dedicat Ã®n Ã®ntregime vieÈ›ii È™i operei pictorului post-impresionist olandez Vincent van Gogh. GÄƒzduieÈ™te cea mai mare colecÈ›ie din lume a operelor sale, inclusiv picturi celebre precum 'Floarea-soarelui', 'Flori de migdal' È™i 'Dormitorul'. Muzeul te ghideazÄƒ cronologic prin diferitele etape ale vieÈ›ii È™i muncii sale È™i expune, de asemenea, lucrÄƒri ale contemporanilor È™i prietenilor sÄƒi, cum ar fi Paul Gauguin.",
    en: "The Van Gogh Museum on the Museumplein in Amsterdam is dedicated entirely to the life and work of the Dutch post-impressionist painter Vincent van Gogh. It houses the world's largest collection of his works, including famous paintings such as 'Sunflowers', 'Almond Blossom', and 'The Bedroom'. The museum guides visitors chronologically through the different stages of his life and work and also displays artworks by his contemporaries and friends like Paul Gauguin."
  },
      descriptionAdvanced: {
    de: "Das Van Gogh Museum am Museumplein in Amsterdam ist ganz dem Leben und Werk von Vincent van Gogh, einem der einflussreichsten KÃ¼nstler der Kunstgeschichte, gewidmet. Es beherbergt die weltweit grÃ¶ÃŸte Sammlung seiner GemÃ¤lde, Zeichnungen und Briefe und bietet Besuchern einen tiefen Einblick in seine kÃ¼nstlerische Entwicklung und sein oft tragisches Leben. Die chronologisch aufgebaute Ausstellung verfolgt seinen Weg von den dÃ¼steren frÃ¼hen Werken in den Niederlanden bis zu den leuchtenden, expressiven Meisterwerken aus seiner Zeit in Frankreich. Das moderne GebÃ¤ude wurde von dem berÃ¼hmten Architekten Gerrit Rietveld entworfen. Kunst K6: Vincent van Gogh nutzte in seinen spÃ¤ten GemÃ¤lden oft krÃ¤ftige KomplementÃ¤rkontraste. Welche Farbe ist die KomplementÃ¤rfarbe von Blau?",
    hu: "A Van Gogh MÃºzeum Amszterdamban a vilÃ¡g legnagyobb Vincent van Gogh alkotÃ¡saibÃ³l Ã¡llÃ³ gyÅ±jtemÃ©nyÃ©t Å‘rzi. A mÃºzeumot a festÅ‘ Ã¶ccsÃ©nek, TheÃ³nak a fia, Vincent Willem van Gogh alapÃ­tvÃ¡nya hozta lÃ©tre, hogy a mÅ±vÃ©sz hagyatÃ©ka egyben maradjon Ã©s a nagykÃ¶zÃ¶nsÃ©g szÃ¡mÃ¡ra is elÃ©rhetÅ‘ legyen. A kiÃ¡llÃ­tÃ¡s idÅ‘rendben mutatja be a zseniÃ¡lis, tragikus sorsÃº posztimpresszionista festÅ‘ fejlÅ‘dÃ©sÃ©t, a korai sÃ¶tÃ©t holland korszakÃ¡tÃ³l kezdve a ragyogÃ³, Ã©lÃ©nk szÃ­nÅ± dÃ©l-franciaorszÃ¡gi remekmÅ±vekig. MÅ±vÃ©szettÃ¶rtÃ©net K8: Hogyan tÃ¼krÃ¶zik a szÃ­nek Vincent van Gogh lelkiÃ¡llapotÃ¡t Ã©s mÅ±vÃ©szi fejlÅ‘dÃ©sÃ©t a kÃ¼lÃ¶nbÃ¶zÅ‘ korszakaiban?",
    ro: "Muzeul Van Gogh din Amsterdam adÄƒposteÈ™te cea mai mare colecÈ›ie de lucrÄƒri ale lui Vincent van Gogh din lume. Muzeul a fost creat de fundaÈ›ia lui Vincent Willem van Gogh, fiul fratelui pictorului, Theo, pentru a menÈ›ine moÈ™tenirea artistului unitÄƒ È™i accesibilÄƒ publicului larg. ExpoziÈ›ia urmÄƒreÈ™te cronologic dezvoltarea genialului, dar tragicului pictor post-impresionist, de la perioada sa Ã®ntunecatÄƒ timpurie din Olanda pÃ¢nÄƒ la capodoperele luminoase È™i viu colorate din sudul FranÈ›ei. Istoria artei K8: Cum reflectÄƒ culorile starea de spirit a lui Vincent van Gogh È™i dezvoltarea sa artisticÄƒ Ã®n diferitele sale perioade?",
    en: "The Van Gogh Museum on Museumplein in Amsterdam is entirely dedicated to the life and work of Vincent van Gogh, one of the most influential artists in art history. It houses the world's largest collection of his paintings, drawings, and letters, offering visitors a deep insight into his artistic development and his often tragic life. The chronologically structured exhibition traces his journey from the gloomy early works in the Netherlands to the bright, expressive masterpieces from his time in France. The modern building was designed by the famous architect Gerrit Rietveld. Art K6: Vincent van Gogh often used strong complementary contrasts in his late paintings. Which color is the complementary color of blue?"
  },
    facts: {
    de: ["Besitzt Ã¼ber 200 GemÃ¤lde, 500 Zeichnungen und unzÃ¤hlige Briefe Van Goghs.","ErÃ¶ffnete 1973 und ist eines der meistbesuchten Museen des Landes.","Das HauptgebÃ¤ude wurde vom Architekten Gerrit Rietveld entworfen.","Zeigt Meisterwerke wie die 'Sonnenblumen' und 'Kartoffelesser'.","Die Ausstellung erklÃ¤rt Van Goghs Inspirationen und seinen tragischen Weg.","Befindet sich direkt neben dem Rijksmuseum und dem Stedelijk Museum.","Briefe zwischen Vincent und seinem Bruder Theo sind ein zentraler Teil.","2015 wurde ein spektakulÃ¤rer glÃ¤serner Eingangsbereich erÃ¶ffnet."],
    hu: ["Van Gogh tÃ¶bb mint 200 festmÃ©nyÃ©vel, 500 rajzÃ¡val Ã©s szÃ¡mtalan levelÃ©vel rendelkezik.","1973-ban nyÃ­lt meg, Ã©s az orszÃ¡g egyik leglÃ¡togatottabb mÃºzeuma.","A fÅ‘Ã©pÃ¼letet Gerrit Rietveld Ã©pÃ­tÃ©sz tervezte.","Olyan remekmÅ±veket mutat be, mint a 'NapraforgÃ³k' Ã©s a 'KrumplievÅ‘k'.","A kiÃ¡llÃ­tÃ¡s elmagyarÃ¡zza Van Gogh inspirÃ¡ciÃ³it Ã©s tragikus ÃºtjÃ¡t.","KÃ¶zvetlenÃ¼l a Rijksmuseum Ã©s a Stedelijk Museum mellett talÃ¡lhatÃ³.","Vincent Ã©s testvÃ©re, Theo levelezÃ©se kÃ¶zponti rÃ©sze a kiÃ¡llÃ­tÃ¡snak.","2015-ben egy lÃ¡tvÃ¡nyos, csupa Ã¼veg bejÃ¡rati rÃ©szt nyitottak meg."],
    ro: ["Are peste 200 de picturi, 500 de desene È™i nenumÄƒrate scrisori ale lui Van Gogh.","Deschis Ã®n 1973 È™i este unul dintre cele mai vizitate muzee din È›arÄƒ.","ClÄƒdirea principalÄƒ a fost proiectatÄƒ de arhitectul Gerrit Rietveld.","AfiÈ™eazÄƒ capodopere precum 'Floarea-soarelui' È™i 'MÃ¢ncÄƒtorii de cartofi'.","ExpoziÈ›ia explicÄƒ inspiraÈ›iile lui Van Gogh È™i calea sa tragicÄƒ.","Situat chiar lÃ¢ngÄƒ Rijksmuseum È™i Stedelijk Museum.","Scrisorile dintre Vincent È™i fratele sÄƒu Theo sunt o parte centralÄƒ.","O zonÄƒ de intrare din sticlÄƒ spectaculoasÄƒ a fost deschisÄƒ Ã®n 2015."],
    en: ["Owns over 200 paintings, 500 drawings, and countless letters from Van Gogh.","Opened in 1973 and is one of the most visited museums in the country.","The main building was designed by architect Gerrit Rietveld.","Displays masterpieces such as the 'Sunflowers' and 'Potato Eaters'.","The exhibition explains Van Gogh's inspirations and his tragic path.","Located right next to the Rijksmuseum and the Stedelijk Museum.","Letters between Vincent and his brother Theo are a central part.","A spectacular glass entrance area was opened in 2015."]
  },
      factsAdvanced: {
    de: [
      "Das Museum besitzt mehr als 200 GemÃ¤lde, 500 Zeichnungen und Ã¼ber 700 Briefe von Vincent van Gogh.",
      "Eines der berÃ¼hmtesten AusstellungsstÃ¼cke ist das leuchtend gelbe GemÃ¤lde 'Sonnenblumen'.",
      "Das Museum beleuchtet auch den engen Briefwechsel zwischen Vincent und seinem Bruder Theo, der ihn finanziell unterstÃ¼tzte.",
      "Vincent van Gogh verkaufte zu seinen Lebzeiten vermutlich nur ein einziges GemÃ¤lde."
    ],
    hu: ["A gyÅ±jtemÃ©ny mintegy 200 festmÃ©nyt, 500 rajzot Ã©s tÃ¶bb mint 700 levelet tartalmaz.", "Itt talÃ¡lhatÃ³ a hÃ­res 'NapraforgÃ³k', 'A krumplievÅ‘k' Ã©s a 'MandulavirÃ¡gzÃ¡s' cÃ­mÅ± festmÃ©ny.", "A mÃºzeum Ã©pÃ¼lete Gerrit Rietveld Ã©pÃ­tÃ©sz tervei alapjÃ¡n kÃ©szÃ¼lt, 1973-ban nyÃ­lt meg.", "Ã‰vente tÃ¶bb mint kÃ©tmilliÃ³ lÃ¡togatÃ³t fogad, ezzel az orszÃ¡g egyik leglÃ¡togatottabb mÃºzeuma."],
    ro: [
      "ColecÈ›ia conÈ›ine aproximativ 200 de picturi, 500 de desene È™i peste 700 de scrisori.",
      "Aici sunt expuse celebrele picturi 'Floarea-soarelui', 'MÃ¢ncÄƒtorii de cartofi' È™i 'Flori de migdal'.",
      "ClÄƒdirea muzeului, proiectatÄƒ de arhitectul Gerrit Rietveld, a fost deschisÄƒ Ã®n 1973.",
      "PrimeÈ™te peste douÄƒ milioane de vizitatori anual, fiind unul dintre cele mai vizitate muzee din È›arÄƒ."
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
    de: "Volendam ist ein weltbekanntes, malerisches Fischerdorf am Markermeer in der Provinz Nordholland. Es ist berÃ¼hmt fÃ¼r seine gut erhaltenen traditionellen HolzhÃ¤user, verwinkelten Gassen und die historische Hafenkulisse. Volendam gilt als Symbol fÃ¼r die klassische hollÃ¤ndische Kultur: Bewohner trugen hier noch lange die typische traditionelle Tracht. Besucher kÃ¶nnen hier frischen Fisch probieren, sich in traditioneller Kleidung fotografieren lassen und die maritime AtmosphÃ¤re genieÃŸen.",
    hu: "Volendam egy vilÃ¡ghÃ­rÅ±, festÅ‘i halÃ¡szfalu a Markermeer partjÃ¡n, Ã‰szak-Holland tartomÃ¡nyban. JÃ³l megÅ‘rzÃ¶tt hagyomÃ¡nyos fahÃ¡zairÃ³l, kanyargÃ³s utcÃ¡irÃ³l Ã©s tÃ¶rtÃ©nelmi kikÃ¶tÅ‘i hÃ¡tterÃ©rÅ‘l ismert. Volendam a klasszikus holland kultÃºra szimbÃ³luma: a helyiek mÃ©g sokÃ¡ig viseltÃ©k az itteni jellegzetes nÃ©pviseletet. A lÃ¡togatÃ³k friss halat kÃ³stolhatnak, hagyomÃ¡nyos ruhÃ¡zatban fÃ©nykÃ©pezkedhetnek, Ã©s Ã©lvezhetik a tengeri hangulatot.",
    ro: "Volendam este un sat de pescari pitoresc, renumit la nivel mondial, situat pe Markermeer Ã®n provincia Olanda de Nord. Este faimos pentru casele sale tradiÈ›ionale din lemn bine conservate, strÄƒzile È™erpuite È™i decorul portului istoric. Volendam este considerat un simbol al culturii clasice olandeze: locuitorii au purtat aici costumul tradiÈ›ional tipic mult timp. Vizitatorii pot gusta peÈ™te proaspÄƒt, pot fi fotografiaÈ›i Ã®n haine tradiÈ›ionale È™i se pot bucura de atmosfera maritimÄƒ.",
    en: "Volendam is a world-famous, picturesque fishing village on the Markermeer in the province of North Holland. It is famous for its well-preserved traditional wooden houses, winding streets, and historic harbor backdrop. Volendam is considered a symbol of classic Dutch culture: residents here wore the typical traditional costume for a long time. Visitors can taste fresh fish, have their picture taken in traditional clothing, and enjoy the maritime atmosphere."
  },
      descriptionAdvanced: {
    de: "Volendam ist ein malerisches Fischerdorf am Markermeer in der Provinz Nordholland, das international als Symbol der traditionellen niederlÃ¤ndischen Kultur gilt. Das Dorf ist berÃ¼hmt fÃ¼r seine alten HolzhÃ¤user, den gemÃ¼tlichen Hafen voller historischer Segelschiffe und seine Bewohner, von denen einige an Festtagen noch die traditionelle Tracht tragen. FrÃ¼her ein wichtiger Hafen fÃ¼r den Fischfang an der Zuiderzee, zog Volendam im 19. Jahrhundert viele Maler an, die das authentische hollÃ¤ndische Leben festhalten wollten. Heute ist es eines der beliebtesten Touristenziele des Landes und bekannt fÃ¼r seinen frisch gerÃ¤ucherten Aal. Geografie K5: Volendam lag frÃ¼her an der Zuiderzee, einem salzigen Meer. Was geschah, als die Zuiderzee durch den Afsluitdijk vom offenen Meer abgetrennt wurde?",
    hu: "Volendam egy festÅ‘i tÃ¶rtÃ©nelmi halÃ¡szfalu az Ã‰szak-Holland tartomÃ¡nyban, az egykori Zuiderzee (ma Markermeer) partjÃ¡n. A falu a 20. szÃ¡zad elejÃ©n a mÅ±vÃ©szek â€“ kÃ¶ztÃ¼k Picasso Ã©s Renoir â€“ kedvelt menedÃ©khelye volt, akik az autentikus holland Ã©letÃ©rzÃ©st kerestÃ©k. Ma a turizmus a legfÅ‘bb iparÃ¡ga; a lÃ¡togatÃ³kat a zÃ¶ld fahÃ¡zak szegÃ©lyezte rÃ©gi kikÃ¶tÅ‘, a hagyomÃ¡nyos holland nÃ©pviseletek Ã©s a fÃ¼stÃ¶lt angolnÃ¡t (paling) kÃ­nÃ¡lÃ³ halÃ¡rusok vonzzÃ¡k. FÃ¶ldrajz K5: Hogyan vÃ¡ltoztatta meg a halÃ¡szfalvak (mint Volendam) Ã©letÃ©t a tenger lezÃ¡rÃ¡sa (a gÃ¡tak megÃ©pÃ­tÃ©se)?",
    ro: "Volendam este un sat istoric pitoresc de pescari din provincia Olanda de Nord, pe malul fostei Zuiderzee (acum Markermeer). La Ã®nceputul secolului al XX-lea, satul a fost un refugiu popular pentru artiÈ™ti â€“ inclusiv Picasso È™i Renoir â€“ care cÄƒutau stilul de viaÈ›Äƒ autentic olandez. AstÄƒzi, turismul este principala sa industrie; vizitatorii sunt atraÈ™i de vechiul port mÄƒrginit de case verzi din lemn, costumele tradiÈ›ionale olandeze È™i negustorii de peÈ™te care oferÄƒ anghilÄƒ afumatÄƒ (paling). Geografie K5: Cum a schimbat Ã®nchiderea mÄƒrii (construirea digurilor) viaÈ›a satelor de pescari precum Volendam?",
    en: "Volendam is a picturesque fishing village on the Markermeer in the province of North Holland, internationally recognized as a symbol of traditional Dutch culture. The village is famous for its old wooden houses, its cozy harbor filled with historic sailing ships, and its residents, some of whom still wear traditional costumes on festive days. Once a major port for fishing on the Zuiderzee, Volendam attracted many painters in the 19th century who wanted to capture authentic Dutch life. Today, it is one of the country's most popular tourist destinations and is known for its freshly smoked eel. Geography K5: Volendam used to be located on the Zuiderzee, a salty sea. What happened when the Zuiderzee was separated from the open sea by the Afsluitdijk?"
  },
    facts: {
    de: ["Direkt am Wasser des Markermeers gelegen (frÃ¼her Zuiderzee).","BerÃ¼hmt fÃ¼r die typisch niederlÃ¤ndische, traditionelle Tracht.","Ein beliebtes Fotomotiv ist das Tragen der Tracht im Fotostudio.","Bekannt fÃ¼r lokale FischspezialitÃ¤ten wie frischen RÃ¤ucheraal.","Zahlreiche SouvenirlÃ¤den sÃ¤umen die belebte Hafenpromenade (De Dijk).","Hat eine erfolgreiche Musikerszene (Palingpop) hervorgebracht.","Kleine Gassen im 'Doolhof' bieten einen Einblick ins historische Leben.","Eine FÃ¤hrverbindung fÃ¼hrt zur ehemaligen Insel Marken."],
    hu: ["KÃ¶zvetlenÃ¼l a Markermeer (korÃ¡bban Zuiderzee) partjÃ¡n fekszik.","HÃ­res a tipikus holland, hagyomÃ¡nyos nÃ©pviseletrÅ‘l.","NÃ©pszerÅ± fotÃ³tÃ©ma a nÃ©pviselet felprÃ³bÃ¡lÃ¡sa egy fotÃ³stÃºdiÃ³ban.","Helyi halkÃ¼lÃ¶nlegessÃ©gekrÅ‘l, pÃ©ldÃ¡ul a friss fÃ¼stÃ¶lt angolnÃ¡rÃ³l ismert.","A nyÃ¼zsgÅ‘ kikÃ¶tÅ‘i sÃ©tÃ¡nyt (De Dijk) szÃ¡mtalan szuvenÃ­rbolt szegÃ©lyezi.","Sikeres zenei szÃ­nteret (Palingpop) hozott lÃ©tre.","A 'Doolhof' (ÃºtvesztÅ‘) szÅ±k utcÃ¡cskÃ¡i bepillantÃ¡st nyÃºjtanak a tÃ¶rtÃ©nelmi Ã©letbe.","KompjÃ¡rat vezet a korÃ¡bbi Marken szigetre."],
    ro: ["Situat chiar pe apa lacului Markermeer (fostul Zuiderzee).","Renumit pentru costumul tradiÈ›ional tipic olandez.","Un motiv foto popular este purtarea costumului tradiÈ›ional Ã®ntr-un studio foto.","Cunoscut pentru specialitÄƒÈ›i locale din peÈ™te, precum anghila afumatÄƒ.","NenumÄƒrate magazine de suveniruri mÄƒrginesc promenada plinÄƒ de viaÈ›Äƒ (De Dijk).","A produs o scenÄƒ muzicalÄƒ de succes (Palingpop).","Aleile mici din 'Doolhof' oferÄƒ o perspectivÄƒ asupra vieÈ›ii istorice.","O legÄƒturÄƒ de feribot duce la fosta insulÄƒ Marken."],
    en: ["Located right on the water of the Markermeer (formerly Zuiderzee).","Famous for the typical Dutch, traditional costume.","A popular photo motif is wearing the traditional costume in a photo studio.","Known for local fish specialties like fresh smoked eel.","Numerous souvenir shops line the bustling harbor promenade (De Dijk).","Has produced a successful music scene (Palingpop).","Small alleys in the 'Doolhof' offer a glimpse into historical life.","A ferry connection leads to the former island of Marken."]
  },
      factsAdvanced: {
    de: [
      "Die traditionelle Frauen-Tracht von Volendam mit ihrer spitzen Spitzenhaube ist oft das klischeehafte Bild einer 'HollÃ¤nderin' im Ausland.",
      "Im spÃ¤ten 19. und frÃ¼hen 20. Jahrhundert existierte in Volendam eine blÃ¼hende KÃ¼nstlerkolonie, die von Malern wie Renoir und Signac besucht wurde.",
      "Die lokale Musikszene, der 'Palingsound' (Aalsound), brachte zahlreiche erfolgreiche niederlÃ¤ndische Popbands hervor.",
      "Das Volendams Museum prÃ¤sentiert detailgetreu die historische Lebensweise und die Trachtenvielfalt der Region."
    ],
    hu: ["A volendami hagyomÃ¡nyos nÃ©pviselet, kÃ¼lÃ¶nÃ¶sen a nÅ‘k csipkefÅ‘kÃ¶tÅ‘je, a holland kultÃºra nemzetkÃ¶zi szimbÃ³lumÃ¡vÃ¡ vÃ¡lt.", "A falu zenei kultÃºrÃ¡ja (a 'Palingsound' â€“ angolnahang) jelentÅ‘s a holland popzenÃ©ben.", "Volendam egy gÃ¡t megÃ©pÃ­tÃ©sÃ©vel szÃ¼letett meg a 14. szÃ¡zadban Edam kikÃ¶tÅ‘jekÃ©nt.", "A kikÃ¶tÅ‘bÅ‘l rendszeres kompjÃ¡rat kÃ¶zlekedik a szemkÃ¶zti, egykor szigetkÃ©nt funkcionÃ¡lÃ³ Marken faluba."],
    ro: [
      "Costumul tradiÈ›ional din Volendam, Ã®n special boneta de dantelÄƒ a femeilor, a devenit un simbol internaÈ›ional al culturii olandeze.",
      "Cultura muzicalÄƒ a satului ('Palingsound' â€“ sunetul anghilei) este semnificativÄƒ Ã®n muzica pop olandezÄƒ.",
      "Volendam a luat naÈ™tere prin construirea unui baraj Ã®n secolul al XIV-lea ca port pentru oraÈ™ul Edam.",
      "Un serviciu regulat de feribot face legÄƒtura cu satul Marken din apropiere, fostÄƒ insulÄƒ."
    ],
    en: [
      "The traditional women's costume of Volendam, with its pointed lace cap, is often the clichÃ©d image of a 'Dutch woman' abroad.",
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
    de: "Der Keukenhof in Lisse ist unbestritten der bekannteste und grÃ¶ÃŸte FrÃ¼hlingsgarten der Welt. Auf einem weitlÃ¤ufigen Areal erblÃ¼hen jÃ¤hrlich rund sieben Millionen FrÃ¼hlingszwiebeln, darunter vor allem unzÃ¤hlige Sorten der berÃ¼hmten hollÃ¤ndischen Tulpe. Der Park bietet jedes Jahr ein neues Thema, prachtvolle Blumenshows in Pavillons und herrliche Spazierwege. Er ist nur fÃ¼r etwa acht Wochen im FrÃ¼hling geÃ¶ffnet, zieht in dieser Zeit aber Millionen von Touristen an.",
    hu: "A lisse-i Keukenhof vitathatatlanul a vilÃ¡g legismertebb Ã©s legnagyobb tavaszi kertje. Egy kiterjedt terÃ¼leten Ã©vente mintegy hÃ©tmilliÃ³ tavaszi virÃ¡ghagyma nyÃ­lik, kÃ¶ztÃ¼k elsÅ‘sorban a hÃ­res holland tulipÃ¡n szÃ¡mtalan fajtÃ¡ja. A park minden Ã©vben Ãºj tÃ©mÃ¡t, pompÃ¡s virÃ¡gkiÃ¡llÃ­tÃ¡sokat kÃ­nÃ¡l a pavilonokban Ã©s csodÃ¡latos sÃ©tÃ¡nyokon. Csak kÃ¶rÃ¼lbelÃ¼l nyolc hÃ©tig tart nyitva tavasszal, de ez idÅ‘ alatt turistÃ¡k milliÃ³it vonzza.",
    ro: "Keukenhof din Lisse este fÄƒrÄƒ Ã®ndoialÄƒ cea mai faimoasÄƒ È™i cea mai mare grÄƒdinÄƒ de primÄƒvarÄƒ din lume. Peste È™apte milioane de bulbi de primÄƒvarÄƒ Ã®nfloresc aici anual pe o zonÄƒ extinsÄƒ, inclusiv nenumÄƒrate soiuri din faimoasa lalea olandezÄƒ. Parcul oferÄƒ o nouÄƒ temÄƒ Ã®n fiecare an, spectacole florale magnifice Ã®n pavilioane È™i alei minunate. Este deschis doar aproximativ opt sÄƒptÄƒmÃ¢ni primÄƒvara, dar atrage milioane de turiÈ™ti Ã®n acest timp.",
    en: "Keukenhof in Lisse is undoubtedly the most famous and largest spring garden in the world. About seven million spring bulbs bloom here annually over an extensive area, including countless varieties of the famous Dutch tulip. The park offers a new theme every year, magnificent flower shows in pavilions, and wonderful walking paths. It is only open for about eight weeks in spring but attracts millions of tourists during this time."
  },
      descriptionAdvanced: {
    de: "Der Keukenhof in Lisse wird oft als der 'Garten Europas' bezeichnet und ist einer der grÃ¶ÃŸten und bekanntesten BlumengÃ¤rten der Welt. Jedes FrÃ¼hjahr Ã¶ffnet der Park fÃ¼r nur etwa acht Wochen seine Tore und prÃ¤sentiert ein atemberaubendes, farbenfrohes Meer aus rund sieben Millionen blÃ¼henden Zwiebelblumen, hauptsÃ¤chlich Tulpen, Narzissen und Hyazinthen. Die Anlage erstreckt sich Ã¼ber 32 Hektar rund um das historische Schloss Keukenhof und wird jÃ¤hrlich neu gestaltet, um die niederlÃ¤ndische Blumenzuchtindustrie weltweit zu reprÃ¤sentieren. Die unzÃ¤hligen, perfekt arrangierten Beete machen ihn zu einem Paradies fÃ¼r Fotografen. Biologie K6: Im Keukenhof blÃ¼hen Millionen von Tulpen. Welches Pflanzenteil nutzt die Tulpe, um NÃ¤hrstoffe Ã¼ber den Winter zu speichern?",
    hu: "A Keukenhof, gyakran 'EurÃ³pa kertje'-kÃ©nt emlegetve, a vilÃ¡g egyik legnagyobb virÃ¡goskertje, amely a dÃ©l-hollandiai Lisse vÃ¡rosÃ¡ban talÃ¡lhatÃ³. A park Ã©vente csupÃ¡n nyolc hÃ©tig, a tavaszi virÃ¡gzÃ¡s idejÃ©n tart nyitva, mÃ©gis tÃ¶bb mint egymilliÃ³ lÃ¡togatÃ³t vonz a vilÃ¡g minden tÃ¡jÃ¡rÃ³l. A 32 hektÃ¡ros terÃ¼leten a holland virÃ¡ghagymatermesztÅ‘k tÃ¶bb mint hÃ©tmilliÃ³ tulipÃ¡nt, jÃ¡cintot Ã©s nÃ¡rciszt Ã¼ltetnek el minden Å‘sszel, gondosan megtervezett tematikus mintÃ¡k szerint. KÃ¶rnyezetismeret K6: Milyen termÃ©szeti feltÃ©telek kellenek ahhoz, hogy egy orszÃ¡g a vilÃ¡g vezetÅ‘ virÃ¡ghagymatermesztÅ‘je legyen?",
    ro: "Keukenhof, numitÄƒ adesea 'GrÄƒdina Europei', este una dintre cele mai mari grÄƒdini de flori din lume, situatÄƒ Ã®n oraÈ™ul Lisse din Olanda de Sud. Parcul este deschis doar opt sÄƒptÄƒmÃ¢ni pe an, Ã®n timpul Ã®nfloririi de primÄƒvarÄƒ, atrÄƒgÃ¢nd totuÈ™i peste un milion de vizitatori din Ã®ntreaga lume. Pe suprafaÈ›a de 32 de hectare, cultivatorii olandezi de bulbi planteazÄƒ manual peste È™apte milioane de lalele, zambile È™i narcise Ã®n fiecare toamnÄƒ, dupÄƒ modele tematice atent planificate. È˜tiinÈ›ele naturii K6: Ce condiÈ›ii naturale sunt necesare pentru ca o È›arÄƒ sÄƒ fie principalul producÄƒtor de bulbi de flori din lume?",
    en: "The Keukenhof in Lisse is often called the 'Garden of Europe' and is one of the largest and most famous flower gardens in the world. Every spring, the park opens its gates for only about eight weeks, presenting a breathtaking, colorful sea of around seven million blooming bulb flowers, primarily tulips, daffodils, and hyacinths. The grounds span 32 hectares around the historic Keukenhof Castle and are redesigned annually to showcase the Dutch floriculture industry to the world. The countless perfectly arranged flowerbeds make it a paradise for photographers. Biology K6: Millions of tulips bloom at Keukenhof. Which part of the plant does the tulip use to store nutrients over the winter?"
  },
    facts: {
    de: ["Gilt als der 'Garten Europas' und grÃ¶ÃŸter Zwiebelblumengarten der Welt.","Rund 7 Millionen Blumen werden jeden Herbst von Hand gepflanzt.","Nur ca. zwei Monate im Jahr (MÃ¤rz bis Mai) geÃ¶ffnet.","Zeigt Ã¼ber 800 verschiedene Sorten von Tulpen.","Ein gigantisches Schaufenster der niederlÃ¤ndischen Zierpflanzenindustrie.","Befindet sich mitten im Anbaugebiet fÃ¼r Blumenzwiebeln (Bollenstreek).","Ein jÃ¤hrlicher Blumenkorso fÃ¤hrt am Keukenhof vorbei.","Das GelÃ¤nde war ursprÃ¼nglich der KrÃ¤utergarten eines Schlosses (Keuken=KÃ¼che)."],
    hu: ["'EurÃ³pa kertje' Ã©s a vilÃ¡g legnagyobb virÃ¡ghagymakertje.","Minden Å‘sszel mintegy 7 milliÃ³ virÃ¡got Ã¼ltetnek el kÃ©zzel.","Ã‰vente csak kb. kÃ©t hÃ³napig (mÃ¡rciustÃ³l mÃ¡jusig) tart nyitva.","TÃ¶bb mint 800 kÃ¼lÃ¶nbÃ¶zÅ‘ tulipÃ¡nfajtÃ¡t mutat be.","A holland dÃ­sznÃ¶vÃ©nyipar gigantikus kirakata.","A virÃ¡ghagymatermesztÅ‘ vidÃ©k (Bollenstreek) kellÅ‘s kÃ¶zepÃ©n talÃ¡lhatÃ³.","Ã‰vente egy virÃ¡gkarnevÃ¡l halad el a Keukenhof mellett.","A terÃ¼let eredetileg egy kastÃ©ly fÅ±szerkertje (Keuken = konyha) volt."],
    ro: ["ConsideratÄƒ 'GrÄƒdina Europei' È™i cea mai mare grÄƒdinÄƒ de flori cu bulbi din lume.","Aproximativ 7 milioane de flori sunt plantate manual Ã®n fiecare toamnÄƒ.","Deschis doar aproximativ douÄƒ luni pe an (martie - mai).","AfiÈ™eazÄƒ peste 800 de soiuri diferite de lalele.","O vitrinÄƒ giganticÄƒ a industriei olandeze de plante ornamentale.","SituatÄƒ Ã®n mijlocul zonei de cultivare a bulbilor de flori (Bollenstreek).","O paradÄƒ anualÄƒ a florilor trece pe lÃ¢ngÄƒ Keukenhof.","Terenul a fost iniÈ›ial grÄƒdina de ierburi a unui castel (Keuken=BucÄƒtÄƒrie)."],
    en: ["Considered the 'Garden of Europe' and the largest bulb flower garden in the world.","About 7 million flowers are planted by hand every autumn.","Open only about two months a year (March to May).","Displays over 800 different varieties of tulips.","A gigantic showcase of the Dutch ornamental plant industry.","Located in the middle of the bulb-growing area (Bollenstreek).","An annual flower parade passes by the Keukenhof.","The grounds were originally the herb garden of a castle (Keuken=Kitchen)."]
  },
      factsAdvanced: {
    de: [
      "Der Keukenhof ist nur von Mitte MÃ¤rz bis Mitte Mai fÃ¼r die Ã–ffentlichkeit zugÃ¤nglich.",
      "Jedes Jahr pflanzen 40 GÃ¤rtner mehr als 7 Millionen Blumenzwiebeln per Hand.",
      "Die Tulpe, das Symbol des Parks und der Niederlande, stammt ursprÃ¼nglich aus Zentralasien und dem Osmanischen Reich.",
      "Der Park wurde 1949 von den fÃ¼hrenden BlumenzwiebelzÃ¼chtern der Niederlande als Schaufenster fÃ¼r ihre Branche gegrÃ¼ndet."
    ],
    hu: ["A Keukenhof szÃ³ szerinti jelentÃ©se 'konyhakert', mivel a terÃ¼let egykor egy kastÃ©ly birtoka volt, ahol gyÃ³gynÃ¶vÃ©nyeket termesztettek.", "Minden Ã©vben a hagymÃ¡kat Å‘sszel kÃ©zzel Ã¼ltetik el a kertÃ©szek.", "A parkot eredetileg 1949-ben hoztÃ¡k lÃ©tre, hogy a holland exportÅ‘rÃ¶k bemutathassÃ¡k a hagymÃ¡ikat.", "TÃ¶bb mint 800 kÃ¼lÃ¶nbÃ¶zÅ‘ tulipÃ¡nfajta lÃ¡thatÃ³ a kertben a tavaszi szezonban."],
    ro: [
      "Sensul literal al cuvÃ¢ntului Keukenhof este 'grÄƒdinÄƒ de bucÄƒtÄƒrie', deoarece zona a fost cÃ¢ndva domeniul unui castel unde se cultivau ierburi aromatice.",
      "ÃŽn fiecare an, bulbii sunt plantaÈ›i manual de grÄƒdinari toamna.",
      "Parcul a fost creat iniÈ›ial Ã®n 1949 pentru exportatorii olandezi pentru a-È™i expune bulbii.",
      "Peste 800 de soiuri diferite de lalele pot fi vÄƒzute Ã®n grÄƒdinÄƒ Ã®n sezonul de primÄƒvarÄƒ."
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
    de: "Giethoorn, gelegen in der Provinz Overijssel, ist ein idyllisches Wasserdorf, das oft liebevoll als das 'Venedig des Nordens' bezeichnet wird. Der historische Kern des Dorfes ist komplett autofrei; stattdessen dienen kleine Wasserwege als StraÃŸen. Die traditionellen, reetgedeckten BauernhÃ¤user liegen auf kleinen Inseln, die durch unzÃ¤hlige markante HolzbrÃ¼cken miteinander verbunden sind. Besucher kÃ¶nnen das Dorf am besten in elektrischen, leisen 'FlÃ¼sterbooten' erkunden.",
    hu: "Giethoorn, amely Overijssel tartomÃ¡nyban talÃ¡lhatÃ³, egy idilli vÃ­zi falu, amelyet gyakran 'Ã‰szak VelencÃ©jekÃ©nt' is becÃ©znek. A falu tÃ¶rtÃ©nelmi kÃ¶zpontja teljesen autÃ³mentes; ehelyett kis vÃ­zi utak szolgÃ¡lnak utcÃ¡kkÃ©nt. A hagyomÃ¡nyos, nÃ¡dtetÅ‘s paraszthÃ¡zak kis szigeteken fekszenek, amelyeket szÃ¡mtalan jellegzetes fahÃ­d kÃ¶t Ã¶ssze egymÃ¡ssal. A lÃ¡togatÃ³k a falut leginkÃ¡bb elektromos, csendes 'suttogÃ³csÃ³nakokban' fedezhetik fel.",
    ro: "Giethoorn, situat Ã®n provincia Overijssel, este un sat de apÄƒ idilic pe care mulÈ›i Ã®l numesc cu afecÈ›iune 'VeneÈ›ia Nordului'. Centrul istoric al satului este complet lipsit de maÈ™ini; Ã®n schimb, cÄƒile navigabile mici servesc drept strÄƒzi. Fermele tradiÈ›ionale cu acoperiÈ™ din stuf se aflÄƒ pe insule mici, care sunt conectate prin nenumÄƒrate poduri din lemn caracteristice. Vizitatorii pot explora cel mai bine satul Ã®n bÄƒrci electrice, silenÈ›ioase ('bÄƒrci care È™optesc').",
    en: "Giethoorn, located in the province of Overijssel, is an idyllic water village affectionately referred to as the 'Venice of the North'. The historic center of the village is completely car-free; instead, small waterways serve as streets. The traditional thatched-roof farmhouses are situated on small islands connected by countless characteristic wooden bridges. Visitors can best explore the village in electric, quiet 'whisper boats'."
  },
      descriptionAdvanced: {
    de: "Giethoorn ist ein idyllisches Dorf in der Provinz Overijssel, das weltweit als das 'Venedig des Nordens' bekannt ist. Das Besondere an diesem Ort ist, dass das historische Zentrum keine StraÃŸen fÃ¼r Autos besitzt; der gesamte Verkehr und Transport findet auf einem dichten Netzwerk schmaler KanÃ¤le statt. Die Fortbewegung erfolgt traditionell in flachen 'Punttern', leisen Elektrobooten, die von den Einwohnern liebevoll 'FlÃ¼sterboote' genannt werden. Die malerischen, strohgedeckten BauernhÃ¤user, die auf kleinen Torfinseln stehen und durch mehr als 170 HolzbrÃ¼cken verbunden sind, verleihen Giethoorn eine mÃ¤rchenhafte AtmosphÃ¤re. Geografie K5: In Giethoorn baute man HÃ¤user auf Torfinseln. Was ist Torf und wie entstand er in solchen feuchten Gebieten?",
    hu: "Giethoorn egy mesÃ©be illÅ‘ falu Overijssel tartomÃ¡nyban, amelyet gyakran 'Holland Velence'-kÃ©nt is emlegetnek. A falu kÃ¼lÃ¶nlegessÃ©ge, hogy a tÃ¶rtÃ©nelmi kÃ¶zpontban egyÃ¡ltalÃ¡n nincsenek utak, Ã­gy az autÃ³forgalom is teljesen hiÃ¡nyzik; a kÃ¶zlekedÃ©s kizÃ¡rÃ³lag a sÅ±rÅ± csatornahÃ¡lÃ³zaton, Ãºgynevezett suttogÃ³ csÃ³nakokkal (fluisterboot), vagy az azokon Ã¡tÃ­velÅ‘ szÃ¡mtalan fa gyaloghÃ­don tÃ¶rtÃ©nik. A telepÃ¼lÃ©st a 13. szÃ¡zadban alapÃ­tottÃ¡k tÅ‘zegbÃ¡nyÃ¡szok, a csatornÃ¡kat eredetileg a tÅ‘zeg szÃ¡llÃ­tÃ¡sÃ¡ra Ã¡stÃ¡k. FÃ¶ldrajz K6: Hogyan befolyÃ¡solta a tÅ‘zegkitermelÃ©s Giethoorn tÃ¡jkÃ©pÃ©t Ã©s csatornÃ¡inak kialakulÃ¡sÃ¡t?",
    ro: "Giethoorn este un sat de poveste din provincia Overijssel, adesea numit 'VeneÈ›ia olandezÄƒ'. Caracteristica specialÄƒ a satului este cÄƒ nu existÄƒ drumuri Ã®n centrul istoric, astfel Ã®ncÃ¢t traficul auto este complet absent; transportul are loc exclusiv pe reÈ›eaua densÄƒ de canale, folosind aÈ™a-numitele bÄƒrci care È™optesc (fluisterboot) sau pe nenumÄƒratele punÈ›i pietonale de lemn care le traverseazÄƒ. AÈ™ezarea a fost fondatÄƒ Ã®n secolul al XIII-lea de minerii de turbÄƒ, canalele fiind sÄƒpate iniÈ›ial pentru a transporta turba. Geografie K6: Cum a influenÈ›at extracÈ›ia turbei peisajul din Giethoorn È™i formarea canalelor sale?",
    en: "Giethoorn is an idyllic village in the province of Overijssel, known worldwide as the 'Venice of the North'. The special thing about this place is that the historic center has no roads for cars; all traffic and transport takes place on a dense network of narrow canals. Transportation is traditionally done in flat 'punters', quiet electric boats lovingly called 'whisper boats' by the locals. The picturesque, thatched-roof farmhouses standing on small peat islands, connected by more than 170 wooden bridges, give Giethoorn a fairytale atmosphere. Geography K5: In Giethoorn, houses were built on peat islands. What is peat, and how was it formed in such wetlands?"
  },
    facts: {
    de: ["Das alte Zentrum hat keine StraÃŸen, nur KanÃ¤le und FuÃŸwege.","Bekannt als das 'Venedig der Niederlande'.","Der Transport erfolgt traditionell in sogenannten FlÃ¼sterbooten (Punter).","Besitzt Ã¼ber 170 charakteristische HolzbrÃ¼cken.","Gelegen inmitten des Nationalparks Weerribben-Wieden.","Entstanden durch historischen Torfabbau in der Region.","Ein Ã¼beraus beliebtes Ziel fÃ¼r internationale Touristen.","Viele HÃ¤user haben DÃ¤cher, die noch traditionell mit Schilf gedeckt sind."],
    hu: ["A rÃ©gi kÃ¶zpontban nincsenek utak, csak csatornÃ¡k Ã©s gyalogutak.","Ãšgy is ismert, mint 'Hollandia VelencÃ©je'.","A kÃ¶zlekedÃ©s hagyomÃ¡nyosan az Ãºgynevezett suttogÃ³csÃ³nakokkal (Punter) tÃ¶rtÃ©nik.","TÃ¶bb mint 170 jellegzetes fahÃ­ddal rendelkezik.","A Weerribben-Wieden Nemzeti Park kÃ¶zepÃ©n talÃ¡lhatÃ³.","A rÃ©giÃ³ tÃ¶rtÃ©nelmi tÅ‘zegkitermelÃ©se sorÃ¡n jÃ¶tt lÃ©tre.","A nemzetkÃ¶zi turistÃ¡k kÃ¶rÃ©ben rendkÃ­vÃ¼l nÃ©pszerÅ± Ãºti cÃ©l.","Sok hÃ¡znak a tetejÃ©t mÃ©g ma is hagyomÃ¡nyosan nÃ¡ddal fedik."],
    ro: ["Centrul vechi nu are drumuri, doar canale È™i poteci.","CunoscutÄƒ ca 'VeneÈ›ia Olandei'.","Transportul se face Ã®n mod tradiÈ›ional Ã®n aÈ™a-numitele bÄƒrci cu È™oapte (Punter).","Are peste 170 de poduri caracteristice din lemn.","Situat Ã®n mijlocul Parcului NaÈ›ional Weerribben-Wieden.","Creat de extracÈ›ia istoricÄƒ a turbei din regiune.","O destinaÈ›ie extrem de popularÄƒ pentru turiÈ™tii internaÈ›ionali.","Multe case au Ã®ncÄƒ acoperiÈ™uri de stuf tradiÈ›ionale."],
    en: ["The old center has no roads, only canals and footpaths.","Known as the 'Venice of the Netherlands'.","Transportation is traditionally by so-called whisper boats (Punter).","Has over 170 characteristic wooden bridges.","Located in the middle of the Weerribben-Wieden National Park.","Created by historical peat extraction in the region.","An extremely popular destination for international tourists.","Many houses have roofs that are still traditionally thatched with reeds."]
  },
      factsAdvanced: {
    de: [
      "Im historischen Zentrum von Giethoorn gibt es keine AutostraÃŸen, sondern nur Wasserwege und Radwege.",
      "Das Dorf hat seinen Ursprung in der Torfgewinnung; durch das Abgraben des Torfs entstanden Teiche und Seen.",
      "Es gibt Ã¼ber 170 hÃ¶lzerne BogenbrÃ¼cken, die die kleinen Inseln des Dorfes miteinander verbinden.",
      "Ein GroÃŸteil der Einwohner nutzt KÃ¤hne (Punter), um Waren zu transportieren oder sogar Tiere auf Weiden zu bringen."
    ],
    hu: ["A faluban tÃ¶bb mint 170 kis fahÃ­d kÃ¶ti Ã¶ssze a csatornÃ¡k Ã¡ltal elvÃ¡lasztott telkeket.", "A hagyomÃ¡nyos giethoorni hÃ¡zak nÃ¡dtetÅ‘vel rendelkeznek, ami rÃ©gen a legolcsÃ³bb tetÅ‘fedÅ‘ anyag volt.", "A suttogÃ³ csÃ³nakok elektromos motorral mÅ±kÃ¶dnek, hogy ne zavarjÃ¡k a falu nyugalmÃ¡t.", "A telepÃ¼lÃ©s kÃ¼lÃ¶nÃ¶sen az Ã¡zsiai, fÅ‘leg kÃ­nai turistÃ¡k kÃ¶rÃ©ben rendkÃ­vÃ¼l nÃ©pszerÅ±."],
    ro: [
      "ÃŽn sat, peste 170 de poduri mici de lemn leagÄƒ parcelele separate de canale.",
      "Casele tradiÈ›ionale din Giethoorn au acoperiÈ™uri de stuf, care Ã®n trecut era cel mai ieftin material pentru acoperiÈ™.",
      "BÄƒrcile cu È™oapte au motoare electrice pentru a nu deranja liniÈ™tea satului.",
      "AÈ™ezarea este extrem de popularÄƒ, Ã®n special Ã®n rÃ¢ndul turiÈ™tilor asiatici."
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
    de: "Kinderdijk ist weltbekannt fÃ¼r sein auÃŸergewÃ¶hnliches Ensemble aus 19 historischen WindmÃ¼hlen, die malerisch an den KanÃ¤len der Provinz SÃ¼dholland stehen. Dieses UNESCO-Weltkulturerbe veranschaulicht eindrucksvoll die jahrhundertealte niederlÃ¤ndische Tradition des Wassermanagements. Die im 18. Jahrhundert erbauten MÃ¼hlen dienten dazu, das Wasser aus den Poldern zu pumpen und die Region vor Ãœberschwemmungen zu schÃ¼tzen. Ein absolutes Muss fÃ¼r jeden Besucher der Niederlande.",
    hu: "Kinderdijk vilÃ¡ghÃ­rÅ± a DÃ©l-Holland tartomÃ¡ny csatornÃ¡i mentÃ©n festÅ‘ien sorakozÃ³ 19 tÃ¶rtÃ©nelmi szÃ©lmalombÃ³l Ã¡llÃ³ kivÃ©teles egyÃ¼ttesÃ©rÅ‘l. Ez az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi helyszÃ­n lenyÅ±gÃ¶zÅ‘en szemlÃ©lteti a holland vÃ­zgazdÃ¡lkodÃ¡s Ã©vszÃ¡zados hagyomÃ¡nyÃ¡t. A 18. szÃ¡zadban Ã©pÃ¼lt malmokat arra hasznÃ¡ltÃ¡k, hogy kiszivattyÃºzzÃ¡k a vizet a polderekbÅ‘l, Ã©s megvÃ©djÃ©k a rÃ©giÃ³t az Ã¡rvizektÅ‘l. AbszolÃºt kÃ¶telezÅ‘ lÃ¡tnivalÃ³ minden hollandiai lÃ¡togatÃ³ szÃ¡mÃ¡ra.",
    ro: "Kinderdijk este faimos Ã®n Ã®ntreaga lume pentru ansamblul sÄƒu excepÈ›ional de 19 mori de vÃ¢nt istorice situate pitoresc de-a lungul canalelor din provincia Olanda de Sud. Acest sit al Patrimoniului Mondial UNESCO ilustreazÄƒ impresionant tradiÈ›ia olandezÄƒ de secole a managementului apei. Morile, construite Ã®n secolul al XVIII-lea, au fost folosite pentru a pompa apa din poldere È™i pentru a proteja regiunea de inundaÈ›ii. O necesitate absolutÄƒ pentru fiecare vizitator al Olandei.",
    en: "Kinderdijk is world-famous for its exceptional ensemble of 19 historic windmills situated picturesquely along the canals in the province of South Holland. This UNESCO World Heritage site impressively illustrates the centuries-old Dutch tradition of water management. The mills, built in the 18th century, were used to pump water out of the polders and protect the region from flooding. An absolute must for every visitor to the Netherlands."
  },
      descriptionAdvanced: {
    de: "Kinderdijk ist ein kleines Dorf in der Provinz SÃ¼dholland, das eine der berÃ¼hmtesten und ikonischsten Landschaften der Niederlande bietet. Hier steht ein Netzwerk von 19 authentischen WindmÃ¼hlen aus dem 18. Jahrhundert, die an den Ufern der KanÃ¤le erbaut wurden, um das tiefliegende Polderland vor Ãœberschwemmungen zu schÃ¼tzen. Diese historischen Konstruktionen sind ein Meisterwerk des traditionellen niederlÃ¤ndischen Wassermanagements und dokumentieren den jahrhundertealten Kampf der NiederlÃ¤nder gegen das Wasser. Aufgrund ihrer historischen und technologischen Bedeutung wurden die MÃ¼hlen von Kinderdijk in die Liste des UNESCO-Weltkulturerbes aufgenommen. Physik K6: Die WindmÃ¼hlen von Kinderdijk pumpten Wasser bergauf. Wie kann Windenergie genutzt werden, um eine Archimedische Schraube anzutreiben?",
    hu: "Kinderdijk egy vilÃ¡ghÃ­rÅ± szÃ©lmalom-komplexum DÃ©l-HollandiÃ¡ban, amely az Alblasserwaard polder vÃ­zszintjÃ©nek szabÃ¡lyozÃ¡sÃ¡ra Ã©pÃ¼lt. A 18. szÃ¡zad kÃ¶zepÃ©n, 1738 Ã©s 1740 kÃ¶zÃ¶tt Ã©pÃ¼lt 19 szÃ©lmalom a legnagyobb fennmaradt ilyen jellegÅ± csoportosulÃ¡s HollandiÃ¡ban. Eredeti cÃ©ljuk az volt, hogy a vizet a mÃ©lyebben fekvÅ‘ terÃ¼letekrÅ‘l a Lek folyÃ³ba pumpÃ¡ljÃ¡k, megelÅ‘zve az elÃ¡rasztÃ¡st. A komplexum 1997 Ã³ta az UNESCO VilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze, Ã©s lenyÅ±gÃ¶zÅ‘ pÃ©ldÃ¡ja a hagyomÃ¡nyos holland vÃ­zgazdÃ¡lkodÃ¡snak. TÃ¶rtÃ©nelem K7: Milyen technolÃ³giai innovÃ¡ciÃ³t jelentettek a szÃ©lmalmok a holland vÃ­zgazdÃ¡lkodÃ¡sban a 18. szÃ¡zadban?",
    ro: "Kinderdijk este un complex de mori de vÃ¢nt faimos Ã®n lume, situat Ã®n Olanda de Sud, construit pentru a regla nivelul apei din polderul Alblasserwaard. Cele 19 mori de vÃ¢nt, construite la mijlocul secolului al XVIII-lea, Ã®ntre 1738 È™i 1740, reprezintÄƒ cel mai mare grup de acest gen care a supravieÈ›uit Ã®n ÈšÄƒrile de Jos. Scopul lor original era de a pompa apa din zonele joase Ã®n rÃ¢ul Lek, prevenind inundaÈ›iile. Complexul este un sit al Patrimoniului Mondial UNESCO din 1997 È™i un exemplu uimitor de management tradiÈ›ional olandez al apei. Istorie K7: Ce inovaÈ›ie tehnologicÄƒ au reprezentat morile de vÃ¢nt Ã®n managementul olandez al apei Ã®n secolul al XVIII-lea?",
    en: "Kinderdijk is a small village in the province of South Holland that offers one of the most famous and iconic landscapes in the Netherlands. It features a network of 19 authentic 18th-century windmills built along the banks of canals to protect the low-lying polder land from flooding. These historical structures are a masterpiece of traditional Dutch water management, documenting the centuries-old battle of the Dutch against the water. Because of their historical and technological significance, the windmills of Kinderdijk were added to the UNESCO World Heritage List. Physics K6: The windmills of Kinderdijk pumped water uphill. How can wind energy be used to drive an Archimedean screw?"
  },
    facts: {
    de: ["Seit 1997 auf der Liste des UNESCO-Weltkulturerbes.","Das Netz besteht aus 19 gut erhaltenen MÃ¼hlen aus dem 18. Jahrhundert.","Sie wurden gebaut, um den tiefliegenden Alblasserwaard trockenzuhalten.","Ein ikonisches Symbol fÃ¼r den ewigen Kampf der NiederlÃ¤nder gegen das Wasser.","Einige MÃ¼hlen kÃ¶nnen von innen besichtigt werden.","Im Winter ist das zugefrorene Wasser ein beliebtes Eislaufgebiet.","Die MÃ¼hlen sind teilweise heute noch funktionstÃ¼chtig.","Liegt nicht weit entfernt von der GroÃŸstadt Rotterdam."],
    hu: ["1997 Ã³ta szerepel az UNESCO vilÃ¡gÃ¶rÃ¶ksÃ©gi listÃ¡jÃ¡n.","A hÃ¡lÃ³zat 19 jÃ³ Ã¡llapotban fennmaradt 18. szÃ¡zadi malombÃ³l Ã¡ll.","AzÃ©rt Ã©pÃ­tettÃ©k Å‘ket, hogy szÃ¡razon tartsÃ¡k az alacsonyan fekvÅ‘ Alblasserwaardot.","A hollandok vÃ­z elleni Ã¶rÃ¶kÃ¶s kÃ¼zdelmÃ©nek ikonikus szimbÃ³luma.","NÃ©hÃ¡ny malmot belÃ¼lrÅ‘l is meg lehet tekinteni.","TÃ©len a befagyott vÃ­z nÃ©pszerÅ± korcsolyÃ¡zÃ³ terÃ¼let.","A malmok egy rÃ©sze mÃ©g ma is mÅ±kÃ¶dÅ‘kÃ©pes.","Nem messze talÃ¡lhatÃ³ Rotterdam nagyvÃ¡rosÃ¡tÃ³l."],
    ro: ["AflatÄƒ pe lista Patrimoniului Mondial UNESCO din 1997.","ReÈ›eaua este formatÄƒ din 19 mori bine conservate din secolul al XVIII-lea.","Au fost construite pentru a menÈ›ine uscatul jos Alblasserwaard.","Un simbol iconic pentru lupta eternÄƒ a olandezilor Ã®mpotriva apei.","Unele mori pot fi vizitate pe dinÄƒuntru.","Iarna, apa Ã®ngheÈ›atÄƒ este o zonÄƒ popularÄƒ pentru patinaj pe gheaÈ›Äƒ.","Unele mori sunt Ã®ncÄƒ funcÈ›ionale astÄƒzi.","Situat nu departe de marele oraÈ™ Rotterdam."],
    en: ["On the UNESCO World Heritage list since 1997.","The network consists of 19 well-preserved 18th-century mills.","They were built to keep the low-lying Alblasserwaard dry.","An iconic symbol of the Dutch eternal struggle against water.","Some mills can be visited inside.","In winter, the frozen water is a popular ice skating area.","Some of the mills are still fully functional today.","Located not far from the major city of Rotterdam."]
  },
      factsAdvanced: {
    de: [
      "Die 19 MÃ¼hlen in Kinderdijk wurden um 1740 erbaut, um das Gebiet Alblasserwaard trocken zu halten.",
      "Kinderdijk wurde 1997 zum UNESCO-Weltkulturerbe erklÃ¤rt.",
      "Der Name 'Kinderdijk' (Kinderdeich) stammt der Legende nach von einer Wiege mit einem weinenden Baby, die bei einer groÃŸen Flut unversehrt ans Land gespÃ¼lt wurde.",
      "Obwohl heute moderne Pumpstationen die Arbeit verrichten, sind fast alle MÃ¼hlen noch funktionsfÃ¤hig."
    ],
    hu: ["A Kinderdijk malmai egy komplex, tÃ¶bblÃ©pcsÅ‘s pumpÃ¡lÃ¡si rendszert alkottak.", "Napjainkban a vizet modern, elektromos szivattyÃºÃ¡llomÃ¡sok mozgatjÃ¡k, de a malmok ma is mÅ±kÃ¶dÅ‘kÃ©pesek.", "A 'Kinderdijk' nÃ©v (GyermekgÃ¡t) egy legendÃ¡bÃ³l szÃ¡rmazik, amely szerint egy 1421-es Ã¡rvÃ­z utÃ¡n egy bÃ¶lcsÅ‘t mosott partra a vÃ­z egy macskÃ¡val Ã©s egy csecsemÅ‘vel.", "A 19 malom kÃ¶zÃ¼l sokat ma is laknak, fenntartva a molnÃ¡r-hagyomÃ¡nyokat."],
    ro: [
      "Cele 19 mori de vÃ¢nt din Kinderdijk au fost construite Ã®n jurul anului 1740 pentru a menÈ›ine uscatÄƒ zona Alblasserwaard.",
      "Kinderdijk a fost declarat sit al Patrimoniului Mondial UNESCO Ã®n 1997.",
      "Numele 'Kinderdijk' (Dicul Copilului) provine dintr-o legendÄƒ despre un leagÄƒn cu un bebeluÈ™ plÃ¢ngÃ¢nd care a ajuns neatins la È›Äƒrm Ã®n timpul unei mari inundaÈ›ii.",
      "DeÈ™i astÄƒzi staÈ›iile de pompare moderne fac treaba, aproape toate morile sunt Ã®ncÄƒ funcÈ›ionale."
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
    de: "Texel ist die grÃ¶ÃŸte und meistbesuchte der niederlÃ¤ndischen Watteninseln und liegt in Nordholland. Die Insel bietet eine unglaubliche landschaftliche Vielfalt: von einem endlosen Sandstrand an der WestkÃ¼ste Ã¼ber weite DÃ¼nenlandschaften im Nationalpark bis hin zu satten grÃ¼nen Wiesen und kleinen WÃ¤ldern. Texel ist berÃ¼hmt fÃ¼r seine Schafzucht, hervorragende Radwege und das Zentrum Ecomare, das sich um Seehunde und die Nordsee-Natur kÃ¼mmert.",
    hu: "Texel a legnagyobb Ã©s leglÃ¡togatottabb a holland Watt-szigetek kÃ¶zÃ¼l, Ã©s Ã‰szak-HollandiÃ¡ban talÃ¡lhatÃ³. A sziget hihetetlen tÃ¡ji vÃ¡ltozatossÃ¡got kÃ­nÃ¡l: a nyugati part vÃ©gtelen homokos strandjÃ¡tÃ³l a nemzeti park kiterjedt dÅ±nÃ©s tÃ¡jain Ã¡t a buja zÃ¶ld rÃ©tekig Ã©s kis erdÅ‘kig. Texel hÃ­res a juhtenyÃ©sztÃ©srÅ‘l, kivÃ¡lÃ³ kerÃ©kpÃ¡rÃºtjairÃ³l Ã©s az Ecomare kÃ¶zpontrÃ³l, amely a fÃ³kÃ¡kkal Ã©s az Ã‰szaki-tenger termÃ©szetÃ©vel foglalkozik.",
    ro: "Texel este cea mai mare È™i mai vizitatÄƒ dintre insulele Wadden din Olanda È™i se aflÄƒ Ã®n Olanda de Nord. Insula oferÄƒ o incredibilÄƒ diversitate peisagisticÄƒ: de la o plajÄƒ nesfÃ¢rÈ™itÄƒ de nisip pe coasta de vest la vaste peisaje de dune din parcul naÈ›ional, la pajiÈ™ti verzi È™i mici pÄƒduri. Texel este renumitÄƒ pentru creÈ™terea oilor, pistele excelente pentru biciclete È™i centrul Ecomare, care are grijÄƒ de foci È™i de natura MÄƒrii Nordului.",
    en: "Texel is the largest and most visited of the Dutch Wadden Islands and is located in North Holland. The island offers incredible scenic diversity: from an endless sandy beach on the west coast to vast dune landscapes in the national park, to lush green meadows and small forests. Texel is famous for its sheep breeding, excellent cycling paths, and the Ecomare center, which cares for seals and the nature of the North Sea."
  },
      descriptionAdvanced: {
    de: "Texel ist die grÃ¶ÃŸte und am dichtesten besiedelte der Westfriesischen Inseln in der Nordsee und gehÃ¶rt zur Provinz Nordholland. Die Insel ist bekannt fÃ¼r ihre vielfÃ¤ltige Naturlandschaft, die lange SandstrÃ¤nde, weite DÃ¼nengebiete, KiefernwÃ¤lder und Salzwiesen umfasst. Texel ist ein Paradies fÃ¼r Vogelbeobachter, da Millionen von ZugvÃ¶geln hier Rast machen, sowie fÃ¼r Naturliebhaber, die die Seehundstation Ecomare besuchen. Neben der Natur prÃ¤gt die Landwirtschaft, insbesondere die Schafzucht, das Bild der Insel; das Texelschaf und der daraus gewonnene KÃ¤se und die Wolle sind weit Ã¼ber die Inselgrenzen hinaus bekannt. Biologie K7: Auf Texel machen viele ZugvÃ¶gel Rast. Warum mÃ¼ssen ZugvÃ¶gel auf ihrer Reise nach SÃ¼den besonders viel fettreiche Nahrung zu sich nehmen?",
    hu: "Texel a legnagyobb Ã©s legnÃ©pesebb a holland Wadden-szigetek kÃ¶zÃ¼l, amely Ã‰szak-Holland tartomÃ¡nyhoz tartozik. A sziget hÃ­res vÃ¡ltozatos termÃ©szeti kÃ¶rnyezetÃ©rÅ‘l: hosszÃº, homokos strandok, dÅ±nÃ©k, fenyvesek, fenyÃ©rek Ã©s gazdag polderek alkotjÃ¡k a tÃ¡jat. TerÃ¼letÃ©nek mintegy harmada vÃ©dett nemzeti park (Duinen van Texel), amely madÃ¡rmegfigyelÅ‘k paradicsoma, hiszen tÃ¶bb szÃ¡z madÃ¡rfaj vonul Ã¡t vagy fÃ©szkel itt. A sziget gazdasÃ¡ga a turizmusra Ã©s a juhtenyÃ©sztÃ©sre Ã©pÃ¼l. KÃ¶rnyezetismeret K6: MiÃ©rt tekinthetÅ‘ a Wadden-tenger Ã©s a kÃ¶rnyezÅ‘ szigetek Ã¶koszisztÃ©mÃ¡ja globÃ¡lisan is egyedÃ¼lÃ¡llÃ³nak?",
    ro: "Texel este cea mai mare È™i cea mai dens populatÄƒ dintre insulele Wadden, aparÈ›inÃ¢nd provinciei Olanda de Nord. Insula este renumitÄƒ pentru mediul sÄƒu natural divers: plaje lungi cu nisip, dune, pÄƒduri de pini, lande È™i poldere bogate alcÄƒtuiesc peisajul. Aproximativ o treime din suprafaÈ›a sa este un parc naÈ›ional protejat (Duinen van Texel), care este un paradis pentru observatorii de pÄƒsÄƒri, deoarece sute de specii de pÄƒsÄƒri migreazÄƒ sau cuibÄƒresc aici. Economia insulei se bazeazÄƒ pe turism È™i creÈ™terea oilor. È˜tiinÈ›e ale naturii K6: De ce este ecosistemul MÄƒrii Wadden È™i al insulelor din jur considerat unic la nivel global?",
    en: "Texel is the largest and most populous of the West Frisian Islands in the North Sea and belongs to the province of North Holland. The island is known for its diverse natural landscape, which includes long sandy beaches, vast dune areas, pine forests, and salt marshes. Texel is a paradise for bird watchers, as millions of migratory birds stop here, as well as for nature lovers visiting the Ecomare seal sanctuary. Besides nature, agriculture, especially sheep farming, shapes the island's image; the Texel sheep and the cheese and wool derived from it are renowned far beyond the island. Biology K7: Many migratory birds stop to rest on Texel. Why do migratory birds need to eat a lot of fat-rich food on their journey south?"
  },
    facts: {
    de: ["Ist die grÃ¶ÃŸte der fÃ¼nf bewohnten niederlÃ¤ndischen Watteninseln.","Die Insel hat fast so viele Schafe wie menschliche Einwohner.","Der rote Leuchtturm am Nordstrand ist das Wahrzeichen von Texel.","Ein groÃŸer Teil der Insel ist der 'Nationalpark Duinen van Texel'.","Das Naturzentrum 'Ecomare' pflegt verletzte Seehunde und VÃ¶gel.","Produziert eigenes Bier (Texels Skuumkoppe) und berÃ¼hmten SchafskÃ¤se.","Erreichbar Ã¼ber eine kurze FÃ¤hrverbindung ab Den Helder.","Ein Paradies fÃ¼r Vogelbeobachter und Naturliebhaber."],
    hu: ["A legnagyobb az Ã¶t lakott holland Watt-sziget kÃ¶zÃ¼l.","A szigeten majdnem annyi juh Ã©l, mint ahÃ¡ny ember.","Az Ã©szaki strandon lÃ©vÅ‘ piros vilÃ¡gÃ­tÃ³torony Texel jelkÃ©pe.","A sziget nagy rÃ©sze a 'Duinen van Texel Nemzeti Parkhoz' tartozik.","Az 'Ecomare' termÃ©szetvÃ©delmi kÃ¶zpont sÃ©rÃ¼lt fÃ³kÃ¡kat Ã©s madarakat Ã¡pol.","SajÃ¡t sÃ¶rt (Texels Skuumkoppe) Ã©s hÃ­res juhsajtot gyÃ¡rt.","Den HelderbÅ‘l rÃ¶vid kompjÃ¡rattal elÃ©rhetÅ‘.","Paradicsom a madÃ¡rmegfigyelÅ‘k Ã©s a termÃ©szetbarÃ¡tok szÃ¡mÃ¡ra."],
    ro: ["Este cea mai mare dintre cele cinci insule Wadden locuite din Olanda.","Insula are aproape la fel de multe oi ca È™i locuitori umani.","Farul roÈ™u de pe plaja de nord este reperul din Texel.","O mare parte a insulei este 'Parcul NaÈ›ional Duinen van Texel'.","Centrul natural 'Ecomare' Ã®ngrijeÈ™te focile È™i pÄƒsÄƒrile rÄƒnite.","Produce propria bere (Texels Skuumkoppe) È™i celebra brÃ¢nzÄƒ de oaie.","Accesibil prin intermediul unui feribot scurt de la Den Helder.","Un paradis pentru observatorii de pÄƒsÄƒri È™i iubitorii de naturÄƒ."],
    en: ["Is the largest of the five inhabited Dutch Wadden Islands.","The island has almost as many sheep as human inhabitants.","The red lighthouse on the north beach is the landmark of Texel.","A large part of the island is the 'Duinen van Texel National Park'.","The nature center 'Ecomare' cares for injured seals and birds.","Produces its own beer (Texels Skuumkoppe) and famous sheep cheese.","Accessible via a short ferry connection from Den Helder.","A paradise for bird watchers and nature lovers."]
  },
      factsAdvanced: {
    de: [
      "Texel ist nur Ã¼ber eine kurze, 20-minÃ¼tige FÃ¤hrfahrt von der Hafenstadt Den Helder aus zu erreichen.",
      "Auf der Insel leben mehr Schafe als menschliche Einwohner (etwa 14.000 Menschen gegenÃ¼ber zehntausenden Schafen).",
      "Ein Drittel der InselflÃ¤che steht als Nationalpark 'Duinen van Texel' unter Naturschutz.",
      "Die Seehundauffangstation Ecomare auf Texel rettet kranke und verwaiste Seehunde aus dem Wattenmeer."
    ],
    hu: ["Texel szigetÃ©n nagyjÃ¡bÃ³l annyi juh Ã©l, mint ember (kÃ¶rÃ¼lbelÃ¼l 14 000).", "Az Ecomare nevÅ± tengeri mÃºzeum Ã©s fÃ³kamenhely a sziget egyik legnÃ©pszerÅ±bb lÃ¡tvÃ¡nyossÃ¡ga.", "A szigetet komppal lehet megkÃ¶zelÃ­teni Den HelderbÅ‘l, az Ãºt mindÃ¶ssze 20 percet vesz igÃ©nybe.", "Itt Ã©vente megrendezik a vilÃ¡g legnagyobb katamarÃ¡n vitorlÃ¡sversenyÃ©t, a Ronde om Texelt."],
    ro: [
      "Texel poate fi atins doar printr-o scurtÄƒ cÄƒlÄƒtorie cu feribotul de 20 de minute din portul Den Helder.",
      "Pe insulÄƒ trÄƒiesc mai multe oi decÃ¢t locuitori umani (aproximativ 14.000 de oameni faÈ›Äƒ de zeci de mii de oi).",
      "O treime din suprafaÈ›a insulei este protejatÄƒ ca parcul naÈ›ional 'Duinen van Texel'.",
      "Sanctuarul de foci Ecomare de pe Texel salveazÄƒ focile bolnave È™i orfane din Marea Wadden."
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
    de: "Der Nationalpark De Hoge Veluwe ist das grÃ¶ÃŸte durchgehende Naturschutzgebiet der Niederlande und befindet sich in der Provinz Gelderland. Er bietet eine faszinierende Mischung aus dichten WÃ¤ldern, weiten HeideflÃ¤chen und beeindruckenden Sandverwehungen. Eine Besonderheit des Parks sind die kostenlosen weiÃŸen FahrrÃ¤der, mit denen Besucher das Areal erkunden kÃ¶nnen. Mitten im Park liegt zudem das KrÃ¶ller-MÃ¼ller-Museum mit einer weltberÃ¼hmten Van-Gogh-Sammlung.",
    hu: "A De Hoge Veluwe Nemzeti Park Hollandia legnagyobb egybefÃ¼ggÅ‘ termÃ©szetvÃ©delmi terÃ¼lete, amely Gelderland tartomÃ¡nyban talÃ¡lhatÃ³. SÅ±rÅ± erdÅ‘k, kiterjedt fenyÃ©rek Ã©s lenyÅ±gÃ¶zÅ‘ homokfÃºvÃ¡sok lenyÅ±gÃ¶zÅ‘ keverÃ©kÃ©t kÃ­nÃ¡lja. A park egyik kÃ¼lÃ¶nlegessÃ©ge az ingyenes fehÃ©r kerÃ©kpÃ¡rok, amelyekkel a lÃ¡togatÃ³k felfedezhetik a terÃ¼letet. A park kÃ¶zepÃ©n talÃ¡lhatÃ³ a KrÃ¶ller-MÃ¼ller MÃºzeum is egy vilÃ¡ghÃ­rÅ± Van Gogh-gyÅ±jtemÃ©nnyel.",
    ro: "Parcul NaÈ›ional De Hoge Veluwe este cea mai mare rezervaÈ›ie naturalÄƒ continuÄƒ din ÈšÄƒrile de Jos È™i este situat Ã®n provincia Gelderland. OferÄƒ un amestec fascinant de pÄƒduri dese, suprafeÈ›e Ã®ntinse de cÃ¢mpie È™i depuneri impresionante de nisip. O caracteristicÄƒ specialÄƒ a parcului sunt bicicletele albe gratuite cu care vizitatorii pot explora zona. ÃŽn mijlocul parcului se aflÄƒ, de asemenea, Muzeul KrÃ¶ller-MÃ¼ller cu o colecÈ›ie Van Gogh de renume mondial.",
    en: "The De Hoge Veluwe National Park is the largest continuous nature reserve in the Netherlands and is located in the province of Gelderland. It offers a fascinating mix of dense forests, extensive heathlands, and impressive sand drifts. A special feature of the park are the free white bicycles that visitors can use to explore the area. In the middle of the park is also the KrÃ¶ller-MÃ¼ller Museum with a world-famous Van Gogh collection."
  },
      descriptionAdvanced: {
    de: "Der Nationalpark De Hoge Veluwe in der Provinz Gelderland ist das grÃ¶ÃŸte privat verwaltete Naturschutzgebiet der Niederlande und eine der schÃ¶nsten Landschaften des Landes. Der Park zeichnet sich durch eine enorme landschaftliche Vielfalt aus, die von dichten Nadel- und LaubwÃ¤ldern Ã¼ber weite, purpur blÃ¼hende HeideflÃ¤chen bis hin zu dynamischen Sandverwehungen reicht. Neben der reichen Tierwelt, darunter Rothirsche, Wildschweine und Mufflons, ist der Park berÃ¼hmt fÃ¼r das KrÃ¶ller-MÃ¼ller-Museum, das mitten in der Natur liegt und eine herausragende Van-Gogh-Sammlung beherbergt. Besucher erkunden den Park typischerweise auf den kostenlos zur VerfÃ¼gung stehenden weiÃŸen FahrrÃ¤dern. Biologie K6: In De Hoge Veluwe gibt es groÃŸe, offene SandflÃ¤chen. Warum haben Pflanzen es schwer, auf diesen trockenen SanddÃ¼nen Wurzeln zu schlagen?",
    hu: "A Hoge Veluwe Nemzeti Park Hollandia legnagyobb egybefÃ¼ggÅ‘ termÃ©szetvÃ©delmi terÃ¼lete, amely Gelderland tartomÃ¡nyban talÃ¡lhatÃ³. A parkot egy gazdag hÃ¡zaspÃ¡r, Anton KrÃ¶ller Ã©s Helene MÃ¼ller alapÃ­totta a 20. szÃ¡zad elejÃ©n. A tÃ¡j rendkÃ­vÃ¼l vÃ¡ltozatos: kiterjedt fenyÅ‘erdÅ‘k, hatalmas homokdÅ±nÃ©k Ã©s lila fenyÃ©rek vÃ¡ltakoznak, mikÃ¶zben gÃ­mszarvasok, vaddisznÃ³k Ã©s muflonok Ã©lnek itt szabadon. A park szÃ­vÃ©ben talÃ¡lhatÃ³ a hÃ­res KrÃ¶ller-MÃ¼ller MÃºzeum is. TermÃ©szetismeret K7: Hogyan jÃ¶ttek lÃ©tre a park terÃ¼letÃ©n talÃ¡lhatÃ³ hatalmas futÃ³homokdÅ±nÃ©k?",
    ro: "Parcul NaÈ›ional Hoge Veluwe este cea mai mare rezervaÈ›ie naturalÄƒ continuÄƒ din Olanda, situatÄƒ Ã®n provincia Gelderland. Parcul a fost fondat la Ã®nceputul secolului al XX-lea de un cuplu bogat, Anton KrÃ¶ller È™i Helene MÃ¼ller. Peisajul este extrem de divers: pÄƒduri extinse de pini, dune masive de nisip È™i mlaÈ™tini purpurii alterneazÄƒ, Ã®n timp ce cerbi roÈ™ii, mistreÈ›i È™i mufloni trÄƒiesc aici Ã®n sÄƒlbÄƒticie. ÃŽn inima parcului se aflÄƒ, de asemenea, celebrul Muzeul KrÃ¶ller-MÃ¼ller. È˜tiinÈ›ele naturii K7: Cum s-au format dunele masive de nisip miÈ™cÄƒtor din interiorul parcului?",
    en: "De Hoge Veluwe National Park in the province of Gelderland is the largest privately managed nature reserve in the Netherlands and one of the country's most beautiful landscapes. The park features enormous scenic diversity, ranging from dense coniferous and deciduous forests to vast, purple-blooming heathlands and dynamic sand drifts. Besides the rich wildlife, including red deer, wild boar, and mouflon, the park is famous for the KrÃ¶ller-MÃ¼ller Museum, which is situated right in the middle of nature and houses an outstanding Van Gogh collection. Visitors typically explore the park on the free white bicycles provided. Biology K6: De Hoge Veluwe has large, open areas of sand. Why do plants struggle to take root on these dry sand dunes?"
  },
    facts: {
    de: ["GrÃ¶ÃŸter zusammenhÃ¤ngender, privat verwalteter Nationalpark im Land.","BerÃ¼hmt fÃ¼r das Angebot der 'Witte Fietsen' (weiÃŸe Gratis-FahrrÃ¤der).","Beherbergt das KrÃ¶ller-MÃ¼ller-Museum mit groÃŸem Skulpturengarten.","Die Landschaft reicht von SanddÃ¼nen bis zu ausgedehnten WÃ¤ldern.","Heimat von Wildtieren wie Rothirschen, Wildschweinen und Mufflons.","Das Jagdhaus St. Hubertus ist ein architektonisches Highlight.","UrsprÃ¼nglich das private Jagdrevier des Ehepaars KrÃ¶ller-MÃ¼ller.","Bietet spektakulÃ¤re Aussichten zur HeideblÃ¼te im August."],
    hu: ["A legnagyobb egybefÃ¼ggÅ‘, magÃ¡nkÃ©zben lÃ©vÅ‘ nemzeti park az orszÃ¡gban.","HÃ­res a 'Witte Fietsen' (ingyenes fehÃ©r kerÃ©kpÃ¡rok) szolgÃ¡ltatÃ¡srÃ³l.","A KrÃ¶ller-MÃ¼ller MÃºzeumnak Ã©s annak nagy szoborparkjÃ¡nak ad otthont.","A tÃ¡j a homokdÅ±nÃ©ktÅ‘l a kiterjedt erdÅ‘kig terjed.","Vadon Ã©lÅ‘ Ã¡llatok, pl. gÃ­mszarvasok, vaddisznÃ³k Ã©s muflonok otthona.","A St. Hubertus vadÃ¡szhÃ¡z egy Ã©pÃ­tÃ©szeti fÃ©nypont.","Eredetileg a KrÃ¶ller-MÃ¼ller hÃ¡zaspÃ¡r magÃ¡n vadÃ¡szterÃ¼lete volt.","LÃ¡tvÃ¡nyos kilÃ¡tÃ¡st kÃ­nÃ¡l augusztusban, a hanga virÃ¡gzÃ¡sakor."],
    ro: ["Cel mai mare parc naÈ›ional continuu, administrat privat din È›arÄƒ.","Faimos pentru oferta de 'Witte Fietsen' (biciclete albe gratuite).","GÄƒzduieÈ™te Muzeul KrÃ¶ller-MÃ¼ller cu o grÄƒdinÄƒ mare de sculpturi.","Peisajul variazÄƒ de la dune de nisip la pÄƒduri extinse.","Casa unor animale sÄƒlbatice precum cerbi roÈ™ii, mistreÈ›i È™i mufloni.","Cabana de vÃ¢nÄƒtoare St. Hubertus este un punct culminant arhitectural.","A fost iniÈ›ial terenul de vÃ¢nÄƒtoare privat al cuplului KrÃ¶ller-MÃ¼ller.","OferÄƒ vederi spectaculoase ale Ã®nfloririi bruyerei Ã®n luna august."],
    en: ["Largest continuous, privately managed national park in the country.","Famous for offering 'Witte Fietsen' (free white bicycles).","Houses the KrÃ¶ller-MÃ¼ller Museum with a large sculpture garden.","The landscape ranges from sand dunes to extensive forests.","Home to wildlife such as red deer, wild boar, and mouflon.","The St. Hubertus hunting lodge is an architectural highlight.","Originally the private hunting ground of the KrÃ¶ller-MÃ¼ller couple.","Offers spectacular views of the heather bloom in August."]
  },
      factsAdvanced: {
    de: [
      "Der Nationalpark wurde von dem Ehepaar KrÃ¶ller-MÃ¼ller gegrÃ¼ndet, das ihr Land und ihre Kunstsammlung dem Staat stiftete.",
      "Im Park stehen den Besuchern rund 1.800 weiÃŸe FahrrÃ¤der (Witte Fietsen) kostenlos zur VerfÃ¼gung.",
      "Das KrÃ¶ller-MÃ¼ller-Museum im Park besitzt die zweitgrÃ¶ÃŸte Van-Gogh-Sammlung der Welt.",
      "Der Park ist ein wichtiger Lebensraum fÃ¼r die 'Big Four' der Niederlande: Rothirsch, Wildschwein, Mufflon und Reh."
    ],
    hu: ["A park lÃ¡togatÃ³i ingyenesen hasznÃ¡lhatjÃ¡k a kihelyezett hÃ­res 'fehÃ©r kerÃ©kpÃ¡rokat' a terÃ¼let felfedezÃ©sÃ©re.", "A KrÃ¶ller-MÃ¼ller MÃºzeum a vilÃ¡g mÃ¡sodik legnagyobb Van Gogh-gyÅ±jtemÃ©nyÃ©vel bÃ¼szkÃ©lkedhet.", "Az alapÃ­tÃ³k Ã¡ltal Ã©pÃ­ttetett Jachthuis Sint Hubertus kastÃ©ly a park egyik Ã©pÃ­tÃ©szeti remekmÅ±ve.", "A park fenntartÃ¡sa szinte kizÃ¡rÃ³lag a belÃ©pÅ‘jegyek bevÃ©teleibÅ‘l tÃ¶rtÃ©nik, Ã¡llami tÃ¡mogatÃ¡s nÃ©lkÃ¼l."],
    ro: [
      "Parcul naÈ›ional a fost fondat de cuplul KrÃ¶ller-MÃ¼ller, care a donat statului pÄƒmÃ¢ntul È™i colecÈ›ia lor de artÄƒ.",
      "ÃŽn parc, vizitatorilor li se pun la dispoziÈ›ie gratuit aproximativ 1.800 de biciclete albe (Witte Fietsen).",
      "Muzeul KrÃ¶ller-MÃ¼ller din parc deÈ›ine a doua cea mai mare colecÈ›ie Van Gogh din lume.",
      "Parcul este un habitat important pentru 'Cei Patru Mari' din Olanda: cerbul roÈ™u, mistreÈ›ul, muflonul È™i cÄƒprioara."
    ],
    en: [
      "The national park was founded by the KrÃ¶ller-MÃ¼ller couple, who donated their land and art collection to the state.",
      "Around 1,800 white bicycles (Witte Fietsen) are available to visitors free of charge in the park.",
      "The KrÃ¶ller-MÃ¼ller Museum in the park holds the second-largest Van Gogh collection in the world.",
      "The park is a crucial habitat for the 'Big Four' of the Netherlands: red deer, wild boar, mouflon, and roe deer."
    ]
  }
  },
  {
    id: "NL-LM-ZAA", type: "landmark", parent: "NL-NH", coords: [4.82, 52.47],
    name: { de: "Zaanse Schans", hu: "Zaanse Schans", ro: "Zaanse Schans", en: "Zaanse Schans" },
    image: "/geo-images/netherlands/zaanse-schans.webp",
  description: {
    de: "Die Zaanse Schans in der NÃ¤he von Amsterdam ist ein lebendiges Freilichtmuseum, das das niederlÃ¤ndische Leben im 18. und 19. Jahrhundert perfekt konserviert hat. An den Ufern der Zaan reihen sich historische grÃ¼ne HolzhÃ¤user, traditionelle Handwerksbetriebe und mÃ¤chtige WindmÃ¼hlen, die noch heute in Betrieb sind. Hier kÃ¶nnen Besucher zusehen, wie Holzschuhe (Klompen) geschnitzt, KÃ¤se hergestellt oder Farbpigmente mit Windkraft gemahlen werden.",
    hu: "Az Amszterdam kÃ¶zelÃ©ben talÃ¡lhatÃ³ Zaanse Schans egy Ã©lÅ‘ szabadtÃ©ri mÃºzeum, amely tÃ¶kÃ©letesen megÅ‘rizte a 18. Ã©s 19. szÃ¡zadi holland Ã©letet. A Zaan partjÃ¡n tÃ¶rtÃ©nelmi zÃ¶ld fahÃ¡zak, hagyomÃ¡nyos kÃ©zmÅ±ves mÅ±helyek Ã©s hatalmas szÃ©lmalmok sorakoznak, amelyek ma is mÅ±kÃ¶dnek. Itt a lÃ¡togatÃ³k megnÃ©zhetik, hogyan faragnak fapapucsot (klompen), hogyan kÃ©szÃ­tenek sajtot vagy hogyan Å‘rÃ¶lnek festÃ©kpigmenteket szÃ©lenergiÃ¡val.",
    ro: "Zaanse Schans, lÃ¢ngÄƒ Amsterdam, este un muzeu viu Ã®n aer liber care a pÄƒstrat perfect viaÈ›a olandezÄƒ din secolele al XVIII-lea È™i al XIX-lea. Pe malurile Zaan-ului sunt aliniate case istorice verzi din lemn, ateliere tradiÈ›ionale È™i mori de vÃ¢nt masive care sunt Ã®ncÄƒ Ã®n funcÈ›iune. Aici vizitatorii pot urmÄƒri cum sunt sculptaÈ›i saboÈ›ii de lemn (klompen), se face brÃ¢nzÄƒ sau pigmenÈ›ii de culoare sunt mÄƒcinaÈ›i folosind energia eolianÄƒ.",
    en: "The Zaanse Schans near Amsterdam is a living open-air museum that has perfectly preserved Dutch life in the 18th and 19th centuries. Along the banks of the Zaan are lined up historic green wooden houses, traditional craft workshops, and massive windmills that are still in operation today. Here visitors can watch how wooden clogs (klompen) are carved, cheese is made, or color pigments are ground using wind power."
  },
      descriptionAdvanced: {
    de: "Zaanse Schans ist ein faszinierendes Freilichtmuseum in der NÃ¤he von Amsterdam, das das industrielle und handwerkliche Leben der Niederlande im 18. und 19. Jahrhundert lebendig hÃ¤lt. Das Areal am Ufer des Flusses Zaan ist ein Ensemble historischer, grÃ¼n gestrichener HolzhÃ¤user, traditioneller Handwerksbetriebe und einer Reihe majestÃ¤tischer, voll funktionsfÃ¤higer WindmÃ¼hlen. Die Region Zaanstreek gilt historisch als das erste Industriegebiet der Welt, in dem Hunderte von MÃ¼hlen unter anderem Holz sÃ¤gten, Ã–l pressten und GewÃ¼rze mahlten. Besucher kÃ¶nnen hier in authentischen WerkstÃ¤tten zuschauen, wie Holzschuhe (Klompen) geschnitzt oder traditioneller KÃ¤se hergestellt werden. Geschichte K7: In der Zaanstreek trieben WindmÃ¼hlen die ersten industriellen Maschinen an. Welche groÃŸe Erfindung ersetzte im 19. Jahrhundert die Windkraft in den Fabriken?",
    hu: "A Zaanse Schans egy Ã©letteli szabadtÃ©ri mÃºzeum AmszterdamtÃ³l Ã©szakra, amely a 18. Ã©s 19. szÃ¡zadi holland ipari forradalom emlÃ©kÃ©t Å‘rzi. A terÃ¼leten talÃ¡lhatÃ³ fÅ±rÃ©szmalmok, olajÃ¼tÅ‘k, fÅ±szer- Ã©s festÃ©kÅ‘rlÅ‘ szÃ©lmalmok hÅ±en mutatjÃ¡k be, hogyan mÅ±kÃ¶dÃ¶tt a Zaan folyÃ³ mente, amely egykor EurÃ³pa egyik legnagyobb Ã©s legrÃ©gebbi ipari kÃ¶zpontja volt tÃ¶bb szÃ¡z mÅ±kÃ¶dÅ‘ szÃ©lmalommal. A malmok mellett hagyomÃ¡nyos zÃ¶ld fahÃ¡zak, sajtÃ¼zem Ã©s fapapucs-kÃ©szÃ­tÅ‘ mÅ±hely is vÃ¡rja a lÃ¡togatÃ³kat. TÃ¶rtÃ©nelem K6: MiÃ©rt tekinthetÅ‘ a Zaan folyÃ³ mente a vilÃ¡g elsÅ‘ igazi ipari rÃ©giÃ³jÃ¡nak?",
    ro: "Zaanse Schans este un muzeu viu Ã®n aer liber la nord de Amsterdam, care pÄƒstreazÄƒ amintirea revoluÈ›iei industriale olandeze din secolele XVIII È™i XIX. Gaterul, presele de ulei, condimentele È™i morile de vÃ¢nt pentru vopsea gÄƒsite Ã®n zonÄƒ aratÄƒ fidel modul Ã®n care funcÈ›iona malul rÃ¢ului Zaan, cÃ¢ndva unul dintre cele mai mari È™i mai vechi centre industriale din Europa cu sute de mori de vÃ¢nt funcÈ›ionale. LÃ¢ngÄƒ mori, vizitatorii pot gÄƒsi case tradiÈ›ionale din lemn verde, o fabricÄƒ de brÃ¢nzÄƒ È™i un atelier de saboÈ›i. Istorie K6: De ce rÃ¢ul Zaan este considerat a fi prima regiune industrialÄƒ adevÄƒratÄƒ din lume?",
    en: "Zaanse Schans is a fascinating open-air museum near Amsterdam that keeps the industrial and artisanal life of the Netherlands in the 18th and 19th centuries alive. The area on the banks of the river Zaan is an ensemble of historical, green-painted wooden houses, traditional craft workshops, and a series of majestic, fully functional windmills. The Zaanstreek region is historically considered the world's first industrial area, where hundreds of mills sawed wood, pressed oil, and ground spices, among other things. Visitors can watch in authentic workshops how wooden shoes (clogs) are carved or traditional cheese is made. History K7: In the Zaanstreek, windmills powered the first industrial machines. What great invention replaced wind power in factories in the 19th century?"
  },
    facts: {
    de: ["Vermittelt das Flair der Zaan-Region wÃ¤hrend der frÃ¼hen Industrialisierung.","Eine Reihe von voll funktionsfÃ¤higen historischen WindmÃ¼hlen.","Besucher kÃ¶nnen z.B. GewÃ¼rz-, Farb- und SÃ¤gemÃ¼hlen besichtigen.","Traditionelle Herstellung von Gouda und Edamer KÃ¤se wird demonstriert.","Es gibt WerkstÃ¤tten fÃ¼r die typischen hollÃ¤ndischen Holzschuhe.","Die GebÃ¤ude wurden aus der gesamten Region hierher umgesiedelt.","GehÃ¶rt zu den Top-Touristenattraktionen in der NÃ¤he von Amsterdam.","Das Gebiet gilt als erstes echtes Industriegebiet der Welt."],
    hu: ["A Zaan rÃ©giÃ³ hangulatÃ¡t kÃ¶zvetÃ­ti a korai iparosodÃ¡s idejÃ©n.","Teljesen mÅ±kÃ¶dÅ‘kÃ©pes, tÃ¶rtÃ©nelmi szÃ©lmalmok sorozatÃ¡t lÃ¡thatjuk.","A lÃ¡togatÃ³k fÅ±szer-, festÃ©k- Ã©s fÅ±rÃ©szmalmokat is megtekinthetnek.","BemutatjÃ¡k a hagyomÃ¡nyos Gouda Ã©s EdÃ¡mi sajt kÃ©szÃ­tÃ©sÃ©t.","MÅ±helyek vannak a tipikus holland fapapucsokhoz is.","Az Ã©pÃ¼leteket az egÃ©sz rÃ©giÃ³bÃ³l telepÃ­tettÃ©k Ã¡t ide.","Amszterdam kÃ¶zelÃ©ben a legnÃ©pszerÅ±bb turisztikai lÃ¡tvÃ¡nyossÃ¡gok kÃ¶zÃ© tartozik.","A terÃ¼letet a vilÃ¡g elsÅ‘ igazi ipari rÃ©giÃ³jÃ¡nak tartjÃ¡k."],
    ro: ["Transmite farmecul regiunii Zaan din timpul industrializÄƒrii timpurii.","O serie de mori de vÃ¢nt istorice complet funcÈ›ionale.","Vizitatorii pot vizita mori de condimente, de culoare È™i gatere.","Sunt demonstrate producÈ›ia tradiÈ›ionalÄƒ de brÃ¢nzÄƒ Gouda È™i Edam.","Sunt ateliere pentru saboÈ›ii de lemn tipici olandezi.","ClÄƒdirile au fost mutate aici din Ã®ntreaga regiune.","Una dintre atracÈ›iile turistice de top din apropiere de Amsterdam.","Zona este consideratÄƒ a fi prima zonÄƒ industrialÄƒ adevÄƒratÄƒ din lume."],
    en: ["Conveys the flair of the Zaan region during early industrialization.","A series of fully functional historic windmills.","Visitors can tour spice, dye, and sawmills, among others.","Traditional production of Gouda and Edam cheese is demonstrated.","There are workshops for the typical Dutch wooden clogs.","The buildings were relocated here from the entire region.","One of the top tourist attractions near Amsterdam.","The area is considered the world's first true industrial region."]
  },
      factsAdvanced: {
    de: [
      "Die Zaanstreek war im 17. Jahrhundert mit Ã¼ber 600 WindmÃ¼hlen das grÃ¶ÃŸte Industriegebiet Europas.",
      "Die meisten historischen GebÃ¤ude der Zaanse Schans wurden in den 1960er Jahren aus anderen DÃ¶rfern der Region hierher verlegt.",
      "Die HolzsÃ¤gemÃ¼hlen der Region produzierten das Holz fÃ¼r die riesigen Flotten der NiederlÃ¤ndischen Ostindien-Kompanie.",
      "Die Zaanse Schans ist eine der beliebtesten Touristenattraktionen der Niederlande mit Ã¼ber zwei Millionen Besuchern jÃ¤hrlich."
    ],
    hu: ["A Zaanse Schans malmainak Ã©s hÃ¡zainak nagy rÃ©szÃ©t az 1960-as Ã©vekben teherautÃ³kon Ã©s hajÃ³kon szÃ¡llÃ­tottÃ¡k ide a rÃ©giÃ³ mÃ¡s rÃ©szeirÅ‘l a megmentÃ©sÃ¼k Ã©rdekÃ©ben.", "A terÃ¼let egykor tÃ¶bb mint 600 mÅ±kÃ¶dÅ‘ szÃ©lmalomnak adott otthont.", "Itt talÃ¡lhatÃ³ az orszÃ¡g elsÅ‘ Albert Heijn Ã©lelmiszerboltjÃ¡nak eredeti Ã©pÃ¼lete.", "A malmok kÃ¶zÃ¼l sok ma is aktÃ­van termel, pÃ©ldÃ¡ul fÅ±szereket, lenmagolajat vagy lisztet."],
    ro: [
      "Regiunea Zaan a fost cea mai mare zonÄƒ industrialÄƒ din Europa Ã®n secolul al XVII-lea, cu peste 600 de mori de vÃ¢nt.",
      "Majoritatea clÄƒdirilor istorice din Zaanse Schans au fost mutate aici Ã®n anii 1960 din alte sate din regiune.",
      "Gaterele de lemn din regiune au produs lemnul pentru flotele uriaÈ™e ale Companiei Olandeze a Indiilor de Est.",
      "Zaanse Schans este una dintre cele mai populare atracÈ›ii turistice din ÈšÄƒrile de Jos, cu peste douÄƒ milioane de vizitatori anual."
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
    name: { de: "ErasmusbrÃ¼cke", hu: "Erasmus hÃ­d", ro: "Podul Erasmus", en: "Erasmus Bridge" },
    image: "/geo-images/netherlands/erasmus-bridge.webp",
  description: {
    de: "Die ErasmusbrÃ¼cke, oft liebevoll 'Der Schwan' genannt, ist das unumstrittene architektonische Wahrzeichen des modernen Rotterdam. Mit ihrem markanten, asymmetrischen 139 Meter hohen Pylon spannt sich die SchrÃ¤gseilbrÃ¼cke Ã¼ber den Fluss Neue Maas und verbindet das Zentrum mit dem aufstrebenden Viertel 'Kop van Zuid'. Seit ihrer ErÃ¶ffnung 1996 prÃ¤gt sie die Skyline und steht symbolisch fÃ¼r die stÃ¤ndige Erneuerung der Hafenstadt.",
    hu: "Az Erasmus-hidat, amelyet gyakran 'A HattyÃº' nÃ©ven emlegetnek, a modern Rotterdam vitathatatlan Ã©pÃ­tÃ©szeti szimbÃ³luma. FeltÅ±nÅ‘, aszimmetrikus 139 mÃ©ter magas pilonjÃ¡val a ferdekÃ¡beles hÃ­d az Ãšj-Maas folyÃ³ felett Ã­vel Ã¡t, Ã©s Ã¶sszekÃ¶ti a kÃ¶zpontot a feltÃ¶rekvÅ‘ 'Kop van Zuid' negyeddel. 1996-os megnyitÃ¡sa Ã³ta meghatÃ¡rozza a vÃ¡roskÃ©pet, Ã©s a kikÃ¶tÅ‘vÃ¡ros folyamatos megÃºjulÃ¡sÃ¡t szimbolizÃ¡lja.",
    ro: "Podul Erasmus, denumit adesea cu afecÈ›iune 'LebÄƒda', este reperul arhitectural incontestabil al Rotterdamului modern. Cu pilonul sÄƒu izbitor, asimetric de 139 de metri Ã®nÄƒlÈ›ime, podul hobanat se Ã®ntinde peste rÃ¢ul Nieuwe Maas È™i conecteazÄƒ centrul cu districtul Ã®n plinÄƒ dezvoltare 'Kop van Zuid'. De la deschiderea sa Ã®n 1996, a definit linia orizontului È™i este un simbol al reÃ®nnoirii constante a oraÈ™ului-port.",
    en: "The Erasmus Bridge, often affectionately called 'The Swan', is the undisputed architectural landmark of modern Rotterdam. With its striking, asymmetrical 139-meter-high pylon, the cable-stayed bridge spans the Nieuwe Maas river and connects the center with the emerging 'Kop van Zuid' district. Since its opening in 1996, it has defined the skyline and symbolizes the constant renewal of the port city."
  },
      descriptionAdvanced: {
    de: "Die ErasmusbrÃ¼cke (Erasmusbrug) ist das unverkennbare architektonische Wahrzeichen der Stadt Rotterdam und Ã¼berspannt majestÃ¤tisch den Fluss Nieuwe Maas. Die 1996 fertiggestellte SchrÃ¤gseilbrÃ¼cke ist ein Meisterwerk der modernen Ingenieurskunst, entworfen von dem Architekten Ben van Berkel. Mit ihrem 139 Meter hohen, asymmetrisch geknickten Stahlpylon, der von Dutzenden von Stahlseilen gehalten wird, hat sich die BrÃ¼cke den eleganten Spitznamen 'Der Schwan' verdient. Sie verbindet nicht nur das historische Zentrum mit dem modernen Entwicklungsviertel Kop van Zuid, sondern ist auch ein Symbol fÃ¼r den innovativen Wiederaufbau und die Dynamik Rotterdams. Physik K8: Die ErasmusbrÃ¼cke ist eine SchrÃ¤gseilbrÃ¼cke. Wie verteilen die starken Stahlseile das enorme Gewicht der Fahrbahn auf den Pylon?",
    hu: "Az Erasmus-hÃ­d (Erasmusbrug) Rotterdam egyik legfontosabb Ã©pÃ­tÃ©szeti szimbÃ³luma, amely a Maas folyÃ³ felett Ã­vel Ã¡t, Ã¶sszekÃ¶tve a vÃ¡ros Ã©szaki Ã©s dÃ©li rÃ©szÃ©t. Az 1996-ban Ã¡tadott, 800 mÃ©ter hosszÃº ferdekÃ¡beles hidat Ben van Berkel Ã©pÃ­tÃ©sz tervezte. Aszimmetrikus, 139 mÃ©ter magas, fehÃ©ren ragyogÃ³ pilonja miatt a helyiek gyakran csak 'A HattyÃº' (De Zwaan) nÃ©ven emlegetik. A hÃ­d nemcsak kÃ¶zlekedÃ©si, hanem vizuÃ¡lis kapocs is Rotterdam modern felhÅ‘karcolÃ³-negyede (Kop van Zuid) Ã©s a tÃ¶rtÃ©nelmi kÃ¶zpont kÃ¶zÃ¶tt. Fizika K8: Milyen mÃ©rnÃ¶ki elÅ‘nyÃ¶kkel jÃ¡r a ferdekÃ¡beles hÃ­d kialakÃ­tÃ¡s a hagyomÃ¡nyos fÃ¼ggÅ‘hidakkal szemben?",
    ro: "Podul Erasmus (Erasmusbrug) este un simbol arhitectural inconfundabil al Rotterdamului È™i traverseazÄƒ maiestuos rÃ¢ul Nieuwe Maas. Finalizat Ã®n 1996, podul hobanat, lung de 800 de metri, a fost proiectat de arhitectul Ben van Berkel. DatoritÄƒ pilonului sÄƒu asimetric din oÈ›el, Ã®nalt de 139 de metri È™i susÈ›inut de cabluri groase, localnicii Ã®l numesc adesea 'LebÄƒda' (De Zwaan). Podul nu este doar o legÄƒturÄƒ de transport, ci È™i una vizualÄƒ Ã®ntre cartierul modern de zgÃ¢rie-nori al Rotterdamului (Kop van Zuid) È™i centrul istoric. FizicÄƒ K8: Ce avantaje inginereÈ™ti oferÄƒ designul unui pod hobanat Ã®n comparaÈ›ie cu podurile suspendate tradiÈ›ionale?",
    en: "The Erasmus Bridge (Erasmusbrug) is the unmistakable architectural landmark of the city of Rotterdam, majestically spanning the river Nieuwe Maas. Completed in 1996, the cable-stayed bridge is a masterpiece of modern engineering designed by architect Ben van Berkel. With its 139-meter-high, asymmetrically bent steel pylon held by dozens of steel cables, the bridge has earned the elegant nickname 'The Swan'. It not only connects the historical center with the modern Kop van Zuid development district, but is also a symbol of Rotterdam's innovative reconstruction and dynamism. Physics K8: The Erasmus Bridge is a cable-stayed bridge. How do the strong steel cables distribute the enormous weight of the roadway to the pylon?"
  },
    facts: {
    de: ["Architektonisches Wahrzeichen von Rotterdam, erbaut von Ben van Berkel.","Aufgrund ihrer Form wird sie oft 'De Zwaan' (Der Schwan) genannt.","Verbindet das nÃ¶rdliche und sÃ¼dliche Rotterdam Ã¼ber die Neue Maas.","Wurde 1996 von KÃ¶nigin Beatrix offiziell erÃ¶ffnet.","Die BrÃ¼cke ist 802 Meter lang und der Pylon 139 Meter hoch.","Besitzt eine KlappbrÃ¼cke fÃ¼r sehr groÃŸe Schiffe.","Spielt eine zentrale Rolle bei stÃ¤dtischen Events und MarathonlÃ¤ufen.","Ist nachts spektakulÃ¤r beleuchtet und dominiert die Skyline."],
    hu: ["Rotterdam Ã©pÃ­tÃ©szeti jelkÃ©pe, Ben van Berkel tervezte.","Alakja miatt gyakran 'De Zwaan'-nak (A HattyÃº) is nevezik.","Az Ãšj-Maas folyÃ³ felett kÃ¶ti Ã¶ssze Ã‰szak- Ã©s DÃ©l-Rotterdamot.","1996-ban hivatalosan Beatrix kirÃ¡lynÅ‘ nyitotta meg.","A hÃ­d 802 mÃ©ter hosszÃº, Ã©s a pilon 139 mÃ©ter magas.","FelnyithatÃ³ rÃ©sszel is rendelkezik a nagyon nagy hajÃ³k szÃ¡mÃ¡ra.","KÃ¶zponti szerepet jÃ¡tszik a vÃ¡rosi esemÃ©nyekben Ã©s maratonokon.","Ã‰jszaka lÃ¡tvÃ¡nyosan kivilÃ¡gÃ­tva uralja a vÃ¡roskÃ©pet."],
    ro: ["Reper arhitectural al Rotterdamului, construit de Ben van Berkel.","DatoritÄƒ formei sale, este numitÄƒ adesea 'De Zwaan' (LebÄƒda).","ConecteazÄƒ Rotterdamul de nord cu cel de sud peste Nieuwe Maas.","A fost deschis oficial Ã®n 1996 de Regina Beatrix.","Podul are 802 metri lungime È™i pilonul are 139 de metri Ã®nÄƒlÈ›ime.","Are o secÈ›iune basculantÄƒ pentru navele foarte mari.","JoacÄƒ un rol central Ã®n evenimentele urbane È™i la maratoane.","Este iluminat spectaculos noaptea È™i dominÄƒ orizontul."],
    en: ["Architectural landmark of Rotterdam, built by Ben van Berkel.","Because of its shape, it is often called 'De Zwaan' (The Swan).","Connects northern and southern Rotterdam across the Nieuwe Maas.","Was officially opened in 1996 by Queen Beatrix.","The bridge is 802 meters long and the pylon is 139 meters high.","Has a bascule section for very large ships.","Plays a central role in city events and marathons.","Is spectacularly illuminated at night and dominates the skyline."]
  },
      factsAdvanced: {
    de: [
      "Die BrÃ¼cke ist nach dem berÃ¼hmten Renaissance-Humanisten Erasmus von Rotterdam benannt.",
      "Mit einer LÃ¤nge von 802 Metern ist sie eine der lÃ¤ngsten BrÃ¼cken der Niederlande.",
      "Im sÃ¼dlichen Teil besitzt die BrÃ¼cke eine 89 Meter lange KlappbrÃ¼cke, um groÃŸen Schiffen die Durchfahrt zu ermÃ¶glichen; sie ist die schwerste KlappbrÃ¼cke Westeuropas.",
      "Die markante Form brachte der BrÃ¼cke den weit verbreiteten Spitznamen 'De Zwaan' (Der Schwan) ein."
    ],
    hu: ["Az Erasmus-hÃ­d dÃ©li rÃ©szÃ©n egy felnyithatÃ³ (bascule) szakasz talÃ¡lhatÃ³ a legnagyobb tengerjÃ¡rÃ³ hajÃ³k Ã¡thaladÃ¡sÃ¡hoz.", "Az Ã¡tadÃ¡sa utÃ¡ni elsÅ‘ hetekben erÅ‘s szÃ©lben a hÃ­d kÃ¡belei veszÃ©lyesen rezonÃ¡lni kezdtek, amit utÃ³lagos lengÃ©scsillapÃ­tÃ³kkal orvosoltak.", "A hÃ­d a hÃ­res humanista filozÃ³fusrÃ³l, Rotterdami ErasmusrÃ³l kapta a nevÃ©t.", "Gyakran szolgÃ¡l nagyszabÃ¡sÃº esemÃ©nyek, pÃ©ldÃ¡ul a Red Bull Air Race vagy zenei fesztivÃ¡lok hÃ¡tterekÃ©nt."],
    ro: [
      "Podul este numit dupÄƒ faimosul umanist renascentist Erasmus din Rotterdam.",
      "Cu o lungime de 802 metri, este unul dintre cele mai lungi poduri din Olanda.",
      "ÃŽn partea de sud, podul are o secÈ›iune basculantÄƒ de 89 de metri lungime pentru a permite trecerea navelor mari; este cel mai greu pod basculant din Europa de Vest.",
      "Forma izbitoare a adus podului porecla popularÄƒ 'De Zwaan' (LebÄƒda)."
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
    de: "Madurodam ist ein einzigartiger Miniaturpark in Den Haag, der Besuchern erlaubt, die gesamten Niederlande an nur einem Nachmittag zu entdecken. Auf einem MaÃŸstab von 1:25 sind hier die berÃ¼hmtesten Bauwerke, Landschaften und technischen Meisterleistungen des Landes detailgetreu nachgebaut. Es gibt animierte ZÃ¼ge, fahrende Schiffe am Rotterdamer Hafen und blÃ¼hende Mini-Tulpenfelder. Der Park ist ein lehrreiches Erlebnis, besonders fÃ¼r Familien.",
    hu: "A Madurodam egy egyedÃ¼lÃ¡llÃ³ miniatÅ±r park HÃ¡gÃ¡ban, amely lehetÅ‘vÃ© teszi a lÃ¡togatÃ³k szÃ¡mÃ¡ra, hogy egyetlen dÃ©lutÃ¡n alatt felfedezzÃ©k egÃ©sz HollandiÃ¡t. Az orszÃ¡g leghÃ­resebb Ã©pÃ¼letei, tÃ¡jai Ã©s mÅ±szaki remekmÅ±vei 1:25 mÃ©retarÃ¡nyban rÃ©szletesen Ãºjra vannak alkotva. Vannak animÃ¡lt vonatok, mozgÃ³ hajÃ³k a rotterdami kikÃ¶tÅ‘ben Ã©s virÃ¡gzÃ³ mini tulipÃ¡nmezÅ‘k. A park tanulsÃ¡gos Ã©lmÃ©ny, kÃ¼lÃ¶nÃ¶sen csalÃ¡dok szÃ¡mÃ¡ra.",
    ro: "Madurodam este un parc Ã®n miniaturÄƒ unic Ã®n Haga, care permite vizitatorilor sÄƒ descopere Ã®ntreaga Olanda Ã®ntr-o singurÄƒ dupÄƒ-amiazÄƒ. Cele mai faimoase clÄƒdiri, peisaje È™i capodopere inginereÈ™ti ale È›Äƒrii au fost recreate Ã®n detaliu la scarÄƒ 1:25. ExistÄƒ trenuri animate, nave Ã®n miÈ™care Ã®n portul Rotterdam È™i cÃ¢mpuri de lalele mini Ã®nflorite. Parcul este o experienÈ›Äƒ educaÈ›ionalÄƒ, mai ales pentru familii.",
    en: "Madurodam is a unique miniature park in The Hague that allows visitors to discover the entire Netherlands in just one afternoon. At a scale of 1:25, the country's most famous buildings, landscapes, and engineering feats are recreated in detail. There are animated trains, moving ships in the port of Rotterdam, and blooming mini tulip fields. The park is an educational experience, especially for families."
  },
      descriptionAdvanced: {
    de: "Madurodam ist ein einzigartiger Miniaturpark in Den Haag, der die architektonischen, historischen und industriellen HÃ¶hepunkte der Niederlande im MaÃŸstab 1:25 originalgetreu prÃ¤sentiert. Der Park wurde 1952 als GedenkstÃ¤tte fÃ¼r den im Zweiten Weltkrieg umgekommenen WiderstandskÃ¤mpfer George Maduro sowie als WohltÃ¤tigkeitsstiftung fÃ¼r Kinder gegrÃ¼ndet. Besucher kÃ¶nnen hier durch eine detailliert nachgebaute niederlÃ¤ndische Landschaft spazieren, die von fahrenden MiniaturzÃ¼gen, schwimmenden Schiffen und funktionierenden WindmÃ¼hlen belebt wird. Madurodam ist nicht nur eine Touristenattraktion, sondern vermittelt spielerisch Wissen Ã¼ber den niederlÃ¤ndischen Wasserbau, die Landwirtschaft und die Geschichte des Landes. Sachkunde K5: In Madurodam ist alles im MaÃŸstab 1:25 gebaut. Wenn ein echtes GebÃ¤ude 25 Meter hoch ist, wie hoch ist dann das Modell im Park?",
    hu: "A Madurodam egy lenyÅ±gÃ¶zÅ‘ miniatÅ±r park HÃ¡gÃ¡ban, amely az egÃ©sz holland tÃ¡rsadalom, Ã©pÃ­tÃ©szet Ã©s tÃ¶rtÃ©nelem 1:25 mÃ©retarÃ¡nyÃº, Ã©lethÅ± mÃ¡sÃ¡t mutatja be. A parkot 1952-ben nyitottÃ¡k meg George Maduro, egy a mÃ¡sodik vilÃ¡ghÃ¡borÃºban hÅ‘si halÃ¡lt halt curaÃ§aÃ³i ellenÃ¡llÃ³ emlÃ©kÃ©re. A lÃ¡togatÃ³k vÃ©gigsÃ©tÃ¡lhatnak a miniatÅ±r csatornÃ¡kon, a mozgÃ³ vonatok, szÃ©lmalmok Ã©s hajÃ³k kÃ¶zÃ¶tt, megcsodÃ¡lva az orszÃ¡g legfontosabb Ã©pÃ¼leteinek aprÃ³lÃ©kos modelljeit. A park bevÃ©teleit alapÃ­tÃ¡sa Ã³ta gyermekeket segÃ­tÅ‘ jÃ³tÃ©konysÃ¡gi szervezetek kapjÃ¡k. TÃ¡rsadalomismeret K5: Milyen cÃ©llal hoztÃ¡k lÃ©tre a Madurodam parkot, Ã©s hogyan szolgÃ¡lja ma a kÃ¶zÃ¶ssÃ©get?",
    ro: "Madurodam este un parc tematic Ã®n miniaturÄƒ fascinant din Haga, care prezintÄƒ o replicÄƒ fidelÄƒ la scara 1:25 a Ã®ntregii societÄƒÈ›i, arhitecturi È™i istorii olandeze. Parcul a fost deschis Ã®n 1952 Ã®n memoria lui George Maduro, un luptÄƒtor de rezistenÈ›Äƒ din CuraÃ§ao care a murit eroic Ã®n al Doilea RÄƒzboi Mondial. Vizitatorii se pot plimba de-a lungul canalelor Ã®n miniaturÄƒ, printre trenuri Ã®n miÈ™care, mori de vÃ¢nt È™i nave, admirÃ¢nd modelele meticuloase ale celor mai importante clÄƒdiri din È›arÄƒ. De la Ã®nfiinÈ›are, veniturile parcului au fost donate organizaÈ›iilor caritabile pentru copii. Studii sociale K5: ÃŽn ce scop a fost creat parcul Madurodam È™i cum serveÈ™te el comunitatea astÄƒzi?",
    en: "Madurodam is a unique miniature park in The Hague that faithfully presents the architectural, historical, and industrial highlights of the Netherlands on a 1:25 scale. The park was founded in 1952 as a memorial to George Maduro, a resistance fighter who died in World War II, and as a charitable foundation for children. Visitors can stroll through a meticulously recreated Dutch landscape enlivened by moving miniature trains, floating ships, and working windmills. Madurodam is not just a tourist attraction; it playfully imparts knowledge about Dutch water management, agriculture, and the country's history. Science K5: Everything in Madurodam is built on a 1:25 scale. If a real building is 25 meters high, how high is the model in the park?"
  },
    facts: {
    de: ["PrÃ¤sentiert Highlights der Niederlande im MaÃŸstab 1:25.","Wurde 1952 als Denkmal fÃ¼r den Kriegshelden George Maduro erÃ¶ffnet.","Gewinne des Parks gehen an wohltÃ¤tige Einrichtungen fÃ¼r Kinder.","Viele Modelle sind interaktiv und in Bewegung (ZÃ¼ge, Flugzeuge, Hafen).","Es gibt Nachbildungen vom Schiphol-Flughafen und dem Rijksmuseum.","Zeigt auch eindrucksvoll die niederlÃ¤ndische Wasserwirtschaft.","Ist eine der beliebtesten Familienattraktionen der Niederlande.","Wird kontinuierlich erweitert und digital modernisiert."],
    hu: ["1:25 mÃ©retarÃ¡nyban mutatja be Hollandia legfÅ‘bb lÃ¡tvÃ¡nyossÃ¡gait.","1952-ben nyÃ­lt meg George Maduro hÃ¡borÃºs hÅ‘s emlÃ©kÃ©re.","A park nyeresÃ©gÃ©t gyermekeket segÃ­tÅ‘ jÃ³tÃ©konysÃ¡gi szervezetek kapjÃ¡k.","SzÃ¡mos modell interaktÃ­v Ã©s mozog (vonatok, repÃ¼lÅ‘k, kikÃ¶tÅ‘).","Itt lÃ¡thatÃ³ a Schiphol repÃ¼lÅ‘tÃ©r Ã©s a Rijksmuseum mÃ¡solata is.","LÃ¡tvÃ¡nyosan mutatja be a holland vÃ­zgazdÃ¡lkodÃ¡st.","Hollandia egyik legnÃ©pszerÅ±bb csalÃ¡di lÃ¡tvÃ¡nyossÃ¡ga.","Folyamatosan bÅ‘vÃ­tik Ã©s digitÃ¡lisan modernizÃ¡ljÃ¡k."],
    ro: ["PrezintÄƒ aspectele esenÈ›iale ale Olandei la scarÄƒ 1:25.","Deschis Ã®n 1952 ca un memorial pentru eroul de rÄƒzboi George Maduro.","Profiturile parcului sunt destinate organizaÈ›iilor de caritate pentru copii.","Multe modele sunt interactive È™i Ã®n miÈ™care (trenuri, avioane, port).","ExistÄƒ replici ale aeroportului Schiphol È™i ale Rijksmuseum.","De asemenea, demonstreazÄƒ Ã®n mod impresionant managementul apei olandez.","Este una dintre cele mai populare atracÈ›ii de familie din Olanda.","Este Ã®n continuÄƒ expansiune È™i modernizat digital."],
    en: ["Presents highlights of the Netherlands at a 1:25 scale.","Was opened in 1952 as a memorial for the war hero George Maduro.","Profits from the park go to children's charities.","Many models are interactive and in motion (trains, airplanes, port).","There are replicas of Schiphol Airport and the Rijksmuseum.","Also impressively demonstrates Dutch water management.","Is one of the most popular family attractions in the Netherlands.","Is continuously expanded and digitally modernized."]
  },
      factsAdvanced: {
    de: [
      "Madurodam spendet seinen gesamten Gewinn an WohltÃ¤tigkeitsorganisationen, die sich fÃ¼r Kinder einsetzen.",
      "Die Modelle im Park sind exakte Nachbildungen echter niederlÃ¤ndischer Wahrzeichen im MaÃŸstab 1:25.",
      "Prinzessin (spÃ¤ter KÃ¶nigin) Beatrix war die erste offizielle BÃ¼rgermeisterin der Miniaturstadt Madurodam.",
      "Der Park zeigt eine sich stÃ¤ndig bewegende Infrastruktur, darunter eines der grÃ¶ÃŸten Modelleisenbahnnetze der Welt."
    ],
    hu: ["A parkban minden fa Ã©s bokor valÃ³di, amelyeket folyamatos metszÃ©ssel tartanak a modellÃ©pÃ¼letekhez illÅ‘ 1:25-Ã¶s arÃ¡nyban.", "A Madurodam a vilÃ¡g egyik legfejlettebb miniatÅ±r vasÃºthÃ¡lÃ³zatÃ¡val rendelkezik, amely mintegy 4 km hosszÃº.", "A park 1952-es megnyitÃ¡sakor Beatrix hercegnÅ‘ (a kÃ©sÅ‘bbi kirÃ¡lynÅ‘) lett a miniatÅ±r vÃ¡ros elsÅ‘ 'polgÃ¡rmestere'.", "Az Ã©pÃ¼letek elkÃ©szÃ­tÃ©se gyakran hÃ³napokat vagy Ã©veket vesz igÃ©nybe a 3D-szkennelÃ©si technolÃ³gia Ã©s a kÃ©zi munka Ã¶tvÃ¶zÃ©sÃ©vel."],
    ro: [
      "Madurodam Ã®È™i doneazÄƒ tot profitul organizaÈ›iilor caritabile care ajutÄƒ copiii.",
      "Modelele din parc sunt replici exacte ale obiectivelor turistice olandeze reale la scara 1:25.",
      "PrinÈ›esa (mai tÃ¢rziu Regina) Beatrix a fost primul primar oficial al oraÈ™ului Ã®n miniaturÄƒ Madurodam.",
      "Parcul prezintÄƒ o infrastructurÄƒ Ã®n miÈ™care constantÄƒ, inclusiv una dintre cele mai mari reÈ›ele de cale feratÄƒ Ã®n miniaturÄƒ din lume."
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
    de: "Efteling, gelegen in Nordbrabant, ist der grÃ¶ÃŸte, bekannteste und zauberhafteste Freizeitpark der Niederlande und zÃ¤hlt zu den Ã¤ltesten in Europa. UrsprÃ¼nglich als MÃ¤rchenwald mit von Anton Pieck entworfenen Szenen gestartet, bietet der Park heute eine perfekte Mischung aus nostalgischen MÃ¤rchen, spektakulÃ¤ren Achterbahnen und magischen Dark-Rides. Die liebevolle Gestaltung und das Thema Magie machen Efteling zu einer weltklasse Attraktion fÃ¼r alle Altersgruppen.",
    hu: "Az Ã‰szak-Brabantban talÃ¡lhatÃ³ Efteling Hollandia legnagyobb, legismertebb Ã©s legvarÃ¡zslatosabb vidÃ¡mparkja, valamint EurÃ³pa egyik legrÃ©gebbi ilyen lÃ©tesÃ­tmÃ©nye. Eredetileg Anton Pieck Ã¡ltal tervezett jelenetekbÅ‘l Ã¡llÃ³ meseerdÅ‘kÃ©nt indult, a park ma a nosztalgikus mesÃ©k, a lÃ¡tvÃ¡nyos hullÃ¡mvasutak Ã©s a varÃ¡zslatos sÃ¶tÃ©t tÃºrÃ¡k (dark rides) tÃ¶kÃ©letes keverÃ©kÃ©t kÃ­nÃ¡lja. A szeretetteljes kialakÃ­tÃ¡s Ã©s a varÃ¡zslat tÃ©mÃ¡ja teszi az Eftelinget vilÃ¡gszÃ­nvonalÃº lÃ¡tvÃ¡nyossÃ¡ggÃ¡ minden korosztÃ¡ly szÃ¡mÃ¡ra.",
    ro: "Efteling, situat Ã®n Brabantul de Nord, este cel mai mare, mai cunoscut È™i mai magic parc de distracÈ›ii din Olanda È™i unul dintre cele mai vechi din Europa. ÃŽncepÃ¢nd iniÈ›ial ca o pÄƒdure de basm cu scene proiectate de Anton Pieck, parcul oferÄƒ acum un amestec perfect de basme nostalgice, montagne russe spectaculoase È™i atracÈ›ii Ã®ntunecate magice. Designul minunat È™i tema magiei fac din Efteling o atracÈ›ie de clasÄƒ mondialÄƒ pentru toate vÃ¢rstele.",
    en: "Efteling, located in North Brabant, is the largest, best-known, and most magical amusement park in the Netherlands and one of the oldest in Europe. Originally starting as a fairytale forest with scenes designed by Anton Pieck, the park now offers a perfect mix of nostalgic fairytales, spectacular roller coasters, and magical dark rides. The loving design and the theme of magic make Efteling a world-class attraction for all ages."
  },
      descriptionAdvanced: {
    de: "Efteling ist der grÃ¶ÃŸte und Ã¤lteste Freizeitpark der Niederlande, gelegen im sÃ¼dniederlÃ¤ndischen Kaatsheuvel in der Provinz Nordbrabant. Er Ã¶ffnete 1952 seine Tore als Naturpark mit einem liebevoll gestalteten MÃ¤rchenwald, der vom berÃ¼hmten niederlÃ¤ndischen Illustrator Anton Pieck entworfen wurde. Sein romantischer, nostalgischer Zeichenstil prÃ¤gt bis heute das Erscheinungsbild des gesamten Parks. Im Laufe der Jahrzehnte hat sich Efteling zu einem der leading Themenparks Europas entwickelt, der spektakulÃ¤re Achterbahnen und aufwendige Dark Rides in dichten WÃ¤ldern versteckt und dabei stets seinem mÃ¤rchenhaften und mystischen Charakter treu geblieben ist. Kunst K5: Anton Pieck entwarf Efteling mit einem nostalgischen Zeichenstil. Warum nutzen MÃ¤rchenparks oft alte und traditionelle Baustile fÃ¼r ihre Kulissen?",
    hu: "Az Efteling EurÃ³pa egyik legrÃ©gebbi Ã©s leglÃ¡togatottabb vidÃ¡mparkja, amely Ã‰szak-Brabant tartomÃ¡nyban, Kaatsheuvelben talÃ¡lhatÃ³. A park 1952-ben nyÃ­lt meg egyetlen MeseerdÅ‘vel (Sprookjesbos), amelyet a hÃ­res holland illusztrÃ¡tor, Anton Pieck tervezett. SikerÃ©nek titka a romantikus, rÃ©szletgazdag dizÃ¡jnban Ã©s a hagyomÃ¡nyos eurÃ³pai mesÃ©k varÃ¡zslatos atmoszfÃ©rÃ¡jÃ¡nak megteremtÃ©sÃ©ben rejlik. MÃ¡ra egy modern, hullÃ¡mvasutakkal Ã©s sÃ¶tÃ©t utazÃ¡sokkal (dark rides) teli, gigantikus Ã©lmÃ©nyparkkÃ¡ nÅ‘tte ki magÃ¡t. Irodalom K5: Milyen eurÃ³pai mesÃ©k karakterei jelennek meg leggyakrabban az Efteling park MeseerdejÃ©ben?",
    ro: "Efteling este cel mai mare È™i mai vechi parc de distracÈ›ii din Olanda, situat Ã®n Kaatsheuvel, provincia Brabantul de Nord. È˜i-a deschis porÈ›ile Ã®n 1952 cu o PÄƒdure de Basm (Sprookjesbos) proiectatÄƒ cu dragoste de faimosul ilustrator olandez Anton Pieck. Secretul succesului sÄƒu constÄƒ Ã®n designul romantic È™i detaliat È™i Ã®n crearea atmosferei magice a basmelor tradiÈ›ionale europene. AstÄƒzi a devenit un gigantic parc de distracÈ›ii modern, plin de montagne russe È™i atracÈ›ii Ã®ntunecate (dark rides). LiteraturÄƒ K5: Personajele din ce basme europene apar cel mai des Ã®n PÄƒdurea de Basm a parcului Efteling?",
    en: "Efteling is the largest and oldest amusement park in the Netherlands, located in Kaatsheuvel in the southern province of North Brabant. It opened its gates in 1952 as a nature park with a lovingly designed Fairytale Forest created by the famous Dutch illustrator Anton Pieck. His romantic, nostalgic drawing style still characterizes the appearance of the entire park today. Over the decades, Efteling has developed into one of Europe's leading theme parks, hiding spectacular roller coasters and elaborate dark rides in dense forests while always remaining true to its fairytale and mystical character. Art K5: Anton Pieck designed Efteling with a nostalgic drawing style. Why do fairytale parks often use old and traditional architectural styles for their sets?"
  },
    facts: {
    de: ["GrÃ¶ÃŸter und besucherstÃ¤rkster Freizeitpark der Niederlande.","GeÃ¶ffnet 1952, ist er Ã¤lter als die meisten Disney-Parks.","Bekannt fÃ¼r den nostalgischen MÃ¤rchenwald (Sprookjesbos).","Das romantische Design stammt maÃŸgeblich vom KÃ¼nstler Anton Pieck.","Bietet Weltklasse-Achterbahnen wie den Dive-Coaster 'Baron 1898'.","Symbol des Parks ist die magische Figur 'Pardoes'.","Der Park ist an 365 Tagen im Jahr geÃ¶ffnet.","Dazu gehÃ¶ren auch ÃœbernachtungsmÃ¶glichkeiten und eine Theatershow."],
    hu: ["Hollandia legnagyobb Ã©s leglÃ¡togatottabb vidÃ¡mparkja.","1952-ben nyÃ­lt meg, Ã­gy rÃ©gebbi a legtÃ¶bb Disney-parknÃ¡l.","Nosztalgikus meseerdejÃ©rÅ‘l (Sprookjesbos) ismert.","A romantikus dizÃ¡jn nagyrÃ©szt Anton Pieck mÅ±vÃ©sz munkÃ¡ja.","VilÃ¡gszÃ­nvonalÃº hullÃ¡mvasutakat kÃ­nÃ¡l, mint a 'Baron 1898' szabadesÃ©ses.","A park jelkÃ©pe 'Pardoes', a varÃ¡zslatos figura.","A park az Ã©v 365 napjÃ¡n nyitva tart.","SzÃ¡llÃ¡shelyeket Ã©s egy szÃ­nhÃ¡zi mÅ±sort is magÃ¡ban foglal."],
    ro: ["Cel mai mare È™i mai vizitat parc de distracÈ›ii din Olanda.","Deschis Ã®n 1952, este mai vechi decÃ¢t majoritatea parcurilor Disney.","Cunoscut pentru pÄƒdurea nostalgicÄƒ a basmelor (Sprookjesbos).","Designul romantic provine Ã®n mare mÄƒsurÄƒ de la artistul Anton Pieck.","OferÄƒ montagne russe de talie mondialÄƒ precum Dive Coaster 'Baron 1898'.","Simbolul parcului este figura magicÄƒ 'Pardoes'.","Parcul este deschis 365 de zile pe an.","Include, de asemenea, opÈ›iuni de cazare È™i un spectacol de teatru."],
    en: ["Largest and most visited amusement park in the Netherlands.","Opened in 1952, it is older than most Disney parks.","Known for the nostalgic fairytale forest (Sprookjesbos).","The romantic design is largely the work of artist Anton Pieck.","Offers world-class roller coasters like the dive coaster 'Baron 1898'.","The symbol of the park is the magical figure 'Pardoes'.","The park is open 365 days a year.","Also includes overnight accommodations and a theater show."]
  },
      factsAdvanced: {
    de: [
      "Efteling ist dreimal so alt wie das Disneyland in Paris und diente Walt Disney als frÃ¼he Inspirationsquelle.",
      "Der MÃ¤rchenwald (Sprookjesbos) war die erste Attraktion des Parks und zeigt noch heute klassische MÃ¤rchen der GebrÃ¼der Grimm.",
      "Efteling ist einer der meistbesuchten Freizeitparks in Europa mit Ã¼ber fÃ¼nf Millionen GÃ¤sten pro Jahr.",
      "Ein bekanntes Markenzeichen des Parks sind die Papierschlucker (Holle Bolle Gijs), die Besucher auffordern, MÃ¼ll in ihre MÃ¼nder zu werfen."
    ],
    hu: ["Az Efteling hÃ¡rom Ã©vvel korÃ¡bban nyÃ­lt meg, mint az elsÅ‘ amerikai Disneyland.", "A park ikonikus figurÃ¡ja Langnek (HosszÃºnyakÃº), a meseerdÅ‘ lakÃ³ja, Ã©s a varÃ¡zslatos papÃ­rkosÃ¡r, Holle Bolle Gijs, aki megeszi a szemetet.", "A park Ã©vente tÃ¶bb mint 5 milliÃ³ lÃ¡togatÃ³t fogad, ami Hollandia lakossÃ¡gÃ¡nak jelentÅ‘s rÃ©szÃ©t teszi ki.", "A Fata Morgana, egy EzeregyÃ©jszaka tÃ©mÃ¡jÃº csÃ³nakos utazÃ¡s, Anton Pieck utolsÃ³ nagy tervezÃ©si munkÃ¡ja volt."],
    ro: [
      "Efteling este de trei ori mai vechi decÃ¢t Disneyland Paris È™i a servit ca sursÄƒ timpurie de inspiraÈ›ie pentru Walt Disney.",
      "PÄƒdurea Basmelor (Sprookjesbos) a fost prima atracÈ›ie a parcului È™i Ã®ncÄƒ prezintÄƒ basme clasice ale FraÈ›ilor Grimm.",
      "Efteling este unul dintre cele mai vizitate parcuri de distracÈ›ii din Europa, cu peste cinci milioane de oaspeÈ›i anual.",
      "Un semn distinctiv bine-cunoscut al parcului sunt mÃ¢ncÄƒtorii de hÃ¢rtie (Holle Bolle Gijs), care cer vizitatorilor sÄƒ arunce gunoiul Ã®n gura lor."
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
    de: "Die Zuiderzee war historisch eine groÃŸe, flache Bucht der Nordsee im Zentrum der Niederlande. Jahrhundertelang war sie ein bedeutendes Fischereigebiet und Handelsroute, brachte aber auch gefÃ¤hrliche Sturmfluten tief ins Land. Um die Ãœberschwemmungsgefahr dauerhaft zu bannen, wurde die Zuiderzee im 20. Jahrhundert durch den Bau des Afsluitdijk (Abschlussdeich) vom Meer abgeschnitten, was zur Entstehung des SÃ¼ÃŸwassersees IJsselmeer fÃ¼hrte.",
    hu: "A Zuiderzee tÃ¶rtÃ©nelmileg az Ã‰szaki-tenger nagy, sekÃ©ly Ã¶ble volt Hollandia kÃ¶zpontjÃ¡ban. Ã‰vszÃ¡zadokon Ã¡t fontos halÃ¡szati terÃ¼let Ã©s kereskedelmi Ãºtvonal volt, de veszÃ©lyes vihardagÃ¡lyokat is hozott mÃ©lyen az orszÃ¡g belsejÃ©be. Az Ã¡rvÃ­zveszÃ©ly tartÃ³s megszÃ¼ntetÃ©se Ã©rdekÃ©ben a 20. szÃ¡zadban az Afsluitdijk (ZÃ¡rÃ³gÃ¡t) megÃ©pÃ­tÃ©sÃ©vel elvÃ¡gtÃ¡k a Zuiderzeet a tengertÅ‘l, ami az Ã©desvizÅ± IJsselmeer kialakulÃ¡sÃ¡hoz vezetett.",
    ro: "Zuiderzee a fost istoric un golf mare È™i puÈ›in adÃ¢nc al MÄƒrii Nordului, Ã®n centrul Olandei. De secole, a fost o importantÄƒ zonÄƒ de pescuit È™i rutÄƒ comercialÄƒ, dar a adus È™i inundaÈ›ii periculoase cauzate de furtuni adÃ¢nc Ã®n interior. Pentru a elimina definitiv riscul inundaÈ›iilor, Zuiderzee a fost separatÄƒ de mare Ã®n secolul al XX-lea prin construcÈ›ia Afsluitdijk (Barajul de Ã®nchidere), ducÃ¢nd la formarea lacului de apÄƒ dulce IJsselmeer.",
    en: "The Zuiderzee was historically a large, shallow bay of the North Sea in the center of the Netherlands. For centuries it was an important fishing area and trade route, but it also brought dangerous storm surges deep inland. To permanently eliminate the risk of flooding, the Zuiderzee was cut off from the sea in the 20th century by the construction of the Afsluitdijk (Enclosure Dam), leading to the creation of the freshwater lake IJsselmeer."
  },
      descriptionAdvanced: {
    de: "Die Zuiderzee war historisch eine groÃŸe, flache und salzige Meeresbucht im Norden der Niederlande, die direkt mit der Nordsee verbunden war. Sie spielte jahrhundertelang eine zentrale Rolle fÃ¼r die Fischerei und den maritimen Handel niederlÃ¤ndischer KÃ¼stenstÃ¤dte, stellte jedoch gleichzeitig eine stÃ¤ndige Bedrohung durch verheerende Sturmfluten dar. Um das Land endgÃ¼ltig vor dem Wasser zu schÃ¼tzen, wurde 1932 der gigantische Abschlussdeich (Afsluitdijk) vollendet, der die Bucht von der Nordsee abtrennte. Diese Meisterleistung des Wasserbaus verwandelte das wilde Binnenmeer in den heutigen, ruhigen und ausgedehnten SÃ¼ÃŸwassersee IJsselmeer. Geografie K7: Die Zuiderzee wurde durch einen Deich zum See gemacht. Wie wird das Salzwasser im Laufe der Zeit auf natÃ¼rliche Weise zu SÃ¼ÃŸwasser?",
    hu: "A Zuiderzeemuseum Enkhuizen vÃ¡rosÃ¡ban talÃ¡lhatÃ³ szabadtÃ©ri Ã©s beltÃ©ri mÃºzeum, amely a Zuiderzee (DÃ©li-tenger) partvidÃ©kÃ©nek kultÃºrÃ¡jÃ¡t Ã©s mindennapjait mutatja be a 19. szÃ¡zad vÃ©gÃ©tÅ‘l a 20. szÃ¡zad elejÃ©ig. Amikor az Afsluitdijk gÃ¡t megÃ©pÃ­tÃ©sÃ©vel a tengert elzÃ¡rtÃ¡k Ã©s Ã©desvÃ­zÅ± tÃ³vÃ¡ (IJsselmeer) vÃ¡ltoztattÃ¡k, a kÃ¶rnyÃ©kbeli halÃ¡szfalvak Ã©vszÃ¡zados Ã©letmÃ³dja Ã¶rÃ¶kre megvÃ¡ltozott. A mÃºzeum eredeti, tÃ©glÃ¡rÃ³l tÃ©glÃ¡ra Ã¡ttelepÃ­tett hÃ¡zakkal, hagyomÃ¡nyos mestersÃ©gekkel Ã©s halfÃ¼stÃ¶lÅ‘kkel Å‘rzi ezt a letÅ±nt vilÃ¡got. TÃ¶rtÃ©nelem K7: Milyen drasztikus gazdasÃ¡gi Ã©s tÃ¡rsadalmi vÃ¡ltozÃ¡sokat hozott a halÃ¡szfalvak Ã©letÃ©ben a Zuiderzee tenger lezÃ¡rÃ¡sa?",
    ro: "Zuiderzee a fost istoric un golf mare È™i puÈ›in adÃ¢nc al MÄƒrii Nordului, conectat direct la mare. Timp de secole, a jucat un rol central Ã®n pescuitul È™i comerÈ›ul maritim al oraÈ™elor de coastÄƒ olandeze, dar a reprezentat, de asemenea, o ameninÈ›are constantÄƒ prin inundaÈ›ii devastatoare. Pentru a proteja definitiv uscatul, Ã®n 1932 a fost finalizat giganticul baraj Afsluitdijk, separÃ¢nd golful de Marea Nordului. AceastÄƒ capodoperÄƒ a ingineriei hidraulice a transformat marea sÄƒlbaticÄƒ interioarÄƒ Ã®n calmul È™i extinsul lac cu apÄƒ dulce de astÄƒzi, IJsselmeer. Geografie K7: Marea Zuiderzee a fost transformatÄƒ Ã®ntr-un lac printr-un dig. Cum devine Ã®n mod natural apa sÄƒratÄƒ apÄƒ dulce de-a lungul timpului?",
    en: "The Zuiderzee was historically a large, shallow, and salty bay in the north of the Netherlands that was directly connected to the North Sea. For centuries, it played a central role in fishing and maritime trade for Dutch coastal towns, but at the same time posed a constant threat of devastating storm surges. To permanently protect the land from the water, the massive Afsluitdijk (Enclosure Dike) was completed in 1932, cutting the bay off from the North Sea. This masterpiece of water engineering transformed the wild inland sea into today's tranquil and expansive freshwater lake, the IJsselmeer. Geography K7: The Zuiderzee was turned into a lake by a dike. How does the saltwater naturally become freshwater over time?"
  },
    facts: {
    de: ["Ehemalige flache Nordseebucht im Herzen der Niederlande.","Wurde 1932 durch den Afsluitdijk vom offenen Meer abgetrennt.","Verwandelte sich danach in den SÃ¼ÃŸwassersee IJsselmeer.","Diente jahrhundertelang der Fischerei und dem Seehandel.","Verursachte in der Vergangenheit schwere Hochwasserkatastrophen.","Das Zuiderzeemuseum in Enkhuizen bewahrt die Geschichte der Region.","Aus groÃŸen Teilen des Meeresbodens entstand die Provinz Flevoland.","Alte Zuiderzee-HafendÃ¶rfer wie Urk verloren ihren direkten Meerzugang."],
    hu: ["KorÃ¡bban egy sekÃ©ly Ã‰szaki-tengeri Ã¶bÃ¶l Hollandia szÃ­vÃ©ben.","1932-ben az Afsluitdijk (ZÃ¡rÃ³gÃ¡t) vÃ¡gta el a nyÃ­lt tengertÅ‘l.","Ezt kÃ¶vetÅ‘en az Ã©desvizÅ± IJsselmeer-rÃ© alakult Ã¡t.","Ã‰vszÃ¡zadokon Ã¡t halÃ¡szatot Ã©s tengeri kereskedelmet szolgÃ¡lt.","A mÃºltban sÃºlyos Ã¡rvÃ­zkatasztrÃ³fÃ¡kat okozott.","Az enkhuizeni Zuiderzee MÃºzeum megÅ‘rzi a rÃ©giÃ³ tÃ¶rtÃ©netÃ©t.","A tengerfenÃ©k nagy rÃ©szÃ©bÅ‘l jÃ¶tt lÃ©tre Flevoland tartomÃ¡ny.","A rÃ©gi kikÃ¶tÅ‘falvak, mint Urk, elvesztettÃ©k kÃ¶zvetlen tengeri kapcsolatukat."],
    ro: ["Fostul golf plat din Marea Nordului din inima Olandei.","A fost separat de marea deschisÄƒ de Afsluitdijk Ã®n 1932.","Apoi s-a transformat Ã®n lacul cu apÄƒ dulce IJsselmeer.","De secole a fost folosit pentru pescuit È™i comerÈ› maritim.","A provocat dezastre grave cauzate de inundaÈ›ii Ã®n trecut.","Muzeul Zuiderzee din Enkhuizen pÄƒstreazÄƒ istoria regiunii.","Provincia Flevoland a fost creatÄƒ din mari pÄƒrÈ›i ale fundului mÄƒrii.","Satele portuare vechi Zuiderzee, cum ar fi Urk, È™i-au pierdut accesul direct la mare."],
    en: ["Former shallow North Sea bay in the heart of the Netherlands.","Was separated from the open sea by the Afsluitdijk in 1932.","Then transformed into the freshwater lake IJsselmeer.","Served fishing and maritime trade for centuries.","Caused severe flood disasters in the past.","The Zuiderzee Museum in Enkhuizen preserves the region's history.","The province of Flevoland was created from large parts of the seabed.","Old Zuiderzee harbor villages like Urk lost their direct sea access."]
  },
      factsAdvanced: {
    de: [
      "Die Zuiderzee entstand im spÃ¤ten Mittelalter durch verheerende Ãœberschwemmungen, die einen Binnensee mit der Nordsee verbanden.",
      "Die stÃ¤ndige Bedrohung durch Fluten gipfelte in der fatalen Zuiderzeeflut von 1916, die den endgÃ¼ltigen AnstoÃŸ fÃ¼r den Bau des Deiches gab.",
      "Der Bau des Afsluitdijk dauerte fÃ¼nf Jahre und trennte 1932 die Meeresbucht vom offenen Meer ab.",
      "Viele alte FischerdÃ¶rfer, die einst vom Salzwasserfischfang lebten, mussten sich nach der SchlieÃŸung komplett umorientieren."
    ],
    hu: ["A szabadtÃ©ri mÃºzeumot egy komppal lehet megkÃ¶zelÃ­teni, ami megadja a korhÅ± tengerparti Ã©rkezÃ©s illÃºziÃ³jÃ¡t.", "TÃ¶bb mint 130 tÃ¶rtÃ©nelmi Ã©pÃ¼let talÃ¡lhatÃ³ a terÃ¼letÃ©n, a boltoktÃ³l a templomig.", "A lÃ¡togatÃ³k megkÃ³stolhatjÃ¡k a helyben, hagyomÃ¡nyos mÃ³dszerrel fÃ¼stÃ¶lt heringet.", "A mÃºzeum nemcsak az Ã©pÃ¼leteket, hanem az egykori lakÃ³k nÃ©pviseletÃ©t Ã©s szokÃ¡sait is dokumentÃ¡lja."],
    ro: [
      "Zuiderzee a fost formatÄƒ Ã®n Evul Mediu tÃ¢rziu prin inundaÈ›ii devastatoare care au conectat un lac interior cu Marea Nordului.",
      "AmeninÈ›area constantÄƒ a inundaÈ›iilor a culminat cu inundaÈ›ia fatalÄƒ Zuiderzee din 1916, care a dat impulsul final pentru construirea digului.",
      "ConstrucÈ›ia Afsluitdijk a durat cinci ani È™i a separat golful de marea deschisÄƒ Ã®n 1932.",
      "Multe sate vechi de pescari care odatÄƒ trÄƒiau din pescuitul de apÄƒ sÄƒratÄƒ au trebuit sÄƒ se reorienteze complet dupÄƒ Ã®nchidere."
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
    de: "Das IJsselmeer ist heute der grÃ¶ÃŸte Binnensee der Niederlande und entstand 1932, als die Meeresbucht Zuiderzee durch den Bau des Afsluitdijk eingedeicht wurde. Im Laufe der Jahre wandelte sich das Salzwasser in ein riesiges SÃ¼ÃŸwasserreservoir, das heute eine zentrale Rolle fÃ¼r die Wasserversorgung und den Wassersport spielt. Die RÃ¤nder des IJsselmeers sind gesÃ¤umt von historischen Segelschiffen und malerischen alten FischerdÃ¶rfern.",
    hu: "Az IJsselmeer ma Hollandia legnagyobb belsÅ‘ tava, amely 1932-ben jÃ¶tt lÃ©tre, amikor a Zuiderzee-Ã¶blÃ¶t az Afsluitdijk megÃ©pÃ­tÃ©sÃ©vel lezÃ¡rtÃ¡k. Az Ã©vek sorÃ¡n a sÃ³s vÃ­z egy hatalmas Ã©desvÃ­zi vÃ­ztÃ¡rozÃ³vÃ¡ alakult Ã¡t, amely ma kÃ¶zponti szerepet jÃ¡tszik a vÃ­zellÃ¡tÃ¡sban Ã©s a vÃ­zi sportokban. Az IJsselmeer partjait tÃ¶rtÃ©nelmi vitorlÃ¡s hajÃ³k Ã©s festÅ‘i rÃ©gi halÃ¡szfalvak szegÃ©lyezik.",
    ro: "IJsselmeer este astÄƒzi cel mai mare lac interior din Olanda È™i a fost creat Ã®n 1932, cÃ¢nd golful Zuiderzee a fost Ã®ndiguit prin construcÈ›ia Afsluitdijk. De-a lungul anilor, apa sÄƒratÄƒ s-a transformat Ã®ntr-un uriaÈ™ rezervor de apÄƒ dulce, care joacÄƒ astÄƒzi un rol central Ã®n aprovizionarea cu apÄƒ È™i sporturile nautice. Marginile IJsselmeer sunt mÄƒrginite de veliere istorice È™i sate vechi de pescari pitoreÈ™ti.",
    en: "The IJsselmeer is today the largest inland lake in the Netherlands and was created in 1932 when the Zuiderzee bay was dammed up by the construction of the Afsluitdijk. Over the years, the saltwater turned into a huge freshwater reservoir, which today plays a central role in water supply and water sports. The edges of the IJsselmeer are lined with historic sailing ships and picturesque old fishing villages."
  },
      descriptionAdvanced: {
    de: "Das IJsselmeer ist heute der grÃ¶ÃŸte See der Niederlande, ein riesiges SÃ¼ÃŸwasserreservoir, das durch die AbdÃ¤mmung der ehemaligen Zuiderzee entstand. Der 32 Kilometer lange Abschlussdeich schÃ¼tzt die umliegenden Provinzen seit 1932 vor der Nordsee und formte diesen neuen Binnensee, der durch den Fluss IJssel mit SÃ¼ÃŸwasser gespeist wird. Aus Teilen des Sees wurden durch gewaltige Eindeichungen die fruchtbaren Polder der neuen Provinz Flevoland gewonnen. Heute dient das flache IJsselmeer nicht nur dem Hochwasserschutz und der Trinkwassergewinnung, sondern ist auch ein beliebtes Revier fÃ¼r Segler und ein wichtiges Vogelschutzgebiet. Geografie K6: Im IJsselmeer baute man neue Inseln und Polder aus dem Wasser. Was ist der Hauptgrund, warum die Niederlande neues Land aus dem Meer gewinnen?",
    hu: "Az IJsselmeer (IJssel-tÃ³) Hollandia legnagyobb tava, amely egy nagyszabÃ¡sÃº mÃ©rnÃ¶ki beavatkozÃ¡s, a Zuiderzee 1932-es elzÃ¡rÃ¡sÃ¡nak eredmÃ©nyekÃ©nt jÃ¶tt lÃ©tre. A tengerÃ¶blÃ¶t az Afsluitdijk nevÅ± hatalmas gÃ¡t zÃ¡rta el az Ã‰szaki-tengertÅ‘l, Ã­gy az egykori sÃ³s vÃ­zÅ± tenger lassan Ã©desvizÅ± tÃ³vÃ¡ vÃ¡ltozott, amelyet elsÅ‘sorban az IJssel folyÃ³ tÃ¡plÃ¡l. A tÃ³ mÃ©lysÃ©ge mindÃ¶ssze 5-6 mÃ©ter, Ã©s lÃ©tfontossÃ¡gÃº szerepet jÃ¡tszik az orszÃ¡g Ã©desvÃ­z-ellÃ¡tÃ¡sÃ¡ban, a mezÅ‘gazdasÃ¡gban, valamint a vÃ­zi sportok Ã©s rekreÃ¡ciÃ³ terÃ©n. FÃ¶ldrajz K7: Hogyan vÃ¡lik egy sÃ³s tengerÃ¶bÃ¶l Ã©desvÃ­zÅ± tÃ³vÃ¡ egy gÃ¡t megÃ©pÃ­tÃ©se utÃ¡n?",
    ro: "IJsselmeer este cel mai mare lac din Olanda de astÄƒzi, un rezervor uriaÈ™ de apÄƒ dulce creat prin Ã®ndiguirea fostei Zuiderzee. Barajul de Ã®nchidere lung de 32 de kilometri protejeazÄƒ provinciile Ã®nconjurÄƒtoare de Marea Nordului din 1932 È™i a format acest nou lac interior, care este alimentat cu apÄƒ dulce de rÃ¢ul IJssel. Din pÄƒrÈ›i ale lacului au fost recuperate polderele fertile ale noii provincii Flevoland. AstÄƒzi, IJsselmeer-ul de micÄƒ adÃ¢ncime nu serveÈ™te doar pentru protecÈ›ia Ã®mpotriva inundaÈ›iilor È™i extragerea apei potabile, ci este È™i o zonÄƒ popularÄƒ pentru marinari È™i un important sanctuar de pÄƒsÄƒri. Geografie K6: Noi insule È™i poldere au fost construite din apÄƒ Ã®n IJsselmeer. Care este principalul motiv pentru care Olanda recupereazÄƒ noi terenuri din mare?",
    en: "The IJsselmeer is today the largest lake in the Netherlands, a massive freshwater reservoir created by the damming of the former Zuiderzee. The 32-kilometer-long Afsluitdijk has protected the surrounding provinces from the North Sea since 1932 and shaped this new inland lake, which is fed with freshwater by the river IJssel. Parts of the lake were reclaimed through massive dyking to create the fertile polders of the new province of Flevoland. Today, the shallow IJsselmeer serves not only for flood protection and drinking water supply, but is also a popular area for sailors and an important bird sanctuary. Geography K6: New islands and polders were built from the water in the IJsselmeer. What is the main reason why the Netherlands reclaims new land from the sea?"
  },
    facts: {
    de: ["GrÃ¶ÃŸter Binnensee der Niederlande, entstanden durch Einpolderung.","Entstand 1932 durch die SchlieÃŸung der Nordseebucht Zuiderzee.","Besteht aus SÃ¼ÃŸwasser, das primÃ¤r vom Fluss IJssel gespeist wird.","Ist ein Ã¤uÃŸerst beliebtes Revier fÃ¼r Segler und Windsurfer.","Dient als eines der wichtigsten Trinkwasserreservoirs des Landes.","Wurde spÃ¤ter durch den Houtribdijk weiter unterteilt (Markermeer).","FischerdÃ¶rfer wie Volendam und Enkhuizen liegen an seinem Ufer.","Bietet bedeutenden Lebensraum fÃ¼r zahlreiche WasservÃ¶gel."],
    hu: ["Hollandia legnagyobb beltengere/tava, polderesÃ­tÃ©ssel jÃ¶tt lÃ©tre.","1932-ben a Zuiderzee Ã©szaki-tengeri Ã¶bÃ¶l lezÃ¡rÃ¡sÃ¡val jÃ¶tt lÃ©tre.","Ã‰desvÃ­zbÅ‘l Ã¡ll, amelyet elsÅ‘sorban az IJssel folyÃ³ tÃ¡plÃ¡l.","RendkÃ­vÃ¼l nÃ©pszerÅ± a vitorlÃ¡zÃ³k Ã©s szÃ¶rfÃ¶sÃ¶k kÃ¶rÃ©ben.","Az orszÃ¡g egyik legfontosabb ivÃ³vÃ­ztÃ¡rozÃ³jakÃ©nt szolgÃ¡l.","KÃ©sÅ‘bb a Houtribdijk tovÃ¡bb osztotta (Markermeer).","PartjÃ¡n olyan halÃ¡szfalvak fekszenek, mint Volendam Ã©s Enkhuizen.","JelentÅ‘s Ã©lÅ‘helyet biztosÃ­t szÃ¡mos vÃ­zimadÃ¡r szÃ¡mÃ¡ra."],
    ro: ["Cel mai mare lac interior din Olanda, creat prin recuperarea polderelor.","Creat Ã®n 1932 prin Ã®nchiderea golfului Zuiderzee din Marea Nordului.","Este format din apÄƒ dulce, care este alimentatÄƒ Ã®n principal de rÃ¢ul IJssel.","Este o zonÄƒ extrem de popularÄƒ pentru marinari È™i windsurferi.","ServeÈ™te ca unul dintre cele mai importante rezervoare de apÄƒ potabilÄƒ din È›arÄƒ.","Ulterior a fost subdivizat Ã®n continuare de Houtribdijk (Markermeer).","Sate de pescari precum Volendam È™i Enkhuizen se aflÄƒ pe È›Äƒrmul sÄƒu.","OferÄƒ un habitat important pentru numeroase pÄƒsÄƒri de apÄƒ."],
    en: ["The largest inland lake in the Netherlands, created by impoldering.","Created in 1932 by the closure of the North Sea bay Zuiderzee.","Consists of freshwater, which is primarily fed by the river IJssel.","Is an extremely popular area for sailors and windsurfers.","Serves as one of the most important drinking water reservoirs in the country.","Was later further subdivided by the Houtribdijk (Markermeer).","Fishing villages like Volendam and Enkhuizen are on its shores.","Provides significant habitat for numerous water birds."]
  },
      factsAdvanced: {
    de: [
      "Das IJsselmeer ist kein natÃ¼rlicher See, sondern entstand 1932 kÃ¼nstlich durch den Bau des Afsluitdijk.",
      "Obwohl es ein riesiges BinnengewÃ¤sser ist, ist der See mit durchschnittlich fÃ¼nf Metern Tiefe sehr flach.",
      "Das IJsselmeer ist das wichtigste SÃ¼ÃŸwasserreservoir der Niederlande und dient in Trockenzeiten der BewÃ¤sserung.",
      "Aus dem sÃ¼dlichen Teil des ursprÃ¼nglichen IJsselmeers wurde durch Landgewinnung die Provinz Flevoland geschaffen."
    ],
    hu: ["Az IJsselmeer terÃ¼letÃ©nek jelentÅ‘s rÃ©szÃ©t az Ã©vtizedek sorÃ¡n polderesÃ­tÃ©ssel (Flevoland) szÃ¡razfÃ¶lddÃ© alakÃ­tottÃ¡k.", "A tÃ³ Ã©desvÃ­zkÃ©szlete kritikus fontossÃ¡gÃº a holland ivÃ³vÃ­zellÃ¡tÃ¡s szempontjÃ¡bÃ³l szÃ¡razsÃ¡g idejÃ©n.", "1976-ban egy mÃ¡sik gÃ¡ttal (Houtribdijk) a tavat kettÃ©osztottÃ¡k, lÃ©trehozva a dÃ©li Markermeer-t.", "A tavat szegÃ©lyezÅ‘ tÃ¶rtÃ©nelmi vÃ¡rosok (pl. Hoorn, Enkhuizen, Urk) egykori tengeri kikÃ¶tÅ‘vÃ¡rosok voltak."],
    ro: [
      "IJsselmeer nu este un lac natural, ci a fost creat artificial Ã®n 1932 prin construcÈ›ia Afsluitdijk.",
      "DeÈ™i este un corp uriaÈ™ de apÄƒ interioarÄƒ, lacul este foarte puÈ›in adÃ¢nc, cu o adÃ¢ncime medie de cinci metri.",
      "IJsselmeer este cel mai important rezervor de apÄƒ dulce din Olanda È™i este folosit pentru irigaÈ›ii Ã®n perioadele secetoase.",
      "Provincia Flevoland a fost creatÄƒ din partea de sud a lacului original IJsselmeer prin recuperarea terenurilor."
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
      de: "Gouda ist eine historische Stadt in der Provinz SÃ¼dholland, weltberÃ¼hmt fÃ¼r den gleichnamigen KÃ¤se. Die Stadt hat eine reiche Geschichte, die bis ins Mittelalter zurÃ¼ckreicht, und ist bekannt fÃ¼r ihre prÃ¤chtigen GebÃ¤ude und KanÃ¤le. Jedes Jahr im Sommer findet ein traditioneller KÃ¤semarkt statt.",
      hu: "Gouda tÃ¶rtÃ©nelmi vÃ¡ros DÃ©l-Holland tartomÃ¡nyban, amely vilÃ¡ghÃ­rÅ± az azonos nevÅ± sajtrÃ³l. A vÃ¡ros gazdag tÃ¶rtÃ©nelemmel rendelkezik, amely a kÃ¶zÃ©pkorig nyÃºlik vissza, Ã©s gyÃ¶nyÃ¶rÅ± Ã©pÃ¼leteirÅ‘l, valamint csatornÃ¡irÃ³l ismert. Minden nyÃ¡ron hagyomÃ¡nyos sajtpiacot tartanak itt.",
      ro: "Gouda este un oraÈ™ istoric din provincia Olanda de Sud, renumit Ã®n Ã®ntreaga lume pentru brÃ¢nza cu acelaÈ™i nume. OraÈ™ul are o istorie bogatÄƒ care dateazÄƒ din Evul Mediu È™i este cunoscut pentru clÄƒdirile È™i canalele sale magnifice. ÃŽn fiecare varÄƒ are loc o piaÈ›Äƒ tradiÈ›ionalÄƒ de brÃ¢nzeturi.",
      en: "Gouda is a historic city in the province of South Holland, world-famous for its namesake cheese. The city has a rich history dating back to the Middle Ages and is known for its magnificent buildings and canals. A traditional cheese market is held every summer."
    },
    descriptionAdvanced: {
    de: "Gouda ist eine historische KÃ¤sestadt im Herzen der Provinz SÃ¼dholland, die weltweit fÃ¼r das gleichnamige Molkereiprodukt bekannt ist. Das Zentrum der Stadt wird dominiert von dem prachtvollen gotischen Stadhuis (Rathaus) auf dem groÃŸen Marktplatz, das im 15. Jahrhundert erbaut wurde. Jeden Donnerstag im Sommer findet hier der traditionelle KÃ¤semarkt statt, ein farbenfrohes Spektakel, bei dem die KÃ¤selaibe noch wie vor Jahrhunderten mit Pferdekutschen antransportiert und per Handschlag gehandelt werden. Neben KÃ¤se ist Gouda auch berÃ¼hmt fÃ¼r die Herstellung traditioneller Tonpfeifen, Keramik und kÃ¶stlicher Sirupwaffeln (Stroopwafels). Geografie K5: Gouda exportiert seinen berÃ¼hmten KÃ¤se in die ganze Welt. Aus welcher Milch wird der klassische Gouda-KÃ¤se hergestellt?",
    hu: "Gouda egy tÃ¶rtÃ©nelmi vÃ¡ros DÃ©l-HollandiÃ¡ban, amely az egÃ©sz vilÃ¡gon ismerttÃ© vÃ¡lt az azonos nevÅ± sajtjÃ¡rÃ³l. BÃ¡r a sajtot nem feltÃ©tlenÃ¼l magÃ¡ban a vÃ¡rosban kÃ©szÃ­tettÃ©k, Ã©vszÃ¡zadokon Ã¡t itt, a lenyÅ±gÃ¶zÅ‘ VÃ¡roshÃ¡za elÅ‘tti tÃ©ren cserÃ©lt gazdÃ¡t a hÃ­res sajtpiacon. Gouda nemcsak a gasztronÃ³miÃ¡jÃ¡rÃ³l (kÃ¶ztÃ¼k a stroopwafel nevÅ± szirupos ostyÃ¡rÃ³l), hanem a Szent JÃ¡nos-templom (Sint-Janskerk) csodÃ¡latos, 16. szÃ¡zadi Ã³lomÃ¼veg ablakairÃ³l is hÃ­res, amelyek tÃºlÃ©ltÃ©k a reformÃ¡ciÃ³ kÃ©prombolÃ¡sait. TÃ¶rtÃ©nelem K6: MiÃ©rt rendeztÃ©k a nagy sajtvÃ¡sÃ¡rokat a vÃ¡ros fÅ‘terÃ©n, Ã©s hogyan mÅ±kÃ¶dÃ¶tt a kereskedelem mÃ©rlegelÃ©se a kÃ¶zÃ©pkorban?",
    ro: "Gouda este un oraÈ™ istoric al brÃ¢nzei Ã®n inima Olandei de Sud, renumit Ã®n Ã®ntreaga lume pentru produsul lactat cu acelaÈ™i nume. Centrul oraÈ™ului este dominat de superba PrimÄƒrie goticÄƒ (Stadhuis) din piaÈ›a mare, construitÄƒ Ã®n secolul al XV-lea. ÃŽn fiecare joi din timpul verii are loc aici tradiÈ›ionala piaÈ›Äƒ a brÃ¢nzei, un spectacol colorat Ã®n care roÈ›ile de brÃ¢nzÄƒ sunt aduse cu trÄƒsuri trase de cai, ca acum secole, È™i tranzacÈ›ionate prin strÃ¢ngeri de mÃ¢nÄƒ. Pe lÃ¢ngÄƒ brÃ¢nzÄƒ, Gouda este renumitÄƒ È™i pentru producÈ›ia de pipe tradiÈ›ionale din lut, ceramicÄƒ È™i delicioase vafe cu sirop (Stroopwafels). Geografie K5: Gouda Ã®È™i exportÄƒ celebra brÃ¢nzÄƒ Ã®n toatÄƒ lumea. Din ce lapte este fÄƒcutÄƒ brÃ¢nza Gouda clasicÄƒ?",
    en: "Gouda is a historic cheese city in the heart of the province of South Holland, known worldwide for the dairy product of the same name. The center of the city is dominated by the magnificent Gothic Stadhuis (Town Hall) on the large market square, built in the 15th century. Every Thursday in the summer, the traditional cheese market takes place here, a colorful spectacle where wheels of cheese are still transported by horse-drawn carriages and traded with a handshake, just as they were centuries ago. Besides cheese, Gouda is also famous for producing traditional clay pipes, ceramics, and delicious syrup waffles (stroopwafels). Geography K5: Gouda exports its famous cheese all over the world. What kind of milk is classic Gouda cheese made from?"
  },
    facts: {
      de: ["Bekannt fÃ¼r GoudakÃ¤se und den historischen KÃ¤semarkt.", "Heimat der Sirupwaffeln (Stroopwafels).", "Die Sint-Janskerk hat beeindruckende Glasmalereien.", "Das gotische Rathaus stammt aus dem 15. Jahrhundert.", "Goudaer Kerzen sind traditionell und bekannt.", "Besitzt malerische historische KanÃ¤le."],
      hu: ["A gouda sajtrÃ³l Ã©s a tÃ¶rtÃ©nelmi sajtpiacrÃ³l ismert.", "A szirupos gofri (Stroopwafel) hazÃ¡ja.", "A Sint-Janskerk lenyÅ±gÃ¶zÅ‘ Ã³lomÃ¼veg ablakokkal rendelkezik.", "GÃ³tikus vÃ¡roshÃ¡zÃ¡ja a 15. szÃ¡zadbÃ³l szÃ¡rmazik.", "A goudai gyertyÃ¡k hagyomÃ¡nyosak Ã©s hÃ­resek.", "FestÅ‘i tÃ¶rtÃ©nelmi csatornÃ¡kkal bÃ¼szkÃ©lkedhet."],
      ro: ["Cunoscut pentru brÃ¢nza Gouda È™i piaÈ›a istoricÄƒ de brÃ¢nzeturi.", "Locul de naÈ™tere al vafelor cu sirop (Stroopwafels).", "Sint-Janskerk are vitralii impresionante.", "PrimÄƒria goticÄƒ dateazÄƒ din secolul al XV-lea.", "LumÃ¢nÄƒrile Gouda sunt tradiÈ›ionale È™i cunoscute.", "Se mÃ¢ndreÈ™te cu canale istorice pitoreÈ™ti."],
      en: ["Known for Gouda cheese and the historic cheese market.", "Home of the syrup waffles (Stroopwafels).", "The Sint-Janskerk has impressive stained glass windows.", "Its Gothic town hall dates from the 15th century.", "Gouda candles are traditional and well-known.", "Boasts picturesque historic canals."]
    },
    factsAdvanced: {
    de: [
      "Gouda-KÃ¤se macht etwa 60 Prozent der gesamten niederlÃ¤ndischen KÃ¤seproduktion aus.",
      "Die Sint-Janskerk in Gouda ist mit 123 Metern die lÃ¤ngste Kirche der Niederlande und berÃ¼hmt fÃ¼r ihre groÃŸen, bemalten Glasfenster.",
      "Die Stroopwafel (Sirupwaffel), eine der bekanntesten niederlÃ¤ndischen SÃ¼ÃŸigkeiten, wurde in Gouda erfunden.",
      "Das freistehende, gotische Rathaus von Gouda, erbaut im Jahr 1450, ist eines der Ã¤ltesten in den Niederlanden."
    ],
    hu: ["A goudai sajtpiac a mai napig mÅ±kÃ¶dik minden csÃ¼tÃ¶rtÃ¶kÃ¶n a nyÃ¡ri hÃ³napokban, hagyomÃ¡nyos ceremÃ³niÃ¡kkal.", "A goudai VÃ¡roshÃ¡za (Stadhuis) az egyik legrÃ©gebbi Ã©s legszebb gÃ³tikus vÃ¡roshÃ¡za HollandiÃ¡ban.", "A Szent JÃ¡nos-templom Hollandia leghosszabb temploma a maga 123 mÃ©terÃ©vel.", "A Gouda sajt neve nem vÃ©dett eredetmegjelÃ¶lÃ©s, Ã­gy vilÃ¡gszerte gyÃ¡rthatnak ilyen nevÅ± sajtot."],
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
      de: "Enschede ist die grÃ¶ÃŸte Stadt in der Provinz Overijssel und liegt nahe der deutschen Grenze. Sie wuchs wÃ¤hrend der industriellen Revolution als Zentrum der Textilindustrie rasant heran. Heute ist Enschede eine lebendige UniversitÃ¤tsstadt mit einem modernen Stadtzentrum.",
      hu: "Enschede Overijssel tartomÃ¡ny legnagyobb vÃ¡rosa, a nÃ©met hatÃ¡r kÃ¶zelÃ©ben. Az ipari forradalom idejÃ©n a textilipar kÃ¶zpontjakÃ©nt gyorsan nÃ¶vekedett. Ma Enschede nyÃ¼zsgÅ‘ egyetemvÃ¡ros modern vÃ¡roskÃ¶zponttal.",
      ro: "Enschede este cel mai mare oraÈ™ din provincia Overijssel È™i este situat aproape de graniÈ›a cu Germania. A crescut rapid Ã®n timpul RevoluÈ›iei Industriale ca centru al industriei textile. AstÄƒzi, Enschede este un oraÈ™ universitar vibrant cu un centru modern.",
      en: "Enschede is the largest city in the province of Overijssel and is located near the German border. It grew rapidly during the Industrial Revolution as a center of the textile industry. Today, Enschede is a vibrant university city with a modern city center."
    },
    descriptionAdvanced: {
    de: "Enschede ist die grÃ¶ÃŸte Stadt der Region Twente im Osten der Niederlande, nahe der deutschen Grenze. Die Stadt erlebte im 19. Jahrhundert einen rasanten Aufschwung und wurde zu einem der bedeutendsten Zentren der Textilindustrie Europas. Nach dem Zusammenbruch dieser Industrie im 20. Jahrhundert durchlief Enschede einen beeindruckenden Wandel und ist heute eine moderne, grÃ¼ne Innovationsstadt, stark geprÃ¤gt durch die Technische UniversitÃ¤t Twente. Eine tiefe Narbe in der jÃ¼ngeren Geschichte der Stadt hinterlieÃŸ die verheerende Feuerwerkskatastrophe im Jahr 2000, nach der das betroffene Viertel Roombeek als ein Paradebeispiel moderner, bÃ¼rgernaher Architektur wiederaufgebaut wurde. Geschichte K8: Enschede wuchs durch die Textilindustrie. Welche revolutionÃ¤re Erfindung aus dem 18. Jahrhundert trieb die mechanischen WebstÃ¼hle in groÃŸen Fabriken an?",
    hu: "Enschede Kelet-Hollandia legnagyobb vÃ¡rosa, Overijssel tartomÃ¡ny Twente rÃ©giÃ³jÃ¡nak kÃ¶zpontja. A 19. Ã©s 20. szÃ¡zadban a holland textilipar lÃ¼ktetÅ‘ szÃ­ve volt, amelyet hatalmas gyÃ¡rak Ã©s kÃ©mÃ©nyek jellemeztek. A textilipar hanyatlÃ¡sa utÃ¡n a vÃ¡ros Ã¡talakult, Ã©s ma a Twentei Egyetem (Universiteit Twente) rÃ©vÃ©n a technolÃ³gia Ã©s az innovÃ¡ciÃ³ egyik fellegvÃ¡ra. 2000-ben egy tragikus tÅ±zijÃ¡tÃ©k-raktÃ¡r robbanÃ¡s pusztÃ­totta el a vÃ¡ros egy rÃ©szÃ©t (Roombeek), amelyet azÃ³ta dÃ­jnyertes modern Ã©pÃ­tÃ©szeti negyedkÃ©nt Ã©pÃ­tettek ÃºjjÃ¡. TÃ¡rsadalomismeret K8: Hogyan tudott Enschede egy katasztrÃ³fa utÃ¡n egy modern Ã©s fenntarthatÃ³ vÃ¡rosrÃ©szt lÃ©trehozni?",
    ro: "Enschede este cel mai mare oraÈ™ din estul Olandei, centrul regiunii Twente din provincia Overijssel. ÃŽn secolele al XIX-lea È™i al XX-lea, a fost inima care bÄƒtea a industriei textile olandeze, caracterizatÄƒ prin fabrici uriaÈ™e È™i coÈ™uri de fum. DupÄƒ declinul industriei textile, oraÈ™ul a fost transformat È™i este astÄƒzi o fortÄƒreaÈ›Äƒ a tehnologiei È™i inovaÈ›iei datoritÄƒ UniversitÄƒÈ›ii din Twente. ÃŽn 2000, o explozie tragicÄƒ a unui depozit de artificii a distrus o parte a oraÈ™ului (Roombeek), care a fost reconstruitÄƒ de atunci ca un district arhitectural modern premiat. Studii sociale K8: Cum a reuÈ™it Enschede sÄƒ creeze un district urban modern È™i durabil dupÄƒ un dezastru?",
    en: "Enschede is the largest city in the Twente region in the eastern Netherlands, near the German border. The city experienced a rapid boom in the 19th century and became one of the most important centers of the textile industry in Europe. Following the collapse of this industry in the 20th century, Enschede underwent an impressive transformation and is today a modern, green city of innovation, strongly influenced by the University of Twente. A deep scar in the city's recent history was left by the devastating fireworks disaster in 2000, after which the affected Roombeek district was rebuilt as a prime example of modern, citizen-oriented architecture. History K8: Enschede grew through the textile industry. What revolutionary 18th-century invention powered mechanical looms in large factories?"
  },
    facts: {
      de: ["Ehemaliges Zentrum der niederlÃ¤ndischen Textilindustrie.", "Heimat der renommierten UniversitÃ¤t Twente.", "Der Oude Markt ist das lebendige Zentrum der Stadt.", "Bekannt fÃ¼r das Rijksmuseum Twenthe.", "Im Jahr 2000 durch eine Feuerwerkskatastrophe teilweise zerstÃ¶rt.", "Grenzt direkt an das deutsche Bundesland Nordrhein-Westfalen."],
      hu: ["A holland textilipar egykori kÃ¶zpontja.", "A neves Twente-i Egyetem otthona.", "Az Oude Markt a vÃ¡ros nyÃ¼zsgÅ‘ kÃ¶zpontja.", "A Rijksmuseum Twenthe-rÅ‘l ismert.", "2000-ben rÃ©szben elpusztult egy tÅ±zijÃ¡tÃ©k-katasztrÃ³fa miatt.", "KÃ¶zvetlenÃ¼l hatÃ¡ros a nÃ©met Ã‰szak-Rajna-VesztfÃ¡lia tartomÃ¡nnyal."],
      ro: ["Fostul centru al industriei textile olandeze.", "Sediul renumitei UniversitÄƒÈ›i din Twente.", "Oude Markt este centrul vibrant al oraÈ™ului.", "Cunoscut pentru Rijksmuseum Twenthe.", "ParÈ›ial distrus de un dezastru al artificiilor Ã®n anul 2000.", "Se Ã®nvecineazÄƒ direct cu statul german Renania de Nord-Westfalia."],
      en: ["Former center of the Dutch textile industry.", "Home to the renowned University of Twente.", "The Oude Markt is the vibrant center of the city.", "Known for the Rijksmuseum Twenthe.", "Partially destroyed by a fireworks disaster in 2000.", "Borders directly on the German state of North Rhine-Westphalia."]
    },
    factsAdvanced: {
    de: [
      "Enschede war im 19. Jahrhundert die unangefochtene Textilhauptstadt der Niederlande.",
      "Der alte Marktplatz (Oude Markt) gilt als einer der lebendigsten AusgehplÃ¤tze im Osten der Niederlande.",
      "Am 13. Mai 2000 zerstÃ¶rte die Explosion einer Feuerwerksfabrik groÃŸe Teile des Stadtteils Roombeek.",
      "Die UniversitÃ¤t Twente ist die einzige niederlÃ¤ndische UniversitÃ¤t mit einem echten Campus, auf dem Studenten leben und lernen."
    ],
    hu: ["A Twentei Egyetem Hollandia egyetlen olyan egyeteme, amely amerikai stÃ­lusÃº, integrÃ¡lt campusszal rendelkezik.", "A vÃ¡ros kÃ¶zvetlenÃ¼l a nÃ©met hatÃ¡r mellett fekszik, Ã©s erÅ‘s hatÃ¡ron Ã¡tnyÃºlÃ³ kapcsolatokat Ã¡pol MÃ¼nsterrel.", "A Grolsch, a vilÃ¡g egyik leghÃ­resebb holland sÃ¶re, egy Enschede melletti modern sÃ¶rfÅ‘zdÃ©ben kÃ©szÃ¼l.", "A Rijksmuseum Twenthe a rÃ©giÃ³ legfontosabb kÃ©pzÅ‘mÅ±vÃ©szeti mÃºzeuma."],
    ro: [
      "Universitatea din Twente este singura universitate din Olanda care are un campus integrat Ã®n stil american.",
      "OraÈ™ul este situat chiar la graniÈ›a cu Germania È™i menÈ›ine relaÈ›ii transfrontaliere puternice cu MÃ¼nster.",
      "Grolsch, una dintre cele mai faimoase beri olandeze din lume, este fabricatÄƒ Ã®ntr-o fabricÄƒ de bere modernÄƒ de lÃ¢ngÄƒ Enschede.",
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
      de: "Arnheim ist die Hauptstadt der Provinz Gelderland und eine wichtige historische Stadt am Rhein. Bekannt wurde sie vor allem durch die Schlacht um Arnheim im Zweiten Weltkrieg. Heute bietet Arnheim groÃŸartige Museen, ausgedehnte Parks und ist ein beliebtes Ziel fÃ¼r Natur- und Geschichtsliebhaber.",
      hu: "Arnhem Gelderland tartomÃ¡ny fÅ‘vÃ¡rosa Ã©s fontos tÃ¶rtÃ©nelmi vÃ¡ros a Rajna mentÃ©n. KÃ¼lÃ¶nÃ¶sen a mÃ¡sodik vilÃ¡ghÃ¡borÃºs arnhemi csata rÃ©vÃ©n vÃ¡lt ismerttÃ©. Ma Arnhem nagyszerÅ± mÃºzeumokat, kiterjedt parkokat kÃ­nÃ¡l, Ã©s nÃ©pszerÅ± cÃ©lpont a termÃ©szet Ã©s a tÃ¶rtÃ©nelem szerelmesei szÃ¡mÃ¡ra.",
      ro: "Arnhem este capitala provinciei Gelderland È™i un oraÈ™ istoric important pe Rin. A devenit cunoscut Ã®n special pentru BÄƒtÄƒlia de la Arnhem din timpul celui de-al Doilea RÄƒzboi Mondial. AstÄƒzi, Arnhem oferÄƒ muzee grozave, parcuri Ã®ntinse È™i este o destinaÈ›ie popularÄƒ pentru iubitorii de naturÄƒ È™i istorie.",
      en: "Arnhem is the capital of the province of Gelderland and an important historic city on the Rhine. It became known primarily for the Battle of Arnhem during World War II. Today, Arnhem offers great museums, extensive parks and is a popular destination for nature and history lovers."
    },
    descriptionAdvanced: {
    de: "Arnhem (Arnheim), die charmante Hauptstadt der Provinz Gelderland, liegt malerisch an den Ufern des Niederrheins. Im Zweiten Weltkrieg erlangte die Stadt durch die Operation Market Garden weltweite traurige BerÃ¼hmtheit; die heftige Schlacht um die BrÃ¼cke von Arnheim (bekannt aus dem Film 'Die BrÃ¼cke von Arnheim') prÃ¤gte das Stadtbild durch schwere ZerstÃ¶rungen. Heute ist Arnhem eine modebewusste und grÃ¼ne Stadt, umgeben von dichten WÃ¤ldern. Sie ist berÃ¼hmt fÃ¼r ihr renommiertes Modeviertel und beheimatet kulturelle Highlights wie das NiederlÃ¤ndische Freilichtmuseum und den groÃŸen Tierpark Burgers' Zoo. Geschichte K8: Bei der Schlacht um Arnheim versuchten alliierte FallschirmjÃ¤ger vergeblich, die RheinbrÃ¼cke zu halten. Warum war diese BrÃ¼cke fÃ¼r den Vormarsch nach Deutschland so wichtig?",
    hu: "Arnhem Gelderland tartomÃ¡ny zÃ¶ldellÅ‘ fÅ‘vÃ¡rosa, amely a Rajna alsÃ³ szakaszÃ¡nak (Nederrijn) partjÃ¡n fekszik. A vÃ¡ros neve Ã¶rÃ¶kre Ã¶sszefonÃ³dott a mÃ¡sodik vilÃ¡ghÃ¡borÃºval a â€žMarket Gardenâ€ hadmÅ±velet miatt, amikor a szÃ¶vetsÃ©ges ejtÅ‘ernyÅ‘sÃ¶k sÃºlyos vesztesÃ©geket szenvedtek az arnhemi hÃ­d megszerzÃ©sÃ©Ã©rt folytatott csatÃ¡ban (â€žA hÃ­d tÃºl messze voltâ€). Ma Arnhem egy divat- Ã©s dizÃ¡jnkÃ¶zpont, Ã©lÃ©nk kulturÃ¡lis Ã©lettel, valamint Hollandia egyik legismertebb szabadtÃ©ri mÃºzeumÃ¡val (Nederlands Openluchtmuseum). TÃ¶rtÃ©nelem K8: MiÃ©rt volt a 'Market Garden' hadmÅ±velet kulcsfontossÃ¡gÃº a szÃ¶vetsÃ©gesek szÃ¡mÃ¡ra a mÃ¡sodik vilÃ¡ghÃ¡borÃºban?",
    ro: "Arnhem este capitala verde a provinciei Gelderland, situatÄƒ pe malurile Rinului Inferior (Nederrijn). Numele oraÈ™ului este legat pentru totdeauna de al Doilea RÄƒzboi Mondial din cauza OperaÈ›iunii â€žMarket Gardenâ€, cÃ¢nd paraÈ™utiÈ™tii aliaÈ›i au suferit pierderi grele Ã®n bÄƒtÄƒlia pentru capturarea podului Arnhem (â€žUn pod prea Ã®ndepÄƒrtatâ€). AstÄƒzi, Arnhem este un centru de modÄƒ È™i design, cu o viaÈ›Äƒ culturalÄƒ vibrantÄƒ, precum È™i unul dintre cele mai faimoase muzee Ã®n aer liber din Olanda (Nederlands Openluchtmuseum). Istorie K8: De ce a fost OperaÈ›iunea 'Market Garden' esenÈ›ialÄƒ pentru aliaÈ›i Ã®n al Doilea RÄƒzboi Mondial?",
    en: "Arnhem, the charming capital of the province of Gelderland, is picturesquely situated on the banks of the Lower Rhine. In World War II, the city gained worldwide tragic notoriety due to Operation Market Garden; the fierce battle for the bridge at Arnhem (known from the film 'A Bridge Too Far') left its mark on the cityscape through heavy destruction. Today, Arnhem is a fashion-conscious and green city surrounded by dense forests. It is famous for its renowned fashion district and is home to cultural highlights such as the Netherlands Open Air Museum and the large Burgers' Zoo. History K8: During the Battle of Arnhem, Allied paratroopers tried in vain to hold the Rhine bridge. Why was this bridge so important for the advance into Germany?"
  },
    facts: {
      de: ["Schauplatz der berÃ¼hmten Schlacht um Arnheim (1944).", "Das NiederlÃ¤ndische Freilichtmuseum (Openluchtmuseum) ist hier.", "Heimat des bekannten Burgers' Zoo.", "Grenzt an den Nationalpark Hoge Veluwe.", "Hat eine groÃŸe Mode- und Designszene.", "Die John-Frost-BrÃ¼cke ist ein wichtiges Denkmal."],
      hu: ["A hÃ­res arnhemi csata (1944) helyszÃ­ne.", "Itt talÃ¡lhatÃ³ a Holland SzabadtÃ©ri MÃºzeum (Openluchtmuseum).", "A hÃ­res Burgers' Zoo otthona.", "A Hoge Veluwe Nemzeti Parkkal hatÃ¡ros.", "JelentÅ‘s divat- Ã©s dizÃ¡jnkÃ¶zpont.", "A John Frost hÃ­d fontos emlÃ©kmÅ±."],
      ro: ["LocaÈ›ia celebrei BÄƒtÄƒlii de la Arnhem (1944).", "Muzeul Olandez Ã®n Aer Liber (Openluchtmuseum) este aici.", "AcasÄƒ la faimoasa GrÄƒdinÄƒ ZoologicÄƒ Burgers'.", "Se Ã®nvecineazÄƒ cu Parcul NaÈ›ional Hoge Veluwe.", "Are o scenÄƒ mare de modÄƒ È™i design.", "Podul John Frost este un monument important."],
      en: ["Site of the famous Battle of Arnhem (1944).", "The Netherlands Open Air Museum (Openluchtmuseum) is here.", "Home to the famous Burgers' Zoo.", "Borders the Hoge Veluwe National Park.", "Has a large fashion and design scene.", "The John Frost Bridge is an important monument."]
    },
    factsAdvanced: {
    de: [
      "Arnhem ist die einzige Stadt in den Niederlanden, die Ã¼ber ein ausgedehntes Obus-Netz (Trolleybusse) verfÃ¼gt.",
      "Die historische John-Frost-BrÃ¼cke in Arnhem wurde im September 1944 Schauplatz erbitterter KÃ¤mpfe im Zweiten Weltkrieg.",
      "Das NiederlÃ¤ndische Freilichtmuseum in Arnhem zeigt Ã¼ber 80 historische GebÃ¤ude aus verschiedenen Epochen des Landes.",
      "Arnhem ist eine der wichtigsten Mode-StÃ¤dte der Niederlande, dank der renommierten ArtEZ Hochschule fÃ¼r KÃ¼nste."
    ],
    hu: ["A John Frost hÃ­d Arnhemben arrÃ³l a brit parancsnokrÃ³l kapta a nevÃ©t, aki hÅ‘siesen vÃ©dte azt 1944-ben.", "A Holland SzabadtÃ©ri MÃºzeum (Openluchtmuseum) tÃ¶bb mint 100 tÃ¶rtÃ©nelmi holland Ã©pÃ¼letet mutat be.", "A vÃ¡ros ad otthont a Burgers' Zoo-nak, EurÃ³pa egyik legnagyobb Ã©s leginnovatÃ­vabb Ã¡llatkertjÃ©nek.", "Arnhem az egyetlen holland vÃ¡ros, ahol ma is kiterjedt trolibusz-hÃ¡lÃ³zat mÅ±kÃ¶dik."],
    ro: [
      "Podul John Frost din Arnhem poartÄƒ numele comandantului britanic care l-a apÄƒrat eroic Ã®n 1944.",
      "Muzeul Olandez Ã®n Aer Liber (Openluchtmuseum) prezintÄƒ peste 100 de clÄƒdiri olandeze istorice.",
      "OraÈ™ul gÄƒzduieÈ™te Burgers' Zoo, una dintre cele mai mari È™i mai inovatoare grÄƒdini zoologice din Europa.",
      "Arnhem este singurul oraÈ™ olandez care mai are È™i astÄƒzi o reÈ›ea extinsÄƒ de troleibuze."
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
      de: "Zwolle ist die Hauptstadt der Provinz Overijssel und war einst eine mÃ¤chtige Hansestadt. Die gut erhaltene Altstadt wird von sternfÃ¶rmigen KanÃ¤len umgeben. Zwolle vereint historische Architektur mit moderner Lebensart und beherbergt das beeindruckende Museum de Fundatie.",
      hu: "Zwolle Overijssel tartomÃ¡ny fÅ‘vÃ¡rosa, amely egykor hatalmas Hanza-vÃ¡ros volt. A jÃ³l megÅ‘rzÃ¶tt Ã³vÃ¡rost csillag alakÃº csatornÃ¡k veszik kÃ¶rÃ¼l. Zwolle Ã¶tvÃ¶zi a tÃ¶rtÃ©nelmi Ã©pÃ­tÃ©szetet a modern Ã©letmÃ³ddal, Ã©s itt talÃ¡lhatÃ³ a lenyÅ±gÃ¶zÅ‘ Museum de Fundatie.",
      ro: "Zwolle este capitala provinciei Overijssel È™i a fost odatÄƒ un puternic oraÈ™ hanseatic. OraÈ™ul vechi bine conservat este Ã®nconjurat de canale Ã®n formÄƒ de stea. Zwolle combinÄƒ arhitectura istoricÄƒ cu un stil de viaÈ›Äƒ modern È™i gÄƒzduieÈ™te impresionantul Museum de Fundatie.",
      en: "Zwolle is the capital of the province of Overijssel and was once a powerful Hanseatic city. The well-preserved old town is surrounded by star-shaped canals. Zwolle combines historic architecture with a modern lifestyle and is home to the impressive Museum de Fundatie."
    },
    descriptionAdvanced: {
    de: "Zwolle ist die pulsierende Hauptstadt der Provinz Overijssel und vereint eine reiche mittelalterliche Vergangenheit mit einer dynamischen modernen Entwicklung. Als ehemaliges mÃ¤chtiges Mitglied der Hanse blÃ¼hte die Stadt im Mittelalter auf, wovon heute noch die sternfÃ¶rmigen FestungsgrÃ¤ben, das prachtvolle Sassenpoort (Stadttor) und die majestÃ¤tischen KaufmannshÃ¤user zeugen. Zwolle ist bekannt fÃ¼r seine kulinarische Exzellenz und beherbergt das Spitzenrestaurant De Librije. Eine besondere SehenswÃ¼rdigkeit ist auch die spektakulÃ¤re Buchhandlung 'Waanders In de Broeren', die sich harmonisch in ein monumentales, gotisches KirchengebÃ¤ude einfÃ¼gt. Geschichte K6: Zwolle war eine Hansestadt. Was transportierten die hanseatischen Kaufmannsschiffe typischerweise Ã¼ber Nord- und Ostsee?",
    hu: "Zwolle egy tÃ¶rtÃ©nelmi vÃ¡ros Overijssel tartomÃ¡nyban, amely a kÃ¶zÃ©pkorban a Hanza-szÃ¶vetsÃ©g egyik legbefolyÃ¡sosabb kereskedelmi kÃ¶zpontja volt. A vÃ¡rosmagot ma is csillag alakÃº csatornarendszer Ã©s masszÃ­v erÅ‘dÃ­tmÃ©nyek veszik kÃ¶rÃ¼l, a Peperbus (BorsszÃ³rÃ³) nevÅ± impozÃ¡ns templomtorony pedig uralja a vÃ¡roskÃ©pet. Zwolle hÃ­res kivÃ¡lÃ³ gasztronÃ³miÃ¡jÃ¡rÃ³l â€“ itt talÃ¡lhatÃ³ a De Librije, Hollandia egyik leghÃ­resebb Michelin-csillagos Ã©tterme. A vÃ¡ros Ã¶tvÃ¶zi a tÃ¶rtÃ©nelmi bÃ¡jt a dinamikus, modern egyetemi Ã©lettel. TÃ¶rtÃ©nelem K6: Mi volt a Hanza-szÃ¶vetsÃ©g, Ã©s miÃ©rt biztosÃ­tott gazdagsÃ¡got a hozzÃ¡ tartozÃ³ vÃ¡rosoknak, mint Zwolle?",
    ro: "Zwolle este un oraÈ™ istoric din provincia Overijssel, care a fost unul dintre cele mai influente centre comerciale ale Ligii Hanseatice Ã®n Evul Mediu. Centrul oraÈ™ului este È™i astÄƒzi Ã®nconjurat de un sistem de canale Ã®n formÄƒ de stea È™i fortificaÈ›ii masive, Ã®n timp ce impunÄƒtorul turn al bisericii Peperbus (SolniÈ›a) dominÄƒ orizontul. Zwolle este renumit pentru gastronomia sa excelentÄƒ â€“ aici se aflÄƒ De Librije, unul dintre cele mai faimoase restaurante cu stele Michelin din Olanda. OraÈ™ul combinÄƒ farmecul istoric cu viaÈ›a universitarÄƒ modernÄƒ È™i dinamicÄƒ. Istorie K6: Ce a fost Liga HanseaticÄƒ È™i de ce a oferit bogÄƒÈ›ie oraÈ™elor membre, cum ar fi Zwolle?",
    en: "Zwolle is the vibrant capital of the province of Overijssel and combines a rich medieval past with dynamic modern development. As a former powerful member of the Hanseatic League, the city flourished in the Middle Ages, a legacy still evident today in its star-shaped moats, the magnificent Sassenpoort (city gate), and its majestic merchant houses. Zwolle is known for its culinary excellence and is home to the top-tier restaurant De Librije. A special attraction is the spectacular bookstore 'Waanders In de Broeren', which harmoniously blends into a monumental, Gothic church building. History K6: Zwolle was a Hanseatic city. What did Hanseatic merchant ships typically transport across the North and Baltic Seas?"
  },
    facts: {
      de: ["Historische Hansestadt mit reicher Geschichte.", "Das Stadttor 'Sassenpoort' ist ein Wahrzeichen.", "Bekannt fÃ¼r das sternfÃ¶rmige Kanalsystem.", "Das Museum de Fundatie zeigt bildende Kunst.", "Die gotische Grote Kerk stammt aus dem 15. Jahrhundert.", "Waanders In de Broeren ist eine Buchhandlung in einer alten Kirche."],
      hu: ["TÃ¶rtÃ©nelmi Hanza-vÃ¡ros gazdag tÃ¶rtÃ©nelemmel.", "A 'Sassenpoort' vÃ¡roskapu az egyik fÅ‘ lÃ¡tvÃ¡nyossÃ¡g.", "A csillag alakÃº csatornarendszerrÅ‘l ismert.", "A Museum de Fundatie kÃ©pzÅ‘mÅ±vÃ©szeti alkotÃ¡sokat mutat be.", "A gÃ³tikus Grote Kerk a 15. szÃ¡zadbÃ³l szÃ¡rmazik.", "A Waanders In de Broeren egy rÃ©gi templomban mÅ±kÃ¶dÅ‘ kÃ¶nyvesbolt."],
      ro: ["OraÈ™ istoric hanseatic cu o istorie bogatÄƒ.", "Poarta oraÈ™ului 'Sassenpoort' este un reper.", "Cunoscut pentru sistemul sÄƒu de canale Ã®n formÄƒ de stea.", "Museum de Fundatie expune arte plastice.", "Biserica goticÄƒ Grote Kerk dateazÄƒ din secolul al XV-lea.", "Waanders In de Broeren este o librÄƒrie Ã®ntr-o veche bisericÄƒ."],
      en: ["Historic Hanseatic city with a rich history.", "The 'Sassenpoort' city gate is a landmark.", "Known for its star-shaped canal system.", "The Museum de Fundatie displays fine arts.", "The Gothic Grote Kerk dates from the 15th century.", "Waanders In de Broeren is a bookstore in an old church."]
    },
    factsAdvanced: {
    de: [
      "Zwolle gehÃ¶rte im 15. Jahrhundert zu den wohlhabendsten Mitgliedern der Hanse.",
      "Das Sassenpoort, erbaut um 1409, ist ein monumentales Stadttor und gehÃ¶rt zu den Top-100-KulturdenkmÃ¤lern der Niederlande.",
      "Das Restaurant De Librije in Zwolle gehÃ¶rt zu den wenigen niederlÃ¤ndischen Restaurants, die mit drei Michelin-Sternen ausgezeichnet wurden.",
      "Die Buchhandlung in der 500 Jahre alten Broerenkerk in Zwolle wird oft als eine der schÃ¶nsten der Welt bezeichnet."
    ],
    hu: ["A Sassenpoort, a vÃ¡ros megmaradt kÃ¶zÃ©pkori kapuja, a 15. szÃ¡zadbÃ³l szÃ¡rmazik Ã©s az UNESCO mÅ±emlÃ©ki listÃ¡jÃ¡n szerepel.", "A Waanders In de Broeren egy lenyÅ±gÃ¶zÅ‘ kÃ¶nyvesbolt, amelyet egy 15. szÃ¡zadi domonkos templomban alakÃ­tottak ki.", "Zwolle lakÃ³it a kÃ¶zÃ©pkor Ã³ta 'Blauwvingers'-nek (KÃ©kujjÃºaknak) csÃºfoljÃ¡k egy szomszÃ©dos vÃ¡rossal valÃ³ viszÃ¡ly miatt.", "A vÃ¡ros egy fontos kÃ¶zlekedÃ©si csomÃ³pont a Randstad (a nyugati metropolisz) Ã©s Hollandia Ã©szaki rÃ©sze kÃ¶zÃ¶tt."],
    ro: [
      "Sassenpoort, poarta medievalÄƒ rÄƒmasÄƒ a oraÈ™ului, dateazÄƒ din secolul al XV-lea È™i se aflÄƒ pe lista monumentelor UNESCO.",
      "Waanders In de Broeren este o librÄƒrie uimitoare creatÄƒ Ã®ntr-o bisericÄƒ dominicanÄƒ din secolul al XV-lea.",
      "Locuitorii din Zwolle au fost porecliÈ›i 'Blauwvingers' (Degete albastre) Ã®ncÄƒ din Evul Mediu, din cauza unei dispute cu un oraÈ™ vecin.",
      "OraÈ™ul este un nod de transport important Ã®ntre Randstad (metropola vesticÄƒ) È™i partea de nord a Olandei."
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
      de: "Breda ist eine charmante historische Stadt in Nordbrabant mit starken Verbindungen zum niederlÃ¤ndischen KÃ¶nigshaus von Oranien-Nassau. Die Stadt ist bekannt fÃ¼r ihren schÃ¶nen Grote Markt, das imposante Schloss Breda und eine entspannte, gastfreundliche AtmosphÃ¤re. Breda bietet eine reiche Mischung aus Geschichte und modernem Stadtleben.",
      hu: "Breda bÃ¡jos tÃ¶rtÃ©nelmi vÃ¡ros Ã‰szak-Brabantban, amely szoros szÃ¡lakkal kÃ¶tÅ‘dik a holland OrÃ¡niai-Nassau-hÃ¡zhoz. A vÃ¡ros ismert a gyÃ¶nyÃ¶rÅ± Grote Markt-rÃ³l, az impozÃ¡ns bredai kastÃ©lyrÃ³l Ã©s a nyugodt, vendÃ©gszeretÅ‘ lÃ©gkÃ¶rrÅ‘l. Breda a tÃ¶rtÃ©nelem Ã©s a modern vÃ¡rosi Ã©let gazdag keverÃ©kÃ©t kÃ­nÃ¡lja.",
      ro: "Breda este un oraÈ™ istoric fermecÄƒtor din Brabantul de Nord, cu legÄƒturi puternice cu familia regalÄƒ olandezÄƒ de Orania-Nassau. OraÈ™ul este cunoscut pentru frumoasa sa piaÈ›Äƒ Grote Markt, impunÄƒtorul castel Breda È™i o atmosferÄƒ relaxatÄƒ È™i primitoare. Breda oferÄƒ un amestec bogat de istorie È™i viaÈ›Äƒ urbanÄƒ modernÄƒ.",
      en: "Breda is a charming historic city in North Brabant with strong ties to the Dutch royal House of Orange-Nassau. The city is known for its beautiful Grote Markt, the imposing Breda Castle and a relaxed, welcoming atmosphere. Breda offers a rich mix of history and modern city life."
    },
    descriptionAdvanced: {
    de: "Breda ist eine traditionsreiche, burgundische Stadt in der Provinz Nordbrabant, deren Geschichte tief mit dem niederlÃ¤ndischen KÃ¶nigshaus der Oranier-Nassau verwurzelt ist. Das beeindruckende Schloss von Breda und die prÃ¤chtige Grote Kerk, in der viele frÃ¼he Mitglieder der kÃ¶niglichen Familie begraben liegen, zeugen von dieser aristokratischen Vergangenheit. Die Stadt hat einen historischen Stadtkern mit von BÃ¤umen gesÃ¤umten PlÃ¤tzen und Grachten, der eine entspannte, gesellige AtmosphÃ¤re ausstrahlt. Breda war auch eine wichtige Festungsstadt und der Ort, an dem der Friede von Breda 1667 den Zweiten Englisch-NiederlÃ¤ndischen Krieg beendete. Geschichte K7: Die Familie von Oranien-Nassau herrscht in den Niederlanden. Was war die Rolle von Wilhelm von Oranien im 16. Jahrhundert fÃ¼r das Land?",
    hu: "Breda egy elegÃ¡ns vÃ¡ros Ã‰szak-Brabant tartomÃ¡nyban, amely szoros tÃ¶rtÃ©nelmi kapcsolatokat Ã¡pol az OrÃ¡niai-Nassau uralkodÃ³hÃ¡zzal. A Breda KastÃ©ly Ã©s a lenyÅ±gÃ¶zÅ‘ Grote Kerk (Nagy Templom) a vÃ¡ros kirÃ¡lyi mÃºltjÃ¡nak legszebb emlÃ©kei; ez utÃ³bbiban tÃ¶bb korai OrÃ¡niai herceg is nyugszik. A vÃ¡rost gyakran 'az Ã‰szak GyÃ¶ngyszemekÃ©nt' emlÃ­tik burgundi atmoszfÃ©rÃ¡ja, kivÃ¡lÃ³ Ã©ttermei Ã©s pezsgÅ‘ Ã©jszakai Ã©lete miatt. Breda fontos helyszÃ­ne volt a nyolcvanÃ©ves hÃ¡borÃºnak is, amelynek sorÃ¡n tÃ¶bbszÃ¶r is gazdÃ¡t cserÃ©lt. TÃ¶rtÃ©nelem K7: MiÃ©rt volt Breda fontos bÃ¡zisa az OrÃ¡niai-Nassau-hÃ¡znak a holland fÃ¼ggetlensÃ©gi hÃ¡borÃº elÅ‘tt?",
    ro: "Breda este un oraÈ™ elegant din provincia Brabantul de Nord, care menÈ›ine legÄƒturi istorice strÃ¢nse cu Casa RegalÄƒ de Orania-Nassau. Castelul Breda È™i impresionanta Grote Kerk (Biserica Mare) sunt cele mai frumoase amintiri ale trecutului regal al oraÈ™ului; mai mulÈ›i prinÈ›i timpurii de Orania se odihnesc Ã®n aceasta din urmÄƒ. OraÈ™ul este adesea denumit 'Perla Sudului' datoritÄƒ atmosferei sale burgunde, restaurantelor excelente È™i vieÈ›ii de noapte vibrante. Breda a fost, de asemenea, un loc important Ã®n timpul RÄƒzboiului de Optzeci de Ani, schimbÃ¢nd mÃ¢inile de mai multe ori. Istorie K7: De ce a fost Breda o bazÄƒ importantÄƒ pentru Casa de Orania-Nassau Ã®naintea rÄƒzboiului de independenÈ›Äƒ olandez?",
    en: "Breda is a traditional, Burgundian city in the province of North Brabant, with a history deeply rooted in the Dutch royal House of Orange-Nassau. The impressive Castle of Breda and the magnificent Grote Kerk, where many early members of the royal family are buried, bear witness to this aristocratic past. The city has a historic center with tree-lined squares and canals, radiating a relaxed, sociable atmosphere. Breda was also an important fortified city and the place where the Treaty of Breda in 1667 ended the Second Anglo-Dutch War. History K7: The House of Orange-Nassau rules the Netherlands. What was the role of William of Orange for the country in the 16th century?"
  },
    facts: {
      de: ["Historische Residenzstadt der Familie von Oranien-Nassau.", "Die Onze-Lieve-Vrouwekerk ist ein Meisterwerk der Brabanter Gotik.", "Das Schloss Breda war einst ein kÃ¶niglicher Palast.", "Beliebt fÃ¼r seine burgundische Gastfreundschaft.", "Der Begijnhof ist eine ruhige historische Oase im Zentrum.", "War eine wichtige Festungsstadt."],
      hu: ["Az OrÃ¡niai-Nassau csalÃ¡d tÃ¶rtÃ©nelmi rezidenciavÃ¡rosa.", "Az Onze-Lieve-Vrouwekerk a brabanti gÃ³tika remekmÅ±ve.", "A bredai kastÃ©ly egykor kirÃ¡lyi palota volt.", "NÃ©pszerÅ± a burgundi vendÃ©gszeretetÃ©rÅ‘l.", "A Begijnhof egy csendes tÃ¶rtÃ©nelmi oÃ¡zis a kÃ¶zpontban.", "Fontos erÅ‘dvÃ¡ros volt."],
      ro: ["OraÈ™ rezidenÈ›ial istoric al familiei de Orania-Nassau.", "Onze-Lieve-Vrouwekerk este o capodoperÄƒ a goticului brabantin.", "Castelul Breda a fost odatÄƒ un palat regal.", "Popular pentru ospitalitatea sa burgundÄƒ.", "Begijnhof este o oazÄƒ istoricÄƒ liniÈ™titÄƒ Ã®n centru.", "A fost un important oraÈ™ fortificat."],
      en: ["Historic residential city of the House of Orange-Nassau.", "The Onze-Lieve-Vrouwekerk is a masterpiece of Brabantian Gothic.", "Breda Castle was once a royal palace.", "Popular for its Burgundian hospitality.", "The Begijnhof is a quiet historic oasis in the center.", "Was an important fortified city."]
    },
    factsAdvanced: {
    de: [
      "Breda wird aufgrund seiner starken historischen Bindung an die kÃ¶nigliche Familie oft als 'Nassaustadt' bezeichnet.",
      "In der Liebfrauenkirche (Grote Kerk) in Breda befindet sich die GrabstÃ¤tte frÃ¼her Vorfahren des niederlÃ¤ndischen KÃ¶nigshauses.",
      "Der Friede von Breda von 1667 besiegelte, dass die Niederlande Neu-Amsterdam (das spÃ¤tere New York) an die Briten abtraten.",
      "Das Stadtzentrum ist umgeben von den sogenannten Singels, den Resten der alten FestungsgrÃ¤ben."
    ],
    hu: ["A bredai Grote Kerk tornya 97 mÃ©ter magas, Ã©s a gÃ³tikus Ã©pÃ­tÃ©szet egyik csÃºcspontja.", "A 'Spanyolok Ã¡ltali bredai ostrom' Diego VelÃ¡zquez hÃ­res festmÃ©nyÃ©nek ('Breda Ã¡tadÃ¡sa') tÃ©mÃ¡ja.", "Breda volt a lengyel pÃ¡ncÃ©los hadosztÃ¡ly Ã¡ltal felszabadÃ­tott elsÅ‘ holland vÃ¡ros a mÃ¡sodik vilÃ¡ghÃ¡borÃºban.", "A KMA (KirÃ¡lyi Katonai AkadÃ©mia) 1828 Ã³ta a bredai kastÃ©lyban mÅ±kÃ¶dik."],
    ro: [
      "Turnul Grote Kerk din Breda are 97 de metri Ã®nÄƒlÈ›ime È™i este un punct culminant al arhitecturii gotice.",
      "Asediul Bredei de cÄƒtre spanioli este subiectul celebrului tablou al lui Diego VelÃ¡zquez ('Predarea Bredei').",
      "Breda a fost primul oraÈ™ olandez eliberat de divizia blindatÄƒ polonezÄƒ Ã®n al Doilea RÄƒzboi Mondial.",
      "KMA (Academia MilitarÄƒ RegalÄƒ) funcÈ›ioneazÄƒ Ã®n Castelul Breda din 1828."
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
      de: "'s-Hertogenbosch, auch Den Bosch genannt, ist die Hauptstadt der Provinz Nordbrabant. Die Stadt bewahrt ihr mittelalterliches Flair und ist berÃ¼hmt fÃ¼r die imposante St.-Johannes-Kathedrale sowie fÃ¼r den Maler Hieronymus Bosch. Den Bosch ist fÃ¼r seine traditionelle Gastfreundschaft und den sÃ¼ÃŸen Snack 'Bossche Bol' bekannt.",
      hu: "'s-Hertogenbosch, vagy mÃ¡s nÃ©ven Den Bosch Ã‰szak-Brabant tartomÃ¡ny fÅ‘vÃ¡rosa. A vÃ¡ros Å‘rzi kÃ¶zÃ©pkori hangulatÃ¡t, Ã©s hÃ­res az impozÃ¡ns Szent JÃ¡nos-szÃ©kesegyhÃ¡zrÃ³l, valamint Hieronymus Bosch festÅ‘mÅ±vÃ©szrÅ‘l. Den Bosch ismert hagyomÃ¡nyos vendÃ©gszeretetÃ©rÅ‘l Ã©s a 'Bossche Bol' nevÅ± Ã©des finomsÃ¡grÃ³l.",
      ro: "'s-Hertogenbosch, numit È™i Den Bosch, este capitala provinciei Brabantul de Nord. OraÈ™ul Ã®È™i pÄƒstreazÄƒ flerul medieval È™i este faimos pentru impunÄƒtoarea CatedralÄƒ Sf. Ioan È™i pentru pictorul Hieronymus Bosch. Den Bosch este cunoscut pentru ospitalitatea sa tradiÈ›ionalÄƒ È™i pentru gustarea dulce 'Bossche Bol'.",
      en: "'s-Hertogenbosch, also known as Den Bosch, is the capital of the province of North Brabant. The city retains its medieval flair and is famous for the imposing St. John's Cathedral and the painter Hieronymus Bosch. Den Bosch is known for its traditional hospitality and the sweet snack 'Bossche Bol'."
    },
    descriptionAdvanced: {
    de: "'s-Hertogenbosch, oft liebevoll Den Bosch genannt, ist die Hauptstadt der Provinz Nordbrabant und besticht durch eine auÃŸergewÃ¶hnlich charmante, mittelalterliche Altstadt. Die unbestrittene architektonische Perle der Stadt ist die gewaltige Sint-Janskathedraal (St.-Johannes-Kathedrale), ein Meisterwerk der Brabanter Gotik, das reich mit Skulpturen verziert ist. Die Stadt wird von einem verborgenen Netzwerk alter Wasserwege, der Binnendieze, untertunnelt, das man heute in kleinen Booten erkunden kann. Den Bosch ist zudem die Heimatstadt des berÃ¼hmten und visionÃ¤ren Malers Hieronymus Bosch, dessen surreale Werke die Welt noch heute faszinieren. Kunst K8: Hieronymus Bosch malte im Mittelalter fantastische Bilder voller DÃ¤monen und seltsamer Kreaturen. Wie spiegelten diese Bilder die damaligen Ã„ngste der Menschen wider?",
    hu: "'s-Hertogenbosch, gyakran egyszerÅ±en csak Den Bosch (A Herceg Erdeje) nÃ©ven ismert vÃ¡ros Ã‰szak-Brabant fÅ‘vÃ¡rosa. A telepÃ¼lÃ©s a holland dÃ©l klasszikus, katolikus gyÃ¶kerekkel rendelkezÅ‘ kÃ¶zpontja, amelynek bÃ¼szkesÃ©ge a fensÃ©ges Szent JÃ¡nos-katedrÃ¡lis (Sint-Janskathedraal), a brabanti gÃ³tika mestermÅ±ve. A vÃ¡ros leghÃ­resebb szÃ¼lÃ¶tte Hieronymus Bosch, a 15-16. szÃ¡zadi lÃ¡tomÃ¡sos Ã©s szÃ¼rreÃ¡lis festÅ‘, akinek zsenialitÃ¡sÃ¡t egy kÃ¼lÃ¶n mÃºzeum is Ã¼nnepli. Den Bosch hÃ­res mÃ©g a Binnendieze nevÅ± rejtett csatornarendszerÃ©rÅ‘l is. MÅ±vÃ©szettÃ¶rtÃ©net K8: Milyen kÃ¶zÃ©pkori hiedelmek Ã©s fÃ©lelmek tÃ¼krÃ¶zÅ‘dnek Hieronymus Bosch szÃ¼rreÃ¡lis festmÃ©nyein?",
    ro: "'s-Hertogenbosch, adesea cunoscut simplu sub numele de Den Bosch (PÄƒdurea Ducelui), este capitala Brabantului de Nord. AÈ™ezarea este centrul clasic al sudului olandez cu rÄƒdÄƒcini catolice, a cÄƒrui mÃ¢ndrie este maiestuoasa CatedralÄƒ Sf. Ioan (Sint-Janskathedraal), o capodoperÄƒ a goticului brabantin. Cel mai faimos fiu al oraÈ™ului este Hieronymus Bosch, un pictor vizionar È™i suprarealist din secolele XV-XVI, a cÄƒrui genialitate este sÄƒrbÄƒtoritÄƒ Ã®ntr-un muzeu dedicat. Den Bosch este, de asemenea, renumit pentru sistemul sÄƒu ascuns de canale numit Binnendieze. Istoria artei K8: Ce credinÈ›e È™i temeri medievale se reflectÄƒ Ã®n picturile suprarealiste ale lui Hieronymus Bosch?",
    en: "'s-Hertogenbosch, affectionately known as Den Bosch, is the capital of the province of North Brabant and boasts an exceptionally charming medieval old town. The city's undisputed architectural pearl is the massive Sint-Janskathedraal (St. John's Cathedral), a masterpiece of Brabantine Gothic richly decorated with sculptures. The city is tunneled by a hidden network of old waterways, the Binnendieze, which can be explored in small boats today. Den Bosch is also the hometown of the famous and visionary painter Hieronymus Bosch, whose surreal works still fascinate the world. Art K8: Hieronymus Bosch painted fantastic pictures full of demons and strange creatures in the Middle Ages. How did these images reflect the fears of people at that time?"
  },
    facts: {
      de: ["Die St.-Johannes-Kathedrale (Sint-Jan) ist stark gotisch geprÃ¤gt.", "Heimatstadt des Malers Hieronymus Bosch.", "Die historische Binnendieze ist ein teilweise unterirdisches Kanalsystem.", "BerÃ¼hmt fÃ¼r die sÃ¼ÃŸe SpezialitÃ¤t 'Bossche Bol'.", "Eine der Ã¤ltesten StÃ¤dte der Niederlande.", "Veranstaltet einen der grÃ¶ÃŸten Karnevale des Landes."],
      hu: ["A Szent JÃ¡nos-szÃ©kesegyhÃ¡z (Sint-Jan) gÃ³tikus remekmÅ±.", "Hieronymus Bosch festÅ‘mÅ±vÃ©sz szÃ¼lÅ‘vÃ¡rosa.", "A tÃ¶rtÃ©nelmi Binnendieze egy rÃ©szben fÃ¶ldalatti csatornarendszer.", "HÃ­res a 'Bossche Bol' nevÅ± Ã©dessÃ©grÅ‘l.", "Hollandia egyik legrÃ©gebbi vÃ¡rosa.", "Az orszÃ¡g egyik legnagyobb karnevÃ¡ljÃ¡t rendezi meg."],
      ro: ["Catedrala Sf. Ioan (Sint-Jan) este puternic influenÈ›atÄƒ de stilul gotic.", "OraÈ™ul natal al pictorului Hieronymus Bosch.", "Binnendieze este un sistem de canale parÈ›ial subteran istoric.", "Faimos pentru specialitatea dulce 'Bossche Bol'.", "Unul dintre cele mai vechi oraÈ™e din ÈšÄƒrile de Jos.", "GÄƒzduieÈ™te unul dintre cele mai mari carnavaluri din È›arÄƒ."],
      en: ["St. John's Cathedral (Sint-Jan) is strongly influenced by the Gothic style.", "Hometown of the painter Hieronymus Bosch.", "The historic Binnendieze is a partially underground canal system.", "Famous for the sweet specialty 'Bossche Bol'.", "One of the oldest cities in the Netherlands.", "Hosts one of the largest carnivals in the country."]
    },
    factsAdvanced: {
    de: [
      "Die Sint-Janskathedraal in 's-Hertogenbosch gilt als der HÃ¶hepunkt der gotischen Architektur in den Niederlanden.",
      "Das unterirdische Kanalsystem der Binnendieze verlief frÃ¼her unterhalb der HÃ¤user und diente sowohl als Transportweg als auch als Abwassersystem.",
      "Die lokale kulinarische SpezialitÃ¤t ist der 'Bossche Bol', ein riesiger, mit Sahne gefÃ¼llter und mit Schokolade Ã¼berzogener Windbeutel.",
      "Der weltberÃ¼hmte mittelalterliche Maler Hieronymus Bosch lebte und arbeitete sein ganzes Leben in dieser Stadt."
    ],
    hu: ["A Binnendieze csatornÃ¡k rÃ©szben a vÃ¡ros tÃ¶rtÃ©nelmi Ã©pÃ¼letei alatt futnak, Ã©s hajÃ³val felfedezhetÅ‘k.", "A vÃ¡ros hÃ­res Ã©dessÃ©ge a 'Bossche Bol', egy hatalmas, csokolÃ¡dÃ©val bevont Ã©s tejszÃ­nhabbal tÃ¶ltÃ¶tt fÃ¡nk.", "A Sint-Janskathedraal kÃ¼lsejÃ©t kÃ¼lÃ¶nleges 'kapaszkodÃ³' kÅ‘szobrok (szÃ¶rnyek, emberek) dÃ­szÃ­tik a tÃ¡mpillÃ©reken.", "A vÃ¡ros egyike volt a kevÃ©s holland telepÃ¼lÃ©snek, amelyik a 80 Ã©ves hÃ¡borÃº elejÃ©n hÅ± maradt a spanyol koronÃ¡hoz."],
    ro: [
      "Canalele Binnendieze trec parÈ›ial pe sub clÄƒdirile istorice ale oraÈ™ului È™i pot fi explorate cu barca.",
      "Dulciul faimos al oraÈ™ului este 'Bossche Bol', o gogoaÈ™Äƒ uriaÈ™Äƒ acoperitÄƒ cu ciocolatÄƒ È™i umplutÄƒ cu friÈ™cÄƒ.",
      "Exteriorul Catedralei Sint-Janskathedraal este decorat cu statui speciale de piatrÄƒ care se agaÈ›Äƒ (monÈ™tri, oameni) pe contraforturi.",
      "OraÈ™ul a fost una dintre puÈ›inele aÈ™ezÄƒri olandeze care au rÄƒmas loiale coroanei spaniole la Ã®nceputul RÄƒzboiului de Optzeci de Ani."
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
      de: "Dordrecht, oft liebevoll 'Dordt' genannt, ist die Ã¤lteste Stadt in der Provinz SÃ¼dholland. Die von FlÃ¼ssen umgebene Inselstadt spielte eine zentrale Rolle im Handel der Niederlande. Die reiche Geschichte spiegelt sich in den vielen mittelalterlichen GebÃ¤uden, HÃ¶fen und InnenstadthÃ¤fen wider.",
      hu: "Dordrechtet, amelyet gyakran 'Dordt'-nak is becÃ©znek, DÃ©l-Holland tartomÃ¡ny legrÃ©gebbi vÃ¡rosa. A folyÃ³kkal kÃ¶rÃ¼lvett szigetvÃ¡ros kÃ¶zponti szerepet jÃ¡tszott a holland kereskedelemben. Gazdag tÃ¶rtÃ©nelme szÃ¡mos kÃ¶zÃ©pkori Ã©pÃ¼letben, udvarban Ã©s belvÃ¡rosi kikÃ¶tÅ‘ben tÃ¼krÃ¶zÅ‘dik.",
      ro: "Dordrecht, adesea numit cu afecÈ›iune 'Dordt', este cel mai vechi oraÈ™ din provincia Olanda de Sud. OraÈ™ul-insulÄƒ Ã®nconjurat de rÃ¢uri a jucat un rol central Ã®n comerÈ›ul olandez. Istoria sa bogatÄƒ se reflectÄƒ Ã®n numeroasele clÄƒdiri medievale, curÈ›i È™i porturi din centrul oraÈ™ului.",
      en: "Dordrecht, often affectionately called 'Dordt', is the oldest city in the province of South Holland. The island city surrounded by rivers played a central role in Dutch trade. Its rich history is reflected in the many medieval buildings, courtyards, and inner-city harbors."
    },
    descriptionAdvanced: {
    de: "Dordrecht ist die Ã¤lteste Stadt der alten Grafschaft Holland und liegt auf einer Insel, umgeben von breiten FlÃ¼ssen in der Provinz SÃ¼dholland. Die Stadt erlebte ihre BlÃ¼tezeit im Mittelalter durch das sogenannte Stapelrecht, das vorbeifahrende Schiffe zwang, ihre Waren hier abzuladen und auf dem Markt anzubieten, was Dordrecht immensen Reichtum bescherte. Die historische Innenstadt mit ihren malerischen, oft schiefen HÃ¤usern direkt am Wasser, Ã¼ber 1000 denkmalgeschÃ¼tzten GebÃ¤uden und der massiven, nicht ganz fertiggestellten Grote Kerk strahlt einen unverwechselbaren maritimen Charme aus. Im Jahr 1572 fand hier zudem die Erste Freie Staatenversammlung statt, ein SchlÃ¼sselereignis in der UnabhÃ¤ngigkeit der Niederlande. Geschichte K7: Dordrecht hatte das mittelalterliche Stapelrecht. Wie verhalf dieses Vorrecht der Stadt zu groÃŸem Reichtum durch ZÃ¶lle und Handel?",
    hu: "Dordrecht, gyakran rÃ¶viden csak Dordt, Hollandia legidÅ‘sebb vÃ¡rosa a tÃ¶rtÃ©nelmi Holland grÃ³fsÃ¡g (a mai Ã‰szak- Ã©s DÃ©l-Holland) terÃ¼letÃ©n, 1220-ban kapott vÃ¡rosi rangot. A telepÃ¼lÃ©s egy szigeten fekszik tÃ¶bb nagy folyÃ³ talÃ¡lkozÃ¡sÃ¡nÃ¡l, amely ideÃ¡lis kereskedelmi kÃ¶zponttÃ¡ tette a kÃ¶zÃ©pkorban a fa- Ã©s gabonakereskedelem szÃ¡mÃ¡ra. Dordrecht tÃ¶rtÃ©nelmi belvÃ¡rosa tÃ¶bb mint ezer mÅ±emlÃ©kkel, festÅ‘i belsÅ‘ kikÃ¶tÅ‘kkel Ã©s jellegzetes patricius hÃ¡zakkal bÃ¼szkÃ©lkedhet. Az 1618-as dordrechti zsinat a holland protestantizmus egyik legfontosabb esemÃ©nye volt. TÃ¶rtÃ©nelem K7: Hogyan alapozta meg Dordrecht gazdagsÃ¡gÃ¡t a 'stapelrecht' (Ã¡rumegÃ¡llÃ­tÃ¡si jog) a kÃ¶zÃ©pkori HollandiÃ¡ban?",
    ro: "",
    en: "Dordrecht is the oldest city in the historic County of Holland, located on an island surrounded by broad rivers in the province of South Holland. The city experienced its heyday in the Middle Ages through the so-called staple right, which forced passing ships to unload their goods and offer them at the market here, bringing immense wealth to Dordrecht. The historical inner city, with its picturesque, often crooked houses right on the water, over 1,000 listed buildings, and the massive, unfinished Grote Kerk, exudes an unmistakable maritime charm. In 1572, the First Free Assembly of the States also took place here, a key event in the independence of the Netherlands. History K7: Dordrecht had medieval staple rights. How did this privilege help the city to great wealth through tolls and trade?"
  },
    facts: {
      de: ["Die Ã¤lteste Stadt in der frÃ¼heren Grafschaft Holland (Stadtrechte 1220).", "Eine wasserreiche Inselstadt.", "Das Dordrechts Museum ist fÃ¼r seine niederlÃ¤ndische Malerei bekannt.", "Die Erste Freie Staatenversammlung fand 1572 hier statt.", "Die Grote Kerk prÃ¤gt die Skyline der Stadt.", "Grenzt direkt an den Nationalpark De Biesbosch."],
      hu: ["A korÃ¡bbi Holland GrÃ³fsÃ¡g legrÃ©gebbi vÃ¡rosa (vÃ¡rosjogok: 1220).", "Vizekben gazdag szigetvÃ¡ros.", "A Dordrechts Museum a holland festÃ©szetrÅ‘l ismert.", "Itt tartottÃ¡k 1572-ben az elsÅ‘ szabad rendi gyÅ±lÃ©st.", "A Grote Kerk uralja a vÃ¡ros lÃ¡tkÃ©pÃ©t.", "KÃ¶zvetlenÃ¼l a De Biesbosch Nemzeti Parkkal hatÃ¡ros."],
      ro: ["Cel mai vechi oraÈ™ din fostul Comitat Olanda (drepturi de oraÈ™ 1220).", "Un oraÈ™-insulÄƒ bogat Ã®n apÄƒ.", "Muzeul Dordrechts este cunoscut pentru pictura sa olandezÄƒ.", "Prima Adunare LiberÄƒ a Statelor a avut loc aici Ã®n 1572.", "Grote Kerk dominÄƒ orizontul oraÈ™ului.", "Se Ã®nvecineazÄƒ direct cu Parcul NaÈ›ional De Biesbosch."],
      en: ["The oldest city in the former County of Holland (city rights 1220).", "A water-rich island city.", "The Dordrechts Museum is known for its Dutch painting.", "The First Free Assembly of the States took place here in 1572.", "The Grote Kerk dominates the city skyline.", "Borders directly on the De Biesbosch National Park."]
    },
    factsAdvanced: {
    de: [
      "Dordrecht erhielt 1220 Stadtrechte und ist die Ã¤lteste noch bestehende Stadt in der historischen Region Holland.",
      "Die massige Grote Kerk hat einen auffallend schiefen, unvollendeten Turm, der aufgrund des weichen Bodens anfing zu sinken.",
      "Das Stadtzentrum liegt buchstÃ¤blich im Wasser und besitzt noch viele historische Hafenbecken ohne Ufermauern, wo die HÃ¤user direkt aus dem Wasser ragen.",
      "Die Stadt grenzt direkt an den Nationalpark De Biesbosch, eines der wenigen SÃ¼ÃŸwasser-Gezeitengebiete Europas."
    ],
    hu: ["Dordrecht a Biesbosch Nemzeti Park, egy egyedÃ¼lÃ¡llÃ³ Ã©desvÃ­zi Ã¡rapÃ¡ly-deltavidÃ©k szomszÃ©dsÃ¡gÃ¡ban fekszik.", "A Grote Kerk hatalmas, ferde tornya befejezetlen maradt, miutÃ¡n a mocsaras talaj sÃ¼llyedni kezdett.", "1572-ben itt tartottÃ¡k az ElsÅ‘ Szabad Ãllamok GyÅ±lÃ©sÃ©t, amely OrÃ¡niai Vilmost vÃ¡lasztotta vezetÅ‘nek.", "A vÃ¡ros tÃ¶rtÃ©nelmi kÃ¶zpontja a vÃ­zre Ã©pÃ¼lt, Ã­gy sok hÃ¡z bejÃ¡rata kÃ¶zvetlenÃ¼l a csatornÃ¡kra nyÃ­lik."],
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
      de: "Alkmaar ist eine charmante historische Stadt in Nordholland, weltweit bekannt fÃ¼r ihren traditionellen KÃ¤semarkt, der im Sommer wÃ¶chentlich stattfindet. Neben dem KÃ¤se bietet die Stadt ein wunderschÃ¶nes Zentrum mit vielen Grachten, historischen GebÃ¤uden und interessanten Museen wie dem nationalen Biermuseum.",
      hu: "Alkmaar egy bÃ¡jos tÃ¶rtÃ©nelmi vÃ¡ros Ã‰szak-HollandiÃ¡ban, amely vilÃ¡gszerte ismert hagyomÃ¡nyos sajtpiacÃ¡rÃ³l, amelyet nyÃ¡ron hetente tartanak. A sajt mellett a vÃ¡ros gyÃ¶nyÃ¶rÅ± kÃ¶zpontot kÃ­nÃ¡l szÃ¡mos csatornÃ¡val, tÃ¶rtÃ©nelmi Ã©pÃ¼lettel Ã©s olyan Ã©rdekes mÃºzeumokkal, mint a Nemzeti SÃ¶rmÃºzeum.",
      ro: "Alkmaar este un oraÈ™ istoric fermecÄƒtor din Olanda de Nord, renumit Ã®n Ã®ntreaga lume pentru piaÈ›a sa tradiÈ›ionalÄƒ de brÃ¢nzeturi, care are loc sÄƒptÄƒmÃ¢nal Ã®n timpul verii. Pe lÃ¢ngÄƒ brÃ¢nzÄƒ, oraÈ™ul oferÄƒ un centru frumos, cu multe canale, clÄƒdiri istorice È™i muzee interesante, cum ar fi Muzeul NaÈ›ional al Berii.",
      en: "Alkmaar is a charming historic city in North Holland, known worldwide for its traditional cheese market, which is held weekly in summer. In addition to cheese, the city offers a beautiful center with many canals, historic buildings and interesting museums such as the National Beer Museum."
    },
    descriptionAdvanced: {
    de: "Alkmaar, eine malerische Stadt in der Provinz Nordholland, ist weltweit berÃ¼hmt fÃ¼r ihren traditionellen KÃ¤semarkt, der jeden Freitag von April bis September stattfindet. Die Stadt bietet ein prÃ¤chtiges historisches Zentrum mit vielen alten Grachten, ZugbrÃ¼cken und eleganten KaufmannshÃ¤usern, das von der reichen Vergangenheit zeugt. Alkmaar schrieb 1573 niederlÃ¤ndische Geschichte, als es den spanischen Truppen wÃ¤hrend des AchtzigjÃ¤hrigen Krieges erfolgreich widerstand. Dieser wichtige Sieg, der den Wendepunkt des Krieges markierte, prÃ¤gte das berÃ¼hmte Sprichwort 'Der Sieg beginnt in Alkmaar'. Geschichte K6: Alkmaar besiegte die Spanier 1573, auch weil das Umland geflutet wurde. Warum war das Fluten von Land (Inundation) in den Niederlanden eine wirksame Verteidigung?",
    hu: "Alkmaar egy varÃ¡zslatos vÃ¡ros Ã‰szak-Holland tartomÃ¡nyban, amely a vilÃ¡g minden tÃ¡jÃ¡n a hagyomÃ¡nyos sajtpiacÃ¡rÃ³l (Kaasmarkt) ismert. Minden pÃ©nteken a Waagplein tÃ©ren a sajthordÃ³ cÃ©hek tagjai a hagyomÃ¡nyoknak megfelelÅ‘en, fehÃ©r ruhÃ¡ban Ã©s szÃ­nes szalmakalapokban mÃ©rlegelik Ã©s cipelik a sÃ¡rga GoudÃ¡t Ã©s Edamit hatalmas fa hordÃ¡gyakon. Alkmaar gazdag tÃ¶rtÃ©nelemmel is bÃ­r: az 1573-as spanyol ostrom sikeres visszaverÃ©se volt az elsÅ‘ nagy holland gyÅ‘zelem a nyolcvanÃ©ves hÃ¡borÃºban, innen ered a mondÃ¡s: 'AlkmaarnÃ¡l kezdÅ‘dik a gyÅ‘zelem'. TÃ¶rtÃ©nelem K6: MiÃ©rt volt morÃ¡lisan olyan fontos a hollandok szÃ¡mÃ¡ra az alkmaari ostrom sikeres visszaverÃ©se?",
    ro: "",
    en: "Alkmaar, a picturesque city in the province of North Holland, is globally famous for its traditional cheese market held every Friday from April to September. The city offers a magnificent historical center with many old canals, drawbridges, and elegant merchant houses that bear witness to its rich past. Alkmaar made Dutch history in 1573 when it successfully resisted Spanish troops during the Eighty Years' War. This crucial victory, marking the turning point of the war, inspired the famous saying 'Victory begins at Alkmaar'. History K6: Alkmaar defeated the Spanish in 1573, partly because the surrounding land was flooded. Why was flooding land (inundation) an effective defense in the Netherlands?"
  },
    facts: {
      de: ["WeltberÃ¼hmt fÃ¼r den traditionellen KÃ¤semarkt auf dem Waagplein.", "Erfolgreiche Belagerung von Alkmaar 1573 als Wendepunkt im AchtzigjÃ¤hrigen Krieg.", "Beherbergt das Nationale Biermuseum De Boom.", "Das KÃ¤semuseum befindet sich im historischen Waaghaus.", "Viele erhaltene historische Hofjes (InnenhÃ¶fe).", "Ein wichtiges kulturelles Zentrum nÃ¶rdlich von Amsterdam."],
      hu: ["VilÃ¡ghÃ­rÅ± a Waagplein tÃ©ren tartott hagyomÃ¡nyos sajtpiacrÃ³l.", "Alkmaar sikeres 1573-as ostroma fordulÃ³pont volt a nyolcvanÃ©ves hÃ¡borÃºban.", "Itt talÃ¡lhatÃ³ a De Boom Nemzeti SÃ¶rmÃºzeum.", "A SajtmÃºzeum a tÃ¶rtÃ©nelmi Waag-Ã©pÃ¼letben kapott helyet.", "SzÃ¡mos megÅ‘rzÃ¶tt tÃ¶rtÃ©nelmi Hofje (belsÅ‘ udvar).", "AmszterdamtÃ³l Ã©szakra jelentÅ‘s kulturÃ¡lis kÃ¶zpont."],
      ro: ["Renumit Ã®n Ã®ntreaga lume pentru piaÈ›a tradiÈ›ionalÄƒ de brÃ¢nzeturi din Waagplein.", "Asediul de succes din Alkmaar din 1573 ca punct de cotiturÄƒ Ã®n RÄƒzboiul de Optzeci de Ani.", "GÄƒzduieÈ™te Muzeul NaÈ›ional al Berii De Boom.", "Muzeul BrÃ¢nzei se aflÄƒ Ã®n clÄƒdirea istoricÄƒ Waag.", "Multe hofjes (curÈ›i) istorice conservate.", "Un important centru cultural la nord de Amsterdam."],
      en: ["World-famous for the traditional cheese market on the Waagplein.", "Successful siege of Alkmaar in 1573 as a turning point in the Eighty Years' War.", "Houses the National Beer Museum De Boom.", "The Cheese Museum is located in the historic Waag building.", "Many preserved historic hofjes (courtyards).", "An important cultural center north of Amsterdam."]
    },
    factsAdvanced: {
    de: [
      "Der KÃ¤semarkt in Alkmaar ist der berÃ¼hmteste der Niederlande; hier transportieren KÃ¤setrÃ¤ger in traditioneller Kleidung tonnenschwere KÃ¤selaibe.",
      "Der Sieg von Alkmaar Ã¼ber die spanische Belagerung 1573 war der erste groÃŸe Erfolg der NiederlÃ¤nder im Kampf um ihre UnabhÃ¤ngigkeit.",
      "Das KÃ¤semuseum der Stadt befindet sich im Waagplein, im historischen GebÃ¤ude der alten Stadtwaage.",
      "Alkmaar verfÃ¼gt Ã¼ber 399 nationale DenkmÃ¤ler, darunter malerische HÃ¶fchen (Hofjes), die frÃ¼her fÃ¼r arme Witwen erbaut wurden."
    ],
    hu: ["Az alkmaari sajtpiac Ã¡prilistÃ³l szeptemberig mÅ±kÃ¶dik, Ã©s Ã©vente tÃ¶bb mint 100 000 turistÃ¡t vonz.", "A vÃ¡rosban talÃ¡lhatÃ³ a Holland SajtmÃºzeum (Hollands Kaasmuseum), a MÃ¡zsahÃ¡z (De Waag) Ã©pÃ¼letÃ©ben.", "A sajthordÃ³k cÃ©he (Kaasdragersgilde) nÃ©gy kÃ¼lÃ¶nbÃ¶zÅ‘ szÃ­nÅ± (piros, kÃ©k, sÃ¡rga, zÃ¶ld) csoportra oszlik.", "Alkmaar az orszÃ¡g egyik legfontosabb vÃ¡rosa az orgonazene Ã©s az orgonaÃ©pÃ­tÃ©s tÃ¶rtÃ©netÃ©ben."],
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
      de: "Das Mauritshuis in Den Haag ist ein renommiertes Kunstmuseum, das sich auf Meisterwerke des Goldenen Zeitalters der Niederlande spezialisiert hat. Das Museum befindet sich in einem historischen Palast aus dem 17. Jahrhundert und beherbergt weltberÃ¼hmte Werke wie Vermeers 'Das MÃ¤dchen mit dem PerlenohrgehÃ¤nge'.",
      hu: "A hÃ¡gai Mauritshuis egy neves mÅ±vÃ©szeti mÃºzeum, amely a holland aranykor remekmÅ±veire specializÃ¡lÃ³dott. A mÃºzeum egy tÃ¶rtÃ©nelmi 17. szÃ¡zadi palotÃ¡ban kapott helyet, Ã©s olyan vilÃ¡ghÃ­rÅ± mÅ±veknek ad otthont, mint Vermeer 'LeÃ¡ny gyÃ¶ngyfÃ¼lbevalÃ³val' cÃ­mÅ± festmÃ©nye.",
      ro: "Mauritshuis din Haga este un renumit muzeu de artÄƒ specializat Ã®n capodopere din Epoca de Aur olandezÄƒ. Muzeul este gÄƒzduit Ã®ntr-un palat istoric din secolul al XVII-lea È™i gÄƒzduieÈ™te lucrÄƒri de renume mondial, cum ar fi 'Fata cu cercel de perlÄƒ' de Vermeer.",
      en: "The Mauritshuis in The Hague is a renowned art museum specializing in masterpieces from the Dutch Golden Age. The museum is housed in a historic 17th-century palace and is home to world-famous works such as Vermeer's 'Girl with a Pearl Earring'."
    },
    descriptionAdvanced: {
    de: "Das Mauritshuis ist ein weltbekanntes Kunstmuseum in Den Haag, das sich in einem palastartigen Stadthaus aus dem 17. Jahrhundert direkt am Hofvijver befindet. Obwohl das Museum im Vergleich zu anderen Nationalgalerien eher klein ist, beherbergt es eine der feinsten Sammlungen der niederlÃ¤ndischen Malerei des Goldenen Zeitalters. Die WÃ¤nde der prunkvollen RÃ¤ume sind mit den Meisterwerken von Vermeer, Rembrandt, Rubens und Frans Hals geschmÃ¼ckt. Das absolute HerzstÃ¼ck und der unbestrittene Publikumsmagnet der Sammlung ist Johannes Vermeers faszinierendes GemÃ¤lde 'Das MÃ¤dchen mit dem PerlenohrgehÃ¤nge', das oft als die 'Mona Lisa des Nordens' bezeichnet wird. Kunst K7: 'Das MÃ¤dchen mit dem PerlenohrgehÃ¤nge' ist eine sogenannte 'Tronie'. Was unterscheidet eine Tronie im 17. Jahrhundert von einem klassischen PortrÃ¤t?",
    hu: "A Mauritshuis (MÃ³ric-hÃ¡z) HÃ¡gÃ¡ban talÃ¡lhatÃ³, Ã©s Hollandia egyik legjelentÅ‘sebb mÅ±vÃ©szeti mÃºzeuma. A palotÃ¡t Johan Maurits van Nassau-Siegen szÃ¡mÃ¡ra Ã©pÃ­tettÃ©k a 17. szÃ¡zadban a holland klasszicista Ã©pÃ­tÃ©szet remekmÅ±vekÃ©nt. A mÃºzeum vilÃ¡ghÃ­rÅ± a holland Aranykor festÃ©szetÃ©nek pÃ¡ratlan gyÅ±jtemÃ©nyÃ©rÅ‘l. MÃ©reteiben sokkal intimebb, mint a Rijksmuseum, mÃ©gis olyan ikonikus mestermÅ±veknek ad otthont, mint Johannes Vermeer 'LeÃ¡ny gyÃ¶ngyfÃ¼lbevalÃ³val' cÃ­mÅ± alkotÃ¡sa, valamint Rembrandt 'Dr. Nicolaes Tulp anatÃ³miÃ¡ja' cÃ­mÅ± festmÃ©nye. MÅ±vÃ©szettÃ¶rtÃ©net K8: MiÃ©rt tartjÃ¡k a 'LeÃ¡ny gyÃ¶ngyfÃ¼lbevalÃ³val' cÃ­mÅ± festmÃ©nyt a 'holland Mona LisÃ¡nak'?",
    ro: "",
    en: "The Mauritshuis is a world-renowned art museum in The Hague, located in a palatial 17th-century townhouse right next to the Hofvijver lake. Although the museum is rather small compared to other national galleries, it houses one of the finest collections of Dutch Golden Age painting. The walls of the magnificent rooms are adorned with masterpieces by Vermeer, Rembrandt, Rubens, and Frans Hals. The absolute centerpiece and undisputed crowd-puller of the collection is Johannes Vermeer's captivating painting 'Girl with a Pearl Earring', often referred to as the 'Mona Lisa of the North'. Art K7: 'Girl with a Pearl Earring' is a so-called 'Tronie'. What distinguishes a tronie in the 17th century from a classic portrait?"
  },
    facts: {
      de: ["Beherbergt 'Das MÃ¤dchen mit dem PerlenohrgehÃ¤nge' von Johannes Vermeer.", "Zeigt Rembrandts 'Die Anatomiestunde des Dr. Tulp'.", "Die kÃ¶nigliche GemÃ¤ldegalerie ist in einem Palast untergebracht.", "Fokus auf niederlÃ¤ndische und flÃ¤mische Malerei des 17. Jahrhunderts.", "Direkt neben dem Binnenhof gelegen.", "Gilt als eines der schÃ¶nsten kleinen Museen der Welt."],
      hu: ["Itt talÃ¡lhatÃ³ Johannes Vermeer 'LeÃ¡ny gyÃ¶ngyfÃ¼lbevalÃ³val' cÃ­mÅ± festmÃ©nye.", "Bemutatja Rembrandt 'Dr. Tulp anatÃ³miÃ¡ja' cÃ­mÅ± mÅ±vÃ©t.", "A kirÃ¡lyi kÃ©ptÃ¡r egy palotÃ¡ban kapott helyet.", "FÅ‘kÃ©nt a 17. szÃ¡zadi holland Ã©s flamand festÃ©szetre fÃ³kuszÃ¡l.", "KÃ¶zvetlenÃ¼l a Binnenhof mellett talÃ¡lhatÃ³.", "A vilÃ¡g egyik legszebb kis mÃºzeumÃ¡nak tartjÃ¡k."],
      ro: ["GÄƒzduieÈ™te 'Fata cu cercel de perlÄƒ' de Johannes Vermeer.", "Expune 'LecÈ›ia de anatomie a Dr. Tulp' de Rembrandt.", "Galeria regalÄƒ de picturÄƒ este gÄƒzduitÄƒ Ã®ntr-un palat.", "Se concentreazÄƒ pe pictura olandezÄƒ È™i flamandÄƒ din secolul al XVII-lea.", "Situat chiar lÃ¢ngÄƒ Binnenhof.", "Considerat unul dintre cele mai frumoase muzee mici din lume."],
      en: ["Houses 'Girl with a Pearl Earring' by Johannes Vermeer.", "Displays Rembrandt's 'The Anatomy Lesson of Dr. Nicolaes Tulp'.", "The Royal Picture Gallery is housed in a palace.", "Focuses on 17th-century Dutch and Flemish painting.", "Located right next to the Binnenhof.", "Considered one of the most beautiful small museums in the world."]
    },
    factsAdvanced: {
    de: [
      "Das GebÃ¤ude wurde im 17. Jahrhundert fÃ¼r den Grafen Johann Moritz von Nassau-Siegen im klassizistischen Stil erbaut.",
      "Die Sammlung des Museums basiert ursprÃ¼nglich auf der GemÃ¤ldesammlung von Statthalter Wilhelm V. von Oranien.",
      "Vermeers berÃ¼hmtestes Werk, 'Das MÃ¤dchen mit dem PerlenohrgehÃ¤nge', wird im Museum in einem Raum mit Rembrandts 'Anatomiestunde' prÃ¤sentiert.",
      "Das Mauritshuis beherbergt fast 850 GemÃ¤lde, wobei der Fokus strikt auf niederlÃ¤ndischen und flÃ¤mischen Meistern des 17. Jahrhunderts liegt."
    ],
    hu: ["Az Ã©pÃ¼letet a hÃ­res 17. szÃ¡zadi holland Ã©pÃ­tÃ©sz, Jacob van Campen tervezte.", "A gyÅ±jtemÃ©ny magjÃ¡t eredetileg OrÃ¡niai Vilmos V. herceg magÃ¡ngyÅ±jtemÃ©nye alkotta.", "Carel Fabritius 'A tengelice' (Het Puttertje) cÃ­mÅ± festmÃ©nye is ebben a mÃºzeumban talÃ¡lhatÃ³.", "A mÃºzeum kÃ¶zvetlenÃ¼l a Binnenhof, a holland parlament tÃ¶rtÃ©nelmi Ã©pÃ¼letegyÃ¼ttese mellett fekszik."],
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
    name: { de: "KÃ¶nigspalast Amsterdam", hu: "Amszterdami KirÃ¡lyi Palota", ro: "Palatul Regal din Amsterdam", en: "Royal Palace Amsterdam" },
    image: "/geo-images/netherlands/royal-palace-dam.webp",
    description: {
      de: "Der KÃ¶nigspalast auf dem Dam-Platz in Amsterdam ist einer der offiziellen PalÃ¤ste der niederlÃ¤ndischen KÃ¶nigsfamilie. UrsprÃ¼nglich im 17. Jahrhundert als Rathaus erbaut, spiegelt er den Reichtum des Goldenen Zeitalters wider. SpÃ¤ter wurde er von Louis Bonaparte, Napoleons Bruder, in einen Palast umgewandelt.",
      hu: "Az amszterdami Dam tÃ©ren talÃ¡lhatÃ³ KirÃ¡lyi Palota a holland kirÃ¡lyi csalÃ¡d egyik hivatalos palotÃ¡ja. Eredetileg a 17. szÃ¡zadban Ã©pÃ¼lt vÃ¡roshÃ¡zakÃ©nt, Ã©s az aranykor gazdagsÃ¡gÃ¡t tÃ¼krÃ¶zi. KÃ©sÅ‘bb Louis Bonaparte, NapÃ³leon testvÃ©re alakÃ­totta Ã¡t palotÃ¡vÃ¡.",
      ro: "Palatul Regal din PiaÈ›a Dam din Amsterdam este unul dintre palatele oficiale ale familiei regale olandeze. Construit iniÈ›ial Ã®n secolul al XVII-lea ca primÄƒrie, reflectÄƒ bogÄƒÈ›ia Epocii de Aur. Mai tÃ¢rziu a fost transformat Ã®ntr-un palat de Louis Bonaparte, fratele lui Napoleon.",
      en: "The Royal Palace on Dam Square in Amsterdam is one of the official palaces of the Dutch royal family. Originally built in the 17th century as a town hall, it reflects the wealth of the Golden Age. It was later transformed into a palace by Louis Bonaparte, Napoleon's brother."
    },
    descriptionAdvanced: {
    de: "Der KÃ¶nigliche Palast (Paleis op de Dam) in Amsterdam ist eines der prÃ¤chtigsten und monumentalsten GebÃ¤ude der Niederlande und dominiert den zentralen Dam-Platz. Er wurde im 17. Jahrhundert, wÃ¤hrend des HÃ¶hepunkts des Goldenen Zeitalters, ursprÃ¼nglich als gewaltiges Rathaus fÃ¼r die wohlhabende Handelsmetropole erbaut und sollte die enorme Macht und den Reichtum Amsterdams reprÃ¤sentieren. Erst im frÃ¼hen 19. Jahrhundert wurde es vom franzÃ¶sischen KÃ¶nig Louis Bonaparte, dem Bruder Napoleons, in einen kÃ¶niglichen Palast umgewandelt. Heute wird das imposante Bauwerk von der niederlÃ¤ndischen KÃ¶nigsfamilie fÃ¼r offizielle EmpfÃ¤nge und staatliche Zeremonien genutzt, steht aber in der restlichen Zeit Besuchern offen. Architektur K6: Der Palast am Dam wurde auf extrem sumpfigem Boden gebaut. Wie schafften es die Baumeister des 17. Jahrhunderts, dass ein so schweres GebÃ¤ude aus Stein nicht einsinkt?",
    hu: "Az amszterdami KirÃ¡lyi Palota (Koninklijk Paleis) a Dam tÃ©ren Ã¡ll, Ã©s eredetileg nem kirÃ¡lyi rezidenciÃ¡nak, hanem Amszterdam VÃ¡roshÃ¡zÃ¡nak Ã©pÃ¼lt a 17. szÃ¡zadi holland aranykor csÃºcsÃ¡n. Az Ã©pÃ¼let Jacob van Campen tervei alapjÃ¡n kÃ©szÃ¼lt klasszicista stÃ­lusban, Ã©s a vÃ¡ros hihetetlen gazdagsÃ¡gÃ¡t Ã©s globÃ¡lis hatalmÃ¡t hivatott hirdetni. Csak a 19. szÃ¡zad elejÃ©n, amikor Bonaparte Lajos (NapÃ³leon testvÃ©re) Hollandia kirÃ¡lya lett, alakÃ­tottÃ¡k Ã¡t palotÃ¡vÃ¡. Ma a holland kirÃ¡lyi csalÃ¡d hÃ¡rom hivatalos palotÃ¡jÃ¡nak egyike, amelyet Ã¡llami fogadÃ¡sokra hasznÃ¡lnak. TÃ¶rtÃ©nelem K7: Hogyan tÃ¼krÃ¶zte a VÃ¡roshÃ¡za (a mai Palota) Ã©pÃ­tÃ©szete Amszterdam 17. szÃ¡zadi globÃ¡lis kereskedelmi szerepÃ©t?",
    ro: "",
    en: "The Royal Palace (Paleis op de Dam) in Amsterdam is one of the most magnificent and monumental buildings in the Netherlands, dominating the central Dam Square. It was originally built in the 17th century, during the height of the Golden Age, as a massive town hall for the wealthy trading metropolis, intended to represent Amsterdam's enormous power and wealth. It was not until the early 19th century that it was transformed into a royal palace by the French King Louis Bonaparte, Napoleon's brother. Today, the imposing structure is used by the Dutch royal family for official receptions and state ceremonies, but remains open to visitors during the rest of the year. Architecture K6: The palace on the Dam was built on extremely swampy ground. How did 17th-century builders prevent such a heavy stone building from sinking?"
  },
    facts: {
      de: ["UrsprÃ¼nglich als Amsterdamer Rathaus erbaut (1648).", "Gilt als das grÃ¶ÃŸte weltliche GebÃ¤ude des 17. Jahrhunderts.", "Wird heute fÃ¼r staatliche EmpfÃ¤nge und royale Veranstaltungen genutzt.", "Die BÃ¼rgerhalle zeigt beeindruckende Weltkarten auf dem Boden.", "Ruht auf Ã¼ber 13.000 HolzpfÃ¤hlen.", "Louis Bonaparte machte es 1808 zum KÃ¶nigspalast."],
      hu: ["Eredetileg amszterdami vÃ¡roshÃ¡zakÃ©nt Ã©pÃ¼lt (1648).", "A 17. szÃ¡zad legnagyobb vilÃ¡gi Ã©pÃ¼letÃ©nek tartjÃ¡k.", "Ma Ã¡llami fogadÃ¡sokra Ã©s kirÃ¡lyi rendezvÃ©nyekre hasznÃ¡ljÃ¡k.", "A PolgÃ¡rok Csarnoka padlÃ³jÃ¡n lenyÅ±gÃ¶zÅ‘ vilÃ¡gtÃ©rkÃ©pek lÃ¡thatÃ³k.", "TÃ¶bb mint 13 000 facÃ¶lÃ¶pÃ¶n nyugszik.", "Louis Bonaparte tette kirÃ¡lyi palotÃ¡vÃ¡ 1808-ban."],
      ro: ["Construit iniÈ›ial ca PrimÄƒrie a Amsterdamului (1648).", "ConsideratÄƒ cea mai mare clÄƒdire secularÄƒ din secolul al XVII-lea.", "AstÄƒzi este folosit pentru recepÈ›ii de stat È™i evenimente regale.", "Sala CetÄƒÈ›enilor prezintÄƒ hÄƒrÈ›i ale lumii impresionante pe podea.", "Se sprijinÄƒ pe peste 13.000 de piloni de lemn.", "Louis Bonaparte l-a transformat Ã®n palat regal Ã®n 1808."],
      en: ["Originally built as the Amsterdam Town Hall (1648).", "Considered the largest secular building of the 17th century.", "Today it is used for state receptions and royal events.", "The Citizens' Hall features impressive world maps on the floor.", "Rests on over 13,000 wooden piles.", "Louis Bonaparte made it a royal palace in 1808."]
    },
    factsAdvanced: {
    de: [
      "Das GebÃ¤ude ruht auf exakt 13.659 HolzpfÃ¤hlen, die tief in den weichen, morastigen Boden Amsterdams gerammt wurden.",
      "Es wurde von dem renommierten Architekten Jacob van Campen entworfen und gilt als das wichtigste GebÃ¤ude des niederlÃ¤ndischen Klassizismus.",
      "Die BÃ¼rgersaal im Inneren des Palastes enthÃ¤lt riesige, in den Marmorboden eingelassene Landkarten, die Amsterdam als Zentrum des Universums darstellen.",
      "Das GebÃ¤ude wurde erst 1808 durch Louis Bonaparte (KÃ¶nig von Holland) von einem Rathaus in einen KÃ¶nigspalast umgewandelt."
    ],
    hu: ["Az Ã©pÃ¼let tÃ¶bb mint 13 600 facÃ¶lÃ¶pÃ¶n nyugszik, hogy ne sÃ¼llyedjen el a mocsaras amszterdami talajban.", "A palota kÃ¶zponti csarnokÃ¡nak (Burgerzaal) padlÃ³jÃ¡n hÃ¡rom hatalmas tÃ©rkÃ©p (vilÃ¡gtÃ©rkÃ©pek Ã©s csillagtÃ©rkÃ©p) lÃ¡thatÃ³.", "A homlokzaton lÃ©vÅ‘ Atlasz-szobor a vilÃ¡g terhÃ©t a vÃ¡llÃ¡n hordozÃ³ mitolÃ³giai alakot Ã¡brÃ¡zolja.", "A palota bÃºtorzatÃ¡nak jelentÅ‘s rÃ©sze Bonaparte Lajos kirÃ¡ly idejÃ©bÅ‘l, az empÃ­re stÃ­lus korÃ¡bÃ³l szÃ¡rmazik."],
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
    name: { de: "MÃ¼hlen von Kinderdijk", hu: "Kinderdijk szÃ©lmalmai", ro: "Morile de vÃ¢nt din Kinderdijk", en: "Windmills at Kinderdijk" },
    image: "/geo-images/netherlands/kinderdijk-wind.webp",
    description: {
      de: "Kinderdijk ist weltberÃ¼hmt fÃ¼r sein System aus 19 historischen WindmÃ¼hlen, die im 18. Jahrhundert erbaut wurden. Sie dienten dazu, Ã¼berschÃ¼ssiges Wasser aus den Poldern abzupumpen und das Land vor Ãœberschwemmungen zu schÃ¼tzen. Heute ist die Landschaft ein herausragendes Beispiel der niederlÃ¤ndischen Wassermanagement-Geschichte.",
      hu: "Kinderdijk vilÃ¡ghÃ­rÅ± a 18. szÃ¡zadban Ã©pÃ¼lt, 19 tÃ¶rtÃ©nelmi szÃ©lmalombÃ³l Ã¡llÃ³ rendszerÃ©rÅ‘l. Ezeket arra hasznÃ¡ltÃ¡k, hogy kiszivattyÃºzzÃ¡k a felesleges vizet a polderekbÅ‘l, Ã©s megvÃ©djÃ©k a fÃ¶ldet az Ã¡radÃ¡soktÃ³l. Ma a tÃ¡j a holland vÃ­zgazdÃ¡lkodÃ¡s tÃ¶rtÃ©netÃ©nek kiemelkedÅ‘ pÃ©ldÃ¡ja.",
      ro: "Kinderdijk este renumit Ã®n Ã®ntreaga lume pentru sistemul sÄƒu de 19 mori de vÃ¢nt istorice construite Ã®n secolul al XVIII-lea. Ele au fost folosite pentru a pompa excesul de apÄƒ din poldere È™i pentru a proteja terenul de inundaÈ›ii. AstÄƒzi peisajul este un exemplu remarcabil al istoriei managementului apei olandez.",
      en: "Kinderdijk is world-famous for its system of 19 historic windmills built in the 18th century. They were used to pump excess water from the polders and protect the land from flooding. Today the landscape is an outstanding example of Dutch water management history."
    },
        descriptionAdvanced: {
    de: "Die WindmÃ¼hlen von Kinderdijk bilden das grÃ¶ÃŸte erhaltene WindmÃ¼hlennetzwerk der Niederlande und sind ein ikonisches Symbol fÃ¼r den Jahrhunderte alten Kampf des Landes gegen das Wasser. Die Gruppe von 19 MÃ¼hlen wurde um das Jahr 1740 errichtet, um das tiefliegende Polderland des Alblasserwaard zu entwÃ¤ssern, indem sie das Wasser Ã¼ber verschiedene HÃ¶henstufen in den Fluss Lek pumpten. Diese ausgeklÃ¼gelte Wasserwirtschaftsstruktur zeigt die Meisterschaft der NiederlÃ¤nder in der Landschaftsgestaltung und EntwÃ¤sserungstechnik, lange bevor Dampfmaschinen und ElektrizitÃ¤t genutzt wurden. Die malerisch an den KanÃ¤len aufgereihten MÃ¼hlen wurden 1997 zum UNESCO-Weltkulturerbe ernannt. Physik K6: Die MÃ¼hlen in Kinderdijk hoben das Wasser in ein hÃ¶heres Becken. Welche einfache Maschine im Inneren der MÃ¼hle nutzte die Drehbewegung, um das Wasser nach oben zu befÃ¶rdern?",
    hu: "Kinderdijk, DÃ©l-Hollandia szÃ­vÃ©ben, a holland vÃ­zgazdÃ¡lkodÃ¡s Ã©s mÃ©rnÃ¶ki zsenialitÃ¡s legszebb szimbÃ³luma. Az itteni 19 monumentÃ¡lis szÃ©lmalom 1738 Ã©s 1740 kÃ¶zÃ¶tt Ã©pÃ¼lt azzal a cÃ©llal, hogy kiszivattyÃºzza a felesleges vizet a kÃ¶rnyezÅ‘ polderekrÅ‘l, megakadÃ¡lyozva az Ã¡llandÃ³ Ã¡radÃ¡sokat. A szÃ©lmalmok szorosan egyÃ¼ttmÅ±kÃ¶dtek a zsiliprendszerekkel, a csatornÃ¡kkal Ã©s a szivattyÃºÃ¡llomÃ¡sokkal egy rendkÃ­vÃ¼l komplex vÃ©delmi hÃ¡lÃ³zatban. Az UNESCO 1997-ben a VilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©vÃ© nyilvÃ¡nÃ­totta a terÃ¼letet, mivel az ember Ã©s a termÃ©szet harmonikus kÃ¼zdelmÃ©t pÃ©ldÃ¡zza. TermÃ©szetismeret K7: Hogyan pumpÃ¡ltÃ¡k a vizet a szÃ©lmalmok magasabb szintekre, mielÅ‘tt a folyÃ³ba engedtÃ©k volna?",
    ro: "",
    en: "The windmills of Kinderdijk form the largest surviving windmill network in the Netherlands and are an iconic symbol of the country's centuries-old struggle against the water. The group of 19 mills was built around 1740 to drain the low-lying polder land of the Alblasserwaard by pumping the water up through various elevation levels into the river Lek. This ingenious water management structure demonstrates the mastery of the Dutch in landscaping and drainage technology long before steam engines and electricity were used. The mills, picturesquely lined up along the canals, were designated a UNESCO World Heritage site in 1997. Physics K6: The mills in Kinderdijk lifted water into a higher basin. Which simple machine inside the mill used the rotary motion to move the water upwards?"
  },
    facts: {
      de: ["Seit 1997 Teil des UNESCO-Weltkulturerbes.", "Besteht aus 19 erhaltenen WindmÃ¼hlen aus dem Jahr 1740.", "Erbaut, um den Alblasserwaard vor Ãœberschwemmungen zu bewahren.", "Ikonisches Symbol fÃ¼r das niederlÃ¤ndische Wassermanagement.", "Besucher kÃ¶nnen einige der MÃ¼hlen von innen besichtigen.", "Die MÃ¼hlen kÃ¶nnen noch heute Wasser pumpen."],
      hu: ["1997 Ã³ta az UNESCO VilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.", "19 fennmaradt szÃ©lmalombÃ³l Ã¡ll 1740-bÅ‘l.", "Az Alblasserwaard Ã¡radÃ¡soktÃ³l valÃ³ megvÃ©dÃ©sÃ©re Ã©pÃ¼lt.", "A holland vÃ­zgazdÃ¡lkodÃ¡s ikonikus szimbÃ³luma.", "A lÃ¡togatÃ³k nÃ©hÃ¡ny malmot belÃ¼lrÅ‘l is megtekinthetnek.", "A malmok mÃ©g ma is kÃ©pesek vizet szivattyÃºzni."],
      ro: ["Parte a Patrimoniului Mondial UNESCO din 1997.", "ConstÄƒ din 19 mori de vÃ¢nt conservate din anul 1740.", "Construite pentru a proteja Alblasserwaard de inundaÈ›ii.", "Simbol iconic al managementului apei olandez.", "Vizitatorii pot vedea interiorul unora dintre mori.", "Morile pot pompa apÄƒ È™i astÄƒzi."],
      en: ["Part of the UNESCO World Heritage Site since 1997.", "Consists of 19 preserved windmills from 1740.", "Built to protect the Alblasserwaard from flooding.", "Iconic symbol of Dutch water management.", "Visitors can view the inside of some of the mills.", "The mills can still pump water today."]
    },
      factsAdvanced: {
    de: [
      "Das Netzwerk in Kinderdijk besteht aus 19 intakten MÃ¼hlen, mehr als an jedem anderen Ort in den Niederlanden.",
      "Sie waren Teil eines komplexen Systems, das Wasser aus dem Polder in Becken pumpte, um es bei Ebbe in den Fluss abzulassen.",
      "Seit 1997 steht Kinderdijk als herausragendes Beispiel der Wasserbaukunst auf der Liste des UNESCO-Weltkulturerbes.",
      "Einige der MÃ¼hlen in Kinderdijk werden noch heute von traditionellen MÃ¼llern bewohnt und betrieben."
    ],
    hu: ["A 19 malom kÃ¶zÃ¼l sokat mÃ©g mindig a molnÃ¡rcsalÃ¡dok laknak, akik felÃ¼gyelik a mÅ±kÃ¶dÃ©sÃ¼ket.", "TÃ©len a befagyott csatornÃ¡kon a Kinderdijk malmai kÃ¶zÃ¶tt korcsolyÃ¡zni is lehet, ami festÅ‘i lÃ¡tvÃ¡ny.", "A malmok kÃ¶zÃ¶tt kÃ©tfÃ©le tÃ­pus dominÃ¡l: a nyolcszÃ¶gletÅ± 'grondzeiler' Ã©s a kerek tÃ©glamalmak.", "NyÃ¡ron, szombatonkÃ©nt a malmok mind egyszerre forognak, emlÃ©kezve a rÃ©gi idÅ‘kre."],
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
    name: { de: "Afsluitdijk", hu: "Afsluitdijk (ZÃ¡rÃ³gÃ¡t)", ro: "Afsluitdijk", en: "Afsluitdijk" },
    image: "/geo-images/netherlands/afsluitdijk.webp",
    description: {
      de: "Der Afsluitdijk (Abschlussdeich) ist ein monumentaler, 32 Kilometer langer Deich, der die Provinzen Nordholland und Friesland verbindet. Durch seinen Bau 1932 wurde die Nordseebucht Zuiderzee abgetrennt und in den SÃ¼ÃŸwassersee IJsselmeer umgewandelt. Er ist ein Meisterwerk der niederlÃ¤ndischen Ingenieurskunst zum Schutz vor dem Meer.",
      hu: "Az Afsluitdijk (ZÃ¡rÃ³gÃ¡t) egy monumentÃ¡lis, 32 kilomÃ©ter hosszÃº gÃ¡t, amely Ã‰szak-Holland Ã©s FrÃ­zfÃ¶ld tartomÃ¡nyokat kÃ¶ti Ã¶ssze. 1932-es felÃ©pÃ­tÃ©sÃ©vel a Zuiderzee Ã©szaki-tengeri Ã¶blÃ¶t levÃ¡lasztottÃ¡k, Ã©s Ã©desvizÅ± IJsselmeerrÃ© alakÃ­tottÃ¡k. A tenger elleni vÃ©dekezÃ©s holland mÃ©rnÃ¶ki remekmÅ±ve.",
      ro: "Afsluitdijk (Barajul de Ã®nchidere) este un dig monumental de 32 de kilometri care leagÄƒ provinciile Olanda de Nord È™i Frizia. ConstrucÈ›ia sa Ã®n 1932 a separat golful MÄƒrii Nordului Zuiderzee È™i l-a transformat Ã®n lacul de apÄƒ dulce IJsselmeer. Este o capodoperÄƒ a ingineriei olandeze pentru protecÈ›ia Ã®mpotriva mÄƒrii.",
      en: "The Afsluitdijk (Enclosure Dam) is a monumental 32-kilometer-long dam connecting the provinces of North Holland and Friesland. Its construction in 1932 separated the Zuiderzee bay from the North Sea and transformed it into the freshwater lake IJsselmeer. It is a masterpiece of Dutch engineering for sea defense."
    },
        descriptionAdvanced: {
    de: "Der Afsluitdijk (Abschlussdeich) ist eines der monumentalsten Ingenieursbauwerke der Welt und ein Symbol fÃ¼r den niederlÃ¤ndischen Schutz vor der See. Der gewaltige, 32 Kilometer lange Deich wurde 1932 vollendet und verbindet die Provinzen Nordholland und Friesland, wodurch er die gefÃ¤hrliche, salzige Meeresbucht Zuiderzee von der Nordsee abtrennte. Dieses Jahrhundertbauwerk verwandelte die unberechenbare Zuiderzee in den friedlichen SÃ¼ÃŸwassersee IJsselmeer und schÃ¼tzte hunderte Kilometer KÃ¼stenlinie dauerhaft vor verheerenden Sturmfluten. Der Deich ist nicht nur ein Schutzwall, sondern beherbergt auch eine wichtige Autobahn und komplexe Schleusensysteme zur Regulierung des Wasserstandes. Geografie K7: Der Afsluitdijk trennte eine Meeresbucht ab. Welchen Vorteil bietet ein groÃŸer SÃ¼ÃŸwassersee im Vergleich zu einer Meeresbucht fÃ¼r die Landwirtschaft?",
    hu: "Az Afsluitdijk (ZÃ¡rÃ³gÃ¡t) Hollandia egyik leglenyÅ±gÃ¶zÅ‘bb mÃ©rnÃ¶ki teljesÃ­tmÃ©nye, egy 32 kilomÃ©ter hosszÃº gÃ¡t, amely Ã‰szak-Holland Ã©s FrÃ­zfÃ¶ld tartomÃ¡nyokat kÃ¶ti Ã¶ssze. 1932-ben fejeztÃ©k be azzal a cÃ©llal, hogy lezÃ¡rja a sekÃ©ly Zuiderzee-t (DÃ©li-tenger), megvÃ©dve ezzel a partvidÃ©ket a pusztÃ­tÃ³ Ã¡radÃ¡soktÃ³l Ã©s vihardagÃ¡lyoktÃ³l. A gÃ¡t megÃ©pÃ­tÃ©sÃ©vel a sÃ³s vizÅ± Zuiderzee egy Ã©desvizÅ± tÃ³vÃ¡, az IJsselmeer-rÃ© alakult Ã¡t. A gÃ¡ton autÃ³pÃ¡lya fut vÃ©gig, a kÃ¶zepÃ©n lÃ©vÅ‘ kilÃ¡tÃ³pontnÃ¡l pedig egy emlÃ©kmÅ± tiszteleg a tervezÅ‘, Cornelis Lely elÅ‘tt. FÃ¶ldrajz K8: Milyen Ã¶kolÃ³giai Ã©s gazdasÃ¡gi hatÃ¡sai voltak a Zuiderzee lezÃ¡rÃ¡sÃ¡nak a part menti falvakra?",
    ro: "",
    en: "The Afsluitdijk (Enclosure Dike) is one of the world's most monumental engineering structures and a symbol of Dutch protection from the sea. Completed in 1932, the massive 32-kilometer-long dike connects the provinces of North Holland and Friesland, separating the dangerous, salty Zuiderzee bay from the North Sea. This construction of the century transformed the unpredictable Zuiderzee into the peaceful freshwater lake IJsselmeer and permanently protected hundreds of kilometers of coastline from devastating storm surges. The dike is not only a protective wall but also houses an important highway and complex lock systems to regulate the water level. Geography K7: The Afsluitdijk separated a bay. What advantage does a large freshwater lake offer over a saltwater bay for agriculture?"
  },
    facts: {
      de: ["32 Kilometer lang und verbindet Nordholland mit Friesland.", "Verwandelte die salzige Zuiderzee in das sÃ¼ÃŸe IJsselmeer.", "Ein zentrales Bauwerk der Zuiderzeewerke.", "SchÃ¼tzt weite Teile des Landes vor Ãœberschwemmungen.", "FÃ¼hrt eine Autobahn und einen Radweg Ã¼ber den Damm.", "Wurde von dem Ingenieur Cornelis Lely entworfen."],
      hu: ["32 kilomÃ©ter hosszÃº, Ã©s Ã‰szak-HollandiÃ¡t kÃ¶ti Ã¶ssze FrÃ­zfÃ¶lddel.", "A sÃ³s Zuiderzeet Ã©des IJsselmeerrÃ© vÃ¡ltoztatta.", "A Zuiderzee-munkÃ¡latok kÃ¶zponti Ã©pÃ­tmÃ©nye.", "Az orszÃ¡g nagy rÃ©szÃ©t vÃ©di az Ã¡rvizektÅ‘l.", "Egy autÃ³pÃ¡lya Ã©s egy kerÃ©kpÃ¡rÃºt vezet Ã¡t a gÃ¡ton.", "Cornelis Lely mÃ©rnÃ¶k tervezte."],
      ro: ["Are o lungime de 32 de kilometri È™i leagÄƒ Olanda de Nord de Frizia.", "A transformat Zuiderzee sÄƒrat Ã®n IJsselmeer dulce.", "O structurÄƒ centralÄƒ a LucrÄƒrilor Zuiderzee.", "ProtejeazÄƒ mari pÄƒrÈ›i ale È›Äƒrii de inundaÈ›ii.", "PoartÄƒ o autostradÄƒ È™i o pistÄƒ de biciclete peste baraj.", "A fost proiectat de inginerul Cornelis Lely."],
      en: ["32 kilometers long, connecting North Holland with Friesland.", "Transformed the salty Zuiderzee into the fresh IJsselmeer.", "A central structure of the Zuiderzee Works.", "Protects large parts of the country from flooding.", "Carries a highway and a bicycle path across the dam.", "Was designed by the engineer Cornelis Lely."]
    },
      factsAdvanced: {
    de: [
      "Der Bau des 32 Kilometer langen Afsluitdijk dauerte von 1927 bis 1932 und wurde grÃ¶ÃŸtenteils in Handarbeit und mit einfachen Maschinen durchgefÃ¼hrt.",
      "Durch den Deich verkÃ¼rzte sich die zu schÃ¼tzende niederlÃ¤ndische KÃ¼stenlinie um rund 300 Kilometer.",
      "Der Deich verwandelte das Salzwasser der Zuiderzee allmÃ¤hlich in das SÃ¼ÃŸwasser des heutigen IJsselmeers.",
      "Am Deich befindet sich ein Monument fÃ¼r Cornelis Lely, den Ingenieur und Politiker, der das Projekt entwarf und durchsetzte."
    ],
    hu: ["A gÃ¡t Ã©pÃ­tÃ©se sorÃ¡n hatalmas mennyisÃ©gÅ± agyagot Ã©s bazalttÃ¶mbÃ¶ket hasznÃ¡ltak fel, melyeket hajÃ³kkal szÃ¡llÃ­tottak.", "Az Afsluitdijk 90 mÃ©ter szÃ©les Ã©s 7,2 mÃ©terrel magasodik a tengerszint fÃ¶lÃ©.", "Ã‰jszaka a gÃ¡t zsilipkapuit Daan Roosegaarde kÃ¼lÃ¶nleges fÃ©nymÅ±vÃ©szeti installÃ¡ciÃ³ja, a 'Gates of Light' vilÃ¡gÃ­tja meg.", "A gÃ¡ton nagyszabÃ¡sÃº Ã¡rapÃ¡ly-erÅ‘mÅ± kÃ­sÃ©rletek is zajlanak (Blue Energy) az Ã©des- Ã©s sÃ³s vÃ­z keveredÃ©sÃ©bÅ‘l adÃ³dÃ³ energia hasznosÃ­tÃ¡sÃ¡ra."],
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
    name: { de: "Friedenspalast", hu: "BÃ©kepalota", ro: "Palatul PÄƒcii", en: "Peace Palace" },
    image: "/geo-images/netherlands/peace-palace.webp",
    description: {
      de: "Der Friedenspalast (Vredespaleis) in Den Haag ist ein imposantes GebÃ¤ude und das globale Symbol fÃ¼r internationalen Frieden und Gerechtigkeit. Er beherbergt den Internationalen Gerichtshof der Vereinten Nationen und den StÃ¤ndigen Schiedshof. Er wurde durch eine groÃŸzÃ¼gige Spende des amerikanischen Stahlmagnaten Andrew Carnegie erbaut.",
      hu: "A hÃ¡gai BÃ©kepalota (Vredespaleis) egy impozÃ¡ns Ã©pÃ¼let, amely a nemzetkÃ¶zi bÃ©ke Ã©s igazsÃ¡gossÃ¡g globÃ¡lis szimbÃ³luma. Itt szÃ©kel az ENSZ NemzetkÃ¶zi BÃ­rÃ³sÃ¡ga Ã©s az ÃllandÃ³ VÃ¡lasztottbÃ­rÃ³sÃ¡g. Andrew Carnegie amerikai acÃ©lmÃ¡gnÃ¡s nagylelkÅ± adomÃ¡nyÃ¡bÃ³l Ã©pÃ¼lt.",
      ro: "Palatul PÄƒcii (Vredespaleis) din Haga este o clÄƒdire impunÄƒtoare È™i simbolul global al pÄƒcii È™i justiÈ›iei internaÈ›ionale. GÄƒzduieÈ™te Curtea InternaÈ›ionalÄƒ de JustiÈ›ie a NaÈ›iunilor Unite È™i Curtea PermanentÄƒ de Arbitraj. A fost construit printr-o donaÈ›ie generoasÄƒ de la magnatul american al oÈ›elului Andrew Carnegie.",
      en: "The Peace Palace (Vredespaleis) in The Hague is an imposing building and the global symbol of international peace and justice. It houses the International Court of Justice of the United Nations and the Permanent Court of Arbitration. It was built through a generous donation from American steel magnate Andrew Carnegie."
    },
        descriptionAdvanced: {
    de: "Der Friedenspalast (Vredespaleis) in Den Haag ist ein prÃ¤chtiges, schlossartiges GebÃ¤ude und weltweit ein mÃ¤chtiges Symbol fÃ¼r internationales Recht und globale Gerechtigkeit. Er wurde 1913 nach einem Architekturwettbewerb erbaut, groÃŸzÃ¼gig finanziert durch eine Spende des amerikanischen Stahlmagnaten und Philanthropen Andrew Carnegie. Heute beherbergt das GebÃ¤ude den Internationalen Gerichtshof (das hÃ¶chste Rechtsorgan der Vereinten Nationen), den StÃ¤ndigen Schiedshof und eine der grÃ¶ÃŸten Bibliotheken fÃ¼r VÃ¶lkerrecht weltweit. Die Ausstattung des Palastes besteht aus wertvollen Materialien und Kunstwerken, die von LÃ¤ndern aus der ganzen Welt als Friedensgeste gespendet wurden. Politik K8: Der Internationale Gerichtshof im Friedenspalast verhandelt keine KriminalfÃ¤lle von Einzelpersonen. Wer sind die einzigen Parteien, die vor diesem Gericht verklagt werden kÃ¶nnen?",
    hu: "A hÃ¡gai BÃ©ke Palota (Vredespaleis) a nemzetkÃ¶zi jog Ã©s a globÃ¡lis konfliktusmegoldÃ¡s szimbolikus kÃ¶zpontja. A lenyÅ±gÃ¶zÅ‘ neoreneszÃ¡nsz Ã©pÃ¼letet 1913-ban adtÃ¡k Ã¡t az amerikai filantrÃ³p, Andrew Carnegie adomÃ¡nyÃ¡nak kÃ¶szÃ¶nhetÅ‘en. Jelenleg az ENSZ NemzetkÃ¶zi BÃ­rÃ³sÃ¡ga (ICJ) Ã©s az ÃllandÃ³ VÃ¡lasztottbÃ­rÃ³sÃ¡g (PCA) szÃ©khelye, valamint a hÃ¡gai NemzetkÃ¶zi Jogi AkadÃ©mia Ã©s egy hatalmas jogi kÃ¶nyvtÃ¡r is itt mÅ±kÃ¶dik. A palota belsÅ‘ tereit a vilÃ¡g kÃ¼lÃ¶nbÃ¶zÅ‘ nemzetei Ã¡ltal adomÃ¡nyozott mÅ±alkotÃ¡sok Ã©s Ã©pÃ­tÅ‘anyagok dÃ­szÃ­tik. TÃ¡rsadalomismeret K8: Mi volt a motivÃ¡ciÃ³ a BÃ©ke Palota felÃ©pÃ­tÃ©sÃ©re kÃ¶zvetlenÃ¼l az elsÅ‘ vilÃ¡ghÃ¡borÃº elÅ‘tt?",
    ro: "Palatul PÄƒcii din Haga (Vredespaleis) este centrul simbolic al dreptului internaÈ›ional È™i al soluÈ›ionÄƒrii conflictelor globale. Uimitoarea clÄƒdire neo-renascentistÄƒ a fost finalizatÄƒ Ã®n 1913, graÈ›ie unei donaÈ›ii din partea filantropului american Andrew Carnegie. ÃŽn prezent, gÄƒzduieÈ™te Curtea InternaÈ›ionalÄƒ de JustiÈ›ie a ONU (CIJ) È™i Curtea PermanentÄƒ de Arbitraj (CPA), precum È™i Academia de Drept InternaÈ›ional de la Haga È™i o vastÄƒ bibliotecÄƒ juridicÄƒ. Interioarele palatului sunt decorate cu opere de artÄƒ È™i materiale de construcÈ›ie donate de diferite naÈ›iuni din Ã®ntreaga lume. Studii sociale K8: Care a fost motivaÈ›ia din spatele construirii Palatului PÄƒcii chiar Ã®nainte de Primul RÄƒzboi Mondial?",
    en: "The Peace Palace (Vredespaleis) in The Hague is a magnificent, castle-like building and a powerful global symbol of international law and justice. Built in 1913 following an architectural competition, it was generously funded by a donation from American steel magnate and philanthropist Andrew Carnegie. Today, the building houses the International Court of Justice (the highest judicial body of the United Nations), the Permanent Court of Arbitration, and one of the largest international law libraries in the world. The palace's interior is made of precious materials and artworks donated by countries from all over the world as a gesture of peace. Politics K8: The International Court of Justice in the Peace Palace does not try criminal cases of individuals. Who are the only parties that can be sued before this court?"
  },
    facts: {
      de: ["Sitz des Internationalen Gerichtshofs der UN.", "Beherbergt auch den StÃ¤ndigen Schiedshof und eine groÃŸe Bibliothek.", "ErÃ¶ffnet im Jahr 1913 kurz vor dem Ersten Weltkrieg.", "Finanziert durch den Philanthropen Andrew Carnegie.", "LÃ¤nder weltweit spendeten Materialien fÃ¼r den Bau.", "Symbolisiert Den Haags Status als Stadt des Friedens."],
      hu: ["Az ENSZ NemzetkÃ¶zi BÃ­rÃ³sÃ¡gÃ¡nak szÃ©khelye.", "Itt talÃ¡lhatÃ³ az ÃllandÃ³ VÃ¡lasztottbÃ­rÃ³sÃ¡g Ã©s egy nagy kÃ¶nyvtÃ¡r is.", "1913-ban, nem sokkal az elsÅ‘ vilÃ¡ghÃ¡borÃº elÅ‘tt nyÃ­lt meg.", "Andrew Carnegie filantrÃ³p finanszÃ­rozta.", "A vilÃ¡g szÃ¡mos orszÃ¡ga adomÃ¡nyozott anyagokat az Ã©pÃ­tkezÃ©shez.", "HÃ¡ga mint a bÃ©ke vÃ¡rosa stÃ¡tuszÃ¡nak szimbÃ³luma."],
      ro: ["Sediul CurÈ›ii InternaÈ›ionale de JustiÈ›ie a ONU.", "GÄƒzduieÈ™te, de asemenea, Curtea PermanentÄƒ de Arbitraj È™i o mare bibliotecÄƒ.", "Deschis Ã®n 1913 chiar Ã®nainte de Primul RÄƒzboi Mondial.", "FinanÈ›at de filantropul Andrew Carnegie.", "ÈšÄƒri din Ã®ntreaga lume au donat materiale pentru construcÈ›ie.", "SimbolizeazÄƒ statutul HagÄƒi de oraÈ™ al pÄƒcii."],
      en: ["Seat of the UN International Court of Justice.", "Also houses the Permanent Court of Arbitration and a large library.", "Opened in 1913 shortly before World War I.", "Funded by philanthropist Andrew Carnegie.", "Countries around the world donated materials for construction.", "Symbolizes The Hague's status as a city of peace."]
    },
      factsAdvanced: {
    de: [
      "Der Bau des Vredespaleis wurde durch eine Spende von 1,5 Millionen Dollar durch den Industriellen Andrew Carnegie ermÃ¶glicht.",
      "Der Friedenspalast ist Sitz des Internationalen Gerichtshofs, des einzigen Hauptorgans der UN, das sich nicht in New York befindet.",
      "Die Baumaterialien und das Interieur stammen aus der ganzen Welt; so stiftete Italien Marmor und die Schweiz die Turmuhr.",
      "Eine 'Ewige Friedensflamme' brennt vor den Toren des Palastes, umgeben vom Weltfriedenspfad, der Steine aus 196 LÃ¤ndern enthÃ¤lt."
    ],
    hu: ["Az Ã©pÃ¼lethez szÃ¼ksÃ©ges Ã©pÃ­tÅ‘anyagokat (pl. mÃ¡rvÃ¡nyt, fÃ¡t, selymet) tÃ¶bb tucat kÃ¼lÃ¶nbÃ¶zÅ‘ orszÃ¡g adomÃ¡nyozta a vilÃ¡gbÃ©ke jegyÃ©ben.", "Az 'Ã–rÃ¶k BÃ©ke LÃ¡ngja' emlÃ©kmÅ± a palota kapuja elÅ‘tt folyamatosan Ã©g.", "BÃ¡r az ENSZ egyik legfÅ‘bb szerve, a NemzetkÃ¶zi BÃ­rÃ³sÃ¡g, a palota maga egy holland alapÃ­tvÃ¡ny tulajdonÃ¡ban van.", "A palotÃ¡t a francia Ã©pÃ­tÃ©sz, Louis Cordonnier tervezte egy nemzetkÃ¶zi pÃ¡lyÃ¡zat gyÅ‘ztesekÃ©nt."],
    ro: [
      "Materialele de construcÈ›ie pentru clÄƒdire (de ex., marmurÄƒ, lemn, mÄƒtase) au fost donate de zeci de È›Äƒri diferite Ã®n numele pÄƒcii mondiale.",
      "Monumentul 'FlacÄƒra PÄƒcii Eterne' arde continuu Ã®n faÈ›a porÈ›ilor palatului.",
      "DeÈ™i gÄƒzduieÈ™te unul dintre principalele organe ale ONU, Curtea InternaÈ›ionalÄƒ de JustiÈ›ie, palatul Ã®n sine este deÈ›inut de o fundaÈ›ie olandezÄƒ.",
      "Palatul a fost proiectat de arhitectul francez Louis Cordonnier, Ã®n urma unui concurs internaÈ›ional."
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
      de: "Das niederlÃ¤ndische Wattenmeer ist ein auÃŸergewÃ¶hnliches Naturgebiet und Teil des UNESCO-Weltnaturerbes, das sich bis nach Deutschland und DÃ¤nemark erstreckt. Es ist das weltweit grÃ¶ÃŸte zusammenhÃ¤ngende Gezeitensystem aus Sand- und Schlickwatten. Das Gebiet ist von entscheidender Bedeutung fÃ¼r Millionen von ZugvÃ¶geln.",
      hu: "A holland Watt-tenger kivÃ©teles termÃ©szeti terÃ¼let, az UNESCO VilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze, amely NÃ©metorszÃ¡gig Ã©s DÃ¡niÃ¡ig hÃºzÃ³dik. Ez a vilÃ¡g legnagyobb egybefÃ¼ggÅ‘, iszapos Ã©s homokos Ã¡rapÃ¡ly-rendszere. A terÃ¼let lÃ©tfontossÃ¡gÃº vÃ¡ndormadarak milliÃ³i szÃ¡mÃ¡ra.",
      ro: "Marea Wadden olandezÄƒ este o zonÄƒ naturalÄƒ excepÈ›ionalÄƒ È™i parte a Patrimoniului Mondial UNESCO care se extinde pÃ¢nÄƒ Ã®n Germania È™i Danemarca. Este cel mai mare sistem continuu de maree de bancuri de nisip È™i noroi din lume. Zona este vitalÄƒ pentru milioane de pÄƒsÄƒri migratoare.",
      en: "The Dutch Wadden Sea is an exceptional natural area and part of the UNESCO World Heritage Site that stretches all the way to Germany and Denmark. It is the world's largest unbroken system of intertidal sand and mud flats. The area is of crucial importance to millions of migratory birds."
    },
        descriptionAdvanced: {
    de: "Das Wattenmeer (Waddenzee) im Norden der Niederlande ist eines der dynamischsten und bedeutendsten Feuchtgebiete der Welt, ein riesiges System aus GezeitenflÃ¤chen, SandbÃ¤nken und Salzwiesen. Es erstreckt sich entlang der niederlÃ¤ndischen KÃ¼ste bis nach Deutschland und DÃ¤nemark und verÃ¤ndert mit Ebbe und Flut zweimal tÃ¤glich komplett sein Gesicht. Dieser einzigartige Lebensraum ist von unschÃ¤tzbarem Wert fÃ¼r die Artenvielfalt und dient jÃ¤hrlich etwa 10 bis 12 Millionen ZugvÃ¶geln als unverzichtbarer Rast- und Futterplatz auf ihrer Reise. Die Region ist auch berÃ¼hmt fÃ¼r das 'Wattwandern' (Wadlopen), bei dem man bei Ebbe zu FuÃŸ Ã¼ber den freigelegten Meeresboden zu den Nordseeinseln wandern kann. Biologie K6: Das Wattenmeer fÃ¤llt bei Ebbe trocken und wird bei Flut Ã¼berschwemmt. Warum finden VÃ¶gel genau in dieser Schlammschicht bei Ebbe so viel Nahrung?",
    hu: "A Wadden-tenger (Waddenzee) a vilÃ¡g legnagyobb egybefÃ¼ggÅ‘ Ã¡rapÃ¡lysÃ­ksÃ¡ga, amely Hollandia partjaitÃ³l egÃ©szen NÃ©metorszÃ¡gig Ã©s DÃ¡niÃ¡ig hÃºzÃ³dik. A tenger lenyÅ±gÃ¶zÅ‘ dinamikÃ¡ja miatt apÃ¡lykor a vÃ­z szinte teljesen visszahÃºzÃ³dik, hatalmas iszap- Ã©s homokpadokat hagyva hÃ¡tra, amelyek milliÃ³ kÃ¶ltÃ¶zÅ‘ madÃ¡r Ã©s fÃ³ka szÃ¡mÃ¡ra nyÃºjtanak tÃ¡plÃ¡lÃ©kot Ã©s pihenÅ‘helyet. Ezt a felbecsÃ¼lhetetlen Ã¶kolÃ³giai Ã©rtÃ©ket az UNESCO a VilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©szÃ©vÃ© nyilvÃ¡nÃ­totta. Az itt Ã©lÅ‘ hollandok kedvelt tevÃ©kenysÃ©ge a 'wadlopen', vagyis az apÃ¡lykor az iszapban tett gyalogtÃºra a szigetek felÃ©. KÃ¶rnyezetismeret K7: MiÃ©rt kritikus a Wadden-tenger Ã¶koszisztÃ©mÃ¡ja a kÃ¶ltÃ¶zÅ‘ madarak tÃºlÃ©lÃ©se szempontjÃ¡bÃ³l?",
    ro: "Marea Wadden (Waddenzee) este cel mai mare sistem continuu de bancuri de nisip È™i noroi intertidale din lume, Ã®ntinzÃ¢ndu-se de pe coasta olandezÄƒ pÃ¢nÄƒ Ã®n Germania È™i Danemarca. DatoritÄƒ dinamicii uimitoare a mÄƒrii, la reflux, apa se retrage aproape complet, lÄƒsÃ¢nd Ã®n urmÄƒ Ã®ntinderi vaste de noroi È™i bancuri de nisip care oferÄƒ hranÄƒ È™i un loc de odihnÄƒ pentru milioane de pÄƒsÄƒri migratoare È™i foci. AceastÄƒ valoare ecologicÄƒ inestimabilÄƒ a fost declaratÄƒ Patrimoniu Mondial de cÄƒtre UNESCO. O activitate preferatÄƒ de olandezii care trÄƒiesc aici este 'wadlopen', o drumeÈ›ie la reflux prin noroi cÄƒtre insule. È˜tiinÈ›ele naturii K7: De ce este ecosistemul MÄƒrii Wadden esenÈ›ial pentru supravieÈ›uirea pÄƒsÄƒrilor migratoare?",
    en: "The Wadden Sea (Waddenzee) in the north of the Netherlands is one of the most dynamic and important wetlands in the world, a vast system of intertidal mudflats, sandbanks, and salt marshes. It stretches along the Dutch coast to Germany and Denmark, completely changing its face twice a day with the ebb and flow of the tide. This unique habitat is of inestimable value for biodiversity and serves as an indispensable resting and feeding ground for about 10 to 12 million migratory birds every year. The region is also famous for 'mudflat hiking' (wadlopen), where you can walk across the exposed seabed to the North Sea islands at low tide. Biology K6: The Wadden Sea falls dry at low tide and is flooded at high tide. Why do birds find so much food in this mud layer specifically at low tide?"
  },
    facts: {
      de: ["Seit 2009 UNESCO-Weltnaturerbe.", "GrÃ¶ÃŸtes Gezeitensystem der Welt.", "Ein wichtiger Lebensraum fÃ¼r Seehunde.", "Rastplatz fÃ¼r Millionen von ZugvÃ¶geln jÃ¤hrlich.", "Wattwandern (Wadlopen) ist eine beliebte AktivitÃ¤t.", "Erstreckt sich entlang der niederlÃ¤ndischen KÃ¼ste und den Nordseeinseln."],
      hu: ["2009 Ã³ta az UNESCO termÃ©szeti vilÃ¡gÃ¶rÃ¶ksÃ©g rÃ©sze.", "A vilÃ¡g legnagyobb Ã¡rapÃ¡ly-rendszere.", "A fÃ³kÃ¡k fontos Ã©lÅ‘helye.", "Ã‰vente vÃ¡ndormadarak milliÃ³inak pihenÅ‘helye.", "Az iszapjÃ¡rÃ¡s (Wadlopen) nÃ©pszerÅ± tevÃ©kenysÃ©g.", "A holland partok Ã©s az Ã©szaki-tengeri szigetek mentÃ©n hÃºzÃ³dik."],
      ro: ["Patrimoniul natural mondial UNESCO din 2009.", "Cel mai mare sistem de maree din lume.", "Un habitat important pentru foci.", "Loc de odihnÄƒ pentru milioane de pÄƒsÄƒri migratoare Ã®n fiecare an.", "Mersul pe noroi (Wadlopen) este o activitate popularÄƒ.", "Se Ã®ntinde de-a lungul coastei olandeze È™i a insulelor MÄƒrii Nordului."],
      en: ["UNESCO World Natural Heritage Site since 2009.", "Largest tidal system in the world.", "An important habitat for seals.", "Resting place for millions of migratory birds annually.", "Mudflat walking (Wadlopen) is a popular activity.", "Stretches along the Dutch coast and the North Sea islands."]
    },
      factsAdvanced: {
    de: [
      "Das Wattenmeer ist das grÃ¶ÃŸte zusammenhÃ¤ngende Gezeitensystem aus Sand- und Schlickflutten der Welt.",
      "Das gesamte niederlÃ¤ndische Wattenmeer steht unter strengem Naturschutz und gehÃ¶rt zum UNESCO-Weltnaturerbe.",
      "Rund 10.000 verschiedene Pflanzen- und Tierarten leben im Wattenmeer, von mikroskopisch kleinen Algen bis hin zu Seehunden.",
      "Beim traditionellen Wadlopen (Wattwandern) navigieren FÃ¼hrer Gruppen bei Ebbe durch den Schlick des Meeresbodens."
    ],
    hu: ["A Wadden-tenger naponta kÃ©tszer, Ã¡rapÃ¡ly idejÃ©n drasztikusan vÃ¡ltoztatja a kinÃ©zetÃ©t Ã©s a vÃ­zszintjÃ©t.", "A terÃ¼let tÃ¶bb mint 10 000 nÃ¶vÃ©ny- Ã©s Ã¡llatfajnak ad otthont, a mikroszkopikus algÃ¡ktÃ³l a tengeri emlÅ‘sÃ¶kig.", "A borjÃºfÃ³kÃ¡k (gewone zeehond) nagy szÃ¡mban pihennek a napon sÃ¼tkÃ©rezve a felszÃ­nre bukkanÃ³ homokpadokon.", "Az iszaptÃºrÃ¡kat (wadlopen) szigorÃºan csak tapasztalt helyi vezetÅ‘kkel szabad megtenni a gyorsan emelkedÅ‘ vÃ­zszint miatt."],
    ro: [
      "Marea Wadden Ã®È™i schimbÄƒ drastic aspectul È™i nivelul apei de douÄƒ ori pe zi din cauza mareelor.",
      "Zona gÄƒzduieÈ™te peste 10.000 de specii de plante È™i animale, de la alge microscopice la mamifere marine.",
      "Focile comune (gewone zeehond) se odihnesc Ã®n numÄƒr mare, la soare, pe bancurile de nisip care apar la suprafaÈ›Äƒ.",
      "DrumeÈ›iile prin noroi (wadlopen) ar trebui fÄƒcute strict doar cu ghizi locali cu experienÈ›Äƒ, din cauza nivelului apei care creÈ™te rapid."
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
      de: "Der Nationalpark De Biesbosch ist eines der grÃ¶ÃŸten SÃ¼ÃŸwasser-Gezeitengebiete Europas. Die Landschaft besteht aus einem Labyrinth von FlÃ¼ssen, Inseln und WeidenwÃ¤ldern. Es ist ein Paradies fÃ¼r Kanufahrer, Vogelbeobachter und Naturliebhaber, und bekannt fÃ¼r die dort ansÃ¤ssigen Biber.",
      hu: "A De Biesbosch Nemzeti Park EurÃ³pa egyik legnagyobb Ã©desvÃ­zi Ã¡rapÃ¡ly-terÃ¼lete. A tÃ¡j folyÃ³k, szigetek Ã©s fÅ±zerdÅ‘k labirintusÃ¡bÃ³l Ã¡ll. Paradicsom a kenuzÃ³k, madÃ¡rmegfigyelÅ‘k Ã©s termÃ©szetbarÃ¡tok szÃ¡mÃ¡ra, Ã©s az itt Ã©lÅ‘ hÃ³dokrÃ³l ismert.",
      ro: "Parcul NaÈ›ional De Biesbosch este una dintre cele mai mari zone de maree cu apÄƒ dulce din Europa. Peisajul este alcÄƒtuit dintr-un labirint de rÃ¢uri, insule È™i pÄƒduri de salcie. Este un paradis pentru canotori, observatori de pÄƒsÄƒri È™i iubitorii de naturÄƒ È™i este renumit pentru castorii rezidenÈ›i.",
      en: "De Biesbosch National Park is one of the largest freshwater tidal areas in Europe. The landscape consists of a labyrinth of rivers, islands, and willow forests. It is a paradise for canoeists, bird watchers, and nature lovers, and is known for its resident beavers."
    },
        descriptionAdvanced: {
    de: "Der Nationalpark De Biesbosch liegt in den Provinzen SÃ¼dholland und Nordbrabant und ist eines der letzten groÃŸen SÃ¼ÃŸwasser-Gezeitengebiete Europas. Die einzigartige Landschaft aus verwinkelten FlÃ¼ssen, Inseln, WeidenwÃ¤ldern und Schilffeldern entstand erst im Jahr 1421, als die verheerende St.-Elisabeth-Flut unzÃ¤hlige DÃ¶rfer zerstÃ¶rte und das Land in ein groÃŸes Binnenmeer verwandelte. Heute ist der Biesbosch ein wahres Labyrinth aus Wasserwegen, das man am besten gerÃ¤uschlos mit einem Kanu oder FlÃ¼sterboot erkundet. Der Park ist ein Paradies fÃ¼r WasservÃ¶gel und eine der wenigen Regionen in den Niederlanden, in denen der Biber, der hier erfolgreich wieder angesiedelt wurde, in groÃŸer Zahl vorkommt. Geografie K7: Der Biesbosch ist ein SÃ¼ÃŸwasser-Gezeitengebiet. Wie kÃ¶nnen Ebbe und Flut weit im Landesinneren an einem Fluss auftreten, obwohl das Wasser sÃ¼ÃŸ ist?",
    hu: "A De Biesbosch Nemzeti Park Hollandia egyik legnagyobb nemzeti parkja, egy hatalmas, Ã©desvÃ­zi Ã¡rapÃ¡ly-deltavidÃ©k DÃ©l-Holland Ã©s Ã‰szak-Brabant hatÃ¡rÃ¡n. Ez a vÃ­zilabirintusokkal, fÅ±zfaerdÅ‘kkel Ã©s nÃ¡dasokkal teli mocsÃ¡rvidÃ©k az 1421-es Szent ErzsÃ©bet-napi Ã¡rvÃ­z sorÃ¡n jÃ¶tt lÃ©tre, amikor a tenger Ã¡ttÃ¶rte a gÃ¡takat Ã©s tucatnyi falut elpusztÃ­tott. Ma a park a termÃ©szetjÃ¡rÃ³k, kenusok Ã©s madÃ¡rmegfigyelÅ‘k paradicsoma, Ã©s az egyik legsikeresebb helyszÃ­ne a hÃ³dok hollandiai visszatelepÃ­tÃ©sÃ©nek. FÃ¶ldrajz K6: Hogyan kÃ©pes egy ilyen mocsÃ¡rvidÃ©k csÃ¶kkenteni a folyami Ã¡radÃ¡sok veszÃ©lyÃ©t a kÃ¶rnyezÅ‘ vÃ¡rosok szÃ¡mÃ¡ra?",
    ro: "Parcul NaÈ›ional De Biesbosch este unul dintre cele mai mari parcuri naÈ›ionale din Olanda, o zonÄƒ umedÄƒ masivÄƒ, o deltÄƒ cu maree cu apÄƒ dulce la graniÈ›a dintre Olanda de Sud È™i Brabantul de Nord. AceastÄƒ mlaÈ™tinÄƒ plinÄƒ de labirinturi de apÄƒ, pÄƒduri de sÄƒlcii È™i stuf a fost formatÄƒ Ã®n timpul inundaÈ›iei de SfÃ¢nta Elisabeta din 1421, cÃ¢nd marea a rupt digurile È™i a distrus zeci de sate. AstÄƒzi, parcul este un paradis pentru drumeÈ›ii pe naturÄƒ, canotori È™i observatori de pÄƒsÄƒri È™i unul dintre cele mai de succes locuri pentru reintroducerea castorilor Ã®n Olanda. Geografie K6: Cum poate o astfel de zonÄƒ umedÄƒ sÄƒ reducÄƒ riscul inundaÈ›iilor fluviale pentru oraÈ™ele din jur?",
    en: "De Biesbosch National Park, located in the provinces of South Holland and North Brabant, is one of the last major freshwater tidal areas in Europe. The unique landscape of winding rivers, islands, willow forests, and reed beds was created only in 1421, when the devastating St. Elizabeth's flood destroyed countless villages and turned the land into a large inland sea. Today, the Biesbosch is a true labyrinth of waterways, best explored silently by canoe or whisper boat. The park is a paradise for water birds and one of the few regions in the Netherlands where the beaver, successfully reintroduced here, is found in large numbers. Geography K7: The Biesbosch is a freshwater tidal area. How can tides occur far inland on a river even though the water is fresh?"
  },
    facts: {
      de: ["Ein seltenes SÃ¼ÃŸwasser-Gezeitensystem.", "Entstand durch die St.-Elisabeth-Flut im Jahr 1421.", "Bekannt fÃ¼r seine Population an EuropÃ¤ischen Bibern.", "Sehr beliebt fÃ¼r Kanu- und FlÃ¼sterboot-Touren.", "Wichtiger Brutplatz fÃ¼r viele WasservÃ¶gel.", "Liegt an der Grenze von SÃ¼dholland und Nordbrabant."],
      hu: ["Ritka Ã©desvÃ­zi Ã¡rapÃ¡ly-rendszer.", "Az 1421-es Szent ErzsÃ©bet-Ã¡rvÃ­z rÃ©vÃ©n alakult ki.", "HÃ­res eurÃ³pai hÃ³dpopulÃ¡ciÃ³jÃ¡rÃ³l.", "Nagyon nÃ©pszerÅ± a kenu- Ã©s suttogÃ³csÃ³nak-tÃºrÃ¡khoz.", "Sok vÃ­zimadÃ¡r fontos fÃ©szkelÅ‘helye.", "DÃ©l-Holland Ã©s Ã‰szak-Brabant hatÃ¡rÃ¡n fekszik."],
      ro: ["Un sistem rar de maree cu apÄƒ dulce.", "Creat de inundaÈ›ia Sf. Elisabeta din 1421.", "Renumit pentru populaÈ›ia sa de castori europeni.", "Foarte popular pentru excursiile cu canoe È™i bÄƒrci cu È™oapte.", "Loc important de reproducere pentru multe pÄƒsÄƒri de apÄƒ.", "Situat la graniÈ›a dintre Olanda de Sud È™i Brabantul de Nord."],
      en: ["A rare freshwater tidal system.", "Created by the St. Elizabeth's flood in 1421.", "Famous for its population of European beavers.", "Very popular for canoe and whisper boat tours.", "Important breeding ground for many water birds.", "Located on the border of South Holland and North Brabant."]
    },
      factsAdvanced: {
    de: [
      "Die Landschaft des Biesbosch entstand in einer einzigen Sturmnacht, der St.-Elisabeth-Flut im Jahr 1421.",
      "Der Biesbosch ist eines der wenigen Gebiete der Erde, wo Ebbe und Flut in einer reinen SÃ¼ÃŸwasserumgebung auftreten.",
      "Im Zweiten Weltkrieg diente das unÃ¼bersichtliche Schilflabyrinth niederlÃ¤ndischen WiderstandskÃ¤mpfern als sicheres Versteck.",
      "Der Biber wurde 1988 im Biesbosch wieder angesiedelt und gilt heute als das Symboltier des Nationalparks."
    ],
    hu: ["A De Biesbosch a ritka Ã©desvÃ­zi Ã¡rapÃ¡lyos terÃ¼letek egyike EurÃ³pÃ¡ban.", "A park szÃ¡mos szigete csak vÃ­zen keresztÃ¼l (kenuval vagy elektromos csÃ³nakkal) kÃ¶zelÃ­thetÅ‘ meg.", "A terÃ¼letet a mÃ¡sodik vilÃ¡ghÃ¡borÃº alatt holland ellenÃ¡llÃ³k hasznÃ¡ltÃ¡k rejtekhelykÃ©nt Ã©s csempÃ©szÃºtvonalkÃ©nt.", "A hÃ³dokat 1988-ban telepÃ­tettÃ©k vissza a Biesbosch-ba, Ã©s mÃ¡ra virÃ¡gzÃ³ populÃ¡ciÃ³juk van."],
    ro: [
      "De Biesbosch este una dintre puÈ›inele zone rare de maree cu apÄƒ dulce din Europa.",
      "Multe dintre insulele parcului pot fi accesate doar pe apÄƒ (cu canoea sau barca electricÄƒ).",
      "Zona a fost folositÄƒ de membrii rezistenÈ›ei olandeze Ã®n timpul celui de-al Doilea RÄƒzboi Mondial ca ascunzÄƒtoare È™i rutÄƒ de contrabandÄƒ.",
      "Castorii au fost reintroduÈ™i Ã®n Biesbosch Ã®n 1988 È™i acum au o populaÈ›ie Ã®nfloritoare."
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
    name: { de: "Nationalpark Zuid-Kennemerland", hu: "Zuid-Kennemerland Nemzeti Park", ro: "Parcul NaÈ›ional Zuid-Kennemerland", en: "Zuid-Kennemerland National Park" },
    image: "/geo-images/netherlands/dunes-kennemerland.webp",
    description: {
      de: "Der Nationalpark Zuid-Kennemerland ist eine wunderschÃ¶ne DÃ¼nenlandschaft an der NordseekÃ¼ste in der NÃ¤he von Haarlem. Der Park zeichnet sich durch weite SanddÃ¼nen, versteckte DÃ¼nenseen und alte Waldgebiete aus. Er bietet zahlreichen Tierarten wie Hochlandrindern, Konik-Pferden und sogar Wisenten einen Lebensraum.",
      hu: "A Zuid-Kennemerland Nemzeti Park gyÃ¶nyÃ¶rÅ± dÅ±nÃ©s tÃ¡j az Ã©szaki-tengeri partvidÃ©ken, Haarlem kÃ¶zelÃ©ben. A parkot kiterjedt homokdÅ±nÃ©k, rejtett dÅ±netavak Ã©s rÃ©gi erdÅ‘sÃ©gek jellemzik. SzÃ¡mos Ã¡llatfajnak ad otthont, pÃ©ldÃ¡ul skÃ³t felfÃ¶ldi marhÃ¡knak, koniklovaknak Ã©s mÃ©g eurÃ³pai bÃ¶lÃ©nyeknek is.",
      ro: "Parcul NaÈ›ional Zuid-Kennemerland este un peisaj frumos de dune pe coasta MÄƒrii Nordului, lÃ¢ngÄƒ Haarlem. Parcul este caracterizat de dune de nisip Ã®ntinse, lacuri de dune ascunse È™i zone forestiere vechi. OferÄƒ un habitat pentru numeroase specii de animale, cum ar fi vite Highland, cai Konik È™i chiar zimbri.",
      en: "Zuid-Kennemerland National Park is a beautiful dune landscape on the North Sea coast near Haarlem. The park is characterized by vast sand dunes, hidden dune lakes, and ancient woodlands. It provides a habitat for numerous animal species such as Highland cattle, Konik horses, and even European bison."
    },
        descriptionAdvanced: {
    de: "Der Nationalpark Zuid-Kennemerland erstreckt sich entlang der NordseekÃ¼ste zwischen Haarlem und Zandvoort und ist ein ausgedehntes Naturschutzgebiet von rauer SchÃ¶nheit. Die Landschaft wird dominiert von weiten, windgepeitschten DÃ¼nenketten, verborgenen DÃ¼nenseen und alten KiefernwÃ¤ldern, die einst von wohlhabenden Amsterdamer Kaufleuten als Sommerresidenzen gepflanzt wurden. Der Park spielt eine wichtige Rolle im KÃ¼stenschutz und der Trinkwassergewinnung fÃ¼r die Region. Zur Erhaltung der halboffenen DÃ¼nenlandschaft werden groÃŸe Pflanzenfresser eingesetzt, darunter schottische Hochlandrinder und die beeindruckenden Wisente (europÃ¤ische Bisons), die hier frei umherstreifen. Biologie K6: In Zuid-Kennemerland weiden Wisente und Hochlandrinder. Warum setzen NaturschÃ¼tzer groÃŸe Pflanzenfresser ein, um die DÃ¼nenlandschaft offen zu halten?",
    hu: "A Zuid-Kennemerland Nemzeti Park Ã‰szak-Holland partvidÃ©kÃ©n terÃ¼l el, Haarlem Ã©s Zandvoort kÃ¶zelÃ©ben. A parkot kiterjedt, tengeri szelek Ã¡ltal formÃ¡lt homokdÅ±nÃ©k, dÅ±nevÃ¶lgyek, ritka fenyÅ‘erdÅ‘k Ã©s Ã©rintetlen tengerparti sÃ¡vok alkotjÃ¡k. A terÃ¼let Ã¶koszisztÃ©mÃ¡jÃ¡nak egyensÃºlyÃ¡t olyan legelÃ©szÅ‘ nagyvadakkal tartjÃ¡k fenn, mint a skÃ³t felfÃ¶ldi marhÃ¡k, a konik lovak Ã©s a visszatelepÃ­tett, Å‘si eurÃ³pai bÃ¶lÃ©ny, a wisent. A park a vÃ¡rosi lakossÃ¡g kedvelt rekreÃ¡ciÃ³s terÃ¼lete tÃºrÃ¡zÃ¡sra Ã©s kerÃ©kpÃ¡rozÃ¡sra. KÃ¶rnyezetismeret K6: Milyen szerepet jÃ¡tszanak a nÃ¶vÃ©nyek (pl. a dÅ±nefÅ±) a homokdÅ±nÃ©k stabilizÃ¡lÃ¡sÃ¡ban a tengerparton?",
    ro: "Parcul NaÈ›ional Zuid-Kennemerland este situat pe coasta Olandei de Nord, lÃ¢ngÄƒ Haarlem È™i Zandvoort. Parcul este format din Ã®ntinderi vaste de dune de nisip sculptate de vÃ¢nturile marine, vÄƒi ale dunelor, pÄƒduri rare de pini È™i zone de coastÄƒ imaculate. Echilibrul ecosistemului zonei este menÈ›inut de vÃ¢natul mare care pÄƒÈ™uneazÄƒ, precum vitele Scottish Highland, caii Konik È™i reintrodusul bizon european antic, zimbrul. Parcul este o zonÄƒ de recreere popularÄƒ pentru populaÈ›ia urbanÄƒ, idealÄƒ pentru drumeÈ›ii È™i ciclism. È˜tiinÈ›ele naturii K6: Ce rol joacÄƒ plantele (ex. iarba de dune) Ã®n stabilizarea dunelor de nisip de pe coastÄƒ?",
    en: "Zuid-Kennemerland National Park stretches along the North Sea coast between Haarlem and Zandvoort and is an extensive nature reserve of rugged beauty. The landscape is dominated by sweeping, windswept dune chains, hidden dune lakes, and old pine forests that were once planted as summer residences by wealthy Amsterdam merchants. The park plays an important role in coastal protection and drinking water extraction for the region. To maintain the semi-open dune landscape, large herbivores are used, including Scottish Highland cattle and impressive European bison (wisents) that roam freely here. Biology K6: Wisents and Highland cattle graze in Zuid-Kennemerland. Why do conservationists use large herbivores to keep the dune landscape open?"
  },
    facts: {
      de: ["Beherbergt eine freilebende Herde von Wisenten (EuropÃ¤ischen Bisons).", "SchÃ¼tzt ein ausgedehntes und dynamisches DÃ¼nengebiet.", "Ein beliebtes Erholungsgebiet nahe Amsterdam und Haarlem.", "Wichtig fÃ¼r die Gewinnung von sauberem Trinkwasser.", "Bietet Hunderte Kilometer an Rad- und Wanderwegen.", "Die Vegetation reicht von Strandhafer bis zu dichten KiefernwÃ¤ldern."],
      hu: ["Szabadon Ã©lÅ‘ eurÃ³pai bÃ¶lÃ©nycsordÃ¡nak ad otthont.", "Kiterjedt Ã©s dinamikus dÅ±nevidÃ©ket vÃ©d.", "NÃ©pszerÅ± rekreÃ¡ciÃ³s terÃ¼let Amszterdam Ã©s Haarlem kÃ¶zelÃ©ben.", "Fontos a tiszta ivÃ³vÃ­z kinyerÃ©se szempontjÃ¡bÃ³l.", "TÃ¶bb szÃ¡z kilomÃ©ternyi kerÃ©kpÃ¡r- Ã©s tÃºraÃºtvonalat kÃ­nÃ¡l.", "A nÃ¶vÃ©nyzet a homoki zabtÃ³l a sÅ±rÅ± fenyÅ‘erdÅ‘kig terjed."],
      ro: ["GÄƒzduieÈ™te o turmÄƒ de zimbri (bizon european) care trÄƒiesc liberi.", "ProtejeazÄƒ o zonÄƒ de dune extinsÄƒ È™i dinamicÄƒ.", "O zonÄƒ de recreere popularÄƒ lÃ¢ngÄƒ Amsterdam È™i Haarlem.", "Important pentru obÈ›inerea apei potabile curate.", "OferÄƒ sute de kilometri de trasee de ciclism È™i drumeÈ›ii.", "VegetaÈ›ia variazÄƒ de la iarba de plajÄƒ la pÄƒduri dese de pini."],
      en: ["Houses a free-roaming herd of wisent (European bison).", "Protects an extensive and dynamic dune area.", "A popular recreation area near Amsterdam and Haarlem.", "Important for the extraction of clean drinking water.", "Offers hundreds of kilometers of cycling and hiking trails.", "Vegetation ranges from beach grass to dense pine forests."]
    },
      factsAdvanced: {
    de: [
      "Der Nationalpark schÃ¼tzt einen der breitesten DÃ¼nengÃ¼rtel der niederlÃ¤ndischen NordseekÃ¼ste.",
      "Seit 2007 grasen frei lebende Wisente (EuropÃ¤ische Bisons) in einem abgetrennten Teil des Parks, um das Zuwachsen der DÃ¼nen zu verhindern.",
      "Unter den SanddÃ¼nen von Kennemerland wird ein GroÃŸteil des Trinkwassers fÃ¼r die Region um Amsterdam gefiltert und gespeichert.",
      "Im Park befinden sich auch historische LandgÃ¼ter aus dem 17. Jahrhundert, die sogenannten 'Buitenplaatsen'."
    ],
    hu: ["A park terÃ¼letÃ©n egyedÃ¼lÃ¡llÃ³, zÃ¡rt dÅ±ne-tavak (duinmeren) is talÃ¡lhatÃ³k, amelyek gazdagok kÃ©tÃ©ltÅ±ekben Ã©s madarakban.", "Az eurÃ³pai bÃ¶lÃ©nyt (wisent) 2007-ben telepÃ­tettÃ©k ide vissza egy elzÃ¡rt terÃ¼letre.", "A dÅ±nÃ©k fontos szerepet jÃ¡tszanak a holland ivÃ³vÃ­zellÃ¡tÃ¡sban: itt tisztÃ­tjÃ¡k Ã©s tÃ¡roljÃ¡k az Ã©desvizet termÃ©szetes szÅ±rÅ‘kÃ©nt.", "A parkban szÃ¡mos mÃ¡sodik vilÃ¡ghÃ¡borÃºs bunker (Atlantisz-fal maradvÃ¡nya) bÃºjik meg a homok alatt."],
    ro: [
      "Parcul conÈ›ine, de asemenea, lacuri de dune unice, Ã®nchise (duinmeren), bogate Ã®n amfibieni È™i pÄƒsÄƒri.",
      "Zimbrul european (wisent) a fost reintrodus aici Ã®n 2007 Ã®ntr-o zonÄƒ Ã®mprejmuitÄƒ.",
      "Dunele joacÄƒ un rol important Ã®n aprovizionarea cu apÄƒ potabilÄƒ din Olanda: apa dulce este purificatÄƒ È™i stocatÄƒ aici ca filtru natural.",
      "O serie de buncÄƒre din timpul celui de-al Doilea RÄƒzboi Mondial (rÄƒmÄƒÈ™iÈ›e ale Zidului Atlanticului) sunt ascunse sub nisipul din parc."
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
    name: { de: "HÃ¼nengrÃ¤ber in Drenthe", hu: "Drenthei Hunebedden", ro: "Mormintele megalitice din Drenthe", en: "Hunebedden in Drenthe" },
    image: "/geo-images/netherlands/drenthe-hunebed.webp",
    description: {
      de: "Die Provinz Drenthe ist berÃ¼hmt fÃ¼r ihre Hunebedden (HÃ¼nengrÃ¤ber), prÃ¤historische Grabmonumente, die aus riesigen Findlingen bestehen. Diese Megalithanlagen wurden vor Ã¼ber 5.000 Jahren von den Bauern der Trichterbecherkultur errichtet. Sie sind die Ã¤ltesten DenkmÃ¤ler der Niederlande.",
      hu: "Drenthe tartomÃ¡ny hÃ­res a HunebeddenekrÅ‘l, a hatalmas vÃ¡ndorkÃ¶vekbÅ‘l Ã¡llÃ³ Å‘skori sÃ­remlÃ©kekrÅ‘l. Ezeket a megalitikus Ã©pÃ­tmÃ©nyeket tÃ¶bb mint 5000 Ã©vvel ezelÅ‘tt emeltÃ©k a tÃ¶lcsÃ©res edÃ©nyek kultÃºrÃ¡jÃ¡nak fÃ¶ldmÅ±vesei. Ezek Hollandia legrÃ©gebbi mÅ±emlÃ©kei.",
      ro: "Provincia Drenthe este faimoasÄƒ pentru Hunebedden, monumente funerare preistorice formate din bolovani uriaÈ™i. Aceste structuri megalitice au fost construite cu peste 5.000 de ani Ã®n urmÄƒ de fermierii din cultura vaselor pÃ¢lnie. Ele sunt cele mai vechi monumente din ÈšÄƒrile de Jos.",
      en: "The province of Drenthe is famous for its Hunebedden (dolmens), prehistoric burial monuments made of huge erratic boulders. These megalithic structures were built over 5,000 years ago by farmers of the Funnelbeaker culture. They are the oldest monuments in the Netherlands."
    },
        descriptionAdvanced: {
    de: "Die Hunebedden (HÃ¼nengrÃ¤ber) in der Provinz Drenthe sind die Ã¤ltesten und faszinierendsten vorgeschichtlichen Monumente der Niederlande. Diese gewaltigen SteingrÃ¤ber wurden vor mehr als 5.000 Jahren von den Bauern der sogenannten Trichterbecherkultur errichtet, lange vor dem Bau der Ã¤gyptischen Pyramiden oder Stonehenge. Sie bestehen aus gigantischen Findlingen, die wÃ¤hrend der Eiszeit von Gletschern aus Skandinavien in die Niederlande transportiert wurden. Heute sind noch 54 dieser mystischen Megalithanlagen erhalten geblieben; sie liegen meist friedlich versteckt in den ausgedehnten Heide- und Waldlandschaften Drenthes und sind Zeugen der frÃ¼hesten Besiedlung des Landes. Geschichte K5: Die Erbauer der HÃ¼nengrÃ¤ber gehÃ¶rten zu den ersten Menschen, die Ackerbau betrieben. Wie verÃ¤nderte der Ackerbau die Lebensweise der Menschen im Vergleich zu den frÃ¼heren JÃ¤gern und Sammlern?",
    hu: "A Drenthe tartomÃ¡nyban talÃ¡lhatÃ³ megalitikus sÃ­rok, az Ãºgynevezett 'Hunebedden' Hollandia legrÃ©gebbi ember alkotta mÅ±emlÃ©kei, amelyek tÃ¶rtÃ©nete a Krisztus elÅ‘tti 3400 kÃ¶rÃ¼li Ã©vekre (a TÃ¶lcsÃ©res SzÃ¡jÃº EdÃ©nyek KultÃºrÃ¡jÃ¡nak idejÃ©re) nyÃºlik vissza. Ezek a grandiÃ³zus sÃ­rkamrÃ¡k hatalmas grÃ¡nit tÃ¶mbÃ¶kbÅ‘l Ã©pÃ¼ltek, amelyeket a legutÃ³bbi jÃ©gkorszak gleccserei szÃ¡llÃ­tottak SkandinÃ¡viÃ¡bÃ³l a mai Hollandia terÃ¼letÃ©re. A legnagyobb Ã©s leghÃ­resebb sÃ­r Borger falu mellett talÃ¡lhatÃ³ (D27), ahol egy modern lÃ¡togatÃ³kÃ¶zpont mutatja be a kÅ‘kori emberek Ã©letÃ©t. TÃ¶rtÃ©nelem K5: Hogyan voltak kÃ©pesek a kÅ‘korszaki emberek ilyen hatalmas, akÃ¡r 20 tonnÃ¡s sziklatÃ¶mbÃ¶ket elmozdÃ­tani Ã©s egymÃ¡sra helyezni?",
    ro: "Mormintele megalitice din provincia Drenthe, aÈ™a-numitele 'Hunebedden', sunt cele mai vechi monumente create de om din Olanda, a cÄƒror istorie dateazÄƒ din jurul anului 3400 Ã®.Hr. (pe vremea Culturii Vaselor PÃ¢lnie). Aceste camere mortuare grandioase au fost construite din blocuri masive de granit transportate din Scandinavia de gheÈ›arii din ultima erÄƒ glaciarÄƒ pe teritoriul Olandei de astÄƒzi. Cel mai mare È™i mai faimos mormÃ¢nt se aflÄƒ lÃ¢ngÄƒ satul Borger (D27), unde un centru de vizitare modern prezintÄƒ viaÈ›a oamenilor din Epoca de PiatrÄƒ. Istorie K5: Cum au reuÈ™it oamenii din Epoca de PiatrÄƒ sÄƒ mute È™i sÄƒ stivuiascÄƒ bolovani atÃ¢t de masivi, de pÃ¢nÄƒ la 20 de tone?",
    en: "The Hunebedden (megalithic tombs) in the province of Drenthe are the oldest and most fascinating prehistoric monuments in the Netherlands. These massive stone tombs were erected over 5,000 years ago by farmers of the Funnelbeaker culture, long before the construction of the Egyptian pyramids or Stonehenge. They consist of gigantic boulders transported to the Netherlands from Scandinavia by glaciers during the Ice Age. Today, 54 of these mystical megalithic structures remain; they lie mostly peacefully hidden in Drenthe's vast heathlands and forests and are witnesses to the country's earliest settlement. History K5: The builders of the megalithic tombs were among the first people to practice agriculture. How did agriculture change the way of life compared to earlier hunters and gatherers?"
  },
    facts: {
      de: ["Es gibt noch 52 erhaltene HÃ¼nengrÃ¤ber in den Niederlanden.", "Die meisten befinden sich in der Provinz Drenthe.", "Errichtet aus Findlingen, die wÃ¤hrend der Eiszeit aus Skandinavien kamen.", "ÄŒlter als Stonehenge und die Pyramiden.", "In Borger befindet sich das grÃ¶ÃŸte HÃ¼nengrab (D27) und das Hunebedcentrum.", "Dienten als kollektive GrabstÃ¤tten."],
      hu: ["HollandiÃ¡ban mÃ©g 52 fennmaradt megalitikus sÃ­r talÃ¡lhatÃ³.", "A legtÃ¶bb Drenthe tartomÃ¡nyban van.", "A jÃ©gkorszak alatt SkandinÃ¡viÃ¡bÃ³l idesodort vÃ¡ndorkÃ¶vekbÅ‘l Ã©pÃ¼ltek.", "RÃ©gebbiek, mint Stonehenge Ã©s a piramisok.", "Borgerben talÃ¡lhatÃ³ a legnagyobb megalitikus sÃ­r (D27) Ã©s a Hunebedcentrum.", "KollektÃ­v temetkezÃ©si helykÃ©nt szolgÃ¡ltak."],
      ro: ["ExistÄƒ Ã®ncÄƒ 52 de morminte megalitice pÄƒstrate Ã®n ÈšÄƒrile de Jos.", "Cele mai multe sunt situate Ã®n provincia Drenthe.", "Construite din bolovani care au venit din Scandinavia Ã®n timpul Epocii de GheaÈ›Äƒ.", "Mai vechi decÃ¢t Stonehenge È™i piramidele.", "ÃŽn Borger se aflÄƒ cel mai mare mormÃ¢nt megalitic (D27) È™i Hunebedcentrum.", "Au servit drept locuri de Ã®nmormÃ¢ntare colective."],
      en: ["There are still 52 preserved dolmens in the Netherlands.", "Most are located in the province of Drenthe.", "Built from boulders that came from Scandinavia during the Ice Age.", "Older than Stonehenge and the pyramids.", "In Borger is the largest dolmen (D27) and the Hunebedcentrum.", "Served as collective burial places."]
    },
      factsAdvanced: {
    de: [
      "Die HÃ¼nengrÃ¤ber (Hunebedden) wurden um 3000 v. Chr. erbaut und sind damit Ã¤lter als Stonehenge und die Pyramiden von Gizeh.",
      "Von den ursprÃ¼nglich Ã¼ber 80 in den Niederlanden bekannten HÃ¼nengrÃ¤bern sind heute noch 54 erhalten geblieben.",
      "Das grÃ¶ÃŸte noch erhaltene HÃ¼nengrab ist das D27 in Borger; es ist Ã¼ber 22 Meter lang.",
      "Die tonnenschweren Decksteine wurden wÃ¤hrend der vorletzten Eiszeit von skandinavischen Gletschern nach Drenthe geschoben."
    ],
    hu: ["HollandiÃ¡ban Ã¶sszesen 54 Hunebed maradt fenn, ebbÅ‘l 52 Drenthe tartomÃ¡nyban talÃ¡lhatÃ³.", "A sÃ­rokat eredetileg fÃ¶lddel Ã©s homokkal fedtÃ©k be, a kÃ¶vek a fÃ¶ldalatti sÃ­rkamra vÃ¡zÃ¡t alkottÃ¡k.", "A leghosszabb sÃ­rkamra (D27) majdnem 23 mÃ©ter hosszÃº.", "A 'hunebed' elnevezÃ©s a 17. szÃ¡zadbÃ³l szÃ¡rmazik, amikor az emberek Ãºgy hittÃ©k, hogy a kÃ¶veket 'huynen' (Ã³riÃ¡sok) hordtÃ¡k Ã¶ssze."],
    ro: [
      "Un total de 54 de Hunebedden au supravieÈ›uit Ã®n Olanda, dintre care 52 sunt situate Ã®n provincia Drenthe.",
      "Mormintele au fost iniÈ›ial acoperite cu pÄƒmÃ¢nt È™i nisip, pietrele formÃ¢nd scheletul camerei mortuare subterane.",
      "Cea mai lungÄƒ camerÄƒ mortuarÄƒ (D27) are o lungime de aproape 23 de metri.",
      "Numele 'hunebed' dateazÄƒ din secolul al XVII-lea, cÃ¢nd oamenii credeau cÄƒ pietrele au fost strÃ¢nse de 'huynen' (giganÈ›i)."
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
      de: "Der Vondelpark ist der berÃ¼hmteste und beliebteste Stadtpark von Amsterdam. Entworfen im Stil eines englischen Landschaftsgartens, ist er die grÃ¼ne Lunge der Stadt. Der Park ist ein Treffpunkt fÃ¼r Einheimische und Touristen gleichermaÃŸen, ideal zum Spazierengehen, Radfahren oder Entspannen.",
      hu: "A Vondelpark Amszterdam leghÃ­resebb Ã©s legnÃ©pszerÅ±bb vÃ¡rosi parkja. Az angol tÃ¡jkert stÃ­lusÃ¡ban tervezett park a vÃ¡ros zÃ¶ld tÃ¼deje. A park a helyiek Ã©s a turistÃ¡k kedvelt talÃ¡lkozÃ³helye, ideÃ¡lis sÃ©tÃ¡ra, kerÃ©kpÃ¡rozÃ¡sra vagy pihenÃ©sre.",
      ro: "Vondelpark este cel mai faimos È™i popular parc al oraÈ™ului din Amsterdam. Proiectat Ã®n stilul unei grÄƒdini peisagistice englezeÈ™ti, este plÄƒmÃ¢nul verde al oraÈ™ului. Parcul este un punct de Ã®ntÃ¢lnire atÃ¢t pentru localnici, cÃ¢t È™i pentru turiÈ™ti, ideal pentru plimbÄƒri, ciclism sau relaxare.",
      en: "Vondelpark is the most famous and popular city park in Amsterdam. Designed in the style of an English landscape garden, it is the green lung of the city. The park is a meeting place for locals and tourists alike, ideal for walking, cycling or relaxing."
    },
        descriptionAdvanced: {
    de: "Der Vondelpark ist der berÃ¼hmteste und meistbesuchte Stadtpark Amsterdams, vergleichbar mit dem Central Park in New York, jedoch mit einem typisch niederlÃ¤ndischen, entspannten Flair. Der 1865 im Stil eines englischen Landschaftsgartens erÃ¶ffnete Park liegt zentral im Museumsviertel und ist eine grÃ¼ne Oase mit gewundenen Teichen, weitlÃ¤ufigen RasenflÃ¤chen und schattigen BÃ¤umen. An sonnigen Tagen wird der Park zum Freiluft-Wohnzimmer der Amsterdamer; Menschen picknicken, fahren Fahrrad, joggen oder besuchen kostenlose Vorstellungen im Open-Air-Theater. Der Park ist nach dem niederlÃ¤ndischen Dichter Joost van den Vondel benannt, dessen imposante Statue den Park ziert. Geografie K5: Der Vondelpark wurde auf weichem Torfboden angelegt und muss regelmÃ¤ÃŸig entwÃ¤ssert werden. Was passiert, wenn man sumpfigen Boden nicht mit KanÃ¤len und Pumpen trocken hÃ¤lt?",
    hu: "A Vondelpark Amszterdam legnagyobb, legismertebb Ã©s legnÃ©pszerÅ±bb vÃ¡rosi parkja, amelyet Ã©vente tÃ¶bb milliÃ³ helyi lakos Ã©s turista keres fel. A parkot az 1860-as Ã©vekben az angol tÃ¡jÃ©pÃ­tÃ©szeti stÃ­lus (romantikus, kanyargÃ³s utak, tavak Ã©s hidak) jegyÃ©ben terveztÃ©k meg. NÃ©vadÃ³ja Joost van den Vondel, a 17. szÃ¡zad leghÃ­resebb holland kÃ¶ltÅ‘je Ã©s drÃ¡maÃ­rÃ³ja, akinek hatalmas szobra a park kÃ¶zepÃ©n Ã¡ll. NyÃ¡ron a park szabadtÃ©ri szÃ­nhÃ¡za ingyenes koncerteket Ã©s elÅ‘adÃ¡sokat kÃ­nÃ¡l, mikÃ¶zben a pÃ¡zsit tele van piknikezÅ‘kkel. Irodalom K6: Kivel lehetne Ã¶sszehasonlÃ­tani Vondelt (pÃ©ldÃ¡ul Shakespeare-rel) a sajÃ¡t nemzeti irodalmukra gyakorolt hatÃ¡suk alapjÃ¡n?",
    ro: "Vondelpark este cel mai mare, mai cunoscut È™i cel mai popular parc orÄƒÈ™enesc din Amsterdam, vizitat de milioane de localnici È™i turiÈ™ti Ã®n fiecare an. Parcul a fost proiectat Ã®n anii 1860 Ã®n stilul arhitecturii peisagistice englezeÈ™ti (cÄƒi romantice, È™erpuitoare, lacuri È™i poduri). Este numit dupÄƒ Joost van den Vondel, cel mai faimos poet È™i dramaturg olandez din secolul al XVII-lea, a cÄƒrui statuie masivÄƒ se aflÄƒ Ã®n mijlocul parcului. Vara, teatrul Ã®n aer liber al parcului oferÄƒ concerte È™i spectacole gratuite, Ã®n timp ce pajiÈ™tile sunt pline de oameni care fac picnic. LiteraturÄƒ K6: Cu cine ar putea fi comparat Vondel (de exemplu, Shakespeare) pe baza impactului lor asupra propriei lor literaturi naÈ›ionale?",
    en: "The Vondelpark is Amsterdam's most famous and most visited city park, comparable to Central Park in New York, but with a typically Dutch, relaxed flair. Opened in 1865 in the style of an English landscape garden, the park is centrally located in the Museum Quarter and serves as a green oasis with winding ponds, sweeping lawns, and shady trees. On sunny days, the park becomes the open-air living room for Amsterdammers; people picnic, cycle, jog, or attend free performances at the open-air theater. The park is named after the Dutch poet Joost van den Vondel, whose imposing statue adorns the park. Geography K5: The Vondelpark was laid out on soft peat soil and must be regularly drained. What happens if swampy ground is not kept dry with canals and pumps?"
  },
    facts: {
      de: ["Der meistbesuchte Park der Niederlande (ca. 10 Millionen Besucher jÃ¤hrlich).", "Benannt nach dem Dichter Joost van den Vondel.", "ErÃ¶ffnet im Jahr 1865.", "Seit 1996 ein nationales Denkmal (Rijksmonument).", "VerfÃ¼gt Ã¼ber ein Freilichttheater mit SommerauffÃ¼hrungen.", "Beherbergt eine Skulptur von Pablo Picasso."],
      hu: ["Hollandia leglÃ¡togatottabb parkja (Ã©vente kb. 10 milliÃ³ lÃ¡togatÃ³).", "Joost van den Vondel kÃ¶ltÅ‘rÅ‘l neveztÃ©k el.", "1865-ben nyitottÃ¡k meg.", "1996 Ã³ta nemzeti mÅ±emlÃ©k (Rijksmonument).", "SzabadtÃ©ri szÃ­nhÃ¡zzal rendelkezik nyÃ¡ri elÅ‘adÃ¡sokkal.", "Itt talÃ¡lhatÃ³ egy Pablo Picasso-szobor."],
      ro: ["Cel mai vizitat parc din Olanda (aproximativ 10 milioane de vizitatori anual).", "Numit dupÄƒ poetul Joost van den Vondel.", "Deschis Ã®n 1865.", "Monument naÈ›ional (Rijksmonument) din 1996.", "Are un teatru Ã®n aer liber cu spectacole de varÄƒ.", "GÄƒzduieÈ™te o sculpturÄƒ de Pablo Picasso."],
      en: ["The most visited park in the Netherlands (approx. 10 million visitors annually).", "Named after the poet Joost van den Vondel.", "Opened in 1865.", "A national monument (Rijksmonument) since 1996.", "Has an open-air theater with summer performances.", "Houses a sculpture by Pablo Picasso."]
    },
      factsAdvanced: {
    de: [
      "Der Vondelpark zieht jÃ¤hrlich rund 10 Millionen Besucher an und ist der grÃ¶ÃŸte Park innerhalb des Amsterdamer Zentrums.",
      "Er wurde von der wohlhabenden Amsterdamer BÃ¼rgerschaft finanziert und erst 1953 der Stadtverwaltung Ã¼bergeben.",
      "Wegen des weichen Torfbodens musste der Park alle paar Jahrzehnte aufwendig saniert werden, um ein Absinken zu verhindern.",
      "Der Park steht seit 1996 unter Denkmalschutz (Rijksmonument) und beherbergt eine Skulptur von Pablo Picasso."
    ],
    hu: ["A park nem Ã¶nkormÃ¡nyzati terÃ¼letkÃ©nt jÃ¶tt lÃ©tre, hanem egy gazdag polgÃ¡rokbÃ³l Ã¡llÃ³ bizottsÃ¡g vÃ¡sÃ¡rolta meg a fÃ¶ldet.", "A terÃ¼let egy sÃ¼llyedÅ‘ tÅ‘zeglÃ¡pra Ã©pÃ¼lt, ezÃ©rt a parkot az Ã©vtizedek sorÃ¡n folyamatosan fel kell tÃ¶lteni Ã©s karbantartani.", "A Vondelparkban tÃ¶bb mint 100 fafaj talÃ¡lhatÃ³, Ã©s rengeteg zÃ¶ld papagÃ¡j (SÃ¡ndor-papagÃ¡j) Ã©l itt vadon.", "A park szÃ©lÃ©n talÃ¡lhatÃ³ a hÃ­res holland filmmÃºzeum, a (korÃ¡bbi nevÃ©n) Filmmuseum pavilonja."],
    ro: [
      "Parcul nu a fost creat ca o zonÄƒ municipalÄƒ, ci terenul a fost cumpÄƒrat de un comitet format din cetÄƒÈ›eni bogaÈ›i.",
      "Zona a fost construitÄƒ pe o mlaÈ™tinÄƒ de turbÄƒ care se scufundÄƒ, aÈ™a cÄƒ parcul a trebuit sÄƒ fie umplut È™i Ã®ntreÈ›inut constant de-a lungul deceniilor.",
      "ÃŽn Vondelpark se gÄƒsesc peste 100 de specii de copaci, iar mulÈ›i papagali verzi (papagali cu guler roz) trÄƒiesc Ã®n sÄƒlbÄƒticie aici.",
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
