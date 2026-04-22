import type { POI } from "./poi";

export const liechtensteinCountry: POI = {
  id: "country-liechtenstein",
  type: "country",
  parent: "europe",
  coords: [9.5554, 47.1660],
  name: {
    de: "Liechtenstein",
    hu: "Liechtenstein",
    ro: "Liechtenstein",
    en: "Liechtenstein"
  },
  description: {
    de: "Ein kleiner, wohlhabender Fürstentum in den Alpen, bekannt für mittelalterliche Burgen, alpine Landschaften und ein wichtiges Finanzzentrum.",
    hu: "Egy apró, gazdag hercegség az Alpokban, amely középkori várairól, alpesi tájairól és pénzügyi központjáról ismert.",
    ro: "Un mic și prosper principat în Alpi, cunoscut pentru castelele medievale, peisajele alpine și ca un important centru financiar.",
    en: "A tiny, wealthy principality in the Alps, known for its medieval castles, alpine landscapes, and as a major financial center."
  },
  shortDesc: {
    de: "Ein kleines Alpenfürstentum, bekannt für Burgen und Berge.",
    hu: "Kis alpesi hercegség, várakról és hegyekről ismert.",
    ro: "Mic principat alpin, faimos pentru castele și munți.",
    en: "A tiny Alpine principality known for castles and mountains."
  }
};

export const liechtensteinRegions: POI[] = [
  {
    id: "LI-ALL",
    type: "region",
    parent: "country-liechtenstein",
    coords: [9.5554, 47.1660],
    name: {
      de: "Liechtenstein",
      hu: "Liechtenstein",
      ro: "Liechtenstein",
      en: "Liechtenstein"
    },
    shortDesc: {
      de: "Das gesamte Gebiet des Fürstentums Liechtenstein.",
      hu: "A Liechtensteini Hercegség teljes területe.",
      ro: "Întregul teritoriu al Principatului Liechtenstein.",
      en: "The entire territory of the Principality of Liechtenstein."
    }
  }
];

