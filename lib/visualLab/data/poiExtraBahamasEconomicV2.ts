import type { POI } from "./poi";

export const poiExtraBahamasEconomicV2: POI[] = [
  {
    id: "bs-nassau-cargo-port-economic-v2",
    type: "port",
    parent: "BS-NP",
    coords: [-77.348, 25.078],
    name: { de: "Nassau Cargo Port", hu: "Nassau cargo kikoto", ro: "Portul de marfuri Nassau", en: "Nassau Cargo Port" },
    description: {
      de: "Ein wichtiger Umschlagplatz fuer Container und Handelswaren in Nassau.",
      hu: "Fontos kontener- es arukikoto Nassauban.",
      ro: "Un punct important pentru containere si marfuri comerciale in Nassau.",
      en: "A key cargo hub for containers and trade goods in Nassau."
    },
    facts: {
      de: ["Zentraler Warenumschlag.", "Nahe dem Hauptstadtzentrum.", "Wichtig fuer Import und Export."],
      hu: ["Kozponti arukezelo pont.", "Kozel a fovaroshoz.", "Fontos import es export hely."],
      ro: ["Nod central pentru marfuri.", "Aproape de centrul capitalei.", "Important pentru import si export."],
      en: ["Central cargo transfer point.", "Close to the capital center.", "Important for imports and exports."]
    }
  },
  {
    id: "bs-prince-george-wharf-economic-v2",
    type: "port",
    parent: "BS-NP",
    coords: [-77.341, 25.0785],
    name: { de: "Prince George Wharf", hu: "Prince George rakpart", ro: "Debarcaderul Prince George", en: "Prince George Wharf" },
    description: {
      de: "Der wichtigste Kreuzfahrtanleger im Hafen von Nassau.",
      hu: "A legfontosabb utasszallito hajo-kikoto Nassau partjan.",
      ro: "Principalul chei pentru nave de croaziera din portul Nassau.",
      en: "The main cruise pier in Nassau Harbour."
    },
    facts: {
      de: ["Starker Tourismusfaktor.", "Direkter Zugang zur Altstadt.", "Hoher Passagierumschlag."],
      hu: ["Fontos turisztikai pont.", "Kozvetlen kapcsolat a belvarossal.", "Nagy utasforgalom."],
      ro: ["Factor puternic de turism.", "Acces direct la centrul vechi.", "Trafic mare de pasageri."],
      en: ["Major tourism driver.", "Direct access to downtown Nassau.", "High passenger traffic."]
    }
  },
  {
    id: "bs-arawak-cay-fish-port-economic-v2",
    type: "port",
    parent: "BS-NP",
    coords: [-77.353, 25.066],
    name: { de: "Arawak Cay Fish Port", hu: "Arawak Cay halaszati kikoto", ro: "Portul pescaresc Arawak Cay", en: "Arawak Cay Fish Port" },
    description: {
      de: "Ein lebhafter Fischerei- und Anlieferungspunkt westlich von Nassau.",
      hu: "Elo halaszati es beszallitasi pont Nassau nyugati reszen.",
      ro: "Un punct animat de pescuit si aprovizionare la vest de Nassau.",
      en: "A busy fishing and supply point west of Nassau."
    },
    facts: {
      de: ["Wichtiger Fangumschlag.", "Versorgt Restaurants und Maerkte.", "Nahe dem Stadtzentrum."],
      hu: ["Fontos halaszati rakodopont.", "Ellatja az ettermeket es piacokat.", "Kozel a belvaroshoz."],
      ro: ["Punct important pentru captura.", "Aprovizioneaza restaurante si piete.", "Aproape de centrul orasului."],
      en: ["Important catch landing point.", "Supplies restaurants and markets.", "Near the city center."]
    }
  },
  {
    id: "bs-clifton-pier-industrial-economic-v2",
    type: "industry",
    parent: "BS-NP",
    coords: [-77.43, 25.05],
    name: { de: "Clifton Pier Industrial Zone", hu: "Clifton Pier ipari zona", ro: "Zona industriala Clifton Pier", en: "Clifton Pier Industrial Zone" },
    description: {
      de: "Ein Industriegebiet mit Lagerung, Umschlag und kleinen Werkstaetten.",
      hu: "Ipari terulet raktarozassal, rakodassal es kis muhelyekkel.",
      ro: "O zona industriala cu depozitare, transbordare si ateliere mici.",
      en: "An industrial area with storage, transfer, and small workshops."
    },
    facts: {
      de: ["Logistiknahe Lage.", "Unterstuetzt Hafendienstleistungen.", "Typisches Gewerbegebiet."],
      hu: ["Logisztikai fekves.", "Tamogatja a kikotoi szolgaltatasokat.", "Tipikus ipari zona."],
      ro: ["Pozitie buna pentru logistica.", "Sprijina serviciile portuare.", "Zona comerciala tipica."],
      en: ["Logistics-friendly location.", "Supports port services.", "Typical business district."]
    }
  },
  {
    id: "bs-carmichael-road-business-economic-v2",
    type: "industry",
    parent: "BS-NP",
    coords: [-77.41, 25.035],
    name: { de: "Carmichael Road Business Park", hu: "Carmichael Road uzleti park", ro: "Parcul de afaceri Carmichael Road", en: "Carmichael Road Business Park" },
    description: {
      de: "Ein wachsendes Gewerbegebiet mit Lagern und Dienstleistern.",
      hu: "Novenvo kereskedelmi terulet raktarakkal es szolgaltatokkal.",
      ro: "O zona comerciala in crestere cu depozite si furnizori de servicii.",
      en: "A growing commercial area with warehouses and service providers."
    },
    facts: {
      de: ["Viele kleine Unternehmen.", "Wichtiger Arbeitsstandort.", "Nahe wichtiger Verkehrsachsen."],
      hu: ["Sok kis vallalkozas.", "Fontos munkahelyi helyszin.", "Kozel a fo kozlekedesi utakhoz."],
      ro: ["Multe afaceri mici.", "Loc important de munca.", "Aproape de artere principale."],
      en: ["Many small businesses.", "Important employment site.", "Near major road links."]
    }
  },
  {
    id: "bs-cowpen-road-industrial-economic-v2",
    type: "industry",
    parent: "BS-NP",
    coords: [-77.37, 25.03],
    name: { de: "Cowpen Road Industrial Strip", hu: "Cowpen Road ipari sav", ro: "Fasia industriala Cowpen Road", en: "Cowpen Road Industrial Strip" },
    description: {
      de: "Ein Band aus Werkstaetten, Depots und Handelsbetrieben im Stadtgebiet.",
      hu: "Muhelyek, depok es kereskedelmi cegek sora a varosban.",
      ro: "Un sir de ateliere, depozite si afaceri comerciale in oras.",
      en: "A stretch of workshops, depots, and trading businesses in the city."
    },
    facts: {
      de: ["Starker Kleinhandel.", "Verbindet mehrere Gewerbebloecke.", "Wichtiger Innenstadtrand."],
      hu: ["Eros kiskereskedelem.", "Tobb uzleti blokkot kot ossze.", "Fontos varosszeli zona."],
      ro: ["Comert local puternic.", "Leaga mai multe blocuri comerciale.", "Zona urbana importanta."],
      en: ["Strong local trade.", "Connects several business blocks.", "Important edge-of-city zone."]
    }
  },
  {
    id: "bs-lynden-pindling-cargo-economic-v2",
    type: "industry",
    parent: "BS-NP",
    coords: [-77.463, 25.049],
    name: { de: "Lynden Pindling Cargo Area", hu: "Lynden Pindling cargo zona", ro: "Zona cargo Lynden Pindling", en: "Lynden Pindling Cargo Area" },
    description: {
      de: "Ein Fracht- und Logistikbereich nahe dem Hauptflughafen.",
      hu: "Raklapos es logisztikai terulet a fo repuloter kozeleben.",
      ro: "O zona cargo si logistica aproape de aeroportul principal.",
      en: "A cargo and logistics zone near the main airport."
    },
    facts: {
      de: ["Wichtig fuer Luftfracht.", "Schnelle Verteilung auf der Insel.", "Grosser Logistikwert."],
      hu: ["Fontos a legi fuvarozasban.", "Gyors elosztas a szigeten.", "Nagy logisztikai ertek."],
      ro: ["Important pentru marfuri aeriene.", "Distribuire rapida pe insula.", "Valoare logistica mare."],
      en: ["Important for air freight.", "Fast distribution on the island.", "High logistics value."]
    }
  },
  {
    id: "bs-port-lucaya-marina-economic-v2",
    type: "port",
    parent: "BS-FP",
    coords: [-78.628, 26.5205],
    name: { de: "Port Lucaya Marina", hu: "Port Lucaya marina", ro: "Portul de iahturi Port Lucaya", en: "Port Lucaya Marina" },
    description: {
      de: "Ein marinaartiger Hafen mit Tourismus, Versorgung und Freizeitverkehr.",
      hu: "Turisztikai, ellatasi es szabadidos marina Freeport mellett.",
      ro: "O marina cu turism, aprovizionare si trafic de agrement.",
      en: "A marina harbor for tourism, provisioning, and leisure traffic."
    },
    facts: {
      de: ["Beliebt bei Yachtbesitzern.", "Wichtig fuer touristische Einnahmen.", "Nahe dem Resortviertel."],
      hu: ["Nehany jachtos kedvenc helye.", "Fontos turisztikai bevétel.", "Kozel az udulonegyedhez."],
      ro: ["Popular printre proprietarii de iahturi.", "Important pentru veniturile turistice.", "Aproape de zona de resort."],
      en: ["Popular with yacht owners.", "Important for tourism income.", "Near the resort district."]
    }
  },
  {
    id: "bs-grand-bahama-shipyard-economic-v2",
    type: "industry",
    parent: "BS-FP",
    coords: [-78.695, 26.535],
    name: { de: "Grand Bahama Shipyard", hu: "Grand Bahama hajojavito", ro: "Santierul naval Grand Bahama", en: "Grand Bahama Shipyard" },
    description: {
      de: "Eine grosse Anlage fuer Schiffreparatur und maritime Dienstleistungen.",
      hu: "Nagy uzem hajojavitasra es tengeri szolgaltatasokra.",
      ro: "O facilitate mare pentru reparatii navale si servicii maritime.",
      en: "A major facility for ship repair and marine services."
    },
    facts: {
      de: ["Starker Industrieanker.", "Bedient internationale Schiffe.", "Wichtiger Arbeitgeber."],
      hu: ["Eros ipari kotero.", "Nemzetkozi hajokat szolgal ki.", "Fontos munkaltato."],
      ro: ["Ancor industrial puternic.", "Deserveste nave internationale.", "Angajator important."],
      en: ["Strong industrial anchor.", "Serves international ships.", "Major employer."]
    }
  },
  {
    id: "bs-freeport-industrial-park-economic-v2",
    type: "industry",
    parent: "BS-FP",
    coords: [-78.69, 26.52],
    name: { de: "Freeport Industrial Park", hu: "Freeport ipari park", ro: "Parcul industrial Freeport", en: "Freeport Industrial Park" },
    description: {
      de: "Das klassische Industrie- und Lagergebiet von Freeport.",
      hu: "A klasszikus ipari es raktari terulet Freeportban.",
      ro: "Zona clasica industriala si de depozitare din Freeport.",
      en: "The classic industrial and warehouse zone of Freeport."
    },
    facts: {
      de: ["Freihandelsnahe Lage.", "Viele Lagerhaeuser.", "Wichtiger Standort fuer Handel."],
      hu: ["Szabadkereskedelmi kozelseg.", "Sok raktar.", "Fontos kereskedelmi helyszin."],
      ro: ["Aproape de zona libera.", "Multe depozite.", "Loc important pentru comert."],
      en: ["Near the free trade zone.", "Many warehouses.", "Important trade location."]
    }
  },
  {
    id: "bs-west-end-ferry-port-economic-v2",
    type: "port",
    parent: "BS-FP",
    coords: [-78.979, 26.687],
    name: { de: "West End Ferry Port", hu: "West End komp kikoto", ro: "Portul de feribot West End", en: "West End Ferry Port" },
    description: {
      de: "Ein Faehranleger mit Verbindungen zwischen Grand Bahama und Florida.",
      hu: "Kompkikoto Grand Bahama es Florida kozott.",
      ro: "Un port de feribot cu legaturi intre Grand Bahama si Florida.",
      en: "A ferry terminal connecting Grand Bahama and Florida."
    },
    facts: {
      de: ["Nahe der US-Route.", "Wichtige Grenznahe.", "Starker Passagierverkehr."],
      hu: ["Kozel az amerikai utvonalhoz.", "Fontos kozelseg az USA-hoz.", "Eros utasforgalom."],
      ro: ["Aproape de ruta spre SUA.", "Punct important de proximitate.", "Trafic mare de pasageri."],
      en: ["Near the US route.", "Important cross-border link.", "Strong passenger traffic."]
    }
  },
  {
    id: "bs-marsh-harbour-boat-yard-economic-v2",
    type: "industry",
    parent: "BS-AB",
    coords: [-77.063, 26.54],
    name: { de: "Marsh Harbour Boat Yard", hu: "Marsh Harbour hajomuhely", ro: "Atelierul naval Marsh Harbour", en: "Marsh Harbour Boat Yard" },
    description: {
      de: "Ein wichtiges Bootsbau- und Reparaturzentrum in den Abacos.",
      hu: "Fontos hajoeplteto es javitasi kozpont az Abacoson.",
      ro: "Un centru important de constructii si reparatii de barci in Abaco.",
      en: "An important boat-building and repair center in the Abacos."
    },
    facts: {
      de: ["Versorgt Segler und Fischer.", "Kern der Hafenwirtschaft.", "Kleine maritime Betriebe."],
      hu: ["Ellatja a vitorlazosokat es halaszokat.", "A kikotoi gazdasag kozepe.", "Kis tengeri vallalkozasok."],
      ro: ["Deserveste navigatorii si pescarii.", "Nucleul economiei portuare.", "Mici afaceri maritime."],
      en: ["Serves sailors and fishers.", "Core of the harbor economy.", "Small marine businesses."]
    }
  },
  {
    id: "bs-man-o-war-cay-boatbuilders-economic-v2",
    type: "industry",
    parent: "BS-AB",
    coords: [-77.001, 26.591],
    name: { de: "Man-O-War Cay Boatbuilders", hu: "Man-O-War Cay hajoeptok", ro: "Constructorii de barci Man-O-War Cay", en: "Man-O-War Cay Boatbuilders" },
    description: {
      de: "Ein traditionelles Bootsbauviertel mit langem Handwerkserbe.",
      hu: "Hagyomanyos hajoeptoi negyed hosszu szakmai multtal.",
      ro: "Un cartier traditional de constructii navale cu traditie lunga.",
      en: "A traditional boat-building district with a long craft heritage."
    },
    facts: {
      de: ["Beruehmte Handwerksbetriebe.", "Starker Export von Holzarbeit.", "Lokale Wirtschaftsikone."],
      hu: ["Hires kezmuves muhelyek.", "Faipari export is jelen van.", "Helyi gazdasagi ikon."],
      ro: ["Ateliere artizanale cunoscute.", "Export local de lucrari din lemn.", "Icon al economiei locale."],
      en: ["Famous craft workshops.", "Local timber exports.", "Economic icon of the island."]
    }
  },
  {
    id: "bs-treasure-cay-marina-economic-v2",
    type: "port",
    parent: "BS-SA",
    coords: [-77.292, 26.663],
    name: { de: "Treasure Cay Marina", hu: "Treasure Cay marina", ro: "Marina Treasure Cay", en: "Treasure Cay Marina" },
    description: {
      de: "Eine Tourismusmarina mit Versorgungs- und Liegeplaetzen.",
      hu: "Turisztikai marina ellatasi es kotesi helyekkel.",
      ro: "O marina turistica cu locuri de aprovizionare si acostare.",
      en: "A tourism marina with provisioning and berthing facilities."
    },
    facts: {
      de: ["Beliebt fuer Yachten.", "Wichtige Einnahmen fuer die Insel.", "Nah an Resort und Strand."],
      hu: ["Nehany jacht kedvelt helye.", "Fontos bevetel a szigetnek.", "Kozel az udulohoz es a parthoz."],
      ro: ["Populara pentru iahturi.", "Venit important pentru insula.", "Aproape de resort si plaja."],
      en: ["Popular with yachts.", "Important income for the island.", "Near resort and beach."]
    }
  },
  {
    id: "bs-green-turtle-cay-dock-economic-v2",
    type: "port",
    parent: "BS-NO",
    coords: [-77.333, 26.767],
    name: { de: "Green Turtle Cay Dock", hu: "Green Turtle Cay rakpart", ro: "Debarcaderul Green Turtle Cay", en: "Green Turtle Cay Dock" },
    description: {
      de: "Ein kleiner, aber wichtiger Dock fuer Versorgung und Inselverkehr.",
      hu: "Kicsi, de fontos rakpart ellatasra es szigetkozlekedesre.",
      ro: "Un debarcader mic, dar important pentru aprovizionare si trafic insular.",
      en: "A small but important dock for supply and island traffic."
    },
    facts: {
      de: ["Versorgt die Gemeinde.", "Wichtige Postboot-Haltstelle.", "Kern lokaler Verbindungen."],
      hu: ["Ellatja a kozoseget.", "Fontos postahajo megallo.", "A helyi kapcsolatok kozepe."],
      ro: ["Aprovizioneaza comunitatea.", "Escala importanta pentru posta maritima.", "Nucleu de conexiuni locale."],
      en: ["Supplies the community.", "Important mailboat stop.", "Core local connection point."]
    }
  },
  {
    id: "bs-spanish-wells-lobster-port-economic-v2",
    type: "port",
    parent: "BS-HI",
    coords: [-76.755, 25.541],
    name: { de: "Spanish Wells Lobster Port", hu: "Spanish Wells homarkikoto", ro: "Portul de homari Spanish Wells", en: "Spanish Wells Lobster Port" },
    description: {
      de: "Ein Fischerei- und Hummerumschlagplatz auf Spanish Wells.",
      hu: "Halaszati es homar rakodopont Spanish Wellsben.",
      ro: "Un punct de incarcare pentru pescuit si homari in Spanish Wells.",
      en: "A fishing and lobster landing port on Spanish Wells."
    },
    facts: {
      de: ["Wichtige Fangbasis.", "Starker Export von Meeresfruechten.", "Pragt die lokale Wirtschaft."],
      hu: ["Fontos fogasi bazis.", "Eros tengeri export.", "Meghatarozza a helyi gazdasagot."],
      ro: ["Baza importanta pentru captura.", "Export puternic de fructe de mare.", "Defineste economia locala."],
      en: ["Important landing base.", "Strong seafood exports.", "Shapes the local economy."]
    }
  },
  {
    id: "bs-north-eleuthera-fish-plant-economic-v2",
    type: "industry",
    parent: "BS-NE",
    coords: [-76.658, 25.464],
    name: { de: "North Eleuthera Fish Plant", hu: "North Eleuthera halkomu", ro: "Unitatea de peste North Eleuthera", en: "North Eleuthera Fish Plant" },
    description: {
      de: "Eine Verarbeitungsanlage fuer Fisch und Meeresfruechte.",
      hu: "Halas es tengeri gyumolcs feldolgozo uzem.",
      ro: "O unitate de procesare pentru peste si fructe de mare.",
      en: "A processing plant for fish and seafood."
    },
    facts: {
      de: ["Kuehlkette fuer Fang.", "Versorgt Inselmaerkte.", "Unterstuetzt Fischerfamilien."],
      hu: ["Hideglanc a fogasokhoz.", "Ellatja a szigeti piacokat.", "Tamogatja a halasz csaladokat."],
      ro: ["Lant frigorific pentru captura.", "Aprovizioneaza pietele insulei.", "Sprijina familiile de pescari."],
      en: ["Cold chain for catch.", "Supplies island markets.", "Supports fishing families."]
    }
  },
  {
    id: "bs-governors-harbour-pineapple-economic-v2",
    type: "industry",
    parent: "BS-CE",
    coords: [-76.242, 25.197],
    name: { de: "Governor's Harbour Pineapple House", hu: "Governor's Harbour ananasz feldolgozo", ro: "Casa ananasului din Governor's Harbour", en: "Governor's Harbour Pineapple House" },
    description: {
      de: "Ein Verarbeitungs- und Sammelpunkt fuer lokale Erzeugnisse.",
      hu: "Feldolgozo es gyujto pont helyi termekekhez.",
      ro: "Un punct de procesare si colectare pentru produse locale.",
      en: "A collection and processing point for local produce."
    },
    facts: {
      de: ["Verknuepft Landwirtschaft und Handel.", "Wichtiger Inselbetrieb.", "Starke regionale Rolle."],
      hu: ["Kapcsolja a mezogazdasagot es a kereskedelmet.", "Fontos szigeti uzem.", "Eros regionlis szerep."],
      ro: ["Leaga agricultura de comert.", "Operatiune importanta pe insula.", "Rol regional puternic."],
      en: ["Links farming and trade.", "Important island operation.", "Strong regional role."]
    }
  },
  {
    id: "bs-rock-sound-salt-works-economic-v2",
    type: "industry",
    parent: "BS-SE",
    coords: [-76.196, 24.898],
    name: { de: "Rock Sound Salt Works", hu: "Rock Sound solelo", ro: "Salina Rock Sound", en: "Rock Sound Salt Works" },
    description: {
      de: "Ein Produktionsstandort fuer Salz und andere Rohprodukte.",
      hu: "So- es nyersanyag-termelo helyszin.",
      ro: "Un loc de productie pentru sare si alte materii prime.",
      en: "A production site for salt and other raw goods."
    },
    facts: {
      de: ["Traditioneller Inselbetrieb.", "Harte, aber stabile Arbeit.", "Lokaler Exportwert."],
      hu: ["Hagyomanyos szigeti uzem.", "Nehez, de stabil munka.", "Helyi exportertek."],
      ro: ["Operatiune traditionala insulara.", "Munca grea, dar stabila.", "Valoare de export locala."],
      en: ["Traditional island operation.", "Hard but steady work.", "Local export value."]
    }
  },
  {
    id: "bs-tarpum-bay-farming-depot-economic-v2",
    type: "industry",
    parent: "BS-SE",
    coords: [-76.198, 24.965],
    name: { de: "Tarpum Bay Farming Depot", hu: "Tarpum Bay gazdasagi depot", ro: "Depozitul agricol Tarpum Bay", en: "Tarpum Bay Farming Depot" },
    description: {
      de: "Ein Depot fuer landwirtschaftliche Produkte und lokale Verteilung.",
      hu: "Mezogazdasagi termekek es helyi elosztas depotja.",
      ro: "Un depozit pentru produse agricole si distributie locala.",
      en: "A depot for agricultural goods and local distribution."
    },
    facts: {
      de: ["Unterstuetzt Farmer.", "Sammelt Erntegueter.", "Wichtig fuer den Inselnachschub."],
      hu: ["Tamogatja a farmerokat.", "Osszegyujti a termest.", "Fontos a szigeti ellatasban."],
      ro: ["Sprijina fermierii.", "Colecteaza recolta.", "Important pentru aprovizionarea insulei."],
      en: ["Supports farmers.", "Collects harvest goods.", "Important for island supply."]
    }
  },
  {
    id: "bs-george-town-marina-economic-v2",
    type: "port",
    parent: "BS-EX",
    coords: [-75.783, 23.517],
    name: { de: "George Town Marina", hu: "George Town marina", ro: "Marina George Town", en: "George Town Marina" },
    description: {
      de: "Ein zentrales Hafenbecken fuer Yachten, Versorgung und Charterboote.",
      hu: "Kozponti kikotoi medence jachtokhoz, ellathoz es charterekhez.",
      ro: "Un bazin portuar central pentru iahturi, aprovizionare si chartere.",
      en: "A central harbor basin for yachts, provisioning, and charter boats."
    },
    facts: {
      de: ["Starker Yachtverkehr.", "Knotenpunkt fuer Exuma-Reisen.", "Unterstuetzt den Tourismus."],
      hu: ["Eros jachtforgalom.", "Exuma utazasok csomopontja.", "Tamogatja a turizmust."],
      ro: ["Trafic intens de iahturi.", "Nod pentru calatoriile in Exuma.", "Sprijina turismul."],
      en: ["Heavy yacht traffic.", "Hub for Exuma travel.", "Supports tourism."]
    }
  },
  {
    id: "bs-rolleville-fisheries-coop-economic-v2",
    type: "industry",
    parent: "BS-EX",
    coords: [-76.012, 23.699],
    name: { de: "Rolleville Fisheries Co-op", hu: "Rolleville halaszati kooperativa", ro: "Cooperativa de pescuit Rolleville", en: "Rolleville Fisheries Co-op" },
    description: {
      de: "Eine Kooperative fuer Fang, Lagerung und Weiterverkauf.",
      hu: "Kooperativa halaszat, raktarozas es tovabertekesites celjabol.",
      ro: "O cooperativa pentru captura, depozitare si revanzare.",
      en: "A cooperative for catch, storage, and resale."
    },
    facts: {
      de: ["Starkt lokale Fischer.", "Koordiniert den Absatz.", "Wichtiger Gemeinschaftsbetrieb."],
      hu: ["Erositi a helyi halaszokat.", "Koordinalja az ertekesitest.", "Fontos kozossegi uzem."],
      ro: ["Intareste pescarii locali.", "Coordoneaza vanzarile.", "Operatiune comunitara importanta."],
      en: ["Strengthens local fishers.", "Coordinates sales.", "Important community enterprise."]
    }
  },
  {
    id: "bs-black-point-dock-economic-v2",
    type: "port",
    parent: "BS-EX",
    coords: [-76.333, 24.07],
    name: { de: "Black Point Dock", hu: "Black Point rakpart", ro: "Debarcaderul Black Point", en: "Black Point Dock" },
    description: {
      de: "Ein lokaler Anlegepunkt fuer Versorgung und kleine Frachtschiffe.",
      hu: "Helyi kotopont ellatasra es kisebb teherhajokra.",
      ro: "Un punct local de acostare pentru aprovizionare si nave mici de marfa.",
      en: "A local landing point for supplies and small cargo vessels."
    },
    facts: {
      de: ["Versorgt die umliegende Siedlung.", "Kleiner, aber regelmaessiger Verkehr.", "Wichtige Inselanbindung."],
      hu: ["Ellatja a kozelbeli telepulest.", "Kis, de rendszeres forgalom.", "Fontos szigeti kapcsolat."],
      ro: ["Aprovizioneaza asezarea apropiata.", "Trafic mic, dar regulat.", "Conexiune insulara importanta."],
      en: ["Supplies the nearby settlement.", "Small but regular traffic.", "Important island link."]
    }
  },
  {
    id: "bs-long-island-salt-works-economic-v2",
    type: "industry",
    parent: "BS-LI",
    coords: [-74.97, 23.17],
    name: { de: "Long Island Salt Works", hu: "Long Island solelo", ro: "Salina Long Island", en: "Long Island Salt Works" },
    description: {
      de: "Ein Salzbetrieb, der die traditionelle Produktion auf der Insel fortsetzt.",
      hu: "Soipari telep, amely folytatja a hagyomanyos termelest.",
      ro: "O exploatare de sare care continua productia traditionala pe insula.",
      en: "A salt operation continuing the island's traditional production."
    },
    facts: {
      de: ["Regionale Rohstoffbasis.", "Wichtiger Exportzweig.", "Verwurzelt in Inseltradition."],
      hu: ["Regionlis nyersanyagbázis.", "Fontos exportagazat.", "Beagyazva a szigeti hagyomanyba."],
      ro: ["Baza regionala de materii prime.", "Ramura importanta de export.", "Ancorata in traditia insulei."],
      en: ["Regional raw material base.", "Important export branch.", "Rooted in island tradition."]
    }
  },
  {
    id: "bs-deadmans-cay-agri-depot-economic-v2",
    type: "industry",
    parent: "BS-LI",
    coords: [-75.091, 23.175],
    name: { de: "Deadman's Cay Agri Depot", hu: "Deadman's Cay agrar depot", ro: "Depozitul agricol Deadman's Cay", en: "Deadman's Cay Agri Depot" },
    description: {
      de: "Ein Umschlagpunkt fuer landwirtschaftliche Waren im Sueden von Long Island.",
      hu: "Mezogazdasagi aruk atadopontja Long Island del reszen.",
      ro: "Un punct de transfer pentru marfuri agricole in sudul Long Island.",
      en: "A transfer point for agricultural goods in southern Long Island."
    },
    facts: {
      de: ["Unterstuetzt lokale Farmen.", "Wichtig fuer die Verteilung.", "Nahe dem Flughafen."],
      hu: ["Tamogatja a helyi farmokat.", "Fontos az elosztasban.", "Kozel a repuloterhez."],
      ro: ["Sprijina fermele locale.", "Important pentru distributie.", "Aproape de aeroport."],
      en: ["Supports local farms.", "Important for distribution.", "Near the airport."]
    }
  },
  {
    id: "bs-andros-crab-plant-economic-v2",
    type: "industry",
    parent: "BS-NO",
    coords: [-77.767, 24.7],
    name: { de: "Andros Crab Processing Plant", hu: "Andros rakk feldolgozo", ro: "Uzina de procesare a crabilor Andros", en: "Andros Crab Processing Plant" },
    description: {
      de: "Eine Verarbeitungsanlage fuer Krabben und Meeresprodukte aus Andros.",
      hu: "Rakk es tengeri termek feldolgozo uzem Androsrol.",
      ro: "O unitate de procesare pentru crabi si produse marine din Andros.",
      en: "A processing plant for crabs and marine products from Andros."
    },
    facts: {
      de: ["Starker Fangsektor.", "Unterstuetzt saisonale Arbeit.", "Wichtige Inselindustrie."],
      hu: ["Eros fogasi szektor.", "Szezonalis munkat tamogat.", "Fontos szigeti ipar."],
      ro: ["Sector puternic de captura.", "Sprijina munca sezoniera.", "Industrie importanta a insulei."],
      en: ["Strong catch sector.", "Supports seasonal work.", "Important island industry."]
    }
  },
  {
    id: "bs-congo-town-dock-economic-v2",
    type: "port",
    parent: "BS-SO",
    coords: [-77.583, 24.15],
    name: { de: "Congo Town Dock", hu: "Congo Town rakpart", ro: "Debarcaderul Congo Town", en: "Congo Town Dock" },
    description: {
      de: "Ein kleiner Dock fuer Versorgung und lokale Bootsverbindungen.",
      hu: "Kis rakpart ellatasra es helyi hajokhoz.",
      ro: "Un mic debarcader pentru aprovizionare si legaturi locale cu barca.",
      en: "A small dock for supply and local boat connections."
    },
    facts: {
      de: ["Wichtige Inselfunktion.", "Bedient den Sueden von Andros.", "Einfache, aber stabile Anbindung."],
      hu: ["Fontos szigeti szerep.", "Andros del reszet szolgalja ki.", "Egyszeru, de stabil kapcsolat."],
      ro: ["Functie insulara importanta.", "Deserveste sudul lui Andros.", "Conexiune simpla, dar stabila."],
      en: ["Important island function.", "Serves southern Andros.", "Simple but steady connection."]
    }
  },
  {
    id: "bs-kemps-bay-marina-economic-v2",
    type: "port",
    parent: "BS-SO",
    coords: [-77.633, 24.05],
    name: { de: "Kemp's Bay Marina", hu: "Kemp's Bay marina", ro: "Marina Kemp's Bay", en: "Kemp's Bay Marina" },
    description: {
      de: "Ein kleiner Yachthafen mit Versorgungs- und Liegeangeboten.",
      hu: "Kis jachtkikoto ellatassal es kotessel.",
      ro: "O mica marina cu servicii de aprovizionare si acostare.",
      en: "A small marina with provisioning and berthing services."
    },
    facts: {
      de: ["Wird von Fahrern und Seglern genutzt.", "Starker Freizeitverkehr.", "Lokaler Wirtschaftsmotor."],
      hu: ["Vitorlazosok es hajosok hasznaljak.", "Eros szabadidos forgalom.", "Helyi gazdasagi motor."],
      ro: ["Folosit de navigatori si marinari.", "Trafic puternic de agrement.", "Motor economic local."],
      en: ["Used by boaters and sailors.", "Strong leisure traffic.", "Local economic driver."]
    }
  },
  {
    id: "bs-matthew-town-salt-pans-economic-v2",
    type: "industry",
    parent: "BS-IN",
    coords: [-73.64, 20.95],
    name: { de: "Matthew Town Salt Pans", hu: "Matthew Town soleptek", ro: "Salinele Matthew Town", en: "Matthew Town Salt Pans" },
    description: {
      de: "Die Salzfelder von Great Inagua und ein Kernstandort der Inselwirtschaft.",
      hu: "Great Inagua somezei es a szigetgazdasag egyik kulcsa.",
      ro: "Sarmurile din Great Inagua si un loc central pentru economia insulei.",
      en: "The salt pans of Great Inagua and a core site of the island economy."
    },
    facts: {
      de: ["Grosser Rohstoffsektor.", "Pragt die Inselproduktion.", "Wichtige Exportbasis."],
      hu: ["Nagy nyersanyag-szektor.", "Meghatarozza a sziget termeleset.", "Fontos exportbazis."],
      ro: ["Sector important de materii prime.", "Defineste productia insulei.", "Baza importanta de export."],
      en: ["Major raw material sector.", "Defines island production.", "Important export base."]
    }
  },
  {
    id: "bs-abrahams-bay-trading-post-economic-v2",
    type: "industry",
    parent: "BS-MG",
    coords: [-72.95, 22.367],
    name: { de: "Abraham's Bay Trading Post", hu: "Abraham's Bay kereskedelmi allomas", ro: "Post comercial Abraham's Bay", en: "Abraham's Bay Trading Post" },
    description: {
      de: "Ein kleiner Handelsplatz fuer Nachschub und lokale Versorgung.",
      hu: "Kis kereskedelmi helyi ellatasra es utantoltese.",
      ro: "Un mic punct comercial pentru aprovizionare si distributie locala.",
      en: "A small trading post for supply and local distribution."
    },
    facts: {
      de: ["Wichtige abgelegene Anlaufstelle.", "Versorgt die Inselbewohner.", "Niedriges, aber essentielles Volumen."],
      hu: ["Fontos tavoli megallo.", "Ellatja a szigetlakokat.", "Alacsony, de lenyeges forgalom."],
      ro: ["Punct important, izolat.", "Aprovizioneaza locuitorii insulei.", "Volum mic, dar esential."],
      en: ["Important remote stop.", "Supplies island residents.", "Low but essential volume."]
    }
  }
];
