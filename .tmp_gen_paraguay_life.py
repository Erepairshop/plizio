import os
import re
import json

# Target directory and files
DATA_DIR = "lib/visualLab/data"
EXISTING_FILES = [
    "poiExtraParaguayCitiesV2.ts",
    "poiExtraParaguayHistoryV2.ts",
    "poiExtraParaguayLandmarksV2.ts",
    "poiExtraParaguayNatureV2.ts"
]

blocklist = set()

for filename in EXISTING_FILES:
    filepath = os.path.join(DATA_DIR, filename)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            matches = re.findall(r'name:\s*\{[^}]*de:\s*"([^"]+)"', content)
            for m in matches:
                blocklist.add(m.strip().lower())
            
            matches_sq = re.findall(r"name:\s*\{[^}]*de:\s*'([^']+)'", content)
            for m in matches_sq:
                blocklist.add(m.strip().lower())

print(f"Blocklist size: {len(blocklist)}")

pois = [
    {
        "id": "py-itaipu-zoo-life-v2",
        "type": "animal-habitat",
        "parent": "PY-10",
        "coords": [-54.6062, -25.3953],
        "name": {
            "de": "Zoológico de Itaipú",
            "hu": "Itaipú Állatkert",
            "ro": "Grădina Zoologică Itaipú",
            "en": "Itaipú Zoo"
        },
        "description": {
            "de": "Ein Zoo nahe dem Itaipú-Staudamm, der regionale Tierarten und den Artenschutz im Fokus hat.",
            "hu": "Az Itaipú-gát közelében található állatkert, amely a regionális fajokra és a természetvédelemre összpontosít.",
            "ro": "O grădină zoologică lângă barajul Itaipú, axată pe speciile regionale și conservarea acestora.",
            "en": "A zoo near the Itaipú Dam focusing on regional animal species and conservation efforts."
        },
        "facts": {
            "de": ["Viele gerettete Tiere", "Teil des Umweltprogramms", "Fokus auf heimische Arten", "Pädagogische Touren"],
            "hu": ["Sok megmentett állat", "A környezetvédelmi program része", "Fókusz a hazai fajokon", "Oktatási túrák"],
            "ro": ["Multe animale salvate", "Parte a programului de mediu", "Focus pe specii native", "Tururi educaționale"],
            "en": ["Many rescued animals", "Part of the environmental program", "Focus on native species", "Educational tours"]
        }
    },
    {
        "id": "py-refugio-mbaracayu-binacional-life-v2",
        "type": "animal-habitat",
        "parent": "PY-14",
        "coords": [-54.3167, -24.0333],
        "name": {
            "de": "Biologisches Schutzgebiet Mbaracayú",
            "hu": "Mbaracayú Biológiai Rezervátum",
            "ro": "Refugiul Biologic Mbaracayú",
            "en": "Mbaracayú Biological Refuge"
        },
        "description": {
            "de": "Ein wichtiges von Itaipú verwaltetes Schutzgebiet, das die Flora und Fauna nahe der brasilianischen Grenze bewahrt.",
            "hu": "Fontos Itaipú által kezelt védett terület, amely megőrzi a flórát és faunát a brazil határ közelében.",
            "ro": "O importantă zonă protejată administrată de Itaipú, care conservă flora și fauna lângă granița cu Brazilia.",
            "en": "An important protected area managed by Itaipú, preserving flora and fauna near the Brazilian border."
        },
        "facts": {
            "de": ["Binationales Reservat", "Teil des Itaipú-Netzwerks", "Schutz des Atlantikwaldes", "Umweltkorridor"],
            "hu": ["Binacionális rezervátum", "Az Itaipú-hálózat része", "Az atlanti erdő védelme", "Környezetvédelmi folyosó"],
            "ro": ["Rezervație binațională", "Parte a rețelei Itaipú", "Protecția Pădurii Atlantice", "Coridor de mediu"],
            "en": ["Binational reserve", "Part of the Itaipú network", "Protection of the Atlantic Forest", "Environmental corridor"]
        }
    },
    {
        "id": "py-rio-negro-life-v2",
        "type": "animal-habitat",
        "parent": "PY-16",
        "coords": [-58.1167, -19.8667],
        "name": {
            "de": "Nationalpark Río Negro",
            "hu": "Río Negro Nemzeti Park",
            "ro": "Parcul Național Río Negro",
            "en": "Río Negro National Park"
        },
        "description": {
            "de": "Ein abgelegener Park im Norden des Landes, in dem das Chaco-Ökosystem auf das Pantanal trifft.",
            "hu": "Elszigetelt park az ország északi részén, ahol a Chaco ökoszisztéma találkozik a Pantanallal.",
            "ro": "Un parc izolat în nordul țării unde ecosistemul Chaco se întâlnește cu Pantanalul.",
            "en": "A remote park in the north of the country where the Chaco ecosystem meets the Pantanal."
        },
        "facts": {
            "de": ["Grenzt an Bolivien und Brasilien", "Reich an Wasservögeln", "Schutz der Pantanal-Feuchtgebiete", "Schwer zugänglich"],
            "hu": ["Bolíviával és Brazíliával határos", "Vízimadarakban gazdag", "A Pantanal vizes élőhelyek védelme", "Nehezen megközelíthető"],
            "ro": ["Se învecinează cu Bolivia și Brazilia", "Bogat în păsări de apă", "Protecția zonelor umede Pantanal", "Greu accesibil"],
            "en": ["Borders Bolivia and Brazil", "Rich in waterfowl", "Protection of Pantanal wetlands", "Difficult to access"]
        }
    },
    {
        "id": "py-teniente-agripino-life-v2",
        "type": "animal-habitat",
        "parent": "PY-17",
        "coords": [-61.8000, -21.2000],
        "name": {
            "de": "Nationalpark Teniente Agripino Enciso",
            "hu": "Teniente Agripino Enciso Nemzeti Park",
            "ro": "Parcul Național Teniente Agripino Enciso",
            "en": "Teniente Agripino Enciso National Park"
        },
        "description": {
            "de": "Ein typisches Chaco-Ökosystem mit einzigartiger Tierwelt wie dem Chaco-Pekari und verschiedenen Gürteltieren.",
            "hu": "Tipikus Chaco ökoszisztéma egyedülálló vadvilággal, mint például a chaco pekari és különféle övékfélék.",
            "ro": "Un ecosistem tipic Chaco cu faună unică, cum ar fi pecariul de Chaco și diverși tatu.",
            "en": "A typical Chaco ecosystem with unique wildlife like the Chaco peccary and various armadillos."
        },
        "facts": {
            "de": ["Trockenwald-Lebensraum", "Heimat des Chaco-Pekari", "Schützt gefährdete Arten", "Sehr abgelegen"],
            "hu": ["Szárazföldi erdő élőhely", "A Chaco pekari otthona", "Védi a veszélyeztetett fajokat", "Nagyon elszigetelt"],
            "ro": ["Habitat de pădure uscată", "Acasă pentru pecariul de Chaco", "Protejează specii pe cale de dispariție", "Foarte izolat"],
            "en": ["Dry forest habitat", "Home of the Chaco peccary", "Protects endangered species", "Very remote location"]
        }
    },
    {
        "id": "py-tati-yupi-life-v2",
        "type": "animal-habitat",
        "parent": "PY-10",
        "coords": [-54.5800, -25.3600],
        "name": {
            "de": "Biologisches Schutzgebiet Tatí Yupí",
            "hu": "Tatí Yupí Biológiai Rezervátum",
            "ro": "Refugiul Biologic Tatí Yupí",
            "en": "Tatí Yupí Biological Refuge"
        },
        "description": {
            "de": "Ein Waldschutzgebiet der Itaipú-Talsperre, das die Flora und Fauna der Mata Atlântica schützt.",
            "hu": "Az Itaipú-gát erdőrezervátuma, amely az atlanti partvidéki erdő (Mata Atlântica) növény- és állatvilágát védi.",
            "ro": "O rezervație forestieră a barajului Itaipú, care protejează flora și fauna Pădurii Atlantice.",
            "en": "A forest reserve of the Itaipú Dam that protects the flora and fauna of the Atlantic Forest."
        },
        "facts": {
            "de": ["Von Itaipú verwaltet", "Schutz des Atlantischen Waldes", "Zahlreiche Säugetierarten", "Umweltbildung"],
            "hu": ["Az Itaipú kezeli", "Az atlanti erdő védelme", "Számos emlősfaj", "Környezeti nevelés"],
            "ro": ["Gestionat de Itaipú", "Protecția Pădurii Atlantice", "Multe specii de mamifere", "Educație de mediu"],
            "en": ["Managed by Itaipú", "Atlantic Forest protection", "Many mammal species", "Environmental education"]
        }
    },
    {
        "id": "py-atinguy-life-v2",
        "type": "animal-habitat",
        "parent": "PY-08",
        "coords": [-56.8400, -27.3200],
        "name": {
            "de": "Wildtierschutzgebiet Atinguy",
            "hu": "Atinguy Vadvédelmi Terület",
            "ro": "Refugiul pentru Viață Sălbatică Atinguy",
            "en": "Atinguy Wildlife Refuge"
        },
        "description": {
            "de": "Ein Schutzgebiet bei Ayolas, das von Yacyretá betrieben wird, um Tiere aus den Überflutungsgebieten des Damms zu retten.",
            "hu": "Ayolas melletti védett terület, amelyet a Yacyretá üzemeltet, hogy megmentse a gát áradásos területein élő állatokat.",
            "ro": "O zonă protejată lângă Ayolas, administrată de Yacyretá, pentru salvarea animalelor din zonele inundate de baraj.",
            "en": "A protected area near Ayolas operated by Yacyretá to rescue animals from the dam's flooded zones."
        },
        "facts": {
            "de": ["Rettungsstation für Tiere", "Gehört zu Yacyretá", "Heimat von Sumpfhirschen", "Zuchtprogramme"],
            "hu": ["Állatmentő állomás", "A Yacyretá része", "Mocsári szarvasok otthona", "Tenyésztési programok"],
            "ro": ["Stație de salvare a animalelor", "Aparține de Yacyretá", "Acasă pentru cerbii de mlaștină", "Programe de reproducere"],
            "en": ["Animal rescue station", "Belongs to Yacyretá", "Home to marsh deer", "Breeding programs"]
        }
    },
    {
        "id": "py-estancia-cattle-life-v2",
        "type": "agriculture",
        "parent": "PY-16",
        "coords": [-59.8500, -21.4000],
        "name": {
            "de": "Chaco Rinderfarmen",
            "hu": "Chaco Szarvasmarha Farmok",
            "ro": "Ferme de Vite din Chaco",
            "en": "Chaco Cattle Ranches"
        },
        "description": {
            "de": "Weitläufige Rinderfarmen (Estancias) im Chaco, die die Basis für Paraguays bedeutenden Rindfleischexport bilden.",
            "hu": "Kiterjedt szarvasmarha-farmok (Estanciák) a Chaco régióban, amelyek a paraguayi marhahúsexport alapját képezik.",
            "ro": "Ferme extinse de vite (Estancias) în Chaco, formând baza exportului major de carne de vită al Paraguayului.",
            "en": "Extensive cattle ranches (Estancias) in the Chaco, forming the basis for Paraguay's major beef export."
        },
        "facts": {
            "de": ["Wichtig für den Export", "Riesige Landflächen", "Zebu-Kreuzungen beliebt", "Prägen die Chaco-Kultur"],
            "hu": ["Fontos az exporthoz", "Hatalmas földterületek", "A Zebu keresztezések népszerűek", "Meghatározza a Chaco kultúrát"],
            "ro": ["Important pentru export", "Suprafețe imense de pământ", "Încrucișările Zebu sunt populare", "Modelarea culturii Chaco"],
            "en": ["Important for export", "Huge land areas", "Zebu crossbreeds popular", "Shaping Chaco culture"]
        }
    },
    {
        "id": "py-yerba-mate-bella-vista-life-v2",
        "type": "agriculture",
        "parent": "PY-07",
        "coords": [-55.5342, -27.0425],
        "name": {
            "de": "Mate-Strauch-Plantagen (Bella Vista)",
            "hu": "Yerba Mate Ültetvények (Bella Vista)",
            "ro": "Plantații de Yerba Mate (Bella Vista)",
            "en": "Yerba Mate Plantations (Bella Vista)"
        },
        "description": {
            "de": "Die Anbauregion der Yerba Mate, der Pflanze, aus der das traditionelle paraguayische Getränk Tereré gewonnen wird.",
            "hu": "A yerba mate termesztési régiója, az a növény, amelyből a hagyományos paraguayi italt, a tererét készítik.",
            "ro": "Regiunea de cultivare a Yerba Mate, planta din care se prepară băutura tradițională paraguayană Tereré.",
            "en": "The cultivation region of Yerba Mate, the plant used to make the traditional Paraguayan drink Tereré."
        },
        "facts": {
            "de": ["Zentrum des Mate-Anbaus", "Essenziel für Tereré", "Traditionelle Ernte", "Touristischer Mate-Weg"],
            "hu": ["A mate termesztés központja", "A Tereré alapja", "Hagyományos szüret", "Turisztikai Mate út"],
            "ro": ["Centrul cultivării mate", "Esențial pentru Tereré", "Recoltă tradițională", "Calea turistică Mate"],
            "en": ["Center of mate cultivation", "Essential for Tereré", "Traditional harvest", "Tourist Mate Route"]
        }
    },
    {
        "id": "py-stevia-san-pedro-life-v2",
        "type": "agriculture",
        "parent": "PY-02",
        "coords": [-56.5000, -24.0000],
        "name": {
            "de": "Stevia-Plantagen San Pedro",
            "hu": "San Pedro Stevia Ültetvények",
            "ro": "Plantațiile de Stevia San Pedro",
            "en": "San Pedro Stevia Plantations"
        },
        "description": {
            "de": "Paraguay ist die Heimat der Stevia-Pflanze (Ka'a He'ẽ). In San Pedro wird dieser natürliche Süßstoff im großen Stil angebaut.",
            "hu": "Paraguay a Stevia növény (Ka'a He'ẽ) őshazája. San Pedro területén ezt a természetes édesítőszert nagyban termesztik.",
            "ro": "Paraguay este patria plantei Stevia (Ka'a He'ẽ). În San Pedro, acest îndulcitor natural este cultivat pe scară largă.",
            "en": "Paraguay is the native home of the Stevia plant (Ka'a He'ẽ). In San Pedro, this natural sweetener is grown extensively."
        },
        "facts": {
            "de": ["Ursprung der Stevia", "Natürlicher Süßstoff", "Guaraní-Name: Ka'a He'ẽ", "Wichtiges Exportprodukt"],
            "hu": ["A Stevia eredete", "Természetes édesítőszer", "Guaraní név: Ka'a He'ẽ", "Fontos exporttermék"],
            "ro": ["Originea Steviei", "Îndulcitor natural", "Nume Guaraní: Ka'a He'ẽ", "Produs de export important"],
            "en": ["Origin of Stevia", "Natural sweetener", "Guaraní name: Ka'a He'ẽ", "Important export product"]
        }
    },
    {
        "id": "py-soya-alto-parana-life-v2",
        "type": "agriculture",
        "parent": "PY-10",
        "coords": [-54.9000, -25.5000],
        "name": {
            "de": "Sojafelder in Alto Paraná",
            "hu": "Szójaföldek Alto Paraná-ban",
            "ro": "Câmpuri de Soia în Alto Paraná",
            "en": "Soya Fields in Alto Paraná"
        },
        "description": {
            "de": "Ausgedehnte Sojaanbaugebiete im Osten Paraguays, die das Land zu einem der weltweiten Top-Sojaexporteure machen.",
            "hu": "Kiterjedt szójatermesztő területek Kelet-Paraguayban, amelyek az országot a világ egyik legnagyobb szójaexportőrévé teszik.",
            "ro": "Extinse zone de cultivare a soiei în estul Paraguayului, care fac țara unul dintre cei mai mari exportatori de soia.",
            "en": "Extensive soy cultivation areas in eastern Paraguay, making the country one of the top global soy exporters."
        },
        "facts": {
            "de": ["Paraguay ist Top-Exporteur", "Hochmechanisierte Landwirtschaft", "Fruchtbare Roterde", "Rückgrat der Wirtschaft"],
            "hu": ["Paraguay a vezető exportőr", "Erősen gépesített mezőgazdaság", "Termékeny vörösföld", "A gazdaság gerince"],
            "ro": ["Paraguay este un exportator de top", "Agricultură înalt mecanizată", "Pământ roșu fertil", "Coloana vertebrală a economiei"],
            "en": ["Paraguay is a top exporter", "Highly mechanized farming", "Fertile red earth", "Backbone of the economy"]
        }
    },
    {
        "id": "py-sugarcane-guaira-life-v2",
        "type": "agriculture",
        "parent": "PY-04",
        "coords": [-56.4000, -25.8000],
        "name": {
            "de": "Zuckerrohrfelder in Guairá",
            "hu": "Cukornádültetvények Guairában",
            "ro": "Câmpuri de Trestie de Zahăr din Guairá",
            "en": "Sugarcane Fields in Guairá"
        },
        "description": {
            "de": "Traditionelle Zuckerrohranbaugebiete in der Region Guairá, oft für die Produktion von biologischem Zucker und paraguayischem Rum (Caña) genutzt.",
            "hu": "Hagyományos cukornádültetvények Guairá régióban, amelyeket gyakran használnak organikus cukor és paraguayi rum (Caña) előállítására.",
            "ro": "Zone tradiționale de cultivare a trestiei de zahăr în Guairá, utilizate pentru zahăr organic și rom paraguayan (Caña).",
            "en": "Traditional sugarcane areas in the Guairá region, often used for organic sugar production and Paraguayan rum (Caña)."
        },
        "facts": {
            "de": ["Basis für Caña (Rum)", "Viel Bio-Zuckerrohr", "Handernte teilweise noch üblich", "Zentrum in Villarrica"],
            "hu": ["A Caña (rum) alapja", "Sok organikus cukornád", "A kézi betakarítás még gyakori", "Központ Villarricában"],
            "ro": ["Bază pentru Caña (Rom)", "Multă trestie de zahăr organică", "Recoltarea manuală este comună", "Centrul în Villarrica"],
            "en": ["Basis for Caña (Rum)", "Lots of organic sugarcane", "Hand harvest still common", "Center in Villarrica"]
        }
    },
    {
        "id": "py-cerro-cora-wildlife-life-v2",
        "type": "animal-habitat",
        "parent": "PY-13",
        "coords": [-56.0333, -22.6500],
        "name": {
            "de": "Nationalpark Cerro Corá (Tierwelt)",
            "hu": "Cerro Corá Nemzeti Park (Vadvilág)",
            "ro": "Parcul Național Cerro Corá (Faună)",
            "en": "Cerro Corá National Park (Wildlife)"
        },
        "description": {
            "de": "Ein Natur- und Geschichtspark mit isolierten Hügeln, der Lebensraum für Affen, Hirsche und zahlreiche Vogelarten bietet.",
            "hu": "Természet- és történelmi park elszigetelt dombokkal, amely majmok, szarvasok és számos madárfaj élőhelye.",
            "ro": "Un parc natural și istoric cu dealuri izolate, oferind habitat pentru maimuțe, cerbi și numeroase specii de păsări.",
            "en": "A nature and history park with isolated hills, providing habitat for monkeys, deer, and numerous bird species."
        },
        "facts": {
            "de": ["Mix aus Cerrado und Wald", "Heimat von Brüllaffen", "Historischer Ort", "Rückzugsgebiet für Wildtiere"],
            "hu": ["A Cerrado és az erdő keveréke", "Bőgőmajmok otthona", "Történelmi hely", "Menedék a vadvilág számára"],
            "ro": ["Amestec de Cerrado și pădure", "Acasă pentru maimuțele urlătoare", "Loc istoric", "Refugiu pentru faună"],
            "en": ["Mix of Cerrado and forest", "Home to howler monkeys", "Historical location", "Refuge for wildlife"]
        }
    },
    {
        "id": "py-mennonite-dairy-chaco-life-v2",
        "type": "agriculture",
        "parent": "PY-17",
        "coords": [-60.0333, -22.3833],
        "name": {
            "de": "Mennonitische Milchwirtschaft (Filadelfia)",
            "hu": "Mennonita Tejgazdaság (Filadelfia)",
            "ro": "Lăptărie Menonită (Filadelfia)",
            "en": "Mennonite Dairy Farming (Filadelfia)"
        },
        "description": {
            "de": "Die mennonitischen Kolonien im Zentral-Chaco sind bekannt für ihre hochentwickelte Milch- und Käseproduktion in einer feindlichen Umgebung.",
            "hu": "A Közép-Chaco régió mennonita kolóniái ismertek magasan fejlett tej- és sajttermelésükről a barátságtalan környezetben.",
            "ro": "Coloniile menonite din Chaco Central sunt cunoscute pentru producția lor avansată de lapte și brânză într-un mediu ostil.",
            "en": "The Mennonite colonies in the Central Chaco are known for their highly developed dairy and cheese production in a harsh environment."
        },
        "facts": {
            "de": ["Große Molkereien", "Zentrum Filadelfia", "Trotz Trockenheit erfolgreich", "Kooperativen-System"],
            "hu": ["Nagy tejüzemek", "Filadelfia központja", "A szárazság ellenére sikeres", "Szövetkezeti rendszer"],
            "ro": ["Mari fabrici de lactate", "Centrul Filadelfia", "Succes în ciuda secetei", "Sistem cooperatist"],
            "en": ["Large dairy plants", "Center in Filadelfia", "Successful despite drought", "Cooperative system"]
        }
    },
    {
        "id": "py-cotton-chaco-life-v2",
        "type": "agriculture",
        "parent": "PY-15",
        "coords": [-59.5000, -23.5000],
        "name": {
            "de": "Baumwollfelder im Chaco",
            "hu": "Gyapotmezők a Chaco-ban",
            "ro": "Câmpuri de Bumbac în Chaco",
            "en": "Cotton Fields in the Chaco"
        },
        "description": {
            "de": "Der Anbau von Baumwolle war historisch bedeutend und wird durch neue hitzeresistente Sorten im Chaco wiederbelebt.",
            "hu": "A gyapottermesztés történelmileg jelentős volt, és a Chaco-ban új, hőálló fajtákkal éled újjá.",
            "ro": "Cultivarea bumbacului a fost istoric importantă și este reînviată în Chaco prin noi soiuri rezistente la căldură.",
            "en": "Cotton cultivation was historically significant and is being revived in the Chaco with new heat-resistant varieties."
        },
        "facts": {
            "de": ["Ehemaliges weißes Gold", "Anpassung an die Hitze", "Wichtige Faserproduktion", "Teil der Chaco-Wirtschaft"],
            "hu": ["Egykori fehér arany", "Alkalmazkodás a hőséghez", "Fontos rosttermelés", "A Chaco gazdaság része"],
            "ro": ["Fostul aur alb", "Adaptare la căldură", "Producție importantă de fibre", "Parte a economiei Chaco"],
            "en": ["Former white gold", "Adaptation to heat", "Important fiber production", "Part of the Chaco economy"]
        }
    },
    {
        "id": "py-asuncion-botanical-zoo-life-v2",
        "type": "kid-landmark",
        "parent": "PY-AS",
        "coords": [-57.5683, -25.2505],
        "name": {
            "de": "Botanischer Garten und Zoo Asunción",
            "hu": "Asuncióni Botanikus Kert és Állatkert",
            "ro": "Grădina Botanică și Zoologică Asunción",
            "en": "Asunción Botanical Garden and Zoo"
        },
        "description": {
            "de": "Eine große grüne Lunge in der Hauptstadt, die Familien mit einem Zoo voller einheimischer Tiere und großen Parks anzieht.",
            "hu": "Egy nagy zöld tüdő a fővárosban, amely egy őshonos állatokkal teli állatkerttel és nagy parkokkal vonzza a családokat.",
            "ro": "Un plămân verde mare în capitală, atrăgând familiile cu o grădină zoologică plină de animale native și parcuri întinse.",
            "en": "A large green lung in the capital, attracting families with a zoo full of native animals and large parks."
        },
        "facts": {
            "de": ["Über 110 Hektar groß", "Einheimische Säugetiere", "Beliebt bei Familien", "Historisches Naturkundemuseum"],
            "hu": ["Több mint 110 hektár", "Őshonos emlősök", "Népszerű a családok körében", "Történelmi természettudományi múzeum"],
            "ro": ["Peste 110 hectare", "Mamifere native", "Popular printre familii", "Muzeu istoric de istorie naturală"],
            "en": ["Over 110 hectares", "Native mammals", "Popular with families", "Historical natural history museum"]
        }
    },
    {
        "id": "py-museo-historia-natural-life-v2",
        "type": "kid-landmark",
        "parent": "PY-11",
        "coords": [-57.5167, -25.3333],
        "name": {
            "de": "Naturkundemuseum San Lorenzo",
            "hu": "San Lorenzo Természettudományi Múzeum",
            "ro": "Muzeul de Istorie Naturală San Lorenzo",
            "en": "San Lorenzo Natural History Museum"
        },
        "description": {
            "de": "Ein Museum, das Kindern und Erwachsenen die reiche Artenvielfalt und Geologie Paraguays näherbringt.",
            "hu": "Egy múzeum, amely közelebb hozza a gyerekeket és felnőtteket Paraguay gazdag biológiai sokféleségéhez és geológiájához.",
            "ro": "Un muzeu care aduce copiii și adulții mai aproape de biodiversitatea bogată și geologia Paraguayului.",
            "en": "A museum that brings children and adults closer to the rich biodiversity and geology of Paraguay."
        },
        "facts": {
            "de": ["Ausgestopfte heimische Tiere", "Insektensammlungen", "Bildungsprogramme", "Auf dem Uni-Campus"],
            "hu": ["Kitömött hazai állatok", "Rovargyűjtemények", "Oktatási programok", "Az egyetemi campuson"],
            "ro": ["Animale native împăiate", "Colecții de insecte", "Programe educaționale", "În campusul universitar"],
            "en": ["Taxidermy of native animals", "Insect collections", "Educational programs", "On the university campus"]
        }
    },
    {
        "id": "py-granja-avestruz-life-v2",
        "type": "kid-landmark",
        "parent": "PY-03",
        "coords": [-57.1000, -25.3000],
        "name": {
            "de": "Straußenfarm Mbocayaty",
            "hu": "Mbocayaty Struccfarm",
            "ro": "Ferma de Struți Mbocayaty",
            "en": "Mbocayaty Ostrich Farm"
        },
        "description": {
            "de": "Eine interaktive Farm für Familien, auf der Besucher riesige afrikanische Strauße füttern und beobachten können.",
            "hu": "Interaktív farm családok számára, ahol a látogatók hatalmas afrikai struccokat etethetnek és figyelhetnek meg.",
            "ro": "O fermă interactivă pentru familii, unde vizitatorii pot hrăni și observa struți africani uriași.",
            "en": "An interactive farm for families where visitors can feed and observe giant African ostriches."
        },
        "facts": {
            "de": ["Interaktive Tierfütterung", "Spannend für Kinder", "Exotische Tiere in Paraguay", "Lokaler Ökotourismus"],
            "hu": ["Interaktív állatetetés", "Izgalmas a gyerekeknek", "Egzotikus állatok Paraguayban", "Helyi ökoturizmus"],
            "ro": ["Hrănire interactivă a animalelor", "Captivant pentru copii", "Animale exotice în Paraguay", "Ecoturism local"],
            "en": ["Interactive animal feeding", "Exciting for children", "Exotic animals in Paraguay", "Local ecotourism"]
        }
    },
    {
        "id": "py-parque-ecologico-capiata-life-v2",
        "type": "kid-landmark",
        "parent": "PY-11",
        "coords": [-57.4167, -25.3500],
        "name": {
            "de": "Ökologischer Park Capiatá",
            "hu": "Capiatá Ökológiai Park",
            "ro": "Parcul Ecologic Capiatá",
            "en": "Capiatá Ecological Park"
        },
        "description": {
            "de": "Ein Familienpark mit Teichen, kleinen Waldwegen und Spielplätzen, ideal für ein Picknick am Wochenende.",
            "hu": "Családi park tavakkal, kis erdei ösvényekkel és játszóterekkel, ideális egy hétvégi piknikhez.",
            "ro": "Un parc familial cu iazuri, mici poteci de pădure și locuri de joacă, ideal pentru un picnic în weekend.",
            "en": "A family park with ponds, small forest paths, and playgrounds, ideal for a weekend picnic."
        },
        "facts": {
            "de": ["Naherholungsgebiet", "Naturlehrpfade für Kinder", "Picknickzonen", "Schutz der lokalen Flora"],
            "hu": ["Közeli rekreációs terület", "Természeti tanösvények gyerekeknek", "Piknikező helyek", "A helyi flóra védelme"],
            "ro": ["Zonă de recreere", "Trasee naturale pentru copii", "Zone de picnic", "Protecția florei locale"],
            "en": ["Local recreation area", "Nature trails for kids", "Picnic zones", "Protection of local flora"]
        }
    },
    {
        "id": "py-reserva-mbaracayu-life-v2",
        "type": "animal-habitat",
        "parent": "PY-14",
        "coords": [-55.4333, -24.1333],
        "name": {
            "de": "Naturreservat Bosque Mbaracayú",
            "hu": "Bosque Mbaracayú Természetvédelmi Terület",
            "ro": "Rezervația Naturală Bosque Mbaracayú",
            "en": "Bosque Mbaracayú Nature Reserve"
        },
        "description": {
            "de": "Eines der letzten großen Stücke des atlantischen Regenwaldes, Heimat des Jaguarundi, von Tapiren und Harpyien.",
            "hu": "Az atlanti esőerdő egyik utolsó nagy darabja, a jaguarundi, a tapírok és a hárpiák otthona.",
            "ro": "Una dintre ultimele mari bucăți de pădure tropicală atlantică, adăpost pentru jaguarundi, tapiri și harpii.",
            "en": "One of the last large pieces of the Atlantic rainforest, home to the jaguarundi, tapirs, and harpy eagles."
        },
        "facts": {
            "de": ["Biosphärenreservat", "Mata Atlântica Schutz", "Seltene Vogelarten", "Fokus auf Naturschutz"],
            "hu": ["Bioszféra rezervátum", "Mata Atlântica védelem", "Ritka madárfajok", "Fókusz a természetvédelmen"],
            "ro": ["Rezervație a biosferei", "Protecția Mata Atlântica", "Specii rare de păsări", "Focus pe conservare"],
            "en": ["Biosphere Reserve", "Mata Atlântica protection", "Rare bird species", "Focus on conservation"]
        }
    },
    {
        "id": "py-laguna-capitan-life-v2",
        "type": "animal-habitat",
        "parent": "PY-15",
        "coords": [-59.6833, -22.5333],
        "name": {
            "de": "Laguna Capitán (Flamingo-Habitat)",
            "hu": "Laguna Capitán (Flamingó Élőhely)",
            "ro": "Laguna Capitán (Habitat pentru Flamingi)",
            "en": "Laguna Capitán (Flamingo Habitat)"
        },
        "description": {
            "de": "Ein Salzsee im zentralen Chaco, an dem sich regelmäßig Schwärme von Chileflamingos und Wasservögeln versammeln.",
            "hu": "Sóstó a közép-chacói régióban, ahol chilei flamingók és vízimadarak rajjai gyűlnek össze rendszeresen.",
            "ro": "Un lac sărat în Chaco-ul central unde se adună regulat stoluri de flamingi chilieni și păsări de apă.",
            "en": "A salt lake in the central Chaco where flocks of Chilean flamingos and waterfowl regularly gather."
        },
        "facts": {
            "de": ["Salziger Binnensee", "Wichtiger Rastplatz für Vögel", "Ökotourismus Camp", "Chileflamingos"],
            "hu": ["Sós belvízi tó", "Fontos pihenőhely a madaraknak", "Ökoturisztikai tábor", "Chilei flamingók"],
            "ro": ["Lac interior sărat", "Loc de odihnă important pentru păsări", "Tabără de ecoturism", "Flamingi chilieni"],
            "en": ["Salty inland lake", "Important resting place for birds", "Ecotourism camp", "Chilean flamingos"]
        }
    },
    {
        "id": "py-estancia-loma-pora-life-v2",
        "type": "agriculture",
        "parent": "PY-15",
        "coords": [-58.8500, -23.1000],
        "name": {
            "de": "Estancia Loma Porã",
            "hu": "Loma Porã Estancia",
            "ro": "Estancia Loma Porã",
            "en": "Estancia Loma Porã"
        },
        "description": {
            "de": "Eine Musterfarm im paraguayischen Chaco, die Viehzucht mit ökologischem Gleichgewicht und Wildtierschutz verbindet.",
            "hu": "Mintafarm a paraguayi Chaco-ban, amely ötvözi az állattenyésztést az ökológiai egyensúllyal és a vadvédelemmel.",
            "ro": "O fermă model în Chaco-ul paraguayan care combină creșterea vitelor cu echilibrul ecologic și protecția faunei.",
            "en": "A model farm in the Paraguayan Chaco that combines cattle breeding with ecological balance and wildlife protection."
        },
        "facts": {
            "de": ["Nachhaltige Rinderzucht", "Schutz von Naturräumen", "Weite Savannen", "Vorbild für Agrarökologie"],
            "hu": ["Fenntartható szarvasmarha tenyésztés", "Természeti területek védelme", "Széles szavannák", "Az agroökológia modellje"],
            "ro": ["Creșterea durabilă a vitelor", "Protecția spațiilor naturale", "Savane întinse", "Model pentru agroecologie"],
            "en": ["Sustainable cattle breeding", "Protection of natural spaces", "Wide savannas", "Model for agroecology"]
        }
    },
    {
        "id": "py-sesame-san-pedro-life-v2",
        "type": "agriculture",
        "parent": "PY-02",
        "coords": [-56.4000, -24.2000],
        "name": {
            "de": "Sesamfelder in San Pedro",
            "hu": "Szezámmagföldek San Pedróban",
            "ro": "Câmpuri de Susan în San Pedro",
            "en": "Sesame Fields in San Pedro"
        },
        "description": {
            "de": "Paraguay ist ein bedeutender Sesam-Exporteur. Kleinbauern in der Region San Pedro produzieren hochwertigen Sesam für den Weltmarkt.",
            "hu": "Paraguay jelentős szezámmag-exportőr. San Pedro régió kisgazdái kiváló minőségű szezámmagot termelnek a világpiacra.",
            "ro": "Paraguay este un exportator major de susan. Micii fermieri din regiunea San Pedro produc susan de înaltă calitate.",
            "en": "Paraguay is a major sesame exporter. Small farmers in the San Pedro region produce high-quality sesame for the global market."
        },
        "facts": {
            "de": ["Wichtiges Exportgut nach Japan", "Oft von Kleinbauern angebaut", "Handernte", "Trockenresistente Pflanze"],
            "hu": ["Fontos exportcikk Japánba", "Gyakran kisgazdák termesztik", "Kézi betakarítás", "Szárazságtűrő növény"],
            "ro": ["Produs de export important pentru Japonia", "Deseori cultivat de micii fermieri", "Recoltare manuală", "Plantă rezistentă la secetă"],
            "en": ["Important export to Japan", "Often grown by small farmers", "Hand harvest", "Drought-resistant plant"]
        }
    },
    {
        "id": "py-corn-caaguazu-life-v2",
        "type": "agriculture",
        "parent": "PY-05",
        "coords": [-56.0000, -25.4000],
        "name": {
            "de": "Maisfelder in Caaguazú",
            "hu": "Kukoricaföldek Caaguazúban",
            "ro": "Câmpuri de Porumb în Caaguazú",
            "en": "Corn Fields in Caaguazú"
        },
        "description": {
            "de": "Neben Soja ist Mais eine der Hauptkulturen Paraguays, die im Department Caaguazú in großem Maßstab angebaut wird.",
            "hu": "A szója mellett a kukorica Paraguay egyik fő növénye, amelyet Caaguazú megyében nagyüzemben termesztenek.",
            "ro": "Alături de soia, porumbul este una dintre culturile principale ale Paraguayului, cultivată pe scară largă în Caaguazú.",
            "en": "Alongside soy, corn is one of Paraguay's main crops, grown on a large scale in the Caaguazú department."
        },
        "facts": {
            "de": ["Grundnahrungsmittel (Sopa Paraguaya)", "Wichtiges Futtergetreide", "Zweite Ernte nach Soja", "Großflächiger Anbau"],
            "hu": ["Alapélelmiszer (Sopa Paraguaya)", "Fontos takarmánygabona", "Második termés a szója után", "Nagyüzemi termesztés"],
            "ro": ["Aliment de bază (Sopa Paraguaya)", "Cereale furajere importante", "A doua recoltă după soia", "Cultivare pe scară largă"],
            "en": ["Staple food (Sopa Paraguaya)", "Important feed grain", "Second crop after soy", "Large-scale cultivation"]
        }
    },
    {
        "id": "py-wheat-itapua-life-v2",
        "type": "agriculture",
        "parent": "PY-07",
        "coords": [-55.7000, -26.8000],
        "name": {
            "de": "Weizenfelder in Itapúa",
            "hu": "Búzaföldek Itapúában",
            "ro": "Câmpuri de Grâu în Itapúa",
            "en": "Wheat Fields in Itapúa"
        },
        "description": {
            "de": "Itapúa ist die Kornkammer Paraguays, in der während des südamerikanischen Winters riesige Weizenfelder blühen.",
            "hu": "Itapúa Paraguay magtára, ahol a dél-amerikai tél folyamán hatalmas búzaföldek virágoznak.",
            "ro": "Itapúa este grânarul Paraguayului, unde câmpuri uriașe de grâu înfloresc în timpul iernii sud-americane.",
            "en": "Itapúa is the granary of Paraguay, where huge wheat fields flourish during the South American winter."
        },
        "facts": {
            "de": ["Kornkammer des Landes", "Winterkultur in Paraguay", "Reiche rote Böden", "Selbstversorgung des Landes"],
            "hu": ["Az ország magtára", "Téli növény Paraguayban", "Gazdag vörös talajok", "Az ország önellátása"],
            "ro": ["Grânarul țării", "Cultură de iarnă în Paraguay", "Soluri roșii bogate", "Autosuficiența țării"],
            "en": ["Granary of the country", "Winter crop in Paraguay", "Rich red soils", "Self-sufficiency of the country"]
        }
    },
    {
        "id": "py-banana-tembiapora-life-v2",
        "type": "agriculture",
        "parent": "PY-05",
        "coords": [-55.8000, -25.2000],
        "name": {
            "de": "Bananenplantagen von Tembiaporá",
            "hu": "Tembiaporá Banánültetvények",
            "ro": "Plantațiile de Banane din Tembiaporá",
            "en": "Tembiaporá Banana Plantations"
        },
        "description": {
            "de": "Die Hauptstadt der Banane in Paraguay. Diese Region ist von großen Plantagen umgeben, die das Land mit der süßen Frucht versorgen.",
            "hu": "Paraguay banánfővárosa. Ezt a régiót nagy ültetvények veszik körül, amelyek édes gyümölccsel látják el az országot.",
            "ro": "Capitala bananelor din Paraguay. Această regiune este înconjurată de plantații mari care furnizează fructul dulce.",
            "en": "The banana capital of Paraguay. This region is surrounded by large plantations that supply the country with the sweet fruit."
        },
        "facts": {
            "de": ["Bananenhauptstadt Paraguays", "Wichtige Einkommensquelle", "Bedeutend für Binnenmarkt", "Mildes Klima fördert Anbau"],
            "hu": ["Paraguay banánfővárosa", "Fontos bevételi forrás", "Jelentős a belső piacon", "Az enyhe éghajlat kedvez a termesztésnek"],
            "ro": ["Capitala bananelor din Paraguay", "Sursă importantă de venit", "Semnificativ pentru piața internă", "Clima blândă favorizează cultivarea"],
            "en": ["Banana capital of Paraguay", "Important source of income", "Significant for domestic market", "Mild climate favors cultivation"]
        }
    },
    {
        "id": "py-refugio-limoy-life-v2",
        "type": "animal-habitat",
        "parent": "PY-10",
        "coords": [-54.4500, -24.8167],
        "name": {
            "de": "Biologisches Schutzgebiet Limoy",
            "hu": "Limoy Biológiai Rezervátum",
            "ro": "Refugiul Biologic Limoy",
            "en": "Limoy Biological Refuge"
        },
        "description": {
            "de": "Ein weiteres Schutzgebiet entlang des Paraná-Flusses, das der Erhaltung des Atlantischen Waldes und seiner Tiere dient.",
            "hu": "Egy másik védett terület a Paraná folyó mentén, amely az atlanti erdő és állatainak megőrzését szolgálja.",
            "ro": "O altă arie protejată de-a lungul râului Paraná, servind la conservarea Pădurii Atlantice și a animalelor sale.",
            "en": "Another protected area along the Paraná River, serving to conserve the Atlantic Forest and its animals."
        },
        "facts": {
            "de": ["Von Itaipú geschützt", "Biodiversitäts-Hotspot", "Über 300 Vogelarten", "Uferwälder des Paraná"],
            "hu": ["Az Itaipú által védett", "Biodiverzitás hotspot", "Több mint 300 madárfaj", "A Paraná part menti erdei"],
            "ro": ["Protejat de Itaipú", "Hotspot de biodiversitate", "Peste 300 de specii de păsări", "Păduri riverane ale Paraná"],
            "en": ["Protected by Itaipú", "Biodiversity hotspot", "Over 300 bird species", "Riparian forests of the Paraná"]
        }
    },
    {
        "id": "py-refugio-carapa-life-v2",
        "type": "animal-habitat",
        "parent": "PY-14",
        "coords": [-54.3833, -24.3667],
        "name": {
            "de": "Biologisches Schutzgebiet Carapã",
            "hu": "Carapã Biológiai Rezervátum",
            "ro": "Refugiul Biologic Carapã",
            "en": "Carapã Biological Refuge"
        },
        "description": {
            "de": "Ein Waldschutzgebiet nördlich des Itaipú-Stausees, das den Korridor für Wildtiere zwischen verschiedenen Reservaten sichert.",
            "hu": "Erdőrezervátum az Itaipú-víztározótól északra, amely biztosítja a vadvilág folyosóját a különböző rezervátumok között.",
            "ro": "O rezervație forestieră la nord de rezervorul Itaipú care asigură coridorul pentru faună între diferite rezervații.",
            "en": "A forest reserve north of the Itaipú Reservoir that secures the wildlife corridor between different reserves."
        },
        "facts": {
            "de": ["Biologischer Korridor", "Schutz vor Entwaldung", "Wichtig für Ozelots", "Erforschung der Flora"],
            "hu": ["Biológiai folyosó", "Védelem az erdőirtás ellen", "Fontos az ocelotok számára", "A flóra kutatása"],
            "ro": ["Coridor biologic", "Protecție împotriva defrișărilor", "Important pentru oceloți", "Cercetarea florei"],
            "en": ["Biological corridor", "Protection against deforestation", "Important for ocelots", "Research of the flora"]
        }
    },
    {
        "id": "py-laguna-blanca-nature-life-v2",
        "type": "kid-landmark",
        "parent": "PY-02",
        "coords": [-56.1333, -23.8000],
        "name": {
            "de": "Laguna Blanca Öko-Reservat",
            "hu": "Laguna Blanca Öko-Rezervátum",
            "ro": "Rezervația Eco Laguna Blanca",
            "en": "Laguna Blanca Eco-Reserve"
        },
        "description": {
            "de": "Ein klarer See über weißem Sand, umgeben von Cerrado-Wäldern, beliebt bei Familien für Naturbeobachtungen und zum Baden.",
            "hu": "Tiszta vizű tó fehér homok felett, Cerrado erdőkkel körülvéve, népszerű a családok körében természetmegfigyelésre és fürdőzésre.",
            "ro": "Un lac limpede deasupra nisipului alb, înconjurat de păduri Cerrado, popular printre familii pentru observarea naturii și înot.",
            "en": "A clear lake over white sand, surrounded by Cerrado forests, popular with families for nature observation and swimming."
        },
        "facts": {
            "de": ["Kristallklares Wasser", "Weißer Sandstrand", "Vogelbeobachtung", "Perfekt für Familien"],
            "hu": ["Kristálytiszta víz", "Fehér homokos part", "Madármegfigyelés", "Tökéletes családoknak"],
            "ro": ["Apă cristalină", "Plajă cu nisip alb", "Observarea păsărilor", "Perfect pentru familii"],
            "en": ["Crystal clear water", "White sandy beach", "Bird watching", "Perfect for families"]
        }
    },
    {
        "id": "py-granja-kuruzu-life-v2",
        "type": "kid-landmark",
        "parent": "PY-11",
        "coords": [-57.4800, -25.4000],
        "name": {
            "de": "Granja Educativa Kuruzu",
            "hu": "Kuruzu Oktatófarm",
            "ro": "Ferma Educațională Kuruzu",
            "en": "Kuruzu Educational Farm"
        },
        "description": {
            "de": "Eine Lehrfarm in der Nähe von Asunción, auf der Stadtkinder lernen, wie Milch gemolken wird und woher das Gemüse kommt.",
            "hu": "Oktatófarm Asunción közelében, ahol a városi gyerekek megtanulják, hogyan fejjék a tejet, és honnan származnak a zöldségek.",
            "ro": "O fermă educațională lângă Asunción, unde copiii din oraș învață cum se mulge laptele și de unde provin legumele.",
            "en": "An educational farm near Asunción where city children learn how milk is milked and where vegetables come from."
        },
        "facts": {
            "de": ["Pädagogischer Bauernhof", "Tiere streicheln", "Gemüseanbau für Kinder", "Wochenendausflug"],
            "hu": ["Oktatási tanya", "Állatsimogató", "Zöldségtermesztés gyerekeknek", "Hétvégi kirándulás"],
            "ro": ["Fermă educațională", "Animale de mângâiat", "Cultivarea legumelor pentru copii", "Excursie de weekend"],
            "en": ["Educational farm", "Petting animals", "Growing vegetables for kids", "Weekend getaway"]
        }
    },
    {
        "id": "py-campo-experimental-chaco-life-v2",
        "type": "agriculture",
        "parent": "PY-16",
        "coords": [-59.7000, -21.0000],
        "name": {
            "de": "Agrar-Versuchsfeld Chaco",
            "hu": "Chaco Agrár Kísérleti Terület",
            "ro": "Câmpul Experimental Agricol Chaco",
            "en": "Chaco Agricultural Experimental Field"
        },
        "description": {
            "de": "Forschungszentren im Chaco, die neue dürreresistente Pflanzen und Gräser für die paraguayische Landwirtschaft entwickeln.",
            "hu": "Kutatóközpontok a Chaco régióban, amelyek új szárazságtűrő növényeket és füveket fejlesztenek a paraguayi mezőgazdaság számára.",
            "ro": "Centre de cercetare în Chaco care dezvoltă noi plante și ierburi rezistente la secetă pentru agricultura paraguayană.",
            "en": "Research centers in the Chaco developing new drought-resistant plants and grasses for Paraguayan agriculture."
        },
        "facts": {
            "de": ["Forschung für den Chaco", "Dürreresistente Kulturen", "Innovation in der Landwirtschaft", "Zukunftssicherung"],
            "hu": ["Kutatás a Chaco számára", "Szárazságtűrő növények", "Innováció a mezőgazdaságban", "A jövő biztosítása"],
            "ro": ["Cercetare pentru Chaco", "Culturi rezistente la secetă", "Inovație în agricultură", "Asigurarea viitorului"],
            "en": ["Research for the Chaco", "Drought-resistant crops", "Innovation in agriculture", "Securing the future"]
        }
    }
]

