import { projectCoordsLV } from "../maps/latvia.svg";

export const latviaAllPoi = [
  {
    id: "lv-country",
    type: "country",
    coords: projectCoordsLV(24.1052, 56.9496),
    name: {
      de: "Lettland",
      hu: "Lettország",
      ro: "Letonia",
      en: "Latvia"
    },
    description: {
      de: "Ein baltischer Staat, bekannt für seine weiten Strände, dichten Wälder und die Jugendstilarchitektur in Riga.",
      hu: "Balti állam, amely széles strandjairól, sűrű erdeiről és a rigai szecessziós építészetről ismert.",
      ro: "Un stat baltic, cunoscut pentru plajele sale largi, pădurile dese și arhitectura Art Nouveau din Riga.",
      en: "A Baltic state known for its wide beaches, dense forests, and Art Nouveau architecture in Riga."
    },
    facts: {
      de: ["Hauptstadt: Riga", "Währung: Euro", "Bevölkerung: ~1,9 Millionen"],
      hu: ["Főváros: Riga", "Pénznem: Euró", "Népesség: ~1,9 millió"],
      ro: ["Capitala: Riga", "Moneda: Euro", "Populație: ~1,9 milioane"],
      en: ["Capital: Riga", "Currency: Euro", "Population: ~1.9 million"]
    },
    image: "/images/visualLab/latvia/country.jpg"
  },
  {
    id: "lv-riga",
    type: "city",
    parent: "lv-country",
    coords: projectCoordsLV(24.1052, 56.9496),
    name: {
      de: "Riga",
      hu: "Riga",
      ro: "Riga",
      en: "Riga"
    },
    description: {
      de: "Die Hauptstadt Lettlands, berühmt für ihre UNESCO-geschützte Altstadt und die beeindruckende Jugendstilarchitektur.",
      hu: "Lettország fővárosa, amely az UNESCO által védett óvárosáról és lenyűgöző szecessziós építészetéről híres.",
      ro: "Capitala Letoniei, faimoasă pentru orașul său vechi protejat de UNESCO și arhitectura impresionantă Art Nouveau.",
      en: "The capital of Latvia, famous for its UNESCO-protected old town and impressive Art Nouveau architecture."
    },
    facts: {
      de: ["UNESCO-Weltkulturerbe", "Größte Stadt im Baltikum"],
      hu: ["UNESCO világörökség", "A Baltikum legnagyobb városa"],
      ro: ["Patrimoniul Mondial UNESCO", "Cel mai mare oraș din Țările Baltice"],
      en: ["UNESCO World Heritage site", "Largest city in the Baltics"]
    },
    image: "/images/visualLab/latvia/riga.jpg"
  },
  {
    id: "lv-jurmala",
    type: "city",
    parent: "lv-country",
    coords: projectCoordsLV(23.7704, 56.9680),
    name: {
      de: "Jūrmala",
      hu: "Jūrmala",
      ro: "Jūrmala",
      en: "Jūrmala"
    },
    description: {
      de: "Ein beliebter Badeort an der Ostsee, bekannt für seine weißen Sandstrände und Holzvillen.",
      hu: "Népszerű tengerparti üdülőhely a Balti-tenger partján, amely fehér homokos strandjairól és fa villáiról ismert.",
      ro: "O stațiune balneară populară la Marea Baltică, cunoscută pentru plajele sale cu nisip alb și vilele din lemn.",
      en: "A popular seaside resort on the Baltic Sea, known for its white sand beaches and wooden villas."
    },
    facts: {
      de: ["33 km langer Sandstrand", "Historische Holzarchitektur"],
      hu: ["33 km hosszú homokos strand", "Történelmi faépítészet"],
      ro: ["Plajă de nisip de 33 km", "Arhitectură istorică din lemn"],
      en: ["33 km long sandy beach", "Historic wooden architecture"]
    },
    image: "/images/visualLab/latvia/jurmala.jpg"
  },
  {
    id: "lv-sigulda",
    type: "city",
    parent: "lv-country",
    coords: projectCoordsLV(24.8538, 57.1533),
    name: {
      de: "Sigulda",
      hu: "Sigulda",
      ro: "Sigulda",
      en: "Sigulda"
    },
    description: {
      de: "Oft als die 'Schweiz von Vidzeme' bezeichnet, bekannt für ihre Burgen und die malerische Natur.",
      hu: "Gyakran 'Vidzeme Svájcának' nevezik, kastélyairól és festői természetéről ismert.",
      ro: "Adesea numită 'Elveția din Vidzeme', cunoscută pentru castelele sale și natura pitorească.",
      en: "Often called the 'Switzerland of Vidzeme', known for its castles and picturesque nature."
    },
    facts: {
      de: ["Burg Turaida", "Gauja-Tal"],
      hu: ["Turaida vára", "Gauja-völgy"],
      ro: ["Castelul Turaida", "Valea Gauja"],
      en: ["Turaida Castle", "Gauja Valley"]
    },
    image: "/images/visualLab/latvia/sigulda.jpg"
  },
  {
    id: "lv-cesis",
    type: "city",
    parent: "lv-country",
    coords: projectCoordsLV(25.2746, 57.3119),
    name: {
      de: "Cēsis",
      hu: "Cēsis",
      ro: "Cēsis",
      en: "Cēsis"
    },
    description: {
      de: "Eine der ältesten Städte Lettlands, berühmt für ihre gut erhaltene mittelalterliche Burg.",
      hu: "Lettország egyik legrégebbi városa, amely jól karbantartott középkori váráról híres.",
      ro: "Unul dintre cele mai vechi orașe din Letonia, faimos pentru castelul său medieval bine conservat.",
      en: "One of the oldest towns in Latvia, famous for its well-preserved medieval castle."
    },
    facts: {
      de: ["Mittelalterliche Burg Cēsis", "Historische Altstadt"],
      hu: ["Cēsisi középkori vár", "Történelmi óváros"],
      ro: ["Castelul medieval Cēsis", "Orașul vechi istoric"],
      en: ["Cēsis Medieval Castle", "Historic old town"]
    },
    image: "/images/visualLab/latvia/cesis.jpg"
  },
  {
    id: "lv-liepaja",
    type: "city",
    parent: "lv-country",
    coords: projectCoordsLV(21.0108, 56.5047),
    name: {
      de: "Liepāja",
      hu: "Liepāja",
      ro: "Liepāja",
      en: "Liepāja"
    },
    description: {
      de: "Die drittgrößte Stadt Lettlands, bekannt als die 'Stadt, in der der Wind geboren wird'.",
      hu: "Lettország harmadik legnagyobb városa, amelyet 'a város, ahol a szél születik' néven is ismernek.",
      ro: "Al treilea oraș ca mărime din Letonia, cunoscut ca 'orașul unde se naște vântul'.",
      en: "The third-largest city in Latvia, known as the 'city where the wind is born'."
    },
    facts: {
      de: ["Eisfreier Hafen", "Karosta-Gefängnis"],
      hu: ["Jégmentes kikötő", "Karosta börtön"],
      ro: ["Port fără gheață", "Închisoarea Karosta"],
      en: ["Ice-free port", "Karosta Prison"]
    },
    image: "/images/visualLab/latvia/liepaja.jpg"
  },
  {
    id: "lv-gauja",
    type: "nature",
    parent: "lv-country",
    coords: projectCoordsLV(25.0333, 57.2500),
    name: {
      de: "Gauja-Nationalpark",
      hu: "Gauja Nemzeti Park",
      ro: "Parcul Național Gauja",
      en: "Gauja National Park"
    },
    description: {
      de: "Der größte und älteste Nationalpark in Lettland, bekannt für seine biologische Vielfalt und Sandsteinfelsen.",
      hu: "Lettország legnagyobb és legrégebbi nemzeti parkja, amely biológiai sokféleségéről és homokkő szikláiról ismert.",
      ro: "Cel mai mare și cel mai vechi parc național din Letonia, cunoscut pentru biodiversitatea sa și stâncile de gresie.",
      en: "The largest and oldest national park in Latvia, known for its biological diversity and sandstone outcrops."
    },
    facts: {
      de: ["Gegründet 1973", "Sandsteinfelsen aus dem Devon"],
      hu: ["1973-ban alapították", "Devon kori homokkő sziklák"],
      ro: ["Înființat în 1973", "Stânci de gresie din Devonian"],
      en: ["Established in 1973", "Devonian sandstone cliffs"]
    },
    image: "/images/visualLab/latvia/gauja.jpg"
  },
  {
    id: "lv-rundale",
    type: "nature",
    parent: "lv-country",
    coords: projectCoordsLV(24.0244, 56.4133),
    name: {
      de: "Schloss Rundāle",
      hu: "Rundāle palota",
      ro: "Palatul Rundāle",
      en: "Rundāle Palace"
    },
    description: {
      de: "Eines der bedeutendsten Barock- und Rokokoschlösser in Lettland, entworfen von Rastrelli.",
      hu: "Lettország egyik legjelentősebb barokk és rokokó kastélya, amelyet Rastrelli tervezett.",
      ro: "Unul dintre cele mai importante palate baroce și rococo din Letonia, proiectat de Rastrelli.",
      en: "One of the most significant Baroque and Rococo palaces in Latvia, designed by Rastrelli."
    },
    facts: {
      de: ["Barockarchitektur", "Französischer Garten"],
      hu: ["Barokk építészet", "Francia kert"],
      ro: ["Arhitectură barocă", "Grădină franceză"],
      en: ["Baroque architecture", "French garden"]
    },
    image: "/images/visualLab/latvia/rundale.jpg"
  }
];

