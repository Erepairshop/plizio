import type { POI } from "./poi";

export const poiExtraTrinidadLifeV2: POI[] = [
  {
    id: "tt-caroni-bird-sanctuary-life-v2",
    type: "animal-habitat",
    parent: "TT-CTT",
    coords: [-61.45, 10.58],
    name: { de: "Caroni Vogelreservat", hu: "Caroni madarrezervatum", ro: "Sanctuarul de pasari Caroni", en: "Caroni Bird Sanctuary" },
    description: { de: "Ein Mangrovengebiet, das fur die roten Ibisse bekannt ist.", hu: "Mangrovevidek, amely a skarlat ibiszekrol ismert.", ro: "O zona de mangrove cunoscuta pentru ibisii stacojii.", en: "A mangrove wetland known for its scarlet ibises." },
    facts: {
      de: ["Heimat des Nationalvogels", "Beliebte Sonnenuntergangsboote", "Wichtiges Mangroven-Okosystem"],
      hu: ["A nemzeti madar otthona", "Napsuteti hajoturak", "Fontos mangrove oszisztema"],
      ro: ["Casa pasarii nationale", "Tururi cu barca la apus", "Ecosistem important de mangrove"],
      en: ["Home to the national bird", "Popular sunset boat tours", "Important mangrove ecosystem"]
    }
  },
  {
    id: "tt-asa-wright-life-v2",
    type: "animal-habitat",
    parent: "TT-TUP",
    coords: [-61.2833, 10.7167],
    name: { de: "Asa Wright Naturzentrum", hu: "Asa Wright termeszetkozpont", ro: "Centrul de natura Asa Wright", en: "Asa Wright Nature Centre" },
    description: { de: "Ein weltbekanntes Vogelbeobachtungszentrum in den Bergen.", hu: "Vilaghiru madarmegfigyelo kozpont a hegyekben.", ro: "Un centru celebru de observare a pasarilor in munti.", en: "A world-famous birdwatching center in the hills." },
    facts: {
      de: ["Beruhmt fur Tukane", "Ehemalige Kakao- und Kaffeeplantage", "Biodiversitats-Hotspot"],
      hu: ["Hires a tukanokrol", "Egykori kakao- es kavelyultetveny", "Biodiverzitas-gazdag hely"],
      ro: ["Faimos pentru tucani", "Fosta plantatie de cacao si cafea", "Punct fierbinte al biodiversitatii"],
      en: ["Famous for toucans", "Former cocoa and coffee estate", "Biodiversity hotspot"]
    }
  },
  {
    id: "tt-yerette-life-v2",
    type: "animal-habitat",
    parent: "TT-TUP",
    coords: [-61.4, 10.67],
    name: { de: "Yerette Kolibrimenedek", hu: "Yerette kolibrimenedek", ro: "Sanctuarul de colibri Yerette", en: "Yerette Hummingbird Sanctuary" },
    description: { de: "Ein privates Refugium fur Kolibris im Maracas-Tal.", hu: "Magan kolibrimenedekhely a Maracas-volgyben.", ro: "Un refugiu privat pentru colibri in Valea Maracas.", en: "A private hummingbird sanctuary in Maracas Valley." },
    facts: {
      de: ["13 Kolibriarten", "Gefuhrte Naturbesuche", "Fotografie-Standort"],
      hu: ["13 kolibrifaj", "Vezetett termeszetlatogatasok", "Fotografiai helyszin"],
      ro: ["13 specii de colibri", "Vizite ghidate in natura", "Loc bun pentru fotografie"],
      en: ["13 hummingbird species", "Guided nature visits", "Great for photography"]
    }
  },
  {
    id: "tt-emperor-valley-zoo-life-v2",
    type: "kid-landmark",
    parent: "TT-POS",
    coords: [-61.52, 10.665],
    name: { de: "Emperor Valley Zoo", hu: "Emperor Valley allatkert", ro: "Gradina Zoologica Emperor Valley", en: "Emperor Valley Zoo" },
    description: { de: "Der bekannteste Zoo von Trinidad und Tobago.", hu: "Trinidad es Tobago legismertebb allatkertje.", ro: "Cea mai cunoscuta gradina zoologica din Trinidad si Tobago.", en: "The best-known zoo in Trinidad and Tobago." },
    facts: {
      de: ["In Port of Spain", "Beliebt bei Familien", "Verbindet Lernen und Freizeit"],
      hu: ["Port of Spainben", "Csaladok kedvence", "Tanulas es szorakozas"],
      ro: ["In Port of Spain", "Popular pentru familii", "Imbina invatarea si distractia"],
      en: ["In Port of Spain", "Popular with families", "Combines learning and fun"]
    }
  },
  {
    id: "tt-queens-park-savannah-life-v2",
    type: "kid-landmark",
    parent: "TT-POS",
    coords: [-61.5147, 10.6686],
    name: { de: "Queens Park Savannah", hu: "Queens Park Savannah", ro: "Queen's Park Savannah", en: "Queen's Park Savannah" },
    description: { de: "Die grosste offene Flache in Port of Spain.", hu: "Port of Spain legnagyobb nyitott tere.", ro: "Cel mai mare spatiu deschis din Port of Spain.", en: "The largest open space in Port of Spain." },
    facts: {
      de: ["Ort fur Karneval", "Freizeit und Sport", "Umgeben von Kolonialhausern"],
      hu: ["A karneval helyszine", "Szabadidos es sportos terulet", "Gyarmati hazak veszik korul"],
      ro: ["Loc pentru Carnaval", "Timp liber si sport", "Inconjurata de case coloniale"],
      en: ["Carnival venue", "Recreation and sports", "Surrounded by colonial mansions"]
    }
  },
  {
    id: "tt-maracas-bay-life-v2",
    type: "kid-landmark",
    parent: "TT-SJL",
    coords: [-61.4392, 10.7583],
    name: { de: "Maracas Bay", hu: "Maracas-obol", ro: "Golful Maracas", en: "Maracas Bay" },
    description: { de: "Trinidads bekanntester Strand und ein beliebter Wochenendort.", hu: "Trinidad legismertebb strandja es kedvelt hetvegi helyszin.", ro: "Cea mai cunoscuta plaja din Trinidad si o destinatie de weekend.", en: "Trinidad's most famous beach and a popular weekend spot." },
    facts: {
      de: ["Bekannt fur Bake and Shark", "Nordkustenfahrt", "Breiter Sandstrand"],
      hu: ["Hires a Bake and Sharkrol", "Eszaki parti ut", "Szeles homokos part"],
      ro: ["Faimos pentru Bake and Shark", "Drum pitoresc pe coasta de nord", "Plaja lata cu nisip"],
      en: ["Famous for Bake and Shark", "Scenic North Coast drive", "Wide sandy beach"]
    }
  },
  {
    id: "tt-cleaver-woods-life-v2",
    type: "forest",
    parent: "TT-TUP",
    coords: [-61.45, 10.63],
    name: { de: "Cleaver Woods", hu: "Cleaver Woods", ro: "Cleaver Woods", en: "Cleaver Woods" },
    description: { de: "Ein Wald- und Erholungspark in Ost-Trinidad.", hu: "Erdos es piheno park Kelet-Trinidadban.", ro: "Un parc forestier si de recreere in estul Trinidadului.", en: "A forest and recreation park in eastern Trinidad." },
    facts: {
      de: ["Naturpfade", "Beliebt bei Schulgruppen", "Kleines Besucherzentrum"],
      hu: ["Termeszeti utak", "Iskolai csoportok kedvence", "Kis latogatokozpont"],
      ro: ["Trasee in natura", "Popular printre grupurile scolare", "Mic centru pentru vizitatori"],
      en: ["Nature trails", "Popular for school trips", "Small visitor centre"]
    }
  },
  {
    id: "tt-pointe-a-pierre-wildfowl-life-v2",
    type: "animal-habitat",
    parent: "TT-CTT",
    coords: [-61.45, 10.33],
    name: { de: "Pointe a Pierre Wildvogelpark", hu: "Pointe a Pierre vadmadarpark", ro: "Rezervatia de pasari salbatice Pointe a Pierre", en: "Pointe-a-Pierre Wildfowl Trust" },
    description: { de: "Ein Schutzgebiet mit Lagunen, Vögeln und ruhigen Wegen.", hu: "Vedett terulet lagunakkal, madarakkal es csendes setanyokkal.", ro: "O rezervatie cu lagune, pasari si alei linistite.", en: "A sanctuary with lagoons, birds, and quiet walking paths." },
    facts: {
      de: ["Wichtige Vogelstation", "Lagunen und Mangroven", "Beliebt bei Naturfreunden"],
      hu: ["Fontos madarallomas", "Lagunak es mangrovek", "Kedvelt a termeszetbaratok koreben"],
      ro: ["Statie importanta pentru pasari", "Lagune si mangrove", "Populara pentru iubitorii de natura"],
      en: ["Important bird site", "Lagoons and mangroves", "Popular with nature lovers"]
    }
  },
  {
    id: "tt-caroni-sugarcane-belt-life-v2",
    type: "agriculture",
    parent: "TT-CTT",
    coords: [-61.42, 10.5],
    name: { de: "Caroni Zuckerrohrgurtel", hu: "Caroni cukornadov", ro: "Centura de trestie Caroni", en: "Caroni Sugarcane Belt" },
    description: { de: "Eine landwirtschaftliche Zone mit traditionellem Zuckerrohranbau.", hu: "Hagyomanyos cukornad-termesztesi regio.", ro: "O zona agricola cu cultivare traditionala a trestiei de zahar.", en: "An agricultural zone with traditional sugarcane farming." },
    facts: {
      de: ["Fruchtbare Ebenen", "Wichtiger Teil der Agrargeschichte", "Offene Felder und Kanale"],
      hu: ["Termekeny siksagok", "A mezogazdasagi tortenelem fontos resze", "Nyitott mezok es csatornak"],
      ro: ["Campii fertile", "Parte importanta a istoriei agricole", "Campuri deschise si canale"],
      en: ["Fertile plains", "Part of agricultural history", "Open fields and canals"]
    }
  },
  {
    id: "tt-central-range-cocoa-life-v2",
    type: "agriculture",
    parent: "TT-CTT",
    coords: [-61.35, 10.42],
    name: { de: "Central Range Kakaoanbau", hu: "Central Range kakao", ro: "Plantatii de cacao din Central Range", en: "Central Range Cocoa Farms" },
    description: { de: "Kakaofarmen an den Hangen der Central Range.", hu: "Kakaofarmok a Central Range lejtoin.", ro: "Ferme de cacao pe pantele din Central Range.", en: "Cocoa farms on the slopes of the Central Range." },
    facts: {
      de: ["Kakaotradition", "Schattenanbau unter Bäumen", "Kleinskalige Farmen"],
      hu: ["Kakaohagyomany", "Fak alatt, arnyekban novekvo termesztes", "Kismeretu farmok"],
      ro: ["Traditie in cacao", "Cultivare la umbra sub arbori", "Ferme de mici dimensiuni"],
      en: ["Cocoa tradition", "Shade-grown under trees", "Small-scale farms"]
    }
  },
  {
    id: "tt-aripo-savannas-life-v2",
    type: "forest",
    parent: "TT-SGE",
    coords: [-61.22, 10.5],
    name: { de: "Aripo Savannen", hu: "Aripo szavannak", ro: "Savanele Aripo", en: "Aripo Savannas" },
    description: { de: "Ein einzigartiges Savannen- und Feuchtgebietssystem.", hu: "Egyedulallo szavanna es vizeselhely-rendszer.", ro: "Un sistem unic de savana si zone umede.", en: "A unique savanna and wetland system." },
    facts: {
      de: ["Seltene Pflanzen", "Wissenschaftlich wichtig", "Empfindlicher Lebensraum"],
      hu: ["Ritka novenyek", "Tudomanyosan fontos", "Erzekeny elelothely"],
      ro: ["Plante rare", "Important stiintific", "Habitat sensibil"],
      en: ["Rare plants", "Scientifically important", "Sensitive habitat"]
    }
  },
  {
    id: "tt-nariva-swamp-life-v2",
    type: "animal-habitat",
    parent: "TT-MRC",
    coords: [-61.02, 10.32],
    name: { de: "Nariva Sumpf", hu: "Nariva mocsar", ro: "Mlastina Nariva", en: "Nariva Swamp" },
    description: { de: "Trinidads grosstes Susswasser-Feuchtgebiet.", hu: "Trinidad legnagyobb edesvizi vizes elhelye.", ro: "Cea mai mare zona umeda de apa dulce din Trinidad.", en: "The largest freshwater wetland in Trinidad." },
    facts: {
      de: ["RAMSAR-Gebiet", "Heimat von Manatis", "Reich an Vogelwelt"],
      hu: ["RAMSAR terulet", "Manatuszok otthona", "Gazdag madarvilag"],
      ro: ["Sit RAMSAR", "Casa manatinilor", "Bogata in pasari"],
      en: ["RAMSAR site", "Home to manatees", "Rich birdlife"]
    }
  },
  {
    id: "tt-bush-bush-sanctuary-life-v2",
    type: "animal-habitat",
    parent: "TT-MRC",
    coords: [-61.0, 10.33],
    name: { de: "Bush Bush Schutzgebiet", hu: "Bush Bush vedelmi terulet", ro: "Sanctuarul Bush Bush", en: "Bush Bush Sanctuary" },
    description: { de: "Ein geschutztes Sumpf- und Waldgebiet bei Nariva.", hu: "Vedett mocsaras es erdos terulet Nariva mellett.", ro: "O zona protejata de mlastina si padure langa Nariva.", en: "A protected swamp and forest area near Nariva." },
    facts: {
      de: ["Wilde Mangroven", "Naturkundliche Bootsfahrt", "Teil des Nariva-Gebiets"],
      hu: ["Vad mangrovek", "Termeszeti hajokirandulas", "A Nariva-terulet resze"],
      ro: ["Mangrove salbatice", "Tur cu barca in natura", "Parte din zona Nariva"],
      en: ["Wild mangroves", "Nature boat rides", "Part of the Nariva area"]
    }
  },
  {
    id: "tt-trinity-hills-life-v2",
    type: "forest",
    parent: "TT-PRT",
    coords: [-61.16, 10.08],
    name: { de: "Trinity Hills Wildnisgebiet", hu: "Trinity Hills vadonvedelmi terulet", ro: "Sanctuarul Trinity Hills", en: "Trinity Hills Wildlife Sanctuary" },
    description: { de: "Ein hügeliges Waldschutzgebiet im sudosten Trinidads.", hu: "Dombos erdos vedelmi terulet Trinidad delkeleti reszen.", ro: "O zona forestiera deluroasa protejata in sud-estul Trinidadului.", en: "A hilly forest sanctuary in southeastern Trinidad." },
    facts: {
      de: ["Wichtiger Wassereinzugsbereich", "Reiches Tierleben", "Beliebt zum Wandern"],
      hu: ["Fontos vizgyujto terulet", "Gazdag allatvilag", "Kedvelt turazohely"],
      ro: ["Bazim hidrografic important", "Fauna bogata", "Popular pentru drumetii"],
      en: ["Important watershed", "Rich wildlife", "Popular for hiking"]
    }
  },
  {
    id: "tt-matura-turtle-beach-life-v2",
    type: "animal-habitat",
    parent: "TT-SGE",
    coords: [-61.0, 10.67],
    name: { de: "Matura Schildkrotenstrand", hu: "Matura teknosos strand", ro: "Plaja Matura pentru testoase", en: "Matura Turtle Beach" },
    description: { de: "Ein bekannter Nistplatz fur Meeresschildkroten.", hu: "Ismert feszkelhely a tengeri tekosok szamara.", ro: "Un loc cunoscut de cuibarit pentru testoasele marine.", en: "A well-known nesting beach for sea turtles." },
    facts: {
      de: ["Lederschildkroten", "Nachtliche Naturbeobachtung", "Schutz wichtiger Nester"],
      hu: ["Borzos teknosok", "Ejszakai termeszetmegfigyeles", "Fontos feszkelhely vedelme"],
      ro: ["Testeoase piele", "Observare nocturna a naturii", "Protejarea cuiburilor"],
      en: ["Leatherback turtles", "Night nature watching", "Protects important nests"]
    }
  },
  {
    id: "tt-grande-riviere-turtle-beach-life-v2",
    type: "animal-habitat",
    parent: "TT-SGE",
    coords: [-61.03, 10.7],
    name: { de: "Grande Riviere Schildkrotenstrand", hu: "Grande Riviere teknosos strand", ro: "Plaja Grande Riviere pentru testoase", en: "Grande Riviere Turtle Beach" },
    description: { de: "Einer der wichtigsten Strande fur Lederschildkroten in der Karibik.", hu: "A Karib-terseg egyik fontos lederszemu teknosos partja.", ro: "Una dintre cele mai importante plaje pentru testoasele marine din Caraibe.", en: "One of the Caribbean's most important leatherback beaches." },
    facts: {
      de: ["Starke Schildkrotenpopulation", "Gefuhrte Nachtbesuche", "Schutzgebiet am Meer"],
      hu: ["Erős teknosallomany", "Vezetett ejszakai latogatasok", "Tengeri vedett terulet"],
      ro: ["Populatie puternica de testoase", "Vizite ghidate noaptea", "Zona protejata de coasta"],
      en: ["Strong turtle population", "Guided night visits", "Coastal protected area"]
    }
  },
  {
    id: "tt-toco-coconut-groves-life-v2",
    type: "agriculture",
    parent: "TT-SGE",
    coords: [-61.0, 10.78],
    name: { de: "Toco Kokospalmenhaine", hu: "Toco kokoszligetek", ro: "Livezi de cocotieri Toco", en: "Toco Coconut Groves" },
    description: { de: "Kokosplantagen entlang der Ostkuste.", hu: "Kokoszültetvenyek a keleti part menten.", ro: "Plantatii de cocotieri de-a lungul coastei de est.", en: "Coconut plantations along the east coast." },
    facts: {
      de: ["Kustenlandwirtschaft", "Schattige Haine", "Wichtige Dorfkultur"],
      hu: ["Parti mezogazdasag", "Arnyekos ligetek", "Fontos falusi kultura"],
      ro: ["Agricultura de coasta", "Livezi umbroase", "Cultura locala importanta"],
      en: ["Coastal farming", "Shady groves", "Important village culture"]
    }
  },
  {
    id: "tt-pigeon-point-life-v2",
    type: "kid-landmark",
    parent: "TT-TOB",
    coords: [-60.8353, 11.1733],
    name: { de: "Pigeon Point", hu: "Pigeon Point", ro: "Pigeon Point", en: "Pigeon Point" },
    description: { de: "Tobagos ikonischster Strand mit dem bekannten Holzsteg.", hu: "Tobago ikonikus strandja a hires fahidddal.", ro: "Cea mai iconica plaja din Tobago, cu celebrul ponton din lemn.", en: "Tobago's iconic beach with the famous wooden jetty." },
    facts: {
      de: ["Weisser Sand", "Turkisfarbenes Wasser", "Beliebt fur Familien"],
      hu: ["Feher homok", "Turkiz viz", "Csaladok kedvence"],
      ro: ["Nisip alb", "Apa turcoaz", "Popular pentru familii"],
      en: ["White sand", "Turquoise water", "Popular with families"]
    }
  },
  {
    id: "tt-buccoo-reef-life-v2",
    type: "animal-habitat",
    parent: "TT-TOB",
    coords: [-60.82, 11.18],
    name: { de: "Buccoo Riff", hu: "Buccoo zatony", ro: "Reciful Buccoo", en: "Buccoo Reef" },
    description: { de: "Ein geschutztes Korallenriff mit grosser mariner Vielfalt.", hu: "Vedett korallzatony nagy tengeri sokfelelessel.", ro: "Un recif de corali protejat cu mare diversitate marina.", en: "A protected coral reef with rich marine life." },
    facts: {
      de: ["Glassbodenboote", "Farbenfrohe Fische", "Wichtig fur den Tourismus"],
      hu: ["Uvegfeneku hajok", "Szines halak", "Fontos a turizmusnak"],
      ro: ["Bărci cu fund de sticla", "Pesti colorati", "Important pentru turism"],
      en: ["Glass-bottom boats", "Colorful fish", "Important for tourism"]
    }
  },
  {
    id: "tt-nylon-pool-life-v2",
    type: "kid-landmark",
    parent: "TT-TOB",
    coords: [-60.83, 11.18],
    name: { de: "Nylon Pool", hu: "Nylon Pool", ro: "Piscina Nylon", en: "Nylon Pool" },
    description: { de: "Ein flacher Naturpool mitten im Meer.", hu: "Sekely termeszetes medence a tenger kozepen.", ro: "O piscina naturala putin adanca in mijlocul marii.", en: "A shallow natural pool in the middle of the sea." },
    facts: {
      de: ["Klares Wasser", "Nur per Boot erreichbar", "Nahe Buccoo Reef"],
      hu: ["Tiszta viz", "Csak hajoval erheto el", "A Buccoo zatony mellett"],
      ro: ["Apa limpede", "Accesibil doar cu barca", "Langa reciful Buccoo"],
      en: ["Clear water", "Accessible only by boat", "Near Buccoo Reef"]
    }
  },
  {
    id: "tt-main-ridge-forest-reserve-life-v2",
    type: "forest",
    parent: "TT-TOB",
    coords: [-60.6667, 11.25],
    name: { de: "Main Ridge Waldreservat", hu: "Main Ridge erdorezervatum", ro: "Rezervatia forestiera Main Ridge", en: "Main Ridge Forest Reserve" },
    description: { de: "Das alteste gesetzlich geschutzte Waldreservat der westlichen Hemisphare.", hu: "A nyugati felteke legrégibb torvenyileg vedett erdorezervatuma.", ro: "Cea mai veche rezervatie forestiera protejata legal din emisfera vestica.", en: "The oldest legally protected forest reserve in the Western Hemisphere." },
    facts: {
      de: ["Regenwald auf Tobago", "Sehr artenreich", "Seit 1776 geschutzt"],
      hu: ["Tobagoi esőerdő", "Nagyon fajgazdag", "1776 ota vedett"],
      ro: ["Padure tropicala pe Tobago", "Foarte bogata in specii", "Protejata din 1776"],
      en: ["Rainforest on Tobago", "Highly biodiverse", "Protected since 1776"]
    }
  },
  {
    id: "tt-little-tobago-bird-sanctuary-life-v2",
    type: "animal-habitat",
    parent: "TT-TOB",
    coords: [-60.52, 11.35],
    name: { de: "Little Tobago Vogelreservat", hu: "Little Tobago madarrezervatum", ro: "Sanctuarul de pasari Little Tobago", en: "Little Tobago Bird Sanctuary" },
    description: { de: "Eine kleine Insel mit wichtigem Brutgebiet fur Seevogel.", hu: "Kis sziget fontos tengeri madar feszkelhellyel.", ro: "O insula mica cu un loc important de cuibarit pentru pasari marine.", en: "A small island with an important seabird nesting site." },
    facts: {
      de: ["Seevogelkolonien", "Beliebt bei Bootsausflugen", "Unbewohnt"],
      hu: ["Tengeri madar koloniak", "Nepszeru hajokirandulas", "Lakatlan"],
      ro: ["Colonii de pasari marine", "Populara pentru excursii cu barca", "Nelocuita"],
      en: ["Seabird colonies", "Popular boat trips", "Uninhabited"]
    }
  },
  {
    id: "tt-scarborough-botanical-gardens-life-v2",
    type: "forest",
    parent: "TT-TOB",
    coords: [-60.7333, 11.1833],
    name: { de: "Scarborough Botanischer Garten", hu: "Scarborough botanikus kert", ro: "Gradina botanica Scarborough", en: "Scarborough Botanical Gardens" },
    description: { de: "Ein ruhiger Garten mit tropischen Pflanzen in Scarborough.", hu: "Csendes kert tropusi novenyekkel Scarboroughban.", ro: "O gradina linistita cu plante tropicale in Scarborough.", en: "A quiet garden with tropical plants in Scarborough." },
    facts: {
      de: ["Schattenwege", "Tropische Pflanzen", "Gute Familienpause"],
      hu: ["Arnyekos setanyok", "Tropusi novenyek", "Kellemes csaladi pihenö"],
      ro: ["Alei umbroase", "Plante tropicale", "Pauza buna pentru familii"],
      en: ["Shaded paths", "Tropical plants", "Nice family stop"]
    }
  },
  {
    id: "tt-castara-fishing-village-life-v2",
    type: "kid-landmark",
    parent: "TT-TOB",
    coords: [-60.6833, 11.2667],
    name: { de: "Castara Fischerdorf", hu: "Castara halaszfalu", ro: "Satul pescaresc Castara", en: "Castara Fishing Village" },
    description: { de: "Ein ruhiges Fischerdorf mit kleinem Strand und lokaler Kuche.", hu: "Csendes halaszfalu kis stranddal es helyi konyhaval.", ro: "Un sat pescaresc linistit, cu plaja mica si bucatarie locala.", en: "A quiet fishing village with a small beach and local food." },
    facts: {
      de: ["Bucht mit Dorfcharakter", "Lokale Fischerboote", "Beliebt fur Natururlaub"],
      hu: ["Falu jellegu obol", "Helyi halaszcsónakok", "Nepszeru termeszetkozeli nyaralasra"],
      ro: ["Golf cu aer de sat", "Barci de pescari locale", "Popular pentru vacante in natura"],
      en: ["Village-style bay", "Local fishing boats", "Popular for nature stays"]
    }
  },
  {
    id: "tt-arima-cocoa-estate-life-v2",
    type: "agriculture",
    parent: "TT-TUP",
    coords: [-61.28, 10.62],
    name: { de: "Arima Kakaoanbau", hu: "Arima kakao", ro: "Plantatii de cacao Arima", en: "Arima Cocoa Estate" },
    description: { de: "Kleine Kakaoanbauflachen in der Umgebung von Arima.", hu: "Kis kakaotermesztesi teruletek Arima kornyeken.", ro: "Mici suprafete de cacao in zona Arima.", en: "Small cocoa growing areas around Arima." },
    facts: {
      de: ["Traditionelles Kakaoerbe", "Familienbetriebe", "Teil der Ost-Trinidad-Landschaft"],
      hu: ["Hagyomanyos kakaoorokseg", "Csaladi gazdasagok", "Kelet-Trinidad tajanak resze"],
      ro: ["Mostenire traditionala de cacao", "Ferme de familie", "Parte din peisajul estic"],
      en: ["Traditional cocoa heritage", "Family-run farms", "Part of the eastern landscape"]
    }
  },
  {
    id: "tt-freeport-rice-fields-life-v2",
    type: "agriculture",
    parent: "TT-CTT",
    coords: [-61.4, 10.45],
    name: { de: "Freeport Reisfelder", hu: "Freeport rizsfoldek", ro: "Campurile de orez Freeport", en: "Freeport Rice Fields" },
    description: { de: "Reisanbauflachen in Zentral-Trinidad.", hu: "Rizstermesztesi teruletek Kozep-Trinidadban.", ro: "Zone de cultivare a orezului in centrul Trinidadului.", en: "Rice growing areas in central Trinidad." },
    facts: {
      de: ["Wichtige Nahrungspflanze", "Flache Bewasserungsfelder", "Landliche Wirtschaftsgrundlage"],
      hu: ["Fontos elelmiszernoveny", "Sekely ontozott tablák", "Videki gazdasagi alap"],
      ro: ["Cultura alimentara importanta", "Campuri irigate de mica adancime", "Baza economica rurala"],
      en: ["Important food crop", "Shallow irrigated fields", "Rural economic base"]
    }
  },
  {
    id: "tt-siparia-dairy-farms-life-v2",
    type: "agriculture",
    parent: "TT-SIP",
    coords: [-61.5, 10.13],
    name: { de: "Siparia Milchfarmen", hu: "Siparia tejfarmok", ro: "Ferme de lapte Siparia", en: "Siparia Dairy Farms" },
    description: { de: "Weidebetriebe im Sudwesten, die Milch und Kase liefern.", hu: "Legelo gazdasagok a delnyugaton, tejjel es sajttal.", ro: "Ferme de pasunat in sud-vest care produc lapte si branza.", en: "Pasture farms in the southwest producing milk and cheese." },
    facts: {
      de: ["Viehzucht", "Lokale Molkereiprodukte", "Gruene Weideflachen"],
      hu: ["Szarvasmarha tartas", "Helyi tejtermekek", "Zold legelok"],
      ro: ["Cresterea bovinelor", "Produse lactate locale", "Pasuni verzi"],
      en: ["Cattle farming", "Local dairy products", "Green pastures"]
    }
  },
  {
    id: "tt-point-fortin-beach-park-life-v2",
    type: "kid-landmark",
    parent: "TT-PTF",
    coords: [-61.68, 10.18],
    name: { de: "Point Fortin Strandpark", hu: "Point Fortin strandpark", ro: "Parcul de plaja Point Fortin", en: "Point Fortin Beach Park" },
    description: { de: "Ein lokaler Freizeitstrand an der Sudwestkuste.", hu: "Helyi szabadidős strand a delnyugati parton.", ro: "O plaja de agrement locala pe coasta de sud-vest.", en: "A local leisure beach on the southwest coast." },
    facts: {
      de: ["Familienfreundlich", "Sonnenuntergangsblick", "Kleiner Kustenpark"],
      hu: ["Csaladbarat", "Naplemente kilatas", "Kis parti park"],
      ro: ["Prietenos pentru familii", "Vederi la apus", "Mic parc de coasta"],
      en: ["Family-friendly", "Sunset views", "Small coastal park"]
    }
  },
  {
    id: "tt-chacachacare-island-life-v2",
    type: "island",
    parent: "TT-DMN",
    coords: [-61.75, 10.67],
    name: { de: "Chacachacare Insel", hu: "Chacachacare sziget", ro: "Insula Chacachacare", en: "Chacachacare Island" },
    description: { de: "Eine unbewohnte Insel mit ruhiger Natur und Vogelwelt.", hu: "Lakatlan sziget csendes termeszettel es madarvilaggal.", ro: "O insula nelocuita cu natura linistita si pasari.", en: "An uninhabited island with quiet nature and birdlife." },
    facts: {
      de: ["Ehemalige Quarantanestation", "Trockener Wald", "Beliebt bei Bootsausflugen"],
      hu: ["Egykori karantencentrum", "Száraz erdős terület", "Nepszeru hajokirandulas"],
      ro: ["Fosta statie de carantina", "Padure uscata", "Populara pentru excursii cu barca"],
      en: ["Former quarantine station", "Dry forest", "Popular boat destination"]
    }
  },
  {
    id: "tt-saut-deau-island-life-v2",
    type: "island",
    parent: "TT-DMN",
    coords: [-61.55, 10.77],
    name: { de: "Saut d Eau Insel", hu: "Saut d Eau sziget", ro: "Insula Saut d Eau", en: "Saut d'Eau Island" },
    description: { de: "Eine kleine bewaldete Insel als Schutzgebiet fur Seevogel.", hu: "Kis erdos sziget, amely tengeri madarak vedett terulete.", ro: "O mica insula impadurita, sanctuar pentru pasari marine.", en: "A small wooded island that protects seabirds." },
    facts: {
      de: ["Vogelschutz", "Unbewohnt", "Tropische Kustenvegetation"],
      hu: ["Madarvedelem", "Lakatlan", "Tropusi parti novenyzet"],
      ro: ["Protejarea pasarilor", "Nelocuita", "Vegetatie tropicala de coasta"],
      en: ["Bird protection", "Uninhabited", "Tropical coastal vegetation"]
    }
  }
];
