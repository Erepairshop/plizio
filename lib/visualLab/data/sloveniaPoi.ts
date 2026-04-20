import type { POI } from "./poi";

export const sloveniaCountry: POI = {
  id: "country-slovenia",
  type: "country",
  parent: "europe",
  coords: [14.9955, 46.1512],
  name: {
    de: "Slowenien",
    hu: "Szlovénia",
    ro: "Slovenia",
    en: "Slovenia"
  },
  description: {
    de: "Slowenien ist ein Land in Mitteleuropa, das für seine Berge, Skigebiete und Seen bekannt ist. Es ist eines der grünsten Länder der Welt und bietet eine unglaubliche Vielfalt auf kleinem Raum – von den Alpen bis zur Adria.",
    hu: "Szlovénia egy közép-európai ország, amely hegyeiről, síközpontjairól és tavairól ismert. A világ egyik legzöldebb országa, amely kis területen hihetetlen változatosságot kínál – az Alpoktól az Adriai-tengerig.",
    ro: "Slovenia este o țară din Europa Centrală, cunoscută pentru munții, stațiunile de schi și lacurile sale. Este una dintre cele mai verzi țări din lume și oferă o diversitate incredibilă pe un spațiu restrâns – de la Alpi până la Marea Adriatică.",
    en: "Slovenia is a country in Central Europe, known for its mountains, ski resorts, and lakes. It is one of the greenest countries in the world and offers incredible diversity in a small space – from the Alps to the Adriatic Sea."
  },
  facts: {
    de: [
      "Mehr als die Hälfte der Landesfläche ist mit Wald bedeckt.",
      "Slowenien hat eine der größten Braunbärenpopulationen in Europa.",
      "Das Land hat nur eine einzige Insel – im Bleder See.",
      "Slowenien ist das einzige Land, das das Wort 'LOVE' in seinem Namen trägt."
    ],
    hu: [
      "Az ország területének több mint felét erdő borítja.",
      "Szlovéniában található Európa egyik legnagyobb barna medve populációja.",
      "Az országnak csak egyetlen szigete van – a Bledi-tavon.",
      "Szlovénia az egyetlen ország, amelynek nevében szerepel a 'LOVE' (szeretet) szó."
    ],
    ro: [
      "Mai mult de jumătate din suprafața țării este acoperită de păduri.",
      "Slovenia are una dintre cele mai mari populații de urși bruni din Europa.",
      "Țara are o singură insulă – pe lacul Bled.",
      "Slovenia este singura țară care are cuvântul 'LOVE' în numele său."
    ],
    en: [
      "More than half of the country's area is covered by forest.",
      "Slovenia has one of the largest brown bear populations in Europe.",
      "The country has only one island – in Lake Bled.",
      "Slovenia is the only country with the word 'LOVE' in its name."
    ]
  },
  image: "/geo-images/slovenia/country-slovenia.webp"
};

