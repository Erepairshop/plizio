import type { POI } from "./poi";

export const poiExtraColombiaNatureV2: POI[] = [
  {
    id: "amazon-river-colombia-nature-v2",
    type: "river",
    parent: "CO-AMA",
    coords: [-69.9431, -4.2158],
    name: { de: "Amazonas (Kolumbien)", hu: "Amazonas (Kolumbia)", ro: "Fluviul Amazon (Columbia)", en: "Amazon River (Colombia)" },
    description: { de: "Der wasserreichste Fluss der Erde, der durch den kolumbianischen Regenwald fließt.", hu: "A Föld legbővizűbb folyója, mely a kolumbiai esőerdőn is keresztülfolyik.", ro: "Cel mai voluminos fluviu din lume, care curge prin pădurea tropicală columbiană.", en: "The most voluminous river on Earth, flowing through the Colombian rainforest." },
    facts: {
      de: ["Fließt bei Leticia durch Kolumbien.", "Wichtiger Lebensraum für rosa Flussdelfine."],
      hu: ["Leticia közelében folyik át Kolumbián.", "A rózsaszín folyamidelfinek fontos élőhelye."],
      ro: ["Trece prin Columbia în apropiere de Leticia.", "Habitat important pentru delfinii de râu roz."],
      en: ["Flows through Colombia near Leticia.", "Important habitat for pink river dolphins."]
    }
  },
  {
    id: "orinoco-river-colombia-nature-v2",
    type: "river",
    parent: "CO-VID",
    coords: [-67.8105, 5.0667],
    name: { de: "Orinoco", hu: "Orinoco", ro: "Fluviul Orinoco", en: "Orinoco River" },
    description: { de: "Einer der längsten Flüsse Südamerikas, der einen Teil der Grenze zwischen Kolumbien und Venezuela bildet.", hu: "Dél-Amerika egyik leghosszabb folyója, mely részben határt képez Kolumbia és Venezuela között.", ro: "Unul dintre cele mai lungi fluvii din America de Sud, formând o parte din granița dintre Columbia și Venezuela.", en: "One of the longest rivers in South America, forming part of the border between Colombia and Venezuela." },
    facts: {
      de: ["Länge: ca. 2.140 km.", "Wichtiges Ökosystem für Piranhas."],
      hu: ["Hossza: kb. 2140 km.", "A piráják fontos ökoszisztémája."],
      ro: ["Lungime: aproximativ 2.140 km.", "Ecosistem important pentru piranha."],
      en: ["Length: about 2,140 km.", "Important ecosystem for piranhas."]
    }
  },
  {
    id: "magdalena-river-nature-v2",
    type: "river",
    parent: "CO-MAG",
    coords: [-74.8333, 11.1],
    name: { de: "Río Magdalena", hu: "Magdalena folyó", ro: "Râul Magdalena", en: "Magdalena River" },
    description: { de: "Der wichtigste Strom Kolumbiens, der das Land von Süden nach Norden durchquert.", hu: "Kolumbia legfontosabb folyója, amely délről északra szeli át az országot.", ro: "Cel mai important râu al Columbiei, care traversează țara de la sud la nord.", en: "The principal river of Colombia, crossing the country from south to north." },
    facts: {
      de: ["Länge: 1.528 km.", "Mündet ins Karibische Meer."],
      hu: ["Hossza: 1528 km.", "A Karib-tengerbe torkollik."],
      ro: ["Lungime: 1.528 km.", "Se varsă în Marea Caraibelor."],
      en: ["Length: 1,528 km.", "Flows into the Caribbean Sea."]
    }
  },
  {
    id: "cauca-river-nature-v2",
    type: "river",
    parent: "CO-VAC",
    coords: [-74.6756, 8.8833],
    name: { de: "Río Cauca", hu: "Cauca folyó", ro: "Râul Cauca", en: "Cauca River" },
    description: { de: "Der zweitwichtigste Fluss Kolumbiens, eingebettet zwischen der West- und Zentralkordillere.", hu: "Kolumbia második legfontosabb folyója a Nyugati- és a Középső-Kordillerák között.", ro: "Al doilea cel mai important râu din Columbia, situat între Cordiliera Centrală și cea de Vest.", en: "The second most important river in Colombia, located between the Western and Central ranges." },
    facts: {
      de: ["Fließt in den Río Magdalena.", "Länge: 1.350 km."],
      hu: ["A Magdalena folyóba torkollik.", "Hossza: 1350 km."],
      ro: ["Se varsă în râul Magdalena.", "Lungime: 1.350 km."],
      en: ["Flows into the Magdalena River.", "Length: 1,350 km."]
    }
  },
  {
    id: "atrato-river-nature-v2",
    type: "river",
    parent: "CO-CHO",
    coords: [-76.8167, 8.0167],
    name: { de: "Río Atrato", hu: "Atrato folyó", ro: "Râul Atrato", en: "Atrato River" },
    description: { de: "Ein wasserreicher Fluss im Westen Kolumbiens, der im Chocó-Gebiet fließt.", hu: "Bővizű folyó Kolumbia nyugati részén, amely a Chocó régióban folyik.", ro: "Un râu cu debit mare din vestul Columbiei, curgând prin regiunea Chocó.", en: "A high-volume river in western Colombia, flowing through the Chocó region." },
    facts: {
      de: ["Mündet in den Golf von Urabá.", "Eines der feuchtesten Gebiete der Erde."],
      hu: ["Az Urabá-öbölbe torkollik.", "A Föld egyik legcsapadékosabb területe."],
      ro: ["Se varsă în Golful Urabá.", "Una dintre cele mai umede zone de pe Pământ."],
      en: ["Flows into the Gulf of Urabá.", "One of the wettest areas on Earth."]
    }
  },
  {
    id: "guaviare-river-nature-v2",
    type: "river",
    parent: "CO-GUV",
    coords: [-67.8, 4.05],
    name: { de: "Río Guaviare", hu: "Guaviare folyó", ro: "Râul Guaviare", en: "Guaviare River" },
    description: { de: "Ein bedeutender Nebenfluss des Orinoco, der die Grenze zwischen Savanne und Amazonas-Regenwald markiert.", hu: "Az Orinoco egyik jelentős mellékfolyója, mely a szavanna és az amazonasi esőerdő határát jelzi.", ro: "Un afluent major al râului Orinoco, marcând granița dintre savană și pădurea amazoniană.", en: "A major tributary of the Orinoco, marking the boundary between the savanna and the Amazon rainforest." },
    facts: {
      de: ["Länge: 1.497 km.", "Entsteht durch den Zusammenfluss von Ariari und Guayabero."],
      hu: ["Hossza: 1497 km.", "Az Ariari és a Guayabero összefolyásával jön létre."],
      ro: ["Lungime: 1.497 km.", "Format prin confluența râurilor Ariari și Guayabero."],
      en: ["Length: 1,497 km.", "Formed by the confluence of the Ariari and Guayabero rivers."]
    }
  },
  {
    id: "meta-river-nature-v2",
    type: "river",
    parent: "CO-MET",
    coords: [-67.7917, 6.1953],
    name: { de: "Río Meta", hu: "Meta folyó", ro: "Râul Meta", en: "Meta River" },
    description: { de: "Ein großer Fluss in den kolumbianischen Ebenen (Llanos), der in den Orinoco mündet.", hu: "Nagy folyó a kolumbiai síkságokon (Llanos), amely az Orinocóba ömlik.", ro: "Un mare râu din câmpiile columbiene (Llanos) care se varsă în Orinoco.", en: "A large river in the Colombian plains (Llanos) that flows into the Orinoco." },
    facts: {
      de: ["Wichtige Transportroute in Ostkolumbien.", "Bildet streckenweise die Grenze zu Venezuela."],
      hu: ["Fontos szállítási útvonal Kelet-Kolumbiában.", "Szakaszosan a venezuelai határt alkotja."],
      ro: ["Rută importantă de transport în estul Columbiei.", "Formează parțial granița cu Venezuela."],
      en: ["Important transport route in eastern Colombia.", "Forms part of the border with Venezuela."]
    }
  },
  {
    id: "putumayo-river-nature-v2",
    type: "river",
    parent: "CO-PUT",
    coords: [-68.8753, -2.8533],
    name: { de: "Río Putumayo", hu: "Putumayo folyó", ro: "Râul Putumayo", en: "Putumayo River" },
    description: { de: "Ein Fluss im Amazonasbecken, der größtenteils die südliche Grenze Kolumbiens bildet.", hu: "Folyó az Amazonas-medencében, amely jórészt Kolumbia déli határát alkotja.", ro: "Un râu din bazinul Amazonului, care formează o mare parte din granița sudică a Columbiei.", en: "A river in the Amazon basin that forms much of Colombia's southern border." },
    facts: {
      de: ["Trennt Kolumbien von Peru und Ecuador.", "Fließt in den Amazonas."],
      hu: ["Elválasztja Kolumbiát Perutól és Ecuadortól.", "Az Amazonasba torkollik."],
      ro: ["Separă Columbia de Peru și Ecuador.", "Se varsă în fluviul Amazon."],
      en: ["Separates Colombia from Peru and Ecuador.", "Flows into the Amazon River."]
    }
  },
  {
    id: "caqueta-river-nature-v2",
    type: "river",
    parent: "CO-CAQ",
    coords: [-69.6542, -1.2333],
    name: { de: "Río Caquetá", hu: "Caquetá folyó", ro: "Râul Caquetá", en: "Caquetá River" },
    description: { de: "Ein gewaltiger Amazonas-Nebenfluss, der in Brasilien als Japurá bekannt ist.", hu: "Egy hatalmas amazonasi mellékfolyó, amelyet Brazíliában Japurá néven ismernek.", ro: "Un afluent major al Amazonului, cunoscut sub numele de Japurá în Brazilia.", en: "A massive Amazon tributary, known in Brazil as the Japurá River." },
    facts: {
      de: ["Entspringt in den kolumbianischen Anden.", "Durchquert dichten tropischen Regenwald."],
      hu: ["A kolumbiai Andokban ered.", "Sűrű trópusi esőerdőket szel át."],
      ro: ["Izvorăște din Anzii columbieni.", "Traversează păduri tropicale dense."],
      en: ["Rises in the Colombian Andes.", "Crosses dense tropical rainforests."]
    }
  },
  {
    id: "pico-cristobal-colon-nature-v2",
    type: "mountain",
    parent: "CO-MAG",
    coords: [-73.6872, 10.8383],
    name: { de: "Pico Cristóbal Colón", hu: "Pico Cristóbal Colón", ro: "Pico Cristóbal Colón", en: "Pico Cristóbal Colón" },
    description: { de: "Der höchste Berg Kolumbiens, gelegen in der Sierra Nevada de Santa Marta nahe der Karibikküste.", hu: "Kolumbia legmagasabb hegye, mely a Karib-tenger partjánál fekvő Sierra Nevada de Santa Marta hegységben található.", ro: "Cel mai înalt munte din Columbia, situat în Sierra Nevada de Santa Marta, aproape de coasta Caraibelor.", en: "The highest mountain in Colombia, located in the Sierra Nevada de Santa Marta near the Caribbean coast." },
    facts: {
      de: ["Höhe: ca. 5.700 Meter.", "Benannt nach Christoph Kolumbus."],
      hu: ["Magassága: kb. 5700 méter.", "Kolumbusz Kristófról kapta a nevét."],
      ro: ["Înălțime: aproximativ 5.700 metri.", "Numit după Cristofor Columb."],
      en: ["Elevation: approx. 5,700 meters.", "Named after Christopher Columbus."]
    }
  },
  {
    id: "pico-simon-bolivar-nature-v2",
    type: "mountain",
    parent: "CO-MAG",
    coords: [-73.6847, 10.8353],
    name: { de: "Pico Simón Bolívar", hu: "Pico Simón Bolívar", ro: "Pico Simón Bolívar", en: "Pico Simón Bolívar" },
    description: { de: "Der Zwillingsgipfel des Pico Cristóbal Colón in der Sierra Nevada de Santa Marta.", hu: "A Pico Cristóbal Colón ikercsúcsa a Sierra Nevada de Santa Marta hegységben.", ro: "Vârful geamăn al lui Pico Cristóbal Colón din Sierra Nevada de Santa Marta.", en: "The twin peak of Pico Cristóbal Colón in the Sierra Nevada de Santa Marta." },
    facts: {
      de: ["Höhe: fast identisch mit Pico Cristóbal Colón.", "Benannt nach dem Freiheitskämpfer Simón Bolívar."],
      hu: ["Magassága szinte azonos a Pico Cristóbal Colónnal.", "Simón Bolívar szabadságharcosról nevezték el."],
      ro: ["Înălțime: aproape identică cu Pico Cristóbal Colón.", "Numit după eliberatorul Simón Bolívar."],
      en: ["Elevation: almost identical to Pico Cristóbal Colón.", "Named after the liberator Simón Bolívar."]
    }
  },
  {
    id: "nevado-del-ruiz-nature-v2",
    type: "mountain",
    parent: "CO-TOL",
    coords: [-75.3228, 4.8953],
    name: { de: "Nevado del Ruiz", hu: "Nevado del Ruiz", ro: "Nevado del Ruiz", en: "Nevado del Ruiz" },
    description: { de: "Ein aktiver Stratovulkan im Nationalpark Los Nevados, der von einer Eiskappe bedeckt ist.", hu: "Aktív rétegvulkán a Los Nevados Nemzeti Parkban, melyet jégsapka borít.", ro: "Un stratovulcan activ situat în Parcul Național Los Nevados, acoperit de un strat de gheață.", en: "An active stratovolcano in the Los Nevados National Park, covered by an ice cap." },
    facts: {
      de: ["Höhe: 5.321 Meter.", "Bekannt für den Ausbruch von 1985 (Armero-Tragödie)."],
      hu: ["Magassága: 5321 méter.", "Az 1985-ös kitöréséről hírhedt (Armero-tragédia)."],
      ro: ["Înălțime: 5.321 metri.", "Cunoscut pentru erupția din 1985 (Tragedia din Armero)."],
      en: ["Elevation: 5,321 meters.", "Known for the 1985 eruption (Armero tragedy)."]
    }
  },
  {
    id: "nevado-del-huila-nature-v2",
    type: "mountain",
    parent: "CO-HUI",
    coords: [-75.9933, 2.9242],
    name: { de: "Nevado del Huila", hu: "Nevado del Huila", ro: "Nevado del Huila", en: "Nevado del Huila" },
    description: { de: "Der höchste Vulkan Kolumbiens, gelegen in der Zentralkordillere der Anden.", hu: "Kolumbia legmagasabb vulkánja, amely az Andok Középső-Kordilleráiban található.", ro: "Cel mai înalt vulcan din Columbia, situat în Cordiliera Centrală a Anzilor.", en: "The highest volcano in Colombia, located in the Central Cordillera of the Andes." },
    facts: {
      de: ["Höhe: 5.364 Meter.", "Seine Gletscher schmelzen aufgrund des Klimawandels."],
      hu: ["Magassága: 5364 méter.", "Gleccserei a klímaváltozás miatt olvadnak."],
      ro: ["Înălțime: 5.364 metri.", "Ghețarii săi se topesc din cauza schimbărilor climatice."],
      en: ["Elevation: 5,364 meters.", "Its glaciers are retreating due to climate change."]
    }
  },
  {
    id: "nevado-del-tolima-nature-v2",
    type: "mountain",
    parent: "CO-TOL",
    coords: [-75.3283, 4.6583],
    name: { de: "Nevado del Tolima", hu: "Nevado del Tolima", ro: "Nevado del Tolima", en: "Nevado del Tolima" },
    description: { de: "Ein kegelförmiger Schichtvulkan im Los Nevados Nationalpark, ein beliebtes Ziel für Bergsteiger.", hu: "Kúp alakú rétegvulkán a Los Nevados Nemzeti Parkban, mely a hegymászók népszerű célpontja.", ro: "Un stratovulcan în formă de con din Parcul Național Los Nevados, popular printre alpiniști.", en: "A cone-shaped stratovolcano in the Los Nevados National Park, a popular destination for mountaineers." },
    facts: {
      de: ["Höhe: 5.233 Meter.", "Die Kraterform ist nahezu perfekt steil."],
      hu: ["Magassága: 5233 méter.", "Krátere majdnem tökéletes, meredek kúp alakú."],
      ro: ["Înălțime: 5.233 metri.", "Are un crater în formă de con aproape perfect."],
      en: ["Elevation: 5,233 meters.", "Has a nearly perfect steep cone shape."]
    }
  },
  {
    id: "ritacuba-blanco-nature-v2",
    type: "mountain",
    parent: "CO-BOY",
    coords: [-72.2967, 6.495],
    name: { de: "Ritacuba Blanco", hu: "Ritacuba Blanco", ro: "Ritacuba Blanco", en: "Ritacuba Blanco" },
    description: { de: "Der höchste Gipfel der Ostkordillere der kolumbianischen Anden im Nationalpark El Cocuy.", hu: "A kolumbiai Andok Keleti-Kordilleráinak legmagasabb csúcsa, az El Cocuy Nemzeti Parkban.", ro: "Cel mai înalt vârf din Cordiliera Orientală a Anzilor columbieni, situat în Parcul Național El Cocuy.", en: "The highest peak in the Eastern Cordillera of the Colombian Andes, located in El Cocuy National Park." },
    facts: {
      de: ["Höhe: 5.410 Meter.", "Stark vom Gletscherrückgang betroffen."],
      hu: ["Magassága: 5410 méter.", "A gleccserek visszahúzódása erősen érinti."],
      ro: ["Înălțime: 5.410 metri.", "Grav afectat de topirea ghețarilor."],
      en: ["Elevation: 5,410 meters.", "Severely affected by glacier retreat."]
    }
  },
  {
    id: "purace-volcano-nature-v2",
    type: "mountain",
    parent: "CO-CAU",
    coords: [-76.3958, 2.3125],
    name: { de: "Vulkan Puracé", hu: "Puracé vulkán", ro: "Vulcanul Puracé", en: "Puracé Volcano" },
    description: { de: "Ein aktiver Vulkan nahe der Stadt Popayán, bekannt für heiße Thermalquellen.", hu: "Aktív vulkán Popayán városa közelében, mely hőforrásairól híres.", ro: "Un vulcan activ lângă orașul Popayán, renumit pentru izvoarele sale termale fierbinți.", en: "An active volcano near the city of Popayán, famous for its hot thermal springs." },
    facts: {
      de: ["Höhe: 4.646 Meter.", "Zentrum des Puracé-Nationalparks."],
      hu: ["Magassága: 4646 méter.", "A Puracé Nemzeti Park központja."],
      ro: ["Înălțime: 4.646 metri.", "Centrul Parcului Național Puracé."],
      en: ["Elevation: 4,646 meters.", "Center of the Puracé National Park."]
    }
  },
  {
    id: "galeras-volcano-nature-v2",
    type: "mountain",
    parent: "CO-NAR",
    coords: [-77.3592, 1.2217],
    name: { de: "Galeras", hu: "Galeras", ro: "Galeras", en: "Galeras Volcano" },
    description: { de: "Einer der aktivsten Vulkane Kolumbiens, in unmittelbarer Nähe zur Stadt Pasto gelegen.", hu: "Kolumbia egyik legaktívabb vulkánja, Pasto városának közvetlen közelében.", ro: "Unul dintre cei mai activi vulcani din Columbia, situat foarte aproape de orașul Pasto.", en: "One of Colombia's most active volcanoes, located very close to the city of Pasto." },
    facts: {
      de: ["Höhe: 4.276 Meter.", "Überwacht wegen seiner konstanten Aktivität."],
      hu: ["Magassága: 4276 méter.", "Folyamatos aktivitása miatt szigorúan megfigyelik."],
      ro: ["Înălțime: 4.276 metri.", "Monitorizat constant din cauza activității sale frecvente."],
      en: ["Elevation: 4,276 meters.", "Monitored closely due to its constant activity."]
    }
  },
  {
    id: "lake-tota-nature-v2",
    type: "lake",
    parent: "CO-BOY",
    coords: [-72.925, 5.55],
    name: { de: "Totasee", hu: "Tota-tó", ro: "Lacul Tota", en: "Lake Tota" },
    description: { de: "Der größte See Kolumbiens, ein Hochgebirgssee in den Anden von Boyacá.", hu: "Kolumbia legnagyobb tava, egy magashegyi tó a boyacái Andokban.", ro: "Cel mai mare lac din Columbia, un lac de mare altitudine din Anzii din Boyacá.", en: "The largest lake in Colombia, a high-altitude lake in the Andes of Boyacá." },
    facts: {
      de: ["Liegt auf über 3.000 Metern Höhe.", "Bekannt für den weißen Sandstrand Playa Blanca."],
      hu: ["Több mint 3000 méteres magasságban fekszik.", "A Playa Blanca fehér homokos partjáról ismert."],
      ro: ["Situat la peste 3.000 de metri altitudine.", "Cunoscut pentru plaja de nisip alb Playa Blanca."],
      en: ["Located at over 3,000 meters altitude.", "Known for its white sand beach, Playa Blanca."]
    }
  },
  {
    id: "lake-guatavita-nature-v2",
    type: "lake",
    parent: "CO-CUN",
    coords: [-73.8167, 4.975],
    name: { de: "Guatavitasee", hu: "Guatavita-tó", ro: "Lacul Guatavita", en: "Lake Guatavita" },
    description: { de: "Ein fast kreisrunder Kratersee, der als Ursprung der El-Dorado-Legende gilt.", hu: "Egy majdnem tökéletesen kerek krátertó, melyet az El Dorado-legenda forrásának tartanak.", ro: "Un lac de crater aproape circular, considerat originea legendei El Dorado.", en: "A nearly circular crater lake, widely considered the origin of the El Dorado legend." },
    facts: {
      de: ["Heilig für das indigene Volk der Muisca.", "Durchmesser: ca. 700 Meter."],
      hu: ["A muiszka őslakosok szent tava.", "Átmérője mintegy 700 méter."],
      ro: ["Sacru pentru poporul indigen Muisca.", "Diametru: aproximativ 700 de metri."],
      en: ["Sacred to the indigenous Muisca people.", "Diameter: about 700 meters."]
    }
  },
  {
    id: "lake-calima-nature-v2",
    type: "lake",
    parent: "CO-VAC",
    coords: [-76.4947, 3.8864],
    name: { de: "Calimasee", hu: "Calima-tó", ro: "Lacul Calima", en: "Lake Calima" },
    description: { de: "Ein künstlicher Stausee, berühmt für seine starken Winde und Wassersportaktivitäten.", hu: "Mesterséges víztározó, amely erős szeleiről és vízisport-lehetőségeiről híres.", ro: "Un lac de acumulare artificial, faimos pentru vânturile puternice și sporturile nautice.", en: "An artificial reservoir, famous for its strong winds and water sports activities." },
    facts: {
      de: ["Beliebt für Windsurfen und Kitesurfen.", "Der größte künstliche See Kolumbiens."],
      hu: ["A szörfösök és kiteszörfösök kedvelt célpontja.", "Kolumbia legnagyobb mesterséges tava."],
      ro: ["Popular pentru windsurfing și kitesurfing.", "Cel mai mare lac artificial din Columbia."],
      en: ["Popular for windsurfing and kitesurfing.", "The largest artificial lake in Colombia."]
    }
  },
  {
    id: "la-cocha-lagoon-nature-v2",
    type: "lake",
    parent: "CO-NAR",
    coords: [-77.1583, 1.1083],
    name: { de: "Lagune von La Cocha", hu: "La Cocha-lagúna", ro: "Laguna La Cocha", en: "La Cocha Lagoon" },
    description: { de: "Ein großer vulkanischer See im Süden Kolumbiens, umgeben von Páramo-Landschaft.", hu: "Nagy vulkanikus tó Kolumbia déli részén, amelyet páramo vidék ölel körül.", ro: "Un mare lac vulcanic în sudul Columbiei, înconjurat de peisajul de páramo.", en: "A large volcanic lake in southern Colombia, surrounded by páramo landscape." },
    facts: {
      de: ["Ein international geschütztes Ramsar-Feuchtgebiet.", "In der Mitte liegt die kleine Insel La Corota."],
      hu: ["Nemzetközileg védett Ramsari vizenyős terület.", "Közepén található a La Corota nevű kis sziget."],
      ro: ["O zonă umedă Ramsar protejată internațional.", "În mijloc se află mica insulă La Corota."],
      en: ["An internationally protected Ramsar wetland.", "Features the small Corota Island in its center."]
    }
  },
  {
    id: "malpelo-island-nature-v2",
    type: "island",
    parent: "CO-VAC",
    coords: [-81.6033, 4.0028],
    name: { de: "Insel Malpelo", hu: "Malpelo-sziget", ro: "Insula Malpelo", en: "Malpelo Island" },
    description: { de: "Eine raue Felseninsel im Pazifischen Ozean, bekannt als Weltklasse-Tauchrevier für Haie.", hu: "Zord sziklás sziget a Csendes-óceánban, amely cápáiról ismert világszínvonalú merülőhely.", ro: "O insulă stâncoasă accidentată din Oceanul Pacific, renumită ca destinație de scufundări de top pentru rechini.", en: "A rugged rocky island in the Pacific Ocean, renowned as a world-class shark diving destination." },
    facts: {
      de: ["UNESCO-Weltnaturerbe seit 2006.", "Riesige Schulen von Hammerhaien leben hier."],
      hu: ["2006 óta az UNESCO Világörökség része.", "Hatalmas pörölycápa-rajok élnek itt."],
      ro: ["Patrimoniu Mondial UNESCO din 2006.", "Aici trăiesc școli uriașe de rechini ciocan."],
      en: ["UNESCO World Heritage site since 2006.", "Home to huge schools of hammerhead sharks."]
    }
  },
  {
    id: "gorgona-island-nature-v2",
    type: "island",
    parent: "CO-CAU",
    coords: [-78.1931, 2.9647],
    name: { de: "Gorgona", hu: "Gorgona-sziget", ro: "Insula Gorgona", en: "Gorgona Island" },
    description: { de: "Eine Insel im Pazifik, die früher ein Hochsicherheitsgefängnis war und heute ein Nationalpark ist.", hu: "Csendes-óceáni sziget, amely egykor szigorított fegyház volt, ma pedig nemzeti park.", ro: "O insulă din Pacific, fostă închisoare de maximă securitate, transformată acum într-un parc național.", en: "A Pacific island that was formerly a maximum-security prison and is now a national park." },
    facts: {
      de: ["Wichtiger Ort für Buckelwale zur Fortpflanzung.", "Überwuchert von dichtem Regenwald."],
      hu: ["Hosszúszárnyú bálnák fontos szaporodóhelye.", "Sűrű esőerdő borítja."],
      ro: ["Loc important de reproducere pentru balenele cu cocoașă.", "Acoperită de o pădure tropicală deasă."],
      en: ["Important breeding ground for humpback whales.", "Covered by dense rainforest."]
    }
  },
  {
    id: "san-andres-island-nature-v2",
    type: "island",
    parent: "CO-SAP",
    coords: [-81.7006, 12.5511],
    name: { de: "San Andrés", hu: "San Andrés-sziget", ro: "Insula San Andrés", en: "San Andrés Island" },
    description: { de: "Die größte Insel eines Archipels im Karibischen Meer, berühmt für ihr Meer der sieben Farben.", hu: "Egy karibi szigetcsoport legnagyobb szigete, mely a Hét Szín Tengeréről híres.", ro: "Cea mai mare insulă dintr-un arhipelag caraibian, faimoasă pentru marea sa cu șapte culori.", en: "The largest island of a Caribbean archipelago, famous for its Sea of Seven Colors." },
    facts: {
      de: ["Gehört geografisch eher zu Zentralamerika.", "Korallenriffe umgeben die gesamte Insel."],
      hu: ["Földrajzilag közelebb áll Közép-Amerikához.", "Korallzátonyok övezik az egész szigetet."],
      ro: ["Din punct de vedere geografic, e mai aproape de America Centrală.", "Insula este înconjurată de recife de corali."],
      en: ["Geographically closer to Central America.", "Coral reefs surround the entire island."]
    }
  },
  {
    id: "providencia-island-nature-v2",
    type: "island",
    parent: "CO-SAP",
    coords: [-81.3736, 13.3517],
    name: { de: "Providencia", hu: "Providencia-sziget", ro: "Insula Providencia", en: "Providencia Island" },
    description: { de: "Eine kleinere, bergige Karibikinsel, die im Vergleich zu San Andrés ruhiger und naturbelassener ist.", hu: "Kisebb, hegyvidéki karibi sziget, amely San Andrésnél sokkal nyugodtabb és érintetlenebb.", ro: "O insulă caraibiană montană mai mică, mai liniștită și mai sălbatică decât San Andrés.", en: "A smaller, mountainous Caribbean island that is quieter and more pristine than San Andrés." },
    facts: {
      de: ["Teil des UNESCO-Biosphärenreservats Seaflower.", "Verfügt über einen der längsten Barriereriffe Amerikas."],
      hu: ["A Seaflower UNESCO bioszféra-rezervátum része.", "Amerika egyik leghosszabb korallzátonya veszi körül."],
      ro: ["Parte a rezervației biosferei UNESCO Seaflower.", "Are una dintre cele mai lungi bariere de corali din Americi."],
      en: ["Part of the Seaflower UNESCO Biosphere Reserve.", "Features one of the longest barrier reefs in the Americas."]
    }
  },
  {
    id: "amazon-rainforest-colombia-nature-v2",
    type: "forest",
    parent: "CO-AMA",
    coords: [-71.5, -1.5],
    name: { de: "Amazonas-Regenwald (Kolumbien)", hu: "Amazonasi esőerdő (Kolumbia)", ro: "Pădurea Amazoniană (Columbia)", en: "Amazon Rainforest (Colombia)" },
    description: { de: "Das größte und artenreichste Tropenwaldgebiet der Erde, dessen nordwestlicher Teil in Kolumbien liegt.", hu: "A Föld legnagyobb és legfajgazdagabb trópusi erdeje, melynek északnyugati része Kolumbiához tartozik.", ro: "Cea mai mare și mai diversă pădure tropicală de pe Pământ, partea sa nord-vestică aflându-se în Columbia.", en: "The largest and most biodiverse tropical rainforest on Earth, with its northwestern part in Colombia." },
    facts: {
      de: ["Bedeckt etwa 35% der Fläche Kolumbiens.", "Heimat zahlreicher indigener Stämme."],
      hu: ["Kolumbia területének nagyjából 35%-át teszi ki.", "Számos őslakos törzs otthona."],
      ro: ["Acoperă aproximativ 35% din suprafața Columbiei.", "Găzduiește numeroase triburi indigene."],
      en: ["Covers about 35% of Colombia's territory.", "Home to numerous indigenous tribes."]
    }
  },
  {
    id: "choco-darien-moist-forest-nature-v2",
    type: "forest",
    parent: "CO-CHO",
    coords: [-77.0, 6.0],
    name: { de: "Chocó-Regenwald", hu: "Chocó esőerdő", ro: "Pădurea Chocó", en: "Chocó-Darién Moist Forest" },
    description: { de: "Ein extrem feuchter und biodiverser Regenwald entlang der Pazifikküste Kolumbiens.", hu: "Rendkívül csapadékos és biológiailag sokszínű esőerdő Kolumbia csendes-óceáni partvidékén.", ro: "O pădure tropicală extrem de umedă și diversă din punct de vedere biologic, situată pe coasta pacifică a Columbiei.", en: "An extremely wet and biodiverse rainforest along the Pacific coast of Colombia." },
    facts: {
      de: ["Einer der globalen Hotspots der Biodiversität.", "Berühmt für viele endemische Froscharten."],
      hu: ["A biodiverzitás egyik globális forrópontja.", "Számos endemikus békafajáról ismert."],
      ro: ["Unul dintre hotspot-urile globale ale biodiversității.", "Faimoasă pentru numeroase specii de broaște endemice."],
      en: ["One of the global biodiversity hotspots.", "Famous for many endemic frog species."]
    }
  },
  {
    id: "tayrona-national-park-nature-v2",
    type: "forest",
    parent: "CO-MAG",
    coords: [-73.9667, 11.2833],
    name: { de: "Nationalpark Tayrona", hu: "Tayrona Nemzeti Park", ro: "Parcul Național Tayrona", en: "Tayrona National Natural Park" },
    description: { de: "Ein Schutzgebiet, in dem dichter Tropenwald direkt auf atemberaubende Karibikstrände trifft.", hu: "Védett terület, ahol a sűrű trópusi erdő közvetlenül találkozik a lélegzetelállító karibi strandokkal.", ro: "O arie protejată unde pădurea tropicală densă întâlnește plajele uimitoare ale Caraibelor.", en: "A protected area where dense tropical forest directly meets breathtaking Caribbean beaches." },
    facts: {
      de: ["Heimat des Brüllaffen und des Jaguar.", "Bedeutende präkolumbianische Ruinen (Pueblito)."],
      hu: ["Bőgőmajmok és jaguárok otthona.", "Jelentős prekolumbián romok (Pueblito) találhatók itt."],
      ro: ["Habitat pentru maimuța urlătoare și jaguar.", "Conține ruine precolumbiene semnificative (Pueblito)."],
      en: ["Home to the howler monkey and jaguar.", "Contains significant pre-Columbian ruins (Pueblito)."]
    }
  },
  {
    id: "caribbean-sea-colombia-nature-v2",
    type: "sea",
    parent: "CO-ATL",
    coords: [-74.5, 11.5],
    name: { de: "Karibisches Meer (Kolumbien)", hu: "Karib-tenger (Kolumbia)", ro: "Marea Caraibelor (Columbia)", en: "Caribbean Sea (Colombia)" },
    description: { de: "Die nördliche Küstenregion Kolumbiens, geprägt von warmen Gewässern und Korallenriffen.", hu: "Kolumbia északi partvidéke, amelyet meleg vizek és korallzátonyok jellemeznek.", ro: "Regiunea de coastă nordică a Columbiei, caracterizată prin ape calde și recife de corali.", en: "The northern coastal region of Colombia, characterized by warm waters and coral reefs." },
    facts: {
      de: ["Lange Sandstrände und koloniale Hafenstädte.", "Wichtig für den Tourismus und die Fischerei."],
      hu: ["Hosszú homokos partok és gyarmati kikötővárosok övezik.", "Fontos a turizmus és a halászat szempontjából."],
      ro: ["Mărginită de plaje lungi de nisip și orașe portuare coloniale.", "Importantă pentru turism și pescuit."],
      en: ["Lined with long sandy beaches and colonial port cities.", "Important for tourism and fishing."]
    }
  },
  {
    id: "pacific-ocean-colombia-nature-v2",
    type: "sea",
    parent: "CO-CHO",
    coords: [-77.5, 5.5],
    name: { de: "Pazifischer Ozean (Kolumbien)", hu: "Csendes-óceán (Kolumbia)", ro: "Oceanul Pacific (Columbia)", en: "Pacific Ocean (Colombia)" },
    description: { de: "Die raue, westliche Küste Kolumbiens, bekannt für dunkle Strände und Buckelwal-Beobachtungen.", hu: "Kolumbia zord nyugati partvidéke, amely sötét homokos strandjairól és a hosszúszárnyú bálnákról ismert.", ro: "Coasta de vest accidentată a Columbiei, renumită pentru plajele sale cu nisip închis la culoare și observarea balenelor.", en: "The rugged western coast of Colombia, known for its dark sand beaches and humpback whale watching." },
    facts: {
      de: ["Wilder und weniger erschlossen als die Karibikküste.", "Die Walbeobachtungssaison ist von Juli bis Oktober."],
      hu: ["Vadnebb és kevésbé fejlett, mint a karibi part.", "A bálnanéző szezon júliustól októberig tart."],
      ro: ["Mai sălbatică și mai puțin dezvoltată decât coasta Caraibelor.", "Sezonul de observare a balenelor este din iulie până în octombrie."],
      en: ["Wilder and less developed than the Caribbean coast.", "Whale watching season is from July to October."]
    }
  }
];