export const liechtensteinCities: POI[] = [
  {
    id: "li-city-vaduz",
    type: "city",
    parent: "LI-ALL",
    coords: [9.5210, 47.1410],
    name: {
      de: "Vaduz",
      hu: "Vaduz",
      ro: "Vaduz",
      en: "Vaduz"
    },
    shortDesc: {
      de: "Die Hauptstadt von Liechtenstein, Sitz des Fürstenhauses.",
      hu: "Liechtenstein fővárosa, a hercegi család székhelye.",
      ro: "Capitala Liechtensteinului, sediul casei princiare.",
      en: "The capital of Liechtenstein, seat of the princely family."
    }
  },
  {
    id: "li-city-schaan",
    type: "city",
    parent: "LI-ALL",
    coords: [9.4833, 47.1666],
    name: {
      de: "Schaan",
      hu: "Schaan",
      ro: "Schaan",
      en: "Schaan"
    },
    shortDesc: {
      de: "Die größte Gemeinde Liechtensteins und ein wichtiges Wirtschaftszentrum.",
      hu: "Liechtenstein legnagyobb települése és fontos gazdasági központ.",
      ro: "Cea mai mare comună din Liechtenstein și un centru economic important.",
      en: "The largest municipality in Liechtenstein and a major economic center."
    }
  },
  {
    id: "li-city-triesen",
    type: "city",
    parent: "LI-ALL",
    coords: [9.5333, 47.1000],
    name: {
      de: "Triesen",
      hu: "Triesen",
      ro: "Triesen",
      en: "Triesen"
    },
    shortDesc: {
      de: "Die drittgrößte Gemeinde mit historischen Siedlungen.",
      hu: "A harmadik legnagyobb település történelmi negyedekkel.",
      ro: "A treia cea mai mare comună, cu așezări istorice.",
      en: "The third-largest municipality with historical settlements."
    }
  },
  {
    id: "li-city-balzers",
    type: "city",
    parent: "LI-ALL",
    coords: [9.5000, 47.0666],
    name: {
      de: "Balzers",
      hu: "Balzers",
      ro: "Balzers",
      en: "Balzers"
    },
    shortDesc: {
      de: "Bekannt für die Burg Gutenberg und den südlichen Charme.",
      hu: "A Gutenberg várról és déli bájáról ismert település.",
      ro: "Cunoscută pentru Castelul Gutenberg și farmecul său sudic.",
      en: "Known for Gutenberg Castle and its southern charm."
    }
  },
  {
    id: "li-city-eschen",
    type: "city",
    parent: "LI-ALL",
    coords: [9.5166, 47.2000],
    name: {
      de: "Eschen",
      hu: "Eschen",
      ro: "Eschen",
      en: "Eschen"
    },
    shortDesc: {
      de: "Das wirtschaftliche Zentrum des Liechtensteiner Unterlandes.",
      hu: "A liechtensteini Unterland gazdasági központja.",
      ro: "Centrul economic al regiunii Unterland din Liechtenstein.",
      en: "The economic center of the Liechtenstein Unterland."
    }
  },
  {
    id: "li-city-mauren",
    type: "city",
    parent: "LI-ALL",
    coords: [9.5333, 47.2166],
    name: {
      de: "Mauren",
      hu: "Mauren",
      ro: "Mauren",
      en: "Mauren"
    },
    shortDesc: {
      de: "Gemeinde im Unterland mit reichen archäologischen Funden.",
      hu: "Település az Unterlandban, gazdag régészeti leletekkel.",
      ro: "Comună în Unterland, cu bogate descoperiri arheologice.",
      en: "Municipality in the Unterland with rich archaeological finds."
    }
  },
  {
    id: "li-city-triesenberg",
    type: "city",
    parent: "LI-ALL",
    coords: [9.5333, 47.1166],
    name: {
      de: "Triesenberg",
      hu: "Triesenberg",
      ro: "Triesenberg",
      en: "Triesenberg"
    },
    shortDesc: {
      de: "Höchstgelegene Gemeinde, gegründet von Walsern.",
      hu: "A legmagasabban fekvő település, amelyet a walserek alapítottak.",
      ro: "Cea mai înaltă comună, fondată de populația Walser.",
      en: "The highest-situated municipality, founded by the Walser people."
    }
  },
  {
    id: "li-city-ruggell",
    type: "city",
    parent: "LI-ALL",
    coords: [9.5333, 47.2333],
    name: {
      de: "Ruggell",
      hu: "Ruggell",
      ro: "Ruggell",
      en: "Ruggell"
    },
    shortDesc: {
      de: "Die nördlichste und am tiefsten gelegene Gemeinde am Rhein.",
      hu: "A legészakibb és legalacsonyabban fekvő település a Rajna partján.",
      ro: "Cea mai nordică și joasă comună, situată pe Rin.",
      en: "The northernmost and lowest-lying municipality on the Rhine."
    }
  }
];

