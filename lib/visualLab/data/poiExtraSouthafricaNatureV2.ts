import type { POI } from "./poi";

export const poiExtraSouthafricaNatureV2: POI[] = [
  {
    id: "orange-river-nature-v2",
    type: "river",
    parent: "ZA-NC",
    coords: [16.485, -28.636],
    name: { de: "Oranje-Fluss", hu: "Oranje folyó", ro: "Râul Orange", en: "Orange River" },
    description: { de: "Der längste Fluss Südafrikas, der in den Drakensbergen entspringt.", hu: "Dél-Afrika leghosszabb folyója, amely a Drakensberg-hegységben ered.", ro: "Cel mai lung fluviu din Africa de Sud, care izvorăște din Munții Drakensberg.", en: "The longest river in South Africa, originating in the Drakensberg mountains." },
    facts: {
      de: ["Länge ca. 2200 km.", "Mündet in den Atlantik."],
      hu: ["Hossza kb. 2200 km.", "Az Atlanti-óceánba torkollik."],
      ro: ["Lungime aprox. 2200 km.", "Se varsă în Oceanul Atlantic."],
      en: ["Length approx. 2200 km.", "Empties into the Atlantic Ocean."]
    }
  },
  {
    id: "drakensberg-nature-v2",
    type: "mountain",
    parent: "ZA-KZN",
    coords: [29.288, -29.355],
    name: { de: "Drakensberge", hu: "Drakensberg", ro: "Munții Drakensberg", en: "Drakensberg" },
    description: { de: "Das höchste Gebirge im südlichen Afrika.", hu: "Dél-Afrika legmagasabb hegysége.", ro: "Cel mai înalt lanț muntos din sudul Africii.", en: "The highest mountain range in Southern Africa." },
    facts: {
      de: ["Höchster Gipfel Thabana Ntlenyana.", "Teil des Weltnaturerbes."],
      hu: ["Legmagasabb csúcs: Thabana Ntlenyana.", "Világörökség része."],
      ro: ["Cel mai înalt vârf: Thabana Ntlenyana.", "Parte a Patrimoniului Mondial."],
      en: ["Highest peak: Thabana Ntlenyana.", "Part of the World Heritage site."]
    }
  },
  {
    id: "limpopo-river-nature-v2",
    type: "river",
    parent: "ZA-LIM",
    coords: [33.5, -25.1],
    name: { de: "Limpopo", hu: "Limpopo", ro: "Limpopo", en: "Limpopo River" },
    description: { de: "Ein bedeutender Fluss, der durch mehrere südafrikanische Provinzen fließt.", hu: "Jelentős folyó, amely több dél-afrikai tartományon folyik keresztül.", ro: "Un râu important care traversează mai multe provincii sud-africane.", en: "A major river flowing through several South African provinces." },
    facts: {
      de: ["Verläuft durch Zimbabwe und Botswana.", "Mündet in den Indischen Ozean."],
      hu: ["Átfolyik Zimbabwén és Botswanán.", "Az Indiai-óceánba torkollik."],
      ro: ["Trece prin Zimbabwe și Botswana.", "Se varsă în Oceanul Indian."],
      en: ["Flows through Zimbabwe and Botswana.", "Empties into the Indian Ocean."]
    }
  },
  {
    id: "table-mountain-nature-v2",
    type: "mountain",
    parent: "ZA-WC",
    coords: [18.406, -33.963],
    name: { de: "Tafelberg", hu: "Tábla-hegy", ro: "Muntele Masă", en: "Table Mountain" },
    description: { de: "Das Wahrzeichen von Kapstadt mit flachem Gipfel.", hu: "Fokváros jelképe a lapos csúcsával.", ro: "Simbolul orașului Cape Town cu un vârf plat.", en: "The landmark of Cape Town with a flat top." },
    facts: {
      de: ["Berühmt für die 'Tischtuch'-Wolken.", "Nationalpark."],
      hu: ["Híres a 'terítő' felhőkről.", "Nemzeti park."],
      ro: ["Faimos pentru norii tip 'față de masă'.", "Parc Național."],
      en: ["Famous for the 'tablecloth' clouds.", "National Park."]
    }
  },
  {
    id: "lake-st-lucia-nature-v2",
    type: "lake",
    parent: "ZA-KZN",
    coords: [32.483, -28.083],
    name: { de: "St.-Lucia-See", hu: "St. Lucia-tó", ro: "Lacul St. Lucia", en: "Lake St. Lucia" },
    description: { de: "Ein großes Ästuar-System im iSimangaliso-Wetland-Park.", hu: "Nagy torkolatrendszer az iSimangaliso Vizesélőhely-parkban.", ro: "Un sistem mare de estuare în Parcul iSimangaliso Wetland.", en: "A large estuarine system in the iSimangaliso Wetland Park." },
    facts: {
      de: ["Weltnaturerbe.", "Heimat von Flusspferden und Krokodilen."],
      hu: ["Világörökség.", "Vízilovak és krokodilok élőhelye."],
      ro: ["Patrimoniul Mondial.", "Habitat pentru hipopotami și crocodili."],
      en: ["World Heritage site.", "Home to hippos and crocodiles."]
    }
  },
  {
    id: "kruger-forest-nature-v2",
    type: "forest",
    parent: "ZA-LIM",
    coords: [31.5, -24.0],
    name: { de: "Kruger-Waldgebiete", hu: "Kruger erdőségek", ro: "Pădurile Kruger", en: "Kruger forest areas" },
    description: { de: "Die ausgedehnten Wald- und Savannengebiete des Kruger-Nationalparks.", hu: "A Kruger Nemzeti Park kiterjedt erdő- és szavannaterületei.", ro: "Zonele extinse de pădure și savană din Parcul Național Kruger.", en: "The extensive forest and savanna areas of Kruger National Park." },
    facts: {
      de: ["Eines der größten Wildschutzgebiete Afrikas.", "Beheimatet die 'Big Five'."],
      hu: ["Afrika egyik legnagyobb vadvédelmi területe.", "A 'Big Five' otthona."],
      ro: ["Una dintre cele mai mari rezervații naturale din Africa.", "Acasă pentru 'Big Five'."],
      en: ["One of Africa's largest game reserves.", "Home to the 'Big Five'."]
    }
  },
  {
    id: "vaal-river-nature-v2",
    type: "river",
    parent: "ZA-GP",
    coords: [24.0, -28.0],
    name: { de: "Vaal-Fluss", hu: "Vaal folyó", ro: "Râul Vaal", en: "Vaal River" },
    description: { de: "Der größte Nebenfluss des Oranje-Flusses.", hu: "Az Oranje folyó legnagyobb mellékfolyója.", ro: "Cel mai mare afluent al fluviului Orange.", en: "The largest tributary of the Orange River." },
    facts: {
      de: ["Wichtige Wasserquelle für Gauteng.", "Länge ca. 1120 km."],
      hu: ["Fontos vízforrás Gauteng számára.", "Hossza kb. 1120 km."],
      ro: ["Sursă importantă de apă pentru Gauteng.", "Lungime aprox. 1120 km."],
      en: ["Important water source for Gauteng.", "Length approx. 1120 km."]
    }
  },
  {
    id: "cederberg-nature-v2",
    type: "mountain",
    parent: "ZA-WC",
    coords: [19.166, -32.416],
    name: { de: "Cederberge", hu: "Cederberg-hegység", ro: "Munții Cederberg", en: "Cederberg" },
    description: { de: "Eine spektakuläre Gebirgslandschaft nördlich von Kapstadt.", hu: "Látványos hegyvidék Fokvárostól északra.", ro: "Un peisaj montan spectaculos la nord de Cape Town.", en: "A spectacular mountain range north of Cape Town." },
    facts: {
      de: ["Berühmt für Felsformationen.", "Wandergebiet."],
      hu: ["Híres sziklaalakzatok.", "Túrázó terület."],
      ro: ["Faimos pentru formațiunile stâncoase.", "Zonă de drumeții."],
      en: ["Famous for rock formations.", "Hiking area."]
    }
  },
  {
    id: "indian-ocean-coast-nature-v2",
    type: "sea",
    parent: "ZA-EC",
    coords: [30.0, -32.0],
    name: { de: "Indischer Ozean Küste", hu: "Indiai-óceán partvidék", ro: "Coasta Oceanului Indian", en: "Indian Ocean coast" },
    description: { de: "Der Küstenabschnitt am Indischen Ozean in Südafrika.", hu: "Az Indiai-óceán partszakasza Dél-Afrikában.", ro: "Secțiunea de coastă de la Oceanul Indian în Africa de Sud.", en: "The coastline along the Indian Ocean in South Africa." },
    facts: {
      de: ["Warme Strömungen.", "Beliebte Badeorte."],
      hu: ["Meleg áramlatok.", "Népszerű üdülőhelyek."],
      ro: ["Curenți calzi.", "Stațiuni populare."],
      en: ["Warm currents.", "Popular seaside resorts."]
    }
  },
  {
    id: "atlantic-ocean-coast-nature-v2",
    type: "sea",
    parent: "ZA-WC",
    coords: [17.5, -31.0],
    name: { de: "Atlantikküste", hu: "Atlanti-óceán partvidék", ro: "Coasta Oceanului Atlantic", en: "Atlantic coast" },
    description: { de: "Die raue Küstenlinie entlang des Atlantiks.", hu: "A zord partszakasz az Atlanti-óceán mentén.", ro: "Linia de coastă aspră de-a lungul Atlanticului.", en: "The rugged coastline along the Atlantic." },
    facts: {
      de: ["Kühle Strömungen.", "Reich an mariner Tierwelt."],
      hu: ["Hűvös áramlatok.", "Gazdag tengeri élővilág."],
      ro: ["Curenți reci.", "Bogat în viață marină."],
      en: ["Cool currents.", "Rich in marine life."]
    }
  },
  {
    id: "olifants-river-nature-v2",
    type: "river",
    parent: "ZA-LIM",
    coords: [31.5, -24.5],
    name: { de: "Olifants-Fluss", hu: "Olifants folyó", ro: "Râul Olifants", en: "Olifants River" },
    description: { de: "Ein großer Fluss im Nordosten Südafrikas.", hu: "Nagy folyó Dél-Afrika északkeleti részén.", ro: "Un râu mare în nord-estul Africii de Sud.", en: "A major river in the northeast of South Africa." },
    facts: {
      de: ["Fließt durch den Kruger-Nationalpark.", "Nebenfluss des Limpopo."],
      hu: ["Átfolyik a Kruger Nemzeti Parkon.", "A Limpopo mellékfolyója."],
      ro: ["Curge prin Parcul Național Kruger.", "Afluent al râului Limpopo."],
      en: ["Flows through Kruger National Park.", "Tributary of Limpopo."]
    }
  },
  {
    id: "robben-island-nature-v2",
    type: "island",
    parent: "ZA-WC",
    coords: [18.36, -33.80],
    name: { de: "Robben Island", hu: "Robben-sziget", ro: "Insula Robben", en: "Robben Island" },
    description: { de: "Eine Insel vor der Küste von Kapstadt.", hu: "Sziget Fokváros partjainál.", ro: "O insulă în largul coastei Cape Town.", en: "An island off the coast of Cape Town." },
    facts: {
      de: ["UNESCO-Welterbe.", "Historischer Gefängnisort."],
      hu: ["UNESCO Világörökség.", "Történelmi börtönhely."],
      ro: ["Patrimoniul Mondial UNESCO.", "Loc istoric al închisorii."],
      en: ["UNESCO World Heritage.", "Historic prison site."]
    }
  },
  {
    id: "tugela-falls-nature-v2",
    type: "river",
    parent: "ZA-KZN",
    coords: [28.89, -28.75],
    name: { de: "Tugela-Fälle", hu: "Tugela-vízesés", ro: "Cascada Tugela", en: "Tugela Falls" },
    description: { de: "Einer der höchsten Wasserfälle der Welt.", hu: "A világ egyik legmagasabb vízesése.", ro: "Una dintre cele mai înalte cascade din lume.", en: "One of the highest waterfalls in the world." },
    facts: {
      de: ["Liegt in den Drakensbergen.", "Spektakuläre Fallhöhe."],
      hu: ["A Drakensberg-hegységben található.", "Látványos esési magasság."],
      ro: ["Situată în Munții Drakensberg.", "Înălțime spectaculoasă."],
      en: ["Located in the Drakensberg.", "Spectacular drop."]
    }
  },
  {
    id: "karoo-nature-v2",
    type: "mountain",
    parent: "ZA-NC",
    coords: [22.0, -31.0],
    name: { de: "Karoo", hu: "Karoo", ro: "Karoo", en: "Karoo" },
    description: { de: "Eine riesige, halbwüstenartige Region.", hu: "Hatalmas, félsivatagos régió.", ro: "O regiune vastă, de tip semideșert.", en: "A vast, semi-desert region." },
    facts: {
      de: ["Prägend für Südafrikas Binnenland.", "Einzigartige Flora."],
      hu: ["Meghatározó Dél-Afrika belsejében.", "Egyedülálló növényvilág."],
      ro: ["Definitoriu pentru interiorul Africii de Sud.", "Floră unică."],
      en: ["Characteristic of South Africa's interior.", "Unique flora."]
    }
  },
  {
    id: "iSimangaliso-park-nature-v2",
    type: "forest",
    parent: "ZA-KZN",
    coords: [32.5, -27.5],
    name: { de: "iSimangaliso Wetland Park", hu: "iSimangaliso Vizesélőhely-park", ro: "Parcul iSimangaliso Wetland", en: "iSimangaliso Wetland Park" },
    description: { de: "Ein riesiger Park mit Küstenwäldern und Lagunen.", hu: "Hatalmas park parti erdőkkel és lagúnákkal.", ro: "Un parc vast cu păduri de coastă și lagune.", en: "A huge park with coastal forests and lagoons." },
    facts: {
      de: ["UNESCO-Welterbe.", "Große Biodiversität."],
      hu: ["UNESCO Világörökség.", "Nagy biodiverzitás."],
      ro: ["Patrimoniul Mondial UNESCO.", "Biodiversitate ridicată."],
      en: ["UNESCO World Heritage.", "High biodiversity."]
    }
  },
  {
    id: "tsitsikamma-forest-nature-v2",
    type: "forest",
    parent: "ZA-EC",
    coords: [23.9, -34.0],
    name: { de: "Tsitsikamma-Wald", hu: "Tsitsikamma-erdő", ro: "Pădurea Tsitsikamma", en: "Tsitsikamma Forest" },
    description: { de: "Ein geschützter Küstenwald entlang der Garden Route.", hu: "Védett parti erdő a Garden Route mentén.", ro: "O pădure de coastă protejată de-a lungul Garden Route.", en: "A protected coastal forest along the Garden Route." },
    facts: {
      de: ["Sehr hohe Bäume.", "Nationalpark."],
      hu: ["Nagyon magas fák.", "Nemzeti park."],
      ro: ["Copaci foarte înalți.", "Parc Național."],
      en: ["Very tall trees.", "National Park."]
    }
  },
  {
    id: "swartberg-nature-v2",
    type: "mountain",
    parent: "ZA-WC",
    coords: [22.0, -33.3],
    name: { de: "Swartberge", hu: "Swartberg-hegység", ro: "Munții Swartberg", en: "Swartberg" },
    description: { de: "Eine markante Gebirgskette im Little Karoo.", hu: "Jellegzetes hegyvonulat a Little Karoo-ban.", ro: "Un lanț muntos distinctiv în Little Karoo.", en: "A prominent mountain range in the Little Karoo." },
    facts: {
      de: ["Spektakuläre Passstraßen.", "Weltnaturerbe-Gebiet."],
      hu: ["Látványos hágóutak.", "Világörökség terület."],
      ro: ["Drumuri de trecătoare spectaculoase.", "Zonă din Patrimoniul Mondial."],
      en: ["Spectacular pass roads.", "World Heritage area."]
    }
  },
  {
    id: "breede-river-nature-v2",
    type: "river",
    parent: "ZA-WC",
    coords: [20.5, -34.4],
    name: { de: "Breede-Fluss", hu: "Breede folyó", ro: "Râul Breede", en: "Breede River" },
    description: { de: "Ein Fluss im Western Cape.", hu: "Folyó a Western Cape-ben.", ro: "Un râu în Western Cape.", en: "A river in the Western Cape." },
    facts: {
      de: ["Wichtig für die Landwirtschaft.", "Wassersportgebiet."],
      hu: ["Fontos a mezőgazdaságnak.", "Vízi sport terület."],
      ro: ["Important pentru agricultură.", "Zonă pentru sporturi nautice."],
      en: ["Important for agriculture.", "Water sports area."]
    }
  },
  {
    id: "blyde-river-canyon-nature-v2",
    type: "river",
    parent: "ZA-MP",
    coords: [30.8, -24.5],
    name: { de: "Blyde-River-Canyon", hu: "Blyde-folyó kanyonja", ro: "Canionul râului Blyde", en: "Blyde River Canyon" },
    description: { de: "Einer der größten 'grünen' Canyons der Welt.", hu: "A világ egyik legnagyobb 'zöld' kanyonja.", ro: "Unul dintre cele mai mari canioane 'verzi' din lume.", en: "One of the largest 'green' canyons in the world." },
    facts: {
      de: ["Spektakuläre Aussichtspunkte.", "Touristenattraktion."],
      hu: ["Látványos kilátópontok.", "Turisztikai látványosság."],
      ro: ["Puncte de belvedere spectaculoase.", "Atracție turistică."],
      en: ["Spectacular viewpoints.", "Tourist attraction."]
    }
  },
  {
    id: "knysna-forest-nature-v2",
    type: "forest",
    parent: "ZA-WC",
    coords: [23.0, -34.0],
    name: { de: "Knysna-Wald", hu: "Knysna-erdő", ro: "Pădurea Knysna", en: "Knysna Forest" },
    description: { de: "Ein bedeutendes Waldgebiet an der Garden Route.", hu: "Jelentős erdőterület a Garden Route mentén.", ro: "O zonă forestieră importantă de-a lungul Garden Route.", en: "A significant forest area along the Garden Route." },
    facts: {
      de: ["Heimat der Knysna-Elefanten.", "Historisches Holzfällergebiet."],
      hu: ["A Knysna-elefántok otthona.", "Történelmi favágóterület."],
      ro: ["Acasă pentru elefanții din Knysna.", "Zonă istorică de tăiere a lemnului."],
      en: ["Home to Knysna elephants.", "Historic logging area."]
    }
  },
  {
    id: "lake-teko-nature-v2",
    type: "lake",
    parent: "ZA-FS",
    coords: [27.0, -28.0],
    name: { de: "Teko-See", hu: "Teko-tó", ro: "Lacul Teko", en: "Teko Lake" },
    description: { de: "Ein kleinerer See im Free State.", hu: "Kisebb tó a Free State-ben.", ro: "Un lac mai mic în Free State.", en: "A smaller lake in the Free State." },
    facts: {
      de: ["Vogelbeobachtungsgebiet.", "Ruheoase."],
      hu: ["Madármegfigyelő terület.", "Nyugalom szigete."],
      ro: ["Zonă de observare a păsărilor.", "Oază de liniște."],
      en: ["Bird watching area.", "Oasis of calm."]
    }
  },
  {
    id: "drakensberg-amphitheatre-nature-v2",
    type: "mountain",
    parent: "ZA-KZN",
    coords: [28.9, -28.7],
    name: { de: "Drakensberg-Amphitheater", hu: "Drakensberg amfiteátrum", ro: "Amfiteatrul Drakensberg", en: "Drakensberg Amphitheatre" },
    description: { de: "Eine riesige Felswand in den Drakensbergen.", hu: "Hatalmas sziklafal a Drakensberg-hegységben.", ro: "Un perete stâncos vast în Munții Drakensberg.", en: "A huge rock wall in the Drakensberg." },
    facts: {
      de: ["Beeindruckende Geologie.", "Wanderparadies."],
      hu: ["Lenyűgöző geológia.", "Túrázó paradicsom."],
      ro: ["Geologie impresionantă.", "Paradisul drumețiilor."],
      en: ["Impressive geology.", "Hiking paradise."]
    }
  },
  {
    id: "golden-gate-highlands-nature-v2",
    type: "mountain",
    parent: "ZA-FS",
    coords: [28.6, -28.5],
    name: { de: "Golden Gate Highlands", hu: "Golden Gate Highlands", ro: "Golden Gate Highlands", en: "Golden Gate Highlands" },
    description: { de: "Ein Gebirgspark mit spektakulären Sandsteinfelsen.", hu: "Hegyi park látványos homokkősziklákkal.", ro: "Un parc montan cu stânci de gresie spectaculoase.", en: "A mountain park with spectacular sandstone cliffs." },
    facts: {
      de: ["Goldenes Licht bei Sonnenuntergang.", "Schutzgebiet."],
      hu: ["Arany fény napnyugtakor.", "Természetvédelmi terület."],
      ro: ["Lumină aurie la apus.", "Zonă protejată."],
      en: ["Golden light at sunset.", "Protected area."]
    }
  },
  {
    id: "agullhas-cape-nature-v2",
    type: "sea",
    parent: "ZA-WC",
    coords: [20.0, -34.8],
    name: { de: "Kap Agulhas", hu: "Agulhas-fok", ro: "Capul Agulhas", en: "Cape Agulhas" },
    description: { de: "Der südlichste Punkt des afrikanischen Kontinents.", hu: "Az afrikai kontinens legdélibb pontja.", ro: "Cel mai sudic punct al continentului african.", en: "The southernmost point of the African continent." },
    facts: {
      de: ["Treffpunkt von Atlantik und Indischem Ozean.", "Historischer Leuchtturm."],
      hu: ["Az Atlanti- és az Indiai-óceán találkozása.", "Történelmi világítótorony."],
      ro: ["Punctul de întâlnire al Atlanticului și Oceanului Indian.", "Far istoric."],
      en: ["Meeting point of Atlantic and Indian Ocean.", "Historic lighthouse."]
    }
  },
  {
    id: "kalahari-desert-nature-v2",
    type: "forest",
    parent: "ZA-NC",
    coords: [22.0, -26.0],
    name: { de: "Kalahari", hu: "Kalahári-sivatag", ro: "Deșertul Kalahari", en: "Kalahari" },
    description: { de: "Eine weite, trockene Region, die teilweise in Südafrika liegt.", hu: "Hatalmas, száraz régió, amely részben Dél-Afrikában fekszik.", ro: "O regiune vastă și aridă care se află parțial în Africa de Sud.", en: "A vast, dry region partially located in South Africa." },
    facts: {
      de: ["Rote Sanddünen.", "Einzigartige Tierwelt."],
      hu: ["Vörös homokdűnék.", "Egyedülálló vadvilág."],
      ro: ["Dune de nisip roșu.", "Faună unică."],
      en: ["Red sand dunes.", "Unique wildlife."]
    }
  },
  {
    id: "uphole-lake-nature-v2",
    type: "lake",
    parent: "ZA-NW",
    coords: [26.0, -26.0],
    name: { de: "Uphole-See", hu: "Uphole-tó", ro: "Lacul Uphole", en: "Uphole Lake" },
    description: { de: "Ein kleinerer See im Nordwesten Südafrikas.", hu: "Kisebb tó Dél-Afrika északnyugati részén.", ro: "Un lac mai mic în nord-vestul Africii de Sud.", en: "A smaller lake in the northwest of South Africa." },
    facts: {
      de: ["Ruhige Umgebung.", "Lokal bekannt."],
      hu: ["Csendes környezet.", "Helyileg ismert."],
      ro: ["Mediu liniștit.", "Cunoscut la nivel local."],
      en: ["Quiet environment.", "Locally known."]
    }
  },
  {
    id: "mountain-zebra-park-nature-v2",
    type: "mountain",
    parent: "ZA-EC",
    coords: [25.4, -32.2],
    name: { de: "Mountain Zebra National Park", hu: "Mountain Zebra Nemzeti Park", ro: "Parcul Național Mountain Zebra", en: "Mountain Zebra National Park" },
    description: { de: "Ein Park zum Schutz der Bergzebras.", hu: "Park a hegyi zebrák védelmére.", ro: "Un parc pentru protecția zebrelor de munte.", en: "A park for the protection of mountain zebras." },
    facts: {
      de: ["Spektakuläre Berglandschaft.", "Erfolgreiches Schutzprojekt."],
      hu: ["Látványos hegyvidék.", "Sikeres védelmi projekt."],
      ro: ["Peisaj montan spectaculos.", "Proiect de conservare de succes."],
      en: ["Spectacular mountain landscape.", "Successful conservation project."]
    }
  },
  {
    id: "add-elephant-park-nature-v2",
    type: "forest",
    parent: "ZA-EC",
    coords: [25.8, -33.4],
    name: { de: "Addo-Elefanten-Nationalpark", hu: "Addo Elefánt Nemzeti Park", ro: "Parcul Național Addo Elephant", en: "Addo Elephant National Park" },
    description: { de: "Ein bekannter Park für seine Elefantenherden.", hu: "Ismert park az elefántcsordáiról.", ro: "Un parc cunoscut pentru cirezile sale de elefanți.", en: "A well-known park for its elephant herds." },
    facts: {
      de: ["Umfasst auch Küstenbereiche.", "Biodiversität."],
      hu: ["Parti területeket is magában foglal.", "Biodiverzitás."],
      ro: ["Include și zone de coastă.", "Biodiversitate."],
      en: ["Also includes coastal areas.", "Biodiversity."]
    }
  },
  {
    id: "orange-river-mouth-nature-v2",
    type: "river",
    parent: "ZA-NC",
    coords: [16.4, -28.6],
    name: { de: "Oranje-Fluss-Mündung", hu: "Oranje folyó torkolata", ro: "Delta râului Orange", en: "Orange River Mouth" },
    description: { de: "Das Delta des Oranje-Flusses am Atlantik.", hu: "Az Oranje folyó deltája az Atlanti-óceánnál.", ro: "Delta râului Orange la Atlantic.", en: "The delta of the Orange River at the Atlantic." },
    facts: {
      de: ["Wichtiges Feuchtgebiet.", "Vogelparadies."],
      hu: ["Fontos vizesélőhely.", "Madárparadicsom."],
      ro: ["Zonă umedă importantă.", "Paradisul păsărilor."],
      en: ["Important wetland.", "Bird paradise."]
    }
  },
  {
    id: "wild-coast-nature-v2",
    type: "sea",
    parent: "ZA-EC",
    coords: [29.0, -32.0],
    name: { de: "Wild Coast", hu: "Wild Coast", ro: "Wild Coast", en: "Wild Coast" },
    description: { de: "Ein unberührter, rauer Küstenabschnitt am Indischen Ozean.", hu: "Érintetlen, zord partszakasz az Indiai-óceánnál.", ro: "O secțiune de coastă neatinsă și aspră la Oceanul Indian.", en: "An untouched, rugged coastline on the Indian Ocean." },
    facts: {
      de: ["Spektakuläre Klippen.", "Abgelegene Strände."],
      hu: ["Látványos sziklák.", "Félreeső strandok."],
      ro: ["Stânci spectaculoase.", "Plaje izolate."],
      en: ["Spectacular cliffs.", "Remote beaches."]
    }
  }
];
