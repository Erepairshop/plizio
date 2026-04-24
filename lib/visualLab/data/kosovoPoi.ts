import type { POI } from "./poi";

export const kosovoCountry: POI = {
  id: "country-kosovo",
  type: "country",
  parent: "europe",
  coords: [20.903, 42.6026],
  name: {
    de: "Kosovo",
    hu: "Koszovó",
    ro: "Kosovo",
    en: "Kosovo"
  },
  description: {
    de: "Ein junger Staat im Balkan, bekannt für seine kulturelle Vielfalt.",
    hu: "Fiatal állam a Balkánon, amely kulturális sokszínűségéről ismert.",
    ro: "Un stat tânăr din Balcani, cunoscut pentru diversitatea sa culturală.",
    en: "A young state in the Balkans, known for its cultural diversity."
  },
  descriptionAdvanced: {
    de: "Kosovo ist ein Binnenstaat auf dem Westbalkan, der 2008 seine Unabhängigkeit erklärte.",
    hu: "Koszovó egy tengerpart nélküli állam a Nyugat-Balkánon, amely 2008-ban kiáltotta ki függetlenségét.",
    ro: "Kosovo este un stat fără ieșire la mare din Balcanii de Vest, care și-a declarat independența în 2008.",
    en: "Kosovo is a landlocked country in the Western Balkans that declared independence in 2008."
  },
  facts: {
    de: ["Pristina ist die Hauptstadt."],
    hu: ["Pristina a főváros."],
    ro: ["Pristina este capitala."],
    en: ["Pristina is the capital."]
  }
};

