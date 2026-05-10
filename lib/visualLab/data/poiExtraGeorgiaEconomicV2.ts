import type { POI } from "./poi";

export const poiExtraGeorgiaEconomicV2: POI[] = [
  {
    id: "batumi-sea-port-economic-v2",
    type: "port",
    parent: "GE-AJ",
    coords: [41.6500, 41.6500],
    name: {
      de: "Seehafen Batumi",
      hu: "Batumi Tengeri Kikötő",
      ro: "Portul Maritim Batumi",
      en: "Batumi Sea Port"
    },
    description: {
      de: "Der Seehafen Batumi ist einer der wichtigsten Häfen Georgiens am Schwarzen Meer und dient als zentraler Knotenpunkt für den Transit von Öl und Fracht.",
      hu: "A Batumi Tengeri Kikötő Grúzia egyik legfontosabb fekete-tengeri kikötője, amely az olaj- és teherforgalom központi csomópontja.",
      ro: "Portul Maritim Batumi este unul dintre cele mai importante porturi ale Georgiei la Marea Neagră, servind ca nod central pentru tranzitul de petrol și mărfuri.",
      en: "Batumi Sea Port is one of Georgia's most important Black Sea ports, serving as a central hub for the transit of oil and cargo."
    },
    facts: {
      de: ["Wichtiger Transitpunkt für kaspisches Öl.", "Einer der ältesten Häfen der Region."],
      hu: ["Fontos tranzitpont a kaszpi-tengeri olaj számára.", "A régió egyik legrégebbi kikötője."],
      ro: ["Punct important de tranzit pentru petrolul caspic.", "Unul dintre cele mai vechi porturi din regiune."],
      en: ["Major transit point for Caspian oil.", "One of the oldest ports in the region."]
    }
  },
  {
    id: "poti-sea-port-economic-v2",
    type: "port",
    parent: "GE-SZ",
    coords: [41.6500, 42.1580],
    name: {
      de: "Seehafen Poti",
      hu: "Poti Tengeri Kikötő",
      ro: "Portul Maritim Poti",
      en: "Poti Sea Port"
    },
    description: {
      de: "Der Seehafen Poti ist ein wichtiger Verkehrsknotenpunkt und der größte Hafen Georgiens für Container- und Massenguttransporte.",
      hu: "A Poti Tengeri Kikötő fontos közlekedési csomópont és Grúzia legnagyobb kikötője a konténer- és ömlesztettáru-szállítás terén.",
      ro: "Portul Maritim Poti este un nod de transport crucial și cel mai mare port din Georgia pentru containere și mărfuri în vrac.",
      en: "Poti Sea Port is a major transport hub and Georgia's largest port for container and bulk cargo handling."
    },
    facts: {
      de: ["Spielt eine Schlüsselrolle im eurasischen Transportkorridor TRACECA.", "Haupttor für den georgischen Seehandel."],
      hu: ["Kulcsszerepet játszik a TRACECA eurázsiai közlekedési folyosóban.", "A grúz tengeri kereskedelem fő kapuja."],
      ro: ["Joacă un rol cheie în coridorul de transport eurasiatic TRACECA.", "Poarta principală pentru comerțul maritim georgian."],
      en: ["Plays a key role in the TRACECA Eurasian transport corridor.", "Main gateway for Georgian maritime trade."]
    }
  },
  {
    id: "chiatura-manganese-mine-economic-v2",
    type: "mine",
    parent: "GE-IM",
    coords: [43.2840, 42.2900],
    name: {
      de: "Manganbergwerk Tschiatura",
      hu: "Chiatura Mangánbánya",
      ro: "Mina de Mangan Chiatura",
      en: "Chiatura Manganese Mine"
    },
    description: {
      de: "Das Manganbergwerk Tschiatura ist eine der weltweit größten Lagerstätten für Manganerz und seit über einem Jahrhundert in Betrieb.",
      hu: "A Chiatura Mangánbánya a világ egyik legnagyobb mangánérc-lelőhelye, amely több mint egy évszázada üzemel.",
      ro: "Mina de mangan Chiatura este unul dintre cele mai mari zăcăminte de minereu de mangan din lume, funcționând de peste un secol.",
      en: "Chiatura Manganese Mine is one of the world's largest manganese ore deposits, operating for over a century."
    },
    facts: {
      de: ["Die Stadt ist bekannt für ihr Netzwerk alter Seilbahnen.", "Liefert Rohstoffe für die georgische Schwerindustrie."],
      hu: ["A város ismert a régi drótkötélpályák hálózatáról.", "Nyersanyagot biztosít a grúz nehézipar számára."],
      ro: ["Orașul este cunoscut pentru rețeaua sa de telecabine vechi.", "Furnizează materii prime pentru industria grea georgiană."],
      en: ["The town is known for its network of old cable cars.", "Supplies raw materials for Georgian heavy industry."]
    }, image: "/poi-images/chiatura-manganese-mine-economic-v2.webp"},
  {
    id: "rustavi-metallurgical-plant-economic-v2",
    type: "industry",
    parent: "GE-KK",
    coords: [45.0340, 41.5430],
    name: {
      de: "Metallurgisches Werk Rustawi",
      hu: "Rusztavi Kohászati Üzem",
      ro: "Uzina Metalurgică Rustavi",
      en: "Rustavi Metallurgical Plant"
    },
    description: {
      de: "Das Metallurgische Werk in Rustawi ist das größte Zentrum der Schwerindustrie in Georgien, spezialisiert auf Stahl- und Eisenproduktion.",
      hu: "A rusztavi kohászati üzem Grúzia legnagyobb nehézipari központja, amely acél- és vastermelésre specializálódott.",
      ro: "Uzina metalurgică din Rustavi este cel mai mare centru al industriei grele din Georgia, specializat în producția de oțel și fier.",
      en: "The Rustavi Metallurgical Plant is Georgia's largest heavy industry center, specializing in steel and iron production."
    },
    facts: {
      de: ["Die Stadt Rustawi wurde rund um dieses Werk aufgebaut.", "Ein bedeutender Exporteur von Stahlprodukten in der Region."],
      hu: ["Rusztavi városát ezen üzem köré építették.", "Jelentős acélipari termékeket exportál a régióban."],
      ro: ["Orașul Rustavi a fost construit în jurul acestei uzine.", "Un exportator major de produse din oțel în regiune."],
      en: ["The city of Rustavi was built around this plant.", "A major exporter of steel products in the region."]
    }, image: "/poi-images/rustavi-metallurgical-plant-economic-v2.webp"},
  {
    id: "zestafoni-ferroalloy-plant-economic-v2",
    type: "industry",
    parent: "GE-IM",
    coords: [43.0330, 42.1070],
    name: {
      de: "Ferrolegierungswerk Sestaponi",
      hu: "Zesztafoni Vasötvözetgyár",
      ro: "Uzina de Feroaliaje Zestafoni",
      en: "Zestafoni Ferroalloy Plant"
    },
    description: {
      de: "Das Werk in Sestaponi verarbeitet Manganerz aus Tschiatura und ist einer der größten Produzenten von Silikomangan auf der Welt.",
      hu: "A zesztafoni üzem a chiaturai mangánércet dolgozza fel, és a világ egyik legnagyobb szilikomangán-termelője.",
      ro: "Uzina din Zestafoni procesează minereul de mangan din Chiatura și este unul dintre cei mai mari producători de silicomangan din lume.",
      en: "The Zestafoni plant processes manganese ore from Chiatura and is one of the world's largest producers of silicomanganese."
    },
    facts: {
      de: ["Silikomangan ist ein wichtiger Bestandteil der Stahlproduktion.", "Das Werk ist ein Hauptarbeitgeber in der Region Imeretien."],
      hu: ["A szilikomangán az acélgyártás fontos összetevője.", "Az üzem az Imeréti régió egyik fő munkaadója."],
      ro: ["Silicomanganul este o componentă crucială în producția de oțel.", "Uzina este un angajator major în regiunea Imereti."],
      en: ["Silicomanganese is a crucial component in steel production.", "The plant is a major employer in the Imereti region."]
    }, image: "/poi-images/zestafoni-ferroalloy-plant-economic-v2.webp"},
  {
    id: "kulevi-oil-terminal-economic-v2",
    type: "port",
    parent: "GE-SZ",
    coords: [41.6420, 42.2680],
    name: {
      de: "Ölterminal Kulewi",
      hu: "Kulevi Olajterminál",
      ro: "Terminalul Petrolier Kulevi",
      en: "Kulevi Oil Terminal"
    },
    description: {
      de: "Der Ölterminal Kulewi ist eine bedeutende Anlage für die Verladung von kaspischem Erdöl auf Tankschiffe im Schwarzen Meer.",
      hu: "A Kulevi Olajterminál jelentős létesítmény a kaszpi kőolaj fekete-tengeri tartályhajókra történő átrakodására.",
      ro: "Terminalul petrolier Kulevi este o facilitate majoră pentru încărcarea petrolului caspic pe tancuri petroliere în Marea Neagră.",
      en: "The Kulevi Oil Terminal is a major facility for loading Caspian petroleum onto tankers in the Black Sea."
    },
    facts: {
      de: ["Der Terminal wurde im Jahr 2008 eröffnet.", "Verfügt über moderne Lagertanks mit großer Kapazität."],
      hu: ["A terminált 2008-ban nyitották meg.", "Modern, nagy kapacitású tárolótartályokkal rendelkezik."],
      ro: ["Terminalul a fost deschis în anul 2008.", "Dispune de rezervoare moderne de stocare cu capacitate mare."],
      en: ["The terminal was opened in the year 2008.", "Features modern high-capacity storage tanks."]
    }, image: "/poi-images/kulevi-oil-terminal-economic-v2.webp"},
  {
    id: "supsa-sea-terminal-economic-v2",
    type: "port",
    parent: "GE-GU",
    coords: [41.7680, 42.0290],
    name: {
      de: "Terminal Supsa",
      hu: "Supsa Tengeri Terminál",
      ro: "Terminalul Maritim Supsa",
      en: "Supsa Sea Terminal"
    },
    description: {
      de: "Der Terminal Supsa ist der Endpunkt der Baku-Supsa-Ölpipeline, wo Erdöl aus Aserbaidschan in Schiffe verladen wird.",
      hu: "A Supsa terminál a Baku-Supsa kőolajvezeték végpontja, ahol az azerbajdzsáni kőolajat hajókra rakodják.",
      ro: "Terminalul Supsa este punctul final al conductei de petrol Baku-Supsa, unde petrolul din Azerbaidjan este încărcat pe nave.",
      en: "The Supsa Terminal is the endpoint of the Baku-Supsa oil pipeline, where petroleum from Azerbaijan is loaded onto ships."
    },
    facts: {
      de: ["Die Anlage nutzt Offshore-Boje-Systeme zur Verladung.", "Spielt eine wichtige Rolle in der kaukasischen Energieinfrastruktur."],
      hu: ["A létesítmény tengeri bójarendszereket használ a rakodáshoz.", "Fontos szerepet játszik a kaukázusi energiainfrastruktúrában."],
      ro: ["Facilitatea utilizează sisteme de geamanduri offshore pentru încărcare.", "Joacă un rol important în infrastructura energetică caucaziană."],
      en: ["The facility uses offshore buoy systems for loading.", "Plays an important role in Caucasian energy infrastructure."]
    }, image: "/poi-images/supsa-sea-terminal-economic-v2.webp"},
  {
    id: "tkibuli-coal-mine-economic-v2",
    type: "mine",
    parent: "GE-IM",
    coords: [42.9860, 42.3480],
    name: {
      de: "Kohlebergwerk Tqibuli",
      hu: "Tkibuli Szénbánya",
      ro: "Mina de Cărbune Tkibuli",
      en: "Tkibuli Coal Mine"
    },
    description: {
      de: "Tqibuli ist das Zentrum des georgischen Kohlebergbaus, wo Steinkohle hauptsächlich für den Inlandsbedarf abgebaut wird.",
      hu: "Tkibuli a grúz szénbányászat központja, ahol elsősorban belföldi szükségletekre termelnek ki kőszenet.",
      ro: "Tkibuli este centrul mineritului de cărbune din Georgia, unde se extrage cărbune în principal pentru nevoile interne.",
      en: "Tkibuli is the center of Georgian coal mining, extracting hard coal primarily for domestic needs."
    },
    facts: {
      de: ["Der Kohleabbau begann hier in der Mitte des 19. Jahrhunderts.", "Bietet Kohle für lokale Zement- und Wärmekraftwerke."],
      hu: ["A szénbányászat itt a 19. század közepén kezdődött.", "Szenet biztosít a helyi cement- és hőerőművek számára."],
      ro: ["Extracția cărbunelui a început aici la mijlocul secolului al XIX-lea.", "Furnizează cărbune pentru centralele termice și fabricile de ciment locale."],
      en: ["Coal mining began here in the mid-19th century.", "Provides coal for local cement and thermal power plants."]
    }, image: "/poi-images/tkibuli-coal-mine-economic-v2.webp"},
  {
    id: "madneuli-mine-economic-v2",
    type: "mine",
    parent: "GE-KK",
    coords: [44.4210, 41.3780],
    name: {
      de: "Kupfer- und Goldmine Madneuli",
      hu: "Madneuli Réz- és Aranybánya",
      ro: "Mina de Cupru și Aur Madneuli",
      en: "Madneuli Copper-Gold Mine"
    },
    description: {
      de: "Die Madneuli-Mine in der Nähe von Kasreti ist die wichtigste Quelle für Kupfer und Gold in Georgien und wird im Tagebau betrieben.",
      hu: "A Kaszreti közelében található Madneuli bánya Grúzia legfontosabb réz- és aranyforrása, amelyet külszíni fejtéssel művelnek.",
      ro: "Mina Madneuli din apropiere de Kazreti este cea mai importantă sursă de cupru și aur din Georgia, fiind exploatată la suprafață.",
      en: "The Madneuli mine near Kazreti is Georgia's most important source of copper and gold, operated as an open-pit mine."
    },
    facts: {
      de: ["Die gewonnenen Metalle sind wichtige georgische Exportgüter.", "Der Tagebau hat die Landschaft stark verändert."],
      hu: ["A kitermelt fémek fontos grúz exportcikkek.", "A külszíni bányászat jelentősen megváltoztatta a tájat."],
      ro: ["Metalele extrase sunt importante bunuri de export georgiene.", "Mineritul la suprafață a modificat semnificativ peisajul."],
      en: ["The extracted metals are important Georgian export goods.", "The open-pit operation has significantly altered the landscape."]
    }, image: "/poi-images/madneuli-mine-economic-v2.webp"},
  {
    id: "poti-fiz-economic-v2",
    type: "industry",
    parent: "GE-SZ",
    coords: [41.6670, 42.1670],
    name: {
      de: "Freie Industriezone Poti",
      hu: "Poti Szabadipari Zóna",
      ro: "Zona Industrială Liberă Poti",
      en: "Poti Free Industrial Zone"
    },
    description: {
      de: "Die Freie Industriezone Poti bietet Steuervergünstigungen und zieht internationale Unternehmen im produzierenden Gewerbe an.",
      hu: "A Poti Szabadipari Zóna adókedvezményeket kínál, és vonzza a nemzetközi feldolgozóipari vállalatokat.",
      ro: "Zona Industrială Liberă Poti oferă facilități fiscale și atrage companii internaționale din industria prelucrătoare.",
      en: "The Poti Free Industrial Zone offers tax incentives and attracts international manufacturing companies."
    },
    facts: {
      de: ["Die erste freie Industriezone, die im Kaukasus gegründet wurde.", "Direkt an den Seehafen und das Eisenbahnnetz angebunden."],
      hu: ["Az első szabadipari zóna, amelyet a Kaukázusban alapítottak.", "Közvetlenül kapcsolódik a tengeri kikötőhöz és a vasúti hálózathoz."],
      ro: ["Prima zonă industrială liberă înființată în Caucaz.", "Conectată direct la portul maritim și rețeaua feroviară."],
      en: ["The first free industrial zone established in the Caucasus.", "Directly connected to the seaport and railway network."]
    }, image: "/poi-images/poti-fiz-economic-v2.webp"},
  {
    id: "kutaisi-fiz-economic-v2",
    type: "industry",
    parent: "GE-IM",
    coords: [42.6680, 42.2350],
    name: {
      de: "Freie Industriezone Kutaissi",
      hu: "Kutaiszi Szabadipari Zóna",
      ro: "Zona Industrială Liberă Kutaisi",
      en: "Kutaisi Free Industrial Zone"
    },
    description: {
      de: "Diese Industriezone in Kutaissi fördert lokale und ausländische Investitionen in Technologie, Textilien und Haushaltsgeräte.",
      hu: "Ez a kutaiszi ipari zóna támogatja a helyi és külföldi befektetéseket a technológia, a textilipar és a háztartási gépek területén.",
      ro: "Această zonă industrială din Kutaisi promovează investițiile locale și străine în tehnologie, textile și electrocasnice.",
      en: "This industrial zone in Kutaisi promotes local and foreign investments in technology, textiles, and household appliances."
    },
    facts: {
      de: ["Errichtet auf dem Gelände eines ehemaligen Automobilwerks.", "Beheimatet Unternehmen aus verschiedenen Branchen."],
      hu: ["Egy egykori autógyár területén hozták létre.", "Különböző ágazatokból származó vállalatoknak ad otthont."],
      ro: ["Construită pe locul unei foste fabrici de automobile.", "Găzduiește companii din diverse sectoare industriale."],
      en: ["Built on the site of a former automobile factory.", "Hosts companies from various industrial sectors."]
    }, image: "/poi-images/kutaisi-fiz-economic-v2.webp"},
  {
    id: "zhinvali-hpp-economic-v2",
    type: "energy",
    parent: "GE-MM",
    coords: [44.7700, 42.1310],
    name: {
      de: "Wasserkraftwerk Schinwali",
      hu: "Zsinvali Vízerőmű",
      ro: "Hidrocentrala Zhinvali",
      en: "Zhinvali Hydroelectric Power Plant"
    },
    description: {
      de: "Der Schinwali-Staudamm staut den Aragwi-Fluss und produziert saubere Wasserkraftenergie für die georgische Hauptstadt Tiflis.",
      hu: "A Zsinvali-gát felduzzasztja az Aragvi folyót, és tiszta vízenergiát termel Grúzia fővárosa, Tbiliszi számára.",
      ro: "Barajul Zhinvali blochează râul Aragvi și produce energie hidroelectrică curată pentru capitala georgiană Tbilisi.",
      en: "The Zhinvali Dam impounds the Aragvi River, producing clean hydroelectric power for the Georgian capital, Tbilisi."
    },
    facts: {
      de: ["Der Stausee versorgt Tiflis zudem mit Trinkwasser.", "Die Anlage wurde in den 1980er Jahren fertiggestellt."],
      hu: ["A víztározó ivóvízzel is ellátja Tbiliszit.", "A létesítmény az 1980-as években készült el."],
      ro: ["Rezervorul alimentează de asemenea Tbilisi cu apă potabilă.", "Facilitatea a fost finalizată în anii 1980."],
      en: ["The reservoir also supplies Tbilisi with drinking water.", "The facility was completed in the 1980s."]
    }, image: "/poi-images/zhinvali-hpp-economic-v2.webp"},
  {
    id: "gardabani-tpp-economic-v2",
    type: "energy",
    parent: "GE-KK",
    coords: [45.0740, 41.4580],
    name: {
      de: "Wärmekraftwerk Gardabani",
      hu: "Gardabani Hőerőmű",
      ro: "Termocentrala Gardabani",
      en: "Gardabani Thermal Power Plant"
    },
    description: {
      de: "Das kombinierte Gas- und Dampfturbinenkraftwerk in Gardabani stellt die Energiesicherheit Georgiens, insbesondere im Winter, sicher.",
      hu: "A gardabani kombinált ciklusú gázturbinás erőmű biztosítja Grúzia energiabiztonságát, különösen télen.",
      ro: "Centrala termoelectrică cu ciclu combinat din Gardabani asigură securitatea energetică a Georgiei, în special iarna.",
      en: "The combined cycle gas turbine power plant in Gardabani ensures Georgia's energy security, especially during winter."
    },
    facts: {
      de: ["Es ist eines der modernsten Kraftwerke der Region.", "Reduziert die Abhängigkeit von importiertem Strom."],
      hu: ["Ez a régió egyik legmodernebb erőműve.", "Csökkenti az importált villamos energiától való függőséget."],
      ro: ["Este una dintre cele mai moderne centrale din regiune.", "Reduce dependența de energia electrică importată."],
      en: ["It is one of the most modern power plants in the region.", "Reduces dependence on imported electricity."]
    }, image: "/poi-images/gardabani-tpp-economic-v2.webp"},
  {
    id: "larsi-border-crossing-economic-v2",
    type: "trade-hub",
    parent: "GE-MM",
    coords: [44.6230, 42.7410],
    name: {
      de: "Grenzübergang Larsi",
      hu: "Larsi Határátkelőhely",
      ro: "Punctul de Trecere a Frontierei Larsi",
      en: "Larsi Border Crossing"
    },
    description: {
      de: "Der Grenzübergang Larsi in der Darialschlucht ist der wichtigste Landweg für den Handel zwischen Georgien und Russland.",
      hu: "A Darial-szurdokban található Larsi határátkelőhely a Grúzia és Oroszország közötti kereskedelem legfontosabb szárazföldi útvonala.",
      ro: "Punctul de trecere a frontierei Larsi din defileul Darial este cea mai importantă rută terestră pentru comerțul dintre Georgia și Rusia.",
      en: "The Larsi border crossing in the Darial Gorge is the most important land route for trade between Georgia and Russia."
    },
    facts: {
      de: ["Der einzige offiziell geöffnete Grenzübergang zu Russland.", "Oft durch starken Schneefall im Winter blockiert."],
      hu: ["Az egyetlen hivatalosan nyitva tartó határátkelő Oroszország felé.", "Télen gyakran elzárja a heves havazás."],
      ro: ["Singurul punct de trecere a frontierei deschis oficial către Rusia.", "Adesea blocat de ninsori abundente iarna."],
      en: ["The only officially open border crossing to Russia.", "Often blocked by heavy snowfall in winter."]
    }
  },
  {
    id: "sarpi-border-crossing-economic-v2",
    type: "trade-hub",
    parent: "GE-AJ",
    coords: [41.5510, 41.5210],
    name: {
      de: "Grenzübergang Sarpi",
      hu: "Sarpi Határátkelőhely",
      ro: "Punctul de Trecere a Frontierei Sarpi",
      en: "Sarpi Border Crossing"
    },
    description: {
      de: "Sarpi ist ein stark frequentierter Grenzübergang an der Schwarzmeerküste und spielt eine zentrale Rolle im Handel mit der Türkei.",
      hu: "Sarpi egy forgalmas határátkelő a Fekete-tenger partján, és központi szerepet játszik a Törökországgal folytatott kereskedelemben.",
      ro: "Sarpi este un punct de frontieră aglomerat pe coasta Mării Negre și joacă un rol central în comerțul cu Turcia.",
      en: "Sarpi is a busy border crossing on the Black Sea coast and plays a central role in trade with Turkey."
    },
    facts: {
      de: ["Das georgische Zollgebäude hat eine einzigartige, moderne Architektur.", "Einer der verkehrsreichsten Knotenpunkte des Landes."],
      hu: ["A grúz vámépület egyedi, modern építészettel rendelkezik.", "Az ország egyik legforgalmasabb csomópontja."],
      ro: ["Clădirea vămii georgiene are o arhitectură unică, modernă.", "Unul dintre cele mai aglomerate noduri din țară."],
      en: ["The Georgian customs building features unique, modern architecture.", "One of the busiest transport hubs in the country."]
    }, image: "/poi-images/sarpi-border-crossing-economic-v2.webp"},
  {
    id: "lilo-city-market-economic-v2",
    type: "trade-hub",
    parent: "GE-TB",
    coords: [44.9450, 41.7080],
    name: {
      de: "Lilo-Markt",
      hu: "Lilo Piac",
      ro: "Piața Lilo",
      en: "Lilo City Market"
    },
    description: {
      de: "Der Lilo-Markt am Stadtrand von Tiflis ist der größte Groß- und Einzelhandelsmarkt in Transkaukasien für Konsumgüter.",
      hu: "A Tbiliszi szélén található Lilo Piac Transzkaukázia legnagyobb nagy- és kiskereskedelmi piaca a fogyasztási cikkek terén.",
      ro: "Piața Lilo de la periferia orașului Tbilisi este cea mai mare piață en-gros și cu amănuntul din Transcaucazia pentru bunuri de larg consum.",
      en: "Lilo Market on the outskirts of Tbilisi is the largest wholesale and retail market in Transcaucasia for consumer goods."
    },
    facts: {
      de: ["Hier kaufen Händler aus dem gesamten Kaukasus ein.", "Ein bedeutender Motor für den informellen und formellen Handel."],
      hu: ["Itt az egész Kaukázusból érkező kereskedők vásárolnak.", "Az informális és formális kereskedelem jelentős mozgatórugója."],
      ro: ["Comercianții din întregul Caucaz își fac cumpărăturile aici.", "Un motor major pentru comerțul informal și formal."],
      en: ["Merchants from all over the Caucasus shop here.", "A major driver for both informal and formal trade."]
    }, image: "/poi-images/lilo-city-market-economic-v2.webp"},
  {
    id: "borjomi-bottling-plant-economic-v2",
    type: "industry",
    parent: "GE-SJ",
    coords: [43.3870, 41.8380],
    name: {
      de: "Abfüllanlage Bordschomi",
      hu: "Borzsomi Palackozóüzem",
      ro: "Fabrica de Îmbuteliere Borjomi",
      en: "Borjomi Bottling Plant"
    },
    description: {
      de: "In den Fabriken von Bordschomi wird das berühmte vulkanische Mineralwasser abgefüllt und in dutzende Länder weltweit exportiert.",
      hu: "A borzsomi gyárakban a híres vulkáni ásványvizet palackozzák, és a világ több tucat országába exportálják.",
      ro: "În fabricile din Borjomi se îmbuteliază faimoasa apă minerală vulcanică, care este exportată în zeci de țări din întreaga lume.",
      en: "The factories in Borjomi bottle the famous volcanic mineral water, exporting it to dozens of countries worldwide."
    },
    facts: {
      de: ["Bordschomi-Wasser ist einer der wichtigsten Exportartikel Georgiens.", "Die industrielle Abfüllung begann bereits im Jahr 1890."],
      hu: ["A Borjomi víz Grúzia egyik legfontosabb exportcikke.", "Az ipari palackozás már 1890-ben elkezdődött."],
      ro: ["Apa Borjomi este unul dintre cele mai importante articole de export ale Georgiei.", "Îmbutelierea industrială a început încă din anul 1890."],
      en: ["Borjomi water is one of Georgia's most important export items.", "Industrial bottling began as early as the year 1890."]
    }, image: "/poi-images/borjomi-bottling-plant-economic-v2.webp"},
  {
    id: "batumi-oil-terminal-economic-v2",
    type: "energy",
    parent: "GE-AJ",
    coords: [41.6590, 41.6540],
    name: {
      de: "Ölterminal Batumi",
      hu: "Batumi Olajterminál",
      ro: "Terminalul Petrolier Batumi",
      en: "Batumi Oil Terminal"
    },
    description: {
      de: "Der Ölterminal in Batumi verarbeitet und lagert Erdölprodukte aus Zentralasien und dem Kaukasus für den internationalen Seetransport.",
      hu: "A batumi olajterminál közép-ázsiai és kaukázusi kőolajtermékeket dolgoz fel és tárol a nemzetközi tengeri szállítás számára.",
      ro: "Terminalul petrolier din Batumi procesează și depozitează produse petroliere din Asia Centrală și Caucaz pentru transportul maritim internațional.",
      en: "The oil terminal in Batumi processes and stores petroleum products from Central Asia and the Caucasus for international maritime transport."
    },
    facts: {
      de: ["Die Anlage verfügt über direkte Eisenbahnverbindungen.", "Ein historisches Zentrum der globalen Ölindustrie seit Ende des 19. Jahrhunderts."],
      hu: ["A létesítmény közvetlen vasúti kapcsolatokkal rendelkezik.", "A globális olajipar történelmi központja a 19. század vége óta."],
      ro: ["Facilitatea dispune de conexiuni feroviare directe.", "Un centru istoric al industriei petroliere globale de la sfârșitul secolului al XIX-lea."],
      en: ["The facility has direct railway connections.", "A historical center of the global oil industry since the late 19th century."]
    }
  },
  {
    id: "kaspi-cement-plant-economic-v2",
    type: "industry",
    parent: "GE-SK",
    coords: [44.4230, 41.9270],
    name: {
      de: "Zementwerk Kaspi",
      hu: "Kaszpi Cementgyár",
      ro: "Fabrica de Ciment Kaspi",
      en: "Kaspi Cement Plant"
    },
    description: {
      de: "Das Zementwerk in Kaspi ist ein Pfeiler der georgischen Baustoffindustrie und versorgt wichtige Infrastrukturprojekte des Landes.",
      hu: "A kaszpi cementgyár a grúz építőanyag-ipar egyik alappillére, amely az ország fontos infrastrukturális projektjeit látja el.",
      ro: "Fabrica de ciment din Kaspi este un pilon al industriei georgiene a materialelor de construcții, aprovizionând proiecte majore de infrastructură.",
      en: "The cement plant in Kaspi is a pillar of the Georgian building materials industry, supplying major infrastructure projects in the country."
    },
    facts: {
      de: ["Die Kalksteinvorkommen der Region bieten ideale Rohstoffe.", "Moderne Filteranlagen reduzieren heute die Emissionen."],
      hu: ["A régió mészkőlelőhelyei ideális nyersanyagot biztosítanak.", "A modern szűrőberendezések ma már csökkentik a károsanyag-kibocsátást."],
      ro: ["Zăcămintele de calcar din regiune oferă materii prime ideale.", "Sistemele moderne de filtrare reduc astăzi emisiile."],
      en: ["The region's limestone deposits provide ideal raw materials.", "Modern filtration systems now reduce emissions."]
    }, image: "/poi-images/kaspi-cement-plant-economic-v2.webp"},
  {
    id: "samgori-oil-field-economic-v2",
    type: "energy",
    parent: "GE-TB",
    coords: [45.0270, 41.6880],
    name: {
      de: "Ölfeld Samgori",
      hu: "Szamgori Olajmező",
      ro: "Câmpul Petrolier Samgori",
      en: "Samgori Oil Field"
    },
    description: {
      de: "Das Ölfeld Samgori nahe Tiflis ist die größte inländische Quelle für die Erdölförderung in Georgien.",
      hu: "A Tbiliszi közelében található Szamgori olajmező a kőolaj-kitermelés legnagyobb hazai forrása Grúziában.",
      ro: "Câmpul petrolier Samgori de lângă Tbilisi este cea mai mare sursă internă de extracție a petrolului din Georgia.",
      en: "The Samgori oil field near Tbilisi is the largest domestic source of petroleum extraction in Georgia."
    },
    facts: {
      de: ["Die Entdeckung des Feldes im 20. Jahrhundert verringerte die Energieimporte.", "Die Fördermengen sind heute geringer als in der Vergangenheit."],
      hu: ["A mező 20. századi felfedezése csökkentette az energiaimportot.", "A kitermelés mértéke ma alacsonyabb, mint a múltban."],
      ro: ["Descoperirea câmpului în secolul al XX-lea a redus importurile de energie.", "Volumele de extracție sunt astăzi mai mici decât în trecut."],
      en: ["The discovery of the field in the 20th century reduced energy imports.", "Extraction volumes are lower today than in the past."]
    }
  }
];