export const liechtensteinCulture: POI[] = [
  {
    id: "li-cult-vaduz-castle",
    type: "culture",
    parent: "LI-ALL",
    coords: [9.5240, 47.1394],
    name: {
      de: "Schloss Vaduz",
      hu: "Vaduz vára",
      ro: "Castelul Vaduz",
      en: "Vaduz Castle"
    },
    shortDesc: {
      de: "Das Wahrzeichen der Hauptstadt und Residenz der fürstlichen Familie.",
      hu: "A főváros jelképe és a hercegi család rezidenciája.",
      ro: "Simbolul capitalei și reședința familiei princiare.",
      en: "The landmark of the capital and residence of the princely family."
    }
  },
  {
    id: "li-cult-gutenberg-castle",
    type: "culture",
    parent: "LI-ALL",
    coords: [9.5008, 47.0633],
    name: {
      de: "Burg Gutenberg",
      hu: "Gutenberg-vár",
      ro: "Castelul Gutenberg",
      en: "Gutenberg Castle"
    },
    shortDesc: {
      de: "Eine intakte mittelalterliche Burg in Balzers auf einem markanten Hügel.",
      hu: "Ép középkori vár Balzersben, egy feltűnő dombon.",
      ro: "Un castel medieval intact în Balzers, situat pe un deal proeminent.",
      en: "An intact medieval castle in Balzers, situated on a prominent hill."
    }
  },
  {
    id: "li-cult-kunstmuseum",
    type: "culture",
    parent: "LI-ALL",
    coords: [9.5222, 47.1400],
    name: {
      de: "Kunstmuseum Liechtenstein",
      hu: "Liechtensteini Művészeti Múzeum",
      ro: "Muzeul de Artă Liechtenstein",
      en: "Kunstmuseum Liechtenstein"
    },
    shortDesc: {
      de: "Museum für moderne und zeitgenössische Kunst in einem schwarzen Kubus.",
      hu: "Modern és kortárs művészeti múzeum egy fekete kockaépületben.",
      ro: "Muzeu de artă modernă și contemporană într-un cub negru.",
      en: "Museum of modern and contemporary art in a black cube building."
    }
  },
  {
    id: "li-cult-landesmuseum",
    type: "culture",
    parent: "LI-ALL",
    coords: [9.5225, 47.1388],
    name: {
      de: "Liechtensteinisches Landesmuseum",
      hu: "Liechtensteini Nemzeti Múzeum",
      ro: "Muzeul Național Liechtenstein",
      en: "Liechtenstein National Museum"
    },
    shortDesc: {
      de: "Das Nationalmuseum, das Geschichte und Kultur des Landes präsentiert.",
      hu: "A nemzeti múzeum, amely az ország történelmét és kultúráját mutatja be.",
      ro: "Muzeul național care prezintă istoria și cultura țării.",
      en: "The national museum showcasing the history and culture of the country."
    }
  },
  {
    id: "li-cult-red-house",
    type: "culture",
    parent: "LI-ALL",
    coords: [9.5208, 47.1466],
    name: {
      de: "Rotes Haus",
      hu: "Vörös Ház",
      ro: "Casa Roșie",
      en: "Red House"
    },
    shortDesc: {
      de: "Ein historisches Treppengiebelhaus und eines der Wahrzeichen von Vaduz.",
      hu: "Történelmi, lépcsős oromzatú ház és Vaduz egyik jelképe.",
      ro: "O casă istorică cu fronton în trepte și unul dintre simbolurile Vaduzului.",
      en: "A historic stepped-gable house and one of the landmarks of Vaduz."
    }
  },
  {
    id: "li-cult-walser-museum",
    type: "culture",
    parent: "LI-ALL",
    coords: [9.5319, 47.1186],
    name: {
      de: "Walsermuseum",
      hu: "Walser Múzeum",
      ro: "Muzeul Walser",
      en: "Walser Museum"
    },
    shortDesc: {
      de: "Heimatmuseum in Triesenberg über das Leben der Walser Bergbauern.",
      hu: "Helytörténeti múzeum Triesenbergben a walser hegyi parasztok életéről.",
      ro: "Muzeu de istorie locală în Triesenberg despre viața fermierilor montani Walser.",
      en: "Local history museum in Triesenberg about the life of Walser mountain farmers."
    }
  },
  {
    id: "li-cult-st-florin",
    type: "culture",
    parent: "LI-ALL",
    coords: [9.5225, 47.1378],
    name: {
      de: "Kathedrale St. Florin",
      hu: "Szent Florin-katedrális",
      ro: "Catedrala Sfântul Florin",
      en: "St. Florin Cathedral"
    },
    shortDesc: {
      de: "Die neugotische Hauptkirche des Erzbistums Vaduz.",
      hu: "A vaduzi érsekség neogótikus főtemploma.",
      ro: "Biserica principală neogotică a Arhiepiscopiei Vaduz.",
      en: "The neo-Gothic main church of the Archdiocese of Vaduz."
    }
  },
  {
    id: "li-cult-stamp-museum",
    type: "culture",
    parent: "LI-ALL",
    coords: [9.5222, 47.1394],
    name: {
      de: "Postmuseum",
      hu: "Bélyegmúzeum",
      ro: "Muzeul Poștal",
      en: "Postage Stamp Museum"
    },
    shortDesc: {
      de: "Museum für die berühmten und begehrten Briefmarken Liechtensteins.",
      hu: "A híres és keresett liechtensteini bélyegek múzeuma.",
      ro: "Muzeu dedicat timbrelor celebre și căutate din Liechtenstein.",
      en: "Museum dedicated to the famous and sought-after stamps of Liechtenstein."
    }
  },
  {
    id: "li-cult-treasure-chamber",
    type: "culture",
    parent: "LI-ALL",
    coords: [9.5220, 47.1390],
    name: {
      de: "Schatzkammer",
      hu: "Kincstár",
      ro: "Camera Tezaurului",
      en: "Treasure Chamber"
    },
    shortDesc: {
      de: "Präsentiert einzigartige Schätze der Fürstenfamilie und des Staates.",
      hu: "A hercegi család és az állam egyedülálló kincseit mutatja be.",
      ro: "Prezintă comori unice ale familiei princiare și ale statului.",
      en: "Showcases unique treasures of the princely family and the state."
    }
  },
  {
    id: "li-cult-parliament",
    type: "culture",
    parent: "LI-ALL",
    coords: [9.5228, 47.1383],
    name: {
      de: "Landtagsgebäude",
      hu: "Parlament (Landtag)",
      ro: "Clădirea Parlamentului",
      en: "Parliament Building"
    },
    shortDesc: {
      de: "Das moderne Parlamentsgebäude, bekannt als das 'Hohe Haus'.",
      hu: "A modern parlamenti épület, amelyet 'Magas Háznak' is neveznek.",
      ro: "Clădirea modernă a parlamentului, cunoscută sub numele de 'Casa Înaltă'.",
      en: "The modern parliament building, known as the 'High House'."
    }
  },
  {
    id: "li-cult-old-rhine-bridge",
    type: "culture",
    parent: "LI-ALL",
    coords: [9.5133, 47.1344],
    name: {
      de: "Alte Rheinbrücke",
      hu: "Régi Rajna-híd",
      ro: "Vechiul Pod peste Rin",
      en: "Old Rhine Bridge"
    },
    shortDesc: {
      de: "Die letzte erhaltene Holzbrücke über den Rhein zwischen Vaduz und Sevelen.",
      hu: "Az utolsó fennmaradt fahíd a Rajna felett Vaduz és Sevelen között.",
      ro: "Ultimul pod de lemn conservat peste Rin, între Vaduz și Sevelen.",
      en: "The last surviving wooden bridge over the Rhine between Vaduz and Sevelen."
    }
  }
];

