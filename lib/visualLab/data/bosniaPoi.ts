import type { POI } from "./poi";

export const bosniaCountry: POI = {
  id: "bosnia",
  type: "country",
  name: { de: "Bosnien und Herzegowina", hu: "Bosznia-Hercegovina", ro: "Bosnia și Herțegovina", en: "Bosnia and Herzegovina" },
  shortDesc: {
    de: "Ein Land auf der Balkanhalbinsel in Südosteuropa.",
    hu: "Délkelet-Európában, a Balkán-félszigeten található ország.",
    ro: "O țară situată în Peninsula Balcanică din Europa de Sud-Est.",
    en: "A country on the Balkan Peninsula in Southeastern Europe."
  },
  lat: 43.9159,
  lng: 17.6791,
};

export const bosniaPois: POI[] = [
  {
    id: "ba-sarajevo",
    type: "city",
    name: { de: "Sarajevo", hu: "Szarajevó", ro: "Sarajevo", en: "Sarajevo" },
    shortDesc: {
      de: "Die Hauptstadt und größte Stadt von Bosnien und Herzegowina, bekannt für ihre kulturelle und religiöse Vielfalt.",
      hu: "Bosznia-Hercegovina fővárosa és legnagyobb városa, amely kulturális és vallási sokszínűségéről ismert.",
      ro: "Capitala și cel mai mare oraș din Bosnia și Herțegovina, cunoscut pentru diversitatea sa culturală și religioasă.",
      en: "The capital and largest city of Bosnia and Herzegovina, known for its cultural and religious diversity."
    },
    lat: 43.8563,
    lng: 18.4131,
    parent: "BA",
  },
  {
    id: "ba-banjaluka",
    type: "city",
    name: { de: "Banja Luka", hu: "Banja Luka", ro: "Banja Luka", en: "Banja Luka" },
    shortDesc: {
      de: "Die zweitgrößte Stadt in Bosnien und Herzegowina und de facto die Hauptstadt der Republika Srpska.",
      hu: "Bosznia-Hercegovina második legnagyobb városa, a Szerb Köztársaság de facto fővárosa.",
      ro: "Al doilea oraș ca mărime din Bosnia și Herțegovina și capitala de facto a Republika Srpska.",
      en: "The second largest city in Bosnia and Herzegovina and the de facto capital of Republika Srpska."
    },
    lat: 44.7722,
    lng: 17.1910,
    parent: "BA",
  },
  {
    id: "ba-mostar",
    type: "city",
    name: { de: "Mostar", hu: "Mostar", ro: "Mostar", en: "Mostar" },
    shortDesc: {
      de: "Historische Stadt in der Herzegowina, berühmt für die rekonstruierte Alte Brücke (Stari Most).",
      hu: "Hercegovina történelmi városa, amely a helyreállított Öreg hídról (Stari Most) híres.",
      ro: "Oraș istoric din Herțegovina, faimos pentru Podul Vechi (Stari Most) reconstruit.",
      en: "Historic city in Herzegovina, famous for the reconstructed Old Bridge (Stari Most)."
    },
    lat: 43.3438,
    lng: 17.8078,
    parent: "BA",
  },
  {
    id: "ba-tuzla",
    type: "city",
    name: { de: "Tuzla", hu: "Tuzla", ro: "Tuzla", en: "Tuzla" },
    shortDesc: {
      de: "Eine der größten Städte, bekannt für ihre Salzseen und industrielle Bedeutung.",
      hu: "Az egyik legnagyobb város, amely sóstavairól és ipari jelentőségéről ismert.",
      ro: "Unul dintre cele mai mari orașe, cunoscut pentru lacurile sale sărate și importanța industrială.",
      en: "One of the largest cities, known for its salt lakes and industrial importance."
    },
    lat: 44.5328,
    lng: 18.6670,
    parent: "BA",
  },
  {
    id: "ba-zenica",
    type: "city",
    name: { de: "Zenica", hu: "Zenica", ro: "Zenica", en: "Zenica" },
    shortDesc: {
      de: "Wichtige Industriestadt im zentralen Teil des Landes, gelegen am Fluss Bosna.",
      hu: "Fontos ipari város az ország középső részén, a Boszna folyó partján.",
      ro: "Important oraș industrial în partea centrală a țării, situat pe râul Bosna.",
      en: "Important industrial city in the central part of the country, located on the Bosna river."
    },
    lat: 44.2017,
    lng: 17.9040,
    parent: "BA",
  },
  {
    id: "ba-bihac",
    type: "city",
    name: { de: "Bihać", hu: "Bihać", ro: "Bihać", en: "Bihać" },
    shortDesc: {
      de: "Stadt im Nordwesten, am Fluss Una gelegen, ein Zentrum für Naturtourismus.",
      hu: "Északnyugati város az Una folyó partján, a természeti turizmus egyik központja.",
      ro: "Oraș în nord-vest, situat pe râul Una, un centru pentru turismul de natură.",
      en: "City in the northwest, located on the Una river, a center for nature tourism."
    },
    lat: 44.8169,
    lng: 15.8708,
    parent: "BA",
  },
  {
    id: "ba-starimost",
    type: "landmark",
    name: { de: "Stari Most", hu: "Öreg híd", ro: "Stari Most", en: "Stari Most" },
    shortDesc: {
      de: "Die berühmte osmanische Brücke aus dem 16. Jahrhundert in Mostar.",
      hu: "A híres 16. századi oszmán híd Mostarban.",
      ro: "Faimosul pod otoman din secolul al XVI-lea din Mostar.",
      en: "The famous 16th-century Ottoman bridge in Mostar."
    },
    lat: 43.3373,
    lng: 17.8150,
    parent: "BA",
  },
  {
    id: "ba-visegrad",
    type: "landmark",
    name: { de: "Mehmed-Paša-Sokolović-Brücke", hu: "Szokollu Mehmed pasa hídja", ro: "Podul Mehmed Paša Sokolović", en: "Mehmed Paša Sokolović Bridge" },
    shortDesc: {
      de: "Eine historische Brücke in Višegrad, UNESCO-Weltkulturerbe.",
      hu: "Történelmi híd Višegradban, az UNESCO Világörökség része.",
      ro: "Un pod istoric în Višegrad, sit al Patrimoniului Mondial UNESCO.",
      en: "A historic bridge in Višegrad, a UNESCO World Heritage Site."
    },
    lat: 43.7825,
    lng: 19.2881,
    parent: "BA",
  },
  {
    id: "ba-jajce",
    type: "landmark",
    name: { de: "Jajce Festung und Wasserfall", hu: "Jajca vára és vízesése", ro: "Cetatea și cascada Jajce", en: "Jajce Fortress and Waterfall" },
    shortDesc: {
      de: "Eine historische Königsstadt mit einem beeindruckenden Wasserfall mitten in der Stadt.",
      hu: "Történelmi királyi város lenyűgöző vízeséssel a város közepén.",
      ro: "Un oraș regal istoric cu o cascadă impresionantă în mijlocul orașului.",
      en: "A historic royal town with an impressive waterfall right in the city center."
    },
    lat: 44.3384,
    lng: 17.2694,
    parent: "BA",
  },
  {
    id: "ba-travnik",
    type: "landmark",
    name: { de: "Festung Travnik", hu: "Travnik vára", ro: "Cetatea Travnik", en: "Travnik Fortress" },
    shortDesc: {
      de: "Gut erhaltene Burg in Travnik, der ehemaligen Hauptstadt der osmanischen Wesire.",
      hu: "Jól karbantartott vár Travnikban, az oszmán vezírek egykori fővárosában.",
      ro: "Cetate bine conservată din Travnik, fosta capitală a vizirilor otomani.",
      en: "Well-preserved castle in Travnik, the former capital of the Ottoman viziers."
    },
    lat: 44.2281,
    lng: 17.6653,
    parent: "BA",
  },
  {
    id: "ba-bascarsija",
    type: "landmark",
    name: { de: "Baščaršija", hu: "Baščaršija", ro: "Baščaršija", en: "Baščaršija" },
    shortDesc: {
      de: "Der alte Basar und das historische und kulturelle Zentrum von Sarajevo.",
      hu: "Szarajevó régi bazárja és történelmi, kulturális központja.",
      ro: "Vechiul bazar și centrul istoric și cultural al orașului Sarajevo.",
      en: "The old bazaar and the historical and cultural center of Sarajevo."
    },
    lat: 43.8597,
    lng: 18.4312,
    parent: "BA",
  },
  {
    id: "ba-srebrenik",
    type: "landmark",
    name: { de: "Festung Srebrenik", hu: "Srebreniki vár", ro: "Cetatea Srebrenik", en: "Srebrenik Fortress" },
    shortDesc: {
      de: "Eine der besterhaltenen mittelalterlichen Festungen in Bosnien und Herzegowina.",
      hu: "Bosznia-Hercegovina egyik legépebben fennmaradt középkori vára.",
      ro: "Una dintre cele mai bine conservate cetăți medievale din Bosnia și Herțegovina.",
      en: "One of the best-preserved medieval fortresses in Bosnia and Herzegovina."
    },
    lat: 44.7061,
    lng: 18.5303,
    parent: "BA",
  },
  {
    id: "ba-blagaj",
    type: "landmark",
    name: { de: "Blagaj Tekija", hu: "Blagaj Tekija", ro: "Blagaj Tekke", en: "Blagaj Tekke" },
    shortDesc: {
      de: "Ein historisches Derwischkloster, malerisch an der Quelle der Buna gelegen.",
      hu: "Történelmi dervis kolostor, amely festői környezetben, a Buna folyó forrásánál fekszik.",
      ro: "O mănăstire istorică de derviși, situată pitoresc la izvorul râului Buna.",
      en: "A historic Dervish monastery, picturesquely situated at the source of the Buna river."
    },
    lat: 43.2568,
    lng: 17.8964,
    parent: "BA",
  },
  {
    id: "ba-pocitelj",
    type: "landmark",
    name: { de: "Počitelj", hu: "Počitelj", ro: "Počitelj", en: "Počitelj" },
    shortDesc: {
      de: "Ein historisches befestigtes Dorf am Ufer der Neretva.",
      hu: "Történelmi erődített falu a Neretva partján.",
      ro: "Un sat istoric fortificat pe malul râului Neretva.",
      en: "A historic fortified village on the banks of the Neretva."
    },
    lat: 43.1340,
    lng: 17.7317,
    parent: "BA",
  },
  {
    id: "ba-kravica",
    type: "nature",
    name: { de: "Kravica-Wasserfälle", hu: "Kravica-vízesés", ro: "Cascada Kravica", en: "Kravica Waterfall" },
    shortDesc: {
      de: "Eine große Tuffsteinkaskade am Fluss Trebižat im karstartigen Herzen der Herzegowina.",
      hu: "Nagy mésztufa vízesés a Trebižat folyón, Hercegovina karsztos szívében.",
      ro: "O mare cascadă de tuf calcaros pe râul Trebižat, în inima carstică a Herțegovinei.",
      en: "A large tufa cascade on the Trebižat River, in the karstic heart of Herzegovina."
    },
    lat: 43.1581,
    lng: 17.6083,
    parent: "BA",
  },
  {
    id: "ba-una",
    type: "nature",
    name: { de: "Nationalpark Una", hu: "Una Nemzeti Park", ro: "Parcul Național Una", en: "Una National Park" },
    shortDesc: {
      de: "Ein Nationalpark zum Schutz des unberührten Flusses Una und seiner Nebenflüsse.",
      hu: "Nemzeti park az érintetlen Una folyó és mellékfolyóinak védelmére.",
      ro: "Un parc național înființat pentru a proteja râul virgin Una și afluenții săi.",
      en: "A national park established to protect the unspoiled Una river and its tributaries."
    },
    lat: 44.5947,
    lng: 16.0967,
    parent: "BA",
  },
  {
    id: "ba-sutjeska",
    type: "nature",
    name: { de: "Nationalpark Sutjeska", hu: "Sutjeska Nemzeti Park", ro: "Parcul Național Sutjeska", en: "Sutjeska National Park" },
    shortDesc: {
      de: "Der älteste Nationalpark Bosniens, Heimat des Urwalds Perućica und des Maglić.",
      hu: "Bosznia legrégebbi nemzeti parkja, a Perućica őserdő és a Maglić hegy otthona.",
      ro: "Cel mai vechi parc național din Bosnia, adăpostind pădurea primordială Perućica și muntele Maglić.",
      en: "Bosnia's oldest national park, home to the Perućica primeval forest and Mount Maglić."
    },
    lat: 43.3444,
    lng: 18.6872,
    parent: "BA",
  },
  {
    id: "ba-pliva",
    type: "nature",
    name: { de: "Pliva-Seen", hu: "Pliva-tavak", ro: "Lacurile Pliva", en: "Pliva Lakes" },
    shortDesc: {
      de: "Zwei Seen in der Nähe von Jajce, bekannt für ihre traditionellen hölzernen Wassermühlen.",
      hu: "Két tó Jajca közelében, amelyek hagyományos fa vízimalmaikról ismertek.",
      ro: "Două lacuri lângă Jajce, cunoscute pentru morile tradiționale de apă din lemn.",
      en: "Two lakes near Jajce, known for their traditional wooden watermills."
    },
    lat: 44.3486,
    lng: 17.2289,
    parent: "BA",
  },
  {
    id: "ba-jahorina",
    type: "nature",
    name: { de: "Jahorina", hu: "Jahorina", ro: "Jahorina", en: "Jahorina" },
    shortDesc: {
      de: "Ein Berg in der Nähe von Sarajevo, bekannt als Austragungsort der Olympischen Winterspiele 1984.",
      hu: "Szarajevó melletti hegy, amely az 1984-es téli olimpia helyszíneként ismert.",
      ro: "Un munte lângă Sarajevo, cunoscut ca gazdă a Jocurilor Olimpice de Iarnă din 1984.",
      en: "A mountain near Sarajevo, known for hosting the 1984 Winter Olympics."
    },
    lat: 43.7381,
    lng: 18.5636,
    parent: "BA",
  },
  {
    id: "ba-medjugorje",
    type: "culture",
    name: { de: "Međugorje", hu: "Međugorje", ro: "Međugorje", en: "Medjugorje" },
    shortDesc: {
      de: "Ein bedeutender katholischer Wallfahrtsort aufgrund von Marienerscheinungen.",
      hu: "Jelentős katolikus zarándokhely a Mária-jelenések miatt.",
      ro: "Un loc de pelerinaj catolic major, faimos pentru aparițiile Fecioarei Maria.",
      en: "A major Catholic pilgrimage site famous for apparitions of the Virgin Mary."
    },
    lat: 43.1908,
    lng: 17.6756,
    parent: "BA",
  },
  {
    id: "ba-film-festival",
    type: "culture",
    name: { de: "Sarajevo Film Festival", hu: "Szarajevói Filmfesztivál", ro: "Festivalul de Film de la Sarajevo", en: "Sarajevo Film Festival" },
    shortDesc: {
      de: "Das wichtigste und größte Filmfestival auf dem Balkan.",
      hu: "A Balkán legfontosabb és legnagyobb filmfesztiválja.",
      ro: "Cel mai important și cel mai mare festival de film din Balcani.",
      en: "The premier and largest film festival in the Balkans."
    },
    lat: 43.8560,
    lng: 18.4135,
    parent: "BA",
  },
  {
    id: "ba-blidinje",
    type: "nature",
    name: { de: "Naturpark Blidinje", hu: "Blidinje Natúrpark", ro: "Parcul Natural Blidinje", en: "Blidinje Nature Park" },
    shortDesc: {
      de: "Ein weites Gebirgsplateau mit reichhaltiger Flora und Fauna sowie stećci (historischen Grabsteinen).",
      hu: "Hatalmas hegyi fennsík gazdag növény- és állatvilággal, valamint stećci-kel (történelmi sírkövekkel).",
      ro: "Un vast platou montan cu floră și faună bogată, și stećci (pietre funerare istorice).",
      en: "A vast mountain plateau featuring rich flora and fauna, and stećci (historic tombstones)."
    },
    lat: 43.6064,
    lng: 17.5855,
    parent: "BA",
  },
  {
    id: "ba-trebinje",
    type: "city",
    name: { de: "Trebinje", hu: "Trebinje", ro: "Trebinje", en: "Trebinje" },
    shortDesc: {
      de: "Die südlichste Stadt in Bosnien und Herzegowina, bekannt für ihr sonniges Klima und Weinbau.",
      hu: "Bosznia-Hercegovina legdélibb városa, amely napos éghajlatáról és borászatáról ismert.",
      ro: "Cel mai sudic oraș din Bosnia și Herțegovina, cunoscut pentru clima sa însorită și viticultură.",
      en: "The southernmost city in Bosnia and Herzegovina, known for its sunny climate and winemaking."
    },
    lat: 42.7114,
    lng: 18.3436,
    parent: "BA",
  },
  {
    id: "ba-vranduk",
    type: "landmark",
    name: { de: "Festung Vranduk", hu: "Vranduki vár", ro: "Cetatea Vranduk", en: "Vranduk Fortress" },
    shortDesc: {
      de: "Mittelalterliche Burg in der Nähe von Zenica, einst Sitz der bosnischen Könige.",
      hu: "Középkori vár Zenica közelében, egykor a bosnyák királyok székhelye.",
      ro: "Castel medieval lângă Zenica, odinioară sediul regilor bosniaci.",
      en: "Medieval castle near Zenica, once the seat of Bosnian kings."
    },
    lat: 44.2925,
    lng: 17.9042,
    parent: "BA",
  },
  {
    id: "ba-hutovo-blato",
    type: "nature",
    name: { de: "Naturpark Hutovo Blato", hu: "Hutovo Blato Natúrpark", ro: "Parcul Natural Hutovo Blato", en: "Hutovo Blato Nature Park" },
    shortDesc: {
      de: "Eines der wichtigsten Vogelschutzgebiete in Europa.",
      hu: "Európa egyik legfontosabb madárvédelmi területe.",
      ro: "Una dintre cele mai importante rezervații de păsări din Europa.",
      en: "One of the most important bird reserves in Europe."
    },
    lat: 43.0566,
    lng: 17.7816,
    parent: "BA",
  },
  {
    id: "ba-doboj",
    type: "city",
    name: { de: "Doboj", hu: "Doboj", ro: "Doboj", en: "Doboj" },
    shortDesc: {
      de: "Wichtiger Verkehrsknotenpunkt und Standort einer beeindruckenden Burg aus dem 13. Jahrhundert.",
      hu: "Fontos közlekedési csomópont és egy lenyűgöző 13. századi vár helyszíne.",
      ro: "Nod de transport major și locația unui castel impresionant din secolul al XIII-lea.",
      en: "Major transportation hub and site of an impressive 13th-century castle."
    },
    lat: 44.7333,
    lng: 18.0833,
    parent: "BA",
  },
  {
    id: "ba-prijedor",
    type: "city",
    name: { de: "Prijedor", hu: "Prijedor", ro: "Prijedor", en: "Prijedor" },
    shortDesc: {
      de: "Eine der größten Städte in der Region Bosanska Krajina.",
      hu: "A Bosanska Krajina régió egyik legnagyobb városa.",
      ro: "Unul dintre cele mai mari orașe din regiunea Bosanska Krajina.",
      en: "One of the largest cities in the Bosanska Krajina region."
    },
    lat: 44.9799,
    lng: 16.7140,
    parent: "BA",
  },
  {
    id: "ba-lukomir",
    type: "nature",
    name: { de: "Lukomir", hu: "Lukomir", ro: "Lukomir", en: "Lukomir" },
    shortDesc: {
      de: "Das höchste und isolierteste Dorf in Bosnien und Herzegowina, auf dem Berg Bjelašnica.",
      hu: "Bosznia-Hercegovina legmagasabban fekvő és legelszigeteltebb faluja a Bjelašnica-hegyen.",
      ro: "Cel mai înalt și mai izolat sat din Bosnia și Herțegovina, pe muntele Bjelašnica.",
      en: "The highest and most isolated village in Bosnia and Herzegovina, on Mount Bjelašnica."
    },
    lat: 43.6333,
    lng: 18.1833,
    parent: "BA",
  },
  {
    id: "ba-tvrkos",
    type: "culture",
    name: { de: "Kloster Tvrdoš", hu: "Tvrdoš kolostor", ro: "Mănăstirea Tvrdoš", en: "Tvrdoš Monastery" },
    shortDesc: {
      de: "Ein serbisch-orthodoxes Kloster aus dem 15. Jahrhundert nahe Trebinje, berühmt für seinen Wein.",
      hu: "Egy 15. századi szerb ortodox kolostor Trebinje közelében, amely boráról is híres.",
      ro: "O mănăstire ortodoxă sârbă din secolul al XV-lea lângă Trebinje, renumită pentru vinul său.",
      en: "A 15th-century Serbian Orthodox monastery near Trebinje, famous for its wine."
    },
    lat: 42.7161,
    lng: 18.2885,
    parent: "BA",
  },
  {
    id: "ba-bjelasnica",
    type: "nature",
    name: { de: "Bjelašnica", hu: "Bjelašnica", ro: "Bjelašnica", en: "Bjelašnica" },
    shortDesc: {
      de: "Berg in der Nähe von Sarajevo, bekannt als Austragungsort der Olympischen Winterspiele.",
      hu: "Szarajevó melletti hegy, amely az olimpiai játékok helyszíneként ismert.",
      ro: "Munte lângă Sarajevo, cunoscut ca gazdă a Jocurilor Olimpice.",
      en: "Mountain near Sarajevo, known for hosting the Olympic Games."
    },
    lat: 43.7042,
    lng: 18.2572,
    parent: "BA",
  }
];

export const bosniaAllPoi = [bosniaCountry, ...bosniaPois];
