import json

pois = [
    {
        "id": "mogadishu-port-economic-v2",
        "type": "port",
        "parent": "SO-BN",
        "coords": [45.3475, 2.0308],
        "name": {
            "de": "Hafen von Mogadischu",
            "hu": "Mogadishu Kikötő",
            "ro": "Portul Mogadishu",
            "en": "Mogadishu Port"
        },
        "description": {
            "de": "Der größte Seehafen Somalias und ein entscheidendes Wirtschaftszentrum für den internationalen Handel am Indischen Ozean.",
            "hu": "Szomália legnagyobb tengeri kikötője, amely kulcsfontosságú gazdasági központ a nemzetközi kereskedelemben az Indiai-óceánon.",
            "ro": "Cel mai mare port maritim din Somalia, un centru economic crucial pentru comerțul internațional la Oceanul Indian.",
            "en": "The largest seaport in Somalia, serving as a crucial economic hub for international trade on the Indian Ocean."
        },
        "facts": {
            "de": ["Größter Hafen des Landes.", "Wichtig für den Import von Gütern."],
            "hu": ["Az ország legnagyobb kikötője.", "Fontos az áruk importálása szempontjából."],
            "ro": ["Cel mai mare port din țară.", "Important pentru importul de bunuri."],
            "en": ["The country's largest port.", "Important for importing goods."]
        }
    },
    {
        "id": "berbera-port-economic-v2",
        "type": "port",
        "parent": "SO-WO",
        "coords": [44.9922, 10.4358],
        "name": {
            "de": "Hafen von Berbera",
            "hu": "Berbera Kikötő",
            "ro": "Portul Berbera",
            "en": "Berbera Port"
        },
        "description": {
            "de": "Ein wichtiger Tiefseehafen am Golf von Aden, der als strategisches Tor für den Seehandel am Horn von Afrika dient.",
            "hu": "Fontos mélyvízi kikötő az Ádeni-öbölben, amely stratégiai kapuként szolgál a tengeri kereskedelem számára Afrika szarván.",
            "ro": "Un port de mare adâncime important pe Golful Aden, servind ca poartă strategică pentru comerțul maritim din Cornul Africii.",
            "en": "A major deep-water port on the Gulf of Aden, serving as a strategic gateway for maritime trade in the Horn of Africa."
        },
        "facts": {
            "de": ["Tiefseehafen am Golf von Aden.", "Wichtig für Exporte von Vieh."],
            "hu": ["Mélyvízi kikötő az Ádeni-öbölben.", "Fontos az állatállomány exportjában."],
            "ro": ["Port de mare adâncime la Golful Aden.", "Important pentru exporturile de animale."],
            "en": ["Deep-water port on the Gulf of Aden.", "Important for livestock exports."]
        }
    },
    {
        "id": "kismayo-port-economic-v2",
        "type": "port",
        "parent": "SO-JU",
        "coords": [42.5489, -0.3621],
        "name": {
            "de": "Hafen von Kismayo",
            "hu": "Kismayo Kikötő",
            "ro": "Portul Kismayo",
            "en": "Kismayo Port"
        },
        "description": {
            "de": "Bedeutender Handelshafen im Süden Somalias, der historisch eine große Rolle beim Export von landwirtschaftlichen Produkten spielte.",
            "hu": "Jelentős kereskedelmi kikötő Szomália déli részén, amely történelmileg fontos szerepet játszott a mezőgazdasági termékek exportjában.",
            "ro": "Port comercial important în sudul Somaliei, care a jucat istoric un rol major în exportul de produse agricole.",
            "en": "Significant commercial port in southern Somalia, historically playing a major role in the export of agricultural products."
        },
        "facts": {
            "de": ["Im Süden Somalias gelegen.", "Wichtig für Agrar-Exporte."],
            "hu": ["Szomália déli részén található.", "Fontos a mezőgazdasági exportban."],
            "ro": ["Situat în sudul Somaliei.", "Important pentru exporturile agricole."],
            "en": ["Located in southern Somalia.", "Important for agricultural exports."]
        }
    },
    {
        "id": "bosaso-port-economic-v2",
        "type": "port",
        "parent": "SO-BR",
        "coords": [49.1837, 11.2858],
        "name": {
            "de": "Hafen von Bosaso",
            "hu": "Bosaso Kikötő",
            "ro": "Portul Bosaso",
            "en": "Bosaso Port"
        },
        "description": {
            "de": "Ein wichtiges wirtschaftliches Zentrum in der Region Puntland, das stark vom Seehandel und der Fischereiindustrie profitiert.",
            "hu": "Fontos gazdasági központ Puntland régiójában, amely erősen profitál a tengeri kereskedelemből és a halászatból.",
            "ro": "Un centru economic important în regiunea Puntland, beneficiind mult de comerțul maritim și industria pescuitului.",
            "en": "An important economic center in the Puntland region, heavily benefiting from maritime trade and the fishing industry."
        },
        "facts": {
            "de": ["Haupt-Hafen von Puntland.", "Knotenpunkt für Daus (traditionelle Schiffe)."],
            "hu": ["Puntland fő kikötője.", "A dhow-k (hagyományos hajók) csomópontja."],
            "ro": ["Portul principal din Puntland.", "Centru pentru dhow-uri (nave tradiționale)."],
            "en": ["Main port of Puntland.", "Hub for dhows (traditional ships)."]
        }
    },
    {
        "id": "garacad-port-economic-v2",
        "type": "port",
        "parent": "SO-MU",
        "coords": [48.9181, 6.9429],
        "name": {
            "de": "Tiefseehafen Garacad",
            "hu": "Garacad Mélyvízi Kikötő",
            "ro": "Portul de mare adâncime Garacad",
            "en": "Garacad Deep Sea Port"
        },
        "description": {
            "de": "Ein moderner Tiefseehafen, der zur Förderung des Seehandels und der wirtschaftlichen Entwicklung in Zentral-Somalia errichtet wurde.",
            "hu": "Modern mélyvízi kikötő, amelyet a tengeri kereskedelem és Közép-Szomália gazdasági fejlődésének elősegítésére építettek.",
            "ro": "Un port modern de mare adâncime construit pentru a promova comerțul maritim și dezvoltarea economică în centrul Somaliei.",
            "en": "A modern deep-water port built to promote maritime trade and economic development in central Somalia."
        },
        "facts": {
            "de": ["Modernes Infrastrukturprojekt.", "Fördert den Handel in Zentral-Somalia."],
            "hu": ["Modern infrastrukturális projekt.", "Elősegíti a kereskedelmet Közép-Szomáliában."],
            "ro": ["Proiect modern de infrastructură.", "Promovează comerțul în centrul Somaliei."],
            "en": ["Modern infrastructure project.", "Promotes trade in central Somalia."]
        }
    },
    {
        "id": "hobyo-port-economic-v2",
        "type": "port",
        "parent": "SO-MU",
        "coords": [48.5283, 5.3523],
        "name": {
            "de": "Hafen von Hobyo",
            "hu": "Hobyo Kikötő",
            "ro": "Portul Hobyo",
            "en": "Hobyo Port"
        },
        "description": {
            "de": "Historischer und aufstrebender Handelshafen an der Küste von Mudug, der für zukünftige Entwicklungen im Seehandel vorgesehen ist.",
            "hu": "Történelmi és feltörekvő kereskedelmi kikötő Mudug partjainál, amelyet a tengeri kereskedelem jövőbeni fejlesztésére szánnak.",
            "ro": "Port comercial istoric și în curs de dezvoltare pe coasta Mudug, desemnat pentru viitoarele dezvoltări în comerțul maritim.",
            "en": "Historical and emerging commercial port on the coast of Mudug, designated for future developments in maritime trade."
        },
        "facts": {
            "de": ["Historische Hafenstadt.", "Potenzial für zukünftige Expansion."],
            "hu": ["Történelmi kikötőváros.", "Jelentős jövőbeli bővítési potenciál."],
            "ro": ["Oraș-port istoric.", "Potențial pentru expansiune viitoare."],
            "en": ["Historic port city.", "Potential for future expansion."]
        }
    },
    {
        "id": "eyl-port-economic-v2",
        "type": "port",
        "parent": "SO-NU",
        "coords": [49.8164, 7.9792],
        "name": {
            "de": "Hafen von Eyl",
            "hu": "Eyl Kikötő",
            "ro": "Portul Eyl",
            "en": "Eyl Port"
        },
        "description": {
            "de": "Ein Fischerei- und kleiner Handelshafen in Nugaal, der traditionell von lokalen Gemeinschaften für die Küstenwirtschaft genutzt wird.",
            "hu": "Egy halászati és kisebb kereskedelmi kikötő Nugaalban, amelyet hagyományosan a helyi közösségek használnak a part menti gazdaságban.",
            "ro": "Un port de pescuit și comercial mic din Nugaal, utilizat în mod tradițional de comunitățile locale pentru economia de coastă.",
            "en": "A fishing and small commercial port in Nugaal, traditionally used by local communities for the coastal economy."
        },
        "facts": {
            "de": ["Zentrum der lokalen Fischerei.", "Kleine Bootsanlagen."],
            "hu": ["A helyi halászat központja.", "Kisebb hajókikötőkkel."],
            "ro": ["Centrul pescuitului local.", "Facilități mici pentru bărci."],
            "en": ["Center of local fishing.", "Small boat facilities."]
        }
    },
    {
        "id": "baraawe-port-economic-v2",
        "type": "port",
        "parent": "SO-SH",
        "coords": [44.0292, 1.1147],
        "name": {
            "de": "Hafen von Baraawe",
            "hu": "Baraawe Kikötő",
            "ro": "Portul Baraawe",
            "en": "Baraawe Port"
        },
        "description": {
            "de": "Eine historische Hafenstadt mit laufenden Modernisierungsbemühungen, um als strategisches Logistikzentrum zu dienen.",
            "hu": "Történelmi kikötőváros folyamatban lévő korszerűsítési törekvésekkel, hogy stratégiai logisztikai központként szolgáljon.",
            "ro": "Un oraș-port istoric cu eforturi continue de modernizare pentru a servi ca centru logistic strategic.",
            "en": "A historic port city with ongoing modernization efforts to serve as a strategic logistics center."
        },
        "facts": {
            "de": ["Alte Küstenstadt.", "Fokus auf wirtschaftliche Erholung."],
            "hu": ["Régi tengerparti város.", "A gazdasági helyreállításra fókuszál."],
            "ro": ["Oraș de coastă antic.", "Se concentrează pe redresarea economică."],
            "en": ["Ancient coastal city.", "Focuses on economic recovery."]
        }
    },
    {
        "id": "somaliland-beverage-economic-v2",
        "type": "industry",
        "parent": "SO-WO",
        "coords": [44.0626, 9.5592],
        "name": {
            "de": "Somaliland Getränkeindustrie",
            "hu": "Somaliland Italipar",
            "ro": "Industria de băuturi Somaliland",
            "en": "Somaliland Beverage Industries"
        },
        "description": {
            "de": "Ein bedeutendes Getränkeunternehmen in Hargeisa, das abgefülltes Wasser und Erfrischungsgetränke für den lokalen Markt produziert.",
            "hu": "Egy jelentős italgyártó cég Hargeisában, amely palackozott vizet és üdítőitalokat gyárt a helyi piac számára.",
            "ro": "O companie importantă de băuturi în Hargeisa, producând apă îmbuteliată și băuturi răcoritoare pentru piața locală.",
            "en": "A major beverage company in Hargeisa producing bottled water and soft drinks for the local market."
        },
        "facts": {
            "de": ["Produziert Erfrischungsgetränke.", "Wichtiger Arbeitgeber in Hargeisa."],
            "hu": ["Üdítőitalokat állít elő.", "Fontos munkáltató Hargeisában."],
            "ro": ["Produce băuturi răcoritoare.", "Angajator important în Hargeisa."],
            "en": ["Produces soft drinks.", "Major employer in Hargeisa."]
        }
    },
    {
        "id": "berbera-cement-economic-v2",
        "type": "industry",
        "parent": "SO-WO",
        "coords": [45.0333, 10.4333],
        "name": {
            "de": "Zementfabrik Berbera",
            "hu": "Berbera Cementgyár",
            "ro": "Fabrica de Ciment Berbera",
            "en": "Berbera Cement Plant"
        },
        "description": {
            "de": "Eine industrielle Anlage zur Herstellung von Zement, die Baumaterialien für den Inlandsverbrauch und regionale Exportmärkte liefert.",
            "hu": "Cementgyártásra szolgáló ipari létesítmény, amely építőanyagokat szállít a belföldi fogyasztásra és a regionális exportpiacokra.",
            "ro": "O instalație industrială pentru producția de ciment, care furnizează materiale de construcții pentru consumul intern și piețele regionale de export.",
            "en": "An industrial facility for cement manufacturing, supplying building materials for domestic consumption and regional export markets."
        },
        "facts": {
            "de": ["Liefert Baumaterialien.", "Wichtig für die lokale Infrastruktur."],
            "hu": ["Építőanyagokat biztosít.", "Fontos a helyi infrastruktúra szempontjából."],
            "ro": ["Furnizează materiale de construcții.", "Important pentru infrastructura locală."],
            "en": ["Provides building materials.", "Important for local infrastructure."]
        }
    },
    {
        "id": "las-khorey-tuna-economic-v2",
        "type": "industry",
        "parent": "SO-SA",
        "coords": [48.1969, 11.1578],
        "name": {
            "de": "Fischfabrik Las Khorey",
            "hu": "Las Khorey Halgyár",
            "ro": "Fabrica de Pește Las Khorey",
            "en": "Las Khorey Tuna Factory"
        },
        "description": {
            "de": "Eine etablierte Fabrik, die sich auf die Verarbeitung und Konservierung von Thunfisch spezialisiert hat, um die marinen Ressourcen zu nutzen.",
            "hu": "Egy jól bevált gyár, amely a tonhal feldolgozására és konzerválására szakosodott a tengeri erőforrások hasznosítása érdekében.",
            "ro": "O fabrică stabilită specializată în procesarea și conservarea tonului pentru a utiliza resursele marine.",
            "en": "An established factory specializing in the processing and canning of tuna to utilize marine resources."
        },
        "facts": {
            "de": ["Verarbeitet lokal gefangenen Fisch.", "Traditionsreiche Anlage."],
            "hu": ["Helyben fogott halakat dolgoz fel.", "Nagy múltú létesítmény."],
            "ro": ["Procesează pește prins local.", "Instalație cu o lungă tradiție."],
            "en": ["Processes locally caught fish.", "Facility with a long tradition."]
        }
    },
    {
        "id": "hafun-salt-economic-v2",
        "type": "industry",
        "parent": "SO-BR",
        "coords": [51.2662, 10.4201],
        "name": {
            "de": "Salzfabrik Hafun",
            "hu": "Hafun Sógyár",
            "ro": "Fabrica de Sare Hafun",
            "en": "Hafun Salt Factory"
        },
        "description": {
            "de": "Eine historische industrielle Einrichtung zur Gewinnung und Verarbeitung von Meersalz an der Küste, mit enormem wirtschaftlichen Potenzial.",
            "hu": "Történelmi ipari létesítmény a tengeri só kinyerésére és feldolgozására a parton, hatalmas gazdasági potenciállal.",
            "ro": "O instalație industrială istorică pentru extragerea și procesarea sării de mare de pe coastă, cu un potențial economic enorm.",
            "en": "A historic industrial facility for the extraction and processing of sea salt on the coast, with enormous economic potential."
        },
        "facts": {
            "de": ["Gewinnt Meersalz.", "Befindet sich an der Halbinsel Hafun."],
            "hu": ["Tengeri sót termel ki.", "A Hafun-félszigeten található."],
            "ro": ["Extrage sare de mare.", "Situat pe peninsula Hafun."],
            "en": ["Extracts sea salt.", "Located on the Hafun Peninsula."]
        }
    },
    {
        "id": "juba-sugar-economic-v2",
        "type": "industry",
        "parent": "SO-JD",
        "coords": [42.7661, 0.4900],
        "name": {
            "de": "Juba Zuckerfabrik",
            "hu": "Juba Cukorgyár",
            "ro": "Fabrica de Zahăr Juba",
            "en": "Juba Sugar Estate"
        },
        "description": {
            "de": "Eine großflächige landwirtschaftliche und industrielle Anlage im Jubba-Tal zur Produktion und Raffination von Zucker.",
            "hu": "Nagyszabású mezőgazdasági és ipari létesítmény a Jubba-völgyben cukortermelésre és finomításra.",
            "ro": "O instalație agricolă și industrială la scară largă în Valea Jubba pentru producția și rafinarea zahărului.",
            "en": "A large-scale agricultural and industrial facility in the Jubba Valley for sugar production and refining."
        },
        "facts": {
            "de": ["Verarbeitet Zuckerrohr.", "Gelegen im fruchtbaren Flusstal."],
            "hu": ["Cukornádat dolgoz fel.", "A termékeny folyóvölgyben található."],
            "ro": ["Procesează trestie de zahăr.", "Situat în valea fertilă a râului."],
            "en": ["Processes sugar cane.", "Located in the fertile river valley."]
        }
    },
    {
        "id": "habo-tuna-economic-v2",
        "type": "industry",
        "parent": "SO-BR",
        "coords": [50.5401, 11.7824],
        "name": {
            "de": "Thunfischfabrik Habo",
            "hu": "Habo Tonhalgyár",
            "ro": "Fabrica de Ton Habo",
            "en": "Habo Tuna Factory"
        },
        "description": {
            "de": "Eine Fabrik in der Region Bari, die sich auf die Verpackung von Meeresfrüchten und insbesondere Thunfisch für den Export konzentriert.",
            "hu": "A Bari régióban található gyár, amely tenger gyümölcseire, különösen a tonhal exportra történő csomagolására összpontosít.",
            "ro": "O fabrică din regiunea Bari axată pe ambalarea fructelor de mare și în special a tonului pentru export.",
            "en": "A factory in the Bari region focused on packaging seafood and particularly tuna for export."
        },
        "facts": {
            "de": ["Fokus auf Exportprodukte.", "Bedeutend für die Fischereiwirtschaft."],
            "hu": ["Exporttermékekre fókuszál.", "Jelentős a halászati gazdaság számára."],
            "ro": ["Axat pe produse de export.", "Important pentru economia pescuitului."],
            "en": ["Focused on export products.", "Significant for the fishing economy."]
        }
    },
    {
        "id": "qandala-fish-economic-v2",
        "type": "industry",
        "parent": "SO-BR",
        "coords": [49.8736, 11.4727],
        "name": {
            "de": "Fischverarbeitung Qandala",
            "hu": "Qandala Halászat",
            "ro": "Procesarea Peștelui Qandala",
            "en": "Qandala Fish Processing"
        },
        "description": {
            "de": "Ein maritimes Verarbeitungszentrum an der Küste, das die reiche Artenvielfalt im Meer nutzt, um Konserven für den Handel herzustellen.",
            "hu": "Egy tengeri feldolgozó központ a parton, amely a tenger gazdag biodiverzitását használja fel a konzervgyártáshoz a kereskedelem számára.",
            "ro": "Un centru de procesare maritimă pe coastă, utilizând biodiversitatea bogată a mării pentru a produce conserve pentru comerț.",
            "en": "A maritime processing center on the coast, utilizing the rich marine biodiversity to produce canned goods for trade."
        },
        "facts": {
            "de": ["Produziert Fischkonserven.", "Lokale Arbeitsplätze."],
            "hu": ["Halkonzerveket gyárt.", "Helyi munkahelyeket biztosít."],
            "ro": ["Produce conserve de pește.", "Locuri de muncă locale."],
            "en": ["Produces canned fish.", "Provides local jobs."]
        }
    },
    {
        "id": "bosaso-tannery-economic-v2",
        "type": "industry",
        "parent": "SO-BR",
        "coords": [49.1840, 11.2840],
        "name": {
            "de": "Gerberei Bosaso",
            "hu": "Bosaso Cserzőüzem",
            "ro": "Tăbăcăria Bosaso",
            "en": "Bosaso Tannery"
        },
        "description": {
            "de": "Eine Anlage zur Lederherstellung, die rohe Tierhäute aus dem großen somalischen Viehbestand für Lederwaren verarbeitet.",
            "hu": "Bőrgyártó létesítmény, amely a nagy szomáliai állatállomány nyers állati bőreit dolgozza fel bőrárukhoz.",
            "ro": "O instalație de producție a pielăriei care prelucrează piei de animale brute din populația mare de vite somaleze pentru produse din piele.",
            "en": "A leather manufacturing facility processing raw animal hides from the large Somali livestock population for leather goods."
        },
        "facts": {
            "de": ["Verarbeitet Tierhäute.", "Wichtig für die Lederindustrie."],
            "hu": ["Állati bőröket dolgoz fel.", "Fontos a bőripar számára."],
            "ro": ["Procesează piei de animale.", "Important pentru industria pielăriei."],
            "en": ["Processes animal hides.", "Important for the leather industry."]
        }
    },
    {
        "id": "burao-tannery-economic-v2",
        "type": "industry",
        "parent": "SO-TO",
        "coords": [45.5651, 9.5250],
        "name": {
            "de": "Gerberei Burao",
            "hu": "Burao Cserzőüzem",
            "ro": "Tăbăcăria Burao",
            "en": "Burao Tannery"
        },
        "description": {
            "de": "Ein wichtiges Verarbeitungszentrum für Lederwaren, da Burao ein zentraler Umschlagplatz für Somalilands Viehhandel ist.",
            "hu": "Fontos feldolgozó központ a bőráruk számára, mivel Burao a szomáliföldi állatkereskedelem központi tranzitállomása.",
            "ro": "Un centru important de procesare a articolelor din piele, deoarece Burao este un hub central pentru comerțul cu animale din Somaliland.",
            "en": "An important processing center for leather goods, as Burao is a central transit hub for Somaliland's livestock trade."
        },
        "facts": {
            "de": ["Burao ist ein großer Viehmarkt.", "Produziert Halbfabrikate."],
            "hu": ["Burao nagy állatpiac.", "Félkész termékeket állít elő."],
            "ro": ["Burao este o mare piață de animale.", "Produce bunuri semifabricate."],
            "en": ["Burao is a major livestock market.", "Produces semi-finished goods."]
        }
    },
    {
        "id": "balcad-textile-economic-v2",
        "type": "industry",
        "parent": "SO-SD",
        "coords": [45.3956, 2.3615],
        "name": {
            "de": "Textilfabrik Balcad",
            "hu": "Balcad Textilgyár",
            "ro": "Fabrica de Textile Balcad",
            "en": "Balcad Textile Factory"
        },
        "description": {
            "de": "Eine historische Produktionsstätte, die einst Baumwolle verarbeitete und Kleidung herstellte, mit Bemühungen zur Wiederbelebung des Sektors.",
            "hu": "Történelmi gyártóüzem, amely egykor gyapotot dolgozott fel és ruházatot gyártott, az ágazat újjáélesztésére irányuló erőfeszítésekkel.",
            "ro": "O unitate de producție istorică care prelucra cândva bumbac și producea îmbrăcăminte, cu eforturi de revitalizare a sectorului.",
            "en": "A historic manufacturing plant that once processed cotton and produced clothing, with efforts to revive the sector."
        },
        "facts": {
            "de": ["Ehemalige staatliche Fabrik.", "Verarbeitete lokale Baumwolle."],
            "hu": ["Egykori állami gyár.", "Helyi gyapotot dolgozott fel."],
            "ro": ["Fostă fabrică de stat.", "A procesat bumbac local."],
            "en": ["Former state factory.", "Processed local cotton."]
        }
    },
    {
        "id": "kismayo-meat-economic-v2",
        "type": "industry",
        "parent": "SO-JU",
        "coords": [42.5470, -0.3600],
        "name": {
            "de": "Fleischfabrik Kismayo",
            "hu": "Kismayo Húsgyár",
            "ro": "Fabrica de Carne Kismayo",
            "en": "Kismayo Meat Factory"
        },
        "description": {
            "de": "Ein fleischverarbeitender Betrieb im Süden, der sich der Bereitstellung von hochwertigem Rind- und Kamelfleisch für Märkte widmet.",
            "hu": "Egy húsfeldolgozó üzem délen, amely kiváló minőségű marha- és tevekarajt biztosít a piacok számára.",
            "ro": "O fabrică de prelucrare a cărnii în sud, dedicată furnizării de carne de vită și cămilă de înaltă calitate pentru piețe.",
            "en": "A meat processing plant in the south dedicated to providing high-quality beef and camel meat for markets."
        },
        "facts": {
            "de": ["Verarbeitet Kamel- und Rindfleisch.", "Fördert die lokale Viehwirtschaft."],
            "hu": ["Teve- és marhahúst dolgoz fel.", "Támogatja a helyi állattenyésztést."],
            "ro": ["Procesează carne de cămilă și vită.", "Promovează industria zootehnică locală."],
            "en": ["Processes camel and beef.", "Promotes local livestock industry."]
        }
    },
    {
        "id": "mogadishu-milk-economic-v2",
        "type": "industry",
        "parent": "SO-BN",
        "coords": [45.3300, 2.0500],
        "name": {
            "de": "Milchfabrik Mogadischu",
            "hu": "Mogadishu Tejüzem",
            "ro": "Fabrica de Lapte Mogadishu",
            "en": "Mogadishu Milk Factory"
        },
        "description": {
            "de": "Ein modernes Molkereiunternehmen, das Milchprodukte pasteurisiert und verpackt, um die Hauptstadt und das Umland zu versorgen.",
            "hu": "Modern tejipari vállalat, amely tejtermékeket pasztőröz és csomagol a főváros és a környező területek ellátására.",
            "ro": "O companie modernă de lactate care pasteurizează și ambalează produse lactate pentru a aproviziona capitala și zonele înconjurătoare.",
            "en": "A modern dairy company that pasteurizes and packages dairy products to supply the capital and surrounding areas."
        },
        "facts": {
            "de": ["Produziert Trinkmilch und Joghurt.", "Wichtig für die Lebensmittelversorgung."],
            "hu": ["Ivótejet és joghurtot állít elő.", "Fontos az élelmiszerellátás szempontjából."],
            "ro": ["Produce lapte de băut și iaurt.", "Important pentru aprovizionarea cu alimente."],
            "en": ["Produces drinking milk and yogurt.", "Important for the food supply."]
        }
    },
    {
        "id": "borama-water-economic-v2",
        "type": "industry",
        "parent": "SO-AW",
        "coords": [43.1818, 9.9328],
        "name": {
            "de": "Mineralwasserabfüllung Borama",
            "hu": "Borama Ásványvíz Palackozó",
            "ro": "Îmbutelierea Apei Minerale Borama",
            "en": "Borama Mineral Water Plant"
        },
        "description": {
            "de": "Ein Werk zur Reinigung und Abfüllung von natürlichem Quellwasser in Borama, das sauberes Trinkwasser für die Region liefert.",
            "hu": "Egy boramai üzem természetes forrásvíz tisztítására és palackozására, amely tiszta ivóvizet szolgáltat a régiónak.",
            "ro": "O stație de purificare și îmbuteliere a apei de izvor natural din Borama, care furnizează apă potabilă curată pentru regiune.",
            "en": "A natural spring water purification and bottling plant in Borama, providing clean drinking water for the region."
        },
        "facts": {
            "de": ["Nutzt lokale Quellen.", "Verbessert den Zugang zu sauberem Wasser."],
            "hu": ["Helyi forrásokat használ.", "Javítja a tiszta vízhez való hozzáférést."],
            "ro": ["Folosește izvoare locale.", "Îmbunătățește accesul la apă curată."],
            "en": ["Uses local springs.", "Improves access to clean water."]
        }
    },
    {
        "id": "garowe-bottling-economic-v2",
        "type": "industry",
        "parent": "SO-NU",
        "coords": [48.5463, 8.4069],
        "name": {
            "de": "Getränkeabfüllung Garowe",
            "hu": "Garowe Palackozó Üzem",
            "ro": "Instalație de Îmbuteliere Garowe",
            "en": "Garowe Bottling Plant"
        },
        "description": {
            "de": "Eine industrielle Anlage, die Säfte und andere abgefüllte Getränke herstellt, um die städtische Bevölkerung in Puntland zu versorgen.",
            "hu": "Ipari létesítmény, amely gyümölcsleveket és más palackozott italokat állít elő a városi lakosság ellátására Puntlandban.",
            "ro": "O facilitate industrială care produce sucuri și alte băuturi îmbuteliate pentru a aproviziona populația urbană din Puntland.",
            "en": "An industrial facility producing juices and other bottled beverages to supply the urban population in Puntland."
        },
        "facts": {
            "de": ["Produktion von Säften.", "Teil des wachsenden Industriesektors."],
            "hu": ["Gyümölcslevek gyártása.", "A növekvő ipari szektor része."],
            "ro": ["Producția de sucuri.", "Parte a sectorului industrial în creștere."],
            "en": ["Production of juices.", "Part of the growing industrial sector."]
        }
    },
    {
        "id": "mogadishu-plastics-economic-v2",
        "type": "industry",
        "parent": "SO-BN",
        "coords": [45.3400, 2.0600],
        "name": {
            "de": "Kunststofffabrik Mogadischu",
            "hu": "Mogadishu Műanyaggyár",
            "ro": "Fabrica de Mase Plastice Mogadishu",
            "en": "Mogadishu Plastics Factory"
        },
        "description": {
            "de": "Ein Unternehmen, das Kunststoffrohre, Tanks und Haushaltswaren herstellt, die für den Wiederaufbau der Infrastruktur unerlässlich sind.",
            "hu": "Műanyag csöveket, tartályokat és háztartási cikkeket gyártó vállalat, amelyek elengedhetetlenek az infrastruktúra újjáépítéséhez.",
            "ro": "O companie care produce țevi de plastic, rezervoare și bunuri de uz casnic esențiale pentru reconstrucția infrastructurii.",
            "en": "A company manufacturing plastic pipes, tanks, and household goods essential for rebuilding infrastructure."
        },
        "facts": {
            "de": ["Stellt Wassertanks her.", "Wichtig für das Bauwesen."],
            "hu": ["Víztartályokat gyárt.", "Fontos az építőipar számára."],
            "ro": ["Produce rezervoare de apă.", "Important pentru construcții."],
            "en": ["Manufactures water tanks.", "Important for construction."]
        }
    },
    {
        "id": "hargeisa-flour-economic-v2",
        "type": "industry",
        "parent": "SO-WO",
        "coords": [44.0500, 9.5600],
        "name": {
            "de": "Mühle Hargeisa",
            "hu": "Hargeisa Malom",
            "ro": "Moara Hargeisa",
            "en": "Hargeisa Flour Mill"
        },
        "description": {
            "de": "Eine große Mühlenanlage, die importierten Weizen zu Mehl verarbeitet, um die Ernährungssicherheit der Region zu unterstützen.",
            "hu": "Nagy malomüzem, amely importált búzát dolgoz fel lisztté a régió élelmezésbiztonságának támogatása érdekében.",
            "ro": "O moară mare de făină care procesează grâu importat în făină pentru a susține securitatea alimentară a regiunii.",
            "en": "A large flour mill processing imported wheat into flour to support the region's food security."
        },
        "facts": {
            "de": ["Verarbeitet Weizen.", "Sichert die Mehlversorgung."],
            "hu": ["Búzát dolgoz fel.", "Biztosítja a lisztellátást."],
            "ro": ["Procesează grâu.", "Asigură aprovizionarea cu făină."],
            "en": ["Processes wheat.", "Ensures flour supply."]
        }
    },
    {
        "id": "berbera-oil-terminal-economic-v2",
        "type": "port",
        "parent": "SO-WO",
        "coords": [44.9910, 10.4360],
        "name": {
            "de": "Ölterminal Berbera",
            "hu": "Berbera Olajterminál",
            "ro": "Terminalul Petrolier Berbera",
            "en": "Berbera Oil Terminal"
        },
        "description": {
            "de": "Ein spezialisierter Hafenteil für den Import und die Lagerung von Erdölprodukten, der den Kraftstoffbedarf von Somaliland deckt.",
            "hu": "A kikötő egy speciális része kőolajtermékek behozatalára és tárolására, amely lefedi Szomáliföld üzemanyagszükségletét.",
            "ro": "O parte specializată a portului pentru importul și depozitarea produselor petroliere, acoperind necesarul de combustibil al Somalilandului.",
            "en": "A specialized port section for the import and storage of petroleum products, covering Somaliland's fuel needs."
        },
        "facts": {
            "de": ["Lagert Kraftstoffe.", "Befindet sich am Golf von Aden."],
            "hu": ["Üzemanyagokat tárol.", "Az Ádeni-öböl partján található."],
            "ro": ["Depozitează combustibili.", "Situat pe Golful Aden."],
            "en": ["Stores fuels.", "Located on the Gulf of Aden."]
        }
    },
    {
        "id": "bosaso-oil-terminal-economic-v2",
        "type": "port",
        "parent": "SO-BR",
        "coords": [49.1850, 11.2860],
        "name": {
            "de": "Ölterminal Bosaso",
            "hu": "Bosaso Olajterminál",
            "ro": "Terminalul Petrolier Bosaso",
            "en": "Bosaso Oil Terminal"
        },
        "description": {
            "de": "Wichtige maritime Infrastruktur zur Lagerung und Verteilung von Treibstoffen für den Binnenmarkt von Puntland und darüber hinaus.",
            "hu": "Fontos tengeri infrastruktúra az üzemanyagok tárolására és elosztására Puntland belső piacán és azon túl.",
            "ro": "Infrastructură maritimă importantă pentru depozitarea și distribuția combustibililor pentru piața internă din Puntland și nu numai.",
            "en": "Important maritime infrastructure for the storage and distribution of fuels for the domestic market in Puntland and beyond."
        },
        "facts": {
            "de": ["Verteilt Diesel und Benzin.", "Strategisch für die Energieversorgung."],
            "hu": ["Dízelt és benzint oszt el.", "Stratégiai fontosságú az energiaellátásban."],
            "ro": ["Distribuie motorină și benzină.", "Strategic pentru aprovizionarea cu energie."],
            "en": ["Distributes diesel and petrol.", "Strategic for energy supply."]
        }
    },
    {
        "id": "maydh-port-economic-v2",
        "type": "port",
        "parent": "SO-SA",
        "coords": [47.1130, 11.0040],
        "name": {
            "de": "Hafen von Maydh",
            "hu": "Maydh Kikötő",
            "ro": "Portul Maydh",
            "en": "Maydh Port"
        },
        "description": {
            "de": "Ein alter Küstenhafen mit modernen Erweiterungen zur Förderung der Fischerei und des lokalen Seehandels in der Sanaag-Region.",
            "hu": "Régi tengerparti kikötő modern bővítésekkel, amelyek célja a halászat és a helyi tengeri kereskedelem előmozdítása a Sanaag régióban.",
            "ro": "Un port de coastă antic cu extensii moderne pentru a promova pescuitul și comerțul maritim local în regiunea Sanaag.",
            "en": "An ancient coastal port with modern extensions to promote fishing and local maritime trade in the Sanaag region."
        },
        "facts": {
            "de": ["Fördert die Fischerei.", "Historischer Handelsposten."],
            "hu": ["Támogatja a halászatot.", "Történelmi kereskedelmi állomás."],
            "ro": ["Promovează pescuitul.", "Post comercial istoric."],
            "en": ["Promotes fishing.", "Historic trading post."]
        }
    },
    {
        "id": "mogadishu-soap-economic-v2",
        "type": "industry",
        "parent": "SO-BN",
        "coords": [45.3200, 2.0700],
        "name": {
            "de": "Seifenfabrik Mogadischu",
            "hu": "Mogadishu Szappangyár",
            "ro": "Fabrica de Săpun Mogadishu",
            "en": "Mogadishu Soap Factory"
        },
        "description": {
            "de": "Ein Betrieb für Konsumgüter, der Waschmittel und Seifen für den täglichen Bedarf der wachsenden städtischen Bevölkerung herstellt.",
            "hu": "Fogyasztási cikkeket gyártó üzem, amely mosószereket és szappanokat állít elő a növekvő városi lakosság napi szükségleteinek kielégítésére.",
            "ro": "O unitate de bunuri de larg consum care produce detergenți și săpunuri pentru nevoile zilnice ale populației urbane în creștere.",
            "en": "A consumer goods plant that produces detergents and soaps for the daily needs of the growing urban population."
        },
        "facts": {
            "de": ["Produziert Waschmittel.", "Wichtig für die Hygiene."],
            "hu": ["Mosószereket gyárt.", "Fontos a higiénia szempontjából."],
            "ro": ["Produce detergenți.", "Important pentru igienă."],
            "en": ["Produces detergents.", "Important for hygiene."]
        }
    },
    {
        "id": "eyl-fish-processing-economic-v2",
        "type": "industry",
        "parent": "SO-NU",
        "coords": [49.8200, 7.9800],
        "name": {
            "de": "Fischverarbeitung Eyl",
            "hu": "Eyl Halfeldolgozó",
            "ro": "Procesarea Peștelui Eyl",
            "en": "Eyl Fish Processing"
        },
        "description": {
            "de": "Ein Küstenwerk, das den frischen Fang lokaler Fischer verarbeitet, um Fischereierzeugnisse haltbar zu machen und zu vermarkten.",
            "hu": "Part menti üzem, amely feldolgozza a helyi halászok friss fogását, hogy a halászati termékek tartósítva legyenek és forgalmazhatók maradjanak.",
            "ro": "O fabrică de coastă care procesează capturile proaspete ale pescarilor locali pentru a conserva și comercializa produsele pescărești.",
            "en": "A coastal plant that processes the fresh catch of local fishermen to preserve and market fishery products."
        },
        "facts": {
            "de": ["Unterstützt lokale Fischer.", "Kühlhäuser für den Fang."],
            "hu": ["Támogatja a helyi halászokat.", "Hűtőházak a fogás számára."],
            "ro": ["Sprijină pescarii locali.", "Depozite frigorifice pentru captură."],
            "en": ["Supports local fishermen.", "Cold storage for the catch."]
        }
    },
    {
        "id": "hargeisa-packaging-economic-v2",
        "type": "industry",
        "parent": "SO-WO",
        "coords": [44.0600, 9.5500],
        "name": {
            "de": "Verpackungsfabrik Hargeisa",
            "hu": "Hargeisa Csomagolóüzem",
            "ro": "Fabrica de Ambalaje Hargeisa",
            "en": "Hargeisa Packaging Factory"
        },
        "description": {
            "de": "Ein Industriebetrieb, der Kartons und Verpackungsmaterialien für lokale Produzenten herstellt, um deren Waren für den Markt vorzubereiten.",
            "hu": "Ipari vállalat, amely kartondobozokat és csomagolóanyagokat gyárt a helyi termelők számára, hogy áruikat előkészítsék a piacra.",
            "ro": "O companie industrială care produce cutii de carton și materiale de ambalare pentru producătorii locali pentru a-și pregăti bunurile pentru piață.",
            "en": "An industrial company that produces cardboard boxes and packaging materials for local producers to prepare their goods for the market."
        },
        "facts": {
            "de": ["Produziert Kartonagen.", "Dient dem verarbeitenden Gewerbe."],
            "hu": ["Kartonokat gyárt.", "A feldolgozóipart szolgálja ki."],
            "ro": ["Produce cutii de carton.", "Servește industria prelucrătoare."],
            "en": ["Produces cardboard boxes.", "Serves the manufacturing industry."]
        }
    }
]

