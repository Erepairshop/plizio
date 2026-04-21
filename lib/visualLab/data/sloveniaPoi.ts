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

export const sloveniaCities: POI[] = [
  {
    id: "city-ljubljana",
    type: "city",
    parent: "country-slovenia",
    coords: [14.5058, 46.0569],
    name: {
      de: "Ljubljana",
      hu: "Ljubljana",
      ro: "Ljubljana",
      en: "Ljubljana"
    },
    description: {
      de: "Die Hauptstadt Sloweniens verbindet eine kompakte Altstadt mit Flussufer, Brücken und einer entspannten Atmosphäre.",
      hu: "Szlovénia fővárosa kompakt óvárost, folyópartot, hidakat és nyugodt hangulatot egyesít.",
      ro: "Capitala Sloveniei îmbină un oraș vechi compact, maluri de râu, poduri și o atmosferă relaxată.",
      en: "Slovenia's capital combines a compact old town, riverfront, bridges, and a relaxed atmosphere."
    },
    facts: {
      de: [
        "Tromostovje, die Drei Brücken, ist eines der bekanntesten Wahrzeichen der Stadt.",
        "Die Burg von Ljubljana überragt die Altstadt vom Hügel aus.",
        "Das Zentrum ist stark auf Fußgänger ausgerichtet.",
        "Die Stadt gilt als eine der grünsten Hauptstädte Europas."
      ],
      hu: [
        "A Tromostovje, vagyis a Hármas híd a város egyik legismertebb jelképe.",
        "A ljubljanai vár a dombtetőről néz az óvárosra.",
        "A belváros erősen gyalogosbarát.",
        "A várost Európa egyik legzöldebb fővárosaként tartják számon."
      ],
      ro: [
        "Tromostovje, adică Podurile Triple, este unul dintre cele mai cunoscute simboluri ale orașului.",
        "Castelul Ljubljana domină orașul vechi de pe colină.",
        "Centrul este puternic orientat către pietoni.",
        "Orașul este considerat una dintre cele mai verzi capitale din Europa."
      ],
      en: [
        "Tromostovje, the Triple Bridge, is one of the city's best-known landmarks.",
        "Ljubljana Castle overlooks the old town from the hill.",
        "The center is strongly pedestrian-oriented.",
        "The city is regarded as one of Europe's greenest capitals."
      ]
    },
    image: "/geo-images/slovenia/city-ljubljana.webp"
  },
  {
    id: "city-maribor",
    type: "city",
    parent: "country-slovenia",
    coords: [15.6467, 46.5547],
    name: {
      de: "Maribor",
      hu: "Maribor",
      ro: "Maribor",
      en: "Maribor"
    },
    description: {
      de: "Die zweitgrößte Stadt Sloweniens liegt an der Drau und ist für Wein, Kultur und ihren historischen Stadtkern bekannt.",
      hu: "Szlovénia második legnagyobb városa a Dráva partján fekszik, és borairól, kultúrájáról és történelmi központjáról ismert.",
      ro: "Al doilea oraș ca mărime din Slovenia se află pe Drava și este cunoscut pentru vin, cultură și centrul său istoric.",
      en: "Slovenia's second-largest city lies on the Drava River and is known for wine, culture, and its historic center."
    },
    facts: {
      de: [
        "In Maribor wächst die älteste Weinrebe der Welt.",
        "Die Stadt ist ein wichtiges Zentrum der steirischen Weinregion.",
        "Pohorje liegt direkt vor der Stadt und ist ein beliebtes Skigebiet.",
        "Lent ist der berühmte Uferbereich der Altstadt."
      ],
      hu: [
        "Mariborban nő a világ legöregebb szőlőtőkéje.",
        "A város a stájer borvidék egyik fontos központja.",
        "A közeli Pohorje kedvelt síterület.",
        "Lent az óváros híres folyóparti része."
      ],
      ro: [
        "În Maribor crește cea mai veche viță de vie din lume.",
        "Orașul este un centru important al regiunii viticole Štajerska.",
        "Pohorje este chiar lângă oraș și este o stațiune de schi populară.",
        "Lent este zona faimoasă de pe malul râului din centrul vechi."
      ],
      en: [
        "The world's oldest grapevine grows in Maribor.",
        "The city is an important center of the Styria wine region.",
        "Pohorje sits right by the city and is a popular ski area.",
        "Lent is the famous riverside district of the old town."
      ]
    },
    image: "/geo-images/slovenia/city-maribor.webp"
  },
  {
    id: "city-celje",
    type: "city",
    parent: "country-slovenia",
    coords: [15.2675, 46.2311],
    name: {
      de: "Cilli",
      hu: "Celje",
      ro: "Celje",
      en: "Celje"
    },
    description: {
      de: "Celje ist eine historische Stadt an der Savinja und war einst Sitz mächtiger Grafenfamilien im mittelalterlichen Slowenien.",
      hu: "Celje történelmi város a Savinja folyó mellett, és egykor a középkori Szlovénia egyik hatalmas grófi családjának székhelye volt.",
      ro: "Celje este un oraș istoric de pe râul Savinja și a fost odinioară reședința unor puternice familii de conți în Slovenia medievală.",
      en: "Celje is a historic city on the Savinja River and was once the seat of powerful comital families in medieval Slovenia."
    },
    facts: {
      de: [
        "Die Grafen von Cilli gehörten zu den mächtigsten Adelsfamilien der Region.",
        "Die Alte Burg von Celje thront über der Stadt.",
        "Der historische Kern verbindet römisches Erbe mit dem Mittelalter.",
        "Celje ist ein regionales Verwaltungs- und Kulturzentrum."
      ],
      hu: [
        "A Cillei grófok a térség egyik leghatalmasabb nemesi családjai közé tartoztak.",
        "A celjei öreg vár a város fölé magasodik.",
        "A történelmi központ római örökséget és középkori rétegeket is őriz.",
        "Celje regionális közigazgatási és kulturális központ."
      ],
      ro: [
        "Conții de Cilli au fost una dintre cele mai puternice familii nobiliare din regiune.",
        "Castelul Vechi din Celje domină orașul.",
        "Nucleul istoric combină moștenirea romană cu Evul Mediu.",
        "Celje este un centru regional administrativ și cultural."
      ],
      en: [
        "The Counts of Cilli were among the region's most powerful noble families.",
        "Old Celje Castle towers above the city.",
        "The historic core combines Roman heritage with the Middle Ages.",
        "Celje is a regional administrative and cultural center."
      ]
    },
    image: "/geo-images/slovenia/city-celje.webp"
  },
  {
    id: "city-kranj",
    type: "city",
    parent: "country-slovenia",
    coords: [14.3555, 46.2389],
    name: {
      de: "Krainburg",
      hu: "Kranj",
      ro: "Kranj",
      en: "Kranj"
    },
    description: {
      de: "Kranj ist die Hauptstadt der Region Gorenjska und eine historische Stadt oberhalb von Flussschluchten mit starkem kulturellem Erbe.",
      hu: "Kranj Gorenjska régió központja, történelmi város folyószurdokok fölött, erős kulturális örökséggel.",
      ro: "Kranj este centrul regiunii Gorenjska și un oraș istoric deasupra cheilor râurilor, cu o moștenire culturală puternică.",
      en: "Kranj is the center of the Gorenjska region and a historic city above river gorges with a strong cultural heritage."
    },
    facts: {
      de: [
        "Kranj ist eng mit dem Dichter France Prešeren verbunden.",
        "Die Altstadt liegt auf einem Felsrücken zwischen zwei Flüssen.",
        "Die Stadt ist ein wichtiges Zentrum für die Region Gorenjska.",
        "Unter der Stadt verlaufen historische Tunnel und Schutzanlagen."
      ],
      hu: [
        "Kranj szorosan kapcsolódik France Prešeren költőhöz.",
        "Az óváros két folyó közötti sziklagerincen fekszik.",
        "A város Gorenjska régió fontos központja.",
        "A város alatt történelmi alagutak és védelmi létesítmények húzódnak."
      ],
      ro: [
        "Kranj este strâns legat de poetul France Prešeren.",
        "Orașul vechi se află pe o creastă stâncoasă între două râuri.",
        "Orașul este un centru important al regiunii Gorenjska.",
        "Sub oraș există tuneluri istorice și structuri defensive."
      ],
      en: [
        "Kranj is closely associated with the poet France Prešeren.",
        "The old town sits on a rocky ridge between two rivers.",
        "The city is an important center of the Gorenjska region.",
        "Historical tunnels and defensive structures run beneath the city."
      ]
    },
    image: "/geo-images/slovenia/city-kranj.webp"
  },
  {
    id: "city-koper",
    type: "city",
    parent: "country-slovenia",
    coords: [13.7294, 45.5469],
    name: {
      de: "Koper",
      hu: "Koper",
      ro: "Koper",
      en: "Koper"
    },
    description: {
      de: "Koper ist Sloweniens wichtigste Küstenstadt und ein bedeutender Hafen mit starker venezianischer Prägung.",
      hu: "Koper Szlovénia legfontosabb tengerparti városa és jelentős kikötő, erős velencei hatással.",
      ro: "Koper este cel mai important oraș de coastă al Sloveniei și un port major cu o puternică amprentă venețiană.",
      en: "Koper is Slovenia's most important coastal city and a major port with a strong Venetian influence."
    },
    facts: {
      de: [
        "Die Altstadt zeigt viele venezianische Paläste und Plätze.",
        "Koper ist der größte Hafen Sloweniens.",
        "Der Tito-Platz ist das historische Herz der Stadt.",
        "Die Küste verbindet hier mediterrane und mitteleuropäische Einflüsse."
      ],
      hu: [
        "Az óvárosban sok velencei palota és tér látható.",
        "Koper Szlovénia legnagyobb kikötője.",
        "A Tito tér a város történelmi szíve.",
        "A partvidéken mediterrán és közép-európai hatások keverednek."
      ],
      ro: [
        "Centrul vechi are multe palate și piețe venețiene.",
        "Koper este cel mai mare port al Sloveniei.",
        "Piața Tito este inima istorică a orașului.",
        "Coasta îmbină influențe mediteraneene și central-europene."
      ],
      en: [
        "The old town features many Venetian palaces and squares.",
        "Koper is Slovenia's largest port.",
        "Tito Square is the historic heart of the city.",
        "The coast here blends Mediterranean and Central European influences."
      ]
    },
    image: "/geo-images/slovenia/city-koper.webp"
  }
];