export const latviaCities = [
  {
    id: "city-riga",
    type: "city",
    parent: "lv-country",
    coords: projectCoordsLV(24.1052, 56.9496),
    name: {
      de: "Riga",
      hu: "Riga",
      ro: "Riga",
      en: "Riga"
    },
    description: {
      de: "Die Hauptstadt Lettlands mit UNESCO-geschützter Altstadt und berühmter Jugendstilarchitektur.",
      hu: "Lettország fővárosa, UNESCO-védett óvárossal és híres jugendstil építészettel.",
      ro: "Capitala Letoniei, cu un centru vechi protejat de UNESCO și arhitectură Art Nouveau celebră.",
      en: "The capital of Latvia, with a UNESCO-listed old town and famous Art Nouveau architecture."
    },
    facts: {
      de: ["Hauptstadt Lettlands", "UNESCO-geschützte Altstadt"],
      hu: ["Lettország fővárosa", "UNESCO-védett óváros"],
      ro: ["Capitala Letoniei", "Centrul vechi este UNESCO"],
      en: ["Capital of Latvia", "UNESCO-listed old town"]
    },
    image: "/geo-images/latvia/city-riga.webp"
  },
  {
    id: "city-jurmala",
    type: "city",
    parent: "lv-country",
    coords: projectCoordsLV(23.7708, 56.9678),
    name: {
      de: "Jūrmala",
      hu: "Jūrmala",
      ro: "Jūrmala",
      en: "Jūrmala"
    },
    description: {
      de: "Ein beliebter Badeort an der Küste neben Riga mit langen Sandstränden und Holzvillen.",
      hu: "Népszerű tengerparti üdülőhely Riga mellett, hosszú homokos strandokkal és fa villákkal.",
      ro: "O stațiune de litoral populară lângă Riga, cu plaje lungi de nisip și vile din lemn.",
      en: "A popular seaside resort next to Riga, known for long sandy beaches and wooden villas."
    },
    facts: {
      de: ["Badeort an der Ostsee", "Bekannt für Holzvillen"],
      hu: ["Balti-tengeri üdülőhely", "Fa villáiról ismert"],
      ro: ["Stațiune la Marea Baltică", "Cunoscută pentru vilele din lemn"],
      en: ["Baltic Sea resort", "Known for wooden villas"]
    },
    image: "/geo-images/latvia/city-jurmala.webp"
  },
  {
    id: "city-liepaja",
    type: "city",
    parent: "lv-country",
    coords: projectCoordsLV(21.0107, 56.5047),
    name: {
      de: "Liepāja",
      hu: "Liepāja",
      ro: "Liepāja",
      en: "Liepāja"
    },
    description: {
      de: "Die Windstadt an der Ostsee mit starkem Hafencharakter und maritimer Atmosphäre.",
      hu: "A szélváros a Balti-tenger partján, erős kikötői karakterrel és tengeri hangulattal.",
      ro: "Orașul vântului de pe coasta Mării Baltice, cu un caracter portuar puternic și atmosferă marină.",
      en: "The wind city on the Baltic coast, with a strong harbor character and maritime atmosphere."
    },
    facts: {
      de: ["Ostseeküste", "Historischer Hafen"],
      hu: ["Balti-tengeri part", "Történelmi kikötő"],
      ro: ["Coasta Mării Baltice", "Port istoric"],
      en: ["Baltic coast", "Historic harbor"]
    },
    image: "/geo-images/latvia/city-liepaja.webp"
  },
  {
    id: "city-daugavpils",
    type: "city",
    parent: "lv-country",
    coords: projectCoordsLV(26.5333, 55.8750),
    name: {
      de: "Daugavpils",
      hu: "Daugavpils",
      ro: "Daugavpils",
      en: "Daugavpils"
    },
    description: {
      de: "Eine wichtige Stadt in Ostlettland mit starker russischsprachiger Prägung und reicher Festungsgeschichte.",
      hu: "Kelet-Lettország fontos városa erős orosz nyelvi jelenléttel és gazdag erődítménytörténettel.",
      ro: "Un oraș important din estul Letoniei, cu o puternică influență rusofonă și o istorie bogată a cetății.",
      en: "An important city in eastern Latvia with a strong Russian-speaking presence and rich fortress history."
    },
    facts: {
      de: ["Wichtige Stadt in Ostlettland", "Daugavpils-Festung"],
      hu: ["Kelet-Lettország fontos központja", "Daugavpils erőd"],
      ro: ["Oraș important din estul Letoniei", "Cetatea Daugavpils"],
      en: ["Major city in eastern Latvia", "Daugavpils Fortress"]
    },
    image: "/geo-images/latvia/city-daugavpils.webp"
  }
];