export const liechtensteinNature: POI[] = [
  {
    id: "li-nat-grauspitz",
    type: "nature",
    parent: "LI-ALL",
    coords: [9.5800, 47.0544],
    name: {
      de: "Vorder Grauspitz",
      hu: "Grauspitz",
      ro: "Grauspitz",
      en: "Grauspitz"
    },
    shortDesc: {
      de: "Der höchste Berg Liechtensteins mit 2599 Metern Höhe im Rätikon.",
      hu: "Liechtenstein legmagasabb hegye a Rätikon hegységben (2599 m).",
      ro: "Cel mai înalt munte din Liechtenstein (2599 m), în masivul Rätikon.",
      en: "The highest mountain in Liechtenstein at 2,599 meters in the Rätikon range."
    }
  },
  {
    id: "li-nat-naafkopf",
    type: "nature",
    parent: "LI-ALL",
    coords: [9.6055, 47.0608],
    name: {
      de: "Naafkopf",
      hu: "Naafkopf",
      ro: "Naafkopf",
      en: "Naafkopf"
    },
    shortDesc: {
      de: "Ein markanter Grenzberg zwischen Liechtenstein, Österreich und der Schweiz.",
      hu: "Feltűnő határhegy Liechtenstein, Ausztria és Svájc között.",
      ro: "Un munte de frontieră proeminent între Liechtenstein, Austria și Elveția.",
      en: "A prominent border mountain between Liechtenstein, Austria, and Switzerland."
    }
  },
  {
    id: "li-nat-falknis",
    type: "nature",
    parent: "LI-ALL",
    coords: [9.5658, 47.0513],
    name: {
      de: "Falknis",
      hu: "Falknis",
      ro: "Falknis",
      en: "Falknis"
    },
    shortDesc: {
      de: "Bekannter Berg im Rätikon, der in Heidi von Johanna Spyri erwähnt wird.",
      hu: "Ismert hegy a Rätikonban, amelyet Johanna Spyri 'Heidi' című művében is említenek.",
      ro: "Munte celebru în Rätikon, menționat în cartea Heidi de Johanna Spyri.",
      en: "Well-known mountain in the Rätikon, mentioned in Heidi by Johanna Spyri."
    }
  },
  {
    id: "li-nat-drei-schwestern",
    type: "nature",
    parent: "LI-ALL",
    coords: [9.5750, 47.1736],
    name: {
      de: "Drei Schwestern",
      hu: "Három Nővér (Drei Schwestern)",
      ro: "Trei Surori (Drei Schwestern)",
      en: "Drei Schwestern (Three Sisters)"
    },
    shortDesc: {
      de: "Legendäre dreigipflige Bergkette und Wahrzeichen der Region.",
      hu: "Legendás, háromcsúcsú hegyvonulat és a régió jelképe.",
      ro: "Un lanț muntos legendar cu trei vârfuri și un simbol al regiunii.",
      en: "Legendary three-peaked mountain range and regional landmark."
    }
  },
  {
    id: "li-nat-sareiserjoch",
    type: "nature",
    parent: "LI-ALL",
    coords: [9.6166, 47.0988],
    name: {
      de: "Sareiserjoch",
      hu: "Sareiserjoch",
      ro: "Sareiserjoch",
      en: "Sareiserjoch"
    },
    shortDesc: {
      de: "Ein beliebter Pass für Wanderer nahe Malbun mit Panoramablick.",
      hu: "Népszerű hágó a túrázók számára Malbun közelében, panorámás kilátással.",
      ro: "O trecătoare populară pentru drumeții lângă Malbun, cu vederi panoramice.",
      en: "A popular pass for hikers near Malbun offering panoramic views."
    }
  },
  {
    id: "li-nat-ruggeller-riet",
    type: "nature",
    parent: "LI-ALL",
    coords: [9.5422, 47.2433],
    name: {
      de: "Ruggeller Riet",
      hu: "Ruggeller Riet",
      ro: "Ruggeller Riet",
      en: "Ruggeller Riet"
    },
    shortDesc: {
      de: "Ein wunderschönes Naturschutzgebiet und Torfmoor im Norden des Landes.",
      hu: "Gyönyörű természetvédelmi terület és tőzegláp az ország északi részén.",
      ro: "O rezervație naturală și mlaștină frumoasă în nordul țării.",
      en: "A beautiful nature reserve and peat bog in the north of the country."
    }
  },
  {
    id: "li-nat-samina",
    type: "nature",
    parent: "LI-ALL",
    coords: [9.5666, 47.1333],
    name: {
      de: "Samina (Fluss)",
      hu: "Samina-folyó",
      ro: "Râul Samina",
      en: "Samina River"
    },
    shortDesc: {
      de: "Ein wilder Wildbach, der durch das Saminatal fließt.",
      hu: "Vadvízi patak, amely a Samina-völgyön keresztül folyik.",
      ro: "Un pârâu sălbatic care curge prin valea Samina.",
      en: "A wild torrent flowing through the Samina valley."
    }
  },
  {
    id: "li-nat-rhine",
    type: "nature",
    parent: "LI-ALL",
    coords: [9.4880, 47.1600],
    name: {
      de: "Alpenrhein",
      hu: "Alpesi Rajna",
      ro: "Rinul Alpin",
      en: "Alpine Rhine"
    },
    shortDesc: {
      de: "Der Fluss bildet die gesamte westliche Grenze zur Schweiz.",
      hu: "A folyó alkotja Svájccal közös teljes nyugati határt.",
      ro: "Râul formează întreaga frontieră vestică cu Elveția.",
      en: "The river forms the entire western border with Switzerland."
    }
  },
  {
    id: "li-nat-steg-reservoir",
    type: "nature",
    parent: "LI-ALL",
    coords: [9.5744, 47.1130],
    name: {
      de: "Stausee Steg (Gänglesee)",
      hu: "Steg-víztározó (Gänglesee)",
      ro: "Lacul de acumulare Steg",
      en: "Steg Reservoir (Gänglesee)"
    },
    shortDesc: {
      de: "Ein malerischer Bergsee und beliebtes Ausflugsziel für Familien.",
      hu: "Festői hegyi tó és népszerű kirándulóhely családok számára.",
      ro: "Un lac montan pitoresc și o destinație populară pentru familii.",
      en: "A picturesque mountain lake and popular excursion destination for families."
    }
  },
  {
    id: "li-nat-malbun",
    type: "nature",
    parent: "LI-ALL",
    coords: [9.6083, 47.1027],
    name: {
      de: "Malbun",
      hu: "Malbun síközpont",
      ro: "Stațiunea Malbun",
      en: "Malbun Resort"
    },
    shortDesc: {
      de: "Der wichtigste Ski- und Sommerferienort in Liechtenstein.",
      hu: "Liechtenstein legfontosabb sí- és nyári üdülőhelye.",
      ro: "Principala stațiune de schi și vacanță de vară din Liechtenstein.",
      en: "The main ski and summer holiday resort in Liechtenstein."
    }
  }
];

export const liechtensteinAllPoi: POI[] = [
  ...liechtensteinRegions,
  ...liechtensteinCities,
  ...liechtensteinCulture,
  ...liechtensteinNature
];
