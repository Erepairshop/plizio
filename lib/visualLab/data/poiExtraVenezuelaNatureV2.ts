import type { POI } from "./poi";

export const poiExtraVenezuelaNatureV2: POI[] = [
  {
    id: "orinoco-river-nature-v2",
    type: "river",
    parent: "VE-Y",
    coords: [-61.3500, 8.5667],
    name: { de: "Orinoco", hu: "Orinoco", ro: "Orinoco", en: "Orinoco River" },
    description: {
      de: "Der Orinoco ist einer der längsten Flüsse Südamerikas und fließt größtenteils durch Venezuela in den Atlantischen Ozean.",
      hu: "Az Orinoco Dél-Amerika egyik leghosszabb folyója, amely nagyrészt Venezuelán keresztül folyik az Atlanti-óceánba.",
      ro: "Orinoco este unul dintre cele mai lungi râuri din America de Sud, curgând în mare parte prin Venezuela spre Oceanul Atlantic.",
      en: "The Orinoco is one of the longest rivers in South America, flowing mostly through Venezuela into the Atlantic Ocean."
    },
    facts: {
      de: ["Über 2.140 km lang.", "Mündet in den Atlantik."],
      hu: ["Több mint 2140 km hosszú.", "Az Atlanti-óceánba torkollik."],
      ro: ["Peste 2.140 km lungime.", "Se varsă în Oceanul Atlantic."],
      en: ["Over 2,140 km long.", "Flows into the Atlantic Ocean."]
    }
  },
  {
    id: "rio-caroni-nature-v2",
    type: "river",
    parent: "VE-F",
    coords: [-62.6667, 8.3500],
    name: { de: "Río Caroní", hu: "Caroní", ro: "Râul Caroní", en: "Caroní River" },
    description: {
      de: "Der Río Caroní ist ein wichtiger Nebenfluss des Orinoco, bekannt für sein dunkles Wasser und die Wasserkraftwerke.",
      hu: "A Caroní az Orinoco fontos mellékfolyója, amely sötét vizéről és a rajta lévő vízerőművekről ismert.",
      ro: "Râul Caroní este un afluent important al fluviului Orinoco, cunoscut pentru apele sale întunecate și hidrocentrale.",
      en: "The Caroní River is a major tributary of the Orinoco, known for its dark waters and hydroelectric dams."
    },
    facts: {
      de: ["Zweitwichtigster Fluss Venezuelas.", "Treibt den Guri-Staudamm an."],
      hu: ["Venezuela második legfontosabb folyója.", "A Guri-gátat táplálja."],
      ro: ["Al doilea râu ca importanță din Venezuela.", "Alimentează barajul Guri."],
      en: ["Second most important river in Venezuela.", "Powers the Guri Dam."]
    }
  },
  {
    id: "rio-apure-nature-v2",
    type: "river",
    parent: "VE-C",
    coords: [-67.4333, 7.6333],
    name: { de: "Río Apure", hu: "Apure-folyó", ro: "Râul Apure", en: "Apure River" },
    description: {
      de: "Der Río Apure fließt durch die Llanos von Venezuela und ist ein bedeutender Zufluss des Orinoco.",
      hu: "Az Apure-folyó a venezuelai Llanos területén folyik keresztül, és az Orinoco jelentős mellékfolyója.",
      ro: "Râul Apure curge prin câmpiile Llanos din Venezuela și este un afluent major al fluviului Orinoco.",
      en: "The Apure River flows through the Llanos of Venezuela and is a major tributary of the Orinoco."
    },
    facts: {
      de: ["Wichtiger Transportweg in den Llanos.", "Über 1.000 km lang."],
      hu: ["Fontos szállítási útvonal a Llanoson.", "Több mint 1000 km hosszú."],
      ro: ["Rută de transport importantă în Llanos.", "Peste 1.000 km lungime."],
      en: ["Important transport route in the Llanos.", "Over 1,000 km long."]
    }
  },
  {
    id: "rio-catatumbo-nature-v2",
    type: "river",
    parent: "VE-V",
    coords: [-71.7333, 9.3333],
    name: { de: "Río Catatumbo", hu: "Catatumbo", ro: "Râul Catatumbo", en: "Catatumbo River" },
    description: {
      de: "Der Fluss mündet in den Maracaibo-See und ist weltweit berühmt für die andauernden Catatumbo-Gewitter.",
      hu: "A folyó a Maracaibo-tóba ömlik, és világszerte ismert a folyamatos Catatumbo-villámlásokról.",
      ro: "Râul se varsă în Lacul Maracaibo și este faimos la nivel mondial pentru furtunile continue Catatumbo.",
      en: "The river flows into Lake Maracaibo and is world-famous for the continuous Catatumbo lightning."
    },
    facts: {
      de: ["Bekannt für ständige Blitze.", "Mündet in den Maracaibo-See."],
      hu: ["Folyamatos villámlásairól ismert.", "A Maracaibo-tóba torkollik."],
      ro: ["Cunoscut pentru fulgerele constante.", "Se varsă în Lacul Maracaibo."],
      en: ["Known for constant lightning.", "Flows into Lake Maracaibo."]
    }
  },
  {
    id: "rio-arauca-nature-v2",
    type: "river",
    parent: "VE-C",
    coords: [-69.4167, 7.3833],
    name: { de: "Río Arauca", hu: "Arauca-folyó", ro: "Râul Arauca", en: "Arauca River" },
    description: {
      de: "Der Río Arauca bildet teilweise die natürliche Grenze zwischen Kolumbien und Venezuela, bevor er in den Orinoco mündet.",
      hu: "Az Arauca-folyó részben természetes határt képez Kolumbia és Venezuela között, mielőtt az Orinocóba ömlik.",
      ro: "Râul Arauca formează parțial granița naturală dintre Columbia și Venezuela înainte de a se vărsa în Orinoco.",
      en: "The Arauca River partially forms the natural border between Colombia and Venezuela before flowing into the Orinoco."
    },
    facts: {
      de: ["Grenzfluss zu Kolumbien.", "Fließt durch die Savanne."],
      hu: ["Határfolyó Kolumbiával.", "A szavannán folyik keresztül."],
      ro: ["Râu de graniță cu Columbia.", "Curge prin savană."],
      en: ["Border river with Colombia.", "Flows through the savanna."]
    }
  },
  {
    id: "rio-meta-nature-v2",
    type: "river",
    parent: "VE-C",
    coords: [-67.4833, 6.2000],
    name: { de: "Río Meta", hu: "Meta-folyó", ro: "Râul Meta", en: "Meta River" },
    description: {
      de: "Der Río Meta ist ein großer Fluss, der die Grenze zwischen Venezuela und Kolumbien markiert und in den Orinoco fließt.",
      hu: "A Meta egy nagy folyó, amely Venezuela és Kolumbia határát jelöli, és az Orinocóba ömlik.",
      ro: "Râul Meta este un râu mare care marchează granița dintre Venezuela și Columbia și se varsă în Orinoco.",
      en: "The Meta River is a major river that marks the border between Venezuela and Colombia, flowing into the Orinoco."
    },
    facts: {
      de: ["Grenzfluss zu Kolumbien.", "Wichtiger Nebenfluss des Orinoco."],
      hu: ["Határfolyó Kolumbiával.", "Az Orinoco fontos mellékfolyója."],
      ro: ["Râu de graniță cu Columbia.", "Afluent important al Orinoco."],
      en: ["Border river with Colombia.", "Major tributary of the Orinoco."]
    }
  },
  {
    id: "rio-caura-nature-v2",
    type: "river",
    parent: "VE-F",
    coords: [-64.9167, 7.6333],
    name: { de: "Río Caura", hu: "Caura", ro: "Râul Caura", en: "Caura River" },
    description: {
      de: "Der Río Caura durchquert dichten tropischen Regenwald im venezolanischen Bundesstaat Bolívar.",
      hu: "A Caura sűrű trópusi esőerdőt szel át a venezuelai Bolívar államban.",
      ro: "Râul Caura traversează o pădure tropicală densă din statul venezuelean Bolívar.",
      en: "The Caura River flows through dense tropical rainforest in the Venezuelan state of Bolívar."
    },
    facts: {
      de: ["Fließt durch den Regenwald.", "Bekannt für unberührte Natur."],
      hu: ["Az esőerdőn folyik keresztül.", "Érintetlen természetéről ismert."],
      ro: ["Curge prin pădurea tropicală.", "Cunoscut pentru natura sa neatinsă."],
      en: ["Flows through the rainforest.", "Known for its pristine nature."]
    }
  },
  {
    id: "rio-ventuari-nature-v2",
    type: "river",
    parent: "VE-Z",
    coords: [-66.9333, 4.0667],
    name: { de: "Río Ventuari", hu: "Ventuari", ro: "Râul Ventuari", en: "Ventuari River" },
    description: {
      de: "Der Ventuari ist der größte Nebenfluss des Orinoco im südlichen Amazonasgebiet Venezuelas.",
      hu: "A Ventuari az Orinoco legnagyobb mellékfolyója Venezuela déli, amazóniai részén.",
      ro: "Ventuari este cel mai mare afluent al fluviului Orinoco din sudul regiunii Amazonas din Venezuela.",
      en: "The Ventuari is the largest tributary of the Orinoco in the southern Amazonas region of Venezuela."
    },
    facts: {
      de: ["Fließt durch Amazonas.", "Stark mäandrierender Fluss."],
      hu: ["Az Amazonas területén folyik.", "Erősen kanyargó folyó."],
      ro: ["Curge prin Amazonas.", "Râu puternic meandrat."],
      en: ["Flows through Amazonas.", "Highly meandering river."]
    }
  },
  {
    id: "pico-bolivar-nature-v2",
    type: "mountain",
    parent: "VE-L",
    coords: [-71.0264, 8.5414],
    name: { de: "Pico Bolívar", hu: "Bolívar-csúcs", ro: "Pico Bolívar", en: "Pico Bolívar" },
    description: {
      de: "Der Pico Bolívar ist mit 4.978 Metern der höchste Berg Venezuelas und Teil der Anden.",
      hu: "A Bolívar-csúcs 4978 méterével Venezuela legmagasabb hegye, és az Andok része.",
      ro: "Pico Bolívar, cu o înălțime de 4.978 metri, este cel mai înalt munte din Venezuela, parte a Anzilor.",
      en: "At 4,978 meters, Pico Bolívar is the highest mountain in Venezuela, part of the Andes."
    },
    facts: {
      de: ["Höchster Berg des Landes.", "Nach Simón Bolívar benannt."],
      hu: ["Az ország legmagasabb hegye.", "Simón Bolívarról nevezték el."],
      ro: ["Cel mai înalt munte din țară.", "Numit după Simón Bolívar."],
      en: ["Highest mountain in the country.", "Named after Simón Bolívar."]
    }
  },
  {
    id: "pico-humboldt-nature-v2",
    type: "mountain",
    parent: "VE-L",
    coords: [-70.9933, 8.5458],
    name: { de: "Pico Humboldt", hu: "Humboldt-csúcs", ro: "Pico Humboldt", en: "Pico Humboldt" },
    description: {
      de: "Der Pico Humboldt ist der zweithöchste Berg Venezuelas und trägt den einzigen verbleibenden Gletscher des Landes.",
      hu: "A Humboldt-csúcs Venezuela második legmagasabb hegye, amely az ország egyetlen megmaradt gleccserét hordozza.",
      ro: "Pico Humboldt este al doilea cel mai înalt munte din Venezuela și găzduiește singurul ghețar rămas din țară.",
      en: "Pico Humboldt is the second highest mountain in Venezuela and holds the country's only remaining glacier."
    },
    facts: {
      de: ["Zweithöchster Berg.", "Besitzt einen schrumpfenden Gletscher."],
      hu: ["Második legmagasabb hegy.", "Egy zsugorodó gleccserrel rendelkezik."],
      ro: ["Al doilea munte ca înălțime.", "Are un ghețar care se micșorează."],
      en: ["Second highest mountain.", "Has a shrinking glacier."]
    }
  },
  {
    id: "monte-roraima-nature-v2",
    type: "mountain",
    parent: "VE-F",
    coords: [-60.7333, 5.1333],
    name: { de: "Monte Roraima", hu: "Roraima-hegy", ro: "Muntele Roraima", en: "Mount Roraima" },
    description: {
      de: "Der Monte Roraima ist ein markanter Tafelberg im Dreiländereck zwischen Venezuela, Brasilien und Guyana.",
      hu: "A Roraima-hegy egy lenyűgöző táblahegy Venezuela, Brazília és Guyana hármashatárán.",
      ro: "Muntele Roraima este un munte masiv cu vârf plat situat la granița dintre Venezuela, Brazilia și Guyana.",
      en: "Mount Roraima is a striking tabletop mountain located at the tripoint of Venezuela, Brazil, and Guyana."
    },
    facts: {
      de: ["Bekannter Tafelberg (Tepui).", "Inspirierte viele Romane."],
      hu: ["Híres táblahegy (tepui).", "Számos regényt ihletett."],
      ro: ["Munte cu vârf plat (Tepui).", "A inspirat multe romane."],
      en: ["Famous tabletop mountain (Tepui).", "Inspired many novels."]
    }
  },
  {
    id: "auyan-tepui-nature-v2",
    type: "mountain",
    parent: "VE-F",
    coords: [-62.5333, 5.9167],
    name: { de: "Auyán-tepui", hu: "Auyán-tepui", ro: "Auyán-tepui", en: "Auyán-tepui" },
    description: {
      de: "Der Auyán-tepui ist einer der größten Tafelberge Venezuelas und der Ursprungsort des berühmten Salto Ángel.",
      hu: "Az Auyán-tepui Venezuela egyik legnagyobb táblahegye, ahonnan a híres Angel-vízesés ered.",
      ro: "Auyán-tepui este unul dintre cei mai mari munți cu vârf plat din Venezuela, de unde izvorăște faimoasa Cascadă Angel.",
      en: "Auyán-tepui is one of the largest tabletop mountains in Venezuela, home to the famous Angel Falls."
    },
    facts: {
      de: ["Heimat des Salto Ángel.", "Bedeutet Teufelsberg."],
      hu: ["Az Angel-vízesés otthona.", "Jelentése Ördög-hegy."],
      ro: ["Acasă pentru Cascada Angel.", "Înseamnă Muntele Diavolului."],
      en: ["Home to Angel Falls.", "Means Devil's Mountain."]
    }
  },
  {
    id: "cerro-autana-nature-v2",
    type: "mountain",
    parent: "VE-Z",
    coords: [-67.4500, 4.8167],
    name: { de: "Cerro Autana", hu: "Cerro Autana", ro: "Cerro Autana", en: "Cerro Autana" },
    description: {
      de: "Der Cerro Autana ist ein spektakulärer Tafelberg im Bundesstaat Amazonas, der für die indigenen Piaroa heilig ist.",
      hu: "A Cerro Autana egy látványos táblahegy Amazonas államban, amely szent hegy a helyi piaroa indiánok számára.",
      ro: "Cerro Autana este un munte cu vârf plat spectaculos din statul Amazonas, sacru pentru populația indigenă Piaroa.",
      en: "Cerro Autana is a spectacular tabletop mountain in Amazonas state, sacred to the indigenous Piaroa people."
    },
    facts: {
      de: ["Heiliger Berg der Piaroa.", "Hat Höhlen in der Bergmitte."],
      hu: ["A piaroák szent hegye.", "Barlangok találhatók a közepén."],
      ro: ["Munte sacru pentru Piaroa.", "Are peșteri în mijlocul muntelui."],
      en: ["Sacred mountain of the Piaroa.", "Has caves in the middle."]
    }
  },
  {
    id: "pico-naiguata-nature-v2",
    type: "mountain",
    parent: "VE-M",
    coords: [-66.7833, 10.5500],
    name: { de: "Pico Naiguatá", hu: "Naiguatá-csúcs", ro: "Pico Naiguatá", en: "Pico Naiguatá" },
    description: {
      de: "Der Pico Naiguatá ist der höchste Berg der venezolanischen Küstenkordillere und bietet Ausblicke auf Caracas und das Meer.",
      hu: "A Naiguatá-csúcs a venezuelai parti hegység legmagasabb pontja, kilátással Caracasra és a tengerre.",
      ro: "Pico Naiguatá este cel mai înalt munte din cordiliera de coastă a Venezuelei, oferind vedere la Caracas și la mare.",
      en: "Pico Naiguatá is the highest mountain of the Venezuelan Coastal Range, offering views of Caracas and the sea."
    },
    facts: {
      de: ["Nahe der Hauptstadt Caracas.", "Höhe von 2.765 Metern."],
      hu: ["Közel a fővároshoz, Caracashoz.", "Magassága 2765 méter."],
      ro: ["Aproape de capitala Caracas.", "Are o înălțime de 2.765 metri."],
      en: ["Close to the capital Caracas.", "Height of 2,765 meters."]
    }
  },
  {
    id: "kukenan-nature-v2",
    type: "mountain",
    parent: "VE-F",
    coords: [-60.8500, 5.2167],
    name: { de: "Kukenan", hu: "Kukenan", ro: "Kukenan", en: "Kukenan" },
    description: {
      de: "Der Kukenan ist ein Tepui neben dem Monte Roraima, bekannt für seine schweren Besteigungsbedingungen und Wasserfälle.",
      hu: "A Kukenan egy tepui a Roraima-hegy mellett, amely híres nehéz mászási körülményeiről és vízeséseiről.",
      ro: "Kukenan este un tepui situat lângă Muntele Roraima, cunoscut pentru dificultatea escaladării și cascadele sale.",
      en: "Kukenan is a tepui next to Mount Roraima, known for its difficult climbing conditions and waterfalls."
    },
    facts: {
      de: ["Liegt nahe Roraima.", "Gilt als schwer besteigbar."],
      hu: ["A Roraima közelében fekszik.", "Nehezen mászható hegy."],
      ro: ["Situat lângă Roraima.", "Considerat greu de escaladat."],
      en: ["Located near Roraima.", "Considered difficult to climb."]
    }
  },
  {
    id: "cerro-sarisarinama-nature-v2",
    type: "mountain",
    parent: "VE-F",
    coords: [-64.3333, 4.4167],
    name: { de: "Cerro Sarisariñama", hu: "Cerro Sarisariñama", ro: "Cerro Sarisariñama", en: "Cerro Sarisariñama" },
    description: {
      de: "Dieser Tepui im Bundesstaat Bolívar ist weltberühmt für seine riesigen, kreisrunden Dolinen im dichten Wald.",
      hu: "Ez a Bolívar államban található tepui világhírű a sűrű erdőben megbúvó hatalmas, kör alakú víznyelőiről.",
      ro: "Acest tepui din statul Bolívar este faimos în întreaga lume pentru dolinele sale uriașe, circulare, aflate în pădurea deasă.",
      en: "This tepui in Bolívar state is world-famous for its massive, perfectly circular sinkholes in the dense forest."
    },
    facts: {
      de: ["Besitzt riesige Dolinen.", "Schwer zugängliches Gebiet."],
      hu: ["Hatalmas víznyelőkkel rendelkezik.", "Nehezen megközelíthető terület."],
      ro: ["Are doline uriașe.", "Zonă greu accesibilă."],
      en: ["Features massive sinkholes.", "Hard to reach area."]
    }
  },
  {
    id: "maracaibo-see-nature-v2",
    type: "lake",
    parent: "VE-V",
    coords: [-71.6000, 9.8000],
    name: { de: "Maracaibo-See", hu: "Maracaibo-tó", ro: "Lacul Maracaibo", en: "Lake Maracaibo" },
    description: {
      de: "Der Maracaibo-See ist eine riesige Bucht in Venezuela und gilt als der größte See Südamerikas.",
      hu: "A Maracaibo-tó egy hatalmas öböl Venezuelában, amelyet Dél-Amerika legnagyobb tavának tartanak.",
      ro: "Lacul Maracaibo este un golf uriaș din Venezuela și este considerat cel mai mare lac din America de Sud.",
      en: "Lake Maracaibo is a massive tidal bay in Venezuela and is considered the largest lake in South America."
    },
    facts: {
      de: ["Größter See Südamerikas.", "Reich an Erdölvorkommen."],
      hu: ["Dél-Amerika legnagyobb tava.", "Kőolajban rendkívül gazdag."],
      ro: ["Cel mai mare lac din America de Sud.", "Bogat în zăcăminte de petrol."],
      en: ["Largest lake in South America.", "Rich in oil reserves."]
    }
  },
  {
    id: "valencia-see-nature-v2",
    type: "lake",
    parent: "VE-G",
    coords: [-67.7333, 10.1833],
    name: { de: "Valencia-See", hu: "Valencia-tó", ro: "Lacul Valencia", en: "Lake Valencia" },
    description: {
      de: "Der Valencia-See ist der zweitgrößte Süßwassersee in Venezuela, umgeben von bedeutenden landwirtschaftlichen Flächen.",
      hu: "A Valencia-tó Venezuela második legnagyobb édesvizű tava, amelyet fontos mezőgazdasági területek öveznek.",
      ro: "Lacul Valencia este al doilea lac cu apă dulce ca mărime din Venezuela, înconjurat de importante zone agricole.",
      en: "Lake Valencia is the second largest freshwater lake in Venezuela, surrounded by significant agricultural lands."
    },
    facts: {
      de: ["Zweitgrößter See des Landes.", "Liegt in einem Talbasin."],
      hu: ["Az ország második legnagyobb tava.", "Egy völgyben helyezkedik el."],
      ro: ["Al doilea lac ca mărime din țară.", "Situat într-un bazin de vale."],
      en: ["Second largest lake in the country.", "Located in a valley basin."]
    }
  },
  {
    id: "guri-stausee-nature-v2",
    type: "lake",
    parent: "VE-F",
    coords: [-62.8667, 7.7667],
    name: { de: "Guri-Stausee", hu: "Guri-víztározó", ro: "Lacul de acumulare Guri", en: "Guri Reservoir" },
    description: {
      de: "Der Guri-Stausee am Río Caroní ist einer der größten Stauseen der Welt und zentral für Venezuelas Stromversorgung.",
      hu: "A Caroní folyón lévő Guri-víztározó a világ egyik legnagyobbja, és központi szerepet játszik Venezuela áramellátásában.",
      ro: "Lacul de acumulare Guri de pe râul Caroní este unul dintre cele mai mari din lume și este vital pentru alimentarea cu energie a Venezuelei.",
      en: "The Guri Reservoir on the Caroní River is one of the world's largest, crucial for Venezuela's power supply."
    },
    facts: {
      de: ["Einer der flächengrößten Stauseen.", "Wichtige Energiequelle."],
      hu: ["Az egyik legnagyobb területű víztározó.", "Fontos energiaforrás."],
      ro: ["Unul dintre cele mai mari lacuri de acumulare.", "Sursă importantă de energie."],
      en: ["One of the largest reservoirs by area.", "Important source of energy."]
    }
  },
  {
    id: "macagua-stausee-nature-v2",
    type: "lake",
    parent: "VE-F",
    coords: [-62.6667, 8.3000],
    name: { de: "Macagua-Stausee", hu: "Macagua-víztározó", ro: "Lacul de acumulare Macagua", en: "Macagua Reservoir" },
    description: {
      de: "Dieser Stausee befindet sich im Stadtgebiet von Ciudad Guayana und ist Teil des Wasserkraftkomplexes am Río Caroní.",
      hu: "Ez a víztározó Ciudad Guayana városának területén fekszik, és a Caroní folyó vízerőműrendszerének része.",
      ro: "Acest lac de acumulare se află în orașul Ciudad Guayana și face parte din complexul hidroenergetic de pe râul Caroní.",
      en: "This reservoir is located within Ciudad Guayana and is part of the hydroelectric complex on the Caroní River."
    },
    facts: {
      de: ["Teil des Caroní-Kraftwerkssystems.", "Liegt direkt an einer Großstadt."],
      hu: ["A Caroní erőműrendszerének része.", "Közvetlenül egy nagyváros mellett van."],
      ro: ["Parte a sistemului de pe Caroní.", "Situat direct lângă un oraș mare."],
      en: ["Part of the Caroní dam system.", "Located right next to a large city."]
    }
  },
  {
    id: "isla-margarita-nature-v2",
    type: "island",
    parent: "VE-O",
    coords: [-63.9167, 10.9833],
    name: { de: "Isla Margarita", hu: "Margarita-sziget", ro: "Insula Margarita", en: "Margarita Island" },
    description: {
      de: "Die Isla Margarita ist Venezuelas größte Insel in der Karibik und ein beliebtes Ziel für Urlauber.",
      hu: "A Margarita-sziget Venezuela legnagyobb karib-tengeri szigete, és rendkívül népszerű a nyaralók körében.",
      ro: "Insula Margarita este cea mai mare insulă venezueleană din Caraibe și o destinație populară pentru turiști.",
      en: "Margarita Island is Venezuela's largest Caribbean island and a highly popular destination for holidaymakers."
    },
    facts: {
      de: ["Größte Insel Venezuelas.", "Bekannt für schöne Strände."],
      hu: ["Venezuela legnagyobb szigete.", "Gyönyörű strandjairól ismert."],
      ro: ["Cea mai mare insulă din Venezuela.", "Cunoscută pentru plajele frumoase."],
      en: ["Largest island of Venezuela.", "Known for beautiful beaches."]
    }
  },
  {
    id: "isla-de-coche-nature-v2",
    type: "island",
    parent: "VE-O",
    coords: [-63.9500, 10.7667],
    name: { de: "Isla de Coche", hu: "Coche-sziget", ro: "Insula Coche", en: "Coche Island" },
    description: {
      de: "Die Isla de Coche ist eine kleine, trockene Insel südlich der Isla Margarita, bekannt für ihren weißen Sand.",
      hu: "A Coche-sziget egy kicsi, száraz sziget a Margarita-szigettől délre, amely fehér homokjáról ismert.",
      ro: "Insula Coche este o insulă mică și aridă la sud de Insula Margarita, renumită pentru nisipul său alb.",
      en: "Coche Island is a small, arid island south of Margarita Island, famous for its white sand."
    },
    facts: {
      de: ["Liegt neben der Isla Margarita.", "Ideal zum Kitesurfen."],
      hu: ["A Margarita-sziget mellett fekszik.", "Kiteszörfözésre ideális."],
      ro: ["Situată lângă Insula Margarita.", "Ideală pentru kitesurfing."],
      en: ["Located next to Margarita Island.", "Ideal for kitesurfing."]
    }
  },
  {
    id: "isla-cubagua-nature-v2",
    type: "island",
    parent: "VE-O",
    coords: [-64.1833, 10.8167],
    name: { de: "Isla Cubagua", hu: "Cubagua-sziget", ro: "Insula Cubagua", en: "Cubagua Island" },
    description: {
      de: "Cubagua ist die kleinste der drei Inseln des Bundesstaates Nueva Esparta und hat eine reiche Perlentaucher-Geschichte.",
      hu: "Cubagua Nueva Esparta állam három szigete közül a legkisebb, amely gazdag gyöngyhalászati múlttal rendelkezik.",
      ro: "Cubagua este cea mai mică dintre cele trei insule din statul Nueva Esparta și are o istorie bogată în scufundări după perle.",
      en: "Cubagua is the smallest of the three islands of Nueva Esparta state, holding a rich history of pearl diving."
    },
    facts: {
      de: ["Ehemaliges Zentrum der Perlenfischerei.", "Sehr geringe Bevölkerung."],
      hu: ["Egykori gyöngyhalászati központ.", "Nagyon alacsony lakosságszám."],
      ro: ["Fost centru de pescuit de perle.", "Populație foarte redusă."],
      en: ["Former pearl diving center.", "Very low population."]
    }
  },
  {
    id: "isla-la-tortuga-nature-v2",
    type: "island",
    parent: "VE-W",
    coords: [-65.3167, 10.9333],
    name: { de: "Isla La Tortuga", hu: "Tortuga-sziget", ro: "Insula La Tortuga", en: "La Tortuga Island" },
    description: {
      de: "Die Isla La Tortuga ist eine unbewohnte karibische Insel, die für ihre unberührten Korallenriffe bekannt ist.",
      hu: "A Tortuga-sziget egy lakatlan karib-tengeri sziget, amely érintetlen korallzátonyairól ismert.",
      ro: "Insula La Tortuga este o insulă nelocuită din Caraibe, renumită pentru recifele sale de corali intacte.",
      en: "La Tortuga Island is an uninhabited Caribbean island known for its pristine coral reefs."
    },
    facts: {
      de: ["Zweitgrößte Insel Venezuelas.", "Praktisch unbewohnt."],
      hu: ["Venezuela második legnagyobb szigete.", "Gyakorlatilag lakatlan."],
      ro: ["A doua insulă ca mărime din Venezuela.", "Practic nelocuită."],
      en: ["Second largest island of Venezuela.", "Practically uninhabited."]
    }
  },
  {
    id: "los-roques-nature-v2",
    type: "island",
    parent: "VE-W",
    coords: [-66.7500, 11.8500],
    name: { de: "Los Roques", hu: "Los Roques", ro: "Los Roques", en: "Los Roques" },
    description: {
      de: "Der Los-Roques-Archipel ist ein Nationalpark, der für sein kristallklares Wasser und seine Meeresbiologie berühmt ist.",
      hu: "A Los Roques szigetcsoport egy nemzeti park, amely kristálytiszta vizéről és tengerbiológiájáról híres.",
      ro: "Arhipelagul Los Roques este un parc național faimos pentru apele sale cristaline și biologia marină.",
      en: "The Los Roques archipelago is a national park famous for its crystal-clear waters and marine biology."
    },
    facts: {
      de: ["Ist ein Nationalpark.", "Besteht aus über 300 Inseln."],
      hu: ["Nemzeti park státuszú.", "Több mint 300 szigetből áll."],
      ro: ["Este un parc național.", "Format din peste 300 de insule."],
      en: ["Is a National Park.", "Consists of over 300 islands."]
    }
  },
  {
    id: "isla-la-orchila-nature-v2",
    type: "island",
    parent: "VE-W",
    coords: [-66.1667, 11.8000],
    name: { de: "Isla La Orchila", hu: "Orchila-sziget", ro: "Insula La Orchila", en: "La Orchila Island" },
    description: {
      de: "La Orchila ist eine Insel und ein Militärstützpunkt im Karibischen Meer vor der venezolanischen Küste.",
      hu: "Az Orchila egy sziget és katonai bázis a Karib-tengeren, a venezuelai partok mentén.",
      ro: "La Orchila este o insulă și o bază militară în Marea Caraibelor, în largul coastei Venezuelei.",
      en: "La Orchila is an island and military base in the Caribbean Sea off the Venezuelan coast."
    },
    facts: {
      de: ["Dient als Militärstützpunkt.", "Tourismus ist dort eingeschränkt."],
      hu: ["Katonai bázisként szolgál.", "A turizmus korlátozott."],
      ro: ["Servește ca bază militară.", "Turismul este restricționat."],
      en: ["Serves as a military base.", "Tourism is restricted there."]
    }
  },
  {
    id: "isla-de-aves-nature-v2",
    type: "island",
    parent: "VE-W",
    coords: [-63.6167, 15.6667],
    name: { de: "Isla de Aves", hu: "Madár-sziget", ro: "Insula Aves", en: "Aves Island" },
    description: {
      de: "Die winzige Isla de Aves in der Karibik ist ein wichtiges Schutzgebiet für die Eiablage der Grünen Meeresschildkröte.",
      hu: "Az apró Madár-sziget a Karib-tengeren a zöld tengeri teknősök fontos tojásrakó védett területe.",
      ro: "Micuța insulă Aves din Caraibe este o rezervație importantă pentru depunerea ouălor de către broaștele țestoase verzi.",
      en: "The tiny Aves Island in the Caribbean is a critical nesting sanctuary for the green sea turtle."
    },
    facts: {
      de: ["Wichtig für Meeresschildkröten.", "Sehr entlegen in der Karibik."],
      hu: ["Fontos a tengeri teknősök számára.", "Nagyon elszigetelt a Karib-tengeren."],
      ro: ["Important pentru țestoasele marine.", "Foarte izolată în Caraibe."],
      en: ["Important for sea turtles.", "Very remote in the Caribbean."]
    }
  },
  {
    id: "canaima-nationalpark-nature-v2",
    type: "forest",
    parent: "VE-F",
    coords: [-62.8500, 5.9667],
    name: { de: "Canaima-Nationalpark", hu: "Canaima Nemzeti Park", ro: "Parcul Național Canaima", en: "Canaima National Park" },
    description: {
      de: "Der Canaima-Nationalpark umfasst gewaltige Tafelberge, dichte Regenwälder und faszinierende Wasserfälle in Südvenezuela.",
      hu: "A Canaima Nemzeti Park lenyűgöző táblahegyeket, sűrű esőerdőket és vízeséseket foglal magában Dél-Venezuelában.",
      ro: "Parcul Național Canaima include munți cu vârf plat impresionanți, păduri tropicale dense și cascade în sudul Venezuelei.",
      en: "Canaima National Park features massive tabletop mountains, dense rainforests, and mesmerizing waterfalls in southern Venezuela."
    },
    facts: {
      de: ["UNESCO-Weltnaturerbe.", "Heimat zahlreicher Tepuis."],
      hu: ["UNESCO Világörökség része.", "Számos tepui otthona."],
      ro: ["Patrimoniu Mondial UNESCO.", "Găzduiește numeroși tepui."],
      en: ["UNESCO World Heritage Site.", "Home to numerous tepuis."]
    }
  },
  {
    id: "henri-pittier-nationalpark-nature-v2",
    type: "forest",
    parent: "VE-D",
    coords: [-67.5833, 10.3500],
    name: { de: "Henri-Pittier-Nationalpark", hu: "Henri Pittier Nemzeti Park", ro: "Parcul Național Henri Pittier", en: "Henri Pittier National Park" },
    description: {
      de: "Als ältester Nationalpark des Landes schützt er eine einzigartige Vielfalt an Vögeln und Nebelwäldern an der Küste.",
      hu: "Az ország legrégebbi nemzeti parkjaként a tengerparti köderdők és madárfajok egyedülálló sokféleségét védi.",
      ro: "Fiind cel mai vechi parc național din țară, protejează o diversitate unică de păsări și păduri tropicale pe coastă.",
      en: "As the country's oldest national park, it protects a unique diversity of birds and cloud forests along the coast."
    },
    facts: {
      de: ["Ältester Nationalpark Venezuelas.", "Berühmt für Vogelvielfalt."],
      hu: ["Venezuela legrégebbi nemzeti parkja.", "Madárvilágáról híres."],
      ro: ["Cel mai vechi parc național din Venezuela.", "Faimos pentru diversitatea păsărilor."],
      en: ["Venezuela's oldest national park.", "Famous for bird diversity."]
    }
  },
  {
    id: "golf-von-venezuela-nature-v2",
    type: "sea",
    parent: "VE-V",
    coords: [-71.2500, 11.5000],
    name: { de: "Golf von Venezuela", hu: "Venezuelai-öböl", ro: "Golful Venezuelei", en: "Gulf of Venezuela" },
    description: {
      de: "Der Golf von Venezuela ist eine große Meeresbucht in der Karibik, die den Maracaibo-See mit dem offenen Ozean verbindet.",
      hu: "A Venezuelai-öböl egy nagy tengeröböl a Karib-tengeren, amely a Maracaibo-tavat köti össze a nyílt óceánnal.",
      ro: "Golful Venezuelei este un golf mare din Caraibe care leagă Lacul Maracaibo de oceanul deschis.",
      en: "The Gulf of Venezuela is a large bay in the Caribbean Sea that connects Lake Maracaibo to the open ocean."
    },
    facts: {
      de: ["Verbindet Meer und Maracaibo-See.", "Wichtig für die Schifffahrt."],
      hu: ["Összeköti a tengert a Maracaibo-tóval.", "Fontos a hajózás számára."],
      ro: ["Leagă marea de Lacul Maracaibo.", "Important pentru navigație."],
      en: ["Connects sea and Lake Maracaibo.", "Important for shipping."]
    }
  }
];
