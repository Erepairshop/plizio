import type { POI } from "./poi";

export const poiExtraCanadaReliefV2: POI[] = [
  {
    id: "coast-mountains-relief-v2",
    type: "relief",
    parent: "CA-BC",
    coords: [-125.0, 54.0],
    name: { de: "Coast Mountains", hu: "Parti-hegység", ro: "Munții Coastei", en: "Coast Mountains" },
    description: { 
      de: "Ein bedeutendes Gebirge entlang der Pazifikküste Kanadas, das für seine dichten Wälder bekannt ist.", 
      hu: "Jelentős hegylánc Kanada csendes-óceáni partvidékén, mely sűrű erdeiről ismert.", 
      ro: "Un lanț muntos major de-a lungul coastei Pacificului din Canada, cunoscut pentru pădurile sale.", 
      en: "A major mountain range along the Pacific coast of Canada, known for its dense forests." 
    },
    facts: {
      de: ["Erstreckt sich über 1600 km.", "Teil des pazifischen Feuerrings."],
      hu: ["Több mint 1600 km hosszú.", "A csendes-óceáni tűzgyűrű része."],
      ro: ["Se întinde pe peste 1600 km.", "Parte a Cercului de Foc."],
      en: ["Stretches over 1600 km.", "Part of the Pacific Ring of Fire."]
    }
  },
  {
    id: "laurentian-mountains-relief-v2",
    type: "relief",
    parent: "CA-QC",
    coords: [-74.0, 47.0],
    name: { de: "Laurentinische Berge", hu: "Laurentides-hegység", ro: "Munții Laurentian", en: "Laurentian Mountains" },
    description: { 
      de: "Eines der ältesten Gebirge der Welt im südlichen Québec, ideal für Wintersport.", 
      hu: "A világ egyik legrégebbi hegysége Québec déli részén, kiváló téli sportokhoz.", 
      ro: "Unul dintre cei mai vechi munți din lume în sudul Québecului, ideal pentru sporturi de iarnă.", 
      en: "One of the oldest mountain ranges in the world in southern Quebec, ideal for winter sports." 
    },
    facts: {
      de: ["Über eine Milliarde Jahre alt.", "Beliebtes Skigebiet."],
      hu: ["Több mint egymilliárd éves.", "Népszerű síparadicsom."],
      ro: ["Are o vechime de peste un miliard de ani.", "Destinație populară de schi."],
      en: ["Over a billion years old.", "Popular skiing destination."]
    }
  },
  {
    id: "columbia-icefield-relief-v2",
    type: "relief",
    parent: "CA-AB",
    coords: [-117.2, 52.1],
    name: { de: "Columbia-Eisfeld", hu: "Columbia-jégmező", ro: "Câmpul de gheață Columbia", en: "Columbia Icefield" },
    description: { 
      de: "Das größte Eisfeld in den kanadischen Rocky Mountains, gelegen an der kontinentalen Wasserscheide.", 
      hu: "A kanadai Sziklás-hegység legnagyobb jégmezője, a kontinentális vízválasztón fekszik.", 
      ro: "Cel mai mare câmp de gheață din Munții Stâncoși Canadieni, situat pe cumpăna apelor.", 
      en: "The largest icefield in the Canadian Rockies, located along the Continental Divide." 
    },
    facts: {
      de: ["Fläche von etwa 325 km².", "Nährt sechs Hauptgletscher."],
      hu: ["Területe körülbelül 325 km².", "Hat fő gleccsert táplál."],
      ro: ["Suprafață de aproximativ 325 km².", "Alimentează șase ghețari principali."],
      en: ["Area of about 325 sq km.", "Feeds six major glaciers."]
    }
  },
  {
    id: "mackenzie-mountains-relief-v2",
    type: "relief",
    parent: "CA-NT",
    coords: [-128.0, 63.5],
    name: { de: "Mackenzie-Gebirge", hu: "Mackenzie-hegység", ro: "Munții Mackenzie", en: "Mackenzie Mountains" },
    description: { 
      de: "Eine abgelegene Gebirgskette im kanadischen Norden, die eine natürliche Grenze zum Yukon bildet.", 
      hu: "Távoli hegylánc a kanadai északon, mely természetes határt képez Yukon felé.", 
      ro: "Un lanț muntos izolat în nordul Canadei, formând o graniță naturală cu Yukon.", 
      en: "A remote mountain range in the Canadian North, forming a natural boundary with Yukon." 
    },
    facts: {
      de: ["Höchster Gipfel: Mount Keele.", "Reich an Mineralien."],
      hu: ["Legmagasabb csúcsa a Mount Keele.", "Ásványkincsekben gazdag."],
      ro: ["Cel mai înalt vârf: Mount Keele.", "Bogat în minerale."],
      en: ["Highest peak: Mount Keele.", "Rich in mineral deposits."]
    }
  },
  {
    id: "torngat-mountains-relief-v2",
    type: "relief",
    parent: "CA-NL",
    coords: [-64.0, 59.0],
    name: { de: "Torngatberge", hu: "Torngat-hegység", ro: "Munții Torngat", en: "Torngat Mountains" },
    description: { 
      de: "Die höchsten Berge im kanadischen Festland östlich der Rocky Mountains, gelegen in Labrador.", 
      hu: "A kanadai szárazföld legmagasabb hegyei a Sziklás-hegységtől keletre, Labradorban.", 
      ro: "Cei mai înalți munți continentali la est de Munții Stâncoși, în Labrador.", 
      en: "The highest mainland mountains east of the Rockies, located in Labrador." 
    },
    facts: {
      de: ["Höchster Punkt: Mount Caubvick.", "Heimat von Eisbären."],
      hu: ["Legmagasabb pontja a Mount Caubvick.", "Jegesmedvék otthona."],
      ro: ["Cel mai înalt punct: Mount Caubvick.", "Găzduiește urși polari."],
      en: ["Highest point: Mount Caubvick.", "Home to polar bears."]
    }
  },
  {
    id: "mont-tremblant-relief-v2",
    type: "mountain",
    parent: "CA-QC",
    coords: [-74.5, 46.2],
    name: { de: "Mont Tremblant", hu: "Mont Tremblant", ro: "Mont Tremblant", en: "Mont Tremblant" },
    description: { 
      de: "Ein markanter Berg in den Laurentinischen Bergen, bekannt für sein großes Skiresort.", 
      hu: "Kiemelkedő hegy a Laurentides-hegységben, amely nagy síközpontjáról ismert.", 
      ro: "Un munte proeminent în Munții Laurentian, cunoscut pentru marea sa stațiune de schi.", 
      en: "A prominent mountain in the Laurentian Mountains, known for its large ski resort." 
    },
    facts: {
      de: ["Höhe: 875 Meter.", "Liegt in einem Nationalpark."],
      hu: ["Magassága 875 méter.", "Egy nemzeti parkban található."],
      ro: ["Înălțime: 875 metri.", "Situat într-un parc național."],
      en: ["Elevation: 875 meters.", "Located in a national park."]
    }
  },
  {
    id: "canadian-shield-relief-v2",
    type: "relief",
    parent: "CA-ON",
    coords: [-88.0, 52.0],
    name: { de: "Kanadischer Schild", hu: "Kanadai-pajzs", ro: "Scutul Canadian", en: "Canadian Shield" },
    description: { 
      de: "Eine riesige geologische Formation, die fast die Hälfte Kanadas bedeckt und extrem altes Gestein aufweist.", 
      hu: "Hatalmas geológiai képződmény, amely Kanada felét borítja, rendkívül ősi kőzetekkel.", 
      ro: "O vastă formațiune geologică care acoperă jumătate din Canada, cu roci extrem de vechi.", 
      en: "A massive geological shield covered by a thin layer of soil, spanning half of Canada." 
    },
    facts: {
      de: ["Enthält Gestein aus dem Präkambrium.", "Sehr reich an Erzen."],
      hu: ["Prekambriumi kőzeteket tartalmaz.", "Nagyon gazdag ércekben."],
      ro: ["Conține roci din Precambrian.", "Foarte bogat în minereuri."],
      en: ["Contains Precambrian rocks.", "Very rich in metallic ores."]
    }
  },
  {
    id: "mount-garibaldi-relief-v2",
    type: "mountain",
    parent: "CA-BC",
    coords: [-123.0, 49.8],
    name: { de: "Mount Garibaldi", hu: "Garibaldi-hegy", ro: "Muntele Garibaldi", en: "Mount Garibaldi" },
    description: { 
      de: "Ein potenziell aktiver Schichtvulkan in den Coast Mountains von British Columbia.", 
      hu: "Egy potenciálisan aktív rétegvulkán a kanadai Parti-hegységben.", 
      ro: "Un stratovulcan potențial activ în Munții Coastei din British Columbia.", 
      en: "A potentially active stratovolcano in the Coast Mountains of British Columbia." 
    },
    facts: {
      de: ["Höhe: 2678 Meter.", "Letzter Ausbruch vor ca. 10.000 Jahren."],
      hu: ["Magassága 2678 méter.", "Utolsó kitörése kb. 10 000 éve volt."],
      ro: ["Înălțime: 2678 metri.", "Ultima erupție acum 10.000 de ani."],
      en: ["Elevation: 2678 meters.", "Last eruption about 10,000 years ago."]
    }
  },
  {
    id: "mount-thor-relief-v2",
    type: "mountain",
    parent: "CA-NU",
    coords: [-65.3, 66.5],
    name: { de: "Mount Thor", hu: "Thor-hegy", ro: "Muntele Thor", en: "Mount Thor" },
    description: { 
      de: "Ein Berg auf der Baffininsel, berühmt für die höchste vertikale Felswand der Erde.", 
      hu: "Hegy a Baffin-szigeten, mely a Föld legmagasabb függőleges sziklafaláról híres.", 
      ro: "Un munte pe Insula Baffin, faimos pentru cea mai înaltă stâncă verticală din lume.", 
      en: "A mountain on Baffin Island, famous for having Earth's greatest purely vertical drop." 
    },
    facts: {
      de: ["Vertikaler Abfall von 1250 Metern.", "Teil der Baffinberge."],
      hu: ["1250 méteres függőleges letörés.", "A Baffin-hegység része."],
      ro: ["Cădere verticală de 1250 metri.", "Parte a Munților Baffin."],
      en: ["Vertical drop of 1250 meters.", "Part of the Baffin Mountains."]
    }
  },
  {
    id: "mount-rundle-relief-v2",
    type: "mountain",
    parent: "CA-AB",
    coords: [-115.4, 51.1],
    name: { de: "Mount Rundle", hu: "Rundle-hegy", ro: "Muntele Rundle", en: "Mount Rundle" },
    description: { 
      de: "Ein ikonischer, keilförmiger Berg über Banff, der zu den meistfotografierten Gipfeln gehört.", 
      hu: "Egy ikonikus, ék alakú hegy Banff felett, amely a legtöbbet fotózott csúcsok közé tartozik.", 
      ro: "Un munte iconic în formă de pană deasupra orașului Banff, foarte fotografiat.", 
      en: "An iconic, wedge-shaped mountain overlooking Banff, one of the most photographed peaks." 
    },
    facts: {
      de: ["Höhe: 2948 Meter.", "Ein beliebtes Ziel für Kletterer."],
      hu: ["Magassága 2948 méter.", "Népszerű célpont hegymászóknak."],
      ro: ["Înălțime: 2948 metri.", "O destinație populară pentru alpiniști."],
      en: ["Elevation: 2948 meters.", "A popular destination for scramblers."]
    }
  },
  {
    id: "cascade-range-relief-v2",
    type: "relief",
    parent: "CA-BC",
    coords: [-121.0, 49.5],
    name: { de: "Kaskadenkette (Kanada)", hu: "Kaszkád-hegység (Kanada)", ro: "Munții Cascadelor (Canada)", en: "Cascade Range (Canada)" },
    description: { 
      de: "Der nördliche Ausläufer der Kaskadenkette reicht bis ins südliche British Columbia.", 
      hu: "A Kaszkád-hegység északi nyúlványa, amely kiterjed British Columbia déli részére.", 
      ro: "Extensia nordică a Munților Cascadelor ajunge în sudul provinciei British Columbia.", 
      en: "The northern extent of the Cascade Range reaches into southern British Columbia." 
    },
    facts: {
      de: ["Stark vulkanisch geprägt.", "Teil des pazifischen Feuerrings."],
      hu: ["Erősen vulkanikus jellegű.", "A tűzgyűrű része."],
      ro: ["Puternic influențat vulcanic.", "Parte a Cercului de Foc."],
      en: ["Heavily shaped by volcanoes.", "Part of the Ring of Fire."]
    }
  },
  {
    id: "selkirk-mountains-relief-v2",
    type: "relief",
    parent: "CA-BC",
    coords: [-117.5, 50.5],
    name: { de: "Selkirk Mountains", hu: "Selkirk-hegység", ro: "Munții Selkirk", en: "Selkirk Mountains" },
    description: { 
      de: "Eine schroffe Gebirgskette in British Columbia, berühmt für tiefen Schnee und Heliskiing.", 
      hu: "Zord hegylánc British Columbiában, amely mély haváról és a helisízésről híres.", 
      ro: "Un lanț muntos accidentat în British Columbia, renumit pentru zăpada adâncă.", 
      en: "A rugged mountain range in British Columbia, famous for deep snow and heli-skiing." 
    },
    facts: {
      de: ["Höchster Gipfel: Mount Sir Sandford.", "Älter als die Rocky Mountains."],
      hu: ["Legmagasabb csúcs: Mount Sir Sandford.", "Régebbi, mint a Sziklás-hegység."],
      ro: ["Cel mai înalt vârf: Mount Sir Sandford.", "Mai vechi decât Munții Stâncoși."],
      en: ["Highest peak: Mount Sir Sandford.", "Older than the Rocky Mountains."]
    }
  },
  {
    id: "st-elias-mountains-relief-v2",
    type: "relief",
    parent: "CA-YT",
    coords: [-139.0, 60.5],
    name: { de: "Elias-Kette", hu: "Szent Elias-hegység", ro: "Munții Saint Elias", en: "St. Elias Mountains" },
    description: { 
      de: "Das höchste Gebirge Kanadas im Yukon, geprägt von massiven Gletschern und Eisfeldern.", 
      hu: "Kanada legmagasabb hegysége Yukonban, hatalmas gleccserek és jégmezők borítják.", 
      ro: "Cei mai înalți munți din Canada în Yukon, caracterizați prin ghețari masivi.", 
      en: "The highest mountain range in Canada located in Yukon, defined by massive glaciers." 
    },
    facts: {
      de: ["Beherbergt den Mount Logan.", "Größtes Eisfeld außerhalb der Pole."],
      hu: ["Itt található a Mount Logan.", "Legnagyobb jégmező a sarkokon kívül."],
      ro: ["Găzduiește Mount Logan.", "Cel mai mare câmp de gheață subpolar."],
      en: ["Home to Mount Logan.", "Largest non-polar ice field."]
    }
  },
  {
    id: "alberta-badlands-relief-v2",
    type: "relief",
    parent: "CA-AB",
    coords: [-112.5, 51.5],
    name: { de: "Alberta Badlands", hu: "Alberta Badlands", ro: "Badlands din Alberta", en: "Alberta Badlands" },
    description: { 
      de: "Eine wüstenartige Landschaft voller Canyons und Schluchten, bekannt für reiche Dinosaurierfunde.", 
      hu: "Sivatagos, kanyonokkal szabdalt táj, amely gazdag dinoszaurusz-leleteiről ismert.", 
      ro: "Un peisaj deșertic plin de canioane, cunoscut pentru fosilele bogate de dinozauri.", 
      en: "A desert-like landscape of canyons and coulees, renowned for abundant dinosaur fossils." 
    },
    facts: {
      de: ["Heimat des Dinosaur Provincial Park.", "Geprägt von Hoodoos (Erdpyramiden)."],
      hu: ["Itt van a Dinosaur Provincial Park.", "Jellegzetes sziklaoszlopai a hoodoo-k."],
      ro: ["Găzduiește Parcul Dinozaurilor.", "Caracterizat prin coloane de rocă (hoodoo)."],
      en: ["Home to Dinosaur Provincial Park.", "Features iconic hoodoo rock formations."]
    }
  },
  {
    id: "purcell-mountains-relief-v2",
    type: "relief",
    parent: "CA-BC",
    coords: [-116.5, 50.0],
    name: { de: "Purcell Mountains", hu: "Purcell-hegység", ro: "Munții Purcell", en: "Purcell Mountains" },
    description: { 
      de: "Ein Gebirgszug westlich der Rocky Mountains, bekannt für malerische alpine Seen und Granitgipfel.", 
      hu: "Hegylánc a Sziklás-hegységtől nyugatra, festői alpesi tavakkal és gránitcsúcsokkal.", 
      ro: "Un lanț muntos la vest de Munții Stâncoși, cu lacuri alpine pitorești și vârfuri de granit.", 
      en: "A mountain range west of the Rockies, known for scenic alpine lakes and granite spires." 
    },
    facts: {
      de: ["Bugaboo Provincial Park liegt hier.", "Ein Paradies für Bergsteiger."],
      hu: ["Itt található a Bugaboo Park.", "A hegymászók paradicsoma."],
      ro: ["Parcul Bugaboo este situat aici.", "Un paradis pentru alpiniști."],
      en: ["Bugaboo Provincial Park is here.", "A premier mountaineering destination."]
    }
  },
  {
    id: "monashee-mountains-relief-v2",
    type: "relief",
    parent: "CA-BC",
    coords: [-118.5, 51.0],
    name: { de: "Monashee Mountains", hu: "Monashee-hegység", ro: "Munții Monashee", en: "Monashee Mountains" },
    description: { 
      de: "Ein dicht bewaldetes Gebirge in British Columbia, bekannt für reiche Mineralvorkommen.", 
      hu: "Sűrűn erdősült hegység British Columbiában, gazdag ásványkincseiről ismert.", 
      ro: "Un lanț muntos dens împădurit din British Columbia, bogat în minerale.", 
      en: "A heavily forested mountain range in British Columbia, known for rich mineral deposits." 
    },
    facts: {
      de: ["Der Name bedeutet 'Berg des Friedens'.", "Reich an alten Goldminen."],
      hu: ["A név 'béke hegyét' jelent.", "Régi aranybányákban gazdag."],
      ro: ["Numele înseamnă 'Muntele Păcii'.", "Bogat în vechi mine de aur."],
      en: ["Name means 'Mountain of Peace'.", "Rich in historic gold mines."]
    }
  },
  {
    id: "cypress-hills-relief-v2",
    type: "relief",
    parent: "CA-SK",
    coords: [-109.9, 49.6],
    name: { de: "Cypress Hills", hu: "Cypress Hills", ro: "Colinele Cypress", en: "Cypress Hills" },
    description: { 
      de: "Ein markantes Hochplateau, das aus der umliegenden Prärie von Saskatchewan und Alberta herausragt.", 
      hu: "Kiemelkedő magasföld, amely kiemelkedik Saskatchewan és Alberta környező prérijéből.", 
      ro: "Un platou înalt izbitor, care se ridică din preria din Saskatchewan și Alberta.", 
      en: "A striking high plateau rising abruptly above the surrounding prairies of Saskatchewan and Alberta." 
    },
    facts: {
      de: ["Höchster Punkt zwischen Rockies und Labrador.", "War während der Eiszeit eisfrei."],
      hu: ["Legmagasabb pont a Sziklás-hegység és Labrador közt.", "A jégkorszak alatt jégmentes volt."],
      ro: ["Cel mai înalt punct între Stâncoși și Labrador.", "A fost fără gheață în era glaciară."],
      en: ["Highest point between the Rockies and Labrador.", "Remained ice-free during the Ice Age."]
    }
  },
  {
    id: "cariboo-mountains-relief-v2",
    type: "relief",
    parent: "CA-BC",
    coords: [-120.0, 53.0],
    name: { de: "Cariboo Mountains", hu: "Cariboo-hegység", ro: "Munții Cariboo", en: "Cariboo Mountains" },
    description: { 
      de: "Der nördlichste Teil der Columbia Mountains, bekannt für unberührte Wildnis und tiefe Täler.", 
      hu: "A Columbia-hegység legészakibb része, érintetlen vadonról és mély völgyeiről ismert.", 
      ro: "Cea mai nordică parte a Munților Columbia, cunoscută pentru sălbăticia neatinsă.", 
      en: "The northernmost part of the Columbia Mountains, known for pristine wilderness and deep valleys." 
    },
    facts: {
      de: ["Wells Gray Provincial Park liegt hier.", "Große Populationen von Grizzlybären."],
      hu: ["Itt található a Wells Gray Park.", "Nagy grizzlymedve populáció."],
      ro: ["Parcul Wells Gray se află aici.", "Populații mari de urși grizzly."],
      en: ["Wells Gray Provincial Park is here.", "Large populations of grizzly bears."]
    }
  },
  {
    id: "ogilvie-mountains-relief-v2",
    type: "relief",
    parent: "CA-YT",
    coords: [-138.0, 64.5],
    name: { de: "Ogilvie Mountains", hu: "Ogilvie-hegység", ro: "Munții Ogilvie", en: "Ogilvie Mountains" },
    description: { 
      de: "Ein Gebirge im Yukon nördlich von Dawson City, das vom Dempster Highway durchquert wird.", 
      hu: "Hegység Yukonban Dawson Citytől északra, a Dempster Highway szeli át.", 
      ro: "Un lanț muntos în Yukon, la nord de Dawson City, traversat de autostrada Dempster.", 
      en: "A mountain range in Yukon north of Dawson City, intersected by the Dempster Highway." 
    },
    facts: {
      de: ["Bekannt für zerklüftete Kalksteingipfel.", "Heimat des Tombstone Territorial Park."],
      hu: ["Zord mészkőcsúcsairól ismert.", "A Tombstone Park otthona."],
      ro: ["Cunoscut pentru vârfurile aspre de calcar.", "Găzduiește Parcul Tombstone."],
      en: ["Known for jagged limestone peaks.", "Home to Tombstone Territorial Park."]
    }
  },
  {
    id: "baffin-mountains-relief-v2",
    type: "relief",
    parent: "CA-NU",
    coords: [-70.0, 69.0],
    name: { de: "Baffinberge", hu: "Baffin-hegység", ro: "Munții Baffin", en: "Baffin Mountains" },
    description: { 
      de: "Ein eisbedeckter Gebirgszug auf der Baffininsel, der zur Arktischen Kordillere gehört.", 
      hu: "Jéggel borított hegylánc a Baffin-szigeten, az Északi-sarkvidéki Kordillerák része.", 
      ro: "Un lanț muntos acoperit de gheață pe Insula Baffin, parte a Cordilierei Arctice.", 
      en: "An ice-capped mountain range on Baffin Island, forming part of the Arctic Cordillera." 
    },
    facts: {
      de: ["Enthält den Auyuittuq-Nationalpark.", "Eine der unwirtlichsten Regionen."],
      hu: ["Az Auyuittuq Nemzeti Park része.", "A világ egyik legzordabb régiója."],
      ro: ["Include Parcul Național Auyuittuq.", "Una dintre cele mai inospitaliere regiuni."],
      en: ["Contains Auyuittuq National Park.", "One of the most inhospitable regions."]
    }
  },
  {
    id: "chic-choc-mountains-relief-v2",
    type: "relief",
    parent: "CA-QC",
    coords: [-66.0, 48.9],
    name: { de: "Chic-Choc-Berge", hu: "Chic-Chocs-hegység", ro: "Munții Chic-Chocs", en: "Chic-Choc Mountains" },
    description: { 
      de: "Ein stark erodierter Gebirgszug auf der Gaspésie-Halbinsel, Teil der Appalachen.", 
      hu: "Erősen lepusztult hegylánc a Gaspé-félszigeten, az Appalache-hegység része.", 
      ro: "Un lanț muntos puternic erodat pe Peninsula Gaspé, parte a Munților Apalași.", 
      en: "A heavily eroded mountain range on the Gaspé Peninsula, part of the Appalachian Mountains." 
    },
    facts: {
      de: ["Höchster Berg: Mont Jacques-Cartier.", "Heimat von Karibus."],
      hu: ["Legmagasabb hegy: Mont Jacques-Cartier.", "Karibuk otthona."],
      ro: ["Cel mai înalt munte: Mont Jacques-Cartier.", "Habitat pentru caribu."],
      en: ["Highest peak: Mont Jacques-Cartier.", "Home to a caribou herd."]
    }
  },
  {
    id: "mount-sir-donald-relief-v2",
    type: "mountain",
    parent: "CA-BC",
    coords: [-117.4, 51.3],
    name: { de: "Mount Sir Donald", hu: "Sir Donald-hegy", ro: "Muntele Sir Donald", en: "Mount Sir Donald" },
    description: { 
      de: "Ein markanter, pyramidenförmiger Gipfel im Glacier-Nationalpark in British Columbia.", 
      hu: "Egy kiemelkedő, piramis alakú csúcs a Glacier Nemzeti Parkban, British Columbiában.", 
      ro: "Un vârf proeminent, în formă de piramidă, în Parcul Național Glacier din British Columbia.", 
      en: "A prominent, pyramid-shaped peak in Glacier National Park, British Columbia." 
    },
    facts: {
      de: ["Höhe: 3284 Meter.", "Beliebt für klassisches Alpinklettern."],
      hu: ["Magassága 3284 méter.", "Népszerű a klasszikus alpesi hegymászók körében."],
      ro: ["Înălțime: 3284 metri.", "Popular pentru alpinismul clasic."],
      en: ["Elevation: 3284 meters.", "Popular for classic alpine climbing."]
    }
  },
  {
    id: "gros-morne-mountain-relief-v2",
    type: "mountain",
    parent: "CA-NL",
    coords: [-57.8, 49.6],
    name: { de: "Gros Morne Mountain", hu: "Gros Morne-hegy", ro: "Muntele Gros Morne", en: "Gros Morne Mountain" },
    description: { 
      de: "Ein karger, flach abfallender Berg in Neufundland, der durch Gletschereis geformt wurde.", 
      hu: "Kopár, lapos hegy Új-Fundlandon, amelyet jégkorszaki gleccserek formáltak.", 
      ro: "Un munte sterp din Newfoundland, modelat de gheața glaciară.", 
      en: "A barren, flat-topped mountain in Newfoundland, shaped by glacial ice." 
    },
    facts: {
      de: ["Höhe: 806 Meter.", "Teil der Long Range Mountains."],
      hu: ["Magassága 806 méter.", "A Long Range Mountains része."],
      ro: ["Înălțime: 806 metri.", "Parte a Munților Long Range."],
      en: ["Elevation: 806 meters.", "Part of the Long Range Mountains."]
    }
  },
  {
    id: "cascade-mountain-relief-v2",
    type: "mountain",
    parent: "CA-AB",
    coords: [-115.5, 51.2],
    name: { de: "Cascade Mountain", hu: "Cascade-hegy", ro: "Muntele Cascade", en: "Cascade Mountain" },
    description: { 
      de: "Ein massiver Berg, der direkt über der Stadt Banff thront und ein klassisches Postkartenmotiv ist.", 
      hu: "Egy hatalmas hegy, amely közvetlenül Banff városa fölé magasodik; klasszikus képeslap-motívum.", 
      ro: "Un munte masiv care se înalță direct deasupra orașului Banff, un motiv clasic de carte poștală.", 
      en: "A massive mountain towering directly over the town of Banff, a classic postcard view." 
    },
    facts: {
      de: ["Höhe: 2998 Meter.", "Nach einem Wasserfall an der Flanke benannt."],
      hu: ["Magassága 2998 méter.", "Egy, az oldalán lezúduló vízesésről kapta nevét."],
      ro: ["Înălțime: 2998 metri.", "Numit după o cascadă de pe flancul său."],
      en: ["Elevation: 2998 meters.", "Named for a waterfall on its flank."]
    }
  },
  {
    id: "notre-dame-mountains-relief-v2",
    type: "relief",
    parent: "CA-QC",
    coords: [-67.5, 47.5],
    name: { de: "Notre-Dame-Berge", hu: "Notre-Dame-hegység", ro: "Munții Notre-Dame", en: "Notre-Dame Mountains" },
    description: { 
      de: "Ein Teilabschnitt der Appalachen in Québec, der bis zur Gaspésie-Halbinsel reicht.", 
      hu: "Az Appalache-hegység québeci szakasza, amely a Gaspé-félszigetig nyúlik.", 
      ro: "O secțiune a Munților Apalași în Québec, care ajunge până la Peninsula Gaspé.", 
      en: "A portion of the Appalachian Mountains in Quebec, extending to the Gaspé Peninsula." 
    },
    facts: {
      de: ["Entstanden vor über 300 Millionen Jahren.", "Stark von Gletschern abgerundet."],
      hu: ["Több mint 300 millió éve keletkezett.", "Gleccserek által erősen lekerekített."],
      ro: ["Format cu peste 300 de milioane de ani în urmă.", "Rotunjit puternic de ghețari."],
      en: ["Formed over 300 million years ago.", "Heavily rounded by glaciers."]
    }
  }
];