export const latviaCulture = [
  {
    id: "cult-riga-oldtown",
    type: "landmark",
    parent: "lv-country",
    coords: projectCoordsLV(24.1055, 56.9495),
    name: {
      de: "Altstadt Riga",
      hu: "Riga óváros",
      ro: "Centrul vechi Riga",
      en: "Riga Old Town"
    },
    description: {
      de: "UNESCO-Altstadt mit hanseatischem Erbe und dichter Jugendstilkulisse.",
      hu: "UNESCO-óváros hanza örökséggel és sűrű jugendstil környezettel.",
      ro: "Centrul vechi UNESCO cu moștenire hanseatică și un puternic decor Art Nouveau.",
      en: "A UNESCO old town with Hanseatic heritage and dense Art Nouveau surroundings."
    },
    facts: {
      de: ["UNESCO-Welterbe", "Hanseatische Altstadt"],
      hu: ["UNESCO világörökség", "Hanza-kori óváros"],
      ro: ["Patrimoniu UNESCO", "Oraș vechi hanseatic"],
      en: ["UNESCO World Heritage", "Hanseatic old town"]
    },
    image: "/geo-images/latvia/cult-riga-oldtown.webp"
  },
  {
    id: "cult-rundale",
    type: "landmark",
    parent: "lv-country",
    coords: projectCoordsLV(24.0242, 56.4144),
    name: {
      de: "Schloss Rundāle",
      hu: "Rundāle-palota",
      ro: "Palatul Rundāle",
      en: "Rundāle Palace"
    },
    description: {
      de: "Ein barockes Residenzschloss aus dem 18. Jahrhundert, entworfen von Rastrelli.",
      hu: "18. századi barokk rezidenciapalota, Rastrelli tervei alapján.",
      ro: "Un palat rezidențial baroc din secolul al XVIII-lea, proiectat de Rastrelli.",
      en: "An 18th-century Baroque residence palace designed by Rastrelli."
    },
    facts: {
      de: ["Barockpalast", "Entworfen von Rastrelli"],
      hu: ["Barokk palota", "Rastrelli tervezte"],
      ro: ["Palat baroc", "Proiectat de Rastrelli"],
      en: ["Baroque palace", "Designed by Rastrelli"]
    },
    image: "/geo-images/latvia/cult-rundale.webp"
  },
  {
    id: "cult-turaida",
    type: "landmark",
    parent: "lv-country",
    coords: projectCoordsLV(24.8611, 57.1833),
    name: {
      de: "Burg Turaida",
      hu: "Turaida-kastély",
      ro: "Castelul Turaida",
      en: "Turaida Castle"
    },
    description: {
      de: "Eine mittelalterliche rote Backsteinburg im Gauja-Tal mit starkem historischen Charakter.",
      hu: "Középkori vörös-téglás vár a Gauja-völgyben, erős történelmi hangulattal.",
      ro: "Un castel medieval din cărămidă roșie în valea Gauja, cu un puternic caracter istoric.",
      en: "A medieval red-brick castle in the Gauja Valley with a strong historical character."
    },
    facts: {
      de: ["Mittelalterliche Burg", "Im Gauja-Tal"],
      hu: ["Középkori vár", "A Gauja-völgyben"],
      ro: ["Castel medieval", "În valea Gauja"],
      en: ["Medieval castle", "In the Gauja Valley"]
    },
    image: "/geo-images/latvia/cult-turaida.webp"
  },
  {
    id: "cult-cesis",
    type: "landmark",
    parent: "lv-country",
    coords: projectCoordsLV(25.2722, 57.3125),
    name: {
      de: "Burg Cēsis",
      hu: "Cēsis-vár",
      ro: "Castelul Cēsis",
      en: "Cēsis Castle"
    },
    description: {
      de: "Eine livländische Ordensburg mit gut erhaltener mittelalterlicher Atmosphäre.",
      hu: "Livónia-rendi vár jól megőrzött középkori hangulattal.",
      ro: "Un castel al Ordinului Livonian cu o atmosferă medievală bine păstrată.",
      en: "A Livonian Order castle with a well-preserved medieval atmosphere."
    },
    facts: {
      de: ["Livländische Ordensburg", "Mittelalterliche Ruine"],
      hu: ["Livónia-rendi vár", "Középkori romok"],
      ro: ["Castel al Ordinului Livonian", "Ruine medievale"],
      en: ["Livonian Order castle", "Medieval ruins"]
    },
    image: "/geo-images/latvia/cult-cesis.webp"
  }
];

