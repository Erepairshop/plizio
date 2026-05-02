import type { POI } from "./poi";

export const poiExtraNamibiaEconomicV2: POI[] = [
  {
    id: "walvis-bay-hafen-economic-v2",
    type: "port",
    parent: "NA-ER",
    coords: [14.5, -22.95],
    name: { de: "Walvis Bay Hafen", hu: "Walvis Bay kikötő", ro: "Portul Walvis Bay", en: "Port of Walvis Bay" },
    description: { de: "Der größte Handelshafen Namibias und ein wichtiges Tor zum südlichen Afrika.", hu: "Namíbia legnagyobb kereskedelmi kikötője és fontos tranzitpont Dél-Afrika felé.", ro: "Cel mai mare port comercial din Namibia și o poartă importantă către sudul Africii.", en: "Namibia's largest commercial port and a major gateway to Southern Africa." },
    facts: {
      de: ["Verwaltet von Namport.", "Tiefwasserhafen am Atlantik.", "Wichtig für den Containerverkehr.", "Gateway für Binnenländer."],
      hu: ["A Namport kezeli.", "Mélyvízi kikötő az Atlanti-óceánon.", "Fontos a konténerforgalom számára.", "Tranzitpont a tengerparttal nem rendelkező országoknak."],
      ro: ["Administrat de Namport.", "Port de mare adâncime la Atlantic.", "Important pentru traficul de containere.", "Poartă pentru țările fără ieșire la mare."],
      en: ["Managed by Namport.", "Deep-water port on the Atlantic.", "Important for container traffic.", "Gateway for landlocked countries."]
    }
  },
  {
    id: "luederitz-hafen-economic-v2",
    type: "port",
    parent: "NA-KA",
    coords: [15.15, -26.6333],
    name: { de: "Lüderitz Hafen", hu: "Lüderitz kikötő", ro: "Portul Lüderitz", en: "Port of Lüderitz" },
    description: { de: "Ein bedeutender Hafen für die Fischereiindustrie und den Export von Mineralien im Süden.", hu: "Jelentős kikötő a halászati ipar és az ásványkincsek exportja számára délen.", ro: "Un port important pentru industria pescuitului și exportul de minerale în sud.", en: "A major port for the fishing industry and mineral exports in the south." },
    facts: {
      de: ["Zweithafen Namibias.", "Fokus auf Fischerei.", "Exportiert Zink und Blei.", "Historische Bedeutung."],
      hu: ["Namíbia második kikötője.", "Fókuszban a halászat.", "Cinket és ólmot exportál.", "Történelmi jelentőségű."],
      ro: ["Al doilea port al Namibiei.", "Axa pe pescuit.", "Exportă zinc și plumb.", "Importanță istorică."],
      en: ["Namibia's second port.", "Focus on fishing.", "Exports zinc and lead.", "Historical significance."]
    }
  },
  {
    id: "roessing-uranmine-economic-v2",
    type: "industry",
    parent: "NA-ER",
    coords: [15.0461, -22.4636],
    name: { de: "Rössing-Uranmine", hu: "Rössing uránbánya", ro: "Mina de uraniu Rössing", en: "Rössing Uranium Mine" },
    description: { de: "Eine der längsten in Betrieb befindlichen Uranminen der Welt und ein wichtiger Wirtschaftsfaktor.", hu: "A világ egyik legrégebb óta működő uránbányája és fontos gazdasági tényező.", ro: "Una dintre cele mai vechi mine de uraniu din lume în funcțiune și un factor economic important.", en: "One of the longest-operating uranium mines in the world and a major economic driver." },
    facts: {
      de: ["Produziert seit 1976.", "Gehört mehrheitlich CNUC.", "Tagebaubetrieb.", "Befindet sich in der Namib-Wüste."],
      hu: ["1976 óta termel.", "Többségi tulajdonosa a CNUC.", "Külszíni fejtés.", "A Namib-sivatagban található."],
      ro: ["Produce din 1976.", "Deținută majoritar de CNUC.", "Exploatare la suprafață.", "Situată în deșertul Namib."],
      en: ["Producing since 1976.", "Majority owned by CNUC.", "Open-pit mining operation.", "Located in the Namib Desert."]
    }
  },
  {
    id: "husab-uranmine-economic-v2",
    type: "industry",
    parent: "NA-ER",
    coords: [15.05, -22.65],
    name: { de: "Husab-Uranmine", hu: "Husab uránbánya", ro: "Mina de uraniu Husab", en: "Husab Uranium Mine" },
    description: { de: "Eine der größten Uranminen der Welt, die erheblich zum Exportvolumen Namibias beiträgt.", hu: "A világ egyik legnagyobb uránbányája, amely jelentősen hozzájárul Namíbia exportjához.", ro: "Una dintre cele mai mari mine de uraniu din lume, contribuind semnificativ la exporturile Namibiei.", en: "One of the largest uranium mines globally, contributing significantly to Namibia's exports." },
    facts: {
      de: ["Eröffnet im Jahr 2016.", "Chinesische Investition.", "Zweitgrößte Uranmine der Welt.", "Enorme Förderkapazität."],
      hu: ["2016-ban nyitott meg.", "Kínai befektetés.", "A világ második legnagyobb uránbányája.", "Hatalmas termelési kapacitás."],
      ro: ["Deschisă în 2016.", "Investiție chineză.", "A doua cea mai mare mină de uraniu din lume.", "Capacitate uriașă de producție."],
      en: ["Opened in 2016.", "Chinese investment.", "Second-largest uranium mine in the world.", "Massive production capacity."]
    }
  },
  {
    id: "langer-heinrich-mine-economic-v2",
    type: "industry",
    parent: "NA-ER",
    coords: [15.3167, -22.8167],
    name: { de: "Langer Heinrich Mine", hu: "Langer Heinrich bánya", ro: "Mina Langer Heinrich", en: "Langer Heinrich Mine" },
    description: { de: "Eine bedeutende Uranmine am Rande der Namib-Wüste, die eine wichtige Rolle im Bergbausektor spielt.", hu: "Jelentős uránbánya a Namib-sivatag szélén, amely fontos szerepet játszik a bányászati ágazatban.", ro: "O mină importantă de uraniu la marginea deșertului Namib, jucând un rol important în sectorul minier.", en: "A major uranium mine on the edge of the Namib Desert, playing a key role in the mining sector." },
    facts: {
      de: ["Entdeckt im Jahr 1973.", "Gehört Paladin Energy.", "Wurde nach Wartung reaktiviert.", "Abbau von Calcrete-Erz."],
      hu: ["1973-ban fedezték fel.", "A Paladin Energy tulajdona.", "Karbantartás után újraindították.", "Mészköves érc bányászata."],
      ro: ["Descoperită în 1973.", "Deținută de Paladin Energy.", "Reactivată după întreținere.", "Extracție de minereu calcret."],
      en: ["Discovered in 1973.", "Owned by Paladin Energy.", "Reactivated after care and maintenance.", "Calcrete ore mining."]
    }
  },
  {
    id: "trekkopje-uranmine-economic-v2",
    type: "industry",
    parent: "NA-ER",
    coords: [14.9667, -22.25],
    name: { de: "Trekkopje-Uranmine", hu: "Trekkopje uránbánya", ro: "Mina de uraniu Trekkopje", en: "Trekkopje Uranium Mine" },
    description: { de: "Ein umfangreiches Uran-Bergbauprojekt in der Erongo-Region, betrieben von Orano.", hu: "Egy kiterjedt uránbányászati projekt az Erongo régióban, az Orano üzemeltetésében.", ro: "Un amplu proiect minier de uraniu în regiunea Erongo, operat de Orano.", en: "An extensive uranium mining project in the Erongo Region, operated by Orano." },
    facts: {
      de: ["Gehört dem französischen Konzern Orano.", "Große flache Erzlagerstätte.", "Nutzt eine eigene Entsalzungsanlage.", "Tagebaustruktur."],
      hu: ["A francia Orano csoport tulajdona.", "Nagy, sekély ércesedés.", "Saját sótalanító üzemet használ.", "Külszíni fejtésű struktúra."],
      ro: ["Deținut de grupul francez Orano.", "Zăcământ extins de mică adâncime.", "Folosește propria uzină de desalinizare.", "Structură de exploatare la suprafață."],
      en: ["Owned by French group Orano.", "Large shallow ore deposit.", "Uses its own desalination plant.", "Open-pit structure."]
    }
  },
  {
    id: "ohorongo-zementwerk-economic-v2",
    type: "industry",
    parent: "NA-OT",
    coords: [17.2, -19.55],
    name: { de: "Ohorongo Zementwerk", hu: "Ohorongo Cementgyár", ro: "Fabrica de Ciment Ohorongo", en: "Ohorongo Cement Plant" },
    description: { de: "Das größte und modernste Zementwerk Namibias, das die Inlandsnachfrage deckt.", hu: "Namíbia legnagyobb és legmodernebb cementgyára, amely a belföldi keresletet elégíti ki.", ro: "Cea mai mare și modernă fabrică de ciment din Namibia, acoperind cererea internă.", en: "Namibia's largest and most modern cement plant, satisfying domestic demand." },
    facts: {
      de: ["In der Nähe von Otavi.", "Verwendet lokale Rohstoffe.", "Hohe Energieeffizienz.", "Wichtig für die Bauwirtschaft."],
      hu: ["Otavi közelében található.", "Helyi nyersanyagokat használ.", "Magas energiahatékonyság.", "Fontos az építőipar számára."],
      ro: ["Situată lângă Otavi.", "Folosește materii prime locale.", "Eficiență energetică ridicată.", "Importantă pentru industria construcțiilor."],
      en: ["Located near Otavi.", "Uses local raw materials.", "High energy efficiency.", "Crucial for the construction industry."]
    }
  },
  {
    id: "skorpion-zinkmine-economic-v2",
    type: "industry",
    parent: "NA-KA",
    coords: [16.6, -27.8167],
    name: { de: "Skorpion Zinkmine", hu: "Skorpion cinkbánya", ro: "Mina de zinc Skorpion", en: "Skorpion Zinc Mine" },
    description: { de: "Eine bedeutende Zinkmine im Süden Namibias mit einer integrierten Raffinerie.", hu: "Egy jelentős cinkbánya Namíbia déli részén, integrált finomítóval.", ro: "O importantă mină de zinc în sudul Namibiei, cu o rafinărie integrată.", en: "A major zinc mine in southern Namibia with an integrated refinery." },
    facts: {
      de: ["Gehört zu Vedanta Resources.", "Produziert hochreines Zink.", "Tagebaubetrieb nahe Rosh Pinah.", "Wichtiger Arbeitgeber im Süden."],
      hu: ["A Vedanta Resources tulajdona.", "Nagy tisztaságú cinket termel.", "Külszíni fejtés Rosh Pinah közelében.", "Fontos munkáltató délen."],
      ro: ["Aparține Vedanta Resources.", "Produce zinc de înaltă puritate.", "Exploatare la suprafață lângă Rosh Pinah.", "Angajator important în sud."],
      en: ["Owned by Vedanta Resources.", "Produces high-purity zinc.", "Open-pit operation near Rosh Pinah.", "Major employer in the south."]
    }
  },
  {
    id: "rosh-pinah-zinkmine-economic-v2",
    type: "industry",
    parent: "NA-KA",
    coords: [16.7667, -27.95],
    name: { de: "Rosh Pinah Zinkmine", hu: "Rosh Pinah cinkbánya", ro: "Mina de zinc Rosh Pinah", en: "Rosh Pinah Zinc Mine" },
    description: { de: "Eine unterirdische Mine, die Zink- und Bleikonzentrate für den Export abbaut.", hu: "Földalatti bánya, amely cink- és ólomkoncentrátumot bányász exportra.", ro: "O mină subterană care extrage concentrate de zinc și plumb pentru export.", en: "An underground mine that extracts zinc and lead concentrates for export." },
    facts: {
      de: ["Seit 1969 in Betrieb.", "Tiefbauverfahren.", "Treiber der lokalen Stadtentwicklung.", "Wichtiger Exporteur von Bleikonzentrat."],
      hu: ["1969 óta üzemel.", "Mélyszíni bányászat.", "A helyi városfejlesztés motorja.", "Fontos ólomkoncentrátum-exportőr."],
      ro: ["În funcțiune din 1969.", "Minerit subteran.", "Motor al dezvoltării urbane locale.", "Exportator important de concentrat de plumb."],
      en: ["Operational since 1969.", "Underground mining method.", "Driver of local town development.", "Major exporter of lead concentrate."]
    }
  },
  {
    id: "navachab-goldmine-economic-v2",
    type: "industry",
    parent: "NA-ER",
    coords: [15.75, -21.9833],
    name: { de: "Navachab-Goldmine", hu: "Navachab aranybánya", ro: "Mina de aur Navachab", en: "Navachab Gold Mine" },
    description: { de: "Eine etablierte Goldmine in der Nähe von Karibib und eine der wenigen in Namibia.", hu: "Egy jól bejáratott aranybánya Karibib közelében, és a kevesek egyike Namíbiában.", ro: "O mină de aur consacrată lângă Karibib și una dintre puținele din Namibia.", en: "An established gold mine near Karibib and one of the few in Namibia." },
    facts: {
      de: ["Eröffnet im Jahr 1989.", "Tagebaubetrieb.", "Einzige Goldmine für lange Zeit.", "Produziert Goldbarren."],
      hu: ["1989-ben nyitották meg.", "Külszíni fejtés.", "Hosszú ideig az egyetlen aranybánya volt.", "Aranyrudakat állít elő."],
      ro: ["Deschisă în 1989.", "Exploatare la suprafață.", "Singura mină de aur pentru mult timp.", "Produce lingouri de aur."],
      en: ["Opened in 1989.", "Open-pit mining.", "Only gold mine for a long time.", "Produces gold bullion."]
    }
  },
  {
    id: "otjikoto-goldmine-economic-v2",
    type: "industry",
    parent: "NA-OT",
    coords: [17.2667, -19.0833],
    name: { de: "Otjikoto-Goldmine", hu: "Otjikoto aranybánya", ro: "Mina de aur Otjikoto", en: "Otjikoto Gold Mine" },
    description: { de: "Eine moderne Goldmine im Norden Namibias, die erhebliche wirtschaftliche Impulse setzt.", hu: "Modern aranybánya Észak-Namíbiában, amely jelentős gazdasági lendületet ad.", ro: "O mină modernă de aur în nordul Namibiei, care oferă un impuls economic semnificativ.", en: "A modern gold mine in northern Namibia providing significant economic impetus." },
    facts: {
      de: ["Gehört B2Gold.", "Erste Produktion 2014.", "Nutzt ein eigenes Solarkraftwerk.", "Zweitgrößte Goldmine des Landes."],
      hu: ["A B2Gold tulajdona.", "Első termelés 2014-ben.", "Saját naperőművet használ.", "Az ország második legnagyobb aranybányája."],
      ro: ["Deținută de B2Gold.", "Prima producție în 2014.", "Folosește propria centrală solară.", "A doua cea mai mare mină de aur din țară."],
      en: ["Owned by B2Gold.", "First production in 2014.", "Uses its own solar power plant.", "Second-largest gold mine in the country."]
    }
  },
  {
    id: "tschudi-kupfermine-economic-v2",
    type: "industry",
    parent: "NA-OS",
    coords: [17.4333, -19.1667],
    name: { de: "Tschudi-Kupfermine", hu: "Tschudi rézbánya", ro: "Mina de cupru Tschudi", en: "Tschudi Copper Mine" },
    description: { de: "Eine Kupfermine in der Nähe von Tsumeb, die reines Kupferkathoden produziert.", hu: "Egy rézbánya Tsumeb közelében, amely tiszta rézkatódokat állít elő.", ro: "O mină de cupru lângă Tsumeb, care produce catozi de cupru pur.", en: "A copper mine near Tsumeb producing pure copper cathodes." },
    facts: {
      de: ["Tagebaubetrieb.", "Nutzt SX-EW-Technologie.", "Wichtig für die Region Oshikoto.", "Produziert hochreines Kupfer."],
      hu: ["Külszíni fejtés.", "SX-EW technológiát használ.", "Fontos Oshikoto régió számára.", "Nagy tisztaságú réz termelése."],
      ro: ["Exploatare la suprafață.", "Folosește tehnologia SX-EW.", "Importantă pentru regiunea Oshikoto.", "Produce cupru de înaltă puritate."],
      en: ["Open-pit mining.", "Uses SX-EW technology.", "Important for the Oshikoto region.", "Produces high-purity copper."]
    }
  },
  {
    id: "matchless-kupfermine-economic-v2",
    type: "industry",
    parent: "NA-KH",
    coords: [16.6333, -22.6833],
    name: { de: "Matchless-Kupfermine", hu: "Matchless rézbánya", ro: "Mina de cupru Matchless", en: "Matchless Copper Mine" },
    description: { de: "Eine historische und reaktivierte Kupfermine in der Khomas-Region.", hu: "Történelmi és újraindított rézbánya a Khomas régióban.", ro: "O mină de cupru istorică și reactivată în regiunea Khomas.", en: "A historic and reactivated copper mine in the Khomas region." },
    facts: {
      de: ["Westlich von Windhoek gelegen.", "Untertagebau.", "Gehört zur Weatherly International.", "Lange Bergbautradition."],
      hu: ["Windhoektól nyugatra található.", "Földalatti bányászat.", "A Weatherly International része.", "Hosszú bányászati hagyomány."],
      ro: ["Situată la vest de Windhoek.", "Minerit subteran.", "Face parte din Weatherly International.", "Lunga tradiție minieră."],
      en: ["Located west of Windhoek.", "Underground mining.", "Part of Weatherly International.", "Long mining tradition."]
    }
  },
  {
    id: "otjihase-kupfermine-economic-v2",
    type: "industry",
    parent: "NA-KH",
    coords: [17.25, -22.4333],
    name: { de: "Otjihase-Kupfermine", hu: "Otjihase rézbánya", ro: "Mina de cupru Otjihase", en: "Otjihase Copper Mine" },
    description: { de: "Eine der Hauptkupferminen nahe Windhoek, die Konzentrat für die Hütte in Tsumeb liefert.", hu: "Windhoek egyik fő rézbányája, amely koncentrátumot szállít a Tsumeb-i kohóba.", ro: "Una dintre principalele mine de cupru de lângă Windhoek, care furnizează concentrat pentru topitoria din Tsumeb.", en: "One of the main copper mines near Windhoek, supplying concentrate to the Tsumeb smelter." },
    facts: {
      de: ["Untertagebau.", "Östlich von Windhoek.", "Wichtiger Arbeitgeber.", "Produziert Kupfer und Pyrit."],
      hu: ["Földalatti bányászat.", "Windhoektól keletre.", "Fontos munkáltató.", "Rézet és piritet termel."],
      ro: ["Minerit subteran.", "La est de Windhoek.", "Angajator important.", "Produce cupru și pirită."],
      en: ["Underground mining.", "East of Windhoek.", "Major employer.", "Produces copper and pyrite."]
    }
  },
  {
    id: "namdeb-oranjemund-economic-v2",
    type: "industry",
    parent: "NA-KA",
    coords: [16.45, -28.5333],
    name: { de: "Namdeb Diamantenabbau Oranjemund", hu: "Namdeb gyémántbánya Oranjemund", ro: "Minerit de diamante Namdeb Oranjemund", en: "Namdeb Diamond Mining Oranjemund" },
    description: { de: "Das Zentrum der terrestrischen Diamantenförderung in Namibia an der Mündung des Oranje-Flusses.", hu: "A szárazföldi gyémántbányászat központja Namíbiában, az Oranje folyó torkolatánál.", ro: "Centrul extracției terestre de diamante din Namibia, la gura fluviului Orange.", en: "The center of terrestrial diamond mining in Namibia at the mouth of the Orange River." },
    facts: {
      de: ["Eines der reichsten Diamantengebiete.", "Alluvialer Abbau.", "Joint Venture mit De Beers.", "Prägt die Stadt Oranjemund."],
      hu: ["Az egyik leggazdagabb gyémántlelőhely.", "Hordalékos bányászat.", "Közös vállalat a De Beers-szel.", "Meghatározza Oranjemund városát."],
      ro: ["Una dintre cele mai bogate zone cu diamante.", "Minerit aluvionar.", "Joint venture cu De Beers.", "Definește orașul Oranjemund."],
      en: ["One of the richest diamond areas.", "Alluvial mining.", "Joint venture with De Beers.", "Shapes the town of Oranjemund."]
    }
  },
  {
    id: "elizabeth-bay-mine-economic-v2",
    type: "industry",
    parent: "NA-KA",
    coords: [15.1833, -26.9167],
    name: { de: "Elizabeth Bay Diamantenmine", hu: "Elizabeth Bay gyémántbánya", ro: "Mina de diamante Elizabeth Bay", en: "Elizabeth Bay Mine" },
    description: { de: "Eine Küsten-Diamantenmine in der Nähe von Lüderitz, bekannt für ihre stürmische Umgebung.", hu: "Egy tengerparti gyémántbánya Lüderitz közelében, amely a viharos környezetéről ismert.", ro: "O mină de diamante de coastă lângă Lüderitz, cunoscută pentru mediul său furtunos.", en: "A coastal diamond mine near Lüderitz, known for its stormy environment." },
    facts: {
      de: ["Südlich von Lüderitz.", "Abbau von Strandsedimenten.", "Historischer Bergbauort.", "Wurde mehrfach reaktiviert."],
      hu: ["Lüderitztől délre.", "Parti üledékek bányászata.", "Történelmi bányászváros.", "Többször is újraindították."],
      ro: ["La sud de Lüderitz.", "Extracția sedimentelor de plajă.", "Sit minier istoric.", "A fost reactivată de mai multe ori."],
      en: ["South of Lüderitz.", "Mining of beach sediments.", "Historic mining site.", "Has been reactivated several times."]
    }
  },
  {
    id: "bogenfels-diamantenmine-economic-v2",
    type: "industry",
    parent: "NA-KA",
    coords: [15.3833, -27.4333],
    name: { de: "Bogenfels Diamantenmine", hu: "Bogenfels gyémántbánya", ro: "Mina de diamante Bogenfels", en: "Bogenfels Diamond Mine" },
    description: { de: "Ein historisches und spezialisiertes Diamantenabbaugebiet an der spektakulären Küste der Namib-Wüste.", hu: "Történelmi és specializált gyémántbányászati terület a Namib-sivatag látványos partvidékén.", ro: "O zonă istorică și specializată de extracție a diamantelor pe coasta spectaculoasă a deșertului Namib.", en: "A historic and specialized diamond mining area on the spectacular coast of the Namib Desert." },
    facts: {
      de: ["Benannt nach dem markanten Felsentor.", "Teil der Sperrgebiet-Historie.", "Fokus auf marine Terrassen.", "Schwierige Logistik."],
      hu: ["A jellegzetes sziklakapuról nevezték el.", "A Sperrgebiet történelmének része.", "Fókuszban a tengeri teraszok.", "Nehéz logisztika."],
      ro: ["Numită după arcul stâncos proeminent.", "Parte a istoriei Sperrgebiet.", "Axa pe terasele marine.", "Logistică dificilă."],
      en: ["Named after the prominent rock arch.", "Part of the Sperrgebiet history.", "Focus on marine terraces.", "Difficult logistics."]
    }
  },
  {
    id: "salzgewinnung-swakopmund-economic-v2",
    type: "industry",
    parent: "NA-ER",
    coords: [14.5333, -22.6167],
    name: { de: "Salzgewinnungsanlage Swakopmund", hu: "Swakopmundi Sótartalék", ro: "Salina Swakopmund", en: "Salt Company Swakopmund" },
    description: { de: "Eine große Anlage zur Gewinnung von Meersalz durch Verdunstung an der Atlantikküste.", hu: "Nagy létesítmény tengeri só lepárlására az Atlanti-óceán partján.", ro: "O facilitate mare pentru obținerea sării de mare prin evaporare pe coasta Atlanticului.", en: "A large facility for the extraction of sea salt through evaporation on the Atlantic coast." },
    facts: {
      de: ["Nördlich von Swakopmund.", "Produziert Tausende Tonnen Salz.", "Ein Magnet für Flamingos.", "Wichtiger lokaler Arbeitgeber."],
      hu: ["Swakopmundtól északra.", "Több ezer tonna sót termel.", "Mágnesként vonzza a flamingókat.", "Fontos helyi munkaadó."],
      ro: ["La nord de Swakopmund.", "Produce mii de tone de sare.", "Un magnet pentru flamingo.", "Angajator local important."],
      en: ["North of Swakopmund.", "Produces thousands of tons of salt.", "A magnet for flamingos.", "Important local employer."]
    }
  },
  {
    id: "walvis-bay-salzgewinnung-economic-v2",
    type: "industry",
    parent: "NA-ER",
    coords: [14.4167, -23.0167],
    name: { de: "Walvis Bay Salzgewinnung", hu: "Walvis Bay-i sólepárló", ro: "Extracția de sare Walvis Bay", en: "Walvis Bay Salt Holdings" },
    description: { de: "Einer der größten Solarsalzproduzenten Afrikas, der industrielles und Speisesalz exportiert.", hu: "Afrika egyik legnagyobb napenergia-só termelője, amely ipari és étkezési sót exportál.", ro: "Unul dintre cei mai mari producători de sare solară din Africa, exportând sare industrială și de masă.", en: "One of the largest solar salt producers in Africa, exporting industrial and table salt." },
    facts: {
      de: ["Riesige Verdunstungsbecken.", "Exportiert weltweit.", "Südlich der Lagune gelegen.", "Produziert über 1 Million Tonnen jährlich."],
      hu: ["Hatalmas párologtató medencék.", "Világszerte exportál.", "A lagúnától délre található.", "Évente több mint 1 millió tonnát termel."],
      ro: ["Bazine uriașe de evaporare.", "Exportă în întreaga lume.", "Situată la sud de lagună.", "Produce peste 1 milion de tone anual."],
      en: ["Huge evaporation ponds.", "Exports globally.", "Located south of the lagoon.", "Produces over 1 million tons annually."]
    }
  },
  {
    id: "namwater-hauptsitz-economic-v2",
    type: "industry",
    parent: "NA-KH",
    coords: [17.0833, -22.5667],
    name: { de: "NamWater Hauptsitz", hu: "NamWater Központ", ro: "Sediul NamWater", en: "NamWater Headquarters" },
    description: { de: "Die Zentrale des nationalen Wasserversorgers, der die lebenswichtige Wasserinfrastruktur in ganz Namibia steuert.", hu: "A nemzeti vízszolgáltató központja, amely az egész Namíbiában elengedhetetlen vízinfrastruktúrát irányítja.", ro: "Sediul central al furnizorului național de apă, care controlează infrastructura vitală a apei în toată Namibia.", en: "The headquarters of the national water supplier, managing vital water infrastructure across Namibia." },
    facts: {
      de: ["Befindet sich in Windhoek.", "Staatliches Unternehmen.", "Verwaltet Dämme und Pipelines.", "Sichert die Wasserversorgung der Minen."],
      hu: ["Windhoekban található.", "Állami vállalat.", "Gátakat és csővezetékeket kezel.", "Biztosítja a bányák vízellátását."],
      ro: ["Situat în Windhoek.", "Companie de stat.", "Gestionează baraje și conducte.", "Asigură alimentarea cu apă a minelor."],
      en: ["Located in Windhoek.", "State-owned enterprise.", "Manages dams and pipelines.", "Secures water supply for mines."]
    }
  },
  {
    id: "van-eck-kraftwerk-economic-v2",
    type: "industry",
    parent: "NA-KH",
    coords: [17.0833, -22.5167],
    name: { de: "Van Eck Kraftwerk", hu: "Van Eck Erőmű", ro: "Centrala electrică Van Eck", en: "Van Eck Power Station" },
    description: { de: "Ein Kohlekraftwerk in Windhoek, das zur Stabilisierung des nationalen Stromnetzes dient.", hu: "Széntüzelésű erőmű Windhoekban, amely a nemzeti villamosenergia-hálózat stabilizálását szolgálja.", ro: "O centrală pe cărbune din Windhoek care servește la stabilizarea rețelei electrice naționale.", en: "A coal-fired power station in Windhoek serving to stabilize the national power grid." },
    facts: {
      de: ["Betrieben von NamPower.", "Liefert Spitzenlastenergie.", "Markante Kühltürme in Windhoek.", "Das einzige Kohlekraftwerk des Landes."],
      hu: ["A NamPower üzemelteti.", "Csúcsterhelési energiát biztosít.", "Jellegzetes hűtőtornyok Windhoekban.", "Az ország egyetlen széntüzelésű erőműve."],
      ro: ["Operată de NamPower.", "Furnizează energie de vârf.", "Turnuri de răcire proeminente în Windhoek.", "Singura centrală pe cărbune din țară."],
      en: ["Operated by NamPower.", "Provides peak load energy.", "Prominent cooling towers in Windhoek.", "The country's only coal power plant."]
    }
  },
  {
    id: "ruacana-wasserkraftwerk-economic-v2",
    type: "industry",
    parent: "NA-OM",
    coords: [14.2833, -17.4],
    name: { de: "Ruacana Wasserkraftwerk", hu: "Ruacana Vízerőmű", ro: "Hidrocentrala Ruacana", en: "Ruacana Hydroelectric Power Station" },
    description: { de: "Namibias wichtigste Stromquelle, gelegen an den Ruacana-Fällen am Kunene-Fluss.", hu: "Namíbia legfontosabb áramforrása, amely a Kunene folyó Ruacana-vízesésénél található.", ro: "Cea mai importantă sursă de energie a Namibiei, situată la cascada Ruacana pe râul Kunene.", en: "Namibia's main source of electricity, located at the Ruacana Falls on the Kunene River." },
    facts: {
      de: ["Größtes Kraftwerk Namibias.", "Nutzt das Wasser des Kunene.", "Unterirdische Turbinen.", "Kernstück der Stromversorgung."],
      hu: ["Namíbia legnagyobb erőműve.", "A Kunene vízét használja.", "Földalatti turbinák.", "Az áramellátás alappillére."],
      ro: ["Cea mai mare centrală din Namibia.", "Folosește apa râului Kunene.", "Turbine subterane.", "Element de bază al alimentării cu energie."],
      en: ["Namibia's largest power station.", "Uses the waters of the Kunene.", "Underground turbines.", "Core of the power supply."]
    }
  },
  {
    id: "kudu-gasfeld-economic-v2",
    type: "industry",
    parent: "NA-KA",
    coords: [14.3, -28.5],
    name: { de: "Kudu-Gasfeld", hu: "Kudu gázmező", ro: "Câmpul de gaze Kudu", en: "Kudu Gas Field" },
    description: { de: "Ein bedeutendes Offshore-Erdgasfeld vor der Küste Südnamibias mit großem Entwicklungspotenzial.", hu: "Jelentős tengeri földgázmező Namíbia déli partjainál, nagy fejlesztési potenciállal.", ro: "Un important câmp de gaze naturale offshore în largul coastei de sud a Namibiei, cu un mare potențial de dezvoltare.", en: "A major offshore natural gas field off the coast of southern Namibia with great development potential." },
    facts: {
      de: ["Liegt im Atlantischen Ozean.", "Wichtig für zukünftige Energieprojekte.", "Entdeckt in den 1970er Jahren.", "Soll ein Gaskraftwerk versorgen."],
      hu: ["Az Atlanti-óceánban található.", "Fontos a jövőbeli energiaprojektek szempontjából.", "Az 1970-es években fedezték fel.", "Egy gázerőművet fog ellátni."],
      ro: ["Situat în Oceanul Atlantic.", "Important pentru viitoarele proiecte energetice.", "Descoperit în anii 1970.", "Destinat să alimenteze o centrală pe gaz."],
      en: ["Located in the Atlantic Ocean.", "Important for future energy projects.", "Discovered in the 1970s.", "Intended to supply a gas power plant."]
    }
  },
  {
    id: "omburu-solarkraftwerk-economic-v2",
    type: "industry",
    parent: "NA-ER",
    coords: [15.55, -21.3667],
    name: { de: "Omburu Solarkraftwerk", hu: "Omburu Naperőmű", ro: "Centrala solară Omburu", en: "Omburu Solar Power Station" },
    description: { de: "Eines der ersten und größten Photovoltaik-Kraftwerke in Namibia zur Förderung erneuerbarer Energien.", hu: "Namíbia egyik első és legnagyobb fotovoltaikus erőműve a megújuló energiák népszerűsítésére.", ro: "Una dintre primele și cele mai mari centrale fotovoltaice din Namibia pentru promovarea energiei regenerabile.", en: "One of the first and largest photovoltaic power plants in Namibia promoting renewable energy." },
    facts: {
      de: ["Nahe Omaruru gelegen.", "Besteht aus über 30.000 Modulen.", "Reduziert die Abhängigkeit von Importen.", "Teil der grünen Energiewende."],
      hu: ["Omaruru közelében.", "Több mint 30 000 modulból áll.", "Csökkenti az importfüggőséget.", "A zöld energia átállás része."],
      ro: ["Situată lângă Omaruru.", "Formată din peste 30.000 de module.", "Reduce dependența de importuri.", "Parte a tranziției energetice verzi."],
      en: ["Located near Omaruru.", "Consists of over 30,000 modules.", "Reduces dependence on imports.", "Part of the green energy transition."]
    }
  },
  {
    id: "erongo-entsalzungsanlage-economic-v2",
    type: "industry",
    parent: "NA-ER",
    coords: [14.5, -22.25],
    name: { de: "Erongo Entsalzungsanlage", hu: "Erongo Sótalanító", ro: "Uzina de desalinizare Erongo", en: "Erongo Desalination Plant" },
    description: { de: "Die größte Entsalzungsanlage im südlichen Afrika, die Wasser für die Minen der Erongo-Region liefert.", hu: "Dél-Afrika legnagyobb sótalanító üzeme, amely vizet biztosít az Erongo régió bányáinak.", ro: "Cea mai mare uzină de desalinizare din sudul Africii, furnizând apă minelor din regiunea Erongo.", en: "The largest desalination plant in southern Africa, providing water for the mines in the Erongo region." },
    facts: {
      de: ["Bei Wlotzkasbaken gelegen.", "Umkehrosmose-Technologie.", "Kapazität von 20 Millionen Kubikmetern.", "Wichtig für die Uranindustrie."],
      hu: ["Wlotzkasbaken mellett található.", "Fordított ozmózis technológia.", "20 millió köbméteres kapacitás.", "Fontos az uránipar számára."],
      ro: ["Situată la Wlotzkasbaken.", "Tehnologie cu osmoză inversă.", "Capacitate de 20 milioane metri cubi.", "Importantă pentru industria uraniului."],
      en: ["Located at Wlotzkasbaken.", "Reverse osmosis technology.", "Capacity of 20 million cubic meters.", "Crucial for the uranium industry."]
    }
  },
  {
    id: "meatco-fleischfabrik-economic-v2",
    type: "industry",
    parent: "NA-KH",
    coords: [17.0667, -22.5333],
    name: { de: "Meatco Fleischfabrik Windhoek", hu: "Meatco Húsgyár", ro: "Fabrica de carne Meatco", en: "Meatco Factory Windhoek" },
    description: { de: "Der wichtigste fleischverarbeitende Betrieb in Namibia, der hochwertiges Rindfleisch für den Export produziert.", hu: "A legfontosabb húsfeldolgozó üzem Namíbiában, amely kiváló minőségű marhahúst állít elő exportra.", ro: "Cea mai importantă fabrică de procesare a cărnii din Namibia, producând carne de vită de înaltă calitate pentru export.", en: "The main meat processing facility in Namibia, producing high-quality beef for export." },
    facts: {
      de: ["Staatlich unterstützt.", "Exportiert in die EU und nach Asien.", "Höchste Qualitätsstandards.", "Stützt den lokalen Agrarsektor."],
      hu: ["Államilag támogatott.", "Az EU-ba és Ázsiába exportál.", "A legmagasabb minőségi szabványok.", "Támogatja a helyi agrárszektort."],
      ro: ["Sprijinită de stat.", "Exportă în UE și Asia.", "Cele mai înalte standarde de calitate.", "Sprijină sectorul agricol local."],
      en: ["State-supported.", "Exports to the EU and Asia.", "Highest quality standards.", "Supports the local agricultural sector."]
    }
  },
  {
    id: "namibia-brauereien-economic-v2",
    type: "industry",
    parent: "NA-KH",
    coords: [17.0667, -22.5167],
    name: { de: "Namibia Brauereien", hu: "Namíbiai Sörfőzdék", ro: "Berăriile Namibiei", en: "Namibia Breweries Limited" },
    description: { de: "Eine hochmoderne Brauerei in Windhoek, die international ausgezeichnetes Bier nach dem Reinheitsgebot braut.", hu: "Egy rendkívül modern sörfőzde Windhoekban, amely a Reinheitsgebot alapján nemzetközileg elismert sört főz.", ro: "O berărie ultramodernă din Windhoek, care produce bere premiată internațional conform Reinheitsgebot.", en: "A state-of-the-art brewery in Windhoek, brewing internationally awarded beer according to the Reinheitsgebot." },
    facts: {
      de: ["Produziert das berühmte Windhoek Lager.", "Einer der größten Arbeitgeber.", "Nutzt Solarenergie.", "Starker Export in Nachbarländer."],
      hu: ["A híres Windhoek Lager gyártója.", "Az egyik legnagyobb munkaadó.", "Napenergiát használ.", "Erős export a szomszédos országokba."],
      ro: ["Produce faimoasa Windhoek Lager.", "Unul dintre cei mai mari angajatori.", "Folosește energie solară.", "Export puternic în țările vecine."],
      en: ["Produces the famous Windhoek Lager.", "One of the largest employers.", "Uses solar energy.", "Strong export to neighboring countries."]
    }
  },
  {
    id: "ebh-namibia-economic-v2",
    type: "industry",
    parent: "NA-ER",
    coords: [14.5, -22.9333],
    name: { de: "Schiffbau- und Reparaturwerft Walvis Bay", hu: "Walvis Bay Hajógyár", ro: "Șantierul naval Walvis Bay", en: "Walvis Bay Shipyard" },
    description: { de: "Eine wichtige Schiffbau- und Reparaturanlage an der Westküste Afrikas, die die maritime Industrie unterstützt.", hu: "Fontos hajóépítő és -javító létesítmény Afrika nyugati partján, amely a tengeri ipart támogatja.", ro: "O importantă facilitate de construcții și reparații navale pe coasta de vest a Africii, susținând industria maritimă.", en: "A major shipbuilding and repair facility on the west coast of Africa supporting the maritime industry." },
    facts: {
      de: ["Betreibt Schwimmdocks.", "Wartet Ölplattformen und Schiffe.", "Zentrales maritimes Zentrum.", "Bietet spezialisierte Ingenieurdienstleistungen."],
      hu: ["Úszódokkokat üzemeltet.", "Olajfúró tornyokat és hajókat tart karban.", "Központi tengerészeti csomópont.", "Speciális mérnöki szolgáltatásokat nyújt."],
      ro: ["Operează docuri plutitoare.", "Întreține platforme petroliere și nave.", "Centru maritim cheie.", "Oferă servicii de inginerie specializate."],
      en: ["Operates floating docks.", "Maintains oil rigs and vessels.", "Key maritime hub.", "Provides specialized engineering services."]
    }
  },
  {
    id: "namdia-diamantenhandel-economic-v2",
    type: "industry",
    parent: "NA-KH",
    coords: [17.0833, -22.5833],
    name: { de: "Namdia Diamantenhandel", hu: "Namdia Gyémántkereskedelem", ro: "Comerțul cu diamante Namdia", en: "Namdia Diamond Trade" },
    description: { de: "Das staatliche Unternehmen für den Handel und die Bewertung namibischer Diamanten auf dem Weltmarkt.", hu: "Az állami vállalat a namíbiai gyémántok kereskedelmére és értékelésére a világpiacon.", ro: "Compania de stat pentru comerțul și evaluarea diamantelor namibiene pe piața mondială.", en: "The state-owned company for trading and evaluating Namibian diamonds on the global market." },
    facts: {
      de: ["Sitz in Windhoek.", "Fördert die Preisentdeckung.", "Sichert staatliche Einnahmen.", "Verkauft an globale Diamantenschleifer."],
      hu: ["Székhelye Windhoekban.", "Elősegíti az árfelfedezést.", "Biztosítja az állami bevételeket.", "Globális gyémántcsiszolóknak értékesít."],
      ro: ["Sediul în Windhoek.", "Promovează descoperirea prețurilor.", "Asigură venituri statului.", "Vinde șlefuitorilor globali de diamante."],
      en: ["Headquartered in Windhoek.", "Promotes price discovery.", "Secures government revenues.", "Sells to global diamond polishers."]
    }
  },
  {
    id: "dundee-precious-metals-tsumeb-economic-v2",
    type: "industry",
    parent: "NA-OS",
    coords: [17.7, -19.2333],
    name: { de: "Tsumeb Kupferhütte", hu: "Tsumeb Rézkohó", ro: "Topitoria de cupru Tsumeb", en: "Tsumeb Copper Smelter" },
    description: { de: "Eine hochspezialisierte Hütte, die komplexe Kupferkonzentrate aus dem In- und Ausland verarbeitet.", hu: "Egy magasan specializált kohó, amely összetett rézkoncentrátumokat dolgoz fel bel- és külföldről.", ro: "O topitorie extrem de specializată care procesează concentrate complexe de cupru din țară și din străinătate.", en: "A highly specialized smelter processing complex copper concentrates from domestic and international sources." },
    facts: {
      de: ["Betrieben von Dundee Precious Metals.", "Verarbeitet arsenhaltige Erze.", "Produziert Blisterkupfer.", "Wichtige Industrieanlage in Tsumeb."],
      hu: ["A Dundee Precious Metals üzemelteti.", "Arzéntartalmú érceket dolgoz fel.", "Hólyagrézet állít elő.", "Fontos ipari létesítmény Tsumebben."],
      ro: ["Operată de Dundee Precious Metals.", "Procesează minereuri cu conținut de arsenic.", "Produce cupru blister.", "Facilitate industrială importantă în Tsumeb."],
      en: ["Operated by Dundee Precious Metals.", "Processes arsenic-bearing ores.", "Produces blister copper.", "Major industrial facility in Tsumeb."]
    }
  }
];