export const sloveniaCulture: POI[] = [
  {
    id: "cult-ljubljana-castle",
    type: "culture",
    parent: "country-slovenia",
    coords: [14.5083, 46.0489],
    name: {
      de: "Burg Ljubljana",
      hu: "Ljubljanai vár",
      ro: "Castelul Ljubljana",
      en: "Ljubljana Castle"
    },
    description: {
      de: "Die Burg von Ljubljana ist die markante Festung über der Hauptstadt und prägt seit Jahrhunderten das Stadtbild.",
      hu: "A ljubljanai vár a főváros fölé magasodó jellegzetes erődítmény, amely évszázadok óta meghatározza a városképét.",
      ro: "Castelul Ljubljana este fortăreața emblematică de deasupra capitalei și definește de secole silueta orașului.",
      en: "Ljubljana Castle is the signature fortress above the capital and has shaped the city skyline for centuries."
    },
    facts: {
      de: [
        "Die Anlage geht bis ins 11. Jahrhundert zurück.",
        "Sie diente als Verteidigungsanlage und Residenz.",
        "Vom Turm aus gibt es weite Blicke über die Stadt.",
        "Heute ist sie ein Kultur- und Veranstaltungsort."
      ],
      hu: [
        "Az épületegyüttes gyökerei a 11. századig nyúlnak vissza.",
        "Védelmi erődítményként és rezidenciaként is szolgált.",
        "A toronyból széles panoráma nyílik a városra.",
        "Ma kulturális és rendezvényhelyszínként működik."
      ],
      ro: [
        "Ansamblul datează din secolul al XI-lea.",
        "A servit drept fortificație și reședință.",
        "Din turn se deschide o panoramă amplă asupra orașului.",
        "Astăzi este un loc cultural și de evenimente."
      ],
      en: [
        "The complex dates back to the 11th century.",
        "It served as both a defensive fortification and a residence.",
        "The tower offers wide views over the city.",
        "Today it functions as a cultural and event venue."
      ]
    },
    image: "/geo-images/slovenia/cult-ljubljana-castle.webp"
  },
  {
    id: "cult-piran",
    type: "culture",
    parent: "country-slovenia",
    coords: [13.5683, 45.5281],
    name: {
      de: "Piran",
      hu: "Piran",
      ro: "Piran",
      en: "Piran"
    },
    description: {
      de: "Piran ist eine venezianisch geprägte Küstenstadt mit engem historischer Kern und mediterranem Charakter.",
      hu: "Piran egy velencei hatású tengerparti város, szűk történelmi maggal és mediterrán karakterrel.",
      ro: "Piran este un oraș de coastă cu puternice influențe venețiene, un nucleu istoric compact și caracter mediteranean.",
      en: "Piran is a Venetian-influenced coastal town with a compact historic core and a Mediterranean character."
    },
    facts: {
      de: [
        "Die Stadt ist eine der schönsten Küstenorte an der slowenischen Adria.",
        "Der Tartini-Platz ist das zentrale Stadthaus-Zentrum.",
        "Die engen Gassen folgen dem mittelalterlichen Grundriss.",
        "Piran ist stark von venezianischer Architektur geprägt."
      ],
      hu: [
        "A város a szlovén Adria egyik legszebb települése.",
        "A Tartini tér a város központi főtere.",
        "A szűk utcák a középkori alaprajzot követik.",
        "Piran erősen őrzi a velencei építészet jegyeit."
      ],
      ro: [
        "Orașul este unul dintre cele mai frumoase de pe coasta slovenă a Adriaticii.",
        "Piața Tartini este centrul orașului.",
        "Străzile înguste urmează planul medieval.",
        "Piran este puternic marcat de arhitectura venețiană."
      ],
      en: [
        "The town is one of the most beautiful places on Slovenia's Adriatic coast.",
        "Tartini Square is the central square of the town.",
        "The narrow streets follow the medieval layout.",
        "Piran is strongly shaped by Venetian architecture."
      ]
    },
    image: "/geo-images/slovenia/cult-piran.webp"
  },
  {
    id: "cult-skocjan",
    type: "culture",
    parent: "country-slovenia",
    coords: [13.9897, 45.6628],
    name: {
      de: "Höhlen von Škocjan",
      hu: "Škocjan-barlang",
      ro: "Peșterile Škocjan",
      en: "Škocjan Caves"
    },
    description: {
      de: "Die Škocjan-Höhlen gehören zu den beeindruckendsten Karstsystemen Europas und sind für ihren unterirdischen Canyon berühmt.",
      hu: "A Škocjan-barlangok Európa egyik leglenyűgözőbb karsztos rendszerei közé tartoznak, és földalatti kanyonjukról híresek.",
      ro: "Peșterile Škocjan sunt printre cele mai impresionante sisteme carstice din Europa și sunt renumite pentru canionul lor subteran.",
      en: "The Škocjan Caves are among Europe's most impressive karst systems and are famous for their underground canyon."
    },
    facts: {
      de: [
        "Das Höhlensystem ist UNESCO-Welterbe.",
        "Der unterirdische Fluss hat einen spektakulären Canyon geformt.",
        "Das System reicht über mehrere Kilometer ins Innere der Erde.",
        "Es gehört zu den wichtigsten Karstgebieten der Welt."
      ],
      hu: [
        "A barlangrendszer az UNESCO világörökség része.",
        "Az földalatti folyó látványos kanyont vájt.",
        "A rendszer több kilométeren át húzódik a föld alatt.",
        "A világ egyik legfontosabb karsztvidékének része."
      ],
      ro: [
        "Sistemul de peșteri face parte din Patrimoniul Mondial UNESCO.",
        "Râul subteran a sculptat un canion spectaculos.",
        "Sistemul se întinde pe mai mulți kilometri în interiorul pământului.",
        "Face parte dintre cele mai importante zone carstice din lume."
      ],
      en: [
        "The cave system is a UNESCO World Heritage site.",
        "The underground river has carved a spectacular canyon.",
        "The system extends several kilometers underground.",
        "It is one of the world's most important karst regions."
      ]
    },
    image: "/geo-images/slovenia/cult-skocjan.webp"
  },
  {
    id: "cult-postojna",
    type: "culture",
    parent: "country-slovenia",
    coords: [14.2036, 45.78],
    name: {
      de: "Postojna-Höhle und Predjama-Burg",
      hu: "Postojnai-barlang + Predjamski grad",
      ro: "Peștera Postojna + Castelul Predjama",
      en: "Postojna Cave and Predjama Castle"
    },
    description: {
      de: "Die Postojna-Höhle und die Predjama-Burg bilden eines der bekanntesten Natur- und Kulturerlebnisse Sloweniens.",
      hu: "A Postojnai-barlang és a Predjamski grad Szlovénia egyik legismertebb természeti és kulturális látnivalója.",
      ro: "Peștera Postojna și Castelul Predjama formează una dintre cele mai cunoscute experiențe naturale și culturale din Slovenia.",
      en: "Postojna Cave and Predjama Castle make up one of Slovenia's best-known natural and cultural highlights."
    },
    facts: {
      de: [
        "Die Höhle ist für ihren großen Tropfsteinsaal und ihre Bahn bekannt.",
        "Predjama ist ein spektakulärer Felsenbau in einer Höhlenöffnung.",
        "Die Kombination aus Höhle und Burg ist weltweit einzigartig.",
        "Beide Orte liegen nur eine kurze Strecke auseinander."
      ],
      hu: [
        "A barlang híres nagy cseppkőteréről és barlangi vasútjáról.",
        "Predjama egy sziklafalba épült, látványos vár.",
        "A barlang és a vár együttese világszerte egyedülálló.",
        "A két helyszín csak rövid távolságra van egymástól."
      ],
      ro: [
        "Peștera este cunoscută pentru sala sa mare de stalactite și trenulețul subteran.",
        "Predjama este un castel spectaculos construit într-o deschidere de stâncă.",
        "Combinația dintre peșteră și castel este unică în lume.",
        "Cele două locații se află la mică distanță una de alta."
      ],
      en: [
        "The cave is known for its large chamber and cave railway.",
        "Predjama is a dramatic castle built into a cliff opening.",
        "The cave-and-castle combination is unique worldwide.",
        "The two sites are only a short distance apart."
      ]
    },
    image: "/geo-images/slovenia/cult-postojna.webp"
  },
  {
    id: "cult-bled-castle",
    type: "culture",
    parent: "country-slovenia",
    coords: [14.1053, 46.3631],
    name: {
      de: "Burg Bled und Insel",
      hu: "Bledi-vár + sziget",
      ro: "Castelul Bled + insula",
      en: "Bled Castle and Island"
    },
    description: {
      de: "Die Burg von Bled und die kleine Insel im See zählen zu den bekanntesten Bildern Sloweniens.",
      hu: "A bledi vár és a tó közepén fekvő kis sziget Szlovénia legismertebb képei közé tartoznak.",
      ro: "Castelul Bled și mica insulă din lac se numără printre cele mai cunoscute imagini ale Sloveniei.",
      en: "Bled Castle and the small island in the lake are among Slovenia's most iconic sights."
    },
    facts: {
      de: [
        "Die Burg steht auf einem Felsen hoch über dem See.",
        "Die Inselkirche ist das zentrale Motiv des Bleder Sees.",
        "Das Ensemble gehört zu den meistfotografierten Orten des Landes.",
        "Die Lage mit Alpenhintergrund macht den Ort besonders markant."
      ],
      hu: [
        "A vár a tó fölötti sziklán áll.",
        "A sziget temploma a Bledi-tó központi látványeleme.",
        "Az együttes az ország egyik legtöbbet fényképezett helye.",
        "Az alpesi háttér különösen karakteressé teszi a látványt."
      ],
      ro: [
        "Castelul stă pe o stâncă deasupra lacului.",
        "Biserica de pe insulă este motivul central al lacului Bled.",
        "Ansamblul este unul dintre cele mai fotografiate locuri din țară.",
        "Fundalul alpin face ca locul să fie deosebit de memorabil."
      ],
      en: [
        "The castle stands on a cliff above the lake.",
        "The island church is the central image of Lake Bled.",
        "The ensemble is one of the most photographed places in the country.",
        "The Alpine backdrop makes the site especially striking."
      ]
    },
    image: "/geo-images/slovenia/cult-bled-castle.webp"
  }
];