export const latviaNature = [
  {
    id: "nat-gauja",
    type: "nature",
    parent: "lv-country",
    coords: projectCoordsLV(24.9, 57.3),
    name: {
      de: "Gauja-Nationalpark",
      hu: "Gauja Nemzeti Park",
      ro: "Parcul Național Gauja",
      en: "Gauja National Park"
    },
    description: {
      de: "Lettlands größter Nationalpark, oft als Livländische Schweiz bezeichnet.",
      hu: "Lettország legnagyobb nemzeti parkja, gyakran Livóniai-Svájcként emlegetik.",
      ro: "Cel mai mare parc național al Letoniei, adesea numit Elveția Livoniană.",
      en: "Latvia's largest national park, often called the Livonian Switzerland."
    },
    facts: {
      de: ["Größter Nationalpark Lettlands", "Gauja-Tal"],
      hu: ["Lettország legnagyobb NP-je", "Gauja-völgy"],
      ro: ["Cel mai mare parc național", "Valea Gauja"],
      en: ["Largest national park in Latvia", "Gauja Valley"]
    },
    image: "/geo-images/latvia/nat-gauja.webp"
  },
  {
    id: "nat-kemeri",
    type: "nature",
    parent: "lv-country",
    coords: projectCoordsLV(23.5, 56.95),
    name: {
      de: "Ķemeri-Nationalpark",
      hu: "Ķemeri Nemzeti Park",
      ro: "Parcul Național Ķemeri",
      en: "Ķemeri National Park"
    },
    description: {
      de: "Ein Moor- und Feuchtgebiet mit einzigartigen Ökosystemen und heilenden Quellen.",
      hu: "Mocsaras és vizes élőhely, egyedi ökoszisztémákkal és gyógyforrásokkal.",
      ro: "O zonă de mlaștini și ape umede cu ecosisteme unice și izvoare tămăduitoare.",
      en: "A marshland and wetland area with unique ecosystems and healing springs."
    },
    facts: {
      de: ["Moorlandschaft", "Heilquellen"],
      hu: ["Mocsárvilág", "Gyógyforrások"],
      ro: ["Peisaj de mlaștină", "Izvoare terapeutice"],
      en: ["Marsh ecosystem", "Healing springs"]
    },
    image: "/geo-images/latvia/nat-kemeri.webp"
  },
  {
    id: "nat-sigulda",
    type: "nature",
    parent: "lv-country",
    coords: projectCoordsLV(24.8597, 57.1533),
    name: {
      de: "Sigulda und Turaida-Tal",
      hu: "Sigulda + Turaida völgy",
      ro: "Sigulda și valea Turaida",
      en: "Sigulda and Turaida Valley"
    },
    description: {
      de: "Ein Tal mit Burgen, steilen Hängen und populären Freizeitmöglichkeiten wie der Bobbahn.",
      hu: "Völgy kastélyokkal, meredek lejtőkkel és népszerű szabadidős lehetőségekkel, például bobpályával.",
      ro: "O vale cu castele, pante abrupte și activități de agrement populare, precum pârtia de bob.",
      en: "A valley with castles, steep slopes, and popular leisure activities such as the bobsled track."
    },
    facts: {
      de: ["Burgen im Gauja-Tal", "Bobbahn in Sigulda"],
      hu: ["Kastélyok a völgyben", "Sigulda bobpályája"],
      ro: ["Castele în vale", "Pârtie de bob la Sigulda"],
      en: ["Castles in the valley", "Sigulda bobsled track"]
    },
    image: "/geo-images/latvia/nat-sigulda.webp"
  },
  {
    id: "nat-cape-kolka",
    type: "nature",
    parent: "lv-country",
    coords: projectCoordsLV(22.5933, 57.7525),
    name: {
      de: "Kap Kolka",
      hu: "Kolka-fok",
      ro: "Capul Kolka",
      en: "Cape Kolka"
    },
    description: {
      de: "Die Spitze der Halbinsel zwischen Rigaer Bucht und Ostsee, wo sich zwei Meere treffen.",
      hu: "A félsziget csúcsa a Rigai-öböl és a Balti-tenger között, ahol két tenger találkozik.",
      ro: "Vârful peninsulei dintre Golful Riga și Marea Baltică, unde se întâlnesc două mări.",
      en: "The tip of the peninsula between the Gulf of Riga and the Baltic Sea, where two seas meet."
    },
    facts: {
      de: ["Treffpunkt zweier Meere", "Spitze der Kurland-Halbinsel"],
      hu: ["Két tenger találkozása", "A Kurzföld-félsziget csúcsa"],
      ro: ["Întâlnirea a două mări", "Vârful peninsulei Curlandei"],
      en: ["Meeting point of two seas", "Tip of the Courland Peninsula"]
    },
    image: "/geo-images/latvia/nat-cape-kolka.webp"
  }
];

latviaAllPoi.push(...latviaCities, ...latviaCulture, ...latviaNature);
