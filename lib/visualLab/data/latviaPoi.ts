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