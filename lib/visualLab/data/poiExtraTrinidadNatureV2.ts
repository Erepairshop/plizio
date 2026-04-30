import type { POI } from "./poi";

export const poiExtraTrinidadNatureV2: POI[] = [
  {
    id: "tt-orinoco-river-mouth-nature-v2",
    type: "river",
    parent: "TT-SIP",
    coords: [-61.8, 10.1],
    name: { de: "Orinoco-Mündung", hu: "Orinoco torkolata", ro: "Gura Orinoco", en: "Orinoco River Mouth" },
    description: { de: "Die nahegelegene Mündung des mächtigen Orinoco-Flusses in Venezuela beeinflusst die Küstengewässer Trinidads.", hu: "A hatalmas venezuelai Orinoco folyó közeli torkolata befolyásolja Trinidad part menti vizeit.", ro: "Gura de vărsare a puternicului fluviu Orinoco din Venezuela influențează apele de coastă din Trinidad.", en: "The nearby mouth of Venezuela's mighty Orinoco River influences Trinidad's coastal waters." },
    facts: {
      de: ["Bringt Süßwasser und Sedimente", "Beeinflusst die Meeresströmungen", "Wichtig für die Fischerei"],
      hu: ["Édesvizet és üledéket hoz", "Befolyásolja a tengeri áramlatokat", "Fontos a halászat szempontjából"],
      ro: ["Aduce apă dulce și sedimente", "Influențează curenții marini", "Important pentru pescuit"],
      en: ["Brings freshwater and sediment", "Affects marine currents", "Important for fisheries"]
    }
  },
  {
    id: "tt-gulf-of-paria-nature-v2",
    type: "sea",
    parent: "TT",
    coords: [-61.6667, 10.4167],
    name: { de: "Golf von Paria", hu: "Paria-öböl", ro: "Golful Paria", en: "Gulf of Paria" },
    description: { de: "Ein großes, relativ flaches Binnenmeer zwischen Trinidad und dem venezolanischen Festland.", hu: "Nagy, viszonylag sekély beltenger Trinidad és a venezuelai szárazföld között.", ro: "O mare interioară mare, relativ puțin adâncă, între Trinidad și continentul venezuelean.", en: "A large, relatively shallow inland sea between Trinidad and the Venezuelan mainland." },
    facts: {
      de: ["Geringer Salzgehalt durch Flussmündungen", "Wichtiger Lebensraum für Meereslebewesen", "Ruhigere Gewässer als der Atlantik"],
      hu: ["Alacsony sótartalom a folyótorkolatok miatt", "Fontos tengeri élőhely", "Nyugodtabb vizek, mint az Atlanti-óceán"],
      ro: ["Salinitate redusă datorită gurilor de râu", "Habitat marin important", "Ape mai calme decât Atlanticul"],
      en: ["Low salinity due to river mouths", "Important marine habitat", "Calmer waters than the Atlantic"]
    }
  },
  {
    id: "tt-soldado-rock-nature-v2",
    type: "island",
    parent: "TT-SIP",
    coords: [-61.9, 10.07],
    name: { de: "Soldado Rock", hu: "Soldado Rock", ro: "Stânca Soldado", en: "Soldado Rock" },
    description: { de: "Eine kleine Felseninsel im Golf von Paria, ein wichtiger Nistplatz für Seevögel.", hu: "Kis sziklasziget a Paria-öbölben, fontos fészkelőhely a tengeri madarak számára.", ro: "O mică insulă stâncoasă în Golful Paria, un important loc de cuibărit pentru păsările marine.", en: "A small rocky island in the Gulf of Paria, an important nesting site for seabirds." },
    facts: {
      de: ["Vogelschutzgebiet", "Felsige, karge Landschaft", "Strategisch im Columbus Channel gelegen"],
      hu: ["Madárrezervátum", "Sziklás, kopár táj", "Stratégiai elhelyezkedés a Kolumbusz-csatornában"],
      ro: ["Sanctuar de păsări", "Peisaj stâncos și arid", "Situat strategic în Canalul Columb"],
      en: ["Bird sanctuary", "Rocky, barren landscape", "Strategically located in the Columbus Channel"]
    }
  },
  {
    id: "tt-buccoo-marsh-nature-v2",
    type: "forest",
    parent: "TT-TOB",
    coords: [-60.81, 11.17],
    name: { de: "Buccoo Marschland", hu: "Buccoo mocsárvidék", ro: "Mlaștina Buccoo", en: "Buccoo Marsh" },
    description: { de: "Ein Mangrovenwald und Feuchtgebiet, das an das Buccoo Riff in Tobago angrenzt.", hu: "Mangroveerdő és vizes élőhely a tobagói Buccoo-zátony mellett.", ro: "O pădure de mangrove și o zonă umedă adiacentă recifului Buccoo din Tobago.", en: "A mangrove forest and wetland area adjacent to the Buccoo Reef in Tobago." },
    facts: {
      de: ["Teil des Buccoo Reef Marine Park", "Wichtige Kinderstube für Fische", "Filtert das Wasser, das zum Riff fließt"],
      hu: ["A Buccoo Reef Tengeri Park része", "Fontos ivadéknevelő hely a halak számára", "Szűri a zátony felé áramló vizet"],
      ro: ["Parte a Parcului Marin Buccoo Reef", "Creșă importantă pentru pești", "Filtrează apa care curge spre recif"],
      en: ["Part of the Buccoo Reef Marine Park", "Important nursery for fish", "Filters water flowing to the reef"]
    }
  },
  {
    id: "tt-gasparee-caves-nature-v2",
    type: "mountain",
    parent: "TT-DMN",
    coords: [-61.6, 10.67],
    name: { de: "Gasparee-Höhlen", hu: "Gasparee-barlangok", ro: "Peșterile Gasparee", en: "Gasparee Caves" },
    description: { de: "Ein Kalksteinhöhlensystem auf der Insel Gaspar Grande mit einem unterirdischen Pool.", hu: "Mészkőbarlangrendszer Gaspar Grande szigetén, egy földalatti medencével.", ro: "Un sistem de peșteri de calcar pe insula Gaspar Grande, cu o piscină subterană.", en: "A limestone cave system on Gaspar Grande island, featuring an underground pool." },
    facts: {
      de: ["Stalaktiten und Stalagmiten", "Klarer unterirdischer Gezeitenpool", "Auf einer der Bocas-Inseln gelegen"],
      hu: ["Sztalaktitok és sztalagmitok", "Tiszta, földalatti árapály-medence", "Az egyik Bocas-szigeten található"],
      ro: ["Stalactite și stalagmite", "Piscină subterană limpede, afectată de maree", "Situată pe una dintre insulele Bocas"],
      en: ["Stalactites and stalagmites", "Clear underground tidal pool", "Located on one of the Bocas Islands"]
    }
  },
  {
    id: "tt-main-ridge-forest-reserve-nature-v2",
    type: "forest",
    parent: "TT-TOB",
    coords: [-60.6667, 11.25],
    name: { de: "Main Ridge Waldreservat", hu: "Main Ridge Erdőrezervátum", ro: "Rezervația forestieră Main Ridge", en: "Main Ridge Forest Reserve" },
    description: { de: "Das älteste gesetzlich geschützte Waldreservat der westlichen Hemisphäre auf Tobago.", hu: "A nyugati félteke legrégebbi, törvény által védett erdőrezervátuma Tobagón.", ro: "Cea mai veche rezervație forestieră protejată legal din emisfera vestică, în Tobago.", en: "The oldest legally protected forest reserve in the Western Hemisphere, located on Tobago." },
    facts: {
      de: ["1776 unter Schutz gestellt", "Wichtiger Lebensraum für Vögel", "Das Rückgrat der Insel Tobago"],
      hu: ["1776-ban védetté nyilvánították", "Fontos madárélőhely", "Tobago szigetének gerince"],
      ro: ["Protejată din 1776", "Habitat important pentru păsări", "Coloana vertebrală a insulei Tobago"],
      en: ["Protected since 1776", "Important birding habitat", "The backbone of Tobago island"]
    }
  },
  {
    id: "tt-oropouche-river-nature-v2",
    type: "river",
    parent: "TT-SGE",
    coords: [-61.1, 10.75],
    name: { de: "Oropouche-Fluss (Nord)", hu: "Oropouche-folyó (Észak)", ro: "Râul Oropouche (Nord)", en: "Oropouche River (North)" },
    description: { de: "Ein Fluss im Nordosten von Trinidad, der bei Valencia entspringt und in den Atlantik mündet.", hu: "Folyó Trinidad északkeleti részén, amely Valencia közelében ered és az Atlanti-óceánba ömlik.", ro: "Un râu în nord-estul Trinidadului, care izvorăște lângă Valencia și se varsă în Atlantic.", en: "A river in northeastern Trinidad, rising near Valencia and flowing into the Atlantic." },
    facts: {
      de: ["Nicht zu verwechseln mit dem südlichen Oropouche", "Wichtige Entwässerung für die Region", "Fließt durch landwirtschaftliche Gebiete"],
      hu: ["Nem tévesztendő össze a déli Oropouche-csal", "Fontos vízelvezető a régió számára", "Mezőgazdasági területeken folyik keresztül"],
      ro: ["A nu se confunda cu Oropouche de sud", "Drenaj important pentru regiune", "Curge prin zone agricole"],
      en: ["Not to be confused with the southern Oropouche", "Important drainage for the region", "Flows through agricultural areas"]
    }
  },
  {
    id: "tt-chacachacare-island-nature-v2",
    type: "island",
    parent: "TT-DMN",
    coords: [-61.75, 10.67],
    name: { de: "Chacachacare Insel", hu: "Chacachacare-sziget", ro: "Insula Chacachacare", en: "Chacachacare Island" },
    description: { de: "Die westlichste der Bocas-Inseln, einst eine Leprakolonie, heute unbewohnt.", hu: "A Bocas-szigetek legnyugatibb tagja, egykor lepratelep volt, ma lakatlan.", ro: "Cea mai vestică dintre insulele Bocas, odată o colonie de leproși, acum nelocuită.", en: "The westernmost of the Bocas Islands, once a leper colony, now uninhabited." },
    facts: {
      de: ["Trockenwald-Ökosystem", "Historische Ruinen und Leuchtturm", "Salzwassersee (Sulphur Bay)"],
      hu: ["Száraz erdő ökoszisztéma", "Történelmi romok és világítótorony", "Sós vizű tó (Sulphur Bay)"],
      ro: ["Ecosistem de pădure uscată", "Ruine istorice și far", "Lac cu apă sărată (Golful Sulphur)"],
      en: ["Dry forest ecosystem", "Historic ruins and lighthouse", "Saltwater pond (Sulphur Bay)"]
    }
  },
  {
    id: "tt-morne-catherine-nature-v2",
    type: "mountain",
    parent: "TT-SGE",
    coords: [-61.1, 10.72],
    name: { de: "Morne Catherine", hu: "Morne Catherine", ro: "Morne Catherine", en: "Morne Catherine" },
    description: { de: "Ein bemerkenswerter Gipfel im östlichen Teil der Northern Range.", hu: "Jelentős csúcs az Északi-hegység keleti részén.", ro: "Un vârf notabil în partea de est a Northern Range.", en: "A notable peak in the eastern part of the Northern Range." },
    facts: {
      de: ["Auch als Prizgar-Gipfel bekannt", "Bietet Ausblicke auf die Ostküste", "Teil eines ausgedehnten Waldgebiets"],
      hu: ["Prizgar-csúcsként is ismert", "Kilátást nyújt a keleti partra", "Egy kiterjedt erdőterület része"],
      ro: ["Cunoscut și sub numele de Vârful Prizgar", "Oferă vederi spre coasta de est", "Parte a unei zone forestiere extinse"],
      en: ["Also known as Prizgar Peak", "Offers views of the east coast", "Part of an extensive forested area"]
    }
  },
  {
    id: "tt-columbus-bay-nature-v2",
    type: "sea",
    parent: "TT-SIP",
    coords: [-61.85, 10.06],
    name: { de: "Columbus-Bucht", hu: "Kolumbusz-öböl", ro: "Golful Columb", en: "Columbus Bay" },
    description: { de: "Eine Bucht an der Südwestspitze von Trinidad, wo Christoph Kolumbus 1498 gelandet sein soll.", hu: "Öböl Trinidad délnyugati csücskénél, ahol állítólag Kolumbusz Kristóf partra szállt 1498-ban.", ro: "Un golf la vârful de sud-vest al Trinidadului, unde se spune că a debarcat Cristofor Columb în 1498.", en: "A bay on the southwestern tip of Trinidad, where Christopher Columbus is said to have landed in 1498." },
    facts: {
      de: ["Historischer Landeplatz", "Sandstrände und Kokospalmen", "Blick auf den Columbus Channel"],
      hu: ["Történelmi partraszállási hely", "Homokos strandok és kókuszpálmák", "Kilátás a Kolumbusz-csatornára"],
      ro: ["Loc de debarcare istoric", "Plaje cu nisip și cocotieri", "Vedere spre Canalul Columb"],
      en: ["Historic landing site", "Sandy beaches and coconut palms", "Faces the Columbus Channel"]
    }
  },
  {
    id: "tt-hollis-reservoir-nature-v2",
    type: "lake",
    parent: "TT-TUP",
    coords: [-61.26, 10.67],
    name: { de: "Hollis-Stausee", hu: "Hollis-víztározó", ro: "Rezervorul Hollis", en: "Hollis Reservoir" },
    description: { de: "Trinidads ältester Stausee, umgeben von Wald in der Northern Range.", hu: "Trinidad legrégebbi víztározója, amelyet erdő vesz körül az Északi-hegységben.", ro: "Cel mai vechi rezervor din Trinidad, înconjurat de pădure în Northern Range.", en: "Trinidad's oldest reservoir, surrounded by forest in the Northern Range." },
    facts: {
      de: ["1936 erbaut", "Wichtige Wasserquelle", "Beliebtes Angel- und Wandergebiet"],
      hu: ["1936-ban épült", "Fontos vízforrás", "Népszerű horgász- és túrázóhely"],
      ro: ["Construit în 1936", "Sursă importantă de apă", "Zonă populară pentru pescuit și drumeții"],
      en: ["Constructed in 1936", "Important water source", "Popular fishing and hiking area"]
    }
  },
  {
    id: "tt-trinity-hills-wildlife-sanctuary-nature-v2",
    type: "forest",
    parent: "TT-PRT",
    coords: [-61.16, 10.08],
    name: { de: "Trinity Hills Wildschutzgebiet", hu: "Trinity Hills Vadvédelmi Terület", ro: "Sanctuarul de faună sălbatică Trinity Hills", en: "Trinity Hills Wildlife Sanctuary" },
    description: { de: "Ein großes, hügeliges Waldschutzgebiet im Südosten Trinidads.", hu: "Nagy, dombos erdővédelmi terület Trinidad délkeleti részén.", ro: "O mare rezervație forestieră deluroasă în sud-estul Trinidadului.", en: "A large, hilly forested sanctuary in southeastern Trinidad." },
    facts: {
      de: ["Schützt eine vielfältige Fauna, einschließlich Ozelots", "Wichtige Wasserscheide", "Hügeliges Gelände"],
      hu: ["Védelmet nyújt a változatos állatvilágnak, beleértve az ocelotot is", "Fontos vízgyűjtő terület", "Dombos terep"],
      ro: ["Protejează fauna diversă, inclusiv ocelotul", "Bazin hidrografic important", "Teren deluros"],
      en: ["Protects diverse fauna, including ocelots", "Important watershed area", "Hilly terrain"]
    }
  },
  {
    id: "tt-godineau-river-nature-v2",
    type: "river",
    parent: "TT-PED",
    coords: [-61.5, 10.22],
    name: { de: "Godineau-Fluss", hu: "Godineau-folyó", ro: "Râul Godineau", en: "Godineau River" },
    description: { de: "Ein Fluss im Südwesten Trinidads, der durch die Oropouche-Lagune fließt.", hu: "Folyó Trinidad délnyugati részén, amely az Oropouche-lagúnán keresztül folyik.", ro: "Un râu în sud-vestul Trinidadului, care curge prin laguna Oropouche.", en: "A river in southwestern Trinidad that flows through the Oropouche Lagoon." },
    facts: {
      de: ["Mündet in den Golf von Paria", "Wichtig für die Entwässerung des Tieflandes", "Unterstützt Mangroven-Ökosysteme"],
      hu: ["A Paria-öbölbe ömlik", "Fontos a síkság vízelvezetéséhez", "Támogatja a mangrove ökoszisztémákat"],
      ro: ["Se varsă în Golful Paria", "Important pentru drenajul câmpiei", "Susține ecosistemele de mangrove"],
      en: ["Empties into the Gulf of Paria", "Important for lowland drainage", "Supports mangrove ecosystems"]
    }
  },
  {
    id: "tt-aripero-savannas-nature-v2",
    type: "forest",
    parent: "TT-SIP",
    coords: [-61.55, 10.22],
    name: { de: "Aripero-Savannen", hu: "Aripero-szavannák", ro: "Savanele Aripero", en: "Aripero Savannas" },
    description: { de: "Ein einzigartiges Savannen-Ökosystem auf weißen Sandböden in Süd-Trinidad.", hu: "Egyedülálló szavanna ökoszisztéma fehér homokos talajon Dél-Trinidadban.", ro: "Un ecosistem unic de savană pe soluri de nisip alb în sudul Trinidadului.", en: "A unique savanna ecosystem on white sand soils in southern Trinidad." },
    facts: {
      de: ["Wissenschaftlich interessantes Gebiet", "Seltene Pflanzenarten", "Gefährdeter Lebensraum"],
      hu: ["Tudományos szempontból érdekes terület", "Ritka növényfajok", "Veszélyeztetett élőhely"],
      ro: ["Zonă de interes științific", "Specii rare de plante", "Habitat pe cale de dispariție"],
      en: ["Scientific area of interest", "Rare plant species", "Endangered habitat"]
    }
  },
  {
    id: "tt-la-vache-bay-nature-v2",
    type: "sea",
    parent: "TT-DMN",
    coords: [-61.7, 10.68],
    name: { de: "La Vache Bucht", hu: "La Vache-öböl", ro: "Golful La Vache", en: "La Vache Bay" },
    description: { de: "Eine abgelegene Bucht auf der Insel Chacachacare, bekannt für ihren ruhigen Ankerplatz.", hu: "Félreeső öböl Chacachacare szigetén, amely nyugodt horgonyzóhelyéről ismert.", ro: "Un golf izolat pe insula Chacachacare, cunoscut pentru ancorajul său liniștit.", en: "A secluded bay on Chacachacare island, known for its calm anchorage." },
    facts: {
      de: ["Teil der Bocas-Inseln", "Beliebt bei Seglern", "Klares Wasser und felsige Küste"],
      hu: ["A Bocas-szigetek része", "Népszerű a vitorlázók körében", "Tiszta víz és sziklás part"],
      ro: ["Parte a insulelor Bocas", "Popular printre navigatori", "Apă limpede și coastă stâncoasă"],
      en: ["Part of the Bocas Islands", "Popular with sailors", "Clear waters and rocky coast"]
    }
  },
  {
    id: "tt-tamana-mountain-nature-v2",
    type: "mountain",
    parent: "TT-SGE",
    coords: [-61.22, 10.5],
    name: { de: "Tamana Berg", hu: "Tamana-hegy", ro: "Muntele Tamana", en: "Tamana Mountain" },
    description: { de: "Ein Berg in der Central Range, berühmt für seine Fledermaushöhlen.", hu: "Hegy a Központi-hegységben, amely denevérbarlangjairól híres.", ro: "Un munte în Central Range, renumit pentru peșterile sale cu lilieci.", en: "A mountain in the Central Range famous for its bat caves." },
    facts: {
      de: ["Größte Fledermauskolonie in Trinidad", "Beherbergt Millionen von Fledermäusen", "Spektakulärer Ausflug der Fledermäuse bei Dämmerung"],
      hu: ["Trinidad legnagyobb denevérkolóniája", "Több millió denevérnek ad otthont", "Látványos denevérkirepülés alkonyatkor"],
      ro: ["Cea mai mare colonie de lilieci din Trinidad", "Găzduiește milioane de lilieci", "Ieșire spectaculoasă a liliecilor la amurg"],
      en: ["Largest bat colony in Trinidad", "Home to millions of bats", "Spectacular dusk emergence of bats"]
    }
  },
  {
    id: "tt-icacos-point-nature-v2",
    type: "sea",
    parent: "TT-SIP",
    coords: [-61.92, 10.06],
    name: { de: "Icacos Point", hu: "Icacos-fok", ro: "Punctul Icacos", en: "Icacos Point" },
    description: { de: "Der südwestlichste Punkt der Insel Trinidad, der Venezuela am nächsten liegt.", hu: "Trinidad szigetének legdélnyugatibb pontja, a legközelebb Venezuelához.", ro: "Cel mai sud-vestic punct al insulei Trinidad, cel mai apropiat de Venezuela.", en: "The southwesternmost point of Trinidad island, closest to Venezuela." },
    facts: {
      de: ["Nur 11 km von Venezuela entfernt", "Gekennzeichnet durch Kokospalmenhaine", "Wichtiger Punkt für die Fischerei"],
      hu: ["Mindössze 11 km-re Venezuelától", "Kókuszpálma-ligetek jellemzik", "Fontos halászati pont"],
      ro: ["La doar 11 km de Venezuela", "Caracterizat de plantații de cocotieri", "Punct important pentru pescuit"],
      en: ["Only 11 km from Venezuela", "Characterized by coconut groves", "Important point for fishing"]
    }
  },
  {
    id: "tt-fishing-pond-nature-v2",
    type: "lake",
    parent: "TT-SGE",
    coords: [-61.07, 10.6],
    name: { de: "Fishing Pond", hu: "Fishing Pond", ro: "Balta de pescuit", en: "Fishing Pond" },
    description: { de: "Ein Süßwasser-Feuchtgebiet und Lagunensystem im Nordosten Trinidads.", hu: "Édesvízi vizes élőhely és lagúnarendszer Trinidad északkeleti részén.", ro: "O zonă umedă de apă dulce și un sistem lagunar în nord-estul Trinidadului.", en: "A freshwater wetland and lagoon system in northeastern Trinidad." },
    facts: {
      de: ["Wichtiger Lebensraum für Wasservögel", "Mischung aus Sumpf und Lagune", "Unterstützt eine vielfältige Aquafauna"],
      hu: ["Fontos vízi madár élőhely", "Mocsár és lagúna keveréke", "Támogatja a változatos vízi állatvilágot"],
      ro: ["Habitat important pentru păsările acvatice", "Amestec de mlaștină și lagună", "Susține o faună acvatică diversă"],
      en: ["Important habitat for water birds", "Mix of swamp and lagoon", "Supports diverse aquatic fauna"]
    }
  },
  {
    id: "tt-st-giles-islands-nature-v2",
    type: "island",
    parent: "TT-TOB",
    coords: [-60.52, 11.35],
    name: { de: "St. Giles Inseln", hu: "St. Giles-szigetek", ro: "Insulele St. Giles", en: "St. Giles Islands" },
    description: { de: "Eine Gruppe kleiner, felsiger Inseln vor der Nordostspitze von Tobago.", hu: "Kis, sziklás szigetek csoportja Tobago északkeleti csücskénél.", ro: "Un grup de insule mici și stâncoase în largul vârfului de nord-est al Tobago.", en: "A group of small, rocky islands off the northeastern tip of Tobago." },
    facts: {
      de: ["Wichtiger Nistplatz für Seevögel", "Dramatische Felsformationen", "Starke Meeresströmungen umgeben die Inseln"],
      hu: ["Fontos tengeri madár fészkelőhely", "Drámai sziklaképződmények", "Erős tengeri áramlatok veszik körül a szigeteket"],
      ro: ["Loc de cuibărit important pentru păsările marine", "Formațiuni stâncoase dramatice", "Curenți marini puternici înconjoară insulele"],
      en: ["Major seabird nesting site", "Dramatic rock formations", "Strong sea currents surround the islands"]
    }
  },
  {
    id: "tt-caparo-river-nature-v2",
    type: "river",
    parent: "TT-CTT",
    coords: [-61.42, 10.48],
    name: { de: "Caparo-Fluss", hu: "Caparo-folyó", ro: "Râul Caparo", en: "Caparo River" },
    description: { de: "Ein bedeutender Fluss in Zentral-Trinidad, der in den Golf von Paria mündet.", hu: "Jelentős folyó Közép-Trinidadban, amely a Paria-öbölbe ömlik.", ro: "Un râu semnificativ în centrul Trinidadului, care se varsă în Golful Paria.", en: "A significant river in central Trinidad, flowing into the Gulf of Paria." },
    facts: {
      de: ["Fließt durch landwirtschaftliche Gebiete", "Beeinflusst durch Gezeiten in seinem Unterlauf", "Wichtig für die lokale Entwässerung"],
      hu: ["Mezőgazdasági területeken folyik keresztül", "Alsó szakaszát az árapály befolyásolja", "Fontos a helyi vízelvezetés szempontjából"],
      ro: ["Curge prin zone agricole", "Influențat de maree în cursul inferior", "Important pentru drenajul local"],
      en: ["Flows through agricultural areas", "Affected by tides in its lower reaches", "Important for local drainage"]
    }
  },
  {
    id: "tt-cronstadt-island-nature-v2",
    type: "island",
    parent: "TT-DMN",
    coords: [-61.6, 10.66],
    name: { de: "Cronstadt Insel", hu: "Cronstadt-sziget", ro: "Insula Cronstadt", en: "Cronstadt Island" },
    description: { de: "Eine der Bocas-Inseln in der Nähe von Chaguaramas, auch bekannt als Begorrat Island.", hu: "A Bocas-szigetek egyike Chaguaramas közelében, más néven Begorrat-sziget.", ro: "Una dintre Insulele Bocas, lângă Chaguaramas, cunoscută și sub numele de Insula Begorrat.", en: "One of the Bocas Islands near Chaguaramas, also known as Begorrat Island." },
    facts: {
      de: ["Historisch als Quarantänestation genutzt", "Trockenwaldvegetation", "Private Residenzen"],
      hu: ["Történelmileg karanténállomásként használták", "Száraz erdő növényzet", "Magánlakások"],
      ro: ["Folosită istoric ca stație de carantină", "Vegetație de pădure uscată", "Reședințe private"],
      en: ["Historically used as a quarantine station", "Dry forest vegetation", "Private residences"]
    }
  },
  {
    id: "tt-erin-bay-nature-v2",
    type: "sea",
    parent: "TT-SIP",
    coords: [-61.66, 10.08],
    name: { de: "Erin-Bucht", hu: "Erin-öböl", ro: "Golful Erin", en: "Erin Bay" },
    description: { de: "Eine große Bucht an der Südküste Trinidads, bekannt für ihre ruhigen Gewässer und Fischereidörfer.", hu: "Nagy öböl Trinidad déli partján, amely nyugodt vizeiről és halászfalvairól ismert.", ro: "Un golf mare pe coasta de sud a Trinidadului, cunoscut pentru apele sale calme și satele pescărești.", en: "A large bay on the south coast of Trinidad, known for its calm waters and fishing villages." },
    facts: {
      de: ["Wichtiges Fischereigebiet", "Sandstrände", "Geschützt vor den atlantischen Wellen"],
      hu: ["Fontos halászati terület", "Homokos strandok", "Védett az atlanti hullámoktól"],
      ro: ["Zonă importantă de pescuit", "Plaje cu nisip", "Protejat de valurile Atlanticului"],
      en: ["Important fishing area", "Sandy beaches", "Sheltered from the Atlantic swell"]
    }
  },
  {
    id: "tt-moruga-river-nature-v2",
    type: "river",
    parent: "TT-PRT",
    coords: [-61.28, 10.08],
    name: { de: "Moruga-Fluss", hu: "Moruga-folyó", ro: "Râul Moruga", en: "Moruga River" },
    description: { de: "Ein Fluss an der Südküste Trinidads, der bei dem historischen Dorf Moruga ins Meer mündet.", hu: "Folyó Trinidad déli partján, amely a történelmi Moruga falu közelében ömlik a tengerbe.", ro: "Un râu pe coasta de sud a Trinidadului, care se varsă în mare lângă satul istoric Moruga.", en: "A river on the south coast of Trinidad, emptying into the sea near the historic village of Moruga." },
    facts: {
      de: ["Mündet in den Columbus Channel", "Unterstützt lokale Fischergemeinden", "Entwässert Teile der Southern Range"],
      hu: ["A Kolumbusz-csatornába torkollik", "Támogatja a helyi halászközösségeket", "A Déli-hegység egyes részeit vezeti le"],
      ro: ["Se varsă în Canalul Columb", "Susține comunitățile locale de pescari", "Drenează părți din Southern Range"],
      en: ["Empties into the Columbus Channel", "Supports local fishing communities", "Drains parts of the Southern Range"]
    }
  },
  {
    id: "tt-paria-falls-nature-v2",
    type: "river",
    parent: "TT-SJL",
    coords: [-61.1, 10.79],
    name: { de: "Paria-Wasserfälle", hu: "Paria-vízesés", ro: "Cascada Paria", en: "Paria Falls" },
    description: { de: "Ein abgelegener Wasserfall und ein tiefes Becken am Ende einer Wanderung entlang der Nordküste.", hu: "Félreeső vízesés és mély medence egy túra végén az északi part mentén.", ro: "O cascadă izolată și o piscină adâncă la capătul unei drumeții pe coasta de nord.", en: "A secluded waterfall and deep plunge pool at the end of a hike along the north coast." },
    facts: {
      de: ["Erreichbar über einen Küstenwanderweg", "Mündet in die Paria Bay", "Umgeben von unberührtem Regenwald"],
      hu: ["Part menti túraútvonalon érhető el", "A Paria-öbölbe ömlik", "Érintetlen esőerdő veszi körül"],
      ro: ["Accesibil printr-o potecă de coastă", "Se varsă în Golful Paria", "Înconjurat de pădure tropicală virgină"],
      en: ["Reached via a coastal hiking trail", "Flows into Paria Bay", "Surrounded by pristine rainforest"]
    }
  },
  {
    id: "tt-guapo-bay-nature-v2",
    type: "sea",
    parent: "TT-PTF",
    coords: [-61.65, 10.2],
    name: { de: "Guapo-Bucht", hu: "Guapo-öböl", ro: "Golful Guapo", en: "Guapo Bay" },
    description: { de: "Eine Bucht im Südwesten Trinidads, die an das Ölfeld von Point Fortin angrenzt.", hu: "Öböl Trinidad délnyugati részén, a Point Fortin-i olajmező mellett.", ro: "Un golf în sud-vestul Trinidadului, adiacent câmpului petrolier Point Fortin.", en: "A bay in southwestern Trinidad, adjacent to the Point Fortin oilfield." },
    facts: {
      de: ["Küste der Ölindustrie", "Blick auf Offshore-Plattformen", "Mischung aus Industrie und Natur"],
      hu: ["Az olajipar partvidéke", "Kilátás az offshore platformokra", "Az ipar és a természet keveréke"],
      ro: ["Coasta industriei petroliere", "Vedere spre platformele offshore", "Amestec de industrie și natură"],
      en: ["Coastline of the oil industry", "Views of offshore platforms", "Mix of industry and nature"]
    }
  },
  {
    id: "tt-navet-dam-nature-v2",
    type: "lake",
    parent: "TT-CTT",
    coords: [-61.26, 10.37],
    name: { de: "Navet-Damm", hu: "Navet-gát", ro: "Barajul Navet", en: "Navet Dam" },
    description: { de: "Ein großer Stausee in Zentral-Trinidad, eine wichtige Wasserquelle für die Region.", hu: "Nagy víztározó Közép-Trinidadban, fontos vízforrás a régió számára.", ro: "Un mare rezervor în centrul Trinidadului, o sursă importantă de apă pentru regiune.", en: "A large reservoir in central Trinidad, an important water source for the region." },
    facts: {
      de: ["Einer der größten Stauseen des Landes", "Umgeben von Wald und landwirtschaftlichen Flächen", "Versorgt einen großen Teil von Trinidad mit Wasser"],
      hu: ["Az ország egyik legnagyobb víztározója", "Erdő és mezőgazdasági területek veszik körül", "Trinidad nagy részét ellátja vízzel"],
      ro: ["Unul dintre cele mai mari rezervoare din țară", "Înconjurat de pădure și terenuri agricole", "Furnizează apă unei mari părți din Trinidad"],
      en: ["One of the country's largest reservoirs", "Surrounded by forest and agricultural land", "Supplies water to a large part of Trinidad"]
    }
  },
  {
    id: "tt-sans-souci-bay-nature-v2",
    type: "sea",
    parent: "TT-SGE",
    coords: [-61.02, 10.82],
    name: { de: "Sans Souci Bucht", hu: "Sans Souci-öböl", ro: "Golful Sans Souci", en: "Sans Souci Bay" },
    description: { de: "Eine malerische Bucht an der Nordküste, die bei Surfern beliebt ist.", hu: "Festői öböl az északi parton, amely népszerű a szörfösök körében.", ro: "Un golf pitoresc pe coasta de nord, popular printre surferi.", en: "A picturesque bay on the north coast, popular with surfers." },
    facts: {
      de: ["Bekannt für gute Surfbedingungen", "Felsige Landzungen und Sandstrand", "Abgelegenes Dorf an der Küste"],
      hu: ["Jó szörfözési feltételeiről ismert", "Sziklás földnyelvek és homokos strand", "Félreeső tengerparti falu"],
      ro: ["Cunoscut pentru condiții bune de surf", "Promontorii stâncoase și plajă cu nisip", "Sat de coastă izolat"],
      en: ["Known for good surfing conditions", "Rocky headlands and sandy beach", "Remote coastal village"]
    }
  },
  {
    id: "tt-galleons-passage-nature-v2",
    type: "sea",
    parent: "TT",
    coords: [-60.75, 10.95],
    name: { de: "Galleons Passage", hu: "Galleons-átjáró", ro: "Pasajul Galleons", en: "Galleons Passage" },
    description: { de: "Die Meerespassage, die die Inseln Trinidad und Tobago trennt.", hu: "A tengeri átjáró, amely elválasztja Trinidad és Tobago szigetét.", ro: "Pasajul maritim care separă insulele Trinidad și Tobago.", en: "The channel of sea that separates the islands of Trinidad and Tobago." },
    facts: {
      de: ["Ungefähr 30 km breit", "Kann raue Seebedingungen haben", "Wichtige Schifffahrtsroute"],
      hu: ["Körülbelül 30 km széles", "Lehetnek zord tengeri viszonyok", "Fontos hajózási útvonal"],
      ro: ["Aproximativ 30 km lățime", "Poate avea condiții maritime agitate", "Ruta de navigație importantă"],
      en: ["Approximately 30 km wide", "Can have rough sea conditions", "Important shipping lane"]
    }
  },
  {
    id: "tt-saut-d-eau-island-nature-v2",
    type: "island",
    parent: "TT-DMN",
    coords: [-61.55, 10.77],
    name: { de: "Saut d'Eau Insel", hu: "Saut d'Eau-sziget", ro: "Insula Saut d'Eau", en: "Saut d'Eau Island" },
    description: { de: "Eine kleine, bewaldete Insel vor der Nordküste Trinidads, ein Wildschutzgebiet.", hu: "Kis, erdős sziget Trinidad északi partjainál, vadvédelmi terület.", ro: "O mică insulă împădurită în largul coastei de nord a Trinidadului, un sanctuar pentru animale sălbatice.", en: "A small, forested island off the north coast of Trinidad, a wildlife sanctuary." },
    facts: {
      de: ["Schutzgebiet für Pelikane und andere Seevögel", "Unbewohnt", "Bedeutet 'Wasserfall' auf Französisch"],
      hu: ["Pelikánok és más tengeri madarak védett területe", "Lakatlan", "Franciául 'vízesést' jelent"],
      ro: ["Sanctuar pentru pelicani și alte păsări marine", "Nelocuită", "Înseamnă 'cascadă' în franceză"],
      en: ["Sanctuary for pelicans and other seabirds", "Uninhabited", "Means 'waterfall' in French"]
    }
  },
  {
    id: "tt-celestial-park-forest-v2",
    type: "forest",
    parent: "TT-TOB",
    coords: [-60.57, 11.29],
    name: { de: "Himmlischer Park Wald", hu: "Égi Parkerdő", ro: "Pădurea Parcului Celest", en: "Celestial Park Forest" },
    description: { de: "Ein privates Naturschutzgebiet in Tobago, das sich dem Schutz des Regenwaldes widmet.", hu: "Magán természetvédelmi terület Tobagón, az esőerdő védelmére szentelve.", ro: "O rezervație naturală privată din Tobago, dedicată protejării pădurii tropicale.", en: "A private nature reserve in Tobago dedicated to rainforest conservation." },
    facts: {
      de: ["Ökotourismus-Initiative", "Schützt einen Teil des Main Ridge", "Geführte Naturwanderungen"],
      hu: ["Ökoturisztikai kezdeményezés", "Védi a Main Ridge egy részét", "Vezetett természetjáró túrák"],
      ro: ["Inițiativă de ecoturism", "Protejează o parte din Main Ridge", "Drumeții ghidate în natură"],
      en: ["Ecotourism initiative", "Protects a section of the Main Ridge", "Guided nature walks"]
    }
  }
]
