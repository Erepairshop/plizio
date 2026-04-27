import type { POI } from "./poi";

export const poiExtraPolandCities: POI[] = [
  {
    id: "city-zielona-gora-extra",
    type: "city",
    parent: "PL-LB",
    coords: [15.5062, 51.9356],
    name: { de: "Grünberg in Schlesien", hu: "Zielona Góra", ro: "Zielona Góra", en: "Zielona Góra" },
    description: {
      de: "Bekannt für seine Weintradition, mit einem jährlichen Weinfest (Winobranie). Die Stadt ist ein wichtiges Kultur- und Bildungszentrum in der Woiwodschaft Lebus.",
      hu: "Híres borászati hagyományairól, évente megrendezik a Winobranie borfesztivált. A város a Lubusi vajdaság fontos kulturális és oktatási központja.",
      ro: "Cunoscut pentru tradiția sa vinicolă, cu un festival anual al vinului (Winobranie). Orașul este un centru cultural și educațional important în Voievodatul Lubusz.",
      en: "Known for its wine-making tradition, with an annual wine festival (Winobranie). The city is a major cultural and educational center in the Lubusz Voivodeship."
    },
    facts: {
      de: ["Größte Stadt in der Woiwodschaft Lebus.", "Jährliches Weinfest seit 1852.", "Palmhaus mit exotischen Pflanzen."],
      hu: ["A Lubusi vajdaság legnagyobb városa.", "Évenkénti borfesztivál 1852 óta.", "Pálmaház egzotikus növényekkel."],
      ro: ["Cel mai mare oraș din Voievodatul Lubusz.", "Festival anual al vinului din 1852.", "Sera de palmieri cu plante exotice."],
      en: ["Largest city in the Lubusz Voivodeship.", "Annual wine festival since 1852.", "Palm House with exotic plants."]
    }
  },
  {
    id: "city-gorzow-wielkopolski-extra",
    type: "city",
    parent: "PL-LB",
    coords: [15.228, 52.7367],
    name: { de: "Landsberg an der Warthe", hu: "Gorzów Wielkopolski", ro: "Gorzów Wielkopolski", en: "Gorzów Wielkopolski" },
    description: {
      de: "Eine der beiden Hauptstädte der Woiwodschaft Lebus, gelegen am Fluss Warthe. Die Stadt hat eine reiche Geschichte, die bis ins Mittelalter zurückreicht.",
      hu: "A Lubusi vajdaság két fővárosának egyike, a Warta folyó partján fekszik. A város gazdag történelme a középkorig nyúlik vissza.",
      ro: "Una dintre cele două capitale ale Voievodatului Lubusz, situată pe râul Warta. Orașul are o istorie bogată ce datează din Evul Mediu.",
      en: "One of the two capitals of the Lubusz Voivodeship, located on the Warta river. The city has a rich history dating back to the Middle Ages."
    },
    facts: {
      de: ["Geteilte Hauptstadtfunktion mit Zielona Góra.", "Wichtiger Binnenhafen.", "Kathedrale aus dem 13. Jahrhundert."],
      hu: ["Megosztott fővárosi szerep Zielona Górával.", "Fontos folyami kikötő.", "13. századi katedrális."],
      ro: ["Funcție de capitală împărțită cu Zielona Góra.", "Port fluvial important.", "Catedrală din secolul al XIII-lea."],
      en: ["Shared capital function with Zielona Góra.", "Important river port.", "13th-century cathedral."]
    }
  },
  {
    id: "historical-fortress-krosno-odrzanskie-extra",
    type: "historical",
    parent: "PL-LB",
    coords: [15.0933, 52.0569],
    name: { de: "Festung Crossen an der Oder", hu: "Krosno Odrzańskie erőd", ro: "Cetatea Krosno Odrzańskie", en: "Krosno Odrzańskie Fortress" },
    description: {
      de: "Eine historische Festungsanlage, die eine strategische Rolle an der Oder spielte. Die Überreste der Burg der Piasten-Dynastie sind ein zentraler Punkt.",
      hu: "Történelmi erődítmény, amely stratégiai szerepet játszott az Odera mentén. A Piast-dinasztia várának maradványai központi látnivalót jelentenek.",
      ro: "O fortăreață istorică ce a jucat un rol strategic pe râul Oder. Rămășițele castelului dinastiei Piast sunt un punct central.",
      en: "A historical fortress that played a strategic role on the Oder river. The remains of the Piast dynasty castle are a central feature."
    },
    facts: {
      de: ["Strategische Lage an der Oder.", "Ursprünge im 10. Jahrhundert.", "Teil der schlesischen Verteidigungslinie."],
      hu: ["Stratégiai fekvés az Odera mentén.", "Eredete a 10. századra nyúlik vissza.", "A sziléziai védelmi vonal része volt."],
      ro: ["Poziție strategică pe râul Oder.", "Origini în secolul al X-lea.", "Parte a liniei de apărare sileziene."],
      en: ["Strategic location on the Oder river.", "Origins in the 10th century.", "Part of the Silesian defense line."]
    }
  },
  {
    id: "nature-muskauer-park-extra",
    type: "nature",
    parent: "PL-LB",
    coords: [14.732, 51.547],
    name: { de: "Muskauer Park", hu: "Muskaui park", ro: "Parcul Muskau", en: "Muskauer Park" },
    description: {
      de: "Ein weitläufiger Landschaftspark, der sich über die deutsch-polnische Grenze erstreckt. Er ist ein UNESCO-Welterbe und eines der größten Beispiele für englische Landschaftsgärten in Europa.",
      hu: "Hatalmas tájképi park, amely a német-lengyel határon terül el. Az UNESCO Világörökség része, és az angol tájkertek egyik legnagyobb európai példája.",
      ro: "Un vast parc peisagistic care se întinde peste granița germano-polonă. Este un sit al Patrimoniului Mondial UNESCO și unul dintre cele mai mari exemple de grădini peisagistice englezești din Europa.",
      en: "A vast landscape park stretching across the German-Polish border. It is a UNESCO World Heritage site and one of the largest examples of English landscape gardens in Europe."
    },
    facts: {
      de: ["UNESCO-Welterbe seit 2004.", "Entworfen von Hermann von Pückler-Muskau.", "Geteilt durch den Fluss Neiße."],
      hu: ["UNESCO Világörökség része 2004 óta.", "Tervezte Hermann von Pückler-Muskau.", "A Neisse folyó osztja ketté."],
      ro: ["Patrimoniu Mondial UNESCO din 2004.", "Proiectat de Hermann von Pückler-Muskau.", "Împărțit de râul Neisse."],
      en: ["UNESCO World Heritage site since 2004.", "Designed by Hermann von Pückler-Muskau.", "Divided by the Neisse river."]
    }
  },
  {
    id: "city-olsztyn-extra",
    type: "state-capital",
    parent: "PL-WN",
    coords: [20.4942, 53.7799],
    name: { de: "Allenstein", hu: "Olsztyn", ro: "Olsztyn", en: "Olsztyn" },
    description: {
      de: "Die Hauptstadt der Woiwodschaft Ermland-Masuren, bekannt für ihre Lage inmitten von Seen und Wäldern. Nikolaus Kopernikus lebte hier und verwaltete die Region.",
      hu: "A Warmia-mazúriai vajdaság fővárosa, amely tavakkal és erdőkkel körülvett fekvéséről ismert. Kopernikusz itt élt és igazgatta a régiót.",
      ro: "Capitala Voievodatului Varmia și Mazuria, cunoscută pentru amplasarea sa în mijlocul lacurilor și pădurilor. Nicolaus Copernicus a locuit aici și a administrat regiunea.",
      en: "The capital of the Warmian-Masurian Voivodeship, known for its location amidst lakes and forests. Nicolaus Copernicus lived here and administered the region."
    },
    facts: {
      de: ["Hauptstadt von Ermland-Masuren.", "Über 15 Seen innerhalb der Stadtgrenzen.", "Kopernikus war hier Administrator."],
      hu: ["Warmia-Mazúria fővárosa.", "Több mint 15 tó a város határain belül.", "Kopernikusz itt volt adminisztrátor."],
      ro: ["Capitala Voievodatului Varmia și Mazuria.", "Peste 15 lacuri în interiorul limitelor orașului.", "Copernicus a fost administrator aici."],
      en: ["Capital of Warmian-Masurian Voivodeship.", "Over 15 lakes within the city limits.", "Copernicus was an administrator here."]
    }
  },
  {
    id: "city-elblag-extra",
    type: "city",
    parent: "PL-WN",
    coords: [19.4056, 54.1561],
    name: { de: "Elbing", hu: "Elbląg", ro: "Elbląg", en: "Elbląg" },
    description: {
      de: "Eine historische Hansestadt mit Zugang zur Ostsee über das Frische Haff. Die wiederaufgebaute Altstadt ist eine Touristenattraktion.",
      hu: "Történelmi Hanza-város, amely a Visztula-öbölön keresztül éri el a Balti-tengert. Az újjáépített óváros turisztikai látványosság.",
      ro: "Un oraș hanseatic istoric cu acces la Marea Baltică prin Laguna Vistulei. Centrul Vechi reconstruit este o atracție turistică.",
      en: "A historic Hanseatic city with access to the Baltic Sea via the Vistula Lagoon. The reconstructed Old Town is a tourist attraction."
    },
    facts: {
      de: ["Wichtiger Hafen am Frischen Haff.", "Gegründet von den Rittern des Deutschen Ordens.", "Die Altstadt wurde nach dem Krieg wiederaufgebaut."],
      hu: ["Fontos kikötő a Visztula-öbölben.", "A Német Lovagrend alapította.", "Az óvárost a háború után újjáépítették."],
      ro: ["Port important la Laguna Vistulei.", "Fondat de Cavalerii Teutoni.", "Centrul Vechi a fost reconstruit după război."],
      en: ["Important port on the Vistula Lagoon.", "Founded by the Teutonic Knights.", "The Old Town was rebuilt after the war."]
    }
  },
  {
    id: "historical-wolfsschanze-extra",
    type: "historical",
    parent: "PL-WN",
    coords: [21.493, 54.079],
    name: { de: "Wolfsschanze", hu: "Farkasverem", ro: "Bârlogul Lupului", en: "Wolf's Lair" },
    description: {
      de: "Adolf Hitlers Hauptquartier an der Ostfront während des Zweiten Weltkriegs. Hier fand das gescheiterte Attentat vom 20. Juli 1944 statt.",
      hu: "Adolf Hitler főhadiszállása volt a keleti fronton a második világháború alatt. Itt került sor a sikertelen 1944. július 20-i merényletre.",
      ro: "Cartierul general al lui Adolf Hitler pe Frontul de Est în timpul celui de-al Doilea Război Mondial. Aici a avut loc tentativa de asasinat eșuată din 20 iulie 1944.",
      en: "Adolf Hitler's headquarters on the Eastern Front during World War II. The failed assassination attempt of 20 July 1944 took place here."
    },
    facts: {
      de: ["Hitlers Hauptquartier 1941-1944.", "Ort des Stauffenberg-Attentats.", "Massive Bunkeranlagen im Wald versteckt."],
      hu: ["Hitler főhadiszállása 1941-1944.", "A Stauffenberg-merénylet helyszíne.", "Hatalmas bunkerrendszer az erdőben elrejtve."],
      ro: ["Cartierul general al lui Hitler 1941-1944.", "Locul atentatului lui Stauffenberg.", "Buncăre masive ascunse în pădure."],
      en: ["Hitler's headquarters 1941-1944.", "Site of the Stauffenberg assassination attempt.", "Massive bunkers hidden in the forest."]
    }
  },
  {
    id: "lake-sniardwy-extra",
    type: "lake",
    parent: "PL-WN",
    coords: [21.722, 53.74],
    name: { de: "Spirdingsee", hu: "Śniardwy-tó", ro: "Lacul Śniardwy", en: "Śniardwy Lake" },
    description: {
      de: "Der größte See Polens, Teil der Masurischen Seenplatte. Ein beliebtes Ziel für Segler und Wassersportler.",
      hu: "Lengyelország legnagyobb tava, a Mazuri-tóhátság része. Kedvelt célpont a vitorlázók és a vízi sportok szerelmesei számára.",
      ro: "Cel mai mare lac din Polonia, parte a Districtului Lacurilor Mazuriene. O destinație populară pentru marinari și pasionații de sporturi nautice.",
      en: "The largest lake in Poland, part of the Masurian Lake District. A popular destination for sailors and water sports enthusiasts."
    },
    facts: {
      de: ["Größter See Polens (113,8 km²).", "Maximale Tiefe von 23 Metern.", "Teil der Großen Masurischen Seen."],
      hu: ["Lengyelország legnagyobb tava (113,8 km²).", "Maximális mélysége 23 méter.", "A Nagy-Mazuri-tavak része."],
      ro: ["Cel mai mare lac din Polonia (113,8 km²).", "Adâncime maximă de 23 de metri.", "Parte a Marilor Lacuri Mazuriene."],
      en: ["Largest lake in Poland (113.8 km²).", "Maximum depth of 23 meters.", "Part of the Great Masurian Lakes."]
    }
  },
  {
    id: "city-rzeszow-extra",
    type: "state-capital",
    parent: "PL-PK",
    coords: [22.0047, 50.0413],
    name: { de: "Rzeszów", hu: "Rzeszów", ro: "Rzeszów", en: "Rzeszów" },
    description: {
      de: "Die Hauptstadt der Woiwodschaft Karpatenvorland und ein wachsendes Zentrum für die IT- und Luftfahrtindustrie. Die Stadt hat einen charmanten Marktplatz.",
      hu: "A Kárpátaljai vajdaság fővárosa, az IT- és a repülőgépipar növekvő központja. A városnak bájos főtere van.",
      ro: "Capitala Voievodatului Subcarpatia și un centru în creștere pentru industria IT și aviatică. Orașul are o piață centrală fermecătoare.",
      en: "The capital of the Subcarpathian Voivodeship and a growing center for the IT and aviation industries. The city has a charming market square."
    },
    facts: {
      de: ["Hauptstadt des Karpatenvorlandes.", "Wichtiger Standort der Luftfahrtindustrie ('Aviation Valley').", "Unterirdische Touristenroute."],
      hu: ["Kárpátaljai vajdaság fővárosa.", "Fontos repülőgépipari központ ('Repülési Völgy').", "Földalatti turisztikai útvonal."],
      ro: ["Capitala Voievodatului Subcarpatia.", "Centru important al industriei aviatice ('Valea Aviației').", "Traseu turistic subteran."],
      en: ["Capital of Subcarpathian Voivodeship.", "Major aviation industry hub ('Aviation Valley').", "Underground tourist route."]
    }
  },
  {
    id: "city-przemysl-extra",
    type: "city",
    parent: "PL-PK",
    coords: [22.7669, 49.785],
    name: { de: "Przemyśl", hu: "Przemyśl", ro: "Przemyśl", en: "Przemyśl" },
    description: {
      de: "Eine der ältesten Städte Südpolens mit einer reichen und multikulturellen Geschichte. Die Festung Przemyśl war im Ersten Weltkrieg von großer Bedeutung.",
      hu: "Dél-Lengyelország egyik legrégebbi városa, gazdag és multikulturális történelemmel. A Przemyśl-erőd nagy jelentőséggel bírt az első világháborúban.",
      ro: "Unul dintre cele mai vechi orașe din sudul Poloniei, cu o istorie bogată și multiculturală. Fortăreața Przemyśl a avut o mare importanță în Primul Război Mondial.",
      en: "One of the oldest cities in southern Poland, with a rich and multicultural history. The Przemyśl Fortress was of great importance in World War I."
    },
    facts: {
      de: ["Über tausendjährige Geschichte.", "Wichtige Festung im Ersten Weltkrieg.", "Lage nahe der ukrainischen Grenze."],
      hu: ["Több mint ezeréves történelem.", "Fontos erőd az első világháborúban.", "Az ukrán határ közelében fekszik."],
      ro: ["Istorie de peste o mie de ani.", "Fortăreață importantă în Primul Război Mondial.", "Situat lângă granița cu Ucraina."],
      en: ["Over a thousand years of history.", "Important fortress in World War I.", "Located near the Ukrainian border."]
    }
  },
  {
    id: "castle-lancut-extra",
    type: "castle",
    parent: "PL-PK",
    coords: [22.2325, 50.0686],
    name: { de: "Schloss Łańcut", hu: "Łańcuti kastély", ro: "Castelul Łańcut", en: "Łańcut Castle" },
    description: {
      de: "Eine prächtige aristokratische Residenz, berühmt für ihr exquisites Interieur und eine große Sammlung historischer Kutschen.",
      hu: "Pompás arisztokrata rezidencia, amely híres a gyönyörű belső tereiről és a történelmi hintók nagy gyűjteményéről.",
      ro: "O magnifică reședință aristocratică, renumită pentru interioarele sale rafinate și o mare colecție de trăsuri istorice.",
      en: "A magnificent aristocratic residence, famous for its exquisite interiors and a large collection of historical carriages."
    },
    facts: {
      de: ["Ehemals im Besitz der Familien Potocki und Lubomirski.", "Eine der größten Kutschensammlungen Europas.", "Umgeben von einem englischen Landschaftspark."],
      hu: ["Egykor a Potocki és Lubomirski családok tulajdona volt.", "Európa egyik legnagyobb hintógyűjteménye.", "Angol tájképi park veszi körül."],
      ro: ["Fostă proprietate a familiilor Potocki și Lubomirski.", "Una dintre cele mai mari colecții de trăsuri din Europa.", "Înconjurat de un parc peisagistic englezesc."],
      en: ["Formerly owned by the Potocki and Lubomirski families.", "One of Europe's largest carriage collections.", "Surrounded by an English landscape park."]
    }
  },
  {
    id: "nature-bieszczady-mountains-extra",
    type: "mountain",
    parent: "PL-PK",
    coords: [22.6, 49.2],
    name: { de: "Bieszczady-Gebirge", hu: "Bieszczady-hegység", ro: "Munții Bieszczady", en: "Bieszczady Mountains" },
    description: {
      de: "Ein wildes und dünn besiedeltes Gebirge im äußersten Südosten Polens. Bekannt für seine einzigartigen Bergwiesen (poloniny) und reiche Tierwelt.",
      hu: "Vad és gyéren lakott hegyvidék Lengyelország legdélkeletibb részén. Egyedülálló hegyi rétjeiről (poloniny) és gazdag vadvilágáról ismert.",
      ro: "Un lanț montan sălbatic și slab populat în sud-estul extrem al Poloniei. Cunoscut pentru pajiștile sale montane unice (poloniny) și fauna bogată.",
      en: "A wild and sparsely populated mountain range in the far southeast of Poland. Known for its unique mountain meadows (poloniny) and rich wildlife."
    },
    facts: {
      de: ["Teil der Ostkarpaten.", "Heimat von Bären, Wölfen und Bisons.", "Die Bergwiesen werden 'Poloniny' genannt."],
      hu: ["A Keleti-Kárpátok része.", "Medvék, farkasok és bölények otthona.", "A hegyi réteket 'Poloniny'-nek hívják."],
      ro: ["Parte a Carpaților Orientali.", "Adăpostește urși, lupi și bizoni.", "Pajiștile montane sunt numite 'Poloniny'."],
      en: ["Part of the Eastern Carpathians.", "Home to bears, wolves, and bison.", "The mountain meadows are called 'Poloniny'."]
    }
  },
  {
    id: "city-kielce-extra",
    type: "state-capital",
    parent: "PL-SK",
    coords: [20.6285, 50.8703],
    name: { de: "Kielce", hu: "Kielce", ro: "Kielce", en: "Kielce" },
    description: {
      de: "Die Hauptstadt der Woiwodschaft Heiligkreuz, umgeben vom Heiligkreuzgebirge. Die Stadt ist ein Zentrum für Geologie und Handel.",
      hu: "A Szentkereszt vajdaság fővárosa, a Szentkereszt-hegység által körülvéve. A város a geológia és a kereskedelem központja.",
      ro: "Capitala Voievodatului Sfintei Cruci, înconjurată de Munții Sfintei Cruci. Orașul este un centru pentru geologie și comerț.",
      en: "The capital of the Świętokrzyskie Voivodeship, surrounded by the Świętokrzyskie Mountains. The city is a center for geology and trade."
    },
    facts: {
      de: ["Hauptstadt der Woiwodschaft Heiligkreuz.", "Geologisches Zentrum Polens.", "Bischofspalast aus dem 17. Jahrhundert."],
      hu: ["A Szentkereszt vajdaság fővárosa.", "Lengyelország geológiai központja.", "17. századi püspöki palota."],
      ro: ["Capitala Voievodatului Sfintei Cruci.", "Centrul geologic al Poloniei.", "Palatul Episcopilor din secolul al XVII-lea."],
      en: ["Capital of Świętokrzyskie Voivodeship.", "Geological center of Poland.", "17th-century Bishops' Palace."]
    }
  },
  {
    id: "monastery-holy-cross-extra",
    type: "monastery",
    parent: "PL-SK",
    coords: [21.055, 50.86],
    name: { de: "Kloster Heiligkreuz", hu: "Szent Kereszt-kolostor", ro: "Mănăstirea Sfânta Cruce", en: "Holy Cross Monastery" },
    description: {
      de: "Ein historisches Benediktinerkloster auf dem Berg Łysa Góra. Es bewahrte einst ein Fragment des Wahren Kreuzes und war ein wichtiges Pilgerziel.",
      hu: "Történelmi bencés kolostor a Łysa Góra hegyen. Egykor az Igaz Kereszt egy darabját őrizte, és fontos zarándokhely volt.",
      ro: "O mănăstire benedictină istorică pe muntele Łysa Góra. Odinioară adăpostea un fragment din Sfânta Cruce și era un important centru de pelerinaj.",
      en: "A historic Benedictine monastery on Łysa Góra mountain. It once housed a fragment of the True Cross and was a major pilgrimage site."
    },
    facts: {
      de: ["Auf dem Berg Łysa Góra gelegen.", "Gegründet im 11. Jahrhundert.", "Aufbewahrungsort einer Reliquie des Heiligen Kreuzes."],
      hu: ["A Łysa Góra hegyen található.", "A 11. században alapították.", "A Szent Kereszt ereklyéjének őrzési helye."],
      ro: ["Situată pe muntele Łysa Góra.", "Fondată în secolul al XI-lea.", "Loc de păstrare a unei relicve a Sfintei Cruci."],
      en: ["Located on Łysa Góra mountain.", "Founded in the 11th century.", "Housed a relic of the Holy Cross."]
    }
  },
  {
    id: "landmark-krzyztopor-castle-extra",
    type: "castle",
    parent: "PL-SK",
    coords: [21.408, 50.713],
    name: { de: "Schloss Krzyżtopór", hu: "Krzyżtopór kastély", ro: "Castelul Krzyżtopór", en: "Krzyżtopór Castle" },
    description: {
      de: "Eine einzigartige Festungsruine, entworfen als befestigter Kalender. Das Schloss hatte 365 Fenster, 52 Räume, 12 Säle und 4 Türme.",
      hu: "Egyedülálló erődrom, amelyet erődített naptárnak terveztek. A kastélynak 365 ablaka, 52 szobája, 12 terme és 4 tornya volt.",
      ro: "O ruină unică de fortăreață, proiectată ca un calendar fortificat. Castelul avea 365 de ferestre, 52 de camere, 12 săli și 4 turnuri.",
      en: "A unique fortress ruin designed as a fortified calendar. The castle had 365 windows, 52 rooms, 12 halls, and 4 towers."
    },
    facts: {
      de: ["Symbolik basiert auf dem Kalender.", "Erbaut im 17. Jahrhundert, schnell zerstört.", "Eine 'palazzo in fortezza'-Struktur."],
      hu: ["Szimbolikája a naptáron alapul.", "A 17. században épült, gyorsan elpusztult.", "Egy 'palazzo in fortezza' szerkezet."],
      ro: ["Simbolism bazat pe calendar.", "Construit în secolul al XVII-lea, distrus rapid.", "O structură 'palazzo in fortezza'."],
      en: ["Symbolism based on the calendar.", "Built in the 17th century, quickly destroyed.", "A 'palazzo in fortezza' structure."]
    }
  },
  {
    id: "kid-landmark-jurapark-baltow-extra",
    type: "kid-landmark",
    parent: "PL-SK",
    coords: [21.5439, 51.0203],
    name: { de: "JuraPark Bałtów", hu: "JuraPark Bałtów", ro: "JuraPark Bałtów", en: "JuraPark Bałtów" },
    description: {
      de: "Polens erster Dinosaurierpark mit lebensgroßen Modellen und einem großen Freizeitkomplex. Ein beliebtes Ziel für Familien.",
      hu: "Lengyelország első dinoszauruszparkja életnagyságú modellekkel és egy nagy szabadidőkomplexummal. Kedvelt célpont a családok számára.",
      ro: "Primul parc de dinozauri din Polonia, cu modele în mărime naturală și un complex mare de agrement. O destinație populară pentru familii.",
      en: "Poland's first dinosaur park, with life-sized models and a large leisure complex. A popular destination for families."
    },
    facts: {
      de: ["Erster Dinosaurierpark in Polen.", "Bietet auch einen Zoo und einen Vergnügungspark.", "Echte Dinosaurierspuren in der Nähe gefunden."],
      hu: ["Az első dinoszauruszpark Lengyelországban.", "Állatkert és vidámpark is tartozik hozzá.", "Valódi dinoszaurusz-lábnyomokat találtak a közelben."],
      ro: ["Primul parc de dinozauri din Polonia.", "Include și o grădină zoologică și un parc de distracții.", "Urme reale de dinozaur găsite în apropiere."],
      en: ["First dinosaur park in Poland.", "Also features a zoo and an amusement park.", "Real dinosaur tracks found nearby."]
    }
  },
  {
    id: "city-opole-extra",
    type: "state-capital",
    parent: "PL-OP",
    coords: [17.925, 50.672],
    name: { de: "Oppeln", hu: "Opole", ro: "Opole", en: "Opole" },
    description: {
      de: "Die Hauptstadt der Woiwodschaft Oppeln und das historische Zentrum Oberschlesiens. Die Stadt ist bekannt für das Nationale Festival des Polnischen Liedes.",
      hu: "Az Opolei vajdaság fővárosa és Felső-Szilézia történelmi központja. A város a Lengyel Dal Országos Fesztiváljáról ismert.",
      ro: "Capitala Voievodatului Opole și centrul istoric al Sileziei Superioare. Orașul este cunoscut pentru Festivalul Național al Cântecului Polonez.",
      en: "The capital of the Opole Voivodeship and the historical center of Upper Silesia. The city is known for the National Festival of Polish Song."
    },
    facts: {
      de: ["Historische Hauptstadt von Oberschlesien.", "Jährliches nationales Liederfestival.", "Zentrum der deutschen Minderheit in Polen."],
      hu: ["Felső-Szilézia történelmi fővárosa.", "Évenkénti országos dalfesztivál.", "A lengyelországi német kisebbség központja."],
      ro: ["Capitala istorică a Sileziei Superioare.", "Festival național anual de cântece.", "Centrul minorității germane din Polonia."],
      en: ["Historical capital of Upper Silesia.", "Annual national song festival.", "Center of the German minority in Poland."]
    }
  },
  {
    id: "mountain-gora-swietej-anny-extra",
    type: "mountain",
    parent: "PL-OP",
    coords: [18.169, 50.457],
    name: { de: "St. Annaberg", hu: "Szent Anna-hegy", ro: "Muntele Sfânta Ana", en: "Góra Świętej Anny" },
    description: {
      de: "Ein Hügel und Wallfahrtsort mit einem Franziskanerkloster. Der Ort war auch Schauplatz einer wichtigen Schlacht während der schlesischen Aufstände.",
      hu: "Egy domb és zarándokhely ferences kolostorral. A hely egy fontos csata helyszíne is volt a sziléziai felkelések során.",
      ro: "Un deal și un loc de pelerinaj cu o mănăstire franciscană. Locul a fost și scena unei bătălii importante în timpul revoltelor sileziene.",
      en: "A hill and pilgrimage site with a Franciscan monastery. The site was also the scene of a major battle during the Silesian Uprisings."
    },
    facts: {
      de: ["Wichtiger katholischer Wallfahrtsort.", "Schauplatz der Schlacht am Annaberg 1921.", "Geopark mit vulkanischem Ursprung."],
      hu: ["Fontos katolikus zarándokhely.", "Az 1921-es Annabergi csata helyszíne.", "Vulkáni eredetű geopark."],
      ro: ["Important loc de pelerinaj catolic.", "Scena bătăliei de la Annaberg din 1921.", "Geoparc de origine vulcanică."],
      en: ["Important Catholic pilgrimage site.", "Scene of the 1921 Battle of Annaberg.", "Geopark of volcanic origin."]
    }
  },
  {
    id: "historical-moszna-castle-extra",
    type: "castle",
    parent: "PL-OP",
    coords: [17.771, 50.439],
    name: { de: "Schloss Moschen", hu: "Mosznai kastély", ro: "Castelul Moszna", en: "Moszna Castle" },
    description: {
      de: "Ein märchenhaftes Schloss mit 99 Türmen und 365 Zimmern. Es ist ein vielseitiges Gebäude, das oft als eines der schönsten Schlösser Polens bezeichnet wird.",
      hu: "Mesebeli kastély 99 toronnyal és 365 szobával. Sokoldalú épület, amelyet gyakran Lengyelország egyik legszebb kastélyának neveznek.",
      ro: "Un castel de basm cu 99 de turnuri și 365 de camere. Este o clădire eclectică, adesea numită unul dintre cele mai frumoase castele din Polonia.",
      en: "A fairy-tale castle with 99 towers and 365 rooms. It is an eclectic building, often called one of the most beautiful castles in Poland."
    },
    facts: {
      de: ["Bekannt für seine 99 Türme.", "Mischung aus Barock-, Neugotik- und Neorenaissance-Stilen.", "Ehemalige Residenz der Familie von Tiele-Winckler."],
      hu: ["Híres a 99 tornyáról.", "Barokk, neogótikus és neoreneszánsz stílusok keveréke.", "A von Tiele-Winckler család egykori rezidenciája."],
      ro: ["Renumit pentru cele 99 de turnuri ale sale.", "Amestec de stiluri baroc, neogotic și neorenascentist.", "Fosta reședință a familiei von Tiele-Winckler."],
      en: ["Famous for its 99 towers.", "Mix of Baroque, Neo-Gothic, and Neo-Renaissance styles.", "Former residence of the von Tiele-Winckler family."]
    }
  },
  {
    id: "city-bydgoszcz-extra",
    type: "city",
    parent: "PL-KP",
    coords: [18.0084, 53.1235],
    name: { de: "Bromberg", hu: "Bydgoszcz", ro: "Bydgoszcz", en: "Bydgoszcz" },
    description: {
      de: "Eine der Hauptstädte der Woiwodschaft Kujawien-Pommern, bekannt für ihre malerische Lage an den Flüssen Brda und Weichsel sowie den Bydgoszcz-Kanal.",
      hu: "A Kujávia-pomerániai vajdaság egyik fővárosa, amely a Brda és a Visztula folyók menti festői fekvéséről, valamint a Bydgoszczi-csatornáról ismert.",
      ro: "Una dintre capitalele Voievodatului Cuiavia și Pomerania, cunoscută pentru locația sa pitorească pe râurile Brda și Vistula și pentru Canalul Bydgoszcz.",
      en: "One of the capitals of the Kuyavian-Pomeranian Voivodeship, known for its scenic location on the Brda and Vistula rivers and the Bydgoszcz Canal."
    },
    facts: {
      de: ["Geteilte Hauptstadtfunktion mit Toruń.", "Wichtiger Knotenpunkt für Binnenwasserstraßen.", "'Exploseum' Museum auf einem ehemaligen Fabrikgelände."],
      hu: ["Megosztott fővárosi szerep Toruńnal.", "Fontos belvízi útvonal-csomópont.", "'Exploseum' múzeum egykori gyárterületen."],
      ro: ["Funcție de capitală împărțită cu Toruń.", "Nod important al căilor navigabile interioare.", "Muzeul 'Exploseum' pe un fost sit industrial."],
      en: ["Shared capital function with Toruń.", "Major inland waterway hub.", "'Exploseum' museum on a former factory site."]
    }
  },
  {
    id: "agriculture-ciechocinek-extra",
    type: "agriculture",
    parent: "PL-KP",
    coords: [18.783, 52.883],
    name: { de: "Ciechocinek Gradierwerke", hu: "Ciechocineki sólepárlók", ro: "Salinele din Ciechocinek", en: "Ciechocinek Graduation Towers" },
    description: {
      de: "Ein berühmter Kurort, der für seine drei massiven hölzernen Gradierwerke bekannt ist. Diese Strukturen erzeugen ein heilendes Mikroklima, das reich an Jod ist.",
      hu: "Híres gyógyüdülőhely, amely három hatalmas, fából készült sólepárló tornyáról ismert. Ezek a szerkezetek gyógyító, jódban gazdag mikroklímát hoznak létre.",
      ro: "O renumită stațiune balneară, cunoscută pentru cele trei turnuri masive de gradare din lemn. Aceste structuri creează un microclimat curativ bogat în iod.",
      en: "A famous spa town known for its three massive wooden graduation towers. These structures create a therapeutic, iodine-rich microclimate."
    },
    facts: {
      de: ["Größte Gradierwerke in Europa.", "Kurort seit dem 19. Jahrhundert.", "Die Sole wird zur Salzgewinnung und für Inhalationen verwendet."],
      hu: ["Európa legnagyobb sólepárló tornyai.", "Gyógyüdülőhely a 19. század óta.", "A sós vizet sókitermelésre és inhalálásra használják."],
      ro: ["Cele mai mari turnuri de gradare din Europa.", "Stațiune balneară din secolul al XIX-lea.", "Saramura este folosită pentru extracția sării și pentru inhalații."],
      en: ["Largest graduation towers in Europe.", "Spa town since the 19th century.", "Brine is used for salt extraction and inhalations."]
    }
  },
  {
    id: "landmark-biskupin-extra",
    type: "historical",
    parent: "PL-KP",
    coords: [17.741, 52.783],
    name: { de: "Biskupin", hu: "Biskupin", ro: "Biskupin", en: "Biskupin" },
    description: {
      de: "Eine rekonstruierte befestigte Siedlung aus der Eisenzeit der Lausitzer Kultur. Es ist eines der wichtigsten archäologischen Reservate in Polen.",
      hu: "A lausitzi kultúra vaskori erődített településének rekonstrukciója. Lengyelország egyik legfontosabb régészeti rezervátuma.",
      ro: "O așezare fortificată reconstruită din Epoca Fierului, aparținând culturii lusaciane. Este una dintre cele mai importante rezervații arheologice din Polonia.",
      en: "A reconstructed fortified settlement from the Iron Age Lusatian culture. It is one of the most important archaeological reserves in Poland."
    },
    facts: {
      de: ["Siedlung aus dem 8. Jahrhundert v. Chr.", "Auf einer Halbinsel in einem See erbaut.", "Lebensgroße Rekonstruktion."],
      hu: ["Kr. e. 8. századi település.", "Egy tó félszigetére épült.", "Életnagyságú rekonstrukció."],
      ro: ["Așezare din secolul al VIII-lea î.Hr.", "Construită pe o peninsulă a unui lac.", "Reconstrucție în mărime naturală."],
      en: ["Settlement from the 8th century BC.", "Built on a peninsula in a lake.", "Life-size reconstruction."]
    }
  },
  {
    id: "historical-chelmno-extra",
    type: "historical",
    parent: "PL-KP",
    coords: [18.425, 53.35],
    name: { de: "Kulm", hu: "Chełmno", ro: "Chełmno", en: "Chełmno" },
    description: {
      de: "Bekannt als die 'Stadt der Liebenden' und eine der am besten erhaltenen mittelalterlichen Städte. Ihr Stadtplan diente als Vorbild für viele andere Städte.",
      hu: "A 'szerelmesek városa'-ként ismert, és az egyik legjobb állapotban fennmaradt középkori város. Városszerkezete mintául szolgált sok más város számára.",
      ro: "Cunoscut ca 'Orașul Îndrăgostiților' și unul dintre cele mai bine conservate orașe medievale. Planul său urbanistic a servit drept model pentru multe alte orașe.",
      en: "Known as the 'City of Lovers' and one of the best-preserved medieval towns. Its town plan served as a model for many other cities."
    },
    facts: {
      de: ["Nahezu intakte mittelalterliche Stadtmauer.", "Reliquie des Heiligen Valentin.", "Beispiel für das Kulmer Recht."],
      hu: ["Szinte érintetlen középkori városfal.", "Szent Bálint ereklyéje.", "A chełmnói jog példája."],
      ro: ["Ziduri medievale aproape intacte.", "Relicva Sfântului Valentin.", "Exemplu al legii de la Chełmno."],
      en: ["Almost intact medieval city walls.", "Relic of St. Valentine.", "Example of Chełmno law."]
    }
  },
  {
    id: "city-bialystok-extra",
    type: "state-capital",
    parent: "PL-PD",
    coords: [23.163, 53.132],
    name: { de: "Białystok", hu: "Białystok", ro: "Białystok", en: "Białystok" },
    description: {
      de: "Die größte Stadt im Nordosten Polens und Hauptstadt der Woiwodschaft Podlachien. Ein Schmelztiegel der Kulturen nahe der Grenzen zu Weißrussland und Litauen.",
      hu: "Északkelet-Lengyelország legnagyobb városa és a Podlasiei vajdaság fővárosa. Kultúrák olvasztótégelye a fehérorosz és litván határ közelében.",
      ro: "Cel mai mare oraș din nord-estul Poloniei și capitala Voievodatului Podlasia. Un creuzet de culturi aproape de granițele cu Belarus și Lituania.",
      en: "The largest city in northeastern Poland and the capital of the Podlaskie Voivodeship. A melting pot of cultures near the borders of Belarus and Lithuania."
    },
    facts: {
      de: ["Hauptstadt von Podlachien.", "Branicki-Palast, bekannt als 'polnisches Versailles'.", "Geburtsort von L. L. Zamenhof, dem Schöpfer des Esperanto."],
      hu: ["Podlasie fővárosa.", "Branicki-palota, a 'lengyel Versailles'-ként ismert.", "L. L. Zamenhof, az eszperantó megalkotójának szülőhelye."],
      ro: ["Capitala Voievodatului Podlasia.", "Palatul Branicki, cunoscut ca 'Versailles-ul polonez'.", "Locul nașterii lui L. L. Zamenhof, creatorul Esperanto."],
      en: ["Capital of Podlaskie Voivodeship.", "Branicki Palace, known as the 'Polish Versailles'.", "Birthplace of L. L. Zamenhof, creator of Esperanto."]
    }
  },
  {
    id: "river-biebrza-extra",
    type: "river",
    parent: "PL-PD",
    coords: [22.4, 53.25],
    name: { de: "Biebrza", hu: "Biebrza", ro: "Biebrza", en: "Biebrza River" },
    description: {
      de: "Ein Fluss, der durch die größten Sumpfgebiete Polens fließt und den Kern des Biebrza-Nationalparks bildet. Ein Paradies für Ornithologen.",
      hu: "A folyó Lengyelország legnagyobb mocsárvidékén folyik keresztül, és a Biebrza Nemzeti Park magját képezi. Az ornitológusok paradicsoma.",
      ro: "Un râu care curge prin cele mai mari mlaștini din Polonia, formând nucleul Parcului Național Biebrza. Un paradis pentru ornitologi.",
      en: "A river that flows through Poland's largest marshlands, forming the core of the Biebrza National Park. A paradise for ornithologists."
    },
    facts: {
      de: ["Fließt durch den Biebrza-Nationalpark.", "Größte natürliche Sumpflandschaft in Mitteleuropa.", "Brutgebiet für seltene Vogelarten."],
      hu: ["A Biebrza Nemzeti Parkon folyik keresztül.", "Közép-Európa legnagyobb természetes mocsárvidéke.", "Ritka madárfajok fészkelőhelye."],
      ro: ["Curge prin Parcul Național Biebrza.", "Cea mai mare zonă mlăștinoasă naturală din Europa Centrală.", "Zonă de cuibărit pentru specii rare de păsări."],
      en: ["Flows through Biebrza National Park.", "Largest natural marshland in Central Europe.", "Breeding ground for rare bird species."]
    }
  },
  {
    id: "historical-tykocin-extra",
    type: "historical",
    parent: "PL-PD",
    coords: [22.769, 53.205],
    name: { de: "Tykocin", hu: "Tykocin", ro: "Tykocin", en: "Tykocin" },
    description: {
      de: "Eine kleine, aber historisch bedeutende Stadt mit einer gut erhaltenen barocken Synagoge und einem rekonstruierten Schloss. Einst ein wichtiges jüdisches Zentrum.",
      hu: "Kis, de történelmileg jelentős város, jól megőrzött barokk zsinagógával és rekonstruált várral. Egykor fontos zsidó központ volt.",
      ro: "Un oraș mic, dar important din punct de vedere istoric, cu o sinagogă barocă bine conservată și un castel reconstruit. Odinioară un important centru evreiesc.",
      en: "A small but historically significant town with a well-preserved Baroque synagogue and a reconstructed castle. Once an important Jewish center."
    },
    facts: {
      de: ["Ehemaliges 'Schtetl' (jüdische Kleinstadt).", "Große Synagoge aus dem 17. Jahrhundert, heute Museum.", "Rekonstruiertes Königsschloss."],
      hu: ["Egykori 'shtetl' (zsidó kisváros).", "17. századi Nagy Zsinagóga, ma múzeum.", "Rekonstruált királyi vár."],
      ro: ["Fost 'shtetl' (orășel evreiesc).", "Marea Sinagogă din secolul al XVII-lea, acum muzeu.", "Castel regal reconstruit."],
      en: ["Former 'shtetl' (Jewish townlet).", "17th-century Great Synagogue, now a museum.", "Reconstructed royal castle."]
    }
  },
  {
    id: "forest-knyszyn-forest-extra",
    type: "forest",
    parent: "PL-PD",
    coords: [23.1, 53.3],
    name: { de: "Knyszyn-Urwald", hu: "Knyszyni-erdő", ro: "Pădurea Knyszyn", en: "Knyszyn Forest" },
    description: {
      de: "Ein großer Waldkomplex in der Nähe von Białystok, Teil des europäischen ökologischen Netzwerks Natura 2000. Bekannt für seine Wolfs- und Luchs-Populationen.",
      hu: "Nagy erdőkomplexum Białystok közelében, a Natura 2000 európai ökológiai hálózat része. Farkas- és hiúzpopulációiról ismert.",
      ro: "Un complex forestier mare lângă Białystok, parte a rețelei ecologice europene Natura 2000. Cunoscut pentru populațiile sale de lupi și râși.",
      en: "A large forest complex near Białystok, part of the European Natura 2000 ecological network. Known for its wolf and lynx populations."
    },
    facts: {
      de: ["Umfasst eine Fläche von über 1.000 km².", "Heimat für Wölfe, Luchse und Wisente.", "Wichtiger Teil des 'Grünen Lungen Polens'."],
      hu: ["Területe meghaladja az 1000 km²-t.", "Farkasok, hiúzok és bölények otthona.", "A 'Lengyelország Zöld Tüdeje' fontos része."],
      ro: ["Acoperă o suprafață de peste 1.000 km².", "Adăpostește lupi, râși și zimbri.", "Parte importantă a 'Plămânilor Verzi ai Poloniei'."],
      en: ["Covers an area of over 1,000 km².", "Home to wolves, lynx, and bison.", "Important part of the 'Green Lungs of Poland'."]
    }
  },
  {
    id: "city-suwalki-extra",
    type: "city",
    parent: "PL-PD",
    coords: [22.930, 54.096],
    name: { de: "Suwałki", hu: "Suwałki", ro: "Suwałki", en: "Suwałki" },
    description: {
      de: "Bekannt als der 'polnische Kältepol', eine der kältesten Städte Polens. Wichtiges Kulturzentrum in der Suwałki-Region nahe der litauischen Grenze.",
      hu: "A 'lengyel hidegpólus'-ként ismert, Lengyelország egyik leghidegebb városa. Fontos kulturális központ a Suwałki régióban, a litván határ közelében.",
      ro: "Cunoscut ca 'polul frigului polonez', unul dintre cele mai reci orașe din Polonia. Un centru cultural important în regiunea Suwałki, aproape de granița cu Lituania.",
      en: "Known as the 'Polish cold pole', one of the coldest cities in Poland. An important cultural center in the Suwałki region, near the Lithuanian border."
    },
    facts: {
      de: ["Kälteste Stadt in Polen.", "Tor zur malerischen Suwałki-Seenplatte.", "Strategische Lage in der Suwałki-Lücke."],
      hu: ["Lengyelország leghidegebb városa.", "Kapuja a festői Suwałki-tóvidéknek.", "Stratégiai fekvés a Suwałki-folyosóban."],
      ro: ["Cel mai rece oraș din Polonia.", "Poarta către pitoreasca regiune a lacurilor Suwałki.", "Poziție strategică în Coridorul Suwałki."],
      en: ["Coldest city in Poland.", "Gateway to the picturesque Suwałki Lake District.", "Strategic location in the Suwałki Gap."]
    }
  },
  {
    id: "city-szczecin-extra",
    type: "state-capital",
    parent: "PL-ZP",
    coords: [14.552, 53.428],
    name: { de: "Stettin", hu: "Szczecin", ro: "Szczecin", en: "Szczecin" },
    description: {
      de: "Die Hauptstadt Westpommerns und einer der größten Seehäfen Polens an der Ostsee, obwohl sie 65 km landeinwärts liegt. Bekannt für ihre sternförmigen Plätze.",
      hu: "Nyugat-Pomeránia fővárosa és Lengyelország egyik legnagyobb tengeri kikötője a Balti-tengeren, bár 65 km-re a szárazföld belsejében fekszik. Csillag alakú tereiről ismert.",
      ro: "Capitala Pomeraniei de Vest și unul dintre cele mai mari porturi maritime ale Poloniei la Marea Baltică, deși este situat la 65 km în interior. Cunoscut pentru piețele sale în formă de stea.",
      en: "The capital of West Pomerania and one of Poland's largest seaports on the Baltic Sea, despite being 65 km inland. Known for its star-shaped squares."
    },
    facts: {
      de: ["Siebtgrößte Stadt Polens.", "Wichtiger Seehafen an der Oder.", "Hakenterrasse als Wahrzeichen."],
      hu: ["Lengyelország hetedik legnagyobb városa.", "Fontos tengeri kikötő az Odera mentén.", "A Wały Chrobrego sétány a város jelképe."],
      ro: ["Al șaptelea cel mai mare oraș din Polonia.", "Port maritim important pe râul Oder.", "Promenada Wały Chrobrego este un punct de atracție."],
      en: ["Seventh-largest city in Poland.", "Major seaport on the Oder river.", "Wały Chrobrego promenade is a landmark."]
    }
  },
  {
    id: "sea-swinoujscie-extra",
    type: "port",
    parent: "PL-ZP",
    coords: [14.247, 53.91],
    name: { de: "Swinemünde", hu: "Świnoujście", ro: "Świnoujście", en: "Świnoujście" },
    description: {
      de: "Eine Stadt auf 44 Inseln mit einem wichtigen Fährhafen und einem Marinestützpunkt. Der Leuchtturm ist einer der höchsten der Welt.",
      hu: "Egy 44 szigeten fekvő város, fontos kompkikötővel és haditengerészeti bázissal. Világítótornya a világ egyik legmagasabbja.",
      ro: "Un oraș situat pe 44 de insule, cu un important port de feriboturi și o bază navală. Farul său este unul dintre cele mai înalte din lume.",
      en: "A city located on 44 islands, with a major ferry port and naval base. Its lighthouse is one of the tallest in the world."
    },
    facts: {
      de: ["Liegt auf den Inseln Usedom und Wollin.", "Höchster Leuchtturm in Polen (68m).", "Wichtiger LNG-Terminal."],
      hu: ["Usedom és Wolin szigetén fekszik.", "Lengyelország legmagasabb világítótornya (68 m).", "Fontos LNG-terminál."],
      ro: ["Situat pe insulele Usedom și Wolin.", "Cel mai înalt far din Polonia (68 m).", "Terminal LNG important."],
      en: ["Located on Usedom and Wolin islands.", "Tallest lighthouse in Poland (68m).", "Major LNG terminal."]
    }
  },
  {
    id: "nature-wolin-national-park-extra",
    type: "nature",
    parent: "PL-ZP",
    coords: [14.5, 53.9],
    name: { de: "Nationalpark Wollin", hu: "Wolin Nemzeti Park", ro: "Parcul Național Wolin", en: "Wolin National Park" },
    description: {
      de: "Schützt die einzigartige Landschaft der Insel Wollin mit ihren Steilküsten, Buchenwäldern und einem Wisentgehege.",
      hu: "Védi Wolin szigetének egyedülálló táját a sziklaszirtjeivel, bükkerdőivel és egy bölényrezervátumával.",
      ro: "Protejează peisajul unic al insulei Wolin, cu falezele sale, pădurile de fag și o rezervație de zimbri.",
      en: "Protects the unique landscape of Wolin Island, with its cliffs, beech forests, and a European bison enclosure."
    },
    facts: {
      de: ["Erster Meeresnationalpark in Polen.", "Berühmt für seine hohen Klippen.", "Schutzgebiet für Seeadler."],
      hu: ["Lengyelország első tengeri nemzeti parkja.", "Híres magas sziklaszirtjeiről.", "A rétisasok védett területe."],
      ro: ["Primul parc național maritim din Polonia.", "Renumit pentru falezele sale înalte.", "Arie protejată pentru vulturul codalb."],
      en: ["First maritime national park in Poland.", "Famous for its high cliffs.", "Sanctuary for white-tailed eagles."]
    }
  },
  {
    id: "historical-crooked-forest-extra",
    type: "forest",
    parent: "PL-ZP",
    coords: [14.375, 53.213],
    name: { de: "Krummer Wald", hu: "Görbe erdő", ro: "Pădurea Strâmbă", en: "Crooked Forest" },
    description: {
      de: "Ein mysteriöser Hain von Kiefern mit J-förmig gekrümmten Stämmen. Der Grund für die Deformation ist bis heute ungeklärt und Gegenstand von Spekulationen.",
      hu: "Rejtélyes fenyőliget J-alakban görbült törzsű fákkal. A deformáció oka máig tisztázatlan és spekulációk tárgya.",
      ro: "O dumbravă misterioasă de pini cu trunchiuri curbate în formă de J. Cauza deformării este neclară și face obiectul speculațiilor.",
      en: "A mysterious grove of pine trees with J-shaped curved trunks. The cause of the deformation is unclear and a subject of speculation."
    },
    facts: {
      de: ["Etwa 400 deformierte Kiefern.", "Gepflanzt um 1930.", "Die Ursache der Krümmung ist ein Rätsel."],
      hu: ["Körülbelül 400 deformálódott fenyőfa.", "Körülbelül 1930-ban ültették.", "A görbület oka rejtély."],
      ro: ["Aproximativ 400 de pini deformați.", "Plantați în jurul anului 1930.", "Cauza curburii este un mister."],
      en: ["About 400 deformed pine trees.", "Planted around 1930.", "The cause of the curvature is a mystery."]
    }
  },
  {
    id: "city-kolobrzeg-extra",
    type: "city",
    parent: "PL-ZP",
    coords: [15.576, 54.176],
    name: { de: "Kolberg", hu: "Kołobrzeg", ro: "Kołobrzeg", en: "Kołobrzeg" },
    description: {
      de: "Ein beliebter Kur- und Badeort an der Ostsee. Bekannt für seine Solequellen, seinen breiten Sandstrand und seinen Leuchtturm.",
      hu: "Népszerű gyógy- és üdülőhely a Balti-tenger partján. Ismert a sós forrásairól, széles homokos strandjáról és világítótornyáról.",
      ro: "O populară stațiune balneară și de agrement la Marea Baltică. Cunoscută pentru izvoarele sale saline, plaja sa largă cu nisip și farul său.",
      en: "A popular spa and seaside resort on the Baltic coast. Known for its saline springs, wide sandy beach, and lighthouse."
    },
    facts: {
      de: ["Großer Kurort an der Ostsee.", "Mittelalterliche Kathedrale.", "Militärmuseum in einem alten Fort."],
      hu: ["Nagy gyógyüdülőhely a Balti-tenger partján.", "Középkori katedrális.", "Hadimúzeum egy régi erődben."],
      ro: ["Stațiune balneară importantă la Marea Baltică.", "Catedrală medievală.", "Muzeu militar într-un fort vechi."],
      en: ["Major spa resort on the Baltic Sea.", "Medieval cathedral.", "Military museum in an old fort."]
    }
  },
  {
    id: "industry-pge-turow-extra",
    type: "industry",
    parent: "PL-DS",
    coords: [14.91, 50.88],
    name: { de: "Kraftwerk Turów", hu: "Turówi erőmű", ro: "Centrala Turów", en: "Turów Power Station" },
    description: {
      de: "Ein großes braunkohlebefeuertes Kraftwerk und ein angrenzender Tagebau, die eine wichtige Rolle in der polnischen Energieversorgung spielen, aber auch Umweltbedenken aufwerfen.",
      hu: "Egy nagy lignittüzelésű erőmű és a hozzá tartozó külszíni bánya, amely fontos szerepet játszik Lengyelország energiaellátásában, de környezetvédelmi aggályokat is felvet.",
      ro: "O mare centrală electrică pe lignit și o mină de suprafață adiacentă, care joacă un rol important în aprovizionarea cu energie a Poloniei, dar ridică și preocupări de mediu.",
      en: "A large lignite-fired power station and an adjacent open-cast mine, playing a major role in Poland's energy supply but also raising environmental concerns."
    },
    facts: {
      de: ["Eines der größten Kraftwerke in Polen.", "Befeuert mit Braunkohle aus dem Tagebau Turów.", "Kontrovers wegen Umweltauswirkungen."],
      hu: ["Lengyelország egyik legnagyobb erőműve.", "A turówi külszíni bányából származó lignittel tüzelik.", "Környezeti hatásai miatt ellentmondásos."],
      ro: ["Una dintre cele mai mari centrale electrice din Polonia.", "Alimentată cu lignit din mina Turów.", "Controversată din cauza impactului asupra mediului."],
      en: ["One of the largest power plants in Poland.", "Fired with lignite from the Turów mine.", "Controversial due to environmental impact."]
    }
  },
  {
    id: "industry-kghm-copper-extra",
    type: "industry",
    parent: "PL-DS",
    coords: [16.0, 51.5],
    name: { de: "KGHM Kupferbergbau", hu: "KGHM rézbányászat", ro: "Mineritul de cupru KGHM", en: "KGHM Copper Mining" },
    description: {
      de: "KGHM Polska Miedź ist einer der weltweit größten Produzenten von Kupfer und Silber. Die Hauptminen und Hütten befinden sich in der Region Niederschlesien.",
      hu: "A KGHM Polska Miedź a világ egyik legnagyobb réz- és ezüsttermelője. A fő bányák és kohók Alsó-Szilézia régiójában találhatók.",
      ro: "KGHM Polska Miedź este unul dintre cei mai mari producători de cupru și argint din lume. Minele și topitoriile principale sunt situate în regiunea Silezia Inferioară.",
      en: "KGHM Polska Miedź is one of the world's largest producers of copper and silver. The main mines and smelters are located in the Lower Silesian region."
    },
    facts: {
      de: ["Einer der größten Kupferproduzenten der Welt.", "Hauptsitz in Lubin, Niederschlesien.", "Produziert auch große Mengen an Silber."],
      hu: ["A világ egyik legnagyobb réztermelője.", "Székhelye Lubinban, Alsó-Sziléziában található.", "Jelentős mennyiségű ezüstöt is termel."],
      ro: ["Unul dintre cei mai mari producători de cupru din lume.", "Sediu în Lubin, Silezia Inferioară.", "Produce și cantități mari de argint."],
      en: ["One of the world's largest copper producers.", "Headquartered in Lubin, Lower Silesia.", "Also produces large amounts of silver."]
    }
  },
  {
    id: "agriculture-lower-silesian-forests-extra",
    type: "agriculture",
    parent: "PL-DS",
    coords: [15.5, 51.4],
    name: { de: "Niederschlesische Heide", hu: "Alsó-sziléziai erdők", ro: "Pădurile Sileziei Inferioare", en: "Lower Silesian Forests" },
    description: {
      de: "Eines der größten zusammenhängenden Waldgebiete Polens, wichtig für die Forstwirtschaft und den Naturschutz. Bekannt für seine Pilz- und Beerenvielfalt.",
      hu: "Lengyelország egyik legnagyobb összefüggő erdőterülete, amely fontos a faipar és a természetvédelem szempontjából. Híres gomba- és bogyósválasztékáról.",
      ro: "Una dintre cele mai mari zone forestiere continue din Polonia, importantă pentru silvicultură și conservarea naturii. Cunoscută pentru varietatea sa de ciuperci și fructe de pădure.",
      en: "One of Poland's largest continuous forest areas, important for forestry and nature conservation. Known for its variety of mushrooms and berries."
    },
    facts: {
      de: ["Größter Waldkomplex in Polen.", "Wichtige Holzquelle.", "Traditionelles Gebiet für Pilz- und Beerensammler."],
      hu: ["Lengyelország legnagyobb erdőkomplexe.", "Fontos faanyagforrás.", "Hagyományos gomba- és bogyógyűjtő terület."],
      ro: ["Cel mai mare complex forestier din Polonia.", "Sursă importantă de lemn.", "Zonă tradițională pentru culegătorii de ciuperci și fructe de pădure."],
      en: ["Largest forest complex in Poland.", "Important source of timber.", "Traditional area for mushroom and berry picking."]
    }
  },
  {
    id: "port-gdynia-extra",
    type: "port",
    parent: "PL-PM",
    coords: [18.542, 54.518],
    name: { de: "Hafen Gdynia", hu: "Gdynia kikötője", ro: "Portul Gdynia", en: "Port of Gdynia" },
    description: {
      de: "Ein moderner Seehafen, der in den 1920er Jahren als Polens 'Tor zur Welt' gebaut wurde. Heute ein wichtiger Container- und Fährhafen.",
      hu: "Modern tengeri kikötő, amely az 1920-as években épült Lengyelország 'kapujaként a világra'. Ma fontos konténer- és kompkikötő.",
      ro: "Un port maritim modern construit în anii 1920 ca 'poarta Poloniei către lume'. Astăzi este un important port de containere și feriboturi.",
      en: "A modern seaport built in the 1920s as Poland's 'gateway to the world'. Today it is a major container and ferry port."
    },
    facts: {
      de: ["Erbaut nach dem Ersten Weltkrieg.", "Wichtiger Teil der Dreistadt (mit Danzig und Sopot).", "Jährliches Open'er Musikfestival in der Nähe."],
      hu: ["Az első világháború után épült.", "A Hármasváros fontos része (Gdańskkal és Sopottal).", "Évente megrendezett Open'er zenei fesztivál a közelben."],
      ro: ["Construit după Primul Război Mondial.", "Parte importantă a Triciudadului (cu Gdańsk și Sopot).", "Festivalul anual de muzică Open'er în apropiere."],
      en: ["Built after World War I.", "Important part of the Tricity (with Gdańsk and Sopot).", "Annual Open'er Music Festival nearby."]
    }
  },
  {
    id: "industry-gdansk-shipyard-extra",
    type: "industry",
    parent: "PL-PM",
    coords: [18.65, 54.36],
    name: { de: "Danziger Werft", hu: "Gdański Hajógyár", ro: "Șantierul Naval Gdańsk", en: "Gdańsk Shipyard" },
    description: {
      de: "Die Werft ist nicht nur ein wichtiger Industriestandort, sondern auch der Geburtsort der Solidarność-Bewegung, die zum Fall des Kommunismus in Polen führte.",
      hu: "A hajógyár nemcsak fontos ipari helyszín, hanem a Szolidaritás mozgalom szülőhelye is, amely a kommunizmus bukásához vezetett Lengyelországban.",
      ro: "Șantierul naval nu este doar un important sit industrial, ci și locul de naștere al mișcării Solidaritatea, care a dus la căderea comunismului în Polonia.",
      en: "The shipyard is not only a major industrial site but also the birthplace of the Solidarity movement, which led to the fall of communism in Poland."
    },
    facts: {
      de: ["Geburtsort der 'Solidarność'-Bewegung.", "Historisch eine der größten Werften Europas.", "Das Europäische Solidarność-Zentrum befindet sich hier."],
      hu: ["A 'Szolidaritás' mozgalom szülőhelye.", "Történelmileg Európa egyik legnagyobb hajógyára.", "Itt található az Európai Szolidaritás Központ."],
      ro: ["Locul de naștere al mișcării 'Solidaritatea'.", "Istoric, unul dintre cele mai mari șantiere navale din Europa.", "Centrul European de Solidaritate se află aici."],
      en: ["Birthplace of the 'Solidarity' movement.", "Historically one of Europe's largest shipyards.", "The European Solidarity Centre is located here."]
    }
  },
  {
    id: "kid-landmark-sopot-pier-extra",
    type: "kid-landmark",
    parent: "PL-PM",
    coords: [18.569, 54.446],
    name: { de: "Seebrücke von Sopot", hu: "Sopoti móló", ro: "Debarcaderul din Sopot", en: "Sopot Pier" },
    description: {
      de: "Die längste hölzerne Seebrücke Europas, ein beliebter Ort für Spaziergänge mit Blick auf die Danziger Bucht. Ein Wahrzeichen des Kurortes Sopot.",
      hu: "Európa leghosszabb fából készült mólója, kedvelt sétálóhely, kilátással a Gdański-öbölre. Sopot fürdőváros jelképe.",
      ro: "Cel mai lung debarcader din lemn din Europa, un loc popular pentru plimbări cu vedere la Golful Gdańsk. Un simbol al stațiunii Sopot.",
      en: "The longest wooden pier in Europe, a popular place for strolls with views of the Gdańsk Bay. A landmark of the Sopot resort town."
    },
    facts: {
      de: ["Längste Holzseebrücke in Europa (über 500m).", "Teil des Kurortes Sopot.", "Bietet Jachthafen und Restaurant."],
      hu: ["Európa leghosszabb fa mólója (több mint 500 m).", "Sopot fürdőváros része.", "Kikötővel és étteremmel rendelkezik."],
      ro: ["Cel mai lung debarcader din lemn din Europa (peste 500m).", "Parte a stațiunii Sopot.", "Oferă un port de agrement și un restaurant."],
      en: ["Longest wooden pier in Europe (over 500m).", "Part of the Sopot health resort.", "Features a marina and restaurant."]
    }
  },
  {
    id: "animal-habitat-hel-peninsula-extra",
    type: "animal-habitat",
    parent: "PL-PM",
    coords: [18.6, 54.7],
    name: { de: "Halbinsel Hel", hu: "Hel-félsziget", ro: "Peninsula Hel", en: "Hel Peninsula" },
    description: {
      de: "Eine 35 km lange Sandbank, die für ihre Strände, Kiefernwälder und eine Robbenaufzuchtstation bekannt ist. Ein Paradies für Wind- und Kitesurfer.",
      hu: "Egy 35 km hosszú homokpad, amely strandjairól, fenyőerdőiről és egy fókatenyésztő állomásról ismert. A szörfösök és kitesurf-ösök paradicsoma.",
      ro: "O limbă de nisip lungă de 35 km, cunoscută pentru plajele sale, pădurile de pini și o stațiune de reabilitare a focilor. Un paradis pentru windsurfing și kitesurfing.",
      en: "A 35 km long sand bar known for its beaches, pine forests, and a seal sanctuary. A paradise for wind and kite surfers."
    },
    facts: {
      de: ["35 km lange Sandnehrung.", "Wichtige Robbenaufzuchtstation.", "Beliebt bei Wind- und Kitesurfern."],
      hu: ["35 km hosszú homokpad.", "Fontos fókanevelő állomás.", "Népszerű a szörfösök és sárkányszörfösök körében."],
      ro: ["Limbă de nisip de 35 km.", "Stațiune importantă de reabilitare a focilor.", "Populară printre practicanții de windsurfing și kitesurfing."],
      en: ["35-km long sand spit.", "Important seal sanctuary.", "Popular with windsurfers and kitesurfers."]
    }
  },
  {
    id: "animal-habitat-gdansk-zoo-extra",
    type: "animal-habitat",
    parent: "PL-PM",
    coords: [18.57, 54.4],
    name: { de: "Zoo Danzig", hu: "Gdański Állatkert", ro: "Grădina Zoologică Gdańsk", en: "Gdańsk Zoo" },
    description: {
      de: "Der größte Zoo Polens, gelegen im Landschaftspark Dreistadt. Heimat für viele seltene und exotische Tiere, darunter Zwergflusspferde und Andenkondore.",
      hu: "Lengyelország legnagyobb állatkertje, a Hármasváros Tájvédelmi Parkban található. Számos ritka és egzotikus állat otthona, köztük törpe vízilovak és andoki kondorok.",
      ro: "Cea mai mare grădină zoologică din Polonia, situată în Parcul Peisagistic Tricity. Adăpostește multe animale rare și exotice, inclusiv hipopotami pitici și condori andini.",
      en: "The largest zoo in Poland, located in the Tricity Landscape Park. Home to many rare and exotic animals, including pygmy hippos and Andean condors."
    },
    facts: {
      de: ["Größter Zoo in Polen nach Fläche.", "Liegt in einem Waldgebiet in Oliwa.", "Züchtet erfolgreich gefährdete Arten."],
      hu: ["Területét tekintve Lengyelország legnagyobb állatkertje.", "Egy erdős területen található Oliwában.", "Sikeresen tenyészt veszélyeztetett fajokat."],
      ro: ["Cea mai mare grădină zoologică din Polonia ca suprafață.", "Situată într-o zonă împădurită din Oliwa.", "Reproduce cu succes specii pe cale de dispariție."],
      en: ["Largest zoo in Poland by area.", "Located in a forested area in Oliwa.", "Successfully breeds endangered species."]
    }
  },
  {
    id: "industry-pkn-orlen-plock-extra",
    type: "industry",
    parent: "PL-MA",
    coords: [19.68, 52.55],
    name: { de: "PKN Orlen Raffinerie Płock", hu: "PKN Orlen Płocki finomító", ro: "Rafinăria PKN Orlen Płock", en: "PKN Orlen Płock Refinery" },
    description: {
      de: "Die größte Raffinerie in Polen, betrieben von PKN Orlen, einem der größten Ölkonzerne in Mitteleuropa. Ein entscheidender Teil der polnischen Energieinfrastruktur.",
      hu: "Lengyelország legnagyobb finomítója, amelyet a PKN Orlen, Közép-Európa egyik legnagyobb olajvállalata üzemeltet. A lengyel energiainfrastruktúra kulcsfontosságú része.",
      ro: "Cea mai mare rafinărie din Polonia, operată de PKN Orlen, una dintre cele mai mari corporații petroliere din Europa Centrală. O parte crucială a infrastructurii energetice a Poloniei.",
      en: "The largest refinery in Poland, operated by PKN Orlen, one of the largest oil corporations in Central Europe. A crucial part of Poland's energy infrastructure."
    },
    facts: {
      de: ["Größte Ölraffinerie in Polen.", "Hauptsitz von PKN Orlen.", "Wichtiger Arbeitgeber in der Region Masowien."],
      hu: ["Lengyelország legnagyobb olajfinomítója.", "A PKN Orlen székhelye.", "Fontos munkaadó a Mazóviai régióban."],
      ro: ["Cea mai mare rafinărie de petrol din Polonia.", "Sediul central al PKN Orlen.", "Angajator important în regiunea Mazovia."],
      en: ["Largest oil refinery in Poland.", "Headquarters of PKN Orlen.", "Major employer in the Masovian region."]
    }
  },
  {
    id: "historical-zelazowa-wola-extra",
    type: "historical",
    parent: "PL-MA",
    coords: [20.31, 52.25],
    name: { de: "Żelazowa Wola", hu: "Żelazowa Wola", ro: "Żelazowa Wola", en: "Żelazowa Wola" },
    description: {
      de: "Der Geburtsort des Komponisten Frédéric Chopin. Das Geburtshaus ist heute ein Museum, umgeben von einem malerischen Park, in dem im Sommer Klavierkonzerte stattfinden.",
      hu: "Frédéric Chopin zeneszerző szülőhelye. Szülőháza ma múzeum, amelyet festői park vesz körül, ahol nyáron zongorakoncerteket tartanak.",
      ro: "Locul de naștere al compozitorului Frédéric Chopin. Casa sa natală este acum un muzeu, înconjurat de un parc pitoresc unde vara au loc concerte de pian.",
      en: "The birthplace of composer Frédéric Chopin. His birth house is now a museum, surrounded by a picturesque park where piano recitals are held in the summer."
    },
    facts: {
      de: ["Geburtsort von Frédéric Chopin.", "Museum im ehemaligen Gutshaus.", "Sommerliche Klavierkonzerte im Park."],
      hu: ["Frédéric Chopin szülőhelye.", "Múzeum az egykori kúriában.", "Nyári zongorakoncertek a parkban."],
      ro: ["Locul de naștere al lui Frédéric Chopin.", "Muzeu în fostul conac.", "Concerte de pian vara în parc."],
      en: ["Birthplace of Frédéric Chopin.", "Museum in the former manor house.", "Summer piano recitals in the park."]
    }
  },
  {
    id: "kid-landmark-warsaw-zoo-extra",
    type: "animal-habitat",
    parent: "PL-MA",
    coords: [21.02, 52.25],
    name: { de: "Warschauer Zoo", hu: "Varsói Állatkert", ro: "Grădina Zoologică din Varșovia", en: "Warsaw Zoo" },
    description: {
      de: "Ein städtischer Zoo, der während des Zweiten Weltkriegs berühmt wurde, als seine Direktoren, Jan und Antonina Żabiński, Hunderte von Juden vor dem Holocaust retteten.",
      hu: "Városi állatkert, amely a második világháború alatt vált híressé, amikor igazgatói, Jan és Antonina Żabiński több száz zsidót mentettek meg a holokauszt elől.",
      ro: "O grădină zoologică urbană care a devenit faimoasă în timpul celui de-al Doilea Război Mondial, când directorii săi, Jan și Antonina Żabiński, au salvat sute de evrei de la Holocaust.",
      en: "A city zoo that became famous during World War II when its directors, Jan and Antonina Żabiński, saved hundreds of Jews from the Holocaust."
    },
    facts: {
      de: ["Bekannt durch die Geschichte der Familie Żabiński.", "Liegt im Stadtteil Praga.", "Moderne Anlagen für Elefanten und Flusspferde."],
      hu: ["Híres a Żabiński család történetéről.", "A Praga negyedben található.", "Modern létesítmények elefántok és vízilovak számára."],
      ro: ["Cunoscut pentru povestea familiei Żabiński.", "Situată în cartierul Praga.", "Facilități moderne pentru elefanți și hipopotami."],
      en: ["Known for the story of the Żabiński family.", "Located in the Praga district.", "Modern enclosures for elephants and hippos."]
    }
  },
  {
    id: "forest-kampinos-national-park-extra",
    type: "forest",
    parent: "PL-MA",
    coords: [20.5, 52.3],
    name: { de: "Nationalpark Kampinos", hu: "Kampinos Nemzeti Park", ro: "Parcul Național Kampinos", en: "Kampinos National Park" },
    description: {
      de: "Ein großer Waldkomplex unmittelbar westlich von Warschau, der für seinen Kontrast zwischen Binnendünen und Sumpfgebieten bekannt ist. Ein UNESCO-Biosphärenreservat.",
      hu: "Nagy erdőkomplexum közvetlenül Varsótól nyugatra, amely a belföldi dűnék és a mocsaras területek kontrasztjáról ismert. Az UNESCO bioszféra-rezervátuma.",
      ro: "Un complex forestier mare situat imediat la vest de Varșovia, cunoscut pentru contrastul dintre dunele interioare și zonele mlăștinoase. O rezervație a biosferei UNESCO.",
      en: "A large forest complex immediately west of Warsaw, known for its contrast of inland dunes and marshlands. A UNESCO Biosphere Reserve."
    },
    facts: {
      de: ["UNESCO-Biosphärenreservat.", "Direkt an Warschau angrenzend.", "Heimat von Elchen, Luchsen und Bibern."],
      hu: ["UNESCO bioszféra-rezervátum.", "Közvetlenül Varsóval határos.", "Jávorszarvasok, hiúzok és hódok otthona."],
      ro: ["Rezervație a biosferei UNESCO.", "Adiacentă direct Varșoviei.", "Adăpostește elani, râși și castori."],
      en: ["UNESCO Biosphere Reserve.", "Directly adjacent to Warsaw.", "Home to moose, lynx, and beavers."]
    }
  },
  {
    id: "industry-bełchatow-power-station-extra",
    type: "industry",
    parent: "PL-LD",
    coords: [19.37, 51.28],
    name: { de: "Kraftwerk Bełchatów", hu: "Bełchatówi erőmű", ro: "Centrala Bełchatów", en: "Bełchatów Power Station" },
    description: {
      de: "Das größte Wärmekraftwerk Europas und das größte Braunkohlekraftwerk der Welt. Es ist der größte einzelne CO2-Emittent in der Europäischen Union.",
      hu: "Európa legnagyobb hőerőműve és a világ legnagyobb lignittüzelésű erőműve. Az Európai Unió legnagyobb egyedi szén-dioxid-kibocsátója.",
      ro: "Cea mai mare termocentrală din Europa și cea mai mare centrală pe lignit din lume. Este cel mai mare emițător individual de CO2 din Uniunea Europeană.",
      en: "The largest thermal power station in Europe and the world's largest lignite-fired power plant. It is the largest single CO2 emitter in the European Union."
    },
    facts: {
      de: ["Größter CO2-Emittent in der EU.", "Produziert etwa 20% des polnischen Stroms.", "Befeuert durch den nahegelegenen Tagebau Bełchatów."],
      hu: ["Az EU legnagyobb szén-dioxid-kibocsátója.", "Lengyelország villamosenergia-termelésének mintegy 20%-át adja.", "A közeli bełchatówi külszíni bánya látja el tüzelőanyaggal."],
      ro: ["Cel mai mare emițător de CO2 din UE.", "Produce aproximativ 20% din electricitatea Poloniei.", "Alimentată de mina de suprafață Bełchatów din apropiere."],
      en: ["Largest CO2 emitter in the EU.", "Produces about 20% of Poland's electricity.", "Fueled by the nearby Bełchatów open-cast mine."]
    }
  },
  {
    id: "kid-landmark-manufaktura-lodz-extra",
    type: "kid-landmark",
    parent: "PL-LD",
    coords: [19.45, 51.77],
    name: { de: "Manufaktura Łódź", hu: "Manufaktura Łódź", ro: "Manufaktura Łódź", en: "Manufaktura Łódź" },
    description: {
      de: "Ein riesiges Einkaufs-, Kunst- und Kulturzentrum in einer ehemaligen Textilfabrik. Es ist ein Symbol für die Revitalisierung von Łódź.",
      hu: "Hatalmas bevásárló-, művészeti és kulturális központ egykori textilgyárban. Łódź revitalizációjának szimbóluma.",
      ro: "Un centru comercial, artistic și cultural masiv într-o fostă fabrică de textile. Este un simbol al revitalizării orașului Łódź.",
      en: "A massive shopping, arts, and cultural center in a former textile factory. It is a symbol of the revitalization of Łódź."
    },
    facts: {
      de: ["Größtes Einkaufszentrum in Polen.", "Umfasst Museen, ein Kino und ein Hotel.", "Auf dem Gelände einer ehemaligen Textilfabrik aus dem 19. Jahrhundert."],
      hu: ["Lengyelország legnagyobb bevásárlóközpontja.", "Múzeumokat, mozit és szállodát is magában foglal.", "Egy 19. századi textilgyár területén található."],
      ro: ["Cel mai mare centru comercial din Polonia.", "Include muzee, un cinematograf și un hotel.", "Pe locul unei foste fabrici de textile din secolul al XIX-lea."],
      en: ["Largest shopping center in Poland.", "Includes museums, a cinema, and a hotel.", "On the site of a former 19th-century textile factory."]
    }
  },
  {
    id: "historical-piotrkowska-street-extra",
    type: "historical",
    parent: "PL-LD",
    coords: [19.46, 51.76],
    name: { de: "Piotrkowska-Straße", hu: "Piotrkowska utca", ro: "Strada Piotrkowska", en: "Piotrkowska Street" },
    description: {
      de: "Eine der längsten Geschäftsstraßen Europas und das Herz von Łódź. Gesäumt von wunderschönen Gebäuden aus dem 19. und 20. Jahrhundert.",
      hu: "Európa egyik leghosszabb bevásárlóutcája és Łódź szíve. Gyönyörű 19. és 20. századi épületek szegélyezik.",
      ro: "Una dintre cele mai lungi străzi comerciale din Europa și inima orașului Łódź. Mărginită de clădiri frumoase din secolele al XIX-lea și al XX-lea.",
      en: "One of the longest commercial streets in Europe and the heart of Łódź. Lined with beautiful 19th and 20th-century buildings."
    },
    facts: {
      de: ["Über 4 km lang.", "Zahlreiche Restaurants, Clubs und Geschäfte.", "Denkmäler berühmter Łódźer Bürger auf der Straße."],
      hu: ["Több mint 4 km hosszú.", "Számos étterem, klub és üzlet található itt.", "Híres łódźi polgárok emlékművei az utcán."],
      ro: ["Peste 4 km lungime.", "Numeroase restaurante, cluburi și magazine.", "Monumente ale unor cetățeni faimoși din Łódź pe stradă."],
      en: ["Over 4 km long.", "Numerous restaurants, clubs, and shops.", "Monuments of famous Łódź citizens along the street."]
    }
  },
  {
    id: "industry-zaklady-azotowe-pulawy-extra",
    type: "industry",
    parent: "PL-LU",
    coords: [21.97, 51.43],
    name: { de: "Stickstoffwerke Puławy", hu: "Puławy Nitrogénművek", ro: "Uzina de Azot Puławy", en: "Puławy Nitrogen Plant" },
    description: {
      de: "Einer der größten Hersteller von Stickstoffdüngemitteln in der Welt. Ein wichtiger Industriekomplex in der Woiwodschaft Lublin.",
      hu: "A világ egyik legnagyobb nitrogénműtrágya-gyártója. A Lublini vajdaság fontos ipari komplexuma.",
      ro: "Unul dintre cei mai mari producători de îngrășăminte cu azot din lume. Un complex industrial important în Voievodatul Lublin.",
      en: "One of the largest producers of nitrogen fertilizers in the world. A major industrial complex in the Lublin Voivodeship."
    },
    facts: {
      de: ["Großer Produzent von Melamin.", "Teil der Grupa Azoty.", "Wichtiger Arbeitgeber in der Region."],
      hu: ["Jelentős melamingyártó.", "A Grupa Azoty része.", "Fontos munkaadó a régióban."],
      ro: ["Producător major de melamină.", "Parte a Grupului Azoty.", "Angajator important în regiune."],
      en: ["Major producer of melamine.", "Part of Grupa Azoty.", "Important employer in the region."]
    }
  },
  {
    id: "historical-kazimierz-dolny-extra",
    type: "historical",
    parent: "PL-LU",
    coords: [21.94, 51.32],
    name: { de: "Kazimierz Dolny", hu: "Kazimierz Dolny", ro: "Kazimierz Dolny", en: "Kazimierz Dolny" },
    description: {
      de: "Eine malerische historische Stadt an der Weichsel, die bei Künstlern und Touristen sehr beliebt ist. Bekannt für ihren Marktplatz und die Ruinen einer Burg.",
      hu: "Festői történelmi város a Visztula partján, amely művészek és turisták körében népszerű. Főteréről és a várromokról ismert.",
      ro: "Un oraș istoric pitoresc pe Vistula, popular printre artiști și turiști. Cunoscut pentru piața sa centrală și ruinele unui castel.",
      en: "A picturesque historical town on the Vistula, popular with artists and tourists. Known for its market square and the ruins of a castle."
    },
    facts: {
      de: ["Künstlerkolonie seit dem 19. Jahrhundert.", "Renaissance-Architektur.", "Jährliches Film- und Kunstfestival 'Zwei Ufer'."],
      hu: ["Művésztelep a 19. század óta.", "Reneszánsz építészet.", "Évenkénti 'Két Part' film- és művészeti fesztivál."],
      ro: ["Colonie de artiști din secolul al XIX-lea.", "Arhitectură renascentistă.", "Festivalul anual de film și artă 'Două Maluri'."],
      en: ["Artists' colony since the 19th century.", "Renaissance architecture.", "Annual 'Two Banksides' film and art festival."]
    }
  },
  {
    id: "nature-roztocze-national-park-extra",
    type: "nature",
    parent: "PL-LU",
    coords: [23.0, 50.6],
    name: { de: "Nationalpark Roztocze", hu: "Roztocze Nemzeti Park", ro: "Parcul Național Roztocze", en: "Roztocze National Park" },
    description: {
      de: "Ein Nationalpark, der die Hügellandschaft von Roztocze schützt. Bekannt für seine tiefen Schluchten, Wasserfälle und die Zucht des polnischen Konik-Pferdes.",
      hu: "Nemzeti park, amely a Roztocze dombvidékét védi. Mély szurdokairól, vízeséseiről és a lengyel konik ló tenyésztéséről ismert.",
      ro: "Un parc național care protejează peisajul deluros din Roztocze. Cunoscut pentru văile sale adânci, cascadele și creșterea calului polonez Konik.",
      en: "A national park protecting the Roztocze hills landscape. Known for its deep ravines, waterfalls, and the breeding of the Polish Konik horse."
    },
    facts: {
      de: ["Zuchtprogramm für das polnische Konik-Pferd.", "Charakteristische Tannen- und Buchenwälder.", "Beliebt für Rad- und Wandertouren."],
      hu: ["Tenyésztési program a lengyel konik ló számára.", "Jellegzetes jegenyefenyő- és bükkerdők.", "Népszerű kerékpáros és túrázási célpont."],
      ro: ["Program de creștere pentru calul polonez Konik.", "Păduri caracteristice de brad și fag.", "Popular pentru ciclism și drumeții."],
      en: ["Breeding program for the Polish Konik horse.", "Characteristic fir and beech forests.", "Popular for cycling and hiking tours."]
    }
  },
  {
    id: "landmark-zamosc-old-town-extra",
    type: "landmark",
    parent: "PL-LU",
    coords: [23.25, 50.71],
    name: { de: "Altstadt von Zamość", hu: "Zamość óvárosa", ro: "Centrul Vechi Zamość", en: "Zamość Old Town" },
    description: {
      de: "Ein UNESCO-Weltkulturerbe, das als 'ideale Stadt' der Renaissance entworfen wurde. Perfekt erhaltene Architektur und Befestigungsanlagen.",
      hu: "Az UNESCO Világörökség része, amelyet a reneszánsz 'ideális városának' terveztek. Tökéletesen megőrzött építészet és erődítmények.",
      ro: "Un sit al Patrimoniului Mondial UNESCO, proiectat ca un 'oraș ideal' renascentist. Arhitectură și fortificații perfect conservate.",
      en: "A UNESCO World Heritage site, designed as a Renaissance 'ideal town'. Perfectly preserved architecture and fortifications."
    },
    facts: {
      de: ["Gegründet von Kanzler Jan Zamoyski.", "Entworfen vom italienischen Architekten Bernardo Morando.", "Wird 'Padua des Nordens' genannt."],
      hu: ["Jan Zamoyski kancellár alapította.", "Bernardo Morando olasz építész tervezte.", "Az 'Észak Páduájának' is nevezik."],
      ro: ["Fondat de cancelarul Jan Zamoyski.", "Proiectat de arhitectul italian Bernardo Morando.", "Numit 'Padova Nordului'."],
      en: ["Founded by Chancellor Jan Zamoyski.", "Designed by Italian architect Bernardo Morando.", "Called the 'Padua of the North'."]
    }
  },
  {
    id: "historical-majdanek-extra",
    type: "historical",
    parent: "PL-LU",
    coords: [22.60, 51.22],
    name: { de: "KZ Majdanek", hu: "Majdanek koncentrációs tábor", ro: "Lagărul de concentrare Majdanek", en: "Majdanek Concentration Camp" },
    description: {
      de: "Ein deutsches Konzentrations- und Vernichtungslager aus dem Zweiten Weltkrieg am Rande von Lublin. Heute ein staatliches Museum und eine Gedenkstätte.",
      hu: "Német koncentrációs és megsemmisítő tábor a második világháborúból Lublin határában. Ma állami múzeum és emlékhely.",
      ro: "Un lagăr de concentrare și exterminare nazist din Al Doilea Război Mondial, la periferia orașului Lublin. Astăzi este un muzeu de stat și un memorial.",
      en: "A Nazi German concentration and extermination camp from World War II on the outskirts of Lublin. Today a state museum and memorial."
    },
    facts: {
      de: ["Eines der am besten erhaltenen Lager.", "Liegt innerhalb der heutigen Stadtgrenzen von Lublin.", "Staatliches Museum seit 1944."],
      hu: ["Az egyik legjobb állapotban fennmaradt tábor.", "Lublin mai városi határain belül található.", "Állami múzeum 1944 óta."],
      ro: ["Unul dintre cele mai bine conservate lagăre.", "Situat în interiorul limitelor actuale ale orașului Lublin.", "Muzeu de stat din 1944."],
      en: ["One of the best-preserved camps.", "Located within the modern city limits of Lublin.", "State museum since 1944."]
    }
  },
  {
    id: "animal-habitat-polesie-national-park-extra",
    type: "nature",
    parent: "PL-LU",
    coords: [23.17, 51.45],
    name: { de: "Nationalpark Polesie", hu: "Polesie Nemzeti Park", ro: "Parcul Național Polesie", en: "Polesie National Park" },
    description: {
      de: "Ein Nationalpark, der Tundra-ähnliche Torfmoore und Feuchtgebiete schützt. Teil eines internationalen Biosphärenreservats, das sich bis nach Weißrussland und in die Ukraine erstreckt.",
      hu: "Nemzeti park, amely tundra-szerű tőzeglápokat és vizes élőhelyeket véd. Egy nemzetközi bioszféra-rezervátum része, amely Fehéroroszországba és Ukrajnába is átnyúlik.",
      ro: "Un parc național care protejează turbării și zone umede asemănătoare tundrei. Parte a unei rezervații internaționale a biosferei care se întinde în Belarus și Ucraina.",
      en: "A national park protecting tundra-like peat bogs and wetlands. Part of an international biosphere reserve extending into Belarus and Ukraine."
    },
    facts: {
      de: ["Schützt subarktische Torfmoore.", "Heimat von Sumpfschildkröten und Elchen.", "Grenzüberschreitendes Biosphärenreservat Westpolesien."],
      hu: ["Szubarktikus tőzeglápokat véd.", "Mocsári teknősök és jávorszarvasok otthona.", "Nyugat-Polesie határon átnyúló bioszféra-rezervátum."],
      ro: ["Protejează turbăriile subarctice.", "Adăpostește broaște țestoase de baltă și elani.", "Rezervația transfrontalieră a biosferei Polesiei de Vest."],
      en: ["Protects sub-arctic peat bogs.", "Home to pond turtles and moose.", "West Polesie Transboundary Biosphere Reserve."]
    }
  },
  {
    id: "city-radom-extra",
    type: "city",
    parent: "PL-MA",
    coords: [21.14, 51.40],
    name: { de: "Radom", hu: "Radom", ro: "Radom", en: "Radom" },
    description: {
      de: "Eine historisch bedeutsame Stadt in Masowien, bekannt für die Radomer Verfassung 'Nihil novi' von 1505 und die Arbeiterproteste von 1976.",
      hu: "Történelmileg jelentős város Mazóviában, amely az 1505-ös 'Nihil novi' radomi alkotmányról és az 1976-os munkástüntetésekről ismert.",
      ro: "Un oraș important din punct de vedere istoric în Mazovia, cunoscut pentru Constituția 'Nihil novi' de la Radom din 1505 și pentru protestele muncitorești din 1976.",
      en: "A historically important city in Masovia, known for the 1505 Radom Constitution 'Nihil novi' and the 1976 worker protests."
    },
    facts: {
      de: ["Ort der Unterzeichnung der Konstitution 'Nihil novi'.", "Wichtige Proteste im Juni 1976.", "Jährliche internationale Flugschau."],
      hu: ["A 'Nihil novi' alkotmány aláírásának helyszíne.", "Jelentős tüntetések 1976 júniusában.", "Évenkénti nemzetközi légibemutató."],
      ro: ["Locul semnării Constituției 'Nihil novi'.", "Proteste importante în iunie 1976.", "Show aerian internațional anual."],
      en: ["Site of the signing of the 'Nihil novi' constitution.", "Major protests in June 1976.", "Annual international air show."]
    }
  },
  {
    id: "city-plock-extra",
    type: "city",
    parent: "PL-MA",
    coords: [19.70, 52.54],
    name: { de: "Płock", hu: "Płock", ro: "Płock", en: "Płock" },
    description: {
      de: "Eine der ältesten Städte Polens und eine ehemalige Hauptstadt. Liegt malerisch an der Weichsel und beherbergt eine der größten Raffinerien des Landes.",
      hu: "Lengyelország egyik legrégebbi városa és egykori fővárosa. Festői helyen, a Visztula partján fekszik, és itt található az ország egyik legnagyobb finomítója.",
      ro: "Unul dintre cele mai vechi orașe din Polonia și o fostă capitală. Situat pitoresc pe Vistula, găzduiește una dintre cele mai mari rafinării din țară.",
      en: "One of the oldest cities in Poland and a former capital. Picturesquely located on the Vistula, it is home to one of the country's largest refineries."
    },
    facts: {
      de: ["Ehemalige Hauptstadt Polens im 11.-12. Jh.", "Wichtiger Standort für PKN Orlen.", "Romanische Kathedrale mit Gräbern polnischer Monarchen."],
      hu: ["Lengyelország egykori fővárosa a 11-12. században.", "A PKN Orlen fontos telephelye.", "Román stílusú katedrális lengyel uralkodók sírjaival."],
      ro: ["Fostă capitală a Poloniei în sec. XI-XII.", "Amplasament important pentru PKN Orlen.", "Catedrală romanică cu morminte ale monarhilor polonezi."],
      en: ["Former capital of Poland in the 11th-12th c.", "Major site for PKN Orlen.", "Romanesque cathedral with tombs of Polish monarchs."]
    }
  },
  {
    id: "city-czestochowa-extra",
    type: "city",
    parent: "PL-SL",
    coords: [19.12, 50.81],
    name: { de: "Tschenstochau", hu: "Częstochowa", ro: "Częstochowa", en: "Częstochowa" },
    description: {
      de: "Polens geistliches Herz, berühmt für das Kloster Jasna Góra, in dem die Ikone der Schwarzen Madonna, das am meisten verehrte Heiligtum des Landes, aufbewahrt wird.",
      hu: "Lengyelország spirituális szíve, amely a Jasna Góra-i kolostorról híres, ahol a Fekete Madonna ikont, az ország legtiszteltebb kegyhelyét őrzik.",
      ro: "Inima spirituală a Poloniei, renumită pentru Mănăstirea Jasna Góra, care găzduiește icoana Madonei Negre, cel mai venerat sanctuar al țării.",
      en: "Poland's spiritual heart, famous for the Jasna Góra Monastery, which houses the Black Madonna icon, the country's most venerated relic."
    },
    facts: {
      de: ["Heimat des Jasna Góra Klosters.", "Wichtigster Wallfahrtsort in Polen.", "Die Ikone der Schwarzen Madonna wird hier aufbewahrt."],
      hu: ["A Jasna Góra-i kolostor otthona.", "Lengyelország legfontosabb zarándokhelye.", "Itt őrzik a Fekete Madonna ikont."],
      ro: ["Găzduiește Mănăstirea Jasna Góra.", "Cel mai important loc de pelerinaj din Polonia.", "Icoana Madonei Negre este păstrată aici."],
      en: ["Home to the Jasna Góra Monastery.", "Most important pilgrimage site in Poland.", "The Black Madonna icon is kept here."]
    }
  },
  {
    id: "industry-silesian-voivodeship-industry-extra",
    type: "industry",
    parent: "PL-SL",
    coords: [19.0, 50.25],
    name: { de: "Industrieregion Schlesien", hu: "Sziléziai iparvidék", ro: "Regiunea industrială Silezia", en: "Silesian Industrial Region" },
    description: {
      de: "Das Herz der polnischen Schwerindustrie, insbesondere des Kohlebergbaus und der Stahlproduktion. Eine Region im Wandel von der traditionellen Industrie zu neuen Technologien.",
      hu: "A lengyel nehézipar, különösen a szénbányászat és az acélgyártás szíve. A régió a hagyományos iparról az új technológiákra való áttérés folyamatában van.",
      ro: "Inima industriei grele poloneze, în special a mineritului de cărbune și a producției de oțel. O regiune în tranziție de la industria tradițională la noile tehnologii.",
      en: "The heart of Polish heavy industry, especially coal mining and steel production. A region undergoing a transition from traditional industry to new technologies."
    },
    facts: {
      de: ["Größtes städtisches Gebiet in Polen.", "Historisches Zentrum des Kohlebergbaus.", "Industriedenkmälerroute (Szlak Zabytków Techniki)."],
      hu: ["Lengyelország legnagyobb városi területe.", "A szénbányászat történelmi központja.", "Ipari Műemlékek Útvonala (Szlak Zabytków Techniki)."],
      ro: ["Cea mai mare zonă urbană din Polonia.", "Centru istoric al mineritului de cărbune.", "Ruta Monumentelor Industriale (Szlak Zabytków Techniki)."],
      en: ["Largest urban area in Poland.", "Historical center of coal mining.", "Trail of the Industrial Monuments (Szlak Zabytków Techniki)."]
    }
  },
  {
    id: "landmark-trail-of-eagles-nests-extra",
    type: "landmark",
    parent: "PL-SL",
    coords: [19.5, 50.45],
    name: { de: "Adlerhorst-Route", hu: "Saskastélyok útvonala", ro: "Traseul Cuiburilor de Vulturi", en: "Trail of the Eagles' Nests" },
    description: {
      de: "Eine Kette mittelalterlicher Burgen, die auf hohen Felsen im Krakau-Tschenstochauer Jura errichtet wurden und Adlernestern ähneln. Eine beliebte Touristenroute.",
      hu: "Középkori várak láncolata, amelyeket a Krakkó-Częstochowai-fennsík magas szikláira építettek, sasfészkekre emlékeztetve. Népszerű turisztikai útvonal.",
      ro: "Un lanț de castele medievale construite pe stânci înalte în Jura Krakov-Częstochowa, semănând cu cuiburile de vulturi. O rută turistică populară.",
      en: "A chain of medieval castles built on high rocks in the Kraków-Częstochowa Upland, resembling eagles' nests. A popular tourist trail."
    },
    facts: {
      de: ["25 mittelalterliche Burgen und Ruinen.", "Verbindet Krakau mit Tschenstochau.", "Spektakuläre Kalksteinfelsen."],
      hu: ["25 középkori vár és rom.", "Összeköti Krakkót Częstochowával.", "Látványos mészkősziklák."],
      ro: ["25 de castele și ruine medievale.", "Leagă Cracovia de Częstochowa.", "Stânci spectaculoase de calcar."],
      en: ["25 medieval castles and ruins.", "Connects Krakow with Częstochowa.", "Spectacular limestone cliffs."]
    }
  },
  {
    id: "castle-ogrodzieniec-extra",
    type: "castle",
    parent: "PL-SL",
    coords: [19.55, 50.45],
    name: { de: "Burg Ogrodzieniec", hu: "Ogrodzieniec vára", ro: "Castelul Ogrodzieniec", en: "Ogrodzieniec Castle" },
    description: {
      de: "Die größte und berühmteste Burgruine auf der Adlerhorst-Route. Ihre malerische Lage hat sie zu einem beliebten Drehort für Filme und Serien gemacht.",
      hu: "A Saskastélyok útvonalának legnagyobb és leghíresebb várromja. Festői fekvése miatt népszerű film- és sorozatforgatási helyszín.",
      ro: "Cea mai mare și mai faimoasă ruină de castel de pe Traseul Cuiburilor de Vulturi. Locația sa pitorească a făcut-o un loc popular de filmare.",
      en: "The largest and most famous castle ruin on the Trail of the Eagles' Nests. Its picturesque location has made it a popular filming location."
    },
    facts: {
      de: ["Teil der Adlerhorst-Route.", "Erbaut im 14.-15. Jahrhundert.", "Drehort für die Netflix-Serie 'The Witcher'."],
      hu: ["A Saskastélyok útvonalának része.", "A 14-15. században épült.", "A 'The Witcher' Netflix sorozat forgatási helyszíne."],
      ro: ["Parte a Traseului Cuiburilor de Vulturi.", "Construit în secolele XIV-XV.", "Loc de filmare pentru serialul Netflix 'The Witcher'."],
      en: ["Part of the Trail of the Eagles' Nests.", "Built in the 14th-15th centuries.", "Filming location for Netflix's 'The Witcher'."]
    }
  },
  {
    id: "animal-habitat-silesian-zoo-extra",
    type: "animal-habitat",
    parent: "PL-SL",
    coords: [18.98, 50.27],
    name: { de: "Schlesischer Zoologischer Garten", hu: "Sziléziai Állatkert", ro: "Grădina Zoologică Sileziană", en: "Silesian Zoological Garden" },
    description: {
      de: "Der Schlesische Zoo befindet sich im Schlesischen Park in Chorzów und beherbergt fast 2.500 Tiere. Er verfügt auch über ein Dinosauriertal.",
      hu: "A Sziléziai Állatkert a chorzówi Sziléziai Parkban található, és közel 2500 állatnak ad otthont. Dinoszaurusz-völggyel is rendelkezik.",
      ro: "Situată în Parcul Silezian din Chorzów, Grădina Zoologică Sileziană găzduiește aproape 2.500 de animale. De asemenea, include o vale a dinozaurilor.",
      en: "Located in the Silesian Park in Chorzów, the Silesian Zoological Garden is home to almost 2,500 animals. It also features a dinosaur valley."
    },
    facts: {
      de: ["Im riesigen Schlesischen Park gelegen.", "Dinosauriertal mit lebensgroßen Modellen.", "Gegründet 1954."],
      hu: ["A hatalmas Sziléziai Parkban található.", "Dinoszaurusz-völgy életnagyságú modellekkel.", "1954-ben alapították."],
      ro: ["Situată în imensul Parc Silezian.", "Valea Dinozaurilor cu modele în mărime naturală.", "Fondată în 1954."],
      en: ["Located in the vast Silesian Park.", "Dinosaur Valley with life-size models.", "Founded in 1954."]
    }
  },
  {
    id: "historical-guido-mine-extra",
    type: "historical",
    parent: "PL-SL",
    coords: [18.82, 50.29],
    name: { de: "Schaubergwerk Guido", hu: "Guido bánya", ro: "Mina Guido", en: "Guido Mine" },
    description: {
      de: "Ein historisches Kohlebergwerk in Zabrze, das in ein Museum umgewandelt wurde. Besucher können in die Stollen einfahren und die Arbeitsbedingungen der Bergleute erleben.",
      hu: "Történelmi szénbánya Zabrzében, amelyet múzeummá alakítottak át. A látogatók leereszkedhetnek a tárnákba, és megtapasztalhatják a bányászok munkakörülményeit.",
      ro: "O mină de cărbune istorică din Zabrze, transformată în muzeu. Vizitatorii pot coborî în galerii și pot experimenta condițiile de muncă ale minerilor.",
      en: "A historic coal mine in Zabrze, turned into a museum. Visitors can descend into the tunnels and experience the working conditions of miners."
    },
    facts: {
      de: ["Teil der Route der Industriedenkmäler.", "Besucherebenen auf 170m und 320m Tiefe.", "Tiefstgelegener Pub Europas."],
      hu: ["Az Ipari Műemlékek Útvonalának része.", "Látogatói szintek 170 és 320 méter mélyen.", "Európa legmélyebben fekvő kocsmája."],
      ro: ["Parte a Rutei Monumentelor Industriale.", "Niveluri pentru vizitatori la 170m și 320m adâncime.", "Cel mai adânc pub din Europa."],
      en: ["Part of the Industrial Monuments Trail.", "Visitor levels at 170m and 320m depth.", "Europe's deepest pub."]
    }
  },
  {
    id: "city-zakopane-extra",
    type: "city",
    parent: "PL-MA",
    coords: [19.95, 49.29],
    name: { de: "Zakopane", hu: "Zakopane", ro: "Zakopane", en: "Zakopane" },
    description: {
      de: "Die 'Winterhauptstadt' Polens, am Fuße des Tatra-Gebirges gelegen. Ein beliebtes Ziel für Skifahrer, Wanderer und Liebhaber der Goralen-Kultur.",
      hu: "Lengyelország 'téli fővárosa', a Tátra lábánál. Népszerű célpont síelők, túrázók és a gorál kultúra kedvelői számára.",
      ro: "'Capitala de iarnă' a Poloniei, situată la poalele Munților Tatra. O destinație populară pentru schiori, drumeți și iubitorii culturii Goral.",
      en: "The 'winter capital' of Poland, located at the foot of the Tatra Mountains. A popular destination for skiers, hikers, and lovers of Goral culture."
    },
    facts: {
      de: ["Höchstgelegene Stadt in Polen.", "Zentrum der Goralen-Kultur.", "Tor zum Tatra-Nationalpark."],
      hu: ["Lengyelország legmagasabban fekvő városa.", "A gorál kultúra központja.", "Kapuja a Tátrai Nemzeti Parknak."],
      ro: ["Orașul situat la cea mai mare altitudine din Polonia.", "Centrul culturii Goral.", "Poarta de acces către Parcul Național Tatra."],
      en: ["Highest town in Poland.", "Center of the Goral highlander culture.", "Gateway to the Tatra National Park."]
    }
  },
  {
    id: "mountain-rysy-extra",
    type: "mountain",
    parent: "PL-MA",
    coords: [20.08, 49.17],
    name: { de: "Rysy", hu: "Tengerszem-csúcs", ro: "Vârful Rysy", en: "Rysy" },
    description: {
      de: "Der höchste Berg Polens in der Hohen Tatra. Der Gipfel liegt an der Grenze zwischen Polen und der Slowakei und bietet eine atemberaubende Aussicht.",
      hu: "Lengyelország legmagasabb hegye a Magas-Tátrában. A csúcs a lengyel-szlovák határon fekszik, és lélegzetelállító kilátást nyújt.",
      ro: "Cel mai înalt munte din Polonia, situat în Munții Tatra Înaltă. Vârful se află la granița dintre Polonia și Slovacia și oferă o priveliște uluitoare.",
      en: "The highest mountain in Poland, located in the High Tatras. The summit is on the border between Poland and Slovakia and offers a breathtaking view."
    },
    facts: {
      de: ["Höchster Punkt Polens (2.499 m).", "Liegt an der Grenze zur Slowakei.", "Beliebtes, aber anspruchsvolles Wanderziel."],
      hu: ["Lengyelország legmagasabb pontja (2499 m).", "A szlovák határon fekszik.", "Népszerű, de kihívást jelentő túracélpont."],
      ro: ["Cel mai înalt punct din Polonia (2.499 m).", "Situat la granița cu Slovacia.", "Destinație populară, dar dificilă, pentru drumeții."],
      en: ["Highest point in Poland (2,499 m).", "Located on the border with Slovakia.", "Popular but challenging hiking destination."]
    }
  },
  {
    id: "lake-morskie-oko-extra",
    type: "lake",
    parent: "PL-MA",
    coords: [20.07, 49.20],
    name: { de: "Meerauge", hu: "Halas-tó", ro: "Morskie Oko", en: "Morskie Oko" },
    description: {
      de: "Der größte und berühmteste See im Tatra-Gebirge, umgeben von hohen Gipfeln. Ein beliebtes Ausflugsziel, das über eine asphaltierte Straße erreichbar ist.",
      hu: "A Tátra legnagyobb és leghíresebb tava, magas csúcsokkal körülvéve. Népszerű kirándulóhely, amely aszfaltozott úton érhető el.",
      ro: "Cel mai mare și mai faimos lac din Munții Tatra, înconjurat de vârfuri înalte. O destinație populară, accesibilă printr-un drum asfaltat.",
      en: "The largest and most famous lake in the Tatra Mountains, surrounded by high peaks. A popular destination accessible by a paved road."
    },
    facts: {
      de: ["Größter See in der Tatra.", "Wird wegen seiner Schönheit oft als 'Meerauge' bezeichnet.", "Von Zirbelkiefern umgeben."],
      hu: ["A Tátra legnagyobb tava.", "Szépsége miatt gyakran 'Tenger-szem'-nek nevezik.", "Cirbolyafenyők veszik körül."],
      ro: ["Cel mai mare lac din Munții Tatra.", "Adesea numit 'Ochiul Mării' pentru frumusețea sa.", "Înconjurat de pini cembra."],
      en: ["Largest lake in the Tatras.", "Often called the 'Eye of the Sea' for its beauty.", "Surrounded by stone pines."]
    }
  },
  {
    id: "landmark-kasprowy-wierch-cable-car-extra",
    type: "landmark",
    parent: "PL-MA",
    coords: [19.98, 49.23],
    name: { de: "Kasprowy-Wierch-Seilbahn", hu: "Kasprowy Wierch felvonó", ro: "Telecabina Kasprowy Wierch", en: "Kasprowy Wierch Cable Car" },
    description: {
      de: "Eine berühmte Seilbahn, die Touristen auf den Gipfel des Kasprowy Wierch in der Tatra bringt. Bietet spektakuläre Panoramablicke das ganze Jahr über.",
      hu: "Híres felvonó, amely a turistákat a Kasprowy Wierch csúcsára szállítja a Tátrában. Egész évben látványos panorámát kínál.",
      ro: "O faimoasă telecabină care transportă turiștii pe vârful Kasprowy Wierch din Munții Tatra. Oferă vederi panoramice spectaculoase pe tot parcursul anului.",
      en: "A famous cable car that takes tourists to the summit of Kasprowy Wierch in the Tatra Mountains. Offers spectacular panoramic views all year round."
    },
    facts: {
      de: ["Erbaut in den 1930er Jahren.", "Erreicht eine Höhe von 1.987 m.", "Beliebter Ausgangspunkt für Skifahrer und Wanderer."],
      hu: ["Az 1930-as években épült.", "Eléri az 1987 méteres magasságot.", "Népszerű kiindulópont síelők és túrázók számára."],
      ro: ["Construită în anii 1930.", "Atinge o altitudine de 1.987 m.", "Punct de plecare popular pentru schiori și drumeți."],
      en: ["Built in the 1930s.", "Reaches an altitude of 1,987 m.", "Popular starting point for skiers and hikers."]
    }
  },
  {
    id: "river-dunajec-gorge-extra",
    type: "river",
    parent: "PL-MA",
    coords: [20.42, 49.40],
    name: { de: "Dunajec-Durchbruch", hu: "Dunajec-áttörés", ro: "Defileul Dunajec", en: "Dunajec River Gorge" },
    description: {
      de: "Eine beeindruckende Schlucht an der Grenze zwischen Polen und der Slowakei. Berühmt für traditionelle Floßfahrten durch die Pieninen.",
      hu: "Lenyűgöző szurdokvölgy a lengyel-szlovák határon. Híres a hagyományos tutajozásról a Pieninek hegységen keresztül.",
      ro: "Un defileu impresionant la granița dintre Polonia și Slovacia. Faimos pentru plimbările tradiționale cu pluta prin Munții Pieniny.",
      en: "An impressive gorge on the border between Poland and Slovakia. Famous for traditional rafting trips through the Pieniny Mountains."
    },
    facts: {
      de: ["Grenze zwischen Polen und der Slowakei.", "Traditionelle Floßfahrten seit dem 19. Jahrhundert.", "Teil des Pieninen-Nationalparks."],
      hu: ["Határ Lengyelország és Szlovákia között.", "Hagyományos tutajozás a 19. század óta.", "A Pieniny Nemzeti Park része."],
      ro: ["Granița dintre Polonia și Slovacia.", "Plimbări tradiționale cu pluta din secolul al XIX-lea.", "Parte a Parcului Național Pieniny."],
      en: ["Border between Poland and Slovakia.", "Traditional rafting since the 19th century.", "Part of the Pieniny National Park."]
    }
  },
  {
    id: "city-sandomierz-extra",
    type: "city",
    parent: "PL-SK",
    coords: [21.75, 50.68],
    name: { de: "Sandomir", hu: "Sandomierz", ro: "Sandomierz", en: "Sandomierz" },
    description: {
      de: "Eine der ältesten und schönsten Städte Polens, malerisch auf sieben Hügeln über der Weichsel gelegen. Bekannt für ihre gut erhaltene Altstadt.",
      hu: "Lengyelország egyik legrégebbi és legszebb városa, festői helyen, hét dombon, a Visztula felett. Jól megőrzött óvárosáról ismert.",
      ro: "Unul dintre cele mai vechi și mai frumoase orașe din Polonia, situat pitoresc pe șapte coline deasupra Vistulei. Cunoscut pentru centrul său vechi bine conservat.",
      en: "One of the oldest and most beautiful cities in Poland, picturesquely situated on seven hills above the Vistula. Known for its well-preserved Old Town."
    },
    facts: {
      de: ["Lage auf sieben Hügeln.", "Gotische Kathedrale und Renaissance-Rathaus.", "Einzigartiger unterirdischer Touristenpfad."],
      hu: ["Hét dombon fekszik.", "Gótikus katedrális és reneszánsz városháza.", "Egyedülálló földalatti turisztikai útvonal."],
      ro: ["Situat pe șapte coline.", "Catedrală gotică și primărie renascentistă.", "Traseu turistic subteran unic."],
      en: ["Located on seven hills.", "Gothic cathedral and Renaissance town hall.", "Unique underground tourist route."]
    }
  },
  {
    id: "landmark-palace-of-culture-and-science-extra",
    type: "landmark",
    parent: "PL-MA",
    coords: [21.00, 52.23],
    name: { de: "Kultur- und Wissenschaftspalast", hu: "Kultúra és Tudomány Palotája", ro: "Palatul Culturii și Științei", en: "Palace of Culture and Science" },
    description: {
      de: "Ein massives Hochhaus im Zentrum von Warschau, ein 'Geschenk' der Sowjetunion an das polnische Volk. Heute beherbergt es Theater, Museen und eine Aussichtsplattform.",
      hu: "Hatalmas toronyház Varsó központjában, a Szovjetunió 'ajándéka' a lengyel népnek. Ma színházaknak, múzeumoknak és egy kilátóterassznak ad otthont.",
      ro: "Un zgârie-nori masiv în centrul Varșoviei, un 'cadou' de la Uniunea Sovietică pentru poporul polonez. Astăzi găzduiește teatre, muzee și o punte de observație.",
      en: "A massive high-rise building in the center of Warsaw, a 'gift' from the Soviet Union to the people of Poland. Today it houses theaters, museums, and an observation deck."
    },
    facts: {
      de: ["Höchstes Gebäude in Polen.", "Ein umstrittenes Symbol der sowjetischen Herrschaft.", "Aussichtsplattform im 30. Stock."],
      hu: ["Lengyelország legmagasabb épülete.", "A szovjet uralom ellentmondásos szimbóluma.", "Kilátóterasz a 30. emeleten."],
      ro: ["Cea mai înaltă clădire din Polonia.", "Un simbol controversat al dominației sovietice.", "Punte de observație la etajul 30."],
      en: ["Tallest building in Poland.", "A controversial symbol of Soviet domination.", "Observation deck on the 30th floor."]
    }
  },
  {
    id: "landmark-warsaw-uprising-museum-extra",
    type: "landmark",
    parent: "PL-MA",
    coords: [20.98, 52.23],
    name: { de: "Museum des Warschauer Aufstands", hu: "Varsói Felkelés Múzeuma", ro: "Muzeul Insurecției din Varșovia", en: "Warsaw Uprising Museum" },
    description: {
      de: "Ein modernes und interaktives Museum, das dem Warschauer Aufstand von 1944 gewidmet ist. Es ehrt den Kampf der polnischen Heimatarmee gegen die deutsche Besatzung.",
      hu: "Modern és interaktív múzeum, amelyet az 1944-es varsói felkelésnek szenteltek. A lengyel Honi Hadsereg német megszállás elleni harcának állít emléket.",
      ro: "Un muzeu modern și interactiv dedicat Insurecției din Varșovia din 1944. Onorează lupta Armatei Teritoriale poloneze împotriva ocupației germane.",
      en: "A modern and interactive museum dedicated to the 1944 Warsaw Uprising. It honors the fight of the Polish Home Army against the German occupation."
    },
    facts: {
      de: ["Eröffnet am 60. Jahrestag des Aufstands.", "Interaktive Ausstellungen und eine Replik eines Liberator-Bombers.", "Ein mächtiges Zeugnis der polnischen Geschichte."],
      hu: ["A felkelés 60. évfordulóján nyílt meg.", "Interaktív kiállítások és egy Liberator bombázó másolata.", "A lengyel történelem erőteljes tanúságtétele."],
      ro: ["Deschis la a 60-a aniversare a Insurecției.", "Expoziții interactive și o replică a unui bombardier Liberator.", "O mărturie puternică a istoriei poloneze."],
      en: ["Opened on the 60th anniversary of the Uprising.", "Interactive exhibits and a replica Liberator bomber.", "A powerful testament to Polish history."]
    }
  },
  {
    id: "historical-polin-museum-extra",
    type: "historical",
    parent: "PL-MA",
    coords: [20.99, 52.24],
    name: { de: "POLIN Museum", hu: "POLIN Múzeum", ro: "Muzeul POLIN", en: "POLIN Museum" },
    description: {
      de: "Museum der Geschichte der polnischen Juden auf dem Gelände des ehemaligen Warschauer Ghettos. Es dokumentiert 1000 Jahre jüdischen Lebens in Polen.",
      hu: "A Lengyelországi Zsidóság Történeti Múzeuma az egykori varsói gettó területén. 1000 év lengyelországi zsidó életet dokumentál.",
      ro: "Muzeul de Istorie a Evreilor Polonezi pe locul fostului ghetou din Varșovia. Documentează 1000 de ani de viață evreiască în Polonia.",
      en: "Museum of the History of Polish Jews on the site of the former Warsaw Ghetto. It documents 1000 years of Jewish life in Poland."
    },
    facts: {
      de: ["Gegenüber dem Denkmal für die Helden des Ghettos.", "Preisgekrönte Architektur.", "Kernausstellung über 1000 Jahre Geschichte."],
      hu: ["A gettó hőseinek emlékművével szemben található.", "Díjnyertes építészet.", "Az 1000 éves történelemről szóló központi kiállítás."],
      ro: ["Vizavi de Monumentul Eroilor Ghetoului.", "Arhitectură premiată.", "Expoziție de bază despre 1000 de ani de istorie."],
      en: ["Opposite the Monument to the Ghetto Heroes.", "Award-winning architecture.", "Core exhibition on 1000 years of history."]
    }
  },
  {
    id: "kid-landmark-copernicus-science-centre-extra",
    type: "kid-landmark",
    parent: "PL-MA",
    coords: [21.02, 52.24],
    name: { de: "Kopernikus-Wissenschaftszentrum", hu: "Kopernikusz Tudományos Központ", ro: "Centrul de Știință Copernic", en: "Copernicus Science Centre" },
    description: {
      de: "Eines der größten Wissenschaftsmuseen in Europa, mit Hunderten von interaktiven Exponaten. Ein Paradies für neugierige Kinder und Erwachsene.",
      hu: "Európa egyik legnagyobb tudományos múzeuma, több száz interaktív kiállítási tárggyal. A kíváncsi gyerekek és felnőttek paradicsoma.",
      ro: "Unul dintre cele mai mari muzee de știință din Europa, cu sute de exponate interactive. Un paradis pentru copiii și adulții curioși.",
      en: "One of the largest science museums in Europe, with hundreds of interactive exhibits. A paradise for curious children and adults."
    },
    facts: {
      de: ["Über 450 interaktive Exponate.", "Planetarium 'Himmel des Kopernikus'.", "Am Ufer der Weichsel gelegen."],
      hu: ["Több mint 450 interaktív kiállítási tárgy.", "'Kopernikusz Ege' planetárium.", "A Visztula partján található."],
      ro: ["Peste 450 de exponate interactive.", "Planetariul 'Cerul lui Copernic'.", "Situat pe malul Vistulei."],
      en: ["Over 450 interactive exhibits.", "Planetarium 'Heavens of Copernicus'.", "Located on the bank of the Vistula river."]
    }
  },
  {
    id: "historical-wilanow-palace-extra",
    type: "historical",
    parent: "PL-MA",
    coords: [21.09, 52.16],
    name: { de: "Schloss Wilanów", hu: "Wilanów-palota", ro: "Palatul Wilanów", en: "Wilanów Palace" },
    description: {
      de: "Eine prächtige königliche Residenz am Rande von Warschau, oft als das 'polnische Versailles' bezeichnet. Umgeben von weitläufigen Gärten.",
      hu: "Pompás királyi rezidencia Varsó szélén, amelyet gyakran a 'lengyel Versailles'-ként emlegetnek. Hatalmas kertek veszik körül.",
      ro: "O reședință regală magnifică la periferia Varșoviei, adesea numită 'Versailles-ul polonez'. Înconjurată de grădini vaste.",
      en: "A magnificent royal residence on the outskirts of Warsaw, often called the 'Polish Versailles'. Surrounded by extensive gardens."
    },
    facts: {
      de: ["Sommerresidenz von König Jan III. Sobieski.", "Überlebte die Teilungen und Kriege Polens.", "Museum für Kunst und Geschichte."],
      hu: ["III. Sobieski János király nyári rezidenciája.", "Túlélte Lengyelország felosztásait és háborúit.", "Művészeti és Történeti Múzeum."],
      ro: ["Reședința de vară a regelui Ioan al III-lea Sobieski.", "A supraviețuit împărțirilor și războaielor Poloniei.", "Muzeu de artă și istorie."],
      en: ["Summer residence of King John III Sobieski.", "Survived the partitions and wars of Poland.", "Museum of art and history."]
    }
  },
  {
    id: "nature-vistula-river-extra",
    type: "river",
    parent: "PL",
    coords: [18.9, 54.3],
    name: { de: "Weichsel", hu: "Visztula", ro: "Vistula", en: "Vistula River" },
    description: {
      de: "Der längste und wichtigste Fluss Polens, der das Land von den Beskiden im Süden bis zur Ostsee im Norden durchfließt.",
      hu: "Lengyelország leghosszabb és legfontosabb folyója, amely délen a Beszkidektől északon a Balti-tengerig szeli át az országot.",
      ro: "Cel mai lung și mai important râu din Polonia, care traversează țara de la Munții Beskizi în sud până la Marea Baltică în nord.",
      en: "The longest and most important river in Poland, flowing from the Beskid Mountains in the south to the Baltic Sea in the north."
    },
    facts: {
      de: ["Längster Fluss in Polen (1.047 km).", "Fließt durch Krakau, Warschau und Danzig.", "Mündet in die Danziger Bucht."],
      hu: ["Lengyelország leghosszabb folyója (1047 km).", "Átfolyik Krakkón, Varsón és Gdańskon.", "A Gdański-öbölbe torkollik."],
      ro: ["Cel mai lung râu din Polonia (1.047 km).", "Curge prin Cracovia, Varșovia și Gdańsk.", "Se varsă în Golful Gdańsk."],
      en: ["Longest river in Poland (1,047 km).", "Flows through Krakow, Warsaw, and Gdańsk.", "Empties into the Gdańsk Bay."]
    }
  },
  {
    id: "river-oder-river-extra",
    type: "river",
    parent: "PL",
    coords: [14.5, 53.5],
    name: { de: "Oder", hu: "Odera", ro: "Oder", en: "Oder River" },
    description: {
      de: "Ein großer Fluss in Mitteleuropa, der einen großen Teil der Grenze zwischen Polen und Deutschland bildet. Wichtige Wasserstraße.",
      hu: "Nagy folyó Közép-Európában, amely a lengyel-német határ jelentős részét képezi. Fontos vízi út.",
      ro: "Un râu important din Europa Centrală, formând o mare parte a graniței dintre Polonia și Germania. O cale navigabilă importantă.",
      en: "A major river in Central Europe, forming a large part of the border between Poland and Germany. An important waterway."
    },
    facts: {
      de: ["Bildet die Grenze zu Deutschland.", "Zweitlängster Fluss Polens.", "Mündet in das Stettiner Haff."],
      hu: ["Határt képez Németországgal.", "Lengyelország második leghosszabb folyója.", "A Szczecini-öbölbe torkollik."],
      ro: ["Formează granița cu Germania.", "Al doilea cel mai lung râu din Polonia.", "Se varsă în Laguna Szczecin."],
      en: ["Forms the border with Germany.", "Second longest river in Poland.", "Flows into the Szczecin Lagoon."]
    }
  },
  {
    id: "forest-bialowieza-forest-extra",
    type: "forest",
    parent: "PL-PD",
    coords: [23.8, 52.7],
    name: { de: "Białowieża-Urwald", hu: "Białowieża-erdő", ro: "Pădurea Białowieża", en: "Białowieża Forest" },
    description: {
      de: "Einer der letzten und größten verbliebenen Teile des riesigen Urwaldes, der einst die europäische Tiefebene bedeckte. UNESCO-Weltkulturerbe und Heimat der größten Population europäischer Bisons.",
      hu: "Az egykor az európai síkságot borító hatalmas őserdő egyik utolsó és legnagyobb megmaradt része. UNESCO Világörökség, és az európai bölények legnagyobb populációjának otthona.",
      ro: "Una dintre ultimele și cele mai mari părți rămase din vasta pădure primordială care acoperea odinioară Câmpia Europeană. Sit al Patrimoniului Mondial UNESCO și casă a celei mai mari populații de zimbri europeni.",
      en: "One of the last and largest remaining parts of the immense primeval forest that once stretched across the European Plain. A UNESCO World Heritage site and home to the world's largest population of European bison."
    },
    facts: {
      de: ["Letzter Urwald in Europa.", "Heimat von über 800 Wisenten.", "Geteilt zwischen Polen und Weißrussland."],
      hu: ["Európa utolsó őserdeje.", "Több mint 800 bölény otthona.", "Megoszlik Lengyelország és Fehéroroszország között."],
      ro: ["Ultima pădure primordială din Europa.", "Adăpostește peste 800 de zimbri.", "Împărțită între Polonia și Belarus."],
      en: ["Last primeval forest in Europe.", "Home to over 800 European bison.", "Shared between Poland and Belarus."]
    }
  },
  {
    id: "mountain-table-mountains-extra",
    type: "mountain",
    parent: "PL-DS",
    coords: [16.3, 50.48],
    name: { de: "Heuscheuergebirge", hu: "Tábla-hegység", ro: "Munții Mesei", en: "Table Mountains" },
    description: {
      de: "Ein einzigartiges Gebirge mit flachen, tischähnlichen Gipfeln. Die bizarren Felsformationen und Labyrinthe sind eine Hauptattraktion.",
      hu: "Egyedülálló hegység lapos, asztalszerű csúcsokkal. A bizarr sziklaalakzatok és labirintusok fő vonzerőt jelentenek.",
      ro: "Un lanț montan unic, cu vârfuri plate, asemănătoare unor mese. Formațiunile stâncoase bizare și labirinturile sunt o atracție majoră.",
      en: "A unique mountain range with flat, table-like tops. The bizarre rock formations and labyrinths are a major attraction."
    },
    facts: {
      de: ["Einziges Tafelgebirge in Polen.", "Nationalpark Stołowe-Berge.", "Drehort für 'Die Chroniken von Narnia'."],
      hu: ["Lengyelország egyetlen táblahegysége.", "Stołowe-hegység Nemzeti Park.", "A 'Narnia krónikái' forgatási helyszíne."],
      ro: ["Singurul lanț montan de tip masă din Polonia.", "Parcul Național Munții Stołowe.", "Loc de filmare pentru 'Cronicile din Narnia'."],
      en: ["Only table mountains in Poland.", "Stołowe Mountains National Park.", "Filming location for 'The Chronicles of Narnia'."]
    }
  },
  {
    id: "kid-landmark-energylandia-extra",
    type: "kid-landmark",
    parent: "PL-MP",
    coords: [19.40, 49.99],
    name: { de: "Energylandia", hu: "Energylandia", ro: "Energylandia", en: "Energylandia" },
    description: {
      de: "Der größte Vergnügungspark in Polen mit zahlreichen Achterbahnen und Attraktionen für alle Altersgruppen.",
      hu: "Lengyelország legnagyobb vidámparkja, számos hullámvasúttal és attrakcióval minden korosztály számára.",
      ro: "Cel mai mare parc de distracții din Polonia, cu numeroase rollercoastere și atracții pentru toate vârstele.",
      en: "The largest amusement park in Poland, with numerous roller coasters and attractions for all ages."
    },
    facts: {
      de: ["Größter Vergnügungspark in Polen.", "Über 100 Attraktionen.", "Hat einige der schnellsten Achterbahnen Europas."],
      hu: ["Lengyelország legnagyobb vidámparkja.", "Több mint 100 attrakció.", "Itt található Európa néhány leggyorsabb hullámvasútja."],
      ro: ["Cel mai mare parc de distracții din Polonia.", "Peste 100 de atracții.", "Are unele dintre cele mai rapide rollercoastere din Europa."],
      en: ["Largest amusement park in Poland.", "Over 100 attractions.", "Has some of the fastest roller coasters in Europe."]
    }
  },
  {
    id: "animal-habitat-wroclaw-zoo-extra",
    type: "animal-habitat",
    parent: "PL-DS",
    coords: [17.07, 51.10],
    name: { de: "Zoo Breslau", hu: "Wrocławi Állatkert", ro: "Grădina Zoologică Wrocław", en: "Wrocław Zoo" },
    description: {
      de: "Der älteste Zoo Polens mit einer riesigen Artenvielfalt. Das Afrykarium, ein Ozeanarium, das den Tieren Afrikas gewidmet ist, ist die Hauptattraktion.",
      hu: "Lengyelország legrégebbi állatkertje, hatalmas fajgazdagsággal. Az Afrikárium, egy Afrikai állatoknak szentelt ócenárium, a fő attrakció.",
      ro: "Cea mai veche grădină zoologică din Polonia, cu o imensă biodiversitate. Afrykarium, un oceanariu dedicat animalelor din Africa, este atracția principală.",
      en: "The oldest zoo in Poland, with a huge biodiversity. The Afrykarium, an oceanarium dedicated to the animals of Africa, is the main attraction."
    },
    facts: {
      de: ["Ältester Zoo in Polen (gegr. 1865).", "Artenreichster Zoo in Polen.", "Einzigartiges Afrykarium-Komplex."],
      hu: ["Lengyelország legrégebbi állatkertje (alapítva 1865).", "Lengyelország legfajgazdagabb állatkertje.", "Egyedülálló Afrikárium komplexum."],
      ro: ["Cea mai veche grădină zoologică din Polonia (fondată în 1865).", "Grădina zoologică cu cea mai mare biodiversitate din Polonia.", "Complex unic Afrykarium."],
      en: ["Oldest zoo in Poland (est. 1865).", "Most species-rich zoo in Poland.", "Unique Afrykarium complex."]
    }
  },
  {
    id: "landmark-hydropolis-wroclaw-extra",
    type: "landmark",
    parent: "PL-DS",
    coords: [17.05, 51.10],
    name: { de: "Hydropolis Breslau", hu: "Hydropolis Wrocław", ro: "Hydropolis Wrocław", en: "Hydropolis Wrocław" },
    description: {
      de: "Ein einzigartiges Wissenszentrum, das ganz dem Wasser gewidmet ist. Untergebracht in einem historischen unterirdischen Reinwasserbehälter aus dem 19. Jahrhundert.",
      hu: "Egyedülálló tudásközpont, amelyet teljes egészében a víznek szenteltek. Egy történelmi, 19. századi földalatti tiszta vizű tartályban kapott helyet.",
      ro: "Un centru de cunoaștere unic, dedicat în întregime apei. Găzduit într-un rezervor subteran istoric de apă curată din secolul al XIX-lea.",
      en: "A unique knowledge center dedicated entirely to water. Housed in a historic 19th-century underground clean water tank."
    },
    facts: {
      de: ["Museum, das dem Wasser gewidmet ist.", "Multimedia- und interaktive Ausstellungen.", "In einem historischen Wasserreservoir."],
      hu: ["A víznek szentelt múzeum.", "Multimédiás és interaktív kiállítások.", "Egy történelmi víztározóban."],
      ro: ["Muzeu dedicat apei.", "Expoziții multimedia și interactive.", "Într-un rezervor istoric de apă."],
      en: ["Museum dedicated to water.", "Multimedia and interactive exhibits.", "In a historic water reservoir."]
    }
  },
  {
    id: "historical-ksiaz-castle-extra",
    type: "castle",
    parent: "PL-DS",
    coords: [16.29, 50.84],
    name: { de: "Schloss Fürstenstein", hu: "Książ kastély", ro: "Castelul Książ", en: "Książ Castle" },
    description: {
      de: "Das drittgrößte Schloss Polens, malerisch auf einer Klippe gelegen. Berühmt für seine Verbindungen zum Projekt Riese, einem geheimen Nazi-Bauprojekt.",
      hu: "Lengyelország harmadik legnagyobb kastélya, festői helyen, egy sziklán. Híres a Projekt Riese-hez fűződő kapcsolatairól, egy titkos náci építési projektről.",
      ro: "Al treilea cel mai mare castel din Polonia, situat pitoresc pe o stâncă. Faimos pentru legăturile sale cu Proiectul Riese, un proiect secret de construcții naziste.",
      en: "The third-largest castle in Poland, picturesquely situated on a cliff. Famous for its connections to Project Riese, a secret Nazi construction project."
    },
    facts: {
      de: ["Drittgrößtes Schloss in Polen.", "Teil des geheimen 'Projekt Riese' im Zweiten Weltkrieg.", "Umgeben von terrassierten Gärten."],
      hu: ["Lengyelország harmadik legnagyobb kastélya.", "A titkos 'Projekt Riese' része a második világháborúban.", "Teraszos kertek veszik körül."],
      ro: ["Al treilea cel mai mare castel din Polonia.", "Parte a proiectului secret 'Riese' din Al Doilea Război Mondial.", "Înconjurat de grădini terasate."],
      en: ["Third-largest castle in Poland.", "Part of the secret 'Project Riese' in WWII.", "Surrounded by terraced gardens."]
    }
  },
  {
    id: "nature-karkonosze-national-park-extra",
    type: "nature",
    parent: "PL-DS",
    coords: [15.6, 50.78],
    name: { de: "Nationalpark Riesengebirge", hu: "Karkonosze Nemzeti Park", ro: "Parcul Național Karkonosze", en: "Karkonosze National Park" },
    description: {
      de: "Schützt das höchste Gebirge der Sudeten. Bekannt für seine postglazialen Kessel, Bergseen und die markante Schneekoppe.",
      hu: "Védi a Szudéták legmagasabb hegységét. Ismert a jégkorszak utáni katlanjairól, hegyi tavairól és a jellegzetes Sněžka-csúcsról.",
      ro: "Protejează cel mai înalt lanț montan din Sudeți. Cunoscut pentru circurile sale post-glaciare, lacurile montane și vârful distinctiv Sněžka.",
      en: "Protects the highest mountain range of the Sudetes. Known for its post-glacial cirques, mountain lakes, and the distinctive Sněžka peak."
    },
    facts: {
      de: ["Umfasst den höchsten Gipfel der Sudeten, die Schneekoppe.", "UNESCO-Biosphärenreservat.", "Einzigartige Tundra-ähnliche Vegetation."],
      hu: ["Magában foglalja a Szudéták legmagasabb csúcsát, a Sněžkát.", "UNESCO Bioszféra Rezervátum.", "Egyedülálló tundra-szerű növényzet."],
      ro: ["Include cel mai înalt vârf al Sudeților, Sněžka.", "Rezervație a biosferei UNESCO.", "Vegetație unică asemănătoare tundrei."],
      en: ["Includes the highest peak of the Sudetes, Sněžka.", "UNESCO Biosphere Reserve.", "Unique tundra-like vegetation."]
    }
  },
  {
    id: "landmark-church-of-peace-swidnica-extra",
    type: "landmark",
    parent: "PL-DS",
    coords: [16.49, 50.84],
    name: { de: "Friedenskirche Świdnica", hu: "Świdnicai béketemplom", ro: "Biserica Păcii din Świdnica", en: "Church of Peace, Świdnica" },
    description: {
      de: "Die größte hölzerne Barockkirche Europas, ein UNESCO-Weltkulturerbe. Erbaut nach dem Westfälischen Frieden ohne Turm und Glocken.",
      hu: "Európa legnagyobb barokk fatemploma, az UNESCO Világörökség része. A vesztfáliai béke után épült, torony és harangok nélkül.",
      ro: "Cea mai mare biserică barocă din lemn din Europa, un sit al Patrimoniului Mondial UNESCO. Construită după Pacea de la Westfalia, fără turn și clopote.",
      en: "The largest timber-framed Baroque church in Europe, a UNESCO World Heritage site. Built after the Peace of Westphalia without a tower or bells."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe.", "Erbaut aus Holz, Lehm und Stroh.", "Bietet Platz für 7.500 Menschen."],
      hu: ["UNESCO Világörökség része.", "Fából, agyagból és szalmából épült.", "7500 ember befogadására alkalmas."],
      ro: ["Patrimoniu Mondial UNESCO.", "Construită din lemn, lut și paie.", "Are o capacitate de 7.500 de persoane."],
      en: ["UNESCO World Heritage site.", "Built of wood, loam and straw.", "Has a capacity of 7,500 people."]
    }
  },
  {
    id: "landmark-church-of-peace-jawor-extra",
    type: "landmark",
    parent: "PL-DS",
    coords: [16.19, 51.05],
    name: { de: "Friedenskirche Jawor", hu: "Jawori béketemplom", ro: "Biserica Păcii din Jawor", en: "Church of Peace, Jawor" },
    description: {
      de: "Zusammen mit der Kirche in Świdnica ein UNESCO-Weltkulturerbe. Eine beeindruckende Fachwerkkirche, die im 17. Jahrhundert unter strengen Auflagen erbaut wurde.",
      hu: "A świdnicai templommal együtt az UNESCO Világörökség része. Lenyűgöző favázas templom, amelyet a 17. században szigorú feltételek mellett építettek.",
      ro: "Împreună cu biserica din Świdnica, este un sit al Patrimoniului Mondial UNESCO. O biserică impresionantă din lemn, construită în secolul al XVII-lea sub condiții stricte.",
      en: "A UNESCO World Heritage site along with the church in Świdnica. An impressive timber-framed church built in the 17th century under strict conditions."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe.", "Eine von drei Friedenskirchen, von denen zwei erhalten sind.", "In nur einem Jahr erbaut."],
      hu: ["UNESCO Világörökség része.", "A három béketemplom egyike, melyből kettő maradt fenn.", "Mindössze egy év alatt épült fel."],
      ro: ["Patrimoniu Mondial UNESCO.", "Una dintre cele trei Biserici ale Păcii, dintre care două au supraviețuit.", "Construită în doar un an."],
      en: ["UNESCO World Heritage site.", "One of three Churches of Peace, two of which survived.", "Built in just one year."]
    }
  },
  {
    id: "city-legnica-extra",
    type: "city",
    parent: "PL-DS",
    coords: [16.16, 51.21],
    name: { de: "Liegnitz", hu: "Legnica", ro: "Legnica", en: "Legnica" },
    description: {
      de: "Eine historisch wichtige Stadt in Niederschlesien, bekannt für die Schlacht bei Liegnitz 1241 gegen die Mongolen. Heute ein Zentrum der Kupferindustrie.",
      hu: "Történelmileg fontos város Alsó-Sziléziában, amely az 1241-es, mongolok elleni legnicai csatáról ismert. Ma a rézipar központja.",
      ro: "Un oraș important din punct de vedere istoric în Silezia Inferioară, cunoscut pentru Bătălia de la Legnica din 1241 împotriva mongolilor. Astăzi este un centru al industriei cuprului.",
      en: "A historically important city in Lower Silesia, known for the 1241 Battle of Legnica against the Mongols. Today a center of the copper industry."
    },
    facts: {
      de: ["Ort der Schlacht bei Liegnitz (1241).", "Piastenschloss mit zwei Türmen.", "Wichtig für die Kupferverarbeitung (KGHM)."],
      hu: ["A legnicai csata helyszíne (1241).", "Piast-vár két toronnyal.", "Fontos a rézfeldolgozás szempontjából (KGHM)."],
      ro: ["Locul Bătăliei de la Legnica (1241).", "Castelul Piast cu două turnuri.", "Important pentru prelucrarea cuprului (KGHM)."],
      en: ["Site of the Battle of Legnica (1241).", "Piast Castle with two towers.", "Important for copper processing (KGHM)."]
    }
  },
  {
    id: "city-jelenia-gora-extra",
    type: "city",
    parent: "PL-DS",
    coords: [15.73, 50.90],
    name: { de: "Hirschberg im Riesengebirge", hu: "Jelenia Góra", ro: "Jelenia Góra", en: "Jelenia Góra" },
    description: {
      de: "Eine Stadt am Fuße des Riesengebirges, bekannt als das 'Tal der Schlösser und Gärten'. Ein beliebter Ausgangspunkt für die Erkundung der Sudeten.",
      hu: "Város az Óriás-hegység lábánál, a 'kastélyok és kertek völgyeként' ismert. Népszerű kiindulópont a Szudéták felfedezéséhez.",
      ro: "Un oraș la poalele Munților Karkonosze, cunoscut ca 'Valea Palatelor și Grădinilor'. Un punct de plecare popular pentru explorarea Sudeților.",
      en: "A city at the foot of the Karkonosze Mountains, known as the 'Valley of Palaces and Gardens'. A popular base for exploring the Sudetes."
    },
    facts: {
      de: ["Tor zum Riesengebirge.", "Umgeben von zahlreichen Schlössern und Palästen.", "Kurviertel Cieplice mit Thermalquellen."],
      hu: ["Kapu az Óriás-hegységhez.", "Számos vár és palota veszi körül.", "Cieplice gyógyfürdő negyed termálforrásokkal."],
      ro: ["Poarta de acces către Munții Karkonosze.", "Înconjurat de numeroase castele și palate.", "Stațiunea balneară Cieplice cu izvoare termale."],
      en: ["Gateway to the Karkonosze Mountains.", "Surrounded by numerous castles and palaces.", "Cieplice spa district with thermal springs."]
    }
  },
  {
    id: "historical-project-riese-extra",
    type: "historical",
    parent: "PL-DS",
    coords: [16.4, 50.68],
    name: { de: "Projekt Riese", hu: "Projekt Riese", ro: "Proiectul Riese", en: "Project Riese" },
    description: {
      de: "Ein unvollendetes, riesiges unterirdisches Bauprojekt der Nazis im Eulengebirge. Der Zweck ist bis heute ein Rätsel und Gegenstand vieler Theorien.",
      hu: "A nácik befejezetlen, hatalmas földalatti építési projektje a Bagoly-hegységben. Célja máig rejtély, és számos elmélet tárgya.",
      ro: "Un proiect de construcție subterană nazist, neterminat și masiv, în Munții Owl. Scopul său rămâne un mister și subiectul multor teorii.",
      en: "An unfinished, massive Nazi underground construction project in the Owl Mountains. Its purpose remains a mystery and the subject of many theories."
    },
    facts: {
      de: ["Geheimes Bauprojekt von Nazi-Deutschland.", "Sieben unterirdische Komplexe.", "Wurde von Zwangsarbeitern gebaut."],
      hu: ["A náci Németország titkos építési projektje.", "Hét földalatti komplexum.", "Kényszermunkások építették."],
      ro: ["Proiect secret de construcție al Germaniei naziste.", "Șapte complexe subterane.", "Construit de muncitori forțați."],
      en: ["Secret construction project of Nazi Germany.", "Seven underground complexes.", "Built by forced labourers."]
    }
  },
  {
    id: "city-gliwice-extra",
    type: "city",
    parent: "PL-SL",
    coords: [18.67, 50.29],
    name: { de: "Gleiwitz", hu: "Gliwice", ro: "Gliwice", en: "Gliwice" },
    description: {
      de: "Eine Industriestadt in Oberschlesien, bekannt für den Sender Gleiwitz, dessen inszenierter Überfall den Beginn des Zweiten Weltkriegs markierte.",
      hu: "Ipari város Felső-Sziléziában, amely a gliwicei rádióadóról ismert, amelynek megrendezett megtámadása a második világháború kezdetét jelentette.",
      ro: "Un oraș industrial în Silezia Superioară, cunoscut pentru stația radio din Gliwice, al cărei atac înscenat a marcat începutul celui de-al Doilea Război Mondial.",
      en: "An industrial city in Upper Silesia, known for the Gliwice Radio Tower, the site of a staged attack that marked the beginning of World War II."
    },
    facts: {
      de: ["Ort des 'Gleiwitzer Zwischenfalls' 1939.", "Holzsendeturm ist einer der höchsten der Welt.", "Wichtiger Binnenhafen am Gleiwitzer Kanal."],
      hu: ["Az 1939-es 'gliwicei incidens' helyszíne.", "A fa adótorony a világ egyik legmagasabbja.", "Fontos folyami kikötő a Gliwice-csatornán."],
      ro: ["Locul 'Incidentului de la Gliwice' din 1939.", "Turnul radio din lemn este unul dintre cele mai înalte din lume.", "Port fluvial important pe Canalul Gliwice."],
      en: ["Site of the 1939 'Gliwice incident'.", "Wooden radio tower is one of the tallest in the world.", "Important river port on the Gliwice Canal."]
    }
  },
  {
    id: "city-zabrze-extra",
    type: "city",
    parent: "PL-SL",
    coords: [18.78, 50.32],
    name: { de: "Zabrze", hu: "Zabrze", ro: "Zabrze", en: "Zabrze" },
    description: {
      de: "Eine Stadt im Herzen des schlesischen Industriegebiets, die für ihre Bergbautradition bekannt ist. Beherbergt das historische Kohlebergwerk Guido.",
      hu: "Város a sziléziai iparvidék szívében, amely bányászati hagyományairól ismert. Itt található a történelmi Guido szénbánya.",
      ro: "Un oraș în inima zonei industriale sileziene, cunoscut pentru tradițiile sale miniere. Găzduiește mina istorică de cărbune Guido.",
      en: "A city in the heart of the Silesian industrial area, known for its mining traditions. It is home to the Guido Historic Coal Mine."
    },
    facts: {
      de: ["Zentrum des oberschlesischen Industriegebiets.", "Beherbergt die Bergwerke Guido und Königin Luise.", "Heimat des erfolgreichen Fußballvereins Górnik Zabrze."],
      hu: ["A felső-sziléziai iparvidék központja.", "Otthont ad a Guido és a Queen Luise bányáknak.", "A sikeres Górnik Zabrze futballklub otthona."],
      ro: ["Centru al zonei industriale a Sileziei Superioare.", "Găzduiește minele Guido și Queen Luise.", "Acasă la clubul de fotbal de succes Górnik Zabrze."],
      en: ["Center of the Upper Silesian Industrial Region.", "Home to the Guido and Queen Luise mines.", "Home of the successful football club Górnik Zabrze."]
    }
  },
  {
    id: "city-bytom-extra",
    type: "city",
    parent: "PL-SL",
    coords: [18.92, 50.34],
    name: { de: "Beuthen", hu: "Bytom", ro: "Bytom", en: "Bytom" },
    description: {
      de: "Eine der ältesten Städte Oberschlesiens mit einer reichen, aber durch den Niedergang des Bergbaus gezeichneten Geschichte. Bekannt für ihre Oper und ihr Museum.",
      hu: "Felső-Szilézia egyik legrégebbi városa, gazdag, de a bányászat hanyatlása által megviselt történelemmel. Operájáról és múzeumáról ismert.",
      ro: "Unul dintre cele mai vechi orașe din Silezia Superioară, cu o istorie bogată, dar marcată de declinul mineritului. Cunoscut pentru opera și muzeul său.",
      en: "One of the oldest cities in Upper Silesia, with a rich history but marked by the decline of mining. Known for its opera house and museum."
    },
    facts: {
      de: ["Historisch wichtiges Zentrum für Blei- und Silbererz.", "Schlesische Oper hat hier ihren Sitz.", "Viele Gebäude leiden unter Bergschäden."],
      hu: ["Történelmileg fontos ólom- és ezüstérc-központ.", "Itt található a Sziléziai Opera.", "Sok épület szenved a bányakároktól."],
      ro: ["Centru istoric important pentru minereul de plumb și argint.", "Opera Sileziană își are sediul aici.", "Multe clădiri suferă din cauza daunelor miniere."],
      en: ["Historically important center for lead and silver ore.", "The Silesian Opera is based here.", "Many buildings suffer from mining damage."]
    }
  },
  {
    id: "city-sosnowiec-extra",
    type: "city",
    parent: "PL-SL",
    coords: [19.10, 50.28],
    name: { de: "Sosnowitz", hu: "Sosnowiec", ro: "Sosnowiec", en: "Sosnowiec" },
    description: {
      de: "Eine große Industriestadt im Dombrowaer Kohlebecken. Historisch Teil des 'Dreikaiserecks', wo die Grenzen von Deutschland, Österreich-Ungarn und Russland aufeinander trafen.",
      hu: "Nagy iparváros a Dąbrowa-medencében. Történelmileg a 'három császár sarkának' része volt, ahol Németország, Ausztria-Magyarország és Oroszország határai találkoztak.",
      ro: "Un mare oraș industrial în Bazinul Cărbunelui Dąbrowa. Istoric, parte a 'Colțului celor Trei Împărați', unde se întâlneau granițele Germaniei, Austro-Ungariei și Rusiei.",
      en: "A large industrial city in the Dąbrowa Basin. Historically part of the 'Three Emperors' Corner', where the borders of Germany, Austria-Hungary, and Russia met."
    },
    facts: {
      de: ["Größte Stadt im Dombrowaer Kohlebecken.", "Ehemals am 'Dreikaisereck' gelegen.", "Schloss Sielecki aus dem 15. Jahrhundert."],
      hu: ["A Dąbrowa-medence legnagyobb városa.", "Egykor a 'három császár sarkánál' feküdt.", "15. századi Sielecki-kastély."],
      ro: ["Cel mai mare oraș din Bazinul Cărbunelui Dąbrowa.", "Fost situat la 'Colțul celor Trei Împărați'.", "Castelul Sielecki din secolul al XV-lea."],
      en: ["Largest city in the Dąbrowa Basin.", "Formerly located at the 'Three Emperors' Corner'.", "15th-century Sielecki Castle."]
    }
  },
  {
    id: "industry-fiat-auto-poland-tychy-extra",
    type: "industry",
    parent: "PL-SL",
    coords: [19.0, 50.15],
    name: { de: "Fiat Auto Poland Tychy", hu: "Fiat Auto Poland Tychy", ro: "Fiat Auto Poland Tychy", en: "Fiat Auto Poland Tychy" },
    description: {
      de: "Eine der größten und modernsten Autofabriken in Europa. Sie produziert verschiedene Modelle für Stellantis, darunter den Fiat 500.",
      hu: "Európa egyik legnagyobb és legmodernebb autógyára. Különböző modelleket gyárt a Stellantis számára, köztük a Fiat 500-at.",
      ro: "Una dintre cele mai mari și mai moderne fabrici de automobile din Europa. Produce diverse modele pentru Stellantis, inclusiv Fiat 500.",
      en: "One of the largest and most modern car factories in Europe. It produces various models for Stellantis, including the Fiat 500."
    },
    facts: {
      de: ["Größte Autofabrik in Polen.", "Produziert den Fiat 500, Lancia Ypsilon und andere.", "Wichtiger Arbeitgeber in der Region."],
      hu: ["Lengyelország legnagyobb autógyára.", "Többek között a Fiat 500-at és a Lancia Ypsilont gyártja.", "Fontos munkaadó a régióban."],
      ro: ["Cea mai mare fabrică de automobile din Polonia.", "Produce Fiat 500, Lancia Ypsilon și altele.", "Angajator important în regiune."],
      en: ["Largest car factory in Poland.", "Produces the Fiat 500, Lancia Ypsilon, and others.", "Major employer in the region."]
    }
  },
  {
    id: "agriculture-zywiec-brewery-extra",
    type: "agriculture",
    parent: "PL-SL",
    coords: [19.18, 49.67],
    name: { de: "Brauerei Żywiec", hu: "Żywieci sörfőzde", ro: "Fabrica de bere Żywiec", en: "Żywiec Brewery" },
    description: {
      de: "Eine der größten und bekanntesten Brauereien Polens, gegründet 1856 von Erzherzog Albrecht Friedrich von Habsburg. Das Biermuseum ist eine beliebte Attraktion.",
      hu: "Lengyelország egyik legnagyobb és legismertebb sörfőzdéje, amelyet 1856-ban Habsburg Albert Frigyes főherceg alapított. A sörmúzeum népszerű látványosság.",
      ro: "Una dintre cele mai mari și mai cunoscute fabrici de bere din Polonia, fondată în 1856 de arhiducele Albert Frederic de Habsburg. Muzeul berii este o atracție populară.",
      en: "One of the largest and most famous breweries in Poland, founded in 1856 by Archduke Albert Frederick of Habsburg. The beer museum is a popular attraction."
    },
    facts: {
      de: ["Gegründet von der Familie Habsburg.", "Teil der Heineken-Gruppe.", "Interaktives Museum der Brauerei."],
      hu: ["A Habsburg család alapította.", "A Heineken-csoport része.", "Interaktív sörfőzde-múzeum."],
      ro: ["Fondată de familia Habsburg.", "Parte a grupului Heineken.", "Muzeu interactiv al fabricii de bere."],
      en: ["Founded by the Habsburg family.", "Part of the Heineken Group.", "Interactive museum of the brewery."]
    }
  },
  {
    id: "landmark-beskid-mountains-extra",
    type: "mountain",
    parent: "PL-SL",
    coords: [19.5, 49.6],
    name: { de: "Beskiden", hu: "Beszkidek", ro: "Munții Beskizi", en: "Beskid Mountains" },
    description: {
      de: "Eine Reihe von Gebirgszügen in den Karpaten, die sich ideal zum Wandern, Skifahren und für den ländlichen Tourismus eignen. Bekannte Gipfel sind Babia Góra und Pilsko.",
      hu: "A Kárpátok hegyláncolata, amely ideális túrázásra, síelésre és falusi turizmusra. Ismert csúcsai a Babia Góra és a Pilsko.",
      ro: "Un lanț de munți din Carpați, ideal pentru drumeții, schi și turism rural. Vârfurile cunoscute includ Babia Góra și Pilsko.",
      en: "A series of mountain ranges in the Carpathians, ideal for hiking, skiing, and rural tourism. Notable peaks include Babia Góra and Pilsko."
    },
    facts: {
      de: ["Teil der Äußeren Westkarpaten.", "Beliebte Skigebiete wie Szczyrk.", "Nationalpark Babia Góra ist ein UNESCO-Biosphärenreservat."],
      hu: ["A Külső-Nyugati-Kárpátok része.", "Népszerű síterepek, mint például Szczyrk.", "A Babia Góra Nemzeti Park az UNESCO bioszféra-rezervátuma."],
      ro: ["Parte a Carpaților Occidentali Exteriori.", "Stațiuni de schi populare precum Szczyrk.", "Parcul Național Babia Góra este o rezervație a biosferei UNESCO."],
      en: ["Part of the Outer Western Carpathians.", "Popular ski resorts like Szczyrk.", "Babia Góra National Park is a UNESCO Biosphere Reserve."]
    }
  },
  {
    id: "city-glogow-extra",
    type: "city",
    parent: "PL-DS",
    coords: [16.08, 51.66],
    name: { de: "Glogau", hu: "Głogów", ro: "Głogów", en: "Głogów" },
    description: {
      de: "Eine historische Stadt an der Oder, bekannt für die heldenhafte Verteidigung von 1109. Stark im Zweiten Weltkrieg zerstört, aber mit wiederaufgebautem Schloss und Rathaus.",
      hu: "Történelmi város az Odera partján, amely az 1109-es hősies védelemről ismert. A második világháborúban súlyosan elpusztult, de a várat és a városházát újjáépítették.",
      ro: "Un oraș istoric pe râul Oder, cunoscut pentru apărarea sa eroică din 1109. Distrus în mare parte în Al Doilea Război Mondial, dar cu un castel și o primărie reconstruite.",
      en: "A historic city on the Oder river, known for its heroic defense in 1109. Heavily destroyed in WWII but with a rebuilt castle and town hall."
    },
    facts: {
      de: ["Berühmt für die Verteidigung von 1109.", "Wichtiger Standort der Kupferindustrie (KGHM).", "Wiederaufgebautes Schloss der Glogauer Herzöge."],
      hu: ["Híres az 1109-es védelemről.", "Fontos rézipari központ (KGHM).", "A głogówi hercegek újjáépített kastélya."],
      ro: ["Faimos pentru apărarea din 1109.", "Amplasament important al industriei cuprului (KGHM).", "Castel reconstruit al Ducilor de Głogów."],
      en: ["Famous for the defense of 1109.", "Important site for the copper industry (KGHM).", "Rebuilt Castle of the Dukes of Głogów."]
    }
  },
  {
    id: "city-walbrzych-extra",
    type: "city",
    parent: "PL-DS",
    coords: [16.28, 50.77],
    name: { de: "Waldenburg", hu: "Wałbrzych", ro: "Wałbrzych", en: "Wałbrzych" },
    description: {
      de: "Ehemals ein wichtiges Zentrum des Kohlebergbaus, heute eine Stadt im Wandel. In der Nähe befinden sich das Schloss Fürstenstein und das Geheimprojekt Riese.",
      hu: "Egykor a szénbányászat fontos központja, ma átalakulóban lévő város. A közelben található a Książ kastély és a titkos Riese projekt.",
      ro: "Fost un centru important al mineritului de cărbune, acum un oraș în tranziție. Castelul Książ și proiectul secret Riese se află în apropiere.",
      en: "Formerly a major center of coal mining, now a city in transition. Nearby are Książ Castle and the secret Project Riese."
    },
    facts: {
      de: ["Größte Stadt im Waldenburger Bergland.", "Zentrum des ehemaligen niederschlesischen Kohlebeckens.", "Alte Mine - Wissenschafts- und Kunstzentrum."],
      hu: ["A Wałbrzychi-hegység legnagyobb városa.", "Az egykori alsó-sziléziai szénmedence központja.", "Régi Bánya Tudományos és Művészeti Központ."],
      ro: ["Cel mai mare oraș din Munții Wałbrzych.", "Centrul fostului bazin carbonifer din Silezia Inferioară.", "Centrul de Știință și Artă 'Mina Veche'."],
      en: ["Largest city in the Wałbrzych Mountains.", "Center of the former Lower Silesian Coal Basin.", "Old Mine Science and Art Centre."]
    }
  },
  {
    id: "city-swidnica-extra",
    type: "city",
    parent: "PL-DS",
    coords: [16.48, 50.84],
    name: { de: "Schweidnitz", hu: "Świdnica", ro: "Świdnica", en: "Świdnica" },
    description: {
      de: "Eine historische Stadt in Niederschlesien mit einem wunderschönen Marktplatz und einer der beiden Friedenskirchen, die zum UNESCO-Weltkulturerbe gehören.",
      hu: "Történelmi város Alsó-Sziléziában, gyönyörű főtérrel és a két, UNESCO Világörökség részét képező béketemplom egyikével.",
      ro: "Un oraș istoric în Silezia Inferioară, cu o piață centrală frumoasă și una dintre cele două Biserici ale Păcii, situri ale Patrimoniului Mondial UNESCO.",
      en: "A historic city in Lower Silesia with a beautiful market square and one of the two Churches of Peace, a UNESCO World Heritage site."
    },
    facts: {
      de: ["Heimat der Friedenskirche, UNESCO-Weltkulturerbe.", "Gut erhaltener mittelalterlicher Stadtkern.", "Kathedrale St. Stanislaus und St. Wenzel."],
      hu: ["Itt található a Béketemplom, amely az UNESCO Világörökség része.", "Jól megőrzött középkori városközpont.", "Szent Szaniszló és Szent Vencel katedrális."],
      ro: ["Găzduiește Biserica Păcii, un sit al Patrimoniului Mondial UNESCO.", "Centru medieval bine conservat.", "Catedrala Sfinților Stanislau și Venceslau."],
      en: ["Home to the Church of Peace, a UNESCO World Heritage site.", "Well-preserved medieval town center.", "Cathedral of St. Stanislaus and St. Wenceslaus."]
    }
  },
  {
    id: "city-kalisz-extra",
    type: "city",
    parent: "PL-WP",
    coords: [18.09, 51.76],
    name: { de: "Kalisz", hu: "Kalisz", ro: "Kalisz", en: "Kalisz" },
    description: {
      de: "Gilt als eine der ältesten Städte Polens, die schon vom antiken Geographen Ptolemäus als 'Calisia' erwähnt wurde. Ein wichtiges Industrie- und Kulturzentrum.",
      hu: "Lengyelország egyik legrégebbi városának tartják, amelyet már az ókori geográfus, Ptolemaiosz is 'Calisia' néven említett. Fontos ipari és kulturális központ.",
      ro: "Considerat unul dintre cele mai vechi orașe din Polonia, menționat ca 'Calisia' de geograful antic Ptolemeu. Un important centru industrial și cultural.",
      en: "Considered one of the oldest cities in Poland, mentioned as 'Calisia' by the ancient geographer Ptolemy. An important industrial and cultural center."
    },
    facts: {
      de: ["Eine der ältesten Städte Polens.", "Bekannt für seine Klavierfabriken.", "Archäologisches Reservat in Zawodzie."],
      hu: ["Lengyelország egyik legrégebbi városa.", "Zongoragyárairól ismert.", "Régészeti rezervátum Zawodzie-ban."],
      ro: ["Unul dintre cele mai vechi orașe din Polonia.", "Cunoscut pentru fabricile sale de piane.", "Rezervație arheologică în Zawodzie."],
      en: ["One of the oldest cities in Poland.", "Known for its piano factories.", "Archaeological reserve in Zawodzie."]
    }
  },
  {
    id: "city-pila-extra",
    type: "city",
    parent: "PL-WP",
    coords: [16.74, 53.15],
    name: { de: "Schneidemühl", hu: "Piła", ro: "Piła", en: "Piła" },
    description: {
      de: "Eine Stadt in Großpolen, umgeben von Wäldern und Seen. Wichtiger Eisenbahnknotenpunkt und Zentrum der Holzindustrie.",
      hu: "Város Nagy-Lengyelországban, erdőkkel és tavakkal körülvéve. Fontos vasúti csomópont és faipari központ.",
      ro: "Un oraș în Polonia Mare, înconjurat de păduri și lacuri. Un nod feroviar important și un centru al industriei lemnului.",
      en: "A city in Greater Poland, surrounded by forests and lakes. An important railway junction and center of the timber industry."
    },
    facts: {
      de: ["Großer Eisenbahnknotenpunkt.", "Umgeben von der 'Puszcza Notecka' (Netze-Heide).", "Geburtsort von Stanisław Staszic."],
      hu: ["Nagy vasúti csomópont.", "A 'Puszcza Notecka' (Noteć-i erdő) veszi körül.", "Stanisław Staszic szülőhelye."],
      ro: ["Nod feroviar major.", "Înconjurat de 'Puszcza Notecka' (Pădurea Noteć).", "Locul nașterii lui Stanisław Staszic."],
      en: ["Major railway junction.", "Surrounded by 'Puszcza Notecka' (Noteć Forest).", "Birthplace of Stanisław Staszic."]
    }
  },
  {
    id: "city-gniezno-extra",
    type: "city",
    parent: "PL-WP",
    coords: [17.59, 52.53],
    name: { de: "Gnesen", hu: "Gniezno", ro: "Gniezno", en: "Gniezno" },
    description: {
      de: "Die erste historische Hauptstadt Polens und ein wichtiger Ort für die polnische Staatlichkeit und das Christentum. Die Kathedrale von Gniezno ist ein bedeutendes Denkmal.",
      hu: "Lengyelország első történelmi fővárosa, a lengyel államiság és a kereszténység fontos helyszíne. A gnieznói katedrális jelentős műemlék.",
      ro: "Prima capitală istorică a Poloniei și un loc important pentru statalitatea și creștinismul polonez. Catedrala din Gniezno este un monument important.",
      en: "The first historical capital of Poland and a key site for Polish statehood and Christianity. The Gniezno Cathedral is a major monument."
    },
    facts: {
      de: ["Erste Hauptstadt Polens.", "Ort der Krönung der ersten polnischen Könige.", "Die berühmten Gnesener Bronzetüren in der Kathedrale."],
      hu: ["Lengyelország első fővárosa.", "Az első lengyel királyok koronázási helyszíne.", "A híres gnieznói bronzkapu a katedrálisban."],
      ro: ["Prima capitală a Poloniei.", "Locul încoronării primilor regi polonezi.", "Celebrele Uși de bronz de la Gniezno în catedrală."],
      en: ["First capital of Poland.", "Coronation site of the first Polish kings.", "The famous Gniezno Doors in the cathedral."]
    }
  },
  {
    id: "nature-wielkopolski-national-park-extra",
    type: "nature",
    parent: "PL-WP",
    coords: [16.8, 52.26],
    name: { de: "Nationalpark Großpolen", hu: "Wielkopolski Nemzeti Park", ro: "Parcul Național Wielkopolski", en: "Wielkopolski National Park" },
    description: {
      de: "Ein Nationalpark südlich von Posen, der eine postglaziale Landschaft mit Seen, Wäldern und Moränenhügeln schützt.",
      hu: "Nemzeti park Poznańtól délre, amely egy jégkorszak utáni tájat véd tavakkal, erdőkkel és morénadombokkal.",
      ro: "Un parc național la sud de Poznań, care protejează un peisaj post-glaciar cu lacuri, păduri și dealuri morenice.",
      en: "A national park south of Poznań, protecting a post-glacial landscape with lakes, forests, and moraine hills."
    },
    facts: {
      de: ["13 postglaziale Seen.", "Vielfältige Landschaftsformen.", "Beliebtes Naherholungsgebiet für Posen."],
      hu: ["13 jégkorszak utáni tó.", "Változatos tájformák.", "Poznań kedvelt rekreációs területe."],
      ro: ["13 lacuri post-glaciare.", "Forme de relief diverse.", "Zonă populară de recreere pentru Poznań."],
      en: ["13 post-glacial lakes.", "Diverse landforms.", "Popular recreational area for Poznań."]
    }
  },
  {
    id: "city-ostrow-wielkopolski-extra",
    type: "city",
    parent: "PL-WP",
    coords: [17.81, 51.65],
    name: { de: "Ostrów Wielkopolski", hu: "Ostrów Wielkopolski", ro: "Ostrów Wielkopolski", en: "Ostrów Wielkopolski" },
    description: {
      de: "Eine Stadt in Großpolen, bekannt für ihre Rolle in der 'Republik von Ostrów' 1918, einer der ersten polnischen Unabhängigkeitsbestrebungen.",
      hu: "Város Nagy-Lengyelországban, amely az 1918-as 'Ostrówi Köztársaságban' játszott szerepéről ismert, az egyik első lengyel függetlenségi törekvésről.",
      ro: "Un oraș în Polonia Mare, cunoscut pentru rolul său în 'Republica de la Ostrów' din 1918, una dintre primele încercări de independență poloneză.",
      en: "A city in Greater Poland known for its role in the 1918 'Republic of Ostrów', one of the first Polish independence efforts."
    },
    facts: {
      de: ["Zentrum der 'Republik von Ostrów' (1918).", "Wichtiger Eisenbahnknotenpunkt.", "Neo-Renaissance-Rathaus."],
      hu: ["Az 'Ostrówi Köztársaság' központja (1918).", "Fontos vasúti csomópont.", "Neoreneszánsz városháza."],
      ro: ["Centrul 'Republicii de la Ostrów' (1918).", "Nod feroviar important.", "Primărie neorenascentistă."],
      en: ["Center of the 'Republic of Ostrów' (1918).", "Important railway junction.", "Neo-Renaissance town hall."]
    }
  },
  {
    id: "castle-kornik-castle-extra",
    type: "castle",
    parent: "PL-WP",
    coords: [17.09, 52.24],
    name: { de: "Schloss Kórnik", hu: "Kórniki kastély", ro: "Castelul Kórnik", en: "Kórnik Castle" },
    description: {
      de: "Ein neugotisches Schloss, umgeben von einem der reichsten Arboreten Polens. Das Schloss beherbergt ein Museum und eine bedeutende Bibliothek.",
      hu: "Neogótikus kastély, amelyet Lengyelország egyik leggazdagabb arborétuma vesz körül. A kastély múzeumnak és egy jelentős könyvtárnak ad otthont.",
      ro: "Un castel neogotic înconjurat de unul dintre cele mai bogate arboreturi din Polonia. Castelul găzduiește un muzeu și o bibliotecă importantă.",
      en: "A Neo-Gothic castle surrounded by one of Poland's richest arboretums. The castle houses a museum and a significant library."
    },
    facts: {
      de: ["Neugotischer Baustil.", "Umfangreiches Arboretum mit über 3000 Pflanzenarten.", "Legende der 'Weißen Dame'."],
      hu: ["Neogótikus stílus.", "Hatalmas arborétum több mint 3000 növényfajjal.", "A 'Fehér Hölgy' legendája."],
      ro: ["Stil arhitectural neogotic.", "Arboret vast cu peste 3000 de specii de plante.", "Legenda 'Doamnei Albe'."],
      en: ["Neo-Gothic architectural style.", "Extensive arboretum with over 3000 plant species.", "Legend of the 'White Lady'."]
    }
  },
  {
    id: "historical-lednica-extra",
    type: "historical",
    parent: "PL-WP",
    coords: [17.38, 52.52],
    name: { de: "Lednica", hu: "Lednica", ro: "Lednica", en: "Lednica" },
    description: {
      de: "Ein See und eine Insel, die als wahrscheinlicher Ort der Taufe Polens im Jahr 966 gelten. Heute ein Museum und Schauplatz jährlicher großer Jugendtreffen.",
      hu: "Egy tó és sziget, amelyet Lengyelország 966-os megkeresztelkedésének valószínű helyszínének tartanak. Ma múzeum és éves nagy ifjúsági találkozók helyszíne.",
      ro: "Un lac și o insulă considerate a fi locul probabil al botezului Poloniei în 966. Astăzi este un muzeu și locul unor mari întâlniri anuale de tineret.",
      en: "A lake and island considered the likely site of the Baptism of Poland in 966. Now a museum and the site of large annual youth meetings."
    },
    facts: {
      de: ["Wahrscheinlicher Ort der Taufe Polens 966.", "Ruinen einer Pfalz und einer Kapelle auf der Insel.", "Jährliches katholisches Jugendtreffen Lednica 2000."],
      hu: ["Lengyelország 966-os megkeresztelkedésének valószínű helyszíne.", "Palota és kápolna romjai a szigeten.", "Éves katolikus ifjúsági találkozó, a Lednica 2000."],
      ro: ["Locul probabil al botezului Poloniei în 966.", "Ruinele unui palatinat și ale unei capele pe insulă.", "Întâlnirea anuală a tineretului catolic Lednica 2000."],
      en: ["Likely site of the Baptism of Poland in 966.", "Ruins of a palatium and chapel on the island.", "Annual Lednica 2000 Catholic youth meeting."]
    }
  },
  {
    id: "city-tarnow-extra",
    type: "city",
    parent: "PL-MP",
    coords: [20.98, 50.01],
    name: { de: "Tarnów", hu: "Tarnów", ro: "Tarnów", en: "Tarnów" },
    description: {
      de: "Bekannt als die 'Perle der Renaissance' mit einem wunderschön erhaltenen Marktplatz. Die Stadt hatte vor dem Krieg eine große jüdische Bevölkerung.",
      hu: "A 'reneszánsz gyöngyszemeként' ismert, gyönyörűen megőrzött főtérrel. A városnak a háború előtt nagy zsidó lakossága volt.",
      ro: "Cunoscut ca 'Perla Renașterii', cu o piață centrală frumos conservată. Orașul avea o populație evreiască mare înainte de război.",
      en: "Known as the 'Pearl of the Renaissance' with a beautifully preserved market square. The city had a large Jewish population before the war."
    },
    facts: {
      de: ["Renaissance-Rathaus und Bürgerhäuser.", "Bima der alten Synagoge ist erhalten.", "Wärmster Ort in Polen."],
      hu: ["Reneszánsz városháza és polgárházak.", "Megmaradt a régi zsinagóga bimája.", "Lengyelország legmelegebb helye."],
      ro: ["Primărie și case burgheze renascentiste.", "Bimah-ul vechii sinagogi este conservat.", "Cel mai cald loc din Polonia."],
      en: ["Renaissance town hall and tenement houses.", "Bimah of the old synagogue is preserved.", "Warmest place in Poland."]
    }
  },
  {
    id: "city-nowy-sacz-extra",
    type: "city",
    parent: "PL-MP",
    coords: [20.69, 49.62],
    name: { de: "Neu-Sandez", hu: "Nowy Sącz", ro: "Nowy Sącz", en: "Nowy Sącz" },
    description: {
      de: "Eine historische Stadt am Zusammenfluss der Flüsse Dunajec und Kamienica. Sie verfügt über einen großen Marktplatz und die Ruinen einer königlichen Burg.",
      hu: "Történelmi város a Dunajec és a Kamienica folyók összefolyásánál. Nagy főtérrel és egy királyi vár romjaival rendelkezik.",
      ro: "Un oraș istoric la confluența râurilor Dunajec și Kamienica. Are o piață centrală mare și ruinele unui castel regal.",
      en: "A historic town at the confluence of the Dunajec and Kamienica rivers. It has a large market square and the ruins of a royal castle."
    },
    facts: {
      de: ["Gegründet im 13. Jahrhundert.", "Großer Marktplatz (Rynek).", "Galizisches Städtchen (Miasteczko Galicyjskie) Freilichtmuseum."],
      hu: ["A 13. században alapították.", "Nagy főtér (Rynek).", "Galíciai Kisváros (Miasteczko Galicyjskie) skanzen."],
      ro: ["Fondat în secolul al XIII-lea.", "Piață centrală mare (Rynek).", "Muzeu în aer liber 'Orășelul Galițian' (Miasteczko Galicyjskie)."],
      en: ["Founded in the 13th century.", "Large Market Square (Rynek).", "Galician Town (Miasteczko Galicyjskie) open-air museum."]
    }
  },
  {
    id: "nature-ojcow-national-park-extra",
    type: "nature",
    parent: "PL-MP",
    coords: [19.83, 50.21],
    name: { de: "Nationalpark Ojców", hu: "Ojcowi Nemzeti Park", ro: "Parcul Național Ojców", en: "Ojców National Park" },
    description: {
      de: "Der kleinste Nationalpark Polens, berühmt für seine malerische Landschaft mit Kalksteinfelsen, Höhlen und zwei Burgen auf der Adlerhorst-Route.",
      hu: "Lengyelország legkisebb nemzeti parkja, amely festői tájáról ismert, mészkősziklákkal, barlangokkal és a Saskastélyok útvonalán található két várral.",
      ro: "Cel mai mic parc național din Polonia, renumit pentru peisajul său pitoresc cu stânci de calcar, peșteri și două castele pe Traseul Cuiburilor de Vulturi.",
      en: "The smallest national park in Poland, famous for its picturesque landscape of limestone cliffs, caves, and two castles on the Trail of the Eagles' Nests."
    },
    facts: {
      de: ["Kleinster Nationalpark in Polen.", "Über 400 Höhlen, darunter die Łokietek-Höhle.", "Pieskowa Skała Schloss und Ojców Burgruine."],
      hu: ["Lengyelország legkisebb nemzeti parkja.", "Több mint 400 barlang, köztük a Łokietek-barlang.", "Pieskowa Skała kastély és az Ojcowi várrom."],
      ro: ["Cel mai mic parc național din Polonia.", "Peste 400 de peșteri, inclusiv Peștera lui Łokietek.", "Castelul Pieskowa Skała și ruinele Castelului Ojców."],
      en: ["Smallest national park in Poland.", "Over 400 caves, including Łokietek's Cave.", "Pieskowa Skała Castle and Ojców Castle ruins."]
    }
  },
  {
    id: "historical-wooden-churches-southern-lesser-poland-extra",
    type: "historical",
    parent: "PL-MP",
    coords: [20.2, 49.5],
    name: { de: "Holzkirchen im südlichen Kleinpolen", hu: "Dél-kis-lengyelországi fatemplomok", ro: "Bisericile de lemn din sudul Micii Polonii", en: "Wooden Churches of Southern Lesser Poland" },
    description: {
      de: "Eine Gruppe von sechs einzigartigen Holzkirchen, die zum UNESCO-Weltkulturerbe gehören. Sie repräsentieren eine außergewöhnliche Bautradition.",
      hu: "Hat egyedi fatemplom csoportja, amelyek az UNESCO Világörökség részét képezik. Kivételes építészeti hagyományt képviselnek.",
      ro: "Un grup de șase biserici unice din lemn, situri ale Patrimoniului Mondial UNESCO. Ele reprezintă o tradiție excepțională de construcție.",
      en: "A group of six unique wooden churches, a UNESCO World Heritage site. They represent an exceptional building tradition."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe.", "Sechs Kirchen gehören zum Ensemble.", "Beispiele sind Binarowa, Dębno, Lipnica Murowana."],
      hu: ["UNESCO Világörökség része.", "Hat templom tartozik az együtteshez.", "Példák: Binarowa, Dębno, Lipnica Murowana."],
      ro: ["Patrimoniu Mondial UNESCO.", "Șase biserici fac parte din ansamblu.", "Exemplele includ Binarowa, Dębno, Lipnica Murowana."],
      en: ["UNESCO World Heritage site.", "Six churches form the group.", "Examples include Binarowa, Dębno, Lipnica Murowana."]
    }
  },
  {
    id: "kid-landmark-wieliczka-salt-mine-extra",
    type: "kid-landmark",
    parent: "PL-MP",
    coords: [20.05, 49.98],
    name: { de: "Salzbergwerk Wieliczka", hu: "Wieliczkai sóbánya", ro: "Salina Wieliczka", en: "Wieliczka Salt Mine" },
    description: {
      de: "Eine der ältesten Salzminen der Welt und ein UNESCO-Weltkulturerbe. Berühmt für ihre unterirdischen Kapellen, Seen und in Salz gehauenen Skulpturen.",
      hu: "A világ egyik legrégebbi sóbányája, az UNESCO Világörökség része. Híres a föld alatti kápolnáiról, tavairól és a sóból faragott szobrairól.",
      ro: "Una dintre cele mai vechi mine de sare din lume și un sit al Patrimoniului Mondial UNESCO. Faimoasă pentru capelele sale subterane, lacurile și sculpturile sculptate în sare.",
      en: "One of the world's oldest salt mines and a UNESCO World Heritage site. Famous for its underground chapels, lakes, and sculptures carved out of salt."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe seit 1978.", "Über 287 km an Gängen.", "Die Kapelle der Heiligen Kinga ist komplett aus Salz."],
      hu: ["Az UNESCO Világörökség része 1978 óta.", "Több mint 287 km hosszú járat.", "A Szent Kinga-kápolna teljes egészében sóból készült."],
      ro: ["Patrimoniu Mondial UNESCO din 1978.", "Peste 287 km de galerii.", "Capela Sfânta Kinga este în întregime din sare."],
      en: ["UNESCO World Heritage site since 1978.", "Over 287 km of passages.", "The Chapel of St. Kinga is entirely made of salt."]
    }
  },
  {
    id: "kid-landmark-bochnia-salt-mine-extra",
    type: "kid-landmark",
    parent: "PL-MP",
    coords: [20.42, 49.96],
    name: { de: "Salzbergwerk Bochnia", hu: "Bochniai sóbánya", ro: "Salina Bochnia", en: "Bochnia Salt Mine" },
    description: {
      de: "Die älteste Salzmine Polens, die zusammen mit Wieliczka zum UNESCO-Weltkulturerbe gehört. Sie bietet einzigartige Attraktionen wie eine unterirdische Bootsfahrt.",
      hu: "Lengyelország legrégebbi sóbányája, amely Wieliczkával együtt az UNESCO Világörökség része. Egyedülálló látnivalókat kínál, mint például egy földalatti csónakázást.",
      ro: "Cea mai veche mină de sare din Polonia, un sit al Patrimoniului Mondial UNESCO împreună cu Wieliczka. Oferă atracții unice, cum ar fi o plimbare cu barca subterană.",
      en: "The oldest salt mine in Poland, a UNESCO World Heritage site along with Wieliczka. It offers unique attractions like an underground boat ride."
    },
    facts: {
      de: ["Älteste Salzmine in Polen (13. Jh.).", "Unterirdische Bootsfahrt auf einem Soleteich.", "Teil des UNESCO-Weltkulturerbes."],
      hu: ["Lengyelország legrégebbi sóbányája (13. század).", "Földalatti csónakázás egy sós tavon.", "Az UNESCO Világörökség része."],
      ro: ["Cea mai veche mină de sare din Polonia (sec. XIII).", "Plimbare subterană cu barca pe un lac sărat.", "Parte a Patrimoniului Mondial UNESCO."],
      en: ["Oldest salt mine in Poland (13th c.).", "Underground boat trip on a brine lake.", "Part of the UNESCO World Heritage site."]
    }
  },
  {
    id: "agriculture-bieszczady-forested-area-extra",
    type: "agriculture",
    parent: "PL-PK",
    coords: [22.5, 49.3],
    name: { de: "Forstwirtschaft Bieszczady", hu: "Bieszczady erdőgazdálkodás", ro: "Silvicultura Bieszczady", en: "Bieszczady Forestry" },
    description: {
      de: "Die Forstwirtschaft ist ein wichtiger Wirtschaftszweig in der dünn besiedelten Bieszczady-Region. Die Waldeisenbahn von Bieszczady war einst für den Holztransport von entscheidender Bedeutung.",
      hu: "Az erdőgazdálkodás fontos gazdasági ágazat a gyéren lakott Bieszczady régióban. A Bieszczady erdei vasút egykor kulcsfontosságú volt a fa szállításában.",
      ro: "Silvicultura este o industrie importantă în regiunea slab populată Bieszczady. Calea ferată forestieră Bieszczady a fost odată crucială pentru transportul lemnului.",
      en: "Forestry is a major industry in the sparsely populated Bieszczady region. The Bieszczady Forest Railway was once crucial for timber transport."
    },
    facts: {
      de: ["Nachhaltige Forstwirtschaft.", "Buchen- und Tannenwälder.", "Historische Waldeisenbahn, heute Touristenattraktion."],
      hu: ["Fenntartható erdőgazdálkodás.", "Bükk- és jegenyefenyőerdők.", "Történelmi erdei vasút, ma turisztikai látványosság."],
      ro: ["Silvicultură durabilă.", "Păduri de fag și brad.", "Cale ferată forestieră istorică, acum atracție turistică."],
      en: ["Sustainable forestry.", "Beech and fir forests.", "Historic forest railway, now a tourist attraction."]
    }
  },
  {
    id: "agriculture-podlaskie-stork-villages-extra",
    type: "agriculture",
    parent: "PL-PD",
    coords: [22.9, 52.8],
    name: { de: "Storchendörfer in Podlachien", hu: "Podlasiei gólyafalvak", ro: "Satele cu berze din Podlasia", en: "Podlaskie Stork Villages" },
    description: {
      de: "Die Region Podlachien ist berühmt für ihre hohe Weißstorchpopulation. Dörfer wie Pentowo wurden als 'Europäisches Storchendorf' ausgezeichnet.",
      hu: "A Podlasie régió híres a magas fehérgólya-populációjáról. Az olyan falvakat, mint Pentowo, 'Európai Gólyafalu'-ként ismerték el.",
      ro: "Regiunea Podlasia este renumită pentru populația sa mare de berze albe. Sate precum Pentowo au fost desemnate 'Sat European al Berzelor'.",
      en: "The Podlaskie region is famous for its high population of white storks. Villages like Pentowo have been designated a 'European Stork Village'."
    },
    facts: {
      de: ["Höchste Storchendichte in Polen.", "Pentowo ist ein 'Europäisches Storchendorf'.", "Die Störche sind ein Symbol für die ländliche Landschaft."],
      hu: ["A legnagyobb gólyasűrűség Lengyelországban.", "Pentowo egy 'Európai Gólyafalu'.", "A gólyák a vidéki táj szimbólumai."],
      ro: ["Cea mai mare densitate de berze din Polonia.", "Pentowo este un 'Sat European al Berzelor'.", "Berzele sunt un simbol al peisajului rural."],
      en: ["Highest density of storks in Poland.", "Pentowo is a 'European Stork Village'.", "Storks are a symbol of the rural landscape."]
    }
  },
  {
    id: "port-police-chemical-port-extra",
    type: "port",
    parent: "PL-ZP",
    coords: [14.57, 53.55],
    name: { de: "Chemiehafen Police", hu: "Police vegyi kikötő", ro: "Portul chimic Police", en: "Police Chemical Port" },
    description: {
      de: "Ein spezialisierter Seehafen in der Nähe von Stettin, der hauptsächlich die großen Chemiewerke in Police bedient. Wichtiger Umschlagplatz für Phosphat, Ammoniak und Säuren.",
      hu: "Speciális tengeri kikötő Szczecin közelében, amely főként a policei nagy vegyi üzemeket szolgálja ki. Fontos átrakodóhely foszfát, ammónia és savak számára.",
      ro: "Un port maritim specializat lângă Szczecin, care deservește în principal marile uzine chimice din Police. Un punct major de transbordare pentru fosfat, amoniac și acizi.",
      en: "A specialized seaport near Szczecin, mainly serving the large chemical plants in Police. A major transshipment point for phosphate, ammonia, and acids."
    },
    facts: {
      de: ["Verbunden mit den Grupa Azoty Police Chemiewerken.", "Umschlag von Rohstoffen für Düngemittel.", "Einer der größten Häfen an der polnischen Küste nach Tonnage."],
      hu: ["Összeköttetésben áll a Grupa Azoty Police vegyi üzemekkel.", "Műtrágya-alapanyagok átrakodása.", "Tonnázs alapján a lengyel partvidék egyik legnagyobb kikötője."],
      ro: ["Conectat la uzinele chimice Grupa Azoty Police.", "Transbordarea materiilor prime pentru îngrășăminte.", "Unul dintre cele mai mari porturi de pe coasta poloneză după tonaj."],
      en: ["Connected to Grupa Azoty Police chemical plants.", "Transshipment of raw materials for fertilizers.", "One of the largest ports on the Polish coast by tonnage."]
    }
  }
];