out_str = 'import type { POI } from "./poi";\n\nexport const poiExtraSomaliaEconomicV2: POI[] = [\n'

for i, poi in enumerate(pois):
    out_str += '  {\n'
    out_str += f'    id: "{poi["id"]}",\n'
    out_str += f'    type: "{poi["type"]}",\n'
    out_str += f'    parent: "{poi["parent"]}",\n'
    out_str += f'    coords: [{poi["coords"][0]}, {poi["coords"][1]}],\n'
    
    # Name
    out_str += '    name: {\n'
    out_str += f'      de: "{poi["name"]["de"]}",\n'
    out_str += f'      hu: "{poi["name"]["hu"]}",\n'
    out_str += f'      ro: "{poi["name"]["ro"]}",\n'
    out_str += f'      en: "{poi["name"]["en"]}"\n'
    out_str += '    },\n'
    
    # Description
    out_str += '    description: {\n'
    out_str += f'      de: "{poi["description"]["de"]}",\n'
    out_str += f'      hu: "{poi["description"]["hu"]}",\n'
    out_str += f'      ro: "{poi["description"]["ro"]}",\n'
    out_str += f'      en: "{poi["description"]["en"]}"\n'
    out_str += '    },\n'
    
    # Facts
    out_str += '    facts: {\n'
    out_str += f'      de: ["{poi["facts"]["de"][0]}", "{poi["facts"]["de"][1]}"],\n'
    out_str += f'      hu: ["{poi["facts"]["hu"][0]}", "{poi["facts"]["hu"][1]}"],\n'
    out_str += f'      ro: ["{poi["facts"]["ro"][0]}", "{poi["facts"]["ro"][1]}"],\n'
    out_str += f'      en: ["{poi["facts"]["en"][0]}", "{poi["facts"]["en"][1]}"]\n'
    out_str += '    }\n'
    
    if i < len(pois) - 1:
        out_str += '  },\n'
    else:
        out_str += '  }\n'

out_str += '];\n'

with open('lib/visualLab/data/poiExtraSomaliaEconomicV2.ts', 'w', encoding='utf-8') as f:
    f.write(out_str)

print(f"Generated {len(pois)} POIs.")