export const kosovoPois: POI[] = [
  // XK-001: Dečani
  {
    id: "xk-decan", type: "historical", parent: "XK-001", coords: [20.26, 42.54],
    name: { de: "Kloster Visoki Dečani", hu: "Visoki Dečani kolostor", ro: "Mănăstirea Visoki Dečani", en: "Visoki Dečani Monastery" },
    description: { de: "Bedeutendes serbisch-orthodoxes Kloster und UNESCO-Weltkulturerbe.", hu: "Jelentős szerb ortodox kolostor és UNESCO Világörökség.", ro: "Importantă mănăstire ortodoxă sârbă și patrimoniu mondial UNESCO.", en: "Important Serbian Orthodox monastery and UNESCO World Heritage site." },
    facts: {
      de: ["Gegründet im 14. Jahrhundert.", "Besitzt die größte mittelalterliche Kirche auf dem Balkan.", "Berühmt für seine über 1000 Fresken.", "UNESCO-Weltkulturerbe seit 2004."],
      hu: ["A 14. században alapították.", "A Balkán legnagyobb középkori templomával rendelkezik.", "Híres több mint 1000 freskójáról.", "2004 óta UNESCO Világörökség."],
      ro: ["Fondată în secolul al XIV-lea.", "Deține cea mai mare biserică medievală din Balcani.", "Faimoasă pentru cele peste 1000 de fresce.", "Patrimoniu mondial UNESCO din 2004."],
      en: ["Founded in the 14th century.", "Features the largest medieval church in the Balkans.", "Famous for its over 1,000 frescoes.", "UNESCO World Heritage site since 2004."]
    }
  },
  {
    id: "xk-decan-mountains", type: "landmark", parent: "XK-001", coords: [20.20, 42.53],
    name: { de: "Dečani-Berge", hu: "Dečani-hegyek", ro: "Munții Dečani", en: "Dečani Mountains" },
    description: { de: "Teil des Prokletije-Gebirges mit unberührter Natur.", hu: "A Prokletije-hegység része érintetlen természettel.", ro: "Parte a munților Prokletije cu natură virgină.", en: "Part of the Prokletije mountains with untouched nature." },
    facts: {
      de: ["Beliebtes Ziel für Wanderer.", "Heimat seltener Tierarten.", "Bietet spektakuläre Ausblicke auf die Täler."],
      hu: ["Népszerű túrázóhely.", "Ritka állatfajok otthona.", "Látványos kilátást nyújt a völgyekre."],
      ro: ["Destinație populară pentru drumeții.", "Adăpostește specii de animale rare.", "Oferă vederi spectaculoase asupra văilor."],
      en: ["Popular destination for hikers.", "Home to rare animal species.", "Offers spectacular views of the valleys."]
    }
  },
  // XK-002: Đakovica
  {
    id: "xk-gjakova", type: "city", parent: "XK-002", coords: [20.43, 42.38],
    name: { de: "Gjakova", hu: "Gjakova", ro: "Gjakova", en: "Gjakova" },
    description: { de: "Historische Stadt bekannt für ihren alten Basar.", hu: "Történelmi város, amely az öreg bazárjáról ismert.", ro: "Oraș istoric cunoscut pentru vechiul său bazar.", en: "Historic city known for its old bazaar." },
    facts: {
      de: ["Beherbergt den längsten Basar im Kosovo.", "Wichtiges kulturelles Zentrum.", "Im Krieg 1999 schwer beschädigt und wiederaufgebaut."],
      hu: ["Itt található Koszovó leghosszabb bazárja.", "Fontos kulturális központ.", "Az 1999-es háborúban súlyosan megsérült, majd újjáépítették."],
      ro: ["Găzduiește cel mai lung bazar din Kosovo.", "Important centru cultural.", "Grav avariat în războiul din 1999 și reconstruit."],
      en: ["Houses the longest bazaar in Kosovo.", "Important cultural center.", "Heavily damaged in the 1999 war and rebuilt."]
    }
  },
  {
    id: "xk-hadum-mosque", type: "historical", parent: "XK-002", coords: [20.42, 42.38],
    name: { de: "Hadum-Moschee", hu: "Hadum-mecset", ro: "Moscheea Hadum", en: "Hadum Mosque" },
    description: { de: "Osmanische Moschee aus dem 16. Jahrhundert.", hu: "16. századi oszmán mecset.", ro: "Moschee otomană din secolul al XVI-lea.", en: "16th-century Ottoman mosque." },
    facts: {
      de: ["Erbaut im Jahr 1594.", "Meisterwerk der klassischen osmanischen Architektur.", "Wurde während des Kosovo-Krieges beschädigt."],
      hu: ["1594-ben épült.", "A klasszikus oszmán építészet remekműve.", "A koszovói háború alatt megsérült."],
      ro: ["Construită în anul 1594.", "Capodoperă a arhitecturii otomane clasice.", "A fost avariată în timpul războiului din Kosovo."],
      en: ["Built in 1594.", "Masterpiece of classical Ottoman architecture.", "Was damaged during the Kosovo war."]
    }
  },
  // XK-003: Dragaš
  {
    id: "xk-dragash", type: "city", parent: "XK-003", coords: [20.64, 42.06],
    name: { de: "Dragash", hu: "Dragash", ro: "Dragash", en: "Dragash" },
    description: { de: "Südlichste Stadt des Kosovo in bergiger Umgebung.", hu: "Koszovó legdélibb városa hegyvidéki környezetben.", ro: "Cel mai sudic oraș din Kosovo în mediu montan.", en: "Southernmost town in Kosovo in a mountainous environment." },
    facts: {
      de: ["Zentrum der Gorani-Minderheit.", "Berühmt für seinen Schafskäse.", "Umgeben von den Gipfeln der Šar-Berge."],
      hu: ["A goráni kisebbség központja.", "Híres a juhsajtjáról.", "A Šar-hegység csúcsai veszik körül."],
      ro: ["Centrul minorității Gorani.", "Faimos pentru brânza sa de oaie.", "Înconjurat de vârfurile Munților Šar."],
      en: ["Center of the Gorani minority.", "Famous for its sheep cheese.", "Surrounded by the peaks of the Šar Mountains."]
    }
  },
  {
    id: "xk-restelica", type: "city", parent: "XK-003", coords: [20.67, 41.94],
    name: { de: "Restelica", hu: "Restelica", ro: "Restelica", en: "Restelica" },
    description: { de: "Eines der höchstgelegenen Dörfer im Kosovo.", hu: "Koszovó egyik legmagasabban fekvő faluja.", ro: "Unul dintre cele mai înalte sate din Kosovo.", en: "One of the highest villages in Kosovo." },
    facts: {
      de: ["Bekannt für traditionelle Architektur.", "Sehr schneereiche Winter.", "Teil der Gora-Region."],
      hu: ["Hagyományos építészetéről ismert.", "Nagyon havas telek jellemzik.", "A Gora régió része."],
      ro: ["Cunoscut pentru arhitectura tradițională.", "Ierni foarte bogate în zăpadă.", "Parte a regiunii Gora."],
      en: ["Known for traditional architecture.", "Very snowy winters.", "Part of the village in the Gora region."]
    }
  },
  // XK-004: Prizren
  {
    id: "xk-prizren", type: "city", parent: "XK-004", coords: [20.7397, 42.2138],
    name: { de: "Prizren", hu: "Prizren", ro: "Prizren", en: "Prizren" },
    description: { de: "Kulturelle Hauptstadt des Kosovo.", hu: "Koszovó kulturális fővárosa.", ro: "Capitala culturală a Kosovo.", en: "Cultural capital of Kosovo." },
    facts: {
      de: ["Gastgeber des Dokufest-Filmfestivals.", "Bekannt für die osmanische Steinbrücke.", "Sitz der Liga von Prizren."],
      hu: ["A Dokufest filmfesztivál házigazdája.", "Az oszmán kőhídjáról ismert.", "A Prizreni Liga székhelye."],
      ro: ["Gazda festivalului de film Dokufest.", "Cunoscut pentru podul de piatră otoman.", "Sediul Ligii de la Prizren."],
      en: ["Host of the Dokufest film festival.", "Known for its Ottoman stone bridge.", "Seat of the League of Prizren."]
    }
  },
  {
    id: "xk-kalaja-prizren", type: "historical", parent: "XK-004", coords: [20.74, 42.21],
    name: { de: "Festung von Prizren", hu: "Prizren vára", ro: "Cetatea Prizren", en: "Prizren Fortress" },
    description: { de: "Mittelalterliche Festung mit Blick über Prizren.", hu: "Középkori erőd, kilátással Prizrenre.", ro: "Cetate medievală cu vedere peste Prizren.", en: "Medieval fortress overlooking Prizren." },
    facts: {
      de: ["Bietet den besten Panoramablick auf die Stadt.", "Ursprünglich byzantinisch, später osmanisch erweitert.", "Nationaldenkmal des Kosovo."],
      hu: ["A legjobb panorámát nyújtja a városra.", "Eredetileg bizánci, később oszmán bővítéssel.", "Koszovó nemzeti műemléke."],
      ro: ["Oferă cea mai bună vedere panoramică asupra orașului.", "Originar bizantină, extinsă ulterior de otomani.", "Monument național al Kosovo."],
      en: ["Offers the best panoramic view of the city.", "Originally Byzantine, later expanded by the Ottomans.", "National monument of Kosovo."]
    }
  },
  // XK-005: Gnjilane
  {
    id: "xk-gjilan", type: "city", parent: "XK-005", coords: [21.46, 42.46],
    name: { de: "Gjilan", hu: "Gjilan", ro: "Gjilan", en: "Gjilan" },
    description: { de: "Wirtschaftszentrum im Osten des Kosovo.", hu: "Gazdasági központ Kelet-Koszovóban.", ro: "Centru economic în estul Kosovo.", en: "Economic center in eastern Kosovo." },
    facts: {
      de: ["Bekannt für seine Gastfreundschaft.", "Wichtiger Verkehrsknotenpunkt.", "Sitz mehrerer Universitäten."],
      hu: ["Vendégszeretetéről ismert.", "Fontos közlekedési csomópont.", "Több egyetem székhelye."],
      ro: ["Cunoscut pentru ospitalitatea sa.", "Important nod de transport.", "Sediul mai multor universități."],
      en: ["Known for its hospitality.", "Important transport hub.", "Seat of several universities."]
    }
  },
  {
    id: "xk-pogragja-castle", type: "historical", parent: "XK-005", coords: [21.58, 42.42],
    name: { de: "Burg Pogragja", hu: "Pogragja vára", ro: "Cetatea Pogragja", en: "Pogragja Castle" },
    description: { de: "Mittelalterliche Burgruine nahe Gjilan.", hu: "Középkori várrom Gjilan közelében.", ro: "Ruinele unei cetăți medievale lângă Gjilan.", en: "Medieval castle ruins near Gjilan." },
    facts: {
      de: ["Erbaut im 14. Jahrhundert.", "Diente dem Schutz der Handelswege.", "Strategisch auf einem Hügel gelegen."],
      hu: ["A 14. században épült.", "A kereskedelmi utak védelmét szolgálta.", "Stratégiailag egy dombon helyezkedik el."],
      ro: ["Construită în secolul al XIV-lea.", "A servit la protejarea rutelor comerciale.", "Situată strategic pe un deal."],
      en: ["Built in the 14th century.", "Served to protect trade routes.", "Strategically located on a hill."]
    }
  },
  // XK-006: Vitina
  {
    id: "xk-viti", type: "city", parent: "XK-006", coords: [21.35, 42.32],
    name: { de: "Viti", hu: "Viti", ro: "Viti", en: "Viti" },
    description: { de: "Stadt in einer fruchtbaren landwirtschaftlichen Region.", hu: "Város termékeny mezőgazdasági régióban.", ro: "Oraș într-o regiune agricolă fertilă.", en: "City in a fertile agricultural region." },
    facts: {
      de: ["Bekannt für den Anbau von Getreide und Tabak.", "Multikulturelle Bevölkerung.", "Nahe der Grenze zu Nordmazedonien."],
      hu: ["Gabona- és dohánytermesztéséről ismert.", "Multikulturális lakosság.", "Észak-Macedónia határának közelében."],
      ro: ["Cunoscut pentru cultivarea cerealelor și a tutunului.", "Populație multiculturală.", "Aproape de granița cu Macedonia de Nord."],
      en: ["Known for growing grain and tobacco.", "Multicultural population.", "Near the border with North Macedonia."]
    }
  },
  {
    id: "xk-letnica-church", type: "historical", parent: "XK-006", coords: [21.44, 42.29],
    name: { de: "Kirche von Letnica", hu: "Letnicai templom", ro: "Biserica din Letnica", en: "Letnica Church" },
    description: { de: "Berühmte Wallfahrtskirche Schwarze Madonna.", hu: "Híres zarándoktemplom a Fekete Madonnával.", ro: "Faimoasă biserică de pelerinaj a Madonei Negre.", en: "Famous pilgrimage church of the Black Madonna." },
    facts: {
      de: ["Mutter Teresa soll hier ihre Berufung gespürt haben.", "Zieht jährlich Tausende Pilger an.", "Schönes Beispiel für religiöse Architektur."],
      hu: ["Teréz anya állítólag itt érezte meg elhivatottságát.", "Évente több ezer zarándokot vonz.", "A vallási építészet szép példája."],
      ro: ["Se spune că Maica Tereza și-a simțit vocația aici.", "Atrage mii de pelerini anual.", "Exemplu frumos de arhitectură religioasă."],
      en: ["Mother Teresa is said to have felt her calling here.", "Attracts thousands of pilgrims annually.", "Beautiful example of religious architecture."]
    }
  },
  // XK-007: Kačanik
  {
    id: "xk-kacanik", type: "city", parent: "XK-007", coords: [21.26, 42.23],
    name: { de: "Kaçanik", hu: "Kaçanik", ro: "Kaçanik", en: "Kaçanik" },
    description: { de: "Stadt im Tal des Flusses Lepenc.", hu: "Város a Lepenc-folyó völgyében.", ro: "Oraș în valea râului Lepenc.", en: "Town in the valley of the Lepenc River." },
    facts: {
      de: ["Historisch wichtig für den Widerstand gegen das Osmanische Reich.", "Tor nach Nordmazedonien.", "Industrieller Standort."],
      hu: ["Történelmileg fontos az oszmánellenes ellenállásban.", "Kapu Észak-Macedónia felé.", "Ipari helyszín."],
      ro: ["Important istoric pentru rezistența împotriva Imperiului Otoman.", "Poarta către Macedonia de Nord.", "Locație industrială."],
      en: ["Historically important for resistance against the Ottoman Empire.", "Gateway to North Macedonia.", "Industrial location."]
    }
  },
  {
    id: "xk-lepenc-gorge", type: "landmark", parent: "XK-007", coords: [21.25, 42.22],
    name: { de: "Lepenc-Schlucht", hu: "Lepenc-szurdok", ro: "Defileul Lepenc", en: "Lepenc Gorge" },
    description: { de: "Malerische Schlucht entlang des Flusses Lepenc.", hu: "Festői szurdok a Lepenc-folyó mentén.", ro: "Defileu pitoresc de-a lungul râului Lepenc.", en: "Picturesque gorge along the Lepenc River." },
    facts: {
      de: ["Wichtiger ökologischer Korridor.", "Bietet dramatische Felsformationen.", "Hauptransportweg in den Süden."],
      hu: ["Fontos ökológiai folyosó.", "Drámai sziklaalakzatokat kínál.", "Fő szállítási útvonal dél felé."],
      ro: ["Important coridor ecologic.", "Oferă formațiuni stâncoase dramatice.", "Calea principală de transport către sud."],
      en: ["Important ecological corridor.", "Features dramatic rock formations.", "Main transport route to the south."]
    }
  },
  // XK-008: Štrpce
  {
    id: "xk-sar-mountains", type: "landmark", parent: "XK-008", coords: [20.8, 42.1],
    name: { de: "Šar-Berge", hu: "Šar-hegység", ro: "Munții Šar", en: "Šar Mountains" },
    description: { de: "Großes Gebirgsmassiv mit Nationalpark.", hu: "Hatalmas hegység nemzeti parkkal.", ro: "Masiv muntos mare cu parc național.", en: "Large mountain range with a national park." },
    facts: {
      de: ["Bekannt für die Šar-Planina-Hunde.", "Beliebt für Wintersport.", "Reich an endemischen Pflanzen."],
      hu: ["A Šar-hegyi kutyáról ismert.", "Népszerű a téli sportok kedvelői körében.", "Bővelkedik endemikus növényekben."],
      ro: ["Cunoscut pentru câinii de rasa Šar Planina.", "Popular pentru sporturi de iarnă.", "Bogat în plante endemice."],
      en: ["Known for the Šar Planina sheepdogs.", "Popular for winter sports.", "Rich in endemic plants."]
    }
  },
  {
    id: "xk-brezovica", type: "landmark", parent: "XK-008", coords: [21.00, 42.22],
    name: { de: "Brezovica", hu: "Brezovica", ro: "Brezovica", en: "Brezovica" },
    description: { de: "Bekanntestes Skigebiet im Kosovo.", hu: "Koszovó legismertebb síközpontja.", ro: "Cea mai cunoscută stațiune de schi din Kosovo.", en: "Most famous ski resort in Kosovo." },
    facts: {
      de: ["Höchster Skilift auf 2.500 Metern.", "Ganzjähriges Touristenziel.", "Atemberaubende alpine Landschaft."],
      hu: ["A legmagasabb sílift 2500 méteren van.", "Egész évben látogatható turisztikai célpont.", "Lélegzetelállító alpesi táj."],
      ro: ["Cea mai înaltă instalație de schi la 2.500 de metri.", "Destinație turistică pe tot parcursul anului.", "Peisaj alpin uluitor."],
      en: ["Highest ski lift at 2,500 meters.", "Year-round tourist destination.", "Breathtaking alpine scenery."]
    }
  },
  // XK-009: Leposavić
  {
    id: "xk-leposavic", type: "city", parent: "XK-009", coords: [20.80, 43.10],
    name: { de: "Leposavić", hu: "Leposavić", ro: "Leposavić", en: "Leposavić" },
    description: { de: "Nördlichste Stadt des Kosovo.", hu: "Koszovó legészakibb városa.", ro: "Cel mai nordic oraș din Kosovo.", en: "Northernmost town in Kosovo." },
    facts: {
      de: ["Bergbauzentrum.", "Überwiegend serbische Bevölkerung.", "An der Hauptstraße nach Serbien."],
      hu: ["Bányászati központ.", "Túlnyomórészt szerb lakosság.", "A Szerbiába vezető főút mentén."],
      ro: ["Centru minier.", "Populație predominant sârbă.", "Pe drumul principal spre Serbia."],
      en: ["Mining center.", "Predominantly Serbian population.", "On the main road to Serbia."]
    }
  },
  {
    id: "xk-kopaonik-south", type: "landmark", parent: "XK-009", coords: [20.90, 43.20],
    name: { de: "Kopaonik Süd", hu: "Dél-Kopaonik", ro: "Kopaonik de Sud", en: "Kopaonik South" },
    description: { de: "Südliche Ausläufer des Kopaonik-Gebirges.", hu: "A Kopaonik-hegység déli nyúlványai.", ro: "Ramificațiile sudice ale munților Kopaonik.", en: "Southern foothills of the Kopaonik mountains." },
    facts: {
      de: ["Reich an Mineralien.", "Bietet Wanderwege.", "Grenznah gelegen."],
      hu: ["Ásványokban gazdag.", "Túraútvonalakat kínál.", "A határ közelében fekszik."],
      ro: ["Bogat în minerale.", "Oferă trasee de drumeție.", "Situat aproape de graniță."],
      en: ["Rich in minerals.", "Offers hiking trails.", "Located near the border."]
    }
  },
  // XK-010: Podujevo
  {
    id: "xk-podujeva", type: "city", parent: "XK-010", coords: [21.19, 42.91],
    name: { de: "Podujeva", hu: "Podujeva", ro: "Podujeva", en: "Podujeva" },
    description: { de: "Stadt im Nordosten an der Grenze zu Serbien.", hu: "Város északkeleten, a szerb határ mentén.", ro: "Oraș în nord-est la granița cu Serbia.", en: "City in the northeast on the border with Serbia." },
    facts: {
      de: ["Wichtig für den grenzüberschreitenden Handel.", "Großer Basar.", "Zentrum der Llap-Region."],
      hu: ["Fontos a határon átnyúló kereskedelemben.", "Nagy bazárral rendelkezik.", "A Llap-régió központja."],
      ro: ["Important pentru comerțul transfrontalier.", "Bazar mare.", "Centrul regiunii Llap."],
      en: ["Important for cross-border trade.", "Large bazaar.", "Center of the Llap region."]
    }
  },
  {
    id: "xk-batllava", type: "landmark", parent: "XK-010", coords: [21.31, 42.82],
    name: { de: "Batllava-See", hu: "Batllava-tó", ro: "Lacul Batllava", en: "Batllava Lake" },
    description: { de: "Künstlicher See und wichtiges Trinkwasserreservoir.", hu: "Mesterséges tó és fontos ivóvíztározó.", ro: "Lac artificial și rezervor important de apă potabilă.", en: "Artificial lake and important drinking water reservoir." },
    facts: {
      de: ["Beliebt für Wochenendausflüge.", "Möglichkeit zum Schwimmen und Angeln.", "Versorgt Pristina mit Wasser."],
      hu: ["Népszerű hétvégi kirándulóhely.", "Úszási és horgászati lehetőség.", "Pristinát látja el vízzel."],
      ro: ["Destinație populară pentru excursii de weekend.", "Posibilități de înot și pescuit.", "Alimentează Pristina cu apă."],
      en: ["Popular weekend getaway destination.", "Opportunities for swimming and fishing.", "Supplies Pristina with water."]
    }
  },
  // XK-011: Zubin Potok
  {
    id: "xk-zubin-potok", type: "city", parent: "XK-011", coords: [20.68, 42.91],
    name: { de: "Zubin Potok", hu: "Zubin Potok", ro: "Zubin Potok", en: "Zubin Potok" },
    description: { de: "Stadt am Ufer des Gazivoda-Sees.", hu: "Város a Gazivoda-tó partján.", ro: "Oraș pe malul lacului Gazivoda.", en: "Town on the shores of Lake Gazivoda." },
    facts: {
      de: ["Zentrum im Norden.", "Landschaftlich schön gelegen.", "Überwiegend serbisch bewohnt."],
      hu: ["Északi központ.", "Szép fekvésű táj.", "Túlnyomórészt szerbek lakják."],
      ro: ["Centru în nord.", "Situat într-un peisaj frumos.", "Locuit predominant de sârbi."],
      en: ["Center in the north.", "Beautifully situated landscape.", "Predominantly Serbian inhabited."]
    }
  },
  {
    id: "xk-gazivoda", type: "landmark", parent: "XK-011", coords: [20.60, 42.92],
    name: { de: "Gazivoda-See", hu: "Gazivoda-tó", ro: "Lacul Gazivoda", en: "Gazivoda Lake" },
    description: { de: "Größter künstlicher See im Kosovo.", hu: "Koszovó legnagyobb mesterséges tava.", ro: "Cel mai mare lac artificial din Kosovo.", en: "Largest artificial lake in Kosovo." },
    facts: {
      de: ["9,2 Quadratkilometer groß.", "Bietet Energie durch Wasserkraft.", "Wichtig für die Landwirtschaft."],
      hu: ["9,2 négyzetkilométer területű.", "Vízi energiát szolgáltat.", "Fontos a mezőgazdaság számára."],
      ro: ["9,2 kilometri pătrați.", "Oferă energie hidroelectrică.", "Important pentru agricultură."],
      en: ["9.2 square kilometers in size.", "Provides hydroelectric power.", "Important for agriculture."]
    }
  },
  // XK-012: Zvečan
  {
    id: "xk-zvecan-fortress", type: "historical", parent: "XK-012", coords: [20.84, 42.90],
    name: { de: "Festung Zvečan", hu: "Zvečan vára", ro: "Cetatea Zvečan", en: "Zvečan Fortress" },
    description: { de: "Eine der ältesten Festungen auf dem Balkan.", hu: "A Balkán egyik legrégebbi erődje.", ro: "Una dintre cele mai vechi cetăți din Balcani.", en: "One of the oldest fortresses in the Balkans." },
    facts: {
      de: ["Auf einem erloschenen Vulkankegel erbaut.", "Strategischer Punkt seit der Antike.", "Bietet Blick auf Mitrovica."],
      hu: ["Egy kialudt vulkáni kúpon épült.", "Az ókor óta stratégiai pont.", "Kilátást nyújt Mitrovicára."],
      ro: ["Construită pe un con vulcanic stins.", "Punct strategic încă din antichitate.", "Oferă vedere spre Mitrovica."],
      en: ["Built on an extinct volcanic cone.", "Strategic point since antiquity.", "Offers a view of Mitrovica."]
    }
  },
  {
    id: "xk-sokolica", type: "historical", parent: "XK-012", coords: [20.86, 42.93],
    name: { de: "Kloster Sokolica", hu: "Sokolica kolostor", ro: "Mănăstirea Sokolica", en: "Sokolica Monastery" },
    description: { de: "Kloster aus dem 14. Jahrhundert.", hu: "14. századi kolostor.", ro: "Mănăstire din secolul al XIV-lea.", en: "14th-century monastery." },
    facts: {
      de: ["Berühmt für die Statue der Jungfrau Maria.", "Ort der Stille und Gebet.", "Feine Schnitzereien."],
      hu: ["Híres Szűz Mária-szobráról.", "A csend és az ima helye.", "Finom fafaragások díszítik."],
      ro: ["Faimoasă pentru statuia Fecioarei Maria.", "Loc de liniște și rugăciune.", "Sculpturi fine."],
      en: ["Famous for its statue of the Virgin Mary.", "Place of silence and prayer.", "Fine carvings."]
    }
  },
  // XK-013: Istok
  {
    id: "xk-istok", type: "city", parent: "XK-013", coords: [20.48, 42.78],
    name: { de: "Istog", hu: "Istog", ro: "Istog", en: "Istog" },
    description: { de: "Stadt bekannt für ihre Fischzucht und Quellen.", hu: "Város, amely haltenyésztéséről és forrásairól ismert.", ro: "Oraș cunoscut pentru piscicultură și izvoare.", en: "City known for its fish farming and springs." },
    facts: {
      de: ["Reich an Wasserressourcen.", "Berühmt für frische Forellen.", "Am Fuße der Mokra Gora Berge."],
      hu: ["Vízforrásokban gazdag.", "Híres a friss pisztrángról.", "A Mokra Gora hegyek lábánál fekszik."],
      ro: ["Bogat în resurse de apă.", "Faimos pentru păstrăvul proaspăt.", "La poalele munților Mokra Gora."],
      en: ["Rich in water resources.", "Famous for fresh trout.", "At the foot of the Mokra Gora mountains."]
    }
  },
  {
    id: "xk-banja-pejes", type: "landmark", parent: "XK-013", coords: [20.37, 42.70],
    name: { de: "Banja e Pejës", hu: "Banja e Pejës", ro: "Banja e Pejës", en: "Banja e Pejës" },
    description: { de: "Bekannter Kurort mit Thermalquellen.", hu: "Ismert gyógyfürdő termálforrásokkal.", ro: "Stațiune balneară cunoscută cu izvoare termale.", en: "Known spa resort with thermal springs." },
    facts: {
      de: ["Heilendes Wasser.", "Großes Wellness-Zentrum.", "Zieht viele Besucher zur Erholung an."],
      hu: ["Gyógyhatású víz.", "Nagy wellness központ.", "Sok látogatót vonz pihenésre."],
      ro: ["Apă curativă.", "Centru wellness mare.", "Atrage mulți vizitatori pentru recreere."],
      en: ["Healing water.", "Large wellness center.", "Attracts many visitors for recreation."]
    }
  },
  // XK-014: Priština
  {
    id: "xk-pristina", type: "city", parent: "XK-014", coords: [21.1655, 42.6629],
    name: { de: "Pristina", hu: "Pristina", ro: "Pristina", en: "Pristina" },
    description: { de: "Modernes Zentrum und Hauptstadt.", hu: "Modern központ és főváros.", ro: "Centru modern și capitală.", en: "Modern center and capital." },
    facts: {
      de: ["Größte Stadt des Kosovo.", "Lebhaftes Nachtleben.", "Sitz der Regierung."],
      hu: ["Koszovó legnagyobb városa.", "Élénk éjszakai élet.", "A kormány székhelye."],
      ro: ["Cel mai mare oraș din Kosovo.", "Viață de noapte vibrantă.", "Sediul guvernului."],
      en: ["Largest city in Kosovo.", "Vibrant nightlife.", "Seat of the government."]
    }
  },
  {
    id: "xk-gracanica", type: "historical", parent: "XK-014", coords: [21.19, 42.59],
    name: { de: "Kloster Gračanica", hu: "Gračanica kolostor", ro: "Mănăstirea Gračanica", en: "Gračanica Monastery" },
    description: { de: "Eines der bedeutendsten Bauwerke der byzantinischen Kunst.", hu: "A bizánci művészet egyik legjelentősebb alkotása.", ro: "Una dintre cele mai importante construcții ale artei bizantine.", en: "One of the most significant works of Byzantine art." },
    facts: {
      de: ["UNESCO-Weltkulturerbe.", "Erbaut von König Milutin.", "Besteht aus fünf Kuppeln."],
      hu: ["UNESCO Világörökség.", "Milutin király építtette.", "Öt kupolából áll."],
      ro: ["Patrimoniu mondial UNESCO.", "Construită de regele Milutin.", "Formată din cinci cupole."],
      en: ["UNESCO World Heritage site.", "Built by King Milutin.", "Consists of five domes."]
    }
  },
  {
    id: "xk-badovc", type: "landmark", parent: "XK-014", coords: [21.23, 42.61],
    name: { de: "Badovc-See", hu: "Badovc-tó", ro: "Lacul Badovc", en: "Badovc Lake" },
    description: { de: "Wichtiger Stausee nahe Pristina.", hu: "Fontos víztározó Pristina közelében.", ro: "Important lac de acumulare lângă Pristina.", en: "Important reservoir near Pristina." },
    facts: {
      de: ["Trinkwasserquelle für die Hauptstadt.", "Umgeben von Wäldern.", "Beliebt für Spaziergänge."],
      hu: ["A főváros ivóvízforrása.", "Erdők veszik körül.", "Népszerű sétahely."],
      ro: ["Sursă de apă potabilă pentru capitală.", "Înconjurat de păduri.", "Popular pentru plimbări."],
      en: ["Drinking water source for the capital.", "Surrounded by forests.", "Popular for walks."]
    }
  },
  {
    id: "xk-national-library", type: "landmark", parent: "XK-014", coords: [21.16, 42.65],
    name: { de: "Nationalbibliothek", hu: "Nemzeti Könyvtár", ro: "Biblioteca Națională", en: "National Library" },
    description: { de: "Architektonisch einzigartiges Gebäude in Pristina.", hu: "Építészetileg egyedülálló épület Pristinában.", ro: "Clădire unică din punct de vedere arhitectural în Pristina.", en: "Architecturally unique building in Pristina." },
    facts: {
      de: ["Bekannt für seine 99 Kuppeln.", "Verkleidet mit einem Metallnetz.", "Wurde 1982 eröffnet."],
      hu: ["99 kupolájáról ismert.", "Fémhálóval borított épület.", "1982-ben nyitották meg."],
      ro: ["Cunoscută pentru cele 99 de cupole ale sale.", "Învelită într-o plasă metalică.", "Deschisă în 1982."],
      en: ["Known for its 99 domes.", "Clad in a metal net.", "Opened in 1982."]
    }
  },
  {
    id: "xk-newborn", type: "landmark", parent: "XK-014", coords: [21.15, 42.66],
    name: { de: "Newborn-Denkmal", hu: "Newborn-emlékmű", ro: "Monumentul Newborn", en: "Newborn Monument" },
    description: { de: "Denkmal der Unabhängigkeit in Pristina.", hu: "A függetlenség emlékműve Pristinában.", ro: "Monumentul independenței din Pristina.", en: "Monument to independence in Pristina." },
    facts: {
      de: ["Enthüllt am Tag der Unabhängigkeit 2008.", "Wird jedes Jahr neu bemalt.", "Besteht aus sieben Buchstaben."],
      hu: ["2008-ban, a függetlenség napján avatták fel.", "Minden évben újra festik.", "Hét betűből áll."],
      ro: ["Dezvelit în ziua independenței din 2008.", "Repictat în fiecare an.", "Format din șapte litere."],
      en: ["Unveiled on Independence Day 2008.", "Repainted every year.", "Consists of seven letters."]
    }
  },
  // XK-015: Kosovska Kamenica
  {
    id: "xk-kamenica", type: "city", parent: "XK-015", coords: [21.58, 42.58],
    name: { de: "Kamenica", hu: "Kamenica", ro: "Kamenica", en: "Kamenica" },
    description: { de: "Stadt im Osten mit vielfältiger ethnischer Struktur.", hu: "Város keleten, változatos etnikai összetétellel.", ro: "Oraș în est cu structură etnică diversă.", en: "City in the east with a diverse ethnic structure." },
    facts: {
      de: ["Modell für multiethnisches Zusammenleben.", "Umgeben von sanften Hügeln.", "Gute Wandermöglichkeiten."],
      hu: ["A multietnikus együttélés modellje.", "Szelíd dombok veszik körül.", "Jó túrázási lehetőségek."],
      ro: ["Model de conviețuire multietnică.", "Înconjurat de dealuri domoale.", "Posibilități bune de drumeție."],
      en: ["Model for multi-ethnic coexistence.", "Surrounded by rolling hills.", "Good hiking opportunities."]
    }
  },
  {
    id: "xk-kamenica-castle", type: "historical", parent: "XK-015", coords: [21.60, 42.59],
    name: { de: "Festung Kamenica", hu: "Kamenica vára", ro: "Cetatea Kamenica", en: "Kamenica Castle" },
    description: { de: "Antike und mittelalterliche Festungsanlage.", hu: "Ókori és középkori erődítmény.", ro: "Situl fortificat antic și medieval.", en: "Ancient and medieval fortified site." },
    facts: {
      de: ["Archäologische Fundstätte.", "Kontrollierte Handelswege.", "Bietet weite Ausblicke."],
      hu: ["Régészeti lelőhely.", "Ellenőrizte a kereskedelmi utakat.", "Széles kilátást nyújt."],
      ro: ["Sit arheologic.", "Controla rutele comerciale.", "Oferă vederi largi."],
      en: ["Archaeological site.", "Controlled trade routes.", "Offers broad views."]
    }
  },
  // XK-016: Peć
  {
    id: "xk-peja", type: "city", parent: "XK-016", coords: [20.29, 42.66],
    name: { de: "Peja", hu: "Peja", ro: "Peja", en: "Peja" },
    description: { de: "Stadt am Fuße der Albanischen Alpen.", hu: "Város az Albán-Alpok lábánál.", ro: "Oraș la poalele Alpilor Albanezi.", en: "City at the foot of the Albanian Alps." },
    facts: {
      de: ["Bekannt für die Rugova-Schlucht.", "Bierbrauerei-Zentrum.", "Tor zum Tourismus im Westen."],
      hu: ["A Rugova-szurdokról ismert.", "Sörgyártási központ.", "A nyugati turizmus kapuja."],
      ro: ["Cunoscut pentru Cheile Rugova.", "Centru de producție de bere.", "Poarta către turismul din vest."],
      en: ["Known for the Rugova Canyon.", "Brewery center.", "Gateway to tourism in the west."]
    }
  },
  {
    id: "xk-rugova", type: "landmark", parent: "XK-016", coords: [20.08, 42.69],
    name: { de: "Rugova-Schlucht", hu: "Rugova-szurdok", ro: "Cheile Rugova", en: "Rugova Canyon" },
    description: { de: "Eines der tiefsten und längsten Canyons in Europa.", hu: "Európa egyik legmélyebb és leghosszabb szurdoka.", ro: "Unul dintre cele mai adânci și lungi canioane din Europa.", en: "One of the deepest and longest canyons in Europe." },
    facts: {
      de: ["25 Kilometer lang.", "Bis zu 1.000 Meter tief.", "Hervorragend zum Klettern und Wandern."],
      hu: ["25 kilométer hosszú.", "Helyenként 1000 méter mély.", "Kiváló mászásra és túrázásra."],
      ro: ["25 de kilometri lungime.", "Până la 1.000 de metri adâncime.", "Excelent pentru alpinism și drumeții."],
      en: ["25 kilometers long.", "Up to 1,000 meters deep.", "Excellent for climbing and hiking."]
    }
  },
  {
    id: "xk-bjeshket-e-nemuna", type: "landmark", parent: "XK-016", coords: [20.15, 42.66],
    name: { de: "Nationalpark Bjeshkët e Nemuna", hu: "Bjeshkët e Nemuna Nemzeti Park", ro: "Parcul Național Bjeshkët e Nemuna", en: "Bjeshkët e Nemuna National Park" },
    description: { de: "Atemberaubender Nationalpark in den albanischen Alpen.", hu: "Lélegzetelállító nemzeti park az Albán-Alpokban.", ro: "Parc național uluitor în Alpii Albanezi.", en: "Breathtaking national park in the Albanian Alps." },
    facts: {
      de: ["Teil der 'Verwunschenen Berge'.", "Gipfel über 2.500 Meter.", "Große Artenvielfalt."],
      hu: ["Az 'Átkozott-hegység' része.", "2500 méter feletti csúcsok.", "Nagy biológiai sokféleség."],
      ro: ["Parte a 'Munților Blestemați'.", "Vârfuri de peste 2.500 de metri.", "Diversitate biologică mare."],
      en: ["Part of the 'Accursed Mountains'.", "Peaks over 2,500 meters.", "Great biological diversity."]
    }
  },
  {
    id: "xk-patriarchate-pec", type: "historical", parent: "XK-016", coords: [20.26, 42.66],
    name: { de: "Patriarchenkloster Peć", hu: "Peći patriarchális kolostor", ro: "Patriarhia din Peć", en: "Patriarchate of Peć" },
    description: { de: "Mittelalterliches serbisches Kloster und UNESCO-Weltkulturerbe.", hu: "Középkori szerb kolostor és UNESCO Világörökség.", ro: "Mănăstire sârbă medievală și patrimoniu mondial UNESCO.", en: "Medieval Serbian monastery and UNESCO World Heritage site." },
    facts: {
      de: ["Sitz der serbischen Patriarchen.", "Besteht aus vier Kirchen.", "Wertvolle Wandmalereien."],
      hu: ["A szerb patriárkák székhelye.", "Négy templomból áll.", "Értékes falfestmények."],
      ro: ["Sediul patriarhilor sârbi.", "Formată din patru biserici.", "Picturi murale valoroase."],
      en: ["Seat of the Serbian patriarchs.", "Consists of four churches.", "Valuable wall paintings."]
    }
  },
  {
    id: "xk-radavc", type: "landmark", parent: "XK-016", coords: [20.33, 42.73],
    name: { de: "Radavc-Höhle", hu: "Radavc-barlang", ro: "Peștera Radavc", en: "Radavc Cave" },
    description: { de: "Tropfsteinhöhle nahe Peja mit unterirdischem Fluss.", hu: "Cseppkőbarlang Peja közelében föld alatti folyóval.", ro: "Peșteră cu stalactite lângă Peja cu râu subteran.", en: "Stalactite cave near Peja with an underground river." },
    facts: {
      de: ["Bekannt als 'Höhle der schlafenden Schönheit'.", "Spektakuläre Stalaktiten.", "Nahe der Quelle des Weißen Drin."],
      hu: ["A 'Csipkerózsika-barlang' néven is ismert.", "Látványos cseppkövek.", "A Fehér-Drin forrásának közelében."],
      ro: ["Cunoscută sub numele de 'Peștera Frumoasei din Pădurea Adormită'.", "Stalactite spectaculoase.", "Lângă izvorul Drinului Alb."],
      en: ["Known as the 'Sleeping Beauty Cave'.", "Spectacular stalactites.", "Near the source of the White Drin."]
    }
  },
  // XK-017: Orahovac
  {
    id: "xk-rahovec", type: "city", parent: "XK-017", coords: [20.65, 42.39],
    name: { de: "Rahovec", hu: "Rahovec", ro: "Rahovec", en: "Rahovec" },
    description: { de: "Zentrum des Weinbaus im Kosovo.", hu: "A koszovói borászat központja.", ro: "Centrul viticulturii din Kosovo.", en: "Center of winemaking in Kosovo." },
    facts: {
      de: ["Besitzt riesige Weinberge.", "Jährliches Weinfest.", "Produziert erstklassige Weine."],
      hu: ["Hatalmas szőlőültetvényekkel rendelkezik.", "Évente borfesztivált tartanak.", "Első osztályú borokat termel."],
      ro: ["Deține podgorii vaste.", "Festival anual al vinului.", "Produce vinuri de primă clasă."],
      en: ["Has vast vineyards.", "Annual wine festival.", "Produces first-class wines."]
    }
  },
  {
    id: "xk-velika-hoca", type: "historical", parent: "XK-017", coords: [20.68, 42.39],
    name: { de: "Velika Hoča", hu: "Velika Hoča", ro: "Velika Hoča", en: "Velika Hoča" },
    description: { de: "Historisches Dorf bekannt für seine vielen Kirchen.", hu: "Történelmi falu, amely számos templomáról ismert.", ro: "Sat istoric cunoscut pentru numeroasele sale biserici.", en: "Historic village known for its many churches." },
    facts: {
      de: ["Eine der ältesten Siedlungen in der Region.", "Besitzt 13 Kirchen.", "Berühmt für traditionelle Weinproduktion."],
      hu: ["A régió egyik legrégebbi települése.", "13 temploma van.", "Híres a hagyományos bortermelésről."],
      ro: ["Una dintre cele mai vechi așezări din regiune.", "Deține 13 biserici.", "Faimos pentru producția tradițională de vin."],
      en: ["One of the oldest settlements in the region.", "Has 13 churches.", "Famous for traditional wine production."]
    }
  },
  // XK-018: Srbica
  {
    id: "xk-srbica", type: "city", parent: "XK-018", coords: [20.78, 42.74],
    name: { de: "Skenderaj", hu: "Skenderaj", ro: "Skenderaj", en: "Skenderaj" },
    description: { de: "Hauptstadt der Drenica-Region.", hu: "A Drenica-régió fővárosa.", ro: "Capitala regiunii Drenica.", en: "Capital of the Drenica region." },
    facts: {
      de: ["Bedeutend im albanischen Widerstand.", "Ländlich geprägt.", "Wirtschaftliches Zentrum der Umgebung."],
      hu: ["Jelentős az albán ellenállásban.", "Vidéki jellegű.", "A környék gazdasági központja."],
      ro: ["Important în rezistența albaneză.", "Caracter rural.", "Centru economic al zonei."],
      en: ["Significant in the Albanian resistance.", "Rural character.", "Economic center of the surroundings."]
    }
  },
  {
    id: "xk-prekaz-memorial", type: "historical", parent: "XK-018", coords: [20.91, 42.76],
    name: { de: "Adem-Jashari-Gedenkstätte", hu: "Adem Jashari Emlékhely", ro: "Memorialul Adem Jashari", en: "Adem Jashari Memorial" },
    description: { de: "Gedenkstätte für den kosovarischen Befreiungskampf.", hu: "A koszovói felszabadítási harc emlékhelye.", ro: "Memorial pentru lupta de eliberare din Kosovo.", en: "Memorial to the Kosovo liberation struggle." },
    facts: {
      de: ["Liegt im Dorf Prekaz.", "Bewahrt die Ruinen der Jashari-Häuser.", "Wichtiger nationaler Wallfahrtsort."],
      hu: ["Prekaz faluban található.", "Őrzi a Jashari-házak romjait.", "Fontos nemzeti zarándokhely."],
      ro: ["Situat în satul Prekaz.", "Păstrează ruinele caselor Jashari.", "Important loc de pelerinaj național."],
      en: ["Located in the village of Prekaz.", "Preserves the ruins of the Jashari houses.", "Important national pilgrimage site."]
    }
  },
  // XK-019: Klina
  {
    id: "xk-mirusha-falls", type: "landmark", parent: "XK-019", coords: [20.57, 42.52],
    name: { de: "Mirusha-Wasserfälle", hu: "Mirusha-vízesések", ro: "Cascadele Mirusha", en: "Mirusha Waterfalls" },
    description: { de: "Serien von Wasserfällen und Seen am Fluss Mirusha.", hu: "Vízesések és tavak sorozata a Mirusha-folyón.", ro: "Serie de cascade și lacuri pe râul Mirusha.", en: "Series of waterfalls and lakes on the Mirusha River." },
    facts: {
      de: ["Haben insgesamt 12 Wasserfälle.", "Beliebt zum Baden im Sommer.", "Geschütztes Naturdenkmal."],
      hu: ["Összesen 12 vízesésből áll.", "Népszerű fürdőhely nyáron.", "Védett természeti emlék."],
      ro: ["Au un total de 12 cascade.", "Popular pentru scăldat vara.", "Monument natural protejat."],
      en: ["Feature a total of 12 waterfalls.", "Popular for swimming in summer.", "Protected natural monument."]
    }
  },
  {
    id: "xk-klina", type: "city", parent: "XK-019", coords: [20.57, 42.62],
    name: { de: "Klina", hu: "Klina", ro: "Klina", en: "Klina" },
    description: { de: "Stadt an der Mündung der Flüsse Drin und Klina.", hu: "Város a Drin és a Klina folyók torkolatánál.", ro: "Oraș la confluența râurilor Drin și Klina.", en: "Town at the confluence of the Drin and Klina rivers." },
    facts: {
      de: ["Wichtiger Bahnknotenpunkt.", "Fruchtbares Ackerland.", "Historische Siedlung."],
      hu: ["Fontos vasúti csomópont.", "Termékeny szántóföldek.", "Történelmi település."],
      ro: ["Important nod feroviar.", "Teren agricol fertil.", "Așezare istorică."],
      en: ["Important railway hub.", "Fertile farmland.", "Historic settlement."]
    }
  },
  // XK-020: Kosovska Mitrovica
  {
    id: "xk-mitrovica", type: "city", parent: "XK-020", coords: [20.86, 42.89],
    name: { de: "Mitrovica", hu: "Mitrovica", ro: "Mitrovica", en: "Mitrovica" },
    description: { de: "Stadt am Fluss Ibar, bekannt für den Bergbau.", hu: "Város az Ibar-folyó mentén, a bányászatáról ismert.", ro: "Oraș pe râul Ibar, cunoscut pentru minerit.", en: "City on the Ibar River, known for mining." },
    facts: {
      de: ["Symbolisch geteilte Stadt.", "Heimat des Trepča-Bergwerks.", "Wichtiger Bildungsstandort."],
      hu: ["Szimbolikusan megosztott város.", "A Trepča bánya otthona.", "Fontos oktatási központ."],
      ro: ["Oraș divizat simbolic.", "Sediul minei Trepča.", "Important centru educațional."],
      en: ["Symbolically divided city.", "Home of the Trepča mine.", "Important educational site."]
    }
  },
  {
    id: "xk-mitrovica-bridge", type: "landmark", parent: "XK-020", coords: [20.86, 42.89],
    name: { de: "Ibar-Brücke", hu: "Ibar-híd", ro: "Podul Ibar", en: "Ibar Bridge" },
    description: { de: "Die Brücke, die den Norden und Süden von Mitrovica verbindet.", hu: "A híd, amely Mitrovica északi és déli részét köti össze.", ro: "Podul care leagă nordul și sudul orașului Mitrovica.", en: "The bridge connecting North and South Mitrovica." },
    facts: {
      de: ["Symbol der Teilung und Hoffnung auf Versöhnung.", "Ständig von Friedenstruppen bewacht.", "Wichtiger Orientierungspunkt."],
      hu: ["A megosztottság és a megbékélés reményének szimbóluma.", "Békefenntartók folyamatosan őrzik.", "Fontos tájékozódási pont."],
      ro: ["Simbol al diviziunii și speranței de reconciliere.", "Păzit constant de trupele de menținere a păcii.", "Punct de reper important."],
      en: ["Symbol of division and hope for reconciliation.", "Constantly guarded by peacekeepers.", "Important landmark."]
    }
  },
  // XK-021: Glogovac
  {
    id: "xk-drenas", type: "city", parent: "XK-021", coords: [20.89, 42.62],
    name: { de: "Drenas", hu: "Drenas", ro: "Drenas", en: "Drenas" },
    description: { de: "Industriestadt im Herzen des Drenica-Tals.", hu: "Ipari város a Drenica-völgy szívében.", ro: "Oraș industrial în inima văii Drenica.", en: "Industrial city in the heart of the Drenica Valley." },
    facts: {
      de: ["Zentrum der Ferronikel-Industrie.", "Starke regionale Identität.", "Viel Natur in der Umgebung."],
      hu: ["A ferronikkel-ipar központja.", "Erős regionális identitás.", "Sok természet a környéken."],
      ro: ["Centrul industriei de feronichel.", "Identitate regională puternică.", "Multă natură în jur."],
      en: ["Center of the ferronickel industry.", "Strong regional identity.", "Much nature in the surroundings."]
    }
  },
  {
    id: "xk-berisha-mountains", type: "landmark", parent: "XK-021", coords: [20.85, 42.55],
    name: { de: "Berisha-Berge", hu: "Berisha-hegység", ro: "Munții Berisha", en: "Berisha Mountains" },
    description: { de: "Hügelkette mit historischer Bedeutung.", hu: "Dombvidék történelmi jelentőséggel.", ro: "Lanț de dealuri cu semnificație istorică.", en: "Chain of hills with historical significance." },
    facts: {
      de: ["Diente als Versteck während Kriegen.", "Bietet Wanderwege.", "Panoramablick auf Drenica."],
      hu: ["Búvóhelyül szolgált a háborúk alatt.", "Túraútvonalakat kínál.", "Panorámás kilátás Drenicára."],
      ro: ["A servit drept ascunzătoare în timpul războaielor.", "Oferă trasee de drumeție.", "Vedere panoramică asupra Drenica."],
      en: ["Served as a hideout during wars.", "Offers hiking trails.", "Panoramic view of Drenica."]
    }
  },
  // XK-022: Mališevo
  {
    id: "xk-malisheve", type: "city", parent: "XK-022", coords: [20.74, 42.48],
    name: { de: "Malisheva", hu: "Malisheva", ro: "Malisheva", en: "Malisheva" },
    description: { de: "Stadt im zentralen Kosovo.", hu: "Város Közép-Koszovóban.", ro: "Oraș în centrul Kosovo.", en: "Town in central Kosovo." },
    facts: {
      de: ["Wichtiger Ort in der Drenica-Region.", "Landwirtschaftlich geprägt.", "Dynamische Entwicklung."],
      hu: ["Fontos hely a Drenica-régióban.", "Mezőgazdasági jellegű.", "Dinamikus fejlődés."],
      ro: ["Loc important în regiunea Drenica.", "Caracter agricol.", "Dezvoltare dinamică."],
      en: ["Important place in the Drenica region.", "Agricultural character.", "Dynamic development."]
    }
  },
  {
    id: "xk-malisheve-thermal", type: "landmark", parent: "XK-022", coords: [20.73, 42.47],
    name: { de: "Thermalquellen Mališevo", hu: "Mališevoi termálforrások", ro: "Izvoarele termale Mališevo", en: "Mališevo Thermal Springs" },
    description: { de: "Natürliche warme Quellen in der Region.", hu: "Természetes meleg források a régióban.", ro: "Izvoare calde naturale din regiune.", en: "Natural warm springs in the region." },
    facts: {
      de: ["Beliebt bei Einheimischen zur Erholung.", "Mineralreiches Wasser.", "Naturbelassene Umgebung."],
      hu: ["Népszerű a helyiek körében pihenésre.", "Ásványi anyagokban gazdag víz.", "Természetes környezet."],
      ro: ["Popular printre localnici pentru recreere.", "Apă bogată în minerale.", "Mediu natural."],
      en: ["Popular among locals for recreation.", "Mineral-rich water.", "Natural environment."]
    }
  },
  // XK-023: Suva Reka
  {
    id: "xk-suhareka", type: "city", parent: "XK-023", coords: [20.82, 42.35],
    name: { de: "Suhareka", hu: "Suhareka", ro: "Suhareka", en: "Suhareka" },
    description: { de: "Stadt bekannt für Wein und Textilindustrie.", hu: "Boráról és textiliparáról ismert város.", ro: "Oraș cunoscut pentru vin și industria textilă.", en: "City known for wine and textile industry." },
    facts: {
      de: ["Hieß früher Theranda.", "Produziert bekannte Weinsorten.", "Lebhaftes Handelszentrum."],
      hu: ["Korábbi neve Theranda volt.", "Ismert borfajtákat termel.", "Élénk kereskedelmi központ."],
      ro: ["În trecut s-a numit Theranda.", "Produce soiuri de vin cunoscute.", "Centru comercial vibrant."],
      en: ["Formerly called Theranda.", "Produces known wine varieties.", "Vibrant commercial center."]
    }
  },
  {
    id: "xk-mushtisht", type: "historical", parent: "XK-023", coords: [20.89, 42.27],
    name: { de: "Mushtisht", hu: "Mushtisht", ro: "Mushtisht", en: "Mushtisht" },
    description: { de: "Dorf mit reichem kulturellem Erbe.", hu: "Gazdag kulturális örökséggel rendelkező falu.", ro: "Sat cu o bogată moștenire culturală.", en: "Village with a rich cultural heritage." },
    facts: {
      de: ["Historische Kirchenruinen.", "Bekannt für Volksmusik.", "Schöne Berglandschaft."],
      hu: ["Történelmi templomromok.", "Népzenéjéről ismert.", "Szép hegyi táj."],
      ro: ["Ruine de biserici istorice.", "Cunoscut pentru muzica populară.", "Peisaj montan frumos."],
      en: ["Historic church ruins.", "Known for folk music.", "Beautiful mountain scenery."]
    }
  },
  // XK-024: Uroševac
  {
    id: "xk-ferizaj", type: "city", parent: "XK-024", coords: [21.15, 42.37],
    name: { de: "Ferizaj", hu: "Ferizaj", ro: "Ferizaj", en: "Ferizaj" },
    description: { de: "Drittgrößte Stadt im Kosovo, ein Handelszentrum.", hu: "Koszovó harmadik legnagyobb városa, kereskedelmi központ.", ro: "Al treilea oraș ca mărime din Kosovo, un centru comercial.", en: "Third largest city in Kosovo, a commercial center." },
    facts: {
      de: ["Gegründet um eine Eisenbahnstation.", "Besitzt eine Moschee und eine Kirche im selben Hof.", "Große amerikanische Militärbasis Camp Bondsteel in der Nähe."],
      hu: ["Egy vasútállomás köré épült.", "Egy mecset és egy templom található ugyanabban az udvarban.", "A közelben van a nagy amerikai katonai bázis, a Camp Bondsteel."],
      ro: ["Fondat în jurul unei stații de cale ferată.", "Deține o moschee și o biserică în aceeași curte.", "Marea bază militară americană Camp Bondsteel este în apropiere."],
      en: ["Founded around a railway station.", "Features a mosque and a church in the same yard.", "Large US military base Camp Bondsteel nearby."]
    }
  },
  {
    id: "xk-nerodime-fork", type: "landmark", parent: "XK-024", coords: [21.13, 42.35],
    name: { de: "Gabelung der Nerodime", hu: "Nerodime-bifurkáció", ro: "Bifurcația Nerodime", en: "Nerodime Bifurcation" },
    description: { de: "Seltenes Naturphänomen, bei dem sich ein Fluss in zwei Meere teilt.", hu: "Ritka természeti jelenség, ahol egy folyó két tenger felé ágazik el.", ro: "Fenomen natural rar în care un râu se împarte spre două mări.", en: "Rare natural phenomenon where a river splits toward two seas." },
    facts: {
      de: ["Einer von nur zwei solchen Fällen weltweit.", "Ein Teil fließt ins Schwarze Meer, der andere in die Ägäis.", "Wichtiges hydrologisches Denkmal."],
      hu: ["A világon mindössze két ilyen eset egyike.", "Az egyik ág a Fekete-tengerbe, a másik az Égei-tengerbe folyik.", "Fontos hidrológiai műemlék."],
      ro: ["Unul dintre singurele două astfel de cazuri din lume.", "O parte se varsă în Marea Neagră, cealaltă în Marea Egee.", "Important monument hidrologic."],
      en: ["One of only two such cases in the world.", "One branch flows to the Black Sea, the other to the Aegean.", "Important hydrological monument."]
    }
  },
  // XK-025: Novo Brdo
  {
    id: "xk-novo-bordo", type: "historical", parent: "XK-025", coords: [21.43, 42.61],
    name: { de: "Festung Novo Brdo", hu: "Novo Brdo vára", ro: "Cetatea Novo Brdo", en: "Novo Brdo Fortress" },
    description: { de: "Mittelalterliche Bergbaustadt und Festung.", hu: "Középkori bányászváros és erőd.", ro: "Oraș minier medieval și cetate.", en: "Medieval mining town and fortress." },
    facts: {
      de: ["War im Mittelalter ein wichtiges Silberbergbauzentrum.", "Nannte man 'Mutter aller Städte'.", "Besitzt beeindruckende Ruinen auf dem Hügel."],
      hu: ["A középkorban fontos ezüstbányászati központ volt.", "A 'városok anyjának' nevezték.", "Lenyűgöző romok találhatók a dombon."],
      ro: ["A fost un important centru de extracție a argintului în Evul Mediu.", "A fost numit 'mama tuturor orașelor'.", "Deține ruine impresionante pe deal."],
      en: ["Was an important silver mining center in the Middle Ages.", "Was called the 'mother of all cities'.", "Has impressive ruins on the hill."]
    }
  },
  {
    id: "xk-st-nicholas-church", type: "historical", parent: "XK-025", coords: [21.43, 42.61],
    name: { de: "St. Nikolaus Kathedrale", hu: "Szent Miklós katedrális", ro: "Catedrala Sf. Nicolae", en: "St. Nicholas Cathedral" },
    description: { de: "Ruinen einer großen mittelalterlichen Kathedrale.", hu: "Egy nagy középkori katedrális romjai.", ro: "Ruinele unei mari catedrale medievale.", en: "Ruins of a large medieval cathedral." },
    facts: {
      de: ["Zeugnis der einstigen Größe von Novo Brdo.", "Zentrales religiöses Gebäude der Stadt.", "Archäologisch bedeutend."],
      hu: ["Novo Brdo egykori nagyságának tanúja.", "A város központi vallási épülete.", "Régészetileg jelentős."],
      ro: ["Mărturie a măreției de odinioară a Novo Brdo.", "Clădirea religioasă centrală a orașului.", "Important arheologic."],
      en: ["Evidence of the former greatness of Novo Brdo.", "Central religious building of the city.", "Archaeologically significant."]
    }
  },
  // XK-026: Obilić
  {
    id: "xk-gazimestan", type: "historical", parent: "XK-026", coords: [21.11, 42.69],
    name: { de: "Gazimestan", hu: "Gazimestan", ro: "Gazimestan", en: "Gazimestan" },
    description: { de: "Denkmal für die Schlacht auf dem Amselfeld (1389).", hu: "Az 1389-es rigómezei csata emlékműve.", ro: "Monumentul Bătăliei de la Kosovo (1389).", en: "Monument to the Battle of Kosovo (1389)." },
    facts: {
      de: ["25 Meter hoher Turm.", "Bietet Blick über das Schlachtfeld.", "Wichtiger Ort der serbischen Geschichte."],
      hu: ["25 méter magas torony.", "Kilátást nyújt a csatatérre.", "A szerb történelem fontos helyszíne."],
      ro: ["Turn înalt de 25 de metri.", "Oferă vedere peste câmpul de luptă.", "Loc important din istoria sârbă."],
      en: ["25-meter high tower.", "Offers a view over the battlefield.", "Important site in Serbian history."]
    }
  },
  {
    id: "xk-kosovo-b", type: "landmark", parent: "XK-026", coords: [21.05, 42.69],
    name: { de: "Kraftwerk Kosovo B", hu: "Koszovó B erőmű", ro: "Centrala Kosovo B", en: "Kosovo B Power Plant" },
    description: { de: "Größtes Kohlekraftwerk im Kosovo.", hu: "Koszovó legnagyobb szénerőműve.", ro: "Cea mai mare termocentrală din Kosovo.", en: "Largest coal power plant in Kosovo." },
    facts: {
      de: ["Sorgt für den Großteil der Stromversorgung.", "Hat markante Schornsteine.", "Basiert auf Lignit-Abbau."],
      hu: ["Az áramellátás nagy részét biztosítja.", "Jellegzetes kéményei vannak.", "Lignitbányászaton alapul."],
      ro: ["Asigură cea mai mare parte a alimentării cu energie electrică.", "Are coșuri de fum distinctive.", "Se bazează pe extracția lignitului."],
      en: ["Provides most of the electricity supply.", "Features distinctive chimneys.", "Based on lignite mining."]
    }
  },
  // XK-027: Kosovo Polje
  {
    id: "xk-fushe-kosove", type: "city", parent: "XK-027", coords: [21.09, 42.63],
    name: { de: "Fushë Kosova", hu: "Fushë Kosova", ro: "Fushë Kosova", en: "Fushë Kosova" },
    description: { de: "Stadt und wichtiger Eisenbahnknotenpunkt nahe Pristina.", hu: "Város és fontos vasúti csomópont Pristina közelében.", ro: "Oraș și important nod feroviar lângă Pristina.", en: "Town and important railway hub near Pristina." },
    facts: {
      de: ["Wuchs schnell durch die Nähe zur Hauptstadt.", "Sitz der kosovarischen Eisenbahngesellschaft.", "Vielseitiger Handelsplatz."],
      hu: ["A főváros közelsége miatt gyorsan nőtt.", "A koszovói vasúttársaság székhelye.", "Sokoldalú kereskedelmi helyszín."],
      ro: ["A crescut rapid datorită proximității de capitală.", "Sediul companiei feroviare din Kosovo.", "Loc de comerț versatil."],
      en: ["Grew rapidly due to proximity to the capital.", "Seat of the Kosovo railway company.", "Versatile trading place."]
    }
  },
  {
    id: "xk-ariljaca", type: "landmark", parent: "XK-027", coords: [21.05, 42.58],
    name: { de: "Ariljaça", hu: "Ariljaça", ro: "Ariljaça", en: "Ariljaça" },
    description: { de: "Archäologische Stätte in der Region.", hu: "Régészeti lelőhely a régióban.", ro: "Sit arheologic în regiune.", en: "Archaeological site in the region." },
    facts: {
      de: ["Überreste antiker Siedlungen.", "Wichtig für das Studium der illyrischen Geschichte.", "Ländliche Umgebung."],
      hu: ["Ókori települések maradványai.", "Fontos az illír történelem tanulmányozásához.", "Vidéki környezet."],
      ro: ["Rămășițe ale așezărilor antice.", "Important pentru studiul istoriei ilire.", "Mediu rural."],
      en: ["Remains of ancient settlements.", "Important for studying Illyrian history.", "Rural environment."]
    }
  },
  // XK-028: Lipljan
  {
    id: "xk-gadime-cave", type: "landmark", parent: "XK-028", coords: [21.2, 42.48],
    name: { de: "Marmorhöhle von Gadime", hu: "Gadimei márványbarlang", ro: "Peștera de marmură din Gadime", en: "Marble Cave of Gadime" },
    description: { de: "Einzigartige Karsthöhle mit Marmorformationen.", hu: "Egyedülálló karsztbarlang márványképződményekkel.", ro: "Peșteră carstică unică cu formațiuni de marmură.", en: "Unique karst cave with marble formations." },
    facts: {
      de: ["1966 zufällig entdeckt.", "Bietet seltene rote Marmor-Stalaktiten.", "Konstante Temperatur von 12-15 Grad."],
      hu: ["1966-ban véletlenül fedezték fel.", "Ritka vörös márvány sztalaktitokat kínál.", "Állandó 12-15 fokos hőmérséklet."],
      ro: ["Descoperită accidental în 1966.", "Oferă stalactite de marmură roșie rare.", "Temperatură constantă de 12-15 grade."],
      en: ["Discovered by accident in 1966.", "Features rare red marble stalactites.", "Constant temperature of 12-15 degrees."]
    }
  },
  {
    id: "xk-lipjan", type: "city", parent: "XK-028", coords: [21.13, 42.52],
    name: { de: "Lipjan", hu: "Lipjan", ro: "Lipjan", en: "Lipjan" },
    description: { de: "Stadt mit Wurzeln in der römischen Antike (Ulpiana).", hu: "Római kori gyökerekkel (Ulpiana) rendelkező város.", ro: "Oraș cu rădăcini în antichitatea romană (Ulpiana).", en: "City with roots in Roman antiquity (Ulpiana)." },
    facts: {
      de: ["Nahe der archäologischen Stätte Ulpiana.", "Wichtiges landwirtschaftliches Zentrum.", "Gute Anbindung an den Flughafen."],
      hu: ["Ulpiana régészeti lelőhely közelében fekszik.", "Fontos mezőgazdasági központ.", "Jó összeköttetés a repülőtérrel."],
      ro: ["Aproape de situl arheologic Ulpiana.", "Important centru agricol.", "Conexiune bună cu aeroportul."],
      en: ["Located near the Ulpiana archaeological site.", "Important agricultural center.", "Good connection to the airport."]
    }
  },
  // XK-029: Štimlje
  {
    id: "xk-shtime", type: "city", parent: "XK-029", coords: [21.03, 42.43],
    name: { de: "Shtime", hu: "Shtime", ro: "Shtime", en: "Shtime" },
    description: { de: "Stadt am Übergang zwischen Ebene und Gebirge.", hu: "Város a síkság és a hegység közötti átmenetnél.", ro: "Oraș la tranziția dintre câmpie și munte.", en: "Town at the transition between the plain and the mountains." },
    facts: {
      de: ["Bekannt für Holzwirtschaft.", "Strategisch an der Straße nach Prizren.", "Wachsendes Handelszentrum."],
      hu: ["Fakitermeléséről ismert.", "Stratégiailag a Prizrenbe vezető út mentén fekszik.", "Növekvő kereskedelmi központ."],
      ro: ["Cunoscut pentru industria lemnului.", "Situat strategic pe drumul spre Prizren.", "Centru comercial în creștere."],
      en: ["Known for wood industry.", "Strategically located on the road to Prizren.", "Growing commercial center."]
    }
  },
  {
    id: "xk-carraleva", type: "landmark", parent: "XK-029", coords: [20.98, 42.45],
    name: { de: "Carraleva-Schlucht", hu: "Carraleva-szurdok", ro: "Defileul Carraleva", en: "Carraleva Gorge" },
    description: { de: "Malerische Passage durch die Berge.", hu: "Festői átjáró a hegyeken keresztül.", ro: "Pasaj pitoresc prin munți.", en: "Picturesque passage through the mountains." },
    facts: {
      de: ["Historisch wichtiger Pass.", "Bietet Wanderwege.", "Reich an Wald."],
      hu: ["Történelmileg fontos hágó.", "Túraútvonalakat kínál.", "Erdőkben gazdag."],
      ro: ["Pas important istoric.", "Oferă trasee de drumeție.", "Bogat în păduri."],
      en: ["Historically important pass.", "Offers hiking trails.", "Rich in forests."]
    }
  },
  // XK-030: Vučitrn
  {
    id: "xk-vushtrri", type: "city", parent: "XK-030", coords: [20.96, 42.82],
    name: { de: "Vushtrri", hu: "Vushtrri", ro: "Vushtrri", en: "Vushtrri" },
    description: { de: "Eine der ältesten und geschichtsträchtigsten Städte.", hu: "Az egyik legrégebbi és legpatinásabb város.", ro: "Unul dintre cele mai vechi și pline de istorie orașe.", en: "One of the oldest and most historical cities." },
    facts: {
      de: ["War eine wichtige mittelalterliche Residenz.", "Besitzt einen gut erhaltenen alten Stadtkern.", "Zentrum der Bildung und Kultur."],
      hu: ["Fontos középkori rezidencia volt.", "Jól megőrzött régi városközpontja van.", "Oktatási és kulturális központ."],
      ro: ["A fost o reședință medievală importantă.", "Deține un centru vechi bine conservat.", "Centru de educație și cultură."],
      en: ["Was an important medieval residence.", "Has a well-preserved old town center.", "Center of education and culture."]
    }
  },
  {
    id: "xk-vojinovic-bridge", type: "historical", parent: "XK-030", coords: [20.96, 42.82],
    name: { de: "Vojinović-Brücke", hu: "Vojinović-híd", ro: "Podul Vojinović", en: "Vojinović Bridge" },
    description: { de: "Mittelalterliche Steinbrücke aus dem 14. Jahrhundert.", hu: "14. századi középkori kőhíd.", ro: "Pod de piatră medieval din secolul al XIV-lea.", en: "Medieval stone bridge from the 14th century." },
    facts: {
      de: ["Gilt als die älteste Steinbrücke im Kosovo.", "War einst Teil einer Handelsstraße.", "Besteht aus neun Bögen."],
      hu: ["Koszovó legrégebbi kőhídjának tartják.", "Egykor kereskedelmi út része volt.", "Kilenc ívből áll."],
      ro: ["Este considerat cel mai vechi pod de piatră din Kosovo.", "A fost cândva parte dintr-un drum comercial.", "Format din nouă arcade."],
      en: ["Considered the oldest stone bridge in Kosovo.", "Was once part of a trade route.", "Consists of nine arches."]
    }
  }
];

export const kosovoAllPoi: POI[] = [
  kosovoCountry,
  ...kosovoPois
];
