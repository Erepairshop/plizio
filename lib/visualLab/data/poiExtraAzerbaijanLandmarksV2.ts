import type { POI } from "./poi";

export const poiExtraAzerbaijanLandmarksV2: POI[] = [
  {
    id: "flame-towers-landmarks-v2",
    type: "landmark",
    parent: "AZ-BA",
    coords: [49.8267, 40.3597],
    name: { de: "Flame Towers", hu: "Lángtornyok", ro: "Turnurile de Foc", en: "Flame Towers" },
    description: { de: "Ein markantes Trio von Wolkenkratzern in Baku, deren Form an flackernde Flammen erinnert.", hu: "Három lángnyelvet formázó felhőkarcoló, amelyek Baku modern szimbólumai.", ro: "Un trio de zgârie-nori în Baku, având o formă distinctivă care imită flăcările.", en: "A striking trio of skyscrapers in Baku, shaped like flickering flames." },
    facts: {
      de: ["Höhe bis zu 182 Meter.", "Eröffnet im Jahr 2012.", "Beleuchtet durch LED-Fassaden."],
      hu: ["Magassága eléri a 182 métert.", "2012-ben adták át.", "LED-es homlokzatvilágítással rendelkezik."],
      ro: ["Înălțimea atinge 182 de metri.", "Inaugurat în 2012.", "Fațadele sunt iluminate cu LED-uri."],
      en: ["Height up to 182 meters.", "Opened in 2012.", "Illuminated by LED facades."]
    }
  },
  {
    id: "maiden-tower-landmarks-v2",
    type: "monument",
    parent: "AZ-BA",
    coords: [49.8373, 40.3662],
    name: { de: "Jungfrauenturm", hu: "Szűz-torony", ro: "Turnul Fecioarei", en: "Maiden Tower" },
    description: { de: "Ein historisches Monument in der Altstadt von Baku, das aus dem 12. Jahrhundert stammt und zum UNESCO-Welterbe gehört.", hu: "Történelmi műemlék Baku óvárosában, amely a 12. századból származik és az UNESCO Világörökség része.", ro: "Un monument istoric în Orașul Vechi din Baku, datând din secolul al XII-lea, inclus în Patrimoniul Mondial UNESCO.", en: "A historical monument in the Old City of Baku, dating back to the 12th century and a UNESCO World Heritage site." },
    facts: {
      de: ["UNESCO-Welterbe seit 2000.", "Höhe von 29,5 Metern.", "Dicke der Wände bis zu 5 Meter."],
      hu: ["2000 óta UNESCO Világörökség.", "Magassága 29,5 méter.", "Falainak vastagsága eléri az 5 métert."],
      ro: ["Patrimoniu UNESCO din 2000.", "Înălțimea de 29,5 metri.", "Grosimea zidurilor atinge 5 metri."],
      en: ["UNESCO World Heritage since 2000.", "Height of 29.5 meters.", "Wall thickness up to 5 meters."]
    }
  },
  {
    id: "shirvanshahs-palace-landmarks-v2",
    type: "landmark",
    parent: "AZ-BA",
    coords: [49.8336, 40.3660],
    name: { de: "Schirwanschah-Palast", hu: "Sirvánsahok palotája", ro: "Palatul Șirvanșah", en: "Palace of the Shirvanshahs" },
    description: { de: "Eine herausragende architektonische Anlage aus dem 15. Jahrhundert, die als Perle der aserbaidschanischen Baukunst gilt.", hu: "Kiemelkedő 15. századi épületegyüttes, amelyet az azerbajdzsáni építészet gyöngyszemének tartanak.", ro: "Un complex arhitectural remarcabil din secolul al XV-lea, considerat o perlă a arhitecturii azere.", en: "An outstanding 15th-century architectural complex, considered a pearl of Azerbaijani architecture." },
    facts: {
      de: ["Erbaut im 15. Jahrhundert.", "Teil des UNESCO-Welterbes.", "Umfasst eine Moschee und ein Mausoleum."],
      hu: ["A 15. században épült.", "Az UNESCO Világörökség része.", "Tartalmaz egy mecsetet és egy mauzóleumot."],
      ro: ["Construit în secolul al XV-lea.", "Parte a Patrimoniului UNESCO.", "Include o moschee și un mausoleu."],
      en: ["Built in the 15th century.", "Part of the UNESCO World Heritage.", "Includes a mosque and a mausoleum."]
    }
  },
  {
    id: "heydar-aliyev-center-landmarks-v2",
    type: "icon",
    parent: "AZ-BA",
    coords: [49.8671, 40.3953],
    name: { de: "Heydər-Əliyev-Zentrum", hu: "Heydər Əliyev Központ", ro: "Centrul Heydar Aliyev", en: "Heydar Aliyev Center" },
    description: { de: "Ein weltberühmtes Kulturzentrum, das von Zaha Hadid entworfen wurde und für seine fließende, wellenartige Architektur bekannt ist.", hu: "Világhírű kulturális központ, amelyet Zaha Hadid tervezett, és hullámzó, futurisztikus építészetéről ismert.", ro: "Un centru cultural de renume mondial, proiectat de Zaha Hadid, cunoscut pentru arhitectura sa fluidă și curbată.", en: "A world-renowned cultural center designed by Zaha Hadid, famous for its flowing, wave-like architecture." },
    facts: {
      de: ["Entworfen von Zaha Hadid.", "Eröffnet im Jahr 2012.", "Gewinner des Design of the Year 2014."],
      hu: ["Zaha Hadid tervezte.", "2012-ben adták át.", "2014-ben megnyerte a Design of the Year díjat."],
      ro: ["Proiectat de Zaha Hadid.", "Inaugurat în 2012.", "Câștigător al Design of the Year 2014."],
      en: ["Designed by Zaha Hadid.", "Opened in 2012.", "Winner of Design of the Year 2014."]
    }
  },
  {
    id: "gobustan-rock-art-landmarks-v2",
    type: "tourist-attraction",
    parent: "AZ-QOB",
    coords: [49.3833, 40.1167],
    name: { de: "Qobustan-Nationalpark", hu: "Qobustáni sziklarajzok", ro: "Arta rupestră din Gobustan", en: "Gobustan Rock Art" },
    description: { de: "Eine archäologische Stätte, die für ihre Tausende von prähistorischen Felszeichnungen berühmt ist.", hu: "Régészeti lelőhely, amely több ezer történelem előtti sziklarajzáról híres.", ro: "Un sit arheologic faimos pentru miile sale de petroglife preistorice.", en: "An archaeological site famous for its thousands of prehistoric rock carvings." },
    facts: {
      de: ["Über 6.000 Felszeichnungen.", "Alter bis zu 40.000 Jahre.", "UNESCO-Welterbe seit 2007."],
      hu: ["Több mint 6000 sziklarajz található itt.", "Koruk eléri a 40 000 évet.", "2007 óta UNESCO Világörökség."],
      ro: ["Peste 6.000 de sculpturi în stâncă.", "Vechime de până la 40.000 de ani.", "Patrimoniu UNESCO din 2007."],
      en: ["Over 6,000 rock carvings.", "Age up to 40,000 years.", "UNESCO World Heritage since 2007."]
    }
  },
  {
    id: "gobustan-mud-volcanoes-landmarks-v2",
    type: "tourist-attraction",
    parent: "AZ-QOB",
    coords: [49.4000, 39.9500],
    name: { de: "Schlammvulkane", hu: "Qobustáni iszapvulkánok", ro: "Vulcanii noroioși", en: "Gobustan Mud Volcanoes" },
    description: { de: "Aserbaidschan beherbergt fast die Hälfte aller Schlammvulkane der Welt, die kühlen Schlamm ausstoßen.", hu: "Azerbajdzsán ad otthont a világ iszapvulkánjai közel felének, amelyek hűvös, szürkés iszapot lövellnek ki.", ro: "Azerbaidjanul găzduiește aproape jumătate din vulcanii noroioși din lume, care emană noroi rece.", en: "Azerbaijan is home to almost half of the world's mud volcanoes, which erupt with cool mud." },
    facts: {
      de: ["Mehr als 350 Schlammvulkane im Land.", "Oft in der Nähe von Erdgasfeldern.", "Der Schlamm ist kalt."],
      hu: ["Több mint 350 iszapvulkán található az országban.", "Gyakran földgázmezők közelében fordulnak elő.", "A kilövellt iszap hideg."],
      ro: ["Peste 350 de vulcani noroioși în țară.", "Adesea în apropierea câmpurilor de gaze naturale.", "Noroiul este rece."],
      en: ["More than 350 mud volcanoes in the country.", "Often near natural gas fields.", "The mud erupted is cold."]
    }
  },
  {
    id: "ateshgah-baku-landmarks-v2",
    type: "monument",
    parent: "AZ-BA",
    coords: [50.0058, 40.4154],
    name: { de: "Ateschgah", hu: "Atesgah tűztemplom", ro: "Ateșgah din Baku", en: "Ateshgah of Baku" },
    description: { de: "Ein historischer Tempel der Feueranbeter, der von Hindus, Sikhs und Zoroastriern genutzt wurde.", hu: "Történelmi tűztemplom, amelyet egykor hinduk, szikhek és zoroasztriánusok használtak.", ro: "Un templu istoric al adoratorilor focului, folosit de hinduși, sikh și zoroastrieni.", en: "A historical temple of fire worshipers, used by Hindus, Sikhs, and Zoroastrians." },
    facts: {
      de: ["Im 17. und 18. Jahrhundert erbaut.", "Brennt dank natürlichem Erdgas.", "Aufgebaut wie eine Karawanserei."],
      hu: ["A 17. és 18. században épült.", "Természetes földgáz táplálta a tüzét.", "Karavánszerájhoz hasonló elrendezésű."],
      ro: ["Construit în secolele XVII și XVIII.", "Ardea datorită gazelor naturale.", "Structurat ca un caravanserai."],
      en: ["Built in the 17th and 18th centuries.", "Burned thanks to natural gas.", "Structured like a caravanserai."]
    }
  },
  {
    id: "yanar-dag-landmarks-v2",
    type: "tourist-attraction",
    parent: "AZ-ABS",
    coords: [49.8913, 40.5018],
    name: { de: "Yanar Dağ", hu: "Yanar Dag (Égő hegy)", ro: "Yanar Dag (Muntele de Foc)", en: "Yanar Dag" },
    description: { de: "Ein Erdgasfeuer, das kontinuierlich an einem Hügelhang auf der Abşeron-Halbinsel brennt.", hu: "Folyamatosan égő természeti tűz egy domboldalon az Absheron-félszigeten, amelyet földgáz táplál.", ro: "Un foc de gaze naturale care arde continuu pe un deal din Peninsula Abșeron.", en: "A natural gas fire which blazes continuously on a hillside on the Absheron Peninsula." },
    facts: {
      de: ["Brennt ununterbrochen seit der Antike.", "Die Flammen werden bis zu 3 Meter hoch.", "Brennt unabhängig vom Wetter."],
      hu: ["Az ókor óta folyamatosan ég.", "A lángok akár 3 méter magasra is felcsapnak.", "Az időjárástól függetlenül ég."],
      ro: ["Arde neîntrerupt din antichitate.", "Flăcările ajung până la 3 metri înălțime.", "Arde indiferent de vreme."],
      en: ["Burns continuously since antiquity.", "Flames reach up to 3 meters high.", "Burns regardless of the weather."]
    }
  },
  {
    id: "bibi-heybat-mosque-landmarks-v2",
    type: "landmark",
    parent: "AZ-BA",
    coords: [49.8197, 40.3083],
    name: { de: "Bibi-Heybat-Moschee", hu: "Bibi-Heybat mecset", ro: "Moscheea Bibi-Heybat", en: "Bibi-Heybat Mosque" },
    description: { de: "Eine beeindruckende Moschee, die in den 1990er Jahren originalgetreu rekonstruiert wurde, nachdem sie 1936 zerstört worden war.", hu: "Lenyűgöző mecset, amelyet az 1990-es években építettek újjá, miután 1936-ban lerombolták.", ro: "O moschee impresionantă reconstruită în anii 1990, după ce a fost distrusă în 1936.", en: "An impressive mosque that was reconstructed in the 1990s after being destroyed in 1936." },
    facts: {
      de: ["Originalmoschee stammte aus dem 13. Jahrhundert.", "Enthält das Grab einer Nachfahrin des Propheten Mohammed.", "Zerstört während der Sowjetzeit."],
      hu: ["Az eredeti mecset a 13. században épült.", "Mohamed próféta egyik leszármazottjának sírját őrzi.", "A szovjet időkben rombolták le."],
      ro: ["Moscheea originală data din secolul al XIII-lea.", "Conține mormântul unei descendente a Profetului Mahomed.", "Distrusă în perioada sovietică."],
      en: ["Original mosque dated back to the 13th century.", "Contains the tomb of a descendant of Prophet Muhammad.", "Destroyed during the Soviet era."]
    }
  },
  {
    id: "shaki-khans-palace-landmarks-v2",
    type: "monument",
    parent: "AZ-SAK",
    coords: [47.1977, 41.2052],
    name: { de: "Palast der Schəki-Chane", hu: "Şəki kánok palotája", ro: "Palatul Hanilor din Șaki", en: "Palace of Shaki Khans" },
    description: { de: "Ein historischer Sommerpalast, berühmt für seine prächtigen Buntglasfenster und detailreichen Fresken.", hu: "Történelmi nyári palota, amely csodálatos ólomüveg ablakairól és részletgazdag freskóiról híres.", ro: "Un palat de vară istoric, renumit pentru ferestrele sale magnifice cu vitralii și frescele detaliate.", en: "A historical summer palace renowned for its magnificent stained glass windows and detailed frescoes." },
    facts: {
      de: ["Erbaut im Jahr 1797.", "Verwendet die traditionelle Shebeke-Technik.", "Teil des UNESCO-Welterbes seit 2019."],
      hu: ["1797-ben épült.", "A hagyományos shebeke technikával készült.", "2019 óta az UNESCO Világörökség része."],
      ro: ["Construit în 1797.", "Folosește tehnica tradițională shebeke.", "Parte a Patrimoniului UNESCO din 2019."],
      en: ["Built in 1797.", "Features traditional shebeke technique.", "Part of UNESCO World Heritage since 2019."]
    }
  },
  {
    id: "church-of-kish-landmarks-v2",
    type: "monument",
    parent: "AZ-SAK",
    coords: [47.1931, 41.2483],
    name: { de: "Kirche von Kisch", hu: "Kişi templom", ro: "Biserica din Kiș", en: "Church of Kish" },
    description: { de: "Eine kaukasisch-albanische Kirche in der Nähe von Şəki, eine der ältesten christlichen Stätten im Kaukasus.", hu: "Kaukázusi albán templom Şəki közelében, a Kaukázus egyik legrégebbi keresztény emlékhelye.", ro: "O biserică caucaziano-albaneză lângă Șaki, unul dintre cele mai vechi situri creștine din Caucaz.", en: "A Caucasian Albanian church near Shaki, one of the oldest Christian sites in the Caucasus." },
    facts: {
      de: ["Wurde im 12. Jahrhundert in der heutigen Form erbaut.", "Ursprünge reichen ins 1. Jahrhundert zurück.", "Dient heute als Museum."],
      hu: ["Jelenlegi formájában a 12. században épült.", "Eredete az 1. századig nyúlik vissza.", "Ma múzeumként működik."],
      ro: ["Construită în forma actuală în secolul al XII-lea.", "Originile sale datează din secolul I.", "Astăzi funcționează ca muzeu."],
      en: ["Built in its current form in the 12th century.", "Origins trace back to the 1st century.", "Now serves as a museum."]
    }
  },
  {
    id: "momine-khatun-mausoleum-landmarks-v2",
    type: "monument",
    parent: "AZ-NX",
    coords: [45.4058, 39.2065],
    name: { de: "Möminə-Xatun-Mausoleum", hu: "Möminə Xatun mauzóleum", ro: "Mausoleul Momine Khatun", en: "Momine Khatun Mausoleum" },
    description: { de: "Ein meisterhaftes Baudenkmal aus dem 12. Jahrhundert in Nachitschewan, das die Architektur der Seldschuken-Ära widerspiegelt.", hu: "Mesterien megalkotott 12. századi műemlék Nahicsevánban, amely a szeldzsuk kori építészetet tükrözi.", ro: "Un monument arhitectural magistral din secolul al XII-lea în Nahicevan, reflectând arhitectura epocii selgiucizilor.", en: "A masterful 12th-century monument in Nakhchivan reflecting Seljuk-era architecture." },
    facts: {
      de: ["Entworfen vom Architekten Ajami Nakhchivani.", "Erreicht eine Höhe von etwa 26 Metern.", "Erbaut im Jahr 1186."],
      hu: ["Ajami Nakhchivani építész tervezte.", "Magassága eléri a 26 métert.", "1186-ban épült."],
      ro: ["Proiectat de arhitectul Ajami Nakhchivani.", "Atinge o înălțime de aproximativ 26 de metri.", "Construit în 1186."],
      en: ["Designed by architect Ajami Nakhchivani.", "Reaches a height of about 26 meters.", "Built in 1186."]
    }
  },
  {
    id: "alinja-castle-landmarks-v2",
    type: "monument",
    parent: "AZ-NX",
    coords: [45.6942, 39.1933],
    name: { de: "Alindscha-Burg", hu: "Alinja vár", ro: "Castelul Alinja", en: "Alinja Castle" },
    description: { de: "Eine spektakuläre Festung auf einem steilen Berggipfel, oft als das 'Machu Picchu Aserbaidschans' bezeichnet.", hu: "Látványos erődítmény egy meredek hegycsúcson, amelyet gyakran 'Azerbajdzsán Machu Picchujának' neveznek.", ro: "O fortăreață spectaculoasă pe vârful unui munte abrupt, adesea numită 'Machu Picchu al Azerbaidjanului'.", en: "A spectacular fortress on a steep mountaintop, often called the 'Machu Picchu of Azerbaijan'." },
    facts: {
      de: ["Zählt über 1.500 Stufen zum Gipfel.", "Diente Timur als Festung.", "Bietet einen weiten Blick über die Region."],
      hu: ["Több mint 1500 lépcsőfok vezet a csúcsra.", "Timur Lenk is használta erődítményként.", "Hatalmas panorámát kínál a régióra."],
      ro: ["Are peste 1.500 de trepte până în vârf.", "A servit drept fortăreață pentru Timur.", "Oferă o vedere vastă asupra regiunii."],
      en: ["Features over 1,500 steps to the top.", "Served as a fortress for Timur.", "Offers sweeping views of the region."]
    }
  },
  {
    id: "nizami-mausoleum-landmarks-v2",
    type: "monument",
    parent: "AZ-GA",
    coords: [46.3314, 40.6711],
    name: { de: "Nisami-Mausoleum", hu: "Nizami mauzóleum", ro: "Mausoleul lui Nizami", en: "Nizami Mausoleum" },
    description: { de: "Ein Denkmal in Gandscha, das dem berühmten persischen Dichter Nizami Ganjavi aus dem 12. Jahrhundert gewidmet ist.", hu: "Emlékmű Ganjában, amelyet a híres 12. századi perzsa költőnek, Nizámi Gandzsavínak szenteltek.", ro: "Un monument în Ganja dedicat celebrului poet persan din secolul al XII-lea, Nizami Ganjavi.", en: "A monument in Ganja dedicated to the famous 12th-century Persian poet Nizami Ganjavi." },
    facts: {
      de: ["Ursprünglich im 12. Jahrhundert erbaut.", "Derzeitige Struktur stammt aus dem Jahr 1991.", "Umgeben von einem großen Park."],
      hu: ["Eredetileg a 12. században épült.", "A jelenlegi szerkezet 1991-ből származik.", "Hatalmas park veszi körül."],
      ro: ["Construit inițial în secolul al XII-lea.", "Structura actuală datează din 1991.", "Înconjurat de un parc mare."],
      en: ["Originally built in the 12th century.", "Current structure dates to 1991.", "Surrounded by a large park."]
    }
  },
  {
    id: "diri-baba-mausoleum-landmarks-v2",
    type: "monument",
    parent: "AZ-SMI",
    coords: [48.9408, 40.5317],
    name: { de: "Diri-Baba-Mausoleum", hu: "Diri Baba mauzóleum", ro: "Mausoleul Diri Baba", en: "Diri Baba Mausoleum" },
    description: { de: "Ein faszinierendes zweistöckiges Mausoleum, das im 15. Jahrhundert direkt in eine Felswand gebaut wurde.", hu: "Lenyűgöző kétszintes mauzóleum, amelyet a 15. században egyenesen a sziklafalba építettek.", ro: "Un mausoleu fascinant pe două niveluri, construit direct într-o stâncă în secolul al XV-lea.", en: "A fascinating two-story mausoleum built directly into a cliff face in the 15th century." },
    facts: {
      de: ["Erbaut im Jahr 1402.", "Ein wichtiger Pilgerort.", "Die Architektur harmoniert perfekt mit der Natur."],
      hu: ["1402-ben épült.", "Fontos zarándokhely.", "Építészete tökéletes összhangban van a természettel."],
      ro: ["Construit în 1402.", "Un loc important de pelerinaj.", "Arhitectura se armonizează perfect cu natura."],
      en: ["Built in 1402.", "An important pilgrimage site.", "Architecture perfectly harmonizes with nature."]
    }
  },
  {
    id: "juma-mosque-shamakhi-landmarks-v2",
    type: "monument",
    parent: "AZ-SMI",
    coords: [48.6406, 40.6272],
    name: { de: "Dschuma-Moschee von Şamaxı", hu: "Şamaxı Juma mecset", ro: "Moscheea Juma din Șamahî", en: "Juma Mosque, Shamakhi" },
    description: { de: "Eine der ältesten und größten Moscheen im Kaukasus, die trotz mehrerer Erdbeben erhalten blieb und restauriert wurde.", hu: "A Kaukázus egyik legrégebbi és legnagyobb mecsete, amely számos földrengést túlélt és újjáépült.", ro: "Una dintre cele mai vechi și mari moschei din Caucaz, care a supraviețuit și a fost restaurată după mai multe cutremure.", en: "One of the oldest and largest mosques in the Caucasus, which survived and was restored after several earthquakes." },
    facts: {
      de: ["Ursprünglich im Jahr 743 erbaut.", "Wurde 2013 umfassend restauriert.", "Überstand viele verheerende Erdbeben."],
      hu: ["Eredetileg 743-ban épült.", "2013-ban átfogó felújításon esett át.", "Számos pusztító földrengést élt túl."],
      ro: ["Construită inițial în anul 743.", "Restaurată extensiv în 2013.", "A supraviețuit multor cutremure devastatoare."],
      en: ["Originally built in the year 743.", "Extensively restored in 2013.", "Survived many devastating earthquakes."]
    }
  },
  {
    id: "baku-crystal-hall-landmarks-v2",
    type: "landmark",
    parent: "AZ-BA",
    coords: [49.8450, 40.3444],
    name: { de: "Baku Crystal Hall", hu: "Baku Kristálycsarnok", ro: "Baku Crystal Hall", en: "Baku Crystal Hall" },
    description: { de: "Eine Mehrzweckhalle an der Küste des Kaspischen Meeres, bekannt für die Ausrichtung des Eurovision Song Contest 2012.", hu: "Többcélú aréna a Kaszpi-tenger partján, amely arról ismert, hogy 2012-ben a Eurovíziós Dalfesztivál házigazdája volt.", ro: "O arenă multifuncțională pe coasta Mării Caspice, cunoscută pentru găzduirea Eurovision Song Contest în 2012.", en: "A multi-purpose indoor arena on the coast of the Caspian Sea, known for hosting the 2012 Eurovision Song Contest." },
    facts: {
      de: ["Bietet Platz für bis zu 25.000 Zuschauer.", "In nur acht Monaten erbaut.", "Fassade ist mit LED-Lichtern ausgestattet."],
      hu: ["Akár 25 000 néző befogadására is alkalmas.", "Mindössze nyolc hónap alatt épült fel.", "Homlokzatát LED lámpák világítják meg."],
      ro: ["Poate găzdui până la 25.000 de spectatori.", "Construită în doar opt luni.", "Fațada este echipată cu lumini LED."],
      en: ["Can hold up to 25,000 spectators.", "Built in just eight months.", "Facade is equipped with LED lights."]
    }
  },
  {
    id: "azerbaijan-carpet-museum-landmarks-v2",
    type: "icon",
    parent: "AZ-BA",
    coords: [49.8364, 40.3594],
    name: { de: "Aserbaidschanisches Teppichmuseum", hu: "Azerbajdzsáni Szőnyegmúzeum", ro: "Muzeul Covorului din Azerbaidjan", en: "Azerbaijan Carpet Museum" },
    description: { de: "Ein einzigartiges Museum in Form eines aufgerollten Teppichs, das die größte Sammlung aserbaidschanischer Teppiche beherbergt.", hu: "Egyedülálló, feltekert szőnyeget formázó múzeum, amely az azerbajdzsáni szőnyegek legnagyobb gyűjteményének ad otthont.", ro: "Un muzeu unic în formă de covor rulat, care găzduiește cea mai mare colecție de covoare azere.", en: "A unique museum shaped like a rolled carpet, housing the largest collection of Azerbaijani carpets." },
    facts: {
      de: ["Gebäude wurde von Franz Janz entworfen.", "Eröffnet im aktuellen Gebäude 2014.", "Beherbergt über 10.000 Ausstellungsstücke."],
      hu: ["Az épületet Franz Janz tervezte.", "Jelenlegi épületét 2014-ben nyitották meg.", "Több mint 10 000 kiállítási tárgyat őriz."],
      ro: ["Clădirea a fost proiectată de Franz Janz.", "Deschis în clădirea actuală în 2014.", "Găzduiește peste 10.000 de exponate."],
      en: ["Building designed by Franz Janz.", "Opened in current building in 2014.", "Houses over 10,000 exhibits."]
    }
  },
  {
    id: "shaki-caravanserai-landmarks-v2",
    type: "monument",
    parent: "AZ-SAK",
    coords: [47.1975, 41.2044],
    name: { de: "Karawanserei von Şəki", hu: "Şəki karavánszeráj", ro: "Caravanseraiul din Șaki", en: "Shaki Caravanserai" },
    description: { de: "Ein historisches Gasthaus aus dem 18. Jahrhundert an der Seidenstraße, das Händlern und Reisenden Unterschlupf bot.", hu: "18. századi történelmi fogadó a Selyemúton, amely egykor kereskedőknek és utazóknak nyújtott menedéket.", ro: "Un han istoric din secolul al XVIII-lea de pe Drumul Mătăsii, care oferea adăpost negustorilor și călătorilor.", en: "An 18th-century historical inn on the Silk Road that provided shelter for merchants and travelers." },
    facts: {
      de: ["Eine der größten Karawansereien im Kaukasus.", "Wird heute teilweise als Hotel genutzt.", "Verfügt über prächtige Torbögen."],
      hu: ["A Kaukázus egyik legnagyobb karavánszerája.", "Ma részben szállodaként működik.", "Gyönyörű boltíves kapukkal rendelkezik."],
      ro: ["Unul dintre cele mai mari caravanseraiuri din Caucaz.", "Astăzi este parțial folosit ca hotel.", "Are arcade magnifice."],
      en: ["One of the largest caravanserais in the Caucasus.", "Partially used as a hotel today.", "Features magnificent archways."]
    }
  },
  {
    id: "lahij-village-landmarks-v2",
    type: "tourist-attraction",
    parent: "AZ-ISM",
    coords: [48.3842, 40.8617],
    name: { de: "Lahıc", hu: "Lahıc", ro: "Lahic", en: "Lahij" },
    description: { de: "Ein malerisches Bergdorf, das für seine gepflasterten Straßen und die traditionelle Kupferhandwerkskunst berühmt ist.", hu: "Festői hegyi falu, amely macskaköves utcáiról és hagyományos rézműves mesterségéről híres.", ro: "Un sat de munte pitoresc, renumit pentru străzile sale pietruite și meșteșugul tradițional al cuprului.", en: "A picturesque mountain village famous for its cobbled streets and traditional copper craftsmanship." },
    facts: {
      de: ["Liegt in den Südhängen des Großen Kaukasus.", "Kupferhandwerk ist UNESCO-Kulturerbe.", "Hat ein uraltes Abwassersystem."],
      hu: ["A Nagy-Kaukázus déli lejtőin fekszik.", "A rézművesség az UNESCO szellemi kulturális öröksége.", "Ősi csatornarendszerrel rendelkezik."],
      ro: ["Situat pe pantele sudice ale Caucazului Mare.", "Meșteșugul cuprului este patrimoniu cultural UNESCO.", "Are un sistem de canalizare străvechi."],
      en: ["Located in the southern slopes of Greater Caucasus.", "Copper craft is UNESCO cultural heritage.", "Features an ancient sewage system."]
    }
  }
];