export const sloveniaRegions: POI[] = [
  {
    id: "city-ljubljana",
    type: "city",
    parent: "country-slovenia",
    coords: [14.5058, 46.0569],
    name: {
      de: "Laibach",
      hu: "Ljubljana",
      ro: "Ljubljana",
      en: "Ljubljana"
    },
    description: {
      de: "Ljubljana, die Hauptstadt Sloweniens, ist eine grüne Stadt mit einer entspannten Atmosphäre. Sie ist bekannt für ihre malerische Altstadt, die Drachenbrücke und die Burg, die über der Stadt thront.",
      hu: "Ljubljana, Szlovénia fővárosa egy zöld város, nyugodt légkörrel. Híres festői óvárosáról, a Sárkány-hídról és a város fölé magasodó várról.",
      ro: "Ljubljana, capitala Sloveniei, este un oraș verde cu o atmosferă relaxată. Este cunoscut pentru orașul său vechi pitoresc, Podul Dragonului și castelul care domină orașul.",
      en: "Ljubljana, the capital of Slovenia, is a green city with a relaxed atmosphere. It is known for its picturesque old town, the Dragon Bridge, and the castle that towers over the city."
    },
    facts: {
      de: [
        "Ljubljana wurde 2016 zur Grünen Hauptstadt Europas ernannt.",
        "Das Wahrzeichen der Stadt ist der Drache.",
        "Die Drei Brücken (Tromostovje) sind ein berühmtes Werk des Architekten Jože Plečnik.",
        "Das Stadtzentrum ist fast vollständig autofrei."
      ],
      hu: [
        "Ljubljana 2016-ban elnyerte Európa Zöld Fővárosa címet.",
        "A város jelképe a sárkány.",
        "A Hármas híd (Tromostovje) Jože Plečnik építész híres alkotása.",
        "A városközpont szinte teljesen autómentes."
      ],
      ro: [
        "Ljubljana a fost numită Capitala Verde a Europei în 2016.",
        "Simbolul orașului este dragonul.",
        "Cele Trei Poduri (Tromostovje) sunt o operă celebră a arhitectului Jože Plečnik.",
        "Centrul orașului este aproape în întregime pietonal."
      ],
      en: [
        "Ljubljana was named the European Green Capital in 2016.",
        "The symbol of the city is the dragon.",
        "The Triple Bridge (Tromostovje) is a famous work by architect Jože Plečnik.",
        "The city center is almost entirely car-free."
      ]
    },
    image: "/geo-images/slovenia/city-ljubljana.webp"
  },
  {
    id: "nature-lake-bled",
    type: "nature",
    parent: "country-slovenia",
    coords: [14.0938, 46.3639],
    name: {
      de: "Bleder See",
      hu: "Bledi-tó",
      ro: "Lacul Bled",
      en: "Lake Bled"
    },
    description: {
      de: "Der Bleder See ist einer der malerischsten Orte Sloweniens. In der Mitte des Sees liegt eine kleine Insel mit einer Kirche, und auf einem Felsen über dem See steht die Burg von Bled.",
      hu: "A Bledi-tó Szlovénia egyik legfestőibb helye. A tó közepén egy kis sziget található egy templommal, a tó feletti sziklán pedig a bledi vár áll.",
      ro: "Lacul Bled este unul dintre cele mai pitorești locuri din Slovenia. În mijlocul lacului se află o mică insulă cu o biserică, iar pe o stâncă deasupra lacului se află castelul Bled.",
      en: "Lake Bled is one of the most picturesque places in Slovenia. In the middle of the lake lies a small island with a church, and on a rock above the lake stands Bled Castle."
    },
    facts: {
      de: [
        "Man kann die Insel mit traditionellen Holzbooten namens 'Pletna' erreichen.",
        "Es gibt eine Legende, dass das Läuten der Kirchenglocke Wünsche erfüllt.",
        "Die Bleder Cremeschnitte (Kremna rezina) ist eine lokale Spezialität.",
        "Die Burg von Bled ist die älteste Burg Sloweniens."
      ],
      hu: [
        "A szigetet hagyományos 'Pletna' nevű facsónakokkal lehet megközelíteni.",
        "A legenda szerint a templom harangjának megkongatása teljesíti a kívánságokat.",
        "A bledi krémes (Kremna rezina) helyi különlegesség.",
        "A bledi vár Szlovénia legrégebbi vára."
      ],
      ro: [
        "Se poate ajunge pe insulă cu bărci tradiționale din lemn numite 'Pletna'.",
        "Există o legendă conform căreia tragerea clopotului bisericii îndeplinește dorințe.",
        "Prăjitura cu cremă de Bled (Kremna rezina) este o specialitate locală.",
        "Castelul Bled este cel mai vechi castel din Slovenia."
      ],
      en: [
        "You can reach the island with traditional wooden boats called 'Pletna'.",
        "There is a legend that ringing the church bell fulfills wishes.",
        "The Bled cream cake (Kremna rezina) is a local specialty.",
        "Bled Castle is the oldest castle in Slovenia."
      ]
    },
    image: "/geo-images/slovenia/nature-lake-bled.webp"
  },
  {
    id: "city-maribor",
    type: "city",
    parent: "country-slovenia",
    coords: [15.6459, 46.5547],
    name: {
      de: "Marburg an der Drau",
      hu: "Maribor",
      ro: "Maribor",
      en: "Maribor"
    },
    description: {
      de: "Maribor ist die zweitgrößte Stadt Sloweniens und liegt an der Drau. Sie ist das Zentrum der slowakischen Steiermark und bekannt für ihre Weinbautradition.",
      hu: "Maribor Szlovénia második legnagyobb városa, a Dráva partján fekszik. A szlovén Stájerország központja, és híres bortermelő hagyományairól.",
      ro: "Maribor este al doilea oraș ca mărime din Slovenia și este situat pe râul Drava. Este centrul Stiriei slovene și este cunoscut pentru tradiția sa viticolă.",
      en: "Maribor is the second-largest city in Slovenia and is situated on the Drava River. It is the center of Slovenian Styria and known for its winemaking tradition."
    },
    facts: {
      de: [
        "In Maribor wächst die älteste Weinrebe der Welt (über 400 Jahre alt).",
        "Die Stadt war 2012 Kulturhauptstadt Europas.",
        "Das nahegelegene Pohorje-Gebirge ist ein beliebtes Skigebiet.",
        "Maribor hat eine wunderschöne Altstadt am Flussufer (Lent)."
      ],
      hu: [
        "Mariborban nő a világ legöregebb szőlőtőkéje (több mint 400 éves).",
        "A város 2012-ben Európa Kulturális Fővárosa volt.",
        "A közeli Pohorje-hegység népszerű síközpont.",
        "Maribornak gyönyörű folyóparti óvárosa van (Lent)."
      ],
      ro: [
        "În Maribor crește cea mai veche viță de vie din lume (peste 400 de ani).",
        "Orașul a fost Capitală Europeană a Culturii în 2012.",
        "Munții Pohorje din apropiere sunt o stațiune de schi populară.",
        "Maribor are un oraș vechi frumos pe malul râului (Lent)."
      ],
      en: [
        "The oldest vine in the world (over 400 years old) grows in Maribor.",
        "The city was the European Capital of Culture in 2012.",
        "The nearby Pohorje Mountains are a popular ski resort.",
        "Maribor has a beautiful riverside old town (Lent)."
      ]
    },
    image: "/geo-images/slovenia/city-maribor.webp"
  },
  {
    id: "city-piran",
    type: "city",
    parent: "country-slovenia",
    coords: [13.5683, 45.5283],
    name: {
      de: "Pirano",
      hu: "Piran",
      ro: "Piran",
      en: "Piran"
    },
    description: {
      de: "Piran ist eine malerische Stadt an der Adriaküste Sloweniens. Sie ist bekannt für ihre venezianische Architektur, enge Gassen und den Tartini-Platz.",
      hu: "Piran egy festői város Szlovénia adriai partvidékén. Velencei építészetéről, szűk utcáiról és a Tartini térről ismert.",
      ro: "Piran este un oraș pitoresc de pe coasta adriatică a Sloveniei. Este cunoscut pentru arhitectura sa venețiană, străzile înguste și Piața Tartini.",
      en: "Piran is a picturesque town on Slovenia's Adriatic coast. It is known for its Venetian architecture, narrow streets, and Tartini Square."
    },
    facts: {
      de: [
        "Piran war über 500 Jahre lang Teil der Republik Venedig.",
        "Die Stadt ist der Geburtsort des Komponisten Giuseppe Tartini.",
        "Die Stadtmauern bieten einen Panoramablick über die Adria.",
        "Die Salzpfannen von Sečovlje in der Nähe produzieren hochwertiges Salz."
      ],
      hu: [
        "Piran több mint 500 évig a Velencei Köztársaság része volt.",
        "A város Giuseppe Tartini zeneszerző szülőhelye.",
        "A városfalakról panorámás kilátás nyílik az Adriai-tengerre.",
        "A közeli Sečovlje sólepárlók kiváló minőségű sót termelnek."
      ],
      ro: [
        "Piran a făcut parte din Republica Veneția timp de peste 500 de ani.",
        "Orașul este locul de naștere al compozitorului Giuseppe Tartini.",
        "Zidurile orașului oferă o vedere panoramică asupra Mării Adriatice.",
        "Salinele Sečovlje din apropiere produc sare de înaltă calitate."
      ],
      en: [
        "Piran was part of the Republic of Venice for over 500 years.",
        "The town is the birthplace of the composer Giuseppe Tartini.",
        "The city walls offer a panoramic view over the Adriatic Sea.",
        "The nearby Sečovlje salt pans produce high-quality salt."
      ]
    },
    image: "/geo-images/slovenia/city-piran.webp"
  },
  {
    id: "nature-postojna-cave",
    type: "nature",
    parent: "country-slovenia",
    coords: [14.2039, 45.7831],
    name: {
      de: "Adelsberger Grotte",
      hu: "Postojnai-barlang",
      ro: "Peștera Postojna",
      en: "Postojna Cave"
    },
    description: {
      de: "Die Höhle von Postojna ist eines der größten und meistbesuchten Karsthöhlensysteme der Welt. Sie ist bekannt für ihre beeindruckenden Stalaktiten und Stalagmiten.",
      hu: "A Postojnai-barlang a világ egyik legnagyobb és leglátogatottabb karsztbarlang-rendszere. Lenyűgöző sztalaktitjairól és sztalagmitjairól ismert.",
      ro: "Peștera Postojna este unul dintre cele mai mari și mai vizitate sisteme de peșteri carstice din lume. Este cunoscută pentru stalactitele și stalagmitele sale impresionante.",
      en: "Postojna Cave is one of the largest and most visited karst cave systems in the world. It is known for its impressive stalactites and stalagmites."
    },
    facts: {
      de: [
        "Eine elektrische Höhlenbahn führt die Besucher tief in das Innere.",
        "Die Höhle ist die Heimat des Grottenolms (Proteus anguinus).",
        "Das Höhlensystem ist über 24 km lang.",
        "Die Höhle hat eine konstante Temperatur von etwa 10 °C."
      ],
      hu: [
        "Elektromos barlangi vasút viszi a látogatókat mélyen a barlang belsejébe.",
        "A barlang a barlangi vakgőte (Proteus anguinus) otthona.",
        "A barlangrendszer több mint 24 km hosszú.",
        "A barlang állandó hőmérséklete körülbelül 10 °C."
      ],
      ro: [
        "Un tren electric de peșteră duce vizitatorii adânc în interior.",
        "Peștera este casa olmului (Proteus anguinus).",
        "Sistemul de peșteri are o lungime de peste 24 km.",
        "Peștera are o temperatură constantă de aproximativ 10 °C."
      ],
      en: [
        "An electric cave train takes visitors deep into the interior.",
        "The cave is home to the olm (Proteus anguinus), a unique aquatic salamander.",
        "The cave system is over 24 km long.",
        "The cave has a constant temperature of about 10 °C."
      ]
    },
    image: "/geo-images/slovenia/nature-postojna-cave.webp"
  },
  {
    id: "castle-predjama",
    type: "castle",
    parent: "country-slovenia",
    coords: [14.1269, 45.8158],
    name: {
      de: "Höhlenburg Lueg",
      hu: "Predjamai vár",
      ro: "Castelul Predjama",
      en: "Predjama Castle"
    },
    description: {
      de: "Die Burg Predjama ist eine einzigartige Renaissance-Burg, die in eine 123 Meter hohe Felswand gebaut wurde. Sie ist die größte Höhlenburg der Welt.",
      hu: "A Predjamai vár egy egyedülálló reneszánsz vár, amelyet egy 123 méter magas sziklafalba építettek. Ez a világ legnagyobb barlangvára.",
      ro: "Castelul Predjama este un castel renascentist unic, construit într-o stâncă înaltă de 123 de metri. Este cel mai mare castel de peșteră din lume.",
      en: "Predjama Castle is a unique Renaissance castle built into a 123-meter-high cliff face. It is the largest cave castle in the world."
    },
    facts: {
      de: [
        "Hinter der Burg befindet sich ein geheimes Höhlensystem.",
        "Die Burg ist berühmt für die Legende des Raubritters Erasmus von Eggenberg.",
        "Sie steht im Guinness-Buch der Rekorde als größte Höhlenburg.",
        "Die Burg wurde im 12. Jahrhundert zum ersten Mal erwähnt."
      ],
      hu: [
        "A vár mögött egy titkos barlangrendszer található.",
        "A vár híres rablólovagjáról, Erasmus von Eggenbergről szóló legendáról.",
        "A Guinness Rekordok Könyvében a legnagyobb barlangvárként szerepel.",
        "A várat először a 12. században említik."
      ],
      ro: [
        "În spatele castelului se află un sistem de peșteri secrete.",
        "Castelul este faimos pentru legenda cavalerului Erasmus von Eggenberg.",
        "Este înscris în Guinness World Records ca fiind cel mai mare castel de peșteră.",
        "Castelul a fost menționat pentru prima dată în secolul al XII-lea."
      ],
      en: [
        "A secret cave system lies behind the castle.",
        "The castle is famous for the legend of the robber knight Erasmus of Lueg.",
        "It is listed in the Guinness World Records as the largest cave castle.",
        "The castle was first mentioned in the 12th century."
      ]
    },
    image: "/geo-images/slovenia/castle-predjama.webp"
  },
  {
    id: "nature-triglav",
    type: "nature",
    parent: "country-slovenia",
    coords: [13.8367, 46.3783],
    name: {
      de: "Triglav Nationalpark",
      hu: "Triglav Nemzeti Park",
      ro: "Parcul Național Triglav",
      en: "Triglav National Park"
    },
    description: {
      de: "Der Triglav Nationalpark ist der einzige Nationalpark Sloweniens und umfasst den größten Teil der Julischen Alpen. Er ist nach dem Berg Triglav benannt, dem höchsten Gipfel des Landes.",
      hu: "A Triglav Nemzeti Park Szlovénia egyetlen nemzeti parkja, amely a Júliai-Alpok nagy részét magában foglalja. Az ország legmagasabb csúcsáról, a Triglav-hegyről kapta a nevét.",
      ro: "Parcul Național Triglav este singurul parc național din Slovenia și cuprinde cea mai mare parte a Alpilor Iulieni. Este numit după muntele Triglav, cel mai înalt vârf din țară.",
      en: "Triglav National Park is the only national park in Slovenia and covers most of the Julian Alps. It is named after Mount Triglav, the highest peak in the country."
    },
    facts: {
      de: [
        "Der Triglav ist 2.864 Meter hoch und ein nationales Symbol.",
        "Der Park beherbergt den Bohinj-See, den größten natürlichen See Sloweniens.",
        "Die Vintgar-Klamm ist eine der spektakulärsten Schluchten im Park.",
        "Der Park ist ein Paradies für Bergsteiger und Naturliebhaber."
      ],
      hu: [
        "A Triglav 2864 méter magas és nemzeti jelkép.",
        "A parkban található a Bohinji-tó, Szlovénia legnagyobb természetes tava.",
        "A Vintgar-szurdok a park egyik leglátványosabb szurdoka.",
        "A park a hegymászók és a természetkedvelők paradicsoma."
      ],
      ro: [
        "Triglav are 2.864 de metri înălțime și este un simbol național.",
        "Parcul găzduiește lacul Bohinj, cel mai mare lac natural din Slovenia.",
        "Cheile Vintgar sunt unele dintre cele mai spectaculoase chei din parc.",
        "Parcul este un paradis pentru alpiniști și iubitorii de natură."
      ],
      en: [
        "Mount Triglav is 2,864 meters high and is a national symbol.",
        "The park is home to Lake Bohinj, the largest natural lake in Slovenia.",
        "The Vintgar Gorge is one of the most spectacular gorges in the park.",
        "The park is a paradise for mountaineers and nature lovers."
      ]
    },
    image: "/geo-images/slovenia/nature-triglav.webp"
  },
  {
    id: "nature-soca-valley",
    type: "nature",
    parent: "country-slovenia",
    coords: [13.5833, 46.3333],
    name: {
      de: "Soča-Tal",
      hu: "Soča-völgy",
      ro: "Valea Soča",
      en: "Soča Valley"
    },
    description: {
      de: "Das Soča-Tal ist bekannt für den smaragdgrünen Fluss Soča, der als einer der schönsten Flüsse Europas gilt. Das Tal bietet zahlreiche Möglichkeiten für Outdoor-Aktivitäten.",
      hu: "A Soča-völgy a smaragdzöld Soča folyóról ismert, amelyet Európa egyik legszebb folyójának tartanak. A völgy számos lehetőséget kínál szabadtéri tevékenységekre.",
      ro: "Valea Soča este cunoscută pentru râul Soča de culoare smarald, considerat unul dintre cele mai frumoase râuri din Europa. Valea oferă numeroase oportunități pentru activități în aer liber.",
      en: "The Soča Valley is known for the emerald-green Soča River, considered one of the most beautiful rivers in Europe. The valley offers numerous opportunities for outdoor activities."
    },
    facts: {
      de: [
        "Der Fluss Soča ist berühmt für seine markante smaragdgrüne Farbe.",
        "Das Tal war Schauplatz schwerer Kämpfe im Ersten Weltkrieg (Isonzo-Schlachten).",
        "Es ist ein beliebtes Ziel für Wildwasser-Rafting und Kajakfahren.",
        "Die Soča-Forelle ist eine endemische Fischart des Flusses."
      ],
      hu: [
        "A Soča folyó híres jellegzetes smaragdzöld színéről.",
        "A völgy az első világháború súlyos harcainak helyszíne volt (Isonzó-csaták).",
        "Népszerű úti cél vadvízi evezéshez és kajakozáshoz.",
        "A Soča-pisztráng a folyó endemikus halfaja."
      ],
      ro: [
        "Râul Soča este faimos pentru culoarea sa distinctivă de smarald.",
        "Valea a fost locul unor lupte grele în Primul Război Mondial (bătăliile de pe Isonzo).",
        "Este o destinație populară pentru rafting și caiac.",
        "Păstrăvul de Soča este o specie de pește endemică a râului."
      ],
      en: [
        "The Soča River is famous for its distinct emerald-green color.",
        "The valley was the scene of heavy fighting in World War I (Battles of the Isonzo).",
        "It is a popular destination for whitewater rafting and kayaking.",
        "The Soča trout is an endemic fish species of the river."
      ]
    },
    image: "/geo-images/slovenia/nature-soca-valley.webp"
  }
];

export const sloveniaAllPoi: POI[] = [
  sloveniaCountry,
  ...sloveniaRegions
];