export const sloveniaNature: POI[] = [
  {
    id: "nat-triglav",
    type: "nature",
    parent: "country-slovenia",
    coords: [13.8367, 46.3783],
    name: {
      de: "Triglav-Nationalpark und Gipfel",
      hu: "Triglav NP + csúcs 2864m",
      ro: "Parcul Național Triglav + vârf 2864m",
      en: "Triglav National Park and Peak"
    },
    description: {
      de: "Der Triglav-Nationalpark schützt den höchsten Berg Sloweniens und weite Teile der Julischen Alpen.",
      hu: "A Triglav Nemzeti Park Szlovénia legmagasabb hegyét és a Júliai-Alpok nagy részét védi.",
      ro: "Parcul Național Triglav protejează cel mai înalt munte al Sloveniei și mari părți ale Alpilor Iulieni.",
      en: "Triglav National Park protects Slovenia's highest mountain and large parts of the Julian Alps."
    },
    facts: {
      de: [
        "Triglav ist 2864 Meter hoch.",
        "Der Berg gilt als nationales Symbol Sloweniens.",
        "Der Park ist das einzige Nationalparkgebiet des Landes.",
        "Er ist ein Kerngebiet für Wandern und Bergsteigen."
      ],
      hu: [
        "A Triglav 2864 méter magas.",
        "A hegy Szlovénia nemzeti szimbóluma.",
        "A park az ország egyetlen nemzeti parkja.",
        "A térség a túrázás és hegymászás központja."
      ],
      ro: [
        "Triglav are 2864 de metri.",
        "Muntele este un simbol național al Sloveniei.",
        "Parcul este singurul parc național al țării.",
        "Zona este un centru major pentru drumeții și alpinism."
      ],
      en: [
        "Triglav is 2,864 meters high.",
        "The mountain is a national symbol of Slovenia.",
        "The park is the country's only national park.",
        "It is a major area for hiking and mountaineering."
      ]
    },
    image: "/geo-images/slovenia/nat-triglav.webp"
  },
  {
    id: "nat-lake-bled",
    type: "nature",
    parent: "country-slovenia",
    coords: [14.1043, 46.3625],
    name: {
      de: "Bleder See",
      hu: "Bled-tó",
      ro: "Lacul Bled",
      en: "Lake Bled"
    },
    description: {
      de: "Der Bleder See ist ein smaragdgrüner Alpensee mit Inselkirche und einer der bekanntesten Naturorte des Landes.",
      hu: "A Bled-tó egy smaragdzöld alpesi tó szigettemplommal, és az ország egyik legismertebb természeti helyszíne.",
      ro: "Lacul Bled este un lac alpin de culoare smarald, cu o biserică pe insulă, și unul dintre cele mai cunoscute locuri naturale ale țării.",
      en: "Lake Bled is an emerald Alpine lake with an island church and one of the country's most famous natural places."
    },
    facts: {
      de: [
        "Die Insel in der Mitte des Sees ist ein seltenes Naturbild in Slowenien.",
        "Pletna-Boote bringen Besucher zur Insel.",
        "Die Uferlage mit den Bergen macht den See besonders malerisch.",
        "Der See ist ein Symbol des slowenischen Alpentourismus."
      ],
      hu: [
        "A tó közepén lévő sziget ritka természeti látvány Szlovéniában.",
        "A szigetre Pletna csónakok viszik a látogatókat.",
        "A hegyekkel övezett part miatt a tó különösen festői.",
        "A tó a szlovén alpesi turizmus egyik szimbóluma."
      ],
      ro: [
        "Insula din mijlocul lacului este o imagine naturală rară în Slovenia.",
        "Bărcile Pletna duc vizitatorii la insulă.",
        "Așezarea la poalele munților face lacul deosebit de pitoresc.",
        "Lacul este un simbol al turismului alpin sloven."
      ],
      en: [
        "The island in the middle of the lake is a rare natural sight in Slovenia.",
        "Pletna boats take visitors to the island.",
        "The mountain setting makes the lake especially picturesque.",
        "The lake is a symbol of Slovenian Alpine tourism."
      ]
    },
    image: "/geo-images/slovenia/nat-lake-bled.webp"
  },
  {
    id: "nat-soca",
    type: "nature",
    parent: "country-slovenia",
    coords: [13.62, 46.34],
    name: {
      de: "Soča-Tal",
      hu: "Soča-völgy",
      ro: "Valea Soča",
      en: "Soča Valley"
    },
    description: {
      de: "Das Soča-Tal ist berühmt für seinen smaragdgrünen Fluss und die dramatische alpine Landschaft.",
      hu: "A Soča-völgy smaragdzöld folyójáról és drámai alpesi tájáról híres.",
      ro: "Valea Soča este renumită pentru râul său de culoare smarald și peisajul alpin dramatic.",
      en: "The Soča Valley is famous for its emerald-green river and dramatic Alpine scenery."
    },
    facts: {
      de: [
        "Die Farbe des Flusses ist außergewöhnlich intensiv smaragdgrün.",
        "Das Tal spielte im Ersten Weltkrieg eine wichtige Frontrolle.",
        "Es ist ein Hotspot für Rafting, Kajak und Canyoning.",
        "Die Landschaft kombiniert Fluss, Schluchten und Bergkulisse."
      ],
      hu: [
        "A folyó színe különlegesen intenzív smaragdzöld.",
        "A völgy az első világháborúban fontos frontszakasz volt.",
        "Népszerű hely raftinghoz, kajakozáshoz és canyoninghoz.",
        "A táj a folyót, szurdokokat és hegyeket egyszerre mutatja."
      ],
      ro: [
        "Culoarea râului este un verde smarald deosebit de intens.",
        "Valea a avut un rol important de front în Primul Război Mondial.",
        "Este un punct de top pentru rafting, caiac și canyoning.",
        "Peisajul combină râul, cheile și fundalul montan."
      ],
      en: [
        "The river's color is an exceptionally intense emerald green.",
        "The valley played an important front-line role in World War I.",
        "It is a hotspot for rafting, kayaking, and canyoning.",
        "The landscape combines river, gorges, and mountain scenery."
      ]
    },
    image: "/geo-images/slovenia/nat-soca.webp"
  },
  {
    id: "nat-kranjska-gora",
    type: "nature",
    parent: "country-slovenia",
    coords: [13.7828, 46.4842],
    name: {
      de: "Kranjska Gora",
      hu: "Kranjska Gora",
      ro: "Kranjska Gora",
      en: "Kranjska Gora"
    },
    description: {
      de: "Kranjska Gora ist ein alpiner Ferienort in Nordwestslowenien, bekannt für Wintersport und Berglandschaften.",
      hu: "Kranjska Gora egy alpesi üdülőhely Északnyugat-Szlovéniában, amely téli sportjairól és hegyi tájáról híres.",
      ro: "Kranjska Gora este o stațiune alpină din nord-vestul Sloveniei, cunoscută pentru sporturile de iarnă și peisajele montane.",
      en: "Kranjska Gora is an Alpine resort in northwestern Slovenia, known for winter sports and mountain scenery."
    },
    facts: {
      de: [
        "Der Ort ist ein Zentrum für Skifahren und Wintersport.",
        "Planica liegt in der Nähe und ist berühmt für Skispringen.",
        "Die Region öffnet den Zugang zu den Julischen Alpen.",
        "Im Sommer ist sie ein Ausgangspunkt für Wanderungen."
      ],
      hu: [
        "A település a síelés és a téli sportok központja.",
        "A közeli Planica a síugrásáról híres.",
        "A régió kaput nyit a Júliai-Alpok felé.",
        "Nyáron túrák kiindulópontja."
      ],
      ro: [
        "Localitatea este un centru pentru schi și sporturi de iarnă.",
        "Planica se află în apropiere și este renumită pentru săriturile cu schiurile.",
        "Regiunea oferă acces la Alpii Iulieni.",
        "Vara este un punct de plecare pentru drumeții."
      ],
      en: [
        "The place is a center for skiing and winter sports.",
        "Nearby Planica is famous for ski jumping.",
        "The region opens access to the Julian Alps.",
        "In summer it is a starting point for hikes."
      ]
    },
    image: "/geo-images/slovenia/nat-kranjska-gora.webp"
  },
  {
    id: "nat-vintgar",
    type: "nature",
    parent: "country-slovenia",
    coords: [14.0983, 46.3933],
    name: {
      de: "Vintgar-Klamm",
      hu: "Vintgar-szurdok",
      ro: "Canionul Vintgar",
      en: "Vintgar Gorge"
    },
    description: {
      de: "Die Vintgar-Klamm ist ein kurzer, aber spektakulärer Schluchtweg mit Holzstegen entlang des Flusses Radovna.",
      hu: "A Vintgar-szurdok egy rövid, de látványos szurdokút, amely fa pallókon vezet a Radovna folyó mentén.",
      ro: "Canionul Vintgar este o potecă de chei scurtă, dar spectaculoasă, cu pasarele de lemn de-a lungul râului Radovna.",
      en: "Vintgar Gorge is a short but spectacular gorge walk with wooden boardwalks along the Radovna River."
    },
    facts: {
      de: [
        "Der Weg ist etwa 1,6 Kilometer lang.",
        "Holzstege führen direkt durch die enge Schlucht.",
        "Wasserfälle und Stromschnellen prägen den Pfad.",
        "Die Klamm liegt nicht weit von Bled entfernt."
      ],
      hu: [
        "Az út nagyjából 1,6 kilométer hosszú.",
        "A fapallók közvetlenül a szűk szurdokon vezetnek át.",
        "Vízesések és sebes szakaszok teszik látványossá.",
        "A szurdok Bled közelében található."
      ],
      ro: [
        "Traseul are aproximativ 1,6 kilometri.",
        "Pasarelele de lemn traversează direct canionul îngust.",
        "Cascada și repezișurile dau farmec traseului.",
        "Cheile se află nu departe de Bled."
      ],
      en: [
        "The trail is about 1.6 kilometers long.",
        "Wooden boardwalks run directly through the narrow gorge.",
        "Waterfalls and rapids define the route.",
        "The gorge is not far from Bled."
      ]
    },
    image: "/geo-images/slovenia/nat-vintgar.webp"
  }
];

export const sloveniaAllPoi: POI[] = [
  sloveniaCountry,
  ...sloveniaRegions,
  ...sloveniaCities,
  ...sloveniaCulture,
  ...sloveniaNature
];
