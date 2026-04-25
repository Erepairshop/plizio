import type { POI } from "./poi";

export const poiExtraRo2: POI[] = [
  {
    id: "industry-petrobrazi-extra",
    type: "industry",
    parent: "RO-PH",
    coords: [25.91, 44.95],
    name: { de: "Raffinerie Petrobrazi", hu: "Petrobrazi Finomító", ro: "Rafinăria Petrobrazi", en: "Petrobrazi Refinery" },
    description: {
      de: "Eine der größten Erdölraffinerien Rumäniens, betrieben von OMV Petrom.",
      hu: "Románia egyik legnagyobb olajfinomítója, az OMV Petrom üzemelteti.",
      ro: "Una dintre cele mai mari rafinării de petrol din România, operată de OMV Petrom.",
      en: "One of Romania's largest oil refineries, operated by OMV Petrom."
    },
    facts: {
      de: ["Verarbeitet jährlich Millionen Tonnen Erdöl.", "Wichtiger Energiestandort."],
      hu: ["Évente milliós tonna kőolajat dolgoz fel.", "Fontos energiatermelési helyszín."],
      ro: ["Procesează milioane de tone de petrol anual.", "Sit energetic important."],
      en: ["Processes millions of tons of crude oil annually.", "Important energy facility."]
    }
  },
  {
    id: "port-constanta-south-extra",
    type: "port",
    parent: "RO-CT",
    coords: [28.63, 44.10],
    name: { de: "Hafen Constanța Süd", hu: "Konstancai déli kikötő", ro: "Portul Constanța Sud", en: "Port of Constanța South" },
    description: {
      de: "Der größte Hafen am Schwarzen Meer und ein wichtiger Knotenpunkt für den Handel.",
      hu: "A Fekete-tenger legnagyobb kikötője és fontos kereskedelmi csomópont.",
      ro: "Cel mai mare port de la Marea Neagră și un punct nodal important pentru comerț.",
      en: "The largest port on the Black Sea and a key hub for international trade."
    },
    facts: {
      de: ["Verbindet Europa mit dem Kaspischen Meer.", "Hat tiefe Fahrrinnen."],
      hu: ["Európát köti össze a Kaszpi-tengerrel.", "Mélyvízi csatornákkal rendelkezik."],
      ro: ["Conectează Europa cu Marea Caspică.", "Are dane de mare adâncime."],
      en: ["Connects Europe with the Caspian Sea.", "Features deep-water berths."]
    }
  },
  {
    id: "industry-dacia-mioveni-extra",
    type: "industry",
    parent: "RO-AG",
    coords: [24.93, 44.95],
    name: { de: "Dacia-Werk Mioveni", hu: "Dacia gyár Mioveni", ro: "Uzina Dacia Mioveni", en: "Dacia Plant Mioveni" },
    description: {
      de: "Das Herz der rumänischen Automobilindustrie, wo Dacia-Fahrzeuge produziert werden.",
      hu: "A román autóipar szíve, ahol a Dacia gépjárművek készülnek.",
      ro: "Inima industriei auto românești, unde sunt produse vehiculele Dacia.",
      en: "The heart of the Romanian automotive industry, where Dacia vehicles are produced."
    },
    facts: {
      de: ["Exportiert Autos in über 40 Länder.", "Größtes Unternehmen Rumäniens."],
      hu: ["Több mint 40 országba exportál autókat.", "Románia legnagyobb vállalata."],
      ro: ["Exportă mașini în peste 40 de țări.", "Cea mai mare companie din România."],
      en: ["Exports cars to over 40 countries.", "Romania's largest company by revenue."]
    }
  },
  {
    id: "industry-continental-timisoara-extra",
    type: "industry",
    parent: "RO-TM",
    coords: [21.27, 45.78],
    name: { de: "Continental Temeswar", hu: "Continental Temesvár", ro: "Continental Timișoara", en: "Continental Timișoara" },
    description: {
      de: "Ein bedeutendes Werk für Reifenproduktion und Automobilelektronik.",
      hu: "Jelentős gumiabroncs- és autóelektronikai gyár.",
      ro: "O fabrică importantă pentru producția de anvelope și electronică auto.",
      en: "A major plant for tire production and automotive electronics."
    },
    facts: {
      de: ["Einer der größten Arbeitgeber im Westen.", "Moderne Forschungszentren."],
      hu: ["A nyugati régió egyik legnagyobb munkaadója.", "Modern kutatóközpontok."],
      ro: ["Unul dintre cei mai mari angajatori din vest.", "Centre de cercetare moderne."],
      en: ["One of the largest employers in Western Romania.", "Features modern research centers."]
    }
  },
  {
    id: "industry-ford-craiova-extra",
    type: "industry",
    parent: "RO-DJ",
    coords: [23.85, 44.30],
    name: { de: "Ford Otosan Craiova", hu: "Ford Otosan Craiova", ro: "Ford Otosan Craiova", en: "Ford Otosan Craiova" },
    description: {
      de: "Eine moderne Automobilfabrik, die Ford-Modelle für den europäischen Markt produziert.",
      hu: "Modern autógyár, amely Ford modelleket gyárt az európai piacra.",
      ro: "O fabrică auto modernă care produce modele Ford pentru piața europeană.",
      en: "A modern automotive factory producing Ford models for the European market."
    },
    facts: {
      de: ["Produziert auch moderne Motoren.", "Hunderte Roboter im Einsatz."],
      hu: ["Modern motorokat is gyárt.", "Több száz robotot alkalmaznak."],
      ro: ["Produce și motoare moderne.", "Sute de roboți utilizați."],
      en: ["Also produces modern engines.", "Hundreds of robots in use."]
    }
  },
  {
    id: "industry-liberty-galati-extra",
    type: "industry",
    parent: "RO-GL",
    coords: [27.98, 45.43],
    name: { de: "Stahlwerk Liberty Galați", hu: "Liberty Galați acélmű", ro: "Combinatul Siderurgic Liberty Galați", en: "Liberty Galați Steelworks" },
    description: {
      de: "Das größte integrierte Stahlwerk Rumäniens, ehemals bekannt als Sidex.",
      hu: "Románia legnagyobb integrált acélműve, korábban Sidex néven ismert.",
      ro: "Cel mai mare combinat siderurgic integrat din România, fostul Sidex.",
      en: "The largest integrated steelworks in Romania, formerly known as Sidex."
    },
    facts: {
      de: ["Wichtiger Lieferant für den Bau.", "Liegt direkt an der Donau."],
      hu: ["Fontos beszállító az építőipar számára.", "Közvetlenül a Duna mentén fekszik."],
      ro: ["Furnizor important pentru construcții.", "Situat direct pe malul Dunării."],
      en: ["Major supplier for construction.", "Located directly on the Danube."]
    }
  },
  {
    id: "industry-aerostar-bacau-extra",
    type: "industry",
    parent: "RO-BC",
    coords: [26.91, 46.54],
    name: { de: "Aerostar Bacău", hu: "Aerostar Bákó", ro: "Aerostar Bacău", en: "Aerostar Bacău" },
    description: {
      de: "Ein führendes Unternehmen in der Luft- und Raumfahrt sowie Verteidigungsindustrie.",
      hu: "Vezető vállalat a légi- és űripar, valamint a védelmi ipar területén.",
      ro: "O companie de top în industria aerospațială și de apărare.",
      en: "A leading company in the aerospace and defense industry."
    },
    facts: {
      de: ["Wartet militärische Flugzeuge.", "Stellt Luftfahrtkomponenten her."],
      hu: ["Katonai repülőgépek karbantartását végzi.", "Repülőgép-alkatrészeket gyárt."],
      ro: ["Întreține avioane militare.", "Produce componente aviatice."],
      en: ["Maintains military aircraft.", "Produces aviation components."]
    }
  },
  {
    id: "industry-autoliv-brasov-extra",
    type: "industry",
    parent: "RO-BV",
    coords: [25.62, 45.67],
    name: { de: "Autoliv Kronstadt", hu: "Autoliv Brassó", ro: "Autoliv Brașov", en: "Autoliv Brașov" },
    description: {
      de: "Weltmarktführer für Sicherheitssysteme wie Airbags und Sicherheitsgurte.",
      hu: "Világpiacvezető biztonsági rendszerek, például légzsákok és övek gyártásában.",
      ro: "Lider mondial în sisteme de siguranță auto, precum airbag-uri și centuri.",
      en: "World leader in automotive safety systems, such as airbags and seatbelts."
    },
    facts: {
      de: ["Mehrere Werke in der Region.", "Fokus auf Insassenschutz."],
      hu: ["Több gyára van a régióban.", "Az utasvédelemre összpontosít."],
      ro: ["Mai multe fabrici în regiune.", "Accent pe protecția ocupanților."],
      en: ["Multiple plants in the region.", "Focus on occupant protection."]
    }
  },
  {
    id: "industry-mintia-power-extra",
    type: "industry",
    parent: "RO-HD",
    coords: [22.82, 45.92],
    name: { de: "Kraftwerk Mintia", hu: "Mintia erőmű", ro: "Termocentrala Mintia", en: "Mintia Power Plant" },
    description: {
      de: "Ein großes Wärmekraftwerk, das eine wichtige Rolle im nationalen Stromnetz spielt.",
      hu: "Nagy hőerőmű, amely fontos szerepet játszik a nemzeti villamosenergia-hálózatban.",
      ro: "O mare centrală termoelectrică, cu un rol important în rețeaua națională.",
      en: "A large thermal power plant playing a significant role in the national grid."
    },
    facts: {
      de: ["Wird modernisiert.", "Befeuert mit Kohle oder Gas."],
      hu: ["Modernizálás alatt áll.", "Szénnel vagy gázzal üzemel."],
      ro: ["În curs de modernizare.", "Funcționează pe cărbune sau gaz."],
      en: ["Undergoing modernization.", "Operates on coal or gas."]
    }
  },
  {
    id: "industry-resita-steel-extra",
    type: "industry",
    parent: "RO-CS",
    coords: [21.89, 45.29],
    name: { de: "Stahlwerk Reșița", hu: "Resicabányai acélmű", ro: "TMK Reșița", en: "Reșița Steelworks" },
    description: {
      de: "Eines der ältesten Industriezentren Rumäniens, spezialisiert auf Stahlprodukte.",
      hu: "Románia egyik legrégebbi ipari központja, acéltermékekre szakosodva.",
      ro: "Unul dintre cele mai vechi centre industriale, specializat în oțel.",
      en: "One of the oldest industrial centers in Romania, specialized in steel products."
    },
    facts: {
      de: ["Lange Tradition im Maschinenbau.", "Produziert Spezialstähle."],
      hu: ["Hosszú hagyomány a gépgyártásban.", "Speciális acélokat gyárt."],
      ro: ["Tradiție lungă în metalurgie.", "Produce oțeluri speciale."],
      en: ["Long tradition in metallurgy.", "Produces special steels."]
    }
  },
  {
    id: "industry-rovinari-extra",
    type: "industry",
    parent: "RO-GJ",
    coords: [23.15, 44.91],
    name: { de: "Kraftwerk Rovinari", hu: "Rovinari erőmű", ro: "Termocentrala Rovinari", en: "Rovinari Power Plant" },
    description: {
      de: "Ein bedeutendes Kohlekraftwerk im Schiltal (Valea Jiului) Kohlebecken.",
      hu: "Jelentős szénerőmű a Zsil-völgyi szénmedencében.",
      ro: "O centrală termoelectrică majoră situată în bazinul carbonifer Oltenia.",
      en: "A major coal-fired power plant located in the Oltenia coal basin."
    },
    facts: {
      de: ["Nutzt Braunkohle aus lokalen Minen.", "Große Kühltürme."],
      hu: ["Helyi bányákból származó lignitet használ.", "Hatalmas hűtőtornyok."],
      ro: ["Utilizează lignit din mine locale.", "Turnuri de răcire uriașe."],
      en: ["Uses lignite from local mines.", "Features massive cooling towers."]
    }
  },
  {
    id: "industry-oltchim-vl-extra",
    type: "industry",
    parent: "RO-VL",
    coords: [24.36, 45.04],
    name: { de: "Oltchim Râmnicu Vâlcea", hu: "Oltchim Râmnicu Vâlcea", ro: "Combinatul Oltchim", en: "Oltchim Chemical Plant" },
    description: {
      de: "Ein großer Chemiekomplex, der eine Vielzahl von industriellen Produkten herstellt.",
      hu: "Nagy vegyipari komplexum, amely számos ipari terméket állít elő.",
      ro: "Un mare combinat chimic care produce o gamă variată de produse industriale.",
      en: "A large chemical complex producing a wide variety of industrial products."
    },
    facts: {
      de: ["Stellt Polymere und PVC her.", "Wichtig für die chemische Industrie."],
      hu: ["Polimereket és PVC-t gyárt.", "Fontos a vegyipar számára."],
      ro: ["Produce polimeri și PVC.", "Important pentru industria chimică."],
      en: ["Produces polymers and PVC.", "Crucial for the chemical industry."]
    }
  },
  {
    id: "industry-tenaris-zalau-extra",
    type: "industry",
    parent: "RO-SJ",
    coords: [23.08, 47.19],
    name: { de: "TenarisSilcotub Zalău", hu: "TenarisSilcotub Zilah", ro: "TenarisSilcotub Zalău", en: "TenarisSilcotub Zalău" },
    description: {
      de: "Führender Hersteller von nahtlosen Stahlrohren für die Energieindustrie.",
      hu: "Vezető varrat nélküli acélcsőgyártó az energiaipar számára.",
      ro: "Producător de top de țevi din oțel fără sudură pentru industria energetică.",
      en: "Leading manufacturer of seamless steel pipes for the energy industry."
    },
    facts: {
      de: ["Produkte werden weltweit exportiert.", "Moderner Industriestandort."],
      hu: ["Termékeit világszerte exportálják.", "Modern ipari létesítmény."],
      ro: ["Produsele sunt exportate global.", "Situl industrial este modern."],
      en: ["Products are exported globally.", "Modern industrial site."]
    }
  },
  {
    id: "industry-draexlmaier-sm-extra",
    type: "industry",
    parent: "RO-SM",
    coords: [22.89, 47.78],
    name: { de: "Dräxlmaier Sathmar", hu: "Dräxlmaier Szatmárnémeti", ro: "Dräxlmaier Satu Mare", en: "Dräxlmaier Satu Mare" },
    description: {
      de: "Ein bedeutender Zulieferer für die Premium-Automobilindustrie.",
      hu: "A prémium autóipar jelentős beszállítója.",
      ro: "Un furnizor important pentru industria auto premium.",
      en: "A major supplier for the premium automotive industry."
    },
    facts: {
      de: ["Produziert Bordnetzsysteme.", "Einer der größten Arbeitgeber in SM."],
      hu: ["Kábelkötegeket gyárt.", "Szatmár egyik legnagyobb munkaadója."],
      ro: ["Produce sisteme de cablaj.", "Unul dintre cei mai mari angajatori din SM."],
      en: ["Produces wiring systems.", "One of the largest employers in SM."]
    }
  },
  {
    id: "industry-faist-oradea-extra",
    type: "industry",
    parent: "RO-BH",
    coords: [21.93, 47.07],
    name: { de: "Faist Mekatronic Großwardein", hu: "Faist Mekatronic Nagyvárad", ro: "Faist Mekatronic Oradea", en: "Faist Mekatronic Oradea" },
    description: {
      de: "Spezialisiert auf Präzisionskomponenten für Telekommunikation und Automobilbau.",
      hu: "Precíziós alkatrészekre szakosodott a távközlés és autóipar számára.",
      ro: "Specializată în componente de precizie pentru telecomunicații și auto.",
      en: "Specialized in precision components for telecommunications and automotive."
    },
    facts: {
      de: ["Hochmoderne Druckguss-Technologie.", "Infrastruktur im Industriepark."],
      hu: ["Ultramodern öntészeti technológia.", "Ipari parki infrastruktúra."],
      ro: ["Tehnologie modernă de turnare.", "Infrastructură în parcul industrial."],
      en: ["State-of-the-art casting technology.", "Located in the industrial park."]
    }
  },
  {
    id: "industry-astra-vagoane-arad-extra",
    type: "industry",
    parent: "RO-AR",
    coords: [21.32, 46.19],
    name: { de: "Astra Vagoane Arad", hu: "Astra Vagoane Arad", ro: "Astra Vagoane Călători Arad", en: "Astra Vagoane Arad" },
    description: {
      de: "Bekannt für die Herstellung von Eisenbahnwaggons und Straßenbahnen.",
      hu: "Vasúti kocsik és villamosok gyártásáról ismert.",
      ro: "Cunoscută pentru producția de vagoane de cale ferată și tramvaie.",
      en: "Known for the production of railway carriages and trams."
    },
    facts: {
      de: ["Baut die Imperio-Straßenbahnen.", "Lange Geschichte seit 1891."],
      hu: ["Az Imperio villamosokat építi.", "Hosszú múlt, 1891 óta."],
      ro: ["Construiește tramvaiele Imperio.", "Istorie lungă din 1891."],
      en: ["Builds the Imperio trams.", "Long history since 1891."]
    }
  },
  {
    id: "industry-star-assembly-sebes-extra",
    type: "industry",
    parent: "RO-AB",
    coords: [23.58, 45.95],
    name: { de: "Star Assembly Mühlbach", hu: "Star Assembly Szászsebes", ro: "Star Assembly Sebeș", en: "Star Assembly Sebeș" },
    description: {
      de: "Ein Tochterunternehmen von Mercedes-Benz, das Getriebe für Autos montiert.",
      hu: "A Mercedes-Benz leányvállalata, amely autósebességváltókat szerel össze.",
      ro: "O filială Mercedes-Benz care asamblează cutii de viteze pentru mașini.",
      en: "A Mercedes-Benz subsidiary that assembles gearboxes for cars."
    },
    facts: {
      de: ["Produziert 9G-Tronic Getriebe.", "Investition in Milliardenhöhe."],
      hu: ["9G-Tronic váltókat gyárt.", "Milliárdos beruházás."],
      ro: ["Produce cutii 9G-Tronic.", "Investiție de miliarde."],
      en: ["Produces 9G-Tronic gearboxes.", "Billion-euro investment."]
    }
  },
  {
    id: "industry-continental-sibiu-extra",
    type: "industry",
    parent: "RO-SB",
    coords: [24.13, 45.79],
    name: { de: "Continental Hermannstadt", hu: "Continental Nagyszeben", ro: "Continental Sibiu", en: "Continental Sibiu" },
    description: {
      de: "Ein Zentrum für Forschung, Entwicklung und Produktion von Automobilelektronik.",
      hu: "Autóelektronikai kutatási, fejlesztési és gyártási központ.",
      ro: "Un centru de cercetare, dezvoltare și producție pentru electronica auto.",
      en: "A center for research, development, and production of automotive electronics."
    },
    facts: {
      de: ["Entwickelt autonomes Fahren.", "Großes F&E-Zentrum."],
      hu: ["Autonóm vezetést fejleszt.", "Nagy K+F központ."],
      ro: ["Dezvoltă conducerea autonomă.", "Centru mare de R&D."],
      en: ["Develops autonomous driving.", "Large R&D center."]
    }
  },
  {
    id: "industry-bosch-cluj-extra",
    type: "industry",
    parent: "RO-CJ",
    coords: [23.78, 46.86],
    name: { de: "Bosch-Werk Jucu", hu: "Bosch Jucu gyár", ro: "Fabrica Bosch Jucu", en: "Bosch Jucu Plant" },
    description: {
      de: "Eine moderne Fabrik für elektronische Steuergeräte in der Nähe von Klausenburg.",
      hu: "Modern elektronikus vezérlőegységeket gyártó üzem Kolozsvár közelében.",
      ro: "O fabrică modernă de unități electronice de control lângă Cluj.",
      en: "A modern factory for electronic control units near Cluj."
    },
    facts: {
      de: ["Liegt im Industriepark Tetarom III.", "Wichtig für E-Mobilität."],
      hu: ["A Tetarom III ipari parkban található.", "Fontos az e-mobilitás számára."],
      ro: ["Situată în parcul Tetarom III.", "Importantă pentru e-mobilitate."],
      en: ["Located in Tetarom III park.", "Crucial for e-mobility."]
    }
  },
  {
    id: "industry-azomures-ms-extra",
    type: "industry",
    parent: "RO-MS",
    coords: [24.51, 46.52],
    name: { de: "Azomureș Neumarkt", hu: "Azomureș Marosvásárhely", ro: "Azomureș Târgu Mureș", en: "Azomureș Târgu Mureș" },
    description: {
      de: "Der größte Hersteller von Düngemitteln für die Landwirtschaft in Rumänien.",
      hu: "Románia legnagyobb mezőgazdasági műtrágyagyártója.",
      ro: "Cel mai mare producător de îngrășăminte pentru agricultură din România.",
      en: "The largest producer of fertilizers for agriculture in Romania."
    },
    facts: {
      de: ["Wichtiger Akteur im Agrarsektor.", "Große Industrieanlagen."],
      hu: ["Fontos szereplő az agrárágazatban.", "Hatalmas ipari létesítmények."],
      ro: ["Jucător cheie în sectorul agrar.", "Instalații industriale mari."],
      en: ["Key player in the agrar sector.", "Massive industrial facilities."]
    }
  },
  {
    id: "industry-leoni-bn-extra",
    type: "industry",
    parent: "RO-BN",
    coords: [24.49, 47.14],
    name: { de: "Leoni Bistritz", hu: "Leoni Beszterce", ro: "Leoni Bistrița", en: "Leoni Bistrița" },
    description: {
      de: "Spezialisiert auf die Herstellung von Kabelbäumen für globale Automobilhersteller.",
      hu: "Globális autógyártók számára gyártott kábelkötegekre szakosodott.",
      ro: "Specializată în producția de cablaje pentru marii producători auto.",
      en: "Specialized in wiring systems for major global car manufacturers."
    },
    facts: {
      de: ["Exportiert in die ganze EU.", "Tausende Mitarbeiter vor Ort."],
      hu: ["Az egész EU-ba exportál.", "Több ezer helyi munkavállaló."],
      ro: ["Exportă în întreaga UE.", "Mii de angajați la nivel local."],
      en: ["Exports throughout the EU.", "Thousands of local employees."]
    }
  },
  {
    id: "industry-egger-sv-extra",
    type: "industry",
    parent: "RO-SV",
    coords: [25.92, 47.85],
    name: { de: "Egger Rădăuți", hu: "Egger Radóc", ro: "Egger Rădăuți", en: "Egger Rădăuți" },
    description: {
      de: "Ein großes Holzverarbeitungswerk, das Spanplatten und Laminate herstellt.",
      hu: "Nagy fafeldolgozó üzem, amely forgácslapokat és laminált lemezeket gyárt.",
      ro: "O mare fabrică de prelucrare a lemnului, producând plăci și laminate.",
      en: "A large wood processing plant producing chipboards and laminates."
    },
    facts: {
      de: ["Modernste Recycling-Anlagen.", "Nutzt lokale Holzressourcen."],
      hu: ["Legmodernebb újrahasznosító üzemek.", "Helyi faforrásokat használ."],
      ro: ["Instalații de reciclare moderne.", "Utilizează resurse locale de lemn."],
      en: ["State-of-the-art recycling facilities.", "Uses local wood resources."]
    }
  },
  {
    id: "industry-rifil-nt-extra",
    type: "industry",
    parent: "RO-NT",
    coords: [26.44, 46.85],
    name: { de: "Rifil Săvinești", hu: "Rifil Săvinești", ro: "Rifil Săvinești", en: "Rifil Săvinești" },
    description: {
      de: "Einer der traditionsreichsten Textilhersteller in der Region Moldau.",
      hu: "A moldvai régió egyik legpatinásabb textilgyártója.",
      ro: "Unul dintre cei mai longevivi producători de textile din regiune.",
      en: "One of the longest-running textile manufacturers in the region."
    },
    facts: {
      de: ["Produziert synthetische Garne.", "Partnerschaft mit italienischen Firmen."],
      hu: ["Szintetikus fonalakat gyárt.", "Partnerség olasz cégekkel."],
      ro: ["Produce fire sintetice.", "Parteneriat cu firme italiene."],
      en: ["Produces synthetic yarns.", "Partnership with Italian firms."]
    }
  },
  {
    id: "industry-delphi-is-extra",
    type: "industry",
    parent: "RO-IS",
    coords: [27.61, 47.16],
    name: { de: "Delphi Jassy", hu: "Delphi Jászvásár", ro: "Delphi Iași", en: "Delphi Iași" },
    description: {
      de: "Ein Werk für Diesel-Einspritzsysteme und moderne Automobilkomponenten.",
      hu: "Dízelbefecskendező rendszerek és modern autóalkatrészek gyára.",
      ro: "O fabrică pentru sisteme de injecție diesel și componente auto.",
      en: "A factory for diesel injection systems and automotive components."
    },
    facts: {
      de: ["Liegt im Industriepark Miroslava.", "Hochpräzise Fertigung."],
      hu: ["A Miroslava ipari parkban található.", "Nagy pontosságú gyártás."],
      ro: ["Situată în parcul Miroslava.", "Producție de înaltă precizie."],
      en: ["Located in Miroslava park.", "High-precision manufacturing."]
    }
  },
  {
    id: "industry-rulmenti-vs-extra",
    type: "industry",
    parent: "RO-VS",
    coords: [27.72, 46.22],
    name: { de: "Wälzlager Bârlad", hu: "Barládi csapágygyár", ro: "Rulmenți Bârlad", en: "Rulmenți Bârlad" },
    description: {
      de: "Ein bedeutender Hersteller von Wälzlagern für verschiedene Industriezweige.",
      hu: "Jelentős csapágygyártó különböző iparágak számára.",
      ro: "Un producător important de rulmenți pentru diverse industrii.",
      en: "A major manufacturer of bearings for various industrial sectors."
    },
    facts: {
      de: ["Exportiert unter der Marke URB.", "Gegründet in den 1950ern."],
      hu: ["URB márkanév alatt exportál.", "Az 1950-es években alapították."],
      ro: ["Exportă sub marca URB.", "Fondată în anii 1950."],
      en: ["Exports under the URB brand.", "Founded in the 1950s."]
    }
  },
  {
    id: "industry-damen-galati-extra",
    type: "industry",
    parent: "RO-GL",
    coords: [28.05, 45.43],
    name: { de: "Damen Werft Galatz", hu: "Damen hajógyár Galac", ro: "Șantierul Naval Damen Galați", en: "Damen Shipyard Galați" },
    description: {
      de: "Eine der größten und modernsten Werften an der Donau.",
      hu: "A Duna egyik legnagyobb és legmodernebb hajógyára.",
      ro: "Unul dintre cele mai mari și moderne șantiere navale de pe Dunăre.",
      en: "One of the largest and most modern shipyards on the Danube."
    },
    facts: {
      de: ["Baut Spezialschiffe und Yachten.", "Gehört zur niederländischen Damen-Gruppe."],
      hu: ["Speciális hajókat és jachtokat épít.", "A holland Damen-csoport része."],
      ro: ["Construiește nave speciale și iahturi.", "Face parte din grupul olandez Damen."],
      en: ["Builds specialized ships and yachts.", "Part of the Dutch Damen Group."]
    }
  },
  {
    id: "industry-vard-braila-extra",
    type: "industry",
    parent: "RO-BR",
    coords: [27.95, 45.25],
    name: { de: "Vard Werft Brăila", hu: "Vard hajógyár Brăila", ro: "Șantierul Naval Vard Brăila", en: "Vard Shipyard Brăila" },
    description: {
      de: "Ein wichtiger Standort für den Schiffbau in Rumänien.",
      hu: "Fontos hajógyártási helyszín Romániában.",
      ro: "Un sit important pentru construcția de nave în România.",
      en: "A significant site for shipbuilding in Romania."
    },
    facts: {
      de: ["Spezialisiert auf Versorgungsschiffe.", "Teil der Fincantieri-Gruppe."],
      hu: ["Ellátóhajókra szakosodott.", "A Fincantieri-csoport része."],
      ro: ["Specializat în nave de aprovizionare.", "Parte a grupului Fincantieri."],
      en: ["Specialized in offshore vessels.", "Part of the Fincantieri Group."]
    }
  },
  {
    id: "industry-vard-tulcea-extra",
    type: "industry",
    parent: "RO-TL",
    coords: [28.78, 45.18],
    name: { de: "Vard Werft Tulcea", hu: "Vard hajógyár Tulcsa", ro: "Șantierul Naval Vard Tulcea", en: "Vard Shipyard Tulcea" },
    description: {
      de: "Bedeutende Werft am Tor zum Donaudelta.",
      hu: "Jelentős hajógyár a Duna-delta kapujában.",
      ro: "Șantier naval important la poarta Deltei Dunării.",
      en: "Major shipyard at the gateway to the Danube Delta."
    },
    facts: {
      de: ["Baut komplexe Schiffsrümpfe.", "Wichtiger Arbeitgeber in Tulcea."],
      hu: ["Összetett hajótesteket épít.", "Tulcsa fontos munkaadója."],
      ro: ["Construiește cocă de navă complexă.", "Angajator major în Tulcea."],
      en: ["Builds complex ship hulls.", "Major employer in Tulcea."]
    }
  },
  {
    id: "industry-midia-navodari-extra",
    type: "industry",
    parent: "RO-CT",
    coords: [28.62, 44.34],
    name: { de: "Raffinerie Petromidia", hu: "Petromidia Finomító", ro: "Rafinăria Petromidia Năvodari", en: "Petromidia Refinery" },
    description: {
      de: "Die größte Erdölraffinerie in Rumänien und eine der modernsten in Osteuropa.",
      hu: "Románia legnagyobb kőolajfinomítója és Kelet-Európa egyik legmodernebbje.",
      ro: "Cea mai mare rafinărie de petrol din România și una dintre cele mai moderne.",
      en: "The largest oil refinery in Romania and one of the most modern in Eastern Europe."
    },
    facts: {
      de: ["Liegt direkt am Meer.", "Produziert Euro-5 Kraftstoffe."],
      hu: ["Közvetlenül a tengerparton fekszik.", "Euro-5-ös üzemanyagokat gyárt."],
      ro: ["Situată direct la malul mării.", "Produce combustibili Euro 5."],
      en: ["Located directly on the seashore.", "Produces Euro 5 fuels."]
    }
  },
  {
    id: "industry-policolor-b-extra",
    type: "industry",
    parent: "RO-B",
    coords: [26.18, 44.41],
    name: { de: "Policolor Bukarest", hu: "Policolor Bukarest", ro: "Policolor București", en: "Policolor Bucharest" },
    description: {
      de: "Traditionsreiches Unternehmen für Lacke und Farben in der Hauptstadt.",
      hu: "Hagyományos lakk- és festékgyártó vállalat a fővárosban.",
      ro: "Companie cu tradiție în producția de lacuri și vopsele din capitală.",
      en: "Company with a long tradition in paint and varnish production in the capital."
    },
    facts: {
      de: ["Bekannte Marke in Rumänien.", "Innovationszentrum für Beschichtungen."],
      hu: ["Jól ismert márka Romániában.", "Innovációs központ a bevonatok számára."],
      ro: ["Marcă bine cunoscută în România.", "Centru de inovare pentru vopsele."],
      en: ["Well-known brand in Romania.", "Innovation center for coatings."]
    }
  },
  {
    id: "industry-pmi-otopeni-extra",
    type: "industry",
    parent: "RO-IF",
    coords: [26.07, 44.54],
    name: { de: "Philip Morris Otopeni", hu: "Philip Morris Otopeni", ro: "Philip Morris Otopeni", en: "Philip Morris Otopeni" },
    description: {
      de: "Ein großes Produktionszentrum für Tabakwaren und innovative Rauchprodukte.",
      hu: "Dohánytermékek és innovatív dohányzási termékek nagy gyártóközpontja.",
      ro: "Un mare centru de producție pentru tutun și produse inovatoare.",
      en: "A large production center for tobacco and innovative smoking products."
    },
    facts: {
      de: ["Exportiert in viele Länder.", "Stellt rauchfreie Produkte her."],
      hu: ["Számos országba exportál.", "Füstmentes termékeket gyárt."],
      ro: ["Exportă în numeroase țări.", "Produce produse fără fum."],
      en: ["Exports to many countries.", "Produces smoke-free products."]
    }
  },
  {
    id: "industry-arctic-gaesti-extra",
    type: "industry",
    parent: "RO-DB",
    coords: [25.32, 44.72],
    name: { de: "Arctic Găești", hu: "Arctic Găești", ro: "Arctic Găești", en: "Arctic Găești" },
    description: {
      de: "Das größte Werk für Haushaltsgeräte (Kühlschränke) in Kontinentaleuropa.",
      hu: "Kontinentális Európa legnagyobb háztartási gépgyára (hűtőszekrények).",
      ro: "Cea mai mare fabrică de aparate frigorifice din Europa continentală.",
      en: "The largest household appliance factory (refrigerators) in Continental Europe."
    },
    facts: {
      de: ["Gehört zur Arçelik-Gruppe.", "Millionen Geräte pro Jahr."],
      hu: ["Az Arçelik-csoport része.", "Évente több millió készülék."],
      ro: ["Face parte din grupul Arçelik.", "Milioane de unități pe an."],
      en: ["Part of the Arçelik Group.", "Millions of units per year."]
    }
  },
  {
    id: "industry-koyo-tr-extra",
    type: "industry",
    parent: "RO-TR",
    coords: [25.33, 43.97],
    name: { de: "Koyo Alexandria", hu: "Koyo Alexandria", ro: "Koyo România Alexandria", en: "Koyo Romania Alexandria" },
    description: {
      de: "Spezialisierte Fabrik für hochwertige Wälzlager.",
      hu: "Kiváló minőségű csapágyak gyártására szakosodott üzem.",
      ro: "Fabrică specializată în rulmenți de înaltă calitate.",
      en: "Factory specialized in high-quality bearings."
    },
    facts: {
      de: ["Japanische Investition (JTEKT).", "Wichtig für den Export."],
      hu: ["Japán beruházás (JTEKT).", "Fontos az export szempontjából."],
      ro: ["Investiție japoneză (JTEKT).", "Importantă pentru export."],
      en: ["Japanese investment (JTEKT).", "Key for exports."]
    }
  },
  {
    id: "industry-shipyard-gr-extra",
    type: "industry",
    parent: "RO-GR",
    coords: [25.95, 43.88],
    name: { de: "Werft Giurgiu", hu: "Gyurgyevói hajógyár", ro: "Șantierul Naval Giurgiu", en: "Giurgiu Shipyard" },
    description: {
      de: "Hafenwerft an der Donau mit Fokus auf Binnenschiffe.",
      hu: "Dunai hajógyár, belvízi hajókra összpontosítva.",
      ro: "Șantier naval la Dunăre, axat pe nave fluviale.",
      en: "Danube shipyard focused on river vessels."
    },
    facts: {
      de: ["Baut Schuten und Prahme.", "Strategische Lage an der Grenze."],
      hu: ["Bárkákat és uszályokat épít.", "Stratégiai elhelyezkedés a határon."],
      ro: ["Construiește barje și pontoane.", "Poziție strategică la frontieră."],
      en: ["Builds barges and pontoons.", "Strategic border location."]
    }
  },
  {
    id: "industry-tenaris-cl-extra",
    type: "industry",
    parent: "RO-CL",
    coords: [27.34, 44.20],
    name: { de: "Tenaris Călărași", hu: "Tenaris Călărași", ro: "TenarisDonasid Călărași", en: "TenarisDonasid Călărași" },
    description: {
      de: "Ein Stahlwerk, das Rundstahl für die Rohrproduktion herstellt.",
      hu: "Acélmű, amely köracélt gyárt csőgyártáshoz.",
      ro: "O oțelărie care produce oțel rotund pentru producția de țevi.",
      en: "A steel plant producing round steel for pipe manufacturing."
    },
    facts: {
      de: ["Nutzt Elektrolichtbogenofen.", "Direkter Zugang zur Donau."],
      hu: ["Elektromos ívkemencét használ.", "Közvetlen hozzáférés a Dunához."],
      ro: ["Utilizează cuptor cu arc electric.", "Acces direct la Dunăre."],
      en: ["Uses electric arc furnace.", "Direct access to the Danube."]
    }
  },
  {
    id: "industry-combinat-slobozia-extra",
    type: "industry",
    parent: "RO-IL",
    coords: [27.38, 44.57],
    name: { de: "Chemiewerk Slobozia", hu: "Sloboziai vegyikombinát", ro: "Combinatul Chimic Slobozia", en: "Slobozia Chemical Plant" },
    description: {
      de: "Produzent von Düngemitteln im Herzen der Bărăgan-Steppe.",
      hu: "Műtrágyagyártó a Bărăgan-síkság szívében.",
      ro: "Producător de îngrășăminte din inima Bărăganului.",
      en: "Fertilizer producer in the heart of the Bărăgan plain."
    },
    facts: {
      de: ["Unterstützt die lokale Landwirtschaft.", "Produziert Ammoniak."],
      hu: ["Támogatja a helyi mezőgazdaságot.", "Ammóniát gyárt."],
      ro: ["Susține agricultura locală.", "Produce amoniac."],
      en: ["Supports local agriculture.", "Produces ammonia."]
    }
  },
  {
    id: "industry-ursus-bz-extra",
    type: "industry",
    parent: "RO-BZ",
    coords: [26.83, 45.14],
    name: { de: "Ursus Brauerei Buzău", hu: "Ursus sörgyár Buzău", ro: "Fabrica de Bere Ursus Buzău", en: "Ursus Brewery Buzău" },
    description: {
      de: "Eine der größten und modernsten Brauereien des Landes.",
      hu: "Az ország egyik legnagyobb és legmodernebb sörgyára.",
      ro: "Una dintre cele mai mari și moderne fabrici de bere din țară.",
      en: "One of the largest and most modern breweries in the country."
    },
    facts: {
      de: ["Produziert bekannte Biermarken.", "Hohe ökologische Standards."],
      hu: ["Ismert sörmárkákat gyárt.", "Magas ökológiai standardok."],
      ro: ["Produce mărci de bere celebre.", "Standarde ecologice ridicate."],
      en: ["Produces famous beer brands.", "High environmental standards."]
    }
  },
  {
    id: "industry-pandora-vn-extra",
    type: "industry",
    parent: "RO-VN",
    coords: [27.19, 45.71],
    name: { de: "Pandora Prod Focșani", hu: "Pandora Prod Foksány", ro: "Pandora Prod Focșani", en: "Pandora Prod Focșani" },
    description: {
      de: "Ein führender Bekleidungshersteller, der für internationale Luxusmarken arbeitet.",
      hu: "Vezető ruhagyártó, amely nemzetközi luxusmárkáknak dolgozik.",
      ro: "Un producător de top de îmbrăcăminte pentru mărci internaționale de lux.",
      en: "A leading garment manufacturer working for international luxury brands."
    },
    facts: {
      de: ["Hochwertige Textilproduktion.", "Moderner Maschinenpark."],
      hu: ["Kiváló minőségű textilgyártás.", "Modern géppark."],
      ro: ["Producție textilă de calitate.", "Parc de utilaje modern."],
      en: ["High-quality textile production.", "Modern machinery."]
    }
  },
  {
    id: "industry-chimcomplex-bc-extra",
    type: "industry",
    parent: "RO-BC",
    coords: [26.74, 46.25],
    name: { de: "Chimcomplex Borzești", hu: "Chimcomplex Borzești", ro: "Chimcomplex Borzești", en: "Chimcomplex Borzești" },
    description: {
      de: "Ein strategischer Chemiekomplex in der Region Moldau.",
      hu: "Stratégiai vegyipari komplexum a moldvai régióban.",
      ro: "Un combinat chimic strategic din regiunea Moldovei.",
      en: "A strategic chemical complex in the Moldavia region."
    },
    facts: {
      de: ["Größter Exporteur der Region.", "Fokus auf anorganische Chemie."],
      hu: ["A régió legnagyobb exportőre.", "A szervetlen kémiára összpontosít."],
      ro: ["Cel mai mare exportator regional.", "Accent pe chimia anorganică."],
      en: ["Largest regional exporter.", "Focus on inorganic chemistry."]
    }
  },
  {
    id: "industry-formens-bt-extra",
    type: "industry",
    parent: "RO-BT",
    coords: [26.65, 47.74],
    name: { de: "Formens Botoșani", hu: "Formens Botosán", ro: "Formens Botoșani", en: "Formens Botoșani" },
    description: {
      de: "Spezialisiert auf die Herstellung von Herrenanzügen höchster Qualität.",
      hu: "Kiváló minőségű férfiöltönyök gyártására szakosodott.",
      ro: "Specializată în producția de costume bărbătești de înaltă calitate.",
      en: "Specialized in the production of high-quality men's suits."
    },
    facts: {
      de: ["Nutzt moderne CAD-Systeme.", "Arbeitet für exklusive Marken."],
      hu: ["Modern CAD-rendszereket használ.", "Exkluzív márkáknak dolgozik."],
      ro: ["Utilizează sisteme CAD moderne.", "Lucrează pentru mărci exclusive."],
      en: ["Uses modern CAD systems.", "Works for exclusive brands."]
    }
  },
  {
    id: "industry-walmark-cv-extra",
    type: "industry",
    parent: "RO-CV",
    coords: [25.79, 45.86],
    name: { de: "Walmark Sankt Georgen", hu: "Walmark Sepsiszentgyörgy", ro: "Walmark Sfântu Gheorghe", en: "Walmark Sfântu Gheorghe" },
    description: {
      de: "Ein Produktionsstandort für Nahrungsergänzungsmittel und Gesundheitsprodukte.",
      hu: "Étrend-kiegészítők és egészségügyi termékek gyártóbázisa.",
      ro: "Un sit de producție pentru suplimente alimentare și produse de sănătate.",
      en: "A production site for dietary supplements and health products."
    },
    facts: {
      de: ["Teil einer internationalen Gruppe.", "Pharmazeutische Standards."],
      hu: ["Nemzetközi csoport része.", "Gyógyszerészeti szabványok."],
      ro: ["Parte dintr-un grup internațional.", "Standarde farmaceutice."],
      en: ["Part of an international group.", "Pharmaceutical standards."]
    }
  },
  {
    id: "industry-romaqua-hr-extra",
    type: "industry",
    parent: "RO-HR",
    coords: [25.51, 47.05],
    name: { de: "Romaqua Group Borsec", hu: "Romaqua Group Borszék", ro: "Romaqua Group Borsec", en: "Romaqua Group Borsec" },
    description: {
      de: "Marktführer für Mineralwasser, bekannt durch die Quelle in Borsec.",
      hu: "Ásványvíz-piacvezető, a borszéki forrásáról ismert.",
      ro: "Lider de piață pentru apă minerală, celebru pentru izvorul Borsec.",
      en: "Market leader for mineral water, famous for the Borsec spring."
    },
    facts: {
      de: ["Mehrfach ausgezeichnetes Wasser.", "Tradition seit 1806."],
      hu: ["Többszörösen díjazott víz.", "Hagyomány 1806 óta."],
      ro: ["Apă premiată internațional.", "Tradiție din anul 1806."],
      en: ["Internationally awarded water.", "Tradition since 1806."]
    }
  },
  {
    id: "industry-severnav-mh-extra",
    type: "industry",
    parent: "RO-MH",
    coords: [22.63, 44.62],
    name: { de: "Severnav Turnu Severin", hu: "Severnav Szörényvár", ro: "Șantierul Naval Severnav", en: "Severnav Shipyard" },
    description: {
      de: "Hafenwerft an der Donau, die Schiffe für den europäischen Markt baut.",
      hu: "Dunai hajógyár, amely az európai piacra épít hajókat.",
      ro: "Șantier naval la Dunăre care construiește nave pentru piața europeană.",
      en: "Danube shipyard building vessels for the European market."
    },
    facts: {
      de: ["Baut Gastanker und Chemieschiffe.", "Strategische Lage am Eisernen Tor."],
      hu: ["Gázszállítókat és vegyszerszállítókat épít.", "Stratégiai hely az Al-Dunán."],
      ro: ["Construiește tancuri de gaz și chimice.", "Poziție strategică la Porțile de Fier."],
      en: ["Builds gas and chemical tankers.", "Strategic location at Iron Gates."]
    }
  },
  {
    id: "industry-alro-ot-extra",
    type: "industry",
    parent: "RO-OT",
    coords: [24.38, 44.44],
    name: { de: "Alro Slatina", hu: "Alro Slatina", ro: "Alro Slatina", en: "Alro Slatina" },
    description: {
      de: "Der größte Aluminiumproduzent in Südosteuropa.",
      hu: "Délkelet-Európa legnagyobb alumíniumgyártója.",
      ro: "Cel mai mare producător de aluminiu din Europa de Sud-Est.",
      en: "The largest aluminum producer in Southeastern Europe."
    },
    facts: {
      de: ["Exportiert weltweit.", "Verbraucht viel elektrische Energie."],
      hu: ["Világszerte exportál.", "Jelentős elektromos energiát fogyaszt."],
      ro: ["Exportă în întreaga lume.", "Consumă multă energie electrică."],
      en: ["Exports worldwide.", "Significant consumer of electricity."]
    }
  },
  {
    id: "industry-brazi-power-extra",
    type: "industry",
    parent: "RO-PH",
    coords: [25.92, 44.94],
    name: { de: "Kraftwerk Brazi", hu: "Brazi erőmű", ro: "Centrala Electrică Brazi", en: "Brazi Power Plant" },
    description: {
      de: "Ein hocheffizientes Gas- und Dampfturbinenkraftwerk.",
      hu: "Nagy hatékonyságú gáz- és gőzturbinás erőmű.",
      ro: "O centrală electrică cu ciclu combinat de înaltă eficiență.",
      en: "A high-efficiency combined cycle gas turbine power plant."
    },
    facts: {
      de: ["Wichtig für die Netzstabilität.", "Betrieben von OMV Petrom."],
      hu: ["Fontos a hálózat stabilitása szempontjából.", "Az OMV Petrom üzemelteti."],
      ro: ["Crucială pentru stabilitatea rețelei.", "Operată de OMV Petrom."],
      en: ["Crucial for grid stability.", "Operated by OMV Petrom."]
    }
  },
  {
    id: "industry-ploiesti-west-park-extra",
    type: "industry",
    parent: "RO-PH",
    coords: [25.85, 44.92],
    name: { de: "Ploiești West Park", hu: "Ploiești West Park", ro: "Ploiești West Park", en: "Ploiești West Park" },
    description: {
      de: "Ein großer Industriepark mit vielen internationalen Logistik- und Produktionsfirmen.",
      hu: "Nagy ipari park számos nemzetközi logisztikai és gyártó céggel.",
      ro: "Un mare parc industrial cu numeroase firme internaționale de logistică.",
      en: "A large industrial park hosting many international logistics and production firms."
    },
    facts: {
      de: ["Gute Verkehrsanbindung.", "Einer der größten in RO."],
      hu: ["Kiváló közlekedési kapcsolatok.", "Románia egyik legnagyobb parkja."],
      ro: ["Acces facil la transport.", "Unul dintre cele mai mari din RO."],
      en: ["Excellent transport links.", "One of the largest in RO."]
    }
  },
  {
    id: "industry-emerson-cluj-extra",
    type: "industry",
    parent: "RO-CJ",
    coords: [23.63, 46.81],
    name: { de: "Emerson Klausenburg", hu: "Emerson Kolozsvár", ro: "Emerson Cluj", en: "Emerson Cluj" },
    description: {
      de: "Ein Campus für Hochtechnologie, Ingenieurwesen und Shared Services.",
      hu: "Csúcstechnológiai, mérnöki és megosztott szolgáltatási központ.",
      ro: "Un campus pentru înaltă tehnologie, inginerie și servicii.",
      en: "A campus for high technology, engineering, and shared services."
    },
    facts: {
      de: ["Tausende hochqualifizierte Jobs.", "Fokus auf Industrieautomatisierung."],
      hu: ["Több ezer magasan képzett munkahely.", "Fókusz az ipari automatizáláson."],
      ro: ["Mii de locuri de muncă calificate.", "Accent pe automatizări industriale."],
      en: ["Thousands of highly skilled jobs.", "Focus on industrial automation."]
    }
  },
  {
    id: "industry-flextronics-tm-extra",
    type: "industry",
    parent: "RO-TM",
    coords: [21.21, 45.76],
    name: { de: "Flex Temeswar", hu: "Flex Temesvár", ro: "Flex Timișoara", en: "Flex Timișoara" },
    description: {
      de: "Ein bedeutender Standort für Elektronikfertigungsdienstleistungen (EMS).",
      hu: "Az elektronikai gyártási szolgáltatások (EMS) jelentős központja.",
      ro: "Un sit important pentru servicii de producție electronică (EMS).",
      en: "A significant site for electronics manufacturing services (EMS)."
    },
    facts: {
      de: ["Baut medizinische und automotive Geräte.", "Große Reinräume."],
      hu: ["Orvosi és autóipari eszközöket gyárt.", "Hatalmas tisztaterek."],
      ro: ["Produce echipamente medicale și auto.", "Săli curate de mari dimensiuni."],
      en: ["Builds medical and automotive devices.", "Large cleanroom facilities."]
    }
  },
  {
    id: "industry-imb-b-extra",
    type: "industry",
    parent: "RO-B",
    coords: [26.15, 44.45],
    name: { de: "Industriepark Bukarest", hu: "Bukaresti ipari park", ro: "Parcul Industrial Metav", en: "Metav Industrial Park" },
    description: {
      de: "Ein wichtiges Gewerbegebiet in der Nähe des Flughafens für Leichtindustrie.",
      hu: "Fontos kereskedelmi övezet a repülőtér közelében a könnyűipar számára.",
      ro: "O zonă comercială importantă lângă aeroport pentru industria ușoară.",
      en: "An important commercial zone near the airport for light industry."
    },
    facts: {
      de: ["Sitz vieler KMUs.", "Gute logistische Lage."],
      hu: ["Sok kkv székhelye.", "Kiváló logisztikai elhelyezkedés."],
      ro: ["Sediul multor IMM-uri.", "Poziție logistică excelentă."],
      en: ["Hosts many SMEs.", "Excellent logistical location."]
    }
  },
  {
    id: "industry-aramis-mm-extra",
    type: "industry",
    parent: "RO-MM",
    coords: [23.55, 47.64],
    name: { de: "Aramis Gruppe Frauenbach", hu: "Aramis Group Nagybánya", ro: "Aramis Group Baia Mare", en: "Aramis Group Baia Mare" },
    description: {
      de: "Der größte rumänische Möbelhersteller, spezialisiert auf Polstermöbel.",
      hu: "A legnagyobb román bútorgyártó, kárpitozott bútorokra szakosodva.",
      ro: "Cel mai mare producător român de mobilă, specializat în tapițerie.",
      en: "The largest Romanian furniture manufacturer, specialized in upholstery."
    },
    facts: {
      de: ["Liefert weltweit an IKEA.", "Moderner Maschinenpark."],
      hu: ["Világszerte szállít az IKEA-nak.", "Modern géppark."],
      ro: ["Furnizează global pentru IKEA.", "Parc de utilaje modern."],
      en: ["Supplies IKEA worldwide.", "Modern machinery."]
    }
  },
  {
    id: "animal-habitat-baneasa-zoo-extra",
    type: "animal-habitat",
    parent: "RO-B",
    coords: [26.10, 44.52],
    name: { de: "Zoo Bukarest", hu: "Bukaresti Állatkert", ro: "Grădina Zoologică București", en: "Bucharest Zoo" },
    description: {
      de: "Der größte Zoo Rumäniens, gelegen im Băneasa-Wald.",
      hu: "Románia legnagyobb állatkertje, a Băneasa-erdőben található.",
      ro: "Cea mai mare grădină zoologică din România, situată în pădurea Băneasa.",
      en: "The largest zoo in Romania, located in the Băneasa Forest."
    },
    facts: {
      de: ["Beherbergt exotische Tierarten.", "Gegründet 1955."],
      hu: ["Egzotikus állatfajoknak ad otthont.", "1955-ben alapították."],
      ro: ["Adăpostește specii exotice.", "Fondată în anul 1955."],
      en: ["Home to exotic animal species.", "Founded in 1955."]
    }
  },
  {
    id: "animal-habitat-libearty-zarnesti-extra",
    type: "animal-habitat",
    parent: "RO-BV",
    coords: [25.32, 45.57],
    name: { de: "Bärenreservat Zărnești", hu: "Zernyesti medverezervátum", ro: "Sanctuarul de urși Libearty Zărnești", en: "Libearty Bear Sanctuary Zărnești" },
    description: {
      de: "Das größte Braunbärenschutzzentrum der Welt.",
      hu: "A világ legnagyobb barna medve védelmi központja.",
      ro: "Cel mai mare sanctuar de urși bruni din lume.",
      en: "The largest brown bear sanctuary in the world."
    },
    facts: {
      de: ["Rettet Bären aus Gefangenschaft.", "Über 60 Hektar Wald."],
      hu: ["Fogságban tartott medvéket ment meg.", "Több mint 60 hektár erdő."],
      ro: ["Salvează urși din captivitate.", "Peste 60 de hectare de pădure."],
      en: ["Rescues bears from captivity.", "Over 60 hectares of forest."]
    }
  },
  {
    id: "animal-habitat-sibiu-zoo-extra",
    type: "animal-habitat",
    parent: "RO-SB",
    coords: [24.13, 45.76],
    name: { de: "Zoo Hermannstadt", hu: "Nagyszebeni Állatkert", ro: "Grădina Zoologică Sibiu", en: "Sibiu Zoo" },
    description: {
      de: "Der älteste Zoo Rumäniens, malerisch im Dumbrava-Wald gelegen.",
      hu: "Románia legrégebbi állatkertje, festői környezetben a Dumbrava-erdőben.",
      ro: "Cea mai veche grădină zoologică din țară, în pădurea Dumbrava.",
      en: "The oldest zoo in Romania, picturesquely located in the Dumbrava Forest."
    },
    facts: {
      de: ["Hat eine berühmte Eiche (600 Jahre).", "Gegründet 1929."],
      hu: ["Egy híres 600 éves tölgyfája van.", "1929-ben alapították."],
      ro: ["Are un stejar de 600 de ani.", "Fondată în anul 1929."],
      en: ["Features a 600-year-old oak tree.", "Founded in 1929."]
    }
  },
  {
    id: "animal-habitat-dolphinarium-ct-extra",
    type: "animal-habitat",
    parent: "RO-CT",
    coords: [28.64, 44.21],
    name: { de: "Delfinarium Konstanza", hu: "Konstancai Delfinárium", ro: "Delfinariul Constanța", en: "Constanța Dolphinarium" },
    description: {
      de: "Eine der beliebtesten Attraktionen an der Schwarzmeerküste.",
      hu: "A fekete-tengeri partvidék egyik legnépszerűbb látványossága.",
      ro: "Una dintre cele mai populare atracții de pe litoralul românesc.",
      en: "One of the most popular attractions on the Romanian Black Sea coast."
    },
    facts: {
      de: ["Bietet Delfinshows an.", "Teil des Museumskomplexes."],
      hu: ["Delfinshow-kat kínál.", "A múzeumi komplexum része."],
      ro: ["Oferă spectacole cu delfini.", "Parte a complexului muzeal."],
      en: ["Offers dolphin shows.", "Part of the museum complex."]
    }
  },
  {
    id: "animal-habitat-oradea-zoo-extra",
    type: "animal-habitat",
    parent: "RO-BH",
    coords: [21.92, 47.05],
    name: { de: "Zoo Großwardein", hu: "Nagyváradi Állatkert", ro: "Grădina Zoologică Oradea", en: "Oradea Zoo" },
    description: {
      de: "Ein moderner Zoo, der sich auf den Schutz bedrohter Arten konzentriert.",
      hu: "Modern állatkert, amely a veszélyeztetett fajok védelmére összpontosít.",
      ro: "O grădină zoologică modernă axată pe protejarea speciilor.",
      en: "A modern zoo focused on the protection of endangered species."
    },
    facts: {
      de: ["Wurde kürzlich renoviert.", "Viele interaktive Bereiche."],
      hu: ["Nemrégiben felújították.", "Számos interaktív terület."],
      ro: ["Recent renovată.", "Multe zone interactive."],
      en: ["Recently renovated.", "Features many interactive areas."]
    }
  },
  {
    id: "kid-landmark-adrenalin-park-cj-extra",
    type: "kid-landmark",
    parent: "RO-CJ",
    coords: [23.58, 46.72],
    name: { de: "Adrenalin Park Klausenburg", hu: "Adrenalin Park Kolozsvár", ro: "Adrenalin Park Cluj", en: "Adrenalin Park Cluj" },
    description: {
      de: "Ein Abenteuerpark im Wald bei Făget für die ganze Familie.",
      hu: "Kalandpark a Bükk-erdőben (Făget) az egész család számára.",
      ro: "Un parc de aventură în pădurea Făget pentru întreaga familie.",
      en: "An adventure park in the Făget Forest for the whole family."
    },
    facts: {
      de: ["Verschiedene Schwierigkeitsgrade.", "Sicherheitsausrüstung inklusive."],
      hu: ["Különböző nehézségi szintek.", "Biztonsági felszerelés biztosított."],
      ro: ["Diverse grade de dificultate.", "Echipament de siguranță inclus."],
      en: ["Various difficulty levels.", "Safety equipment included."]
    }
  },
  {
    id: "animal-habitat-ms-zoo-extra",
    type: "animal-habitat",
    parent: "RO-MS",
    coords: [24.59, 46.55],
    name: { de: "Zoo Neumarkt", hu: "Marosvásárhelyi Állatkert", ro: "Grădina Zoologică Târgu Mureș", en: "Târgu Mureș Zoo" },
    description: {
      de: "Gelegen auf dem 'Sommerberg', bietet er viel Platz für die Tiere.",
      hu: "A Somostetőn található, tágas helyet biztosít az állatoknak.",
      ro: "Situată pe Platoul Cornești, oferă spații generoase.",
      en: "Located on the Cornești Plateau, it offers spacious enclosures."
    },
    facts: {
      de: ["Größter Zoo in Siebenbürgen.", "Beliebtes Ausflugsziel."],
      hu: ["Erdély legnagyobb állatkertje.", "Népszerű kirándulóhely."],
      ro: ["Cea mai mare grădină din Ardeal.", "Destinație populară de weekend."],
      en: ["Largest zoo in Transylvania.", "Popular weekend destination."]
    }
  },
  {
    id: "animal-habitat-ceala-extra",
    type: "animal-habitat",
    parent: "RO-AR",
    coords: [21.25, 46.16],
    name: { de: "Naturpark Ceala", hu: "Csálai Natúrpark", ro: "Parcul Natural Ceala", en: "Ceala Nature Park" },
    description: {
      de: "Ein geschütztes Gebiet am Rande von Arad, ideal für Naturbeobachtungen.",
      hu: "Arad szélén található védett terület, ideális természetmegfigyelésre.",
      ro: "O zonă protejată la marginea Aradului, ideală pentru observații.",
      en: "A protected area on the outskirts of Arad, ideal for nature watching."
    },
    facts: {
      de: ["Teil des Mureș-Auen-Parks.", "Vogelbeobachtungspunkte."],
      hu: ["A Maros-ártér park része.", "Madármegfigyelő pontok."],
      ro: ["Parte din Lunca Mureșului.", "Puncte de observare a păsărilor."],
      en: ["Part of the Mureș Floodplain.", "Features bird watching points."]
    }
  },
  {
    id: "animal-habitat-tm-zoo-extra",
    type: "animal-habitat",
    parent: "RO-TM",
    coords: [21.27, 45.78],
    name: { de: "Zoo Temeswar", hu: "Temesvári Állatkert", ro: "Grădina Zoologică Timișoara", en: "Timișoara Zoo" },
    description: {
      de: "Ein entspannter Ort im Jagdwald (Pădurea Verde) der Stadt.",
      hu: "Kellemes hely a városi Vadászerdőben (Pădurea Verde).",
      ro: "Un loc relaxant în Pădurea Verde a orașului.",
      en: "A relaxing place located in the city's Green Forest (Pădurea Verde)."
    },
    facts: {
      de: ["Kleine, aber feine Anlage.", "Leicht mit dem Bus erreichbar."],
      hu: ["Kicsi, de szép létesítmény.", "Busszal könnyen megközelíthető."],
      ro: ["Grădină mică, dar cochetă.", "Acces ușor cu transportul public."],
      en: ["Small but charming facility.", "Easy access by public transport."]
    }
  },
  {
    id: "kid-landmark-dino-parc-bv-extra",
    type: "kid-landmark",
    parent: "RO-BV",
    coords: [25.46, 45.59],
    name: { de: "Dino Parc Râșnov", hu: "Dino Parc Barcarozsnyó", ro: "Dino Parc Râșnov", en: "Dino Parc Râșnov" },
    description: {
      de: "Ein Freilichtmuseum mit lebensgroßen Dinosaurier-Modellen.",
      hu: "Szabadtéri múzeum életnagyságú dinoszaurusz modellekkel.",
      ro: "Un muzeu în aer liber cu modele de dinozauri în mărime naturală.",
      en: "An open-air museum featuring life-sized dinosaur models."
    },
    facts: {
      de: ["Über 100 Dinosaurier-Exponate.", "Abenteuerspielplätze."],
      hu: ["Több mint 100 dinoszaurusz kiállítva.", "Kalandjátszóterek."],
      ro: ["Peste 100 de dinozauri expuși.", "Locuri de joacă cu aventuri."],
      en: ["Over 100 dinosaurs on display.", "Features adventure playgrounds."]
    }
  },
  {
    id: "kid-landmark-edenland-extra",
    type: "kid-landmark",
    parent: "RO-IF",
    coords: [26.12, 44.62],
    name: { de: "Edenland Park", hu: "Edenland Park", ro: "Edenland Park Balotești", en: "Edenland Park" },
    description: {
      de: "Einer der größten Abenteuerparks in der Nähe von Bukarest.",
      hu: "Bukarest környékének egyik legnagyobb kalandparkja.",
      ro: "Unul dintre cele mai mari parcuri de aventură lângă București.",
      en: "One of the largest adventure parks near Bucharest."
    },
    facts: {
      de: ["Baumhaus-Unterkünfte.", "Bogenschießen und Paintball."],
      hu: ["Lombház szállások.", "Íjászat és paintball."],
      ro: ["Cazare în căsuțe în copaci.", "Tir cu arcul și paintball."],
      en: ["Treehouse accommodations.", "Archery and paintball available."]
    }
  },
  {
    id: "animal-habitat-targoviste-zoo-extra",
    type: "animal-habitat",
    parent: "RO-DB",
    coords: [25.46, 44.93],
    name: { de: "Zoo Târgoviște", hu: "Târgoviștei Állatkert", ro: "Grădina Zoologică Târgoviște", en: "Târgoviște Zoo" },
    description: {
      de: "Gelegen im Chindia-Park, bietet er eine Vielfalt an heimischen und exotischen Tieren.",
      hu: "A Chindia parkban található, hazai és egzotikus állatokat mutat be.",
      ro: "Situată în parcul Chindia, oferă o varietate de animale.",
      en: "Located in Chindia Park, it features a variety of domestic and exotic animals."
    },
    facts: {
      de: ["Nahe dem Chindia-Turm.", "Schattige Wanderwege."],
      hu: ["A Chindia-torony közelében.", "Árnyékos sétautak."],
      ro: ["Lângă Turnul Chindiei.", "Alei umbrite pentru plimbare."],
      en: ["Near the Chindia Tower.", "Shady paths for walking."]
    }
  },
  {
    id: "animal-habitat-pitesti-zoo-extra",
    type: "animal-habitat",
    parent: "RO-AG",
    coords: [24.87, 44.85],
    name: { de: "Zoo Pitești", hu: "Pitești Állatkert", ro: "Grădina Zoologică Pitești", en: "Pitești Zoo" },
    description: {
      de: "Ein kleiner, aber liebevoll gestalteter Zoo im Trivale-Wald.",
      hu: "Kicsi, de kedves állatkert a Trivale-erdőben.",
      ro: "O grădină zoologică mică, dar îngrijită, în pădurea Trivale.",
      en: "A small but well-kept zoo located in the Trivale Forest."
    },
    facts: {
      de: ["Ideal für Familien mit Kindern.", "Inmitten der Natur."],
      hu: ["Ideális gyermekes családoknak.", "A természet lágy ölén."],
      ro: ["Ideală pentru familii cu copii.", "În mijlocul naturii."],
      en: ["Ideal for families with children.", "Surrounded by nature."]
    }
  },
  {
    id: "animal-habitat-drobeta-zoo-extra",
    type: "animal-habitat",
    parent: "RO-MH",
    coords: [22.65, 44.63],
    name: { de: "Zoo Severin", hu: "Szörényvári Állatkert", ro: "Grădina Zoologică Drobeta", en: "Drobeta Zoo" },
    description: {
      de: "Ein ruhiger Ort, um Tiere am Ufer der Donau zu beobachten.",
      hu: "Nyugodt hely az állatok megfigyelésére a Duna partján.",
      ro: "Un loc liniștit pentru a observa animalele pe malul Dunării.",
      en: "A quiet place to observe animals on the banks of the Danube."
    },
    facts: {
      de: ["Kleine lokale Sammlung.", "Schöner Blick auf den Fluss."],
      hu: ["Kis helyi gyűjtemény.", "Szép kilátás a folyóra."],
      ro: ["Colecție locală mică.", "Vedere frumoasă spre fluviu."],
      en: ["Small local collection.", "Nice view of the river."]
    }
  },
  {
    id: "animal-habitat-craiova-zoo-extra",
    type: "animal-habitat",
    parent: "RO-DJ",
    coords: [23.80, 44.30],
    name: { de: "Zoo Craiova", hu: "Craiovai Állatkert", ro: "Grădina Zoologică Craiova", en: "Craiova Zoo" },
    description: {
      de: "Teil des Nicolae-Romanescu-Parks, einer der größten Parks in Osteuropa.",
      hu: "A Nicolae Romanescu park része, amely Kelet-Európa egyik legnagyobbja.",
      ro: "Parte a parcului Nicolae Romanescu, unul dintre cele mai mari din Europa.",
      en: "Part of Nicolae Romanescu Park, one of the largest in Eastern Europe."
    },
    facts: {
      de: ["Eintritt oft kostenlos.", "Historische Parklandschaft."],
      hu: ["A belépés gyakran ingyenes.", "Történelmi parkvidék."],
      ro: ["Accesul este adesea gratuit.", "Peisaj istoric de parc."],
      en: ["Entrance is often free.", "Historic park landscape."]
    }
  },
  {
    id: "kid-landmark-garboavele-extra",
    type: "kid-landmark",
    parent: "RO-GL",
    coords: [28.02, 45.55],
    name: { de: "Abenteuerpark Gârboavele", hu: "Gârboavele Kalandpark", ro: "Parcul de Aventură Gârboavele", en: "Gârboavele Adventure Park" },
    description: {
      de: "Ein Freizeitgebiet im Wald bei Galați mit Kletterparcours.",
      hu: "Szabadidős övezet Galac melletti erdőben, mászópályákkal.",
      ro: "Zonă de recreere în pădurea de lângă Galați cu trasee de cățărare.",
      en: "Recreation area in the forest near Galați with climbing courses."
    },
    facts: {
      de: ["Mehrere Kletterrouten.", "Grillplätze in der Nähe."],
      hu: ["Számos mászóútvonal.", "Grillezőhelyek a közelben."],
      ro: ["Mai multe trasee de cățărare.", "Zone de grătar în apropiere."],
      en: ["Multiple climbing routes.", "Barbecue areas nearby."]
    }
  },
  {
    id: "animal-habitat-vivarium-bc-extra",
    type: "animal-habitat",
    parent: "RO-BC",
    coords: [26.91, 46.56],
    name: { de: "Vivarium Bacău", hu: "Bákói Vivárium", ro: "Vivariul Bacău", en: "Bacău Vivarium" },
    description: {
      de: "Spezialisiert auf Reptilien, Amphibien und exotische Fische.",
      hu: "Hüllőkre, kétéltűekre és egzotikus halakra szakosodott.",
      ro: "Specializat în reptile, amfibieni și pești exotici.",
      en: "Specialized in reptiles, amphibians, and exotic fish."
    },
    facts: {
      de: ["Inmitten der Stadt.", "Bildungsprogramme für Schulen."],
      hu: ["A város szívében található.", "Oktatási programok iskoláknak."],
      ro: ["Situat în centrul orașului.", "Programe educative pentru școli."],
      en: ["Located in the city center.", "Educational programs for schools."]
    }
  },
  {
    id: "animal-habitat-iasi-zoo-extra",
    type: "animal-habitat",
    parent: "RO-IS",
    coords: [27.55, 47.12],
    name: { de: "Zoo Jassy", hu: "Jászvásári Állatkert", ro: "Grădina Zoologică Iași", en: "Iași Zoo" },
    description: {
      de: "Im Ciric-Wald gelegen, bietet er eine Pause vom Stadtleben.",
      hu: "A Ciric-erdőben található, kikapcsolódást nyújt a városi életből.",
      ro: "Situată în pădurea Ciric, oferă o pauză de la viața urbană.",
      en: "Located in the Ciric Forest, providing a break from urban life."
    },
    facts: {
      de: ["Beliebt für Picknicks.", "Vielfalt an Vögeln."],
      hu: ["Népszerű piknikezőhely.", "Változatos madárvilág."],
      ro: ["Populară pentru picnicuri.", "Diversitate de păsări."],
      en: ["Popular for picnics.", "Features a variety of birds."]
    }
  },
  {
    id: "animal-habitat-bm-zoo-extra",
    type: "animal-habitat",
    parent: "RO-MM",
    coords: [23.58, 47.66],
    name: { de: "Zoo Frauenbach", hu: "Nagybányai Állatkert", ro: "Grădina Zoologică Baia Mare", en: "Baia Mare Zoo" },
    description: {
      de: "Ein kleiner Zoo am Fuße der Berge im Norden Rumäniens.",
      hu: "Kis állatkert a hegyek lábánál Észak-Romániában.",
      ro: "O grădină zoologică mică la poalele munților din nord.",
      en: "A small zoo at the foot of the mountains in Northern Romania."
    },
    facts: {
      de: ["Lokale Wildtiere.", "Familiäre Atmosphäre."],
      hu: ["Helyi vadon élő állatok.", "Családias légkör."],
      ro: ["Animale sălbatice locale.", "Atmosferă familială."],
      en: ["Local wildlife exhibits.", "Family-friendly atmosphere."]
    }
  },
  {
    id: "animal-habitat-sm-zoo-extra",
    type: "animal-habitat",
    parent: "RO-SM",
    coords: [22.88, 47.79],
    name: { de: "Zoo Sathmar", hu: "Szatmárnémeti Állatkert", ro: "Grădina Zoologică Satu Mare", en: "Satu Mare Zoo" },
    description: {
      de: "Ein ruhiges Ausflugsziel für die Bewohner von Satu Mare.",
      hu: "Nyugodt kirándulóhely a szatmáriak számára.",
      ro: "O destinație liniștită pentru locuitorii din Satu Mare.",
      en: "A quiet destination for the residents of Satu Mare."
    },
    facts: {
      de: ["Grünanlagen zum Spazieren.", "Ponyreiten für Kinder."],
      hu: ["Zöldterületek sétára.", "Pónilovaglás gyerekeknek."],
      ro: ["Spații verzi pentru plimbare.", "Plimbări cu ponei pentru copii."],
      en: ["Green spaces for walking.", "Pony rides for children."]
    }
  },
  {
    id: "kid-landmark-nymphaea-bh-extra",
    type: "kid-landmark",
    parent: "RO-BH",
    coords: [21.95, 47.06],
    name: { de: "Nymphaea Wasserpark", hu: "Nymphaea Aquapark", ro: "Aquapark Nymphaea Oradea", en: "Nymphaea Aquapark" },
    description: {
      de: "Ein moderner Wasserpark mit vielen Rutschen und Thermalbecken.",
      hu: "Modern vízi élménypark számos csúszdával és termálmedencével.",
      ro: "Un aquapark modern cu multe tobogane și bazine termale.",
      en: "A modern aquapark with many slides and thermal pools."
    },
    facts: {
      de: ["Ganzjährig geöffnet.", "Großer Wellness-Bereich."],
      hu: ["Egész évben nyitva.", "Nagy wellness részleg."],
      ro: ["Deschis tot anul.", "Zonă mare de wellness."],
      en: ["Open year-round.", "Large wellness area."]
    }
  },
  {
    id: "kid-landmark-aqua-magic-ct-extra",
    type: "kid-landmark",
    parent: "RO-CT",
    coords: [28.62, 44.22],
    name: { de: "Aqua Magic Mamaia", hu: "Aqua Magic Mamaia", ro: "Aqua Magic Mamaia", en: "Aqua Magic Mamaia" },
    description: {
      de: "Der erste moderne Wasserpark in Rumänien, direkt am Meer.",
      hu: "Románia első modern aquaparkja, közvetlenül a tengerparton.",
      ro: "Primul aquapark modern din România, situat la mare.",
      en: "The first modern aquapark in Romania, located at the seaside."
    },
    facts: {
      de: ["Nur im Sommer geöffnet.", "Befindet sich in Mamaia."],
      hu: ["Csak nyáron van nyitva.", "Mamaia üdülőhelyen található."],
      ro: ["Deschis doar vara.", "Situat în stațiunea Mamaia."],
      en: ["Open during summer only.", "Located in Mamaia resort."]
    }
  },
  {
    id: "kid-landmark-therme-b-extra",
    type: "kid-landmark",
    parent: "RO-B",
    coords: [26.08, 44.60],
    name: { de: "Therme Bukarest", hu: "Bukaresti Termálfürdő", ro: "Therme București", en: "Therme Bucharest" },
    description: {
      de: "Das größte Wellness- und Unterhaltungszentrum in Europa (nahe Otopeni).",
      hu: "Európa legnagyobb wellness és szórakoztató központja (Otopeni közelében).",
      ro: "Cel mai mare centru de wellness și relaxare din Europa.",
      en: "The largest wellness and entertainment center in Europe (near Otopeni)."
    },
    facts: {
      de: ["Tropische Pflanzenwelt.", "Riesige Wasserrutschen."],
      hu: ["Trópusi növényvilág.", "Hatalmas vízi csúszdák."],
      ro: ["Vegetație tropicală.", "Tobogane de apă uriașe."],
      en: ["Tropical vegetation.", "Features massive water slides."]
    }
  },
  {
    id: "kid-landmark-arka-park-sb-extra",
    type: "kid-landmark",
    parent: "RO-SB",
    coords: [23.94, 45.65],
    name: { de: "Arka Park Păltiniș", hu: "Arka Park Szebenjuharos", ro: "Arka Park Păltiniș", en: "Arka Park Păltiniș" },
    description: {
      de: "Ein Abenteuerpark in großer Höhe im Cindrel-Gebirge.",
      hu: "Magaslati kalandpark a Szebeni-havasokban (Cindrel).",
      ro: "Un parc de aventură la mare altitudine în munții Cindrel.",
      en: "A high-altitude adventure park in the Cindrel Mountains."
    },
    facts: {
      de: ["Seilrutschen durch den Wald.", "Frische Bergluft."],
      hu: ["Tiroli kötélpályák az erdőben.", "Friss hegyi levegő."],
      ro: ["Tiroliene prin pădure.", "Aer curat de munte."],
      en: ["Ziplines through the forest.", "Fresh mountain air."]
    }
  },
  {
    id: "agriculture-ferma-dacilor-extra",
    type: "agriculture",
    parent: "RO-PH",
    coords: [26.47, 45.03],
    name: { de: "Dakische Farm", hu: "Dák Farm", ro: "Ferma Dacilor", en: "Dacian Farm" },
    description: {
      de: "Ein Ort, der traditionelle rumänische Landwirtschaft und Gastronomie verbindet.",
      hu: "Hagyományos román mezőgazdaságot és gasztronómiát ötvöző hely.",
      ro: "Un loc care îmbină agricultura tradițională cu gastronomia.",
      en: "A place combining traditional Romanian agriculture with gastronomy."
    },
    facts: {
      de: ["Bio-Produkte direkt vom Hof.", "Rustikaler Baustil."],
      hu: ["Bio termékek közvetlenül a farmról.", "Rusztikus építészeti stílus."],
      ro: ["Produse bio direct de la fermă.", "Stil arhitectural rustic."],
      en: ["Organic products from the farm.", "Rustic architectural style."]
    }
  },
  {
    id: "river-iza-extra",
    type: "river",
    parent: "RO-MM",
    coords: [23.90, 47.92],
    name: { de: "Iza", hu: "Iza", ro: "Râul Iza", en: "Iza River" },
    description: {
      de: "Ein symbolträchtiger Fluss in der Maramureș, bekannt für seine Holztore.",
      hu: "Máramaros emblematikus folyója, szép völgyeiről ismert.",
      ro: "Un râu simbolic din Maramureș, cunoscut pentru văile sale.",
      en: "A symbolic river in Maramureș, known for its beautiful valley."
    },
    facts: {
      de: ["Fließt durch das Iza-Tal.", "Mündet in die Theiß."],
      hu: ["Az Iza-völgyön folyik keresztül.", "A Tiszába torkollik."],
      ro: ["Curge prin Valea Izei.", "Se varsă în Tisa."],
      en: ["Flows through the Iza Valley.", "Tributary of the Tisa River."]
    }
  },
  {
    id: "river-siret-extra",
    type: "river",
    parent: "RO-SV",
    coords: [26.25, 47.65],
    name: { de: "Siret", hu: "Szeret", ro: "Râul Siret", en: "Siret River" },
    description: {
      de: "Einer der wichtigsten Flüsse Rumäniens, der durch die Moldau fließt.",
      hu: "Románia egyik legfontosabb folyója, amely Moldván folyik keresztül.",
      ro: "Unul dintre cele mai importante râuri din Moldova.",
      en: "One of the most important rivers in the Moldavia region."
    },
    facts: {
      de: ["Größter Zufluss der Donau in RO.", "Stauseen zur Stromerzeugung."],
      hu: ["A Duna legnagyobb hazai mellékfolyója.", "Víztározók áramtermeléshez."],
      ro: ["Cel mai mare afluent al Dunării în RO.", "Lacuri de acumulare pentru energie."],
      en: ["Largest Danube tributary in RO.", "Features dams for power."]
    }
  },
  {
    id: "river-prut-extra",
    type: "river",
    parent: "RO-BT",
    coords: [27.20, 48.00],
    name: { de: "Pruth", hu: "Prut", ro: "Râul Prut", en: "Prut River" },
    description: {
      de: "Grenzfluss zwischen Rumänien und der Republik Moldau.",
      hu: "Határfolyó Románia és a Moldovai Köztársaság között.",
      ro: "Râu de frontieră între România și Republica Moldova.",
      en: "Border river between Romania and the Republic of Moldova."
    },
    facts: {
      de: ["Zweitlängster Fluss Rumäniens.", "Mündet bei Galați in die Donau."],
      hu: ["Románia második leghosszabb folyója.", "Galacnál ömlik a Dunába."],
      ro: ["Al doilea râu ca lungime din RO.", "Se varsă în Dunăre la Galați."],
      en: ["Second longest river in Romania.", "Flows into the Danube near Galați."]
    }
  },
  {
    id: "river-bistrita-extra",
    type: "river",
    parent: "RO-NT",
    coords: [26.35, 46.92],
    name: { de: "Bistritz", hu: "Beszterce", ro: "Râul Bistrița", en: "Bistrița River" },
    description: {
      de: "Ein Gebirgsfluss, bekannt für seine Flößerei-Tradition in der Vergangenheit.",
      hu: "Hegyi folyó, korábbi tutajozási hagyományairól ismert.",
      ro: "Un râu de munte cunoscut pentru tradiția plutăritului.",
      en: "A mountain river known for its past rafting tradition."
    },
    facts: {
      de: ["Durchfließt den Bicaz-Stausee.", "Beliebt für Wassersport."],
      hu: ["Áthalad a Békási-víztározón.", "Népszerű a vízi sportokhoz."],
      ro: ["Traversează lacul Izvorul Muntelui.", "Popular pentru sporturi nautice."],
      en: ["Crosses the Bicaz Reservoir.", "Popular for water sports."]
    }
  },
  {
    id: "river-trotus-extra",
    type: "river",
    parent: "RO-BC",
    coords: [26.70, 46.25],
    name: { de: "Trotuș", hu: "Tatros", ro: "Râul Trotuș", en: "Trotuș River" },
    description: {
      de: "Fließt durch ein malerisches Tal in den Ostkarpaten.",
      hu: "Festői völgyben folyik a Keleti-Kárpátokban.",
      ro: "Curge printr-o vale pitorească din Carpații Orientali.",
      en: "Flows through a scenic valley in the Eastern Carpathians."
    },
    facts: {
      de: ["Wichtiger Transportweg früher.", "Viele Kurorte im Tal."],
      hu: ["Korábban fontos szállítási útvonal.", "Sok fürdőhely a völgyben."],
      ro: ["Vechi drum comercial.", "Multe stațiuni în lungul văii."],
      en: ["Old commercial route.", "Many resorts along the valley."]
    }
  },
  {
    id: "river-putna-extra",
    type: "river",
    parent: "RO-VN",
    coords: [26.60, 45.90],
    name: { de: "Putna", hu: "Putna", ro: "Râul Putna", en: "Putna River" },
    description: {
      de: "Ein Fluss in der Vrancea-Region, bekannt für seinen Wasserfall.",
      hu: "Folyó Vrancea régióban, vízeséséről ismert.",
      ro: "Un râu din Vrancea, celebru pentru cascada sa.",
      en: "A river in Vrancea, famous for its waterfall."
    },
    facts: {
      de: ["Hat die Putna-Schlucht.", "Wilde Gebirgslandschaft."],
      hu: ["Itt található a Putna-szurdok.", "Vadon hegyi táj."],
      ro: ["Formează Cascada Putnei.", "Peisaj montan sălbatic."],
      en: ["Forms the Putna Waterfall.", "Wild mountain landscape."]
    }
  },
  {
    id: "river-buzau-extra",
    type: "river",
    parent: "RO-BZ",
    coords: [26.85, 45.15],
    name: { de: "Buzău", hu: "Bodza", ro: "Râul Buzău", en: "Buzău River" },
    description: {
      de: "Bekannt für seine Schlammvulkane in der Nähe und Rafting-Möglichkeiten.",
      hu: "A közeli iszapvulkánokról és rafting lehetőségeiről ismert.",
      ro: "Cunoscut pentru vulcanii noroioși și rafting.",
      en: "Known for the nearby muddy volcanoes and rafting opportunities."
    },
    facts: {
      de: ["Mündet in den Siret.", "Überquert die Karpaten."],
      hu: ["A Szeretbe torkollik.", "Átszeli a Kárpátokat."],
      ro: ["Se varsă în Siret.", "Traversează munții Buzăului."],
      en: ["Flows into the Siret River.", "Crosses the Buzău Mountains."]
    }
  },
  {
    id: "river-ialomita-extra",
    type: "river",
    parent: "RO-IL",
    coords: [27.35, 44.58],
    name: { de: "Ialomița", hu: "Ialomița", ro: "Râul Ialomița", en: "Ialomița River" },
    description: {
      de: "Entspringt im Bucegi-Gebirge und durchfließt die Walachische Tiefebene.",
      hu: "A Bucsecs-hegységben ered és a Havasalföldi-síkságon folyik keresztül.",
      ro: "Izvorăște din Bucegi și traversează Câmpia Română.",
      en: "Originates in the Bucegi Mountains and crosses the Romanian Plain."
    },
    facts: {
      de: ["Durchfließt die Hauptstadt der Region.", "Wichtig für die Bewässerung."],
      hu: ["A régió fővárosán folyik keresztül.", "Fontos az öntözés számára."],
      ro: ["Traversează Slobozia.", "Important pentru irigații."],
      en: ["Flows through Slobozia.", "Crucial for irrigation."]
    }
  },
  {
    id: "lake-mostistea-extra",
    type: "lake",
    parent: "RO-CL",
    coords: [26.85, 44.25],
    name: { de: "Mostiștea-See", hu: "Mostiștea-tó", ro: "Lacul Mostiștea", en: "Mostiștea Lake" },
    description: {
      de: "Einer der größten Seen im Süden Rumäniens, beliebt bei Anglern.",
      hu: "Dél-Románia egyik legnagyobb tava, népszerű a horgászok körében.",
      ro: "Unul dintre cele mai mari lacuri din sudul țării.",
      en: "One of the largest lakes in Southern Romania, popular for fishing."
    },
    facts: {
      de: ["Reich an Fischarten.", "Teil eines Bewässerungssystems."],
      hu: ["Halakban gazdag.", "Egy öntözőrendszer része."],
      ro: ["Bogat în diverse specii de pești.", "Parte dintr-un sistem hidro."],
      en: ["Rich in fish species.", "Part of a hydro-irrigation system."]
    }
  },
  {
    id: "lake-razim-extra",
    type: "lake",
    parent: "RO-TL",
    coords: [28.95, 44.90],
    name: { de: "Razim-See", hu: "Razim-tó", ro: "Lacul Razim", en: "Razim Lake" },
    description: {
      de: "Der größte Süßwassersee Rumäniens, Teil des Razim-Sinoe-Komplexes.",
      hu: "Románia legnagyobb édesvizű tava, a Razim-Sinoe komplexum része.",
      ro: "Cel mai mare lac de apă dulce din România.",
      en: "The largest freshwater lake in Romania, part of the Razim-Sinoe complex."
    },
    facts: {
      de: ["Ehemalige Lagune.", "Wichtiger Lebensraum für Vögel."],
      hu: ["Egykori tengeri lagúna.", "Fontos élőhely a madaraknak."],
      ro: ["Fostă lagună marină.", "Habitat important pentru păsări."],
      en: ["Former marine lagoon.", "Important habitat for birds."]
    }
  },
  {
    id: "lake-sinoe-extra",
    type: "lake",
    parent: "RO-CT",
    coords: [28.80, 44.50],
    name: { de: "Sinoe-See", hu: "Sinoe-tó", ro: "Lacul Sinoe", en: "Sinoe Lake" },
    description: {
      de: "Ein Brackwassersee an der Küste, bekannt für die antike Stadt Histria.",
      hu: "Partmenti félsós tó, az ókori Hisztria városáról ismert.",
      ro: "Un lac cu apă salmastră situat lângă Histria.",
      en: "A brackish water lake on the coast, known for the ancient city of Histria."
    },
    facts: {
      de: ["Nahe der ältesten Stadt ROs.", "Teil des Donaudelta-Reservats."],
      hu: ["Románia legrégebbi városa közelében.", "A Duna-delta rezervátum része."],
      ro: ["Lângă cea mai veche așezare.", "Parte din rezervația Deltei."],
      en: ["Near the oldest RO settlement.", "Part of the Danube Delta Reserve."]
    }
  },
  {
    id: "lake-techirghiol-extra",
    type: "lake",
    parent: "RO-CT",
    coords: [28.63, 44.05],
    name: { de: "Techirghiol-See", hu: "Tekirgöl-tó", ro: "Lacul Techirghiol", en: "Techirghiol Lake" },
    description: {
      de: "Berühmt für seinen heilenden Heilschlamm und den hohen Salzgehalt.",
      hu: "Híres gyógyiszapjáról és magas sótartalmáról.",
      ro: "Faimos pentru nămolul terapeutic și salinitate.",
      en: "Famous for its therapeutic mud and high salinity."
    },
    facts: {
      de: ["Größter Salzsee Rumäniens.", "Wichtiger Kurort."],
      hu: ["Románia legnagyobb sós tava.", "Fontos gyógyhely."],
      ro: ["Cel mai mare lac sărat din țară.", "Stațiune balneară importantă."],
      en: ["Largest salt lake in Romania.", "Important balneary resort."]
    }
  },
  {
    id: "forest-letea-extra",
    type: "forest",
    parent: "RO-TL",
    coords: [29.52, 45.30],
    name: { de: "Letea-Wald", hu: "Letea-erdő", ro: "Pădurea Letea", en: "Letea Forest" },
    description: {
      de: "Der nördlichste subtropische Wald Europas, im Donaudelta gelegen.",
      hu: "Európa legészakibb szubtrópusi erdője a Duna-deltában.",
      ro: "Cea mai nordică pădure subtropicală din Europa.",
      en: "The northernmost subtropical forest in Europe, located in the Danube Delta."
    },
    facts: {
      de: ["Berühmt für Wildpferde.", "Sanddünen und Lianen."],
      hu: ["Híres a vadlovairól.", "Homokdűnék és liánok."],
      ro: ["Faimoasă pentru caii sălbatici.", "Dune de nisip și liane."],
      en: ["Famous for wild horses.", "Features sand dunes and lianas."]
    }
  },
  {
    id: "mountain-semenic-extra",
    type: "mountain",
    parent: "RO-CS",
    coords: [22.05, 45.18],
    name: { de: "Semenic-Gebirge", hu: "Szemenik-hegység", ro: "Munții Semenic", en: "Semenic Mountains" },
    description: {
      de: "Ein Teil des Banater Gebirges, bekannt für Wintersport und Naturparks.",
      hu: "A Bánsági-hegyek része, téli sportokról és natúrparkokról ismert.",
      ro: "O grupă muntoasă din Banat, celebră pentru schi.",
      en: "A part of the Banat Mountains, famous for winter sports and nature parks."
    },
    facts: {
      de: ["Beliebtes Skigebiet.", "Ursprüngliche Buchenwälder."],
      hu: ["Népszerű síterep.", "Ősi bükkerdők."],
      ro: ["Destinație populară de schi.", "Păduri de fag virgine."],
      en: ["Popular skiing destination.", "Features virgin beech forests."]
    }
  },
  {
    id: "mountain-poiana-rusca-extra",
    type: "mountain",
    parent: "RO-HD",
    coords: [22.35, 45.75],
    name: { de: "Poiana-Ruscă-Gebirge", hu: "Polyána-Ruszka-hegység", ro: "Munții Poiana Ruscă", en: "Poiana Ruscă Mountains" },
    description: {
      de: "Ein Gebirgsmassiv reich an Mineralien und Marmorvorkommen.",
      hu: "Ásványokban és márványban gazdag hegység.",
      ro: "Masiv muntos bogat în minerale și marmură.",
      en: "A mountain massif rich in minerals and marble deposits."
    },
    facts: {
      de: ["Abbau von Eisen und Marmor.", "Dichte Mischwälder."],
      hu: ["Vas és márvány bányászata.", "Sűrű vegyes erdők."],
      ro: ["Exploatări de fier și marmură.", "Păduri dese de amestec."],
      en: ["Mining of iron and marble.", "Dense mixed forests."]
    }
  },
  {
    id: "mountain-trascau-extra",
    type: "mountain",
    parent: "RO-AB",
    coords: [23.45, 46.35],
    name: { de: "Trascău-Gebirge", hu: "Torockói-hegység", ro: "Munții Trascău", en: "Trascău Mountains" },
    description: {
      de: "Bekannt für spektakuläre Kalksteinformationen und traditionelle Dörfer.",
      hu: "Látványos mészkőalakzatairól és hagyományos falvairól ismert.",
      ro: "Cunoscuți pentru formațiuni calcaroase spectaculoase.",
      en: "Known for spectacular limestone formations and traditional villages."
    },
    facts: {
      de: ["Beherbergt das Dorf Rimetea.", "Viele Klettergebiete."],
      hu: ["Itt található Torockó falu.", "Számos mászóhely."],
      ro: ["Adăpostesc satul Rimetea.", "Multe zone de escaladă."],
      en: ["Home to Rimetea village.", "Features many climbing areas."]
    }
  },
  {
    id: "river-somes-mic-extra",
    type: "river",
    parent: "RO-CJ",
    coords: [23.60, 46.77],
    name: { de: "Kleiner Somesch", hu: "Kis-Szamos", ro: "Râul Someșul Mic", en: "Someșul Mic River" },
    description: {
      de: "Fließt durch das Herz von Klausenburg und prägt das Stadtbild.",
      hu: "Kolozsvár szívén folyik keresztül, meghatározva a városképet.",
      ro: "Curge prin inima orașului Cluj-Napoca.",
      en: "Flows through the heart of Cluj-Napoca, shaping its landscape."
    },
    facts: {
      de: ["Entsteht durch Zusammenfluss.", "Wichtig für die Stadtgeschichte."],
      hu: ["Összefolyással keletkezik.", "Fontos a város történelmében."],
      ro: ["Format prin confluență.", "Important pentru istoria Clujului."],
      en: ["Formed by confluence.", "Key to the city's history."]
    }
  },
  {
    id: "river-somes-mare-extra",
    type: "river",
    parent: "RO-BN",
    coords: [24.40, 47.15],
    name: { de: "Großer Somesch", hu: "Nagy-Szamos", ro: "Râul Someșul Mare", en: "Someșul Mare River" },
    description: {
      de: "Ein bedeutender Fluss im Norden, der im Rodna-Gebirge entspringt.",
      hu: "Jelentős északi folyó, amely a Radnai-havasokban ered.",
      ro: "Un râu important din nord care izvorăște din Munții Rodnei.",
      en: "An important northern river originating in the Rodna Mountains."
    },
    facts: {
      de: ["Heller, klarer Gebirgsfluss.", "Mündet später in den Somesch."],
      hu: ["Világos, tiszta hegyi folyó.", "Később a Szamosba ömlik."],
      ro: ["Râu de munte cu ape limpezi.", "Se unește apoi cu Someșul Mic."],
      en: ["Clear mountain river.", "Later joins the Someșul Mic."]
    }
  },
  {
    id: "mountain-meses-extra",
    type: "mountain",
    parent: "RO-SJ",
    coords: [23.05, 47.12],
    name: { de: "Meseș-Gebirge", hu: "Meszes-hegység", ro: "Munții Meseș", en: "Meseș Mountains" },
    description: {
      de: "Eine niedrige Gebirgskette, die das Siebenbürgische Becken begrenzt.",
      hu: "Alacsony hegylánc, amely az Erdélyi-medence határát alkotja.",
      ro: "O grupă muntoasă joasă care mărginește Podișul Transilvaniei.",
      en: "A low mountain range bordering the Transylvanian Plateau."
    },
    facts: {
      de: ["Antiker römischer Limes.", "Wanderwege nahe Zalău."],
      hu: ["Ókori római határvonal (limes).", "Túraútvonalak Zilah közelében."],
      ro: ["Vechiul limes roman.", "Trasee de drumeție lângă Zalău."],
      en: ["Ancient Roman limes location.", "Hiking trails near Zalău."]
    }
  },
  {
    id: "river-crisul-repede-extra",
    type: "river",
    parent: "RO-BH",
    coords: [21.93, 47.06],
    name: { de: "Schnelle Kreisch", hu: "Sebes-Körös", ro: "Râul Crișul Repede", en: "Crișul Repede River" },
    description: {
      de: "Fließt durch Großwardein und bildet wunderschöne Schluchten.",
      hu: "Nagyváradon folyik keresztül és gyönyörű szurdokokat alkot.",
      ro: "Curge prin Oradea și formează defilee superbe.",
      en: "Flows through Oradea and forms beautiful gorges."
    },
    facts: {
      de: ["Beliebt für Rafting.", "Durchquert den Apuseni-Pass."],
      hu: ["Népszerű rafting helyszín.", "Átszeli a Király-hágót."],
      ro: ["Popular pentru rafting.", "Traversează Pasul Craiului."],
      en: ["Popular for rafting.", "Crosses the King's Pass."]
    }
  },
  {
    id: "mountain-zarand-extra",
    type: "mountain",
    parent: "RO-AR",
    coords: [21.80, 46.25],
    name: { de: "Zărand-Gebirge", hu: "Zarándi-hegység", ro: "Munții Zărandului", en: "Zărand Mountains" },
    description: {
      de: "Ein Teil des Apuseni-Gebirges mit sanften Hügeln und dichten Wäldern.",
      hu: "Az Erdélyi-szigethegység része, lankás dombokkal és sűrű erdőkkel.",
      ro: "Parte a Munților Apuseni cu dealuri domoale și păduri dese.",
      en: "A part of the Apuseni Mountains with gentle hills and dense forests."
    },
    facts: {
      de: ["Historische Bergbauregion.", "Viele Wanderpfade."],
      hu: ["Történelmi bányavidék.", "Számos túraösvény."],
      ro: ["Regiune minieră istorică.", "Multe poteci de drumeție."],
      en: ["Historic mining region.", "Many hiking paths."]
    }
  },
  {
    id: "river-bega-extra",
    type: "river",
    parent: "RO-TM",
    coords: [21.22, 45.75],
    name: { de: "Bega", hu: "Béga", ro: "Râul Bega", en: "Bega River" },
    description: {
      de: "Ein kanalisierter Fluss, der das Zentrum von Temeswar durchquert.",
      hu: "Csatornázott folyó, amely Temesvár központján halad át.",
      ro: "Un râu canalizat care traversează centrul Timișoarei.",
      en: "A canalized river crossing the center of Timișoara."
    },
    facts: {
      de: ["Erster schiffbarer Kanal in RO.", "Radwege am Ufer."],
      hu: ["Az első hajózható csatorna Romániában.", "Kerékpárutak a parton."],
      ro: ["Primul canal navigabil din RO.", "Piste de biciclete pe mal."],
      en: ["First navigable canal in RO.", "Bike paths along the banks."]
    }
  },
  {
    id: "mountain-mehedinti-extra",
    type: "mountain",
    parent: "RO-MH",
    coords: [22.60, 44.95],
    name: { de: "Mehedinți-Gebirge", hu: "Mehedinți-hegység", ro: "Munții Mehedinți", en: "Mehedinți Mountains" },
    description: {
      de: "Bekannt für seine Karstlandschaften, Höhlen und Schluchten.",
      hu: "Karsztvidékéről, barlangjairól és szurdokairól ismert.",
      ro: "Cunoscuți pentru relief carstic și peșteri.",
      en: "Known for karst landscapes, caves, and gorges."
    },
    facts: {
      de: ["Nahe dem Kurort Herkulesbad.", "Spektakuläre Kalkfelsen."],
      hu: ["Herkulesfürdő közelében.", "Látványos mészkősziklák."],
      ro: ["Lângă Băile Herculane.", "Stânci calcaroase spectaculoase."],
      en: ["Near Băile Herculane resort.", "Spectacular limestone cliffs."]
    }
  },
  {
    id: "river-olt-extra",
    type: "river",
    parent: "RO-OT",
    coords: [24.35, 44.30],
    name: { de: "Alt", hu: "Olt", ro: "Râul Olt", en: "Olt River" },
    description: {
      de: "Einer der längsten Flüsse Rumäniens, der das ganze Land von Nord nach Süd durchquert.",
      hu: "Románia egyik leghosszabb folyója, amely észak-déli irányban szeli át az országot.",
      ro: "Unul dintre cele mai lungi râuri din țară.",
      en: "One of the longest rivers in Romania, crossing the country from north to south."
    },
    facts: {
      de: ["Zahlreiche Wasserkraftwerke.", "Bildet das Olt-Tal."],
      hu: ["Számos vízierőmű található rajta.", "Az Olt-völgyet alkotja."],
      ro: ["Numeroase hidrocentrale.", "Formează Valea Oltului."],
      en: ["Numerous hydroelectric plants.", "Forms the Olt Valley."]
    }
  },
  {
    id: "river-vedea-extra",
    type: "river",
    parent: "RO-TR",
    coords: [25.35, 43.95],
    name: { de: "Vedea", hu: "Vedea", ro: "Râul Vedea", en: "Vedea River" },
    description: {
      de: "Ein Fluss in der Walachischen Tiefebene, der durch Alexandria fließt.",
      hu: "Havasalföldi-síkság folyója, amely Alexandrián folyik keresztül.",
      ro: "Un râu din Câmpia Română care trece prin Alexandria.",
      en: "A river in the Romanian Plain passing through Alexandria."
    },
    facts: {
      de: ["Mündet in die Donau.", "Wichtig für die Landwirtschaft."],
      hu: ["A Dunába torkollik.", "Fontos a mezőgazdaság számára."],
      ro: ["Se varsă în Dunăre.", "Crucial pentru agricultură."],
      en: ["Flows into the Danube.", "Crucial for agriculture."]
    }
  }
];
