import type { POI } from "./poi";

export const poiExtraSudanNatureV2: POI[] = [
  {
    id: "nile-river-sudan-nature-v2",
    type: "river",
    parent: "SD-NR",
    coords: [33.3283, 15.6333],
    name: { de: "Nil", hu: "Nílus", ro: "Nil", en: "Nile" },
    description: {
      de: "Der längste Fluss der Welt, der Sudan durchquert.",
      hu: "A világ leghosszabb folyója, amely átszeli Szudánt.",
      ro: "Cel mai lung fluviu din lume, care traversează Sudanul.",
      en: "The longest river in the world, which flows through Sudan."
    },
    facts: {
      de: ["Fließt durch Khartum.", "Lebensader für die Region.", "Wichtigster Wasserweg.", "Bildet das Nildelta."],
      hu: ["Kartúmnál folyik át.", "A régió éltető ereje.", "Fontos vízi út.", "Kialakítja a Nílus-deltát."],
      ro: ["Curge prin Khartoum.", "Sursă de viață pentru regiune.", "Cale navigabilă importantă.", "Formează delta Nilului."],
      en: ["Flows through Khartoum.", "Lifeline for the region.", "Major waterway.", "Forms the Nile Delta."]
    }
  },
  {
    id: "jebel-marra-nature-v2",
    type: "mountain",
    parent: "SD-RS",
    coords: [24.2667, 12.95],
    name: { de: "Jebel Marra", hu: "Jebel Marra", ro: "Jebel Marra", en: "Jebel Marra" },
    description: {
      de: "Ein vulkanisches Bergmassiv im Westen des Sudans.",
      hu: "Vulkáni hegység Szudán nyugati részén.",
      ro: "Un masiv muntos vulcanic în vestul Sudanului.",
      en: "A volcanic mountain massif in western Sudan."
    },
    facts: {
      de: ["Höchster Punkt des Darfur.", "Vulkanischen Ursprungs.", "Bietet fruchtbare Böden.", "Schöne Wasserfälle."],
      hu: ["Darfur legmagasabb pontja.", "Vulkáni eredetű.", "Termékeny talaj jellemzi.", "Gyönyörű vízesések."],
      ro: ["Cel mai înalt punct din Darfur.", "De origine vulcanică.", "Oferă soluri fertile.", "Cascade frumoase."],
      en: ["Highest point in Darfur.", "Volcanic origin.", "Features fertile soil.", "Beautiful waterfalls."]
    }
  },
  {
    id: "red-sea-coast-sudan-nature-v2",
    type: "sea",
    parent: "SD-RS",
    coords: [37.2167, 19.5833],
    name: { de: "Rotes Meer", hu: "Vörös-tenger", ro: "Marea Roșie", en: "Red Sea" },
    description: {
      de: "Die Küste des Roten Meeres im Osten des Sudans.",
      hu: "A Vörös-tenger partvidéke Szudán keleti részén.",
      ro: "Coasta Mării Roșii în estul Sudanului.",
      en: "The coastline of the Red Sea in eastern Sudan."
    },
    facts: {
      de: ["Wichtig für den Fischfang.", "Reiches Korallenriff.", "Strategische Lage.", "Klares Wasser."],
      hu: ["Fontos a halászatban.", "Gazdag korallzátonyok.", "Stratégiai elhelyezkedés.", "Tiszta víz."],
      ro: ["Importantă pentru pescuit.", "Recife de corali bogate.", "Locație strategică.", "Apă clară."],
      en: ["Important for fishing.", "Rich coral reefs.", "Strategic location.", "Clear water."]
    }
  },
  {
    id: "dinder-river-nature-v2",
    type: "river",
    parent: "SD-SI",
    coords: [34.75, 12.8333],
    name: { de: "Dinder", hu: "Dinder", ro: "Dinder", en: "Dinder" },
    description: {
      de: "Ein Nebenfluss des Blauen Nils im Osten des Sudans.",
      hu: "A Kék-Nílus mellékfolyója Szudán keleti részén.",
      ro: "Un afluent al Nilului Albastru în estul Sudanului.",
      en: "A tributary of the Blue Nile in eastern Sudan."
    },
    facts: {
      de: ["Speist den Dinder Nationalpark.", "Saisonaler Fluss.", "Wichtiges Ökosystem.", "Schützt Wildtiere."],
      hu: ["Ellátja a Dinder Nemzeti Parkot.", "Időszakos folyó.", "Fontos ökoszisztéma.", "Védi a vadállatokat."],
      ro: ["Alimentează Parcul Național Dinder.", "Râu sezonier.", "Ecosistem important.", "Protejează animalele sălbatice."],
      en: ["Feeds the Dinder National Park.", "Seasonal river.", "Important ecosystem.", "Protects wildlife."]
    }
  },
  {
    id: "atbara-river-nature-v2",
    type: "river",
    parent: "SD-NR",
    coords: [33.98, 17.68],
    name: { de: "Atbara", hu: "Atbara", ro: "Atbara", en: "Atbara" },
    description: {
      de: "Der letzte bedeutende Zufluss des Nils.",
      hu: "A Nílus utolsó jelentős mellékfolyója.",
      ro: "Ultimul afluent important al Nilului.",
      en: "The last significant tributary of the Nile."
    },
    facts: {
      de: ["Entspringt in Äthiopien.", "Saisonal sehr stark.", "Wichtiger Wasserlieferant.", "Mündet bei Atbara in den Nil."],
      hu: ["Etiópiában ered.", "Időszakosan nagyon erős.", "Fontos vízellátó.", "Atbaránál torkollik a Nílusba."],
      ro: ["Izvorăște din Etiopia.", "Foarte puternic sezonier.", "Furnizor important de apă.", "Se varsă în Nil la Atbara."],
      en: ["Originates in Ethiopia.", "Strong seasonal flow.", "Major water source.", "Joins the Nile at Atbara."]
    }
  },
  {
    id: "blue-nile-river-nature-v2",
    type: "river",
    parent: "SD-NR",
    coords: [32.5333, 15.6],
    name: { de: "Blauer Nil", hu: "Kék-Nílus", ro: "Nilul Albastru", en: "Blue Nile" },
    description: {
      de: "Ein Hauptquellfluss des Nils, der durch den Sudan fließt.",
      hu: "A Nílus egyik fő forrásfolyója, amely átszeli Szudánt.",
      ro: "Unul dintre principalele cursuri de apă ale Nilului care traversează Sudanul.",
      en: "A main source river of the Nile that flows through Sudan."
    },
    facts: {
      de: ["Trifft in Khartum auf den Weißen Nil.", "Saisonal schwankend.", "Wichtig für die Landwirtschaft.", "Enthält nährstoffreichen Schlamm."],
      hu: ["Kartúmnál találkozik a Fehér-Nílussal.", "Időszakosan ingadozó.", "Fontos a mezőgazdaságnak.", "Táplálékban gazdag iszapot szállít."],
      ro: ["Se întâlnește cu Nilul Alb în Khartoum.", "Variază sezonier.", "Important pentru agricultură.", "Transportă nămol bogat în nutrienți."],
      en: ["Meets the White Nile in Khartoum.", "Seasonal variation.", "Crucial for agriculture.", "Carries nutrient-rich silt."]
    }
  },
  {
    id: "white-nile-river-nature-v2",
    type: "river",
    parent: "SD-NR",
    coords: [32.5333, 15.6],
    name: { de: "Weißer Nil", hu: "Fehér-Nílus", ro: "Nilul Alb", en: "White Nile" },
    description: {
      de: "Der längere Quellfluss des Nils, der den Sudan durchquert.",
      hu: "A Nílus hosszabb forrásfolyója, amely átszeli Szudánt.",
      ro: "Cursul de apă mai lung al Nilului care traversează Sudanul.",
      en: "The longer source river of the Nile that flows through Sudan."
    },
    facts: {
      de: ["Stabilerer Wasserstand.", "Fließt langsamer.", "Wichtige Handelsroute.", "Vereint sich in Khartum."],
      hu: ["Stabilabb vízszint.", "Lassabban folyik.", "Fontos kereskedelmi útvonal.", "Kartúmnál egyesül."],
      ro: ["Nivel de apă mai stabil.", "Curge mai lent.", "Rută comercială importantă.", "Se unește în Khartoum."],
      en: ["More stable water levels.", "Slower flow.", "Important trade route.", "Joins in Khartoum."]
    }
  },
  {
    id: "erkowit-mountains-nature-v2",
    type: "mountain",
    parent: "SD-RS",
    coords: [37.15, 18.75],
    name: { de: "Erkowit", hu: "Erkowit", ro: "Erkowit", en: "Erkowit" },
    description: {
      de: "Ein Berggebiet im Osten, bekannt für sein kühleres Klima.",
      hu: "Hegyvidéki terület keleten, ismert hűvösebb klímájáról.",
      ro: "O zonă montană în est, cunoscută pentru clima sa mai răcoroasă.",
      en: "A mountain area in the east, known for its cooler climate."
    },
    facts: {
      de: ["Früher ein Erholungsort.", "Einzigartige Flora.", "Gelegen im Red Sea Hills.", "Schöne Aussichten."],
      hu: ["Régebben pihenőhely.", "Egyedi flóra.", "A Vörös-tengeri dombokban.", "Gyönyörű kilátás."],
      ro: ["O fostă stațiune.", "Floră unică.", "Situată în dealurile Mării Roșii.", "Priveliști superbe."],
      en: ["Formerly a resort.", "Unique flora.", "Located in the Red Sea Hills.", "Beautiful views."]
    }
  },
  {
    id: "nuba-mountains-nature-v2",
    type: "mountain",
    parent: "SD-SK",
    coords: [30.5, 11.5],
    name: { de: "Nuba-Berge", hu: "Nuba-hegység", ro: "Munții Nuba", en: "Nuba Mountains" },
    description: {
      de: "Eine Hügelkette im zentralen Sudan.",
      hu: "Dombvidék Szudán központjában.",
      ro: "Un lanț de dealuri în centrul Sudanului.",
      en: "A range of hills in central Sudan."
    },
    facts: {
      de: ["Wichtiges Kulturzentrum.", "Vielfältige Landschaften.", "Reich an Geschichte.", "Gute Weideflächen."],
      hu: ["Fontos kulturális központ.", "Változatos tájak.", "Gazdag történelem.", "Jó legelők."],
      ro: ["Centru cultural important.", "Peisaje diverse.", "Istorie bogată.", "Pășuni bune."],
      en: ["Important cultural center.", "Diverse landscapes.", "Rich in history.", "Good grazing land."]
    }
  },
  {
    id: "kosti-lake-nature-v2",
    type: "lake",
    parent: "SD-NR",
    coords: [32.6667, 13.1667],
    name: { de: "Kosti-See", hu: "Kosti-tó", ro: "Lacul Kosti", en: "Kosti Lake" },
    description: {
      de: "Ein See am Weißen Nil in der Nähe von Kosti.",
      hu: "Tó a Fehér-Nílusnál, Kosti közelében.",
      ro: "Un lac pe Nilul Alb, aproape de Kosti.",
      en: "A lake on the White Nile near Kosti."
    },
    facts: {
      de: ["Wichtig für die Fischerei.", "Lebensraum für Vögel.", "Wasserquelle für Kosti.", "Saisonal schwankend."],
      hu: ["Fontos a halászatban.", "Madarak élőhelye.", "Vízforrás Kosti számára.", "Időszakosan ingadozó."],
      ro: ["Important pentru pescuit.", "Habitat pentru păsări.", "Sursă de apă pentru Kosti.", "Variază sezonier."],
      en: ["Important for fishing.", "Habitat for birds.", "Water source for Kosti.", "Seasonal fluctuation."]
    }
  },
  {
    id: "nubian-desert-nature-v2",
    type: "forest",
    parent: "SD-NR",
    coords: [33, 20],
    name: { de: "Nubische Wüste", hu: "Núbiai-sivatag", ro: "Deșertul Nubian", en: "Nubian Desert" },
    description: {
      de: "Eine große Wüstenregion im Nordosten des Sudans.",
      hu: "Nagy sivatagi régió Szudán északkeleti részén.",
      ro: "O mare regiune deșertică în nord-estul Sudanului.",
      en: "A large desert region in northeastern Sudan."
    },
    facts: {
      de: ["Teil der Sahara.", "Extrem trocken.", "Historisch bedeutend.", "Sandige Ebenen."],
      hu: ["A Szahara része.", "Rendkívül száraz.", "Történelmileg jelentős.", "Homokos síkságok."],
      ro: ["Parte din Sahara.", "Extrem de uscat.", "Semnificativ din punct de vedere istoric.", "Câmpii nisipoase."],
      en: ["Part of the Sahara.", "Extremely arid.", "Historically significant.", "Sandy plains."]
    }
  },
  {
    id: "meidob-volcanic-field-nature-v2",
    type: "mountain",
    parent: "SD-RS",
    coords: [26.5, 15.3],
    name: { de: "Meidob-Vulkanfeld", hu: "Meidob vulkáni mező", ro: "Câmpul vulcanic Meidob", en: "Meidob Volcanic Field" },
    description: {
      de: "Ein vulkanisches Gebiet im Westen Sudans.",
      hu: "Vulkáni terület Szudán nyugati részén.",
      ro: "O zonă vulcanică în vestul Sudanului.",
      en: "A volcanic region in western Sudan."
    },
    facts: {
      de: ["Überreste von Vulkanismus.", "Interessante Geologie.", "Wüstenklima.", "Abgelegene Region."],
      hu: ["Vulkanizmus maradványai.", "Érdekes geológia.", "Sivatagi éghajlat.", "Távoli régió."],
      ro: ["Rămășițe ale vulcanismului.", "Geologie interesantă.", "Climat deșertic.", "Regiune izolată."],
      en: ["Remnants of volcanism.", "Interesting geology.", "Desert climate.", "Remote region."]
    }
  },
  {
    id: "wade-halfa-reach-nature-v2",
    type: "river",
    parent: "SD-NR",
    coords: [31.3333, 21.8333],
    name: { de: "Wadi-Halfa-Abschnitt", hu: "Wadi Halfa-szakasz", ro: "Sectorul Wadi Halfa", en: "Wadi Halfa Reach" },
    description: {
      de: "Ein bedeutender Abschnitt des Nils bei Wadi Halfa.",
      hu: "A Nílus jelentős szakasza Wadi Halfa közelében.",
      ro: "Un sector important al Nilului aproape de Wadi Halfa.",
      en: "A significant reach of the Nile near Wadi Halfa."
    },
    facts: {
      de: ["Nahe am Nasser-Stausee.", "Wichtiger Wasserweg.", "Historische Bedeutung.", "Umgeben von Wüste."],
      hu: ["Közel a Nasszer-tóhoz.", "Fontos vízi út.", "Történelmi jelentőség.", "Sivatag veszi körül."],
      ro: ["Aproape de lacul Nasser.", "Rută navigabilă importantă.", "Semnificație istorică.", "Înconjurat de deșert."],
      en: ["Near Lake Nasser.", "Important waterway.", "Historical importance.", "Surrounded by desert."]
    }
  },
  {
    id: "dongola-reach-nature-v2",
    type: "river",
    parent: "SD-NR",
    coords: [30.4833, 19.1667],
    name: { de: "Dongola-Abschnitt", hu: "Dongola-szakasz", ro: "Sectorul Dongola", en: "Dongola Reach" },
    description: {
      de: "Ein fruchtbarer Abschnitt des Nils bei Dongola.",
      hu: "A Nílus termékeny szakasza Dongola közelében.",
      ro: "Un sector fertil al Nilului aproape de Dongola.",
      en: "A fertile reach of the Nile near Dongola."
    },
    facts: {
      de: ["Landwirtschaftliches Zentrum.", "Historische Siedlungsgebiete.", "Gutes Wasser.", "Kulturelles Erbe."],
      hu: ["Mezőgazdasági központ.", "Történelmi települések.", "Jó víz.", "Kulturális örökség."],
      ro: ["Centru agricol.", "Așezări istorice.", "Apă bună.", "Moștenire culturală."],
      en: ["Agricultural center.", "Historical settlements.", "Good water.", "Cultural heritage."]
    }
  },
  {
    id: "sabargum-island-nature-v2",
    type: "island",
    parent: "SD-NR",
    coords: [31, 18.5],
    name: { de: "Sabargum-Insel", hu: "Sabargum-sziget", ro: "Insula Sabargum", en: "Sabargum Island" },
    description: {
      de: "Eine Insel im Nil nahe Dongola.",
      hu: "Sziget a Níluson, Dongola közelében.",
      ro: "O insulă pe Nil, aproape de Dongola.",
      en: "An island in the Nile near Dongola."
    },
    facts: {
      de: ["Natürlicher Lebensraum.", "Kleine Insel.", "Grün in der Wüste.", "Gute Bodenqualität."],
      hu: ["Természetes élőhely.", "Kicsi sziget.", "Zöld a sivatagban.", "Jó talajminőség."],
      ro: ["Habitat natural.", "Insulă mică.", "Verde în deșert.", "Calitate bună a solului."],
      en: ["Natural habitat.", "Small island.", "Green in the desert.", "Good soil quality."]
    }
  },
  {
    id: "tuti-island-nature-v2",
    type: "island",
    parent: "SD-NR",
    coords: [32.5333, 15.6167],
    name: { de: "Tuti-Insel", hu: "Tuti-sziget", ro: "Insula Tuti", en: "Tuti Island" },
    description: {
      de: "Eine Insel am Zusammenfluss von Weißem und Blauem Nil in Khartum.",
      hu: "Sziget a Fehér- és Kék-Nílus összefolyásánál, Kartúmban.",
      ro: "O insulă la confluența Nilului Alb cu cel Albastru în Khartoum.",
      en: "An island at the confluence of the White and Blue Nile in Khartoum."
    },
    facts: {
      de: ["Strategisch gelegen.", "Landwirtschaftliches Land.", "Natürliches Erholungsgebiet.", "Teil der Hauptstadt."],
      hu: ["Stratégiailag elhelyezkedő.", "Mezőgazdasági terület.", "Természetes pihenőhely.", "A főváros része."],
      ro: ["Situată strategic.", "Teren agricol.", "Zonă naturală de relaxare.", "Parte din capitală."],
      en: ["Strategically located.", "Agricultural land.", "Natural recreational area.", "Part of the capital."]
    }
  },
  {
    id: "shendi-reach-nature-v2",
    type: "river",
    parent: "SD-NR",
    coords: [33.4333, 16.6833],
    name: { de: "Shendi-Abschnitt", hu: "Shendi-szakasz", ro: "Sectorul Shendi", en: "Shendi Reach" },
    description: {
      de: "Ein Nilabschnitt bei Shendi.",
      hu: "Nílus-szakasz Shendi mellett.",
      ro: "Un sector al Nilului aproape de Shendi.",
      en: "A reach of the Nile near Shendi."
    },
    facts: {
      de: ["Historische Region.", "Fruchtbares Land.", "Wichtig für die lokale Bewässerung.", "Wüstenrand."],
      hu: ["Történelmi régió.", "Termékeny föld.", "Fontos a helyi öntözésben.", "Sivatagi perem."],
      ro: ["Regiune istorică.", "Pământ fertil.", "Important pentru irigația locală.", "Marginea deșertului."],
      en: ["Historical region.", "Fertile land.", "Important for local irrigation.", "Edge of the desert."]
    }
  },
  {
    id: "sabaloka-gorge-nature-v2",
    type: "mountain",
    parent: "SD-NR",
    coords: [32.9, 16.3],
    name: { de: "Sabaloka-Schlucht", hu: "Sabaloka-szurdok", ro: "Cheile Sabaloka", en: "Sabaloka Gorge" },
    description: {
      de: "Eine beeindruckende Schlucht am Nil nördlich von Khartum.",
      hu: "Lenyűgöző szurdok a Níluson, Kartúmtól északra.",
      ro: "Un canion impresionant pe Nil, la nord de Khartoum.",
      en: "An impressive gorge on the Nile north of Khartoum."
    },
    facts: {
      de: ["Enger Durchbruch.", "Geologisch interessant.", "Natürliches Hindernis.", "Schöne Landschaften."],
      hu: ["Szűk áttörés.", "Geológiailag érdekes.", "Természetes akadály.", "Gyönyörű tájak."],
      ro: ["Defileu îngust.", "Interesant geologic.", "Obstacol natural.", "Peisaje frumoase."],
      en: ["Narrow passage.", "Geologically interesting.", "Natural obstacle.", "Beautiful landscapes."]
    }
  },
  {
    id: "jebel-barkal-nature-v2",
    type: "mountain",
    parent: "SD-NR",
    coords: [31.8333, 18.5333],
    name: { de: "Jebel Barkal", hu: "Jebel Barkal", ro: "Jebel Barkal", en: "Jebel Barkal" },
    description: {
      de: "Ein kleiner Berg am Nil, der eine historische Bedeutung hat.",
      hu: "Kis hegy a Nílus mellett, történelmi jelentőséggel.",
      ro: "Un mic munte lângă Nil, cu semnificație istorică.",
      en: "A small mountain on the Nile with historical significance."
    },
    facts: {
      de: ["Heiliger Berg.", "Weltkulturerbe.", "Markantes Wahrzeichen.", "Überblickt den Nil."],
      hu: ["Szent hegy.", "Világörökség.", "Markáns mérföldkő.", "A Nílusra néz."],
      ro: ["Munte sacru.", "Patrimoniul mondial.", "Reper distinctiv.", "Domină Nilul."],
      en: ["Sacred mountain.", "World Heritage Site.", "Distinctive landmark.", "Overlooks the Nile."]
    }
  },
  {
    id: "wadi-howar-nature-v2",
    type: "river",
    parent: "SD-RS",
    coords: [25, 17.5],
    name: { de: "Wadi Howar", hu: "Wadi Howar", ro: "Wadi Howar", en: "Wadi Howar" },
    description: {
      de: "Ein altes, ausgetrocknetes Flusstal in der Sahara.",
      hu: "Régi, kiszáradt folyóvölgy a Szaharában.",
      ro: "O vale veche, secată, în Sahara.",
      en: "An ancient, dried-up river valley in the Sahara."
    },
    facts: {
      de: ["Früher ein Nebenfluss.", "Archäologisch wichtig.", "Sandig und trocken.", "Große Ausdehnung."],
      hu: ["Régebben mellékfolyó volt.", "Régészetileg fontos.", "Homokos és száraz.", "Nagy kiterjedésű."],
      ro: ["Fost afluent.", "Important din punct de vedere arheologic.", "Nisipos și uscat.", "Extindere mare."],
      en: ["Formerly a tributary.", "Archaeologically important.", "Sandy and dry.", "Large extent."]
    }
  },
  {
    id: "jebel-dair-nature-v2",
    type: "mountain",
    parent: "SD-SK",
    coords: [30.7, 12.4],
    name: { de: "Jebel Dair", hu: "Jebel Dair", ro: "Jebel Dair", en: "Jebel Dair" },
    description: {
      de: "Ein isolierter Bergmassiv in den Nuba-Bergen.",
      hu: "Elszigetelt hegytömb a Nuba-hegységben.",
      ro: "Un masiv muntos izolat în Munții Nuba.",
      en: "An isolated mountain massif in the Nuba Mountains."
    },
    facts: {
      de: ["Wichtiges Schutzgebiet.", "Einzigartige Flora und Fauna.", "Felsige Landschaft.", "Guter Aussichtspunkt."],
      hu: ["Fontos védett terület.", "Egyedi flóra és fauna.", "Sziklás táj.", "Jó kilátópont."],
      ro: ["Zonă protejată importantă.", "Floră și faună unică.", "Peisaj stâncos.", "Punct de observație bun."],
      en: ["Important protected area.", "Unique flora and fauna.", "Rocky landscape.", "Good viewpoint."]
    }
  },
  {
    id: "khor-attar-nature-v2",
    type: "river",
    parent: "SD-SK",
    coords: [31.5, 10.5],
    name: { de: "Khor Attar", hu: "Khor Attar", ro: "Khor Attar", en: "Khor Attar" },
    description: {
      de: "Ein saisonaler Wasserlauf im südlichen Sudan.",
      hu: "Időszakos vízfolyás Dél-Szudánban.",
      ro: "Un curs de apă sezonier în sudul Sudanului.",
      en: "A seasonal watercourse in southern Sudan."
    },
    facts: {
      de: ["Wichtig für das Weideland.", "Saisonal belebt.", "Natürliche Entwässerung.", "Wichtig für Viehzucht."],
      hu: ["Fontos a legelőnek.", "Időszakosan élénk.", "Természetes vízelvezetés.", "Fontos állattenyésztéshez."],
      ro: ["Important pentru pășuni.", "Activ sezonier.", "Drenaj natural.", "Important pentru zootehnie."],
      en: ["Important for grazing land.", "Seasonally active.", "Natural drainage.", "Important for cattle."]
    }
  },
  {
    id: "jebel-uwaynat-nature-v2",
    type: "mountain",
    parent: "SD-NO",
    coords: [24.9, 21.9],
    name: { de: "Jebel Uwaynat", hu: "Jebel Uwaynat", ro: "Jebel Uwaynat", en: "Jebel Uwaynat" },
    description: {
      de: "Ein Bergmassiv im Grenzgebiet zwischen Sudan, Ägypten und Libyen.",
      hu: "Hegytömb a Szudán, Egyiptom és Líbia határvidékén.",
      ro: "Un masiv muntos la granița dintre Sudan, Egipt și Libia.",
      en: "A mountain massif on the border between Sudan, Egypt, and Libya."
    },
    facts: {
      de: ["Historische Felsmalereien.", "Grenzübergreifendes Gebiet.", "Wüstenumgebung.", "Interessante Geologie."],
      hu: ["Történelmi sziklafestmények.", "Határokon átnyúló terület.", "Sivatagi környezet.", "Érdekes geológia."],
      ro: ["Picturi rupestre istorice.", "Zonă transfrontalieră.", "Mediu deșertic.", "Geologie interesantă."],
      en: ["Historical rock art.", "Transboundary area.", "Desert environment.", "Interesting geology."]
    }
  },
  {
    id: "nile-cataract-4-nature-v2",
    type: "mountain",
    parent: "SD-NR",
    coords: [32.3, 18.5],
    name: { de: "4. Nil-Katarakt", hu: "4. Nílus-katarakta", ro: "Cataracta a 4-a a Nilului", en: "4th Nile Cataract" },
    description: {
      de: "Ein Abschnitt mit Stromschnellen im Nil.",
      hu: "Zúgós szakasz a Níluson.",
      ro: "Un sector cu cascade pe Nil.",
      en: "A section of rapids in the Nile."
    },
    facts: {
      de: ["Natürliches Hindernis.", "Geologisch geprägt.", "Historisch schwierig für Schiffe.", "Schönes Naturschauspiel."],
      hu: ["Természetes akadály.", "Geológiailag jellemzett.", "Történelmileg nehéz a hajóknak.", "Gyönyörű természeti látvány."],
      ro: ["Obstacol natural.", "Caracterizat geologic.", "Istoric dificil pentru nave.", "Spectacol natural frumos."],
      en: ["Natural obstacle.", "Geologically characterized.", "Historically difficult for ships.", "Beautiful natural sight."]
    }
  },
  {
    id: "nile-cataract-5-nature-v2",
    type: "mountain",
    parent: "SD-NR",
    coords: [33.5, 18.2],
    name: { de: "5. Nil-Katarakt", hu: "5. Nílus-katarakta", ro: "Cataracta a 5-a a Nilului", en: "5th Nile Cataract" },
    description: {
      de: "Ein weiterer Abschnitt mit Stromschnellen im Nil.",
      hu: "Egy másik zúgós szakasz a Níluson.",
      ro: "Un alt sector cu cascade pe Nil.",
      en: "Another section of rapids in the Nile."
    },
    facts: {
      de: ["Schwer passierbar.", "Landschaftlich markant.", "Große Felsen.", "Wichtiges geologisches Merkmal."],
      hu: ["Nehezen átjárható.", "Tájképileg markáns.", "Nagy sziklák.", "Fontos geológiai vonás."],
      ro: ["Greu de trecut.", "Distinctiv peisagistic.", "Stânci mari.", "Trăsătură geologică importantă."],
      en: ["Difficult to navigate.", "Distinctively scenic.", "Large rocks.", "Important geological feature."]
    }
  },
  {
    id: "nile-cataract-6-nature-v2",
    type: "mountain",
    parent: "SD-NR",
    coords: [33, 16.3],
    name: { de: "6. Nil-Katarakt", hu: "6. Nílus-katarakta", ro: "Cataracta a 6-a a Nilului", en: "6th Nile Cataract" },
    description: {
      de: "Die nördlichste der großen Nil-Katarakte.",
      hu: "A legészakibb a nagy Nílus-katarakták közül.",
      ro: "Cea mai nordică dintre marile cascade ale Nilului.",
      en: "The northernmost of the great Nile cataracts."
    },
    facts: {
      de: ["In der Nähe von Shendi.", "Geologisch komplex.", "Markantes Naturmerkmal.", "Historisch wichtig."],
      hu: ["Shendi közelében.", "Geológiailag összetett.", "Markáns természeti jelleg.", "Történelmileg fontos."],
      ro: ["Aproape de Shendi.", "Complex geologic.", "Trăsătură naturală distinctivă.", "Important istoric."],
      en: ["Near Shendi.", "Geologically complex.", "Distinctive natural feature.", "Historically important."]
    }
  },
  {
    id: "jebel-marra-crater-nature-v2",
    type: "lake",
    parent: "SD-RS",
    coords: [24.27, 12.95],
    name: { de: "Jebel-Marra-Krater", hu: "Jebel Marra-kráter", ro: "Craterul Jebel Marra", en: "Jebel Marra Crater" },
    description: {
      de: "Ein vulkanischer Kratersee im Jebel-Marra-Massiv.",
      hu: "Vulkáni krátertó a Jebel Marra-hegységben.",
      ro: "Un lac vulcanic în masivul Jebel Marra.",
      en: "A volcanic crater lake in the Jebel Marra massif."
    },
    facts: {
      de: ["Einzigartige Lage.", "Sehr tief.", "Klare Gewässer.", "Geologisch faszinierend."],
      hu: ["Egyedi elhelyezkedés.", "Nagyon mély.", "Tiszta vizek.", "Geológiailag lenyűgöző."],
      ro: ["Locație unică.", "Foarte adânc.", "Ape clare.", "Fascinant geologic."],
      en: ["Unique location.", "Very deep.", "Clear waters.", "Geologically fascinating."]
    }
  },
  {
    id: "khor-el-gash-nature-v2",
    type: "river",
    parent: "SD-KS",
    coords: [36.4, 15.4],
    name: { de: "Khor el-Gash", hu: "Khor el-Gash", ro: "Khor el-Gash", en: "Khor el-Gash" },
    description: {
      de: "Ein saisonaler Fluss, der bei Kassala fließt.",
      hu: "Időszakos folyó Kassala mellett.",
      ro: "Un râu sezonier care curge lângă Kassala.",
      en: "A seasonal river that flows near Kassala."
    },
    facts: {
      de: ["Speist die Landwirtschaft bei Kassala.", "Saisonal unberechenbar.", "Natürlicher Kanal.", "Wichtiges regionales Wasser."],
      hu: ["Ellátja a Kassala környéki mezőgazdaságot.", "Időszakosan kiszámíthatatlan.", "Természetes csatorna.", "Fontos regionális víz."],
      ro: ["Alimentează agricultura lângă Kassala.", "Sezonier imprevizibil.", "Canal natural.", "Apă regională importantă."],
      en: ["Feeds agriculture near Kassala.", "Seasonally unpredictable.", "Natural channel.", "Important regional water."]
    }
  },
  {
    id: "wadi-azum-nature-v2",
    type: "river",
    parent: "SD-RS",
    coords: [23.5, 12.8],
    name: { de: "Wadi Azum", hu: "Wadi Azum", ro: "Wadi Azum", en: "Wadi Azum" },
    description: {
      de: "Ein wichtiges Wadi (Flusstal) in Darfur.",
      hu: "Fontos vadi (folyóvölgy) Darfurban.",
      ro: "Un wadi (vale fluvială) important în Darfur.",
      en: "An important wadi (river valley) in Darfur."
    },
    facts: {
      de: ["Saisonaler Abfluss.", "Wichtig für die lokale Vegetation.", "Traditionelle Siedlungsachse.", "Geologische Drainage."],
      hu: ["Időszakos lefolyás.", "Fontos a helyi növényzetnek.", "Hagyományos letelepedési tengely.", "Geológiai vízelvezetés."],
      ro: ["Scurgere sezonieră.", "Important pentru vegetația locală.", "Axă de așezare tradițională.", "Drenaj geologic."],
      en: ["Seasonal runoff.", "Important for local vegetation.", "Traditional settlement axis.", "Geological drainage."]
    }
  },
  {
    id: "jebel-mimi-nature-v2",
    type: "mountain",
    parent: "SD-RS",
    coords: [25.5, 13.5],
    name: { de: "Jebel Mimi", hu: "Jebel Mimi", ro: "Jebel Mimi", en: "Jebel Mimi" },
    description: {
      de: "Ein Berg in der Region Darfur.",
      hu: "Hegy Darfur régióban.",
      ro: "Un munte în regiunea Darfur.",
      en: "A mountain in the Darfur region."
    },
    facts: {
      de: ["Teil des Gebirgsvorlandes.", "Felsige Umgebung.", "Wichtige Landmarke.", "Geologisch alt."],
      hu: ["A hegység előterének része.", "Sziklás környezet.", "Fontos mérföldkő.", "Geológiailag öreg."],
      ro: ["Parte a piemontului.", "Mediu stâncos.", "Reper important.", "Vechi geologic."],
      en: ["Part of the mountain foothills.", "Rocky environment.", "Important landmark.", "Geologically old."]
    }
  }
];
