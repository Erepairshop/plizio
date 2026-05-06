// @ts-nocheck
import type { POI } from "./poi";

export const poiExtraPanamaEconomicV2: POI[] = [
  {
    id: "terminal-atlantico-economic-v2",
    type: "port",
    parent: "PA-3",
    coords: [-79.885, 9.362],
    name: { de: "Manzanillo International Terminal", hu: "Manzanillo Nemzetközi Terminál", ro: "Manzanillo International Terminal", en: "Manzanillo International Terminal" },
    description: { de: "Einer der größten Containerhäfen der Karibik in Colón.", hu: "A Karib-térség egyik legnagyobb konténerkikötője Colónban.", ro: "Unul dintre cele mai mari porturi de containere din Caraibe, în Colón.", en: "One of the largest container ports in the Caribbean, located in Colon." },
    facts: {
      de: ["Wichtigster Umschlagplatz für Transitladungen.", "Kapazität von über 2 Mio. TEU.", "Modernste Krananlagen.", "Direkt an der Einfahrt zum Panamakanal."],
      hu: ["A tranzitrakományok legfontosabb átrakodóhelye.", "Több mint 2 millió TEU kapacitás.", "Modern daruberendezések.", "Közvetlenül a Panama-csatorna bejáratánál."],
      ro: ["Principalul centru de tranzit pentru mărfuri.", "Capacitate de peste 2 milioane TEU.", "Echipamente de macara moderne.", "Direct la intrarea în Canalul Panama."],
      en: ["Major hub for transshipment cargo.", "Capacity over 2 million TEU.", "State-of-the-art crane facilities.", "Located right at the Panama Canal entrance."]
    }
  },
  {
    id: "puerto-balboa-economic-v2",
    type: "port",
    parent: "PA-8",
    coords: [-79.566, 8.953],
    name: { de: "Hafen Balboa", hu: "Balboa kikötő", ro: "Portul Balboa", en: "Port of Balboa" },
    description: { de: "Der bedeutendste Hafen am pazifischen Eingang des Panamakanals.", hu: "A legjelentősebb kikötő a Panama-csatorna csendes-óceáni bejáratánál.", ro: "Cel mai important port de la intrarea în Pacific a Canalului Panama.", en: "The most significant port at the Pacific entrance to the Panama Canal." },
    facts: {
      de: ["Strategischer Knotenpunkt für den Pazifikhandel.", "Umschlagplatz für globale Schifffahrtslinien.", "Großflächige Container-Terminals.", "Zentrum für Logistik und Warenverteilung."],
      hu: ["Stratégiai csomópont a csendes-óceáni kereskedelemben.", "Átrakodóhely globális hajózási vonalak számára.", "Kiterjedt konténerterminálok.", "Logisztikai és áruelosztási központ."],
      ro: ["Nod strategic pentru comerțul din Pacific.", "Centru de tranzit pentru linii maritime globale.", "Terminaluri de containere extinse.", "Centru de logistică și distribuție a mărfurilor."],
      en: ["Strategic junction for Pacific trade.", "Transshipment hub for global shipping lines.", "Extensive container terminals.", "Center for logistics and goods distribution."]
    }, image: "/poi-images/puerto-balboa-economic-v2.webp"},
  {
    id: "mina-cobre-economic-v2",
    type: "industry",
    parent: "PA-3",
    coords: [-80.603, 8.857],
    name: { de: "Cobre Panamá Mine", hu: "Cobre Panamá bánya", ro: "Mina Cobre Panamá", en: "Cobre Panama Mine" },
    description: { de: "Eine der größten Kupferminen der Welt.", hu: "A világ egyik legnagyobb rézbányája.", ro: "Una dintre cele mai mari mine de cupru din lume.", en: "One of the largest copper mines in the world." },
    facts: {
      de: ["Wichtigster Kupferproduzent Panamas.", "Großer Arbeitgeber in der Region.", "Exportiert Konzentrat weltweit.", "Umfasst Tagebau und Verarbeitung."],
      hu: ["Panama legfontosabb réztermelője.", "Jelentős munkaadó a régióban.", "Világszerte exportál rézkoncentrátumot.", "Külszíni fejtést és feldolgozást is magában foglal."],
      ro: ["Cel mai important producător de cupru din Panama.", "Angajator major în regiune.", "Exportă concentrat la nivel mondial.", "Include minerit la suprafață și procesare."],
      en: ["Panama's primary copper producer.", "Major regional employer.", "Exports concentrate globally.", "Includes large-scale open-pit mining and processing."]
    }, image: "/poi-images/mina-cobre-economic-v2.webp"},
  {
    id: "zona-libre-colon-economic-v2",
    type: "industry",
    parent: "PA-3",
    coords: [-79.897, 9.357],
    name: { de: "Freihandelszone Colón", hu: "Colón Szabadkereskedelmi Övezet", ro: "Zona Liberă Colón", en: "Colon Free Trade Zone" },
    description: { de: "Die zweitgrößte Freihandelszone der Welt.", hu: "A világ második legnagyobb szabadkereskedelmi övezete.", ro: "A doua zonă liberă ca mărime din lume.", en: "The second-largest free trade zone in the world." },
    facts: {
      de: ["Wichtiger Hub für den Lateinamerika-Handel.", "Zollfreie Warenlagerung und Vertrieb.", "Umsatzstarker Standort.", "Zentrum für Import und Export."],
      hu: ["Fontos központ a latin-amerikai kereskedelemben.", "Vámmentes raktározás és forgalmazás.", "Nagy forgalmú helyszín.", "Import- és exportközpont."],
      ro: ["Centru important pentru comerțul din America Latină.", "Depozitare și distribuție fără taxe vamale.", "Locație cu volum mare de vânzări.", "Centru de import și export."],
      en: ["Key hub for Latin American trade.", "Duty-free storage and distribution.", "High-volume business location.", "Center for import and export."]
    }
  },
  {
    id: "puerto-cristobal-economic-v2",
    type: "port",
    parent: "PA-3",
    coords: [-79.911, 9.349],
    name: { de: "Hafen Cristóbal", hu: "Cristóbal kikötő", ro: "Portul Cristóbal", en: "Port of Cristobal" },
    description: { de: "Wichtiger Hafen an der atlantischen Seite des Kanals.", hu: "Fontos kikötő a csatorna atlanti oldalán.", ro: "Port important pe partea atlantică a canalului.", en: "Significant port on the Atlantic side of the canal." },
    facts: {
      de: ["Bedient Transithäfen.", "Einst ein US-Betrieb.", "Logistisches Drehkreuz.", "Eng verbunden mit der Freihandelszone."],
      hu: ["Tranzitkikötőket szolgál ki.", "Egykor amerikai üzemeltetésben.", "Logisztikai csomópont.", "Szoros kapcsolatban áll a szabadkereskedelmi övezettel."],
      ro: ["Deservește porturi de tranzit.", "Fostă operațiune americană.", "Nod logistic.", "Strâns legat de zona liberă."],
      en: ["Serves transit hubs.", "Formerly US-operated.", "Logistical junction.", "Closely linked to the Colon Free Trade Zone."]
    }, image: "/poi-images/puerto-cristobal-economic-v2.webp"},
  {
    id: "terminal-pacifico-economic-v2",
    type: "port",
    parent: "PA-8",
    coords: [-79.575, 8.945],
    name: { de: "PSA Panama International Terminal", hu: "PSA Panama Nemzetközi Terminál", ro: "PSA Panama International Terminal", en: "PSA Panama International Terminal" },
    description: { de: "Ein moderner Container-Terminal am Pazifikeingang.", hu: "Modern konténerterminál a csendes-óceáni bejáratnál.", ro: "Un terminal modern de containere la intrarea în Pacific.", en: "A modern container terminal at the Pacific entrance." },
    facts: {
      de: ["Strategische Lage am Pazifik.", "Teil des PSA-Netzwerks.", "Hohe Umschlagskapazität.", "Modernste Hafentechnologie."],
      hu: ["Stratégiai elhelyezkedés a Csendes-óceánon.", "A PSA-hálózat része.", "Nagy áteresztőképesség.", "Modern kikötői technológia."],
      ro: ["Locație strategică la Pacific.", "Parte a rețelei PSA.", "Capacitate mare de tranzit.", "Tehnologie portuară modernă."],
      en: ["Strategic location on the Pacific.", "Part of the PSA network.", "High throughput capacity.", "Advanced port technology."]
    }, image: "/poi-images/terminal-pacifico-economic-v2.webp"},
  {
    id: "industria-pesquera-economic-v2",
    type: "industry",
    parent: "PA-9",
    coords: [-79.7, 8.0],
    name: { de: "Fischereiindustrie Veraguas", hu: "Veraguas halászati ipar", ro: "Industria pescărească Veraguas", en: "Veraguas Fishing Industry" },
    description: { de: "Zentrum der kommerziellen Fischerei an der Pazifikküste.", hu: "A csendes-óceáni parti kereskedelmi halászat központja.", ro: "Centru al pescuitului comercial pe coasta Pacificului.", en: "Center for commercial fishing on the Pacific coast." },
    facts: {
      de: ["Wichtiger Exportzweig.", "Verarbeitung von Fischprodukten.", "Große Fischereiflotte.", "Arbeitgeber für lokale Gemeinschaften."],
      hu: ["Fontos exportágazat.", "Haltermékek feldolgozása.", "Nagy halászflotta.", "Munkaadó a helyi közösségek számára."],
      ro: ["Ramură importantă de export.", "Procesarea produselor din pește.", "Flotă mare de pescuit.", "Angajator pentru comunitățile locale."],
      en: ["Key export sector.", "Processing of fish products.", "Large fishing fleet.", "Employer for local communities."]
    }, image: "/poi-images/industria-pesquera-economic-v2.webp"},
  {
    id: "planta-energia-termica-economic-v2",
    type: "industry",
    parent: "PA-8",
    coords: [-79.5, 8.85],
    name: { de: "Wärmekraftwerk Panama", hu: "Panama hőerőmű", ro: "Termocentrala Panama", en: "Panama Thermal Power Plant" },
    description: { de: "Ein großes Kraftwerk zur Energieversorgung des Landes.", hu: "Nagy erőmű az ország energiaellátására.", ro: "O centrală electrică mare pentru alimentarea cu energie a țării.", en: "A large power plant providing energy to the country." },
    facts: {
      de: ["Grundpfeiler der Energieversorgung.", "Wichtige industrielle Infrastruktur.", "Unterstützt nationale Stromnetze.", "Moderne Energieerzeugung."],
      hu: ["Az energiaellátás alappillére.", "Fontos ipari infrastruktúra.", "Támogatja a nemzeti villamosenergia-hálózatokat.", "Modern energiatermelés."],
      ro: ["Pilonul alimentării cu energie.", "Infrastructură industrială importantă.", "Susține rețelele electrice naționale.", "Producție modernă de energie."],
      en: ["Cornerstone of power supply.", "Key industrial infrastructure.", "Supports national power grids.", "Modern energy production."]
    }
  },
  {
    id: "zona-agroindustrial-economic-v2",
    type: "industry",
    parent: "PA-4",
    coords: [-82.5, 8.7],
    name: { de: "Agrarindustrie Chiriquí", hu: "Chiriquí agrár-ipari zóna", ro: "Zona agroindustrială Chiriquí", en: "Chiriqui Agro-Industrial Zone" },
    description: { de: "Zentrum für die Verarbeitung von Agrarprodukten.", hu: "Mezőgazdasági termékek feldolgozási központja.", ro: "Centru pentru procesarea produselor agricole.", en: "Center for processing agricultural products." },
    facts: {
      de: ["Verarbeitung von Kaffee und Gemüse.", "Exportorientierte Industrie.", "Wichtiger Sektor in Chiriquí.", "Förderung regionaler Produkte."],
      hu: ["Kávé- és zöldségfeldolgozás.", "Exportorientált ipar.", "Fontos szektor Chiriquí-ban.", "Regionális termékek népszerűsítése."],
      ro: ["Procesarea cafelei și a legumelor.", "Industrie orientată spre export.", "Sector important în Chiriquí.", "Promovarea produselor regionale."],
      en: ["Processing of coffee and vegetables.", "Export-oriented industry.", "Important sector in Chiriquí.", "Promotion of regional products."]
    }, image: "/poi-images/zona-agroindustrial-economic-v2.webp"},
  {
    id: "terminal-petrolero-economic-v2",
    type: "port",
    parent: "PA-3",
    coords: [-79.95, 9.4],
    name: { de: "Ölterminal Chiriqui Grande", hu: "Chiriqui Grande olajterminál", ro: "Terminal petrolier Chiriqui Grande", en: "Chiriqui Grande Oil Terminal" },
    description: { de: "Wichtiger Umschlagplatz für Rohöl am Atlantik.", hu: "Fontos nyersolaj-átrakodóhely az Atlanti-óceánon.", ro: "Centru important de tranzit pentru țiței la Atlantic.", en: "Major terminal for crude oil on the Atlantic side." },
    facts: {
      de: ["Strategischer Öl-Export.", "Moderne Tanker-Anlagen.", "Große Lagerkapazitäten.", "Verbindung zur Pipeline."],
      hu: ["Stratégiai olajexport.", "Modern tankhajó-létesítmények.", "Nagy tárolókapacitások.", "Csatlakozás a csővezetékhez."],
      ro: ["Export strategic de petrol.", "Facilități moderne pentru tancuri petroliere.", "Capacități mari de stocare.", "Conexiune cu conducta."],
      en: ["Strategic oil export.", "Modern tanker facilities.", "Large storage capacities.", "Connected to the trans-isthmian pipeline."]
    }, image: "/poi-images/terminal-petrolero-economic-v2.webp"},
  {
    id: "puerto-aguadulce-economic-v2",
    type: "port",
    parent: "PA-2",
    coords: [-80.5, 8.2],
    name: { de: "Hafen Aguadulce", hu: "Aguadulce kikötő", ro: "Portul Aguadulce", en: "Port of Aguadulce" },
    description: { de: "Regionaler Hafen für landwirtschaftliche Exporte.", hu: "Regionális kikötő mezőgazdasági export céljára.", ro: "Port regional pentru exporturi agricole.", en: "Regional port for agricultural exports." },
    facts: {
      de: ["Wichtig für Zucker und Salz.", "Regionale wirtschaftliche Bedeutung.", "Verbesserte Hafeninfrastruktur.", "Zentrum für regionale Fracht."],
      hu: ["Fontos a cukor és a só szempontjából.", "Regionális gazdasági jelentőség.", "Javított kikötői infrastruktúra.", "Regionális rakományközpont."],
      ro: ["Important pentru zahăr și sare.", "Importanță economică regională.", "Infrastructură portuară îmbunătățită.", "Centru pentru marfă regională."],
      en: ["Important for sugar and salt.", "Regional economic importance.", "Improved port infrastructure.", "Center for regional freight."]
    }
  },
  {
    id: "industria-azucarera-economic-v2",
    type: "industry",
    parent: "PA-2",
    coords: [-80.55, 8.25],
    name: { de: "Zuckerrohrindustrie Aguadulce", hu: "Aguadulce cukornádipar", ro: "Industria zahărului din Aguadulce", en: "Aguadulce Sugar Industry" },
    description: { de: "Zentrum der panamaischen Zuckerproduktion.", hu: "A panamai cukorgyártás központja.", ro: "Centrul producției de zahăr din Panama.", en: "Center of Panamanian sugar production." },
    facts: {
      de: ["Große Plantagengebiete.", "Wichtiger Arbeitgeber.", "Export von Zuckerprodukten.", "Moderne Zuckerfabrikation."],
      hu: ["Nagy ültetvényterületek.", "Fontos munkaadó.", "Cukortermékek exportja.", "Modern cukorgyártás."],
      ro: ["Zone mari de plantații.", "Angajator important.", "Export de produse din zahăr.", "Fabricare modernă a zahărului.", "Export de produse din zahăr."],
      en: ["Large plantation areas.", "Major employer.", "Export of sugar products.", "Modern sugar manufacturing."]
    }, image: "/poi-images/industria-azucarera-economic-v2.webp"},
  {
    id: "terminal-gas-natural-economic-v2",
    type: "industry",
    parent: "PA-8",
    coords: [-79.4, 8.9],
    name: { de: "Erdgasterminal Panama", hu: "Panama földgázterminál", ro: "Terminal Gaze Naturale Panama", en: "Panama Natural Gas Terminal" },
    description: { de: "Versorgungsanlage für Flüssigerdgas.", hu: "Cseppfolyósított földgáz-ellátó létesítmény.", ro: "Instalație de alimentare cu gaz natural lichefiat.", en: "Facility for liquefied natural gas supply." },
    facts: {
      de: ["Wichtige Energieversorgung.", "Moderne LNG-Lagerung.", "Unterstützt den Energiemix.", "Effiziente Verteilung."],
      hu: ["Fontos energiaellátás.", "Modern LNG-tárolás.", "Támogatja az energiamixet.", "Hatékony elosztás."],
      ro: ["Alimentare importantă cu energie.", "Stocare modernă GNL.", "Susține mixul energetic.", "Distribuție eficientă."],
      en: ["Crucial energy supply.", "Modern LNG storage.", "Supports the energy mix.", "Efficient distribution."]
    }, image: "/poi-images/terminal-gas-natural-economic-v2.webp"},
  {
    id: "industria-cemento-economic-v2",
    type: "industry",
    parent: "PA-8",
    coords: [-79.55, 8.9],
    name: { de: "Zementwerk Panama", hu: "Panamai cementgyár", ro: "Fabrica de ciment Panama", en: "Panama Cement Plant" },
    description: { de: "Produktionsstätte für Baumaterialien.", hu: "Építőanyag-gyártó üzem.", ro: "Unitate de producție pentru materiale de construcții.", en: "Manufacturing facility for construction materials." },
    facts: {
      de: ["Unterstützt nationale Bauprojekte.", "Große Produktionskapazität.", "Wichtiger Baustofflieferant.", "Moderne Zementverarbeitung."],
      hu: ["Támogatja a nemzeti építési projekteket.", "Nagy termelési kapacitás.", "Fontos építőanyag-beszállító.", "Modern cementfeldolgozás."],
      ro: ["Susține proiectele naționale de construcții.", "Capacitate mare de producție.", "Furnizor important de materiale.", "Procesare modernă a cimentului."],
      en: ["Supports national construction projects.", "High production capacity.", "Key building material supplier.", "Modern cement processing."]
    }
  },
  {
    id: "zona-logistica-tocumen-economic-v2",
    type: "industry",
    parent: "PA-8",
    coords: [-79.4, 9.05],
    name: { de: "Logistikzentrum Tocumen", hu: "Tocumen Logisztikai Központ", ro: "Centru Logistic Tocumen", en: "Tocumen Logistics Center" },
    description: { de: "Wichtiges Drehkreuz am Flughafen Tocumen.", hu: "Fontos csomópont a Tocumen repülőtéren.", ro: "Nod logistic important pe aeroportul Tocumen.", en: "Major hub at Tocumen Airport." },
    facts: {
      de: ["Luftfracht-Drehkreuz.", "Schnelle Warenverteilung.", "Logistische Unterstützung.", "Effiziente Lagerlogistik."],
      hu: ["Légiáru-csomópont.", "Gyors áruelosztás.", "Logisztikai támogatás.", "Hatékony raktárlogisztika."],
      ro: ["Nod de transport aerian.", "Distribuție rapidă a mărfurilor.", "Suport logistic.", "Logistică eficientă de depozitare."],
      en: ["Air cargo hub.", "Fast goods distribution.", "Logistical support.", "Efficient warehouse logistics."]
    }, image: "/poi-images/zona-logistica-tocumen-economic-v2.webp"},
  {
    id: "puerto-vacamonte-economic-v2",
    type: "port",
    parent: "PA-8",
    coords: [-79.65, 8.85],
    name: { de: "Hafen Vacamonte", hu: "Vacamonte kikötő", ro: "Portul Vacamonte", en: "Port of Vacamonte" },
    description: { de: "Wichtiger Hafen für die Fischereiindustrie.", hu: "Fontos kikötő a halászati ipar számára.", ro: "Port important pentru industria pescuitului.", en: "Important port for the fishing industry." },
    facts: {
      de: ["Zentrum für Fischverarbeitung.", "Moderne Hafenanlagen.", "Umschlag von Fischprodukten.", "Arbeitsplatzschwerpunkt."],
      hu: ["Haleldolgozási központ.", "Modern kikötői létesítmények.", "Haltermékek átrakodása.", "Foglalkoztatási központ."],
      ro: ["Centru de procesare a peștelui.", "Facilități portuare moderne.", "Tranzitul produselor din pește.", "Punct focal pentru ocuparea forței de muncă."],
      en: ["Fishing processing hub.", "Modern port facilities.", "Transshipment of fish products.", "Key employment site."]
    }, image: "/poi-images/puerto-vacamonte-economic-v2.webp"},
  {
    id: "industria-papel-economic-v2",
    type: "industry",
    parent: "PA-8",
    coords: [-79.52, 8.98],
    name: { de: "Papierindustrie Panama", hu: "Panamai papíripar", ro: "Industria hârtiei Panama", en: "Panama Paper Industry" },
    description: { de: "Herstellung von Verpackungsmaterialien.", hu: "Csomagolóanyagok gyártása.", ro: "Producția de materiale de ambalare.", en: "Production of packaging materials." },
    facts: {
      de: ["Unterstützt den Handel.", "Moderne Produktionsanlagen.", "Wichtiger Exportmarkt.", "Effiziente Verarbeitung."],
      hu: ["Támogatja a kereskedelmet.", "Modern gyártóüzemek.", "Fontos exportpiac.", "Hatékony feldolgozás."],
      ro: ["Susține comerțul.", "Facilități de producție moderne.", "Piață importantă de export.", "Procesare eficientă."],
      en: ["Supports trade sector.", "Modern production facilities.", "Significant export market.", "Efficient processing."]
    }
  },
  {
    id: "zona-industrial-juan-diaz-economic-v2",
    type: "industry",
    parent: "PA-8",
    coords: [-79.45, 9.0],
    name: { de: "Industriegebiet Juan Díaz", hu: "Juan Díaz Ipari Zóna", ro: "Zona Industrială Juan Díaz", en: "Juan Diaz Industrial Zone" },
    description: { de: "Großes Areal für diverse Fertigungsbetriebe.", hu: "Nagy terület különféle gyártóüzemek számára.", ro: "Zonă mare pentru diverse unități de producție.", en: "Large area for various manufacturing firms." },
    facts: {
      de: ["Vielfältige Industriebetriebe.", "Wichtige Produktionsstätte.", "Arbeitsplätze für den Großraum.", "Günstige Verkehrsanbindung."],
      hu: ["Változatos ipari létesítmények.", "Fontos termelőhely.", "Munkahelyek a nagyvárosi térségben.", "Kedvező közlekedési kapcsolatok."],
      ro: ["Diverse unități industriale.", "Centru important de producție.", "Locuri de muncă pentru zona metropolitană.", "Conexiuni de transport avantajoase."],
      en: ["Diverse industrial enterprises.", "Important manufacturing site.", "Jobs for the metropolitan area.", "Favorable transport links."]
    }
  },
  {
    id: "terminal-ferroviaria-economic-v2",
    type: "industry",
    parent: "PA-8",
    coords: [-79.9, 9.35],
    name: { de: "Eisenbahnterminal Colón", hu: "Colón Vasúti Terminál", ro: "Terminal Feroviar Colón", en: "Colon Rail Terminal" },
    description: { de: "Drehkreuz für den Schienentransport.", hu: "A vasúti szállítás csomópontja.", ro: "Nod pentru transportul feroviar.", en: "Hub for rail transport." },
    facts: {
      de: ["Wichtiger Güterverkehr.", "Verbindung zwischen den Ozeanen.", "Effiziente Logistik.", "Ergänzt den Schiffsverkehr."],
      hu: ["Fontos teherforgalom.", "Összeköttetés az óceánok között.", "Hatékony logisztika.", "Kiegészíti a hajóforgalmat."],
      ro: ["Transport important de marfă.", "Conexiune între oceane.", "Logistică eficientă.", "Completează transportul maritim."],
      en: ["Vital freight transport.", "Connection between oceans.", "Efficient logistics.", "Complements shipping operations."]
    }, image: "/poi-images/terminal-ferroviaria-economic-v2.webp"},
  {
    id: "centro-logistico-panama-pacific-economic-v2",
    type: "industry",
    parent: "PA-8",
    coords: [-79.6, 8.95],
    name: { de: "Panama Pacifico Logistics", hu: "Panama Pacifico Logisztika", ro: "Centru Logistic Panama Pacifico", en: "Panama Pacifico Logistics" },
    description: { de: "Moderne Logistik- und Industriezone.", hu: "Modern logisztikai és ipari övezet.", ro: "Zonă logistică și industrială modernă.", en: "Modern logistics and industrial zone." },
    facts: {
      de: ["Internationales Geschäftszentrum.", "Moderne Infrastruktur.", "Fokus auf Logistik.", "Attraktiv für globale Investoren."],
      hu: ["Nemzetközi üzleti központ.", "Modern infrastruktúra.", "Logisztikai fókusz.", "Vonzó globális befektetők számára."],
      ro: ["Centru de afaceri internațional.", "Infrastructură modernă.", "Focus pe logistică.", "Atractiv pentru investitorii globali."],
      en: ["International business hub.", "Modern infrastructure.", "Logistics-focused.", "Attractive to global investors."]
    }, image: "/poi-images/centro-logistico-panama-pacific-economic-v2.webp"},
  {
    id: "puerto-pedregal-economic-v2",
    type: "port",
    parent: "PA-4",
    coords: [-82.4, 8.4],
    name: { de: "Hafen Pedregal", hu: "Pedregal kikötő", ro: "Portul Pedregal", en: "Port of Pedregal" },
    description: { de: "Regionaler Hafen bei David.", hu: "Regionális kikötő David mellett.", ro: "Port regional lângă David.", en: "Regional port near David." },
    facts: {
      de: ["Wichtig für lokalen Handel.", "Unterstützt den Agrarsektor.", "Regionale Fracht.", "Küstennaher Betrieb."],
      hu: ["Fontos a helyi kereskedelem számára.", "Támogatja az agrárszektort.", "Regionális rakomány.", "Part menti üzemeltetés."],
      ro: ["Important pentru comerțul local.", "Susține sectorul agricol.", "Marfă regională.", "Operațiuni de coastă."],
      en: ["Important for local trade.", "Supports agricultural sector.", "Regional freight.", "Coastal operations."]
    }, image: "/poi-images/puerto-pedregal-economic-v2.webp"},
  {
    id: "mina-oro-economic-v2",
    type: "industry",
    parent: "PA-8",
    coords: [-79.8, 9.1],
    name: { de: "Goldminenstandort Panama", hu: "Panama aranybánya helyszín", ro: "Locația minei de aur Panama", en: "Panama Gold Mining Site" },
    description: { de: "Bergbau für Edelmetalle.", hu: "Bányászat nemesfémek számára.", ro: "Minerit pentru metale prețioase.", en: "Mining operation for precious metals." },
    facts: {
      de: ["Edelmetallproduktion.", "Wichtiger Export.", "Industrieller Abbau.", "Wirtschaftlicher Beitrag."],
      hu: ["Nemesfém-termelés.", "Fontos export.", "Ipari kitermelés.", "Gazdasági hozzájárulás."],
      ro: ["Producție de metale prețioase.", "Export important.", "Minerit industrial.", "Contribuție economică."],
      en: ["Precious metal production.", "Key export.", "Industrial mining.", "Economic contribution."]
    }, image: "/poi-images/mina-oro-economic-v2.webp"},
  {
    id: "industria-bebidas-economic-v2",
    type: "industry",
    parent: "PA-8",
    coords: [-79.5, 9.0],
    name: { de: "Getränkeindustrie Panama", hu: "Panamai italipar", ro: "Industria băuturilor Panama", en: "Panama Beverage Industry" },
    description: { de: "Produktionsstätte für Getränke.", hu: "Italgyártó létesítmény.", ro: "Facilitate de producție a băuturilor.", en: "Beverage manufacturing facility." },
    facts: {
      de: ["Versorgung des Binnenmarktes.", "Exportiert regional.", "Moderne Abfüllanlagen.", "Starker Sektor."],
      hu: ["Belföldi piac ellátása.", "Regionális export.", "Modern palackozóüzemek.", "Erős szektor."],
      ro: ["Aprovizionarea pieței interne.", "Export regional.", "Facilități moderne de îmbuteliere.", "Sector puternic."],
      en: ["Serves domestic market.", "Regional exports.", "Modern bottling plants.", "Strong sector."]
    }, image: "/poi-images/industria-bebidas-economic-v2.webp"},
  {
    id: "parque-tecnologico-economic-v2",
    type: "industry",
    parent: "PA-8",
    coords: [-79.6, 8.9],
    name: { de: "Technologiepark Panama", hu: "Panama Technológiai Park", ro: "Parc Tehnologic Panama", en: "Panama Technology Park" },
    description: { de: "Zentrum für IT und Innovation.", hu: "IT és innovációs központ.", ro: "Centru pentru IT și inovare.", en: "Center for IT and innovation." },
    facts: {
      de: ["Fördert Technologietransfer.", "Wissenschaftliche Forschung.", "IT-Dienstleistungen.", "Innovationsstandort."],
      hu: ["Támogatja a technológiatranszfert.", "Tudományos kutatás.", "IT-szolgáltatások.", "Innovációs helyszín."],
      ro: ["Promovează transferul tehnologic.", "Cercetare științifică.", "Servicii IT.", "Centru de inovare."],
      en: ["Promotes technology transfer.", "Scientific research.", "IT services.", "Innovation hub."]
    }
  },
  {
    id: "industria-textil-economic-v2",
    type: "industry",
    parent: "PA-8",
    coords: [-79.5, 9.05],
    name: { de: "Textilindustrie Panama", hu: "Panamai textilipar", ro: "Industria textilă Panama", en: "Panama Textile Industry" },
    description: { de: "Herstellung von Bekleidung.", hu: "Ruházati termékek gyártása.", ro: "Fabricarea articolelor de îmbrăcăminte.", en: "Manufacturing of clothing products." },
    facts: {
      de: ["Lokale Produktion.", "Exportorientiert.", "Wichtiger Arbeitgeber.", "Moderne Fertigung."],
      hu: ["Helyi termelés.", "Exportorientált.", "Fontos munkaadó.", "Modern gyártás."],
      ro: ["Producție locală.", "Orientată spre export.", "Angajator important.", "Producție modernă."],
      en: ["Local production.", "Export-oriented.", "Important employer.", "Modern manufacturing."]
    }
  },
  {
    id: "terminal-granel-economic-v2",
    type: "port",
    parent: "PA-8",
    coords: [-79.55, 8.9],
    name: { de: "Schüttgutterminal Panama", hu: "Panama ömlesztettáru-terminál", ro: "Terminal de mărfuri în vrac Panama", en: "Panama Bulk Cargo Terminal" },
    description: { de: "Anlage zum Umschlag von losen Gütern.", hu: "Létesítmény ömlesztett áruk átrakodására.", ro: "Instalație pentru transbordarea mărfurilor în vrac.", en: "Facility for handling loose goods." },
    facts: {
      de: ["Umschlag von Getreide und Erzen.", "Effiziente Hafenlogistik.", "Wichtiger Import-Knoten.", "Moderne Fördertechnik."],
      hu: ["Gabona és ércek átrakodása.", "Hatékony kikötői logisztika.", "Fontos importcsomópont.", "Modern szállítószalag-technológia."],
      ro: ["Transbordarea cerealelor și minereurilor.", "Logistică portuară eficientă.", "Nod important de import.", "Tehnologie modernă de transport."],
      en: ["Handling grain and ores.", "Efficient port logistics.", "Key import hub.", "Modern conveyor technology."]
    }, image: "/poi-images/terminal-granel-economic-v2.webp"},
  {
    id: "zona-comercial-david-economic-v2",
    type: "industry",
    parent: "PA-4",
    coords: [-82.45, 8.45],
    name: { de: "Handelszentrum David", hu: "David kereskedelmi központ", ro: "Centru Comercial David", en: "David Commercial Center" },
    description: { de: "Hauptumschlagplatz für Waren im Westen.", hu: "Az áruk fő átrakodóhelye a nyugati régióban.", ro: "Principalul centru de schimb de mărfuri din vest.", en: "Main goods exchange hub in the west." },
    facts: {
      de: ["Regionale Versorgung.", "Wichtiger Handelsplatz.", "Unterstützt lokale Wirtschaft.", "Vielfältige Geschäfte."],
      hu: ["Regionális ellátás.", "Fontos kereskedelmi helyszín.", "Támogatja a helyi gazdaságot.", "Változatos üzletek."],
      ro: ["Aprovizionare regională.", "Piață comercială importantă.", "Susține economia locală.", "Diverse afaceri."],
      en: ["Regional supply center.", "Key trading post.", "Supports local economy.", "Diverse businesses."]
    }, image: "/poi-images/zona-comercial-david-economic-v2.webp"},
  {
    id: "puerto-baru-economic-v2",
    type: "port",
    parent: "PA-4",
    coords: [-82.8, 8.2],
    name: { de: "Hafen Puerto Armuelles", hu: "Puerto Armuelles kikötő", ro: "Portul Puerto Armuelles", en: "Port of Puerto Armuelles" },
    description: { de: "Ein bedeutender Hafen im Westen.", hu: "Jelentős kikötő a nyugati részen.", ro: "Un port important în vest.", en: "A significant port in the west." },
    facts: {
      de: ["Wichtig für Bananenexporte.", "Regionale wirtschaftliche Infrastruktur.", "Küstennaher Betrieb.", "Wichtiger Arbeitgeber."],
      hu: ["Fontos a banáinexport szempontjából.", "Regionális gazdasági infrastruktúra.", "Part menti üzemeltetés.", "Fontos munkaadó."],
      ro: ["Important pentru exporturile de banane.", "Infrastructură economică regională.", "Operațiuni de coastă.", "Angajator important."],
      en: ["Important for banana exports.", "Regional economic infrastructure.", "Coastal operations.", "Major regional employer."]
    }
  }
];