final_pois = []
for p in pois:
    de_name = p["name"]["de"].lower()
    if de_name in blocklist:
        print(f"DUPLICATE FOUND AND SKIPPED: {p['name']['de']}")
        continue
    final_pois.append(p)

print(f"Valid POIs: {len(final_pois)}")

if len(final_pois) < 30:
    print("WARNING: LESS THAN 30 POIS!")

out_lines = [
    'import type { POI } from "./poi";',
    '',
    'export const poiExtraParaguayLifeV2: POI[] = ['
]

for i, p in enumerate(final_pois):
    o = '  {\n'
    o += f'    id: "{p["id"]}",\n'
    o += f'    type: "{p["type"]}",\n'
    o += f'    parent: "{p["parent"]}",\n'
    o += f'    coords: [{p["coords"][0]}, {p["coords"][1]}],\n'
    o += f'    name: {{ de: "{p["name"]["de"]}", hu: "{p["name"]["hu"]}", ro: "{p["name"]["ro"]}", en: "{p["name"]["en"]}" }},\n'
    o += f'    description: {{\n'
    o += f'      de: "{p["description"]["de"]}",\n'
    o += f'      hu: "{p["description"]["hu"]}",\n'
    o += f'      ro: "{p["description"]["ro"]}",\n'
    o += f'      en: "{p["description"]["en"]}"\n'
    o += '    },\n'
    o += '    facts: {\n'
    o += f'      de: {json.dumps(p["facts"]["de"], ensure_ascii=False)},\n'
    o += f'      hu: {json.dumps(p["facts"]["hu"], ensure_ascii=False)},\n'
    o += f'      ro: {json.dumps(p["facts"]["ro"], ensure_ascii=False)},\n'
    o += f'      en: {json.dumps(p["facts"]["en"], ensure_ascii=False)}\n'
    o += '    }\n'
    if i < len(final_pois) - 1:
        o += '  },'
    else:
        o += '  }'
    out_lines.append(o)

out_lines.append('];')

out_content = "\n".join(out_lines)

out_path = os.path.join(DATA_DIR, "poiExtraParaguayLifeV2.ts")
with open(out_path, "w", encoding="utf-8") as f:
    f.write(out_content)

print(f"File written to {out_path} with {len(final_pois)} POIs.")
print(f"File size: {os.path.getsize(out_path)} bytes.")
